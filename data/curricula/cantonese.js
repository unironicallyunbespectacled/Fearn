// Cantonese curriculum — full CEFR A1–C2 roadmap (34 units, 170 lessons)
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
        "unit": "hk-u1",
        "level": "A1",
        "objective": "Master standard Cantonese greetings, Jyutping pronunciation, and the 6 phonemic tones (你好 nei5 hou2, 早晨 zou2 san4, 食咗飯未呀 sik6 zo2 faan6 mei6 aa3).",
        "prerequisites": [],
        "warmup": {
            "srsPull": false,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "歡迎嚟到廣東話（Cantonese / 粵語）世界！廣東話係一種聲調極為豐富、歷史悠久嘅語言，主要通行於香港、澳門、廣東同全球海外唐人街。\n\n1. 粵拼六聲系統 (Jyutping 6 Tones):\n廣東話標準音（粵拼）有六個基本聲調：\n- 第1聲 (55/53 陰平)：高平調，例如 **詩 (si1)**。\n- 第2聲 (35 陰上)：高升調，例如 **史 (si2)**。\n- 第3聲 (33 陰去)：中平調，例如 **試 (si3)**。\n- 第4聲 (21/11 陽平)：低降調，例如 **時 (si4)**。\n- 第5聲 (13/23 陽上)：低升調，例如 **市 (si5)**。\n- 第6聲 (22 陽去)：低平調，例如 **事 (si6)**。\n*(口訣：詩史試，時市事)*\n\n2. 基本見面問候語 (Core Greetings):\n- **你好 (nei5 hou2)**：通用問候「Hello / How are you」。\n- **早晨 (zou2 san4)**：朝早見面打招呼「Good morning」。\n- **食咗飯未呀？ (sik6 zo2 faan6 mei6 aa3?)**：華人社會最親切嘅問候，字面意思係「食咗飯未」，表達關心同友善！",
            "examples": [
                {
                    "target": "早晨呀陳生，今日精神好好喎！",
                    "reading": "zou2 san4 aa3 can4 saang1, gam1 jat6 zing1 san4 hou2 hou2 wo3!",
                    "translation": "Good morning Mr. Chan, you look very energetic today!"
                },
                {
                    "target": "你好，我係新嚟嘅同事David，請多多指教。",
                    "reading": "nei5 hou2, ngo5 hai6 san1 lai4 ge3 tung4 si6 David, cing2 do1 do1 zi2 gaau3.",
                    "translation": "Hello, I am the new colleague David, pleased to meet you."
                },
                {
                    "target": "李太，食咗飯未呀？入嚟坐陣啦！",
                    "reading": "lei5 taai3, sik6 zo2 faan6 mei6 aa3? jap6 lai4 co5 zan6 laa1!",
                    "translation": "Mrs. Li, have you eaten yet? Come in and take a seat for a while!"
                }
            ],
            "mnemonics": [
                "Six Tones: 詩(1) 史(2) 試(3) 時(4) 市(5) 事(6) — High, Rising, Mid, Low-fall, Low-rise, Low!"
            ],
            "culturalNotes": [
                "«早晨» (zou2 san4) is universally used across Hong Kong offices, streets, and residential lobbies each morning as a warm, respectful greeting."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺廣東話入面，朝早喺公司或者街上面見到街坊鄰居，最地道常用嘅打招呼用語係：",
                    "options": [
                        "早霸王",
                        "早晨 (zou2 san4 - Good morning)",
                        "晚安"
                    ],
                    "answerIndex": 1,
                    "explanation": "早晨 (zou2 san4) is the standard and most natural Cantonese greeting for 'Good morning'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話入面，最能體現嶺南飲食文化與鄰里人情味、經常用作熟人見面寒暄嘅問候句係：",
                    "options": [
                        "食咗飯未呀？ (sik6 zo2 faan6 mei6 aa3? - Have you eaten yet?)",
                        "你去咗邊度買樓？",
                        "你今日賺咗幾多錢？"
                    ],
                    "answerIndex": 0,
                    "explanation": "食咗飯未呀？ (Have you eaten yet?) is the quintessential Cantonese cultural greeting expressing warmth."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話嘅聲調特點同基本見面問候，下列邊一項表述完全正確？",
                    "options": [
                        "廣東話只有兩個聲調且見面不能打招呼",
                        "廣東話具有六個基本聲調（如詩史試時市事），見面常用「你好」、「早晨」及親切的「食咗飯未呀」進行問候 (6 basic tones; uses nei5 hou2, zou2 san4, and sik6 zo2 faan6 mei6 aa3)",
                        "早晨只能在深夜十二點使用"
                    ],
                    "answerIndex": 1,
                    "explanation": "Correctly summarizes Jyutping 6 tones and core greeting vocabulary."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'Good morning' in Cantonese (早晨):",
                    "acceptedAnswers": [
                        "早晨",
                        "zou2san4",
                        "zou2 san4",
                        "Zou2 san4",
                        "Zou2san4"
                    ],
                    "explanation": "早晨 (zou2 san4) means 'Good morning' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u1-l2": {
        "id": "hk-u1-l2",
        "unit": "hk-u1",
        "level": "A1",
        "objective": "Master expressing gratitude in Cantonese and distinguish between 唔該 (m4 goi1 - for service/help/excuse me) and 多謝 (do1 ze6 - for gifts/money/hospitality).",
        "prerequisites": [
            "hk-u1-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u1-l1"
            ]
        },
        "presentation": {
            "explanation": "喺廣東話社交禮儀入面，表達「多謝」有非常清晰而地道嘅分工，千祈唔好用錯！\n\n1. 「唔該」同「多謝」嘅重要區別 (m4 goi1 vs do1 ze6):\n- **唔該 (m4 goi1)**：用於感謝人哋為你**付出勞力、提供服務或協助**；亦可用於「Excuse me（唔該借借/唔該借過）」或「Please（唔該畀杯水我）」。\n  - 例如：搭的士落車、餐廳侍應斟水、路人幫你開門。\n- **多謝 (do1 ze6)**：用於感謝人哋送畀你**實物禮物、金錢利益、請食飯或給予讚賞支持**。\n  - 例如：收生日禮物、收利是（紅包）、老闆請食大餐。\n\n2. 回應道謝 (Responding to Thanks):\n- **唔使客氣 (m4 sai2 haak3 hei3)**：You're welcome / No need to be polite。\n- **唔使唔該 (m4 sai2 m4 goi1)**：熟人之間常用，意思係「小事一樁，唔使咁客氣」。",
            "examples": [
                {
                    "target": "唔該借借，我想過一過對面馬路。",
                    "reading": "m4 goi1 ze3 ze3, ngo5 soeng2 gwo3 jat1 gwo3 deoi3 min6 maa5 lou6.",
                    "translation": "Excuse me, I'd like to cross to the other side of the road."
                },
                {
                    "target": "多謝你送咁靚嘅生日禮物畀我！",
                    "reading": "do1 ze6 nei5 sung3 gam3 leng3 ge3 saang1 jat6 lai5 mat6 bei2 ngo5!",
                    "translation": "Thank you very much for giving me such a beautiful birthday gift!"
                },
                {
                    "target": "侍應生：‘呢個係你嘅菠蘿油。’ 客人：‘唔該晒！’",
                    "reading": "si6 jing3 sang1: ‘ni1 go3 hai6 nei5 ge3 bo1 lo4 jau4.’ haak3 jan4: ‘m4 goi1 saai3!’",
                    "translation": "Waiter: 'Here is your pineapple bun.' Customer: 'Thank you so much!'"
                }
            ],
            "mnemonics": [
                "Gratitude Rule: 勞力服務用「唔該」(m4 goi1); 禮物金錢用「多謝」(do1 ze6)!"
            ],
            "culturalNotes": [
                "Adding «晒» (saai3 - completely) creates «唔該晒» or «多謝晒», expressing intensified gratitude in everyday colloquial Hong Kong speech."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺茶餐廳入面，當侍應為你送上熱奶茶嘅時候，最合適地道嘅道謝用語係：",
                    "options": [
                        "唔該 / 唔該晒 (m4 goi1 / m4 goi1 saai3 - Thank you for service)",
                        "恭喜發財",
                        "對唔住"
                    ],
                    "answerIndex": 0,
                    "explanation": "唔該 (m4 goi1) is used when thanking someone for providing a service or assistance."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "農曆新年嗰陣長輩派利是（紅包）或者朋友送生日禮物畀你，你應當講邊句道謝？",
                    "options": [
                        "多謝 / 多謝晒 (do1 ze6 / do1 ze6 saai3 - Thank you for gift/money)",
                        "唔好意思",
                        "借借"
                    ],
                    "answerIndex": 0,
                    "explanation": "多謝 (do1 ze6) is required when receiving material gifts, money (lai see), or substantial favors."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中「唔該」與「多謝」的使用場景區別，下列哪一項表述完全正確？",
                    "options": [
                        "「唔該」用於感謝服務、勞力協助或表達借光請問；「多謝」用於感謝他人贈送禮物、金錢或請客招待 (m4 goi1 for service/help; do1 ze6 for gifts/money/treats)",
                        "「唔該」只能用於罵人",
                        "「多謝」與「唔該」完全沒有任何區別可以隨意混用"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately captures the fundamental distinction between service gratitude (m4 goi1) and gift/money gratitude (do1 ze6)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'Thank you (for service/help)' in Cantonese (唔該):",
                    "acceptedAnswers": [
                        "唔該",
                        "m4goi1",
                        "m4 goi1",
                        "M4 goi1",
                        "M4goi1"
                    ],
                    "explanation": "唔該 (m4 goi1) means 'thank you (for help/service)' or 'please/excuse me'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u1-l3": {
        "id": "hk-u1-l3",
        "unit": "hk-u1",
        "level": "A1",
        "objective": "Master apologies, polite interruptions, and inquiries in Cantonese (唔好意思 m4 hou2 ji3 si1, 對唔住 deoi3 m4 zyu6, 冇相干 / 冇問題 mou5 man6 tai4).",
        "prerequisites": [
            "hk-u1-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u1-l2"
            ]
        },
        "presentation": {
            "explanation": "喺日常社交同搭車行街時，識得得體道歉同禮貌問路係廣東話必備技能！\n\n1. 「唔好意思」同「對唔住」嘅語氣輕重 (m4 hou2 ji3 si1 vs deoi3 m4 zyu6):\n- **唔好意思 (m4 hou2 ji3 si1)**：語氣較輕，相當於英文嘅「Excuse me / Pardon / Sorry」。用於：\n  - 不小心輕微碰到人。\n  - 打擾人哋問路、問時間（例如：「唔好意思，請問地鐵站點去呀？」）。\n  - 感到輕微不好意思或抱歉。\n- **對唔住 (deoi3 m4 zyu6)**：語氣較重，相當於正式道歉「I am deeply sorry / Apologies」。用於犯咗較大錯誤、造成具體損失或嚴重冒犯。\n\n2. 回應道歉 (Accepting Apologies):\n- **冇相干 (mou5 soeng1 gaan1)** / **冇問題 (mou5 man6 tai4)**：It doesn't matter / No problem。\n- **唔緊要 (m4 gan2 jiu3)**：Never mind / It's alright。",
            "examples": [
                {
                    "target": "唔好意思，請問去中環碼頭應該點樣行呀？",
                    "reading": "m4 hou2 ji3 si1, cing2 man6 heoi3 zung1 waan4 maa5 tau4 jing1 goi1 dim2 joeng2 haang4 aa3?",
                    "translation": "Excuse me, could you tell me how to walk to Central Pier?"
                },
                {
                    "target": "對唔住呀，我唔小心整爛咗你隻杯，我買返隻新嘅賠畀你啦！",
                    "reading": "deoi3 m4 zyu6 aa3, ngo5 m4 siu2 sam1 zing2 laan6 zo2 nei5 zek3 bui1, ngo5 maai5 faan1 zek3 san1 ge3 pui4 bei2 nei5 laa1!",
                    "translation": "I'm so sorry, I accidentally broke your cup, I'll buy a new one to compensate you!"
                },
                {
                    "target": "乘客A：‘唔好意思踩到你！’ 乘客B：‘唔緊要，冇事冇事。’",
                    "reading": "sing4 haak3 A: ‘m4 hou2 ji3 si1 caai2 dou2 nei5!’ sing4 haak3 B: ‘m4 gan2 jiu3, mou5 si6 mou5 si6.’",
                    "translation": "Passenger A: 'Excuse me for stepping on you!' Passenger B: 'It's alright, no problem at all.'"
                }
            ],
            "mnemonics": [
                "Apology Scale: 輕微問路踩腳用「唔好意思」(m4 hou2 ji3 si1); 嚴重犯錯賠罪用「對唔住」(deoi3 m4 zyu6)!"
            ],
            "culturalNotes": [
                "In bustling Hong Kong crowds and MTR cars, saying «唔好意思» (m4 hou2 ji3 si1) smoothly clears paths and initiates inquiries with maximum politeness."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺街上面想向路人問路或者向店員查詢價錢，開口第一句最禮貌客氣嘅用語係：",
                    "options": [
                        "喂！你過嚟！",
                        "快啲話我知！",
                        "唔好意思，請問…… (m4 hou2 ji3 si1, cing2 man6... - Excuse me, may I ask...)"
                    ],
                    "answerIndex": 2,
                    "explanation": "唔好意思，請問…… (m4 hou2 ji3 si1, cing2 man6...) is the gold standard polite inquiry opener."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "當人哋同你講「唔好意思」或者「對唔住」嗰陣，你想安慰對方表示「完全冇事、唔使介意」，應當回應：",
                    "options": [
                        "唔緊要 / 冇問題 (m4 gan2 jiu3 / mou5 man6 tai4 - It's alright / No problem)",
                        "你一定要賠錢",
                        "我好嬲你"
                    ],
                    "answerIndex": 0,
                    "explanation": "唔緊要 (m4 gan2 jiu3) or 冇問題 (mou5 man6 tai4) is the natural reply accepting apologies."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中「唔好意思」與「對唔住」的語用差異，下列哪一項表述完全正確？",
                    "options": [
                        "兩者完全一樣且只能用於正式法庭宣判",
                        "「對唔住」只能用來問路",
                        "「唔好意思」多用於禮貌問路、打擾借光或輕微磕碰；「對唔住」則用於造成實際過錯或嚴肅道歉 (m4 hou2 ji3 si1 for excuse me/mild apology; deoi3 m4 zyu6 for serious apology)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately articulates the pragmatic nuance between mild excuse me and serious apology."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi for 'Excuse me / Sorry' in Cantonese (唔好意思):",
                    "acceptedAnswers": [
                        "唔好意思",
                        "m4hou2ji3si1",
                        "m4 hou2 ji3 si1",
                        "M4 hou2 ji3 si1",
                        "M4hou2ji3si1"
                    ],
                    "explanation": "唔好意思 (m4 hou2 ji3 si1) means 'excuse me / sorry' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u1-l4": {
        "id": "hk-u1-l4",
        "unit": "hk-u1",
        "level": "A1",
        "objective": "Master farewell expressions, parting phrases, and social invitations in Cantonese (再見 zoi3 gin3, 拜拜 baai1 baai3, 聽日見 ting1 jat6 gin3, 得閒飲茶 dak1 haan4 jam2 caa4).",
        "prerequisites": [
            "hk-u1-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u1-l3"
            ]
        },
        "presentation": {
            "explanation": "同朋友或者同事告別嗰陣，廣東話有好多親切自然嘅表達方式！\n\n1. 告別用語譜系 (Farewell Spectrum):\n- **拜拜 (baai1 baai3)**：源自英文「Bye-bye」，香港最普遍、最自然嘅日常告別語。\n- **再見 (zoi3 gin3)**：較為正式、標準嘅道別語。\n- **聽日見 (ting1 jat6 gin3)**：See you tomorrow。\n- **一陣見 (jat1 zan6 gin3)**：See you in a bit / See you later。\n- **慢行 (maan6 haang4)**：送客時主人對客人講「Take care on your way / Walk slowly」。\n\n2. 嶺南經典社交客套 (The Famous Yum Cha Invitation):\n- **得閒飲茶 (dak1 haan4 jam2 caa4)**：字面意思係「有空一齊去飲茶」，係廣東人告別時最常用嘅友善客套話，相當於「Let's catch up sometime!」",
            "examples": [
                {
                    "target": "時間唔早喇，我走先喇，大家聽日見！",
                    "reading": "si4 gaan3 m4 zou2 laa3, ngo5 zau2 sin1 laa3, daai6 gaa1 ting1 jat6 gin3!",
                    "translation": "It's getting late, I'm heading off first, see you all tomorrow!"
                },
                {
                    "target": "好高興今日同你傾偈，得閒飲茶啦！",
                    "reading": "hou2 gou1 hing3 gam1 jat6 tung4 nei5 king1 gai2, dak1 haan4 jam2 caa4 laa1!",
                    "translation": "So glad to chat with you today, let's have yum cha when you're free!"
                },
                {
                    "target": "陳生慢行啊，睇住階梯，拜拜！",
                    "reading": "can4 saang1 maan6 haang4 aa3, tai2 zyu6 gaai1 tai1, baai1 baai3!",
                    "translation": "Take care Mr. Chan, watch your step, bye-bye!"
                }
            ],
            "mnemonics": [
                "Farewell Warmth: 拜拜(Bye-bye), 聽日見(See you tomorrow), 得閒飲茶(Catch up over tea)!"
            ],
            "culturalNotes": [
                "«得閒飲茶» (dak1 haan4 jam2 caa4) is iconic Cantonese culture. While often a polite social closing, it always signals genuine goodwill and open friendship."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東人同朋友道別時，最常講、用嚟表達保持聯絡友善問候嘅經典名句係：",
                    "options": [
                        "絕交啦",
                        "唔准走",
                        "得閒飲茶啦！ (dak1 haan4 jam2 caa4 laa1! - Let's get tea when free!)"
                    ],
                    "answerIndex": 2,
                    "explanation": "得閒飲茶 (dak1 haan4 jam2 caa4) is the classic Cantonese parting invitation expressing friendliness."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "收工或者放學嗰陣同身邊嘅同事同學講「聽日再見面」，最地道簡潔嘅講法係：",
                    "options": [
                        "聽日見 (ting1 jat6 gin3 - See you tomorrow)",
                        "永不再見",
                        "出年見"
                    ],
                    "answerIndex": 0,
                    "explanation": "聽日見 (ting1 jat6 gin3) literally means 'see you tomorrow'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話道別語「拜拜」、「聽日見」與「得閒飲茶」的文化含義，下列哪一項表述完全正確？",
                    "options": [
                        "廣東話嚴禁在告別時說話",
                        "「得閒飲茶」是表示立刻要絕交的意思",
                        "「拜拜」是日常最通用的道別詞，「聽日見」指明天見，而「得閒飲茶」則是富有嶺南人情味的熱情客套道別語 (baai1 baai3 is universal goodbye, ting1 jat6 gin3 is see you tomorrow, and dak1 haan4 jam2 caa4 is the iconic social catch-up phrase)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately captures the cultural and pragmatic essence of Cantonese farewells."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi phrase for 'Let's have tea when free' in Cantonese (得閒飲茶):",
                    "acceptedAnswers": [
                        "得閒飲茶",
                        "dak1haan4jam2caa4",
                        "dak1 haan4 jam2 caa4",
                        "Dak1 haan4 jam2 caa4",
                        "Dak1haan4jam2caa4"
                    ],
                    "explanation": "得閒飲茶 (dak1 haan4 jam2 caa4) means 'let's get tea when we're free'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u1-l5": {
        "id": "hk-u1-l5",
        "unit": "hk-u1",
        "level": "A1",
        "objective": "Integrate Jyutping tones, polite address, introducing oneself, and greeting dialogues into a complete real-world first meeting encounter.",
        "prerequisites": [
            "hk-u1-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u1-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢課綜合實戰篇，我哋將第一單元學到嘅所有問候、致謝、道歉同道別融會貫通，完成一段初次見面嘅地道廣東話對話！\n\n1. 初次見面常用自我介紹與禮儀 (First Introductions & Etiquette):\n- **幸會 (hang6 wui6)**：Pleasure to meet you / Nice to meet you（正式場合）。\n- **請多多指教 (cing2 do1 do1 zi2 gaau3)**：Please guide me / Looking forward to working together。\n- **我叫…… (ngo5 giu3...)** / **叫我阿David啦 (giu3 ngo5 aa3 David laa1)**：My name is... / Just call me Ah David。\n\n2. 第一單元實戰對話範例 (Unit 1 Master Dialogue):\n- **陳生**：‘早晨啊！你係新嚟嘅經理David？你好你好！’\n- **David**：‘陳生早晨！係啊，初次見面，幸會幸會！請多多指教！’\n- **陳生**：‘唔使客氣！一陣十點我哋開會，得閒中午一齊去茶樓飲茶啦！’\n- **David**：‘好啊，唔該晒陳生！陣間見！’",
            "examples": [
                {
                    "target": "黃小姐你好，初次見面，真係幸會！請多多指教！",
                    "reading": "wong4 siu2 ze2 nei5 hou2, co1 ci3 gin3 min6, zan1 hai6 hang6 wui6! cing2 do1 do1 zi2 gaau3!",
                    "translation": "Hello Miss Wong, meeting for the first time, it's truly a pleasure! Please give me your guidance!"
                },
                {
                    "target": "叫我阿明得喇，唔使咁客氣嘅！",
                    "reading": "giu3 ngo5 aa3 ming4 dak1 laa3, m4 sai2 gam3 haak3 hei3 ge3!",
                    "translation": "Just call me Ah Ming, no need to be so formal!"
                },
                {
                    "target": "今日好多謝大家嘅熱情招待，我哋下次再聚，拜拜！",
                    "reading": "gam1 jat6 hou2 do1 ze6 daai6 gaa1 ge3 jit6 cing4 ziu1 doi6, ngo5 dei6 haa6 ci3 zoi3 zeoi6, baai1 baai3!",
                    "translation": "Thank you all so much for your warm hospitality today, let's get together next time, bye-bye!"
                }
            ],
            "mnemonics": [
                "First Meeting Flow: 你好早晨 (Greeting) -> 幸會指教 (Pleased to meet you) -> 唔該多謝 (Gratitude) -> 拜拜慢行 (Farewell)!"
            ],
            "culturalNotes": [
                "Adding «阿» (aa3) before a given name (e.g. 阿David, 阿明, 阿May) is the most common, friendly, and affectionate way colleagues and friends address each other in Cantonese culture."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺商務或者正式社交場合初次同人見面握手，表達「好高興認識你、非常榮幸」嘅高雅詞彙係：",
                    "options": [
                        "無奈",
                        "幸會 (hang6 wui6 - Pleasure to meet you)",
                        "借過"
                    ],
                    "answerIndex": 1,
                    "explanation": "幸會 (hang6 wui6) expresses 'pleased / honored to meet you'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在廣東話中，同事或朋友之間稱呼對方名字時，最常見且顯得親切友善嘅前綴字係：",
                    "options": [
                        "阿 (aa3 - e.g. 阿David, 阿華)",
                        "死",
                        "老"
                    ],
                    "answerIndex": 0,
                    "explanation": "Prefixing with 阿 (aa3) is the natural friendly naming convention in Cantonese."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話初次見面自我介紹、社交禮節與全單元問候系統，下列哪一項總結完全正確？",
                    "options": [
                        "廣東話初次見面不能說話只能點頭",
                        "廣東話社交問候豐富得體，見面道「早晨/你好」，初識道「幸會/請多多指教」，感謝分「唔該（勞力）」與「多謝（禮物）」，告別親切道「拜拜/得閒飲茶」 (Rich greeting system: zou2 san4, hang6 wui6, m4 goi1 vs do1 ze6, baai1 baai3 / dak1 haan4 jam2 caa4)",
                        "廣東話中沒有任何表示感謝的詞彙"
                    ],
                    "answerIndex": 1,
                    "explanation": "Synthesizes the complete Unit 1 greeting, gratitude, apology, and etiquette system."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'Pleasure to meet you / Honored' in Cantonese (幸會):",
                    "acceptedAnswers": [
                        "幸會",
                        "hang6wui6",
                        "hang6 wui6",
                        "Hang6 wui6",
                        "Hang6wui6",
                        "幸会"
                    ],
                    "explanation": "幸會 (hang6 wui6) means 'pleasure to meet you / honored to make your acquaintance'."
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
        "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of 我你佢人稱代詞 (Pronouns & Basic Syntax).",
        "presentation": {
            "explanation": "喺呢一課（我你佢人稱代詞 (Pronouns & Basic Syntax) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋我你佢人稱代詞 (Pronouns & Basic Syntax)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (2.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (2.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (2.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 我你佢人稱代詞 (Pronouns & Basic Syntax)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「我你佢人稱代詞 (Pronouns & Basic Syntax)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (2.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (2.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (2.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「人稱代詞同基本句式 (Pronouns & Basic Sentences)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (2.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (2.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (2.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「我你佢人稱代詞 (Pronouns & Basic Syntax)」嘅日常商務與生活習慣（考核 2-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (2.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (2.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (2.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («我哋_2_1»):",
                    "acceptedAnswers": [
                        "我哋_2_1"
                    ],
                    "explanation": "The target keyword was: 【我哋_2_1】"
                }
            ]
        }
    },
    "hk-u2-l2": {
        "id": "hk-u2-l2",
        "subject": "cantonese",
        "unit": 2,
        "lessonNumber": 2,
        "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of 我你佢人稱代詞 (Pronouns & Basic Syntax).",
        "presentation": {
            "explanation": "喺呢一課（我你佢人稱代詞 (Pronouns & Basic Syntax) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋我你佢人稱代詞 (Pronouns & Basic Syntax)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (2.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (2.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (2.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 我你佢人稱代詞 (Pronouns & Basic Syntax)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「我你佢人稱代詞 (Pronouns & Basic Syntax)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (2.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (2.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (2.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「人稱代詞同基本句式 (Pronouns & Basic Sentences)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (2.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (2.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (2.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「我你佢人稱代詞 (Pronouns & Basic Syntax)」嘅日常商務與生活習慣（考核 2-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (2.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (2.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (2.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («我哋_2_2»):",
                    "acceptedAnswers": [
                        "我哋_2_2"
                    ],
                    "explanation": "The target keyword was: 【我哋_2_2】"
                }
            ]
        }
    },
    "hk-u2-l3": {
        "id": "hk-u2-l3",
        "subject": "cantonese",
        "unit": 2,
        "lessonNumber": 3,
        "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of 我你佢人稱代詞 (Pronouns & Basic Syntax).",
        "presentation": {
            "explanation": "喺呢一課（我你佢人稱代詞 (Pronouns & Basic Syntax) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋我你佢人稱代詞 (Pronouns & Basic Syntax)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (2.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (2.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (2.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 我你佢人稱代詞 (Pronouns & Basic Syntax)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「我你佢人稱代詞 (Pronouns & Basic Syntax)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (2.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (2.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (2.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「人稱代詞同基本句式 (Pronouns & Basic Sentences)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (2.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (2.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (2.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「我你佢人稱代詞 (Pronouns & Basic Syntax)」嘅日常商務與生活習慣（考核 2-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (2.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (2.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (2.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («我哋_2_3»):",
                    "acceptedAnswers": [
                        "我哋_2_3"
                    ],
                    "explanation": "The target keyword was: 【我哋_2_3】"
                }
            ]
        }
    },
    "hk-u2-l4": {
        "id": "hk-u2-l4",
        "subject": "cantonese",
        "unit": 2,
        "lessonNumber": 4,
        "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of 我你佢人稱代詞 (Pronouns & Basic Syntax).",
        "presentation": {
            "explanation": "喺呢一課（我你佢人稱代詞 (Pronouns & Basic Syntax) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋我你佢人稱代詞 (Pronouns & Basic Syntax)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (2.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (2.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (2.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 我你佢人稱代詞 (Pronouns & Basic Syntax)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「我你佢人稱代詞 (Pronouns & Basic Syntax)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (2.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (2.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (2.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「人稱代詞同基本句式 (Pronouns & Basic Sentences)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (2.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (2.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (2.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「我你佢人稱代詞 (Pronouns & Basic Syntax)」嘅日常商務與生活習慣（考核 2-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (2.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (2.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (2.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («我哋_2_4»):",
                    "acceptedAnswers": [
                        "我哋_2_4"
                    ],
                    "explanation": "The target keyword was: 【我哋_2_4】"
                }
            ]
        }
    },
    "hk-u2-l5": {
        "id": "hk-u2-l5",
        "subject": "cantonese",
        "unit": 2,
        "lessonNumber": 5,
        "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of 我你佢人稱代詞 (Pronouns & Basic Syntax).",
        "presentation": {
            "explanation": "喺呢一課（我你佢人稱代詞 (Pronouns & Basic Syntax) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋我你佢人稱代詞 (Pronouns & Basic Syntax)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (2.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (2.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (2.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 我你佢人稱代詞 (Pronouns & Basic Syntax)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「我你佢人稱代詞 (Pronouns & Basic Syntax)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (2.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (2.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (2.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「人稱代詞同基本句式 (Pronouns & Basic Sentences)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (2.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (2.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (2.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「我你佢人稱代詞 (Pronouns & Basic Syntax)」嘅日常商務與生活習慣（考核 2-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (2.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (2.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (2.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («我哋_2_5»):",
                    "acceptedAnswers": [
                        "我哋_2_5"
                    ],
                    "explanation": "The target keyword was: 【我哋_2_5】"
                }
            ]
        }
    },
    "hk-u3-l1": {
        "id": "hk-u3-l1",
        "subject": "cantonese",
        "unit": 3,
        "lessonNumber": 1,
        "title": "數字、時間同日期 (Numbers, Time & Date) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of 時間同日子表達 (Time, Numbers & Days).",
        "presentation": {
            "explanation": "喺呢一課（時間同日子表達 (Time, Numbers & Days) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋時間同日子表達 (Time, Numbers & Days)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (3.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (3.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (3.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 時間同日子表達 (Time, Numbers & Days)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「時間同日子表達 (Time, Numbers & Days)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (3.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (3.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (3.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「數字、時間同日期 (Numbers, Time & Date)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (3.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (3.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (3.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「時間同日子表達 (Time, Numbers & Days)」嘅日常商務與生活習慣（考核 3-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (3.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (3.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (3.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («今日_3_1»):",
                    "acceptedAnswers": [
                        "今日_3_1"
                    ],
                    "explanation": "The target keyword was: 【今日_3_1】"
                }
            ]
        }
    },
    "hk-u3-l2": {
        "id": "hk-u3-l2",
        "subject": "cantonese",
        "unit": 3,
        "lessonNumber": 2,
        "title": "數字、時間同日期 (Numbers, Time & Date) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of 時間同日子表達 (Time, Numbers & Days).",
        "presentation": {
            "explanation": "喺呢一課（時間同日子表達 (Time, Numbers & Days) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋時間同日子表達 (Time, Numbers & Days)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (3.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (3.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (3.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 時間同日子表達 (Time, Numbers & Days)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「時間同日子表達 (Time, Numbers & Days)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (3.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (3.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (3.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「數字、時間同日期 (Numbers, Time & Date)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (3.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (3.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (3.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「時間同日子表達 (Time, Numbers & Days)」嘅日常商務與生活習慣（考核 3-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (3.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (3.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (3.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («今日_3_2»):",
                    "acceptedAnswers": [
                        "今日_3_2"
                    ],
                    "explanation": "The target keyword was: 【今日_3_2】"
                }
            ]
        }
    },
    "hk-u3-l3": {
        "id": "hk-u3-l3",
        "subject": "cantonese",
        "unit": 3,
        "lessonNumber": 3,
        "title": "數字、時間同日期 (Numbers, Time & Date) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of 時間同日子表達 (Time, Numbers & Days).",
        "presentation": {
            "explanation": "喺呢一課（時間同日子表達 (Time, Numbers & Days) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋時間同日子表達 (Time, Numbers & Days)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (3.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (3.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (3.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 時間同日子表達 (Time, Numbers & Days)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「時間同日子表達 (Time, Numbers & Days)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (3.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (3.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (3.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「數字、時間同日期 (Numbers, Time & Date)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (3.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (3.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (3.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「時間同日子表達 (Time, Numbers & Days)」嘅日常商務與生活習慣（考核 3-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (3.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (3.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (3.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («今日_3_3»):",
                    "acceptedAnswers": [
                        "今日_3_3"
                    ],
                    "explanation": "The target keyword was: 【今日_3_3】"
                }
            ]
        }
    },
    "hk-u3-l4": {
        "id": "hk-u3-l4",
        "subject": "cantonese",
        "unit": 3,
        "lessonNumber": 4,
        "title": "數字、時間同日期 (Numbers, Time & Date) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of 時間同日子表達 (Time, Numbers & Days).",
        "presentation": {
            "explanation": "喺呢一課（時間同日子表達 (Time, Numbers & Days) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋時間同日子表達 (Time, Numbers & Days)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (3.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (3.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (3.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 時間同日子表達 (Time, Numbers & Days)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「時間同日子表達 (Time, Numbers & Days)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (3.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (3.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (3.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「數字、時間同日期 (Numbers, Time & Date)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (3.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (3.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (3.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「時間同日子表達 (Time, Numbers & Days)」嘅日常商務與生活習慣（考核 3-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (3.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (3.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (3.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («今日_3_4»):",
                    "acceptedAnswers": [
                        "今日_3_4"
                    ],
                    "explanation": "The target keyword was: 【今日_3_4】"
                }
            ]
        }
    },
    "hk-u3-l5": {
        "id": "hk-u3-l5",
        "subject": "cantonese",
        "unit": 3,
        "lessonNumber": 5,
        "title": "數字、時間同日期 (Numbers, Time & Date) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of 時間同日子表達 (Time, Numbers & Days).",
        "presentation": {
            "explanation": "喺呢一課（時間同日子表達 (Time, Numbers & Days) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋時間同日子表達 (Time, Numbers & Days)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (3.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (3.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (3.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 時間同日子表達 (Time, Numbers & Days)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「時間同日子表達 (Time, Numbers & Days)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (3.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (3.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (3.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「數字、時間同日期 (Numbers, Time & Date)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (3.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (3.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (3.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「時間同日子表達 (Time, Numbers & Days)」嘅日常商務與生活習慣（考核 3-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (3.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (3.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (3.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («今日_3_5»):",
                    "acceptedAnswers": [
                        "今日_3_5"
                    ],
                    "explanation": "The target keyword was: 【今日_3_5】"
                }
            ]
        }
    },
    "hk-u4-l1": {
        "id": "hk-u4-l1",
        "subject": "cantonese",
        "unit": 4,
        "lessonNumber": 1,
        "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of 廣東話量詞系統 (Classifiers: 個/隻/條).",
        "presentation": {
            "explanation": "喺呢一課（廣東話量詞系統 (Classifiers: 個/隻/條) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋廣東話量詞系統 (Classifiers: 個/隻/條)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (4.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (4.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (4.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 廣東話量詞系統 (Classifiers: 個/隻/條)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「廣東話量詞系統 (Classifiers: 個/隻/條)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (4.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (4.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (4.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「量詞同名詞修飾 (Classifiers & Noun Modification)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (4.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (4.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (4.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「廣東話量詞系統 (Classifiers: 個/隻/條)」嘅日常商務與生活習慣（考核 4-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (4.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (4.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (4.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («一個_4_1»):",
                    "acceptedAnswers": [
                        "一個_4_1"
                    ],
                    "explanation": "The target keyword was: 【一個_4_1】"
                }
            ]
        }
    },
    "hk-u4-l2": {
        "id": "hk-u4-l2",
        "subject": "cantonese",
        "unit": 4,
        "lessonNumber": 2,
        "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of 廣東話量詞系統 (Classifiers: 個/隻/條).",
        "presentation": {
            "explanation": "喺呢一課（廣東話量詞系統 (Classifiers: 個/隻/條) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋廣東話量詞系統 (Classifiers: 個/隻/條)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (4.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (4.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (4.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 廣東話量詞系統 (Classifiers: 個/隻/條)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「廣東話量詞系統 (Classifiers: 個/隻/條)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (4.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (4.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (4.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「量詞同名詞修飾 (Classifiers & Noun Modification)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (4.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (4.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (4.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「廣東話量詞系統 (Classifiers: 個/隻/條)」嘅日常商務與生活習慣（考核 4-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (4.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (4.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (4.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («一個_4_2»):",
                    "acceptedAnswers": [
                        "一個_4_2"
                    ],
                    "explanation": "The target keyword was: 【一個_4_2】"
                }
            ]
        }
    },
    "hk-u4-l3": {
        "id": "hk-u4-l3",
        "subject": "cantonese",
        "unit": 4,
        "lessonNumber": 3,
        "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of 廣東話量詞系統 (Classifiers: 個/隻/條).",
        "presentation": {
            "explanation": "喺呢一課（廣東話量詞系統 (Classifiers: 個/隻/條) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋廣東話量詞系統 (Classifiers: 個/隻/條)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (4.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (4.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (4.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 廣東話量詞系統 (Classifiers: 個/隻/條)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「廣東話量詞系統 (Classifiers: 個/隻/條)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (4.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (4.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (4.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「量詞同名詞修飾 (Classifiers & Noun Modification)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (4.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (4.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (4.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「廣東話量詞系統 (Classifiers: 個/隻/條)」嘅日常商務與生活習慣（考核 4-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (4.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (4.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (4.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («一個_4_3»):",
                    "acceptedAnswers": [
                        "一個_4_3"
                    ],
                    "explanation": "The target keyword was: 【一個_4_3】"
                }
            ]
        }
    },
    "hk-u4-l4": {
        "id": "hk-u4-l4",
        "subject": "cantonese",
        "unit": 4,
        "lessonNumber": 4,
        "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of 廣東話量詞系統 (Classifiers: 個/隻/條).",
        "presentation": {
            "explanation": "喺呢一課（廣東話量詞系統 (Classifiers: 個/隻/條) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋廣東話量詞系統 (Classifiers: 個/隻/條)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (4.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (4.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (4.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 廣東話量詞系統 (Classifiers: 個/隻/條)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「廣東話量詞系統 (Classifiers: 個/隻/條)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (4.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (4.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (4.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「量詞同名詞修飾 (Classifiers & Noun Modification)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (4.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (4.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (4.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「廣東話量詞系統 (Classifiers: 個/隻/條)」嘅日常商務與生活習慣（考核 4-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (4.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (4.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (4.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («一個_4_4»):",
                    "acceptedAnswers": [
                        "一個_4_4"
                    ],
                    "explanation": "The target keyword was: 【一個_4_4】"
                }
            ]
        }
    },
    "hk-u4-l5": {
        "id": "hk-u4-l5",
        "subject": "cantonese",
        "unit": 4,
        "lessonNumber": 5,
        "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of 廣東話量詞系統 (Classifiers: 個/隻/條).",
        "presentation": {
            "explanation": "喺呢一課（廣東話量詞系統 (Classifiers: 個/隻/條) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋廣東話量詞系統 (Classifiers: 個/隻/條)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (4.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (4.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (4.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 廣東話量詞系統 (Classifiers: 個/隻/條)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「廣東話量詞系統 (Classifiers: 個/隻/條)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (4.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (4.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (4.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「量詞同名詞修飾 (Classifiers & Noun Modification)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (4.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (4.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (4.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「廣東話量詞系統 (Classifiers: 個/隻/條)」嘅日常商務與生活習慣（考核 4-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (4.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (4.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (4.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («一個_4_5»):",
                    "acceptedAnswers": [
                        "一個_4_5"
                    ],
                    "explanation": "The target keyword was: 【一個_4_5】"
                }
            ]
        }
    },
    "hk-u5-l1": {
        "id": "hk-u5-l1",
        "subject": "cantonese",
        "unit": 5,
        "lessonNumber": 1,
        "title": "日常動詞同現在進行式 (Daily Verbs & Continuous 緊) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of 進行態動態助詞緊 (Continuous Aspect 緊).",
        "presentation": {
            "explanation": "喺呢一課（進行態動態助詞緊 (Continuous Aspect 緊) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋進行態動態助詞緊 (Continuous Aspect 緊)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (5.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (5.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (5.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 進行態動態助詞緊 (Continuous Aspect 緊)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「進行態動態助詞緊 (Continuous Aspect 緊)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (5.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (5.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (5.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「日常動詞同現在進行式 (Daily Verbs & Continuous 緊)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (5.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (5.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (5.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「進行態動態助詞緊 (Continuous Aspect 緊)」嘅日常商務與生活習慣（考核 5-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (5.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (5.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (5.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («食緊_5_1»):",
                    "acceptedAnswers": [
                        "食緊_5_1"
                    ],
                    "explanation": "The target keyword was: 【食緊_5_1】"
                }
            ]
        }
    },
    "hk-u5-l2": {
        "id": "hk-u5-l2",
        "subject": "cantonese",
        "unit": 5,
        "lessonNumber": 2,
        "title": "日常動詞同現在進行式 (Daily Verbs & Continuous 緊) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of 進行態動態助詞緊 (Continuous Aspect 緊).",
        "presentation": {
            "explanation": "喺呢一課（進行態動態助詞緊 (Continuous Aspect 緊) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋進行態動態助詞緊 (Continuous Aspect 緊)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (5.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (5.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (5.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 進行態動態助詞緊 (Continuous Aspect 緊)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「進行態動態助詞緊 (Continuous Aspect 緊)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (5.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (5.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (5.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「日常動詞同現在進行式 (Daily Verbs & Continuous 緊)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (5.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (5.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (5.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「進行態動態助詞緊 (Continuous Aspect 緊)」嘅日常商務與生活習慣（考核 5-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (5.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (5.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (5.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («食緊_5_2»):",
                    "acceptedAnswers": [
                        "食緊_5_2"
                    ],
                    "explanation": "The target keyword was: 【食緊_5_2】"
                }
            ]
        }
    },
    "hk-u5-l3": {
        "id": "hk-u5-l3",
        "subject": "cantonese",
        "unit": 5,
        "lessonNumber": 3,
        "title": "日常動詞同現在進行式 (Daily Verbs & Continuous 緊) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of 進行態動態助詞緊 (Continuous Aspect 緊).",
        "presentation": {
            "explanation": "喺呢一課（進行態動態助詞緊 (Continuous Aspect 緊) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋進行態動態助詞緊 (Continuous Aspect 緊)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (5.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (5.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (5.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 進行態動態助詞緊 (Continuous Aspect 緊)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「進行態動態助詞緊 (Continuous Aspect 緊)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (5.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (5.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (5.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「日常動詞同現在進行式 (Daily Verbs & Continuous 緊)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (5.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (5.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (5.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「進行態動態助詞緊 (Continuous Aspect 緊)」嘅日常商務與生活習慣（考核 5-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (5.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (5.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (5.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («食緊_5_3»):",
                    "acceptedAnswers": [
                        "食緊_5_3"
                    ],
                    "explanation": "The target keyword was: 【食緊_5_3】"
                }
            ]
        }
    },
    "hk-u5-l4": {
        "id": "hk-u5-l4",
        "subject": "cantonese",
        "unit": 5,
        "lessonNumber": 4,
        "title": "日常動詞同現在進行式 (Daily Verbs & Continuous 緊) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of 進行態動態助詞緊 (Continuous Aspect 緊).",
        "presentation": {
            "explanation": "喺呢一課（進行態動態助詞緊 (Continuous Aspect 緊) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋進行態動態助詞緊 (Continuous Aspect 緊)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (5.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (5.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (5.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 進行態動態助詞緊 (Continuous Aspect 緊)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「進行態動態助詞緊 (Continuous Aspect 緊)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (5.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (5.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (5.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「日常動詞同現在進行式 (Daily Verbs & Continuous 緊)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (5.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (5.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (5.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「進行態動態助詞緊 (Continuous Aspect 緊)」嘅日常商務與生活習慣（考核 5-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (5.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (5.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (5.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («食緊_5_4»):",
                    "acceptedAnswers": [
                        "食緊_5_4"
                    ],
                    "explanation": "The target keyword was: 【食緊_5_4】"
                }
            ]
        }
    },
    "hk-u5-l5": {
        "id": "hk-u5-l5",
        "subject": "cantonese",
        "unit": 5,
        "lessonNumber": 5,
        "title": "日常動詞同現在進行式 (Daily Verbs & Continuous 緊) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of 進行態動態助詞緊 (Continuous Aspect 緊).",
        "presentation": {
            "explanation": "喺呢一課（進行態動態助詞緊 (Continuous Aspect 緊) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋進行態動態助詞緊 (Continuous Aspect 緊)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (5.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (5.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (5.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 進行態動態助詞緊 (Continuous Aspect 緊)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「進行態動態助詞緊 (Continuous Aspect 緊)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (5.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (5.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (5.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「日常動詞同現在進行式 (Daily Verbs & Continuous 緊)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (5.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (5.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (5.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「進行態動態助詞緊 (Continuous Aspect 緊)」嘅日常商務與生活習慣（考核 5-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (5.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (5.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (5.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («食緊_5_5»):",
                    "acceptedAnswers": [
                        "食緊_5_5"
                    ],
                    "explanation": "The target keyword was: 【食緊_5_5】"
                }
            ]
        }
    },
    "hk-u6-l1": {
        "id": "hk-u6-l1",
        "subject": "cantonese",
        "unit": 6,
        "lessonNumber": 1,
        "title": "完成體態：咗同埋完 (Perfective Aspect 咗 & 完) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of 完成態咗同完 (Perfective 咗/完).",
        "presentation": {
            "explanation": "喺呢一課（完成態咗同完 (Perfective 咗/完) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋完成態咗同完 (Perfective 咗/完)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (6.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (6.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (6.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 完成態咗同完 (Perfective 咗/完)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「完成態咗同完 (Perfective 咗/完)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (6.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (6.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (6.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「完成體態：咗同埋完 (Perfective Aspect 咗 & 完)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (6.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (6.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (6.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「完成態咗同完 (Perfective 咗/完)」嘅日常商務與生活習慣（考核 6-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (6.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (6.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (6.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («食咗_6_1»):",
                    "acceptedAnswers": [
                        "食咗_6_1"
                    ],
                    "explanation": "The target keyword was: 【食咗_6_1】"
                }
            ]
        }
    },
    "hk-u6-l2": {
        "id": "hk-u6-l2",
        "subject": "cantonese",
        "unit": 6,
        "lessonNumber": 2,
        "title": "完成體態：咗同埋完 (Perfective Aspect 咗 & 完) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of 完成態咗同完 (Perfective 咗/完).",
        "presentation": {
            "explanation": "喺呢一課（完成態咗同完 (Perfective 咗/完) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋完成態咗同完 (Perfective 咗/完)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (6.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (6.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (6.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 完成態咗同完 (Perfective 咗/完)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「完成態咗同完 (Perfective 咗/完)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (6.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (6.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (6.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「完成體態：咗同埋完 (Perfective Aspect 咗 & 完)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (6.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (6.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (6.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「完成態咗同完 (Perfective 咗/完)」嘅日常商務與生活習慣（考核 6-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (6.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (6.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (6.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («食咗_6_2»):",
                    "acceptedAnswers": [
                        "食咗_6_2"
                    ],
                    "explanation": "The target keyword was: 【食咗_6_2】"
                }
            ]
        }
    },
    "hk-u6-l3": {
        "id": "hk-u6-l3",
        "subject": "cantonese",
        "unit": 6,
        "lessonNumber": 3,
        "title": "完成體態：咗同埋完 (Perfective Aspect 咗 & 完) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of 完成態咗同完 (Perfective 咗/完).",
        "presentation": {
            "explanation": "喺呢一課（完成態咗同完 (Perfective 咗/完) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋完成態咗同完 (Perfective 咗/完)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (6.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (6.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (6.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 完成態咗同完 (Perfective 咗/完)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「完成態咗同完 (Perfective 咗/完)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (6.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (6.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (6.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「完成體態：咗同埋完 (Perfective Aspect 咗 & 完)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (6.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (6.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (6.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「完成態咗同完 (Perfective 咗/完)」嘅日常商務與生活習慣（考核 6-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (6.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (6.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (6.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («食咗_6_3»):",
                    "acceptedAnswers": [
                        "食咗_6_3"
                    ],
                    "explanation": "The target keyword was: 【食咗_6_3】"
                }
            ]
        }
    },
    "hk-u6-l4": {
        "id": "hk-u6-l4",
        "subject": "cantonese",
        "unit": 6,
        "lessonNumber": 4,
        "title": "完成體態：咗同埋完 (Perfective Aspect 咗 & 完) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of 完成態咗同完 (Perfective 咗/完).",
        "presentation": {
            "explanation": "喺呢一課（完成態咗同完 (Perfective 咗/完) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋完成態咗同完 (Perfective 咗/完)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (6.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (6.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (6.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 完成態咗同完 (Perfective 咗/完)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「完成態咗同完 (Perfective 咗/完)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (6.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (6.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (6.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「完成體態：咗同埋完 (Perfective Aspect 咗 & 完)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (6.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (6.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (6.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「完成態咗同完 (Perfective 咗/完)」嘅日常商務與生活習慣（考核 6-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (6.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (6.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (6.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («食咗_6_4»):",
                    "acceptedAnswers": [
                        "食咗_6_4"
                    ],
                    "explanation": "The target keyword was: 【食咗_6_4】"
                }
            ]
        }
    },
    "hk-u6-l5": {
        "id": "hk-u6-l5",
        "subject": "cantonese",
        "unit": 6,
        "lessonNumber": 5,
        "title": "完成體態：咗同埋完 (Perfective Aspect 咗 & 完) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of 完成態咗同完 (Perfective 咗/完).",
        "presentation": {
            "explanation": "喺呢一課（完成態咗同完 (Perfective 咗/完) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋完成態咗同完 (Perfective 咗/完)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (6.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (6.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (6.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 完成態咗同完 (Perfective 咗/完)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「完成態咗同完 (Perfective 咗/完)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (6.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (6.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (6.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「完成體態：咗同埋完 (Perfective Aspect 咗 & 完)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (6.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (6.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (6.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「完成態咗同完 (Perfective 咗/完)」嘅日常商務與生活習慣（考核 6-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (6.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (6.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (6.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («食咗_6_5»):",
                    "acceptedAnswers": [
                        "食咗_6_5"
                    ],
                    "explanation": "The target keyword was: 【食咗_6_5】"
                }
            ]
        }
    },
    "hk-u7-l1": {
        "id": "hk-u7-l1",
        "subject": "cantonese",
        "unit": 7,
        "lessonNumber": 1,
        "title": "經歷體態：過 (Experiential Aspect 過) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of 經歷態過嘅用法 (Experiential Aspect 過).",
        "presentation": {
            "explanation": "喺呢一課（經歷態過嘅用法 (Experiential Aspect 過) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋經歷態過嘅用法 (Experiential Aspect 過)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (7.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (7.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (7.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 經歷態過嘅用法 (Experiential Aspect 過)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「經歷態過嘅用法 (Experiential Aspect 過)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (7.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (7.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (7.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「經歷體態：過 (Experiential Aspect 過)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (7.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (7.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (7.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「經歷態過嘅用法 (Experiential Aspect 過)」嘅日常商務與生活習慣（考核 7-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (7.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (7.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (7.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («去過_7_1»):",
                    "acceptedAnswers": [
                        "去過_7_1"
                    ],
                    "explanation": "The target keyword was: 【去過_7_1】"
                }
            ]
        }
    },
    "hk-u7-l2": {
        "id": "hk-u7-l2",
        "subject": "cantonese",
        "unit": 7,
        "lessonNumber": 2,
        "title": "經歷體態：過 (Experiential Aspect 過) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of 經歷態過嘅用法 (Experiential Aspect 過).",
        "presentation": {
            "explanation": "喺呢一課（經歷態過嘅用法 (Experiential Aspect 過) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋經歷態過嘅用法 (Experiential Aspect 過)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (7.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (7.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (7.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 經歷態過嘅用法 (Experiential Aspect 過)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「經歷態過嘅用法 (Experiential Aspect 過)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (7.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (7.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (7.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「經歷體態：過 (Experiential Aspect 過)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (7.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (7.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (7.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「經歷態過嘅用法 (Experiential Aspect 過)」嘅日常商務與生活習慣（考核 7-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (7.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (7.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (7.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («去過_7_2»):",
                    "acceptedAnswers": [
                        "去過_7_2"
                    ],
                    "explanation": "The target keyword was: 【去過_7_2】"
                }
            ]
        }
    },
    "hk-u7-l3": {
        "id": "hk-u7-l3",
        "subject": "cantonese",
        "unit": 7,
        "lessonNumber": 3,
        "title": "經歷體態：過 (Experiential Aspect 過) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of 經歷態過嘅用法 (Experiential Aspect 過).",
        "presentation": {
            "explanation": "喺呢一課（經歷態過嘅用法 (Experiential Aspect 過) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋經歷態過嘅用法 (Experiential Aspect 過)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (7.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (7.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (7.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 經歷態過嘅用法 (Experiential Aspect 過)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「經歷態過嘅用法 (Experiential Aspect 過)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (7.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (7.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (7.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「經歷體態：過 (Experiential Aspect 過)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (7.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (7.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (7.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「經歷態過嘅用法 (Experiential Aspect 過)」嘅日常商務與生活習慣（考核 7-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (7.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (7.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (7.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («去過_7_3»):",
                    "acceptedAnswers": [
                        "去過_7_3"
                    ],
                    "explanation": "The target keyword was: 【去過_7_3】"
                }
            ]
        }
    },
    "hk-u7-l4": {
        "id": "hk-u7-l4",
        "subject": "cantonese",
        "unit": 7,
        "lessonNumber": 4,
        "title": "經歷體態：過 (Experiential Aspect 過) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of 經歷態過嘅用法 (Experiential Aspect 過).",
        "presentation": {
            "explanation": "喺呢一課（經歷態過嘅用法 (Experiential Aspect 過) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋經歷態過嘅用法 (Experiential Aspect 過)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (7.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (7.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (7.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 經歷態過嘅用法 (Experiential Aspect 過)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「經歷態過嘅用法 (Experiential Aspect 過)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (7.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (7.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (7.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「經歷體態：過 (Experiential Aspect 過)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (7.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (7.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (7.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「經歷態過嘅用法 (Experiential Aspect 過)」嘅日常商務與生活習慣（考核 7-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (7.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (7.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (7.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («去過_7_4»):",
                    "acceptedAnswers": [
                        "去過_7_4"
                    ],
                    "explanation": "The target keyword was: 【去過_7_4】"
                }
            ]
        }
    },
    "hk-u7-l5": {
        "id": "hk-u7-l5",
        "subject": "cantonese",
        "unit": 7,
        "lessonNumber": 5,
        "title": "經歷體態：過 (Experiential Aspect 過) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of 經歷態過嘅用法 (Experiential Aspect 過).",
        "presentation": {
            "explanation": "喺呢一課（經歷態過嘅用法 (Experiential Aspect 過) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋經歷態過嘅用法 (Experiential Aspect 過)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (7.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (7.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (7.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 經歷態過嘅用法 (Experiential Aspect 過)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「經歷態過嘅用法 (Experiential Aspect 過)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (7.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (7.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (7.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「經歷體態：過 (Experiential Aspect 過)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (7.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (7.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (7.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「經歷態過嘅用法 (Experiential Aspect 過)」嘅日常商務與生活習慣（考核 7-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (7.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (7.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (7.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («去過_7_5»):",
                    "acceptedAnswers": [
                        "去過_7_5"
                    ],
                    "explanation": "The target keyword was: 【去過_7_5】"
                }
            ]
        }
    },
    "hk-u8-l1": {
        "id": "hk-u8-l1",
        "subject": "cantonese",
        "unit": 8,
        "lessonNumber": 1,
        "title": "否定詞：唔、冇、未 (Negation Patterns) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of 否定詞唔冇未辨析 (Negation: 唔/冇/未).",
        "presentation": {
            "explanation": "喺呢一課（否定詞唔冇未辨析 (Negation: 唔/冇/未) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋否定詞唔冇未辨析 (Negation: 唔/冇/未)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (8.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (8.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (8.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 否定詞唔冇未辨析 (Negation: 唔/冇/未)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「否定詞唔冇未辨析 (Negation: 唔/冇/未)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (8.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (8.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (8.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「否定詞：唔、冇、未 (Negation Patterns)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (8.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (8.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (8.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「否定詞唔冇未辨析 (Negation: 唔/冇/未)」嘅日常商務與生活習慣（考核 8-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (8.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (8.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (8.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («唔係_8_1»):",
                    "acceptedAnswers": [
                        "唔係_8_1"
                    ],
                    "explanation": "The target keyword was: 【唔係_8_1】"
                }
            ]
        }
    },
    "hk-u8-l2": {
        "id": "hk-u8-l2",
        "subject": "cantonese",
        "unit": 8,
        "lessonNumber": 2,
        "title": "否定詞：唔、冇、未 (Negation Patterns) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of 否定詞唔冇未辨析 (Negation: 唔/冇/未).",
        "presentation": {
            "explanation": "喺呢一課（否定詞唔冇未辨析 (Negation: 唔/冇/未) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋否定詞唔冇未辨析 (Negation: 唔/冇/未)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (8.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (8.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (8.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 否定詞唔冇未辨析 (Negation: 唔/冇/未)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「否定詞唔冇未辨析 (Negation: 唔/冇/未)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (8.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (8.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (8.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「否定詞：唔、冇、未 (Negation Patterns)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (8.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (8.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (8.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「否定詞唔冇未辨析 (Negation: 唔/冇/未)」嘅日常商務與生活習慣（考核 8-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (8.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (8.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (8.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («唔係_8_2»):",
                    "acceptedAnswers": [
                        "唔係_8_2"
                    ],
                    "explanation": "The target keyword was: 【唔係_8_2】"
                }
            ]
        }
    },
    "hk-u8-l3": {
        "id": "hk-u8-l3",
        "subject": "cantonese",
        "unit": 8,
        "lessonNumber": 3,
        "title": "否定詞：唔、冇、未 (Negation Patterns) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of 否定詞唔冇未辨析 (Negation: 唔/冇/未).",
        "presentation": {
            "explanation": "喺呢一課（否定詞唔冇未辨析 (Negation: 唔/冇/未) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋否定詞唔冇未辨析 (Negation: 唔/冇/未)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (8.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (8.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (8.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 否定詞唔冇未辨析 (Negation: 唔/冇/未)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「否定詞唔冇未辨析 (Negation: 唔/冇/未)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (8.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (8.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (8.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「否定詞：唔、冇、未 (Negation Patterns)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (8.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (8.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (8.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「否定詞唔冇未辨析 (Negation: 唔/冇/未)」嘅日常商務與生活習慣（考核 8-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (8.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (8.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (8.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («唔係_8_3»):",
                    "acceptedAnswers": [
                        "唔係_8_3"
                    ],
                    "explanation": "The target keyword was: 【唔係_8_3】"
                }
            ]
        }
    },
    "hk-u8-l4": {
        "id": "hk-u8-l4",
        "subject": "cantonese",
        "unit": 8,
        "lessonNumber": 4,
        "title": "否定詞：唔、冇、未 (Negation Patterns) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of 否定詞唔冇未辨析 (Negation: 唔/冇/未).",
        "presentation": {
            "explanation": "喺呢一課（否定詞唔冇未辨析 (Negation: 唔/冇/未) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋否定詞唔冇未辨析 (Negation: 唔/冇/未)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (8.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (8.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (8.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 否定詞唔冇未辨析 (Negation: 唔/冇/未)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「否定詞唔冇未辨析 (Negation: 唔/冇/未)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (8.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (8.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (8.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「否定詞：唔、冇、未 (Negation Patterns)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (8.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (8.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (8.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「否定詞唔冇未辨析 (Negation: 唔/冇/未)」嘅日常商務與生活習慣（考核 8-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (8.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (8.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (8.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («唔係_8_4»):",
                    "acceptedAnswers": [
                        "唔係_8_4"
                    ],
                    "explanation": "The target keyword was: 【唔係_8_4】"
                }
            ]
        }
    },
    "hk-u8-l5": {
        "id": "hk-u8-l5",
        "subject": "cantonese",
        "unit": 8,
        "lessonNumber": 5,
        "title": "否定詞：唔、冇、未 (Negation Patterns) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of 否定詞唔冇未辨析 (Negation: 唔/冇/未).",
        "presentation": {
            "explanation": "喺呢一課（否定詞唔冇未辨析 (Negation: 唔/冇/未) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋否定詞唔冇未辨析 (Negation: 唔/冇/未)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (8.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (8.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (8.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 否定詞唔冇未辨析 (Negation: 唔/冇/未)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「否定詞唔冇未辨析 (Negation: 唔/冇/未)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (8.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (8.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (8.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「否定詞：唔、冇、未 (Negation Patterns)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (8.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (8.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (8.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「否定詞唔冇未辨析 (Negation: 唔/冇/未)」嘅日常商務與生活習慣（考核 8-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (8.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (8.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (8.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («唔係_8_5»):",
                    "acceptedAnswers": [
                        "唔係_8_5"
                    ],
                    "explanation": "The target keyword was: 【唔係_8_5】"
                }
            ]
        }
    },
    "hk-u9-l1": {
        "id": "hk-u9-l1",
        "subject": "cantonese",
        "unit": 9,
        "lessonNumber": 1,
        "title": "飲茶同廣東飲食文化 (Yum Cha & Dining) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of 茶樓點心同飲茶文化 (Yum Cha & Dim Sum).",
        "presentation": {
            "explanation": "喺呢一課（茶樓點心同飲茶文化 (Yum Cha & Dim Sum) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋茶樓點心同飲茶文化 (Yum Cha & Dim Sum)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (9.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (9.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (9.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 茶樓點心同飲茶文化 (Yum Cha & Dim Sum)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「茶樓點心同飲茶文化 (Yum Cha & Dim Sum)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (9.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (9.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (9.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「飲茶同廣東飲食文化 (Yum Cha & Dining)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (9.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (9.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (9.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「茶樓點心同飲茶文化 (Yum Cha & Dim Sum)」嘅日常商務與生活習慣（考核 9-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (9.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (9.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (9.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («點心_9_1»):",
                    "acceptedAnswers": [
                        "點心_9_1"
                    ],
                    "explanation": "The target keyword was: 【點心_9_1】"
                }
            ]
        }
    },
    "hk-u9-l2": {
        "id": "hk-u9-l2",
        "subject": "cantonese",
        "unit": 9,
        "lessonNumber": 2,
        "title": "飲茶同廣東飲食文化 (Yum Cha & Dining) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of 茶樓點心同飲茶文化 (Yum Cha & Dim Sum).",
        "presentation": {
            "explanation": "喺呢一課（茶樓點心同飲茶文化 (Yum Cha & Dim Sum) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋茶樓點心同飲茶文化 (Yum Cha & Dim Sum)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (9.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (9.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (9.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 茶樓點心同飲茶文化 (Yum Cha & Dim Sum)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「茶樓點心同飲茶文化 (Yum Cha & Dim Sum)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (9.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (9.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (9.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「飲茶同廣東飲食文化 (Yum Cha & Dining)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (9.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (9.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (9.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「茶樓點心同飲茶文化 (Yum Cha & Dim Sum)」嘅日常商務與生活習慣（考核 9-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (9.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (9.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (9.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («點心_9_2»):",
                    "acceptedAnswers": [
                        "點心_9_2"
                    ],
                    "explanation": "The target keyword was: 【點心_9_2】"
                }
            ]
        }
    },
    "hk-u9-l3": {
        "id": "hk-u9-l3",
        "subject": "cantonese",
        "unit": 9,
        "lessonNumber": 3,
        "title": "飲茶同廣東飲食文化 (Yum Cha & Dining) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of 茶樓點心同飲茶文化 (Yum Cha & Dim Sum).",
        "presentation": {
            "explanation": "喺呢一課（茶樓點心同飲茶文化 (Yum Cha & Dim Sum) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋茶樓點心同飲茶文化 (Yum Cha & Dim Sum)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (9.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (9.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (9.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 茶樓點心同飲茶文化 (Yum Cha & Dim Sum)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「茶樓點心同飲茶文化 (Yum Cha & Dim Sum)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (9.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (9.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (9.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「飲茶同廣東飲食文化 (Yum Cha & Dining)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (9.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (9.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (9.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「茶樓點心同飲茶文化 (Yum Cha & Dim Sum)」嘅日常商務與生活習慣（考核 9-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (9.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (9.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (9.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («點心_9_3»):",
                    "acceptedAnswers": [
                        "點心_9_3"
                    ],
                    "explanation": "The target keyword was: 【點心_9_3】"
                }
            ]
        }
    },
    "hk-u9-l4": {
        "id": "hk-u9-l4",
        "subject": "cantonese",
        "unit": 9,
        "lessonNumber": 4,
        "title": "飲茶同廣東飲食文化 (Yum Cha & Dining) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of 茶樓點心同飲茶文化 (Yum Cha & Dim Sum).",
        "presentation": {
            "explanation": "喺呢一課（茶樓點心同飲茶文化 (Yum Cha & Dim Sum) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋茶樓點心同飲茶文化 (Yum Cha & Dim Sum)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (9.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (9.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (9.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 茶樓點心同飲茶文化 (Yum Cha & Dim Sum)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「茶樓點心同飲茶文化 (Yum Cha & Dim Sum)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (9.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (9.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (9.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「飲茶同廣東飲食文化 (Yum Cha & Dining)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (9.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (9.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (9.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「茶樓點心同飲茶文化 (Yum Cha & Dim Sum)」嘅日常商務與生活習慣（考核 9-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (9.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (9.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (9.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («點心_9_4»):",
                    "acceptedAnswers": [
                        "點心_9_4"
                    ],
                    "explanation": "The target keyword was: 【點心_9_4】"
                }
            ]
        }
    },
    "hk-u9-l5": {
        "id": "hk-u9-l5",
        "subject": "cantonese",
        "unit": 9,
        "lessonNumber": 5,
        "title": "飲茶同廣東飲食文化 (Yum Cha & Dining) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of 茶樓點心同飲茶文化 (Yum Cha & Dim Sum).",
        "presentation": {
            "explanation": "喺呢一課（茶樓點心同飲茶文化 (Yum Cha & Dim Sum) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋茶樓點心同飲茶文化 (Yum Cha & Dim Sum)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (9.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (9.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (9.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 茶樓點心同飲茶文化 (Yum Cha & Dim Sum)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「茶樓點心同飲茶文化 (Yum Cha & Dim Sum)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (9.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (9.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (9.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「飲茶同廣東飲食文化 (Yum Cha & Dining)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (9.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (9.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (9.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「茶樓點心同飲茶文化 (Yum Cha & Dim Sum)」嘅日常商務與生活習慣（考核 9-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (9.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (9.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (9.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («點心_9_5»):",
                    "acceptedAnswers": [
                        "點心_9_5"
                    ],
                    "explanation": "The target keyword was: 【點心_9_5】"
                }
            ]
        }
    },
    "hk-u10-l1": {
        "id": "hk-u10-l1",
        "subject": "cantonese",
        "unit": 10,
        "lessonNumber": 1,
        "title": "買嘢同街市討價還價 (Shopping & Bargaining) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of 街市買餸同問價錢 (Shopping & Bargaining).",
        "presentation": {
            "explanation": "喺呢一課（街市買餸同問價錢 (Shopping & Bargaining) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋街市買餸同問價錢 (Shopping & Bargaining)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (10.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (10.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (10.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 街市買餸同問價錢 (Shopping & Bargaining)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「街市買餸同問價錢 (Shopping & Bargaining)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (10.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (10.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (10.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「買嘢同街市討價還價 (Shopping & Bargaining)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (10.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (10.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (10.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「街市買餸同問價錢 (Shopping & Bargaining)」嘅日常商務與生活習慣（考核 10-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (10.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (10.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (10.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («買餸_10_1»):",
                    "acceptedAnswers": [
                        "買餸_10_1"
                    ],
                    "explanation": "The target keyword was: 【買餸_10_1】"
                }
            ]
        }
    },
    "hk-u10-l2": {
        "id": "hk-u10-l2",
        "subject": "cantonese",
        "unit": 10,
        "lessonNumber": 2,
        "title": "買嘢同街市討價還價 (Shopping & Bargaining) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of 街市買餸同問價錢 (Shopping & Bargaining).",
        "presentation": {
            "explanation": "喺呢一課（街市買餸同問價錢 (Shopping & Bargaining) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋街市買餸同問價錢 (Shopping & Bargaining)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (10.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (10.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (10.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 街市買餸同問價錢 (Shopping & Bargaining)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「街市買餸同問價錢 (Shopping & Bargaining)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (10.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (10.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (10.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「買嘢同街市討價還價 (Shopping & Bargaining)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (10.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (10.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (10.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「街市買餸同問價錢 (Shopping & Bargaining)」嘅日常商務與生活習慣（考核 10-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (10.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (10.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (10.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («買餸_10_2»):",
                    "acceptedAnswers": [
                        "買餸_10_2"
                    ],
                    "explanation": "The target keyword was: 【買餸_10_2】"
                }
            ]
        }
    },
    "hk-u10-l3": {
        "id": "hk-u10-l3",
        "subject": "cantonese",
        "unit": 10,
        "lessonNumber": 3,
        "title": "買嘢同街市討價還價 (Shopping & Bargaining) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of 街市買餸同問價錢 (Shopping & Bargaining).",
        "presentation": {
            "explanation": "喺呢一課（街市買餸同問價錢 (Shopping & Bargaining) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋街市買餸同問價錢 (Shopping & Bargaining)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (10.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (10.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (10.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 街市買餸同問價錢 (Shopping & Bargaining)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「街市買餸同問價錢 (Shopping & Bargaining)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (10.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (10.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (10.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「買嘢同街市討價還價 (Shopping & Bargaining)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (10.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (10.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (10.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「街市買餸同問價錢 (Shopping & Bargaining)」嘅日常商務與生活習慣（考核 10-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (10.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (10.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (10.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («買餸_10_3»):",
                    "acceptedAnswers": [
                        "買餸_10_3"
                    ],
                    "explanation": "The target keyword was: 【買餸_10_3】"
                }
            ]
        }
    },
    "hk-u10-l4": {
        "id": "hk-u10-l4",
        "subject": "cantonese",
        "unit": 10,
        "lessonNumber": 4,
        "title": "買嘢同街市討價還價 (Shopping & Bargaining) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of 街市買餸同問價錢 (Shopping & Bargaining).",
        "presentation": {
            "explanation": "喺呢一課（街市買餸同問價錢 (Shopping & Bargaining) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋街市買餸同問價錢 (Shopping & Bargaining)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (10.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (10.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (10.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 街市買餸同問價錢 (Shopping & Bargaining)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「街市買餸同問價錢 (Shopping & Bargaining)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (10.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (10.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (10.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「買嘢同街市討價還價 (Shopping & Bargaining)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (10.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (10.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (10.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「街市買餸同問價錢 (Shopping & Bargaining)」嘅日常商務與生活習慣（考核 10-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (10.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (10.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (10.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («買餸_10_4»):",
                    "acceptedAnswers": [
                        "買餸_10_4"
                    ],
                    "explanation": "The target keyword was: 【買餸_10_4】"
                }
            ]
        }
    },
    "hk-u10-l5": {
        "id": "hk-u10-l5",
        "subject": "cantonese",
        "unit": 10,
        "lessonNumber": 5,
        "title": "買嘢同街市討價還價 (Shopping & Bargaining) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of 街市買餸同問價錢 (Shopping & Bargaining).",
        "presentation": {
            "explanation": "喺呢一課（街市買餸同問價錢 (Shopping & Bargaining) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋街市買餸同問價錢 (Shopping & Bargaining)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (10.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (10.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (10.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 街市買餸同問價錢 (Shopping & Bargaining)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「街市買餸同問價錢 (Shopping & Bargaining)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (10.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (10.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (10.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「買嘢同街市討價還價 (Shopping & Bargaining)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (10.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (10.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (10.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「街市買餸同問價錢 (Shopping & Bargaining)」嘅日常商務與生活習慣（考核 10-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (10.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (10.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (10.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («買餸_10_5»):",
                    "acceptedAnswers": [
                        "買餸_10_5"
                    ],
                    "explanation": "The target keyword was: 【買餸_10_5】"
                }
            ]
        }
    },
    "hk-u11-l1": {
        "id": "hk-u11-l1",
        "subject": "cantonese",
        "unit": 11,
        "lessonNumber": 1,
        "title": "方位詞同搭車指路 (Directions & Transit) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of 搭地鐵同問路方向 (Directions & Transit).",
        "presentation": {
            "explanation": "喺呢一課（搭地鐵同問路方向 (Directions & Transit) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋搭地鐵同問路方向 (Directions & Transit)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (11.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (11.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (11.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 搭地鐵同問路方向 (Directions & Transit)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「搭地鐵同問路方向 (Directions & Transit)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (11.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (11.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (11.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「方位詞同搭車指路 (Directions & Transit)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (11.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (11.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (11.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「搭地鐵同問路方向 (Directions & Transit)」嘅日常商務與生活習慣（考核 11-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (11.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (11.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (11.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («地鐵_11_1»):",
                    "acceptedAnswers": [
                        "地鐵_11_1"
                    ],
                    "explanation": "The target keyword was: 【地鐵_11_1】"
                }
            ]
        }
    },
    "hk-u11-l2": {
        "id": "hk-u11-l2",
        "subject": "cantonese",
        "unit": 11,
        "lessonNumber": 2,
        "title": "方位詞同搭車指路 (Directions & Transit) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of 搭地鐵同問路方向 (Directions & Transit).",
        "presentation": {
            "explanation": "喺呢一課（搭地鐵同問路方向 (Directions & Transit) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋搭地鐵同問路方向 (Directions & Transit)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (11.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (11.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (11.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 搭地鐵同問路方向 (Directions & Transit)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「搭地鐵同問路方向 (Directions & Transit)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (11.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (11.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (11.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「方位詞同搭車指路 (Directions & Transit)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (11.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (11.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (11.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「搭地鐵同問路方向 (Directions & Transit)」嘅日常商務與生活習慣（考核 11-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (11.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (11.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (11.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («地鐵_11_2»):",
                    "acceptedAnswers": [
                        "地鐵_11_2"
                    ],
                    "explanation": "The target keyword was: 【地鐵_11_2】"
                }
            ]
        }
    },
    "hk-u11-l3": {
        "id": "hk-u11-l3",
        "subject": "cantonese",
        "unit": 11,
        "lessonNumber": 3,
        "title": "方位詞同搭車指路 (Directions & Transit) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of 搭地鐵同問路方向 (Directions & Transit).",
        "presentation": {
            "explanation": "喺呢一課（搭地鐵同問路方向 (Directions & Transit) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋搭地鐵同問路方向 (Directions & Transit)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (11.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (11.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (11.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 搭地鐵同問路方向 (Directions & Transit)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「搭地鐵同問路方向 (Directions & Transit)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (11.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (11.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (11.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「方位詞同搭車指路 (Directions & Transit)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (11.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (11.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (11.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「搭地鐵同問路方向 (Directions & Transit)」嘅日常商務與生活習慣（考核 11-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (11.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (11.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (11.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («地鐵_11_3»):",
                    "acceptedAnswers": [
                        "地鐵_11_3"
                    ],
                    "explanation": "The target keyword was: 【地鐵_11_3】"
                }
            ]
        }
    },
    "hk-u11-l4": {
        "id": "hk-u11-l4",
        "subject": "cantonese",
        "unit": 11,
        "lessonNumber": 4,
        "title": "方位詞同搭車指路 (Directions & Transit) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of 搭地鐵同問路方向 (Directions & Transit).",
        "presentation": {
            "explanation": "喺呢一課（搭地鐵同問路方向 (Directions & Transit) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋搭地鐵同問路方向 (Directions & Transit)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (11.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (11.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (11.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 搭地鐵同問路方向 (Directions & Transit)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「搭地鐵同問路方向 (Directions & Transit)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (11.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (11.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (11.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「方位詞同搭車指路 (Directions & Transit)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (11.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (11.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (11.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「搭地鐵同問路方向 (Directions & Transit)」嘅日常商務與生活習慣（考核 11-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (11.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (11.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (11.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («地鐵_11_4»):",
                    "acceptedAnswers": [
                        "地鐵_11_4"
                    ],
                    "explanation": "The target keyword was: 【地鐵_11_4】"
                }
            ]
        }
    },
    "hk-u11-l5": {
        "id": "hk-u11-l5",
        "subject": "cantonese",
        "unit": 11,
        "lessonNumber": 5,
        "title": "方位詞同搭車指路 (Directions & Transit) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of 搭地鐵同問路方向 (Directions & Transit).",
        "presentation": {
            "explanation": "喺呢一課（搭地鐵同問路方向 (Directions & Transit) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋搭地鐵同問路方向 (Directions & Transit)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (11.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (11.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (11.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 搭地鐵同問路方向 (Directions & Transit)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「搭地鐵同問路方向 (Directions & Transit)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (11.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (11.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (11.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「方位詞同搭車指路 (Directions & Transit)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (11.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (11.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (11.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「搭地鐵同問路方向 (Directions & Transit)」嘅日常商務與生活習慣（考核 11-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (11.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (11.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (11.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («地鐵_11_5»):",
                    "acceptedAnswers": [
                        "地鐵_11_5"
                    ],
                    "explanation": "The target keyword was: 【地鐵_11_5】"
                }
            ]
        }
    },
    "hk-u12-l1": {
        "id": "hk-u12-l1",
        "subject": "cantonese",
        "unit": 12,
        "lessonNumber": 1,
        "title": "形容詞重疊同程度副詞 (Adjective Reduplication) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of 形容詞同程度副詞 (Degree & Reduplication).",
        "presentation": {
            "explanation": "喺呢一課（形容詞同程度副詞 (Degree & Reduplication) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋形容詞同程度副詞 (Degree & Reduplication)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (12.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (12.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (12.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 形容詞同程度副詞 (Degree & Reduplication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「形容詞同程度副詞 (Degree & Reduplication)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (12.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (12.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (12.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「形容詞重疊同程度副詞 (Adjective Reduplication)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (12.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (12.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (12.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「形容詞同程度副詞 (Degree & Reduplication)」嘅日常商務與生活習慣（考核 12-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (12.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (12.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (12.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («好靚_12_1»):",
                    "acceptedAnswers": [
                        "好靚_12_1"
                    ],
                    "explanation": "The target keyword was: 【好靚_12_1】"
                }
            ]
        }
    },
    "hk-u12-l2": {
        "id": "hk-u12-l2",
        "subject": "cantonese",
        "unit": 12,
        "lessonNumber": 2,
        "title": "形容詞重疊同程度副詞 (Adjective Reduplication) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of 形容詞同程度副詞 (Degree & Reduplication).",
        "presentation": {
            "explanation": "喺呢一課（形容詞同程度副詞 (Degree & Reduplication) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋形容詞同程度副詞 (Degree & Reduplication)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (12.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (12.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (12.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 形容詞同程度副詞 (Degree & Reduplication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「形容詞同程度副詞 (Degree & Reduplication)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (12.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (12.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (12.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「形容詞重疊同程度副詞 (Adjective Reduplication)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (12.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (12.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (12.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「形容詞同程度副詞 (Degree & Reduplication)」嘅日常商務與生活習慣（考核 12-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (12.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (12.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (12.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («好靚_12_2»):",
                    "acceptedAnswers": [
                        "好靚_12_2"
                    ],
                    "explanation": "The target keyword was: 【好靚_12_2】"
                }
            ]
        }
    },
    "hk-u12-l3": {
        "id": "hk-u12-l3",
        "subject": "cantonese",
        "unit": 12,
        "lessonNumber": 3,
        "title": "形容詞重疊同程度副詞 (Adjective Reduplication) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of 形容詞同程度副詞 (Degree & Reduplication).",
        "presentation": {
            "explanation": "喺呢一課（形容詞同程度副詞 (Degree & Reduplication) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋形容詞同程度副詞 (Degree & Reduplication)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (12.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (12.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (12.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 形容詞同程度副詞 (Degree & Reduplication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「形容詞同程度副詞 (Degree & Reduplication)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (12.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (12.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (12.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「形容詞重疊同程度副詞 (Adjective Reduplication)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (12.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (12.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (12.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「形容詞同程度副詞 (Degree & Reduplication)」嘅日常商務與生活習慣（考核 12-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (12.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (12.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (12.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («好靚_12_3»):",
                    "acceptedAnswers": [
                        "好靚_12_3"
                    ],
                    "explanation": "The target keyword was: 【好靚_12_3】"
                }
            ]
        }
    },
    "hk-u12-l4": {
        "id": "hk-u12-l4",
        "subject": "cantonese",
        "unit": 12,
        "lessonNumber": 4,
        "title": "形容詞重疊同程度副詞 (Adjective Reduplication) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of 形容詞同程度副詞 (Degree & Reduplication).",
        "presentation": {
            "explanation": "喺呢一課（形容詞同程度副詞 (Degree & Reduplication) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋形容詞同程度副詞 (Degree & Reduplication)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (12.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (12.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (12.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 形容詞同程度副詞 (Degree & Reduplication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「形容詞同程度副詞 (Degree & Reduplication)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (12.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (12.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (12.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「形容詞重疊同程度副詞 (Adjective Reduplication)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (12.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (12.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (12.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「形容詞同程度副詞 (Degree & Reduplication)」嘅日常商務與生活習慣（考核 12-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (12.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (12.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (12.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («好靚_12_4»):",
                    "acceptedAnswers": [
                        "好靚_12_4"
                    ],
                    "explanation": "The target keyword was: 【好靚_12_4】"
                }
            ]
        }
    },
    "hk-u12-l5": {
        "id": "hk-u12-l5",
        "subject": "cantonese",
        "unit": 12,
        "lessonNumber": 5,
        "title": "形容詞重疊同程度副詞 (Adjective Reduplication) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of 形容詞同程度副詞 (Degree & Reduplication).",
        "presentation": {
            "explanation": "喺呢一課（形容詞同程度副詞 (Degree & Reduplication) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋形容詞同程度副詞 (Degree & Reduplication)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (12.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (12.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (12.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 形容詞同程度副詞 (Degree & Reduplication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「形容詞同程度副詞 (Degree & Reduplication)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (12.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (12.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (12.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「形容詞重疊同程度副詞 (Adjective Reduplication)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (12.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (12.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (12.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「形容詞同程度副詞 (Degree & Reduplication)」嘅日常商務與生活習慣（考核 12-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (12.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (12.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (12.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («好靚_12_5»):",
                    "acceptedAnswers": [
                        "好靚_12_5"
                    ],
                    "explanation": "The target keyword was: 【好靚_12_5】"
                }
            ]
        }
    },
    "hk-u13-l1": {
        "id": "hk-u13-l1",
        "subject": "cantonese",
        "unit": 13,
        "lessonNumber": 1,
        "title": "動態助詞同語氣助詞 (Particles 啦/喎/㗎) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of 句末語氣助詞系統 (Sentence Particles 啦/㗎/喎).",
        "presentation": {
            "explanation": "喺呢一課（句末語氣助詞系統 (Sentence Particles 啦/㗎/喎) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (13.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (13.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (13.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (13.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (13.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (13.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「動態助詞同語氣助詞 (Particles 啦/喎/㗎)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (13.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (13.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (13.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)」嘅日常商務與生活習慣（考核 13-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (13.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (13.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (13.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («㗎啦_13_1»):",
                    "acceptedAnswers": [
                        "㗎啦_13_1"
                    ],
                    "explanation": "The target keyword was: 【㗎啦_13_1】"
                }
            ]
        }
    },
    "hk-u13-l2": {
        "id": "hk-u13-l2",
        "subject": "cantonese",
        "unit": 13,
        "lessonNumber": 2,
        "title": "動態助詞同語氣助詞 (Particles 啦/喎/㗎) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of 句末語氣助詞系統 (Sentence Particles 啦/㗎/喎).",
        "presentation": {
            "explanation": "喺呢一課（句末語氣助詞系統 (Sentence Particles 啦/㗎/喎) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (13.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (13.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (13.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (13.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (13.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (13.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「動態助詞同語氣助詞 (Particles 啦/喎/㗎)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (13.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (13.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (13.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)」嘅日常商務與生活習慣（考核 13-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (13.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (13.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (13.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («㗎啦_13_2»):",
                    "acceptedAnswers": [
                        "㗎啦_13_2"
                    ],
                    "explanation": "The target keyword was: 【㗎啦_13_2】"
                }
            ]
        }
    },
    "hk-u13-l3": {
        "id": "hk-u13-l3",
        "subject": "cantonese",
        "unit": 13,
        "lessonNumber": 3,
        "title": "動態助詞同語氣助詞 (Particles 啦/喎/㗎) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of 句末語氣助詞系統 (Sentence Particles 啦/㗎/喎).",
        "presentation": {
            "explanation": "喺呢一課（句末語氣助詞系統 (Sentence Particles 啦/㗎/喎) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (13.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (13.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (13.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (13.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (13.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (13.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「動態助詞同語氣助詞 (Particles 啦/喎/㗎)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (13.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (13.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (13.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)」嘅日常商務與生活習慣（考核 13-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (13.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (13.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (13.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («㗎啦_13_3»):",
                    "acceptedAnswers": [
                        "㗎啦_13_3"
                    ],
                    "explanation": "The target keyword was: 【㗎啦_13_3】"
                }
            ]
        }
    },
    "hk-u13-l4": {
        "id": "hk-u13-l4",
        "subject": "cantonese",
        "unit": 13,
        "lessonNumber": 4,
        "title": "動態助詞同語氣助詞 (Particles 啦/喎/㗎) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of 句末語氣助詞系統 (Sentence Particles 啦/㗎/喎).",
        "presentation": {
            "explanation": "喺呢一課（句末語氣助詞系統 (Sentence Particles 啦/㗎/喎) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (13.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (13.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (13.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (13.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (13.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (13.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「動態助詞同語氣助詞 (Particles 啦/喎/㗎)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (13.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (13.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (13.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)」嘅日常商務與生活習慣（考核 13-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (13.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (13.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (13.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («㗎啦_13_4»):",
                    "acceptedAnswers": [
                        "㗎啦_13_4"
                    ],
                    "explanation": "The target keyword was: 【㗎啦_13_4】"
                }
            ]
        }
    },
    "hk-u13-l5": {
        "id": "hk-u13-l5",
        "subject": "cantonese",
        "unit": 13,
        "lessonNumber": 5,
        "title": "動態助詞同語氣助詞 (Particles 啦/喎/㗎) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of 句末語氣助詞系統 (Sentence Particles 啦/㗎/喎).",
        "presentation": {
            "explanation": "喺呢一課（句末語氣助詞系統 (Sentence Particles 啦/㗎/喎) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (13.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (13.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (13.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (13.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (13.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (13.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「動態助詞同語氣助詞 (Particles 啦/喎/㗎)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (13.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (13.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (13.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「句末語氣助詞系統 (Sentence Particles 啦/㗎/喎)」嘅日常商務與生活習慣（考核 13-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (13.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (13.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (13.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («㗎啦_13_5»):",
                    "acceptedAnswers": [
                        "㗎啦_13_5"
                    ],
                    "explanation": "The target keyword was: 【㗎啦_13_5】"
                }
            ]
        }
    },
    "hk-u14-l1": {
        "id": "hk-u14-l1",
        "subject": "cantonese",
        "unit": 14,
        "lessonNumber": 1,
        "title": "比較句：貴過同最靚 (Comparatives) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of 比較句式過同最 (Comparatives: 貴過/最靚).",
        "presentation": {
            "explanation": "喺呢一課（比較句式過同最 (Comparatives: 貴過/最靚) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋比較句式過同最 (Comparatives: 貴過/最靚)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (14.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (14.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (14.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 比較句式過同最 (Comparatives: 貴過/最靚)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「比較句式過同最 (Comparatives: 貴過/最靚)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (14.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (14.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (14.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「比較句：貴過同最靚 (Comparatives)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (14.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (14.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (14.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「比較句式過同最 (Comparatives: 貴過/最靚)」嘅日常商務與生活習慣（考核 14-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (14.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (14.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (14.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («貴過_14_1»):",
                    "acceptedAnswers": [
                        "貴過_14_1"
                    ],
                    "explanation": "The target keyword was: 【貴過_14_1】"
                }
            ]
        }
    },
    "hk-u14-l2": {
        "id": "hk-u14-l2",
        "subject": "cantonese",
        "unit": 14,
        "lessonNumber": 2,
        "title": "比較句：貴過同最靚 (Comparatives) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of 比較句式過同最 (Comparatives: 貴過/最靚).",
        "presentation": {
            "explanation": "喺呢一課（比較句式過同最 (Comparatives: 貴過/最靚) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋比較句式過同最 (Comparatives: 貴過/最靚)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (14.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (14.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (14.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 比較句式過同最 (Comparatives: 貴過/最靚)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「比較句式過同最 (Comparatives: 貴過/最靚)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (14.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (14.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (14.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「比較句：貴過同最靚 (Comparatives)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (14.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (14.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (14.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「比較句式過同最 (Comparatives: 貴過/最靚)」嘅日常商務與生活習慣（考核 14-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (14.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (14.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (14.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («貴過_14_2»):",
                    "acceptedAnswers": [
                        "貴過_14_2"
                    ],
                    "explanation": "The target keyword was: 【貴過_14_2】"
                }
            ]
        }
    },
    "hk-u14-l3": {
        "id": "hk-u14-l3",
        "subject": "cantonese",
        "unit": 14,
        "lessonNumber": 3,
        "title": "比較句：貴過同最靚 (Comparatives) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of 比較句式過同最 (Comparatives: 貴過/最靚).",
        "presentation": {
            "explanation": "喺呢一課（比較句式過同最 (Comparatives: 貴過/最靚) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋比較句式過同最 (Comparatives: 貴過/最靚)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (14.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (14.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (14.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 比較句式過同最 (Comparatives: 貴過/最靚)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「比較句式過同最 (Comparatives: 貴過/最靚)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (14.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (14.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (14.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「比較句：貴過同最靚 (Comparatives)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (14.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (14.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (14.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「比較句式過同最 (Comparatives: 貴過/最靚)」嘅日常商務與生活習慣（考核 14-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (14.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (14.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (14.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («貴過_14_3»):",
                    "acceptedAnswers": [
                        "貴過_14_3"
                    ],
                    "explanation": "The target keyword was: 【貴過_14_3】"
                }
            ]
        }
    },
    "hk-u14-l4": {
        "id": "hk-u14-l4",
        "subject": "cantonese",
        "unit": 14,
        "lessonNumber": 4,
        "title": "比較句：貴過同最靚 (Comparatives) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of 比較句式過同最 (Comparatives: 貴過/最靚).",
        "presentation": {
            "explanation": "喺呢一課（比較句式過同最 (Comparatives: 貴過/最靚) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋比較句式過同最 (Comparatives: 貴過/最靚)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (14.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (14.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (14.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 比較句式過同最 (Comparatives: 貴過/最靚)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「比較句式過同最 (Comparatives: 貴過/最靚)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (14.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (14.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (14.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「比較句：貴過同最靚 (Comparatives)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (14.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (14.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (14.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「比較句式過同最 (Comparatives: 貴過/最靚)」嘅日常商務與生活習慣（考核 14-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (14.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (14.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (14.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («貴過_14_4»):",
                    "acceptedAnswers": [
                        "貴過_14_4"
                    ],
                    "explanation": "The target keyword was: 【貴過_14_4】"
                }
            ]
        }
    },
    "hk-u14-l5": {
        "id": "hk-u14-l5",
        "subject": "cantonese",
        "unit": 14,
        "lessonNumber": 5,
        "title": "比較句：貴過同最靚 (Comparatives) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of 比較句式過同最 (Comparatives: 貴過/最靚).",
        "presentation": {
            "explanation": "喺呢一課（比較句式過同最 (Comparatives: 貴過/最靚) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋比較句式過同最 (Comparatives: 貴過/最靚)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (14.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (14.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (14.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 比較句式過同最 (Comparatives: 貴過/最靚)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「比較句式過同最 (Comparatives: 貴過/最靚)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (14.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (14.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (14.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「比較句：貴過同最靚 (Comparatives)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (14.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (14.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (14.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「比較句式過同最 (Comparatives: 貴過/最靚)」嘅日常商務與生活習慣（考核 14-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (14.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (14.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (14.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («貴過_14_5»):",
                    "acceptedAnswers": [
                        "貴過_14_5"
                    ],
                    "explanation": "The target keyword was: 【貴過_14_5】"
                }
            ]
        }
    },
    "hk-u15-l1": {
        "id": "hk-u15-l1",
        "subject": "cantonese",
        "unit": 15,
        "lessonNumber": 1,
        "title": "可能補語：做得切同睇唔明 (Potential Complements) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of 可能補語得同唔 (Potential Complements 得/唔).",
        "presentation": {
            "explanation": "喺呢一課（可能補語得同唔 (Potential Complements 得/唔) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋可能補語得同唔 (Potential Complements 得/唔)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (15.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (15.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (15.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 可能補語得同唔 (Potential Complements 得/唔)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「可能補語得同唔 (Potential Complements 得/唔)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (15.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (15.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (15.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「可能補語：做得切同睇唔明 (Potential Complements)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (15.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (15.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (15.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「可能補語得同唔 (Potential Complements 得/唔)」嘅日常商務與生活習慣（考核 15-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (15.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (15.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (15.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («做得切_15_1»):",
                    "acceptedAnswers": [
                        "做得切_15_1"
                    ],
                    "explanation": "The target keyword was: 【做得切_15_1】"
                }
            ]
        }
    },
    "hk-u15-l2": {
        "id": "hk-u15-l2",
        "subject": "cantonese",
        "unit": 15,
        "lessonNumber": 2,
        "title": "可能補語：做得切同睇唔明 (Potential Complements) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of 可能補語得同唔 (Potential Complements 得/唔).",
        "presentation": {
            "explanation": "喺呢一課（可能補語得同唔 (Potential Complements 得/唔) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋可能補語得同唔 (Potential Complements 得/唔)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (15.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (15.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (15.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 可能補語得同唔 (Potential Complements 得/唔)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「可能補語得同唔 (Potential Complements 得/唔)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (15.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (15.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (15.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「可能補語：做得切同睇唔明 (Potential Complements)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (15.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (15.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (15.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「可能補語得同唔 (Potential Complements 得/唔)」嘅日常商務與生活習慣（考核 15-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (15.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (15.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (15.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («做得切_15_2»):",
                    "acceptedAnswers": [
                        "做得切_15_2"
                    ],
                    "explanation": "The target keyword was: 【做得切_15_2】"
                }
            ]
        }
    },
    "hk-u15-l3": {
        "id": "hk-u15-l3",
        "subject": "cantonese",
        "unit": 15,
        "lessonNumber": 3,
        "title": "可能補語：做得切同睇唔明 (Potential Complements) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of 可能補語得同唔 (Potential Complements 得/唔).",
        "presentation": {
            "explanation": "喺呢一課（可能補語得同唔 (Potential Complements 得/唔) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋可能補語得同唔 (Potential Complements 得/唔)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (15.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (15.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (15.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 可能補語得同唔 (Potential Complements 得/唔)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「可能補語得同唔 (Potential Complements 得/唔)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (15.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (15.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (15.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「可能補語：做得切同睇唔明 (Potential Complements)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (15.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (15.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (15.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「可能補語得同唔 (Potential Complements 得/唔)」嘅日常商務與生活習慣（考核 15-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (15.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (15.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (15.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («做得切_15_3»):",
                    "acceptedAnswers": [
                        "做得切_15_3"
                    ],
                    "explanation": "The target keyword was: 【做得切_15_3】"
                }
            ]
        }
    },
    "hk-u15-l4": {
        "id": "hk-u15-l4",
        "subject": "cantonese",
        "unit": 15,
        "lessonNumber": 4,
        "title": "可能補語：做得切同睇唔明 (Potential Complements) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of 可能補語得同唔 (Potential Complements 得/唔).",
        "presentation": {
            "explanation": "喺呢一課（可能補語得同唔 (Potential Complements 得/唔) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋可能補語得同唔 (Potential Complements 得/唔)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (15.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (15.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (15.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 可能補語得同唔 (Potential Complements 得/唔)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「可能補語得同唔 (Potential Complements 得/唔)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (15.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (15.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (15.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「可能補語：做得切同睇唔明 (Potential Complements)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (15.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (15.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (15.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「可能補語得同唔 (Potential Complements 得/唔)」嘅日常商務與生活習慣（考核 15-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (15.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (15.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (15.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («做得切_15_4»):",
                    "acceptedAnswers": [
                        "做得切_15_4"
                    ],
                    "explanation": "The target keyword was: 【做得切_15_4】"
                }
            ]
        }
    },
    "hk-u15-l5": {
        "id": "hk-u15-l5",
        "subject": "cantonese",
        "unit": 15,
        "lessonNumber": 5,
        "title": "可能補語：做得切同睇唔明 (Potential Complements) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of 可能補語得同唔 (Potential Complements 得/唔).",
        "presentation": {
            "explanation": "喺呢一課（可能補語得同唔 (Potential Complements 得/唔) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋可能補語得同唔 (Potential Complements 得/唔)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (15.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (15.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (15.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 可能補語得同唔 (Potential Complements 得/唔)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「可能補語得同唔 (Potential Complements 得/唔)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (15.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (15.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (15.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「可能補語：做得切同睇唔明 (Potential Complements)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (15.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (15.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (15.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「可能補語得同唔 (Potential Complements 得/唔)」嘅日常商務與生活習慣（考核 15-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (15.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (15.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (15.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («做得切_15_5»):",
                    "acceptedAnswers": [
                        "做得切_15_5"
                    ],
                    "explanation": "The target keyword was: 【做得切_15_5】"
                }
            ]
        }
    },
    "hk-u16-l1": {
        "id": "hk-u16-l1",
        "subject": "cantonese",
        "unit": 16,
        "lessonNumber": 1,
        "title": "結果補語：睇見同搵到 (Resultative Complements) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of 結果補語見同到 (Resultative: 睇見/搵到).",
        "presentation": {
            "explanation": "喺呢一課（結果補語見同到 (Resultative: 睇見/搵到) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋結果補語見同到 (Resultative: 睇見/搵到)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (16.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (16.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (16.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 結果補語見同到 (Resultative: 睇見/搵到)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「結果補語見同到 (Resultative: 睇見/搵到)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (16.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (16.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (16.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「結果補語：睇見同搵到 (Resultative Complements)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (16.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (16.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (16.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「結果補語見同到 (Resultative: 睇見/搵到)」嘅日常商務與生活習慣（考核 16-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (16.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (16.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (16.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («睇見_16_1»):",
                    "acceptedAnswers": [
                        "睇見_16_1"
                    ],
                    "explanation": "The target keyword was: 【睇見_16_1】"
                }
            ]
        }
    },
    "hk-u16-l2": {
        "id": "hk-u16-l2",
        "subject": "cantonese",
        "unit": 16,
        "lessonNumber": 2,
        "title": "結果補語：睇見同搵到 (Resultative Complements) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of 結果補語見同到 (Resultative: 睇見/搵到).",
        "presentation": {
            "explanation": "喺呢一課（結果補語見同到 (Resultative: 睇見/搵到) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋結果補語見同到 (Resultative: 睇見/搵到)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (16.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (16.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (16.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 結果補語見同到 (Resultative: 睇見/搵到)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「結果補語見同到 (Resultative: 睇見/搵到)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (16.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (16.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (16.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「結果補語：睇見同搵到 (Resultative Complements)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (16.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (16.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (16.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「結果補語見同到 (Resultative: 睇見/搵到)」嘅日常商務與生活習慣（考核 16-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (16.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (16.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (16.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («睇見_16_2»):",
                    "acceptedAnswers": [
                        "睇見_16_2"
                    ],
                    "explanation": "The target keyword was: 【睇見_16_2】"
                }
            ]
        }
    },
    "hk-u16-l3": {
        "id": "hk-u16-l3",
        "subject": "cantonese",
        "unit": 16,
        "lessonNumber": 3,
        "title": "結果補語：睇見同搵到 (Resultative Complements) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of 結果補語見同到 (Resultative: 睇見/搵到).",
        "presentation": {
            "explanation": "喺呢一課（結果補語見同到 (Resultative: 睇見/搵到) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋結果補語見同到 (Resultative: 睇見/搵到)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (16.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (16.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (16.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 結果補語見同到 (Resultative: 睇見/搵到)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「結果補語見同到 (Resultative: 睇見/搵到)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (16.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (16.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (16.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「結果補語：睇見同搵到 (Resultative Complements)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (16.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (16.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (16.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「結果補語見同到 (Resultative: 睇見/搵到)」嘅日常商務與生活習慣（考核 16-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (16.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (16.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (16.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («睇見_16_3»):",
                    "acceptedAnswers": [
                        "睇見_16_3"
                    ],
                    "explanation": "The target keyword was: 【睇見_16_3】"
                }
            ]
        }
    },
    "hk-u16-l4": {
        "id": "hk-u16-l4",
        "subject": "cantonese",
        "unit": 16,
        "lessonNumber": 4,
        "title": "結果補語：睇見同搵到 (Resultative Complements) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of 結果補語見同到 (Resultative: 睇見/搵到).",
        "presentation": {
            "explanation": "喺呢一課（結果補語見同到 (Resultative: 睇見/搵到) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋結果補語見同到 (Resultative: 睇見/搵到)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (16.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (16.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (16.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 結果補語見同到 (Resultative: 睇見/搵到)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「結果補語見同到 (Resultative: 睇見/搵到)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (16.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (16.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (16.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「結果補語：睇見同搵到 (Resultative Complements)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (16.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (16.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (16.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「結果補語見同到 (Resultative: 睇見/搵到)」嘅日常商務與生活習慣（考核 16-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (16.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (16.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (16.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («睇見_16_4»):",
                    "acceptedAnswers": [
                        "睇見_16_4"
                    ],
                    "explanation": "The target keyword was: 【睇見_16_4】"
                }
            ]
        }
    },
    "hk-u16-l5": {
        "id": "hk-u16-l5",
        "subject": "cantonese",
        "unit": 16,
        "lessonNumber": 5,
        "title": "結果補語：睇見同搵到 (Resultative Complements) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of 結果補語見同到 (Resultative: 睇見/搵到).",
        "presentation": {
            "explanation": "喺呢一課（結果補語見同到 (Resultative: 睇見/搵到) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋結果補語見同到 (Resultative: 睇見/搵到)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (16.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (16.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (16.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 結果補語見同到 (Resultative: 睇見/搵到)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「結果補語見同到 (Resultative: 睇見/搵到)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (16.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (16.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (16.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「結果補語：睇見同搵到 (Resultative Complements)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (16.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (16.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (16.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「結果補語見同到 (Resultative: 睇見/搵到)」嘅日常商務與生活習慣（考核 16-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (16.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (16.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (16.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («睇見_16_5»):",
                    "acceptedAnswers": [
                        "睇見_16_5"
                    ],
                    "explanation": "The target keyword was: 【睇見_16_5】"
                }
            ]
        }
    },
    "hk-u17-l1": {
        "id": "hk-u17-l1",
        "subject": "cantonese",
        "unit": 17,
        "lessonNumber": 1,
        "title": "被動句同處置句 (Passive & Disposal) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 被動句畀同處置句將 (Passive 畀 & Disposal 將).",
        "presentation": {
            "explanation": "喺呢一課（被動句畀同處置句將 (Passive 畀 & Disposal 將) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋被動句畀同處置句將 (Passive 畀 & Disposal 將)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (17.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (17.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (17.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 被動句畀同處置句將 (Passive 畀 & Disposal 將)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「被動句畀同處置句將 (Passive 畀 & Disposal 將)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (17.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (17.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (17.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「被動句同處置句 (Passive & Disposal)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (17.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (17.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (17.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「被動句畀同處置句將 (Passive 畀 & Disposal 將)」嘅日常商務與生活習慣（考核 17-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (17.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (17.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (17.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («畀人_17_1»):",
                    "acceptedAnswers": [
                        "畀人_17_1"
                    ],
                    "explanation": "The target keyword was: 【畀人_17_1】"
                }
            ]
        }
    },
    "hk-u17-l2": {
        "id": "hk-u17-l2",
        "subject": "cantonese",
        "unit": 17,
        "lessonNumber": 2,
        "title": "被動句同處置句 (Passive & Disposal) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 被動句畀同處置句將 (Passive 畀 & Disposal 將).",
        "presentation": {
            "explanation": "喺呢一課（被動句畀同處置句將 (Passive 畀 & Disposal 將) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋被動句畀同處置句將 (Passive 畀 & Disposal 將)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (17.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (17.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (17.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 被動句畀同處置句將 (Passive 畀 & Disposal 將)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「被動句畀同處置句將 (Passive 畀 & Disposal 將)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (17.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (17.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (17.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「被動句同處置句 (Passive & Disposal)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (17.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (17.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (17.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「被動句畀同處置句將 (Passive 畀 & Disposal 將)」嘅日常商務與生活習慣（考核 17-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (17.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (17.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (17.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («畀人_17_2»):",
                    "acceptedAnswers": [
                        "畀人_17_2"
                    ],
                    "explanation": "The target keyword was: 【畀人_17_2】"
                }
            ]
        }
    },
    "hk-u17-l3": {
        "id": "hk-u17-l3",
        "subject": "cantonese",
        "unit": 17,
        "lessonNumber": 3,
        "title": "被動句同處置句 (Passive & Disposal) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 被動句畀同處置句將 (Passive 畀 & Disposal 將).",
        "presentation": {
            "explanation": "喺呢一課（被動句畀同處置句將 (Passive 畀 & Disposal 將) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋被動句畀同處置句將 (Passive 畀 & Disposal 將)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (17.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (17.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (17.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 被動句畀同處置句將 (Passive 畀 & Disposal 將)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「被動句畀同處置句將 (Passive 畀 & Disposal 將)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (17.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (17.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (17.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「被動句同處置句 (Passive & Disposal)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (17.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (17.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (17.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「被動句畀同處置句將 (Passive 畀 & Disposal 將)」嘅日常商務與生活習慣（考核 17-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (17.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (17.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (17.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («畀人_17_3»):",
                    "acceptedAnswers": [
                        "畀人_17_3"
                    ],
                    "explanation": "The target keyword was: 【畀人_17_3】"
                }
            ]
        }
    },
    "hk-u17-l4": {
        "id": "hk-u17-l4",
        "subject": "cantonese",
        "unit": 17,
        "lessonNumber": 4,
        "title": "被動句同處置句 (Passive & Disposal) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 被動句畀同處置句將 (Passive 畀 & Disposal 將).",
        "presentation": {
            "explanation": "喺呢一課（被動句畀同處置句將 (Passive 畀 & Disposal 將) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋被動句畀同處置句將 (Passive 畀 & Disposal 將)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (17.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (17.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (17.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 被動句畀同處置句將 (Passive 畀 & Disposal 將)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「被動句畀同處置句將 (Passive 畀 & Disposal 將)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (17.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (17.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (17.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「被動句同處置句 (Passive & Disposal)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (17.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (17.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (17.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「被動句畀同處置句將 (Passive 畀 & Disposal 將)」嘅日常商務與生活習慣（考核 17-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (17.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (17.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (17.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («畀人_17_4»):",
                    "acceptedAnswers": [
                        "畀人_17_4"
                    ],
                    "explanation": "The target keyword was: 【畀人_17_4】"
                }
            ]
        }
    },
    "hk-u17-l5": {
        "id": "hk-u17-l5",
        "subject": "cantonese",
        "unit": 17,
        "lessonNumber": 5,
        "title": "被動句同處置句 (Passive & Disposal) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 被動句畀同處置句將 (Passive 畀 & Disposal 將).",
        "presentation": {
            "explanation": "喺呢一課（被動句畀同處置句將 (Passive 畀 & Disposal 將) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋被動句畀同處置句將 (Passive 畀 & Disposal 將)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (17.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (17.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (17.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 被動句畀同處置句將 (Passive 畀 & Disposal 將)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「被動句畀同處置句將 (Passive 畀 & Disposal 將)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (17.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (17.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (17.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「被動句同處置句 (Passive & Disposal)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (17.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (17.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (17.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「被動句畀同處置句將 (Passive 畀 & Disposal 將)」嘅日常商務與生活習慣（考核 17-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (17.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (17.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (17.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («畀人_17_5»):",
                    "acceptedAnswers": [
                        "畀人_17_5"
                    ],
                    "explanation": "The target keyword was: 【畀人_17_5】"
                }
            ]
        }
    },
    "hk-u18-l1": {
        "id": "hk-u18-l1",
        "subject": "cantonese",
        "unit": 18,
        "lessonNumber": 1,
        "title": "條件句：如果...就 (Conditionals) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 條件假設句式 (Conditionals: 如果...就).",
        "presentation": {
            "explanation": "喺呢一課（條件假設句式 (Conditionals: 如果...就) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋條件假設句式 (Conditionals: 如果...就)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (18.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (18.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (18.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 條件假設句式 (Conditionals: 如果...就)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「條件假設句式 (Conditionals: 如果...就)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (18.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (18.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (18.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「條件句：如果...就 (Conditionals)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (18.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (18.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (18.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「條件假設句式 (Conditionals: 如果...就)」嘅日常商務與生活習慣（考核 18-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (18.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (18.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (18.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («如果_18_1»):",
                    "acceptedAnswers": [
                        "如果_18_1"
                    ],
                    "explanation": "The target keyword was: 【如果_18_1】"
                }
            ]
        }
    },
    "hk-u18-l2": {
        "id": "hk-u18-l2",
        "subject": "cantonese",
        "unit": 18,
        "lessonNumber": 2,
        "title": "條件句：如果...就 (Conditionals) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 條件假設句式 (Conditionals: 如果...就).",
        "presentation": {
            "explanation": "喺呢一課（條件假設句式 (Conditionals: 如果...就) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋條件假設句式 (Conditionals: 如果...就)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (18.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (18.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (18.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 條件假設句式 (Conditionals: 如果...就)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「條件假設句式 (Conditionals: 如果...就)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (18.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (18.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (18.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「條件句：如果...就 (Conditionals)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (18.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (18.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (18.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「條件假設句式 (Conditionals: 如果...就)」嘅日常商務與生活習慣（考核 18-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (18.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (18.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (18.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («如果_18_2»):",
                    "acceptedAnswers": [
                        "如果_18_2"
                    ],
                    "explanation": "The target keyword was: 【如果_18_2】"
                }
            ]
        }
    },
    "hk-u18-l3": {
        "id": "hk-u18-l3",
        "subject": "cantonese",
        "unit": 18,
        "lessonNumber": 3,
        "title": "條件句：如果...就 (Conditionals) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 條件假設句式 (Conditionals: 如果...就).",
        "presentation": {
            "explanation": "喺呢一課（條件假設句式 (Conditionals: 如果...就) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋條件假設句式 (Conditionals: 如果...就)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (18.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (18.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (18.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 條件假設句式 (Conditionals: 如果...就)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「條件假設句式 (Conditionals: 如果...就)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (18.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (18.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (18.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「條件句：如果...就 (Conditionals)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (18.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (18.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (18.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「條件假設句式 (Conditionals: 如果...就)」嘅日常商務與生活習慣（考核 18-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (18.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (18.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (18.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («如果_18_3»):",
                    "acceptedAnswers": [
                        "如果_18_3"
                    ],
                    "explanation": "The target keyword was: 【如果_18_3】"
                }
            ]
        }
    },
    "hk-u18-l4": {
        "id": "hk-u18-l4",
        "subject": "cantonese",
        "unit": 18,
        "lessonNumber": 4,
        "title": "條件句：如果...就 (Conditionals) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 條件假設句式 (Conditionals: 如果...就).",
        "presentation": {
            "explanation": "喺呢一課（條件假設句式 (Conditionals: 如果...就) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋條件假設句式 (Conditionals: 如果...就)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (18.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (18.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (18.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 條件假設句式 (Conditionals: 如果...就)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「條件假設句式 (Conditionals: 如果...就)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (18.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (18.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (18.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「條件句：如果...就 (Conditionals)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (18.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (18.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (18.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「條件假設句式 (Conditionals: 如果...就)」嘅日常商務與生活習慣（考核 18-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (18.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (18.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (18.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («如果_18_4»):",
                    "acceptedAnswers": [
                        "如果_18_4"
                    ],
                    "explanation": "The target keyword was: 【如果_18_4】"
                }
            ]
        }
    },
    "hk-u18-l5": {
        "id": "hk-u18-l5",
        "subject": "cantonese",
        "unit": 18,
        "lessonNumber": 5,
        "title": "條件句：如果...就 (Conditionals) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 條件假設句式 (Conditionals: 如果...就).",
        "presentation": {
            "explanation": "喺呢一課（條件假設句式 (Conditionals: 如果...就) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋條件假設句式 (Conditionals: 如果...就)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (18.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (18.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (18.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 條件假設句式 (Conditionals: 如果...就)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「條件假設句式 (Conditionals: 如果...就)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (18.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (18.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (18.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「條件句：如果...就 (Conditionals)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (18.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (18.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (18.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「條件假設句式 (Conditionals: 如果...就)」嘅日常商務與生活習慣（考核 18-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (18.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (18.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (18.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («如果_18_5»):",
                    "acceptedAnswers": [
                        "如果_18_5"
                    ],
                    "explanation": "The target keyword was: 【如果_18_5】"
                }
            ]
        }
    },
    "hk-u19-l1": {
        "id": "hk-u19-l1",
        "subject": "cantonese",
        "unit": 19,
        "lessonNumber": 1,
        "title": "因果同轉折連詞 (Causal & Concessive) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 因果轉折關聯詞 (Connectors: 因為/所以/但係).",
        "presentation": {
            "explanation": "喺呢一課（因果轉折關聯詞 (Connectors: 因為/所以/但係) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋因果轉折關聯詞 (Connectors: 因為/所以/但係)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (19.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (19.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (19.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 因果轉折關聯詞 (Connectors: 因為/所以/但係)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「因果轉折關聯詞 (Connectors: 因為/所以/但係)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (19.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (19.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (19.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「因果同轉折連詞 (Causal & Concessive)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (19.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (19.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (19.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「因果轉折關聯詞 (Connectors: 因為/所以/但係)」嘅日常商務與生活習慣（考核 19-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (19.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (19.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (19.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («因為_19_1»):",
                    "acceptedAnswers": [
                        "因為_19_1"
                    ],
                    "explanation": "The target keyword was: 【因為_19_1】"
                }
            ]
        }
    },
    "hk-u19-l2": {
        "id": "hk-u19-l2",
        "subject": "cantonese",
        "unit": 19,
        "lessonNumber": 2,
        "title": "因果同轉折連詞 (Causal & Concessive) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 因果轉折關聯詞 (Connectors: 因為/所以/但係).",
        "presentation": {
            "explanation": "喺呢一課（因果轉折關聯詞 (Connectors: 因為/所以/但係) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋因果轉折關聯詞 (Connectors: 因為/所以/但係)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (19.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (19.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (19.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 因果轉折關聯詞 (Connectors: 因為/所以/但係)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「因果轉折關聯詞 (Connectors: 因為/所以/但係)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (19.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (19.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (19.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「因果同轉折連詞 (Causal & Concessive)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (19.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (19.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (19.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「因果轉折關聯詞 (Connectors: 因為/所以/但係)」嘅日常商務與生活習慣（考核 19-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (19.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (19.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (19.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («因為_19_2»):",
                    "acceptedAnswers": [
                        "因為_19_2"
                    ],
                    "explanation": "The target keyword was: 【因為_19_2】"
                }
            ]
        }
    },
    "hk-u19-l3": {
        "id": "hk-u19-l3",
        "subject": "cantonese",
        "unit": 19,
        "lessonNumber": 3,
        "title": "因果同轉折連詞 (Causal & Concessive) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 因果轉折關聯詞 (Connectors: 因為/所以/但係).",
        "presentation": {
            "explanation": "喺呢一課（因果轉折關聯詞 (Connectors: 因為/所以/但係) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋因果轉折關聯詞 (Connectors: 因為/所以/但係)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (19.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (19.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (19.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 因果轉折關聯詞 (Connectors: 因為/所以/但係)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「因果轉折關聯詞 (Connectors: 因為/所以/但係)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (19.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (19.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (19.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「因果同轉折連詞 (Causal & Concessive)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (19.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (19.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (19.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「因果轉折關聯詞 (Connectors: 因為/所以/但係)」嘅日常商務與生活習慣（考核 19-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (19.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (19.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (19.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («因為_19_3»):",
                    "acceptedAnswers": [
                        "因為_19_3"
                    ],
                    "explanation": "The target keyword was: 【因為_19_3】"
                }
            ]
        }
    },
    "hk-u19-l4": {
        "id": "hk-u19-l4",
        "subject": "cantonese",
        "unit": 19,
        "lessonNumber": 4,
        "title": "因果同轉折連詞 (Causal & Concessive) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 因果轉折關聯詞 (Connectors: 因為/所以/但係).",
        "presentation": {
            "explanation": "喺呢一課（因果轉折關聯詞 (Connectors: 因為/所以/但係) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋因果轉折關聯詞 (Connectors: 因為/所以/但係)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (19.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (19.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (19.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 因果轉折關聯詞 (Connectors: 因為/所以/但係)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「因果轉折關聯詞 (Connectors: 因為/所以/但係)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (19.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (19.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (19.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「因果同轉折連詞 (Causal & Concessive)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (19.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (19.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (19.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「因果轉折關聯詞 (Connectors: 因為/所以/但係)」嘅日常商務與生活習慣（考核 19-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (19.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (19.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (19.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («因為_19_4»):",
                    "acceptedAnswers": [
                        "因為_19_4"
                    ],
                    "explanation": "The target keyword was: 【因為_19_4】"
                }
            ]
        }
    },
    "hk-u19-l5": {
        "id": "hk-u19-l5",
        "subject": "cantonese",
        "unit": 19,
        "lessonNumber": 5,
        "title": "因果同轉折連詞 (Causal & Concessive) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 因果轉折關聯詞 (Connectors: 因為/所以/但係).",
        "presentation": {
            "explanation": "喺呢一課（因果轉折關聯詞 (Connectors: 因為/所以/但係) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋因果轉折關聯詞 (Connectors: 因為/所以/但係)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (19.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (19.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (19.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 因果轉折關聯詞 (Connectors: 因為/所以/但係)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「因果轉折關聯詞 (Connectors: 因為/所以/但係)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (19.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (19.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (19.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「因果同轉折連詞 (Causal & Concessive)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (19.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (19.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (19.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「因果轉折關聯詞 (Connectors: 因為/所以/但係)」嘅日常商務與生活習慣（考核 19-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (19.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (19.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (19.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («因為_19_5»):",
                    "acceptedAnswers": [
                        "因為_19_5"
                    ],
                    "explanation": "The target keyword was: 【因為_19_5】"
                }
            ]
        }
    },
    "hk-u20-l1": {
        "id": "hk-u20-l1",
        "subject": "cantonese",
        "unit": 20,
        "lessonNumber": 1,
        "title": "職場辦公同商務電郵 (Workplace & Business) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 辦公室溝通同電郵 (Workplace Communication).",
        "presentation": {
            "explanation": "喺呢一課（辦公室溝通同電郵 (Workplace Communication) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋辦公室溝通同電郵 (Workplace Communication)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (20.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (20.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (20.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 辦公室溝通同電郵 (Workplace Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「辦公室溝通同電郵 (Workplace Communication)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (20.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (20.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (20.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「職場辦公同商務電郵 (Workplace & Business)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (20.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (20.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (20.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「辦公室溝通同電郵 (Workplace Communication)」嘅日常商務與生活習慣（考核 20-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (20.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (20.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (20.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («開會_20_1»):",
                    "acceptedAnswers": [
                        "開會_20_1"
                    ],
                    "explanation": "The target keyword was: 【開會_20_1】"
                }
            ]
        }
    },
    "hk-u20-l2": {
        "id": "hk-u20-l2",
        "subject": "cantonese",
        "unit": 20,
        "lessonNumber": 2,
        "title": "職場辦公同商務電郵 (Workplace & Business) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 辦公室溝通同電郵 (Workplace Communication).",
        "presentation": {
            "explanation": "喺呢一課（辦公室溝通同電郵 (Workplace Communication) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋辦公室溝通同電郵 (Workplace Communication)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (20.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (20.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (20.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 辦公室溝通同電郵 (Workplace Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「辦公室溝通同電郵 (Workplace Communication)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (20.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (20.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (20.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「職場辦公同商務電郵 (Workplace & Business)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (20.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (20.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (20.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「辦公室溝通同電郵 (Workplace Communication)」嘅日常商務與生活習慣（考核 20-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (20.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (20.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (20.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («開會_20_2»):",
                    "acceptedAnswers": [
                        "開會_20_2"
                    ],
                    "explanation": "The target keyword was: 【開會_20_2】"
                }
            ]
        }
    },
    "hk-u20-l3": {
        "id": "hk-u20-l3",
        "subject": "cantonese",
        "unit": 20,
        "lessonNumber": 3,
        "title": "職場辦公同商務電郵 (Workplace & Business) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 辦公室溝通同電郵 (Workplace Communication).",
        "presentation": {
            "explanation": "喺呢一課（辦公室溝通同電郵 (Workplace Communication) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋辦公室溝通同電郵 (Workplace Communication)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (20.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (20.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (20.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 辦公室溝通同電郵 (Workplace Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「辦公室溝通同電郵 (Workplace Communication)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (20.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (20.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (20.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「職場辦公同商務電郵 (Workplace & Business)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (20.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (20.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (20.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「辦公室溝通同電郵 (Workplace Communication)」嘅日常商務與生活習慣（考核 20-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (20.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (20.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (20.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («開會_20_3»):",
                    "acceptedAnswers": [
                        "開會_20_3"
                    ],
                    "explanation": "The target keyword was: 【開會_20_3】"
                }
            ]
        }
    },
    "hk-u20-l4": {
        "id": "hk-u20-l4",
        "subject": "cantonese",
        "unit": 20,
        "lessonNumber": 4,
        "title": "職場辦公同商務電郵 (Workplace & Business) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 辦公室溝通同電郵 (Workplace Communication).",
        "presentation": {
            "explanation": "喺呢一課（辦公室溝通同電郵 (Workplace Communication) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋辦公室溝通同電郵 (Workplace Communication)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (20.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (20.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (20.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 辦公室溝通同電郵 (Workplace Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「辦公室溝通同電郵 (Workplace Communication)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (20.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (20.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (20.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「職場辦公同商務電郵 (Workplace & Business)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (20.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (20.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (20.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「辦公室溝通同電郵 (Workplace Communication)」嘅日常商務與生活習慣（考核 20-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (20.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (20.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (20.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («開會_20_4»):",
                    "acceptedAnswers": [
                        "開會_20_4"
                    ],
                    "explanation": "The target keyword was: 【開會_20_4】"
                }
            ]
        }
    },
    "hk-u20-l5": {
        "id": "hk-u20-l5",
        "subject": "cantonese",
        "unit": 20,
        "lessonNumber": 5,
        "title": "職場辦公同商務電郵 (Workplace & Business) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 辦公室溝通同電郵 (Workplace Communication).",
        "presentation": {
            "explanation": "喺呢一課（辦公室溝通同電郵 (Workplace Communication) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋辦公室溝通同電郵 (Workplace Communication)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (20.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (20.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (20.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 辦公室溝通同電郵 (Workplace Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「辦公室溝通同電郵 (Workplace Communication)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (20.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (20.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (20.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「職場辦公同商務電郵 (Workplace & Business)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (20.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (20.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (20.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「辦公室溝通同電郵 (Workplace Communication)」嘅日常商務與生活習慣（考核 20-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (20.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (20.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (20.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («開會_20_5»):",
                    "acceptedAnswers": [
                        "開會_20_5"
                    ],
                    "explanation": "The target keyword was: 【開會_20_5】"
                }
            ]
        }
    },
    "hk-u21-l1": {
        "id": "hk-u21-l1",
        "subject": "cantonese",
        "unit": 21,
        "lessonNumber": 1,
        "title": "睇醫生同健康醫療 (Medical Consultations) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 睇醫生同身體狀況 (Medical Consultations).",
        "presentation": {
            "explanation": "喺呢一課（睇醫生同身體狀況 (Medical Consultations) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋睇醫生同身體狀況 (Medical Consultations)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (21.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (21.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (21.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 睇醫生同身體狀況 (Medical Consultations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「睇醫生同身體狀況 (Medical Consultations)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (21.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (21.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (21.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「睇醫生同健康醫療 (Medical Consultations)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (21.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (21.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (21.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「睇醫生同身體狀況 (Medical Consultations)」嘅日常商務與生活習慣（考核 21-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (21.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (21.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (21.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («睇醫生_21_1»):",
                    "acceptedAnswers": [
                        "睇醫生_21_1"
                    ],
                    "explanation": "The target keyword was: 【睇醫生_21_1】"
                }
            ]
        }
    },
    "hk-u21-l2": {
        "id": "hk-u21-l2",
        "subject": "cantonese",
        "unit": 21,
        "lessonNumber": 2,
        "title": "睇醫生同健康醫療 (Medical Consultations) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 睇醫生同身體狀況 (Medical Consultations).",
        "presentation": {
            "explanation": "喺呢一課（睇醫生同身體狀況 (Medical Consultations) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋睇醫生同身體狀況 (Medical Consultations)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (21.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (21.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (21.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 睇醫生同身體狀況 (Medical Consultations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「睇醫生同身體狀況 (Medical Consultations)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (21.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (21.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (21.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「睇醫生同健康醫療 (Medical Consultations)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (21.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (21.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (21.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「睇醫生同身體狀況 (Medical Consultations)」嘅日常商務與生活習慣（考核 21-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (21.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (21.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (21.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («睇醫生_21_2»):",
                    "acceptedAnswers": [
                        "睇醫生_21_2"
                    ],
                    "explanation": "The target keyword was: 【睇醫生_21_2】"
                }
            ]
        }
    },
    "hk-u21-l3": {
        "id": "hk-u21-l3",
        "subject": "cantonese",
        "unit": 21,
        "lessonNumber": 3,
        "title": "睇醫生同健康醫療 (Medical Consultations) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 睇醫生同身體狀況 (Medical Consultations).",
        "presentation": {
            "explanation": "喺呢一課（睇醫生同身體狀況 (Medical Consultations) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋睇醫生同身體狀況 (Medical Consultations)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (21.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (21.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (21.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 睇醫生同身體狀況 (Medical Consultations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「睇醫生同身體狀況 (Medical Consultations)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (21.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (21.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (21.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「睇醫生同健康醫療 (Medical Consultations)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (21.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (21.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (21.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「睇醫生同身體狀況 (Medical Consultations)」嘅日常商務與生活習慣（考核 21-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (21.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (21.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (21.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («睇醫生_21_3»):",
                    "acceptedAnswers": [
                        "睇醫生_21_3"
                    ],
                    "explanation": "The target keyword was: 【睇醫生_21_3】"
                }
            ]
        }
    },
    "hk-u21-l4": {
        "id": "hk-u21-l4",
        "subject": "cantonese",
        "unit": 21,
        "lessonNumber": 4,
        "title": "睇醫生同健康醫療 (Medical Consultations) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 睇醫生同身體狀況 (Medical Consultations).",
        "presentation": {
            "explanation": "喺呢一課（睇醫生同身體狀況 (Medical Consultations) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋睇醫生同身體狀況 (Medical Consultations)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (21.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (21.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (21.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 睇醫生同身體狀況 (Medical Consultations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「睇醫生同身體狀況 (Medical Consultations)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (21.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (21.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (21.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「睇醫生同健康醫療 (Medical Consultations)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (21.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (21.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (21.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「睇醫生同身體狀況 (Medical Consultations)」嘅日常商務與生活習慣（考核 21-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (21.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (21.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (21.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («睇醫生_21_4»):",
                    "acceptedAnswers": [
                        "睇醫生_21_4"
                    ],
                    "explanation": "The target keyword was: 【睇醫生_21_4】"
                }
            ]
        }
    },
    "hk-u21-l5": {
        "id": "hk-u21-l5",
        "subject": "cantonese",
        "unit": 21,
        "lessonNumber": 5,
        "title": "睇醫生同健康醫療 (Medical Consultations) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 睇醫生同身體狀況 (Medical Consultations).",
        "presentation": {
            "explanation": "喺呢一課（睇醫生同身體狀況 (Medical Consultations) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋睇醫生同身體狀況 (Medical Consultations)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (21.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (21.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (21.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 睇醫生同身體狀況 (Medical Consultations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「睇醫生同身體狀況 (Medical Consultations)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (21.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (21.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (21.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「睇醫生同健康醫療 (Medical Consultations)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (21.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (21.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (21.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「睇醫生同身體狀況 (Medical Consultations)」嘅日常商務與生活習慣（考核 21-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (21.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (21.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (21.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («睇醫生_21_5»):",
                    "acceptedAnswers": [
                        "睇醫生_21_5"
                    ],
                    "explanation": "The target keyword was: 【睇醫生_21_5】"
                }
            ]
        }
    },
    "hk-u22-l1": {
        "id": "hk-u22-l1",
        "subject": "cantonese",
        "unit": 22,
        "lessonNumber": 1,
        "title": "房屋租賃同地產合約 (Real Estate & Tenancy) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 租屋地產同合約 (Tenancy & Real Estate).",
        "presentation": {
            "explanation": "喺呢一課（租屋地產同合約 (Tenancy & Real Estate) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋租屋地產同合約 (Tenancy & Real Estate)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (22.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (22.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (22.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 租屋地產同合約 (Tenancy & Real Estate)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「租屋地產同合約 (Tenancy & Real Estate)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (22.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (22.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (22.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「房屋租賃同地產合約 (Real Estate & Tenancy)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (22.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (22.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (22.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「租屋地產同合約 (Tenancy & Real Estate)」嘅日常商務與生活習慣（考核 22-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (22.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (22.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (22.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («租屋_22_1»):",
                    "acceptedAnswers": [
                        "租屋_22_1"
                    ],
                    "explanation": "The target keyword was: 【租屋_22_1】"
                }
            ]
        }
    },
    "hk-u22-l2": {
        "id": "hk-u22-l2",
        "subject": "cantonese",
        "unit": 22,
        "lessonNumber": 2,
        "title": "房屋租賃同地產合約 (Real Estate & Tenancy) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 租屋地產同合約 (Tenancy & Real Estate).",
        "presentation": {
            "explanation": "喺呢一課（租屋地產同合約 (Tenancy & Real Estate) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋租屋地產同合約 (Tenancy & Real Estate)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (22.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (22.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (22.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 租屋地產同合約 (Tenancy & Real Estate)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「租屋地產同合約 (Tenancy & Real Estate)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (22.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (22.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (22.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「房屋租賃同地產合約 (Real Estate & Tenancy)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (22.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (22.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (22.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「租屋地產同合約 (Tenancy & Real Estate)」嘅日常商務與生活習慣（考核 22-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (22.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (22.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (22.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («租屋_22_2»):",
                    "acceptedAnswers": [
                        "租屋_22_2"
                    ],
                    "explanation": "The target keyword was: 【租屋_22_2】"
                }
            ]
        }
    },
    "hk-u22-l3": {
        "id": "hk-u22-l3",
        "subject": "cantonese",
        "unit": 22,
        "lessonNumber": 3,
        "title": "房屋租賃同地產合約 (Real Estate & Tenancy) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 租屋地產同合約 (Tenancy & Real Estate).",
        "presentation": {
            "explanation": "喺呢一課（租屋地產同合約 (Tenancy & Real Estate) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋租屋地產同合約 (Tenancy & Real Estate)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (22.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (22.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (22.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 租屋地產同合約 (Tenancy & Real Estate)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「租屋地產同合約 (Tenancy & Real Estate)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (22.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (22.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (22.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「房屋租賃同地產合約 (Real Estate & Tenancy)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (22.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (22.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (22.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「租屋地產同合約 (Tenancy & Real Estate)」嘅日常商務與生活習慣（考核 22-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (22.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (22.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (22.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («租屋_22_3»):",
                    "acceptedAnswers": [
                        "租屋_22_3"
                    ],
                    "explanation": "The target keyword was: 【租屋_22_3】"
                }
            ]
        }
    },
    "hk-u22-l4": {
        "id": "hk-u22-l4",
        "subject": "cantonese",
        "unit": 22,
        "lessonNumber": 4,
        "title": "房屋租賃同地產合約 (Real Estate & Tenancy) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 租屋地產同合約 (Tenancy & Real Estate).",
        "presentation": {
            "explanation": "喺呢一課（租屋地產同合約 (Tenancy & Real Estate) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋租屋地產同合約 (Tenancy & Real Estate)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (22.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (22.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (22.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 租屋地產同合約 (Tenancy & Real Estate)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「租屋地產同合約 (Tenancy & Real Estate)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (22.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (22.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (22.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「房屋租賃同地產合約 (Real Estate & Tenancy)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (22.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (22.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (22.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「租屋地產同合約 (Tenancy & Real Estate)」嘅日常商務與生活習慣（考核 22-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (22.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (22.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (22.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («租屋_22_4»):",
                    "acceptedAnswers": [
                        "租屋_22_4"
                    ],
                    "explanation": "The target keyword was: 【租屋_22_4】"
                }
            ]
        }
    },
    "hk-u22-l5": {
        "id": "hk-u22-l5",
        "subject": "cantonese",
        "unit": 22,
        "lessonNumber": 5,
        "title": "房屋租賃同地產合約 (Real Estate & Tenancy) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 租屋地產同合約 (Tenancy & Real Estate).",
        "presentation": {
            "explanation": "喺呢一課（租屋地產同合約 (Tenancy & Real Estate) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋租屋地產同合約 (Tenancy & Real Estate)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (22.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (22.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (22.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 租屋地產同合約 (Tenancy & Real Estate)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「租屋地產同合約 (Tenancy & Real Estate)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (22.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (22.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (22.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「房屋租賃同地產合約 (Real Estate & Tenancy)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (22.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (22.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (22.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「租屋地產同合約 (Tenancy & Real Estate)」嘅日常商務與生活習慣（考核 22-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (22.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (22.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (22.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («租屋_22_5»):",
                    "acceptedAnswers": [
                        "租屋_22_5"
                    ],
                    "explanation": "The target keyword was: 【租屋_22_5】"
                }
            ]
        }
    },
    "hk-u23-l1": {
        "id": "hk-u23-l1",
        "subject": "cantonese",
        "unit": 23,
        "lessonNumber": 1,
        "title": "銀行投資同金融財經 (Banking & Finance) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 銀行開戶同投資理財 (Banking & Finance).",
        "presentation": {
            "explanation": "喺呢一課（銀行開戶同投資理財 (Banking & Finance) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋銀行開戶同投資理財 (Banking & Finance)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (23.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (23.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (23.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 銀行開戶同投資理財 (Banking & Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「銀行開戶同投資理財 (Banking & Finance)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (23.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (23.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (23.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「銀行投資同金融財經 (Banking & Finance)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (23.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (23.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (23.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「銀行開戶同投資理財 (Banking & Finance)」嘅日常商務與生活習慣（考核 23-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (23.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (23.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (23.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («銀行_23_1»):",
                    "acceptedAnswers": [
                        "銀行_23_1"
                    ],
                    "explanation": "The target keyword was: 【銀行_23_1】"
                }
            ]
        }
    },
    "hk-u23-l2": {
        "id": "hk-u23-l2",
        "subject": "cantonese",
        "unit": 23,
        "lessonNumber": 2,
        "title": "銀行投資同金融財經 (Banking & Finance) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 銀行開戶同投資理財 (Banking & Finance).",
        "presentation": {
            "explanation": "喺呢一課（銀行開戶同投資理財 (Banking & Finance) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋銀行開戶同投資理財 (Banking & Finance)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (23.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (23.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (23.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 銀行開戶同投資理財 (Banking & Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「銀行開戶同投資理財 (Banking & Finance)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (23.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (23.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (23.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「銀行投資同金融財經 (Banking & Finance)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (23.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (23.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (23.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「銀行開戶同投資理財 (Banking & Finance)」嘅日常商務與生活習慣（考核 23-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (23.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (23.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (23.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («銀行_23_2»):",
                    "acceptedAnswers": [
                        "銀行_23_2"
                    ],
                    "explanation": "The target keyword was: 【銀行_23_2】"
                }
            ]
        }
    },
    "hk-u23-l3": {
        "id": "hk-u23-l3",
        "subject": "cantonese",
        "unit": 23,
        "lessonNumber": 3,
        "title": "銀行投資同金融財經 (Banking & Finance) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 銀行開戶同投資理財 (Banking & Finance).",
        "presentation": {
            "explanation": "喺呢一課（銀行開戶同投資理財 (Banking & Finance) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋銀行開戶同投資理財 (Banking & Finance)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (23.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (23.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (23.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 銀行開戶同投資理財 (Banking & Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「銀行開戶同投資理財 (Banking & Finance)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (23.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (23.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (23.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「銀行投資同金融財經 (Banking & Finance)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (23.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (23.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (23.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「銀行開戶同投資理財 (Banking & Finance)」嘅日常商務與生活習慣（考核 23-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (23.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (23.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (23.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («銀行_23_3»):",
                    "acceptedAnswers": [
                        "銀行_23_3"
                    ],
                    "explanation": "The target keyword was: 【銀行_23_3】"
                }
            ]
        }
    },
    "hk-u23-l4": {
        "id": "hk-u23-l4",
        "subject": "cantonese",
        "unit": 23,
        "lessonNumber": 4,
        "title": "銀行投資同金融財經 (Banking & Finance) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 銀行開戶同投資理財 (Banking & Finance).",
        "presentation": {
            "explanation": "喺呢一課（銀行開戶同投資理財 (Banking & Finance) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋銀行開戶同投資理財 (Banking & Finance)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (23.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (23.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (23.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 銀行開戶同投資理財 (Banking & Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「銀行開戶同投資理財 (Banking & Finance)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (23.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (23.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (23.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「銀行投資同金融財經 (Banking & Finance)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (23.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (23.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (23.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「銀行開戶同投資理財 (Banking & Finance)」嘅日常商務與生活習慣（考核 23-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (23.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (23.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (23.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («銀行_23_4»):",
                    "acceptedAnswers": [
                        "銀行_23_4"
                    ],
                    "explanation": "The target keyword was: 【銀行_23_4】"
                }
            ]
        }
    },
    "hk-u23-l5": {
        "id": "hk-u23-l5",
        "subject": "cantonese",
        "unit": 23,
        "lessonNumber": 5,
        "title": "銀行投資同金融財經 (Banking & Finance) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 銀行開戶同投資理財 (Banking & Finance).",
        "presentation": {
            "explanation": "喺呢一課（銀行開戶同投資理財 (Banking & Finance) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋銀行開戶同投資理財 (Banking & Finance)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (23.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (23.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (23.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 銀行開戶同投資理財 (Banking & Finance)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「銀行開戶同投資理財 (Banking & Finance)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (23.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (23.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (23.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「銀行投資同金融財經 (Banking & Finance)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (23.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (23.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (23.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「銀行開戶同投資理財 (Banking & Finance)」嘅日常商務與生活習慣（考核 23-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (23.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (23.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (23.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («銀行_23_5»):",
                    "acceptedAnswers": [
                        "銀行_23_5"
                    ],
                    "explanation": "The target keyword was: 【銀行_23_5】"
                }
            ]
        }
    },
    "hk-u24-l1": {
        "id": "hk-u24-l1",
        "subject": "cantonese",
        "unit": 24,
        "lessonNumber": 1,
        "title": "廣東歌同香港影視文化 (Canto-pop & Cinema) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 廣東歌同影視藝術 (Canto-pop & Film).",
        "presentation": {
            "explanation": "喺呢一課（廣東歌同影視藝術 (Canto-pop & Film) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋廣東歌同影視藝術 (Canto-pop & Film)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (24.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (24.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (24.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 廣東歌同影視藝術 (Canto-pop & Film)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「廣東歌同影視藝術 (Canto-pop & Film)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (24.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (24.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (24.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「廣東歌同香港影視文化 (Canto-pop & Cinema)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (24.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (24.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (24.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「廣東歌同影視藝術 (Canto-pop & Film)」嘅日常商務與生活習慣（考核 24-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (24.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (24.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (24.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («廣東歌_24_1»):",
                    "acceptedAnswers": [
                        "廣東歌_24_1"
                    ],
                    "explanation": "The target keyword was: 【廣東歌_24_1】"
                }
            ]
        }
    },
    "hk-u24-l2": {
        "id": "hk-u24-l2",
        "subject": "cantonese",
        "unit": 24,
        "lessonNumber": 2,
        "title": "廣東歌同香港影視文化 (Canto-pop & Cinema) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 廣東歌同影視藝術 (Canto-pop & Film).",
        "presentation": {
            "explanation": "喺呢一課（廣東歌同影視藝術 (Canto-pop & Film) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋廣東歌同影視藝術 (Canto-pop & Film)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (24.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (24.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (24.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 廣東歌同影視藝術 (Canto-pop & Film)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「廣東歌同影視藝術 (Canto-pop & Film)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (24.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (24.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (24.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「廣東歌同香港影視文化 (Canto-pop & Cinema)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (24.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (24.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (24.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「廣東歌同影視藝術 (Canto-pop & Film)」嘅日常商務與生活習慣（考核 24-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (24.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (24.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (24.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («廣東歌_24_2»):",
                    "acceptedAnswers": [
                        "廣東歌_24_2"
                    ],
                    "explanation": "The target keyword was: 【廣東歌_24_2】"
                }
            ]
        }
    },
    "hk-u24-l3": {
        "id": "hk-u24-l3",
        "subject": "cantonese",
        "unit": 24,
        "lessonNumber": 3,
        "title": "廣東歌同香港影視文化 (Canto-pop & Cinema) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 廣東歌同影視藝術 (Canto-pop & Film).",
        "presentation": {
            "explanation": "喺呢一課（廣東歌同影視藝術 (Canto-pop & Film) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋廣東歌同影視藝術 (Canto-pop & Film)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (24.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (24.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (24.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 廣東歌同影視藝術 (Canto-pop & Film)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「廣東歌同影視藝術 (Canto-pop & Film)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (24.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (24.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (24.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「廣東歌同香港影視文化 (Canto-pop & Cinema)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (24.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (24.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (24.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「廣東歌同影視藝術 (Canto-pop & Film)」嘅日常商務與生活習慣（考核 24-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (24.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (24.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (24.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («廣東歌_24_3»):",
                    "acceptedAnswers": [
                        "廣東歌_24_3"
                    ],
                    "explanation": "The target keyword was: 【廣東歌_24_3】"
                }
            ]
        }
    },
    "hk-u24-l4": {
        "id": "hk-u24-l4",
        "subject": "cantonese",
        "unit": 24,
        "lessonNumber": 4,
        "title": "廣東歌同香港影視文化 (Canto-pop & Cinema) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 廣東歌同影視藝術 (Canto-pop & Film).",
        "presentation": {
            "explanation": "喺呢一課（廣東歌同影視藝術 (Canto-pop & Film) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋廣東歌同影視藝術 (Canto-pop & Film)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (24.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (24.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (24.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 廣東歌同影視藝術 (Canto-pop & Film)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「廣東歌同影視藝術 (Canto-pop & Film)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (24.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (24.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (24.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「廣東歌同香港影視文化 (Canto-pop & Cinema)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (24.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (24.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (24.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「廣東歌同影視藝術 (Canto-pop & Film)」嘅日常商務與生活習慣（考核 24-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (24.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (24.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (24.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («廣東歌_24_4»):",
                    "acceptedAnswers": [
                        "廣東歌_24_4"
                    ],
                    "explanation": "The target keyword was: 【廣東歌_24_4】"
                }
            ]
        }
    },
    "hk-u24-l5": {
        "id": "hk-u24-l5",
        "subject": "cantonese",
        "unit": 24,
        "lessonNumber": 5,
        "title": "廣東歌同香港影視文化 (Canto-pop & Cinema) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 廣東歌同影視藝術 (Canto-pop & Film).",
        "presentation": {
            "explanation": "喺呢一課（廣東歌同影視藝術 (Canto-pop & Film) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋廣東歌同影視藝術 (Canto-pop & Film)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (24.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (24.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (24.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 廣東歌同影視藝術 (Canto-pop & Film)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「廣東歌同影視藝術 (Canto-pop & Film)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (24.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (24.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (24.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「廣東歌同香港影視文化 (Canto-pop & Cinema)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (24.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (24.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (24.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「廣東歌同影視藝術 (Canto-pop & Film)」嘅日常商務與生活習慣（考核 24-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (24.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (24.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (24.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («廣東歌_24_5»):",
                    "acceptedAnswers": [
                        "廣東歌_24_5"
                    ],
                    "explanation": "The target keyword was: 【廣東歌_24_5】"
                }
            ]
        }
    },
    "hk-u25-l1": {
        "id": "hk-u25-l1",
        "subject": "cantonese",
        "unit": 25,
        "lessonNumber": 1,
        "title": "香港潮語同網絡文化 (Colloquial & Slang) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of 地道香港潮語 (Colloquial HK Slang).",
        "presentation": {
            "explanation": "喺呢一課（地道香港潮語 (Colloquial HK Slang) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋地道香港潮語 (Colloquial HK Slang)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (25.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (25.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (25.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 地道香港潮語 (Colloquial HK Slang)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「地道香港潮語 (Colloquial HK Slang)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (25.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (25.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (25.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「香港潮語同網絡文化 (Colloquial & Slang)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (25.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (25.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (25.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「地道香港潮語 (Colloquial HK Slang)」嘅日常商務與生活習慣（考核 25-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (25.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (25.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (25.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («潮語_25_1»):",
                    "acceptedAnswers": [
                        "潮語_25_1"
                    ],
                    "explanation": "The target keyword was: 【潮語_25_1】"
                }
            ]
        }
    },
    "hk-u25-l2": {
        "id": "hk-u25-l2",
        "subject": "cantonese",
        "unit": 25,
        "lessonNumber": 2,
        "title": "香港潮語同網絡文化 (Colloquial & Slang) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of 地道香港潮語 (Colloquial HK Slang).",
        "presentation": {
            "explanation": "喺呢一課（地道香港潮語 (Colloquial HK Slang) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋地道香港潮語 (Colloquial HK Slang)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (25.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (25.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (25.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 地道香港潮語 (Colloquial HK Slang)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「地道香港潮語 (Colloquial HK Slang)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (25.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (25.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (25.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「香港潮語同網絡文化 (Colloquial & Slang)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (25.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (25.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (25.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「地道香港潮語 (Colloquial HK Slang)」嘅日常商務與生活習慣（考核 25-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (25.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (25.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (25.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («潮語_25_2»):",
                    "acceptedAnswers": [
                        "潮語_25_2"
                    ],
                    "explanation": "The target keyword was: 【潮語_25_2】"
                }
            ]
        }
    },
    "hk-u25-l3": {
        "id": "hk-u25-l3",
        "subject": "cantonese",
        "unit": 25,
        "lessonNumber": 3,
        "title": "香港潮語同網絡文化 (Colloquial & Slang) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of 地道香港潮語 (Colloquial HK Slang).",
        "presentation": {
            "explanation": "喺呢一課（地道香港潮語 (Colloquial HK Slang) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋地道香港潮語 (Colloquial HK Slang)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (25.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (25.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (25.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 地道香港潮語 (Colloquial HK Slang)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「地道香港潮語 (Colloquial HK Slang)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (25.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (25.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (25.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「香港潮語同網絡文化 (Colloquial & Slang)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (25.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (25.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (25.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「地道香港潮語 (Colloquial HK Slang)」嘅日常商務與生活習慣（考核 25-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (25.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (25.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (25.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («潮語_25_3»):",
                    "acceptedAnswers": [
                        "潮語_25_3"
                    ],
                    "explanation": "The target keyword was: 【潮語_25_3】"
                }
            ]
        }
    },
    "hk-u25-l4": {
        "id": "hk-u25-l4",
        "subject": "cantonese",
        "unit": 25,
        "lessonNumber": 4,
        "title": "香港潮語同網絡文化 (Colloquial & Slang) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of 地道香港潮語 (Colloquial HK Slang).",
        "presentation": {
            "explanation": "喺呢一課（地道香港潮語 (Colloquial HK Slang) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋地道香港潮語 (Colloquial HK Slang)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (25.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (25.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (25.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 地道香港潮語 (Colloquial HK Slang)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「地道香港潮語 (Colloquial HK Slang)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (25.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (25.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (25.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「香港潮語同網絡文化 (Colloquial & Slang)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (25.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (25.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (25.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「地道香港潮語 (Colloquial HK Slang)」嘅日常商務與生活習慣（考核 25-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (25.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (25.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (25.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («潮語_25_4»):",
                    "acceptedAnswers": [
                        "潮語_25_4"
                    ],
                    "explanation": "The target keyword was: 【潮語_25_4】"
                }
            ]
        }
    },
    "hk-u25-l5": {
        "id": "hk-u25-l5",
        "subject": "cantonese",
        "unit": 25,
        "lessonNumber": 5,
        "title": "香港潮語同網絡文化 (Colloquial & Slang) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of 地道香港潮語 (Colloquial HK Slang).",
        "presentation": {
            "explanation": "喺呢一課（地道香港潮語 (Colloquial HK Slang) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋地道香港潮語 (Colloquial HK Slang)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (25.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (25.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (25.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 地道香港潮語 (Colloquial HK Slang)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「地道香港潮語 (Colloquial HK Slang)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (25.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (25.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (25.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「香港潮語同網絡文化 (Colloquial & Slang)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (25.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (25.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (25.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「地道香港潮語 (Colloquial HK Slang)」嘅日常商務與生活習慣（考核 25-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (25.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (25.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (25.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («潮語_25_5»):",
                    "acceptedAnswers": [
                        "潮語_25_5"
                    ],
                    "explanation": "The target keyword was: 【潮語_25_5】"
                }
            ]
        }
    },
    "hk-u26-l1": {
        "id": "hk-u26-l1",
        "subject": "cantonese",
        "unit": 26,
        "lessonNumber": 1,
        "title": "新聞報道同社會時事 (Journalism & Public Affairs) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of 新聞報道同社會時事 (News & Current Affairs).",
        "presentation": {
            "explanation": "喺呢一課（新聞報道同社會時事 (News & Current Affairs) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋新聞報道同社會時事 (News & Current Affairs)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (26.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (26.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (26.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 新聞報道同社會時事 (News & Current Affairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「新聞報道同社會時事 (News & Current Affairs)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (26.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (26.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (26.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「新聞報道同社會時事 (Journalism & Public Affairs)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (26.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (26.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (26.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「新聞報道同社會時事 (News & Current Affairs)」嘅日常商務與生活習慣（考核 26-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (26.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (26.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (26.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («新聞_26_1»):",
                    "acceptedAnswers": [
                        "新聞_26_1"
                    ],
                    "explanation": "The target keyword was: 【新聞_26_1】"
                }
            ]
        }
    },
    "hk-u26-l2": {
        "id": "hk-u26-l2",
        "subject": "cantonese",
        "unit": 26,
        "lessonNumber": 2,
        "title": "新聞報道同社會時事 (Journalism & Public Affairs) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of 新聞報道同社會時事 (News & Current Affairs).",
        "presentation": {
            "explanation": "喺呢一課（新聞報道同社會時事 (News & Current Affairs) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋新聞報道同社會時事 (News & Current Affairs)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (26.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (26.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (26.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 新聞報道同社會時事 (News & Current Affairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「新聞報道同社會時事 (News & Current Affairs)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (26.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (26.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (26.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「新聞報道同社會時事 (Journalism & Public Affairs)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (26.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (26.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (26.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「新聞報道同社會時事 (News & Current Affairs)」嘅日常商務與生活習慣（考核 26-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (26.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (26.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (26.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («新聞_26_2»):",
                    "acceptedAnswers": [
                        "新聞_26_2"
                    ],
                    "explanation": "The target keyword was: 【新聞_26_2】"
                }
            ]
        }
    },
    "hk-u26-l3": {
        "id": "hk-u26-l3",
        "subject": "cantonese",
        "unit": 26,
        "lessonNumber": 3,
        "title": "新聞報道同社會時事 (Journalism & Public Affairs) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of 新聞報道同社會時事 (News & Current Affairs).",
        "presentation": {
            "explanation": "喺呢一課（新聞報道同社會時事 (News & Current Affairs) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋新聞報道同社會時事 (News & Current Affairs)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (26.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (26.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (26.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 新聞報道同社會時事 (News & Current Affairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「新聞報道同社會時事 (News & Current Affairs)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (26.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (26.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (26.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「新聞報道同社會時事 (Journalism & Public Affairs)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (26.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (26.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (26.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「新聞報道同社會時事 (News & Current Affairs)」嘅日常商務與生活習慣（考核 26-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (26.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (26.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (26.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («新聞_26_3»):",
                    "acceptedAnswers": [
                        "新聞_26_3"
                    ],
                    "explanation": "The target keyword was: 【新聞_26_3】"
                }
            ]
        }
    },
    "hk-u26-l4": {
        "id": "hk-u26-l4",
        "subject": "cantonese",
        "unit": 26,
        "lessonNumber": 4,
        "title": "新聞報道同社會時事 (Journalism & Public Affairs) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of 新聞報道同社會時事 (News & Current Affairs).",
        "presentation": {
            "explanation": "喺呢一課（新聞報道同社會時事 (News & Current Affairs) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋新聞報道同社會時事 (News & Current Affairs)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (26.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (26.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (26.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 新聞報道同社會時事 (News & Current Affairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「新聞報道同社會時事 (News & Current Affairs)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (26.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (26.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (26.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「新聞報道同社會時事 (Journalism & Public Affairs)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (26.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (26.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (26.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「新聞報道同社會時事 (News & Current Affairs)」嘅日常商務與生活習慣（考核 26-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (26.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (26.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (26.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («新聞_26_4»):",
                    "acceptedAnswers": [
                        "新聞_26_4"
                    ],
                    "explanation": "The target keyword was: 【新聞_26_4】"
                }
            ]
        }
    },
    "hk-u26-l5": {
        "id": "hk-u26-l5",
        "subject": "cantonese",
        "unit": 26,
        "lessonNumber": 5,
        "title": "新聞報道同社會時事 (Journalism & Public Affairs) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of 新聞報道同社會時事 (News & Current Affairs).",
        "presentation": {
            "explanation": "喺呢一課（新聞報道同社會時事 (News & Current Affairs) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋新聞報道同社會時事 (News & Current Affairs)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (26.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (26.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (26.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 新聞報道同社會時事 (News & Current Affairs)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「新聞報道同社會時事 (News & Current Affairs)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (26.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (26.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (26.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「新聞報道同社會時事 (Journalism & Public Affairs)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (26.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (26.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (26.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「新聞報道同社會時事 (News & Current Affairs)」嘅日常商務與生活習慣（考核 26-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (26.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (26.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (26.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («新聞_26_5»):",
                    "acceptedAnswers": [
                        "新聞_26_5"
                    ],
                    "explanation": "The target keyword was: 【新聞_26_5】"
                }
            ]
        }
    },
    "hk-u27-l1": {
        "id": "hk-u27-l1",
        "subject": "cantonese",
        "unit": 27,
        "lessonNumber": 1,
        "title": "法律訴訟同商業合約 (Legal Terminology) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of 法律訴訟同合約條款 (Legal Terminology).",
        "presentation": {
            "explanation": "喺呢一課（法律訴訟同合約條款 (Legal Terminology) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋法律訴訟同合約條款 (Legal Terminology)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (27.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (27.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (27.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 法律訴訟同合約條款 (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「法律訴訟同合約條款 (Legal Terminology)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (27.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (27.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (27.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「法律訴訟同商業合約 (Legal Terminology)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (27.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (27.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (27.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「法律訴訟同合約條款 (Legal Terminology)」嘅日常商務與生活習慣（考核 27-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (27.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (27.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (27.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («法律_27_1»):",
                    "acceptedAnswers": [
                        "法律_27_1"
                    ],
                    "explanation": "The target keyword was: 【法律_27_1】"
                }
            ]
        }
    },
    "hk-u27-l2": {
        "id": "hk-u27-l2",
        "subject": "cantonese",
        "unit": 27,
        "lessonNumber": 2,
        "title": "法律訴訟同商業合約 (Legal Terminology) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of 法律訴訟同合約條款 (Legal Terminology).",
        "presentation": {
            "explanation": "喺呢一課（法律訴訟同合約條款 (Legal Terminology) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋法律訴訟同合約條款 (Legal Terminology)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (27.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (27.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (27.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 法律訴訟同合約條款 (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「法律訴訟同合約條款 (Legal Terminology)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (27.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (27.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (27.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「法律訴訟同商業合約 (Legal Terminology)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (27.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (27.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (27.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「法律訴訟同合約條款 (Legal Terminology)」嘅日常商務與生活習慣（考核 27-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (27.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (27.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (27.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («法律_27_2»):",
                    "acceptedAnswers": [
                        "法律_27_2"
                    ],
                    "explanation": "The target keyword was: 【法律_27_2】"
                }
            ]
        }
    },
    "hk-u27-l3": {
        "id": "hk-u27-l3",
        "subject": "cantonese",
        "unit": 27,
        "lessonNumber": 3,
        "title": "法律訴訟同商業合約 (Legal Terminology) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of 法律訴訟同合約條款 (Legal Terminology).",
        "presentation": {
            "explanation": "喺呢一課（法律訴訟同合約條款 (Legal Terminology) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋法律訴訟同合約條款 (Legal Terminology)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (27.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (27.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (27.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 法律訴訟同合約條款 (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「法律訴訟同合約條款 (Legal Terminology)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (27.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (27.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (27.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「法律訴訟同商業合約 (Legal Terminology)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (27.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (27.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (27.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「法律訴訟同合約條款 (Legal Terminology)」嘅日常商務與生活習慣（考核 27-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (27.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (27.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (27.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («法律_27_3»):",
                    "acceptedAnswers": [
                        "法律_27_3"
                    ],
                    "explanation": "The target keyword was: 【法律_27_3】"
                }
            ]
        }
    },
    "hk-u27-l4": {
        "id": "hk-u27-l4",
        "subject": "cantonese",
        "unit": 27,
        "lessonNumber": 4,
        "title": "法律訴訟同商業合約 (Legal Terminology) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of 法律訴訟同合約條款 (Legal Terminology).",
        "presentation": {
            "explanation": "喺呢一課（法律訴訟同合約條款 (Legal Terminology) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋法律訴訟同合約條款 (Legal Terminology)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (27.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (27.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (27.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 法律訴訟同合約條款 (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「法律訴訟同合約條款 (Legal Terminology)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (27.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (27.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (27.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「法律訴訟同商業合約 (Legal Terminology)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (27.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (27.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (27.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「法律訴訟同合約條款 (Legal Terminology)」嘅日常商務與生活習慣（考核 27-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (27.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (27.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (27.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («法律_27_4»):",
                    "acceptedAnswers": [
                        "法律_27_4"
                    ],
                    "explanation": "The target keyword was: 【法律_27_4】"
                }
            ]
        }
    },
    "hk-u27-l5": {
        "id": "hk-u27-l5",
        "subject": "cantonese",
        "unit": 27,
        "lessonNumber": 5,
        "title": "法律訴訟同商業合約 (Legal Terminology) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of 法律訴訟同合約條款 (Legal Terminology).",
        "presentation": {
            "explanation": "喺呢一課（法律訴訟同合約條款 (Legal Terminology) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋法律訴訟同合約條款 (Legal Terminology)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (27.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (27.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (27.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 法律訴訟同合約條款 (Legal Terminology)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「法律訴訟同合約條款 (Legal Terminology)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (27.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (27.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (27.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「法律訴訟同商業合約 (Legal Terminology)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (27.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (27.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (27.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「法律訴訟同合約條款 (Legal Terminology)」嘅日常商務與生活習慣（考核 27-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (27.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (27.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (27.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («法律_27_5»):",
                    "acceptedAnswers": [
                        "法律_27_5"
                    ],
                    "explanation": "The target keyword was: 【法律_27_5】"
                }
            ]
        }
    },
    "hk-u28-l1": {
        "id": "hk-u28-l1",
        "subject": "cantonese",
        "unit": 28,
        "lessonNumber": 1,
        "title": "傳統中醫同養生哲學 (TCM & Wellness) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of 中醫經絡同食療養生 (Traditional Chinese Medicine).",
        "presentation": {
            "explanation": "喺呢一課（中醫經絡同食療養生 (Traditional Chinese Medicine) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋中醫經絡同食療養生 (Traditional Chinese Medicine)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (28.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (28.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (28.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 中醫經絡同食療養生 (Traditional Chinese Medicine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「中醫經絡同食療養生 (Traditional Chinese Medicine)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (28.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (28.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (28.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「傳統中醫同養生哲學 (TCM & Wellness)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (28.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (28.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (28.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「中醫經絡同食療養生 (Traditional Chinese Medicine)」嘅日常商務與生活習慣（考核 28-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (28.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (28.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (28.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («中醫_28_1»):",
                    "acceptedAnswers": [
                        "中醫_28_1"
                    ],
                    "explanation": "The target keyword was: 【中醫_28_1】"
                }
            ]
        }
    },
    "hk-u28-l2": {
        "id": "hk-u28-l2",
        "subject": "cantonese",
        "unit": 28,
        "lessonNumber": 2,
        "title": "傳統中醫同養生哲學 (TCM & Wellness) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of 中醫經絡同食療養生 (Traditional Chinese Medicine).",
        "presentation": {
            "explanation": "喺呢一課（中醫經絡同食療養生 (Traditional Chinese Medicine) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋中醫經絡同食療養生 (Traditional Chinese Medicine)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (28.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (28.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (28.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 中醫經絡同食療養生 (Traditional Chinese Medicine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「中醫經絡同食療養生 (Traditional Chinese Medicine)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (28.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (28.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (28.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「傳統中醫同養生哲學 (TCM & Wellness)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (28.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (28.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (28.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「中醫經絡同食療養生 (Traditional Chinese Medicine)」嘅日常商務與生活習慣（考核 28-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (28.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (28.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (28.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («中醫_28_2»):",
                    "acceptedAnswers": [
                        "中醫_28_2"
                    ],
                    "explanation": "The target keyword was: 【中醫_28_2】"
                }
            ]
        }
    },
    "hk-u28-l3": {
        "id": "hk-u28-l3",
        "subject": "cantonese",
        "unit": 28,
        "lessonNumber": 3,
        "title": "傳統中醫同養生哲學 (TCM & Wellness) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of 中醫經絡同食療養生 (Traditional Chinese Medicine).",
        "presentation": {
            "explanation": "喺呢一課（中醫經絡同食療養生 (Traditional Chinese Medicine) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋中醫經絡同食療養生 (Traditional Chinese Medicine)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (28.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (28.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (28.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 中醫經絡同食療養生 (Traditional Chinese Medicine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「中醫經絡同食療養生 (Traditional Chinese Medicine)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (28.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (28.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (28.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「傳統中醫同養生哲學 (TCM & Wellness)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (28.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (28.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (28.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「中醫經絡同食療養生 (Traditional Chinese Medicine)」嘅日常商務與生活習慣（考核 28-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (28.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (28.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (28.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («中醫_28_3»):",
                    "acceptedAnswers": [
                        "中醫_28_3"
                    ],
                    "explanation": "The target keyword was: 【中醫_28_3】"
                }
            ]
        }
    },
    "hk-u28-l4": {
        "id": "hk-u28-l4",
        "subject": "cantonese",
        "unit": 28,
        "lessonNumber": 4,
        "title": "傳統中醫同養生哲學 (TCM & Wellness) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of 中醫經絡同食療養生 (Traditional Chinese Medicine).",
        "presentation": {
            "explanation": "喺呢一課（中醫經絡同食療養生 (Traditional Chinese Medicine) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋中醫經絡同食療養生 (Traditional Chinese Medicine)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (28.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (28.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (28.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 中醫經絡同食療養生 (Traditional Chinese Medicine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「中醫經絡同食療養生 (Traditional Chinese Medicine)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (28.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (28.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (28.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「傳統中醫同養生哲學 (TCM & Wellness)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (28.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (28.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (28.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「中醫經絡同食療養生 (Traditional Chinese Medicine)」嘅日常商務與生活習慣（考核 28-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (28.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (28.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (28.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («中醫_28_4»):",
                    "acceptedAnswers": [
                        "中醫_28_4"
                    ],
                    "explanation": "The target keyword was: 【中醫_28_4】"
                }
            ]
        }
    },
    "hk-u28-l5": {
        "id": "hk-u28-l5",
        "subject": "cantonese",
        "unit": 28,
        "lessonNumber": 5,
        "title": "傳統中醫同養生哲學 (TCM & Wellness) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of 中醫經絡同食療養生 (Traditional Chinese Medicine).",
        "presentation": {
            "explanation": "喺呢一課（中醫經絡同食療養生 (Traditional Chinese Medicine) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋中醫經絡同食療養生 (Traditional Chinese Medicine)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (28.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (28.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (28.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 中醫經絡同食療養生 (Traditional Chinese Medicine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「中醫經絡同食療養生 (Traditional Chinese Medicine)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (28.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (28.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (28.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「傳統中醫同養生哲學 (TCM & Wellness)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (28.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (28.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (28.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「中醫經絡同食療養生 (Traditional Chinese Medicine)」嘅日常商務與生活習慣（考核 28-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (28.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (28.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (28.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («中醫_28_5»):",
                    "acceptedAnswers": [
                        "中醫_28_5"
                    ],
                    "explanation": "The target keyword was: 【中醫_28_5】"
                }
            ]
        }
    },
    "hk-u29-l1": {
        "id": "hk-u29-l1",
        "subject": "cantonese",
        "unit": 29,
        "lessonNumber": 1,
        "title": "環境保護同都市規劃 (Ecology & Urban Planning) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of 環境保護同城市發展 (Ecology & Planning).",
        "presentation": {
            "explanation": "喺呢一課（環境保護同城市發展 (Ecology & Planning) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋環境保護同城市發展 (Ecology & Planning)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (29.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (29.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (29.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 環境保護同城市發展 (Ecology & Planning)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「環境保護同城市發展 (Ecology & Planning)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (29.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (29.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (29.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「環境保護同都市規劃 (Ecology & Urban Planning)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (29.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (29.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (29.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「環境保護同城市發展 (Ecology & Planning)」嘅日常商務與生活習慣（考核 29-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (29.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (29.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (29.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («環保_29_1»):",
                    "acceptedAnswers": [
                        "環保_29_1"
                    ],
                    "explanation": "The target keyword was: 【環保_29_1】"
                }
            ]
        }
    },
    "hk-u29-l2": {
        "id": "hk-u29-l2",
        "subject": "cantonese",
        "unit": 29,
        "lessonNumber": 2,
        "title": "環境保護同都市規劃 (Ecology & Urban Planning) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of 環境保護同城市發展 (Ecology & Planning).",
        "presentation": {
            "explanation": "喺呢一課（環境保護同城市發展 (Ecology & Planning) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋環境保護同城市發展 (Ecology & Planning)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (29.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (29.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (29.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 環境保護同城市發展 (Ecology & Planning)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「環境保護同城市發展 (Ecology & Planning)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (29.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (29.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (29.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「環境保護同都市規劃 (Ecology & Urban Planning)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (29.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (29.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (29.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「環境保護同城市發展 (Ecology & Planning)」嘅日常商務與生活習慣（考核 29-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (29.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (29.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (29.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («環保_29_2»):",
                    "acceptedAnswers": [
                        "環保_29_2"
                    ],
                    "explanation": "The target keyword was: 【環保_29_2】"
                }
            ]
        }
    },
    "hk-u29-l3": {
        "id": "hk-u29-l3",
        "subject": "cantonese",
        "unit": 29,
        "lessonNumber": 3,
        "title": "環境保護同都市規劃 (Ecology & Urban Planning) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of 環境保護同城市發展 (Ecology & Planning).",
        "presentation": {
            "explanation": "喺呢一課（環境保護同城市發展 (Ecology & Planning) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋環境保護同城市發展 (Ecology & Planning)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (29.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (29.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (29.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 環境保護同城市發展 (Ecology & Planning)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「環境保護同城市發展 (Ecology & Planning)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (29.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (29.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (29.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「環境保護同都市規劃 (Ecology & Urban Planning)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (29.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (29.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (29.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「環境保護同城市發展 (Ecology & Planning)」嘅日常商務與生活習慣（考核 29-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (29.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (29.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (29.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («環保_29_3»):",
                    "acceptedAnswers": [
                        "環保_29_3"
                    ],
                    "explanation": "The target keyword was: 【環保_29_3】"
                }
            ]
        }
    },
    "hk-u29-l4": {
        "id": "hk-u29-l4",
        "subject": "cantonese",
        "unit": 29,
        "lessonNumber": 4,
        "title": "環境保護同都市規劃 (Ecology & Urban Planning) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of 環境保護同城市發展 (Ecology & Planning).",
        "presentation": {
            "explanation": "喺呢一課（環境保護同城市發展 (Ecology & Planning) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋環境保護同城市發展 (Ecology & Planning)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (29.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (29.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (29.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 環境保護同城市發展 (Ecology & Planning)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「環境保護同城市發展 (Ecology & Planning)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (29.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (29.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (29.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「環境保護同都市規劃 (Ecology & Urban Planning)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (29.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (29.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (29.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「環境保護同城市發展 (Ecology & Planning)」嘅日常商務與生活習慣（考核 29-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (29.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (29.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (29.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («環保_29_4»):",
                    "acceptedAnswers": [
                        "環保_29_4"
                    ],
                    "explanation": "The target keyword was: 【環保_29_4】"
                }
            ]
        }
    },
    "hk-u29-l5": {
        "id": "hk-u29-l5",
        "subject": "cantonese",
        "unit": 29,
        "lessonNumber": 5,
        "title": "環境保護同都市規劃 (Ecology & Urban Planning) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of 環境保護同城市發展 (Ecology & Planning).",
        "presentation": {
            "explanation": "喺呢一課（環境保護同城市發展 (Ecology & Planning) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋環境保護同城市發展 (Ecology & Planning)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (29.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (29.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (29.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 環境保護同城市發展 (Ecology & Planning)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「環境保護同城市發展 (Ecology & Planning)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (29.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (29.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (29.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「環境保護同都市規劃 (Ecology & Urban Planning)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (29.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (29.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (29.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「環境保護同城市發展 (Ecology & Planning)」嘅日常商務與生活習慣（考核 29-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (29.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (29.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (29.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («環保_29_5»):",
                    "acceptedAnswers": [
                        "環保_29_5"
                    ],
                    "explanation": "The target keyword was: 【環保_29_5】"
                }
            ]
        }
    },
    "hk-u30-l1": {
        "id": "hk-u30-l1",
        "subject": "cantonese",
        "unit": 30,
        "lessonNumber": 1,
        "title": "粵劇藝術同傳統曲藝 (Cantonese Opera) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of 粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts).",
        "presentation": {
            "explanation": "喺呢一課（粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (30.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (30.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (30.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (30.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (30.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (30.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「粵劇藝術同傳統曲藝 (Cantonese Opera)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (30.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (30.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (30.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)」嘅日常商務與生活習慣（考核 30-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (30.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (30.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (30.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («粵劇_30_1»):",
                    "acceptedAnswers": [
                        "粵劇_30_1"
                    ],
                    "explanation": "The target keyword was: 【粵劇_30_1】"
                }
            ]
        }
    },
    "hk-u30-l2": {
        "id": "hk-u30-l2",
        "subject": "cantonese",
        "unit": 30,
        "lessonNumber": 2,
        "title": "粵劇藝術同傳統曲藝 (Cantonese Opera) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of 粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts).",
        "presentation": {
            "explanation": "喺呢一課（粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (30.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (30.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (30.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (30.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (30.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (30.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「粵劇藝術同傳統曲藝 (Cantonese Opera)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (30.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (30.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (30.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)」嘅日常商務與生活習慣（考核 30-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (30.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (30.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (30.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («粵劇_30_2»):",
                    "acceptedAnswers": [
                        "粵劇_30_2"
                    ],
                    "explanation": "The target keyword was: 【粵劇_30_2】"
                }
            ]
        }
    },
    "hk-u30-l3": {
        "id": "hk-u30-l3",
        "subject": "cantonese",
        "unit": 30,
        "lessonNumber": 3,
        "title": "粵劇藝術同傳統曲藝 (Cantonese Opera) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of 粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts).",
        "presentation": {
            "explanation": "喺呢一課（粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (30.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (30.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (30.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (30.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (30.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (30.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「粵劇藝術同傳統曲藝 (Cantonese Opera)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (30.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (30.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (30.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)」嘅日常商務與生活習慣（考核 30-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (30.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (30.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (30.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («粵劇_30_3»):",
                    "acceptedAnswers": [
                        "粵劇_30_3"
                    ],
                    "explanation": "The target keyword was: 【粵劇_30_3】"
                }
            ]
        }
    },
    "hk-u30-l4": {
        "id": "hk-u30-l4",
        "subject": "cantonese",
        "unit": 30,
        "lessonNumber": 4,
        "title": "粵劇藝術同傳統曲藝 (Cantonese Opera) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of 粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts).",
        "presentation": {
            "explanation": "喺呢一課（粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (30.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (30.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (30.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (30.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (30.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (30.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「粵劇藝術同傳統曲藝 (Cantonese Opera)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (30.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (30.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (30.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)」嘅日常商務與生活習慣（考核 30-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (30.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (30.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (30.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («粵劇_30_4»):",
                    "acceptedAnswers": [
                        "粵劇_30_4"
                    ],
                    "explanation": "The target keyword was: 【粵劇_30_4】"
                }
            ]
        }
    },
    "hk-u30-l5": {
        "id": "hk-u30-l5",
        "subject": "cantonese",
        "unit": 30,
        "lessonNumber": 5,
        "title": "粵劇藝術同傳統曲藝 (Cantonese Opera) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of 粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts).",
        "presentation": {
            "explanation": "喺呢一課（粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (30.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (30.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (30.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (30.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (30.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (30.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「粵劇藝術同傳統曲藝 (Cantonese Opera)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (30.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (30.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (30.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「粵劇戲曲同嶺南曲藝 (Cantonese Opera & Arts)」嘅日常商務與生活習慣（考核 30-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (30.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (30.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (30.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («粵劇_30_5»):",
                    "acceptedAnswers": [
                        "粵劇_30_5"
                    ],
                    "explanation": "The target keyword was: 【粵劇_30_5】"
                }
            ]
        }
    },
    "hk-u31-l1": {
        "id": "hk-u31-l1",
        "subject": "cantonese",
        "unit": 31,
        "lessonNumber": 1,
        "title": "嶺南歷史同民俗文化 (Lingnan History & Folk) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of 嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage).",
        "presentation": {
            "explanation": "喺呢一課（嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (31.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (31.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (31.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (31.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (31.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (31.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「嶺南歷史同民俗文化 (Lingnan History & Folk)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (31.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (31.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (31.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)」嘅日常商務與生活習慣（考核 31-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (31.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (31.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (31.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («嶺南_31_1»):",
                    "acceptedAnswers": [
                        "嶺南_31_1"
                    ],
                    "explanation": "The target keyword was: 【嶺南_31_1】"
                }
            ]
        }
    },
    "hk-u31-l2": {
        "id": "hk-u31-l2",
        "subject": "cantonese",
        "unit": 31,
        "lessonNumber": 2,
        "title": "嶺南歷史同民俗文化 (Lingnan History & Folk) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of 嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage).",
        "presentation": {
            "explanation": "喺呢一課（嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (31.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (31.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (31.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (31.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (31.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (31.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「嶺南歷史同民俗文化 (Lingnan History & Folk)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (31.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (31.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (31.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)」嘅日常商務與生活習慣（考核 31-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (31.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (31.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (31.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («嶺南_31_2»):",
                    "acceptedAnswers": [
                        "嶺南_31_2"
                    ],
                    "explanation": "The target keyword was: 【嶺南_31_2】"
                }
            ]
        }
    },
    "hk-u31-l3": {
        "id": "hk-u31-l3",
        "subject": "cantonese",
        "unit": 31,
        "lessonNumber": 3,
        "title": "嶺南歷史同民俗文化 (Lingnan History & Folk) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of 嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage).",
        "presentation": {
            "explanation": "喺呢一課（嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (31.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (31.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (31.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (31.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (31.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (31.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「嶺南歷史同民俗文化 (Lingnan History & Folk)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (31.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (31.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (31.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)」嘅日常商務與生活習慣（考核 31-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (31.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (31.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (31.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («嶺南_31_3»):",
                    "acceptedAnswers": [
                        "嶺南_31_3"
                    ],
                    "explanation": "The target keyword was: 【嶺南_31_3】"
                }
            ]
        }
    },
    "hk-u31-l4": {
        "id": "hk-u31-l4",
        "subject": "cantonese",
        "unit": 31,
        "lessonNumber": 4,
        "title": "嶺南歷史同民俗文化 (Lingnan History & Folk) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of 嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage).",
        "presentation": {
            "explanation": "喺呢一課（嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (31.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (31.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (31.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (31.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (31.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (31.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「嶺南歷史同民俗文化 (Lingnan History & Folk)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (31.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (31.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (31.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)」嘅日常商務與生活習慣（考核 31-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (31.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (31.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (31.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («嶺南_31_4»):",
                    "acceptedAnswers": [
                        "嶺南_31_4"
                    ],
                    "explanation": "The target keyword was: 【嶺南_31_4】"
                }
            ]
        }
    },
    "hk-u31-l5": {
        "id": "hk-u31-l5",
        "subject": "cantonese",
        "unit": 31,
        "lessonNumber": 5,
        "title": "嶺南歷史同民俗文化 (Lingnan History & Folk) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of 嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage).",
        "presentation": {
            "explanation": "喺呢一課（嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (31.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (31.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (31.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (31.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (31.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (31.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「嶺南歷史同民俗文化 (Lingnan History & Folk)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (31.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (31.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (31.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「嶺南歷史同傳統節慶 (Lingnan Folklore & Heritage)」嘅日常商務與生活習慣（考核 31-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (31.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (31.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (31.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («嶺南_31_5»):",
                    "acceptedAnswers": [
                        "嶺南_31_5"
                    ],
                    "explanation": "The target keyword was: 【嶺南_31_5】"
                }
            ]
        }
    },
    "hk-u32-l1": {
        "id": "hk-u32-l1",
        "subject": "cantonese",
        "unit": 32,
        "lessonNumber": 1,
        "title": "學術演講同深度論文 (Academic Research) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of 學術研討同論文發表 (Academic Research & Debates).",
        "presentation": {
            "explanation": "喺呢一課（學術研討同論文發表 (Academic Research & Debates) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋學術研討同論文發表 (Academic Research & Debates)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (32.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (32.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (32.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 學術研討同論文發表 (Academic Research & Debates)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「學術研討同論文發表 (Academic Research & Debates)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (32.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (32.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (32.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「學術演講同深度論文 (Academic Research)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (32.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (32.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (32.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「學術研討同論文發表 (Academic Research & Debates)」嘅日常商務與生活習慣（考核 32-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (32.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (32.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (32.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («論文_32_1»):",
                    "acceptedAnswers": [
                        "論文_32_1"
                    ],
                    "explanation": "The target keyword was: 【論文_32_1】"
                }
            ]
        }
    },
    "hk-u32-l2": {
        "id": "hk-u32-l2",
        "subject": "cantonese",
        "unit": 32,
        "lessonNumber": 2,
        "title": "學術演講同深度論文 (Academic Research) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of 學術研討同論文發表 (Academic Research & Debates).",
        "presentation": {
            "explanation": "喺呢一課（學術研討同論文發表 (Academic Research & Debates) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋學術研討同論文發表 (Academic Research & Debates)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (32.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (32.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (32.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 學術研討同論文發表 (Academic Research & Debates)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「學術研討同論文發表 (Academic Research & Debates)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (32.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (32.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (32.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「學術演講同深度論文 (Academic Research)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (32.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (32.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (32.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「學術研討同論文發表 (Academic Research & Debates)」嘅日常商務與生活習慣（考核 32-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (32.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (32.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (32.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («論文_32_2»):",
                    "acceptedAnswers": [
                        "論文_32_2"
                    ],
                    "explanation": "The target keyword was: 【論文_32_2】"
                }
            ]
        }
    },
    "hk-u32-l3": {
        "id": "hk-u32-l3",
        "subject": "cantonese",
        "unit": 32,
        "lessonNumber": 3,
        "title": "學術演講同深度論文 (Academic Research) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of 學術研討同論文發表 (Academic Research & Debates).",
        "presentation": {
            "explanation": "喺呢一課（學術研討同論文發表 (Academic Research & Debates) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋學術研討同論文發表 (Academic Research & Debates)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (32.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (32.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (32.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 學術研討同論文發表 (Academic Research & Debates)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「學術研討同論文發表 (Academic Research & Debates)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (32.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (32.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (32.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「學術演講同深度論文 (Academic Research)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (32.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (32.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (32.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「學術研討同論文發表 (Academic Research & Debates)」嘅日常商務與生活習慣（考核 32-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (32.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (32.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (32.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («論文_32_3»):",
                    "acceptedAnswers": [
                        "論文_32_3"
                    ],
                    "explanation": "The target keyword was: 【論文_32_3】"
                }
            ]
        }
    },
    "hk-u32-l4": {
        "id": "hk-u32-l4",
        "subject": "cantonese",
        "unit": 32,
        "lessonNumber": 4,
        "title": "學術演講同深度論文 (Academic Research) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of 學術研討同論文發表 (Academic Research & Debates).",
        "presentation": {
            "explanation": "喺呢一課（學術研討同論文發表 (Academic Research & Debates) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋學術研討同論文發表 (Academic Research & Debates)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (32.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (32.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (32.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 學術研討同論文發表 (Academic Research & Debates)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「學術研討同論文發表 (Academic Research & Debates)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (32.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (32.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (32.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「學術演講同深度論文 (Academic Research)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (32.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (32.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (32.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「學術研討同論文發表 (Academic Research & Debates)」嘅日常商務與生活習慣（考核 32-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (32.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (32.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (32.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («論文_32_4»):",
                    "acceptedAnswers": [
                        "論文_32_4"
                    ],
                    "explanation": "The target keyword was: 【論文_32_4】"
                }
            ]
        }
    },
    "hk-u32-l5": {
        "id": "hk-u32-l5",
        "subject": "cantonese",
        "unit": 32,
        "lessonNumber": 5,
        "title": "學術演講同深度論文 (Academic Research) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of 學術研討同論文發表 (Academic Research & Debates).",
        "presentation": {
            "explanation": "喺呢一課（學術研討同論文發表 (Academic Research & Debates) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋學術研討同論文發表 (Academic Research & Debates)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (32.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (32.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (32.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 學術研討同論文發表 (Academic Research & Debates)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「學術研討同論文發表 (Academic Research & Debates)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (32.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (32.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (32.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「學術演講同深度論文 (Academic Research)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (32.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (32.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (32.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「學術研討同論文發表 (Academic Research & Debates)」嘅日常商務與生活習慣（考核 32-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (32.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (32.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (32.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («論文_32_5»):",
                    "acceptedAnswers": [
                        "論文_32_5"
                    ],
                    "explanation": "The target keyword was: 【論文_32_5】"
                }
            ]
        }
    },
    "hk-u33-l1": {
        "id": "hk-u33-l1",
        "subject": "cantonese",
        "unit": 33,
        "lessonNumber": 1,
        "title": "國際外交同跨國商貿 (Diplomacy & Trade) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of 國際商貿同雙邊談判 (Global Trade Negotiations).",
        "presentation": {
            "explanation": "喺呢一課（國際商貿同雙邊談判 (Global Trade Negotiations) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋國際商貿同雙邊談判 (Global Trade Negotiations)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (33.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (33.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (33.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 國際商貿同雙邊談判 (Global Trade Negotiations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「國際商貿同雙邊談判 (Global Trade Negotiations)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (33.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (33.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (33.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「國際外交同跨國商貿 (Diplomacy & Trade)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (33.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (33.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (33.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「國際商貿同雙邊談判 (Global Trade Negotiations)」嘅日常商務與生活習慣（考核 33-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (33.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (33.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (33.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («貿易_33_1»):",
                    "acceptedAnswers": [
                        "貿易_33_1"
                    ],
                    "explanation": "The target keyword was: 【貿易_33_1】"
                }
            ]
        }
    },
    "hk-u33-l2": {
        "id": "hk-u33-l2",
        "subject": "cantonese",
        "unit": 33,
        "lessonNumber": 2,
        "title": "國際外交同跨國商貿 (Diplomacy & Trade) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of 國際商貿同雙邊談判 (Global Trade Negotiations).",
        "presentation": {
            "explanation": "喺呢一課（國際商貿同雙邊談判 (Global Trade Negotiations) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋國際商貿同雙邊談判 (Global Trade Negotiations)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (33.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (33.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (33.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 國際商貿同雙邊談判 (Global Trade Negotiations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「國際商貿同雙邊談判 (Global Trade Negotiations)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (33.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (33.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (33.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「國際外交同跨國商貿 (Diplomacy & Trade)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (33.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (33.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (33.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「國際商貿同雙邊談判 (Global Trade Negotiations)」嘅日常商務與生活習慣（考核 33-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (33.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (33.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (33.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («貿易_33_2»):",
                    "acceptedAnswers": [
                        "貿易_33_2"
                    ],
                    "explanation": "The target keyword was: 【貿易_33_2】"
                }
            ]
        }
    },
    "hk-u33-l3": {
        "id": "hk-u33-l3",
        "subject": "cantonese",
        "unit": 33,
        "lessonNumber": 3,
        "title": "國際外交同跨國商貿 (Diplomacy & Trade) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of 國際商貿同雙邊談判 (Global Trade Negotiations).",
        "presentation": {
            "explanation": "喺呢一課（國際商貿同雙邊談判 (Global Trade Negotiations) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋國際商貿同雙邊談判 (Global Trade Negotiations)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (33.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (33.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (33.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 國際商貿同雙邊談判 (Global Trade Negotiations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「國際商貿同雙邊談判 (Global Trade Negotiations)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (33.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (33.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (33.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「國際外交同跨國商貿 (Diplomacy & Trade)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (33.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (33.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (33.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「國際商貿同雙邊談判 (Global Trade Negotiations)」嘅日常商務與生活習慣（考核 33-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (33.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (33.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (33.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («貿易_33_3»):",
                    "acceptedAnswers": [
                        "貿易_33_3"
                    ],
                    "explanation": "The target keyword was: 【貿易_33_3】"
                }
            ]
        }
    },
    "hk-u33-l4": {
        "id": "hk-u33-l4",
        "subject": "cantonese",
        "unit": 33,
        "lessonNumber": 4,
        "title": "國際外交同跨國商貿 (Diplomacy & Trade) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of 國際商貿同雙邊談判 (Global Trade Negotiations).",
        "presentation": {
            "explanation": "喺呢一課（國際商貿同雙邊談判 (Global Trade Negotiations) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋國際商貿同雙邊談判 (Global Trade Negotiations)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (33.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (33.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (33.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 國際商貿同雙邊談判 (Global Trade Negotiations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「國際商貿同雙邊談判 (Global Trade Negotiations)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (33.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (33.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (33.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「國際外交同跨國商貿 (Diplomacy & Trade)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (33.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (33.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (33.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「國際商貿同雙邊談判 (Global Trade Negotiations)」嘅日常商務與生活習慣（考核 33-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (33.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (33.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (33.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («貿易_33_4»):",
                    "acceptedAnswers": [
                        "貿易_33_4"
                    ],
                    "explanation": "The target keyword was: 【貿易_33_4】"
                }
            ]
        }
    },
    "hk-u33-l5": {
        "id": "hk-u33-l5",
        "subject": "cantonese",
        "unit": 33,
        "lessonNumber": 5,
        "title": "國際外交同跨國商貿 (Diplomacy & Trade) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of 國際商貿同雙邊談判 (Global Trade Negotiations).",
        "presentation": {
            "explanation": "喺呢一課（國際商貿同雙邊談判 (Global Trade Negotiations) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋國際商貿同雙邊談判 (Global Trade Negotiations)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (33.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (33.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (33.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 國際商貿同雙邊談判 (Global Trade Negotiations)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「國際商貿同雙邊談判 (Global Trade Negotiations)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (33.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (33.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (33.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「國際外交同跨國商貿 (Diplomacy & Trade)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (33.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (33.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (33.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「國際商貿同雙邊談判 (Global Trade Negotiations)」嘅日常商務與生活習慣（考核 33-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (33.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (33.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (33.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («貿易_33_5»):",
                    "acceptedAnswers": [
                        "貿易_33_5"
                    ],
                    "explanation": "The target keyword was: 【貿易_33_5】"
                }
            ]
        }
    },
    "hk-u34-l1": {
        "id": "hk-u34-l1",
        "subject": "cantonese",
        "unit": 34,
        "lessonNumber": 1,
        "title": "高級粵語綜合修辭與鑑賞 (C2 Capstone Mastery) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of 高級粵語修辭鑑賞 (C2 Capstone Mastery).",
        "presentation": {
            "explanation": "喺呢一課（高級粵語修辭鑑賞 (C2 Capstone Mastery) - 第1部分）入面，我哋會探討廣東話嘅核心語用語境同埋高級粵語修辭鑑賞 (C2 Capstone Mastery)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (34.1.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (34.1.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (34.1.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 高級粵語修辭鑑賞 (C2 Capstone Mastery)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「高級粵語修辭鑑賞 (C2 Capstone Mastery)」喺第1節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (34.1.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (34.1.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (34.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「高級粵語綜合修辭與鑑賞 (C2 Capstone Mastery)」語境嘅廣東話完整句子（練習 1）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (34.1.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (34.1.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (34.1.3)。"
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
                    "prompt": "邊句說話嚴格符合「高級粵語修辭鑑賞 (C2 Capstone Mastery)」嘅日常商務與生活習慣（考核 34-1）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (34.1.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (34.1.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (34.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («修辭_34_1»):",
                    "acceptedAnswers": [
                        "修辭_34_1"
                    ],
                    "explanation": "The target keyword was: 【修辭_34_1】"
                }
            ]
        }
    },
    "hk-u34-l2": {
        "id": "hk-u34-l2",
        "subject": "cantonese",
        "unit": 34,
        "lessonNumber": 2,
        "title": "高級粵語綜合修辭與鑑賞 (C2 Capstone Mastery) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of 高級粵語修辭鑑賞 (C2 Capstone Mastery).",
        "presentation": {
            "explanation": "喺呢一課（高級粵語修辭鑑賞 (C2 Capstone Mastery) - 第2部分）入面，我哋會探討廣東話嘅核心語用語境同埋高級粵語修辭鑑賞 (C2 Capstone Mastery)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (34.2.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (34.2.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (34.2.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 高級粵語修辭鑑賞 (C2 Capstone Mastery)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「高級粵語修辭鑑賞 (C2 Capstone Mastery)」喺第2節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (34.2.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (34.2.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (34.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「高級粵語綜合修辭與鑑賞 (C2 Capstone Mastery)」語境嘅廣東話完整句子（練習 2）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (34.2.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (34.2.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (34.2.3)。"
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
                    "prompt": "邊句說話嚴格符合「高級粵語修辭鑑賞 (C2 Capstone Mastery)」嘅日常商務與生活習慣（考核 34-2）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (34.2.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (34.2.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (34.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («修辭_34_2»):",
                    "acceptedAnswers": [
                        "修辭_34_2"
                    ],
                    "explanation": "The target keyword was: 【修辭_34_2】"
                }
            ]
        }
    },
    "hk-u34-l3": {
        "id": "hk-u34-l3",
        "subject": "cantonese",
        "unit": 34,
        "lessonNumber": 3,
        "title": "高級粵語綜合修辭與鑑賞 (C2 Capstone Mastery) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of 高級粵語修辭鑑賞 (C2 Capstone Mastery).",
        "presentation": {
            "explanation": "喺呢一課（高級粵語修辭鑑賞 (C2 Capstone Mastery) - 第3部分）入面，我哋會探討廣東話嘅核心語用語境同埋高級粵語修辭鑑賞 (C2 Capstone Mastery)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (34.3.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (34.3.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (34.3.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 高級粵語修辭鑑賞 (C2 Capstone Mastery)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「高級粵語修辭鑑賞 (C2 Capstone Mastery)」喺第3節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (34.3.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (34.3.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (34.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「高級粵語綜合修辭與鑑賞 (C2 Capstone Mastery)」語境嘅廣東話完整句子（練習 3）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (34.3.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (34.3.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (34.3.3)。"
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
                    "prompt": "邊句說話嚴格符合「高級粵語修辭鑑賞 (C2 Capstone Mastery)」嘅日常商務與生活習慣（考核 34-3）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (34.3.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (34.3.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (34.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («修辭_34_3»):",
                    "acceptedAnswers": [
                        "修辭_34_3"
                    ],
                    "explanation": "The target keyword was: 【修辭_34_3】"
                }
            ]
        }
    },
    "hk-u34-l4": {
        "id": "hk-u34-l4",
        "subject": "cantonese",
        "unit": 34,
        "lessonNumber": 4,
        "title": "高級粵語綜合修辭與鑑賞 (C2 Capstone Mastery) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of 高級粵語修辭鑑賞 (C2 Capstone Mastery).",
        "presentation": {
            "explanation": "喺呢一課（高級粵語修辭鑑賞 (C2 Capstone Mastery) - 第4部分）入面，我哋會探討廣東話嘅核心語用語境同埋高級粵語修辭鑑賞 (C2 Capstone Mastery)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (34.4.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (34.4.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (34.4.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 高級粵語修辭鑑賞 (C2 Capstone Mastery)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「高級粵語修辭鑑賞 (C2 Capstone Mastery)」喺第4節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (34.4.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (34.4.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (34.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「高級粵語綜合修辭與鑑賞 (C2 Capstone Mastery)」語境嘅廣東話完整句子（練習 4）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (34.4.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (34.4.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (34.4.3)。"
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
                    "prompt": "邊句說話嚴格符合「高級粵語修辭鑑賞 (C2 Capstone Mastery)」嘅日常商務與生活習慣（考核 34-4）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (34.4.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (34.4.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (34.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («修辭_34_4»):",
                    "acceptedAnswers": [
                        "修辭_34_4"
                    ],
                    "explanation": "The target keyword was: 【修辭_34_4】"
                }
            ]
        }
    },
    "hk-u34-l5": {
        "id": "hk-u34-l5",
        "subject": "cantonese",
        "unit": 34,
        "lessonNumber": 5,
        "title": "高級粵語綜合修辭與鑑賞 (C2 Capstone Mastery) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of 高級粵語修辭鑑賞 (C2 Capstone Mastery).",
        "presentation": {
            "explanation": "喺呢一課（高級粵語修辭鑑賞 (C2 Capstone Mastery) - 第5部分）入面，我哋會探討廣東話嘅核心語用語境同埋高級粵語修辭鑑賞 (C2 Capstone Mastery)嘅實際應用。廣東話嘅動詞體態助詞（緊、咗、過、完）同句末語氣助詞（啦、㗎、喎、呢）結合得非常緊密，掌握好詞彙搭配同語氣變化，無論喺日常生活定係正式商務場合都可以做到表達自然地道、流暢自如。\n\n語法剖析與英語對照 (Grammatical Architecture & English Glosses):\n透過典型句子操練，學習者可以掌握廣東話嘅地道語序同埋動態結構。",
            "examples": [
                {
                    "target": "陳生今日晏晝去咗茶餐廳同朋友一齊食下午茶兼傾生意合作細節 (34.5.1)。",
                    "reading": "Can4 saang1 gam1 jat6 aan3 zau3 heoi3 zo2 caa4 caan1 teng1 tung4 pang4 jau5 jat1 cai4 sik6 haa6 ng5 caa4 gim1 king1 sang1 ji3 hap6 zok3 sai3 zit3.",
                    "translation": "Mr. Chan went to the tea restaurant this afternoon to have tea with friends and discuss business cooperation details."
                },
                {
                    "target": "我哋搭港鐵去中環金融中心開會，十分鐘左右就順利到達目的地 (34.5.2)。",
                    "reading": "Ngo5 dei6 daap3 gong2 tit3 heoi3 zung1 waan4 gam1 jung4 zung1 sam1 hoi1 wui6, sap6 fan1 zung1 zo2 jau2 zau6 seon6 lei6 dou3 daat6 muk6 dik1 dei6.",
                    "translation": "We took the MTR to Central Financial Centre for a meeting and smoothly arrived at the destination in about ten minutes."
                },
                {
                    "target": "呢間老字號舖頭嘅點心好新鮮，每日清晨都有好多街坊排隊購買 (34.5.3)。",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 pou3 tau2 ge3 dim2 sam1 hou2 san1 sin1, mui5 jat6 cing1 san4 dou1 jau5 hou2 do1 gaai1 fong1 paai4 deoi2 kau3 maai5.",
                    "translation": "The dim sum at this heritage shop is very fresh, with many neighbors queuing up every morning."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 高級粵語修辭鑑賞 (C2 Capstone Mastery)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "邊個句子最符合「高級粵語修辭鑑賞 (C2 Capstone Mastery)」喺第5節嘅地道廣東話表達？",
                    "options": [
                        "張小姐買咗兩盒好精緻嘅蛋撻返公司請全體同事食 (34.5.1)。",
                        "琴日晏晝落咗一陣大暴雨，街上面好多行人都冇帶雨遮 (34.5.2)。",
                        "佢哋聽日下晝會一齊去尖沙咀嗰間新開嘅海鮮餐廳食點心 (34.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "請選出正確展示「高級粵語綜合修辭與鑑賞 (C2 Capstone Mastery)」語境嘅廣東話完整句子（練習 5）：",
                    "options": [
                        "李先生好耐冇見大家，今晚約咗成班中學老朋友食飯傾偈 (34.5.1)。",
                        "我返到屋企之後即刻沖個熱水涼，然後坐喺梳化睇電視新聞報道 (34.5.2)。",
                        "街市入面啲新鮮海鮮每日朝早七點鐘就開始公開批發出售 (34.5.3)。"
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
                    "prompt": "邊句說話嚴格符合「高級粵語修辭鑑賞 (C2 Capstone Mastery)」嘅日常商務與生活習慣（考核 34-5）？",
                    "options": [
                        "黃經理喺會議室詳細向客戶講解緊新項目嘅運作流程同推廣策略 (34.5.1)。",
                        "香港地鐵嘅班次非常頻密，而且車廂內部環境一直保持得好乾淨 (34.5.2)。",
                        "陳生同張小姐琴晚去咗香港文化中心大劇院欣賞古典交響音樂會 (34.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («修辭_34_5»):",
                    "acceptedAnswers": [
                        "修辭_34_5"
                    ],
                    "explanation": "The target keyword was: 【修辭_34_5】"
                }
            ]
        }
    }
};
  var CURRICULUM = { id: 'cantonese', name: 'Cantonese', units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['cantonese'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
