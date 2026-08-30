// japanese curriculum
(function (global) {
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【数字の読み分け】漢数字「47」の標準的な日本語の読み方はどれですか。",
          "options": [
            "よんじゅうなな（または よんじゅうしち）",
            "しじゅうなな",
            "よんじゅうきゅう",
            "ななじゅうよん"
          ],
          "answerIndex": 0,
          "explanation": "「47」は「よんじゅうなな」または「よんじゅうしち」と読みます。"
        },
        {
          "prompt": "【百の音便変化】「300」「600」「800」の正しい読み方の組み合わせを選択してください。",
          "options": [
            "さんびゃく / ろっぴゃく / はっぴゃく",
            "さんひゃく / ろくひゃく / はちひゃく",
            "さんぴゃく / ろくぴゃく / はちぴゃく",
            "さんびゃく / ろくびゃく / はちびゃく"
          ],
          "answerIndex": 0,
          "explanation": "300は濁音化（さんびゃく）、600と800は促音＋半濁音化（ろっぴゃく、はっぴゃく）します。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【電話番号の読み方】「03-1234-5678」を日本語で伝える正しい発話を選択してください。",
          "options": [
            "ゼロさんの、いちにさんよんの、ごーろくななはちです。",
            "ぜろさんから、いちにさんよんまで、ごーろくしちはちです。",
            "れいさん、いちにさんし、ごーろくしちはちです。",
            "ぜろさんを、いちにさんよんを、ごーろくななはちです。"
          ],
          "answerIndex": 0,
          "explanation": "電話番号のハイフン「-」は接続助詞「の」で読み上げます。"
        },
        {
          "prompt": "【合計人数の表現】参加人数が47人であることを述べる文を選択してください。",
          "options": [
            "参加者は全員で四十七人（よんじゅうななにん / よんじゅうしちにん）です。",
            "参加者は全員で四十七本です。",
            "参加者は全員で四十七円です。",
            "参加者は全員で四十七匹です。"
          ],
          "answerIndex": 0,
          "explanation": "人間の数を数える助数詞は「〜人（にん）」です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「この教科書は一冊800円です。二冊で1600円になります。」における「800円」と「1600円」の正しい読み方はどれですか。",
          "options": [
            "はっぴゃくえん / せんろっぴゃくえん",
            "はちひゃくえん / せんろくひゃくえん",
            "はちびゃくえん / せんろくびゃくえん",
            "はっぴゃくえん / せんろくひゃくえん"
          ],
          "answerIndex": 0,
          "explanation": "800円は「はっぴゃくえん」、1600円は「せんろっぴゃくえん」と音便変化します。"
        },
        {
          "type": "typed-recall",
          "prompt": "漢数字「100」のひらがな読みを入力してください（ひらがな三文字）:",
          "acceptedAnswers": [
            "ひゃく",
            "ヒャク"
          ],
          "explanation": "100は「ひゃく」と読みます。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【時間の不規則読み】「4時」「7時」「9時」の標準的な日本語の発音の組み合わせを選択してください。",
          "options": [
            "よじ / しちじ（または ななじ） / くじ",
            "よんじ / ななじ / きゅうじ",
            "しじ / しちじ / きゅうじ",
            "よじ / ななじ / きゅうじ"
          ],
          "answerIndex": 0,
          "explanation": "時刻の「時」では4時は「よじ」、7時は「しちじ」、9時は「くじ」と読みます。"
        },
        {
          "prompt": "【「分」の音便】「1分」「3分」「6分」「8分」「10分」の正しい読み方の組み合わせを選択してください。",
          "options": [
            "いっぷん / さんぷん / ろっぷん / はっぷん / じゅっぷん",
            "いちふん / さんふん / ろくふん / はちふん / じゅうふん",
            "いっぷん / さんふん / ろっぷん / はちふん / じっぷん",
            "いちぷん / さんぷん / ろくぷん / はちぷん / じゅうぷん"
          ],
          "answerIndex": 0,
          "explanation": "1, 3, 6, 8, 10分は半濁音「〜ぷん」および促音化（いっぷん、ろっぷん等）を伴います。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【時刻の質問と回答】現在時刻を尋ねられて「ちょうど午後2時30分」と答える対話を選択してください。",
          "options": [
            "「今、何時ですか。」「ちょうど午後二時半（ごご にじはん）です。」",
            "「今、何分ですか。」「午後二分です。」",
            "「今、何曜日ですか。」「午後二時です。」",
            "「今、何日ですか。」「二時半日です。」"
          ],
          "answerIndex": 0,
          "explanation": "「2時30分」は「2時半（にじはん）」と言います。"
        },
        {
          "prompt": "【出発時刻の伝達】新幹線の出発時刻「午後4時14分」を正確に伝える文を選択してください。",
          "options": [
            "新幹線は東京駅を午後四時十四分（ごご よじ じゅうよんぷん）に出発いたします。",
            "新幹線は東京駅を午後四時十四分（ごご しじ じゅうよんふん）に出発いたします。",
            "新幹線は東京駅を午後四時十四分（ごご よんじ じゅうよんふん）に出発いたします。",
            "新幹線は東京駅を午後四時十四分（ごご よじ じゅうしふん）に出発いたします。"
          ],
          "answerIndex": 0,
          "explanation": "4時は「よじ」、14分は「じゅうよんぷん」です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「会議の開始時刻は午前10時10分です」の正しい読み方はどれですか。",
          "options": [
            "ごぜん じゅうじ じゅっぷん（または じっぷん）",
            "ごぜん とおじ じゅうふん",
            "ごぜん じゅうじ とおふん",
            "ごぜん じゅうじ じゅうふん"
          ],
          "answerIndex": 0,
          "explanation": "10時は「じゅうじ」、10分は「じゅっぷん（じっぷん）」と読みます。"
        },
        {
          "type": "typed-recall",
          "prompt": "「4時」のひらがな読みを入力してください（ひらがな二文字）:",
          "acceptedAnswers": [
            "よじ",
            "ヨジ"
          ],
          "explanation": "4時の読みは「よじ」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【日付の特殊和語読み】「1日」「2日」「8日」「20日」の正しい読み方の組み合わせを選択してください。",
          "options": [
            "ついたち / ふつか / ようか / はつか",
            "いちにち / ににち / はちにち / にじゅうにち",
            "ついたち / ふつか / はちにち / はつか",
            "いちにち / ふつか / ようか / にじゅうにち"
          ],
          "answerIndex": 0,
          "explanation": "1日は「ついたち」、2日は「ふつか」、8日は「ようか」、20日は「はつか」と特殊な和語読みをします。"
        },
        {
          "prompt": "【4がつく日付の読み】「4日」「14日」「24日」の正しい読み方を選択してください。",
          "options": [
            "よっか / じゅうよっか / にじゅうよっか",
            "よんにち / じゅうよんにち / にじゅうよんにち",
            "しにち / じゅうしにち / にじゅうしにち",
            "よっか / じゅうよんにち / にじゅうよっか"
          ],
          "answerIndex": 0,
          "explanation": "4がつく日付（4日、14日、24日）はすべて促音を伴う「〜よっか」となります。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【誕生日の伝達】「5月5日」を正確に伝える文を選択してください。",
          "options": [
            "私の誕生日は五月五日（ごがつ いつか）です。",
            "私の誕生日は五月五日（ごがつ ごにち）です。",
            "私の誕生日は五月五日（ごがつ いつひ）です。",
            "私の誕生日は五月五日（いつがつ いつか）です。"
          ],
          "answerIndex": 0,
          "explanation": "5月は「ごがつ」、5日は「いつか」と読みます。"
        },
        {
          "prompt": "【曜日の順序】「水曜日」の翌日の曜日を答える自然な文を選択してください。",
          "options": [
            "今日は水曜日です。明日は木曜日（もくようび）です。",
            "今日は水曜日です。明日は火曜日です。",
            "今日は水曜日です。明日は金曜日です。",
            "今日は水曜日です。明日は土曜日です。"
          ],
          "answerIndex": 0,
          "explanation": "水曜日の次は木曜日（もくようび）です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「日本への出張は7月20日から8月10日までです」の日付部分（7月20日 / 8月10日）の正しい読み方はどれですか。",
          "options": [
            "しちがつ はつか / はちがつ とおか",
            "なながつ にじゅうにち / はちがつ じゅうにち",
            "しちがつ にじゅうにち / はちがつ とおか",
            "なながつ はつか / はちがつ じゅうにち"
          ],
          "answerIndex": 0,
          "explanation": "7月は「しちがつ」、20日は「はつか」、8月は「はちがつ」、10日は「とおか」です。"
        },
        {
          "type": "typed-recall",
          "prompt": "カレンダーの「1日」の特殊な和語読みを入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "ついたち",
            "ツイタチ"
          ],
          "explanation": "1日は「ついたち」と読みます。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【価格を尋ねる表現】商品の値段を丁寧に尋ねる疑問文として最も自然なものはどれですか。",
          "options": [
            "すみません、これはいくらですか。",
            "すみません、これは何円ですか。",
            "すみません、これは幾つですか。",
            "すみません、これは何時ですか。"
          ],
          "answerIndex": 0,
          "explanation": "価格を尋ねる定番表現は「いくらですか」です。"
        },
        {
          "prompt": "【大数の単位区切り】数値「158,000円」の日本語の正しい読み方を選択してください。",
          "options": [
            "じゅうごまん はっせんえん（15万 8千円）",
            "ひゃくごじゅうはち せんえん",
            "じゅうごまん はちひゃくえん",
            "いっせんごひゃくはちじゅうえん"
          ],
          "answerIndex": 0,
          "explanation": "日本語では4桁（万）ごとに区切るため、158,000は「15万8千（じゅうごまんはっせん）」となります。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【支払いとクレジットカード】レジでの支払い時の自然な対話を選択してください。",
          "options": [
            "「お会計は全部で三万二千円になります。」「クレジットカードは使えますか。」",
            "「お会計は全部で三万二千時です。」「円を払います。」",
            "「お会計は三万二千日です。」「カードを飲みます。」",
            "「お会計は三万二千人です。」「行きます。」"
          ],
          "answerIndex": 0,
          "explanation": "金額を提示された際の支払い手段の確認として「クレジットカードは使えますか」が適切です。"
        },
        {
          "prompt": "【紙幣とお釣りの表現】1万円札を出してお釣りを求める丁寧な表現を選択してください。",
          "options": [
            "一万円札でお支払いいたしますので、お釣りをお願いします。",
            "一万円札を食べますので、お釣りをください。",
            "一万円札に行きますので、お釣りを取ってください。",
            "一万円札です。お釣りはいりませんです。"
          ],
          "answerIndex": 0,
          "explanation": "「〜でお支払いいたしますので、お釣りをお願いします」が丁寧で自然です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「税込（ぜいこみ）」と「税抜（ぜいぬき）」の意味の説明として正しいものはどれですか。",
          "options": [
            "税込は消費税を含んだ価格、税抜は消費税を含まない本体価格である。",
            "税込は割引価格、税抜は定価である。",
            "税込は現金価格、税抜はカード価格である。",
            "両者に違いはない。"
          ],
          "answerIndex": 0,
          "explanation": "税込（消費税込み）と税抜（本体価格のみ）の区別です。"
        },
        {
          "type": "typed-recall",
          "prompt": "日本の通貨単位（漢字一文字）を入力してください:",
          "acceptedAnswers": [
            "円",
            "えん",
            "エン"
          ],
          "explanation": "日本の通貨単位は「円（えん）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【助詞「に」の付加規則】助詞「に」を付けるべき時間表現はどれですか。",
          "options": [
            "午前7時（具体的な数字を含む時刻：午前7時に起きる）",
            "今日（相対的な時間名詞）",
            "毎朝（習慣を表す時間名詞）",
            "明日（相対的な時間名詞）"
          ],
          "answerIndex": 0,
          "explanation": "数字を含む具体的な時点（7時、5月5日など）には助詞「に」を付けます。今日・明日・毎朝には原則付けません。"
        },
        {
          "prompt": "【起点「から」と終点「まで」】「9時から5時まで」を表す正しい助詞の組み合わせを選択してください。",
          "options": [
            "起点：から / 終点：まで",
            "起点：まで / 終点：から",
            "起点：に / 終点：へ",
            "起点：で / 終点：を"
          ],
          "answerIndex": 0,
          "explanation": "時間の始まり（起点）は「から」、終わり（終点）は「まで」で表します。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【営業期間の案内】図書館が「火曜日から日曜日まで」開いていることを伝える文を選択してください。",
          "options": [
            "図書館は火曜日から日曜日まで開館しています。月曜日は休館です。",
            "図書館は火曜日に日曜日に開館しています。",
            "図書館は火曜日まで日曜日から開館しています。",
            "図書館は火曜日で日曜日を開館しています。"
          ],
          "answerIndex": 0,
          "explanation": "「火曜日から（起点）日曜日まで（終点）」の組み合わせが正確です。"
        },
        {
          "prompt": "【相対時間名詞の助詞】「明日の夜、友達と会う」という文で助詞「に」が付かない正しい文を選択してください。",
          "options": [
            "明日の夜、友達と銀座で会う約束があります。",
            "明日の夜に、友達と銀座で会う約束がありますに。",
            "明日にの夜に、友達と銀座で会う約束があります。",
            "毎明日に、友達と銀座で会う約束があります。"
          ],
          "answerIndex": 0,
          "explanation": "「明日の夜」のような相対的時間表現には助詞「に」を付けずにそのまま副詞的に用います。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「本日のセミナーは午後1時から午後4時半まで行われます」における「から」と「まで」の文法機能は何ですか。",
          "options": [
            "「から」は開始時刻（起点）、「まで」は終了時刻（終点）を示している。",
            "「から」は場所で「まで」は時間である。",
            "両方とも理由を表している。",
            "「から」が終点で「まで」が起点である。"
          ],
          "answerIndex": 0,
          "explanation": "開始時刻の起点「午後1時から」と終了時刻の終点「午後4時半まで」を表します。"
        },
        {
          "type": "typed-recall",
          "prompt": "時間の終点（〜まで）を表す助詞を入力してください（ひらがな二文字）:",
          "acceptedAnswers": [
            "まで",
            "マデ"
          ],
          "explanation": "終点を表す助詞は「まで」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【存在動詞の峻別】「猫」「先生」「机」「桜の木」に接続する存在動詞の組み合わせとして正しいものはどれですか。",
          "options": [
            "猫：います / 先生：います / 机：あります / 桜の木：あります",
            "猫：あります / 先生：います / 机：あります / 桜の木：います",
            "猫：います / 先生：あります / 机：います / 桜の木：あります",
            "すべて「あります」"
          ],
          "answerIndex": 0,
          "explanation": "人間・動物などの有情物には「います」、物品・植物などの無情物には「あります」を用います。"
        },
        {
          "prompt": "【植物の存在動詞】「庭に大きな桜の木が＿＿＿。」の空欄に入る動詞はどれですか。",
          "options": [
            "あります（植物は無情物として「ある」を用いる）",
            "います",
            "します",
            "行きます"
          ],
          "answerIndex": 0,
          "explanation": "日本語文法において植物（樹木・草花）は自律移動しないため「あります」をとります。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【教室内の描写】教室に先生と留学生がいる状況を表す最も適切な文を選択してください。",
          "options": [
            "教室の中に日本語の先生と留学生がいます。",
            "教室の中に日本語の先生と留学生があります。",
            "教室の中に日本語の先生と留学生がします。",
            "教室の中に日本語の先生と留学生が行きます。"
          ],
          "answerIndex": 0,
          "explanation": "先生と留学生は人間（有情物）であるため「います」を用います。"
        },
        {
          "prompt": "【机の上の配置】机の上に文房具がある状況を表す文を選択してください。",
          "options": [
            "机の上に辞書とノートとペンがあります。",
            "机の上に辞書とノートとペンがいます。",
            "机の上に辞書とノートとペンが話します。",
            "机の上に辞書とノートとペンをあります。"
          ],
          "answerIndex": 0,
          "explanation": "辞書・ノート・ペンは無生物であるため「あります」を用います。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「明日の午後、国際会議場で重要なシンポジウムが＿＿＿。」に入る動詞は何ですか。",
          "options": [
            "あります（イベント・催事・行事の存在）",
            "います",
            "おられます",
            "いらっしゃいます"
          ],
          "answerIndex": 0,
          "explanation": "会議や催し事・イベントの開催・存在には「あります」を用います。"
        },
        {
          "type": "typed-recall",
          "prompt": "人間や動物の存在を表す動詞の丁寧形を入力してください（ひらがな三文字）:",
          "acceptedAnswers": [
            "います",
            "イマス",
            "居ます"
          ],
          "explanation": "有情物の存在動詞は「います」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【ウチとソトの親族呼称】他者に対して「自分の父親」と「相手の父親」を指す正しい組み合わせを選択してください。",
          "options": [
            "自分の父親：父（ちち） / 相手の父親：お父さん（おとうさん・お父様）",
            "自分の父親：お父さん / 相手の父親：父",
            "自分の父親：パパさん / 相手の父親：父",
            "両方とも「お父さん」"
          ],
          "answerIndex": 0,
          "explanation": "日本語では他者に対して自分の身内を呼ぶ時は謙譲語の「父」「母」を使い、相手の家族には「お父さん」「お母さん」と敬称を付けます。"
        },
        {
          "prompt": "【自分の兄を他人に紹介する文】他者との対話で自分の兄の職業を説明する適切な文はどれですか。",
          "options": [
            "私の兄（あに）は東京のIT企業でエンジニアをしています。",
            "私のお兄さんは東京のIT企業でエンジニアをしています。",
            "私のお兄様は東京のIT企業でエンジニアをしています。",
            "私の兄さんは東京のIT企業でエンジニアをしています。"
          ],
          "answerIndex": 0,
          "explanation": "外部の人に対して自分の兄を言うときは敬称を付けず「兄（あに）」と言います。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【両親の職業紹介】他者に対して自分の両親を紹介する最も礼儀正しい日本語を選択してください。",
          "options": [
            "私の父は高校の英語教師で、母は総合病院の看護師です。",
            "私のお父さんは高校の英語教師で、お母さんは看護師です。",
            "私の父様は英語教師で、母様は看護師です。",
            "私のお父様とお母様は教師と看護師です。"
          ],
          "answerIndex": 0,
          "explanation": "身内の紹介では「父（ちち）」「母（はは）」を用いるのが正しい規範です。"
        },
        {
          "prompt": "【相手の家族への気遣い】相手の家族の健康を気遣う質問とそれに対する自然な返答を選択してください。",
          "options": [
            "「佐藤さんのご家族はお元気ですか。」「はい、おかげさまで皆元気です。」",
            "「佐藤さんの身内は生きていますか。」「死んでいません。」",
            "「佐藤さんの父はいますか。」「父はいません。」",
            "「佐藤さんの家庭はどうですか。」「家庭があります。」"
          ],
          "answerIndex": 0,
          "explanation": "「ご家族はお元気ですか」「おかげさまで皆元気です」が極めて自然な社交儀礼です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "取引先の人に対して自分の母親について言及する際、最も適切な呼称はどれですか。",
          "options": [
            "母（はは）",
            "お母さん",
            "お母様",
            "ママ"
          ],
          "answerIndex": 0,
          "explanation": "ビジネスや改まった対外対話で自分の母親は「母（はは）」と呼びます。"
        },
        {
          "type": "typed-recall",
          "prompt": "他者に対して自分の父親を呼ぶ際の謙称を入力してください（漢字一文字）:",
          "acceptedAnswers": [
            "父",
            "ちち",
            "チチ"
          ],
          "explanation": "自分の父親は「父（ちち）」と呼びます。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【空間位置構文の語順】「基準となる物」と「位置名詞」を繋ぐ助詞の正しいパターンはどれですか。",
          "options": [
            "［基準名詞］＋ の ＋［位置名詞］＋ に（例：机の上【に】）",
            "［基準名詞］＋ に ＋［位置名詞］＋ の",
            "［位置名詞］＋ の ＋［基準名詞］＋ を",
            "［基準名詞］＋ で ＋［位置名詞］＋ へ"
          ],
          "answerIndex": 0,
          "explanation": "日本語の位置表現は「名詞 ＋ の ＋ 上/下/前/後/中/間 ＋ に」となります。"
        },
        {
          "prompt": "【「間（あいだ）」の構文】「AとBの間」を表す正しい助詞の組み合わせを選択してください。",
          "options": [
            "銀行【と】病院の【間】に郵便局があります。",
            "銀行【に】病院の【中】に郵便局があります。",
            "銀行【へ】病院の【上】に郵便局があります。",
            "銀行【で】病院の【下】に郵便局があります。"
          ],
          "answerIndex": 0,
          "explanation": "二者の間を示す構文は「A と B の 間（あいだ）に」です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【駅前の描写】駅の正面に本屋とカフェがあることを述べる文を選択してください。",
          "options": [
            "駅の前に大きな本屋とカフェがあります。",
            "駅の上が大きな本屋とカフェにあります。",
            "駅の中へ大きな本屋とカフェをあります。",
            "駅の後ろで大きな本屋とカフェがあります。"
          ],
          "answerIndex": 0,
          "explanation": "「駅の前（まえ）に」で駅の正面の位置を示します。"
        },
        {
          "prompt": "【机の隣の配置】机の右隣に本棚が置かれていることを説明する文を選択してください。",
          "options": [
            "机の右隣（みぎどなり）に本棚があります。",
            "机の右間に本棚がいます。",
            "机の右下に本棚がします。",
            "机の右前に本棚を行きます。"
          ],
          "answerIndex": 0,
          "explanation": "右側のすぐ隣は「右隣（みぎどなり）」で表します。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「箱の中に何が入っていますか。」に対する返答として適切なものはどれですか。",
          "options": [
            "古い写真と手紙があります。",
            "古い写真と手紙がいます。",
            "古い写真と手紙が行きます。",
            "古い写真と手紙を飲みます。"
          ],
          "answerIndex": 0,
          "explanation": "写真や手紙は無生物なので「あります」を用います。"
        },
        {
          "type": "typed-recall",
          "prompt": "「二つのものの真ん中」を意味する空間位置名詞を入力してください（漢字一文字）:",
          "acceptedAnswers": [
            "間",
            "あいだ",
            "アイダ"
          ],
          "explanation": "「間（あいだ）」は二者の間を表します。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【「場所＋に＋物＋が＋ある」の格助詞】「ビルの屋上＿＿＿庭園＿＿＿あります。」の空欄に入る助詞の組み合わせを選択してください。",
          "options": [
            "に / が（場所に 庭園が あります）",
            "で / を",
            "へ / と",
            "から / まで"
          ],
          "answerIndex": 0,
          "explanation": "存在の場所には助詞「に」、存在する主体（新情報）には助詞「が」を用います。"
        },
        {
          "prompt": "【誰がいますかへの応答】「会議室に誰がいますか。」に対する文法的に正しい返答はどれですか。",
          "options": [
            "部長とクライアントがいます。",
            "部長とクライアントがあります。",
            "部長とクライアントに行きます。",
            "部長とクライアントを食べます。"
          ],
          "answerIndex": 0,
          "explanation": "人物の存在を答えるため「〜がいます」となります。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【所在の質問と回答】田中さんの現在地を尋ねて答える自然な対話を選択してください。",
          "options": [
            "「田中さんは今どこにいますか。」「図書館の二階にいます。」",
            "「田中さんは今どこがありますか。」「図書館の二階があります。」",
            "「田中さんは今どこへしますか。」「図書館の二階をします。」",
            "「田中さんは今どこで行きますか。」「図書館の二階から行きます。」"
          ],
          "answerIndex": 0,
          "explanation": "人物の所在を尋ねる疑問文は「どこにいますか」、回答は「〜にいます」です。"
        },
        {
          "prompt": "【ランドマークの存在】新宿駅東口に待ち合わせ場所があることを説明する文を選択してください。",
          "options": [
            "新宿駅の東口に有名な待ち合わせ場所があります。",
            "新宿駅の東口で有名な待ち合わせ場所をいます。",
            "新宿駅の東口へ有名な待ち合わせ場所がいます。",
            "新宿駅の東口から有名な待ち合わせ場所がありますか。"
          ],
          "answerIndex": 0,
          "explanation": "「東口に（場所）場所が（主体）あります（無生物）」の語順と助詞配置が正確です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「庭に犬がいます」と「犬は庭にいます」の文法的・語用論的差異は何ですか。",
          "options": [
            "前者は「犬がいる」という新情報の提示、後者は既知の「犬」の所在を説明している。",
            "前者が無生物で後者が生物である。",
            "前者が過去形で後者が現在形である。",
            "意味上の違いは全くない。"
          ],
          "answerIndex": 0,
          "explanation": "「〜に〜がいる（が）」は新情報の導入、「〜は〜にいる（は）」は既知の主題の所在説明です。"
        },
        {
          "type": "typed-recall",
          "prompt": "存在文において存在場所を示す格助詞を入力してください（ひらがな一文字）:",
          "acceptedAnswers": [
            "に",
            "ニ"
          ],
          "explanation": "存在場所を示す助詞は「に」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【並立助詞の使い分け】名詞を「すべて漏れなく完全に列挙する」助詞と、「代表的な例を挙げる」助詞の正しい組み合わせはどれですか。",
          "options": [
            "完全列挙：と / 代表列挙：や（〜など）",
            "完全列挙：や / 代表列挙：と",
            "完全列挙：も / 代表列挙：と",
            "完全列挙：に / 代表列挙：で"
          ],
          "answerIndex": 0,
          "explanation": "「と」は全要素を網羅する完全列挙、「や」は一部を例示する代表列挙です。"
        },
        {
          "prompt": "【同類追加の助詞】「田中さんは学生です。佐藤さん＿＿＿学生です。」の空欄に入る助詞はどれですか。",
          "options": [
            "も（同類・追加）",
            "と",
            "や",
            "を"
          ],
          "answerIndex": 0,
          "explanation": "既出の要素と同類・共通であることを表すには助詞「も」を用います。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【文脈理解】「休日は図書館で本や雑誌などを読みます」の文が含意している事実として正しいものはどれですか。",
          "options": [
            "本や雑誌の他にも、新聞や資料など色々なものを読んでいる可能性がある。",
            "読んだものは本と雑誌の二種類だけで他には一切読んでいない。",
            "本も雑誌も読んでいない。",
            "図書館ではなく書店で買った。"
          ],
          "answerIndex": 0,
          "explanation": "「や〜など」は代表的な例示であり、言及されていない他の同類要素の存在を含みます。"
        },
        {
          "prompt": "【並列文の構成】朝食でパン・卵・リンゴの3品だけを食べたことを漏れなく正確に伝える文を選択してください。",
          "options": [
            "朝食にパンと卵とリンゴを食べました。",
            "朝食にパンや卵を食べました。",
            "朝食にパンも卵も食べませんでした。",
            "朝食にパンに卵にリンゴでした。"
          ],
          "answerIndex": 0,
          "explanation": "食べた全品目を漏れなく網羅するため、完全列挙の助詞「と」を用います。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「デパートで靴と鞄を買いました。時計も欲しかったです。」における各助詞の機能の記述として最も正確なものはどれですか。",
          "options": [
            "「と」は靴と鞄の完全列挙、「も」は時計を追加の対象として提示している。",
            "「と」は代表例で「も」は主語である。",
            "「と」は時間で「も」は場所である。",
            "助詞の使い分けに誤りがある。"
          ],
          "answerIndex": 0,
          "explanation": "「靴と鞄」で買った品目を網羅し、「時計も」で追加の願望対象を提示しています。"
        },
        {
          "type": "typed-recall",
          "prompt": "代表的な例を並べて挙げる並立助詞を入力してください（ひらがな一文字）:",
          "acceptedAnswers": [
            "や",
            "ヤ"
          ],
          "explanation": "代表列挙の並立助詞は「や」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【動詞のグループ分類】「書く（かく）」「食べる（たべる）」「する」「来る（くる）」の動詞グループ分類として正しい組み合わせはどれですか。",
          "options": [
            "書く：一類（五段） / 食べる：二類（一段） / する・来る：三類（不規則）",
            "書く：二類 / 食べる：一類 / する・来る：三類",
            "すべて一類動詞",
            "書く：三類 / 食べる：二類 / する・来る：一類"
          ],
          "answerIndex": 0,
          "explanation": "「書く」は五段活用（一類）、「食べる」は一段活用（二類）、「する」「来る」は不規則動詞（三類）です。"
        },
        {
          "prompt": "【ます形の活用】動詞「飲む（のむ）」と「見る（みる）」を丁寧形「〜ます」に活用させた正しい形を選択してください。",
          "options": [
            "飲みます（一類：u→i段＋ます） / 見ます（二類：る脱落＋ます）",
            "飲みます / 見ります",
            "飲めます / 見ます",
            "飲るます / 見ます"
          ],
          "answerIndex": 0,
          "explanation": "一類動詞「飲む」は語尾をi段に変えて「飲みます」、二類動詞「見る」は語尾の「る」を取って「見ます」となります。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【日課の動作】毎朝緑茶を飲む習慣を丁寧に述べる文を選択してください。",
          "options": [
            "毎朝七時に起きて、温かい緑茶を飲みます。",
            "毎朝七時に起きて、温かい緑茶を飲みるです。",
            "毎朝七時に起きて、温かい緑茶を飲ます。",
            "毎朝七時に起きて、温かい緑茶を食べます。"
          ],
          "answerIndex": 0,
          "explanation": "「起きて（て形接続）」「飲みます（丁寧形）」の文法接続が正確です。"
        },
        {
          "prompt": "【否定応答】「毎日新聞を読みますか。」に対する自然な否定の返答を選択してください。",
          "options": [
            "いいえ、新聞は読みません。ネットニュースを見ます。",
            "いいえ、新聞は読みます。ネットニュースを飲みます。",
            "いいえ、新聞は読まないでした。ネットニュースを行きます。",
            "いいえ、新聞は読めませんです。"
          ],
          "answerIndex": 0,
          "explanation": "「読みません（ます形の否定）」と「見ます」の組み合わせが自然です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "動詞「来る（くる）」の丁寧形「〜ます」の正しい発音と表記はどれですか。",
          "options": [
            "来ます（きます）",
            "来ます（くます）",
            "来ます（こます）",
            "来ります（きります）"
          ],
          "answerIndex": 0,
          "explanation": "三類動詞「来る（くる）」のます形は「来ます（きます）」と読みます。"
        },
        {
          "type": "typed-recall",
          "prompt": "動詞「話す（はなす）」の丁寧形（ます形）を入力してください（ひらがな五文字）:",
          "acceptedAnswers": [
            "はなします",
            "ハナシマス",
            "話します"
          ],
          "explanation": "「話す」のます形は「話します（はなします）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【格助詞「を」の役割】「直接目的語」を示す助詞「を」の正しい使用例はどれですか。",
          "options": [
            "毎朝コーヒー【を】飲みます。（飲む対象を指定）",
            "毎朝コーヒー【に】飲みます。",
            "毎朝コーヒー【で】飲みます。",
            "毎朝コーヒー【へ】飲みます。"
          ],
          "answerIndex": 0,
          "explanation": "動作の対象（直接目的語）には格助詞「を」を用います。"
        },
        {
          "prompt": "【「写真を撮る」のコロケーション】「記念写真＿＿＿撮りましょう。」の空欄に入る助詞はどれですか。",
          "options": [
            "を（写真を撮る）",
            "が",
            "に",
            "で"
          ],
          "answerIndex": 0,
          "explanation": "「写真を撮る」の目的語には助詞「を」を用います。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【週末の映画鑑賞】週末に友達と日本のアニメ映画を見たことを伝える文を選択してください。",
          "options": [
            "週末に友達と一緒に日本のアニメ映画を見ました。",
            "週末に友達と一緒に日本のアニメ映画を聞きました。",
            "週末に友達と一緒に日本のアニメ映画を食べました。",
            "週末に友達と一緒に日本のアニメ映画に行きました。"
          ],
          "answerIndex": 0,
          "explanation": "映画を視覚的に鑑賞する動詞は「見る（見ました）」です。"
        },
        {
          "prompt": "【専攻分野の説明】大学で経済を専攻して勉強していることを説明する文を選択してください。",
          "options": [
            "大学で国際関係論とアジア経済を専攻して勉強しています。",
            "大学で国際関係論とアジア経済が専攻して勉強しています。",
            "大学で国際関係論とアジア経済へ専攻して勉強しています。",
            "大学で国際関係論とアジア経済に専攻して勉強しています。"
          ],
          "answerIndex": 0,
          "explanation": "学習する対象を示すため目的語の助詞「を」を用います。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "格助詞「を」の正しい文字表記と発音の組み合わせはどれですか。",
          "options": [
            "表記は「を」、発音は「お」",
            "表記は「お」、発音は「を」",
            "表記は「お」、発音は「う」",
            "表記は「を」、発音は「わ」"
          ],
          "answerIndex": 0,
          "explanation": "目的語の助詞は仮名「を」と書き、現代日本語では「お」と発音します。"
        },
        {
          "type": "typed-recall",
          "prompt": "他動詞の直接目的語を表す助詞を入力してください（ひらがな一文字）:",
          "acceptedAnswers": [
            "を",
            "ヲ"
          ],
          "explanation": "目的語の格助詞は「を」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【「で」の二大用法】「図書館で勉強する（場所）」と「地下鉄で行く（手段）」における助詞「で」の機能の正しい解釈はどれですか。",
          "options": [
            "前者は「動作が行われる活動場所」、後者は「移動の交通手段」を示している。",
            "前者が時間で後者が場所である。",
            "両方とも目的語を示している。",
            "前者が手段で後者が場所である。"
          ],
          "answerIndex": 0,
          "explanation": "「図書館で」は動作発生の場所、「地下鉄で」は移動の交通手段を表します。"
        },
        {
          "prompt": "【道具・言語の「で」】「箸＿＿＿食べます」「日本語＿＿＿話します」に入る助詞はどれですか。",
          "options": [
            "で（道具・言語の手段を表す）",
            "に",
            "を",
            "へ"
          ],
          "answerIndex": 0,
          "explanation": "道具（箸）や使用言語（日本語）を表す手段の格助詞は「で」です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【通勤手段の説明】毎朝地下鉄を使って通勤していることを述べる文を選択してください。",
          "options": [
            "毎朝、地下鉄で会社へ通っています。",
            "毎朝、地下鉄を会社へ通っています。",
            "毎朝、地下鉄に会社へ通っています。",
            "毎朝、地下鉄へ会社へ通っています。"
          ],
          "answerIndex": 0,
          "explanation": "交通手段を示す格助詞は「で」を用います。"
        },
        {
          "prompt": "【指示と回答】日本語を使って回答するよう求める丁寧な指示文を選択してください。",
          "options": [
            "この質問は日本語で答えてください。",
            "この質問は日本語を答えてください。",
            "この質問は日本語に答えてください。",
            "この質問は日本語へ答えてください。"
          ],
          "answerIndex": 0,
          "explanation": "使用言語を指定する助詞は「で（日本語で）」です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「場所＋に」と「場所＋で」の使い分けとして正しい記述はどれですか。",
          "options": [
            "「に」は静止した存在場所（〜にいる/ある）、「で」は動作・行為の発生場所（〜で食べる/勉強する）に用いる。",
            "「に」が動作で「で」が存在である。",
            "両者に使い分けのルールはなく常に交換可能である。",
            "「で」は時間にしか使えない。"
          ],
          "answerIndex": 0,
          "explanation": "存在場所は「に（机の上にある）」、活動・動作の場所は「で（図書館で勉強する）」と厳格に使い分けます。"
        },
        {
          "type": "typed-recall",
          "prompt": "動作の場所や手段を表す格助詞を入力してください（ひらがな一文字）:",
          "acceptedAnswers": [
            "で",
            "デ"
          ],
          "explanation": "動作場所・手段の助詞は「で」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【移動動詞の方向助詞】「京都＿＿＿行きます。」の空欄に入る方向・目的地を表す助詞として正しいものはどれですか。",
          "options": [
            "へ（または に）",
            "で",
            "を",
            "から"
          ],
          "answerIndex": 0,
          "explanation": "移動の方向や目的地には助詞「へ（発音は え）」または「に」を用います。"
        },
        {
          "prompt": "【移動目的の構文】「買い物に行く」という目的を表す正しい構文はどれですか。",
          "options": [
            "服を【買いに】行きます（動詞ます語幹＋に＋行く）",
            "服を【買うに】行きます",
            "服を【買いで】行きます",
            "服を【買いて】行きます"
          ],
          "answerIndex": 0,
          "explanation": "移動の目的は「動詞ます語幹 ＋ に ＋ 行く/来る/帰る」で表します（買いに行きます）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【帰宅の表現】仕事を終えて自宅へ戻ることを述べる文を選択してください。",
          "options": [
            "夕方六時に仕事を終えて家へ帰ります。",
            "夕方六時に仕事を終えて家へ行きます。",
            "夕方六時に仕事を終えて家へ来ます。",
            "夕方六時に仕事を終えて家を帰ります。"
          ],
          "answerIndex": 0,
          "explanation": "自分の本拠地や家庭に戻る動作には動詞「帰る（帰ります）」を用います。"
        },
        {
          "prompt": "【留学の目的】日本語を勉強するために来日したことを述べる文を選択してください。",
          "options": [
            "留学生が日本へ日本語の勉強に来ました。",
            "留学生が日本で日本語の勉強を行きました。",
            "留学生が日本を日本語の勉強に帰りました。",
            "留学生が日本から日本語の勉強をしました。"
          ],
          "answerIndex": 0,
          "explanation": "「日本へ（目的地）勉強に（目的）来ました（移動動詞）」の構成が正確です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "方向を示す助詞「へ」の表記と発音についての正しい説明はどれですか。",
          "options": [
            "文字は「へ」と書き、発音は「え」となる。",
            "文字は「え」と書き、発音は「へ」となる。",
            "文字も発音も常に「へ」である。",
            "文字も発音も常に「は」である。"
          ],
          "answerIndex": 0,
          "explanation": "方向の助詞は歴史的仮名遣いの名残で「へ」と表記し、「え」と発音します。"
        },
        {
          "type": "typed-recall",
          "prompt": "方向を表す助詞の仮名表記を入力してください（ひらがな一文字）:",
          "acceptedAnswers": [
            "へ",
            "ヘ"
          ],
          "explanation": "方向の助詞は「へ」と書きます。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【勧誘と提案の使い分け】相手の意向を尊重して丁寧に誘う表現として最も適切なものはどれですか。",
          "options": [
            "一緒にカフェでお茶を飲みませんか。（相手に断る余地を残す丁寧な勧誘）",
            "一緒にカフェでお茶を飲め。",
            "一緒にカフェでお茶を飲まなければならない。",
            "一緒にカフェでお茶を飲んだ。"
          ],
          "answerIndex": 0,
          "explanation": "「〜ませんか」は相手の意思を尊重して誘う丁寧な勧誘表現です。"
        },
        {
          "prompt": "【手助けの申し出】重い荷物を持っている人に対して手助けを申し出る表現はどれですか。",
          "options": [
            "荷物をお持ちしましょうか。（Shall I help you carry your luggage?）",
            "荷物を持ちなさい。",
            "荷物を持ちますか。",
            "荷物を持ってください。"
          ],
          "answerIndex": 0,
          "explanation": "自分が相手のために手助けを申し出る際は「〜ましょうか」を用います。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【会議開始の呼びかけ】時間になったので参加者に開始を呼びかける文を選択してください。",
          "options": [
            "時間になりましたので、午後の全体会議を始めましょう。",
            "時間になりましたので、午後の全体会議を始めませんかでした。",
            "時間になりましたので、午後の全体会議を始めたいです。",
            "時間になりましたので、午後の全体会議を始めません。"
          ],
          "answerIndex": 0,
          "explanation": "全員で行動を開始することを積極的に提案する呼びかけは「〜ましょう」です。"
        },
        {
          "prompt": "【休憩の相談】同僚に10分ほどの休憩を提案・相談する文を選択してください。",
          "options": [
            "少し疲れましたね。十分間ほど休憩しましょうか。",
            "少し疲れましたね。十分間ほど休憩してくださいか。",
            "少し疲れましたね。十分間ほど休憩するべきです。",
            "少し疲れましたね。十分間ほど休憩した。"
          ],
          "answerIndex": 0,
          "explanation": "「〜しましょうか」で相手と相談しながら提案を行うことができます。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「〜ませんか」で誘われた際、快諾する自然な日本語の返答はどれですか。",
          "options": [
            "「ええ、喜んで！」 / 「いいですね、ぜひ行きましょう！」",
            "「いいえ、行きます。」",
            "「そうです、飲みます。」",
            "「ごちそうさまでした。」"
          ],
          "answerIndex": 0,
          "explanation": "勧誘を快諾する際は「ええ、喜んで」「いいですね、ぜひ行きましょう」と答えます。"
        },
        {
          "type": "typed-recall",
          "prompt": "相手を丁寧に誘う勧誘の助動詞表現を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "ませんか",
            "マセンカ"
          ],
          "explanation": "丁寧な勧誘は「〜ませんか」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【て形音便の規則】「買う（かう）」「待つ（まつ）」「飲む（のむ）」「書く（かく）」の正しい「て形」の組み合わせを選択してください。",
          "options": [
            "買って（促音便） / 待って（促音便） / 飲んで（撥音便） / 書いて（イ音便）",
            "買いて / 待ちて / 飲みて / 書きて",
            "買いて / 待って / 飲みて / 書いて",
            "買って / 待んで / 飲んで / 書いて"
          ],
          "answerIndex": 0,
          "explanation": "う・つ・るは「〜って」、む・ぶ・ぬは「〜んで」、くは「〜いて」と音便変化します。"
        },
        {
          "prompt": "【「行く」の例外活用】動詞「行く（いく）」の正しい「て形」はどれですか。",
          "options": [
            "行って（いって / 例外的に促音便をとる）",
            "行いて（いいて）",
            "行んで（いんで）",
            "行きて（いきて）"
          ],
          "answerIndex": 0,
          "explanation": "「行く」は「く」で終わりますがイ音便にはならず、例外的に「行って（促音便）」となります。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【朝の日課の連続動作】朝の動作を時間順に繋げて述べる自然な文を選択してください。",
          "options": [
            "毎朝七時に起きて、顔を洗って、朝ご飯を食べます。",
            "毎朝七時に起きますて、顔を洗いて、朝ご飯を食べます。",
            "毎朝七時に起きるて、顔を洗うて、朝ご飯を食べます。",
            "毎朝七時に起きて、顔を洗って、朝ご飯を飲みます。"
          ],
          "answerIndex": 0,
          "explanation": "「起きて（二類）」「洗って（一類）」とて形で動作をスムーズに接続します。"
        },
        {
          "prompt": "【図書館での動作連結】図書館に行って本を借りて帰ったことを述べる過去形の文を選択してください。",
          "options": [
            "図書館へ行って、日本語の専門書を借りて帰りました。",
            "図書館へ行きて、日本語の専門書を借って帰りました。",
            "図書館へ行いて、日本語の専門書を借りて帰りますでした。",
            "図書館へ行って、日本語の専門書を借りる帰りました。"
          ],
          "answerIndex": 0,
          "explanation": "文末の「帰りました」によって全体の過去時制が決定されます。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "動詞「話す（はなす）」と「泳ぐ（およぐ）」の正しい「て形」はどれですか。",
          "options": [
            "話して / 泳いで（濁音のイ音便）",
            "話して / 泳いて",
            "話しって / 泳いで",
            "話して / 泳んで"
          ],
          "answerIndex": 0,
          "explanation": "すは「〜して」、ぐは濁音のイ音便「〜いで」となります。"
        },
        {
          "type": "typed-recall",
          "prompt": "動詞「待つ（まつ）」のて形を入力してください（ひらがな三文字）:",
          "acceptedAnswers": [
            "まって",
            "マッテ"
          ],
          "explanation": "「待つ」のて形は促音便で「まって」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【「〜てから」の文法機能】「宿題を終わらせてから、お風呂に入ります」における「〜てから」の意味機能は何ですか。",
          "options": [
            "前件の動作が完了した後に、後件の動作を行う時間的順序を強調している。",
            "宿題とお風呂を同時に並行して行うことを示している。",
            "宿題をする理由を説明している。",
            "お風呂に入らないことを示している。"
          ],
          "answerIndex": 0,
          "explanation": "「動詞て形＋から」は「〜した後に（after doing）」という先行動作の完了を表します。"
        },
        {
          "prompt": "【安全指示の構文】機械操作の前に説明書を読むことを指示する文として適切なものはどれですか。",
          "options": [
            "十分によく説明書を【読んでから】、操作を始めてください。",
            "十分によく説明書を【読むから】、操作を始めてください。",
            "十分によく説明書を【読んだから】、操作を始めてください。",
            "十分によく説明書を【読みに】、操作を始めてください。"
          ],
          "answerIndex": 0,
          "explanation": "動作の完了後の移行を示すため「読んでから」を用います。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【到着後の連絡】駅に到着した後に電話で連絡することを丁寧に伝える文を選択してください。",
          "options": [
            "駅に着いてから、電話で田中さんに連絡いたします。",
            "駅に着くから、電話で田中さんに連絡いたします。",
            "駅に着いたから、電話で田中さんに連絡いたします。",
            "駅に着きながら、電話で田中さんに連絡いたします。"
          ],
          "answerIndex": 0,
          "explanation": "到着が完了した後の連絡であることを「着いてから」で明示します。"
        },
        {
          "prompt": "【休日ルーティンの描写】朝の一連の活動を順序立てて説明する文を選択してください。",
          "options": [
            "休日は朝早く起きて、近くの公園をジョギングして、それから朝食を作ります。",
            "休日は朝早く起きると、近くの公園をジョギングするから、朝食を作ります。",
            "休日は朝早く起きる前、近くの公園をジョギングして、朝食を作りました。",
            "休日は朝早く起きながら、ジョギングして、朝食を作ります。"
          ],
          "answerIndex": 0,
          "explanation": "「起きて」「ジョギングして」「それから作ります」と時間順の推移が的確に表現されています。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「て形」で複数の動作を繋ぐ文において、文全体の「過去・現在」などの時制はどこで決定されますか。",
          "options": [
            "文末の最後の動詞述語の形によって決定される。",
            "文頭の最初の動詞の形によって決定される。",
            "すべての動詞を過去形にする必要がある。",
            "文中の副詞だけで決まり動詞は関係ない。"
          ],
          "answerIndex": 0,
          "explanation": "「〜て、〜て、〜ました」のように、文全体の時制は文末の述語動詞で示されます。"
        },
        {
          "type": "typed-recall",
          "prompt": "「〜した後に」を表す接続表現「て」に続く助詞を入力してください（ひらがな二文字）:",
          "acceptedAnswers": [
            "から",
            "カラ"
          ],
          "explanation": "「〜てから」の助詞は「から」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【進行相 vs 結果相】「勉強しています（進行）」と「結婚しています（結果状態）」における「〜ています」の性質の違いとして正しいものはどれですか。",
          "options": [
            "前者は今まさに動作が行われている進行中、後者は変化完了後の状態が継続していることを表す。",
            "前者が状態の継続で後者が動作の進行中である。",
            "両方とも未来の予定を表している。",
            "文法的な違いは存在しない。"
          ],
          "answerIndex": 0,
          "explanation": "継続動詞（勉強する）では動作の進行中、瞬間動詞（結婚する・住む）では結果状態の継続を表します。"
        },
        {
          "prompt": "【「知っています」の否定形】「佐藤さんの電話番号を知っていますか。」に対する正しい否定の返答はどれですか。",
          "options": [
            "いいえ、知りません。（「知っていません」とは言わない）",
            "いいえ、知っていません。",
            "いいえ、知るではありません。",
            "いいえ、知りませんでしたです。"
          ],
          "answerIndex": 0,
          "explanation": "「知っています」の否定は慣用的に「知りません」となります。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【現在進行中の動作】山田さんが今プレゼンテーションを行っている最中であることを述べる文を選択してください。",
          "options": [
            "山田さんは今、会議室で重要なプレゼンテーションを行っています。",
            "山田さんは今、会議室で重要なプレゼンテーションを行いました。",
            "山田さんは今、会議室で重要なプレゼンテーションを行いますでした。",
            "山田さんは今、会議室で重要なプレゼンテーションを行いそうです。"
          ],
          "answerIndex": 0,
          "explanation": "現時点で進行中の動作には「〜を行っています」を用います。"
        },
        {
          "prompt": "【外見・身なりの描写】田中先生がスーツを着て眼鏡をかけている状態を説明する文を選択してください。",
          "options": [
            "田中先生は黒いスーツを着て、眼鏡をかけています。",
            "田中先生は黒いスーツを着るで、眼鏡をかけます。",
            "田中先生は黒いスーツを着てから、眼鏡をかけました。",
            "田中先生は黒いスーツを着ながら、眼鏡をかけます。"
          ],
          "answerIndex": 0,
          "explanation": "着衣や装飾品の着用状態の継続には「着ています」「かけています」を用います。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「京都に住んでいます」における「住んでいます」の文法機能は何ですか。",
          "options": [
            "京都に住むという状態が現在も継続していること（結果状態の継続）。",
            "今まさに家を建てて引っ越している最中であること。",
            "過去に住んでいたこと。",
            "将来住む予定であること。"
          ],
          "answerIndex": 0,
          "explanation": "「住む」は結果状態を表し、「住んでいます」で居住状態の継続を示します。"
        },
        {
          "type": "typed-recall",
          "prompt": "進行中や状態継続を表す構文「〜て＿＿＿」の動詞丁寧形を入力してください（ひらがな三文字）:",
          "acceptedAnswers": [
            "います",
            "イマス",
            "居ます"
          ],
          "explanation": "「〜ています」の動詞は「います」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【丁寧な依頼構文】書類への記入を丁寧に促す表現として最も適切なものはどれですか。",
          "options": [
            "この用紙に黒いペンで記入してください。（Please fill in）",
            "この用紙に黒いペンで記入しなさい。",
            "この用紙に黒いペンで記入するべきだ。",
            "この用紙に黒いペンで記入してはいけない。"
          ],
          "answerIndex": 0,
          "explanation": "「動詞て形＋ください」は標準的な丁寧な指示・依頼の構文です。"
        },
        {
          "prompt": "【否定の依頼（禁止の配慮表現）】美術館で写真撮影を控えるよう頼む表現はどれですか。",
          "options": [
            "フラッシュを使って写真を【撮らないでください】。（ない形＋でください）",
            "フラッシュを使って写真を【撮らなくてください】。",
            "フラッシュを使って写真を【撮るなください】。",
            "フラッシュを使って写真を【撮りませんでください】。"
          ],
          "answerIndex": 0,
          "explanation": "「〜しないでほしい」という否定の依頼は「動詞ない形 ＋ でください」となります。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【来客対応の接客対話】来客に対して少々待つよう丁寧に案内する定番の表現を選択してください。",
          "options": [
            "少々お待ちください。ただいま担当者をお呼びいたします。",
            "少々待ってください。担当者を呼びますよ。",
            "少々待ちなさい。担当者が来ます。",
            "少々待つことです。担当者を見ます。"
          ],
          "answerIndex": 0,
          "explanation": "接客やビジネスでの定番依頼表現は「少々お待ちください」です。"
        },
        {
          "prompt": "【改まったメールでの資料請求】ビジネスメール等で資料の送付を極めて丁寧に依頼する文を選択してください。",
          "options": [
            "本日の資料をメールで送付していただけますでしょうか。",
            "本日の資料をメールで送付してくださいよ。",
            "本日の資料をメールで送付しなさい。",
            "本日の資料をメールで送付してくれ。"
          ],
          "answerIndex": 0,
          "explanation": "「〜していただけますでしょうか」は非常に丁寧で洗練された依頼表現です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「〜てください」を目上の人や上司に対して使う際の注意点として正しいものはどれですか。",
          "options": [
            "「〜てください」は指示・命令のニュアンスを含むため、目上の人には「〜ていただけますでしょうか」等を使うのが望ましい。",
            "「〜てください」は最高位の敬語なので誰に対しても最も適切である。",
            "目上の人には「〜なさい」を使う。",
            "何を使っても違いはない。"
          ],
          "answerIndex": 0,
          "explanation": "「〜てください」は指示的響きを持つため、目上には「〜ていただけますでしょうか」等の敬語を用います。"
        },
        {
          "type": "typed-recall",
          "prompt": "丁寧な依頼を表す「て」に続く語を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "ください",
            "クダサイ",
            "下さい"
          ],
          "explanation": "「〜てください」の語は「ください」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【許可を求める構文】他者の席に座ってよいか丁寧に尋ねる表現はどれですか。",
          "options": [
            "この席に座ってもよろしいでしょうか。（または 座ってもいいですか）",
            "この席に座ってはいけません。",
            "この席に座りましょう。",
            "この席に座ってください。"
          ],
          "answerIndex": 0,
          "explanation": "許可を求める表現は「動詞て形 ＋ もいいですか / もよろしいでしょうか」です。"
        },
        {
          "prompt": "【規則・禁止の構文】公共の場での禁止事項を伝える「〜てはいけません」の正しい使用例はどれですか。",
          "options": [
            "図書館の中では大きな声で電話を【してはいけません】。",
            "図書館の中では大きな声で電話を【してもいいです】。",
            "図書館の中では大きな声で電話を【してください】。",
            "図書館の中では大きな声で電話を【したいです】。"
          ],
          "answerIndex": 0,
          "explanation": "「動詞て形 ＋ はいけません」は規則やマナーに基づく強い禁止を表します。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【撮影許可と丁寧な断り】写真撮影の可否を尋ねられて、丁寧に断る対話を選択してください。",
          "options": [
            "「ここで写真を撮ってもいいですか。」「申し訳ございませんが、撮影はご遠慮ください。」",
            "「ここで写真を撮ってもいいですか。」「はい、撮ってはいけません。」",
            "「ここで写真を撮ってもいいですか。」「ええ、禁止です。」",
            "「ここで写真を撮ってもいいですか。」「写真がありません。」"
          ],
          "answerIndex": 0,
          "explanation": "不許可を丁寧に伝える際は「申し訳ございませんが、〜はご遠慮ください」を用います。"
        },
        {
          "prompt": "【展示作品への接触禁止】美術館の規則として作品に触れてはならないことを明示する文を選択してください。",
          "options": [
            "美術館の展示作品に手を触れてはいけません。",
            "美術館の展示作品に手を触れてもいいです。",
            "美術館の展示作品に手を触れてください。",
            "美術館の展示作品に手を触れましょう。"
          ],
          "answerIndex": 0,
          "explanation": "接触禁止を明確に示すため「触れてはいけません」を用います。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「〜てはいけません」の「は」の文字表記と発音についての正しい記述はどれですか。",
          "options": [
            "表記は「は」と書き、発音は「わ」となる（主題・取り立て助詞の「は」）。",
            "表記も発音も常に「は」である。",
            "表記は「わ」と書く。",
            "表記は「ば」と書く。"
          ],
          "answerIndex": 0,
          "explanation": "「〜てはいけません」の「は」は係助詞なので「は」と書き、「わ」と発音します。"
        },
        {
          "type": "typed-recall",
          "prompt": "禁止を表す構文「〜ては＿＿＿」の動詞丁寧形を入力してください（ひらがな五文字）:",
          "acceptedAnswers": [
            "いけません",
            "イケマセン"
          ],
          "explanation": "「〜てはいけません」の語は「いけません」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【飲食店での注文表現】飲食店で料理を注文する際の最も丁寧で標準的な表現はどれですか。",
          "options": [
            "すみません、この特選海鮮丼を一つと温かいお茶をお願いします。",
            "海鮮丼とお茶を寄こせ。",
            "海鮮丼とお茶を食べたいです。",
            "海鮮丼とお茶をあげます。"
          ],
          "answerIndex": 0,
          "explanation": "注文する際は「［品名］を［数量］と、［品名］をお願いします」が最も丁寧で標準的です。"
        },
        {
          "prompt": "【数詞（和語数詞）の活用】「1つ」「2つ」「3つ」の正しい和語の数え方を選択してください。",
          "options": [
            "ひとつ / ふたつ / みっつ",
            "いちつ / につ / さんつ",
            "いっこ / にこ / さんこ",
            "ひとり / ふたり / さんにん"
          ],
          "answerIndex": 0,
          "explanation": "料理や品物を数える基本の和語数詞は「ひとつ、ふたつ、みっつ」です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【味覚の感想】京都の抹茶パフェの甘さ控えめで美味しい味を表現する文を選択してください。",
          "options": [
            "この京都の伝統的な抹茶パフェは、甘さ控えめでとても美味しいです。",
            "この抹茶パフェはとても辛くて塩辛いです。",
            "この抹茶パフェは酸っぱくて苦いですが熱いです。",
            "この抹茶パフェを食べに行きませんでした。"
          ],
          "answerIndex": 0,
          "explanation": "デザートの上品な甘さを「甘さ控えめでとても美味しい」と表現します。"
        },
        {
          "prompt": "【食事終わりの感謝】食事を終えて店員や同席者に感謝を述べる日本の伝統的な挨拶を選択してください。",
          "options": [
            "大変美味しくいただきました。ごちそうさまでした。",
            "いただきます。これから食べます。",
            "いってきます。また明日。",
            "お邪魔しました。さようなら。"
          ],
          "answerIndex": 0,
          "explanation": "食後の感謝の挨拶は「ごちそうさまでした」です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "日本の和食文化における「旨味（うまみ）」の基本となる出汁の原料の組み合わせはどれですか。",
          "options": [
            "昆布（こんぶ）と鰹節（かつおぶし）",
            "砂糖と醤油",
            "胡椒と唐辛子",
            "バターとオリーブオイル"
          ],
          "answerIndex": 0,
          "explanation": "伝統的な和食の出汁は主に昆布と鰹節から抽出されます。"
        },
        {
          "type": "typed-recall",
          "prompt": "食事を始める際の日本の挨拶を入力してください（ひらがな六文字）:",
          "acceptedAnswers": [
            "いただきます",
            "イタダキマス"
          ],
          "explanation": "食事開始の挨拶は「いただきます」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【嗜好の表現「好き・嫌い」】好きな食べ物を表す助詞構文として文法的に正しいものはどれですか。",
          "options": [
            "私は日本の寿司や天ぷらが大好きです。（［対象］が 好きです）",
            "私は日本の寿司や天ぷらを大好きです。",
            "私は日本の寿司や天ぷらに大好きです。",
            "私は日本の寿司や天ぷらで大好きです。"
          ],
          "answerIndex": 0,
          "explanation": "感情・嗜好の対象（好き・嫌い・上手・下手）には助詞「が」を用います。"
        },
        {
          "prompt": "【味覚形容詞の対立】「甘い（あまい）」と「辛い（からい）」、「酸っぱい（すっぱい）」と「苦い（にがい）」の意味の組み合わせとして正しいものはどれですか。",
          "options": [
            "甘い：sweet / 辛い：spicy・hot / 酸っぱい：sour / 苦い：bitter",
            "甘い：bitter / 辛い：sweet / 酸っぱい：salty / 苦い：sour",
            "甘い：sour / 辛い：bitter / 酸っぱい：sweet / 苦い：spicy",
            "すべて同じ意味"
          ],
          "answerIndex": 0,
          "explanation": "五味の形容詞：甘い（sweet）、辛い（spicy/hot）、酸っぱい（sour）、苦い（bitter）、塩辛い（salty）です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【辛い料理の可否】辛いものが苦手であることを丁寧に伝える表現を選択してください。",
          "options": [
            "すみません、辛い料理は少し苦手（にがて）です。",
            "辛い料理はとても上手です。",
            "辛い料理を飲みたいです。",
            "辛い料理に行きましょう。"
          ],
          "answerIndex": 0,
          "explanation": "食べられない・好まないことを柔らかく伝える際は「〜は苦手です」を用います。"
        },
        {
          "prompt": "【出汁の風味の描写】和食の出汁（だし）の美味しさを説明する文を選択してください。",
          "options": [
            "日本の出汁は昆布と鰹節の豊かな旨味が凝縮されています。",
            "日本の出汁は砂糖と塩の激しい辛さがあります。",
            "日本の出汁は油で揚げて作ります。",
            "日本の出汁は冷たく凍っています。"
          ],
          "answerIndex": 0,
          "explanation": "昆布と鰹節による旨味（うまみ）の凝縮が出汁の本質です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「甘い」の否定形（丁寧形）として正しいものはどれですか。",
          "options": [
            "甘くないです（または 甘くありません）",
            "甘いじゃないです",
            "甘くないでした",
            "甘いではありません"
          ],
          "answerIndex": 0,
          "explanation": "い形容詞「甘い」の否定形は語尾の「い」を「くない」に変えて「甘くないです / 甘くありません」となります。"
        },
        {
          "type": "typed-recall",
          "prompt": "「spicy / hot」を意味するい形容詞を入力してください（ひらがな三文字）:",
          "acceptedAnswers": [
            "からい",
            "カライ",
            "辛い"
          ],
          "explanation": "「辛い（からい）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【居酒屋での注文対話】店員を呼んで飲み物とおつまみを頼む自然な対話はどれですか。",
          "options": [
            "「すみません、生ビールを二つと枝豆を一つお願いします。」",
            "「おい、ビール二つ持ってこい。」",
            "「ビールを二つ飲むつもりでした。」",
            "「ビールと枝豆がいますか。」"
          ],
          "answerIndex": 0,
          "explanation": "「すみません、［品名］を［数量］お願いします」が日本の居酒屋で最も一般的な注文表現です。"
        },
        {
          "prompt": "【会計を頼む表現】食事が終わり、店員に会計を求める際の表現を選択してください。",
          "options": [
            "すみません、お会計（お勘定）をお願いします。",
            "すみません、お金を返してください。",
            "すみません、注文をキャンセルします。",
            "すみません、料理を食べてください。"
          ],
          "answerIndex": 0,
          "explanation": "会計を頼むときは「お会計をお願いします（または お勘定をお願いします）」と言います。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【セットメニューの選択】ランチセットに飲み物が付くか尋ねる文を選択してください。",
          "options": [
            "このランチセットにはお飲み物が付きますか。",
            "このランチセットにお飲み物を食べますか。",
            "このランチセットはお飲み物に行きますか。",
            "このランチセットがお飲み物をしますか。"
          ],
          "answerIndex": 0,
          "explanation": "セットに付属しているか確認する動詞は「付く（付きますか）」です。"
        },
        {
          "prompt": "【おすすめ料理の質問】店の店員におすすめの料理を尋ねる丁寧な表現を選択してください。",
          "options": [
            "本日のおすすめ料理は何ですか。",
            "今日の料理を食べなさい。",
            "今日のおすすめはいくらですか。",
            "今日の料理はありますか。"
          ],
          "answerIndex": 0,
          "explanation": "「本日のおすすめは何ですか」で本日の一押しメニューを尋ねることができます。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「別々でお会計をお願いします」という発話の意味は何ですか。",
          "options": [
            "同席者各自が個別に自分の分を支払うこと（割り勘・個別会計）。",
            "一人で全員分をまとめて支払うこと。",
            "ツケ払いにすること。",
            "無料にしてもらうこと。"
          ],
          "answerIndex": 0,
          "explanation": "「別々で」は個別会計（各自払い）を意味します。"
        },
        {
          "type": "typed-recall",
          "prompt": "飲食店の支払いを意味する語「お＿＿＿をお願いします」の空欄を入力してください（漢字二文字またはひらがな四文字）:",
          "acceptedAnswers": [
            "会計",
            "かいけい",
            "カイケイ",
            "勘定",
            "かんじょう"
          ],
          "explanation": "「お会計（おかいけい）」または「お勘定（おかんじょう）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【箸のマナーと文化】日本の食事作法において避けるべき「嫌い箸（タブー）」として正しいものはどれですか。",
          "options": [
            "箸から箸へ直接料理を渡すこと（箸渡し）や、ご飯に箸を垂直に突き刺すこと（立て箸）。",
            "箸置きを使うこと。",
            "右手で箸を持つこと。",
            "料理を一口サイズにして食べること。"
          ],
          "answerIndex": 0,
          "explanation": "「箸渡し」や「立て箸」は仏事・葬儀の作法に連なるため、日本の食事文化において厳格なタブーとされています。"
        },
        {
          "prompt": "【「いただきます」の文化的意義】食事前の挨拶「いただきます」に込められた本来の感謝の対象は何ですか。",
          "options": [
            "食材となった動植物の命と、食事の準備・調理に関わったすべての人々。",
            "料理を作ったシェフだけに限定される。",
            "自分自身の労働。",
            "特に意味はなく単なる掛け声。"
          ],
          "answerIndex": 0,
          "explanation": "「いただきます（命をいただく）」は食材の生命への畏敬と、調理・生産に関わった人々への感謝を含みます。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【定食の配膳マナー】日本の伝統的な一汁三菜の配膳におけるご飯と味噌汁の正しい位置を選択してください。",
          "options": [
            "左手前にご飯、右手前に味噌汁（汁物）。",
            "右手前にご飯、左手前に味噌汁。",
            "奥にご飯と味噌汁、手前におかず。",
            "左右どちらでも全く自由。"
          ],
          "answerIndex": 0,
          "explanation": "和食の伝統的配膳では、主食であるご飯を左手前、汁物を右手前に配置します。"
        },
        {
          "prompt": "【お茶のおかわり】飲食店でお茶のおかわりを丁寧に頼む文を選択してください。",
          "options": [
            "すみません、お茶のおかわりをいただけますでしょうか。",
            "お茶をもっと飲みなさい。",
            "お茶を買いに行きます。",
            "お茶は要りません。"
          ],
          "answerIndex": 0,
          "explanation": "「お茶のおかわりをいただけますでしょうか」が極めて礼儀正しく自然です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「ごちそうさまでした」の漢字表記「御馳走様でした」における「馳走」の本来の語源は何ですか。",
          "options": [
            "客をもてなすために方々を馬で走り回って食材を集めたこと。",
            "高価なワインを飲むこと。",
            "ゆっくり座って休むこと。",
            "早く食事を終えること。"
          ],
          "answerIndex": 0,
          "explanation": "「馳走」は走り回ることを意味し、食事を用意するために駆け回ってくれた労苦への感謝を表現しています。"
        },
        {
          "type": "typed-recall",
          "prompt": "食事を終えた時の感謝の挨拶を入力してください（ひらがな九文字）:",
          "acceptedAnswers": [
            "ごちそうさまでした",
            "ゴチソウサマデシタ"
          ],
          "explanation": "食後の挨拶は「ごちそうさまでした」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【席の予約対話】電話で飲食店に今夜の予約を入れる対話として最も自然なものはどれですか。",
          "options": [
            "「今夜七時に四名で予約をお願いしたいのですが、お席は空いていますでしょうか。」",
            "「今夜四人で行くから席を取れ。」",
            "「今夜七時に四名がいます。」",
            "「予約は好きですか。」"
          ],
          "answerIndex": 0,
          "explanation": "「［日時］に［人数］で予約をお願いしたいのですが」が予約時の丁寧な定型表現です。"
        },
        {
          "prompt": "【アレルギーの確認】アレルギー食材が含まれているか確認する質問はどれですか。",
          "options": [
            "この料理に甲殻類（エビやカニ）は入っていますか。アレルギーがあります。",
            "この料理は甘いですか。辛いですか。",
            "この料理はいくらですか。",
            "この料理はどこへ行きますか。"
          ],
          "answerIndex": 0,
          "explanation": "「〜は入っていますか。アレルギーがあります」で食材を確認します。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【フルコースの感想】招待された会席料理の味と演出を褒める洗練された文を選択してください。",
          "options": [
            "季節の食材が美しく盛り付けられていて、どのお料理も大変美味でした。",
            "料理が多すぎて全部残しました。",
            "味が辛すぎて食べられませんでした。",
            "早く帰りたかったです。"
          ],
          "answerIndex": 0,
          "explanation": "和食の美と味を称賛する「季節の食材が美しく盛り付けられていて、大変美味でした」が適切です。"
        },
        {
          "prompt": "【退店時の挨拶】会計を済ませて店を出る際の挨拶を選択してください。",
          "options": [
            "ごちそうさまでした。とても美味しかったです。また来ます。",
            "いただきます。これから食べます。",
            "お邪魔します。入ります。",
            "さようなら。二度と来ません。"
          ],
          "answerIndex": 0,
          "explanation": "「ごちそうさまでした。とても美味しかったです。また来ます」が最高のお客側の礼儀です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "飲食店での「予約・入店・注文・食事・会計・退店」の一連の流れで使われる表現として、順番が正しいものはどれですか。",
          "options": [
            "予約をお願いします → いただきます → 注文をお願いします → お会計をお願いします → ごちそうさまでした",
            "ごちそうさまでした → お会計をお願いします → いただきます → 予約をお願いします",
            "いただきます → ごちそうさまでした → 注文をお願いします → お会計をお願いします",
            "お会計をお願いします → いただきます → 予約をお願いします"
          ],
          "answerIndex": 0,
          "explanation": "予約・注文・食事前（いただきます）・会計・退店（ごちそうさまでした）の順序です。"
        },
        {
          "type": "typed-recall",
          "prompt": "注文を頼む際のフレーズ「注文を＿＿＿」の空欄を入力してください（ひらがな六文字）:",
          "acceptedAnswers": [
            "おねがいします",
            "オネガイシマス",
            "お願いします"
          ],
          "explanation": "「お願いします（おねがいします）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【動詞の過去形活用】動詞「食べる」「行く」「飲む」の丁寧な過去肯定形（〜ました）として正しい組み合わせはどれですか。",
          "options": [
            "食べました / 行きました / 飲みました",
            "食べたでした / 行ったでした / 飲んだでした",
            "食べました / 行きませんでした / 飲みます",
            "食べました / 行くでした / 飲むでした"
          ],
          "answerIndex": 0,
          "explanation": "動詞の丁寧な過去形は「ます語幹 ＋ ました」です。"
        },
        {
          "prompt": "【動詞の過去否定形】「先週の土曜日は雨だったので、どこへも＿＿＿。」の空欄に入る動詞過去否定形を選択してください。",
          "options": [
            "出かけませんでした（過去の否定）",
            "出かけました",
            "出かけません",
            "出かけるでした"
          ],
          "answerIndex": 0,
          "explanation": "過去の行為の否定は「〜ませんでした（出かけませんでした）」を用います。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【週末の行動報告】週末に友達と映画を見てお茶を飲んだことを報告する文を選択してください。",
          "options": [
            "週末に友達と一緒に日本のアニメ映画を見て、カフェでお茶を飲みました。",
            "週末に友達と一緒に映画を見るて、お茶を飲むでした。",
            "週末に友達と一緒に映画を見たから、お茶を飲みません。",
            "週末に友達と一緒に映画を見るでしょう。"
          ],
          "answerIndex": 0,
          "explanation": "「見て（て形接続）」「飲みました（過去形結び）」の時制一致が正確です。"
        },
        {
          "prompt": "【昨日の勉強時間の伝達】昨日図書館で3時間日本語を勉強したことを述べる文を選択してください。",
          "options": [
            "昨日は図書館で三時間日本語を勉強しました。",
            "昨日は図書館で三時間日本語を勉強しますでした。",
            "昨日は図書館で三時間日本語を勉強するでした。",
            "昨日は図書館で三時間日本語を勉強したいです。"
          ],
          "answerIndex": 0,
          "explanation": "「勉強しました」が正しい過去形です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "動詞「する」と「来る（くる）」の丁寧な過去肯定形はどれですか。",
          "options": [
            "しました / 来ました（きました）",
            "するでした / 来るでした",
            "したでした / 来たでした",
            "しりました / きりました"
          ],
          "answerIndex": 0,
          "explanation": "三類動詞の過去形は「しました」「来ました（きました）」です。"
        },
        {
          "type": "typed-recall",
          "prompt": "動詞「書く（かく）」の丁寧な過去肯定形を入力してください（ひらがな五文字）:",
          "acceptedAnswers": [
            "かきました",
            "カキマシタ",
            "書きました"
          ],
          "explanation": "「書く」の過去形は「書きました（かきました）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【い形容詞の過去形】「美味しい（おいしい）」「楽しい（たのしい）」の過去形として正しいものはどれですか。",
          "options": [
            "美味しかったです / 楽しかったです（い→かったです）",
            "美味しいでした / 楽しいでした",
            "美味しいかったです / 楽しいかったです",
            "美味しでした / 楽しでした"
          ],
          "answerIndex": 0,
          "explanation": "い形容詞の過去形は語尾の「い」を「かった」に変えて「〜かったです」となります。「〜いでした」は文法誤用です。"
        },
        {
          "prompt": "【「いい（良い）」の不規則過去形】形容詞「いい」の正しい過去形を選択してください。",
          "options": [
            "よかったです（語幹「よ-」が活用）",
            "いかったです",
            "いいでした",
            "いくなかったです"
          ],
          "answerIndex": 0,
          "explanation": "「いい」は語幹「よい」に基づき、過去形は「よかったです」となります。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【紅葉の感想】昨日の京都の紅葉が非常に美しかったことを述べる文を選択してください。",
          "options": [
            "昨日の京都の紅葉は息をのむほど美しかったです。",
            "昨日の京都の紅葉は息をのむほど美しいでした。",
            "昨日の京都の紅葉は息をのむほど美しくでした。",
            "昨日の京都の紅葉は息をのむほど美しいだったです。"
          ],
          "answerIndex": 0,
          "explanation": "「美しい」の過去形は「美しかったです」です。"
        },
        {
          "prompt": "【天候と気温の過去】昨日の天気が寒くなかったことを述べる文を選択してください。",
          "options": [
            "昨日はあまり寒くなかったです（または 寒くありませんでした）。",
            "昨日はあまり寒いではなかったです。",
            "昨日はあまり寒くないでした。",
            "昨日はあまり寒いじゃなかったです。"
          ],
          "answerIndex": 0,
          "explanation": "い形容詞「寒い」の過去否定は「寒くなかったです / 寒くありませんでした」です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「高かった」と「高くなかった」の意味の対立として正しいものはどれですか。",
          "options": [
            "前者は過去肯定（高かった＝It was expensive）、後者は過去否定（高くなかった＝It was not expensive）。",
            "前者が現在形で後者が過去形である。",
            "前者が安いで後者が高いである。",
            "意味の違いはない。"
          ],
          "answerIndex": 0,
          "explanation": "「高かった（過去肯定）」と「高くなかった（過去否定）」の対照です。"
        },
        {
          "type": "typed-recall",
          "prompt": "い形容詞「暑い（あつい）」の過去肯定形を入力してください（ひらがな六文字）:",
          "acceptedAnswers": [
            "あつかったです",
            "アツカッタデス",
            "暑かったです"
          ],
          "explanation": "「暑い」の過去形は「暑かったです（あつかったです）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【な形容詞・名詞の過去形】「静か（しずか）」「雨（あめ）」の丁寧な過去形として正しいものはどれですか。",
          "options": [
            "静かでした / 雨でした（語幹＋でした）",
            "静かかったです / 雨かったです",
            "静かでしたです / 雨でしたです",
            "静かくなりました / 雨くなりました"
          ],
          "answerIndex": 0,
          "explanation": "な形容詞および名詞の丁寧な過去肯定形は「〜でした」を用います。"
        },
        {
          "prompt": "【な形容詞の過去否定】「昨日は暇ではありませんでした」の文法機能として正しいものはどれですか。",
          "options": [
            "な形容詞「暇」の過去の否定状態を表している（It was not free time yesterday）。",
            "未来の予定を表している。",
            "動詞の完了を表している。",
            "疑問を表している。"
          ],
          "answerIndex": 0,
          "explanation": "「〜ではありませんでした（じゃありませんでした）」はな形容詞・名詞の過去否定です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【過去の街の描写】昔その町がとても賑やかだったことを述べる文を選択してください。",
          "options": [
            "昔、この町はとても賑やかでした。",
            "昔、この町はとても賑やかかったです。",
            "昔、この町はとても賑やかでしたでした。",
            "昔、この町はとても賑やかですでした。"
          ],
          "answerIndex": 0,
          "explanation": "な形容詞「賑やか」の過去形は「賑やかでした」です。"
        },
        {
          "prompt": "【過去の天気の伝達】昨日は良い天気だったことを伝える文を選択してください。",
          "options": [
            "昨日はとてもいい天気でした。",
            "昨日はとてもいい天気かったです。",
            "昨日はとてもいい天気でしたです。",
            "昨日はとてもいい天気にしました。"
          ],
          "answerIndex": 0,
          "explanation": "名詞「天気」の過去形は「天気でした」です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「い形容詞」と「な形容詞」の過去肯定形の語尾の区別として正しいものはどれですか。",
          "options": [
            "い形容詞は「〜かったです」、な形容詞は「〜でした」。",
            "い形容詞が「〜でした」、な形容詞が「〜かったです」。",
            "両方とも「〜かったです」になる。",
            "両方とも「〜でした」になる。"
          ],
          "answerIndex": 0,
          "explanation": "い形容詞は「〜かったです（高かった）」、な形容詞は「〜でした（綺麗でした）」と明確に分かれます。"
        },
        {
          "type": "typed-recall",
          "prompt": "な形容詞「親切（しんせつ）」の丁寧な過去肯定形を入力してください（ひらがな七文字）:",
          "acceptedAnswers": [
            "しんせつでした",
            "シンセツでした",
            "親切でした"
          ],
          "explanation": "「親切でした（しんせつでした）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【経験を表す構文】「富士山に登った経験がある」ことを表す正しい文法構文はどれですか。",
          "options": [
            "富士山に【登ったことがあります】。（動詞た形＋ことがあります）",
            "富士山に【登ることがあります】。",
            "富士山に【登りことがあります】。",
            "富士山に【登ってことがあります】。"
          ],
          "answerIndex": 0,
          "explanation": "過去の生涯経験を表す文法形式は「動詞た形 ＋ ことがあります」です。"
        },
        {
          "prompt": "【経験の有無を問う質問と回答】日本へ行ったことがあるか尋ねられ、一度もないと答える対話を選択してください。",
          "options": [
            "「日本へ行ったことがありますか。」「いいえ、一度も行ったことがありません。」",
            "「日本へ行ったことがありますか。」「いいえ、行ったことがありました。」",
            "「日本へ行ったことがありますか。」「はい、行きませんでした。」",
            "「日本へ行ったことがありますか。」「一度も行きました。」"
          ],
          "answerIndex": 0,
          "explanation": "経験がない場合は「いいえ、一度も［動詞た形］ことがありません」と答えます。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【伝統芸能の鑑賞経験】歌舞伎の舞台を鑑賞した経験があることを述べる文を選択してください。",
          "options": [
            "大学時代に歌舞伎や能楽の舞台を鑑賞したことがあります。",
            "大学時代に歌舞伎や能楽の舞台を鑑賞するがあります。",
            "大学時代に歌舞伎や能楽の舞台を鑑賞してがあります。",
            "大学時代に歌舞伎や能楽の舞台を鑑賞したことがありますでした。"
          ],
          "answerIndex": 0,
          "explanation": "「鑑賞した（た形）＋ ことがあります」の構成が正確です。"
        },
        {
          "prompt": "【和食の試食経験】納豆を食べたことがあるか尋ねる文を選択してください。",
          "options": [
            "日本の納豆を食べたことがありますか。",
            "日本の納豆を食べるがありますか。",
            "日本の納豆を食べてがありますか。",
            "日本の納豆を飲んだことがありますか。"
          ],
          "answerIndex": 0,
          "explanation": "「食べたことがありますか」で経験を尋ねます。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「〜たことがあります（経験）」と「〜ました（単なる過去の動作）」の違いは何ですか。",
          "options": [
            "前者は生涯を通じた体験・経験の有無を表し、後者は特定の過去の一時点で行った動作を表す。",
            "前者が現在形で後者が過去形である。",
            "前者が否定で後者が肯定である。",
            "文法的な違いはない。"
          ],
          "answerIndex": 0,
          "explanation": "「〜たことがある」はこれまでの人生における経験、「〜ました」は特定の過去の出来事・行為を指します。"
        },
        {
          "type": "typed-recall",
          "prompt": "経験を表す構文「動詞た形 ＋ ＿＿＿があります」の空欄を入力してください（ひらがな二文字）:",
          "acceptedAnswers": [
            "こと",
            "コト"
          ],
          "explanation": "「〜た【こと】があります」の形式名詞は「こと」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【旅行回想の総合対話】過去の旅行体験を尋ねて答える自然な対話を選択してください。",
          "options": [
            "「京都へ行ったことがありますか。」「はい、去年行きました。金閣寺がとても綺麗でした。」",
            "「京都へ行ったことがありますか。」「はい、去年行きます。綺麗ですでした。」",
            "「京都へ行ったことがありますか。」「いいえ、行きました。」",
            "「京都へ行ったことがありますか。」「去年行ったことがありますでした。」"
          ],
          "answerIndex": 0,
          "explanation": "経験の質問「行ったことがありますか」に対し、「去年行きました（過去の事実）」「綺麗でした（形容詞過去）」と答える流れが自然です。"
        },
        {
          "prompt": "【複数動作の並列「〜たり〜たりする」】休日の活動を例示して過去を語る構文はどれですか。",
          "options": [
            "休日は本を読んだり、音楽を聞いたりしました。（〜たり〜たりした）",
            "休日は本を読みたり、音楽を聞きたりしました。",
            "休日は本を読んで、音楽を聞くでした。",
            "休日は本を読んだりと音楽を聞いたりとでした。"
          ],
          "answerIndex": 0,
          "explanation": "動作の例示並列構文は「動詞た形 ＋ り、動詞た形 ＋ り ＋ する（しました）」です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【留学生活の回想】日本での留学生活が充実して楽しかったことを述べる文を選択してください。",
          "options": [
            "日本での留学生活はとても充実していて楽しかったです。",
            "日本での留学生活はとても充実していて楽しいでした。",
            "日本での留学生活はとても充実して楽しいだったです。",
            "日本での留学生活はとても充実するでした。"
          ],
          "answerIndex": 0,
          "explanation": "「充実していて（て形）」「楽しかったです（い形容詞過去形）」が正確です。"
        },
        {
          "prompt": "【富士登山の体験談】富士山に登った時の思い出を語る文を選択してください。",
          "options": [
            "富士山に登ったことがあります。山頂からの朝日が息をのむほど美しかったです。",
            "富士山に登ることがあります。朝日が美しいでした。",
            "富士山に登りがありました。朝日が美しかったでした。",
            "富士山に登ってありました。朝日が美しくでした。"
          ],
          "answerIndex": 0,
          "explanation": "経験「登ったことがあります」と感想「美しかったです」の組み合わせが完璧です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "次の文の中で、時制・活用に文法的な誤りがない正しい日本語文はどれですか。",
          "options": [
            "昨日は友達と温泉に入ったり、美味しい和食を食べたりして、とても楽しかったです。",
            "昨日は友達と温泉に入るたり、和食を食べるたりして、楽しいでした。",
            "昨日は友達と温泉に入ったし、和食を食べたしで、楽しいかったです。",
            "昨日は友達と温泉に入りて、和食を食べりて、楽しくでした。"
          ],
          "answerIndex": 0,
          "explanation": "「〜たり〜たりして」「楽しかったです」のすべてが規範文法に完全合致しています。"
        },
        {
          "type": "typed-recall",
          "prompt": "過去の出来事・経験を述べる動詞の丁寧な過去肯定語尾を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "ました",
            "マシタ"
          ],
          "explanation": "動詞の過去肯定語尾は「ました」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【こそあど体系の距離感】話し手と聞き手の両方から離れた場所にある対象を指す指示語として正しいものはどれですか。",
          "options": [
            "あれ / あの / あそこ（遠称）",
            "これ / この / ここ（近称）",
            "それ / その / そこ（中称）",
            "どれ / どの / どこ（不定・疑問）"
          ],
          "answerIndex": 0,
          "explanation": "「あ」系列（あれ、あの、あそこ）は話し手・聞き手双方から空間的・心理的に離れた対象を指します。"
        },
        {
          "prompt": "【「これ」と「この」の文法差】名詞の直前に直接修飾語として置くことができる指示語はどれですか。",
          "options": [
            "この（連体詞：この本、この時計）",
            "これ（代名詞）",
            "ここ（場所名詞）",
            "どれ（代名詞）"
          ],
          "answerIndex": 0,
          "explanation": "名詞を直接修飾する連体形は「この／その／あの／どの」です（例：「この辞書」）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【店員への商品提示依頼】ショーケースの中にある相手（店員）側の万年筆を見せてほしいと頼む文を選択してください。",
          "options": [
            "すみません、そのショーケースの中の万年筆を見せていただけますでしょうか。",
            "すみません、あのショーケースの中の万年筆を見せなさい。",
            "すみません、このショーケースの中の万年筆を見ます。",
            "すみません、どのショーケースの中の万年筆を見ましたか。"
          ],
          "answerIndex": 0,
          "explanation": "聞き手の手元・近くにある対象には中称「その」を用います。"
        },
        {
          "prompt": "【遠くの建物の案内】遠くに見える高いタワーを指差して説明する文を選択してください。",
          "options": [
            "あそこに見える高い建物が東京スカイツリーです。",
            "ここに見える高い建物が東京スカイツリーです。",
            "そこに見える高い建物が東京スカイツリーです。",
            "どこに見える高い建物が東京スカイツリーですか。"
          ],
          "answerIndex": 0,
          "explanation": "遠く離れた場所を指す指示詞は「あそこ」です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "指示詞の疑問詞「どれ」「どの」「どこ」「どちら」の使い分けとして正しいものはどれですか。",
          "options": [
            "どれ＝物（代名詞）、どの＝名詞修飾、どこ＝場所、どちら＝方角・二者択一。",
            "すべて完全に同一で違いはない。",
            "どれ＝場所、どこ＝物、どちら＝人。",
            "どれ＝時間、どの＝理由。"
          ],
          "answerIndex": 0,
          "explanation": "物＝どれ、連体詞＝どの、場所＝どこ、方向・二者比較＝どちら（どっち）です。"
        },
        {
          "type": "typed-recall",
          "prompt": "話し手の近くにある物を指す指示代名詞を入力してください（ひらがな二文字）:",
          "acceptedAnswers": [
            "これ",
            "コレ"
          ],
          "explanation": "近称の指示代名詞は「これ」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【二者比較構文「AのほうがBより」】「バスより電車のほうが速い」ことを表す文法的に正しい文はどれですか。",
          "options": [
            "電車のほうが バスより 速いです。（［優位］のほうが ［基準］より）",
            "電車のより バスほうが 速いです。",
            "電車が バスよりの ほう速いです。",
            "電車に バスより 速いです。"
          ],
          "answerIndex": 0,
          "explanation": "二者比較構文は「［優位な方］のほうが ［比較基準］より ［形容詞］です」となります。"
        },
        {
          "prompt": "【比較助詞「より」の機能】「着物はドレスより高価です」における「より」の文法機能は何ですか。",
          "options": [
            "比較の基準（〜と比べて / than）を示す格助詞。",
            "出発点を示す格助詞。",
            "理由を示す接続助詞。",
            "並列を示す助詞。"
          ],
          "answerIndex": 0,
          "explanation": "比較構文における「より」は比較基準（〜に比べて / than）を表します。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【価格の比較】伝統的な着物が現代のドレスより高価であることを述べる文を選択してください。",
          "options": [
            "あの展示されている伝統的な着物は、こちらの現代的なドレスより高価です。",
            "あの展示されている伝統的な着物は、こちらの現代的なドレスのほうが安いです。",
            "あの着物はドレスより高くないです。",
            "あの着物はドレスと高価です。"
          ],
          "answerIndex": 0,
          "explanation": "「着物はドレスより高価です」が正確な比較文です。"
        },
        {
          "prompt": "【利便性の比較】新幹線のほうが飛行機より便利であると述べる文を選択してください。",
          "options": [
            "東京から大阪までは、新幹線のほうが飛行機より便利です。",
            "東京から大阪までは、新幹線より飛行機のほうが便利です。",
            "東京から大阪までは、新幹線が飛行機に便利です。",
            "東京から大阪までは、新幹線の飛行機より便利です。"
          ],
          "answerIndex": 0,
          "explanation": "「新幹線のほうが飛行機より便利です」が的確です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「北海道は沖縄より広いです」と同じ意味を表す文はどれですか。",
          "options": [
            "沖縄より北海道のほうが広いです。",
            "北海道より沖縄のほうが広いです。",
            "北海道と沖縄は同じ広さです。",
            "沖縄は北海道より広いです。"
          ],
          "answerIndex": 0,
          "explanation": "語順が変わっても「北海道のほうが沖縄より広い」という意味関係は同一です。"
        },
        {
          "type": "typed-recall",
          "prompt": "比較基準を表す助詞を入力してください（ひらがな二文字）:",
          "acceptedAnswers": [
            "より",
            "ヨリ"
          ],
          "explanation": "比較基準の助詞は「より」です。"
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
          "reading": "すみません、その ショーケースのなかの まんねんひつ을 みせていただけますでしょうか。",
          "translation": "Excuse me, could you please show me that fountain pen inside the showcase?"
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【二者比較の疑問文】二つの選択肢から好みを尋ねる正しい疑問構文はどれですか。",
          "options": [
            "コーヒーと紅茶と、どちらのほうが好きですか。（Aと Bと どちらが〜）",
            "コーヒーと紅茶と、だれのほうが好きですか。",
            "コーヒーと紅茶と、いつのほうが好きですか。",
            "コーヒーと紅茶と、どこのほうが好きですか。"
          ],
          "answerIndex": 0,
          "explanation": "二つのうちどちらかを尋ねる疑問詞は「どちら（口語では どっち）」です。"
        },
        {
          "prompt": "【二者比較への返答】「肉と魚とどちらが好きですか」に対する自然な回答はどれですか。",
          "options": [
            "魚のほうが好きです。（または どちらも好きです）",
            "肉が好きでした。",
            "魚が好きではありませんでした。",
            "肉と魚に行きます。"
          ],
          "answerIndex": 0,
          "explanation": "「［選んだ方］のほうが好きです」または両方好きな場合は「どちらも好きです」と答えます。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【速度の比較対話】新幹線と飛行機のどちらが速いか尋ねて答える対話を選択してください。",
          "options": [
            "「新幹線と飛行機と、どちらのほうが速いですか。」「飛行機のほうが速いです。」",
            "「新幹線と飛行機と、どちらが速いでしたか。」「飛行機が速いですでした。」",
            "「新幹線と飛行機と、だれが速いですか。」「飛行機です。」",
            "「新幹線と飛行機と、どこが速いですか。」「飛行機です。」"
          ],
          "answerIndex": 0,
          "explanation": "「どちらのほうが速いですか」「飛行機のほうが速いです」が規範的な対話です。"
        },
        {
          "prompt": "【季節の好み比較】夏と冬のどちらが好きか尋ねる文を選択してください。",
          "options": [
            "夏と冬と、どちらのほうが好きですか。",
            "夏と冬と、どれのほうが好きですか。",
            "夏と冬と、なんのほうが好きですか。",
            "夏と冬と、だれのほうが好きですか。"
          ],
          "answerIndex": 0,
          "explanation": "二者の選択には「どちら」を用います。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「どちら」と「どれ」の使い分けに関する正しい規則はどれですか。",
          "options": [
            "二者の中からの選択には「どちら」、三者以上（多数）の中からの選択には「どれ」を用いる。",
            "二者には「どれ」、三者以上には「どちら」を用いる。",
            "人には「どれ」、物には「どちら」を用いる。",
            "全く同じで区別はない。"
          ],
          "answerIndex": 0,
          "explanation": "二者比較には「どちら（which of the two）」、三者以上には「どれ（which of all）」を用います。"
        },
        {
          "type": "typed-recall",
          "prompt": "二者比較の疑問詞「which」を入力してください（ひらがな三文字）:",
          "acceptedAnswers": [
            "どちら",
            "ドチラ",
            "どっち"
          ],
          "explanation": "二者択一の疑問詞は「どちら（どっち）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【最上級構文「〜の中で一番」】四季の中で春が最も好きであることを述べる正しい構文はどれですか。",
          "options": [
            "日本の四季の【中で】、春が【一番】好きです。（範囲の中で＋一番）",
            "日本の四季のより、春が一番好きです。",
            "日本の四季のほうが、春がより好きです。",
            "日本の四季に、春が一倍好きです。"
          ],
          "answerIndex": 0,
          "explanation": "最上級表現は「［範囲・集団］の中で ［対象］が 一番（もっとも） ［形容詞］です」となります。"
        },
        {
          "prompt": "【最上級の質問構文】果物の中で何が一番好きか尋ねる文はどれですか。",
          "options": [
            "果物の中で【何が一番】好きですか。（三者以上の範囲＋疑問詞＋一番）",
            "果物の中でどちらが一番好きですか。",
            "果物の中でだれが一番好きですか。",
            "果物の中でいつが一番好きですか。"
          ],
          "answerIndex": 0,
          "explanation": "三者以上の集団から物を尋ねる疑問詞は「何（なに）」を用います。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【季節の最上級】日本の四季の中で春が一番好きである理由とともに述べる文を選択してください。",
          "options": [
            "日本の四季の中で、私は桜が満開になる春が一番好きです。",
            "日本の四季の中で、私は春のほうが冬より一番好きです。",
            "日本の四季より、春が一番好きでした。",
            "日本の四季の中で、春がどちらも好きです。"
          ],
          "answerIndex": 0,
          "explanation": "「四季の中で、春が一番好きです」が完璧な最上級文です。"
        },
        {
          "prompt": "【日本一高い山】富士山が日本で一番高い山であることを述べる文を選択してください。",
          "options": [
            "富士山は日本で一番高い山です。",
            "富士山は日本より一番高い山です。",
            "富士山のほうが日本で高い山です。",
            "富士山は日本でどちらが高い山です。"
          ],
          "answerIndex": 0,
          "explanation": "「日本で一番高い山です」が最上級の標準表現です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「家族の中で誰が一番背が高いですか」における疑問詞「誰（だれ）」の選択理由は何ですか。",
          "options": [
            "比較対象が集団の中の「人」であるため。",
            "比較対象が「物」であるため。",
            "比較対象が「場所」であるため。",
            "比較対象が「時間」であるため。"
          ],
          "answerIndex": 0,
          "explanation": "人が対象の最上級質問には疑問詞「誰（だれ／どなた）」を用います。"
        },
        {
          "type": "typed-recall",
          "prompt": "最上級を表す副詞「the most / number one」を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "いちばん",
            "イチバン",
            "一番"
          ],
          "explanation": "最上級の副詞は「一番（いちばん）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【買い物対話の指示詞と比較】複数のカメラを見比べて店員に相談する自然な対話を選択してください。",
          "options": [
            "「この黒いカメラとその銀色のカメラと、どちらのほうが軽いですか。」「こちらの黒いカメラのほうが軽いです。」",
            "「このカメラとそれカメラと、どちらが軽いですでした。」「これです。」",
            "「あのカメラとこのカメラと、だれが軽いですか。」「黒いです。」",
            "「このカメラがそのカメラより軽いですですか。」「はい、軽いです。」"
          ],
          "answerIndex": 0,
          "explanation": "近称・中称の指示詞「この」「その」と比較構文「どちらのほうが〜」「こちらのほうが〜」が正確に連動しています。"
        },
        {
          "prompt": "【旅行先での最上級質問】地元の人にこの地域で最も有名な名所を尋ねる表現はどれですか。",
          "options": [
            "この町の中で、どこが一番有名な観光地ですか。",
            "この町の中で、どちらが一番有名ですか。",
            "この町より、だれが有名ですか。",
            "この町は一番有名な観光地でしたか。"
          ],
          "answerIndex": 0,
          "explanation": "場所の範囲からの最上級質問は「［範囲］の中で、どこが一番〜ですか」を用います。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【総合比較の意思決定】複数の商品から性能と価格を比較して最終決定する文を選択してください。",
          "options": [
            "あの製品は少し高価ですが、機能が一番優れているので、これにします。",
            "あの製品は少し高価ですが、機能がどちらが優れているので、それにします。",
            "あの製品は少し高価ですから、機能がより優れているでした。",
            "あの製品は高価でしたので、どれにします。"
          ],
          "answerIndex": 0,
          "explanation": "「機能が一番優れている（最上級）ので、これにします（決定）」の論理展開が自然です。"
        },
        {
          "prompt": "【交通機関の比較選択】目的地への最適な移動手段を述べる文を選択してください。",
          "options": [
            "時間はかかりますが、電車のほうがタクシーよりずっと安いです。",
            "時間はかかりますが、電車のほうがタクシーの中で安いです。",
            "時間はかかりますが、電車よりタクシーのほうが安いです。",
            "時間はかかりますが、電車がタクシーに一番安いです。"
          ],
          "answerIndex": 0,
          "explanation": "「電車のほうがタクシーよりずっと安いです」が二者比較として正確です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「二者比較」と「最上級」を組み合わせた表現として文法的に完全なものはどれですか。",
          "options": [
            "クラスの中で田中さんが一番背が高いですが、山田さんも佐藤さんより高いです。",
            "クラスの中で田中さんがどちらが背が高いですが、山田さんのほうが高いです。",
            "クラスより田中さんが一番高いですが、山田さんの中で高いです。",
            "クラスの中で田中さんがより高いですが、山田さんも佐藤さん一番です。"
          ],
          "answerIndex": 0,
          "explanation": "最上級「クラスの中で一番高い」と比較「山田さんも佐藤さんより高い」が正しく使い分けられています。"
        },
        {
          "type": "typed-recall",
          "prompt": "二者比較で優位な方に付く形式名詞を入力してください（ひらがな二文字）:",
          "acceptedAnswers": [
            "ほう",
            "ホウ",
            "方"
          ],
          "explanation": "「〜の【ほう】が」の語は「ほう（方）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【移動空間を表す助詞「を」】「交差点を右に曲がる」「橋を渡る」における助詞「を」の文法機能は何ですか。",
          "options": [
            "移動動作が通過・離脱する空間や場所を示す格助詞。",
            "動作の目的物を示す格助詞。",
            "動作を行う手段を示す助詞。",
            "移動の目的地を示す助詞。"
          ],
          "answerIndex": 0,
          "explanation": "「曲がる」「渡る」「歩く」「通る」などの移動動詞において、通過する場所には助詞「を」を用います。"
        },
        {
          "prompt": "【道案内の指示表現】「次の信号を左に曲がって、まっすぐ進んでください」の正しい日本語表現を選択してください。",
          "options": [
            "次の信号を左に曲がって、まっすぐ進んでください。",
            "次の信号で左を曲がりて、まっすぐ進むてください。",
            "次の信号に左へ曲がるで、まっすぐ進みます。",
            "次の信号へ左に曲がりながら、まっすぐ進みましょう。"
          ],
          "answerIndex": 0,
          "explanation": "「信号を（通過点）＋ 左に（方向）曲がって、まっすぐ進んでください」が自然な道案内です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【郵便局への道案内】交差点を曲がり直進した先にある郵便局の場所を説明する文を選択してください。",
          "options": [
            "この交差点を右に曲がって、二百メートルほどまっすぐ進むと左手に大きな郵便局があります。",
            "この交差点に右を曲がりて、郵便局を行きます。",
            "この交差点から右で曲がると、郵便局がありますでした。",
            "この交差点へ右に曲がったので、郵便局へ行きました。"
          ],
          "answerIndex": 0,
          "explanation": "「交差点を右に曲がって、まっすぐ進むと左手に〜があります」が正確な経路説明です。"
        },
        {
          "prompt": "【信号と横断歩道の指示】信号で横断歩道を渡って目的地に行くよう案内する文を選択してください。",
          "options": [
            "次の信号で横断歩道を渡って、角のコンビニの隣に目的地があります。",
            "次の信号で横断歩道に渡るて、コンビニの隣に行きます。",
            "次の信号を横断歩道で渡りて、コンビニがあります。",
            "次の信号へ横断歩道が渡って、コンビニを見ました。"
          ],
          "answerIndex": 0,
          "explanation": "「横断歩道を渡って」が通過動作として正確です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「橋を渡る」の「を」と同じ文法機能を持つ助詞「を」を含む文はどれですか。",
          "options": [
            "毎朝公園【を】散歩します。（通過空間の「を」）",
            "毎朝りんご【を】食べます。（目的語の「を」）",
            "本【を】買いました。（目的語の「を」）",
            "手紙【を】書きます。（目的語の「を」）"
          ],
          "answerIndex": 0,
          "explanation": "「公園を散歩する」「道を歩く」「空を飛ぶ」の「を」は移動・通過空間を表します。"
        },
        {
          "type": "typed-recall",
          "prompt": "「straight / directly」を意味する副詞を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "まっすぐ",
            "マッスグ",
            "真っ直ぐ"
          ],
          "explanation": "直進を表す副詞は「まっすぐ」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【交通機関の乗降助詞】「電車に乗る」「バスを降りる」における助詞「に」と「を」の使い分けとして正しいものはどれですか。",
          "options": [
            "乗る対象（接触・着点）には「に」、降りる対象（離脱場所）には「を」を用いる。",
            "乗る対象に「を」、降りる対象に「に」を用いる。",
            "両方とも「で」を用いる。",
            "両方とも「へ」を用いる。"
          ],
          "answerIndex": 0,
          "explanation": "交通機関に乗るときは「［乗物］に 乗る」、降りるときは離脱の助詞を用いて「［乗物］を 降りる」となります。"
        },
        {
          "prompt": "【電車の乗換案内】新宿駅で別の路線に乗り換える指示文として正しいものはどれですか。",
          "options": [
            "新宿駅で山手線から中央線に乗り換えてください。",
            "新宿駅を山手線で中央線を乗り換えてください。",
            "新宿駅に山手線の中央線へ乗り換えます。",
            "新宿駅へ山手線に中央線が乗り換えてください。"
          ],
          "answerIndex": 0,
          "explanation": "「［場所］で ［旧路線］から ［新路線］に 乗り換える」が標準的な乗換構文です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【バスの降車合図】次の停留所でバスを降りることを運転手に伝える文を選択してください。",
          "options": [
            "すみません、次のバス停で降ります。",
            "すみません、次のバス停を乗ります。",
            "すみません、次のバス停に降りますでした。",
            "すみません、次のバス停で乗り換えますでした。"
          ],
          "answerIndex": 0,
          "explanation": "「次のバス停で降ります」が最も自然な降車宣言です。"
        },
        {
          "prompt": "【交通手段の伝達】毎日地下鉄を使って会社へ通勤していることを述べる文を選択してください。",
          "options": [
            "私は毎朝地下鉄で会社へ通っています。",
            "私は毎朝地下鉄を会社に通っています。",
            "私は毎朝地下鉄に会社を通っています。",
            "私は毎朝地下鉄へ会社を通っています。"
          ],
          "answerIndex": 0,
          "explanation": "交通手段には助詞「で（地下鉄で）」を用います。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「乗る」「降りる」「乗り換える」の活用グループ（動詞分類）の組み合わせはどれですか。",
          "options": [
            "乗る（一類） / 降りる（二類・上一段） / 乗り換える（二類・下一段）",
            "乗る（二類） / 降りる（一類） / 乗り換える（三類）",
            "すべて一類動詞",
            "すべて二類動詞"
          ],
          "answerIndex": 0,
          "explanation": "乗る＝乗ります（一類）、降りる＝降ります（二類）、乗り換える＝乗り換えます（二類）です。"
        },
        {
          "type": "typed-recall",
          "prompt": "電車やバスから出ることを意味する動詞「お＿＿＿」の漢字またはひらがなを入力してください:",
          "acceptedAnswers": [
            "降ります",
            "おります",
            "オリマス",
            "降りる",
            "おりる"
          ],
          "explanation": "「降ります（降車する）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【所要時間を尋ねる構文】目的地までの所要時間を尋ねる標準的な表現はどれですか。",
          "options": [
            "ここから東京駅まで電車でどのくらい（どのぐらい）かかりますか。",
            "ここから東京駅まで電車でいくらありますか。",
            "ここから東京駅まで電車で何人がかかりますか。",
            "ここから東京駅まで電車でどこへ行きますか。"
          ],
          "answerIndex": 0,
          "explanation": "所要時間を尋ねる疑問詞は「どのくらい／どのぐらい（How long）」を用い、動詞「かかる（かかりますか）」に繋ぎます。"
        },
        {
          "prompt": "【起点と終点「〜から〜まで」】移動の区間を表す助詞の組み合わせはどれですか。",
          "options": [
            "東京駅【から】京都駅【まで】（起点＝から / 終点＝まで）",
            "東京駅【まで】京都駅【から】",
            "東京駅【に】京都駅【へ】",
            "東京駅【で】京都駅【を】"
          ],
          "answerIndex": 0,
          "explanation": "出発点（起点）は「から」、到着点（終点・限度）は「まで」で表します。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【新幹線の所要時間伝達】東京から京都までの新幹線所要時間を説明する文を選択してください。",
          "options": [
            "東京駅から京都駅まで東海道新幹線のぞみ号で約二時間十五分かかります。",
            "東京駅まで京都駅から新幹線で二時間十五分を行きます。",
            "東京駅に京都駅へ新幹線を二時間十五分があります。",
            "東京駅で京都駅の新幹線で二時間十五分でした。"
          ],
          "answerIndex": 0,
          "explanation": "「〜から〜まで〜で約［時間］かかります」が完璧な所要時間説明です。"
        },
        {
          "prompt": "【徒歩での所要時間】駅からホテルまで歩いて約5分であることを述べる文を選択してください。",
          "options": [
            "駅からホテルまで歩いて五分ほどです（または 歩いて約五分かかります）。",
            "駅からホテルまで歩くで五分があります。",
            "駅からホテルまで歩きますと五分に行きます。",
            "駅からホテルまで歩きながら五分でした。"
          ],
          "answerIndex": 0,
          "explanation": "「歩いて（て形手段）＋［時間］ほどです / かかります」と表現します。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "時間・費用を「要する・費やす」という意味を持つ自動詞はどれですか。",
          "options": [
            "かかる（かかります）",
            "かける（かけます）",
            "とる（とります）",
            "する（します）"
          ],
          "answerIndex": 0,
          "explanation": "時間や費用が必要である・費やされることを表す動詞は「かかる」です。"
        },
        {
          "type": "typed-recall",
          "prompt": "所要時間を表す動詞丁寧形「時間が＿＿＿」を入力してください（ひらがな五文字）:",
          "acceptedAnswers": [
            "かかります",
            "カカリマス",
            "掛かります"
          ],
          "explanation": "「かかります」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【駅出口の問い合わせ】目的の施設に近い出口を駅員に尋ねる丁寧な表現はどれですか。",
          "options": [
            "すみません、国立博物館へ行くにはどの出口を出ればよろしいでしょうか。",
            "おい、博物館の出口を教えろ。",
            "博物館の出口はどこを出ますかでした。",
            "博物館の出口を出てください。"
          ],
          "answerIndex": 0,
          "explanation": "「〜へ行くにはどの出口を出ればよろしいでしょうか」が最も洗練された問い合わせ表現です。"
        },
        {
          "prompt": "【番線とホームの確認】空港行きの電車が何番線から発車するか確認する質問はどれですか。",
          "options": [
            "成田空港行きの特急電車は何番線（なんばんせん）から出ますか。",
            "成田空港行きの特急電車は何番線に出ますか。",
            "成田空港行きの特急電車は何番線を乗りますか。",
            "成田空港行きの特急電車は何番線に行きますか。"
          ],
          "answerIndex": 0,
          "explanation": "発車ホームを尋ねるときは「何番線から出ますか（発車しますか）」と言います。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【改札口の確認】目的地に行くための改札口を尋ねる文を選択してください。",
          "options": [
            "すみません、東口へ行くにはどちらの改札口を出ればいいですか。",
            "すみません、東口へ行くには改札口がどこに入りますか。",
            "すみません、東口へ行くには改札口を出ましたか。",
            "すみません、東口へ行くには改札口を乗り換えますか。"
          ],
          "answerIndex": 0,
          "explanation": "「どちらの改札口を出ればいいですか」で適切な改札を確認します。"
        },
        {
          "prompt": "【切符の購入】指定席券の購入を駅の窓口で申し出る文を選択してください。",
          "options": [
            "新大阪までの新幹線の指定席を大人二枚お願いします。",
            "新大阪までの新幹線の指定席を大人二人で行きます。",
            "新大阪までの新幹線の指定席が大人二枚ありますかでした。",
            "新大阪までの新幹線の指定席を大人二枚に乗りたいでした。"
          ],
          "answerIndex": 0,
          "explanation": "「［区間］の［券種］を［枚数］お願いします」が窓口での定型購入表現です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "日本の鉄道における「各駅停車」「快速」「急行」「特急」の速度・停車駅の序列として正しいものはどれですか。",
          "options": [
            "特急（最速・停車駅最少） ＞ 急行 ＞ 快速 ＞ 各駅停車（普通）",
            "各駅停車 ＞ 快速 ＞ 急行 ＞ 特急",
            "快速 ＞ 特急 ＞ 急行 ＞ 各駅停車",
            "すべて停車駅は同じである"
          ],
          "answerIndex": 0,
          "explanation": "日本の列車種別は通常、特急（Limited Express）＞急行（Express）＞快速（Rapid）＞各駅停車（Local）の順に停車駅が少なくなります。"
        },
        {
          "type": "typed-recall",
          "prompt": "電車の発着ホームの番号を表す助数詞を入力してください（漢字二文字またはひらがな五文字）:",
          "acceptedAnswers": [
            "番線",
            "ばんせん",
            "バンセン"
          ],
          "explanation": "ホームの番号は「番線（ばんせん）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【道に迷った時の声かけ対話】通行人に道を尋ねる際の丁寧な会話の開始として最も適切なものはどれですか。",
          "options": [
            "「すみません、道に迷ってしまったのですが、浅草寺へはどう行けばいいでしょうか。」",
            "「おい、浅草寺へ連れて行け。」",
            "「浅草寺はどこへ行きますか。」",
            "「道がありませんでした。」"
          ],
          "answerIndex": 0,
          "explanation": "「すみません、道に迷ってしまったのですが、〜へはどう行けばいいでしょうか」が最も丁寧で自然です。"
        },
        {
          "prompt": "【複合経路の案内】歩行と電車を組み合わせた経路説明として正しいものはどれですか。",
          "options": [
            "駅まで五分歩いて、地下鉄に乗って、三つ目の駅で降りてください。",
            "駅に五分歩くで、地下鉄を行きて、三つ目の駅を降りるでした。",
            "駅へ五分歩きながら、地下鉄を乗って、三つ目の駅に降りました。",
            "駅から五分歩いたので、地下鉄を乗り換えてくださいでした。"
          ],
          "answerIndex": 0,
          "explanation": "「歩いて（て形）」「乗って（て形）」「降りてください（依頼）」とて形接続で順序良く説明します。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【目的地までのトータル案内対話】外国人観光客にホテルへの行き方を親切に教える対話を選択してください。",
          "options": [
            "「あの角を左に曲がって少し歩くと、右手にホテルが見えますよ。」「ありがとうございます。」",
            "「あの角が左へ曲がると、ホテルを見ました。」「さようなら。」",
            "「あの角を曲がらないでください。」「はい。」",
            "「ホテルはどこにもありません。」「そうですか。」"
          ],
          "answerIndex": 0,
          "explanation": "「角を左に曲がって少し歩くと、右手に〜が見えますよ」が親切で正確な道案内です。"
        },
        {
          "prompt": "【ICカード・切符の使い方案内】改札口でのICカード（Suica/Pasmo等）の利用法を説明する文を選択してください。",
          "options": [
            "改札機のセンサーにICカードをタッチすると扉が開きます。",
            "改札機にICカードを投げて入ります。",
            "改札機をICカードで壊します。",
            "改札機からICカードを食べます。"
          ],
          "answerIndex": 0,
          "explanation": "日本の自動改札機では「センサーにICカードをタッチする」ことで通過します。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "道案内で「右手に郵便局があります」という表現の「右手（みぎて）」の意味は何ですか。",
          "options": [
            "進行方向に向かって右側の位置（on your right hand side）。",
            "自分自身の右の腕そのもの。",
            "右利きの人のこと。",
            "右折すること。"
          ],
          "answerIndex": 0,
          "explanation": "道案内における「右手（みぎて）／左手（ひだりて）」は進行方向に対する左右の側を指します。"
        },
        {
          "type": "typed-recall",
          "prompt": "「turn（曲がる）」の動詞丁寧形を入力してください（ひらがな五文字）:",
          "acceptedAnswers": [
            "まがります",
            "マガリマス",
            "曲がります"
          ],
          "explanation": "「曲がります（まがります）」です。"
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
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【玄関での文化作法】日本の住宅に入る際の正しいマナーを表す文はどれですか。",
          "options": [
            "日本の家では玄関で必ず靴を脱いで、スリッパに履き替えます。",
            "日本の家では靴を履いたまま畳の部屋に上がります。",
            "玄関で靴を脱がないでそのままベッドに行きます。",
            "玄関でスリッパを脱いで靴を履きます。"
          ],
          "answerIndex": 0,
          "explanation": "日本の住居文化では玄関（上がり框）で靴を脱ぎ、外の汚れを室内に持ち込まないのが鉄則です。"
        },
        {
          "prompt": "【部屋の広さの単位】日本の和室の広さを表す伝統的な助数詞はどれですか。",
          "options": [
            "畳（じょう / ろくじょう＝六畳）",
            "本（ほん）",
            "枚（まい）",
            "匹（ひき）"
          ],
          "answerIndex": 0,
          "explanation": "部屋の広さは畳（たたみ）の枚数を基準にした「〜畳（じょう）」で表します。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【部屋の特徴の説明】アパートの部屋が南向きで日当たりが良い六畳の和室であることを述べる文を選択してください。",
          "options": [
            "私の新しいアパートは南向きの日当たりが良い六畳の和室です。",
            "私の新しいアパートは南向きの畳が六本ある洋室です。",
            "私のアパートは南向きで六畳の玄関でした。",
            "私のアパートは南向きに日当たりが悪い和室です。"
          ],
          "answerIndex": 0,
          "explanation": "「南向きの日当たりが良い六畳の和室」が住居の好条件を的確に表しています。"
        },
        {
          "prompt": "【畳の部屋でのマナー】和室（畳の部屋）に入る際のマナーとして正しい文を選択してください。",
          "options": [
            "畳の部屋に入る時はスリッパを脱いで、靴下か素足で上がります。",
            "畳の上では厚底の靴を履いたまま歩きます。",
            "畳の上にはスリッパをたくさん並べます。",
            "畳の部屋では土足が基本です。"
          ],
          "answerIndex": 0,
          "explanation": "畳を傷めないため、和室に入る直前にスリッパを脱ぐのが日本の作法です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "和室に見られる伝統的な建具「障子（しょうじ）」と「襖（ふすま）」の違いは何ですか。",
          "options": [
            "障子は木枠に薄い和紙を貼り光を通すもの、襖は厚い紙や布で部屋を仕切るもの。",
            "障子がドアで襖が窓である。",
            "障子は金属製で襖はガラス製である。",
            "全く同一のものである。"
          ],
          "answerIndex": 0,
          "explanation": "障子は採光機能を持つ半透明の建具、襖は部屋を間仕切り遮光する建具です。"
        },
        {
          "type": "typed-recall",
          "prompt": "日本の家で靴を脱ぐ入り口の空間を入力してください（漢字二文字またはひらがな四文字）:",
          "acceptedAnswers": [
            "玄関",
            "げんかん",
            "ゲンカン"
          ],
          "explanation": "「玄関（げんかん）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【家具の配置構文】「机の上に本を置く」「壁にカレンダーを掛ける」の格助詞構文として正しいものはどれですか。",
          "options": [
            "［場所］に ［物］を 置く／掛ける（着点＝に、対象＝を）",
            "［場所］を ［物］に 置く／掛ける",
            "［場所］で ［物］が 置く／掛ける",
            "［場所］から ［物］で 置く／掛ける"
          ],
          "answerIndex": 0,
          "explanation": "物をある場所に配置・固定する動詞は「［着点］に ［目的物］を ［動詞］」を用います。"
        },
        {
          "prompt": "【部屋の家具配置の描写】机の隣に本棚を配置したことを述べる文を選択してください。",
          "options": [
            "机の隣に大きな本棚を置きました。",
            "机の隣を大きな本棚に置きました。",
            "机の隣で大きな本棚が置きました。",
            "机の隣から大きな本棚を置きましたでした。"
          ],
          "answerIndex": 0,
          "explanation": "「机の隣に本棚を置きました」が正確です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【電化製品の配置】冷蔵庫をキッチンの隅に設置したことを説明する文を選択してください。",
          "options": [
            "台所（キッチン）の隅に新しい冷蔵庫を設置しました。",
            "台所の隅を冷蔵庫に設置しました。",
            "台所の隅で冷蔵庫が設置しました。",
            "台所の隅から冷蔵庫を設置しましたでした。"
          ],
          "answerIndex": 0,
          "explanation": "「台所の隅に冷蔵庫を設置しました」が正確です。"
        },
        {
          "prompt": "【壁飾りの描写】部屋の壁に美しい絵を掛けてあることを述べる文を選択してください。",
          "options": [
            "リビングの壁に富士山の絵を掛けてあります。",
            "リビングの壁を絵に掛けました。",
            "リビングの壁で絵を掛けるでした。",
            "リビングの壁から絵が掛かりますでした。"
          ],
          "answerIndex": 0,
          "explanation": "「壁に絵を掛けてあります（結果状態の存続）」が自然です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "位置を表す名詞「上・下・前・後ろ・隣・中」の助詞結合規則として正しいものはどれですか。",
          "options": [
            "机の【上】に、椅子の【下】に、テレビの【隣】に（名詞 ＋ の ＋ 位置名詞 ＋ に）",
            "机上に、椅子下に、テレビ隣に（助詞なし）",
            "机を上に、椅子を下に",
            "机で上に、椅子で下に"
          ],
          "answerIndex": 0,
          "explanation": "位置関係は「［名詞］の［位置名詞］に」の形で示します。"
        },
        {
          "type": "typed-recall",
          "prompt": "物をある場所に位置づける動詞「置く（おく）」の丁寧形を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "おきます",
            "オキマス",
            "置きます"
          ],
          "explanation": "「置きます（おきます）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【ゴミの分別カテゴリー】日本の自治体における主なゴミ分別の種類の組み合わせとして正しいものはどれですか。",
          "options": [
            "燃えるゴミ（可燃） / 燃えないゴミ（不燃） / 資源ゴミ（ビン・缶・ペットボトル） / 粗大ゴミ",
            "高いゴミ / 安いゴミ / 綺麗なゴミ",
            "朝のゴミ / 夜のゴミ",
            "分別は一切不要ですべて一括回収"
          ],
          "answerIndex": 0,
          "explanation": "日本のゴミ分別は「燃えるゴミ」「燃えないゴミ」「資源ゴミ」「粗大ゴミ」などに厳格に分類されます。"
        },
        {
          "prompt": "【期限を表す助詞「までに」】「朝八時までに出してください」における「までに」の文法機能は何ですか。",
          "options": [
            "動作を完了させる期限・デッドライン（by 〜）を示す。",
            "動作を継続する終了時点（until 〜）を示す。",
            "動作の理由を示す。",
            "動作の出発点を示す。"
          ],
          "answerIndex": 0,
          "explanation": "「〜までに」は期限（by）を表し、「〜まで（until）」の継続と明確に区別されます。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ゴミ出しルールの伝達】燃えるゴミの回収曜日と時間を正しく伝える文を選択してください。",
          "options": [
            "ゴミの分別ルールに従って、燃えるゴミは火曜日と金曜日の朝八時までに出してください。",
            "ゴミのルールに従って、燃えるゴミは火曜日の夜中に出しなさい。",
            "ゴミの分別に従って、燃えないゴミを火曜日に全部捨てますでした。",
            "ゴミを分けないでいつでも出してください。"
          ],
          "answerIndex": 0,
          "explanation": "「火曜日と金曜日の朝八時までに出してください」が正確な案内です。"
        },
        {
          "prompt": "【資源ゴミのリサイクル作法】ペットボトルを捨てる際のマナーを説明する文を選択してください。",
          "options": [
            "ペットボトルは中を水で洗って、キャップとラベルを外して資源ゴミに出します。",
            "ペットボトルは中身を入れたまま燃えるゴミに捨てます。",
            "ペットボトルは道路に捨てます。",
            "ペットボトルは分解して燃やします。"
          ],
          "answerIndex": 0,
          "explanation": "中をすすぎ、キャップ・ラベルを分別するのが日本のリサイクル作法です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「八時まで勉強します」と「八時までに宿題を出します」の違いは何ですか。",
          "options": [
            "前者は八時まで勉強を継続すること（until）、後者は八時以前に提出を完了すること（by）。",
            "前者が期限で後者が継続である。",
            "両方とも全く同じ意味である。",
            "前者が過去形で後者が未来形である。"
          ],
          "answerIndex": 0,
          "explanation": "「まで＝継続（until）」、「までに＝期限・完了点（by）」です。"
        },
        {
          "type": "typed-recall",
          "prompt": "期限を表す助詞「by」を入力してください（ひらがな三文字）:",
          "acceptedAnswers": [
            "までに",
            "マデニ"
          ],
          "explanation": "期限の助詞は「までに」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【集合住宅（マンション・アパート）での騒音配慮】夜間の生活マナーとして適切な表現はどれですか。",
          "options": [
            "夜遅くは洗濯機や掃除機を使わず、テレビの音量にも配慮してください。",
            "夜中は大音量で音楽を流してください。",
            "夜中に廊下で大声で歌いましょう。",
            "いつでも自由に大きな音を出してよい。"
          ],
          "answerIndex": 0,
          "explanation": "日本の集合住宅では壁が薄い場合も多く、夜間の騒音（洗濯機・掃除機・足音・大声）への配慮が不可欠です。"
        },
        {
          "prompt": "【共用部分の利用マナー】マンションの廊下や階段（共用部）の利用ルールとして正しいものはどれですか。",
          "options": [
            "避難経路となる共用廊下に私物を放置してはいけません。",
            "共用廊下に私物を積み上げて保管する。",
            "階段でゴミを燃やす。",
            "共用廊下を個人の部屋として使う。"
          ],
          "answerIndex": 0,
          "explanation": "共用廊下や非常階段は防災・避難通路であるため、私物の放置は禁止されています。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【近隣への配慮の伝達】夜間に隣人に迷惑をかけないよう注意を促す文を選択してください。",
          "options": [
            "夜十時以降は近所迷惑になりますので、大きな音を立てないでください。",
            "夜十時以降は近所迷惑ですから、大きな音を立ててください。",
            "夜十時以降に掃除機を掛けましょう。",
            "夜十時以降は騒音を立てるべきです。"
          ],
          "answerIndex": 0,
          "explanation": "「近所迷惑になりますので、大きな音を立てないでください」が適切な注意喚起です。"
        },
        {
          "prompt": "【共用エントランスの施錠】オートロックのドアを確実に閉めるよう案内する文を選択してください。",
          "options": [
            "防犯のため、エントランスのオートロックのドアは必ず閉めてください。",
            "防犯のため、ドアを開け放しておいてください。",
            "エントランスで鍵を壊してください。",
            "エントランスに入ってはいけません。"
          ],
          "answerIndex": 0,
          "explanation": "「防犯のため、〜必ず閉めてください」が安全マナーの基本です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "日本のアパート・マンション契約時に支払う「敷金（しききん）」と「礼金（れいきん）」の違いは何ですか。",
          "options": [
            "敷金は退去時の修繕費用等を担保する預託金（返還あり）、礼金は大家への謝礼金（返還なし）。",
            "敷金が大家へのプレゼントで、礼金が預託金である。",
            "両方とも毎月支払う家賃のことである。",
            "両方とも全額必ず返還される。"
          ],
          "answerIndex": 0,
          "explanation": "敷金は担保としての預かり金（差引後返還）、礼金は慣習的な贈与金（返還なし）です。"
        },
        {
          "type": "typed-recall",
          "prompt": "他人の迷惑になる騒がしい音を意味する語を入力してください（漢字二文字またはひらがな四文字）:",
          "acceptedAnswers": [
            "騒音",
            "そうおん",
            "ソウオン"
          ],
          "explanation": "「騒音（そうおん）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【引っ越し時の近隣挨拶対話】引っ越し後に隣の部屋の住人に挨拶する日本の伝統的対話を選択してください。",
          "options": [
            "「初めまして、隣の三〇二号室に越してきた田中です。これからどうぞよろしくお願いいたします。」",
            "「おい、隣に入ったから静かにしろ。」",
            "「隣の部屋を買いました。さようなら。」",
            "「引っ越しましたのでお金をください。」"
          ],
          "answerIndex": 0,
          "explanation": "「隣の〜号室に越してきた［名前］です。これからどうぞよろしくお願いいたします」が円満な近隣関係を築く定型挨拶です。"
        },
        {
          "prompt": "【不動産屋での内見対話】不動産仲介業者に希望条件を伝える表現はどれですか。",
          "options": [
            "「駅から徒歩十分以内で、日当たりが良いバス・トイレ別の部屋を探しています。」",
            "「駅から一番遠くて暗い部屋をください。」",
            "「部屋はどこでもいいからタダにしてください。」",
            "「家賃が高い部屋だけ見ます。」"
          ],
          "answerIndex": 0,
          "explanation": "「駅から徒歩〜分以内で、日当たりの良い〜を探しています」が部屋探しの標準的要望表現です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【部屋の眺望と環境の感想】内見した部屋の窓からの眺めが素晴らしいことを称賛する文を選択してください。",
          "options": [
            "部屋の窓を開けると、心地よい風と美しい緑の庭が見えます。",
            "部屋の窓を開けると、ゴミがたくさん落ちていました。",
            "部屋の窓が壊れていて閉まりませんでした。",
            "部屋の窓を開けないでくださいでした。"
          ],
          "answerIndex": 0,
          "explanation": "「心地よい風と美しい緑の庭が見えます」が住居環境の良さを描写しています。"
        },
        {
          "prompt": "【住居契約の決定】内見した物件を気に入り、契約手続きに進むことを伝える文を選択してください。",
          "options": [
            "とても気に入りましたので、この部屋で契約をお願いいたします。",
            "あまり好きではありませんが、今すぐ壊します。",
            "この部屋は狭すぎるので無料にしてください。",
            "契約をキャンセルして帰ります。"
          ],
          "answerIndex": 0,
          "explanation": "「とても気に入りましたので、この部屋で契約をお願いいたします」が明確で丁寧な意思表示です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "日本の住宅賃貸における「1K」「1DK」「1LDK」の頭文字「D」「L」「K」の正しい意味はどれですか。",
          "options": [
            "D＝ダイニング（Dining）、L＝リビング（Living）、K＝キッチン（Kitchen）",
            "D＝ドア（Door）、L＝ライト（Light）、K＝キー（Key）",
            "D＝デスク（Desk）、L＝ランドリー（Laundry）、K＝クローゼット（Kitchen）",
            "特に定まった英語の意味はない"
          ],
          "answerIndex": 0,
          "explanation": "L＝居間（Living）、D＝食事室（Dining）、K＝台所（Kitchen）です。"
        },
        {
          "type": "typed-recall",
          "prompt": "引っ越し挨拶での結びの言葉「よろしく＿＿＿いたします」の空欄を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "おねがい",
            "オネガイ",
            "お願い"
          ],
          "explanation": "「よろしく【お願い】いたします」です。"
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
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【身体症状の伝達構文】「頭が痛い」「熱がある」など症状を述べる標準的な構文として正しいものはどれですか。",
          "options": [
            "［身体部位］が 痛い（いたいです）／［症状］が ある（出ます）",
            "［身体部位］を 痛いです",
            "［身体部位］に 痛いがあります",
            "［身体部位］で 痛いをします"
          ],
          "answerIndex": 0,
          "explanation": "身体の痛みや不調は「［部位］が 痛い」「熱が ある」「咳が 出る」のように主格助詞「が」で表します。"
        },
        {
          "prompt": "【喉の激しい痛みと発熱の伝達】昨夜から熱が出て喉が痛いことを医師に伝える文を選択してください。",
          "options": [
            "昨夜から高熱が出て、喉が激しく痛みます。",
            "昨夜から高熱を入って、喉を痛くしました。",
            "昨夜から高熱があって、喉に痛みますでした。",
            "昨夜から高熱が行って、喉が痛いでした。"
          ],
          "answerIndex": 0,
          "explanation": "「昨夜から高熱が出て、喉が激しく痛みます」が自然で正確な病状説明です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【胃腸の不調の伝達】お腹が痛くて吐き気があることを説明する文を選択してください。",
          "options": [
            "朝からお腹が痛くて、吐き気（はきけ）がします。",
            "朝からお腹を痛くして、吐き気を持ちます。",
            "朝からお腹で痛くて、吐き気が痛みます。",
            "朝からお腹に痛いですから、吐き気を行きます。"
          ],
          "answerIndex": 0,
          "explanation": "「お腹が痛くて（て形並列）吐き気がします」が正確です。"
        },
        {
          "prompt": "【インフルエンザ検査の依頼】医師に検査を丁寧に依頼する文を選択してください。",
          "options": [
            "インフルエンザの検査をお願いできますでしょうか。",
            "インフルエンザを検査してくださいでした。",
            "インフルエンザの検査をさせます。",
            "インフルエンザの検査に頼みます。"
          ],
          "answerIndex": 0,
          "explanation": "「〜の検査をお願いできますでしょうか」が丁寧で適切な依頼表現です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "風邪の諸症状を表す動詞の組み合わせとして正しいものはどれですか。",
          "options": [
            "熱が【出る】 / 咳が【出る】 / 喉が【腫れる】 / 寒気が【する】",
            "熱が腫れる / 咳がする / 喉が出る / 寒気が痛い",
            "熱を取る / 咳を飲む / 喉をする",
            "すべて動詞「する」のみを用いる"
          ],
          "answerIndex": 0,
          "explanation": "熱が出る・咳が出る・喉が腫れる・寒気がするが正しいコロケーションです。"
        },
        {
          "type": "typed-recall",
          "prompt": "「throat（のど）」の漢字またはひらがなを入力してください:",
          "acceptedAnswers": [
            "喉",
            "のど",
            "ノド"
          ],
          "explanation": "「喉（のど）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【病院受付での定型案内】受付スタッフが患者に保険証の提示と問診票記入を求める丁寧な表現はどれですか。",
          "options": [
            "健康保険証はお持ちでしょうか。こちらの問診票にご記入の上、待合室でお待ちください。",
            "保険証を出せ。問診票を書け。",
            "保険証を持ちましたか。問診票を待合室で書いてくださいでした。",
            "問診票はいりません。"
          ],
          "answerIndex": 0,
          "explanation": "「健康保険証はお持ちでしょうか。問診票にご記入の上、待合室でお待ちください」が医療機関の標準的敬語です。"
        },
        {
          "prompt": "【診療科の選択】目の異常（結膜炎・視力低下・充血等）の際に受診すべき診療科はどれですか。",
          "options": [
            "眼科（がんか）",
            "内科（ないか）",
            "皮膚科（ひふか）",
            "歯科（しか）"
          ],
          "answerIndex": 0,
          "explanation": "目の疾患は「眼科（がんか）」を受診します。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【初診の受付申告】初めてこの病院に来たことを受付で伝える文を選択してください。",
          "options": [
            "初診（しょしん）なのですが、診察をお願いできますでしょうか。",
            "再診（さいしん）ですが、初めて来ました。",
            "病院を初めて買いました。",
            "診察を終わりたいです。"
          ],
          "answerIndex": 0,
          "explanation": "「初診なのですが、診察をお願いできますでしょうか」が的確です。"
        },
        {
          "prompt": "【アレルギー情報の申告】ペニシリンなど特定の薬にアレルギーがあることを問診票や口頭で伝える文を選択してください。",
          "options": [
            "特定の抗生物質にアレルギーがあります。",
            "特定の抗生物質がアレルギーをします。",
            "アレルギーを抗生物質で飲みます。",
            "抗生物質のアレルギーになりましたでした。"
          ],
          "answerIndex": 0,
          "explanation": "「〜にアレルギーがあります」が正確な申告構文です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「内科」「外科」「皮膚科」「耳鼻咽喉科」の診療対象の組み合わせとして正しいものはどれですか。",
          "options": [
            "内科＝風邪や内臓疾患 / 外科＝手術や外傷 / 皮膚科＝肌のトラブル / 耳鼻咽喉科＝耳・鼻・喉",
            "内科＝歯の治療 / 外科＝目の治療",
            "皮膚科＝骨折 / 耳鼻咽喉科＝胃潰瘍",
            "すべて同じ病気を治療する"
          ],
          "answerIndex": 0,
          "explanation": "日本の診療科区分：内科（Internal Medicine）、外科（Surgery）、皮膚科（Dermatology）、耳鼻咽喉科（ENT）です。"
        },
        {
          "type": "typed-recall",
          "prompt": "初めて病院を受診することを表す二字熟語を入力してください（「しょしん」）:",
          "acceptedAnswers": [
            "初診",
            "しょしん",
            "ショシン"
          ],
          "explanation": "「初診（しょしん）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【診察室での医師の指示】聴診器を当てる際に医師が発する標準的な指示表現はどれですか。",
          "options": [
            "「息を大きく吸って、ゆっくり吐いてください。」",
            "「息を吸わないで死んでください。」",
            "「呼吸を走ってください。」",
            "「息を食べてください。」"
          ],
          "answerIndex": 0,
          "explanation": "胸部聴診時の定型指示は「息を吸って（吸入）、吐いて（呼出）ください」です。"
        },
        {
          "prompt": "【触診時の部位特定】腹部を触診しながら痛みの位置を確認する質問はどれですか。",
          "options": [
            "「お腹のどのあたりが痛みますか。ここを押すと痛いですか。」",
            "「お腹がどこにありますか。」",
            "「お腹を全部食べましたか。」",
            "「痛いは何ですか。」"
          ],
          "answerIndex": 0,
          "explanation": "「どのあたりが痛みますか。ここを押すと痛いですか」が触診の基本対話です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【症状の持続期間の伝達】三日前から症状が続いていることを説明する文を選択してください。",
          "options": [
            "三日前の朝からずっと頭痛と微熱が続いています。",
            "三日前から頭痛が続けましたでした。",
            "三日前に頭痛が止まりました。",
            "三日後の朝から頭痛がします。"
          ],
          "answerIndex": 0,
          "explanation": "「三日前の朝からずっと〜が続いています（継続）」が正確です。"
        },
        {
          "prompt": "【喉の診察への応対】医師に「口を大きく開けて『あー』と言ってください」と言われた時の対応を選択してください。",
          "options": [
            "口を大きく開けて「あー」と声を出し喉を見せる。",
            "口を固く閉じて何も言わない。",
            "立ち上がって診察室を出る。",
            "目を閉じて寝る。"
          ],
          "answerIndex": 0,
          "explanation": "喉の視診の指示に従い、口を開けて発声します。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "呼吸の動作を表す動詞ペア「すう（吸う）」と「はく（吐く）」の活用形（て形）はどれですか。",
          "options": [
            "吸って（すって・促音便） / 吐いて（はいて・イ音便）",
            "吸いて / 吐って",
            "吸んで / 吐んで",
            "吸して / 吐して"
          ],
          "answerIndex": 0,
          "explanation": "吸う＝吸って（ワ行五段・促音便）、吐く＝吐いて（カ行五段・イ音便）です。"
        },
        {
          "type": "typed-recall",
          "prompt": "「breathe in（息を吸う）」の動詞丁寧形を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "すいます",
            "スイマス",
            "吸います"
          ],
          "explanation": "「吸います（すいます）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【調剤薬局での服薬指導】薬剤師による薬の服用方法の説明として文法的に完全なものはどれですか。",
          "options": [
            "このお薬は毎食後三十分以内に水またはぬるま湯で一錠服用してください。",
            "このお薬は毎食後にお酒で十錠飲んでください。",
            "このお薬は飲まないで捨ててください。",
            "このお薬は水なしで噛んで遊んでください。"
          ],
          "answerIndex": 0,
          "explanation": "「毎食後三十分以内に水またはぬるま湯で一錠服用してください」が正確な服薬指導表現です。"
        },
        {
          "prompt": "【服薬タイミングの用語】「食前」「食後」「食間」「就寝前」の正しい意味はどれですか。",
          "options": [
            "食前＝食事の20〜30分前 / 食後＝食後30分以内 / 食間＝食事と食事の間（空腹時） / 就寝前＝寝る前",
            "食間＝食事中にご飯と一緒に飲むこと",
            "食前＝食事の3時間前",
            "すべて同じ時間帯である"
          ],
          "answerIndex": 0,
          "explanation": "「食間」は食事中ではなく「食事と食事の間（前の食事から約2時間後）」を意味します。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【薬の副作用に関する注意】眠気が出る薬についての注意喚起文を選択してください。",
          "options": [
            "この薬を服用した後は、車の運転や危険な機械の操作は避けてください。",
            "この薬を飲んだらすぐに高速道路で運転してください。",
            "この薬を飲むと絶対に眠くなりません。",
            "この薬は運転中に飲むと元気になります。"
          ],
          "answerIndex": 0,
          "explanation": "眠気を催す薬に対して「車の運転や機械操作は避けてください」と指導します。"
        },
        {
          "prompt": "【お薬手帳の提示】調剤薬局の窓口でお薬手帳を渡す文を選択してください。",
          "options": [
            "処方箋とお薬手帳をお願いします。",
            "処方箋を破いて捨てました。",
            "お薬手帳を買いません。",
            "薬を全部タダにしてください。"
          ],
          "answerIndex": 0,
          "explanation": "「処方箋とお薬手帳をお願いします」が薬局窓口での定型です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "錠剤（タブレット）を数える助数詞はどれですか。",
          "options": [
            "錠（じょう / いちじょう＝一錠、にじょう＝二錠）",
            "本（ほん）",
            "枚（まい）",
            "個（こ）"
          ],
          "answerIndex": 0,
          "explanation": "薬の錠剤・カプセルは「〜錠（じょう）」で数えます。"
        },
        {
          "type": "typed-recall",
          "prompt": "薬を飲むことを表す漢語動詞「＿＿＿する（ふくようする）」の漢字またはひらがなを入力してください:",
          "acceptedAnswers": [
            "服用",
            "ふくよう",
            "フクヨウ"
          ],
          "explanation": "「服用（ふくよう）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【病院から薬局への一連対話】診察終了時の医師・患者の挨拶として適切なものはどれですか。",
          "options": [
            "医師：「お大事にどうぞ。」 患者：「ありがとうございました。」",
            "医師：「さようなら、二度と来るな。」 患者：「はい。」",
            "医師：「ごちそうさまでした。」 患者：「いただきます。」",
            "医師：「失礼します。」 患者：「ごめんなさい。」"
          ],
          "answerIndex": 0,
          "explanation": "医療従事者から患者への別れの挨拶は「お大事に（どうぞ）」が使われます。"
        },
        {
          "prompt": "【体調の経過観察の対話】薬を飲んでも症状が改善しない場合の相談文を選択してください。",
          "options": [
            "三日間薬を服用しましたが熱が下がりません。もう一度診ていただけますか。",
            "薬を飲んだら元気になったので病院を壊します。",
            "熱が上がったので薬を全部捨てました。",
            "診察を拒否します。"
          ],
          "answerIndex": 0,
          "explanation": "「〜を服用しましたが［症状］が下がりません。もう一度診ていただけますか」が的確な再診依頼です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【救急時の相談窓口】急病時に救急車を呼ぶべきか迷った際の日本の相談ダイヤルはどれですか。",
          "options": [
            "救急安心センター事業「#7119」または「119番」",
            "110番（警察）",
            "117番（時報）",
            "104番（電話番号案内）"
          ],
          "answerIndex": 0,
          "explanation": "救急車要請は119番、救急医療相談は#7119です。"
        },
        {
          "prompt": "【同僚の体調不良への気遣い】職場で具合が悪そうな同僚に対する親切な声かけを選択してください。",
          "options": [
            "顔色が良くないようですが、大丈夫ですか。無理をしないで早めに休んでくださいね。",
            "顔色が悪いからもっと働け。",
            "病院に行かずに残業してください。",
            "病気は気のせいです。"
          ],
          "answerIndex": 0,
          "explanation": "「顔色が良くないようですが、大丈夫ですか。無理をしないで〜」が思いやりのある自然な表現です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "病気の人に対して回復を祈る決まり文句はどれですか。",
          "options": [
            "お大事に（お大事になさってください）",
            "ごちそうさまでした",
            "いってらっしゃい",
            "お邪魔しました"
          ],
          "answerIndex": 0,
          "explanation": "病気や怪我の人には「お大事に（なさってください）」と声をかけます。"
        },
        {
          "type": "typed-recall",
          "prompt": "病気の人にかける言葉「お＿＿＿に」の空欄を入力してください（ひらがな三文字）:",
          "acceptedAnswers": [
            "だいじ",
            "ダイジ",
            "大事"
          ],
          "explanation": "「お【大事（だいじ）】に」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【動詞の意向形（Volitional form）の活用規則】動詞「行く（一類）」「食べる（二類）」「する（三類）」「来る（三類）」の意向形として正しい組み合わせはどれですか。",
          "options": [
            "行こう（いこう） / 食べよう（たべよう） / しよう / 来よう（こよう）",
            "行こう / 食べろ / します / きよう",
            "行きたい / 食べたい / したい / 来たい",
            "行けば / 食べれば / すれば / 来れば"
          ],
          "answerIndex": 0,
          "explanation": "意向形は一類：u→o段長音（行こう）、二類：る→よう（食べよう）、三類：しよう・来よう（こよう）となります。"
        },
        {
          "prompt": "【意向形を用いた意志構文】週末に友達と美術館に行く予定・意志を述べる文を選択してください。",
          "options": [
            "今度の週末は友達と一緒に美術館の特別展を見に行こうと思っています。",
            "今度の週末は友達と美術館を見に行きたいと思っていますでした。",
            "今度の週末は友達と美術館を見に行きますと思っています。",
            "今度の週末は友達と美術館を見に行こうでした。"
          ],
          "answerIndex": 0,
          "explanation": "話し手の継続的な意志は「［動詞意向形］＋ と思っています」で表します。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【相手へのカジュアルな提案・勧誘】「今晩一緒に美味しいラーメンを食べに行こうよ」という意向形文を選択してください。",
          "options": [
            "今晩一緒に美味しいラーメンを食べに行こうよ。",
            "今晩一緒に美味しいラーメンを食べに行きますよ。",
            "今晩一緒に美味しいラーメンを食べに行ってよ。",
            "今晩一緒に美味しいラーメンを食べに行きたいよ。"
          ],
          "answerIndex": 0,
          "explanation": "親しい間柄での「〜しよう」という勧誘に意向形が単独で使われます。"
        },
        {
          "prompt": "【旅行計画の策定】今年の夏休みに北海道を一周する計画を立てていることを述べる文を選択してください。",
          "options": [
            "今年の夏休みは北海道を一周旅行する計画を立てています。",
            "今年の夏休みは北海道を一周旅行した計画でした。",
            "今年の夏休みは北海道を一周旅行する予定を行きます。",
            "今年の夏休みに北海道を一周旅行します計画です。"
          ],
          "answerIndex": 0,
          "explanation": "「〜旅行する計画を立てています」が将来の構想を的確に伝えます。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "三類動詞「来る（くる）」の意向形の発音（読み方）として正しいものはどれですか。",
          "options": [
            "こよう（来よう）",
            "きよう",
            "くよう",
            "らいよう"
          ],
          "answerIndex": 0,
          "explanation": "動詞「来る（くる）」の意向形は「来よう（こよう）」と読みます。"
        },
        {
          "type": "typed-recall",
          "prompt": "動詞「話す（はなす）」の意向形を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "はなそう",
            "ハナソウ",
            "話そう"
          ],
          "explanation": "話す →「話そう（はなそう）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【「〜つもりです」の接続と意味】話し手の確固たる意図・決意を述べる構文として正しいものはどれですか。",
          "options": [
            "動詞辞書形 / ない形 ＋ つもりです（例：「留学するつもりです」「タバコを吸わないつもりです」）",
            "動詞ます形 ＋ つもりです",
            "動詞た形 ＋ つもりです",
            "形容詞 ＋ つもりです"
          ],
          "answerIndex": 0,
          "explanation": "「〜つもりです」は動詞の辞書形またはない形に直接接続し、話し手の強い意志を表します。"
        },
        {
          "prompt": "【大学院進学の意志伝達】大学卒業後に大学院へ進学する意思を述べる文を選択してください。",
          "options": [
            "大学を卒業した後は、日本の大学院に進学して研究を続けるつもりです。",
            "大学を卒業した後は、大学院に進学しますつもりです。",
            "大学を卒業した後は、大学院に進学したつもりでした。",
            "大学を卒業した後は、大学院に進学しているつもりです。"
          ],
          "answerIndex": 0,
          "explanation": "「進学して研究を続ける（辞書形）＋ つもりです」が正確な意志文です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【否定の意志「〜ないつもり」】今後の飲み会に参加しない決意を述べる文を選択してください。",
          "options": [
            "試験勉強に集中したいので、今夜の飲み会には参加しないつもりです。",
            "試験勉強に集中したいので、飲み会に参加するつもりではありませんでした。",
            "試験勉強に集中したいので、飲み会に参加しなくてつもりです。",
            "試験勉強に集中したいので、飲み会に参加しない予定でした。"
          ],
          "answerIndex": 0,
          "explanation": "「参加しない（ない形）＋ つもりです」で否定の決意を明快に表現します。"
        },
        {
          "prompt": "【将来の就職の意志】将来日本企業で働きたい意図を面接で伝える文を選択してください。",
          "options": [
            "将来はIT技術者として日本企業で働くつもりです（働きたいと考えております）。",
            "将来は日本企業で働きますつもりです。",
            "将来は日本企業で働いたつもりです。",
            "将来は日本企業で働く予定ですつもりです。"
          ],
          "answerIndex": 0,
          "explanation": "「〜働くつもりです」が自身の将来設計を語るのに適切です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "目上の人に対して「先生は何時に帰るつもりですか」と質問するのが不作法とされる理由は何ですか。",
          "options": [
            "「つもり」は話し手自身の意図を述べる語であり、相手の意志を直接詮索するのは不敬に当たるため。",
            "文法的に間違いであるため。",
            "「つもり」は過去形にしか使えないため。",
            "敬語の「お〜になる」が入っているため。"
          ],
          "answerIndex": 0,
          "explanation": "目上の人の予定を尋ねる際は「〜お帰りになるご予定ですか」など尊敬語を用い、「〜つもりですか」は避けます。"
        },
        {
          "type": "typed-recall",
          "prompt": "意志・意図を表す形式名詞「〜＿＿＿です（plan / intention）」を入力してください（ひらがな三文字）:",
          "acceptedAnswers": [
            "つもり",
            "ツモリ"
          ],
          "explanation": "「つもり」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【「〜予定です」の接続と意味】公式な日程や客観的なスケジュールを述べる構文として正しいものはどれですか。",
          "options": [
            "動詞辞書形 ＋ 予定です / 名詞 ＋ の ＋ 予定です（例：「出席する予定です」「出張の予定です」）",
            "動詞ます形 ＋ 予定です",
            "動詞て形 ＋ 予定です",
            "形容詞 ＋ 予定です"
          ],
          "answerIndex": 0,
          "explanation": "「〜予定です」は動詞辞書形または「名詞＋の」に接続し、客観的に決定されたスケジュールを表します。"
        },
        {
          "prompt": "【ビジネス会議の予定伝達】明日の午後に取引先との会議に出席する予定を述べる文を選択してください。",
          "options": [
            "明日の午後は社外の取引先との重要な業務提携会議に出席する予定です。",
            "明日の午後は取引先との会議に出席します予定です。",
            "明日の午後は取引先との会議に出席した予定です。",
            "明日の午後は取引先との会議に出席するつもりでした。"
          ],
          "answerIndex": 0,
          "explanation": "「出席する（辞書形）＋ 予定です」が客観的スケジュールの標準表現です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【名詞接続「〜の予定です」】来週月曜日から一週間東京へ出張予定であることを述べる文を選択してください。",
          "options": [
            "来週の月曜日から一週間、東京出張の予定です（東京へ出張する予定です）。",
            "来週の月曜日から東京出張な予定です。",
            "来週の月曜日から東京出張を予定です。",
            "来週の月曜日から東京出張で予定です。"
          ],
          "answerIndex": 0,
          "explanation": "名詞「出張」に接続する場合は「出張の予定です」となります。"
        },
        {
          "prompt": "【新幹線出発時刻の客観的予定】電車の発車時刻をアナウンス・伝達する文を選択してください。",
          "options": [
            "新幹線は十時三十分に出発する予定です。",
            "新幹線は十時三十に出発するつもりです。",
            "新幹線は十時三十に出発しようと思っています。",
            "新幹線は十時三十に出発したいです予定です。"
          ],
          "answerIndex": 0,
          "explanation": "乗り物のダイヤなど公共スケジュールには「〜予定です」を用います。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「つもりです」と「予定です」の文法・語用論的相違点として正しいものはどれですか。",
          "options": [
            "「つもり」は主観的な個人の意志・決意、「予定」は客観的に確定した公式スケジュール。",
            "「つもり」が公的スケジュールで、「予定」が個人の意志である。",
            "両者に意味の違いはなく完全な同義語である。",
            "「予定」は過去の出来事にしか使えない。"
          ],
          "answerIndex": 0,
          "explanation": "「つもり」＝個人の主観的意図、「予定」＝他者や組織と共有された客観的スケジュールです。"
        },
        {
          "type": "typed-recall",
          "prompt": "「schedule / plan」を意味する漢語名詞「よてい」を漢字二文字で入力してください:",
          "acceptedAnswers": [
            "予定",
            "よてい",
            "ヨテイ"
          ],
          "explanation": "「予定（よてい）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【将来の目標・資格取得の決意】日本語能力試験（JLPT）N2に合格するための勉強計画を述べる文を選択してください。",
          "options": [
            "今年の十二月に日本語能力試験N2を受験して合格するつもりです。",
            "今年の十二月にN2を受験したつもりです。",
            "今年の十二月にN2を受験しよう予定です。",
            "今年の十二月にN2を受験すると思いましょう。"
          ],
          "answerIndex": 0,
          "explanation": "「受験して合格する（辞書形）＋ つもりです」が目標達成の意志を表します。"
        },
        {
          "prompt": "【留学・研修の計画伝達】来年の春から半年間京都で研修を受ける予定を説明する文を選択してください。",
          "options": [
            "来年の四月から半年間、京都の研究所で研修を受ける予定になっています。",
            "来年の四月から京都で研修を受けたつもりです。",
            "来年の四月から京都で研修を受けよう予定です。",
            "来年の四月から京都で研修を受けます計画でした。"
          ],
          "answerIndex": 0,
          "explanation": "「〜受ける予定になっています（公式決定）」が適切です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【貯金と将来の計画】将来自分のお店を持つために貯金していることを述べる文を選択してください。",
          "options": [
            "将来自分のカフェを開くために、毎月コツコツ貯金しています。",
            "将来カフェを開いたので貯金しました。",
            "将来カフェを開くつもりで全部お金を使いました。",
            "将来カフェを開きながら貯金を止めます。"
          ],
          "answerIndex": 0,
          "explanation": "「［目的動詞辞書形］＋ ために、貯金しています」が目的と手段の整合した文です。"
        },
        {
          "prompt": "【週末の予定確認への応答】「週末は何をする予定ですか」に対する自然な返答を選択してください。",
          "options": [
            "「部屋の掃除をして、午後から友達と映画を見に行こうと思っています。」",
            "「何もしない予定でしたので昨日行きました。」",
            "「週末を食べます。」",
            "「映画を見るつもり予定です。」"
          ],
          "answerIndex": 0,
          "explanation": "「〜映画を見に行こうと思っています（意向形＋と思っています）」が自然な応答です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "目的を表す表現「〜ために（辞書形接続）」と「〜ように（可能形・無意志動詞接続）」の使い分けとして正しいものはどれですか。",
          "options": [
            "意志動詞の辞書形には「〜ために（家を買うために貯金する）」、可能形や無意志動詞には「〜ように（合格できるように勉強する）」。",
            "両者に違いはなくいつでも自由に交換できる。",
            "「ために」は過去形、「ように」は未来形にしか使えない。",
            "「ように」は名詞にしか接続しない。"
          ],
          "answerIndex": 0,
          "explanation": "意志動詞＋ために（目的）、可能形・状態・否定＋ように（目標状態への誘導）です。"
        },
        {
          "type": "typed-recall",
          "prompt": "将来の目標のために努力することを表す漢語名詞「けいかく」を漢字二文字で入力してください:",
          "acceptedAnswers": [
            "計画",
            "けいかく",
            "ケイカク"
          ],
          "explanation": "「計画（けいかく）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【キャリアプランの面接対話】今後のキャリア目標を面接官に伝える表現として最も適切なものはどれですか。",
          "options": [
            "「五年後にはプロジェクトマネージャーとしてチームを牽引できるよう、日々の業務と資格取得に励む所存です。」",
            "「五年後は社長をクビにして自分が社長になるつもりだ。」",
            "「仕事は適当にやって早く帰る予定です。」",
            "「将来のことは何も考えていません。」"
          ],
          "answerIndex": 0,
          "explanation": "「〜できるよう、日々の業務と資格取得に励む所存です（意向・決意）」が最も格調高い表現です。"
        },
        {
          "prompt": "【長期休暇の旅程相談対話】同僚と休暇の過ごし方を語り合う自然な対話を選択してください。",
          "options": [
            "「夏休みはどうするの？」「家族と沖縄へ行ってダイビングに挑戦しようと思っているんだ。」",
            "「夏休みはどこへ行く？」「どこにも行きませんつもりです。」",
            "「夏休みはいつ？」「沖縄を食べよう予定です。」",
            "「夏休みは休みません。」"
          ],
          "answerIndex": 0,
          "explanation": "「〜挑戦しようと思っているんだ（意向形＋と思っている）」が日常会話として極めて自然です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【複合計画の総合伝達】引越しと転職の二つの計画を順序立てて説明する文を選択してください。",
          "options": [
            "来月新しいアパートに引っ越して、秋からは新しいIT企業で働き始める予定です。",
            "来月引っ越したつもりで、秋から働き始めよう計画です。",
            "来月引っ越すと思いまして、秋から働く予定でしたつもりです。",
            "来月引っ越して秋から働きませんでした。"
          ],
          "answerIndex": 0,
          "explanation": "「引っ越して（て形）、〜働き始める予定です（予定）」が明晰な伝達です。"
        },
        {
          "prompt": "【意志の断念・変更の伝達】当初の予定を変更したことを伝える文を選択してください。",
          "options": [
            "旅行に行くつもりでしたが、仕事が忙しくなったのでキャンセルすることにしました。",
            "旅行に行く予定でしたので今すぐ旅行に行きます。",
            "旅行に行くつもりですですからキャンセルしませんでした。",
            "旅行を壊しました。"
          ],
          "answerIndex": 0,
          "explanation": "「〜つもりでしたが、〜ことにしました（決定）」が計画変更の定型です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「〜ことにする（個人の主観的決定）」と「〜ことになる（組織・他者による客観的決定）」の違いは何ですか。",
          "options": [
            "前者は自分自身の判断・決定（I decided to 〜）、後者は規則や周囲の決定（It has been decided that 〜）。",
            "前者が客観的決定で後者が主観的決定である。",
            "全く同じ意味である。",
            "前者が過去形で後者が未来形である。"
          ],
          "answerIndex": 0,
          "explanation": "「ことにする」＝話者の能動的意志、「ことになる」＝受動的・組織的決定です。"
        },
        {
          "type": "typed-recall",
          "prompt": "意思決定を表す表現「〜ことに＿＿＿（decide to do）」の動詞丁寧形を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "します",
            "シマス"
          ],
          "explanation": "「〜ことに【します】（または いたしました）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【ウチとソトの敬語原則（社外への自社社員の言及）】社外の取引先に対して自分の上司（山田部長）について話す際、正しい表現はどれですか。",
          "options": [
            "「部長の山田は、ただいま席を外しております。」（呼び捨て・謙譲表現）",
            "「山田部長様は、ただいま席を外されていらっしゃいます。」",
            "「山田先生は、お外にいらっしゃいます。」",
            "「山田部長さんは、今いません。」"
          ],
          "answerIndex": 0,
          "explanation": "社外の人に対して社内の人間（上司であっても）について話す際は、役職名を付けず呼び捨てにし謙譲語を用います。"
        },
        {
          "prompt": "【退社時の職場挨拶】先に退勤する際に同僚や上司にかける定型挨拶はどれですか。",
          "options": [
            "「お先に失礼いたします。」（残る側は「お疲れ様でした」）",
            "「ご苦労様でした。」",
            "「バイバイ、また明日。」",
            "「お邪魔しました。」"
          ],
          "answerIndex": 0,
          "explanation": "先に職場を退出する際は「お先に失礼いたします」と言います。「ご苦労様」は目上が目下に使う語です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【役職の序列順序】一般的な日本企業における役職の高い順として正しいものはどれですか。",
          "options": [
            "社長 ＞ 部長 ＞ 課長 ＞ 係長 ＞ 主任 ＞ 一般社員",
            "主任 ＞ 係長 ＞ 課長 ＞ 部長 ＞ 社長",
            "課長 ＞ 社長 ＞ 部長 ＞ 主任",
            "すべて同じ権限である"
          ],
          "answerIndex": 0,
          "explanation": "日本の企業組織の一般的な序列は「社長 ＞ 専務・常務 ＞ 部長 ＞ 課長 ＞ 係長 ＞ 主任」です。"
        },
        {
          "prompt": "【社内での業務終了の挨拶】一日仕事を共にした同僚への労いの言葉を選択してください。",
          "options": [
            "本日の業務は以上で終了いたします。皆様、お疲れ様でした。",
            "本日の業務を全部捨てました。ご苦労様です。",
            "皆様、さようなら、もう会いません。",
            "いただきます。"
          ],
          "answerIndex": 0,
          "explanation": "「お疲れ様でした」が同僚・同輩および上司に対する標準的な労いの挨拶です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "目上の人に対して使ってはいけない不適切な挨拶表現はどれですか。",
          "options": [
            "ご苦労様です（目下が目上に使うのは失礼。「お疲れ様です」が適切）",
            "お疲れ様です",
            "お先に失礼いたします",
            "よろしくお願い申し上げます"
          ],
          "answerIndex": 0,
          "explanation": "「ご苦労様」は上位者が下位者をねぎらう言葉であり、目上に対しては「お疲れ様です」を用います。"
        },
        {
          "type": "typed-recall",
          "prompt": "社外の人に対して自分の会社を謙遜して言う語「わが社 / 弊＿＿＿（へいしゃ）」の漢字またはひらがなを入力してください:",
          "acceptedAnswers": [
            "弊社",
            "へいしゃ",
            "ヘイシャ"
          ],
          "explanation": "「弊社（へいしゃ）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【ビジネス電話の受電第一声】電話に出る際の標準的なビジネスマナー表現はどれですか。",
          "options": [
            "「お電話ありがとうございます。株式会社〇〇、営業部の佐藤でございます。」",
            "「もしもし、どなたですか。」",
            "「はい、電話です。」",
            "「要件を早く言ってください。」"
          ],
          "answerIndex": 0,
          "explanation": "ビジネス電話では「もしもし」は使わず、「お電話ありがとうございます。［社名］の［名前］でございます」と名乗ります。"
        },
        {
          "prompt": "【担当者不在時の電話対応】名指しされた担当者が不在の場合の丁寧な応対表現はどれですか。",
          "options": [
            "「あいにく田中は席を外しております。戻り次第、折り返しお電話差し上げましょうか。」",
            "「田中はいません。切ります。」",
            "「田中部長様は遊びに行きました。」",
            "「後でまた自分でかけてください。」"
          ],
          "answerIndex": 0,
          "explanation": "不在を「あいにく〜は席を外しております」と伝え、折り返しの提案をするのが標準です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【電話での相手の確認】相手の名前が聞き取れなかった際の丁寧な聞き返し文を選択してください。",
          "options": [
            "「大変恐れ入りますが、お電話が少々遠いようでございます。もう一度お名前をお伺いできますでしょうか。」",
            "「声が小さいからもっと大声で喋ってください。」",
            "「誰ですか。」",
            "「名前を言え。」"
          ],
          "answerIndex": 0,
          "explanation": "相手のせいにせず「お電話が遠いようでございます」とクッション言葉を挟んで再確認します。"
        },
        {
          "prompt": "【伝言の承り】相手からの伝言を引き受ける際の適切な表現を選択してください。",
          "options": [
            "「私、佐藤が確かに申し伝えます。お電話ありがとうございました。」",
            "「伝言を忘れずに言っておきます。」",
            "「田中さんに教えてあげます。」",
            "「紙に書きました。」"
          ],
          "answerIndex": 0,
          "explanation": "「私、［名前］が確かに申し伝えます」と責任者を明示して謙譲語で請け合います。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "電話の保留時に相手を待たせる際の一言として適切なものはどれですか。",
          "options": [
            "「確認いたしますので、少々お待ちいただけますでしょうか。」",
            "「待て。」",
            "「長い間待ってください。」",
            "「電話を切らないで遊んでいてください。」"
          ],
          "answerIndex": 0,
          "explanation": "「少々お待ちいただけますでしょうか」「少々お待ちくださいませ」を用います。"
        },
        {
          "type": "typed-recall",
          "prompt": "電話で伝えることを表す謙譲動詞「もうし＿＿＿＿（申し伝える）」の後半部分を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "つたえます",
            "ツタエマス"
          ],
          "explanation": "「申し【伝えます（つたえます）】」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【社外向けビジネスメールの冒頭挨拶】取引先宛メールの書き出しとして最も適切な定型構文はどれですか。",
          "options": [
            "「いつも大変お世話になっております。株式会社〇〇の山田でございます。」",
            "「元気ですか。山田です。」",
            "「お疲れ様です。山田だ。」",
            "「メールを読んでください。」"
          ],
          "answerIndex": 0,
          "explanation": "社外メールの定型冒頭は「いつも大変お世話になっております。［社名］の［氏名］でございます」です。"
        },
        {
          "prompt": "【ビジネスメールの結びの言葉】社外取引先へのメールを締めくくる最敬体定型句はどれですか。",
          "options": [
            "「何卒よろしくお願い申し上げます。」",
            "「よろしく頼むよ。」",
            "「さようなら。」",
            "「返事をすぐください。」"
          ],
          "answerIndex": 0,
          "explanation": "「何卒よろしくお願い申し上げます」または「引き続きよろしくお願い申し上げます」が標準結びです。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【添付ファイルの確認依頼】メール添付の資料を確認してほしい時のビジネス敬語表現を選択してください。",
          "options": [
            "「企画書を添付いたしましたので、ご査収のほどよろしくお願い申し上げます。」",
            "「添付ファイルを見てください。」",
            "「添付ファイルを調べろ。」",
            "「企画書を読め。」"
          ],
          "answerIndex": 0,
          "explanation": "「ご査収（さしゅう）のほどよろしくお願い申し上げます」が添付ファイル確認の標準表現です。"
        },
        {
          "prompt": "【迅速な返信への御礼】相手の早い対応に対する感謝を述べるメール文を選択してください。",
          "options": [
            "「ご多忙の折、早速のご連絡をいただき誠にありがとうございます。」",
            "「早くメールをくれてありがとう。」",
            "「暇だったようで感謝します。」",
            "「返信が早くてびっくりしました。」"
          ],
          "answerIndex": 0,
          "explanation": "「ご多忙の折、早速のご連絡をいただき誠にありがとうございます」が格式高い表現です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ビジネスメールにおける「CC」と「BCC」の使い分けとして正しいものはどれですか。",
          "options": [
            "CCは他の受信者にもアドレスが開示される共有用、BCCは他の受信者にアドレスが隠匿される送信用。",
            "CCとBCCは全く同じ機能である。",
            "BCCは上司専用のアドレス欄である。",
            "CCは添付ファイルを送る時だけ使う。"
          ],
          "answerIndex": 0,
          "explanation": "CC（Carbon Copy）は情報共有、BCC（Blind Carbon Copy）は個人情報保護・一斉配信時の秘匿に使います。"
        },
        {
          "type": "typed-recall",
          "prompt": "書類や添付ファイルをよく調べて受け取ることを意味する漢語名詞「ご＿＿＿（ごさしゅう）」を入力してください（漢字二文字）:",
          "acceptedAnswers": [
            "査収",
            "さしゅう",
            "サシュウ"
          ],
          "explanation": "「ご【査収（さしゅう）】」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【日本の職場文化「報連相（ほうれんそう）」】報連相が表す3つの業務行動の正しい組み合わせはどれですか。",
          "options": [
            "報告（ほうこく） / 連絡（れんらく） / 相談（そうだん）",
            "訪問 / 練習 / 掃除",
            "方針 / 連続 / 送信",
            "法律 / 連帯 / 創造"
          ],
          "answerIndex": 0,
          "explanation": "「報連相（ほうれんそう）」は「報告・連絡・相談」の略語で、日本のビジネスの根幹です。"
        },
        {
          "prompt": "【上司への相談の切り出し方】多忙な上司に業務の相談を持ちかける丁寧な表現はどれですか。",
          "options": [
            "「部長、今少々お時間よろしいでしょうか。企画の進捗についてご相談したいことがございます。」",
            "「部長、今すぐ話を聞け。」",
            "「部長、暇ですか。」",
            "「相談がありますから来てください。」"
          ],
          "answerIndex": 0,
          "explanation": "「今少々お時間よろしいでしょうか。〜についてご相談したいことがございます」と相手の都合を配慮します。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【納期遅延の謝罪とお詫び】納期の遅れをクライアントに誠心誠意謝罪する文を選択してください。",
          "options": [
            "「多大なるご迷惑をおかけいたしまして、心より深くお詫び申し上げます。」",
            "「遅れてごめんなさい。」",
            "「忙しかったので仕方ありません。」",
            "「遅延を許してください。」"
          ],
          "answerIndex": 0,
          "explanation": "「多大なるご迷惑をおかけいたしまして、心より深くお詫び申し上げます」がビジネスにおける最上級の謝罪表現です。"
        },
        {
          "prompt": "【クッション言葉を用いた依頼】相手に手間のかかる作業を依頼する際の丁寧な前置きを選択してください。",
          "options": [
            "「お忙しいところ大変恐縮ではございますが、こちらのアンケートにご協力いただけますでしょうか。」",
            "「アンケートを絶対に書いてください。」",
            "「忙しいならアンケートをやらなくていいです。」",
            "「アンケートを命令します。」"
          ],
          "answerIndex": 0,
          "explanation": "「お忙しいところ大変恐縮ではございますが」というクッション言葉が相手への敬意を示します。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "謝罪の言葉としてビジネス場面で最もふさわしい最敬体表現はどれですか。",
          "options": [
            "大変申し訳ございません（または 誠に申し訳ございませんでした）",
            "すいませんでした",
            "ごめんなさい",
            "すまない"
          ],
          "answerIndex": 0,
          "explanation": "口語の「すいません」「ごめんなさい」はビジネスの場では不適切で、「申し訳ございません」を用います。"
        },
        {
          "type": "typed-recall",
          "prompt": "「ほうれんそう（報連相）」の「そう」が表す行動を漢字二文字で入力してください:",
          "acceptedAnswers": [
            "相談",
            "そうだん",
            "ソウダン"
          ],
          "explanation": "「相談（そうだん）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【商談訪問時の受付・名刺交換作法】取引先に到着した際の受付での第一声として適切なものはどれですか。",
          "options": [
            "「本日十四時にお約束をいただいております、株式会社〇〇の佐藤と申します。営業部の高橋様にお取次ぎ願えますでしょうか。」",
            "「高橋に会いに来た佐藤だ。」",
            "「約束があるから通してくれ。」",
            "「こんにちは、遊びに来ました。」"
          ],
          "answerIndex": 0,
          "explanation": "「お約束をいただいております［社名・氏名］です。［相手役職・氏名］様にお取次ぎ願えますでしょうか」が完璧な受付作法です。"
        },
        {
          "prompt": "【名刺交換のマナー】名刺を両手で差し出し受ける際にかける言葉はどれですか。",
          "options": [
            "差し出し時：「頂戴いたします。株式会社〇〇の佐藤と申します。」 受取り時：「頂戴いたします。よろしくお願いいたします。」",
            "差し出し時：「これやるよ。」 受取り時：「もらってやる。」",
            "「名刺はいりません。」",
            "片手で投げるように渡す。"
          ],
          "answerIndex": 0,
          "explanation": "名刺は両手で胸の高さで差し出し、「頂戴いたします」と受領します。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【商談後のフォローアップメール】面談後の感謝と今後の進め方を伝える文を選択してください。",
          "options": [
            "「本日はご多忙の中、貴重なお時間をいただき誠にありがとうございました。本日頂戴したご意見を元に修正案を作成いたします。」",
            "「今日は話を聞いてくれてどうも。また暇なときに連絡して。」",
            "「会議は長すぎて疲れました。」",
            "「修正案は作りません。」"
          ],
          "answerIndex": 0,
          "explanation": "「貴重なお時間をいただき誠にありがとうございました。頂戴したご意見を元に〜」が標準的フォローです。"
        },
        {
          "prompt": "【議事録の送付と内容確認】作成した議事録を関係者に確認してもらう文を選択してください。",
          "options": [
            "「本日の打ち合わせの議事録を作成いたしましたのでご査収ください。相違点等ございましたらご指摘いただけますと幸いです。」",
            "「議事録を書いたから読め。」",
            "「文句があるなら言え。」",
            "「議事録は間違っています。」"
          ],
          "answerIndex": 0,
          "explanation": "「ご査収ください。相違点等ございましたらご指摘いただけますと幸いです」が丁寧です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "日本の商談における「上座（かみざ）」と「下座（しもざ）」の位置関係の基本ルールはどれですか。",
          "options": [
            "出入口から最も遠い奥の席が「上座（お客様や上位者用）」、出入口に最も近い席が「下座（案内役・自社側用）」。",
            "出入口に最も近い席が上座である。",
            "席の位置に序列やルールは存在しない。",
            "窓側の席が常に下座となる。"
          ],
          "answerIndex": 0,
          "explanation": "日本のビジネスマナーでは、出入口から最も遠い席が最上位の「上座」となります。"
        },
        {
          "type": "typed-recall",
          "prompt": "ビジネスでお客様や目上の人へ敬意を表して言う「いただく（もらう / 受ける）」の謙譲語「ちょう＿＿＿する（頂戴する）」の漢字またはひらがなを入力してください:",
          "acceptedAnswers": [
            "頂戴",
            "ちょうだい",
            "チョウダイ"
          ],
          "explanation": "「頂戴（ちょうだい）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【「〜と思います」の文法接続】意見を述べる文構文として正しい接続規則はどれですか。",
          "options": [
            "普通形（簡体・Plain form）＋ と思います（例：「明日は晴れると思います」「便利だと思います」）",
            "丁寧形（ます形・です）＋ と思います",
            "動詞て形 ＋ と思います",
            "名詞 ＋ を思います"
          ],
          "answerIndex": 0,
          "explanation": "「〜と思います」の前は普通形（動詞辞書形/ない/た、い形容詞、な形容詞だ、名詞だ）になります。"
        },
        {
          "prompt": "【個人的な見解の表明】環境問題についての意見を述べる文を選択してください。",
          "options": [
            "環境問題を解決するためには、再生可能エネルギーの導入を加速させるべきだと思います。",
            "環境問題を解決するために、再生可能エネルギーを加速させるべきですと思います。",
            "環境問題を解決するために、再生可能エネルギーを加速すると思いますでした。",
            "環境問題は思いません。"
          ],
          "answerIndex": 0,
          "explanation": "「〜加速させるべきだ（普通形）＋ と思います」が文法的に正確な意見表明です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【否定の意見「〜ないと思います」】その計画は成功しないと考える文を選択してください。",
          "options": [
            "準備期間が短すぎるため、その計画はあまりうまくいかないと思います。",
            "準備期間が短すぎるため、その計画はうまくいきますと思いませんでした。",
            "準備期間が短すぎるため、その計画はうまくいかないと思いますでした。",
            "計画がうまくいきませんと思います。"
          ],
          "answerIndex": 0,
          "explanation": "日本語では「〜ないと思います」の形式で否定の意見を述べるのが最も自然です。"
        },
        {
          "prompt": "【賛否の表明対話】「この新しい提案についてどう思いますか」に対する的確な返答を選択してください。",
          "options": [
            "「コストはかかりますが、長期的に見れば非常に有効な施策だと思います。」",
            "「提案を食べたいと思います。」",
            "「提案は明日行くと思います。」",
            "「どうも思いませんでした。」"
          ],
          "answerIndex": 0,
          "explanation": "「〜非常に有効な施策だと思います（名詞＋だ＋と思います）」が自然な応答です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "な形容詞「便利」を「〜と思います」に接続する際の正しい形はどれですか。",
          "options": [
            "便利【だ】と思います",
            "便利と思います",
            "便利であると思います（または 便利だ）",
            "便利でと思います"
          ],
          "answerIndex": 0,
          "explanation": "な形容詞・名詞の現在肯定普通形は「〜だ」となり、「便利【だ】と思います」と接続します。"
        },
        {
          "type": "typed-recall",
          "prompt": "考える・思うを意味する動詞「おもいます」の漢字を入力してください（一文字）:",
          "acceptedAnswers": [
            "思",
            "おも",
            "オモ"
          ],
          "explanation": "「思（おも）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【発言の間接引用「〜と言っていました」】第三者の伝言・発言内容を報告する文構文として正しいものはどれですか。",
          "options": [
            "普通形 ＋ と言っていました（例：「田中さんは明日休むと言っていました」）",
            "ます形 ＋ と言っていました",
            "て形 ＋ と言っていました",
            "名詞 ＋ を言っていました"
          ],
          "answerIndex": 0,
          "explanation": "間接引用では引用節を普通形にし、「［普通形］＋ と言っていました」と接続します。"
        },
        {
          "prompt": "【教授の発言の敬語間接引用】佐藤教授の発言を尊敬語を用いて伝える文を選択してください。",
          "options": [
            "佐藤教授は、次回の国際シンポジウムは京都で開催されるとおっしゃっていました。",
            "佐藤教授は、次回のシンポジウムは京都で開催されると申していました。",
            "佐藤教授は、シンポジウムが京都で開催すると言いましたでした。",
            "佐藤教授は京都を話しました。"
          ],
          "answerIndex": 0,
          "explanation": "目上の方の発言引用には「言う」の尊敬語「おっしゃる（おっしゃっていました）」を用います。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【直接引用と間接引用の区別】相手の発言を一言一句そのまま「鍵括弧」で引用する直接引用文はどれですか。",
          "options": [
            "田中さんは「明日の朝八時に駅の改札前で会いましょう」と言いました。",
            "田中さんは明日八時に駅で会おうと言いました。",
            "田中さんは八時に来ると言っていました。",
            "田中さんは八時に会いたいそうです。"
          ],
          "answerIndex": 0,
          "explanation": "鍵括弧「」を用いて相手の言葉をそのまま引用するのが直接引用です。"
        },
        {
          "prompt": "【伝言の報告対話】同僚からのメッセージを上司に伝える文を選択してください。",
          "options": [
            "「先ほど鈴木さんから電話があり、電車の遅延で十五分ほど遅れるとのことでした（遅れると言っていました）。」",
            "「鈴木さんが遅れるとおっしゃいました。」",
            "「鈴木さんは電車を止めると言いました。」",
            "「鈴木さんはいません。」"
          ],
          "answerIndex": 0,
          "explanation": "「〜遅れるとのことでした / 遅れると言っていました」が正確な伝言報告です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "動詞「言う」の尊敬語と謙譲語の組み合わせとして正しいものはどれですか。",
          "options": [
            "尊敬語＝おっしゃる / 謙譲語＝申す（もうす）・申し上げる（もうしあげる）",
            "尊敬語＝申す / 謙譲語＝おっしゃる",
            "尊敬語＝召し上がる / 謙譲語＝いただく",
            "尊敬語＝いらっしゃる / 謙譲語＝参る"
          ],
          "answerIndex": 0,
          "explanation": "言うの尊敬語はおっしゃる、謙譲語は申す・申し上げます。"
        },
        {
          "type": "typed-recall",
          "prompt": "動詞「いう（言う）」の尊敬語「おっしゃ＿＿＿（おっしゃいます）」の語幹を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "おっしゃる",
            "オッシャル",
            "仰る"
          ],
          "explanation": "「おっしゃる（仰る）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【「〜かもしれません」の接続規則】不確実な推量（50%以下の可能性）を述べる文構文として正しいものはどれですか。",
          "options": [
            "動詞普通形 / い形容詞 / な形容詞語幹（だ無し） / 名詞（だ無し） ＋ かもしれません",
            "な形容詞・名詞に「だ」を付けたまま接続する",
            "動詞ます形 ＋ かもしれません",
            "動詞て形 ＋ かもしれません"
          ],
          "answerIndex": 0,
          "explanation": "「〜かもしれません」では、な形容詞・名詞の「だ」を取り除いて直接接続します（例：雨かもしれません、暇かもしれません）。"
        },
        {
          "prompt": "【気象・交通への影響の推量】台風接近による新幹線への影響を推量する文を選択してください。",
          "options": [
            "明日は台風が接近しているため、新幹線のダイヤが乱れるかもしれません。",
            "明日は台風が接近しているため、新幹線が乱れるかもしれませんでした。",
            "明日は台風が接近しているため、新幹線が乱れますかもしれません。",
            "台風が新幹線に乗るかもしれません。"
          ],
          "answerIndex": 0,
          "explanation": "「乱れる（辞書形）＋ かもしれません」が的確な推量表現です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【推量の確信度比較】「〜でしょう」「〜と思います」「〜かもしれません」の確信度の高い順として正しいものはどれですか。",
          "options": [
            "〜でしょう（80%前後） ＞ 〜と思います（70%前後） ＞ 〜かもしれません（30〜50%）",
            "〜かもしれません ＞ 〜でしょう ＞ 〜と思います",
            "すべて全く同じ確信度である",
            "〜と思います ＞ 〜絶対に ＞ 〜かもしれません"
          ],
          "answerIndex": 0,
          "explanation": "「でしょう（高推量）」＞「と思います（私見推量）」＞「かもしれません（可能性の示唆）」の順です。"
        },
        {
          "prompt": "【体調の悪化に関する推量】風邪を引いた可能性を述べる文を選択してください。",
          "options": [
            "寒気がして熱っぽいですから、風邪を引いたかもしれません。",
            "風邪を引きましたかもしれません。",
            "風邪を引いたでしょうかと思います。",
            "風邪を引くかもしれませんでした。"
          ],
          "answerIndex": 0,
          "explanation": "過去の出来事への推量は「引いた（た形）＋ かもしれません」となります。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「明日は雨【＿＿＿】かもしれません。」の空欄に入る助動詞・活用の扱いはどうなりますか。",
          "options": [
            "何も入れない（名詞「雨」にそのまま「かもしれません」が接続する）",
            "だ",
            "な",
            "の"
          ],
          "answerIndex": 0,
          "explanation": "名詞およびな形容詞語幹には「だ」を付けずに接続します（「雨かもしれません」）。"
        },
        {
          "type": "typed-recall",
          "prompt": "推量助詞「〜かも【しれません】」の漢字表記「知れません（しれません）」のひらがな四文字を入力してください:",
          "acceptedAnswers": [
            "しれません",
            "シリマセン"
          ],
          "explanation": "「しれません」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【説明・理由のモダリティ「〜んです / 〜のです」】事情の説明や理由の強調を表す構文として正しいものはどれですか。",
          "options": [
            "普通形 ＋ んです（な形容詞・名詞の現在肯定は「〜なんです」）（例：「頭が痛いんです」「雨なんです」）",
            "ます形 ＋ んです",
            "動詞て形 ＋ んです",
            "形容詞語幹 ＋ んです"
          ],
          "answerIndex": 0,
          "explanation": "「〜んです」は普通形に接続し、名詞・な形容詞現在肯定では「〜なんです」となります。"
        },
        {
          "prompt": "【欠勤の理由説明】昨日休んだ理由を「〜んです」を用いて上司に説明する文を選択してください。",
          "options": [
            "「どうして昨日休んだのですか。」「急に高熱が出て動けなかったんです。」",
            "「昨日休んだのは高熱でしたんです。」",
            "「昨日休んだのは高熱を出しましたんです。」",
            "「休みましたんです。」"
          ],
          "answerIndex": 0,
          "explanation": "「動けなかった（普通形過去否定）＋ んです」が自然な理由説明です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【関心・質問の「〜んですか」】相手の様子を見て理由を尋ねる親身な質問文を選択してください。",
          "options": [
            "「荷物がたくさんありますね。どこか旅行へ行くんですか。」",
            "「荷物が多いから旅行へ行きますか。」",
            "「荷物を持って旅行へ行ったんですでしたか。」",
            "「荷物を捨てますか。」"
          ],
          "answerIndex": 0,
          "explanation": "状況を観察して背景理由を尋ねる際は「〜んですか」を用います。"
        },
        {
          "prompt": "【依頼の口火を切る「〜んですが」】道案内や助けを求める前置き文を選択してください。",
          "options": [
            "「すみません、市役所へ行きたいんですが、道を教えていただけますか。」",
            "「市役所へ行きたいですから道を教えろ。」",
            "「市役所を行くんですけれど教えてくださいでした。」",
            "「市役所はどこですかんです。」"
          ],
          "answerIndex": 0,
          "explanation": "依頼の前置きとして「［事情］＋ んですが、〜していただけますか」が定型です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "名詞「休み」に「〜んです」を接続する場合の正しい形はどれですか。",
          "options": [
            "休み【なん】です",
            "休みなのです / 休みなんです",
            "休みだんです",
            "休みのんです"
          ],
          "answerIndex": 0,
          "explanation": "名詞・な形容詞の現在肯定では「だ」が「な」に変化し、「休み【なん】です」となります。"
        },
        {
          "type": "typed-recall",
          "prompt": "理由や説明を表す口語形式「〜＿＿＿です（んです）」のひらがな二文字を入力してください:",
          "acceptedAnswers": [
            "ん",
            "の"
          ],
          "explanation": "「【ん】です（または 【の】です）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【ディスカッションでの意見対話】AI技術の未来について意見を交換する自然な対話を選択してください。",
          "options": [
            "「AIの普及によって多くの業務が効率化される一方で、個人情報保護のルール作りが不可欠だと思います。」",
            "「AIは全部人間を滅ぼすと言っていましたんです。」",
            "「AIは食べ物だと思います。」",
            "「何にも思いません。」"
          ],
          "answerIndex": 0,
          "explanation": "「〜効率化される一方で（対比）、〜不可欠だと思います（意見）」が論理的なディスカッション文です。"
        },
        {
          "prompt": "【他者の見解を交えた推論】専門家の意見を引用しつつ推論を述べる文を選択してください。",
          "options": [
            "「ニュースの解説委員は景気は回復傾向にあると言っていましたが、物価上昇の影響で消費者の心理は冷え込むかもしれません。」",
            "「解説委員は景気が良いと言いましたから絶対に全員お金持ちになります。」",
            "「景気は終わると思いますんです。」",
            "「ニュースは見ません。」"
          ],
          "answerIndex": 0,
          "explanation": "「〜と言っていましたが（引用対比）、〜冷え込むかもしれません（推量）」が複合的な論述です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【会議での反論・別視点の提示】相手の意見を尊重しつつ異なる視点を述べる丁寧な表現を選択してください。",
          "options": [
            "「〇〇さんのおっしゃることもよく分かりますが、予算の制約を考えると別の方法を検討すべきではないかと思います。」",
            "「お前の意見は完全に間違っているから黙れ。」",
            "「予算がないので全部中止にしましょう。」",
            "「賛成も反対もしません。」"
          ],
          "answerIndex": 0,
          "explanation": "「〜おっしゃることも分かりますが（配慮）、〜検討すべきではないかと思います（緩和された主張）」が知的で洗練された反論です。"
        },
        {
          "prompt": "【理由を伴う提案】提案の根拠を説明して同意を求める文を選択してください。",
          "options": [
            "「若者の利用者が急増しているんです。ですから、SNSを活用した広報キャンペーンを展開したほうが効果的だと思います。」",
            "「若者が多いですからSNSをやってくださいでした。」",
            "「SNSは面白いと思いますんです。」",
            "「広報をやめます。」"
          ],
          "answerIndex": 0,
          "explanation": "「〜急増しているんです（理由強調）。ですから〜効果的だと思います（提案意見）」が明快です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "複文における「意見表明（〜と思う）」「引用（〜と言う）」「推量（〜かもしれない）」「理由説明（〜んです）」の統語的共通点は何ですか。",
          "options": [
            "いずれも主節・引用節・接続節の直前に「普通形（簡体）」をとる点。",
            "いずれも名詞にしか接続できない点。",
            "いずれも命令形にしか接続できない点。",
            "敬語表現と併用できない点。"
          ],
          "answerIndex": 0,
          "explanation": "日本語のモダリティ形式はいずれも「普通形（Plain form）」を基底接続として機能します。"
        },
        {
          "type": "typed-recall",
          "prompt": "自分の意見を謙虚に述べる表現「〜べきではないかと＿＿＿（思います）」の動詞丁寧形を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "おもいます",
            "オモイマス",
            "思います"
          ],
          "explanation": "「【思います（おもいます）】」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【日本の地域区分】日本の八地方区分の正しい組み合わせはどれですか。",
          "options": [
            "北海道・東北・関東・中部・近畿（関西）・中国・四国・九州沖縄",
            "東日本と西日本の二つだけ",
            "東京・大阪・京都・名古屋の四つだけ",
            "北海道・本州・四国・九州の島名のみ"
          ],
          "answerIndex": 0,
          "explanation": "日本は行政・地理的に8つの地方区分（北海道・東北・関東・中部・近畿・中国・四国・九州沖縄）に分かれます。"
        },
        {
          "prompt": "【観光地と名所の組み合わせ】京都を代表する歴史的寺社仏閣の組み合わせとして正しいものはどれですか。",
          "options": [
            "清水寺（きよみずでら）・金閣寺（きんかくじ）・伏見稲荷大社（ふしみいなりたいしゃ）",
            "富士山・東京タワー・道頓堀",
            "厳島神社・首里城・兼六園",
            "すべて北海道に位置する"
          ],
          "answerIndex": 0,
          "explanation": "清水寺、金閣寺、伏見稲荷大社はいずれも京都府を代表する世界遺産・名所です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【日本の気候の特徴】日本海側と太平洋側の冬の気候の違いを正しく述べた文を選択してください。",
          "options": [
            "冬の日本海側は雪が多く、太平洋側は晴天が多く乾燥します。",
            "冬の日本海側は猛暑で、太平洋側は大雪です。",
            "日本全土で一年中同じ天気が続きます。",
            "冬は沖縄に雪が積もります。"
          ],
          "answerIndex": 0,
          "explanation": "日本の冬は季節風の影響で日本海側に豪雪をもたらし、太平洋側は乾燥した晴天となります。"
        },
        {
          "prompt": "【名産品とお土産の購入】旅先でお土産を購入する文脈として自然な文を選択してください。",
          "options": [
            "旅行のお土産として、北海道の有名な銘菓と特産品を購入いたしました。",
            "旅行のお土産を全部燃やしました。",
            "お土産を食べないで投げました。",
            "お土産を会社に捨てました。"
          ],
          "answerIndex": 0,
          "explanation": "「お土産として、〜銘菓と特産品を購入いたしました」が旅の報告として自然です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "日本の都道府県の総数はいくつですか。",
          "options": [
            "47都道府県（1都1道2府43県）",
            "50都道府県",
            "40都道府県",
            "100都道府県"
          ],
          "answerIndex": 0,
          "explanation": "日本は47都道府県（東京都、北海道、大阪府、京都府、43県）で構成されます。"
        },
        {
          "type": "typed-recall",
          "prompt": "旅先で買う記念の品「おみやげ（souvenir）」を漢字で入力してください:",
          "acceptedAnswers": [
            "お土産",
            "土産",
            "みやげ"
          ],
          "explanation": "「お土産（おみやげ）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【温泉入浴の絶対的マナー】温泉の湯船（浴槽）に入る前の必須ルールはどれですか。",
          "options": [
            "湯船に入る前に、必ず洗い場で身体と髪を綺麗に洗い、かけ湯をしてから入る。",
            "水着を着てそのまま湯船に飛び込む。",
            "タオルを湯船の中に沈めて石鹸で洗う。",
            "湯船の中で泳いで遊ぶ。"
          ],
          "answerIndex": 0,
          "explanation": "温泉では、湯船を清潔に保つため「洗い場で身体を洗ってから入る」「タオルを浴槽に入れない」が厳格なルールです。"
        },
        {
          "prompt": "【浴衣（ゆかた）の正しい着方（合わせ方）】生きている人の浴衣の合わせ方として正しいものはどれですか。",
          "options": [
            "右前（右の衿を胸に当て、その上に左の衿を重ねる「右前・左上」）",
            "左前（左の衿の上に右の衿を重ねる＝死装束・仏仏の着方）",
            "どちらでも自由に着てよい",
            "帯を結ばずに羽織るだけ"
          ],
          "answerIndex": 0,
          "explanation": "浴衣や着物は「右前（自分から見て右が内側、左が外側上）」で着ます。逆の「左前」は死者の着せ方となりタブーです。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【旅館での仲居さんとの対話】部屋に案内された際のお茶とお菓子への感謝表現を選択してください。",
          "options": [
            "「お心遣いありがとうございます。ご丁寧に案内していただき恐れ入ります。」",
            "「お茶が不味いから捨ててください。」",
            "「早く布団を敷いて出ていけ。」",
            "「旅館を壊します。」"
          ],
          "answerIndex": 0,
          "explanation": "「お心遣いありがとうございます。ご丁寧に案内していただき〜」が丁寧で上品な対応です。"
        },
        {
          "prompt": "【露天風呂の利用感想】温泉宿の露天風呂の魅力を語る文を選択してください。",
          "options": [
            "「雪景色を眺めながら入る露天風呂は最高に贅沢でリフレッシュできました。」",
            "「露天風呂が寒すぎて凍死しました。」",
            "「温泉を全部飲みました。」",
            "「風呂は嫌いです。」"
          ],
          "answerIndex": 0,
          "explanation": "「雪景色を眺めながら入る露天風呂は最高に贅沢で〜」が風情ある感想です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "温泉旅館で提供される伝統的なコース料理の名称はどれですか。",
          "options": [
            "会席料理 / 懐石料理（かいせきりょうり）",
            "ファストフード",
            "ラーメンセット",
            "ビュッフェのみ"
          ],
          "answerIndex": 0,
          "explanation": "日本の温泉旅館では旬の味覚を器や盛り付けとともに楽しむ「会席料理・懐石料理」が振る舞われます。"
        },
        {
          "type": "typed-recall",
          "prompt": "旅館の館内着としても着用される夏の伝統綿織物「ゆかた」を漢字で入力してください:",
          "acceptedAnswers": [
            "浴衣",
            "ゆかた",
            "ユカタ"
          ],
          "explanation": "「浴衣（ゆかた）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【神社（神道）の参拝作法】日本の神社の拝礼作法として最も正確な順序はどれですか。",
          "options": [
            "二礼・二拍手・一礼（お賽銭を入れ、深く二回お辞儀し、二回手を叩き、最後に深く一回お辞儀する）",
            "十回拍手して叫ぶ",
            "お辞儀をせずに通り過ぎる",
            "手を叩かずに合掌して祈る（寺院の作法）"
          ],
          "answerIndex": 0,
          "explanation": "神社の標準的な参拝作法は「二礼二拍手一礼（にれい・にはくしゅ・いちれい）」です（※寺院では拍手せず合掌します）。"
        },
        {
          "prompt": "【手水舎（てみずや）での身の清め方】参拝前に手水舎で行う作法の順序はどれですか。",
          "options": [
            "右手で柄杓を持ち左手を清める → 左手に持ち替え右手を清める → 左手で水を受け口をすすぐ → 柄杓を立てて柄を洗い流す",
            "柄杓に口を直接つけて水を飲む",
            "柄杓で頭から水をかぶる",
            "手水舎で手を洗わない"
          ],
          "answerIndex": 0,
          "explanation": "手水舎では柄杓に口を直接つけず、左手→右手→口（左手経由）→柄杓の柄の順で清めます。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【おみくじと絵馬（えま）】神社でおみくじを引き、願い事を木札に書く文化を説明する文を選択してください。",
          "options": [
            "「おみくじで大吉を引いた後、合格祈願の願い事を絵馬に書いて奉納しました。」",
            "「おみくじを破いて絵馬を折りました。」",
            "「絵馬を食べておみくじを捨てました。」",
            "「神社でお金を盗みました。」"
          ],
          "answerIndex": 0,
          "explanation": "「おみくじで大吉を引いた後、〜絵馬に書いて奉納しました」が正確な神社文化の描写です。"
        },
        {
          "prompt": "【鳥居（とりい）をくぐる際のマナー】神社の入口である鳥居をくぐる時の正しい作法を選択してください。",
          "options": [
            "鳥居の前で一歩立ち止まり軽く一礼し、中央（神様の通り道）を避けて端を歩く。",
            "鳥居の真ん中を大股で走り抜ける。",
            "鳥居に落書きをして入る。",
            "鳥居を無視して壁を乗り越える。"
          ],
          "answerIndex": 0,
          "explanation": "鳥居は神域の結界であり、くぐる前に一礼し、正中（中央）を避けて端を歩くのが礼儀です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "神社と寺院の参拝作法の決定的な違いは何ですか。",
          "options": [
            "神社では「手を叩く（拍手）」が、お寺（仏教）では「音を立てずに静かに合掌する」。",
            "お寺では拍手し、神社では合掌する。",
            "全く同じ作法である。",
            "神社では靴を脱ぎ、寺院では靴を履いたまま上がる。"
          ],
          "answerIndex": 0,
          "explanation": "神社＝二礼二拍手一礼（拍手あり）、寺院＝静かに合掌一礼（拍手なし）が根本的相違です。"
        },
        {
          "type": "typed-recall",
          "prompt": "神社や寺院を参拝した証として朱印帳に頂く印章「ごしゅ＿＿＿（御朱印）」の漢字またはひらがなを入力してください:",
          "acceptedAnswers": [
            "御朱印",
            "ごしゅいん",
            "ゴシュイン",
            "朱印"
          ],
          "explanation": "「御朱印（ごしゅいん）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【日本の伝統工芸の代表例】漆器（しっき）や陶磁器（とうじき）の産地と工芸品の組み合わせとして正しいものはどれですか。",
          "options": [
            "輪島塗（石川県・漆器） / 有田焼（佐賀県・磁器） / 西陣織（京都府・織物）",
            "輪島塗＝プラスチック / 有田焼＝ガラス",
            "すべて海外からの輸入品である",
            "伝統工芸品は存在しない"
          ],
          "answerIndex": 0,
          "explanation": "輪島塗（漆器）、有田焼・伊万里焼（陶磁器）、西陣織（絹織物）は日本を代表する伝統工芸品です。"
        },
        {
          "prompt": "【和食（無形文化遺産）の特徴】日本の伝統的食文化の基本構成である「一汁三菜（いちじゅうさんさい）」の組み合わせはどれですか。",
          "options": [
            "主食（ご飯） ＋ 汁物（味噌汁等） ＋ 主菜一品 ＋ 副菜二品",
            "スープ三つとご飯一つ",
            "肉料理四つ",
            "ケーキとジュース"
          ],
          "answerIndex": 0,
          "explanation": "「一汁三菜」は主食（ご飯）、汁物（一汁）、おかず三品（主菜・副菜・副々菜）からなる栄養バランスの取れた献立です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【伝統工芸体験の感想】金継ぎや陶芸のワークショップに参加した感想を述べる文を選択してください。",
          "options": [
            "「京都の老舗工房で友禅染の体験に参加し、職人技の緻密さと美しさに深く感動しました。」",
            "「伝統工芸を体験して工房の道具を全部壊しました。」",
            "「職人さんに怒鳴って帰りました。」",
            "「友禅染を食べました。」"
          ],
          "answerIndex": 0,
          "explanation": "「〜職人技の緻密さと美しさに深く感動しました」が文化的感銘を表す表現です。"
        },
        {
          "prompt": "【日本の季節の和菓子】季節感を表現する上生菓子（じょうなまがし）とお茶の楽しみ方を語る文を選択してください。",
          "options": [
            "「お抹茶の苦味と、桜をかたどった季節の和菓子の控えめな甘さが絶妙に調和していました。」",
            "「和菓子を床に投げました。」",
            "「お抹茶をジュースで薄めて飲みました。」",
            "「お菓子を食べずに捨てました。」"
          ],
          "answerIndex": 0,
          "explanation": "「お抹茶の苦味と〜季節の和菓子の控えめな甘さが絶妙に調和していました」が豊かな食文化描写です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "漆（うるし）の樹液を木地に塗り重ねて作られる日本の伝統工芸品はどれですか。",
          "options": [
            "漆器（しっき / 輪島塗・山中塗など）",
            "陶器",
            "ガラス細工",
            "革製品"
          ],
          "answerIndex": 0,
          "explanation": "漆器（Japanware / しっき）は漆を塗り重ねて堅牢かつ優美に仕上げる日本伝統工芸です。"
        },
        {
          "type": "typed-recall",
          "prompt": "日本料理の基本献立「いちじゅう＿＿＿さい（一汁三菜）」の空欄部分を漢字またはひらがなで入力してください:",
          "acceptedAnswers": [
            "三菜",
            "さんさい",
            "サンサイ"
          ],
          "explanation": "一汁【三菜（さんさい）】です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【旅館のチェックアウト時の挨拶対話】旅館をチェックアウトする際の客と仲居・女将の自然な対話はどれですか。",
          "options": [
            "客：「素晴らしいおもてなしとお料理をありがとうございました。大変心地よく過ごせました。」 宿：「こちらこそご宿泊いただき誠にありがとうございました。またのお越しを心よりお待ちしております。」",
            "客：「部屋が汚かった。」 宿：「二度と来るな。」",
            "客：「いただきます。」 宿：「ごちそうさまでした。」",
            "客：「さようなら。」 宿：「お金を置いていけ。」"
          ],
          "answerIndex": 0,
          "explanation": "「素晴らしいおもてなしとお料理を〜」「またのお越しを心よりお待ちしております」がお互いに礼を尽くす対話です。"
        },
        {
          "prompt": "【観光案内所での旅程相談】観光案内所のスタッフに見どころを尋ねる丁寧な文を選択してください。",
          "options": [
            "「すみません、このあたりで半日で回れるおすすめの観光ルートや名所はございますでしょうか。」",
            "「おい、どこへ行けばいいか命令しろ。」",
            "「観光地を全部案内所の中に持ってこい。」",
            "「地図をタダで全部よこせ。」"
          ],
          "answerIndex": 0,
          "explanation": "「半日で回れるおすすめの観光ルートや名所はございますでしょうか」が実用的かつ丁寧です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【旅の思い出の総括】日本一周旅行の総括として自然な文章を選択してください。",
          "options": [
            "「北は北海道の大自然から南は沖縄の美しい海まで、地域の多様な文化と人々の温かさに触れる素晴らしい旅となりました。」",
            "「日本全国どこに行っても同じでつまらなかったです。」",
            "「旅行中にずっと寝ていました。」",
            "「飛行機に乗るのを忘れました。」"
          ],
          "answerIndex": 0,
          "explanation": "「地域の多様な文化と人々の温かさに触れる素晴らしい旅となりました」が総合的な旅行総括です。"
        },
        {
          "prompt": "【帰国後のお土産配り】同僚に旅先のお土産を渡す際の丁寧な言葉遣いを選択してください。",
          "options": [
            "「皆さんでどうぞ。金沢へ行ってきたお土産の銘菓です。お口に合うと嬉しいのですが。」",
            "「これ買ってやったから感謝して食え。」",
            "「余ったゴミをやります。」",
            "「お土産代を払ってください。」"
          ],
          "answerIndex": 0,
          "explanation": "「皆さんでどうぞ。〜お土産の銘菓です。お口に合うと嬉しいのですが」が日本の気配り文化に即した贈呈表現です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "日本の伝統的なおもてなし精神を表す名詞はどれですか。",
          "options": [
            "おもてなし（hospitality / 心を込めた歓待）",
            "マニュアル対応",
            "事務処理",
            "義理"
          ],
          "answerIndex": 0,
          "explanation": "「おもてなし」は見返りを求めず客人の心地よさを追求する日本独自の歓待精神です。"
        },
        {
          "type": "typed-recall",
          "prompt": "心のこもった歓待・サービスを表す美称「おもて＿＿＿（おもてなし）」のひらがな二文字を入力してください:",
          "acceptedAnswers": [
            "なし",
            "ナシ"
          ],
          "explanation": "「おもて【なし】」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【条件表現「〜と」の本質的用法】「〜と」が使われる典型的な文脈として正しいものはどれですか。",
          "options": [
            "自然の摂理・季節の推移・機械の操作に伴う自動的・不可避な結果（例：「春になると桜が咲く」「右に曲がると銀行がある」）",
            "相手への依頼・命令（例：「食べると、ください」）",
            "話者の強い個人的な決意（例：「雨が降ると、行くつもりだ」）",
            "過去の一回限りの後悔"
          ],
          "answerIndex": 0,
          "explanation": "「〜と」は前件が成立すると必然的・自動的に後件が起こる因果関係を表し、後件に意志・命令・依頼（〜てください、〜ましょう等）は置けません。"
        },
        {
          "prompt": "【機械操作と結果の表現】券売機の操作説明として正確な文を選択してください。",
          "options": [
            "このボタンを押すと、おつりと切符が出てきます。",
            "このボタンを押すと、切符を出してください。",
            "このボタンを押すと、切符を買いたいです。",
            "ボタンを押すと切符を食べました。"
          ],
          "answerIndex": 0,
          "explanation": "機械の動作は必然的結果なので「押すと〜出てきます」が正確です（後件に依頼・意志は不可）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【季節の推移の叙述】春の訪れを「〜と」を用いて自然に表現した文を選択してください。",
          "options": [
            "春になって暖かくなると、公園の桜が一斉に満開になります。",
            "春になると、桜を満開にしてください。",
            "春になると、桜を見に行きましょう（※意志・勧誘には「たら」が適切）。",
            "春になると冬になりました。"
          ],
          "answerIndex": 0,
          "explanation": "「暖かくなると〜満開になります」は自然現象の客観的推移を表す模範例です。"
        },
        {
          "prompt": "【道案内の定型構文】交差点での道案内文として正しいものを選択してください。",
          "options": [
            "あの交差点を右に曲がると、左手に郵便局が見えます。",
            "交差点を曲がると、郵便局へ行ってください。",
            "交差点を曲がると、郵便局を見ましょう。",
            "交差点を曲がると、郵便局が消えます。"
          ],
          "answerIndex": 0,
          "explanation": "道案内の客観的発見には「［場所］を曲がると、〜が見えます」を用います。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "条件接続「〜と」の文末（後件）に関する絶対的な文法制約はどれですか。",
          "options": [
            "文末に話者の「意志・希望・命令・依頼・勧誘」（〜たい、〜てください、〜ましょう等）を置くことができない。",
            "文末に現在形を置いてはならない。",
            "主語を必ず省略しなければならない。",
            "動詞の過去形にしか接続できない。"
          ],
          "answerIndex": 0,
          "explanation": "「〜と」の後件には意志・希望・命令・依頼表現を置くことができません（それらには「〜たら」を用います）。"
        },
        {
          "type": "typed-recall",
          "prompt": "自然法則や機械操作の確定条件を表す接続助詞「〜＿＿＿（と）」のひらがな一文字を入力してください:",
          "acceptedAnswers": [
            "と",
            "ト"
          ],
          "explanation": "「と」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【「〜ば」の活用規則】動詞・い形容詞を「仮定形（ば形）」にする規則として正しいものはどれですか。",
          "options": [
            "動詞：語尾の「u段」を「e段」に変えて「ば」（書く→書けば、食べる→食べれば） / い形容詞：「い」を「ければ」に変える（高い→高ければ、いい→良ければ）",
            "動詞にそのまま「ば」を付ける（書くば）",
            "動詞て形に「ば」を付ける（書いてば）",
            "過去形に「ば」を付ける（書いたば）"
          ],
          "answerIndex": 0,
          "explanation": "ば形は動詞のe段＋ば（五段・一段共通）、い形容詞は〜ければ（「いい」は「よければ」）となります。"
        },
        {
          "prompt": "【条件付き購入の判断】価格が安ければ買うという論理的仮定文を選択してください。",
          "options": [
            "値段がもう少し安ければ、ぜひ購入したいと考えております。",
            "値段が安いば、買いますでした。",
            "値段が安ければ、買いませんでした。",
            "値段を捨てれば買います。"
          ],
          "answerIndex": 0,
          "explanation": "「安ければ（い形容詞ば形）、〜購入したい」が論理的仮定条件です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ことわざ・論理的因果律】日々の努力の積み重ねを表す日本のことわざを選択してください。",
          "options": [
            "「塵（ちり）も積もれば山となる。」",
            "「塵が積もると山を食べろ。」",
            "「塵が積もったら山を壊せ。」",
            "「山が積もれば塵になる。」"
          ],
          "answerIndex": 0,
          "explanation": "「塵も積もれば山となる（わずかなものでも積み重なれば大きなものになる）」は「ば」を用いた代表的諺です。"
        },
        {
          "prompt": "【天候条件の仮定】「いい（良い）」の仮定形を用いた文として正しいものを選択してください。",
          "options": [
            "明日の天気が良ければ、山頂までハイキングに行きましょう。",
            "天気がいいければ、ハイキングに行きましょう。",
            "天気がよくば、ハイキングに行きましょう。",
            "天気がよかったば、行きます。"
          ],
          "answerIndex": 0,
          "explanation": "「いい」の仮定形は不規則で「良ければ（よければ）」となります。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "動詞「する」と「来る」の仮定形（ば形）の組み合わせとして正しいものはどれですか。",
          "options": [
            "する → すれば / 来る（くる） → 来れば（くれば）",
            "する → しれば / 来る → これば",
            "する → すれば / 来る → きれば",
            "する → したば / 来る → きたば"
          ],
          "answerIndex": 0,
          "explanation": "三類動詞のば形は「すれば」「来れば（くれば）」です。"
        },
        {
          "type": "typed-recall",
          "prompt": "形容詞「いい（良い）」のば形「よ＿＿＿（よければ）」の活用語尾を入力してください（ひらがな三文字）:",
          "acceptedAnswers": [
            "ければ",
            "ケレバ"
          ],
          "explanation": "よ【ければ】です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【「〜たら」の万能性と完了用法】「〜たら」の二大用法として正しい組み合わせはどれですか。",
          "options": [
            "「もし〜なら（仮定条件）」と「〜した後に（時間的順序・完了後の動作）」の両方に使え、文末に依頼・命令・意志を置ける。",
            "自然法則の不可避結果にしか使えない",
            "過去形にしか接続できず未来の仮定には使えない",
            "名詞にしか接続できない"
          ],
          "answerIndex": 0,
          "explanation": "「〜たら」は最も汎用性が高く、仮定（雨が降ったら）にも完了後の行動（駅に着いたら電話して）にも使え、後件の文末制約がありません。"
        },
        {
          "prompt": "【到着後の行動指示】成田空港に到着した後の連絡を依頼する文を選択してください。",
          "options": [
            "成田空港に到着したら、すぐにメッセージを送ってください。",
            "成田空港に到着すると、メッセージを送ってください（※不可）。",
            "成田空港に到着するなら、メッセージを送ってください。",
            "成田空港に到着したら、メッセージを消してください。"
          ],
          "answerIndex": 0,
          "explanation": "「到着した後に〜してください」という完了後の依頼には「〜たら」が唯一自然です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【仮定条件での依頼】もし時間が余ったら手伝ってほしいと頼む文を選択してください。",
          "options": [
            "もし時間が余ったら、こちらの資料作成を少し手伝っていただけますか。",
            "時間が余ると、手伝ってください。",
            "時間が余れば、手伝ってください（※後件に依頼はやや不自然）。",
            "時間を捨てたら手伝います。"
          ],
          "answerIndex": 0,
          "explanation": "後件に依頼（〜ていただけますか）を伴う仮定には「〜たら」が最も適しています。"
        },
        {
          "prompt": "【「〜たら」の接続形式】動詞「食べる」「飲む」の「たら形」の組み合わせとして正しいものはどれですか。",
          "options": [
            "食べた ＋ ら → 食べたら / 飲んだ ＋ ら → 飲んだら",
            "食べるたら / 飲むたら",
            "食べたらば / 飲みたらば",
            "食べてたら / 飲んでたら"
          ],
          "answerIndex": 0,
          "explanation": "「動詞た形 ＋ ら」で「食べたら」「飲んだら」となります。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "「〜と」「〜ば」「〜たら」「〜なら」の中で、後件に「〜てください（依頼）」「〜ましょう（勧誘）」「〜たい（希望）」を最も自然に自由に使える形式はどれですか。",
          "options": [
            "〜たら",
            "〜と",
            "〜ば",
            "すべて完全に同じ"
          ],
          "answerIndex": 0,
          "explanation": "「〜たら」は日常会話において後件に意志・依頼・命令・勧誘を制限なく使える最も汎用的な仮定形です。"
        },
        {
          "type": "typed-recall",
          "prompt": "動詞「いく（行く）」の「たら形」を入力してください（ひらがな四文字）:",
          "acceptedAnswers": [
            "いったら",
            "イッタラ",
            "行ったら"
          ],
          "explanation": "「行ったら（いったら）」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【「〜なら」の特異な機能】「〜なら」が持つ独自の機能・文脈として正しいものはどれですか。",
          "options": [
            "相手が口にした話題や前提を取り上げ、「それについて言うならば」と助言・判断・提案を述べる（話題の主題化・助言）。",
            "自然法則の不可避な結果を述べる",
            "過去に確定した事実の報告",
            "計算の掛け算を表す"
          ],
          "answerIndex": 0,
          "explanation": "「〜なら」は相手の提示した情報や意図を受け止め、「それなら〜がおすすめですよ」と助言・提案する際に最も頻繁に用いられます。"
        },
        {
          "prompt": "【観光アドバイスでの「〜なら」】京都旅行を計画している人への助言として適切な文を選択してください。",
          "options": [
            "日本文化や歴史を深く学びたいなら、京都の古刹を巡ることを強くお勧めいたします。",
            "京都へ行くと、歴史を学んでください。",
            "京都へ行けば、お勧めでした。",
            "京都へ行くなら、全部忘れろ。"
          ],
          "answerIndex": 0,
          "explanation": "「〜たいなら、〜をお勧めいたします」が相手の意向を受けた完璧な助言構文です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【時間的前後関係における「なら」と「たら」の相違】「日本へ行く前に買う」場合と「日本に着いた後に買う」場合の正しい使い分けはどれですか。",
          "options": [
            "日本へ行く【前】に買う＝「日本へ行く【なら】買っておいたほうがいい」 / 日本に到着した【後】に買う＝「日本に着い【たら】買う」",
            "どちらも全く同一の時間順序である",
            "日本へ行く前＝「行ったら」",
            "日本に着いた後＝「行くなら」"
          ],
          "answerIndex": 0,
          "explanation": "「なら」は前件の動作が完了する前（出発前）に助言できますが、「たら」は前件が完了した後（到着後）の動作を表します。"
        },
        {
          "prompt": "【店舗・商品のおすすめ対話】「美味しい海鮮料理を食べたい」と言う相手への返答を選択してください。",
          "options": [
            "「新鮮な海鮮料理なら、駅前の魚市場の中にある食堂が一番安くて美味しいですよ。」",
            "「海鮮料理を食べると、食堂を壊してください。」",
            "「海鮮料理を食べたら、魚を海に返します。」",
            "「魚は知りません。」"
          ],
          "answerIndex": 0,
          "explanation": "名詞に「なら」を直接接続し（海鮮料理なら）、「〜が一番ですよ」と推薦するのが定型です。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "名詞「カメラ」に条件助詞「なら」を接続する際の正しい形はどれですか。",
          "options": [
            "カメラなら（名詞にそのまま「なら」を付ける）",
            "カメラだなら",
            "カメラななら",
            "カメラであるなら（または カメラなら）"
          ],
          "answerIndex": 0,
          "explanation": "名詞・な形容詞語幹には助動詞「だ」を付けずに直接「〜なら」が接続します（例：カメラなら、静かなら）。"
        },
        {
          "type": "typed-recall",
          "prompt": "話題の取り上げや助言を表す条件助詞「〜＿＿＿（なら）」のひらがな二文字を入力してください:",
          "acceptedAnswers": [
            "なら",
            "ナラ"
          ],
          "explanation": "「なら」です。"
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
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【四大条件表現の総括比較】「と・ば・たら・なら」の核心的役割の正しい組み合わせはどれですか。",
          "options": [
            "「と」＝必然・自然現象 / 「ば」＝論理的仮定 / 「たら」＝個別仮定・完了後動作・依頼 / 「なら」＝話題の受容・助言",
            "「と」＝命令 / 「ば」＝過去形 / 「たら」＝禁止 / 「なら」＝疑問",
            "すべて完全に交換可能で違いはない",
            "「なら」しか日常会話で使われない"
          ],
          "answerIndex": 0,
          "explanation": "日本語の四大条件表現は「と（必然）」「ば（論理）」「たら（完了・個別・依頼）」「なら（話題・助言）」と明確に機能分担されています。"
        },
        {
          "prompt": "【文脈に応じた適切な条件形式の選択】「薬を飲んだら熱が下がった」という一回限りの過去の事実の発見を表す正しい形式はどれですか。",
          "options": [
            "薬を飲んだら、熱が下がりました。（※「〜たら」による過去の事実発見）",
            "薬を飲むと、熱が下がりましたでした。",
            "薬を飲めば、熱が下がりました（※不可）。",
            "薬を飲むなら、熱が下がりました（※不可）。"
          ],
          "answerIndex": 0,
          "explanation": "「〜たら…た」は「〜したところ、予期せぬ結果を発見した」という確定事実の発見を表す重要構文です。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【総合対話での使い分け演習】友人との旅行計画における自然な対話を選択してください。",
          "options": [
            "A：「温泉に行くなら箱根がいいよ。」 B：「じゃあ、宿に着いたらまず露天風呂に入ろう。」",
            "A：「温泉に行くと箱根をください。」 B：「宿に着けば露天風呂を壊そう。」",
            "A：「温泉に行ったら箱根を話せ。」 B：「宿に着くなら露天風呂を飲もう。」",
            "A：「温泉は行かない。」 B：「旅館を燃やそう。」"
          ],
          "answerIndex": 0,
          "explanation": "話題助言の「なら」と到着後行動の「たら」が見事に調和した自然な会話です。"
        },
        {
          "prompt": "【ことわざと慣用表現における「ば」と「と」】普遍的真理を表す表現として最も適切な文を選択してください。",
          "options": [
            "「雨降って地固まる（降れば固まる）」「時は金なり（時間を大切にすれば成功する）」",
            "「雨降ったら地を壊せ」",
            "「時間が来るとお金を捨てろ」",
            "「何もするな」"
          ],
          "answerIndex": 0,
          "explanation": "ことわざや教訓では論理的真理を表す「ば」や必然の「と」が格調高く用いられます。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "四大条件表現を正しくマスターした学習者が、駅での待ち合わせで同僚に送るメッセージとして最も自然なものはどれですか。",
          "options": [
            "「改札口に着いたら連絡してください。南口のカフェで待っています。」",
            "「改札口に着くと連絡してください。」",
            "「改札口に着けば連絡してください。」",
            "「改札口に着くなら連絡してください。」"
          ],
          "answerIndex": 0,
          "explanation": "「〜した後に〜してください」という依頼には「〜たら」が唯一文法的に正しく自然です。"
        },
        {
          "type": "typed-recall",
          "prompt": "四大条件表現「たら」「なら」「ば」「と」のうち、相手の話題を受けて助言する際に使う助詞「＿＿＿（なら）」を入力してください:",
          "acceptedAnswers": [
            "なら",
            "ナラ"
          ],
          "explanation": "「なら」です。"
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
      "mnemonics": [],
      "culturalNotes": []
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
  var CURRICULUM = {
    subject: 'japanese',
    units: UNITS,
    lessons: LESSONS
  };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['japanese'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
