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
        "unit": "hk-u2",
        "level": "A1",
        "objective": "Master Cantonese personal pronouns and the pluralizing suffix 哋 (我 ngo5, 你 nei5, 佢 keoi5, 我哋 ngo5 dei6, 你哋 nei5 dei6, 佢哋 keoi5 dei6, 人哋 jan4 dei6).",
        "prerequisites": [
            "hk-u1-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u1-l5"
            ]
        },
        "presentation": {
            "explanation": "廣東話嘅人稱代詞系統非常工整簡潔，加上複數後綴**「哋 (dei6)」**即可構成複數！\n\n1. 人稱代詞體系 (Pronoun System):\n- **單數 (Singular)**：\n  - **我 (ngo5)**：I / me。\n  - **你 (nei5)**：You。\n  - **佢 (keoi5)**：He / she / it（廣東話第三人稱單數不分性別）。\n- **複數 (Plural with 哋 dei6)**：\n  - **我哋 (ngo5 dei6)**：We / us。\n  - **你哋 (nei5 dei6)**：You all。\n  - **佢哋 (keoi5 dei6)**：They / them。\n- **泛稱 (Generic Other)**：\n  - **人哋 (jan4 dei6)**：Others / someone else / 'they' (often playfully meaning 'me' in intimate speech).\n\n2. 常用句式 (Common Pronoun Patterns):\n- 「我哋今日一齊去旺角行街啦！」(Let's go shopping in Mong Kok together today!)\n- 「佢哋都係中大嘅大學生。」(They are all Chinese University students.)",
            "examples": [
                {
                    "target": "我哋公司喺灣仔，搭港鐵過海好方便。",
                    "reading": "ngo5 dei6 gung1 si1 hai2 waan1 zai2, daap3 gong2 tit3 gwo3 hoi2 hou2 fong1 bin6.",
                    "translation": "Our office is in Wan Chai, crossing the harbor by MTR is very convenient."
                },
                {
                    "target": "佢係我嘅好朋友，佢叫阿May。",
                    "reading": "keoi5 hai6 ngo5 ge3 hou2 pang4 jau5, keoi5 giu3 aa3 May.",
                    "translation": "She is my good friend, she is called Ah May."
                },
                {
                    "target": "你哋今晚想去邊度食晚飯呀？",
                    "reading": "nei5 dei6 gam1 maan5 soeng2 heoi3 bin1 dou6 sik6 maan5 faan6 aa3?",
                    "translation": "Where do you all want to go have dinner tonight?"
                }
            ],
            "mnemonics": [
                "Pronoun Formula: 我(I), 你(You), 佢(He/She) + 哋(Plural) = 我哋(We), 你哋(You all), 佢哋(They)!"
            ],
            "culturalNotes": [
                "In colloquial Cantonese, «人哋» (jan4 dei6) is versatile—it means 'others', but a speaker (especially female or in close relationships) often playfully refers to herself in third person as «人哋» ('you're teasing me! / 人哋邊有喎')."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話入面，由「我 (ngo5)」加上複數後綴構成、表示「我哋 / 我們 (we/us)」嘅正確詞彙係：",
                    "options": [
                        "我哋 (ngo5 dei6 - We / us)",
                        "我門",
                        "我儕"
                    ],
                    "answerIndex": 0,
                    "explanation": "我哋 (ngo5 dei6) is the standard Cantonese pronoun for 'we / us'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話入面，指代第三人稱單數「他 / 她 / 它 (he/she/it)」嘅專用字係：",
                    "options": [
                        "他",
                        "佢 (keoi5 - He / she / it)",
                        "彼"
                    ],
                    "answerIndex": 1,
                    "explanation": "佢 (keoi5) is the unique Cantonese third-person singular pronoun for he, she, and it."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話人稱代詞系統（我/你/佢）及其複數構造規則，下列哪一項表述完全正確？",
                    "options": [
                        "廣東話單數代詞為「我(ngo5)、你(nei5)、佢(keoi5)」，後綴加上「哋(dei6)」即可構成複數「我哋、你哋、佢哋」 (Singular ngo5/nei5/keoi5 + dei6 forms plurals ngo5 dei6/nei5 dei6/keoi5 dei6)",
                        "廣東話沒有複數代詞",
                        "佢只能用來指代動物"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately describes the pronoun paradigm and plural suffixation with 哋."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'we / us' in Cantonese (我哋):",
                    "acceptedAnswers": [
                        "我哋",
                        "ngo5dei6",
                        "ngo5 dei6",
                        "Ngo5 dei6",
                        "Ngo5dei6"
                    ],
                    "explanation": "我哋 (ngo5 dei6) means 'we / us' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u2-l2": {
        "id": "hk-u2-l2",
        "unit": "hk-u2",
        "level": "A1",
        "objective": "Master equational sentences, copula verb 係 (hai6), negation 唔係 (m4 hai6), and A-not-A question form 係咪 / 係唔係 (hai6 mai6 / hai6 m4 hai6).",
        "prerequisites": [
            "hk-u2-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u2-l1"
            ]
        },
        "presentation": {
            "explanation": "廣東話嘅判斷句以**「係 (hai6)」**為核心，相當於「is/am/are」，否定為**「唔係 (m4 hai6)」**！\n\n1. 判斷句句型結構 (Copula Structures):\n- **肯定句 (Affirmative: S + 係 + N)**：\n  - 「我係香港人。」(I am a Hong Konger.)\n  - 「呢本係我嘅書。」(This is my book.)\n- **否定句 (Negative: S + 唔係 + N)**：\n  - 「佢唔係醫生，佢係律師。」(He is not a doctor, he is a lawyer.)\n- **正反疑問句 (A-not-A Question: 係唔係 / 係咪)**：\n  - 「你係唔係陳經理？」/「你係咪陳經理呀？」(Are you Manager Chan?)\n  - *註：「係咪 (hai6 mai6)」係「係唔係」嘅極常用合音簡縮！*",
            "examples": [
                {
                    "target": "你係咪今晚搭飛機去日本東京旅行呀？",
                    "reading": "nei5 hai6 mai6 gam1 maan5 daap3 fei1 gei1 heoi3 jat6 bun2 dung1 ging1 leoi5 hang4 aa3?",
                    "translation": "Are you taking the flight to Tokyo, Japan for travel tonight?"
                },
                {
                    "target": "呢位係我嘅大學導師王教授。",
                    "reading": "ni1 wai2 hai6 ngo5 ge3 daai6 hok6 dou6 si1 wong4 gaau3 sau6.",
                    "translation": "This is my university supervisor, Professor Wong."
                },
                {
                    "target": "佢唔係本地人，佢係由加拿大返嚟嘅華僑。",
                    "reading": "keoi5 m4 hai6 bun2 dei6 jan4, keoi5 hai6 jau4 gaa1 naa4 daai6 faan1 lai4 ge3 waa4 kiu4.",
                    "translation": "He is not a local; he is an overseas Chinese returned from Canada."
                }
            ],
            "mnemonics": [
                "Copula Core: 係(hai6 - is), 唔係(m4 hai6 - is not), 係咪(hai6 mai6 - is it? / A-not-A)!"
            ],
            "culturalNotes": [
                "«係咪» (hai6 mai6) is an everyday portmanteau fusion of «係唔係» (hai6 m4 hai6) and is the most ubiquitous conversational question particle in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話入面，由「係唔係」快速連讀合音而成、經常用於日常詢問「是不是 / 對不對」嘅詞彙係：",
                    "options": [
                        "唔係",
                        "係咪 (hai6 mai6 - Is it? / Are you?)",
                        "幾多"
                    ],
                    "answerIndex": 1,
                    "explanation": "係咪 (hai6 mai6) is the quintessential fused A-not-A question form of 係唔係."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "如果要否定一個身份或陳述，表達「不是」在廣東話中應該使用：",
                    "options": [
                        "唔係 (m4 hai6 - Is not / Not to be)",
                        "未係",
                        "冇係"
                    ],
                    "answerIndex": 0,
                    "explanation": "唔係 (m4 hai6) is the standard negative copula in Cantonese."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話判斷動詞「係」、否定「唔係」及正反疑問句「係咪」，下列哪一項表述完全正確？",
                    "options": [
                        "「係」在廣東話中只能用作助詞",
                        "「係 (hai6)」表示肯定判斷（是），「唔係 (m4 hai6)」表示否定（不是），「係咪 (hai6 mai6)」是「係唔係」的常用合音疑問句式 (hai6 for 'to be', m4 hai6 for 'is not', hai6 mai6 for 'is it?')",
                        "廣東話不能進行肯定或否定判斷"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately articulates copular grammar, negation, and fused questioning in Cantonese."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for the fused question 'is it? / are you?' in Cantonese (係咪):",
                    "acceptedAnswers": [
                        "係咪",
                        "hai6mai6",
                        "hai6 mai6",
                        "Hai6 mai6",
                        "Hai6mai6"
                    ],
                    "explanation": "係咪 (hai6 mai6) means 'is it? / are you?' (fused form of 係唔係)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u2-l3": {
        "id": "hk-u2-l3",
        "unit": "hk-u2",
        "level": "A1",
        "objective": "Master Cantonese demonstrative pronouns and spatial locatives (呢個 ni1 go3, 嗰個 go2 go3, 呢度 ni1 dou6 here, 嗰度 go2 dou6 there, 邊度 bin1 dou6 where, 邊個 bin1 go3 who/which one).",
        "prerequisites": [
            "hk-u2-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u2-l2"
            ]
        },
        "presentation": {
            "explanation": "廣東話嘅指示代詞同空間方位詞層次分明，掌握**「呢 (近指) / 嗰 (遠指) / 邊 (疑問)」**三元體系！\n\n1. 指示與疑問三元矩陣 (Demonstrative & Interrogative Matrix):\n- **事物指代 (Things)**：\n  - **呢個 (ni1 go3)**：This one。\n  - **嗰個 (go2 go3)**：That one。\n  - **邊個 (bin1 go3)**：Which one / Who。\n- **地點空間 (Locations with 度 dou6)**：\n  - **呢度 (ni1 dou6)**：Here。\n  - **嗰度 (go2 dou6)**：There。\n  - **邊度 (bin1 dou6)**：Where。\n- **複數指示 (Plural Things with 啲 di1)**：\n  - **呢啲 (ni1 di1)**：These。\n  - **嗰啲 (go2 di1)**：Those。\n  - **邊啲 (bin1 di1)**：Which ones。\n\n2. 實用句式 (Practical Locative Syntax):\n- 「請問洗手間喺邊度呀？」(Excuse me, where is the restroom?)\n- 「呢個奶茶好香，嗰個蛋撻好脆！」(This milk tea is very fragrant, that egg tart is very crispy!)",
            "examples": [
                {
                    "target": "唔該請問，港鐵站嘅出入口喺邊度呀？",
                    "reading": "m4 goi1 cing2 man6, gong2 tit3 zaam6 ge3 ceot1 jap6 hau2 hai2 bin1 dou6 aa3?",
                    "translation": "Excuse me, where is the MTR station entrance/exit?"
                },
                {
                    "target": "我哋就坐喺呢度等佢啦，嗰度太多人好逼。",
                    "reading": "ngo5 dei6 zau6 co5 hai2 ni1 dou6 dang2 keoi5 laa1, go2 dou6 taai3 do1 jan4 hou2 bik1.",
                    "translation": "Let's just sit here and wait for him; over there is too crowded."
                },
                {
                    "target": "呢個手袋好靚，不過嗰個比較平啲。",
                    "reading": "ni1 go3 sau2 doi2 hou2 leng3, bat1 gwo3 go2 go3 bei2 gaau3 peng4 di1.",
                    "translation": "This handbag is very pretty, but that one is comparatively cheaper."
                }
            ],
            "mnemonics": [
                "Triad Rule: 呢(ni1 - This/Here), 嗰(go2 - That/There), 邊(bin1 - Which/Where) + 個(Item) / 度(Place) / 啲(Plural)!"
            ],
            "culturalNotes": [
                "In Hong Kong Cantonese, «邊個» (bin1 go3) serves dual functions: it means 'who' (person) as well as 'which one' (item)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話入面，問人「洗手間喺哪裏 / 在哪裏」嗰陣，「哪裏 (where)」對應嘅地道廣東話詞彙係：",
                    "options": [
                        "嗰度",
                        "呢度",
                        "邊度 (bin1 dou6 - Where)"
                    ],
                    "answerIndex": 2,
                    "explanation": "邊度 (bin1 dou6) is the standard Cantonese interrogative pronoun for 'where'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "指代眼前說話者所在嘅位置「這裏 (here)」，廣東話應當講：",
                    "options": [
                        "呢度 (ni1 dou6 - Here)",
                        "嗰度",
                        "邊度"
                    ],
                    "answerIndex": 0,
                    "explanation": "呢度 (ni1 dou6) means 'here / this place' in Cantonese."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話指示代詞「呢個/嗰個/邊個」與地點詞「呢度/嗰度/邊度」的對應關係，下列哪一項表述完全正確？",
                    "options": [
                        "「呢」表示遠指，「嗰」表示近指",
                        "「呢度」表示哪裏",
                        "「呢 (ni1)」表近指（呢個/呢度），「嗰 (go2)」表遠指（嗰個/嗰度），「邊 (bin1)」表疑問（邊個/邊度） (ni1 for proximal this/here, go2 for distal that/there, bin1 for interrogative which/where)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately classifies the tripartite Cantonese demonstrative and locative system."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'here / this place' in Cantonese (呢度):",
                    "acceptedAnswers": [
                        "呢度",
                        "ni1dou6",
                        "ni1 dou6",
                        "Ni1 dou6",
                        "Ni1dou6"
                    ],
                    "explanation": "呢度 (ni1 dou6) means 'here / this place' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u2-l4": {
        "id": "hk-u2-l4",
        "unit": "hk-u2",
        "level": "A1",
        "objective": "Master the Cantonese possessive and adjectival modifying particle 嘅 (ge3), equivalent to Mandarin 的 / English 's, and construct noun modification phrases.",
        "prerequisites": [
            "hk-u2-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u2-l3"
            ]
        },
        "presentation": {
            "explanation": "**「嘅 (ge3)」**係廣東話使用頻率最高嘅核心助詞之一，功能相當於普通話嘅「的」同英文嘅「's / of」！\n\n1. 助詞「嘅」兩大核心功能 (Two Functions of 嘅 ge3):\n- **領屬所有 (Possession: N1 + 嘅 + N2)**：\n  - **我嘅 (ngo5 ge3)**：My / mine。\n  - **你嘅 (nei5 ge3)**：Your / yours。\n  - **佢嘅 (keoi5 ge3)**：His / her / hers / its。\n  - **邊個嘅 (bin1 go3 ge3)**：Whose。\n- **形容詞修飾名詞 (Adjective Modification: Adj + 嘅 + N)**：\n  - 「好食嘅點心」(Delicious dim sum)。\n  - 「好靚嘅風景」(Very beautiful scenery)。\n  - 「新鮮嘅海鮮」(Fresh seafood)。\n\n2. 實用所有格句式 (Possessive Sentences):\n- 「呢部電話係我嘅，嗰部先係你嘅。」(This phone is mine; that one is yours.)\n- 「張生係一間好大嘅跨國公司嘅總經理。」(Mr. Cheung is the GM of a very large multinational company.)",
            "examples": [
                {
                    "target": "呢隻手錶係我爸爸送畀我嘅二十歲生日禮物。",
                    "reading": "ni1 zek3 sau2 biu1 hai6 ngo5 baa1 baa1 sung3 bei2 ngo5 ge3 jaa6 seoi3 saang1 jat6 lai5 mat6.",
                    "translation": "This watch is a 20th birthday gift my dad gave to me."
                },
                {
                    "target": "請問呢件黑色嘅褸係邊個嘅？",
                    "reading": "cing2 man6 ni1 gin6 haak1 sik1 ge3 lau1 hai6 bin1 go3 ge3?",
                    "translation": "Excuse me, whose black coat is this?"
                },
                {
                    "target": "旺角有好多好平又好食嘅街頭小食。",
                    "reading": "wong6 gok3 jau5 hou2 do1 hou2 peng4 jau6 hou2 sik6 ge3 gaai1 tau4 siu2 sik6.",
                    "translation": "Mong Kok has a lot of very cheap and delicious street snacks."
                }
            ],
            "mnemonics": [
                "Particle 嘅 (ge3): 我嘅(My/Mine), 靚嘅(Pretty), 好食嘅(Delicious) = Essential Cantonese Connector!"
            ],
            "culturalNotes": [
                "The character «嘅» is one of the most distinctive Cantonese written vernacular characters (粵語字), universally seen on Hong Kong signage, ads, and messaging."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話入面表示所有關係「我的（my / mine）」、相當於普通話「我的」嘅地道寫法係：",
                    "options": [
                        "我的",
                        "我嘅 (ngo5 ge3 - My / mine)",
                        "我之"
                    ],
                    "answerIndex": 1,
                    "explanation": "我嘅 (ngo5 ge3) is the standard Cantonese form for 'my / mine'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在廣東話中，如果要問「這本筆記本是誰的？」，「誰的 (whose)」在口語中通常表達為：",
                    "options": [
                        "邊個嘅 (bin1 go3 ge3 - Whose)",
                        "邊度嘅",
                        "乜嘢嘅"
                    ],
                    "answerIndex": 0,
                    "explanation": "邊個嘅 (bin1 go3 ge3) combines 邊個 (who) + 嘅 ('s) to mean 'whose'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話助詞「嘅 (ge3)」的語法功能（領屬所有與修飾），下列哪一項表述完全正確？",
                    "options": [
                        "「嘅」在廣東話中只能用在句首且沒有任何含義",
                        "「嘅」只能用來表示否定",
                        "「嘅 (ge3)」是廣東話核心助詞，相當於「的/'s」，既可用於領屬關係（如我嘅/佢嘅），亦可用於形容詞修飾名詞（如好食嘅點心） (ge3 expresses possession like ngo5 ge3 and noun modification like hou2 sik6 ge3 dim2 sam1)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately describes the multifunctional possessive and attributive roles of 嘅 (ge3)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'my / mine' in Cantonese (我嘅):",
                    "acceptedAnswers": [
                        "我嘅",
                        "ngo5ge3",
                        "ngo5 ge3",
                        "Ngo5 ge3",
                        "Ngo5ge3"
                    ],
                    "explanation": "我嘅 (ngo5 ge3) means 'my / mine' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u2-l5": {
        "id": "hk-u2-l5",
        "unit": "hk-u2",
        "level": "A1",
        "objective": "Synthesize personal pronouns, copula 係, demonstratives 呢個/嗰度, and possessive 嘅 into a complete office/workplace identity confirmation dialogue.",
        "prerequisites": [
            "hk-u2-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u2-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢課綜合實戰篇，我哋將第二單元學到嘅代詞、判斷句「係」、指示詞「呢度/嗰度」同領屬「嘅」全面結合，完成職場辦公室初次對接實戰！\n\n1. 職場禮貌問詢與介紹句型 (Workplace Protocol Syntax):\n- **請問你貴姓？ (cing2 man6 nei5 gwai3 sing3?)**：May I ask your honorable surname?\n- **我免貴姓陳，叫我阿Ben就得喇。 (ngo5 min5 gwai3 sing3 can4, giu3 ngo5 aa3 Ben zau6 dak1 laa3.)**：My surname is Chan, just call me Ah Ben.\n- **呢位係我哋嘅新同事。 (ni1 wai2 hai6 ngo5 dei6 ge3 san1 tung4 si6.)**：This is our new colleague.\n- **請喺呢度坐陣先。 (cing2 hai2 ni1 dou6 co5 zan6 sin1.)**：Please take a seat here first.\n\n2. 第二單元實戰對話範例 (Unit 2 Master Dialogue):\n- **接待員**：‘早晨！請問你貴姓？係咪約咗黃經理呀？’\n- **訪客David**：‘早晨！我姓李，叫David。係呀，我哋約咗十點鐘喺呢度見面。’\n- **接待員**：‘李生你好！黃經理嘅辦公室喺嗰度，請喺呢度坐陣飲杯茶先啦！’\n- **David**：‘好啊，唔該晒你！’",
            "examples": [
                {
                    "target": "請問你貴姓呀？我係市場部嘅主管阿Ken。",
                    "reading": "cing2 man6 nei5 gwai3 sing3 aa3? ngo5 hai6 si5 coeng4 bou6 ge3 zyu2 gun2 aa3 Ken.",
                    "translation": "May I have your surname? I am Ken, the supervisor of the Marketing Department."
                },
                {
                    "target": "呢位係我哋公司新請嘅會計師，佢叫阿Grace。",
                    "reading": "ni1 wai2 hai6 ngo5 dei6 gung1 si1 san1 ceng2 ge3 wui6 gai3 si1, keoi5 giu3 aa3 Grace.",
                    "translation": "This is our company's newly hired accountant, her name is Grace."
                },
                {
                    "target": "呢份合約係你哋嘅，嗰份先係我哋嘅。",
                    "reading": "ni1 fan6 hap6 joek3 hai6 nei5 dei6 ge3, go2 fan6 sin1 hai6 ngo5 dei6 ge3.",
                    "translation": "This contract is yours; that one is ours."
                }
            ],
            "mnemonics": [
                "Identity Flow: 請問貴姓(Surname inquiry) -> 呢位係(Introducing) -> 呢度請坐(Location & Hospitality) -> 合作順利(Productive work)!"
            ],
            "culturalNotes": [
                "In Hong Kong business etiquette, addressing someone by their English name with the Cantonese title or prefix (e.g. David生, Grace姐, or 阿Ken) strikes the perfect balance of professional respect and friendliness."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "商務場合中禮貌詢問對方尊姓大名「請問您貴姓？」，最得體嘅廣東話問法係：",
                    "options": [
                        "你叫乜名呀？",
                        "請問你貴姓？ (cing2 man6 nei5 gwai3 sing3? - May I ask your surname?)",
                        "你係邊位呀？"
                    ],
                    "answerIndex": 1,
                    "explanation": "請問你貴姓？ (cing2 man6 nei5 gwai3 sing3?) is the polite standard in business and formal introductions."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在向客戶或同事介紹身邊人「這一位是我們的新經理」時，最禮貌客氣的廣東話表達是：",
                    "options": [
                        "呢條友係新經理",
                        "呢位係我哋嘅新經理 (ni1 wai2 hai6 ngo5 dei6 ge3 san1 ging1 lei5 - This is our new manager)",
                        "嗰個係經理"
                    ],
                    "answerIndex": 1,
                    "explanation": "呢位係我哋嘅新經理 uses the polite classifier 位 (wai2) and possessive 我哋嘅 (ngo5 dei6 ge3)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話第二單元人稱代詞（我/你/佢）、判斷句（係/唔係）、指示詞（呢度/嗰度）與領屬（嘅）的綜合應用，下列哪一項總括完全正確？",
                    "options": [
                        "廣東話在職場中不能使用任何代詞或禮貌用語",
                        "透過掌握人稱代詞（我哋/你哋）、判斷句式（係咪/唔係）、空間指代（呢度/嗰度）及領屬助詞「嘅」，能自如完成職場商務介紹與身份確認 (Accurate control of pronouns, copula, spatial demonstratives, and 嘅 for workplace introductions)",
                        "「請問你貴姓」只能用於向小孩問話"
                    ],
                    "answerIndex": 1,
                    "explanation": "Synthesizes the complete grammatical toolkit of Unit 2 in authentic communicative context."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 5-character Hanzi phrase for 'May I ask your honorable surname?' in Cantonese (請問你貴姓):",
                    "acceptedAnswers": [
                        "請問你貴姓",
                        "cing2man6nei5gwai3sing3",
                        "cing2 man6 nei5 gwai3 sing3",
                        "Cing2 man6 nei5 gwai3 sing3",
                        "Cing2man6nei5gwai3sing3",
                        "請問你貴姓？"
                    ],
                    "explanation": "請問你貴姓 (cing2 man6 nei5 gwai3 sing3) means 'may I ask your honorable surname?'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u3-l1": {
        "id": "hk-u3-l1",
        "unit": "hk-u3",
        "level": "A1",
        "objective": "Master Cantonese cardinal numbers 0–10,000 and distinguish between 二 (ji6 - counting/digits/ordinals) and 兩 (loeng5 - quantity/before classifiers).",
        "prerequisites": [
            "hk-u2-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u2-l5"
            ]
        },
        "presentation": {
            "explanation": "廣東話嘅數字系統結構清晰，但使用「二 (ji6)」同「兩 (loeng5)」有非常嚴格嘅語法分工！\n\n1. 基礎數字與位值 (Base Numbers & Place Values):\n- **0–10**：零 (ling4), 一 (jat1), 二 (ji6), 三 (saam1), 四 (sei3), 五 (ng5), 六 (luk6), 七 (cat1), 八 (baat3), 九 (gau2), 十 (sap6)。\n- **位值**：百 (baak3), 千 (cin1), 萬 (maan6)。\n  - 例如：一百二十五 (125), 三千八百 (3,800), 兩萬 (20,000)。\n\n2. 「二」同「兩」嘅黃金法則 (ji6 vs loeng5 Rule):\n- **二 (ji6)**：用於純數數、電話號碼、小數、序數同個位數（例如：第二、二號、一二三四）。\n- **兩 (loeng5)**：用於**量詞之前、計量單位或百/千/萬位**（例如：兩個人、兩杯奶茶、兩點鐘、兩百蚊、兩萬蚊）。\n  - *注意：二十 (jaa6 / sap6) 用「二」，但二百、兩千、兩萬多數用「兩」！*",
            "examples": [
                {
                    "target": "唔該畀兩杯熱奶茶同兩件新鮮出爐嘅蛋撻我哋。",
                    "reading": "m4 goi1 bei2 loeng5 bui1 jit6 naai5 caa4 tung4 loeng5 gin6 san1 sin1 ceot1 lou4 ge3 daan6 taat2 ngo5 dei6.",
                    "translation": "Please give us two cups of hot milk tea and two freshly baked egg tarts."
                },
                {
                    "target": "我嘅電話號碼係九一二三四五六七。",
                    "reading": "ngo5 ge3 din6 waa2 hou6 maa5 hai6 gau2 jat1 ji6 saam1 sei3 ng5 luk6 cat1.",
                    "translation": "My phone number is 9123-4567."
                },
                {
                    "target": "呢間舖頭喺銅鑼灣開咗二十年，每個月租金要兩萬八千蚊。",
                    "reading": "ni1 gaan1 pou3 tau2 hai2 tung4 lo4 waan1 hoi1 zo2 jaa6 nin4, mui5 go3 jyut6 zou1 gam1 jiu3 loeng5 maan6 baat3 cin1 man1.",
                    "translation": "This shop has been open in Causeway Bay for twenty years, and monthly rent is 28,000 dollars."
                }
            ],
            "mnemonics": [
                "Number Rule: 純數字號碼用「二」(ji6); 量詞計量度位用「兩」(loeng5 loeng5)!"
            ],
            "culturalNotes": [
                "In Cantonese money colloquially, «蚊» (man1) replaces 元/塊 (dollars), and 20 is often pronounced with the special contracted numeral «廿» (jaa6)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺餐廳點餐時，向侍應表示「兩個人、兩杯咖啡」，「兩」喺量詞前嘅正確廣東話字係：",
                    "options": [
                        "二",
                        "兩 (loeng5 - Two / before classifiers)",
                        "雙"
                    ],
                    "answerIndex": 1,
                    "explanation": "兩 (loeng5) must be used before classifiers like 個 (go3) and 杯 (bui1)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話入面，朗讀純電話號碼「9123」或者巴士路線「2號巴士」時，「2」應當讀作：",
                    "options": [
                        "二 (ji6 - Two for digits/ordinals)",
                        "兩",
                        "對"
                    ],
                    "answerIndex": 0,
                    "explanation": "二 (ji6) is used for pure digits, telephone numbers, and bus routes."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中「二 (ji6)」與「兩 (loeng5)」的用法差異，下列哪一項表述完全正確？",
                    "options": [
                        "「二」用於純數數、電話號碼、序數等；「兩」則用於量詞前表示數量或時間（如兩個人、兩點鐘、兩百蚊） (ji6 for digits/ordinals; loeng5 before classifiers and in quantities)",
                        "「兩」只能用來指代重量",
                        "兩者沒有任何區別可以完全倒轉使用"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately distinguishes ji6 and loeng5 usage in Cantonese."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'two (items)' in Cantonese (兩個):",
                    "acceptedAnswers": [
                        "兩個",
                        "loeng5go3",
                        "loeng5 go3",
                        "Loeng5 go3",
                        "Loeng5go3",
                        "两个"
                    ],
                    "explanation": "兩個 (loeng5 go3) means 'two (items)' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u3-l2": {
        "id": "hk-u3-l2",
        "unit": "hk-u3",
        "level": "A1",
        "objective": "Master telling time in Cantonese, including the traditional Hong Kong clock-face 5-minute unit '字' (zi6) and quarter hour '骨' (gwat1).",
        "prerequisites": [
            "hk-u3-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u3-l1"
            ]
        },
        "presentation": {
            "explanation": "廣東話報時間有一套極具特色嘅**「字 (zi6)」**系統，以鐘面數字（1至12）每隔5分鐘為一個「字」！\n\n1. 時間基礎構成 (Core Time Expressions):\n- **點 / 點鐘 (dim2 / dim2 zung1)**：O'clock。\n  - 例如：三點鐘 (3:00), 八點正 (8:00 sharp)。\n- **分 (fan1)**：Minute。\n  - 例如：八點十五分 (8:15)。\n- **半 (bun3)**：Half past (30 mins)。\n  - 例如：十點半 (10:30)。\n\n2. 香港特色「字」同「骨」計時制 (Unique zi6 & gwat1 Time Units):\n- 鐘面每5分鐘叫一個「字」：\n  - **一個字 (jat1 go3 zi6)**：5分鐘（指針指住1）。\n  - **兩個字 (loeng5 go3 zi6)**：10分鐘（指針指住2）。\n  - **三個字 (saam1 go3 zi6) / 一個骨 (jat1 go3 gwat1)**：15分鐘（指針指住3，'骨'源自英文Quarter）。\n  - **六個字 (luk6 go3 zi6) / 半**：30分鐘。\n  - **九個字 (gau2 go3 zi6) / 三個骨**：45分鐘。\n  - *例如：「三點三個字」就係 3:15；「五點九個字」就係 5:45！*",
            "examples": [
                {
                    "target": "而家幾多點呀？而家係下晝三點九個字（3:45）。",
                    "reading": "ji4 gaa1 gei2 do1 dim2 aa3? ji4 gaa1 hai6 haa6 zau3 saam1 dim2 gau2 go3 zi6.",
                    "translation": "What time is it now? It is 3:45 PM right now."
                },
                {
                    "target": "我哋約好聽朝早八點半喺地鐵站閘口等。",
                    "reading": "ngo5 dei6 joek3 hou2 ting1 ziu1 zou2 baat3 dim2 bun3 hai2 dei6 tit3 zaam6 zaap6 hau2 dang2.",
                    "translation": "We agreed to meet at the subway turnstile at 8:30 tomorrow morning."
                },
                {
                    "target": "仲有兩個字（10分鐘）就開會喇，快啲準備好啲文件啦！",
                    "reading": "zung6 jau5 loeng5 go3 zi6 zau6 hoi1 wui6 laa3, faai3 di1 zeon2 bei6 hou2 di1 man4 gin2 laa1!",
                    "translation": "There are still 10 minutes before the meeting starts, quickly prepare the documents!"
                }
            ],
            "mnemonics": [
                "Clock Face Code: 1個字=5分, 3個字=15分(1骨), 6個字=30分(半), 9個字=45分(3骨)!"
            ],
            "culturalNotes": [
                "The «字» (zi6) system originated from traditional clock dials and remains the most common spoken way Hong Kongers express time in daily life."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺廣東話口語入面，如果有人講「四點三個字」，佢所指嘅具體時間係：",
                    "options": [
                        "4點03分",
                        "4點15分 (4:15 - 3 'zi' equals 15 minutes)",
                        "4點30分"
                    ],
                    "answerIndex": 1,
                    "explanation": "每個「字」代表5分鐘，三個字即係 3 × 5 = 15 分鐘，所以係 4:15。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話入面表示整點「點鐘 (o'clock)」，例如「現在是九點鐘」，「點鐘」嘅正確寫法係：",
                    "options": [
                        "點鐘 (dim2 zung1 - O'clock)",
                        "時辰",
                        "點分"
                    ],
                    "answerIndex": 0,
                    "explanation": "點鐘 (dim2 zung1) is the standard Cantonese term for o'clock."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中「點鐘」、「半」以及獨特的「字（每5分鐘為1個字）」計時系統，下列哪一項表述完全正確？",
                    "options": [
                        "「一個字」在廣東話中代表一小時",
                        "廣東話以「點/點鐘」表示時，以鐘面每5分鐘為「一個字」（如三個字為15分，九個字為45分），並以「半」表示30分 (dim2 zung1 for hour, each 'zi6' for 5 mins, bun3 for half past)",
                        "廣東話不能表達具體時間"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately articulates Cantonese time syntax and the clock-face 'zi6' nomenclature."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'o'clock' in Cantonese (點鐘):",
                    "acceptedAnswers": [
                        "點鐘",
                        "dim2zung1",
                        "dim2 zung1",
                        "Dim2 zung1",
                        "Dim2zung1",
                        "点钟"
                    ],
                    "explanation": "點鐘 (dim2 zung1) means 'o'clock' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u3-l3": {
        "id": "hk-u3-l3",
        "unit": "hk-u3",
        "level": "A1",
        "objective": "Master days of the week, relative day markers (今日/琴日/聽日), and date constructions in Cantonese.",
        "prerequisites": [
            "hk-u3-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u3-l2"
            ]
        },
        "presentation": {
            "explanation": "廣東話嘅日期同相對時間詞彙非常生動，特別係「琴日 (尋日)」同「聽日」嘅地道讀音！\n\n1. 相對日子譜系 (Relative Day Markers):\n- **大前日 (daai6 cin4 jat6)**：Three days ago。\n- **前日 (cin4 jat6)**：Day before yesterday。\n- **琴日 / 尋日 (kam4 jat6 / cam4 jat6)**：Yesterday。\n- **今日 (gam1 jat6)**：Today。\n- **聽日 (ting1 jat6)**：Tomorrow。\n- **後日 (hau6 jat6)**：Day after tomorrow。\n- **大後日 (daai6 hau6 jat6)**：Three days from today。\n\n2. 星期與日期表達 (Days of Week & Calendar Dates):\n- **星期 (sing1 kei4)** / **禮拜 (lai5 baai3)**：\n  - 星期一 / 禮拜一 (Monday) …… 星期六 / 禮拜六 (Saturday)。\n  - **星期日 / 禮拜日 / 禮拜天** (Sunday)。\n- **幾月幾號 (gei2 jyut6 gei2 hou6)**：\n  - 「今日係七月一號，亦都係香港特區成立紀念日。」(Today is July 1st, which is also HKSAR Establishment Day.)",
            "examples": [
                {
                    "target": "今日係星期五，收工之後我哋一齊去蘭桂坊飲杯嘢啦！",
                    "reading": "gam1 jat6 hai6 sing1 kei4 ng5, sau1 gung1 zi1 hau6 ngo5 dei6 jat1 cai4 heoi3 laan4 gwai3 fong1 jam2 bui1 je5 laa1!",
                    "translation": "Today is Friday; after work let's go to Lan Kwai Fong for a drink!"
                },
                {
                    "target": "琴日晏晝好大雨，不過聽日天文台話會出太陽。",
                    "reading": "kam4 jat6 aan3 zau3 hou2 daai6 jyu5, bat1 gwo3 ting1 jat6 tin1 man4 toi4 waa6 wui6 ceot1 taai3 joeng4.",
                    "translation": "It rained heavily yesterday afternoon, but the observatory says it will be sunny tomorrow."
                },
                {
                    "target": "請問你嘅生日係幾月幾號呀？",
                    "reading": "cing2 man6 nei5 ge3 saang1 jat6 hai6 gei2 jyut6 gei2 hou6 aa3?",
                    "translation": "May I ask what date your birthday is?"
                }
            ],
            "mnemonics": [
                "Day Chain: 琴日(Yesterday) -> 今日(Today) -> 聽日(Tomorrow) -> 後日(Day after)!"
            ],
            "culturalNotes": [
                "In Hong Kong daily speech, «禮拜» (lai5 baai3) and «星期» (sing1 kei4) are used interchangeably for days of the week, with «禮拜» being slightly more colloquial."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話入面表示「昨天 (yesterday)」最常用地道嘅口語詞彙係：",
                    "options": [
                        "昨日",
                        "琴日 / 尋日 (kam4 jat6 / cam4 jat6 - Yesterday)",
                        "昨日天"
                    ],
                    "answerIndex": 1,
                    "explanation": "琴日 / 尋日 (kam4 jat6 / cam4 jat6) is the standard colloquial Cantonese term for yesterday."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在廣東話中，如果要表達「今天 (today)」，對應的字詞是：",
                    "options": [
                        "今日 (gam1 jat6 - Today)",
                        "明日",
                        "今朝"
                    ],
                    "answerIndex": 0,
                    "explanation": "今日 (gam1 jat6) means 'today' in Cantonese."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中相對日期（今日/琴日/聽日）與星期（星期/禮拜）的表達方式，下列哪一項表述完全正確？",
                    "options": [
                        "廣東話沒有星期的概念",
                        "廣東話只能用古代干支紀日",
                        "廣東話以「琴日/尋日」表昨天、「今日」表今天、「聽日」表明天，並通用「星期」與「禮拜」表示星期一至日 (kam4 jat6 for yesterday, gam1 jat6 for today, ting1 jat6 for tomorrow; uses sing1 kei4 & lai5 baai3)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately summarizes Cantonese relative day markers and weekday conventions."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'today' in Cantonese (今日):",
                    "acceptedAnswers": [
                        "今日",
                        "gam1jat6",
                        "gam1 jat6",
                        "Gam1 jat6",
                        "Gam1jat6"
                    ],
                    "explanation": "今日 (gam1 jat6) means 'today' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u3-l4": {
        "id": "hk-u3-l4",
        "unit": "hk-u3",
        "level": "A1",
        "objective": "Master asking prices, stating money amounts in Hong Kong dollars (蚊/毫子), and discussing costs in Cantonese.",
        "prerequisites": [
            "hk-u3-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u3-l3"
            ]
        },
        "presentation": {
            "explanation": "去香港買嘢、食飯、逛街市，問價錢同算賬係最核心嘅生活技能！\n\n1. 貨幣單位與口語表達 (Currency Units & Colloquialisms):\n- **蚊 (man1)**：港幣「元 / 塊」，最常用嘅口語金錢單位。\n  - 例如：十蚊 (HK$10), 五十蚊 (HK$50), 一百蚊 (HK$100)。\n- **毫 / 毫子 (hou4 / hou4 zi2)**：角 / 10 cents。\n  - 例如：五毫子 (50 cents), 兩蚊八毫 (HK$2.80)。\n- **仙 (sin1)**：分 / 1 cent（源自英文Cent，現多用於比喻「一仙都冇」）。\n- **皮 (pei4) / 雞 (gai1)**：俗語，一皮 = 一萬蚊；一隻雞 = 一蚊。\n\n2. 實用問價句式 (Asking Prices & Bargaining):\n- **「請問呢個幾多錢呀？」/「呢件衫幾多蚊呀？」(How much is this?)**\n- **「太貴喇，可唔可以平啲呀？」(Too expensive, can it be cheaper?)\n- **「唔該找錢。」(Please give me change.)**",
            "examples": [
                {
                    "target": "唔該請問呢個保溫杯幾多錢呀？",
                    "reading": "m4 goi1 cing2 man6 ni1 go3 bou2 wan1 bui1 gei2 do1 cin2 aa3?",
                    "translation": "Excuse me, how much is this thermos cup?"
                },
                {
                    "target": "呢個菠蘿包八蚊一個，買三個二十蚊。",
                    "reading": "ni1 go3 bo1 lo4 baau1 baat3 man1 jat1 go3, maai5 saam1 go3 jaa6 man1.",
                    "translation": "This pineapple bun is eight dollars each; buying three is twenty dollars."
                },
                {
                    "target": "老細，畀咗一張一百蚊紙你，唔該找返六十五蚊。",
                    "reading": "lou5 sai3, bei2 zo2 jat1 zoeng1 jat1 baak3 man1 zi2 nei5, m4 goi1 zaau2 faan1 luk6 sap6 ng5 man1.",
                    "translation": "Boss, I gave you a 100-dollar note, please give me back 65 dollars change."
                }
            ],
            "mnemonics": [
                "Money Formula: 幾多錢(How much), 蚊(Dollars), 毫子(Dimes), 找錢(Change)!"
            ],
            "culturalNotes": [
                "In Hong Kong, paper currency is often called «蚊紙» (man1 zi2, e.g. 五百蚊紙/大牛, 一千蚊紙/金牛), reflecting deep-rooted fiscal culture."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺舖頭買嘢想詢問店員「這個多少錢？」，最常用地道嘅廣東話句式係：",
                    "options": [
                        "呢個幾多重？",
                        "呢個係咪錢？",
                        "呢個幾多錢呀？ (ni1 go3 gei2 do1 cin2 aa3? - How much money is this?)"
                    ],
                    "answerIndex": 2,
                    "explanation": "幾多錢 (gei2 do1 cin2) is the standard Cantonese inquiry for price."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話口語中，代表港幣「元（dollar）」最普遍的字是：",
                    "options": [
                        "蚊 (man1 - Dollar / Buck)",
                        "鎊",
                        "仙"
                    ],
                    "answerIndex": 0,
                    "explanation": "蚊 (man1) is the universal Cantonese spoken term for dollar."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中詢問價格「幾多錢」及貨幣單位「蚊/毫子」的口語用法，下列哪一項表述完全正確？",
                    "options": [
                        "「幾多錢」用於問年齡",
                        "廣東話買東西不需要付錢",
                        "廣東話以「幾多錢/幾多蚊」詢問價格，以「蚊 (man1)」代表元，以「毫子 (hou4 zi2)」代表角，以「找錢」表示找零 (gei2 do1 cin2 for price, man1 for dollar, hou4 zi2 for dime, zaau2 cin2 for change)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately articulates Cantonese pricing, monetary lexicon, and transactional terms."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi for 'how much money' in Cantonese (幾多錢):",
                    "acceptedAnswers": [
                        "幾多錢",
                        "gei2do1cin2",
                        "gei2 do1 cin2",
                        "Gei2 do1 cin2",
                        "Gei2do1cin2",
                        "几多钱"
                    ],
                    "explanation": "幾多錢 (gei2 do1 cin2) means 'how much money' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u3-l5": {
        "id": "hk-u3-l5",
        "unit": "hk-u3",
        "level": "A1",
        "objective": "Synthesize numbers, time, prices, and days into a real-world Hong Kong Cha Chaan Teng afternoon tea order and bill-settling dialogue.",
        "prerequisites": [
            "hk-u3-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u3-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢課綜合實戰篇，我哋將第三單元嘅數字、時間「點鐘/字」、問價「幾多錢/幾多蚊」同經典廣東話詞彙融會貫通，體驗香港茶餐廳下午茶時光！\n\n1. 茶餐廳下午茶必備詞彙與句型 (Cha Chaan Teng Lexicon):\n- **下午茶時段 (haa6 ng5 caa4 si4 dyun6)**：通常係下晝兩點半至五點半（2:30–5:30），套餐特別抵食！\n- **埋單 (maai4 daan1)**：Check please / Pay the bill（極其經典地道嘅粵語詞彙）。\n- **一共幾多錢？ (jat1 gung6 gei2 do1 cin2?)**：How much altogether?\n- **凍檸茶少甜 (dung3 ning4 caa4 siu2 tim4)**：Iced lemon tea, less sweet。\n\n2. 第三單元實戰對話範例 (Unit 3 Master Dialogue):\n- **顧客David**：‘侍應，唔該！而家三點三個字，有冇下午茶餐呀？’\n- **侍應**：‘有啊！下午茶兩點半開始。呢份餐包一杯凍飲同一個西多士。’\n- **顧客David**：‘好啊，我要一份西多士，一杯凍檸茶少甜。’\n- *(食完之後)*\n- **顧客David**：‘老細，唔該埋單！一共幾多錢呀？’\n- **侍應**：‘一共三十八蚊，多謝晒！’",
            "examples": [
                {
                    "target": "老細，唔該埋單！我哋坐八號枱。",
                    "reading": "lou5 sai3, m4 goi1 maai4 daan1! ngo5 dei6 co5 baat3 hou6 toi2.",
                    "translation": "Boss, bill please! We are sitting at table 8."
                },
                {
                    "target": "而家兩點半，茶餐廳下午茶特價套餐啱啱開始。",
                    "reading": "ji4 gaa1 loeng5 dim2 bun3, caa4 caan1 teng1 haa6 ng5 caa4 dak6 gaa3 tou3 caan1 ngaam1 ngaam1 hoi1 ci2.",
                    "translation": "It is 2:30 now, the tea restaurant afternoon tea special combo just started."
                },
                {
                    "target": "呢餐飯三個人食，一共用咗四百二十蚊。",
                    "reading": "ni1 caan1 faan6 saam1 go3 jan4 sik6, jat1 gung6 jung6 zo2 sei3 baak3 ji6 sap6 man1.",
                    "translation": "Three people ate this meal; altogether it cost 420 dollars."
                }
            ],
            "mnemonics": [
                "Dining Flow: 睇時間下午茶(Time & Tea set) -> 叫餐點飲品(Ordering) -> 埋單找錢(Bill & Change)!"
            ],
            "culturalNotes": [
                "«埋單» (maai4 daan1) is one of the most famous Cantonese cultural exports worldwide, originating from the practice of tallying and settling the food bills."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺廣東話餐廳食完飯準備結賬付款，呼喚侍應「結賬 / 買單」最地道標準嘅說法係：",
                    "options": [
                        "收工",
                        "埋單 (maai4 daan1 - Pay the bill / Check please)",
                        "找錢"
                    ],
                    "answerIndex": 1,
                    "explanation": "埋單 (maai4 daan1) is the authentic Cantonese phrase for asking for the bill."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "香港茶餐廳中著名的下午茶優惠時段（通常在下午2:30至5:30），廣東話稱之為：",
                    "options": [
                        "宵夜",
                        "下午茶 (haa6 ng5 caa4 - Afternoon tea)",
                        "早茶"
                    ],
                    "answerIndex": 1,
                    "explanation": "下午茶 (haa6 ng5 caa4) is the beloved afternoon tea meal in Hong Kong food culture."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話第三單元數字（一至萬/兩）、時間（點鐘/字）、日期（今日/聽日）與金錢結賬（幾多蚊/埋單）的綜合應用，下列哪一項總括完全正確？",
                    "options": [
                        "廣東話在餐廳不能結賬",
                        "掌握數字量詞（兩）、鐘面計時（點鐘/字）、相對日期（今日）及飲食結賬核心語（幾多錢/埋單），能自如應對香港日常生活、購物與餐飲交流 (Complete mastery of numbers, clock-face time, dates, and restaurant billing with maai4 daan1)",
                        "「埋單」在廣東話中是打架的意思"
                    ],
                    "answerIndex": 1,
                    "explanation": "Synthesizes numbers, time, price inquiry, and dining settlement in Cantonese."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'pay the bill / check please' in Cantonese (埋單):",
                    "acceptedAnswers": [
                        "埋單",
                        "maai4daan1",
                        "maai4 daan1",
                        "Maai4 daan1",
                        "Maai4daan1",
                        "买单",
                        "買單"
                    ],
                    "explanation": "埋單 (maai4 daan1) means 'pay the bill / check please' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u4-l1": {
        "id": "hk-u4-l1",
        "unit": "hk-u4",
        "level": "A1",
        "objective": "Master the foundational Cantonese classifiers 個 (go3 - general items/people), 隻 (zek3 - animals/small items/utensils), and 條 (tiu4 - long, flexible or elongated objects).",
        "prerequisites": [
            "hk-u3-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u3-l5"
            ]
        },
        "presentation": {
            "explanation": "廣東話嘅量詞系統極其發達，幾乎每個名詞都有特定搭配，比普通話同英文更為嚴謹！\n\n1. 三大基石量詞 (Three Cornerstone Classifiers):\n- **個 (go3)**：最通用量詞，用於人、抽象事物、圓形或無特定形狀物品。\n  - 例如：一個人 (one person), 一個橙 (an orange), 一個問題 (a question)。\n- **隻 (zek3)**：廣東話極具特色，用於**動物、餐具杯碟、手腳耳眼、船隻手錶**！\n  - 例如：一隻貓 (a cat), 一隻狗 (a dog), 一隻杯 (a cup), 一隻手錶 (a watch), 一隻艇 (a boat)。\n- **條 (tiu4)**：用於**長條形、柔軟或延綿物體**。\n  - 例如：一條魚 (a fish), 一條褲 (a pair of trousers), 一條路 (a road), 一條問題 (a quiz question colloquially)。\n\n2. 廣東話「量詞代替領屬/特指」特點 (Classifier as Definite Article):\n- 廣東話可以直接用「量詞 + 名詞」表示特指（相當於 the），例如：「隻狗好乖」(The dog is very well-behaved)、「條街好靜」(The street is very quiet)。",
            "examples": [
                {
                    "target": "街角嗰間寵物舖入面有三隻好得意嘅小貓咪。",
                    "reading": "gaai1 gok3 go2 gaan1 cung2 mat6 pou3 jap6 min6 jau5 saam1 zek3 hou2 dak1 ji3 ge3 siu2 maau1 mai1.",
                    "translation": "That pet shop at the street corner has three very cute little kittens."
                },
                {
                    "target": "我今日喺中環買咗一條好靚嘅牛仔褲。",
                    "reading": "ngo5 gam1 jat6 hai2 zung1 waan4 maai5 zo2 jat1 tiu4 hou2 leng3 ge3 ngau4 zai2 fu3.",
                    "translation": "I bought a very nice pair of jeans in Central today."
                },
                {
                    "target": "呢隻杯係由日本進口嘅手造陶瓷杯。",
                    "reading": "ni1 zek3 bui1 hai6 jau4 jat6 bun2 zeon3 hau2 ge3 sau2 zou6 tou4 ci4 bui1.",
                    "translation": "This cup is a handmade ceramic cup imported from Japan."
                }
            ],
            "mnemonics": [
                "Classifier Triad: 人物圓形用「個」(go3); 動物杯碟用「隻」(zek3); 長條魚褲用「條」(tiu4)!"
            ],
            "culturalNotes": [
                "In Cantonese, «隻» (zek3) is widely applied to inanimate household items like cups (一隻杯), plates (一隻碟), spoons (一隻匙羹), and watches (一隻錶), unlike Mandarin which restricts 只 primarily to animals."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺廣東話中，如果要指稱「一隻貓」或者「一隻茶杯」，應當使用邊個專用量詞？",
                    "options": [
                        "個",
                        "隻 (zek3 - Classifier for animals/cups/watches)",
                        "條"
                    ],
                    "answerIndex": 1,
                    "explanation": "隻 (zek3) is the authentic Cantonese classifier for animals, cups, spoons, and watches."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話指稱「一條魚」或者「一條長褲」時，最恰當的長條形量詞是：",
                    "options": [
                        "條 (tiu4 - Classifier for fish, roads, pants)",
                        "隻",
                        "個"
                    ],
                    "answerIndex": 0,
                    "explanation": "條 (tiu4) is the classifier for long, slender items like fish, trousers, and roads."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中基礎量詞「個/隻/條」的搭配規則與特指語法，下列哪一項表述完全正確？",
                    "options": [
                        "廣東話所有物品都只能用「個」",
                        "「個」用於人或通用物品，「隻」用於動物、杯碟、手錶，「條」用於長條物（如魚、褲、路），且「量詞+名詞」可表特指 (go3 for general/people, zek3 for animals/cups/watches, tiu4 for long items; Cl+N expresses definiteness)",
                        "「條」只能用來數大象"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately describes semantic categories and definite reference of Cantonese classifiers."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'one (animal/cup/watch)' in Cantonese (一隻):",
                    "acceptedAnswers": [
                        "一隻",
                        "jat1zek3",
                        "jat1 zek3",
                        "Jat1 zek3",
                        "Jat1zek3",
                        "一只"
                    ],
                    "explanation": "一隻 (jat1 zek3) means 'one (animal/cup/watch)' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u4-l2": {
        "id": "hk-u4-l2",
        "unit": "hk-u4",
        "level": "A1",
        "objective": "Master Cantonese classifiers for physical premises and commercial establishments (間 gaan1) and vehicles/electronic devices (部 bou6 / 架 gaa3).",
        "prerequisites": [
            "hk-u4-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u4-l1"
            ]
        },
        "presentation": {
            "explanation": "廣東話對商舖建築同交通機械有專門嘅量詞體系！\n\n1. 建築與商業場所量詞「間 (gaan1)」:\n- **間 (gaan1)**：專門用於**房屋、房間、舖頭、餐廳、學校、公司、醫院**！\n  - 例如：一間屋 (a house), 一間房 (a room), 一間餐廳 (a restaurant), 一間銀行 (a bank), 一間大學 (a university)。\n\n2. 交通工具與電器機械量詞「部 (bou6)」同「架 (gaa3)」:\n- **部 (bou6)**：用於**電子產品、手機、電腦、相機、升降機（電梯）**；亦可用於車輛。\n  - 例如：一部手機 (a mobile phone), 一部手提電腦 (a laptop), 一部升降機 (an elevator)。\n- **架 (gaa3)**：專門用於**交通工具（車輛、飛機、單車、巴士、的士）**。\n  - 例如：一架巴士 (a bus), 一架私家車 (a private car), 一架飛機 (an airplane), 一架單車 (a bicycle)。",
            "examples": [
                {
                    "target": "旺角新開咗一間好有特色嘅咖啡舖，吸引好多後生仔去打卡。",
                    "reading": "wong6 gok3 san1 hoi1 zo2 jat1 gaan1 hou2 jau5 dak6 sik1 ge3 gaa3 fe1 pou3, kap1 jan5 hou2 do1 hau6 saang1 zai2 heoi3 daa2 kaat1.",
                    "translation": "A very unique coffee shop newly opened in Mong Kok, attracting many young people to check in."
                },
                {
                    "target": "我琴日買咗一部新嘅智能手機，影相功能好強大。",
                    "reading": "ngo5 kam4 jat6 maai5 zo2 jat1 bou6 san1 ge3 zi3 nang4 sau2 gei1, jing2 soeng2 gung1 nang4 hou2 koeng4 daai6.",
                    "translation": "I bought a new smartphone yesterday; its photography function is very powerful."
                },
                {
                    "target": "前面有一架雙層巴士啱啱停喺巴士站。",
                    "reading": "cin4 min6 jau5 jat1 gaa3 soeng1 cang4 baa1 si2 ngaam1 ngaam1 ting4 hai2 baa1 si2 zaam6.",
                    "translation": "Ahead there is a double-decker bus that just stopped at the bus stop."
                }
            ],
            "mnemonics": [
                "Establishment & Machine: 屋宇店舖用「間」(gaan1); 電腦手機用「部」(bou6); 交通車輛用「架」(gaa3)!"
            ],
            "culturalNotes": [
                "Hong Kong is famous for double-decker buses («雙層巴士»), referred to naturally as «一架雙層巴士» (jat1 gaa3 soeng1 cang4 baa1 si2)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "指稱「一間茶餐廳」或者「一間小學」，廣東話最正確嘅建築店舖量詞係：",
                    "options": [
                        "個",
                        "間 (gaan1 - Classifier for shops/restaurants/schools)",
                        "部"
                    ],
                    "answerIndex": 1,
                    "explanation": "間 (gaan1) is the standard Cantonese classifier for shops, restaurants, houses, and institutions."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在廣東話中，指代「一輛的士」或者「一架飛機」等交通工具，最地道的量詞是：",
                    "options": [
                        "架 (gaa3 - Classifier for vehicles/planes)",
                        "粒",
                        "樽"
                    ],
                    "answerIndex": 0,
                    "explanation": "架 (gaa3) is the quintessential Cantonese classifier for transport vehicles and planes."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中「間 (gaan1)」、「部 (bou6)」與「架 (gaa3)」的分類搭配規則，下列哪一項表述完全正確？",
                    "options": [
                        "「間」用於房屋、商舖、餐廳、學校；「部」用於電子產品如手機電腦；「架」用於車輛飛機等交通工具 (gaan1 for premises/shops, bou6 for gadgets/phones, gaa3 for vehicles/planes)",
                        "「架」只能用來數書本",
                        "「間」只能用來數水杯"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately articulates the semantic distinctions between gaan1, bou6, and gaa3."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'one (shop/house/restaurant)' in Cantonese (一間):",
                    "acceptedAnswers": [
                        "一間",
                        "jat1gaan1",
                        "jat1 gaan1",
                        "Jat1 gaan1",
                        "Jat1gaan1",
                        "一间"
                    ],
                    "explanation": "一間 (jat1 gaan1) means 'one (shop/restaurant/house)' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u4-l3": {
        "id": "hk-u4-l3",
        "unit": "hk-u4",
        "level": "A1",
        "objective": "Master Cantonese container and food classifiers (碗 wun2, 碟 dip6, 樽 zeon1, 罐 gun3, 粒 nap1, 包 baau1) for dining and grocery shopping.",
        "prerequisites": [
            "hk-u4-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u4-l2"
            ]
        },
        "presentation": {
            "explanation": "去茶樓飲茶或者茶餐廳點餐，容器量詞無處不在！\n\n1. 餐飲容器量詞 (Dining & Container Classifiers):\n- **碗 (wun2)**：用於碗裝食物，例如：一碗雲吞麵 (a bowl of wonton noodles), 一碗白飯 (a bowl of white rice)。\n- **碟 (dip6)**：用於盤裝菜餚，例如：一碟乾炒牛河 (a plate of beef chow fun), 一碟油菜 (a plate of cooked greens)。\n- **樽 (zeon1)**：用於瓶裝飲料，例如：一樽可樂 (a bottle of Coke), 一樽蒸餾水 (a bottle of distilled water)。\n- **罐 (gun3)**：用於易拉罐/罐頭，例如：一罐啤酒 (a can of beer), 一罐豆豉鯪魚 (a tin of dace in black bean sauce)。\n\n2. 小件與包裝量詞 (Granular & Packaging Classifiers):\n- **粒 (nap1 / lap1)**：用於小顆粒狀物體（糖果、藥丸、葡萄、米粒、魚蛋），例如：食兩粒感冒藥 (take two cold pills), 一粒魚蛋 (a fishball)。\n- **包 (baau1)**：用於袋裝/包裝，例如：一包薯片 (a bag of chips), 一包紙巾 (a pack of tissues)。",
            "examples": [
                {
                    "target": "侍應，唔該畀一碗熱辣辣嘅鮮蝦雲吞麵同一碟白灼菜心！",
                    "reading": "si6 jing3, m4 goi1 bei2 jat1 wun2 jit6 laat6 laat6 ge3 sin1 haa1 wan4 tan1 min6 tung4 jat1 dip6 baak6 coek3 coi3 sam1!",
                    "translation": "Waiter, please give me a piping hot bowl of fresh shrimp wonton noodles and a plate of boiled choy sum!"
                },
                {
                    "target": "天氣好熱，我想去便利店買一樽冰凍嘅蒸餾水。",
                    "reading": "tin1 hei3 hou2 jit6, ngo5 soeng2 heoi3 bin6 lei6 dim3 maai5 jat1 zeon1 bing1 dung3 ge3 zing1 lau4 seoi2.",
                    "translation": "The weather is very hot; I want to go to the convenience store to buy a bottle of ice-cold distilled water."
                },
                {
                    "target": "呢包紙巾幾多錢呀？我想買兩包放喺手袋入面。",
                    "reading": "ni1 baau1 zi2 gan1 gei2 do1 cin2 aa3? ngo5 soeng2 maai5 loeng5 baau1 fong3 hai2 sau2 doi2 jap6 min6.",
                    "translation": "How much is this pack of tissues? I want to buy two packs to put in my handbag."
                }
            ],
            "mnemonics": [
                "Container Chant: 飯麵用「碗」(wun2); 炒粉用「碟」(dip6); 汽水用「樽」(zeon1) /「罐」(gun3); 魚蛋用「粒」(nap1)!"
            ],
            "culturalNotes": [
                "In Hong Kong street food stalls (街頭小食), fishballs are famously ordered by the skewer or individual pieces: «買六粒咖喱魚蛋» (buy six curry fishballs)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺茶餐廳點選「雲吞麵」或者「皮蛋瘦肉粥」，最地道標準嘅容器量詞係：",
                    "options": [
                        "條",
                        "張",
                        "碗 (wun2 - Bowl)"
                    ],
                    "answerIndex": 2,
                    "explanation": "碗 (wun2) is the container classifier for bowls of soup, noodles, and congee."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在廣東話中，形容糖果、藥丸或者魚蛋等顆粒狀小物品，專用量詞是：",
                    "options": [
                        "粒 (nap1 - Granule/piece)",
                        "架",
                        "間"
                    ],
                    "answerIndex": 0,
                    "explanation": "粒 (nap1 / lap1) is the standard Cantonese classifier for small round or granular items like pills, beads, and fishballs."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中容器與飲食量詞「碗/碟/樽/粒/包」的精確搭配，下列哪一項表述完全正確？",
                    "options": [
                        "「碗」用於麵食米飯，「碟」用於炒菜盤裝，「樽/罐」用於瓶罐飲料，「粒」用於顆粒小食或藥丸，「包」用於袋裝紙巾零食 (wun2 for bowls, dip6 for plates, zeon1/gun3 for bottles/cans, nap1 for small granules/fishballs, baau1 for bags/packs)",
                        "「碗」只能用來數飛機",
                        "「粒」在廣東話中表示大樓"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately articulates food and container classifier distinctions."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'one bowl' in Cantonese (一碗):",
                    "acceptedAnswers": [
                        "一碗",
                        "jat1wun2",
                        "jat1 wun2",
                        "Jat1 wun2",
                        "Jat1wun2"
                    ],
                    "explanation": "一碗 (jat1 wun2) means 'one bowl' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u4-l4": {
        "id": "hk-u4-l4",
        "unit": "hk-u4",
        "level": "A1",
        "objective": "Master the Cantonese plural collective classifier 啲 (di1), constructing demonstrative plural determiners (呢啲 ni1 di1, 嗰啲 go2 di1, 邊啲 bin1 di1) and partitive expressions.",
        "prerequisites": [
            "hk-u4-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u4-l3"
            ]
        },
        "presentation": {
            "explanation": "**「啲 (di1)」**係廣東話中最神奇又多功能嘅核心詞彙之一，兼具**複數量詞**同**微量副詞**兩大功能！\n\n1. 複數指示體系 (Plural Demonstrative System):\n- **呢啲 (ni1 di1)**：These / these ones（近指複數）。\n  - 「呢啲水果好甜好新鮮。」(These fruits are very sweet and fresh.)\n- **嗰啲 (go2 di1)**：Those / those ones（遠指複數）。\n  - 「嗰啲書全部都係我嘅。」(Those books are all mine.)\n- **邊啲 (bin1 di1)**：Which ones（疑問複數）。\n  - 「邊啲文件需要經理簽名呀？」(Which documents require the manager's signature?)\n\n2. 「啲」嘅兼類用法 (Other Key Uses of 啲 di1):\n- **部分/一些 (Some / a bit of)**：例如「飲啲水」(drink some water)、「食啲嘢」(eat something)。\n- **形容詞比較後綴 (A bit more - Adj + 啲)**：例如「平啲」(a bit cheaper)、「快啲」(faster)、「大啲」(a bit bigger)。",
            "examples": [
                {
                    "target": "呢啲點心全部都係師傅今朝現包現蒸嘅。",
                    "reading": "ni1 di1 dim2 sam1 cyun4 bou6 dou1 hai6 si1 fu2 gam1 ziu1 jin6 baau1 jin6 zing1 ge3.",
                    "translation": "These dim sum are all freshly wrapped and steamed by the chef this morning."
                },
                {
                    "target": "嗰啲相片記錄咗我哋大學畢業嗰陣嘅美好回憶。",
                    "reading": "go2 di1 soeng2 pin2 gei3 luk6 zo2 ngo5 dei6 daai6 hok6 bat1 jip6 go2 zan6 ge3 mei5 hou2 wui4 jik1.",
                    "translation": "Those photos recorded the wonderful memories of our university graduation."
                },
                {
                    "target": "請問呢度邊啲菜式係冇辣嘅？",
                    "reading": "cing2 man6 ni1 dou6 bin1 di1 coi3 sik1 hai6 mou5 laat6 ge3?",
                    "translation": "Excuse me, which dishes here are non-spicy?"
                }
            ],
            "mnemonics": [
                "Plural 啲 (di1): 呢啲(These), 嗰啲(Those), 邊啲(Which ones) + 食啲嘢(Eat some) + 平啲(Cheaper)!"
            ],
            "culturalNotes": [
                "The word «啲» is fundamental to Cantonese conversation; whether softening requests («飲啲茶啦»), softening prices («平啲啦»), or grouping items («呢啲»), it adds natural warmth."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話入面，指代近處複數事物「這些（these）」嘅正確字詞係：",
                    "options": [
                        "呢個",
                        "嗰啲",
                        "呢啲 (ni1 di1 - These / these ones)"
                    ],
                    "answerIndex": 2,
                    "explanation": "呢啲 (ni1 di1) is the proximal plural demonstrative in Cantonese."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "如果要問店員「哪些是特價商品？」，在廣東話中「哪些 (which ones)」應當表述為：",
                    "options": [
                        "邊個",
                        "邊啲 (bin1 di1 - Which ones)",
                        "邊度"
                    ],
                    "answerIndex": 1,
                    "explanation": "邊啲 (bin1 di1) represents the plural interrogative 'which ones'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中複數指示詞「呢啲/嗰啲/邊啲」與「啲」的多功能語法（複數、部分、程度），下列哪一項表述完全正確？",
                    "options": [
                        "「啲」在廣東話中只能表示單數",
                        "「呢啲」表示遠指",
                        "「啲 (di1)」可與呢/嗰/邊結合成複數指示（呢啲/嗰啲/邊啲），亦可用作部分量詞（食啲嘢）或程度比較詞（平啲） (di1 forms plurals ni1 di1/go2 di1/bin1 di1, partitives, and comparatives like peng4 di1)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately articulates the diverse and essential functions of the Cantonese particle 啲."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'these / these ones' in Cantonese (呢啲):",
                    "acceptedAnswers": [
                        "呢啲",
                        "ni1di1",
                        "ni1 di1",
                        "Ni1 di1",
                        "Ni1di1"
                    ],
                    "explanation": "呢啲 (ni1 di1) means 'these / these ones' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u4-l5": {
        "id": "hk-u4-l5",
        "unit": "hk-u4",
        "level": "A1",
        "objective": "Synthesize all shape, container, building, and plural classifiers into an authentic Hong Kong wet market grocery shopping dialogue.",
        "prerequisites": [
            "hk-u4-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u4-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢課綜合實戰篇，我哋將第四單元學到嘅所有量詞（個、隻、條、間、碗、碟、樽、粒、包、呢啲）帶入最富嶺南煙火氣嘅場景——香港街市買餸！\n\n1. 街市買餸經典量詞與術語 (Wet Market Classifiers & Terms):\n- **買餸 (maai5 sung3)**：Buying groceries/ingredients for cooking（廣東家庭每日必備活動）。\n- **斤 / 兩 (gan1 / loeng2)**：司馬斤（1斤 = 16兩 = 約604克），街市計重標準。\n- **一條石斑魚 (jat1 tiu4 sek6 baan1 jyu2)**：A garoupa fish。\n- **一隻新鮮走地雞 (jat1 zek3 san1 sin1 zau2 dei6 gai1)**：A fresh free-range chicken。\n- **兩斤菜心 (loeng5 gan1 coi3 sam1)**：Two catties of choy sum。\n\n2. 第四單元實戰對話範例 (Unit 4 Master Dialogue):\n- **顧客David**：‘老闆，早晨！呢條石斑魚幾多錢一斤呀？’\n- **魚檔老闆**：‘早晨！好生猛㗎，六十八蚊一斤，呢條魚啱啱兩斤重。’\n- **顧客David**：‘好，幫我執呢條啦！另外隔籬菜檔嗰啲菜心好唔好食呀？’\n- **魚檔老闆**：‘嗰啲菜心好甜好嫩，你買兩斤返去白灼一流呀！’\n- **David**：‘唔該晒老闆！’",
            "examples": [
                {
                    "target": "我今日放工之後要去街市買餸返屋企煮飯。",
                    "reading": "ngo5 gam1 jat6 fong3 gung1 zi1 hau6 jiu3 heoi3 gaai1 si5 maai5 sung3 faan1 uk1 kei2 zyu2 faan6.",
                    "translation": "After getting off work today, I need to go to the wet market to buy groceries and go home to cook."
                },
                {
                    "target": "呢隻走地雞好新鮮，一隻賣一百二十蚊。",
                    "reading": "ni1 zek3 zau2 dei6 gai1 hou2 san1 sin1, jat1 zek3 maai6 jat1 baak3 ji6 sap6 man1.",
                    "translation": "This free-range chicken is very fresh; one chicken sells for 120 dollars."
                },
                {
                    "target": "唔該畀兩斤菜心同一包豆腐我。",
                    "reading": "m4 goi1 bei2 loeng5 gan1 coi3 sam1 tung4 jat1 baau1 dau6 fu6 ngo5.",
                    "translation": "Please give me two catties of choy sum and a pack of tofu."
                }
            ],
            "mnemonics": [
                "Market Flow: 街市買餸(Grocery) -> 條魚隻雞(Fish & Chicken) -> 兩斤菜心(Catties of greens) -> 滿載而歸(Rich harvest)!"
            ],
            "culturalNotes": [
                "Hong Kong wet markets («街市») are culinary cultural gems; buying lively fresh fish («生猛游水海鮮») and local greens using authentic Cantonese classifiers is a cornerstone of daily Hong Kong life."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話入面，指稱去街市購買烹飪食材「買菜 / 買菜買肉做飯」，最地道標準嘅詞彙係：",
                    "options": [
                        "買單",
                        "買餸 (maai5 sung3 - Grocery shopping for food)",
                        "買嘢"
                    ],
                    "answerIndex": 1,
                    "explanation": "買餸 (maai5 sung3) specifically refers to grocery shopping for fresh cooking ingredients."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在街市買魚買雞時，分別指稱「一（ ）魚」和「一（ ）雞」，最地道精確的量詞搭配是：",
                    "options": [
                        "一隻魚，一條雞",
                        "一條魚，一隻雞 (jat1 tiu4 jyu2, jat1 zek3 gai1)",
                        "一個魚，一個雞"
                    ],
                    "answerIndex": 1,
                    "explanation": "Fish takes 條 (tiu4) and fowl/chicken takes 隻 (zek3)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話第四單元形狀量詞（隻/條/個）、建築交通量詞（間/架/部）、飲食量詞（碗/碟/樽）及街市買餸實戰，下列哪一項總括完全正確？",
                    "options": [
                        "廣東話量詞只能隨意替換不需要特定搭配",
                        "廣東話量詞系統精準嚴密（一隻雞、一條魚、一間舖、一部車、一碗麵），結合複數「呢啲」與市井實戰「買餸」，構成生活交流基石 (Rigorous classifier syntax paired with plural 呢啲 and wet market shopping)",
                        "買餸只能在超級市場說"
                    ],
                    "answerIndex": 1,
                    "explanation": "Synthesizes the rich classifier paradigm and wet market conversational context."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'grocery shopping for food' in Cantonese (買餸):",
                    "acceptedAnswers": [
                        "買餸",
                        "maai5sung3",
                        "maai5 sung3",
                        "Maai5 sung3",
                        "Maai5sung3",
                        "买餸"
                    ],
                    "explanation": "買餸 (maai5 sung3) means 'grocery shopping for food ingredients' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u5-l1": {
        "id": "hk-u5-l1",
        "unit": "hk-u5",
        "level": "A1",
        "objective": "Master foundational everyday Cantonese action verbs and lexicalized verb-object collocations (食飯, 飲茶, 睇電視, 聽歌, 講嘢, 行街).",
        "prerequisites": [
            "hk-u4-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u4-l5"
            ]
        },
        "presentation": {
            "explanation": "廣東話嘅常用動作動詞極為生動，好多保留咗古漢語詞彙，同普通話有好大分別！\n\n1. 核心動作動詞與動賓搭配 (Daily Verbs & Objects):\n- **食 (sik6)**：Eat。\n  - **食飯 (sik6 faan6)**：Eat a meal / have dinner。\n  - **食嘢 (sik6 je5)**：Eat something / snack。\n- **飲 (jam2)**：Drink。\n  - **飲水 (jam2 seoi2)**：Drink water。\n  - **飲茶 (jam2 caa4)**：Drink tea / go for dim sum。\n- **睇 (tai2)**：Look / see / watch / read。\n  - **睇書 (tai2 syu1)**：Read a book。\n  - **睇電視 (tai2 din6 si6)**：Watch television。\n  - **睇戲 (tai2 hei3)**：Watch a movie。\n- **聽 (teng1)**：Listen (聽歌 teng1 go1 listen to music, 聽電話 teng1 din6 waa2 answer phone)。\n- **講 (gong2)**：Speak / say (講廣東話 gong2 gwong2 dung1 waa2 speak Cantonese, 講嘢 gong2 je5 talk)。\n- **行 (haang4)**：Walk / stroll (行街 haang4 gaai1 go window shopping / walk on the street)。\n- **走 (zau2)**：Leave / depart (我走先喇 ngo5 zau2 sin1 laa3 I'm leaving first)。",
            "examples": [
                {
                    "target": "我每晚食完飯之後，都鍾意坐喺梳化睇一陣電視新聞。",
                    "reading": "ngo5 mui5 maan5 sik6 jyun4 faan6 zi1 hau6, dou1 zung1 ji3 co5 hai2 so1 faa2 tai2 jat1 zan6 din6 si6 san1 man4.",
                    "translation": "Every evening after eating dinner, I like to sit on the sofa and watch TV news for a while."
                },
                {
                    "target": "星期六下晝，我約咗朋友去銅鑼灣行街買衫。",
                    "reading": "sing1 kei4 luk6 haa6 ng5, ngo5 joek3 zo2 pang4 jau5 heoi3 tung4 lo4 waan1 haang4 gaai1 maai5 saam1.",
                    "translation": "On Saturday afternoon, I arranged to go shopping for clothes in Causeway Bay with my friend."
                },
                {
                    "target": "佢好鍾意邊聽歌邊溫習功課。",
                    "reading": "keoi5 hou2 zung1 ji3 bin1 teng1 go1 bin1 wan1 zaap6 gung1 fo3.",
                    "translation": "She really likes listening to music while revising her homework."
                }
            ],
            "mnemonics": [
                "Action Collocations: 食飯(Eat), 飲茶(Drink tea), 睇電視(Watch TV), 聽歌(Listen music), 行街(Stroll street)!"
            ],
            "culturalNotes": [
                "«睇» (tai2) covers English 'look', 'see', 'watch', and 'read' (睇書 read books, 睇戲 watch movies, 睇醫生 see a doctor), making it one of the most versatile sensory verbs in Cantonese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話入面表示「看電視 / 觀看電視節目」，最地道標準嘅動賓搭配係：",
                    "options": [
                        "看電視",
                        "睇電視 (tai2 din6 si6 - Watch TV)",
                        "見電視"
                    ],
                    "answerIndex": 1,
                    "explanation": "睇 (tai2) is the standard Cantonese verb for look/watch/see/read."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話中「行街 (haang4 gaai1)」的字面與實際日常含義是：",
                    "options": [
                        "逛街購物 (Strolling / window shopping)",
                        "在馬路上跑步",
                        "修理街道"
                    ],
                    "answerIndex": 0,
                    "explanation": "行街 (haang4 gaai1) means going shopping, walking around the streets, or browsing shops."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話日常基礎動詞「食、飲、睇、聽、講、行、走」的語義與搭配，下列哪一項表述完全正確？",
                    "options": [
                        "廣東話不能表達吃喝看聽等動作",
                        "「食」表吃（食飯），「飲」表喝（飲茶），「睇」表看/讀（睇電視/睇書），「行街」表逛街，「走」表離開 (sik6 eat, jam2 drink, tai2 watch/read, haang4 gaai1 window shop, zau2 leave)",
                        "「走」在廣東話中只能表示跑步"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately articulates the core Cantonese daily verbs and distinctive semantics."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'watch television' in Cantonese (睇電視):",
                    "acceptedAnswers": [
                        "睇電視",
                        "tai2din6si6",
                        "tai2 din6 si6",
                        "Tai2 din6 si6",
                        "Tai2din6si6",
                        "睇电视"
                    ],
                    "explanation": "睇電視 (tai2 din6 si6) means 'watch television' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u5-l2": {
        "id": "hk-u5-l2",
        "unit": "hk-u5",
        "level": "A1",
        "objective": "Master the Cantonese continuous aspect marker 緊 (gan2), attaching directly after verbs (V + 緊) to denote actions in progress (equivalent to English -ing / Mandarin 在...着).",
        "prerequisites": [
            "hk-u5-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u5-l1"
            ]
        },
        "presentation": {
            "explanation": "廣東話表達「正在進行」非常乾脆俐落——只要喺動詞後面直接加上動態助詞**「緊 (gan2)」**！\n\n1. 進行態語法結構 (Continuous Aspect: V + 緊 + O):\n- **做緊嘢 (zou6 gan2 je5)**：Working / doing stuff right now。\n- **食緊飯 (sik6 gan2 faan6)**：Eating a meal right now。\n- **開緊會 (hoi1 gan2 wui6)**：Currently in a meeting。\n- **講緊電話 (gong2 gan2 din6 waa2)**：Talking on the phone。\n- **搭緊車 (daap3 gan2 ce1)**：On the bus / riding transit right now。\n\n2. 與其他語言對比 (Comparative Insights):\n- 普通話通常在動詞前加「正在」（例如「正在吃飯」）；而廣東話**直接將「緊」放在動詞正後方**（「食緊飯」），結構緊湊自然！\n- 否定進行態：**「唔係做緊……」**或**「冇做緊……」**。",
            "examples": [
                {
                    "target": "唔好意思呀，經理而家同緊客戶開緊會，請你稍等一陣。",
                    "reading": "m4 hou2 ji3 si1 aa3, ging1 lei5 ji4 gaa1 tung4 gan2 haak3 wu6 hoi1 gan2 wui6, cing2 nei5 saau2 dang2 jat1 zan6.",
                    "translation": "Excuse me, the manager is currently in a meeting with a client, please wait for a moment."
                },
                {
                    "target": "我搭緊地鐵返緊屋企，大概十五分鐘後到。",
                    "reading": "ngo5 daap3 gan2 dei6 tit3 faan1 gan2 uk1 kei2, daai6 koi3 sap6 ng5 fan1 zung1 hau6 dou3.",
                    "translation": "I am on the subway heading home, arriving in about 15 minutes."
                },
                {
                    "target": "你做緊咩呀？我睇緊一本好得意嘅小說。",
                    "reading": "nei5 zou6 gan2 me1 aa3? ngo5 tai2 gan2 jat1 bun2 hou2 dak1 ji3 ge3 siu2 syut3.",
                    "translation": "What are you doing? I am reading a very interesting novel."
                }
            ],
            "mnemonics": [
                "Continuous Formula: Verb + 緊 (gan2) = -ing in action (食緊, 做緊, 開緊會)!"
            ],
            "culturalNotes": [
                "When answering a phone in Hong Kong when busy, people often say «我做緊嘢/開緊會，一陣覆你» (I'm working/in a meeting, I'll get back to you in a bit)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺廣東話中，如果要表達「正在工作 / 正在做事」，最標準地道嘅進行態說法係：",
                    "options": [
                        "在做嘢",
                        "做緊嘢 (zou6 gan2 je5 - Working / doing things right now)",
                        "做咗嘢"
                    ],
                    "answerIndex": 1,
                    "explanation": "做緊嘢 (zou6 gan2 je5) uses the continuous aspect particle 緊 (gan2)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在動詞後加上助詞「緊 (gan2)」在廣東話語法中的核心功能是：",
                    "options": [
                        "表示動作正在進行中 (Denoting continuous ongoing action -ing)",
                        "表示動作已經過去完成",
                        "表示將來永遠不會發生"
                    ],
                    "answerIndex": 0,
                    "explanation": "緊 (gan2) is the post-verbal marker for ongoing actions in progress."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話進行體助詞「緊 (gan2)」的語法位置（V+緊+O）與語義特徵，下列哪一項表述完全正確？",
                    "options": [
                        "「緊」必須放在句子開頭",
                        "「緊」只能用在名詞後面表示空間",
                        "「緊 (gan2)」直接後綴於動詞（如做緊嘢、開緊會、搭緊車），精確表達動作正在進行中 (V+gan2 denotes continuous aspect, e.g. zou6 gan2 je5, hoi1 gan2 wui6)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately describes the syntactic position and aspectual role of 緊 (gan2)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'working / doing things right now' in Cantonese (做緊嘢):",
                    "acceptedAnswers": [
                        "做緊嘢",
                        "zou6gan2je5",
                        "zou6 gan2 je5",
                        "Zou6 gan2 je5",
                        "Zou6gan2je5",
                        "做紧嘢",
                        "做緊野"
                    ],
                    "explanation": "做緊嘢 (zou6 gan2 je5) means 'working / doing things right now' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u5-l3": {
        "id": "hk-u5-l3",
        "unit": "hk-u5",
        "level": "A1",
        "objective": "Master the locative preposition/verb 喺 (hai2 - at/in/on), locative interrogative 喺邊度, and sentence structure S + 喺 + Place + Verb + Object.",
        "prerequisites": [
            "hk-u5-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u5-l2"
            ]
        },
        "presentation": {
            "explanation": "廣東話表達「喺某個地方做某件事」，核心字係**「喺 (hai2)」**，相當於普通話嘅「在」同英文嘅「at / in / on」！\n\n1. 處所句型結構 (Locative Syntax: S + 喺 + Location + Action):\n- **喺屋企 (hai2 uk1 kei2)**：At home。\n  - 「我今晚喺屋企食飯。」(I am eating dinner at home tonight.)\n- **喺公司 (hai2 gung1 si1)**：At the company / in the office。\n  - 「經理喺會議室開緊會。」(The manager is having a meeting in the conference room.)\n- **喺茶餐廳 (hai2 caa4 caan1 teng1)**：At the tea restaurant。\n  - 「我哋喺茶餐廳食緊下午茶。」(We are having afternoon tea at the tea restaurant.)\n\n2. 詢問處所 (Asking Where Actions Occur):\n- **「你喺邊度呀？」(Where are you?)**\n- **「你喺邊度返工呀？」(Where do you work?)**\n- **「我哋陣間喺邊度等呀？」(Where are we waiting later?)**",
            "examples": [
                {
                    "target": "我今日放假，全日留喺屋企睇書同聽歌。",
                    "reading": "ngo5 gam1 jat6 fong3 gaa3, cyun4 jat6 lau4 hai2 uk1 kei2 tai2 syu1 tung4 teng1 go1.",
                    "translation": "I am on holiday today, staying at home all day reading books and listening to music."
                },
                {
                    "target": "你而家喺邊度呀？我喺地鐵站A出口等緊你。",
                    "reading": "nei5 ji4 gaa1 hai2 bin1 dou6 aa3? ngo5 hai2 dei6 tit3 zaam6 A ceot1 hau2 dang2 gan2 nei5.",
                    "translation": "Where are you right now? I am waiting for you at MTR Exit A."
                },
                {
                    "target": "陳小姐平時好鍾意喺中環嗰間健身室做運動。",
                    "reading": "can4 siu2 ze2 ping4 si4 hou2 zung1 ji3 hai2 zung1 waan4 go2 gaan1 gin6 san1 sat1 zou6 wan6 dung6.",
                    "translation": "Miss Chan usually really likes working out at that gym in Central."
                }
            ],
            "mnemonics": [
                "Location Frame: 主語 + 喺 (hai2) + 地方 (Place) + 動詞 (Action)!"
            ],
            "culturalNotes": [
                "«屋企» (uk1 kei2) is the universal Cantonese word for 'home' (literally roof/house structure), expressing deep warmth and family life."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話入面表示「在家裏（at home）」最地道標準嘅詞彙係：",
                    "options": [
                        "喺家",
                        "喺屋企 (hai2 uk1 kei2 - At home)",
                        "在屋企"
                    ],
                    "answerIndex": 1,
                    "explanation": "喺屋企 (hai2 uk1 kei2) is the standard Cantonese expression for 'at home'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "如果要用廣東話詢問朋友「你現在在哪裏？」，最自然的句子是：",
                    "options": [
                        "你而家喺邊度呀？ (nei5 ji4 gaa1 hai2 bin1 dou6 aa3? - Where are you right now?)",
                        "你去邊度呢？",
                        "你係邊個呀？"
                    ],
                    "answerIndex": 0,
                    "explanation": "你而家喺邊度呀？ specifically asks 'where are you right now?'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話介詞/動詞「喺 (hai2)」的處所表達（如喺屋企、喺邊度）與語序規則，下列哪一項表述完全正確？",
                    "options": [
                        "「喺」只能用來表示時間",
                        "「喺」在廣東話中表示否定",
                        "「喺 (hai2)」相當於「在」，常引導地點處所（如喺屋企、喺公司），構成「S + 喺 + 地點 + V + O」的標準日常動作句式 (hai2 corresponds to 'at/in', introducing locations in S + hai2 + Place + V + O structure)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately defines the locative prepositional syntax of 喺 (hai2)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'at home' in Cantonese (喺屋企):",
                    "acceptedAnswers": [
                        "喺屋企",
                        "hai2uk1kei2",
                        "hai2 uk1 kei2",
                        "Hai2 uk1 kei2",
                        "Hai2uk1kei2",
                        "在屋企",
                        "喺屋企"
                    ],
                    "explanation": "喺屋企 (hai2 uk1 kei2) means 'at home' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u5-l4": {
        "id": "hk-u5-l4",
        "unit": "hk-u5",
        "level": "A1",
        "objective": "Master asking what someone is doing in the present moment using 咩 / 乜嘢 (做緊咩, 諗緊咩, 搞緊咩, 睇緊乜嘢).",
        "prerequisites": [
            "hk-u5-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u5-l3"
            ]
        },
        "presentation": {
            "explanation": "問人「正在做甚麼」，廣東話口語極其簡潔地道，核心疑問代詞係**「咩 (me1)」**同**「乜嘢 (mat1 je5)」**！\n\n1. 核心進行時問句 (Continuous Inquiries):\n- **你做緊咩呀？ (nei5 zou6 gan2 me1 aa3?)**：What are you doing right now?\n- **你諗緊咩呀？ (nei5 nam2 gan2 me1 aa3?)**：What are you thinking about?\n- **你搞緊咩呀？ (nei5 gaau2 gan2 me1 aa3?)**：What are you busy with / up to?\n- **你睇緊乜嘢呀？ (nei5 tai2 gan2 mat1 je5 aa3?)**：What are you watching/reading?\n\n2. 「咩」與「乜嘢」嘅關係 (me1 vs mat1 je5):\n- **乜嘢 (mat1 je5)**：完整形式，相當於「什麼 / What」。\n- **咩 (me1)**：超高頻縮略口語形式，日常對話中最常聽見（例如：做緊咩、食緊咩、講咩）！",
            "examples": [
                {
                    "target": "喂，你喺公司做緊咩呀？今晚一齊食飯好唔好？",
                    "reading": "wai3, nei5 hai2 gung1 si1 zou6 gan2 me1 aa3? gam1 maan5 jat1 cai4 sik6 faan6 hou2 m4 hou2?",
                    "translation": "Hey, what are you doing at the office? How about having dinner together tonight?"
                },
                {
                    "target": "你一個人坐喺度發呆，諗緊咩諗得咁入神呀？",
                    "reading": "nei5 jat1 go3 jan4 co5 hai2 dou6 faat3 ngoi4, nam2 gan2 me1 nam2 dak1 gam3 jap6 san4 aa3?",
                    "translation": "You are sitting here alone zoning out, what are you thinking about so deeply?"
                },
                {
                    "target": "佢哋幾個人圍埋一齊，搞緊咩新項目呀？",
                    "reading": "keoi5 dei6 gei2 go3 jan4 wai4 maai4 jat1 cai4, gaau2 gan2 me1 san1 hong6 muk6 aa3?",
                    "translation": "Several of them are gathered together, what new project are they working on?"
                }
            ],
            "mnemonics": [
                "What Inquiry: 做緊咩(Doing what), 諗緊咩(Thinking what), 搞緊咩(Up to what)!"
            ],
            "culturalNotes": [
                "«搞緊咩» (gaau2 gan2 me1) is dynamic Cantonese slang; «搞» (gaau2) means to organize, manage, handle, or do."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話日常通話或見面時，詢問朋友「你正在做甚麼？」，最常用地道嘅口語問句係：",
                    "options": [
                        "你做緊咩呀？ (nei5 zou6 gan2 me1 aa3? - What are you doing?)",
                        "你係邊個呀？",
                        "你去邊度呀？"
                    ],
                    "answerIndex": 0,
                    "explanation": "你做緊咩呀？ (nei5 zou6 gan2 me1 aa3?) is the universal Cantonese way of asking 'what are you doing?'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在廣東話中，疑問詞「什麼 (what)」最常簡化為哪一個單字：",
                    "options": [
                        "乜",
                        "邊",
                        "咩 (me1 - What)"
                    ],
                    "answerIndex": 2,
                    "explanation": "咩 (me1) is the quintessential fused spoken word for 'what' in Cantonese."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中「做緊咩」、「諗緊咩」以及疑問詞「咩/乜嘢」的用法，下列哪一項表述完全正確？",
                    "options": [
                        "「咩」在廣東話中只能用來指羊",
                        "「做緊咩」只能用於罵人",
                        "「咩/乜嘢」表示「甚麼」，結合動態助詞「緊」可構成「做緊咩（正在做甚麼）」、「諗緊咩（正在想甚麼）」等生動進行態疑問句 (me1/mat1 je5 mean 'what'; paired with gan2 it forms zou6 gan2 me1 'what are you doing', nam2 gan2 me1 'what are you thinking')"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately articulates the interrogative system and aspectual fusion with 緊."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'doing what right now' in Cantonese (做緊咩):",
                    "acceptedAnswers": [
                        "做緊咩",
                        "zou6gan2me1",
                        "zou6 gan2 je5",
                        "Zou6 gan2 me1",
                        "Zou6gan2me1",
                        "做紧咩",
                        "做緊乜"
                    ],
                    "explanation": "做緊咩 (zou6 gan2 me1) means 'doing what right now' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u5-l5": {
        "id": "hk-u5-l5",
        "unit": "hk-u5",
        "level": "A1",
        "objective": "Synthesize daily action verbs, continuous 緊, locative 喺, and status inquiries into an authentic real-time telephone conversation.",
        "prerequisites": [
            "hk-u5-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u5-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢課綜合實戰篇，我哋將第五單元學到嘅日常動詞、進行態「緊」、處所介詞「喺」同問句「做緊咩」全面結合，完成一段繁忙職場電話溝通！\n\n1. 辦公室電話溝通必備短語 (Workplace Phone Phrases):\n- **聽電話 (teng1 din6 waa2)**：Answer the phone。\n- **開緊會 (hoi1 gan2 wui6)**：Currently in a meeting。\n- **講緊電話 (gong2 gan2 din6 waa2)**：On another phone line。\n- **一陣覆你 (jat1 zan6 fuk1 nei5)**：I'll get back to / call you back in a bit。\n- **順便 (seon6 bin6)**：Conveniently / by the way。\n\n2. 第五單元實戰對話範例 (Unit 5 Master Dialogue):\n- **同事David**：‘喂，阿May，你喺邊度呀？做緊咩呀？’\n- **同事May**：‘喂David，我喺灣仔辦公室同經理開緊會呀，做咩事呀？’\n- **同事David**：‘哦！我想問下你手上嗰份宣傳合約做成點呀？’\n- **同事May**：‘我準備緊最後修訂版，一陣開完會即刻覆你電話啦！’\n- **同事David**：‘好啊，唔該晒May，一陣見！’",
            "examples": [
                {
                    "target": "喂，唔好意思呀，我喺總部開緊會，一陣開完會我打返畀你！",
                    "reading": "wai3, m4 hou2 ji3 si1 aa3, ngo5 hai2 zung2 bou6 hoi1 gan2 wui6, jat1 zan6 hoi1 jyun4 wui6 ngo5 daa2 faan1 bei2 nei5!",
                    "translation": "Hey, sorry, I am in a meeting at headquarters right now, I'll call you back once the meeting finishes!"
                },
                {
                    "target": "佢而家喺房入面講緊長途電話，請你等兩個字先。",
                    "reading": "keoi5 ji4 gaa1 hai2 fong2 jap6 min6 gong2 gan2 coeng4 tou4 din6 waa2, cing2 nei5 dang2 loeng5 go3 zi6 sin1.",
                    "translation": "He is on a long-distance phone call in his room right now, please wait for ten minutes first."
                },
                {
                    "target": "我喺街市買緊餸，順便幫你買兩罐咖啡返嚟啦。",
                    "reading": "ngo5 hai2 gaai1 si5 maai5 gan2 sung3, seon6 bin6 bong1 nei5 maai5 loeng5 gun3 gaa3 fe1 faan1 lai4 laa1.",
                    "translation": "I am buying groceries at the wet market, I'll conveniently buy two cans of coffee back for you."
                }
            ],
            "mnemonics": [
                "Phone Flow: 喺邊度(Where) -> 開緊會(In meeting) -> 準備緊(Preparing) -> 一陣覆你(Call back soon)!"
            ],
            "culturalNotes": [
                "In fast-paced Hong Kong, phone efficiency is key; saying «開緊會，一陣覆你» concisely conveys busy status while maintaining professional courtesy."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺工作通話中告知對方「我目前正在開會」，最標準地道嘅廣東話說法係：",
                    "options": [
                        "我係開會",
                        "我開緊會 (ngo5 hoi1 gan2 wui6 - I am currently in a meeting)",
                        "我開完會"
                    ],
                    "answerIndex": 1,
                    "explanation": "我開緊會 (ngo5 hoi1 gan2 wui6) precisely expresses being in a meeting right now."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "通話結束前向對方表示「稍後給你回覆 / 一會兒回電」，廣東話簡潔地道的表達是：",
                    "options": [
                        "一陣覆你 (jat1 zan6 fuk1 nei5 - Reply / call you back in a bit)",
                        "永不回覆",
                        "出年覆你"
                    ],
                    "answerIndex": 0,
                    "explanation": "一陣覆你 (jat1 zan6 fuk1 nei5) means 'I will reply/call you back in a little bit'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話第五單元日常動作動詞（食/睇/聽/行）、進行體（緊）、處所介詞（喺）與即時通訊溝通（開緊會/一陣覆你），下列哪一項總括完全正確？",
                    "options": [
                        "廣東話在電話中不能表達正在進行的狀態",
                        "掌握動作詞彙、進行態「緊」、地點「喺」及問句「做緊咩」，能流暢自如地進行日常狀態通報與職場電話對接 (Fluid control of action verbs, continuous gan2, locative hai2, and phone dialogue)",
                        "「開緊會」是指正在散步"
                    ],
                    "answerIndex": 1,
                    "explanation": "Synthesizes the complete grammatical and communicative skillset of Unit 5."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'currently in a meeting' in Cantonese (開緊會):",
                    "acceptedAnswers": [
                        "開緊會",
                        "hoi1gan2wui6",
                        "hoi1 gan2 wui6",
                        "Hoi1 gan2 wui6",
                        "Hoi1gan2wui6",
                        "开紧会",
                        "開緊会"
                    ],
                    "explanation": "開緊會 (hoi1 gan2 wui6) means 'currently in a meeting' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u6-l1": {
        "id": "hk-u6-l1",
        "unit": "hk-u6",
        "level": "A2",
        "objective": "Master the Cantonese perfective aspect particle 咗 (zo2), attaching directly after verbs (V + 咗) to express completed action (equivalent to Mandarin 了 / English past-completed -ed).",
        "prerequisites": [
            "hk-u5-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u5-l5"
            ]
        },
        "presentation": {
            "explanation": "廣東話表達「已經完成某個動作」，最核心嘅動態助詞係**「咗 (zo2)」**！\n\n1. 完成態語法結構 (Perfective Aspect: V + 咗 + O):\n- **食咗飯 (sik6 zo2 faan6)**：Ate a meal / have eaten。\n- **買咗新衫 (maai5 zo2 san1 saam1)**：Bought new clothes。\n- **睇咗醫生 (tai2 zo2 ji1 sang1)**：Saw a doctor。\n- **走咗 (zau2 zo2)**：Left / departed。\n- **收到咗 (sau1 dou2 zo2)**：Received (it)。\n\n2. 咗 (zo2) 與普通話「了」嘅核心異同 (Grammatical Comparison):\n- 廣東話嘅「咗」**通常緊貼動詞後面**，表示動作完成（例如「我食咗飯」）；\n- 如果表示狀態改變或句末語氣，廣東話多數用句末語氣詞**「喇 (laa3)」**（例如「天黑喇」、「出發喇」），語法分工比普通話更為精確！",
            "examples": [
                {
                    "target": "我琴日晏晝喺旺角買咗一部最新款嘅手提電腦。",
                    "reading": "ngo5 kam4 jat6 aan3 zau3 hai2 wong6 gok3 maai5 zo2 jat1 bou6 zeoi3 san1 fun2 ge3 sau2 tai4 din6 nou5.",
                    "translation": "I bought a newest model laptop in Mong Kok yesterday afternoon."
                },
                {
                    "target": "你睇咗嗰套得獎電影未呀？我睇咗喇，真係好感人！",
                    "reading": "nei5 tai2 zo2 go2 tou3 dak1 zoeng2 din6 jing2 mei6 aa3? ngo5 tai2 zo2 laa3, zan1 hai6 hou2 gam2 jan4!",
                    "translation": "Have you seen that award-winning movie yet? I saw it, it's really touching!"
                },
                {
                    "target": "陳經理啱啱開完會走咗，你有急事可以打佢手機。",
                    "reading": "can4 ging1 lei5 ngaam1 ngaam1 hoi1 jyun4 wui6 zau2 zo2, nei5 jau5 gap1 si6 ho2 ji5 daa2 keoi5 sau2 gei1.",
                    "translation": "Manager Chan just finished the meeting and left; if you have urgent matters you can call his mobile."
                }
            ],
            "mnemonics": [
                "Completion Code: Verb + 咗 (zo2) = Done deal (食咗, 買咗, 睇咗)!"
            ],
            "culturalNotes": [
                "«食咗飯未呀？» (Have you eaten yet?) is Hong Kong's most ubiquitous greeting; the answer is either «食咗喇» (I've eaten) or «未呀» (Not yet)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺廣東話中表達「已經吃了飯」，最地道標準嘅動態完成助詞句式係：",
                    "options": [
                        "食完饭",
                        "食咗飯 (sik6 zo2 faan6 - Have eaten / ate)",
                        "食得飯"
                    ],
                    "answerIndex": 1,
                    "explanation": "食咗飯 (sik6 zo2 faan6) uses the perfective aspect particle 咗 (zo2)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話動態助詞「咗 (zo2)」在語法上的核心作用是：",
                    "options": [
                        "附在動詞後表示動作已完成 (Affixed to verbs to denote completed action)",
                        "表示未來即將發生的事",
                        "表示空間距離很遠"
                    ],
                    "answerIndex": 0,
                    "explanation": "咗 (zo2) is the primary aspect marker for completed actions in Cantonese."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話完成態助詞「咗 (zo2)」的語法位置與功能，下列哪一項表述完全正確？",
                    "options": [
                        "「咗」只能放在主語前面",
                        "「咗 (zo2)」緊貼於動詞後（如食咗、買咗、睇咗），精確表達動作已經完成；與句末變化助詞「喇」分工明確 (zo2 follows verbs to mark completed action, distinct from sentence-final change particle laa3)",
                        "廣東話沒有表示動作完成的助詞"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately articulates the post-verbal placement and aspectual semantics of 咗 (zo2)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'have eaten / ate a meal' in Cantonese (食咗飯):",
                    "acceptedAnswers": [
                        "食咗飯",
                        "sik6zo2faan6",
                        "sik6 zo2 faan6",
                        "Sik6 zo2 faan6",
                        "Sik6zo2faan6",
                        "食咗饭",
                        "吃咗飯"
                    ],
                    "explanation": "食咗飯 (sik6 zo2 faan6) means 'have eaten / ate a meal' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u6-l2": {
        "id": "hk-u6-l2",
        "unit": "hk-u6",
        "level": "A2",
        "objective": "Master the resultative completion particle 完 (jyun4 - finish/complete doing), distinguishing V+完 (exhaustion/completion of process) from V+咗 (event occurrence).",
        "prerequisites": [
            "hk-u6-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u6-l1"
            ]
        },
        "presentation": {
            "explanation": "除咗「咗 (zo2)」之外，廣東話仲有一個非常重要嘅結果動態助詞——**「完 (jyun4)」**！\n\n1. 「完 (jyun4)」嘅語法特徵 (Resultative Complement: V + 完 + O):\n- **做完 (zou6 jyun4)**：Finish doing / finish work。\n- **食完飯 (sik6 jyun4 faan6)**：Finish eating the meal (empty plate/done eating)。\n- **睇完本書 (tai2 jyun4 bun2 syu1)**：Finish reading the entire book。\n- **開完會 (hoi1 jyun4 wui6)**：Meeting adjourned / finished the meeting。\n- **講完 (gong2 jyun4)**：Finished talking / done speaking。\n\n2. 「咗 (zo2)」同「完 (jyun4)」嘅精妙分別 (Nuanced Distinction):\n- **「食咗飯」**：側重於**動作發生並完成**（相當於‘吃了飯’，未強調是否吃得乾乾淨淨）。\n- **「食完飯」**：側重於**整個吃飯過程徹底完結/吃光**（相當於‘吃完飯/結束用餐’），常接後續動作：「食完飯之後去行街」。",
            "examples": [
                {
                    "target": "我做完手頭上呢份報告之後，就可以準時六點鐘收工。",
                    "reading": "ngo5 zou6 jyun4 sau2 tau4 soeng6 ni1 fan6 bou3 gou3 zi1 hau6, zau6 ho2 ji5 zeon2 si4 luk6 dim2 zung1 sau1 gung1.",
                    "translation": "After I finish this report on hand, I can get off work on time at 6 o'clock."
                },
                {
                    "target": "大家食完飯之後，一齊去維港睇幻彩詠香江啦！",
                    "reading": "daai6 gaa1 sik6 jyun4 faan6 zi1 hau6, jat1 cai4 heoi3 wai4 gong2 tai2 waan6 coi2 wing6 hoeng1 gong1 laa1!",
                    "translation": "After everyone finishes dinner, let's go to Victoria Harbour together to watch A Symphony of Lights!"
                },
                {
                    "target": "佢講完電話之後，神情顯得非常輕鬆。",
                    "reading": "keoi5 gong2 jyun4 din6 waa2 zi1 hau6, san4 cing4 hin2 dak1 fei1 soeng4 hing1 sung1.",
                    "translation": "After he finished the phone call, his expression looked very relaxed."
                }
            ],
            "mnemonics": [
                "Process End: 做完(Done), 食完(Finished meal), 睇完(Finished reading) -> 後續動作接住嚟!"
            ],
            "culturalNotes": [
                "In daily conversations, «V + 完……之後» (After finishing V...) is the most natural sequential connector in Cantonese narrative structure."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺廣東話中表達「徹底做完手頭工作 / 任務完畢」，最恰當的動補結構是：",
                    "options": [
                        "做緊",
                        "做完 (zou6 jyun4 - Finish doing / completed work)",
                        "做緊嘢"
                    ],
                    "answerIndex": 1,
                    "explanation": "做完 (zou6 jyun4) indicates the thorough completion or finishing of the action."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話句子「食完飯之後去睇戲」中，「食完」強調的是：",
                    "options": [
                        "吃飯的過程已完全結束 (The entire eating process is finished/completed)",
                        "正在吃飯進行中",
                        "從來不吃飯"
                    ],
                    "answerIndex": 0,
                    "explanation": "食完 denotes that the dining process has reached its full conclusion."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中「完 (jyun4)」與「咗 (zo2)」的語意差別，下列哪一項表述完全正確？",
                    "options": [
                        "「咗」側重動作發生完成，而「完」側重過程徹底完結（如做完、食完、睇完），常與「之後」連用表示先後次序 (zo2 marks occurrence/completion, jyun4 emphasizes thorough finishing of process, often with zi1 hau6 'after')",
                        "「完」和「咗」沒有任何區別",
                        "「完」只能用在名詞前面"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately distinguishes between aspectual occurrence (zo2) and resultative exhaustion of process (jyun4)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'finish doing / done' in Cantonese (做完):",
                    "acceptedAnswers": [
                        "做完",
                        "zou6jyun4",
                        "zou6 jyun4",
                        "Zou6 jyun4",
                        "Zou6jyun4"
                    ],
                    "explanation": "做完 (zou6 jyun4) means 'finish doing / done' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u6-l3": {
        "id": "hk-u6-l3",
        "unit": "hk-u6",
        "level": "A2",
        "objective": "Master the completion negation marker 未 (mei6 - not yet) and interrogative patterns V + 咗 + 未呀 and V + 完 + 未呀.",
        "prerequisites": [
            "hk-u6-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u6-l2"
            ]
        },
        "presentation": {
            "explanation": "廣東話否定「動作尚未完成」，唔用「唔」，而係使用專用否定詞**「未 (mei6)」**（相當於 Not yet）！\n\n1. 否定完成態 (Negation with 未 mei6):\n- **未 (mei6)**：Not yet（獨立作答時常加語氣詞：**「未呀 mei6 aa3」**）。\n- **未食 (mei6 sik6)**：Haven't eaten yet。\n- **未做 (mei6 zou6)**：Haven't done yet。\n- **未睇 (mei6 tai2)**：Haven't seen/read yet。\n- **未收到 (mei6 sau1 dou2)**：Haven't received yet。\n\n2. 經典詢問完成句式 (Interrogative Patterns):\n- **「你食咗飯未呀？」(Have you eaten yet?)**\n  - 肯定回答：‘食咗喇！’ (I've eaten!)\n  - 否定回答：‘未呀，仲未食。’ (Not yet, still haven't eaten.)\n- **「你啲功課做完未呀？」(Have you finished your homework yet?)**\n  - 回答：‘做完喇！’ 或 ‘未搞掂，做緊。’",
            "examples": [
                {
                    "target": "你食咗晏晝飯未呀？未嘅話我哋一齊去樓下茶餐廳食啦！",
                    "reading": "nei5 sik6 zo2 aan3 zau3 faan6 mei6 aa3? mei6 ge3 waa2 ngo5 dei6 jat1 cai4 heoi3 lau4 haa6 caa4 caan1 teng1 sik6 laa1!",
                    "translation": "Have you had lunch yet? If not, let's go down to the tea restaurant downstairs together!"
                },
                {
                    "target": "份合約你簽咗未呀？我仲未收到客戶嘅最後確認。",
                    "reading": "fan6 hap6 joek3 nei5 cim1 zo2 mei6 aa3? ngo5 zung6 mei6 sau1 dou2 haak3 wu6 ge3 zeoi3 hau6 kok3 jing6.",
                    "translation": "Have you signed the contract yet? I still haven't received the client's final confirmation."
                },
                {
                    "target": "佢去咗英國留學未呀？未呀，佢下個月先出發。",
                    "reading": "keoi5 heoi3 zo2 jing1 gwok3 lau4 hok6 mei6 aa3? mei6 aa3, keoi5 haa6 go3 jyut6 sin1 ceot1 faat3.",
                    "translation": "Has he gone to study in the UK yet? Not yet, he's only departing next month."
                }
            ],
            "mnemonics": [
                "Not-yet Rule: 否定完成用「未」(mei6); 問人完成加「……咗未呀」(zo2 mei6 aa3)!"
            ],
            "culturalNotes": [
                "Replying «未呀» (mei6 aa3) with a soft rising tone is polite and friendly; adding «仲未» (zung6 mei6 - still haven't) implies effort is ongoing."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "當朋友問你「食咗飯未呀？」，如果尚未用餐，最自然標準嘅廣東話簡短回覆係：",
                    "options": [
                        "唔食",
                        "未呀 (mei6 aa3 - Not yet)",
                        "冇食"
                    ],
                    "answerIndex": 1,
                    "explanation": "未呀 (mei6 aa3) is the natural Cantonese response for 'not yet'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話中詢問對方「你做完手頭工作了沒有？」，最地道的句式是：",
                    "options": [
                        "你做完未呀？ (nei5 zou6 jyun4 mei6 aa3? - Have you finished yet?)",
                        "你做緊邊個？",
                        "你做咗邊度？"
                    ],
                    "answerIndex": 0,
                    "explanation": "你做完未呀？ is the direct, idiomatic inquiry for asking if a task is completed."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中否定詞「未 (mei6)」及疑問句型「V+咗+未呀 / V+完+未呀」的語法規則，下列哪一項表述完全正確？",
                    "options": [
                        "廣東話否定過去只能用「唔」",
                        "「未」只能用來問年齡",
                        "「未 (mei6)」專門表示尚未完成（Not yet），回答用「未呀」，問句在動詞後加「咗未呀」或「完未呀」 (mei6 denotes 'not yet', answered with mei6 aa3, questioned with V+zo2/jyun4+mei6 aa3)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately characterizes the aspectual negation and question formation in Cantonese."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'not yet' in conversational Cantonese (未呀):",
                    "acceptedAnswers": [
                        "未呀",
                        "mei6aa3",
                        "mei6 aa3",
                        "Mei6 aa3",
                        "Mei6aa3"
                    ],
                    "explanation": "未呀 (mei6 aa3) means 'not yet' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u6-l4": {
        "id": "hk-u6-l4",
        "unit": "hk-u6",
        "level": "A2",
        "objective": "Master the Cantonese experiential aspect particle 過 (gwo3), denoting past life experience (have ever done / been to), and negative experiential 未曾 / 未...過.",
        "prerequisites": [
            "hk-u6-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u6-l3"
            ]
        },
        "presentation": {
            "explanation": "廣東話表達「曾經有過某種經歷」，核心動態助詞係**「過 (gwo3)」**（相當於 English 'have ever done / have been'）！\n\n1. 經歷態句型結構 (Experiential Aspect: V + 過 + O):\n- **去過 (heoi3 gwo3)**：Have been to。\n  - 「我去過三次日本旅行。」(I have been to Japan for travel three times.)\n- **食過 (sik6 gwo3)**：Have eaten / tasted before。\n  - 「你食過避風塘炒蟹未呀？」(Have you ever eaten typhoon shelter fried crab?)\n- **見過 (gin3 gwo3)**：Have seen / met before。\n  - 「我喺電視見過呢位明星。」(I have seen this celebrity on TV.)\n- **聽過 (teng1 gwo3)**：Have heard of before。\n\n2. 經歷態嘅否定 (Negative Experience: 未 + V + 過):\n- **未去過 (mei6 heoi3 gwo3)**：Have never been to。\n- **未食過 (mei6 sik6 gwo3)**：Have never tasted before。\n- **未聽過 (mei6 teng1 gwo3)**：Have never heard of before。",
            "examples": [
                {
                    "target": "我去過兩次歐洲旅行，最鍾意瑞士嘅雪山風景。",
                    "reading": "ngo5 heoi3 gwo3 loeng5 ci3 au1 zau1 leoi5 hang4, zeoi3 zung1 ji3 seoi6 si6 ge3 syut3 saan1 fung1 ging2.",
                    "translation": "I have been to Europe twice for travel, and I like Switzerland's snowy mountain scenery the most."
                },
                {
                    "target": "你以前有冇食過正宗嘅港式煲仔飯呀？",
                    "reading": "nei5 ji5 cin4 jau5 mou5 sik6 gwo3 zing3 zung1 ge3 gong2 sik1 bou1 zai2 faan6 aa3?",
                    "translation": "Have you ever eaten authentic Hong Kong style claypot rice before?"
                },
                {
                    "target": "呢首老歌我細個嗰陣聽過好多次。",
                    "reading": "ni1 sau2 lou5 go1 ngo5 sai3 go3 go2 zan6 teng1 gwo3 hou2 do1 ci3.",
                    "translation": "I heard this old song many times when I was little."
                }
            ],
            "mnemonics": [
                "Experience Formula: Verb + 過 (gwo3) = Ever done; 未 + Verb + 過 = Never done before!"
            ],
            "culturalNotes": [
                "Hong Kong people love travel and food; sharing culinary experiences with «你食過……未呀？好正㗎！» (Have you ever eaten...? It's awesome!) is a prime conversation starter."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺廣東話中表達「曾經去過某個地方 / 有過造訪經歷」，動詞後應當搭配邊個助詞？",
                    "options": [
                        "緊",
                        "咗",
                        "過 (gwo3 - Experiential aspect particle)"
                    ],
                    "answerIndex": 2,
                    "explanation": "過 (gwo3) is the experiential aspect particle meaning 'have ever done'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "如果要表達「我從未吃過這種點心」，最地道標準的廣東話句子是：",
                    "options": [
                        "我唔食呢種點心",
                        "我未食過呢種點心 (ngo5 mei6 sik6 gwo3 ni1 zung2 dim2 sam1 - I have never eaten this dim sum before)",
                        "我食緊呢種點心"
                    ],
                    "answerIndex": 1,
                    "explanation": "未食過 (mei6 sik6 gwo3) precisely conveys 'have never eaten before'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話經歷體助詞「過 (gwo3)」及其否定形式「未……過」的語法特點，下列哪一項表述完全正確？",
                    "options": [
                        "「過」在廣東話中只能表示走過馬路",
                        "「過 (gwo3)」後綴於動詞表示過去的生命體驗或經歷（去過/食過），否定形式為「未+V+過」（未去過/未食過） (gwo3 marks past experience e.g. heoi3 gwo3, negated by mei6+V+gwo3)",
                        "經歷體不能用在問句中"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately articulates the experiential aspect paradigm in Cantonese."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'have been to / have gone' in Cantonese (去過):",
                    "acceptedAnswers": [
                        "去過",
                        "heoi3gwo3",
                        "heoi3 gwo3",
                        "Heoi3 gwo3",
                        "Heoi3gwo3",
                        "去过"
                    ],
                    "explanation": "去過 (heoi3 gwo3) means 'have been to / have visited before' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u6-l5": {
        "id": "hk-u6-l5",
        "unit": "hk-u6",
        "level": "A2",
        "objective": "Synthesize all four major Cantonese aspect markers (進行緊 gan2, 完成咗 zo2, 結果完 jyun4, 經歷過 gwo3, 否定未 mei6) in an authentic Yum Cha dim sum dialogue.",
        "prerequisites": [
            "hk-u6-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u6-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢課綜合實戰篇，我哋將第六單元學到嘅所有動態助詞（緊、咗、完、過、未）融會貫通，喺香港最經典嘅文化場景——酒樓飲茶中生動演繹！\n\n1. 廣東話四大動態助詞矩陣 (The Cantonese 4-Aspect Matrix):\n- **進行態 緊 (gan2)**：食緊 (eating now), 等緊 (waiting now)。\n- **完成態 咗 (zo2)**：叫咗 (ordered), 到咗 (arrived), 食咗 (ate)。\n- **結果態 完 (jyun4)**：食完 (finished eating), 傾完 (finished talking)。\n- **經歷態 過 (gwo3)**：食過 (eaten before), 去過 (been before)。\n- **否定態 未 (mei6)**：未到 (haven't arrived yet), 未食過 (never tasted)。\n\n2. 第六單元實戰對話範例 (Unit 6 Master Dialogue):\n- **朋友A**：‘喂，阿John！你到咗未呀？我坐緊喺三樓大堂等緊你。’\n- **朋友B**：‘我啱啱落咗車，搭緊電梯上嚟，兩分鐘到！’\n- **朋友A**：‘好，我叫咗一籠蝦餃、一籠燒賣同兩隻叉燒包先！’\n- **朋友B**：‘正呀！我細個嗰陣食過呢間嘅蛋撻，好香好脆！你有冇食過呀？’\n- **朋友A**：‘我未食過喎，等陣食完點心一定要叫返兩件試下！’",
            "examples": [
                {
                    "target": "我哋坐低飲茶傾偈，不知不覺就食咗兩個鐘頭。",
                    "reading": "ngo5 dei6 co5 dai1 jam2 caa4 king1 gai2, bat1 zi1 bat1 gok3 zau6 sik6 zo2 loeng5 go3 zung1 tau4.",
                    "translation": "We sat down to have tea and chat, and unconsciously ate for two hours."
                },
                {
                    "target": "你叫咗點心未呀？侍應啱啱放低咗張點心紙。",
                    "reading": "nei5 giu3 zo2 dim2 sam1 mei6 aa3? si6 jing3 ngaam1 ngaam1 fong3 dai1 zo2 zoeng1 dim2 sam1 zi2.",
                    "translation": "Have you ordered dim sum yet? The waiter just put down the dim sum order sheet."
                },
                {
                    "target": "呢間酒樓嘅脆皮燒鵝我食過好多次，每次食完都讚不絕口！",
                    "reading": "ni1 gaan1 zau2 lau4 ge3 ceoi3 pei4 siu1 ngo4 ngo5 sik6 gwo3 hou2 do1 ci3, mui5 ci3 sik6 jyun4 dou1 zaan3 bat1 zyut6 hau2!",
                    "translation": "I have eaten the crispy roast goose at this restaurant many times; every time after finishing eating I am full of praise!"
                }
            ],
            "mnemonics": [
                "Aspect Quad: 緊(Now -ing), 咗(Completed), 完(All done), 過(Ever been) -> 四大助詞貫通全場!"
            ],
            "culturalNotes": [
                "«飲茶» (jam2 caa4) in Cantonese refers not just to sipping tea, but to the entire social ritual of eating dim sum with family, friends, or colleagues at a traditional Chinese teahouse."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話中「去酒樓吃點心、品茗、與親友聊天」的經典文化代名詞是：",
                    "options": [
                        "飲水",
                        "飲茶 (jam2 caa4 - Yum cha / dim sum dining & social ritual)",
                        "飲湯"
                    ],
                    "answerIndex": 1,
                    "explanation": "飲茶 (jam2 caa4) is the quintessential Cantonese cultural term for having dim sum and tea."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在一句廣東話中區分「食緊（正在吃）」、「食咗（吃了）」、「食完（吃完了）」及「食過（吃過）」，體現了廣東話哪種語法優勢：",
                    "options": [
                        "動態助詞系統（緊/咗/完/過）精確分明 (Highly precise aspectual particle system)",
                        "所有動詞都沒有時態變化",
                        "廣東話只能靠英文單詞區分"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates the highly expressive and fine-grained aspectual marker system in Cantonese."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話第六單元完成體（咗）、結果完成（完）、否定（未）、經歷體（過）及酒樓飲茶實戰，下列哪一項總括完全正確？",
                    "options": [
                        "廣東話動態助詞系統結構嚴密（緊-進行、咗-完成、完-結果、過-經歷、未-未然），能極其生動精確地描繪動作全過程與生活體驗 (Rigorous aspectual system marking progressive, perfective, resultative, experiential, and irrealis)",
                        "廣東話不能表達吃過或去過",
                        "「飲茶」在香港只能喝清水"
                    ],
                    "answerIndex": 0,
                    "explanation": "Masterfully summarizes the aspectual taxonomy and conversational application."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'yum cha / have dim sum and tea' in Cantonese (飲茶):",
                    "acceptedAnswers": [
                        "飲茶",
                        "jam2caa4",
                        "jam2 caa4",
                        "Jam2 caa4",
                        "Jam2caa4",
                        "饮茶"
                    ],
                    "explanation": "飲茶 (jam2 caa4) means 'yum cha / have dim sum and tea' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u7-l1": {
        "id": "hk-u7-l1",
        "unit": "hk-u7",
        "level": "A2",
        "objective": "Master the experiential aspect particle 過 (gwo3) in affirmative sentences combined with frequency quantifying expressions (一次, 兩次, 好多次).",
        "prerequisites": [
            "hk-u6-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u6-l5"
            ]
        },
        "presentation": {
            "explanation": "喺廣東話中，當我哋想表達人生中「曾經做過某件事」或者「累積過某種經歷」，動詞後必須加上動態助詞**「過 (gwo3)」**！\n\n1. 經歷態肯定結構 (Experiential Syntax: S + V + 過 + [次數] + O):\n- **去過 (heoi3 gwo3)**：Have been to (例如：我去過日本三次)。\n- **食過 (sik6 gwo3)**：Have eaten / tasted (例如：我食過呢種特色點心好多次)。\n- **睇過 (tai2 gwo3)**：Have seen/watched/read (例如：我睇過嗰套經典香港電影)。\n- **試過 (si3 gwo3)**：Have tried / had the experience of。\n\n2. 次數量詞嘅位置 (Frequency Placement):\n- 廣東話中次數表達（如「一次」、「兩次」、「幾次」）通常直接放在動詞「V + 過」之後或賓語後，例如：「我去過兩次澳門」(I have been to Macau twice) 或「我見過佢三次」(I have seen him three times)。",
            "examples": [
                {
                    "target": "我以前去過兩次日本東京旅行，對當地嘅美食印象好深刻。",
                    "reading": "ngo5 ji5 cin4 heoi3 gwo3 loeng5 ci3 jat6 bun2 dung1 ging1 leoi5 hang4, deoi3 dong1 dei6 ge3 mei5 sik6 jan3 zoeng3 hou2 sam1 hak1.",
                    "translation": "I went to Tokyo, Japan for travel twice before, and had a very deep impression of the local food."
                },
                {
                    "target": "呢間老牌茶餐廳嘅菠蘿油我食過好多次，每次都咁好味！",
                    "reading": "ni1 gaan1 lou5 paai4 caa4 caan1 teng1 ge3 bo1 lo4 jau4 ngo5 sik6 gwo3 hou2 do1 ci3, mui5 ci3 dou1 gam3 hou2 mei6!",
                    "translation": "I have eaten the pineapple butter bun at this heritage tea restaurant many times; it's so delicious every time!"
                },
                {
                    "target": "你有冇睇過黃子華嘅棟篤笑表演呀？我睇過幾次，笑到肚痛！",
                    "reading": "nei5 jau5 mou5 tai2 gwo3 wong4 zi2 waa4 ge3 dung3 duk1 siu3 biu2 jin2 aa3? ngo5 tai2 gwo3 gei2 ci3, siu3 dou3 tou5 tung3!",
                    "translation": "Have you ever watched Dayo Wong's stand-up comedy performance? I've seen it several times, laughed until my stomach hurt!"
                }
            ],
            "mnemonics": [
                "Experience Formula: 動詞 (Verb) + 過 (gwo3) + 次數 (Frequency) + 名詞 (Object)!"
            ],
            "culturalNotes": [
                "«棟篤笑» (dung3 duk1 siu3) is Cantonese for stand-up comedy, a beloved genre popularized in Hong Kong by comedic maestro Dayo Wong («黃子華»)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺廣東話中表達「我去過日本兩次」，最地道標準嘅經歷態句式係：",
                    "options": [
                        "我去日本兩次了",
                        "我去過兩次日本 (ngo5 heoi3 gwo3 loeng5 ci3 jat6 bun2 - I have been to Japan twice)",
                        "我去了日本兩遍"
                    ],
                    "answerIndex": 1,
                    "explanation": "我去過兩次日本 uses the experiential aspect particle 過 (gwo3) with the frequency phrase 兩次."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話表達「有過嘗試某事的經歷」，最常用的核心動詞搭配是：",
                    "options": [
                        "試過 (si3 gwo3 - Have tried / experienced before)",
                        "試緊",
                        "試完"
                    ],
                    "answerIndex": 0,
                    "explanation": "試過 (si3 gwo3) means 'have tried / experienced before'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話經歷體助詞「過 (gwo3)」在肯定句中的語法特徵與次數量詞位置，下列哪一項表述完全正確？",
                    "options": [
                        "「過」只能用來表達走過馬路",
                        "「過 (gwo3)」後綴於動詞表示過去經歷（如去過、食過、試過），並常接次數量詞（一次/兩次/好多次） (gwo3 follows verbs to express past life experiences, frequently paired with frequency counters like loeng5 ci3)",
                        "經歷體不能接任何賓語"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately articulates the experiential syntax and frequency pairing."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi phrase for 'have been three times' in Cantonese (去過三次):",
                    "acceptedAnswers": [
                        "去過三次",
                        "heoi3gwo3saam1ci3",
                        "heoi3 gwo3 saam1 ci3",
                        "Heoi3 gwo3 saam1 ci3",
                        "Heoi3gwo3saam1ci3",
                        "去过三次"
                    ],
                    "explanation": "去過三次 (heoi3 gwo3 saam1 ci3) means 'have been three times' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u7-l2": {
        "id": "hk-u7-l2",
        "unit": "hk-u7",
        "level": "A2",
        "objective": "Master negative experiential constructions using 未...過 (mei6 ... gwo3) and emphatic negator 從來未 (cung4 loi4 mei6).",
        "prerequisites": [
            "hk-u7-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u7-l1"
            ]
        },
        "presentation": {
            "explanation": "如果想表達「從未有過某種經歷」或「從未做過某件事」，廣東話會使用**「未 + 動詞 + 過」**結構！\n\n1. 否定經歷態句型 (Negative Experiential Syntax: S + [從來] + 未 + V + 過 + O):\n- **未試過 (mei6 si3 gwo3)**：Have never tried / never had the experience。\n- **未去過 (mei6 heoi3 gwo3)**：Have never been to。\n- **未食過 (mei6 sik6 gwo3)**：Have never tasted/eaten。\n- **未聽過 (mei6 teng1 gwo3)**：Have never heard of。\n- **未見過 (mei6 gin3 gwo3)**：Have never seen。\n\n2. 加強語氣「從來未 (cung4 loi4 mei6)」(Emphatic 'Never Ever'):\n- 「我**從來未去過**長洲睇太平清醮。」(I have never ever been to Cheung Chau to watch the Da Jiu Festival.)\n- 「呢種古怪嘅口味，我**從來未食過**！」(This weird flavor, I have never ever tasted!)",
            "examples": [
                {
                    "target": "我從來未去過大澳水鄉，聽講嗰度嘅棚屋好有特色。",
                    "reading": "ngo5 cung4 loi4 mei6 heoi3 gwo3 daai6 ou3 seoi2 hoeng1, teng1 gong2 go2 dou6 ge3 paang4 uk1 hou2 jau5 dak6 sik1.",
                    "translation": "I have never been to Tai O fishing village; I heard the stilt houses there are very distinctive."
                },
                {
                    "target": "呢款新出嘅榴槤雪糕你試過未呀？我未試過，有啲驚嗰種味道。",
                    "reading": "ni1 fun2 san1 ceot1 ge3 lau4 lin4 syut3 gou1 nei5 si3 gwo3 mei6 aa3? ngo5 mei6 si3 gwo3, jau5 di1 geng1 go2 zung2 mei6 dou6.",
                    "translation": "Have you tried this newly released durian ice cream? I've never tried it, I'm a bit afraid of that smell."
                },
                {
                    "target": "咁大個場面，我真係從來未見過！",
                    "reading": "gam3 daai6 go3 coeng4 min6, ngo5 zan1 hai6 cung4 loi4 mei6 gin3 gwo3!",
                    "translation": "Such a grand scene, I really have never seen it before!"
                }
            ],
            "mnemonics": [
                "Never Done Formula: 從來未 (Never ever) + Verb + 過 (gwo3) = Zero experience (未試過, 未去過)!"
            ],
            "culturalNotes": [
                "«大澳» (Tai O) on Lantau Island is known as the Venice of Hong Kong, renowned for traditional stilt houses («棚屋») built over tidal waterways."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話中表達「從未嘗試過 / 沒試過」，最標準常用的句型短語是：",
                    "options": [
                        "唔試過",
                        "未試過 (mei6 si3 gwo3 - Have never tried / never experienced)",
                        "冇試過"
                    ],
                    "answerIndex": 1,
                    "explanation": "未試過 (mei6 si3 gwo3) is the standard Cantonese negative experiential expression."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "如果要加強否定語氣表達「我從來沒有去過那個地方」，最地道的廣東話句子是：",
                    "options": [
                        "我從來未去過嗰度 (ngo5 cung4 loi4 mei6 heoi3 gwo3 go2 dou6 - I have never ever been there)",
                        "我不去嗰度",
                        "我冇去嗰度了"
                    ],
                    "answerIndex": 0,
                    "explanation": "從來未去過 (cung4 loi4 mei6 heoi3 gwo3) emphatically means 'have never ever been to'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中否定經歷態「未+V+過」及強調詞「從來未」的語法結構，下列哪一項表述完全正確？",
                    "options": [
                        "「未 (mei6)」放在動詞前、「過 (gwo3)」放在動詞後構成「未+V+過」（如未去過、未試過），結合「從來未」可強調從無此類經歷 (mei6+V+gwo3 expresses 'have never done', enhanced by cung4 loi4 mei6)",
                        "「未+V+過」用來表示正在發生的事情",
                        "廣東話不能否定過去的經歷"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately frames the discontinuous negative experiential pattern."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'have never tried / never experienced' in Cantonese (未試過):",
                    "acceptedAnswers": [
                        "未試過",
                        "mei6si3gwo3",
                        "mei6 si3 gwo3",
                        "Mei6 si3 gwo3",
                        "Mei6si3gwo3",
                        "未试过"
                    ],
                    "explanation": "未試過 (mei6 si3 gwo3) means 'have never tried' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u7-l3": {
        "id": "hk-u7-l3",
        "unit": "hk-u7",
        "level": "A2",
        "objective": "Master the A-not-A experiential question pattern 有冇 + V + 過 (jau5 mou5 ... gwo3 - have you ever...?) and natural conversational replies.",
        "prerequisites": [
            "hk-u7-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u7-l2"
            ]
        },
        "presentation": {
            "explanation": "詢問他人「有冇過某種經歷」，廣東話最常用嘅 A-not-A 句式係**「有冇 + 動詞 + 過」**！\n\n1. 經歷態問句結構 (Experiential Question: 你 + 有冇 + V + 過 + O + 呀?):\n- **你「有冇去過」海洋公園呀？** (Have you ever been to Ocean Park?)\n- **你「有冇食過」正宗蛋撻呀？** (Have you ever eaten authentic egg tarts?)\n- **你「有冇聽過」呢首廣東歌呀？** (Have you ever heard this Cantonese song?)\n- **你「有冇試過」行山行到腳軟呀？** (Have you ever tried hiking until your legs went soft?)\n\n2. 肯定與否定回答技巧 (Answering Strategies):\n- **肯定經歷**：‘有呀！我去過好多次。’ (Yes! I've been many times.) 或 ‘去過！’\n- **否定經歷**：‘未呀，從來未去過。’ (Not yet, never been.) 或 ‘未試過喎。’",
            "examples": [
                {
                    "target": "你有冇去過昂坪360搭水晶纜車睇大佛呀？",
                    "reading": "nei5 jau5 mou5 heoi3 gwo3 ngong4 ping4 saam1 luk6 ling4 daap3 seoi2 zing1 laam5 ce1 tai2 daai6 fat6 aa3?",
                    "translation": "Have you ever been to Ngong Ping 360 to take the crystal cable car to see the Big Buddha?"
                },
                {
                    "target": "你有冇食過深水埗嗰間米芝蓮推介嘅豆腐花呀？",
                    "reading": "nei5 jau5 mou5 sik6 gwo3 sam1 seoi2 bou2 go2 gaan1 mai5 zi1 lin1 teoi1 gaai3 ge3 dau6 fu6 faa1 aa3?",
                    "translation": "Have you ever eaten the Michelin-recommended tofu pudding in Sham Shui Po?"
                },
                {
                    "target": "有呀，我上個月先同屋企人去過一次，真係好滑好香！",
                    "reading": "jau5 aa3, ngo5 soeng6 go3 jyut6 sin1 tung4 uk1 kei2 jan4 heoi3 gwo3 jat1 ci3, zan1 hai6 hou2 waat6 hou2 hoeng1!",
                    "translation": "Yes, I just went once with my family last month, it was really smooth and fragrant!"
                }
            ],
            "mnemonics": [
                "Experience Inquiry: 有冇(Have or not) + 動詞(Verb) + 過(gwo3)? -> 有呀(Yes) / 未呀(Not yet)!"
            ],
            "culturalNotes": [
                "«昂坪360» (Ngong Ping 360) and the Tian Tan Buddha on Lantau Island are iconic Hong Kong landmarks; asking «你有冇去過大佛？» is a common travel topic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "用廣東話詢問朋友「你有沒有去過香港海洋公園？」，最標準的句式是：",
                    "options": [
                        "你去過海洋公園嗎？",
                        "你有冇去過海洋公園呀？ (nei5 jau5 mou5 heoi3 gwo3 hoi2 joeng4 gung1 jyun2 aa3? - Have you ever been to Ocean Park?)",
                        "你係咪去海洋公園？"
                    ],
                    "answerIndex": 1,
                    "explanation": "你有冇去過……呀？ is the quintessential Cantonese A-not-A question for past experience."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "面對問題「你有冇食過煲仔飯呀？」，如果從未吃過，最地道的回答是：",
                    "options": [
                        "未呀，從來未食過 (mei6 aa3, cung4 loi4 mei6 sik6 gwo3 - Not yet, never eaten before)",
                        "我不吃",
                        "冇吃過了"
                    ],
                    "answerIndex": 0,
                    "explanation": "未呀，從來未食過 is the polite and idiomatic negative response."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中「有冇+V+過」的疑問句型及其肯定/否定答語，下列哪一項表述完全正確？",
                    "options": [
                        "「有冇+V+過」只能用來問今天發生的事",
                        "回答有冇問句必須說英文",
                        "「有冇+V+過（如你有冇去過）」是詢問過往生命經歷的標準句型；肯定答「有/去過」，否定答「未/未去過」 (jau5 mou5+V+gwo3 is standard for querying life experiences; answered with jau5/V+gwo3 or mei6/mei6+V+gwo3)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately summarizes the interrogative structure and dual response system."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi phrase for 'have you ever been to / have or have not been' in Cantonese (有冇去過):",
                    "acceptedAnswers": [
                        "有冇去過",
                        "jau5mou5heoi3gwo3",
                        "jau5 mou5 heoi3 gwo3",
                        "Jau5 mou5 heoi3 gwo3",
                        "Jau5mou5heoi3gwo3",
                        "有没有去过",
                        "有冇去过"
                    ],
                    "explanation": "有冇去過 (jau5 mou5 heoi3 gwo3) means 'have or have not been to' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u7-l4": {
        "id": "hk-u7-l4",
        "unit": "hk-u7",
        "level": "A2",
        "objective": "Master the multifunctional particle 過 (gwo3) in comparative structures (A + Adj + 過 + B — 'A is more [Adj] than B') and iterative/sequential contexts.",
        "prerequisites": [
            "hk-u7-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u7-l3"
            ]
        },
        "presentation": {
            "explanation": "喺廣東話中，**「過 (gwo3)」**除咗做經歷助詞之外，仲係**比較句（Comparative Sentences）**嘅靈魂核心！\n\n1. 比較句結構 (Comparative Syntax: A + 形容詞 + 過 + B):\n- 普通話用「A 比 B 好」；而廣東話嘅語序係**「A + 形容詞 + 過 + B」**！\n- **好過 (hou2 gwo3)**：Better than (例如：呢部手機好過嗰部)。\n- **貴過 (gwai3 gwo3)**：More expensive than (例如：中環嘅租金貴過新界)。\n- **快過 (faai3 gwo3)**：Faster than (例如：搭地鐵快過搭巴士)。\n- **多過 (do1 gwo3)**：More than (例如：今日嘅人流多過琴日)。\n\n2. 重複/重新做某事「再/重新……過」 (Iterative Re-doing: V + 過):\n- **做過 (zou6 gwo3)**：Do it over again (例如：份文件寫得唔好，要做過)。\n- **飲過 (jam2 gwo3)**：Drink again / drink another round。",
            "examples": [
                {
                    "target": "喺香港返工，搭港鐵通常快過搭巴士好多。",
                    "reading": "hai2 hoeng1 gong1 faan1 gung1, daap3 gong2 tit3 tung1 soeng4 faai3 gwo3 daap3 baa1 si2 hou2 do1.",
                    "translation": "Working in Hong Kong, taking the MTR is usually much faster than taking the bus."
                },
                {
                    "target": "呢間餐廳嘅乾炒牛河好食過隔籬嗰間好多！",
                    "reading": "ni1 gaan1 caan1 teng1 ge3 gon1 caau2 ngau4 ho4 hou2 sik6 gwo3 gaak3 lei4 go2 gaan1 hou2 do1!",
                    "translation": "The beef chow fun at this restaurant is much more delicious than the one next door!"
                },
                {
                    "target": "份報告有幾處數據錯咗，請你重新做過一次啦。",
                    "reading": "fan6 bou3 gou3 jau5 gei2 cyu3 sou3 geoi3 co3 zo2, cing2 nei5 cung4 san1 zou6 gwo3 jat1 ci3 laa1.",
                    "translation": "There are several data errors in the report, please re-do it once again from scratch."
                }
            ],
            "mnemonics": [
                "Comparative Formula: A + Adj + 過 (gwo3) + B (快過, 貴過, 好過)!"
            ],
            "culturalNotes": [
                "The comparative construction «A + Adj + 過 + B» directly preserves classical Chinese syntax (古漢語「苛政猛於虎」之語序), reflecting Cantonese's deep historical roots."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺廣東話中表達「搭地鐵比搭巴士快」，正確的地道句式語序是：",
                    "options": [
                        "搭地鐵比搭巴士快",
                        "搭地鐵快過搭巴士 (daap3 dei6 tit3 faai3 gwo3 daap3 baa1 si2)",
                        "搭地鐵搭巴士快"
                    ],
                    "answerIndex": 1,
                    "explanation": "搭地鐵快過搭巴士 follows the authentic Cantonese comparative structure A + Adj + 過 + B."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話詞彙「好過 (hou2 gwo3)」在比較句中的含義是：",
                    "options": [
                        "好於 / 比……更好 (Better than)",
                        "不如 / 差過",
                        "一樣好"
                    ],
                    "answerIndex": 0,
                    "explanation": "好過 (hou2 gwo3) means 'better than' in comparative sentences."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中「過 (gwo3)」在比較句結構（A + Adj + 過 + B）及重新操作（V + 過）中的語法语義，下列哪一項表述完全正確？",
                    "options": [
                        "廣東話比較句必須用「比」字",
                        "「過」在比較句中置於形容詞後（如快過、好過、貴過），表示「比……更」；在動詞後亦可表示重做（如做過、寫過） (In comparatives, Adj+gwo3 means 'more Adj than'; after verbs it can also denote re-doing an action)",
                        "「好過」在廣東話中表示很難受"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately articulates the classical comparative syntax of Cantonese."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'better than' in Cantonese comparatives (好過):",
                    "acceptedAnswers": [
                        "好過",
                        "hou2gwo3",
                        "hou2 gwo3",
                        "Hou2 gwo3",
                        "Hou2gwo3",
                        "好过"
                    ],
                    "explanation": "好過 (hou2 gwo3) means 'better than' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u7-l5": {
        "id": "hk-u7-l5",
        "unit": "hk-u7",
        "level": "A2",
        "objective": "Synthesize experiential aspect 過 (gwo3), negative 未...過, interrogative 有冇...過, and comparatives (靚過/好過) in a lively Hong Kong sightseeing exchange.",
        "prerequisites": [
            "hk-u7-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u7-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢課綜合實戰篇，我哋將第七單元學到嘅經歷態「去過/試過」、否定「未去過」、問句「有冇去過」同比較句「好過/靚過」融會貫通，進行一段關於香港旅遊景點嘅精彩對話！\n\n1. 香港經典名勝與經歷詞彙 (Hong Kong Landmarks & Experiential Lexicon):\n- **太平山頂 (taai3 ping4 saan1 deng2)**：The Peak（俯瞰維港夜景聖地）。\n- **維港夜景 (wai4 gong2 je6 ging2)**：Victoria Harbour night view。\n- **昂坪大佛 (ngong4 ping4 daai6 fat6)**：Ngong Ping Big Buddha。\n- **靚過 (leng3 gwo3)**：Prettier than / more beautiful than。\n- **好玩過 (hou2 waan2 gwo3)**：More fun than。\n\n2. 第七單元實戰對話範例 (Unit 7 Master Dialogue):\n- **遊客Amy**：‘David，你有冇去過太平山頂睇夜景呀？’\n- **港人David**：‘有呀，我去過好多次！山頂睇落嚟嘅夜景真係靚過世界上好多大城市㗎。’\n- **遊客Amy**：‘咁你有冇試過搭山頂纜車上山呀？’\n- **港人David**：‘試過！新一代纜車好坐過以前好多，視野開揚好多！’\n- **遊客Amy**：‘我從來未搭過，今晚等我同朋友一齊去試下先！’",
            "examples": [
                {
                    "target": "我琴晚同朋友上咗太平山頂，維多利亞港嘅夜景真係好震撼！",
                    "reading": "ngo5 kam4 maan5 tung4 pang4 jau5 soeng5 zo2 taai3 ping4 saan1 deng2, wai4 do1 lei6 aa3 gong2 ge3 je6 ging2 zan1 hai6 hou2 zan3 ham6!",
                    "translation": "I went up to the Peak with friends last night; Victoria Harbour's night view was truly breathtaking!"
                },
                {
                    "target": "呢度嘅風景靚過相片入面好多，真係百聞不如一見。",
                    "reading": "ni1 dou6 ge3 fung1 ging2 leng3 gwo3 soeng2 pin2 jap6 min6 hou2 do1, zan1 hai6 baak3 man4 bat1 jyu4 jat1 gin3.",
                    "translation": "The scenery here is much prettier than in the photos; seeing is truly believing."
                },
                {
                    "target": "你有冇去過長洲食大魚蛋同芒果糯米糍呀？好食過市區好多㗎！",
                    "reading": "nei5 jau5 mou5 heoi3 gwo3 coeng4 zau1 sik6 daai6 jyu4 daan2 tung4 mong1 gwo2 no6 mai5 ci4 aa3? hou2 sik6 gwo3 si5 keoi1 hou2 do1 gaa3!",
                    "translation": "Have you ever been to Cheung Chau to eat giant fishballs and mango mochi? They are much tastier than in the urban areas!"
                }
            ],
            "mnemonics": [
                "Sightseeing Flow: 太平山頂(The Peak) -> 有冇去過(Have you been) -> 靚過晒(Prettier than all) -> 一定要去(Must visit)!"
            ],
            "culturalNotes": [
                "«太平山頂» (Victoria Peak) offers the world-famous panorama of Hong Kong's skyline and Victoria Harbour, universally celebrated as one of the world's most spectacular nighttime vistas."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "香港最著名的俯瞰維多利亞港全景與夜景的地標景點「太平山頂」，廣東話稱之為：",
                    "options": [
                        "獅子山",
                        "太平山頂 (taai3 ping4 saan1 deng2 - The Peak / Victoria Peak)",
                        "大帽山"
                    ],
                    "answerIndex": 1,
                    "explanation": "太平山頂 (taai3 ping4 saan1 deng2) is Victoria Peak in Hong Kong."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在廣東話對話中，表達「山頂的景色比照片裏更漂亮」，最地道的表述是：",
                    "options": [
                        "山頂嘅風景靚過相片 (saan1 deng2 ge3 fung1 ging2 leng3 gwo3 soeng2 pin2)",
                        "山頂嘅風景比相片漂亮",
                        "山頂嘅風景冇相片好"
                    ],
                    "answerIndex": 0,
                    "explanation": "山頂嘅風景靚過相片 uses the comparative particle 靚過 (more beautiful than)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話第七單元經歷體（去過/試過）、否定（未試過）、問句（有冇去過）及比較級（靚過/好過）的綜合應用，下列哪一項總括完全正確？",
                    "options": [
                        "「過 (gwo3)」兼具經歷態（去過三次/未試過）與比較句（靚過/好過）雙重核心功能，結合景點對話能自如交流人生體驗與事物比較 (gwo3 functions both as experiential aspect marker and comparative operator, enabling rich travel dialogues)",
                        "廣東話不能描述旅遊景點體驗",
                        "「太平山頂」在廣東話中是一間餐廳名字"
                    ],
                    "answerIndex": 0,
                    "explanation": "Synthesizes the multifaceted grammatical functions of 過 and cultural travel discourse."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi phrase for 'The Peak / Victoria Peak' in Cantonese (太平山頂):",
                    "acceptedAnswers": [
                        "太平山頂",
                        "taai3ping4saan1deng2",
                        "taai3 ping4 saan1 deng2",
                        "Taai3 ping4 saan1 deng2",
                        "Taai3ping4saan1deng2",
                        "太平山顶"
                    ],
                    "explanation": "太平山頂 (taai3 ping4 saan1 deng2) means 'Victoria Peak' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u8-l1": {
        "id": "hk-u8-l1",
        "unit": "hk-u8",
        "level": "A2",
        "objective": "Master the general Cantonese negator 唔 (m4 - not / don't), its phonological properties, and essential daily collocations (唔係, 唔要, 唔同, 唔好意思, 唔使).",
        "prerequisites": [
            "hk-u7-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u7-l5"
            ]
        },
        "presentation": {
            "explanation": "喺廣東話入面，最基本、出現頻率最高嘅否定詞係**「唔 (m4)」**！\n\n1. 「唔 (m4)」嘅語法定位 (General Negation: 唔 + V / Adj / Adv):\n- 相當於普通話嘅「不」或英文嘅 'not / don't'。\n- **唔係 (m4 hai6)**：Is not / are not。\n- **唔要 (m4 jiu3)**：Don't want。\n- **唔好 (m4 hou2)**：Don't... (祈使否定) / Not good。\n- **唔好意思 (m4 hou2 ji3 si3)**：Excuse me / sorry (禮貌社交口頭禪)。\n- **唔使 (m4 sai2)**：No need / don't have to。\n- **唔同 (m4 tung4)**：Different / not the same。\n\n2. 祈使句禁止與勸阻 (Prohibitive '唔好'):\n- 「你**唔好行咁快**啦，等埋我！」(Don't walk so fast, wait for me!)\n- 「千祈**唔好唔記得**帶鎖匙。」(Be sure not to forget to bring keys.)",
            "examples": [
                {
                    "target": "唔好意思，請問尖沙咀港鐵站嘅A出口應該點樣行呀？",
                    "reading": "m4 hou2 ji3 si3, cing2 man6 zim1 saa1 zeoi2 gong2 tit3 zaam6 ge3 A ceot1 hau2 jing1 goi1 dim2 joeng2 haang4 aa3?",
                    "translation": "Excuse me, could you please tell me how to get to Exit A of Tsim Sha Tsui MTR station?"
                },
                {
                    "target": "我今日唔係好得閒，聽日下晝再約出嚟飲茶傾計啦。",
                    "reading": "ngo5 gam1 jat6 m4 hai6 hou2 dak1 haan4, ting1 jat6 haa6 ng5 zoi3 joek3 ceot1 lei4 jam2 caa4 king1 gai3 laa1.",
                    "translation": "I am not very free today; let's arrange to meet for yum cha and chat tomorrow afternoon instead."
                },
                {
                    "target": "呢件衫嘅質地好舒服，而且價錢唔算太貴。",
                    "reading": "ni1 gin6 saam1 ge3 zat1 dei6 hou2 syu1 fuk6, ji4 ce2 gaa3 cin4 m4 syun3 taai3 gwai3.",
                    "translation": "The texture of this shirt is very comfortable, and the price is not considered too expensive."
                }
            ],
            "mnemonics": [
                "General Negation: 唔 (m4) = 'Not / Don't' (唔係, 唔要, 唔使, 唔好意思)!"
            ],
            "culturalNotes": [
                "«唔好意思» (m4 hou2 ji3 si3) is the social lubricant of Hong Kong life, used for apologies, clearing a path through crowds, or polite opening remarks."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話中向路人問路或禮貌致歉時最常用的口頭禪「不好意思 / 對不起」是：",
                    "options": [
                        "唔好意思 (m4 hou2 ji3 si3 - Excuse me / sorry)",
                        "唔該晒",
                        "冇問題"
                    ],
                    "answerIndex": 0,
                    "explanation": "唔好意思 (m4 hou2 ji3 si3) is the classic polite apology/opening phrase."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "用廣東話勸阻他人「不要走得那麼快」，最地道的祈使否定句是：",
                    "options": [
                        "你咪行咁快",
                        "你唔好行咁快啦 (nei5 m4 hou2 haang4 gam3 faai3 laa1 - Don't walk so fast)",
                        "你冇行咁快"
                    ],
                    "answerIndex": 1,
                    "explanation": "唔好 (m4 hou2) is the standard prohibitive marker for 'don't'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話通用否定詞「唔 (m4)」的用法與常見搭配，下列哪一項表述完全正確？",
                    "options": [
                        "「唔」只能否定形容詞不能否定動詞",
                        "「唔」是廣東話最核心的常態否定詞（相當於「不」），可用於否定判斷（唔係）、意志（唔要）、必要性（唔使）及祈使勸阻（唔好） (m4 is the primary general negator for verbs/adjectives/auxiliaries)",
                        "廣東話中沒有「唔」這個字"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately details the scope and collocations of 唔."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi phrase for 'excuse me / sorry' in Cantonese (唔好意思):",
                    "acceptedAnswers": [
                        "唔好意思",
                        "m4hou2ji3si3",
                        "m4 hou2 ji3 si3",
                        "M4 hou2 ji3 si3",
                        "M4hou2ji3si3",
                        "唔好意思啦"
                    ],
                    "explanation": "唔好意思 (m4 hou2 ji3 si3) means 'excuse me / sorry' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u8-l2": {
        "id": "hk-u8-l2",
        "unit": "hk-u8",
        "level": "A2",
        "objective": "Master the existential, possessive, and past-event negator 冇 (mou5 - have not / there is no / did not).",
        "prerequisites": [
            "hk-u8-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u8-l1"
            ]
        },
        "presentation": {
            "explanation": "廣東話表達「沒有（領有/存在）」或者「過去沒有做某事」，專用否定詞係**「冇 (mou5)」**！\n\n1. 「冇 (mou5)」嘅三大核心用法 (Three Core Usages of 冇):\n- **領有否定 (Possessive: S + 冇 + O)**：冇錢 (have no money)、冇時間 (have no time)、冇車牌 (have no driving license)。\n- **存在否定 (Existential: 地點 + 冇 + 名詞)**：屋企冇人 (nobody at home)、雪櫃冇嘢飲 (nothing to drink in the fridge)。\n- **過去動作否定 (Past Action Negation: S + 冇 + V)**：相當於普通話「沒(有)做」或英文 'did not'（例如：我琴日冇返工 — I didn't go to work yesterday）。\n\n2. 常用社交短語 (High-Frequency Collocations):\n- **冇問題 (mou5 man6 tai4)**：No problem / absolutely fine。\n- **冇所謂 (mou5 so2 wai6)**：Doesn't matter / no preference。\n- **冇事 (mou5 si6)**：It's okay / nothing's wrong。",
            "examples": [
                {
                    "target": "呢件事交畀我處理啦，絕對冇問題！",
                    "reading": "ni1 gin6 si6 gaau1 bei2 ngo5 cyu2 lei5 laa1, zyut6 deoi3 mou5 man6 tai4!",
                    "translation": "Leave this matter to me to handle, absolutely no problem!"
                },
                {
                    "target": "我琴晚太攰喇，所以冇同佢哋去尖沙咀睇電影。",
                    "reading": "ngo5 kam4 maan5 taai3 gui6 laa3, so2 ji5 mou5 tung4 keoi5 dei6 heoi3 zim1 saa1 zeoi2 tai2 din6 jing2.",
                    "translation": "I was too exhausted last night, so I didn't go with them to Tsim Sha Tsui to watch a movie."
                },
                {
                    "target": "雪櫃入面冇晒鮮奶喇，我一陣落樓下超級市場買番兩盒。",
                    "reading": "syut3 gwai6 jap6 min6 mou5 saai3 sin1 naai5 laa3, ngo5 jat1 zan6 lok6 lau4 haa6 ciu1 kap1 si5 coeng4 maai5 faan1 loeng5 hap6.",
                    "translation": "There is no fresh milk left in the fridge; I'll go down to the supermarket in a while to buy two cartons."
                }
            ],
            "mnemonics": [
                "Mou5 Triple: 冇錢(No money - Possess), 冇人(Nobody - Exist), 冇去(Didn't go - Past)!"
            ],
            "culturalNotes": [
                "«冇問題» (mou5 man6 tai4) is one of the first and most practical phrases every Cantonese learner adopts; it conveys easygoing readiness and reassurance."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在廣東話中表達「完全沒問題 / 沒事」，最地道自信的回答是：",
                    "options": [
                        "冇問題 (mou5 man6 tai4 - No problem)",
                        "唔問題",
                        "未問題"
                    ],
                    "answerIndex": 0,
                    "explanation": "冇問題 (mou5 man6 tai4) uses the possessive/existential negator 冇."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話表達「我昨天沒有去公司上班」，正確的動詞否定句是：",
                    "options": [
                        "我琴日冇返工 (ngo5 kam4 jat6 mou5 faan1 gung1 - I didn't go to work yesterday)",
                        "我琴日唔返工",
                        "我琴日未返工"
                    ],
                    "answerIndex": 0,
                    "explanation": "冇 (mou5) + verb denotes past non-occurrence of an action ('did not')."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話否定詞「冇 (mou5)」在否定領有、存在及過去動作時的用法，下列哪一項表述完全正確？",
                    "options": [
                        "「冇 (mou5)」專門用於否定領有（冇錢）、存在（冇人）以及過去發生的動作（冇去/冇做） (mou5 negates possession, existence, and past actions 'did not')",
                        "「冇」只能用於否定未來的計劃",
                        "「冇問題」在廣東話中意思是很多問題"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately covers the possessive, existential, and past-action functions of 冇."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'no problem' in Cantonese (冇問題):",
                    "acceptedAnswers": [
                        "冇問題",
                        "mou5man6tai4",
                        "mou5 man6 tai4",
                        "Mou5 man6 tai4",
                        "Mou5man6tai4",
                        "没问题",
                        "冇问题"
                    ],
                    "explanation": "冇問題 (mou5 man6 tai4) means 'no problem' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u8-l3": {
        "id": "hk-u8-l3",
        "unit": "hk-u8",
        "level": "A2",
        "objective": "Master the aspectual negator 未 (mei6 - not yet), its future expectation implication, and pragmatic workplace phrases (未搞掂, 未必, 未知).",
        "prerequisites": [
            "hk-u8-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u8-l2"
            ]
        },
        "presentation": {
            "explanation": "當一件事情「仲未發生」或「仲未完成」，但預期將來會完成時，廣東話專用否定詞係**「未 (mei6)」**！\n\n1. 「未 (mei6)」嘅核心內涵 (Implication of 'Not Yet'):\n- 帶有「期待/預期後續會發生」嘅時間體態色彩。\n- **未食 (mei6 sik6)**：Haven't eaten yet (打算之後食)。\n- **未搞掂 (mei6 gaau2 dim6)**：Not settled / fixed / finished yet (香港職場極高頻)。\n- **未知 (mei6 zi1)**：Don't know yet (仲未確定)。\n- **未完 (mei6 jyun4)**：Not ended / finished yet。\n- **未必 (mei6 bit1)**：Not necessarily / not definitely。\n\n2. 「未」與「唔」之對比 (Semantic Distinction):\n- 「我**唔食**辣。」(I don't eat spicy food — 習慣/意志否定)。\n- 「我**未食**飯。」(I haven't eaten yet — 動作尚未發生)。",
            "examples": [
                {
                    "target": "份工程設計圖仲有少少細節修改緊，暫時未搞掂。",
                    "reading": "fan6 gung1 cing4 cit3 gai3 tou4 zung6 jau5 siu2 siu2 sai3 zit3 sau1 goi2 gan2, zaam6 si4 mei6 gaau2 dim6.",
                    "translation": "The engineering design drawing still has a few details being revised; it's not settled yet for now."
                },
                {
                    "target": "呢件事聽日開會先決定，而家仲未知最後結果。",
                    "reading": "ni1 gin6 si6 ting1 jat6 hoi1 wui6 sin1 kyut3 ding6, ji4 gaa1 zung6 mei6 zi1 zeoi3 hau6 git3 gwo2.",
                    "translation": "This matter will only be decided at tomorrow's meeting; right now we don't know the final result yet."
                },
                {
                    "target": "平嘢未必冇好嘢，最緊要識得揀！",
                    "reading": "peng4 je5 mei6 bit1 mou5 hou2 je5, zeoi3 gan2 jiu3 sik1 dak1 gaan2!",
                    "translation": "Cheap things aren't necessarily without good quality; the most important thing is knowing how to choose!"
                }
            ],
            "mnemonics": [
                "Mei6 Expectation: 未 (mei6) = Not yet (未搞掂, 未知, 未完) -> Will happen soon!"
            ],
            "culturalNotes": [
                "«搞掂» (gaau2 dim6) means 'settled / fixed / done'; saying «未搞掂» (mei6 gaau2 dim6) is common when reporting status in Hong Kong offices."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "香港職場中表達「手頭上的工作還沒有處理好/搞定」，最地道的詞彙是：",
                    "options": [
                        "唔搞掂",
                        "未搞掂 (mei6 gaau2 dim6 - Not settled / done yet)",
                        "冇搞掂"
                    ],
                    "answerIndex": 1,
                    "explanation": "未搞掂 (mei6 gaau2 dim6) conveys that the task is currently in progress and not yet completed."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話成語俗語「未必 (mei6 bit1)」的精確意思是：",
                    "options": [
                        "不一定 / 未必 (Not necessarily / not definitely)",
                        "肯定不會",
                        "必須要"
                    ],
                    "answerIndex": 0,
                    "explanation": "未必 (mei6 bit1) means 'not necessarily'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中「未 (mei6)」的體態否定語義及其與「唔 (m4)」的區別，下列哪一項表述完全正確？",
                    "options": [
                        "「未」與「唔」完全同義可互換",
                        "「未」只能用來否定名詞",
                        "「未 (mei6)」表示「尚未（預期會完成）」（如未搞掂、未食、未知）；而「唔 (m4)」表示常態或主觀意志否定（如唔食辣） (mei6 marks incomplete status with future expectation, whereas m4 marks habitual/volitional negation)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately contrasts aspectual incompletion against volitional negation."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'not settled yet / not done yet' in Cantonese (未搞掂):",
                    "acceptedAnswers": [
                        "未搞掂",
                        "mei6gaau2dim6",
                        "mei6 gaau2 dim6",
                        "Mei6 gaau2 dim6",
                        "Mei6gaau2dim6",
                        "未搞定"
                    ],
                    "explanation": "未搞掂 (mei6 gaau2 dim6) means 'not settled yet' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u8-l4": {
        "id": "hk-u8-l4",
        "unit": "hk-u8",
        "level": "A2",
        "objective": "Master the complete Cantonese Negation Triad (唔 vs 冇 vs 未) through direct parallel contrasts across habits, past actions, and completion states.",
        "prerequisites": [
            "hk-u8-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u8-l3"
            ]
        },
        "presentation": {
            "explanation": "要講一口道地嘅廣東話，必須精準分辨三大否定詞：**「唔 (m4)」、「冇 (mou5)」、「未 (mei6)」**！\n\n1. 三大否定詞並列對照表 (The Cantonese Negation Triad):\n| 詞彙 | 語法功能 | 典型例子 | 英語對照 |\n| :--- | :--- | :--- | :--- |\n| **唔 (m4)** | 主觀意願、常態習慣、判斷 | 我**唔食**牛肉。(I don't eat beef) | Habitual / General 'Don't' |\n| **冇 (mou5)** | 過去事實未發生、無領有/存在 | 我琴日**冇食**早餐。(I didn't eat breakfast yesterday) | Past action 'Didn't' / 'No' |\n| **未 (mei6)** | 動作尚未完成（但預期會做） | 我仲**未食**晏晝飯。(I haven't eaten lunch yet) | Incompletion 'Haven't yet' |\n\n2. 關鍵辨析實戰 (Practical Triad Drills):\n- **去 (go)**：我**唔去** (I won't go) vs 我尋日**冇去** (I didn't go yesterday) vs 我仲**未去** (I haven't gone yet)。\n- **知 (know)**：我**唔知** (I don't know) vs 我暫時**未知** (I don't know yet / not confirmed yet)。",
            "examples": [
                {
                    "target": "陳生平時唔飲咖啡，但今日為咗醒神破例飲咗一杯。",
                    "reading": "Can4 saang1 ping4 si4 m4 jam2 gaa3 fe1, daan6 gam1 jat6 wai6 zo2 seng2 san4 po3 lai6 jam2 zo2 jat1 bui1.",
                    "translation": "Mr. Chan usually doesn't drink coffee, but drank a cup today as an exception to stay awake."
                },
                {
                    "target": "我今朝太遲起身，所以冇食早餐就急急忙忙出門。",
                    "reading": "ngo5 gam1 ziu1 taai3 ci4 hei2 san1, so2 ji5 mou5 sik6 zou2 caan1 zau6 gap1 gap1 mong4 mong4 ceot1 mun4.",
                    "translation": "I got up too late this morning, so I rushed out without having breakfast."
                },
                {
                    "target": "你叫嘅外賣送到嚟未呀？仲未到，外賣員話塞緊車。",
                    "reading": "nei5 giu3 ge3 ngoi6 maai6 sung3 dou3 lei4 mei6 aa3? zung6 mei6 dou3, ngoi6 maai6 jyun4 waa6 sak1 gan2 ce1.",
                    "translation": "Has the takeout you ordered arrived yet? Not yet arrived, the courier says there's a traffic jam."
                }
            ],
            "mnemonics": [
                "Triad Rule: 唔(Won't/Don't habit) | 冇(Didn't past) | 未(Not yet pending)!"
            ],
            "culturalNotes": [
                "Confusing «唔» and «冇» is one of the clearest markers of non-native speech; mastering «唔食 / 冇食 / 未食» unlocks native-level fluency."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "如果要表達「我不吃榴槤（個人習慣或喜好不吃）」，最正確的句子是：",
                    "options": [
                        "我冇食榴槤",
                        "我唔食榴槤 (ngo5 m4 sik6 lau4 lin4 - I don't eat durian)",
                        "我未食榴槤"
                    ],
                    "answerIndex": 1,
                    "explanation": "唔食 (m4 sik6) denotes general habitual/volitional negation ('don't eat')."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "如果要表達「我昨天因為太忙所以沒吃午餐（過去事實）」，最正確的句子是：",
                    "options": [
                        "我琴日太忙所以冇食午餐 (ngo5 kam4 jat6 taai3 mong4 so2 ji5 mou5 sik6 ng5 caan1)",
                        "我琴日太忙所以唔食午餐",
                        "我琴日太忙所以未食午餐"
                    ],
                    "answerIndex": 0,
                    "explanation": "冇食 (mou5 sik6) expresses the non-occurrence of a past event ('did not eat')."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中「唔 (m4)」、「冇 (mou5)」與「未 (mei6)」三者的語法語義分野，下列哪一項總括完全正確？",
                    "options": [
                        "三者可以隨意互換無任何區別",
                        "「唔」表習慣與意志（唔食）；「冇」表過去事實未發生或無（冇食/冇錢）；「未」表動作尚未完成但預期會發生（未食） (m4 marks habit/volition, mou5 marks past non-occurrence/absence, mei6 marks incomplete action with future expectation)",
                        "「未」只能放在句尾"
                    ],
                    "answerIndex": 1,
                    "explanation": "Excellently captures the tri-part functional division in Cantonese grammar."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'don't eat / will not eat (habit/volition)' in Cantonese (唔食):",
                    "acceptedAnswers": [
                        "唔食",
                        "m4sik6",
                        "m4 sik6",
                        "M4 sik6",
                        "M4sik6",
                        "不吃",
                        "唔吃"
                    ],
                    "explanation": "唔食 (m4 sik6) means 'don't eat / will not eat' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u8-l5": {
        "id": "hk-u8-l5",
        "unit": "hk-u8",
        "level": "A2",
        "objective": "Synthesize all three negators (唔, 冇, 未) in a realistic office and service scenario solving unexpected hiccups.",
        "prerequisites": [
            "hk-u8-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u8-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢課綜合實戰篇，我哋將第八單元學到嘅「唔（唔係/唔好意思）」、「冇（冇問題/冇事）」同「未（未搞掂/未知）」融會貫通，演繹職場與生活場景中嘅地道對答！\n\n1. 否定詞與社交禮貌詞彙表 (Negation & Social Etiquette):\n- **唔該晒 (m4 goi1 saai3)**：Thank you very much (for help / service)。\n- **唔好意思 (m4 hou2 ji3 si3)**：Excuse me / sorry。\n- **冇問題 (mou5 man6 tai4)**：No problem at all。\n- **未搞掂 (mei6 gaau2 dim6)**：Not settled yet。\n- **冇所謂 (mou5 so2 wai6)**：Doesn't matter / fine either way。\n\n2. 第八單元實戰對話範例 (Unit 8 Master Dialogue):\n- **經理**：‘Peter，琴日客戶要求嗰份報價單搞掂未呀？’\n- **職員Peter**：‘唔好意思經理，因為仲等緊供應商報價，所以暫時**未搞掂**。’\n- **經理**：‘咁大約幾點可以出到？客戶好急喎。’\n- **職員Peter**：‘供應商話一點鐘前會覆，我收到之後即刻處理，下晝兩點前交畀你，**冇問題**！’\n- **經理**：‘好，**唔該晒**！’",
            "examples": [
                {
                    "target": "唔好意思麻煩晒你，呢份文件請幫我交畀會計部。",
                    "reading": "m4 hou2 ji3 si3 maa4 faan4 saai3 nei5, ni1 fan6 man4 gin2 cing2 bong1 ngo5 gaau1 bei2 wui6 gai3 bou6.",
                    "translation": "Sorry to trouble you, please help me hand this document to the accounting department."
                },
                {
                    "target": "冇問題，我而家順路行過去，即刻幫你送過去。",
                    "reading": "mou5 man6 tai4, ngo5 ji4 gaa1 seon6 lou6 haang4 gwo3 heoi3, zik1 hak1 bong1 nei5 sung3 gwo3 heoi3.",
                    "translation": "No problem, I'm heading that way now, will deliver it for you right away."
                },
                {
                    "target": "多謝你幫手，真係唔該晒你！",
                    "reading": "do1 ze6 nei5 bong1 sau2, zan1 hai6 m4 goi1 saai3 nei5!",
                    "translation": "Thanks for helping out, really thank you so much!"
                }
            ],
            "mnemonics": [
                "Problem Solving Loop: 唔好意思(Sorry/Excuse me) -> 暫時未(Not yet) -> 絕對冇(No problem) -> 唔該晒(Thank you)!"
            ],
            "culturalNotes": [
                "«唔該晒» (m4 goi1 saai3) combines «唔該» (please / thanks for service) with the exhaustive particle «晒» (saai3 - completely / all), creating a very warm and sincere expression of gratitude."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在廣東話中向對方表達「非常感謝你的熱心幫忙 / 太謝謝你了」，最地道合適的用語是：",
                    "options": [
                        "唔該晒 (m4 goi1 saai3 - Thank you so much for your service/help)",
                        "對唔住",
                        "未搞掂"
                    ],
                    "answerIndex": 0,
                    "explanation": "唔該晒 (m4 goi1 saai3) is the authentic expression of gratitude for someone's assistance."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "當同事向你致歉並表示任務「暫時未搞掂但兩點前一定做好」，你表示「沒關係、沒問題」的最地道回應是：",
                    "options": [
                        "冇問題，唔緊要啦 (mou5 man6 tai4, m4 gan2 jiu3 laa1)",
                        "唔問題",
                        "未問題"
                    ],
                    "answerIndex": 0,
                    "explanation": "冇問題，唔緊要啦 blends reassurance (冇問題) with 'it's okay' (唔緊要)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話第八單元三大否定詞（唔、冇、未）在生活與商務中的綜合協同應用，下列哪一項總括完全正確？",
                    "options": [
                        "「唔（唔好意思/唔該晒）」、「冇（冇問題）」與「未（未搞掂）」精確分工，構成了廣東話日常社交、任務協調與禮貌溝通的核心語言架構 (The triad m4, mou5, mei6 forms the core pragmatic framework for polite social negotiation, status reporting, and problem resolution)",
                        "廣東話否定詞無法在職場使用",
                        "廣東話沒有禮貌用語"
                    ],
                    "answerIndex": 0,
                    "explanation": "Masterfully encapsulates the holistic pragmatic utility of the Cantonese negation triad."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'thank you very much (for help / service)' in Cantonese (唔該晒):",
                    "acceptedAnswers": [
                        "唔該晒",
                        "m4goi1saai3",
                        "m4 goi1 saai3",
                        "M4 goi1 saai3",
                        "M4goi1saai3",
                        "唔该晒",
                        "唔該曬"
                    ],
                    "explanation": "唔該晒 (m4 goi1 saai3) means 'thank you very much' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u9-l1": {
        "id": "hk-u9-l1",
        "unit": "hk-u9",
        "level": "A2",
        "objective": "Master teahouse seating etiquette (開位), tea varieties (普洱, 鐵觀音, 香片, 菊花), and iconic table manners (叩指禮, 揭蓋加水).",
        "prerequisites": [
            "hk-u8-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u8-l5"
            ]
        },
        "presentation": {
            "explanation": "去茶樓酒家「飲茶 (jam2 caa4)」，係廣東同香港文化中最具代表性嘅飲食社交活動！\n\n1. 開位與品茶選擇 (Seating & Tea Selection):\n- 入座時侍應會問：‘幾多位呀？飲咩茶？’\n- **普洱 (pou2 nei2)**：Pu-erh tea（性溫、消滯解膩，最受歡迎）。\n- **鐵觀音 (tit3 gun1 jam1)**：Tieguanyin oolong tea（茶香濃郁）。\n- **香片 (hoeng1 pin2)**：Jasmine green tea（清香怡人）。\n- **菊普 (guk1 pou2)**：Chrysanthemum with Pu-erh（降火潤喉）。\n\n2. 飲茶兩大經典肢體禮儀 (Teahouse Body Etiquette):\n- **叩手禮 / 叩指禮 (kau3 zi2 lai5)**：人哋幫你倒茶嗰陣，用食指與中指（或單指）輕敲桌面兩三下，表示「唔該 / 多謝」（源於乾隆下江南微服出巡之典故）。\n- **揭開茶壺蓋 (kit3 hoi1 caa4 wu2 goi3)**：茶壺冇水嗰陣，將壺蓋斜放或揭開，侍應睇到就會主動過嚟幫你加滾水。",
            "examples": [
                {
                    "target": "早晨兩位！請問兩位今日想飲普洱定係香片呀？",
                    "reading": "zou2 san4 loeng5 wai2! cing2 man6 loeng5 wai2 gam1 jat6 soeng2 jam2 pou2 nei2 ding6 hai6 hoeng1 pin2 aa3?",
                    "translation": "Good morning two persons! May I ask if you two would like to drink Pu-erh or Jasmine tea today?"
                },
                {
                    "target": "人哋斟茶嗰陣輕輕叩兩下枱面，係廣東人好地道嘅禮貌習慣。",
                    "reading": "jan4 dei6 zam1 caa4 go2 zan6 heng1 heng1 kau3 loeng5 haa6 toi2 min2, hai6 gwong2 dung1 jan4 hou2 dei6 dou6 ge3 lai5 maau6 zaap6 gwaan3.",
                    "translation": "Tapping the table gently twice when someone pours tea is a very authentic polite habit of Cantonese people."
                },
                {
                    "target": "個茶壺冇晒水喇，揭開個蓋等侍應過嚟加滾水啦。",
                    "reading": "go3 caa4 wu2 mou5 saai3 seoi2 laa3, kit3 hoi1 go3 goi3 dang2 si6 jing3 gwo3 lei4 gaa1 gwan2 seoi2 laa1.",
                    "translation": "The teapot has run out of water, open the lid and wait for the waiter to come over and add boiling water."
                }
            ],
            "mnemonics": [
                "Yum Cha Ritual: 開位問茶(Pu'er/Tieguanyin) -> 斟茶叩指(Tap table) -> 冇水揭蓋(Open lid)!"
            ],
            "culturalNotes": [
                "«叩指禮» (finger tapping) originated from Emperor Qianlong travelling incognito in Guangdong; his ministers bent two fingers like kneeling knees to secretly thank him when he poured tea."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺茶樓飲茶，當別人為你倒茶斟茶時，廣東人表達感謝的地道動作是：",
                    "options": [
                        "大聲拍手",
                        "用手指輕叩桌面兩下（叩指禮） (Tap the table gently with fingers - Kau zi lai)",
                        "舉手示意侍應"
                    ],
                    "answerIndex": 1,
                    "explanation": "叩指禮 (kau3 zi2 lai5 - finger tapping) is the quintessential teahouse gesture of gratitude."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "當茶壺中的茶水喝完需要添加熱水時，廣東茶樓的經典默認暗號是：",
                    "options": [
                        "將茶壺蓋揭開或斜放 (Open or tilt the teapot lid)",
                        "把茶壺倒扣在桌上",
                        "大聲敲打碗碟"
                    ],
                    "answerIndex": 0,
                    "explanation": "揭開茶壺蓋 signals to teahouse staff that hot water refill is needed."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東傳統「飲茶 (jam2 caa4)」文化中的品茗種類（普洱/香片/鐵觀音）與餐桌禮儀，下列哪一項表述完全正確？",
                    "options": [
                        "飲茶時不能喝任何茶水",
                        "廣東飲茶講究茶道與禮儀，常見茶品有普洱、香片、鐵觀音等，並以叩指禮謝茶、揭蓋示意加滾水 (Cantonese yum cha features classics like Pu'er and Tieguanyin, finger tapping thanks, and lid-tilting for refills)",
                        "「開位」在廣東話中是開會的意思"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately frames the cultural vocabulary and etiquette of teahouses."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'Pu-erh tea' in Cantonese (普洱茶):",
                    "acceptedAnswers": [
                        "普洱茶",
                        "pou2nei2caa4",
                        "pou2 nei2 caa4",
                        "Pou2 nei2 caa4",
                        "Pou2nei2caa4",
                        "普洱",
                        "pou2nei2",
                        "pou2 nei2"
                    ],
                    "explanation": "普洱茶 (pou2 nei2 caa4) means 'Pu-erh tea' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u9-l2": {
        "id": "hk-u9-l2",
        "unit": "hk-u9",
        "level": "A2",
        "objective": "Master the classic Four Heavenly Kings (四大天王) of Cantonese dim sum (蝦餃, 燒賣, 叉燒包, 蛋撻) and their ordering classifiers (籠 lung4, 碟 dip6).",
        "prerequisites": [
            "hk-u9-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u9-l1"
            ]
        },
        "presentation": {
            "explanation": "廣東點心（Dim Sum）款式成百上千，但最傳奇、每枱必叫嘅係**「點心四大天王」**！\n\n1. 點心四大天王 (The Four Dim Sum Heavenly Kings):\n- **蝦餃 (haa1 gaau2)**：Crystal Shrimp Dumplings（皮薄餡靚、晶瑩剔透、整隻鮮蝦包裹）。\n- **燒賣 (siu1 maai2)**：Pork & Shrimp Siu Mai（豬肉鮮蝦餡、頂部常綴以蟹籽）。\n- **叉燒包 (caa1 siu1 baau1)**：Steamed BBQ Pork Buns（鬆軟麵皮包裹秘製蜜汁叉燒）。\n- **蛋撻 (daan6 taat1)**：Egg Tarts（酥皮或牛油皮包裹香濃幼滑蛋漿）。\n\n2. 點心量詞與叫法 (Quantifiers for Dim Sum):\n- **一籠 (jat1 lung4)**：A steamer basket of (如：一籠蝦餃、一籠燒賣)。\n- **一碟 (jat1 dip6)**：A plate / dish of (如：一碟叉燒腸粉、一碟蛋撻)。\n- **一打 (jat1 daa1)**：A dozen (如：買一打蛋撻返公司)。",
            "examples": [
                {
                    "target": "唔該幫我哋叫兩籠蝦餃、一籠燒賣同埋一籠蜜汁叉燒包！",
                    "reading": "m4 goi1 bong1 ngo5 dei6 giu3 loeng5 lung4 haa1 gaau2, jat1 lung4 siu1 maai2 tung4 maai4 jat1 lung4 mat6 zap1 caa1 siu1 baau1!",
                    "translation": "Please help us order two baskets of shrimp dumplings, one basket of siu mai, and one basket of honey BBQ pork buns!"
                },
                {
                    "target": "呢間茶樓嘅蝦餃真係好足料，每一粒都食到大大隻鮮甜海蝦！",
                    "reading": "ni1 gaan1 caa4 lau4 ge3 haa1 gaau2 zan1 hai6 hou2 zuk1 liu2, mui5 jat1 nap1 dou1 sik6 dou3 daai6 daai6 zek3 sin1 tim4 hoi2 haa1!",
                    "translation": "The shrimp dumplings at this teahouse are really generously made, every single one contains a huge, sweet, fresh prawn!"
                },
                {
                    "target": "新鮮出爐嘅酥皮蛋撻熱辣辣、香噴噴，食一啖真係好滿足。",
                    "reading": "san1 sin1 ceot1 lou4 ge3 sou1 pei4 daan6 taat1 jit6 laat6 laat6, hoeng1 pan1 pan1, sik6 jat1 daam6 zan1 hai6 hou2 mun5 zuk1.",
                    "translation": "The freshly baked flaky egg tarts are piping hot and fragrant; taking a bite is truly satisfying."
                }
            ],
            "mnemonics": [
                "Big 4 Dim Sum: 蝦餃(haa1 gaau2) + 燒賣(siu1 maai2) + 叉燒包(caa1 siu1 baau1) + 蛋撻(daan6 taat1) = 四大天王!"
            ],
            "culturalNotes": [
                "Judging a teahouse's culinary standard begins with its «蝦餃» (shrimp dumplings): master chefs ensure the wrapper has at least 9 to 13 pleats («蜘蛛肚») and is translucent yet durable."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東茶樓點心界享譽全球、被譽為四大天王之首的晶瑩點心是：",
                    "options": [
                        "春卷",
                        "蝦餃 (haa1 gaau2 - Steamed shrimp dumplings)",
                        "炒飯"
                    ],
                    "answerIndex": 1,
                    "explanation": "蝦餃 (haa1 gaau2) is the undisputed flagship of Cantonese dim sum."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在茶樓點單時，蒸籠類點心（如燒賣、蝦餃）最標準的量詞是：",
                    "options": [
                        "籠 (lung4 - Steamer basket)",
                        "樽",
                        "條"
                    ],
                    "answerIndex": 0,
                    "explanation": "一籠 (jat1 lung4) is the proper classifier for bamboo-steamer dim sum."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東茶樓「四大天王」點心（蝦餃、燒賣、叉燒包、蛋撻）及其專用量詞，下列哪一項表述完全正確？",
                    "options": [
                        "「四大天王」指蝦餃、燒賣、叉燒包、蛋撻；蒸點通常以「籠 (lung4)」為量詞（如一籠蝦餃） (The 4 kings are haa1 gaau2, siu1 maai2, caa1 siu1 baau1, daan6 taat1; steamers counted by lung4)",
                        "廣東點心只有辣味一種",
                        "燒賣在廣東話中是用豆腐做的甜品"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately encapsulates the classic dim sum quadruplet and classifier usage."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'shrimp dumplings' in Cantonese (蝦餃):",
                    "acceptedAnswers": [
                        "蝦餃",
                        "haa1gaau2",
                        "haa1 gaau2",
                        "Haa1 gaau2",
                        "Haa1gaau2",
                        "虾饺"
                    ],
                    "explanation": "蝦餃 (haa1 gaau2) means 'steamed shrimp dumplings' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u9-l3": {
        "id": "hk-u9-l3",
        "unit": "hk-u9",
        "level": "A2",
        "objective": "Master vocabulary for rice noodle rolls (腸粉), savory cakes (蘿蔔糕), fried dim sum, and signature Cantonese desserts (楊枝甘露).",
        "prerequisites": [
            "hk-u9-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u9-l2"
            ]
        },
        "presentation": {
            "explanation": "除咗四大天王，廣東點心仲有豐富嘅蒸腸粉、煎炸小食同埋經典糖水甜品！\n\n1. 腸粉家族 (Cheung Fun - Rice Noodle Rolls):\n- **腸粉 (coeng2 fan2)**：Steamed rice noodle rolls。\n- **鮮蝦腸 (sin1 haa1 coeng2)**：Shrimp cheung fun。\n- **叉燒腸 (caa1 siu1 coeng2)**：Char siu cheung fun。\n- **牛肉腸 (ngau4 juk6 coeng2)**：Beef cheung fun。\n- **炸兩 (zaa3 loeng5)**：Crispy youtiao wrapped in silky rice roll (蘸甜醬、麻醬同豉油)。\n\n2. 煎炸糕點與甜品 (Pan-Fried Cakes & Desserts):\n- **蘿蔔糕 (lo4 baak6 gou1)**：Pan-fried radish/turnip cake（鹹香惹味）。\n- **春卷 (ceon1 gyun2)**：Crispy spring rolls。\n- **楊枝甘露 (joeng4 zi1 gam1 lou6)**：Mango pomelo sago dessert soup（香港原創經典甜品）。\n- **芝麻糊 (zi1 maa4 wu4)**：Black sesame sweet soup。",
            "examples": [
                {
                    "target": "唔該畀多一碟煎蘿蔔糕同一碟香脆炸兩，多啲豉油同甜醬。",
                    "reading": "m4 goi1 bei2 do1 jat1 dip6 zin1 lo4 baak6 gou1 tung4 jat1 dip6 hoeng1 ceoi3 zaa3 loeng5, do1 di1 si6 jau4 tung4 tim4 zoeng3.",
                    "translation": "Please give us one more plate of pan-fried radish cake and one plate of crispy zhaliang, with more soy sauce and sweet sauce."
                },
                {
                    "target": "食完咁多鹹點心之後，梗係要叫一碗楊枝甘露清涼解膩啦！",
                    "reading": "sik6 jyun4 gam3 do1 haam4 dim2 sam1 zi1 hau6, gang2 hai6 jiu3 giu3 jat1 wun2 joeng4 zi1 gam1 lou6 cing1 loeng4 gaai2 nei6 laa1!",
                    "translation": "After eating so many savory dim sum, we must of course order a bowl of mango pomelo sago to refresh and cleanse the palate!"
                },
                {
                    "target": "呢度嘅鮮蝦腸粉皮好薄好滑，豉油甜甜地好惹味。",
                    "reading": "ni1 dou6 ge3 sin1 haa1 coeng2 fan2 pei4 hou2 bok6 hou2 waat6, si6 jau4 tim4 tim4 dei2 hou2 je5 mei6.",
                    "translation": "The shrimp rice noodle rolls here have very thin and silky skin, and the sweet soy sauce is very appetizing."
                }
            ],
            "mnemonics": [
                "Dim Sum Extras: 腸粉(Rice rolls) + 蘿蔔糕(Radish cake) + 楊枝甘露(Mango pomelo dessert)!"
            ],
            "culturalNotes": [
                "«炸兩» (zaa3 loeng5) was invented in Guangzhou during wartime in the 1940s to offer the luxury of cheung fun and crunch of fried dough in a single affordable dish."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "用蒸熟的米漿薄皮包裹油條並淋上豉油甜醬的經典廣東點心是：",
                    "options": [
                        "炸兩 (zaa3 loeng5 - Fried dough wrapped in rice roll)",
                        "蛋撻",
                        "春卷"
                    ],
                    "answerIndex": 0,
                    "explanation": "炸兩 (zaa3 loeng5) is the classic combination of crispy dough inside smooth cheung fun."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "源自香港著名酒樓、由芒果、西米、柚子肉同椰汁混合而成的經典甜品是：",
                    "options": [
                        "紅豆沙",
                        "楊枝甘露 (joeng4 zi1 gam1 lou6 - Mango pomelo sago)",
                        "豆腐花"
                    ],
                    "answerIndex": 1,
                    "explanation": "楊枝甘露 (joeng4 zi1 gam1 lou6) is the quintessential Hong Kong mango pomelo dessert."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東茶樓中腸粉系列（鮮蝦腸/叉燒腸/炸兩）與經典甜品（楊枝甘露）的特色，下列哪一項表述完全正確？",
                    "options": [
                        "腸粉是乾炒麵條的一種",
                        "楊枝甘露是一種熱的豬肉湯",
                        "腸粉講究粉皮透薄嫩滑；炸兩結合了腸粉與油條；楊枝甘露則是芒果、柚子和西米結合的消暑甜品 (Cheung fun is prized for silky translucence; zaa3 loeng5 wraps fried dough; joeng4 zi1 gam1 lou6 is iconic mango-sago-pomelo dessert)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately describes the textures and cultural identities of these dishes."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'steamed rice noodle rolls' in Cantonese (腸粉):",
                    "acceptedAnswers": [
                        "腸粉",
                        "coeng2fan2",
                        "coeng2 fan2",
                        "Coeng2 fan2",
                        "Coeng2fan2",
                        "肠粉"
                    ],
                    "explanation": "腸粉 (coeng2 fan2) means 'rice noodle rolls' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u9-l4": {
        "id": "hk-u9-l4",
        "unit": "hk-u9",
        "level": "A2",
        "objective": "Master the operational workflow of teahouse dining: ticking order cards (劃點心紙), dim sum size tiers (小中大特頂點), and checking out with service charge (加一服務費).",
        "prerequisites": [
            "hk-u9-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u9-l3"
            ]
        },
        "presentation": {
            "explanation": "喺現代同傳統廣東茶樓入面，點單同結算有一套特有嘅價格檔次系統！\n\n1. 點心紙與劃飛 (Ordering on the Dim Sum Card):\n- 坐低之後，枱上面會有一張**「點心紙 (dim2 sam1 zi2)」**。\n- 顧客用筆喺想食嘅點心格子度寫上數量，呢個動作叫做**「劃飛 (waak6 fei1)」**。\n\n2. 點心價格檔次 (Dim Sum Pricing Tiers):\n- 茶樓唔會喺每道點心後面標明單價，而係分為幾種固定等級：\n  - **小點 (siu2 dim2)**：Small / basic dim sum。\n  - **中點 (zung1 dim2)**：Medium tier。\n  - **大點 (daai6 dim2)**：Large tier (如普通蒸點)。\n  - **特點 (dak6 dim2)**：Special tier (如蝦餃、燒賣)。\n  - **頂點 / 超點 (ding2 dim2 / ciu1 dim2)**：Premium tier (如鮑汁點心、海鮮)。\n\n3. 結算與小費 (Settling the Bill):\n- **埋單 (maai4 daan1)**：Bill, please。\n- **加一服務費 (gaa1 jat1 fuk6 mou6 fai3)**：10% service charge (香港酒樓普遍徵收)。",
            "examples": [
                {
                    "target": "請畀多支原子筆我哋劃點心紙，唔該晒！",
                    "reading": "cing2 bei2 do1 zi1 jyun4 zi2 bat1 ngo5 dei6 waak6 dim2 sam1 zi2, m4 goi1 saai3!",
                    "translation": "Please give us a ballpoint pen to tick the dim sum order card, thank you very much!"
                },
                {
                    "target": "呢間酒樓星期一至五嘅早茶時段，大點、特點一律特價計中點。",
                    "reading": "ni1 gaan1 zau2 lau4 sing1 kei4 jat1 zi3 ng5 ge3 zou2 caa4 si4 dyun6, daai6 dim2, dak6 dim2 jat1 leot6 dak6 gaa3 gai3 zung1 dim2.",
                    "translation": "At this restaurant during weekday morning tea hours, large and special tiers are uniformly discounted to medium price."
                },
                {
                    "target": "服務員，呢張枱埋單，請問可唔可以用八達通或者信用卡畀錢呀？",
                    "reading": "fuk6 mou6 jyun4, ni1 zoeng1 toi2 maai4 daan1, cing2 man6 ho2 m4 ho2 ji5 jung6 baat3 daat6 tung1 waak6 ze2 seon3 jung3 kaat1 bei2 cin2 aa3?",
                    "translation": "Waiter, settle the bill for this table please; may I ask if we can pay by Octopus or credit card?"
                }
            ],
            "mnemonics": [
                "Billing Hierarchy: 小點(Small) -> 中點(Medium) -> 大點(Large) -> 特點(Special) -> 頂點(Top) -> 埋單加一(Bill +10%)!"
            ],
            "culturalNotes": [
                "Many Hong Kong teahouses offer substantial discounts («早茶/下午茶優惠») before 11 AM and between 2:00–4:30 PM, making Yum Cha an affordable luxury for retirees and office workers."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東茶樓用來讓顧客自行用筆勾選點心品項的點單菜單紙稱為：",
                    "options": [
                        "點心紙 (dim2 sam1 zi2 - Dim sum order sheet)",
                        "報紙",
                        "八達通"
                    ],
                    "answerIndex": 0,
                    "explanation": "點心紙 (dim2 sam1 zi2) is the paper order sheet on every teahouse table."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "香港茶樓結賬時普遍加收的「一成服務費（10% service charge）」，口語習慣稱為：",
                    "options": [
                        "加一 (gaa1 jat1 - Plus 10% service charge)",
                        "加二",
                        "減一"
                    ],
                    "answerIndex": 0,
                    "explanation": "加一 (gaa1 jat1) is the standard Hong Kong term for the 10% restaurant service charge."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東茶樓點單制度（點心紙劃飛）、價格分級（小/中/大/特/頂點）及結算（埋單加一），下列哪一項表述完全正確？",
                    "options": [
                        "茶樓點單完全不分價格檔次",
                        "顧客在「點心紙」上劃飛點單，點心依成本分為小點至頂點等檔次，結賬稱「埋單」，一般加收一成服務費「加一」 (Customers tick dim2 sam1 zi2 across size tiers from small to apex, bill settled with maai4 daan1 + 10% gaa1 jat1)",
                        "「埋單」在香港意思是把單據埋在泥土裏"
                    ],
                    "answerIndex": 1,
                    "explanation": "Masterfully details the economic mechanics and dining terminology of Cantonese teahouses."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'dim sum order sheet' in Cantonese (點心紙):",
                    "acceptedAnswers": [
                        "點心紙",
                        "dim2sam1zi2",
                        "dim2 sam1 zi2",
                        "Dim2 sam1 zi2",
                        "Dim2sam1zi2",
                        "点心纸"
                    ],
                    "explanation": "點心紙 (dim2 sam1 zi2) means 'dim sum order sheet' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u9-l5": {
        "id": "hk-u9-l5",
        "unit": "hk-u9",
        "level": "A2",
        "objective": "Synthesize all teahouse vocabulary, tea etiquette, the Four Kings, dim sum classification, and bill settlement in a full-length Sunday family Yum Cha dialogue.",
        "prerequisites": [
            "hk-u9-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u9-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢課綜合實戰篇，我哋將第九單元學到嘅所有飲茶詞彙、禮儀與對話融會貫通，演繹嶺南文化最著名嘅**「一盅兩件 (jat1 zung1 loeng5 gin6)」**生活真諦！\n\n1. 「一盅兩件」嘅文化哲學 (Philosophy of Jat Zung Loeng Gin):\n- 「一盅」指一盅蓋碗茶（或一壺好茶）。\n- 「兩件」指兩籠精緻點心（如一籠蝦餃、一籠叉燒包）。\n- 呢句俗語代表廣東人嘆茶、享受悠閒慢生活嘅最高境界。\n\n2. 第九單元實戰對話範例 (Unit 9 Master Teahouse Dialogue):\n- **部長**：‘早晨三位！今日想坐大堂定係搭枱呀？飲咩茶？’\n- **爸爸**：‘坐大堂靠窗位啦，唔該一壺熱普洱。’\n- **媽媽**：‘我哋劃咗點心紙喇：兩籠蝦餃、一籠燒賣、一碟鮮蝦腸粉同一碟脆皮炸兩。’\n- **部長**：‘收到！點心即叫即蒸，要等大約十分鐘。’\n- **爸爸**（為大家斟茶，眾人輕敲桌面行叩指禮）：‘嚟，飲杯熱普洱先，消滯暖胃！’\n- **兒子**：‘食完點心之後，可唔可以叫多兩碗楊枝甘露做甜品呀？’\n- **媽媽**：‘好呀，食飽之後爸爸埋單！’",
            "examples": [
                {
                    "target": "週末朝早同屋企人去茶樓嘆「一盅兩件」，係香港人最享受嘅天倫之樂。",
                    "reading": "zau1 mut6 ziu1 zou2 tung4 uk1 kei2 jan4 heoi3 caa4 lau4 taan3 jat1 zung1 loeng5 gin6, hai6 hoeng1 gong2 jan4 zeoi3 hoeng2 sau6 ge3 tin1 leon4 zi1 lok6.",
                    "translation": "Going to the teahouse with family on weekend mornings to enjoy 'one cup and two pieces' is Hong Kongers' most cherished family bonding joy."
                },
                {
                    "target": "呢間老牌酒家嘅點心即叫即蒸，熱氣騰騰，水準幾十年都冇變過。",
                    "reading": "ni1 gaan1 lou5 paai4 zau2 gaa1 ge3 dim2 sam1 zik1 giu3 zik1 zing1, jit6 hei3 tang4 tang4, seoi2 zeon2 gei2 sap6 nin4 dou1 mou5 bin3 gwo3.",
                    "translation": "The dim sum at this heritage teahouse is steamed fresh to order, steaming hot, with standards unchanged for decades."
                },
                {
                    "target": "唔該部長，我哋呢張枱食完喇，幫我哋計數埋單啦。",
                    "reading": "m4 goi1 bou6 zoeng2, ngo5 dei6 ni1 zoeng1 toi2 sik6 jyun4 laa3, bong1 ngo5 dei6 gai3 sou3 maai4 daan1 laa1.",
                    "translation": "Excuse me captain, our table has finished eating, please calculate and settle the bill for us."
                }
            ],
            "mnemonics": [
                "Yum Cha Mastery: 一盅兩件(One cup two pieces) -> 嘆茶傾偈(Sip tea chat) -> 叩指謝茶(Tap fingers) -> 開心埋單(Pay bill)!"
            ],
            "culturalNotes": [
                "«嘆茶» (taan3 caa4) uses the verb «嘆» (to relish / savor leisurely), encapsulating the laid-back joy of reading the morning newspaper and savoring dim sum with loved ones."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話俗語中形容飲茶享受悠閒生活、點一壺茶配兩樣點心的經典名句是：",
                    "options": [
                        "一盅兩件 (jat1 zung1 loeng5 gin6 - One tea cup and two dim sum pieces)",
                        "大魚大肉",
                        "一日三餐"
                    ],
                    "answerIndex": 0,
                    "explanation": "一盅兩件 (jat1 zung1 loeng5 gin6) is the timeless cultural idiom for savoring dim sum and tea."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東人形容「悠閒愜意地品味享受早茶時光」所用的地道動詞是：",
                    "options": [
                        "嘆茶 (taan3 caa4 - Leisurely relish tea)",
                        "趕茶",
                        "吞茶"
                    ],
                    "answerIndex": 0,
                    "explanation": "嘆 (taan3) means to relish, savor, or enjoy leisurely."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東第九單元「飲茶同廣東飲食文化」的整體精神、核心菜式（四大天王/腸粉/炸兩）及社會生活意涵，下列哪一項總括完全正確？",
                    "options": [
                        "「飲茶」以「一盅兩件」為哲學代表，融匯了普洱名茶、四大天王點心、叩指禮儀及嘆茶文化，是廣東人家庭團聚與社交聯誼的核心紐帶 (Yum cha embodies the 'one tea, two dim sum' philosophy, linking fine tea, classic dim sum, table etiquette, and familial connection)",
                        "廣東飲茶只是為了解渴，沒有任何社交功能",
                        "茶樓裏不允許家庭聚會"
                    ],
                    "answerIndex": 0,
                    "explanation": "Masterfully synthesizes the culinary, sociological, and linguistic dimensions of Cantonese teahouse dining."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi phrase for 'one tea cup and two dim sum pieces / classic teahouse dining' in Cantonese (一盅兩件):",
                    "acceptedAnswers": [
                        "一盅兩件",
                        "jat1zung1loeng5gin6",
                        "jat1 zung1 loeng5 gin6",
                        "Jat1 zung1 loeng5 gin6",
                        "Jat1zung1loeng5gin6",
                        "一盅两件"
                    ],
                    "explanation": "一盅兩件 (jat1 zung1 loeng5 gin6) means 'one tea cup and two dim sum pieces' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u10-l1": {
        "id": "hk-u10-l1",
        "unit": "hk-u10",
        "level": "A2",
        "objective": "Master market price inquiries (幾多錢一斤), traditional Cantonese weight units (斤, 兩, 磅), and currency units (蚊, 毫子).",
        "prerequisites": [
            "hk-u9-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u9-l5"
            ]
        },
        "presentation": {
            "explanation": "去香港或廣州嘅傳統「街市 (gaai1 si5)」買餸，第一步係要學識問價錢同睇懂傳統重量單位！\n\n1. 問價句式 (Price Inquiry Patterns):\n- **「請問……幾多錢一斤呀？」** (How much is ... per catty?)\n- **「呢啲……點樣賣呀？」** (How are these ... sold?)\n- **「幾多蚊一磅呀？」** (How many dollars per pound?)\n\n2. 嶺南傳統重量單位 (Traditional Weight Units):\n- **斤 (gan1)**：Catty（廣東/香港司馬斤，1斤 = 16兩 = 604.8克，俗語話「半斤八兩」）。\n- **兩 (loeng2)**：Tael（1兩 = 約37.8克，常用於中藥材、海味及貴價海鮮）。\n- **磅 (bong6)**：Pound（香港受英制影響，水果及洋貨多以磅計，1磅 = 453.6克）。\n- **蚊 (man1)**：港幣「元」嘅口語（例如：十蚊 = 10元）。",
            "examples": [
                {
                    "target": "老細，請問今日啲菜心幾多錢一斤呀？",
                    "reading": "lou5 sai3, cing2 man6 gam1 jat6 di1 coi3 sam1 gei2 do1 cin2 jat1 gan1 aa3?",
                    "translation": "Boss, may I ask how much per catty is the choy sum today?"
                },
                {
                    "target": "呢啲新鮮大花蛤三十蚊一斤，買兩斤送多兩條蔥畀你！",
                    "reading": "ni1 di1 san1 sin1 daai6 faa1 gap3 saam1 sap6 man1 jat1 gan1, maai5 loeng5 gan1 sung3 do1 loeng5 tiu4 cung1 bei2 nei5!",
                    "translation": "These fresh big clams are thirty dollars per catty; buy two catties and I'll give you a couple stalks of green onions for free!"
                },
                {
                    "target": "唔該幫我秤兩斤富士蘋果同埋一磅進口車厘子。",
                    "reading": "m4 goi1 bong1 ngo5 cing3 loeng5 gan1 fu3 si6 ping4 gwo2 tung4 maai4 jat1 bong6 zeon3 hau2 ce1 lei4 zi2.",
                    "translation": "Please help me weigh two catties of Fuji apples and one pound of imported cherries."
                }
            ],
            "mnemonics": [
                "Market Weighing Formula: 物品(Goods) + 幾多錢(How much) + 量詞(斤/磅) = 問價利器!"
            ],
            "culturalNotes": [
                "The famous Cantonese idiom «半斤八兩» (bun3 gan1 baat3 loeng2 - half catty is eight taels) reflects the ancient 16-tael system, meaning two things are completely equal or six of one and half a dozen of the other."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺街市菜檔詢問檔主「菜心多少錢一斤」，最地道標準的廣東話句子是：",
                    "options": [
                        "菜心幾多錢一斤呀？ (coi3 sam1 gei2 do1 cin2 jat1 gan1 aa3?)",
                        "菜心多少錢一斤？",
                        "菜心賣多少？"
                    ],
                    "answerIndex": 0,
                    "explanation": "幾多錢一斤呀 is the standard Cantonese price inquiry for weighed items."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東傳統俗語「半斤八兩」體現了香港傳統司馬斤中「一斤等於多少兩」的計量標準：",
                    "options": [
                        "十兩",
                        "十六兩 (16 taels per catty)",
                        "八兩"
                    ],
                    "answerIndex": 1,
                    "explanation": "1 司馬斤 = 16 兩 (hence 半斤 = 8兩)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東傳統街市問價句型（幾多錢一斤）與度量衡單位（斤/兩/磅/蚊），下列哪一項表述完全正確？",
                    "options": [
                        "街市買餸只能用英文問價",
                        "問價標準句型為「幾多錢一斤/磅」；香港口語以「蚊」表元，計重沿用一斤十六兩之司馬斤制與英制磅 (Standard inquiry is gei2 do1 cin2 jat1 gan1; uses man1 for currency, 16-tael catties & pounds)",
                        "一斤在廣東話中等於一百兩"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately frames the linguistic and metric realities of Cantonese wet markets."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 5-character Hanzi phrase for 'how much per catty?' in Cantonese (幾多錢一斤):",
                    "acceptedAnswers": [
                        "幾多錢一斤",
                        "gei2do1cin2jat1gan1",
                        "gei2 do1 cin2 jat1 gan1",
                        "Gei2 do1 cin2 jat1 gan1",
                        "Gei2do1cin2jat1gan1",
                        "几多钱一斤"
                    ],
                    "explanation": "幾多錢一斤 (gei2 do1 cin2 jat1 gan1) means 'how much per catty?' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u10-l2": {
        "id": "hk-u10-l2",
        "unit": "hk-u10",
        "level": "A2",
        "objective": "Master polite bargaining techniques, discount requests (平啲啦, 計平少少), and rounding sums (計齊頭).",
        "prerequisites": [
            "hk-u10-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u10-l1"
            ]
        },
        "presentation": {
            "explanation": "喺街市或者排檔買嘢，適度講價唔單止可以慳錢，仲係一種充滿人情味嘅互動！\n\n1. 講價必備實用句式 (Essential Bargaining Phrases):\n- **「老細，平啲啦！」** (Boss, make it a bit cheaper!)\n- **「可唔可以計平少少呀？」** (Can you calculate it a bit cheaper?)\n- **「我買咁多，算平啲啦！」** (I'm buying so much, give me a discount!)\n- **「計齊頭五十蚊得唔得呀？」** (Can we round it to an even 50 dollars?)\n\n2. 檔主常用回應話術 (Vendor Responses):\n- **「真係好抵喇，蝕本賣畀你㗎！」** (It's already a bargain, selling at a loss to you!)\n- **「好啦好啦，算你平兩蚊啦！」** (Alright alright, I'll take off two dollars for you!)\n- **「送幾條蔥同兩粒蒜頭畀你啦！」** (I'll throw in some scallions and two cloves of garlic for you!)",
            "examples": [
                {
                    "target": "老細，我買咗咁大條石斑，計齊頭一百八十蚊啦，平啲啦！",
                    "reading": "lou5 sai3, ngo5 maai5 zo2 gam3 daai6 tiu4 sek6 baan1, gai3 cai4 tau4 jat1 baak3 baat3 sap6 man1 laa1, peng4 di1 laa1!",
                    "translation": "Boss, I bought such a big grouper, round it to an even 180 dollars, make it cheaper!"
                },
                {
                    "target": "呢件衫質地雖然好，但三十蚊真係貴咗少少，二十五蚊賣唔賣呀？",
                    "reading": "ni1 gin6 saam1 zat1 dei6 seoi1 jin4 hou2, daan6 saam1 sap6 man1 zan1 hai6 gwai3 zo2 siu2 siu2, ji6 sap6 ng5 man1 maai6 m4 maai6 aa3?",
                    "translation": "The material of this shirt is good, but thirty dollars is really a bit expensive; will you sell it for twenty-five?"
                },
                {
                    "target": "行過路過唔好錯過，全場大減價，買一送一，好抵買㗎！",
                    "reading": "haang4 gwo3 lou6 gwo3 m4 hou2 co3 gwo3, cyun4 coeng4 daai6 gaam2 gaa3, maai5 jat1 sung3 jat1, hou2 dai2 maai5 gaa3!",
                    "translation": "Passing by don't miss out, whole store big sale, buy one get one free, great bargain!"
                }
            ],
            "mnemonics": [
                "Bargaining Step: 讚品質(Good item) -> 話貴少少(Bit pricey) -> 平啲啦(Cheaper please) -> 計齊頭(Round figure)!"
            ],
            "culturalNotes": [
                "In Hong Kong street stalls («女人街 Ladies' Market» / «鴨寮街 Apliu Street»), lighthearted bargaining is expected; maintaining a polite smile with «平啲啦靚仔/靚女» often wins the best discount."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "向檔主請求「算便宜一點 / 便宜一點啦」，最常用地道的廣東話短語是：",
                    "options": [
                        "貴啲啦",
                        "平啲啦 (peng4 di1 laa1 - Make it a bit cheaper)",
                        "多啲啦"
                    ],
                    "answerIndex": 1,
                    "explanation": "平啲啦 (peng4 di1 laa1) is the quintessential Cantonese phrase for asking for a lower price."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "買菜總計52元，向老闆提議「抹去零頭算整數50元」，廣東話稱作：",
                    "options": [
                        "計齊頭五十蚊 (gai3 cai4 tau4 ng5 sap6 man1 - Round to an even 50 dollars)",
                        "計多啲",
                        "唔使找錢"
                    ],
                    "answerIndex": 0,
                    "explanation": "計齊頭 (gai3 cai4 tau4) means to round off the odd change to a clean integer."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中討價還價的核心用語（平啲啦、計齊頭、好抵買），下列哪一項表述完全正確？",
                    "options": [
                        "「平啲啦」用來要求便宜一點，「計齊頭」指湊整抹去零頭，「抵買」表示性價比高划算 (peng4 di1 laa1 requests discounts, gai3 cai4 tau4 rounds to even numbers, dai2 maai5 means great value)",
                        "「平啲啦」在廣東話中表示叫老闆快點走",
                        "街市討價還價必須嚴肅爭吵"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately explains the semantics and practical tone of bargaining."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'make it cheaper / a bit cheaper' in Cantonese (平啲啦):",
                    "acceptedAnswers": [
                        "平啲啦",
                        "peng4di1laa1",
                        "peng4 di1 laa1",
                        "Peng4 di1 laa1",
                        "Peng4di1laa1",
                        "平点啦",
                        "平啲喇"
                    ],
                    "explanation": "平啲啦 (peng4 di1 laa1) means 'make it cheaper' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u10-l3": {
        "id": "hk-u10-l3",
        "unit": "hk-u10",
        "level": "A2",
        "objective": "Master vocabulary for selecting groceries and evaluating quality: 游水海鮮 (live seafood), 新鮮 (fresh), 靚 (high-grade), and 熟/爛.",
        "prerequisites": [
            "hk-u10-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u10-l2"
            ]
        },
        "presentation": {
            "explanation": "廣東人對食材嘅「鮮味」有極高要求，買餸嗰陣點樣形容品質好壞係必備功夫！\n\n1. 食材品質與新鮮度詞彙 (Produce Quality Lexicon):\n- **游水海鮮 (jau4 seoi2 hoi2 sin1)**：Live swimming seafood（活魚、活蝦、活蟹，代表最頂級新鮮度）。\n- **好靚 (hou2 leng3)**：Very good quality / gorgeous produce（廣東話形容蔬菜肉類新鮮靚麗）。\n- **好甜 (hou2 tim4)**：Very sweet (如水果、蔬菜)。\n- **啱啱熟 (ngaam1 ngaam1 suk6)**：Just ripe / perfectly mature。\n- **爛 (laan6)**：Bruised / spoiled / rotten。\n\n2. 挑選與叮囑句型 (Selection Instructions):\n- **「老細，幫我揀幾條最靚嘅青瓜。」** (Boss, help me pick a few of the best cucumbers.)\n- **「啲魚生猛唔生猛呀？」** (Are the fish lively and fresh?)\n- **「千祈唔好畀啲爛嘅我喎！」** (Make sure not to give me any bruised ones!)",
            "examples": [
                {
                    "target": "呢缸蝦全部都係游水海鮮，隻隻都好生猛跳跳紮！",
                    "reading": "ni1 gong1 haa1 cyun4 bou6 dou1 hai6 jau4 seoi2 hoi2 sin1, zek3 zek3 dou1 hou2 sang1 maang5 tiu3 tiu3 zaat3!",
                    "translation": "This tank of shrimp are all live swimming seafood, every single one is very lively and leaping around!"
                },
                {
                    "target": "今日啲番茄好靚好紅，用嚟滾番茄牛肉湯一定好鮮甜。",
                    "reading": "gam1 jat6 di1 faan1 ke2 hou2 leng3 hou2 hung4, jung6 lei4 gwan2 faan1 ke2 ngau4 juk6 tong1 jat1 ding6 hou2 sin1 tim4.",
                    "translation": "The tomatoes today are very gorgeous and red; boiling tomato beef soup with them will definitely be very fresh and sweet."
                },
                {
                    "target": "呢批芒果啱啱熟，返去擺多一日就可以切嚟食。",
                    "reading": "ni1 pai1 mong1 gwo2 ngaam1 ngaam1 suk6, faan1 heoi3 baai2 do1 jat1 jat6 zau6 ho2 ji5 cit3 lei4 sik6.",
                    "translation": "This batch of mangoes is just ripe; leave them for one more day at home and you can slice them to eat."
                }
            ],
            "mnemonics": [
                "Freshness Checklist: 游水(Swimming lively) -> 生猛(Vigorous) -> 靚皮(Pretty skin) -> 鮮甜(Fresh & sweet)!"
            ],
            "culturalNotes": [
                "«游水» (swimming) specifically denotes live fish/crabs kept in oxygenated tanks at markets and restaurants, a hallmark of Cantonese cuisine's obsession with pristine freshness."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東人形容海鮮檔水箱中鮮活活跳、最頂級新鮮的海鮮，專用詞彙是：",
                    "options": [
                        "雪藏海鮮",
                        "游水海鮮 (jau4 seoi2 hoi2 sin1 - Live swimming seafood)",
                        "冰鮮海鮮"
                    ],
                    "answerIndex": 1,
                    "explanation": "游水海鮮 (jau4 seoi2 hoi2 sin1) specifies lively swimming seafood."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在菜市場誇讚蔬菜新鮮優質，廣東話最常用的精煉形容詞是：",
                    "options": [
                        "好靚 (hou2 leng3 - Very good quality / fresh / nice)",
                        "好長",
                        "好大聲"
                    ],
                    "answerIndex": 0,
                    "explanation": "好靚 (hou2 leng3) is ubiquitously used to praise the visual appeal and quality of fresh food."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東飲食文化中評價食材品質與新鮮度（游水海鮮、生猛、好靚、啱啱熟）的用語，下列哪一項表述完全正確？",
                    "options": [
                        "廣東人買海鮮只喜歡冰凍很久的死魚",
                        "「生猛」在廣東話中是凶猛野獸的意思",
                        "「游水海鮮」指活生生養在水箱的海鮮，「生猛」形容活力充沛，「靚」形容食材品質上乘 (jau4 seoi2 hoi2 sin1 means live swimming seafood, sang1 maang5 means lively, leng3 means top quality)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately articulates the vocabulary of freshness in Cantonese food shopping."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi phrase for 'live swimming seafood' in Cantonese (游水海鮮):",
                    "acceptedAnswers": [
                        "游水海鮮",
                        "jau4seoi2hoi2sin1",
                        "jau4 seoi2 hoi2 sin1",
                        "Jau4 seoi2 hoi2 sin1",
                        "Jau4seoi2hoi2sin1",
                        "游水海鲜"
                    ],
                    "explanation": "游水海鮮 (jau4 seoi2 hoi2 sin1) means 'live swimming seafood' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u10-l4": {
        "id": "hk-u10-l4",
        "unit": "hk-u10",
        "level": "A2",
        "objective": "Master payment transactions: cash counting, giving change (找返 / 找錢), small change (散銀), and electronic payments (八達通, 電子支付).",
        "prerequisites": [
            "hk-u10-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u10-l3"
            ]
        },
        "presentation": {
            "explanation": "買完嘢結算嗰陣，廣東話有一套清晰地道嘅收銀找續詞彙！\n\n1. 找續與現金用語 (Cash & Change Terminology):\n- **畀錢 (bei2 cin2)**：Pay money。\n- **找錢 (zaau2 cin2)**：Give change。\n- **找返……蚊 (zaau2 faan1 ... man1)**：Give back ... dollars in change (例如：收你一百蚊，找返三十蚊)。\n- **散銀 / 散紙 (saan2 ngan2 / saan2 zi2)**：Coins / small bills。\n- **唔該畀散紙啦 (m4 goi1 bei2 saan2 zi2 laa1)**：Please give small change。\n\n2. 電子支付與問法 (Electronic Payment Options):\n- **「請問收唔收八達通呀？」** (Do you accept Octopus card?)\n- **「我用手機掃碼畀錢得唔得呀？」** (Can I scan QR code with my phone to pay?)\n- **「可唔可以畀張單我呀？」** (Could you give me a receipt?)",
            "examples": [
                {
                    "target": "收你五百蚊大紙，扣除一百三十五蚊，找返三百六十五蚊畀你。",
                    "reading": "sau1 nei5 ng5 baak3 man1 daai6 zi2, kau3 ceoi4 jat1 baak3 saam1 sap6 ng5 man1, zaau2 faan1 saam1 baak3 luk6 sap6 ng5 man1 bei2 nei5.",
                    "translation": "Received your 500-dollar big bill, deducting 135 dollars, here is 365 dollars back in change."
                },
                {
                    "target": "老細，我冇咁多散銀，畀張一百蚊你找得唔得呀？",
                    "reading": "lou5 sai3, ngo5 mou5 gam3 do1 saan2 ngan2, bei2 zoeng1 jat1 baak3 man1 nei5 zaau2 dak1 m4 dak1 aa3?",
                    "translation": "Boss, I don't have so much small change, can I give you a 100-dollar bill to make change?"
                },
                {
                    "target": "而家香港街市好多檔口都支援八達通同手機二維碼付款，非常方便。",
                    "reading": "ji4 gaa1 hoeng1 gong2 gaai1 si5 hou2 do1 dong3 hau2 dou1 zi1 wun4 baat3 daat6 tung1 tung4 sau2 gei1 ji6 wai4 maa5 fuk6 fun2, fei1 soeng4 fong1 bin6.",
                    "translation": "Nowadays many stalls in Hong Kong wet markets support Octopus and mobile QR code payments, which is very convenient."
                }
            ],
            "mnemonics": [
                "Cash Transaction Flow: 收你大紙(Received big note) -> 找返散銀(Give change back) -> 嘟八達通(Beep Octopus)!"
            ],
            "culturalNotes": [
                "«嘟八達通» (dut1 baat3 daat6 tung1) uses the onomatopoeia «嘟» (dut1) for the signature beep of contactless Octopus readers ubiquitous across Hong Kong."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "收銀員收取你的一百元鈔票後，說「找返四十蚊畀你」，其中「找返」的意思是：",
                    "options": [
                        "找回 / 退回零錢 (Give back in change)",
                        "借走",
                        "罰款"
                    ],
                    "answerIndex": 0,
                    "explanation": "找返 (zaau2 faan1) means 'give back in change'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在香港商店付款時，想要用非接觸式八達通卡支付，最地道的詢問是：",
                    "options": [
                        "可唔可以嘟八達通呀？ (ho2 m4 ho2 ji5 dut1 baat3 daat6 tung1 aa3?)",
                        "可以刷八達通嗎？",
                        "八達通能用嗎？"
                    ],
                    "answerIndex": 0,
                    "explanation": "嘟八達通 uses the authentic colloquial verb 嘟 (dut1) for tapping the smart card."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中交易結算、找續零錢（畀錢/找返/散銀）及電子支付（八達通）的用語，下列哪一項表述完全正確？",
                    "options": [
                        "廣東話買東西不能找錢",
                        "「畀錢」指付款，「找返」指找回零錢，「散銀」指硬幣零錢，非接觸式支付口語常用「嘟八達通」 (bei2 cin2 is pay, zaau2 faan1 is return change, saan2 ngan2 is coins, dut1 baat3 daat6 tung1 is tapping Octopus)",
                        "八達通只能用來打電話"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately details colloquial transaction verbs and payment habits."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'give back in change / return change' in Cantonese (找返):",
                    "acceptedAnswers": [
                        "找返",
                        "zaau2faan1",
                        "zaau2 faan1",
                        "Zaau2 faan1",
                        "Zaau2faan1",
                        "找回"
                    ],
                    "explanation": "找返 (zaau2 faan1) means 'give back in change' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u10-l5": {
        "id": "hk-u10-l5",
        "unit": "hk-u10",
        "level": "A2",
        "objective": "Synthesize all market inquiry, quality assessment, bargaining, and checkout vocabulary in a full-length wet market shopping dialogue.",
        "prerequisites": [
            "hk-u10-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u10-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢課綜合實戰篇，我哋將第十單元學到嘅所有街市買餸詞彙（幾多錢一斤、游水海鮮、平啲啦、計齊頭、找返）融會貫通，演繹嶺南最具市井煙火氣嘅街市買餸全過程！\n\n1. 街市買餸必備詞彙庫 (Wet Market Shopping Lexicon):\n- **買餸 (maai5 sung3)**：Buy groceries / produce for home cooking。\n- **菜心 (coi3 sam1)**：Choy sum。\n- **海蝦 (hoi2 haa1)**：Sea prawns。\n- **老細 (lou5 sai3)**：Boss / stall owner。\n- **平啲啦 (peng4 di1 laa1)**：Make it cheaper。\n- **搭棵蔥 (daap3 fo1 cung1)**：Throw in a stalk of scallion for free。\n\n2. 第十單元實戰對話範例 (Unit 10 Master Wet Market Dialogue):\n- **買家陳太**：‘老細，今日啲菜心好靚喎，幾多錢一斤呀？’\n- **菜檔檔主**：‘早晨陳太！十二蚊一斤，買兩斤算你二十蚊啦！’\n- **買家陳太**：‘好，秤兩斤，順便搭多棵蔥畀我啦！’\n- **海鮮檔檔主**：‘陳太，睇下啲游水花竹蝦，隻隻跳跳紮，四十蚊一斤咋！’\n- **買家陳太**：‘幫我揀斤半，計齊頭六十蚊啦，老細平啲啦！’\n- **海鮮檔檔主**：‘得！收你一百蚊，找返四十蚊畀你，多謝晒！’",
            "examples": [
                {
                    "target": "每日下晝四五點，街市入面擠滿咗嚟買餸煮晚飯嘅街坊，非常熱鬧。",
                    "reading": "mui5 jat6 haa6 ng5 sei3 ng5 dim2, gaai1 si5 jap6 min6 zai1 mun2 zo2 lei4 maai5 sung3 zyu2 maan5 faan6 ge3 gaai1 fong1, fei1 soeng4 jit6 naau6.",
                    "translation": "Every afternoon at 4 or 5 o'clock, the wet market is crowded with neighbors buying produce to cook dinner, very lively."
                },
                {
                    "target": "我今日喺街市買咗一斤菜心、半斤牛肉同埋兩條游水紅衫魚。",
                    "reading": "ngo5 gam1 jat6 hai2 gaai1 si5 maai5 zo2 jat1 gan1 coi3 sam1, bun3 gan1 ngau4 juk6 tung4 maai4 loeng5 tiu4 jau4 seoi2 hung4 saam1 jyu4.",
                    "translation": "Today I bought a catty of choy sum, half a catty of beef, and two swimming golden threadfin breams at the market."
                },
                {
                    "target": "檔主好豪爽，不但計平咗五蚊，仲搭多兩塊薑同兩條蔥畀我。",
                    "reading": "dong3 zyu2 hou2 hou4 song2, bat1 daan6 gai3 peng4 zo2 ng5 man1, zung6 daap3 do1 loeng5 faai3 goeng1 tung4 loeng5 tiu4 cung1 bei2 ngo5.",
                    "translation": "The stall owner was very generous; not only discounted five dollars, but also threw in two slices of ginger and two scallions for me."
                }
            ],
            "mnemonics": [
                "Market Run: 問價(幾多錢一斤) -> 揀靚(游水生猛) -> 講價(平啲啦) -> 找續(找返收好)!"
            ],
            "culturalNotes": [
                "«買餸搭蔥» (asking for free scallions with vegetables) is a classic Cantonese social art; stall owners gladly offer free ginger/scallions/coriander («薑蔥芫荽») to regular customers («熟客»)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "廣東話中「去菜市場購買肉類蔬菜等食材回家做飯」的專用說法是：",
                    "options": [
                        "街市買餸 (gaai1 si5 maai5 sung3 - Buying groceries at the wet market)",
                        "去街買飯",
                        "超市食飯"
                    ],
                    "answerIndex": 0,
                    "explanation": "街市買餸 (gaai1 si5 maai5 sung3) is the classic term for market grocery shopping."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在廣東街市買菜時，檔主為了維繫熟客常常主動贈送少許蔥薑，這種文化現象稱為：",
                    "options": [
                        "搭蔥 / 送蔥 (daap3 cung1 - Throwing in free scallions)",
                        "扣蔥",
                        "收蔥費"
                    ],
                    "answerIndex": 0,
                    "explanation": "搭蔥 (daap3 cung1) is the time-honored gesture of warmth and community in Cantonese markets."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東第十單元「買嘢同街市討價還價」的綜合應用（問價、選材、講價、找續與搭蔥），下列哪一項總括完全正確？",
                    "options": [
                        "「街市買餸」融匯了問價（幾多錢一斤）、品相挑選（游水生猛）、講價社交（平啲啦/計齊頭）與找續搭蔥，是嶺南市井文化最生動的縮影 (Market shopping unites price inquiry, produce selection, friendly bargaining, and free scallions, reflecting vibrant grassroots culture)",
                        "街市買餸不允許任何交談",
                        "「買餸」在廣東話中指買衣服"
                    ],
                    "answerIndex": 0,
                    "explanation": "Masterfully summarizes the conversational lexicon and grassroots culture of Cantonese wet markets."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi phrase for 'buying groceries at the wet market' in Cantonese (街市買餸):",
                    "acceptedAnswers": [
                        "街市買餸",
                        "gaai1si5maai5sung3",
                        "gaai1 si5 maai5 sung3",
                        "Gaai1 si5 maai5 sung3",
                        "Gaai1si5maai5sung3",
                        "街市买餸",
                        "街市買菜"
                    ],
                    "explanation": "街市買餸 (gaai1 si5 maai5 sung3) means 'buying groceries at the wet market' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u11-l1": {
        "id": "hk-u11-l1",
        "unit": "hk-u11",
        "level": "B1",
        "objective": "Master directional coordinates (前面, 後面, 左手邊, 右手邊, 對面, 隔離) and navigational motion verbs (直行, 轉左, 轉右).",
        "prerequisites": [
            "hk-u10-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u10-l5"
            ]
        },
        "presentation": {
            "explanation": "喺香港或廣州等嶺南大都市問路指路，掌握地道嘅方位詞同轉彎動作係最基礎嘅導航技能！\n\n1. 核心空間方位詞 (Spatial Coordinate Nouns):\n- **前面 (cin4 min6)**：In front / ahead。\n- **後面 (hau6 min6)**：Behind。\n- **左手邊 (zo2 sau2 bin1)**：Left-hand side。\n- **右手邊 (jau6 sau2 bin1)**：Right-hand side。\n- **對面 (deoi3 min6)**：Opposite / across the road。\n- **隔離 (gaak3 lei4)**：Next door / right beside。\n\n2. 轉彎與直行動態詞 (Navigation Action Verbs):\n- **一直行 / 直行 (jik6 haang4 / zik6 haang4)**：Walk straight ahead。\n- **轉左 / 摱左 (zyun3 zo2 / maan1 zo2)**：Turn left。\n- **轉右 / 摱右 (zyun3 jau6 / maan1 jau6)**：Turn right。\n- **過馬路 (gwo3 maa5 lou6)**：Cross the street / zebra crossing。",
            "examples": [
                {
                    "target": "沿住呢條街直行到十字路口，右手邊嗰棟紅色大廈就係圖書館。",
                    "reading": "jyun4 zyu6 ni1 tiu4 gaai1 zik6 haang4 dou3 sap6 zi6 lou6 hau2, jau6 sau2 bin1 go2 dung6 hung4 sik1 daai6 haa6 zau6 hai6 tou4 syu1 gun2.",
                    "translation": "Walk straight along this street to the crossroad; that red building on the right-hand side is the library."
                },
                {
                    "target": "間茶餐廳喺便利店隔離，過咗條斑馬線對面就見到。",
                    "reading": "gaan1 caa4 caan1 teng1 hai2 bin6 lei6 dim3 gaak3 lei4, gwo3 zo2 tiu4 baan1 maa5 sin3 deoi3 min6 zau6 gin3 dou2.",
                    "translation": "The cha chaan teng is next to the convenience store; you will see it right opposite after crossing the zebra crossing."
                },
                {
                    "target": "行到前邊個商場路口轉左，再行兩分鐘就到港鐵站出入口。",
                    "reading": "haang4 dou3 cin4 bin1 go3 soeng1 coeng4 lou6 hau2 zyun3 zo2, zoi3 haang4 loeng5 fan1 zung1 zau6 dou3 gong2 tit3 zaam6 ceot1 jap6 hau2.",
                    "translation": "Walk to the mall intersection ahead and turn left, then walk two more minutes to arrive at the MTR station entrance."
                }
            ],
            "mnemonics": [
                "Direction Coordinates: 直行(Go straight) -> 轉左/轉右(Turn L/R) -> 隔離(Next door) -> 對面(Opposite)!"
            ],
            "culturalNotes": [
                "«隔離» (gaak3 lei4) literally means 'separated by a partition' and colloquially signifies 'neighboring / right next door', as in «隔離屋» (the house next door) and «隔離位» (the adjacent seat)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "向遊客指引「沿這條街直走，然後在路口向右轉」，地道廣東話應說：",
                    "options": [
                        "沿住呢條街直行，喺路口轉右 (jyun4 zyu6 ni1 tiu4 gaai1 zik6 haang4, hai2 lou6 hau2 zyun3 jau6)",
                        "沿這條街直走，路口向右",
                        "向右走直路"
                    ],
                    "answerIndex": 0,
                    "explanation": "直行 (go straight) and 轉右 (turn right) are the foundational directional commands."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "廣東話中表示「隔壁 / 緊挨著的旁邊」，最常用的地道詞彙是：",
                    "options": [
                        "隔離 (gaak3 lei4 - Next door / beside)",
                        "天邊",
                        "地庫"
                    ],
                    "answerIndex": 0,
                    "explanation": "隔離 (gaak3 lei4) means next door / neighboring / adjacent."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話中方位坐標（左手邊/右手邊/對面/隔離）及導航動詞（直行/轉左/轉右），下列哪一項表述完全正確？",
                    "options": [
                        "「隔離」指隔壁鄰近，「對面」指街對面，指引方向使用「直行」與「轉左/轉右」 (gaak3 lei4 is next door, deoi3 min6 is opposite, navigation uses zik6 haang4 and zyun3 zo2/jau6)",
                        "「轉左」在廣東話中是往後退的意思",
                        "「隔離」在廣東話中只能指被警察逮捕"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately frames spatial semantics and navigation commands in Cantonese."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'right-hand side' in Cantonese (右手邊):",
                    "acceptedAnswers": [
                        "右手邊",
                        "jau6sau2bin1",
                        "jau6 sau2 bin1",
                        "Jau6 sau2 bin1",
                        "Jau6sau2bin1",
                        "右手边"
                    ],
                    "explanation": "右手邊 (jau6 sau2 bin1) means 'right-hand side' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u11-l2": {
        "id": "hk-u11-l2",
        "unit": "hk-u11",
        "level": "B1",
        "objective": "Master MTR and rail transit vocabulary: boarding (搭港鐵), line transfers (轉綫), platforms (月台), and public safety announcements (請勿靠近車門).",
        "prerequisites": [
            "hk-u11-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u11-l1"
            ]
        },
        "presentation": {
            "explanation": "港鐵（MTR）係香港市民最主要嘅交通動脈，每日穿梭港九新界，其乘車術語同廣播極具特色！\n\n1. 港鐵系統關鍵術語 (MTR System Terminology):\n- **搭港鐵 / 搭地鐵 (daap3 gong2 tit3 / daap3 dei6 tit3)**：Ride the MTR / subway。\n- **轉綫 (zyun3 sin3)**：Transfer rail lines（如：喺金鐘站轉港島綫）。\n- **幾號月台 (gei2 hou6 jyut6 toi4)**：Which platform number (如：1號月台往柴灣)。\n- **出閘 / 入閘 (ceot1 zaap6 / jap6 zaap6)**：Tap out / tap in at fare gates。\n- **A/B/C/D 出口 (ceot1 hau2)**：Station exits。\n\n2. 港鐵經典廣播 (Iconic MTR Trilingual Announcements):\n- **「下一站，金鐘。乘客可以轉乘港島綫、荃灣綫……」** (Next station, Admiralty...)\n- **「請勿靠近車門 (cing2 mat6 kaau3 gan6 ce1 mun4) / 嘟嘟嘟——」** (Please stand clear of the train doors)！",
            "examples": [
                {
                    "target": "如果要去銅鑼灣，我哋要喺金鐘站轉港島綫往柴灣方向嘅列車。",
                    "reading": "jyu4 gwo2 jiu3 heoi3 tung4 lo4 waan1, ngo5 dei6 jiu3 hai2 gam1 zung1 zaam6 zyun3 sin3 gong2 dou2 sin3 wong5 caai4 waan1 fong1 hoeng3 ge3 lit6 ce1.",
                    "translation": "If we want to go to Causeway Bay, we need to transfer to the Island Line toward Chai Wan at Admiralty station."
                },
                {
                    "target": "請問中環站嘅D1出口係咪最快去到蘭桂坊呀？",
                    "reading": "cing2 man6 zung1 waan4 zaam6 ge3 D1 ceot1 hau2 hai6 mai6 zeoi3 faai3 heoi3 dou3 laan4 gwai3 fong1 aa3?",
                    "translation": "May I ask if Central station Exit D1 is the fastest way to get to Lan Kwai Fong?"
                },
                {
                    "target": "入閘嗰陣記得拎定八達通出嚟，嘟一聲就開閘。",
                    "reading": "jap6 zaap6 go2 zan6 gei3 dak1 ling4 ding6 baat3 daat6 tung1 ceot1 lei4, dut1 jat1 seng1 zau6 hoi1 zaap6.",
                    "translation": "Remember to get your Octopus ready when entering the gate; it opens with a beep."
                }
            ],
            "mnemonics": [
                "MTR Route Plan: 入閘(Tap in) -> 睇月台(Check platform) -> 轉綫(Interchange) -> 出閘(Tap out)!"
            ],
            "culturalNotes": [
                "The MTR door-closing warning chime («嘟嘟嘟») and trilingual announcement («請勿靠近車門 / Please stand clear of the train doors») are iconic sonic signatures of Hong Kong daily life."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "地鐵乘車過程中，在樞紐站由一條鐵路綫換乘另一條鐵路綫，廣東話稱為：",
                    "options": [
                        "轉綫 (zyun3 sin3 - Transfer rail lines)",
                        "換車胎",
                        "下車走"
                    ],
                    "answerIndex": 0,
                    "explanation": "轉綫 (zyun3 sin3) is the standard Cantonese term for train transfers/interchanges."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "港鐵關門廣播中提醒乘客不要貼近即將關閉的列車車門，經典警示語是：",
                    "options": [
                        "請大聲叫喊",
                        "請勿靠近車門 (cing2 mat6 kaau3 gan6 ce1 mun4 - Please stand clear of train doors)",
                        "請用力推門"
                    ],
                    "answerIndex": 1,
                    "explanation": "請勿靠近車門 is the iconic Hong Kong MTR safety announcement."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於港鐵日常搭乘用語（轉綫、月台、出入閘、請勿靠近車門），下列哪一項表述完全正確？",
                    "options": [
                        "「轉綫」在香港是指把車票撕掉",
                        "港鐵站沒有任何出口標識",
                        "地鐵裡換乘綫路稱為「轉綫」，候車區為「月台」，感應閘機稱「出入閘」，經典廣播為「請勿靠近車門」 (Transfer is zyun3 sin3, platform is jyut6 toi4, gates are zaap6, iconic warning is cing2 mat6 kaau3 gan6 ce1 mun4)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately details transit vocabulary and cultural audio cues of Hong Kong MTR."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'transfer rail lines / train interchange' in Cantonese (轉綫):",
                    "acceptedAnswers": [
                        "轉綫",
                        "zyun3sin3",
                        "zyun3 sin3",
                        "Zyun3 sin3",
                        "Zyun3sin3",
                        "轉線",
                        "转线",
                        "转綫"
                    ],
                    "explanation": "轉綫 (zyun3 sin3) means 'transfer rail lines' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u11-l3": {
        "id": "hk-u11-l3",
        "unit": "hk-u11",
        "level": "B1",
        "objective": "Master riding double-decker buses (雙層巴士) and calling out stops on public light buses / minibuses (有落 / 燈位有落 / 前面有落).",
        "prerequisites": [
            "hk-u11-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u11-l2"
            ]
        },
        "presentation": {
            "explanation": "香港嘅雙層巴士同公共小巴（Van仔）係極具本土特色嘅街頭符號！尤其是搭無報站系統嘅傳統小巴，「大聲叫落車」係遊客同初學者嘅必修勇氣測試！\n\n1. 雙層巴士用語 (Double-Decker Bus Vocabulary):\n- **雙層巴士 (soeng1 cang4 baa1 si2)**：Double-decker bus。\n- **上層 (soeng6 cang4) / 下層 (haa6 cang4)**：Upper deck / lower deck。\n- **頂閘 (deng2 zaap6)**：Bus so packed that passengers are standing right at the front door。\n- **撳鐘 (gam6 zung1)**：Press the bell to request a stop。\n\n2. 小巴叫落車神句 (Minibus Drop-off Shouting Formula):\n- 小巴通常冇落車鐘，乘客需要喺到達前大聲同司機講：\n- **「前面有落，唔該！」** (Dropping off up ahead, please!)\n- **「燈位有落，司機！」** (Dropping off at the traffic lights, driver!)\n- **「路口 / 油站 / 戲院有落！」** (Dropping off at intersection / petrol station / cinema!)",
            "examples": [
                {
                    "target": "搭雙層巴士坐上層最前排，可以一覽無餘欣賞香港嘅繁華街景。",
                    "reading": "daap3 soeng1 cang4 baa1 si2 co5 soeng6 cang4 zeoi3 cin4 paai4, ho2 ji5 jat1 laam5 mou4 jyu4 jan1 soeng2 hoeng1 gong2 ge3 faan4 waa4 gaai1 ging2.",
                    "translation": "Riding a double-decker bus in the front row of the upper deck allows you to enjoy an unobstructed view of Hong Kong's bustling streetscapes."
                },
                {
                    "target": "（喺小巴入面大聲叫）司機，前面個小巴站有落，唔該晒！",
                    "reading": "(hai2 siu2 baa1 jap6 min6 daai6 seng1 giu3) si1 gei1, cin4 min6 go3 siu2 baa1 zaam6 jau5 lok6, m4 goi1 saai3!",
                    "translation": "(Shouting inside the minibus) Driver, dropping off at the minibus stop ahead, thank you very much!"
                },
                {
                    "target": "呢架綠色小巴有八達通分段收費，上車嗰陣記得拍卡。",
                    "reading": "ni1 gaa3 luk6 sik1 siu2 baa1 jau5 baat3 daat6 tung1 fan1 dyun6 sau1 fai3, soeng5 ce1 go2 zan6 gei3 dak1 paak3 kaat1.",
                    "translation": "This green minibus has Octopus staged sectional fares; remember to tap your card when boarding."
                }
            ],
            "mnemonics": [
                "Minibus Shouting Rule: 地標(Nearby landmark) + 有落(jau5 lok6) + 唔該(Please) = 司機即停!"
            ],
            "culturalNotes": [
                "Calling «有落» (jau5 lok6) clearly and loudly before your stop on a red or green minibus is a rite of passage for living like a true local in Hong Kong."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "搭乘香港公共小巴快到目的地時，向司機呼喊要求下車的最經典口號是：",
                    "options": [
                        "我要下去",
                        "前面有落，唔該！ (cin4 min6 jau5 lok6, m4 goi1! - Dropping off up ahead, please!)",
                        "停下停下"
                    ],
                    "answerIndex": 1,
                    "explanation": "「前面有落，唔該！」 is the universal minibus drop-off formula."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在廣東話中形容早高峰時巴士或地鐵極度擁擠、門口乘客擠滿車門的生動俗語是：",
                    "options": [
                        "頂閘 (deng2 zaap6 - Packed right up to the doors/gates)",
                        "空了",
                        "沒人"
                    ],
                    "answerIndex": 0,
                    "explanation": "頂閘 (deng2 zaap6) describes buses/trains packed right to the fare doors."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於香港雙層巴士乘坐體驗與小巴叫落車文化（有落/燈位有落/頂閘），下列哪一項表述完全正確？",
                    "options": [
                        "小巴上不需要喊話，只要跳車即可",
                        "香港小巴乘客在到站前需大聲向司機喊「有落（如前面有落/燈位有落）」；雙層巴士上層視野開闊，人滿為患稱「頂閘」 (Minibus riders shout jau5 lok6 for stops; double decker upper deck offers views, packed bus is deng2 zaap6)",
                        "「有落」在廣東話中意思是天上在下大雨"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately encapsulates Hong Kong's world-famous minibus shout etiquette and bus terminology."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'dropping off here / getting off (transit)' in Cantonese (有落):",
                    "acceptedAnswers": [
                        "有落",
                        "jau5lok6",
                        "jau5 lok6",
                        "Jau5 lok6",
                        "Jau5lok6",
                        "有下"
                    ],
                    "explanation": "有落 (jau5 lok6) means 'dropping off / getting off' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u11-l4": {
        "id": "hk-u11-l4",
        "unit": "hk-u11",
        "level": "B1",
        "objective": "Master hailing taxis (截的士), three taxi colors (紅的, 綠的, 藍的), routing instructions, and tunnel fee charges (隧道費).",
        "prerequisites": [
            "hk-u11-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u11-l3"
            ]
        },
        "presentation": {
            "explanation": "香港嘅計程車叫做「的士 (dik1 si2)」，車身顏色分為三種，收費同運營區域各不相同！\n\n1. 香港三大計程車種類 (Three Hong Kong Taxi Classes):\n- **紅的 (hung4 dik1)**：Urban red taxi（行走全港九龍新界及大嶼山）。\n- **綠的 (luk6 dik1)**：New Territories green taxi（只限新界郊區）。\n- **藍的 (laam4 dik1)**：Lantau blue taxi（只限大嶼山及赤鱲角機場）。\n\n2. 截的士與乘搭用語 (Taxi Riding Expressions):\n- **截的士 / 攔的士 (zit6 dik1 si2 / laan4 dik1 si2)**：Hail a taxi。\n- **落錶 (lok6 biu1)**：Start the meter flagfall charge。\n- **跳錶 (tiu3 biu1)**：Meter tick / fare increment。\n- **過海 (gwo3 hoi2)**：Cross Victoria Harbour (要加收來回隧道費)。\n- **「司機，唔該去中環IFC，行紅隧定係西隧呀？」** (Driver, to Central IFC please; via Cross-Harbour or Western tunnel?)\n- **「喺前面路口停低就得㗎喇！」** (Just stop at the intersection ahead!)",
            "examples": [
                {
                    "target": "我哋趕住去機場博覽館睇演唱會，快啲喺街口截架紅的啦。",
                    "reading": "ngo5 dei6 gon2 zyu6 heoi3 gei1 coeng4 bok3 laam5 gun2 tai2 jin2 coeng3 wui6, faai3 di1 hai2 gaai1 hau2 zit6 gaa3 hung4 dik1 laa1.",
                    "translation": "We are rushing to the AsiaWorld-Expo for a concert; quick, let's hail a red taxi at the street corner."
                },
                {
                    "target": "司機，唔該去尖沙咀海港城，麻煩你行紅隧，唔該晒！",
                    "reading": "si1 gei1, m4 goi1 heoi3 zim1 saa1 zeoi2 hoi2 gong2 sing4, maa4 faan4 nei5 haang4 hung4 seon6, m4 goi1 saai3!",
                    "translation": "Driver, please go to Tsim Sha Tsui Harbour City, via the Cross-Harbour Tunnel please, thank you very much!"
                },
                {
                    "target": "去到酒店門口停低畀我哋落車啦，唔使找散銀喇。",
                    "reading": "heoi3 dou3 zau2 dim3 mun4 hau2 ting4 dai1 bei2 ngo5 dei6 lok6 ce1 laa1, m4 sai2 zaau2 saan2 ngan2 laa3.",
                    "translation": "Pull over at the hotel entrance to let us drop off, keep the small change."
                }
            ],
            "mnemonics": [
                "Taxi Blueprint: 截的(Hail) -> 講目的地(Set destination) -> 揀隧道(Pick tunnel) -> 落車畀錢(Pay fare)!"
            ],
            "culturalNotes": [
                "«過海» (crossing the harbour between Hong Kong Island and Kowloon) by taxi incurs tunnel tolls («隧道費»); historically drivers also added the return toll unless hailed at a designated cross-harbour taxi stand («過海的士站»)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在廣東話中，在街頭招手攔截計程車的標準動詞短語是：",
                    "options": [
                        "截的士 (zit6 dik1 si2 - Hail a taxi)",
                        "撞的士",
                        "追的士"
                    ],
                    "answerIndex": 0,
                    "explanation": "截的士 (zit6 dik1 si2) is the standard Cantonese term for hailing a cab."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "香港市區（港島與九龍）通行無阻、車身為紅色的計程車，口語俗稱：",
                    "options": [
                        "綠的",
                        "紅的 (hung4 dik1 - Urban red taxi)",
                        "黃的"
                    ],
                    "answerIndex": 1,
                    "explanation": "紅的 (hung4 dik1) is the urban red taxi covering Hong Kong Island and Kowloon."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於香港的士文化、車種分類（紅的/綠的/藍的）與乘搭用語（截的士/落錶/行隧道），下列哪一項表述完全正確？",
                    "options": [
                        "香港的士全部免費乘坐",
                        "「綠的」可以開去中環",
                        "在街頭叫車稱「截的士」，市區為「紅的」，新界為「綠的」，大嶼山為「藍的」，過海需支付「隧道費」 (Hailing is zit6 dik1 si2; red for urban, green for NT, blue for Lantau; harbour crossing incurs tunnel fees)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately details taxi typology, legal operating zones, and fare conventions."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'hailing a taxi' in Cantonese (截的士):",
                    "acceptedAnswers": [
                        "截的士",
                        "zit6dik1si2",
                        "zit6 dik1 si2",
                        "Zit6 dik1 si2",
                        "Zit6dik1si2",
                        "攔的士",
                        "打的"
                    ],
                    "explanation": "截的士 (zit6 dik1 si2) means 'hailing a taxi' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u11-l5": {
        "id": "hk-u11-l5",
        "unit": "hk-u11",
        "level": "B1",
        "objective": "Synthesize all cardinal directions, navigation verbs, MTR transfers, bus/minibus terms, and taxi dialogues in a full-length Tsim Sha Tsui waterfront travel scenario.",
        "prerequisites": [
            "hk-u11-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u11-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢課綜合實戰篇，我哋將第十一單元學到嘅所有方位詞（直行、轉左、轉右、隔離、對面）同埋交通工具術語（港鐵、轉綫、雙層巴士、截的士）融會貫通，演繹遊覽尖沙咀維港海傍嘅全景導航！\n\n1. 尖沙咀地標與交通庫 (Tsim Sha Tsui Transit Lexicon):\n- **尖沙咀 (zim1 saa1 zeoi2)**：Tsim Sha Tsui (TST)。\n- **維多利亞港 / 維港 (wai4 do1 lei6 aa3 gong2 / wai4 gong2)**：Victoria Harbour。\n- **天星碼頭 (tin1 sing1 maa5 tau4)**：Star Ferry Pier。\n- **海濱長廊 / 星光大道 (hoi2 ban1 coeng4 long4 / sing1 gwong1 daai6 dou6)**：Avenue of Stars。\n- **問路 (man3 lou6)**：Ask for directions。\n\n2. 第十一單元實戰對話範例 (Unit 11 Master Urban Transit Dialogue):\n- **遊客張生**：‘唔該借借！請問尖沙咀天星碼頭同星光大道點樣行呀？’\n- **熱心街坊**：‘好近咋！你沿住呢條彌敦道直行，過咗前面個十字路口轉右。’\n- **遊客張生**：‘轉右之後仲要行幾耐呀？’\n- **熱心街坊**：‘行大約五分鐘就見到香港太空館，隔離對面就係海傍天星碼頭同星光大道喇！’\n- **遊客張生**：‘如果回程想去中環，搭咩最方便呀？’\n- **熱心街坊**：‘你可以喺碼頭搭天星小輪過海，或者入港鐵尖沙咀站轉荃灣綫過海，都好快好平！’\n- **遊客張生**：‘明白晒，唔該晒你呀街坊！’",
            "examples": [
                {
                    "target": "由尖沙咀天星碼頭搭天星小輪過中環，只要幾蚊港幣，仲可以吹住海風欣賞維港夜景。",
                    "reading": "jau4 zim1 saa1 zeoi2 tin1 sing1 maa5 tau4 daap3 tin1 sing1 siu2 leon4 gwo3 zung1 waan4, zi2 jiu3 gei2 man1 gong2 bai6, zung6 ho2 ji5 ceoi1 zyu6 hoi2 fung1 jan1 soeng2 wai4 gong2 je6 ging2.",
                    "translation": "Taking the Star Ferry from Tsim Sha Tsui Pier across to Central costs just a few HK dollars, and you can enjoy the breeze and Victoria Harbour night skyline."
                },
                {
                    "target": "行到路口千祈唔好轉錯彎，認住右手邊嗰棟鐘樓就唔會迷路。",
                    "reading": "haang4 dou3 lou6 hau2 cin1 kei4 m4 hou2 zyun3 co3 waan1, jing6 zyu6 jau6 sau2 bin1 go2 dung6 zung1 lau4 zau6 m4 wui5 mai4 lou6.",
                    "translation": "Don't make the wrong turn at the intersection; look out for the Clock Tower on your right-hand side and you won't get lost."
                },
                {
                    "target": "香港嘅公共交通網絡四通八達，無論搭港鐵、巴士定係的士都非常方便快捷。",
                    "reading": "hoeng1 gong2 ge3 gung1 gung6 gaau1 tung1 mong5 lok3 sei3 tung1 baat3 daat6, mou4 leon6 daap3 gong2 tit3, baa1 si2 ding6 hai6 dik1 si2 dou1 fei1 soeng4 fong1 bin6 faai3 zit3.",
                    "translation": "Hong Kong's public transit network reaches everywhere; taking MTR, buses, or taxis is exceptionally convenient and swift."
                }
            ],
            "mnemonics": [
                "TST Transit Map: 彌敦道直行(Walk Nathan Rd) -> 轉右見碼頭(Turn right to Pier) -> 搭天星過海(Take Star Ferry)!"
            ],
            "culturalNotes": [
                "The «天星小輪» (Star Ferry) operating between TST and Central since 1888 is celebrated by National Geographic as one of the '50 Places of a Lifetime'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "香港九龍半島南端最繁華、擁有維港海傍及天星碼頭的著名地標區域是：",
                    "options": [
                        "尖沙咀 (zim1 saa1 zeoi2 - Tsim Sha Tsui)",
                        "屯門",
                        "沙田"
                    ],
                    "answerIndex": 0,
                    "explanation": "尖沙咀 (zim1 saa1 zeoi2) is the world-famous waterfront and cultural district."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在尖沙咀遊覽完畢想要橫渡維多利亞港前往中環，最經典浪漫且廉價的交通工具是：",
                    "options": [
                        "天星小輪 (tin1 sing1 siu2 leon4 - Star Ferry)",
                        "步行游泳",
                        "直升機"
                    ],
                    "answerIndex": 0,
                    "explanation": "天星小輪 (tin1 sing1 siu2 leon4) is the historic Star Ferry across Victoria Harbour."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東第十一單元「方位詞同搭車指路」的綜合應用（直行/轉彎/港鐵/巴士/的士/尖沙咀海傍），下列哪一項總括完全正確？",
                    "options": [
                        "城市導航融匯了方位指引（直行/轉左/轉右）、多模態公共交通（港鐵轉綫/巴士有落/截的士）與地標尋訪（尖沙咀天星碼頭），構成流暢的都會出行能力 (Urban navigation unites directional guidance, multimodal transit like MTR/bus/taxi, and landmark navigation around TST)",
                        "在香港只能靠步行，沒有任何交通工具",
                        "尖沙咀在大嶼山島上"
                    ],
                    "answerIndex": 0,
                    "explanation": "Masterfully synthesizes the directional lexicon and urban transit literacy of Hong Kong."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi phrase for 'Tsim Sha Tsui' in Cantonese (尖沙咀):",
                    "acceptedAnswers": [
                        "尖沙咀",
                        "zim1saa1zeoi2",
                        "zim1 saa1 zeoi2",
                        "Zim1 saa1 zeoi2",
                        "Zim1saa1zeoi2",
                        "尖沙嘴"
                    ],
                    "explanation": "尖沙咀 (zim1 saa1 zeoi2) means 'Tsim Sha Tsui' in Cantonese."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u12-l1": {
        "id": "hk-u12-l1",
        "subject": "cantonese",
        "unit": "hk-u12",
        "level": "B1",
        "objective": "Master AA adjective reduplication and the diminutive -地 (-dei2) suffix expressing 'a little bit / somewhat' (甜甜地, 熱熱地, 暖暖地, 酸酸地, 慢慢).",
        "prerequisites": [
            "hk-u11-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u11-l5"
            ]
        },
        "presentation": {
            "explanation": "喺廣東話入面，如果想表達某種味道、溫度或者特徵「帶有一點點」、「稍微」或者「恰到好處」，我哋極之常用「**形容詞重疊 + 地 (AA-地)**」嘅結構！呢種表達方式比就咁講「有啲...」更加生動、柔和同親切。\n\n### 🔤 1. 「AA-地 (dei2)」結構同高升變調 (Tone Change):\n- **基本結構**：單音節形容詞重疊兩次，後面加上「地 (dei2)」字。\n- **核心語義**：表示程度唔深，帶有「稍微……」、「隱約感覺到……」嘅委婉語氣。\n- **關鍵聲調變化（變調）**：重疊嘅第二個形容詞好多時會變調為**第二聲（高升調 - Tone 2）**！\n  - **甜 (tim4)** → **甜甜地 (tim4 tim2 dei2)**：略帶微甜、甜滋滋。\n  - **熱 (jit6)** → **熱熱地 (jit6 jit2 dei2)**：溫熱微燙、暖烘烘。\n  - **酸 (syun1)** → **酸酸地 (syun1 syun2 dei2)**：帶點酸味、酸溜溜。\n  - **辣 (laat6)** → **辣辣地 (laat6 laat2 dei2)**：微辣、微麻。\n  - **痛 (tung3)** → **痛痛地 (tung3 tung2 dei2)**：隱隱作痛。\n\n### 🗣️ 2. 「慢慢 (maan6 maan2)」等純 AA 重疊作副詞：\n- 有啲單音節形容詞直接重疊成 AA 形式作為修飾副詞，同樣第二個字會變高升調：\n  - **慢 (maan6)** → **慢慢 (maan6 maan2)**：從容不迫地、慢慢來。\n  - **早 (zou2)** → **早早 (zou2 zou2)**：一大早、提早。",
            "examples": [
                {
                    "target": "呢杯港式奶茶熱熱地、甜甜地，冬天飲真係好舒服。",
                    "reading": "Ni1 bui1 gong2 sik1 naai5 caa4 jit6 jit2 dei2, tim4 tim2 dei2, dung1 tin1 jam2 zan1 hai6 hou2 syu1 fuk6.",
                    "translation": "This Hong Kong-style milk tea is pleasantly warm and slightly sweet; drinking it in winter is truly comfortable."
                },
                {
                    "target": "碗酸辣粉酸酸地、辣辣地，非常開胃！",
                    "reading": "Wun2 syun1 laat6 fan2 syun1 syun2 dei2, laat6 laat2 dei2, fei1 soeng4 hoi1 wai6!",
                    "translation": "This bowl of hot-and-sour noodles is nicely tangy and slightly spicy, extremely appetizing!"
                },
                {
                    "target": "唔使咁急，你慢慢行，睇清楚過馬路。",
                    "reading": "M4 sai2 gam3 gap1, nei5 maan6 maan2 haang4, tai2 cing1 co2 gwo3 maa5 lou6.",
                    "translation": "No need to rush, walk slowly and look carefully when crossing the road."
                },
                {
                    "target": "我隻右手琴日撞到，今日仲有啲痛痛地。",
                    "reading": "Ngo5 zek3 jau6 sau2 kam4 jat6 zong6 dou2, gam1 jat6 zung6 jau5 di1 tung3 tung2 dei2.",
                    "translation": "My right hand bumped into something yesterday, and today it's still slightly aching."
                }
            ],
            "mnemonics": [
                "AA-地 Rule: Double the adjective, add 地 (dei2), and raise the 2nd syllable pitch to Tone 2 (tim4 tim2 dei2 = 'a sweet kiss of sugar')!",
                "慢慢 (maan6 maan2): When leaving a meal, saying '慢慢食 (maan6 maan2 sik6)' is polite etiquette meaning 'take your time and enjoy your food'."
            ],
            "culturalNotes": [
                "Cantonese Food Nuance: In Cantonese culinary culture, balance is everything. Describing food as '甜甜地 (tim4 tim2 dei2)' or '酸酸地 (syun1 syun2 dei2)' is often high praise because it means the flavor isn't overpowering or cloying.",
                "Courtesy Phrase '慢慢行': When seeing off guests or elders, saying '慢慢行 (maan6 maan2 haang4)' or '慢慢食 (maan6 maan2 sik6)' expresses gentle, caring hospitality."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想表達一杯茶「微溫、帶有淡淡甜味」，最地道嘅廣東話係：",
                    "options": [
                        "呢杯茶好苦好難飲",
                        "呢杯茶暖暖地、甜甜地 (nyun5 nyun2 dei2, tim4 tim2 dei2)",
                        "呢杯茶完全冇任何味道",
                        "呢杯茶熱到滾"
                    ],
                    "answerIndex": 1,
                    "explanation": "暖暖地同甜甜地精準表達微溫同淡甜嘅 AA-地 輕度特徵。"
                },
                {
                    "prompt": "喺「甜甜地 (tim4 tim2 dei2)」呢個詞入面，第二個「甜」字發生咗咩語音變化？",
                    "options": [
                        "由第4聲變調為第2聲（高升調）",
                        "變為輕聲完全唔發音",
                        "變為第6聲低平調",
                        "冇任何聲調變化"
                    ],
                    "answerIndex": 0,
                    "explanation": "廣東話 AA-地 結構入面第二個音節普遍變調為第2聲高升調。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "喺送朋友出門嗰陣，表示「從容行路、小心睇路」嘅禮貌語係：",
                    "options": [
                        "快啲跑 (faai3 di1 paau2)",
                        "慢慢行啦，小心睇路 (maan6 maan2 haang4 laa1, siu2 sam1 tai2 lou6)",
                        "唔好走 (m4 hou2 zau2)",
                        "慢慢食 (maan6 maan2 sik6)"
                    ],
                    "answerIndex": 1,
                    "explanation": "慢慢行 (maan6 maan2 haang4) 係送客標準關懷禮貌語。"
                },
                {
                    "prompt": "廣東話入面「酸酸地 (syun1 syun2 dei2)」通常用嚟形容咩感覺？",
                    "options": [
                        "極度苦澀嘅中藥",
                        "完全冇味道嘅白開水",
                        "帶有少少酸味、令人開胃嘅味道",
                        "非常鹹嘅鹹魚"
                    ],
                    "answerIndex": 2,
                    "explanation": "酸酸地表示略帶酸味、清新開胃。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話「AA-地」形容詞重疊結構，下列邊一項說明最準確？",
                    "options": [
                        "表示程度極端強烈",
                        "表示特徵帶有一點點、稍微（如甜甜地、辣辣地），第二個字常變高升調",
                        "只能用於形容天氣，不能形容食物",
                        "屬於書面語文言文句式"
                    ],
                    "answerIndex": 1,
                    "explanation": "AA-地 表達輕微委婉特徵並常伴隨變調。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi for 'slightly sweet' in Cantonese (甜甜地):",
                    "acceptedAnswers": [
                        "甜甜地",
                        "tim4 tim2 dei2",
                        "tim4tim2dei2"
                    ],
                    "explanation": "甜甜地 (tim4 tim2 dei2) means 'slightly sweet / pleasantly sweet'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u12-l2": {
        "id": "hk-u12-l2",
        "subject": "cantonese",
        "unit": "hk-u12",
        "level": "B1",
        "objective": "Master ABB vivid adjective triplication patterns conveying sensory texture, appearance, and physical qualities (白雪雪, 甜椰椰, 肥嘟嘟, 黑鼆鼆, 濕溚溚, 靜雞雞).",
        "prerequisites": [
            "hk-u12-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u12-l1"
            ]
        },
        "presentation": {
            "explanation": "廣東話嘅形容詞寶庫入面，最生動、最具畫面感嘅莫過於「**ABB 狀態形容詞**」！佢哋將顏色、觸感、外形同環境描繪得淋漓盡致，喺口語會話入面極受歡迎。\n\n### 🎨 常用 ABB 生動形容詞分類：\n1. **顏色與光影 (Color & Light)**：\n   - **白雪雪 (baak6 syut1 syut1)**：雪白晶瑩、皮膚白嫩（如白雪雪嘅皮膚）。\n   - **黑鼆鼆 (haak1 mang1 mang1)**：黑漆漆、伸手不見五指。\n   - **黃禽禽 (wong4 kam4 kam4)**：黃澄澄、暗黃帶憔悴。\n   - **紅卜卜 (hung4 puk1 puk1)**：紅通通、紅潤（如BB面珠墩紅卜卜）。\n2. **味道與觸感 (Taste & Touch)**：\n   - **甜椰椰 (tim4 je4 je4)**：甜得發膩、甜滋滋。\n   - **滑溜溜 / 滑劣劣 (waat6 lyut1 lyut1)**：滑不溜鰍、極之順滑。\n   - **濕溚溚 (sap1 daap1 daap1)**：潮濕黏膩、濕漉漉（回南天必備詞彙）。\n   - **乾爭爭 (gon1 zaang1 zaang1)**：乾巴巴、毫無水分。\n3. **形態與動作 (Shape & Manner)**：\n   - **肥嘟嘟 (fei4 dyut1 dyut1 / fei4 dyu1 dyu1)**：肥嘟嘟、圓滾滾可愛。\n   - **靜雞雞 (zing6 gai1 gai1)**：偷偷摸摸、靜悄悄地（作副詞用）。",
            "examples": [
                {
                    "target": "個BB塊面肥嘟嘟、紅卜卜，真係好得意！",
                    "reading": "Go3 bi4 bi1 faai3 min6 fei4 dyut1 dyut1, hung4 puk1 puk1, zan1 hai6 hou2 dak1 ji3!",
                    "translation": "The baby's cheeks are chubby and rosy, really adorable!"
                },
                {
                    "target": "春天回南天成間屋都濕溚溚，地下滑劣劣好容易跣親。",
                    "reading": "Cung1 tin1 wui4 naam4 tin1 seng4 gaan1 uk1 dou1 sap1 daap1 daap1, dei6 haa2 waat6 lyut1 lyut1 hou2 jung4 ji6 sin2 can1.",
                    "translation": "During spring humidity (回南天), the entire house is clammy and damp, and the floor is slippery so it's easy to slip."
                },
                {
                    "target": "條走廊黑鼆鼆乜都睇唔到，行路要小心啲。",
                    "reading": "Tiu4 zau2 long4 haak1 mang1 mang1 mat1 dou1 tai2 m4 dou2, haang4 lou6 jiu3 siu2 sam1 di1.",
                    "translation": "The corridor is pitch-black and nothing can be seen; walk carefully."
                },
                {
                    "target": "佢靜雞雞行入房，唔想嘈醒瞓緊覺嘅屋企人。",
                    "reading": "Keoi5 zing6 gai1 gai1 haang4 jap6 fong2, m4 soeng2 cou4 seng2 fan3 gan2 gaau3 ge3 uk1 kei2 jan4.",
                    "translation": "He walked quietly into the room, not wanting to wake up the sleeping family."
                }
            ],
            "mnemonics": [
                "ABB Picture Words: fei4 dyut1 dyut1 (chubby cheeks), sap1 daap1 daap1 (clammy humidity), zing6 gai1 gai1 (sneaking like a silent chicken)!",
                "Spring Weather Alert: When Hong Kong enters 'wui4 naam4 tin1' (humid spring), remember 'sap1 daap1 daap1' (damp) and 'waat6 lyut1 lyut1' (slippery)!"
            ],
            "culturalNotes": [
                "回南天 (Wui4 Naam4 Tin1): A quintessential Southern Chinese meteorological phenomenon in March/April where warm moist maritime air hits cold walls, making everything in homes '濕溚溚 (sap1 daap1 daap1)'.",
                "Baby Compliments: In Hong Kong, complimenting babies as '肥嘟嘟 (fei4 dyut1 dyut1)' and '白雪雪 (baak6 syut1 syut1)' is universally loved by parents."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "喺春天回南天潮濕天氣，形容屋企地板「濕漉漉、容易滑倒」應選用邊組 ABB 詞彙？",
                    "options": [
                        "乾爭爭同黑鼆鼆",
                        "濕溚溚 (sap1 daap1 daap1) 同 滑劣劣 (waat6 lyut1 lyut1)",
                        "甜椰椰同白雪雪",
                        "靜雞雞同肥嘟嘟"
                    ],
                    "answerIndex": 1,
                    "explanation": "濕溚溚形容潮濕，滑劣劣形容濕滑。"
                },
                {
                    "prompt": "形容走廊「黑漆漆、伸手不見五指」最地道嘅廣東話詞彙係：",
                    "options": [
                        "白雪雪 (baak6 syut1 syut1)",
                        "黑鼆鼆 (haak1 mang1 mang1)",
                        "紅卜卜 (hung4 puk1 puk1)",
                        "黃禽禽 (wong4 kam4 kam4)"
                    ],
                    "answerIndex": 1,
                    "explanation": "黑鼆鼆專門形容漆黑昏暗。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "想稱讚小朋友生得「圓潤可愛、臉色紅潤」，最合適嘅廣東話句子係：",
                    "options": [
                        "個小朋友生得黑鼆鼆好恐怖",
                        "個小朋友塊面肥嘟嘟、紅卜卜，好得意！",
                        "個小朋友全身乾爭爭好瘦弱",
                        "個小朋友靜雞雞唔講嘢"
                    ],
                    "answerIndex": 1,
                    "explanation": "肥嘟嘟 (chubby) 同 紅卜卜 (rosy) 係讚美嬰兒嘅經典組合。"
                },
                {
                    "prompt": "「靜雞雞 (zing6 gai1 gai1)」喺日常會話中嘅意思係：",
                    "options": [
                        "大聲喧嘩吵鬧",
                        "偷偷摸摸、靜悄悄地行動",
                        "一隻不會叫的雞",
                        "去街市買新鮮活雞"
                    ],
                    "answerIndex": 1,
                    "explanation": "靜雞雞表示悄悄地、不惹人注意地做事。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "邊個 ABB 詞彙用嚟形容「偷偷摸摸、靜悄悄」做某件事？",
                    "options": [
                        "白雪雪",
                        "肥嘟嘟",
                        "靜雞雞 (zing6 gai1 gai1)",
                        "濕溚溚"
                    ],
                    "answerIndex": 2,
                    "explanation": "靜雞雞 = quietly / stealthily."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi for 'chubby / plump' in Cantonese (肥嘟嘟):",
                    "acceptedAnswers": [
                        "肥嘟嘟",
                        "fei4 dyut1 dyut1",
                        "fei4dyut1dyut1",
                        "fei4 dyu1 dyu1"
                    ],
                    "explanation": "肥嘟嘟 (fei4 dyut1 dyut1) means 'chubby / pleasantly plump'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u12-l3": {
        "id": "hk-u12-l3",
        "subject": "cantonese",
        "unit": "hk-u12",
        "level": "B1",
        "objective": "Master pre-adjectival degree adverbs in Cantonese to modulate intensity across registers (好 hou2, 幾 gei2, 超級 ciu1 kap1, 咁 gam3, 太 taai3).",
        "prerequisites": [
            "hk-u12-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u12-l2"
            ]
        },
        "presentation": {
            "explanation": "喺廣東話入面，擺喺形容詞前面嘅**程度副詞**（Pre-adjectival Degree Adverbs）係日常表達強弱度嘅骨幹。熟練掌握佢哋嘅細微語氣階梯，可以令你嘅廣東話更加精準而有層次。\n\n### 📈 廣東話前置程度副詞階梯：\n1. **幾 (gei2) + 形容詞**：相當於 English \"quite / pretty / fairly\"。\n   - 語氣適中，不溫不火，表示「幾好（幾唔錯）」、「幾抵（幾划算）」、「幾靚（幾漂亮）」\n   - 例如：呢間餐廳啲點心**幾好食**喎 (The dim sum here is quite tasty).\n2. **好 (hou2) + 形容詞**：相當於 \"very\"，最通用嘅程度副詞。\n   - 例如：今日天氣**好熱** (It's very hot today).\n3. **咁 (gam3) + 形容詞**：相當於 \"so / this...\"，常用於感嘆或反問。\n   - 例如：點解件衫**咁貴**㗎？(Why is this shirt so expensive?)\n4. **太 (taai3) + 形容詞**：相當於 \"too / overly\"，通常帶有過度、負面語氣。\n   - 例如：碗湯**太鹹**，飲唔落 (The soup is too salty to drink).\n5. **超級 / 極之 (ciu1 kap1 / gik6 zi1) + 形容詞**：相當於 \"super / extremely\"，強調極高程度。\n   - 例如：呢套戲**超級精彩** (This movie is super fantastic)！",
            "examples": [
                {
                    "target": "呢度啲蛋撻幾熱幾脆喎，價錢仲好抵添！",
                    "reading": "Ni1 dou6 di1 daan6 taat1 gei2 jit6 gei2 ceoi3 wo3, gaa3 cin4 zung6 hou2 dai2 tim1!",
                    "translation": "The egg tarts here are quite hot and crispy, and the price is also very good value!"
                },
                {
                    "target": "今日條街咁多人排隊，間舖頭肯定超級出名。",
                    "reading": "Gam1 jat6 tiu4 gaai1 gam3 do1 jan4 paai4 deoi2, gaan1 pou3 tau2 hang2 ding6 ciu1 kap1 ceot1 meng2.",
                    "translation": "With so many people queuing on the street today, that shop must be super famous."
                },
                {
                    "target": "杯檸檬茶太甜喇，唔該幫我落少啲糖漿。",
                    "reading": "Bui1 ning4 mung4 caa4 taai3 tim4 laa3, m4 goi1 bong1 ngo5 lok6 siu2 di1 tong4 zoeng1.",
                    "translation": "This iced lemon tea is too sweet; please add less syrup for me."
                },
                {
                    "target": "新嚟嗰位同事極之勤力，大家都好讚賞佢。",
                    "reading": "San1 lai4 go2 wai2 tung4 si6 gik6 zi1 kan4 lik6, daai6 gaa1 dou1 hou2 zaan3 soeng2 keoi5.",
                    "translation": "The newly arrived colleague is extremely diligent, and everyone praises him highly."
                }
            ],
            "mnemonics": [
                "Degree Ladder: 幾 (gei2 - quite) < 好 (hou2 - very) < 咁 (gam3 - so) < 超級 (ciu1 kap1 - super) < 極之 (gik6 zi1 - extremely)!",
                "幾 (gei2) is Not a Question: When followed by an adjective (幾好, 幾貴), '幾' means 'quite/fairly', NOT 'how many'!"
            ],
            "culturalNotes": [
                "Hong Kong Modesty with '幾': Hong Kongers often use '幾好 (gei2 hou2)' or '幾唔錯 (gei2 m4 co3)' instead of exaggerated praise, reflecting pragmatic moderation.",
                "Tea Restaurant Customization: If your drink is '太甜 (taai3 tim4)', you can order future drinks with '少甜 (siu2 tim4 - less sweet)' or '走甜 (zau2 tim4 - no sugar)'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "當你想表達一件商品「挺便宜、挺划算（quite cheap/fair value）」嗰陣，最地道嘅廣東話係：",
                    "options": [
                        "太貴 (taai3 gwai3)",
                        "幾抵 (gei2 dai2)",
                        "完全唔平",
                        "好難食"
                    ],
                    "answerIndex": 1,
                    "explanation": "幾抵 (gei2 dai2) 表達「相當划算/幾划算」。"
                },
                {
                    "prompt": "句子「點解今日咁熱㗎？ (Why is it so hot today?)」入面嘅「咁 (gam3)」相當於邊個英文意思？",
                    "options": [
                        "very little",
                        "so / this much",
                        "not at all",
                        "sometimes"
                    ],
                    "answerIndex": 1,
                    "explanation": "咁 (gam3) 表示「如此/這麼 (so/this...)」。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "喺茶餐廳覺得杯飲品「過分甜、難以入口」，向侍應反映時應該話：",
                    "options": [
                        "杯茶好平",
                        "杯茶太甜喇，唔該少甜 (Bui1 caa4 taai3 tim4 laa3, m4 goi1 siu2 tim4)",
                        "杯茶超級正",
                        "杯茶幾好飲"
                    ],
                    "answerIndex": 1,
                    "explanation": "太甜 (taai3 tim4) 表達過度甜，少甜 (siu2 tim4) 表達少糖。"
                },
                {
                    "prompt": "下列邊一個副詞表達嘅程度比「好 (hou2)」更加強烈？",
                    "options": [
                        "少少 (siu2 siu2)",
                        "幾 (gei2)",
                        "超級 (ciu1 kap1)",
                        "有啲 (jau5 di1)"
                    ],
                    "answerIndex": 2,
                    "explanation": "超級 (ciu1 kap1) 表達頂級、超級嘅強烈程度。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "廣東話「幾好食 (gei2 hou2 sik6)」嘅準確意思係：",
                    "options": [
                        "有多少個食物？",
                        "相當好吃 / 挺好吃的 (quite tasty)",
                        "完全不能吃",
                        "非常難吃"
                    ],
                    "answerIndex": 1,
                    "explanation": "幾 (gei2) + 形容詞表示「相當/挺... (quite...)」。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'super / extremely' in Cantonese (超級):",
                    "acceptedAnswers": [
                        "超級",
                        "ciu1 kap1",
                        "ciu1kap1"
                    ],
                    "explanation": "超級 (ciu1 kap1) means 'super / extremely'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u12-l4": {
        "id": "hk-u12-l4",
        "subject": "cantonese",
        "unit": "hk-u12",
        "level": "B1",
        "objective": "Master post-adjectival degree complements expressing extreme conditions (到爆 dou3 baau3, 到暈 dou3 wan4, 極/極之 gik6/gik6 zi1, 滯 zai6).",
        "prerequisites": [
            "hk-u12-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u12-l3"
            ]
        },
        "presentation": {
            "explanation": "除咗前置副詞，廣東話最具地道色彩嘅係**後置程度補語**（Post-adjectival Degree Complements）！將補語接喺形容詞後面，可以將情緒、誇張感同衝擊力推到最高峰。\n\n### 💥 廣東話核心後置程度補語：\n1. **形容詞 + 到爆 (dou3 baau3)**：相當於 \"explosively / to the absolute max\"。\n   - 形容某種狀態強烈到好似要爆炸一樣，年輕人同日常對話極度常用！\n   - **平到爆 (peng4 dou3 baau3)**：便宜到爆炸、超抵。\n   - **開心到爆 (hoi1 sam1 dou3 baau3)**：開心到極點。\n   - **悶到爆 (mun6 dou3 baau3)**：無聊透頂。\n2. **形容詞 + 到暈 (dou3 wan4)**：相當於 \"ridiculously / to dizziness\"。\n   - 表示某種狀態多到或者強烈到令人頭暈目眩。\n   - **忙到暈 (mong4 dou3 wan4)**：忙得團團轉、忙到暈頭轉向。\n   - **痛到暈 (tung3 dou3 wan4)**：痛得要命。\n3. **形容詞 + 得滯 (dak1 zai6 / zai6)**：相當於 \"too / excessively (to excess)\"。\n   - 表示過分、超出了適當限度，多帶困擾或負面語氣。\n   - **食得飽得滯 (sik6 dak1 baau2 dak1 zai6)**：吃得太撐了。\n   - **貴得滯 (gwai3 dak1 zai6)**：太貴了點。\n   - **夜得滯 (je6 dak1 zai6)**：時間太晚了。\n4. **形容詞 + 極 (gik6) / 極之**：相當於 \"to the utmost / extremely\"。\n   - **高興極 (gou1 hing3 gik6)** / **精彩極 (zing1 coi2 gik6)**。",
            "examples": [
                {
                    "target": "呢間舖頭清貨大減價，啲衫平到爆，全場幾十蚊一件！",
                    "reading": "Ni1 gaan1 pou3 tau2 cing1 fo3 daai6 gaam2 gaa3, di1 saam1 peng4 dou3 baau3, cyun4 coeng4 gei2 sap6 man1 jat1 gin6!",
                    "translation": "This shop is having a clearance sale; the clothes are explosively cheap, only a few tens of dollars apiece storewide!"
                },
                {
                    "target": "我今個禮拜返工忙到暈，連食晏晝飯嘅時間都冇。",
                    "reading": "Ngo5 gam1 go3 lai5 baai3 faan1 gung1 mong4 dou3 wan4, lin4 sik6 aan3 zau3 faan6 ge3 si4 gaan3 dou1 mou5.",
                    "translation": "I've been dizzily busy at work this week, not even having time for lunch."
                },
                {
                    "target": "頭先食咗兩大碗飯，飽得滯行唔郁添。",
                    "reading": "Tau4 sin1 sik6 zo2 loeng5 daai6 wun2 faan6, baau2 dak1 zai6 haang4 m4 juk1 tim1.",
                    "translation": "I just ate two big bowls of rice and am overly stuffed to the point of barely being able to walk."
                },
                {
                    "target": "尋晚場演唱會氣氛熱烈到爆，全場觀眾一齊合唱！",
                    "reading": "Cam4 maan5 coeng4 jin2 coeng3 wui2 hei3 fan1 jit6 lit6 dou3 baau3, cyun4 coeng4 gun1 zung3 jat1 cai4 hap6 coeng3!",
                    "translation": "Last night's concert atmosphere was explosively passionate, with the whole audience singing along together!"
                }
            ],
            "mnemonics": [
                "Post-Adjective Fireworks: 到爆 (dou3 baau3 = exploding with joy/value), 到暈 (dou3 wan4 = dizzy with work/pain), 得滯 (dak1 zai6 = uncomfortably excessive)!",
                "得滯 (dak1 zai6): Always signals excess — if you ate too much dim sum, say '飽得滯 (baau2 dak1 zai6)'!"
            ],
            "culturalNotes": [
                "Expressive Hyperbole: Cantonese speakers love high-energy descriptive idioms. Using '平到爆 (peng4 dou3 baau3)' while shopping or '忙到暈 (mong4 dou3 wan4)' in office banter sounds immediately natural and lively.",
                "Digestion Etiquette: Saying '食得飽得滯 (sik6 dak1 baau2 dak1 zai6)' at the end of a meal politely signals to hosts that their hospitality was generous and you couldn't possibly eat another bite."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想形容商場清貨特價「價格超級便宜、令人驚喜」，最傳神嘅廣東話係：",
                    "options": [
                        "平到爆 (peng4 dou3 baau3)",
                        "貴到暈",
                        "完全唔平",
                        "悶到爆"
                    ],
                    "answerIndex": 0,
                    "explanation": "平到爆 (peng4 dou3 baau3) 表示便宜到極致。"
                },
                {
                    "prompt": "返工工作量極大、忙得團團轉，廣東話習慣話：",
                    "options": [
                        "得閒到爆",
                        "忙到暈 (mong4 dou3 wan4)",
                        "冷得滯",
                        "甜椰椰"
                    ],
                    "answerIndex": 1,
                    "explanation": "忙到暈形容極度忙碌。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "食飯食得太飽、肚脹唔舒服，應該點講？",
                    "options": [
                        "肚餓到暈",
                        "飽得滯 (baau2 dak1 zai6)",
                        "辣到爆",
                        "酸溜溜"
                    ],
                    "answerIndex": 1,
                    "explanation": "飽得滯表示吃得過飽、太撐。"
                },
                {
                    "prompt": "「到爆 (dou3 baau3)」後置補語喺廣東話入面通常用嚟表示：",
                    "options": [
                        "某種狀態達到爆炸般的極端程度",
                        "完全沒有任何感覺",
                        "東西真的炸開了",
                        "只有小孩子才能用"
                    ],
                    "answerIndex": 0,
                    "explanation": "到爆係強烈誇張補語，表示極致強烈。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "句子「我今晚忙到暈」表示說話者：",
                    "options": [
                        "頭暈生病去看醫生",
                        "極度忙碌、忙到團團轉 (dizzily busy)",
                        "完全沒事做很無聊",
                        "已經睡著了"
                    ],
                    "answerIndex": 1,
                    "explanation": "忙到暈 = extremely busy."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi for 'explosively cheap' in Cantonese (平到爆):",
                    "acceptedAnswers": [
                        "平到爆",
                        "peng4 dou3 baau3",
                        "peng4dou3baau3"
                    ],
                    "explanation": "平到爆 (peng4 dou3 baau3) means 'explosively cheap'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u12-l5": {
        "id": "hk-u12-l5",
        "subject": "cantonese",
        "unit": "hk-u12",
        "level": "B1",
        "objective": "Synthesize AA-地, ABB patterns, pre-adjectival degree adverbs, and post-adjectival complements in food critiques, weather descriptions, and social observations.",
        "prerequisites": [
            "hk-u12-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u12-l1",
                "hk-u12-l2",
                "hk-u12-l3",
                "hk-u12-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢個單元嘅綜合總結課入面，我哋會將 **AA-地 (Diminutive)**、**ABB (Vivid Triplication)**、**前置副詞 (好/幾/咁/超級)** 以及 **後置補語 (到爆/到暈/得滯)** 融會貫通，應用喺真實嘅生活點評、美食評論同社交互動之中！\n\n### 🍲 實用綜合語境示範：\n1. **茶餐廳食評 (Food Critique)**：\n   - 「呢碟咕嚕肉酸酸地、甜甜地好開胃，但係食得太多就會覺得**甜得滯**。」\n   - 「啲菠蘿包啱啱出爐熱辣辣，個皮脆到爆，真係超級正！」\n2. **天氣與生活感受 (Weather & Daily Life)**：\n   - 「春天回南天全屋**濕溚溚**，地下**滑劣劣**，出門要**慢慢行**。」\n   - 「出面條街黑鼆鼆仲落緊大雨，行人都**忙到暈**咁搵地方避雨。」\n3. **社交評價 (Social Comments)**：\n   - 「個BB塊面**肥嘟嘟**、**紅卜卜**，見到佢**開心到爆**！」",
            "examples": [
                {
                    "target": "呢間茶餐廳嘅凍檸茶酸酸地、甜甜地好解渴，而且價錢平到爆！",
                    "reading": "Ni1 gaan1 caa4 caan1 teng1 ge3 dung3 ning4 caa4 syun1 syun2 dei2, tim4 tim2 dei2 hou2 gaai2 hot3, ji4 ce2 gaa3 cin4 peng4 dou3 baau3!",
                    "translation": "The iced lemon tea at this cha chaan teng is nicely tangy and slightly sweet, very thirst-quenching, and the price is explosively cheap!"
                },
                {
                    "target": "回南天地下滑劣劣，你出門口行路一定要慢慢行呀。",
                    "reading": "Wui4 naam4 tin1 dei6 haa2 waat6 lyut1 lyut1, nei5 ceot1 mun4 hau2 haang4 lou6 jat1 ding6 jiu3 maan6 maan2 haang4 aa3.",
                    "translation": "During spring humidity the floor is slippery; when going out you must walk slowly and carefully."
                },
                {
                    "target": "今日全公司忙到暈，好彩老細請大家食熱辣辣嘅新鮮蛋撻。",
                    "reading": "Gam1 jat6 cyun4 gung1 si1 mong4 dou3 wan4, hou2 coi2 lou5 sai3 cing2 daai6 gaa1 sik6 jit6 laat6 laat6 ge3 san1 sin1 daan6 taat1.",
                    "translation": "The whole company was dizzily busy today; luckily the boss treated everyone to piping hot fresh egg tarts."
                },
                {
                    "target": "今晚食咗好多海鮮，飽得滯要出去散步消化下。",
                    "reading": "Gam1 maan5 sik6 zo2 hou2 do1 hoi2 sin1, baau2 dak1 zai6 jiu3 ceot1 heoi3 saan3 bou6 siu1 faa3 haa5.",
                    "translation": "I ate a lot of seafood tonight and am too full, so I need to go out for a walk to digest."
                }
            ],
            "mnemonics": [
                "Mastery Formula: Blend AA-地 (taste nuance) + ABB (visual texture) + 到爆 (high intensity) for authentic Cantonese fluency!"
            ],
            "culturalNotes": [
                "The Cantonese Art of Food Description: Hong Kong people are world-renowned food lovers (吃貨). Being able to describe dishes with nuanced terms like '酸酸地', '熱辣辣', '脆到爆', and '甜得滯' is the true mark of cultural fluency."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想全面讚賞一間餐廳「點心微溫淡甜（酸酸地/甜甜地）、出爐熱辣辣、價錢超便宜（平到爆）」，邊句最地道？",
                    "options": [
                        "呢間餐廳點心甜甜地、熱辣辣，價錢仲平到爆添！",
                        "呢度啲嘢食難食到爆，又貴得滯",
                        "我唔想去呢間餐廳食嘢",
                        "今日天氣好熱"
                    ],
                    "answerIndex": 0,
                    "explanation": "完美融合 AA-地、ABB 同 到爆 等單元核心知識點。"
                },
                {
                    "prompt": "當朋友請你食大餐，你食得好飽想禮貌表達「太撐了不能再吃」，最合適嘅係：",
                    "options": [
                        "仲好肚餓",
                        "真係飽得滯喇，多謝你請客！ (Zan1 hai6 baau2 dak1 zai6 laa3, do1 ze6 nei5 cing2 haak3!)",
                        "我完全冇食過",
                        "呢碟餸太難食"
                    ],
                    "answerIndex": 1,
                    "explanation": "飽得滯禮貌表達已經吃得過飽，不能再吃。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "「回南天天氣濕溚溚，行路要慢慢行」呢句話主要提醒人哋注意咩？",
                    "options": [
                        "天氣太乾燥要多喝水",
                        "潮濕天氣地板濕滑，行走需要從容小心防滑倒",
                        "天氣太冷要穿厚衣服",
                        "請大家快點跑步"
                    ],
                    "answerIndex": 1,
                    "explanation": "濕溚溚 (damp) 同 慢慢行 (walk slowly) 提醒防滑。"
                },
                {
                    "prompt": "「忙到暈 (mong4 dou3 wan4)」同「開心到爆 (hoi1 sam1 dou3 baau3)」展示咗廣東話邊種語法特點？",
                    "options": [
                        "形容詞後置極端程度補語",
                        "名詞複數變化",
                        "動詞完成體",
                        "代詞所有格"
                    ],
                    "answerIndex": 0,
                    "explanation": "到暈同到爆均為後置程度補語。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列邊一句廣東話最地道咁總結咗「美食評論 + 程度感受」？",
                    "options": [
                        "呢碗糖水甜甜地好滋潤，而且價錢平到爆！",
                        "今天星期一我去上班了",
                        "他在房間裡面睡覺",
                        "這是一本中文書"
                    ],
                    "answerIndex": 0,
                    "explanation": "結合咗 AA-地 (甜甜地) 同 到爆 (平到爆)。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi for 'overly full / too stuffed' in Cantonese (飽得滯):",
                    "acceptedAnswers": [
                        "飽得滯",
                        "baau2 dak1 zai6",
                        "baau2dak1zai6",
                        "baau2 zai6"
                    ],
                    "explanation": "飽得滯 (baau2 dak1 zai6) means 'overly full / too stuffed'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u13-l1": {
        "id": "hk-u13-l1",
        "subject": "cantonese",
        "unit": "hk-u13",
        "level": "B1",
        "objective": "Master the tonal and pragmatic nuances of sentence-final particles 啦 (laa1 suggestion vs laa3 change of state) and 囉 (lo1 obvious assertion vs lo3 reluctant agreement).",
        "prerequisites": [
            "hk-u12-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u12-l5"
            ]
        },
        "presentation": {
            "explanation": "廣東話嘅「**句末語氣助詞 (Sentence-Final Particles)**」係成個語言嘅靈魂所在！如果冇咗語氣助詞，講出嚟嘅廣東話就會顯得生硬冷漠。喺本課我哋首先掌握最核心嘅兩大助詞：**啦** 同 **囉**。\n\n### 🎭 1. 「啦」嘅兩種關鍵聲調同語氣 (laa1 vs laa3)：\n- **啦 (laa1 - 第1聲高平調)**：用於**提議、祈使、請求或促成行動**（Let's do it / Please!）。\n  - 例如：我哋一齊**去食飯啦 (heoi3 sik6 faan6 laa1)**！/ 快啲**行啦 (haang4 laa1)**！\n- **啦 (laa3 - 第3聲中平調)**：用於表示**事態出現新變化、已經發生或完成**（Change of state / Already / Now）。\n  - 例如：**夠鐘啦 (gau3 zung1 laa3)**（時間到了）/ **落雨啦 (lok6 jyu5 laa3)**（開始下雨了）/ 我**食飽啦 (sik6 baau2 laa3)**（我已經吃飽了）。\n\n### 🎯 2. 「囉」嘅兩種用法 (lo1 vs lo3)：\n- **囉 (lo1 - 第1聲高平調)**：表示**理所當然、顯而易見**（Of course / Obviously / That's why!）。\n  - 例如：你唔溫書，緊係考得唔好**囉 (lo1)**！(You didn't study, obviously you didn't do well!)\n- **囉 (lo3 - 第3聲中平調)**：表示**無可奈何、勉強接受或妥協**（Just have to... / So be it）。\n  - 例如：既然買唔到飛，唯有睇聽日場**囉 (lo3)**。",
            "examples": [
                {
                    "target": "已經下晝一點鐘喇，大家一齊去茶餐廳食晏啦！",
                    "reading": "Ji5 ging1 haa6 ng5 jat1 dim2 zung1 laa3, daai6 gaa1 jat1 cai4 heoi3 caa4 caan1 teng1 sik6 aan3 laa1!",
                    "translation": "It's already 1 PM; let's all go to the tea restaurant for lunch! (laa3 = change of state; laa1 = suggestion)"
                },
                {
                    "target": "你問我點解識佢？我哋係中學同學嚟㗎囉！",
                    "reading": "Nei5 man6 ngo5 dim2 gaai2 sik1 keoi5? Ngo5 dei6 hai6 zung1 hok6 tung4 hok6 lai4 gaa3 lo1!",
                    "translation": "You ask why I know him? We're secondary school classmates, obviously! (lo1 = obvious fact)"
                },
                {
                    "target": "出面落緊大雨，唯有留喺屋企睇電視囉。",
                    "reading": "Ceot1 min6 lok6 gan2 daai6 jyu5, wai4 jau5 lau4 hai2 uk1 kei2 tai2 din6 si6 lo3.",
                    "translation": "It's raining heavily outside, so we can only stay at home and watch TV. (lo3 = reluctant resignation)"
                },
                {
                    "target": "我做完份報告啦，可以準時放工啦！",
                    "reading": "Ngo5 zou6 jyun4 fan6 bou3 gou3 laa3, ho2 ji5 zeon2 si4 fong3 gung1 laa3!",
                    "translation": "I've finished the report, so I can get off work on time now! (laa3 = completion/change of state)"
                }
            ],
            "mnemonics": [
                "Tone Pitch Rule for 啦: High tone laa1 invites action ('Let's go啦!'), Mid tone laa3 announces reality ('It's done啦!').",
                "囉 (lo1 vs lo3): lo1 is proud and obvious ('Told you so囉!'), lo3 is sighing and resigned ('Only choice囉.')."
            ],
            "culturalNotes": [
                "Hong Kong Social Rhythm: In restaurants, saying '唔該埋單啦 (m4 goi1 maai4 daan1 laa1)' softens the request politely, making everyday interactions smooth and courteous.",
                "Avoiding Bluntness: Without final particles like 啦 or 囉, short sentences sound like abrupt military commands. Adding the right particle instantly adds warmth."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想熱情邀請同事「一齊去食晏晝飯（Let's go for lunch）」應該用邊個聲調嘅「啦」？",
                    "options": [
                        "去食晏啦 (sik6 aan3 laa1 - 第1聲高平調表示提議)",
                        "去食晏㗎",
                        "去食晏喎",
                        "去食晏咩"
                    ],
                    "answerIndex": 0,
                    "explanation": "laa1（第1聲）表示提議、號召行動。"
                },
                {
                    "prompt": "句子「佢成日遲到，今日又俾老細鬧囉 (He's always late, obviously he got scolded again)」入面嘅「囉 (lo1)」表達緊：",
                    "options": [
                        "懷疑同不敢相信",
                        "理所當然、意料之中嘅語氣 (obviously / expectedly)",
                        "強烈的請求與命令",
                        "悲傷無奈的妥協"
                    ],
                    "answerIndex": 1,
                    "explanation": "lo1 表示顯而易見、理所當然。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "表示「時間到了、已經夠鐘了（事態變化）」最地道嘅廣東話係：",
                    "options": [
                        "夠鐘啦 (gau3 zung1 laa3)",
                        "夠鐘咩",
                        "夠鐘啫",
                        "夠鐘咋"
                    ],
                    "answerIndex": 0,
                    "explanation": "laa3 表達事態轉變（now/already）。"
                },
                {
                    "prompt": "火車走咗、唯有等下一班車嘅無奈妥協語氣係：",
                    "options": [
                        "唯有等下班啦 (wai4 jau5 dang2 haa6 baan1 laa1)",
                        "唯有等下班囉 (wai4 jau5 dang2 haa6 baan1 lo3)",
                        "唯有等下班咩",
                        "唯有等下班添"
                    ],
                    "answerIndex": 1,
                    "explanation": "lo3 表達無可奈何、勉強妥協。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話「啦」字嘅兩種聲調用法，下列邊一項完全正確？",
                    "options": [
                        "laa1 表提議促請行動（食飯啦），laa3 表事態變化或完成（落雨啦）",
                        "兩者完全一樣沒有任何區別",
                        "laa1 只能用於句首",
                        "laa3 只能表示否定"
                    ],
                    "answerIndex": 0,
                    "explanation": "laa1 表提議，laa3 表新狀態。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi for 'Time is up / It is time now' in Cantonese (夠鐘啦):",
                    "acceptedAnswers": [
                        "夠鐘啦",
                        "gau3 zung1 laa3",
                        "gau3zung1laa3"
                    ],
                    "explanation": "夠鐘啦 (gau3 zung1 laa3) means 'Time is up / It is time now'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u13-l2": {
        "id": "hk-u13-l2",
        "subject": "cantonese",
        "unit": "hk-u13",
        "level": "B1",
        "objective": "Master 㗎 (gaa3 assertive explanation vs gaa4 surprise query) and 咩 (me1 rhetorical disbelief/doubt).",
        "prerequisites": [
            "hk-u13-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u13-l1"
            ]
        },
        "presentation": {
            "explanation": "喺廣東話口語入面，**㗎 (gaa3 / gaa4)** 同 **咩 (me1)** 係表達說話者立場、確信度同懷疑態度最關鍵嘅兩大標誌。\n\n### 💡 1. 「㗎 (gaa3 / gaa4)」嘅語法本質與雙調用法：\n- **詞源融合**：㗎 (gaa3) 其實係 **「嘅 (ge3)」+「呀 (aa3)」** 嘅快速合音！\n- **㗎 (gaa3 - 第3聲中平調)**：用於**陳述固有事實、解釋原因或強調確信**（It is indeed so / That's how it is）。\n  - 例如：呢部相機係我自己買**㗎 (gaa3)**。(This camera was bought by myself.)\n  - 例如：佢平時好早瞓**㗎 (gaa3)**。(He usually sleeps very early.)\n- **㗎 (gaa4 - 第4聲低沉調 / 升調)**：用於**疑問句，帶有驚訝、好奇或求證**（Really? Is that so?）。\n  - 例如：你識講法文**㗎 (gaa4)**？(You know how to speak French?! [surprised query])\n\n### ❓ 2. 「咩 (me1)」嘅反問與懷疑語氣：\n- **咩 (me1 - 第1聲高平調)**：用於**反問句或表示懷疑、不相信、驚訝反差**（Really?! / Isn't it...?）。\n  - 例如：今日放假**咩 (me1)**？(Is today a holiday?! [I thought we had work!])\n  - 例如：你唔知呢件事**咩 (me1)**？(Didn't you know about this?!)",
            "examples": [
                {
                    "target": "件蛋糕係我琴晚親手整㗎，你試下一啖啦！",
                    "reading": "Gin6 daan6 gou1 hai6 ngo5 kam4 maan5 can1 sau2 zing2 gaa3, nei5 si3 haa5 jat1 daam6 laa1!",
                    "translation": "This cake was handmade by me last night; have a bite! (gaa3 = explaining fact/origin)"
                },
                {
                    "target": "原來你識游水㗎？我一直以為你怕水添！",
                    "reading": "Jyun4 loi4 nei5 sik1 jau4 seoi2 gaa4? Ngo5 jat1 zik6 ji5 wai4 nei5 paa3 seoi2 tim1!",
                    "translation": "Oh, so you know how to swim?! I always thought you were afraid of water! (gaa4 = surprised discovery)"
                },
                {
                    "target": "老細今日唔返公司咩？點解全體同事咁得閒嘅？",
                    "reading": "Lou5 sai3 gam1 jat6 m4 faan1 gung1 si1 me1? Dim2 gaai2 cyun4 tai2 tung4 si6 gam3 dak1 haan4 ge2?",
                    "translation": "Isn't the boss coming to the office today?! Why is every colleague so free? (me1 = rhetorical surprise)"
                },
                {
                    "target": "呢度啲海鮮好新鮮㗎，每日朝早直接由漁船送過嚟。",
                    "reading": "Ni1 dou6 di1 hoi2 sin1 hou2 san1 sin1 gaa3, mui5 jat6 ziu1 zou2 zik6 zip3 jau4 jyu4 syun4 sung3 gwo3 lai4.",
                    "translation": "The seafood here is very fresh; it is delivered directly from fishing boats every morning. (gaa3 = asserting quality)"
                }
            ],
            "mnemonics": [
                "㗎 (gaa3) = 嘅 + 呀: Always use gaa3 when explaining background facts ('It was handmade by me 㗎!').",
                "咩 (me1) = Disbelief Alert: If you are shocked or questioning assumptions, pop '咩' at the end ('Is it true 咩?!')."
            ],
            "culturalNotes": [
                "Tone Dynamics in Hong Kong Workplace: When a manager asks '你未交報告㗎 (gaa4)?', the Tone 4 gaa4 indicates they are surprised and verifying why it hasn't arrived.",
                "Avoiding Misunderstandings: Saying '係咩 (hai6 me1 - Is that so?)' is a very natural way to express mild curiosity or gentle skepticism in conversation."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想強調件禮物「係我親自買嘅（固有事實/背景說明）」，最地道嘅句末助詞係：",
                    "options": [
                        "呢件禮物係我買㗎 (hai6 ngo5 maai5 gaa3)",
                        "呢件禮物係我買咩",
                        "呢件禮物係我買喎",
                        "呢件禮物係我買添"
                    ],
                    "answerIndex": 0,
                    "explanation": "gaa3 用於陳述事實同來源說明。"
                },
                {
                    "prompt": "當你聽到一個令人難以置信嘅消息，表示驚訝反問「真係咁樣咩？」，應該用邊個助詞？",
                    "options": [
                        "係啦",
                        "係咩 (hai6 me1)",
                        "係囉",
                        "係啫"
                    ],
                    "answerIndex": 1,
                    "explanation": "me1 表達驚訝、懷疑與反問。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "「原來你識彈鋼琴㗎？ (Oh, you know how to play piano?!)」入面嘅「㗎 (gaa4)」表達緊咩語氣？",
                    "options": [
                        "命令對方彈琴",
                        "帶有意外驚訝嘅求證與發現",
                        "極度憤怒與不滿",
                        "無奈的嘆息"
                    ],
                    "answerIndex": 1,
                    "explanation": "gaa4 疑問調表達驚訝發現新事實。"
                },
                {
                    "prompt": "廣東話入面「㗎 (gaa3)」係由邊兩個字快速合音演變而嚟？",
                    "options": [
                        "嘅 (ge3) + 呀 (aa3)",
                        "個 (go3) + 啦 (laa1)",
                        "過 (gwo3) + 咩 (me1)",
                        "咁 (gam3) + 呢 (ne1)"
                    ],
                    "answerIndex": 0,
                    "explanation": "gaa3 = 嘅 (ge3) + 呀 (aa3)。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "句子「你琴日冇去開會咩？」表達嘅核心語氣係：",
                    "options": [
                        "普通的陳述句",
                        "帶有驚訝、懷疑同反問（Didn't you go to the meeting?!）",
                        "禮貌的提議",
                        "時間的過去式"
                    ],
                    "answerIndex": 1,
                    "explanation": "me1 構成帶有懷疑同驚訝嘅反問句。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'Is that so?! / Really?!' in Cantonese (係咩):",
                    "acceptedAnswers": [
                        "係咩",
                        "hai6 me1",
                        "hai6me1"
                    ],
                    "explanation": "係咩 (hai6 me1) means 'Is that so?! / Really?!'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u13-l3": {
        "id": "hk-u13-l3",
        "subject": "cantonese",
        "unit": "hk-u13",
        "level": "B1",
        "objective": "Master 喎 (wo3 reported speech / reminder of reality) and 啫 (ze1 'only/merely' minimizing particle).",
        "prerequisites": [
            "hk-u13-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u13-l2"
            ]
        },
        "presentation": {
            "explanation": "喺廣東話嘅轉述傳達同自我謙遜入面，**喎 (wo3 / wo5)** 同 **啫 (ze1)** 係兩個最具代表性嘅助詞。\n\n### 📢 1. 「喎」嘅核心功能 (wo3 / wo5)：\n- **傳聞與轉述 (Reported Information / Hearsay)**：轉達第三者講嘅說話（\"It is said that... / He said...\"）。\n  - 例如：天文台話聽日會落大雨**喎 (wo3)**。(The observatory said it'll rain heavily tomorrow.)\n  - 例如：陳生話佢唔得閒嚟**喎 (wo5)**。(Mr. Chan said he's not free to come.)\n- **提醒現實或意外發現 (Reminder / Realization)**：提醒對方注意眼前嘅事實。\n  - 例如：件衫幾靚**喎 (wo3)**！(Hey, this shirt is quite pretty!)\n  - 例如：你未熄燈**喎 (wo3)**。(Hey, you haven't turned off the lights yet!)\n\n### 🤏 2. 「啫 (ze1)」嘅縮小與淡化功能 (Minimizer / \"Only / Merely\")：\n- **表示「只不過……而已 / 罷了」**：用於淡化嚴重性、謙虛或者減輕壓力。\n  - 例如：我講下笑**啫 (ze1)**，唔好嬲啦！(I was only joking, don't be angry!)\n  - 例如：一件十蚊**啫 (ze1)**，好平呀！(It's only ten dollars, very cheap!)\n  - 例如：小事一樁**啫 (ze1)**，唔使客氣。(It's just a small matter, you're welcome.)",
            "examples": [
                {
                    "target": "新聞話港鐵聽日開始加價喎，你知唔知呀？",
                    "reading": "San1 man4 waa6 gong2 tit3 ting1 jat6 hoi1 ci2 gaa1 gaa3 wo3, nei5 zi1 m4 zi1 aa3?",
                    "translation": "The news said the MTR is raising fares starting tomorrow; did you know? (wo3 = reported news)"
                },
                {
                    "target": "我琴晚只係瞓得四個鐘頭啫，所以今日好攰。",
                    "reading": "Ngo5 kam4 maan5 zi2 hai6 fan3 dak1 sei3 go3 zung1 tau4 ze1, so2 ji5 gam1 jat6 hou2 gui6.",
                    "translation": "I only slept for four hours last night, so I'm very tired today. (ze1 = only/merely)"
                },
                {
                    "target": "呢間茶餐廳啲奶茶幾香濃喎，值得再嚟飲！",
                    "reading": "Ni1 gaan1 caa4 caan1 teng1 di1 naai5 caa4 gei2 hoeng1 nung4 wo3, zik6 dak1 zoi3 lai4 jam2!",
                    "translation": "The milk tea at this tea restaurant is quite fragrant and rich; it's worth coming again! (wo3 = pleasant discovery)"
                },
                {
                    "target": "幫少少手啫，大家咁熟唔使咁客氣啦！",
                    "reading": "Bong1 siu2 siu2 sau2 ze1, daai6 gaa1 gam3 suk6 m4 sai2 gam3 haak3 hei3 laa1!",
                    "translation": "It was just lending a small hand; we're so close, no need to be so polite! (ze1 = humble minimizing)"
                }
            ],
            "mnemonics": [
                "喎 (wo3) = News Anchor: Whenever relaying news or messages from someone else, attach '喎' ('The weather report says 喎!').",
                "啫 (ze1) = No Big Deal: Use '啫' whenever you want to say 'just / only / don't worry about it' ('Just joking 啫!')."
            ],
            "culturalNotes": [
                "Cantonese Humility with '啫': When praised, replying '少少嘢啫 (siu2 siu2 je5 ze1 - just a small thing)' perfectly demonstrates traditional Cantonese modesty and good manners.",
                "Office Gossip & Updates: In Hong Kong offices, colleagues constantly share updates with '老細話聽日放假喎 (The boss said we have tomorrow off!)'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "當你想轉述朋友嘅說話「彼得話佢聽日嚟唔到（Peter said he can't come tomorrow）」，句末應加上邊個助詞？",
                    "options": [
                        "彼得話佢聽日嚟唔到喎 (wo3)",
                        "彼得話佢聽日嚟唔到咩",
                        "彼得話佢聽日嚟唔到啫",
                        "彼得話佢聽日嚟唔到咋"
                    ],
                    "answerIndex": 0,
                    "explanation": "wo3 專門用於轉述他人話語或傳聞。"
                },
                {
                    "prompt": "不小心說錯話時，想緩和氣氛表示「我只不過係講下笑啫（I was only joking）」，應選用：",
                    "options": [
                        "我講下笑囉",
                        "我講下笑啫 (ze1)",
                        "我講下笑喎",
                        "我講下笑咩"
                    ],
                    "answerIndex": 1,
                    "explanation": "ze1 用於淡化事情嚴重性、表示「只不過...而已」。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子「一件衫十蚊啫，好平呀！」入面嘅「啫 (ze1)」起緊咩作用？",
                    "options": [
                        "強調價格非常昂貴",
                        "淡化數量或價格，表示「只不過是 / 區區」",
                        "提議大家一起去買",
                        "懷疑這件衣服的真假"
                    ],
                    "answerIndex": 1,
                    "explanation": "ze1 表達「只不過/區區」，縮小數額。"
                },
                {
                    "prompt": "行街時發現一間好特別嘅新舖頭，讚嘆「間舖頭幾靚喎！」入面嘅「喎」表示：",
                    "options": [
                        "發現眼前事實並引起注意嘅語氣",
                        "要求退貨",
                        "這家店很難看",
                        "時間太晚了"
                    ],
                    "answerIndex": 0,
                    "explanation": "wo3 在此表示意外發現眼前事實。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "廣東話「我幫少少手啫」體現咗說話者邊種社交態度？",
                    "options": [
                        "傲慢自大",
                        "謙遜禮貌、淡化自己的功勞（Just a small help）",
                        "要求巨額回報",
                        "表示極度不情願"
                    ],
                    "answerIndex": 1,
                    "explanation": "啫 (ze1) 體現謙遜淡化功勞嘅禮貌語氣。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi for 'Just joking / Only kidding' in Cantonese (講下笑啫):",
                    "acceptedAnswers": [
                        "講下笑啫",
                        "gong2 haa5 siu3 ze1",
                        "gong2haa5siu3ze1"
                    ],
                    "explanation": "講下笑啫 (gong2 haa5 siu3 ze1) means 'Just joking / Only kidding'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u13-l4": {
        "id": "hk-u13-l4",
        "subject": "cantonese",
        "unit": "hk-u13",
        "level": "B1",
        "objective": "Master 呀嘛 (aa1 maa3 presupposed consensus), 咋 (zaa3 exclusive limit 'only'), and 添 (tim1 unexpected addition/realization).",
        "prerequisites": [
            "hk-u13-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u13-l3"
            ]
        },
        "presentation": {
            "explanation": "廣東話助詞系統嘅高階層次在於精準操控**共識預設**、**排他限制** 同埋 **意外增添**。呢三個助詞喺社交對話入面無處不在：\n\n### 🤝 1. 「呀嘛 (aa1 maa3)」—— 共識預設與理據確認：\n- **功能**：表示「正如你所知、顯然如此、不是早就說過了嗎（As you know / Obviously, isn't it?）」。\n- 說話者預設對方知道某個事實，用嚟提醒或尋求共識。\n- 例如：我琴日同你講過**㗎嘛 (gaa3 maa3)**！(I told you about this yesterday, remember!)\n- 例如：大家係好朋友**嚟㗎嘛 (lai4 gaa3 maa3)**。(We are good friends, after all.)\n\n### 🔒 2. 「咋 (zaa3)」—— 嚴格排他限制（Only / Just）：\n- **功能**：相當於 \"only / just / no more than\"，強調數量極少、時間極短或範圍受限。\n- **同「啫 (ze1)」嘅區別**：\n  - **咋 (zaa3)** 偏重於**客觀數量的排他極限**（得三個咋 = only 3, nothing more）。\n  - **啫 (ze1)** 偏重於**主觀心態的輕描淡寫**（幾蚊啫 = merely a few dollars, no big deal）。\n- 例如：全場特價剩返最後兩件**咋 (zaa3)**！(Only the last 2 pieces left!)\n- 例如：我等咗五分鐘**咋 (zaa3)**。(I only waited for 5 minutes.)\n\n### ➕ 3. 「添 (tim1)」—— 意外增添與突然醒悟：\n- **功能 1（額外增添）**：表示「還……、甚至連……也（also / on top of that / even）」，常同「仲 (zung6)」呼應。\n  - 例如：佢買咗新手機，**仲**送咗個耳筒**添 (tim1)**！\n- **功能 2（突然記起/後悔）**：表示「糟糕，突然想起來（Oops / I almost forgot!）」。\n  - 例如：哎呀，我唔記得帶鎖匙**添 (tim1)**！(Oh no, I forgot my keys!)",
            "examples": [
                {
                    "target": "你唔好唔記得聽日要交報告呀嘛，老細催緊㗎！",
                    "reading": "Nei5 m4 hou2 m4 gei3 dak1 ting1 jat6 jiu3 gaau1 bou3 gou3 aa1 maa3, lou5 sai3 ceoi1 gan2 gaa3!",
                    "translation": "Don't forget that we have to submit the report tomorrow, as you know; the boss is rushing for it! (aa1 maa3 = consensus reminder)"
                },
                {
                    "target": "間舖頭今日全場大減價，但係優惠得今日一日咋！",
                    "reading": "Gaan1 pou3 tau2 gam1 jat6 cyun4 coeng4 daai6 gaam2 gaa3, daan6 hai6 jau1 wai6 dak1 gam1 jat6 jat1 jat6 zaa3!",
                    "translation": "The shop is having a storewide sale today, but the promotion is only for today! (zaa3 = exclusive limit)"
                },
                {
                    "target": "佢今日唔單止請食午餐，仲請全公司飲下午茶添！",
                    "reading": "Keoi5 gam1 jat6 m4 daan1 zi2 cing2 sik6 ng5 caan1, zung6 cing2 cyun4 gung1 si1 jam2 haa6 ng5 caa4 tim1!",
                    "translation": "He not only treated everyone to lunch today, but also treated the whole company to afternoon tea! (tim1 = unexpected addition)"
                },
                {
                    "target": "死喇，我出門口嗰陣唔記得熄冷氣添！",
                    "reading": "Sei2 laa3, ngo5 ceot1 mun4 hau2 go2 zan6 m4 gei3 dak1 sik1 laang5 hei3 tim1!",
                    "translation": "Oh shoot, when I left the house I forgot to turn off the air conditioner! (tim1 = sudden realization/oops)"
                }
            ],
            "mnemonics": [
                "呀嘛 (aa1 maa3) = 'You know it!': Always appeals to shared knowledge ('We agreed on this 呀嘛!').",
                "咋 (zaa3) = Lock it down: Strict numerical limit ('Only 1 dollar 咋!').",
                "添 (tim1) = Bonus / Oops: Either a bonus gift ('Bonus drink 添!') or an oops realization ('Forgot keys 添!')."
            ],
            "culturalNotes": [
                "The '添 (tim1)' Oops Factor: In Hong Kong Cantonese, exclaiming '唔記得咗添！ (m4 gei3 dak1 zo2 tim1!)' is the standard way to express 'Oh gosh, it completely slipped my mind!'.",
                "Appealing to Consensus: Using '...㗎嘛 (gaa3 maa3)' in negotiation gently nudges the listener to agree without sounding confrontational."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想強調優惠「只剩下今天最後一天（strictly only today, no more）」應選用邊個助詞？",
                    "options": [
                        "優惠得今日一日咋 (zaa3)",
                        "優惠得今日一日添",
                        "優惠得今日一日咩",
                        "優惠得今日一日喎"
                    ],
                    "answerIndex": 0,
                    "explanation": "zaa3 強調客觀數額同時間嘅排他限制（only/just）。"
                },
                {
                    "prompt": "出門口突然發現自己「忘記帶錢包了（Oops realization）」，最地道嘅驚呼係：",
                    "options": [
                        "我唔記得帶銀包囉",
                        "哎呀，我唔記得帶銀包添！ (m4 gei3 dak1 daai3 ngan4 baau1 tim1!)",
                        "我唔記得帶銀包㗎",
                        "我唔記得帶銀包啫"
                    ],
                    "answerIndex": 1,
                    "explanation": "tim1 用於突然想起來某件遺漏事情嘅驚覺語氣。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "向朋友提醒雙方共同知道嘅約定「我哋約好咗七點鐘㗎嘛」，「㗎嘛」嘅作用係：",
                    "options": [
                        "向對方借錢",
                        "喚起雙方預設共識（As we agreed, remember?）",
                        "宣布取消約會",
                        "表示強烈抗議"
                    ],
                    "answerIndex": 1,
                    "explanation": "㗎嘛 (gaa3 maa3) 喚起彼此共識與預設前提。"
                },
                {
                    "prompt": "句子「佢唔單止買咗相機，仲送咗個袋添！」入面嘅「添 (tim1)」表示：",
                    "options": [
                        "額外增加、意想不到嘅附加收穫 (additional bonus)",
                        "數量減少",
                        "買錯了東西",
                        "相機壞了"
                    ],
                    "answerIndex": 0,
                    "explanation": "仲...添 (zung6...tim1) 表示額外增添。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "廣東話「得返五分鐘咋」同「得返五分鐘添」嘅語義區別係：",
                    "options": [
                        "前者強調只剩五分鐘（時間緊迫排他），後者表示意外多出了五分鐘或突然想起只剩五分鐘",
                        "兩者完全一樣",
                        "前者表示五個小時",
                        "後者只能用於句首"
                    ],
                    "answerIndex": 0,
                    "explanation": "zaa3 表排他限制（only），tim1 表意外增添或突然驚覺。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 5-character Hanzi for 'Oops, I forgot it!' in Cantonese (唔記得咗添):",
                    "acceptedAnswers": [
                        "唔記得咗添",
                        "m4 gei3 dak1 zo2 tim1",
                        "m4gei3dak1zo2tim1"
                    ],
                    "explanation": "唔記得咗添 (m4 gei3 dak1 zo2 tim1) means 'Oops, I forgot it!'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u13-l5": {
        "id": "hk-u13-l5",
        "subject": "cantonese",
        "unit": "hk-u13",
        "level": "B1",
        "objective": "Synthesize compound particle clusters (㗎啦, 㗎喎, 啫嘛, 咋嘛) in natural multi-turn Cantonese dialogue.",
        "prerequisites": [
            "hk-u13-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u13-l1",
                "hk-u13-l2",
                "hk-u13-l3",
                "hk-u13-l4"
            ]
        },
        "presentation": {
            "explanation": "喺廣東話最高階嘅真實對話入面，單個語氣助詞往往會**複合成群（Compound Particle Clusters）**！將兩個甚至三個助詞疊加喺句末，可以同時傳遞「事實說明 + 事態變化 + 情感態度」等多重維度。\n\n### 🧩 核心複合語氣助詞搭配：\n1. **㗎啦 (gaa3 laa3 / gaa3 laa1)** = 說明事實 (㗎) + 事態變化/提議 (啦)。\n   - 「我已經準備好**㗎啦 (gaa3 laa3)**。」(I am already fully prepared now!)\n   - 「你快啲去試下**㗎啦 (gaa3 laa1)**！」(You should really go try it!)\n2. **㗎喎 (gaa3 wo3)** = 說明事實 (㗎) + 轉述/提醒注意 (喎)。\n   - 「老細話呢個項目好緊要**㗎喎 (gaa3 wo3)**。」(The boss said this project is really critical, mind you!)\n3. **啫嘛 (ze1 maa3)** = 淡化 (啫) + 尋求共識 (嘛)。\n   - 「遲咗五分鐘**啫嘛 (ze1 maa3)**，唔使咁嬲呀？」(It was only five minutes late, no need to be so mad!)\n4. **咋嘛 (zaa3 maa3)** = 排他限制 (咋) + 尋求共識 (嘛)。\n   - 「我買咗一盒**咋嘛 (zaa3 maa3)**，點解話我買得多？」(I only bought one box, why say I bought too much?)\n5. **㗎咩 (gaa3 me1)** = 事實說明 (㗎) + 驚訝懷疑 (咩)。\n   - 「原來係咁**㗎咩 (gaa3 me1)**？！」(Is that really how it is?!)",
            "examples": [
                {
                    "target": "A: 份合約搞掂未呀？ B: 我一早簽好名送咗過去㗎啦！",
                    "reading": "A: Fan6 hap6 joek3 gaau2 dim3 mei6 aa3? B: Ngo5 jat1 zou2 cim1 hou2 meng2 sung3 zo2 gwo3 heoi3 gaa3 laa3!",
                    "translation": "A: Is the contract sorted yet? B: I signed and sent it over a long time ago already! (gaa3 laa3 = fact + completed state)"
                },
                {
                    "target": "天文台話晏晝可能掛八號風球㗎喎，大家快啲執嘢收工啦！",
                    "reading": "Tin1 man4 toi4 waa6 aan3 zau3 ho2 nang4 gwaa3 baat3 hou6 fung1 kau4 gaa3 wo3, daai6 gaa1 faai3 di1 zap1 je5 sau1 gung1 laa1!",
                    "translation": "The observatory says they might hoist Typhoon Signal No. 8 this afternoon, mind you; let's pack up and leave work quickly!"
                },
                {
                    "target": "大家同事互相幫手啫嘛，千祈唔使咁客氣！",
                    "reading": "Daai6 gaa1 tung4 si6 wu6 soeng1 bong1 sau2 ze1 maa3, cin1 kei4 m4 sai2 gam3 haak3 hei3!",
                    "translation": "We're colleagues helping each other out, after all; definitely no need to be so polite! (ze1 maa3 = minimizing + consensus)"
                },
                {
                    "target": "A: 嘩你買咁多嘢？ B: 我買咗兩袋新鮮蘋果咋嘛，邊有多呀！",
                    "reading": "A: Waa3 nei5 maai5 gam3 do1 je5? B: Ngo5 maai5 zo2 loeng5 doi6 san1 sin1 ping4 gwo2 zaa3 maa3, bin1 jau5 do1 aa3!",
                    "translation": "A: Wow, you bought so much stuff? B: I only bought two bags of fresh apples, that's all, how is that a lot! (zaa3 maa3 = strict limit + defense)"
                }
            ],
            "mnemonics": [
                "Particle Cluster Power: Stack your intentions! 㗎啦 (fact + done), 㗎喎 (fact + notice), 啫嘛 (minor + obvious), 咋嘛 (only + defense)!"
            ],
            "culturalNotes": [
                "The Melody of Cantonese: The layering of sentence particles gives Cantonese its uniquely expressive, melodic conversational rhythm. Mastering clusters like '㗎啦' and '啫嘛' is what separates book learners from fluent conversationalists."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "當同事問你「工作完成了沒有」，你想自信回答「我一早就全部搞定好了（事實+已完成）」，最地道嘅句末複合助詞係：",
                    "options": [
                        "我一早搞掂好㗎啦 (gaa3 laa3)",
                        "我一早搞掂好咩",
                        "我一早搞掂好添",
                        "我一早搞掂好咋"
                    ],
                    "answerIndex": 0,
                    "explanation": "㗎啦 (gaa3 laa3) 結合事實說明與完成狀態。"
                },
                {
                    "prompt": "受人感謝時謙虛回應「大家係好朋友互相幫忙而已嘛（淡化+共識）」，最自然嘅組合係：",
                    "options": [
                        "互相幫手啫嘛 (wu6 soeng1 bong1 sau2 ze1 maa3)",
                        "互相幫手㗎咩",
                        "互相幫手到爆",
                        "互相幫手得滯"
                    ],
                    "answerIndex": 0,
                    "explanation": "啫嘛 (ze1 maa3) 完美結合謙遜淡化與共識訴求。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "轉述天文台警告「下晝可能會落暴雨㗎喎」，「㗎喎」喺度嘅作用係：",
                    "options": [
                        "表示完全不相信天文台",
                        "說明官方事實並鄭重提醒對方注意 (fact assertion + reminder)",
                        "希望立刻下暴雨",
                        "表示暴雨已經停了"
                    ],
                    "answerIndex": 1,
                    "explanation": "㗎喎 (gaa3 wo3) 結合事實傳達與現實提醒。"
                },
                {
                    "prompt": "被朋友誤會買了太多零食時，辯解「我買咗一包薯片咋嘛」，「咋嘛」傳達緊：",
                    "options": [
                        "買了全店所有零食",
                        "強調客觀數量極少並尋求對方理解認同 (only one + defense)",
                        "薯片很好吃",
                        "薯片過期了"
                    ],
                    "answerIndex": 1,
                    "explanation": "咋嘛 (zaa3 maa3) 強調數量少並抗辯尋求理解。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列邊一組廣東話對話最地道咁展示咗複合語氣助詞（㗎啦 / 啫嘛）嘅自然運用？",
                    "options": [
                        "A: 你搞掂未？ B: 我一早做完㗎啦！大家互相幫手啫嘛！",
                        "A: 你去哪裡？ B: 我去學校了",
                        "A: 這是什麼？ B: 這是一本書",
                        "A: 今天幾號？ B: 今天星期五"
                    ],
                    "answerIndex": 0,
                    "explanation": "自然融合 㗎啦 同 啫嘛 嘅日常地道用法。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for the compound particle meaning 'already indeed so' (㗎啦):",
                    "acceptedAnswers": [
                        "㗎啦",
                        "gaa3 laa3",
                        "gaa3laa3",
                        "gaa3 laa1"
                    ],
                    "explanation": "㗎啦 (gaa3 laa3) is the compound sentence-final particle."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u14-l1": {
        "id": "hk-u14-l1",
        "subject": "cantonese",
        "unit": "hk-u14",
        "level": "B1",
        "objective": "Master the canonical post-adjectival comparative structure [A + Adj + 過 gwo3 + B] and specific numerical/degree differentials (貴過, 平過, 快過, 貴好多, 平五十蚊).",
        "prerequisites": [
            "hk-u13-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u13-l5"
            ]
        },
        "presentation": {
            "explanation": "廣東話嘅比較句結構同普通話、英文有好大嘅分別，千祈唔好照字面直譯！喺廣東話口語入面，表達「A 比 B 更……」嘅標準句式係「**A + 形容詞 + 過 (gwo3) + B**」——比較標記「過」係**擺喺形容詞後面**嘅！\n\n### ⚖️ 1. 核心比較句型：[A + 形容詞 + 過 + B]：\n- **基本結構**：A + 形容詞 + **過 (gwo3)** + B\n  - 例如：搭港鐵**快過 (faai3 gwo3)** 搭巴士。(Taking MTR is faster than taking a bus.)\n  - 例如：呢間舖頭啲衫**平過 (peng4 gwo3)** 嗰間。(Clothes in this shop are cheaper than that one.)\n  - 例如：佢年紀**大過 (daai6 gwo3)** 我。(He is older than me.)\n- 💡 **防錯警示**：千祈唔好講「*A 比 B 貴*」，雖然聽得明，但喺廣東話口語入面極之唔地道，聽落好似書面語或者教科書翻譯。\n\n### 📏 2. 加上差額與程度差別：[A + 形容詞 + 過 + B + 差額 / 好多 / 啲]：\n- 如果想指出具體差幾多或者程度差距，將差額直接擺喺句尾：\n  - **A + 形容詞 + 過 + B + 具體金額/數量**：\n    - 呢個套餐**貴過**嗰個**二十蚊**。(This set is $20 more expensive than that one.)\n  - **A + 形容詞 + 過 + B + 好多 (hou2 do1) / 啲 (di1)**：\n    - 今日嘅氣溫**凍過**琴日**好多**。(Today's temperature is much colder than yesterday's.)\n    - 呢部相機**輕過**舊款**少少**。(This camera is a little bit lighter than the old model.)",
            "examples": [
                {
                    "target": "搭港鐵去中環快過搭巴士好多，而且唔會塞車。",
                    "reading": "Daap3 gong2 tit3 heoi3 zung1 waan4 faai3 gwo3 daap3 baa1 si2 hou2 do1, ji4 ce2 m4 wui5 sak1 ce1.",
                    "translation": "Taking the MTR to Central is much faster than taking the bus, and there are no traffic jams."
                },
                {
                    "target": "呢部平板電腦平過嗰部成一千蚊，性價比好高！",
                    "reading": "Ni1 bou6 ping4 baan2 din6 nou5 peng4 gwo3 go2 bou6 seng4 jat1 cin1 man1, sing3 gaa3 bei2 hou2 gou1!",
                    "translation": "This tablet is a whole $1,000 cheaper than that one; the price-performance ratio is very high!"
                },
                {
                    "target": "佢跑步快過我少少，但係游水就我勁過佢。",
                    "reading": "Keoi5 paau2 bou6 faai3 gwo3 ngo5 siu2 siu2, daan6 hai6 jau4 seoi2 zau6 ngo5 ging6 gwo3 keoi5.",
                    "translation": "He runs a little faster than me, but when it comes to swimming I am better than him."
                },
                {
                    "target": "呢間茶餐廳嘅蛋撻好食過出面好多名牌連鎖店。",
                    "reading": "Ni1 gaan1 caa4 caan1 teng1 ge3 daan6 taat1 hou2 sik6 gwo3 ceot1 min6 hou2 do1 meng4 paai4 lin4 so2 dim3.",
                    "translation": "The egg tarts at this tea restaurant are tastier than many famous brand chain stores outside."
                }
            ],
            "mnemonics": [
                "Cantonese Comparative Golden Rule: Adjective FIRST, then 過 (gwo3)! [快過 faai3 gwo3, 貴過 gwai3 gwo3, 平過 peng4 gwo3]!",
                "Differentials go to the caboose: Put exact numbers or '好多' at the very end of the sentence (貴過佢五十蚊)!"
            ],
            "culturalNotes": [
                "Hong Kong Commuting Wisdom: In conversation about Hong Kong transport, comparing routes with '快過 (faai3 gwo3)' and '平過 (peng4 gwo3)' is daily bread due to the dense network of MTR, double-decker buses, minibuses, and ferries.",
                "Shopping Bargains: When comparing markets or electronics stores in Sham Shui Po (深水埗), asking '呢度有冇平過出面？' is the quintessential smart shopper phrase."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想表達「搭地鐵比搭巴士更快」，最純正地道嘅廣東話句式係：",
                    "options": [
                        "搭地鐵快過搭巴士 (daap3 dei6 tit3 faai3 gwo3 daap3 baa1 si2)",
                        "搭地鐵比搭巴士快",
                        "搭地鐵過巴士快",
                        "搭地鐵快搭巴士"
                    ],
                    "answerIndex": 0,
                    "explanation": "廣東話標準比較句為 [A + 形容詞 + 過 + B] (快過)."
                },
                {
                    "prompt": "想表達「這件衣服比那件便宜五十元」，差額「五十蚊」應該擺喺邊個位置？",
                    "options": [
                        "件衫五十蚊平過嗰件",
                        "件衫平過嗰件五十蚊 (peng4 gwo3 go2 gin6 ng5 sap6 man1)",
                        "五十蚊件衫平過嗰件",
                        "件衫平五十蚊過嗰件"
                    ],
                    "answerIndex": 1,
                    "explanation": "具體差額擺喺 [A + 形容詞 + 過 + B] 嘅最尾端。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子「今日嘅天氣熱過琴日好多」表達嘅意思係：",
                    "options": [
                        "今天和昨天一樣熱",
                        "今天的天氣比昨天熱得多 (Today is much hotter than yesterday)",
                        "今天沒有昨天熱",
                        "昨天比今天熱"
                    ],
                    "answerIndex": 1,
                    "explanation": "熱過...好多 表示熱得多。"
                },
                {
                    "prompt": "點樣用廣東話講「哥哥年紀比我大三歲」？",
                    "options": [
                        "哥哥大過我三歲 (go4 go1 daai6 gwo3 ngo5 saam1 seoi3)",
                        "哥哥比我大三歲",
                        "哥哥三大過我歲",
                        "哥哥過我大三歲"
                    ],
                    "answerIndex": 0,
                    "explanation": "大過我三歲符合 [形容詞 + 過 + 對象 + 差額] 規則。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "關於廣東話「過 (gwo3)」比較句，下列邊一項說明完全正確？",
                    "options": [
                        "「過」字必須擺在形容詞前面（比字句型）",
                        "「過」字必須緊跟在形容詞後面，構成「A + 形容詞 + 過 + B」（如貴過、快過）",
                        "廣東話不能進行物品比較",
                        "「過」字只能用於表示過去完成"
                    ],
                    "answerIndex": 1,
                    "explanation": "形容詞在前，過在後是粵語比較句鐵律。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'more expensive than' in Cantonese (貴過):",
                    "acceptedAnswers": [
                        "貴過",
                        "gwai3 gwo3",
                        "gwai3gwo3"
                    ],
                    "explanation": "貴過 (gwai3 gwo3) means 'more expensive than'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u14-l2": {
        "id": "hk-u14-l2",
        "subject": "cantonese",
        "unit": "hk-u14",
        "level": "B1",
        "objective": "Master incremental comparatives using 仲 (zung6 - even more / even) with and without explicit comparison targets (仲平, 仲好食, 仲快過佢).",
        "prerequisites": [
            "hk-u14-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u14-l1"
            ]
        },
        "presentation": {
            "explanation": "當你想喺現有嘅基礎上再進一步強調「更加、甚至更……」嘅時候，廣東話最強大嘅副詞就係 **仲 (zung6)**！\n\n### 🚀 1. 單獨使用：[仲 (zung6) + 形容詞]（Even more...）：\n- 用於兩者對比，表示後者比前者「更加……」：\n  - 呢間舖頭啲嘢已經好平，但係對面嗰間**仲平 (zung6 peng4)**！(Items in this shop are already cheap, but the opposite one is even cheaper!)\n  - 飲熱奶茶好飲，但係凍奶茶**仲正 (zung6 zeng3)**！(Hot milk tea is good, but iced milk tea is even better!)\n\n### 🏎️ 2. 結合「過 (gwo3)」句型：[仲 + 形容詞 + 過 + B]（Even more Adj than B）：\n- 當同時明確講出比較對象嗰陣，將「仲」擺喺形容詞前面，「過」擺喺後面：\n  - 佢行路**仲快過 (zung6 faai3 gwo3)** 跑。(He walks even faster than running.)\n  - 今日嘅氣溫**仲凍過 (zung6 dung3 gwo3)** 琴日添！(Today's temperature is even colder than yesterday's!)\n  - 呢部新相機嘅畫質**仲靚過 (zung6 leng3 gwo3)** 舊年嗰部旗艦機。(This new camera's picture quality is even nicer than last year's flagship.)",
            "examples": [
                {
                    "target": "A套餐已經好抵食，但係B套餐仲平十蚊添！",
                    "reading": "A tou3 caan1 ji5 ging1 hou2 dai2 sik6, daan6 hai6 B tou3 caan1 zung6 peng4 sap6 man1 tim1!",
                    "translation": "Set A is already great value, but Set B is even cheaper by $10!"
                },
                {
                    "target": "陳生做嘢好勤力，但係張小姐仲勤力過佢。",
                    "reading": "Can4 saang1 zou6 je5 hou2 kan4 lik6, daan6 hai6 Zoeng1 siu2 ze2 zung6 kan4 lik6 gwo3 keoi5.",
                    "translation": "Mr. Chan works very diligently, but Ms. Cheung is even more diligent than him."
                },
                {
                    "target": "呢度啲芒果糯米糍仲好食過我喺泰國食嗰啲！",
                    "reading": "Ni1 dou6 di1 mong1 gwo2 no6 mai5 ci4 zung6 hou2 sik6 gwo3 ngo5 hai2 Taai3 gwok3 sik6 go2 di1!",
                    "translation": "The mango mochi here is even tastier than what I ate in Thailand!"
                },
                {
                    "target": "條路咁塞車，我哋行路過去仲快過搭的士啦。",
                    "reading": "Tiu4 lou6 gam3 sak1 ce1, ngo5 dei6 haang4 lou6 gwo3 heoi3 zung6 faai3 gwo3 daap3 dik1 si2 laa1.",
                    "translation": "With the road so congested, walking over is even faster than taking a taxi."
                }
            ],
            "mnemonics": [
                "仲 (zung6) = 'Even': Think of '仲' as the booster rocket placed right before the adjective (仲平 zung6 peng4, 仲好 zung6 hou2, 仲快過 zung6 faai3 gwo3)!",
                "Formula: [仲 + Adj + 過 + Target] = Even more Adj than Target."
            ],
            "culturalNotes": [
                "Food Recommendations in Hong Kong: Foodies (吃貨) frequently use '仲好食 (zung6 hou2 sik6)' and '仲抵 (zung6 dai2)' when recommending hidden gem eateries in neighborhood alleyways.",
                "Efficiency Culture: '行路仲快過搭車' is a famous Hong Kong reality during peak rush hour traffic in Central or Causeway Bay."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想表達「這家店的點心比那家甚至更好吃」，最恰當嘅廣東話係：",
                    "options": [
                        "呢間舖頭啲點心仲好食過嗰間 (zung6 hou2 sik6 gwo3 go2 gaan1)",
                        "呢間舖頭啲點心也很好吃",
                        "呢間舖頭啲點心沒有那間好吃",
                        "呢間舖頭啲點心最難吃"
                    ],
                    "answerIndex": 0,
                    "explanation": "仲好食過... 精準表達「甚至比...更好吃」。"
                },
                {
                    "prompt": "副詞「仲 (zung6)」擺喺形容詞前面時嘅核心意思係：",
                    "options": [
                        "完全不",
                        "更加、甚至更…… (even / even more)",
                        "只有一點點",
                        "曾經"
                    ],
                    "answerIndex": 1,
                    "explanation": "仲 (zung6) 用於遞進比較，表示「更加/甚至更」。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "塞車時感嘆「行路仲快過搭的士」，意思係：",
                    "options": [
                        "的士速度極快",
                        "步行前往比搭的士還要更快 (Walking is even faster than taxi)",
                        "不能走路",
                        "找不到的士"
                    ],
                    "answerIndex": 1,
                    "explanation": "仲快過搭的士表示步行甚至比坐車更快。"
                },
                {
                    "prompt": "句子「今日嘅天氣仲熱過琴日添！」入面嘅「仲...添」起到咩修辭效果？",
                    "options": [
                        "強調今日氣溫比昨日更上一層樓嘅酷熱程度 (Even hotter on top of that)",
                        "表示今天天氣轉涼",
                        "表示今天下雪了",
                        "表示明天不用上班"
                    ],
                    "answerIndex": 0,
                    "explanation": "仲...添 強化遞進對比與感嘆。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "廣東話「仲平過嗰間十蚊」嘅完整語法分析係：",
                    "options": [
                        "仲（更加）+ 平（形容詞）+ 過（比較標記）+ 嗰間（比較對象）+ 十蚊（差額）",
                        "這是一個否定句",
                        "平字擺錯了位置",
                        "十蚊是主語"
                    ],
                    "answerIndex": 0,
                    "explanation": "標準遞進比較句結構分析。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'even cheaper' in Cantonese (仲平):",
                    "acceptedAnswers": [
                        "仲平",
                        "zung6 peng4",
                        "zung6peng4"
                    ],
                    "explanation": "仲平 (zung6 peng4) means 'even cheaper'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u14-l3": {
        "id": "hk-u14-l3",
        "subject": "cantonese",
        "unit": "hk-u14",
        "level": "B1",
        "objective": "Master equative comparisons with 同...一樣 (as... as) and negative inequality with 冇...咁 (not as... as).",
        "prerequisites": [
            "hk-u14-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u14-l2"
            ]
        },
        "presentation": {
            "explanation": "除咗「高過/貴過」呢類差別比較，日常生活中極度常用嘅仲有**同等比較（As... as）** 同埋 **否定不等比較（Not as... as）**。\n\n### 🤝 1. 同等比較句型：[A + 同 (tung4) + B + 一樣 (jat1 joeng6) + (咁 gam3 + 形容詞)]：\n- 表示 A 同 B 喺某方面**程度完全相同**（As ... as / The same）：\n  - **A 同 B 一樣**（兩者相同）：呢兩件衫價錢**一樣**。(These two shirts have the same price.)\n  - **A 同 B 一樣 + 咁 (gam3) + 形容詞**：\n    - 佢細佬同佢**一樣咁高**。(His younger brother is just as tall as him.)\n    - 呢間舖頭同嗰間**一樣咁好食**。(This shop is just as delicious as that one.)\n\n### ❌ 2. 否定不等比較句型：[A + 冇 (mou5) + B + 咁 (gam3) + 形容詞]：\n- 相當於英文 \"A is not as [Adj] as B\"（普通話「A 沒有 B 那麼……」）：\n  - **巴士冇港鐵咁快**。(Buses are not as fast as the MTR.)\n  - **今日冇琴日咁凍**。(Today is not as cold as yesterday.)\n  - **呢度啲海鮮冇西貢咁平**。(The seafood here is not as cheap as in Sai Kung.)\n- 💡 喺廣東話入面，極少用「*唔似*」或者「*不比*」，口語中**99%都係用「冇...咁... (mou5...gam3...)」**！",
            "examples": [
                {
                    "target": "佢兩個孖生兄弟生得一模一樣，身型同面相都一樣咁似。",
                    "reading": "Keoi5 loeng5 go3 maa1 sang1 hing1 dai6 saang1 dak1 jat1 mou4 jat1 joeng6, san1 jing4 tung4 min6 soeng3 dou1 jat1 joeng6 gam3 ci5.",
                    "translation": "The two twin brothers look identical, having the exact same build and facial appearance."
                },
                {
                    "target": "搭小巴冇搭港鐵咁方便，因為有時要排隊等車。",
                    "reading": "Daap3 siu2 baa1 mou5 daap3 gong2 tit3 gam3 fong1 bin6, jan1 wai6 jau5 si4 jiu3 paai4 deoi2 dang2 ce1.",
                    "translation": "Taking a minibus is not as convenient as taking the MTR, because sometimes you have to queue for a van."
                },
                {
                    "target": "呢杯無糖奶茶同普通奶茶一樣咁香濃，但係健康好多！",
                    "reading": "Ni1 bui1 mou4 tong4 naai5 caa4 tung4 pou2 tung1 naai5 caa4 jat1 joeng6 gam3 hoeng1 nung4, daan6 hai6 gin6 hong1 hou2 do1!",
                    "translation": "This sugar-free milk tea is just as rich and fragrant as regular milk tea, but much healthier!"
                },
                {
                    "target": "我部舊手機冇新機咁順暢，用得耐會卡卡地。",
                    "reading": "Ngo5 bou6 gau6 sau2 gei1 mou5 san1 gei1 gam3 seon6 coeng3, jung6 dak1 noi6 wui5 kaa1 kaa2 dei2.",
                    "translation": "My old phone is not as smooth as the new phone; after prolonged use it lags slightly."
                }
            ],
            "mnemonics": [
                "Equal = 同...一樣咁 (tung4...jat1 joeng6 gam3 + Adj) — like two balanced weights on a scale!",
                "Less than = 冇...咁 (mou5...gam3 + Adj) — literally 'has not reached that level of Adj'!"
            ],
            "culturalNotes": [
                "Sai Kung Seafood Landmark: In Hong Kong culinary comparisons, '冇西貢咁平 / 冇鯉魚門咁新鮮' references iconic seafood dining destinations (Sai Kung and Lei Yue Mun).",
                "Polite Disagreement with '冇...咁': Saying '冇嗰個咁好 (not as good as that one)' is a polite, indirect way to critique without sounding harsh."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想表達「這部手提電腦和那部一樣輕」，最地道嘅廣東話係：",
                    "options": [
                        "呢部電腦同嗰部一樣咁輕 (tung4 go2 bou6 jat1 joeng6 gam3 heng1)",
                        "呢部電腦像那部輕",
                        "呢部電腦比那部一樣",
                        "呢部電腦輕同嗰部"
                    ],
                    "answerIndex": 0,
                    "explanation": "[A + 同 + B + 一樣咁 + 形容詞] 係同等比較標準句式。"
                },
                {
                    "prompt": "想表達「搭巴士沒有搭地鐵那麼快（not as fast as）」，應選用邊個句型？",
                    "options": [
                        "搭巴士快過搭地鐵",
                        "搭巴士冇搭地鐵咁快 (mou5 daap3 dei6 tit3 gam3 faai3)",
                        "搭巴士同搭地鐵一樣快",
                        "搭巴士最快"
                    ],
                    "answerIndex": 1,
                    "explanation": "[A + 冇 + B + 咁 + 形容詞] 表示「A 不如 B 那麼……」。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子「今日嘅天氣冇琴日咁凍」表示：",
                    "options": [
                        "今天比昨天更冷",
                        "今天沒有昨天那麼冷（天氣回暖了一點）",
                        "今天和昨天一樣冷",
                        "今天下大雪了"
                    ],
                    "answerIndex": 1,
                    "explanation": "冇...咁凍 表示不如昨天冷。"
                },
                {
                    "prompt": "稱讚兩位同事「工作表現一樣咁優秀」，最合適嘅廣東話表達係：",
                    "options": [
                        "佢哋兩個做嘢一樣咁出色 (jat1 joeng6 gam3 ceot1 sik1)",
                        "佢哋兩個都唔識做嘢",
                        "A 做嘢好過 B 好多",
                        "B 做嘢好過 A 好多"
                    ],
                    "answerIndex": 0,
                    "explanation": "一樣咁出色表達同等高度優秀。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "在廣東話中，否定比較「A不如B那麼漂亮」的標準句式是：",
                    "options": [
                        "A 唔似 B 咁靚",
                        "A 冇 B 咁靚 (A mou5 B gam3 leng3)",
                        "A 不比 B 靚",
                        "A 冇 B 靚過"
                    ],
                    "answerIndex": 1,
                    "explanation": "[A 冇 B 咁 + Adj] 是粵語絕對優勢口語句型。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi for 'just as delicious' in Cantonese (一樣咁好食):",
                    "acceptedAnswers": [
                        "一樣咁好食",
                        "jat1 joeng6 gam3 hou2 sik6",
                        "jat1joeng6gam3hou2sik6"
                    ],
                    "explanation": "一樣咁好食 (jat1 joeng6 gam3 hou2 sik6) means 'just as delicious'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u14-l4": {
        "id": "hk-u14-l4",
        "subject": "cantonese",
        "unit": "hk-u14",
        "level": "B1",
        "objective": "Master superlative expressions with 最 (zeoi3), top rankings (數一數二 sou2 jat1 sou2 ji6), and comparative extremes in quality and preference.",
        "prerequisites": [
            "hk-u14-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u14-l3"
            ]
        },
        "presentation": {
            "explanation": "當比較嘅範圍擴大到全體或者群體之冠，我哋就會用到**最高級（Superlatives）**！廣東話入面表達「最……」除咗經典嘅 **最 (zeoi3)**，仲有好多地道嘅頂級評價詞彙。\n\n### 🏆 1. 核心最高級：[最 (zeoi3) + 形容詞]：\n- **基本結構**：直接喺形容詞前面加上「最 (zeoi3)」：\n  - **最靚 (zeoi3 leng3)**：最漂亮 / 最優質。\n  - **最平 (zeoi3 peng4)**：最便宜。\n  - **最正 (zeoi3 zeng3)**：最棒、最頂級、最正宗。\n  - **最抵食 (zeoi3 dai2 sik6)**：性價比最高、最划算。\n- **限定範圍**：通常加喺前面或後面：\n  - **全香港最出名 (cyun4 hoeng1 gong2 zeoi3 ceot1 meng2)**：Most famous in all of Hong Kong。\n  - **全公司做得最好 (cyun4 gung1 si1 zou6 dak1 zeoi3 hou2)**：Best performer in the entire company。\n\n### 🥇 2. 地道頂級排名表達法：\n- **數一數二 (sou2 jat1 sou2 ji6)**：屈指一數排第一或第二，頂尖級別。\n  - 例如：呢間酒樓嘅燒鵝喺香港**數一數二**！(The roast goose here is among the top 1 or 2 in Hong Kong!)\n- **頂級 (ding2 kap1) / 一流 (jat1 lau4)**：最高品質。\n  - 例如：呢度嘅服務同水準真係**一流**！(The service and standard here are truly first-class!)",
            "examples": [
                {
                    "target": "呢間老字號茶餐廳嘅菠蘿油同絲襪奶茶係全香港最正嘅！",
                    "reading": "Ni1 gaan1 lou5 zi6 hou6 caa4 caan1 teng1 ge3 bo1 lo4 jau4 tung4 si1 mat6 naai5 caa4 hai6 cyun4 hoeng1 gong2 zeoi3 zeng3 ge3!",
                    "translation": "The pineapple bun with butter and silk-stocking milk tea at this heritage cha chaan teng are the best in all of Hong Kong!"
                },
                {
                    "target": "深水埗呢間電器舖啲配件全場最平，好多人都專程過嚟買。",
                    "reading": "Sam1 seoi2 bou2 ni1 gaan1 din6 hei3 pou3 di1 pui3 gin2 cyun4 coeng4 zeoi3 peng4, hou2 do1 jan4 dou1 zyun1 cing4 gwo3 lai4 maai5.",
                    "translation": "The accessories at this Sham Shui Po electronics shop are the cheapest storewide; many people make a special trip here to buy."
                },
                {
                    "target": "佢嘅廣東話發音喺全班同學入面數一數二咁標準。",
                    "reading": "Keoi5 ge3 gong2 dung1 waa2 faat3 jam1 hai2 cyun4 baan1 tung4 hok6 jap6 min6 sou2 jat1 sou2 ji6 gam3 biu1 zeon2.",
                    "translation": "His Cantonese pronunciation is among the top one or two most standard in the entire class."
                },
                {
                    "target": "健康永遠係人生最重要嘅財富，賺幾多錢都比唔上。",
                    "reading": "Gin6 hong1 wing5 jyun5 hai6 jan4 sang1 zeoi3 zung6 jiu3 ge3 coi4 fu3, zaan6 gei2 do1 cin2 dou1 bei2 m4 soeng5.",
                    "translation": "Health is forever the most important wealth in life; no amount of money earned can compare."
                }
            ],
            "mnemonics": [
                "最 (zeoi3) = The Absolute #1: zeoi3 zeng3 (the absolute best), zeoi3 peng4 (the cheapest), zeoi3 leng3 (the prettiest)!",
                "數一數二 (sou2 jat1 sou2 ji6): Count on fingers 1 and 2 — representing undisputed elite status!"
            ],
            "culturalNotes": [
                "The Word '正 (zeng3)': In Hong Kong culture, '正 (zeng3)' is the ultimate colloquial compliment covering taste, aesthetics, atmosphere, and coolness. Calling something '最正' is the highest accolade.",
                "Michelin & Street Food: Street food stalls often advertise '全港最平最抵食' on banners to attract local food lovers."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想稱讚一間舖頭嘅蛋撻係「全香港最好、最棒的（the absolute best in HK）」，應選用：",
                    "options": [
                        "全香港最正嘅蛋撻 (cyun4 hoeng1 gong2 zeoi3 zeng3 ge3 daan6 taat1)",
                        "全香港幾平嘅蛋撻",
                        "全香港冇蛋撻",
                        "全香港熱熱地嘅蛋撻"
                    ],
                    "answerIndex": 0,
                    "explanation": "最正 (zeoi3 zeng3) 代表頂級、最好。"
                },
                {
                    "prompt": "成語「數一數二 (sou2 jat1 sou2 ji6)」喺日常評價入面嘅意思係：",
                    "options": [
                        "數目只有一至兩個",
                        "排名頂尖、名列前茅 (ranked top 1 or 2)",
                        "算術能力很差",
                        "倒數第一名"
                    ],
                    "answerIndex": 1,
                    "explanation": "數一數二表示頂尖前茅。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "深水埗買電腦配件「全場最平」，「最平 (zeoi3 peng4)」嘅意思係：",
                    "options": [
                        "價格最昂貴",
                        "價格最便宜、划算 (the cheapest storewide)",
                        "質量最差",
                        "數量最多"
                    ],
                    "answerIndex": 1,
                    "explanation": "最平 = 最便宜。"
                },
                {
                    "prompt": "句子「健康係最重要嘅」入面嘅「最重要」體現咗邊種語法等級？",
                    "options": [
                        "最高級 (Superlative)",
                        "比較級 (Comparative)",
                        "平級 (Equative)",
                        "否定級 (Negative)"
                    ],
                    "answerIndex": 0,
                    "explanation": "最 (zeoi3) 構成最高級。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "在廣東話中，形容一間餐廳食物品質達到了「全港頂尖第一流」，最地道的讚譽是：",
                    "options": [
                        "啲嘢食普通極了",
                        "水準一流，喺香港數一數二最正！ (First-class standard, top 1 or 2 best in HK)",
                        "完全冇味道",
                        "價錢貴到暈但唔好食"
                    ],
                    "answerIndex": 1,
                    "explanation": "結合咗 一流、數一數二 同 最正。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for 'the best / top-notch' in Cantonese (最正):",
                    "acceptedAnswers": [
                        "最正",
                        "zeoi3 zeng3",
                        "zeoi3zeng3"
                    ],
                    "explanation": "最正 (zeoi3 zeng3) means 'the best / top-notch'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u14-l5": {
        "id": "hk-u14-l5",
        "subject": "cantonese",
        "unit": "hk-u14",
        "level": "B1",
        "objective": "Synthesize 过 (gwo3), 仲 (zung6), 冇...咁 (mou5...gam3), 同...一樣 (tung4...jat1 joeng6), and 最 (zeoi3) in shopping comparisons, itinerary planning, and restaurant reviews.",
        "prerequisites": [
            "hk-u14-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u14-l1",
                "hk-u14-l2",
                "hk-u14-l3",
                "hk-u14-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢個單元嘅綜合應用課入面，我哋會將 **差別比較 (貴過/快過)**、**遞進比較 (仲平/仲快過)**、**同等與否定比較 (同...一樣 / 冇...咁)** 以及 **最高級 (最正/最抵)** 融會貫通，應用喺真實嘅香港生活決策（選購電子產品、選擇交通路線、挑選餐廳）之中！\n\n### 📱 實用綜合決策對話示範：\n1. **買手機比較 (Gadget Shopping)**：\n   - 「A型號**貴過**B型號五百蚊，但係相機功能**仲靚過**佢好多。」\n   - 「C型號**冇**A型號**咁順暢**，不過價錢係全場**最平**嘅！」\n2. **交通出行選擇 (Transit Choices)**：\n   - 「搭港鐵**快過**搭巴士，但係巴士車費**平過**港鐵五蚊。」\n   - 「紅van（紅色小巴）行高速**仲快過**的士添，不過收費就**同**的士**差唔多一樣咁貴**！」\n3. **餐廳點評 (Dining Reviews)**：\n   - 「呢間老字號嘅乾炒牛河**好食過**出面好多酒樓，而且價錢**冇**中環**咁貴**，真係全區**最抵食**！」",
            "examples": [
                {
                    "target": "A舖頭嘅海鮮平過B舖頭少少，但係B舖頭嘅龍蝦新鮮過A舖頭好多！",
                    "reading": "A pou3 tau2 ge3 hoi2 sin1 peng4 gwo3 B pou3 tau2 siu2 siu2, daan6 hai6 B pou3 tau2 ge3 lung4 haa1 san1 sin1 gwo3 A pou3 tau2 hou2 do1!",
                    "translation": "Shop A's seafood is a little cheaper than Shop B, but Shop B's lobster is much fresher than Shop A's!"
                },
                {
                    "target": "搭過海巴士冇搭港鐵咁快，但係坐得好舒服，仲平幾蚊添。",
                    "reading": "Daap3 gwo3 hoi2 baa1 si2 mou5 daap3 gong2 tit3 gam3 faai3, daan6 hai6 co5 dak1 hou2 syu1 fuk6, zung6 peng4 gei2 man1 tim1.",
                    "translation": "Taking the cross-harbour bus is not as fast as the MTR, but it's very comfortable to sit on, and even cheaper by a few dollars."
                },
                {
                    "target": "呢兩部手提電腦外形同重量都一樣咁輕，不過呢部嘅電池耐用過嗰部好多。",
                    "reading": "Ni1 loeng5 bou6 sau2 tai4 din6 nou5 ngoi6 jing4 tung4 zung6 loeng6 dou1 jat1 joeng6 gam3 heng1, bat1 gwo3 ni1 bou6 ge3 din6 ci4 noi6 jung6 gwo3 go2 bou6 hou2 do1.",
                    "translation": "These two laptops have the same appearance and are just as light in weight, but this one's battery is much more durable than that one's."
                },
                {
                    "target": "呢間茶餐廳嘅凍奶茶係全區數一數二最正嘅，大家都話好飲過出面名牌舖！",
                    "reading": "Ni1 gaan1 caa4 caan1 teng1 ge3 dung3 naai5 caa4 hai6 cyun4 keoi1 sou2 jat1 sou2 ji6 zeoi3 zeng3 ge3, daai6 gaa1 dou1 waa6 hou2 jam2 gwo3 ceot1 min6 meng4 paai4 pou3!",
                    "translation": "The iced milk tea at this tea restaurant is top 1 or 2 best in the entire district; everyone says it's tastier than big brand shops outside!"
                }
            ],
            "mnemonics": [
                "Comparison Master Suite: [Adj + 過] (Comparative) → [仲 + Adj + 過] (Incremental) → [冇...咁] (Negative) → [同...一樣] (Equal) → [最 + Adj] (Superlative)!"
            ],
            "culturalNotes": [
                "Smart Consumer Culture in HK: Hong Kong consumers are fiercely discerning. Using comparative language like '平過', '仲抵食', '冇咁貴', and '最正' is the universal language of local shopping and dining wisdom."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想全面比較兩條路線「搭巴士比搭地鐵便宜（平過），但沒有地鐵那麼快（冇咁快）」，最地道嘅廣東話係：",
                    "options": [
                        "搭巴士平過搭地鐵，但係冇地鐵咁快 (peng4 gwo3 daap3 dei6 tit3, daan6 hai6 mou5 dei6 tit3 gam3 faai3)",
                        "搭巴士比地鐵便宜，沒有地鐵快",
                        "搭巴士過地鐵平，地鐵快過巴士冇",
                        "巴士地鐵一樣快一樣平"
                    ],
                    "answerIndex": 0,
                    "explanation": "完美融合「平過」與「冇...咁快」兩種核心比較句式。"
                },
                {
                    "prompt": "當你想總結一間餐廳是「全區最划算、最好吃（最抵食、最正）」時，應話：",
                    "options": [
                        "呢間餐廳係全區最抵食、最正嘅！",
                        "呢間餐廳難食過出面",
                        "呢間餐廳冇人去食",
                        "呢間餐廳貴到爆但好難食"
                    ],
                    "answerIndex": 0,
                    "explanation": "最抵食與最正精準表達最高級讚譽。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子「呢部新手機畫質靚過舊機好多，而且重量同舊機一樣咁輕」展示咗邊兩種比較句？",
                    "options": [
                        "差別比較（靚過...好多）與同等比較（同...一樣咁輕）",
                        "只有否定比較",
                        "只有最高級",
                        "沒有任何比較"
                    ],
                    "answerIndex": 0,
                    "explanation": "結合咗 [Adj + 過 + 好多] 同 [同...一樣咁 + Adj]。"
                },
                {
                    "prompt": "喺挑選商品時，表示「這個雖然便宜，但對面那家甚至更便宜（仲平）」，「仲 (zung6)」嘅作用係：",
                    "options": [
                        "表示遞進比較（even cheaper）",
                        "表示否定",
                        "表示過去時態",
                        "表示問句"
                    ],
                    "answerIndex": 0,
                    "explanation": "仲表遞進比較。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列邊一句廣東話最完整、最地道咁展示咗「多維度比較與消費決策」？",
                    "options": [
                        "呢間茶餐廳嘅奶茶好飲過出面，價錢冇中環咁貴，仲要係全區最正添！",
                        "今天我去中環買了一本書",
                        "他在房間裡面看電視",
                        "這部電腦可以開機"
                    ],
                    "answerIndex": 0,
                    "explanation": "融合咗 好飲過、冇...咁貴、仲要係、最正添 等全部單元精華。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi for 'best value to eat / most cost-effective food' in Cantonese (最抵食):",
                    "acceptedAnswers": [
                        "最抵食",
                        "zeoi3 dai2 sik6",
                        "zeoi3dai2sik6"
                    ],
                    "explanation": "最抵食 (zeoi3 dai2 sik6) means 'best value to eat / most cost-effective food'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u15-l1": {
        "id": "hk-u15-l1",
        "subject": "cantonese",
        "unit": "hk-u15",
        "level": "B1",
        "objective": "Master time-contingent potential complements using 切 (cit3 - to make it in time: 做得切/做唔切, 趕得切/趕唔切, 追得切/追唔切).",
        "prerequisites": [
            "hk-u14-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u14-l5"
            ]
        },
        "presentation": {
            "explanation": "廣東話嘅「**可能補語 (Potential Complements)**」係表達「做唔做到某個結果、能否在客觀條件下達成」嘅核心句型。喺日常返工、追巴士、交報告等時間緊迫嘅語境入面，最靈魂嘅補語就係 **切 (cit3)**！\n\n### ⏱️ 1. 「切 (cit3)」嘅語法意義：\n- 「切 (cit3)」喺廣東話可能補語入面專門表示「**在限定時間內及時趕上、及時做完 (in time / by deadline)**」。\n\n### 🟢 2. 肯定結構：[動詞 + 得 (dak1) + 切 (cit3)]（Can make it in time）：\n- **做得切 (zou6 dak1 cit3)**：能夠在截止時間前及時做完（Can finish in time）。\n  - 例如：仲有兩個鐘頭，我一定**做得切 (zou6 dak1 cit3)**！\n- **趕得切 (gon2 dak1 cit3)**：能夠及時趕到/趕搭上（Can make it in time / catch the train）。\n  - 例如：快啲行啦，我哋仲**趕得切 (gon2 dak1 cit3)** 搭尾班車！\n\n### 🔴 3. 否定結構：[動詞 + 唔 (m4) + 切 (cit3)]（Cannot make it in time）：\n- **做唔切 (zou6 m4 cit3)**：時間唔夠、來不及做完（Cannot finish in time）。\n  - 例如：工作量太大，我一個人真係**做唔切 (zou6 m4 cit3)** 呀！\n- **趕唔切 (gon2 m4 cit3)**：來不及趕到、錯過時間（Cannot make it in time）。\n  - 例如：塞車塞得咁勁，我驚**趕唔切 (gon2 m4 cit3)** 去機場添。\n- **追唔切 (zeoi1 m4 cit3)**：進度落後太多，來不及追趕追平（Cannot catch up in time）。",
            "examples": [
                {
                    "target": "老細催聽日朝早交報告，我今晚通宵都未必做得切呀！",
                    "reading": "Lou5 sai3 ceoi1 ting1 jat6 ziu1 zou2 gaau1 bou3 gou3, ngo5 gam1 maan5 tung1 siu1 dou1 mei6 bit1 zou6 dak1 cit3 aa3!",
                    "translation": "The boss is rushing for the report tomorrow morning; even if I pull an all-nighter tonight I might not make it in time!"
                },
                {
                    "target": "快啲跑兩步啦，我哋仲趕得切搭十一點半班港鐵！",
                    "reading": "Faai3 di1 paau2 loeng5 bou6 laa1, ngo5 dei6 zung6 gon2 dak1 cit3 daap3 sap6 jat1 dim2 bun3 baan1 gong2 tit3!",
                    "translation": "Run a bit faster; we can still catch the 11:30 MTR train in time!"
                },
                {
                    "target": "對唔住啊，廚房單子太多，你碟乾炒牛河可能要等一陣先做得到，師傅做唔切呀。",
                    "reading": "Deoi3 m4 zyu6 aa3, cyu4 fong2 daan1 zi2 taai3 do1, nei5 dip6 gon1 caau2 ngau4 ho2 ho2 nang4 jiu3 dang2 jat1 zan6 sin1 zou6 dak1 dou2, si1 fu2 zou6 m4 cit3 aa3.",
                    "translation": "Sorry, there are too many kitchen orders; your dry-fried beef chow fun might take a while because the chef can't keep up in time."
                },
                {
                    "target": "如果我哋搭的士去紅磡體育館，應該趕得切開場前入場。",
                    "reading": "Jyu4 gwo2 ngo5 dei6 daap3 dik1 si2 heoi3 Hung4 Ham3 Tai2 Juk6 Gun2, jing1 goi1 gon2 dak1 cit3 hoi1 coeng4 cin4 jap6 coeng4.",
                    "translation": "If we take a taxi to the Hong Kong Coliseum, we should make it inside before the show starts."
                }
            ],
            "mnemonics": [
                "切 (cit3) = Clock / Deadline: If time is ticking, use 切! [做得切 = beat the clock, 做唔切 = run out of time]!",
                "Catching transit = 趕得切 (gon2 dak1 cit3) / 趕唔切 (gon2 m4 cit3)."
            ],
            "culturalNotes": [
                "Hong Kong Fast Pace & '做唔切': In Hong Kong work culture, '做唔切 (zou6 m4 cit3)' is the ubiquitous honest cry when workloads exceed reasonable working hours.",
                "Catching the Last Train (尾班車): Night owls constantly calculate '趕唔趕得切搭尾班車' after dining or karaoke in Causeway Bay or Mong Kok."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想表達「手頭上的工作太多，截止前來不及做完」，最精準地道嘅廣東話係：",
                    "options": [
                        "我做唔切 (ngo5 zou6 m4 cit3)",
                        "我做唔食",
                        "我做唔落",
                        "我做唔走"
                    ],
                    "answerIndex": 0,
                    "explanation": "做唔切 (zou6 m4 cit3) 專指時間不足、來不及在截止前做完。"
                },
                {
                    "prompt": "見到地鐵門即將關閉，催促朋友「快點跑，我們還來得及趕上（can make it in time）」，應講：",
                    "options": [
                        "快啲，我哋趕唔切！",
                        "快啲，我哋仲趕得切！ (gon2 dak1 cit3)",
                        "快啲，我哋食得切！",
                        "快啲，我哋行得切！"
                    ],
                    "answerIndex": 1,
                    "explanation": "趕得切 (gon2 dak1 cit3) 表示能及時趕上。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "餐廳侍應向客人道歉「單子太多，師傅做唔切」，「做唔切」喺度指：",
                    "options": [
                        "廚師不會做菜",
                        "廚師在短時間內忙不過來、來不及及時出菜 (cannot cook fast enough in time)",
                        "廚房停電了",
                        "餐廳要關門了"
                    ],
                    "answerIndex": 1,
                    "explanation": "做唔切表示時間上來不及及時完成訂單。"
                },
                {
                    "prompt": "廣東話可能補語中，肯定形式同否定形式嘅中間標記分別係：",
                    "options": [
                        "肯定用「得 (dak1)」，否定用「唔 (m4)」",
                        "肯定用「有」，否定用「冇」",
                        "肯定用「過」，否定用「未」",
                        "肯定用「咗」，否定用「緊」"
                    ],
                    "answerIndex": 0,
                    "explanation": "粵語可能補語格式：動詞 + 得/唔 + 補語。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "句子「我驚搭巴士會塞車，趕唔切去機場」表達嘅核心擔憂係：",
                    "options": [
                        "巴士車費太貴",
                        "因交通擁堵而來不及在飛機起飛前及時趕到機場 (cannot make it to airport in time)",
                        "找不到機場在哪裡",
                        "巴士壞在路上"
                    ],
                    "answerIndex": 1,
                    "explanation": "趕唔切表達時間上來不及。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi for 'cannot finish in time' in Cantonese (做唔切):",
                    "acceptedAnswers": [
                        "做唔切",
                        "zou6 m4 cit3",
                        "zou6m4cit3"
                    ],
                    "explanation": "做唔切 (zou6 m4 cit3) means 'cannot finish in time'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u15-l2": {
        "id": "hk-u15-l2",
        "subject": "cantonese",
        "unit": "hk-u15",
        "level": "B1",
        "objective": "Master cognitive and sensory potential complements (睇得明/睇唔明, 聽得清楚/聽唔清楚, 記得起/記唔起, 估得到/估唔到).",
        "prerequisites": [
            "hk-u15-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u15-l1"
            ]
        },
        "presentation": {
            "explanation": "喺認知理解、感知溝通同記憶回憶入面，廣東話有四對極度高頻嘅可能補語組合：\n\n### 🧠 1. 認知理解：[睇得明 / 睇唔明] & [聽得明 / 聽唔明]：\n- **睇得明 (tai2 dak1 ming4)**：閱讀後能夠理解（Can understand by reading）。\n  - 例如：呢份英文合約好複雜，我**睇唔明 (tai2 m4 ming4)** 呀。(This English contract is complex; I can't understand it.)\n- **聽得明 (teng1 dak1 ming4)**：聽完後能夠聽懂（Can understand by listening）。\n  - 例如：佢講廣東話講得好快，你**聽唔聽得明 (teng1 m4 teng1 dak1 ming4)**？\n\n### 👂 2. 感官清晰度：[聽得清楚 / 聽唔清楚]：\n- **聽得清楚 (teng1 dak1 cing1 co2)**：能聽得很清楚。\n  - 例如：出面太嘈啦，我**聽唔清楚 (teng1 m4 cing1 co2)** 你講咩！\n\n### 💭 3. 記憶與預測：[記得起 / 記唔起] & [估得到 / 估唔到]：\n- **記得起 (gei3 dak1 hei2)**：能夠回想得起來（Can recall/remember）。\n  - **記唔起 (gei3 m4 hei2)**：想不起來、忘記了（Cannot recall）。\n    - 例如：我見過佢，但係一時**記唔起 (gei3 m4 hei2)** 佢叫咩名。\n- **估得到 (gu2 dak1 dou2)**：能猜測預料到。\n  - **估唔到 (gu2 m4 dou2)**：萬萬沒想到、出乎意料（Who would have thought!）。\n    - 例如：真係**估唔到 (gu2 m4 dou2)** 佢會攞第一名！",
            "examples": [
                {
                    "target": "呢篇文言文太深奧啦，我睇極都睇唔明入面嘅意思。",
                    "reading": "Ni1 pin1 man4 jin4 man4 taai3 sam1 ou3 laa3, ngo5 tai2 gik6 dou1 tai2 m4 ming4 jap6 min6 ge3 ji3 si1.",
                    "translation": "This classical Chinese text is too profound; no matter how much I read I cannot understand its meaning."
                },
                {
                    "target": "電話收訊唔係幾好，你可唔可以講大聲少少？我聽唔清楚。",
                    "reading": "Din6 waa2 sau1 seon3 m4 hai6 gei2 hou2, nei5 ho2 m4 ho2 ji5 gong2 daai6 seng1 siu2 siu2? Ngo5 teng1 m4 cing1 co2.",
                    "translation": "The phone reception isn't very good; could you speak a little louder? I can't hear clearly."
                },
                {
                    "target": "佢個樣好熟面口，但係我點都記唔起喺邊度見過佢添。",
                    "reading": "Keoi5 go3 joeng2 hou2 suk6 min6 hau2, daan6 hai6 ngo5 dim2 dou1 gei3 m4 hei2 hai2 bin1 dou6 gin3 gwo3 keoi5 tim1.",
                    "translation": "His face looks very familiar, but no matter how I try I just can't recall where I saw him."
                },
                {
                    "target": "真係估唔到今日茶餐廳咁多人排隊，平時好少咁爆滿㗎喎！",
                    "reading": "Zan1 hai6 gu2 m4 dou2 gam1 jat6 caa4 caan1 teng1 gam3 do1 jan4 paai4 deoi2, ping4 si4 hou2 siu2 gam3 baau3 mun5 gaa3 wo3!",
                    "translation": "I really couldn't have guessed so many people would queue at the tea restaurant today; usually it's rarely this packed, mind you!"
                }
            ],
            "mnemonics": [
                "Comprehension pair: 睇得明 / 睇唔明 (Reading), 聽得明 / 聽唔明 (Listening).",
                "Memory & Surprise: 記唔起 (cannot recall), 估唔到 (never saw it coming)!"
            ],
            "culturalNotes": [
                "Expressing Surprise with '估唔到': In Cantonese conversation, starting a sentence with '真係估唔到... (Zan1 hai6 gu2 m4 dou2...)' is the standard way to express delight, disbelief, or shock.",
                "Phone Courtesy: Saying '唔好意思，呢度收得唔好，聽唔清楚' is the polite way to ask someone to repeat themselves on a spotty cellular connection."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "睇一份外語說明書時表示「看不懂、無法理解」，應講：",
                    "options": [
                        "我睇唔明 (ngo5 tai2 m4 ming4)",
                        "我睇唔切",
                        "我睇唔落",
                        "我睇唔開"
                    ],
                    "answerIndex": 0,
                    "explanation": "睇唔明 (tai2 m4 ming4) 表示閱讀無法理解。"
                },
                {
                    "prompt": "見到老朋友但一時「想不起來名字（cannot recall）」，地道廣東話係：",
                    "options": [
                        "記唔起佢個名 (gei3 m4 hei2 keoi5 go3 meng2)",
                        "記唔切佢個名",
                        "記唔落佢個名",
                        "記唔好佢個名"
                    ],
                    "answerIndex": 0,
                    "explanation": "記唔起 (gei3 m4 hei2) 專用於記憶回想不出。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "感嘆句「真係估唔到佢會贏！」入面嘅「估唔到 (gu2 m4 dou2)」表達緊：",
                    "options": [
                        "早已預料到結果",
                        "出乎意料、萬萬沒想到 (unexpected / couldn't have guessed)",
                        "正在認真猜謎",
                        "完全不在乎"
                    ],
                    "answerIndex": 1,
                    "explanation": "估唔到表示出乎意料。"
                },
                {
                    "prompt": "環境嘈雜時請求對方講大聲啲，因為自己：",
                    "options": [
                        "聽唔切",
                        "聽唔清楚 (teng1 m4 cing1 co2)",
                        "聽唔落",
                        "聽唔開"
                    ],
                    "answerIndex": 1,
                    "explanation": "聽唔清楚表示感知不清晰。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "廣東話「我睇得明呢份文件」嘅否定形式係：",
                    "options": [
                        "我睇冇明呢份文件",
                        "我睇唔明呢份文件 (ngo5 tai2 m4 ming4 ni1 fan6 man4 gin2)",
                        "我唔睇得明呢份文件",
                        "我睇得唔明呢份文件"
                    ],
                    "answerIndex": 1,
                    "explanation": "可能補語否定式為 [動詞 + 唔 + 補語]：睇唔明。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi for 'cannot recall / cannot remember' in Cantonese (記唔起):",
                    "acceptedAnswers": [
                        "記唔起",
                        "gei3 m4 hei2",
                        "gei3m4hei2"
                    ],
                    "explanation": "記唔起 (gei3 m4 hei2) means 'cannot recall / cannot remember'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u15-l3": {
        "id": "hk-u15-l3",
        "subject": "cantonese",
        "unit": "hk-u15",
        "level": "B1",
        "objective": "Master physical capacity, appetite, and emotional endurance complements (食得落/食唔落, 吞得落/吞唔落, 頂得順/頂唔順, 孭得起/孭唔起).",
        "prerequisites": [
            "hk-u15-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u15-l2"
            ]
        },
        "presentation": {
            "explanation": "廣東話入面有好多極具生活張力同身體感知嘅可能補語，用嚟表達**胃口生理容量** 同埋 **心理抗壓極限**：\n\n### 🍲 1. 胃口與進食容量：[食得落 / 食唔落] & [吞得落 / 吞唔落]：\n- **食得落 (sik6 dak1 lok6)**：有胃口吃得下、能吃進肚子（Can stomach/eat it）。\n- **食唔落 (sik6 m4 lok6)**：太飽、太熱或心情差導致吃不下（Cannot eat / no appetite）。\n  - 例如：我太緊張啦，成碗飯都**食唔落 (sik6 m4 lok6)**。\n- **吞得落 (tan1 dak1 lok6)**：喉嚨能吞咽得下；引申為「能忍得下這口氣」。\n  - 例如：呢啖氣我點都**吞唔落 (tan1 m4 lok6)**！(I cannot swallow this insult!)\n\n### 💥 2. 壓力承受與抗壓耐力：[頂得順 / 頂唔順]：\n- **頂得順 (ding2 dak1 seon6)**：能夠承受壓力、撐得住、適應得來（Can endure/handle it）。\n- **頂唔順 (ding2 m4 seon6)**：受不了、撐不住、快要崩潰（Cannot stand it anymore!）。\n  - 例如：每日OT到半夜，我真係**頂唔順 (ding2 m4 seon6)** 啦！\n  - 例如：天氣熱到三十八度，完全**頂唔順 (ding2 m4 seon6)**！\n\n### 🎒 3. 責任承擔：[孭得起 / 孭唔起]：\n- **孭得起 (me1 dak1 hei2)**：能夠承擔經濟負擔或責任過失（Can shoulder/bear the responsibility/cost）。\n- **孭唔起 (me1 m4 hei2)**：負擔不起、承擔不起這個責任。\n  - 例如：咁大筆賠償，我一個人邊度**孭得起 (me1 dak1 hei2)** 呀！",
            "examples": [
                {
                    "target": "今日天氣又焗又熱，個人冇乜胃口，成碟飯都食唔落。",
                    "reading": "Gam1 jat6 tin1 hei3 jau6 guk6 jau6 jit6, go3 jan4 mou5 mat1 wai6 hau2, seng4 dip6 faan6 dou1 sik6 m4 lok6.",
                    "translation": "Today the weather is sultry and hot; I have no appetite and can't stomach the whole plate of rice."
                },
                {
                    "target": "連開三個星期通宵會議，全體組員都大呼頂唔順啦！",
                    "reading": "Lin4 hoi1 saam1 go3 sing1 kei4 tung1 siu1 wui6 ji5, cyun4 tai2 zou2 jyun4 dou1 daai6 fu1 ding2 m4 seon6 laa3!",
                    "translation": "Having overnight meetings for three consecutive weeks, all team members are crying out that they can't stand it anymore!"
                },
                {
                    "target": "做生意投資要量力而為，一定要確保自己孭得起風險先好做。",
                    "reading": "Zou6 sang1 ji3 tau4 zi1 jiu3 loeng6 lik6 ji4 wai4, jat1 ding1 jiu3 kok3 bou2 zi6 gei2 me1 dak1 hei2 fung1 him2 sin1 hou2 zou6.",
                    "translation": "Doing business investment requires acting within one's means; you must ensure you can shoulder the risks before proceeding."
                },
                {
                    "target": "呢碗麻辣米線辣到爆，你平時唔食辣，頂唔頂得順㗎？",
                    "reading": "Ni1 wun2 maa4 laat6 mai5 sin3 laat6 dou3 baau3, nei5 ping4 si4 m4 sik6 laat6, ding2 m4 ding2 dak1 seon6 gaa4?",
                    "translation": "This bowl of numbing-spicy rice noodles is explosively spicy; you don't usually eat spicy food, can you handle it?!"
                }
            ],
            "mnemonics": [
                "Food capacity: 食唔落 (can't stomach), 吞唔落 (can't swallow).",
                "Workplace stress: 頂得順 (can handle) vs 頂唔順 (can't take it anymore!).",
                "Responsibility: 孭得起 (can shoulder) vs 孭唔起 (can't carry the weight)."
            ],
            "culturalNotes": [
                "The Iconic '頂唔順': '頂唔順 (ding2 m4 seon6)' is perhaps the most famous expressive Cantonese idiom for extreme stress, intolerable heat, loud noise, or toxic relationships.",
                "The Metaphor '孭 (me1)': '孭 (me1)' means to carry a backpack. '孭鑊 (me1 wok6 - carrying the wok)' means taking the blame, and '孭唔起' means being unable to bear the catastrophic fallout."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "工作壓力極大、身體快要吃不消時，廣東話最地道嘅呼喊係：",
                    "options": [
                        "我真係頂唔順啦！ (ngo5 zan1 hai6 ding2 m4 seon6 laa3!)",
                        "我真係食唔切啦！",
                        "我真係睇唔落啦！",
                        "我真係坐唔起啦！"
                    ],
                    "answerIndex": 0,
                    "explanation": "頂唔順 (ding2 m4 seon6) 表示無法忍受、快要崩潰。"
                },
                {
                    "prompt": "生病沒有胃口、整碗粥都「吃不進去」，應講：",
                    "options": [
                        "成碗粥都食唔落 (sik6 m4 lok6)",
                        "成碗粥都食唔切",
                        "成碗粥都食唔起",
                        "成碗粥都食唔順"
                    ],
                    "answerIndex": 0,
                    "explanation": "食唔落 (sik6 m4 lok6) 表示沒有胃口或太飽吃不下。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子「咁大筆債務，佢一個人邊度孭得起呀？」入面嘅「孭得起 (me1 dak1 hei2)」指：",
                    "options": [
                        "力氣很大能扛起重物",
                        "在經濟或責任上能夠承擔得起 (can shoulder the financial/moral burden)",
                        "買了一個很大的背包",
                        "正在登山跑步"
                    ],
                    "answerIndex": 1,
                    "explanation": "孭得起比喻在經濟或責任上能承擔。"
                },
                {
                    "prompt": "問朋友能否承受超辣食物「你頂唔頂得順？」，屬於邊種提問結構？",
                    "options": [
                        "正反可能補語問句 (A-not-A potential complement query)",
                        "肯定陳述句",
                        "過去完成句",
                        "感嘆句"
                    ],
                    "answerIndex": 0,
                    "explanation": "頂唔頂得順屬於標準正反可能補語問句。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "廣東話「頂唔順 (ding2 m4 seon6)」在日常口語中最核心的含義是：",
                    "options": [
                        "頭髮剪得太短",
                        "承受不了極限、忍受不住壓力或惡劣條件（Cannot endure / can't take it anymore）",
                        "順路去買東西",
                        "站在最高處"
                    ],
                    "answerIndex": 1,
                    "explanation": "頂唔順是粵語極具代表性的抗壓極限表達。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi for 'cannot endure / can\\'t stand it anymore' in Cantonese (頂唔順):",
                    "acceptedAnswers": [
                        "頂唔順",
                        "ding2 m4 seon6",
                        "ding2m4seon6"
                    ],
                    "explanation": "頂唔順 (ding2 m4 seon6) means 'cannot endure / can\\'t stand it anymore'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u15-l4": {
        "id": "hk-u15-l4",
        "subject": "cantonese",
        "unit": "hk-u15",
        "level": "B1",
        "objective": "Master spatial containment potential complements (擺得落/擺唔落, 塞得入/塞唔入, 裝得落/裝唔落, 企得落/企唔落).",
        "prerequisites": [
            "hk-u15-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u15-l3"
            ]
        },
        "presentation": {
            "explanation": "喺香港呢個寸金尺土嘅城市入面，空間容納同收納擺放係每日生活嘅頭等大事！廣東話有一套非常精準嘅**空間容納可能補語**：\n\n### 📦 1. 空間擺放與容納：[擺得落 / 擺唔落] & [裝得落 / 裝唔落]：\n- **擺得落 (baai2 dak1 lok6)**：空間足夠放置某物（Fits / has room to place）。\n- **擺唔落 (baai2 m4 lok6)**：地方太細、放不下（Doesn't fit / no room to put）。\n  - 例如：間客廳咁細，張大梳化**擺唔落 (baai2 m4 lok6)** 㗎！\n- **裝得落 (zong1 dak1 lok6)**：容器或袋子容量足夠裝入。\n  - 例如：個背囊好大，**裝得落 (zong1 dak1 lok6)** 部手提電腦。(The backpack is huge; it can hold the laptop.)\n\n### 🚇 2. 擠壓與人員容納：[塞得入 / 塞唔入] & [坐得落 / 企得落]：\n- **塞得入 (sak1 dak1 jap6)**：能擠塞得進去（Can squeeze inside）。\n- **塞唔入 (sak1 m4 入)**：縫隙太窄或太滿塞不進去。\n  - 例如：個行李箱爆滿咗，件厚褸**塞唔入 (sak1 m4 jap6)** 啦！\n- **坐得落 (co5 dak1 lok6)**：座位空間能坐得下所有人。\n  - 例如：張檯咁大，我哋八個人都**坐得落 (co5 dak1 lok6)**。(The table is big; it can seat all 8 of us.)\n- **企得落 (kei5 dak1 lok6)**：站立空間足夠。\n  - 例如：架升降機滿人喇，**企唔落 (kei5 m4 lok6)** 啦！(The elevator is full; can't stand anyone else!)",
            "examples": [
                {
                    "target": "間房得五十呎咁細，放咗張床之後就擺唔落衣櫃啦。",
                    "reading": "Gaan1 fong2 dak1 ng5 sap6 cek3 gam3 sai3, fong3 zo2 zoeng1 cong4 zi1 hau6 zau6 baai2 m4 lok6 ji1 gwai6 laa3.",
                    "translation": "The room is only 50 square feet; after putting the bed, there is no room to fit a wardrobe."
                },
                {
                    "target": "個手提行李袋好大容量，裝得落三套衫同兩對鞋！",
                    "reading": "Go3 sau2 tai4 hang4 lei5 doi2 hou2 daai6 jung4 loeng6, zong1 dak1 lok6 saam1 tou3 saam1 tung4 loeng5 deoi3 haai4!",
                    "translation": "The carry-on duffel bag has huge capacity; it can hold three sets of clothes and two pairs of shoes!"
                },
                {
                    "target": "地鐵車廂入面已經逼到爆，我哋下一班車先上啦，塞唔入㗎啦。",
                    "reading": "Dei6 tit3 ce1 soeng1 jap6 min6 ji5 ging1 bik1 dou3 baau3, ngo5 dei6 haa6 jat1 baan1 ce1 sin1 soeng5 laa1, sak1 m4 jap6 gaa3 laa3.",
                    "translation": "The MTR train car is already packed to bursting; let's board the next train, we can't squeeze in anyway."
                },
                {
                    "target": "呢張大圓檯好闊落，我哋十位同事全部都坐得落有餘！",
                    "reading": "Ni1 zoeng1 daai6 jyun4 toi2 hou2 fut3 lok6, ngo5 dei6 sap6 wai6 tung4 si6 cyun4 bou6 dou1 co5 dak1 lok6 jau5 jyu4!",
                    "translation": "This large round table is very spacious; all ten of our colleagues can comfortably sit with room to spare!"
                }
            ],
            "mnemonics": [
                "Containment rule: Use '落 (lok6)' for surface/volume capacity [擺得落 (fit place), 裝得落 (fit contain), 坐得落 (fit seat), 企得落 (fit stand)]!",
                "Insertion rule: Use '入 (jap6)' for pushing inside [塞得入 (squeeze in) vs 塞唔入 (can't squeeze in)]!"
            ],
            "culturalNotes": [
                "Hong Kong Nano-Flats (納米樓): In Hong Kong real estate and interior design, measuring furniture with '擺唔擺得落' is an indispensable practical skill.",
                "Dim Sum Big Round Tables: Dining at traditional banquet restaurants involves asking the captain '呢張檯坐唔坐得落十二個人呀？'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想表達「房間空間太小，放不下這張大書桌」，最地道嘅廣東話係：",
                    "options": [
                        "間房太細，擺唔落呢張書檯 (baai2 m4 lok6)",
                        "間房太細，擺唔切呢張書檯",
                        "間房太細，擺唔明呢張書檯",
                        "間房太細，擺唔順呢張書檯"
                    ],
                    "answerIndex": 0,
                    "explanation": "擺唔落 (baai2 m4 lok6) 專指空間不足放不下。"
                },
                {
                    "prompt": "看到行李箱已經塞得滿滿，想說「再也塞不進去了」，應講：",
                    "options": [
                        "塞唔入啦 (sak1 m4 jap6 laa3)",
                        "塞唔切啦",
                        "塞唔明啦",
                        "塞唔順啦"
                    ],
                    "answerIndex": 0,
                    "explanation": "塞唔入 (sak1 m4 jap6) 表示無法再擠塞進去。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "升降機客滿時，管理員對外面嘅人講「企唔落啦」，意思係：",
                    "options": [
                        "電梯不能站立",
                        "電梯空間已滿，站不下更多人了 (no more standing room)",
                        "電梯停電了",
                        "電梯速度太快"
                    ],
                    "answerIndex": 1,
                    "explanation": "企唔落表示無容納站立空間。"
                },
                {
                    "prompt": "在餐廳訂位時，想確認「一張檯能否坐得下六個人」，地道問法係：",
                    "options": [
                        "張檯坐唔坐得落六個人？ (co5 m4 co5 dak1 lok6)",
                        "張檯做唔做得到六個人？",
                        "張檯行唔行得切六個人？",
                        "張檯睇唔睇得明六個人？"
                    ],
                    "answerIndex": 0,
                    "explanation": "坐唔坐得落是正反空間容納問句。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "廣東話空間容納補語中，「擺得落」、「裝得落」、「坐得落」中的「落 (lok6)」主要體現了：",
                    "options": [
                        "從高處向下掉落的動作",
                        "空間或容器具備足夠容納與承載能力的語法補語 (capacity to accommodate)",
                        "時間的延續",
                        "形容詞的最高級"
                    ],
                    "answerIndex": 1,
                    "explanation": "落在此作為空間容量之可能補語。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi for 'cannot fit / no room to put' in Cantonese (擺唔落):",
                    "acceptedAnswers": [
                        "擺唔落",
                        "baai2 m4 lok6",
                        "baai2m4lok6"
                    ],
                    "explanation": "擺唔落 (baai2 m4 lok6) means 'cannot fit / no room to put'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "hk-u15-l5": {
        "id": "hk-u15-l5",
        "subject": "cantonese",
        "unit": "hk-u15",
        "level": "B1",
        "objective": "Synthesize affirmative, negative, and A-not-A potential complement forms (趕唔趕得切, 頂唔頂得順, 睇唔睇得明, 擺唔擺得落) in workplace deadlines, seating arrangements, and stress management.",
        "prerequisites": [
            "hk-u15-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "hk-u15-l1",
                "hk-u15-l2",
                "hk-u15-l3",
                "hk-u15-l4"
            ]
        },
        "presentation": {
            "explanation": "喺呢課綜合應用入面，我哋會融會貫通所有可能補語嘅三種句式形態：**肯定式 [V+得+補語]**、**否定式 [V+唔+補語]** 以及 **正反問句 [V+唔+V+得+補語]**！\n\n### 🎯 核心正反可能補語問句速查表：\n1. **時間限期**：你聽日**趕唔趕得切 (gon2 m4 gon2 dak1 cit3)** 交份企劃書？\n2. **理解溝通**：剛才老細講嘅策略，你**聽唔聽得明 (teng1 m4 teng1 dak1 ming4)**？\n3. **抗壓極限**：呢排日日加班，你身心**頂唔頂得順 (ding2 m4 ding2 dak1 seon6)** 呀？\n4. **空間容納**：部新雪櫃咁大部，廚房個位**擺唔擺得落 (baai2 m4 baai2 dak1 lok6)** 呀？\n\n### 💬 真實高難度職場與社交情境對話：\n- **經理**：「個項目下星期五要上線，你哋團隊**做得切做唔切**？」\n- **組長**：「如果大家一齊幫手就**做得切**，但如果得兩個人就肯定**做唔切**啦！」\n- **經理**：「辛苦大家！今晚我請食飯，訂咗間大房，十個人全部**坐得落**，大家放鬆下！」",
            "examples": [
                {
                    "target": "A: 聽日個發布會你趕唔趕得切整好啲投影片？ B: 放心啦，我今晚一定做得切！",
                    "reading": "A: Ting1 jat6 go3 faat3 bou3 wui6 nei5 gon2 m4 gon2 dak1 cit3 zing2 hou2 di1 tau4 jing2 pin2? B: Fong3 sam1 laa1, ngo5 gam1 maan5 jat1 ding1 zou6 dak1 cit3!",
                    "translation": "A: Can you make it in time to finish the slides for tomorrow's press conference? B: Don't worry, I can definitely get it done in time tonight!"
                },
                {
                    "target": "A: 呢部新機器嘅操作手冊你睇唔睇得明？ B: 有少少複雜，我睇唔明第三章，要問下工程師。",
                    "reading": "A: Ni1 bou6 san1 gei1 hei3 ge3 cou3 zok3 sau2 caak3 nei5 tai2 m4 tai2 dak1 ming4? B: Jau5 siu2 siu2 fuk1 zaap6, ngo5 tai2 m4 ming4 dai6 saam1 zoeng1, jiu3 man6 haa5 gung1 cing4 si1.",
                    "translation": "A: Can you understand this new machine's operating manual? B: It's a bit complicated; I can't understand Chapter 3, need to ask the engineer."
                },
                {
                    "target": "A: 咁多張新辦公檯，間會議室擺唔擺得落？ B: 我量過尺寸，啱啱好擺得落有餘！",
                    "reading": "A: Gam3 do1 zoeng1 san1 baan6 gung1 toi2, gaan1 wui6 ji5 sat1 baai2 m4 baai2 dak1 lok6? B: Ngo5 loeng4 gwo3 cek3 cyun3, ngaam1 ngaam1 hou2 baai2 dak1 lok6 jau5 jyu4!",
                    "translation": "A: With so many new office desks, can the conference room fit them? B: I measured the dimensions; they fit just right with room to spare!"
                },
                {
                    "target": "A: 最近工作量咁大，你頂唔頂得順呀？ B: 雖然好攰，但係為咗年終獎金，我點都頂得順嘅！",
                    "reading": "A: Zeoi3 gan6 gung1 zok3 loeng6 gam3 daai6, nei5 ding2 m4 ding2 dak1 seon6 aa3? B: Seoi1 jin4 hou2 gui6, daan6 hai6 wai6 zo2 nin4 zung1 zoeng2 gam1, ngo5 dim2 dou1 ding2 dak1 seon6 ge3!",
                    "translation": "A: With such a heavy workload lately, can you hold up under the pressure? B: Although very tired, for the year-end bonus, I can definitely endure it!"
                }
            ],
            "mnemonics": [
                "Master Formula for A-not-A Potential Question: [V + 唔 + V + 得 + Complement] (趕唔趕得切, 頂唔頂得順, 睇唔睇得明, 擺唔擺得落)!"
            ],
            "culturalNotes": [
                "Hong Kong Pragmatic Feasibility Check: In commercial negotiations and team syncs, managers constantly use A-not-A potential complement questions to assess project feasibility without ambiguity."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "想詢問同事「這份複雜的報告你能不能看得懂（A-not-A question）」，最標準地道嘅問法係：",
                    "options": [
                        "你睇唔睇得明呢份報告？ (tai2 m4 tai2 dak1 ming4)",
                        "你看得懂看不懂呢份報告？",
                        "你睇明唔睇明呢份報告？",
                        "你睇得唔得明呢份報告？"
                    ],
                    "answerIndex": 0,
                    "explanation": "[V + 唔 + V + 得 + 補語]：睇唔睇得明。"
                },
                {
                    "prompt": "在搬運家具前確認「客廳能不能放得下這張桌子」，應問：",
                    "options": [
                        "個客廳擺唔擺得落張檯？ (baai2 m4 baai2 dak1 lok6)",
                        "個客廳擺唔擺得切張檯？",
                        "個客廳擺唔擺得明張檯？",
                        "個客廳擺唔擺得順張檯？"
                    ],
                    "answerIndex": 0,
                    "explanation": "擺唔擺得落是空間容納標準正反問句。"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "「你趕唔趕得切搭今晚班機？」回答「放心，我一定趕得切」，對話核心圍繞緊：",
                    "options": [
                        "機票的價格",
                        "能否在起飛前及時趕到登機 (time feasibility / catching the flight)",
                        "飛機的餐飲",
                        "飛機的型號"
                    ],
                    "answerIndex": 1,
                    "explanation": "趕唔趕得切與趕得切聚焦時間可行性。"
                },
                {
                    "prompt": "句子「雖然工作好辛苦，但我頂得順」展現咗說話者邊種心態？",
                    "options": [
                        "立刻辭職不幹",
                        "具備心理韌性與承受能力，能夠堅持撐住 (resilience / ability to endure)",
                        "抱怨工作太輕鬆",
                        "要求加薪"
                    ],
                    "answerIndex": 1,
                    "explanation": "頂得順展現抗壓耐力。"
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列邊一組廣東話問答最地道、最完整咁展示咗可能補語嘅職場實戰應用？",
                    "options": [
                        "A: 呢個項目你趕唔趕得切搞掂？ B: 如果有人幫手就做得切，我一個人就做唔切！",
                        "A: 你今天幾點上班？ B: 我八點上班",
                        "A: 你在哪裡吃飯？ B: 我在茶餐廳吃飯",
                        "A: 這是什麼？ B: 這是電腦"
                    ],
                    "answerIndex": 0,
                    "explanation": "完整結合 趕唔趕得切、做得切 同 做唔切。"
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 5-character Hanzi for the A-not-A question 'Can you make it in time?' in Cantonese (趕唔趕得切):",
                    "acceptedAnswers": [
                        "趕唔趕得切",
                        "gon2 m4 gon2 dak1 cit3",
                        "gon2m4gon2dak1cit3"
                    ],
                    "explanation": "趕唔趕得切 (gon2 m4 gon2 dak1 cit3) means 'Can you make it in time?'."
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
