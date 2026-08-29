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
