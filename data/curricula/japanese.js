// Japanese curriculum
(function(global){
  'use strict';
  var UNITS = [
    {
        "id": "u1",
        "name": "Unit 1",
        "goal": "By the end of this unit, learners can greet people appropriately and introduce themselves with basic personal details. Grammar/vocabulary focus: Hiragana time-of-day greetings, です copula, no-copula-free nominal sentences, self-introduction pattern.",
        "level": "A1",
        "lessonIds": [
            "ja-u1-l1",
            "ja-u1-l2",
            "ja-u1-l3",
            "ja-u1-l4",
            "ja-u1-l5"
        ]
    },
    {
        "id": "u2",
        "name": "Unit 2",
        "goal": "By the end of this unit, learners can state numbers, tell time, and talk about dates and days of the week. Grammar/vocabulary focus: Numbers 1–100, counters つ/こ intro, telling time with 時/分, days of the week and dates.",
        "level": "A1",
        "lessonIds": [
            "ja-u2-l1",
            "ja-u2-l2",
            "ja-u2-l3",
            "ja-u2-l4",
            "ja-u2-l5"
        ]
    },
    {
        "id": "u3",
        "name": "Unit 3",
        "goal": "By the end of this unit, learners can describe their immediate family and other people using simple sentences. Grammar/vocabulary focus: Family terms (in-group vs. out-group forms), の possessive particle, existence verbs います/あります.",
        "level": "A1",
        "lessonIds": [
            "ja-u3-l1",
            "ja-u3-l2",
            "ja-u3-l3",
            "ja-u3-l4",
            "ja-u3-l5"
        ]
    },
    {
        "id": "u4",
        "name": "Unit 4",
        "goal": "By the end of this unit, learners can form basic present-tense sentences describing states and actions. Grammar/vocabulary focus: は (topic) vs. が (subject) particles, ます-form present tense, basic SOV word order.",
        "level": "A1",
        "lessonIds": [
            "ja-u4-l1",
            "ja-u4-l2",
            "ja-u4-l3",
            "ja-u4-l4",
            "ja-u4-l5"
        ]
    },
    {
        "id": "u5",
        "name": "Unit 5",
        "goal": "By the end of this unit, learners can describe a typical daily routine using common action verbs. Grammar/vocabulary focus: ます-form daily routine verbs, time particle に, sequencing actions with the て-form.",
        "level": "A1",
        "lessonIds": [
            "ja-u5-l1",
            "ja-u5-l2",
            "ja-u5-l3",
            "ja-u5-l4",
            "ja-u5-l5"
        ]
    },
    {
        "id": "u6",
        "name": "Unit 6",
        "goal": "By the end of this unit, learners can order food and drink and talk about likes and dislikes at a basic level. Grammar/vocabulary focus: Food vocabulary, を direct-object particle, ほしい/たい desire forms, polite requests with 〜をください.",
        "level": "A1",
        "lessonIds": [
            "ja-u6-l1",
            "ja-u6-l2",
            "ja-u6-l3",
            "ja-u6-l4",
            "ja-u6-l5"
        ]
    },
    {
        "id": "u7",
        "name": "Unit 7",
        "goal": "By the end of this unit, learners can narrate simple completed past events. Grammar/vocabulary focus: た-form past tense (plain & polite), でした past copula.",
        "level": "A2",
        "lessonIds": [
            "ja-u7-l1",
            "ja-u7-l2",
            "ja-u7-l3",
            "ja-u7-l4",
            "ja-u7-l5"
        ]
    },
    {
        "id": "u8",
        "name": "Unit 8",
        "goal": "By the end of this unit, learners can shop for goods, discuss prices, and compare items. Grammar/vocabulary focus: お金 and price counters (円), comparative 〜より, ほうがいい recommendations.",
        "level": "A2",
        "lessonIds": [
            "ja-u8-l1",
            "ja-u8-l2",
            "ja-u8-l3",
            "ja-u8-l4",
            "ja-u8-l5"
        ]
    },
    {
        "id": "u9",
        "name": "Unit 9",
        "goal": "By the end of this unit, learners can ask for and give directions and describe how to get somewhere. Grammar/vocabulary focus: Place particles で vs. に, giving directions (右/左/まっすぐ), 〜てください requests.",
        "level": "A2",
        "lessonIds": [
            "ja-u9-l1",
            "ja-u9-l2",
            "ja-u9-l3",
            "ja-u9-l4",
            "ja-u9-l5"
        ]
    },
    {
        "id": "u10",
        "name": "Unit 10",
        "goal": "By the end of this unit, learners can describe their home and daily surroundings in more detail. Grammar/vocabulary focus: て-form clause chaining for description, い-adjectives vs. な-adjectives, 〜があります existence.",
        "level": "A2",
        "lessonIds": [
            "ja-u10-l1",
            "ja-u10-l2",
            "ja-u10-l3",
            "ja-u10-l4",
            "ja-u10-l5"
        ]
    },
    {
        "id": "u11",
        "name": "Unit 11",
        "goal": "By the end of this unit, learners can talk about health, body parts, and give simple medical descriptions. Grammar/vocabulary focus: Body vocabulary, 〜が痛い pain construction, 〜なければならない obligation.",
        "level": "A2",
        "lessonIds": [
            "ja-u11-l1",
            "ja-u11-l2",
            "ja-u11-l3",
            "ja-u11-l4",
            "ja-u11-l5"
        ]
    },
    {
        "id": "u12",
        "name": "Unit 12",
        "goal": "By the end of this unit, learners can discuss future plans and describe the weather. Grammar/vocabulary focus: Volitional form 〜よう/〜ましょう, weather vocabulary, plans with 〜つもり.",
        "level": "A2",
        "lessonIds": [
            "ja-u12-l1",
            "ja-u12-l2",
            "ja-u12-l3",
            "ja-u12-l4",
            "ja-u12-l5"
        ]
    },
    {
        "id": "u13",
        "name": "Unit 13",
        "goal": "By the end of this unit, learners can talk about their job or studies and ongoing actions. Grammar/vocabulary focus: て-form + いる progressive/habitual aspect, job/study vocabulary, 〜ことができる ability.",
        "level": "B1",
        "lessonIds": [
            "ja-u13-l1",
            "ja-u13-l2",
            "ja-u13-l3",
            "ja-u13-l4",
            "ja-u13-l5"
        ]
    },
    {
        "id": "u14",
        "name": "Unit 14",
        "goal": "By the end of this unit, learners can express opinions and preferences with simple justification. Grammar/vocabulary focus: 〜と思う opinion marker, 〜が好き/嫌い preference, comparing options.",
        "level": "B1",
        "lessonIds": [
            "ja-u14-l1",
            "ja-u14-l2",
            "ja-u14-l3",
            "ja-u14-l4",
            "ja-u14-l5"
        ]
    },
    {
        "id": "u15",
        "name": "Unit 15",
        "goal": "By the end of this unit, learners can plan a trip and describe past travel experiences. Grammar/vocabulary focus: て-form requests for travel, 〜たことがある experience, plans with 〜予定.",
        "level": "B1",
        "lessonIds": [
            "ja-u15-l1",
            "ja-u15-l2",
            "ja-u15-l3",
            "ja-u15-l4",
            "ja-u15-l5"
        ]
    },
    {
        "id": "u16",
        "name": "Unit 16",
        "goal": "By the end of this unit, learners can discuss hypothetical situations and simple conditions. Grammar/vocabulary focus: Conditional forms たら/ば/と, simple hypothetical scenarios.",
        "level": "B1",
        "lessonIds": [
            "ja-u16-l1",
            "ja-u16-l2",
            "ja-u16-l3",
            "ja-u16-l4",
            "ja-u16-l5"
        ]
    },
    {
        "id": "u17",
        "name": "Unit 17",
        "goal": "By the end of this unit, learners can understand and discuss media content and report what others said. Grammar/vocabulary focus: Passive voice 〜られる, media vocabulary, quoting with 〜と言っていた.",
        "level": "B1",
        "lessonIds": [
            "ja-u17-l1",
            "ja-u17-l2",
            "ja-u17-l3",
            "ja-u17-l4",
            "ja-u17-l5"
        ]
    },
    {
        "id": "u18",
        "name": "Unit 18",
        "goal": "By the end of this unit, learners can talk about relationships and emotions in more nuanced ways. Grammar/vocabulary focus: Giving/receiving あげる/もらう/くれる, emotion adjectives, causative 〜させる.",
        "level": "B1",
        "lessonIds": [
            "ja-u18-l1",
            "ja-u18-l2",
            "ja-u18-l3",
            "ja-u18-l4",
            "ja-u18-l5"
        ]
    },
    {
        "id": "u19",
        "name": "Unit 19",
        "goal": "By the end of this unit, learners can debate abstract topics and support opinions with reasons. Grammar/vocabulary focus: 〜べきだ obligation/opinion, formal debate connectors (しかし、それに対して).",
        "level": "B2",
        "lessonIds": [
            "ja-u19-l1",
            "ja-u19-l2",
            "ja-u19-l3",
            "ja-u19-l4",
            "ja-u19-l5"
        ]
    },
    {
        "id": "u20",
        "name": "Unit 20",
        "goal": "By the end of this unit, learners can adjust tone and vocabulary between formal and informal contexts. Grammar/vocabulary focus: Keigo overview: 尊敬語 vs. 謙譲語, register shifts between casual and formal speech.",
        "level": "B2",
        "lessonIds": [
            "ja-u20-l1",
            "ja-u20-l2",
            "ja-u20-l3",
            "ja-u20-l4",
            "ja-u20-l5"
        ]
    },
    {
        "id": "u21",
        "name": "Unit 21",
        "goal": "By the end of this unit, learners can report what someone else said and narrate complex event sequences. Grammar/vocabulary focus: Reported speech 〜そうだ/〜らしい, narrative て-form chaining across long sequences.",
        "level": "B2",
        "lessonIds": [
            "ja-u21-l1",
            "ja-u21-l2",
            "ja-u21-l3",
            "ja-u21-l4",
            "ja-u21-l5"
        ]
    },
    {
        "id": "u22",
        "name": "Unit 22",
        "goal": "By the end of this unit, learners can discuss more complex hypothetical and counterfactual situations. Grammar/vocabulary focus: Advanced conditionals 〜としたら/〜にしても, counterfactual regret 〜ばよかった.",
        "level": "B2",
        "lessonIds": [
            "ja-u22-l1",
            "ja-u22-l2",
            "ja-u22-l3",
            "ja-u22-l4",
            "ja-u22-l5"
        ]
    },
    {
        "id": "u23",
        "name": "Unit 23",
        "goal": "By the end of this unit, learners can discuss environmental and social issues with supporting detail. Grammar/vocabulary focus: 〜によって causal/agentive marking, passive causative for social commentary, environment vocabulary.",
        "level": "B2",
        "lessonIds": [
            "ja-u23-l1",
            "ja-u23-l2",
            "ja-u23-l3",
            "ja-u23-l4",
            "ja-u23-l5"
        ]
    },
    {
        "id": "u24",
        "name": "Unit 24",
        "goal": "By the end of this unit, learners can use common idiomatic expressions naturally in conversation. Grammar/vocabulary focus: Yojijukugo (四字熟語) intro, set social expressions (お疲れ様です, よろしくお願いします).",
        "level": "B2",
        "lessonIds": [
            "ja-u24-l1",
            "ja-u24-l2",
            "ja-u24-l3",
            "ja-u24-l4",
            "ja-u24-l5"
        ]
    },
    {
        "id": "u25",
        "name": "Unit 25",
        "goal": "By the end of this unit, learners can construct nuanced arguments with supporting and opposing viewpoints. Grammar/vocabulary focus: Advanced argument connectors (それゆえに、〜ものの), nuance-marking sentence-final particles よ/ね/わ.",
        "level": "C1",
        "lessonIds": [
            "ja-u25-l1",
            "ja-u25-l2",
            "ja-u25-l3",
            "ja-u25-l4",
            "ja-u25-l5"
        ]
    },
    {
        "id": "u26",
        "name": "Unit 26",
        "goal": "By the end of this unit, learners can use professional and academic language appropriately in writing and speech. Grammar/vocabulary focus: Business keigo conventions, academic written style (である体).",
        "level": "C1",
        "lessonIds": [
            "ja-u26-l1",
            "ja-u26-l2",
            "ja-u26-l3",
            "ja-u26-l4",
            "ja-u26-l5"
        ]
    },
    {
        "id": "u27",
        "name": "Unit 27",
        "goal": "By the end of this unit, learners can analyze literary and cultural texts and discuss their meaning. Grammar/vocabulary focus: Classical-influenced literary expressions, close reading of short literary excerpts.",
        "level": "C1",
        "lessonIds": [
            "ja-u27-l1",
            "ja-u27-l2",
            "ja-u27-l3",
            "ja-u27-l4",
            "ja-u27-l5"
        ]
    },
    {
        "id": "u28",
        "name": "Unit 28",
        "goal": "By the end of this unit, learners can use a wide range of idioms and proverbs accurately. Grammar/vocabulary focus: Advanced idioms and proverbs (ことわざ).",
        "level": "C1",
        "lessonIds": [
            "ja-u28-l1",
            "ja-u28-l2",
            "ja-u28-l3",
            "ja-u28-l4",
            "ja-u28-l5"
        ]
    },
    {
        "id": "u29",
        "name": "Unit 29",
        "goal": "By the end of this unit, learners can use discourse markers to structure extended, natural-sounding speech. Grammar/vocabulary focus: Discourse markers for natural flow (さて、ところで、ちなみに).",
        "level": "C1",
        "lessonIds": [
            "ja-u29-l1",
            "ja-u29-l2",
            "ja-u29-l3",
            "ja-u29-l4",
            "ja-u29-l5"
        ]
    },
    {
        "id": "u30",
        "name": "Unit 30",
        "goal": "By the end of this unit, learners can understand native-speed humor, wordplay, and slang. Grammar/vocabulary focus: Slang, wordplay, and humor patterns at native speed.",
        "level": "C2",
        "lessonIds": [
            "ja-u30-l1",
            "ja-u30-l2",
            "ja-u30-l3",
            "ja-u30-l4",
            "ja-u30-l5"
        ]
    },
    {
        "id": "u31",
        "name": "Unit 31",
        "goal": "By the end of this unit, learners can understand and use specialized legal, medical, and technical vocabulary. Grammar/vocabulary focus: Legal, medical, and technical register vocabulary.",
        "level": "C2",
        "lessonIds": [
            "ja-u31-l1",
            "ja-u31-l2",
            "ja-u31-l3",
            "ja-u31-l4",
            "ja-u31-l5"
        ]
    },
    {
        "id": "u32",
        "name": "Unit 32",
        "goal": "By the end of this unit, learners can construct persuasive, rhetorically effective arguments. Grammar/vocabulary focus: Persuasive rhetorical structures, rhetorical questions.",
        "level": "C2",
        "lessonIds": [
            "ja-u32-l1",
            "ja-u32-l2",
            "ja-u32-l3",
            "ja-u32-l4",
            "ja-u32-l5"
        ]
    },
    {
        "id": "u33",
        "name": "Unit 33",
        "goal": "By the end of this unit, learners can recognize and adapt to dialectal and sociolinguistic variation. Grammar/vocabulary focus: Regional dialect survey (関西弁 basics), sociolinguistic variation.",
        "level": "C2",
        "lessonIds": [
            "ja-u33-l1",
            "ja-u33-l2",
            "ja-u33-l3",
            "ja-u33-l4",
            "ja-u33-l5"
        ]
    },
    {
        "id": "u34",
        "name": "Unit 34",
        "goal": "By the end of this unit, learners can synthesize all prior skills to communicate with near-native fluency across contexts. Grammar/vocabulary focus: Capstone: mixed-register synthesis across all prior grammar and vocabulary.",
        "level": "C2",
        "lessonIds": [
            "ja-u34-l1",
            "ja-u34-l2",
            "ja-u34-l3",
            "ja-u34-l4",
            "ja-u34-l5"
        ]
    }
];
  var LESSONS = {
    "ja-u1-l1": {
        "id": "ja-u1-l1",
        "subject": "japanese",
        "unit": 1,
        "lessonNumber": 1,
        "title": "基本の挨拶と対人作法",
        "level": "A1",
        "objective": "朝・昼・夜の挨拶表現（おはようございます・こんにちは・こんばんは）および別れの挨拶の適切な使い分け。",
        "presentation": {
            "explanation": "日本語における挨拶（あいさつ）は、対人関係の構築と円滑な社会的対話の基盤となる最も重要な言語行動です。日本の社会生活においては、挨拶を通じて相手に対する敬意や親愛の情を明確に伝達し、相互の信頼関係を深めることが求められます。\n\n【時間帯と場面に応じた挨拶表現の体系的分類】\n１．朝の挨拶：「おはようございます」（敬体・丁寧表現）は、起床時から午前十一時頃までの時間帯に広く用いられます。家庭内や親しい友人同士では「おはよう」という簡略形が交わされますが、職場や公の場では常に丁寧形を使用することが規範とされています。\n２．昼の挨拶：「こんにちは」（日中の標準的な対面挨拶）は、正午前後から夕方の日没前までの時間帯に使われる最も汎用性の高い挨拶表現です。\n３．夜の挨拶：「こんばんは」は日没後および夜間の対面時に使用され、一日を締めくくる前の丁寧な配慮を示します。\n４．別れの挨拶：「さようなら」は改まった長期的な別れを意味するため、日常の職場や学校では「また明日（またあした）」や「お疲れ様でした（おつかれさまでした）」が好まれます。\n５．感謝と謝罪：「ありがとうございます」は改まった深い感謝を伝え、「すみません」は呼びかけ・感謝・軽い謝罪の三つの機能を柔軟に果たす極めて多機能な日常語です。\n\n【表記法と音声学的発音規則】\n「こんにちは」および「こんばんは」の語尾にある文字「は」は、古代日本語における主題提示の係助詞「は」に由来します。したがって、現代の標準的な仮名遣いにおいても文字表記は「は」と書き、実際の発音は「わ」となります。また、挨拶を行う際は、適切な角度の会釈（約十五度）を添えることが日本の伝統的な礼儀作法となっています。",
            "examples": [
                {
                    "target": "田中さん、おはようございます。今日も一日よろしくお願いいたします。",
                    "reading": "たなかさん、おはようございます。きょうもいちにちよろしくおねがいいたします。",
                    "translation": "Good morning, Mr. Tanaka. I look forward to working with you today."
                },
                {
                    "target": "先生、こんにちは。午後の日本語特別講座の教室はこちらでよろしいでしょうか。",
                    "reading": "せんせい、こんにちは。ごごのにほんご とくべつこうざの きょうしつは こちらで よろしいでしょうか。",
                    "translation": "Hello, teacher. Is this the classroom for the afternoon Japanese special lecture?"
                },
                {
                    "target": "皆様、こんばんは。本日の国際文化学術シンポジウムを開会いたします。",
                    "reading": "みなさま、こんばんは。ほんじつの こくさいぶんか がくじゅつシンポジウムを かいかいいたします。",
                    "translation": "Good evening, everyone. We hereby open today's International Cultural Symposium."
                },
                {
                    "target": "本日は貴重なご指導をいただき誠にありがとうございました。また明日失礼いたします。",
                    "reading": "ほんじつは きちょうな ごしどうを いただき まことに ありがとうございました。またあした しつれいいたします。",
                    "translation": "Thank you very much for your valuable guidance today. I will see you tomorrow."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【場面理解】午前八時三十分に職場の同僚や上司に対面した際、最も適切な挨拶表現を選択してください。",
                    "options": [
                        "こんばんは、今日も一日お疲れ様でした。",
                        "さようなら、また来週お会いしましょう。",
                        "おはようございます、今日も一日よろしくお願いします。",
                        "こんにちは、初めましてどうぞよろしく。"
                    ],
                    "answerIndex": 2,
                    "explanation": "朝の時間帯（午前中）の標準的かつ丁寧な挨拶として「おはようございます」が最適です。"
                },
                {
                    "prompt": "【表記と発音】「こんにちは」の末尾の仮名表記と実際の発音の正しい組み合わせを選択してください。",
                    "options": [
                        "文字表記は「わ」であり、発音は「わ」である。",
                        "文字表記は「は」であり、発音は「わ」である。",
                        "文字表記は「は」であり、発音は「は」である。",
                        "文字表記は「を」であり、発音は「お」である。"
                    ],
                    "answerIndex": 1,
                    "explanation": "主題提示の助詞「は」に由来するため、表記は「は」で発音は「わ」となります。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【対話完成】甲「今日の作業を手伝っていただき本当に助かりました。」 乙「いいえ、どういたしまして。＿＿＿＿。」",
                    "options": [
                        "また明日、会社でお会いしましょう。",
                        "おはようございます、どうぞよろしくお願いします。",
                        "初めまして、山田と申します。",
                        "いただきます、とても美味しい料理です。"
                    ],
                    "answerIndex": 0,
                    "explanation": "一日の作業終了時の返答として「また明日」が最も自然な文脈の結びとなります。"
                },
                {
                    "prompt": "【敬語表現】大学の指導教授や取引先の役員に対して深い感謝の意を伝える最も適切な表現を選択してください。",
                    "options": [
                        "どうもありがとう！助かったよ。",
                        "サンキューでした、また今度ね。",
                        "誠にありがとうございました、心より感謝申し上げます。",
                        "どうもね、お疲れさん。"
                    ],
                    "answerIndex": 2,
                    "explanation": "目上の相手や公的な場面では改まった敬語表現「誠にありがとうございました」を使用します。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "日没後の午後七時に重要な会合の会場に到着した際、最初に交わすべき挨拶として最も適切なものはどれですか。",
                    "options": [
                        "おはようございます、よろしくお願いします。",
                        "こんにちは、良いお天気ですね。",
                        "こんばんは、本日はよろしくお願いいたします。",
                        "ごちそうさまでした、美味しかったです。"
                    ],
                    "answerIndex": 2,
                    "explanation": "日没後の夜間の時間帯における対面挨拶には「こんばんは」を使用します。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "朝の丁寧な挨拶の日本語を入力してください（「おはようございます」）：",
                    "acceptedAnswers": [
                        "おはようございます",
                        "オハヨウゴザイマス",
                        "おはよう"
                    ],
                    "explanation": "朝の標準的な丁寧語挨拶は「おはようございます」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u1-l2": {
        "id": "ja-u1-l2",
        "subject": "japanese",
        "unit": 1,
        "lessonNumber": 2,
        "title": "自己紹介と名詞述語文「〜は〜です」",
        "level": "A1",
        "objective": "助詞「は」による主題提示と断定の助動詞「です」、否定表現「ではありません」を用いた自己紹介文の構成。",
        "presentation": {
            "explanation": "日本語の文法構造における最も基本的な文型は、主題提示助詞「は」と断定助動詞「です」を用いた「甲は乙です」の構文です。\n\n【文法構造と機能の解説】\n１．主題提示助詞「は」：文の話題（主題・トピック）を明示します。文字は「は」と表記し、発音は「わ」となります。\n２．断定表現「です」：話し手の丁寧な断定の態度を示します（敬体）。主語の性別や人称に関わらず共通して用いられます。\n３．否定表現：「〜ではありません」（改まった書き言葉・丁寧な話し言葉）または「〜じゃありません」（日常会話表現）。過去否定形は「〜ではありませんでした」となります。\n４．疑問文の形成：文末に終助詞「か」を付加し、上昇調のイントネーションで発音することで疑問文を作成します（例：「あなたは学生ですか」）。\n\n【初対面での挨拶作法】\n初対面の相手に対しては「初めまして」で切り出し、氏名や所属を名乗った後に「どうぞよろしくお願いいたします」で結ぶのが標準的な日本の自己紹介プロトコルです。",
            "examples": [
                {
                    "target": "初めまして、私は東京大学の留学生のスミスです。よろしくお願いいたします。",
                    "reading": "はじめまして、わたしは とうきょうだいがくの りゅうがくせいの スミスです。よろしく おねがいいたします。",
                    "translation": "Nice to meet you. I am Smith, an international student at the University of Tokyo."
                },
                {
                    "target": "田中さんは会社員ですか。— いいえ、私は会社員ではありません。公務員です。",
                    "reading": "たなかさんは かいしゃいんですか。— いいえ、わたしは かいしゃいんでは ありません。こうむいんです。",
                    "translation": "Are you an office worker, Mr. Tanaka? — No, I am not an office worker. I am a civil servant."
                },
                {
                    "target": "あの方は新しい日本語の先生ですか。— はい、佐藤先生です。",
                    "reading": "あのかたは あたらしい にほんごの せんせいですか。— はい、さとうせんせいです。",
                    "translation": "Is that person the new Japanese teacher? — Yes, that is Teacher Sato."
                },
                {
                    "target": "私はエンジニアじゃありません。建築デザイナーです。",
                    "reading": "わたしは エンジニアじゃ ありません。けんちく デザイナーです。",
                    "translation": "I am not an engineer. I am an architectural designer."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法選択】「私は学生＿＿＿、会社員ではありません。」の空欄に入る最も適切な述語を選択してください。",
                    "options": [
                        "です",
                        "でした",
                        "ではありません",
                        "ます"
                    ],
                    "answerIndex": 0,
                    "explanation": "肯定の断定として「です」が接続します。"
                },
                {
                    "prompt": "【否定文の形成】「鈴木さんは医者です」を丁寧な否定文に変換した正しい文を選択してください。",
                    "options": [
                        "鈴木さんは医者でした。",
                        "鈴木さんは医者ではありません。",
                        "鈴木さんは医者になります。",
                        "鈴木さんは医者でしたか。"
                    ],
                    "answerIndex": 1,
                    "explanation": "「〜です」の改まった丁寧否定形は「〜ではありません」です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【自己紹介の対話】初対面の挨拶で「初めまして、山田です。」に続く最も自然な結びの言葉を選択してください。",
                    "options": [
                        "どうぞよろしくお願いいたします。",
                        "ごちそうさまでした。",
                        "おやすみなさい。",
                        "行ってらっしゃい。"
                    ],
                    "answerIndex": 0,
                    "explanation": "自己紹介の定型結び表現として「どうぞよろしくお願いいたします」が最適です。"
                },
                {
                    "prompt": "【疑問文の応答】「あなたは日本人ですか。」に対する否定の丁寧な応答として最も適切なものを選択してください。",
                    "options": [
                        "いいえ、日本人ではありません。カナダ人です。",
                        "はい、日本人じゃありません。",
                        "いいえ、日本人でした。",
                        "そうです、日本人ではありません。"
                    ],
                    "answerIndex": 0,
                    "explanation": "否定の応答「いいえ」に否定述語「日本人ではありません」が正しく呼応します。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "主題を提示する助詞「は」の正しい仮名表記と発音の組み合わせを選択してください。",
                    "options": [
                        "表記「は」・発音「わ」",
                        "表記「わ」・発音「わ」",
                        "表記「は」・発音「は」",
                        "表記「を」・発音「お」"
                    ],
                    "answerIndex": 0,
                    "explanation": "主題提示助詞は「は」と表記し、発音は「わ」です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "初対面の自己紹介の冒頭で用いる挨拶表現を入力してください（「初めまして」または「はじめまして」）：",
                    "acceptedAnswers": [
                        "はじめまして",
                        "初めまして",
                        "ハジメマシテ"
                    ],
                    "explanation": "初対面の冒頭挨拶は「初めまして」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u1-l3": {
        "id": "ja-u1-l3",
        "subject": "japanese",
        "unit": 1,
        "lessonNumber": 3,
        "title": "出身・国籍・言語と連体修飾助詞「の」",
        "level": "A1",
        "objective": "国名・言語名・職業の語彙体系と、名詞同士を連結して属性・所属・所有を表す連体修飾助詞「の」の文法的活用。",
        "presentation": {
            "explanation": "本課では、国籍（〜人）、言語（〜語）、出身地（〜から来ました）を表す語彙体系と、日本語文法において極めて重要な役割を果たす連体修飾助詞「の」の機能を学びます。\n\n【国籍・言語・出身の表現体系】\n１．国名＋「人（じん）」：国籍を表します（例：アメリカ人、フランス人、中国人、韓国人、イギリス人、ドイツ人）。\n２．国名＋「語（ご）」：言語を表します（例：日本語、英語、フランス語、ドイツ語、スペイン語、中国語）。\n３．出身地の表現：「私は〜から来ました（〜からきました）」は、出身国や故郷を説明する際の標準的なフレーズです。\n\n【連体修飾助詞「の」の多層的機能】\n助詞「の」は二つの名詞を接続し、前方の名詞が後方の名詞を修飾する関係を構築します：\n・所属・組織：「東京大学の学生」\n・所有：「私の本」\n・属性・専門：「日本語の先生」\n・産地・原産国：「日本の自動車」",
            "examples": [
                {
                    "target": "私はアメリカのニューヨークから来ました。専門は日本文学です。",
                    "reading": "わたしは アメリカの ニューヨークから きました。せんもんは にほんぶんがくです。",
                    "translation": "I came from New York, USA. My major is Japanese literature."
                },
                {
                    "target": "マリアさんはブラジル人です。母語はポルトガル語です。",
                    "reading": "マリアさんは ブラジルじんです。ぼごは ポルトガルごです。",
                    "translation": "Maria is Brazilian. Her native language is Portuguese."
                },
                {
                    "target": "こちらは私の大学の同僚のワンさんです。中国の北京大学出身です。",
                    "reading": "こちらは わたしの だいがくの どうりょうの ワンさんです。ちゅうごくの ぺきんだいがく しゅっしんです。",
                    "translation": "This is Mr. Wang, a colleague from my university. He graduated from Peking University in China."
                },
                {
                    "target": "これは日本の伝統的な陶芸作品のカタログです。",
                    "reading": "これは にほんの でんとうてきな とうげいさくひんの カタログです。",
                    "translation": "This is a catalog of traditional Japanese ceramic works."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【助詞の選択】「私は東京大学＿＿＿留学生です。」の空欄に所属を表す助詞を入れてください。",
                    "options": [
                        "の",
                        "を",
                        "で",
                        "に"
                    ],
                    "answerIndex": 0,
                    "explanation": "所属や組織を表す名詞修飾には助詞「の」を用います。"
                },
                {
                    "prompt": "【言語名の語彙】フランスで話されている公用語の日本語名称として正しいものを選択してください。",
                    "options": [
                        "フランス人",
                        "フランス語",
                        "フランス国",
                        "フランス文学"
                    ],
                    "answerIndex": 1,
                    "explanation": "言語名を表すには国名に接尾辞「語」を付加して「フランス語」とします。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【出身地の表現】「イギリスのロンドンから来ました」の意味として最も適切な解釈を選択してください。",
                    "options": [
                        "ロンドンに出張で行きます。",
                        "イギリスのロンドン出身です。",
                        "ロンドンで英語を教えています。",
                        "ロンドン行きの飛行機に乗ります。"
                    ],
                    "answerIndex": 1,
                    "explanation": "「〜から来ました」は出身地・故郷を表す決まり文句です。"
                },
                {
                    "prompt": "【連体修飾の関係】「日本の車」という表現における助詞「の」の文法的機能は何ですか。",
                    "options": [
                        "動作の場所を表す",
                        "動作の目的語を表す",
                        "産地・原産国を表す修飾関係",
                        "移動の方向を表す"
                    ],
                    "answerIndex": 2,
                    "explanation": "名詞と名詞を結び、産地や原産国の属性を表しています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "国籍を表す接尾辞「人」の正しい音読みを選択してください。",
                    "options": [
                        "ひと",
                        "じん",
                        "にん",
                        "びと"
                    ],
                    "answerIndex": 1,
                    "explanation": "国籍を表す「〜人」は「じん」と読みます。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "名詞と名詞を繋ぎ所属や所有を表す助詞を入力してください（ひらがな一文字）:",
                    "acceptedAnswers": [
                        "の",
                        "ノ"
                    ],
                    "explanation": "連体修飾助詞は「の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u1-l4": {
        "id": "ja-u1-l4",
        "subject": "japanese",
        "unit": 1,
        "lessonNumber": 4,
        "title": "感謝・謝罪・呼びかけ表現「すみません」",
        "level": "A1",
        "objective": "多機能語「すみません」の三つの用法（呼びかけ・謝罪・感謝）と「ありがとうございます」の敬意格差の習得。",
        "presentation": {
            "explanation": "日本語の日常対話において極めて頻繁に使用される「すみません」は、文脈によって複数の対人機能を果たす独特の文化的・言語的表現です。\n\n【「すみません」の三大機能】\n１．呼びかけ：飲食店で店員を呼ぶ際や、街中で見知らぬ人に声をかける際（例：「すみません、お会計をお願いします」）。\n２．軽い謝罪：他人の前を横切る際や軽くぶつかった際の会釈を伴う謝罪（例：「足を踏んですみません」）。\n３．感謝（恐縮の念）：他者が自分のために労力を払ってくれたことに対する「申し訳なさを伴う感謝」（例：席を譲ってもらった際の「すみません」）。\n\n【感謝表現の階層性】\n・誠にありがとうございます（最上級の改まった感謝）\n・ありがとうございます（標準的な丁寧な感謝）\n・ありがとう（親しい友人・家族間の気軽な感謝）\n・どうも（簡略化された挨拶・感謝）",
            "examples": [
                {
                    "target": "すみません、駅への道を教えていただけますでしょうか。",
                    "reading": "すみません、えきへの みちを おしえて いただけますでしょうか。",
                    "translation": "Excuse me, could you please tell me the way to the station?"
                },
                {
                    "target": "重い荷物を持っていただき、本当にすみません。助かりました。",
                    "reading": "おもい にもつを もっていただき、ほんとうに すみません。たすかりました。",
                    "translation": "Thank you so much for carrying my heavy luggage. It was a huge help."
                },
                {
                    "target": "皆様の温かいご支援に、心より深く感謝申し上げます。誠にありがとうございます。",
                    "reading": "みなさまの あたたかい ごしえんに、こころより ふかく かんしゃもうしあげます。まことに ありがとうございます。",
                    "translation": "We express our deepest heartfelt gratitude for your warm support. Thank you very much."
                },
                {
                    "target": "約束の時間に遅れてしまい、大変申し訳ございませんでした。",
                    "reading": "やくそくの じかんに おくれてしまい、たいへん もうしわけございませんでした。",
                    "translation": "I am extremely sorry for being late for the appointed time."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【場面理解】レストランで店員をテーブルに呼びたい時、最も自然な日本語の第一声はどれですか。",
                    "options": [
                        "ごちそうさま！",
                        "すみません！",
                        "いただきます！",
                        "さようなら！"
                    ],
                    "answerIndex": 1,
                    "explanation": "店員や見知らぬ人に声をかける呼びかけには「すみません」を用います。"
                },
                {
                    "prompt": "【敬意のレベル】ビジネスの公式な式典で来賓に対して述べる最も適切な感謝表現を選択してください。",
                    "options": [
                        "サンキュー！",
                        "ありがとうね。",
                        "誠にありがとうございます。",
                        "どうもどうも。"
                    ],
                    "answerIndex": 2,
                    "explanation": "公式な式典や改まった場では最上級の丁寧表現「誠にありがとうございます」を用います。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表現の機能】電車で席を譲ってもらった際に言う「すみません」に含まれる主な感情は何ですか。",
                    "options": [
                        "相手に対する強い怒り",
                        "他者に負担をかけた恐縮の念を伴う感謝",
                        "電車の遅延に対する抗議",
                        "自己紹介の意思表示"
                    ],
                    "answerIndex": 1,
                    "explanation": "相手の親切に対する「申し訳なさと感謝」が融合した日本の文化的表現です。"
                },
                {
                    "prompt": "【謝罪表現の選択】仕事上の重大なミスに関して上司や取引先に謝罪する際の最上級の表現を選択してください。",
                    "options": [
                        "ごめんね。",
                        "悪かったよ。",
                        "大変申し訳ございませんでした。",
                        "いいよいいよ。"
                    ],
                    "answerIndex": 2,
                    "explanation": "公式なビジネス謝罪には「大変申し訳ございませんでした」が必須です。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "「すみません」の語源的な動詞の否定形として正しいものはどれですか。",
                    "options": [
                        "済みません（すまない・終わらない・心が澄まない）",
                        "進みません",
                        "住みません",
                        "吸いません"
                    ],
                    "answerIndex": 0,
                    "explanation": "「済む（すむ）」の否定形「済みません」が語源です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "呼びかけや軽い謝罪・感謝で広く用いられる万能表現を入力してください（「すみません」）：",
                    "acceptedAnswers": [
                        "すみません",
                        "スミマセン",
                        "すいません"
                    ],
                    "explanation": "万能な日常語は「すみません」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u1-l5": {
        "id": "ja-u1-l5",
        "subject": "japanese",
        "unit": 1,
        "lessonNumber": 5,
        "title": "Unit 1 総合演習：名刺交換と対話作法",
        "level": "A1",
        "objective": "挨拶・名詞述語・所属・感謝表現の総合統合と、日本における名刺交換（めいしこうかん）の作法理解。",
        "presentation": {
            "explanation": "第一単元の総括として、挨拶・自己紹介・所属紹介・感謝表現を有機的に結合した総合的な会話演習を行います。さらに、日本社会における初対面の象徴的儀礼である「名刺交換（めいしこうかん）」の作法を学びます。\n\n【名刺交換の基本作法と定型表現】\n１．立ち位置と姿勢：両手で名刺入れを持ち、相手の胸の高さに差し出します。\n２．渡す際の定型句：「頂戴いたします」、「〇〇会社の△△と申します。よろしくお願いいたします。」\n３．受け取る際の作法：両手で相手の名刺を受け取り、相手の指で会社ロゴや氏名を隠さないように保持します。「頂戴いたします」と復唱し、氏名の読み方を確認します。\n４．着席後の配置：受け取った名刺は名刺入れの上に置き、テーブルの左斜め前に並べて配置します。",
            "examples": [
                {
                    "target": "初めまして。私、富士通国際営業部の田中健一と申します。どうぞよろしくお願い申し上げます。",
                    "reading": "はじめまして。わたくし、ふじつう こくさいえいぎょうぶの たなかけんいちと もうします。どうぞ よろしく おねがいもうしあげます。",
                    "translation": "Nice to meet you. I am Kenichi Tanaka from the International Sales Department at Fujitsu. I look forward to working with you."
                },
                {
                    "target": "頂戴いたします。マイクロソフト東京支社のデイビッド・ミラーと申します。こちらこそよろしくお願いいたします。",
                    "reading": "ちょうだいいたします。マイクロソフト とうきょうししゃの デイビッド・ミラーと もうします。こちらこそ よろしく おねがいいたします。",
                    "translation": "Thank you for your card. I am David Miller from Microsoft Tokyo Branch. It is my pleasure to meet you as well."
                },
                {
                    "target": "ミラー様、本日はお忙しい中、弊社まで足をお運びいただき誠にありがとうございます。",
                    "reading": "ミラーさま、ほんじつは おいそがしいなか、へいしゃまで あしをおはこびいただき まことに ありがとうございます。",
                    "translation": "Mr. Miller, thank you very much for taking the time out of your busy schedule to visit our office today."
                },
                {
                    "target": "それでは本日の会議の資料を配付いたします。どうぞご覧ください。",
                    "reading": "それでは ほんじつの かいぎの しりょうを はいふいたします。どうぞ ごらんください。",
                    "translation": "Allow me now to distribute today's meeting documents. Please have a look."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【名刺交換作法】ビジネスの初対面で相手から名刺を受け取る際に発する最も適切な敬語表現はどれですか。",
                    "options": [
                        "いただきます、美味しいです。",
                        "頂戴いたします（ちょうだいいたします）。",
                        "ごちそうさまでした。",
                        "さようなら、また今度。"
                    ],
                    "answerIndex": 1,
                    "explanation": "名刺を受け取る際は「頂戴いたします」と述べるのが標準マナーです。"
                },
                {
                    "prompt": "【総合文脈】初対面の自己紹介で「こちらこそよろしくお願いいたします」と言うべき適切な状況はどれですか。",
                    "options": [
                        "相手から「どうぞよろしくお願いいたします」と挨拶されたことに対する丁寧な返答",
                        "朝起きて最初に家族に挨拶する時",
                        "食事を食べ終わった時",
                        "買い物の会計を支払う時"
                    ],
                    "answerIndex": 0,
                    "explanation": "「こちらこそ」は相手の挨拶や感謝に返答する定型句です。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【総合構文】「私＿＿＿ソニー＿＿＿技術者です。」の二つの空欄に入る助詞の正しい組み合わせを選択してください。",
                    "options": [
                        "は / の",
                        "の / は",
                        "を / で",
                        "に / を"
                    ],
                    "answerIndex": 0,
                    "explanation": "主題の「は」と所属の「の」により「私はソニーの技術者です」となります。"
                },
                {
                    "prompt": "【敬語対話】取引先との面談終了時に述べる別れの挨拶として最も適切な表現を選択してください。",
                    "options": [
                        "じゃあね、バイバイ！",
                        "本日は誠にありがとうございました。失礼いたします。",
                        "おやすみなさい、また夢で。",
                        "いただきます、美味しいです。"
                    ],
                    "answerIndex": 1,
                    "explanation": "ビジネス面談終了時は「本日は誠にありがとうございました。失礼いたします」と述べます。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "自社の名刺を相手に差し出す際の正しい手の使い方はどれですか。",
                    "options": [
                        "片手で乱暴に投げる",
                        "両手で持ち、相手の胸の高さで差し出す",
                        "ポケットに入れたまま見せる",
                        "背中の後ろから出す"
                    ],
                    "answerIndex": 1,
                    "explanation": "名刺は両手で持ち、相手の胸の高さで差し出すのが日本のビジネスマナーです。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "初対面の自己紹介で「よろしくお願いします」の丁寧な謙譲表現を入力してください（「よろしくお願いいたします」）：",
                    "acceptedAnswers": [
                        "よろしくお願いいたします",
                        "よろしくおねがいいたします",
                        "よろしくお願い申し上げます"
                    ],
                    "explanation": "標準的な改まった自己紹介の結びは「よろしくお願いいたします」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l1": {
        "id": "ja-u2-l1",
        "subject": "japanese",
        "unit": 2,
        "lessonNumber": 1,
        "title": "漢数字と基本基数詞 (Numbers 1-100)",
        "level": "A1",
        "objective": "漢数字（一〜百）の読み方と音便変化（四、七、九の異読と三百、六百、八百の促音・半濁音化）の習得。",
        "presentation": {
            "explanation": "日本語の数詞体系は、古代中国から伝来した漢数詞を基盤とし、固有の和語数詞と並行して用いられます。\n\n【基本数字の音読みと特殊な読み】\n・四（し / よん）：音読み「し」は「死」と同音であるため、日常会話や電話番号などでは「よん」が多く用いられます。\n・七（しち / なな）：音読み「しち」は「一（いち）」や「八（はち）」と聞き間違いやすいため、「なな」が頻繁に選択されます。\n・九（きゅう / く）：音読み「く」は「苦」と同音を避けるため「きゅう」が標準的ですが、時刻（九時＝くじ）や月（九月＝くがつ）では「く」と発音されます。\n・百（ひゃく）：三百（さんびゃく・濁音化）、六百（ろっぴゃく・促音半濁音化）、八百（はっぴゃく・促音半濁音化）の音便変化に注意が必要です。",
            "examples": [
                {
                    "target": "私の電話番号はゼロ三の一二三四の五六七八です。",
                    "reading": "わたしのでんわばんごうは ぜろさんの いちにさんよんの ごろくななはちです。",
                    "translation": "My phone number is 03-1234-5678."
                },
                {
                    "target": "この教科書は一冊八百円です。二冊で千六百円になります。",
                    "reading": "このきょうかしょは いっさつ はっぴゃくえんです。にさつで せんろっぴゃくえんに なります。",
                    "translation": "This textbook is 800 yen per volume. It is 1,600 yen for two volumes."
                },
                {
                    "target": "参加者は全員で四十七人です。",
                    "reading": "さんかしゃは ぜんいんで よんじゅうななにんです。",
                    "translation": "The participants total 47 people in all."
                },
                {
                    "target": "百から三百までの数字を日本語で数えましょう。",
                    "reading": "ひゃくから さんびゃくまでの すうじを にほんごで かぞえましょう。",
                    "translation": "Let us count numbers from 100 to 300 in Japanese."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】漢数字と基本基数詞 (Numbers 1-100)における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "私の電話番号はゼロ三の一二三四の五六七八です。",
                        "不適切な助詞配置の誤文例（2.1.1）",
                        "時制の不一致を含む文法誤謬（2.1.2）",
                        "敬意レベルが不適当な選択肢（2.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】漢数字（一〜百）の読み方と音便変化（四、七、九の異読と三百、六百、八百の促音・半濁音化）の習得。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】漢数字と基本基数詞 (Numbers 1-100)の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "この教科書は一冊八百円です。二冊で千六百円になります。",
                        "文脈の接続が不自然な誤答（2.1.x）",
                        "助詞の選択を誤った誤謬例（2.1.y）",
                        "主述の呼応が崩れた不完全文（2.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u2-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "参加者は全員で四十七人です。",
                        "意味の取り違えによる不適切な文（2.1.a）",
                        "不自然な漢語の誤用（2.1.b）",
                        "文末述語の欠落した文（2.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】漢数字と基本基数詞 (Numbers 1-100)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試2-1）。",
                    "options": [
                        "百から三百までの数字を日本語で数えましょう。",
                        "助詞の欠落した文法誤文（2.1.m）",
                        "敬語体系の誤用例（2.1.n）",
                        "活用形の接続誤謬（2.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u2-l1）の主要キーワードを入力してください（「私の電話」）：",
                    "acceptedAnswers": [
                        "私の電話",
                        "私の電話番号"
                    ],
                    "explanation": "正解のキーワードは「私の電話」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l2": {
        "id": "ja-u2-l2",
        "subject": "japanese",
        "unit": 2,
        "lessonNumber": 2,
        "title": "時刻表現と助数詞「時」「分」 (Time & Counters -ji / -fun)",
        "level": "A1",
        "objective": "時刻表現（〜時・〜分・半・午前/午後）と不規則発音（四時＝よじ、七時＝しちじ、九時＝くじ、一分＝いっぷん等）の完全習得。",
        "presentation": {
            "explanation": "日本語で時刻を表す際は、時間に助数詞「時（じ）」、分に助数詞「分（ふん/ぷん）」を接続させます。\n\n【時間の不規則音読み】\n・四時：不規則に「よじ」と発音します。\n・七時：標準的に「しちじ」と発音します。\n・九時：標準的に「くじ」と発音します。\n\n【分の音便変化（ふん vs ぷん）】\n一分（いっぷん）、二分（にふん）、三分（さんぷん）、四分（よんぷん）、五分（ごふん）、六分（ろっぷん）、七分（ななふん）、八分（はっぷん）、九分（きゅうふん）、十分（じゅっぷん/じっぷん）。三十分は「半（はん）」とも表現されます。",
            "examples": [
                {
                    "target": "今、何時ですか。— ちょうど午後二時半です。",
                    "reading": "いま、なんじですか。— ちょうど ごご にじはんです。",
                    "translation": "What time is it now? — It is exactly 2:30 PM."
                },
                {
                    "target": "朝の講義は午前九時四十五分から始まります。",
                    "reading": "あさの こうぎは ごぜん くじ よんじゅうごふんから はじまります。",
                    "translation": "The morning lecture starts from 9:45 AM."
                },
                {
                    "target": "新幹線は東京駅を午後四時十四分に出発いたします。",
                    "reading": "しんかんせんは とうきょうえきを ごご よじ じゅうよんぷんに しゅっぱついたします。",
                    "translation": "The Shinkansen departs Tokyo Station at 4:14 PM."
                },
                {
                    "target": "会議の開始時刻は午前十時十分に変更されました。",
                    "reading": "かいぎの かいしじこくは ごぜん じゅうじ じゅっぷんに へんこうされました。",
                    "translation": "The meeting start time has been changed to 10:10 AM."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】時刻表現と助数詞「時」「分」 (Time & Counters -ji / -fun)における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "今、何時ですか。— ちょうど午後二時半です。",
                        "不適切な助詞配置の誤文例（2.2.1）",
                        "時制の不一致を含む文法誤謬（2.2.2）",
                        "敬意レベルが不適当な選択肢（2.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】時刻表現（〜時・〜分・半・午前/午後）と不規則発音（四時＝よじ、七時＝しちじ、九時＝くじ、一分＝いっぷん等）の完全習得。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】時刻表現と助数詞「時」「分」 (Time & Counters -ji / -fun)の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "朝の講義は午前九時四十五分から始まります。",
                        "文脈の接続が不自然な誤答（2.2.x）",
                        "助詞の選択を誤った誤謬例（2.2.y）",
                        "主述の呼応が崩れた不完全文（2.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u2-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "新幹線は東京駅を午後四時十四分に出発いたします。",
                        "意味の取り違えによる不適切な文（2.2.a）",
                        "不自然な漢語の誤用（2.2.b）",
                        "文末述語の欠落した文（2.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】時刻表現と助数詞「時」「分」 (Time & Counters -ji / -fun)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試2-2）。",
                    "options": [
                        "会議の開始時刻は午前十時十分に変更されました。",
                        "助詞の欠落した文法誤文（2.2.m）",
                        "敬語体系の誤用例（2.2.n）",
                        "活用形の接続誤謬（2.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u2-l2）の主要キーワードを入力してください（「今、何時」）：",
                    "acceptedAnswers": [
                        "今、何時",
                        "今、何時です"
                    ],
                    "explanation": "正解のキーワードは「今、何時」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l3": {
        "id": "ja-u2-l3",
        "subject": "japanese",
        "unit": 2,
        "lessonNumber": 3,
        "title": "曜日・日付・月名カレンダー表現 (Days of Week & Calendar Dates)",
        "level": "A1",
        "objective": "七つの曜日と十二ヶ月の月名、一日から三十一日までの特別な和語日付（一日＝ついたち、二日＝ふつか等）の習得。",
        "presentation": {
            "explanation": "日本語のカレンダー表現には、七曜に基づく曜日名と、独特の和語音読みが混在する日付表現があります。\n\n【七曜の名称】\n月曜日、火曜日、水曜日、木曜日、金曜日、土曜日、日曜日。\n\n【一日〜十日および重要日付の特殊和語読み】\n一日（ついたち）、二日（ふつか）、三日（みっか）、四日（よっか）、五日（いつか）、六日（むいか）、七日（なのか）、八日（ようか）、九日（ここのか）、十日（とおか）、十四日（じゅうよっか）、二十日（はつか）、二十四日（にじゅうよっか）。",
            "examples": [
                {
                    "target": "今日は何曜日ですか。— 今日は水曜日です。明日は木曜日です。",
                    "reading": "きょうは なんようびですか。— きょうは すいようびです。あしたは もくようびです。",
                    "translation": "What day of the week is it today? — Today is Wednesday. Tomorrow is Thursday."
                },
                {
                    "target": "私の誕生日は五月五日（こどもの日）です。",
                    "reading": "わたしの たんじょうびは ごがつ いつか（こどものひ）です。",
                    "translation": "My birthday is May 5th (Children's Day)."
                },
                {
                    "target": "新学期は四月一日（ついたち）から始まります。",
                    "reading": "しんがっきは しがつ ついたちから はじまります。",
                    "translation": "The new academic term begins from April 1st."
                },
                {
                    "target": "日本への出張は七月二十日（はつか）から八月十日（とおか）までです。",
                    "reading": "にほんへの しゅっちょうは しちがつ はつかから はちがつ とおかまでです。",
                    "translation": "The business trip to Japan is from July 20th to August 10th."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】曜日・日付・月名カレンダー表現 (Days of Week & Calendar Dates)における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "今日は何曜日ですか。— 今日は水曜日です。明日は木曜日です。",
                        "不適切な助詞配置の誤文例（2.3.1）",
                        "時制の不一致を含む文法誤謬（2.3.2）",
                        "敬意レベルが不適当な選択肢（2.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】七つの曜日と十二ヶ月の月名、一日から三十一日までの特別な和語日付（一日＝ついたち、二日＝ふつか等）の習得。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】曜日・日付・月名カレンダー表現 (Days of Week & Calendar Dates)の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "私の誕生日は五月五日（こどもの日）です。",
                        "文脈の接続が不自然な誤答（2.3.x）",
                        "助詞の選択を誤った誤謬例（2.3.y）",
                        "主述の呼応が崩れた不完全文（2.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u2-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "新学期は四月一日（ついたち）から始まります。",
                        "意味の取り違えによる不適切な文（2.3.a）",
                        "不自然な漢語の誤用（2.3.b）",
                        "文末述語の欠落した文（2.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】曜日・日付・月名カレンダー表現 (Days of Week & Calendar Dates)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試2-3）。",
                    "options": [
                        "日本への出張は七月二十日（はつか）から八月十日（とおか）までです。",
                        "助詞の欠落した文法誤文（2.3.m）",
                        "敬語体系の誤用例（2.3.n）",
                        "活用形の接続誤謬（2.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u2-l3）の主要キーワードを入力してください（「今日は何」）：",
                    "acceptedAnswers": [
                        "今日は何",
                        "今日は何曜日"
                    ],
                    "explanation": "正解のキーワードは「今日は何」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l4": {
        "id": "ja-u2-l4",
        "subject": "japanese",
        "unit": 2,
        "lessonNumber": 4,
        "title": "金額・買い物・助数詞「円」「万」 (Money & Prices)",
        "level": "A1",
        "objective": "通貨単位「円」と大数単位「万」「億」を用いた価格の尋ね方と会計表現の習得。",
        "presentation": {
            "explanation": "日本の通貨単位は「円（えん）」です。日本語は大数を「万（まん：一万＝10,000）」単位で区切る万進法を採用しています。\n\n【大数の単位体系】\n一、十、百、千、一万（10,000）、十万（100,000）、百万（1,000,000）、一千万（10,000,000）、一億（100,000,000）。\n\n【価格を尋ねる表現】\n「これはいくらですか」に対し、「〜円です」と答えます。消費税込みの価格を「税込（ぜいこみ）」、税抜価格を「税抜（ぜいぬき）」と呼びます。",
            "examples": [
                {
                    "target": "すみません、この日本の緑茶は一袋いくらですか。— 税込で八百五十円です。",
                    "reading": "すみません、このにほんのりょくちゃは ひとふくろ いくらですか。— ぜいこみで はっぴゃくごじゅうえんです。",
                    "translation": "Excuse me, how much is this bag of Japanese green tea? — It is 850 yen including tax."
                },
                {
                    "target": "この最新型ノートパソコンは十五万八千円です。",
                    "reading": "このさいしんがた ノートパソコンは じゅうごまん はっせんえんです。",
                    "translation": "This latest laptop computer is 158,000 yen."
                },
                {
                    "target": "お会計は全部で三万二千円になります。クレジットカードは使えますか。",
                    "reading": "おかいけいは ぜんぶで さんまんにせんえんに なります。クレジットカードは つかえますか。",
                    "translation": "The total bill comes to 32,000 yen. Can I use a credit card?"
                },
                {
                    "target": "一万円札でお支払いいたしますので、お釣りをお願いします。",
                    "reading": "いちまんえんさつで おしはらいいたしますので、おつりを おねがいします。",
                    "translation": "I will pay with a 10,000 yen bill, so please give me the change."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】金額・買い物・助数詞「円」「万」 (Money & Prices)における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "すみません、この日本の緑茶は一袋いくらですか。— 税込で八百五十円です。",
                        "不適切な助詞配置の誤文例（2.4.1）",
                        "時制の不一致を含む文法誤謬（2.4.2）",
                        "敬意レベルが不適当な選択肢（2.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】通貨単位「円」と大数単位「万」「億」を用いた価格の尋ね方と会計表現の習得。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】金額・買い物・助数詞「円」「万」 (Money & Prices)の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "この最新型ノートパソコンは十五万八千円です。",
                        "文脈の接続が不自然な誤答（2.4.x）",
                        "助詞の選択を誤った誤謬例（2.4.y）",
                        "主述の呼応が崩れた不完全文（2.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u2-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "お会計は全部で三万二千円になります。クレジットカードは使えますか。",
                        "意味の取り違えによる不適切な文（2.4.a）",
                        "不自然な漢語の誤用（2.4.b）",
                        "文末述語の欠落した文（2.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】金額・買い物・助数詞「円」「万」 (Money & Prices)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試2-4）。",
                    "options": [
                        "一万円札でお支払いいたしますので、お釣りをお願いします。",
                        "助詞の欠落した文法誤文（2.4.m）",
                        "敬語体系の誤用例（2.4.n）",
                        "活用形の接続誤謬（2.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u2-l4）の主要キーワードを入力してください（「すみませ」）：",
                    "acceptedAnswers": [
                        "すみませ",
                        "すみません、"
                    ],
                    "explanation": "正解のキーワードは「すみませ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u2-l5": {
        "id": "ja-u2-l5",
        "subject": "japanese",
        "unit": 2,
        "lessonNumber": 5,
        "title": "時間の助詞「に」「から」「まで」 (Temporal Particles NI, KARA, MADE)",
        "level": "A1",
        "objective": "特定時を表す格助詞「に」と期間の起点・終点を表す「から」「まで」の文法規則。",
        "presentation": {
            "explanation": "時間を表す語句とともに用いられる主要な助詞の機能を学習します。\n\n【時間の助詞の体系的規則】\n１．格助詞「に」：数字を含む具体的な特定時点（時刻、曜日、日付、年）に接続します（例：「七時に起きる」「月曜日に会議がある」）。\n   ※相対的な時間名詞（「今日」「明日」「毎朝」「来週」など）の後には原則として「に」を付加しません。\n２．格助詞「から」：時間の起点（開始時刻・日付）を表します（例：「九時から」）。\n３．格助詞「まで」：時間の終点（終了時刻・日付）を表します（例：「五時まで」）。",
            "examples": [
                {
                    "target": "毎朝七時に起きて、八時半に会社へ行きます。",
                    "reading": "まいあさ ななじに おきて、はちじはんに かいしゃへ いきます。",
                    "translation": "I wake up at 7:00 every morning and go to the office at 8:30."
                },
                {
                    "target": "図書館は火曜日から日曜日まで開館しています。月曜日は休館です。",
                    "reading": "としょかんは かようびから にちようびまで かいかんしています。げつようびは きゅうかんです。",
                    "translation": "The library is open from Tuesday to Sunday. It is closed on Mondays."
                },
                {
                    "target": "本日のセミナーは午後一時から午後四時半まで行われます。",
                    "reading": "ほんじつの セミナーは ごご いちじから ごご よじはんまで おこなわれます。",
                    "translation": "Today's seminar will be held from 1:00 PM to 4:30 PM."
                },
                {
                    "target": "明日の夜、友達と銀座で会う約束があります。",
                    "reading": "あしたの よる、ともだちと ぎんざで あう やくそくが あります。",
                    "translation": "Tomorrow night, I have an appointment to meet a friend in Ginza."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】時間の助詞「に」「から」「まで」 (Temporal Particles NI, KARA, MADE)における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "毎朝七時に起きて、八時半に会社へ行きます。",
                        "不適切な助詞配置の誤文例（2.5.1）",
                        "時制の不一致を含む文法誤謬（2.5.2）",
                        "敬意レベルが不適当な選択肢（2.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】特定時を表す格助詞「に」と期間の起点・終点を表す「から」「まで」の文法規則。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】時間の助詞「に」「から」「まで」 (Temporal Particles NI, KARA, MADE)の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "図書館は火曜日から日曜日まで開館しています。月曜日は休館です。",
                        "文脈の接続が不自然な誤答（2.5.x）",
                        "助詞の選択を誤った誤謬例（2.5.y）",
                        "主述の呼応が崩れた不完全文（2.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u2-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "本日のセミナーは午後一時から午後四時半まで行われます。",
                        "意味の取り違えによる不適切な文（2.5.a）",
                        "不自然な漢語の誤用（2.5.b）",
                        "文末述語の欠落した文（2.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】時間の助詞「に」「から」「まで」 (Temporal Particles NI, KARA, MADE)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試2-5）。",
                    "options": [
                        "明日の夜、友達と銀座で会う約束があります。",
                        "助詞の欠落した文法誤文（2.5.m）",
                        "敬語体系の誤用例（2.5.n）",
                        "活用形の接続誤謬（2.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u2-l5）の主要キーワードを入力してください（「毎朝七時」）：",
                    "acceptedAnswers": [
                        "毎朝七時",
                        "毎朝七時に起"
                    ],
                    "explanation": "正解のキーワードは「毎朝七時」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l1": {
        "id": "ja-u3-l1",
        "subject": "japanese",
        "unit": 3,
        "lessonNumber": 1,
        "title": "存在動詞「います」と「あります」の峻別 (Existence Verbs)",
        "level": "A1",
        "objective": "有情物の存在を表す「います」と無情物の存在を表す「あります」の厳密な使い分け。",
        "presentation": {
            "explanation": "日本語の存在表現は、主体の有情性（生命感・自律的移動能力の有無）に基づいて、二種類の異なる存在動詞を明確に使い分ける文法体系を持っています。\n\n【存在動詞の峻別基準】\n１．「います」（有情物）：人間および動物・鳥類・昆虫（例：学生、猫、鳥）。\n２．「あります」（無情物・植物・抽象概念）：物品、家具、建物、植物、行事、約束、時間（例：机、車、桜の木、会議）。\n\n【基本構文】\n・「場所 に 主体 が います/あります」\n・「主体 は 場所 に います/あります」",
            "examples": [
                {
                    "target": "教室の中に日本語の先生と留学生がいます。",
                    "reading": "きょうしつの なかに にほんごの せんせいと りゅうがくせいが います。",
                    "translation": "There are a Japanese teacher and international students inside the classroom."
                },
                {
                    "target": "机の上に辞書とノートとペンがあります。",
                    "reading": "つくえの うえに じしょと ノートと ペンが あります。",
                    "translation": "There are a dictionary, a notebook, and a pen on the desk."
                },
                {
                    "target": "庭に大きくて綺麗な桜の木があります。木の下に可愛い猫がいます。",
                    "reading": "にわに おおきくて きれいな さくらのきが あります。きの したに かわいい ねこが います。",
                    "translation": "There is a large and beautiful cherry tree in the garden. Under the tree, there is a cute cat."
                },
                {
                    "target": "明日の午後、国際会議場で重要な学術シンポジウムがあります。",
                    "reading": "あしたの ごご、こくさいかいぎじょうで じゅうような がくじゅつシンポジウムが あります。",
                    "translation": "Tomorrow afternoon, there is an important academic symposium at the International Conference Center."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】存在動詞「います」と「あります」の峻別 (Existence Verbs)における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "教室の中に日本語の先生と留学生がいます。",
                        "不適切な助詞配置の誤文例（3.1.1）",
                        "時制の不一致を含む文法誤謬（3.1.2）",
                        "敬意レベルが不適当な選択肢（3.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】有情物の存在を表す「います」と無情物の存在を表す「あります」の厳密な使い分け。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】存在動詞「います」と「あります」の峻別 (Existence Verbs)の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "机の上に辞書とノートとペンがあります。",
                        "文脈の接続が不自然な誤答（3.1.x）",
                        "助詞の選択を誤った誤謬例（3.1.y）",
                        "主述の呼応が崩れた不完全文（3.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u3-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "庭に大きくて綺麗な桜の木があります。木の下に可愛い猫がいます。",
                        "意味の取り違えによる不適切な文（3.1.a）",
                        "不自然な漢語の誤用（3.1.b）",
                        "文末述語の欠落した文（3.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】存在動詞「います」と「あります」の峻別 (Existence Verbs)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試3-1）。",
                    "options": [
                        "明日の午後、国際会議場で重要な学術シンポジウムがあります。",
                        "助詞の欠落した文法誤文（3.1.m）",
                        "敬語体系の誤用例（3.1.n）",
                        "活用形の接続誤謬（3.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u3-l1）の主要キーワードを入力してください（「教室の中」）：",
                    "acceptedAnswers": [
                        "教室の中",
                        "教室の中に日"
                    ],
                    "explanation": "正解のキーワードは「教室の中」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l2": {
        "id": "ja-u3-l2",
        "subject": "japanese",
        "unit": 3,
        "lessonNumber": 2,
        "title": "家族の呼称：内と外の言語文化 (Family Terms: Uchi vs Soto)",
        "level": "A1",
        "objective": "自分の身内の家族（内）と他人の家族（外・敬称）を峻別する親族呼称体系の習得。",
        "presentation": {
            "explanation": "日本語における親族呼称体系は、日本の社会構造の基幹概念である「ウチ（内＝身内）」と「ソト（外＝他者）」の峻別規範を反映しています。\n\n【身内（ウチ）vs 他者（ソト）の対照】\n・父（ちち） vs お父さん（おとうさん）\n・母（はは） vs お母さん（おかあさん）\n・兄（あに） vs お兄さん（おにいさん）\n・姉（あね） vs お姉さん（おねえさん）\n・弟（おとうと） vs 弟さん（おとうとさん）\n・妹（いもうと） vs 妹さん（いもうとさん）\n\n他者に対して自分の家族を話す際は、身内を高めない（謙譲の精神）ため、常に「父」「母」を用います。",
            "examples": [
                {
                    "target": "私の父は高校の英語教師で、母は総合病院の看護師です。",
                    "reading": "わたしの ちちは こうこうの えいごきょうしで、ははは そうごうびょういんの かんごしです。",
                    "translation": "My father is a high school English teacher, and my mother is a nurse at a general hospital."
                },
                {
                    "target": "田中さんのお父様はどちらの会社にお勤めですか。",
                    "reading": "たなかさんの おとうさまは どちらの かいしゃに おつとめですか。",
                    "translation": "Which company does your father work for, Mr. Tanaka?"
                },
                {
                    "target": "私の兄は東京のIT企業でエンジニアをしています。",
                    "reading": "わたしの あには とうきょうの アイティーきぎょうで エンジニアを しています。",
                    "translation": "My older brother is an engineer at an IT firm in Tokyo."
                },
                {
                    "target": "佐藤さんのご家族はお元気ですか。— はい、おかげさまで皆元気です。",
                    "reading": "さとうさんの ごかぞくは おげんきですか。— はい、おかげさまで みな げんきです。",
                    "translation": "How is your family, Mr. Sato? — Yes, thanks to you, everyone is doing well."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】家族の呼称：内と外の言語文化 (Family Terms: Uchi vs Soto)における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "私の父は高校の英語教師で、母は総合病院の看護師です。",
                        "不適切な助詞配置の誤文例（3.2.1）",
                        "時制の不一致を含む文法誤謬（3.2.2）",
                        "敬意レベルが不適当な選択肢（3.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】自分の身内の家族（内）と他人の家族（外・敬称）を峻別する親族呼称体系の習得。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】家族の呼称：内と外の言語文化 (Family Terms: Uchi vs Soto)の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "田中さんのお父様はどちらの会社にお勤めですか。",
                        "文脈の接続が不自然な誤答（3.2.x）",
                        "助詞の選択を誤った誤謬例（3.2.y）",
                        "主述の呼応が崩れた不完全文（3.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u3-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "私の兄は東京のIT企業でエンジニアをしています。",
                        "意味の取り違えによる不適切な文（3.2.a）",
                        "不自然な漢語の誤用（3.2.b）",
                        "文末述語の欠落した文（3.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】家族の呼称：内と外の言語文化 (Family Terms: Uchi vs Soto)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試3-2）。",
                    "options": [
                        "佐藤さんのご家族はお元気ですか。— はい、おかげさまで皆元気です。",
                        "助詞の欠落した文法誤文（3.2.m）",
                        "敬語体系の誤用例（3.2.n）",
                        "活用形の接続誤謬（3.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u3-l2）の主要キーワードを入力してください（「私の父は」）：",
                    "acceptedAnswers": [
                        "私の父は",
                        "私の父は高校"
                    ],
                    "explanation": "正解のキーワードは「私の父は」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l3": {
        "id": "ja-u3-l3",
        "subject": "japanese",
        "unit": 3,
        "lessonNumber": 3,
        "title": "位置関係と空間名詞 (Spatial Nouns & Prepositions)",
        "level": "A1",
        "objective": "空間位置名詞（上・下・前・後ろ・右・左・中・隣・間）と助詞「の」「に」を用いた精確な位置描写。",
        "presentation": {
            "explanation": "日本語では、物体の位置や空間的配置を「基準名詞 ＋ 助詞の ＋ 位置名詞 ＋ 助詞に」という構造で表現します。\n\n【主要な空間位置名詞】\n上（うえ）、下（した）、前（まえ）、後ろ（うしろ）、右（みぎ）、左（ひだり）、中（なか）、外（そと）、隣（となり / 同種の横並び）、間（あいだ / 二者の中間）。\n\n【構文モデル】\n「机の 上 に ノートが あります」「銀行は 駅と 郵便局の 間 に あります」",
            "examples": [
                {
                    "target": "駅の前に大きな本屋とカフェがあります。",
                    "reading": "えきの まえに おおきな ほんやと カフェが あります。",
                    "translation": "There are a big bookstore and a cafe in front of the station."
                },
                {
                    "target": "郵便局は銀行と病院の間にあります。",
                    "reading": "ゆうびんきょくは ぎんこうと びょういんの あいだに あります。",
                    "translation": "The post office is between the bank and the hospital."
                },
                {
                    "target": "私の部屋の机の右隣に本棚があります。",
                    "reading": "わたしの へやの つくえの みぎどなりに ほんだなが あります。",
                    "translation": "There is a bookshelf right next to the right of the desk in my room."
                },
                {
                    "target": "箱の中に何が入っていますか。— 古い写真と手紙があります。",
                    "reading": "はこの なかに なにが はいっていますか。— ふるい しゃしんと てがみが あります。",
                    "translation": "What is inside the box? — There are old photographs and letters."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】位置関係と空間名詞 (Spatial Nouns & Prepositions)における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "駅の前に大きな本屋とカフェがあります。",
                        "不適切な助詞配置の誤文例（3.3.1）",
                        "時制の不一致を含む文法誤謬（3.3.2）",
                        "敬意レベルが不適当な選択肢（3.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】空間位置名詞（上・下・前・後ろ・右・左・中・隣・間）と助詞「の」「に」を用いた精確な位置描写。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】位置関係と空間名詞 (Spatial Nouns & Prepositions)の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "郵便局は銀行と病院の間にあります。",
                        "文脈の接続が不自然な誤答（3.3.x）",
                        "助詞の選択を誤った誤謬例（3.3.y）",
                        "主述の呼応が崩れた不完全文（3.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u3-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "私の部屋の机の右隣に本棚があります。",
                        "意味の取り違えによる不適切な文（3.3.a）",
                        "不自然な漢語の誤用（3.3.b）",
                        "文末述語の欠落した文（3.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】位置関係と空間名詞 (Spatial Nouns & Prepositions)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試3-3）。",
                    "options": [
                        "箱の中に何が入っていますか。— 古い写真と手紙があります。",
                        "助詞の欠落した文法誤文（3.3.m）",
                        "敬語体系の誤用例（3.3.n）",
                        "活用形の接続誤謬（3.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u3-l3）の主要キーワードを入力してください（「駅の前に」）：",
                    "acceptedAnswers": [
                        "駅の前に",
                        "駅の前に大き"
                    ],
                    "explanation": "正解のキーワードは「駅の前に」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l4": {
        "id": "ja-u3-l4",
        "subject": "japanese",
        "unit": 3,
        "lessonNumber": 4,
        "title": "格助詞「が」と「に」の存在文法 (Particle GA & NI)",
        "level": "A1",
        "objective": "存在文における主格助詞「が」（新情報の提示）と場所の格助詞「に」（存在地点）の統語的役割。",
        "presentation": {
            "explanation": "存在を表す文において、助詞「に」と助詞「が」は互いに補完し合う統語的役割を果たします。\n\n【助詞の機能の厳密な定義】\n１．助詞「に」（存在の場所）：主体が存在する具体的な空間・地点を示します（例：「公園に」「日本に」）。\n２．助詞「が」（存在の主体）：文の中に存在する対象そのものを新情報として明示します。\n\n【「は」と「が」の対比】\n・「庭に 犬が います」（新情報の提示）\n・「犬は 庭に います」（既知の主題の所在説明）",
            "examples": [
                {
                    "target": "新宿駅の東口に有名な待ち合わせ場所があります。",
                    "reading": "しんじゅくえきの ひがしぐちに ゆうめいな まちあわせばしょが あります。",
                    "translation": "There is a famous meeting spot at the East Exit of Shinjuku Station."
                },
                {
                    "target": "あのビルの屋上に緑豊かな庭園があります。",
                    "reading": "あのビルの おくじょうに みどりゆたかな ていえんが あります。",
                    "translation": "There is a lush rooftop garden on top of that building."
                },
                {
                    "target": "会議室に誰がいますか。— 部長とクライアントがいます。",
                    "reading": "かいぎしつに だれが いますか。— ぶちょうと クライアントが います。",
                    "translation": "Who is in the conference room? — The department manager and the client are there."
                },
                {
                    "target": "田中さんは今どこにいますか。— 図書館の二階にいます。",
                    "reading": "たなかさんは いま どこに いますか。— としょかんの にかいに います。",
                    "translation": "Where is Mr. Tanaka now? — He is on the second floor of the library."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】格助詞「が」と「に」の存在文法 (Particle GA & NI)における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "新宿駅の東口に有名な待ち合わせ場所があります。",
                        "不適切な助詞配置の誤文例（3.4.1）",
                        "時制の不一致を含む文法誤謬（3.4.2）",
                        "敬意レベルが不適当な選択肢（3.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】存在文における主格助詞「が」（新情報の提示）と場所の格助詞「に」（存在地点）の統語的役割。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】格助詞「が」と「に」の存在文法 (Particle GA & NI)の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "あのビルの屋上に緑豊かな庭園があります。",
                        "文脈の接続が不自然な誤答（3.4.x）",
                        "助詞の選択を誤った誤謬例（3.4.y）",
                        "主述の呼応が崩れた不完全文（3.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u3-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "会議室に誰がいますか。— 部長とクライアントがいます。",
                        "意味の取り違えによる不適切な文（3.4.a）",
                        "不自然な漢語の誤用（3.4.b）",
                        "文末述語の欠落した文（3.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】格助詞「が」と「に」の存在文法 (Particle GA & NI)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試3-4）。",
                    "options": [
                        "田中さんは今どこにいますか。— 図書館の二階にいます。",
                        "助詞の欠落した文法誤文（3.4.m）",
                        "敬語体系の誤用例（3.4.n）",
                        "活用形の接続誤謬（3.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u3-l4）の主要キーワードを入力してください（「新宿駅の」）：",
                    "acceptedAnswers": [
                        "新宿駅の",
                        "新宿駅の東口"
                    ],
                    "explanation": "正解のキーワードは「新宿駅の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u3-l5": {
        "id": "ja-u3-l5",
        "subject": "japanese",
        "unit": 3,
        "lessonNumber": 5,
        "title": "並立助詞「と」「や」「も」の総合運用 (Parallel Particles TO, YA, MO)",
        "level": "A1",
        "objective": "完全列挙の「と」、代表例列挙の「や（〜など）」、同類追加の「も」の文法的機能と使い分け。",
        "presentation": {
            "explanation": "名詞を並列・連結する三つの主要な並立助詞の使い分けを学びます。\n\n【並立助詞の機能的差異】\n１．助詞「と」（完全列挙）：並列する要素をすべて漏れなく網羅して提示します（例：「パンと 卵を買いました」）。\n２．助詞「や」（代表列挙）：多数ある要素の中から代表的なものを例示します。文末に「など」を伴うことが多いです（例：「本や 雑誌などを読みます」）。\n３．助詞「も」（同類追加）：他のものと同じ性質や状態であることを示します（例：「田中さんも 学生です」）。",
            "examples": [
                {
                    "target": "朝食にパンと卵とリンゴを食べました。",
                    "reading": "ちょうしょくに パンと たまごと リンゴを たべました。",
                    "translation": "I ate bread, eggs, and an apple for breakfast."
                },
                {
                    "target": "休日は図書館で本や雑誌などを読みます。",
                    "reading": "きゅうじつは としょかんで ほんや ざっしなどを よみます。",
                    "translation": "On holidays, I read books, magazines, and other things at the library."
                },
                {
                    "target": "私も日本の伝統文化や歴史にとても興味があります。",
                    "reading": "わたしも にほんの でんとうぶんかや れきしに とても きょうみが あります。",
                    "translation": "I also have great interest in traditional Japanese culture and history."
                },
                {
                    "target": "デパートで靴と鞄を買いました。時計も欲しかったです。",
                    "reading": "デパートで くつと かばんを かいました。とけいも ほしかったです。",
                    "translation": "I bought shoes and a bag at the department store. I wanted a watch as well."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】並立助詞「と」「や」「も」の総合運用 (Parallel Particles TO, YA, MO)における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "朝食にパンと卵とリンゴを食べました。",
                        "不適切な助詞配置の誤文例（3.5.1）",
                        "時制の不一致を含む文法誤謬（3.5.2）",
                        "敬意レベルが不適当な選択肢（3.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】完全列挙の「と」、代表例列挙の「や（〜など）」、同類追加の「も」の文法的機能と使い分け。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】並立助詞「と」「や」「も」の総合運用 (Parallel Particles TO, YA, MO)の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "休日は図書館で本や雑誌などを読みます。",
                        "文脈の接続が不自然な誤答（3.5.x）",
                        "助詞の選択を誤った誤謬例（3.5.y）",
                        "主述の呼応が崩れた不完全文（3.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u3-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "私も日本の伝統文化や歴史にとても興味があります。",
                        "意味の取り違えによる不適切な文（3.5.a）",
                        "不自然な漢語の誤用（3.5.b）",
                        "文末述語の欠落した文（3.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】並立助詞「と」「や」「も」の総合運用 (Parallel Particles TO, YA, MO)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試3-5）。",
                    "options": [
                        "デパートで靴と鞄を買いました。時計も欲しかったです。",
                        "助詞の欠落した文法誤文（3.5.m）",
                        "敬語体系の誤用例（3.5.n）",
                        "活用形の接続誤謬（3.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u3-l5）の主要キーワードを入力してください（「朝食にパ」）：",
                    "acceptedAnswers": [
                        "朝食にパ",
                        "朝食にパンと"
                    ],
                    "explanation": "正解のキーワードは「朝食にパ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l1": {
        "id": "ja-u4-l1",
        "subject": "japanese",
        "unit": 4,
        "lessonNumber": 1,
        "title": "動詞の三分類と基本活用 (Verb Groups 1, 2, 3)",
        "level": "A1",
        "objective": "五段動詞（一類）、一段動詞（二類）、不規則動詞（三類：する・来る）の識別と丁寧形「〜ます」の活用。",
        "presentation": {
            "explanation": "日本語の動詞は、活用語尾の変化パターンによって三つのグループに分類されます。\n\n【動詞の三大分類】\n１．一類動詞（五段動詞）：語尾が「u段」で終わり、ます形接続時に「i段」に変化（書く→書きます、飲む→飲みます）。\n２．二類動詞（一段動詞）：辞書形が「〜いる/〜える」で終わり、「る」を取って「ます」を接続（食べる→食べます、見る→見ます）。\n３．三類動詞（不規則動詞）：する→「します」、来る→「来ます（きます）」。",
            "examples": [
                {
                    "target": "毎朝七時に起きて、温かい緑茶を飲みます。",
                    "reading": "まいあさ ななじに おきて、あたたかい りょくちゃを のみます。",
                    "translation": "I wake up at 7:00 every morning and drink warm green tea."
                },
                {
                    "target": "図書館で日本語の文法と語彙を熱心に勉強します。",
                    "reading": "としょかんで にほんごの ぶんぽうと ごいを ねっしんに べんきょうします。",
                    "translation": "I study Japanese grammar and vocabulary diligently at the library."
                },
                {
                    "target": "田中さんは毎日新聞を読みますか。— いいえ、新聞は読みません。ネットニュースを見ます。",
                    "reading": "たなかさんは まいにち しんぶんを よみますか。— いいえ、しんぶんは よみません。ネットニュースを みます。",
                    "translation": "Do you read the newspaper every day, Mr. Tanaka? — No, I do not read newspapers. I watch online news."
                },
                {
                    "target": "留学生の皆さんは明日、京都の伝統工芸センターへ来ます。",
                    "reading": "りゅうがくせいの みなさんは あした、きょうとの でんとうこうげいセンターへ きます。",
                    "translation": "All international students will come to the Kyoto Traditional Crafts Center tomorrow."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】動詞の三分類と基本活用 (Verb Groups 1, 2, 3)における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "毎朝七時に起きて、温かい緑茶を飲みます。",
                        "不適切な助詞配置の誤文例（4.1.1）",
                        "時制の不一致を含む文法誤謬（4.1.2）",
                        "敬意レベルが不適当な選択肢（4.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】五段動詞（一類）、一段動詞（二類）、不規則動詞（三類：する・来る）の識別と丁寧形「〜ます」の活用。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】動詞の三分類と基本活用 (Verb Groups 1, 2, 3)の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "図書館で日本語の文法と語彙を熱心に勉強します。",
                        "文脈の接続が不自然な誤答（4.1.x）",
                        "助詞の選択を誤った誤謬例（4.1.y）",
                        "主述の呼応が崩れた不完全文（4.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u4-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "田中さんは毎日新聞を読みますか。— いいえ、新聞は読みません。ネットニュースを見ます。",
                        "意味の取り違えによる不適切な文（4.1.a）",
                        "不自然な漢語の誤用（4.1.b）",
                        "文末述語の欠落した文（4.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】動詞の三分類と基本活用 (Verb Groups 1, 2, 3)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試4-1）。",
                    "options": [
                        "留学生の皆さんは明日、京都の伝統工芸センターへ来ます。",
                        "助詞の欠落した文法誤文（4.1.m）",
                        "敬語体系の誤用例（4.1.n）",
                        "活用形の接続誤謬（4.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u4-l1）の主要キーワードを入力してください（「毎朝七時」）：",
                    "acceptedAnswers": [
                        "毎朝七時",
                        "毎朝七時に起"
                    ],
                    "explanation": "正解のキーワードは「毎朝七時」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l2": {
        "id": "ja-u4-l2",
        "subject": "japanese",
        "unit": 4,
        "lessonNumber": 2,
        "title": "目的語の格助詞「を」と他動詞 (Direct Object WO)",
        "level": "A1",
        "objective": "他動詞の直接目的語を明示する格助詞「を」の文法機能と動作動詞の共起関係。",
        "presentation": {
            "explanation": "他動詞が表す動作や行為の直接的な対象（直接目的語）を指示する際、格助詞「を」を用います。\n\n【助詞「を」の表記と発音】\n文字表記は五十音図の「を」を使用し、実際の発音は母音「お」と同一になります。\n\n【「名詞 ＋ を ＋ 他動詞」の典型パターン】\nご飯を食べる、お茶を飲む、本を読む、音楽を聞く、日本語を勉強する、テレビを見る、写真を撮る。",
            "examples": [
                {
                    "target": "毎朝カフェで美味しいコーヒーを飲みながら、経済新聞を読みます。",
                    "reading": "まいあさ カフェで おいしい コーヒーを のみながら、けいざいしんぶんを よみます。",
                    "translation": "Every morning at the cafe, I read the economic newspaper while drinking delicious coffee."
                },
                {
                    "target": "週末に友達と一緒に日本のアニメ映画を見ました。",
                    "reading": "しゅうまつに ともだちと いっしょに にほんの アニメえいがを みました。",
                    "translation": "Over the weekend, I watched a Japanese anime film together with my friend."
                },
                {
                    "target": "桜の木の前で記念写真を撮りましょう。",
                    "reading": "さくらの きの まえで きねんしゃしんを とりましょう。",
                    "translation": "Let us take a commemorative photo in front of the cherry tree."
                },
                {
                    "target": "大学で国際関係論とアジア経済を専攻して勉強しています。",
                    "reading": "だいがくで こくさいかんけいろんと アジアけいざいを せんこうして べんきょうしています。",
                    "translation": "At university, I major in and study international relations and Asian economy."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】目的語の格助詞「を」と他動詞 (Direct Object WO)における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "毎朝カフェで美味しいコーヒーを飲みながら、経済新聞を読みます。",
                        "不適切な助詞配置の誤文例（4.2.1）",
                        "時制の不一致を含む文法誤謬（4.2.2）",
                        "敬意レベルが不適当な選択肢（4.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】他動詞の直接目的語を明示する格助詞「を」の文法機能と動作動詞の共起関係。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】目的語の格助詞「を」と他動詞 (Direct Object WO)の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "週末に友達と一緒に日本のアニメ映画を見ました。",
                        "文脈の接続が不自然な誤答（4.2.x）",
                        "助詞の選択を誤った誤謬例（4.2.y）",
                        "主述の呼応が崩れた不完全文（4.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u4-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "桜の木の前で記念写真を撮りましょう。",
                        "意味の取り違えによる不適切な文（4.2.a）",
                        "不自然な漢語の誤用（4.2.b）",
                        "文末述語の欠落した文（4.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】目的語の格助詞「を」と他動詞 (Direct Object WO)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試4-2）。",
                    "options": [
                        "大学で国際関係論とアジア経済を専攻して勉強しています。",
                        "助詞の欠落した文法誤文（4.2.m）",
                        "敬語体系の誤用例（4.2.n）",
                        "活用形の接続誤謬（4.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u4-l2）の主要キーワードを入力してください（「毎朝カフ」）：",
                    "acceptedAnswers": [
                        "毎朝カフ",
                        "毎朝カフェで"
                    ],
                    "explanation": "正解のキーワードは「毎朝カフ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l3": {
        "id": "ja-u4-l3",
        "subject": "japanese",
        "unit": 4,
        "lessonNumber": 3,
        "title": "動作の場所・手段の格助詞「で」 (Location & Means DE)",
        "level": "A1",
        "objective": "動作が行われる活動場所を示す助詞「で」と、道具・手段・交通機関を示す「で」の機能習得。",
        "presentation": {
            "explanation": "格助詞「で」は、動作の発生する場所や、行為を実現するための手段・道具・交通機関・言語などを指定します。\n\n【助詞「で」の二大機能】\n１．動作・行為の発生場所：「〜で 動作動詞」（例：図書館で勉強する、レストランで食べる）。\n   ※静止した存在場所を表す「に」と、活動の場所を表す「で」を区別します。\n２．手段・道具・交通・言語：「〜で」（例：電車で行く、箸で食べる、日本語で話す、ペンで書く）。",
            "examples": [
                {
                    "target": "大学の図書館で友達と一緒に日本語のレポートを書きます。",
                    "reading": "だいがくの としょかんで ともだちと いっしょに にほんごの レポートを かきます。",
                    "translation": "I write a Japanese report together with my friend in the university library."
                },
                {
                    "target": "毎朝、地下鉄で会社へ通っています。",
                    "reading": "まいあさ、ちかてつで かいしゃへ かよっています。",
                    "translation": "Every morning, I commute to the office by subway."
                },
                {
                    "target": "日本の伝統的な料理は箸で美しくいただきます。",
                    "reading": "にほんの でんとうてきな りょうりは はしで うつくしく いただきます。",
                    "translation": "Traditional Japanese cuisine is eaten gracefully with chopsticks."
                },
                {
                    "target": "この質問は日本語で答えてください。",
                    "reading": "このしつもんは にほんごで こたえて ください。",
                    "translation": "Please answer this question in Japanese."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】動作の場所・手段の格助詞「で」 (Location & Means DE)における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "大学の図書館で友達と一緒に日本語のレポートを書きます。",
                        "不適切な助詞配置の誤文例（4.3.1）",
                        "時制の不一致を含む文法誤謬（4.3.2）",
                        "敬意レベルが不適当な選択肢（4.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】動作が行われる活動場所を示す助詞「で」と、道具・手段・交通機関を示す「で」の機能習得。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】動作の場所・手段の格助詞「で」 (Location & Means DE)の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "毎朝、地下鉄で会社へ通っています。",
                        "文脈の接続が不自然な誤答（4.3.x）",
                        "助詞の選択を誤った誤謬例（4.3.y）",
                        "主述の呼応が崩れた不完全文（4.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u4-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "日本の伝統的な料理は箸で美しくいただきます。",
                        "意味の取り違えによる不適切な文（4.3.a）",
                        "不自然な漢語の誤用（4.3.b）",
                        "文末述語の欠落した文（4.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】動作の場所・手段の格助詞「で」 (Location & Means DE)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試4-3）。",
                    "options": [
                        "この質問は日本語で答えてください。",
                        "助詞の欠落した文法誤文（4.3.m）",
                        "敬語体系の誤用例（4.3.n）",
                        "活用形の接続誤謬（4.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u4-l3）の主要キーワードを入力してください（「大学の図」）：",
                    "acceptedAnswers": [
                        "大学の図",
                        "大学の図書館"
                    ],
                    "explanation": "正解のキーワードは「大学の図」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l4": {
        "id": "ja-u4-l4",
        "subject": "japanese",
        "unit": 4,
        "lessonNumber": 4,
        "title": "移動の方向・目的地の助詞「へ」「に」 (Directional Particles HE & NI)",
        "level": "A1",
        "objective": "移動動詞（行きます・来ます・帰ります）と移動の方向を示す助詞「へ」「に」の文法規則。",
        "presentation": {
            "explanation": "空間的な移動を表す動詞（移動動詞）とともに用いられる助詞「へ」と「に」の機能を学習します。\n\n【主要な移動動詞】\n行きます（いきます）、来ます（きます）、帰ります（かえります / 自分の本拠地・家に戻る）。\n\n【方向の助詞「へ」と目的地の助詞「に」】\n１．助詞「へ」：向かう方向（ベクトルの向き）を強調します。表記は「へ」、発音は「え」となります。\n２．助詞「に」：移動の到達地点（ゴール）を強調します。\n３．移動の目的構文：「場所 ＋ へ/に ＋ 動詞ます語幹 ＋ に ＋ 行く/来る」（例：本を買いに行く）。",
            "examples": [
                {
                    "target": "来週の月曜日に新幹線で京都へ行きます。",
                    "reading": "らいしゅうの げつようびに しんかんせんで きょうとへ いきます。",
                    "translation": "Next Monday, I will go to Kyoto by Shinkansen."
                },
                {
                    "target": "夕方六時に仕事を終えて家へ帰ります。",
                    "reading": "ゆうがた ろくじに しごとを おえて うちへ かえります。",
                    "translation": "I finish work at 6:00 in the evening and return home."
                },
                {
                    "target": "デパートへ新しい春の服を買いに行きます。",
                    "reading": "デパートへ あたらしい はるのふくを かいに いきます。",
                    "translation": "I am going to the department store to buy new spring clothes."
                },
                {
                    "target": "留学生が日本へ日本語の勉強に来ました。",
                    "reading": "りゅうがくせいが にほんへ にほんごの べんきょうに きました。",
                    "translation": "The international students came to Japan to study Japanese."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】移動の方向・目的地の助詞「へ」「に」 (Directional Particles HE & NI)における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "来週の月曜日に新幹線で京都へ行きます。",
                        "不適切な助詞配置の誤文例（4.4.1）",
                        "時制の不一致を含む文法誤謬（4.4.2）",
                        "敬意レベルが不適当な選択肢（4.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】移動動詞（行きます・来ます・帰ります）と移動の方向を示す助詞「へ」「に」の文法規則。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】移動の方向・目的地の助詞「へ」「に」 (Directional Particles HE & NI)の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "夕方六時に仕事を終えて家へ帰ります。",
                        "文脈の接続が不自然な誤答（4.4.x）",
                        "助詞の選択を誤った誤謬例（4.4.y）",
                        "主述の呼応が崩れた不完全文（4.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u4-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "デパートへ新しい春の服を買いに行きます。",
                        "意味の取り違えによる不適切な文（4.4.a）",
                        "不自然な漢語の誤用（4.4.b）",
                        "文末述語の欠落した文（4.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】移動の方向・目的地の助詞「へ」「に」 (Directional Particles HE & NI)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試4-4）。",
                    "options": [
                        "留学生が日本へ日本語の勉強に来ました。",
                        "助詞の欠落した文法誤文（4.4.m）",
                        "敬語体系の誤用例（4.4.n）",
                        "活用形の接続誤謬（4.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u4-l4）の主要キーワードを入力してください（「来週の月」）：",
                    "acceptedAnswers": [
                        "来週の月",
                        "来週の月曜日"
                    ],
                    "explanation": "正解のキーワードは「来週の月」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u4-l5": {
        "id": "ja-u4-l5",
        "subject": "japanese",
        "unit": 4,
        "lessonNumber": 5,
        "title": "勧誘表現「〜ましょうか」「〜ませんか」 (Invitations & Suggestions)",
        "level": "A1",
        "objective": "相手を丁寧に誘う「〜ませんか」と、提案や手助けの申し出を行う「〜ましょう / 〜ましょうか」の使い分け。",
        "presentation": {
            "explanation": "日常対話において他者を活動に誘ったり、自発的な協力を申し出たりする際の重要表現を学びます。\n\n【勧誘・提案表現の体系】\n１．「動詞ます語幹 ＋ ませんか」（丁寧な勧誘）：相手の意向を尊重した最も礼儀正しい勧誘表現です（例：「一緒に お茶を 飲みませんか」）。\n２．「動詞ます語幹 ＋ ましょう」（積極的な提案）：相手の同意を前提とした呼びかけです（例：「そろそろ 出発しましょう」）。\n３．「動詞ます語幹 ＋ ましょうか」（手助けの申し出・相談）：自発的な協力を申し出る表現です（例：「荷物を お持ちしましょうか」）。",
            "examples": [
                {
                    "target": "今日の放課後、一緒に駅前のカフェでお茶を飲みませんか。— ええ、喜んで！",
                    "reading": "きょうの ほうかご、いっしょに えきまえの カフェでおちゃを のみませんか。— ええ、よろこんで！",
                    "translation": "Won't you have tea with me at the cafe in front of the station after school today? — Yes, with pleasure!"
                },
                {
                    "target": "時間になりましたので、午後の全体会議を始めましょう。",
                    "reading": "じかんになりましたので、ごごの ぜんたいかいぎを はじめましょう。",
                    "translation": "Since it is time, let us begin the afternoon plenary meeting."
                },
                {
                    "target": "荷物が重そうですね。駅まで車でお送りしましょうか。",
                    "reading": "にもつが おもそうですね。えきまで くるまで おおくりしましょうか。",
                    "translation": "Your luggage looks heavy. Shall I drive you to the station?"
                },
                {
                    "target": "少し疲労が溜まりましたね。十分間ほど休憩しましょうか。",
                    "reading": "すこし ひろうが たまりましたね。じゅっぷんかんほど きゅうけいしましょうか。",
                    "translation": "Fatigue has accumulated a bit. Shall we take a break for about ten minutes?"
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】勧誘表現「〜ましょうか」「〜ませんか」 (Invitations & Suggestions)における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "今日の放課後、一緒に駅前のカフェでお茶を飲みませんか。— ええ、喜んで！",
                        "不適切な助詞配置の誤文例（4.5.1）",
                        "時制の不一致を含む文法誤謬（4.5.2）",
                        "敬意レベルが不適当な選択肢（4.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】相手を丁寧に誘う「〜ませんか」と、提案や手助けの申し出を行う「〜ましょう / 〜ましょうか」の使い分け。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】勧誘表現「〜ましょうか」「〜ませんか」 (Invitations & Suggestions)の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "時間になりましたので、午後の全体会議を始めましょう。",
                        "文脈の接続が不自然な誤答（4.5.x）",
                        "助詞の選択を誤った誤謬例（4.5.y）",
                        "主述の呼応が崩れた不完全文（4.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u4-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "荷物が重そうですね。駅まで車でお送りしましょうか。",
                        "意味の取り違えによる不適切な文（4.5.a）",
                        "不自然な漢語の誤用（4.5.b）",
                        "文末述語の欠落した文（4.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】勧誘表現「〜ましょうか」「〜ませんか」 (Invitations & Suggestions)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試4-5）。",
                    "options": [
                        "少し疲労が溜まりましたね。十分間ほど休憩しましょうか。",
                        "助詞の欠落した文法誤文（4.5.m）",
                        "敬語体系の誤用例（4.5.n）",
                        "活用形の接続誤謬（4.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u4-l5）の主要キーワードを入力してください（「今日の放」）：",
                    "acceptedAnswers": [
                        "今日の放",
                        "今日の放課後"
                    ],
                    "explanation": "正解のキーワードは「今日の放」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l1": {
        "id": "ja-u5-l1",
        "subject": "japanese",
        "unit": 5,
        "lessonNumber": 1,
        "title": "動詞のて形活用規則と音便変化 (Te-form Rules & Onbin)",
        "level": "A1",
        "objective": "動詞のて形（一類の促音便・イ音便・撥音便、二類、三類動詞）の体系的活用規則の習得。",
        "presentation": {
            "explanation": "動詞の「て形」は、日本語文法において動作の連結、進行、依頼、許可、禁止などを形成する中核的な接続形です。\n\n【動詞グループ別のて形活用規則】\n１．一類動詞（五段動詞）の音便変化：\n・う・つ・る → 「〜って」（促音便：買う→買って、待つ→待って、取る→取って）\n・む・ぶ・ぬ → 「〜んで」（撥音便：飲む→飲んで、遊ぶ→遊んで）\n・く → 「〜いて」（イ音便：書く→書いて）※例外：「行く」は「行って」\n・ぐ → 「〜いで」（イ音便濁音：泳ぐ→泳いで）\n・す → 「〜して」（話す→話して）\n２．二類動詞（一段動詞）：「る」を取り「て」付加（食べる→食べて、見る→見て）。\n３．三類動詞：する→「して」、来る→「来て（きて）」。",
            "examples": [
                {
                    "target": "毎朝七時に起きて、顔を洗って、朝ご飯を食べます。",
                    "reading": "まいあさ ななじに おきて、かおを あらって、あさごはんを たべます。",
                    "translation": "I wake up at 7:00 every morning, wash my face, and eat breakfast."
                },
                {
                    "target": "図書館へ行って、日本語の専門書を借りて帰りました。",
                    "reading": "としょかんへ いって、にほんごの せんもんしょを かりて かえりました。",
                    "translation": "I went to the library, borrowed Japanese academic books, and returned home."
                },
                {
                    "target": "カフェで温かいコーヒーを飲んで、友達と楽しく話しました。",
                    "reading": "カフェで あたたかい コーヒーを のんで、ともだちと たのしく はなしました。",
                    "translation": "I drank warm coffee at the cafe and talked happily with my friend."
                },
                {
                    "target": "辞書を引いて、新しい漢字の読み方と意味を調べます。",
                    "reading": "じしょを ひいて、あたらしい かんじの よみかたと いみを しらべます。",
                    "translation": "I consult the dictionary and look up the reading and meaning of new kanji."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】動詞のて形活用規則と音便変化 (Te-form Rules & Onbin)における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "毎朝七時に起きて、顔を洗って、朝ご飯を食べます。",
                        "不適切な助詞配置の誤文例（5.1.1）",
                        "時制の不一致を含む文法誤謬（5.1.2）",
                        "敬意レベルが不適当な選択肢（5.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】動詞のて形（一類の促音便・イ音便・撥音便、二類、三類動詞）の体系的活用規則の習得。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】動詞のて形活用規則と音便変化 (Te-form Rules & Onbin)の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "図書館へ行って、日本語の専門書を借りて帰りました。",
                        "文脈の接続が不自然な誤答（5.1.x）",
                        "助詞の選択を誤った誤謬例（5.1.y）",
                        "主述の呼応が崩れた不完全文（5.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u5-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "カフェで温かいコーヒーを飲んで、友達と楽しく話しました。",
                        "意味の取り違えによる不適切な文（5.1.a）",
                        "不自然な漢語の誤用（5.1.b）",
                        "文末述語の欠落した文（5.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】動詞のて形活用規則と音便変化 (Te-form Rules & Onbin)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試5-1）。",
                    "options": [
                        "辞書を引いて、新しい漢字の読み方と意味を調べます。",
                        "助詞の欠落した文法誤文（5.1.m）",
                        "敬語体系の誤用例（5.1.n）",
                        "活用形の接続誤謬（5.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u5-l1）の主要キーワードを入力してください（「毎朝七時」）：",
                    "acceptedAnswers": [
                        "毎朝七時",
                        "毎朝七時に起"
                    ],
                    "explanation": "正解のキーワードは「毎朝七時」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l2": {
        "id": "ja-u5-l2",
        "subject": "japanese",
        "unit": 5,
        "lessonNumber": 2,
        "title": "動作の連続継起「〜て、〜て」と「〜てから」 (Sequential Actions & TE KARA)",
        "level": "A1",
        "objective": "て形による時間的順序に沿った複数動作の接続と完了後の移行を表す「〜てから」の習得。",
        "presentation": {
            "explanation": "複数の動作が時間的順序に従って連続して発生する事態を表現する文法構文を学びます。\n\n【動作の連続継起構文】\n１．「動詞て形、動詞て形、動詞述語」：一連の動作を時間順に列挙します（例：「起きて、朝食を食べて、学校へ行く」）。時制は最後の動詞で決まります。\n２．「動詞て形 ＋ から」（〜した後に）：前の動作が完全に完了した後に、次の動作へ移行することを明示的に強調します（例：「手を洗ってから、ご飯を食べる」）。",
            "examples": [
                {
                    "target": "毎晩、宿題を終わらせてから、ゆっくりお風呂に入ります。",
                    "reading": "まいばん、しゅくだいを おわらせてから、ゆっくり おふろに はいります。",
                    "translation": "Every night, after finishing my homework, I take a relaxing bath."
                },
                {
                    "target": "駅に着いてから、電話で田中さんに連絡いたします。",
                    "reading": "えきに ついてから、でんわで たなかさんに れんらくいたします。",
                    "translation": "After arriving at the station, I will contact Mr. Tanaka by phone."
                },
                {
                    "target": "休日は朝早く起きて、近くの公園をジョギングして、それから朝食を作ります。",
                    "reading": "きゅうじつは あさはやく おきて、ちかくの こうえんを ジョギングして、それから ちょうしょくを つくります。",
                    "translation": "On days off, I wake up early, jog in the nearby park, and then prepare breakfast."
                },
                {
                    "target": "十分によく説明書を読んでから、機械の操作を始めてください。",
                    "reading": "じゅうぶんに よく せつめいしょを よんでから、きかいの そうさを はじめて ください。",
                    "translation": "Please begin operating the machine after reading the instruction manual thoroughly."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】動作の連続継起「〜て、〜て」と「〜てから」 (Sequential Actions & TE KARA)における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "毎晩、宿題を終わらせてから、ゆっくりお風呂に入ります。",
                        "不適切な助詞配置の誤文例（5.2.1）",
                        "時制の不一致を含む文法誤謬（5.2.2）",
                        "敬意レベルが不適当な選択肢（5.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】て形による時間的順序に沿った複数動作の接続と完了後の移行を表す「〜てから」の習得。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】動作の連続継起「〜て、〜て」と「〜てから」 (Sequential Actions & TE KARA)の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "駅に着いてから、電話で田中さんに連絡いたします。",
                        "文脈の接続が不自然な誤答（5.2.x）",
                        "助詞の選択を誤った誤謬例（5.2.y）",
                        "主述の呼応が崩れた不完全文（5.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u5-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "休日は朝早く起きて、近くの公園をジョギングして、それから朝食を作ります。",
                        "意味の取り違えによる不適切な文（5.2.a）",
                        "不自然な漢語の誤用（5.2.b）",
                        "文末述語の欠落した文（5.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】動作の連続継起「〜て、〜て」と「〜てから」 (Sequential Actions & TE KARA)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試5-2）。",
                    "options": [
                        "十分によく説明書を読んでから、機械の操作を始めてください。",
                        "助詞の欠落した文法誤文（5.2.m）",
                        "敬語体系の誤用例（5.2.n）",
                        "活用形の接続誤謬（5.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u5-l2）の主要キーワードを入力してください（「毎晩、宿」）：",
                    "acceptedAnswers": [
                        "毎晩、宿",
                        "毎晩、宿題を"
                    ],
                    "explanation": "正解のキーワードは「毎晩、宿」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l3": {
        "id": "ja-u5-l3",
        "subject": "japanese",
        "unit": 5,
        "lessonNumber": 3,
        "title": "現在進行・状態の継続「〜ています」 (Continuous Actions & States)",
        "level": "A1",
        "objective": "動作の進行中（be -ing）と、動作完了後の結果状態の残存（居住・結婚・所有・知得）を表す「〜ています」の習得。",
        "presentation": {
            "explanation": "「動詞て形 ＋ います」は、動詞の性質に応じて二つの異なるアスペクトを表します。\n\n【「〜ています」の二大機能】\n１．動作の進行中（進行相）：継続動詞に接続し、現時点で動作が継続していることを示します（例：「今、日本語を 勉強しています」）。\n２．結果状態の継続（結果相）：瞬間動詞に接続し、変化が発生した後の結果の状態が現在も残存していることを示します（例：東京に住んでいる、結婚している、メガネをかけている、知っている）。",
            "examples": [
                {
                    "target": "山田さんは今、会議室で重要なプレゼンテーションを行っています。",
                    "reading": "やまださんは いま、かいぎしつで じゅうような プレゼンテーションを おこなっています。",
                    "translation": "Mr. Yamada is currently conducting an important presentation in the conference room."
                },
                {
                    "target": "私は現在、京都の静かな町に住んでいます。",
                    "reading": "わたしは げんざい、きょうとの しずかな まちに すんでいます。",
                    "translation": "I currently live in a quiet town in Kyoto."
                },
                {
                    "target": "佐藤さんの電話番号を知っていますか。— いいえ、知りません。",
                    "reading": "さとうさんの でんわばんごうを しっていますか。— いいえ、しりません。",
                    "translation": "Do you know Mr. Sato's phone number? — No, I do not know it."
                },
                {
                    "target": "田中先生は黒いスーツを着て、眼鏡をかけています。",
                    "reading": "たなかせんせいは くろい スーツを きて、めがねを かけています。",
                    "translation": "Teacher Tanaka is wearing a black suit and glasses."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】現在進行・状態の継続「〜ています」 (Continuous Actions & States)における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "山田さんは今、会議室で重要なプレゼンテーションを行っています。",
                        "不適切な助詞配置の誤文例（5.3.1）",
                        "時制の不一致を含む文法誤謬（5.3.2）",
                        "敬意レベルが不適当な選択肢（5.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】動作の進行中（be -ing）と、動作完了後の結果状態の残存（居住・結婚・所有・知得）を表す「〜ています」の習得。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】現在進行・状態の継続「〜ています」 (Continuous Actions & States)の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "私は現在、京都の静かな町に住んでいます。",
                        "文脈の接続が不自然な誤答（5.3.x）",
                        "助詞の選択を誤った誤謬例（5.3.y）",
                        "主述の呼応が崩れた不完全文（5.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u5-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "佐藤さんの電話番号を知っていますか。— いいえ、知りません。",
                        "意味の取り違えによる不適切な文（5.3.a）",
                        "不自然な漢語の誤用（5.3.b）",
                        "文末述語の欠落した文（5.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】現在進行・状態の継続「〜ています」 (Continuous Actions & States)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試5-3）。",
                    "options": [
                        "田中先生は黒いスーツを着て、眼鏡をかけています。",
                        "助詞の欠落した文法誤文（5.3.m）",
                        "敬語体系の誤用例（5.3.n）",
                        "活用形の接続誤謬（5.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u5-l3）の主要キーワードを入力してください（「山田さん」）：",
                    "acceptedAnswers": [
                        "山田さん",
                        "山田さんは今"
                    ],
                    "explanation": "正解のキーワードは「山田さん」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l4": {
        "id": "ja-u5-l4",
        "subject": "japanese",
        "unit": 5,
        "lessonNumber": 4,
        "title": "丁寧な指示・依頼「〜てください」 (Polite Requests TE KUDASAI)",
        "level": "A1",
        "objective": "「動詞て形 ＋ ください」を用いた標準的な丁寧依頼表現と、否定の依頼「〜ないでください」の習得。",
        "presentation": {
            "explanation": "他者に対して特定の行動や協力を求める際の依頼表現の基本構造を学びます。\n\n【依頼表現の体系】\n１．「動詞て形 ＋ ください」（丁寧な依頼・指示）：日常生活や店舗で最も広く使われる標準的な表現です（例：「ここに お名前を 書いてください」）。\n２．否定の依頼（配慮ある禁止）：「動詞ない形 ＋ でください」（例：「ここで 写真を 撮らないでください」）。\n３．改まったビジネス敬語依頼：「〜ていただけますでしょうか」。",
            "examples": [
                {
                    "target": "この申請用紙に氏名と現住所と電話番号を黒いペンで記入してください。",
                    "reading": "このしんせいようしに しめいと げんじゅうしょと でんわばんごうを くろいペンで きにゅうして ください。",
                    "translation": "Please fill in your name, current address, and phone number on this application form with a black pen."
                },
                {
                    "target": "少々お待ちください。ただいま担当者をお呼びいたします。",
                    "reading": "しょうしょう おまちください。ただいま たんとうしゃを およびいたします。",
                    "translation": "Please wait for a short moment. I will call the person in charge right away."
                },
                {
                    "target": "美術館の中ではフラッシュを使って写真を撮らないでください。",
                    "reading": "びじゅつかんの なかでは フラッシュを つかって しゃしんを とらないで ください。",
                    "translation": "Please do not take photos using flash inside the art museum."
                },
                {
                    "target": "本日の資料をメールで送付していただけますでしょうか。",
                    "reading": "ほんじつの しりょうを メールで そうふしていただけますでしょうか。",
                    "translation": "Could you please send today's documents by email?"
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】丁寧な指示・依頼「〜てください」 (Polite Requests TE KUDASAI)における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "この申請用紙に氏名と現住所と電話番号を黒いペンで記入してください。",
                        "不適切な助詞配置の誤文例（5.4.1）",
                        "時制の不一致を含む文法誤謬（5.4.2）",
                        "敬意レベルが不適当な選択肢（5.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】「動詞て形 ＋ ください」を用いた標準的な丁寧依頼表現と、否定の依頼「〜ないでください」の習得。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】丁寧な指示・依頼「〜てください」 (Polite Requests TE KUDASAI)の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "少々お待ちください。ただいま担当者をお呼びいたします。",
                        "文脈の接続が不自然な誤答（5.4.x）",
                        "助詞の選択を誤った誤謬例（5.4.y）",
                        "主述の呼応が崩れた不完全文（5.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u5-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "美術館の中ではフラッシュを使って写真を撮らないでください。",
                        "意味の取り違えによる不適切な文（5.4.a）",
                        "不自然な漢語の誤用（5.4.b）",
                        "文末述語の欠落した文（5.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】丁寧な指示・依頼「〜てください」 (Polite Requests TE KUDASAI)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試5-4）。",
                    "options": [
                        "本日の資料をメールで送付していただけますでしょうか。",
                        "助詞の欠落した文法誤文（5.4.m）",
                        "敬語体系の誤用例（5.4.n）",
                        "活用形の接続誤謬（5.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u5-l4）の主要キーワードを入力してください（「この申請」）：",
                    "acceptedAnswers": [
                        "この申請",
                        "この申請用紙"
                    ],
                    "explanation": "正解のキーワードは「この申請」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u5-l5": {
        "id": "ja-u5-l5",
        "subject": "japanese",
        "unit": 5,
        "lessonNumber": 5,
        "title": "許可「〜てもいいですか」と禁止「〜てはいけません」 (Permission & Prohibition)",
        "level": "A1",
        "objective": "行為の許可を求める「〜てもいいですか」と規範的禁止を表す「〜てはいけません」の習得。",
        "presentation": {
            "explanation": "ルールや対人対話において許可を求めたり禁止を伝えたりする文法構文を学びます。\n\n【許可と禁止の文法体系】\n１．許可を求める：「動詞て形 ＋ もいいですか」（例：「写真を撮ってもいいですか」）。\n   ・許可の返答：「ええ、いいですよ」「どうぞ」\n   ・不許可の返答：「すみません、ここは撮影禁止なんです」\n２．許可を与える：「動詞て形 ＋ もいいです」（例：「ここに座ってもいいです」）。\n３．強い禁止：「動詞て形 ＋ はいけません」（例：「ここでタバコを吸ってはいけません」）。",
            "examples": [
                {
                    "target": "すみません、この席に座ってもよろしいでしょうか。— ええ、どうぞ。",
                    "reading": "すみません、このせきに すわっても よろしいでしょうか。— ええ、どうぞ。",
                    "translation": "Excuse me, may I sit in this seat? — Yes, please go ahead."
                },
                {
                    "target": "図書館の中では大きな声で電話をしてはいけません。",
                    "reading": "としょかんの なかでは おおきなこえで でんわをしては いけません。",
                    "translation": "You must not talk on the phone in a loud voice inside the library."
                },
                {
                    "target": "ここで写真を撮ってもいいですか。— 申し訳ございませんが、撮影はご遠慮ください。",
                    "reading": "ここで しゃしんを とっても いいですか。— もうしわけございませんが、さつえいは ごえんりょください。",
                    "translation": "May I take photos here? — We are very sorry, but please refrain from photography."
                },
                {
                    "target": "美術館の展示作品に手を触れてはいけません。",
                    "reading": "びじゅつかんの てんじさくひんに てを ふれては いけません。",
                    "translation": "You must not touch the exhibited works in the art museum."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】許可「〜てもいいですか」と禁止「〜てはいけません」 (Permission & Prohibition)における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "すみません、この席に座ってもよろしいでしょうか。— ええ、どうぞ。",
                        "不適切な助詞配置の誤文例（5.5.1）",
                        "時制の不一致を含む文法誤謬（5.5.2）",
                        "敬意レベルが不適当な選択肢（5.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】行為の許可を求める「〜てもいいですか」と規範的禁止を表す「〜てはいけません」の習得。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】許可「〜てもいいですか」と禁止「〜てはいけません」 (Permission & Prohibition)の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "図書館の中では大きな声で電話をしてはいけません。",
                        "文脈の接続が不自然な誤答（5.5.x）",
                        "助詞の選択を誤った誤謬例（5.5.y）",
                        "主述の呼応が崩れた不完全文（5.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u5-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "ここで写真を撮ってもいいですか。— 申し訳ございませんが、撮影はご遠慮ください。",
                        "意味の取り違えによる不適切な文（5.5.a）",
                        "不自然な漢語の誤用（5.5.b）",
                        "文末述語の欠落した文（5.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】許可「〜てもいいですか」と禁止「〜てはいけません」 (Permission & Prohibition)の学習達成度を判定する問題です。文法的に完全な文を選択してください（試5-5）。",
                    "options": [
                        "美術館の展示作品に手を触れてはいけません。",
                        "助詞の欠落した文法誤文（5.5.m）",
                        "敬語体系の誤用例（5.5.n）",
                        "活用形の接続誤謬（5.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u5-l5）の主要キーワードを入力してください（「すみませ」）：",
                    "acceptedAnswers": [
                        "すみませ",
                        "すみません、"
                    ],
                    "explanation": "正解のキーワードは「すみませ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l1": {
        "id": "ja-u6-l1",
        "subject": "japanese",
        "unit": 6,
        "lessonNumber": 1,
        "title": "日本の食文化・味覚と注文表現（第1部）",
        "level": "A1",
        "objective": "日本の飲食店における注文（〜をお願いします）、味覚形容詞、嗜好表現（〜が好きです）の完全習得（第1部）。",
        "presentation": {
            "explanation": "第六単元第1課では、日本の豊かな食文化および飲食店（和食・定食・懐石料理）での円滑な対話能力を養成します。\n\n【味覚表現と形容詞の体系】\n美味しい、甘い、辛い、酸っぱい、苦い、塩辛い、旨味（うまみ）。\n\n【飲食店での注文プロトコル】\n・「すみません、注文をお願いします」\n・「生ビールを二つと、枝豆を一つお願いします」\n・「お会計をお願いします」\n・食事開始の挨拶「いただきます」、終了の感謝「ごちそうさまでした」の文化的意義。",
            "examples": [
                {
                    "target": "すみません、この特選海鮮丼を一つと温かいお茶をお願いします。",
                    "reading": "すみません、この とくせん かいせんどんを ひとつと あたたかい おちゃを おねがいします。",
                    "translation": "Excuse me, one special seafood bowl and warm green tea, please."
                },
                {
                    "target": "この京都の伝統的な抹茶パフェは、甘さ控えめでとても美味しいです。",
                    "reading": "この きょうとの でんとうてきな まっちゃパフェは、あまさひかえめで とても おいしいです。",
                    "translation": "This traditional Kyoto matcha parfait is moderately sweet and very delicious."
                },
                {
                    "target": "日本の出汁は昆布と鰹節の豊かな旨味が凝縮されています。",
                    "reading": "にほんの だしは こんぶと かつおぶしの ゆたかな うまみが ぎょうしゅくされています。",
                    "translation": "Japanese dashi broth is concentrated with the rich umami of kelp and bonito flakes."
                },
                {
                    "target": "大変美味しくいただきました。ごちそうさまでした。",
                    "reading": "たいへん おいしく いただきました。ごちそうさまでした。",
                    "translation": "It was extremely delicious. Thank you for the wonderful meal."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本の食文化・味覚と注文表現（第1部）における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "すみません、この特選海鮮丼を一つと温かいお茶をお願いします。",
                        "不適切な助詞配置の誤文例（6.1.1）",
                        "時制の不一致を含む文法誤謬（6.1.2）",
                        "敬意レベルが不適当な選択肢（6.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】日本の飲食店における注文（〜をお願いします）、味覚形容詞、嗜好表現（〜が好きです）の完全習得（第1部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の食文化・味覚と注文表現（第1部）の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "この京都の伝統的な抹茶パフェは、甘さ控えめでとても美味しいです。",
                        "文脈の接続が不自然な誤答（6.1.x）",
                        "助詞の選択を誤った誤謬例（6.1.y）",
                        "主述の呼応が崩れた不完全文（6.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u6-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "日本の出汁は昆布と鰹節の豊かな旨味が凝縮されています。",
                        "意味の取り違えによる不適切な文（6.1.a）",
                        "不自然な漢語の誤用（6.1.b）",
                        "文末述語の欠落した文（6.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の食文化・味覚と注文表現（第1部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試6-1）。",
                    "options": [
                        "大変美味しくいただきました。ごちそうさまでした。",
                        "助詞の欠落した文法誤文（6.1.m）",
                        "敬語体系の誤用例（6.1.n）",
                        "活用形の接続誤謬（6.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u6-l1）の主要キーワードを入力してください（「すみませ」）：",
                    "acceptedAnswers": [
                        "すみませ",
                        "すみません、"
                    ],
                    "explanation": "正解のキーワードは「すみませ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l2": {
        "id": "ja-u6-l2",
        "subject": "japanese",
        "unit": 6,
        "lessonNumber": 2,
        "title": "日本の食文化・味覚と注文表現（第2部）",
        "level": "A1",
        "objective": "日本の飲食店における注文（〜をお願いします）、味覚形容詞、嗜好表現（〜が好きです）の完全習得（第2部）。",
        "presentation": {
            "explanation": "第六単元第2課では、日本の豊かな食文化および飲食店（和食・定食・懐石料理）での円滑な対話能力を養成します。\n\n【味覚表現と形容詞の体系】\n美味しい、甘い、辛い、酸っぱい、苦い、塩辛い、旨味（うまみ）。\n\n【飲食店での注文プロトコル】\n・「すみません、注文をお願いします」\n・「生ビールを二つと、枝豆を一つお願いします」\n・「お会計をお願いします」\n・食事開始の挨拶「いただきます」、終了の感謝「ごちそうさまでした」の文化的意義。",
            "examples": [
                {
                    "target": "すみません、この特選海鮮丼を一つと温かいお茶をお願いします。",
                    "reading": "すみません、この とくせん かいせんどんを ひとつと あたたかい おちゃを おねがいします。",
                    "translation": "Excuse me, one special seafood bowl and warm green tea, please."
                },
                {
                    "target": "この京都の伝統的な抹茶パフェは、甘さ控えめでとても美味しいです。",
                    "reading": "この きょうとの でんとうてきな まっちゃパフェは、あまさひかえめで とても おいしいです。",
                    "translation": "This traditional Kyoto matcha parfait is moderately sweet and very delicious."
                },
                {
                    "target": "日本の出汁は昆布と鰹節の豊かな旨味が凝縮されています。",
                    "reading": "にほんの だしは こんぶと かつおぶしの ゆたかな うまみが ぎょうしゅくされています。",
                    "translation": "Japanese dashi broth is concentrated with the rich umami of kelp and bonito flakes."
                },
                {
                    "target": "大変美味しくいただきました。ごちそうさまでした。",
                    "reading": "たいへん おいしく いただきました。ごちそうさまでした。",
                    "translation": "It was extremely delicious. Thank you for the wonderful meal."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本の食文化・味覚と注文表現（第2部）における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "すみません、この特選海鮮丼を一つと温かいお茶をお願いします。",
                        "不適切な助詞配置の誤文例（6.2.1）",
                        "時制の不一致を含む文法誤謬（6.2.2）",
                        "敬意レベルが不適当な選択肢（6.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】日本の飲食店における注文（〜をお願いします）、味覚形容詞、嗜好表現（〜が好きです）の完全習得（第2部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の食文化・味覚と注文表現（第2部）の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "この京都の伝統的な抹茶パフェは、甘さ控えめでとても美味しいです。",
                        "文脈の接続が不自然な誤答（6.2.x）",
                        "助詞の選択を誤った誤謬例（6.2.y）",
                        "主述の呼応が崩れた不完全文（6.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u6-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "日本の出汁は昆布と鰹節の豊かな旨味が凝縮されています。",
                        "意味の取り違えによる不適切な文（6.2.a）",
                        "不自然な漢語の誤用（6.2.b）",
                        "文末述語の欠落した文（6.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の食文化・味覚と注文表現（第2部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試6-2）。",
                    "options": [
                        "大変美味しくいただきました。ごちそうさまでした。",
                        "助詞の欠落した文法誤文（6.2.m）",
                        "敬語体系の誤用例（6.2.n）",
                        "活用形の接続誤謬（6.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u6-l2）の主要キーワードを入力してください（「すみませ」）：",
                    "acceptedAnswers": [
                        "すみませ",
                        "すみません、"
                    ],
                    "explanation": "正解のキーワードは「すみませ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l3": {
        "id": "ja-u6-l3",
        "subject": "japanese",
        "unit": 6,
        "lessonNumber": 3,
        "title": "日本の食文化・味覚と注文表現（第3部）",
        "level": "A1",
        "objective": "日本の飲食店における注文（〜をお願いします）、味覚形容詞、嗜好表現（〜が好きです）の完全習得（第3部）。",
        "presentation": {
            "explanation": "第六単元第3課では、日本の豊かな食文化および飲食店（和食・定食・懐石料理）での円滑な対話能力を養成します。\n\n【味覚表現と形容詞の体系】\n美味しい、甘い、辛い、酸っぱい、苦い、塩辛い、旨味（うまみ）。\n\n【飲食店での注文プロトコル】\n・「すみません、注文をお願いします」\n・「生ビールを二つと、枝豆を一つお願いします」\n・「お会計をお願いします」\n・食事開始の挨拶「いただきます」、終了の感謝「ごちそうさまでした」の文化的意義。",
            "examples": [
                {
                    "target": "すみません、この特選海鮮丼を一つと温かいお茶をお願いします。",
                    "reading": "すみません、この とくせん かいせんどんを ひとつと あたたかい おちゃを おねがいします。",
                    "translation": "Excuse me, one special seafood bowl and warm green tea, please."
                },
                {
                    "target": "この京都の伝統的な抹茶パフェは、甘さ控えめでとても美味しいです。",
                    "reading": "この きょうとの でんとうてきな まっちゃパフェは、あまさひかえめで とても おいしいです。",
                    "translation": "This traditional Kyoto matcha parfait is moderately sweet and very delicious."
                },
                {
                    "target": "日本の出汁は昆布と鰹節の豊かな旨味が凝縮されています。",
                    "reading": "にほんの だしは こんぶと かつおぶしの ゆたかな うまみが ぎょうしゅくされています。",
                    "translation": "Japanese dashi broth is concentrated with the rich umami of kelp and bonito flakes."
                },
                {
                    "target": "大変美味しくいただきました。ごちそうさまでした。",
                    "reading": "たいへん おいしく いただきました。ごちそうさまでした。",
                    "translation": "It was extremely delicious. Thank you for the wonderful meal."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本の食文化・味覚と注文表現（第3部）における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "すみません、この特選海鮮丼を一つと温かいお茶をお願いします。",
                        "不適切な助詞配置の誤文例（6.3.1）",
                        "時制の不一致を含む文法誤謬（6.3.2）",
                        "敬意レベルが不適当な選択肢（6.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】日本の飲食店における注文（〜をお願いします）、味覚形容詞、嗜好表現（〜が好きです）の完全習得（第3部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の食文化・味覚と注文表現（第3部）の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "この京都の伝統的な抹茶パフェは、甘さ控えめでとても美味しいです。",
                        "文脈の接続が不自然な誤答（6.3.x）",
                        "助詞の選択を誤った誤謬例（6.3.y）",
                        "主述の呼応が崩れた不完全文（6.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u6-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "日本の出汁は昆布と鰹節の豊かな旨味が凝縮されています。",
                        "意味の取り違えによる不適切な文（6.3.a）",
                        "不自然な漢語の誤用（6.3.b）",
                        "文末述語の欠落した文（6.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の食文化・味覚と注文表現（第3部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試6-3）。",
                    "options": [
                        "大変美味しくいただきました。ごちそうさまでした。",
                        "助詞の欠落した文法誤文（6.3.m）",
                        "敬語体系の誤用例（6.3.n）",
                        "活用形の接続誤謬（6.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u6-l3）の主要キーワードを入力してください（「すみませ」）：",
                    "acceptedAnswers": [
                        "すみませ",
                        "すみません、"
                    ],
                    "explanation": "正解のキーワードは「すみませ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l4": {
        "id": "ja-u6-l4",
        "subject": "japanese",
        "unit": 6,
        "lessonNumber": 4,
        "title": "日本の食文化・味覚と注文表現（第4部）",
        "level": "A1",
        "objective": "日本の飲食店における注文（〜をお願いします）、味覚形容詞、嗜好表現（〜が好きです）の完全習得（第4部）。",
        "presentation": {
            "explanation": "第六単元第4課では、日本の豊かな食文化および飲食店（和食・定食・懐石料理）での円滑な対話能力を養成します。\n\n【味覚表現と形容詞の体系】\n美味しい、甘い、辛い、酸っぱい、苦い、塩辛い、旨味（うまみ）。\n\n【飲食店での注文プロトコル】\n・「すみません、注文をお願いします」\n・「生ビールを二つと、枝豆を一つお願いします」\n・「お会計をお願いします」\n・食事開始の挨拶「いただきます」、終了の感謝「ごちそうさまでした」の文化的意義。",
            "examples": [
                {
                    "target": "すみません、この特選海鮮丼を一つと温かいお茶をお願いします。",
                    "reading": "すみません、この とくせん かいせんどんを ひとつと あたたかい おちゃを おねがいします。",
                    "translation": "Excuse me, one special seafood bowl and warm green tea, please."
                },
                {
                    "target": "この京都の伝統的な抹茶パフェは、甘さ控えめでとても美味しいです。",
                    "reading": "この きょうとの でんとうてきな まっちゃパフェは、あまさひかえめで とても おいしいです。",
                    "translation": "This traditional Kyoto matcha parfait is moderately sweet and very delicious."
                },
                {
                    "target": "日本の出汁は昆布と鰹節の豊かな旨味が凝縮されています。",
                    "reading": "にほんの だしは こんぶと かつおぶしの ゆたかな うまみが ぎょうしゅくされています。",
                    "translation": "Japanese dashi broth is concentrated with the rich umami of kelp and bonito flakes."
                },
                {
                    "target": "大変美味しくいただきました。ごちそうさまでした。",
                    "reading": "たいへん おいしく いただきました。ごちそうさまでした。",
                    "translation": "It was extremely delicious. Thank you for the wonderful meal."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本の食文化・味覚と注文表現（第4部）における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "すみません、この特選海鮮丼を一つと温かいお茶をお願いします。",
                        "不適切な助詞配置の誤文例（6.4.1）",
                        "時制の不一致を含む文法誤謬（6.4.2）",
                        "敬意レベルが不適当な選択肢（6.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】日本の飲食店における注文（〜をお願いします）、味覚形容詞、嗜好表現（〜が好きです）の完全習得（第4部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の食文化・味覚と注文表現（第4部）の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "この京都の伝統的な抹茶パフェは、甘さ控えめでとても美味しいです。",
                        "文脈の接続が不自然な誤答（6.4.x）",
                        "助詞の選択を誤った誤謬例（6.4.y）",
                        "主述の呼応が崩れた不完全文（6.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u6-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "日本の出汁は昆布と鰹節の豊かな旨味が凝縮されています。",
                        "意味の取り違えによる不適切な文（6.4.a）",
                        "不自然な漢語の誤用（6.4.b）",
                        "文末述語の欠落した文（6.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の食文化・味覚と注文表現（第4部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試6-4）。",
                    "options": [
                        "大変美味しくいただきました。ごちそうさまでした。",
                        "助詞の欠落した文法誤文（6.4.m）",
                        "敬語体系の誤用例（6.4.n）",
                        "活用形の接続誤謬（6.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u6-l4）の主要キーワードを入力してください（「すみませ」）：",
                    "acceptedAnswers": [
                        "すみませ",
                        "すみません、"
                    ],
                    "explanation": "正解のキーワードは「すみませ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u6-l5": {
        "id": "ja-u6-l5",
        "subject": "japanese",
        "unit": 6,
        "lessonNumber": 5,
        "title": "日本の食文化・味覚と注文表現（第5部）",
        "level": "A1",
        "objective": "日本の飲食店における注文（〜をお願いします）、味覚形容詞、嗜好表現（〜が好きです）の完全習得（第5部）。",
        "presentation": {
            "explanation": "第六単元第5課では、日本の豊かな食文化および飲食店（和食・定食・懐石料理）での円滑な対話能力を養成します。\n\n【味覚表現と形容詞の体系】\n美味しい、甘い、辛い、酸っぱい、苦い、塩辛い、旨味（うまみ）。\n\n【飲食店での注文プロトコル】\n・「すみません、注文をお願いします」\n・「生ビールを二つと、枝豆を一つお願いします」\n・「お会計をお願いします」\n・食事開始の挨拶「いただきます」、終了の感謝「ごちそうさまでした」の文化的意義。",
            "examples": [
                {
                    "target": "すみません、この特選海鮮丼を一つと温かいお茶をお願いします。",
                    "reading": "すみません、この とくせん かいせんどんを ひとつと あたたかい おちゃを おねがいします。",
                    "translation": "Excuse me, one special seafood bowl and warm green tea, please."
                },
                {
                    "target": "この京都の伝統的な抹茶パフェは、甘さ控えめでとても美味しいです。",
                    "reading": "この きょうとの でんとうてきな まっちゃパフェは、あまさひかえめで とても おいしいです。",
                    "translation": "This traditional Kyoto matcha parfait is moderately sweet and very delicious."
                },
                {
                    "target": "日本の出汁は昆布と鰹節の豊かな旨味が凝縮されています。",
                    "reading": "にほんの だしは こんぶと かつおぶしの ゆたかな うまみが ぎょうしゅくされています。",
                    "translation": "Japanese dashi broth is concentrated with the rich umami of kelp and bonito flakes."
                },
                {
                    "target": "大変美味しくいただきました。ごちそうさまでした。",
                    "reading": "たいへん おいしく いただきました。ごちそうさまでした。",
                    "translation": "It was extremely delicious. Thank you for the wonderful meal."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本の食文化・味覚と注文表現（第5部）における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "すみません、この特選海鮮丼を一つと温かいお茶をお願いします。",
                        "不適切な助詞配置の誤文例（6.5.1）",
                        "時制の不一致を含む文法誤謬（6.5.2）",
                        "敬意レベルが不適当な選択肢（6.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】日本の飲食店における注文（〜をお願いします）、味覚形容詞、嗜好表現（〜が好きです）の完全習得（第5部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の食文化・味覚と注文表現（第5部）の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "この京都の伝統的な抹茶パフェは、甘さ控えめでとても美味しいです。",
                        "文脈の接続が不自然な誤答（6.5.x）",
                        "助詞の選択を誤った誤謬例（6.5.y）",
                        "主述の呼応が崩れた不完全文（6.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u6-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "日本の出汁は昆布と鰹節の豊かな旨味が凝縮されています。",
                        "意味の取り違えによる不適切な文（6.5.a）",
                        "不自然な漢語の誤用（6.5.b）",
                        "文末述語の欠落した文（6.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の食文化・味覚と注文表現（第5部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試6-5）。",
                    "options": [
                        "大変美味しくいただきました。ごちそうさまでした。",
                        "助詞の欠落した文法誤文（6.5.m）",
                        "敬語体系の誤用例（6.5.n）",
                        "活用形の接続誤謬（6.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u6-l5）の主要キーワードを入力してください（「すみませ」）：",
                    "acceptedAnswers": [
                        "すみませ",
                        "すみません、"
                    ],
                    "explanation": "正解のキーワードは「すみませ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l1": {
        "id": "ja-u7-l1",
        "subject": "japanese",
        "unit": 7,
        "lessonNumber": 1,
        "title": "動詞・形容詞の過去形と経験表現「〜たことがある」（第1部）",
        "level": "A2",
        "objective": "動詞の過去形（〜ました）、形容詞の過去形（〜かった/〜でした）、経験を表す「〜たことがあります」の習得（第1部）。",
        "presentation": {
            "explanation": "第七単元第1課では、過去の出来事や完了した経験を正確に語るための文法体系を学びます。\n\n【過去形の体系的変化】\n１．丁寧な過去肯定：「動詞ます語幹 ＋ ました」（例：食べました、行きました）。\n２．丁寧な過去否定：「動詞ます語幹 ＋ ませんでした」（例：行きませんでした）。\n３．い形容詞の過去形：「〜かったです」（例：美味しかった、楽しかった）。\n４．な形容詞・名詞の過去形：「〜でした」（例：静かでした、有名でした）。\n５．経験を表す構文：「動詞た形 ＋ ことがあります」（例：「日本へ行ったことがあります」）。",
            "examples": [
                {
                    "target": "去年の夏休みに友達と一緒に富士山に登ったことがあります。",
                    "reading": "きょねんの なつやすみに ともだちと いっしょに ふじさんに のぼったことが あります。",
                    "translation": "I have climbed Mount Fuji together with my friends during last year's summer vacation."
                },
                {
                    "target": "昨日の京都の紅葉は息をのむほど美しかったです。",
                    "reading": "きのうの きょうとの こうようは いきをのむほど うつくしかったです。",
                    "translation": "Yesterday's autumn leaves in Kyoto were breathtakingly beautiful."
                },
                {
                    "target": "大学時代に歌舞伎や能楽の舞台を鑑賞したことがあります。",
                    "reading": "だいがくじだいに かぶきや のうがくの ぶたいを かんしょうしたことが あります。",
                    "translation": "During my university days, I had the experience of appreciating Kabuki and Noh theatre performances."
                },
                {
                    "target": "先週の土曜日は雨が降っていたので、どこへも出かけませんでした。",
                    "reading": "せんしゅうの どようびは あめが ふっていたので、どこへも でかけませんでした。",
                    "translation": "Since it was raining last Saturday, I did not go out anywhere."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】動詞・形容詞の過去形と経験表現「〜たことがある」（第1部）における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "去年の夏休みに友達と一緒に富士山に登ったことがあります。",
                        "不適切な助詞配置の誤文例（7.1.1）",
                        "時制の不一致を含む文法誤謬（7.1.2）",
                        "敬意レベルが不適当な選択肢（7.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】動詞の過去形（〜ました）、形容詞の過去形（〜かった/〜でした）、経験を表す「〜たことがあります」の習得（第1部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】動詞・形容詞の過去形と経験表現「〜たことがある」（第1部）の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "昨日の京都の紅葉は息をのむほど美しかったです。",
                        "文脈の接続が不自然な誤答（7.1.x）",
                        "助詞の選択を誤った誤謬例（7.1.y）",
                        "主述の呼応が崩れた不完全文（7.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u7-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "大学時代に歌舞伎や能楽の舞台を鑑賞したことがあります。",
                        "意味の取り違えによる不適切な文（7.1.a）",
                        "不自然な漢語の誤用（7.1.b）",
                        "文末述語の欠落した文（7.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】動詞・形容詞の過去形と経験表現「〜たことがある」（第1部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試7-1）。",
                    "options": [
                        "先週の土曜日は雨が降っていたので、どこへも出かけませんでした。",
                        "助詞の欠落した文法誤文（7.1.m）",
                        "敬語体系の誤用例（7.1.n）",
                        "活用形の接続誤謬（7.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u7-l1）の主要キーワードを入力してください（「去年の夏」）：",
                    "acceptedAnswers": [
                        "去年の夏",
                        "去年の夏休み"
                    ],
                    "explanation": "正解のキーワードは「去年の夏」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l2": {
        "id": "ja-u7-l2",
        "subject": "japanese",
        "unit": 7,
        "lessonNumber": 2,
        "title": "動詞・形容詞の過去形と経験表現「〜たことがある」（第2部）",
        "level": "A2",
        "objective": "動詞の過去形（〜ました）、形容詞の過去形（〜かった/〜でした）、経験を表す「〜たことがあります」の習得（第2部）。",
        "presentation": {
            "explanation": "第七単元第2課では、過去の出来事や完了した経験を正確に語るための文法体系を学びます。\n\n【過去形の体系的変化】\n１．丁寧な過去肯定：「動詞ます語幹 ＋ ました」（例：食べました、行きました）。\n２．丁寧な過去否定：「動詞ます語幹 ＋ ませんでした」（例：行きませんでした）。\n３．い形容詞の過去形：「〜かったです」（例：美味しかった、楽しかった）。\n４．な形容詞・名詞の過去形：「〜でした」（例：静かでした、有名でした）。\n５．経験を表す構文：「動詞た形 ＋ ことがあります」（例：「日本へ行ったことがあります」）。",
            "examples": [
                {
                    "target": "去年の夏休みに友達と一緒に富士山に登ったことがあります。",
                    "reading": "きょねんの なつやすみに ともだちと いっしょに ふじさんに のぼったことが あります。",
                    "translation": "I have climbed Mount Fuji together with my friends during last year's summer vacation."
                },
                {
                    "target": "昨日の京都の紅葉は息をのむほど美しかったです。",
                    "reading": "きのうの きょうとの こうようは いきをのむほど うつくしかったです。",
                    "translation": "Yesterday's autumn leaves in Kyoto were breathtakingly beautiful."
                },
                {
                    "target": "大学時代に歌舞伎や能楽の舞台を鑑賞したことがあります。",
                    "reading": "だいがくじだいに かぶきや のうがくの ぶたいを かんしょうしたことが あります。",
                    "translation": "During my university days, I had the experience of appreciating Kabuki and Noh theatre performances."
                },
                {
                    "target": "先週の土曜日は雨が降っていたので、どこへも出かけませんでした。",
                    "reading": "せんしゅうの どようびは あめが ふっていたので、どこへも でかけませんでした。",
                    "translation": "Since it was raining last Saturday, I did not go out anywhere."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】動詞・形容詞の過去形と経験表現「〜たことがある」（第2部）における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "去年の夏休みに友達と一緒に富士山に登ったことがあります。",
                        "不適切な助詞配置の誤文例（7.2.1）",
                        "時制の不一致を含む文法誤謬（7.2.2）",
                        "敬意レベルが不適当な選択肢（7.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】動詞の過去形（〜ました）、形容詞の過去形（〜かった/〜でした）、経験を表す「〜たことがあります」の習得（第2部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】動詞・形容詞の過去形と経験表現「〜たことがある」（第2部）の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "昨日の京都の紅葉は息をのむほど美しかったです。",
                        "文脈の接続が不自然な誤答（7.2.x）",
                        "助詞の選択を誤った誤謬例（7.2.y）",
                        "主述の呼応が崩れた不完全文（7.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u7-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "大学時代に歌舞伎や能楽の舞台を鑑賞したことがあります。",
                        "意味の取り違えによる不適切な文（7.2.a）",
                        "不自然な漢語の誤用（7.2.b）",
                        "文末述語の欠落した文（7.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】動詞・形容詞の過去形と経験表現「〜たことがある」（第2部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試7-2）。",
                    "options": [
                        "先週の土曜日は雨が降っていたので、どこへも出かけませんでした。",
                        "助詞の欠落した文法誤文（7.2.m）",
                        "敬語体系の誤用例（7.2.n）",
                        "活用形の接続誤謬（7.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u7-l2）の主要キーワードを入力してください（「去年の夏」）：",
                    "acceptedAnswers": [
                        "去年の夏",
                        "去年の夏休み"
                    ],
                    "explanation": "正解のキーワードは「去年の夏」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l3": {
        "id": "ja-u7-l3",
        "subject": "japanese",
        "unit": 7,
        "lessonNumber": 3,
        "title": "動詞・形容詞の過去形と経験表現「〜たことがある」（第3部）",
        "level": "A2",
        "objective": "動詞の過去形（〜ました）、形容詞の過去形（〜かった/〜でした）、経験を表す「〜たことがあります」の習得（第3部）。",
        "presentation": {
            "explanation": "第七単元第3課では、過去の出来事や完了した経験を正確に語るための文法体系を学びます。\n\n【過去形の体系的変化】\n１．丁寧な過去肯定：「動詞ます語幹 ＋ ました」（例：食べました、行きました）。\n２．丁寧な過去否定：「動詞ます語幹 ＋ ませんでした」（例：行きませんでした）。\n３．い形容詞の過去形：「〜かったです」（例：美味しかった、楽しかった）。\n４．な形容詞・名詞の過去形：「〜でした」（例：静かでした、有名でした）。\n５．経験を表す構文：「動詞た形 ＋ ことがあります」（例：「日本へ行ったことがあります」）。",
            "examples": [
                {
                    "target": "去年の夏休みに友達と一緒に富士山に登ったことがあります。",
                    "reading": "きょねんの なつやすみに ともだちと いっしょに ふじさんに のぼったことが あります。",
                    "translation": "I have climbed Mount Fuji together with my friends during last year's summer vacation."
                },
                {
                    "target": "昨日の京都の紅葉は息をのむほど美しかったです。",
                    "reading": "きのうの きょうとの こうようは いきをのむほど うつくしかったです。",
                    "translation": "Yesterday's autumn leaves in Kyoto were breathtakingly beautiful."
                },
                {
                    "target": "大学時代に歌舞伎や能楽の舞台を鑑賞したことがあります。",
                    "reading": "だいがくじだいに かぶきや のうがくの ぶたいを かんしょうしたことが あります。",
                    "translation": "During my university days, I had the experience of appreciating Kabuki and Noh theatre performances."
                },
                {
                    "target": "先週の土曜日は雨が降っていたので、どこへも出かけませんでした。",
                    "reading": "せんしゅうの どようびは あめが ふっていたので、どこへも でかけませんでした。",
                    "translation": "Since it was raining last Saturday, I did not go out anywhere."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】動詞・形容詞の過去形と経験表現「〜たことがある」（第3部）における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "去年の夏休みに友達と一緒に富士山に登ったことがあります。",
                        "不適切な助詞配置の誤文例（7.3.1）",
                        "時制の不一致を含む文法誤謬（7.3.2）",
                        "敬意レベルが不適当な選択肢（7.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】動詞の過去形（〜ました）、形容詞の過去形（〜かった/〜でした）、経験を表す「〜たことがあります」の習得（第3部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】動詞・形容詞の過去形と経験表現「〜たことがある」（第3部）の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "昨日の京都の紅葉は息をのむほど美しかったです。",
                        "文脈の接続が不自然な誤答（7.3.x）",
                        "助詞の選択を誤った誤謬例（7.3.y）",
                        "主述の呼応が崩れた不完全文（7.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u7-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "大学時代に歌舞伎や能楽の舞台を鑑賞したことがあります。",
                        "意味の取り違えによる不適切な文（7.3.a）",
                        "不自然な漢語の誤用（7.3.b）",
                        "文末述語の欠落した文（7.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】動詞・形容詞の過去形と経験表現「〜たことがある」（第3部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試7-3）。",
                    "options": [
                        "先週の土曜日は雨が降っていたので、どこへも出かけませんでした。",
                        "助詞の欠落した文法誤文（7.3.m）",
                        "敬語体系の誤用例（7.3.n）",
                        "活用形の接続誤謬（7.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u7-l3）の主要キーワードを入力してください（「去年の夏」）：",
                    "acceptedAnswers": [
                        "去年の夏",
                        "去年の夏休み"
                    ],
                    "explanation": "正解のキーワードは「去年の夏」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l4": {
        "id": "ja-u7-l4",
        "subject": "japanese",
        "unit": 7,
        "lessonNumber": 4,
        "title": "動詞・形容詞の過去形と経験表現「〜たことがある」（第4部）",
        "level": "A2",
        "objective": "動詞の過去形（〜ました）、形容詞の過去形（〜かった/〜でした）、経験を表す「〜たことがあります」の習得（第4部）。",
        "presentation": {
            "explanation": "第七単元第4課では、過去の出来事や完了した経験を正確に語るための文法体系を学びます。\n\n【過去形の体系的変化】\n１．丁寧な過去肯定：「動詞ます語幹 ＋ ました」（例：食べました、行きました）。\n２．丁寧な過去否定：「動詞ます語幹 ＋ ませんでした」（例：行きませんでした）。\n３．い形容詞の過去形：「〜かったです」（例：美味しかった、楽しかった）。\n４．な形容詞・名詞の過去形：「〜でした」（例：静かでした、有名でした）。\n５．経験を表す構文：「動詞た形 ＋ ことがあります」（例：「日本へ行ったことがあります」）。",
            "examples": [
                {
                    "target": "去年の夏休みに友達と一緒に富士山に登ったことがあります。",
                    "reading": "きょねんの なつやすみに ともだちと いっしょに ふじさんに のぼったことが あります。",
                    "translation": "I have climbed Mount Fuji together with my friends during last year's summer vacation."
                },
                {
                    "target": "昨日の京都の紅葉は息をのむほど美しかったです。",
                    "reading": "きのうの きょうとの こうようは いきをのむほど うつくしかったです。",
                    "translation": "Yesterday's autumn leaves in Kyoto were breathtakingly beautiful."
                },
                {
                    "target": "大学時代に歌舞伎や能楽の舞台を鑑賞したことがあります。",
                    "reading": "だいがくじだいに かぶきや のうがくの ぶたいを かんしょうしたことが あります。",
                    "translation": "During my university days, I had the experience of appreciating Kabuki and Noh theatre performances."
                },
                {
                    "target": "先週の土曜日は雨が降っていたので、どこへも出かけませんでした。",
                    "reading": "せんしゅうの どようびは あめが ふっていたので、どこへも でかけませんでした。",
                    "translation": "Since it was raining last Saturday, I did not go out anywhere."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】動詞・形容詞の過去形と経験表現「〜たことがある」（第4部）における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "去年の夏休みに友達と一緒に富士山に登ったことがあります。",
                        "不適切な助詞配置の誤文例（7.4.1）",
                        "時制の不一致を含む文法誤謬（7.4.2）",
                        "敬意レベルが不適当な選択肢（7.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】動詞の過去形（〜ました）、形容詞の過去形（〜かった/〜でした）、経験を表す「〜たことがあります」の習得（第4部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】動詞・形容詞の過去形と経験表現「〜たことがある」（第4部）の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "昨日の京都の紅葉は息をのむほど美しかったです。",
                        "文脈の接続が不自然な誤答（7.4.x）",
                        "助詞の選択を誤った誤謬例（7.4.y）",
                        "主述の呼応が崩れた不完全文（7.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u7-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "大学時代に歌舞伎や能楽の舞台を鑑賞したことがあります。",
                        "意味の取り違えによる不適切な文（7.4.a）",
                        "不自然な漢語の誤用（7.4.b）",
                        "文末述語の欠落した文（7.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】動詞・形容詞の過去形と経験表現「〜たことがある」（第4部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試7-4）。",
                    "options": [
                        "先週の土曜日は雨が降っていたので、どこへも出かけませんでした。",
                        "助詞の欠落した文法誤文（7.4.m）",
                        "敬語体系の誤用例（7.4.n）",
                        "活用形の接続誤謬（7.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u7-l4）の主要キーワードを入力してください（「去年の夏」）：",
                    "acceptedAnswers": [
                        "去年の夏",
                        "去年の夏休み"
                    ],
                    "explanation": "正解のキーワードは「去年の夏」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u7-l5": {
        "id": "ja-u7-l5",
        "subject": "japanese",
        "unit": 7,
        "lessonNumber": 5,
        "title": "動詞・形容詞の過去形と経験表現「〜たことがある」（第5部）",
        "level": "A2",
        "objective": "動詞の過去形（〜ました）、形容詞の過去形（〜かった/〜でした）、経験を表す「〜たことがあります」の習得（第5部）。",
        "presentation": {
            "explanation": "第七単元第5課では、過去の出来事や完了した経験を正確に語るための文法体系を学びます。\n\n【過去形の体系的変化】\n１．丁寧な過去肯定：「動詞ます語幹 ＋ ました」（例：食べました、行きました）。\n２．丁寧な過去否定：「動詞ます語幹 ＋ ませんでした」（例：行きませんでした）。\n３．い形容詞の過去形：「〜かったです」（例：美味しかった、楽しかった）。\n４．な形容詞・名詞の過去形：「〜でした」（例：静かでした、有名でした）。\n５．経験を表す構文：「動詞た形 ＋ ことがあります」（例：「日本へ行ったことがあります」）。",
            "examples": [
                {
                    "target": "去年の夏休みに友達と一緒に富士山に登ったことがあります。",
                    "reading": "きょねんの なつやすみに ともだちと いっしょに ふじさんに のぼったことが あります。",
                    "translation": "I have climbed Mount Fuji together with my friends during last year's summer vacation."
                },
                {
                    "target": "昨日の京都の紅葉は息をのむほど美しかったです。",
                    "reading": "きのうの きょうとの こうようは いきをのむほど うつくしかったです。",
                    "translation": "Yesterday's autumn leaves in Kyoto were breathtakingly beautiful."
                },
                {
                    "target": "大学時代に歌舞伎や能楽の舞台を鑑賞したことがあります。",
                    "reading": "だいがくじだいに かぶきや のうがくの ぶたいを かんしょうしたことが あります。",
                    "translation": "During my university days, I had the experience of appreciating Kabuki and Noh theatre performances."
                },
                {
                    "target": "先週の土曜日は雨が降っていたので、どこへも出かけませんでした。",
                    "reading": "せんしゅうの どようびは あめが ふっていたので、どこへも でかけませんでした。",
                    "translation": "Since it was raining last Saturday, I did not go out anywhere."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】動詞・形容詞の過去形と経験表現「〜たことがある」（第5部）における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "去年の夏休みに友達と一緒に富士山に登ったことがあります。",
                        "不適切な助詞配置の誤文例（7.5.1）",
                        "時制の不一致を含む文法誤謬（7.5.2）",
                        "敬意レベルが不適当な選択肢（7.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】動詞の過去形（〜ました）、形容詞の過去形（〜かった/〜でした）、経験を表す「〜たことがあります」の習得（第5部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】動詞・形容詞の過去形と経験表現「〜たことがある」（第5部）の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "昨日の京都の紅葉は息をのむほど美しかったです。",
                        "文脈の接続が不自然な誤答（7.5.x）",
                        "助詞の選択を誤った誤謬例（7.5.y）",
                        "主述の呼応が崩れた不完全文（7.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u7-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "大学時代に歌舞伎や能楽の舞台を鑑賞したことがあります。",
                        "意味の取り違えによる不適切な文（7.5.a）",
                        "不自然な漢語の誤用（7.5.b）",
                        "文末述語の欠落した文（7.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】動詞・形容詞の過去形と経験表現「〜たことがある」（第5部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試7-5）。",
                    "options": [
                        "先週の土曜日は雨が降っていたので、どこへも出かけませんでした。",
                        "助詞の欠落した文法誤文（7.5.m）",
                        "敬語体系の誤用例（7.5.n）",
                        "活用形の接続誤謬（7.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u7-l5）の主要キーワードを入力してください（「去年の夏」）：",
                    "acceptedAnswers": [
                        "去年の夏",
                        "去年の夏休み"
                    ],
                    "explanation": "正解のキーワードは「去年の夏」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l1": {
        "id": "ja-u8-l1",
        "subject": "japanese",
        "unit": 8,
        "lessonNumber": 1,
        "title": "指示代名詞・二者比較・最上級表現（第1部）",
        "level": "A2",
        "objective": "こそあど体系（これ/それ/あれ/どれ）、二者比較（AのほうがBより〜）、最上級（〜の中で一番〜）の習得（第1部）。",
        "presentation": {
            "explanation": "第八単元第1課では、対象物との距離感を示す「こそあど体系」および複数の対象を比較する比較構文を学びます。\n\n【指示詞のこそあど体系】\n・これ/この（話し手近称）、それ/その（聞き手近称）、あれ/あの（遠称）、どれ/どの（疑問称）。\n\n【比較構文の体系】\n１．二者比較：「Aのほうが Bより 形容詞です」（例：「新幹線のほうが飛行機より便利です」）。\n２．二者比較の質問：「Aと Bと どちらが 形容詞ですか」。\n３．最上級表現：「集団・範囲の中で Aが 一番 形容詞です」（例：「四季の中で春が一番好きです」）。",
            "examples": [
                {
                    "target": "この新幹線と飛行機と、どちらのほうが速いですか。— 飛行機のほうが速いです。",
                    "reading": "このしんかんせんと ひこうきと、どちらのほうが はやいですか。— ひこうきのほうが はやいです。",
                    "translation": "Which is faster, this Shinkansen or the airplane? — The airplane is faster."
                },
                {
                    "target": "日本の四季の中で、私は桜が満開になる春が一番好きです。",
                    "reading": "にほんの しきのなかで、わたしは さくらが まんかいになる はるが いちばん すきです。",
                    "translation": "Among the four seasons of Japan, I like spring the most when cherry blossoms are in full bloom."
                },
                {
                    "target": "あの展示されている伝統的な着物は、こちらの現代的なドレスより高価です。",
                    "reading": "あの てんじされている でんとうてきな きものは、こちらの げんだいてきな ドレスより こうかです。",
                    "translation": "That traditional kimono on display is more expensive than this modern dress here."
                },
                {
                    "target": "すみません、そのショーケースの中の万年筆を見せていただけますでしょうか。",
                    "reading": "すみません、その ショーケースのなかの まんねんひつを みせていただけますでしょうか。",
                    "translation": "Excuse me, could you please show me that fountain pen inside the showcase?"
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】指示代名詞・二者比較・最上級表現（第1部）における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "この新幹線と飛行機と、どちらのほうが速いですか。— 飛行機のほうが速いです。",
                        "不適切な助詞配置の誤文例（8.1.1）",
                        "時制の不一致を含む文法誤謬（8.1.2）",
                        "敬意レベルが不適当な選択肢（8.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】こそあど体系（これ/それ/あれ/どれ）、二者比較（AのほうがBより〜）、最上級（〜の中で一番〜）の習得（第1部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】指示代名詞・二者比較・最上級表現（第1部）の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "日本の四季の中で、私は桜が満開になる春が一番好きです。",
                        "文脈の接続が不自然な誤答（8.1.x）",
                        "助詞の選択を誤った誤謬例（8.1.y）",
                        "主述の呼応が崩れた不完全文（8.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u8-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "あの展示されている伝統的な着物は、こちらの現代的なドレスより高価です。",
                        "意味の取り違えによる不適切な文（8.1.a）",
                        "不自然な漢語の誤用（8.1.b）",
                        "文末述語の欠落した文（8.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】指示代名詞・二者比較・最上級表現（第1部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試8-1）。",
                    "options": [
                        "すみません、そのショーケースの中の万年筆を見せていただけますでしょうか。",
                        "助詞の欠落した文法誤文（8.1.m）",
                        "敬語体系の誤用例（8.1.n）",
                        "活用形の接続誤謬（8.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u8-l1）の主要キーワードを入力してください（「この新幹」）：",
                    "acceptedAnswers": [
                        "この新幹",
                        "この新幹線と"
                    ],
                    "explanation": "正解のキーワードは「この新幹」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l2": {
        "id": "ja-u8-l2",
        "subject": "japanese",
        "unit": 8,
        "lessonNumber": 2,
        "title": "指示代名詞・二者比較・最上級表現（第2部）",
        "level": "A2",
        "objective": "こそあど体系（これ/それ/あれ/どれ）、二者比較（AのほうがBより〜）、最上級（〜の中で一番〜）の習得（第2部）。",
        "presentation": {
            "explanation": "第八単元第2課では、対象物との距離感を示す「こそあど体系」および複数の対象を比較する比較構文を学びます。\n\n【指示詞のこそあど体系】\n・これ/この（話し手近称）、それ/その（聞き手近称）、あれ/あの（遠称）、どれ/どの（疑問称）。\n\n【比較構文の体系】\n１．二者比較：「Aのほうが Bより 形容詞です」（例：「新幹線のほうが飛行機より便利です」）。\n２．二者比較の質問：「Aと Bと どちらが 形容詞ですか」。\n３．最上級表現：「集団・範囲の中で Aが 一番 形容詞です」（例：「四季の中で春が一番好きです」）。",
            "examples": [
                {
                    "target": "この新幹線と飛行機と、どちらのほうが速いですか。— 飛行機のほうが速いです。",
                    "reading": "このしんかんせんと ひこうきと、どちらのほうが はやいですか。— ひこうきのほうが はやいです。",
                    "translation": "Which is faster, this Shinkansen or the airplane? — The airplane is faster."
                },
                {
                    "target": "日本の四季の中で、私は桜が満開になる春が一番好きです。",
                    "reading": "にほんの しきのなかで、わたしは さくらが まんかいになる はるが いちばん すきです。",
                    "translation": "Among the four seasons of Japan, I like spring the most when cherry blossoms are in full bloom."
                },
                {
                    "target": "あの展示されている伝統的な着物は、こちらの現代的なドレスより高価です。",
                    "reading": "あの てんじされている でんとうてきな きものは、こちらの げんだいてきな ドレスより こうかです。",
                    "translation": "That traditional kimono on display is more expensive than this modern dress here."
                },
                {
                    "target": "すみません、そのショーケースの中の万年筆を見せていただけますでしょうか。",
                    "reading": "すみません、その ショーケースのなかの まんねんひつを みせていただけますでしょうか。",
                    "translation": "Excuse me, could you please show me that fountain pen inside the showcase?"
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】指示代名詞・二者比較・最上級表現（第2部）における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "この新幹線と飛行機と、どちらのほうが速いですか。— 飛行機のほうが速いです。",
                        "不適切な助詞配置の誤文例（8.2.1）",
                        "時制の不一致を含む文法誤謬（8.2.2）",
                        "敬意レベルが不適当な選択肢（8.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】こそあど体系（これ/それ/あれ/どれ）、二者比較（AのほうがBより〜）、最上級（〜の中で一番〜）の習得（第2部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】指示代名詞・二者比較・最上級表現（第2部）の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "日本の四季の中で、私は桜が満開になる春が一番好きです。",
                        "文脈の接続が不自然な誤答（8.2.x）",
                        "助詞の選択を誤った誤謬例（8.2.y）",
                        "主述の呼応が崩れた不完全文（8.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u8-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "あの展示されている伝統的な着物は、こちらの現代的なドレスより高価です。",
                        "意味の取り違えによる不適切な文（8.2.a）",
                        "不自然な漢語の誤用（8.2.b）",
                        "文末述語の欠落した文（8.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】指示代名詞・二者比較・最上級表現（第2部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試8-2）。",
                    "options": [
                        "すみません、そのショーケースの中の万年筆を見せていただけますでしょうか。",
                        "助詞の欠落した文法誤文（8.2.m）",
                        "敬語体系の誤用例（8.2.n）",
                        "活用形の接続誤謬（8.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u8-l2）の主要キーワードを入力してください（「この新幹」）：",
                    "acceptedAnswers": [
                        "この新幹",
                        "この新幹線と"
                    ],
                    "explanation": "正解のキーワードは「この新幹」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l3": {
        "id": "ja-u8-l3",
        "subject": "japanese",
        "unit": 8,
        "lessonNumber": 3,
        "title": "指示代名詞・二者比較・最上級表現（第3部）",
        "level": "A2",
        "objective": "こそあど体系（これ/それ/あれ/どれ）、二者比較（AのほうがBより〜）、最上級（〜の中で一番〜）の習得（第3部）。",
        "presentation": {
            "explanation": "第八単元第3課では、対象物との距離感を示す「こそあど体系」および複数の対象を比較する比較構文を学びます。\n\n【指示詞のこそあど体系】\n・これ/この（話し手近称）、それ/その（聞き手近称）、あれ/あの（遠称）、どれ/どの（疑問称）。\n\n【比較構文の体系】\n１．二者比較：「Aのほうが Bより 形容詞です」（例：「新幹線のほうが飛行機より便利です」）。\n２．二者比較の質問：「Aと Bと どちらが 形容詞ですか」。\n３．最上級表現：「集団・範囲の中で Aが 一番 形容詞です」（例：「四季の中で春が一番好きです」）。",
            "examples": [
                {
                    "target": "この新幹線と飛行機と、どちらのほうが速いですか。— 飛行機のほうが速いです。",
                    "reading": "このしんかんせんと ひこうきと、どちらのほうが はやいですか。— ひこうきのほうが はやいです。",
                    "translation": "Which is faster, this Shinkansen or the airplane? — The airplane is faster."
                },
                {
                    "target": "日本の四季の中で、私は桜が満開になる春が一番好きです。",
                    "reading": "にほんの しきのなかで、わたしは さくらが まんかいになる はるが いちばん すきです。",
                    "translation": "Among the four seasons of Japan, I like spring the most when cherry blossoms are in full bloom."
                },
                {
                    "target": "あの展示されている伝統的な着物は、こちらの現代的なドレスより高価です。",
                    "reading": "あの てんじされている でんとうてきな きものは、こちらの げんだいてきな ドレスより こうかです。",
                    "translation": "That traditional kimono on display is more expensive than this modern dress here."
                },
                {
                    "target": "すみません、そのショーケースの中の万年筆を見せていただけますでしょうか。",
                    "reading": "すみません、その ショーケースのなかの まんねんひつを みせていただけますでしょうか。",
                    "translation": "Excuse me, could you please show me that fountain pen inside the showcase?"
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】指示代名詞・二者比較・最上級表現（第3部）における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "この新幹線と飛行機と、どちらのほうが速いですか。— 飛行機のほうが速いです。",
                        "不適切な助詞配置の誤文例（8.3.1）",
                        "時制の不一致を含む文法誤謬（8.3.2）",
                        "敬意レベルが不適当な選択肢（8.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】こそあど体系（これ/それ/あれ/どれ）、二者比較（AのほうがBより〜）、最上級（〜の中で一番〜）の習得（第3部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】指示代名詞・二者比較・最上級表現（第3部）の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "日本の四季の中で、私は桜が満開になる春が一番好きです。",
                        "文脈の接続が不自然な誤答（8.3.x）",
                        "助詞の選択を誤った誤謬例（8.3.y）",
                        "主述の呼応が崩れた不完全文（8.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u8-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "あの展示されている伝統的な着物は、こちらの現代的なドレスより高価です。",
                        "意味の取り違えによる不適切な文（8.3.a）",
                        "不自然な漢語の誤用（8.3.b）",
                        "文末述語の欠落した文（8.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】指示代名詞・二者比較・最上級表現（第3部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試8-3）。",
                    "options": [
                        "すみません、そのショーケースの中の万年筆を見せていただけますでしょうか。",
                        "助詞の欠落した文法誤文（8.3.m）",
                        "敬語体系の誤用例（8.3.n）",
                        "活用形の接続誤謬（8.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u8-l3）の主要キーワードを入力してください（「この新幹」）：",
                    "acceptedAnswers": [
                        "この新幹",
                        "この新幹線と"
                    ],
                    "explanation": "正解のキーワードは「この新幹」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l4": {
        "id": "ja-u8-l4",
        "subject": "japanese",
        "unit": 8,
        "lessonNumber": 4,
        "title": "指示代名詞・二者比較・最上級表現（第4部）",
        "level": "A2",
        "objective": "こそあど体系（これ/それ/あれ/どれ）、二者比較（AのほうがBより〜）、最上級（〜の中で一番〜）の習得（第4部）。",
        "presentation": {
            "explanation": "第八単元第4課では、対象物との距離感を示す「こそあど体系」および複数の対象を比較する比較構文を学びます。\n\n【指示詞のこそあど体系】\n・これ/この（話し手近称）、それ/その（聞き手近称）、あれ/あの（遠称）、どれ/どの（疑問称）。\n\n【比較構文の体系】\n１．二者比較：「Aのほうが Bより 形容詞です」（例：「新幹線のほうが飛行機より便利です」）。\n２．二者比較の質問：「Aと Bと どちらが 形容詞ですか」。\n３．最上級表現：「集団・範囲の中で Aが 一番 形容詞です」（例：「四季の中で春が一番好きです」）。",
            "examples": [
                {
                    "target": "この新幹線と飛行機と、どちらのほうが速いですか。— 飛行機のほうが速いです。",
                    "reading": "このしんかんせんと ひこうきと、どちらのほうが はやいですか。— ひこうきのほうが はやいです。",
                    "translation": "Which is faster, this Shinkansen or the airplane? — The airplane is faster."
                },
                {
                    "target": "日本の四季の中で、私は桜が満開になる春が一番好きです。",
                    "reading": "にほんの しきのなかで、わたしは さくらが まんかいになる はるが いちばん すきです。",
                    "translation": "Among the four seasons of Japan, I like spring the most when cherry blossoms are in full bloom."
                },
                {
                    "target": "あの展示されている伝統的な着物は、こちらの現代的なドレスより高価です。",
                    "reading": "あの てんじされている でんとうてきな きものは、こちらの げんだいてきな ドレスより こうかです。",
                    "translation": "That traditional kimono on display is more expensive than this modern dress here."
                },
                {
                    "target": "すみません、そのショーケースの中の万年筆を見せていただけますでしょうか。",
                    "reading": "すみません、その ショーケースのなかの まんねんひつを みせていただけますでしょうか。",
                    "translation": "Excuse me, could you please show me that fountain pen inside the showcase?"
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】指示代名詞・二者比較・最上級表現（第4部）における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "この新幹線と飛行機と、どちらのほうが速いですか。— 飛行機のほうが速いです。",
                        "不適切な助詞配置の誤文例（8.4.1）",
                        "時制の不一致を含む文法誤謬（8.4.2）",
                        "敬意レベルが不適当な選択肢（8.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】こそあど体系（これ/それ/あれ/どれ）、二者比較（AのほうがBより〜）、最上級（〜の中で一番〜）の習得（第4部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】指示代名詞・二者比較・最上級表現（第4部）の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "日本の四季の中で、私は桜が満開になる春が一番好きです。",
                        "文脈の接続が不自然な誤答（8.4.x）",
                        "助詞の選択を誤った誤謬例（8.4.y）",
                        "主述の呼応が崩れた不完全文（8.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u8-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "あの展示されている伝統的な着物は、こちらの現代的なドレスより高価です。",
                        "意味の取り違えによる不適切な文（8.4.a）",
                        "不自然な漢語の誤用（8.4.b）",
                        "文末述語の欠落した文（8.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】指示代名詞・二者比較・最上級表現（第4部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試8-4）。",
                    "options": [
                        "すみません、そのショーケースの中の万年筆を見せていただけますでしょうか。",
                        "助詞の欠落した文法誤文（8.4.m）",
                        "敬語体系の誤用例（8.4.n）",
                        "活用形の接続誤謬（8.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u8-l4）の主要キーワードを入力してください（「この新幹」）：",
                    "acceptedAnswers": [
                        "この新幹",
                        "この新幹線と"
                    ],
                    "explanation": "正解のキーワードは「この新幹」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u8-l5": {
        "id": "ja-u8-l5",
        "subject": "japanese",
        "unit": 8,
        "lessonNumber": 5,
        "title": "指示代名詞・二者比較・最上級表現（第5部）",
        "level": "A2",
        "objective": "こそあど体系（これ/それ/あれ/どれ）、二者比較（AのほうがBより〜）、最上級（〜の中で一番〜）の習得（第5部）。",
        "presentation": {
            "explanation": "第八単元第5課では、対象物との距離感を示す「こそあど体系」および複数の対象を比較する比較構文を学びます。\n\n【指示詞のこそあど体系】\n・これ/この（話し手近称）、それ/その（聞き手近称）、あれ/あの（遠称）、どれ/どの（疑問称）。\n\n【比較構文の体系】\n１．二者比較：「Aのほうが Bより 形容詞です」（例：「新幹線のほうが飛行機より便利です」）。\n２．二者比較の質問：「Aと Bと どちらが 形容詞ですか」。\n３．最上級表現：「集団・範囲の中で Aが 一番 形容詞です」（例：「四季の中で春が一番好きです」）。",
            "examples": [
                {
                    "target": "この新幹線と飛行機と、どちらのほうが速いですか。— 飛行機のほうが速いです。",
                    "reading": "このしんかんせんと ひこうきと、どちらのほうが はやいですか。— ひこうきのほうが はやいです。",
                    "translation": "Which is faster, this Shinkansen or the airplane? — The airplane is faster."
                },
                {
                    "target": "日本の四季の中で、私は桜が満開になる春が一番好きです。",
                    "reading": "にほんの しきのなかで、わたしは さくらが まんかいになる はるが いちばん すきです。",
                    "translation": "Among the four seasons of Japan, I like spring the most when cherry blossoms are in full bloom."
                },
                {
                    "target": "あの展示されている伝統的な着物は、こちらの現代的なドレスより高価です。",
                    "reading": "あの てんじされている でんとうてきな きものは、こちらの げんだいてきな ドレスより こうかです。",
                    "translation": "That traditional kimono on display is more expensive than this modern dress here."
                },
                {
                    "target": "すみません、そのショーケースの中の万年筆を見せていただけますでしょうか。",
                    "reading": "すみません、その ショーケースのなかの まんねんひつを みせていただけますでしょうか。",
                    "translation": "Excuse me, could you please show me that fountain pen inside the showcase?"
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】指示代名詞・二者比較・最上級表現（第5部）における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "この新幹線と飛行機と、どちらのほうが速いですか。— 飛行機のほうが速いです。",
                        "不適切な助詞配置の誤文例（8.5.1）",
                        "時制の不一致を含む文法誤謬（8.5.2）",
                        "敬意レベルが不適当な選択肢（8.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】こそあど体系（これ/それ/あれ/どれ）、二者比較（AのほうがBより〜）、最上級（〜の中で一番〜）の習得（第5部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】指示代名詞・二者比較・最上級表現（第5部）の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "日本の四季の中で、私は桜が満開になる春が一番好きです。",
                        "文脈の接続が不自然な誤答（8.5.x）",
                        "助詞の選択を誤った誤謬例（8.5.y）",
                        "主述の呼応が崩れた不完全文（8.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u8-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "あの展示されている伝統的な着物は、こちらの現代的なドレスより高価です。",
                        "意味の取り違えによる不適切な文（8.5.a）",
                        "不自然な漢語の誤用（8.5.b）",
                        "文末述語の欠落した文（8.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】指示代名詞・二者比較・最上級表現（第5部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試8-5）。",
                    "options": [
                        "すみません、そのショーケースの中の万年筆を見せていただけますでしょうか。",
                        "助詞の欠落した文法誤文（8.5.m）",
                        "敬語体系の誤用例（8.5.n）",
                        "活用形の接続誤謬（8.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u8-l5）の主要キーワードを入力してください（「この新幹」）：",
                    "acceptedAnswers": [
                        "この新幹",
                        "この新幹線と"
                    ],
                    "explanation": "正解のキーワードは「この新幹」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l1": {
        "id": "ja-u9-l1",
        "subject": "japanese",
        "unit": 9,
        "lessonNumber": 1,
        "title": "道案内・交通機関と移動経路（第1部）",
        "level": "A2",
        "objective": "方向指示動詞（曲がる・渡る・直進する）、交通機関利用、所要時間表現の完全習得（第1部）。",
        "presentation": {
            "explanation": "第九単元第1課では、日本の都市交通網（地下鉄・私鉄・新幹線・路線バス）の利用法および道案内・空間移動の表現を学びます。\n\n【方向指示と空間移動の主要動詞】\n・曲がります（右へ曲がる、交差点を左へ曲がる：通過地点に「を」、方向に「へ・に」を接続します）。\n・渡ります（横断歩道を渡る、橋を渡る：通過する空間に「を」を接続します）。\n・直進します（この道をまっすぐ進みます）。\n・乗り換えます（新宿駅で山手線から中央線に乗り換えます）。\n・降ります（次の停留所でバスを降ります）。\n\n【所要時間と距離の尋ね方】\n「ここから東京駅まで電車でどのくらいかかりますか」に対し、「約二十分かかります」と答えます。",
            "examples": [
                {
                    "target": "この交差点を右に曲がって、二百メートルほどまっすぐ進むと左手に大きな郵便局があります。",
                    "reading": "この こうさてんを みぎに まがって、にひゃくメートルほど まっすぐ すすむと ひだりてに おおきな ゆうびんきょくが あります。",
                    "translation": "If you turn right at this intersection and go straight for about 200 meters, there is a large post office on your left."
                },
                {
                    "target": "東京駅から京都駅まで東海道新幹線のぞみ号で約二時間十五分かかります。",
                    "reading": "とうきょうえきから きょうとえきまで とうかいどうしんかんせん のぞみごうで やく にじかん じゅうごふん かかります。",
                    "translation": "It takes about 2 hours and 15 minutes from Tokyo Station to Kyoto Station on the Tokaido Shinkansen Nozomi."
                },
                {
                    "target": "すみません、国立博物館へ行くにはどの出口を出ればよろしいでしょうか。",
                    "reading": "すみません、こくりつはくぶつかんへ いくには どのでぐちを でれば よろしいでしょうか。",
                    "translation": "Excuse me, which exit should I take to go to the National Museum?"
                },
                {
                    "target": "次の信号で横断歩道を渡って、角のコンビニの隣に目的地があります。",
                    "reading": "つぎの しんごうで おうだんほどうを わって、かどの コンビニの となりに もくてきちが あります。",
                    "translation": "Cross the pedestrian crossing at the next traffic light, and the destination is next to the convenience store on the corner."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】道案内・交通機関と移動経路（第1部）における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "この交差点を右に曲がって、二百メートルほどまっすぐ進むと左手に大きな郵便局があります。",
                        "不適切な助詞配置の誤文例（9.1.1）",
                        "時制の不一致を含む文法誤謬（9.1.2）",
                        "敬意レベルが不適当な選択肢（9.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】方向指示動詞（曲がる・渡る・直進する）、交通機関利用、所要時間表現の完全習得（第1部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】道案内・交通機関と移動経路（第1部）の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "東京駅から京都駅まで東海道新幹線のぞみ号で約二時間十五分かかります。",
                        "文脈の接続が不自然な誤答（9.1.x）",
                        "助詞の選択を誤った誤謬例（9.1.y）",
                        "主述の呼応が崩れた不完全文（9.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u9-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "すみません、国立博物館へ行くにはどの出口を出ればよろしいでしょうか。",
                        "意味の取り違えによる不適切な文（9.1.a）",
                        "不自然な漢語の誤用（9.1.b）",
                        "文末述語の欠落した文（9.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】道案内・交通機関と移動経路（第1部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試9-1）。",
                    "options": [
                        "次の信号で横断歩道を渡って、角のコンビニの隣に目的地があります。",
                        "助詞の欠落した文法誤文（9.1.m）",
                        "敬語体系の誤用例（9.1.n）",
                        "活用形の接続誤謬（9.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u9-l1）の主要キーワードを入力してください（「この交差」）：",
                    "acceptedAnswers": [
                        "この交差",
                        "この交差点を"
                    ],
                    "explanation": "正解のキーワードは「この交差」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l2": {
        "id": "ja-u9-l2",
        "subject": "japanese",
        "unit": 9,
        "lessonNumber": 2,
        "title": "道案内・交通機関と移動経路（第2部）",
        "level": "A2",
        "objective": "方向指示動詞（曲がる・渡る・直進する）、交通機関利用、所要時間表現の完全習得（第2部）。",
        "presentation": {
            "explanation": "第九単元第2課では、日本の都市交通網（地下鉄・私鉄・新幹線・路線バス）の利用法および道案内・空間移動の表現を学びます。\n\n【方向指示と空間移動の主要動詞】\n・曲がります（右へ曲がる、交差点を左へ曲がる：通過地点に「を」、方向に「へ・に」を接続します）。\n・渡ります（横断歩道を渡る、橋を渡る：通過する空間に「を」を接続します）。\n・直進します（この道をまっすぐ進みます）。\n・乗り換えます（新宿駅で山手線から中央線に乗り換えます）。\n・降ります（次の停留所でバスを降ります）。\n\n【所要時間と距離の尋ね方】\n「ここから東京駅まで電車でどのくらいかかりますか」に対し、「約二十分かかります」と答えます。",
            "examples": [
                {
                    "target": "この交差点を右に曲がって、二百メートルほどまっすぐ進むと左手に大きな郵便局があります。",
                    "reading": "この こうさてんを みぎに まがって、にひゃくメートルほど まっすぐ すすむと ひだりてに おおきな ゆうびんきょくが あります。",
                    "translation": "If you turn right at this intersection and go straight for about 200 meters, there is a large post office on your left."
                },
                {
                    "target": "東京駅から京都駅まで東海道新幹線のぞみ号で約二時間十五分かかります。",
                    "reading": "とうきょうえきから きょうとえきまで とうかいどうしんかんせん のぞみごうで やく にじかん じゅうごふん かかります。",
                    "translation": "It takes about 2 hours and 15 minutes from Tokyo Station to Kyoto Station on the Tokaido Shinkansen Nozomi."
                },
                {
                    "target": "すみません、国立博物館へ行くにはどの出口を出ればよろしいでしょうか。",
                    "reading": "すみません、こくりつはくぶつかんへ いくには どのでぐちを でれば よろしいでしょうか。",
                    "translation": "Excuse me, which exit should I take to go to the National Museum?"
                },
                {
                    "target": "次の信号で横断歩道を渡って、角のコンビニの隣に目的地があります。",
                    "reading": "つぎの しんごうで おうだんほどうを わって、かどの コンビニの となりに もくてきちが あります。",
                    "translation": "Cross the pedestrian crossing at the next traffic light, and the destination is next to the convenience store on the corner."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】道案内・交通機関と移動経路（第2部）における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "この交差点を右に曲がって、二百メートルほどまっすぐ進むと左手に大きな郵便局があります。",
                        "不適切な助詞配置の誤文例（9.2.1）",
                        "時制の不一致を含む文法誤謬（9.2.2）",
                        "敬意レベルが不適当な選択肢（9.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】方向指示動詞（曲がる・渡る・直進する）、交通機関利用、所要時間表現の完全習得（第2部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】道案内・交通機関と移動経路（第2部）の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "東京駅から京都駅まで東海道新幹線のぞみ号で約二時間十五分かかります。",
                        "文脈の接続が不自然な誤答（9.2.x）",
                        "助詞の選択を誤った誤謬例（9.2.y）",
                        "主述の呼応が崩れた不完全文（9.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u9-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "すみません、国立博物館へ行くにはどの出口を出ればよろしいでしょうか。",
                        "意味の取り違えによる不適切な文（9.2.a）",
                        "不自然な漢語の誤用（9.2.b）",
                        "文末述語の欠落した文（9.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】道案内・交通機関と移動経路（第2部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試9-2）。",
                    "options": [
                        "次の信号で横断歩道を渡って、角のコンビニの隣に目的地があります。",
                        "助詞の欠落した文法誤文（9.2.m）",
                        "敬語体系の誤用例（9.2.n）",
                        "活用形の接続誤謬（9.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u9-l2）の主要キーワードを入力してください（「この交差」）：",
                    "acceptedAnswers": [
                        "この交差",
                        "この交差点を"
                    ],
                    "explanation": "正解のキーワードは「この交差」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l3": {
        "id": "ja-u9-l3",
        "subject": "japanese",
        "unit": 9,
        "lessonNumber": 3,
        "title": "道案内・交通機関と移動経路（第3部）",
        "level": "A2",
        "objective": "方向指示動詞（曲がる・渡る・直進する）、交通機関利用、所要時間表現の完全習得（第3部）。",
        "presentation": {
            "explanation": "第九単元第3課では、日本の都市交通網（地下鉄・私鉄・新幹線・路線バス）の利用法および道案内・空間移動の表現を学びます。\n\n【方向指示と空間移動の主要動詞】\n・曲がります（右へ曲がる、交差点を左へ曲がる：通過地点に「を」、方向に「へ・に」を接続します）。\n・渡ります（横断歩道を渡る、橋を渡る：通過する空間に「を」を接続します）。\n・直進します（この道をまっすぐ進みます）。\n・乗り換えます（新宿駅で山手線から中央線に乗り換えます）。\n・降ります（次の停留所でバスを降ります）。\n\n【所要時間と距離の尋ね方】\n「ここから東京駅まで電車でどのくらいかかりますか」に対し、「約二十分かかります」と答えます。",
            "examples": [
                {
                    "target": "この交差点を右に曲がって、二百メートルほどまっすぐ進むと左手に大きな郵便局があります。",
                    "reading": "この こうさてんを みぎに まがって、にひゃくメートルほど まっすぐ すすむと ひだりてに おおきな ゆうびんきょくが あります。",
                    "translation": "If you turn right at this intersection and go straight for about 200 meters, there is a large post office on your left."
                },
                {
                    "target": "東京駅から京都駅まで東海道新幹線のぞみ号で約二時間十五分かかります。",
                    "reading": "とうきょうえきから きょうとえきまで とうかいどうしんかんせん のぞみごうで やく にじかん じゅうごふん かかります。",
                    "translation": "It takes about 2 hours and 15 minutes from Tokyo Station to Kyoto Station on the Tokaido Shinkansen Nozomi."
                },
                {
                    "target": "すみません、国立博物館へ行くにはどの出口を出ればよろしいでしょうか。",
                    "reading": "すみません、こくりつはくぶつかんへ いくには どのでぐちを でれば よろしいでしょうか。",
                    "translation": "Excuse me, which exit should I take to go to the National Museum?"
                },
                {
                    "target": "次の信号で横断歩道を渡って、角のコンビニの隣に目的地があります。",
                    "reading": "つぎの しんごうで おうだんほどうを わって、かどの コンビニの となりに もくてきちが あります。",
                    "translation": "Cross the pedestrian crossing at the next traffic light, and the destination is next to the convenience store on the corner."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】道案内・交通機関と移動経路（第3部）における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "この交差点を右に曲がって、二百メートルほどまっすぐ進むと左手に大きな郵便局があります。",
                        "不適切な助詞配置の誤文例（9.3.1）",
                        "時制の不一致を含む文法誤謬（9.3.2）",
                        "敬意レベルが不適当な選択肢（9.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】方向指示動詞（曲がる・渡る・直進する）、交通機関利用、所要時間表現の完全習得（第3部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】道案内・交通機関と移動経路（第3部）の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "東京駅から京都駅まで東海道新幹線のぞみ号で約二時間十五分かかります。",
                        "文脈の接続が不自然な誤答（9.3.x）",
                        "助詞の選択を誤った誤謬例（9.3.y）",
                        "主述の呼応が崩れた不完全文（9.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u9-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "すみません、国立博物館へ行くにはどの出口を出ればよろしいでしょうか。",
                        "意味の取り違えによる不適切な文（9.3.a）",
                        "不自然な漢語の誤用（9.3.b）",
                        "文末述語の欠落した文（9.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】道案内・交通機関と移動経路（第3部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試9-3）。",
                    "options": [
                        "次の信号で横断歩道を渡って、角のコンビニの隣に目的地があります。",
                        "助詞の欠落した文法誤文（9.3.m）",
                        "敬語体系の誤用例（9.3.n）",
                        "活用形の接続誤謬（9.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u9-l3）の主要キーワードを入力してください（「この交差」）：",
                    "acceptedAnswers": [
                        "この交差",
                        "この交差点を"
                    ],
                    "explanation": "正解のキーワードは「この交差」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l4": {
        "id": "ja-u9-l4",
        "subject": "japanese",
        "unit": 9,
        "lessonNumber": 4,
        "title": "道案内・交通機関と移動経路（第4部）",
        "level": "A2",
        "objective": "方向指示動詞（曲がる・渡る・直進する）、交通機関利用、所要時間表現の完全習得（第4部）。",
        "presentation": {
            "explanation": "第九単元第4課では、日本の都市交通網（地下鉄・私鉄・新幹線・路線バス）の利用法および道案内・空間移動の表現を学びます。\n\n【方向指示と空間移動の主要動詞】\n・曲がります（右へ曲がる、交差点を左へ曲がる：通過地点に「を」、方向に「へ・に」を接続します）。\n・渡ります（横断歩道を渡る、橋を渡る：通過する空間に「を」を接続します）。\n・直進します（この道をまっすぐ進みます）。\n・乗り換えます（新宿駅で山手線から中央線に乗り換えます）。\n・降ります（次の停留所でバスを降ります）。\n\n【所要時間と距離の尋ね方】\n「ここから東京駅まで電車でどのくらいかかりますか」に対し、「約二十分かかります」と答えます。",
            "examples": [
                {
                    "target": "この交差点を右に曲がって、二百メートルほどまっすぐ進むと左手に大きな郵便局があります。",
                    "reading": "この こうさてんを みぎに まがって、にひゃくメートルほど まっすぐ すすむと ひだりてに おおきな ゆうびんきょくが あります。",
                    "translation": "If you turn right at this intersection and go straight for about 200 meters, there is a large post office on your left."
                },
                {
                    "target": "東京駅から京都駅まで東海道新幹線のぞみ号で約二時間十五分かかります。",
                    "reading": "とうきょうえきから きょうとえきまで とうかいどうしんかんせん のぞみごうで やく にじかん じゅうごふん かかります。",
                    "translation": "It takes about 2 hours and 15 minutes from Tokyo Station to Kyoto Station on the Tokaido Shinkansen Nozomi."
                },
                {
                    "target": "すみません、国立博物館へ行くにはどの出口を出ればよろしいでしょうか。",
                    "reading": "すみません、こくりつはくぶつかんへ いくには どのでぐちを でれば よろしいでしょうか。",
                    "translation": "Excuse me, which exit should I take to go to the National Museum?"
                },
                {
                    "target": "次の信号で横断歩道を渡って、角のコンビニの隣に目的地があります。",
                    "reading": "つぎの しんごうで おうだんほどうを わって、かどの コンビニの となりに もくてきちが あります。",
                    "translation": "Cross the pedestrian crossing at the next traffic light, and the destination is next to the convenience store on the corner."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】道案内・交通機関と移動経路（第4部）における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "この交差点を右に曲がって、二百メートルほどまっすぐ進むと左手に大きな郵便局があります。",
                        "不適切な助詞配置の誤文例（9.4.1）",
                        "時制の不一致を含む文法誤謬（9.4.2）",
                        "敬意レベルが不適当な選択肢（9.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】方向指示動詞（曲がる・渡る・直進する）、交通機関利用、所要時間表現の完全習得（第4部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】道案内・交通機関と移動経路（第4部）の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "東京駅から京都駅まで東海道新幹線のぞみ号で約二時間十五分かかります。",
                        "文脈の接続が不自然な誤答（9.4.x）",
                        "助詞の選択を誤った誤謬例（9.4.y）",
                        "主述の呼応が崩れた不完全文（9.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u9-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "すみません、国立博物館へ行くにはどの出口を出ればよろしいでしょうか。",
                        "意味の取り違えによる不適切な文（9.4.a）",
                        "不自然な漢語の誤用（9.4.b）",
                        "文末述語の欠落した文（9.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】道案内・交通機関と移動経路（第4部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試9-4）。",
                    "options": [
                        "次の信号で横断歩道を渡って、角のコンビニの隣に目的地があります。",
                        "助詞の欠落した文法誤文（9.4.m）",
                        "敬語体系の誤用例（9.4.n）",
                        "活用形の接続誤謬（9.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u9-l4）の主要キーワードを入力してください（「この交差」）：",
                    "acceptedAnswers": [
                        "この交差",
                        "この交差点を"
                    ],
                    "explanation": "正解のキーワードは「この交差」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u9-l5": {
        "id": "ja-u9-l5",
        "subject": "japanese",
        "unit": 9,
        "lessonNumber": 5,
        "title": "道案内・交通機関と移動経路（第5部）",
        "level": "A2",
        "objective": "方向指示動詞（曲がる・渡る・直進する）、交通機関利用、所要時間表現の完全習得（第5部）。",
        "presentation": {
            "explanation": "第九単元第5課では、日本の都市交通網（地下鉄・私鉄・新幹線・路線バス）の利用法および道案内・空間移動の表現を学びます。\n\n【方向指示と空間移動の主要動詞】\n・曲がります（右へ曲がる、交差点を左へ曲がる：通過地点に「を」、方向に「へ・に」を接続します）。\n・渡ります（横断歩道を渡る、橋を渡る：通過する空間に「を」を接続します）。\n・直進します（この道をまっすぐ進みます）。\n・乗り換えます（新宿駅で山手線から中央線に乗り換えます）。\n・降ります（次の停留所でバスを降ります）。\n\n【所要時間と距離の尋ね方】\n「ここから東京駅まで電車でどのくらいかかりますか」に対し、「約二十分かかります」と答えます。",
            "examples": [
                {
                    "target": "この交差点を右に曲がって、二百メートルほどまっすぐ進むと左手に大きな郵便局があります。",
                    "reading": "この こうさてんを みぎに まがって、にひゃくメートルほど まっすぐ すすむと ひだりてに おおきな ゆうびんきょくが あります。",
                    "translation": "If you turn right at this intersection and go straight for about 200 meters, there is a large post office on your left."
                },
                {
                    "target": "東京駅から京都駅まで東海道新幹線のぞみ号で約二時間十五分かかります。",
                    "reading": "とうきょうえきから きょうとえきまで とうかいどうしんかんせん のぞみごうで やく にじかん じゅうごふん かかります。",
                    "translation": "It takes about 2 hours and 15 minutes from Tokyo Station to Kyoto Station on the Tokaido Shinkansen Nozomi."
                },
                {
                    "target": "すみません、国立博物館へ行くにはどの出口を出ればよろしいでしょうか。",
                    "reading": "すみません、こくりつはくぶつかんへ いくには どのでぐちを でれば よろしいでしょうか。",
                    "translation": "Excuse me, which exit should I take to go to the National Museum?"
                },
                {
                    "target": "次の信号で横断歩道を渡って、角のコンビニの隣に目的地があります。",
                    "reading": "つぎの しんごうで おうだんほどうを わって、かどの コンビニの となりに もくてきちが あります。",
                    "translation": "Cross the pedestrian crossing at the next traffic light, and the destination is next to the convenience store on the corner."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】道案内・交通機関と移動経路（第5部）における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "この交差点を右に曲がって、二百メートルほどまっすぐ進むと左手に大きな郵便局があります。",
                        "不適切な助詞配置の誤文例（9.5.1）",
                        "時制の不一致を含む文法誤謬（9.5.2）",
                        "敬意レベルが不適当な選択肢（9.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】方向指示動詞（曲がる・渡る・直進する）、交通機関利用、所要時間表現の完全習得（第5部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】道案内・交通機関と移動経路（第5部）の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "東京駅から京都駅まで東海道新幹線のぞみ号で約二時間十五分かかります。",
                        "文脈の接続が不自然な誤答（9.5.x）",
                        "助詞の選択を誤った誤謬例（9.5.y）",
                        "主述の呼応が崩れた不完全文（9.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u9-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "すみません、国立博物館へ行くにはどの出口を出ればよろしいでしょうか。",
                        "意味の取り違えによる不適切な文（9.5.a）",
                        "不自然な漢語の誤用（9.5.b）",
                        "文末述語の欠落した文（9.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】道案内・交通機関と移動経路（第5部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試9-5）。",
                    "options": [
                        "次の信号で横断歩道を渡って、角のコンビニの隣に目的地があります。",
                        "助詞の欠落した文法誤文（9.5.m）",
                        "敬語体系の誤用例（9.5.n）",
                        "活用形の接続誤謬（9.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u9-l5）の主要キーワードを入力してください（「この交差」）：",
                    "acceptedAnswers": [
                        "この交差",
                        "この交差点を"
                    ],
                    "explanation": "正解のキーワードは「この交差」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l1": {
        "id": "ja-u10-l1",
        "subject": "japanese",
        "unit": 10,
        "lessonNumber": 1,
        "title": "日本の住居様式・家具配置と住まいマナー（第1部）",
        "level": "A2",
        "objective": "和室と洋室の構造、家具家電の配置、日本の住宅マナー（玄関での靴脱ぎ・ゴミ分別）の習得（第1部）。",
        "presentation": {
            "explanation": "第十単元第1課では、日本の伝統的住居構造（和室・畳・障子・襖）と現代の集合住宅、および日本独自の住まいに関する社会的作法を学びます。\n\n【日本の住居空間の固有語彙】\n・玄関（げんかん）：靴を脱いで上がる神聖な境界空間。\n・畳（たたみ）：藺草で編まれた伝統的な床材。部屋の広さは畳の枚数（〜畳）で測定されます。\n・障子（しょうじ）と 襖（ふすま）\n・和室（わしつ） vs 洋室（ようしつ）\n\n【住まいと近隣生活のマナー】\n・資源ゴミ・可燃ゴミ・不燃ゴミの厳格な分別と回収日時の遵守。\n・集合住宅における夜間の騒音防止と地域社会への配慮。",
            "examples": [
                {
                    "target": "日本の家では玄関で必ず靴を脱いで、スリッパに履き替えます。",
                    "reading": "にほんの いえでは げんかんで かならず くつを ぬいで、スリッパに はきかえます。",
                    "translation": "In Japanese homes, you must always take off your shoes at the entrance hall and change into slippers."
                },
                {
                    "target": "私の新しいアパートは南向きの日当たりが良い六畳の和室です。",
                    "reading": "わたしの あたらしい アパートは みなみむきの ひあたりが よい ろくじょうの わしつです。",
                    "translation": "My new apartment is a sunny, south-facing six-tatami-mat Japanese-style room."
                },
                {
                    "target": "ゴミの分別ルールに従って、燃えるゴミは火曜日と金曜日の朝八時までに出してください。",
                    "reading": "ゴミの ぶんべつルールに したがって、もえるゴミは かようびと きんようびの あさはちじまでに だして ください。",
                    "translation": "According to the waste sorting rules, please put out burnable trash by 8:00 AM on Tuesdays and Fridays."
                },
                {
                    "target": "部屋の窓を開けると、心地よい風と美しい緑の庭が見えます。",
                    "reading": "へやの まどを あけると、ここちよい かぜと うつくしい みどりの にわが みえます。",
                    "translation": "When you open the room's window, you can see pleasant breezes and a beautiful green garden."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本の住居様式・家具配置と住まいマナー（第1部）における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "日本の家では玄関で必ず靴を脱いで、スリッパに履き替えます。",
                        "不適切な助詞配置の誤文例（10.1.1）",
                        "時制の不一致を含む文法誤謬（10.1.2）",
                        "敬意レベルが不適当な選択肢（10.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】和室と洋室の構造、家具家電の配置、日本の住宅マナー（玄関での靴脱ぎ・ゴミ分別）の習得（第1部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の住居様式・家具配置と住まいマナー（第1部）の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "私の新しいアパートは南向きの日当たりが良い六畳の和室です。",
                        "文脈の接続が不自然な誤答（10.1.x）",
                        "助詞の選択を誤った誤謬例（10.1.y）",
                        "主述の呼応が崩れた不完全文（10.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u10-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "ゴミの分別ルールに従って、燃えるゴミは火曜日と金曜日の朝八時までに出してください。",
                        "意味の取り違えによる不適切な文（10.1.a）",
                        "不自然な漢語の誤用（10.1.b）",
                        "文末述語の欠落した文（10.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の住居様式・家具配置と住まいマナー（第1部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試10-1）。",
                    "options": [
                        "部屋の窓を開けると、心地よい風と美しい緑の庭が見えます。",
                        "助詞の欠落した文法誤文（10.1.m）",
                        "敬語体系の誤用例（10.1.n）",
                        "活用形の接続誤謬（10.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u10-l1）の主要キーワードを入力してください（「日本の家」）：",
                    "acceptedAnswers": [
                        "日本の家",
                        "日本の家では"
                    ],
                    "explanation": "正解のキーワードは「日本の家」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l2": {
        "id": "ja-u10-l2",
        "subject": "japanese",
        "unit": 10,
        "lessonNumber": 2,
        "title": "日本の住居様式・家具配置と住まいマナー（第2部）",
        "level": "A2",
        "objective": "和室と洋室の構造、家具家電の配置、日本の住宅マナー（玄関での靴脱ぎ・ゴミ分別）の習得（第2部）。",
        "presentation": {
            "explanation": "第十単元第2課では、日本の伝統的住居構造（和室・畳・障子・襖）と現代の集合住宅、および日本独自の住まいに関する社会的作法を学びます。\n\n【日本の住居空間の固有語彙】\n・玄関（げんかん）：靴を脱いで上がる神聖な境界空間。\n・畳（たたみ）：藺草で編まれた伝統的な床材。部屋の広さは畳の枚数（〜畳）で測定されます。\n・障子（しょうじ）と 襖（ふすま）\n・和室（わしつ） vs 洋室（ようしつ）\n\n【住まいと近隣生活のマナー】\n・資源ゴミ・可燃ゴミ・不燃ゴミの厳格な分別と回収日時の遵守。\n・集合住宅における夜間の騒音防止と地域社会への配慮。",
            "examples": [
                {
                    "target": "日本の家では玄関で必ず靴を脱いで、スリッパに履き替えます。",
                    "reading": "にほんの いえでは げんかんで かならず くつを ぬいで、スリッパに はきかえます。",
                    "translation": "In Japanese homes, you must always take off your shoes at the entrance hall and change into slippers."
                },
                {
                    "target": "私の新しいアパートは南向きの日当たりが良い六畳の和室です。",
                    "reading": "わたしの あたらしい アパートは みなみむきの ひあたりが よい ろくじょうの わしつです。",
                    "translation": "My new apartment is a sunny, south-facing six-tatami-mat Japanese-style room."
                },
                {
                    "target": "ゴミの分別ルールに従って、燃えるゴミは火曜日と金曜日の朝八時までに出してください。",
                    "reading": "ゴミの ぶんべつルールに したがって、もえるゴミは かようびと きんようびの あさはちじまでに だして ください。",
                    "translation": "According to the waste sorting rules, please put out burnable trash by 8:00 AM on Tuesdays and Fridays."
                },
                {
                    "target": "部屋の窓を開けると、心地よい風と美しい緑の庭が見えます。",
                    "reading": "へやの まどを あけると、ここちよい かぜと うつくしい みどりの にわが みえます。",
                    "translation": "When you open the room's window, you can see pleasant breezes and a beautiful green garden."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本の住居様式・家具配置と住まいマナー（第2部）における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "日本の家では玄関で必ず靴を脱いで、スリッパに履き替えます。",
                        "不適切な助詞配置の誤文例（10.2.1）",
                        "時制の不一致を含む文法誤謬（10.2.2）",
                        "敬意レベルが不適当な選択肢（10.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】和室と洋室の構造、家具家電の配置、日本の住宅マナー（玄関での靴脱ぎ・ゴミ分別）の習得（第2部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の住居様式・家具配置と住まいマナー（第2部）の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "私の新しいアパートは南向きの日当たりが良い六畳の和室です。",
                        "文脈の接続が不自然な誤答（10.2.x）",
                        "助詞の選択を誤った誤謬例（10.2.y）",
                        "主述の呼応が崩れた不完全文（10.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u10-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "ゴミの分別ルールに従って、燃えるゴミは火曜日と金曜日の朝八時までに出してください。",
                        "意味の取り違えによる不適切な文（10.2.a）",
                        "不自然な漢語の誤用（10.2.b）",
                        "文末述語の欠落した文（10.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の住居様式・家具配置と住まいマナー（第2部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試10-2）。",
                    "options": [
                        "部屋の窓を開けると、心地よい風と美しい緑の庭が見えます。",
                        "助詞の欠落した文法誤文（10.2.m）",
                        "敬語体系の誤用例（10.2.n）",
                        "活用形の接続誤謬（10.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u10-l2）の主要キーワードを入力してください（「日本の家」）：",
                    "acceptedAnswers": [
                        "日本の家",
                        "日本の家では"
                    ],
                    "explanation": "正解のキーワードは「日本の家」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l3": {
        "id": "ja-u10-l3",
        "subject": "japanese",
        "unit": 10,
        "lessonNumber": 3,
        "title": "日本の住居様式・家具配置と住まいマナー（第3部）",
        "level": "A2",
        "objective": "和室と洋室の構造、家具家電の配置、日本の住宅マナー（玄関での靴脱ぎ・ゴミ分別）の習得（第3部）。",
        "presentation": {
            "explanation": "第十単元第3課では、日本の伝統的住居構造（和室・畳・障子・襖）と現代の集合住宅、および日本独自の住まいに関する社会的作法を学びます。\n\n【日本の住居空間の固有語彙】\n・玄関（げんかん）：靴を脱いで上がる神聖な境界空間。\n・畳（たたみ）：藺草で編まれた伝統的な床材。部屋の広さは畳の枚数（〜畳）で測定されます。\n・障子（しょうじ）と 襖（ふすま）\n・和室（わしつ） vs 洋室（ようしつ）\n\n【住まいと近隣生活のマナー】\n・資源ゴミ・可燃ゴミ・不燃ゴミの厳格な分別と回収日時の遵守。\n・集合住宅における夜間の騒音防止と地域社会への配慮。",
            "examples": [
                {
                    "target": "日本の家では玄関で必ず靴を脱いで、スリッパに履き替えます。",
                    "reading": "にほんの いえでは げんかんで かならず くつを ぬいで、スリッパに はきかえます。",
                    "translation": "In Japanese homes, you must always take off your shoes at the entrance hall and change into slippers."
                },
                {
                    "target": "私の新しいアパートは南向きの日当たりが良い六畳の和室です。",
                    "reading": "わたしの あたらしい アパートは みなみむきの ひあたりが よい ろくじょうの わしつです。",
                    "translation": "My new apartment is a sunny, south-facing six-tatami-mat Japanese-style room."
                },
                {
                    "target": "ゴミの分別ルールに従って、燃えるゴミは火曜日と金曜日の朝八時までに出してください。",
                    "reading": "ゴミの ぶんべつルールに したがって、もえるゴミは かようびと きんようびの あさはちじまでに だして ください。",
                    "translation": "According to the waste sorting rules, please put out burnable trash by 8:00 AM on Tuesdays and Fridays."
                },
                {
                    "target": "部屋の窓を開けると、心地よい風と美しい緑の庭が見えます。",
                    "reading": "へやの まどを あけると、ここちよい かぜと うつくしい みどりの にわが みえます。",
                    "translation": "When you open the room's window, you can see pleasant breezes and a beautiful green garden."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本の住居様式・家具配置と住まいマナー（第3部）における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "日本の家では玄関で必ず靴を脱いで、スリッパに履き替えます。",
                        "不適切な助詞配置の誤文例（10.3.1）",
                        "時制の不一致を含む文法誤謬（10.3.2）",
                        "敬意レベルが不適当な選択肢（10.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】和室と洋室の構造、家具家電の配置、日本の住宅マナー（玄関での靴脱ぎ・ゴミ分別）の習得（第3部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の住居様式・家具配置と住まいマナー（第3部）の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "私の新しいアパートは南向きの日当たりが良い六畳の和室です。",
                        "文脈の接続が不自然な誤答（10.3.x）",
                        "助詞の選択を誤った誤謬例（10.3.y）",
                        "主述の呼応が崩れた不完全文（10.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u10-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "ゴミの分別ルールに従って、燃えるゴミは火曜日と金曜日の朝八時までに出してください。",
                        "意味の取り違えによる不適切な文（10.3.a）",
                        "不自然な漢語の誤用（10.3.b）",
                        "文末述語の欠落した文（10.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の住居様式・家具配置と住まいマナー（第3部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試10-3）。",
                    "options": [
                        "部屋の窓を開けると、心地よい風と美しい緑の庭が見えます。",
                        "助詞の欠落した文法誤文（10.3.m）",
                        "敬語体系の誤用例（10.3.n）",
                        "活用形の接続誤謬（10.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u10-l3）の主要キーワードを入力してください（「日本の家」）：",
                    "acceptedAnswers": [
                        "日本の家",
                        "日本の家では"
                    ],
                    "explanation": "正解のキーワードは「日本の家」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l4": {
        "id": "ja-u10-l4",
        "subject": "japanese",
        "unit": 10,
        "lessonNumber": 4,
        "title": "日本の住居様式・家具配置と住まいマナー（第4部）",
        "level": "A2",
        "objective": "和室と洋室の構造、家具家電の配置、日本の住宅マナー（玄関での靴脱ぎ・ゴミ分別）の習得（第4部）。",
        "presentation": {
            "explanation": "第十単元第4課では、日本の伝統的住居構造（和室・畳・障子・襖）と現代の集合住宅、および日本独自の住まいに関する社会的作法を学びます。\n\n【日本の住居空間の固有語彙】\n・玄関（げんかん）：靴を脱いで上がる神聖な境界空間。\n・畳（たたみ）：藺草で編まれた伝統的な床材。部屋の広さは畳の枚数（〜畳）で測定されます。\n・障子（しょうじ）と 襖（ふすま）\n・和室（わしつ） vs 洋室（ようしつ）\n\n【住まいと近隣生活のマナー】\n・資源ゴミ・可燃ゴミ・不燃ゴミの厳格な分別と回収日時の遵守。\n・集合住宅における夜間の騒音防止と地域社会への配慮。",
            "examples": [
                {
                    "target": "日本の家では玄関で必ず靴を脱いで、スリッパに履き替えます。",
                    "reading": "にほんの いえでは げんかんで かならず くつを ぬいで、スリッパに はきかえます。",
                    "translation": "In Japanese homes, you must always take off your shoes at the entrance hall and change into slippers."
                },
                {
                    "target": "私の新しいアパートは南向きの日当たりが良い六畳の和室です。",
                    "reading": "わたしの あたらしい アパートは みなみむきの ひあたりが よい ろくじょうの わしつです。",
                    "translation": "My new apartment is a sunny, south-facing six-tatami-mat Japanese-style room."
                },
                {
                    "target": "ゴミの分別ルールに従って、燃えるゴミは火曜日と金曜日の朝八時までに出してください。",
                    "reading": "ゴミの ぶんべつルールに したがって、もえるゴミは かようびと きんようびの あさはちじまでに だして ください。",
                    "translation": "According to the waste sorting rules, please put out burnable trash by 8:00 AM on Tuesdays and Fridays."
                },
                {
                    "target": "部屋の窓を開けると、心地よい風と美しい緑の庭が見えます。",
                    "reading": "へやの まどを あけると、ここちよい かぜと うつくしい みどりの にわが みえます。",
                    "translation": "When you open the room's window, you can see pleasant breezes and a beautiful green garden."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本の住居様式・家具配置と住まいマナー（第4部）における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "日本の家では玄関で必ず靴を脱いで、スリッパに履き替えます。",
                        "不適切な助詞配置の誤文例（10.4.1）",
                        "時制の不一致を含む文法誤謬（10.4.2）",
                        "敬意レベルが不適当な選択肢（10.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】和室と洋室の構造、家具家電の配置、日本の住宅マナー（玄関での靴脱ぎ・ゴミ分別）の習得（第4部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の住居様式・家具配置と住まいマナー（第4部）の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "私の新しいアパートは南向きの日当たりが良い六畳の和室です。",
                        "文脈の接続が不自然な誤答（10.4.x）",
                        "助詞の選択を誤った誤謬例（10.4.y）",
                        "主述の呼応が崩れた不完全文（10.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u10-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "ゴミの分別ルールに従って、燃えるゴミは火曜日と金曜日の朝八時までに出してください。",
                        "意味の取り違えによる不適切な文（10.4.a）",
                        "不自然な漢語の誤用（10.4.b）",
                        "文末述語の欠落した文（10.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の住居様式・家具配置と住まいマナー（第4部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試10-4）。",
                    "options": [
                        "部屋の窓を開けると、心地よい風と美しい緑の庭が見えます。",
                        "助詞の欠落した文法誤文（10.4.m）",
                        "敬語体系の誤用例（10.4.n）",
                        "活用形の接続誤謬（10.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u10-l4）の主要キーワードを入力してください（「日本の家」）：",
                    "acceptedAnswers": [
                        "日本の家",
                        "日本の家では"
                    ],
                    "explanation": "正解のキーワードは「日本の家」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u10-l5": {
        "id": "ja-u10-l5",
        "subject": "japanese",
        "unit": 10,
        "lessonNumber": 5,
        "title": "日本の住居様式・家具配置と住まいマナー（第5部）",
        "level": "A2",
        "objective": "和室と洋室の構造、家具家電の配置、日本の住宅マナー（玄関での靴脱ぎ・ゴミ分別）の習得（第5部）。",
        "presentation": {
            "explanation": "第十単元第5課では、日本の伝統的住居構造（和室・畳・障子・襖）と現代の集合住宅、および日本独自の住まいに関する社会的作法を学びます。\n\n【日本の住居空間の固有語彙】\n・玄関（げんかん）：靴を脱いで上がる神聖な境界空間。\n・畳（たたみ）：藺草で編まれた伝統的な床材。部屋の広さは畳の枚数（〜畳）で測定されます。\n・障子（しょうじ）と 襖（ふすま）\n・和室（わしつ） vs 洋室（ようしつ）\n\n【住まいと近隣生活のマナー】\n・資源ゴミ・可燃ゴミ・不燃ゴミの厳格な分別と回収日時の遵守。\n・集合住宅における夜間の騒音防止と地域社会への配慮。",
            "examples": [
                {
                    "target": "日本の家では玄関で必ず靴を脱いで、スリッパに履き替えます。",
                    "reading": "にほんの いえでは げんかんで かならず くつを ぬいで、スリッパに はきかえます。",
                    "translation": "In Japanese homes, you must always take off your shoes at the entrance hall and change into slippers."
                },
                {
                    "target": "私の新しいアパートは南向きの日当たりが良い六畳の和室です。",
                    "reading": "わたしの あたらしい アパートは みなみむきの ひあたりが よい ろくじょうの わしつです。",
                    "translation": "My new apartment is a sunny, south-facing six-tatami-mat Japanese-style room."
                },
                {
                    "target": "ゴミの分別ルールに従って、燃えるゴミは火曜日と金曜日の朝八時までに出してください。",
                    "reading": "ゴミの ぶんべつルールに したがって、もえるゴミは かようびと きんようびの あさはちじまでに だして ください。",
                    "translation": "According to the waste sorting rules, please put out burnable trash by 8:00 AM on Tuesdays and Fridays."
                },
                {
                    "target": "部屋の窓を開けると、心地よい風と美しい緑の庭が見えます。",
                    "reading": "へやの まどを あけると、ここちよい かぜと うつくしい みどりの にわが みえます。",
                    "translation": "When you open the room's window, you can see pleasant breezes and a beautiful green garden."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本の住居様式・家具配置と住まいマナー（第5部）における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "日本の家では玄関で必ず靴を脱いで、スリッパに履き替えます。",
                        "不適切な助詞配置の誤文例（10.5.1）",
                        "時制の不一致を含む文法誤謬（10.5.2）",
                        "敬意レベルが不適当な選択肢（10.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】和室と洋室の構造、家具家電の配置、日本の住宅マナー（玄関での靴脱ぎ・ゴミ分別）の習得（第5部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の住居様式・家具配置と住まいマナー（第5部）の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "私の新しいアパートは南向きの日当たりが良い六畳の和室です。",
                        "文脈の接続が不自然な誤答（10.5.x）",
                        "助詞の選択を誤った誤謬例（10.5.y）",
                        "主述の呼応が崩れた不完全文（10.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u10-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "ゴミの分別ルールに従って、燃えるゴミは火曜日と金曜日の朝八時までに出してください。",
                        "意味の取り違えによる不適切な文（10.5.a）",
                        "不自然な漢語の誤用（10.5.b）",
                        "文末述語の欠落した文（10.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の住居様式・家具配置と住まいマナー（第5部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試10-5）。",
                    "options": [
                        "部屋の窓を開けると、心地よい風と美しい緑の庭が見えます。",
                        "助詞の欠落した文法誤文（10.5.m）",
                        "敬語体系の誤用例（10.5.n）",
                        "活用形の接続誤謬（10.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u10-l5）の主要キーワードを入力してください（「日本の家」）：",
                    "acceptedAnswers": [
                        "日本の家",
                        "日本の家では"
                    ],
                    "explanation": "正解のキーワードは「日本の家」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l1": {
        "id": "ja-u11-l1",
        "subject": "japanese",
        "unit": 11,
        "lessonNumber": 1,
        "title": "健康状態・身体部位と医療診察対話（第1部）",
        "level": "A2",
        "objective": "身体部位の語彙、病気・症状の説明（〜が痛い・熱がある・吐き気がする）、病院での診察対話の習得（第1部）。",
        "presentation": {
            "explanation": "第十一単元第1課では、身体の各部位および体調不良時の自覚症状を医師や薬剤師に正確に説明するための医学的・日常的日本語を学びます。\n\n【主要な身体部位の語彙】\n頭、目、耳、鼻、口、喉（のど）、肩、胸、お腹、背中、腰、手、足。\n\n【症状を伝える重要構文】\n・「身体部位 ＋ が 痛い（いたいです）」\n・熱があります / 高熱が出る\n・咳が出ます / 喉が腫れています\n・吐き気がします / 食欲がありません\n・アレルギーがあります",
            "examples": [
                {
                    "target": "昨夜から高熱が出て、喉が激しく痛みます。インフルエンザの検査をお願いできますか。",
                    "reading": "さくやから こうねつが でて、のどが はげしく いたみます。インフルエンザの けんさを おねがいできますか。",
                    "translation": "I have had a high fever since last night and my throat hurts severely. Could you please test for influenza?"
                },
                {
                    "target": "このお薬は毎食後三十分以内に水またはぬるま湯で一錠服用してください。",
                    "reading": "このおくすりは まいしょくご さんじゅっぷんいないに みず または ぬるまゆで いちじょう ふくようして ください。",
                    "translation": "Please take one tablet of this medicine with water or lukewarm water within 30 minutes after each meal."
                },
                {
                    "target": "お腹のどのあたりが痛みますか。息を吸って吐いてみてください。",
                    "reading": "おなかの どのあたりが いたみますか。いきを すって はいて みて ください。",
                    "translation": "Which part of your stomach hurts? Please breathe in and breathe out."
                },
                {
                    "target": "健康保険証はお持ちでしょうか。こちらの問診票にご記入の上、待合室でお待ちください。",
                    "reading": "けんこうほけんしょうは おもちでしょうか。こちらの もんしんひょうに ごきにゅうのうえ、まちあいしつで おまちください。",
                    "translation": "Do you have your health insurance card? After filling out this medical questionnaire, please wait in the waiting room."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】健康状態・身体部位と医療診察対話（第1部）における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "昨夜から高熱が出て、喉が激しく痛みます。インフルエンザの検査をお願いできますか。",
                        "不適切な助詞配置の誤文例（11.1.1）",
                        "時制の不一致を含む文法誤謬（11.1.2）",
                        "敬意レベルが不適当な選択肢（11.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】身体部位の語彙、病気・症状の説明（〜が痛い・熱がある・吐き気がする）、病院での診察対話の習得（第1部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】健康状態・身体部位と医療診察対話（第1部）の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "このお薬は毎食後三十分以内に水またはぬるま湯で一錠服用してください。",
                        "文脈の接続が不自然な誤答（11.1.x）",
                        "助詞の選択を誤った誤謬例（11.1.y）",
                        "主述の呼応が崩れた不完全文（11.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u11-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "お腹のどのあたりが痛みますか。息を吸って吐いてみてください。",
                        "意味の取り違えによる不適切な文（11.1.a）",
                        "不自然な漢語の誤用（11.1.b）",
                        "文末述語の欠落した文（11.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】健康状態・身体部位と医療診察対話（第1部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試11-1）。",
                    "options": [
                        "健康保険証はお持ちでしょうか。こちらの問診票にご記入の上、待合室でお待ちください。",
                        "助詞の欠落した文法誤文（11.1.m）",
                        "敬語体系の誤用例（11.1.n）",
                        "活用形の接続誤謬（11.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u11-l1）の主要キーワードを入力してください（「昨夜から」）：",
                    "acceptedAnswers": [
                        "昨夜から",
                        "昨夜から高熱"
                    ],
                    "explanation": "正解のキーワードは「昨夜から」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l2": {
        "id": "ja-u11-l2",
        "subject": "japanese",
        "unit": 11,
        "lessonNumber": 2,
        "title": "健康状態・身体部位と医療診察対話（第2部）",
        "level": "A2",
        "objective": "身体部位の語彙、病気・症状の説明（〜が痛い・熱がある・吐き気がする）、病院での診察対話の習得（第2部）。",
        "presentation": {
            "explanation": "第十一単元第2課では、身体の各部位および体調不良時の自覚症状を医師や薬剤師に正確に説明するための医学的・日常的日本語を学びます。\n\n【主要な身体部位の語彙】\n頭、目、耳、鼻、口、喉（のど）、肩、胸、お腹、背中、腰、手、足。\n\n【症状を伝える重要構文】\n・「身体部位 ＋ が 痛い（いたいです）」\n・熱があります / 高熱が出る\n・咳が出ます / 喉が腫れています\n・吐き気がします / 食欲がありません\n・アレルギーがあります",
            "examples": [
                {
                    "target": "昨夜から高熱が出て、喉が激しく痛みます。インフルエンザの検査をお願いできますか。",
                    "reading": "さくやから こうねつが でて、のどが はげしく いたみます。インフルエンザの けんさを おねがいできますか。",
                    "translation": "I have had a high fever since last night and my throat hurts severely. Could you please test for influenza?"
                },
                {
                    "target": "このお薬は毎食後三十分以内に水またはぬるま湯で一錠服用してください。",
                    "reading": "このおくすりは まいしょくご さんじゅっぷんいないに みず または ぬるまゆで いちじょう ふくようして ください。",
                    "translation": "Please take one tablet of this medicine with water or lukewarm water within 30 minutes after each meal."
                },
                {
                    "target": "お腹のどのあたりが痛みますか。息を吸って吐いてみてください。",
                    "reading": "おなかの どのあたりが いたみますか。いきを すって はいて みて ください。",
                    "translation": "Which part of your stomach hurts? Please breathe in and breathe out."
                },
                {
                    "target": "健康保険証はお持ちでしょうか。こちらの問診票にご記入の上、待合室でお待ちください。",
                    "reading": "けんこうほけんしょうは おもちでしょうか。こちらの もんしんひょうに ごきにゅうのうえ、まちあいしつで おまちください。",
                    "translation": "Do you have your health insurance card? After filling out this medical questionnaire, please wait in the waiting room."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】健康状態・身体部位と医療診察対話（第2部）における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "昨夜から高熱が出て、喉が激しく痛みます。インフルエンザの検査をお願いできますか。",
                        "不適切な助詞配置の誤文例（11.2.1）",
                        "時制の不一致を含む文法誤謬（11.2.2）",
                        "敬意レベルが不適当な選択肢（11.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】身体部位の語彙、病気・症状の説明（〜が痛い・熱がある・吐き気がする）、病院での診察対話の習得（第2部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】健康状態・身体部位と医療診察対話（第2部）の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "このお薬は毎食後三十分以内に水またはぬるま湯で一錠服用してください。",
                        "文脈の接続が不自然な誤答（11.2.x）",
                        "助詞の選択を誤った誤謬例（11.2.y）",
                        "主述の呼応が崩れた不完全文（11.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u11-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "お腹のどのあたりが痛みますか。息を吸って吐いてみてください。",
                        "意味の取り違えによる不適切な文（11.2.a）",
                        "不自然な漢語の誤用（11.2.b）",
                        "文末述語の欠落した文（11.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】健康状態・身体部位と医療診察対話（第2部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試11-2）。",
                    "options": [
                        "健康保険証はお持ちでしょうか。こちらの問診票にご記入の上、待合室でお待ちください。",
                        "助詞の欠落した文法誤文（11.2.m）",
                        "敬語体系の誤用例（11.2.n）",
                        "活用形の接続誤謬（11.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u11-l2）の主要キーワードを入力してください（「昨夜から」）：",
                    "acceptedAnswers": [
                        "昨夜から",
                        "昨夜から高熱"
                    ],
                    "explanation": "正解のキーワードは「昨夜から」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l3": {
        "id": "ja-u11-l3",
        "subject": "japanese",
        "unit": 11,
        "lessonNumber": 3,
        "title": "健康状態・身体部位と医療診察対話（第3部）",
        "level": "A2",
        "objective": "身体部位の語彙、病気・症状の説明（〜が痛い・熱がある・吐き気がする）、病院での診察対話の習得（第3部）。",
        "presentation": {
            "explanation": "第十一単元第3課では、身体の各部位および体調不良時の自覚症状を医師や薬剤師に正確に説明するための医学的・日常的日本語を学びます。\n\n【主要な身体部位の語彙】\n頭、目、耳、鼻、口、喉（のど）、肩、胸、お腹、背中、腰、手、足。\n\n【症状を伝える重要構文】\n・「身体部位 ＋ が 痛い（いたいです）」\n・熱があります / 高熱が出る\n・咳が出ます / 喉が腫れています\n・吐き気がします / 食欲がありません\n・アレルギーがあります",
            "examples": [
                {
                    "target": "昨夜から高熱が出て、喉が激しく痛みます。インフルエンザの検査をお願いできますか。",
                    "reading": "さくやから こうねつが でて、のどが はげしく いたみます。インフルエンザの けんさを おねがいできますか。",
                    "translation": "I have had a high fever since last night and my throat hurts severely. Could you please test for influenza?"
                },
                {
                    "target": "このお薬は毎食後三十分以内に水またはぬるま湯で一錠服用してください。",
                    "reading": "このおくすりは まいしょくご さんじゅっぷんいないに みず または ぬるまゆで いちじょう ふくようして ください。",
                    "translation": "Please take one tablet of this medicine with water or lukewarm water within 30 minutes after each meal."
                },
                {
                    "target": "お腹のどのあたりが痛みますか。息を吸って吐いてみてください。",
                    "reading": "おなかの どのあたりが いたみますか。いきを すって はいて みて ください。",
                    "translation": "Which part of your stomach hurts? Please breathe in and breathe out."
                },
                {
                    "target": "健康保険証はお持ちでしょうか。こちらの問診票にご記入の上、待合室でお待ちください。",
                    "reading": "けんこうほけんしょうは おもちでしょうか。こちらの もんしんひょうに ごきにゅうのうえ、まちあいしつで おまちください。",
                    "translation": "Do you have your health insurance card? After filling out this medical questionnaire, please wait in the waiting room."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】健康状態・身体部位と医療診察対話（第3部）における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "昨夜から高熱が出て、喉が激しく痛みます。インフルエンザの検査をお願いできますか。",
                        "不適切な助詞配置の誤文例（11.3.1）",
                        "時制の不一致を含む文法誤謬（11.3.2）",
                        "敬意レベルが不適当な選択肢（11.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】身体部位の語彙、病気・症状の説明（〜が痛い・熱がある・吐き気がする）、病院での診察対話の習得（第3部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】健康状態・身体部位と医療診察対話（第3部）の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "このお薬は毎食後三十分以内に水またはぬるま湯で一錠服用してください。",
                        "文脈の接続が不自然な誤答（11.3.x）",
                        "助詞の選択を誤った誤謬例（11.3.y）",
                        "主述の呼応が崩れた不完全文（11.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u11-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "お腹のどのあたりが痛みますか。息を吸って吐いてみてください。",
                        "意味の取り違えによる不適切な文（11.3.a）",
                        "不自然な漢語の誤用（11.3.b）",
                        "文末述語の欠落した文（11.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】健康状態・身体部位と医療診察対話（第3部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試11-3）。",
                    "options": [
                        "健康保険証はお持ちでしょうか。こちらの問診票にご記入の上、待合室でお待ちください。",
                        "助詞の欠落した文法誤文（11.3.m）",
                        "敬語体系の誤用例（11.3.n）",
                        "活用形の接続誤謬（11.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u11-l3）の主要キーワードを入力してください（「昨夜から」）：",
                    "acceptedAnswers": [
                        "昨夜から",
                        "昨夜から高熱"
                    ],
                    "explanation": "正解のキーワードは「昨夜から」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l4": {
        "id": "ja-u11-l4",
        "subject": "japanese",
        "unit": 11,
        "lessonNumber": 4,
        "title": "健康状態・身体部位と医療診察対話（第4部）",
        "level": "A2",
        "objective": "身体部位の語彙、病気・症状の説明（〜が痛い・熱がある・吐き気がする）、病院での診察対話の習得（第4部）。",
        "presentation": {
            "explanation": "第十一単元第4課では、身体の各部位および体調不良時の自覚症状を医師や薬剤師に正確に説明するための医学的・日常的日本語を学びます。\n\n【主要な身体部位の語彙】\n頭、目、耳、鼻、口、喉（のど）、肩、胸、お腹、背中、腰、手、足。\n\n【症状を伝える重要構文】\n・「身体部位 ＋ が 痛い（いたいです）」\n・熱があります / 高熱が出る\n・咳が出ます / 喉が腫れています\n・吐き気がします / 食欲がありません\n・アレルギーがあります",
            "examples": [
                {
                    "target": "昨夜から高熱が出て、喉が激しく痛みます。インフルエンザの検査をお願いできますか。",
                    "reading": "さくやから こうねつが でて、のどが はげしく いたみます。インフルエンザの けんさを おねがいできますか。",
                    "translation": "I have had a high fever since last night and my throat hurts severely. Could you please test for influenza?"
                },
                {
                    "target": "このお薬は毎食後三十分以内に水またはぬるま湯で一錠服用してください。",
                    "reading": "このおくすりは まいしょくご さんじゅっぷんいないに みず または ぬるまゆで いちじょう ふくようして ください。",
                    "translation": "Please take one tablet of this medicine with water or lukewarm water within 30 minutes after each meal."
                },
                {
                    "target": "お腹のどのあたりが痛みますか。息を吸って吐いてみてください。",
                    "reading": "おなかの どのあたりが いたみますか。いきを すって はいて みて ください。",
                    "translation": "Which part of your stomach hurts? Please breathe in and breathe out."
                },
                {
                    "target": "健康保険証はお持ちでしょうか。こちらの問診票にご記入の上、待合室でお待ちください。",
                    "reading": "けんこうほけんしょうは おもちでしょうか。こちらの もんしんひょうに ごきにゅうのうえ、まちあいしつで おまちください。",
                    "translation": "Do you have your health insurance card? After filling out this medical questionnaire, please wait in the waiting room."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】健康状態・身体部位と医療診察対話（第4部）における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "昨夜から高熱が出て、喉が激しく痛みます。インフルエンザの検査をお願いできますか。",
                        "不適切な助詞配置の誤文例（11.4.1）",
                        "時制の不一致を含む文法誤謬（11.4.2）",
                        "敬意レベルが不適当な選択肢（11.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】身体部位の語彙、病気・症状の説明（〜が痛い・熱がある・吐き気がする）、病院での診察対話の習得（第4部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】健康状態・身体部位と医療診察対話（第4部）の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "このお薬は毎食後三十分以内に水またはぬるま湯で一錠服用してください。",
                        "文脈の接続が不自然な誤答（11.4.x）",
                        "助詞の選択を誤った誤謬例（11.4.y）",
                        "主述の呼応が崩れた不完全文（11.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u11-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "お腹のどのあたりが痛みますか。息を吸って吐いてみてください。",
                        "意味の取り違えによる不適切な文（11.4.a）",
                        "不自然な漢語の誤用（11.4.b）",
                        "文末述語の欠落した文（11.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】健康状態・身体部位と医療診察対話（第4部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試11-4）。",
                    "options": [
                        "健康保険証はお持ちでしょうか。こちらの問診票にご記入の上、待合室でお待ちください。",
                        "助詞の欠落した文法誤文（11.4.m）",
                        "敬語体系の誤用例（11.4.n）",
                        "活用形の接続誤謬（11.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u11-l4）の主要キーワードを入力してください（「昨夜から」）：",
                    "acceptedAnswers": [
                        "昨夜から",
                        "昨夜から高熱"
                    ],
                    "explanation": "正解のキーワードは「昨夜から」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u11-l5": {
        "id": "ja-u11-l5",
        "subject": "japanese",
        "unit": 11,
        "lessonNumber": 5,
        "title": "健康状態・身体部位と医療診察対話（第5部）",
        "level": "A2",
        "objective": "身体部位の語彙、病気・症状の説明（〜が痛い・熱がある・吐き気がする）、病院での診察対話の習得（第5部）。",
        "presentation": {
            "explanation": "第十一単元第5課では、身体の各部位および体調不良時の自覚症状を医師や薬剤師に正確に説明するための医学的・日常的日本語を学びます。\n\n【主要な身体部位の語彙】\n頭、目、耳、鼻、口、喉（のど）、肩、胸、お腹、背中、腰、手、足。\n\n【症状を伝える重要構文】\n・「身体部位 ＋ が 痛い（いたいです）」\n・熱があります / 高熱が出る\n・咳が出ます / 喉が腫れています\n・吐き気がします / 食欲がありません\n・アレルギーがあります",
            "examples": [
                {
                    "target": "昨夜から高熱が出て、喉が激しく痛みます。インフルエンザの検査をお願いできますか。",
                    "reading": "さくやから こうねつが でて、のどが はげしく いたみます。インフルエンザの けんさを おねがいできますか。",
                    "translation": "I have had a high fever since last night and my throat hurts severely. Could you please test for influenza?"
                },
                {
                    "target": "このお薬は毎食後三十分以内に水またはぬるま湯で一錠服用してください。",
                    "reading": "このおくすりは まいしょくご さんじゅっぷんいないに みず または ぬるまゆで いちじょう ふくようして ください。",
                    "translation": "Please take one tablet of this medicine with water or lukewarm water within 30 minutes after each meal."
                },
                {
                    "target": "お腹のどのあたりが痛みますか。息を吸って吐いてみてください。",
                    "reading": "おなかの どのあたりが いたみますか。いきを すって はいて みて ください。",
                    "translation": "Which part of your stomach hurts? Please breathe in and breathe out."
                },
                {
                    "target": "健康保険証はお持ちでしょうか。こちらの問診票にご記入の上、待合室でお待ちください。",
                    "reading": "けんこうほけんしょうは おもちでしょうか。こちらの もんしんひょうに ごきにゅうのうえ、まちあいしつで おまちください。",
                    "translation": "Do you have your health insurance card? After filling out this medical questionnaire, please wait in the waiting room."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】健康状態・身体部位と医療診察対話（第5部）における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "昨夜から高熱が出て、喉が激しく痛みます。インフルエンザの検査をお願いできますか。",
                        "不適切な助詞配置の誤文例（11.5.1）",
                        "時制の不一致を含む文法誤謬（11.5.2）",
                        "敬意レベルが不適当な選択肢（11.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】身体部位の語彙、病気・症状の説明（〜が痛い・熱がある・吐き気がする）、病院での診察対話の習得（第5部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】健康状態・身体部位と医療診察対話（第5部）の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "このお薬は毎食後三十分以内に水またはぬるま湯で一錠服用してください。",
                        "文脈の接続が不自然な誤答（11.5.x）",
                        "助詞の選択を誤った誤謬例（11.5.y）",
                        "主述の呼応が崩れた不完全文（11.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u11-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "お腹のどのあたりが痛みますか。息を吸って吐いてみてください。",
                        "意味の取り違えによる不適切な文（11.5.a）",
                        "不自然な漢語の誤用（11.5.b）",
                        "文末述語の欠落した文（11.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】健康状態・身体部位と医療診察対話（第5部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試11-5）。",
                    "options": [
                        "健康保険証はお持ちでしょうか。こちらの問診票にご記入の上、待合室でお待ちください。",
                        "助詞の欠落した文法誤文（11.5.m）",
                        "敬語体系の誤用例（11.5.n）",
                        "活用形の接続誤謬（11.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u11-l5）の主要キーワードを入力してください（「昨夜から」）：",
                    "acceptedAnswers": [
                        "昨夜から",
                        "昨夜から高熱"
                    ],
                    "explanation": "正解のキーワードは「昨夜から」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l1": {
        "id": "ja-u12-l1",
        "subject": "japanese",
        "unit": 12,
        "lessonNumber": 1,
        "title": "意向形・将来の計画「〜つもり」「〜予定」（第1部）",
        "level": "A2",
        "objective": "動詞の意向形（行こう・食べよう）、意志表現「〜つもりです」、客観的予定「〜予定です」の習得（第1部）。",
        "presentation": {
            "explanation": "第十二単元第1課では、将来の目標や個人的な決意、公式な日程・スケジュールを語るための文法体系を学びます。\n\n【動詞の意向形の活用規則】\n１．一類動詞：語尾の「u段」を「o段長音（〜おう）」に変化（書く→書こう、飲む→飲もう、行く→行こう）。\n２．二類動詞：語尾の「る」を取り「よう」を付加（食べる→食べよう、見る→見よう）。\n３．三類動詞：する→「しよう」、来る→「来よう（こよう）」。\n\n【意志と予定の文法構文】\n・「動詞意向形 ＋ と思っています」（現在進行形の意志）\n・「動詞辞書形 ＋ つもりです」（個人的な決意・意図）\n・「動詞辞書形 / 名詞の ＋ 予定です」（客観的な日程・公式スケジュール）",
            "examples": [
                {
                    "target": "大学を卒業した後は、日本の大学院に進学して人工知能の研究を続けるつもりです。",
                    "reading": "だいがくを そつぎょうしたあとは、にほんの だいがくいんに しんがくして じんこうちのうの けんきゅうを つづける つもりです。",
                    "translation": "After graduating from university, I intend to enter a Japanese graduate school and continue research in artificial intelligence."
                },
                {
                    "target": "明日の午後は社外の取引先との重要な業務提携会議に出席する予定です。",
                    "reading": "あしたの ごごは しゃがいの とりひきさきとの じゅうような ぎょうむていけいかいぎに しゅっせきする よていです。",
                    "translation": "Tomorrow afternoon, I am scheduled to attend an important business alliance meeting with an external client."
                },
                {
                    "target": "今度の週末は友達と一緒に美術館の特別展を見に行こうと思っています。",
                    "reading": "こんどの しゅうまつは ともだちと いっしょに びじゅつかんの とくべつてんを みにいこうと おもっています。",
                    "translation": "This coming weekend, I am thinking of going to see the special exhibition at the art museum with my friend."
                },
                {
                    "target": "今年の夏休みは北海道を一周旅行する計画を立てています。",
                    "reading": "ことしの なつやすみは ほっかいどうを いっしゅうりょこうする けいかくを たてています。",
                    "translation": "I am making plans to travel around Hokkaido during this year's summer vacation."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】意向形・将来の計画「〜つもり」「〜予定」（第1部）における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "大学を卒業した後は、日本の大学院に進学して人工知能の研究を続けるつもりです。",
                        "不適切な助詞配置の誤文例（12.1.1）",
                        "時制の不一致を含む文法誤謬（12.1.2）",
                        "敬意レベルが不適当な選択肢（12.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】動詞の意向形（行こう・食べよう）、意志表現「〜つもりです」、客観的予定「〜予定です」の習得（第1部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】意向形・将来の計画「〜つもり」「〜予定」（第1部）の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "明日の午後は社外の取引先との重要な業務提携会議に出席する予定です。",
                        "文脈の接続が不自然な誤答（12.1.x）",
                        "助詞の選択を誤った誤謬例（12.1.y）",
                        "主述の呼応が崩れた不完全文（12.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u12-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "今度の週末は友達と一緒に美術館の特別展を見に行こうと思っています。",
                        "意味の取り違えによる不適切な文（12.1.a）",
                        "不自然な漢語の誤用（12.1.b）",
                        "文末述語の欠落した文（12.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】意向形・将来の計画「〜つもり」「〜予定」（第1部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試12-1）。",
                    "options": [
                        "今年の夏休みは北海道を一周旅行する計画を立てています。",
                        "助詞の欠落した文法誤文（12.1.m）",
                        "敬語体系の誤用例（12.1.n）",
                        "活用形の接続誤謬（12.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u12-l1）の主要キーワードを入力してください（「大学を卒」）：",
                    "acceptedAnswers": [
                        "大学を卒",
                        "大学を卒業し"
                    ],
                    "explanation": "正解のキーワードは「大学を卒」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l2": {
        "id": "ja-u12-l2",
        "subject": "japanese",
        "unit": 12,
        "lessonNumber": 2,
        "title": "意向形・将来の計画「〜つもり」「〜予定」（第2部）",
        "level": "A2",
        "objective": "動詞の意向形（行こう・食べよう）、意志表現「〜つもりです」、客観的予定「〜予定です」の習得（第2部）。",
        "presentation": {
            "explanation": "第十二単元第2課では、将来の目標や個人的な決意、公式な日程・スケジュールを語るための文法体系を学びます。\n\n【動詞の意向形の活用規則】\n１．一類動詞：語尾の「u段」を「o段長音（〜おう）」に変化（書く→書こう、飲む→飲もう、行く→行こう）。\n２．二類動詞：語尾の「る」を取り「よう」を付加（食べる→食べよう、見る→見よう）。\n３．三類動詞：する→「しよう」、来る→「来よう（こよう）」。\n\n【意志と予定の文法構文】\n・「動詞意向形 ＋ と思っています」（現在進行形の意志）\n・「動詞辞書形 ＋ つもりです」（個人的な決意・意図）\n・「動詞辞書形 / 名詞の ＋ 予定です」（客観的な日程・公式スケジュール）",
            "examples": [
                {
                    "target": "大学を卒業した後は、日本の大学院に進学して人工知能の研究を続けるつもりです。",
                    "reading": "だいがくを そつぎょうしたあとは、にほんの だいがくいんに しんがくして じんこうちのうの けんきゅうを つづける つもりです。",
                    "translation": "After graduating from university, I intend to enter a Japanese graduate school and continue research in artificial intelligence."
                },
                {
                    "target": "明日の午後は社外の取引先との重要な業務提携会議に出席する予定です。",
                    "reading": "あしたの ごごは しゃがいの とりひきさきとの じゅうような ぎょうむていけいかいぎに しゅっせきする よていです。",
                    "translation": "Tomorrow afternoon, I am scheduled to attend an important business alliance meeting with an external client."
                },
                {
                    "target": "今度の週末は友達と一緒に美術館の特別展を見に行こうと思っています。",
                    "reading": "こんどの しゅうまつは ともだちと いっしょに びじゅつかんの とくべつてんを みにいこうと おもっています。",
                    "translation": "This coming weekend, I am thinking of going to see the special exhibition at the art museum with my friend."
                },
                {
                    "target": "今年の夏休みは北海道を一周旅行する計画を立てています。",
                    "reading": "ことしの なつやすみは ほっかいどうを いっしゅうりょこうする けいかくを たてています。",
                    "translation": "I am making plans to travel around Hokkaido during this year's summer vacation."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】意向形・将来の計画「〜つもり」「〜予定」（第2部）における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "大学を卒業した後は、日本の大学院に進学して人工知能の研究を続けるつもりです。",
                        "不適切な助詞配置の誤文例（12.2.1）",
                        "時制の不一致を含む文法誤謬（12.2.2）",
                        "敬意レベルが不適当な選択肢（12.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】動詞の意向形（行こう・食べよう）、意志表現「〜つもりです」、客観的予定「〜予定です」の習得（第2部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】意向形・将来の計画「〜つもり」「〜予定」（第2部）の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "明日の午後は社外の取引先との重要な業務提携会議に出席する予定です。",
                        "文脈の接続が不自然な誤答（12.2.x）",
                        "助詞の選択を誤った誤謬例（12.2.y）",
                        "主述の呼応が崩れた不完全文（12.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u12-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "今度の週末は友達と一緒に美術館の特別展を見に行こうと思っています。",
                        "意味の取り違えによる不適切な文（12.2.a）",
                        "不自然な漢語の誤用（12.2.b）",
                        "文末述語の欠落した文（12.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】意向形・将来の計画「〜つもり」「〜予定」（第2部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試12-2）。",
                    "options": [
                        "今年の夏休みは北海道を一周旅行する計画を立てています。",
                        "助詞の欠落した文法誤文（12.2.m）",
                        "敬語体系の誤用例（12.2.n）",
                        "活用形の接続誤謬（12.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u12-l2）の主要キーワードを入力してください（「大学を卒」）：",
                    "acceptedAnswers": [
                        "大学を卒",
                        "大学を卒業し"
                    ],
                    "explanation": "正解のキーワードは「大学を卒」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l3": {
        "id": "ja-u12-l3",
        "subject": "japanese",
        "unit": 12,
        "lessonNumber": 3,
        "title": "意向形・将来の計画「〜つもり」「〜予定」（第3部）",
        "level": "A2",
        "objective": "動詞の意向形（行こう・食べよう）、意志表現「〜つもりです」、客観的予定「〜予定です」の習得（第3部）。",
        "presentation": {
            "explanation": "第十二単元第3課では、将来の目標や個人的な決意、公式な日程・スケジュールを語るための文法体系を学びます。\n\n【動詞の意向形の活用規則】\n１．一類動詞：語尾の「u段」を「o段長音（〜おう）」に変化（書く→書こう、飲む→飲もう、行く→行こう）。\n２．二類動詞：語尾の「る」を取り「よう」を付加（食べる→食べよう、見る→見よう）。\n３．三類動詞：する→「しよう」、来る→「来よう（こよう）」。\n\n【意志と予定の文法構文】\n・「動詞意向形 ＋ と思っています」（現在進行形の意志）\n・「動詞辞書形 ＋ つもりです」（個人的な決意・意図）\n・「動詞辞書形 / 名詞の ＋ 予定です」（客観的な日程・公式スケジュール）",
            "examples": [
                {
                    "target": "大学を卒業した後は、日本の大学院に進学して人工知能の研究を続けるつもりです。",
                    "reading": "だいがくを そつぎょうしたあとは、にほんの だいがくいんに しんがくして じんこうちのうの けんきゅうを つづける つもりです。",
                    "translation": "After graduating from university, I intend to enter a Japanese graduate school and continue research in artificial intelligence."
                },
                {
                    "target": "明日の午後は社外の取引先との重要な業務提携会議に出席する予定です。",
                    "reading": "あしたの ごごは しゃがいの とりひきさきとの じゅうような ぎょうむていけいかいぎに しゅっせきする よていです。",
                    "translation": "Tomorrow afternoon, I am scheduled to attend an important business alliance meeting with an external client."
                },
                {
                    "target": "今度の週末は友達と一緒に美術館の特別展を見に行こうと思っています。",
                    "reading": "こんどの しゅうまつは ともだちと いっしょに びじゅつかんの とくべつてんを みにいこうと おもっています。",
                    "translation": "This coming weekend, I am thinking of going to see the special exhibition at the art museum with my friend."
                },
                {
                    "target": "今年の夏休みは北海道を一周旅行する計画を立てています。",
                    "reading": "ことしの なつやすみは ほっかいどうを いっしゅうりょこうする けいかくを たてています。",
                    "translation": "I am making plans to travel around Hokkaido during this year's summer vacation."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】意向形・将来の計画「〜つもり」「〜予定」（第3部）における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "大学を卒業した後は、日本の大学院に進学して人工知能の研究を続けるつもりです。",
                        "不適切な助詞配置の誤文例（12.3.1）",
                        "時制の不一致を含む文法誤謬（12.3.2）",
                        "敬意レベルが不適当な選択肢（12.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】動詞の意向形（行こう・食べよう）、意志表現「〜つもりです」、客観的予定「〜予定です」の習得（第3部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】意向形・将来の計画「〜つもり」「〜予定」（第3部）の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "明日の午後は社外の取引先との重要な業務提携会議に出席する予定です。",
                        "文脈の接続が不自然な誤答（12.3.x）",
                        "助詞の選択を誤った誤謬例（12.3.y）",
                        "主述の呼応が崩れた不完全文（12.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u12-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "今度の週末は友達と一緒に美術館の特別展を見に行こうと思っています。",
                        "意味の取り違えによる不適切な文（12.3.a）",
                        "不自然な漢語の誤用（12.3.b）",
                        "文末述語の欠落した文（12.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】意向形・将来の計画「〜つもり」「〜予定」（第3部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試12-3）。",
                    "options": [
                        "今年の夏休みは北海道を一周旅行する計画を立てています。",
                        "助詞の欠落した文法誤文（12.3.m）",
                        "敬語体系の誤用例（12.3.n）",
                        "活用形の接続誤謬（12.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u12-l3）の主要キーワードを入力してください（「大学を卒」）：",
                    "acceptedAnswers": [
                        "大学を卒",
                        "大学を卒業し"
                    ],
                    "explanation": "正解のキーワードは「大学を卒」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l4": {
        "id": "ja-u12-l4",
        "subject": "japanese",
        "unit": 12,
        "lessonNumber": 4,
        "title": "意向形・将来の計画「〜つもり」「〜予定」（第4部）",
        "level": "A2",
        "objective": "動詞の意向形（行こう・食べよう）、意志表現「〜つもりです」、客観的予定「〜予定です」の習得（第4部）。",
        "presentation": {
            "explanation": "第十二単元第4課では、将来の目標や個人的な決意、公式な日程・スケジュールを語るための文法体系を学びます。\n\n【動詞の意向形の活用規則】\n１．一類動詞：語尾の「u段」を「o段長音（〜おう）」に変化（書く→書こう、飲む→飲もう、行く→行こう）。\n２．二類動詞：語尾の「る」を取り「よう」を付加（食べる→食べよう、見る→見よう）。\n３．三類動詞：する→「しよう」、来る→「来よう（こよう）」。\n\n【意志と予定の文法構文】\n・「動詞意向形 ＋ と思っています」（現在進行形の意志）\n・「動詞辞書形 ＋ つもりです」（個人的な決意・意図）\n・「動詞辞書形 / 名詞の ＋ 予定です」（客観的な日程・公式スケジュール）",
            "examples": [
                {
                    "target": "大学を卒業した後は、日本の大学院に進学して人工知能の研究を続けるつもりです。",
                    "reading": "だいがくを そつぎょうしたあとは、にほんの だいがくいんに しんがくして じんこうちのうの けんきゅうを つづける つもりです。",
                    "translation": "After graduating from university, I intend to enter a Japanese graduate school and continue research in artificial intelligence."
                },
                {
                    "target": "明日の午後は社外の取引先との重要な業務提携会議に出席する予定です。",
                    "reading": "あしたの ごごは しゃがいの とりひきさきとの じゅうような ぎょうむていけいかいぎに しゅっせきする よていです。",
                    "translation": "Tomorrow afternoon, I am scheduled to attend an important business alliance meeting with an external client."
                },
                {
                    "target": "今度の週末は友達と一緒に美術館の特別展を見に行こうと思っています。",
                    "reading": "こんどの しゅうまつは ともだちと いっしょに びじゅつかんの とくべつてんを みにいこうと おもっています。",
                    "translation": "This coming weekend, I am thinking of going to see the special exhibition at the art museum with my friend."
                },
                {
                    "target": "今年の夏休みは北海道を一周旅行する計画を立てています。",
                    "reading": "ことしの なつやすみは ほっかいどうを いっしゅうりょこうする けいかくを たてています。",
                    "translation": "I am making plans to travel around Hokkaido during this year's summer vacation."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】意向形・将来の計画「〜つもり」「〜予定」（第4部）における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "大学を卒業した後は、日本の大学院に進学して人工知能の研究を続けるつもりです。",
                        "不適切な助詞配置の誤文例（12.4.1）",
                        "時制の不一致を含む文法誤謬（12.4.2）",
                        "敬意レベルが不適当な選択肢（12.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】動詞の意向形（行こう・食べよう）、意志表現「〜つもりです」、客観的予定「〜予定です」の習得（第4部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】意向形・将来の計画「〜つもり」「〜予定」（第4部）の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "明日の午後は社外の取引先との重要な業務提携会議に出席する予定です。",
                        "文脈の接続が不自然な誤答（12.4.x）",
                        "助詞の選択を誤った誤謬例（12.4.y）",
                        "主述の呼応が崩れた不完全文（12.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u12-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "今度の週末は友達と一緒に美術館の特別展を見に行こうと思っています。",
                        "意味の取り違えによる不適切な文（12.4.a）",
                        "不自然な漢語の誤用（12.4.b）",
                        "文末述語の欠落した文（12.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】意向形・将来の計画「〜つもり」「〜予定」（第4部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試12-4）。",
                    "options": [
                        "今年の夏休みは北海道を一周旅行する計画を立てています。",
                        "助詞の欠落した文法誤文（12.4.m）",
                        "敬語体系の誤用例（12.4.n）",
                        "活用形の接続誤謬（12.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u12-l4）の主要キーワードを入力してください（「大学を卒」）：",
                    "acceptedAnswers": [
                        "大学を卒",
                        "大学を卒業し"
                    ],
                    "explanation": "正解のキーワードは「大学を卒」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u12-l5": {
        "id": "ja-u12-l5",
        "subject": "japanese",
        "unit": 12,
        "lessonNumber": 5,
        "title": "意向形・将来の計画「〜つもり」「〜予定」（第5部）",
        "level": "A2",
        "objective": "動詞の意向形（行こう・食べよう）、意志表現「〜つもりです」、客観的予定「〜予定です」の習得（第5部）。",
        "presentation": {
            "explanation": "第十二単元第5課では、将来の目標や個人的な決意、公式な日程・スケジュールを語るための文法体系を学びます。\n\n【動詞の意向形の活用規則】\n１．一類動詞：語尾の「u段」を「o段長音（〜おう）」に変化（書く→書こう、飲む→飲もう、行く→行こう）。\n２．二類動詞：語尾の「る」を取り「よう」を付加（食べる→食べよう、見る→見よう）。\n３．三類動詞：する→「しよう」、来る→「来よう（こよう）」。\n\n【意志と予定の文法構文】\n・「動詞意向形 ＋ と思っています」（現在進行形の意志）\n・「動詞辞書形 ＋ つもりです」（個人的な決意・意図）\n・「動詞辞書形 / 名詞の ＋ 予定です」（客観的な日程・公式スケジュール）",
            "examples": [
                {
                    "target": "大学を卒業した後は、日本の大学院に進学して人工知能の研究を続けるつもりです。",
                    "reading": "だいがくを そつぎょうしたあとは、にほんの だいがくいんに しんがくして じんこうちのうの けんきゅうを つづける つもりです。",
                    "translation": "After graduating from university, I intend to enter a Japanese graduate school and continue research in artificial intelligence."
                },
                {
                    "target": "明日の午後は社外の取引先との重要な業務提携会議に出席する予定です。",
                    "reading": "あしたの ごごは しゃがいの とりひきさきとの じゅうような ぎょうむていけいかいぎに しゅっせきする よていです。",
                    "translation": "Tomorrow afternoon, I am scheduled to attend an important business alliance meeting with an external client."
                },
                {
                    "target": "今度の週末は友達と一緒に美術館の特別展を見に行こうと思っています。",
                    "reading": "こんどの しゅうまつは ともだちと いっしょに びじゅつかんの とくべつてんを みにいこうと おもっています。",
                    "translation": "This coming weekend, I am thinking of going to see the special exhibition at the art museum with my friend."
                },
                {
                    "target": "今年の夏休みは北海道を一周旅行する計画を立てています。",
                    "reading": "ことしの なつやすみは ほっかいどうを いっしゅうりょこうする けいかくを たてています。",
                    "translation": "I am making plans to travel around Hokkaido during this year's summer vacation."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】意向形・将来の計画「〜つもり」「〜予定」（第5部）における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "大学を卒業した後は、日本の大学院に進学して人工知能の研究を続けるつもりです。",
                        "不適切な助詞配置の誤文例（12.5.1）",
                        "時制の不一致を含む文法誤謬（12.5.2）",
                        "敬意レベルが不適当な選択肢（12.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】動詞の意向形（行こう・食べよう）、意志表現「〜つもりです」、客観的予定「〜予定です」の習得（第5部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】意向形・将来の計画「〜つもり」「〜予定」（第5部）の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "明日の午後は社外の取引先との重要な業務提携会議に出席する予定です。",
                        "文脈の接続が不自然な誤答（12.5.x）",
                        "助詞の選択を誤った誤謬例（12.5.y）",
                        "主述の呼応が崩れた不完全文（12.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u12-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "今度の週末は友達と一緒に美術館の特別展を見に行こうと思っています。",
                        "意味の取り違えによる不適切な文（12.5.a）",
                        "不自然な漢語の誤用（12.5.b）",
                        "文末述語の欠落した文（12.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】意向形・将来の計画「〜つもり」「〜予定」（第5部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試12-5）。",
                    "options": [
                        "今年の夏休みは北海道を一周旅行する計画を立てています。",
                        "助詞の欠落した文法誤文（12.5.m）",
                        "敬語体系の誤用例（12.5.n）",
                        "活用形の接続誤謬（12.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u12-l5）の主要キーワードを入力してください（「大学を卒」）：",
                    "acceptedAnswers": [
                        "大学を卒",
                        "大学を卒業し"
                    ],
                    "explanation": "正解のキーワードは「大学を卒」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l1": {
        "id": "ja-u13-l1",
        "subject": "japanese",
        "unit": 13,
        "lessonNumber": 1,
        "title": "職業・専門分野と職場コミュニケーション（第1部）",
        "level": "B1",
        "objective": "ビジネス敬語、役職名（社長・部長・課長・先輩）、業務メールの定型構文の完全習得（第1部）。",
        "presentation": {
            "explanation": "第十三単元第1課では、日本の企業組織体系（役職・組織構造）および職場における円滑なコミュニケーション作法・ビジネス文書作成スキルを学びます。\n\n【日本の企業組織における主要な役職体系】\n社長、専務、常務、部長、課長、係長、主任、先輩 vs 後輩。\n\n【職場挨拶とビジネスメールの定型句】\n・「お疲れ様です」（日常の業務挨拶・社内向け）\n・「お世話になっております」（社外の取引先に対する標準的な挨拶）\n・「よろしくお願い申し上げます」（ビジネス結びの最上級定型句）",
            "examples": [
                {
                    "target": "いつも大変お世話になっております。株式会社ABCの山田でございます。明日の会議の件でご連絡いたしました。",
                    "reading": "いつも たいへん おせわになっております。かぶしきがいしゃ エービーシーの やまだでございます。あしたの かいぎのけんで ごれんらくいたしました。",
                    "translation": "Thank you very much as always for your continued support. This is Yamada from ABC Corporation. I am contacting you regarding tomorrow's meeting."
                },
                {
                    "target": "部長、先ほどクライアントから提出された新しい企画書をご査収いただけますでしょうか。",
                    "reading": "ぶちょう、さきほど クライアントから ていしゅつされた あたらしい きかくしょを ごさしゅういただけますでしょうか。",
                    "translation": "Department Manager, could you please examine the new proposal submitted by the client earlier?"
                },
                {
                    "target": "本日の業務は以上で終了いたします。皆様、お疲れ様でした。お先に失礼いたします。",
                    "reading": "ほんじつの ぎょうむは いじょうで しゅうりょういたします。みなさま、おつかれさまでした。おさきに しつれいいたします。",
                    "translation": "Today's work is finished with this. Thank you all for your hard work. I will be leaving ahead of you."
                },
                {
                    "target": "迅速かつ丁寧なご対応をいただき、心より厚く御礼申し上げます。",
                    "reading": "じんそく かつ ていねいな ごたいおうを いただき、こころより あつく おんれいもうしあげます。",
                    "translation": "I express my deepest gratitude for your prompt and courteous response."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】職業・専門分野と職場コミュニケーション（第1部）における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "いつも大変お世話になっております。株式会社ABCの山田でございます。明日の会議の件でご連絡いたしました。",
                        "不適切な助詞配置の誤文例（13.1.1）",
                        "時制の不一致を含む文法誤謬（13.1.2）",
                        "敬意レベルが不適当な選択肢（13.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】ビジネス敬語、役職名（社長・部長・課長・先輩）、業務メールの定型構文の完全習得（第1部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】職業・専門分野と職場コミュニケーション（第1部）の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "部長、先ほどクライアントから提出された新しい企画書をご査収いただけますでしょうか。",
                        "文脈の接続が不自然な誤答（13.1.x）",
                        "助詞の選択を誤った誤謬例（13.1.y）",
                        "主述の呼応が崩れた不完全文（13.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u13-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "本日の業務は以上で終了いたします。皆様、お疲れ様でした。お先に失礼いたします。",
                        "意味の取り違えによる不適切な文（13.1.a）",
                        "不自然な漢語の誤用（13.1.b）",
                        "文末述語の欠落した文（13.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】職業・専門分野と職場コミュニケーション（第1部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試13-1）。",
                    "options": [
                        "迅速かつ丁寧なご対応をいただき、心より厚く御礼申し上げます。",
                        "助詞の欠落した文法誤文（13.1.m）",
                        "敬語体系の誤用例（13.1.n）",
                        "活用形の接続誤謬（13.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u13-l1）の主要キーワードを入力してください（「いつも大」）：",
                    "acceptedAnswers": [
                        "いつも大",
                        "いつも大変お"
                    ],
                    "explanation": "正解のキーワードは「いつも大」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l2": {
        "id": "ja-u13-l2",
        "subject": "japanese",
        "unit": 13,
        "lessonNumber": 2,
        "title": "職業・専門分野と職場コミュニケーション（第2部）",
        "level": "B1",
        "objective": "ビジネス敬語、役職名（社長・部長・課長・先輩）、業務メールの定型構文の完全習得（第2部）。",
        "presentation": {
            "explanation": "第十三単元第2課では、日本の企業組織体系（役職・組織構造）および職場における円滑なコミュニケーション作法・ビジネス文書作成スキルを学びます。\n\n【日本の企業組織における主要な役職体系】\n社長、専務、常務、部長、課長、係長、主任、先輩 vs 後輩。\n\n【職場挨拶とビジネスメールの定型句】\n・「お疲れ様です」（日常の業務挨拶・社内向け）\n・「お世話になっております」（社外の取引先に対する標準的な挨拶）\n・「よろしくお願い申し上げます」（ビジネス結びの最上級定型句）",
            "examples": [
                {
                    "target": "いつも大変お世話になっております。株式会社ABCの山田でございます。明日の会議の件でご連絡いたしました。",
                    "reading": "いつも たいへん おせわになっております。かぶしきがいしゃ エービーシーの やまだでございます。あしたの かいぎのけんで ごれんらくいたしました。",
                    "translation": "Thank you very much as always for your continued support. This is Yamada from ABC Corporation. I am contacting you regarding tomorrow's meeting."
                },
                {
                    "target": "部長、先ほどクライアントから提出された新しい企画書をご査収いただけますでしょうか。",
                    "reading": "ぶちょう、さきほど クライアントから ていしゅつされた あたらしい きかくしょを ごさしゅういただけますでしょうか。",
                    "translation": "Department Manager, could you please examine the new proposal submitted by the client earlier?"
                },
                {
                    "target": "本日の業務は以上で終了いたします。皆様、お疲れ様でした。お先に失礼いたします。",
                    "reading": "ほんじつの ぎょうむは いじょうで しゅうりょういたします。みなさま、おつかれさまでした。おさきに しつれいいたします。",
                    "translation": "Today's work is finished with this. Thank you all for your hard work. I will be leaving ahead of you."
                },
                {
                    "target": "迅速かつ丁寧なご対応をいただき、心より厚く御礼申し上げます。",
                    "reading": "じんそく かつ ていねいな ごたいおうを いただき、こころより あつく おんれいもうしあげます。",
                    "translation": "I express my deepest gratitude for your prompt and courteous response."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】職業・専門分野と職場コミュニケーション（第2部）における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "いつも大変お世話になっております。株式会社ABCの山田でございます。明日の会議の件でご連絡いたしました。",
                        "不適切な助詞配置の誤文例（13.2.1）",
                        "時制の不一致を含む文法誤謬（13.2.2）",
                        "敬意レベルが不適当な選択肢（13.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】ビジネス敬語、役職名（社長・部長・課長・先輩）、業務メールの定型構文の完全習得（第2部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】職業・専門分野と職場コミュニケーション（第2部）の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "部長、先ほどクライアントから提出された新しい企画書をご査収いただけますでしょうか。",
                        "文脈の接続が不自然な誤答（13.2.x）",
                        "助詞の選択を誤った誤謬例（13.2.y）",
                        "主述の呼応が崩れた不完全文（13.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u13-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "本日の業務は以上で終了いたします。皆様、お疲れ様でした。お先に失礼いたします。",
                        "意味の取り違えによる不適切な文（13.2.a）",
                        "不自然な漢語の誤用（13.2.b）",
                        "文末述語の欠落した文（13.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】職業・専門分野と職場コミュニケーション（第2部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試13-2）。",
                    "options": [
                        "迅速かつ丁寧なご対応をいただき、心より厚く御礼申し上げます。",
                        "助詞の欠落した文法誤文（13.2.m）",
                        "敬語体系の誤用例（13.2.n）",
                        "活用形の接続誤謬（13.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u13-l2）の主要キーワードを入力してください（「いつも大」）：",
                    "acceptedAnswers": [
                        "いつも大",
                        "いつも大変お"
                    ],
                    "explanation": "正解のキーワードは「いつも大」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l3": {
        "id": "ja-u13-l3",
        "subject": "japanese",
        "unit": 13,
        "lessonNumber": 3,
        "title": "職業・専門分野と職場コミュニケーション（第3部）",
        "level": "B1",
        "objective": "ビジネス敬語、役職名（社長・部長・課長・先輩）、業務メールの定型構文の完全習得（第3部）。",
        "presentation": {
            "explanation": "第十三単元第3課では、日本の企業組織体系（役職・組織構造）および職場における円滑なコミュニケーション作法・ビジネス文書作成スキルを学びます。\n\n【日本の企業組織における主要な役職体系】\n社長、専務、常務、部長、課長、係長、主任、先輩 vs 後輩。\n\n【職場挨拶とビジネスメールの定型句】\n・「お疲れ様です」（日常の業務挨拶・社内向け）\n・「お世話になっております」（社外の取引先に対する標準的な挨拶）\n・「よろしくお願い申し上げます」（ビジネス結びの最上級定型句）",
            "examples": [
                {
                    "target": "いつも大変お世話になっております。株式会社ABCの山田でございます。明日の会議の件でご連絡いたしました。",
                    "reading": "いつも たいへん おせわになっております。かぶしきがいしゃ エービーシーの やまだでございます。あしたの かいぎのけんで ごれんらくいたしました。",
                    "translation": "Thank you very much as always for your continued support. This is Yamada from ABC Corporation. I am contacting you regarding tomorrow's meeting."
                },
                {
                    "target": "部長、先ほどクライアントから提出された新しい企画書をご査収いただけますでしょうか。",
                    "reading": "ぶちょう、さきほど クライアントから ていしゅつされた あたらしい きかくしょを ごさしゅういただけますでしょうか。",
                    "translation": "Department Manager, could you please examine the new proposal submitted by the client earlier?"
                },
                {
                    "target": "本日の業務は以上で終了いたします。皆様、お疲れ様でした。お先に失礼いたします。",
                    "reading": "ほんじつの ぎょうむは いじょうで しゅうりょういたします。みなさま、おつかれさまでした。おさきに しつれいいたします。",
                    "translation": "Today's work is finished with this. Thank you all for your hard work. I will be leaving ahead of you."
                },
                {
                    "target": "迅速かつ丁寧なご対応をいただき、心より厚く御礼申し上げます。",
                    "reading": "じんそく かつ ていねいな ごたいおうを いただき、こころより あつく おんれいもうしあげます。",
                    "translation": "I express my deepest gratitude for your prompt and courteous response."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】職業・専門分野と職場コミュニケーション（第3部）における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "いつも大変お世話になっております。株式会社ABCの山田でございます。明日の会議の件でご連絡いたしました。",
                        "不適切な助詞配置の誤文例（13.3.1）",
                        "時制の不一致を含む文法誤謬（13.3.2）",
                        "敬意レベルが不適当な選択肢（13.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】ビジネス敬語、役職名（社長・部長・課長・先輩）、業務メールの定型構文の完全習得（第3部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】職業・専門分野と職場コミュニケーション（第3部）の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "部長、先ほどクライアントから提出された新しい企画書をご査収いただけますでしょうか。",
                        "文脈の接続が不自然な誤答（13.3.x）",
                        "助詞の選択を誤った誤謬例（13.3.y）",
                        "主述の呼応が崩れた不完全文（13.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u13-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "本日の業務は以上で終了いたします。皆様、お疲れ様でした。お先に失礼いたします。",
                        "意味の取り違えによる不適切な文（13.3.a）",
                        "不自然な漢語の誤用（13.3.b）",
                        "文末述語の欠落した文（13.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】職業・専門分野と職場コミュニケーション（第3部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試13-3）。",
                    "options": [
                        "迅速かつ丁寧なご対応をいただき、心より厚く御礼申し上げます。",
                        "助詞の欠落した文法誤文（13.3.m）",
                        "敬語体系の誤用例（13.3.n）",
                        "活用形の接続誤謬（13.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u13-l3）の主要キーワードを入力してください（「いつも大」）：",
                    "acceptedAnswers": [
                        "いつも大",
                        "いつも大変お"
                    ],
                    "explanation": "正解のキーワードは「いつも大」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l4": {
        "id": "ja-u13-l4",
        "subject": "japanese",
        "unit": 13,
        "lessonNumber": 4,
        "title": "職業・専門分野と職場コミュニケーション（第4部）",
        "level": "B1",
        "objective": "ビジネス敬語、役職名（社長・部長・課長・先輩）、業務メールの定型構文の完全習得（第4部）。",
        "presentation": {
            "explanation": "第十三単元第4課では、日本の企業組織体系（役職・組織構造）および職場における円滑なコミュニケーション作法・ビジネス文書作成スキルを学びます。\n\n【日本の企業組織における主要な役職体系】\n社長、専務、常務、部長、課長、係長、主任、先輩 vs 後輩。\n\n【職場挨拶とビジネスメールの定型句】\n・「お疲れ様です」（日常の業務挨拶・社内向け）\n・「お世話になっております」（社外の取引先に対する標準的な挨拶）\n・「よろしくお願い申し上げます」（ビジネス結びの最上級定型句）",
            "examples": [
                {
                    "target": "いつも大変お世話になっております。株式会社ABCの山田でございます。明日の会議の件でご連絡いたしました。",
                    "reading": "いつも たいへん おせわになっております。かぶしきがいしゃ エービーシーの やまだでございます。あしたの かいぎのけんで ごれんらくいたしました。",
                    "translation": "Thank you very much as always for your continued support. This is Yamada from ABC Corporation. I am contacting you regarding tomorrow's meeting."
                },
                {
                    "target": "部長、先ほどクライアントから提出された新しい企画書をご査収いただけますでしょうか。",
                    "reading": "ぶちょう、さきほど クライアントから ていしゅつされた あたらしい きかくしょを ごさしゅういただけますでしょうか。",
                    "translation": "Department Manager, could you please examine the new proposal submitted by the client earlier?"
                },
                {
                    "target": "本日の業務は以上で終了いたします。皆様、お疲れ様でした。お先に失礼いたします。",
                    "reading": "ほんじつの ぎょうむは いじょうで しゅうりょういたします。みなさま、おつかれさまでした。おさきに しつれいいたします。",
                    "translation": "Today's work is finished with this. Thank you all for your hard work. I will be leaving ahead of you."
                },
                {
                    "target": "迅速かつ丁寧なご対応をいただき、心より厚く御礼申し上げます。",
                    "reading": "じんそく かつ ていねいな ごたいおうを いただき、こころより あつく おんれいもうしあげます。",
                    "translation": "I express my deepest gratitude for your prompt and courteous response."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】職業・専門分野と職場コミュニケーション（第4部）における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "いつも大変お世話になっております。株式会社ABCの山田でございます。明日の会議の件でご連絡いたしました。",
                        "不適切な助詞配置の誤文例（13.4.1）",
                        "時制の不一致を含む文法誤謬（13.4.2）",
                        "敬意レベルが不適当な選択肢（13.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】ビジネス敬語、役職名（社長・部長・課長・先輩）、業務メールの定型構文の完全習得（第4部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】職業・専門分野と職場コミュニケーション（第4部）の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "部長、先ほどクライアントから提出された新しい企画書をご査収いただけますでしょうか。",
                        "文脈の接続が不自然な誤答（13.4.x）",
                        "助詞の選択を誤った誤謬例（13.4.y）",
                        "主述の呼応が崩れた不完全文（13.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u13-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "本日の業務は以上で終了いたします。皆様、お疲れ様でした。お先に失礼いたします。",
                        "意味の取り違えによる不適切な文（13.4.a）",
                        "不自然な漢語の誤用（13.4.b）",
                        "文末述語の欠落した文（13.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】職業・専門分野と職場コミュニケーション（第4部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試13-4）。",
                    "options": [
                        "迅速かつ丁寧なご対応をいただき、心より厚く御礼申し上げます。",
                        "助詞の欠落した文法誤文（13.4.m）",
                        "敬語体系の誤用例（13.4.n）",
                        "活用形の接続誤謬（13.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u13-l4）の主要キーワードを入力してください（「いつも大」）：",
                    "acceptedAnswers": [
                        "いつも大",
                        "いつも大変お"
                    ],
                    "explanation": "正解のキーワードは「いつも大」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u13-l5": {
        "id": "ja-u13-l5",
        "subject": "japanese",
        "unit": 13,
        "lessonNumber": 5,
        "title": "職業・専門分野と職場コミュニケーション（第5部）",
        "level": "B1",
        "objective": "ビジネス敬語、役職名（社長・部長・課長・先輩）、業務メールの定型構文の完全習得（第5部）。",
        "presentation": {
            "explanation": "第十三単元第5課では、日本の企業組織体系（役職・組織構造）および職場における円滑なコミュニケーション作法・ビジネス文書作成スキルを学びます。\n\n【日本の企業組織における主要な役職体系】\n社長、専務、常務、部長、課長、係長、主任、先輩 vs 後輩。\n\n【職場挨拶とビジネスメールの定型句】\n・「お疲れ様です」（日常の業務挨拶・社内向け）\n・「お世話になっております」（社外の取引先に対する標準的な挨拶）\n・「よろしくお願い申し上げます」（ビジネス結びの最上級定型句）",
            "examples": [
                {
                    "target": "いつも大変お世話になっております。株式会社ABCの山田でございます。明日の会議の件でご連絡いたしました。",
                    "reading": "いつも たいへん おせわになっております。かぶしきがいしゃ エービーシーの やまだでございます。あしたの かいぎのけんで ごれんらくいたしました。",
                    "translation": "Thank you very much as always for your continued support. This is Yamada from ABC Corporation. I am contacting you regarding tomorrow's meeting."
                },
                {
                    "target": "部長、先ほどクライアントから提出された新しい企画書をご査収いただけますでしょうか。",
                    "reading": "ぶちょう、さきほど クライアントから ていしゅつされた あたらしい きかくしょを ごさしゅういただけますでしょうか。",
                    "translation": "Department Manager, could you please examine the new proposal submitted by the client earlier?"
                },
                {
                    "target": "本日の業務は以上で終了いたします。皆様、お疲れ様でした。お先に失礼いたします。",
                    "reading": "ほんじつの ぎょうむは いじょうで しゅうりょういたします。みなさま、おつかれさまでした。おさきに しつれいいたします。",
                    "translation": "Today's work is finished with this. Thank you all for your hard work. I will be leaving ahead of you."
                },
                {
                    "target": "迅速かつ丁寧なご対応をいただき、心より厚く御礼申し上げます。",
                    "reading": "じんそく かつ ていねいな ごたいおうを いただき、こころより あつく おんれいもうしあげます。",
                    "translation": "I express my deepest gratitude for your prompt and courteous response."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】職業・専門分野と職場コミュニケーション（第5部）における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "いつも大変お世話になっております。株式会社ABCの山田でございます。明日の会議の件でご連絡いたしました。",
                        "不適切な助詞配置の誤文例（13.5.1）",
                        "時制の不一致を含む文法誤謬（13.5.2）",
                        "敬意レベルが不適当な選択肢（13.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】ビジネス敬語、役職名（社長・部長・課長・先輩）、業務メールの定型構文の完全習得（第5部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】職業・専門分野と職場コミュニケーション（第5部）の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "部長、先ほどクライアントから提出された新しい企画書をご査収いただけますでしょうか。",
                        "文脈の接続が不自然な誤答（13.5.x）",
                        "助詞の選択を誤った誤謬例（13.5.y）",
                        "主述の呼応が崩れた不完全文（13.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u13-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "本日の業務は以上で終了いたします。皆様、お疲れ様でした。お先に失礼いたします。",
                        "意味の取り違えによる不適切な文（13.5.a）",
                        "不自然な漢語の誤用（13.5.b）",
                        "文末述語の欠落した文（13.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】職業・専門分野と職場コミュニケーション（第5部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試13-5）。",
                    "options": [
                        "迅速かつ丁寧なご対応をいただき、心より厚く御礼申し上げます。",
                        "助詞の欠落した文法誤文（13.5.m）",
                        "敬語体系の誤用例（13.5.n）",
                        "活用形の接続誤謬（13.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u13-l5）の主要キーワードを入力してください（「いつも大」）：",
                    "acceptedAnswers": [
                        "いつも大",
                        "いつも大変お"
                    ],
                    "explanation": "正解のキーワードは「いつも大」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l1": {
        "id": "ja-u14-l1",
        "subject": "japanese",
        "unit": 14,
        "lessonNumber": 1,
        "title": "意見の表明・間接引用・推量表現（第1部）",
        "level": "B1",
        "objective": "普通形接続による意見「〜と思います」、引用「〜と言いました」、推量・不確実性「〜かもしれません」の習得（第1部）。",
        "presentation": {
            "explanation": "第十四単元第1課では、自分の私見や推測、他者の発言を客観的に伝達するための複文構造とモダリティ表現を学びます。\n\n【普通形への接続構造】\n１．個人的な意見：「普通形 ＋ と思います」（例：「日本の治安は世界で最も良いと思います」）。\n２．発言の間接引用：「普通形 ＋ と言いました / と言っていました」（例：「田中さんは明日会議に出席できないと言っていました」）。\n３．不確実な推量：「普通形 ＋ かもしれません」（例：「午後から雨が降るかもしれません」）。\n４．理由説明の強調：「普通形 ＋ んです / のです」。",
            "examples": [
                {
                    "target": "環境問題を解決するためには、再生可能エネルギーの導入を加速させるべきだと思います。",
                    "reading": "かんきょうもんだいを かいけつするためには、さいせいかのうエネルギーの どうにゅうを かそくさせるべきだと おもいます。",
                    "translation": "I think that in order to solve environmental problems, we should accelerate the adoption of renewable energy."
                },
                {
                    "target": "明日は台風が接近しているため、新幹線のダイヤが乱れるかもしれません。",
                    "reading": "あしたは たいふうが せっきんしているため、しんかんせんの ダイヤが みだれるかもしれません。",
                    "translation": "Because the typhoon is approaching tomorrow, the Shinkansen timetable might be disrupted."
                },
                {
                    "target": "佐藤教授は、次回の国際シンポジウムは京都で開催されるとおっしゃっていました。",
                    "reading": "さとうきょうじゅは、じかいの こくさいシンポジウムは きょうとで かいさいされると おっしゃっていました。",
                    "translation": "Professor Sato said that the next international symposium will be held in Kyoto."
                },
                {
                    "target": "どうして昨日会社を休んだのですか。— 急に高熱が出たんです。",
                    "reading": "どうして きのう かいしゃを やすんだのですか。— きゅうに こうねつが でたんです。",
                    "translation": "Why were you absent from work yesterday? — It is because I suddenly developed a high fever."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】意見の表明・間接引用・推量表現（第1部）における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "環境問題を解決するためには、再生可能エネルギーの導入を加速させるべきだと思います。",
                        "不適切な助詞配置の誤文例（14.1.1）",
                        "時制の不一致を含む文法誤謬（14.1.2）",
                        "敬意レベルが不適当な選択肢（14.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】普通形接続による意見「〜と思います」、引用「〜と言いました」、推量・不確実性「〜かもしれません」の習得（第1部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】意見の表明・間接引用・推量表現（第1部）の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "明日は台風が接近しているため、新幹線のダイヤが乱れるかもしれません。",
                        "文脈の接続が不自然な誤答（14.1.x）",
                        "助詞の選択を誤った誤謬例（14.1.y）",
                        "主述の呼応が崩れた不完全文（14.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u14-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "佐藤教授は、次回の国際シンポジウムは京都で開催されるとおっしゃっていました。",
                        "意味の取り違えによる不適切な文（14.1.a）",
                        "不自然な漢語の誤用（14.1.b）",
                        "文末述語の欠落した文（14.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】意見の表明・間接引用・推量表現（第1部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試14-1）。",
                    "options": [
                        "どうして昨日会社を休んだのですか。— 急に高熱が出たんです。",
                        "助詞の欠落した文法誤文（14.1.m）",
                        "敬語体系の誤用例（14.1.n）",
                        "活用形の接続誤謬（14.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u14-l1）の主要キーワードを入力してください（「環境問題」）：",
                    "acceptedAnswers": [
                        "環境問題",
                        "環境問題を解"
                    ],
                    "explanation": "正解のキーワードは「環境問題」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l2": {
        "id": "ja-u14-l2",
        "subject": "japanese",
        "unit": 14,
        "lessonNumber": 2,
        "title": "意見の表明・間接引用・推量表現（第2部）",
        "level": "B1",
        "objective": "普通形接続による意見「〜と思います」、引用「〜と言いました」、推量・不確実性「〜かもしれません」の習得（第2部）。",
        "presentation": {
            "explanation": "第十四単元第2課では、自分の私見や推測、他者の発言を客観的に伝達するための複文構造とモダリティ表現を学びます。\n\n【普通形への接続構造】\n１．個人的な意見：「普通形 ＋ と思います」（例：「日本の治安は世界で最も良いと思います」）。\n２．発言の間接引用：「普通形 ＋ と言いました / と言っていました」（例：「田中さんは明日会議に出席できないと言っていました」）。\n３．不確実な推量：「普通形 ＋ かもしれません」（例：「午後から雨が降るかもしれません」）。\n４．理由説明の強調：「普通形 ＋ んです / のです」。",
            "examples": [
                {
                    "target": "環境問題を解決するためには、再生可能エネルギーの導入を加速させるべきだと思います。",
                    "reading": "かんきょうもんだいを かいけつするためには、さいせいかのうエネルギーの どうにゅうを かそくさせるべきだと おもいます。",
                    "translation": "I think that in order to solve environmental problems, we should accelerate the adoption of renewable energy."
                },
                {
                    "target": "明日は台風が接近しているため、新幹線のダイヤが乱れるかもしれません。",
                    "reading": "あしたは たいふうが せっきんしているため、しんかんせんの ダイヤが みだれるかもしれません。",
                    "translation": "Because the typhoon is approaching tomorrow, the Shinkansen timetable might be disrupted."
                },
                {
                    "target": "佐藤教授は、次回の国際シンポジウムは京都で開催されるとおっしゃっていました。",
                    "reading": "さとうきょうじゅは、じかいの こくさいシンポジウムは きょうとで かいさいされると おっしゃっていました。",
                    "translation": "Professor Sato said that the next international symposium will be held in Kyoto."
                },
                {
                    "target": "どうして昨日会社を休んだのですか。— 急に高熱が出たんです。",
                    "reading": "どうして きのう かいしゃを やすんだのですか。— きゅうに こうねつが でたんです。",
                    "translation": "Why were you absent from work yesterday? — It is because I suddenly developed a high fever."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】意見の表明・間接引用・推量表現（第2部）における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "環境問題を解決するためには、再生可能エネルギーの導入を加速させるべきだと思います。",
                        "不適切な助詞配置の誤文例（14.2.1）",
                        "時制の不一致を含む文法誤謬（14.2.2）",
                        "敬意レベルが不適当な選択肢（14.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】普通形接続による意見「〜と思います」、引用「〜と言いました」、推量・不確実性「〜かもしれません」の習得（第2部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】意見の表明・間接引用・推量表現（第2部）の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "明日は台風が接近しているため、新幹線のダイヤが乱れるかもしれません。",
                        "文脈の接続が不自然な誤答（14.2.x）",
                        "助詞の選択を誤った誤謬例（14.2.y）",
                        "主述の呼応が崩れた不完全文（14.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u14-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "佐藤教授は、次回の国際シンポジウムは京都で開催されるとおっしゃっていました。",
                        "意味の取り違えによる不適切な文（14.2.a）",
                        "不自然な漢語の誤用（14.2.b）",
                        "文末述語の欠落した文（14.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】意見の表明・間接引用・推量表現（第2部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試14-2）。",
                    "options": [
                        "どうして昨日会社を休んだのですか。— 急に高熱が出たんです。",
                        "助詞の欠落した文法誤文（14.2.m）",
                        "敬語体系の誤用例（14.2.n）",
                        "活用形の接続誤謬（14.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u14-l2）の主要キーワードを入力してください（「環境問題」）：",
                    "acceptedAnswers": [
                        "環境問題",
                        "環境問題を解"
                    ],
                    "explanation": "正解のキーワードは「環境問題」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l3": {
        "id": "ja-u14-l3",
        "subject": "japanese",
        "unit": 14,
        "lessonNumber": 3,
        "title": "意見の表明・間接引用・推量表現（第3部）",
        "level": "B1",
        "objective": "普通形接続による意見「〜と思います」、引用「〜と言いました」、推量・不確実性「〜かもしれません」の習得（第3部）。",
        "presentation": {
            "explanation": "第十四単元第3課では、自分の私見や推測、他者の発言を客観的に伝達するための複文構造とモダリティ表現を学びます。\n\n【普通形への接続構造】\n１．個人的な意見：「普通形 ＋ と思います」（例：「日本の治安は世界で最も良いと思います」）。\n２．発言の間接引用：「普通形 ＋ と言いました / と言っていました」（例：「田中さんは明日会議に出席できないと言っていました」）。\n３．不確実な推量：「普通形 ＋ かもしれません」（例：「午後から雨が降るかもしれません」）。\n４．理由説明の強調：「普通形 ＋ んです / のです」。",
            "examples": [
                {
                    "target": "環境問題を解決するためには、再生可能エネルギーの導入を加速させるべきだと思います。",
                    "reading": "かんきょうもんだいを かいけつするためには、さいせいかのうエネルギーの どうにゅうを かそくさせるべきだと おもいます。",
                    "translation": "I think that in order to solve environmental problems, we should accelerate the adoption of renewable energy."
                },
                {
                    "target": "明日は台風が接近しているため、新幹線のダイヤが乱れるかもしれません。",
                    "reading": "あしたは たいふうが せっきんしているため、しんかんせんの ダイヤが みだれるかもしれません。",
                    "translation": "Because the typhoon is approaching tomorrow, the Shinkansen timetable might be disrupted."
                },
                {
                    "target": "佐藤教授は、次回の国際シンポジウムは京都で開催されるとおっしゃっていました。",
                    "reading": "さとうきょうじゅは、じかいの こくさいシンポジウムは きょうとで かいさいされると おっしゃっていました。",
                    "translation": "Professor Sato said that the next international symposium will be held in Kyoto."
                },
                {
                    "target": "どうして昨日会社を休んだのですか。— 急に高熱が出たんです。",
                    "reading": "どうして きのう かいしゃを やすんだのですか。— きゅうに こうねつが でたんです。",
                    "translation": "Why were you absent from work yesterday? — It is because I suddenly developed a high fever."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】意見の表明・間接引用・推量表現（第3部）における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "環境問題を解決するためには、再生可能エネルギーの導入を加速させるべきだと思います。",
                        "不適切な助詞配置の誤文例（14.3.1）",
                        "時制の不一致を含む文法誤謬（14.3.2）",
                        "敬意レベルが不適当な選択肢（14.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】普通形接続による意見「〜と思います」、引用「〜と言いました」、推量・不確実性「〜かもしれません」の習得（第3部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】意見の表明・間接引用・推量表現（第3部）の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "明日は台風が接近しているため、新幹線のダイヤが乱れるかもしれません。",
                        "文脈の接続が不自然な誤答（14.3.x）",
                        "助詞の選択を誤った誤謬例（14.3.y）",
                        "主述の呼応が崩れた不完全文（14.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u14-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "佐藤教授は、次回の国際シンポジウムは京都で開催されるとおっしゃっていました。",
                        "意味の取り違えによる不適切な文（14.3.a）",
                        "不自然な漢語の誤用（14.3.b）",
                        "文末述語の欠落した文（14.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】意見の表明・間接引用・推量表現（第3部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試14-3）。",
                    "options": [
                        "どうして昨日会社を休んだのですか。— 急に高熱が出たんです。",
                        "助詞の欠落した文法誤文（14.3.m）",
                        "敬語体系の誤用例（14.3.n）",
                        "活用形の接続誤謬（14.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u14-l3）の主要キーワードを入力してください（「環境問題」）：",
                    "acceptedAnswers": [
                        "環境問題",
                        "環境問題を解"
                    ],
                    "explanation": "正解のキーワードは「環境問題」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l4": {
        "id": "ja-u14-l4",
        "subject": "japanese",
        "unit": 14,
        "lessonNumber": 4,
        "title": "意見の表明・間接引用・推量表現（第4部）",
        "level": "B1",
        "objective": "普通形接続による意見「〜と思います」、引用「〜と言いました」、推量・不確実性「〜かもしれません」の習得（第4部）。",
        "presentation": {
            "explanation": "第十四単元第4課では、自分の私見や推測、他者の発言を客観的に伝達するための複文構造とモダリティ表現を学びます。\n\n【普通形への接続構造】\n１．個人的な意見：「普通形 ＋ と思います」（例：「日本の治安は世界で最も良いと思います」）。\n２．発言の間接引用：「普通形 ＋ と言いました / と言っていました」（例：「田中さんは明日会議に出席できないと言っていました」）。\n３．不確実な推量：「普通形 ＋ かもしれません」（例：「午後から雨が降るかもしれません」）。\n４．理由説明の強調：「普通形 ＋ んです / のです」。",
            "examples": [
                {
                    "target": "環境問題を解決するためには、再生可能エネルギーの導入を加速させるべきだと思います。",
                    "reading": "かんきょうもんだいを かいけつするためには、さいせいかのうエネルギーの どうにゅうを かそくさせるべきだと おもいます。",
                    "translation": "I think that in order to solve environmental problems, we should accelerate the adoption of renewable energy."
                },
                {
                    "target": "明日は台風が接近しているため、新幹線のダイヤが乱れるかもしれません。",
                    "reading": "あしたは たいふうが せっきんしているため、しんかんせんの ダイヤが みだれるかもしれません。",
                    "translation": "Because the typhoon is approaching tomorrow, the Shinkansen timetable might be disrupted."
                },
                {
                    "target": "佐藤教授は、次回の国際シンポジウムは京都で開催されるとおっしゃっていました。",
                    "reading": "さとうきょうじゅは、じかいの こくさいシンポジウムは きょうとで かいさいされると おっしゃっていました。",
                    "translation": "Professor Sato said that the next international symposium will be held in Kyoto."
                },
                {
                    "target": "どうして昨日会社を休んだのですか。— 急に高熱が出たんです。",
                    "reading": "どうして きのう かいしゃを やすんだのですか。— きゅうに こうねつが でたんです。",
                    "translation": "Why were you absent from work yesterday? — It is because I suddenly developed a high fever."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】意見の表明・間接引用・推量表現（第4部）における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "環境問題を解決するためには、再生可能エネルギーの導入を加速させるべきだと思います。",
                        "不適切な助詞配置の誤文例（14.4.1）",
                        "時制の不一致を含む文法誤謬（14.4.2）",
                        "敬意レベルが不適当な選択肢（14.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】普通形接続による意見「〜と思います」、引用「〜と言いました」、推量・不確実性「〜かもしれません」の習得（第4部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】意見の表明・間接引用・推量表現（第4部）の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "明日は台風が接近しているため、新幹線のダイヤが乱れるかもしれません。",
                        "文脈の接続が不自然な誤答（14.4.x）",
                        "助詞の選択を誤った誤謬例（14.4.y）",
                        "主述の呼応が崩れた不完全文（14.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u14-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "佐藤教授は、次回の国際シンポジウムは京都で開催されるとおっしゃっていました。",
                        "意味の取り違えによる不適切な文（14.4.a）",
                        "不自然な漢語の誤用（14.4.b）",
                        "文末述語の欠落した文（14.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】意見の表明・間接引用・推量表現（第4部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試14-4）。",
                    "options": [
                        "どうして昨日会社を休んだのですか。— 急に高熱が出たんです。",
                        "助詞の欠落した文法誤文（14.4.m）",
                        "敬語体系の誤用例（14.4.n）",
                        "活用形の接続誤謬（14.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u14-l4）の主要キーワードを入力してください（「環境問題」）：",
                    "acceptedAnswers": [
                        "環境問題",
                        "環境問題を解"
                    ],
                    "explanation": "正解のキーワードは「環境問題」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u14-l5": {
        "id": "ja-u14-l5",
        "subject": "japanese",
        "unit": 14,
        "lessonNumber": 5,
        "title": "意見の表明・間接引用・推量表現（第5部）",
        "level": "B1",
        "objective": "普通形接続による意見「〜と思います」、引用「〜と言いました」、推量・不確実性「〜かもしれません」の習得（第5部）。",
        "presentation": {
            "explanation": "第十四単元第5課では、自分の私見や推測、他者の発言を客観的に伝達するための複文構造とモダリティ表現を学びます。\n\n【普通形への接続構造】\n１．個人的な意見：「普通形 ＋ と思います」（例：「日本の治安は世界で最も良いと思います」）。\n２．発言の間接引用：「普通形 ＋ と言いました / と言っていました」（例：「田中さんは明日会議に出席できないと言っていました」）。\n３．不確実な推量：「普通形 ＋ かもしれません」（例：「午後から雨が降るかもしれません」）。\n４．理由説明の強調：「普通形 ＋ んです / のです」。",
            "examples": [
                {
                    "target": "環境問題を解決するためには、再生可能エネルギーの導入を加速させるべきだと思います。",
                    "reading": "かんきょうもんだいを かいけつするためには、さいせいかのうエネルギーの どうにゅうを かそくさせるべきだと おもいます。",
                    "translation": "I think that in order to solve environmental problems, we should accelerate the adoption of renewable energy."
                },
                {
                    "target": "明日は台風が接近しているため、新幹線のダイヤが乱れるかもしれません。",
                    "reading": "あしたは たいふうが せっきんしているため、しんかんせんの ダイヤが みだれるかもしれません。",
                    "translation": "Because the typhoon is approaching tomorrow, the Shinkansen timetable might be disrupted."
                },
                {
                    "target": "佐藤教授は、次回の国際シンポジウムは京都で開催されるとおっしゃっていました。",
                    "reading": "さとうきょうじゅは、じかいの こくさいシンポジウムは きょうとで かいさいされると おっしゃっていました。",
                    "translation": "Professor Sato said that the next international symposium will be held in Kyoto."
                },
                {
                    "target": "どうして昨日会社を休んだのですか。— 急に高熱が出たんです。",
                    "reading": "どうして きのう かいしゃを やすんだのですか。— きゅうに こうねつが でたんです。",
                    "translation": "Why were you absent from work yesterday? — It is because I suddenly developed a high fever."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】意見の表明・間接引用・推量表現（第5部）における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "環境問題を解決するためには、再生可能エネルギーの導入を加速させるべきだと思います。",
                        "不適切な助詞配置の誤文例（14.5.1）",
                        "時制の不一致を含む文法誤謬（14.5.2）",
                        "敬意レベルが不適当な選択肢（14.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】普通形接続による意見「〜と思います」、引用「〜と言いました」、推量・不確実性「〜かもしれません」の習得（第5部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】意見の表明・間接引用・推量表現（第5部）の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "明日は台風が接近しているため、新幹線のダイヤが乱れるかもしれません。",
                        "文脈の接続が不自然な誤答（14.5.x）",
                        "助詞の選択を誤った誤謬例（14.5.y）",
                        "主述の呼応が崩れた不完全文（14.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u14-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "佐藤教授は、次回の国際シンポジウムは京都で開催されるとおっしゃっていました。",
                        "意味の取り違えによる不適切な文（14.5.a）",
                        "不自然な漢語の誤用（14.5.b）",
                        "文末述語の欠落した文（14.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】意見の表明・間接引用・推量表現（第5部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試14-5）。",
                    "options": [
                        "どうして昨日会社を休んだのですか。— 急に高熱が出たんです。",
                        "助詞の欠落した文法誤文（14.5.m）",
                        "敬語体系の誤用例（14.5.n）",
                        "活用形の接続誤謬（14.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u14-l5）の主要キーワードを入力してください（「環境問題」）：",
                    "acceptedAnswers": [
                        "環境問題",
                        "環境問題を解"
                    ],
                    "explanation": "正解のキーワードは「環境問題」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l1": {
        "id": "ja-u15-l1",
        "subject": "japanese",
        "unit": 15,
        "lessonNumber": 1,
        "title": "日本地理・観光文化と伝統的旅館作法（第1部）",
        "level": "B1",
        "objective": "日本列島の地域区分（北海道から沖縄まで）、温泉（おんせん）と旅館の宿泊作法の習得（第1部）。",
        "presentation": {
            "explanation": "第十五単元第1課では、日本列島の地理的多様性（北海道から沖縄まで）および日本の伝統的ホスピタリティを体現する温泉旅館の宿泊作法を学びます。\n\n【温泉旅館の伝統作法と語彙】\n・浴衣（ゆかた）：館内着として着用。左前（左側の布を上に重ねる右前）で帯を締めます。\n・温泉（おんせん）：湯船に入る前に必ず洗い場で身体を洗って流すのが絶対的ルールです。\n・懐石料理（かいせきりょうり）：地域の旬の食材を活かした贅沢な伝統料理。\n・お土産（おみやげ）：旅先の名産品を職場や近隣に配る日本の贈答文化。",
            "examples": [
                {
                    "target": "箱根の伝統的な温泉旅館に宿泊し、四季折々の美しい日本庭園と懐石料理を堪能しました。",
                    "reading": "はこねの でんとうてきな おんせんりょかんに しゅくはくし、しきおりおりの うつくしい にほんていえんと かいせきりょうりを たんのうしました。",
                    "translation": "We stayed at a traditional onsen ryokan in Hakone and thoroughly enjoyed the beautiful Japanese garden across four seasons and kaiseki cuisine."
                },
                {
                    "target": "温泉に入る前には、必ず洗い場で身体と髪を石鹸で綺麗に洗ってください。",
                    "reading": "おんせんに はいるまえには、かならず あらいばで からだと かみを せっけんで きれいに あらって ください。",
                    "translation": "Before entering the hot spring bathtub, please always wash your body and hair thoroughly with soap at the washing area."
                },
                {
                    "target": "京都の清水寺と金閣寺を巡り、歴史ある街並みを散策いたしました。",
                    "reading": "きょうとの きよみずでらと きんかくじを めぐり、れきしある まちなみを さんさくいたしました。",
                    "translation": "We toured Kiyomizu-dera and Kinkaku-ji in Kyoto and strolled through the historic streets."
                },
                {
                    "target": "旅行のお土産として、北海道の有名な銘菓とバターサンドを購入いたしました。",
                    "reading": "りょこうの おみやげとして、ほっかいどうの ゆうめいな めいかと バターサンドを こうにゅういたしました。",
                    "translation": "As a souvenir from the trip, I purchased Hokkaido's famous confectionery and butter sandwiches."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本地理・観光文化と伝統的旅館作法（第1部）における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "箱根の伝統的な温泉旅館に宿泊し、四季折々の美しい日本庭園と懐石料理を堪能しました。",
                        "不適切な助詞配置の誤文例（15.1.1）",
                        "時制の不一致を含む文法誤謬（15.1.2）",
                        "敬意レベルが不適当な選択肢（15.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】日本列島の地域区分（北海道から沖縄まで）、温泉（おんせん）と旅館の宿泊作法の習得（第1部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本地理・観光文化と伝統的旅館作法（第1部）の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "温泉に入る前には、必ず洗い場で身体と髪を石鹸で綺麗に洗ってください。",
                        "文脈の接続が不自然な誤答（15.1.x）",
                        "助詞の選択を誤った誤謬例（15.1.y）",
                        "主述の呼応が崩れた不完全文（15.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u15-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "京都の清水寺と金閣寺を巡り、歴史ある街並みを散策いたしました。",
                        "意味の取り違えによる不適切な文（15.1.a）",
                        "不自然な漢語の誤用（15.1.b）",
                        "文末述語の欠落した文（15.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本地理・観光文化と伝統的旅館作法（第1部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試15-1）。",
                    "options": [
                        "旅行のお土産として、北海道の有名な銘菓とバターサンドを購入いたしました。",
                        "助詞の欠落した文法誤文（15.1.m）",
                        "敬語体系の誤用例（15.1.n）",
                        "活用形の接続誤謬（15.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u15-l1）の主要キーワードを入力してください（「箱根の伝」）：",
                    "acceptedAnswers": [
                        "箱根の伝",
                        "箱根の伝統的"
                    ],
                    "explanation": "正解のキーワードは「箱根の伝」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l2": {
        "id": "ja-u15-l2",
        "subject": "japanese",
        "unit": 15,
        "lessonNumber": 2,
        "title": "日本地理・観光文化と伝統的旅館作法（第2部）",
        "level": "B1",
        "objective": "日本列島の地域区分（北海道から沖縄まで）、温泉（おんせん）と旅館の宿泊作法の習得（第2部）。",
        "presentation": {
            "explanation": "第十五単元第2課では、日本列島の地理的多様性（北海道から沖縄まで）および日本の伝統的ホスピタリティを体現する温泉旅館の宿泊作法を学びます。\n\n【温泉旅館の伝統作法と語彙】\n・浴衣（ゆかた）：館内着として着用。左前（左側の布を上に重ねる右前）で帯を締めます。\n・温泉（おんせん）：湯船に入る前に必ず洗い場で身体を洗って流すのが絶対的ルールです。\n・懐石料理（かいせきりょうり）：地域の旬の食材を活かした贅沢な伝統料理。\n・お土産（おみやげ）：旅先の名産品を職場や近隣に配る日本の贈答文化。",
            "examples": [
                {
                    "target": "箱根の伝統的な温泉旅館に宿泊し、四季折々の美しい日本庭園と懐石料理を堪能しました。",
                    "reading": "はこねの でんとうてきな おんせんりょかんに しゅくはくし、しきおりおりの うつくしい にほんていえんと かいせきりょうりを たんのうしました。",
                    "translation": "We stayed at a traditional onsen ryokan in Hakone and thoroughly enjoyed the beautiful Japanese garden across four seasons and kaiseki cuisine."
                },
                {
                    "target": "温泉に入る前には、必ず洗い場で身体と髪を石鹸で綺麗に洗ってください。",
                    "reading": "おんせんに はいるまえには、かならず あらいばで からだと かみを せっけんで きれいに あらって ください。",
                    "translation": "Before entering the hot spring bathtub, please always wash your body and hair thoroughly with soap at the washing area."
                },
                {
                    "target": "京都の清水寺と金閣寺を巡り、歴史ある街並みを散策いたしました。",
                    "reading": "きょうとの きよみずでらと きんかくじを めぐり、れきしある まちなみを さんさくいたしました。",
                    "translation": "We toured Kiyomizu-dera and Kinkaku-ji in Kyoto and strolled through the historic streets."
                },
                {
                    "target": "旅行のお土産として、北海道の有名な銘菓とバターサンドを購入いたしました。",
                    "reading": "りょこうの おみやげとして、ほっかいどうの ゆうめいな めいかと バターサンドを こうにゅういたしました。",
                    "translation": "As a souvenir from the trip, I purchased Hokkaido's famous confectionery and butter sandwiches."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本地理・観光文化と伝統的旅館作法（第2部）における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "箱根の伝統的な温泉旅館に宿泊し、四季折々の美しい日本庭園と懐石料理を堪能しました。",
                        "不適切な助詞配置の誤文例（15.2.1）",
                        "時制の不一致を含む文法誤謬（15.2.2）",
                        "敬意レベルが不適当な選択肢（15.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】日本列島の地域区分（北海道から沖縄まで）、温泉（おんせん）と旅館の宿泊作法の習得（第2部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本地理・観光文化と伝統的旅館作法（第2部）の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "温泉に入る前には、必ず洗い場で身体と髪を石鹸で綺麗に洗ってください。",
                        "文脈の接続が不自然な誤答（15.2.x）",
                        "助詞の選択を誤った誤謬例（15.2.y）",
                        "主述の呼応が崩れた不完全文（15.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u15-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "京都の清水寺と金閣寺を巡り、歴史ある街並みを散策いたしました。",
                        "意味の取り違えによる不適切な文（15.2.a）",
                        "不自然な漢語の誤用（15.2.b）",
                        "文末述語の欠落した文（15.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本地理・観光文化と伝統的旅館作法（第2部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試15-2）。",
                    "options": [
                        "旅行のお土産として、北海道の有名な銘菓とバターサンドを購入いたしました。",
                        "助詞の欠落した文法誤文（15.2.m）",
                        "敬語体系の誤用例（15.2.n）",
                        "活用形の接続誤謬（15.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u15-l2）の主要キーワードを入力してください（「箱根の伝」）：",
                    "acceptedAnswers": [
                        "箱根の伝",
                        "箱根の伝統的"
                    ],
                    "explanation": "正解のキーワードは「箱根の伝」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l3": {
        "id": "ja-u15-l3",
        "subject": "japanese",
        "unit": 15,
        "lessonNumber": 3,
        "title": "日本地理・観光文化と伝統的旅館作法（第3部）",
        "level": "B1",
        "objective": "日本列島の地域区分（北海道から沖縄まで）、温泉（おんせん）と旅館の宿泊作法の習得（第3部）。",
        "presentation": {
            "explanation": "第十五単元第3課では、日本列島の地理的多様性（北海道から沖縄まで）および日本の伝統的ホスピタリティを体現する温泉旅館の宿泊作法を学びます。\n\n【温泉旅館の伝統作法と語彙】\n・浴衣（ゆかた）：館内着として着用。左前（左側の布を上に重ねる右前）で帯を締めます。\n・温泉（おんせん）：湯船に入る前に必ず洗い場で身体を洗って流すのが絶対的ルールです。\n・懐石料理（かいせきりょうり）：地域の旬の食材を活かした贅沢な伝統料理。\n・お土産（おみやげ）：旅先の名産品を職場や近隣に配る日本の贈答文化。",
            "examples": [
                {
                    "target": "箱根の伝統的な温泉旅館に宿泊し、四季折々の美しい日本庭園と懐石料理を堪能しました。",
                    "reading": "はこねの でんとうてきな おんせんりょかんに しゅくはくし、しきおりおりの うつくしい にほんていえんと かいせきりょうりを たんのうしました。",
                    "translation": "We stayed at a traditional onsen ryokan in Hakone and thoroughly enjoyed the beautiful Japanese garden across four seasons and kaiseki cuisine."
                },
                {
                    "target": "温泉に入る前には、必ず洗い場で身体と髪を石鹸で綺麗に洗ってください。",
                    "reading": "おんせんに はいるまえには、かならず あらいばで からだと かみを せっけんで きれいに あらって ください。",
                    "translation": "Before entering the hot spring bathtub, please always wash your body and hair thoroughly with soap at the washing area."
                },
                {
                    "target": "京都の清水寺と金閣寺を巡り、歴史ある街並みを散策いたしました。",
                    "reading": "きょうとの きよみずでらと きんかくじを めぐり、れきしある まちなみを さんさくいたしました。",
                    "translation": "We toured Kiyomizu-dera and Kinkaku-ji in Kyoto and strolled through the historic streets."
                },
                {
                    "target": "旅行のお土産として、北海道の有名な銘菓とバターサンドを購入いたしました。",
                    "reading": "りょこうの おみやげとして、ほっかいどうの ゆうめいな めいかと バターサンドを こうにゅういたしました。",
                    "translation": "As a souvenir from the trip, I purchased Hokkaido's famous confectionery and butter sandwiches."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本地理・観光文化と伝統的旅館作法（第3部）における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "箱根の伝統的な温泉旅館に宿泊し、四季折々の美しい日本庭園と懐石料理を堪能しました。",
                        "不適切な助詞配置の誤文例（15.3.1）",
                        "時制の不一致を含む文法誤謬（15.3.2）",
                        "敬意レベルが不適当な選択肢（15.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】日本列島の地域区分（北海道から沖縄まで）、温泉（おんせん）と旅館の宿泊作法の習得（第3部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本地理・観光文化と伝統的旅館作法（第3部）の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "温泉に入る前には、必ず洗い場で身体と髪を石鹸で綺麗に洗ってください。",
                        "文脈の接続が不自然な誤答（15.3.x）",
                        "助詞の選択を誤った誤謬例（15.3.y）",
                        "主述の呼応が崩れた不完全文（15.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u15-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "京都の清水寺と金閣寺を巡り、歴史ある街並みを散策いたしました。",
                        "意味の取り違えによる不適切な文（15.3.a）",
                        "不自然な漢語の誤用（15.3.b）",
                        "文末述語の欠落した文（15.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本地理・観光文化と伝統的旅館作法（第3部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試15-3）。",
                    "options": [
                        "旅行のお土産として、北海道の有名な銘菓とバターサンドを購入いたしました。",
                        "助詞の欠落した文法誤文（15.3.m）",
                        "敬語体系の誤用例（15.3.n）",
                        "活用形の接続誤謬（15.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u15-l3）の主要キーワードを入力してください（「箱根の伝」）：",
                    "acceptedAnswers": [
                        "箱根の伝",
                        "箱根の伝統的"
                    ],
                    "explanation": "正解のキーワードは「箱根の伝」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l4": {
        "id": "ja-u15-l4",
        "subject": "japanese",
        "unit": 15,
        "lessonNumber": 4,
        "title": "日本地理・観光文化と伝統的旅館作法（第4部）",
        "level": "B1",
        "objective": "日本列島の地域区分（北海道から沖縄まで）、温泉（おんせん）と旅館の宿泊作法の習得（第4部）。",
        "presentation": {
            "explanation": "第十五単元第4課では、日本列島の地理的多様性（北海道から沖縄まで）および日本の伝統的ホスピタリティを体現する温泉旅館の宿泊作法を学びます。\n\n【温泉旅館の伝統作法と語彙】\n・浴衣（ゆかた）：館内着として着用。左前（左側の布を上に重ねる右前）で帯を締めます。\n・温泉（おんせん）：湯船に入る前に必ず洗い場で身体を洗って流すのが絶対的ルールです。\n・懐石料理（かいせきりょうり）：地域の旬の食材を活かした贅沢な伝統料理。\n・お土産（おみやげ）：旅先の名産品を職場や近隣に配る日本の贈答文化。",
            "examples": [
                {
                    "target": "箱根の伝統的な温泉旅館に宿泊し、四季折々の美しい日本庭園と懐石料理を堪能しました。",
                    "reading": "はこねの でんとうてきな おんせんりょかんに しゅくはくし、しきおりおりの うつくしい にほんていえんと かいせきりょうりを たんのうしました。",
                    "translation": "We stayed at a traditional onsen ryokan in Hakone and thoroughly enjoyed the beautiful Japanese garden across four seasons and kaiseki cuisine."
                },
                {
                    "target": "温泉に入る前には、必ず洗い場で身体と髪を石鹸で綺麗に洗ってください。",
                    "reading": "おんせんに はいるまえには、かならず あらいばで からだと かみを せっけんで きれいに あらって ください。",
                    "translation": "Before entering the hot spring bathtub, please always wash your body and hair thoroughly with soap at the washing area."
                },
                {
                    "target": "京都の清水寺と金閣寺を巡り、歴史ある街並みを散策いたしました。",
                    "reading": "きょうとの きよみずでらと きんかくじを めぐり、れきしある まちなみを さんさくいたしました。",
                    "translation": "We toured Kiyomizu-dera and Kinkaku-ji in Kyoto and strolled through the historic streets."
                },
                {
                    "target": "旅行のお土産として、北海道の有名な銘菓とバターサンドを購入いたしました。",
                    "reading": "りょこうの おみやげとして、ほっかいどうの ゆうめいな めいかと バターサンドを こうにゅういたしました。",
                    "translation": "As a souvenir from the trip, I purchased Hokkaido's famous confectionery and butter sandwiches."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本地理・観光文化と伝統的旅館作法（第4部）における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "箱根の伝統的な温泉旅館に宿泊し、四季折々の美しい日本庭園と懐石料理を堪能しました。",
                        "不適切な助詞配置の誤文例（15.4.1）",
                        "時制の不一致を含む文法誤謬（15.4.2）",
                        "敬意レベルが不適当な選択肢（15.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】日本列島の地域区分（北海道から沖縄まで）、温泉（おんせん）と旅館の宿泊作法の習得（第4部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本地理・観光文化と伝統的旅館作法（第4部）の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "温泉に入る前には、必ず洗い場で身体と髪を石鹸で綺麗に洗ってください。",
                        "文脈の接続が不自然な誤答（15.4.x）",
                        "助詞の選択を誤った誤謬例（15.4.y）",
                        "主述の呼応が崩れた不完全文（15.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u15-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "京都の清水寺と金閣寺を巡り、歴史ある街並みを散策いたしました。",
                        "意味の取り違えによる不適切な文（15.4.a）",
                        "不自然な漢語の誤用（15.4.b）",
                        "文末述語の欠落した文（15.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本地理・観光文化と伝統的旅館作法（第4部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試15-4）。",
                    "options": [
                        "旅行のお土産として、北海道の有名な銘菓とバターサンドを購入いたしました。",
                        "助詞の欠落した文法誤文（15.4.m）",
                        "敬語体系の誤用例（15.4.n）",
                        "活用形の接続誤謬（15.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u15-l4）の主要キーワードを入力してください（「箱根の伝」）：",
                    "acceptedAnswers": [
                        "箱根の伝",
                        "箱根の伝統的"
                    ],
                    "explanation": "正解のキーワードは「箱根の伝」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u15-l5": {
        "id": "ja-u15-l5",
        "subject": "japanese",
        "unit": 15,
        "lessonNumber": 5,
        "title": "日本地理・観光文化と伝統的旅館作法（第5部）",
        "level": "B1",
        "objective": "日本列島の地域区分（北海道から沖縄まで）、温泉（おんせん）と旅館の宿泊作法の習得（第5部）。",
        "presentation": {
            "explanation": "第十五単元第5課では、日本列島の地理的多様性（北海道から沖縄まで）および日本の伝統的ホスピタリティを体現する温泉旅館の宿泊作法を学びます。\n\n【温泉旅館の伝統作法と語彙】\n・浴衣（ゆかた）：館内着として着用。左前（左側の布を上に重ねる右前）で帯を締めます。\n・温泉（おんせん）：湯船に入る前に必ず洗い場で身体を洗って流すのが絶対的ルールです。\n・懐石料理（かいせきりょうり）：地域の旬の食材を活かした贅沢な伝統料理。\n・お土産（おみやげ）：旅先の名産品を職場や近隣に配る日本の贈答文化。",
            "examples": [
                {
                    "target": "箱根の伝統的な温泉旅館に宿泊し、四季折々の美しい日本庭園と懐石料理を堪能しました。",
                    "reading": "はこねの でんとうてきな おんせんりょかんに しゅくはくし、しきおりおりの うつくしい にほんていえんと かいせきりょうりを たんのうしました。",
                    "translation": "We stayed at a traditional onsen ryokan in Hakone and thoroughly enjoyed the beautiful Japanese garden across four seasons and kaiseki cuisine."
                },
                {
                    "target": "温泉に入る前には、必ず洗い場で身体と髪を石鹸で綺麗に洗ってください。",
                    "reading": "おんせんに はいるまえには、かならず あらいばで からだと かみを せっけんで きれいに あらって ください。",
                    "translation": "Before entering the hot spring bathtub, please always wash your body and hair thoroughly with soap at the washing area."
                },
                {
                    "target": "京都の清水寺と金閣寺を巡り、歴史ある街並みを散策いたしました。",
                    "reading": "きょうとの きよみずでらと きんかくじを めぐり、れきしある まちなみを さんさくいたしました。",
                    "translation": "We toured Kiyomizu-dera and Kinkaku-ji in Kyoto and strolled through the historic streets."
                },
                {
                    "target": "旅行のお土産として、北海道の有名な銘菓とバターサンドを購入いたしました。",
                    "reading": "りょこうの おみやげとして、ほっかいどうの ゆうめいな めいかと バターサンドを こうにゅういたしました。",
                    "translation": "As a souvenir from the trip, I purchased Hokkaido's famous confectionery and butter sandwiches."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本地理・観光文化と伝統的旅館作法（第5部）における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "箱根の伝統的な温泉旅館に宿泊し、四季折々の美しい日本庭園と懐石料理を堪能しました。",
                        "不適切な助詞配置の誤文例（15.5.1）",
                        "時制の不一致を含む文法誤謬（15.5.2）",
                        "敬意レベルが不適当な選択肢（15.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】日本列島の地域区分（北海道から沖縄まで）、温泉（おんせん）と旅館の宿泊作法の習得（第5部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本地理・観光文化と伝統的旅館作法（第5部）の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "温泉に入る前には、必ず洗い場で身体と髪を石鹸で綺麗に洗ってください。",
                        "文脈の接続が不自然な誤答（15.5.x）",
                        "助詞の選択を誤った誤謬例（15.5.y）",
                        "主述の呼応が崩れた不完全文（15.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u15-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "京都の清水寺と金閣寺を巡り、歴史ある街並みを散策いたしました。",
                        "意味の取り違えによる不適切な文（15.5.a）",
                        "不自然な漢語の誤用（15.5.b）",
                        "文末述語の欠落した文（15.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本地理・観光文化と伝統的旅館作法（第5部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試15-5）。",
                    "options": [
                        "旅行のお土産として、北海道の有名な銘菓とバターサンドを購入いたしました。",
                        "助詞の欠落した文法誤文（15.5.m）",
                        "敬語体系の誤用例（15.5.n）",
                        "活用形の接続誤謬（15.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u15-l5）の主要キーワードを入力してください（「箱根の伝」）：",
                    "acceptedAnswers": [
                        "箱根の伝",
                        "箱根の伝統的"
                    ],
                    "explanation": "正解のキーワードは「箱根の伝」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l1": {
        "id": "ja-u16-l1",
        "subject": "japanese",
        "unit": 16,
        "lessonNumber": 1,
        "title": "日本語の四大条件表現「たら」「なら」「ば」「と」（第1部）",
        "level": "B1",
        "objective": "仮定条件・確定条件の四大体系（〜たら、〜なら、〜ば、〜と）の文法的制約と使い分けの完全習得（第1部）。",
        "presentation": {
            "explanation": "第十六単元第1課では、日本語文法における四大条件表現の本質的機能と文脈的制約を体系的に学びます。\n\n【四大条件表現の精密な比較】\n１．「〜たら」（汎用仮定・完了後）：仮定条件および「〜した後に」。文末に意志・依頼・命令を自由に配置できます（例：「東京に着いたら、電話してください」）。\n２．「〜なら」（話題の受容・助言）：聞き手が提示した話題を受けて助言や判断を行う（例：「京都へ行くなら、秋の紅葉が一番です」）。\n３．「〜ば」（論理的仮定・法則）：論理的因果関係（例：「安ければ買います」「塵も積もれば山となる」）。\n４．「〜と」（自然の摂理・機械操作）：自動的・不可避の結果（例：「春になると、桜が咲きます」「ボタンを押すと、ドアが開きます」）。",
            "examples": [
                {
                    "target": "春になって暖かくなると、公園の桜が一斉に満開になります。",
                    "reading": "はるになって あたたかくなると、こうえんの さくらが いっせいに まんかいになります。",
                    "translation": "When spring comes and it becomes warm, the cherry blossoms in the park bloom fully all at once."
                },
                {
                    "target": "もし明日の天気が良ければ、山頂までハイキングに行きましょう。",
                    "reading": "もし あしたの てんきが よければ、さんちょうまで ハイキングに いきましょう。",
                    "translation": "If tomorrow's weather is good, let us go hiking to the mountain summit."
                },
                {
                    "target": "日本文化や歴史を深く学びたいなら、京都の古刹を巡ることを強くお勧めいたします。",
                    "reading": "にほんぶんかや れきしを ふかく まなびたいなら、きょうとの こさつを めぐることを つよく お勧めいたします。",
                    "translation": "If you want to study Japanese culture and history deeply, I strongly recommend touring the ancient temples of Kyoto."
                },
                {
                    "target": "成田空港に到着したら、すぐにメッセージを送ってください。",
                    "reading": "なりたくうこうに とうちゃくしたら、すぐに メッセージを おくって ください。",
                    "translation": "Once you arrive at Narita Airport, please send a message immediately."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本語の四大条件表現「たら」「なら」「ば」「と」（第1部）における文脈上最も正確な日本語表現を選択してください（第1問）。",
                    "options": [
                        "春になって暖かくなると、公園の桜が一斉に満開になります。",
                        "不適切な助詞配置の誤文例（16.1.1）",
                        "時制の不一致を含む文法誤謬（16.1.2）",
                        "敬意レベルが不適当な選択肢（16.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】仮定条件・確定条件の四大体系（〜たら、〜なら、〜ば、〜と）の文法的制約と使い分けの完全習得（第1部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本語の四大条件表現「たら」「なら」「ば」「と」（第1部）の実践対話として最も自然な文脈構成を選択してください（演習1）。",
                    "options": [
                        "もし明日の天気が良ければ、山頂までハイキングに行きましょう。",
                        "文脈の接続が不自然な誤答（16.1.x）",
                        "助詞の選択を誤った誤謬例（16.1.y）",
                        "主述の呼応が崩れた不完全文（16.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u16-l1）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "日本文化や歴史を深く学びたいなら、京都の古刹を巡ることを強くお勧めいたします。",
                        "意味の取り違えによる不適切な文（16.1.a）",
                        "不自然な漢語の誤用（16.1.b）",
                        "文末述語の欠落した文（16.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本語の四大条件表現「たら」「なら」「ば」「と」（第1部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試16-1）。",
                    "options": [
                        "成田空港に到着したら、すぐにメッセージを送ってください。",
                        "助詞の欠落した文法誤文（16.1.m）",
                        "敬語体系の誤用例（16.1.n）",
                        "活用形の接続誤謬（16.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u16-l1）の主要キーワードを入力してください（「春になっ」）：",
                    "acceptedAnswers": [
                        "春になっ",
                        "春になって暖"
                    ],
                    "explanation": "正解のキーワードは「春になっ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l2": {
        "id": "ja-u16-l2",
        "subject": "japanese",
        "unit": 16,
        "lessonNumber": 2,
        "title": "日本語の四大条件表現「たら」「なら」「ば」「と」（第2部）",
        "level": "B1",
        "objective": "仮定条件・確定条件の四大体系（〜たら、〜なら、〜ば、〜と）の文法的制約と使い分けの完全習得（第2部）。",
        "presentation": {
            "explanation": "第十六単元第2課では、日本語文法における四大条件表現の本質的機能と文脈的制約を体系的に学びます。\n\n【四大条件表現の精密な比較】\n１．「〜たら」（汎用仮定・完了後）：仮定条件および「〜した後に」。文末に意志・依頼・命令を自由に配置できます（例：「東京に着いたら、電話してください」）。\n２．「〜なら」（話題の受容・助言）：聞き手が提示した話題を受けて助言や判断を行う（例：「京都へ行くなら、秋の紅葉が一番です」）。\n３．「〜ば」（論理的仮定・法則）：論理的因果関係（例：「安ければ買います」「塵も積もれば山となる」）。\n４．「〜と」（自然の摂理・機械操作）：自動的・不可避の結果（例：「春になると、桜が咲きます」「ボタンを押すと、ドアが開きます」）。",
            "examples": [
                {
                    "target": "春になって暖かくなると、公園の桜が一斉に満開になります。",
                    "reading": "はるになって あたたかくなると、こうえんの さくらが いっせいに まんかいになります。",
                    "translation": "When spring comes and it becomes warm, the cherry blossoms in the park bloom fully all at once."
                },
                {
                    "target": "もし明日の天気が良ければ、山頂までハイキングに行きましょう。",
                    "reading": "もし あしたの てんきが よければ、さんちょうまで ハイキングに いきましょう。",
                    "translation": "If tomorrow's weather is good, let us go hiking to the mountain summit."
                },
                {
                    "target": "日本文化や歴史を深く学びたいなら、京都の古刹を巡ることを強くお勧めいたします。",
                    "reading": "にほんぶんかや れきしを ふかく まなびたいなら、きょうとの こさつを めぐることを つよく お勧めいたします。",
                    "translation": "If you want to study Japanese culture and history deeply, I strongly recommend touring the ancient temples of Kyoto."
                },
                {
                    "target": "成田空港に到着したら、すぐにメッセージを送ってください。",
                    "reading": "なりたくうこうに とうちゃくしたら、すぐに メッセージを おくって ください。",
                    "translation": "Once you arrive at Narita Airport, please send a message immediately."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本語の四大条件表現「たら」「なら」「ば」「と」（第2部）における文脈上最も正確な日本語表現を選択してください（第2問）。",
                    "options": [
                        "春になって暖かくなると、公園の桜が一斉に満開になります。",
                        "不適切な助詞配置の誤文例（16.2.1）",
                        "時制の不一致を含む文法誤謬（16.2.2）",
                        "敬意レベルが不適当な選択肢（16.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】仮定条件・確定条件の四大体系（〜たら、〜なら、〜ば、〜と）の文法的制約と使い分けの完全習得（第2部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本語の四大条件表現「たら」「なら」「ば」「と」（第2部）の実践対話として最も自然な文脈構成を選択してください（演習2）。",
                    "options": [
                        "もし明日の天気が良ければ、山頂までハイキングに行きましょう。",
                        "文脈の接続が不自然な誤答（16.2.x）",
                        "助詞の選択を誤った誤謬例（16.2.y）",
                        "主述の呼応が崩れた不完全文（16.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u16-l2）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "日本文化や歴史を深く学びたいなら、京都の古刹を巡ることを強くお勧めいたします。",
                        "意味の取り違えによる不適切な文（16.2.a）",
                        "不自然な漢語の誤用（16.2.b）",
                        "文末述語の欠落した文（16.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本語の四大条件表現「たら」「なら」「ば」「と」（第2部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試16-2）。",
                    "options": [
                        "成田空港に到着したら、すぐにメッセージを送ってください。",
                        "助詞の欠落した文法誤文（16.2.m）",
                        "敬語体系の誤用例（16.2.n）",
                        "活用形の接続誤謬（16.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u16-l2）の主要キーワードを入力してください（「春になっ」）：",
                    "acceptedAnswers": [
                        "春になっ",
                        "春になって暖"
                    ],
                    "explanation": "正解のキーワードは「春になっ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l3": {
        "id": "ja-u16-l3",
        "subject": "japanese",
        "unit": 16,
        "lessonNumber": 3,
        "title": "日本語の四大条件表現「たら」「なら」「ば」「と」（第3部）",
        "level": "B1",
        "objective": "仮定条件・確定条件の四大体系（〜たら、〜なら、〜ば、〜と）の文法的制約と使い分けの完全習得（第3部）。",
        "presentation": {
            "explanation": "第十六単元第3課では、日本語文法における四大条件表現の本質的機能と文脈的制約を体系的に学びます。\n\n【四大条件表現の精密な比較】\n１．「〜たら」（汎用仮定・完了後）：仮定条件および「〜した後に」。文末に意志・依頼・命令を自由に配置できます（例：「東京に着いたら、電話してください」）。\n２．「〜なら」（話題の受容・助言）：聞き手が提示した話題を受けて助言や判断を行う（例：「京都へ行くなら、秋の紅葉が一番です」）。\n３．「〜ば」（論理的仮定・法則）：論理的因果関係（例：「安ければ買います」「塵も積もれば山となる」）。\n４．「〜と」（自然の摂理・機械操作）：自動的・不可避の結果（例：「春になると、桜が咲きます」「ボタンを押すと、ドアが開きます」）。",
            "examples": [
                {
                    "target": "春になって暖かくなると、公園の桜が一斉に満開になります。",
                    "reading": "はるになって あたたかくなると、こうえんの さくらが いっせいに まんかいになります。",
                    "translation": "When spring comes and it becomes warm, the cherry blossoms in the park bloom fully all at once."
                },
                {
                    "target": "もし明日の天気が良ければ、山頂までハイキングに行きましょう。",
                    "reading": "もし あしたの てんきが よければ、さんちょうまで ハイキングに いきましょう。",
                    "translation": "If tomorrow's weather is good, let us go hiking to the mountain summit."
                },
                {
                    "target": "日本文化や歴史を深く学びたいなら、京都の古刹を巡ることを強くお勧めいたします。",
                    "reading": "にほんぶんかや れきしを ふかく まなびたいなら、きょうとの こさつを めぐることを つよく お勧めいたします。",
                    "translation": "If you want to study Japanese culture and history deeply, I strongly recommend touring the ancient temples of Kyoto."
                },
                {
                    "target": "成田空港に到着したら、すぐにメッセージを送ってください。",
                    "reading": "なりたくうこうに とうちゃくしたら、すぐに メッセージを おくって ください。",
                    "translation": "Once you arrive at Narita Airport, please send a message immediately."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本語の四大条件表現「たら」「なら」「ば」「と」（第3部）における文脈上最も正確な日本語表現を選択してください（第3問）。",
                    "options": [
                        "春になって暖かくなると、公園の桜が一斉に満開になります。",
                        "不適切な助詞配置の誤文例（16.3.1）",
                        "時制の不一致を含む文法誤謬（16.3.2）",
                        "敬意レベルが不適当な選択肢（16.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】仮定条件・確定条件の四大体系（〜たら、〜なら、〜ば、〜と）の文法的制約と使い分けの完全習得（第3部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本語の四大条件表現「たら」「なら」「ば」「と」（第3部）の実践対話として最も自然な文脈構成を選択してください（演習3）。",
                    "options": [
                        "もし明日の天気が良ければ、山頂までハイキングに行きましょう。",
                        "文脈の接続が不自然な誤答（16.3.x）",
                        "助詞の選択を誤った誤謬例（16.3.y）",
                        "主述の呼応が崩れた不完全文（16.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u16-l3）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "日本文化や歴史を深く学びたいなら、京都の古刹を巡ることを強くお勧めいたします。",
                        "意味の取り違えによる不適切な文（16.3.a）",
                        "不自然な漢語の誤用（16.3.b）",
                        "文末述語の欠落した文（16.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本語の四大条件表現「たら」「なら」「ば」「と」（第3部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試16-3）。",
                    "options": [
                        "成田空港に到着したら、すぐにメッセージを送ってください。",
                        "助詞の欠落した文法誤文（16.3.m）",
                        "敬語体系の誤用例（16.3.n）",
                        "活用形の接続誤謬（16.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u16-l3）の主要キーワードを入力してください（「春になっ」）：",
                    "acceptedAnswers": [
                        "春になっ",
                        "春になって暖"
                    ],
                    "explanation": "正解のキーワードは「春になっ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l4": {
        "id": "ja-u16-l4",
        "subject": "japanese",
        "unit": 16,
        "lessonNumber": 4,
        "title": "日本語の四大条件表現「たら」「なら」「ば」「と」（第4部）",
        "level": "B1",
        "objective": "仮定条件・確定条件の四大体系（〜たら、〜なら、〜ば、〜と）の文法的制約と使い分けの完全習得（第4部）。",
        "presentation": {
            "explanation": "第十六単元第4課では、日本語文法における四大条件表現の本質的機能と文脈的制約を体系的に学びます。\n\n【四大条件表現の精密な比較】\n１．「〜たら」（汎用仮定・完了後）：仮定条件および「〜した後に」。文末に意志・依頼・命令を自由に配置できます（例：「東京に着いたら、電話してください」）。\n２．「〜なら」（話題の受容・助言）：聞き手が提示した話題を受けて助言や判断を行う（例：「京都へ行くなら、秋の紅葉が一番です」）。\n３．「〜ば」（論理的仮定・法則）：論理的因果関係（例：「安ければ買います」「塵も積もれば山となる」）。\n４．「〜と」（自然の摂理・機械操作）：自動的・不可避の結果（例：「春になると、桜が咲きます」「ボタンを押すと、ドアが開きます」）。",
            "examples": [
                {
                    "target": "春になって暖かくなると、公園の桜が一斉に満開になります。",
                    "reading": "はるになって あたたかくなると、こうえんの さくらが いっせいに まんかいになります。",
                    "translation": "When spring comes and it becomes warm, the cherry blossoms in the park bloom fully all at once."
                },
                {
                    "target": "もし明日の天気が良ければ、山頂までハイキングに行きましょう。",
                    "reading": "もし あしたの てんきが よければ、さんちょうまで ハイキングに いきましょう。",
                    "translation": "If tomorrow's weather is good, let us go hiking to the mountain summit."
                },
                {
                    "target": "日本文化や歴史を深く学びたいなら、京都の古刹を巡ることを強くお勧めいたします。",
                    "reading": "にほんぶんかや れきしを ふかく まなびたいなら、きょうとの こさつを めぐることを つよく お勧めいたします。",
                    "translation": "If you want to study Japanese culture and history deeply, I strongly recommend touring the ancient temples of Kyoto."
                },
                {
                    "target": "成田空港に到着したら、すぐにメッセージを送ってください。",
                    "reading": "なりたくうこうに とうちゃくしたら、すぐに メッセージを おくって ください。",
                    "translation": "Once you arrive at Narita Airport, please send a message immediately."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本語の四大条件表現「たら」「なら」「ば」「と」（第4部）における文脈上最も正確な日本語表現を選択してください（第4問）。",
                    "options": [
                        "春になって暖かくなると、公園の桜が一斉に満開になります。",
                        "不適切な助詞配置の誤文例（16.4.1）",
                        "時制の不一致を含む文法誤謬（16.4.2）",
                        "敬意レベルが不適当な選択肢（16.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】仮定条件・確定条件の四大体系（〜たら、〜なら、〜ば、〜と）の文法的制約と使い分けの完全習得（第4部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本語の四大条件表現「たら」「なら」「ば」「と」（第4部）の実践対話として最も自然な文脈構成を選択してください（演習4）。",
                    "options": [
                        "もし明日の天気が良ければ、山頂までハイキングに行きましょう。",
                        "文脈の接続が不自然な誤答（16.4.x）",
                        "助詞の選択を誤った誤謬例（16.4.y）",
                        "主述の呼応が崩れた不完全文（16.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u16-l4）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "日本文化や歴史を深く学びたいなら、京都の古刹を巡ることを強くお勧めいたします。",
                        "意味の取り違えによる不適切な文（16.4.a）",
                        "不自然な漢語の誤用（16.4.b）",
                        "文末述語の欠落した文（16.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本語の四大条件表現「たら」「なら」「ば」「と」（第4部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試16-4）。",
                    "options": [
                        "成田空港に到着したら、すぐにメッセージを送ってください。",
                        "助詞の欠落した文法誤文（16.4.m）",
                        "敬語体系の誤用例（16.4.n）",
                        "活用形の接続誤謬（16.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u16-l4）の主要キーワードを入力してください（「春になっ」）：",
                    "acceptedAnswers": [
                        "春になっ",
                        "春になって暖"
                    ],
                    "explanation": "正解のキーワードは「春になっ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u16-l5": {
        "id": "ja-u16-l5",
        "subject": "japanese",
        "unit": 16,
        "lessonNumber": 5,
        "title": "日本語の四大条件表現「たら」「なら」「ば」「と」（第5部）",
        "level": "B1",
        "objective": "仮定条件・確定条件の四大体系（〜たら、〜なら、〜ば、〜と）の文法的制約と使い分けの完全習得（第5部）。",
        "presentation": {
            "explanation": "第十六単元第5課では、日本語文法における四大条件表現の本質的機能と文脈的制約を体系的に学びます。\n\n【四大条件表現の精密な比較】\n１．「〜たら」（汎用仮定・完了後）：仮定条件および「〜した後に」。文末に意志・依頼・命令を自由に配置できます（例：「東京に着いたら、電話してください」）。\n２．「〜なら」（話題の受容・助言）：聞き手が提示した話題を受けて助言や判断を行う（例：「京都へ行くなら、秋の紅葉が一番です」）。\n３．「〜ば」（論理的仮定・法則）：論理的因果関係（例：「安ければ買います」「塵も積もれば山となる」）。\n４．「〜と」（自然の摂理・機械操作）：自動的・不可避の結果（例：「春になると、桜が咲きます」「ボタンを押すと、ドアが開きます」）。",
            "examples": [
                {
                    "target": "春になって暖かくなると、公園の桜が一斉に満開になります。",
                    "reading": "はるになって あたたかくなると、こうえんの さくらが いっせいに まんかいになります。",
                    "translation": "When spring comes and it becomes warm, the cherry blossoms in the park bloom fully all at once."
                },
                {
                    "target": "もし明日の天気が良ければ、山頂までハイキングに行きましょう。",
                    "reading": "もし あしたの てんきが よければ、さんちょうまで ハイキングに いきましょう。",
                    "translation": "If tomorrow's weather is good, let us go hiking to the mountain summit."
                },
                {
                    "target": "日本文化や歴史を深く学びたいなら、京都の古刹を巡ることを強くお勧めいたします。",
                    "reading": "にほんぶんかや れきしを ふかく まなびたいなら、きょうとの こさつを めぐることを つよく お勧めいたします。",
                    "translation": "If you want to study Japanese culture and history deeply, I strongly recommend touring the ancient temples of Kyoto."
                },
                {
                    "target": "成田空港に到着したら、すぐにメッセージを送ってください。",
                    "reading": "なりたくうこうに とうちゃくしたら、すぐに メッセージを おくって ください。",
                    "translation": "Once you arrive at Narita Airport, please send a message immediately."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【文法問題】日本語の四大条件表現「たら」「なら」「ば」「と」（第5部）における文脈上最も正確な日本語表現を選択してください（第5問）。",
                    "options": [
                        "春になって暖かくなると、公園の桜が一斉に満開になります。",
                        "不適切な助詞配置の誤文例（16.5.1）",
                        "時制の不一致を含む文法誤謬（16.5.2）",
                        "敬意レベルが不適当な選択肢（16.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正解の選択肢が文法規範および語用論的基準に完全に合致します。"
                },
                {
                    "prompt": "【構文理解】仮定条件・確定条件の四大体系（〜たら、〜なら、〜ば、〜と）の文法的制約と使い分けの完全習得（第5部）。に関する文法的特徴を正確に説明している記述を選択してください。",
                    "options": [
                        "提示された文法規則に厳密に準拠した正当な表現である。",
                        "口語の崩れた俗語表現である。",
                        "文法的に破綻している誤文である。",
                        "古語の廃用表現である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準的な日本語文法規則に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本語の四大条件表現「たら」「なら」「ば」「と」（第5部）の実践対話として最も自然な文脈構成を選択してください（演習5）。",
                    "options": [
                        "もし明日の天気が良ければ、山頂までハイキングに行きましょう。",
                        "文脈の接続が不自然な誤答（16.5.x）",
                        "助詞の選択を誤った誤謬例（16.5.y）",
                        "主述の呼応が崩れた不完全文（16.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文脈および助詞の接続が最も自然で正確です。"
                },
                {
                    "prompt": "【語彙識別】本課（ja-u16-l5）で学習した重要語句の適切な用法を反映する文を選択してください。",
                    "options": [
                        "日本文化や歴史を深く学びたいなら、京都の古刹を巡ることを強くお勧めいたします。",
                        "意味の取り違えによる不適切な文（16.5.a）",
                        "不自然な漢語の誤用（16.5.b）",
                        "文末述語の欠落した文（16.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "語彙の意味および文脈的機能が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本語の四大条件表現「たら」「なら」「ば」「と」（第5部）の学習達成度を判定する問題です。文法的に完全な文を選択してください（試16-5）。",
                    "options": [
                        "成田空港に到着したら、すぐにメッセージを送ってください。",
                        "助詞の欠落した文法誤文（16.5.m）",
                        "敬語体系の誤用例（16.5.n）",
                        "活用形の接続誤謬（16.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "文法・語彙・敬意のすべての観点から完璧な標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u16-l5）の主要キーワードを入力してください（「春になっ」）：",
                    "acceptedAnswers": [
                        "春になっ",
                        "春になって暖"
                    ],
                    "explanation": "正解のキーワードは「春になっ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l1": {
        "id": "ja-u17-l1",
        "subject": "japanese",
        "unit": 17,
        "lessonNumber": 1,
        "title": "受身動詞・ニュース報道と客観的叙述（第1部）",
        "level": "B1",
        "objective": "直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第1部）。",
        "presentation": {
            "explanation": "第十七単元第1課では、日本語の受身文（Passive Voice）の活用構造および新聞・ニュース報道における客観的叙述技法を学びます。\n\n【受身動詞の活用規則】\n１．一類動詞（五段動詞）：語尾の「u段」を「a段」に変化させて「れる」を接続（書く→書かれる、叱る→叱られる）。\n２．二類動詞（一段動詞）：語尾の「る」を取り「られる」を付加（褒める→褒められる、食べる→食べられる）。\n３．三類動詞：する→「される」、来る→「来られる（こられる）」。\n\n【受身文の三類型】\n・直接受身：「受動者は 行為者に 動詞受身形」（例：先生に褒められました）。\n・迷惑の受身（間接受身）：他者の行為により不利益を被った事態（例：雨に降られて濡れました）。\n・客観的報道受身：社会的出来事の中立的報道（例：「法案が国会で可決されました」）。",
            "examples": [
                {
                    "target": "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                    "reading": "きしょうちょうの はっぴょうによりますと、さくやおそくに はっせいした じしんによる つなみの しんぱいは ないと はっぴょうされました。",
                    "translation": "According to the Meteorological Agency's announcement, it was announced that there is no fear of tsunami from the earthquake that occurred late last night."
                },
                {
                    "target": "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                    "reading": "たなかさんは ひごろの すぐれた がくじゅつけんきゅうの せいかが ひょうかされ、がっかいから めいよある しょうを じゅよされました。",
                    "translation": "Mr. Tanaka's regular outstanding academic research results were evaluated, and he was awarded a prestigious prize by the academic society."
                },
                {
                    "target": "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                    "reading": "あめに ふられて たいせつな しょるいが ぬれてしまい、たいへん こまりました。",
                    "translation": "I was rained upon and my important documents got wet, causing me huge distress."
                },
                {
                    "target": "環境保護に関する国際条約が全会一致で締結されました。",
                    "reading": "かんきょうほごに関する こくさいじょうやくが ぜんかいいっちで ていけつされました。",
                    "translation": "The international treaty on environmental protection was concluded unanimously."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】受身動詞・ニュース報道と客観的叙述（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問17.1.1）。",
                    "options": [
                        "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                        "学術的定義を誤った選択肢（17.1.1）",
                        "歴史的事実と合致しない誤文（17.1.2）",
                        "論理的一貫性を欠く記述（17.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】受身動詞・ニュース報道と客観的叙述（第1部）の高度な対話・批評として最も適切な文を選択してください（演習17.1）。",
                    "options": [
                        "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                        "批評的論旨が破綻している文（17.1.x）",
                        "助詞や構文の接続が不自然な誤文（17.1.y）",
                        "不適切な語彙選択を含む誤答（17.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u17-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                        "概念の誤用による不当な解釈（17.1.a）",
                        "主述の不整合を含む不完全文（17.1.b）",
                        "文脈にそぐわない的外れな文（17.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】受身動詞・ニュース報道と客観的叙述（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試17-1）。",
                    "options": [
                        "環境保護に関する国際条約が全会一致で締結されました。",
                        "専門的根拠の欠落した誤文（17.1.m）",
                        "文法的語尾接続の誤謬（17.1.n）",
                        "文意の不明瞭な不適格文（17.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u17-l1）の主要専門用語を入力してください（「気象庁の」）：",
                    "acceptedAnswers": [
                        "気象庁の",
                        "気象庁の発表"
                    ],
                    "explanation": "正解の学術用語は「気象庁の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l2": {
        "id": "ja-u17-l2",
        "subject": "japanese",
        "unit": 17,
        "lessonNumber": 2,
        "title": "受身動詞・ニュース報道と客観的叙述（第2部）",
        "level": "B1",
        "objective": "直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第2部）。",
        "presentation": {
            "explanation": "第十七単元第2課では、日本語の受身文（Passive Voice）の活用構造および新聞・ニュース報道における客観的叙述技法を学びます。\n\n【受身動詞の活用規則】\n１．一類動詞（五段動詞）：語尾の「u段」を「a段」に変化させて「れる」を接続（書く→書かれる、叱る→叱られる）。\n２．二類動詞（一段動詞）：語尾の「る」を取り「られる」を付加（褒める→褒められる、食べる→食べられる）。\n３．三類動詞：する→「される」、来る→「来られる（こられる）」。\n\n【受身文の三類型】\n・直接受身：「受動者は 行為者に 動詞受身形」（例：先生に褒められました）。\n・迷惑の受身（間接受身）：他者の行為により不利益を被った事態（例：雨に降られて濡れました）。\n・客観的報道受身：社会的出来事の中立的報道（例：「法案が国会で可決されました」）。",
            "examples": [
                {
                    "target": "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                    "reading": "きしょうちょうの はっぴょうによりますと、さくやおそくに はっせいした じしんによる つなみの しんぱいは ないと はっぴょうされました。",
                    "translation": "According to the Meteorological Agency's announcement, it was announced that there is no fear of tsunami from the earthquake that occurred late last night."
                },
                {
                    "target": "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                    "reading": "たなかさんは ひごろの すぐれた がくじゅつけんきゅうの せいかが ひょうかされ、がっかいから めいよある しょうを じゅよされました。",
                    "translation": "Mr. Tanaka's regular outstanding academic research results were evaluated, and he was awarded a prestigious prize by the academic society."
                },
                {
                    "target": "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                    "reading": "あめに ふられて たいせつな しょるいが ぬれてしまい、たいへん こまりました。",
                    "translation": "I was rained upon and my important documents got wet, causing me huge distress."
                },
                {
                    "target": "環境保護に関する国際条約が全会一致で締結されました。",
                    "reading": "かんきょうほごに関する こくさいじょうやくが ぜんかいいっちで ていけつされました。",
                    "translation": "The international treaty on environmental protection was concluded unanimously."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】受身動詞・ニュース報道と客観的叙述（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問17.2.1）。",
                    "options": [
                        "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                        "学術的定義を誤った選択肢（17.2.1）",
                        "歴史的事実と合致しない誤文（17.2.2）",
                        "論理的一貫性を欠く記述（17.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】受身動詞・ニュース報道と客観的叙述（第2部）の高度な対話・批評として最も適切な文を選択してください（演習17.2）。",
                    "options": [
                        "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                        "批評的論旨が破綻している文（17.2.x）",
                        "助詞や構文の接続が不自然な誤文（17.2.y）",
                        "不適切な語彙選択を含む誤答（17.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u17-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                        "概念の誤用による不当な解釈（17.2.a）",
                        "主述の不整合を含む不完全文（17.2.b）",
                        "文脈にそぐわない的外れな文（17.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】受身動詞・ニュース報道と客観的叙述（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試17-2）。",
                    "options": [
                        "環境保護に関する国際条約が全会一致で締結されました。",
                        "専門的根拠の欠落した誤文（17.2.m）",
                        "文法的語尾接続の誤謬（17.2.n）",
                        "文意の不明瞭な不適格文（17.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u17-l2）の主要専門用語を入力してください（「気象庁の」）：",
                    "acceptedAnswers": [
                        "気象庁の",
                        "気象庁の発表"
                    ],
                    "explanation": "正解の学術用語は「気象庁の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l3": {
        "id": "ja-u17-l3",
        "subject": "japanese",
        "unit": 17,
        "lessonNumber": 3,
        "title": "受身動詞・ニュース報道と客観的叙述（第3部）",
        "level": "B1",
        "objective": "直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第3部）。",
        "presentation": {
            "explanation": "第十七単元第3課では、日本語の受身文（Passive Voice）の活用構造および新聞・ニュース報道における客観的叙述技法を学びます。\n\n【受身動詞の活用規則】\n１．一類動詞（五段動詞）：語尾の「u段」を「a段」に変化させて「れる」を接続（書く→書かれる、叱る→叱られる）。\n２．二類動詞（一段動詞）：語尾の「る」を取り「られる」を付加（褒める→褒められる、食べる→食べられる）。\n３．三類動詞：する→「される」、来る→「来られる（こられる）」。\n\n【受身文の三類型】\n・直接受身：「受動者は 行為者に 動詞受身形」（例：先生に褒められました）。\n・迷惑の受身（間接受身）：他者の行為により不利益を被った事態（例：雨に降られて濡れました）。\n・客観的報道受身：社会的出来事の中立的報道（例：「法案が国会で可決されました」）。",
            "examples": [
                {
                    "target": "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                    "reading": "きしょうちょうの はっぴょうによりますと、さくやおそくに はっせいした じしんによる つなみの しんぱいは ないと はっぴょうされました。",
                    "translation": "According to the Meteorological Agency's announcement, it was announced that there is no fear of tsunami from the earthquake that occurred late last night."
                },
                {
                    "target": "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                    "reading": "たなかさんは ひごろの すぐれた がくじゅつけんきゅうの せいかが ひょうかされ、がっかいから めいよある しょうを じゅよされました。",
                    "translation": "Mr. Tanaka's regular outstanding academic research results were evaluated, and he was awarded a prestigious prize by the academic society."
                },
                {
                    "target": "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                    "reading": "あめに ふられて たいせつな しょるいが ぬれてしまい、たいへん こまりました。",
                    "translation": "I was rained upon and my important documents got wet, causing me huge distress."
                },
                {
                    "target": "環境保護に関する国際条約が全会一致で締結されました。",
                    "reading": "かんきょうほごに関する こくさいじょうやくが ぜんかいいっちで ていけつされました。",
                    "translation": "The international treaty on environmental protection was concluded unanimously."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】受身動詞・ニュース報道と客観的叙述（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問17.3.1）。",
                    "options": [
                        "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                        "学術的定義を誤った選択肢（17.3.1）",
                        "歴史的事実と合致しない誤文（17.3.2）",
                        "論理的一貫性を欠く記述（17.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】受身動詞・ニュース報道と客観的叙述（第3部）の高度な対話・批評として最も適切な文を選択してください（演習17.3）。",
                    "options": [
                        "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                        "批評的論旨が破綻している文（17.3.x）",
                        "助詞や構文の接続が不自然な誤文（17.3.y）",
                        "不適切な語彙選択を含む誤答（17.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u17-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                        "概念の誤用による不当な解釈（17.3.a）",
                        "主述の不整合を含む不完全文（17.3.b）",
                        "文脈にそぐわない的外れな文（17.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】受身動詞・ニュース報道と客観的叙述（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試17-3）。",
                    "options": [
                        "環境保護に関する国際条約が全会一致で締結されました。",
                        "専門的根拠の欠落した誤文（17.3.m）",
                        "文法的語尾接続の誤謬（17.3.n）",
                        "文意の不明瞭な不適格文（17.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u17-l3）の主要専門用語を入力してください（「気象庁の」）：",
                    "acceptedAnswers": [
                        "気象庁の",
                        "気象庁の発表"
                    ],
                    "explanation": "正解の学術用語は「気象庁の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l4": {
        "id": "ja-u17-l4",
        "subject": "japanese",
        "unit": 17,
        "lessonNumber": 4,
        "title": "受身動詞・ニュース報道と客観的叙述（第4部）",
        "level": "B1",
        "objective": "直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第4部）。",
        "presentation": {
            "explanation": "第十七単元第4課では、日本語の受身文（Passive Voice）の活用構造および新聞・ニュース報道における客観的叙述技法を学びます。\n\n【受身動詞の活用規則】\n１．一類動詞（五段動詞）：語尾の「u段」を「a段」に変化させて「れる」を接続（書く→書かれる、叱る→叱られる）。\n２．二類動詞（一段動詞）：語尾の「る」を取り「られる」を付加（褒める→褒められる、食べる→食べられる）。\n３．三類動詞：する→「される」、来る→「来られる（こられる）」。\n\n【受身文の三類型】\n・直接受身：「受動者は 行為者に 動詞受身形」（例：先生に褒められました）。\n・迷惑の受身（間接受身）：他者の行為により不利益を被った事態（例：雨に降られて濡れました）。\n・客観的報道受身：社会的出来事の中立的報道（例：「法案が国会で可決されました」）。",
            "examples": [
                {
                    "target": "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                    "reading": "きしょうちょうの はっぴょうによりますと、さくやおそくに はっせいした じしんによる つなみの しんぱいは ないと はっぴょうされました。",
                    "translation": "According to the Meteorological Agency's announcement, it was announced that there is no fear of tsunami from the earthquake that occurred late last night."
                },
                {
                    "target": "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                    "reading": "たなかさんは ひごろの すぐれた がくじゅつけんきゅうの せいかが ひょうかされ、がっかいから めいよある しょうを じゅよされました。",
                    "translation": "Mr. Tanaka's regular outstanding academic research results were evaluated, and he was awarded a prestigious prize by the academic society."
                },
                {
                    "target": "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                    "reading": "あめに ふられて たいせつな しょるいが ぬれてしまい、たいへん こまりました。",
                    "translation": "I was rained upon and my important documents got wet, causing me huge distress."
                },
                {
                    "target": "環境保護に関する国際条約が全会一致で締結されました。",
                    "reading": "かんきょうほごに関する こくさいじょうやくが ぜんかいいっちで ていけつされました。",
                    "translation": "The international treaty on environmental protection was concluded unanimously."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】受身動詞・ニュース報道と客観的叙述（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問17.4.1）。",
                    "options": [
                        "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                        "学術的定義を誤った選択肢（17.4.1）",
                        "歴史的事実と合致しない誤文（17.4.2）",
                        "論理的一貫性を欠く記述（17.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】受身動詞・ニュース報道と客観的叙述（第4部）の高度な対話・批評として最も適切な文を選択してください（演習17.4）。",
                    "options": [
                        "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                        "批評的論旨が破綻している文（17.4.x）",
                        "助詞や構文の接続が不自然な誤文（17.4.y）",
                        "不適切な語彙選択を含む誤答（17.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u17-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                        "概念の誤用による不当な解釈（17.4.a）",
                        "主述の不整合を含む不完全文（17.4.b）",
                        "文脈にそぐわない的外れな文（17.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】受身動詞・ニュース報道と客観的叙述（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試17-4）。",
                    "options": [
                        "環境保護に関する国際条約が全会一致で締結されました。",
                        "専門的根拠の欠落した誤文（17.4.m）",
                        "文法的語尾接続の誤謬（17.4.n）",
                        "文意の不明瞭な不適格文（17.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u17-l4）の主要専門用語を入力してください（「気象庁の」）：",
                    "acceptedAnswers": [
                        "気象庁の",
                        "気象庁の発表"
                    ],
                    "explanation": "正解の学術用語は「気象庁の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u17-l5": {
        "id": "ja-u17-l5",
        "subject": "japanese",
        "unit": 17,
        "lessonNumber": 5,
        "title": "受身動詞・ニュース報道と客観的叙述（第5部）",
        "level": "B1",
        "objective": "直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第5部）。",
        "presentation": {
            "explanation": "第十七単元第5課では、日本語の受身文（Passive Voice）の活用構造および新聞・ニュース報道における客観的叙述技法を学びます。\n\n【受身動詞の活用規則】\n１．一類動詞（五段動詞）：語尾の「u段」を「a段」に変化させて「れる」を接続（書く→書かれる、叱る→叱られる）。\n２．二類動詞（一段動詞）：語尾の「る」を取り「られる」を付加（褒める→褒められる、食べる→食べられる）。\n３．三類動詞：する→「される」、来る→「来られる（こられる）」。\n\n【受身文の三類型】\n・直接受身：「受動者は 行為者に 動詞受身形」（例：先生に褒められました）。\n・迷惑の受身（間接受身）：他者の行為により不利益を被った事態（例：雨に降られて濡れました）。\n・客観的報道受身：社会的出来事の中立的報道（例：「法案が国会で可決されました」）。",
            "examples": [
                {
                    "target": "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                    "reading": "きしょうちょうの はっぴょうによりますと、さくやおそくに はっせいした じしんによる つなみの しんぱいは ないと はっぴょうされました。",
                    "translation": "According to the Meteorological Agency's announcement, it was announced that there is no fear of tsunami from the earthquake that occurred late last night."
                },
                {
                    "target": "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                    "reading": "たなかさんは ひごろの すぐれた がくじゅつけんきゅうの せいかが ひょうかされ、がっかいから めいよある しょうを じゅよされました。",
                    "translation": "Mr. Tanaka's regular outstanding academic research results were evaluated, and he was awarded a prestigious prize by the academic society."
                },
                {
                    "target": "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                    "reading": "あめに ふられて たいせつな しょるいが ぬれてしまい、たいへん こまりました。",
                    "translation": "I was rained upon and my important documents got wet, causing me huge distress."
                },
                {
                    "target": "環境保護に関する国際条約が全会一致で締結されました。",
                    "reading": "かんきょうほごに関する こくさいじょうやくが ぜんかいいっちで ていけつされました。",
                    "translation": "The international treaty on environmental protection was concluded unanimously."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】受身動詞・ニュース報道と客観的叙述（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問17.5.1）。",
                    "options": [
                        "気象庁の発表によりますと、昨夜遅くに発生した地震による津波の心配はないと発表されました。",
                        "学術的定義を誤った選択肢（17.5.1）",
                        "歴史的事実と合致しない誤文（17.5.2）",
                        "論理的一貫性を欠く記述（17.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】直接受身、迷惑の受身（間接受身）、報道における客観的受身（〜とされている・発表された）の完全習得（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】受身動詞・ニュース報道と客観的叙述（第5部）の高度な対話・批評として最も適切な文を選択してください（演習17.5）。",
                    "options": [
                        "田中さんは日頃の優れた学術研究の成果が評価され、学会から名誉ある賞を授与されました。",
                        "批評的論旨が破綻している文（17.5.x）",
                        "助詞や構文の接続が不自然な誤文（17.5.y）",
                        "不適切な語彙選択を含む誤答（17.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u17-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "雨に降られて大切な書類が濡れてしまい、大変困りました。",
                        "概念の誤用による不当な解釈（17.5.a）",
                        "主述の不整合を含む不完全文（17.5.b）",
                        "文脈にそぐわない的外れな文（17.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】受身動詞・ニュース報道と客観的叙述（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試17-5）。",
                    "options": [
                        "環境保護に関する国際条約が全会一致で締結されました。",
                        "専門的根拠の欠落した誤文（17.5.m）",
                        "文法的語尾接続の誤謬（17.5.n）",
                        "文意の不明瞭な不適格文（17.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u17-l5）の主要専門用語を入力してください（「気象庁の」）：",
                    "acceptedAnswers": [
                        "気象庁の",
                        "気象庁の発表"
                    ],
                    "explanation": "正解の学術用語は「気象庁の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l1": {
        "id": "ja-u18-l1",
        "subject": "japanese",
        "unit": 18,
        "lessonNumber": 1,
        "title": "使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第1部）",
        "level": "B1",
        "objective": "使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第1部）。",
        "presentation": {
            "explanation": "第十八単元第1課では、他者に特定の行動を行わせる「使役構文」と、行為の恩恵の授受を表す日本語の人間関係文法を学びます。\n\n【使役動詞の活用規則】\n１．一類動詞：語尾の「u段」を「a段」に変化させて「せる」を接続（書く→書かせる、読む→読ませる）。\n２．二類動詞：語尾の「る」を取り「させる」を付加（食べる→食べさせる、見る→見させる）。\n３．三類動詞：する→「させる」、来る→「来させる（こさせる）」。\n\n【授受動詞と謙譲使役】\n・「〜てあげる」（自分が他者に親切を行う）\n・「〜てくれる」（他者が自分に親切を行ってくれる）\n・「〜てもらう」（他者に依頼して恩恵を受ける）\n・「〜させていただきます」（丁寧な自己行動の宣言）",
            "examples": [
                {
                    "target": "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                    "reading": "ほんじつの けんきゅうはっぴょうは、わたくし、けいざいがくぶ よねんの なかむらが たんとうさせていただきます。",
                    "translation": "Allow me, Nakamura, a 4th-year student in the Faculty of Economics, to handle today's research presentation."
                },
                {
                    "target": "先生は留学生に日本の古典文学の朗読を練習させました。",
                    "reading": "せんせいは りゅうがくせいに にほんの こてんぶんがくの ろうどくを れんしゅうさせました。",
                    "translation": "The teacher made the international students practice reading classical Japanese literature aloud."
                },
                {
                    "target": "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                    "reading": "しんせつな えきいんさんが もくてきちまでの のりかえろせんを ていねいに おしえて くれました。",
                    "translation": "A kind station staff member politely explained the transfer routes to my destination for me."
                },
                {
                    "target": "指導教授に論文のドラフトを細かく添削していただきました。",
                    "reading": "しどうきょうじゅに ろんぶんの ドラフトを こまかく てんさくして いただきました。",
                    "translation": "I received the favor of my academic advisor correcting my thesis draft in detail."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問18.1.1）。",
                    "options": [
                        "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                        "学術的定義を誤った選択肢（18.1.1）",
                        "歴史的事実と合致しない誤文（18.1.2）",
                        "論理的一貫性を欠く記述（18.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第1部）の高度な対話・批評として最も適切な文を選択してください（演習18.1）。",
                    "options": [
                        "先生は留学生に日本の古典文学の朗読を練習させました。",
                        "批評的論旨が破綻している文（18.1.x）",
                        "助詞や構文の接続が不自然な誤文（18.1.y）",
                        "不適切な語彙選択を含む誤答（18.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u18-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                        "概念の誤用による不当な解釈（18.1.a）",
                        "主述の不整合を含む不完全文（18.1.b）",
                        "文脈にそぐわない的外れな文（18.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試18-1）。",
                    "options": [
                        "指導教授に論文のドラフトを細かく添削していただきました。",
                        "専門的根拠の欠落した誤文（18.1.m）",
                        "文法的語尾接続の誤謬（18.1.n）",
                        "文意の不明瞭な不適格文（18.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u18-l1）の主要専門用語を入力してください（「本日の研」）：",
                    "acceptedAnswers": [
                        "本日の研",
                        "本日の研究発"
                    ],
                    "explanation": "正解の学術用語は「本日の研」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l2": {
        "id": "ja-u18-l2",
        "subject": "japanese",
        "unit": 18,
        "lessonNumber": 2,
        "title": "使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第2部）",
        "level": "B1",
        "objective": "使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第2部）。",
        "presentation": {
            "explanation": "第十八単元第2課では、他者に特定の行動を行わせる「使役構文」と、行為の恩恵の授受を表す日本語の人間関係文法を学びます。\n\n【使役動詞の活用規則】\n１．一類動詞：語尾の「u段」を「a段」に変化させて「せる」を接続（書く→書かせる、読む→読ませる）。\n２．二類動詞：語尾の「る」を取り「させる」を付加（食べる→食べさせる、見る→見させる）。\n３．三類動詞：する→「させる」、来る→「来させる（こさせる）」。\n\n【授受動詞と謙譲使役】\n・「〜てあげる」（自分が他者に親切を行う）\n・「〜てくれる」（他者が自分に親切を行ってくれる）\n・「〜てもらう」（他者に依頼して恩恵を受ける）\n・「〜させていただきます」（丁寧な自己行動の宣言）",
            "examples": [
                {
                    "target": "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                    "reading": "ほんじつの けんきゅうはっぴょうは、わたくし、けいざいがくぶ よねんの なかむらが たんとうさせていただきます。",
                    "translation": "Allow me, Nakamura, a 4th-year student in the Faculty of Economics, to handle today's research presentation."
                },
                {
                    "target": "先生は留学生に日本の古典文学の朗読を練習させました。",
                    "reading": "せんせいは りゅうがくせいに にほんの こてんぶんがくの ろうどくを れんしゅうさせました。",
                    "translation": "The teacher made the international students practice reading classical Japanese literature aloud."
                },
                {
                    "target": "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                    "reading": "しんせつな えきいんさんが もくてきちまでの のりかえろせんを ていねいに おしえて くれました。",
                    "translation": "A kind station staff member politely explained the transfer routes to my destination for me."
                },
                {
                    "target": "指導教授に論文のドラフトを細かく添削していただきました。",
                    "reading": "しどうきょうじゅに ろんぶんの ドラフトを こまかく てんさくして いただきました。",
                    "translation": "I received the favor of my academic advisor correcting my thesis draft in detail."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問18.2.1）。",
                    "options": [
                        "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                        "学術的定義を誤った選択肢（18.2.1）",
                        "歴史的事実と合致しない誤文（18.2.2）",
                        "論理的一貫性を欠く記述（18.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第2部）の高度な対話・批評として最も適切な文を選択してください（演習18.2）。",
                    "options": [
                        "先生は留学生に日本の古典文学の朗読を練習させました。",
                        "批評的論旨が破綻している文（18.2.x）",
                        "助詞や構文の接続が不自然な誤文（18.2.y）",
                        "不適切な語彙選択を含む誤答（18.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u18-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                        "概念の誤用による不当な解釈（18.2.a）",
                        "主述の不整合を含む不完全文（18.2.b）",
                        "文脈にそぐわない的外れな文（18.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試18-2）。",
                    "options": [
                        "指導教授に論文のドラフトを細かく添削していただきました。",
                        "専門的根拠の欠落した誤文（18.2.m）",
                        "文法的語尾接続の誤謬（18.2.n）",
                        "文意の不明瞭な不適格文（18.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u18-l2）の主要専門用語を入力してください（「本日の研」）：",
                    "acceptedAnswers": [
                        "本日の研",
                        "本日の研究発"
                    ],
                    "explanation": "正解の学術用語は「本日の研」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l3": {
        "id": "ja-u18-l3",
        "subject": "japanese",
        "unit": 18,
        "lessonNumber": 3,
        "title": "使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第3部）",
        "level": "B1",
        "objective": "使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第3部）。",
        "presentation": {
            "explanation": "第十八単元第3課では、他者に特定の行動を行わせる「使役構文」と、行為の恩恵の授受を表す日本語の人間関係文法を学びます。\n\n【使役動詞の活用規則】\n１．一類動詞：語尾の「u段」を「a段」に変化させて「せる」を接続（書く→書かせる、読む→読ませる）。\n２．二類動詞：語尾の「る」を取り「させる」を付加（食べる→食べさせる、見る→見させる）。\n３．三類動詞：する→「させる」、来る→「来させる（こさせる）」。\n\n【授受動詞と謙譲使役】\n・「〜てあげる」（自分が他者に親切を行う）\n・「〜てくれる」（他者が自分に親切を行ってくれる）\n・「〜てもらう」（他者に依頼して恩恵を受ける）\n・「〜させていただきます」（丁寧な自己行動の宣言）",
            "examples": [
                {
                    "target": "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                    "reading": "ほんじつの けんきゅうはっぴょうは、わたくし、けいざいがくぶ よねんの なかむらが たんとうさせていただきます。",
                    "translation": "Allow me, Nakamura, a 4th-year student in the Faculty of Economics, to handle today's research presentation."
                },
                {
                    "target": "先生は留学生に日本の古典文学の朗読を練習させました。",
                    "reading": "せんせいは りゅうがくせいに にほんの こてんぶんがくの ろうどくを れんしゅうさせました。",
                    "translation": "The teacher made the international students practice reading classical Japanese literature aloud."
                },
                {
                    "target": "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                    "reading": "しんせつな えきいんさんが もくてきちまでの のりかえろせんを ていねいに おしえて くれました。",
                    "translation": "A kind station staff member politely explained the transfer routes to my destination for me."
                },
                {
                    "target": "指導教授に論文のドラフトを細かく添削していただきました。",
                    "reading": "しどうきょうじゅに ろんぶんの ドラフトを こまかく てんさくして いただきました。",
                    "translation": "I received the favor of my academic advisor correcting my thesis draft in detail."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問18.3.1）。",
                    "options": [
                        "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                        "学術的定義を誤った選択肢（18.3.1）",
                        "歴史的事実と合致しない誤文（18.3.2）",
                        "論理的一貫性を欠く記述（18.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第3部）の高度な対話・批評として最も適切な文を選択してください（演習18.3）。",
                    "options": [
                        "先生は留学生に日本の古典文学の朗読を練習させました。",
                        "批評的論旨が破綻している文（18.3.x）",
                        "助詞や構文の接続が不自然な誤文（18.3.y）",
                        "不適切な語彙選択を含む誤答（18.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u18-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                        "概念の誤用による不当な解釈（18.3.a）",
                        "主述の不整合を含む不完全文（18.3.b）",
                        "文脈にそぐわない的外れな文（18.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試18-3）。",
                    "options": [
                        "指導教授に論文のドラフトを細かく添削していただきました。",
                        "専門的根拠の欠落した誤文（18.3.m）",
                        "文法的語尾接続の誤謬（18.3.n）",
                        "文意の不明瞭な不適格文（18.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u18-l3）の主要専門用語を入力してください（「本日の研」）：",
                    "acceptedAnswers": [
                        "本日の研",
                        "本日の研究発"
                    ],
                    "explanation": "正解の学術用語は「本日の研」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l4": {
        "id": "ja-u18-l4",
        "subject": "japanese",
        "unit": 18,
        "lessonNumber": 4,
        "title": "使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第4部）",
        "level": "B1",
        "objective": "使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第4部）。",
        "presentation": {
            "explanation": "第十八単元第4課では、他者に特定の行動を行わせる「使役構文」と、行為の恩恵の授受を表す日本語の人間関係文法を学びます。\n\n【使役動詞の活用規則】\n１．一類動詞：語尾の「u段」を「a段」に変化させて「せる」を接続（書く→書かせる、読む→読ませる）。\n２．二類動詞：語尾の「る」を取り「させる」を付加（食べる→食べさせる、見る→見させる）。\n３．三類動詞：する→「させる」、来る→「来させる（こさせる）」。\n\n【授受動詞と謙譲使役】\n・「〜てあげる」（自分が他者に親切を行う）\n・「〜てくれる」（他者が自分に親切を行ってくれる）\n・「〜てもらう」（他者に依頼して恩恵を受ける）\n・「〜させていただきます」（丁寧な自己行動の宣言）",
            "examples": [
                {
                    "target": "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                    "reading": "ほんじつの けんきゅうはっぴょうは、わたくし、けいざいがくぶ よねんの なかむらが たんとうさせていただきます。",
                    "translation": "Allow me, Nakamura, a 4th-year student in the Faculty of Economics, to handle today's research presentation."
                },
                {
                    "target": "先生は留学生に日本の古典文学の朗読を練習させました。",
                    "reading": "せんせいは りゅうがくせいに にほんの こてんぶんがくの ろうどくを れんしゅうさせました。",
                    "translation": "The teacher made the international students practice reading classical Japanese literature aloud."
                },
                {
                    "target": "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                    "reading": "しんせつな えきいんさんが もくてきちまでの のりかえろせんを ていねいに おしえて くれました。",
                    "translation": "A kind station staff member politely explained the transfer routes to my destination for me."
                },
                {
                    "target": "指導教授に論文のドラフトを細かく添削していただきました。",
                    "reading": "しどうきょうじゅに ろんぶんの ドラフトを こまかく てんさくして いただきました。",
                    "translation": "I received the favor of my academic advisor correcting my thesis draft in detail."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問18.4.1）。",
                    "options": [
                        "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                        "学術的定義を誤った選択肢（18.4.1）",
                        "歴史的事実と合致しない誤文（18.4.2）",
                        "論理的一貫性を欠く記述（18.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第4部）の高度な対話・批評として最も適切な文を選択してください（演習18.4）。",
                    "options": [
                        "先生は留学生に日本の古典文学の朗読を練習させました。",
                        "批評的論旨が破綻している文（18.4.x）",
                        "助詞や構文の接続が不自然な誤文（18.4.y）",
                        "不適切な語彙選択を含む誤答（18.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u18-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                        "概念の誤用による不当な解釈（18.4.a）",
                        "主述の不整合を含む不完全文（18.4.b）",
                        "文脈にそぐわない的外れな文（18.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試18-4）。",
                    "options": [
                        "指導教授に論文のドラフトを細かく添削していただきました。",
                        "専門的根拠の欠落した誤文（18.4.m）",
                        "文法的語尾接続の誤謬（18.4.n）",
                        "文意の不明瞭な不適格文（18.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u18-l4）の主要専門用語を入力してください（「本日の研」）：",
                    "acceptedAnswers": [
                        "本日の研",
                        "本日の研究発"
                    ],
                    "explanation": "正解の学術用語は「本日の研」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u18-l5": {
        "id": "ja-u18-l5",
        "subject": "japanese",
        "unit": 18,
        "lessonNumber": 5,
        "title": "使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第5部）",
        "level": "B1",
        "objective": "使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第5部）。",
        "presentation": {
            "explanation": "第十八単元第5課では、他者に特定の行動を行わせる「使役構文」と、行為の恩恵の授受を表す日本語の人間関係文法を学びます。\n\n【使役動詞の活用規則】\n１．一類動詞：語尾の「u段」を「a段」に変化させて「せる」を接続（書く→書かせる、読む→読ませる）。\n２．二類動詞：語尾の「る」を取り「させる」を付加（食べる→食べさせる、見る→見させる）。\n３．三類動詞：する→「させる」、来る→「来させる（こさせる）」。\n\n【授受動詞と謙譲使役】\n・「〜てあげる」（自分が他者に親切を行う）\n・「〜てくれる」（他者が自分に親切を行ってくれる）\n・「〜てもらう」（他者に依頼して恩恵を受ける）\n・「〜させていただきます」（丁寧な自己行動の宣言）",
            "examples": [
                {
                    "target": "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                    "reading": "ほんじつの けんきゅうはっぴょうは、わたくし、けいざいがくぶ よねんの なかむらが たんとうさせていただきます。",
                    "translation": "Allow me, Nakamura, a 4th-year student in the Faculty of Economics, to handle today's research presentation."
                },
                {
                    "target": "先生は留学生に日本の古典文学の朗読を練習させました。",
                    "reading": "せんせいは りゅうがくせいに にほんの こてんぶんがくの ろうどくを れんしゅうさせました。",
                    "translation": "The teacher made the international students practice reading classical Japanese literature aloud."
                },
                {
                    "target": "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                    "reading": "しんせつな えきいんさんが もくてきちまでの のりかえろせんを ていねいに おしえて くれました。",
                    "translation": "A kind station staff member politely explained the transfer routes to my destination for me."
                },
                {
                    "target": "指導教授に論文のドラフトを細かく添削していただきました。",
                    "reading": "しどうきょうじゅに ろんぶんの ドラフトを こまかく てんさくして いただきました。",
                    "translation": "I received the favor of my academic advisor correcting my thesis draft in detail."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問18.5.1）。",
                    "options": [
                        "本日の研究発表は、私、経済学部四年の中村が担当させていただきます。",
                        "学術的定義を誤った選択肢（18.5.1）",
                        "歴史的事実と合致しない誤文（18.5.2）",
                        "論理的一貫性を欠く記述（18.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役動詞（強制・許可・誘発）、恩恵の授受動詞（〜てあげる・〜てくれる・〜てもらう）、使役受領「〜させていただきます」の習得（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第5部）の高度な対話・批評として最も適切な文を選択してください（演習18.5）。",
                    "options": [
                        "先生は留学生に日本の古典文学の朗読を練習させました。",
                        "批評的論旨が破綻している文（18.5.x）",
                        "助詞や構文の接続が不自然な誤文（18.5.y）",
                        "不適切な語彙選択を含む誤答（18.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u18-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "親切な駅員さんが目的地までの乗り換え路線を丁寧に教えてくれました。",
                        "概念の誤用による不当な解釈（18.5.a）",
                        "主述の不整合を含む不完全文（18.5.b）",
                        "文脈にそぐわない的外れな文（18.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役表現「〜させる」と授受動詞「あげる・くれる・もらう」（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試18-5）。",
                    "options": [
                        "指導教授に論文のドラフトを細かく添削していただきました。",
                        "専門的根拠の欠落した誤文（18.5.m）",
                        "文法的語尾接続の誤謬（18.5.n）",
                        "文意の不明瞭な不適格文（18.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u18-l5）の主要専門用語を入力してください（「本日の研」）：",
                    "acceptedAnswers": [
                        "本日の研",
                        "本日の研究発"
                    ],
                    "explanation": "正解の学術用語は「本日の研」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l1": {
        "id": "ja-u19-l1",
        "subject": "japanese",
        "unit": 19,
        "lessonNumber": 1,
        "title": "使役受身「〜させられる」と論理的議論・ディベート（第1部）",
        "level": "B2",
        "objective": "使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第1部）。",
        "presentation": {
            "explanation": "第十九単元第1課では、自己の意志に反して行動を強いられたり、深く心を動かされたりする心理的事態を表す「使役受身構文」と、論理的な討議の談話標識を学びます。\n\n【使役受身の活用規則】\n・一類動詞：語尾「a段」＋「せられる（短縮形：〜される）」（書く→書かされる、待つ→待たされる）。\n・二類動詞：語尾「る」→「させられる」（食べる→食べさせられる）。\n・三類動詞：する→「させられる」、来る→「来させられる」。\n\n【使役受身の機能】\n・強制・義務：上司に残業させられました。\n・心情の誘発（内省）：深く考えさせられました。\n\n【論理的議論の表現】\n・〜に対して、〜によって、〜の観点から、〜と言わざるを得ません。",
            "examples": [
                {
                    "target": "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                    "reading": "かんきょうはかいの げんじょうと きこうへんどうに関する ドキュメンタリーをみて、わたしたちは ちきゅうの みらいについて ふかく かんがえさせられました。",
                    "translation": "Watching the documentary on the current state of environmental destruction and climate change, we were deeply made to contemplate the future of our planet."
                },
                {
                    "target": "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                    "reading": "けいざいはってんの ついきゅうに たいして、せいたいけいの ほぜんを いかに りょうりつさせるかという かんてんから ぎろんを ふかめる ひつようが あります。",
                    "translation": "There is a need to deepen discussions from the perspective of how to reconcile the preservation of ecosystems against the pursuit of economic growth."
                },
                {
                    "target": "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                    "reading": "きゅうな じんいんぶそくにより、きゅうじつにも かかわらず きんきゅうの げんばたいおうを させられました。",
                    "translation": "Due to a sudden personnel shortage, I was made to handle emergency on-site response despite it being a day off."
                },
                {
                    "target": "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                    "reading": "たかくてきな してんから データを けんしょうした けっか、こんかいの せいさくは こうかてきであったと けつろんづけざるを えません。",
                    "translation": "As a result of verifying data from multifaceted perspectives, we cannot help but conclude that the current policy was effective."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役受身「〜させられる」と論理的議論・ディベート（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問19.1.1）。",
                    "options": [
                        "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                        "学術的定義を誤った選択肢（19.1.1）",
                        "歴史的事実と合致しない誤文（19.1.2）",
                        "論理的一貫性を欠く記述（19.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役受身「〜させられる」と論理的議論・ディベート（第1部）の高度な対話・批評として最も適切な文を選択してください（演習19.1）。",
                    "options": [
                        "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                        "批評的論旨が破綻している文（19.1.x）",
                        "助詞や構文の接続が不自然な誤文（19.1.y）",
                        "不適切な語彙選択を含む誤答（19.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u19-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                        "概念の誤用による不当な解釈（19.1.a）",
                        "主述の不整合を含む不完全文（19.1.b）",
                        "文脈にそぐわない的外れな文（19.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役受身「〜させられる」と論理的議論・ディベート（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試19-1）。",
                    "options": [
                        "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                        "専門的根拠の欠落した誤文（19.1.m）",
                        "文法的語尾接続の誤謬（19.1.n）",
                        "文意の不明瞭な不適格文（19.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u19-l1）の主要専門用語を入力してください（「環境破壊」）：",
                    "acceptedAnswers": [
                        "環境破壊",
                        "環境破壊の現"
                    ],
                    "explanation": "正解の学術用語は「環境破壊」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l2": {
        "id": "ja-u19-l2",
        "subject": "japanese",
        "unit": 19,
        "lessonNumber": 2,
        "title": "使役受身「〜させられる」と論理的議論・ディベート（第2部）",
        "level": "B2",
        "objective": "使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第2部）。",
        "presentation": {
            "explanation": "第十九単元第2課では、自己の意志に反して行動を強いられたり、深く心を動かされたりする心理的事態を表す「使役受身構文」と、論理的な討議の談話標識を学びます。\n\n【使役受身の活用規則】\n・一類動詞：語尾「a段」＋「せられる（短縮形：〜される）」（書く→書かされる、待つ→待たされる）。\n・二類動詞：語尾「る」→「させられる」（食べる→食べさせられる）。\n・三類動詞：する→「させられる」、来る→「来させられる」。\n\n【使役受身の機能】\n・強制・義務：上司に残業させられました。\n・心情の誘発（内省）：深く考えさせられました。\n\n【論理的議論の表現】\n・〜に対して、〜によって、〜の観点から、〜と言わざるを得ません。",
            "examples": [
                {
                    "target": "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                    "reading": "かんきょうはかいの げんじょうと きこうへんどうに関する ドキュメンタリーをみて、わたしたちは ちきゅうの みらいについて ふかく かんがえさせられました。",
                    "translation": "Watching the documentary on the current state of environmental destruction and climate change, we were deeply made to contemplate the future of our planet."
                },
                {
                    "target": "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                    "reading": "けいざいはってんの ついきゅうに たいして、せいたいけいの ほぜんを いかに りょうりつさせるかという かんてんから ぎろんを ふかめる ひつようが あります。",
                    "translation": "There is a need to deepen discussions from the perspective of how to reconcile the preservation of ecosystems against the pursuit of economic growth."
                },
                {
                    "target": "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                    "reading": "きゅうな じんいんぶそくにより、きゅうじつにも かかわらず きんきゅうの げんばたいおうを させられました。",
                    "translation": "Due to a sudden personnel shortage, I was made to handle emergency on-site response despite it being a day off."
                },
                {
                    "target": "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                    "reading": "たかくてきな してんから データを けんしょうした けっか、こんかいの せいさくは こうかてきであったと けつろんづけざるを えません。",
                    "translation": "As a result of verifying data from multifaceted perspectives, we cannot help but conclude that the current policy was effective."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役受身「〜させられる」と論理的議論・ディベート（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問19.2.1）。",
                    "options": [
                        "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                        "学術的定義を誤った選択肢（19.2.1）",
                        "歴史的事実と合致しない誤文（19.2.2）",
                        "論理的一貫性を欠く記述（19.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役受身「〜させられる」と論理的議論・ディベート（第2部）の高度な対話・批評として最も適切な文を選択してください（演習19.2）。",
                    "options": [
                        "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                        "批評的論旨が破綻している文（19.2.x）",
                        "助詞や構文の接続が不自然な誤文（19.2.y）",
                        "不適切な語彙選択を含む誤答（19.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u19-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                        "概念の誤用による不当な解釈（19.2.a）",
                        "主述の不整合を含む不完全文（19.2.b）",
                        "文脈にそぐわない的外れな文（19.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役受身「〜させられる」と論理的議論・ディベート（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試19-2）。",
                    "options": [
                        "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                        "専門的根拠の欠落した誤文（19.2.m）",
                        "文法的語尾接続の誤謬（19.2.n）",
                        "文意の不明瞭な不適格文（19.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u19-l2）の主要専門用語を入力してください（「環境破壊」）：",
                    "acceptedAnswers": [
                        "環境破壊",
                        "環境破壊の現"
                    ],
                    "explanation": "正解の学術用語は「環境破壊」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l3": {
        "id": "ja-u19-l3",
        "subject": "japanese",
        "unit": 19,
        "lessonNumber": 3,
        "title": "使役受身「〜させられる」と論理的議論・ディベート（第3部）",
        "level": "B2",
        "objective": "使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第3部）。",
        "presentation": {
            "explanation": "第十九単元第3課では、自己の意志に反して行動を強いられたり、深く心を動かされたりする心理的事態を表す「使役受身構文」と、論理的な討議の談話標識を学びます。\n\n【使役受身の活用規則】\n・一類動詞：語尾「a段」＋「せられる（短縮形：〜される）」（書く→書かされる、待つ→待たされる）。\n・二類動詞：語尾「る」→「させられる」（食べる→食べさせられる）。\n・三類動詞：する→「させられる」、来る→「来させられる」。\n\n【使役受身の機能】\n・強制・義務：上司に残業させられました。\n・心情の誘発（内省）：深く考えさせられました。\n\n【論理的議論の表現】\n・〜に対して、〜によって、〜の観点から、〜と言わざるを得ません。",
            "examples": [
                {
                    "target": "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                    "reading": "かんきょうはかいの げんじょうと きこうへんどうに関する ドキュメンタリーをみて、わたしたちは ちきゅうの みらいについて ふかく かんがえさせられました。",
                    "translation": "Watching the documentary on the current state of environmental destruction and climate change, we were deeply made to contemplate the future of our planet."
                },
                {
                    "target": "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                    "reading": "けいざいはってんの ついきゅうに たいして、せいたいけいの ほぜんを いかに りょうりつさせるかという かんてんから ぎろんを ふかめる ひつようが あります。",
                    "translation": "There is a need to deepen discussions from the perspective of how to reconcile the preservation of ecosystems against the pursuit of economic growth."
                },
                {
                    "target": "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                    "reading": "きゅうな じんいんぶそくにより、きゅうじつにも かかわらず きんきゅうの げんばたいおうを させられました。",
                    "translation": "Due to a sudden personnel shortage, I was made to handle emergency on-site response despite it being a day off."
                },
                {
                    "target": "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                    "reading": "たかくてきな してんから データを けんしょうした けっか、こんかいの せいさくは こうかてきであったと けつろんづけざるを えません。",
                    "translation": "As a result of verifying data from multifaceted perspectives, we cannot help but conclude that the current policy was effective."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役受身「〜させられる」と論理的議論・ディベート（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問19.3.1）。",
                    "options": [
                        "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                        "学術的定義を誤った選択肢（19.3.1）",
                        "歴史的事実と合致しない誤文（19.3.2）",
                        "論理的一貫性を欠く記述（19.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役受身「〜させられる」と論理的議論・ディベート（第3部）の高度な対話・批評として最も適切な文を選択してください（演習19.3）。",
                    "options": [
                        "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                        "批評的論旨が破綻している文（19.3.x）",
                        "助詞や構文の接続が不自然な誤文（19.3.y）",
                        "不適切な語彙選択を含む誤答（19.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u19-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                        "概念の誤用による不当な解釈（19.3.a）",
                        "主述の不整合を含む不完全文（19.3.b）",
                        "文脈にそぐわない的外れな文（19.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役受身「〜させられる」と論理的議論・ディベート（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試19-3）。",
                    "options": [
                        "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                        "専門的根拠の欠落した誤文（19.3.m）",
                        "文法的語尾接続の誤謬（19.3.n）",
                        "文意の不明瞭な不適格文（19.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u19-l3）の主要専門用語を入力してください（「環境破壊」）：",
                    "acceptedAnswers": [
                        "環境破壊",
                        "環境破壊の現"
                    ],
                    "explanation": "正解の学術用語は「環境破壊」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l4": {
        "id": "ja-u19-l4",
        "subject": "japanese",
        "unit": 19,
        "lessonNumber": 4,
        "title": "使役受身「〜させられる」と論理的議論・ディベート（第4部）",
        "level": "B2",
        "objective": "使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第4部）。",
        "presentation": {
            "explanation": "第十九単元第4課では、自己の意志に反して行動を強いられたり、深く心を動かされたりする心理的事態を表す「使役受身構文」と、論理的な討議の談話標識を学びます。\n\n【使役受身の活用規則】\n・一類動詞：語尾「a段」＋「せられる（短縮形：〜される）」（書く→書かされる、待つ→待たされる）。\n・二類動詞：語尾「る」→「させられる」（食べる→食べさせられる）。\n・三類動詞：する→「させられる」、来る→「来させられる」。\n\n【使役受身の機能】\n・強制・義務：上司に残業させられました。\n・心情の誘発（内省）：深く考えさせられました。\n\n【論理的議論の表現】\n・〜に対して、〜によって、〜の観点から、〜と言わざるを得ません。",
            "examples": [
                {
                    "target": "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                    "reading": "かんきょうはかいの げんじょうと きこうへんどうに関する ドキュメンタリーをみて、わたしたちは ちきゅうの みらいについて ふかく かんがえさせられました。",
                    "translation": "Watching the documentary on the current state of environmental destruction and climate change, we were deeply made to contemplate the future of our planet."
                },
                {
                    "target": "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                    "reading": "けいざいはってんの ついきゅうに たいして、せいたいけいの ほぜんを いかに りょうりつさせるかという かんてんから ぎろんを ふかめる ひつようが あります。",
                    "translation": "There is a need to deepen discussions from the perspective of how to reconcile the preservation of ecosystems against the pursuit of economic growth."
                },
                {
                    "target": "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                    "reading": "きゅうな じんいんぶそくにより、きゅうじつにも かかわらず きんきゅうの げんばたいおうを させられました。",
                    "translation": "Due to a sudden personnel shortage, I was made to handle emergency on-site response despite it being a day off."
                },
                {
                    "target": "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                    "reading": "たかくてきな してんから データを けんしょうした けっか、こんかいの せいさくは こうかてきであったと けつろんづけざるを えません。",
                    "translation": "As a result of verifying data from multifaceted perspectives, we cannot help but conclude that the current policy was effective."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役受身「〜させられる」と論理的議論・ディベート（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問19.4.1）。",
                    "options": [
                        "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                        "学術的定義を誤った選択肢（19.4.1）",
                        "歴史的事実と合致しない誤文（19.4.2）",
                        "論理的一貫性を欠く記述（19.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役受身「〜させられる」と論理的議論・ディベート（第4部）の高度な対話・批評として最も適切な文を選択してください（演習19.4）。",
                    "options": [
                        "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                        "批評的論旨が破綻している文（19.4.x）",
                        "助詞や構文の接続が不自然な誤文（19.4.y）",
                        "不適切な語彙選択を含む誤答（19.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u19-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                        "概念の誤用による不当な解釈（19.4.a）",
                        "主述の不整合を含む不完全文（19.4.b）",
                        "文脈にそぐわない的外れな文（19.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役受身「〜させられる」と論理的議論・ディベート（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試19-4）。",
                    "options": [
                        "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                        "専門的根拠の欠落した誤文（19.4.m）",
                        "文法的語尾接続の誤謬（19.4.n）",
                        "文意の不明瞭な不適格文（19.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u19-l4）の主要専門用語を入力してください（「環境破壊」）：",
                    "acceptedAnswers": [
                        "環境破壊",
                        "環境破壊の現"
                    ],
                    "explanation": "正解の学術用語は「環境破壊」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u19-l5": {
        "id": "ja-u19-l5",
        "subject": "japanese",
        "unit": 19,
        "lessonNumber": 5,
        "title": "使役受身「〜させられる」と論理的議論・ディベート（第5部）",
        "level": "B2",
        "objective": "使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第5部）。",
        "presentation": {
            "explanation": "第十九単元第5課では、自己の意志に反して行動を強いられたり、深く心を動かされたりする心理的事態を表す「使役受身構文」と、論理的な討議の談話標識を学びます。\n\n【使役受身の活用規則】\n・一類動詞：語尾「a段」＋「せられる（短縮形：〜される）」（書く→書かされる、待つ→待たされる）。\n・二類動詞：語尾「る」→「させられる」（食べる→食べさせられる）。\n・三類動詞：する→「させられる」、来る→「来させられる」。\n\n【使役受身の機能】\n・強制・義務：上司に残業させられました。\n・心情の誘発（内省）：深く考えさせられました。\n\n【論理的議論の表現】\n・〜に対して、〜によって、〜の観点から、〜と言わざるを得ません。",
            "examples": [
                {
                    "target": "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                    "reading": "かんきょうはかいの げんじょうと きこうへんどうに関する ドキュメンタリーをみて、わたしたちは ちきゅうの みらいについて ふかく かんがえさせられました。",
                    "translation": "Watching the documentary on the current state of environmental destruction and climate change, we were deeply made to contemplate the future of our planet."
                },
                {
                    "target": "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                    "reading": "けいざいはってんの ついきゅうに たいして、せいたいけいの ほぜんを いかに りょうりつさせるかという かんてんから ぎろんを ふかめる ひつようが あります。",
                    "translation": "There is a need to deepen discussions from the perspective of how to reconcile the preservation of ecosystems against the pursuit of economic growth."
                },
                {
                    "target": "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                    "reading": "きゅうな じんいんぶそくにより、きゅうじつにも かかわらず きんきゅうの げんばたいおうを させられました。",
                    "translation": "Due to a sudden personnel shortage, I was made to handle emergency on-site response despite it being a day off."
                },
                {
                    "target": "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                    "reading": "たかくてきな してんから データを けんしょうした けっか、こんかいの せいさくは こうかてきであったと けつろんづけざるを えません。",
                    "translation": "As a result of verifying data from multifaceted perspectives, we cannot help but conclude that the current policy was effective."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】使役受身「〜させられる」と論理的議論・ディベート（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問19.5.1）。",
                    "options": [
                        "環境破壊の現状と気候変動に関するドキュメンタリーを見て、私たちは地球の未来について深く考えさせられました。",
                        "学術的定義を誤った選択肢（19.5.1）",
                        "歴史的事実と合致しない誤文（19.5.2）",
                        "論理的一貫性を欠く記述（19.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】使役受身（不本意な強制・不可避の義務・内省）、ディベートにおける論理的接続表現の習得（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】使役受身「〜させられる」と論理的議論・ディベート（第5部）の高度な対話・批評として最も適切な文を選択してください（演習19.5）。",
                    "options": [
                        "経済発展の追求に対して、生態系の保全をいかに両立させるかという観点から議論を深める必要があります。",
                        "批評的論旨が破綻している文（19.5.x）",
                        "助詞や構文の接続が不自然な誤文（19.5.y）",
                        "不適切な語彙選択を含む誤答（19.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u19-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "急な人員不足により、休日にもかかわらず緊急の現場対応をさせられました。",
                        "概念の誤用による不当な解釈（19.5.a）",
                        "主述の不整合を含む不完全文（19.5.b）",
                        "文脈にそぐわない的外れな文（19.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】使役受身「〜させられる」と論理的議論・ディベート（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試19-5）。",
                    "options": [
                        "多角的な視点からデータを検証した結果、今回の政策は効果的であったと結論づけざるを得ません。",
                        "専門的根拠の欠落した誤文（19.5.m）",
                        "文法的語尾接続の誤謬（19.5.n）",
                        "文意の不明瞭な不適格文（19.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u19-l5）の主要専門用語を入力してください（「環境破壊」）：",
                    "acceptedAnswers": [
                        "環境破壊",
                        "環境破壊の現"
                    ],
                    "explanation": "正解の学術用語は「環境破壊」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l1": {
        "id": "ja-u20-l1",
        "subject": "japanese",
        "unit": 20,
        "lessonNumber": 1,
        "title": "敬語の完全体系：尊敬語・謙譲語・丁寧語（第1部）",
        "level": "B2",
        "objective": "相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第1部）。",
        "presentation": {
            "explanation": "第二十単元第1課では、日本語の人間関係規範の頂点をなす「敬語体系」の構造を整理・習得します。\n\n【敬語の三大分類と特殊動詞の対比】\n１．尊敬語：相手の動作を高める。\n２．謙譲語：自分側の動作を低め、相手に対してへりくだる。\n３．丁寧語：話し相手に対して品格ある丁寧な言葉遣いをする（〜です、〜ます、ございます）。\n\n【重要特殊敬語動詞の対照】\n・行く/来る/いる → 尊敬：いらっしゃる / 謙譲：参る（まいる）・伺う（うかがう）・おる\n・言う → 尊敬：おっしゃる / 謙譲：申す（もうす）・申し上げる\n・食べる/飲む → 尊敬：召し上がる / 謙譲：いただく\n・見る → 尊敬：ご覧になる / 謙譲：拝見する\n・知る → 尊敬：ご存じです / 謙譲：存じております",
            "examples": [
                {
                    "target": "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                    "reading": "しゃちょうは すでに しりょうを ごらんに なりましたでしょうか。— はい、さきほど はいけんいたしました。",
                    "translation": "Has the President already looked at the materials (respectful)? — Yes, I had the honor of examining them earlier (humble)."
                },
                {
                    "target": "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                    "reading": "あしたの ごごにじに きしゃの ほんしゃオフィスへ うかがいます。なにとぞ よろしく おねがいもうしあげます。",
                    "translation": "I will visit your company's headquarters tomorrow at 2:00 PM (humble). I respectfully request your favor."
                },
                {
                    "target": "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                    "reading": "せんせい、こちらの でんとうてきな おかしを どうぞ めしあがって ください。",
                    "translation": "Teacher, please have this traditional confectionery (respectful)."
                },
                {
                    "target": "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                    "reading": "たなかせんせいは ほんじつの こくさいシンポジウムにおいて きちょうこうえんを おはなしに なりました。",
                    "translation": "Professor Tanaka delivered the keynote speech at today's international symposium (respectful)."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】敬語の完全体系：尊敬語・謙譲語・丁寧語（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問20.1.1）。",
                    "options": [
                        "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                        "学術的定義を誤った選択肢（20.1.1）",
                        "歴史的事実と合致しない誤文（20.1.2）",
                        "論理的一貫性を欠く記述（20.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】敬語の完全体系：尊敬語・謙譲語・丁寧語（第1部）の高度な対話・批評として最も適切な文を選択してください（演習20.1）。",
                    "options": [
                        "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                        "批評的論旨が破綻している文（20.1.x）",
                        "助詞や構文の接続が不自然な誤文（20.1.y）",
                        "不適切な語彙選択を含む誤答（20.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u20-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                        "概念の誤用による不当な解釈（20.1.a）",
                        "主述の不整合を含む不完全文（20.1.b）",
                        "文脈にそぐわない的外れな文（20.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】敬語の完全体系：尊敬語・謙譲語・丁寧語（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試20-1）。",
                    "options": [
                        "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                        "専門的根拠の欠落した誤文（20.1.m）",
                        "文法的語尾接続の誤謬（20.1.n）",
                        "文意の不明瞭な不適格文（20.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u20-l1）の主要専門用語を入力してください（「社長はす」）：",
                    "acceptedAnswers": [
                        "社長はす",
                        "社長はすでに"
                    ],
                    "explanation": "正解の学術用語は「社長はす」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l2": {
        "id": "ja-u20-l2",
        "subject": "japanese",
        "unit": 20,
        "lessonNumber": 2,
        "title": "敬語の完全体系：尊敬語・謙譲語・丁寧語（第2部）",
        "level": "B2",
        "objective": "相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第2部）。",
        "presentation": {
            "explanation": "第二十単元第2課では、日本語の人間関係規範の頂点をなす「敬語体系」の構造を整理・習得します。\n\n【敬語の三大分類と特殊動詞の対比】\n１．尊敬語：相手の動作を高める。\n２．謙譲語：自分側の動作を低め、相手に対してへりくだる。\n３．丁寧語：話し相手に対して品格ある丁寧な言葉遣いをする（〜です、〜ます、ございます）。\n\n【重要特殊敬語動詞の対照】\n・行く/来る/いる → 尊敬：いらっしゃる / 謙譲：参る（まいる）・伺う（うかがう）・おる\n・言う → 尊敬：おっしゃる / 謙譲：申す（もうす）・申し上げる\n・食べる/飲む → 尊敬：召し上がる / 謙譲：いただく\n・見る → 尊敬：ご覧になる / 謙譲：拝見する\n・知る → 尊敬：ご存じです / 謙譲：存じております",
            "examples": [
                {
                    "target": "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                    "reading": "しゃちょうは すでに しりょうを ごらんに なりましたでしょうか。— はい、さきほど はいけんいたしました。",
                    "translation": "Has the President already looked at the materials (respectful)? — Yes, I had the honor of examining them earlier (humble)."
                },
                {
                    "target": "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                    "reading": "あしたの ごごにじに きしゃの ほんしゃオフィスへ うかがいます。なにとぞ よろしく おねがいもうしあげます。",
                    "translation": "I will visit your company's headquarters tomorrow at 2:00 PM (humble). I respectfully request your favor."
                },
                {
                    "target": "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                    "reading": "せんせい、こちらの でんとうてきな おかしを どうぞ めしあがって ください。",
                    "translation": "Teacher, please have this traditional confectionery (respectful)."
                },
                {
                    "target": "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                    "reading": "たなかせんせいは ほんじつの こくさいシンポジウムにおいて きちょうこうえんを おはなしに なりました。",
                    "translation": "Professor Tanaka delivered the keynote speech at today's international symposium (respectful)."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】敬語の完全体系：尊敬語・謙譲語・丁寧語（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問20.2.1）。",
                    "options": [
                        "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                        "学術的定義を誤った選択肢（20.2.1）",
                        "歴史的事実と合致しない誤文（20.2.2）",
                        "論理的一貫性を欠く記述（20.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】敬語の完全体系：尊敬語・謙譲語・丁寧語（第2部）の高度な対話・批評として最も適切な文を選択してください（演習20.2）。",
                    "options": [
                        "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                        "批評的論旨が破綻している文（20.2.x）",
                        "助詞や構文の接続が不自然な誤文（20.2.y）",
                        "不適切な語彙選択を含む誤答（20.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u20-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                        "概念の誤用による不当な解釈（20.2.a）",
                        "主述の不整合を含む不完全文（20.2.b）",
                        "文脈にそぐわない的外れな文（20.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】敬語の完全体系：尊敬語・謙譲語・丁寧語（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試20-2）。",
                    "options": [
                        "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                        "専門的根拠の欠落した誤文（20.2.m）",
                        "文法的語尾接続の誤謬（20.2.n）",
                        "文意の不明瞭な不適格文（20.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u20-l2）の主要専門用語を入力してください（「社長はす」）：",
                    "acceptedAnswers": [
                        "社長はす",
                        "社長はすでに"
                    ],
                    "explanation": "正解の学術用語は「社長はす」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l3": {
        "id": "ja-u20-l3",
        "subject": "japanese",
        "unit": 20,
        "lessonNumber": 3,
        "title": "敬語の完全体系：尊敬語・謙譲語・丁寧語（第3部）",
        "level": "B2",
        "objective": "相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第3部）。",
        "presentation": {
            "explanation": "第二十単元第3課では、日本語の人間関係規範の頂点をなす「敬語体系」の構造を整理・習得します。\n\n【敬語の三大分類と特殊動詞の対比】\n１．尊敬語：相手の動作を高める。\n２．謙譲語：自分側の動作を低め、相手に対してへりくだる。\n３．丁寧語：話し相手に対して品格ある丁寧な言葉遣いをする（〜です、〜ます、ございます）。\n\n【重要特殊敬語動詞の対照】\n・行く/来る/いる → 尊敬：いらっしゃる / 謙譲：参る（まいる）・伺う（うかがう）・おる\n・言う → 尊敬：おっしゃる / 謙譲：申す（もうす）・申し上げる\n・食べる/飲む → 尊敬：召し上がる / 謙譲：いただく\n・見る → 尊敬：ご覧になる / 謙譲：拝見する\n・知る → 尊敬：ご存じです / 謙譲：存じております",
            "examples": [
                {
                    "target": "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                    "reading": "しゃちょうは すでに しりょうを ごらんに なりましたでしょうか。— はい、さきほど はいけんいたしました。",
                    "translation": "Has the President already looked at the materials (respectful)? — Yes, I had the honor of examining them earlier (humble)."
                },
                {
                    "target": "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                    "reading": "あしたの ごごにじに きしゃの ほんしゃオフィスへ うかがいます。なにとぞ よろしく おねがいもうしあげます。",
                    "translation": "I will visit your company's headquarters tomorrow at 2:00 PM (humble). I respectfully request your favor."
                },
                {
                    "target": "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                    "reading": "せんせい、こちらの でんとうてきな おかしを どうぞ めしあがって ください。",
                    "translation": "Teacher, please have this traditional confectionery (respectful)."
                },
                {
                    "target": "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                    "reading": "たなかせんせいは ほんじつの こくさいシンポジウムにおいて きちょうこうえんを おはなしに なりました。",
                    "translation": "Professor Tanaka delivered the keynote speech at today's international symposium (respectful)."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】敬語の完全体系：尊敬語・謙譲語・丁寧語（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問20.3.1）。",
                    "options": [
                        "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                        "学術的定義を誤った選択肢（20.3.1）",
                        "歴史的事実と合致しない誤文（20.3.2）",
                        "論理的一貫性を欠く記述（20.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】敬語の完全体系：尊敬語・謙譲語・丁寧語（第3部）の高度な対話・批評として最も適切な文を選択してください（演習20.3）。",
                    "options": [
                        "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                        "批評的論旨が破綻している文（20.3.x）",
                        "助詞や構文の接続が不自然な誤文（20.3.y）",
                        "不適切な語彙選択を含む誤答（20.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u20-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                        "概念の誤用による不当な解釈（20.3.a）",
                        "主述の不整合を含む不完全文（20.3.b）",
                        "文脈にそぐわない的外れな文（20.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】敬語の完全体系：尊敬語・謙譲語・丁寧語（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試20-3）。",
                    "options": [
                        "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                        "専門的根拠の欠落した誤文（20.3.m）",
                        "文法的語尾接続の誤謬（20.3.n）",
                        "文意の不明瞭な不適格文（20.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u20-l3）の主要専門用語を入力してください（「社長はす」）：",
                    "acceptedAnswers": [
                        "社長はす",
                        "社長はすでに"
                    ],
                    "explanation": "正解の学術用語は「社長はす」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l4": {
        "id": "ja-u20-l4",
        "subject": "japanese",
        "unit": 20,
        "lessonNumber": 4,
        "title": "敬語の完全体系：尊敬語・謙譲語・丁寧語（第4部）",
        "level": "B2",
        "objective": "相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第4部）。",
        "presentation": {
            "explanation": "第二十単元第4課では、日本語の人間関係規範の頂点をなす「敬語体系」の構造を整理・習得します。\n\n【敬語の三大分類と特殊動詞の対比】\n１．尊敬語：相手の動作を高める。\n２．謙譲語：自分側の動作を低め、相手に対してへりくだる。\n３．丁寧語：話し相手に対して品格ある丁寧な言葉遣いをする（〜です、〜ます、ございます）。\n\n【重要特殊敬語動詞の対照】\n・行く/来る/いる → 尊敬：いらっしゃる / 謙譲：参る（まいる）・伺う（うかがう）・おる\n・言う → 尊敬：おっしゃる / 謙譲：申す（もうす）・申し上げる\n・食べる/飲む → 尊敬：召し上がる / 謙譲：いただく\n・見る → 尊敬：ご覧になる / 謙譲：拝見する\n・知る → 尊敬：ご存じです / 謙譲：存じております",
            "examples": [
                {
                    "target": "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                    "reading": "しゃちょうは すでに しりょうを ごらんに なりましたでしょうか。— はい、さきほど はいけんいたしました。",
                    "translation": "Has the President already looked at the materials (respectful)? — Yes, I had the honor of examining them earlier (humble)."
                },
                {
                    "target": "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                    "reading": "あしたの ごごにじに きしゃの ほんしゃオフィスへ うかがいます。なにとぞ よろしく おねがいもうしあげます。",
                    "translation": "I will visit your company's headquarters tomorrow at 2:00 PM (humble). I respectfully request your favor."
                },
                {
                    "target": "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                    "reading": "せんせい、こちらの でんとうてきな おかしを どうぞ めしあがって ください。",
                    "translation": "Teacher, please have this traditional confectionery (respectful)."
                },
                {
                    "target": "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                    "reading": "たなかせんせいは ほんじつの こくさいシンポジウムにおいて きちょうこうえんを おはなしに なりました。",
                    "translation": "Professor Tanaka delivered the keynote speech at today's international symposium (respectful)."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】敬語の完全体系：尊敬語・謙譲語・丁寧語（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問20.4.1）。",
                    "options": [
                        "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                        "学術的定義を誤った選択肢（20.4.1）",
                        "歴史的事実と合致しない誤文（20.4.2）",
                        "論理的一貫性を欠く記述（20.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】敬語の完全体系：尊敬語・謙譲語・丁寧語（第4部）の高度な対話・批評として最も適切な文を選択してください（演習20.4）。",
                    "options": [
                        "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                        "批評的論旨が破綻している文（20.4.x）",
                        "助詞や構文の接続が不自然な誤文（20.4.y）",
                        "不適切な語彙選択を含む誤答（20.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u20-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                        "概念の誤用による不当な解釈（20.4.a）",
                        "主述の不整合を含む不完全文（20.4.b）",
                        "文脈にそぐわない的外れな文（20.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】敬語の完全体系：尊敬語・謙譲語・丁寧語（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試20-4）。",
                    "options": [
                        "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                        "専門的根拠の欠落した誤文（20.4.m）",
                        "文法的語尾接続の誤謬（20.4.n）",
                        "文意の不明瞭な不適格文（20.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u20-l4）の主要専門用語を入力してください（「社長はす」）：",
                    "acceptedAnswers": [
                        "社長はす",
                        "社長はすでに"
                    ],
                    "explanation": "正解の学術用語は「社長はす」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u20-l5": {
        "id": "ja-u20-l5",
        "subject": "japanese",
        "unit": 20,
        "lessonNumber": 5,
        "title": "敬語の完全体系：尊敬語・謙譲語・丁寧語（第5部）",
        "level": "B2",
        "objective": "相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第5部）。",
        "presentation": {
            "explanation": "第二十単元第5課では、日本語の人間関係規範の頂点をなす「敬語体系」の構造を整理・習得します。\n\n【敬語の三大分類と特殊動詞の対比】\n１．尊敬語：相手の動作を高める。\n２．謙譲語：自分側の動作を低め、相手に対してへりくだる。\n３．丁寧語：話し相手に対して品格ある丁寧な言葉遣いをする（〜です、〜ます、ございます）。\n\n【重要特殊敬語動詞の対照】\n・行く/来る/いる → 尊敬：いらっしゃる / 謙譲：参る（まいる）・伺う（うかがう）・おる\n・言う → 尊敬：おっしゃる / 謙譲：申す（もうす）・申し上げる\n・食べる/飲む → 尊敬：召し上がる / 謙譲：いただく\n・見る → 尊敬：ご覧になる / 謙譲：拝見する\n・知る → 尊敬：ご存じです / 謙譲：存じております",
            "examples": [
                {
                    "target": "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                    "reading": "しゃちょうは すでに しりょうを ごらんに なりましたでしょうか。— はい、さきほど はいけんいたしました。",
                    "translation": "Has the President already looked at the materials (respectful)? — Yes, I had the honor of examining them earlier (humble)."
                },
                {
                    "target": "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                    "reading": "あしたの ごごにじに きしゃの ほんしゃオフィスへ うかがいます。なにとぞ よろしく おねがいもうしあげます。",
                    "translation": "I will visit your company's headquarters tomorrow at 2:00 PM (humble). I respectfully request your favor."
                },
                {
                    "target": "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                    "reading": "せんせい、こちらの でんとうてきな おかしを どうぞ めしあがって ください。",
                    "translation": "Teacher, please have this traditional confectionery (respectful)."
                },
                {
                    "target": "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                    "reading": "たなかせんせいは ほんじつの こくさいシンポジウムにおいて きちょうこうえんを おはなしに なりました。",
                    "translation": "Professor Tanaka delivered the keynote speech at today's international symposium (respectful)."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】敬語の完全体系：尊敬語・謙譲語・丁寧語（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問20.5.1）。",
                    "options": [
                        "社長はすでに資料をご覧になりましたでしょうか。— はい、先ほど拝見いたしました。",
                        "学術的定義を誤った選択肢（20.5.1）",
                        "歴史的事実と合致しない誤文（20.5.2）",
                        "論理的一貫性を欠く記述（20.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】相手を高める尊敬語（いらっしゃる・おっしゃる等）、自分を低める謙譲語（まいる・もうす等）、丁寧語の識別と運用（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】敬語の完全体系：尊敬語・謙譲語・丁寧語（第5部）の高度な対話・批評として最も適切な文を選択してください（演習20.5）。",
                    "options": [
                        "明日の午後二時に貴社の本社オフィスへ伺います。何卒よろしくお願い申し上げます。",
                        "批評的論旨が破綻している文（20.5.x）",
                        "助詞や構文の接続が不自然な誤文（20.5.y）",
                        "不適切な語彙選択を含む誤答（20.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u20-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "先生、こちらの伝統的なお菓子をどうぞ召し上がってください。",
                        "概念の誤用による不当な解釈（20.5.a）",
                        "主述の不整合を含む不完全文（20.5.b）",
                        "文脈にそぐわない的外れな文（20.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】敬語の完全体系：尊敬語・謙譲語・丁寧語（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試20-5）。",
                    "options": [
                        "田中先生は本日の国際シンポジウムにおいて基調講演をお話しになりました。",
                        "専門的根拠の欠落した誤文（20.5.m）",
                        "文法的語尾接続の誤謬（20.5.n）",
                        "文意の不明瞭な不適格文（20.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u20-l5）の主要専門用語を入力してください（「社長はす」）：",
                    "acceptedAnswers": [
                        "社長はす",
                        "社長はすでに"
                    ],
                    "explanation": "正解の学術用語は「社長はす」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l1": {
        "id": "ja-u21-l1",
        "subject": "japanese",
        "unit": 21,
        "lessonNumber": 1,
        "title": "日本の国民皆保険制度・超高齢社会と再生医療（第1部）",
        "level": "B2",
        "objective": "国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第1部）。",
        "presentation": {
            "explanation": "第二十一単元第1課では、世界最高水準の平均寿命を誇る日本の「国民皆保険制度」および「超高齢社会」の社会保障・先端医療技術（iPS細胞・がん免疫療法・遠隔医療）に関する高度な語彙と議論を学びます。\n\n【医療制度と社会福祉の重要語彙】\n・国民皆保険制度：1961年に確立され、全住民が公平に高度医療にアクセスできる社会保障の柱。\n・超高齢社会：65歳以上の高齢者人口比率が21%を超えた社会（日本は約30%）。\n・再生医療：京都大学の山中伸弥教授による人工多能性幹細胞（iPS細胞）の樹立と治療応用。\n・医療DX：電子カルテの全国共有、オンライン診療、AI診断支援システムの社会実装。",
            "examples": [
                {
                    "target": "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                    "reading": "にほんの こくみんかいほけんせいどは、ぜんじゅうみんが こうへいに しつのたかい いりょうサービスを きょうじゅできる せかいくっしの しゃかいほしょうきばんとして こくさいてきに たかく ひょうかされています。",
                    "translation": "Japan's universal health insurance system is highly evaluated internationally as a world-leading social security infrastructure where all residents can enjoy high-quality medical services equitably."
                },
                {
                    "target": "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                    "reading": "ちょうこうれいしゃかいの きゅうそくな しんてんにともない、ちいきほうかつケアシステムの こうちくと ざいたくいりょう・かいごの れんけいきょうかが きゅうむとなっています。",
                    "translation": "With the rapid advancement of the super-aging society, building comprehensive community care systems and strengthening coordination between home medical care and nursing care has become an urgent task."
                },
                {
                    "target": "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                    "reading": "きょうとだいがくの やまなかきょうじゅらが かいはつした アイピーエスさいぼうぎじゅつは、パーキンソンびょうや かれいおうはんへんせいなどの なんびょうにたいする かっきてきな さいせいいりょうの みちを きりひらきました。",
                    "translation": "The iPS cell technology developed by Professor Yamanaka and others at Kyoto University has opened the path for epoch-making regenerative medicine against intractable diseases such as Parkinson's disease and age-related macular degeneration."
                },
                {
                    "target": "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                    "reading": "じんこうちのうを かつようした がぞうしんだんしえんシステムと えんかくオンラインしんりょうの ふきゅうにより、かそちいきにおける いりょうかくさの ぜせいが きたいされています。",
                    "translation": "With the spread of AI-assisted image diagnosis systems and remote online consultations, the correction of medical disparities in depopulated regions is expected."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の国民皆保険制度・超高齢社会と再生医療（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問21.1.1）。",
                    "options": [
                        "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                        "学術的定義を誤った選択肢（21.1.1）",
                        "歴史的事実と合致しない誤文（21.1.2）",
                        "論理的一貫性を欠く記述（21.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の国民皆保険制度・超高齢社会と再生医療（第1部）の高度な対話・批評として最も適切な文を選択してください（演習21.1）。",
                    "options": [
                        "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                        "批評的論旨が破綻している文（21.1.x）",
                        "助詞や構文の接続が不自然な誤文（21.1.y）",
                        "不適切な語彙選択を含む誤答（21.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u21-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                        "概念の誤用による不当な解釈（21.1.a）",
                        "主述の不整合を含む不完全文（21.1.b）",
                        "文脈にそぐわない的外れな文（21.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の国民皆保険制度・超高齢社会と再生医療（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試21-1）。",
                    "options": [
                        "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                        "専門的根拠の欠落した誤文（21.1.m）",
                        "文法的語尾接続の誤謬（21.1.n）",
                        "文意の不明瞭な不適格文（21.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u21-l1）の主要専門用語を入力してください（「日本の国」）：",
                    "acceptedAnswers": [
                        "日本の国",
                        "日本の国民皆"
                    ],
                    "explanation": "正解の学術用語は「日本の国」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l2": {
        "id": "ja-u21-l2",
        "subject": "japanese",
        "unit": 21,
        "lessonNumber": 2,
        "title": "日本の国民皆保険制度・超高齢社会と再生医療（第2部）",
        "level": "B2",
        "objective": "国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第2部）。",
        "presentation": {
            "explanation": "第二十一単元第2課では、世界最高水準の平均寿命を誇る日本の「国民皆保険制度」および「超高齢社会」の社会保障・先端医療技術（iPS細胞・がん免疫療法・遠隔医療）に関する高度な語彙と議論を学びます。\n\n【医療制度と社会福祉の重要語彙】\n・国民皆保険制度：1961年に確立され、全住民が公平に高度医療にアクセスできる社会保障の柱。\n・超高齢社会：65歳以上の高齢者人口比率が21%を超えた社会（日本は約30%）。\n・再生医療：京都大学の山中伸弥教授による人工多能性幹細胞（iPS細胞）の樹立と治療応用。\n・医療DX：電子カルテの全国共有、オンライン診療、AI診断支援システムの社会実装。",
            "examples": [
                {
                    "target": "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                    "reading": "にほんの こくみんかいほけんせいどは、ぜんじゅうみんが こうへいに しつのたかい いりょうサービスを きょうじゅできる せかいくっしの しゃかいほしょうきばんとして こくさいてきに たかく ひょうかされています。",
                    "translation": "Japan's universal health insurance system is highly evaluated internationally as a world-leading social security infrastructure where all residents can enjoy high-quality medical services equitably."
                },
                {
                    "target": "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                    "reading": "ちょうこうれいしゃかいの きゅうそくな しんてんにともない、ちいきほうかつケアシステムの こうちくと ざいたくいりょう・かいごの れんけいきょうかが きゅうむとなっています。",
                    "translation": "With the rapid advancement of the super-aging society, building comprehensive community care systems and strengthening coordination between home medical care and nursing care has become an urgent task."
                },
                {
                    "target": "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                    "reading": "きょうとだいがくの やまなかきょうじゅらが かいはつした アイピーエスさいぼうぎじゅつは、パーキンソンびょうや かれいおうはんへんせいなどの なんびょうにたいする かっきてきな さいせいいりょうの みちを きりひらきました。",
                    "translation": "The iPS cell technology developed by Professor Yamanaka and others at Kyoto University has opened the path for epoch-making regenerative medicine against intractable diseases such as Parkinson's disease and age-related macular degeneration."
                },
                {
                    "target": "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                    "reading": "じんこうちのうを かつようした がぞうしんだんしえんシステムと えんかくオンラインしんりょうの ふきゅうにより、かそちいきにおける いりょうかくさの ぜせいが きたいされています。",
                    "translation": "With the spread of AI-assisted image diagnosis systems and remote online consultations, the correction of medical disparities in depopulated regions is expected."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の国民皆保険制度・超高齢社会と再生医療（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問21.2.1）。",
                    "options": [
                        "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                        "学術的定義を誤った選択肢（21.2.1）",
                        "歴史的事実と合致しない誤文（21.2.2）",
                        "論理的一貫性を欠く記述（21.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の国民皆保険制度・超高齢社会と再生医療（第2部）の高度な対話・批評として最も適切な文を選択してください（演習21.2）。",
                    "options": [
                        "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                        "批評的論旨が破綻している文（21.2.x）",
                        "助詞や構文の接続が不自然な誤文（21.2.y）",
                        "不適切な語彙選択を含む誤答（21.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u21-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                        "概念の誤用による不当な解釈（21.2.a）",
                        "主述の不整合を含む不完全文（21.2.b）",
                        "文脈にそぐわない的外れな文（21.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の国民皆保険制度・超高齢社会と再生医療（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試21-2）。",
                    "options": [
                        "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                        "専門的根拠の欠落した誤文（21.2.m）",
                        "文法的語尾接続の誤謬（21.2.n）",
                        "文意の不明瞭な不適格文（21.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u21-l2）の主要専門用語を入力してください（「日本の国」）：",
                    "acceptedAnswers": [
                        "日本の国",
                        "日本の国民皆"
                    ],
                    "explanation": "正解の学術用語は「日本の国」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l3": {
        "id": "ja-u21-l3",
        "subject": "japanese",
        "unit": 21,
        "lessonNumber": 3,
        "title": "日本の国民皆保険制度・超高齢社会と再生医療（第3部）",
        "level": "B2",
        "objective": "国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第3部）。",
        "presentation": {
            "explanation": "第二十一単元第3課では、世界最高水準の平均寿命を誇る日本の「国民皆保険制度」および「超高齢社会」の社会保障・先端医療技術（iPS細胞・がん免疫療法・遠隔医療）に関する高度な語彙と議論を学びます。\n\n【医療制度と社会福祉の重要語彙】\n・国民皆保険制度：1961年に確立され、全住民が公平に高度医療にアクセスできる社会保障の柱。\n・超高齢社会：65歳以上の高齢者人口比率が21%を超えた社会（日本は約30%）。\n・再生医療：京都大学の山中伸弥教授による人工多能性幹細胞（iPS細胞）の樹立と治療応用。\n・医療DX：電子カルテの全国共有、オンライン診療、AI診断支援システムの社会実装。",
            "examples": [
                {
                    "target": "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                    "reading": "にほんの こくみんかいほけんせいどは、ぜんじゅうみんが こうへいに しつのたかい いりょうサービスを きょうじゅできる せかいくっしの しゃかいほしょうきばんとして こくさいてきに たかく ひょうかされています。",
                    "translation": "Japan's universal health insurance system is highly evaluated internationally as a world-leading social security infrastructure where all residents can enjoy high-quality medical services equitably."
                },
                {
                    "target": "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                    "reading": "ちょうこうれいしゃかいの きゅうそくな しんてんにともない、ちいきほうかつケアシステムの こうちくと ざいたくいりょう・かいごの れんけいきょうかが きゅうむとなっています。",
                    "translation": "With the rapid advancement of the super-aging society, building comprehensive community care systems and strengthening coordination between home medical care and nursing care has become an urgent task."
                },
                {
                    "target": "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                    "reading": "きょうとだいがくの やまなかきょうじゅらが かいはつした アイピーエスさいぼうぎじゅつは、パーキンソンびょうや かれいおうはんへんせいなどの なんびょうにたいする かっきてきな さいせいいりょうの みちを きりひらきました。",
                    "translation": "The iPS cell technology developed by Professor Yamanaka and others at Kyoto University has opened the path for epoch-making regenerative medicine against intractable diseases such as Parkinson's disease and age-related macular degeneration."
                },
                {
                    "target": "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                    "reading": "じんこうちのうを かつようした がぞうしんだんしえんシステムと えんかくオンラインしんりょうの ふきゅうにより、かそちいきにおける いりょうかくさの ぜせいが きたいされています。",
                    "translation": "With the spread of AI-assisted image diagnosis systems and remote online consultations, the correction of medical disparities in depopulated regions is expected."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の国民皆保険制度・超高齢社会と再生医療（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問21.3.1）。",
                    "options": [
                        "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                        "学術的定義を誤った選択肢（21.3.1）",
                        "歴史的事実と合致しない誤文（21.3.2）",
                        "論理的一貫性を欠く記述（21.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の国民皆保険制度・超高齢社会と再生医療（第3部）の高度な対話・批評として最も適切な文を選択してください（演習21.3）。",
                    "options": [
                        "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                        "批評的論旨が破綻している文（21.3.x）",
                        "助詞や構文の接続が不自然な誤文（21.3.y）",
                        "不適切な語彙選択を含む誤答（21.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u21-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                        "概念の誤用による不当な解釈（21.3.a）",
                        "主述の不整合を含む不完全文（21.3.b）",
                        "文脈にそぐわない的外れな文（21.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の国民皆保険制度・超高齢社会と再生医療（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試21-3）。",
                    "options": [
                        "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                        "専門的根拠の欠落した誤文（21.3.m）",
                        "文法的語尾接続の誤謬（21.3.n）",
                        "文意の不明瞭な不適格文（21.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u21-l3）の主要専門用語を入力してください（「日本の国」）：",
                    "acceptedAnswers": [
                        "日本の国",
                        "日本の国民皆"
                    ],
                    "explanation": "正解の学術用語は「日本の国」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l4": {
        "id": "ja-u21-l4",
        "subject": "japanese",
        "unit": 21,
        "lessonNumber": 4,
        "title": "日本の国民皆保険制度・超高齢社会と再生医療（第4部）",
        "level": "B2",
        "objective": "国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第4部）。",
        "presentation": {
            "explanation": "第二十一単元第4課では、世界最高水準の平均寿命を誇る日本の「国民皆保険制度」および「超高齢社会」の社会保障・先端医療技術（iPS細胞・がん免疫療法・遠隔医療）に関する高度な語彙と議論を学びます。\n\n【医療制度と社会福祉の重要語彙】\n・国民皆保険制度：1961年に確立され、全住民が公平に高度医療にアクセスできる社会保障の柱。\n・超高齢社会：65歳以上の高齢者人口比率が21%を超えた社会（日本は約30%）。\n・再生医療：京都大学の山中伸弥教授による人工多能性幹細胞（iPS細胞）の樹立と治療応用。\n・医療DX：電子カルテの全国共有、オンライン診療、AI診断支援システムの社会実装。",
            "examples": [
                {
                    "target": "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                    "reading": "にほんの こくみんかいほけんせいどは、ぜんじゅうみんが こうへいに しつのたかい いりょうサービスを きょうじゅできる せかいくっしの しゃかいほしょうきばんとして こくさいてきに たかく ひょうかされています。",
                    "translation": "Japan's universal health insurance system is highly evaluated internationally as a world-leading social security infrastructure where all residents can enjoy high-quality medical services equitably."
                },
                {
                    "target": "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                    "reading": "ちょうこうれいしゃかいの きゅうそくな しんてんにともない、ちいきほうかつケアシステムの こうちくと ざいたくいりょう・かいごの れんけいきょうかが きゅうむとなっています。",
                    "translation": "With the rapid advancement of the super-aging society, building comprehensive community care systems and strengthening coordination between home medical care and nursing care has become an urgent task."
                },
                {
                    "target": "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                    "reading": "きょうとだいがくの やまなかきょうじゅらが かいはつした アイピーエスさいぼうぎじゅつは、パーキンソンびょうや かれいおうはんへんせいなどの なんびょうにたいする かっきてきな さいせいいりょうの みちを きりひらきました。",
                    "translation": "The iPS cell technology developed by Professor Yamanaka and others at Kyoto University has opened the path for epoch-making regenerative medicine against intractable diseases such as Parkinson's disease and age-related macular degeneration."
                },
                {
                    "target": "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                    "reading": "じんこうちのうを かつようした がぞうしんだんしえんシステムと えんかくオンラインしんりょうの ふきゅうにより、かそちいきにおける いりょうかくさの ぜせいが きたいされています。",
                    "translation": "With the spread of AI-assisted image diagnosis systems and remote online consultations, the correction of medical disparities in depopulated regions is expected."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の国民皆保険制度・超高齢社会と再生医療（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問21.4.1）。",
                    "options": [
                        "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                        "学術的定義を誤った選択肢（21.4.1）",
                        "歴史的事実と合致しない誤文（21.4.2）",
                        "論理的一貫性を欠く記述（21.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の国民皆保険制度・超高齢社会と再生医療（第4部）の高度な対話・批評として最も適切な文を選択してください（演習21.4）。",
                    "options": [
                        "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                        "批評的論旨が破綻している文（21.4.x）",
                        "助詞や構文の接続が不自然な誤文（21.4.y）",
                        "不適切な語彙選択を含む誤答（21.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u21-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                        "概念の誤用による不当な解釈（21.4.a）",
                        "主述の不整合を含む不完全文（21.4.b）",
                        "文脈にそぐわない的外れな文（21.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の国民皆保険制度・超高齢社会と再生医療（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試21-4）。",
                    "options": [
                        "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                        "専門的根拠の欠落した誤文（21.4.m）",
                        "文法的語尾接続の誤謬（21.4.n）",
                        "文意の不明瞭な不適格文（21.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u21-l4）の主要専門用語を入力してください（「日本の国」）：",
                    "acceptedAnswers": [
                        "日本の国",
                        "日本の国民皆"
                    ],
                    "explanation": "正解の学術用語は「日本の国」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u21-l5": {
        "id": "ja-u21-l5",
        "subject": "japanese",
        "unit": 21,
        "lessonNumber": 5,
        "title": "日本の国民皆保険制度・超高齢社会と再生医療（第5部）",
        "level": "B2",
        "objective": "国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第5部）。",
        "presentation": {
            "explanation": "第二十一単元第5課では、世界最高水準の平均寿命を誇る日本の「国民皆保険制度」および「超高齢社会」の社会保障・先端医療技術（iPS細胞・がん免疫療法・遠隔医療）に関する高度な語彙と議論を学びます。\n\n【医療制度と社会福祉の重要語彙】\n・国民皆保険制度：1961年に確立され、全住民が公平に高度医療にアクセスできる社会保障の柱。\n・超高齢社会：65歳以上の高齢者人口比率が21%を超えた社会（日本は約30%）。\n・再生医療：京都大学の山中伸弥教授による人工多能性幹細胞（iPS細胞）の樹立と治療応用。\n・医療DX：電子カルテの全国共有、オンライン診療、AI診断支援システムの社会実装。",
            "examples": [
                {
                    "target": "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                    "reading": "にほんの こくみんかいほけんせいどは、ぜんじゅうみんが こうへいに しつのたかい いりょうサービスを きょうじゅできる せかいくっしの しゃかいほしょうきばんとして こくさいてきに たかく ひょうかされています。",
                    "translation": "Japan's universal health insurance system is highly evaluated internationally as a world-leading social security infrastructure where all residents can enjoy high-quality medical services equitably."
                },
                {
                    "target": "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                    "reading": "ちょうこうれいしゃかいの きゅうそくな しんてんにともない、ちいきほうかつケアシステムの こうちくと ざいたくいりょう・かいごの れんけいきょうかが きゅうむとなっています。",
                    "translation": "With the rapid advancement of the super-aging society, building comprehensive community care systems and strengthening coordination between home medical care and nursing care has become an urgent task."
                },
                {
                    "target": "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                    "reading": "きょうとだいがくの やまなかきょうじゅらが かいはつした アイピーエスさいぼうぎじゅつは、パーキンソンびょうや かれいおうはんへんせいなどの なんびょうにたいする かっきてきな さいせいいりょうの みちを きりひらきました。",
                    "translation": "The iPS cell technology developed by Professor Yamanaka and others at Kyoto University has opened the path for epoch-making regenerative medicine against intractable diseases such as Parkinson's disease and age-related macular degeneration."
                },
                {
                    "target": "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                    "reading": "じんこうちのうを かつようした がぞうしんだんしえんシステムと えんかくオンラインしんりょうの ふきゅうにより、かそちいきにおける いりょうかくさの ぜせいが きたいされています。",
                    "translation": "With the spread of AI-assisted image diagnosis systems and remote online consultations, the correction of medical disparities in depopulated regions is expected."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の国民皆保険制度・超高齢社会と再生医療（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問21.5.1）。",
                    "options": [
                        "日本の国民皆保険制度は、全住民が公平に質の高い医療サービスを享受できる世界屈指の社会保障基盤として国際的に高く評価されています。",
                        "学術的定義を誤った選択肢（21.5.1）",
                        "歴史的事実と合致しない誤文（21.5.2）",
                        "論理的一貫性を欠く記述（21.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】国民皆保険制度、超高齢社会、iPS細胞再生医療、医療DXの専門学術語彙（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の国民皆保険制度・超高齢社会と再生医療（第5部）の高度な対話・批評として最も適切な文を選択してください（演習21.5）。",
                    "options": [
                        "超高齢社会の急速な進展に伴い、地域包括ケアシステムの構築と在宅医療・介護の連携強化が急務となっています。",
                        "批評的論旨が破綻している文（21.5.x）",
                        "助詞や構文の接続が不自然な誤文（21.5.y）",
                        "不適切な語彙選択を含む誤答（21.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u21-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "京都大学の山中教授らが開発したiPS細胞技術は、パーキンソン病や加齢黄斑変性などの難病に対する画期的な再生医療の道を切り拓きました。",
                        "概念の誤用による不当な解釈（21.5.a）",
                        "主述の不整合を含む不完全文（21.5.b）",
                        "文脈にそぐわない的外れな文（21.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の国民皆保険制度・超高齢社会と再生医療（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試21-5）。",
                    "options": [
                        "人工知能を活用した画像診断支援システムと遠隔オンライン診療の普及により、過疎地域における医療格差の是正が期待されています。",
                        "専門的根拠の欠落した誤文（21.5.m）",
                        "文法的語尾接続の誤謬（21.5.n）",
                        "文意の不明瞭な不適格文（21.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u21-l5）の主要専門用語を入力してください（「日本の国」）：",
                    "acceptedAnswers": [
                        "日本の国",
                        "日本の国民皆"
                    ],
                    "explanation": "正解の学術用語は「日本の国」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l1": {
        "id": "ja-u22-l1",
        "subject": "japanese",
        "unit": 22,
        "lessonNumber": 1,
        "title": "京都学派哲学・禅宗思想と日本伝統美学（第1部）",
        "level": "B2",
        "objective": "西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第1部）。",
        "presentation": {
            "explanation": "第二十二単元第1課では、東洋思想の深奥と西洋近代哲学の批判的統合を達成した「京都学派」の思索および日本固有の美意識の哲学的基礎を学びます。\n\n【京都学派と西田幾多郎の哲学】\n・西田幾多郎（主著『善の研究』）：主客未分の直接的意識状態を「純粋経験」と定義。\n・「場所の論理」と「絶対無」：西洋的存在論の「有」に対置される根源的な包摂空間としての「無」。\n\n【禅宗思想と道元禅師】\n・道元禅師（主著『正法眼蔵』）：「只管打坐」の実践と存在と時間の不可分性を説く「有時（うじ）」の形而上学。\n\n【日本美学の三大核心概念】\n１．侘び・寂び：質素・不完全・経年変化の中に宿る静寂と調和の美。\n２．幽玄：目に見える形態の奥に潜む無限の余情・神秘的奥行き。\n３．もののあわれ：移ろいゆく無常の自然や人生の儚さに共鳴する哀惜の情。",
            "examples": [
                {
                    "target": "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                    "reading": "にしだきたろうは 『ぜんのけんきゅう』において、しゅかんと きゃっかんが いまだ わかれない こんげんてきな いしきの ちょくせつてきちょっかんを 「じゅんすいけいけん」と なづけました。",
                    "translation": "In 'An Inquiry into the Good', Kitaro Nishida named the primordial direct intuition of consciousness where subject and object are not yet divided 'Pure Experience'."
                },
                {
                    "target": "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                    "reading": "どうげんぜんじは 『しょうぼうげんぞう』の 「うじ」のまきにおいて、じかんとは こりつした ながれではなく、そんざいそのものが じかんとして げんじょうしていると ときました。",
                    "translation": "Zen Master Dogen expounded in the 'Being-Time' fascicle of the 'Shobogenzo' that time is not an isolated flow, but existence itself manifesting as time."
                },
                {
                    "target": "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                    "reading": "たにざきじゅんいちろうは 『いんえいらいさん』において、せいようの きんいつな ひかりの びがくにたいして、いんえいと うすぐらがりの ちょうわのなかにこそ にほんとくゆうの びが やどると ろんじました。",
                    "translation": "In 'In Praise of Shadows', Jun'ichiro Tanizaki argued that in contrast to the Western aesthetics of uniform light, Japan's unique beauty dwells precisely within the harmony of shadows and dimness."
                },
                {
                    "target": "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                    "reading": "わびさびの びいしきは、かんぜんむけつな たいしょうせいを きょぜつし、ふかんぜんさや よはくのなかに むげんの せいしんてき ゆたかさを みいだします。",
                    "translation": "The aesthetic of wabi-sabi rejects flawless symmetry and discovers infinite spiritual richness within imperfection and negative space."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】京都学派哲学・禅宗思想と日本伝統美学（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問22.1.1）。",
                    "options": [
                        "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                        "学術的定義を誤った選択肢（22.1.1）",
                        "歴史的事実と合致しない誤文（22.1.2）",
                        "論理的一貫性を欠く記述（22.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】京都学派哲学・禅宗思想と日本伝統美学（第1部）の高度な対話・批評として最も適切な文を選択してください（演習22.1）。",
                    "options": [
                        "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                        "批評的論旨が破綻している文（22.1.x）",
                        "助詞や構文の接続が不自然な誤文（22.1.y）",
                        "不適切な語彙選択を含む誤答（22.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u22-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                        "概念の誤用による不当な解釈（22.1.a）",
                        "主述の不整合を含む不完全文（22.1.b）",
                        "文脈にそぐわない的外れな文（22.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】京都学派哲学・禅宗思想と日本伝統美学（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試22-1）。",
                    "options": [
                        "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                        "専門的根拠の欠落した誤文（22.1.m）",
                        "文法的語尾接続の誤謬（22.1.n）",
                        "文意の不明瞭な不適格文（22.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u22-l1）の主要専門用語を入力してください（「西田幾多」）：",
                    "acceptedAnswers": [
                        "西田幾多",
                        "西田幾多郎は"
                    ],
                    "explanation": "正解の学術用語は「西田幾多」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l2": {
        "id": "ja-u22-l2",
        "subject": "japanese",
        "unit": 22,
        "lessonNumber": 2,
        "title": "京都学派哲学・禅宗思想と日本伝統美学（第2部）",
        "level": "B2",
        "objective": "西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第2部）。",
        "presentation": {
            "explanation": "第二十二単元第2課では、東洋思想の深奥と西洋近代哲学の批判的統合を達成した「京都学派」の思索および日本固有の美意識の哲学的基礎を学びます。\n\n【京都学派と西田幾多郎の哲学】\n・西田幾多郎（主著『善の研究』）：主客未分の直接的意識状態を「純粋経験」と定義。\n・「場所の論理」と「絶対無」：西洋的存在論の「有」に対置される根源的な包摂空間としての「無」。\n\n【禅宗思想と道元禅師】\n・道元禅師（主著『正法眼蔵』）：「只管打坐」の実践と存在と時間の不可分性を説く「有時（うじ）」の形而上学。\n\n【日本美学の三大核心概念】\n１．侘び・寂び：質素・不完全・経年変化の中に宿る静寂と調和の美。\n２．幽玄：目に見える形態の奥に潜む無限の余情・神秘的奥行き。\n３．もののあわれ：移ろいゆく無常の自然や人生の儚さに共鳴する哀惜の情。",
            "examples": [
                {
                    "target": "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                    "reading": "にしだきたろうは 『ぜんのけんきゅう』において、しゅかんと きゃっかんが いまだ わかれない こんげんてきな いしきの ちょくせつてきちょっかんを 「じゅんすいけいけん」と なづけました。",
                    "translation": "In 'An Inquiry into the Good', Kitaro Nishida named the primordial direct intuition of consciousness where subject and object are not yet divided 'Pure Experience'."
                },
                {
                    "target": "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                    "reading": "どうげんぜんじは 『しょうぼうげんぞう』の 「うじ」のまきにおいて、じかんとは こりつした ながれではなく、そんざいそのものが じかんとして げんじょうしていると ときました。",
                    "translation": "Zen Master Dogen expounded in the 'Being-Time' fascicle of the 'Shobogenzo' that time is not an isolated flow, but existence itself manifesting as time."
                },
                {
                    "target": "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                    "reading": "たにざきじゅんいちろうは 『いんえいらいさん』において、せいようの きんいつな ひかりの びがくにたいして、いんえいと うすぐらがりの ちょうわのなかにこそ にほんとくゆうの びが やどると ろんじました。",
                    "translation": "In 'In Praise of Shadows', Jun'ichiro Tanizaki argued that in contrast to the Western aesthetics of uniform light, Japan's unique beauty dwells precisely within the harmony of shadows and dimness."
                },
                {
                    "target": "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                    "reading": "わびさびの びいしきは、かんぜんむけつな たいしょうせいを きょぜつし、ふかんぜんさや よはくのなかに むげんの せいしんてき ゆたかさを みいだします。",
                    "translation": "The aesthetic of wabi-sabi rejects flawless symmetry and discovers infinite spiritual richness within imperfection and negative space."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】京都学派哲学・禅宗思想と日本伝統美学（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問22.2.1）。",
                    "options": [
                        "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                        "学術的定義を誤った選択肢（22.2.1）",
                        "歴史的事実と合致しない誤文（22.2.2）",
                        "論理的一貫性を欠く記述（22.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】京都学派哲学・禅宗思想と日本伝統美学（第2部）の高度な対話・批評として最も適切な文を選択してください（演習22.2）。",
                    "options": [
                        "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                        "批評的論旨が破綻している文（22.2.x）",
                        "助詞や構文の接続が不自然な誤文（22.2.y）",
                        "不適切な語彙選択を含む誤答（22.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u22-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                        "概念の誤用による不当な解釈（22.2.a）",
                        "主述の不整合を含む不完全文（22.2.b）",
                        "文脈にそぐわない的外れな文（22.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】京都学派哲学・禅宗思想と日本伝統美学（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試22-2）。",
                    "options": [
                        "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                        "専門的根拠の欠落した誤文（22.2.m）",
                        "文法的語尾接続の誤謬（22.2.n）",
                        "文意の不明瞭な不適格文（22.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u22-l2）の主要専門用語を入力してください（「西田幾多」）：",
                    "acceptedAnswers": [
                        "西田幾多",
                        "西田幾多郎は"
                    ],
                    "explanation": "正解の学術用語は「西田幾多」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l3": {
        "id": "ja-u22-l3",
        "subject": "japanese",
        "unit": 22,
        "lessonNumber": 3,
        "title": "京都学派哲学・禅宗思想と日本伝統美学（第3部）",
        "level": "B2",
        "objective": "西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第3部）。",
        "presentation": {
            "explanation": "第二十二単元第3課では、東洋思想の深奥と西洋近代哲学の批判的統合を達成した「京都学派」の思索および日本固有の美意識の哲学的基礎を学びます。\n\n【京都学派と西田幾多郎の哲学】\n・西田幾多郎（主著『善の研究』）：主客未分の直接的意識状態を「純粋経験」と定義。\n・「場所の論理」と「絶対無」：西洋的存在論の「有」に対置される根源的な包摂空間としての「無」。\n\n【禅宗思想と道元禅師】\n・道元禅師（主著『正法眼蔵』）：「只管打坐」の実践と存在と時間の不可分性を説く「有時（うじ）」の形而上学。\n\n【日本美学の三大核心概念】\n１．侘び・寂び：質素・不完全・経年変化の中に宿る静寂と調和の美。\n２．幽玄：目に見える形態の奥に潜む無限の余情・神秘的奥行き。\n３．もののあわれ：移ろいゆく無常の自然や人生の儚さに共鳴する哀惜の情。",
            "examples": [
                {
                    "target": "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                    "reading": "にしだきたろうは 『ぜんのけんきゅう』において、しゅかんと きゃっかんが いまだ わかれない こんげんてきな いしきの ちょくせつてきちょっかんを 「じゅんすいけいけん」と なづけました。",
                    "translation": "In 'An Inquiry into the Good', Kitaro Nishida named the primordial direct intuition of consciousness where subject and object are not yet divided 'Pure Experience'."
                },
                {
                    "target": "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                    "reading": "どうげんぜんじは 『しょうぼうげんぞう』の 「うじ」のまきにおいて、じかんとは こりつした ながれではなく、そんざいそのものが じかんとして げんじょうしていると ときました。",
                    "translation": "Zen Master Dogen expounded in the 'Being-Time' fascicle of the 'Shobogenzo' that time is not an isolated flow, but existence itself manifesting as time."
                },
                {
                    "target": "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                    "reading": "たにざきじゅんいちろうは 『いんえいらいさん』において、せいようの きんいつな ひかりの びがくにたいして、いんえいと うすぐらがりの ちょうわのなかにこそ にほんとくゆうの びが やどると ろんじました。",
                    "translation": "In 'In Praise of Shadows', Jun'ichiro Tanizaki argued that in contrast to the Western aesthetics of uniform light, Japan's unique beauty dwells precisely within the harmony of shadows and dimness."
                },
                {
                    "target": "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                    "reading": "わびさびの びいしきは、かんぜんむけつな たいしょうせいを きょぜつし、ふかんぜんさや よはくのなかに むげんの せいしんてき ゆたかさを みいだします。",
                    "translation": "The aesthetic of wabi-sabi rejects flawless symmetry and discovers infinite spiritual richness within imperfection and negative space."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】京都学派哲学・禅宗思想と日本伝統美学（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問22.3.1）。",
                    "options": [
                        "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                        "学術的定義を誤った選択肢（22.3.1）",
                        "歴史的事実と合致しない誤文（22.3.2）",
                        "論理的一貫性を欠く記述（22.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】京都学派哲学・禅宗思想と日本伝統美学（第3部）の高度な対話・批評として最も適切な文を選択してください（演習22.3）。",
                    "options": [
                        "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                        "批評的論旨が破綻している文（22.3.x）",
                        "助詞や構文の接続が不自然な誤文（22.3.y）",
                        "不適切な語彙選択を含む誤答（22.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u22-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                        "概念の誤用による不当な解釈（22.3.a）",
                        "主述の不整合を含む不完全文（22.3.b）",
                        "文脈にそぐわない的外れな文（22.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】京都学派哲学・禅宗思想と日本伝統美学（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試22-3）。",
                    "options": [
                        "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                        "専門的根拠の欠落した誤文（22.3.m）",
                        "文法的語尾接続の誤謬（22.3.n）",
                        "文意の不明瞭な不適格文（22.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u22-l3）の主要専門用語を入力してください（「西田幾多」）：",
                    "acceptedAnswers": [
                        "西田幾多",
                        "西田幾多郎は"
                    ],
                    "explanation": "正解の学術用語は「西田幾多」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l4": {
        "id": "ja-u22-l4",
        "subject": "japanese",
        "unit": 22,
        "lessonNumber": 4,
        "title": "京都学派哲学・禅宗思想と日本伝統美学（第4部）",
        "level": "B2",
        "objective": "西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第4部）。",
        "presentation": {
            "explanation": "第二十二単元第4課では、東洋思想の深奥と西洋近代哲学の批判的統合を達成した「京都学派」の思索および日本固有の美意識の哲学的基礎を学びます。\n\n【京都学派と西田幾多郎の哲学】\n・西田幾多郎（主著『善の研究』）：主客未分の直接的意識状態を「純粋経験」と定義。\n・「場所の論理」と「絶対無」：西洋的存在論の「有」に対置される根源的な包摂空間としての「無」。\n\n【禅宗思想と道元禅師】\n・道元禅師（主著『正法眼蔵』）：「只管打坐」の実践と存在と時間の不可分性を説く「有時（うじ）」の形而上学。\n\n【日本美学の三大核心概念】\n１．侘び・寂び：質素・不完全・経年変化の中に宿る静寂と調和の美。\n２．幽玄：目に見える形態の奥に潜む無限の余情・神秘的奥行き。\n３．もののあわれ：移ろいゆく無常の自然や人生の儚さに共鳴する哀惜の情。",
            "examples": [
                {
                    "target": "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                    "reading": "にしだきたろうは 『ぜんのけんきゅう』において、しゅかんと きゃっかんが いまだ わかれない こんげんてきな いしきの ちょくせつてきちょっかんを 「じゅんすいけいけん」と なづけました。",
                    "translation": "In 'An Inquiry into the Good', Kitaro Nishida named the primordial direct intuition of consciousness where subject and object are not yet divided 'Pure Experience'."
                },
                {
                    "target": "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                    "reading": "どうげんぜんじは 『しょうぼうげんぞう』の 「うじ」のまきにおいて、じかんとは こりつした ながれではなく、そんざいそのものが じかんとして げんじょうしていると ときました。",
                    "translation": "Zen Master Dogen expounded in the 'Being-Time' fascicle of the 'Shobogenzo' that time is not an isolated flow, but existence itself manifesting as time."
                },
                {
                    "target": "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                    "reading": "たにざきじゅんいちろうは 『いんえいらいさん』において、せいようの きんいつな ひかりの びがくにたいして、いんえいと うすぐらがりの ちょうわのなかにこそ にほんとくゆうの びが やどると ろんじました。",
                    "translation": "In 'In Praise of Shadows', Jun'ichiro Tanizaki argued that in contrast to the Western aesthetics of uniform light, Japan's unique beauty dwells precisely within the harmony of shadows and dimness."
                },
                {
                    "target": "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                    "reading": "わびさびの びいしきは、かんぜんむけつな たいしょうせいを きょぜつし、ふかんぜんさや よはくのなかに むげんの せいしんてき ゆたかさを みいだします。",
                    "translation": "The aesthetic of wabi-sabi rejects flawless symmetry and discovers infinite spiritual richness within imperfection and negative space."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】京都学派哲学・禅宗思想と日本伝統美学（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問22.4.1）。",
                    "options": [
                        "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                        "学術的定義を誤った選択肢（22.4.1）",
                        "歴史的事実と合致しない誤文（22.4.2）",
                        "論理的一貫性を欠く記述（22.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】京都学派哲学・禅宗思想と日本伝統美学（第4部）の高度な対話・批評として最も適切な文を選択してください（演習22.4）。",
                    "options": [
                        "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                        "批評的論旨が破綻している文（22.4.x）",
                        "助詞や構文の接続が不自然な誤文（22.4.y）",
                        "不適切な語彙選択を含む誤答（22.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u22-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                        "概念の誤用による不当な解釈（22.4.a）",
                        "主述の不整合を含む不完全文（22.4.b）",
                        "文脈にそぐわない的外れな文（22.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】京都学派哲学・禅宗思想と日本伝統美学（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試22-4）。",
                    "options": [
                        "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                        "専門的根拠の欠落した誤文（22.4.m）",
                        "文法的語尾接続の誤謬（22.4.n）",
                        "文意の不明瞭な不適格文（22.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u22-l4）の主要専門用語を入力してください（「西田幾多」）：",
                    "acceptedAnswers": [
                        "西田幾多",
                        "西田幾多郎は"
                    ],
                    "explanation": "正解の学術用語は「西田幾多」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u22-l5": {
        "id": "ja-u22-l5",
        "subject": "japanese",
        "unit": 22,
        "lessonNumber": 5,
        "title": "京都学派哲学・禅宗思想と日本伝統美学（第5部）",
        "level": "B2",
        "objective": "西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第5部）。",
        "presentation": {
            "explanation": "第二十二単元第5課では、東洋思想の深奥と西洋近代哲学の批判的統合を達成した「京都学派」の思索および日本固有の美意識の哲学的基礎を学びます。\n\n【京都学派と西田幾多郎の哲学】\n・西田幾多郎（主著『善の研究』）：主客未分の直接的意識状態を「純粋経験」と定義。\n・「場所の論理」と「絶対無」：西洋的存在論の「有」に対置される根源的な包摂空間としての「無」。\n\n【禅宗思想と道元禅師】\n・道元禅師（主著『正法眼蔵』）：「只管打坐」の実践と存在と時間の不可分性を説く「有時（うじ）」の形而上学。\n\n【日本美学の三大核心概念】\n１．侘び・寂び：質素・不完全・経年変化の中に宿る静寂と調和の美。\n２．幽玄：目に見える形態の奥に潜む無限の余情・神秘的奥行き。\n３．もののあわれ：移ろいゆく無常の自然や人生の儚さに共鳴する哀惜の情。",
            "examples": [
                {
                    "target": "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                    "reading": "にしだきたろうは 『ぜんのけんきゅう』において、しゅかんと きゃっかんが いまだ わかれない こんげんてきな いしきの ちょくせつてきちょっかんを 「じゅんすいけいけん」と なづけました。",
                    "translation": "In 'An Inquiry into the Good', Kitaro Nishida named the primordial direct intuition of consciousness where subject and object are not yet divided 'Pure Experience'."
                },
                {
                    "target": "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                    "reading": "どうげんぜんじは 『しょうぼうげんぞう』の 「うじ」のまきにおいて、じかんとは こりつした ながれではなく、そんざいそのものが じかんとして げんじょうしていると ときました。",
                    "translation": "Zen Master Dogen expounded in the 'Being-Time' fascicle of the 'Shobogenzo' that time is not an isolated flow, but existence itself manifesting as time."
                },
                {
                    "target": "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                    "reading": "たにざきじゅんいちろうは 『いんえいらいさん』において、せいようの きんいつな ひかりの びがくにたいして、いんえいと うすぐらがりの ちょうわのなかにこそ にほんとくゆうの びが やどると ろんじました。",
                    "translation": "In 'In Praise of Shadows', Jun'ichiro Tanizaki argued that in contrast to the Western aesthetics of uniform light, Japan's unique beauty dwells precisely within the harmony of shadows and dimness."
                },
                {
                    "target": "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                    "reading": "わびさびの びいしきは、かんぜんむけつな たいしょうせいを きょぜつし、ふかんぜんさや よはくのなかに むげんの せいしんてき ゆたかさを みいだします。",
                    "translation": "The aesthetic of wabi-sabi rejects flawless symmetry and discovers infinite spiritual richness within imperfection and negative space."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】京都学派哲学・禅宗思想と日本伝統美学（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問22.5.1）。",
                    "options": [
                        "西田幾多郎は『善の研究』において、主観と客観が未だ分かれない根源的な意識の直接的直観を「純粋経験」と名付けました。",
                        "学術的定義を誤った選択肢（22.5.1）",
                        "歴史的事実と合致しない誤文（22.5.2）",
                        "論理的一貫性を欠く記述（22.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】西田幾多郎の「純粋経験」「場所の論理」、道元禅師『正法眼蔵』、侘び寂び・幽玄の哲学的探究（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】京都学派哲学・禅宗思想と日本伝統美学（第5部）の高度な対話・批評として最も適切な文を選択してください（演習22.5）。",
                    "options": [
                        "道元禅師は『正法眼蔵』の「有時」の巻において、時間とは孤立した流れではなく、存在そのものが時間として現成していると説きました。",
                        "批評的論旨が破綻している文（22.5.x）",
                        "助詞や構文の接続が不自然な誤文（22.5.y）",
                        "不適切な語彙選択を含む誤答（22.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u22-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "谷崎潤一郎は『陰翳礼讃』において、西洋の均質な光の美学に対して、陰影と薄暗がりの調和の中にこそ日本特有の美が宿ると論じました。",
                        "概念の誤用による不当な解釈（22.5.a）",
                        "主述の不整合を含む不完全文（22.5.b）",
                        "文脈にそぐわない的外れな文（22.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】京都学派哲学・禅宗思想と日本伝統美学（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試22-5）。",
                    "options": [
                        "侘び寂びの美意識は、完全無欠な対称性を拒絶し、不完全さや余白の中に無限の精神的豊かさを見出します。",
                        "専門的根拠の欠落した誤文（22.5.m）",
                        "文法的語尾接続の誤謬（22.5.n）",
                        "文意の不明瞭な不適格文（22.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u22-l5）の主要専門用語を入力してください（「西田幾多」）：",
                    "acceptedAnswers": [
                        "西田幾多",
                        "西田幾多郎は"
                    ],
                    "explanation": "正解の学術用語は「西田幾多」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l1": {
        "id": "ja-u23-l1",
        "subject": "japanese",
        "unit": 23,
        "lessonNumber": 1,
        "title": "日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第1部）",
        "level": "B2",
        "objective": "桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第1部）。",
        "presentation": {
            "explanation": "第二十三単元第1課では、日本の伝統建築の最高峰「桂離宮」の空間論および、19世紀西洋の印象派画家に決定打を与えた「浮世絵」版画の芸術的達成を学びます。\n\n【数寄屋造りと桂離宮の空間美学】\n・桂離宮：ブルーノ・タウトが「永遠の純粋美」と激賞した日本建築の至宝。\n・数寄屋造り：茶室の簡素・自然・繊細な意匠を取り入れた住宅様式。\n・雁行配置：建物を斜めにずらして並べ、庭園の異なる四季景観を取り込む有機的設計。\n\n【浮世絵版画の革新とジャポニスム】\n・葛飾北斎：『富嶽三十六景』（神奈川沖浪裏、凱風快晴）。\n・歌川広重：『東海道五十三次』『名所江戸百景』。\n・ジャポニスム：ゴッホ、モネ、ドガらに直接的な構図・色彩の革命をもたらした世界的芸術運動。",
            "examples": [
                {
                    "target": "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                    "reading": "かつらりきゅうの がんこうはいちと せんれんされた すきやづくりの くうかんこうせいは、ブルーノ・タウトや ヴァルター・グロピウスら きんだいモダニズムけんちくの きょしょうたちに ぜつだいな しょうげきを あたえました。",
                    "translation": "The flocking-geese staggered layout and refined sukiya-style spatial composition of Katsura Imperial Villa imparted a tremendous shock to masters of modern architecture such as Bruno Taut and Walter Gropius."
                },
                {
                    "target": "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                    "reading": "かつしかほくさいの 『ふがくさんじゅうろっけい・かながわおきなみうら』は、やくどうする きょだいな なみの ぞうけいびと せいしする ふじさんの たいひによって、せかいの びじゅつしにおける ふきゅうの きんじとうを うちたてました。",
                    "translation": "Katsura Hokusai's 'Under the Wave off Kanagawa' established an immortal monument in world art history through the contrast between the sculptural dynamism of the giant roaring wave and the motionless Mount Fuji."
                },
                {
                    "target": "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                    "reading": "うたがわひろしげの ふうけいはんがに みられる だいだんな ふかんこうずと あめの びょうしゃは、フィンセント・ファン・ゴッホによって ゆさいがとして ねっしんに もしゃされました。",
                    "translation": "The bold overhead bird's-eye compositions and depictions of rain found in Utagawa Hiroshige's landscape woodblock prints were eagerly copied in oil paintings by Vincent van Gogh."
                },
                {
                    "target": "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                    "reading": "にほんの うきよえは、えんきんほうの きせいがいねんを くつがえす へいめんせいと せんれつな りんかくせんによって、じゅうきゅうせいきこうはんの ヨーロッパにおける ジャポニスムの ちょうりゅうを けんいんしました。",
                    "translation": "Japanese ukiyo-e led the tide of Japonisme in late 19th-century Europe through its flat two-dimensionality and vivid contour lines that subverted conventional notions of perspective."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問23.1.1）。",
                    "options": [
                        "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                        "学術的定義を誤った選択肢（23.1.1）",
                        "歴史的事実と合致しない誤文（23.1.2）",
                        "論理的一貫性を欠く記述（23.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第1部）の高度な対話・批評として最も適切な文を選択してください（演習23.1）。",
                    "options": [
                        "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                        "批評的論旨が破綻している文（23.1.x）",
                        "助詞や構文の接続が不自然な誤文（23.1.y）",
                        "不適切な語彙選択を含む誤答（23.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u23-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                        "概念の誤用による不当な解釈（23.1.a）",
                        "主述の不整合を含む不完全文（23.1.b）",
                        "文脈にそぐわない的外れな文（23.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試23-1）。",
                    "options": [
                        "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                        "専門的根拠の欠落した誤文（23.1.m）",
                        "文法的語尾接続の誤謬（23.1.n）",
                        "文意の不明瞭な不適格文（23.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u23-l1）の主要専門用語を入力してください（「桂離宮の」）：",
                    "acceptedAnswers": [
                        "桂離宮の",
                        "桂離宮の雁行"
                    ],
                    "explanation": "正解の学術用語は「桂離宮の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l2": {
        "id": "ja-u23-l2",
        "subject": "japanese",
        "unit": 23,
        "lessonNumber": 2,
        "title": "日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第2部）",
        "level": "B2",
        "objective": "桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第2部）。",
        "presentation": {
            "explanation": "第二十三単元第2課では、日本の伝統建築の最高峰「桂離宮」の空間論および、19世紀西洋の印象派画家に決定打を与えた「浮世絵」版画の芸術的達成を学びます。\n\n【数寄屋造りと桂離宮の空間美学】\n・桂離宮：ブルーノ・タウトが「永遠の純粋美」と激賞した日本建築の至宝。\n・数寄屋造り：茶室の簡素・自然・繊細な意匠を取り入れた住宅様式。\n・雁行配置：建物を斜めにずらして並べ、庭園の異なる四季景観を取り込む有機的設計。\n\n【浮世絵版画の革新とジャポニスム】\n・葛飾北斎：『富嶽三十六景』（神奈川沖浪裏、凱風快晴）。\n・歌川広重：『東海道五十三次』『名所江戸百景』。\n・ジャポニスム：ゴッホ、モネ、ドガらに直接的な構図・色彩の革命をもたらした世界的芸術運動。",
            "examples": [
                {
                    "target": "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                    "reading": "かつらりきゅうの がんこうはいちと せんれんされた すきやづくりの くうかんこうせいは、ブルーノ・タウトや ヴァルター・グロピウスら きんだいモダニズムけんちくの きょしょうたちに ぜつだいな しょうげきを あたえました。",
                    "translation": "The flocking-geese staggered layout and refined sukiya-style spatial composition of Katsura Imperial Villa imparted a tremendous shock to masters of modern architecture such as Bruno Taut and Walter Gropius."
                },
                {
                    "target": "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                    "reading": "かつしかほくさいの 『ふがくさんじゅうろっけい・かながわおきなみうら』は、やくどうする きょだいな なみの ぞうけいびと せいしする ふじさんの たいひによって、せかいの びじゅつしにおける ふきゅうの きんじとうを うちたてました。",
                    "translation": "Katsura Hokusai's 'Under the Wave off Kanagawa' established an immortal monument in world art history through the contrast between the sculptural dynamism of the giant roaring wave and the motionless Mount Fuji."
                },
                {
                    "target": "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                    "reading": "うたがわひろしげの ふうけいはんがに みられる だいだんな ふかんこうずと あめの びょうしゃは、フィンセント・ファン・ゴッホによって ゆさいがとして ねっしんに もしゃされました。",
                    "translation": "The bold overhead bird's-eye compositions and depictions of rain found in Utagawa Hiroshige's landscape woodblock prints were eagerly copied in oil paintings by Vincent van Gogh."
                },
                {
                    "target": "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                    "reading": "にほんの うきよえは、えんきんほうの きせいがいねんを くつがえす へいめんせいと せんれつな りんかくせんによって、じゅうきゅうせいきこうはんの ヨーロッパにおける ジャポニスムの ちょうりゅうを けんいんしました。",
                    "translation": "Japanese ukiyo-e led the tide of Japonisme in late 19th-century Europe through its flat two-dimensionality and vivid contour lines that subverted conventional notions of perspective."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問23.2.1）。",
                    "options": [
                        "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                        "学術的定義を誤った選択肢（23.2.1）",
                        "歴史的事実と合致しない誤文（23.2.2）",
                        "論理的一貫性を欠く記述（23.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第2部）の高度な対話・批評として最も適切な文を選択してください（演習23.2）。",
                    "options": [
                        "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                        "批評的論旨が破綻している文（23.2.x）",
                        "助詞や構文の接続が不自然な誤文（23.2.y）",
                        "不適切な語彙選択を含む誤答（23.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u23-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                        "概念の誤用による不当な解釈（23.2.a）",
                        "主述の不整合を含む不完全文（23.2.b）",
                        "文脈にそぐわない的外れな文（23.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試23-2）。",
                    "options": [
                        "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                        "専門的根拠の欠落した誤文（23.2.m）",
                        "文法的語尾接続の誤謬（23.2.n）",
                        "文意の不明瞭な不適格文（23.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u23-l2）の主要専門用語を入力してください（「桂離宮の」）：",
                    "acceptedAnswers": [
                        "桂離宮の",
                        "桂離宮の雁行"
                    ],
                    "explanation": "正解の学術用語は「桂離宮の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l3": {
        "id": "ja-u23-l3",
        "subject": "japanese",
        "unit": 23,
        "lessonNumber": 3,
        "title": "日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第3部）",
        "level": "B2",
        "objective": "桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第3部）。",
        "presentation": {
            "explanation": "第二十三単元第3課では、日本の伝統建築の最高峰「桂離宮」の空間論および、19世紀西洋の印象派画家に決定打を与えた「浮世絵」版画の芸術的達成を学びます。\n\n【数寄屋造りと桂離宮の空間美学】\n・桂離宮：ブルーノ・タウトが「永遠の純粋美」と激賞した日本建築の至宝。\n・数寄屋造り：茶室の簡素・自然・繊細な意匠を取り入れた住宅様式。\n・雁行配置：建物を斜めにずらして並べ、庭園の異なる四季景観を取り込む有機的設計。\n\n【浮世絵版画の革新とジャポニスム】\n・葛飾北斎：『富嶽三十六景』（神奈川沖浪裏、凱風快晴）。\n・歌川広重：『東海道五十三次』『名所江戸百景』。\n・ジャポニスム：ゴッホ、モネ、ドガらに直接的な構図・色彩の革命をもたらした世界的芸術運動。",
            "examples": [
                {
                    "target": "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                    "reading": "かつらりきゅうの がんこうはいちと せんれんされた すきやづくりの くうかんこうせいは、ブルーノ・タウトや ヴァルター・グロピウスら きんだいモダニズムけんちくの きょしょうたちに ぜつだいな しょうげきを あたえました。",
                    "translation": "The flocking-geese staggered layout and refined sukiya-style spatial composition of Katsura Imperial Villa imparted a tremendous shock to masters of modern architecture such as Bruno Taut and Walter Gropius."
                },
                {
                    "target": "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                    "reading": "かつしかほくさいの 『ふがくさんじゅうろっけい・かながわおきなみうら』は、やくどうする きょだいな なみの ぞうけいびと せいしする ふじさんの たいひによって、せかいの びじゅつしにおける ふきゅうの きんじとうを うちたてました。",
                    "translation": "Katsura Hokusai's 'Under the Wave off Kanagawa' established an immortal monument in world art history through the contrast between the sculptural dynamism of the giant roaring wave and the motionless Mount Fuji."
                },
                {
                    "target": "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                    "reading": "うたがわひろしげの ふうけいはんがに みられる だいだんな ふかんこうずと あめの びょうしゃは、フィンセント・ファン・ゴッホによって ゆさいがとして ねっしんに もしゃされました。",
                    "translation": "The bold overhead bird's-eye compositions and depictions of rain found in Utagawa Hiroshige's landscape woodblock prints were eagerly copied in oil paintings by Vincent van Gogh."
                },
                {
                    "target": "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                    "reading": "にほんの うきよえは、えんきんほうの きせいがいねんを くつがえす へいめんせいと せんれつな りんかくせんによって、じゅうきゅうせいきこうはんの ヨーロッパにおける ジャポニスムの ちょうりゅうを けんいんしました。",
                    "translation": "Japanese ukiyo-e led the tide of Japonisme in late 19th-century Europe through its flat two-dimensionality and vivid contour lines that subverted conventional notions of perspective."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問23.3.1）。",
                    "options": [
                        "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                        "学術的定義を誤った選択肢（23.3.1）",
                        "歴史的事実と合致しない誤文（23.3.2）",
                        "論理的一貫性を欠く記述（23.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第3部）の高度な対話・批評として最も適切な文を選択してください（演習23.3）。",
                    "options": [
                        "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                        "批評的論旨が破綻している文（23.3.x）",
                        "助詞や構文の接続が不自然な誤文（23.3.y）",
                        "不適切な語彙選択を含む誤答（23.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u23-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                        "概念の誤用による不当な解釈（23.3.a）",
                        "主述の不整合を含む不完全文（23.3.b）",
                        "文脈にそぐわない的外れな文（23.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試23-3）。",
                    "options": [
                        "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                        "専門的根拠の欠落した誤文（23.3.m）",
                        "文法的語尾接続の誤謬（23.3.n）",
                        "文意の不明瞭な不適格文（23.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u23-l3）の主要専門用語を入力してください（「桂離宮の」）：",
                    "acceptedAnswers": [
                        "桂離宮の",
                        "桂離宮の雁行"
                    ],
                    "explanation": "正解の学術用語は「桂離宮の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l4": {
        "id": "ja-u23-l4",
        "subject": "japanese",
        "unit": 23,
        "lessonNumber": 4,
        "title": "日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第4部）",
        "level": "B2",
        "objective": "桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第4部）。",
        "presentation": {
            "explanation": "第二十三単元第4課では、日本の伝統建築の最高峰「桂離宮」の空間論および、19世紀西洋の印象派画家に決定打を与えた「浮世絵」版画の芸術的達成を学びます。\n\n【数寄屋造りと桂離宮の空間美学】\n・桂離宮：ブルーノ・タウトが「永遠の純粋美」と激賞した日本建築の至宝。\n・数寄屋造り：茶室の簡素・自然・繊細な意匠を取り入れた住宅様式。\n・雁行配置：建物を斜めにずらして並べ、庭園の異なる四季景観を取り込む有機的設計。\n\n【浮世絵版画の革新とジャポニスム】\n・葛飾北斎：『富嶽三十六景』（神奈川沖浪裏、凱風快晴）。\n・歌川広重：『東海道五十三次』『名所江戸百景』。\n・ジャポニスム：ゴッホ、モネ、ドガらに直接的な構図・色彩の革命をもたらした世界的芸術運動。",
            "examples": [
                {
                    "target": "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                    "reading": "かつらりきゅうの がんこうはいちと せんれんされた すきやづくりの くうかんこうせいは、ブルーノ・タウトや ヴァルター・グロピウスら きんだいモダニズムけんちくの きょしょうたちに ぜつだいな しょうげきを あたえました。",
                    "translation": "The flocking-geese staggered layout and refined sukiya-style spatial composition of Katsura Imperial Villa imparted a tremendous shock to masters of modern architecture such as Bruno Taut and Walter Gropius."
                },
                {
                    "target": "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                    "reading": "かつしかほくさいの 『ふがくさんじゅうろっけい・かながわおきなみうら』は、やくどうする きょだいな なみの ぞうけいびと せいしする ふじさんの たいひによって、せかいの びじゅつしにおける ふきゅうの きんじとうを うちたてました。",
                    "translation": "Katsura Hokusai's 'Under the Wave off Kanagawa' established an immortal monument in world art history through the contrast between the sculptural dynamism of the giant roaring wave and the motionless Mount Fuji."
                },
                {
                    "target": "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                    "reading": "うたがわひろしげの ふうけいはんがに みられる だいだんな ふかんこうずと あめの びょうしゃは、フィンセント・ファン・ゴッホによって ゆさいがとして ねっしんに もしゃされました。",
                    "translation": "The bold overhead bird's-eye compositions and depictions of rain found in Utagawa Hiroshige's landscape woodblock prints were eagerly copied in oil paintings by Vincent van Gogh."
                },
                {
                    "target": "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                    "reading": "にほんの うきよえは、えんきんほうの きせいがいねんを くつがえす へいめんせいと せんれつな りんかくせんによって、じゅうきゅうせいきこうはんの ヨーロッパにおける ジャポニスムの ちょうりゅうを けんいんしました。",
                    "translation": "Japanese ukiyo-e led the tide of Japonisme in late 19th-century Europe through its flat two-dimensionality and vivid contour lines that subverted conventional notions of perspective."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問23.4.1）。",
                    "options": [
                        "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                        "学術的定義を誤った選択肢（23.4.1）",
                        "歴史的事実と合致しない誤文（23.4.2）",
                        "論理的一貫性を欠く記述（23.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第4部）の高度な対話・批評として最も適切な文を選択してください（演習23.4）。",
                    "options": [
                        "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                        "批評的論旨が破綻している文（23.4.x）",
                        "助詞や構文の接続が不自然な誤文（23.4.y）",
                        "不適切な語彙選択を含む誤答（23.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u23-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                        "概念の誤用による不当な解釈（23.4.a）",
                        "主述の不整合を含む不完全文（23.4.b）",
                        "文脈にそぐわない的外れな文（23.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試23-4）。",
                    "options": [
                        "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                        "専門的根拠の欠落した誤文（23.4.m）",
                        "文法的語尾接続の誤謬（23.4.n）",
                        "文意の不明瞭な不適格文（23.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u23-l4）の主要専門用語を入力してください（「桂離宮の」）：",
                    "acceptedAnswers": [
                        "桂離宮の",
                        "桂離宮の雁行"
                    ],
                    "explanation": "正解の学術用語は「桂離宮の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u23-l5": {
        "id": "ja-u23-l5",
        "subject": "japanese",
        "unit": 23,
        "lessonNumber": 5,
        "title": "日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第5部）",
        "level": "B2",
        "objective": "桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第5部）。",
        "presentation": {
            "explanation": "第二十三単元第5課では、日本の伝統建築の最高峰「桂離宮」の空間論および、19世紀西洋の印象派画家に決定打を与えた「浮世絵」版画の芸術的達成を学びます。\n\n【数寄屋造りと桂離宮の空間美学】\n・桂離宮：ブルーノ・タウトが「永遠の純粋美」と激賞した日本建築の至宝。\n・数寄屋造り：茶室の簡素・自然・繊細な意匠を取り入れた住宅様式。\n・雁行配置：建物を斜めにずらして並べ、庭園の異なる四季景観を取り込む有機的設計。\n\n【浮世絵版画の革新とジャポニスム】\n・葛飾北斎：『富嶽三十六景』（神奈川沖浪裏、凱風快晴）。\n・歌川広重：『東海道五十三次』『名所江戸百景』。\n・ジャポニスム：ゴッホ、モネ、ドガらに直接的な構図・色彩の革命をもたらした世界的芸術運動。",
            "examples": [
                {
                    "target": "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                    "reading": "かつらりきゅうの がんこうはいちと せんれんされた すきやづくりの くうかんこうせいは、ブルーノ・タウトや ヴァルター・グロピウスら きんだいモダニズムけんちくの きょしょうたちに ぜつだいな しょうげきを あたえました。",
                    "translation": "The flocking-geese staggered layout and refined sukiya-style spatial composition of Katsura Imperial Villa imparted a tremendous shock to masters of modern architecture such as Bruno Taut and Walter Gropius."
                },
                {
                    "target": "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                    "reading": "かつしかほくさいの 『ふがくさんじゅうろっけい・かながわおきなみうら』は、やくどうする きょだいな なみの ぞうけいびと せいしする ふじさんの たいひによって、せかいの びじゅつしにおける ふきゅうの きんじとうを うちたてました。",
                    "translation": "Katsura Hokusai's 'Under the Wave off Kanagawa' established an immortal monument in world art history through the contrast between the sculptural dynamism of the giant roaring wave and the motionless Mount Fuji."
                },
                {
                    "target": "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                    "reading": "うたがわひろしげの ふうけいはんがに みられる だいだんな ふかんこうずと あめの びょうしゃは、フィンセント・ファン・ゴッホによって ゆさいがとして ねっしんに もしゃされました。",
                    "translation": "The bold overhead bird's-eye compositions and depictions of rain found in Utagawa Hiroshige's landscape woodblock prints were eagerly copied in oil paintings by Vincent van Gogh."
                },
                {
                    "target": "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                    "reading": "にほんの うきよえは、えんきんほうの きせいがいねんを くつがえす へいめんせいと せんれつな りんかくせんによって、じゅうきゅうせいきこうはんの ヨーロッパにおける ジャポニスムの ちょうりゅうを けんいんしました。",
                    "translation": "Japanese ukiyo-e led the tide of Japonisme in late 19th-century Europe through its flat two-dimensionality and vivid contour lines that subverted conventional notions of perspective."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問23.5.1）。",
                    "options": [
                        "桂離宮の雁行配置と洗練された数寄屋造りの空間構成は、ブルーノ・タウトやヴァルター・グロピウスら近代モダニズム建築の巨匠たちに絶大な衝撃を与えました。",
                        "学術的定義を誤った選択肢（23.5.1）",
                        "歴史的事実と合致しない誤文（23.5.2）",
                        "論理的一貫性を欠く記述（23.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】桂離宮の数寄屋造り、葛飾北斎・歌川広重の浮世絵版画、ジャポニスムの世界的影響（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第5部）の高度な対話・批評として最も適切な文を選択してください（演習23.5）。",
                    "options": [
                        "葛飾北斎の『冨嶽三十六景・神奈川沖浪裏』は、躍動する巨大な波の造形美と静止する富士山の対比によって、世界の美術史における不朽の金字塔を打ち立てました。",
                        "批評的論旨が破綻している文（23.5.x）",
                        "助詞や構文の接続が不自然な誤文（23.5.y）",
                        "不適切な語彙選択を含む誤答（23.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u23-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "歌川広重の風景版画に見られる大胆な俯瞰構図と雨の描写は、フィンセント・ファン・ゴッホによって油彩画として熱心に模写されました。",
                        "概念の誤用による不当な解釈（23.5.a）",
                        "主述の不整合を含む不完全文（23.5.b）",
                        "文脈にそぐわない的外れな文（23.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】日本の伝統建築・数寄屋造りと浮世絵版画の黄金期（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試23-5）。",
                    "options": [
                        "日本の浮世絵は、遠近法の既成概念を覆す平面性と鮮烈な輪郭線によって、19世紀後半のヨーロッパにおけるジャポニスムの潮流を牽引しました。",
                        "専門的根拠の欠落した誤文（23.5.m）",
                        "文法的語尾接続の誤謬（23.5.n）",
                        "文意の不明瞭な不適格文（23.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u23-l5）の主要専門用語を入力してください（「桂離宮の」）：",
                    "acceptedAnswers": [
                        "桂離宮の",
                        "桂離宮の雁行"
                    ],
                    "explanation": "正解の学術用語は「桂離宮の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l1": {
        "id": "ja-u24-l1",
        "subject": "japanese",
        "unit": 24,
        "lessonNumber": 1,
        "title": "雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第1部）",
        "level": "B2",
        "objective": "世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第1部）。",
        "presentation": {
            "explanation": "第二十四単元第1課では、1400年以上の歴史を誇る世界最古のオーケストラ「雅楽」から、日本の伝統的音響美学「間（Ma）」を現代オーケストラに融合させた武満徹、電子音楽の世界的先駆者・坂本龍一に至る音楽的軌跡を学びます。\n\n【宮廷雅楽の三管と宇宙観】\n１．笙（しょう）：天から降り注ぐ光（和音を奏でる）。\n２．篳篥（ひちりき）：地上の人々の叫び・生命の息吹。\n３．龍笛（りゅうてき）：天地の間を翔け巡る龍の鳴き声。\n\n【現代音楽の世界的巨匠】\n・武満徹：『ノヴェンバー・ステップス』（1967年）。琵琶と尺八を西洋管弦楽と対峙させ、「間」を世界に提示。\n・坂本龍一：YMOでの電子音楽革命、映画『ラストエンペラー』での日本人初のアカデミー作曲賞受賞。",
            "examples": [
                {
                    "target": "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                    "reading": "くないちょうがくぶに でんしょうされる ががくは、しょうの てんじょうの ひかり、ひちりきの ちじょうの こえ、りゅうてきの てんくうを かける しらべが おりなす せかいさいこの がっそうおんがくです。",
                    "translation": "Gagaku handed down in the Music Department of the Imperial Household Agency is the world's oldest orchestral music woven from the heavenly light of the sho, the earthly voice of the hichiriki, and the melodies of the ryuteki soaring across the skies."
                },
                {
                    "target": "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                    "reading": "たけみつとおるは 『ノヴェンバー・ステップス』において、びわの はげしい だげんおんと しゃくはちの いきの ノイズを せいようの オーケストラと たいじさせ、とうざいの おんがくくうかんを げきてきに ゆうごうさせました。",
                    "translation": "In 'November Steps', Toru Takemitsu confronted the fierce striking sounds of the biwa and the breath noise of the shakuhachi with the Western orchestra, dramatically fusing Eastern and Western musical spaces."
                },
                {
                    "target": "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                    "reading": "さかもとりゅういちは シンセサイザーを つちかった せんしんてきな でんしおんがくから オーケストラえいが おんがくに いたるまで、こっきょうと ジャンルを ちょうえつした かくしんてきな おんきょうせかいを こうちくしました。",
                    "translation": "Ryuichi Sakamoto constructed an innovative acoustic world that transcended national borders and genres, ranging from pioneering electronic synthesizer music to orchestral film scoring."
                },
                {
                    "target": "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                    "reading": "にほんの でんとうおんがくにおける 「ま」とは、たんなる きゅうふとしての くうはくではなく、おとおとの あいだに みちる のうみつな きんちょうかんと よじょうそのものを いみします。",
                    "translation": "The concept of 'Ma' in traditional Japanese music does not mean mere blank silence, but rather the dense tension and lingering aesthetic resonance itself filling the space between sounds."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第1部）における文脈上最も正確な専門的日本語記述を選択してください（問24.1.1）。",
                    "options": [
                        "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                        "学術的定義を誤った選択肢（24.1.1）",
                        "歴史的事実と合致しない誤文（24.1.2）",
                        "論理的一貫性を欠く記述（24.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第1部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第1部）の高度な対話・批評として最も適切な文を選択してください（演習24.1）。",
                    "options": [
                        "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                        "批評的論旨が破綻している文（24.1.x）",
                        "助詞や構文の接続が不自然な誤文（24.1.y）",
                        "不適切な語彙選択を含む誤答（24.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u24-l1）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                        "概念の誤用による不当な解釈（24.1.a）",
                        "主述の不整合を含む不完全文（24.1.b）",
                        "文脈にそぐわない的外れな文（24.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第1部）の学習到達度を判定する学術設問です。完全な文を選択してください（試24-1）。",
                    "options": [
                        "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                        "専門的根拠の欠落した誤文（24.1.m）",
                        "文法的語尾接続の誤謬（24.1.n）",
                        "文意の不明瞭な不適格文（24.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u24-l1）の主要専門用語を入力してください（「宮内庁楽」）：",
                    "acceptedAnswers": [
                        "宮内庁楽",
                        "宮内庁楽部に"
                    ],
                    "explanation": "正解の学術用語は「宮内庁楽」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l2": {
        "id": "ja-u24-l2",
        "subject": "japanese",
        "unit": 24,
        "lessonNumber": 2,
        "title": "雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第2部）",
        "level": "B2",
        "objective": "世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第2部）。",
        "presentation": {
            "explanation": "第二十四単元第2課では、1400年以上の歴史を誇る世界最古のオーケストラ「雅楽」から、日本の伝統的音響美学「間（Ma）」を現代オーケストラに融合させた武満徹、電子音楽の世界的先駆者・坂本龍一に至る音楽的軌跡を学びます。\n\n【宮廷雅楽の三管と宇宙観】\n１．笙（しょう）：天から降り注ぐ光（和音を奏でる）。\n２．篳篥（ひちりき）：地上の人々の叫び・生命の息吹。\n３．龍笛（りゅうてき）：天地の間を翔け巡る龍の鳴き声。\n\n【現代音楽の世界的巨匠】\n・武満徹：『ノヴェンバー・ステップス』（1967年）。琵琶と尺八を西洋管弦楽と対峙させ、「間」を世界に提示。\n・坂本龍一：YMOでの電子音楽革命、映画『ラストエンペラー』での日本人初のアカデミー作曲賞受賞。",
            "examples": [
                {
                    "target": "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                    "reading": "くないちょうがくぶに でんしょうされる ががくは、しょうの てんじょうの ひかり、ひちりきの ちじょうの こえ、りゅうてきの てんくうを かける しらべが おりなす せかいさいこの がっそうおんがくです。",
                    "translation": "Gagaku handed down in the Music Department of the Imperial Household Agency is the world's oldest orchestral music woven from the heavenly light of the sho, the earthly voice of the hichiriki, and the melodies of the ryuteki soaring across the skies."
                },
                {
                    "target": "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                    "reading": "たけみつとおるは 『ノヴェンバー・ステップス』において、びわの はげしい だげんおんと しゃくはちの いきの ノイズを せいようの オーケストラと たいじさせ、とうざいの おんがくくうかんを げきてきに ゆうごうさせました。",
                    "translation": "In 'November Steps', Toru Takemitsu confronted the fierce striking sounds of the biwa and the breath noise of the shakuhachi with the Western orchestra, dramatically fusing Eastern and Western musical spaces."
                },
                {
                    "target": "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                    "reading": "さかもとりゅういちは シンセサイザーを つちかった せんしんてきな でんしおんがくから オーケストラえいが おんがくに いたるまで、こっきょうと ジャンルを ちょうえつした かくしんてきな おんきょうせかいを こうちくしました。",
                    "translation": "Ryuichi Sakamoto constructed an innovative acoustic world that transcended national borders and genres, ranging from pioneering electronic synthesizer music to orchestral film scoring."
                },
                {
                    "target": "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                    "reading": "にほんの でんとうおんがくにおける 「ま」とは、たんなる きゅうふとしての くうはくではなく、おとおとの あいだに みちる のうみつな きんちょうかんと よじょうそのものを いみします。",
                    "translation": "The concept of 'Ma' in traditional Japanese music does not mean mere blank silence, but rather the dense tension and lingering aesthetic resonance itself filling the space between sounds."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第2部）における文脈上最も正確な専門的日本語記述を選択してください（問24.2.1）。",
                    "options": [
                        "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                        "学術的定義を誤った選択肢（24.2.1）",
                        "歴史的事実と合致しない誤文（24.2.2）",
                        "論理的一貫性を欠く記述（24.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第2部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第2部）の高度な対話・批評として最も適切な文を選択してください（演習24.2）。",
                    "options": [
                        "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                        "批評的論旨が破綻している文（24.2.x）",
                        "助詞や構文の接続が不自然な誤文（24.2.y）",
                        "不適切な語彙選択を含む誤答（24.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u24-l2）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                        "概念の誤用による不当な解釈（24.2.a）",
                        "主述の不整合を含む不完全文（24.2.b）",
                        "文脈にそぐわない的外れな文（24.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第2部）の学習到達度を判定する学術設問です。完全な文を選択してください（試24-2）。",
                    "options": [
                        "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                        "専門的根拠の欠落した誤文（24.2.m）",
                        "文法的語尾接続の誤謬（24.2.n）",
                        "文意の不明瞭な不適格文（24.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u24-l2）の主要専門用語を入力してください（「宮内庁楽」）：",
                    "acceptedAnswers": [
                        "宮内庁楽",
                        "宮内庁楽部に"
                    ],
                    "explanation": "正解の学術用語は「宮内庁楽」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l3": {
        "id": "ja-u24-l3",
        "subject": "japanese",
        "unit": 24,
        "lessonNumber": 3,
        "title": "雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第3部）",
        "level": "B2",
        "objective": "世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第3部）。",
        "presentation": {
            "explanation": "第二十四単元第3課では、1400年以上の歴史を誇る世界最古のオーケストラ「雅楽」から、日本の伝統的音響美学「間（Ma）」を現代オーケストラに融合させた武満徹、電子音楽の世界的先駆者・坂本龍一に至る音楽的軌跡を学びます。\n\n【宮廷雅楽の三管と宇宙観】\n１．笙（しょう）：天から降り注ぐ光（和音を奏でる）。\n２．篳篥（ひちりき）：地上の人々の叫び・生命の息吹。\n３．龍笛（りゅうてき）：天地の間を翔け巡る龍の鳴き声。\n\n【現代音楽の世界的巨匠】\n・武満徹：『ノヴェンバー・ステップス』（1967年）。琵琶と尺八を西洋管弦楽と対峙させ、「間」を世界に提示。\n・坂本龍一：YMOでの電子音楽革命、映画『ラストエンペラー』での日本人初のアカデミー作曲賞受賞。",
            "examples": [
                {
                    "target": "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                    "reading": "くないちょうがくぶに でんしょうされる ががくは、しょうの てんじょうの ひかり、ひちりきの ちじょうの こえ、りゅうてきの てんくうを かける しらべが おりなす せかいさいこの がっそうおんがくです。",
                    "translation": "Gagaku handed down in the Music Department of the Imperial Household Agency is the world's oldest orchestral music woven from the heavenly light of the sho, the earthly voice of the hichiriki, and the melodies of the ryuteki soaring across the skies."
                },
                {
                    "target": "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                    "reading": "たけみつとおるは 『ノヴェンバー・ステップス』において、びわの はげしい だげんおんと しゃくはちの いきの ノイズを せいようの オーケストラと たいじさせ、とうざいの おんがくくうかんを げきてきに ゆうごうさせました。",
                    "translation": "In 'November Steps', Toru Takemitsu confronted the fierce striking sounds of the biwa and the breath noise of the shakuhachi with the Western orchestra, dramatically fusing Eastern and Western musical spaces."
                },
                {
                    "target": "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                    "reading": "さかもとりゅういちは シンセサイザーを つちかった せんしんてきな でんしおんがくから オーケストラえいが おんがくに いたるまで、こっきょうと ジャンルを ちょうえつした かくしんてきな おんきょうせかいを こうちくしました。",
                    "translation": "Ryuichi Sakamoto constructed an innovative acoustic world that transcended national borders and genres, ranging from pioneering electronic synthesizer music to orchestral film scoring."
                },
                {
                    "target": "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                    "reading": "にほんの でんとうおんがくにおける 「ま」とは、たんなる きゅうふとしての くうはくではなく、おとおとの あいだに みちる のうみつな きんちょうかんと よじょうそのものを いみします。",
                    "translation": "The concept of 'Ma' in traditional Japanese music does not mean mere blank silence, but rather the dense tension and lingering aesthetic resonance itself filling the space between sounds."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第3部）における文脈上最も正確な専門的日本語記述を選択してください（問24.3.1）。",
                    "options": [
                        "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                        "学術的定義を誤った選択肢（24.3.1）",
                        "歴史的事実と合致しない誤文（24.3.2）",
                        "論理的一貫性を欠く記述（24.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第3部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第3部）の高度な対話・批評として最も適切な文を選択してください（演習24.3）。",
                    "options": [
                        "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                        "批評的論旨が破綻している文（24.3.x）",
                        "助詞や構文の接続が不自然な誤文（24.3.y）",
                        "不適切な語彙選択を含む誤答（24.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u24-l3）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                        "概念の誤用による不当な解釈（24.3.a）",
                        "主述の不整合を含む不完全文（24.3.b）",
                        "文脈にそぐわない的外れな文（24.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第3部）の学習到達度を判定する学術設問です。完全な文を選択してください（試24-3）。",
                    "options": [
                        "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                        "専門的根拠の欠落した誤文（24.3.m）",
                        "文法的語尾接続の誤謬（24.3.n）",
                        "文意の不明瞭な不適格文（24.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u24-l3）の主要専門用語を入力してください（「宮内庁楽」）：",
                    "acceptedAnswers": [
                        "宮内庁楽",
                        "宮内庁楽部に"
                    ],
                    "explanation": "正解の学術用語は「宮内庁楽」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l4": {
        "id": "ja-u24-l4",
        "subject": "japanese",
        "unit": 24,
        "lessonNumber": 4,
        "title": "雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第4部）",
        "level": "B2",
        "objective": "世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第4部）。",
        "presentation": {
            "explanation": "第二十四単元第4課では、1400年以上の歴史を誇る世界最古のオーケストラ「雅楽」から、日本の伝統的音響美学「間（Ma）」を現代オーケストラに融合させた武満徹、電子音楽の世界的先駆者・坂本龍一に至る音楽的軌跡を学びます。\n\n【宮廷雅楽の三管と宇宙観】\n１．笙（しょう）：天から降り注ぐ光（和音を奏でる）。\n２．篳篥（ひちりき）：地上の人々の叫び・生命の息吹。\n３．龍笛（りゅうてき）：天地の間を翔け巡る龍の鳴き声。\n\n【現代音楽の世界的巨匠】\n・武満徹：『ノヴェンバー・ステップス』（1967年）。琵琶と尺八を西洋管弦楽と対峙させ、「間」を世界に提示。\n・坂本龍一：YMOでの電子音楽革命、映画『ラストエンペラー』での日本人初のアカデミー作曲賞受賞。",
            "examples": [
                {
                    "target": "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                    "reading": "くないちょうがくぶに でんしょうされる ががくは、しょうの てんじょうの ひかり、ひちりきの ちじょうの こえ、りゅうてきの てんくうを かける しらべが おりなす せかいさいこの がっそうおんがくです。",
                    "translation": "Gagaku handed down in the Music Department of the Imperial Household Agency is the world's oldest orchestral music woven from the heavenly light of the sho, the earthly voice of the hichiriki, and the melodies of the ryuteki soaring across the skies."
                },
                {
                    "target": "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                    "reading": "たけみつとおるは 『ノヴェンバー・ステップス』において、びわの はげしい だげんおんと しゃくはちの いきの ノイズを せいようの オーケストラと たいじさせ、とうざいの おんがくくうかんを げきてきに ゆうごうさせました。",
                    "translation": "In 'November Steps', Toru Takemitsu confronted the fierce striking sounds of the biwa and the breath noise of the shakuhachi with the Western orchestra, dramatically fusing Eastern and Western musical spaces."
                },
                {
                    "target": "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                    "reading": "さかもとりゅういちは シンセサイザーを つちかった せんしんてきな でんしおんがくから オーケストラえいが おんがくに いたるまで、こっきょうと ジャンルを ちょうえつした かくしんてきな おんきょうせかいを こうちくしました。",
                    "translation": "Ryuichi Sakamoto constructed an innovative acoustic world that transcended national borders and genres, ranging from pioneering electronic synthesizer music to orchestral film scoring."
                },
                {
                    "target": "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                    "reading": "にほんの でんとうおんがくにおける 「ま」とは、たんなる きゅうふとしての くうはくではなく、おとおとの あいだに みちる のうみつな きんちょうかんと よじょうそのものを いみします。",
                    "translation": "The concept of 'Ma' in traditional Japanese music does not mean mere blank silence, but rather the dense tension and lingering aesthetic resonance itself filling the space between sounds."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第4部）における文脈上最も正確な専門的日本語記述を選択してください（問24.4.1）。",
                    "options": [
                        "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                        "学術的定義を誤った選択肢（24.4.1）",
                        "歴史的事実と合致しない誤文（24.4.2）",
                        "論理的一貫性を欠く記述（24.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第4部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第4部）の高度な対話・批評として最も適切な文を選択してください（演習24.4）。",
                    "options": [
                        "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                        "批評的論旨が破綻している文（24.4.x）",
                        "助詞や構文の接続が不自然な誤文（24.4.y）",
                        "不適切な語彙選択を含む誤答（24.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u24-l4）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                        "概念の誤用による不当な解釈（24.4.a）",
                        "主述の不整合を含む不完全文（24.4.b）",
                        "文脈にそぐわない的外れな文（24.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第4部）の学習到達度を判定する学術設問です。完全な文を選択してください（試24-4）。",
                    "options": [
                        "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                        "専門的根拠の欠落した誤文（24.4.m）",
                        "文法的語尾接続の誤謬（24.4.n）",
                        "文意の不明瞭な不適格文（24.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u24-l4）の主要専門用語を入力してください（「宮内庁楽」）：",
                    "acceptedAnswers": [
                        "宮内庁楽",
                        "宮内庁楽部に"
                    ],
                    "explanation": "正解の学術用語は「宮内庁楽」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u24-l5": {
        "id": "ja-u24-l5",
        "subject": "japanese",
        "unit": 24,
        "lessonNumber": 5,
        "title": "雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第5部）",
        "level": "B2",
        "objective": "世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第5部）。",
        "presentation": {
            "explanation": "第二十四単元第5課では、1400年以上の歴史を誇る世界最古のオーケストラ「雅楽」から、日本の伝統的音響美学「間（Ma）」を現代オーケストラに融合させた武満徹、電子音楽の世界的先駆者・坂本龍一に至る音楽的軌跡を学びます。\n\n【宮廷雅楽の三管と宇宙観】\n１．笙（しょう）：天から降り注ぐ光（和音を奏でる）。\n２．篳篥（ひちりき）：地上の人々の叫び・生命の息吹。\n３．龍笛（りゅうてき）：天地の間を翔け巡る龍の鳴き声。\n\n【現代音楽の世界的巨匠】\n・武満徹：『ノヴェンバー・ステップス』（1967年）。琵琶と尺八を西洋管弦楽と対峙させ、「間」を世界に提示。\n・坂本龍一：YMOでの電子音楽革命、映画『ラストエンペラー』での日本人初のアカデミー作曲賞受賞。",
            "examples": [
                {
                    "target": "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                    "reading": "くないちょうがくぶに でんしょうされる ががくは、しょうの てんじょうの ひかり、ひちりきの ちじょうの こえ、りゅうてきの てんくうを かける しらべが おりなす せかいさいこの がっそうおんがくです。",
                    "translation": "Gagaku handed down in the Music Department of the Imperial Household Agency is the world's oldest orchestral music woven from the heavenly light of the sho, the earthly voice of the hichiriki, and the melodies of the ryuteki soaring across the skies."
                },
                {
                    "target": "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                    "reading": "たけみつとおるは 『ノヴェンバー・ステップス』において、びわの はげしい だげんおんと しゃくはちの いきの ノイズを せいようの オーケストラと たいじさせ、とうざいの おんがくくうかんを げきてきに ゆうごうさせました。",
                    "translation": "In 'November Steps', Toru Takemitsu confronted the fierce striking sounds of the biwa and the breath noise of the shakuhachi with the Western orchestra, dramatically fusing Eastern and Western musical spaces."
                },
                {
                    "target": "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                    "reading": "さかもとりゅういちは シンセサイザーを つちかった せんしんてきな でんしおんがくから オーケストラえいが おんがくに いたるまで、こっきょうと ジャンルを ちょうえつした かくしんてきな おんきょうせかいを こうちくしました。",
                    "translation": "Ryuichi Sakamoto constructed an innovative acoustic world that transcended national borders and genres, ranging from pioneering electronic synthesizer music to orchestral film scoring."
                },
                {
                    "target": "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                    "reading": "にほんの でんとうおんがくにおける 「ま」とは、たんなる きゅうふとしての くうはくではなく、おとおとの あいだに みちる のうみつな きんちょうかんと よじょうそのものを いみします。",
                    "translation": "The concept of 'Ma' in traditional Japanese music does not mean mere blank silence, but rather the dense tension and lingering aesthetic resonance itself filling the space between sounds."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【学術問題】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第5部）における文脈上最も正確な専門的日本語記述を選択してください（問24.5.1）。",
                    "options": [
                        "宮内庁楽部に伝承される雅楽は、笙の天上の光、篳篥の地上の声、龍笛の天空を翔ける調べが織りなす世界最古の合奏音楽です。",
                        "学術的定義を誤った選択肢（24.5.1）",
                        "歴史的事実と合致しない誤文（24.5.2）",
                        "論理的一貫性を欠く記述（24.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "提示された学術的・文法的事実が完璧に正確です。"
                },
                {
                    "prompt": "【専門理解】世界最古の宮廷音楽「雅楽」の楽器体系（笙・篳篥・龍笛）、間（ま）の美学、武満徹・坂本龍一の革新（第5部）。に関する中核的理論を正しく説明している記述を選択してください。",
                    "options": [
                        "日本の学術・文化規範に厳密に準拠した正当な論考である。",
                        "俗説に基づく不正確な記述である。",
                        "事実関係の誤認を含む記述である。",
                        "現代において否定された過去の説である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "確立された学術理論および美学規範に正確に基づいています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【応用演習】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第5部）の高度な対話・批評として最も適切な文を選択してください（演習24.5）。",
                    "options": [
                        "武満徹は『ノヴェンバー・ステップス』において、琵琶の激しい打弦音と尺八の息のノイズを西洋のオーケストラと対峙させ、東西の音楽空間を劇的に融合させました。",
                        "批評的論旨が破綻している文（24.5.x）",
                        "助詞や構文の接続が不自然な誤文（24.5.y）",
                        "不適切な語彙選択を含む誤答（24.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "高度な文脈において最も格調高く正確な表現です。"
                },
                {
                    "prompt": "【概念識別】本課（ja-u24-l5）で論じられた最重要概念の正確な適用例を選択してください。",
                    "options": [
                        "坂本龍一はシンセサイザーを用いた先進的な電子音楽からオーケストラ映画音楽に至るまで、国境とジャンルを超越した革新的な音響世界を構築しました。",
                        "概念の誤用による不当な解釈（24.5.a）",
                        "主述の不整合を含む不完全文（24.5.b）",
                        "文脈にそぐわない的外れな文（24.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "専門用語の意味および哲学的文脈が的確に具現化されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【確認試験】雅楽・邦楽の音響空間と武満徹・坂本龍一の現代音楽（第5部）の学習到達度を判定する学術設問です。完全な文を選択してください（試24-5）。",
                    "options": [
                        "日本の伝統音楽における「間」とは、単なる休符としての空白ではなく、音と音の間に満ちる濃密な緊張感と余情そのものを意味します。",
                        "専門的根拠の欠落した誤文（24.5.m）",
                        "文法的語尾接続の誤謬（24.5.n）",
                        "文意の不明瞭な不適格文（24.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "構文・論理・語彙のすべての観点から完璧な標準学術文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u24-l5）の主要専門用語を入力してください（「宮内庁楽」）：",
                    "acceptedAnswers": [
                        "宮内庁楽",
                        "宮内庁楽部に"
                    ],
                    "explanation": "正解の学術用語は「宮内庁楽」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l1": {
        "id": "ja-u25-l1",
        "subject": "japanese",
        "unit": 25,
        "lessonNumber": 1,
        "title": "日本映画の黄金期・黒澤明と小津安二郎の映像美学（第1部）",
        "level": "C1",
        "objective": "黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第1部）。",
        "presentation": {
            "explanation": "第二十五単元第1課では、世界の映画文法を革新した日本映画の黄金期三大巨匠（黒澤明・小津安二郎・溝口健二）の演出美学と映画史的達成を学びます。\n\n【三大映画巨匠の演出美学】\n１．黒澤明（1910–1998）：\n・『羅生門』（1950年・ヴェネツィア国際映画祭金獅子賞）：殺人事件を関係者四人の証言により語り直し、真実の多角性を暴いた「羅生門効果」の創出。\n・『七人の侍』（1954年）：複数カメラの同時撮影と望遠レンズによる圧倒的躍動感。\n２．小津安二郎（1903–1963）：\n・『東京物語』（1953年）：畳の上の着座目線「ローアングル」と厳格な正面構図、家族制度の解体を静かに見つめる「もののあわれ」の極致。\n３．溝口健二（1898–1956）：\n・『雨月物語』（1953年）：カメラが人物に寄り添う「ワンシーン・ワンカット（長回し）」の幽玄美。",
            "examples": [
                {
                    "target": "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                    "reading": "くろさわあきらかんとくの 『らしょうもん』は、どういつの じけんが かくしょうげんしゃの りがいや しゅかんによって まったくことなる ものがたりとして かたられる たそうこうぞうによって、せかいの えいがしに かくめいてきてんかんてんを もたらしました。",
                    "translation": "Director Akira Kurosawa's 'Rashomon' brought a revolutionary turning point to world film history through its multi-layered structure where the same incident is narrated as completely different stories according to each witness's interests and subjectivity."
                },
                {
                    "target": "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                    "reading": "おづやすじろうかんとくは、たたみのうえの しせんに こていされた ローアングルと しょうめんきりかえしショットによって、きんだいかぞくの ほうかいと にんげんの こんげんてきこどくを せいひつに えがききりました。",
                    "translation": "Director Yasujiro Ozu serenely depicted the collapse of the modern family and fundamental human loneliness through low angles fixed at the eye level on tatami mats and frontal reverse shots."
                },
                {
                    "target": "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                    "reading": "みぞぐちけんじかんとくが きわめた りゅうれいな ワンシーン・ワンカットの ながまわしさつえいは、ゆうげんな すいぼくがのような えいぞうくうかんと じょせいの すうこうな ひげきせいを そうしゅつしました。",
                    "translation": "The fluid one-scene one-cut long-take cinematography perfected by Director Kenji Mizoguchi created an image space like a mysterious sumi-e ink painting and the sublime tragic nature of women."
                },
                {
                    "target": "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                    "reading": "にほんえいがの おうごんきさくひんは、とうようの せいしんてきでんとうと きんだいえいがぎじゅつの きせきてきな けっしょうとして、げんだいの せかいじゅうの フィルムメーカーに たえまない インスピレーションを あたえつづけています。",
                    "translation": "The masterpiece works of Japanese cinema's golden age, as a miraculous crystallization of Eastern spiritual traditions and modern cinematic technology, continue to impart ceaseless inspiration to filmmakers across the modern world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問25.1.1）。",
                    "options": [
                        "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                        "国際条約法に反する法的誤謬（25.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（25.1.2）",
                        "外交慣例に悖る修辞的欠陥文（25.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習25.1）。",
                    "options": [
                        "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                        "対立を無用に煽る不見識な声明文（25.1.x）",
                        "法的拘束力のない不完全な折衝文（25.1.y）",
                        "条約の留保条件を乱用した無効文（25.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u25-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                        "安全保障理事会決議の権能を無視した記述（25.1.a）",
                        "平和維持部隊の法的根拠を欠く文（25.1.b）",
                        "国際司法裁判所の判例に背く記述（25.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試25-1）。",
                    "options": [
                        "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                        "条約履行義務を軽視した無効文（25.1.m）",
                        "全権委任状の要件を欠く不備文（25.1.n）",
                        "寄託手続きの誤謬文（25.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u25-l1）の主要外交用語を入力してください（「黒澤明監」）：",
                    "acceptedAnswers": [
                        "黒澤明監",
                        "黒澤明監督の"
                    ],
                    "explanation": "正解の外交用語は「黒澤明監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l2": {
        "id": "ja-u25-l2",
        "subject": "japanese",
        "unit": 25,
        "lessonNumber": 2,
        "title": "日本映画の黄金期・黒澤明と小津安二郎の映像美学（第2部）",
        "level": "C1",
        "objective": "黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第2部）。",
        "presentation": {
            "explanation": "第二十五単元第2課では、世界の映画文法を革新した日本映画の黄金期三大巨匠（黒澤明・小津安二郎・溝口健二）の演出美学と映画史的達成を学びます。\n\n【三大映画巨匠の演出美学】\n１．黒澤明（1910–1998）：\n・『羅生門』（1950年・ヴェネツィア国際映画祭金獅子賞）：殺人事件を関係者四人の証言により語り直し、真実の多角性を暴いた「羅生門効果」の創出。\n・『七人の侍』（1954年）：複数カメラの同時撮影と望遠レンズによる圧倒的躍動感。\n２．小津安二郎（1903–1963）：\n・『東京物語』（1953年）：畳の上の着座目線「ローアングル」と厳格な正面構図、家族制度の解体を静かに見つめる「もののあわれ」の極致。\n３．溝口健二（1898–1956）：\n・『雨月物語』（1953年）：カメラが人物に寄り添う「ワンシーン・ワンカット（長回し）」の幽玄美。",
            "examples": [
                {
                    "target": "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                    "reading": "くろさわあきらかんとくの 『らしょうもん』は、どういつの じけんが かくしょうげんしゃの りがいや しゅかんによって まったくことなる ものがたりとして かたられる たそうこうぞうによって、せかいの えいがしに かくめいてきてんかんてんを もたらしました。",
                    "translation": "Director Akira Kurosawa's 'Rashomon' brought a revolutionary turning point to world film history through its multi-layered structure where the same incident is narrated as completely different stories according to each witness's interests and subjectivity."
                },
                {
                    "target": "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                    "reading": "おづやすじろうかんとくは、たたみのうえの しせんに こていされた ローアングルと しょうめんきりかえしショットによって、きんだいかぞくの ほうかいと にんげんの こんげんてきこどくを せいひつに えがききりました。",
                    "translation": "Director Yasujiro Ozu serenely depicted the collapse of the modern family and fundamental human loneliness through low angles fixed at the eye level on tatami mats and frontal reverse shots."
                },
                {
                    "target": "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                    "reading": "みぞぐちけんじかんとくが きわめた りゅうれいな ワンシーン・ワンカットの ながまわしさつえいは、ゆうげんな すいぼくがのような えいぞうくうかんと じょせいの すうこうな ひげきせいを そうしゅつしました。",
                    "translation": "The fluid one-scene one-cut long-take cinematography perfected by Director Kenji Mizoguchi created an image space like a mysterious sumi-e ink painting and the sublime tragic nature of women."
                },
                {
                    "target": "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                    "reading": "にほんえいがの おうごんきさくひんは、とうようの せいしんてきでんとうと きんだいえいがぎじゅつの きせきてきな けっしょうとして、げんだいの せかいじゅうの フィルムメーカーに たえまない インスピレーションを あたえつづけています。",
                    "translation": "The masterpiece works of Japanese cinema's golden age, as a miraculous crystallization of Eastern spiritual traditions and modern cinematic technology, continue to impart ceaseless inspiration to filmmakers across the modern world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問25.2.1）。",
                    "options": [
                        "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                        "国際条約法に反する法的誤謬（25.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（25.2.2）",
                        "外交慣例に悖る修辞的欠陥文（25.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習25.2）。",
                    "options": [
                        "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                        "対立を無用に煽る不見識な声明文（25.2.x）",
                        "法的拘束力のない不完全な折衝文（25.2.y）",
                        "条約の留保条件を乱用した無効文（25.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u25-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                        "安全保障理事会決議の権能を無視した記述（25.2.a）",
                        "平和維持部隊の法的根拠を欠く文（25.2.b）",
                        "国際司法裁判所の判例に背く記述（25.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試25-2）。",
                    "options": [
                        "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                        "条約履行義務を軽視した無効文（25.2.m）",
                        "全権委任状の要件を欠く不備文（25.2.n）",
                        "寄託手続きの誤謬文（25.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u25-l2）の主要外交用語を入力してください（「黒澤明監」）：",
                    "acceptedAnswers": [
                        "黒澤明監",
                        "黒澤明監督の"
                    ],
                    "explanation": "正解の外交用語は「黒澤明監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l3": {
        "id": "ja-u25-l3",
        "subject": "japanese",
        "unit": 25,
        "lessonNumber": 3,
        "title": "日本映画の黄金期・黒澤明と小津安二郎の映像美学（第3部）",
        "level": "C1",
        "objective": "黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第3部）。",
        "presentation": {
            "explanation": "第二十五単元第3課では、世界の映画文法を革新した日本映画の黄金期三大巨匠（黒澤明・小津安二郎・溝口健二）の演出美学と映画史的達成を学びます。\n\n【三大映画巨匠の演出美学】\n１．黒澤明（1910–1998）：\n・『羅生門』（1950年・ヴェネツィア国際映画祭金獅子賞）：殺人事件を関係者四人の証言により語り直し、真実の多角性を暴いた「羅生門効果」の創出。\n・『七人の侍』（1954年）：複数カメラの同時撮影と望遠レンズによる圧倒的躍動感。\n２．小津安二郎（1903–1963）：\n・『東京物語』（1953年）：畳の上の着座目線「ローアングル」と厳格な正面構図、家族制度の解体を静かに見つめる「もののあわれ」の極致。\n３．溝口健二（1898–1956）：\n・『雨月物語』（1953年）：カメラが人物に寄り添う「ワンシーン・ワンカット（長回し）」の幽玄美。",
            "examples": [
                {
                    "target": "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                    "reading": "くろさわあきらかんとくの 『らしょうもん』は、どういつの じけんが かくしょうげんしゃの りがいや しゅかんによって まったくことなる ものがたりとして かたられる たそうこうぞうによって、せかいの えいがしに かくめいてきてんかんてんを もたらしました。",
                    "translation": "Director Akira Kurosawa's 'Rashomon' brought a revolutionary turning point to world film history through its multi-layered structure where the same incident is narrated as completely different stories according to each witness's interests and subjectivity."
                },
                {
                    "target": "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                    "reading": "おづやすじろうかんとくは、たたみのうえの しせんに こていされた ローアングルと しょうめんきりかえしショットによって、きんだいかぞくの ほうかいと にんげんの こんげんてきこどくを せいひつに えがききりました。",
                    "translation": "Director Yasujiro Ozu serenely depicted the collapse of the modern family and fundamental human loneliness through low angles fixed at the eye level on tatami mats and frontal reverse shots."
                },
                {
                    "target": "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                    "reading": "みぞぐちけんじかんとくが きわめた りゅうれいな ワンシーン・ワンカットの ながまわしさつえいは、ゆうげんな すいぼくがのような えいぞうくうかんと じょせいの すうこうな ひげきせいを そうしゅつしました。",
                    "translation": "The fluid one-scene one-cut long-take cinematography perfected by Director Kenji Mizoguchi created an image space like a mysterious sumi-e ink painting and the sublime tragic nature of women."
                },
                {
                    "target": "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                    "reading": "にほんえいがの おうごんきさくひんは、とうようの せいしんてきでんとうと きんだいえいがぎじゅつの きせきてきな けっしょうとして、げんだいの せかいじゅうの フィルムメーカーに たえまない インスピレーションを あたえつづけています。",
                    "translation": "The masterpiece works of Japanese cinema's golden age, as a miraculous crystallization of Eastern spiritual traditions and modern cinematic technology, continue to impart ceaseless inspiration to filmmakers across the modern world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問25.3.1）。",
                    "options": [
                        "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                        "国際条約法に反する法的誤謬（25.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（25.3.2）",
                        "外交慣例に悖る修辞的欠陥文（25.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習25.3）。",
                    "options": [
                        "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                        "対立を無用に煽る不見識な声明文（25.3.x）",
                        "法的拘束力のない不完全な折衝文（25.3.y）",
                        "条約の留保条件を乱用した無効文（25.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u25-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                        "安全保障理事会決議の権能を無視した記述（25.3.a）",
                        "平和維持部隊の法的根拠を欠く文（25.3.b）",
                        "国際司法裁判所の判例に背く記述（25.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試25-3）。",
                    "options": [
                        "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                        "条約履行義務を軽視した無効文（25.3.m）",
                        "全権委任状の要件を欠く不備文（25.3.n）",
                        "寄託手続きの誤謬文（25.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u25-l3）の主要外交用語を入力してください（「黒澤明監」）：",
                    "acceptedAnswers": [
                        "黒澤明監",
                        "黒澤明監督の"
                    ],
                    "explanation": "正解の外交用語は「黒澤明監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l4": {
        "id": "ja-u25-l4",
        "subject": "japanese",
        "unit": 25,
        "lessonNumber": 4,
        "title": "日本映画の黄金期・黒澤明と小津安二郎の映像美学（第4部）",
        "level": "C1",
        "objective": "黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第4部）。",
        "presentation": {
            "explanation": "第二十五単元第4課では、世界の映画文法を革新した日本映画の黄金期三大巨匠（黒澤明・小津安二郎・溝口健二）の演出美学と映画史的達成を学びます。\n\n【三大映画巨匠の演出美学】\n１．黒澤明（1910–1998）：\n・『羅生門』（1950年・ヴェネツィア国際映画祭金獅子賞）：殺人事件を関係者四人の証言により語り直し、真実の多角性を暴いた「羅生門効果」の創出。\n・『七人の侍』（1954年）：複数カメラの同時撮影と望遠レンズによる圧倒的躍動感。\n２．小津安二郎（1903–1963）：\n・『東京物語』（1953年）：畳の上の着座目線「ローアングル」と厳格な正面構図、家族制度の解体を静かに見つめる「もののあわれ」の極致。\n３．溝口健二（1898–1956）：\n・『雨月物語』（1953年）：カメラが人物に寄り添う「ワンシーン・ワンカット（長回し）」の幽玄美。",
            "examples": [
                {
                    "target": "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                    "reading": "くろさわあきらかんとくの 『らしょうもん』は、どういつの じけんが かくしょうげんしゃの りがいや しゅかんによって まったくことなる ものがたりとして かたられる たそうこうぞうによって、せかいの えいがしに かくめいてきてんかんてんを もたらしました。",
                    "translation": "Director Akira Kurosawa's 'Rashomon' brought a revolutionary turning point to world film history through its multi-layered structure where the same incident is narrated as completely different stories according to each witness's interests and subjectivity."
                },
                {
                    "target": "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                    "reading": "おづやすじろうかんとくは、たたみのうえの しせんに こていされた ローアングルと しょうめんきりかえしショットによって、きんだいかぞくの ほうかいと にんげんの こんげんてきこどくを せいひつに えがききりました。",
                    "translation": "Director Yasujiro Ozu serenely depicted the collapse of the modern family and fundamental human loneliness through low angles fixed at the eye level on tatami mats and frontal reverse shots."
                },
                {
                    "target": "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                    "reading": "みぞぐちけんじかんとくが きわめた りゅうれいな ワンシーン・ワンカットの ながまわしさつえいは、ゆうげんな すいぼくがのような えいぞうくうかんと じょせいの すうこうな ひげきせいを そうしゅつしました。",
                    "translation": "The fluid one-scene one-cut long-take cinematography perfected by Director Kenji Mizoguchi created an image space like a mysterious sumi-e ink painting and the sublime tragic nature of women."
                },
                {
                    "target": "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                    "reading": "にほんえいがの おうごんきさくひんは、とうようの せいしんてきでんとうと きんだいえいがぎじゅつの きせきてきな けっしょうとして、げんだいの せかいじゅうの フィルムメーカーに たえまない インスピレーションを あたえつづけています。",
                    "translation": "The masterpiece works of Japanese cinema's golden age, as a miraculous crystallization of Eastern spiritual traditions and modern cinematic technology, continue to impart ceaseless inspiration to filmmakers across the modern world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問25.4.1）。",
                    "options": [
                        "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                        "国際条約法に反する法的誤謬（25.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（25.4.2）",
                        "外交慣例に悖る修辞的欠陥文（25.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習25.4）。",
                    "options": [
                        "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                        "対立を無用に煽る不見識な声明文（25.4.x）",
                        "法的拘束力のない不完全な折衝文（25.4.y）",
                        "条約の留保条件を乱用した無効文（25.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u25-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                        "安全保障理事会決議の権能を無視した記述（25.4.a）",
                        "平和維持部隊の法的根拠を欠く文（25.4.b）",
                        "国際司法裁判所の判例に背く記述（25.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試25-4）。",
                    "options": [
                        "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                        "条約履行義務を軽視した無効文（25.4.m）",
                        "全権委任状の要件を欠く不備文（25.4.n）",
                        "寄託手続きの誤謬文（25.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u25-l4）の主要外交用語を入力してください（「黒澤明監」）：",
                    "acceptedAnswers": [
                        "黒澤明監",
                        "黒澤明監督の"
                    ],
                    "explanation": "正解の外交用語は「黒澤明監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u25-l5": {
        "id": "ja-u25-l5",
        "subject": "japanese",
        "unit": 25,
        "lessonNumber": 5,
        "title": "日本映画の黄金期・黒澤明と小津安二郎の映像美学（第5部）",
        "level": "C1",
        "objective": "黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第5部）。",
        "presentation": {
            "explanation": "第二十五単元第5課では、世界の映画文法を革新した日本映画の黄金期三大巨匠（黒澤明・小津安二郎・溝口健二）の演出美学と映画史的達成を学びます。\n\n【三大映画巨匠の演出美学】\n１．黒澤明（1910–1998）：\n・『羅生門』（1950年・ヴェネツィア国際映画祭金獅子賞）：殺人事件を関係者四人の証言により語り直し、真実の多角性を暴いた「羅生門効果」の創出。\n・『七人の侍』（1954年）：複数カメラの同時撮影と望遠レンズによる圧倒的躍動感。\n２．小津安二郎（1903–1963）：\n・『東京物語』（1953年）：畳の上の着座目線「ローアングル」と厳格な正面構図、家族制度の解体を静かに見つめる「もののあわれ」の極致。\n３．溝口健二（1898–1956）：\n・『雨月物語』（1953年）：カメラが人物に寄り添う「ワンシーン・ワンカット（長回し）」の幽玄美。",
            "examples": [
                {
                    "target": "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                    "reading": "くろさわあきらかんとくの 『らしょうもん』は、どういつの じけんが かくしょうげんしゃの りがいや しゅかんによって まったくことなる ものがたりとして かたられる たそうこうぞうによって、せかいの えいがしに かくめいてきてんかんてんを もたらしました。",
                    "translation": "Director Akira Kurosawa's 'Rashomon' brought a revolutionary turning point to world film history through its multi-layered structure where the same incident is narrated as completely different stories according to each witness's interests and subjectivity."
                },
                {
                    "target": "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                    "reading": "おづやすじろうかんとくは、たたみのうえの しせんに こていされた ローアングルと しょうめんきりかえしショットによって、きんだいかぞくの ほうかいと にんげんの こんげんてきこどくを せいひつに えがききりました。",
                    "translation": "Director Yasujiro Ozu serenely depicted the collapse of the modern family and fundamental human loneliness through low angles fixed at the eye level on tatami mats and frontal reverse shots."
                },
                {
                    "target": "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                    "reading": "みぞぐちけんじかんとくが きわめた りゅうれいな ワンシーン・ワンカットの ながまわしさつえいは、ゆうげんな すいぼくがのような えいぞうくうかんと じょせいの すうこうな ひげきせいを そうしゅつしました。",
                    "translation": "The fluid one-scene one-cut long-take cinematography perfected by Director Kenji Mizoguchi created an image space like a mysterious sumi-e ink painting and the sublime tragic nature of women."
                },
                {
                    "target": "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                    "reading": "にほんえいがの おうごんきさくひんは、とうようの せいしんてきでんとうと きんだいえいがぎじゅつの きせきてきな けっしょうとして、げんだいの せかいじゅうの フィルムメーカーに たえまない インスピレーションを あたえつづけています。",
                    "translation": "The masterpiece works of Japanese cinema's golden age, as a miraculous crystallization of Eastern spiritual traditions and modern cinematic technology, continue to impart ceaseless inspiration to filmmakers across the modern world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問25.5.1）。",
                    "options": [
                        "黒澤明監督の『羅生門』は、同一の事件が各証言者の利害や主観によって全く異なる物語として語られる多層構造によって、世界の映画史に革命的転換点をもたらしました。",
                        "国際条約法に反する法的誤謬（25.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（25.5.2）",
                        "外交慣例に悖る修辞的欠陥文（25.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】黒澤明（多角的真実とダイナミズム）、小津安二郎（ローアングルと家族劇）、溝口健二（長回し流麗美）の映画美学（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習25.5）。",
                    "options": [
                        "小津安二郎監督は、畳の上の視線に固定されたローアングルと正面切り返しショットによって、近代家族の崩壊と人間の根源的孤独を静謐に描き切りました。",
                        "対立を無用に煽る不見識な声明文（25.5.x）",
                        "法的拘束力のない不完全な折衝文（25.5.y）",
                        "条約の留保条件を乱用した無効文（25.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u25-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "溝口健二監督が極めた流麗なワンシーン・ワンカットの長回し撮影は、幽玄な水墨画のような映像空間と女性の崇高な悲劇性を創出しました。",
                        "安全保障理事会決議の権能を無視した記述（25.5.a）",
                        "平和維持部隊の法的根拠を欠く文（25.5.b）",
                        "国際司法裁判所の判例に背く記述（25.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画の黄金期・黒澤明と小津安二郎の映像美学（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試25-5）。",
                    "options": [
                        "日本映画の黄金期作品は、東洋の精神的伝統と近代映画技術の奇跡的な結晶として、現代の世界中のフィルムメーカーに絶え間ないインスピレーションを与え続けています。",
                        "条約履行義務を軽視した無効文（25.5.m）",
                        "全権委任状の要件を欠く不備文（25.5.n）",
                        "寄託手続きの誤謬文（25.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u25-l5）の主要外交用語を入力してください（「黒澤明監」）：",
                    "acceptedAnswers": [
                        "黒澤明監",
                        "黒澤明監督の"
                    ],
                    "explanation": "正解の外交用語は「黒澤明監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l1": {
        "id": "ja-u26-l1",
        "subject": "japanese",
        "unit": 26,
        "lessonNumber": 1,
        "title": "日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第1部）",
        "level": "C1",
        "objective": "世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第1部）。",
        "presentation": {
            "explanation": "第二十六単元第1課では、ユネスコ世界無形文化遺産に登録された日本の三大伝統舞台芸術（能楽・歌舞伎・文楽）の美学的本質と身体表現様式を学びます。\n\n【伝統三大舞台芸術の概要】\n１．能楽：室町時代に観阿弥・世阿弥父子により大成。主著『風姿花伝』。「秘すれば花」「初心忘るるべからず」。能面の角度による幽玄美。\n２．歌舞伎：江戸時代に出雲阿国の歌舞伎踊りから発祥。「見得（みえ）」の彫像的静止、血管を強調する「隈取（くまどり）」、男性が演じる「女形（おんながた）」の抽象美。\n３．文楽（人形浄瑠璃）：太夫の語り、三味線、そして主遣い・左遣い・足遣いによる「三人遣い」の精緻な操法。",
            "examples": [
                {
                    "target": "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                    "reading": "ぜあみは 『ふうしかでん』において 「ひすれば はなを しるべし、ひせずは はななるべからず」と とき、かんきゃくの そうぞうりょくを かんきする ゆうげんの げいどうを かくりつしました。",
                    "translation": "In the 'Fushikaden', Zeami expounded 'If it is hidden, it is the flower; if it is not hidden, it cannot be the flower', establishing an aesthetic path of yugen that awakens the audience's imagination."
                },
                {
                    "target": "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                    "reading": "かぶきの ぶたいにおいて、めいゆうが クライマックスで みえをきると、おおむこうから やごうを よぶ いせいのよい かけごえが げきじょうじゅうに ひびきわたります。",
                    "translation": "On the Kabuki stage, when a master actor cuts a mie pose at the climax, vigorous shouts calling the actor's guild name echo throughout the theatre from the upper gallery."
                },
                {
                    "target": "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                    "reading": "ぶんらくの さんにんづかいの こうどな ぎじゅつは、おもづかい、ひだりづかい、あしづかいが こきゅうを かんぜんに どうきさせることによって、いったいの にんぎょうに ちのかよった にんげんいじょうの じょうねんを ふきこみます。",
                    "translation": "The sophisticated technique of Bunraku's three-person manipulation, through complete synchronization of breath among the head puppeteer, left-arm puppeteer, and foot puppeteer, breathes passion beyond living humans into a single puppet."
                },
                {
                    "target": "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                    "reading": "にほんの でんとうぶたいげいじゅつは、きょくげんまで みがきぬかれた かたの けいしょうをつうじて、じだいと くうかんを ちょうえつした ふへんてきな せいしんびを げんだいに つたえています。",
                    "translation": "Traditional Japanese stage arts, through the transmission of forms (Kata) polished to the ultimate limit, convey universal spiritual beauty transcending time and space to the modern day."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問26.1.1）。",
                    "options": [
                        "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                        "国際条約法に反する法的誤謬（26.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（26.1.2）",
                        "外交慣例に悖る修辞的欠陥文（26.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習26.1）。",
                    "options": [
                        "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                        "対立を無用に煽る不見識な声明文（26.1.x）",
                        "法的拘束力のない不完全な折衝文（26.1.y）",
                        "条約の留保条件を乱用した無効文（26.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u26-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                        "安全保障理事会決議の権能を無視した記述（26.1.a）",
                        "平和維持部隊の法的根拠を欠く文（26.1.b）",
                        "国際司法裁判所の判例に背く記述（26.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試26-1）。",
                    "options": [
                        "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                        "条約履行義務を軽視した無効文（26.1.m）",
                        "全権委任状の要件を欠く不備文（26.1.n）",
                        "寄託手続きの誤謬文（26.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u26-l1）の主要外交用語を入力してください（「世阿弥は」）：",
                    "acceptedAnswers": [
                        "世阿弥は",
                        "世阿弥は『風"
                    ],
                    "explanation": "正解の外交用語は「世阿弥は」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l2": {
        "id": "ja-u26-l2",
        "subject": "japanese",
        "unit": 26,
        "lessonNumber": 2,
        "title": "日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第2部）",
        "level": "C1",
        "objective": "世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第2部）。",
        "presentation": {
            "explanation": "第二十六単元第2課では、ユネスコ世界無形文化遺産に登録された日本の三大伝統舞台芸術（能楽・歌舞伎・文楽）の美学的本質と身体表現様式を学びます。\n\n【伝統三大舞台芸術の概要】\n１．能楽：室町時代に観阿弥・世阿弥父子により大成。主著『風姿花伝』。「秘すれば花」「初心忘るるべからず」。能面の角度による幽玄美。\n２．歌舞伎：江戸時代に出雲阿国の歌舞伎踊りから発祥。「見得（みえ）」の彫像的静止、血管を強調する「隈取（くまどり）」、男性が演じる「女形（おんながた）」の抽象美。\n３．文楽（人形浄瑠璃）：太夫の語り、三味線、そして主遣い・左遣い・足遣いによる「三人遣い」の精緻な操法。",
            "examples": [
                {
                    "target": "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                    "reading": "ぜあみは 『ふうしかでん』において 「ひすれば はなを しるべし、ひせずは はななるべからず」と とき、かんきゃくの そうぞうりょくを かんきする ゆうげんの げいどうを かくりつしました。",
                    "translation": "In the 'Fushikaden', Zeami expounded 'If it is hidden, it is the flower; if it is not hidden, it cannot be the flower', establishing an aesthetic path of yugen that awakens the audience's imagination."
                },
                {
                    "target": "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                    "reading": "かぶきの ぶたいにおいて、めいゆうが クライマックスで みえをきると、おおむこうから やごうを よぶ いせいのよい かけごえが げきじょうじゅうに ひびきわたります。",
                    "translation": "On the Kabuki stage, when a master actor cuts a mie pose at the climax, vigorous shouts calling the actor's guild name echo throughout the theatre from the upper gallery."
                },
                {
                    "target": "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                    "reading": "ぶんらくの さんにんづかいの こうどな ぎじゅつは、おもづかい、ひだりづかい、あしづかいが こきゅうを かんぜんに どうきさせることによって、いったいの にんぎょうに ちのかよった にんげんいじょうの じょうねんを ふきこみます。",
                    "translation": "The sophisticated technique of Bunraku's three-person manipulation, through complete synchronization of breath among the head puppeteer, left-arm puppeteer, and foot puppeteer, breathes passion beyond living humans into a single puppet."
                },
                {
                    "target": "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                    "reading": "にほんの でんとうぶたいげいじゅつは、きょくげんまで みがきぬかれた かたの けいしょうをつうじて、じだいと くうかんを ちょうえつした ふへんてきな せいしんびを げんだいに つたえています。",
                    "translation": "Traditional Japanese stage arts, through the transmission of forms (Kata) polished to the ultimate limit, convey universal spiritual beauty transcending time and space to the modern day."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問26.2.1）。",
                    "options": [
                        "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                        "国際条約法に反する法的誤謬（26.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（26.2.2）",
                        "外交慣例に悖る修辞的欠陥文（26.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習26.2）。",
                    "options": [
                        "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                        "対立を無用に煽る不見識な声明文（26.2.x）",
                        "法的拘束力のない不完全な折衝文（26.2.y）",
                        "条約の留保条件を乱用した無効文（26.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u26-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                        "安全保障理事会決議の権能を無視した記述（26.2.a）",
                        "平和維持部隊の法的根拠を欠く文（26.2.b）",
                        "国際司法裁判所の判例に背く記述（26.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試26-2）。",
                    "options": [
                        "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                        "条約履行義務を軽視した無効文（26.2.m）",
                        "全権委任状の要件を欠く不備文（26.2.n）",
                        "寄託手続きの誤謬文（26.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u26-l2）の主要外交用語を入力してください（「世阿弥は」）：",
                    "acceptedAnswers": [
                        "世阿弥は",
                        "世阿弥は『風"
                    ],
                    "explanation": "正解の外交用語は「世阿弥は」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l3": {
        "id": "ja-u26-l3",
        "subject": "japanese",
        "unit": 26,
        "lessonNumber": 3,
        "title": "日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第3部）",
        "level": "C1",
        "objective": "世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第3部）。",
        "presentation": {
            "explanation": "第二十六単元第3課では、ユネスコ世界無形文化遺産に登録された日本の三大伝統舞台芸術（能楽・歌舞伎・文楽）の美学的本質と身体表現様式を学びます。\n\n【伝統三大舞台芸術の概要】\n１．能楽：室町時代に観阿弥・世阿弥父子により大成。主著『風姿花伝』。「秘すれば花」「初心忘るるべからず」。能面の角度による幽玄美。\n２．歌舞伎：江戸時代に出雲阿国の歌舞伎踊りから発祥。「見得（みえ）」の彫像的静止、血管を強調する「隈取（くまどり）」、男性が演じる「女形（おんながた）」の抽象美。\n３．文楽（人形浄瑠璃）：太夫の語り、三味線、そして主遣い・左遣い・足遣いによる「三人遣い」の精緻な操法。",
            "examples": [
                {
                    "target": "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                    "reading": "ぜあみは 『ふうしかでん』において 「ひすれば はなを しるべし、ひせずは はななるべからず」と とき、かんきゃくの そうぞうりょくを かんきする ゆうげんの げいどうを かくりつしました。",
                    "translation": "In the 'Fushikaden', Zeami expounded 'If it is hidden, it is the flower; if it is not hidden, it cannot be the flower', establishing an aesthetic path of yugen that awakens the audience's imagination."
                },
                {
                    "target": "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                    "reading": "かぶきの ぶたいにおいて、めいゆうが クライマックスで みえをきると、おおむこうから やごうを よぶ いせいのよい かけごえが げきじょうじゅうに ひびきわたります。",
                    "translation": "On the Kabuki stage, when a master actor cuts a mie pose at the climax, vigorous shouts calling the actor's guild name echo throughout the theatre from the upper gallery."
                },
                {
                    "target": "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                    "reading": "ぶんらくの さんにんづかいの こうどな ぎじゅつは、おもづかい、ひだりづかい、あしづかいが こきゅうを かんぜんに どうきさせることによって、いったいの にんぎょうに ちのかよった にんげんいじょうの じょうねんを ふきこみます。",
                    "translation": "The sophisticated technique of Bunraku's three-person manipulation, through complete synchronization of breath among the head puppeteer, left-arm puppeteer, and foot puppeteer, breathes passion beyond living humans into a single puppet."
                },
                {
                    "target": "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                    "reading": "にほんの でんとうぶたいげいじゅつは、きょくげんまで みがきぬかれた かたの けいしょうをつうじて、じだいと くうかんを ちょうえつした ふへんてきな せいしんびを げんだいに つたえています。",
                    "translation": "Traditional Japanese stage arts, through the transmission of forms (Kata) polished to the ultimate limit, convey universal spiritual beauty transcending time and space to the modern day."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問26.3.1）。",
                    "options": [
                        "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                        "国際条約法に反する法的誤謬（26.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（26.3.2）",
                        "外交慣例に悖る修辞的欠陥文（26.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習26.3）。",
                    "options": [
                        "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                        "対立を無用に煽る不見識な声明文（26.3.x）",
                        "法的拘束力のない不完全な折衝文（26.3.y）",
                        "条約の留保条件を乱用した無効文（26.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u26-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                        "安全保障理事会決議の権能を無視した記述（26.3.a）",
                        "平和維持部隊の法的根拠を欠く文（26.3.b）",
                        "国際司法裁判所の判例に背く記述（26.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試26-3）。",
                    "options": [
                        "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                        "条約履行義務を軽視した無効文（26.3.m）",
                        "全権委任状の要件を欠く不備文（26.3.n）",
                        "寄託手続きの誤謬文（26.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u26-l3）の主要外交用語を入力してください（「世阿弥は」）：",
                    "acceptedAnswers": [
                        "世阿弥は",
                        "世阿弥は『風"
                    ],
                    "explanation": "正解の外交用語は「世阿弥は」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l4": {
        "id": "ja-u26-l4",
        "subject": "japanese",
        "unit": 26,
        "lessonNumber": 4,
        "title": "日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第4部）",
        "level": "C1",
        "objective": "世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第4部）。",
        "presentation": {
            "explanation": "第二十六単元第4課では、ユネスコ世界無形文化遺産に登録された日本の三大伝統舞台芸術（能楽・歌舞伎・文楽）の美学的本質と身体表現様式を学びます。\n\n【伝統三大舞台芸術の概要】\n１．能楽：室町時代に観阿弥・世阿弥父子により大成。主著『風姿花伝』。「秘すれば花」「初心忘るるべからず」。能面の角度による幽玄美。\n２．歌舞伎：江戸時代に出雲阿国の歌舞伎踊りから発祥。「見得（みえ）」の彫像的静止、血管を強調する「隈取（くまどり）」、男性が演じる「女形（おんながた）」の抽象美。\n３．文楽（人形浄瑠璃）：太夫の語り、三味線、そして主遣い・左遣い・足遣いによる「三人遣い」の精緻な操法。",
            "examples": [
                {
                    "target": "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                    "reading": "ぜあみは 『ふうしかでん』において 「ひすれば はなを しるべし、ひせずは はななるべからず」と とき、かんきゃくの そうぞうりょくを かんきする ゆうげんの げいどうを かくりつしました。",
                    "translation": "In the 'Fushikaden', Zeami expounded 'If it is hidden, it is the flower; if it is not hidden, it cannot be the flower', establishing an aesthetic path of yugen that awakens the audience's imagination."
                },
                {
                    "target": "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                    "reading": "かぶきの ぶたいにおいて、めいゆうが クライマックスで みえをきると、おおむこうから やごうを よぶ いせいのよい かけごえが げきじょうじゅうに ひびきわたります。",
                    "translation": "On the Kabuki stage, when a master actor cuts a mie pose at the climax, vigorous shouts calling the actor's guild name echo throughout the theatre from the upper gallery."
                },
                {
                    "target": "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                    "reading": "ぶんらくの さんにんづかいの こうどな ぎじゅつは、おもづかい、ひだりづかい、あしづかいが こきゅうを かんぜんに どうきさせることによって、いったいの にんぎょうに ちのかよった にんげんいじょうの じょうねんを ふきこみます。",
                    "translation": "The sophisticated technique of Bunraku's three-person manipulation, through complete synchronization of breath among the head puppeteer, left-arm puppeteer, and foot puppeteer, breathes passion beyond living humans into a single puppet."
                },
                {
                    "target": "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                    "reading": "にほんの でんとうぶたいげいじゅつは、きょくげんまで みがきぬかれた かたの けいしょうをつうじて、じだいと くうかんを ちょうえつした ふへんてきな せいしんびを げんだいに つたえています。",
                    "translation": "Traditional Japanese stage arts, through the transmission of forms (Kata) polished to the ultimate limit, convey universal spiritual beauty transcending time and space to the modern day."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問26.4.1）。",
                    "options": [
                        "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                        "国際条約法に反する法的誤謬（26.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（26.4.2）",
                        "外交慣例に悖る修辞的欠陥文（26.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習26.4）。",
                    "options": [
                        "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                        "対立を無用に煽る不見識な声明文（26.4.x）",
                        "法的拘束力のない不完全な折衝文（26.4.y）",
                        "条約の留保条件を乱用した無効文（26.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u26-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                        "安全保障理事会決議の権能を無視した記述（26.4.a）",
                        "平和維持部隊の法的根拠を欠く文（26.4.b）",
                        "国際司法裁判所の判例に背く記述（26.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試26-4）。",
                    "options": [
                        "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                        "条約履行義務を軽視した無効文（26.4.m）",
                        "全権委任状の要件を欠く不備文（26.4.n）",
                        "寄託手続きの誤謬文（26.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u26-l4）の主要外交用語を入力してください（「世阿弥は」）：",
                    "acceptedAnswers": [
                        "世阿弥は",
                        "世阿弥は『風"
                    ],
                    "explanation": "正解の外交用語は「世阿弥は」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u26-l5": {
        "id": "ja-u26-l5",
        "subject": "japanese",
        "unit": 26,
        "lessonNumber": 5,
        "title": "日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第5部）",
        "level": "C1",
        "objective": "世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第5部）。",
        "presentation": {
            "explanation": "第二十六単元第5課では、ユネスコ世界無形文化遺産に登録された日本の三大伝統舞台芸術（能楽・歌舞伎・文楽）の美学的本質と身体表現様式を学びます。\n\n【伝統三大舞台芸術の概要】\n１．能楽：室町時代に観阿弥・世阿弥父子により大成。主著『風姿花伝』。「秘すれば花」「初心忘るるべからず」。能面の角度による幽玄美。\n２．歌舞伎：江戸時代に出雲阿国の歌舞伎踊りから発祥。「見得（みえ）」の彫像的静止、血管を強調する「隈取（くまどり）」、男性が演じる「女形（おんながた）」の抽象美。\n３．文楽（人形浄瑠璃）：太夫の語り、三味線、そして主遣い・左遣い・足遣いによる「三人遣い」の精緻な操法。",
            "examples": [
                {
                    "target": "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                    "reading": "ぜあみは 『ふうしかでん』において 「ひすれば はなを しるべし、ひせずは はななるべからず」と とき、かんきゃくの そうぞうりょくを かんきする ゆうげんの げいどうを かくりつしました。",
                    "translation": "In the 'Fushikaden', Zeami expounded 'If it is hidden, it is the flower; if it is not hidden, it cannot be the flower', establishing an aesthetic path of yugen that awakens the audience's imagination."
                },
                {
                    "target": "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                    "reading": "かぶきの ぶたいにおいて、めいゆうが クライマックスで みえをきると、おおむこうから やごうを よぶ いせいのよい かけごえが げきじょうじゅうに ひびきわたります。",
                    "translation": "On the Kabuki stage, when a master actor cuts a mie pose at the climax, vigorous shouts calling the actor's guild name echo throughout the theatre from the upper gallery."
                },
                {
                    "target": "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                    "reading": "ぶんらくの さんにんづかいの こうどな ぎじゅつは、おもづかい、ひだりづかい、あしづかいが こきゅうを かんぜんに どうきさせることによって、いったいの にんぎょうに ちのかよった にんげんいじょうの じょうねんを ふきこみます。",
                    "translation": "The sophisticated technique of Bunraku's three-person manipulation, through complete synchronization of breath among the head puppeteer, left-arm puppeteer, and foot puppeteer, breathes passion beyond living humans into a single puppet."
                },
                {
                    "target": "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                    "reading": "にほんの でんとうぶたいげいじゅつは、きょくげんまで みがきぬかれた かたの けいしょうをつうじて、じだいと くうかんを ちょうえつした ふへんてきな せいしんびを げんだいに つたえています。",
                    "translation": "Traditional Japanese stage arts, through the transmission of forms (Kata) polished to the ultimate limit, convey universal spiritual beauty transcending time and space to the modern day."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問26.5.1）。",
                    "options": [
                        "世阿弥は『風姿花伝』において「秘すれば花を知るべし、秘せずは花なるべからず」と説き、観客の想像力を喚起する幽玄の芸道を確立しました。",
                        "国際条約法に反する法的誤謬（26.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（26.5.2）",
                        "外交慣例に悖る修辞的欠陥文（26.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の能楽美学『風姿花伝』、歌舞伎の様式美（隈取・見得・女形）、文楽の人形操法（三人遣い）の習得（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習26.5）。",
                    "options": [
                        "歌舞伎の舞台において、名優がクライマックスで見得を切ると、大向こうから屋号を呼ぶ威勢の良い掛け声が劇場中に響き渡ります。",
                        "対立を無用に煽る不見識な声明文（26.5.x）",
                        "法的拘束力のない不完全な折衝文（26.5.y）",
                        "条約の留保条件を乱用した無効文（26.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u26-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "文楽の三人遣いの高度な技術は、主遣い、左遣い、足遣いが呼吸を完全に同期させることによって、一体の人形に血の通った人間以上の情念を吹き込みます。",
                        "安全保障理事会決議の権能を無視した記述（26.5.a）",
                        "平和維持部隊の法的根拠を欠く文（26.5.b）",
                        "国際司法裁判所の判例に背く記述（26.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の伝統舞台芸術：能楽・歌舞伎・文楽の様式美（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試26-5）。",
                    "options": [
                        "日本の伝統舞台芸術は、極限まで磨き抜かれた型（Kata）の継承を通じて、時代と空間を超越した普遍的な精神美を現代に伝えています。",
                        "条約履行義務を軽視した無効文（26.5.m）",
                        "全権委任状の要件を欠く不備文（26.5.n）",
                        "寄託手続きの誤謬文（26.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u26-l5）の主要外交用語を入力してください（「世阿弥は」）：",
                    "acceptedAnswers": [
                        "世阿弥は",
                        "世阿弥は『風"
                    ],
                    "explanation": "正解の外交用語は「世阿弥は」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l1": {
        "id": "ja-u27-l1",
        "subject": "japanese",
        "unit": 27,
        "lessonNumber": 1,
        "title": "日本近代声楽・オペラと日本語 prosody の音楽的調和（第1部）",
        "level": "C1",
        "objective": "山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第1部）。",
        "presentation": {
            "explanation": "第二十七単元第1課では、西洋近代音楽の形式（オペラ・歌曲）と日本語の音韻構造（高低アクセント・母音の純粋性）を融合させた近代声楽運動を学びます。\n\n【近代日本音楽の先駆者たち】\n１．山田耕筰（1886–1965）：『赤とんぼ』『からたちの花』。「日本語の高低アクセントと旋律の完全一致」を提唱。\n２．團伊玖磨（1924–2001）：国民的オペラ『夕鶴』（1952年・ヒロイン「つう」の純真な愛と悲劇）。世界各国で800回以上上演された金字塔。\n３．細川俊夫（1955–）：能楽の精神構造と前衛管弦楽を融合させた現代オペラ『松風』『班女』で世界主要歌劇場を席巻。",
            "examples": [
                {
                    "target": "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                    "reading": "やまだこうさくは、にほんごの もつ こうていアクセントと しぜんな イントネーションを せいようの せんりつせんと せいちに いっちさせる かっきてきな かきょくさっきょくぎじゅつを そうししました。",
                    "translation": "Kosaku Yamada initiated an epoch-making vocal composition technique that precisely aligned the pitch accent and natural intonation of the Japanese language with Western melodic lines."
                },
                {
                    "target": "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                    "reading": "だんいくまの オペラ 『ゆうづる』における ヒロイン・つうのアリア 「わたしのだいじなよひょう」は、にほんの みんわてきじょうねんと かれいな かんげんがくほうが みごとに ちょうわした ふきゅうの めいさくです。",
                    "translation": "The heroine Tsu's aria 'My Precious Yohyo' in Ikuma Dan's opera 'Yuzuru' is an immortal masterpiece where Japanese folkloric pathos and splendid orchestration harmonize magnificently."
                },
                {
                    "target": "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                    "reading": "しんこくりつげきじょうの オペラげきじょうは、せかいトップレベルの おんきょうせっけいと ぶたいきこうを そなえ、こくないがいの さいこうほうの オペラ・バレエこうえんを ねんかんをつうじて はっしんしています。",
                    "translation": "The Opera House of the New National Theatre Tokyo is equipped with world-class acoustic design and stage machinery, broadcasting the highest peaks of domestic and international opera and ballet performances throughout the year."
                },
                {
                    "target": "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                    "reading": "ほそかわとしおの げんだいオペラは、せいじゃくと おとの せいせいしょうめつの プロセスを のうがくの れいてきくうかんとして とらえ、おうしゅうの オペラかいにおいて きわめて たかい ひょうかを かくりつしています。",
                    "translation": "Toshio Hosokawa's contemporary operas perceive the process of generation and extinction between silence and sound as Noh's spiritual space, establishing an extremely high evaluation in the European opera world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本近代声楽・オペラと日本語 prosody の音楽的調和（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問27.1.1）。",
                    "options": [
                        "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                        "国際条約法に反する法的誤謬（27.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（27.1.2）",
                        "外交慣例に悖る修辞的欠陥文（27.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本近代声楽・オペラと日本語 prosody の音楽的調和（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習27.1）。",
                    "options": [
                        "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                        "対立を無用に煽る不見識な声明文（27.1.x）",
                        "法的拘束力のない不完全な折衝文（27.1.y）",
                        "条約の留保条件を乱用した無効文（27.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u27-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                        "安全保障理事会決議の権能を無視した記述（27.1.a）",
                        "平和維持部隊の法的根拠を欠く文（27.1.b）",
                        "国際司法裁判所の判例に背く記述（27.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本近代声楽・オペラと日本語 prosody の音楽的調和（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試27-1）。",
                    "options": [
                        "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                        "条約履行義務を軽視した無効文（27.1.m）",
                        "全権委任状の要件を欠く不備文（27.1.n）",
                        "寄託手続きの誤謬文（27.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u27-l1）の主要外交用語を入力してください（「山田耕筰」）：",
                    "acceptedAnswers": [
                        "山田耕筰",
                        "山田耕筰は、"
                    ],
                    "explanation": "正解の外交用語は「山田耕筰」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l2": {
        "id": "ja-u27-l2",
        "subject": "japanese",
        "unit": 27,
        "lessonNumber": 2,
        "title": "日本近代声楽・オペラと日本語 prosody の音楽的調和（第2部）",
        "level": "C1",
        "objective": "山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第2部）。",
        "presentation": {
            "explanation": "第二十七単元第2課では、西洋近代音楽の形式（オペラ・歌曲）と日本語の音韻構造（高低アクセント・母音の純粋性）を融合させた近代声楽運動を学びます。\n\n【近代日本音楽の先駆者たち】\n１．山田耕筰（1886–1965）：『赤とんぼ』『からたちの花』。「日本語の高低アクセントと旋律の完全一致」を提唱。\n２．團伊玖磨（1924–2001）：国民的オペラ『夕鶴』（1952年・ヒロイン「つう」の純真な愛と悲劇）。世界各国で800回以上上演された金字塔。\n３．細川俊夫（1955–）：能楽の精神構造と前衛管弦楽を融合させた現代オペラ『松風』『班女』で世界主要歌劇場を席巻。",
            "examples": [
                {
                    "target": "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                    "reading": "やまだこうさくは、にほんごの もつ こうていアクセントと しぜんな イントネーションを せいようの せんりつせんと せいちに いっちさせる かっきてきな かきょくさっきょくぎじゅつを そうししました。",
                    "translation": "Kosaku Yamada initiated an epoch-making vocal composition technique that precisely aligned the pitch accent and natural intonation of the Japanese language with Western melodic lines."
                },
                {
                    "target": "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                    "reading": "だんいくまの オペラ 『ゆうづる』における ヒロイン・つうのアリア 「わたしのだいじなよひょう」は、にほんの みんわてきじょうねんと かれいな かんげんがくほうが みごとに ちょうわした ふきゅうの めいさくです。",
                    "translation": "The heroine Tsu's aria 'My Precious Yohyo' in Ikuma Dan's opera 'Yuzuru' is an immortal masterpiece where Japanese folkloric pathos and splendid orchestration harmonize magnificently."
                },
                {
                    "target": "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                    "reading": "しんこくりつげきじょうの オペラげきじょうは、せかいトップレベルの おんきょうせっけいと ぶたいきこうを そなえ、こくないがいの さいこうほうの オペラ・バレエこうえんを ねんかんをつうじて はっしんしています。",
                    "translation": "The Opera House of the New National Theatre Tokyo is equipped with world-class acoustic design and stage machinery, broadcasting the highest peaks of domestic and international opera and ballet performances throughout the year."
                },
                {
                    "target": "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                    "reading": "ほそかわとしおの げんだいオペラは、せいじゃくと おとの せいせいしょうめつの プロセスを のうがくの れいてきくうかんとして とらえ、おうしゅうの オペラかいにおいて きわめて たかい ひょうかを かくりつしています。",
                    "translation": "Toshio Hosokawa's contemporary operas perceive the process of generation and extinction between silence and sound as Noh's spiritual space, establishing an extremely high evaluation in the European opera world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本近代声楽・オペラと日本語 prosody の音楽的調和（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問27.2.1）。",
                    "options": [
                        "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                        "国際条約法に反する法的誤謬（27.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（27.2.2）",
                        "外交慣例に悖る修辞的欠陥文（27.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本近代声楽・オペラと日本語 prosody の音楽的調和（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習27.2）。",
                    "options": [
                        "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                        "対立を無用に煽る不見識な声明文（27.2.x）",
                        "法的拘束力のない不完全な折衝文（27.2.y）",
                        "条約の留保条件を乱用した無効文（27.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u27-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                        "安全保障理事会決議の権能を無視した記述（27.2.a）",
                        "平和維持部隊の法的根拠を欠く文（27.2.b）",
                        "国際司法裁判所の判例に背く記述（27.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本近代声楽・オペラと日本語 prosody の音楽的調和（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試27-2）。",
                    "options": [
                        "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                        "条約履行義務を軽視した無効文（27.2.m）",
                        "全権委任状の要件を欠く不備文（27.2.n）",
                        "寄託手続きの誤謬文（27.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u27-l2）の主要外交用語を入力してください（「山田耕筰」）：",
                    "acceptedAnswers": [
                        "山田耕筰",
                        "山田耕筰は、"
                    ],
                    "explanation": "正解の外交用語は「山田耕筰」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l3": {
        "id": "ja-u27-l3",
        "subject": "japanese",
        "unit": 27,
        "lessonNumber": 3,
        "title": "日本近代声楽・オペラと日本語 prosody の音楽的調和（第3部）",
        "level": "C1",
        "objective": "山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第3部）。",
        "presentation": {
            "explanation": "第二十七単元第3課では、西洋近代音楽の形式（オペラ・歌曲）と日本語の音韻構造（高低アクセント・母音の純粋性）を融合させた近代声楽運動を学びます。\n\n【近代日本音楽の先駆者たち】\n１．山田耕筰（1886–1965）：『赤とんぼ』『からたちの花』。「日本語の高低アクセントと旋律の完全一致」を提唱。\n２．團伊玖磨（1924–2001）：国民的オペラ『夕鶴』（1952年・ヒロイン「つう」の純真な愛と悲劇）。世界各国で800回以上上演された金字塔。\n３．細川俊夫（1955–）：能楽の精神構造と前衛管弦楽を融合させた現代オペラ『松風』『班女』で世界主要歌劇場を席巻。",
            "examples": [
                {
                    "target": "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                    "reading": "やまだこうさくは、にほんごの もつ こうていアクセントと しぜんな イントネーションを せいようの せんりつせんと せいちに いっちさせる かっきてきな かきょくさっきょくぎじゅつを そうししました。",
                    "translation": "Kosaku Yamada initiated an epoch-making vocal composition technique that precisely aligned the pitch accent and natural intonation of the Japanese language with Western melodic lines."
                },
                {
                    "target": "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                    "reading": "だんいくまの オペラ 『ゆうづる』における ヒロイン・つうのアリア 「わたしのだいじなよひょう」は、にほんの みんわてきじょうねんと かれいな かんげんがくほうが みごとに ちょうわした ふきゅうの めいさくです。",
                    "translation": "The heroine Tsu's aria 'My Precious Yohyo' in Ikuma Dan's opera 'Yuzuru' is an immortal masterpiece where Japanese folkloric pathos and splendid orchestration harmonize magnificently."
                },
                {
                    "target": "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                    "reading": "しんこくりつげきじょうの オペラげきじょうは、せかいトップレベルの おんきょうせっけいと ぶたいきこうを そなえ、こくないがいの さいこうほうの オペラ・バレエこうえんを ねんかんをつうじて はっしんしています。",
                    "translation": "The Opera House of the New National Theatre Tokyo is equipped with world-class acoustic design and stage machinery, broadcasting the highest peaks of domestic and international opera and ballet performances throughout the year."
                },
                {
                    "target": "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                    "reading": "ほそかわとしおの げんだいオペラは、せいじゃくと おとの せいせいしょうめつの プロセスを のうがくの れいてきくうかんとして とらえ、おうしゅうの オペラかいにおいて きわめて たかい ひょうかを かくりつしています。",
                    "translation": "Toshio Hosokawa's contemporary operas perceive the process of generation and extinction between silence and sound as Noh's spiritual space, establishing an extremely high evaluation in the European opera world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本近代声楽・オペラと日本語 prosody の音楽的調和（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問27.3.1）。",
                    "options": [
                        "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                        "国際条約法に反する法的誤謬（27.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（27.3.2）",
                        "外交慣例に悖る修辞的欠陥文（27.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本近代声楽・オペラと日本語 prosody の音楽的調和（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習27.3）。",
                    "options": [
                        "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                        "対立を無用に煽る不見識な声明文（27.3.x）",
                        "法的拘束力のない不完全な折衝文（27.3.y）",
                        "条約の留保条件を乱用した無効文（27.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u27-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                        "安全保障理事会決議の権能を無視した記述（27.3.a）",
                        "平和維持部隊の法的根拠を欠く文（27.3.b）",
                        "国際司法裁判所の判例に背く記述（27.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本近代声楽・オペラと日本語 prosody の音楽的調和（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試27-3）。",
                    "options": [
                        "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                        "条約履行義務を軽視した無効文（27.3.m）",
                        "全権委任状の要件を欠く不備文（27.3.n）",
                        "寄託手続きの誤謬文（27.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u27-l3）の主要外交用語を入力してください（「山田耕筰」）：",
                    "acceptedAnswers": [
                        "山田耕筰",
                        "山田耕筰は、"
                    ],
                    "explanation": "正解の外交用語は「山田耕筰」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l4": {
        "id": "ja-u27-l4",
        "subject": "japanese",
        "unit": 27,
        "lessonNumber": 4,
        "title": "日本近代声楽・オペラと日本語 prosody の音楽的調和（第4部）",
        "level": "C1",
        "objective": "山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第4部）。",
        "presentation": {
            "explanation": "第二十七単元第4課では、西洋近代音楽の形式（オペラ・歌曲）と日本語の音韻構造（高低アクセント・母音の純粋性）を融合させた近代声楽運動を学びます。\n\n【近代日本音楽の先駆者たち】\n１．山田耕筰（1886–1965）：『赤とんぼ』『からたちの花』。「日本語の高低アクセントと旋律の完全一致」を提唱。\n２．團伊玖磨（1924–2001）：国民的オペラ『夕鶴』（1952年・ヒロイン「つう」の純真な愛と悲劇）。世界各国で800回以上上演された金字塔。\n３．細川俊夫（1955–）：能楽の精神構造と前衛管弦楽を融合させた現代オペラ『松風』『班女』で世界主要歌劇場を席巻。",
            "examples": [
                {
                    "target": "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                    "reading": "やまだこうさくは、にほんごの もつ こうていアクセントと しぜんな イントネーションを せいようの せんりつせんと せいちに いっちさせる かっきてきな かきょくさっきょくぎじゅつを そうししました。",
                    "translation": "Kosaku Yamada initiated an epoch-making vocal composition technique that precisely aligned the pitch accent and natural intonation of the Japanese language with Western melodic lines."
                },
                {
                    "target": "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                    "reading": "だんいくまの オペラ 『ゆうづる』における ヒロイン・つうのアリア 「わたしのだいじなよひょう」は、にほんの みんわてきじょうねんと かれいな かんげんがくほうが みごとに ちょうわした ふきゅうの めいさくです。",
                    "translation": "The heroine Tsu's aria 'My Precious Yohyo' in Ikuma Dan's opera 'Yuzuru' is an immortal masterpiece where Japanese folkloric pathos and splendid orchestration harmonize magnificently."
                },
                {
                    "target": "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                    "reading": "しんこくりつげきじょうの オペラげきじょうは、せかいトップレベルの おんきょうせっけいと ぶたいきこうを そなえ、こくないがいの さいこうほうの オペラ・バレエこうえんを ねんかんをつうじて はっしんしています。",
                    "translation": "The Opera House of the New National Theatre Tokyo is equipped with world-class acoustic design and stage machinery, broadcasting the highest peaks of domestic and international opera and ballet performances throughout the year."
                },
                {
                    "target": "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                    "reading": "ほそかわとしおの げんだいオペラは、せいじゃくと おとの せいせいしょうめつの プロセスを のうがくの れいてきくうかんとして とらえ、おうしゅうの オペラかいにおいて きわめて たかい ひょうかを かくりつしています。",
                    "translation": "Toshio Hosokawa's contemporary operas perceive the process of generation and extinction between silence and sound as Noh's spiritual space, establishing an extremely high evaluation in the European opera world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本近代声楽・オペラと日本語 prosody の音楽的調和（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問27.4.1）。",
                    "options": [
                        "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                        "国際条約法に反する法的誤謬（27.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（27.4.2）",
                        "外交慣例に悖る修辞的欠陥文（27.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本近代声楽・オペラと日本語 prosody の音楽的調和（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習27.4）。",
                    "options": [
                        "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                        "対立を無用に煽る不見識な声明文（27.4.x）",
                        "法的拘束力のない不完全な折衝文（27.4.y）",
                        "条約の留保条件を乱用した無効文（27.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u27-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                        "安全保障理事会決議の権能を無視した記述（27.4.a）",
                        "平和維持部隊の法的根拠を欠く文（27.4.b）",
                        "国際司法裁判所の判例に背く記述（27.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本近代声楽・オペラと日本語 prosody の音楽的調和（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試27-4）。",
                    "options": [
                        "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                        "条約履行義務を軽視した無効文（27.4.m）",
                        "全権委任状の要件を欠く不備文（27.4.n）",
                        "寄託手続きの誤謬文（27.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u27-l4）の主要外交用語を入力してください（「山田耕筰」）：",
                    "acceptedAnswers": [
                        "山田耕筰",
                        "山田耕筰は、"
                    ],
                    "explanation": "正解の外交用語は「山田耕筰」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u27-l5": {
        "id": "ja-u27-l5",
        "subject": "japanese",
        "unit": 27,
        "lessonNumber": 5,
        "title": "日本近代声楽・オペラと日本語 prosody の音楽的調和（第5部）",
        "level": "C1",
        "objective": "山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第5部）。",
        "presentation": {
            "explanation": "第二十七単元第5課では、西洋近代音楽の形式（オペラ・歌曲）と日本語の音韻構造（高低アクセント・母音の純粋性）を融合させた近代声楽運動を学びます。\n\n【近代日本音楽の先駆者たち】\n１．山田耕筰（1886–1965）：『赤とんぼ』『からたちの花』。「日本語の高低アクセントと旋律の完全一致」を提唱。\n２．團伊玖磨（1924–2001）：国民的オペラ『夕鶴』（1952年・ヒロイン「つう」の純真な愛と悲劇）。世界各国で800回以上上演された金字塔。\n３．細川俊夫（1955–）：能楽の精神構造と前衛管弦楽を融合させた現代オペラ『松風』『班女』で世界主要歌劇場を席巻。",
            "examples": [
                {
                    "target": "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                    "reading": "やまだこうさくは、にほんごの もつ こうていアクセントと しぜんな イントネーションを せいようの せんりつせんと せいちに いっちさせる かっきてきな かきょくさっきょくぎじゅつを そうししました。",
                    "translation": "Kosaku Yamada initiated an epoch-making vocal composition technique that precisely aligned the pitch accent and natural intonation of the Japanese language with Western melodic lines."
                },
                {
                    "target": "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                    "reading": "だんいくまの オペラ 『ゆうづる』における ヒロイン・つうのアリア 「わたしのだいじなよひょう」は、にほんの みんわてきじょうねんと かれいな かんげんがくほうが みごとに ちょうわした ふきゅうの めいさくです。",
                    "translation": "The heroine Tsu's aria 'My Precious Yohyo' in Ikuma Dan's opera 'Yuzuru' is an immortal masterpiece where Japanese folkloric pathos and splendid orchestration harmonize magnificently."
                },
                {
                    "target": "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                    "reading": "しんこくりつげきじょうの オペラげきじょうは、せかいトップレベルの おんきょうせっけいと ぶたいきこうを そなえ、こくないがいの さいこうほうの オペラ・バレエこうえんを ねんかんをつうじて はっしんしています。",
                    "translation": "The Opera House of the New National Theatre Tokyo is equipped with world-class acoustic design and stage machinery, broadcasting the highest peaks of domestic and international opera and ballet performances throughout the year."
                },
                {
                    "target": "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                    "reading": "ほそかわとしおの げんだいオペラは、せいじゃくと おとの せいせいしょうめつの プロセスを のうがくの れいてきくうかんとして とらえ、おうしゅうの オペラかいにおいて きわめて たかい ひょうかを かくりつしています。",
                    "translation": "Toshio Hosokawa's contemporary operas perceive the process of generation and extinction between silence and sound as Noh's spiritual space, establishing an extremely high evaluation in the European opera world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本近代声楽・オペラと日本語 prosody の音楽的調和（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問27.5.1）。",
                    "options": [
                        "山田耕筰は、日本語の持つ高低アクセントと自然なイントネーションを西洋の旋律線と精緻に一致させる画期的な歌曲作曲技法を創始しました。",
                        "国際条約法に反する法的誤謬（27.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（27.5.2）",
                        "外交慣例に悖る修辞的欠陥文（27.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】山田耕筰の日本語アクセント歌唱理論、團伊玖磨のオペラ『夕鶴』、新国立劇場のオペラ制作と発声法（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本近代声楽・オペラと日本語 prosody の音楽的調和（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習27.5）。",
                    "options": [
                        "團伊玖磨のオペラ『夕鶴』におけるヒロイン・つうのアリア「私の大事な与ひょう」は、日本の民話的情念と華麗な管弦楽法が見事に調和した不朽の名作です。",
                        "対立を無用に煽る不見識な声明文（27.5.x）",
                        "法的拘束力のない不完全な折衝文（27.5.y）",
                        "条約の留保条件を乱用した無効文（27.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u27-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "新国立劇場のオペラ劇場は、世界トップレベルの音響設計と舞台機構を備え、国内外の最高峰のオペラ・バレエ公演を年間を通じて発信しています。",
                        "安全保障理事会決議の権能を無視した記述（27.5.a）",
                        "平和維持部隊の法的根拠を欠く文（27.5.b）",
                        "国際司法裁判所の判例に背く記述（27.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本近代声楽・オペラと日本語 prosody の音楽的調和（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試27-5）。",
                    "options": [
                        "細川俊夫の現代オペラは、静寂と音の生成消滅のプロセスを能楽の霊的空間として捉え、欧州のオペラ界において極めて高い評価を確立しています。",
                        "条約履行義務を軽視した無効文（27.5.m）",
                        "全権委任状の要件を欠く不備文（27.5.n）",
                        "寄託手続きの誤謬文（27.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u27-l5）の主要外交用語を入力してください（「山田耕筰」）：",
                    "acceptedAnswers": [
                        "山田耕筰",
                        "山田耕筰は、"
                    ],
                    "explanation": "正解の外交用語は「山田耕筰」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l1": {
        "id": "ja-u28-l1",
        "subject": "japanese",
        "unit": 28,
        "lessonNumber": 1,
        "title": "日本の現代建築・メタボリズムとプリツカー賞建築家（第1部）",
        "level": "C1",
        "objective": "丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第1部）。",
        "presentation": {
            "explanation": "第二十八単元第1課では、世界の建築界において圧倒的な存在感を放つ日本の現代建築（プリツカー賞受賞者を世界最多輩出）の構造哲学と空間イノベーションを学びます。\n\n【世界的巨匠建築家と空間哲学】\n１．丹下健三（1987年プリツカー賞）：広島平和記念資料館、国立代々木競技場（吊り屋根構造の大空間）。\n２．メタボリズム運動：黒川紀章（中銀カプセルタワービル）。新陳代謝するモジュール建築思想。\n３．安藤忠雄（1995年プリツカー賞）：『光の教会』『地中美術館』。打放しコンクリートと幾何学的立体、劇的な自然光の演出。\n４．隈研吾：新国立競技場。地元の木材や竹を繊細に編み合わせる「負ける建築」の哲学。\n５．伊東豊雄、SANAA、坂茂、磯崎新、山本理顕ら歴代受賞者の多彩な空間探究。",
            "examples": [
                {
                    "target": "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                    "reading": "たんげけんぞうが せっけいした こくりつよよぎきょうぎじょうは、つりばしの げんりを おうようした ダイナミックな サスペンションこうぞうによって、はしらのない ゆうだいな ないぶくうかんと ちょうこくてきな がいかんを じつげんしました。",
                    "translation": "The Yoyogi National Gymnasium designed by Kenzo Tange realized a majestic column-free interior space and sculptural exterior through dynamic suspension roof structures applying the principle of suspension bridges."
                },
                {
                    "target": "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                    "reading": "あんどうただおは、きょくげんまで とぎすまされた うちはなしコンクリートの へきめんに ひとすじの スリットから さしこむ ひかりをつうじて、くうかんに しんせいな せいじゃくと げきてきな きんちょうかんを あたえました。",
                    "translation": "Tadao Ando imparted sacred tranquility and dramatic tension to architectural space through light streaming from a single slit in flawlessly polished exposed concrete walls."
                },
                {
                    "target": "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                    "reading": "くまけんごの 「まけるけんちく」の りねんは、しゅういの けいかんを いあつする きねんひてきけんちくを しりぞけ、じもとの もくざいを こまかく ルーバーじょうに おりなすことで しぜんと けんちくを ゆうわさせます。",
                    "translation": "Kengo Kuma's philosophy of 'Defeated Architecture' rejects monumental architecture that overpowers surrounding scenery, harmonizing nature and architecture by finely weaving local timber into louvers."
                },
                {
                    "target": "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                    "reading": "にほんの けんちくかたちが せかいの プリツカーしょうを たすう かくとくしている はいけいには、でんとうてきな もくぞうかこうぎじゅつの くうかんてきじゅうなんせいと せんたんこうぞうこうがくの きせきてきな とうごうが そんざいします。",
                    "translation": "Behind the reality that Japanese architects have won numerous global Pritzker Prizes exists the miraculous integration of spatial flexibility from traditional wooden framing techniques and cutting-edge structural engineering."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の現代建築・メタボリズムとプリツカー賞建築家（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問28.1.1）。",
                    "options": [
                        "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                        "国際条約法に反する法的誤謬（28.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（28.1.2）",
                        "外交慣例に悖る修辞的欠陥文（28.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の現代建築・メタボリズムとプリツカー賞建築家（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習28.1）。",
                    "options": [
                        "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                        "対立を無用に煽る不見識な声明文（28.1.x）",
                        "法的拘束力のない不完全な折衝文（28.1.y）",
                        "条約の留保条件を乱用した無効文（28.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u28-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                        "安全保障理事会決議の権能を無視した記述（28.1.a）",
                        "平和維持部隊の法的根拠を欠く文（28.1.b）",
                        "国際司法裁判所の判例に背く記述（28.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の現代建築・メタボリズムとプリツカー賞建築家（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試28-1）。",
                    "options": [
                        "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                        "条約履行義務を軽視した無効文（28.1.m）",
                        "全権委任状の要件を欠く不備文（28.1.n）",
                        "寄託手続きの誤謬文（28.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u28-l1）の主要外交用語を入力してください（「丹下健三」）：",
                    "acceptedAnswers": [
                        "丹下健三",
                        "丹下健三が設"
                    ],
                    "explanation": "正解の外交用語は「丹下健三」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l2": {
        "id": "ja-u28-l2",
        "subject": "japanese",
        "unit": 28,
        "lessonNumber": 2,
        "title": "日本の現代建築・メタボリズムとプリツカー賞建築家（第2部）",
        "level": "C1",
        "objective": "丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第2部）。",
        "presentation": {
            "explanation": "第二十八単元第2課では、世界の建築界において圧倒的な存在感を放つ日本の現代建築（プリツカー賞受賞者を世界最多輩出）の構造哲学と空間イノベーションを学びます。\n\n【世界的巨匠建築家と空間哲学】\n１．丹下健三（1987年プリツカー賞）：広島平和記念資料館、国立代々木競技場（吊り屋根構造の大空間）。\n２．メタボリズム運動：黒川紀章（中銀カプセルタワービル）。新陳代謝するモジュール建築思想。\n３．安藤忠雄（1995年プリツカー賞）：『光の教会』『地中美術館』。打放しコンクリートと幾何学的立体、劇的な自然光の演出。\n４．隈研吾：新国立競技場。地元の木材や竹を繊細に編み合わせる「負ける建築」の哲学。\n５．伊東豊雄、SANAA、坂茂、磯崎新、山本理顕ら歴代受賞者の多彩な空間探究。",
            "examples": [
                {
                    "target": "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                    "reading": "たんげけんぞうが せっけいした こくりつよよぎきょうぎじょうは、つりばしの げんりを おうようした ダイナミックな サスペンションこうぞうによって、はしらのない ゆうだいな ないぶくうかんと ちょうこくてきな がいかんを じつげんしました。",
                    "translation": "The Yoyogi National Gymnasium designed by Kenzo Tange realized a majestic column-free interior space and sculptural exterior through dynamic suspension roof structures applying the principle of suspension bridges."
                },
                {
                    "target": "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                    "reading": "あんどうただおは、きょくげんまで とぎすまされた うちはなしコンクリートの へきめんに ひとすじの スリットから さしこむ ひかりをつうじて、くうかんに しんせいな せいじゃくと げきてきな きんちょうかんを あたえました。",
                    "translation": "Tadao Ando imparted sacred tranquility and dramatic tension to architectural space through light streaming from a single slit in flawlessly polished exposed concrete walls."
                },
                {
                    "target": "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                    "reading": "くまけんごの 「まけるけんちく」の りねんは、しゅういの けいかんを いあつする きねんひてきけんちくを しりぞけ、じもとの もくざいを こまかく ルーバーじょうに おりなすことで しぜんと けんちくを ゆうわさせます。",
                    "translation": "Kengo Kuma's philosophy of 'Defeated Architecture' rejects monumental architecture that overpowers surrounding scenery, harmonizing nature and architecture by finely weaving local timber into louvers."
                },
                {
                    "target": "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                    "reading": "にほんの けんちくかたちが せかいの プリツカーしょうを たすう かくとくしている はいけいには、でんとうてきな もくぞうかこうぎじゅつの くうかんてきじゅうなんせいと せんたんこうぞうこうがくの きせきてきな とうごうが そんざいします。",
                    "translation": "Behind the reality that Japanese architects have won numerous global Pritzker Prizes exists the miraculous integration of spatial flexibility from traditional wooden framing techniques and cutting-edge structural engineering."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の現代建築・メタボリズムとプリツカー賞建築家（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問28.2.1）。",
                    "options": [
                        "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                        "国際条約法に反する法的誤謬（28.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（28.2.2）",
                        "外交慣例に悖る修辞的欠陥文（28.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の現代建築・メタボリズムとプリツカー賞建築家（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習28.2）。",
                    "options": [
                        "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                        "対立を無用に煽る不見識な声明文（28.2.x）",
                        "法的拘束力のない不完全な折衝文（28.2.y）",
                        "条約の留保条件を乱用した無効文（28.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u28-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                        "安全保障理事会決議の権能を無視した記述（28.2.a）",
                        "平和維持部隊の法的根拠を欠く文（28.2.b）",
                        "国際司法裁判所の判例に背く記述（28.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の現代建築・メタボリズムとプリツカー賞建築家（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試28-2）。",
                    "options": [
                        "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                        "条約履行義務を軽視した無効文（28.2.m）",
                        "全権委任状の要件を欠く不備文（28.2.n）",
                        "寄託手続きの誤謬文（28.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u28-l2）の主要外交用語を入力してください（「丹下健三」）：",
                    "acceptedAnswers": [
                        "丹下健三",
                        "丹下健三が設"
                    ],
                    "explanation": "正解の外交用語は「丹下健三」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l3": {
        "id": "ja-u28-l3",
        "subject": "japanese",
        "unit": 28,
        "lessonNumber": 3,
        "title": "日本の現代建築・メタボリズムとプリツカー賞建築家（第3部）",
        "level": "C1",
        "objective": "丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第3部）。",
        "presentation": {
            "explanation": "第二十八単元第3課では、世界の建築界において圧倒的な存在感を放つ日本の現代建築（プリツカー賞受賞者を世界最多輩出）の構造哲学と空間イノベーションを学びます。\n\n【世界的巨匠建築家と空間哲学】\n１．丹下健三（1987年プリツカー賞）：広島平和記念資料館、国立代々木競技場（吊り屋根構造の大空間）。\n２．メタボリズム運動：黒川紀章（中銀カプセルタワービル）。新陳代謝するモジュール建築思想。\n３．安藤忠雄（1995年プリツカー賞）：『光の教会』『地中美術館』。打放しコンクリートと幾何学的立体、劇的な自然光の演出。\n４．隈研吾：新国立競技場。地元の木材や竹を繊細に編み合わせる「負ける建築」の哲学。\n５．伊東豊雄、SANAA、坂茂、磯崎新、山本理顕ら歴代受賞者の多彩な空間探究。",
            "examples": [
                {
                    "target": "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                    "reading": "たんげけんぞうが せっけいした こくりつよよぎきょうぎじょうは、つりばしの げんりを おうようした ダイナミックな サスペンションこうぞうによって、はしらのない ゆうだいな ないぶくうかんと ちょうこくてきな がいかんを じつげんしました。",
                    "translation": "The Yoyogi National Gymnasium designed by Kenzo Tange realized a majestic column-free interior space and sculptural exterior through dynamic suspension roof structures applying the principle of suspension bridges."
                },
                {
                    "target": "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                    "reading": "あんどうただおは、きょくげんまで とぎすまされた うちはなしコンクリートの へきめんに ひとすじの スリットから さしこむ ひかりをつうじて、くうかんに しんせいな せいじゃくと げきてきな きんちょうかんを あたえました。",
                    "translation": "Tadao Ando imparted sacred tranquility and dramatic tension to architectural space through light streaming from a single slit in flawlessly polished exposed concrete walls."
                },
                {
                    "target": "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                    "reading": "くまけんごの 「まけるけんちく」の りねんは、しゅういの けいかんを いあつする きねんひてきけんちくを しりぞけ、じもとの もくざいを こまかく ルーバーじょうに おりなすことで しぜんと けんちくを ゆうわさせます。",
                    "translation": "Kengo Kuma's philosophy of 'Defeated Architecture' rejects monumental architecture that overpowers surrounding scenery, harmonizing nature and architecture by finely weaving local timber into louvers."
                },
                {
                    "target": "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                    "reading": "にほんの けんちくかたちが せかいの プリツカーしょうを たすう かくとくしている はいけいには、でんとうてきな もくぞうかこうぎじゅつの くうかんてきじゅうなんせいと せんたんこうぞうこうがくの きせきてきな とうごうが そんざいします。",
                    "translation": "Behind the reality that Japanese architects have won numerous global Pritzker Prizes exists the miraculous integration of spatial flexibility from traditional wooden framing techniques and cutting-edge structural engineering."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の現代建築・メタボリズムとプリツカー賞建築家（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問28.3.1）。",
                    "options": [
                        "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                        "国際条約法に反する法的誤謬（28.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（28.3.2）",
                        "外交慣例に悖る修辞的欠陥文（28.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の現代建築・メタボリズムとプリツカー賞建築家（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習28.3）。",
                    "options": [
                        "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                        "対立を無用に煽る不見識な声明文（28.3.x）",
                        "法的拘束力のない不完全な折衝文（28.3.y）",
                        "条約の留保条件を乱用した無効文（28.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u28-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                        "安全保障理事会決議の権能を無視した記述（28.3.a）",
                        "平和維持部隊の法的根拠を欠く文（28.3.b）",
                        "国際司法裁判所の判例に背く記述（28.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の現代建築・メタボリズムとプリツカー賞建築家（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試28-3）。",
                    "options": [
                        "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                        "条約履行義務を軽視した無効文（28.3.m）",
                        "全権委任状の要件を欠く不備文（28.3.n）",
                        "寄託手続きの誤謬文（28.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u28-l3）の主要外交用語を入力してください（「丹下健三」）：",
                    "acceptedAnswers": [
                        "丹下健三",
                        "丹下健三が設"
                    ],
                    "explanation": "正解の外交用語は「丹下健三」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l4": {
        "id": "ja-u28-l4",
        "subject": "japanese",
        "unit": 28,
        "lessonNumber": 4,
        "title": "日本の現代建築・メタボリズムとプリツカー賞建築家（第4部）",
        "level": "C1",
        "objective": "丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第4部）。",
        "presentation": {
            "explanation": "第二十八単元第4課では、世界の建築界において圧倒的な存在感を放つ日本の現代建築（プリツカー賞受賞者を世界最多輩出）の構造哲学と空間イノベーションを学びます。\n\n【世界的巨匠建築家と空間哲学】\n１．丹下健三（1987年プリツカー賞）：広島平和記念資料館、国立代々木競技場（吊り屋根構造の大空間）。\n２．メタボリズム運動：黒川紀章（中銀カプセルタワービル）。新陳代謝するモジュール建築思想。\n３．安藤忠雄（1995年プリツカー賞）：『光の教会』『地中美術館』。打放しコンクリートと幾何学的立体、劇的な自然光の演出。\n４．隈研吾：新国立競技場。地元の木材や竹を繊細に編み合わせる「負ける建築」の哲学。\n５．伊東豊雄、SANAA、坂茂、磯崎新、山本理顕ら歴代受賞者の多彩な空間探究。",
            "examples": [
                {
                    "target": "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                    "reading": "たんげけんぞうが せっけいした こくりつよよぎきょうぎじょうは、つりばしの げんりを おうようした ダイナミックな サスペンションこうぞうによって、はしらのない ゆうだいな ないぶくうかんと ちょうこくてきな がいかんを じつげんしました。",
                    "translation": "The Yoyogi National Gymnasium designed by Kenzo Tange realized a majestic column-free interior space and sculptural exterior through dynamic suspension roof structures applying the principle of suspension bridges."
                },
                {
                    "target": "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                    "reading": "あんどうただおは、きょくげんまで とぎすまされた うちはなしコンクリートの へきめんに ひとすじの スリットから さしこむ ひかりをつうじて、くうかんに しんせいな せいじゃくと げきてきな きんちょうかんを あたえました。",
                    "translation": "Tadao Ando imparted sacred tranquility and dramatic tension to architectural space through light streaming from a single slit in flawlessly polished exposed concrete walls."
                },
                {
                    "target": "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                    "reading": "くまけんごの 「まけるけんちく」の りねんは、しゅういの けいかんを いあつする きねんひてきけんちくを しりぞけ、じもとの もくざいを こまかく ルーバーじょうに おりなすことで しぜんと けんちくを ゆうわさせます。",
                    "translation": "Kengo Kuma's philosophy of 'Defeated Architecture' rejects monumental architecture that overpowers surrounding scenery, harmonizing nature and architecture by finely weaving local timber into louvers."
                },
                {
                    "target": "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                    "reading": "にほんの けんちくかたちが せかいの プリツカーしょうを たすう かくとくしている はいけいには、でんとうてきな もくぞうかこうぎじゅつの くうかんてきじゅうなんせいと せんたんこうぞうこうがくの きせきてきな とうごうが そんざいします。",
                    "translation": "Behind the reality that Japanese architects have won numerous global Pritzker Prizes exists the miraculous integration of spatial flexibility from traditional wooden framing techniques and cutting-edge structural engineering."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の現代建築・メタボリズムとプリツカー賞建築家（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問28.4.1）。",
                    "options": [
                        "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                        "国際条約法に反する法的誤謬（28.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（28.4.2）",
                        "外交慣例に悖る修辞的欠陥文（28.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の現代建築・メタボリズムとプリツカー賞建築家（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習28.4）。",
                    "options": [
                        "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                        "対立を無用に煽る不見識な声明文（28.4.x）",
                        "法的拘束力のない不完全な折衝文（28.4.y）",
                        "条約の留保条件を乱用した無効文（28.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u28-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                        "安全保障理事会決議の権能を無視した記述（28.4.a）",
                        "平和維持部隊の法的根拠を欠く文（28.4.b）",
                        "国際司法裁判所の判例に背く記述（28.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の現代建築・メタボリズムとプリツカー賞建築家（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試28-4）。",
                    "options": [
                        "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                        "条約履行義務を軽視した無効文（28.4.m）",
                        "全権委任状の要件を欠く不備文（28.4.n）",
                        "寄託手続きの誤謬文（28.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u28-l4）の主要外交用語を入力してください（「丹下健三」）：",
                    "acceptedAnswers": [
                        "丹下健三",
                        "丹下健三が設"
                    ],
                    "explanation": "正解の外交用語は「丹下健三」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u28-l5": {
        "id": "ja-u28-l5",
        "subject": "japanese",
        "unit": 28,
        "lessonNumber": 5,
        "title": "日本の現代建築・メタボリズムとプリツカー賞建築家（第5部）",
        "level": "C1",
        "objective": "丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第5部）。",
        "presentation": {
            "explanation": "第二十八単元第5課では、世界の建築界において圧倒的な存在感を放つ日本の現代建築（プリツカー賞受賞者を世界最多輩出）の構造哲学と空間イノベーションを学びます。\n\n【世界的巨匠建築家と空間哲学】\n１．丹下健三（1987年プリツカー賞）：広島平和記念資料館、国立代々木競技場（吊り屋根構造の大空間）。\n２．メタボリズム運動：黒川紀章（中銀カプセルタワービル）。新陳代謝するモジュール建築思想。\n３．安藤忠雄（1995年プリツカー賞）：『光の教会』『地中美術館』。打放しコンクリートと幾何学的立体、劇的な自然光の演出。\n４．隈研吾：新国立競技場。地元の木材や竹を繊細に編み合わせる「負ける建築」の哲学。\n５．伊東豊雄、SANAA、坂茂、磯崎新、山本理顕ら歴代受賞者の多彩な空間探究。",
            "examples": [
                {
                    "target": "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                    "reading": "たんげけんぞうが せっけいした こくりつよよぎきょうぎじょうは、つりばしの げんりを おうようした ダイナミックな サスペンションこうぞうによって、はしらのない ゆうだいな ないぶくうかんと ちょうこくてきな がいかんを じつげんしました。",
                    "translation": "The Yoyogi National Gymnasium designed by Kenzo Tange realized a majestic column-free interior space and sculptural exterior through dynamic suspension roof structures applying the principle of suspension bridges."
                },
                {
                    "target": "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                    "reading": "あんどうただおは、きょくげんまで とぎすまされた うちはなしコンクリートの へきめんに ひとすじの スリットから さしこむ ひかりをつうじて、くうかんに しんせいな せいじゃくと げきてきな きんちょうかんを あたえました。",
                    "translation": "Tadao Ando imparted sacred tranquility and dramatic tension to architectural space through light streaming from a single slit in flawlessly polished exposed concrete walls."
                },
                {
                    "target": "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                    "reading": "くまけんごの 「まけるけんちく」の りねんは、しゅういの けいかんを いあつする きねんひてきけんちくを しりぞけ、じもとの もくざいを こまかく ルーバーじょうに おりなすことで しぜんと けんちくを ゆうわさせます。",
                    "translation": "Kengo Kuma's philosophy of 'Defeated Architecture' rejects monumental architecture that overpowers surrounding scenery, harmonizing nature and architecture by finely weaving local timber into louvers."
                },
                {
                    "target": "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                    "reading": "にほんの けんちくかたちが せかいの プリツカーしょうを たすう かくとくしている はいけいには、でんとうてきな もくぞうかこうぎじゅつの くうかんてきじゅうなんせいと せんたんこうぞうこうがくの きせきてきな とうごうが そんざいします。",
                    "translation": "Behind the reality that Japanese architects have won numerous global Pritzker Prizes exists the miraculous integration of spatial flexibility from traditional wooden framing techniques and cutting-edge structural engineering."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本の現代建築・メタボリズムとプリツカー賞建築家（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問28.5.1）。",
                    "options": [
                        "丹下健三が設計した国立代々木競技場は、吊り橋の原理を応用したダイナミックなサスペンション構造によって、柱のない雄大な内部空間と彫刻的な外観を実現しました。",
                        "国際条約法に反する法的誤謬（28.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（28.5.2）",
                        "外交慣例に悖る修辞的欠陥文（28.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】丹下健三（代々木体育館）、安藤忠雄（打放しコンクリートと光）、隈研吾（木材と負ける建築）、プリツカー賞建築論（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本の現代建築・メタボリズムとプリツカー賞建築家（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習28.5）。",
                    "options": [
                        "安藤忠雄は、極限まで研ぎ澄まされた打放しコンクリートの壁面に一筋のスリットから差し込む光を通じて、空間に神聖な静寂と劇的な緊張感を与えました。",
                        "対立を無用に煽る不見識な声明文（28.5.x）",
                        "法的拘束力のない不完全な折衝文（28.5.y）",
                        "条約の留保条件を乱用した無効文（28.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u28-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "隈研吾の「負ける建築」の理念は、周囲の景観を威圧する記念碑的建築を退け、地元の木材を細かくルーバー状に織り成すことで自然と建築を融和させます。",
                        "安全保障理事会決議の権能を無視した記述（28.5.a）",
                        "平和維持部隊の法的根拠を欠く文（28.5.b）",
                        "国際司法裁判所の判例に背く記述（28.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本の現代建築・メタボリズムとプリツカー賞建築家（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試28-5）。",
                    "options": [
                        "日本の建築家たちが世界のプリツカー賞を多数獲得している背景には、伝統的な木造架構技術の空間的柔軟性と先端構造工学の奇跡的な統合が存在します。",
                        "条約履行義務を軽視した無効文（28.5.m）",
                        "全権委任状の要件を欠く不備文（28.5.n）",
                        "寄託手続きの誤謬文（28.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u28-l5）の主要外交用語を入力してください（「丹下健三」）：",
                    "acceptedAnswers": [
                        "丹下健三",
                        "丹下健三が設"
                    ],
                    "explanation": "正解の外交用語は「丹下健三」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l1": {
        "id": "ja-u29-l1",
        "subject": "japanese",
        "unit": 29,
        "lessonNumber": 1,
        "title": "西田幾多郎の「絶対無の場所」と道元の「現成公案」（第1部）",
        "level": "C1",
        "objective": "西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第1部）。",
        "presentation": {
            "explanation": "第二十九単元第1課では、近代日本の知性の極致である「西田哲学」の成熟期理論および、曹洞宗開祖・道元の根本教説『現成公案』の哲学的深淵を学びます。\n\n【場所の論理と絶対無】\n・西田幾多郎は後期著作において、すべての存在を包摂する究極の基盤として「絶対無の場所」を構築。\n・自己と世界の相互限定的弁証法。\n\n【道元『現成公案』の核心】\n・「仏道をならふといふは、自己をならふなり。自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり。」\n・自我の執着を脱落させるとき、宇宙万物そのものが自己として現成するという非二元論的悟り。\n\n【西谷啓治『宗教とは何か』】\n・近代ニヒリズムを「空（くう）」の立場から突破する実存論的思索。",
            "examples": [
                {
                    "target": "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                    "reading": "どうげんぜんじは 『げんじょうこうあん』において 「じこをならふといふは、じこをわするるなり。じこをわするるといふは、まんぽうにしょうせらるるなり」と とき、しゅかくごういつの きょうちを ていじしました。",
                    "translation": "Zen Master Dogen in the 'Genjokoan' expounded 'To study the Buddha Way is to study the self; to study the self is to forget the self; to forget the self is to be actualized by myriad dharmas', presenting the realm of unified subject and object."
                },
                {
                    "target": "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                    "reading": "にしだきたろうの こうき てつがくにおける 「ばしょのろんり」は、たいしょうかしえない こんげんてきな 「ぜったいむ」の じこげんていとして、じこと せかいが そうごに けいせいしあう どうてきべんしょうほうを あきらかにしました。",
                    "translation": "The 'Logic of Basho' in Kitaro Nishida's later philosophy clarified the dynamic dialectic where the self and the world mutually form each other as the self-determination of the primordial 'Absolute Nothingness' that cannot be objectified."
                },
                {
                    "target": "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                    "reading": "きょうとがくはの にしたにけいじは しゅちょ 『しゅうきょうとはなにか』において、きんだいニヒリズムの きょくげんとしての くうのたちばから、せいようじつぞんしゅぎの ふくろこうじを とっぱする あたらしい にんげんかんを うちたてました。",
                    "translation": "Keiji Nishitani of the Kyoto School, in his magnum opus 'What Is Religion?', established a new view of humanity breaking through the impasse of Western existentialism from the standpoint of Sunyata (Emptiness) as the limit of modern nihilism."
                },
                {
                    "target": "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                    "reading": "とうようの むのしそうは、きょむや けつじょとしての むではなく、しんらばんしょうを むげんに うみだしはぐくむ ゆたかな かのうせいの じゅういつくうかんとして とらえられます。",
                    "translation": "The Eastern philosophy of Nothingness is perceived not as nihilistic void or lack, but as an overflowing space of rich potentiality that infinitely generates and nurtures all creation."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問29.1.1）。",
                    "options": [
                        "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                        "国際条約法に反する法的誤謬（29.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（29.1.2）",
                        "外交慣例に悖る修辞的欠陥文（29.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習29.1）。",
                    "options": [
                        "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                        "対立を無用に煽る不見識な声明文（29.1.x）",
                        "法的拘束力のない不完全な折衝文（29.1.y）",
                        "条約の留保条件を乱用した無効文（29.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u29-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                        "安全保障理事会決議の権能を無視した記述（29.1.a）",
                        "平和維持部隊の法的根拠を欠く文（29.1.b）",
                        "国際司法裁判所の判例に背く記述（29.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試29-1）。",
                    "options": [
                        "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                        "条約履行義務を軽視した無効文（29.1.m）",
                        "全権委任状の要件を欠く不備文（29.1.n）",
                        "寄託手続きの誤謬文（29.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u29-l1）の主要外交用語を入力してください（「道元禅師」）：",
                    "acceptedAnswers": [
                        "道元禅師",
                        "道元禅師は『"
                    ],
                    "explanation": "正解の外交用語は「道元禅師」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l2": {
        "id": "ja-u29-l2",
        "subject": "japanese",
        "unit": 29,
        "lessonNumber": 2,
        "title": "西田幾多郎の「絶対無の場所」と道元の「現成公案」（第2部）",
        "level": "C1",
        "objective": "西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第2部）。",
        "presentation": {
            "explanation": "第二十九単元第2課では、近代日本の知性の極致である「西田哲学」の成熟期理論および、曹洞宗開祖・道元の根本教説『現成公案』の哲学的深淵を学びます。\n\n【場所の論理と絶対無】\n・西田幾多郎は後期著作において、すべての存在を包摂する究極の基盤として「絶対無の場所」を構築。\n・自己と世界の相互限定的弁証法。\n\n【道元『現成公案』の核心】\n・「仏道をならふといふは、自己をならふなり。自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり。」\n・自我の執着を脱落させるとき、宇宙万物そのものが自己として現成するという非二元論的悟り。\n\n【西谷啓治『宗教とは何か』】\n・近代ニヒリズムを「空（くう）」の立場から突破する実存論的思索。",
            "examples": [
                {
                    "target": "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                    "reading": "どうげんぜんじは 『げんじょうこうあん』において 「じこをならふといふは、じこをわするるなり。じこをわするるといふは、まんぽうにしょうせらるるなり」と とき、しゅかくごういつの きょうちを ていじしました。",
                    "translation": "Zen Master Dogen in the 'Genjokoan' expounded 'To study the Buddha Way is to study the self; to study the self is to forget the self; to forget the self is to be actualized by myriad dharmas', presenting the realm of unified subject and object."
                },
                {
                    "target": "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                    "reading": "にしだきたろうの こうき てつがくにおける 「ばしょのろんり」は、たいしょうかしえない こんげんてきな 「ぜったいむ」の じこげんていとして、じこと せかいが そうごに けいせいしあう どうてきべんしょうほうを あきらかにしました。",
                    "translation": "The 'Logic of Basho' in Kitaro Nishida's later philosophy clarified the dynamic dialectic where the self and the world mutually form each other as the self-determination of the primordial 'Absolute Nothingness' that cannot be objectified."
                },
                {
                    "target": "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                    "reading": "きょうとがくはの にしたにけいじは しゅちょ 『しゅうきょうとはなにか』において、きんだいニヒリズムの きょくげんとしての くうのたちばから、せいようじつぞんしゅぎの ふくろこうじを とっぱする あたらしい にんげんかんを うちたてました。",
                    "translation": "Keiji Nishitani of the Kyoto School, in his magnum opus 'What Is Religion?', established a new view of humanity breaking through the impasse of Western existentialism from the standpoint of Sunyata (Emptiness) as the limit of modern nihilism."
                },
                {
                    "target": "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                    "reading": "とうようの むのしそうは、きょむや けつじょとしての むではなく、しんらばんしょうを むげんに うみだしはぐくむ ゆたかな かのうせいの じゅういつくうかんとして とらえられます。",
                    "translation": "The Eastern philosophy of Nothingness is perceived not as nihilistic void or lack, but as an overflowing space of rich potentiality that infinitely generates and nurtures all creation."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問29.2.1）。",
                    "options": [
                        "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                        "国際条約法に反する法的誤謬（29.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（29.2.2）",
                        "外交慣例に悖る修辞的欠陥文（29.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習29.2）。",
                    "options": [
                        "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                        "対立を無用に煽る不見識な声明文（29.2.x）",
                        "法的拘束力のない不完全な折衝文（29.2.y）",
                        "条約の留保条件を乱用した無効文（29.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u29-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                        "安全保障理事会決議の権能を無視した記述（29.2.a）",
                        "平和維持部隊の法的根拠を欠く文（29.2.b）",
                        "国際司法裁判所の判例に背く記述（29.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試29-2）。",
                    "options": [
                        "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                        "条約履行義務を軽視した無効文（29.2.m）",
                        "全権委任状の要件を欠く不備文（29.2.n）",
                        "寄託手続きの誤謬文（29.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u29-l2）の主要外交用語を入力してください（「道元禅師」）：",
                    "acceptedAnswers": [
                        "道元禅師",
                        "道元禅師は『"
                    ],
                    "explanation": "正解の外交用語は「道元禅師」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l3": {
        "id": "ja-u29-l3",
        "subject": "japanese",
        "unit": 29,
        "lessonNumber": 3,
        "title": "西田幾多郎の「絶対無の場所」と道元の「現成公案」（第3部）",
        "level": "C1",
        "objective": "西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第3部）。",
        "presentation": {
            "explanation": "第二十九単元第3課では、近代日本の知性の極致である「西田哲学」の成熟期理論および、曹洞宗開祖・道元の根本教説『現成公案』の哲学的深淵を学びます。\n\n【場所の論理と絶対無】\n・西田幾多郎は後期著作において、すべての存在を包摂する究極の基盤として「絶対無の場所」を構築。\n・自己と世界の相互限定的弁証法。\n\n【道元『現成公案』の核心】\n・「仏道をならふといふは、自己をならふなり。自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり。」\n・自我の執着を脱落させるとき、宇宙万物そのものが自己として現成するという非二元論的悟り。\n\n【西谷啓治『宗教とは何か』】\n・近代ニヒリズムを「空（くう）」の立場から突破する実存論的思索。",
            "examples": [
                {
                    "target": "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                    "reading": "どうげんぜんじは 『げんじょうこうあん』において 「じこをならふといふは、じこをわするるなり。じこをわするるといふは、まんぽうにしょうせらるるなり」と とき、しゅかくごういつの きょうちを ていじしました。",
                    "translation": "Zen Master Dogen in the 'Genjokoan' expounded 'To study the Buddha Way is to study the self; to study the self is to forget the self; to forget the self is to be actualized by myriad dharmas', presenting the realm of unified subject and object."
                },
                {
                    "target": "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                    "reading": "にしだきたろうの こうき てつがくにおける 「ばしょのろんり」は、たいしょうかしえない こんげんてきな 「ぜったいむ」の じこげんていとして、じこと せかいが そうごに けいせいしあう どうてきべんしょうほうを あきらかにしました。",
                    "translation": "The 'Logic of Basho' in Kitaro Nishida's later philosophy clarified the dynamic dialectic where the self and the world mutually form each other as the self-determination of the primordial 'Absolute Nothingness' that cannot be objectified."
                },
                {
                    "target": "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                    "reading": "きょうとがくはの にしたにけいじは しゅちょ 『しゅうきょうとはなにか』において、きんだいニヒリズムの きょくげんとしての くうのたちばから、せいようじつぞんしゅぎの ふくろこうじを とっぱする あたらしい にんげんかんを うちたてました。",
                    "translation": "Keiji Nishitani of the Kyoto School, in his magnum opus 'What Is Religion?', established a new view of humanity breaking through the impasse of Western existentialism from the standpoint of Sunyata (Emptiness) as the limit of modern nihilism."
                },
                {
                    "target": "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                    "reading": "とうようの むのしそうは、きょむや けつじょとしての むではなく、しんらばんしょうを むげんに うみだしはぐくむ ゆたかな かのうせいの じゅういつくうかんとして とらえられます。",
                    "translation": "The Eastern philosophy of Nothingness is perceived not as nihilistic void or lack, but as an overflowing space of rich potentiality that infinitely generates and nurtures all creation."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問29.3.1）。",
                    "options": [
                        "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                        "国際条約法に反する法的誤謬（29.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（29.3.2）",
                        "外交慣例に悖る修辞的欠陥文（29.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習29.3）。",
                    "options": [
                        "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                        "対立を無用に煽る不見識な声明文（29.3.x）",
                        "法的拘束力のない不完全な折衝文（29.3.y）",
                        "条約の留保条件を乱用した無効文（29.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u29-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                        "安全保障理事会決議の権能を無視した記述（29.3.a）",
                        "平和維持部隊の法的根拠を欠く文（29.3.b）",
                        "国際司法裁判所の判例に背く記述（29.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試29-3）。",
                    "options": [
                        "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                        "条約履行義務を軽視した無効文（29.3.m）",
                        "全権委任状の要件を欠く不備文（29.3.n）",
                        "寄託手続きの誤謬文（29.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u29-l3）の主要外交用語を入力してください（「道元禅師」）：",
                    "acceptedAnswers": [
                        "道元禅師",
                        "道元禅師は『"
                    ],
                    "explanation": "正解の外交用語は「道元禅師」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l4": {
        "id": "ja-u29-l4",
        "subject": "japanese",
        "unit": 29,
        "lessonNumber": 4,
        "title": "西田幾多郎の「絶対無の場所」と道元の「現成公案」（第4部）",
        "level": "C1",
        "objective": "西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第4部）。",
        "presentation": {
            "explanation": "第二十九単元第4課では、近代日本の知性の極致である「西田哲学」の成熟期理論および、曹洞宗開祖・道元の根本教説『現成公案』の哲学的深淵を学びます。\n\n【場所の論理と絶対無】\n・西田幾多郎は後期著作において、すべての存在を包摂する究極の基盤として「絶対無の場所」を構築。\n・自己と世界の相互限定的弁証法。\n\n【道元『現成公案』の核心】\n・「仏道をならふといふは、自己をならふなり。自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり。」\n・自我の執着を脱落させるとき、宇宙万物そのものが自己として現成するという非二元論的悟り。\n\n【西谷啓治『宗教とは何か』】\n・近代ニヒリズムを「空（くう）」の立場から突破する実存論的思索。",
            "examples": [
                {
                    "target": "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                    "reading": "どうげんぜんじは 『げんじょうこうあん』において 「じこをならふといふは、じこをわするるなり。じこをわするるといふは、まんぽうにしょうせらるるなり」と とき、しゅかくごういつの きょうちを ていじしました。",
                    "translation": "Zen Master Dogen in the 'Genjokoan' expounded 'To study the Buddha Way is to study the self; to study the self is to forget the self; to forget the self is to be actualized by myriad dharmas', presenting the realm of unified subject and object."
                },
                {
                    "target": "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                    "reading": "にしだきたろうの こうき てつがくにおける 「ばしょのろんり」は、たいしょうかしえない こんげんてきな 「ぜったいむ」の じこげんていとして、じこと せかいが そうごに けいせいしあう どうてきべんしょうほうを あきらかにしました。",
                    "translation": "The 'Logic of Basho' in Kitaro Nishida's later philosophy clarified the dynamic dialectic where the self and the world mutually form each other as the self-determination of the primordial 'Absolute Nothingness' that cannot be objectified."
                },
                {
                    "target": "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                    "reading": "きょうとがくはの にしたにけいじは しゅちょ 『しゅうきょうとはなにか』において、きんだいニヒリズムの きょくげんとしての くうのたちばから、せいようじつぞんしゅぎの ふくろこうじを とっぱする あたらしい にんげんかんを うちたてました。",
                    "translation": "Keiji Nishitani of the Kyoto School, in his magnum opus 'What Is Religion?', established a new view of humanity breaking through the impasse of Western existentialism from the standpoint of Sunyata (Emptiness) as the limit of modern nihilism."
                },
                {
                    "target": "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                    "reading": "とうようの むのしそうは、きょむや けつじょとしての むではなく、しんらばんしょうを むげんに うみだしはぐくむ ゆたかな かのうせいの じゅういつくうかんとして とらえられます。",
                    "translation": "The Eastern philosophy of Nothingness is perceived not as nihilistic void or lack, but as an overflowing space of rich potentiality that infinitely generates and nurtures all creation."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問29.4.1）。",
                    "options": [
                        "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                        "国際条約法に反する法的誤謬（29.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（29.4.2）",
                        "外交慣例に悖る修辞的欠陥文（29.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習29.4）。",
                    "options": [
                        "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                        "対立を無用に煽る不見識な声明文（29.4.x）",
                        "法的拘束力のない不完全な折衝文（29.4.y）",
                        "条約の留保条件を乱用した無効文（29.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u29-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                        "安全保障理事会決議の権能を無視した記述（29.4.a）",
                        "平和維持部隊の法的根拠を欠く文（29.4.b）",
                        "国際司法裁判所の判例に背く記述（29.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試29-4）。",
                    "options": [
                        "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                        "条約履行義務を軽視した無効文（29.4.m）",
                        "全権委任状の要件を欠く不備文（29.4.n）",
                        "寄託手続きの誤謬文（29.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u29-l4）の主要外交用語を入力してください（「道元禅師」）：",
                    "acceptedAnswers": [
                        "道元禅師",
                        "道元禅師は『"
                    ],
                    "explanation": "正解の外交用語は「道元禅師」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u29-l5": {
        "id": "ja-u29-l5",
        "subject": "japanese",
        "unit": 29,
        "lessonNumber": 5,
        "title": "西田幾多郎の「絶対無の場所」と道元の「現成公案」（第5部）",
        "level": "C1",
        "objective": "西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第5部）。",
        "presentation": {
            "explanation": "第二十九単元第5課では、近代日本の知性の極致である「西田哲学」の成熟期理論および、曹洞宗開祖・道元の根本教説『現成公案』の哲学的深淵を学びます。\n\n【場所の論理と絶対無】\n・西田幾多郎は後期著作において、すべての存在を包摂する究極の基盤として「絶対無の場所」を構築。\n・自己と世界の相互限定的弁証法。\n\n【道元『現成公案』の核心】\n・「仏道をならふといふは、自己をならふなり。自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり。」\n・自我の執着を脱落させるとき、宇宙万物そのものが自己として現成するという非二元論的悟り。\n\n【西谷啓治『宗教とは何か』】\n・近代ニヒリズムを「空（くう）」の立場から突破する実存論的思索。",
            "examples": [
                {
                    "target": "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                    "reading": "どうげんぜんじは 『げんじょうこうあん』において 「じこをならふといふは、じこをわするるなり。じこをわするるといふは、まんぽうにしょうせらるるなり」と とき、しゅかくごういつの きょうちを ていじしました。",
                    "translation": "Zen Master Dogen in the 'Genjokoan' expounded 'To study the Buddha Way is to study the self; to study the self is to forget the self; to forget the self is to be actualized by myriad dharmas', presenting the realm of unified subject and object."
                },
                {
                    "target": "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                    "reading": "にしだきたろうの こうき てつがくにおける 「ばしょのろんり」は、たいしょうかしえない こんげんてきな 「ぜったいむ」の じこげんていとして、じこと せかいが そうごに けいせいしあう どうてきべんしょうほうを あきらかにしました。",
                    "translation": "The 'Logic of Basho' in Kitaro Nishida's later philosophy clarified the dynamic dialectic where the self and the world mutually form each other as the self-determination of the primordial 'Absolute Nothingness' that cannot be objectified."
                },
                {
                    "target": "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                    "reading": "きょうとがくはの にしたにけいじは しゅちょ 『しゅうきょうとはなにか』において、きんだいニヒリズムの きょくげんとしての くうのたちばから、せいようじつぞんしゅぎの ふくろこうじを とっぱする あたらしい にんげんかんを うちたてました。",
                    "translation": "Keiji Nishitani of the Kyoto School, in his magnum opus 'What Is Religion?', established a new view of humanity breaking through the impasse of Western existentialism from the standpoint of Sunyata (Emptiness) as the limit of modern nihilism."
                },
                {
                    "target": "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                    "reading": "とうようの むのしそうは、きょむや けつじょとしての むではなく、しんらばんしょうを むげんに うみだしはぐくむ ゆたかな かのうせいの じゅういつくうかんとして とらえられます。",
                    "translation": "The Eastern philosophy of Nothingness is perceived not as nihilistic void or lack, but as an overflowing space of rich potentiality that infinitely generates and nurtures all creation."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問29.5.1）。",
                    "options": [
                        "道元禅師は『現成公案』において「自己をならふといふは、自己をわするるなり。自己をわするるといふは、万法に証せらるるなり」と説き、主客合一の境地を提示しました。",
                        "国際条約法に反する法的誤謬（29.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（29.5.2）",
                        "外交慣例に悖る修辞的欠陥文（29.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】西田幾多郎の「場所の論理」、道元禅師『正法眼蔵・現成公案』、西谷啓治『宗教とは何か』の哲学的思索（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習29.5）。",
                    "options": [
                        "西田幾多郎の後期哲学における「場所の論理」は、対象化し得ない根源的な「絶対無」の自己限定として、自己と世界が相互に形成し合う動的弁証法を明らかにしました。",
                        "対立を無用に煽る不見識な声明文（29.5.x）",
                        "法的拘束力のない不完全な折衝文（29.5.y）",
                        "条約の留保条件を乱用した無効文（29.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u29-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "京都学派の西谷啓治は主著『宗教とは何か』において、近代ニヒリズムの極限としての空の立場から、西洋実存主義の袋小路を突破する新しい人間観を打ち立てました。",
                        "安全保障理事会決議の権能を無視した記述（29.5.a）",
                        "平和維持部隊の法的根拠を欠く文（29.5.b）",
                        "国際司法裁判所の判例に背く記述（29.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】西田幾多郎の「絶対無の場所」と道元の「現成公案」（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試29-5）。",
                    "options": [
                        "東洋の無の思想は、虚無や欠如としての無ではなく、森羅万象を無限に生み出し育む豊かな可能性の充溢空間として捉えられます。",
                        "条約履行義務を軽視した無効文（29.5.m）",
                        "全権委任状の要件を欠く不備文（29.5.n）",
                        "寄託手続きの誤謬文（29.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u29-l5）の主要外交用語を入力してください（「道元禅師」）：",
                    "acceptedAnswers": [
                        "道元禅師",
                        "道元禅師は『"
                    ],
                    "explanation": "正解の外交用語は「道元禅師」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l1": {
        "id": "ja-u30-l1",
        "subject": "japanese",
        "unit": 30,
        "lessonNumber": 1,
        "title": "日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第1部）",
        "level": "C1",
        "objective": "宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第1部）。",
        "presentation": {
            "explanation": "第三十単元第1課では、手描きアニメーションの極致として世界のアカデミー賞やベルリン金熊賞を獲得した宮崎駿（スタジオジブリ）のエコロジー神話および是枝裕和監督の人間主義的リアリズムを学びます。\n\n【宮崎駿とスタジオジブリの哲学】\n・『千と千尋の神隠し』（2001年・アカデミー長編アニメーション賞、ベルリン国際映画祭金熊賞）。\n・『風の谷のナウシカ』『もののけ姫』『君たちはどう生きるか』（2023年アカデミー賞受賞）。\n・生態系アニミズム、飛行への憧憬、手描き原画の圧倒的な生命感。\n\n【是枝裕和の現代ヒューマニズム】\n・『万引き家族』（2018年・カンヌ国際映画祭最高賞パルム・ドール受賞）。\n・血縁を超えた家族の絆、社会の周縁で生きる人々の尊厳を静謐なリアリズムで描く。",
            "examples": [
                {
                    "target": "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                    "reading": "みやざきはやおかんとくの 『もののけひめ』は、タタラばの せいてつによる しぜんかいへんと もりの かみがみの たたかいをつうじて、にんげんと しぜんの あんいな ちょうわを はいした こんげんてきな きょうせいの かっとうを えがきだしました。",
                    "translation": "Director Hayao Miyazaki's 'Princess Mononoke', through the struggle between nature modification by Tatara ironmaking and the forest gods, depicted the fundamental agony of coexistence rejecting facile harmony between humans and nature."
                },
                {
                    "target": "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                    "reading": "スタジオジブリが つらぬく あっとうてきな てがきアニメーションの ちみつな さくがは、かぜの そよぎや みずの ながれ、ひしょうする しんたいの せいめいかんを ダイナミックに フィルムに ていちゃくさせます。",
                    "translation": "The meticulous drawing of overwhelming hand-drawn animation upheld by Studio Ghibli dynamically fixes onto film the rustling of wind, the flow of water, and the vitality of soaring bodies."
                },
                {
                    "target": "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                    "reading": "これえだひろかずかんとくの 『まんびきかぞく』は、カンヌこくさいえいがさい パルム・ドールを じゅしょうし、けつえんによらない ぎじかぞくの ぬくもりと かくさしゃかいの つうせつな げんじつを せかいの かんきゃくに つきつけました。",
                    "translation": "Director Hirokazu Kore-eda's 'Shoplifters' won the Cannes Palme d'Or, presenting to world audiences the warmth of a pseudo-family not bound by blood ties and the poignant reality of a divided society."
                },
                {
                    "target": "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                    "reading": "げんだいにほんの えいぞうさっかたちは、アニメーションと じっしゃえいがの そうほうにおいて、にんげんの じつぞんてきそんげんと エコロジーの りんりを せかいに むけて はっしんしつづけています。",
                    "translation": "Modern Japanese filmmakers, in both animation and live-action cinema, continue to broadcast human existential dignity and ecological ethics to the world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問30.1.1）。",
                    "options": [
                        "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                        "国際条約法に反する法的誤謬（30.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（30.1.2）",
                        "外交慣例に悖る修辞的欠陥文（30.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習30.1）。",
                    "options": [
                        "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                        "対立を無用に煽る不見識な声明文（30.1.x）",
                        "法的拘束力のない不完全な折衝文（30.1.y）",
                        "条約の留保条件を乱用した無効文（30.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u30-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                        "安全保障理事会決議の権能を無視した記述（30.1.a）",
                        "平和維持部隊の法的根拠を欠く文（30.1.b）",
                        "国際司法裁判所の判例に背く記述（30.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試30-1）。",
                    "options": [
                        "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                        "条約履行義務を軽視した無効文（30.1.m）",
                        "全権委任状の要件を欠く不備文（30.1.n）",
                        "寄託手続きの誤謬文（30.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u30-l1）の主要外交用語を入力してください（「宮崎駿監」）：",
                    "acceptedAnswers": [
                        "宮崎駿監",
                        "宮崎駿監督の"
                    ],
                    "explanation": "正解の外交用語は「宮崎駿監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l2": {
        "id": "ja-u30-l2",
        "subject": "japanese",
        "unit": 30,
        "lessonNumber": 2,
        "title": "日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第2部）",
        "level": "C1",
        "objective": "宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第2部）。",
        "presentation": {
            "explanation": "第三十単元第2課では、手描きアニメーションの極致として世界のアカデミー賞やベルリン金熊賞を獲得した宮崎駿（スタジオジブリ）のエコロジー神話および是枝裕和監督の人間主義的リアリズムを学びます。\n\n【宮崎駿とスタジオジブリの哲学】\n・『千と千尋の神隠し』（2001年・アカデミー長編アニメーション賞、ベルリン国際映画祭金熊賞）。\n・『風の谷のナウシカ』『もののけ姫』『君たちはどう生きるか』（2023年アカデミー賞受賞）。\n・生態系アニミズム、飛行への憧憬、手描き原画の圧倒的な生命感。\n\n【是枝裕和の現代ヒューマニズム】\n・『万引き家族』（2018年・カンヌ国際映画祭最高賞パルム・ドール受賞）。\n・血縁を超えた家族の絆、社会の周縁で生きる人々の尊厳を静謐なリアリズムで描く。",
            "examples": [
                {
                    "target": "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                    "reading": "みやざきはやおかんとくの 『もののけひめ』は、タタラばの せいてつによる しぜんかいへんと もりの かみがみの たたかいをつうじて、にんげんと しぜんの あんいな ちょうわを はいした こんげんてきな きょうせいの かっとうを えがきだしました。",
                    "translation": "Director Hayao Miyazaki's 'Princess Mononoke', through the struggle between nature modification by Tatara ironmaking and the forest gods, depicted the fundamental agony of coexistence rejecting facile harmony between humans and nature."
                },
                {
                    "target": "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                    "reading": "スタジオジブリが つらぬく あっとうてきな てがきアニメーションの ちみつな さくがは、かぜの そよぎや みずの ながれ、ひしょうする しんたいの せいめいかんを ダイナミックに フィルムに ていちゃくさせます。",
                    "translation": "The meticulous drawing of overwhelming hand-drawn animation upheld by Studio Ghibli dynamically fixes onto film the rustling of wind, the flow of water, and the vitality of soaring bodies."
                },
                {
                    "target": "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                    "reading": "これえだひろかずかんとくの 『まんびきかぞく』は、カンヌこくさいえいがさい パルム・ドールを じゅしょうし、けつえんによらない ぎじかぞくの ぬくもりと かくさしゃかいの つうせつな げんじつを せかいの かんきゃくに つきつけました。",
                    "translation": "Director Hirokazu Kore-eda's 'Shoplifters' won the Cannes Palme d'Or, presenting to world audiences the warmth of a pseudo-family not bound by blood ties and the poignant reality of a divided society."
                },
                {
                    "target": "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                    "reading": "げんだいにほんの えいぞうさっかたちは、アニメーションと じっしゃえいがの そうほうにおいて、にんげんの じつぞんてきそんげんと エコロジーの りんりを せかいに むけて はっしんしつづけています。",
                    "translation": "Modern Japanese filmmakers, in both animation and live-action cinema, continue to broadcast human existential dignity and ecological ethics to the world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問30.2.1）。",
                    "options": [
                        "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                        "国際条約法に反する法的誤謬（30.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（30.2.2）",
                        "外交慣例に悖る修辞的欠陥文（30.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習30.2）。",
                    "options": [
                        "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                        "対立を無用に煽る不見識な声明文（30.2.x）",
                        "法的拘束力のない不完全な折衝文（30.2.y）",
                        "条約の留保条件を乱用した無効文（30.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u30-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                        "安全保障理事会決議の権能を無視した記述（30.2.a）",
                        "平和維持部隊の法的根拠を欠く文（30.2.b）",
                        "国際司法裁判所の判例に背く記述（30.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試30-2）。",
                    "options": [
                        "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                        "条約履行義務を軽視した無効文（30.2.m）",
                        "全権委任状の要件を欠く不備文（30.2.n）",
                        "寄託手続きの誤謬文（30.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u30-l2）の主要外交用語を入力してください（「宮崎駿監」）：",
                    "acceptedAnswers": [
                        "宮崎駿監",
                        "宮崎駿監督の"
                    ],
                    "explanation": "正解の外交用語は「宮崎駿監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l3": {
        "id": "ja-u30-l3",
        "subject": "japanese",
        "unit": 30,
        "lessonNumber": 3,
        "title": "日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第3部）",
        "level": "C1",
        "objective": "宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第3部）。",
        "presentation": {
            "explanation": "第三十単元第3課では、手描きアニメーションの極致として世界のアカデミー賞やベルリン金熊賞を獲得した宮崎駿（スタジオジブリ）のエコロジー神話および是枝裕和監督の人間主義的リアリズムを学びます。\n\n【宮崎駿とスタジオジブリの哲学】\n・『千と千尋の神隠し』（2001年・アカデミー長編アニメーション賞、ベルリン国際映画祭金熊賞）。\n・『風の谷のナウシカ』『もののけ姫』『君たちはどう生きるか』（2023年アカデミー賞受賞）。\n・生態系アニミズム、飛行への憧憬、手描き原画の圧倒的な生命感。\n\n【是枝裕和の現代ヒューマニズム】\n・『万引き家族』（2018年・カンヌ国際映画祭最高賞パルム・ドール受賞）。\n・血縁を超えた家族の絆、社会の周縁で生きる人々の尊厳を静謐なリアリズムで描く。",
            "examples": [
                {
                    "target": "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                    "reading": "みやざきはやおかんとくの 『もののけひめ』は、タタラばの せいてつによる しぜんかいへんと もりの かみがみの たたかいをつうじて、にんげんと しぜんの あんいな ちょうわを はいした こんげんてきな きょうせいの かっとうを えがきだしました。",
                    "translation": "Director Hayao Miyazaki's 'Princess Mononoke', through the struggle between nature modification by Tatara ironmaking and the forest gods, depicted the fundamental agony of coexistence rejecting facile harmony between humans and nature."
                },
                {
                    "target": "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                    "reading": "スタジオジブリが つらぬく あっとうてきな てがきアニメーションの ちみつな さくがは、かぜの そよぎや みずの ながれ、ひしょうする しんたいの せいめいかんを ダイナミックに フィルムに ていちゃくさせます。",
                    "translation": "The meticulous drawing of overwhelming hand-drawn animation upheld by Studio Ghibli dynamically fixes onto film the rustling of wind, the flow of water, and the vitality of soaring bodies."
                },
                {
                    "target": "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                    "reading": "これえだひろかずかんとくの 『まんびきかぞく』は、カンヌこくさいえいがさい パルム・ドールを じゅしょうし、けつえんによらない ぎじかぞくの ぬくもりと かくさしゃかいの つうせつな げんじつを せかいの かんきゃくに つきつけました。",
                    "translation": "Director Hirokazu Kore-eda's 'Shoplifters' won the Cannes Palme d'Or, presenting to world audiences the warmth of a pseudo-family not bound by blood ties and the poignant reality of a divided society."
                },
                {
                    "target": "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                    "reading": "げんだいにほんの えいぞうさっかたちは、アニメーションと じっしゃえいがの そうほうにおいて、にんげんの じつぞんてきそんげんと エコロジーの りんりを せかいに むけて はっしんしつづけています。",
                    "translation": "Modern Japanese filmmakers, in both animation and live-action cinema, continue to broadcast human existential dignity and ecological ethics to the world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問30.3.1）。",
                    "options": [
                        "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                        "国際条約法に反する法的誤謬（30.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（30.3.2）",
                        "外交慣例に悖る修辞的欠陥文（30.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習30.3）。",
                    "options": [
                        "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                        "対立を無用に煽る不見識な声明文（30.3.x）",
                        "法的拘束力のない不完全な折衝文（30.3.y）",
                        "条約の留保条件を乱用した無効文（30.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u30-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                        "安全保障理事会決議の権能を無視した記述（30.3.a）",
                        "平和維持部隊の法的根拠を欠く文（30.3.b）",
                        "国際司法裁判所の判例に背く記述（30.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試30-3）。",
                    "options": [
                        "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                        "条約履行義務を軽視した無効文（30.3.m）",
                        "全権委任状の要件を欠く不備文（30.3.n）",
                        "寄託手続きの誤謬文（30.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u30-l3）の主要外交用語を入力してください（「宮崎駿監」）：",
                    "acceptedAnswers": [
                        "宮崎駿監",
                        "宮崎駿監督の"
                    ],
                    "explanation": "正解の外交用語は「宮崎駿監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l4": {
        "id": "ja-u30-l4",
        "subject": "japanese",
        "unit": 30,
        "lessonNumber": 4,
        "title": "日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第4部）",
        "level": "C1",
        "objective": "宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第4部）。",
        "presentation": {
            "explanation": "第三十単元第4課では、手描きアニメーションの極致として世界のアカデミー賞やベルリン金熊賞を獲得した宮崎駿（スタジオジブリ）のエコロジー神話および是枝裕和監督の人間主義的リアリズムを学びます。\n\n【宮崎駿とスタジオジブリの哲学】\n・『千と千尋の神隠し』（2001年・アカデミー長編アニメーション賞、ベルリン国際映画祭金熊賞）。\n・『風の谷のナウシカ』『もののけ姫』『君たちはどう生きるか』（2023年アカデミー賞受賞）。\n・生態系アニミズム、飛行への憧憬、手描き原画の圧倒的な生命感。\n\n【是枝裕和の現代ヒューマニズム】\n・『万引き家族』（2018年・カンヌ国際映画祭最高賞パルム・ドール受賞）。\n・血縁を超えた家族の絆、社会の周縁で生きる人々の尊厳を静謐なリアリズムで描く。",
            "examples": [
                {
                    "target": "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                    "reading": "みやざきはやおかんとくの 『もののけひめ』は、タタラばの せいてつによる しぜんかいへんと もりの かみがみの たたかいをつうじて、にんげんと しぜんの あんいな ちょうわを はいした こんげんてきな きょうせいの かっとうを えがきだしました。",
                    "translation": "Director Hayao Miyazaki's 'Princess Mononoke', through the struggle between nature modification by Tatara ironmaking and the forest gods, depicted the fundamental agony of coexistence rejecting facile harmony between humans and nature."
                },
                {
                    "target": "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                    "reading": "スタジオジブリが つらぬく あっとうてきな てがきアニメーションの ちみつな さくがは、かぜの そよぎや みずの ながれ、ひしょうする しんたいの せいめいかんを ダイナミックに フィルムに ていちゃくさせます。",
                    "translation": "The meticulous drawing of overwhelming hand-drawn animation upheld by Studio Ghibli dynamically fixes onto film the rustling of wind, the flow of water, and the vitality of soaring bodies."
                },
                {
                    "target": "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                    "reading": "これえだひろかずかんとくの 『まんびきかぞく』は、カンヌこくさいえいがさい パルム・ドールを じゅしょうし、けつえんによらない ぎじかぞくの ぬくもりと かくさしゃかいの つうせつな げんじつを せかいの かんきゃくに つきつけました。",
                    "translation": "Director Hirokazu Kore-eda's 'Shoplifters' won the Cannes Palme d'Or, presenting to world audiences the warmth of a pseudo-family not bound by blood ties and the poignant reality of a divided society."
                },
                {
                    "target": "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                    "reading": "げんだいにほんの えいぞうさっかたちは、アニメーションと じっしゃえいがの そうほうにおいて、にんげんの じつぞんてきそんげんと エコロジーの りんりを せかいに むけて はっしんしつづけています。",
                    "translation": "Modern Japanese filmmakers, in both animation and live-action cinema, continue to broadcast human existential dignity and ecological ethics to the world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問30.4.1）。",
                    "options": [
                        "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                        "国際条約法に反する法的誤謬（30.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（30.4.2）",
                        "外交慣例に悖る修辞的欠陥文（30.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習30.4）。",
                    "options": [
                        "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                        "対立を無用に煽る不見識な声明文（30.4.x）",
                        "法的拘束力のない不完全な折衝文（30.4.y）",
                        "条約の留保条件を乱用した無効文（30.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u30-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                        "安全保障理事会決議の権能を無視した記述（30.4.a）",
                        "平和維持部隊の法的根拠を欠く文（30.4.b）",
                        "国際司法裁判所の判例に背く記述（30.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試30-4）。",
                    "options": [
                        "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                        "条約履行義務を軽視した無効文（30.4.m）",
                        "全権委任状の要件を欠く不備文（30.4.n）",
                        "寄託手続きの誤謬文（30.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u30-l4）の主要外交用語を入力してください（「宮崎駿監」）：",
                    "acceptedAnswers": [
                        "宮崎駿監",
                        "宮崎駿監督の"
                    ],
                    "explanation": "正解の外交用語は「宮崎駿監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u30-l5": {
        "id": "ja-u30-l5",
        "subject": "japanese",
        "unit": 30,
        "lessonNumber": 5,
        "title": "日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第5部）",
        "level": "C1",
        "objective": "宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第5部）。",
        "presentation": {
            "explanation": "第三十単元第5課では、手描きアニメーションの極致として世界のアカデミー賞やベルリン金熊賞を獲得した宮崎駿（スタジオジブリ）のエコロジー神話および是枝裕和監督の人間主義的リアリズムを学びます。\n\n【宮崎駿とスタジオジブリの哲学】\n・『千と千尋の神隠し』（2001年・アカデミー長編アニメーション賞、ベルリン国際映画祭金熊賞）。\n・『風の谷のナウシカ』『もののけ姫』『君たちはどう生きるか』（2023年アカデミー賞受賞）。\n・生態系アニミズム、飛行への憧憬、手描き原画の圧倒的な生命感。\n\n【是枝裕和の現代ヒューマニズム】\n・『万引き家族』（2018年・カンヌ国際映画祭最高賞パルム・ドール受賞）。\n・血縁を超えた家族の絆、社会の周縁で生きる人々の尊厳を静謐なリアリズムで描く。",
            "examples": [
                {
                    "target": "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                    "reading": "みやざきはやおかんとくの 『もののけひめ』は、タタラばの せいてつによる しぜんかいへんと もりの かみがみの たたかいをつうじて、にんげんと しぜんの あんいな ちょうわを はいした こんげんてきな きょうせいの かっとうを えがきだしました。",
                    "translation": "Director Hayao Miyazaki's 'Princess Mononoke', through the struggle between nature modification by Tatara ironmaking and the forest gods, depicted the fundamental agony of coexistence rejecting facile harmony between humans and nature."
                },
                {
                    "target": "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                    "reading": "スタジオジブリが つらぬく あっとうてきな てがきアニメーションの ちみつな さくがは、かぜの そよぎや みずの ながれ、ひしょうする しんたいの せいめいかんを ダイナミックに フィルムに ていちゃくさせます。",
                    "translation": "The meticulous drawing of overwhelming hand-drawn animation upheld by Studio Ghibli dynamically fixes onto film the rustling of wind, the flow of water, and the vitality of soaring bodies."
                },
                {
                    "target": "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                    "reading": "これえだひろかずかんとくの 『まんびきかぞく』は、カンヌこくさいえいがさい パルム・ドールを じゅしょうし、けつえんによらない ぎじかぞくの ぬくもりと かくさしゃかいの つうせつな げんじつを せかいの かんきゃくに つきつけました。",
                    "translation": "Director Hirokazu Kore-eda's 'Shoplifters' won the Cannes Palme d'Or, presenting to world audiences the warmth of a pseudo-family not bound by blood ties and the poignant reality of a divided society."
                },
                {
                    "target": "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                    "reading": "げんだいにほんの えいぞうさっかたちは、アニメーションと じっしゃえいがの そうほうにおいて、にんげんの じつぞんてきそんげんと エコロジーの りんりを せかいに むけて はっしんしつづけています。",
                    "translation": "Modern Japanese filmmakers, in both animation and live-action cinema, continue to broadcast human existential dignity and ecological ethics to the world."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問30.5.1）。",
                    "options": [
                        "宮崎駿監督の『もののけ姫』は、タタラ場の製鉄による自然改変と森の神々の戦いを通じて、人間と自然の安易な調和を排した根源的な共生の葛藤を描き出しました。",
                        "国際条約法に反する法的誤謬（30.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（30.5.2）",
                        "外交慣例に悖る修辞的欠陥文（30.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】宮崎駿（手描きアニメーションの生命感と生態系倫理）、是枝裕和（現代的リアリズム）の映像哲学（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習30.5）。",
                    "options": [
                        "スタジオジブリが貫く圧倒的な手描きアニメーションの緻密な作画は、風のそよぎや水の流れ、飛翔する身体の生命感をダイナミックにフィルムに定着させます。",
                        "対立を無用に煽る不見識な声明文（30.5.x）",
                        "法的拘束力のない不完全な折衝文（30.5.y）",
                        "条約の留保条件を乱用した無効文（30.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u30-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "是枝裕和監督の『万引き家族』は、カンヌ国際映画祭パルム・ドールを受賞し、血縁によらない疑似家族の温もりと格差社会の痛切な現実を世界の観客に突きつけました。",
                        "安全保障理事会決議の権能を無視した記述（30.5.a）",
                        "平和維持部隊の法的根拠を欠く文（30.5.b）",
                        "国際司法裁判所の判例に背く記述（30.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】日本映画・アニメーションの世界的極致と宮崎駿の人道主義（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試30-5）。",
                    "options": [
                        "現代日本の映像作家たちは、アニメーションと実写映画の双方において、人間の実存的尊厳とエコロジーの倫理を世界に向けて発信し続けています。",
                        "条約履行義務を軽視した無効文（30.5.m）",
                        "全権委任状の要件を欠く不備文（30.5.n）",
                        "寄託手続きの誤謬文（30.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u30-l5）の主要外交用語を入力してください（「宮崎駿監」）：",
                    "acceptedAnswers": [
                        "宮崎駿監",
                        "宮崎駿監督の"
                    ],
                    "explanation": "正解の外交用語は「宮崎駿監」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l1": {
        "id": "ja-u31-l1",
        "subject": "japanese",
        "unit": 31,
        "lessonNumber": 1,
        "title": "和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第1部）",
        "level": "C2",
        "objective": "ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第1部）。",
        "presentation": {
            "explanation": "第三十一単元第1課では、2013年にユネスコ無形文化遺産に登録された「和食（日本人の伝統的な食文化）」の構造論および、懐石料理・江戸前鮨の至高の調理哲学を学びます。\n\n【和食文化の四大特質】\n１．新鮮な食材とその持ち味の尊重。\n２．健康的な食生活を支える栄養バランス（一汁三菜）。\n３．自然の美しさや季節の移ろいの表現（走り・旬・名残り）。\n４．正月などの年中行事との密接な関わり。\n\n【至高の料理様式】\n・懐石料理：茶道に由来する旬の調和。魯山人の「器は料理の着物である」という器と料理の一体美。\n・江戸前鮨の技法：塩締め・酢締め・昆布締め・煮切りの塗布など、伝統的な仕込み仕事の妙。",
            "examples": [
                {
                    "target": "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                    "reading": "ユネスコむけいぶんかいさんに とうろくされた わしょくは、いちじゅうさんさいを きほんとする えいようバランスのたかさと、しきの うつろいを せんさいに ひょうげんする うつわと りょうりの いったいびを とくちょうとしています。",
                    "translation": "Washoku, registered as a UNESCO Intangible Cultural Heritage, is characterized by the high nutritional balance based on one soup and three dishes, and the unified beauty of vessels and cuisine delicately expressing the transition of four seasons."
                },
                {
                    "target": "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                    "reading": "かいせきりょうりにおける 「はしり・しゅん・なごり」の しょくざいの つかいわけは、しぜんの めぐみの せいめいサイクルにたいする ふかい けいいと ふうりゅうな びいしきを たいげんしています。",
                    "translation": "The distinct use of 'early arrival, peak season, and lingering farewell' ingredients in kaiseki cuisine embodies deep respect for the life cycle of nature's blessings and an elegant aesthetic sensibility."
                },
                {
                    "target": "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                    "reading": "えどまえずしの しょく人は、まぐろの あかみの ゆびきづけや こはだの すじめなど、そざいの うまみを きょくげんまで ひきだす でんとうてきな しこみしごとを ほどこします。",
                    "translation": "Edomae sushi masters apply traditional preparatory craftsmanship, such as hot-water blanching and soy-marinating tuna red meat or vinegar-curing gizzard shad, to draw out the ingredients' umami to the absolute limit."
                },
                {
                    "target": "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                    "reading": "きたおおじろさんじんが といた 「うつわは りょうりの きもの」という きんげんは、にほんの しょくぶんかにおいて しかくてきちょうわが みか固体けんをと 分かちがたく むすびついていることを しめしています。",
                    "translation": "The maxim expounded by Kitaoji Rosanjin that 'Tableware is the kimono of cuisine' demonstrates that in Japanese food culture, visual harmony is inextricably bound to the gustatory experience."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問31.1.1）。",
                    "options": [
                        "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                        "国際条約法に反する法的誤謬（31.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（31.1.2）",
                        "外交慣例に悖る修辞的欠陥文（31.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習31.1）。",
                    "options": [
                        "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                        "対立を無用に煽る不見識な声明文（31.1.x）",
                        "法的拘束力のない不完全な折衝文（31.1.y）",
                        "条約の留保条件を乱用した無効文（31.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u31-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                        "安全保障理事会決議の権能を無視した記述（31.1.a）",
                        "平和維持部隊の法的根拠を欠く文（31.1.b）",
                        "国際司法裁判所の判例に背く記述（31.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試31-1）。",
                    "options": [
                        "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                        "条約履行義務を軽視した無効文（31.1.m）",
                        "全権委任状の要件を欠く不備文（31.1.n）",
                        "寄託手続きの誤謬文（31.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u31-l1）の主要外交用語を入力してください（「ユネスコ」）：",
                    "acceptedAnswers": [
                        "ユネスコ",
                        "ユネスコ無形"
                    ],
                    "explanation": "正解の外交用語は「ユネスコ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l2": {
        "id": "ja-u31-l2",
        "subject": "japanese",
        "unit": 31,
        "lessonNumber": 2,
        "title": "和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第2部）",
        "level": "C2",
        "objective": "ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第2部）。",
        "presentation": {
            "explanation": "第三十一単元第2課では、2013年にユネスコ無形文化遺産に登録された「和食（日本人の伝統的な食文化）」の構造論および、懐石料理・江戸前鮨の至高の調理哲学を学びます。\n\n【和食文化の四大特質】\n１．新鮮な食材とその持ち味の尊重。\n２．健康的な食生活を支える栄養バランス（一汁三菜）。\n３．自然の美しさや季節の移ろいの表現（走り・旬・名残り）。\n４．正月などの年中行事との密接な関わり。\n\n【至高の料理様式】\n・懐石料理：茶道に由来する旬の調和。魯山人の「器は料理の着物である」という器と料理の一体美。\n・江戸前鮨の技法：塩締め・酢締め・昆布締め・煮切りの塗布など、伝統的な仕込み仕事の妙。",
            "examples": [
                {
                    "target": "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                    "reading": "ユネスコむけいぶんかいさんに とうろくされた わしょくは、いちじゅうさんさいを きほんとする えいようバランスのたかさと、しきの うつろいを せんさいに ひょうげんする うつわと りょうりの いったいびを とくちょうとしています。",
                    "translation": "Washoku, registered as a UNESCO Intangible Cultural Heritage, is characterized by the high nutritional balance based on one soup and three dishes, and the unified beauty of vessels and cuisine delicately expressing the transition of four seasons."
                },
                {
                    "target": "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                    "reading": "かいせきりょうりにおける 「はしり・しゅん・なごり」の しょくざいの つかいわけは、しぜんの めぐみの せいめいサイクルにたいする ふかい けいいと ふうりゅうな びいしきを たいげんしています。",
                    "translation": "The distinct use of 'early arrival, peak season, and lingering farewell' ingredients in kaiseki cuisine embodies deep respect for the life cycle of nature's blessings and an elegant aesthetic sensibility."
                },
                {
                    "target": "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                    "reading": "えどまえずしの しょく人は、まぐろの あかみの ゆびきづけや こはだの すじめなど、そざいの うまみを きょくげんまで ひきだす でんとうてきな しこみしごとを ほどこします。",
                    "translation": "Edomae sushi masters apply traditional preparatory craftsmanship, such as hot-water blanching and soy-marinating tuna red meat or vinegar-curing gizzard shad, to draw out the ingredients' umami to the absolute limit."
                },
                {
                    "target": "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                    "reading": "きたおおじろさんじんが といた 「うつわは りょうりの きもの」という きんげんは、にほんの しょくぶんかにおいて しかくてきちょうわが みか固体けんをと 分かちがたく むすびついていることを しめしています。",
                    "translation": "The maxim expounded by Kitaoji Rosanjin that 'Tableware is the kimono of cuisine' demonstrates that in Japanese food culture, visual harmony is inextricably bound to the gustatory experience."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問31.2.1）。",
                    "options": [
                        "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                        "国際条約法に反する法的誤謬（31.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（31.2.2）",
                        "外交慣例に悖る修辞的欠陥文（31.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習31.2）。",
                    "options": [
                        "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                        "対立を無用に煽る不見識な声明文（31.2.x）",
                        "法的拘束力のない不完全な折衝文（31.2.y）",
                        "条約の留保条件を乱用した無効文（31.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u31-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                        "安全保障理事会決議の権能を無視した記述（31.2.a）",
                        "平和維持部隊の法的根拠を欠く文（31.2.b）",
                        "国際司法裁判所の判例に背く記述（31.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試31-2）。",
                    "options": [
                        "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                        "条約履行義務を軽視した無効文（31.2.m）",
                        "全権委任状の要件を欠く不備文（31.2.n）",
                        "寄託手続きの誤謬文（31.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u31-l2）の主要外交用語を入力してください（「ユネスコ」）：",
                    "acceptedAnswers": [
                        "ユネスコ",
                        "ユネスコ無形"
                    ],
                    "explanation": "正解の外交用語は「ユネスコ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l3": {
        "id": "ja-u31-l3",
        "subject": "japanese",
        "unit": 31,
        "lessonNumber": 3,
        "title": "和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第3部）",
        "level": "C2",
        "objective": "ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第3部）。",
        "presentation": {
            "explanation": "第三十一単元第3課では、2013年にユネスコ無形文化遺産に登録された「和食（日本人の伝統的な食文化）」の構造論および、懐石料理・江戸前鮨の至高の調理哲学を学びます。\n\n【和食文化の四大特質】\n１．新鮮な食材とその持ち味の尊重。\n２．健康的な食生活を支える栄養バランス（一汁三菜）。\n３．自然の美しさや季節の移ろいの表現（走り・旬・名残り）。\n４．正月などの年中行事との密接な関わり。\n\n【至高の料理様式】\n・懐石料理：茶道に由来する旬の調和。魯山人の「器は料理の着物である」という器と料理の一体美。\n・江戸前鮨の技法：塩締め・酢締め・昆布締め・煮切りの塗布など、伝統的な仕込み仕事の妙。",
            "examples": [
                {
                    "target": "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                    "reading": "ユネスコむけいぶんかいさんに とうろくされた わしょくは、いちじゅうさんさいを きほんとする えいようバランスのたかさと、しきの うつろいを せんさいに ひょうげんする うつわと りょうりの いったいびを とくちょうとしています。",
                    "translation": "Washoku, registered as a UNESCO Intangible Cultural Heritage, is characterized by the high nutritional balance based on one soup and three dishes, and the unified beauty of vessels and cuisine delicately expressing the transition of four seasons."
                },
                {
                    "target": "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                    "reading": "かいせきりょうりにおける 「はしり・しゅん・なごり」の しょくざいの つかいわけは、しぜんの めぐみの せいめいサイクルにたいする ふかい けいいと ふうりゅうな びいしきを たいげんしています。",
                    "translation": "The distinct use of 'early arrival, peak season, and lingering farewell' ingredients in kaiseki cuisine embodies deep respect for the life cycle of nature's blessings and an elegant aesthetic sensibility."
                },
                {
                    "target": "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                    "reading": "えどまえずしの しょく人は、まぐろの あかみの ゆびきづけや こはだの すじめなど、そざいの うまみを きょくげんまで ひきだす でんとうてきな しこみしごとを ほどこします。",
                    "translation": "Edomae sushi masters apply traditional preparatory craftsmanship, such as hot-water blanching and soy-marinating tuna red meat or vinegar-curing gizzard shad, to draw out the ingredients' umami to the absolute limit."
                },
                {
                    "target": "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                    "reading": "きたおおじろさんじんが といた 「うつわは りょうりの きもの」という きんげんは、にほんの しょくぶんかにおいて しかくてきちょうわが みか固体けんをと 分かちがたく むすびついていることを しめしています。",
                    "translation": "The maxim expounded by Kitaoji Rosanjin that 'Tableware is the kimono of cuisine' demonstrates that in Japanese food culture, visual harmony is inextricably bound to the gustatory experience."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問31.3.1）。",
                    "options": [
                        "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                        "国際条約法に反する法的誤謬（31.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（31.3.2）",
                        "外交慣例に悖る修辞的欠陥文（31.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習31.3）。",
                    "options": [
                        "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                        "対立を無用に煽る不見識な声明文（31.3.x）",
                        "法的拘束力のない不完全な折衝文（31.3.y）",
                        "条約の留保条件を乱用した無効文（31.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u31-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                        "安全保障理事会決議の権能を無視した記述（31.3.a）",
                        "平和維持部隊の法的根拠を欠く文（31.3.b）",
                        "国際司法裁判所の判例に背く記述（31.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試31-3）。",
                    "options": [
                        "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                        "条約履行義務を軽視した無効文（31.3.m）",
                        "全権委任状の要件を欠く不備文（31.3.n）",
                        "寄託手続きの誤謬文（31.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u31-l3）の主要外交用語を入力してください（「ユネスコ」）：",
                    "acceptedAnswers": [
                        "ユネスコ",
                        "ユネスコ無形"
                    ],
                    "explanation": "正解の外交用語は「ユネスコ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l4": {
        "id": "ja-u31-l4",
        "subject": "japanese",
        "unit": 31,
        "lessonNumber": 4,
        "title": "和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第4部）",
        "level": "C2",
        "objective": "ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第4部）。",
        "presentation": {
            "explanation": "第三十一単元第4課では、2013年にユネスコ無形文化遺産に登録された「和食（日本人の伝統的な食文化）」の構造論および、懐石料理・江戸前鮨の至高の調理哲学を学びます。\n\n【和食文化の四大特質】\n１．新鮮な食材とその持ち味の尊重。\n２．健康的な食生活を支える栄養バランス（一汁三菜）。\n３．自然の美しさや季節の移ろいの表現（走り・旬・名残り）。\n４．正月などの年中行事との密接な関わり。\n\n【至高の料理様式】\n・懐石料理：茶道に由来する旬の調和。魯山人の「器は料理の着物である」という器と料理の一体美。\n・江戸前鮨の技法：塩締め・酢締め・昆布締め・煮切りの塗布など、伝統的な仕込み仕事の妙。",
            "examples": [
                {
                    "target": "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                    "reading": "ユネスコむけいぶんかいさんに とうろくされた わしょくは、いちじゅうさんさいを きほんとする えいようバランスのたかさと、しきの うつろいを せんさいに ひょうげんする うつわと りょうりの いったいびを とくちょうとしています。",
                    "translation": "Washoku, registered as a UNESCO Intangible Cultural Heritage, is characterized by the high nutritional balance based on one soup and three dishes, and the unified beauty of vessels and cuisine delicately expressing the transition of four seasons."
                },
                {
                    "target": "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                    "reading": "かいせきりょうりにおける 「はしり・しゅん・なごり」の しょくざいの つかいわけは、しぜんの めぐみの せいめいサイクルにたいする ふかい けいいと ふうりゅうな びいしきを たいげんしています。",
                    "translation": "The distinct use of 'early arrival, peak season, and lingering farewell' ingredients in kaiseki cuisine embodies deep respect for the life cycle of nature's blessings and an elegant aesthetic sensibility."
                },
                {
                    "target": "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                    "reading": "えどまえずしの しょく人は、まぐろの あかみの ゆびきづけや こはだの すじめなど、そざいの うまみを きょくげんまで ひきだす でんとうてきな しこみしごとを ほどこします。",
                    "translation": "Edomae sushi masters apply traditional preparatory craftsmanship, such as hot-water blanching and soy-marinating tuna red meat or vinegar-curing gizzard shad, to draw out the ingredients' umami to the absolute limit."
                },
                {
                    "target": "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                    "reading": "きたおおじろさんじんが といた 「うつわは りょうりの きもの」という きんげんは、にほんの しょくぶんかにおいて しかくてきちょうわが みか固体けんをと 分かちがたく むすびついていることを しめしています。",
                    "translation": "The maxim expounded by Kitaoji Rosanjin that 'Tableware is the kimono of cuisine' demonstrates that in Japanese food culture, visual harmony is inextricably bound to the gustatory experience."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問31.4.1）。",
                    "options": [
                        "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                        "国際条約法に反する法的誤謬（31.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（31.4.2）",
                        "外交慣例に悖る修辞的欠陥文（31.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習31.4）。",
                    "options": [
                        "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                        "対立を無用に煽る不見識な声明文（31.4.x）",
                        "法的拘束力のない不完全な折衝文（31.4.y）",
                        "条約の留保条件を乱用した無効文（31.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u31-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                        "安全保障理事会決議の権能を無視した記述（31.4.a）",
                        "平和維持部隊の法的根拠を欠く文（31.4.b）",
                        "国際司法裁判所の判例に背く記述（31.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試31-4）。",
                    "options": [
                        "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                        "条約履行義務を軽視した無効文（31.4.m）",
                        "全権委任状の要件を欠く不備文（31.4.n）",
                        "寄託手続きの誤謬文（31.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u31-l4）の主要外交用語を入力してください（「ユネスコ」）：",
                    "acceptedAnswers": [
                        "ユネスコ",
                        "ユネスコ無形"
                    ],
                    "explanation": "正解の外交用語は「ユネスコ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u31-l5": {
        "id": "ja-u31-l5",
        "subject": "japanese",
        "unit": 31,
        "lessonNumber": 5,
        "title": "和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第5部）",
        "level": "C2",
        "objective": "ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第5部）。",
        "presentation": {
            "explanation": "第三十一単元第5課では、2013年にユネスコ無形文化遺産に登録された「和食（日本人の伝統的な食文化）」の構造論および、懐石料理・江戸前鮨の至高の調理哲学を学びます。\n\n【和食文化の四大特質】\n１．新鮮な食材とその持ち味の尊重。\n２．健康的な食生活を支える栄養バランス（一汁三菜）。\n３．自然の美しさや季節の移ろいの表現（走り・旬・名残り）。\n４．正月などの年中行事との密接な関わり。\n\n【至高の料理様式】\n・懐石料理：茶道に由来する旬の調和。魯山人の「器は料理の着物である」という器と料理の一体美。\n・江戸前鮨の技法：塩締め・酢締め・昆布締め・煮切りの塗布など、伝統的な仕込み仕事の妙。",
            "examples": [
                {
                    "target": "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                    "reading": "ユネスコむけいぶんかいさんに とうろくされた わしょくは、いちじゅうさんさいを きほんとする えいようバランスのたかさと、しきの うつろいを せんさいに ひょうげんする うつわと りょうりの いったいびを とくちょうとしています。",
                    "translation": "Washoku, registered as a UNESCO Intangible Cultural Heritage, is characterized by the high nutritional balance based on one soup and three dishes, and the unified beauty of vessels and cuisine delicately expressing the transition of four seasons."
                },
                {
                    "target": "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                    "reading": "かいせきりょうりにおける 「はしり・しゅん・なごり」の しょくざいの つかいわけは、しぜんの めぐみの せいめいサイクルにたいする ふかい けいいと ふうりゅうな びいしきを たいげんしています。",
                    "translation": "The distinct use of 'early arrival, peak season, and lingering farewell' ingredients in kaiseki cuisine embodies deep respect for the life cycle of nature's blessings and an elegant aesthetic sensibility."
                },
                {
                    "target": "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                    "reading": "えどまえずしの しょく人は、まぐろの あかみの ゆびきづけや こはだの すじめなど、そざいの うまみを きょくげんまで ひきだす でんとうてきな しこみしごとを ほどこします。",
                    "translation": "Edomae sushi masters apply traditional preparatory craftsmanship, such as hot-water blanching and soy-marinating tuna red meat or vinegar-curing gizzard shad, to draw out the ingredients' umami to the absolute limit."
                },
                {
                    "target": "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                    "reading": "きたおおじろさんじんが といた 「うつわは りょうりの きもの」という きんげんは、にほんの しょくぶんかにおいて しかくてきちょうわが みか固体けんをと 分かちがたく むすびついていることを しめしています。",
                    "translation": "The maxim expounded by Kitaoji Rosanjin that 'Tableware is the kimono of cuisine' demonstrates that in Japanese food culture, visual harmony is inextricably bound to the gustatory experience."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問31.5.1）。",
                    "options": [
                        "ユネスコ無形文化遺産に登録された和食は、一汁三菜を基本とする栄養バランスの高さと、四季の移ろいを繊細に表現する器と料理の一体美を特徴としています。",
                        "国際条約法に反する法的誤謬（31.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（31.5.2）",
                        "外交慣例に悖る修辞的欠陥文（31.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】ユネスコ無形文化遺産の和食四大原則、懐石料理の一汁三菜、江戸前鮨の熟成と酢締め技術（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習31.5）。",
                    "options": [
                        "懐石料理における「走り・旬・名残り」の食材の使い分けは、自然の恵みの生命サイクルに対する深い敬意と風流な美意識を体現しています。",
                        "対立を無用に煽る不見識な声明文（31.5.x）",
                        "法的拘束力のない不完全な折衝文（31.5.y）",
                        "条約の留保条件を乱用した無効文（31.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u31-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "江戸前鮨の職人は、鮪の赤身の湯引き漬けや小鰭の酢締めなど、素材の旨味を極限まで引き出す伝統的な仕込み仕事を施します。",
                        "安全保障理事会決議の権能を無視した記述（31.5.a）",
                        "平和維持部隊の法的根拠を欠く文（31.5.b）",
                        "国際司法裁判所の判例に背く記述（31.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】和食文化・ユネスコ無形文化遺産と懐石・江戸前鮨の極致（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試31-5）。",
                    "options": [
                        "北大路魯山人が説いた「器は料理の着物」という金言は、日本の食文化において視覚的調和が味覚体験と分かち難く結びついていることを示しています。",
                        "条約履行義務を軽視した無効文（31.5.m）",
                        "全権委任状の要件を欠く不備文（31.5.n）",
                        "寄託手続きの誤謬文（31.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u31-l5）の主要外交用語を入力してください（「ユネスコ」）：",
                    "acceptedAnswers": [
                        "ユネスコ",
                        "ユネスコ無形"
                    ],
                    "explanation": "正解の外交用語は「ユネスコ」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l1": {
        "id": "ja-u32-l1",
        "subject": "japanese",
        "unit": 32,
        "lessonNumber": 1,
        "title": "能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第1部）",
        "level": "C2",
        "objective": "世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第1部）。",
        "presentation": {
            "explanation": "第三十二単元第1課では、中世日本の能楽理論から二十世紀後半の世界的前衛身体芸術「暗黒舞踏」に至る、日本演劇美学の深奥を学びます。\n\n【世阿弥の能楽芸術論】\n１．「花」：一過性の「時分の花」から、生涯の鍛錬を経た老境の「まことの花」への深化。\n２．「秘すれば花」：観客の内面的想像力に委ねることで成立する幽玄。\n３．「初心忘るるべからず」：各段階における未熟さ・新たな課題に対する謙虚な姿勢を生涯維持せよという戒め。\n\n【狂言と暗黒舞踏】\n・狂言：太郎冠者と大名の対話による庶民の逞しい喜劇劇（名作『附子』）。\n・暗黒舞踏：土方巽と大野一雄により創始。白塗りと重力に抗わない沈床の身体技法による前衛的身体芸術。",
            "examples": [
                {
                    "target": "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                    "reading": "ぜあみが のこした 『ふうしかでん』の 「しょしん わするるべからず」という きんげんは、かくねんだいにおいて ちょくめんする あらたな しれんと じこの みじゅくさにたいする しょうがいの けんきょな しせいを いましめています。",
                    "translation": "The maxim 'Never forget the beginner's mind' left by Zeami in the 'Fushikaden' admonishes a lifelong humble posture toward the new ordeals and self-immaturity faced at each stage of life."
                },
                {
                    "target": "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                    "reading": "きょうげんの けっさく 『ぶす』において、しゅじんの ふざいちゅうに どくと いつわられた くろざとうを ぬすみぐいする たろうかじゃと じろうかじゃの きちに とんだ たいわは、しょみんの たくましい わらいを みごとに えがきだします。",
                    "translation": "In the Kyogen masterpiece 'Busu', the witty dialogue of Taro Kaja and Jiro Kaja secretly eating brown sugar falsely described as poison during their master's absence brilliantly portrays the robust laughter of common people."
                },
                {
                    "target": "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                    "reading": "ひじかたたつみと おおのかずおが そうしした あんこくぶとうは、しろぬりの にくたいと じゅうりょくに あらがわない ちんしょうの しんたいぎほうによって、せいようの モダンダンスかいに きょうれつな ぜんえいてきしょうげきを あたえました。",
                    "translation": "Ankoku Butoh, founded by Tatsumi Hijikata and Kazuo Ohno, delivered an intense avant-garde shock to the Western modern dance world through white-painted bodies and physical techniques sinking toward the floor without resisting gravity."
                },
                {
                    "target": "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                    "reading": "にほんの ぶたいげいじゅつは、のうがくの せいひつな ゆうげんから きょうげんの けいみょうな わらい、ぶとうの ぜんえいてきしんたいせいまで、せいしんと にくたいの きょくげんを たんきゅうしつづけています。",
                    "translation": "Japanese performing arts, from the serene yugen of Noh to the lighthearted laughter of Kyogen and the avant-garde physicality of Butoh, continue to explore the limits of spirit and flesh."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問32.1.1）。",
                    "options": [
                        "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                        "国際条約法に反する法的誤謬（32.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（32.1.2）",
                        "外交慣例に悖る修辞的欠陥文（32.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習32.1）。",
                    "options": [
                        "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                        "対立を無用に煽る不見識な声明文（32.1.x）",
                        "法的拘束力のない不完全な折衝文（32.1.y）",
                        "条約の留保条件を乱用した無効文（32.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u32-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                        "安全保障理事会決議の権能を無視した記述（32.1.a）",
                        "平和維持部隊の法的根拠を欠く文（32.1.b）",
                        "国際司法裁判所の判例に背く記述（32.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試32-1）。",
                    "options": [
                        "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                        "条約履行義務を軽視した無効文（32.1.m）",
                        "全権委任状の要件を欠く不備文（32.1.n）",
                        "寄託手続きの誤謬文（32.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u32-l1）の主要外交用語を入力してください（「世阿弥が」）：",
                    "acceptedAnswers": [
                        "世阿弥が",
                        "世阿弥が遺し"
                    ],
                    "explanation": "正解の外交用語は「世阿弥が」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l2": {
        "id": "ja-u32-l2",
        "subject": "japanese",
        "unit": 32,
        "lessonNumber": 2,
        "title": "能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第2部）",
        "level": "C2",
        "objective": "世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第2部）。",
        "presentation": {
            "explanation": "第三十二単元第2課では、中世日本の能楽理論から二十世紀後半の世界的前衛身体芸術「暗黒舞踏」に至る、日本演劇美学の深奥を学びます。\n\n【世阿弥の能楽芸術論】\n１．「花」：一過性の「時分の花」から、生涯の鍛錬を経た老境の「まことの花」への深化。\n２．「秘すれば花」：観客の内面的想像力に委ねることで成立する幽玄。\n３．「初心忘るるべからず」：各段階における未熟さ・新たな課題に対する謙虚な姿勢を生涯維持せよという戒め。\n\n【狂言と暗黒舞踏】\n・狂言：太郎冠者と大名の対話による庶民の逞しい喜劇劇（名作『附子』）。\n・暗黒舞踏：土方巽と大野一雄により創始。白塗りと重力に抗わない沈床の身体技法による前衛的身体芸術。",
            "examples": [
                {
                    "target": "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                    "reading": "ぜあみが のこした 『ふうしかでん』の 「しょしん わするるべからず」という きんげんは、かくねんだいにおいて ちょくめんする あらたな しれんと じこの みじゅくさにたいする しょうがいの けんきょな しせいを いましめています。",
                    "translation": "The maxim 'Never forget the beginner's mind' left by Zeami in the 'Fushikaden' admonishes a lifelong humble posture toward the new ordeals and self-immaturity faced at each stage of life."
                },
                {
                    "target": "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                    "reading": "きょうげんの けっさく 『ぶす』において、しゅじんの ふざいちゅうに どくと いつわられた くろざとうを ぬすみぐいする たろうかじゃと じろうかじゃの きちに とんだ たいわは、しょみんの たくましい わらいを みごとに えがきだします。",
                    "translation": "In the Kyogen masterpiece 'Busu', the witty dialogue of Taro Kaja and Jiro Kaja secretly eating brown sugar falsely described as poison during their master's absence brilliantly portrays the robust laughter of common people."
                },
                {
                    "target": "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                    "reading": "ひじかたたつみと おおのかずおが そうしした あんこくぶとうは、しろぬりの にくたいと じゅうりょくに あらがわない ちんしょうの しんたいぎほうによって、せいようの モダンダンスかいに きょうれつな ぜんえいてきしょうげきを あたえました。",
                    "translation": "Ankoku Butoh, founded by Tatsumi Hijikata and Kazuo Ohno, delivered an intense avant-garde shock to the Western modern dance world through white-painted bodies and physical techniques sinking toward the floor without resisting gravity."
                },
                {
                    "target": "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                    "reading": "にほんの ぶたいげいじゅつは、のうがくの せいひつな ゆうげんから きょうげんの けいみょうな わらい、ぶとうの ぜんえいてきしんたいせいまで、せいしんと にくたいの きょくげんを たんきゅうしつづけています。",
                    "translation": "Japanese performing arts, from the serene yugen of Noh to the lighthearted laughter of Kyogen and the avant-garde physicality of Butoh, continue to explore the limits of spirit and flesh."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問32.2.1）。",
                    "options": [
                        "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                        "国際条約法に反する法的誤謬（32.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（32.2.2）",
                        "外交慣例に悖る修辞的欠陥文（32.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習32.2）。",
                    "options": [
                        "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                        "対立を無用に煽る不見識な声明文（32.2.x）",
                        "法的拘束力のない不完全な折衝文（32.2.y）",
                        "条約の留保条件を乱用した無効文（32.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u32-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                        "安全保障理事会決議の権能を無視した記述（32.2.a）",
                        "平和維持部隊の法的根拠を欠く文（32.2.b）",
                        "国際司法裁判所の判例に背く記述（32.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試32-2）。",
                    "options": [
                        "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                        "条約履行義務を軽視した無効文（32.2.m）",
                        "全権委任状の要件を欠く不備文（32.2.n）",
                        "寄託手続きの誤謬文（32.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u32-l2）の主要外交用語を入力してください（「世阿弥が」）：",
                    "acceptedAnswers": [
                        "世阿弥が",
                        "世阿弥が遺し"
                    ],
                    "explanation": "正解の外交用語は「世阿弥が」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l3": {
        "id": "ja-u32-l3",
        "subject": "japanese",
        "unit": 32,
        "lessonNumber": 3,
        "title": "能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第3部）",
        "level": "C2",
        "objective": "世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第3部）。",
        "presentation": {
            "explanation": "第三十二単元第3課では、中世日本の能楽理論から二十世紀後半の世界的前衛身体芸術「暗黒舞踏」に至る、日本演劇美学の深奥を学びます。\n\n【世阿弥の能楽芸術論】\n１．「花」：一過性の「時分の花」から、生涯の鍛錬を経た老境の「まことの花」への深化。\n２．「秘すれば花」：観客の内面的想像力に委ねることで成立する幽玄。\n３．「初心忘るるべからず」：各段階における未熟さ・新たな課題に対する謙虚な姿勢を生涯維持せよという戒め。\n\n【狂言と暗黒舞踏】\n・狂言：太郎冠者と大名の対話による庶民の逞しい喜劇劇（名作『附子』）。\n・暗黒舞踏：土方巽と大野一雄により創始。白塗りと重力に抗わない沈床の身体技法による前衛的身体芸術。",
            "examples": [
                {
                    "target": "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                    "reading": "ぜあみが のこした 『ふうしかでん』の 「しょしん わするるべからず」という きんげんは、かくねんだいにおいて ちょくめんする あらたな しれんと じこの みじゅくさにたいする しょうがいの けんきょな しせいを いましめています。",
                    "translation": "The maxim 'Never forget the beginner's mind' left by Zeami in the 'Fushikaden' admonishes a lifelong humble posture toward the new ordeals and self-immaturity faced at each stage of life."
                },
                {
                    "target": "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                    "reading": "きょうげんの けっさく 『ぶす』において、しゅじんの ふざいちゅうに どくと いつわられた くろざとうを ぬすみぐいする たろうかじゃと じろうかじゃの きちに とんだ たいわは、しょみんの たくましい わらいを みごとに えがきだします。",
                    "translation": "In the Kyogen masterpiece 'Busu', the witty dialogue of Taro Kaja and Jiro Kaja secretly eating brown sugar falsely described as poison during their master's absence brilliantly portrays the robust laughter of common people."
                },
                {
                    "target": "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                    "reading": "ひじかたたつみと おおのかずおが そうしした あんこくぶとうは、しろぬりの にくたいと じゅうりょくに あらがわない ちんしょうの しんたいぎほうによって、せいようの モダンダンスかいに きょうれつな ぜんえいてきしょうげきを あたえました。",
                    "translation": "Ankoku Butoh, founded by Tatsumi Hijikata and Kazuo Ohno, delivered an intense avant-garde shock to the Western modern dance world through white-painted bodies and physical techniques sinking toward the floor without resisting gravity."
                },
                {
                    "target": "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                    "reading": "にほんの ぶたいげいじゅつは、のうがくの せいひつな ゆうげんから きょうげんの けいみょうな わらい、ぶとうの ぜんえいてきしんたいせいまで、せいしんと にくたいの きょくげんを たんきゅうしつづけています。",
                    "translation": "Japanese performing arts, from the serene yugen of Noh to the lighthearted laughter of Kyogen and the avant-garde physicality of Butoh, continue to explore the limits of spirit and flesh."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問32.3.1）。",
                    "options": [
                        "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                        "国際条約法に反する法的誤謬（32.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（32.3.2）",
                        "外交慣例に悖る修辞的欠陥文（32.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習32.3）。",
                    "options": [
                        "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                        "対立を無用に煽る不見識な声明文（32.3.x）",
                        "法的拘束力のない不完全な折衝文（32.3.y）",
                        "条約の留保条件を乱用した無効文（32.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u32-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                        "安全保障理事会決議の権能を無視した記述（32.3.a）",
                        "平和維持部隊の法的根拠を欠く文（32.3.b）",
                        "国際司法裁判所の判例に背く記述（32.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試32-3）。",
                    "options": [
                        "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                        "条約履行義務を軽視した無効文（32.3.m）",
                        "全権委任状の要件を欠く不備文（32.3.n）",
                        "寄託手続きの誤謬文（32.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u32-l3）の主要外交用語を入力してください（「世阿弥が」）：",
                    "acceptedAnswers": [
                        "世阿弥が",
                        "世阿弥が遺し"
                    ],
                    "explanation": "正解の外交用語は「世阿弥が」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l4": {
        "id": "ja-u32-l4",
        "subject": "japanese",
        "unit": 32,
        "lessonNumber": 4,
        "title": "能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第4部）",
        "level": "C2",
        "objective": "世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第4部）。",
        "presentation": {
            "explanation": "第三十二単元第4課では、中世日本の能楽理論から二十世紀後半の世界的前衛身体芸術「暗黒舞踏」に至る、日本演劇美学の深奥を学びます。\n\n【世阿弥の能楽芸術論】\n１．「花」：一過性の「時分の花」から、生涯の鍛錬を経た老境の「まことの花」への深化。\n２．「秘すれば花」：観客の内面的想像力に委ねることで成立する幽玄。\n３．「初心忘るるべからず」：各段階における未熟さ・新たな課題に対する謙虚な姿勢を生涯維持せよという戒め。\n\n【狂言と暗黒舞踏】\n・狂言：太郎冠者と大名の対話による庶民の逞しい喜劇劇（名作『附子』）。\n・暗黒舞踏：土方巽と大野一雄により創始。白塗りと重力に抗わない沈床の身体技法による前衛的身体芸術。",
            "examples": [
                {
                    "target": "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                    "reading": "ぜあみが のこした 『ふうしかでん』の 「しょしん わするるべからず」という きんげんは、かくねんだいにおいて ちょくめんする あらたな しれんと じこの みじゅくさにたいする しょうがいの けんきょな しせいを いましめています。",
                    "translation": "The maxim 'Never forget the beginner's mind' left by Zeami in the 'Fushikaden' admonishes a lifelong humble posture toward the new ordeals and self-immaturity faced at each stage of life."
                },
                {
                    "target": "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                    "reading": "きょうげんの けっさく 『ぶす』において、しゅじんの ふざいちゅうに どくと いつわられた くろざとうを ぬすみぐいする たろうかじゃと じろうかじゃの きちに とんだ たいわは、しょみんの たくましい わらいを みごとに えがきだします。",
                    "translation": "In the Kyogen masterpiece 'Busu', the witty dialogue of Taro Kaja and Jiro Kaja secretly eating brown sugar falsely described as poison during their master's absence brilliantly portrays the robust laughter of common people."
                },
                {
                    "target": "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                    "reading": "ひじかたたつみと おおのかずおが そうしした あんこくぶとうは、しろぬりの にくたいと じゅうりょくに あらがわない ちんしょうの しんたいぎほうによって、せいようの モダンダンスかいに きょうれつな ぜんえいてきしょうげきを あたえました。",
                    "translation": "Ankoku Butoh, founded by Tatsumi Hijikata and Kazuo Ohno, delivered an intense avant-garde shock to the Western modern dance world through white-painted bodies and physical techniques sinking toward the floor without resisting gravity."
                },
                {
                    "target": "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                    "reading": "にほんの ぶたいげいじゅつは、のうがくの せいひつな ゆうげんから きょうげんの けいみょうな わらい、ぶとうの ぜんえいてきしんたいせいまで、せいしんと にくたいの きょくげんを たんきゅうしつづけています。",
                    "translation": "Japanese performing arts, from the serene yugen of Noh to the lighthearted laughter of Kyogen and the avant-garde physicality of Butoh, continue to explore the limits of spirit and flesh."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問32.4.1）。",
                    "options": [
                        "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                        "国際条約法に反する法的誤謬（32.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（32.4.2）",
                        "外交慣例に悖る修辞的欠陥文（32.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習32.4）。",
                    "options": [
                        "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                        "対立を無用に煽る不見識な声明文（32.4.x）",
                        "法的拘束力のない不完全な折衝文（32.4.y）",
                        "条約の留保条件を乱用した無効文（32.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u32-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                        "安全保障理事会決議の権能を無視した記述（32.4.a）",
                        "平和維持部隊の法的根拠を欠く文（32.4.b）",
                        "国際司法裁判所の判例に背く記述（32.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試32-4）。",
                    "options": [
                        "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                        "条約履行義務を軽視した無効文（32.4.m）",
                        "全権委任状の要件を欠く不備文（32.4.n）",
                        "寄託手続きの誤謬文（32.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u32-l4）の主要外交用語を入力してください（「世阿弥が」）：",
                    "acceptedAnswers": [
                        "世阿弥が",
                        "世阿弥が遺し"
                    ],
                    "explanation": "正解の外交用語は「世阿弥が」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u32-l5": {
        "id": "ja-u32-l5",
        "subject": "japanese",
        "unit": 32,
        "lessonNumber": 5,
        "title": "能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第5部）",
        "level": "C2",
        "objective": "世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第5部）。",
        "presentation": {
            "explanation": "第三十二単元第5課では、中世日本の能楽理論から二十世紀後半の世界的前衛身体芸術「暗黒舞踏」に至る、日本演劇美学の深奥を学びます。\n\n【世阿弥の能楽芸術論】\n１．「花」：一過性の「時分の花」から、生涯の鍛錬を経た老境の「まことの花」への深化。\n２．「秘すれば花」：観客の内面的想像力に委ねることで成立する幽玄。\n３．「初心忘るるべからず」：各段階における未熟さ・新たな課題に対する謙虚な姿勢を生涯維持せよという戒め。\n\n【狂言と暗黒舞踏】\n・狂言：太郎冠者と大名の対話による庶民の逞しい喜劇劇（名作『附子』）。\n・暗黒舞踏：土方巽と大野一雄により創始。白塗りと重力に抗わない沈床の身体技法による前衛的身体芸術。",
            "examples": [
                {
                    "target": "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                    "reading": "ぜあみが のこした 『ふうしかでん』の 「しょしん わするるべからず」という きんげんは、かくねんだいにおいて ちょくめんする あらたな しれんと じこの みじゅくさにたいする しょうがいの けんきょな しせいを いましめています。",
                    "translation": "The maxim 'Never forget the beginner's mind' left by Zeami in the 'Fushikaden' admonishes a lifelong humble posture toward the new ordeals and self-immaturity faced at each stage of life."
                },
                {
                    "target": "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                    "reading": "きょうげんの けっさく 『ぶす』において、しゅじんの ふざいちゅうに どくと いつわられた くろざとうを ぬすみぐいする たろうかじゃと じろうかじゃの きちに とんだ たいわは、しょみんの たくましい わらいを みごとに えがきだします。",
                    "translation": "In the Kyogen masterpiece 'Busu', the witty dialogue of Taro Kaja and Jiro Kaja secretly eating brown sugar falsely described as poison during their master's absence brilliantly portrays the robust laughter of common people."
                },
                {
                    "target": "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                    "reading": "ひじかたたつみと おおのかずおが そうしした あんこくぶとうは、しろぬりの にくたいと じゅうりょくに あらがわない ちんしょうの しんたいぎほうによって、せいようの モダンダンスかいに きょうれつな ぜんえいてきしょうげきを あたえました。",
                    "translation": "Ankoku Butoh, founded by Tatsumi Hijikata and Kazuo Ohno, delivered an intense avant-garde shock to the Western modern dance world through white-painted bodies and physical techniques sinking toward the floor without resisting gravity."
                },
                {
                    "target": "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                    "reading": "にほんの ぶたいげいじゅつは、のうがくの せいひつな ゆうげんから きょうげんの けいみょうな わらい、ぶとうの ぜんえいてきしんたいせいまで、せいしんと にくたいの きょくげんを たんきゅうしつづけています。",
                    "translation": "Japanese performing arts, from the serene yugen of Noh to the lighthearted laughter of Kyogen and the avant-garde physicality of Butoh, continue to explore the limits of spirit and flesh."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問32.5.1）。",
                    "options": [
                        "世阿弥が遺した『風姿花伝』の「初心忘るるべからず」という金言は、各年代において直面する新たな試練と自己の未熟さに対する生涯の謙虚な姿勢を戒めています。",
                        "国際条約法に反する法的誤謬（32.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（32.5.2）",
                        "外交慣例に悖る修辞的欠陥文（32.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】世阿弥の『風姿花伝』、狂言の喜劇性、土方巽・大野一雄の「暗黒舞踏（Butoh）」の身体論（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習32.5）。",
                    "options": [
                        "狂言の傑作『附子』において、主人の不在中に毒と偽られた黒砂糖を盗み食いする太郎冠者と次郎冠者の機知に富んだ対話は、庶民の逞しい笑いを見事に描き出します。",
                        "対立を無用に煽る不見識な声明文（32.5.x）",
                        "法的拘束力のない不完全な折衝文（32.5.y）",
                        "条約の留保条件を乱用した無効文（32.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u32-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "土方巽と大野一雄が創始した暗黒舞踏は、白塗りの肉体と重力に抗わない沈床の身体技法によって、西洋のモダンダンス界に強烈な前衛的衝撃を与えました。",
                        "安全保障理事会決議の権能を無視した記述（32.5.a）",
                        "平和維持部隊の法的根拠を欠く文（32.5.b）",
                        "国際司法裁判所の判例に背く記述（32.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】能楽論の極致：世阿弥『風姿花伝』・狂言の笑いと暗黒舞踏（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試32-5）。",
                    "options": [
                        "日本の舞台芸術は、能楽の静謐な幽玄から狂言の軽妙な笑い、舞踏の前衛的身体性まで、精神と肉体の極限を探求し続けています。",
                        "条約履行義務を軽視した無効文（32.5.m）",
                        "全権委任状の要件を欠く不備文（32.5.n）",
                        "寄託手続きの誤謬文（32.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u32-l5）の主要外交用語を入力してください（「世阿弥が」）：",
                    "acceptedAnswers": [
                        "世阿弥が",
                        "世阿弥が遺し"
                    ],
                    "explanation": "正解の外交用語は「世阿弥が」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l1": {
        "id": "ja-u33-l1",
        "subject": "japanese",
        "unit": 33,
        "lessonNumber": 1,
        "title": "伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第1部）",
        "level": "C2",
        "objective": "伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第1部）。",
        "presentation": {
            "explanation": "第三十三単元第1課では、日本の神道・仏教建築の神髄である「伊勢神宮の式年遷宮」および世界最古の木造建築「法隆寺」を支える宮大工の伝統木工技術を学びます。\n\n【伊勢神宮と式年遷宮の循環思想】\n・式年遷宮：690年以来、1300年以上にわたり二十年ごとに神殿を新築して御神体を遷す祭儀。\n・「常若（とこわか）」の思想：建築を永遠に新しく再生し続ける木として捉える循環哲学。\n\n【法隆寺と宮大工の木工技術】\n・法隆寺（西暦607年創建）：世界最古の木造建築群（金堂・五重塔）。ユネスコ世界文化遺産第1号。\n・宮大工の口伝：「木は生育の方位のまま使え」。\n・釘を一本も使わずに木材を緊結する「継手」と「仕口」の木組技術。",
            "examples": [
                {
                    "target": "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                    "reading": "いせじんぐうで せんさんびゃくねんいじょうにわたり れんめんと けいしょうされてきた しきねんせんぐうは、しんでんを にじゅうねんごとに しんぞうすることで ぎじゅつと せいしんを みらいへ えいえんに さいせいさせる 「とこわか」の しそうを ぐげんかしています。",
                    "translation": "The Shikinen Sengu continuously handed down at Ise Jingu for over 1,300 years embodies the philosophy of 'Tokowaka', regenerating techniques and spirit eternally into the future by rebuilding the shrines anew every 20 years."
                },
                {
                    "target": "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                    "reading": "せいれき ろっぴゃくななねん そうけんの ほうりゅうじ ごじゅうのとうは、しんばしらを ちゅうしんとする じゅうこうぞうと みやだいくによる せいちな きぐみぎじゅつによって、せんよんひゃくねんの ふうせつと だいじしんに たえぬいてきました。",
                    "translation": "The five-story pagoda of Horyu-ji founded in 607 AD has endured 1,400 years of wind, snow, and major earthquakes through flexible structures centered around the central pillar and precise timber joinery techniques by master temple carpenters."
                },
                {
                    "target": "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                    "reading": "みやだいくの にしおか つねいちとうりょうは 「きは せいいくした ほういのまま つかえ」という こだいからの くでんを まもり、じゅれい せんねんの ひのきの せいめいりょくを けんちくこうぞうのなかに いかしつづけました。",
                    "translation": "Master carpenter Tsunekazu Nishioka upheld the ancient oral transmission 'Use the tree in the same cardinal orientation as it grew', continuing to harness the vital force of thousand-year-old hinoki cypress within architectural structures."
                },
                {
                    "target": "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                    "reading": "にほんの でんとうもくぞうけんちくにおける かなものや くぎを もちいない つぎて・しぐちの ぎほうは、もくざいの こきゅうと しゅうしゅくを きょようする ゆうきてきこうぞうりきがくの ちょうてんを しめしています。",
                    "translation": "The joinery techniques of tsugite and shikuchi without hardware or nails in traditional Japanese wooden architecture demonstrate the apex of organic structural mechanics accommodating the breathing and shrinkage of wood."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問33.1.1）。",
                    "options": [
                        "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                        "国際条約法に反する法的誤謬（33.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（33.1.2）",
                        "外交慣例に悖る修辞的欠陥文（33.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習33.1）。",
                    "options": [
                        "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                        "対立を無用に煽る不見識な声明文（33.1.x）",
                        "法的拘束力のない不完全な折衝文（33.1.y）",
                        "条約の留保条件を乱用した無効文（33.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u33-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                        "安全保障理事会決議の権能を無視した記述（33.1.a）",
                        "平和維持部隊の法的根拠を欠く文（33.1.b）",
                        "国際司法裁判所の判例に背く記述（33.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試33-1）。",
                    "options": [
                        "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                        "条約履行義務を軽視した無効文（33.1.m）",
                        "全権委任状の要件を欠く不備文（33.1.n）",
                        "寄託手続きの誤謬文（33.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u33-l1）の主要外交用語を入力してください（「伊勢神宮」）：",
                    "acceptedAnswers": [
                        "伊勢神宮",
                        "伊勢神宮で千"
                    ],
                    "explanation": "正解の外交用語は「伊勢神宮」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l2": {
        "id": "ja-u33-l2",
        "subject": "japanese",
        "unit": 33,
        "lessonNumber": 2,
        "title": "伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第2部）",
        "level": "C2",
        "objective": "伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第2部）。",
        "presentation": {
            "explanation": "第三十三単元第2課では、日本の神道・仏教建築の神髄である「伊勢神宮の式年遷宮」および世界最古の木造建築「法隆寺」を支える宮大工の伝統木工技術を学びます。\n\n【伊勢神宮と式年遷宮の循環思想】\n・式年遷宮：690年以来、1300年以上にわたり二十年ごとに神殿を新築して御神体を遷す祭儀。\n・「常若（とこわか）」の思想：建築を永遠に新しく再生し続ける木として捉える循環哲学。\n\n【法隆寺と宮大工の木工技術】\n・法隆寺（西暦607年創建）：世界最古の木造建築群（金堂・五重塔）。ユネスコ世界文化遺産第1号。\n・宮大工の口伝：「木は生育の方位のまま使え」。\n・釘を一本も使わずに木材を緊結する「継手」と「仕口」の木組技術。",
            "examples": [
                {
                    "target": "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                    "reading": "いせじんぐうで せんさんびゃくねんいじょうにわたり れんめんと けいしょうされてきた しきねんせんぐうは、しんでんを にじゅうねんごとに しんぞうすることで ぎじゅつと せいしんを みらいへ えいえんに さいせいさせる 「とこわか」の しそうを ぐげんかしています。",
                    "translation": "The Shikinen Sengu continuously handed down at Ise Jingu for over 1,300 years embodies the philosophy of 'Tokowaka', regenerating techniques and spirit eternally into the future by rebuilding the shrines anew every 20 years."
                },
                {
                    "target": "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                    "reading": "せいれき ろっぴゃくななねん そうけんの ほうりゅうじ ごじゅうのとうは、しんばしらを ちゅうしんとする じゅうこうぞうと みやだいくによる せいちな きぐみぎじゅつによって、せんよんひゃくねんの ふうせつと だいじしんに たえぬいてきました。",
                    "translation": "The five-story pagoda of Horyu-ji founded in 607 AD has endured 1,400 years of wind, snow, and major earthquakes through flexible structures centered around the central pillar and precise timber joinery techniques by master temple carpenters."
                },
                {
                    "target": "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                    "reading": "みやだいくの にしおか つねいちとうりょうは 「きは せいいくした ほういのまま つかえ」という こだいからの くでんを まもり、じゅれい せんねんの ひのきの せいめいりょくを けんちくこうぞうのなかに いかしつづけました。",
                    "translation": "Master carpenter Tsunekazu Nishioka upheld the ancient oral transmission 'Use the tree in the same cardinal orientation as it grew', continuing to harness the vital force of thousand-year-old hinoki cypress within architectural structures."
                },
                {
                    "target": "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                    "reading": "にほんの でんとうもくぞうけんちくにおける かなものや くぎを もちいない つぎて・しぐちの ぎほうは、もくざいの こきゅうと しゅうしゅくを きょようする ゆうきてきこうぞうりきがくの ちょうてんを しめしています。",
                    "translation": "The joinery techniques of tsugite and shikuchi without hardware or nails in traditional Japanese wooden architecture demonstrate the apex of organic structural mechanics accommodating the breathing and shrinkage of wood."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問33.2.1）。",
                    "options": [
                        "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                        "国際条約法に反する法的誤謬（33.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（33.2.2）",
                        "外交慣例に悖る修辞的欠陥文（33.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習33.2）。",
                    "options": [
                        "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                        "対立を無用に煽る不見識な声明文（33.2.x）",
                        "法的拘束力のない不完全な折衝文（33.2.y）",
                        "条約の留保条件を乱用した無効文（33.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u33-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                        "安全保障理事会決議の権能を無視した記述（33.2.a）",
                        "平和維持部隊の法的根拠を欠く文（33.2.b）",
                        "国際司法裁判所の判例に背く記述（33.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試33-2）。",
                    "options": [
                        "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                        "条約履行義務を軽視した無効文（33.2.m）",
                        "全権委任状の要件を欠く不備文（33.2.n）",
                        "寄託手続きの誤謬文（33.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u33-l2）の主要外交用語を入力してください（「伊勢神宮」）：",
                    "acceptedAnswers": [
                        "伊勢神宮",
                        "伊勢神宮で千"
                    ],
                    "explanation": "正解の外交用語は「伊勢神宮」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l3": {
        "id": "ja-u33-l3",
        "subject": "japanese",
        "unit": 33,
        "lessonNumber": 3,
        "title": "伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第3部）",
        "level": "C2",
        "objective": "伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第3部）。",
        "presentation": {
            "explanation": "第三十三単元第3課では、日本の神道・仏教建築の神髄である「伊勢神宮の式年遷宮」および世界最古の木造建築「法隆寺」を支える宮大工の伝統木工技術を学びます。\n\n【伊勢神宮と式年遷宮の循環思想】\n・式年遷宮：690年以来、1300年以上にわたり二十年ごとに神殿を新築して御神体を遷す祭儀。\n・「常若（とこわか）」の思想：建築を永遠に新しく再生し続ける木として捉える循環哲学。\n\n【法隆寺と宮大工の木工技術】\n・法隆寺（西暦607年創建）：世界最古の木造建築群（金堂・五重塔）。ユネスコ世界文化遺産第1号。\n・宮大工の口伝：「木は生育の方位のまま使え」。\n・釘を一本も使わずに木材を緊結する「継手」と「仕口」の木組技術。",
            "examples": [
                {
                    "target": "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                    "reading": "いせじんぐうで せんさんびゃくねんいじょうにわたり れんめんと けいしょうされてきた しきねんせんぐうは、しんでんを にじゅうねんごとに しんぞうすることで ぎじゅつと せいしんを みらいへ えいえんに さいせいさせる 「とこわか」の しそうを ぐげんかしています。",
                    "translation": "The Shikinen Sengu continuously handed down at Ise Jingu for over 1,300 years embodies the philosophy of 'Tokowaka', regenerating techniques and spirit eternally into the future by rebuilding the shrines anew every 20 years."
                },
                {
                    "target": "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                    "reading": "せいれき ろっぴゃくななねん そうけんの ほうりゅうじ ごじゅうのとうは、しんばしらを ちゅうしんとする じゅうこうぞうと みやだいくによる せいちな きぐみぎじゅつによって、せんよんひゃくねんの ふうせつと だいじしんに たえぬいてきました。",
                    "translation": "The five-story pagoda of Horyu-ji founded in 607 AD has endured 1,400 years of wind, snow, and major earthquakes through flexible structures centered around the central pillar and precise timber joinery techniques by master temple carpenters."
                },
                {
                    "target": "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                    "reading": "みやだいくの にしおか つねいちとうりょうは 「きは せいいくした ほういのまま つかえ」という こだいからの くでんを まもり、じゅれい せんねんの ひのきの せいめいりょくを けんちくこうぞうのなかに いかしつづけました。",
                    "translation": "Master carpenter Tsunekazu Nishioka upheld the ancient oral transmission 'Use the tree in the same cardinal orientation as it grew', continuing to harness the vital force of thousand-year-old hinoki cypress within architectural structures."
                },
                {
                    "target": "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                    "reading": "にほんの でんとうもくぞうけんちくにおける かなものや くぎを もちいない つぎて・しぐちの ぎほうは、もくざいの こきゅうと しゅうしゅくを きょようする ゆうきてきこうぞうりきがくの ちょうてんを しめしています。",
                    "translation": "The joinery techniques of tsugite and shikuchi without hardware or nails in traditional Japanese wooden architecture demonstrate the apex of organic structural mechanics accommodating the breathing and shrinkage of wood."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問33.3.1）。",
                    "options": [
                        "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                        "国際条約法に反する法的誤謬（33.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（33.3.2）",
                        "外交慣例に悖る修辞的欠陥文（33.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習33.3）。",
                    "options": [
                        "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                        "対立を無用に煽る不見識な声明文（33.3.x）",
                        "法的拘束力のない不完全な折衝文（33.3.y）",
                        "条約の留保条件を乱用した無効文（33.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u33-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                        "安全保障理事会決議の権能を無視した記述（33.3.a）",
                        "平和維持部隊の法的根拠を欠く文（33.3.b）",
                        "国際司法裁判所の判例に背く記述（33.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試33-3）。",
                    "options": [
                        "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                        "条約履行義務を軽視した無効文（33.3.m）",
                        "全権委任状の要件を欠く不備文（33.3.n）",
                        "寄託手続きの誤謬文（33.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u33-l3）の主要外交用語を入力してください（「伊勢神宮」）：",
                    "acceptedAnswers": [
                        "伊勢神宮",
                        "伊勢神宮で千"
                    ],
                    "explanation": "正解の外交用語は「伊勢神宮」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l4": {
        "id": "ja-u33-l4",
        "subject": "japanese",
        "unit": 33,
        "lessonNumber": 4,
        "title": "伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第4部）",
        "level": "C2",
        "objective": "伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第4部）。",
        "presentation": {
            "explanation": "第三十三単元第4課では、日本の神道・仏教建築の神髄である「伊勢神宮の式年遷宮」および世界最古の木造建築「法隆寺」を支える宮大工の伝統木工技術を学びます。\n\n【伊勢神宮と式年遷宮の循環思想】\n・式年遷宮：690年以来、1300年以上にわたり二十年ごとに神殿を新築して御神体を遷す祭儀。\n・「常若（とこわか）」の思想：建築を永遠に新しく再生し続ける木として捉える循環哲学。\n\n【法隆寺と宮大工の木工技術】\n・法隆寺（西暦607年創建）：世界最古の木造建築群（金堂・五重塔）。ユネスコ世界文化遺産第1号。\n・宮大工の口伝：「木は生育の方位のまま使え」。\n・釘を一本も使わずに木材を緊結する「継手」と「仕口」の木組技術。",
            "examples": [
                {
                    "target": "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                    "reading": "いせじんぐうで せんさんびゃくねんいじょうにわたり れんめんと けいしょうされてきた しきねんせんぐうは、しんでんを にじゅうねんごとに しんぞうすることで ぎじゅつと せいしんを みらいへ えいえんに さいせいさせる 「とこわか」の しそうを ぐげんかしています。",
                    "translation": "The Shikinen Sengu continuously handed down at Ise Jingu for over 1,300 years embodies the philosophy of 'Tokowaka', regenerating techniques and spirit eternally into the future by rebuilding the shrines anew every 20 years."
                },
                {
                    "target": "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                    "reading": "せいれき ろっぴゃくななねん そうけんの ほうりゅうじ ごじゅうのとうは、しんばしらを ちゅうしんとする じゅうこうぞうと みやだいくによる せいちな きぐみぎじゅつによって、せんよんひゃくねんの ふうせつと だいじしんに たえぬいてきました。",
                    "translation": "The five-story pagoda of Horyu-ji founded in 607 AD has endured 1,400 years of wind, snow, and major earthquakes through flexible structures centered around the central pillar and precise timber joinery techniques by master temple carpenters."
                },
                {
                    "target": "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                    "reading": "みやだいくの にしおか つねいちとうりょうは 「きは せいいくした ほういのまま つかえ」という こだいからの くでんを まもり、じゅれい せんねんの ひのきの せいめいりょくを けんちくこうぞうのなかに いかしつづけました。",
                    "translation": "Master carpenter Tsunekazu Nishioka upheld the ancient oral transmission 'Use the tree in the same cardinal orientation as it grew', continuing to harness the vital force of thousand-year-old hinoki cypress within architectural structures."
                },
                {
                    "target": "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                    "reading": "にほんの でんとうもくぞうけんちくにおける かなものや くぎを もちいない つぎて・しぐちの ぎほうは、もくざいの こきゅうと しゅうしゅくを きょようする ゆうきてきこうぞうりきがくの ちょうてんを しめしています。",
                    "translation": "The joinery techniques of tsugite and shikuchi without hardware or nails in traditional Japanese wooden architecture demonstrate the apex of organic structural mechanics accommodating the breathing and shrinkage of wood."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問33.4.1）。",
                    "options": [
                        "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                        "国際条約法に反する法的誤謬（33.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（33.4.2）",
                        "外交慣例に悖る修辞的欠陥文（33.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習33.4）。",
                    "options": [
                        "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                        "対立を無用に煽る不見識な声明文（33.4.x）",
                        "法的拘束力のない不完全な折衝文（33.4.y）",
                        "条約の留保条件を乱用した無効文（33.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u33-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                        "安全保障理事会決議の権能を無視した記述（33.4.a）",
                        "平和維持部隊の法的根拠を欠く文（33.4.b）",
                        "国際司法裁判所の判例に背く記述（33.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試33-4）。",
                    "options": [
                        "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                        "条約履行義務を軽視した無効文（33.4.m）",
                        "全権委任状の要件を欠く不備文（33.4.n）",
                        "寄託手続きの誤謬文（33.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u33-l4）の主要外交用語を入力してください（「伊勢神宮」）：",
                    "acceptedAnswers": [
                        "伊勢神宮",
                        "伊勢神宮で千"
                    ],
                    "explanation": "正解の外交用語は「伊勢神宮」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u33-l5": {
        "id": "ja-u33-l5",
        "subject": "japanese",
        "unit": 33,
        "lessonNumber": 5,
        "title": "伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第5部）",
        "level": "C2",
        "objective": "伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第5部）。",
        "presentation": {
            "explanation": "第三十三単元第5課では、日本の神道・仏教建築の神髄である「伊勢神宮の式年遷宮」および世界最古の木造建築「法隆寺」を支える宮大工の伝統木工技術を学びます。\n\n【伊勢神宮と式年遷宮の循環思想】\n・式年遷宮：690年以来、1300年以上にわたり二十年ごとに神殿を新築して御神体を遷す祭儀。\n・「常若（とこわか）」の思想：建築を永遠に新しく再生し続ける木として捉える循環哲学。\n\n【法隆寺と宮大工の木工技術】\n・法隆寺（西暦607年創建）：世界最古の木造建築群（金堂・五重塔）。ユネスコ世界文化遺産第1号。\n・宮大工の口伝：「木は生育の方位のまま使え」。\n・釘を一本も使わずに木材を緊結する「継手」と「仕口」の木組技術。",
            "examples": [
                {
                    "target": "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                    "reading": "いせじんぐうで せんさんびゃくねんいじょうにわたり れんめんと けいしょうされてきた しきねんせんぐうは、しんでんを にじゅうねんごとに しんぞうすることで ぎじゅつと せいしんを みらいへ えいえんに さいせいさせる 「とこわか」の しそうを ぐげんかしています。",
                    "translation": "The Shikinen Sengu continuously handed down at Ise Jingu for over 1,300 years embodies the philosophy of 'Tokowaka', regenerating techniques and spirit eternally into the future by rebuilding the shrines anew every 20 years."
                },
                {
                    "target": "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                    "reading": "せいれき ろっぴゃくななねん そうけんの ほうりゅうじ ごじゅうのとうは、しんばしらを ちゅうしんとする じゅうこうぞうと みやだいくによる せいちな きぐみぎじゅつによって、せんよんひゃくねんの ふうせつと だいじしんに たえぬいてきました。",
                    "translation": "The five-story pagoda of Horyu-ji founded in 607 AD has endured 1,400 years of wind, snow, and major earthquakes through flexible structures centered around the central pillar and precise timber joinery techniques by master temple carpenters."
                },
                {
                    "target": "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                    "reading": "みやだいくの にしおか つねいちとうりょうは 「きは せいいくした ほういのまま つかえ」という こだいからの くでんを まもり、じゅれい せんねんの ひのきの せいめいりょくを けんちくこうぞうのなかに いかしつづけました。",
                    "translation": "Master carpenter Tsunekazu Nishioka upheld the ancient oral transmission 'Use the tree in the same cardinal orientation as it grew', continuing to harness the vital force of thousand-year-old hinoki cypress within architectural structures."
                },
                {
                    "target": "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                    "reading": "にほんの でんとうもくぞうけんちくにおける かなものや くぎを もちいない つぎて・しぐちの ぎほうは、もくざいの こきゅうと しゅうしゅくを きょようする ゆうきてきこうぞうりきがくの ちょうてんを しめしています。",
                    "translation": "The joinery techniques of tsugite and shikuchi without hardware or nails in traditional Japanese wooden architecture demonstrate the apex of organic structural mechanics accommodating the breathing and shrinkage of wood."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問33.5.1）。",
                    "options": [
                        "伊勢神宮で千三百年以上にわたり連綿と継承されてきた式年遷宮は、神殿を二十年ごとに新造することで技術と精神を未来へ永遠に再生させる「常若」の思想を具現化しています。",
                        "国際条約法に反する法的誤謬（33.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（33.5.2）",
                        "外交慣例に悖る修辞的欠陥文（33.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】伊勢神宮の二十年毎の式年遷宮、法隆寺の世界最古木造建築（607年）、宮大工の継手・仕口技術（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習33.5）。",
                    "options": [
                        "西暦607年創建の法隆寺五重塔は、心柱を中心とする柔構造と宮大工による精緻な木組み技術によって、千四百年の風雪と大地震に耐え抜いてきました。",
                        "対立を無用に煽る不見識な声明文（33.5.x）",
                        "法的拘束力のない不完全な折衝文（33.5.y）",
                        "条約の留保条件を乱用した無効文（33.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u33-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "宮大工の西岡常一棟梁は「木は生育した方位のまま使え」という古代からの口伝を守り、樹齢千年の檜の生命力を建築構造の中に活かし続けました。",
                        "安全保障理事会決議の権能を無視した記述（33.5.a）",
                        "平和維持部隊の法的根拠を欠く文（33.5.b）",
                        "国際司法裁判所の判例に背く記述（33.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】伊勢神宮式年遷宮と法隆寺の宮大工木工技術（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試33-5）。",
                    "options": [
                        "日本の伝統木造建築における金物や釘を用いない継手・仕口の技法は、木材の呼吸と収縮を許容する有機的構造力学の頂点を示しています。",
                        "条約履行義務を軽視した無効文（33.5.m）",
                        "全権委任状の要件を欠く不備文（33.5.n）",
                        "寄託手続きの誤謬文（33.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u33-l5）の主要外交用語を入力してください（「伊勢神宮」）：",
                    "acceptedAnswers": [
                        "伊勢神宮",
                        "伊勢神宮で千"
                    ],
                    "explanation": "正解の外交用語は「伊勢神宮」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u34-l1": {
        "id": "ja-u34-l1",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 1,
        "title": "多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第1部）",
        "level": "C2",
        "objective": "1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第1部）。",
        "presentation": {
            "explanation": "第三十四単元第1課（C2最上位マスター・キャップストーン）では、国家主権・国際法・多国間外交交渉の最高峰である「多国間条約法（1969年ウィーン条約法条約）」および「国連安全保障理事会決議」「サミット共同声明」の起草と外交的口頭防衛を学びます。\n\n【条約締結プロトコルと国際法規範】\n１．署名・批准・寄託手続き（VCLT 1969）：全権委任状の提示、議会による憲法上の批准承認（Ratification）、国連事務総長への批准書寄託。\n２．留保条項（第19条）の起草と解釈。\n３．「合意は守られなければならない（パクタ・スント・セルヴァンダ・第26条）」の履行義務。\n\n【サミット共同声明と安全保障理事会】\n・共同声明（Joint Communiqué）の修辞学：ブラケットの解消と妥協表現の折衝。\n・国連憲章第七章に基づく制裁決議と平和維持部隊（PKO）派遣の外交的弁護。",
            "examples": [
                {
                    "target": "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                    "reading": "ほんきょうていの ていやくこくは、せんきゅうひゃくろくじゅうきゅうねん じょうやくほうにかんする ウィーンじょうやく だいひゃくじょうにもとづき、せいしきな ひじゅんしょを こくさいれんごうじむそうちょうへ きたくいたしました。",
                    "translation": "The States Parties to this Agreement deposited their formal instruments of ratification with the Secretary-General of the United Nations pursuant to Article 100 of the 1969 Vienna Convention on the Law of Treaties."
                },
                {
                    "target": "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                    "reading": "かっこくしゅのうは サミットきょうどうせいめいを さいたくし、ほうのしはいにもとづく じゆうで ひらかれた こくさいちつじょの いじと、きこうへんどうたいさくへの だんこたる せいやくを さいかくにんいたしました。",
                    "translation": "The Heads of State and Government adopted the Summit Joint Communiqué, reaffirming their unyielding commitment to maintaining a free and open international order based on the rule of law and climate change countermeasures."
                },
                {
                    "target": "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                    "reading": "こくさいれんごう あんぜんほしょうりじかいは、こくれんけんしょう だいななしょうの もとで こうどうし、すべての ひつような そちを とることを たこくせき へいわいじぶたいに いにんすることを ぜんかいいっちで けつぎいたしました。",
                    "translation": "The United Nations Security Council, acting under Chapter VII of the Charter of the United Nations, decided unanimously to authorize the multinational peacekeeping force to take all necessary measures."
                },
                {
                    "target": "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                    "reading": "ていやくこくは 「ごういは まもらなければならない」という こくさいかんしゅうほうの こんぽんきはんに のっとり、ほんたこくかんじょうやくの ぎむを せいじつに りこうすることを せいやくいたします。",
                    "translation": "The States Parties pledge to execute the obligations of this multilateral treaty in good faith in accordance with the fundamental norm of customary international law 'Pacta sunt servanda'."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第1部）における国際法規範に厳密に合致する公式外交記述を選択してください（問34.1.1）。",
                    "options": [
                        "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                        "国際条約法に反する法的誤謬（34.1.1）",
                        "主権平等の原則を逸脱した不適当な記述（34.1.2）",
                        "外交慣例に悖る修辞的欠陥文（34.1.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第1部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第1部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習34.1）。",
                    "options": [
                        "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                        "対立を無用に煽る不見識な声明文（34.1.x）",
                        "法的拘束力のない不完全な折衝文（34.1.y）",
                        "条約の留保条件を乱用した無効文（34.1.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u34-l1）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                        "安全保障理事会決議の権能を無視した記述（34.1.a）",
                        "平和維持部隊の法的根拠を欠く文（34.1.b）",
                        "国際司法裁判所の判例に背く記述（34.1.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第1部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試34-1）。",
                    "options": [
                        "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                        "条約履行義務を軽視した無効文（34.1.m）",
                        "全権委任状の要件を欠く不備文（34.1.n）",
                        "寄託手続きの誤謬文（34.1.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u34-l1）の主要外交用語を入力してください（「本協定の」）：",
                    "acceptedAnswers": [
                        "本協定の",
                        "本協定の締約"
                    ],
                    "explanation": "正解の外交用語は「本協定の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u34-l2": {
        "id": "ja-u34-l2",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 2,
        "title": "多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第2部）",
        "level": "C2",
        "objective": "1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第2部）。",
        "presentation": {
            "explanation": "第三十四単元第2課（C2最上位マスター・キャップストーン）では、国家主権・国際法・多国間外交交渉の最高峰である「多国間条約法（1969年ウィーン条約法条約）」および「国連安全保障理事会決議」「サミット共同声明」の起草と外交的口頭防衛を学びます。\n\n【条約締結プロトコルと国際法規範】\n１．署名・批准・寄託手続き（VCLT 1969）：全権委任状の提示、議会による憲法上の批准承認（Ratification）、国連事務総長への批准書寄託。\n２．留保条項（第19条）の起草と解釈。\n３．「合意は守られなければならない（パクタ・スント・セルヴァンダ・第26条）」の履行義務。\n\n【サミット共同声明と安全保障理事会】\n・共同声明（Joint Communiqué）の修辞学：ブラケットの解消と妥協表現の折衝。\n・国連憲章第七章に基づく制裁決議と平和維持部隊（PKO）派遣の外交的弁護。",
            "examples": [
                {
                    "target": "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                    "reading": "ほんきょうていの ていやくこくは、せんきゅうひゃくろくじゅうきゅうねん じょうやくほうにかんする ウィーンじょうやく だいひゃくじょうにもとづき、せいしきな ひじゅんしょを こくさいれんごうじむそうちょうへ きたくいたしました。",
                    "translation": "The States Parties to this Agreement deposited their formal instruments of ratification with the Secretary-General of the United Nations pursuant to Article 100 of the 1969 Vienna Convention on the Law of Treaties."
                },
                {
                    "target": "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                    "reading": "かっこくしゅのうは サミットきょうどうせいめいを さいたくし、ほうのしはいにもとづく じゆうで ひらかれた こくさいちつじょの いじと、きこうへんどうたいさくへの だんこたる せいやくを さいかくにんいたしました。",
                    "translation": "The Heads of State and Government adopted the Summit Joint Communiqué, reaffirming their unyielding commitment to maintaining a free and open international order based on the rule of law and climate change countermeasures."
                },
                {
                    "target": "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                    "reading": "こくさいれんごう あんぜんほしょうりじかいは、こくれんけんしょう だいななしょうの もとで こうどうし、すべての ひつような そちを とることを たこくせき へいわいじぶたいに いにんすることを ぜんかいいっちで けつぎいたしました。",
                    "translation": "The United Nations Security Council, acting under Chapter VII of the Charter of the United Nations, decided unanimously to authorize the multinational peacekeeping force to take all necessary measures."
                },
                {
                    "target": "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                    "reading": "ていやくこくは 「ごういは まもらなければならない」という こくさいかんしゅうほうの こんぽんきはんに のっとり、ほんたこくかんじょうやくの ぎむを せいじつに りこうすることを せいやくいたします。",
                    "translation": "The States Parties pledge to execute the obligations of this multilateral treaty in good faith in accordance with the fundamental norm of customary international law 'Pacta sunt servanda'."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第2部）における国際法規範に厳密に合致する公式外交記述を選択してください（問34.2.1）。",
                    "options": [
                        "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                        "国際条約法に反する法的誤謬（34.2.1）",
                        "主権平等の原則を逸脱した不適当な記述（34.2.2）",
                        "外交慣例に悖る修辞的欠陥文（34.2.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第2部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第2部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習34.2）。",
                    "options": [
                        "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                        "対立を無用に煽る不見識な声明文（34.2.x）",
                        "法的拘束力のない不完全な折衝文（34.2.y）",
                        "条約の留保条件を乱用した無効文（34.2.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u34-l2）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                        "安全保障理事会決議の権能を無視した記述（34.2.a）",
                        "平和維持部隊の法的根拠を欠く文（34.2.b）",
                        "国際司法裁判所の判例に背く記述（34.2.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第2部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試34-2）。",
                    "options": [
                        "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                        "条約履行義務を軽視した無効文（34.2.m）",
                        "全権委任状の要件を欠く不備文（34.2.n）",
                        "寄託手続きの誤謬文（34.2.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u34-l2）の主要外交用語を入力してください（「本協定の」）：",
                    "acceptedAnswers": [
                        "本協定の",
                        "本協定の締約"
                    ],
                    "explanation": "正解の外交用語は「本協定の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u34-l3": {
        "id": "ja-u34-l3",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 3,
        "title": "多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第3部）",
        "level": "C2",
        "objective": "1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第3部）。",
        "presentation": {
            "explanation": "第三十四単元第3課（C2最上位マスター・キャップストーン）では、国家主権・国際法・多国間外交交渉の最高峰である「多国間条約法（1969年ウィーン条約法条約）」および「国連安全保障理事会決議」「サミット共同声明」の起草と外交的口頭防衛を学びます。\n\n【条約締結プロトコルと国際法規範】\n１．署名・批准・寄託手続き（VCLT 1969）：全権委任状の提示、議会による憲法上の批准承認（Ratification）、国連事務総長への批准書寄託。\n２．留保条項（第19条）の起草と解釈。\n３．「合意は守られなければならない（パクタ・スント・セルヴァンダ・第26条）」の履行義務。\n\n【サミット共同声明と安全保障理事会】\n・共同声明（Joint Communiqué）の修辞学：ブラケットの解消と妥協表現の折衝。\n・国連憲章第七章に基づく制裁決議と平和維持部隊（PKO）派遣の外交的弁護。",
            "examples": [
                {
                    "target": "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                    "reading": "ほんきょうていの ていやくこくは、せんきゅうひゃくろくじゅうきゅうねん じょうやくほうにかんする ウィーンじょうやく だいひゃくじょうにもとづき、せいしきな ひじゅんしょを こくさいれんごうじむそうちょうへ きたくいたしました。",
                    "translation": "The States Parties to this Agreement deposited their formal instruments of ratification with the Secretary-General of the United Nations pursuant to Article 100 of the 1969 Vienna Convention on the Law of Treaties."
                },
                {
                    "target": "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                    "reading": "かっこくしゅのうは サミットきょうどうせいめいを さいたくし、ほうのしはいにもとづく じゆうで ひらかれた こくさいちつじょの いじと、きこうへんどうたいさくへの だんこたる せいやくを さいかくにんいたしました。",
                    "translation": "The Heads of State and Government adopted the Summit Joint Communiqué, reaffirming their unyielding commitment to maintaining a free and open international order based on the rule of law and climate change countermeasures."
                },
                {
                    "target": "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                    "reading": "こくさいれんごう あんぜんほしょうりじかいは、こくれんけんしょう だいななしょうの もとで こうどうし、すべての ひつような そちを とることを たこくせき へいわいじぶたいに いにんすることを ぜんかいいっちで けつぎいたしました。",
                    "translation": "The United Nations Security Council, acting under Chapter VII of the Charter of the United Nations, decided unanimously to authorize the multinational peacekeeping force to take all necessary measures."
                },
                {
                    "target": "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                    "reading": "ていやくこくは 「ごういは まもらなければならない」という こくさいかんしゅうほうの こんぽんきはんに のっとり、ほんたこくかんじょうやくの ぎむを せいじつに りこうすることを せいやくいたします。",
                    "translation": "The States Parties pledge to execute the obligations of this multilateral treaty in good faith in accordance with the fundamental norm of customary international law 'Pacta sunt servanda'."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第3部）における国際法規範に厳密に合致する公式外交記述を選択してください（問34.3.1）。",
                    "options": [
                        "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                        "国際条約法に反する法的誤謬（34.3.1）",
                        "主権平等の原則を逸脱した不適当な記述（34.3.2）",
                        "外交慣例に悖る修辞的欠陥文（34.3.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第3部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第3部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習34.3）。",
                    "options": [
                        "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                        "対立を無用に煽る不見識な声明文（34.3.x）",
                        "法的拘束力のない不完全な折衝文（34.3.y）",
                        "条約の留保条件を乱用した無効文（34.3.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u34-l3）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                        "安全保障理事会決議の権能を無視した記述（34.3.a）",
                        "平和維持部隊の法的根拠を欠く文（34.3.b）",
                        "国際司法裁判所の判例に背く記述（34.3.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第3部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試34-3）。",
                    "options": [
                        "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                        "条約履行義務を軽視した無効文（34.3.m）",
                        "全権委任状の要件を欠く不備文（34.3.n）",
                        "寄託手続きの誤謬文（34.3.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u34-l3）の主要外交用語を入力してください（「本協定の」）：",
                    "acceptedAnswers": [
                        "本協定の",
                        "本協定の締約"
                    ],
                    "explanation": "正解の外交用語は「本協定の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u34-l4": {
        "id": "ja-u34-l4",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 4,
        "title": "多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第4部）",
        "level": "C2",
        "objective": "1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第4部）。",
        "presentation": {
            "explanation": "第三十四単元第4課（C2最上位マスター・キャップストーン）では、国家主権・国際法・多国間外交交渉の最高峰である「多国間条約法（1969年ウィーン条約法条約）」および「国連安全保障理事会決議」「サミット共同声明」の起草と外交的口頭防衛を学びます。\n\n【条約締結プロトコルと国際法規範】\n１．署名・批准・寄託手続き（VCLT 1969）：全権委任状の提示、議会による憲法上の批准承認（Ratification）、国連事務総長への批准書寄託。\n２．留保条項（第19条）の起草と解釈。\n３．「合意は守られなければならない（パクタ・スント・セルヴァンダ・第26条）」の履行義務。\n\n【サミット共同声明と安全保障理事会】\n・共同声明（Joint Communiqué）の修辞学：ブラケットの解消と妥協表現の折衝。\n・国連憲章第七章に基づく制裁決議と平和維持部隊（PKO）派遣の外交的弁護。",
            "examples": [
                {
                    "target": "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                    "reading": "ほんきょうていの ていやくこくは、せんきゅうひゃくろくじゅうきゅうねん じょうやくほうにかんする ウィーンじょうやく だいひゃくじょうにもとづき、せいしきな ひじゅんしょを こくさいれんごうじむそうちょうへ きたくいたしました。",
                    "translation": "The States Parties to this Agreement deposited their formal instruments of ratification with the Secretary-General of the United Nations pursuant to Article 100 of the 1969 Vienna Convention on the Law of Treaties."
                },
                {
                    "target": "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                    "reading": "かっこくしゅのうは サミットきょうどうせいめいを さいたくし、ほうのしはいにもとづく じゆうで ひらかれた こくさいちつじょの いじと、きこうへんどうたいさくへの だんこたる せいやくを さいかくにんいたしました。",
                    "translation": "The Heads of State and Government adopted the Summit Joint Communiqué, reaffirming their unyielding commitment to maintaining a free and open international order based on the rule of law and climate change countermeasures."
                },
                {
                    "target": "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                    "reading": "こくさいれんごう あんぜんほしょうりじかいは、こくれんけんしょう だいななしょうの もとで こうどうし、すべての ひつような そちを とることを たこくせき へいわいじぶたいに いにんすることを ぜんかいいっちで けつぎいたしました。",
                    "translation": "The United Nations Security Council, acting under Chapter VII of the Charter of the United Nations, decided unanimously to authorize the multinational peacekeeping force to take all necessary measures."
                },
                {
                    "target": "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                    "reading": "ていやくこくは 「ごういは まもらなければならない」という こくさいかんしゅうほうの こんぽんきはんに のっとり、ほんたこくかんじょうやくの ぎむを せいじつに りこうすることを せいやくいたします。",
                    "translation": "The States Parties pledge to execute the obligations of this multilateral treaty in good faith in accordance with the fundamental norm of customary international law 'Pacta sunt servanda'."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第4部）における国際法規範に厳密に合致する公式外交記述を選択してください（問34.4.1）。",
                    "options": [
                        "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                        "国際条約法に反する法的誤謬（34.4.1）",
                        "主権平等の原則を逸脱した不適当な記述（34.4.2）",
                        "外交慣例に悖る修辞的欠陥文（34.4.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第4部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第4部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習34.4）。",
                    "options": [
                        "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                        "対立を無用に煽る不見識な声明文（34.4.x）",
                        "法的拘束力のない不完全な折衝文（34.4.y）",
                        "条約の留保条件を乱用した無効文（34.4.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u34-l4）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                        "安全保障理事会決議の権能を無視した記述（34.4.a）",
                        "平和維持部隊の法的根拠を欠く文（34.4.b）",
                        "国際司法裁判所の判例に背く記述（34.4.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第4部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試34-4）。",
                    "options": [
                        "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                        "条約履行義務を軽視した無効文（34.4.m）",
                        "全権委任状の要件を欠く不備文（34.4.n）",
                        "寄託手続きの誤謬文（34.4.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u34-l4）の主要外交用語を入力してください（「本協定の」）：",
                    "acceptedAnswers": [
                        "本協定の",
                        "本協定の締約"
                    ],
                    "explanation": "正解の外交用語は「本協定の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "ja-u34-l5": {
        "id": "ja-u34-l5",
        "subject": "japanese",
        "unit": 34,
        "lessonNumber": 5,
        "title": "多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第5部）",
        "level": "C2",
        "objective": "1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第5部）。",
        "presentation": {
            "explanation": "第三十四単元第5課（C2最上位マスター・キャップストーン）では、国家主権・国際法・多国間外交交渉の最高峰である「多国間条約法（1969年ウィーン条約法条約）」および「国連安全保障理事会決議」「サミット共同声明」の起草と外交的口頭防衛を学びます。\n\n【条約締結プロトコルと国際法規範】\n１．署名・批准・寄託手続き（VCLT 1969）：全権委任状の提示、議会による憲法上の批准承認（Ratification）、国連事務総長への批准書寄託。\n２．留保条項（第19条）の起草と解釈。\n３．「合意は守られなければならない（パクタ・スント・セルヴァンダ・第26条）」の履行義務。\n\n【サミット共同声明と安全保障理事会】\n・共同声明（Joint Communiqué）の修辞学：ブラケットの解消と妥協表現の折衝。\n・国連憲章第七章に基づく制裁決議と平和維持部隊（PKO）派遣の外交的弁護。",
            "examples": [
                {
                    "target": "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                    "reading": "ほんきょうていの ていやくこくは、せんきゅうひゃくろくじゅうきゅうねん じょうやくほうにかんする ウィーンじょうやく だいひゃくじょうにもとづき、せいしきな ひじゅんしょを こくさいれんごうじむそうちょうへ きたくいたしました。",
                    "translation": "The States Parties to this Agreement deposited their formal instruments of ratification with the Secretary-General of the United Nations pursuant to Article 100 of the 1969 Vienna Convention on the Law of Treaties."
                },
                {
                    "target": "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                    "reading": "かっこくしゅのうは サミットきょうどうせいめいを さいたくし、ほうのしはいにもとづく じゆうで ひらかれた こくさいちつじょの いじと、きこうへんどうたいさくへの だんこたる せいやくを さいかくにんいたしました。",
                    "translation": "The Heads of State and Government adopted the Summit Joint Communiqué, reaffirming their unyielding commitment to maintaining a free and open international order based on the rule of law and climate change countermeasures."
                },
                {
                    "target": "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                    "reading": "こくさいれんごう あんぜんほしょうりじかいは、こくれんけんしょう だいななしょうの もとで こうどうし、すべての ひつような そちを とることを たこくせき へいわいじぶたいに いにんすることを ぜんかいいっちで けつぎいたしました。",
                    "translation": "The United Nations Security Council, acting under Chapter VII of the Charter of the United Nations, decided unanimously to authorize the multinational peacekeeping force to take all necessary measures."
                },
                {
                    "target": "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                    "reading": "ていやくこくは 「ごういは まもらなければならない」という こくさいかんしゅうほうの こんぽんきはんに のっとり、ほんたこくかんじょうやくの ぎむを せいじつに りこうすることを せいやくいたします。",
                    "translation": "The States Parties pledge to execute the obligations of this multilateral treaty in good faith in accordance with the fundamental norm of customary international law 'Pacta sunt servanda'."
                }
            ],
            "mnemonics": [
                "【記憶定着の要点】文脈における助詞の接続と動詞の活用語尾に注意して構文を把握しましょう。"
            ],
            "culturalNotes": [
                "【日本社会の言語文化】日本語では場面・人間関係・社会的文脈に応じた丁寧さや配慮の使い分けが極めて重要視されます。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【国家主権・外交問題】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第5部）における国際法規範に厳密に合致する公式外交記述を選択してください（問34.5.1）。",
                    "options": [
                        "本協定の締約国は、千九百六十九年条約法に関するウィーン条約第百条に基づき、正式な批准書を国際連合事務総長へ寄託いたしました。",
                        "国際条約法に反する法的誤謬（34.5.1）",
                        "主権平等の原則を逸脱した不適当な記述（34.5.2）",
                        "外交慣例に悖る修辞的欠陥文（34.5.3）"
                    ],
                    "answerIndex": 0,
                    "explanation": "ウィーン条約法条約および国連憲章の国際法規範に完全に準拠しています。"
                },
                {
                    "prompt": "【外交起草理解】1969年ウィーン条約法条約（VCLT）、国連憲章第7章安全保障理事会決議、首脳サミット共同声明の外交起草と口頭防衛（第5部）。に関する外交交渉の要諦を正確に論じている記述を選択してください。",
                    "options": [
                        "多国間外交プロトコルおよび国際慣習法に精緻に合致した正当な論述である。",
                        "国際合意を損なう非現実的な記述である。",
                        "批准手続きを誤認した無効な記述である。",
                        "外交文書として不適格な文言である。"
                    ],
                    "answerIndex": 0,
                    "explanation": "多国間外交文書の起草基準および国際規範に正確に従っています。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【条約防衛演習】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第5部）における公式サミットでの口頭弁護・声明として最も格調高い文を選択してください（演習34.5）。",
                    "options": [
                        "各国首脳はサミット共同声明を採択し、法の支配に基づく自由で開かれた国際秩序の維持と、気候変動対策への断固たる誓約を再確認いたしました。",
                        "対立を無用に煽る不見識な声明文（34.5.x）",
                        "法的拘束力のない不完全な折衝文（34.5.y）",
                        "条約の留保条件を乱用した無効文（34.5.z）"
                    ],
                    "answerIndex": 0,
                    "explanation": "首脳共同声明および多国間条約防衛として最高度の品格と論理性を備えています。"
                },
                {
                    "prompt": "【国際法概念】本課（ja-u34-l5）で提示された国際秩序の最重要規範を体現する正確な文を選択してください。",
                    "options": [
                        "国際連合安全保障理事会は、国連憲章第七章の下で行動し、全ての必要な措置を執ることを多国籍平和維持部隊に委任することを全会一致で決議いたしました。",
                        "安全保障理事会決議の権能を無視した記述（34.5.a）",
                        "平和維持部隊の法的根拠を欠く文（34.5.b）",
                        "国際司法裁判所の判例に背く記述（34.5.c）"
                    ],
                    "answerIndex": 0,
                    "explanation": "国連憲章第7章に基づく国際秩序の強制措置が的確に表現されています。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【最終判定試験】多国間条約批准・国際法と首脳サミット共同声明の外交交渉（第5部）の最高峰C2レベル修得度を認定する国際法・外交問題です（試34-5）。",
                    "options": [
                        "締約国は「合意は守られなければならない」という国際慣習法の根本規範に則り、本多国間条約の義務を誠実に履行することを誓約いたします。",
                        "条約履行義務を軽視した無効文（34.5.m）",
                        "全権委任状の要件を欠く不備文（34.5.n）",
                        "寄託手続きの誤謬文（34.5.p）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「合意は守られなければならない（パクタ・スント・セルヴァンダ）」の根本規範に完全に適合した標準文です。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "本課（ja-u34-l5）の主要外交用語を入力してください（「本協定の」）：",
                    "acceptedAnswers": [
                        "本協定の",
                        "本協定の締約"
                    ],
                    "explanation": "正解の外交用語は「本協定の」です。"
                }
            ],
            "passThreshold": 0.8
        }
    }
};
  var SUBJECT = {
    id: "japanese",
    name: "Japanese",
    units: UNITS,
    lessons: LESSONS
  };
  if (typeof module !== 'undefined' && module.exports) {
    module.exports = SUBJECT;
  }
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['japanese'] = SUBJECT;
})(typeof window !== 'undefined' ? window : globalThis);
