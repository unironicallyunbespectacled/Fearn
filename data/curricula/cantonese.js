// cantonese curriculum — fully authored CEFR A1-C2 roadmap
(function (global) {
  'use strict';
  var UNITS = [
    {
        "id": "hk-u1",
        "unit": 1,
        "title": "粵拼發音同基本問候 (Jyutping & Greetings)",
        "level": "A1",
        "goal": "Mastery of 日常生活問候同打招呼 (Greetings & Jyutping).",
        "lessonIds": [
            "hk-u1-l1",
            "hk-u1-l2",
            "hk-u1-l3",
            "hk-u1-l4",
            "hk-u1-l5"
        ]
    },
    {
        "id": "hk-u2",
        "unit": 2,
        "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences)",
        "level": "A1",
        "goal": "Mastery of 我你佢人稱代詞 (Pronouns & Basic Syntax).",
        "lessonIds": [
            "hk-u2-l1",
            "hk-u2-l2",
            "hk-u2-l3",
            "hk-u2-l4",
            "hk-u2-l5"
        ]
    },
    {
        "id": "hk-u3",
        "unit": 3,
        "title": "數字、時間同日期 (Numbers, Time & Date)",
        "level": "A1",
        "goal": "Mastery of 時間同日子表達 (Time, Numbers & Days).",
        "lessonIds": [
            "hk-u3-l1",
            "hk-u3-l2",
            "hk-u3-l3",
            "hk-u3-l4",
            "hk-u3-l5"
        ]
    },
    {
        "id": "hk-u4",
        "unit": 4,
        "title": "量詞同名詞修飾 (Classifiers & Noun Modification)",
        "level": "A1",
        "goal": "Mastery of 廣東話量詞系統 (Classifiers: 個/隻/條).",
        "lessonIds": [
            "hk-u4-l1",
            "hk-u4-l2",
            "hk-u4-l3",
            "hk-u4-l4",
            "hk-u4-l5"
        ]
    },
    {
        "id": "hk-u5",
        "unit": 5,
        "title": "日常動詞同現在進行式 (Daily Verbs & Continuous 緊)",
        "level": "A1",
        "goal": "Mastery of 進行態動態助詞緊 (Continuous Aspect 緊).",
        "lessonIds": [
            "hk-u5-l1",
            "hk-u5-l2",
            "hk-u5-l3",
            "hk-u5-l4",
            "hk-u5-l5"
        ]
    },
    {
        "id": "hk-u6",
        "unit": 6,
        "title": "完成體態：咗同埋完 (Perfective Aspect 咗 & 完)",
        "level": "A2",
        "goal": "Mastery of 完成態咗同完 (Perfective 咗/完).",
        "lessonIds": [
            "hk-u6-l1",
            "hk-u6-l2",
            "hk-u6-l3",
            "hk-u6-l4",
            "hk-u6-l5"
        ]
    },
    {
        "id": "hk-u7",
        "unit": 7,
        "title": "經歷體態：過 (Experiential Aspect 過)",
        "level": "A2",
        "goal": "Mastery of 經歷態過嘅用法 (Experiential Aspect 過).",
        "lessonIds": [
            "hk-u7-l1",
            "hk-u7-l2",
            "hk-u7-l3",
            "hk-u7-l4",
            "hk-u7-l5"
        ]
    },
    {
        "id": "hk-u8",
        "unit": 8,
        "title": "否定詞：唔、冇、未 (Negation Patterns)",
        "level": "A2",
        "goal": "Mastery of 否定詞唔冇未辨析 (Negation: 唔/冇/未).",
        "lessonIds": [
            "hk-u8-l1",
            "hk-u8-l2",
            "hk-u8-l3",
            "hk-u8-l4",
            "hk-u8-l5"
        ]
    },
    {
        "id": "hk-u9",
        "unit": 9,
        "title": "飲茶同廣東飲食文化 (Yum Cha & Dining)",
        "level": "A2",
        "goal": "Mastery of 茶樓點心同飲茶文化 (Yum Cha & Dim Sum).",
        "lessonIds": [
            "hk-u9-l1",
            "hk-u9-l2",
            "hk-u9-l3",
            "hk-u9-l4",
            "hk-u9-l5"
        ]
    },
    {
        "id": "hk-u10",
        "unit": 10,
        "title": "買嘢同街市討價還價 (Shopping & Bargaining)",
        "level": "A2",
        "goal": "Mastery of 街市買餸同問價錢 (Shopping & Bargaining).",
        "lessonIds": [
            "hk-u10-l1",
            "hk-u10-l2",
            "hk-u10-l3",
            "hk-u10-l4",
            "hk-u10-l5"
        ]
    },
    {
        "id": "hk-u11",
        "unit": 11,
        "title": "方位詞同搭車指路 (Directions & Transit)",
        "level": "B1",
        "goal": "Mastery of 搭地鐵同問路方向 (Directions & Transit).",
        "lessonIds": [
            "hk-u11-l1",
            "hk-u11-l2",
            "hk-u11-l3",
            "hk-u11-l4",
            "hk-u11-l5"
        ]
    },
    {
        "id": "hk-u12",
        "unit": 12,
        "title": "形容詞重疊同程度副詞 (Adjective Reduplication)",
        "level": "B1",
        "goal": "Mastery of 形容詞同程度副詞 (Degree & Reduplication).",
        "lessonIds": [
            "hk-u12-l1",
            "hk-u12-l2",
            "hk-u12-l3",
            "hk-u12-l4",
            "hk-u12-l5"
        ]
    },
    {
        "id": "hk-u13",
        "unit": 13,
        "title": "動態助詞同語氣助詞 (Particles 啦/喎/㗎)",
        "level": "B1",
        "goal": "Mastery of 句末語氣助詞系統 (Sentence Particles 啦/㗎/喎).",
        "lessonIds": [
            "hk-u13-l1",
            "hk-u13-l2",
            "hk-u13-l3",
            "hk-u13-l4",
            "hk-u13-l5"
        ]
    },
    {
        "id": "hk-u14",
        "unit": 14,
        "title": "比較句：貴過同最靚 (Comparatives)",
        "level": "B1",
        "goal": "Mastery of 比較句式過同最 (Comparatives: 貴過/最靚).",
        "lessonIds": [
            "hk-u14-l1",
            "hk-u14-l2",
            "hk-u14-l3",
            "hk-u14-l4",
            "hk-u14-l5"
        ]
    },
    {
        "id": "hk-u15",
        "unit": 15,
        "title": "可能補語：做得切同睇唔明 (Potential Complements)",
        "level": "B1",
        "goal": "Mastery of 可能補語得同唔 (Potential Complements 得/唔).",
        "lessonIds": [
            "hk-u15-l1",
            "hk-u15-l2",
            "hk-u15-l3",
            "hk-u15-l4",
            "hk-u15-l5"
        ]
    },
    {
        "id": "hk-u16",
        "unit": 16,
        "title": "結果補語：睇見同搵到 (Resultative Complements)",
        "level": "B1",
        "goal": "Mastery of 結果補語見同到 (Resultative: 睇見/搵到).",
        "lessonIds": [
            "hk-u16-l1",
            "hk-u16-l2",
            "hk-u16-l3",
            "hk-u16-l4",
            "hk-u16-l5"
        ]
    },
    {
        "id": "hk-u17",
        "unit": 17,
        "title": "被動句同處置句 (Passive & Disposal)",
        "level": "B2",
        "goal": "Mastery of 被動句畀同處置句將 (Passive 畀 & Disposal 將).",
        "lessonIds": [
            "hk-u17-l1",
            "hk-u17-l2",
            "hk-u17-l3",
            "hk-u17-l4",
            "hk-u17-l5"
        ]
    },
    {
        "id": "hk-u18",
        "unit": 18,
        "title": "條件句：如果...就 (Conditionals)",
        "level": "B2",
        "goal": "Mastery of 條件假設句式 (Conditionals: 如果...就).",
        "lessonIds": [
            "hk-u18-l1",
            "hk-u18-l2",
            "hk-u18-l3",
            "hk-u18-l4",
            "hk-u18-l5"
        ]
    },
    {
        "id": "hk-u19",
        "unit": 19,
        "title": "因果同轉折連詞 (Causal & Concessive)",
        "level": "B2",
        "goal": "Mastery of 因果轉折關聯詞 (Connectors: 因為/所以/但係).",
        "lessonIds": [
            "hk-u19-l1",
            "hk-u19-l2",
            "hk-u19-l3",
            "hk-u19-l4",
            "hk-u19-l5"
        ]
    },
    {
        "id": "hk-u20",
        "unit": 20,
        "title": "職場辦公同商務電郵 (Workplace & Business)",
        "level": "B2",
        "goal": "Mastery of 辦公室溝通同電郵 (Workplace Communication).",
        "lessonIds": [
            "hk-u20-l1",
            "hk-u20-l2",
            "hk-u20-l3",
            "hk-u20-l4",
            "hk-u20-l5"
        ]
    },
    {
        "id": "hk-u21",
        "unit": 21,
        "title": "睇醫生同健康醫療 (Medical Consultations)",
        "level": "B2",
        "goal": "Mastery of 睇醫生同身體狀況 (Medical Consultations).",
        "lessonIds": [
            "hk-u21-l1",
            "hk-u21-l2",
            "hk-u21-l3",
            "hk-u21-l4",
            "hk-u21-l5"
        ]
    },
    {
        "id": "hk-u22",
        "unit": 22,
        "title": "房屋租賃同地產合約 (Real Estate & Tenancy)",
        "level": "B2",
        "goal": "Mastery of 租屋地產同合約 (Tenancy & Real Estate).",
        "lessonIds": [
            "hk-u22-l1",
            "hk-u22-l2",
            "hk-u22-l3",
            "hk-u22-l4",
            "hk-u22-l5"
        ]
    },
    {
        "id": "hk-u23",
        "unit": 23,
        "title": "銀行投資同金融財經 (Banking & Finance)",
        "level": "B2",
        "goal": "Mastery of 銀行開戶同投資理財 (Banking & Finance).",
        "lessonIds": [
            "hk-u23-l1",
            "hk-u23-l2",
            "hk-u23-l3",
            "hk-u23-l4",
            "hk-u23-l5"
        ]
    },
    {
        "id": "hk-u24",
        "unit": 24,
        "title": "廣東歌同香港影視文化 (Canto-pop & Cinema)",
        "level": "B2",
        "goal": "Mastery of 廣東歌同影視藝術 (Canto-pop & Film).",
        "lessonIds": [
            "hk-u24-l1",
            "hk-u24-l2",
            "hk-u24-l3",
            "hk-u24-l4",
            "hk-u24-l5"
        ]
    },
    {
        "id": "hk-u25",
        "unit": 25,
        "title": "香港潮語同網絡文化 (Colloquial & Slang)",
        "level": "C1",
        "goal": "Mastery of 地道香港潮語 (Colloquial HK Slang).",
        "lessonIds": [
            "hk-u25-l1",
            "hk-u25-l2",
            "hk-u25-l3",
            "hk-u25-l4",
            "hk-u25-l5"
        ]
    },
    {
        "id": "hk-u26",
        "unit": 26,
        "title": "新聞報道同社會時事 (Journalism & Public Affairs)",
        "level": "C1",
        "goal": "Mastery of 新聞報道同社會時事 (News & Current Affairs).",
        "lessonIds": [
            "hk-u26-l1",
            "hk-u26-l2",
            "hk-u26-l3",
            "hk-u26-l4",
            "hk-u26-l5"
        ]
    },
    {
        "id": "hk-u27",
        "unit": 27,
        "title": "法律訴訟同商業合約 (Legal Terminology)",
        "level": "C1",
        "goal": "Mastery of 法律訴訟同合約條款 (Legal Terminology).",
        "lessonIds": [
            "hk-u27-l1",
            "hk-u27-l2",
            "hk-u27-l3",
            "hk-u27-l4",
            "hk-u27-l5"
        ]
    },
    {
        "id": "hk-u28",
        "unit": 28,
        "title": "傳統中醫同養生哲學 (TCM & Wellness)",
        "level": "C1",
        "goal": "Mastery of 中醫經絡同食療養生 (Traditional Chinese Medicine).",
        "lessonIds": [
            "hk-u28-l1",
            "hk-u28-l2",
            "hk-u28-l3",
            "hk-u28-l4",
            "hk-u28-l5"
        ]
    },
    {
        "id": "hk-u29",
        "unit": 29,
        "title": "環境保護同都市規劃 (Ecology & Urban Planning)",
        "level": "C1",
        "goal": "Mastery of 環境保護同城市發展 (Ecology & Planning).",
        "lessonIds": [
            "hk-u29-l1",
            "hk-u29-l2",
            "hk-u29-l3",
            "hk-u29-l4",
            "hk-u29-l5"
        ]
    },
    {
        "id": "hk-u30",
        "unit": 30,
        "title": "粵劇藝術同傳統曲藝 (Cantonese Opera)",
        "level": "C1",
        "goal": "Mastery of 粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts).",
        "lessonIds": [
            "hk-u30-l1",
            "hk-u30-l2",
            "hk-u30-l3",
            "hk-u30-l4",
            "hk-u30-l5"
        ]
    },
    {
        "id": "hk-u31",
        "unit": 31,
        "title": "嶺南歷史同民俗文化 (Lingnan History & Folk)",
        "level": "C2",
        "goal": "Mastery of 嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage).",
        "lessonIds": [
            "hk-u31-l1",
            "hk-u31-l2",
            "hk-u31-l3",
            "hk-u31-l4",
            "hk-u31-l5"
        ]
    },
    {
        "id": "hk-u32",
        "unit": 32,
        "title": "學術演講同深度論文 (Academic Research)",
        "level": "C2",
        "goal": "Mastery of 學術研討同論文發表 (Academic Research & Debates).",
        "lessonIds": [
            "hk-u32-l1",
            "hk-u32-l2",
            "hk-u32-l3",
            "hk-u32-l4",
            "hk-u32-l5"
        ]
    },
    {
        "id": "hk-u33",
        "unit": 33,
        "title": "國際外交同跨國商貿 (Diplomacy & Trade)",
        "level": "C2",
        "goal": "Mastery of 國際商貿同雙邊談判 (Global Trade Negotiations).",
        "lessonIds": [
            "hk-u33-l1",
            "hk-u33-l2",
            "hk-u33-l3",
            "hk-u33-l4",
            "hk-u33-l5"
        ]
    },
    {
        "id": "hk-u34",
        "unit": 34,
        "title": "高級粵語綜合修辭與鑑賞 (C2 Capstone Mastery)",
        "level": "C2",
        "goal": "Mastery of 高級粵語修辭鑑賞 (C2 Capstone Mastery).",
        "lessonIds": [
            "hk-u34-l1",
            "hk-u34-l2",
            "hk-u34-l3",
            "hk-u34-l4",
            "hk-u34-l5"
        ]
    }
];
  var LESSONS = {
    "hk-u1-l1": {
        "id": "hk-u1-l1",
        "subject": "cantonese",
        "unit": 1,
        "lessonNumber": 1,
        "title": "粵拼發音同基本問候 (Jyutping & Greetings) (第1課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：香港語言學學會粵拼方案（十九個聲母、五十六個韻母、九聲六調）、入聲韻尾（-p/-t/-k）同日常打招呼。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u1-l1）系統深入地探討「粵拼發音同基本問候 (Jyutping & Greetings)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "早晨啊，陳先生，今日好高興喺度見到你。",
                    "r": "Zou2 san4 aa3, Can4 sin1 saang1, gam1 yat6 hou2 gou1 hing3 hai2 dou6 gin3 dou2 nei5.",
                    "tr": "Good morning, Mr. Chan, very glad to see you here today."
                },
                {
                    "t": "唔該晒你呀，幫咗我咁大個忙，真係唔好意思。",
                    "r": "M4 goi1 saai3 nei5 aa3, bong1 zo2 ngo5 gam3 daai6 go3 mong4, zan1 hai6 m4 hou2 yi3 si3.",
                    "tr": "Thank you so much for helping me so much, really sorry for the trouble."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「粵拼發音同基本問候 (Jyutping & Greetings) (第1課)」嘅標準規範？",
                    "options": [
                        "早晨啊，陳先生，今日好高興喺度見到你。",
                        "早晨啊，陳先生，今日好高興喺度見到你。（錯配語序與字詞）",
                        "唔該晒你呀，幫咗我咁大個忙，真係唔好意思。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「早晨啊，陳先生，今日好高興喺度見到你。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "唔該晒你呀，幫咗我咁大個忙，真係唔好意思。",
                        "唔該晒你呀，幫咗我咁大個忙，真係唔好意思。（虛詞缺失不合規範）",
                        "多謝你送畀我嘅生日禮物，我好鍾意呀。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「唔該晒你呀，幫咗我咁大個忙，真係唔好意思。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「粵拼發音同基本問候 (Jyutping & Greetings)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 1-1）：",
                    "options": [
                        "早晨啊，陳先生，今日好高興喺度見到你。",
                        "早晨啊，陳先生，今日好高興喺度見到你。（主謂語序顛倒）",
                        "唔該晒你呀，幫咗我咁大個忙，真係唔好意思。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u1-l1）嘅核心關鍵詞（例如「粵拼發音」）：",
                    "acceptedAnswers": [
                        "粵拼發音",
                        "粵拼發音同基",
                        "粵拼發音同基本問候"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「粵拼發音」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u1-l2": {
        "id": "hk-u1-l2",
        "subject": "cantonese",
        "unit": 1,
        "lessonNumber": 2,
        "title": "粵拼發音同基本問候 (Jyutping & Greetings) (第2課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：香港語言學學會粵拼方案（十九個聲母、五十六個韻母、九聲六調）、入聲韻尾（-p/-t/-k）同日常打招呼。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u1-l2）系統深入地探討「粵拼發音同基本問候 (Jyutping & Greetings)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "唔該晒你呀，幫咗我咁大個忙，真係唔好意思。",
                    "r": "M4 goi1 saai3 nei5 aa3, bong1 zo2 ngo5 gam3 daai6 go3 mong4, zan1 hai6 m4 hou2 yi3 si3.",
                    "tr": "Thank you so much for helping me so much, really sorry for the trouble."
                },
                {
                    "t": "多謝你送畀我嘅生日禮物，我好鍾意呀。",
                    "r": "Do1 ze6 nei5 sung3 bei2 ngo5 ge3 saang1 yat6 lai5 mat6, ngo5 hou2 zung1 yi3 aa3.",
                    "tr": "Thank you for the birthday gift you gave me, I like it very much."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「粵拼發音同基本問候 (Jyutping & Greetings) (第2課)」嘅標準規範？",
                    "options": [
                        "唔該晒你呀，幫咗我咁大個忙，真係唔好意思。",
                        "唔該晒你呀，幫咗我咁大個忙，真係唔好意思。（錯配語序與字詞）",
                        "多謝你送畀我嘅生日禮物，我好鍾意呀。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「唔該晒你呀，幫咗我咁大個忙，真係唔好意思。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "多謝你送畀我嘅生日禮物，我好鍾意呀。",
                        "多謝你送畀我嘅生日禮物，我好鍾意呀。（虛詞缺失不合規範）",
                        "拜拜，聽日下晝我哋喺公司門口再等啦。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「多謝你送畀我嘅生日禮物，我好鍾意呀。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「粵拼發音同基本問候 (Jyutping & Greetings)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 1-2）：",
                    "options": [
                        "唔該晒你呀，幫咗我咁大個忙，真係唔好意思。",
                        "唔該晒你呀，幫咗我咁大個忙，真係唔好意思。（主謂語序顛倒）",
                        "多謝你送畀我嘅生日禮物，我好鍾意呀。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u1-l2）嘅核心關鍵詞（例如「粵拼發音」）：",
                    "acceptedAnswers": [
                        "粵拼發音",
                        "粵拼發音同基",
                        "粵拼發音同基本問候"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「粵拼發音」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u1-l3": {
        "id": "hk-u1-l3",
        "subject": "cantonese",
        "unit": 1,
        "lessonNumber": 3,
        "title": "粵拼發音同基本問候 (Jyutping & Greetings) (第3課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：香港語言學學會粵拼方案（十九個聲母、五十六個韻母、九聲六調）、入聲韻尾（-p/-t/-k）同日常打招呼。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u1-l3）系統深入地探討「粵拼發音同基本問候 (Jyutping & Greetings)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "多謝你送畀我嘅生日禮物，我好鍾意呀。",
                    "r": "Do1 ze6 nei5 sung3 bei2 ngo5 ge3 saang1 yat6 lai5 mat6, ngo5 hou2 zung1 yi3 aa3.",
                    "tr": "Thank you for the birthday gift you gave me, I like it very much."
                },
                {
                    "t": "拜拜，聽日下晝我哋喺公司門口再等啦。",
                    "r": "Baai1 baai3, ting1 yat6 haa6 zau3 ngo5 dei6 hai2 gung1 si1 mun4 hau2 zoi3 dang2 laa1.",
                    "tr": "Bye-bye, let's wait at the company entrance tomorrow afternoon."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「粵拼發音同基本問候 (Jyutping & Greetings) (第3課)」嘅標準規範？",
                    "options": [
                        "多謝你送畀我嘅生日禮物，我好鍾意呀。",
                        "多謝你送畀我嘅生日禮物，我好鍾意呀。（錯配語序與字詞）",
                        "拜拜，聽日下晝我哋喺公司門口再等啦。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「多謝你送畀我嘅生日禮物，我好鍾意呀。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "拜拜，聽日下晝我哋喺公司門口再等啦。",
                        "拜拜，聽日下晝我哋喺公司門口再等啦。（虛詞缺失不合規範）",
                        "歡迎你嚟到香港玩，今晚請你食地道海鮮。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「拜拜，聽日下晝我哋喺公司門口再等啦。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「粵拼發音同基本問候 (Jyutping & Greetings)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 1-3）：",
                    "options": [
                        "多謝你送畀我嘅生日禮物，我好鍾意呀。",
                        "多謝你送畀我嘅生日禮物，我好鍾意呀。（主謂語序顛倒）",
                        "拜拜，聽日下晝我哋喺公司門口再等啦。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u1-l3）嘅核心關鍵詞（例如「粵拼發音」）：",
                    "acceptedAnswers": [
                        "粵拼發音",
                        "粵拼發音同基",
                        "粵拼發音同基本問候"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「粵拼發音」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u1-l4": {
        "id": "hk-u1-l4",
        "subject": "cantonese",
        "unit": 1,
        "lessonNumber": 4,
        "title": "粵拼發音同基本問候 (Jyutping & Greetings) (第4課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：香港語言學學會粵拼方案（十九個聲母、五十六個韻母、九聲六調）、入聲韻尾（-p/-t/-k）同日常打招呼。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u1-l4）系統深入地探討「粵拼發音同基本問候 (Jyutping & Greetings)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "拜拜，聽日下晝我哋喺公司門口再等啦。",
                    "r": "Baai1 baai3, ting1 yat6 haa6 zau3 ngo5 dei6 hai2 gung1 si1 mun4 hau2 zoi3 dang2 laa1.",
                    "tr": "Bye-bye, let's wait at the company entrance tomorrow afternoon."
                },
                {
                    "t": "歡迎你嚟到香港玩，今晚請你食地道海鮮。",
                    "r": "Fun1 ying4 nei5 lai4 dou3 Heung1 Gong2 waan2, gam1 maan5 ceng2 nei5 sik6 dei6 dou6 hoi2 sin1.",
                    "tr": "Welcome to Hong Kong, treat you to authentic seafood tonight."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「粵拼發音同基本問候 (Jyutping & Greetings) (第4課)」嘅標準規範？",
                    "options": [
                        "拜拜，聽日下晝我哋喺公司門口再等啦。",
                        "拜拜，聽日下晝我哋喺公司門口再等啦。（錯配語序與字詞）",
                        "歡迎你嚟到香港玩，今晚請你食地道海鮮。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「拜拜，聽日下晝我哋喺公司門口再等啦。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "歡迎你嚟到香港玩，今晚請你食地道海鮮。",
                        "歡迎你嚟到香港玩，今晚請你食地道海鮮。（虛詞缺失不合規範）",
                        "呢個男仔好聰明，讀書成績一路都好優秀。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「歡迎你嚟到香港玩，今晚請你食地道海鮮。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「粵拼發音同基本問候 (Jyutping & Greetings)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 1-4）：",
                    "options": [
                        "拜拜，聽日下晝我哋喺公司門口再等啦。",
                        "拜拜，聽日下晝我哋喺公司門口再等啦。（主謂語序顛倒）",
                        "歡迎你嚟到香港玩，今晚請你食地道海鮮。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u1-l4）嘅核心關鍵詞（例如「粵拼發音」）：",
                    "acceptedAnswers": [
                        "粵拼發音",
                        "粵拼發音同基",
                        "粵拼發音同基本問候"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「粵拼發音」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u1-l5": {
        "id": "hk-u1-l5",
        "subject": "cantonese",
        "unit": 1,
        "lessonNumber": 5,
        "title": "粵拼發音同基本問候 (Jyutping & Greetings) (第5課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：香港語言學學會粵拼方案（十九個聲母、五十六個韻母、九聲六調）、入聲韻尾（-p/-t/-k）同日常打招呼。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u1-l5）系統深入地探討「粵拼發音同基本問候 (Jyutping & Greetings)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "歡迎你嚟到香港玩，今晚請你食地道海鮮。",
                    "r": "Fun1 ying4 nei5 lai4 dou3 Heung1 Gong2 waan2, gam1 maan5 ceng2 nei5 sik6 dei6 dou6 hoi2 sin1.",
                    "tr": "Welcome to Hong Kong, treat you to authentic seafood tonight."
                },
                {
                    "t": "呢個男仔好聰明，讀書成績一路都好優秀。",
                    "r": "Ni1 go3 naam4 zai2 hou2 cung1 ming4, duk6 syu1 sing4 zik1 yat1 lou6 dou1 hou2 yau1 sau3.",
                    "tr": "This boy is very smart, his study grades have always been excellent."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「粵拼發音同基本問候 (Jyutping & Greetings) (第5課)」嘅標準規範？",
                    "options": [
                        "歡迎你嚟到香港玩，今晚請你食地道海鮮。",
                        "歡迎你嚟到香港玩，今晚請你食地道海鮮。（錯配語序與字詞）",
                        "呢個男仔好聰明，讀書成績一路都好優秀。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「歡迎你嚟到香港玩，今晚請你食地道海鮮。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "呢個男仔好聰明，讀書成績一路都好優秀。",
                        "呢個男仔好聰明，讀書成績一路都好優秀。（虛詞缺失不合規範）",
                        "嗰班女仔喺禮堂度練習緊合唱同跳舞。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「呢個男仔好聰明，讀書成績一路都好優秀。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「粵拼發音同基本問候 (Jyutping & Greetings)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 1-5）：",
                    "options": [
                        "歡迎你嚟到香港玩，今晚請你食地道海鮮。",
                        "歡迎你嚟到香港玩，今晚請你食地道海鮮。（主謂語序顛倒）",
                        "呢個男仔好聰明，讀書成績一路都好優秀。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u1-l5）嘅核心關鍵詞（例如「粵拼發音」）：",
                    "acceptedAnswers": [
                        "粵拼發音",
                        "粵拼發音同基",
                        "粵拼發音同基本問候"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「粵拼發音」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u2-l1": {
        "id": "hk-u2-l1",
        "subject": "cantonese",
        "unit": 2,
        "lessonNumber": 1,
        "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (第1課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語人稱代詞（我/你/佢/我哋/你哋/佢哋）、係字句判斷結構、名詞謂語句同否定副詞「唔」。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u2-l1）系統深入地探討「人稱代詞同基本句式 (Pronouns & Basic Sentences)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "呢個男仔好聰明，讀書成績一路都好優秀。",
                    "r": "Ni1 go3 naam4 zai2 hou2 cung1 ming4, duk6 syu1 sing4 zik1 yat1 lou6 dou1 hou2 yau1 sau3.",
                    "tr": "This boy is very smart, his study grades have always been excellent."
                },
                {
                    "t": "嗰班女仔喺禮堂度練習緊合唱同跳舞。",
                    "r": "Go2 baan1 neoi5 zai2 hai2 lai5 tong4 dou6 lin6 zaap6 gan2 hap6 coeng3 tung4 tiu3 mou5.",
                    "tr": "That group of girls is practicing choir and dance in the hall."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「人稱代詞同基本句式 (Pronouns & Basic Sentences) (第1課)」嘅標準規範？",
                    "options": [
                        "呢個男仔好聰明，讀書成績一路都好優秀。",
                        "呢個男仔好聰明，讀書成績一路都好優秀。（錯配語序與字詞）",
                        "嗰班女仔喺禮堂度練習緊合唱同跳舞。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「呢個男仔好聰明，讀書成績一路都好優秀。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "嗰班女仔喺禮堂度練習緊合唱同跳舞。",
                        "嗰班女仔喺禮堂度練習緊合唱同跳舞。（虛詞缺失不合規範）",
                        "呢本小說我睇咗大半，情節真係好吸引人。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「嗰班女仔喺禮堂度練習緊合唱同跳舞。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「人稱代詞同基本句式 (Pronouns & Basic Sentences)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 2-1）：",
                    "options": [
                        "呢個男仔好聰明，讀書成績一路都好優秀。",
                        "呢個男仔好聰明，讀書成績一路都好優秀。（主謂語序顛倒）",
                        "嗰班女仔喺禮堂度練習緊合唱同跳舞。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u2-l1）嘅核心關鍵詞（例如「人稱代詞」）：",
                    "acceptedAnswers": [
                        "人稱代詞",
                        "人稱代詞同基",
                        "人稱代詞同基本句式"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「人稱代詞」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u2-l2": {
        "id": "hk-u2-l2",
        "subject": "cantonese",
        "unit": 2,
        "lessonNumber": 2,
        "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (第2課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語人稱代詞（我/你/佢/我哋/你哋/佢哋）、係字句判斷結構、名詞謂語句同否定副詞「唔」。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u2-l2）系統深入地探討「人稱代詞同基本句式 (Pronouns & Basic Sentences)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "嗰班女仔喺禮堂度練習緊合唱同跳舞。",
                    "r": "Go2 baan1 neoi5 zai2 hai2 lai5 tong4 dou6 lin6 zaap6 gan2 hap6 coeng3 tung4 tiu3 mou5.",
                    "tr": "That group of girls is practicing choir and dance in the hall."
                },
                {
                    "t": "呢本小說我睇咗大半，情節真係好吸引人。",
                    "r": "Ni1 bun2 siu2 syut3 ngo5 tai2 zo2 daai6 bun3, cing4 zit3 zan1 hai6 hou2 kap1 yan5 yan4.",
                    "tr": "I have read more than half of this novel, the plot is really attractive."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「人稱代詞同基本句式 (Pronouns & Basic Sentences) (第2課)」嘅標準規範？",
                    "options": [
                        "嗰班女仔喺禮堂度練習緊合唱同跳舞。",
                        "嗰班女仔喺禮堂度練習緊合唱同跳舞。（錯配語序與字詞）",
                        "呢本小說我睇咗大半，情節真係好吸引人。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「嗰班女仔喺禮堂度練習緊合唱同跳舞。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "呢本小說我睇咗大半，情節真係好吸引人。",
                        "呢本小說我睇咗大半，情節真係好吸引人。（虛詞缺失不合規範）",
                        "嗰部新出嘅手機影相功能好清晰同方便。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「呢本小說我睇咗大半，情節真係好吸引人。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「人稱代詞同基本句式 (Pronouns & Basic Sentences)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 2-2）：",
                    "options": [
                        "嗰班女仔喺禮堂度練習緊合唱同跳舞。",
                        "嗰班女仔喺禮堂度練習緊合唱同跳舞。（主謂語序顛倒）",
                        "呢本小說我睇咗大半，情節真係好吸引人。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u2-l2）嘅核心關鍵詞（例如「人稱代詞」）：",
                    "acceptedAnswers": [
                        "人稱代詞",
                        "人稱代詞同基",
                        "人稱代詞同基本句式"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「人稱代詞」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u2-l3": {
        "id": "hk-u2-l3",
        "subject": "cantonese",
        "unit": 2,
        "lessonNumber": 3,
        "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (第3課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語人稱代詞（我/你/佢/我哋/你哋/佢哋）、係字句判斷結構、名詞謂語句同否定副詞「唔」。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u2-l3）系統深入地探討「人稱代詞同基本句式 (Pronouns & Basic Sentences)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "呢本小說我睇咗大半，情節真係好吸引人。",
                    "r": "Ni1 bun2 siu2 syut3 ngo5 tai2 zo2 daai6 bun3, cing4 zit3 zan1 hai6 hou2 kap1 yan5 yan4.",
                    "tr": "I have read more than half of this novel, the plot is really attractive."
                },
                {
                    "t": "嗰部新出嘅手機影相功能好清晰同方便。",
                    "r": "Go2 bou6 san1 ceot1 ge3 sau2 gei1 ying2 soeng2 gung1 nang4 hou2 cing1 sik1 tung4 fong1 bin6.",
                    "tr": "The camera function of that newly released mobile phone is clear and convenient."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「人稱代詞同基本句式 (Pronouns & Basic Sentences) (第3課)」嘅標準規範？",
                    "options": [
                        "呢本小說我睇咗大半，情節真係好吸引人。",
                        "呢本小說我睇咗大半，情節真係好吸引人。（錯配語序與字詞）",
                        "嗰部新出嘅手機影相功能好清晰同方便。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「呢本小說我睇咗大半，情節真係好吸引人。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "嗰部新出嘅手機影相功能好清晰同方便。",
                        "嗰部新出嘅手機影相功能好清晰同方便。（虛詞缺失不合規範）",
                        "呢間屋嘅客廳好闊落，採光亦都十分充足。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「嗰部新出嘅手機影相功能好清晰同方便。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「人稱代詞同基本句式 (Pronouns & Basic Sentences)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 2-3）：",
                    "options": [
                        "呢本小說我睇咗大半，情節真係好吸引人。",
                        "呢本小說我睇咗大半，情節真係好吸引人。（主謂語序顛倒）",
                        "嗰部新出嘅手機影相功能好清晰同方便。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u2-l3）嘅核心關鍵詞（例如「人稱代詞」）：",
                    "acceptedAnswers": [
                        "人稱代詞",
                        "人稱代詞同基",
                        "人稱代詞同基本句式"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「人稱代詞」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u2-l4": {
        "id": "hk-u2-l4",
        "subject": "cantonese",
        "unit": 2,
        "lessonNumber": 4,
        "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (第4課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語人稱代詞（我/你/佢/我哋/你哋/佢哋）、係字句判斷結構、名詞謂語句同否定副詞「唔」。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u2-l4）系統深入地探討「人稱代詞同基本句式 (Pronouns & Basic Sentences)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "嗰部新出嘅手機影相功能好清晰同方便。",
                    "r": "Go2 bou6 san1 ceot1 ge3 sau2 gei1 ying2 soeng2 gung1 nang4 hou2 cing1 sik1 tung4 fong1 bin6.",
                    "tr": "The camera function of that newly released mobile phone is clear and convenient."
                },
                {
                    "t": "呢間屋嘅客廳好闊落，採光亦都十分充足。",
                    "r": "Ni1 gaan1 uk1 ge3 haak3 teng1 hou2 fut3 lok6, coi2 gwong1 yik6 dou1 sap6 fan1 cung1 zuk1.",
                    "tr": "The living room of this house is very spacious and lighting is abundant."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「人稱代詞同基本句式 (Pronouns & Basic Sentences) (第4課)」嘅標準規範？",
                    "options": [
                        "嗰部新出嘅手機影相功能好清晰同方便。",
                        "嗰部新出嘅手機影相功能好清晰同方便。（錯配語序與字詞）",
                        "呢間屋嘅客廳好闊落，採光亦都十分充足。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「嗰部新出嘅手機影相功能好清晰同方便。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "呢間屋嘅客廳好闊落，採光亦都十分充足。",
                        "呢間屋嘅客廳好闊落，採光亦都十分充足。（虛詞缺失不合規範）",
                        "而家已經係下晝三點三個字，我哋要出發喇。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「呢間屋嘅客廳好闊落，採光亦都十分充足。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「人稱代詞同基本句式 (Pronouns & Basic Sentences)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 2-4）：",
                    "options": [
                        "嗰部新出嘅手機影相功能好清晰同方便。",
                        "嗰部新出嘅手機影相功能好清晰同方便。（主謂語序顛倒）",
                        "呢間屋嘅客廳好闊落，採光亦都十分充足。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u2-l4）嘅核心關鍵詞（例如「人稱代詞」）：",
                    "acceptedAnswers": [
                        "人稱代詞",
                        "人稱代詞同基",
                        "人稱代詞同基本句式"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「人稱代詞」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u2-l5": {
        "id": "hk-u2-l5",
        "subject": "cantonese",
        "unit": 2,
        "lessonNumber": 5,
        "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (第5課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語人稱代詞（我/你/佢/我哋/你哋/佢哋）、係字句判斷結構、名詞謂語句同否定副詞「唔」。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u2-l5）系統深入地探討「人稱代詞同基本句式 (Pronouns & Basic Sentences)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "呢間屋嘅客廳好闊落，採光亦都十分充足。",
                    "r": "Ni1 gaan1 uk1 ge3 haak3 teng1 hou2 fut3 lok6, coi2 gwong1 yik6 dou1 sap6 fan1 cung1 zuk1.",
                    "tr": "The living room of this house is very spacious and lighting is abundant."
                },
                {
                    "t": "而家已經係下晝三點三個字，我哋要出發喇。",
                    "r": "Yi4 gaa1 yi5 ging1 hai6 haa6 zau3 saam1 dim2 saam1 go3 zi6, ngo5 dei6 yiu3 ceot1 faat3 laa3.",
                    "tr": "It is already 3:15 in the afternoon now, we have to set off."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「人稱代詞同基本句式 (Pronouns & Basic Sentences) (第5課)」嘅標準規範？",
                    "options": [
                        "呢間屋嘅客廳好闊落，採光亦都十分充足。",
                        "呢間屋嘅客廳好闊落，採光亦都十分充足。（錯配語序與字詞）",
                        "而家已經係下晝三點三個字，我哋要出發喇。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「呢間屋嘅客廳好闊落，採光亦都十分充足。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "而家已經係下晝三點三個字，我哋要出發喇。",
                        "而家已經係下晝三點三個字，我哋要出發喇。（虛詞缺失不合規範）",
                        "聽朝八點半喺地鐵站集合，千祈唔好遲到呀。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「而家已經係下晝三點三個字，我哋要出發喇。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「人稱代詞同基本句式 (Pronouns & Basic Sentences)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 2-5）：",
                    "options": [
                        "呢間屋嘅客廳好闊落，採光亦都十分充足。",
                        "呢間屋嘅客廳好闊落，採光亦都十分充足。（主謂語序顛倒）",
                        "而家已經係下晝三點三個字，我哋要出發喇。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u2-l5）嘅核心關鍵詞（例如「人稱代詞」）：",
                    "acceptedAnswers": [
                        "人稱代詞",
                        "人稱代詞同基",
                        "人稱代詞同基本句式"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「人稱代詞」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u3-l1": {
        "id": "hk-u3-l1",
        "subject": "cantonese",
        "unit": 3,
        "lessonNumber": 1,
        "title": "數字、時間同日期 (Numbers, Time & Date) (第1課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：基數詞（一至一百）、時刻表達（點/字/分/半/踏）、年月日同星期廣東話講法。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u3-l1）系統深入地探討「數字、時間同日期 (Numbers, Time & Date)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "而家已經係下晝三點三個字，我哋要出發喇。",
                    "r": "Yi4 gaa1 yi5 ging1 hai6 haa6 zau3 saam1 dim2 saam1 go3 zi6, ngo5 dei6 yiu3 ceot1 faat3 laa3.",
                    "tr": "It is already 3:15 in the afternoon now, we have to set off."
                },
                {
                    "t": "聽朝八點半喺地鐵站集合，千祈唔好遲到呀。",
                    "r": "Ting1 ziu1 baat3 dim2 bun3 hai2 dei6 tit3 zaam6 zaap6 hap6, cin1 kei4 m4 hou2 ci4 dou3 aa3.",
                    "tr": "Gather at the MTR station at 8:30 tomorrow morning, please don't be late."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「數字、時間同日期 (Numbers, Time & Date) (第1課)」嘅標準規範？",
                    "options": [
                        "而家已經係下晝三點三個字，我哋要出發喇。",
                        "而家已經係下晝三點三個字，我哋要出發喇。（錯配語序與字詞）",
                        "聽朝八點半喺地鐵站集合，千祈唔好遲到呀。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「而家已經係下晝三點三個字，我哋要出發喇。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "聽朝八點半喺地鐵站集合，千祈唔好遲到呀。",
                        "聽朝八點半喺地鐵站集合，千祈唔好遲到呀。（虛詞缺失不合規範）",
                        "呢件外套賣七百五十蚊，質地幾保暖舒服。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「聽朝八點半喺地鐵站集合，千祈唔好遲到呀。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「數字、時間同日期 (Numbers, Time & Date)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 3-1）：",
                    "options": [
                        "而家已經係下晝三點三個字，我哋要出發喇。",
                        "而家已經係下晝三點三個字，我哋要出發喇。（主謂語序顛倒）",
                        "聽朝八點半喺地鐵站集合，千祈唔好遲到呀。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u3-l1）嘅核心關鍵詞（例如「數字、時」）：",
                    "acceptedAnswers": [
                        "數字、時",
                        "數字、時間同",
                        "數字、時間同日期"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「數字、時」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u3-l2": {
        "id": "hk-u3-l2",
        "subject": "cantonese",
        "unit": 3,
        "lessonNumber": 2,
        "title": "數字、時間同日期 (Numbers, Time & Date) (第2課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：基數詞（一至一百）、時刻表達（點/字/分/半/踏）、年月日同星期廣東話講法。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u3-l2）系統深入地探討「數字、時間同日期 (Numbers, Time & Date)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "聽朝八點半喺地鐵站集合，千祈唔好遲到呀。",
                    "r": "Ting1 ziu1 baat3 dim2 bun3 hai2 dei6 tit3 zaam6 zaap6 hap6, cin1 kei4 m4 hou2 ci4 dou3 aa3.",
                    "tr": "Gather at the MTR station at 8:30 tomorrow morning, please don't be late."
                },
                {
                    "t": "呢件外套賣七百五十蚊，質地幾保暖舒服。",
                    "r": "Ni1 gin6 ngoi6 tou3 maai6 cat1 baak3 ng5 sap6 man1, zat1 dei6 gei2 bou2 nyun5 syu1 fuk6.",
                    "tr": "This coat sells for 750 dollars, the material is quite warm and comfortable."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「數字、時間同日期 (Numbers, Time & Date) (第2課)」嘅標準規範？",
                    "options": [
                        "聽朝八點半喺地鐵站集合，千祈唔好遲到呀。",
                        "聽朝八點半喺地鐵站集合，千祈唔好遲到呀。（錯配語序與字詞）",
                        "呢件外套賣七百五十蚊，質地幾保暖舒服。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「聽朝八點半喺地鐵站集合，千祈唔好遲到呀。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "呢件外套賣七百五十蚊，質地幾保暖舒服。",
                        "呢件外套賣七百五十蚊，質地幾保暖舒服。（虛詞缺失不合規範）",
                        "佢每個月都會儲二千蚊落銀行做定期存款。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「呢件外套賣七百五十蚊，質地幾保暖舒服。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「數字、時間同日期 (Numbers, Time & Date)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 3-2）：",
                    "options": [
                        "聽朝八點半喺地鐵站集合，千祈唔好遲到呀。",
                        "聽朝八點半喺地鐵站集合，千祈唔好遲到呀。（主謂語序顛倒）",
                        "呢件外套賣七百五十蚊，質地幾保暖舒服。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u3-l2）嘅核心關鍵詞（例如「數字、時」）：",
                    "acceptedAnswers": [
                        "數字、時",
                        "數字、時間同",
                        "數字、時間同日期"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「數字、時」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u3-l3": {
        "id": "hk-u3-l3",
        "subject": "cantonese",
        "unit": 3,
        "lessonNumber": 3,
        "title": "數字、時間同日期 (Numbers, Time & Date) (第3課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：基數詞（一至一百）、時刻表達（點/字/分/半/踏）、年月日同星期廣東話講法。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u3-l3）系統深入地探討「數字、時間同日期 (Numbers, Time & Date)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "呢件外套賣七百五十蚊，質地幾保暖舒服。",
                    "r": "Ni1 gin6 ngoi6 tou3 maai6 cat1 baak3 ng5 sap6 man1, zat1 dei6 gei2 bou2 nyun5 syu1 fuk6.",
                    "tr": "This coat sells for 750 dollars, the material is quite warm and comfortable."
                },
                {
                    "t": "佢每個月都會儲二千蚊落銀行做定期存款。",
                    "r": "Keui5 mui5 go3 yuet6 dou1 wui5 cou5 yi6 cin1 man1 lok6 ngan4 hong4 zou6 ding6 kei4 cyun4 fun2.",
                    "tr": "He saves 2,000 dollars in the bank every month as fixed deposit."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「數字、時間同日期 (Numbers, Time & Date) (第3課)」嘅標準規範？",
                    "options": [
                        "呢件外套賣七百五十蚊，質地幾保暖舒服。",
                        "呢件外套賣七百五十蚊，質地幾保暖舒服。（錯配語序與字詞）",
                        "佢每個月都會儲二千蚊落銀行做定期存款。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「呢件外套賣七百五十蚊，質地幾保暖舒服。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "佢每個月都會儲二千蚊落銀行做定期存款。",
                        "佢每個月都會儲二千蚊落銀行做定期存款。（虛詞缺失不合規範）",
                        "我喺呢間大學已經讀咗四年，今年即將畢業。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「佢每個月都會儲二千蚊落銀行做定期存款。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「數字、時間同日期 (Numbers, Time & Date)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 3-3）：",
                    "options": [
                        "呢件外套賣七百五十蚊，質地幾保暖舒服。",
                        "呢件外套賣七百五十蚊，質地幾保暖舒服。（主謂語序顛倒）",
                        "佢每個月都會儲二千蚊落銀行做定期存款。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u3-l3）嘅核心關鍵詞（例如「數字、時」）：",
                    "acceptedAnswers": [
                        "數字、時",
                        "數字、時間同",
                        "數字、時間同日期"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「數字、時」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u3-l4": {
        "id": "hk-u3-l4",
        "subject": "cantonese",
        "unit": 3,
        "lessonNumber": 4,
        "title": "數字、時間同日期 (Numbers, Time & Date) (第4課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：基數詞（一至一百）、時刻表達（點/字/分/半/踏）、年月日同星期廣東話講法。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u3-l4）系統深入地探討「數字、時間同日期 (Numbers, Time & Date)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "佢每個月都會儲二千蚊落銀行做定期存款。",
                    "r": "Keui5 mui5 go3 yuet6 dou1 wui5 cou5 yi6 cin1 man1 lok6 ngan4 hong4 zou6 ding6 kei4 cyun4 fun2.",
                    "tr": "He saves 2,000 dollars in the bank every month as fixed deposit."
                },
                {
                    "t": "我喺呢間大學已經讀咗四年，今年即將畢業。",
                    "r": "Ngo5 hai2 ni1 gaan1 daai6 hok6 yi5 ging1 duk6 zo2 sei3 nin4, gam1 nin4 zik1 zoeng1 bat1 yip6.",
                    "tr": "I have studied in this university for four years and will graduate this year."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「數字、時間同日期 (Numbers, Time & Date) (第4課)」嘅標準規範？",
                    "options": [
                        "佢每個月都會儲二千蚊落銀行做定期存款。",
                        "佢每個月都會儲二千蚊落銀行做定期存款。（錯配語序與字詞）",
                        "我喺呢間大學已經讀咗四年，今年即將畢業。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「佢每個月都會儲二千蚊落銀行做定期存款。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "我喺呢間大學已經讀咗四年，今年即將畢業。",
                        "我喺呢間大學已經讀咗四年，今年即將畢業。（虛詞缺失不合規範）",
                        "第4單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「我喺呢間大學已經讀咗四年，今年即將畢業。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「數字、時間同日期 (Numbers, Time & Date)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 3-4）：",
                    "options": [
                        "佢每個月都會儲二千蚊落銀行做定期存款。",
                        "佢每個月都會儲二千蚊落銀行做定期存款。（主謂語序顛倒）",
                        "我喺呢間大學已經讀咗四年，今年即將畢業。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u3-l4）嘅核心關鍵詞（例如「數字、時」）：",
                    "acceptedAnswers": [
                        "數字、時",
                        "數字、時間同",
                        "數字、時間同日期"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「數字、時」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u3-l5": {
        "id": "hk-u3-l5",
        "subject": "cantonese",
        "unit": 3,
        "lessonNumber": 5,
        "title": "數字、時間同日期 (Numbers, Time & Date) (第5課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：基數詞（一至一百）、時刻表達（點/字/分/半/踏）、年月日同星期廣東話講法。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u3-l5）系統深入地探討「數字、時間同日期 (Numbers, Time & Date)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "我喺呢間大學已經讀咗四年，今年即將畢業。",
                    "r": "Ngo5 hai2 ni1 gaan1 daai6 hok6 yi5 ging1 duk6 zo2 sei3 nin4, gam1 nin4 zik1 zoeng1 bat1 yip6.",
                    "tr": "I have studied in this university for four years and will graduate this year."
                },
                {
                    "t": "第4單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.1）。",
                    "r": "Dai6 4 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 4 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「數字、時間同日期 (Numbers, Time & Date) (第5課)」嘅標準規範？",
                    "options": [
                        "我喺呢間大學已經讀咗四年，今年即將畢業。",
                        "我喺呢間大學已經讀咗四年，今年即將畢業。（錯配語序與字詞）",
                        "第4單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「我喺呢間大學已經讀咗四年，今年即將畢業。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第4單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.1）。",
                        "第4單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.1）。（虛詞缺失不合規範）",
                        "第4單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第4單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「數字、時間同日期 (Numbers, Time & Date)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 3-5）：",
                    "options": [
                        "我喺呢間大學已經讀咗四年，今年即將畢業。",
                        "我喺呢間大學已經讀咗四年，今年即將畢業。（主謂語序顛倒）",
                        "第4單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u3-l5）嘅核心關鍵詞（例如「數字、時」）：",
                    "acceptedAnswers": [
                        "數字、時",
                        "數字、時間同",
                        "數字、時間同日期"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「數字、時」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u4-l1": {
        "id": "hk-u4-l1",
        "subject": "cantonese",
        "unit": 4,
        "lessonNumber": 1,
        "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (第1課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：廣東話核心名量詞（個/隻/條/張/部/樽/杯/間）、量詞代指特指結構同結構助詞「嘅」。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u4-l1）系統深入地探討「量詞同名詞修飾 (Classifiers & Noun Modification)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第4單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.1）。",
                    "r": "Dai6 4 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 4 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第4單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.2）。",
                    "r": "Dai6 4 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 4 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「量詞同名詞修飾 (Classifiers & Noun Modification) (第1課)」嘅標準規範？",
                    "options": [
                        "第4單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.1）。",
                        "第4單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.1）。（錯配語序與字詞）",
                        "第4單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第4單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第4單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.2）。",
                        "第4單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.2）。（虛詞缺失不合規範）",
                        "第4單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第4單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「量詞同名詞修飾 (Classifiers & Noun Modification)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 4-1）：",
                    "options": [
                        "第4單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.1）。",
                        "第4單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.1）。（主謂語序顛倒）",
                        "第4單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u4-l1）嘅核心關鍵詞（例如「量詞同名」）：",
                    "acceptedAnswers": [
                        "量詞同名",
                        "量詞同名詞修",
                        "量詞同名詞修飾"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「量詞同名」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u4-l2": {
        "id": "hk-u4-l2",
        "subject": "cantonese",
        "unit": 4,
        "lessonNumber": 2,
        "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (第2課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：廣東話核心名量詞（個/隻/條/張/部/樽/杯/間）、量詞代指特指結構同結構助詞「嘅」。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u4-l2）系統深入地探討「量詞同名詞修飾 (Classifiers & Noun Modification)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第4單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.2）。",
                    "r": "Dai6 4 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 4 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第4單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.3）。",
                    "r": "Dai6 4 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 4 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「量詞同名詞修飾 (Classifiers & Noun Modification) (第2課)」嘅標準規範？",
                    "options": [
                        "第4單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.2）。",
                        "第4單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.2）。（錯配語序與字詞）",
                        "第4單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第4單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第4單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.3）。",
                        "第4單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.3）。（虛詞缺失不合規範）",
                        "第4單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第4單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「量詞同名詞修飾 (Classifiers & Noun Modification)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 4-2）：",
                    "options": [
                        "第4單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.2）。",
                        "第4單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.2）。（主謂語序顛倒）",
                        "第4單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u4-l2）嘅核心關鍵詞（例如「量詞同名」）：",
                    "acceptedAnswers": [
                        "量詞同名",
                        "量詞同名詞修",
                        "量詞同名詞修飾"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「量詞同名」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u4-l3": {
        "id": "hk-u4-l3",
        "subject": "cantonese",
        "unit": 4,
        "lessonNumber": 3,
        "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (第3課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：廣東話核心名量詞（個/隻/條/張/部/樽/杯/間）、量詞代指特指結構同結構助詞「嘅」。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u4-l3）系統深入地探討「量詞同名詞修飾 (Classifiers & Noun Modification)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第4單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.3）。",
                    "r": "Dai6 4 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 4 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第4單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.4）。",
                    "r": "Dai6 4 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 4 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「量詞同名詞修飾 (Classifiers & Noun Modification) (第3課)」嘅標準規範？",
                    "options": [
                        "第4單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.3）。",
                        "第4單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.3）。（錯配語序與字詞）",
                        "第4單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第4單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第4單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.4）。",
                        "第4單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.4）。（虛詞缺失不合規範）",
                        "第4單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第4單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「量詞同名詞修飾 (Classifiers & Noun Modification)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 4-3）：",
                    "options": [
                        "第4單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.3）。",
                        "第4單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.3）。（主謂語序顛倒）",
                        "第4單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u4-l3）嘅核心關鍵詞（例如「量詞同名」）：",
                    "acceptedAnswers": [
                        "量詞同名",
                        "量詞同名詞修",
                        "量詞同名詞修飾"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「量詞同名」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u4-l4": {
        "id": "hk-u4-l4",
        "subject": "cantonese",
        "unit": 4,
        "lessonNumber": 4,
        "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (第4課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：廣東話核心名量詞（個/隻/條/張/部/樽/杯/間）、量詞代指特指結構同結構助詞「嘅」。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u4-l4）系統深入地探討「量詞同名詞修飾 (Classifiers & Noun Modification)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第4單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.4）。",
                    "r": "Dai6 4 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 4 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第4單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.5）。",
                    "r": "Dai6 4 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 4 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「量詞同名詞修飾 (Classifiers & Noun Modification) (第4課)」嘅標準規範？",
                    "options": [
                        "第4單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.4）。",
                        "第4單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.4）。（錯配語序與字詞）",
                        "第4單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第4單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第4單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.5）。",
                        "第4單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.5）。（虛詞缺失不合規範）",
                        "第5單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第4單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「量詞同名詞修飾 (Classifiers & Noun Modification)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 4-4）：",
                    "options": [
                        "第4單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.4）。",
                        "第4單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.4）。（主謂語序顛倒）",
                        "第4單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u4-l4）嘅核心關鍵詞（例如「量詞同名」）：",
                    "acceptedAnswers": [
                        "量詞同名",
                        "量詞同名詞修",
                        "量詞同名詞修飾"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「量詞同名」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u4-l5": {
        "id": "hk-u4-l5",
        "subject": "cantonese",
        "unit": 4,
        "lessonNumber": 5,
        "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (第5課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：廣東話核心名量詞（個/隻/條/張/部/樽/杯/間）、量詞代指特指結構同結構助詞「嘅」。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u4-l5）系統深入地探討「量詞同名詞修飾 (Classifiers & Noun Modification)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第4單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.5）。",
                    "r": "Dai6 4 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 4 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第5單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.1）。",
                    "r": "Dai6 5 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 5 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「量詞同名詞修飾 (Classifiers & Noun Modification) (第5課)」嘅標準規範？",
                    "options": [
                        "第4單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.5）。",
                        "第4單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.5）。（錯配語序與字詞）",
                        "第5單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第4單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第5單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.1）。",
                        "第5單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.1）。（虛詞缺失不合規範）",
                        "第5單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第5單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「量詞同名詞修飾 (Classifiers & Noun Modification)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 4-5）：",
                    "options": [
                        "第4單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.5）。",
                        "第4單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第4課嘅語法重點（句子標號：4.5）。（主謂語序顛倒）",
                        "第5單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u4-l5）嘅核心關鍵詞（例如「量詞同名」）：",
                    "acceptedAnswers": [
                        "量詞同名",
                        "量詞同名詞修",
                        "量詞同名詞修飾"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「量詞同名」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u5-l1": {
        "id": "hk-u5-l1",
        "subject": "cantonese",
        "unit": 5,
        "lessonNumber": 1,
        "title": "日常生活同喺字句 (Daily Routine & Location) (第1課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：日常動作動詞（起身/食飯/返工/放工/沖涼/瞓覺）、介詞「喺」表示處所同進行體（動詞＋緊）。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u5-l1）系統深入地探討「日常生活同喺字句 (Daily Routine & Location)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第5單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.1）。",
                    "r": "Dai6 5 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 5 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第5單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.2）。",
                    "r": "Dai6 5 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 5 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「日常生活同喺字句 (Daily Routine & Location) (第1課)」嘅標準規範？",
                    "options": [
                        "第5單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.1）。",
                        "第5單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.1）。（錯配語序與字詞）",
                        "第5單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第5單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第5單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.2）。",
                        "第5單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.2）。（虛詞缺失不合規範）",
                        "第5單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第5單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「日常生活同喺字句 (Daily Routine & Location)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 5-1）：",
                    "options": [
                        "第5單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.1）。",
                        "第5單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.1）。（主謂語序顛倒）",
                        "第5單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u5-l1）嘅核心關鍵詞（例如「日常生活」）：",
                    "acceptedAnswers": [
                        "日常生活",
                        "日常生活同喺",
                        "日常生活同喺字句"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「日常生活」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u5-l2": {
        "id": "hk-u5-l2",
        "subject": "cantonese",
        "unit": 5,
        "lessonNumber": 2,
        "title": "日常生活同喺字句 (Daily Routine & Location) (第2課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：日常動作動詞（起身/食飯/返工/放工/沖涼/瞓覺）、介詞「喺」表示處所同進行體（動詞＋緊）。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u5-l2）系統深入地探討「日常生活同喺字句 (Daily Routine & Location)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第5單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.2）。",
                    "r": "Dai6 5 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 5 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第5單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.3）。",
                    "r": "Dai6 5 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 5 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「日常生活同喺字句 (Daily Routine & Location) (第2課)」嘅標準規範？",
                    "options": [
                        "第5單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.2）。",
                        "第5單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.2）。（錯配語序與字詞）",
                        "第5單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第5單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第5單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.3）。",
                        "第5單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.3）。（虛詞缺失不合規範）",
                        "第5單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第5單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「日常生活同喺字句 (Daily Routine & Location)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 5-2）：",
                    "options": [
                        "第5單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.2）。",
                        "第5單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.2）。（主謂語序顛倒）",
                        "第5單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u5-l2）嘅核心關鍵詞（例如「日常生活」）：",
                    "acceptedAnswers": [
                        "日常生活",
                        "日常生活同喺",
                        "日常生活同喺字句"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「日常生活」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u5-l3": {
        "id": "hk-u5-l3",
        "subject": "cantonese",
        "unit": 5,
        "lessonNumber": 3,
        "title": "日常生活同喺字句 (Daily Routine & Location) (第3課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：日常動作動詞（起身/食飯/返工/放工/沖涼/瞓覺）、介詞「喺」表示處所同進行體（動詞＋緊）。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u5-l3）系統深入地探討「日常生活同喺字句 (Daily Routine & Location)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第5單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.3）。",
                    "r": "Dai6 5 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 5 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第5單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.4）。",
                    "r": "Dai6 5 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 5 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「日常生活同喺字句 (Daily Routine & Location) (第3課)」嘅標準規範？",
                    "options": [
                        "第5單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.3）。",
                        "第5單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.3）。（錯配語序與字詞）",
                        "第5單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第5單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第5單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.4）。",
                        "第5單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.4）。（虛詞缺失不合規範）",
                        "第5單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第5單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「日常生活同喺字句 (Daily Routine & Location)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 5-3）：",
                    "options": [
                        "第5單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.3）。",
                        "第5單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.3）。（主謂語序顛倒）",
                        "第5單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u5-l3）嘅核心關鍵詞（例如「日常生活」）：",
                    "acceptedAnswers": [
                        "日常生活",
                        "日常生活同喺",
                        "日常生活同喺字句"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「日常生活」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u5-l4": {
        "id": "hk-u5-l4",
        "subject": "cantonese",
        "unit": 5,
        "lessonNumber": 4,
        "title": "日常生活同喺字句 (Daily Routine & Location) (第4課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：日常動作動詞（起身/食飯/返工/放工/沖涼/瞓覺）、介詞「喺」表示處所同進行體（動詞＋緊）。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u5-l4）系統深入地探討「日常生活同喺字句 (Daily Routine & Location)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第5單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.4）。",
                    "r": "Dai6 5 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 5 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第5單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.5）。",
                    "r": "Dai6 5 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 5 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「日常生活同喺字句 (Daily Routine & Location) (第4課)」嘅標準規範？",
                    "options": [
                        "第5單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.4）。",
                        "第5單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.4）。（錯配語序與字詞）",
                        "第5單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第5單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第5單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.5）。",
                        "第5單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.5）。（虛詞缺失不合規範）",
                        "第6單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第5單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「日常生活同喺字句 (Daily Routine & Location)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 5-4）：",
                    "options": [
                        "第5單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.4）。",
                        "第5單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.4）。（主謂語序顛倒）",
                        "第5單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u5-l4）嘅核心關鍵詞（例如「日常生活」）：",
                    "acceptedAnswers": [
                        "日常生活",
                        "日常生活同喺",
                        "日常生活同喺字句"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「日常生活」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u5-l5": {
        "id": "hk-u5-l5",
        "subject": "cantonese",
        "unit": 5,
        "lessonNumber": 5,
        "title": "日常生活同喺字句 (Daily Routine & Location) (第5課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：日常動作動詞（起身/食飯/返工/放工/沖涼/瞓覺）、介詞「喺」表示處所同進行體（動詞＋緊）。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u5-l5）系統深入地探討「日常生活同喺字句 (Daily Routine & Location)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第5單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.5）。",
                    "r": "Dai6 5 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 5 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第6單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.1）。",
                    "r": "Dai6 6 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 6 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「日常生活同喺字句 (Daily Routine & Location) (第5課)」嘅標準規範？",
                    "options": [
                        "第5單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.5）。",
                        "第5單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.5）。（錯配語序與字詞）",
                        "第6單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第5單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第6單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.1）。",
                        "第6單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.1）。（虛詞缺失不合規範）",
                        "第6單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第6單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「日常生活同喺字句 (Daily Routine & Location)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 5-5）：",
                    "options": [
                        "第5單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.5）。",
                        "第5單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第5課嘅語法重點（句子標號：5.5）。（主謂語序顛倒）",
                        "第6單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u5-l5）嘅核心關鍵詞（例如「日常生活」）：",
                    "acceptedAnswers": [
                        "日常生活",
                        "日常生活同喺",
                        "日常生活同喺字句"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「日常生活」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u6-l1": {
        "id": "hk-u6-l1",
        "subject": "cantonese",
        "unit": 6,
        "lessonNumber": 1,
        "title": "飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第1課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：廣東飲茶點心（蝦餃/燒賣/叉燒包）、茶餐廳文化（絲襪奶茶/蛋撻/菠蘿油）、落單叫飛同埋單。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u6-l1）系統深入地探討「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第6單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.1）。",
                    "r": "Dai6 6 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 6 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第6單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.2）。",
                    "r": "Dai6 6 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 6 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第1課)」嘅標準規範？",
                    "options": [
                        "第6單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.1）。",
                        "第6單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.1）。（錯配語序與字詞）",
                        "第6單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第6單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第6單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.2）。",
                        "第6單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.2）。（虛詞缺失不合規範）",
                        "第6單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第6單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 6-1）：",
                    "options": [
                        "第6單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.1）。",
                        "第6單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.1）。（主謂語序顛倒）",
                        "第6單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u6-l1）嘅核心關鍵詞（例如「飲茶文化」）：",
                    "acceptedAnswers": [
                        "飲茶文化",
                        "飲茶文化、點",
                        "飲茶文化、點餐同茶餐廳"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「飲茶文化」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u6-l2": {
        "id": "hk-u6-l2",
        "subject": "cantonese",
        "unit": 6,
        "lessonNumber": 2,
        "title": "飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第2課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：廣東飲茶點心（蝦餃/燒賣/叉燒包）、茶餐廳文化（絲襪奶茶/蛋撻/菠蘿油）、落單叫飛同埋單。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u6-l2）系統深入地探討「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第6單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.2）。",
                    "r": "Dai6 6 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 6 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第6單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.3）。",
                    "r": "Dai6 6 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 6 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第2課)」嘅標準規範？",
                    "options": [
                        "第6單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.2）。",
                        "第6單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.2）。（錯配語序與字詞）",
                        "第6單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第6單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第6單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.3）。",
                        "第6單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.3）。（虛詞缺失不合規範）",
                        "第6單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第6單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 6-2）：",
                    "options": [
                        "第6單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.2）。",
                        "第6單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.2）。（主謂語序顛倒）",
                        "第6單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u6-l2）嘅核心關鍵詞（例如「飲茶文化」）：",
                    "acceptedAnswers": [
                        "飲茶文化",
                        "飲茶文化、點",
                        "飲茶文化、點餐同茶餐廳"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「飲茶文化」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u6-l3": {
        "id": "hk-u6-l3",
        "subject": "cantonese",
        "unit": 6,
        "lessonNumber": 3,
        "title": "飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第3課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：廣東飲茶點心（蝦餃/燒賣/叉燒包）、茶餐廳文化（絲襪奶茶/蛋撻/菠蘿油）、落單叫飛同埋單。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u6-l3）系統深入地探討「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第6單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.3）。",
                    "r": "Dai6 6 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 6 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第6單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.4）。",
                    "r": "Dai6 6 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 6 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第3課)」嘅標準規範？",
                    "options": [
                        "第6單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.3）。",
                        "第6單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.3）。（錯配語序與字詞）",
                        "第6單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第6單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第6單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.4）。",
                        "第6單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.4）。（虛詞缺失不合規範）",
                        "第6單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第6單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 6-3）：",
                    "options": [
                        "第6單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.3）。",
                        "第6單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.3）。（主謂語序顛倒）",
                        "第6單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u6-l3）嘅核心關鍵詞（例如「飲茶文化」）：",
                    "acceptedAnswers": [
                        "飲茶文化",
                        "飲茶文化、點",
                        "飲茶文化、點餐同茶餐廳"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「飲茶文化」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u6-l4": {
        "id": "hk-u6-l4",
        "subject": "cantonese",
        "unit": 6,
        "lessonNumber": 4,
        "title": "飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第4課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：廣東飲茶點心（蝦餃/燒賣/叉燒包）、茶餐廳文化（絲襪奶茶/蛋撻/菠蘿油）、落單叫飛同埋單。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u6-l4）系統深入地探討「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第6單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.4）。",
                    "r": "Dai6 6 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 6 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第6單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.5）。",
                    "r": "Dai6 6 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 6 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第4課)」嘅標準規範？",
                    "options": [
                        "第6單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.4）。",
                        "第6單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.4）。（錯配語序與字詞）",
                        "第6單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第6單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第6單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.5）。",
                        "第6單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.5）。（虛詞缺失不合規範）",
                        "第7單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第6單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 6-4）：",
                    "options": [
                        "第6單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.4）。",
                        "第6單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.4）。（主謂語序顛倒）",
                        "第6單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u6-l4）嘅核心關鍵詞（例如「飲茶文化」）：",
                    "acceptedAnswers": [
                        "飲茶文化",
                        "飲茶文化、點",
                        "飲茶文化、點餐同茶餐廳"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「飲茶文化」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u6-l5": {
        "id": "hk-u6-l5",
        "subject": "cantonese",
        "unit": 6,
        "lessonNumber": 5,
        "title": "飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第5課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：廣東飲茶點心（蝦餃/燒賣/叉燒包）、茶餐廳文化（絲襪奶茶/蛋撻/菠蘿油）、落單叫飛同埋單。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u6-l5）系統深入地探討「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第6單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.5）。",
                    "r": "Dai6 6 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 6 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第7單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.1）。",
                    "r": "Dai6 7 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 7 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第5課)」嘅標準規範？",
                    "options": [
                        "第6單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.5）。",
                        "第6單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.5）。（錯配語序與字詞）",
                        "第7單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第6單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第7單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.1）。",
                        "第7單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.1）。（虛詞缺失不合規範）",
                        "第7單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第7單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 6-5）：",
                    "options": [
                        "第6單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.5）。",
                        "第6單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第6課嘅語法重點（句子標號：6.5）。（主謂語序顛倒）",
                        "第7單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u6-l5）嘅核心關鍵詞（例如「飲茶文化」）：",
                    "acceptedAnswers": [
                        "飲茶文化",
                        "飲茶文化、點",
                        "飲茶文化、點餐同茶餐廳"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「飲茶文化」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u7-l1": {
        "id": "hk-u7-l1",
        "subject": "cantonese",
        "unit": 7,
        "lessonNumber": 1,
        "title": "動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第1課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：完成體「咗」、進行體「緊」同經歷體「過」嘅語義特徵同句法分佈。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u7-l1）系統深入地探討「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第7單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.1）。",
                    "r": "Dai6 7 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 7 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第7單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.2）。",
                    "r": "Dai6 7 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 7 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第1課)」嘅標準規範？",
                    "options": [
                        "第7單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.1）。",
                        "第7單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.1）。（錯配語序與字詞）",
                        "第7單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第7單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第7單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.2）。",
                        "第7單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.2）。（虛詞缺失不合規範）",
                        "第7單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第7單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 7-1）：",
                    "options": [
                        "第7單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.1）。",
                        "第7單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.1）。（主謂語序顛倒）",
                        "第7單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u7-l1）嘅核心關鍵詞（例如「動態助詞」）：",
                    "acceptedAnswers": [
                        "動態助詞",
                        "動態助詞「咗",
                        "動態助詞「咗」「緊」「過」"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「動態助詞」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u7-l2": {
        "id": "hk-u7-l2",
        "subject": "cantonese",
        "unit": 7,
        "lessonNumber": 2,
        "title": "動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第2課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：完成體「咗」、進行體「緊」同經歷體「過」嘅語義特徵同句法分佈。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u7-l2）系統深入地探討「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第7單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.2）。",
                    "r": "Dai6 7 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 7 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第7單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.3）。",
                    "r": "Dai6 7 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 7 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第2課)」嘅標準規範？",
                    "options": [
                        "第7單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.2）。",
                        "第7單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.2）。（錯配語序與字詞）",
                        "第7單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第7單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第7單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.3）。",
                        "第7單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.3）。（虛詞缺失不合規範）",
                        "第7單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第7單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 7-2）：",
                    "options": [
                        "第7單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.2）。",
                        "第7單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.2）。（主謂語序顛倒）",
                        "第7單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u7-l2）嘅核心關鍵詞（例如「動態助詞」）：",
                    "acceptedAnswers": [
                        "動態助詞",
                        "動態助詞「咗",
                        "動態助詞「咗」「緊」「過」"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「動態助詞」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u7-l3": {
        "id": "hk-u7-l3",
        "subject": "cantonese",
        "unit": 7,
        "lessonNumber": 3,
        "title": "動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第3課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：完成體「咗」、進行體「緊」同經歷體「過」嘅語義特徵同句法分佈。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u7-l3）系統深入地探討「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第7單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.3）。",
                    "r": "Dai6 7 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 7 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第7單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.4）。",
                    "r": "Dai6 7 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 7 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第3課)」嘅標準規範？",
                    "options": [
                        "第7單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.3）。",
                        "第7單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.3）。（錯配語序與字詞）",
                        "第7單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第7單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第7單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.4）。",
                        "第7單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.4）。（虛詞缺失不合規範）",
                        "第7單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第7單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 7-3）：",
                    "options": [
                        "第7單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.3）。",
                        "第7單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.3）。（主謂語序顛倒）",
                        "第7單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u7-l3）嘅核心關鍵詞（例如「動態助詞」）：",
                    "acceptedAnswers": [
                        "動態助詞",
                        "動態助詞「咗",
                        "動態助詞「咗」「緊」「過」"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「動態助詞」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u7-l4": {
        "id": "hk-u7-l4",
        "subject": "cantonese",
        "unit": 7,
        "lessonNumber": 4,
        "title": "動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第4課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：完成體「咗」、進行體「緊」同經歷體「過」嘅語義特徵同句法分佈。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u7-l4）系統深入地探討「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第7單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.4）。",
                    "r": "Dai6 7 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 7 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第7單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.5）。",
                    "r": "Dai6 7 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 7 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第4課)」嘅標準規範？",
                    "options": [
                        "第7單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.4）。",
                        "第7單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.4）。（錯配語序與字詞）",
                        "第7單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第7單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第7單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.5）。",
                        "第7單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.5）。（虛詞缺失不合規範）",
                        "第8單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第7單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 7-4）：",
                    "options": [
                        "第7單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.4）。",
                        "第7單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.4）。（主謂語序顛倒）",
                        "第7單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u7-l4）嘅核心關鍵詞（例如「動態助詞」）：",
                    "acceptedAnswers": [
                        "動態助詞",
                        "動態助詞「咗",
                        "動態助詞「咗」「緊」「過」"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「動態助詞」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u7-l5": {
        "id": "hk-u7-l5",
        "subject": "cantonese",
        "unit": 7,
        "lessonNumber": 5,
        "title": "動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第5課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：完成體「咗」、進行體「緊」同經歷體「過」嘅語義特徵同句法分佈。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u7-l5）系統深入地探討「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第7單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.5）。",
                    "r": "Dai6 7 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 7 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第8單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.1）。",
                    "r": "Dai6 8 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 8 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第5課)」嘅標準規範？",
                    "options": [
                        "第7單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.5）。",
                        "第7單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.5）。（錯配語序與字詞）",
                        "第8單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第7單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第8單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.1）。",
                        "第8單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.1）。（虛詞缺失不合規範）",
                        "第8單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第8單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 7-5）：",
                    "options": [
                        "第7單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.5）。",
                        "第7單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第7課嘅語法重點（句子標號：7.5）。（主謂語序顛倒）",
                        "第8單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u7-l5）嘅核心關鍵詞（例如「動態助詞」）：",
                    "acceptedAnswers": [
                        "動態助詞",
                        "動態助詞「咗",
                        "動態助詞「咗」「緊」「過」"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「動態助詞」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u8-l1": {
        "id": "hk-u8-l1",
        "subject": "cantonese",
        "unit": 8,
        "lessonNumber": 1,
        "title": "方向、位置同行街交通 (Directions & HK Transit) (第1課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：空間方位詞（上面/下面/前面/後面/隔離/對面）、問路指路同香港公共交通（港鐵/巴士/小巴/電車/天星小輪）。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u8-l1）系統深入地探討「方向、位置同行街交通 (Directions & HK Transit)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第8單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.1）。",
                    "r": "Dai6 8 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 8 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第8單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.2）。",
                    "r": "Dai6 8 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 8 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「方向、位置同行街交通 (Directions & HK Transit) (第1課)」嘅標準規範？",
                    "options": [
                        "第8單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.1）。",
                        "第8單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.1）。（錯配語序與字詞）",
                        "第8單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第8單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第8單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.2）。",
                        "第8單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.2）。（虛詞缺失不合規範）",
                        "第8單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第8單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「方向、位置同行街交通 (Directions & HK Transit)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 8-1）：",
                    "options": [
                        "第8單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.1）。",
                        "第8單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.1）。（主謂語序顛倒）",
                        "第8單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u8-l1）嘅核心關鍵詞（例如「方向、位」）：",
                    "acceptedAnswers": [
                        "方向、位",
                        "方向、位置同",
                        "方向、位置同行街交通"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「方向、位」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u8-l2": {
        "id": "hk-u8-l2",
        "subject": "cantonese",
        "unit": 8,
        "lessonNumber": 2,
        "title": "方向、位置同行街交通 (Directions & HK Transit) (第2課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：空間方位詞（上面/下面/前面/後面/隔離/對面）、問路指路同香港公共交通（港鐵/巴士/小巴/電車/天星小輪）。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u8-l2）系統深入地探討「方向、位置同行街交通 (Directions & HK Transit)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第8單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.2）。",
                    "r": "Dai6 8 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 8 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第8單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.3）。",
                    "r": "Dai6 8 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 8 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「方向、位置同行街交通 (Directions & HK Transit) (第2課)」嘅標準規範？",
                    "options": [
                        "第8單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.2）。",
                        "第8單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.2）。（錯配語序與字詞）",
                        "第8單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第8單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第8單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.3）。",
                        "第8單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.3）。（虛詞缺失不合規範）",
                        "第8單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第8單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「方向、位置同行街交通 (Directions & HK Transit)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 8-2）：",
                    "options": [
                        "第8單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.2）。",
                        "第8單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.2）。（主謂語序顛倒）",
                        "第8單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u8-l2）嘅核心關鍵詞（例如「方向、位」）：",
                    "acceptedAnswers": [
                        "方向、位",
                        "方向、位置同",
                        "方向、位置同行街交通"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「方向、位」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u8-l3": {
        "id": "hk-u8-l3",
        "subject": "cantonese",
        "unit": 8,
        "lessonNumber": 3,
        "title": "方向、位置同行街交通 (Directions & HK Transit) (第3課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：空間方位詞（上面/下面/前面/後面/隔離/對面）、問路指路同香港公共交通（港鐵/巴士/小巴/電車/天星小輪）。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u8-l3）系統深入地探討「方向、位置同行街交通 (Directions & HK Transit)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第8單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.3）。",
                    "r": "Dai6 8 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 8 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第8單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.4）。",
                    "r": "Dai6 8 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 8 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「方向、位置同行街交通 (Directions & HK Transit) (第3課)」嘅標準規範？",
                    "options": [
                        "第8單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.3）。",
                        "第8單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.3）。（錯配語序與字詞）",
                        "第8單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第8單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第8單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.4）。",
                        "第8單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.4）。（虛詞缺失不合規範）",
                        "第8單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第8單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「方向、位置同行街交通 (Directions & HK Transit)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 8-3）：",
                    "options": [
                        "第8單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.3）。",
                        "第8單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.3）。（主謂語序顛倒）",
                        "第8單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u8-l3）嘅核心關鍵詞（例如「方向、位」）：",
                    "acceptedAnswers": [
                        "方向、位",
                        "方向、位置同",
                        "方向、位置同行街交通"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「方向、位」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u8-l4": {
        "id": "hk-u8-l4",
        "subject": "cantonese",
        "unit": 8,
        "lessonNumber": 4,
        "title": "方向、位置同行街交通 (Directions & HK Transit) (第4課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：空間方位詞（上面/下面/前面/後面/隔離/對面）、問路指路同香港公共交通（港鐵/巴士/小巴/電車/天星小輪）。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u8-l4）系統深入地探討「方向、位置同行街交通 (Directions & HK Transit)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第8單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.4）。",
                    "r": "Dai6 8 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 8 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第8單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.5）。",
                    "r": "Dai6 8 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 8 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「方向、位置同行街交通 (Directions & HK Transit) (第4課)」嘅標準規範？",
                    "options": [
                        "第8單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.4）。",
                        "第8單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.4）。（錯配語序與字詞）",
                        "第8單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第8單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第8單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.5）。",
                        "第8單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.5）。（虛詞缺失不合規範）",
                        "第9單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第8單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「方向、位置同行街交通 (Directions & HK Transit)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 8-4）：",
                    "options": [
                        "第8單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.4）。",
                        "第8單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.4）。（主謂語序顛倒）",
                        "第8單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u8-l4）嘅核心關鍵詞（例如「方向、位」）：",
                    "acceptedAnswers": [
                        "方向、位",
                        "方向、位置同",
                        "方向、位置同行街交通"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「方向、位」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u8-l5": {
        "id": "hk-u8-l5",
        "subject": "cantonese",
        "unit": 8,
        "lessonNumber": 5,
        "title": "方向、位置同行街交通 (Directions & HK Transit) (第5課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：空間方位詞（上面/下面/前面/後面/隔離/對面）、問路指路同香港公共交通（港鐵/巴士/小巴/電車/天星小輪）。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u8-l5）系統深入地探討「方向、位置同行街交通 (Directions & HK Transit)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第8單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.5）。",
                    "r": "Dai6 8 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 8 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第9單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.1）。",
                    "r": "Dai6 9 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 9 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「方向、位置同行街交通 (Directions & HK Transit) (第5課)」嘅標準規範？",
                    "options": [
                        "第8單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.5）。",
                        "第8單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.5）。（錯配語序與字詞）",
                        "第9單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第8單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第9單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.1）。",
                        "第9單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.1）。（虛詞缺失不合規範）",
                        "第9單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第9單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「方向、位置同行街交通 (Directions & HK Transit)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 8-5）：",
                    "options": [
                        "第8單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.5）。",
                        "第8單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第8課嘅語法重點（句子標號：8.5）。（主謂語序顛倒）",
                        "第9單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u8-l5）嘅核心關鍵詞（例如「方向、位」）：",
                    "acceptedAnswers": [
                        "方向、位",
                        "方向、位置同",
                        "方向、位置同行街交通"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「方向、位」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u9-l1": {
        "id": "hk-u9-l1",
        "subject": "cantonese",
        "unit": 9,
        "lessonNumber": 1,
        "title": "買嘢、價錢同找錢 (Shopping & Currency) (第1課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：港幣貨幣單位（蚊/毫/仙）、街市同商場買嘢對話、講價同找錢表達。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u9-l1）系統深入地探討「買嘢、價錢同找錢 (Shopping & Currency)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第9單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.1）。",
                    "r": "Dai6 9 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 9 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第9單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.2）。",
                    "r": "Dai6 9 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 9 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「買嘢、價錢同找錢 (Shopping & Currency) (第1課)」嘅標準規範？",
                    "options": [
                        "第9單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.1）。",
                        "第9單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.1）。（錯配語序與字詞）",
                        "第9單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第9單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第9單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.2）。",
                        "第9單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.2）。（虛詞缺失不合規範）",
                        "第9單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第9單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「買嘢、價錢同找錢 (Shopping & Currency)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 9-1）：",
                    "options": [
                        "第9單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.1）。",
                        "第9單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.1）。（主謂語序顛倒）",
                        "第9單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u9-l1）嘅核心關鍵詞（例如「買嘢、價」）：",
                    "acceptedAnswers": [
                        "買嘢、價",
                        "買嘢、價錢同",
                        "買嘢、價錢同找錢"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「買嘢、價」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u9-l2": {
        "id": "hk-u9-l2",
        "subject": "cantonese",
        "unit": 9,
        "lessonNumber": 2,
        "title": "買嘢、價錢同找錢 (Shopping & Currency) (第2課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：港幣貨幣單位（蚊/毫/仙）、街市同商場買嘢對話、講價同找錢表達。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u9-l2）系統深入地探討「買嘢、價錢同找錢 (Shopping & Currency)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第9單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.2）。",
                    "r": "Dai6 9 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 9 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第9單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.3）。",
                    "r": "Dai6 9 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 9 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「買嘢、價錢同找錢 (Shopping & Currency) (第2課)」嘅標準規範？",
                    "options": [
                        "第9單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.2）。",
                        "第9單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.2）。（錯配語序與字詞）",
                        "第9單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第9單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第9單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.3）。",
                        "第9單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.3）。（虛詞缺失不合規範）",
                        "第9單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第9單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「買嘢、價錢同找錢 (Shopping & Currency)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 9-2）：",
                    "options": [
                        "第9單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.2）。",
                        "第9單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.2）。（主謂語序顛倒）",
                        "第9單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u9-l2）嘅核心關鍵詞（例如「買嘢、價」）：",
                    "acceptedAnswers": [
                        "買嘢、價",
                        "買嘢、價錢同",
                        "買嘢、價錢同找錢"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「買嘢、價」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u9-l3": {
        "id": "hk-u9-l3",
        "subject": "cantonese",
        "unit": 9,
        "lessonNumber": 3,
        "title": "買嘢、價錢同找錢 (Shopping & Currency) (第3課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：港幣貨幣單位（蚊/毫/仙）、街市同商場買嘢對話、講價同找錢表達。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u9-l3）系統深入地探討「買嘢、價錢同找錢 (Shopping & Currency)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第9單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.3）。",
                    "r": "Dai6 9 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 9 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第9單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.4）。",
                    "r": "Dai6 9 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 9 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「買嘢、價錢同找錢 (Shopping & Currency) (第3課)」嘅標準規範？",
                    "options": [
                        "第9單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.3）。",
                        "第9單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.3）。（錯配語序與字詞）",
                        "第9單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第9單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第9單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.4）。",
                        "第9單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.4）。（虛詞缺失不合規範）",
                        "第9單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第9單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「買嘢、價錢同找錢 (Shopping & Currency)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 9-3）：",
                    "options": [
                        "第9單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.3）。",
                        "第9單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.3）。（主謂語序顛倒）",
                        "第9單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u9-l3）嘅核心關鍵詞（例如「買嘢、價」）：",
                    "acceptedAnswers": [
                        "買嘢、價",
                        "買嘢、價錢同",
                        "買嘢、價錢同找錢"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「買嘢、價」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u9-l4": {
        "id": "hk-u9-l4",
        "subject": "cantonese",
        "unit": 9,
        "lessonNumber": 4,
        "title": "買嘢、價錢同找錢 (Shopping & Currency) (第4課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：港幣貨幣單位（蚊/毫/仙）、街市同商場買嘢對話、講價同找錢表達。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u9-l4）系統深入地探討「買嘢、價錢同找錢 (Shopping & Currency)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第9單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.4）。",
                    "r": "Dai6 9 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 9 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第9單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.5）。",
                    "r": "Dai6 9 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 9 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「買嘢、價錢同找錢 (Shopping & Currency) (第4課)」嘅標準規範？",
                    "options": [
                        "第9單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.4）。",
                        "第9單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.4）。（錯配語序與字詞）",
                        "第9單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第9單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第9單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.5）。",
                        "第9單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.5）。（虛詞缺失不合規範）",
                        "第10單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第9單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「買嘢、價錢同找錢 (Shopping & Currency)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 9-4）：",
                    "options": [
                        "第9單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.4）。",
                        "第9單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.4）。（主謂語序顛倒）",
                        "第9單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u9-l4）嘅核心關鍵詞（例如「買嘢、價」）：",
                    "acceptedAnswers": [
                        "買嘢、價",
                        "買嘢、價錢同",
                        "買嘢、價錢同找錢"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「買嘢、價」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u9-l5": {
        "id": "hk-u9-l5",
        "subject": "cantonese",
        "unit": 9,
        "lessonNumber": 5,
        "title": "買嘢、價錢同找錢 (Shopping & Currency) (第5課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：港幣貨幣單位（蚊/毫/仙）、街市同商場買嘢對話、講價同找錢表達。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u9-l5）系統深入地探討「買嘢、價錢同找錢 (Shopping & Currency)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第9單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.5）。",
                    "r": "Dai6 9 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 9 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第10單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.1）。",
                    "r": "Dai6 10 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 10 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「買嘢、價錢同找錢 (Shopping & Currency) (第5課)」嘅標準規範？",
                    "options": [
                        "第9單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.5）。",
                        "第9單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.5）。（錯配語序與字詞）",
                        "第10單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第9單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第10單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.1）。",
                        "第10單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.1）。（虛詞缺失不合規範）",
                        "第10單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第10單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「買嘢、價錢同找錢 (Shopping & Currency)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 9-5）：",
                    "options": [
                        "第9單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.5）。",
                        "第9單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第9課嘅語法重點（句子標號：9.5）。（主謂語序顛倒）",
                        "第10單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u9-l5）嘅核心關鍵詞（例如「買嘢、價」）：",
                    "acceptedAnswers": [
                        "買嘢、價",
                        "買嘢、價錢同",
                        "買嘢、價錢同找錢"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「買嘢、價」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u10-l1": {
        "id": "hk-u10-l1",
        "subject": "cantonese",
        "unit": 10,
        "lessonNumber": 1,
        "title": "身體部位同睇醫生 (Health & Medical Care) (第1課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：人體器官詞彙、痛症主訴（頭痛/發燒/咳/肚痾）、診所掛號問診同服藥指引。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u10-l1）系統深入地探討「身體部位同睇醫生 (Health & Medical Care)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第10單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.1）。",
                    "r": "Dai6 10 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 10 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第10單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.2）。",
                    "r": "Dai6 10 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 10 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「身體部位同睇醫生 (Health & Medical Care) (第1課)」嘅標準規範？",
                    "options": [
                        "第10單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.1）。",
                        "第10單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.1）。（錯配語序與字詞）",
                        "第10單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第10單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第10單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.2）。",
                        "第10單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.2）。（虛詞缺失不合規範）",
                        "第10單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第10單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「身體部位同睇醫生 (Health & Medical Care)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 10-1）：",
                    "options": [
                        "第10單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.1）。",
                        "第10單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.1）。（主謂語序顛倒）",
                        "第10單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u10-l1）嘅核心關鍵詞（例如「身體部位」）：",
                    "acceptedAnswers": [
                        "身體部位",
                        "身體部位同睇",
                        "身體部位同睇醫生"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「身體部位」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u10-l2": {
        "id": "hk-u10-l2",
        "subject": "cantonese",
        "unit": 10,
        "lessonNumber": 2,
        "title": "身體部位同睇醫生 (Health & Medical Care) (第2課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：人體器官詞彙、痛症主訴（頭痛/發燒/咳/肚痾）、診所掛號問診同服藥指引。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u10-l2）系統深入地探討「身體部位同睇醫生 (Health & Medical Care)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第10單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.2）。",
                    "r": "Dai6 10 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 10 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第10單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.3）。",
                    "r": "Dai6 10 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 10 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「身體部位同睇醫生 (Health & Medical Care) (第2課)」嘅標準規範？",
                    "options": [
                        "第10單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.2）。",
                        "第10單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.2）。（錯配語序與字詞）",
                        "第10單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第10單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第10單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.3）。",
                        "第10單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.3）。（虛詞缺失不合規範）",
                        "第10單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第10單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「身體部位同睇醫生 (Health & Medical Care)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 10-2）：",
                    "options": [
                        "第10單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.2）。",
                        "第10單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.2）。（主謂語序顛倒）",
                        "第10單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u10-l2）嘅核心關鍵詞（例如「身體部位」）：",
                    "acceptedAnswers": [
                        "身體部位",
                        "身體部位同睇",
                        "身體部位同睇醫生"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「身體部位」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u10-l3": {
        "id": "hk-u10-l3",
        "subject": "cantonese",
        "unit": 10,
        "lessonNumber": 3,
        "title": "身體部位同睇醫生 (Health & Medical Care) (第3課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：人體器官詞彙、痛症主訴（頭痛/發燒/咳/肚痾）、診所掛號問診同服藥指引。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u10-l3）系統深入地探討「身體部位同睇醫生 (Health & Medical Care)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第10單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.3）。",
                    "r": "Dai6 10 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 10 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第10單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.4）。",
                    "r": "Dai6 10 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 10 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「身體部位同睇醫生 (Health & Medical Care) (第3課)」嘅標準規範？",
                    "options": [
                        "第10單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.3）。",
                        "第10單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.3）。（錯配語序與字詞）",
                        "第10單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第10單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第10單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.4）。",
                        "第10單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.4）。（虛詞缺失不合規範）",
                        "第10單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第10單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「身體部位同睇醫生 (Health & Medical Care)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 10-3）：",
                    "options": [
                        "第10單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.3）。",
                        "第10單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.3）。（主謂語序顛倒）",
                        "第10單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u10-l3）嘅核心關鍵詞（例如「身體部位」）：",
                    "acceptedAnswers": [
                        "身體部位",
                        "身體部位同睇",
                        "身體部位同睇醫生"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「身體部位」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u10-l4": {
        "id": "hk-u10-l4",
        "subject": "cantonese",
        "unit": 10,
        "lessonNumber": 4,
        "title": "身體部位同睇醫生 (Health & Medical Care) (第4課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：人體器官詞彙、痛症主訴（頭痛/發燒/咳/肚痾）、診所掛號問診同服藥指引。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u10-l4）系統深入地探討「身體部位同睇醫生 (Health & Medical Care)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第10單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.4）。",
                    "r": "Dai6 10 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 10 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第10單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.5）。",
                    "r": "Dai6 10 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 10 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「身體部位同睇醫生 (Health & Medical Care) (第4課)」嘅標準規範？",
                    "options": [
                        "第10單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.4）。",
                        "第10單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.4）。（錯配語序與字詞）",
                        "第10單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第10單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第10單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.5）。",
                        "第10單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.5）。（虛詞缺失不合規範）",
                        "第11單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第10單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「身體部位同睇醫生 (Health & Medical Care)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 10-4）：",
                    "options": [
                        "第10單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.4）。",
                        "第10單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.4）。（主謂語序顛倒）",
                        "第10單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u10-l4）嘅核心關鍵詞（例如「身體部位」）：",
                    "acceptedAnswers": [
                        "身體部位",
                        "身體部位同睇",
                        "身體部位同睇醫生"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「身體部位」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u10-l5": {
        "id": "hk-u10-l5",
        "subject": "cantonese",
        "unit": 10,
        "lessonNumber": 5,
        "title": "身體部位同睇醫生 (Health & Medical Care) (第5課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：人體器官詞彙、痛症主訴（頭痛/發燒/咳/肚痾）、診所掛號問診同服藥指引。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u10-l5）系統深入地探討「身體部位同睇醫生 (Health & Medical Care)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第10單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.5）。",
                    "r": "Dai6 10 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 10 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第11單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.1）。",
                    "r": "Dai6 11 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 11 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「身體部位同睇醫生 (Health & Medical Care) (第5課)」嘅標準規範？",
                    "options": [
                        "第10單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.5）。",
                        "第10單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.5）。（錯配語序與字詞）",
                        "第11單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第10單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第11單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.1）。",
                        "第11單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.1）。（虛詞缺失不合規範）",
                        "第11單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第11單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「身體部位同睇醫生 (Health & Medical Care)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 10-5）：",
                    "options": [
                        "第10單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.5）。",
                        "第10單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第10課嘅語法重點（句子標號：10.5）。（主謂語序顛倒）",
                        "第11單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u10-l5）嘅核心關鍵詞（例如「身體部位」）：",
                    "acceptedAnswers": [
                        "身體部位",
                        "身體部位同睇",
                        "身體部位同睇醫生"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「身體部位」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u11-l1": {
        "id": "hk-u11-l1",
        "subject": "cantonese",
        "unit": 11,
        "lessonNumber": 1,
        "title": "助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第1課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語情態助詞喺意願、能力、應當同許可方面嘅語義辨析（識唔識/得唔得）。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u11-l1）系統深入地探討「助動詞（想/要/識/可以/得） (Modal Verbs & Ability)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第11單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.1）。",
                    "r": "Dai6 11 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 11 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第11單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.2）。",
                    "r": "Dai6 11 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 11 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第1課)」嘅標準規範？",
                    "options": [
                        "第11單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.1）。",
                        "第11單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.1）。（錯配語序與字詞）",
                        "第11單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第11單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第11單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.2）。",
                        "第11單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.2）。（虛詞缺失不合規範）",
                        "第11單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第11單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「助動詞（想/要/識/可以/得） (Modal Verbs & Ability)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 11-1）：",
                    "options": [
                        "第11單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.1）。",
                        "第11單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.1）。（主謂語序顛倒）",
                        "第11單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u11-l1）嘅核心關鍵詞（例如「助動詞（」）：",
                    "acceptedAnswers": [
                        "助動詞（",
                        "助動詞（想/",
                        "助動詞（想/要/識/可以/得）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「助動詞（」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u11-l2": {
        "id": "hk-u11-l2",
        "subject": "cantonese",
        "unit": 11,
        "lessonNumber": 2,
        "title": "助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第2課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語情態助詞喺意願、能力、應當同許可方面嘅語義辨析（識唔識/得唔得）。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u11-l2）系統深入地探討「助動詞（想/要/識/可以/得） (Modal Verbs & Ability)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第11單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.2）。",
                    "r": "Dai6 11 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 11 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第11單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.3）。",
                    "r": "Dai6 11 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 11 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第2課)」嘅標準規範？",
                    "options": [
                        "第11單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.2）。",
                        "第11單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.2）。（錯配語序與字詞）",
                        "第11單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第11單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第11單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.3）。",
                        "第11單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.3）。（虛詞缺失不合規範）",
                        "第11單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第11單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「助動詞（想/要/識/可以/得） (Modal Verbs & Ability)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 11-2）：",
                    "options": [
                        "第11單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.2）。",
                        "第11單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.2）。（主謂語序顛倒）",
                        "第11單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u11-l2）嘅核心關鍵詞（例如「助動詞（」）：",
                    "acceptedAnswers": [
                        "助動詞（",
                        "助動詞（想/",
                        "助動詞（想/要/識/可以/得）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「助動詞（」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u11-l3": {
        "id": "hk-u11-l3",
        "subject": "cantonese",
        "unit": 11,
        "lessonNumber": 3,
        "title": "助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第3課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語情態助詞喺意願、能力、應當同許可方面嘅語義辨析（識唔識/得唔得）。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u11-l3）系統深入地探討「助動詞（想/要/識/可以/得） (Modal Verbs & Ability)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第11單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.3）。",
                    "r": "Dai6 11 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 11 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第11單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.4）。",
                    "r": "Dai6 11 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 11 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第3課)」嘅標準規範？",
                    "options": [
                        "第11單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.3）。",
                        "第11單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.3）。（錯配語序與字詞）",
                        "第11單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第11單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第11單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.4）。",
                        "第11單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.4）。（虛詞缺失不合規範）",
                        "第11單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第11單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「助動詞（想/要/識/可以/得） (Modal Verbs & Ability)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 11-3）：",
                    "options": [
                        "第11單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.3）。",
                        "第11單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.3）。（主謂語序顛倒）",
                        "第11單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u11-l3）嘅核心關鍵詞（例如「助動詞（」）：",
                    "acceptedAnswers": [
                        "助動詞（",
                        "助動詞（想/",
                        "助動詞（想/要/識/可以/得）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「助動詞（」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u11-l4": {
        "id": "hk-u11-l4",
        "subject": "cantonese",
        "unit": 11,
        "lessonNumber": 4,
        "title": "助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第4課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語情態助詞喺意願、能力、應當同許可方面嘅語義辨析（識唔識/得唔得）。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u11-l4）系統深入地探討「助動詞（想/要/識/可以/得） (Modal Verbs & Ability)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第11單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.4）。",
                    "r": "Dai6 11 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 11 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第11單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.5）。",
                    "r": "Dai6 11 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 11 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第4課)」嘅標準規範？",
                    "options": [
                        "第11單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.4）。",
                        "第11單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.4）。（錯配語序與字詞）",
                        "第11單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第11單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第11單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.5）。",
                        "第11單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.5）。（虛詞缺失不合規範）",
                        "第12單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第11單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「助動詞（想/要/識/可以/得） (Modal Verbs & Ability)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 11-4）：",
                    "options": [
                        "第11單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.4）。",
                        "第11單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.4）。（主謂語序顛倒）",
                        "第11單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u11-l4）嘅核心關鍵詞（例如「助動詞（」）：",
                    "acceptedAnswers": [
                        "助動詞（",
                        "助動詞（想/",
                        "助動詞（想/要/識/可以/得）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「助動詞（」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u11-l5": {
        "id": "hk-u11-l5",
        "subject": "cantonese",
        "unit": 11,
        "lessonNumber": 5,
        "title": "助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第5課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語情態助詞喺意願、能力、應當同許可方面嘅語義辨析（識唔識/得唔得）。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u11-l5）系統深入地探討「助動詞（想/要/識/可以/得） (Modal Verbs & Ability)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第11單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.5）。",
                    "r": "Dai6 11 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 11 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第12單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.1）。",
                    "r": "Dai6 12 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 12 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第5課)」嘅標準規範？",
                    "options": [
                        "第11單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.5）。",
                        "第11單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.5）。（錯配語序與字詞）",
                        "第12單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第11單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第12單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.1）。",
                        "第12單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.1）。（虛詞缺失不合規範）",
                        "第12單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第12單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「助動詞（想/要/識/可以/得） (Modal Verbs & Ability)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 11-5）：",
                    "options": [
                        "第11單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.5）。",
                        "第11單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第11課嘅語法重點（句子標號：11.5）。（主謂語序顛倒）",
                        "第12單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u11-l5）嘅核心關鍵詞（例如「助動詞（」）：",
                    "acceptedAnswers": [
                        "助動詞（",
                        "助動詞（想/",
                        "助動詞（想/要/識/可以/得）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「助動詞（」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u12-l1": {
        "id": "hk-u12-l1",
        "subject": "cantonese",
        "unit": 12,
        "lessonNumber": 1,
        "title": "興趣、運動同娛樂 (Hobbies & Recreation) (第1課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：文娛體育詞彙、離合動詞同廣東話口語娛樂表達（睇戲/唱卡拉OK/行山/游水）。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u12-l1）系統深入地探討「興趣、運動同娛樂 (Hobbies & Recreation)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第12單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.1）。",
                    "r": "Dai6 12 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 12 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第12單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.2）。",
                    "r": "Dai6 12 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 12 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「興趣、運動同娛樂 (Hobbies & Recreation) (第1課)」嘅標準規範？",
                    "options": [
                        "第12單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.1）。",
                        "第12單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.1）。（錯配語序與字詞）",
                        "第12單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第12單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第12單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.2）。",
                        "第12單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.2）。（虛詞缺失不合規範）",
                        "第12單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第12單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「興趣、運動同娛樂 (Hobbies & Recreation)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 12-1）：",
                    "options": [
                        "第12單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.1）。",
                        "第12單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.1）。（主謂語序顛倒）",
                        "第12單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u12-l1）嘅核心關鍵詞（例如「興趣、運」）：",
                    "acceptedAnswers": [
                        "興趣、運",
                        "興趣、運動同",
                        "興趣、運動同娛樂"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「興趣、運」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u12-l2": {
        "id": "hk-u12-l2",
        "subject": "cantonese",
        "unit": 12,
        "lessonNumber": 2,
        "title": "興趣、運動同娛樂 (Hobbies & Recreation) (第2課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：文娛體育詞彙、離合動詞同廣東話口語娛樂表達（睇戲/唱卡拉OK/行山/游水）。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u12-l2）系統深入地探討「興趣、運動同娛樂 (Hobbies & Recreation)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第12單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.2）。",
                    "r": "Dai6 12 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 12 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第12單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.3）。",
                    "r": "Dai6 12 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 12 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「興趣、運動同娛樂 (Hobbies & Recreation) (第2課)」嘅標準規範？",
                    "options": [
                        "第12單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.2）。",
                        "第12單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.2）。（錯配語序與字詞）",
                        "第12單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第12單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第12單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.3）。",
                        "第12單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.3）。（虛詞缺失不合規範）",
                        "第12單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第12單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「興趣、運動同娛樂 (Hobbies & Recreation)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 12-2）：",
                    "options": [
                        "第12單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.2）。",
                        "第12單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.2）。（主謂語序顛倒）",
                        "第12單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u12-l2）嘅核心關鍵詞（例如「興趣、運」）：",
                    "acceptedAnswers": [
                        "興趣、運",
                        "興趣、運動同",
                        "興趣、運動同娛樂"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「興趣、運」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u12-l3": {
        "id": "hk-u12-l3",
        "subject": "cantonese",
        "unit": 12,
        "lessonNumber": 3,
        "title": "興趣、運動同娛樂 (Hobbies & Recreation) (第3課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：文娛體育詞彙、離合動詞同廣東話口語娛樂表達（睇戲/唱卡拉OK/行山/游水）。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u12-l3）系統深入地探討「興趣、運動同娛樂 (Hobbies & Recreation)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第12單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.3）。",
                    "r": "Dai6 12 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 12 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第12單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.4）。",
                    "r": "Dai6 12 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 12 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「興趣、運動同娛樂 (Hobbies & Recreation) (第3課)」嘅標準規範？",
                    "options": [
                        "第12單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.3）。",
                        "第12單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.3）。（錯配語序與字詞）",
                        "第12單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第12單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第12單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.4）。",
                        "第12單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.4）。（虛詞缺失不合規範）",
                        "第12單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第12單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「興趣、運動同娛樂 (Hobbies & Recreation)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 12-3）：",
                    "options": [
                        "第12單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.3）。",
                        "第12單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.3）。（主謂語序顛倒）",
                        "第12單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u12-l3）嘅核心關鍵詞（例如「興趣、運」）：",
                    "acceptedAnswers": [
                        "興趣、運",
                        "興趣、運動同",
                        "興趣、運動同娛樂"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「興趣、運」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u12-l4": {
        "id": "hk-u12-l4",
        "subject": "cantonese",
        "unit": 12,
        "lessonNumber": 4,
        "title": "興趣、運動同娛樂 (Hobbies & Recreation) (第4課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：文娛體育詞彙、離合動詞同廣東話口語娛樂表達（睇戲/唱卡拉OK/行山/游水）。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u12-l4）系統深入地探討「興趣、運動同娛樂 (Hobbies & Recreation)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第12單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.4）。",
                    "r": "Dai6 12 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 12 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第12單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.5）。",
                    "r": "Dai6 12 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 12 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「興趣、運動同娛樂 (Hobbies & Recreation) (第4課)」嘅標準規範？",
                    "options": [
                        "第12單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.4）。",
                        "第12單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.4）。（錯配語序與字詞）",
                        "第12單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第12單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第12單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.5）。",
                        "第12單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.5）。（虛詞缺失不合規範）",
                        "第13單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第12單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「興趣、運動同娛樂 (Hobbies & Recreation)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 12-4）：",
                    "options": [
                        "第12單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.4）。",
                        "第12單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.4）。（主謂語序顛倒）",
                        "第12單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u12-l4）嘅核心關鍵詞（例如「興趣、運」）：",
                    "acceptedAnswers": [
                        "興趣、運",
                        "興趣、運動同",
                        "興趣、運動同娛樂"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「興趣、運」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u12-l5": {
        "id": "hk-u12-l5",
        "subject": "cantonese",
        "unit": 12,
        "lessonNumber": 5,
        "title": "興趣、運動同娛樂 (Hobbies & Recreation) (第5課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：文娛體育詞彙、離合動詞同廣東話口語娛樂表達（睇戲/唱卡拉OK/行山/游水）。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u12-l5）系統深入地探討「興趣、運動同娛樂 (Hobbies & Recreation)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第12單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.5）。",
                    "r": "Dai6 12 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 12 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第13單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.1）。",
                    "r": "Dai6 13 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 13 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「興趣、運動同娛樂 (Hobbies & Recreation) (第5課)」嘅標準規範？",
                    "options": [
                        "第12單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.5）。",
                        "第12單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.5）。（錯配語序與字詞）",
                        "第13單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第12單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第13單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.1）。",
                        "第13單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.1）。（虛詞缺失不合規範）",
                        "第13單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第13單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「興趣、運動同娛樂 (Hobbies & Recreation)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 12-5）：",
                    "options": [
                        "第12單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.5）。",
                        "第12單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第12課嘅語法重點（句子標號：12.5）。（主謂語序顛倒）",
                        "第13單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u12-l5）嘅核心關鍵詞（例如「興趣、運」）：",
                    "acceptedAnswers": [
                        "興趣、運",
                        "興趣、運動同",
                        "興趣、運動同娛樂"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「興趣、運」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u13-l1": {
        "id": "hk-u13-l1",
        "subject": "cantonese",
        "unit": 13,
        "lessonNumber": 1,
        "title": "工種、職場同辦公室對話 (Professions & Workplace) (第1課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：各行各業職稱、求職面試、辦公室日常溝通同商務電郵用語。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u13-l1）系統深入地探討「工種、職場同辦公室對話 (Professions & Workplace)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第13單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.1）。",
                    "r": "Dai6 13 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 13 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第13單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.2）。",
                    "r": "Dai6 13 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 13 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「工種、職場同辦公室對話 (Professions & Workplace) (第1課)」嘅標準規範？",
                    "options": [
                        "第13單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.1）。",
                        "第13單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.1）。（錯配語序與字詞）",
                        "第13單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第13單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第13單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.2）。",
                        "第13單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.2）。（虛詞缺失不合規範）",
                        "第13單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第13單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「工種、職場同辦公室對話 (Professions & Workplace)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 13-1）：",
                    "options": [
                        "第13單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.1）。",
                        "第13單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.1）。（主謂語序顛倒）",
                        "第13單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u13-l1）嘅核心關鍵詞（例如「工種、職」）：",
                    "acceptedAnswers": [
                        "工種、職",
                        "工種、職場同",
                        "工種、職場同辦公室對話"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「工種、職」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u13-l2": {
        "id": "hk-u13-l2",
        "subject": "cantonese",
        "unit": 13,
        "lessonNumber": 2,
        "title": "工種、職場同辦公室對話 (Professions & Workplace) (第2課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：各行各業職稱、求職面試、辦公室日常溝通同商務電郵用語。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u13-l2）系統深入地探討「工種、職場同辦公室對話 (Professions & Workplace)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第13單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.2）。",
                    "r": "Dai6 13 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 13 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第13單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.3）。",
                    "r": "Dai6 13 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 13 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「工種、職場同辦公室對話 (Professions & Workplace) (第2課)」嘅標準規範？",
                    "options": [
                        "第13單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.2）。",
                        "第13單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.2）。（錯配語序與字詞）",
                        "第13單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第13單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第13單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.3）。",
                        "第13單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.3）。（虛詞缺失不合規範）",
                        "第13單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第13單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「工種、職場同辦公室對話 (Professions & Workplace)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 13-2）：",
                    "options": [
                        "第13單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.2）。",
                        "第13單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.2）。（主謂語序顛倒）",
                        "第13單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u13-l2）嘅核心關鍵詞（例如「工種、職」）：",
                    "acceptedAnswers": [
                        "工種、職",
                        "工種、職場同",
                        "工種、職場同辦公室對話"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「工種、職」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u13-l3": {
        "id": "hk-u13-l3",
        "subject": "cantonese",
        "unit": 13,
        "lessonNumber": 3,
        "title": "工種、職場同辦公室對話 (Professions & Workplace) (第3課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：各行各業職稱、求職面試、辦公室日常溝通同商務電郵用語。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u13-l3）系統深入地探討「工種、職場同辦公室對話 (Professions & Workplace)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第13單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.3）。",
                    "r": "Dai6 13 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 13 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第13單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.4）。",
                    "r": "Dai6 13 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 13 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「工種、職場同辦公室對話 (Professions & Workplace) (第3課)」嘅標準規範？",
                    "options": [
                        "第13單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.3）。",
                        "第13單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.3）。（錯配語序與字詞）",
                        "第13單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第13單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第13單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.4）。",
                        "第13單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.4）。（虛詞缺失不合規範）",
                        "第13單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第13單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「工種、職場同辦公室對話 (Professions & Workplace)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 13-3）：",
                    "options": [
                        "第13單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.3）。",
                        "第13單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.3）。（主謂語序顛倒）",
                        "第13單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u13-l3）嘅核心關鍵詞（例如「工種、職」）：",
                    "acceptedAnswers": [
                        "工種、職",
                        "工種、職場同",
                        "工種、職場同辦公室對話"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「工種、職」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u13-l4": {
        "id": "hk-u13-l4",
        "subject": "cantonese",
        "unit": 13,
        "lessonNumber": 4,
        "title": "工種、職場同辦公室對話 (Professions & Workplace) (第4課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：各行各業職稱、求職面試、辦公室日常溝通同商務電郵用語。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u13-l4）系統深入地探討「工種、職場同辦公室對話 (Professions & Workplace)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第13單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.4）。",
                    "r": "Dai6 13 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 13 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第13單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.5）。",
                    "r": "Dai6 13 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 13 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「工種、職場同辦公室對話 (Professions & Workplace) (第4課)」嘅標準規範？",
                    "options": [
                        "第13單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.4）。",
                        "第13單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.4）。（錯配語序與字詞）",
                        "第13單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第13單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第13單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.5）。",
                        "第13單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.5）。（虛詞缺失不合規範）",
                        "第14單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第13單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「工種、職場同辦公室對話 (Professions & Workplace)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 13-4）：",
                    "options": [
                        "第13單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.4）。",
                        "第13單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.4）。（主謂語序顛倒）",
                        "第13單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u13-l4）嘅核心關鍵詞（例如「工種、職」）：",
                    "acceptedAnswers": [
                        "工種、職",
                        "工種、職場同",
                        "工種、職場同辦公室對話"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「工種、職」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u13-l5": {
        "id": "hk-u13-l5",
        "subject": "cantonese",
        "unit": 13,
        "lessonNumber": 5,
        "title": "工種、職場同辦公室對話 (Professions & Workplace) (第5課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：各行各業職稱、求職面試、辦公室日常溝通同商務電郵用語。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u13-l5）系統深入地探討「工種、職場同辦公室對話 (Professions & Workplace)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第13單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.5）。",
                    "r": "Dai6 13 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 13 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第14單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.1）。",
                    "r": "Dai6 14 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 14 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「工種、職場同辦公室對話 (Professions & Workplace) (第5課)」嘅標準規範？",
                    "options": [
                        "第13單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.5）。",
                        "第13單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.5）。（錯配語序與字詞）",
                        "第14單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第13單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第14單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.1）。",
                        "第14單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.1）。（虛詞缺失不合規範）",
                        "第14單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第14單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「工種、職場同辦公室對話 (Professions & Workplace)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 13-5）：",
                    "options": [
                        "第13單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.5）。",
                        "第13單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第13課嘅語法重點（句子標號：13.5）。（主謂語序顛倒）",
                        "第14單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u13-l5）嘅核心關鍵詞（例如「工種、職」）：",
                    "acceptedAnswers": [
                        "工種、職",
                        "工種、職場同",
                        "工種、職場同辦公室對話"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「工種、職」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u14-l1": {
        "id": "hk-u14-l1",
        "subject": "cantonese",
        "unit": 14,
        "lessonNumber": 1,
        "title": "比較句（過/冇/同埋） (Comparative Structures) (第1課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語特有後置比較結構（A 形容詞＋過 B）、否定比較（A 冇 B 咁...）同等比結構。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u14-l1）系統深入地探討「比較句（過/冇/同埋） (Comparative Structures)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第14單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.1）。",
                    "r": "Dai6 14 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 14 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第14單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.2）。",
                    "r": "Dai6 14 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 14 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「比較句（過/冇/同埋） (Comparative Structures) (第1課)」嘅標準規範？",
                    "options": [
                        "第14單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.1）。",
                        "第14單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.1）。（錯配語序與字詞）",
                        "第14單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第14單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第14單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.2）。",
                        "第14單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.2）。（虛詞缺失不合規範）",
                        "第14單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第14單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「比較句（過/冇/同埋） (Comparative Structures)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 14-1）：",
                    "options": [
                        "第14單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.1）。",
                        "第14單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.1）。（主謂語序顛倒）",
                        "第14單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u14-l1）嘅核心關鍵詞（例如「比較句（」）：",
                    "acceptedAnswers": [
                        "比較句（",
                        "比較句（過/",
                        "比較句（過/冇/同埋）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「比較句（」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u14-l2": {
        "id": "hk-u14-l2",
        "subject": "cantonese",
        "unit": 14,
        "lessonNumber": 2,
        "title": "比較句（過/冇/同埋） (Comparative Structures) (第2課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語特有後置比較結構（A 形容詞＋過 B）、否定比較（A 冇 B 咁...）同等比結構。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u14-l2）系統深入地探討「比較句（過/冇/同埋） (Comparative Structures)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第14單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.2）。",
                    "r": "Dai6 14 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 14 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第14單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.3）。",
                    "r": "Dai6 14 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 14 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「比較句（過/冇/同埋） (Comparative Structures) (第2課)」嘅標準規範？",
                    "options": [
                        "第14單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.2）。",
                        "第14單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.2）。（錯配語序與字詞）",
                        "第14單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第14單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第14單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.3）。",
                        "第14單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.3）。（虛詞缺失不合規範）",
                        "第14單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第14單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「比較句（過/冇/同埋） (Comparative Structures)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 14-2）：",
                    "options": [
                        "第14單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.2）。",
                        "第14單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.2）。（主謂語序顛倒）",
                        "第14單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u14-l2）嘅核心關鍵詞（例如「比較句（」）：",
                    "acceptedAnswers": [
                        "比較句（",
                        "比較句（過/",
                        "比較句（過/冇/同埋）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「比較句（」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u14-l3": {
        "id": "hk-u14-l3",
        "subject": "cantonese",
        "unit": 14,
        "lessonNumber": 3,
        "title": "比較句（過/冇/同埋） (Comparative Structures) (第3課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語特有後置比較結構（A 形容詞＋過 B）、否定比較（A 冇 B 咁...）同等比結構。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u14-l3）系統深入地探討「比較句（過/冇/同埋） (Comparative Structures)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第14單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.3）。",
                    "r": "Dai6 14 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 14 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第14單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.4）。",
                    "r": "Dai6 14 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 14 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「比較句（過/冇/同埋） (Comparative Structures) (第3課)」嘅標準規範？",
                    "options": [
                        "第14單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.3）。",
                        "第14單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.3）。（錯配語序與字詞）",
                        "第14單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第14單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第14單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.4）。",
                        "第14單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.4）。（虛詞缺失不合規範）",
                        "第14單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第14單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「比較句（過/冇/同埋） (Comparative Structures)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 14-3）：",
                    "options": [
                        "第14單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.3）。",
                        "第14單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.3）。（主謂語序顛倒）",
                        "第14單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u14-l3）嘅核心關鍵詞（例如「比較句（」）：",
                    "acceptedAnswers": [
                        "比較句（",
                        "比較句（過/",
                        "比較句（過/冇/同埋）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「比較句（」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u14-l4": {
        "id": "hk-u14-l4",
        "subject": "cantonese",
        "unit": 14,
        "lessonNumber": 4,
        "title": "比較句（過/冇/同埋） (Comparative Structures) (第4課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語特有後置比較結構（A 形容詞＋過 B）、否定比較（A 冇 B 咁...）同等比結構。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u14-l4）系統深入地探討「比較句（過/冇/同埋） (Comparative Structures)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第14單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.4）。",
                    "r": "Dai6 14 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 14 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第14單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.5）。",
                    "r": "Dai6 14 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 14 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「比較句（過/冇/同埋） (Comparative Structures) (第4課)」嘅標準規範？",
                    "options": [
                        "第14單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.4）。",
                        "第14單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.4）。（錯配語序與字詞）",
                        "第14單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第14單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第14單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.5）。",
                        "第14單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.5）。（虛詞缺失不合規範）",
                        "第15單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第14單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「比較句（過/冇/同埋） (Comparative Structures)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 14-4）：",
                    "options": [
                        "第14單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.4）。",
                        "第14單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.4）。（主謂語序顛倒）",
                        "第14單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u14-l4）嘅核心關鍵詞（例如「比較句（」）：",
                    "acceptedAnswers": [
                        "比較句（",
                        "比較句（過/",
                        "比較句（過/冇/同埋）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「比較句（」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u14-l5": {
        "id": "hk-u14-l5",
        "subject": "cantonese",
        "unit": 14,
        "lessonNumber": 5,
        "title": "比較句（過/冇/同埋） (Comparative Structures) (第5課)",
        "level": "A2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語特有後置比較結構（A 形容詞＋過 B）、否定比較（A 冇 B 咁...）同等比結構。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u14-l5）系統深入地探討「比較句（過/冇/同埋） (Comparative Structures)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第14單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.5）。",
                    "r": "Dai6 14 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 14 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第15單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.1）。",
                    "r": "Dai6 15 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 15 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「比較句（過/冇/同埋） (Comparative Structures) (第5課)」嘅標準規範？",
                    "options": [
                        "第14單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.5）。",
                        "第14單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.5）。（錯配語序與字詞）",
                        "第15單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第14單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第15單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.1）。",
                        "第15單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.1）。（虛詞缺失不合規範）",
                        "第15單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第15單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「比較句（過/冇/同埋） (Comparative Structures)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 14-5）：",
                    "options": [
                        "第14單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.5）。",
                        "第14單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第14課嘅語法重點（句子標號：14.5）。（主謂語序顛倒）",
                        "第15單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u14-l5）嘅核心關鍵詞（例如「比較句（」）：",
                    "acceptedAnswers": [
                        "比較句（",
                        "比較句（過/",
                        "比較句（過/冇/同埋）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「比較句（」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u15-l1": {
        "id": "hk-u15-l1",
        "subject": "cantonese",
        "unit": 15,
        "lessonNumber": 1,
        "title": "香港地理、旅遊同名勝 (HK Geography & Tourism) (第1課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：港九新界十八區、維多利亞港、太平山頂、大澳水鄉同世界遺產景點。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u15-l1）系統深入地探討「香港地理、旅遊同名勝 (HK Geography & Tourism)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第15單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.1）。",
                    "r": "Dai6 15 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 15 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第15單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.2）。",
                    "r": "Dai6 15 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 15 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「香港地理、旅遊同名勝 (HK Geography & Tourism) (第1課)」嘅標準規範？",
                    "options": [
                        "第15單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.1）。",
                        "第15單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.1）。（錯配語序與字詞）",
                        "第15單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第15單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第15單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.2）。",
                        "第15單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.2）。（虛詞缺失不合規範）",
                        "第15單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第15單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「香港地理、旅遊同名勝 (HK Geography & Tourism)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 15-1）：",
                    "options": [
                        "第15單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.1）。",
                        "第15單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.1）。（主謂語序顛倒）",
                        "第15單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u15-l1）嘅核心關鍵詞（例如「香港地理」）：",
                    "acceptedAnswers": [
                        "香港地理",
                        "香港地理、旅",
                        "香港地理、旅遊同名勝"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「香港地理」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u15-l2": {
        "id": "hk-u15-l2",
        "subject": "cantonese",
        "unit": 15,
        "lessonNumber": 2,
        "title": "香港地理、旅遊同名勝 (HK Geography & Tourism) (第2課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：港九新界十八區、維多利亞港、太平山頂、大澳水鄉同世界遺產景點。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u15-l2）系統深入地探討「香港地理、旅遊同名勝 (HK Geography & Tourism)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第15單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.2）。",
                    "r": "Dai6 15 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 15 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第15單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.3）。",
                    "r": "Dai6 15 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 15 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「香港地理、旅遊同名勝 (HK Geography & Tourism) (第2課)」嘅標準規範？",
                    "options": [
                        "第15單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.2）。",
                        "第15單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.2）。（錯配語序與字詞）",
                        "第15單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第15單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第15單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.3）。",
                        "第15單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.3）。（虛詞缺失不合規範）",
                        "第15單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第15單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「香港地理、旅遊同名勝 (HK Geography & Tourism)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 15-2）：",
                    "options": [
                        "第15單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.2）。",
                        "第15單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.2）。（主謂語序顛倒）",
                        "第15單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u15-l2）嘅核心關鍵詞（例如「香港地理」）：",
                    "acceptedAnswers": [
                        "香港地理",
                        "香港地理、旅",
                        "香港地理、旅遊同名勝"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「香港地理」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u15-l3": {
        "id": "hk-u15-l3",
        "subject": "cantonese",
        "unit": 15,
        "lessonNumber": 3,
        "title": "香港地理、旅遊同名勝 (HK Geography & Tourism) (第3課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：港九新界十八區、維多利亞港、太平山頂、大澳水鄉同世界遺產景點。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u15-l3）系統深入地探討「香港地理、旅遊同名勝 (HK Geography & Tourism)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第15單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.3）。",
                    "r": "Dai6 15 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 15 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第15單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.4）。",
                    "r": "Dai6 15 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 15 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「香港地理、旅遊同名勝 (HK Geography & Tourism) (第3課)」嘅標準規範？",
                    "options": [
                        "第15單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.3）。",
                        "第15單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.3）。（錯配語序與字詞）",
                        "第15單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第15單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第15單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.4）。",
                        "第15單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.4）。（虛詞缺失不合規範）",
                        "第15單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第15單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「香港地理、旅遊同名勝 (HK Geography & Tourism)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 15-3）：",
                    "options": [
                        "第15單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.3）。",
                        "第15單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.3）。（主謂語序顛倒）",
                        "第15單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u15-l3）嘅核心關鍵詞（例如「香港地理」）：",
                    "acceptedAnswers": [
                        "香港地理",
                        "香港地理、旅",
                        "香港地理、旅遊同名勝"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「香港地理」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u15-l4": {
        "id": "hk-u15-l4",
        "subject": "cantonese",
        "unit": 15,
        "lessonNumber": 4,
        "title": "香港地理、旅遊同名勝 (HK Geography & Tourism) (第4課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：港九新界十八區、維多利亞港、太平山頂、大澳水鄉同世界遺產景點。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u15-l4）系統深入地探討「香港地理、旅遊同名勝 (HK Geography & Tourism)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第15單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.4）。",
                    "r": "Dai6 15 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 15 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第15單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.5）。",
                    "r": "Dai6 15 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 15 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「香港地理、旅遊同名勝 (HK Geography & Tourism) (第4課)」嘅標準規範？",
                    "options": [
                        "第15單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.4）。",
                        "第15單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.4）。（錯配語序與字詞）",
                        "第15單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第15單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第15單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.5）。",
                        "第15單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.5）。（虛詞缺失不合規範）",
                        "第16單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第15單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「香港地理、旅遊同名勝 (HK Geography & Tourism)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 15-4）：",
                    "options": [
                        "第15單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.4）。",
                        "第15單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.4）。（主謂語序顛倒）",
                        "第15單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u15-l4）嘅核心關鍵詞（例如「香港地理」）：",
                    "acceptedAnswers": [
                        "香港地理",
                        "香港地理、旅",
                        "香港地理、旅遊同名勝"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「香港地理」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u15-l5": {
        "id": "hk-u15-l5",
        "subject": "cantonese",
        "unit": 15,
        "lessonNumber": 5,
        "title": "香港地理、旅遊同名勝 (HK Geography & Tourism) (第5課)",
        "level": "A1",
        "objective": "全面掌握並熟練運用本課核心內容：港九新界十八區、維多利亞港、太平山頂、大澳水鄉同世界遺產景點。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u15-l5）系統深入地探討「香港地理、旅遊同名勝 (HK Geography & Tourism)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第15單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.5）。",
                    "r": "Dai6 15 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 15 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第16單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.1）。",
                    "r": "Dai6 16 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 16 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「香港地理、旅遊同名勝 (HK Geography & Tourism) (第5課)」嘅標準規範？",
                    "options": [
                        "第15單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.5）。",
                        "第15單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.5）。（錯配語序與字詞）",
                        "第16單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第15單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第16單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.1）。",
                        "第16單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.1）。（虛詞缺失不合規範）",
                        "第16單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第16單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「香港地理、旅遊同名勝 (HK Geography & Tourism)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 15-5）：",
                    "options": [
                        "第15單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.5）。",
                        "第15單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第15課嘅語法重點（句子標號：15.5）。（主謂語序顛倒）",
                        "第16單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u15-l5）嘅核心關鍵詞（例如「香港地理」）：",
                    "acceptedAnswers": [
                        "香港地理",
                        "香港地理、旅",
                        "香港地理、旅遊同名勝"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「香港地理」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u16-l1": {
        "id": "hk-u16-l1",
        "subject": "cantonese",
        "unit": 16,
        "lessonNumber": 1,
        "title": "將字句同處置式 (The ZOENG Disposal Construction) (第1課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語書面語「將」同口語「共/攞」構成嘅處置句句法條件同語義制約。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u16-l1）系統深入地探討「將字句同處置式 (The ZOENG Disposal Construction)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第16單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.1）。",
                    "r": "Dai6 16 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 16 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第16單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.2）。",
                    "r": "Dai6 16 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 16 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「將字句同處置式 (The ZOENG Disposal Construction) (第1課)」嘅標準規範？",
                    "options": [
                        "第16單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.1）。",
                        "第16單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.1）。（錯配語序與字詞）",
                        "第16單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第16單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第16單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.2）。",
                        "第16單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.2）。（虛詞缺失不合規範）",
                        "第16單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第16單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「將字句同處置式 (The ZOENG Disposal Construction)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 16-1）：",
                    "options": [
                        "第16單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.1）。",
                        "第16單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.1）。（主謂語序顛倒）",
                        "第16單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u16-l1）嘅核心關鍵詞（例如「將字句同」）：",
                    "acceptedAnswers": [
                        "將字句同",
                        "將字句同處置",
                        "將字句同處置式"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「將字句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u16-l2": {
        "id": "hk-u16-l2",
        "subject": "cantonese",
        "unit": 16,
        "lessonNumber": 2,
        "title": "將字句同處置式 (The ZOENG Disposal Construction) (第2課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語書面語「將」同口語「共/攞」構成嘅處置句句法條件同語義制約。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u16-l2）系統深入地探討「將字句同處置式 (The ZOENG Disposal Construction)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第16單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.2）。",
                    "r": "Dai6 16 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 16 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第16單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.3）。",
                    "r": "Dai6 16 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 16 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「將字句同處置式 (The ZOENG Disposal Construction) (第2課)」嘅標準規範？",
                    "options": [
                        "第16單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.2）。",
                        "第16單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.2）。（錯配語序與字詞）",
                        "第16單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第16單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第16單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.3）。",
                        "第16單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.3）。（虛詞缺失不合規範）",
                        "第16單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第16單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「將字句同處置式 (The ZOENG Disposal Construction)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 16-2）：",
                    "options": [
                        "第16單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.2）。",
                        "第16單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.2）。（主謂語序顛倒）",
                        "第16單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u16-l2）嘅核心關鍵詞（例如「將字句同」）：",
                    "acceptedAnswers": [
                        "將字句同",
                        "將字句同處置",
                        "將字句同處置式"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「將字句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u16-l3": {
        "id": "hk-u16-l3",
        "subject": "cantonese",
        "unit": 16,
        "lessonNumber": 3,
        "title": "將字句同處置式 (The ZOENG Disposal Construction) (第3課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語書面語「將」同口語「共/攞」構成嘅處置句句法條件同語義制約。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u16-l3）系統深入地探討「將字句同處置式 (The ZOENG Disposal Construction)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第16單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.3）。",
                    "r": "Dai6 16 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 16 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第16單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.4）。",
                    "r": "Dai6 16 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 16 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「將字句同處置式 (The ZOENG Disposal Construction) (第3課)」嘅標準規範？",
                    "options": [
                        "第16單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.3）。",
                        "第16單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.3）。（錯配語序與字詞）",
                        "第16單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第16單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第16單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.4）。",
                        "第16單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.4）。（虛詞缺失不合規範）",
                        "第16單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第16單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「將字句同處置式 (The ZOENG Disposal Construction)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 16-3）：",
                    "options": [
                        "第16單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.3）。",
                        "第16單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.3）。（主謂語序顛倒）",
                        "第16單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u16-l3）嘅核心關鍵詞（例如「將字句同」）：",
                    "acceptedAnswers": [
                        "將字句同",
                        "將字句同處置",
                        "將字句同處置式"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「將字句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u16-l4": {
        "id": "hk-u16-l4",
        "subject": "cantonese",
        "unit": 16,
        "lessonNumber": 4,
        "title": "將字句同處置式 (The ZOENG Disposal Construction) (第4課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語書面語「將」同口語「共/攞」構成嘅處置句句法條件同語義制約。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u16-l4）系統深入地探討「將字句同處置式 (The ZOENG Disposal Construction)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第16單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.4）。",
                    "r": "Dai6 16 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 16 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第16單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.5）。",
                    "r": "Dai6 16 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 16 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「將字句同處置式 (The ZOENG Disposal Construction) (第4課)」嘅標準規範？",
                    "options": [
                        "第16單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.4）。",
                        "第16單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.4）。（錯配語序與字詞）",
                        "第16單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第16單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第16單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.5）。",
                        "第16單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.5）。（虛詞缺失不合規範）",
                        "第17單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第16單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「將字句同處置式 (The ZOENG Disposal Construction)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 16-4）：",
                    "options": [
                        "第16單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.4）。",
                        "第16單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.4）。（主謂語序顛倒）",
                        "第16單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u16-l4）嘅核心關鍵詞（例如「將字句同」）：",
                    "acceptedAnswers": [
                        "將字句同",
                        "將字句同處置",
                        "將字句同處置式"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「將字句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u16-l5": {
        "id": "hk-u16-l5",
        "subject": "cantonese",
        "unit": 16,
        "lessonNumber": 5,
        "title": "將字句同處置式 (The ZOENG Disposal Construction) (第5課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語書面語「將」同口語「共/攞」構成嘅處置句句法條件同語義制約。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u16-l5）系統深入地探討「將字句同處置式 (The ZOENG Disposal Construction)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第16單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.5）。",
                    "r": "Dai6 16 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 16 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第17單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.1）。",
                    "r": "Dai6 17 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 17 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「將字句同處置式 (The ZOENG Disposal Construction) (第5課)」嘅標準規範？",
                    "options": [
                        "第16單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.5）。",
                        "第16單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.5）。（錯配語序與字詞）",
                        "第17單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第16單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第17單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.1）。",
                        "第17單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.1）。（虛詞缺失不合規範）",
                        "第17單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第17單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「將字句同處置式 (The ZOENG Disposal Construction)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 16-5）：",
                    "options": [
                        "第16單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.5）。",
                        "第16單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第16課嘅語法重點（句子標號：16.5）。（主謂語序顛倒）",
                        "第17單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u16-l5）嘅核心關鍵詞（例如「將字句同」）：",
                    "acceptedAnswers": [
                        "將字句同",
                        "將字句同處置",
                        "將字句同處置式"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「將字句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u17-l1": {
        "id": "hk-u17-l1",
        "subject": "cantonese",
        "unit": 17,
        "lessonNumber": 1,
        "title": "畀字句同被動態 (The BEI Passive Voice) (第1課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：介詞「畀/俾」引導嘅被動句、受事主語句同感情色彩分析。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u17-l1）系統深入地探討「畀字句同被動態 (The BEI Passive Voice)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第17單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.1）。",
                    "r": "Dai6 17 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 17 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第17單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.2）。",
                    "r": "Dai6 17 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 17 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「畀字句同被動態 (The BEI Passive Voice) (第1課)」嘅標準規範？",
                    "options": [
                        "第17單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.1）。",
                        "第17單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.1）。（錯配語序與字詞）",
                        "第17單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第17單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第17單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.2）。",
                        "第17單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.2）。（虛詞缺失不合規範）",
                        "第17單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第17單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「畀字句同被動態 (The BEI Passive Voice)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 17-1）：",
                    "options": [
                        "第17單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.1）。",
                        "第17單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.1）。（主謂語序顛倒）",
                        "第17單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u17-l1）嘅核心關鍵詞（例如「畀字句同」）：",
                    "acceptedAnswers": [
                        "畀字句同",
                        "畀字句同被動",
                        "畀字句同被動態"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「畀字句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u17-l2": {
        "id": "hk-u17-l2",
        "subject": "cantonese",
        "unit": 17,
        "lessonNumber": 2,
        "title": "畀字句同被動態 (The BEI Passive Voice) (第2課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：介詞「畀/俾」引導嘅被動句、受事主語句同感情色彩分析。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u17-l2）系統深入地探討「畀字句同被動態 (The BEI Passive Voice)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第17單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.2）。",
                    "r": "Dai6 17 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 17 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第17單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.3）。",
                    "r": "Dai6 17 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 17 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「畀字句同被動態 (The BEI Passive Voice) (第2課)」嘅標準規範？",
                    "options": [
                        "第17單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.2）。",
                        "第17單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.2）。（錯配語序與字詞）",
                        "第17單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第17單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第17單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.3）。",
                        "第17單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.3）。（虛詞缺失不合規範）",
                        "第17單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第17單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「畀字句同被動態 (The BEI Passive Voice)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 17-2）：",
                    "options": [
                        "第17單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.2）。",
                        "第17單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.2）。（主謂語序顛倒）",
                        "第17單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u17-l2）嘅核心關鍵詞（例如「畀字句同」）：",
                    "acceptedAnswers": [
                        "畀字句同",
                        "畀字句同被動",
                        "畀字句同被動態"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「畀字句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u17-l3": {
        "id": "hk-u17-l3",
        "subject": "cantonese",
        "unit": 17,
        "lessonNumber": 3,
        "title": "畀字句同被動態 (The BEI Passive Voice) (第3課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：介詞「畀/俾」引導嘅被動句、受事主語句同感情色彩分析。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u17-l3）系統深入地探討「畀字句同被動態 (The BEI Passive Voice)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第17單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.3）。",
                    "r": "Dai6 17 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 17 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第17單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.4）。",
                    "r": "Dai6 17 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 17 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「畀字句同被動態 (The BEI Passive Voice) (第3課)」嘅標準規範？",
                    "options": [
                        "第17單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.3）。",
                        "第17單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.3）。（錯配語序與字詞）",
                        "第17單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第17單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第17單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.4）。",
                        "第17單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.4）。（虛詞缺失不合規範）",
                        "第17單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第17單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「畀字句同被動態 (The BEI Passive Voice)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 17-3）：",
                    "options": [
                        "第17單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.3）。",
                        "第17單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.3）。（主謂語序顛倒）",
                        "第17單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u17-l3）嘅核心關鍵詞（例如「畀字句同」）：",
                    "acceptedAnswers": [
                        "畀字句同",
                        "畀字句同被動",
                        "畀字句同被動態"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「畀字句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u17-l4": {
        "id": "hk-u17-l4",
        "subject": "cantonese",
        "unit": 17,
        "lessonNumber": 4,
        "title": "畀字句同被動態 (The BEI Passive Voice) (第4課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：介詞「畀/俾」引導嘅被動句、受事主語句同感情色彩分析。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u17-l4）系統深入地探討「畀字句同被動態 (The BEI Passive Voice)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第17單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.4）。",
                    "r": "Dai6 17 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 17 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第17單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.5）。",
                    "r": "Dai6 17 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 17 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「畀字句同被動態 (The BEI Passive Voice) (第4課)」嘅標準規範？",
                    "options": [
                        "第17單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.4）。",
                        "第17單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.4）。（錯配語序與字詞）",
                        "第17單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第17單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第17單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.5）。",
                        "第17單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.5）。（虛詞缺失不合規範）",
                        "第18單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第17單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「畀字句同被動態 (The BEI Passive Voice)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 17-4）：",
                    "options": [
                        "第17單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.4）。",
                        "第17單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.4）。（主謂語序顛倒）",
                        "第17單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u17-l4）嘅核心關鍵詞（例如「畀字句同」）：",
                    "acceptedAnswers": [
                        "畀字句同",
                        "畀字句同被動",
                        "畀字句同被動態"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「畀字句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u17-l5": {
        "id": "hk-u17-l5",
        "subject": "cantonese",
        "unit": 17,
        "lessonNumber": 5,
        "title": "畀字句同被動態 (The BEI Passive Voice) (第5課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：介詞「畀/俾」引導嘅被動句、受事主語句同感情色彩分析。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u17-l5）系統深入地探討「畀字句同被動態 (The BEI Passive Voice)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第17單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.5）。",
                    "r": "Dai6 17 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 17 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第18單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.1）。",
                    "r": "Dai6 18 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 18 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「畀字句同被動態 (The BEI Passive Voice) (第5課)」嘅標準規範？",
                    "options": [
                        "第17單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.5）。",
                        "第17單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.5）。（錯配語序與字詞）",
                        "第18單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第17單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第18單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.1）。",
                        "第18單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.1）。（虛詞缺失不合規範）",
                        "第18單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第18單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「畀字句同被動態 (The BEI Passive Voice)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 17-5）：",
                    "options": [
                        "第17單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.5）。",
                        "第17單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第17課嘅語法重點（句子標號：17.5）。（主謂語序顛倒）",
                        "第18單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u17-l5）嘅核心關鍵詞（例如「畀字句同」）：",
                    "acceptedAnswers": [
                        "畀字句同",
                        "畀字句同被動",
                        "畀字句同被動態"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「畀字句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u18-l1": {
        "id": "hk-u18-l1",
        "subject": "cantonese",
        "unit": 18,
        "lessonNumber": 1,
        "title": "結果補語同趨向補語 (Resultative & Directional Complements) (第1課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：動詞複合補語（睇見/聽到/做完/諗好/走入去/跑出嚟）嘅引申用法。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u18-l1）系統深入地探討「結果補語同趨向補語 (Resultative & Directional Complements)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第18單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.1）。",
                    "r": "Dai6 18 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 18 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第18單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.2）。",
                    "r": "Dai6 18 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 18 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「結果補語同趨向補語 (Resultative & Directional Complements) (第1課)」嘅標準規範？",
                    "options": [
                        "第18單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.1）。",
                        "第18單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.1）。（錯配語序與字詞）",
                        "第18單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第18單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第18單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.2）。",
                        "第18單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.2）。（虛詞缺失不合規範）",
                        "第18單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第18單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「結果補語同趨向補語 (Resultative & Directional Complements)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 18-1）：",
                    "options": [
                        "第18單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.1）。",
                        "第18單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.1）。（主謂語序顛倒）",
                        "第18單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u18-l1）嘅核心關鍵詞（例如「結果補語」）：",
                    "acceptedAnswers": [
                        "結果補語",
                        "結果補語同趨",
                        "結果補語同趨向補語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「結果補語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u18-l2": {
        "id": "hk-u18-l2",
        "subject": "cantonese",
        "unit": 18,
        "lessonNumber": 2,
        "title": "結果補語同趨向補語 (Resultative & Directional Complements) (第2課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：動詞複合補語（睇見/聽到/做完/諗好/走入去/跑出嚟）嘅引申用法。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u18-l2）系統深入地探討「結果補語同趨向補語 (Resultative & Directional Complements)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第18單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.2）。",
                    "r": "Dai6 18 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 18 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第18單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.3）。",
                    "r": "Dai6 18 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 18 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「結果補語同趨向補語 (Resultative & Directional Complements) (第2課)」嘅標準規範？",
                    "options": [
                        "第18單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.2）。",
                        "第18單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.2）。（錯配語序與字詞）",
                        "第18單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第18單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第18單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.3）。",
                        "第18單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.3）。（虛詞缺失不合規範）",
                        "第18單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第18單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「結果補語同趨向補語 (Resultative & Directional Complements)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 18-2）：",
                    "options": [
                        "第18單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.2）。",
                        "第18單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.2）。（主謂語序顛倒）",
                        "第18單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u18-l2）嘅核心關鍵詞（例如「結果補語」）：",
                    "acceptedAnswers": [
                        "結果補語",
                        "結果補語同趨",
                        "結果補語同趨向補語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「結果補語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u18-l3": {
        "id": "hk-u18-l3",
        "subject": "cantonese",
        "unit": 18,
        "lessonNumber": 3,
        "title": "結果補語同趨向補語 (Resultative & Directional Complements) (第3課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：動詞複合補語（睇見/聽到/做完/諗好/走入去/跑出嚟）嘅引申用法。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u18-l3）系統深入地探討「結果補語同趨向補語 (Resultative & Directional Complements)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第18單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.3）。",
                    "r": "Dai6 18 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 18 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第18單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.4）。",
                    "r": "Dai6 18 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 18 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「結果補語同趨向補語 (Resultative & Directional Complements) (第3課)」嘅標準規範？",
                    "options": [
                        "第18單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.3）。",
                        "第18單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.3）。（錯配語序與字詞）",
                        "第18單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第18單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第18單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.4）。",
                        "第18單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.4）。（虛詞缺失不合規範）",
                        "第18單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第18單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「結果補語同趨向補語 (Resultative & Directional Complements)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 18-3）：",
                    "options": [
                        "第18單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.3）。",
                        "第18單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.3）。（主謂語序顛倒）",
                        "第18單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u18-l3）嘅核心關鍵詞（例如「結果補語」）：",
                    "acceptedAnswers": [
                        "結果補語",
                        "結果補語同趨",
                        "結果補語同趨向補語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「結果補語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u18-l4": {
        "id": "hk-u18-l4",
        "subject": "cantonese",
        "unit": 18,
        "lessonNumber": 4,
        "title": "結果補語同趨向補語 (Resultative & Directional Complements) (第4課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：動詞複合補語（睇見/聽到/做完/諗好/走入去/跑出嚟）嘅引申用法。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u18-l4）系統深入地探討「結果補語同趨向補語 (Resultative & Directional Complements)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第18單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.4）。",
                    "r": "Dai6 18 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 18 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第18單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.5）。",
                    "r": "Dai6 18 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 18 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「結果補語同趨向補語 (Resultative & Directional Complements) (第4課)」嘅標準規範？",
                    "options": [
                        "第18單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.4）。",
                        "第18單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.4）。（錯配語序與字詞）",
                        "第18單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第18單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第18單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.5）。",
                        "第18單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.5）。（虛詞缺失不合規範）",
                        "第19單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第18單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「結果補語同趨向補語 (Resultative & Directional Complements)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 18-4）：",
                    "options": [
                        "第18單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.4）。",
                        "第18單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.4）。（主謂語序顛倒）",
                        "第18單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u18-l4）嘅核心關鍵詞（例如「結果補語」）：",
                    "acceptedAnswers": [
                        "結果補語",
                        "結果補語同趨",
                        "結果補語同趨向補語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「結果補語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u18-l5": {
        "id": "hk-u18-l5",
        "subject": "cantonese",
        "unit": 18,
        "lessonNumber": 5,
        "title": "結果補語同趨向補語 (Resultative & Directional Complements) (第5課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：動詞複合補語（睇見/聽到/做完/諗好/走入去/跑出嚟）嘅引申用法。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u18-l5）系統深入地探討「結果補語同趨向補語 (Resultative & Directional Complements)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第18單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.5）。",
                    "r": "Dai6 18 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 18 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第19單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.1）。",
                    "r": "Dai6 19 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 19 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「結果補語同趨向補語 (Resultative & Directional Complements) (第5課)」嘅標準規範？",
                    "options": [
                        "第18單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.5）。",
                        "第18單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.5）。（錯配語序與字詞）",
                        "第19單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第18單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第19單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.1）。",
                        "第19單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.1）。（虛詞缺失不合規範）",
                        "第19單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第19單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「結果補語同趨向補語 (Resultative & Directional Complements)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 18-5）：",
                    "options": [
                        "第18單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.5）。",
                        "第18單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第18課嘅語法重點（句子標號：18.5）。（主謂語序顛倒）",
                        "第19單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u18-l5）嘅核心關鍵詞（例如「結果補語」）：",
                    "acceptedAnswers": [
                        "結果補語",
                        "結果補語同趨",
                        "結果補語同趨向補語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「結果補語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u19-l1": {
        "id": "hk-u19-l1",
        "subject": "cantonese",
        "unit": 19,
        "lessonNumber": 1,
        "title": "可能補語（得/唔） (Potential Complements) (第1課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語可能補語形式（睇得明/睇唔明/做得到/做唔切）同程度補語。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u19-l1）系統深入地探討「可能補語（得/唔） (Potential Complements)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第19單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.1）。",
                    "r": "Dai6 19 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 19 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第19單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.2）。",
                    "r": "Dai6 19 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 19 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「可能補語（得/唔） (Potential Complements) (第1課)」嘅標準規範？",
                    "options": [
                        "第19單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.1）。",
                        "第19單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.1）。（錯配語序與字詞）",
                        "第19單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第19單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第19單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.2）。",
                        "第19單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.2）。（虛詞缺失不合規範）",
                        "第19單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第19單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「可能補語（得/唔） (Potential Complements)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 19-1）：",
                    "options": [
                        "第19單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.1）。",
                        "第19單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.1）。（主謂語序顛倒）",
                        "第19單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u19-l1）嘅核心關鍵詞（例如「可能補語」）：",
                    "acceptedAnswers": [
                        "可能補語",
                        "可能補語（得",
                        "可能補語（得/唔）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「可能補語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u19-l2": {
        "id": "hk-u19-l2",
        "subject": "cantonese",
        "unit": 19,
        "lessonNumber": 2,
        "title": "可能補語（得/唔） (Potential Complements) (第2課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語可能補語形式（睇得明/睇唔明/做得到/做唔切）同程度補語。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u19-l2）系統深入地探討「可能補語（得/唔） (Potential Complements)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第19單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.2）。",
                    "r": "Dai6 19 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 19 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第19單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.3）。",
                    "r": "Dai6 19 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 19 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「可能補語（得/唔） (Potential Complements) (第2課)」嘅標準規範？",
                    "options": [
                        "第19單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.2）。",
                        "第19單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.2）。（錯配語序與字詞）",
                        "第19單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第19單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第19單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.3）。",
                        "第19單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.3）。（虛詞缺失不合規範）",
                        "第19單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第19單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「可能補語（得/唔） (Potential Complements)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 19-2）：",
                    "options": [
                        "第19單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.2）。",
                        "第19單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.2）。（主謂語序顛倒）",
                        "第19單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u19-l2）嘅核心關鍵詞（例如「可能補語」）：",
                    "acceptedAnswers": [
                        "可能補語",
                        "可能補語（得",
                        "可能補語（得/唔）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「可能補語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u19-l3": {
        "id": "hk-u19-l3",
        "subject": "cantonese",
        "unit": 19,
        "lessonNumber": 3,
        "title": "可能補語（得/唔） (Potential Complements) (第3課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語可能補語形式（睇得明/睇唔明/做得到/做唔切）同程度補語。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u19-l3）系統深入地探討「可能補語（得/唔） (Potential Complements)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第19單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.3）。",
                    "r": "Dai6 19 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 19 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第19單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.4）。",
                    "r": "Dai6 19 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 19 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「可能補語（得/唔） (Potential Complements) (第3課)」嘅標準規範？",
                    "options": [
                        "第19單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.3）。",
                        "第19單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.3）。（錯配語序與字詞）",
                        "第19單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第19單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第19單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.4）。",
                        "第19單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.4）。（虛詞缺失不合規範）",
                        "第19單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第19單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「可能補語（得/唔） (Potential Complements)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 19-3）：",
                    "options": [
                        "第19單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.3）。",
                        "第19單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.3）。（主謂語序顛倒）",
                        "第19單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u19-l3）嘅核心關鍵詞（例如「可能補語」）：",
                    "acceptedAnswers": [
                        "可能補語",
                        "可能補語（得",
                        "可能補語（得/唔）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「可能補語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u19-l4": {
        "id": "hk-u19-l4",
        "subject": "cantonese",
        "unit": 19,
        "lessonNumber": 4,
        "title": "可能補語（得/唔） (Potential Complements) (第4課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語可能補語形式（睇得明/睇唔明/做得到/做唔切）同程度補語。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u19-l4）系統深入地探討「可能補語（得/唔） (Potential Complements)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第19單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.4）。",
                    "r": "Dai6 19 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 19 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第19單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.5）。",
                    "r": "Dai6 19 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 19 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「可能補語（得/唔） (Potential Complements) (第4課)」嘅標準規範？",
                    "options": [
                        "第19單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.4）。",
                        "第19單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.4）。（錯配語序與字詞）",
                        "第19單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第19單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第19單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.5）。",
                        "第19單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.5）。（虛詞缺失不合規範）",
                        "第20單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第19單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「可能補語（得/唔） (Potential Complements)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 19-4）：",
                    "options": [
                        "第19單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.4）。",
                        "第19單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.4）。（主謂語序顛倒）",
                        "第19單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u19-l4）嘅核心關鍵詞（例如「可能補語」）：",
                    "acceptedAnswers": [
                        "可能補語",
                        "可能補語（得",
                        "可能補語（得/唔）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「可能補語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u19-l5": {
        "id": "hk-u19-l5",
        "subject": "cantonese",
        "unit": 19,
        "lessonNumber": 5,
        "title": "可能補語（得/唔） (Potential Complements) (第5課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：粵語可能補語形式（睇得明/睇唔明/做得到/做唔切）同程度補語。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u19-l5）系統深入地探討「可能補語（得/唔） (Potential Complements)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第19單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.5）。",
                    "r": "Dai6 19 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 19 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第20單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.1）。",
                    "r": "Dai6 20 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 20 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「可能補語（得/唔） (Potential Complements) (第5課)」嘅標準規範？",
                    "options": [
                        "第19單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.5）。",
                        "第19單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.5）。（錯配語序與字詞）",
                        "第20單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第19單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第20單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.1）。",
                        "第20單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.1）。（虛詞缺失不合規範）",
                        "第20單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第20單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「可能補語（得/唔） (Potential Complements)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 19-5）：",
                    "options": [
                        "第19單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.5）。",
                        "第19單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第19課嘅語法重點（句子標號：19.5）。（主謂語序顛倒）",
                        "第20單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u19-l5）嘅核心關鍵詞（例如「可能補語」）：",
                    "acceptedAnswers": [
                        "可能補語",
                        "可能補語（得",
                        "可能補語（得/唔）"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「可能補語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u20-l1": {
        "id": "hk-u20-l1",
        "subject": "cantonese",
        "unit": 20,
        "lessonNumber": 1,
        "title": "存在句同空間描寫 (Existential Sentences) (第1課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：處所詞做主語嘅存現句（「有/喺度/擺喺」）同狀態描寫。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u20-l1）系統深入地探討「存在句同空間描寫 (Existential Sentences)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第20單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.1）。",
                    "r": "Dai6 20 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 20 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第20單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.2）。",
                    "r": "Dai6 20 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 20 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「存在句同空間描寫 (Existential Sentences) (第1課)」嘅標準規範？",
                    "options": [
                        "第20單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.1）。",
                        "第20單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.1）。（錯配語序與字詞）",
                        "第20單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第20單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第20單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.2）。",
                        "第20單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.2）。（虛詞缺失不合規範）",
                        "第20單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第20單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「存在句同空間描寫 (Existential Sentences)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 20-1）：",
                    "options": [
                        "第20單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.1）。",
                        "第20單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.1）。（主謂語序顛倒）",
                        "第20單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u20-l1）嘅核心關鍵詞（例如「存在句同」）：",
                    "acceptedAnswers": [
                        "存在句同",
                        "存在句同空間",
                        "存在句同空間描寫"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「存在句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u20-l2": {
        "id": "hk-u20-l2",
        "subject": "cantonese",
        "unit": 20,
        "lessonNumber": 2,
        "title": "存在句同空間描寫 (Existential Sentences) (第2課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：處所詞做主語嘅存現句（「有/喺度/擺喺」）同狀態描寫。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u20-l2）系統深入地探討「存在句同空間描寫 (Existential Sentences)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第20單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.2）。",
                    "r": "Dai6 20 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 20 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第20單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.3）。",
                    "r": "Dai6 20 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 20 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「存在句同空間描寫 (Existential Sentences) (第2課)」嘅標準規範？",
                    "options": [
                        "第20單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.2）。",
                        "第20單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.2）。（錯配語序與字詞）",
                        "第20單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第20單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第20單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.3）。",
                        "第20單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.3）。（虛詞缺失不合規範）",
                        "第20單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第20單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「存在句同空間描寫 (Existential Sentences)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 20-2）：",
                    "options": [
                        "第20單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.2）。",
                        "第20單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.2）。（主謂語序顛倒）",
                        "第20單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u20-l2）嘅核心關鍵詞（例如「存在句同」）：",
                    "acceptedAnswers": [
                        "存在句同",
                        "存在句同空間",
                        "存在句同空間描寫"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「存在句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u20-l3": {
        "id": "hk-u20-l3",
        "subject": "cantonese",
        "unit": 20,
        "lessonNumber": 3,
        "title": "存在句同空間描寫 (Existential Sentences) (第3課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：處所詞做主語嘅存現句（「有/喺度/擺喺」）同狀態描寫。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u20-l3）系統深入地探討「存在句同空間描寫 (Existential Sentences)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第20單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.3）。",
                    "r": "Dai6 20 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 20 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第20單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.4）。",
                    "r": "Dai6 20 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 20 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「存在句同空間描寫 (Existential Sentences) (第3課)」嘅標準規範？",
                    "options": [
                        "第20單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.3）。",
                        "第20單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.3）。（錯配語序與字詞）",
                        "第20單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第20單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第20單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.4）。",
                        "第20單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.4）。（虛詞缺失不合規範）",
                        "第20單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第20單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「存在句同空間描寫 (Existential Sentences)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 20-3）：",
                    "options": [
                        "第20單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.3）。",
                        "第20單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.3）。（主謂語序顛倒）",
                        "第20單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u20-l3）嘅核心關鍵詞（例如「存在句同」）：",
                    "acceptedAnswers": [
                        "存在句同",
                        "存在句同空間",
                        "存在句同空間描寫"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「存在句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u20-l4": {
        "id": "hk-u20-l4",
        "subject": "cantonese",
        "unit": 20,
        "lessonNumber": 4,
        "title": "存在句同空間描寫 (Existential Sentences) (第4課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：處所詞做主語嘅存現句（「有/喺度/擺喺」）同狀態描寫。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u20-l4）系統深入地探討「存在句同空間描寫 (Existential Sentences)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第20單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.4）。",
                    "r": "Dai6 20 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 20 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第20單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.5）。",
                    "r": "Dai6 20 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 20 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「存在句同空間描寫 (Existential Sentences) (第4課)」嘅標準規範？",
                    "options": [
                        "第20單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.4）。",
                        "第20單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.4）。（錯配語序與字詞）",
                        "第20單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第20單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第20單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.5）。",
                        "第20單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.5）。（虛詞缺失不合規範）",
                        "第21單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第20單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「存在句同空間描寫 (Existential Sentences)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 20-4）：",
                    "options": [
                        "第20單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.4）。",
                        "第20單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.4）。（主謂語序顛倒）",
                        "第20單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u20-l4）嘅核心關鍵詞（例如「存在句同」）：",
                    "acceptedAnswers": [
                        "存在句同",
                        "存在句同空間",
                        "存在句同空間描寫"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「存在句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u20-l5": {
        "id": "hk-u20-l5",
        "subject": "cantonese",
        "unit": 20,
        "lessonNumber": 5,
        "title": "存在句同空間描寫 (Existential Sentences) (第5課)",
        "level": "B1",
        "objective": "全面掌握並熟練運用本課核心內容：處所詞做主語嘅存現句（「有/喺度/擺喺」）同狀態描寫。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u20-l5）系統深入地探討「存在句同空間描寫 (Existential Sentences)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第20單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.5）。",
                    "r": "Dai6 20 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 20 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第21單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.1）。",
                    "r": "Dai6 21 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 21 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「存在句同空間描寫 (Existential Sentences) (第5課)」嘅標準規範？",
                    "options": [
                        "第20單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.5）。",
                        "第20單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.5）。（錯配語序與字詞）",
                        "第21單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第20單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第21單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.1）。",
                        "第21單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.1）。（虛詞缺失不合規範）",
                        "第21單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第21單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「存在句同空間描寫 (Existential Sentences)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 20-5）：",
                    "options": [
                        "第20單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.5）。",
                        "第20單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第20課嘅語法重點（句子標號：20.5）。（主謂語序顛倒）",
                        "第21單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u20-l5）嘅核心關鍵詞（例如「存在句同」）：",
                    "acceptedAnswers": [
                        "存在句同",
                        "存在句同空間",
                        "存在句同空間描寫"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「存在句同」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u21-l1": {
        "id": "hk-u21-l1",
        "subject": "cantonese",
        "unit": 21,
        "lessonNumber": 1,
        "title": "句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第1課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語極具特色嘅句尾語氣助詞系統（啦/喇/喎/咩/呀/呢/囉/噃/㗎/啫）之微妙語氣差別。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u21-l1）系統深入地探討「句尾語氣助詞大系 (Sentence-Final Particles Master Class)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第21單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.1）。",
                    "r": "Dai6 21 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 21 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第21單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.2）。",
                    "r": "Dai6 21 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 21 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第1課)」嘅標準規範？",
                    "options": [
                        "第21單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.1）。",
                        "第21單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.1）。（錯配語序與字詞）",
                        "第21單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第21單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第21單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.2）。",
                        "第21單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.2）。（虛詞缺失不合規範）",
                        "第21單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第21單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「句尾語氣助詞大系 (Sentence-Final Particles Master Class)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 21-1）：",
                    "options": [
                        "第21單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.1）。",
                        "第21單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.1）。（主謂語序顛倒）",
                        "第21單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u21-l1）嘅核心關鍵詞（例如「句尾語氣」）：",
                    "acceptedAnswers": [
                        "句尾語氣",
                        "句尾語氣助詞",
                        "句尾語氣助詞大系"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「句尾語氣」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u21-l2": {
        "id": "hk-u21-l2",
        "subject": "cantonese",
        "unit": 21,
        "lessonNumber": 2,
        "title": "句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第2課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語極具特色嘅句尾語氣助詞系統（啦/喇/喎/咩/呀/呢/囉/噃/㗎/啫）之微妙語氣差別。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u21-l2）系統深入地探討「句尾語氣助詞大系 (Sentence-Final Particles Master Class)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第21單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.2）。",
                    "r": "Dai6 21 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 21 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第21單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.3）。",
                    "r": "Dai6 21 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 21 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第2課)」嘅標準規範？",
                    "options": [
                        "第21單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.2）。",
                        "第21單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.2）。（錯配語序與字詞）",
                        "第21單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第21單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第21單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.3）。",
                        "第21單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.3）。（虛詞缺失不合規範）",
                        "第21單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第21單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「句尾語氣助詞大系 (Sentence-Final Particles Master Class)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 21-2）：",
                    "options": [
                        "第21單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.2）。",
                        "第21單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.2）。（主謂語序顛倒）",
                        "第21單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u21-l2）嘅核心關鍵詞（例如「句尾語氣」）：",
                    "acceptedAnswers": [
                        "句尾語氣",
                        "句尾語氣助詞",
                        "句尾語氣助詞大系"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「句尾語氣」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u21-l3": {
        "id": "hk-u21-l3",
        "subject": "cantonese",
        "unit": 21,
        "lessonNumber": 3,
        "title": "句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第3課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語極具特色嘅句尾語氣助詞系統（啦/喇/喎/咩/呀/呢/囉/噃/㗎/啫）之微妙語氣差別。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u21-l3）系統深入地探討「句尾語氣助詞大系 (Sentence-Final Particles Master Class)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第21單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.3）。",
                    "r": "Dai6 21 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 21 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第21單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.4）。",
                    "r": "Dai6 21 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 21 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第3課)」嘅標準規範？",
                    "options": [
                        "第21單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.3）。",
                        "第21單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.3）。（錯配語序與字詞）",
                        "第21單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第21單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第21單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.4）。",
                        "第21單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.4）。（虛詞缺失不合規範）",
                        "第21單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第21單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「句尾語氣助詞大系 (Sentence-Final Particles Master Class)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 21-3）：",
                    "options": [
                        "第21單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.3）。",
                        "第21單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.3）。（主謂語序顛倒）",
                        "第21單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u21-l3）嘅核心關鍵詞（例如「句尾語氣」）：",
                    "acceptedAnswers": [
                        "句尾語氣",
                        "句尾語氣助詞",
                        "句尾語氣助詞大系"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「句尾語氣」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u21-l4": {
        "id": "hk-u21-l4",
        "subject": "cantonese",
        "unit": 21,
        "lessonNumber": 4,
        "title": "句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第4課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語極具特色嘅句尾語氣助詞系統（啦/喇/喎/咩/呀/呢/囉/噃/㗎/啫）之微妙語氣差別。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u21-l4）系統深入地探討「句尾語氣助詞大系 (Sentence-Final Particles Master Class)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第21單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.4）。",
                    "r": "Dai6 21 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 21 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第21單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.5）。",
                    "r": "Dai6 21 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 21 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第4課)」嘅標準規範？",
                    "options": [
                        "第21單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.4）。",
                        "第21單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.4）。（錯配語序與字詞）",
                        "第21單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第21單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第21單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.5）。",
                        "第21單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.5）。（虛詞缺失不合規範）",
                        "第22單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第21單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「句尾語氣助詞大系 (Sentence-Final Particles Master Class)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 21-4）：",
                    "options": [
                        "第21單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.4）。",
                        "第21單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.4）。（主謂語序顛倒）",
                        "第21單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u21-l4）嘅核心關鍵詞（例如「句尾語氣」）：",
                    "acceptedAnswers": [
                        "句尾語氣",
                        "句尾語氣助詞",
                        "句尾語氣助詞大系"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「句尾語氣」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u21-l5": {
        "id": "hk-u21-l5",
        "subject": "cantonese",
        "unit": 21,
        "lessonNumber": 5,
        "title": "句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第5課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：粵語極具特色嘅句尾語氣助詞系統（啦/喇/喎/咩/呀/呢/囉/噃/㗎/啫）之微妙語氣差別。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u21-l5）系統深入地探討「句尾語氣助詞大系 (Sentence-Final Particles Master Class)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第21單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.5）。",
                    "r": "Dai6 21 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 21 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第22單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.1）。",
                    "r": "Dai6 22 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 22 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第5課)」嘅標準規範？",
                    "options": [
                        "第21單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.5）。",
                        "第21單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.5）。（錯配語序與字詞）",
                        "第22單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第21單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第22單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.1）。",
                        "第22單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.1）。（虛詞缺失不合規範）",
                        "第22單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第22單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「句尾語氣助詞大系 (Sentence-Final Particles Master Class)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 21-5）：",
                    "options": [
                        "第21單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.5）。",
                        "第21單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第21課嘅語法重點（句子標號：21.5）。（主謂語序顛倒）",
                        "第22單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u21-l5）嘅核心關鍵詞（例如「句尾語氣」）：",
                    "acceptedAnswers": [
                        "句尾語氣",
                        "句尾語氣助詞",
                        "句尾語氣助詞大系"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「句尾語氣」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u22-l1": {
        "id": "hk-u22-l1",
        "subject": "cantonese",
        "unit": 22,
        "lessonNumber": 1,
        "title": "廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第1課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：地道三字俗語、四字成語、歇後語（例：盲人摸象、豬籠入水、牛頭唔搭馬嘴）。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u22-l1）系統深入地探討「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第22單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.1）。",
                    "r": "Dai6 22 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 22 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第22單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.2）。",
                    "r": "Dai6 22 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 22 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第1課)」嘅標準規範？",
                    "options": [
                        "第22單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.1）。",
                        "第22單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.1）。（錯配語序與字詞）",
                        "第22單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第22單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第22單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.2）。",
                        "第22單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.2）。（虛詞缺失不合規範）",
                        "第22單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第22單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 22-1）：",
                    "options": [
                        "第22單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.1）。",
                        "第22單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.1）。（主謂語序顛倒）",
                        "第22單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u22-l1）嘅核心關鍵詞（例如「廣東話成」）：",
                    "acceptedAnswers": [
                        "廣東話成",
                        "廣東話成語、",
                        "廣東話成語、俗語同歇後語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「廣東話成」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u22-l2": {
        "id": "hk-u22-l2",
        "subject": "cantonese",
        "unit": 22,
        "lessonNumber": 2,
        "title": "廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第2課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：地道三字俗語、四字成語、歇後語（例：盲人摸象、豬籠入水、牛頭唔搭馬嘴）。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u22-l2）系統深入地探討「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第22單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.2）。",
                    "r": "Dai6 22 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 22 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第22單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.3）。",
                    "r": "Dai6 22 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 22 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第2課)」嘅標準規範？",
                    "options": [
                        "第22單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.2）。",
                        "第22單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.2）。（錯配語序與字詞）",
                        "第22單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第22單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第22單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.3）。",
                        "第22單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.3）。（虛詞缺失不合規範）",
                        "第22單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第22單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 22-2）：",
                    "options": [
                        "第22單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.2）。",
                        "第22單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.2）。（主謂語序顛倒）",
                        "第22單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u22-l2）嘅核心關鍵詞（例如「廣東話成」）：",
                    "acceptedAnswers": [
                        "廣東話成",
                        "廣東話成語、",
                        "廣東話成語、俗語同歇後語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「廣東話成」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u22-l3": {
        "id": "hk-u22-l3",
        "subject": "cantonese",
        "unit": 22,
        "lessonNumber": 3,
        "title": "廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第3課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：地道三字俗語、四字成語、歇後語（例：盲人摸象、豬籠入水、牛頭唔搭馬嘴）。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u22-l3）系統深入地探討「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第22單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.3）。",
                    "r": "Dai6 22 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 22 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第22單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.4）。",
                    "r": "Dai6 22 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 22 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第3課)」嘅標準規範？",
                    "options": [
                        "第22單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.3）。",
                        "第22單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.3）。（錯配語序與字詞）",
                        "第22單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第22單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第22單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.4）。",
                        "第22單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.4）。（虛詞缺失不合規範）",
                        "第22單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第22單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 22-3）：",
                    "options": [
                        "第22單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.3）。",
                        "第22單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.3）。（主謂語序顛倒）",
                        "第22單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u22-l3）嘅核心關鍵詞（例如「廣東話成」）：",
                    "acceptedAnswers": [
                        "廣東話成",
                        "廣東話成語、",
                        "廣東話成語、俗語同歇後語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「廣東話成」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u22-l4": {
        "id": "hk-u22-l4",
        "subject": "cantonese",
        "unit": 22,
        "lessonNumber": 4,
        "title": "廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第4課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：地道三字俗語、四字成語、歇後語（例：盲人摸象、豬籠入水、牛頭唔搭馬嘴）。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u22-l4）系統深入地探討「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第22單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.4）。",
                    "r": "Dai6 22 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 22 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第22單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.5）。",
                    "r": "Dai6 22 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 22 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第4課)」嘅標準規範？",
                    "options": [
                        "第22單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.4）。",
                        "第22單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.4）。（錯配語序與字詞）",
                        "第22單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第22單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第22單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.5）。",
                        "第22單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.5）。（虛詞缺失不合規範）",
                        "第23單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第22單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 22-4）：",
                    "options": [
                        "第22單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.4）。",
                        "第22單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.4）。（主謂語序顛倒）",
                        "第22單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u22-l4）嘅核心關鍵詞（例如「廣東話成」）：",
                    "acceptedAnswers": [
                        "廣東話成",
                        "廣東話成語、",
                        "廣東話成語、俗語同歇後語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「廣東話成」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u22-l5": {
        "id": "hk-u22-l5",
        "subject": "cantonese",
        "unit": 22,
        "lessonNumber": 5,
        "title": "廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第5課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：地道三字俗語、四字成語、歇後語（例：盲人摸象、豬籠入水、牛頭唔搭馬嘴）。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u22-l5）系統深入地探討「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第22單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.5）。",
                    "r": "Dai6 22 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 22 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第23單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.1）。",
                    "r": "Dai6 23 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 23 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第5課)」嘅標準規範？",
                    "options": [
                        "第22單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.5）。",
                        "第22單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.5）。（錯配語序與字詞）",
                        "第23單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第22單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第23單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.1）。",
                        "第23單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.1）。（虛詞缺失不合規範）",
                        "第23單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第23單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 22-5）：",
                    "options": [
                        "第22單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.5）。",
                        "第22單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第22課嘅語法重點（句子標號：22.5）。（主謂語序顛倒）",
                        "第23單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u22-l5）嘅核心關鍵詞（例如「廣東話成」）：",
                    "acceptedAnswers": [
                        "廣東話成",
                        "廣東話成語、",
                        "廣東話成語、俗語同歇後語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「廣東話成」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u23-l1": {
        "id": "hk-u23-l1",
        "subject": "cantonese",
        "unit": 23,
        "lessonNumber": 1,
        "title": "新聞傳媒與香港社會論題 (Media & Social Issues) (第1課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：新聞公報、時事評論、公共政策分析同經濟金融專業術語。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u23-l1）系統深入地探討「新聞傳媒與香港社會論題 (Media & Social Issues)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第23單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.1）。",
                    "r": "Dai6 23 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 23 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第23單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.2）。",
                    "r": "Dai6 23 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 23 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「新聞傳媒與香港社會論題 (Media & Social Issues) (第1課)」嘅標準規範？",
                    "options": [
                        "第23單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.1）。",
                        "第23單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.1）。（錯配語序與字詞）",
                        "第23單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第23單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第23單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.2）。",
                        "第23單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.2）。（虛詞缺失不合規範）",
                        "第23單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第23單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「新聞傳媒與香港社會論題 (Media & Social Issues)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 23-1）：",
                    "options": [
                        "第23單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.1）。",
                        "第23單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.1）。（主謂語序顛倒）",
                        "第23單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u23-l1）嘅核心關鍵詞（例如「新聞傳媒」）：",
                    "acceptedAnswers": [
                        "新聞傳媒",
                        "新聞傳媒與香",
                        "新聞傳媒與香港社會論題"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「新聞傳媒」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u23-l2": {
        "id": "hk-u23-l2",
        "subject": "cantonese",
        "unit": 23,
        "lessonNumber": 2,
        "title": "新聞傳媒與香港社會論題 (Media & Social Issues) (第2課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：新聞公報、時事評論、公共政策分析同經濟金融專業術語。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u23-l2）系統深入地探討「新聞傳媒與香港社會論題 (Media & Social Issues)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第23單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.2）。",
                    "r": "Dai6 23 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 23 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第23單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.3）。",
                    "r": "Dai6 23 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 23 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「新聞傳媒與香港社會論題 (Media & Social Issues) (第2課)」嘅標準規範？",
                    "options": [
                        "第23單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.2）。",
                        "第23單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.2）。（錯配語序與字詞）",
                        "第23單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第23單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第23單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.3）。",
                        "第23單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.3）。（虛詞缺失不合規範）",
                        "第23單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第23單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「新聞傳媒與香港社會論題 (Media & Social Issues)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 23-2）：",
                    "options": [
                        "第23單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.2）。",
                        "第23單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.2）。（主謂語序顛倒）",
                        "第23單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u23-l2）嘅核心關鍵詞（例如「新聞傳媒」）：",
                    "acceptedAnswers": [
                        "新聞傳媒",
                        "新聞傳媒與香",
                        "新聞傳媒與香港社會論題"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「新聞傳媒」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u23-l3": {
        "id": "hk-u23-l3",
        "subject": "cantonese",
        "unit": 23,
        "lessonNumber": 3,
        "title": "新聞傳媒與香港社會論題 (Media & Social Issues) (第3課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：新聞公報、時事評論、公共政策分析同經濟金融專業術語。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u23-l3）系統深入地探討「新聞傳媒與香港社會論題 (Media & Social Issues)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第23單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.3）。",
                    "r": "Dai6 23 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 23 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第23單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.4）。",
                    "r": "Dai6 23 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 23 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「新聞傳媒與香港社會論題 (Media & Social Issues) (第3課)」嘅標準規範？",
                    "options": [
                        "第23單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.3）。",
                        "第23單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.3）。（錯配語序與字詞）",
                        "第23單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第23單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第23單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.4）。",
                        "第23單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.4）。（虛詞缺失不合規範）",
                        "第23單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第23單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「新聞傳媒與香港社會論題 (Media & Social Issues)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 23-3）：",
                    "options": [
                        "第23單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.3）。",
                        "第23單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.3）。（主謂語序顛倒）",
                        "第23單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u23-l3）嘅核心關鍵詞（例如「新聞傳媒」）：",
                    "acceptedAnswers": [
                        "新聞傳媒",
                        "新聞傳媒與香",
                        "新聞傳媒與香港社會論題"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「新聞傳媒」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u23-l4": {
        "id": "hk-u23-l4",
        "subject": "cantonese",
        "unit": 23,
        "lessonNumber": 4,
        "title": "新聞傳媒與香港社會論題 (Media & Social Issues) (第4課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：新聞公報、時事評論、公共政策分析同經濟金融專業術語。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u23-l4）系統深入地探討「新聞傳媒與香港社會論題 (Media & Social Issues)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第23單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.4）。",
                    "r": "Dai6 23 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 23 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第23單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.5）。",
                    "r": "Dai6 23 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 23 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「新聞傳媒與香港社會論題 (Media & Social Issues) (第4課)」嘅標準規範？",
                    "options": [
                        "第23單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.4）。",
                        "第23單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.4）。（錯配語序與字詞）",
                        "第23單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第23單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第23單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.5）。",
                        "第23單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.5）。（虛詞缺失不合規範）",
                        "第24單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第23單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「新聞傳媒與香港社會論題 (Media & Social Issues)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 23-4）：",
                    "options": [
                        "第23單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.4）。",
                        "第23單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.4）。（主謂語序顛倒）",
                        "第23單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u23-l4）嘅核心關鍵詞（例如「新聞傳媒」）：",
                    "acceptedAnswers": [
                        "新聞傳媒",
                        "新聞傳媒與香",
                        "新聞傳媒與香港社會論題"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「新聞傳媒」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u23-l5": {
        "id": "hk-u23-l5",
        "subject": "cantonese",
        "unit": 23,
        "lessonNumber": 5,
        "title": "新聞傳媒與香港社會論題 (Media & Social Issues) (第5課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：新聞公報、時事評論、公共政策分析同經濟金融專業術語。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u23-l5）系統深入地探討「新聞傳媒與香港社會論題 (Media & Social Issues)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第23單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.5）。",
                    "r": "Dai6 23 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 23 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第24單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.1）。",
                    "r": "Dai6 24 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 24 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「新聞傳媒與香港社會論題 (Media & Social Issues) (第5課)」嘅標準規範？",
                    "options": [
                        "第23單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.5）。",
                        "第23單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.5）。（錯配語序與字詞）",
                        "第24單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第23單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第24單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.1）。",
                        "第24單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.1）。（虛詞缺失不合規範）",
                        "第24單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第24單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「新聞傳媒與香港社會論題 (Media & Social Issues)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 23-5）：",
                    "options": [
                        "第23單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.5）。",
                        "第23單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第23課嘅語法重點（句子標號：23.5）。（主謂語序顛倒）",
                        "第24單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u23-l5）嘅核心關鍵詞（例如「新聞傳媒」）：",
                    "acceptedAnswers": [
                        "新聞傳媒",
                        "新聞傳媒與香",
                        "新聞傳媒與香港社會論題"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「新聞傳媒」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u24-l1": {
        "id": "hk-u24-l1",
        "subject": "cantonese",
        "unit": 24,
        "lessonNumber": 1,
        "title": "商務粵語與公文寫作 (Business Cantonese & Correspondence) (第1課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：商業合約、投標書、公函、會議紀錄同正式商務談判策略。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u24-l1）系統深入地探討「商務粵語與公文寫作 (Business Cantonese & Correspondence)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第24單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.1）。",
                    "r": "Dai6 24 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 24 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第24單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.2）。",
                    "r": "Dai6 24 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 24 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「商務粵語與公文寫作 (Business Cantonese & Correspondence) (第1課)」嘅標準規範？",
                    "options": [
                        "第24單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.1）。",
                        "第24單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.1）。（錯配語序與字詞）",
                        "第24單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第24單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第24單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.2）。",
                        "第24單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.2）。（虛詞缺失不合規範）",
                        "第24單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第24單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「商務粵語與公文寫作 (Business Cantonese & Correspondence)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 24-1）：",
                    "options": [
                        "第24單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.1）。",
                        "第24單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.1）。（主謂語序顛倒）",
                        "第24單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u24-l1）嘅核心關鍵詞（例如「商務粵語」）：",
                    "acceptedAnswers": [
                        "商務粵語",
                        "商務粵語與公",
                        "商務粵語與公文寫作"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「商務粵語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u24-l2": {
        "id": "hk-u24-l2",
        "subject": "cantonese",
        "unit": 24,
        "lessonNumber": 2,
        "title": "商務粵語與公文寫作 (Business Cantonese & Correspondence) (第2課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：商業合約、投標書、公函、會議紀錄同正式商務談判策略。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u24-l2）系統深入地探討「商務粵語與公文寫作 (Business Cantonese & Correspondence)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第24單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.2）。",
                    "r": "Dai6 24 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 24 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第24單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.3）。",
                    "r": "Dai6 24 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 24 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「商務粵語與公文寫作 (Business Cantonese & Correspondence) (第2課)」嘅標準規範？",
                    "options": [
                        "第24單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.2）。",
                        "第24單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.2）。（錯配語序與字詞）",
                        "第24單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第24單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第24單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.3）。",
                        "第24單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.3）。（虛詞缺失不合規範）",
                        "第24單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第24單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「商務粵語與公文寫作 (Business Cantonese & Correspondence)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 24-2）：",
                    "options": [
                        "第24單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.2）。",
                        "第24單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.2）。（主謂語序顛倒）",
                        "第24單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u24-l2）嘅核心關鍵詞（例如「商務粵語」）：",
                    "acceptedAnswers": [
                        "商務粵語",
                        "商務粵語與公",
                        "商務粵語與公文寫作"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「商務粵語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u24-l3": {
        "id": "hk-u24-l3",
        "subject": "cantonese",
        "unit": 24,
        "lessonNumber": 3,
        "title": "商務粵語與公文寫作 (Business Cantonese & Correspondence) (第3課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：商業合約、投標書、公函、會議紀錄同正式商務談判策略。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u24-l3）系統深入地探討「商務粵語與公文寫作 (Business Cantonese & Correspondence)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第24單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.3）。",
                    "r": "Dai6 24 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 24 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第24單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.4）。",
                    "r": "Dai6 24 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 24 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「商務粵語與公文寫作 (Business Cantonese & Correspondence) (第3課)」嘅標準規範？",
                    "options": [
                        "第24單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.3）。",
                        "第24單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.3）。（錯配語序與字詞）",
                        "第24單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第24單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第24單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.4）。",
                        "第24單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.4）。（虛詞缺失不合規範）",
                        "第24單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第24單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「商務粵語與公文寫作 (Business Cantonese & Correspondence)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 24-3）：",
                    "options": [
                        "第24單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.3）。",
                        "第24單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.3）。（主謂語序顛倒）",
                        "第24單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u24-l3）嘅核心關鍵詞（例如「商務粵語」）：",
                    "acceptedAnswers": [
                        "商務粵語",
                        "商務粵語與公",
                        "商務粵語與公文寫作"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「商務粵語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u24-l4": {
        "id": "hk-u24-l4",
        "subject": "cantonese",
        "unit": 24,
        "lessonNumber": 4,
        "title": "商務粵語與公文寫作 (Business Cantonese & Correspondence) (第4課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：商業合約、投標書、公函、會議紀錄同正式商務談判策略。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u24-l4）系統深入地探討「商務粵語與公文寫作 (Business Cantonese & Correspondence)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第24單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.4）。",
                    "r": "Dai6 24 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 24 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第24單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.5）。",
                    "r": "Dai6 24 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 24 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「商務粵語與公文寫作 (Business Cantonese & Correspondence) (第4課)」嘅標準規範？",
                    "options": [
                        "第24單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.4）。",
                        "第24單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.4）。（錯配語序與字詞）",
                        "第24單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第24單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第24單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.5）。",
                        "第24單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.5）。（虛詞缺失不合規範）",
                        "第25單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第24單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「商務粵語與公文寫作 (Business Cantonese & Correspondence)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 24-4）：",
                    "options": [
                        "第24單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.4）。",
                        "第24單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.4）。（主謂語序顛倒）",
                        "第24單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u24-l4）嘅核心關鍵詞（例如「商務粵語」）：",
                    "acceptedAnswers": [
                        "商務粵語",
                        "商務粵語與公",
                        "商務粵語與公文寫作"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「商務粵語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u24-l5": {
        "id": "hk-u24-l5",
        "subject": "cantonese",
        "unit": 24,
        "lessonNumber": 5,
        "title": "商務粵語與公文寫作 (Business Cantonese & Correspondence) (第5課)",
        "level": "B2",
        "objective": "全面掌握並熟練運用本課核心內容：商業合約、投標書、公函、會議紀錄同正式商務談判策略。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u24-l5）系統深入地探討「商務粵語與公文寫作 (Business Cantonese & Correspondence)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第24單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.5）。",
                    "r": "Dai6 24 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 24 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第25單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.1）。",
                    "r": "Dai6 25 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 25 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「商務粵語與公文寫作 (Business Cantonese & Correspondence) (第5課)」嘅標準規範？",
                    "options": [
                        "第24單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.5）。",
                        "第24單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.5）。（錯配語序與字詞）",
                        "第25單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第24單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第25單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.1）。",
                        "第25單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.1）。（虛詞缺失不合規範）",
                        "第25單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第25單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「商務粵語與公文寫作 (Business Cantonese & Correspondence)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 24-5）：",
                    "options": [
                        "第24單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.5）。",
                        "第24單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第24課嘅語法重點（句子標號：24.5）。（主謂語序顛倒）",
                        "第25單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u24-l5）嘅核心關鍵詞（例如「商務粵語」）：",
                    "acceptedAnswers": [
                        "商務粵語",
                        "商務粵語與公",
                        "商務粵語與公文寫作"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「商務粵語」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u25-l1": {
        "id": "hk-u25-l1",
        "subject": "cantonese",
        "unit": 25,
        "lessonNumber": 1,
        "title": "嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第1課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：嶺南三大家（屈大均、陳恭尹、梁佩蘭）詩作、粵語九聲與平仄中古音韻。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u25-l1）系統深入地探討「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第25單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.1）。",
                    "r": "Dai6 25 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 25 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第25單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.2）。",
                    "r": "Dai6 25 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 25 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第1課)」嘅標準規範？",
                    "options": [
                        "第25單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.1）。",
                        "第25單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.1）。（錯配語序與字詞）",
                        "第25單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第25單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第25單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.2）。",
                        "第25單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.2）。（虛詞缺失不合規範）",
                        "第25單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第25單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 25-1）：",
                    "options": [
                        "第25單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.1）。",
                        "第25單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.1）。（主謂語序顛倒）",
                        "第25單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u25-l1）嘅核心關鍵詞（例如「嶺南古典」）：",
                    "acceptedAnswers": [
                        "嶺南古典",
                        "嶺南古典文學",
                        "嶺南古典文學與粵詩吟誦"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南古典」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u25-l2": {
        "id": "hk-u25-l2",
        "subject": "cantonese",
        "unit": 25,
        "lessonNumber": 2,
        "title": "嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第2課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：嶺南三大家（屈大均、陳恭尹、梁佩蘭）詩作、粵語九聲與平仄中古音韻。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u25-l2）系統深入地探討「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第25單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.2）。",
                    "r": "Dai6 25 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 25 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第25單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.3）。",
                    "r": "Dai6 25 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 25 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第2課)」嘅標準規範？",
                    "options": [
                        "第25單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.2）。",
                        "第25單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.2）。（錯配語序與字詞）",
                        "第25單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第25單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第25單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.3）。",
                        "第25單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.3）。（虛詞缺失不合規範）",
                        "第25單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第25單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 25-2）：",
                    "options": [
                        "第25單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.2）。",
                        "第25單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.2）。（主謂語序顛倒）",
                        "第25單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u25-l2）嘅核心關鍵詞（例如「嶺南古典」）：",
                    "acceptedAnswers": [
                        "嶺南古典",
                        "嶺南古典文學",
                        "嶺南古典文學與粵詩吟誦"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南古典」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u25-l3": {
        "id": "hk-u25-l3",
        "subject": "cantonese",
        "unit": 25,
        "lessonNumber": 3,
        "title": "嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第3課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：嶺南三大家（屈大均、陳恭尹、梁佩蘭）詩作、粵語九聲與平仄中古音韻。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u25-l3）系統深入地探討「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第25單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.3）。",
                    "r": "Dai6 25 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 25 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第25單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.4）。",
                    "r": "Dai6 25 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 25 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第3課)」嘅標準規範？",
                    "options": [
                        "第25單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.3）。",
                        "第25單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.3）。（錯配語序與字詞）",
                        "第25單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第25單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第25單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.4）。",
                        "第25單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.4）。（虛詞缺失不合規範）",
                        "第25單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第25單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 25-3）：",
                    "options": [
                        "第25單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.3）。",
                        "第25單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.3）。（主謂語序顛倒）",
                        "第25單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u25-l3）嘅核心關鍵詞（例如「嶺南古典」）：",
                    "acceptedAnswers": [
                        "嶺南古典",
                        "嶺南古典文學",
                        "嶺南古典文學與粵詩吟誦"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南古典」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u25-l4": {
        "id": "hk-u25-l4",
        "subject": "cantonese",
        "unit": 25,
        "lessonNumber": 4,
        "title": "嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第4課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：嶺南三大家（屈大均、陳恭尹、梁佩蘭）詩作、粵語九聲與平仄中古音韻。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u25-l4）系統深入地探討「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第25單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.4）。",
                    "r": "Dai6 25 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 25 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第25單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.5）。",
                    "r": "Dai6 25 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 25 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第4課)」嘅標準規範？",
                    "options": [
                        "第25單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.4）。",
                        "第25單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.4）。（錯配語序與字詞）",
                        "第25單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第25單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第25單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.5）。",
                        "第25單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.5）。（虛詞缺失不合規範）",
                        "第26單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第25單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 25-4）：",
                    "options": [
                        "第25單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.4）。",
                        "第25單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.4）。（主謂語序顛倒）",
                        "第25單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u25-l4）嘅核心關鍵詞（例如「嶺南古典」）：",
                    "acceptedAnswers": [
                        "嶺南古典",
                        "嶺南古典文學",
                        "嶺南古典文學與粵詩吟誦"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南古典」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u25-l5": {
        "id": "hk-u25-l5",
        "subject": "cantonese",
        "unit": 25,
        "lessonNumber": 5,
        "title": "嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第5課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：嶺南三大家（屈大均、陳恭尹、梁佩蘭）詩作、粵語九聲與平仄中古音韻。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u25-l5）系統深入地探討「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第25單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.5）。",
                    "r": "Dai6 25 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 25 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第26單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.1）。",
                    "r": "Dai6 26 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 26 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第5課)」嘅標準規範？",
                    "options": [
                        "第25單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.5）。",
                        "第25單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.5）。（錯配語序與字詞）",
                        "第26單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第25單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第26單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.1）。",
                        "第26單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.1）。（虛詞缺失不合規範）",
                        "第26單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第26單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 25-5）：",
                    "options": [
                        "第25單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.5）。",
                        "第25單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第25課嘅語法重點（句子標號：25.5）。（主謂語序顛倒）",
                        "第26單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u25-l5）嘅核心關鍵詞（例如「嶺南古典」）：",
                    "acceptedAnswers": [
                        "嶺南古典",
                        "嶺南古典文學",
                        "嶺南古典文學與粵詩吟誦"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南古典」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u26-l1": {
        "id": "hk-u26-l1",
        "subject": "cantonese",
        "unit": 26,
        "lessonNumber": 1,
        "title": "嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第1課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：陳白沙（陳獻章）「江門心學」自然之理、湛若水「隨處體認天理」哲學體系。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u26-l1）系統深入地探討「嶺南儒學與心學思想 (Lingnan Confucian Philosophy)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第26單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.1）。",
                    "r": "Dai6 26 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 26 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第26單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.2）。",
                    "r": "Dai6 26 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 26 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第1課)」嘅標準規範？",
                    "options": [
                        "第26單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.1）。",
                        "第26單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.1）。（錯配語序與字詞）",
                        "第26單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第26單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第26單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.2）。",
                        "第26單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.2）。（虛詞缺失不合規範）",
                        "第26單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第26單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南儒學與心學思想 (Lingnan Confucian Philosophy)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 26-1）：",
                    "options": [
                        "第26單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.1）。",
                        "第26單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.1）。（主謂語序顛倒）",
                        "第26單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u26-l1）嘅核心關鍵詞（例如「嶺南儒學」）：",
                    "acceptedAnswers": [
                        "嶺南儒學",
                        "嶺南儒學與心",
                        "嶺南儒學與心學思想"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南儒學」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u26-l2": {
        "id": "hk-u26-l2",
        "subject": "cantonese",
        "unit": 26,
        "lessonNumber": 2,
        "title": "嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第2課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：陳白沙（陳獻章）「江門心學」自然之理、湛若水「隨處體認天理」哲學體系。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u26-l2）系統深入地探討「嶺南儒學與心學思想 (Lingnan Confucian Philosophy)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第26單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.2）。",
                    "r": "Dai6 26 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 26 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第26單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.3）。",
                    "r": "Dai6 26 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 26 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第2課)」嘅標準規範？",
                    "options": [
                        "第26單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.2）。",
                        "第26單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.2）。（錯配語序與字詞）",
                        "第26單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第26單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第26單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.3）。",
                        "第26單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.3）。（虛詞缺失不合規範）",
                        "第26單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第26單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南儒學與心學思想 (Lingnan Confucian Philosophy)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 26-2）：",
                    "options": [
                        "第26單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.2）。",
                        "第26單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.2）。（主謂語序顛倒）",
                        "第26單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u26-l2）嘅核心關鍵詞（例如「嶺南儒學」）：",
                    "acceptedAnswers": [
                        "嶺南儒學",
                        "嶺南儒學與心",
                        "嶺南儒學與心學思想"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南儒學」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u26-l3": {
        "id": "hk-u26-l3",
        "subject": "cantonese",
        "unit": 26,
        "lessonNumber": 3,
        "title": "嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第3課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：陳白沙（陳獻章）「江門心學」自然之理、湛若水「隨處體認天理」哲學體系。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u26-l3）系統深入地探討「嶺南儒學與心學思想 (Lingnan Confucian Philosophy)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第26單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.3）。",
                    "r": "Dai6 26 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 26 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第26單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.4）。",
                    "r": "Dai6 26 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 26 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第3課)」嘅標準規範？",
                    "options": [
                        "第26單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.3）。",
                        "第26單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.3）。（錯配語序與字詞）",
                        "第26單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第26單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第26單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.4）。",
                        "第26單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.4）。（虛詞缺失不合規範）",
                        "第26單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第26單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南儒學與心學思想 (Lingnan Confucian Philosophy)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 26-3）：",
                    "options": [
                        "第26單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.3）。",
                        "第26單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.3）。（主謂語序顛倒）",
                        "第26單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u26-l3）嘅核心關鍵詞（例如「嶺南儒學」）：",
                    "acceptedAnswers": [
                        "嶺南儒學",
                        "嶺南儒學與心",
                        "嶺南儒學與心學思想"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南儒學」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u26-l4": {
        "id": "hk-u26-l4",
        "subject": "cantonese",
        "unit": 26,
        "lessonNumber": 4,
        "title": "嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第4課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：陳白沙（陳獻章）「江門心學」自然之理、湛若水「隨處體認天理」哲學體系。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u26-l4）系統深入地探討「嶺南儒學與心學思想 (Lingnan Confucian Philosophy)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第26單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.4）。",
                    "r": "Dai6 26 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 26 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第26單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.5）。",
                    "r": "Dai6 26 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 26 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第4課)」嘅標準規範？",
                    "options": [
                        "第26單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.4）。",
                        "第26單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.4）。（錯配語序與字詞）",
                        "第26單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第26單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第26單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.5）。",
                        "第26單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.5）。（虛詞缺失不合規範）",
                        "第27單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第26單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南儒學與心學思想 (Lingnan Confucian Philosophy)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 26-4）：",
                    "options": [
                        "第26單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.4）。",
                        "第26單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.4）。（主謂語序顛倒）",
                        "第26單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u26-l4）嘅核心關鍵詞（例如「嶺南儒學」）：",
                    "acceptedAnswers": [
                        "嶺南儒學",
                        "嶺南儒學與心",
                        "嶺南儒學與心學思想"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南儒學」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u26-l5": {
        "id": "hk-u26-l5",
        "subject": "cantonese",
        "unit": 26,
        "lessonNumber": 5,
        "title": "嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第5課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：陳白沙（陳獻章）「江門心學」自然之理、湛若水「隨處體認天理」哲學體系。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u26-l5）系統深入地探討「嶺南儒學與心學思想 (Lingnan Confucian Philosophy)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第26單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.5）。",
                    "r": "Dai6 26 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 26 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第27單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.1）。",
                    "r": "Dai6 27 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 27 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第5課)」嘅標準規範？",
                    "options": [
                        "第26單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.5）。",
                        "第26單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.5）。（錯配語序與字詞）",
                        "第27單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第26單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第27單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.1）。",
                        "第27單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.1）。（虛詞缺失不合規範）",
                        "第27單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第27單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南儒學與心學思想 (Lingnan Confucian Philosophy)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 26-5）：",
                    "options": [
                        "第26單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.5）。",
                        "第26單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第26課嘅語法重點（句子標號：26.5）。（主謂語序顛倒）",
                        "第27單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u26-l5）嘅核心關鍵詞（例如「嶺南儒學」）：",
                    "acceptedAnswers": [
                        "嶺南儒學",
                        "嶺南儒學與心",
                        "嶺南儒學與心學思想"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南儒學」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u27-l1": {
        "id": "hk-u27-l1",
        "subject": "cantonese",
        "unit": 27,
        "lessonNumber": 1,
        "title": "傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第1課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：粵劇唱腔排場（生旦淨末丑）、嶺南畫派（高劍父、居廉）「折衷中西」美學。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u27-l1）系統深入地探討「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第27單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.1）。",
                    "r": "Dai6 27 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 27 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第27單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.2）。",
                    "r": "Dai6 27 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 27 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第1課)」嘅標準規範？",
                    "options": [
                        "第27單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.1）。",
                        "第27單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.1）。（錯配語序與字詞）",
                        "第27單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第27單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第27單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.2）。",
                        "第27單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.2）。（虛詞缺失不合規範）",
                        "第27單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第27單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 27-1）：",
                    "options": [
                        "第27單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.1）。",
                        "第27單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.1）。（主謂語序顛倒）",
                        "第27單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u27-l1）嘅核心關鍵詞（例如「傳統藝術」）：",
                    "acceptedAnswers": [
                        "傳統藝術",
                        "傳統藝術：粵",
                        "傳統藝術：粵劇、廣彩與嶺南畫派"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「傳統藝術」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u27-l2": {
        "id": "hk-u27-l2",
        "subject": "cantonese",
        "unit": 27,
        "lessonNumber": 2,
        "title": "傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第2課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：粵劇唱腔排場（生旦淨末丑）、嶺南畫派（高劍父、居廉）「折衷中西」美學。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u27-l2）系統深入地探討「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第27單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.2）。",
                    "r": "Dai6 27 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 27 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第27單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.3）。",
                    "r": "Dai6 27 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 27 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第2課)」嘅標準規範？",
                    "options": [
                        "第27單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.2）。",
                        "第27單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.2）。（錯配語序與字詞）",
                        "第27單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第27單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第27單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.3）。",
                        "第27單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.3）。（虛詞缺失不合規範）",
                        "第27單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第27單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 27-2）：",
                    "options": [
                        "第27單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.2）。",
                        "第27單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.2）。（主謂語序顛倒）",
                        "第27單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u27-l2）嘅核心關鍵詞（例如「傳統藝術」）：",
                    "acceptedAnswers": [
                        "傳統藝術",
                        "傳統藝術：粵",
                        "傳統藝術：粵劇、廣彩與嶺南畫派"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「傳統藝術」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u27-l3": {
        "id": "hk-u27-l3",
        "subject": "cantonese",
        "unit": 27,
        "lessonNumber": 3,
        "title": "傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第3課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：粵劇唱腔排場（生旦淨末丑）、嶺南畫派（高劍父、居廉）「折衷中西」美學。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u27-l3）系統深入地探討「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第27單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.3）。",
                    "r": "Dai6 27 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 27 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第27單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.4）。",
                    "r": "Dai6 27 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 27 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第3課)」嘅標準規範？",
                    "options": [
                        "第27單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.3）。",
                        "第27單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.3）。（錯配語序與字詞）",
                        "第27單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第27單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第27單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.4）。",
                        "第27單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.4）。（虛詞缺失不合規範）",
                        "第27單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第27單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 27-3）：",
                    "options": [
                        "第27單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.3）。",
                        "第27單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.3）。（主謂語序顛倒）",
                        "第27單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u27-l3）嘅核心關鍵詞（例如「傳統藝術」）：",
                    "acceptedAnswers": [
                        "傳統藝術",
                        "傳統藝術：粵",
                        "傳統藝術：粵劇、廣彩與嶺南畫派"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「傳統藝術」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u27-l4": {
        "id": "hk-u27-l4",
        "subject": "cantonese",
        "unit": 27,
        "lessonNumber": 4,
        "title": "傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第4課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：粵劇唱腔排場（生旦淨末丑）、嶺南畫派（高劍父、居廉）「折衷中西」美學。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u27-l4）系統深入地探討「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第27單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.4）。",
                    "r": "Dai6 27 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 27 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第27單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.5）。",
                    "r": "Dai6 27 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 27 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第4課)」嘅標準規範？",
                    "options": [
                        "第27單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.4）。",
                        "第27單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.4）。（錯配語序與字詞）",
                        "第27單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第27單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第27單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.5）。",
                        "第27單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.5）。（虛詞缺失不合規範）",
                        "第28單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第27單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 27-4）：",
                    "options": [
                        "第27單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.4）。",
                        "第27單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.4）。（主謂語序顛倒）",
                        "第27單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u27-l4）嘅核心關鍵詞（例如「傳統藝術」）：",
                    "acceptedAnswers": [
                        "傳統藝術",
                        "傳統藝術：粵",
                        "傳統藝術：粵劇、廣彩與嶺南畫派"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「傳統藝術」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u27-l5": {
        "id": "hk-u27-l5",
        "subject": "cantonese",
        "unit": 27,
        "lessonNumber": 5,
        "title": "傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第5課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：粵劇唱腔排場（生旦淨末丑）、嶺南畫派（高劍父、居廉）「折衷中西」美學。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u27-l5）系統深入地探討「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第27單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.5）。",
                    "r": "Dai6 27 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 27 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第28單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.1）。",
                    "r": "Dai6 28 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 28 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第5課)」嘅標準規範？",
                    "options": [
                        "第27單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.5）。",
                        "第27單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.5）。（錯配語序與字詞）",
                        "第28單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第27單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第28單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.1）。",
                        "第28單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.1）。（虛詞缺失不合規範）",
                        "第28單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第28單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 27-5）：",
                    "options": [
                        "第27單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.5）。",
                        "第27單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第27課嘅語法重點（句子標號：27.5）。（主謂語序顛倒）",
                        "第28單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u27-l5）嘅核心關鍵詞（例如「傳統藝術」）：",
                    "acceptedAnswers": [
                        "傳統藝術",
                        "傳統藝術：粵",
                        "傳統藝術：粵劇、廣彩與嶺南畫派"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「傳統藝術」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u28-l1": {
        "id": "hk-u28-l1",
        "subject": "cantonese",
        "unit": 28,
        "lessonNumber": 1,
        "title": "現代香港文學與流行文化 (Modern HK Literature & Cinema) (第1課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：金庸武俠小說、西西都市文學、黃霑詞作與香港電影黃金時代（王家衛/許鞍華）。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u28-l1）系統深入地探討「現代香港文學與流行文化 (Modern HK Literature & Cinema)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第28單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.1）。",
                    "r": "Dai6 28 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 28 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第28單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.2）。",
                    "r": "Dai6 28 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 28 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「現代香港文學與流行文化 (Modern HK Literature & Cinema) (第1課)」嘅標準規範？",
                    "options": [
                        "第28單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.1）。",
                        "第28單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.1）。（錯配語序與字詞）",
                        "第28單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第28單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第28單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.2）。",
                        "第28單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.2）。（虛詞缺失不合規範）",
                        "第28單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第28單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「現代香港文學與流行文化 (Modern HK Literature & Cinema)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 28-1）：",
                    "options": [
                        "第28單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.1）。",
                        "第28單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.1）。（主謂語序顛倒）",
                        "第28單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u28-l1）嘅核心關鍵詞（例如「現代香港」）：",
                    "acceptedAnswers": [
                        "現代香港",
                        "現代香港文學",
                        "現代香港文學與流行文化"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「現代香港」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u28-l2": {
        "id": "hk-u28-l2",
        "subject": "cantonese",
        "unit": 28,
        "lessonNumber": 2,
        "title": "現代香港文學與流行文化 (Modern HK Literature & Cinema) (第2課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：金庸武俠小說、西西都市文學、黃霑詞作與香港電影黃金時代（王家衛/許鞍華）。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u28-l2）系統深入地探討「現代香港文學與流行文化 (Modern HK Literature & Cinema)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第28單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.2）。",
                    "r": "Dai6 28 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 28 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第28單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.3）。",
                    "r": "Dai6 28 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 28 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「現代香港文學與流行文化 (Modern HK Literature & Cinema) (第2課)」嘅標準規範？",
                    "options": [
                        "第28單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.2）。",
                        "第28單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.2）。（錯配語序與字詞）",
                        "第28單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第28單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第28單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.3）。",
                        "第28單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.3）。（虛詞缺失不合規範）",
                        "第28單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第28單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「現代香港文學與流行文化 (Modern HK Literature & Cinema)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 28-2）：",
                    "options": [
                        "第28單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.2）。",
                        "第28單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.2）。（主謂語序顛倒）",
                        "第28單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u28-l2）嘅核心關鍵詞（例如「現代香港」）：",
                    "acceptedAnswers": [
                        "現代香港",
                        "現代香港文學",
                        "現代香港文學與流行文化"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「現代香港」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u28-l3": {
        "id": "hk-u28-l3",
        "subject": "cantonese",
        "unit": 28,
        "lessonNumber": 3,
        "title": "現代香港文學與流行文化 (Modern HK Literature & Cinema) (第3課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：金庸武俠小說、西西都市文學、黃霑詞作與香港電影黃金時代（王家衛/許鞍華）。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u28-l3）系統深入地探討「現代香港文學與流行文化 (Modern HK Literature & Cinema)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第28單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.3）。",
                    "r": "Dai6 28 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 28 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第28單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.4）。",
                    "r": "Dai6 28 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 28 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「現代香港文學與流行文化 (Modern HK Literature & Cinema) (第3課)」嘅標準規範？",
                    "options": [
                        "第28單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.3）。",
                        "第28單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.3）。（錯配語序與字詞）",
                        "第28單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第28單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第28單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.4）。",
                        "第28單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.4）。（虛詞缺失不合規範）",
                        "第28單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第28單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「現代香港文學與流行文化 (Modern HK Literature & Cinema)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 28-3）：",
                    "options": [
                        "第28單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.3）。",
                        "第28單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.3）。（主謂語序顛倒）",
                        "第28單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u28-l3）嘅核心關鍵詞（例如「現代香港」）：",
                    "acceptedAnswers": [
                        "現代香港",
                        "現代香港文學",
                        "現代香港文學與流行文化"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「現代香港」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u28-l4": {
        "id": "hk-u28-l4",
        "subject": "cantonese",
        "unit": 28,
        "lessonNumber": 4,
        "title": "現代香港文學與流行文化 (Modern HK Literature & Cinema) (第4課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：金庸武俠小說、西西都市文學、黃霑詞作與香港電影黃金時代（王家衛/許鞍華）。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u28-l4）系統深入地探討「現代香港文學與流行文化 (Modern HK Literature & Cinema)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第28單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.4）。",
                    "r": "Dai6 28 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 28 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第28單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.5）。",
                    "r": "Dai6 28 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 28 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「現代香港文學與流行文化 (Modern HK Literature & Cinema) (第4課)」嘅標準規範？",
                    "options": [
                        "第28單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.4）。",
                        "第28單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.4）。（錯配語序與字詞）",
                        "第28單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第28單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第28單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.5）。",
                        "第28單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.5）。（虛詞缺失不合規範）",
                        "第29單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第28單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「現代香港文學與流行文化 (Modern HK Literature & Cinema)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 28-4）：",
                    "options": [
                        "第28單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.4）。",
                        "第28單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.4）。（主謂語序顛倒）",
                        "第28單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u28-l4）嘅核心關鍵詞（例如「現代香港」）：",
                    "acceptedAnswers": [
                        "現代香港",
                        "現代香港文學",
                        "現代香港文學與流行文化"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「現代香港」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u28-l5": {
        "id": "hk-u28-l5",
        "subject": "cantonese",
        "unit": 28,
        "lessonNumber": 5,
        "title": "現代香港文學與流行文化 (Modern HK Literature & Cinema) (第5課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：金庸武俠小說、西西都市文學、黃霑詞作與香港電影黃金時代（王家衛/許鞍華）。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u28-l5）系統深入地探討「現代香港文學與流行文化 (Modern HK Literature & Cinema)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第28單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.5）。",
                    "r": "Dai6 28 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 28 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第29單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.1）。",
                    "r": "Dai6 29 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 29 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「現代香港文學與流行文化 (Modern HK Literature & Cinema) (第5課)」嘅標準規範？",
                    "options": [
                        "第28單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.5）。",
                        "第28單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.5）。（錯配語序與字詞）",
                        "第29單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第28單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第29單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.1）。",
                        "第29單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.1）。（虛詞缺失不合規範）",
                        "第29單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第29單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「現代香港文學與流行文化 (Modern HK Literature & Cinema)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 28-5）：",
                    "options": [
                        "第28單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.5）。",
                        "第28單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第28課嘅語法重點（句子標號：28.5）。（主謂語序顛倒）",
                        "第29單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u28-l5）嘅核心關鍵詞（例如「現代香港」）：",
                    "acceptedAnswers": [
                        "現代香港",
                        "現代香港文學",
                        "現代香港文學與流行文化"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「現代香港」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u29-l1": {
        "id": "hk-u29-l1",
        "subject": "cantonese",
        "unit": 29,
        "lessonNumber": 1,
        "title": "科技創新與學術話語 (Science, Tech & Academic Discourse) (第1課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：高端科研成果、學術論文摘要、統計模型分析與實證論證。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u29-l1）系統深入地探討「科技創新與學術話語 (Science, Tech & Academic Discourse)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第29單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.1）。",
                    "r": "Dai6 29 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 29 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第29單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.2）。",
                    "r": "Dai6 29 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 29 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「科技創新與學術話語 (Science, Tech & Academic Discourse) (第1課)」嘅標準規範？",
                    "options": [
                        "第29單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.1）。",
                        "第29單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.1）。（錯配語序與字詞）",
                        "第29單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第29單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第29單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.2）。",
                        "第29單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.2）。（虛詞缺失不合規範）",
                        "第29單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第29單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「科技創新與學術話語 (Science, Tech & Academic Discourse)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 29-1）：",
                    "options": [
                        "第29單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.1）。",
                        "第29單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.1）。（主謂語序顛倒）",
                        "第29單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u29-l1）嘅核心關鍵詞（例如「科技創新」）：",
                    "acceptedAnswers": [
                        "科技創新",
                        "科技創新與學",
                        "科技創新與學術話語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「科技創新」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u29-l2": {
        "id": "hk-u29-l2",
        "subject": "cantonese",
        "unit": 29,
        "lessonNumber": 2,
        "title": "科技創新與學術話語 (Science, Tech & Academic Discourse) (第2課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：高端科研成果、學術論文摘要、統計模型分析與實證論證。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u29-l2）系統深入地探討「科技創新與學術話語 (Science, Tech & Academic Discourse)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第29單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.2）。",
                    "r": "Dai6 29 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 29 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第29單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.3）。",
                    "r": "Dai6 29 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 29 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「科技創新與學術話語 (Science, Tech & Academic Discourse) (第2課)」嘅標準規範？",
                    "options": [
                        "第29單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.2）。",
                        "第29單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.2）。（錯配語序與字詞）",
                        "第29單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第29單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第29單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.3）。",
                        "第29單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.3）。（虛詞缺失不合規範）",
                        "第29單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第29單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「科技創新與學術話語 (Science, Tech & Academic Discourse)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 29-2）：",
                    "options": [
                        "第29單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.2）。",
                        "第29單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.2）。（主謂語序顛倒）",
                        "第29單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u29-l2）嘅核心關鍵詞（例如「科技創新」）：",
                    "acceptedAnswers": [
                        "科技創新",
                        "科技創新與學",
                        "科技創新與學術話語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「科技創新」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u29-l3": {
        "id": "hk-u29-l3",
        "subject": "cantonese",
        "unit": 29,
        "lessonNumber": 3,
        "title": "科技創新與學術話語 (Science, Tech & Academic Discourse) (第3課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：高端科研成果、學術論文摘要、統計模型分析與實證論證。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u29-l3）系統深入地探討「科技創新與學術話語 (Science, Tech & Academic Discourse)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第29單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.3）。",
                    "r": "Dai6 29 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 29 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第29單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.4）。",
                    "r": "Dai6 29 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 29 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「科技創新與學術話語 (Science, Tech & Academic Discourse) (第3課)」嘅標準規範？",
                    "options": [
                        "第29單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.3）。",
                        "第29單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.3）。（錯配語序與字詞）",
                        "第29單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第29單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第29單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.4）。",
                        "第29單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.4）。（虛詞缺失不合規範）",
                        "第29單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第29單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「科技創新與學術話語 (Science, Tech & Academic Discourse)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 29-3）：",
                    "options": [
                        "第29單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.3）。",
                        "第29單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.3）。（主謂語序顛倒）",
                        "第29單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u29-l3）嘅核心關鍵詞（例如「科技創新」）：",
                    "acceptedAnswers": [
                        "科技創新",
                        "科技創新與學",
                        "科技創新與學術話語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「科技創新」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u29-l4": {
        "id": "hk-u29-l4",
        "subject": "cantonese",
        "unit": 29,
        "lessonNumber": 4,
        "title": "科技創新與學術話語 (Science, Tech & Academic Discourse) (第4課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：高端科研成果、學術論文摘要、統計模型分析與實證論證。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u29-l4）系統深入地探討「科技創新與學術話語 (Science, Tech & Academic Discourse)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第29單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.4）。",
                    "r": "Dai6 29 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 29 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第29單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.5）。",
                    "r": "Dai6 29 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 29 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「科技創新與學術話語 (Science, Tech & Academic Discourse) (第4課)」嘅標準規範？",
                    "options": [
                        "第29單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.4）。",
                        "第29單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.4）。（錯配語序與字詞）",
                        "第29單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第29單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第29單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.5）。",
                        "第29單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.5）。（虛詞缺失不合規範）",
                        "第30單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第29單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「科技創新與學術話語 (Science, Tech & Academic Discourse)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 29-4）：",
                    "options": [
                        "第29單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.4）。",
                        "第29單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.4）。（主謂語序顛倒）",
                        "第29單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u29-l4）嘅核心關鍵詞（例如「科技創新」）：",
                    "acceptedAnswers": [
                        "科技創新",
                        "科技創新與學",
                        "科技創新與學術話語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「科技創新」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u29-l5": {
        "id": "hk-u29-l5",
        "subject": "cantonese",
        "unit": 29,
        "lessonNumber": 5,
        "title": "科技創新與學術話語 (Science, Tech & Academic Discourse) (第5課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：高端科研成果、學術論文摘要、統計模型分析與實證論證。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u29-l5）系統深入地探討「科技創新與學術話語 (Science, Tech & Academic Discourse)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第29單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.5）。",
                    "r": "Dai6 29 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 29 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第30單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.1）。",
                    "r": "Dai6 30 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 30 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「科技創新與學術話語 (Science, Tech & Academic Discourse) (第5課)」嘅標準規範？",
                    "options": [
                        "第29單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.5）。",
                        "第29單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.5）。（錯配語序與字詞）",
                        "第30單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第29單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第30單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.1）。",
                        "第30單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.1）。（虛詞缺失不合規範）",
                        "第30單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第30單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「科技創新與學術話語 (Science, Tech & Academic Discourse)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 29-5）：",
                    "options": [
                        "第29單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.5）。",
                        "第29單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第29課嘅語法重點（句子標號：29.5）。（主謂語序顛倒）",
                        "第30單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u29-l5）嘅核心關鍵詞（例如「科技創新」）：",
                    "acceptedAnswers": [
                        "科技創新",
                        "科技創新與學",
                        "科技創新與學術話語"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「科技創新」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u30-l1": {
        "id": "hk-u30-l1",
        "subject": "cantonese",
        "unit": 30,
        "lessonNumber": 1,
        "title": "當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第1課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：新浪潮電影視聽語言、光影空間敘事批評與社會歷史隱喻分析。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u30-l1）系統深入地探討「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第30單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.1）。",
                    "r": "Dai6 30 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 30 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第30單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.2）。",
                    "r": "Dai6 30 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 30 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第1課)」嘅標準規範？",
                    "options": [
                        "第30單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.1）。",
                        "第30單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.1）。（錯配語序與字詞）",
                        "第30單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第30單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第30單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.2）。",
                        "第30單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.2）。（虛詞缺失不合規範）",
                        "第30單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第30單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 30-1）：",
                    "options": [
                        "第30單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.1）。",
                        "第30單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.1）。（主謂語序顛倒）",
                        "第30單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u30-l1）嘅核心關鍵詞（例如「當代影視」）：",
                    "acceptedAnswers": [
                        "當代影視",
                        "當代影視藝術",
                        "當代影視藝術與美學批評"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「當代影視」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u30-l2": {
        "id": "hk-u30-l2",
        "subject": "cantonese",
        "unit": 30,
        "lessonNumber": 2,
        "title": "當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第2課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：新浪潮電影視聽語言、光影空間敘事批評與社會歷史隱喻分析。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u30-l2）系統深入地探討「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第30單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.2）。",
                    "r": "Dai6 30 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 30 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第30單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.3）。",
                    "r": "Dai6 30 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 30 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第2課)」嘅標準規範？",
                    "options": [
                        "第30單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.2）。",
                        "第30單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.2）。（錯配語序與字詞）",
                        "第30單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第30單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第30單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.3）。",
                        "第30單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.3）。（虛詞缺失不合規範）",
                        "第30單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第30單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 30-2）：",
                    "options": [
                        "第30單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.2）。",
                        "第30單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.2）。（主謂語序顛倒）",
                        "第30單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u30-l2）嘅核心關鍵詞（例如「當代影視」）：",
                    "acceptedAnswers": [
                        "當代影視",
                        "當代影視藝術",
                        "當代影視藝術與美學批評"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「當代影視」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u30-l3": {
        "id": "hk-u30-l3",
        "subject": "cantonese",
        "unit": 30,
        "lessonNumber": 3,
        "title": "當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第3課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：新浪潮電影視聽語言、光影空間敘事批評與社會歷史隱喻分析。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u30-l3）系統深入地探討「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第30單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.3）。",
                    "r": "Dai6 30 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 30 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第30單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.4）。",
                    "r": "Dai6 30 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 30 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第3課)」嘅標準規範？",
                    "options": [
                        "第30單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.3）。",
                        "第30單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.3）。（錯配語序與字詞）",
                        "第30單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第30單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第30單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.4）。",
                        "第30單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.4）。（虛詞缺失不合規範）",
                        "第30單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第30單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 30-3）：",
                    "options": [
                        "第30單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.3）。",
                        "第30單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.3）。（主謂語序顛倒）",
                        "第30單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u30-l3）嘅核心關鍵詞（例如「當代影視」）：",
                    "acceptedAnswers": [
                        "當代影視",
                        "當代影視藝術",
                        "當代影視藝術與美學批評"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「當代影視」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u30-l4": {
        "id": "hk-u30-l4",
        "subject": "cantonese",
        "unit": 30,
        "lessonNumber": 4,
        "title": "當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第4課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：新浪潮電影視聽語言、光影空間敘事批評與社會歷史隱喻分析。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u30-l4）系統深入地探討「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第30單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.4）。",
                    "r": "Dai6 30 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 30 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第30單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.5）。",
                    "r": "Dai6 30 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 30 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第4課)」嘅標準規範？",
                    "options": [
                        "第30單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.4）。",
                        "第30單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.4）。（錯配語序與字詞）",
                        "第30單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第30單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第30單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.5）。",
                        "第30單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.5）。（虛詞缺失不合規範）",
                        "第31單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第30單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 30-4）：",
                    "options": [
                        "第30單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.4）。",
                        "第30單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.4）。（主謂語序顛倒）",
                        "第30單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u30-l4）嘅核心關鍵詞（例如「當代影視」）：",
                    "acceptedAnswers": [
                        "當代影視",
                        "當代影視藝術",
                        "當代影視藝術與美學批評"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「當代影視」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u30-l5": {
        "id": "hk-u30-l5",
        "subject": "cantonese",
        "unit": 30,
        "lessonNumber": 5,
        "title": "當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第5課)",
        "level": "C1",
        "objective": "全面掌握並熟練運用本課核心內容：新浪潮電影視聽語言、光影空間敘事批評與社會歷史隱喻分析。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u30-l5）系統深入地探討「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第30單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.5）。",
                    "r": "Dai6 30 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 30 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第31單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.1）。",
                    "r": "Dai6 31 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 31 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第5課)」嘅標準規範？",
                    "options": [
                        "第30單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.5）。",
                        "第30單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.5）。（錯配語序與字詞）",
                        "第31單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第30單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第31單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.1）。",
                        "第31單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.1）。（虛詞缺失不合規範）",
                        "第31單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第31單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 30-5）：",
                    "options": [
                        "第30單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.5）。",
                        "第30單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第30課嘅語法重點（句子標號：30.5）。（主謂語序顛倒）",
                        "第31單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u30-l5）嘅核心關鍵詞（例如「當代影視」）：",
                    "acceptedAnswers": [
                        "當代影視",
                        "當代影視藝術",
                        "當代影視藝術與美學批評"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「當代影視」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u31-l1": {
        "id": "hk-u31-l1",
        "subject": "cantonese",
        "unit": 31,
        "lessonNumber": 1,
        "title": "普通法體系與香港司法制度 (Common Law & Legal System) (第1課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：英美普通法原則、司法覆核、法定判例權威與訴訟仲裁專業法律術語。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u31-l1）系統深入地探討「普通法體系與香港司法制度 (Common Law & Legal System)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第31單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.1）。",
                    "r": "Dai6 31 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 31 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第31單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.2）。",
                    "r": "Dai6 31 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 31 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「普通法體系與香港司法制度 (Common Law & Legal System) (第1課)」嘅標準規範？",
                    "options": [
                        "第31單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.1）。",
                        "第31單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.1）。（錯配語序與字詞）",
                        "第31單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第31單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第31單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.2）。",
                        "第31單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.2）。（虛詞缺失不合規範）",
                        "第31單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第31單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「普通法體系與香港司法制度 (Common Law & Legal System)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 31-1）：",
                    "options": [
                        "第31單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.1）。",
                        "第31單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.1）。（主謂語序顛倒）",
                        "第31單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u31-l1）嘅核心關鍵詞（例如「普通法體」）：",
                    "acceptedAnswers": [
                        "普通法體",
                        "普通法體系與",
                        "普通法體系與香港司法制度"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「普通法體」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u31-l2": {
        "id": "hk-u31-l2",
        "subject": "cantonese",
        "unit": 31,
        "lessonNumber": 2,
        "title": "普通法體系與香港司法制度 (Common Law & Legal System) (第2課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：英美普通法原則、司法覆核、法定判例權威與訴訟仲裁專業法律術語。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u31-l2）系統深入地探討「普通法體系與香港司法制度 (Common Law & Legal System)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第31單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.2）。",
                    "r": "Dai6 31 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 31 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第31單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.3）。",
                    "r": "Dai6 31 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 31 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「普通法體系與香港司法制度 (Common Law & Legal System) (第2課)」嘅標準規範？",
                    "options": [
                        "第31單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.2）。",
                        "第31單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.2）。（錯配語序與字詞）",
                        "第31單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第31單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第31單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.3）。",
                        "第31單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.3）。（虛詞缺失不合規範）",
                        "第31單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第31單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「普通法體系與香港司法制度 (Common Law & Legal System)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 31-2）：",
                    "options": [
                        "第31單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.2）。",
                        "第31單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.2）。（主謂語序顛倒）",
                        "第31單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u31-l2）嘅核心關鍵詞（例如「普通法體」）：",
                    "acceptedAnswers": [
                        "普通法體",
                        "普通法體系與",
                        "普通法體系與香港司法制度"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「普通法體」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u31-l3": {
        "id": "hk-u31-l3",
        "subject": "cantonese",
        "unit": 31,
        "lessonNumber": 3,
        "title": "普通法體系與香港司法制度 (Common Law & Legal System) (第3課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：英美普通法原則、司法覆核、法定判例權威與訴訟仲裁專業法律術語。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u31-l3）系統深入地探討「普通法體系與香港司法制度 (Common Law & Legal System)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第31單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.3）。",
                    "r": "Dai6 31 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 31 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第31單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.4）。",
                    "r": "Dai6 31 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 31 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「普通法體系與香港司法制度 (Common Law & Legal System) (第3課)」嘅標準規範？",
                    "options": [
                        "第31單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.3）。",
                        "第31單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.3）。（錯配語序與字詞）",
                        "第31單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第31單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第31單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.4）。",
                        "第31單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.4）。（虛詞缺失不合規範）",
                        "第31單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第31單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「普通法體系與香港司法制度 (Common Law & Legal System)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 31-3）：",
                    "options": [
                        "第31單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.3）。",
                        "第31單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.3）。（主謂語序顛倒）",
                        "第31單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u31-l3）嘅核心關鍵詞（例如「普通法體」）：",
                    "acceptedAnswers": [
                        "普通法體",
                        "普通法體系與",
                        "普通法體系與香港司法制度"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「普通法體」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u31-l4": {
        "id": "hk-u31-l4",
        "subject": "cantonese",
        "unit": 31,
        "lessonNumber": 4,
        "title": "普通法體系與香港司法制度 (Common Law & Legal System) (第4課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：英美普通法原則、司法覆核、法定判例權威與訴訟仲裁專業法律術語。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u31-l4）系統深入地探討「普通法體系與香港司法制度 (Common Law & Legal System)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第31單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.4）。",
                    "r": "Dai6 31 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 31 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第31單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.5）。",
                    "r": "Dai6 31 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 31 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「普通法體系與香港司法制度 (Common Law & Legal System) (第4課)」嘅標準規範？",
                    "options": [
                        "第31單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.4）。",
                        "第31單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.4）。（錯配語序與字詞）",
                        "第31單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第31單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第31單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.5）。",
                        "第31單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.5）。（虛詞缺失不合規範）",
                        "第32單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第31單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「普通法體系與香港司法制度 (Common Law & Legal System)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 31-4）：",
                    "options": [
                        "第31單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.4）。",
                        "第31單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.4）。（主謂語序顛倒）",
                        "第31單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u31-l4）嘅核心關鍵詞（例如「普通法體」）：",
                    "acceptedAnswers": [
                        "普通法體",
                        "普通法體系與",
                        "普通法體系與香港司法制度"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「普通法體」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u31-l5": {
        "id": "hk-u31-l5",
        "subject": "cantonese",
        "unit": 31,
        "lessonNumber": 5,
        "title": "普通法體系與香港司法制度 (Common Law & Legal System) (第5課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：英美普通法原則、司法覆核、法定判例權威與訴訟仲裁專業法律術語。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u31-l5）系統深入地探討「普通法體系與香港司法制度 (Common Law & Legal System)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第31單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.5）。",
                    "r": "Dai6 31 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 31 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第32單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.1）。",
                    "r": "Dai6 32 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 32 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「普通法體系與香港司法制度 (Common Law & Legal System) (第5課)」嘅標準規範？",
                    "options": [
                        "第31單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.5）。",
                        "第31單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.5）。（錯配語序與字詞）",
                        "第32單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第31單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第32單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.1）。",
                        "第32單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.1）。（虛詞缺失不合規範）",
                        "第32單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第32單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「普通法體系與香港司法制度 (Common Law & Legal System)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 31-5）：",
                    "options": [
                        "第31單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.5）。",
                        "第31單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第31課嘅語法重點（句子標號：31.5）。（主謂語序顛倒）",
                        "第32單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u31-l5）嘅核心關鍵詞（例如「普通法體」）：",
                    "acceptedAnswers": [
                        "普通法體",
                        "普通法體系與",
                        "普通法體系與香港司法制度"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「普通法體」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u32-l1": {
        "id": "hk-u32-l1",
        "subject": "cantonese",
        "unit": 32,
        "lessonNumber": 1,
        "title": "高階辯論與公共演說 (High Debating & Public Address) (第1課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：嚴密邏輯思維、修辭論辯戰略、跨文化公共政策演講與危機處理陳詞。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u32-l1）系統深入地探討「高階辯論與公共演說 (High Debating & Public Address)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第32單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.1）。",
                    "r": "Dai6 32 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 32 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第32單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.2）。",
                    "r": "Dai6 32 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 32 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「高階辯論與公共演說 (High Debating & Public Address) (第1課)」嘅標準規範？",
                    "options": [
                        "第32單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.1）。",
                        "第32單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.1）。（錯配語序與字詞）",
                        "第32單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第32單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第32單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.2）。",
                        "第32單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.2）。（虛詞缺失不合規範）",
                        "第32單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第32單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「高階辯論與公共演說 (High Debating & Public Address)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 32-1）：",
                    "options": [
                        "第32單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.1）。",
                        "第32單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.1）。（主謂語序顛倒）",
                        "第32單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u32-l1）嘅核心關鍵詞（例如「高階辯論」）：",
                    "acceptedAnswers": [
                        "高階辯論",
                        "高階辯論與公",
                        "高階辯論與公共演說"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「高階辯論」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u32-l2": {
        "id": "hk-u32-l2",
        "subject": "cantonese",
        "unit": 32,
        "lessonNumber": 2,
        "title": "高階辯論與公共演說 (High Debating & Public Address) (第2課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：嚴密邏輯思維、修辭論辯戰略、跨文化公共政策演講與危機處理陳詞。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u32-l2）系統深入地探討「高階辯論與公共演說 (High Debating & Public Address)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第32單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.2）。",
                    "r": "Dai6 32 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 32 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第32單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.3）。",
                    "r": "Dai6 32 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 32 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「高階辯論與公共演說 (High Debating & Public Address) (第2課)」嘅標準規範？",
                    "options": [
                        "第32單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.2）。",
                        "第32單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.2）。（錯配語序與字詞）",
                        "第32單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第32單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第32單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.3）。",
                        "第32單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.3）。（虛詞缺失不合規範）",
                        "第32單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第32單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「高階辯論與公共演說 (High Debating & Public Address)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 32-2）：",
                    "options": [
                        "第32單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.2）。",
                        "第32單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.2）。（主謂語序顛倒）",
                        "第32單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u32-l2）嘅核心關鍵詞（例如「高階辯論」）：",
                    "acceptedAnswers": [
                        "高階辯論",
                        "高階辯論與公",
                        "高階辯論與公共演說"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「高階辯論」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u32-l3": {
        "id": "hk-u32-l3",
        "subject": "cantonese",
        "unit": 32,
        "lessonNumber": 3,
        "title": "高階辯論與公共演說 (High Debating & Public Address) (第3課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：嚴密邏輯思維、修辭論辯戰略、跨文化公共政策演講與危機處理陳詞。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u32-l3）系統深入地探討「高階辯論與公共演說 (High Debating & Public Address)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第32單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.3）。",
                    "r": "Dai6 32 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 32 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第32單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.4）。",
                    "r": "Dai6 32 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 32 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「高階辯論與公共演說 (High Debating & Public Address) (第3課)」嘅標準規範？",
                    "options": [
                        "第32單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.3）。",
                        "第32單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.3）。（錯配語序與字詞）",
                        "第32單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第32單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第32單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.4）。",
                        "第32單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.4）。（虛詞缺失不合規範）",
                        "第32單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第32單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「高階辯論與公共演說 (High Debating & Public Address)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 32-3）：",
                    "options": [
                        "第32單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.3）。",
                        "第32單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.3）。（主謂語序顛倒）",
                        "第32單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u32-l3）嘅核心關鍵詞（例如「高階辯論」）：",
                    "acceptedAnswers": [
                        "高階辯論",
                        "高階辯論與公",
                        "高階辯論與公共演說"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「高階辯論」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u32-l4": {
        "id": "hk-u32-l4",
        "subject": "cantonese",
        "unit": 32,
        "lessonNumber": 4,
        "title": "高階辯論與公共演說 (High Debating & Public Address) (第4課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：嚴密邏輯思維、修辭論辯戰略、跨文化公共政策演講與危機處理陳詞。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u32-l4）系統深入地探討「高階辯論與公共演說 (High Debating & Public Address)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第32單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.4）。",
                    "r": "Dai6 32 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 32 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第32單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.5）。",
                    "r": "Dai6 32 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 32 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「高階辯論與公共演說 (High Debating & Public Address) (第4課)」嘅標準規範？",
                    "options": [
                        "第32單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.4）。",
                        "第32單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.4）。（錯配語序與字詞）",
                        "第32單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第32單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第32單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.5）。",
                        "第32單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.5）。（虛詞缺失不合規範）",
                        "第33單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第32單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「高階辯論與公共演說 (High Debating & Public Address)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 32-4）：",
                    "options": [
                        "第32單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.4）。",
                        "第32單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.4）。（主謂語序顛倒）",
                        "第32單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u32-l4）嘅核心關鍵詞（例如「高階辯論」）：",
                    "acceptedAnswers": [
                        "高階辯論",
                        "高階辯論與公",
                        "高階辯論與公共演說"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「高階辯論」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u32-l5": {
        "id": "hk-u32-l5",
        "subject": "cantonese",
        "unit": 32,
        "lessonNumber": 5,
        "title": "高階辯論與公共演說 (High Debating & Public Address) (第5課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：嚴密邏輯思維、修辭論辯戰略、跨文化公共政策演講與危機處理陳詞。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u32-l5）系統深入地探討「高階辯論與公共演說 (High Debating & Public Address)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第32單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.5）。",
                    "r": "Dai6 32 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 32 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第33單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.1）。",
                    "r": "Dai6 33 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 33 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「高階辯論與公共演說 (High Debating & Public Address) (第5課)」嘅標準規範？",
                    "options": [
                        "第32單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.5）。",
                        "第32單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.5）。（錯配語序與字詞）",
                        "第33單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第32單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第33單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.1）。",
                        "第33單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.1）。（虛詞缺失不合規範）",
                        "第33單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第33單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「高階辯論與公共演說 (High Debating & Public Address)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 32-5）：",
                    "options": [
                        "第32單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.5）。",
                        "第32單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第32課嘅語法重點（句子標號：32.5）。（主謂語序顛倒）",
                        "第33單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u32-l5）嘅核心關鍵詞（例如「高階辯論」）：",
                    "acceptedAnswers": [
                        "高階辯論",
                        "高階辯論與公",
                        "高階辯論與公共演說"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「高階辯論」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u33-l1": {
        "id": "hk-u33-l1",
        "subject": "cantonese",
        "unit": 33,
        "lessonNumber": 1,
        "title": "嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第1課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：嶺南四大名園（清暉園/梁園/可園/餘蔭山房）、鑊耳屋與三雕一塑工藝。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u33-l1）系統深入地探討「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第33單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.1）。",
                    "r": "Dai6 33 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 33 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第33單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.2）。",
                    "r": "Dai6 33 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 33 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第1課)」嘅標準規範？",
                    "options": [
                        "第33單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.1）。",
                        "第33單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.1）。（錯配語序與字詞）",
                        "第33單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第33單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第33單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.2）。",
                        "第33單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.2）。（虛詞缺失不合規範）",
                        "第33單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第33單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 33-1）：",
                    "options": [
                        "第33單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.1）。",
                        "第33單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.1）。（主謂語序顛倒）",
                        "第33單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u33-l1）嘅核心關鍵詞（例如「嶺南傳統」）：",
                    "acceptedAnswers": [
                        "嶺南傳統",
                        "嶺南傳統建築",
                        "嶺南傳統建築與園林美學"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南傳統」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u33-l2": {
        "id": "hk-u33-l2",
        "subject": "cantonese",
        "unit": 33,
        "lessonNumber": 2,
        "title": "嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第2課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：嶺南四大名園（清暉園/梁園/可園/餘蔭山房）、鑊耳屋與三雕一塑工藝。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u33-l2）系統深入地探討「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第33單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.2）。",
                    "r": "Dai6 33 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 33 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第33單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.3）。",
                    "r": "Dai6 33 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 33 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第2課)」嘅標準規範？",
                    "options": [
                        "第33單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.2）。",
                        "第33單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.2）。（錯配語序與字詞）",
                        "第33單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第33單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第33單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.3）。",
                        "第33單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.3）。（虛詞缺失不合規範）",
                        "第33單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第33單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 33-2）：",
                    "options": [
                        "第33單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.2）。",
                        "第33單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.2）。（主謂語序顛倒）",
                        "第33單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u33-l2）嘅核心關鍵詞（例如「嶺南傳統」）：",
                    "acceptedAnswers": [
                        "嶺南傳統",
                        "嶺南傳統建築",
                        "嶺南傳統建築與園林美學"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南傳統」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u33-l3": {
        "id": "hk-u33-l3",
        "subject": "cantonese",
        "unit": 33,
        "lessonNumber": 3,
        "title": "嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第3課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：嶺南四大名園（清暉園/梁園/可園/餘蔭山房）、鑊耳屋與三雕一塑工藝。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u33-l3）系統深入地探討「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第33單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.3）。",
                    "r": "Dai6 33 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 33 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第33單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.4）。",
                    "r": "Dai6 33 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 33 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第3課)」嘅標準規範？",
                    "options": [
                        "第33單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.3）。",
                        "第33單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.3）。（錯配語序與字詞）",
                        "第33單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第33單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第33單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.4）。",
                        "第33單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.4）。（虛詞缺失不合規範）",
                        "第33單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第33單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 33-3）：",
                    "options": [
                        "第33單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.3）。",
                        "第33單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.3）。（主謂語序顛倒）",
                        "第33單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u33-l3）嘅核心關鍵詞（例如「嶺南傳統」）：",
                    "acceptedAnswers": [
                        "嶺南傳統",
                        "嶺南傳統建築",
                        "嶺南傳統建築與園林美學"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南傳統」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u33-l4": {
        "id": "hk-u33-l4",
        "subject": "cantonese",
        "unit": 33,
        "lessonNumber": 4,
        "title": "嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第4課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：嶺南四大名園（清暉園/梁園/可園/餘蔭山房）、鑊耳屋與三雕一塑工藝。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u33-l4）系統深入地探討「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第33單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.4）。",
                    "r": "Dai6 33 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 33 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第33單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.5）。",
                    "r": "Dai6 33 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 33 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第4課)」嘅標準規範？",
                    "options": [
                        "第33單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.4）。",
                        "第33單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.4）。（錯配語序與字詞）",
                        "第33單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第33單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第33單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.5）。",
                        "第33單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.5）。（虛詞缺失不合規範）",
                        "第34單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.1）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第33單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 33-4）：",
                    "options": [
                        "第33單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.4）。",
                        "第33單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.4）。（主謂語序顛倒）",
                        "第33單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u33-l4）嘅核心關鍵詞（例如「嶺南傳統」）：",
                    "acceptedAnswers": [
                        "嶺南傳統",
                        "嶺南傳統建築",
                        "嶺南傳統建築與園林美學"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南傳統」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u33-l5": {
        "id": "hk-u33-l5",
        "subject": "cantonese",
        "unit": 33,
        "lessonNumber": 5,
        "title": "嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第5課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：嶺南四大名園（清暉園/梁園/可園/餘蔭山房）、鑊耳屋與三雕一塑工藝。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u33-l5）系統深入地探討「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第33單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.5）。",
                    "r": "Dai6 33 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 33 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第34單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.1）。",
                    "r": "Dai6 34 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 34 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第5課)」嘅標準規範？",
                    "options": [
                        "第33單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.5）。",
                        "第33單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.5）。（錯配語序與字詞）",
                        "第34單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.1）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第33單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第34單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.1）。",
                        "第34單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.1）。（虛詞缺失不合規範）",
                        "第34單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.2）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第34單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.1）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 33-5）：",
                    "options": [
                        "第33單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.5）。",
                        "第33單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第33課嘅語法重點（句子標號：33.5）。（主謂語序顛倒）",
                        "第34單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.1）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u33-l5）嘅核心關鍵詞（例如「嶺南傳統」）：",
                    "acceptedAnswers": [
                        "嶺南傳統",
                        "嶺南傳統建築",
                        "嶺南傳統建築與園林美學"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「嶺南傳統」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u34-l1": {
        "id": "hk-u34-l1",
        "subject": "cantonese",
        "unit": 34,
        "lessonNumber": 1,
        "title": "多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第1課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：1969年維也納條約法公約（VCLT）、聯合國安理會決議起草、峰會聯合公報外交答辯。 (第1部分)。",
        "presentation": {
            "explanation": "本課（hk-u34-l1）系統深入地探討「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT)」（第1課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第34單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.1）。",
                    "r": "Dai6 34 daan1 jyun4 dai6 1 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 34 Lesson 1 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第34單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.2）。",
                    "r": "Dai6 34 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 34 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "粵語九聲六調口訣：「三九四零五二七八六」（分陰陽平上去入）。"
            ],
            "culturalNotes": [
                "「飲茶」（食點心）是嶺南飲食文化的核心，更是家庭聚會與商務溝通的重要社交場合。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第1課)」嘅標準規範？",
                    "options": [
                        "第34單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.1）。",
                        "第34單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.1）。（錯配語序與字詞）",
                        "第34單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.2）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第34單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.1）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第34單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.2）。",
                        "第34單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.2）。（虛詞缺失不合規範）",
                        "第34單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.3）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第34單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.2）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 34-1）：",
                    "options": [
                        "第34單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.1）。",
                        "第34單元第1課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.1）。（主謂語序顛倒）",
                        "第34單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.2）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u34-l1）嘅核心關鍵詞（例如「多邊外交」）：",
                    "acceptedAnswers": [
                        "多邊外交",
                        "多邊外交、條",
                        "多邊外交、條約法與公報辯護"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「多邊外交」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u34-l2": {
        "id": "hk-u34-l2",
        "subject": "cantonese",
        "unit": 34,
        "lessonNumber": 2,
        "title": "多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第2課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：1969年維也納條約法公約（VCLT）、聯合國安理會決議起草、峰會聯合公報外交答辯。 (第2部分)。",
        "presentation": {
            "explanation": "本課（hk-u34-l2）系統深入地探討「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT)」（第2課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第34單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.2）。",
                    "r": "Dai6 34 daan1 jyun4 dai6 2 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 34 Lesson 2 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第34單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.3）。",
                    "r": "Dai6 34 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 34 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "動態助詞「緊」（進行體）、「咗」（完成體）、「過」（經歷體）準確表達動作時態。"
            ],
            "culturalNotes": [
                "在茶樓倒茶時，用食指與中指輕敲桌面（叩手禮）是表達謝意的傳統禮節。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第2課)」嘅標準規範？",
                    "options": [
                        "第34單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.2）。",
                        "第34單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.2）。（錯配語序與字詞）",
                        "第34單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.3）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第34單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.2）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第34單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.3）。",
                        "第34單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.3）。（虛詞缺失不合規範）",
                        "第34單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.4）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第34單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.3）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 34-2）：",
                    "options": [
                        "第34單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.2）。",
                        "第34單元第2課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.2）。（主謂語序顛倒）",
                        "第34單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.3）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u34-l2）嘅核心關鍵詞（例如「多邊外交」）：",
                    "acceptedAnswers": [
                        "多邊外交",
                        "多邊外交、條",
                        "多邊外交、條約法與公報辯護"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「多邊外交」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u34-l3": {
        "id": "hk-u34-l3",
        "subject": "cantonese",
        "unit": 34,
        "lessonNumber": 3,
        "title": "多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第3課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：1969年維也納條約法公約（VCLT）、聯合國安理會決議起草、峰會聯合公報外交答辯。 (第3部分)。",
        "presentation": {
            "explanation": "本課（hk-u34-l3）系統深入地探討「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT)」（第3課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第34單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.3）。",
                    "r": "Dai6 34 daan1 jyun4 dai6 3 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 34 Lesson 3 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第34單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.4）。",
                    "r": "Dai6 34 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 34 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "句尾語氣助詞「啦、喇、囉、咩、喎、呢」蘊含豐富的情感與語用色彩。"
            ],
            "culturalNotes": [
                "講究「意頭」（吉祥寓意），如「發財好市」（髮菜蠔豉）體現了務實繁榮的嶺南民間心理。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第3課)」嘅標準規範？",
                    "options": [
                        "第34單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.3）。",
                        "第34單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.3）。（錯配語序與字詞）",
                        "第34單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.4）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第34單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.3）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第34單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.4）。",
                        "第34單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.4）。（虛詞缺失不合規範）",
                        "第34單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.5）。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第34單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.4）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 34-3）：",
                    "options": [
                        "第34單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.3）。",
                        "第34單元第3課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.3）。（主謂語序顛倒）",
                        "第34單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.4）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u34-l3）嘅核心關鍵詞（例如「多邊外交」）：",
                    "acceptedAnswers": [
                        "多邊外交",
                        "多邊外交、條",
                        "多邊外交、條約法與公報辯護"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「多邊外交」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u34-l4": {
        "id": "hk-u34-l4",
        "subject": "cantonese",
        "unit": 34,
        "lessonNumber": 4,
        "title": "多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第4課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：1969年維也納條約法公約（VCLT）、聯合國安理會決議起草、峰會聯合公報外交答辯。 (第4部分)。",
        "presentation": {
            "explanation": "本課（hk-u34-l4）系統深入地探討「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT)」（第4課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第34單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.4）。",
                    "r": "Dai6 34 daan1 jyun4 dai6 4 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 34 Lesson 4 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "第34單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.5）。",
                    "r": "Dai6 34 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 34 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                }
            ],
            "mnemonics": [
                "處置結構常用「將」或「同我」，雙賓語語序為「畀＋物＋人」（例如：畀本書我）。"
            ],
            "culturalNotes": [
                "「唔該」（感謝勞力/勞駕）與「多謝」（感謝禮物/心意）在日常交際中區分得非常嚴謹。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第4課)」嘅標準規範？",
                    "options": [
                        "第34單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.4）。",
                        "第34單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.4）。（錯配語序與字詞）",
                        "第34單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.5）。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第34單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.4）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "第34單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.5）。",
                        "第34單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.5）。（虛詞缺失不合規範）",
                        "早晨啊，陳先生，今日好高興喺度見到你。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「第34單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.5）。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 34-4）：",
                    "options": [
                        "第34單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.4）。",
                        "第34單元第4課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.4）。（主謂語序顛倒）",
                        "第34單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.5）。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u34-l4）嘅核心關鍵詞（例如「多邊外交」）：",
                    "acceptedAnswers": [
                        "多邊外交",
                        "多邊外交、條",
                        "多邊外交、條約法與公報辯護"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「多邊外交」。"
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u34-l5": {
        "id": "hk-u34-l5",
        "subject": "cantonese",
        "unit": 34,
        "lessonNumber": 5,
        "title": "多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第5課)",
        "level": "C2",
        "objective": "全面掌握並熟練運用本課核心內容：1969年維也納條約法公約（VCLT）、聯合國安理會決議起草、峰會聯合公報外交答辯。 (第5部分)。",
        "presentation": {
            "explanation": "本課（hk-u34-l5）系統深入地探討「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT)」（第5課）的核心語法結構、詞彙搭配以及語用規範。\n\n【語法语義與結構解析】\n粵語（廣東話）作為漢語族中保存中古漢語音韻同語法特徵最豐富的語言之一，具有九聲六調、完整入聲韻尾（-p/-t/-k）以及發達的句尾語氣助詞系統。學習本單元時，學習者應當精確掌握粵語特有的語序結構、動態助詞與虛詞搭配，以及正式書面語與地道口語之間的語體轉換。\n\n【標準語境與實際交流應用】\n1. 句法規範：嚴格遵循粵語語法結構，正確使用各類動詞補語、介詞結構同動態助詞。\n2. 詞彙搭配：熟練運用地道粵語詞彙，避免生搬硬套或語義混淆。\n3. 語用得體：根據交際場合（正式學術研討/日常社交/商務外事）靈活調整語氣助詞與禮貌級別。",
            "examples": [
                {
                    "t": "第34單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.5）。",
                    "r": "Dai6 34 daan1 jyun4 dai6 5 fo3 biu1 zeon2 Jyut6 yu5 yu5 geui3: ngo5 dei6 hai2 yat6 seung4 sang1 wut6 tung4 zyun1 yip6 gaau1 lau4 zung1 ling4 wut6 wan6 jung6.",
                    "tr": "Unit 34 Lesson 5 standard Cantonese exemplar sentence for practical and advanced communication."
                },
                {
                    "t": "早晨啊，陳先生，今日好高興喺度見到你。",
                    "r": "Zou2 san4 aa3, Can4 sin1 saang1, gam1 yat6 hou2 gou1 hing3 hai2 dou6 gin3 dou2 nei5.",
                    "tr": "Good morning, Mr. Chan, very glad to see you here today."
                }
            ],
            "mnemonics": [
                "入聲韻尾（-p, -t, -k）短促有力，完整保留了中古漢語的音韻精髓。"
            ],
            "culturalNotes": [
                "香港市井生活中的茶餐廳文化，體現了中西合璧、高效靈活的都市生活節奏。"
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "【語法判斷】下列邊一個句子完全符合「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第5課)」嘅標準規範？",
                    "options": [
                        "第34單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.5）。",
                        "第34單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.5）。（錯配語序與字詞）",
                        "早晨啊，陳先生，今日好高興喺度見到你。（否定詞位置錯誤）"
                    ],
                    "answerIndex": 0,
                    "explanation": "正確答案為「第34單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.5）。」，語序自然且符合地道粵語語法。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "【表達應用】請選出最符合當前語境同禮貌規範嘅粵語表述：",
                    "options": [
                        "早晨啊，陳先生，今日好高興喺度見到你。",
                        "早晨啊，陳先生，今日好高興喺度見到你。（虛詞缺失不合規範）",
                        "唔該晒你呀，幫咗我咁大個忙，真係唔好意思。（句式雜糅語意不清）"
                    ],
                    "answerIndex": 0,
                    "explanation": "「早晨啊，陳先生，今日好高興喺度見到你。」喺語義、詞彙與語境搭配上均達標。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "【綜合評估】為檢驗學習者對「多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT)」嘅掌握程度，請選出表述完全正確嘅標準範句（測試 34-5）：",
                    "options": [
                        "第34單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.5）。",
                        "第34單元第5課標準粵語語句：我哋喺日常生活同專業交流中靈活運用第34課嘅語法重點（句子標號：34.5）。（主謂語序顛倒）",
                        "早晨啊，陳先生，今日好高興喺度見到你。（補語結構混亂）"
                    ],
                    "answerIndex": 0,
                    "explanation": "該範句符合標準高級粵語表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "請輸入本課（hk-u34-l5）嘅核心關鍵詞（例如「多邊外交」）：",
                    "acceptedAnswers": [
                        "多邊外交",
                        "多邊外交、條",
                        "多邊外交、條約法與公報辯護"
                    ],
                    "explanation": "正確嘅核心關鍵詞為「多邊外交」。"
                }
            ],
            "passThreshold": 0.8
        }
    }
};
  var ROADMAP = [];
  var SUBJECT = { units: UNITS, lessons: LESSONS, roadmap: ROADMAP };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['cantonese'] = SUBJECT;
  if (typeof module !== 'undefined' && module.exports) module.exports = SUBJECT;
})(typeof window !== 'undefined' ? window : global);
