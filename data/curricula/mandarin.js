// Mandarin curriculum — full CEFR A1–C2 roadmap (34 units, 170 lessons)
(function (global) {
  'use strict';
  var UNITS = [
    {
        "id": "zh-u1",
        "unit": 1,
        "title": "汉语拼音、声调与基础问候 (Pinyin & Greetings)",
        "level": "A1",
        "goal": "Mastery of 汉语拼音与日常问候 (Pinyin & Basic Greetings).",
        "lessonIds": [
            "zh-u1-l1",
            "zh-u1-l2",
            "zh-u1-l3",
            "zh-u1-l4",
            "zh-u1-l5"
        ]
    },
    {
        "id": "zh-u2",
        "unit": 2,
        "title": "基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)",
        "level": "A1",
        "goal": "Mastery of 人称代词与是字句 (Pronouns & 是-Sentences).",
        "lessonIds": [
            "zh-u2-l1",
            "zh-u2-l2",
            "zh-u2-l3",
            "zh-u2-l4",
            "zh-u2-l5"
        ]
    },
    {
        "id": "zh-u3",
        "unit": 3,
        "title": "数字、时间与日期表达 (Numbers, Time & Date)",
        "level": "A1",
        "goal": "Mastery of 时间与日期表达 (Time, Numbers & Calendar).",
        "lessonIds": [
            "zh-u3-l1",
            "zh-u3-l2",
            "zh-u3-l3",
            "zh-u3-l4",
            "zh-u3-l5"
        ]
    },
    {
        "id": "zh-u4",
        "unit": 4,
        "title": "量词系统与名词修饰 (Classifiers & Noun Modification)",
        "level": "A1",
        "goal": "Mastery of 汉语量词系统 (Classifiers: 个/本/张/条).",
        "lessonIds": [
            "zh-u4-l1",
            "zh-u4-l2",
            "zh-u4-l3",
            "zh-u4-l4",
            "zh-u4-l5"
        ]
    },
    {
        "id": "zh-u5",
        "unit": 5,
        "title": "动词重叠与现在进行态 (Verb Reduplication & Continuous 在)",
        "level": "A1",
        "goal": "Mastery of 现在进行态与在 (Continuous Aspect with 在).",
        "lessonIds": [
            "zh-u5-l1",
            "zh-u5-l2",
            "zh-u5-l3",
            "zh-u5-l4",
            "zh-u5-l5"
        ]
    },
    {
        "id": "zh-u6",
        "unit": 6,
        "title": "动态助词：了的完成态与变化态 (Aspect Marker 了)",
        "level": "A2",
        "goal": "Mastery of 动态助词了的用法 (Perfective & Modal 了).",
        "lessonIds": [
            "zh-u6-l1",
            "zh-u6-l2",
            "zh-u6-l3",
            "zh-u6-l4",
            "zh-u6-l5"
        ]
    },
    {
        "id": "zh-u7",
        "unit": 7,
        "title": "动态助词：着与持续态 (Durative Aspect Marker 着)",
        "level": "A2",
        "goal": "Mastery of 持续态动词后着 (Durative Aspect Marker 着).",
        "lessonIds": [
            "zh-u7-l1",
            "zh-u7-l2",
            "zh-u7-l3",
            "zh-u7-l4",
            "zh-u7-l5"
        ]
    },
    {
        "id": "zh-u8",
        "unit": 8,
        "title": "动态助词：过与经验态 (Experiential Aspect Marker 过)",
        "level": "A2",
        "goal": "Mastery of 经验态动态助词过 (Experiential Aspect Marker 过).",
        "lessonIds": [
            "zh-u8-l1",
            "zh-u8-l2",
            "zh-u8-l3",
            "zh-u8-l4",
            "zh-u8-l5"
        ]
    },
    {
        "id": "zh-u9",
        "unit": 9,
        "title": "否定词辨析：不与没/没有 (Negation 不 vs 没)",
        "level": "A2",
        "goal": "Mastery of 否定词不与没辨析 (Negation Distinctions 不 vs 没).",
        "lessonIds": [
            "zh-u9-l1",
            "zh-u9-l2",
            "zh-u9-l3",
            "zh-u9-l4",
            "zh-u9-l5"
        ]
    },
    {
        "id": "zh-u10",
        "unit": 10,
        "title": "趋向补语：上来、下去与过 (Directional Complements)",
        "level": "A2",
        "goal": "Mastery of 简单与复合趋向补语 (Directional Complements: 上来/下去).",
        "lessonIds": [
            "zh-u10-l1",
            "zh-u10-l2",
            "zh-u10-l3",
            "zh-u10-l4",
            "zh-u10-l5"
        ]
    },
    {
        "id": "zh-u11",
        "unit": 11,
        "title": "结果补语：看见、做完与找到 (Resultative Complements)",
        "level": "B1",
        "goal": "Mastery of 结果补语系统 (Resultative Complements: 看见/做完).",
        "lessonIds": [
            "zh-u11-l1",
            "zh-u11-l2",
            "zh-u11-l3",
            "zh-u11-l4",
            "zh-u11-l5"
        ]
    },
    {
        "id": "zh-u12",
        "unit": 12,
        "title": "可能补语：看得懂与做不完 (Potential Complements)",
        "level": "B1",
        "goal": "Mastery of 可能补语得与不 (Potential Complements: 得/不).",
        "lessonIds": [
            "zh-u12-l1",
            "zh-u12-l2",
            "zh-u12-l3",
            "zh-u12-l4",
            "zh-u12-l5"
        ]
    },
    {
        "id": "zh-u13",
        "unit": 13,
        "title": "把字句的结构限制与对象处置 (The 把 Construction)",
        "level": "B1",
        "goal": "Mastery of 把字句处置结构 (The 把 Disposal Construction).",
        "lessonIds": [
            "zh-u13-l1",
            "zh-u13-l2",
            "zh-u13-l3",
            "zh-u13-l4",
            "zh-u13-l5"
        ]
    },
    {
        "id": "zh-u14",
        "unit": 14,
        "title": "被字句与被动表述 (The 被 Passive Voice)",
        "level": "B1",
        "goal": "Mastery of 被字句与被动表述 (Passive Voice with 被).",
        "lessonIds": [
            "zh-u14-l1",
            "zh-u14-l2",
            "zh-u14-l3",
            "zh-u14-l4",
            "zh-u14-l5"
        ]
    },
    {
        "id": "zh-u15",
        "unit": 15,
        "title": "比较句：比、没有与不如 (Comparatives)",
        "level": "B1",
        "goal": "Mastery of 比较句式比与不如 (Comparatives: 比/没有/不如).",
        "lessonIds": [
            "zh-u15-l1",
            "zh-u15-l2",
            "zh-u15-l3",
            "zh-u15-l4",
            "zh-u15-l5"
        ]
    },
    {
        "id": "zh-u16",
        "unit": 16,
        "title": "存现句与空间方位表述 (Existential Sentences)",
        "level": "B1",
        "goal": "Mastery of 空间方位与存现句 (Existential Locative Sentences).",
        "lessonIds": [
            "zh-u16-l1",
            "zh-u16-l2",
            "zh-u16-l3",
            "zh-u16-l4",
            "zh-u16-l5"
        ]
    },
    {
        "id": "zh-u17",
        "unit": 17,
        "title": "条件复句：只要...就与只有...才 (Complex Conditionals)",
        "level": "B2",
        "goal": "Mastery of 条件复句关联词 (Conditionals: 只要...就 / 只有...才).",
        "lessonIds": [
            "zh-u17-l1",
            "zh-u17-l2",
            "zh-u17-l3",
            "zh-u17-l4",
            "zh-u17-l5"
        ]
    },
    {
        "id": "zh-u18",
        "unit": 18,
        "title": "因果与转折复句 (Causal & Concessive)",
        "level": "B2",
        "goal": "Mastery of 因果与转折复句 (Causal & Concessive Clauses).",
        "lessonIds": [
            "zh-u18-l1",
            "zh-u18-l2",
            "zh-u18-l3",
            "zh-u18-l4",
            "zh-u18-l5"
        ]
    },
    {
        "id": "zh-u19",
        "unit": 19,
        "title": "强调句型：是...的结构 (Emphatic 是...的)",
        "level": "B2",
        "goal": "Mastery of 强调句型是...的 (Emphatic 是...的 Construction).",
        "lessonIds": [
            "zh-u19-l1",
            "zh-u19-l2",
            "zh-u19-l3",
            "zh-u19-l4",
            "zh-u19-l5"
        ]
    },
    {
        "id": "zh-u20",
        "unit": 20,
        "title": "商务沟通、职场礼仪与正式电邮 (Corporate Communication)",
        "level": "B2",
        "goal": "Mastery of 商务职场与正式电邮 (Business & Corporate Communication).",
        "lessonIds": [
            "zh-u20-l1",
            "zh-u20-l2",
            "zh-u20-l3",
            "zh-u20-l4",
            "zh-u20-l5"
        ]
    },
    {
        "id": "zh-u21",
        "unit": 21,
        "title": "中华饮食文化与宴席礼仪 (Culinary Arts & Banquets)",
        "level": "B2",
        "goal": "Mastery of 中华美食与宴席礼仪 (Chinese Culinary Arts & Dining).",
        "lessonIds": [
            "zh-u21-l1",
            "zh-u21-l2",
            "zh-u21-l3",
            "zh-u21-l4",
            "zh-u21-l5"
        ]
    },
    {
        "id": "zh-u22",
        "unit": 22,
        "title": "城市导航与智慧出行 (Urban Transit & Digital Life)",
        "level": "B2",
        "goal": "Mastery of 城市交通与智慧生活 (Urban Transit & Digital Life).",
        "lessonIds": [
            "zh-u22-l1",
            "zh-u22-l2",
            "zh-u22-l3",
            "zh-u22-l4",
            "zh-u22-l5"
        ]
    },
    {
        "id": "zh-u23",
        "unit": 23,
        "title": "传统中医与经络养生 (TCM Diagnostics & Wellness)",
        "level": "B2",
        "goal": "Mastery of 传统中医与养生理念 (Traditional Chinese Medicine).",
        "lessonIds": [
            "zh-u23-l1",
            "zh-u23-l2",
            "zh-u23-l3",
            "zh-u23-l4",
            "zh-u23-l5"
        ]
    },
    {
        "id": "zh-u24",
        "unit": 24,
        "title": "金融银行、供应链与跨境电商 (Banking & Supply Chains)",
        "level": "B2",
        "goal": "Mastery of 金融银行与跨境电商 (Banking, Finance & E-Commerce).",
        "lessonIds": [
            "zh-u24-l1",
            "zh-u24-l2",
            "zh-u24-l3",
            "zh-u24-l4",
            "zh-u24-l5"
        ]
    },
    {
        "id": "zh-u25",
        "unit": 25,
        "title": "现代中国影视与文学批评 (Contemporary Cinema & Literature)",
        "level": "C1",
        "goal": "Mastery of 影视艺术与文学鉴赏 (Cinema & Contemporary Literature).",
        "lessonIds": [
            "zh-u25-l1",
            "zh-u25-l2",
            "zh-u25-l3",
            "zh-u25-l4",
            "zh-u25-l5"
        ]
    },
    {
        "id": "zh-u26",
        "unit": 26,
        "title": "四字成语典故与修辞运用 (Classical Chengyu Idioms)",
        "level": "C1",
        "goal": "Mastery of 四字成语典故运用 (Classical Chengyu Idioms).",
        "lessonIds": [
            "zh-u26-l1",
            "zh-u26-l2",
            "zh-u26-l3",
            "zh-u26-l4",
            "zh-u26-l5"
        ]
    },
    {
        "id": "zh-u27",
        "unit": 27,
        "title": "绿色能源转型与生态文明 (Green Energy & Ecological Policy)",
        "level": "C1",
        "goal": "Mastery of 生态文明与绿色发展 (Green Energy & Environmental Policy).",
        "lessonIds": [
            "zh-u27-l1",
            "zh-u27-l2",
            "zh-u27-l3",
            "zh-u27-l4",
            "zh-u27-l5"
        ]
    },
    {
        "id": "zh-u28",
        "unit": 28,
        "title": "行政法务与知识产权监管 (Administrative & IP Law)",
        "level": "C1",
        "goal": "Mastery of 行政法务与知识产权 (Administrative & IP Law).",
        "lessonIds": [
            "zh-u28-l1",
            "zh-u28-l2",
            "zh-u28-l3",
            "zh-u28-l4",
            "zh-u28-l5"
        ]
    },
    {
        "id": "zh-u29",
        "unit": 29,
        "title": "学术论文规范与科研答辩 (Academic Dissertation & Defense)",
        "level": "C1",
        "goal": "Mastery of 学术论文与科研答辩 (Academic Dissertation & Defense).",
        "lessonIds": [
            "zh-u29-l1",
            "zh-u29-l2",
            "zh-u29-l3",
            "zh-u29-l4",
            "zh-u29-l5"
        ]
    },
    {
        "id": "zh-u30",
        "unit": 30,
        "title": "古典诗词格律在现代散文的化用 (Classical Poetry Prosody)",
        "level": "C1",
        "goal": "Mastery of 古典诗词意境鉴赏 (Classical Poetry in Modern Prose).",
        "lessonIds": [
            "zh-u30-l1",
            "zh-u30-l2",
            "zh-u30-l3",
            "zh-u30-l4",
            "zh-u30-l5"
        ]
    },
    {
        "id": "zh-u31",
        "unit": 31,
        "title": "新闻评论与深度社论修辞 (Media Analysis & Editorial)",
        "level": "C2",
        "goal": "Mastery of 新闻社论与深度评论 (Journalism & Editorial Rhetoric).",
        "lessonIds": [
            "zh-u31-l1",
            "zh-u31-l2",
            "zh-u31-l3",
            "zh-u31-l4",
            "zh-u31-l5"
        ]
    },
    {
        "id": "zh-u32",
        "unit": 32,
        "title": "儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics)",
        "level": "C2",
        "goal": "Mastery of 儒道思想与哲学思辨 (Confucian-Daoist Philosophy).",
        "lessonIds": [
            "zh-u32-l1",
            "zh-u32-l2",
            "zh-u32-l3",
            "zh-u32-l4",
            "zh-u32-l5"
        ]
    },
    {
        "id": "zh-u33",
        "unit": 33,
        "title": "宏观经济调控与人民币国际化 (Macroeconomics & Currency)",
        "level": "C2",
        "goal": "Mastery of 宏观调控与经济战略 (Macroeconomics & Currency Policy).",
        "lessonIds": [
            "zh-u33-l1",
            "zh-u33-l2",
            "zh-u33-l3",
            "zh-u33-l4",
            "zh-u33-l5"
        ]
    },
    {
        "id": "zh-u34",
        "unit": 34,
        "title": "多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft)",
        "level": "C2",
        "goal": "Mastery of 多边外交与公报发表 (C2 Capstone Global Statecraft).",
        "lessonIds": [
            "zh-u34-l1",
            "zh-u34-l2",
            "zh-u34-l3",
            "zh-u34-l4",
            "zh-u34-l5"
        ]
    }
];
  var LESSONS = {
    "zh-u1-l1": {
        "id": "zh-u1-l1",
        "unit": "zh-u1",
        "level": "A1",
        "objective": "Master the Mandarin Chinese Pinyin phonological system, distinguishing 21 initials (声母: b, p, m, f, d, t, n, l, g, k, h, j, q, x, zh, ch, sh, r, z, c, s), basic finals (韵母: a, o, e, i, u, ü), and the 4 pitch tones (第一声高平 55, 第二声升 35, 第三声降升 214, 第四声全降 51).",
        "prerequisites": [],
        "warmup": {
            "srsPull": false,
            "reviewFocus": []
        },
        "presentation": {
            "explanation": "汉语拼音（Hànyǔ Pīnyīn）是现代标准汉语的罗马化注音系统。每个汉字音节通常由声母（Initial）、韵母（Final）和声调（Tone）三部分组成。\n\n1. 四个基本声调 (The 4 Basic Tones):\n- **第一声 / 阴平 (First Tone, 55)**：高平调，发音高而平稳，如 mā（妈 - Mother）\n- **第二声 / 阳平 (Second Tone, 35)**：中升调，发音从低向高升，如 má（麻 - Hemp）\n- **第三声 / 上声 (Third Tone, 214)**：降升调，先降后升，如 mǎ（马 - Horse）\n- **第四声 / 去声 (Fourth Tone, 51)**：全降调，短促有力迅速下降，如 mà（骂 - Scold)\n- **轻声 (Neutral Tone)**：轻短无调号，如 ma（吗 - Question particle)。",
            "examples": [
                {
                    "target": "mā（妈，第一声高平）、má（麻，第二声中升）、mǎ（马，第三声降升）、mà（骂，第四声全降）。",
                    "reading": "mā, má, mǎ, mà.",
                    "translation": "mā (Mother, 1st tone), má (Hemp, 2nd tone), mǎ (Horse, 3rd tone), mà (Scold, 4th tone)."
                },
                {
                    "target": "bā（八 - Eight）、bá（拔 - Pull up）、bǎ（把 - Hold / Measure word）、bà（爸 - Father）。",
                    "reading": "bā, bá, bǎ, bà.",
                    "translation": "bā (Eight), bá (Pull), bǎ (Grasp), bà (Father)."
                },
                {
                    "target": "汉语普通话共有21个声母和39个韵母，声调不同代表完全不同的汉字与意义。",
                    "reading": "Hànyǔ pǔtōnghuà gòng yǒu 21 gè shēngmǔ hé 39 gè yùnmǔ, shēngdiào bùtóng dàibiǎo wánquán bùtóng de hànzì yǔ yìyì.",
                    "translation": "Standard Mandarin has 21 initials and 39 finals; distinct tones represent completely different characters and meanings."
                }
            ],
            "mnemonics": [
                "Tone Contours: 1st tone is flat high ˉ (mā), 2nd tone climbs up ˊ (má), 3rd tone dips and rises ˇ (mǎ), 4th tone drops sharply ˋ (mà)!"
            ],
            "culturalNotes": [
                "Pinyin was developed in the 1950s by a committee led by linguist Zhou Youguang (周有光) and was officially approved by the Chinese government in 1958 and ISO in 1982."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "汉语拼音中，表示‘马 (Horse)’的第三声（降升调）声调符号应标在哪一个字母上？",
                    "options": [
                        "mǎ (标在元音 a 上)",
                        "mā (第一声)",
                        "mà (第四声)"
                    ],
                    "answerIndex": 0,
                    "explanation": "mǎ carries the third tone (ˇ) marked over the main vowel 'a'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "普通话中的第四声（去声，例如‘爸 bà’）的发音音高走势是怎样的？",
                    "options": [
                        "高平不变 (55)",
                        "由高到低快速全降 (51)",
                        "从低到高上升 (35)"
                    ],
                    "answerIndex": 1,
                    "explanation": "The fourth tone (去声) is a full-falling pitch contour dropping swiftly from 5 to 1."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "在汉语拼音中，声调对于词义起什么作用？",
                    "options": [
                        "区分完全不同的汉字与词义 (Distinguishes different words and lexical meanings)",
                        "仅用于唱歌 (Only for singing)",
                        "完全不影响词义 (Does not affect meaning)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Tones in Mandarin are phonemic and distinguish completely different words."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Pinyin for 'horse' including tone mark (mǎ):",
                    "acceptedAnswers": [
                        "mǎ",
                        "ma3",
                        "mă",
                        "Mǎ",
                        "Ma3"
                    ],
                    "explanation": "mǎ (ma3) is the third tone for 'horse' (马)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u1-l2": {
        "id": "zh-u1-l2",
        "unit": "zh-u1",
        "level": "A1",
        "objective": "Master everyday Mandarin greetings and courtesy expressions, distinguishing casual versus respectful address (你 vs. 您), morning greetings (早上好), thanking (谢谢), and polite deflections (不客气).",
        "prerequisites": [
            "zh-u1-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u1-l1"
            ]
        },
        "presentation": {
            "explanation": "掌握汉语基础问候与礼貌用语是开启中文交流的第一步。\n\n1. 核心问候与礼貌词汇 (Essential Vocabulary):\n- **你好 (nǐ hǎo)**：通用问候语（Hello / Hi）\n- **您好 (nín hǎo)**：尊称问候（用于长辈、师长、客户或初次见面的长者）\n- **早上好 (zǎoshang hǎo)**：早晨问候（Good morning）\n- **谢谢 (xièxie)**：感谢表达（Thank you）\n- **不客气 (bú kèqi)**：礼貌回应（You're welcome / Don't mention it）。\n\n2. 礼貌尊称文化：\n「您」字在「你」字下方加了一个「心」，意为‘把对方放在心上’，体现了中华传统礼仪中的尊老与敬客之道。",
            "examples": [
                {
                    "target": "你好！我叫王明。",
                    "reading": "Nǐ hǎo! Wǒ jiào Wáng Míng.",
                    "translation": "Hello! My name is Wang Ming."
                },
                {
                    "target": "张老师，您好！早上好！",
                    "reading": "Zhāng lǎoshī, nín hǎo! Zǎoshang hǎo!",
                    "translation": "Teacher Zhang, hello (respectful)! Good morning!"
                },
                {
                    "target": "A: 非常感谢你的帮助！ B: 不客气！",
                    "reading": "A: Fēicháng gǎnxiè nǐ de bāngzhù! B: Bú kèqi!",
                    "translation": "A: Thank you very much for your help! B: You're welcome!"
                }
            ],
            "mnemonics": [
                "«你好» = Hello! «您好» = Respectful Hello (heart under 你)! «谢谢» = Thanks! «不客气» = You're welcome!"
            ],
            "culturalNotes": [
                "In Chinese culture, greeting superiors, teachers, or elders with «您好» (nín hǎo) rather than «你好» (nǐ hǎo) shows essential deference and good upbringing."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "向新认识的长辈或老师问好时，最得体、尊敬的问候语是哪一个？",
                    "options": [
                        "您好！ (Nín hǎo!)",
                        "喂！ (Wèi!)",
                        "再见！ (Zàijiàn!)"
                    ],
                    "answerIndex": 0,
                    "explanation": "«您好» (Nín hǎo) is the respectful honorific form of greeting for elders and teachers."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "当别人对你说「谢谢」时，最标准礼貌的回答是：",
                    "options": [
                        "不用 (No need)",
                        "不客气 (Bú kèqi / You're welcome)",
                        "对不起 (Sorry)"
                    ],
                    "answerIndex": 1,
                    "explanation": "«不客气» (Bú kèqi) is the standard polite reply to «谢谢»."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "中文里表达‘早上好 (Good morning)’的标准说法是：",
                    "options": [
                        "晚上好 (Good evening)",
                        "早上好 (Zǎoshang hǎo)",
                        "晚安 (Good night)"
                    ],
                    "answerIndex": 1,
                    "explanation": "早上好 (Zǎoshang hǎo) means 'Good morning'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'Hello' (你好):",
                    "acceptedAnswers": [
                        "你好",
                        "nihao",
                        "nǐ hǎo",
                        "Nǐ hǎo",
                        "Nihao",
                        "nǐhǎo"
                    ],
                    "explanation": "你好 (Nǐ hǎo) means 'Hello'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u1-l3": {
        "id": "zh-u1-l3",
        "unit": "zh-u1",
        "level": "A1",
        "objective": "Introduce yourself and inquire about others' names in Mandarin Chinese using the verb 叫 (jiào), the interrogative pronoun 什么 (shénme), and polite introductory formulas (认识你很高兴).",
        "prerequisites": [
            "zh-u1-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u1-l2"
            ]
        },
        "presentation": {
            "explanation": "在初次见面时进行自我介绍和询问姓名是基本社交技能。\n\n1. 核心句型结构 (Syntactic Structures):\n- **主语 + 叫 + 名字** (Subject + jiào + Name)：如 我叫李华 (My name is Li Hua)\n- **你叫什么名字？** (Nǐ jiào shénme míngzi? — What is your name?)\n- **认识你很高兴！** (Rènshi nǐ hěn gāoxìng! — Nice to meet you!)\n- **我也很高兴认识你！** (Wǒ yě hěn gāoxìng rènshi nǐ! — Nice to meet you too!)\n\n2. 语法重点 (Grammar Focus):\n- **叫 (jiào)**：动词，在此处表示‘被称为 / 名字叫作’。\n- **什么 (shénme)**：疑问代词，直接置于名词前修饰名词，语序不倒装（保持陈述句 SVO 语序）。",
            "examples": [
                {
                    "target": "你好！我叫大卫，你叫什么名字？",
                    "reading": "Nǐ hǎo! Wǒ jiào Dàwèi, nǐ jiào shénme míngzi?",
                    "translation": "Hello! My name is David, what is your name?"
                },
                {
                    "target": "我叫李月。认识你很高兴！",
                    "reading": "Wǒ jiào Lǐ Yuè. Rènshi nǐ hěn gāoxìng!",
                    "translation": "My name is Li Yue. Nice to meet you!"
                },
                {
                    "target": "我也很高兴认识你，欢迎你来北京！",
                    "reading": "Wǒ yě hěn gāoxìng rènshi nǐ, huānyíng nǐ lái Běijīng!",
                    "translation": "I'm very glad to meet you too, welcome to Beijing!"
                }
            ],
            "mnemonics": [
                "«叫» = Called / Named! «什么名字» = What name! «很高兴» = Very pleased/happy!"
            ],
            "culturalNotes": [
                "Chinese names always place the family surname (姓 xìng) first, followed by the given name (名 míng), e.g. 李 (Surname) + 华 (Given name) = 李华 (Lǐ Huá)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "用中文询问对方‘你叫什么名字？’时，疑问代词‘什么’应该放在哪里？",
                    "options": [
                        "放在名词‘名字’前面：你叫什么名字？",
                        "放在句首：什么你叫名字？",
                        "放在句尾：你叫名字什么？"
                    ],
                    "answerIndex": 0,
                    "explanation": "In Mandarin, question words stay in place without inversion: 你叫什么名字？"
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "当对方说「认识你很高兴！」时，你的得体回应通常是：",
                    "options": [
                        "再见 (Goodbye)",
                        "我也很高兴认识你！ (Wǒ yě hěn gāoxìng rènshi nǐ!)",
                        "对不起 (Sorry)"
                    ],
                    "answerIndex": 1,
                    "explanation": "«我也很高兴认识你！» means 'Nice to meet you too!'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "表达‘我叫李明 (My name is Li Ming)’的正确汉语拼音与汉字结构是：",
                    "options": [
                        "我名字李明 (Wǒ míngzi Lǐ Míng)",
                        "我叫李明 (Wǒ jiào Lǐ Míng)",
                        "我是在李明 (Wǒ shì zài Lǐ Míng)"
                    ],
                    "answerIndex": 1,
                    "explanation": "我叫李明 (Wǒ jiào Lǐ Míng) uses the verb 叫 to introduce one's name."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the verb 'to be called / to call' (叫):",
                    "acceptedAnswers": [
                        "叫",
                        "jiao",
                        "jiào",
                        "Jiào"
                    ],
                    "explanation": "叫 (jiào) means 'to be called / to call'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u1-l4": {
        "id": "zh-u1-l4",
        "unit": "zh-u1",
        "level": "A1",
        "objective": "Master standard Mandarin farewells (再见、明天见、一会儿见), apologies (对不起、不好意思), and conciliatory responses (没关系、没事).",
        "prerequisites": [
            "zh-u1-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u1-l3"
            ]
        },
        "presentation": {
            "explanation": "日常社交中妥善表达告别与歉意是建立良好人际关系的基础。\n\n1. 告别表达 (Farewells):\n- **再见 (zàijiàn)**：再（Again）+ 见（See）= See you again / Goodbye\n- **明天见 (míngtiān jiàn)**：明天（Tomorrow）+ 见（See）= See you tomorrow\n- **一会儿见 (yíhuìr jiàn)**：一会儿（A while / Later）+ 见（See）= See you in a bit\n\n2. 致歉与回应 (Apologies & Replies):\n- **对不起 (duìbuqǐ)**：对不起（I'm sorry / Excuse me for serious mistakes）\n- **不好意思 (bù hǎoyìsi)**：不好意思（Pardon me / Excuse me for minor inconvenience）\n- **没关系 (méi guānxi)**：没（No）+ 关系（Consequence / Relation）= It doesn't matter / That's alright\n- **没事 (méishì)**：没（No）+ 事（Issue）= No problem / It's nothing.",
            "examples": [
                {
                    "target": "今天时间不早了，我们明天见！——好的，再见！",
                    "reading": "Jīntiān shíjiān bù zǎo le, wǒmen míngtiān jiàn! —— Hǎo de, zàijiàn!",
                    "translation": "It's getting late today, see you tomorrow! — Alright, goodbye!"
                },
                {
                    "target": "A: 对不起，我迟到了。 B: 没关系，请进！",
                    "reading": "A: Duìbuqǐ, wǒ chídào le. B: Méi guānxi, qǐng jìn!",
                    "translation": "A: I'm sorry, I'm late. B: It doesn't matter, please come in!"
                },
                {
                    "target": "不好意思，请问洗手间在哪里？",
                    "reading": "Bù hǎoyìsi, qǐngwèn xǐshǒujiān zài nǎlǐ?",
                    "translation": "Excuse me, may I ask where the restroom is?"
                }
            ],
            "mnemonics": [
                "«再见» = See you again! «明天见» = See you tomorrow! «对不起» = Sorry! «没关系» = No problem!"
            ],
            "culturalNotes": [
                "«不好意思» (bù hǎoyìsi) is ubiquitous in daily life across mainland China, Taiwan, and Singapore for casual apologies, polite interruptions, and mild embarrassment."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "当不小心踩到别人的脚时，最直接的道歉用语是：",
                    "options": [
                        "对不起！ (Duìbuqǐ!)",
                        "没关系！ (Méi guānxi!)",
                        "再见！ (Zàijiàn!)"
                    ],
                    "answerIndex": 0,
                    "explanation": "«对不起！» (Duìbuqǐ) is the standard apology when causing an accident or inconvenience."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "当别人对你真诚说「对不起」时，最恰当的礼貌回答是：",
                    "options": [
                        "谢谢 (Thank you)",
                        "没关系 (Méi guānxi / It's alright)",
                        "早上好 (Good morning)"
                    ],
                    "answerIndex": 1,
                    "explanation": "«没关系» (Méi guānxi) responds politely to an apology."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "表达‘明天见 (See you tomorrow)’的正确汉字是：",
                    "options": [
                        "明天见 (Míngtiān jiàn)",
                        "昨天见 (Yesterday see)",
                        "再见 (Goodbye)"
                    ],
                    "answerIndex": 0,
                    "explanation": "明天见 (Míngtiān jiàn) means 'See you tomorrow'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'Goodbye / See you again' (再见):",
                    "acceptedAnswers": [
                        "再见",
                        "zaijian",
                        "zàijiàn",
                        "Zàijiàn",
                        "Zaijian",
                        "再見"
                    ],
                    "explanation": "再见 (Zàijiàn) literally means 'see you again'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u1-l5": {
        "id": "zh-u1-l5",
        "unit": "zh-u1",
        "level": "A1",
        "objective": "Master the essential phonological rule of Third-Tone Sandhi (三声变调: 3rd tone + 3rd tone -> 2nd tone + 3rd tone, as in nǐ + hǎo -> ní hǎo), synthesizing all Unit 1 greetings, introductions, apologies, and farewells into an integrated A1 conversational dialogue.",
        "prerequisites": [
            "zh-u1-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u1-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统总结第一单元的所有知识点，并深入学习普通话中最核心的语音规律——第三声变调（Third-Tone Sandhi）。\n\n1. 三声变调规则 (Third-Tone Sandhi Rule):\n- 当两个第三声（214）音节连续出现时，**前一个第三声音节变成第二声（35）**，后一个音节保持第三声不变。\n- 公式：**3 + 3 → 2 + 3**\n- 典型例词：\n  - **你好**：原调 nǐ (3) + hǎo (3) → 实际读作 **ní hǎo (2 + 3)**\n  - **可以**：原调 kě (3) + yǐ (3) → 实际读作 **ké yǐ (2 + 3)**\n  - **手表**：原调 shǒu (3) + biǎo (3) → 实际读作 **shóu biǎo (2 + 3)**\n- 注：在拼音正词法中，调号通常仍标写原调（nǐ hǎo），但发音时自然变为第二声。\n\n2. 第一单元综合交际实战 (Unit 1 Comprehensive Synthesis):\n- 完整对话链条：问候（您好）→ 询问与自报姓名（我叫...你叫什么名字？）→ 结识致谢（认识你很高兴）→ 告别（明天见，再见）。",
            "examples": [
                {
                    "target": "「你好」两个字都是第三声（nǐ hǎo），但在实际口语发音中，前面的「你」自动变调为第二声「ní」。",
                    "reading": "«Nǐ hǎo» liǎng gè zì dōu shì dì-sān shēng (nǐ hǎo), dàn zài shíjì kǒuyǔ fāyīn zhōng, qiánmian de «nǐ» zìdòng biàndiào wéi dì-èr shēng «ní».",
                    "translation": "Both characters in 'nǐ hǎo' are 3rd tone, but in actual speech, the first syllable automatically changes to 2nd tone 'ní'."
                },
                {
                    "target": "张华：王老师，您好！ 王老师：你好，张华！今天下午见！",
                    "reading": "Zhāng Huá: Wáng lǎoshī, nín hǎo! Wáng lǎoshī: Nǐ hǎo, Zhāng Huá! Jīntiān xiàwǔ jiàn!",
                    "translation": "Zhang Hua: Hello, Teacher Wang! Teacher Wang: Hello, Zhang Hua! See you this afternoon!"
                },
                {
                    "target": "大卫：对不起，我叫大卫，请问您叫什么名字？ 李明：没关系，我叫李明，认识你很高兴！",
                    "reading": "Dàwèi: Duìbuqǐ, wǒ jiào Dàwèi, qǐngwèn nín jiào shénme míngzi? Lǐ Míng: Méi guānxi, wǒ jiào Lǐ Míng, rènshi nǐ hěn gāoxìng!",
                    "translation": "David: Excuse me, my name is David, may I ask your name? Li Ming: No problem, I'm Li Ming, nice to meet you!"
                }
            ],
            "mnemonics": [
                "Tone Sandhi Rule: 3 + 3 becomes 2 + 3! (nǐ hǎo sounds like ní hǎo!)"
            ],
            "culturalNotes": [
                "Third-tone sandhi is automatic and intuitive for native speakers; mastering it will make your Mandarin sound instantly natural and fluent."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "当两个第三声音节（如‘你 nǐ’和‘好 hǎo’）连读时，前面的‘你’字发音会发生什么变化？",
                    "options": [
                        "变成第二声（ní hǎo）",
                        "变成第一声（nī hǎo）",
                        "变成第四声（nì hǎo）"
                    ],
                    "answerIndex": 0,
                    "explanation": "When two 3rd tones meet (3+3), the first changes to 2nd tone (2+3): ní hǎo."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在初次见面的完整对话中，下列哪一组交流顺序最符合自然得体的中文社交礼仪？",
                    "options": [
                        "再见 → 对不起 → 我叫什么",
                        "您好 → 我叫大卫，你叫什么名字？ → 认识你很高兴！ → 再见！",
                        "不客气 → 早上好 → 喂"
                    ],
                    "answerIndex": 1,
                    "explanation": "Greeting -> Introduction & Name inquiry -> Pleased to meet you -> Farewell is the natural conversational sequence."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "在汉语普通话中，‘可以 (kěyǐ)’的实际口语发音声调是：",
                    "options": [
                        "第一声 + 第一声 (1+1)",
                        "第四声 + 第四声 (4+4)",
                        "第二声 + 第三声 (kéyǐ, 3+3变调为2+3)"
                    ],
                    "answerIndex": 2,
                    "explanation": "kěyǐ undergoes 3rd-tone sandhi, sounding like kéyǐ (2nd tone + 3rd tone)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'Thank you' (谢谢):",
                    "acceptedAnswers": [
                        "谢谢",
                        "xiexie",
                        "xièxie",
                        "Xièxie",
                        "Xiexie",
                        "謝謝"
                    ],
                    "explanation": "谢谢 (Xièxie) means 'Thank you'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u2-l1": {
        "id": "zh-u2-l1",
        "unit": "zh-u2",
        "level": "A1",
        "objective": "Master the system of Mandarin personal pronouns (我, 你, 您, 他, 她, 它) and the plural suffix 们 (men: 我们, 你们, 他们, 她们).",
        "prerequisites": [
            "zh-u1-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u1-l5"
            ]
        },
        "presentation": {
            "explanation": "汉语人称代词系统简洁规律，单数形式加上轻声后缀「们 (men)」即构成复数。\n\n1. 人称代词分类 (Personal Pronouns):\n- **第一人称**：我 (wǒ - I / me) → 我们 (wǒmen - We / us)\n- **第二人称**：你 (nǐ - You) / 您 (nín - You, polite) → 你们 (nǐmen - You all)\n- **第三人称**：\n  - 他 (tā - He / him，单人旁 亻)\n  - 她 (tā - She / her，女字旁 女)\n  - 它 (tā - It，宝盖头 宀)\n  - 他们 (tāmen - They / them, masculine or mixed group)\n  - 她们 (tāmen - They / them, all-female group)\n\n2. 语法规则：\n- 汉语人称代词没有主格和宾格的形态变化（‘我’既可作主语 I，也可作宾语 me）。\n- 「们」只用于指人的名词或代词（如：学生们、朋友们），不能加在普通非生物名词后。",
            "examples": [
                {
                    "target": "我是学生，他是老师，我们都是中国人。",
                    "reading": "Wǒ shì xuésheng, tā shì lǎoshī, wǒmen dōu shì Zhōngguórén.",
                    "translation": "I am a student, he is a teacher, we are all Chinese."
                },
                {
                    "target": "她叫李月，她们是我的好朋友。",
                    "reading": "Tā jiào Lǐ Yuè, tāmen shì wǒ de hǎo péngyou.",
                    "translation": "Her name is Li Yue, they (female) are my good friends."
                },
                {
                    "target": "你们好！欢迎大家来到我们学校！",
                    "reading": "Nǐmen hǎo! Huānyíng dàjiā lái dào wǒmen xuéxiào!",
                    "translation": "Hello everyone! Welcome all to our school!"
                }
            ],
            "mnemonics": [
                "«我» = I, «你» = You, «他/她/它» = He/She/It (all pronounced tā!), add «们» for plural!"
            ],
            "culturalNotes": [
                "In spoken Mandarin, 他, 她, and 它 sound identical (tā). In writing, distinguishing the radical (亻for male/neutral, 女 for female, 宀 for objects/animals) was standardized in the May Fourth Movement by scholar Liu Bannong (刘半农)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "汉语中，如何将单数代词‘我 (I)’变成复数‘我们 (We)’？",
                    "options": [
                        "在‘我’后面加上轻声后缀‘们’：我们 (wǒmen)",
                        "在‘我’前面加‘多’",
                        "把‘我’字重复两遍"
                    ],
                    "answerIndex": 0,
                    "explanation": "Adding the plural suffix 们 (men) to 我 forms 我们 (wǒmen)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "当一群全是由女性组成的朋友时，在汉字书写中表示‘她们 (They, female)’应当使用哪个字？",
                    "options": [
                        "他们 (亻旁)",
                        "她们 (女字旁)",
                        "它们 (宝盖头)"
                    ],
                    "answerIndex": 1,
                    "explanation": "«她们» with the female radical (女) is used for all-female groups in writing."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列关于汉语人称代词的表述，哪一项是完全正确的？",
                    "options": [
                        "人称代词在句中作主语或宾语形态不变 (No case inflection: 我 means both 'I' and 'me')",
                        "人称代词作宾语时必须改变形式",
                        "‘们’可以加在任何书本、桌子等物品后面"
                    ],
                    "answerIndex": 0,
                    "explanation": "Mandarin personal pronouns do not have morphological case inflections for subject/object."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'We / Us' (我们):",
                    "acceptedAnswers": [
                        "我们",
                        "women",
                        "wǒmen",
                        "Wǒmen",
                        "Women",
                        "我們"
                    ],
                    "explanation": "我们 (Wǒmen) means 'we / us'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u2-l2": {
        "id": "zh-u2-l2",
        "unit": "zh-u2",
        "level": "A1",
        "objective": "Master the affirmative equational sentence structure using the copula 是 (shì: S + 是 + Noun/NP) to express identity, occupation, and classification.",
        "prerequisites": [
            "zh-u2-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u2-l1"
            ]
        },
        "presentation": {
            "explanation": "「是 (shì)」字句是汉语最基础的判断与系词句型，相当于英语中的 'to be'（am/is/are），用于连接主语与表示身份、属性或分类的名词短语。\n\n1. 基本句型结构 (Sentence Pattern):\n- **主语 (Subject) + 是 (shì) + 名词短语 (Noun Phrase)**\n- 示例：\n  - 我是学生。(Wǒ shì xuésheng. — I am a student.)\n  - 他是老师。(Tā shì lǎoshī. — He is a teacher.)\n  - 王明是医生。(Wáng Míng shì yīshēng. — Wang Ming is a doctor.)\n\n2. 核心语法特点 (Grammar Points):\n- 汉语中的「是」不随主语的人称（我/你/他）和数（单数/复数）发生形态屈折变化（无 am/is/are 变形，一律用「是」）。\n- **重要区别**：形容词作谓语时通常**不加「是」**，而用程度副词「很」（如：我很忙，不能说 *我是很忙）。",
            "examples": [
                {
                    "target": "我是汉语老师，你也是老师吗？",
                    "reading": "Wǒ shì hànyǔ lǎoshī, nǐ yě shì lǎoshī ma?",
                    "translation": "I am a Chinese teacher, are you also a teacher?"
                },
                {
                    "target": "李华和王明都是北京大学的学生。",
                    "reading": "Lǐ Huá hé Wáng Míng dōu shì Běijīng Dàxué de xuésheng.",
                    "translation": "Li Hua and Wang Ming are both Peking University students."
                },
                {
                    "target": "大卫是我的好朋友，他是医生。",
                    "reading": "Dàwèi shì wǒ de hǎo péngyou, tā shì yīshēng.",
                    "translation": "David is my good friend, he is a doctor."
                }
            ],
            "mnemonics": [
                "«是» (shì) connects Subject to Noun! No conjugation: I 是, You 是, They 是!"
            ],
            "culturalNotes": [
                "In ancient Chinese, 是 originally meant 'this / correct' (as in 实事求是); its use as a copula verb solidified in Early Modern Chinese."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘他是老师 (He is a teacher)’的正确汉语语序是：",
                    "options": [
                        "主语 + 是 + 职业：他是老师 (Tā shì lǎoshī)",
                        "是 + 他 + 老师",
                        "他 + 老师 + 是"
                    ],
                    "answerIndex": 0,
                    "explanation": "SVO word order: Subject (他) + Copula (是) + Predicate (老师)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在汉语中，当主语由单数‘我’变成复数‘我们’时，动词‘是’会怎样变化？",
                    "options": [
                        "变成 are",
                        "保持‘是’不变，完全没有形态变化 (Remains unchanged: 我们是)",
                        "必须省略"
                    ],
                    "answerIndex": 1,
                    "explanation": "The copula 是 never inflects for person or number in Mandarin."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子是标准的汉语判断句（是字句）？",
                    "options": [
                        "我学生是 (Wǒ xuésheng shì)",
                        "我是学生 (Wǒ shì xuésheng)",
                        "是学生我 (Shì xuésheng wǒ)"
                    ],
                    "answerIndex": 1,
                    "explanation": "我是学生 (Wǒ shì xuésheng) follows standard Subject + 是 + Object order."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the copular verb 'to be' (是):",
                    "acceptedAnswers": [
                        "是",
                        "shi",
                        "shì",
                        "Shì"
                    ],
                    "explanation": "是 (shì) means 'to be / is / am / are'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u2-l3": {
        "id": "zh-u2-l3",
        "unit": "zh-u2",
        "level": "A1",
        "objective": "Express and inquire about nationality, country of origin, and identity in Mandarin using country names, the suffix 人 (rén), and the question formula 你是哪国人？ (Nǐ shì nǎ guó rén?).",
        "prerequisites": [
            "zh-u2-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u2-l2"
            ]
        },
        "presentation": {
            "explanation": "在中文里，表达国籍的规律极其规则简洁：**国家名称 + 人 (rén)** 即可构成国籍名词。\n\n1. 核心国家与国籍词汇 (Countries & Nationalities):\n- **中国 (Zhōngguó - China)** → **中国人 (Zhōngguórén - Chinese person)**\n- **美国 (Měiguó - USA)** → **美国人 (Měiguórén - American)**\n- **英国 (Yīngguó - UK)** → **英国人 (Yīngguórén - British person)**\n- **法国 (Fǎguó - France)** → **法国人 (Fǎguórén - French person)**\n- **德国 (Déguó - Germany)** → **德国人 (Déguórén - German person)**\n- **日本 (Rìběn - Japan)** → **日本人 (Rìběnrén - Japanese person)**\n\n2. 询问国籍核心句型 (Question Formula):\n- **主语 + 是 + 哪国人？ (Subject + shì + nǎ guó rén?)**\n- 示例：你是哪国人？ (Nǐ shì nǎ guó rén? — What nationality are you / Which country are you from?)\n- 回答：我是美国人。(Wǒ shì Měiguórén. — I am American.)",
            "examples": [
                {
                    "target": "你是哪国人？——我是英国人，她是法国人。",
                    "reading": "Nǐ shì nǎ guó rén? —— Wǒ shì Yīngguórén, tā shì Fǎguórén.",
                    "translation": "What country are you from? — I am British, she is French."
                },
                {
                    "target": "张老师是中国人，大卫是美国留学生。",
                    "reading": "Zhāng lǎoshī shì Zhōngguórén, Dàwèi shì Měiguó liúxuéshēng.",
                    "translation": "Teacher Zhang is Chinese, David is an American international student."
                },
                {
                    "target": "我们来自不同的国家，但我们都是汉语学习者。",
                    "reading": "Wǒmen láizì bùtóng de guójiā, dàn wǒmen dōu shì hànyǔ xuéxízhě.",
                    "translation": "We come from different countries, but we are all Chinese language learners."
                }
            ],
            "mnemonics": [
                "Country + 人 = Nationality! (中国 + 人 = 中国人; 英国 + 人 = 英国人!)"
            ],
            "culturalNotes": [
                "«中国» (Zhōngguó) literally translates to 'Central State' or 'Middle Kingdom', reflecting the ancient worldview where the civilization lay at the center of the world under heaven (*天下*)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "用中文询问对方‘你是哪国人？’时，最标准地道的表达是：",
                    "options": [
                        "你是哪国人？ (Nǐ shì nǎ guó rén?)",
                        "你是谁国人？",
                        "你哪人在？"
                    ],
                    "answerIndex": 0,
                    "explanation": "«你是哪国人？» is the standard formula for inquiring nationality."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "中文中表示‘法国人 (French person)’的构词方式是：",
                    "options": [
                        "人法国",
                        "法国人 (Country 法国 + Suffix 人)",
                        "法之民"
                    ],
                    "answerIndex": 1,
                    "explanation": "Nationalities are systematically formed with Country name + 人."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "句子‘大卫是美国人’表达的意思是：",
                    "options": [
                        "David is in America",
                        "大卫具有美国国籍/是美国人 (David is American)",
                        "David lives in America"
                    ],
                    "answerIndex": 1,
                    "explanation": "大卫是美国人 means 'David is an American'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'China' (中国):",
                    "acceptedAnswers": [
                        "中国",
                        "zhongguo",
                        "zhōngguó",
                        "Zhōngguó",
                        "Zhongguo",
                        "中國"
                    ],
                    "explanation": "中国 (Zhōngguó) means 'China'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u2-l4": {
        "id": "zh-u2-l4",
        "unit": "zh-u2",
        "level": "A1",
        "objective": "Negate copular sentences using the negative adverb 不 (bù -> bú), mastering the tone sandhi of 不 before 4th tone (不 + 是 = bú shì) and expressing negative identity.",
        "prerequisites": [
            "zh-u2-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u2-l3"
            ]
        },
        "presentation": {
            "explanation": "在汉语中，系词「是」的否定形式非常固定，在「是」前加上否定副词「不」构成「不是 (bú shì)」。\n\n1. 否定句型结构 (Negative Sentence Pattern):\n- **主语 + 不是 + 名词短语 (Subject + bú shì + Noun Phrase)**\n- 示例：\n  - 我不是老师，我是学生。(Wǒ bú shì lǎoshī, wǒ shì xuésheng. — I am not a teacher, I am a student.)\n  - 他不是美国人，他是加拿大人。(Tā bú shì Měiguórén, tā shì Jiānádàrén. — He is not American, he is Canadian.)\n\n2. 语音规律：不的变调 (Tone Sandhi of 不):\n- 「不 (bù)」的本调是第四声（51）。\n- **变调规则**：当「不」出现在**第四声音节前**时，自动变为**第二声 (35)**！\n  - 公式：**不 (4) + 第四声 → 不 (2) + 第四声**\n  - 典型例词：**不是** (bù + shì → **bú shì**)、**不对** (bù + duì → **bú duì**)、**不要** (bù + yào → **bú yào**)。",
            "examples": [
                {
                    "target": "我不是医生，我是大学老师。",
                    "reading": "Wǒ bú shì yīshēng, wǒ shì dàxué lǎoshī.",
                    "translation": "I am not a doctor, I am a university teacher."
                },
                {
                    "target": "在发音时，「不是」中的「不」要读作第二声「bú」而不是第四声「bù」。",
                    "reading": "Zài fāyīn shí, «bú shì» zhōng de «bù» yào dú zuò dì-èr shēng «bú» ér bú shì dì-sì shēng «bù».",
                    "translation": "In pronunciation, 'bù' in 'bú shì' must be pronounced as 2nd tone 'bú' rather than 4th tone 'bù'."
                },
                {
                    "target": "他们不是英国人，他们是法国留学生。",
                    "reading": "Tāmen bú shì Yīngguórén, tāmen shì Fǎguó liúxuéshēng.",
                    "translation": "They are not British, they are French international students."
                }
            ],
            "mnemonics": [
                "Tone Sandhi for 不: Before a 4th tone, 不 jumps up to 2nd tone! (bù + shì = bú shì!)"
            ],
            "culturalNotes": [
                "Tone sandhi of 不 (bù) and 一 (yī) are the two most fundamental phonetic rules in spoken Mandarin, vital for natural rhythm and cadence."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "当否定词‘不 (bù)’遇到第四声的‘是 (shì)’时，‘不’的发音会发生什么变调？",
                    "options": [
                        "变成第二声：bú shì (不是)",
                        "变成第一声：bū shì",
                        "保持第四声不变"
                    ],
                    "answerIndex": 0,
                    "explanation": "Before a 4th tone (shì), 不 changes to 2nd tone: bú shì."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "表达‘他不是学生，他是老师’的正确否定句是：",
                    "options": [
                        "他不学生，他是老师",
                        "他不是学生，他是老师 (Tā bú shì xuésheng, tā shì lǎoshī)",
                        "他没有学生，他是老师"
                    ],
                    "answerIndex": 1,
                    "explanation": "Negation of the copula requires 不是 (bú shì)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "在汉语中，否定‘我是中国人’的正确否定句是：",
                    "options": [
                        "我不中国人",
                        "我不有中国人",
                        "我不是中国人 (Wǒ bú shì Zhōngguórén)"
                    ],
                    "answerIndex": 2,
                    "explanation": "我不是中国人 (Wǒ bú shì Zhōngguórén) correctly negates the copula."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'not / no' (不):",
                    "acceptedAnswers": [
                        "不",
                        "bu",
                        "bù",
                        "Bù",
                        "bú",
                        "Bú"
                    ],
                    "explanation": "不 (bù/bú) means 'not / no'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u2-l5": {
        "id": "zh-u2-l5",
        "unit": "zh-u2",
        "level": "A1",
        "objective": "Master the formation of yes/no interrogative sentences by appending the neutral-tone question particle 吗 (ma) to declarative sentences, synthesizing all Unit 2 pronouns, affirmative/negative copulas, and nationalities into an integrated A1 dialogue.",
        "prerequisites": [
            "zh-u2-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u2-l4"
            ]
        },
        "presentation": {
            "explanation": "汉语的疑问句构成极为简明：将陈述句末尾加上语气助词「吗 (ma)」，语序**完全保持不变**，即可构成一般疑问句。\n\n1. 吗字疑问句结构 (Yes/No Question with 吗):\n- **陈述句 + 吗？ (Statement + ma?)**\n- 示例对照：\n  - 陈述句：你是中国人。(You are Chinese.)\n  - 疑问句：你是中国人**吗**？(Are you Chinese?)\n- 回答模式 (Response Patterns):\n  - 肯定回答：是，我是中国人。(Yes, I am Chinese.)\n  - 否定回答：不，我不是中国人，我是美国人。(No, I am not Chinese, I am American.)\n\n2. 第二单元综合交际实战 (Unit 2 Comprehensive Synthesis):\n- 自我介绍与国籍确认完整流程：问候（你好）→ 询问身份国籍（你是学生吗？你是哪国人？）→ 肯定/否定确认（我不是老师，我是英国留学生）→ 礼貌致谢。",
            "examples": [
                {
                    "target": "A: 你是北京大学的学生吗？ B: 是，我是中文系的学生。",
                    "reading": "A: Nǐ shì Běijīng Dàxué de xuésheng ma? B: Shì, wǒ shì zhōngwén xì de xuésheng.",
                    "translation": "A: Are you a student at Peking University? B: Yes, I am a Chinese department student."
                },
                {
                    "target": "A: 他们也是美国人吗？ B: 不，他们不是美国人，他们是加拿大人。",
                    "reading": "A: Tāmen yě shì Měiguórén ma? B: Bù, tāmen bú shì Měiguórén, tāmen shì Jiānádàrén.",
                    "translation": "A: Are they also American? B: No, they are not American, they are Canadian."
                },
                {
                    "target": "大卫是我的同学，他不是中国人，但他很喜欢中国文化。",
                    "reading": "Dàwèi shì wǒ de tóngxué, tā bú shì Zhōngguórén, dàn tā hěn xǐhuan Zhōngguó wénhuà.",
                    "translation": "David is my classmate, he is not Chinese, but he likes Chinese culture very much."
                }
            ],
            "mnemonics": [
                "Question Magic: Statement + 吗 = Question! (你是学生 + 吗 = Are you a student?)"
            ],
            "culturalNotes": [
                "Unlike English, which requires auxiliary verb inversion ('Are you...?'), Mandarin simply appends 吗 to the end of a regular SVO sentence, keeping the word order entirely unchanged."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "如何将陈述句‘他是老师 (He is a teacher)’快速变成疑问句‘他是老师吗？’？",
                    "options": [
                        "在句末加上轻声疑问助词‘吗’：他是老师吗？",
                        "把‘是’移到句首：是他老师？",
                        "在句首加‘吗’：吗他是老师？"
                    ],
                    "answerIndex": 0,
                    "explanation": "Adding 吗 (ma) at the end turns any statement into a yes/no question without word inversion."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "当别人问你「你是英国人吗？」而你来自美国时，最完整准确的回答是：",
                    "options": [
                        "是，我是英国人",
                        "不，我不是英国人，我是美国人 (Bù, wǒ bú shì Yīngguórén, wǒ shì Měiguórén)",
                        "对不起，再见"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately negates the question and confirms correct nationality."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子是完全正确的中文疑问句？",
                    "options": [
                        "你是哪国人吗？ (Incorrect mix of question word and 吗)",
                        "是你是学生吗？ (Incorrect inversion)",
                        "你是中国人吗？ (Nǐ shì Zhōngguórén ma? — Correct statement + 吗)"
                    ],
                    "answerIndex": 2,
                    "explanation": "你是中国人吗？ follows the correct Statement + 吗 pattern."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the question particle (吗):",
                    "acceptedAnswers": [
                        "吗",
                        "ma",
                        "Ma",
                        "嗎"
                    ],
                    "explanation": "吗 (ma) is the neutral-tone yes/no question particle."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u3-l1": {
        "id": "zh-u3-l1",
        "unit": "zh-u3",
        "level": "A1",
        "objective": "Master the base-10 Chinese numerical system from 0 to 99, distinguishing counting numbers (一到十), tens composition (十一到九十九), and the crucial distinction between counting 'two' (二 èr) versus quantities (两 liǎng).",
        "prerequisites": [
            "zh-u2-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u2-l5"
            ]
        },
        "presentation": {
            "explanation": "汉语数字系统具有高度逻辑性与规则性，基于纯粹的十进制（Base-10）。\n\n1. 基础数字 (Digits 0–10):\n- **0 (líng - 零)**, **1 (yī - 一)**, **2 (èr - 二)**, **3 (sān - 三)**, **4 (sì - 四)**\n- **5 (wǔ - 五)**, **6 (liù - 六)**, **7 (qī - 七)**, **8 (bā - 八)**, **9 (jiǔ - 九)**, **10 (shí - 十)**\n\n2. 两位数组合规律 (Numbers 11–99):\n- **11–19**：十 + 个位 (shí + digit) → **十一 (11)**、**十二 (12)**、**十五 (15)**、**十九 (19)**\n- **20, 30...90**：个位 + 十 (digit + shí) → **二十 (20)**、**三十 (30)**、**八十 (80)**\n- **21–99**：十位 + 个位 → **二十五 (25)**、**七十八 (78)**、**九十九 (99)**\n\n3. 「二 (èr)」与「两 (liǎng)」的重要区别：\n- **二 (èr)**：用于纯数学数数、序数、数学计算及编号（如：一二三、第二、二号）。\n- **两 (liǎng)**：用于量词前表示具体事物的数量（如：两个人、两本书、两点钟）。",
            "examples": [
                {
                    "target": "一、二、三、四、五、六、七、八、九、十。",
                    "reading": "yī, èr, sān, sì, wǔ, liù, qī, bā, jiǔ, shí.",
                    "translation": "1, 2, 3, 4, 5, 6, 7, 8, 9, 10."
                },
                {
                    "target": "我们班有二十八个学生，其中有十五个男生和十三位女生。",
                    "reading": "Wǒmen bān yǒu èrshíbā gè xuésheng, qízhōng yǒu shíwǔ gè nánshēng hé shísān wèi nǚshēng.",
                    "translation": "Our class has 28 students, including 15 boys and 13 girls."
                },
                {
                    "target": "我有两个汉语老师，一共有三十本中文书。",
                    "reading": "Wǒ yǒu liǎng gè hànyǔ lǎoshī, yígòng yǒu sānshí běn zhōngwén shū.",
                    "translation": "I have two Chinese teachers and altogether 30 Chinese books."
                }
            ],
            "mnemonics": [
                "«二» for counting (1, 2, 3)! «两» for measuring items (两个, 两本, 两点)!"
            ],
            "culturalNotes": [
                "Number 8 (八 bā) is auspicious in Chinese culture due to its phonological resemblance to 发 (fā - prosperity/wealth), whereas 4 (四 sì) is often avoided because it sounds like 死 (sǐ - death)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "汉语中数字‘78’的标准组合表达方式是：",
                    "options": [
                        "七十八 (qīshíbā: 7 × 10 + 8)",
                        "七八十",
                        "八十七"
                    ],
                    "answerIndex": 0,
                    "explanation": "78 is formed by 7 (七) + 10 (十) + 8 (八) = 七十八 (qīshíbā)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "当表示‘2个人 (Two people)’的具体数量时，应该使用‘二’还是‘两’？",
                    "options": [
                        "二个",
                        "两个人 (liǎng gè rén)",
                        "俩个人 (冗余)"
                    ],
                    "answerIndex": 1,
                    "explanation": "Before a classifier/measure word, 'two' is expressed with 两 (liǎng)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个数字表达的是‘95’？",
                    "options": [
                        "九十五 (95)",
                        "五十九 (59)",
                        "九百五 (950)"
                    ],
                    "answerIndex": 0,
                    "explanation": "九十五 (jiǔshíwǔ) is 95."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the number 'eight' (八):",
                    "acceptedAnswers": [
                        "八",
                        "ba",
                        "bā",
                        "Bā",
                        "Ba"
                    ],
                    "explanation": "八 (bā) means 'eight'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u3-l2": {
        "id": "zh-u3-l2",
        "unit": "zh-u3",
        "level": "A1",
        "objective": "Ask and state the exact time in Mandarin Chinese using 点 (diǎn / o'clock), 分 (fēn / minute), 半 (bàn / half past), 刻 (kè / quarter), and the question 现在几点？ (Xiànzài jǐ diǎn?).",
        "prerequisites": [
            "zh-u3-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u3-l1"
            ]
        },
        "presentation": {
            "explanation": "时间表达由钟点（点）和分钟（分）组合而成，遵循从大到小（小时 → 分钟）的顺序。\n\n1. 时间核心词汇 (Telling Time):\n- **点 (diǎn)**：小时 / 点钟（o'clock / hour）\n- **分 (fēn)**：分钟（minute）\n- **半 (bàn)**：半点（half past / 30 minutes）\n- **刻 (kè)**：一刻（quarter / 15 minutes）\n- **现在 (xiànzài)**：现在（now）\n- **几 (jǐ)**：疑问词，问小数量（几点 = what time）\n\n2. 问答句型 (Question & Answer Formulas):\n- **现在几点？** (Xiànzài jǐ diǎn? — What time is it now?)\n- **现在 + [小时] 点 + [分钟] 分**：\n  - 8:00 → **八点** (bā diǎn)\n  - 2:30 → **两点半** (liǎng diǎn bàn) *[注：2点用两点，不用二点]*\n  - 9:15 → **九点一刻** (jiǔ diǎn yí kè) 或 九点十五分\n  - 3:45 → **三点三刻** (sān diǎn sān kè) 或 差一刻四点。",
            "examples": [
                {
                    "target": "现在几点了？——现在是上午十点十分。",
                    "reading": "Xiànzài jǐ diǎn le? —— Xiànzài shì shàngwǔ shí diǎn shí fēn.",
                    "translation": "What time is it now? — It is 10:10 AM now."
                },
                {
                    "target": "我们每天下午两点半开始上中文课。",
                    "reading": "Wǒmen měitiān xiàwǔ liǎng diǎn bàn kāishǐ shàng zhōngwén kè.",
                    "translation": "We start Chinese class at 2:30 PM every afternoon."
                },
                {
                    "target": "飞机将在明天早晨七点一刻准时起飞。",
                    "reading": "Fēijī jiāng zài míngtiān zǎochén qī diǎn yí kè zhǔnshí qǐfēi.",
                    "translation": "The flight will depart on time at 7:15 AM tomorrow."
                }
            ],
            "mnemonics": [
                "«点» = Hour mark! «分» = Minute! «半» = Half past (:30)! Remember: 2 o'clock is always «两点»!"
            ],
            "culturalNotes": [
                "Traditional Chinese timekeeping divided the day into 12 two-hour periods called 时辰 (shíchen), each named after an Earthly Branch (e.g. 子时 23:00-01:00, 午时 11:00-13:00)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "用中文表达‘2:30 (2点半)’时，最地道正确的说法是：",
                    "options": [
                        "两点半 (liǎng diǎn bàn)",
                        "二点三十",
                        "两分三十点"
                    ],
                    "answerIndex": 0,
                    "explanation": "两点半 (liǎng diǎn bàn) is the standard natural way to say 2:30."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "向他人礼貌询问‘现在几点？’的标准问句是：",
                    "options": [
                        "什么时间？",
                        "现在几点？ (Xiànzài jǐ diǎn?)",
                        "几分点现在？"
                    ],
                    "answerIndex": 1,
                    "explanation": "«现在几点？» (Xiànzài jǐ diǎn?) is the standard time inquiry."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "表达‘9:15’的规范汉语是：",
                    "options": [
                        "一刻九点",
                        "九点一刻 (Jiǔ diǎn yí kè) / 九点十五分",
                        "九刻一分"
                    ],
                    "answerIndex": 1,
                    "explanation": "九点一刻 (Jiǔ diǎn yí kè) means 9:15."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'o'clock / point' (点):",
                    "acceptedAnswers": [
                        "点",
                        "dian",
                        "diǎn",
                        "Diǎn",
                        "點"
                    ],
                    "explanation": "点 (diǎn) means 'o'clock / point'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u3-l3": {
        "id": "zh-u3-l3",
        "unit": "zh-u3",
        "level": "A1",
        "objective": "Master the 7 days of the week using the 星期 (xīngqī) / 周 (zhōu) system, relative temporal anchors (昨天, 今天, 明天, 前天, 后天), and day-of-the-week interrogative formulas.",
        "prerequisites": [
            "zh-u3-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u3-l2"
            ]
        },
        "presentation": {
            "explanation": "中文星期系统的规律非常清晰：**星期 + 数字 (1–6)**，星期天/星期日为特例。\n\n1. 星期一到星期日 (Days of the Week):\n- **星期一 (xīngqīyī)**：Monday\n- **星期二 (xīngqī'èr)**：Tuesday\n- **星期三 (xīngqīsān)**：Wednesday\n- **星期四 (xīngqīsì)**：Thursday\n- **星期五 (xīngqīwǔ)**：Friday\n- **星期六 (xīngqīliù)**：Saturday\n- **星期日 / 星期天 (xīngqīrì / xīngqītiān)**：Sunday *[口语多用‘星期天’，书面语用‘星期日’]*\n\n2. 相对时间副词 (Temporal Anchors):\n- **昨天 (zuótiān)**：Yesterday\n- **今天 (jīntiān)**：Today\n- **明天 (míngtiān)**：Tomorrow\n- **前天 (qiántiān)**：Day before yesterday\n- **后天 (hòutiān)**：Day after tomorrow\n\n3. 疑问句型 (Question Formula):\n- **今天星期几？** (Jīntiān xīngqī jǐ? — What day of the week is it today?)\n- 回答：今天星期五。(Jīntiān xīngqīwǔ. — Today is Friday.)",
            "examples": [
                {
                    "target": "今天星期几？——今天星期三，明天是星期四。",
                    "reading": "Jīntiān xīngqī jǐ? —— Jīntiān xīngqīsān, míngtiān shì xīngqīsì.",
                    "translation": "What day is today? — Today is Wednesday, tomorrow is Thursday."
                },
                {
                    "target": "星期六和星期天是周末，我们不上课。",
                    "reading": "Xīngqīliù hé xīngqītiān shì zhōumò, wǒmen bú shàngkè.",
                    "translation": "Saturday and Sunday are the weekend, we don't have classes."
                },
                {
                    "target": "昨天是星期一，他在图书馆看了一整天书。",
                    "reading": "Zuótiān shì xīngqīyī, tā zài túshūguǎn kàn le yì zhěng tiān shū.",
                    "translation": "Yesterday was Monday, he read books in the library all day."
                }
            ],
            "mnemonics": [
                "«星期» + 1 to 6 = Mon to Sat! Sunday is «星期天» or «星期日»! Never say *星期七!"
            ],
            "culturalNotes": [
                "In Chinese, days of the week are numerical (1 to 6) unlike Western mythologically named days (Monday/Moon, Thursday/Thor). The word 星期 (xīngqī) literally means 'period of the stars'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "用中文询问对方‘今天星期几？’时，最标准正确的问句是：",
                    "options": [
                        "今天星期几？ (Jīntiān xīngqī jǐ?)",
                        "今天星期什么？",
                        "今天几星期？"
                    ],
                    "answerIndex": 0,
                    "explanation": "«今天星期几？» uses the interrogative number word 几 to ask the day of the week."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在中文里，‘星期天 (Sunday)’绝不能表达为：",
                    "options": [
                        "星期日",
                        "星期天",
                        "星期七 (*Xīngqīqī - incorrect!)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Sunday is never called *星期七; it is always 星期日 or 星期天."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "如果今天是星期五，那么‘后天’是星期几？",
                    "options": [
                        "星期六",
                        "星期日 / 星期天 (Sunday)",
                        "星期一"
                    ],
                    "answerIndex": 1,
                    "explanation": "Two days after Friday (后天) is Sunday (星期天/星期日)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'Today' (今天):",
                    "acceptedAnswers": [
                        "今天",
                        "jintian",
                        "jīntiān",
                        "Jīntiān",
                        "Jintian"
                    ],
                    "explanation": "今天 (Jīntiān) means 'today'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u3-l4": {
        "id": "zh-u3-l4",
        "unit": "zh-u3",
        "level": "A1",
        "objective": "Express calendar dates, 12 months (一月到十二月), years (二零二六年), and inquire about birthdays and specific dates using 几月几号 (jǐ yuè jǐ hào).",
        "prerequisites": [
            "zh-u3-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u3-l3"
            ]
        },
        "presentation": {
            "explanation": "中文日期表达严格遵循从宏观到微观的层级规律：**年 (nián) → 月 (yuè) → 日/号 (rì/hào)**。\n\n1. 月份 (Months 1–12):\n- 纯数字 + 月：**一月 (January)**、**二月 (February)**、**五月 (May)**、**十月 (October)**、**十二月 (December)**。\n\n2. 日子 (Days of Month):\n- 口语常用 **号 (hào)**（如：五号、二十号），书面公文常用 **日 (rì)**（如：5月1日）。\n\n3. 年份读法 (Reading Years):\n- 逐字读取每个阿拉伯数字：**2026年** 读作 **èr líng èr liù nián**。\n\n4. 生日与日期问答 (Birthday & Date Formulas):\n- **今天几月几号？** (Jīntiān jǐ yuè jǐ hào? — What's the date today?)\n- **你的生日是几月几号？** (Nǐ de shēngrì shì jǐ yuè jǐ hào? — When is your birthday?)\n- **我的生日是八月十八号。** (Wǒ de shēngrì shì bā yuè shíbā hào. — My birthday is August 18th.)",
            "examples": [
                {
                    "target": "今天是2026年9月1日。",
                    "reading": "Jīntiān shì èr líng èr liù nián jiǔ yuè yī rì.",
                    "translation": "Today is September 1, 2026."
                },
                {
                    "target": "你的生日是几月几号？——我的生日是十月五号。",
                    "reading": "Nǐ de shēngrì shì jǐ yuè jǐ hào? —— Wǒ de shēngrì shì shí yuè wǔ hào.",
                    "translation": "When is your birthday? — My birthday is October 5th."
                },
                {
                    "target": "十月一日是中国的国庆节。",
                    "reading": "Shí yuè yī rì shì Zhōngguó de Guóqìngjié.",
                    "translation": "October 1st is China's National Day."
                }
            ],
            "mnemonics": [
                "Date Order: Year (年) → Month (月) → Day (号/日)! Big to Small hierarchy!"
            ],
            "culturalNotes": [
                "The traditional Chinese calendar (农历 nónglì / 阴历 yīnlì) is lunisolar, determining major cultural holidays such as Spring Festival (春节) and Mid-Autumn Festival (中秋节)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "用中文表达‘2026年’时，年份数字应当如何朗读？",
                    "options": [
                        "逐字按单字朗读：二零二六年 (èr líng èr liù nián)",
                        "读作两千零二十六年",
                        "读作二十二十六"
                    ],
                    "answerIndex": 0,
                    "explanation": "Years in Mandarin are read digit-by-digit: 2-0-2-6 = èr líng èr liù nián."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "询问对方‘你的生日是几月几号？’时，使用的疑问代词是：",
                    "options": [
                        "什么月什么号",
                        "几月几号 (jǐ yuè jǐ hào)",
                        "谁月谁日"
                    ],
                    "answerIndex": 1,
                    "explanation": "«几月几号» uses 几 for numbers in calendar months and days."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "表达‘5月18日’的标准汉语词序是：",
                    "options": [
                        "五月十八日 (Wǔ yuè shíbā rì)",
                        "18日5月",
                        "五日十八月"
                    ],
                    "answerIndex": 0,
                    "explanation": "Standard Month -> Day order: 五月十八日."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'month / moon' (月):",
                    "acceptedAnswers": [
                        "月",
                        "yue",
                        "yuè",
                        "Yuè",
                        "Yue"
                    ],
                    "explanation": "月 (yuè) means 'month / moon'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u3-l5": {
        "id": "zh-u3-l5",
        "unit": "zh-u3",
        "level": "A1",
        "objective": "Master the complete hierarchical time-expression formula in Mandarin (Year -> Month -> Day -> Part of Day -> Hour -> Minute), applying it to schedule meetings and synthesize all Unit 3 temporal mastery into an integrated A1 dialogue.",
        "prerequisites": [
            "zh-u3-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u3-l4"
            ]
        },
        "presentation": {
            "explanation": "中文表达时间的最根本思维特征是**从大到小、由宏观至微观**的层级递进秩序。\n\n1. 完整时间表达层级公式 (The Master Time Hierarchy Formula):\n- **年 (Year) → 月 (Month) → 日/号 (Day) → 星期 (Day of Week) → 阶段 (Part of Day) → 点 (Hour) → 分 (Minute)**\n- 阶段词汇：\n  - **上午 (shàngwǔ - morning 8am–12pm)**\n  - **中午 (zhōngwǔ - noon 12pm–1pm)**\n  - **下午 (xiàwǔ - afternoon 1pm–6pm)**\n  - **晚上 (wǎnshang - evening/night 6pm–12am)**\n- 完整范例：**2026年10月15日 星期四 下午三点半** (Thursday, October 15, 2026 at 3:30 PM)\n\n2. 第三单元综合交际实战 (Unit 3 Comprehensive Scheduling):\n- 约定会议与日常活动：询问时间（我们什么时候见面？）→ 提出具体日期与钟点（明天下午两点半可以吗？）→ 确认约定（太好了，明天见！）。",
            "examples": [
                {
                    "target": "我们明天上午九点半在大学图书馆门口见面。",
                    "reading": "Wǒmen míngtiān shàngwǔ jiǔ diǎn bàn zài dàxué túshūguǎn ménkǒu jiànmiàn.",
                    "translation": "We will meet at the university library entrance tomorrow morning at 9:30 AM."
                },
                {
                    "target": "张老师今天下午三点有一节中文课。",
                    "reading": "Zhāng lǎoshī jīntiān xiàwǔ sān diǎn yǒu yì jié zhōngwén kè.",
                    "translation": "Teacher Zhang has a Chinese class at 3:00 PM this afternoon."
                },
                {
                    "target": "A: 你们星期六晚上有空吗？ B: 有空，我们星期六晚上七点一起吃晚饭吧！",
                    "reading": "A: Nǐmen xīngqīliù wǎnshang yǒu kòng ma? B: Yǒu kòng, wǒmen xīngqīliù wǎnshang qī diǎn yìqǐ chī wǎnfàn ba!",
                    "translation": "A: Are you free Saturday evening? B: Yes, let's have dinner together Saturday evening at 7:00 PM!"
                }
            ],
            "mnemonics": [
                "Big to Small Cascade: Year → Month → Day → Time of Day → Hour → Minute!"
            ],
            "culturalNotes": [
                "This big-to-small hierarchical syntax also applies to Chinese postal addresses (Country -> Province -> City -> District -> Street -> Number -> Name) and personal names (Family Surname -> Given Name)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "用中文表达‘明天下午三点’时，正确的词序应当是：",
                    "options": [
                        "明天 + 下午 + 三点 (Míngtiān xiàwǔ sān diǎn: Big to Small)",
                        "三点下午明天",
                        "下午三点明天"
                    ],
                    "answerIndex": 0,
                    "explanation": "Mandarin organizes time strictly from largest to smallest unit: Tomorrow -> Afternoon -> 3:00."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在日程安排对话中，‘明天上午十点半见！’表达的意思是：",
                    "options": [
                        "See you tomorrow afternoon at 10:30",
                        "See you tomorrow morning at 10:30 (明天 + 上午 + 10:30)",
                        "See you yesterday"
                    ],
                    "answerIndex": 1,
                    "explanation": "上午 (morning) + 十点半 (10:30) = 10:30 AM."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个时间表达完全符合中文‘从大到小’的标准语序规范？",
                    "options": [
                        "下午两点星期五",
                        "两点下午星期五",
                        "星期五 下午两点 (Xīngqīwǔ xiàwǔ liǎng diǎn — Friday afternoon 2:00)"
                    ],
                    "answerIndex": 2,
                    "explanation": "星期五 (Friday) + 下午两点 (2:00 PM) observes correct Big-to-Small order."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'year' (年):",
                    "acceptedAnswers": [
                        "年",
                        "nian",
                        "nián",
                        "Nián",
                        "Nian"
                    ],
                    "explanation": "年 (nián) means 'year'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u4-l1": {
        "id": "zh-u4-l1",
        "unit": "zh-u4",
        "level": "A1",
        "objective": "Master the Mandarin kinship terminology for the nuclear family, distinguishing elder versus younger siblings (哥哥/弟弟, 姐姐/妹妹) and parental terms (爸爸/妈妈).",
        "prerequisites": [
            "zh-u3-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u3-l5"
            ]
        },
        "presentation": {
            "explanation": "汉语亲属称谓体系高度精确，清晰区分长幼、性别与父系母系。\n\n1. 核心家庭成员 (Nuclear Family Terms):\n- **爸爸 (bàba)**：父亲 (Father / Dad)\n- **妈妈 (māma)**：母亲 (Mother / Mom)\n- **哥哥 (gēge)**：兄长 / 年长的哥哥 (Elder brother)\n- **弟弟 (dìdi)**：年幼的弟弟 (Younger brother)\n- **姐姐 (jiějie)**：年长的姐姐 (Elder sister)\n- **妹妹 (mèimei)**：年幼的妹妹 (Younger sister)\n- **父母 (fùmǔ)**：爸爸妈妈统称 (Parents)\n- **兄弟姐妹 (xiōngdì jiěmèi)**：兄弟与姐妹统称 (Brothers and sisters / Siblings)\n\n2. 语音特点：\n- 汉语家庭叠字称谓（如：爸爸、妈妈、哥哥）第二个字一律读**轻声 (Neutral Tone)**。",
            "examples": [
                {
                    "target": "我有一个哥哥和一个妹妹，我们感情非常好。",
                    "reading": "Wǒ yǒu yí gè gēge hé yí gè mèimei, wǒmen gǎnqíng fēicháng hǎo.",
                    "translation": "I have an elder brother and a younger sister, we have a very good relationship."
                },
                {
                    "target": "我爸爸是工程师，我妈妈是中学教师。",
                    "reading": "Wǒ bàba shì gōngchéngshī, wǒ māma shì zhōngxué jiàoshī.",
                    "translation": "My father is an engineer, my mother is a middle school teacher."
                },
                {
                    "target": "你有几个兄弟姐妹？——我没有姐姐，只有一个弟弟。",
                    "reading": "Nǐ yǒu jǐ gè xiōngdì jiěmèi? —— Wǒ méiyǒu jiějie, zhǐ yǒu yí gè dìdi.",
                    "translation": "How many siblings do you have? — I have no elder sister, only one younger brother."
                }
            ],
            "mnemonics": [
                "Elder brother = 哥哥 (gēge), Younger brother = 弟弟 (dìdi); Elder sister = 姐姐 (jiějie), Younger sister = 妹妹 (mèimei)!"
            ],
            "culturalNotes": [
                "Chinese culture traditionally emphasizes filial piety (孝 xiào) and precise generational hierarchy, which is why sibling terms are strictly separated by age rather than using a single generic word like 'brother' or 'sister'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "汉语中称呼‘比自己年龄小的弟弟’应使用哪个词汇？",
                    "options": [
                        "弟弟 (dìdi)",
                        "哥哥 (gēge)",
                        "姐姐 (jiějie)"
                    ],
                    "answerIndex": 0,
                    "explanation": "弟弟 (dìdi) specifically means younger brother."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "称呼家庭中‘爸爸和妈妈’两人的统称词汇是：",
                    "options": [
                        "兄弟姐妹",
                        "父母 (fùmǔ)",
                        "老师"
                    ],
                    "answerIndex": 1,
                    "explanation": "父母 (fùmǔ) is the formal collective term for parents."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "句子‘我有一个姐姐’表示说话人拥有：",
                    "options": [
                        "一个比自己年幼的妹妹",
                        "一个比自己年长的姐姐 (One elder sister)",
                        "一个弟弟"
                    ],
                    "answerIndex": 1,
                    "explanation": "姐姐 specifically refers to an elder sister."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'Mother / Mom' (妈妈):",
                    "acceptedAnswers": [
                        "妈妈",
                        "mama",
                        "māma",
                        "Māma",
                        "Mama",
                        "媽媽"
                    ],
                    "explanation": "妈妈 (Māma) means 'mother / mom'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u4-l2": {
        "id": "zh-u4-l2",
        "unit": "zh-u4",
        "level": "A1",
        "objective": "Master the fundamental structural particle 的 (de) to form possessive and attributive noun phrases (Noun/Pronoun + 的 + Noun), including conditions where 的 can be omitted with close relations.",
        "prerequisites": [
            "zh-u4-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u4-l1"
            ]
        },
        "presentation": {
            "explanation": "结构助词「的 (de)」是汉语中使用频率极高的核心虚词，主要用于连接定语和中心语，表示所属关系（相当于英语的 's 或 of）。\n\n1. 基本所有格结构 (Possessive Pattern):\n- **修饰语 (Modifier) + 的 (de) + 中心名词 (Head Noun)**\n- 示例：\n  - 我的书 (wǒ de shū — my book)\n  - 老师的电脑 (lǎoshī de diànnǎo — teacher's computer)\n  - 中国的首都 (Zhōngguó de shǒudū — China's capital)\n\n2. 「的」的省略规则 (Omission of 的):\n- 当修饰语是人称代词，而中心语是**亲属称谓**或**关系极其亲密的集体/机构**时，「的」常可自然省略：\n  - 我爸爸（= 我的爸爸）\n  - 我家（= 我的家）\n  - 我们学校（= 我们的学校）。",
            "examples": [
                {
                    "target": "这是我的中文词典，那是他的笔记本。",
                    "reading": "Zhè shì wǒ de zhōngwén cídiǎn, nà shì tā de bǐjìběn.",
                    "translation": "This is my Chinese dictionary, that is his notebook."
                },
                {
                    "target": "我妈妈和李老师是大学同学。",
                    "reading": "Wǒ māma hé Lǐ lǎoshī shì dàxué tóngxué.",
                    "translation": "My mother and Teacher Li are university classmates."
                },
                {
                    "target": "这是我们学校最大的图书馆。",
                    "reading": "Zhè shì wǒmen xuéxiào zuì dà de túshūguǎn.",
                    "translation": "This is the largest library in our school."
                }
            ],
            "mnemonics": [
                "«的» (de) connects Possessor to Object! (我的书, 他的猫). Drop 的 for close family (我妈妈, 我家)!"
            ],
            "culturalNotes": [
                "Omitting «的» when referring to family members («我妈妈», «我哥哥») conveys personal warmth and closeness; inserting «的» («我的妈妈») sounds slightly more formal or distancing."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘李华的书’时，连接人名与名词‘书’的助词是：",
                    "options": [
                        "的：李华的书 (Lǐ Huá de shū)",
                        "得",
                        "地"
                    ],
                    "answerIndex": 0,
                    "explanation": "Structural particle 的 (de) indicates possession."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在口语中，当表达‘我的家 / 我的妈妈’等极亲密关系时，结构助词‘的’通常可以：",
                    "options": [
                        "必须重复两次",
                        "自然省略：我家、我妈妈 (Can be naturally omitted)",
                        "变成否定词"
                    ],
                    "answerIndex": 1,
                    "explanation": "的 is commonly omitted before close family and home (我妈妈, 我家)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个短语准确表达了‘他的老师’？",
                    "options": [
                        "他的老师 (Tā de lǎoshī)",
                        "他是老师",
                        "老师他"
                    ],
                    "answerIndex": 0,
                    "explanation": "他的老师 (Tā de lǎoshī) uses possessive 的."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the possessive particle (的):",
                    "acceptedAnswers": [
                        "的",
                        "de",
                        "De"
                    ],
                    "explanation": "的 (de) is the possessive / attributive structural particle."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u4-l3": {
        "id": "zh-u4-l3",
        "unit": "zh-u4",
        "level": "A1",
        "objective": "Master the existential and possessive verb 有 (yǒu: to have / there is) and its mandatory negative form 没有 (méiyǒu: not have / there is not), avoiding the incorrect *不有.",
        "prerequisites": [
            "zh-u4-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u4-l2"
            ]
        },
        "presentation": {
            "explanation": "动词「有 (yǒu)」兼具‘拥有 (Possession)’和‘存在 (Existence)’两种核心功能。\n\n1. 肯定句型 (Affirmative Pattern):\n- **主语 / 处所 + 有 + 宾语 (Subject/Location + yǒu + Object)**\n- 示例：\n  - 我有两个姐姐。(Wǒ yǒu liǎng gè jiějie. — I have two elder sisters.)\n  - 桌子上有一本书。(Zhuōzi shang yǒu yì běn shū. — There is a book on the table.)\n\n2. 否定句型 (Negative Pattern with 没有):\n- **主语 + 没有 + 宾语 (Subject + méiyǒu + Object)**\n- **关键语法铁律**：动词「有」的否定词**只能用「没 (méi)」**，绝对不能用「*不有」！\n  - 错误：*我不有哥哥。\n  - 正确：**我没有哥哥**。(Wǒ méiyǒu gēge. — I don't have an elder brother.)",
            "examples": [
                {
                    "target": "我家有四口人：爸爸、妈妈、弟弟和我。",
                    "reading": "Wǒ jiā yǒu sì kǒu rén: bàba, māma, dìdi hé wǒ.",
                    "translation": "My family has four people: dad, mom, younger brother, and me."
                },
                {
                    "target": "我没有中文名字，你能帮我起一个吗？",
                    "reading": "Wǒ méiyǒu zhōngwén míngzi, nǐ néng bāng wǒ qǐ yí gè ma?",
                    "translation": "I don't have a Chinese name, can you help me choose one?"
                },
                {
                    "target": "今天下午我们没有课，可以去公园散步。",
                    "reading": "Jīntiān xiàwǔ wǒmen méiyǒu kè, kěyǐ qù gōngyuán sànbù.",
                    "translation": "We have no classes this afternoon, we can take a walk in the park."
                }
            ],
            "mnemonics": [
                "«有» = Have / Exist! Never say *不有 — Always say «没有» (méiyǒu)!"
            ],
            "culturalNotes": [
                "The traditional Chinese greeting «有空吗？» (Yǒu kòng ma? — Do you have free time?) is a standard warm opener before inviting friends to eat or chat."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在汉语中，否定动词‘有 (to have)’的唯一正确语法形式是：",
                    "options": [
                        "没有 (méiyǒu)",
                        "不有 (*bù yǒu - incorrect)",
                        "非有"
                    ],
                    "answerIndex": 0,
                    "explanation": "The verb 有 must always be negated with 没 (没有), never *不有."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘我没有妹妹’表达的意思是：",
                    "options": [
                        "我有两个妹妹",
                        "我没有妹妹 (I do not have a younger sister)",
                        "妹妹不在家"
                    ],
                    "answerIndex": 1,
                    "explanation": "我没有妹妹 translates directly to 'I do not have a younger sister'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "表达‘他有一本中文书’的正确否定形式是：",
                    "options": [
                        "他不有一本中文书",
                        "他没有中文书 (Tā méiyǒu zhōngwén shū)",
                        "他是没有中文书"
                    ],
                    "answerIndex": 1,
                    "explanation": "Negation of 有 requires 没有: 他没有中文书."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the verb 'to have / exist' (有):",
                    "acceptedAnswers": [
                        "有",
                        "you",
                        "yǒu",
                        "Yǒu",
                        "You"
                    ],
                    "explanation": "有 (yǒu) means 'to have / there is'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u4-l4": {
        "id": "zh-u4-l4",
        "unit": "zh-u4",
        "level": "A1",
        "objective": "Master the core Mandarin classifier / measure word system (量词), correctly pairing nouns with specific classifiers (口 for family, 本 for books, 张 for flat objects, 位 for respected persons, 个 as general classifier).",
        "prerequisites": [
            "zh-u4-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u4-l3"
            ]
        },
        "presentation": {
            "explanation": "量词（Measure Words / Classifiers）是汉语语法最显著的特色之一。在汉语中，**数词不能直接修饰名词**，中间必须插入相应的量词！\n\n1. 核心量词公式 (Classifier Formula):\n- **数词 / 代词 + 量词 + 名词 (Number/Demonstrative + Classifier + Noun)**\n\n2. 六大核心量词与搭配 (6 Essential Classifiers):\n- **个 (gè)**：通用量词，用于人或无特定量词的事物（如：一个人、三个苹果、一个问题）\n- **口 (kǒu)**：专用于计算**家庭人口**（如：一家三口人、五口人）\n- **本 (běn)**：用于装订成册的书籍刊物（如：一本书、两本字典）\n- **位 (wèi)**：用于尊称人物（如：一位老师、三位客人）\n- **张 (zhāng)**：用于平面、纸张、床桌（如：一张纸、两张桌子、一张地图）\n- **支 (zhī)**：用于笔杆等细长物品（如：一支笔）。",
            "examples": [
                {
                    "target": "我家一共有五口人，家里养了一只小猫。",
                    "reading": "Wǒ jiā yígòng yǒu wǔ kǒu rén, jiā lǐ yǎng le yì zhī xiǎomāo.",
                    "translation": "My family has 5 people altogether, and we keep a cat."
                },
                {
                    "target": "请给我一张白纸和两支铅笔。",
                    "reading": "Qǐng gěi wǒ yì zhāng bái zhǐ hé liǎng zhī qiānbǐ.",
                    "translation": "Please give me a sheet of white paper and two pencils."
                },
                {
                    "target": "今天教室里来了三位新老师。",
                    "reading": "Jīntiān jiàoshì lǐ lái le sān wèi xīn lǎoshī.",
                    "translation": "Three new teachers came to the classroom today."
                }
            ],
            "mnemonics": [
                "Classifiers: 口 for family members, 本 for books, 张 for flat sheets/tables, 位 for polite persons, 个 for general things!"
            ],
            "culturalNotes": [
                "The classifier 口 (kǒu - mouth) reflects agrarian China's historical view of family members as 'mouths to feed' when allocating land and grain."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "计算‘家庭人口数量’（如：一家四___人）时，最地道专用的量词是：",
                    "options": [
                        "口 (kǒu: 一家四口人)",
                        "本",
                        "张"
                    ],
                    "answerIndex": 0,
                    "explanation": "口 (kǒu) is the specialized classifier for family members."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "修饰名词‘书 (book)’时，正确的数词+量词搭配是：",
                    "options": [
                        "一张书",
                        "两本书 (liǎng běn shū)",
                        "两个书"
                    ],
                    "answerIndex": 1,
                    "explanation": "Books require the bound-volume classifier 本 (běn)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "表达‘一位受人尊敬的老师’，量词‘位’体现了什么语用色彩？",
                    "options": [
                        "表示轻视",
                        "表示数量极大",
                        "表示敬重与礼貌 (Polite / respectful address for persons)"
                    ],
                    "answerIndex": 2,
                    "explanation": "位 (wèi) adds honorific respect when quantifying people."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the book classifier (本):",
                    "acceptedAnswers": [
                        "本",
                        "ben",
                        "běn",
                        "Běn",
                        "Ben"
                    ],
                    "explanation": "本 (běn) is the classifier for bound books."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u4-l5": {
        "id": "zh-u4-l5",
        "unit": "zh-u4",
        "level": "A1",
        "objective": "Master the standard family inquiry formula (你家有几口人？) and synthesize all Unit 4 kinship terms, possessives with 的, existential 有/没有, and measure words into a fluent, natural A1 family introduction dialogue.",
        "prerequisites": [
            "zh-u4-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u4-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将全面整合第四单元的所有语法与词汇，完成关于家庭成员与个人拥有的综合实战交流。\n\n1. 核心家庭问答句型 (Family Inquiries):\n- **你家有几口人？** (Nǐ jiā yǒu jǐ kǒu rén? — How many people are in your family?)\n- 回答模式：**我家有 [数字] 口人：[成员1]、[成员2] 和我。**\n  - 示例：我家有四口人：爸爸、妈妈、一个妹妹和我。\n- 进阶问答：\n  - 你有兄弟姐妹吗？ (Do you have siblings?)\n  - 我有一个哥哥和一个弟弟，没有姐姐妹妹。(I have an elder brother and younger brother, no sisters.)\n\n2. 第四单元综合交际实战 (Unit 4 Comprehensive Synthesis):\n- 展示全家福照片：问候 → 介绍全家人口（这是我家的照片，我家有五口人）→ 逐一介绍父母职业与兄弟姐妹（这是我爸爸，他是医生；这是我姐姐，她是大学生）→ 询问对方家庭。",
            "examples": [
                {
                    "target": "大卫：李明，你家有几口人？ 李明：我家有三口人：爸爸、妈妈和我。你呢？",
                    "reading": "Dàwèi: Lǐ Míng, nǐ jiā yǒu jǐ kǒu rén? Lǐ Míng: Wǒ jiā yǒu sān kǒu rén: bàba, māma hé wǒ. Nǐ ne?",
                    "translation": "David: Li Ming, how many people are in your family? Li Ming: My family has three people: dad, mom, and me. How about you?"
                },
                {
                    "target": "大卫：我家有五口人：父母、一个哥哥、一个妹妹和我。这是我们家的照片。",
                    "reading": "Dàwèi: Wǒ jiā yǒu wǔ kǒu rén: fùmǔ, yí gè gēge, yí gè mèimei hé wǒ. Zhè shì wǒmen jiā de zhàopiàn.",
                    "translation": "David: My family has 5 people: parents, an elder brother, a younger sister, and me. This is our family photo."
                },
                {
                    "target": "王老师是一位非常亲切的中文老师，她有两本很棒的汉语教材。",
                    "reading": "Wáng lǎoshī shì yí wèi fēicháng qīnqiè de zhōngwén lǎoshī, tā yǒu liǎng běn hěn bàng de hànyǔ jiàocái.",
                    "translation": "Teacher Wang is a very warm Chinese teacher; she has two wonderful Chinese textbooks."
                }
            ],
            "mnemonics": [
                "Family Intro Blueprint: 你家有几口人？ → 我家有...口人: 爸爸, 妈妈, 哥哥, 弟弟, 姐姐, 妹妹, 和我!"
            ],
            "culturalNotes": [
                "Because of the One-Child Policy (独生子女政策) enacted in 1979 and relaxed in 2016, many modern Chinese urban youth grew up as only children (独生子/独生女), making the typical family size '三口之家' (family of three)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "用中文询问对方‘你家有几口人？’时，最标准正确的问句是：",
                    "options": [
                        "你家有几口人？ (Nǐ jiā yǒu jǐ kǒu rén?)",
                        "你家有多少本书？",
                        "你家谁人？"
                    ],
                    "answerIndex": 0,
                    "explanation": "«你家有几口人？» uses classifier 口 to ask family size."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "当介绍家庭成员并列举‘爸爸、妈妈和我’时，连接最后一项的常用连词是：",
                    "options": [
                        "也",
                        "和 (hé: and)",
                        "但是"
                    ],
                    "answerIndex": 1,
                    "explanation": "和 (hé) coordinates nouns/pronouns in a list (爸爸、妈妈和我)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "对话中‘我家有四口人：爸爸、妈妈、一个弟弟和我’说明说话人家里有几个孩子？",
                    "options": [
                        "只有一个孩子",
                        "共有四个孩子",
                        "共有两个孩子（弟弟和说话人自己）(Two children)"
                    ],
                    "answerIndex": 2,
                    "explanation": "The children are the younger brother and the speaker himself/herself (2 children)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'family / home' (家):",
                    "acceptedAnswers": [
                        "家",
                        "jia",
                        "jiā",
                        "Jiā",
                        "Jia"
                    ],
                    "explanation": "家 (jiā) means 'family / home'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u5-l1": {
        "id": "zh-u5-l1",
        "unit": "zh-u5",
        "level": "A1",
        "objective": "Master the core Mandarin action verbs (吃, 喝, 看, 听, 说, 写, 买, 去) and their typical verb-object collocations for daily routine activities.",
        "prerequisites": [
            "zh-u4-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u4-l5"
            ]
        },
        "presentation": {
            "explanation": "汉语日常行为大多由单音节或双音节及物动词（Transitive Verbs）与宾语搭配构成动宾短语。\n\n1. 八大核心行为动词 (8 Core Action Verbs):\n- **吃 (chī)**：吃（eat）→ 吃饭 (chī fàn)、吃苹果 (chī píngguǒ)\n- **喝 (hē)**：喝（drink）→ 喝茶 (hē chá)、喝水 (hē shuǐ)、喝咖啡 (hē kāfēi)\n- **看 (kàn)**：看（look / read / watch）→ 看书 (kàn shū)、看电影 (kàn diànyǐng)\n- **听 (tīng)**：听（listen）→ 听音乐 (tīng yīnyuè)、听课 (tīng kè)\n- **说 (shuō)**：说（speak / say）→ 说汉语 (shuō hànyǔ)、说中文 (shuō zhōngwén)\n- **写 (xiě)**：写（write）→ 写汉字 (xiě hànzì)、写作业 (xiě zuòyè)\n- **买 (mǎi)**：买（buy）→ 买东西 (mǎi dōngxi)、买书 (mǎi shū)\n- **去 (qù)**：去（go to）→ 去学校 (qù xuéxiào)、去商店 (qù shāngdiàn)。\n\n2. 基础 SVO 语序 (Subject + Verb + Object):\n- 我每天早晨喝茶，下午看书。(Wǒ měitiān zǎochén hē chá, xiàwǔ kàn shū. — I drink tea every morning and read books in the afternoon.)",
            "examples": [
                {
                    "target": "我喜欢喝中国绿茶，也喜欢吃北京烤鸭。",
                    "reading": "Wǒ xǐhuan hē Zhōngguó lǜchá, yě xǐhuan chī Běijīng kǎoyā.",
                    "translation": "I like drinking Chinese green tea and also like eating Beijing roast duck."
                },
                {
                    "target": "大卫每天晚上都在宿舍认真地写汉字、听中文录音。",
                    "reading": "Dàwèi měitiān wǎnshang dōu zài sùshè rènzhēn de xiě hànzì, tīng zhōngwén lùyīn.",
                    "translation": "David diligently writes Hanzi and listens to Chinese recordings in his dorm every evening."
                },
                {
                    "target": "我们下午一起去书店买词典吧！",
                    "reading": "Wǒmen xiàwǔ yìqǐ qù shūdiàn mǎi cídiǎn ba!",
                    "translation": "Let's go to the bookstore to buy dictionaries together this afternoon!"
                }
            ],
            "mnemonics": [
                "«吃» = Eat with mouth (口)! «喝» = Drink with mouth (口)! «看» = Look with hand over eye (手+目)!"
            ],
            "culturalNotes": [
                "Tea culture (茶文化 chá wénhuà) is an integral pillar of Chinese daily life, symbolizing harmony, hospitality, and mindfulness across thousands of years."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘喝咖啡 (Drink coffee)’时，动词‘喝’的正确汉字是：",
                    "options": [
                        "喝 (hē)",
                        "吃",
                        "买"
                    ],
                    "answerIndex": 0,
                    "explanation": "喝 (hē) with mouth radical 口 is used for drinking liquids."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "动宾短语‘看书’和‘看电影’中，动词‘看’表达的意思是：",
                    "options": [
                        "写",
                        "看 / 阅读 / 观看 (Look / Read / Watch)",
                        "听"
                    ],
                    "answerIndex": 1,
                    "explanation": "看 covers looking, reading (books), and watching (movies)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "句子‘他在教室里写汉字’中的核心动作是：",
                    "options": [
                        "吃饭",
                        "写中国汉字 (Writing Chinese characters)",
                        "去商店"
                    ],
                    "answerIndex": 1,
                    "explanation": "写汉字 means writing Chinese characters."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to drink' (喝):",
                    "acceptedAnswers": [
                        "喝",
                        "he",
                        "hē",
                        "Hē",
                        "He"
                    ],
                    "explanation": "喝 (hē) means 'to drink'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u5-l2": {
        "id": "zh-u5-l2",
        "unit": "zh-u5",
        "level": "A1",
        "objective": "Master the Mandarin locative prepositional structure (Subject + 在 + Location + Verb + Object), recognizing the strict chronological constraint that location precedes action.",
        "prerequisites": [
            "zh-u5-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u5-l1"
            ]
        },
        "presentation": {
            "explanation": "汉语与印欧语言的一个关键语法差异在于**介词状语的位置**。在汉语中，表示动作发生地点的介词短语**必须置于谓语动词之前**！\n\n1. 介词在字句黄金公式 (Locative Action Formula):\n- **主语 + 在 (zài) + 地点名词 (Location) + 动词 (Verb) + 宾语 (Object)**\n- 示例对比：\n  - 英语：I read books *in the library*.\n  - 汉语：我 **在图书馆** 看书。(Wǒ zài túshūguǎn kàn shū.) *[绝对不能说成 *我看书在图书馆]*\n\n2. 常用地点词汇 (Locations):\n- **学校 (xuéxiào - school)**, **大学 (dàxué - university)**\n- **图书馆 (túshūguǎn - library)**, **教室 (jiàoshì - classroom)**\n- **食堂 (shítáng - cafeteria / dining hall)**, **宿舍 (sùshè - dormitory)**\n- **商店 (shāngdiàn - shop / store)**, **家 (jiā - home)**。",
            "examples": [
                {
                    "target": "李明每天中午在大学食堂吃饭。",
                    "reading": "Lǐ Míng měitiān zhōngwǔ zài dàxué shítáng chī fàn.",
                    "translation": "Li Ming eats lunch in the university cafeteria every day at noon."
                },
                {
                    "target": "同学们都在教室里认真地听张老师讲课。",
                    "reading": "Tóngxuémen dōu zài jiàoshì lǐ rènzhēn de tīng Zhāng lǎoshī jiǎngkè.",
                    "translation": "The classmates are all in the classroom attentively listening to Teacher Zhang lecture."
                },
                {
                    "target": "大卫下午在宿舍看书，晚上去体育馆运动。",
                    "reading": "Dàwèi xiàwǔ zài sùshè kàn shū, wǎnshang qù tǐyùguǎn yùndòng.",
                    "translation": "David reads books in the dormitory in the afternoon and goes to the gym to exercise in the evening."
                }
            ],
            "mnemonics": [
                "Location comes BEFORE Action! (人在哪儿 + 做什么: 我在学校学习!)"
            ],
            "culturalNotes": [
                "In Chinese syntactic philosophy, setting the stage (time, place, condition) always precedes the unfolding of the action itself."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘我在图书馆看书’时，介词短语‘在图书馆’应当放在哪里？",
                    "options": [
                        "放在动词‘看书’之前：我在图书馆看书",
                        "放在句尾：我看书在图书馆",
                        "放在句首且无主语：在看书我图书馆"
                    ],
                    "answerIndex": 0,
                    "explanation": "Locative prepositional phrases must precede the main verb: 主语 + 在地点 + 动词."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "下列哪个句子完全符合汉语的标准语序规范？",
                    "options": [
                        "他买东西在商店",
                        "他在商店买东西 (Tā zài shāngdiàn mǎi dōngxi)",
                        "买他在商店东西"
                    ],
                    "answerIndex": 1,
                    "explanation": "他在商店买东西 correctly places 在商店 before the verb 买."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "句子‘我们都在大学学习汉语’表达的完整语义是：",
                    "options": [
                        "我们在大学教汉语",
                        "大学不在我们这里",
                        "我们都在大学里学习中文 (We all study Chinese at university)"
                    ],
                    "answerIndex": 2,
                    "explanation": "我们都在大学学习汉语 indicates that we all study Chinese at university."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the locative preposition 'at / in' (在):",
                    "acceptedAnswers": [
                        "在",
                        "zai",
                        "zài",
                        "Zài",
                        "Zai"
                    ],
                    "explanation": "在 (zài) indicates location ('at / in / on')."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u5-l3": {
        "id": "zh-u5-l3",
        "unit": "zh-u5",
        "level": "A1",
        "objective": "Ask and answer questions about ongoing and habitual actions using the question phrases 做什么 (zuò shénme / what are you doing?) and 动词 + 什么 (Verb + shénme).",
        "prerequisites": [
            "zh-u5-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u5-l2"
            ]
        },
        "presentation": {
            "explanation": "询问别人正在做什么或具体动作的宾语时，主要使用疑问代词「什么 (shénme)」与动词「做 (zuò - to do)」配合。\n\n1. 核心疑问句式 (Action Inquiries):\n- **你在做什么？** (Nǐ zài zuò shénme? — What are you doing?)\n  - 回答：我在看书。(Wǒ zài kàn shū. — I am reading books.)\n  - 回答：我在写作业。(Wǒ zài xiě zuòyè. — I am doing homework.)\n\n2. 动词 + 什么？ (Inquiring Specific Objects):\n- **你喝什么？** (Nǐ hē shénme? — What are you drinking?) → 我喝绿茶。(I drink green tea.)\n- **他买什么？** (Tā mǎi shénme? — What is he buying?) → 他买中文词典。(He is buying a Chinese dictionary.)\n- **你们在听什么？** (Nǐmen zài tīng shénme? — What are you listening to?) → 我们在听中国音乐。(We are listening to Chinese music.)",
            "examples": [
                {
                    "target": "A: 你在做什么呢？ B: 我在看一本关于中国历史的书。",
                    "reading": "A: Nǐ zài zuò shénme ne? B: Wǒ zài kàn yì běn guānyú Zhōngguó lìshǐ de shū.",
                    "translation": "A: What are you doing? B: I am reading a book about Chinese history."
                },
                {
                    "target": "A: 服务员，请问你想喝点什么？ B: 我喝一杯热茶，谢谢！",
                    "reading": "A: Fúwùyuán, qǐngwèn nǐ xiǎng hē diǎn shénme? B: Wǒ hē yì bēi rè chá, xièxie!",
                    "translation": "A: Waiter, what would you like to drink? B: I'll drink a cup of hot tea, thank you!"
                },
                {
                    "target": "他们下午去超市买什么东西？——他们去买水果和面包。",
                    "reading": "Tāmen xiàwǔ qù chāoshì mǎi shénme dōngxi? —— Tāmen qù mǎi shuǐguǒ hé miànbāo.",
                    "translation": "What are they buying at the supermarket this afternoon? — They are buying fruit and bread."
                }
            ],
            "mnemonics": [
                "«做» = To do! «做什么» = What doing? S + 在做什么 = What are you doing?"
            ],
            "culturalNotes": [
                "Asking «在做什么呢？» is a casual, friendly conversation starter among Chinese friends, equivalent to 'What are you up to?'."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "用中文询问对方‘你在做什么？’时，最标准自然的问句是：",
                    "options": [
                        "你在做什么？ (Nǐ zài zuò shénme?)",
                        "你做什么在？",
                        "什么你在做？"
                    ],
                    "answerIndex": 0,
                    "explanation": "«你在做什么？» is the standard action inquiry without word inversion."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "当服务员问你「你想喝什么？」时，得体的回答句式是：",
                    "options": [
                        "我是咖啡",
                        "我想喝一杯咖啡 (Wǒ xiǎng hē yì bēi kāfēi)",
                        "喝咖啡在"
                    ],
                    "answerIndex": 1,
                    "explanation": "我想喝一杯咖啡 directly and politely answers the question."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "问句‘他在图书馆看什么？’是在询问：",
                    "options": [
                        "他在图书馆看什么人/书籍内容 (What he is reading)",
                        "他什么时候去图书馆",
                        "图书馆在哪里"
                    ],
                    "answerIndex": 0,
                    "explanation": "他在图书馆看什么？ inquires about the specific reading material."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to do / to make' (做):",
                    "acceptedAnswers": [
                        "做",
                        "zuo",
                        "zuò",
                        "Zuò",
                        "Zuo",
                        "作"
                    ],
                    "explanation": "做 (zuò) means 'to do / to make'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u5-l4": {
        "id": "zh-u5-l4",
        "unit": "zh-u5",
        "level": "A1",
        "objective": "Master the sequential conjunction pair 先...然后... (xiān... ránhòu... / first... then...) to articulate multi-step daily routines and chronological activities.",
        "prerequisites": [
            "zh-u5-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u5-l3"
            ]
        },
        "presentation": {
            "explanation": "在叙述一连串动作或日常作息安排时，常用关联副词「先 (xiān - first)」和「然后 (ránhòu - then / after that)」来连接多个动作分句。\n\n1. 顺序句型结构 (Sequential Pattern):\n- **主语 + 先 (xiān) + 动作一，然后 (ránhòu) + 动作二**\n- 示例：\n  - 我**先**吃饭，**然后**去图书馆学习。(Wǒ xiān chī fàn, ránhòu qù túshūguǎn xuéxí. — I eat first, then go to the library to study.)\n  - 他每天早晨**先**喝一杯水，**然后**去公园跑步。(He drinks a glass of water first every morning, then goes running in the park.)\n\n2. 进一步扩展结构 (Multi-step Sequence):\n- **先...接着...然后...最后...** (First... next... then... finally...)\n- 掌握「先...然后...」是构建连贯复合句的核心基石。",
            "examples": [
                {
                    "target": "我们下午先去教室上中文课，然后一起去食堂吃晚饭。",
                    "reading": "Wǒmen xiàwǔ xiān qù jiàoshì shàng zhōngwén kè, ránhòu yìqǐ qù shítáng chī wǎnfàn.",
                    "translation": "We first go to the classroom for Chinese class this afternoon, then go to the cafeteria together for dinner."
                },
                {
                    "target": "我每天晚上先复习生词，然后练习写汉字。",
                    "reading": "Wǒ měitiān wǎnshang xiān fùxí shēngcí, ránhòu liànxí xiě hànzì.",
                    "translation": "Every evening I review new vocabulary first, then practice writing Chinese characters."
                },
                {
                    "target": "他打算先在北京学习一年汉语，然后去上海工作。",
                    "reading": "Tā dǎsuàn xiān zài Běijīng xuéxí yì nián hànyǔ, ránhòu qù Shànghǎi gōngzuò.",
                    "translation": "He plans to study Chinese in Beijing for one year first, then go work in Shanghai."
                }
            ],
            "mnemonics": [
                "«先» = First (step 1)! «然后» = Then (step 2)! (先...然后... Sequence master!)"
            ],
            "culturalNotes": [
                "Structured sequencing is vital in Chinese professional communication and formal protocols, where steps must proceed in orderly harmony (循序渐进 xún xù jiàn jìn)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘先做动作A，然后做动作B’时，常用的关联词搭配是：",
                    "options": [
                        "先……然后…… (xiān... ránhòu...)",
                        "因为……所以……",
                        "虽然……但是……"
                    ],
                    "answerIndex": 0,
                    "explanation": "先...然后... connects sequential actions chronologically."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘我先去洗手，然后吃饭’的意思是：",
                    "options": [
                        "边吃饭边洗手",
                        "先洗手，接着再吃饭 (First wash hands, then eat)",
                        "吃完饭再去洗手"
                    ],
                    "answerIndex": 1,
                    "explanation": "先 (first) wash hands -> 然后 (then) eat."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子正确使用了‘先……然后……’顺序关联词？",
                    "options": [
                        "然后我看书，先睡觉",
                        "我先在图书馆看书，然后回宿舍休息 (Wǒ xiān zài túshūguǎn kàn shū, ránhòu huí sùshè xiūxi)",
                        "我看了然后先书"
                    ],
                    "answerIndex": 1,
                    "explanation": "我先在图书馆看书，然后回宿舍休息 correctly applies the sequence."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'first / advance' (先):",
                    "acceptedAnswers": [
                        "先",
                        "xian",
                        "xiān",
                        "Xiān",
                        "Xian"
                    ],
                    "explanation": "先 (xiān) means 'first / earlier'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u5-l5": {
        "id": "zh-u5-l5",
        "unit": "zh-u5",
        "level": "A1",
        "objective": "Synthesize all Unit 5 action verbs, locative 在 phrases, action inquiries, and sequential markers (先...然后...) into a comprehensive A1 narration of a complete daily routine.",
        "prerequisites": [
            "zh-u5-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u5-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将整合时间表达（Unit 3）、空间介词（在 + 地点）与动作行为（Unit 5），完整叙述‘我的一天 (My Typical Day)’。\n\n1. 完整日常作息叙述模板 (Daily Routine Master Blueprint):\n- **早晨**：我每天早晨七点起床，七点半在食堂吃早饭。(I get up at 7:00, eat breakfast at 7:30 in cafeteria.)\n- **上午**：八点到十二点我们在教室上课，练习听说读写。(8:00–12:00 we have class, practicing listening, speaking, reading, writing.)\n- **中午**：十二点半在食堂吃午饭，然后回宿舍休息半小时。(12:30 lunch in cafeteria, then rest in dorm for 30 mins.)\n- **下午**：下午两点我去图书馆看书、写作业。(2:00 PM I go to library to read and do homework.)\n- **晚上**：晚上六点半和朋友一起吃晚饭，八点听音乐，十一点睡觉。(6:30 PM dinner with friends, 8:00 music, 11:00 sleep).\n\n2. 第五单元综合交际实战 (Unit 5 Comprehensive Synthesis):\n- 两人对话：询问对方一天的作息安排（你每天几点上课？下午在做什么？）并相互约定活动。",
            "examples": [
                {
                    "target": "我的一天非常充实：早晨先去操场跑步，然后回宿舍吃早饭、读中文课文。",
                    "reading": "Wǒ de yì tiān fēicháng chōngshí: zǎochén xiān qù cāochǎng pǎobù, ránhòu huí sùshè chī zǎofàn, dú zhōngwén kèwén.",
                    "translation": "My day is very fulfilling: in the morning I first go running on the track, then return to the dorm to eat breakfast and read Chinese texts."
                },
                {
                    "target": "张华：大卫，你下午一般在做什么？ 大卫：我下午两点先去图书馆看书，四点去体育馆打篮球。",
                    "reading": "Zhāng Huá: Dàwèi, nǐ xiàwǔ yībān zài zuò shénme? Dàwèi: Wǒ xiàwǔ liǎng diǎn xiān qù túshūguǎn kàn shū, sì diǎn qù tǐyùguǎn dǎ lánqiú.",
                    "translation": "Zhang Hua: David, what do you usually do in the afternoon? David: At 2:00 PM I first go to the library to read, and at 4:00 PM I go to the gym to play basketball."
                },
                {
                    "target": "我们每天都在进步，学好中文需要多听、多说、多读、多写！",
                    "reading": "Wǒmen měitiān dōu zài jìnbù, xué hǎo zhōngwén xūyào duō tīng, duō shuō, duō dú, duō xiě!",
                    "translation": "We are progressing every day; mastering Chinese requires more listening, speaking, reading, and writing!"
                }
            ],
            "mnemonics": [
                "The 4 Pillars of Language: 听 (Listen), 说 (Speak), 读 (Read), 写 (Write)!"
            ],
            "culturalNotes": [
                "The traditional Chinese concept of daily rhythm is captured in the proverb «一日之计在于晨» (Yí rì zhī jì zài yú chén — A day's planning begins in the morning), emphasizing early rising and morning focus."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "叙述日常作息时，‘我早晨七点起床，先喝水，然后吃早饭’中，哪个动作发生得最早？",
                    "options": [
                        "喝水 (Drinking water happens first before eating breakfast)",
                        "吃早饭",
                        "上课"
                    ],
                    "answerIndex": 0,
                    "explanation": "先喝水 indicates drinking water occurs first."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在汉语学习中，代表‘听说读写’四大核心技能的汉字是：",
                    "options": [
                        "吃喝玩乐",
                        "听、说、读、写 (Listen, Speak, Read, Write)",
                        "去、来、在、做"
                    ],
                    "answerIndex": 1,
                    "explanation": "听 (listen), 说 (speak), 读 (read), 写 (write) are the four core language skills."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "句子‘大卫下午在图书馆看书，晚上回宿舍写作业’完整描述了：",
                    "options": [
                        "大卫的家庭成员",
                        "大卫的国籍",
                        "大卫下午和晚上的具体日常活动与地点 (David's afternoon and evening activities & locations)"
                    ],
                    "answerIndex": 2,
                    "explanation": "The sentence describes David's locations and specific daily actions."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to eat' (吃):",
                    "acceptedAnswers": [
                        "吃",
                        "chi",
                        "chī",
                        "Chī",
                        "Chi",
                        "喫"
                    ],
                    "explanation": "吃 (chī) means 'to eat'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u6-l1": {
        "id": "zh-u6-l1",
        "unit": "zh-u6",
        "level": "A2",
        "objective": "Master the verbal perfective aspect marker 了₁ placed directly after a verb (Verb + 了 + Quantified Object) to indicate the completion or realization of an action.",
        "prerequisites": [
            "zh-u5-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u5-l5"
            ]
        },
        "presentation": {
            "explanation": "动态助词「了₁」置于**动词之后**，表示动作的完成或实现（Perfective Aspect），不同于印欧语系的时态（Tense）——它关注的是动作是否发生或完成，而非单纯的过去时间。\n\n1. 核心句型结构 (Verbal 了₁ Pattern):\n- **主语 + 动词 + 了 + 数量词/特定宾语 (Subject + Verb + le + Quantified Object)**\n- 示例：\n  - 我买**了**三本中文书。(Wǒ mǎi le sān běn zhōngwén shū. — I bought three Chinese books.)\n  - 他喝**了**两杯热茶。(Tā hē le liǎng bēi rè chá. — He drank two cups of hot tea.)\n  - 妈妈做**了**很多好吃的菜。(Māma zuò le hěn duō hǎochī de cài. — Mom cooked many delicious dishes.)\n\n2. 关键语法规则 (Key Constraints):\n- 当动词带有数量定语修饰的宾语（如：三本书、一杯茶）时，动词后通常必须带「了₁」。\n- 若动词带的是简单无修饰的名词宾语，单独使用「动词 + 了 + 宾语」在句尾通常未完，常需后续分句（如：我吃了饭就去学校）。",
            "examples": [
                {
                    "target": "我昨天下午在书店买了两本很有意思的中国小说。",
                    "reading": "Wǒ zuótiān xiàwǔ zài shūdiàn mǎi le liǎng běn hěn yǒu yìsi de Zhōngguó xiǎoshuō.",
                    "translation": "I bought two very interesting Chinese novels at the bookstore yesterday afternoon."
                },
                {
                    "target": "张老师今天上午给我们讲了三个重要的语法点。",
                    "reading": "Zhāng lǎoshī jīntiān shàngwǔ gěi wǒmen jiǎng le sān gè zhòngyào de yǔfǎ diǎn.",
                    "translation": "Teacher Zhang explained three important grammar points to us this morning."
                },
                {
                    "target": "大卫喝了一杯咖啡，然后开始在电脑上写作业。",
                    "reading": "Dàwèi hē le yì bēi kāfēi, ránhòu kāishǐ zài diànnǎo shang xiě zuòyè.",
                    "translation": "David drank a cup of coffee, then started writing his homework on the computer."
                }
            ],
            "mnemonics": [
                "Verb + 了 = Action Completed! (买了 3 本书 = Completed buying 3 books!)"
            ],
            "culturalNotes": [
                "Aspect (体态) in Mandarin focuses on whether an action is completed (了), ongoing (在), continuing (着), or experienced (过), giving Chinese verbal flexibility without rigid verb conjugations."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘我买了两张电影票’时，动态助词‘了’应当置于哪个词之后？",
                    "options": [
                        "置于动词‘买’之后：我买了两张电影票",
                        "置于句首：了我买两张电影票",
                        "置于宾语后：我买两张电影票了了"
                    ],
                    "answerIndex": 0,
                    "explanation": "Verbal aspect marker 了₁ immediately follows the verb: 买 + 了 + 两张票."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘他喝了一杯绿茶’表达的核心语法意义是：",
                    "options": [
                        "他正在喝绿茶",
                        "喝一杯绿茶的动作已经完成/实现 (The action of drinking a cup of green tea is completed)",
                        "他不喝茶"
                    ],
                    "answerIndex": 1,
                    "explanation": "Verb + 了 indicates completion or realization of the drinking action."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子正确运用了动词后的动态助词‘了’？",
                    "options": [
                        "我看了两本中文书 (Wǒ kàn le liǎng běn zhōngwén shū)",
                        "我了两本书看",
                        "看我是两本书了"
                    ],
                    "answerIndex": 0,
                    "explanation": "我看了两本中文书 correctly places 了 after the verb 看."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the aspect marker (了):",
                    "acceptedAnswers": [
                        "了",
                        "le",
                        "Le",
                        "liǎo"
                    ],
                    "explanation": "了 (le) is the aspect and modal particle."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u6-l2": {
        "id": "zh-u6-l2",
        "unit": "zh-u6",
        "level": "A2",
        "objective": "Master the sentence-final modal particle 了₂ indicating a change of state, the arrival of a new situation ('now / anymore'), or imminent changes.",
        "prerequisites": [
            "zh-u6-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u6-l1"
            ]
        },
        "presentation": {
            "explanation": "句末语气助词「了₂」置于**句子末尾**，表示情况发生改变、新状态出现或认识上的新发现（Change of State / New Situation）。\n\n1. 句末了的核心功能 (Functions of Sentence-Final 了₂):\n- **新情况产生 / 状态转变 (Change of State)**：\n  - 下雨**了**。(Xià yǔ le. — It is raining now / It started raining.)\n  - 天气冷**了**。(Tiānqì lěng le. — The weather has gotten cold.)\n  - 我有中文名字**了**。(Wǒ yǒu zhōngwén míngzi le. — I have a Chinese name now!)\n- **程度极端与感叹句 (Exclamations with 太...了 / 极了)**：\n  - **太 + 形容词 + 了**：太好**了**！(Great!)、太贵**了**！(Too expensive!)\n- **动作即将发生 (Imminent Action: 快要...了 / 要...了)**：\n  - 火车要开**了**。(The train is about to leave.)",
            "examples": [
                {
                    "target": "下课了，我们去食堂吃午饭吧！",
                    "reading": "Xiàkè le, wǒmen qù shítáng chī wǔfàn ba!",
                    "translation": "Class is over now, let's go to the cafeteria for lunch!"
                },
                {
                    "target": "这件衣服太漂亮了，但是价格有点儿贵。",
                    "reading": "Zhè jiàn yīfu tài piàoliang le, dànshì jiàgé yǒudiǎnr guì.",
                    "translation": "This piece of clothing is so pretty, but the price is a bit expensive."
                },
                {
                    "target": "现在已经是秋天了，北京的天气变得非常凉快。",
                    "reading": "Xiànzài yǐjīng shì qiūtiān le, Běijīng de tiānqì biàn de fēicháng liángkuai.",
                    "translation": "It is already autumn now, and Beijing's weather has become very cool and pleasant."
                }
            ],
            "mnemonics": [
                "End of sentence 了 = Change of state / New reality! (下雨了 = It's raining now! 太好了 = Great!)"
            ],
            "culturalNotes": [
                "«下课了！» and «吃饭了！» are among the most joyful everyday cultural exclamations heard across schools and homes in China."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "当看到窗外开始下雨时，表示‘现在下雨了（出现新天气状态）’的正确表达是：",
                    "options": [
                        "下雨了！ (Xià yǔ le!)",
                        "不下雨",
                        "下雨在"
                    ],
                    "answerIndex": 0,
                    "explanation": "句末了 indicates the emergence of a new state: 下雨了."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "中文中表示感叹‘太好了！ (That's great!)’的固定格式是：",
                    "options": [
                        "很好了",
                        "太好了！ (Tài hǎo le!)",
                        "真好是"
                    ],
                    "answerIndex": 1,
                    "explanation": "太 + Adjective + 了 is the standard exclamation of high degree."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "句子‘大卫会说汉语了’表达的含义是：",
                    "options": [
                        "大卫会说汉语以前一直都会",
                        "大卫以前不会说，但现在学会了（状态发生改变）(David can speak Chinese now)",
                        "大卫不想说汉语"
                    ],
                    "answerIndex": 1,
                    "explanation": "Sentence-final 了 indicates a change of state: David can speak Chinese now."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'too / extremely' (太):",
                    "acceptedAnswers": [
                        "太",
                        "tai",
                        "tài",
                        "Tài",
                        "Tai"
                    ],
                    "explanation": "太 (tài) means 'too / extremely' (as in 太好了)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u6-l3": {
        "id": "zh-u6-l3",
        "unit": "zh-u6",
        "level": "A2",
        "objective": "Master the 'Double 了' construction (Verb + 了₁ + Duration + Noun + 了₂) to express an action that has lasted for a duration of time AND is still ongoing.",
        "prerequisites": [
            "zh-u6-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u6-l2"
            ]
        },
        "presentation": {
            "explanation": "「双了句（Double 了）」是汉语语法中极其精妙且高频的句式，结合了动词后「了₁（完成）」与句末「了₂（持续至今/新状态）」的双重意义。\n\n1. 双了句核心公式 (Double 了 Formula):\n- **主语 + 动词 + 了₁ + 时间段 (Duration) + (的 + 名词) + 了₂**\n- 语义：表示动作已经进行了某个时间段，并且**目前仍在继续进行中**！\n\n2. 经典语义对比 (Single 了 vs. Double 了):\n- 单了（动作已结束）：我学**了**一年汉语。(Wǒ xué le yì nián hànyǔ. — I studied Chinese for a year [and have stopped now].)\n- 双了（动作仍在继续）：我学**了**一年汉语**了**。(Wǒ xué le yì nián hànyǔ **le**. — I have been studying Chinese for a year [and I am still studying now]!)\n\n3. 更多典型范例：\n- 他看**了**两个小时书**了**。(He has been reading books for 2 hours [and is still reading].)\n- 我们在宿舍住**了**三年**了**。(We have lived in the dorm for 3 years [and still live here].)",
            "examples": [
                {
                    "target": "我在北京大学学了一年中文了，我很喜欢这里的老师和同学。",
                    "reading": "Wǒ zài Běijīng Dàxué xué le yì nián zhōngwén le, wǒ hěn xǐhuan zhèlǐ de lǎoshī hé tóngxué.",
                    "translation": "I have been studying Chinese at Peking University for a year now, and I really like the teachers and classmates here."
                },
                {
                    "target": "雨下了一整天了，还没有停。",
                    "reading": "Yǔ xià le yì zhěng tiān le, hái méiyǒu tíng.",
                    "translation": "It has been raining for a whole day now, and has not stopped yet."
                },
                {
                    "target": "李明在图书馆看了一下午书了，他准备去吃晚饭。",
                    "reading": "Lǐ Míng zài túshūguǎn kàn le yí xiàwǔ shū le, tā zhǔnbèi qù chī wǎnfàn.",
                    "translation": "Li Ming has been reading books in the library all afternoon, and he is getting ready for dinner."
                }
            ],
            "mnemonics": [
                "Double 了 = Duration done + Still going on! (学了一年了 = Studied 1 year & still studying!)"
            ],
            "culturalNotes": [
                "Using Double 了 demonstrates sophisticated A2 command of Chinese aspect, instantly showing listeners whether a life experience or hobby is current or concluded."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘我学了三年汉语了’表示说话人：",
                    "options": [
                        "已经学了三年，并且现在还在继续学习 (Has studied for 3 years and is still studying)",
                        "三年以前学过，现在早就不学了",
                        "打算三年后开始学"
                    ],
                    "answerIndex": 0,
                    "explanation": "Double 了 (学了三年...了) indicates ongoing continuation into the present."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "表示‘他在北京住了五年（目前依然住在这里）’的正确汉语双了句是：",
                    "options": [
                        "他住北京五年",
                        "他在北京住了五年了 (Tā zài Běijīng zhù le wǔ nián le)",
                        "他住了北京五年的"
                    ],
                    "answerIndex": 1,
                    "explanation": "住在北京 + 了 + 五年 + 了 correctly expresses ongoing residence."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "对比句子：A‘我看了一个小时书’与 B‘我看了一个小时书了’，哪一个明确表达‘目前还在继续看’？",
                    "options": [
                        "句子 A (单了)",
                        "句子 B (Double 了 indicates still reading)",
                        "两个句子都没有这个意思"
                    ],
                    "answerIndex": 1,
                    "explanation": "Double 了 in Sentence B specifies that the action is continuing into the present."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to study / learn' (学):",
                    "acceptedAnswers": [
                        "学",
                        "xue",
                        "xué",
                        "Xué",
                        "Xue",
                        "學"
                    ],
                    "explanation": "学 (xué) means 'to study / learn'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u6-l4": {
        "id": "zh-u6-l4",
        "unit": "zh-u6",
        "level": "A2",
        "objective": "Master the strict negation rules of the perfective aspect: replacing 了 with 没 (méi) or 没有 (méiyǒu) before the verb, and dropping 了 entirely.",
        "prerequisites": [
            "zh-u6-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u6-l3"
            ]
        },
        "presentation": {
            "explanation": "在汉语语法中，动态助词「了」的否定形式有着极为严格的语法铁律。\n\n1. 否定黄金公式 (Negative Aspect Rule):\n- **主语 + 没 / 没有 + 动词 + 宾语 (Subject + méi/méiyǒu + Verb + Object)**\n- **铁律一**：否定完成态**只能用「没 / 没有」**，不能用「不」！\n- **铁律二**：否定句中**必须彻底去掉「了」**，绝对不能说 *没有买了、*没去了！\n\n2. 肯定与否定句型对照 (Affirmative vs. Negative Contrast):\n- 肯定句：我买**了**三本书。(I bought three books.)\n- 否定句：我**没有买**书。(I did not buy books. *[去掉三本，去掉了]*)\n- 肯定句：他去**了**北京。(He went to Beijing.)\n- 否定句：他**没去**北京。(He did not go to Beijing. *[绝不说 *他没去了])\n\n3. 正反疑问句 (A-not-A Question with 了没有):\n- 你吃早饭**了没有**？ (Nǐ chī zǎofàn le méiyǒu? — Have you eaten breakfast yet?)\n  - 肯定回答：吃了。(Chī le. — Ate.)\n  - 否定回答：还没吃。(Hái méi chī. — Haven't eaten yet.)",
            "examples": [
                {
                    "target": "我昨天没有去图书馆，我在宿舍休息。",
                    "reading": "Wǒ zuótiān méiyǒu qù túshūguǎn, wǒ zài sùshè xiūxi.",
                    "translation": "I didn't go to the library yesterday, I rested in the dorm."
                },
                {
                    "target": "A: 你做完昨天的中文作业了没有？ B: 我还没做完，今天下午做。",
                    "reading": "A: Nǐ zuò wán zuótiān de zhōngwén zuòyè le méiyǒu? B: Wǒ hái méi zuò wán, jīntiān xiàwǔ zuò.",
                    "translation": "A: Have you finished yesterday's Chinese homework? B: I haven't finished yet; I'll do it this afternoon."
                },
                {
                    "target": "大卫今天早晨没喝咖啡，他喝了一杯牛奶。",
                    "reading": "Dàwèi jīntiān zǎochén méi hē kāfēi, tā hē le yì bēi niúnǎi.",
                    "translation": "David didn't drink coffee this morning; he drank a glass of milk."
                }
            ],
            "mnemonics": [
                "Negate 了: Drop '了' and add '没/没有' before the verb! (买了 -> 没买, NOT *没买了!)"
            ],
            "culturalNotes": [
                "«吃了吗？/ 吃了没有？» (Have you eaten yet?) is China's famous quintessential greeting, reflecting care and warmth."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "否定句子‘他买了一本词典’的唯一正确汉语形式是：",
                    "options": [
                        "他没有买词典 (Tā méiyǒu mǎi cídiǎn: 没 + V, drop 了)",
                        "他没买了一本词典 (*méi mǎi le - incorrect)",
                        "他不买了词典 (*bù mǎi le - incorrect)"
                    ],
                    "answerIndex": 0,
                    "explanation": "Negation requires 没/没有 before the verb and dropping 了 entirely: 他没有买词典."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "询问对方‘你吃午饭了没有？’而你尚未吃午饭时，最地道得体的回答是：",
                    "options": [
                        "我不吃午饭了",
                        "还没吃呢 (Hái méi chī ne — Haven't eaten yet)",
                        "我吃了没有"
                    ],
                    "answerIndex": 1,
                    "explanation": "还没吃(呢) is the standard natural answer for an uncompleted action."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "在汉语普通话中，‘没有买了’犯了什么语法错误？",
                    "options": [
                        "词序颠倒",
                        "缺少量词",
                        "用了没有就绝不能再保留‘了’ (Incorrect retention of 了 in negative sentence)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Negative sentences with 没/没有 must drop the perfective particle 了."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'not yet / still' (还):",
                    "acceptedAnswers": [
                        "还",
                        "hai",
                        "hái",
                        "Hái",
                        "Hai",
                        "還"
                    ],
                    "explanation": "还 (hái) means 'still / yet' (as in 还没吃)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u6-l5": {
        "id": "zh-u6-l5",
        "unit": "zh-u6",
        "level": "A2",
        "objective": "Synthesize Verbal 了₁, Sentence-Final 了₂, Double 了, and 没/没有 negation into a comprehensive A2 conversation reporting past activities, accomplishments, and current changes.",
        "prerequisites": [
            "zh-u6-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u6-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第六单元的所有「了」的语法功能，通过对比实战实现融会贯通。\n\n1. 「了」的核心体系大盘点 (The Master System of 了):\n- **了₁ (动词后)**：动作完成与实现（我买**了**三本书）\n- **了₂ (句末)**：新情况与状态转变（天气冷**了**、下雨**了**、太好**了**）\n- **双了 (动词后 + 句末)**：动作持续至今仍在进行（我学**了**一年汉语**了**）\n- **否定 (没/没有 + 动词)**：完全去除「了」（我**没有买**书）\n- **疑问 (……了没有？)**：询问事情是否已完成（你做完作业**了没有**？）。\n\n2. 第六单元综合交际实战 (Unit 6 Synthesis Dialogue):\n- 汇报一天的学习与生活成果：互相询问周末完成了哪些事情、有哪些新的变化与计划。",
            "examples": [
                {
                    "target": "大卫：李明，你买好去上海的火车票了没有？ 李明：我已经买好了！我们星期六早晨八点出发。",
                    "reading": "Dàwèi: Lǐ Míng, nǐ mǎi hǎo qù Shànghǎi de huǒchē piào le méiyǒu? Lǐ Míng: Wǒ yǐjīng mǎi hǎo le! Wǒmen xīngqīliù zǎochén bā diǎn chūfā.",
                    "translation": "David: Li Ming, have you bought the train tickets to Shanghai yet? Li Ming: I have already bought them! We depart Saturday morning at 8:00."
                },
                {
                    "target": "我来中国已经三个月了，我学会了很多日常中文，也交了几个中国好朋友。",
                    "reading": "Wǒ lái Zhōngguó yǐjīng sān gè yuè le, wǒ xuéhuì le hěn duō rìcháng zhōngwén, yě jiāo le jǐ gè Zhōngguó hǎo péngyou.",
                    "translation": "I have been in China for three months now; I learned a lot of daily Chinese and made several good Chinese friends."
                },
                {
                    "target": "天黑了，温度也降了，我们快回宿舍吧！",
                    "reading": "Tiān hēi le, wēndù yě jiàng le, wǒmen kuài huí sùshè ba!",
                    "translation": "It is dark now and the temperature has dropped; let's quickly head back to the dorm!"
                }
            ],
            "mnemonics": [
                "Master of 了: Verb+了 (Done), End+了 (New state), Double 了 (Still ongoing), 没+Verb (Not yet)!"
            ],
            "culturalNotes": [
                "Mastery of the aspect marker 了 is considered the definitive watershed milestone separating beginner A1 learners from fluent, nuanced A2/B1 speakers of Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘我已经学了三个月中文了，昨天买了两本新书’中包含了哪些‘了’的语法功能？",
                    "options": [
                        "包含表示持续至今的双了（学了...了）和表示动作完成的动词后了（买了）",
                        "只有过去时",
                        "只有感叹句"
                    ],
                    "answerIndex": 0,
                    "explanation": "The sentence combines Double 了 (continuing duration) and Verbal 了₁ (completed purchase)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在对话中，当被问到「你买好票了没有？」且你已经买好了，最得体的回答是：",
                    "options": [
                        "我没有买",
                        "我已经买好了！ (Wǒ yǐjīng mǎi hǎo le!)",
                        "我不买"
                    ],
                    "answerIndex": 1,
                    "explanation": "我已经买好了 confirms completion."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列关于汉语助词‘了’的总结中，哪一项是完全正确的？",
                    "options": [
                        "‘了’就是英语的过去时ed，任何时候都代表过去",
                        "否定句中可以保留‘没有买了’",
                        "‘了’是动态助词与语气助词，分别表示动作完成、新状态产生或持续至今 (Aspect/modal marker for completion, new state, or ongoing duration)"
                    ],
                    "answerIndex": 2,
                    "explanation": "了 marks aspectual completion, state change, and ongoing continuation."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'already' (已经):",
                    "acceptedAnswers": [
                        "已经",
                        "yijing",
                        "yǐjīng",
                        "Yǐjīng",
                        "Yijing",
                        "已經"
                    ],
                    "explanation": "已经 (Yǐjīng) means 'already'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u7-l1": {
        "id": "zh-u7-l1",
        "unit": "zh-u7",
        "level": "A2",
        "objective": "Master the durative aspect marker 着 (zhe) to express a persisting physical posture (坐着, 站着) or a continuing static state (门开着, 穿/戴着).",
        "prerequisites": [
            "zh-u6-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u6-l5"
            ]
        },
        "presentation": {
            "explanation": "动态助词「着 (zhe)」置于**动词之后**，表示动作或状态的持续（Durative Aspect）。与「在（正在进行）」不同，「着」着重于**状态的延续与静止的存在**。\n\n1. 身体姿势与持续状态 (Physical Posture & Static State):\n- **身体姿势动词 + 着**：\n  - **坐着 (zuòzhe - sitting)**：老师坐着看书。(The teacher is sitting reading.)\n  - **站着 (zhànzhe - standing)**：门口站着两个人。(Two people are standing at the door.)\n  - **躺着 (tǎngzhe - lying down)**：他在床上躺着休息。(He is lying in bed resting.)\n- **穿着 / 戴着 (Wearing / Carrying)**：\n  - 他穿**着**一件白色的衬衫。(He is wearing a white shirt.)\n  - 她戴**着**副黑框眼镜。(She is wearing a pair of black-rimmed glasses.)\n\n2. 存在句与物体状态 (Existential State: 处所 + 动词 + 着 + 名词):\n- **门开着**。(The door is open.) / **窗户关着**。(The window is closed.)\n- **墙上挂着一张中国地图**。(A map of China is hanging on the wall.)\n- **桌子上放着很多书**。(Many books are placed on the table.)",
            "examples": [
                {
                    "target": "教室的门开着，同学们都安静地坐着听课。",
                    "reading": "Jiàoshì de mén kāizhe, tóngxuémen dōu ānjìng de zuòzhe tīngkè.",
                    "translation": "The classroom door is open, and the students are all quietly sitting listening to the lecture."
                },
                {
                    "target": "他今天穿着一件红色的毛衣，戴着一顶黑色的帽子。",
                    "reading": "Tā jīntiān chuānzhe yí jiàn hóngsè de máoyī, dàizhe yì dǐng hēisè de màozi.",
                    "translation": "He is wearing a red sweater today and wearing a black hat."
                },
                {
                    "target": "李明的书桌上放着一台笔记本电脑和几本汉语词典。",
                    "reading": "Lǐ Míng de shūzhuō shang fàngzhe yì tái bǐjìběn diànnǎo hé jǐ běn hànyǔ cídiǎn.",
                    "translation": "A laptop and several Chinese dictionaries are placed on Li Ming's desk."
                }
            ],
            "mnemonics": [
                "«着» = State continues! (门开着 = Door stays open; 坐着 = Remains sitting!)"
            ],
            "culturalNotes": [
                "Existential sentences with 着 (处所 + 动词 + 着 + 物) are essential in Chinese prose, painting a vivid static picture before narrative action begins."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘墙上挂着一张中国画’时，助词‘着’体现了什么语法功能？",
                    "options": [
                        "表示静态状态的持续存在 (Continuous static state)",
                        "表示动作在过去结束",
                        "表示将来时"
                    ],
                    "answerIndex": 0,
                    "explanation": "挂着 expresses the continuous static state of the painting hanging on the wall."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘门开着’与‘门开了’的区别在于：",
                    "options": [
                        "‘门开着’强调门目前处于敞开的持续状态 (Door is open in a persisting state)",
                        "两者完全没有区别",
                        "‘门开着’表示关门"
                    ],
                    "answerIndex": 0,
                    "explanation": "门开着 describes the persisting open state, while 门开了 marks the change of state from closed to open."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子正确表达了身体姿势或穿着的持续状态？",
                    "options": [
                        "他穿毛衣了",
                        "他坐着在桌子前认真写字 (He sits at the table diligently writing)",
                        "他写字坐"
                    ],
                    "answerIndex": 1,
                    "explanation": "他坐着在桌子前认真写字 correctly uses 坐着 for persisting posture."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the durative aspect marker (着):",
                    "acceptedAnswers": [
                        "着",
                        "zhe",
                        "Zhe",
                        "zháo",
                        "zhuó"
                    ],
                    "explanation": "着 (zhe) indicates the durative aspect."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u7-l2": {
        "id": "zh-u7-l2",
        "unit": "zh-u7",
        "level": "A2",
        "objective": "Master the accompanying manner construction (Verb1 + 着 + Verb2) where Verb1 indicates the manner, posture, or background condition under which the main action Verb2 takes place.",
        "prerequisites": [
            "zh-u7-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u7-l1"
            ]
        },
        "presentation": {
            "explanation": "当两个动作同时发生，且第一个动作用于修饰、伴随或作为第二个主要动作的方式背景时，使用「V1 + 着 + V2」结构。\n\n1. 核心伴随句型 (Manner & Accompanying Action Formula):\n- **主语 + 动词₁ + 着 + (宾语₁) + 动词₂ + (宾语₂)**\n- 语义：伴随着动作一的状态来执行动作二（Action 1 is the manner/background; Action 2 is the primary predicate）。\n\n2. 典型固定伴随搭配 (Common Collocations):\n- **笑着说 (xiàozhe shuō)**：微笑着说话 (saying with a smile)\n- **站着等 (zhànzhe děng)**：站立着等待 (waiting standing up)\n- **走着去 (zǒuzhe qù)**：步行前往 (going on foot)\n- **听着音乐写作业 (tīngzhe yīnyuè xiě zuòyè)**：一边听音乐一边做功课 (doing homework while listening to music)\n- **看着手机走路 (kànzhe shǒujī zǒulù)**：边看手机边走路 (walking while looking at phone)。",
            "examples": [
                {
                    "target": "王老师微笑着对大家说：‘欢迎各位新同学来到中文系！’",
                    "reading": "Wáng lǎoshī wēixiàozhe duì dàjiā shuō: ‘Huānyíng gèwèi xīn tóngxué lái dào zhōngwén xì!’",
                    "translation": "Teacher Wang said to everyone with a smile: 'Welcome new classmates to the Chinese Department!'"
                },
                {
                    "target": "他喜欢在宿舍里一边喝着茶，一边听着古典音乐看书。",
                    "reading": "Tā xǐhuan zài sùshè lǐ yìbiān hēzhe chá, yìbiān tīngzhe gǔdiǎn yīnyuè kàn shū.",
                    "translation": "He likes drinking tea in his dorm while listening to classical music and reading."
                },
                {
                    "target": "为了安全，请大家不要看着手机过马路。",
                    "reading": "Wèi le ānquán, qǐng dàjiā búyào kànzhe shǒujī guò mǎlù.",
                    "translation": "For safety, please do not look at your mobile phone while crossing the road."
                }
            ],
            "mnemonics": [
                "V1 + 着 + V2: V1 is HOW you do V2! (笑着说 = Speak with a smile; 听着音乐写 = Write while listening to music!)"
            ],
            "culturalNotes": [
                "Accompanying action phrases like «笑着说» and «拉着手» convey warmth and vivid human emotion in Chinese interpersonal storytelling."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘李明站着喝咖啡’中，主要动作是‘喝咖啡’，而‘站着’充当：",
                    "options": [
                        "动作发生时的姿势/伴随方式 (Posture / manner of action)",
                        "宾语",
                        "时间状语"
                    ],
                    "answerIndex": 0,
                    "explanation": "站着 acts as the manner/posture accompanying the main action 喝咖啡."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "表达‘老师微笑着走进教室’时，正确的汉语语序是：",
                    "options": [
                        "老师微笑着走进教室 (Lǎoshī wēixiàozhe zǒujìn jiàoshì)",
                        "老师走进教室微笑",
                        "微笑着老师走进"
                    ],
                    "answerIndex": 0,
                    "explanation": "V1+着 (微笑着) precedes the main directional predicate (走进教室)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "句子‘请不要看着手机走路’是在提醒人们：",
                    "options": [
                        "不要买手机",
                        "走路时不要看手机 (Do not look at the phone while walking)",
                        "不要走路"
                    ],
                    "answerIndex": 1,
                    "explanation": "看着手机走路 refers to walking while looking at the phone."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to laugh / smile' (笑):",
                    "acceptedAnswers": [
                        "笑",
                        "xiao",
                        "xiào",
                        "Xiào",
                        "Xiao"
                    ],
                    "explanation": "笑 (xiào) means 'to smile / laugh'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u7-l3": {
        "id": "zh-u7-l3",
        "unit": "zh-u7",
        "level": "A2",
        "objective": "Master the negation of the durative aspect using 没 / 没有 + Verb + 着, maintaining 着 to signify that a continuous state does NOT exist.",
        "prerequisites": [
            "zh-u7-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u7-l2"
            ]
        },
        "presentation": {
            "explanation": "持续态「着」的否定句与完成态「了」有着一个关键区别：**否定「着」时，动词后的「着」通常保留**，表示某种持续状态并未存在！\n\n1. 持续态否定公式 (Negative Durative Formula):\n- **主语 + 没 (有) + 动词 + 着 + (宾语) (Subject + méi/méiyǒu + Verb + zhe + Object)**\n- 示例对比：\n  - 肯定：门**开着**。(The door is open.)\n  - 否定：门**没开着**。(The door is not kept open.)\n  - 肯定：他**戴着**眼镜。(He is wearing glasses.)\n  - 否定：他**没戴着**眼镜。(He is not wearing glasses.)\n  - 肯定：墙上**挂着**画。(A painting hangs on the wall.)\n  - 否定：墙上**没挂着**画。(No painting is hanging on the wall.)\n\n2. 语法点辨析 (Important Distinction):\n- 否定「了」：必须去掉「了」（我**没买**书，绝不说 *没买了）。\n- 否定「着」：可以保留「着」（他**没穿着**外套，表示未处于穿着状态）。",
            "examples": [
                {
                    "target": "图书馆的窗户没开着，里面空气有点闷。",
                    "reading": "Túshūguǎn de chuānghu méi kāizhe, lǐmiàn kōngqì yǒudiǎn mèn.",
                    "translation": "The library windows are not open; the air inside is a bit stuffy."
                },
                {
                    "target": "他今天没戴着眼镜，所以看不太清黑板上的字。",
                    "reading": "Tā jīntiān méi dàizhe yǎnjìng, suǒyǐ kàn bú tài qīng hēibǎn shang de zì.",
                    "translation": "He isn't wearing glasses today, so he can't see the words on the blackboard clearly."
                },
                {
                    "target": "桌子上没有放着词典，只有几张白纸。",
                    "reading": "Zhuōzi shang méiyǒu fàngzhe cídiǎn, zhǐyǒu jǐ zhāng bái zhǐ.",
                    "translation": "No dictionaries are placed on the table, only a few sheets of white paper."
                }
            ],
            "mnemonics": [
                "Negate 着: Keep '着' with '没'! (没开着 = Not open; 没戴着 = Not wearing!)"
            ],
            "culturalNotes": [
                "Chinese observational language relies heavily on negative durative constructions to note changes in interpersonal appearance (e.g., «你今天没戴手表呀？»)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "否定句子‘他戴着眼镜’表示‘他没有处于戴眼镜的状态’时，正确句子是：",
                    "options": [
                        "他没戴着眼镜 (Tā méi dàizhe yǎnjìng)",
                        "他不戴了眼镜",
                        "他没眼镜戴"
                    ],
                    "answerIndex": 0,
                    "explanation": "没 + 动词 + 着 accurately forms the negative durative aspect."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘黑板上没有写着字’的意思是：",
                    "options": [
                        "黑板上正在写字",
                        "黑板上当前没有处于留有字迹的持续状态 (Blackboard currently has no writing on it)",
                        "黑板被拿走了"
                    ],
                    "answerIndex": 1,
                    "explanation": "没有写着字 describes the continuous clean/empty state of the blackboard."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于否定句中‘了’与‘着’的处理规则，下列哪一项完全正确？",
                    "options": [
                        "两个都必须去掉",
                        "两个都必须保留",
                        "否定‘了’必须去掉‘了’（没买），否定‘着’通常保留‘着’（没戴着）(Drop 了 with 没, keep 着 with 没)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Drop 了 in negative completion; keep 着 in negative duration."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to wear (accessories / hats / glasses)' (戴):",
                    "acceptedAnswers": [
                        "戴",
                        "dai",
                        "dài",
                        "Dài",
                        "Dai"
                    ],
                    "explanation": "戴 (dài) means 'to wear (accessories, glasses, hats, watches)'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u7-l4": {
        "id": "zh-u7-l4",
        "unit": "zh-u7",
        "level": "A2",
        "objective": "Master the emphatic progressive particle pairing (动词 + 着 + 呢) and durative affirmative-negative questions (动词 + 着 + 没有？ / 是不是...着？).",
        "prerequisites": [
            "zh-u7-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u7-l3"
            ]
        },
        "presentation": {
            "explanation": "持续态在口语问答与描写中常与语气助词「呢 (ne)」配合，强化动作正在进行或状态正在持续的生动感。\n\n1. 强调持续态：动词 + 着 + 呢 (Emphatic Durative):\n- **主语 + (在) + 动词 + 着 + (宾语) + 呢**\n- 语义：相当于‘正……呢’，带有生动描摹与提醒对方的语气。\n- 示例：\n  - 他在看**着**书**呢**，别打扰他。(He is reading a book right now; don't disturb him.)\n  - 门开**着呢**，请直接进来吧！(The door is wide open; please come straight in!)\n  - 外面下**着**大雨**呢**！(It is raining heavily outside!)\n\n2. 持续态正反疑问句 (A-not-A Question with 没有):\n- **动词 + 着 + (宾语) + 没有？**\n  - 灯亮**着没有**？ (Is the light on or not?)\n  - 窗户关**着没有**？ (Is the window closed or not?)\n  - 他戴**着**口罩**没有**？ (Is he wearing a mask?)",
            "examples": [
                {
                    "target": "A: 老师在办公室吗？ B: 在呢，老师正备着课呢，门开着呢！",
                    "reading": "A: Lǎoshī zài bàngōngshì ma? B: Zài ne, lǎoshī zhèng bèizhe kè ne, mén kāizhe ne!",
                    "translation": "A: Is the teacher in the office? B: Yes, teacher is preparing lessons right now, and the door is wide open!"
                },
                {
                    "target": "外面正刮着大风、下着雪呢，出门一定要穿暖和点儿。",
                    "reading": "Wàimiàn zhèng guāzhe dàfēng, xiàzhe xuě ne, chūmén yídìng yào chuān nuǎnhuo diǎnr.",
                    "translation": "Outside it is blowing strong wind and snowing heavily; make sure to dress warmly when going out."
                },
                {
                    "target": "你看看会议室的电脑开着没有？如果没开着，请帮忙打开一下。",
                    "reading": "Nǐ kànkan huìyìshì de diànnǎo kāizhe méiyǒu? Rúguǒ méi kāizhe, qǐng bāngmáng dǎkāi yíxià.",
                    "translation": "Check if the meeting room computer is turned on. If it's not on, please turn it on."
                }
            ],
            "mnemonics": [
                "V + 着 + 呢 = Lively ongoing state! (开着呢 = It is wide open! 下着雪呢 = It's snowing!)"
            ],
            "culturalNotes": [
                "Adding sentence-final «呢» softens tone, creates conversational warmth, and gently draws the listener's attention to an active background reality."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "当朋友想敲门而门其实虚掩着时，热情邀请对方‘门开着呢，请进！’中的‘呢’起到什么作用？",
                    "options": [
                        "加强状态提示与亲切语气 (Reinforces state notice with warm tone)",
                        "表示强烈否定",
                        "表示提问"
                    ],
                    "answerIndex": 0,
                    "explanation": "开着呢 warmly confirms the persisting open state."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "询问房间里的空调是否保持开着的状态，最标准地道的正反问句是：",
                    "options": [
                        "空调开着没有？ (Kōngtiáo kāizhe méiyǒu?)",
                        "空调了开没有？",
                        "开空调在不？"
                    ],
                    "answerIndex": 0,
                    "explanation": "动词 + 着 + 没有？ is the standard durative inquiry formula."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "句子‘大卫正听着中文录音呢’表达的情境是：",
                    "options": [
                        "大卫正处于听中文录音的生动持续动作中 (David is actively listening to Chinese recordings)",
                        "大卫从不听录音",
                        "录音已经播放完毕"
                    ],
                    "answerIndex": 0,
                    "explanation": "正听着...呢 highlights the active ongoing listening action."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the modal particle 'ne' (呢):",
                    "acceptedAnswers": [
                        "呢",
                        "ne",
                        "Ne"
                    ],
                    "explanation": "呢 (ne) is the modal particle indicating ongoing action or soft mood."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u7-l5": {
        "id": "zh-u7-l5",
        "unit": "zh-u7",
        "level": "A2",
        "objective": "Synthesize static postures with 着, existential scenery sentences, accompanying action (V1着V2), and emphatic 呢 into a descriptive narrative and natural communicative dialogue.",
        "prerequisites": [
            "zh-u7-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u7-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第七单元的所有持续态句型，实现静态描写与动态交际的高阶融合。\n\n1. 持续态全景矩阵 (Master Matrix of Durative 着):\n- **静态存在 (Existential)**：桌上放着书，墙上挂着画，门开着。\n- **动作伴随 (Manner)**：老师微笑着讲课，我们坐着认真听。\n- **否定表达 (Negative)**：窗户没关着，他没戴着帽子。\n- **语气强化 (Emphatic)**：外面正下着雨呢，大家都在教室里等着呢。\n\n2. 第七单元综合交际实战 (Unit 7 Integrated Synthesis Dialogue):\n- 描写一个具体场景（如大学校园、图书馆或咖啡馆），生动描绘人物的衣着、姿势、伴随动作以及周围环境的持续状态。",
            "examples": [
                {
                    "target": "阳光明媚的下午，图书馆里坐着很多同学，大家都在安静地看着书、写着作业。",
                    "reading": "Yángguāng míngmèi de xiàwǔ, túshūguǎn lǐ zuòzhe hěn duō tóngxué, dàjiā dōu zài ānjìng de kànzhe shū, xiězhe zuòyè.",
                    "translation": "On a bright sunny afternoon, many students are sitting in the library, all quietly reading books and doing homework."
                },
                {
                    "target": "张华：你看，前面站着的那位戴着眼镜、穿着西装的男士是谁？ 李明：那是我们的系主任王教授！",
                    "reading": "Zhāng Huá: Nǐ kàn, qiánmiàn zhànzhe de nà wèi dàizhe yǎnjìng, chuānzhe xīzhuāng de nánshì shì shéi? Lǐ Míng: Nà shì wǒmen de xì zhǔrèn Wáng jiàoshòu!",
                    "translation": "Zhang Hua: Look, who is that gentleman standing in front wearing glasses and a suit? Li Ming: That is our department chair, Professor Wang!"
                },
                {
                    "target": "窗外正飘着雪花，咖啡馆里放着轻松的音乐，客人们一边喝着热咖啡，一边微笑着聊天。",
                    "reading": "Chuāngwài zhèng piāozhe xuěhuā, kāfēiguǎn lǐ fàngzhe qīngsōng de yīnyuè, kèrénmen yìbiān hēzhe rè kāfēi, yìbiān wēixiàozhe liáotiān.",
                    "translation": "Outside snowflakes are drifting, relaxing music is playing in the cafe, and guests are drinking hot coffee while chatting with smiles."
                }
            ],
            "mnemonics": [
                "Master of 着: Posture (坐着), Scene (放着), Manner (笑着说), Emphatic (下着雨呢)!"
            ],
            "culturalNotes": [
                "The aesthetic of Chinese literary description deeply prizes the contrast between dynamic motion (动) and tranquil stillness (静), perfectly articulated through the subtle use of the durative marker 着."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘咖啡馆里放着音乐，客人微笑着喝咖啡’中，‘放着’和‘微笑着’分别体现了什么语法功能？",
                    "options": [
                        "‘放着’表示环境静态存在，‘微笑着’表示伴随动作方式 (Existential state & accompanying manner)",
                        "都是过去完成时",
                        "都是否定句"
                    ],
                    "answerIndex": 0,
                    "explanation": "放着 depicts the background existential state; 微笑着 modifies the main action 喝咖啡."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在描述人物外貌特征时，‘那位戴着眼镜、穿着红毛衣的女孩’中的‘戴着/穿着’表示：",
                    "options": [
                        "她穿衣服的短暂动作瞬间",
                        "衣着与配饰正处于穿戴中的持续状态 (Continuous state of wearing clothes/glasses)",
                        "她打算明天买衣服"
                    ],
                    "answerIndex": 1,
                    "explanation": "戴着/穿着 represents the continuous wearing state."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列关于动态助词‘着’的核心语法特征，概括最准确的是：",
                    "options": [
                        "‘着’只能用于表示过去完成的事情",
                        "‘着’主要表示动作或状态的持续（姿势、存在、伴随方式等）(Durative aspect marker for persisting state, posture, and manner)",
                        "‘着’不能与动词连用"
                    ],
                    "answerIndex": 1,
                    "explanation": "着 marks durative aspect: persisting state, existential setting, and accompanying manner."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to wear (clothes)' (穿):",
                    "acceptedAnswers": [
                        "穿",
                        "chuan",
                        "chuān",
                        "Chuān",
                        "Chuan"
                    ],
                    "explanation": "穿 (chuān) means 'to wear (clothes)'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u8-l1": {
        "id": "zh-u8-l1",
        "unit": "zh-u8",
        "level": "A2",
        "objective": "Master the experiential aspect marker 过 (guo) placed directly after a verb (Verb + 过 + Object) to indicate having had a past life experience that is no longer continuing.",
        "prerequisites": [
            "zh-u7-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u7-l5"
            ]
        },
        "presentation": {
            "explanation": "动态助词「过 (guo)」置于**动词之后**，表示过去曾经有过某种经历或发生过某种动作（Experiential Aspect）。它的核心特征是：**该经历发生在过去，目前已经结束，并成为主体的人生阅历**。\n\n1. 经验态核心公式 (Experiential Formula):\n- **主语 + 动词 + 过 + 宾语 (Subject + Verb + guo + Object)**\n- 经典人生经历搭配：\n  - **去过 (qùguo)**：我去过中国。(I have been to China.)\n  - **吃过 (chīguo)**：他吃过北京烤鸭。(He has eaten Beijing roast duck.)\n  - **学过 (xuéguo)**：我们学过古代汉语。(We have studied Classical Chinese.)\n  - **看过 (kànguo)**：你看过京剧吗？(Have you seen Peking Opera?)\n  - **听过 (tīngguo)**：我听过这首中国民歌。(I have heard this Chinese folk song.)\n\n2. 关键语法特征 (Key Grammar Distinctions):\n- 动作必须具有‘脱离现实的过去性’（The event is concluded in the past and functions as experiential knowledge）。",
            "examples": [
                {
                    "target": "我去年夏天去过一次北京，游览了长城和故宫。",
                    "reading": "Wǒ qùnián xiàtiān qùguo yí cì Běijīng, yóulǎn le Chángchéng hé Gùgōng.",
                    "translation": "I have been to Beijing once last summer, and toured the Great Wall and the Forbidden City."
                },
                {
                    "target": "李明吃过地道的四川麻婆豆腐，觉得味道非常正宗麻辣。",
                    "reading": "Lǐ Míng chīguo dìdao de Sìchuān mápó dòufu, juéde wèidao fēicháng zhèngzōng málà.",
                    "translation": "Li Ming has eaten authentic Sichuan Mapo Tofu and thought the taste was very authentically spicy and numbing."
                },
                {
                    "target": "大卫在大学里学过两年书法，汉字写得非常漂亮。",
                    "reading": "Dàwèi zài dàxué lǐ xuéguo liǎng nián shūfǎ, hànzì xiě de fēicháng piàoliang.",
                    "translation": "David has studied calligraphy for two years in college, and writes Chinese characters beautifully."
                }
            ],
            "mnemonics": [
                "Verb + 过 = Past Life Experience! (去过 = Have been to; 吃过 = Have eaten; 看过 = Have seen!)"
            ],
            "culturalNotes": [
                "Sharing cultural experiences like visiting historical sites (游览名胜 yóulǎn míngshèng) or tasting local delicacies (品尝美食 pǐncháng měishí) with «过» is a classic bonding topic in Chinese social culture."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘我曾经去过上海’时，动态助词‘过’应当放在哪里？",
                    "options": [
                        "放在动词‘去’之后：我去过上海 (Wǒ qùguo Shànghǎi)",
                        "放在句首：过我去上海",
                        "放在句尾：我去上海过了"
                    ],
                    "answerIndex": 0,
                    "explanation": "Experiential aspect marker 过 directly attaches to the verb: 动词 + 过."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘他吃过四川火锅’表达的核心语法意义是：",
                    "options": [
                        "他正在吃火锅",
                        "他过去曾经有过吃四川火锅的人生体验 (He has had the past experience of eating Sichuan hotpot)",
                        "他明天打算吃火锅"
                    ],
                    "answerIndex": 1,
                    "explanation": "Verb + 过 signifies that the subject has had that past experience."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子正确表达了人生阅历或曾经做过的经历？",
                    "options": [
                        "我看过这部著名的中国电影 (Wǒ kànguo zhè bù zhùmíng de Zhōngguó diànyǐng)",
                        "我看了这部电影看",
                        "这部电影我过了看"
                    ],
                    "answerIndex": 0,
                    "explanation": "我看过这部著名的中国电影 correctly uses 看过 for experiential aspect."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the experiential aspect marker (过):",
                    "acceptedAnswers": [
                        "过",
                        "guo",
                        "Guo",
                        "guò",
                        "Guò",
                        "過"
                    ],
                    "explanation": "过 (guo) is the experiential aspect marker."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u8-l2": {
        "id": "zh-u8-l2",
        "unit": "zh-u8",
        "level": "A2",
        "objective": "Master the negative experiential pattern (主语 + 没/没有 + 动词 + 过 + 宾语) and emphatic negative adverbs (从来没...过 / 还没...过).",
        "prerequisites": [
            "zh-u8-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u8-l1"
            ]
        },
        "presentation": {
            "explanation": "在汉语中，否定某种经历时，**绝不能用「不」**，必须使用「没」或「没有」，并且**动词后面的「过」必须保留**！\n\n1. 否定经验态核心公式 (Negative Experiential Formula):\n- **主语 + (从来) + 没 (有) + 动词 + 过 + 宾语 (Subject + méi/méiyǒu + Verb + guo + Object)**\n- 语义：从未有过某种经历（Never experienced...）。\n\n2. 强调否定副词搭配 (Emphatic Negation):\n- **从来没……过 (cónglái méi... guo)**：从过去到现在从未发生过 (have never ever...)\n  - 我**从来没去过**哈尔滨。(I have never ever been to Harbin.)\n  - 他**从来没吃过**臭豆腐。(He has never ever eaten stinky tofu.)\n- **还没……过 (hái méi... guo)**：迄今为止尚未体验 (haven't... yet)\n  - 我们**还没看过**京剧呢。(We haven't seen Peking Opera yet.)\n\n3. 语法避坑铁律 (Crucial Anti-Error Rule):\n- 绝对不能说成 *不吃过、*不去过！必须是「没去过」、「没吃过」！",
            "examples": [
                {
                    "target": "我虽然学了一年中文，但还从来没去过中国。",
                    "reading": "Wǒ suīrán xué le yì nián zhōngwén, dàn hái cónglái méi qùguo Zhōngguó.",
                    "translation": "Although I have studied Chinese for a year, I have never been to China yet."
                },
                {
                    "target": "他以前从来没听过这首中国民乐，今天第一次听就深深喜欢上了。",
                    "reading": "Tā yǐqián cónglái méi tīngguo zhè shǒu Zhōngguó mínyuè, jīntiān dì-yī cì tīng jiù shēnshēn xǐhuan shang le.",
                    "translation": "He had never heard this Chinese folk tune before; hearing it for the first time today, he fell deeply in love with it."
                },
                {
                    "target": "我们还没有学过这个高级语法点，请老师再详细讲解一遍。",
                    "reading": "Wǒmen hái méiyǒu xuéguo zhè gè gāojí yǔfǎ diǎn, qǐng lǎoshī zài xiángxì jiǎngjiě yí biàn.",
                    "translation": "We haven't studied this advanced grammar point yet; please teacher explain it in detail once more."
                }
            ],
            "mnemonics": [
                "Never had experience: (从来) + 没 + Verb + 过! (Keep 过, use 没, NEVER 不!)"
            ],
            "culturalNotes": [
                "Expressing «从来没体验过，非常想去试试» (Never tried it, really want to go try!) is the quintessential enthusiastic phrase when making cross-cultural friends."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘我从来没有吃过烤鸭’时，正确的否定格式是：",
                    "options": [
                        "我从来没有吃过烤鸭 (Wǒ cónglái méiyǒu chīguo kǎoyā: 没 + V + 过)",
                        "我从来不吃过烤鸭 (*bù chīguo - incorrect)",
                        "我吃不烤鸭过"
                    ],
                    "answerIndex": 0,
                    "explanation": "Negative experiential requires 没/没有 + 动词 + 过."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘他没学过书法’表达的意思是：",
                    "options": [
                        "他正在学书法",
                        "他过去没有学习过书法的经历 (He does not have the experience of having studied calligraphy)",
                        "他学完了书法"
                    ],
                    "answerIndex": 1,
                    "explanation": "没学过 indicates lack of prior experience."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子在语法上是完全正确的经验态否定句？",
                    "options": [
                        "我们没有看过京剧 (Wǒmen méiyǒu kànguo jīngjù)",
                        "我们不看过京剧",
                        "我们看了没京剧过"
                    ],
                    "answerIndex": 0,
                    "explanation": "我们没有看过京剧 correctly applies 没(有) + V + 过."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'always / from past to present' (从来):",
                    "acceptedAnswers": [
                        "从来",
                        "conglai",
                        "cónglái",
                        "Cónglái",
                        "Conglai",
                        "從來"
                    ],
                    "explanation": "从来 (cónglái) means 'all along / from the past to present' (as in 从来没去过)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u8-l3": {
        "id": "zh-u8-l3",
        "unit": "zh-u8",
        "level": "A2",
        "objective": "Master the two primary experiential question forms: Particle Questions (动词 + 过...吗？) and A-not-A / Tag Questions (动词 + 过...没有？ / 有没有 + 动词 + 过？).",
        "prerequisites": [
            "zh-u8-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u8-l2"
            ]
        },
        "presentation": {
            "explanation": "询问别人是否曾经有过某种经历时，汉语提供了两种最常用、最标准的高频疑问句型。\n\n1. 「吗」字疑问句 (Particle Question with 吗):\n- **主语 + 动词 + 过 + 宾语 + 吗？**\n  - 你去**过**长城**吗**？ (Have you been to the Great Wall?)\n  - 你吃**过**四川火锅**吗**？ (Have you eaten Sichuan hotpot?)\n\n2. 「没有」正反疑问句 (A-not-A Question with 没有):\n- **主语 + 动词 + 过 + 宾语 + 没有？** 或 **主语 + 有没有 + 动词 + 过 + 宾语？**\n  - 你看**过**京剧**没有**？ (Have you seen Peking Opera or not?)\n  - 你**有没有**去**过**上海？ (Have you or haven't you been to Shanghai?)\n\n3. 标准交际答语 (Standard Responses):\n- 肯定回答：去**过**。(Yes, have been.) / 去**过一次**。(Have been once.)\n- 否定回答：**没去过**。(Haven't been.) / **还没去过呢**。(Haven't been yet.)",
            "examples": [
                {
                    "target": "大卫：李明，你去过中国的西安看兵马俑吗？ 李明：去过！两年前我和父母一起去过一次。",
                    "reading": "Dàwèi: Lǐ Míng, nǐ qùguo Zhōngguó de Xī'ān kàn bīngmǎyǒng ma? Lǐ Míng: Qùguo! Liǎng nián qián wǒ hé fùmǔ yìqǐ qùguo yí cì.",
                    "translation": "David: Li Ming, have you been to Xi'an in China to see the Terracotta Army? Li Ming: Yes, I have! Two years ago I went once with my parents."
                },
                {
                    "target": "张老师：同学们，你们有没有读过中国古代的李白诗歌？ 同学们：学过两首！",
                    "reading": "Zhāng lǎoshī: Tóngxuémen, nǐmen yǒu méiyǒu dúguo Zhōngguó gǔdài de Lǐ Bái shīgē? Tóngxuémen: Xuéguo liǎng shǒu!",
                    "translation": "Teacher Zhang: Students, have you read ancient Chinese poems by Li Bai? Students: We have studied two of them!"
                },
                {
                    "target": "A: 你吃过北京烤鸭没有？ B: 还没吃过呢，我们今天晚上一起去尝尝吧！",
                    "reading": "A: Nǐ chīguo Běijīng kǎoyā méiyǒu? B: Hái méi chīguo ne, wǒmen jīntiān wǎnshang yìqǐ qù chángchang ba!",
                    "translation": "A: Have you eaten Beijing roast duck yet? B: Not yet; let's go try it together tonight!"
                }
            ],
            "mnemonics": [
                "Experience Inquiries: V + 过...吗？ OR V + 过...没有？ (Answer: V+过 / 没+V+过!)"
            ],
            "culturalNotes": [
                "Xi'an's Terracotta Army (兵马俑 bīngmǎyǒng) and Tang Poetry (唐诗 Táng shī) are universally recognized symbols of classical Chinese civilization."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "用中文询问朋友‘你吃过正宗的北京烤鸭吗？’时，最标准自然的问句是：",
                    "options": [
                        "你吃过正宗的北京烤鸭吗？ (Nǐ chīguo zhèngzōng de Běijīng kǎoyā ma?)",
                        "你吃了烤鸭吗在？",
                        "吃北京烤鸭你过了吗？"
                    ],
                    "answerIndex": 0,
                    "explanation": "主语 + 动词 + 过 + 宾语 + 吗？ is the standard formula."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "正反疑问句‘你看过这部中国电影没有？’的正确否定回答是：",
                    "options": [
                        "我不看这部电影",
                        "没看过 (Méi kànguo — Haven't seen it)",
                        "我看完了"
                    ],
                    "answerIndex": 1,
                    "explanation": "没看过 is the standard natural negative answer to experiential inquiries."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "问句‘你有没有去过西安？’与‘你去过西安没有？’在语法功能上的关系是：",
                    "options": [
                        "一个表示过去，一个表示将来",
                        "两者完全等价，都是询问过去经历的正反疑问句 (Completely equivalent A-not-A experiential questions)",
                        "一个是命令句"
                    ],
                    "answerIndex": 1,
                    "explanation": "Both forms represent identical A-not-A inquiry structures for experiential aspect."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to taste / try (food)' (尝):",
                    "acceptedAnswers": [
                        "尝",
                        "chang",
                        "cháng",
                        "Cháng",
                        "Chang",
                        "嚐"
                    ],
                    "explanation": "尝 (cháng) means 'to taste / try food' (as in 尝尝)."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u8-l4": {
        "id": "zh-u8-l4",
        "unit": "zh-u8",
        "level": "A2",
        "objective": "Master the placement of verbal frequency measure words (动量词: 次 cì, 趟 tàng, 遍 biàn) after experiential Verb + 过 to quantify the frequency of past experiences.",
        "prerequisites": [
            "zh-u8-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u8-l3"
            ]
        },
        "presentation": {
            "explanation": "在叙述过去经历的频次时，汉语使用**动量词（Verbal Measure Words）**。动量短语通常**置于「动词 + 过」之后**。\n\n1. 三大核心动量词辨析 (3 Core Verbal Measure Words):\n- **次 (cì)**：最通用动量词（次 / time / occurrence）→ 去过两**次**、吃过三**次**\n- **遍 (biàn)**：强调从头到尾完整经历全过程（遍 / whole course from start to finish）→ 看过两**遍**这本小说、听过三**遍**录音\n- **趟 (tàng)**：专用于往返行走的行程（趟 / trip / journey）→ 去过一**趟**上海、跑了两**趟**银行。\n\n2. 语序规律与宾语位置 (Word Order Rules):\n- **代词宾语（我/你/他/这里/那里）**：必须置于动量词之前！\n  - 我找过**他**两**次**。(I looked for him twice.)\n- **普通名词宾语**：通常置于动量词之后，也可置于动量词前。\n  - 我去过**两趟**超市。(I went to the supermarket twice.)",
            "examples": [
                {
                    "target": "这本书写得太精彩了，我已经完整地读过三遍了。",
                    "reading": "Zhè běn shū xiě de tài jīngcǎi le, wǒ yǐjīng wánzhěng de dúguo sān biàn le.",
                    "translation": "This book is written so brilliantly; I have already read it from start to finish three times."
                },
                {
                    "target": "我去年去过两趟上海出差，对那里的现代化交通印象深刻。",
                    "reading": "Wǒ qùnián qùguo liǎng tàng Shànghǎi chūchāi, duì nàlǐ de xiàndàihuà jiāotōng yìnxiàng shēnkè.",
                    "translation": "I went on business trips to Shanghai twice last year, deeply impressed by the modern transportation there."
                },
                {
                    "target": "王老师给全班同学认真地讲解过很多次这个重要语法难点。",
                    "reading": "Wáng lǎoshī gěi quán bān tóngxué rènzhēn de jiǎngjiěguo hěn duō cì zhè gè zhòngyào yǔfǎ nándiǎn.",
                    "translation": "Teacher Zhang explained this important difficult grammar point many times attentively to the whole class."
                }
            ],
            "mnemonics": [
                "Verbal Measure Words: 次 = Occurrences, 遍 = From start to finish, 趟 = Round trips!"
            ],
            "culturalNotes": [
                "Saying «读过三遍» displays scholarly diligence (韦编三绝 wéi biān sān jué), a highly admired virtue in traditional Chinese learning."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘这首中国古琴曲我从头到尾完整听过三遍’时，最精准贴切的动量词是：",
                    "options": [
                        "遍 (biàn: whole course from beginning to end)",
                        "趟",
                        "个"
                    ],
                    "answerIndex": 0,
                    "explanation": "遍 emphasizes experiencing a complete process from start to finish."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘大卫去过两次中国’中，‘两次’的作用是：",
                    "options": [
                        "修饰大卫的名字",
                        "表示去中国这一经历发生的次数频次 (Quantifies frequency of the experience)",
                        "表示现在的具体时间"
                    ],
                    "answerIndex": 1,
                    "explanation": "两次 is a verbal frequency phrase quantifying the occurrences of the trip."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "表达专用于往返行程（如跑了一趟邮局）的专用动量词是：",
                    "options": [
                        "本",
                        "张",
                        "趟 (tàng: trip / journey)"
                    ],
                    "answerIndex": 2,
                    "explanation": "趟 (tàng) is the dedicated verbal measure word for trips/journeys."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the verbal measure word 'occurrence / times' (次):",
                    "acceptedAnswers": [
                        "次",
                        "ci",
                        "cì",
                        "Cì",
                        "Ci"
                    ],
                    "explanation": "次 (cì) is the general verbal measure word for occurrences."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u8-l5": {
        "id": "zh-u8-l5",
        "unit": "zh-u8",
        "level": "A2",
        "objective": "Systematically contrast Completed Aspect 了 with Experiential Aspect 过, and synthesize all Unit 8 patterns into a rich A2 life experience narrative and conversational exchange.",
        "prerequisites": [
            "zh-u8-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u8-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将深度剖析汉语两大核心动态助词「了」与「过」的本质语法区别，并进行全面实战运用。\n\n1. 「了」与「过」终极对比 (Master Contrast: 了 vs. 过):\n- **动态助词「了₁」**：强调**动作的完成与实现**，通常关注近期的具体行为，其结果或状态往往与**当前现实直接关联**（例如：我吃**了**早饭 = I have eaten breakfast [I am not hungry now]）。\n- **动态助词「过」**：强调**曾经有过的人生体验**，该动作早已过去且结束，其状态在当前**已经不再延续**（例如：我吃**过**烤鸭 = I have had the experience of eating roast duck at some point in my life）。\n- **经典语义对比测试**：\n  - 他去**了**北京。(He has gone to Beijing. [He is currently in Beijing now!])\n  - 他去**过**北京。(He has been to Beijing. [He went before and has returned; he is NOT in Beijing now!])\n\n2. 第八单元综合交际实战 (Unit 8 Synthesis Dialogue):\n- 跨国文化阅历分享：与中国朋友畅谈自己去过的城市、品尝过的传统美食、学习过的中华文化技能与未来的旅行心愿。",
            "examples": [
                {
                    "target": "对比语境：李明去北京了（李明现在在由北京，不在家）；而大卫去过北京（大卫以前去过，现在已经回到了学校）。",
                    "reading": "Lǐ Míng qù Běijīng le vs. Dàwèi qùguo Běijīng.",
                    "translation": "Li Ming went to Beijing (is there now); David has been to Beijing (has returned now)."
                },
                {
                    "target": "大卫：李明，你吃过外国西餐吗？ 李明：吃过几次意大利面，但我还是最喜欢吃中国菜！",
                    "reading": "Dàwèi: Lǐ Míng, nǐ chīguo wàiguó xīcān ma? Lǐ Míng: Chīguo jǐ cì Yìdàlì miàn, dàn wǒ háishì zuì xǐhuan chī Zhōngguó cài!",
                    "translation": "David: Li Ming, have you eaten foreign Western food? Li Ming: I have eaten Italian pasta a few times, but I still like Chinese food best!"
                },
                {
                    "target": "在过去的一年里，我学过了两百多个生词，看过了三部中文电影，我的汉语水平有了很大的提高！",
                    "reading": "Zài guòqù de yì nián lǐ, wǒ xuéguò le liǎng bǎi duō gè shēngcí, kànguo le sān bù zhōngwén diànyǐng, wǒ de hànyǔ shuǐpíng yǒu le hěn dà de tígāo!",
                    "translation": "Over the past year, I have learned over 200 vocabulary words and watched 3 Chinese movies; my Chinese proficiency has improved tremendously!"
                }
            ],
            "mnemonics": [
                "Rule of Thumb: 去北京了 = In Beijing NOW! 去过北京 = Back home, was a past trip!"
            ],
            "culturalNotes": [
                "Navigating the distinction between 了 and 过 is widely considered by linguists as the definitive hallmark of natural Chinese fluency."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘张老师去上海了’与‘张老师去过上海’的最核心区别在于：",
                    "options": [
                        "‘去上海了’说明张老师现在就在上海；‘去过上海’说明是过去经历，现在人不在上海 (去了 = there now; 去过 = past trip, back now)",
                        "两者完全一样",
                        "‘去过上海’说明张老师永远不回来"
                    ],
                    "answerIndex": 0,
                    "explanation": "去了 implies the result is current (is there now); 去过 implies past experience (has returned)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在求职简历或自我介绍中，表达‘我以前曾经在一家科技公司工作过两年’时，应当使用哪个助词？",
                    "options": [
                        "工作着",
                        "工作过 (gōngzuòguo: past career experience)",
                        "工作要"
                    ],
                    "answerIndex": 1,
                    "explanation": "工作过 accurately presents past career experience that has concluded."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪一项总结了动态助词‘过’的核心语用价值？",
                    "options": [
                        "表示动作正在进行中",
                        "用于否定句中必须去掉",
                        "表示主体过去曾经拥有的经验与阅历，且该状态目前已结束 (Conveys concluded past life experience and personal history)"
                    ],
                    "answerIndex": 2,
                    "explanation": "过 marks past concluded life experience without ongoing current state."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'past / to pass' (过):",
                    "acceptedAnswers": [
                        "过",
                        "guo",
                        "Guo",
                        "guò",
                        "Guò",
                        "過"
                    ],
                    "explanation": "过 (guo / guò) means 'to pass / past experience'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u9-l1": {
        "id": "zh-u9-l1",
        "unit": "zh-u9",
        "level": "A2",
        "objective": "Master the semantic and temporal scope of 不 (bù), using it to negate subjective intention/volition, habitual actions, present states, and future events.",
        "prerequisites": [
            "zh-u8-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u8-l5"
            ]
        },
        "presentation": {
            "explanation": "否定副词「不 (bù)」是汉语中使用最广泛的否定词之一，其核心语义特征是**主观意愿、习惯性行为、当前状态与将来事件**的否定。\n\n1. 「不」的四大核心使用领域 (4 Core Domains of 不):\n- **主观意愿与态度 (Subjective Volition / Refusal)**：\n  - 我**不想**去。(I don't want to go.) / 我**不吃**肉。(I don't eat meat [by choice/vegetarian].)\n- **日常习惯与规律 (Habitual Actions)**：\n  - 他每天早晨**不喝**咖啡，只喝绿茶。(He doesn't drink coffee in the morning [habit].)\n- **现在与将来时间 (Present & Future Actions)**：\n  - 我明天**不去**学校。(I am not going to school tomorrow.)\n- **系词与绝大多数形容词 (Copula & Adjectives)**：\n  - 他**不是**老师。(He is not a teacher.) / 今天天气**不冷**。(It is not cold today.)\n\n2. 语用对比示例：\n- 我**不吃**。(I refuse to eat / I don't eat this.) [Subjective will]",
            "examples": [
                {
                    "target": "我明天上午有重要的中文期末考试，所以今晚不去参加朋友的聚会了。",
                    "reading": "Wǒ míngtiān shàngwǔ yǒu zhòngyào de zhōngwén qīmò kǎoshì, suǒyǐ jīnwǎn bú qù cānjiā péngyou de jùhuì le.",
                    "translation": "I have an important Chinese final exam tomorrow morning, so I won't go attend my friend's gathering tonight."
                },
                {
                    "target": "李明平时不爱喝碳酸饮料，他习惯随身带一杯温开水。",
                    "reading": "Lǐ Míng píngshí bú ài hē tànsuān yǐnliào, tā xíguàn suíshēn dài yì bēi wēn kāishuǐ.",
                    "translation": "Li Ming usually doesn't like drinking carbonated beverages; he is used to carrying a cup of warm water with him."
                },
                {
                    "target": "今天外面的风虽然很大，但是气温并不低，感觉很舒服。",
                    "reading": "Jīntiān wàimiàn de fēng suīrán hěn dà, dànshì qìwēn bìng bù dī, gǎnjué hěn shūfu.",
                    "translation": "Although the wind outside is strong today, the temperature is not low at all and feels very comfortable."
                }
            ],
            "mnemonics": [
                "«不» = Volition, Habit, Future, Adjectives! (我不去 = I won't go; 不是 = is not; 不冷 = not cold!)"
            ],
            "culturalNotes": [
                "Saying «我不吃辣» (I don't eat spicy food) is a vital practical dietary phrase across China, informing hosts and restaurant staff of personal dining preferences."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘我明天不打算去图书馆’（将来时间与主观意愿）时，应当选用的否定词是：",
                    "options": [
                        "不 (bù: negates future action & intention)",
                        "没",
                        "无"
                    ],
                    "answerIndex": 0,
                    "explanation": "不 is used to negate future events, intentions, and willingness."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘他不抽烟，也不喝酒’中，否定词‘不’表达了什么语义？",
                    "options": [
                        "过去未发生",
                        "长期的生活习惯与个人原则 (Habitual lifestyle choice & personal habits)",
                        "将来的假设"
                    ],
                    "answerIndex": 1,
                    "explanation": "不 negates habitual activities and lifestyle traits."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子正确使用了否定词‘不’？",
                    "options": [
                        "我明天不去上海出差 (Wǒ míngtiān bú qù Shànghǎi chūchāi)",
                        "我昨天不去图书馆",
                        "我不有一本书"
                    ],
                    "answerIndex": 0,
                    "explanation": "我明天不去上海出差 correctly applies 不 to a future action."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for the negative adverb 'not' (不):",
                    "acceptedAnswers": [
                        "不",
                        "bu",
                        "bù",
                        "Bù",
                        "Bu",
                        "bú",
                        "Bú"
                    ],
                    "explanation": "不 (bù) means 'not / no'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u9-l2": {
        "id": "zh-u9-l2",
        "unit": "zh-u9",
        "level": "A2",
        "objective": "Master the scope of 没 / 没有 (méi / méiyǒu), using it to negate objective facts, past occurrences, the completion of actions, and possession.",
        "prerequisites": [
            "zh-u9-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u9-l1"
            ]
        },
        "presentation": {
            "explanation": "否定词「没 / 没有」的核心语义特征是**客观事实的陈述、过去动作的未发生、完成态的否定以及所有/存在的否定**。\n\n1. 「没/没有」的四大核心使用领域 (4 Core Domains of 没/没有):\n- **过去动作未发生 (Past Actions Not Occurring)**：\n  - 我昨天**没去**学校。(I didn't go to school yesterday [objective fact].)\n- **动作未完成或未实现 (Aspectual Non-completion)**：\n  - 他**还没写完**作业。(He hasn't finished his homework yet.)\n- **客观事实陈述 (Objective Fact without Volition)**：\n  - 昨天**没下雨**。(It didn't rain yesterday.) *[天气无主观意愿，绝不说 *昨天不下雨]*\n- **否定拥有与存在 (Negating Possession / Existence)**：\n  - 我**没有**中文词典。(I don't have a Chinese dictionary.) *[绝不说 *我不有书]*\n\n2. 意愿 vs. 事实 对比经典：\n- 我昨天**不想**去，所以**没去**。(I didn't want to go [意愿 不], so I didn't go [事实 没].)",
            "examples": [
                {
                    "target": "大卫昨天感冒发烧了，所以上午没有来教室上课。",
                    "reading": "Dàwèi zuótiān gǎnmào fāshāo le, suǒyǐ shàngwǔ méiyǒu lái jiàoshì shàngkè.",
                    "translation": "David caught a cold and had a fever yesterday, so he didn't come to class in the morning."
                },
                {
                    "target": "我找了半天，但还是没有在书包里找到我的学生证。",
                    "reading": "Wǒ zhǎo le bàntiān, dàn háishì méiyǒu zài shūbāo lǐ zhǎodào wǒ de xuéshengzhèng.",
                    "translation": "I searched for a long time, but still didn't find my student ID in my backpack."
                },
                {
                    "target": "今天早晨出门太匆忙，李明没来得及吃早饭就跑去赶公交车了。",
                    "reading": "Jīntiān zǎochén chūmén tài cōngmáng, Lǐ Míng méi láidejí chī zǎofàn jiù pǎo qù gǎn gōngjiāochē le.",
                    "translation": "Leaving home too hurriedly this morning, Li Ming didn't have time to eat breakfast before running to catch the bus."
                }
            ],
            "mnemonics": [
                "«没/没有» = Fact, Past, Completion, Possession! (昨天没去 = Didn't go; 没有书 = Don't have books!)"
            ],
            "culturalNotes": [
                "In polite Chinese excuse-making, using «没时间» (didn't have time) or «没来得及» (wasn't able in time) provides an objective, face-saving explanation."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘昨天下午没有下雨’时，为什么必须用‘没下雨’而不能用‘不下雨’？",
                    "options": [
                        "因为下雨是客观自然现象，且发生在过去，必须用‘没’表达客观事实 (Objective natural fact in the past)",
                        "因为‘不’只能用于写字",
                        "两者完全可以互换"
                    ],
                    "answerIndex": 0,
                    "explanation": "Natural weather events and past facts require 没/没有, not subjective 不."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘我昨天生病了，没去上课’中，‘没去’表达的是：",
                    "options": [
                        "主观上永远不想上课",
                        "昨天上课这一动作客观上没有发生 (The action of attending class objectively did not occur)",
                        "明天不上课"
                    ],
                    "answerIndex": 1,
                    "explanation": "没去 states the objective past fact that the action did not occur."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "表达‘我手头没有汉语词典’时，唯一合法的汉语否定句是：",
                    "options": [
                        "我不有汉语词典 (*bù yǒu - illegal)",
                        "我不带词典",
                        "我没有汉语词典 (Wǒ méiyǒu hànyǔ cídiǎn)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Possession with 有 is strictly negated by 没有, never *不有."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'not have / did not' (没):",
                    "acceptedAnswers": [
                        "没",
                        "mei",
                        "méi",
                        "Méi",
                        "Mei",
                        "沒"
                    ],
                    "explanation": "没 (méi) negates past actions and possession."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u9-l3": {
        "id": "zh-u9-l3",
        "unit": "zh-u9",
        "level": "A2",
        "objective": "Master the nuanced contrasts when negating modal verbs (不想 vs 没能 / 不要 vs 没要) and comparative adjective changes (不高 vs 没高).",
        "prerequisites": [
            "zh-u9-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u9-l2"
            ]
        },
        "presentation": {
            "explanation": "助动词（能愿动词）与形容词在配合「不」与「没」时，会产生截然不同的语义色彩。\n\n1. 助动词否定辨析 (Modal Verb Negation):\n- **想 (xiǎng - want to)**：\n  - **不想**：主观不愿 (I don't want to: 我不想去)\n  - *没想*：过去未曾设想/意料 (didn't think of: 我真没想到)\n- **能 (néng - able to)**：\n  - **不能**：不许可 / 无能力 (cannot: 教室里不能抽烟)\n  - **没能**：客观原因未能如愿实现 (failed to / wasn't able to: 昨天路上堵车，我**没能**准时到达)\n- **要 (yào - will / want / must)**：\n  - **不要 / 别**：禁止或拒绝 (Don't / do not want: 不要说话！)\n  - **没要**：过去客观未索取 (didn't ask for: 他送我礼物，我没要)。\n\n2. 形容词配合辨析 (Adjective Negation):\n- **不高 (bù gāo)**：单纯描述性状（not tall）\n- **没高 (méi gāo)**：表示变化或比较未达到预期高度（hasn't grown taller / not as tall as）。",
            "examples": [
                {
                    "target": "很抱歉，因为昨晚突降大雪航班延误，我今天上午没能准时参加开幕式。",
                    "reading": "Hěn bàoqiàn, yīnwèi zuówǎn tū jiàng dàxuě hángbān yánwù, wǒ jīntiān shàngwǔ méi néng zhǔnshí cānjiā kāimùshì.",
                    "translation": "So sorry, because of heavy snow and flight delays last night, I wasn't able to attend the opening ceremony on time."
                },
                {
                    "target": "图书馆阅览室里必须保持安静，大家请不要大声喧哗。",
                    "reading": "Túshūguǎn yuèlǎnshì lǐ bìxū bǎochí ānjìng, dàjiā qǐng búyào dàshēng xuānhuá.",
                    "translation": "Silence must be maintained in the library reading room; everyone please do not make loud noise."
                },
                {
                    "target": "弟弟这一年个子长得很快，现在看起来一点儿也不矮了。",
                    "reading": "Dìdi zhè yì nián gèzi zhǎng de hěn kuài, xiànzài kàn qǐlai yìdiǎnr yě bù ǎi le.",
                    "translation": "Younger brother grew taller quickly this year, and now doesn't look short at all."
                }
            ],
            "mnemonics": [
                "不想 = Don't want to; 没能 = Wanted to but wasn't able to; 不要 = Don't (prohibition)!"
            ],
            "culturalNotes": [
                "Using «没能...非常抱歉» demonstrates humble courtesy in formal Chinese correspondence and academic communications."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘昨天我生病了，没能去参加李明的生日聚会’中，‘没能’表达的意思是：",
                    "options": [
                        "本来想去，但受客观条件限制未能如愿 (Wanted to go, but was objectively unable to)",
                        "自己主观上坚决不想去",
                        "李明不准他去"
                    ],
                    "answerIndex": 0,
                    "explanation": "没能 indicates that due to objective circumstances, the intended action could not be fulfilled."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在公共场所表达礼貌劝阻‘请不要吸烟’时，正确的汉语是：",
                    "options": [
                        "请没吸烟",
                        "请不要吸烟 (Qǐng búyào xīyān)",
                        "请不有吸烟"
                    ],
                    "answerIndex": 1,
                    "explanation": "不要 (or 别) expresses prohibition."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "对比：A‘我不想去’与 B‘我没能去’，哪一个表达‘主观上没有意愿’？",
                    "options": [
                        "句子 A (不想 = lack of volition)",
                        "句子 B (没能 = lack of capability/objective blockage)",
                        "两个都是"
                    ],
                    "answerIndex": 0,
                    "explanation": "不想 expresses internal unwillingness; 没能 expresses external impediment."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'cannot / must not / do not want' (不要):",
                    "acceptedAnswers": [
                        "不要",
                        "buyao",
                        "búyào",
                        "Búyào",
                        "Buyao"
                    ],
                    "explanation": "不要 (búyào) expresses refusal or prohibition ('don't / do not want')."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u9-l4": {
        "id": "zh-u9-l4",
        "unit": "zh-u9",
        "level": "A2",
        "objective": "Master Chinese double negation structures (不得不, 不能不, 没有...不...) to express strong logical necessity, rhetorical emphasis, and undeniable universal affirmation.",
        "prerequisites": [
            "zh-u9-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u9-l3"
            ]
        },
        "presentation": {
            "explanation": "汉语中的「双重否定（Double Negation）」具有**以否代肯、语气强化**的修辞魅力。两个否定词连用，表达极其坚定或无可奈何的肯定事实！\n\n1. 三大核心双重否定句式 (3 Core Double Negation Structures):\n- **不得不 (bù dé bù)**：客观情势所迫，‘必须 / 只能’ (have no choice but to / cannot but):\n  - 天气太恶劣了，航班**不得不**取消。(The flight had no choice but to be cancelled.)\n  - 面对铁证，他**不得不**承认错误。(He had to admit his mistake.)\n- **不能不 (bù néng bù)**：情理上的绝对必须 (cannot not / must):\n  - 这么重要的国际会议，我们**不能不**去。(We cannot not go to such an important meeting.)\n- **没有……不…… (méiyǒu... bù...)**：表示全称肯定，‘所有人/事全都……’ (there is none who doesn't...):\n  - 全校**没有**一个人**不**喜欢张老师。(There is no one in the school who doesn't like Teacher Zhang [Everyone likes him]!)\n\n2. 修辞效果：\n- 比单纯肯定句（大家喜欢张老师）更具无可辩驳的强调感染力！",
            "examples": [
                {
                    "target": "由于突降暴雨，学校不得不将原定于今天下午的室外运动会延期举行。",
                    "reading": "Yóuyú tū jiàng bàoyǔ, xuéxiào bùdébù jiāng yuándìng yú jīntiān xiàwǔ de shìwài yùndònghuì yánqī jǔxíng.",
                    "translation": "Due to the sudden rainstorm, the school had no choice but to postpone the outdoor sports meet."
                },
                {
                    "target": "张老师讲课生动幽默、条理清晰，我们班没有一个同学不喜欢听他的课。",
                    "reading": "Zhāng lǎoshī jiǎngkè shēngdòng yōumò, tiáolǐ qīngxī, wǒmen bān méiyǒu yí gè tóngxué bù xǐhuan tīng tā de kè.",
                    "translation": "Teacher Zhang lectures vividly and humorously with clear organization; not a single student in our class doesn't like listening to his classes."
                },
                {
                    "target": "面对日益严峻的气候变化挑战，世界各国不能不加强环境科技合作。",
                    "reading": "Miànduì rìyì yánjùn de qìhòu biànhuà tiǎozhàn, shìjiè gèguó bù néng bù jiāqiáng huánjìng kējì hézuò.",
                    "translation": "Facing the increasingly severe challenge of climate change, countries worldwide cannot but strengthen environmental science and technology cooperation."
                }
            ],
            "mnemonics": [
                "Double Negative = Super Strong Affirmative! (不得不 = Have no choice but to; 没有不 = Everyone does!)"
            ],
            "culturalNotes": [
                "Double negation is a cherished stylistic device in formal Chinese rhetoric, argumentative essays, and diplomacy, reflecting intellectual sophistication and rhetorical gravitas."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘面对客观困难，我们不得不改变原定计划’中，‘不得不’的意思是：",
                    "options": [
                        "受客观条件迫使，必须改变 (Forced by circumstances; must change)",
                        "绝不改变",
                        "不打算改变"
                    ],
                    "answerIndex": 0,
                    "explanation": "不得不 means 'have no choice but to / must'."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "双重否定句‘全班同学没有一个不赞成这个提议’表达的实际含义是：",
                    "options": [
                        "只有少数人赞成",
                        "全班所有同学全都坚决赞成这个提议 (Every single classmate agrees with the proposal)",
                        "大家都不赞成"
                    ],
                    "answerIndex": 1,
                    "explanation": "没有一个不... is an emphatic universal affirmative: everyone agrees."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子正确运用了‘不得不’双重否定结构？",
                    "options": [
                        "他不得去看电影",
                        "他生病严重，不得不去医院看医生 (He was seriously ill and had no choice but to see a doctor)",
                        "医院不得不去看他病"
                    ],
                    "answerIndex": 1,
                    "explanation": "不得不去医院看医生 accurately uses double negation to mean 'had no choice but to go'."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'have no choice but to / cannot but' (不得不):",
                    "acceptedAnswers": [
                        "不得不",
                        "budebu",
                        "bùdébù",
                        "Bùdébù",
                        "Budebu"
                    ],
                    "explanation": "不得不 (bùdébù) means 'have no choice but to / cannot help but'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u9-l5": {
        "id": "zh-u9-l5",
        "unit": "zh-u9",
        "level": "A2",
        "objective": "Master the complete comprehensive distinction matrix between 不 and 没 across time, volition, stative description, and syntax, executing flawless natural usage in communicative discourse.",
        "prerequisites": [
            "zh-u9-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u9-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将把第九单元的所有知识点提炼为一张终极对比全景图，通过生活情境辩论与综合实战彻底消除‘不’与‘没’的混淆困扰。\n\n1. 不 vs. 没 终极对比矩阵 (The Definitive Matrix):\n| 语法维度 | 否定词「不 (bù)」 | 否定词「没 / 没有 (méi / méiyǒu)」 |\n| :--- | :--- | :--- |\n| **核心语义** | 主观意愿、拒绝、态度 | 客观事实、动作未发生 |\n| **时间范畴** | 现在、将来、常态习惯 | 过去、迄今未完成 |\n| **词类搭配** | 系词是、形容词、助动词想/要 | 拥有/存在有、动态助词了/过 |\n| **经典范例** | 我**不吃**。(I won't eat / don't eat.) | 我**没吃**。(I didn't eat / haven't eaten yet.) |\n| **经典范例** | 他**不是**中国人。(He isn't Chinese.) | 他**没有**护照。(He doesn't have a passport.) |\n\n2. 第九单元综合交际实战 (Unit 9 Synthesis Dialogue):\n- 跨国朋友谈心：澄清误会、解释过去未能出席活动的原因（没能...）、表达个人生活习惯（不抽烟不喝酒）与未来的坚定选择（不得不...）。",
            "examples": [
                {
                    "target": "大卫：李明，你昨天怎么没来参加中文角？ 李明：真抱歉，我昨天突发急性胃肠炎，疼得厉害，不得不去校医院看急诊，所以没能去成！",
                    "reading": "Dàwèi: Lǐ Míng, nǐ zuótiān zěnme méi lái cānjiā zhōngwén jiǎo? Lǐ Míng: Zhēn bàoqiàn, wǒ zuótiān tūfā jíxìng wèichángyán, téng de lìhai, bùdébù qù xiàoyīyuàn kàn jízhěn, suǒyǐ méi néng qù chéng!",
                    "translation": "David: Li Ming, why didn't you come to the Chinese Corner yesterday? Li Ming: Really sorry! I suddenly had acute gastroenteritis yesterday and was in terrible pain; I had no choice but to go to the clinic for emergency care, so I wasn't able to make it!"
                },
                {
                    "target": "张华虽然从小在海边长大，但他并不喜欢吃海鲜，平时从来不吃生鱼片。",
                    "reading": "Zhāng Huá suīrán cóngxiǎo zài hǎibiān zhǎngdà, dàn tā bìng bù xǐhuan chī hǎixiān, píngshí cónglái bù chī shēngyúpiàn.",
                    "translation": "Although Zhang Hua grew up by the sea, he really doesn't like seafood and normally never eats sashimi."
                },
                {
                    "target": "我们班没有一个人不热爱中国语言与灿烂文化，大家每天都在努力进步！",
                    "reading": "Wǒmen bān méiyǒu yí gè rén bù rè'ài Zhōngguó yǔyán yǔ cànlàn wénhuà, dàjiā měitiān dōu zài nǔlì jìnbù!",
                    "translation": "Not a single person in our class doesn't love the Chinese language and glorious culture; everyone is striving hard to progress every day!"
                }
            ],
            "mnemonics": [
                "The Golden Rule: 不 is Mind/Habit/Future/State; 没 is Fact/Past/Event/Have!"
            ],
            "culturalNotes": [
                "Navigating 不 vs 没 with nuanced accuracy in social and professional settings ensures clear boundaries, avoiding unintended offense or misunderstandings."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘他昨天没来，因为他根本不想来’中，‘没来’与‘不想’的否定词选用分别体现了什么？",
                    "options": [
                        "‘没来’描述昨天动作未发生的客观事实，‘不想’描述主观意愿 (Objective past fact vs. Subjective volition)",
                        "两个都是将来时",
                        "没有任何区别"
                    ],
                    "answerIndex": 0,
                    "explanation": "没来 states the objective past non-occurrence; 不想 describes the subjective mental volition."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "当表达‘我目前手头没有钱，所以买不了这件衣服’时，最精准的否定搭配是：",
                    "options": [
                        "我不钱，所以没买",
                        "我没有钱，所以买不了 (Wǒ méiyǒu qián, suǒyǐ mǎi bù liǎo)",
                        "我没是钱"
                    ],
                    "answerIndex": 1,
                    "explanation": "没有钱 negates possession; 买不了 indicates inability to purchase."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列关于汉语否定词‘不’与‘没’的综合总结，哪一项是完全正确的？",
                    "options": [
                        "‘不’主要否定意愿、习惯、将来与性状；‘没’主要否定过去动作、事实、完成与拥有 (不 negates volition/habit/future/adjectives; 没 negates past/facts/completion/possession)",
                        "两者没有任何区别，可以任意替换",
                        "‘不’只能用于系词‘是’之前"
                    ],
                    "answerIndex": 0,
                    "explanation": "不 covers volition, habitual traits, future time, and adjectives; 没 covers past actions, objective facts, completion, and possession."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'not at all / truly not' (并不):",
                    "acceptedAnswers": [
                        "并不",
                        "bingbu",
                        "bìngbù",
                        "Bìngbù",
                        "Bingbu",
                        "bìngbú",
                        "Bìngbú"
                    ],
                    "explanation": "并不 (bìngbù) means 'not at all / by no means'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u10-l1": {
        "id": "zh-u10-l1",
        "unit": "zh-u10",
        "level": "A2",
        "objective": "Master simple directional complements (Verb + 来 / 去), understanding the speaker's physical/psychological reference point (来 = toward speaker; 去 = away from speaker).",
        "prerequisites": [
            "zh-u9-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u9-l5"
            ]
        },
        "presentation": {
            "explanation": "汉语中使用「来 (lái)」和「去 (qù)」紧接在动词之后充当**简单趋向补语（Simple Directional Complement）**，用来明确表示动作发生的**空间位移方向相对于说话人位置的趋向**。\n\n1. 核心参照点铁律 (The Reference Point Rule):\n- **动词 + 来**：动作朝向**说话人所在的位置**（Movement TOWARD the speaker）。\n  - 他向我走**来**。(He walks toward me.) / 请进**来**！(Please come in [I am inside]!)\n- **动词 + 去**：动作背离**说话人所在的位置**（Movement AWAY from the speaker）。\n  - 他向门外走**去**。(He walks toward the outside of the door.) / 请出**去**！(Please go out [I am inside]!)\n\n2. 处所宾语的强制语序 (Strict Word Order with Location Objects):\n- 当宾语是**处所名词（教室、家、中国等）**时，宾语必须放在「动词」与「来/去」**之间**！\n- **公式：动词 + 处所宾语 + 来/去** (e.g. 回家去、进教室来，绝不可说 *回去了家)。",
            "examples": [
                {
                    "target": "外面正在下大雨，请大家快点儿进屋来喝杯热茶吧！",
                    "reading": "Wàimiàn zhèngzài xià dàyǔ, qǐng dàjiā kuài diǎnr jìn wū lái hē bēi rè chá ba!",
                    "translation": "It is raining heavily outside; please everyone come quickly into the room to have a cup of hot tea!"
                },
                {
                    "target": "李明下午要去中心图书馆查资料，我们一起回宿舍去拿书包吧。",
                    "reading": "Lǐ Míng xiàwǔ yào qù zhōngxīn túshūguǎn chá zīliào, wǒmen yìqǐ huí sùshè qù ná shūbāo ba!",
                    "translation": "Li Ming is going to the central library to research materials this afternoon; let's return to the dorm together to get backpacks."
                },
                {
                    "target": "看到妈妈走过来，小女孩高兴地跑过去抱住了妈妈。",
                    "reading": "Kàndào māma zǒu guòlai, xiǎo nǚhái gāoxìng de pǎo guòqu bào zhù le māma.",
                    "translation": "Seeing mother walk over, the little girl happily ran over and hugged mother."
                }
            ],
            "mnemonics": [
                "来 = Toward Me! 去 = Away from Me! Location goes IN BETWEEN: 回家去, 进屋来!"
            ],
            "culturalNotes": [
                "Hospitality in Chinese culture begins with welcoming directional phrases: «快请进屋来坐！» (Quickly come into the house and sit down!)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "说话人在教室里面，对门外的同学说‘请进教室’时，正确的趋向补语表达是：",
                    "options": [
                        "请进教室来 (Qǐng jìn jiàoshì lái: location inside + towards speaker)",
                        "请进教室去",
                        "请进去教室"
                    ],
                    "answerIndex": 0,
                    "explanation": "Since speaker is inside the classroom, movement toward the speaker requires 进教室来."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘他回北京去了’表明说话人当前所在的物理位置是：",
                    "options": [
                        "在北京",
                        "不在北京 (Not in Beijing, since 去 indicates movement away from the speaker)",
                        "在飞机上"
                    ],
                    "answerIndex": 1,
                    "explanation": "去 signifies that Beijing is away from the speaker's current location."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "当趋向动词带有处所宾语（如‘家’、‘宿舍’、‘图书馆’）时，处所词应该放在什么位置？",
                    "options": [
                        "必须放在‘来/去’之前（如：回宿舍去）(Must precede 来/去)",
                        "必须放在句首",
                        "必须放在‘来/去’之后"
                    ],
                    "answerIndex": 0,
                    "explanation": "Location objects must be inserted between the verb and 来/去."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to come' (来):",
                    "acceptedAnswers": [
                        "来",
                        "lai",
                        "lái",
                        "Lái",
                        "Lai",
                        "來"
                    ],
                    "explanation": "来 (lái) indicates movement toward the speaker."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u10-l2": {
        "id": "zh-u10-l2",
        "unit": "zh-u10",
        "level": "A2",
        "objective": "Master compound directional complements formed by combining 8 directional verbs (上/下/进/出/回/过/起/到) with 来/去 (e.g. 走上来, 跑下去, 拿出来, 寄回去).",
        "prerequisites": [
            "zh-u10-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u10-l1"
            ]
        },
        "presentation": {
            "explanation": "当一个动作同时包含**空间移动方式（上/下/进/出/回/过）**与**说话人视角（来/去）**时，汉语使用**复合趋向补语（Compound Directional Complements）**。\n\n1. 复合趋向补语系统矩阵 (The 13 Compound Complements Matrix):\n| 趋向动词 | + 来 (朝向说话人) | + 去 (背离说话人) |\n| :--- | :--- | :--- |\n| **上 (up)** | 上来 (shànglai) | 上去 (shàngqu) |\n| **下 (down)** | 下来 (xiàlai) | 下去 (xiàqu) |\n| **进 (in)** | 进来 (jìnlai) | 进去 (jìnqu) |\n| **出 (out)** | 出来 (chūlai) | 出去 (chūqu) |\n| **回 (back)** | 回来 (huílai) | 回去 (huíqu) |\n| **过 (across/over)**| 过来 (guòlai) | 过去 (guòqu) |\n| **起 (upward)** | 起来 (qǐlai) | *(无起去)* |\n\n2. 复合公式：**动词 + 趋向组合 (Verb + Directional Compound)**\n- 走**上来** (walk up toward me) / 跑**下去** (run down away from me)\n- 拿**出来** (take out toward me) / 寄**回去** (mail back away from me).",
            "examples": [
                {
                    "target": "王老师从办公室走出来，亲切地跟走廊上的同学们打招呼。",
                    "reading": "Wáng lǎoshī cóng bàngōngshì zǒu chūlai, qīnqiè de gēn zǒuláng shang de tóngxuémen dǎ zhāohu.",
                    "translation": "Teacher Wang walked out of the office and warmly greeted the students in the hallway."
                },
                {
                    "target": "张华从书包里拿出来一本厚厚的现代汉语词典递给了大卫。",
                    "reading": "Zhāng Huá cóng shūbāo lǐ ná chūlai yì běn hòuhou de xiàndài hànyǔ cídiǎn dì gěi le Dàwèi.",
                    "translation": "Zhang Hua took out a thick modern Chinese dictionary from his backpack and handed it to David."
                },
                {
                    "target": "大卫爬上了长城的最高峰，兴奋地对着山下大声喊了起来。",
                    "reading": "Dàwèi pá shang le Chángchéng de zuì gāo fēng, xìngfèn de duì zhe shānxià dàshēng hǎn le qǐlai.",
                    "translation": "David climbed up to the highest peak of the Great Wall and excitedly started shouting down toward the mountain foot."
                }
            ],
            "mnemonics": [
                "Direction (上/下/进/出/回/过) + Perspective (来/去) = Full 3D Motion Picture!"
            ],
            "culturalNotes": [
                "Physical orientation and spatial precision in Chinese reflect the environmental consciousness and scenic landscape aesthetics embedded in the language."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "说话人在楼下，看到朋友在楼上，喊朋友下楼时应当说：",
                    "options": [
                        "你快走下来吧！ (Nǐ kuài zǒu xiàlai ba! — down toward speaker)",
                        "你快走下去吧！",
                        "你快走上去吧！"
                    ],
                    "answerIndex": 0,
                    "explanation": "Speaker is downstairs; movement is downward toward speaker, so 下来 is used."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘李明从钱包里拿出来一张银行卡’中，‘拿出来’表示：",
                    "options": [
                        "银行卡被放回钱包",
                        "动作使银行卡由钱包内部移动到外部 (Action moves the card from inside to outside)",
                        "银行卡丢了"
                    ],
                    "answerIndex": 1,
                    "explanation": "拿出来 denotes moving an object out from an enclosure towards observation."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "说话人在房间外面，看见里面的人正往门外走，应该用哪一个复合趋向补语？",
                    "options": [
                        "走进来",
                        "走出来 (zǒu chūlai: out towards speaker outside)",
                        "走进去"
                    ],
                    "answerIndex": 1,
                    "explanation": "Moving from inside to outside towards the speaker outside is 走出来."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to take / bring out' (出来):",
                    "acceptedAnswers": [
                        "出来",
                        "chulai",
                        "chūlái",
                        "Chūlái",
                        "Chulai",
                        "chūlai",
                        "Chūlai"
                    ],
                    "explanation": "出来 (chūlai) means 'to come out'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u10-l3": {
        "id": "zh-u10-l3",
        "unit": "zh-u10",
        "level": "A2",
        "objective": "Master the strict placement rules for location objects vs. thing/entity objects in compound directional complement sentences.",
        "prerequisites": [
            "zh-u10-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u10-l2"
            ]
        },
        "presentation": {
            "explanation": "复合趋向补语（如「跑进……去」、「带回……来」）与宾语的语序是汉语语法的核心考察难点！\n\n1. 处所宾语铁律（唯一合法语序）(Location Object Rule):\n- **处所名词必须夹在中间！** 放在「上/下/进/出/回/过」之后、「来/去」之前！\n- **公式：动词 + 趋向动词 + 处所宾语 + 来/去**\n  - 跑**进**教室**去** (Run into the classroom [speaker outside])\n  - 走**回**宿舍**来** (Walk back to the dorm [speaker inside dorm])\n  - 爬**上**山顶**去** (Climb up to the mountain top)\n  - *[绝对错误语序：*跑进去教室、*走回来宿舍]*\n\n2. 事物宾语灵活语序 (General Object Rule):\n- 事物宾语可以放在「来/去」前，也可以放在「来/去」后：\n  - 拿出**一本书**来 = 拿出来**一本书** (Both correct and natural!)",
            "examples": [
                {
                    "target": "上课铃声响了，同学们纷纷跑进教室去准备上课。",
                    "reading": "Shàngkè língshēng xiǎng le, tóngxuémen fēnfēn pǎo jìn jiàoshì qu zhǔnbèi shàngkè.",
                    "translation": "The class bell rang; students ran into the classroom one after another to prepare for class."
                },
                {
                    "target": "张老师从中国带回来很多精美的文化纪念品送给外国留学生。",
                    "reading": "Zhāng lǎoshī cóng Zhōngguó dài huílai hěn duō jīngměi de wénhuà jìnàipǐn sòng gěi wàiguó liúxuéshēng.",
                    "translation": "Teacher Zhang brought back many exquisite cultural souvenirs from China to give to international students."
                },
                {
                    "target": "李明把刚写好的中文调查报告送进老师的办公室去了。",
                    "reading": "Lǐ Míng bǎ gāng xiě hǎo de zhōngwén diàochá bàogào sòng jìn lǎoshī de bàngōngshì qu le.",
                    "translation": "Li Ming delivered the newly written Chinese survey report into the teacher's office."
                }
            ],
            "mnemonics": [
                "Location is trapped: V + [进/出/回/上/下] + LOCATION + [来/去]! No escape for places!"
            ],
            "culturalNotes": [
                "Giving souvenirs brought back from travels (带回来的伴手礼 dài huílai de bànshǒulǐ) is a cherished tradition of warmth (人情味 rénqíngwèi) in Chinese society."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "请选出符合汉语语法规范的处所宾语复合趋向句子：",
                    "options": [
                        "同学们都走回宿舍去了 (Tóngxuémen dōu zǒu huí sùshè qu le: location inside compound)",
                        "同学们都走回去宿舍了 (*incorrect order)",
                        "同学们宿舍走回去了"
                    ],
                    "answerIndex": 0,
                    "explanation": "Location object 宿舍 must be placed between 回 and 去: 走回宿舍去."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘大卫买回来了一本新词典’与‘大卫买回一本新词典来’的关系是：",
                    "options": [
                        "两者完全错误",
                        "两者意思完全相同，事物宾语在‘来’前‘来’后均可 (Both natural and valid for thing objects)",
                        "一个是疑问句"
                    ],
                    "answerIndex": 1,
                    "explanation": "General thing objects can be placed either before or after 来/去 in compound directional complements."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子在语序上是完全错误的？",
                    "options": [
                        "他跑进图书馆去了",
                        "他带回礼物来了",
                        "他跑进去图书馆了 (*Wrong: location cannot follow 进去)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Location objects can never follow 进去; it must be 跑进图书馆去."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to enter / go in' (进去):",
                    "acceptedAnswers": [
                        "进去",
                        "jinqu",
                        "jìnqu",
                        "Jìnqu",
                        "Jinqu",
                        "jìnqù",
                        "Jìnqù"
                    ],
                    "explanation": "进去 (jìnqu) means 'to go in / enter away from speaker'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u10-l4": {
        "id": "zh-u10-l4",
        "unit": "zh-u10",
        "level": "A2",
        "objective": "Master the metaphorical and aspectual extensions of directional complements: 起来 (start & continue / inception), 下去 (continue doing into the future), 出来 (recognize / emerge), and 下来 (settle down / preserve from past).",
        "prerequisites": [
            "zh-u10-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u10-l3"
            ]
        },
        "presentation": {
            "explanation": "趋向补语在汉语发展中衍生出了丰富的**引申义（Metaphorical & Aspectual Extensions）**，是表达动作状态与认知过程的高级表达法！\n\n1. 四大核心引申趋向补语 (4 Core Extended Complements):\n- **动词 + 起来 (qǐlai)**：\n  - **动作开始并持续 (Inception & continuation)**：大家高兴地**唱了起来**、天气**热了起来**。\n  - **回忆与识别 (Recall / perspective)**：我**想起来了**！(I remembered!) / 这道菜**看起来**很好吃。(Looks delicious!)\n- **动词 + 下去 (xiàqu)**：\n  - **动作继续进行 (Continue action into the future)**：请你继续**说下去**。(Please continue speaking.) / 坚持**学下去**。(Keep studying.)\n- **动词 + 出来 (chūlai)**：\n  - **从无到有、识别发现 (Recognition / Emergence)**：我**看出来了**。(I recognized it.) / 听**出来了**。(Identified by hearing.)\n- **动词 + 下来 (xiàlai)**：\n  - **动作固定或延存 (Settling down / preservation)**：请把生词**记下来**。(Write down the new words.) / 停**下来**。(Stop and stay still).",
            "examples": [
                {
                    "target": "听到这个振奋人心的好消息，全班同学都不由自主地欢呼鼓掌了起来！",
                    "reading": "Tīngdào zhè gè zhènfèn rénxīn de hǎo xiāoxi, quán bān tóngxué dōu bùyóuzìzhǔ de huānhū gǔzhǎng le qǐlai!",
                    "translation": "Hearing this exhilarating good news, the whole class couldn't help cheering and applauding!"
                },
                {
                    "target": "学习汉语贵在坚持，只要每天认真练习，你就一定能够学下去并取得优异成绩。",
                    "reading": "Xuéxí hànyǔ guì zài jiānchí, zhǐyào měitiān rènzhēn liànxí, nǐ jiù yídìng nénggòu xué xiàqu bìng qǔdé yōuyì chéngjì.",
                    "translation": "Learning Chinese is valuable for persistence; as long as you practice diligently every day, you will surely be able to keep going and achieve excellent results."
                },
                {
                    "target": "王老师语重心长地对大家说：‘请同学们把这五个核心语法重点工整地记在笔记本下来。’",
                    "reading": "Wáng lǎoshī yǔzhòngxīncháng de duì dàjiā shuō: ‘Qǐng tóngxuémen bǎ zhè wǔ gè héxīn yǔfǎ zhòngdiǎn gōngzhěng de jì zài bǐjìběn xiàlai.’",
                    "translation": "Teacher Wang earnestly said to everyone: 'Please students write down these five core grammar focal points neatly in your notebooks.'"
                }
            ],
            "mnemonics": [
                "起来 = Start up & Recall (想起来); 下去 = Keep going (说下去); 出来 = Recognize (看出来); 下来 = Write down (记下来)!"
            ],
            "culturalNotes": [
                "The traditional proverb «贵在坚持» (the greatest value lies in persistence) often pairs with «坚持下去» (keep pressing forward) as encouragement in Chinese education."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "鼓励朋友在困难面前不要放弃、继续努力学习时，应当使用哪个引申趋向补语？",
                    "options": [
                        "学下去 (xué xiàqu: continue studying into future)",
                        "学出来",
                        "学进去"
                    ],
                    "answerIndex": 0,
                    "explanation": "下去 denotes continuing an ongoing action into the future."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘我终于想起来那个生词的汉字写法了！’中，‘想起来’表达的语义是：",
                    "options": [
                        "开始思考",
                        "成功从记忆中回忆提取出信息 (Successfully recalled information from memory)",
                        "放弃记忆"
                    ],
                    "answerIndex": 1,
                    "explanation": "想起来 means 'to recall / bring to memory'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "老师要求学生‘把黑板上的重点句子抄在笔记本上保存好’，最贴切的趋向补语是：",
                    "options": [
                        "抄起来",
                        "抄下来 (chāo xiàlai: record / write down to preserve)",
                        "抄过去"
                    ],
                    "answerIndex": 1,
                    "explanation": "下来 indicates fixing or recording something for preservation."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to remember / recall' (想起来):",
                    "acceptedAnswers": [
                        "想起来",
                        "xiangqilai",
                        "xiǎngqǐlai",
                        "Xiǎngqǐlai",
                        "Xiangqilai"
                    ],
                    "explanation": "想起来 (xiǎngqǐlai) means 'to recall / remember'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u10-l5": {
        "id": "zh-u10-l5",
        "unit": "zh-u10",
        "level": "A2",
        "objective": "Synthesize physical and metaphorical directional complements (Simple, Compound, Location-object constraints, and Extended meanings) into rich descriptive narratives and daily communicative dialogues.",
        "prerequisites": [
            "zh-u10-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u10-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第十单元的所有趋向补语语法体系，从空间物理位移（进教室来、走上楼去）到高级抽象引申（想起来、坚持下去、看出来、记下来），实现全方位的灵活运用！\n\n1. 趋向补语全景导航矩阵 (Master Comprehensive Navigation):\n- **物理空间移动**：必须根据**说话人视点（来 vs. 去）**与**处所内嵌规则（跑进屋去）**精准造句。\n- **心理与认知引申**：\n  - **起来**：萌发、开始、回忆 (想起来、唱起来)\n  - **下去**：延续、持续、前行 (读下去、走下去)\n  - **出来**：显现、识别、辨认 (听出来、认出来)\n  - **下来**：固定、记录、沉淀 (写下来、停下来)\n\n2. 第十单元实战交际演练 (Unit 10 Synthesis Dialogue):\n- 跨国师生交流：课堂笔记记录（记下来）、登长城游览经历（爬上去/走下来）、互相勉励中文学习之路（坚持学下去）。",
            "examples": [
                {
                    "target": "大卫：李明，你认出来刚才从图书馆走出来的那位老教授是谁了吗？ 李明：我想起来了！他是著名语言学家王教授！",
                    "reading": "Dàwèi: Lǐ Míng, nǐ rèn chūlai gāngcái cóng túshūguǎn zǒu chūlai de nà wèi lǎo jiàoshòu shì shéi le ma? Lǐ Míng: Wǒ xiǎng qǐlai le! Tā shì zhùmíng yǔyánxuéjiā Wáng jiàoshòu!",
                    "translation": "David: Li Ming, did you recognize who that old professor who just walked out of the library was? Li Ming: I remembered! He is the famous linguist Professor Wang!"
                },
                {
                    "target": "张老师对全班同学说：‘中文学习虽然有挑战，但只要大家每天坚持读下去、写下去，就一定能说一口流利的普通话！’",
                    "reading": "Zhāng lǎoshī duì quán bān tóngxué shuō: ‘Zhōngwén xuéxí suīrán yǒu tiǎozhàn, dàn zhǐyào dàjiā měitiān jiānchí dú xiàqu, xiě xiàqu, jiù yídìng néng shuō yì kǒu liúlì de pǔtōnghuà!’",
                    "translation": "Teacher Zhang said to the class: 'Although Chinese learning has challenges, as long as everyone insists on reading and writing on every day, you will definitely speak fluent Mandarin!'"
                },
                {
                    "target": "雨过天晴，同学们高兴地跑出宿舍楼来，呼吸着校园里新鲜清爽的空气。",
                    "reading": "Yǔ guò tiān qíng, tóngxuémen gāoxìng de pǎo chū sùshèlóu lái, hūxī zhe xiàoyuán lǐ xīnxuān qīngshuǎng de kōngqì.",
                    "translation": "The rain stopped and sky cleared; students happily ran out of the dorm building, breathing the fresh cool air on campus."
                }
            ],
            "mnemonics": [
                "3D Language Tool: Spatial Perspective (来/去), Interlocking Place (进屋来), Metaphoric Power (想起来、坚持下去)!"
            ],
            "culturalNotes": [
                "Mastery of directional complements transforms a learner's Chinese from flat static statements into vivid dynamic storytelling with cinematic spatial depth."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘他从书包里拿出来了一本新书’与‘他跑进教室去了’分别体现了什么核心规则？",
                    "options": [
                        "前者是事物宾语（位置灵活），后者是处所宾语（必须夹在复合补语之间）(Thing object flexible vs. Location object strictly in-between)",
                        "两者都是处所宾语",
                        "两者没有任何语法规则限制"
                    ],
                    "answerIndex": 0,
                    "explanation": "Thing objects can follow 来/去, but location objects like 教室 must be strictly inserted before 来/去."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在演讲或课堂结语中，表达‘希望大家把中华文化的优良传统传承下去’时，‘传承下去’的作用是：",
                    "options": [
                        "表示空间向下的物理位移",
                        "表示将传统文化持续延续到未来的引申义 (Metaphorical extension: continuing into the future)",
                        "表示动作突然停止"
                    ],
                    "answerIndex": 1,
                    "explanation": "下去 metaphorically conveys passing down / continuing actions through time."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于趋向补语‘起来’与‘下去’的引申对比，下列概括最精准的是：",
                    "options": [
                        "‘起来’常表示动作开始并持续或回忆提取；‘下去’常表示动作或状态向未来继续延续 (起来: inception/recall; 下去: continuation into the future)",
                        "两者完全一样",
                        "‘下去’只能用于从高处跳下"
                    ],
                    "answerIndex": 0,
                    "explanation": "起来 marks inception/recall; 下去 marks sustained continuation into the future."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to persist / keep going' (下去):",
                    "acceptedAnswers": [
                        "下去",
                        "xiaqu",
                        "xiàqu",
                        "Xiàqu",
                        "Xiaqu",
                        "xiàqù",
                        "Xiàqù"
                    ],
                    "explanation": "下去 (xiàqu) denotes downward motion or continuation into the future."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u11-l1": {
        "id": "zh-u11-l1",
        "unit": "zh-u11",
        "level": "A2",
        "objective": "Master the resultative complements 到 (dào) and 见 (jiàn) to express sensory perception (看到/看见, 听到/听见) and reaching/obtaining a goal through action (找到, 买到, 收到).",
        "prerequisites": [
            "zh-u10-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u10-l5"
            ]
        },
        "presentation": {
            "explanation": "结果补语（Resultative Complement）直接附着在动词之后，表示该动作产生了某种**具体的结果或达成了预定目标**。其中「见」与「到」是表达感官知觉与目标实现的最核心结果补语。\n\n1. 感官知觉结果补语：「见」与「到」\n- **看 (look/try to see)** → **看见 / 看到 (see / perceive visually)**\n- **听 (listen/try to hear)** → **听见 / 听到 (hear / perceive auditorily)**\n- 辨析：单纯「看」和「听」只表示动作行为，不保证结果；加上「见/到」才表示感知结果已经达成！\n\n2. 目标达成结果补语：「到」\n- **找到 (zhǎodào)**：寻找到结果 (found it) *[找 = search; 找到 = found]*\n- **买到 (mǎidào)**：成功购买到 (managed to buy / got hold of)\n- **收到 (shōudào)**：成功接收到 (received e.g. letter/email)\n- **学到 (xuédào)**：学有所得 (learned / acquired knowledge)\n\n3. 核心句法公式：**动词 + 结果补语 + (了) + 宾语** (e.g., 我找到了我的手机)。",
            "examples": [
                {
                    "target": "他在图书馆找了半天，终于找到了那本珍贵的现代汉语文法参考书。",
                    "reading": "Tā zài túshūguǎn zhǎo le bàntiān, zhōngyú zhǎodào le nà běn zhēnguì de xiàndài hànyǔ wénfǎ cānkǎoshū.",
                    "translation": "He searched in the library for a long time and finally found that precious reference book on modern Chinese grammar."
                },
                {
                    "target": "老师说话的声音非常洪亮清晰，坐在最后一排的同学也听得清清楚楚、全部听到了。",
                    "reading": "Lǎoshī shuōhuà de shēngyīn fēicháng hóngliàng qīngxī, zuò zài zuìhòu yì pái de tóngxué yě tīng de qīngqīngchǔchǔ, quánbù tīngdào le.",
                    "translation": "The teacher's voice was loud and clear; students sitting in the very last row also heard crystal clear and heard it all."
                },
                {
                    "target": "今天早晨我刚打开电子邮箱，就收到了来自北京大学的录取通知书！",
                    "reading": "Jīntiān zǎochén wǒ gāng dǎkāi diànzǐ yóuxiāng, jiù shōudào le láizì Běijīng Dàxué de lùqǔ tōngzhīshū!",
                    "translation": "Just as I opened my email inbox this morning, I received the admission letter from Peking University!"
                }
            ],
            "mnemonics": [
                "Action vs. Result: 看 = Look, 看见 = See! 找 = Look for, 找到 = Found!"
            ],
            "culturalNotes": [
                "Receiving a university admission letter (录取通知书 lùqǔ tōngzhīshū) with «收到了» is celebrated as a major milestone across Chinese families."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘我找了手机一个小时，但是没找到’中，‘找’与‘找到’的区别在于：",
                    "options": [
                        "‘找’是寻找的动作过程，‘找到’是动作达成的结果 (Action attempt vs. Result achieved)",
                        "‘找’是名词，‘找到’是动词",
                        "两者没有任何区别"
                    ],
                    "answerIndex": 0,
                    "explanation": "找 is the action of searching; 找到 is the result of having found it."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "表达‘我终于在网上买到了明天晚上的京剧门票’时，使用‘买到’强调的是：",
                    "options": [
                        "票价很贵",
                        "成功买到了票这一动作结果 (Successfully acquired the ticket)",
                        "票已经退了"
                    ],
                    "answerIndex": 1,
                    "explanation": "买到 denotes the successful result of buying."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子正确使用了结果补语‘见’或‘到’？",
                    "options": [
                        "我戴上眼镜后看清楚了，看见了黑板上的字 (Wǒ kànjiàn le hēibǎn shang de zì)",
                        "我看了见黑板",
                        "黑板看见我了在"
                    ],
                    "answerIndex": 0,
                    "explanation": "看见 correctly attaches the resultative complement 见 to the verb 看."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to see / catch sight of' (看见):",
                    "acceptedAnswers": [
                        "看见",
                        "kanjian",
                        "kànjiàn",
                        "Kànjiàn",
                        "Kanjian",
                        "看見"
                    ],
                    "explanation": "看见 (kànjiàn) means 'to see / perceive visually'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u11-l2": {
        "id": "zh-u11-l2",
        "unit": "zh-u11",
        "level": "A2",
        "objective": "Master the semantic distinction between the resultative complement 完 (wán: pure completion/exhaustion) and 好 (hǎo: completion to a state of satisfaction, perfection, and readiness).",
        "prerequisites": [
            "zh-u11-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u11-l1"
            ]
        },
        "presentation": {
            "explanation": "结果补语「完」和「好」都表示动作的结束，但在**语义焦点与满意度**上有着重要差异！\n\n1. 「完 (wán)」：纯粹的动作终结与用尽 (Pure Completion / Finished / Exhausted)\n- 强调动作在时间或数量上已经结束（finish doing / all gone）：\n  - **做完 (zuòwán)**：做完了作业 (Finished doing homework [does not imply quality]).\n  - **吃完 (chīwán)**：吃完饭 (Finished eating).\n  - **用完 (yòngwán)**：钱用完了 (Money is all spent / run out).\n  - **卖完 (màiwán)**：门票卖完了 (Tickets are sold out).\n\n2. 「好 (hǎo)」：完备、满意与准备妥当 (Completed to Satisfaction / Readiness)\n- 强调动作不仅完成，而且**质量达到标准、令人满意、准备就绪可以进行下一步**（all ready / well done）：\n  - **做好 (zuòhǎo)**：饭做好了 (Dinner is ready and delicious!)\n  - **写好 (xiěhǎo)**：报告写好了 (Report is completed and ready to submit!)\n  - **准备好 (zhǔnbèihǎo)**：大家都准备好了！(Everyone is fully prepared!).",
            "examples": [
                {
                    "target": "妈妈高兴地从厨房走出来喊道：‘晚饭做好了，大家快洗手来吃饭吧！’",
                    "reading": "Māma gāoxìng de cóng chúfáng zǒu chūlai hǎndào: ‘Wǎnfàn zuòhǎo le, dàjiā kuài xǐshǒu lái chīfàn ba!’",
                    "translation": "Mother happily came out of the kitchen calling: 'Dinner is ready, everyone wash hands quickly and come eat!'"
                },
                {
                    "target": "我今天下午花了整整三个小时，终于把这篇学术论文的终稿写完了。",
                    "reading": "Wǒ jīntiān xiàwǔ huā le zhěngzhěng sān gè xiǎoshí, zhōngyú bǎ zhè piān xuéshù lùnwén de zhōnggǎo xiěwán le.",
                    "translation": "I spent a full three hours this afternoon and finally finished writing the final draft of this academic paper."
                },
                {
                    "target": "明天早晨就要出发去爬泰山了，请大家今晚务必把背包和登山鞋都准备好。",
                    "reading": "Míngtiān zǎochén jiù yào chūfā qù pá Tàishān le, qǐng dàjiā jīnwǎn wùbì bǎ bēibāo hé dēngshānxié dōu zhǔnbèihǎo.",
                    "translation": "We are departing to climb Mount Tai tomorrow morning; everyone please be sure to get backpacks and hiking shoes ready tonight."
                }
            ],
            "mnemonics": [
                "完 = Finished (all done/gone); 好 = Ready & Well-done (prepared for next step)!"
            ],
            "culturalNotes": [
                "Mount Tai (泰山 Tàishān) in Shandong is revered as the foremost of China's Five Sacred Mountains (五岳之首 Wǔyuè zhī shǒu)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "招待客人或家人开饭时，最地道热情的表达是：",
                    "options": [
                        "饭做好了，快来吃吧！ (Fàn zuòhǎo le — Food is ready and well-cooked!)",
                        "饭做完了，快吃",
                        "饭做坏了"
                    ],
                    "answerIndex": 0,
                    "explanation": "做好 indicates the meal is delightfully ready to be served."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘书店里的那本新书已经卖完了’中，‘卖完’表示：",
                    "options": [
                        "书店准备进书",
                        "新书全部售空，数量已尽 (All copies sold out / exhausted)",
                        "书店不打算卖书"
                    ],
                    "answerIndex": 1,
                    "explanation": "卖完 denotes that the inventory of books has been completely sold out."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "对比‘做完’与‘做好’，哪一个更侧重‘准备妥当、达到令人满意的状态’？",
                    "options": [
                        "做完",
                        "做好 (zuòhǎo: completed satisfactorily and ready)",
                        "两个都一样"
                    ],
                    "answerIndex": 1,
                    "explanation": "做好 emphasizes readiness and satisfactory completion."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to finish / complete' (完):",
                    "acceptedAnswers": [
                        "完",
                        "wan",
                        "wán",
                        "Wán",
                        "Wan"
                    ],
                    "explanation": "完 (wán) means 'to finish / be completed'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u11-l3": {
        "id": "zh-u11-l3",
        "unit": "zh-u11",
        "level": "A2",
        "objective": "Master resultative complements indicating correctness (对 vs. 错) and cognitive comprehension (懂: 听懂, 看懂, 读懂).",
        "prerequisites": [
            "zh-u11-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u11-l2"
            ]
        },
        "presentation": {
            "explanation": "在语言交流与学习认知中，形容词「对（正确）」、「错（错误）」以及动词「懂（理解）」常作为结果补语，精确描绘动作的准确性与主体的理解程度。\n\n1. 正确与错误结果补语：「对」与「错」\n- **说对 (shuōduì)**：说得正确 (said it right) vs. **说错 (shuōcuò)**：说错了 (said it wrong / made a slip)\n- **写对 (xiěduì)**：汉字写对了 vs. **写错 (xiěcuò)**：写错别字了 (wrote wrong character)\n- **走错 (zǒucuò)**：走错路了 (went the wrong way) / **认错 (rèncuò)**：认错人了 (mistook someone).\n\n2. 认知理解结果补语：「懂」\n- **听懂 (tīngdǒng)**：通过听觉完全理解 (understand by listening)\n- **看懂 (kàndǒng)**：通过阅读/观看完全理解 (understand by reading/watching)\n- **读懂 (dúdǒng)**：深度领会文本内涵 (comprehend deeply).",
            "examples": [
                {
                    "target": "大卫认真听完王老师的生动讲解，高兴地说：‘老师，这个语法难点我完全听懂了！’",
                    "reading": "Dàwèi rènzhēn tīngwán Wáng lǎoshī de shēngdòng jiǎngjiě, gāoxìng de shuō: ‘Lǎoshī, zhè gè yǔfǎ nándiǎn wǒ wánquán tīngdǒng le!’",
                    "translation": "After listening carefully to Teacher Wang's vivid explanation, David happily said: 'Teacher, I have completely understood this difficult grammar point!'"
                },
                {
                    "target": "刚才太着急了，李明在十字路口不小心走错了方向，幸好有好心人指路。",
                    "reading": "Gāngcái tài zháojí le, Lǐ Míng zài shízì lùkǒu bù xiǎoxīn zǒu cuò le fāngxiàng, xìnghǎo yǒu hǎoxīnrén zhǐlù.",
                    "translation": "Being in too much of a hurry just now, Li Ming accidentally took the wrong direction at the intersection; fortunately a kind person gave directions."
                },
                {
                    "target": "这道古汉语翻译题难度很大，但全班只有大卫一个人全部翻译对了。",
                    "reading": "Zhè dào gǔ hànyǔ fānyì tí nándù hěn dà, dàn quán bān zhǐyǒu Dàwèi yí gè rén quánbù fānyì duì le.",
                    "translation": "This Classical Chinese translation question was very difficult, but David was the only one in the whole class who translated it entirely correctly."
                }
            ],
            "mnemonics": [
                "对 = Correct! 错 = Mistake! 懂 = Comprehended! (听懂 = Understood by ear; 走错 = Took wrong turn!)"
            ],
            "culturalNotes": [
                "Asking directions (问路 wènlù) and warmly helping lost strangers (热心指路 rèxīn zhǐlù) is a quintessential everyday cultural virtue across Chinese towns and cities."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "学生对老师表达‘我已经完全理解了黑板上的这道题目’时，应当说：",
                    "options": [
                        "这道题我看懂了 (Zhè dào tí wǒ kàndǒng le)",
                        "这道题我看错了",
                        "这道题我看坏了"
                    ],
                    "answerIndex": 0,
                    "explanation": "看懂 indicates cognitive comprehension achieved through visual reading."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘对不起，我刚才认错人了’表达的意思是：",
                    "options": [
                        "我不认识这个人",
                        "我误把对方看成了另外一个人 (I mistook the person for someone else)",
                        "对方认出了我"
                    ],
                    "answerIndex": 1,
                    "explanation": "认错人 means mistaking one person for another."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子正确表达了‘汉字书写完全正确’？",
                    "options": [
                        "他的汉字写错了",
                        "这五个难字他全部写对了 (Zhè wǔ gè nán zì tā quánbù xiěduì le)",
                        "他写了对五个字"
                    ],
                    "answerIndex": 1,
                    "explanation": "全部写对了 correctly applies 对 as the resultative complement."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to understand / comprehend' (懂):",
                    "acceptedAnswers": [
                        "懂",
                        "dong",
                        "dǒng",
                        "Dǒng",
                        "Dong"
                    ],
                    "explanation": "懂 (dǒng) means 'to understand / comprehend'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u11-l4": {
        "id": "zh-u11-l4",
        "unit": "zh-u11",
        "level": "A2",
        "objective": "Master the negation rule for resultative complements (主语 + 没/没有 + 动词 + 补语, never 不) and interrogative patterns (动词 + 补语 + 了没有？ / 动词 + 补语 + 了吗？).",
        "prerequisites": [
            "zh-u11-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u11-l3"
            ]
        },
        "presentation": {
            "explanation": "结果补语表达的是动作是否产生了既定结果，因此在**否定式**与**疑问式**中有严格的语法法则！\n\n1. 结果补语的否定公式 (Negation Formula):\n- **主语 + 没 (有) + 动词 + 结果补语 + 宾语**\n- 核心法则：**否定结果补语时，必须用「没/没有」，绝不能用「不」，且句尾不能有「了」！**\n  - 我**没听懂**。(I didn't understand. *[绝不说 *我不听懂、*没听懂了])*\n  - 晚饭还**没做好**。(Dinner is not ready yet.)\n  - 他**没找到**钥匙。(He didn't find the key.)\n\n2. 结果补语的疑问句型 (Interrogative Formulas):\n- **格式一 (吗问句)**：你**听懂了吗**？ (Did you understand?)\n- **格式二 (正反问句)**：作业**写完了没有**？ (Have you finished writing homework or not?)\n- **格式三 (A-not-A)**：你**看没看懂**？ (Did you understand or not?).",
            "examples": [
                {
                    "target": "大卫：王老师，您刚才说的成语故事我还没完全听懂，您可以再慢速讲一遍吗？",
                    "reading": "Dàwèi: Wáng lǎoshī, nín gāngcái shuō de chéngyǔ gùshi wǒ hái méi wánquán tīngdǒng, nín kěyǐ zài mànsù jiǎng yí biàn ma?",
                    "translation": "David: Teacher Wang, I haven't completely understood the idiom story you just told; could you explain it once more at a slower speed?"
                },
                {
                    "target": "张老师问：‘同学们，今天的课后综合练习大家做完了没有？’ 同学们答：‘全部做完了！’",
                    "reading": "Zhāng lǎoshī wèn: ‘Tóngxuémen, jīntiān de kèhòu zōnghé liànxí dàjiā zuòwán le méiyǒu?’ Tóngxuémen dá: ‘Quánbù zuòwán le!’",
                    "translation": "Teacher Zhang asked: 'Students, have you finished today's after-class exercises or not?' Students answered: 'All finished!'"
                },
                {
                    "target": "这道菜的盐放得刚好，味道一点儿也没做坏，吃起来非常鲜美。",
                    "reading": "Zhè dào cài de yán fàng de gānghǎo, wèidao yìdiǎnr yě méi zuòhuài, chī qǐlai fēicháng xiānměi.",
                    "translation": "The salt in this dish is just right; the taste wasn't spoiled at all, tasting extraordinarily delicious."
                }
            ],
            "mnemonics": [
                "Negate Results with 没 (没看懂, 没做好), Drop the 了! Question: V+Complement+了没有？"
            ],
            "culturalNotes": [
                "In Chinese educational culture, asking politely «老师，我还没听懂，能再讲一遍吗？» is warmly welcomed as a sign of intellectual earnestness (勤学好问 qín xué hào wèn)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘我没有看懂这封中文信件’时，正确的汉语表达是：",
                    "options": [
                        "我不看懂这封信 (*incorrect: bù cannot negate result)",
                        "我没看懂这封信 (Wǒ méi kàndǒng zhè fēng xìn: 没 + V + 补语)",
                        "我看懂没信件"
                    ],
                    "answerIndex": 1,
                    "explanation": "Resultative complements must be negated with 没/没有, without 了."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "询问同屋室友‘你的作业写好了没有？’时，最地道自然的问法是：",
                    "options": [
                        "你的作业写好吗没有？",
                        "你的作业写好了没有？ (Nǐ de zuòyè xiěhǎo le méiyǒu?)",
                        "你写作业好不？"
                    ],
                    "answerIndex": 1,
                    "explanation": "V + 补语 + 了没有？ is the standard natural A-not-A question format."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于结果补语否定句的语法规则，下列哪一项是完全正确的？",
                    "options": [
                        "必须用‘没/没有’否定，且不能加动态助词‘了’ (Must use 没/没有 and drop 了)",
                        "必须用‘不’否定",
                        "否定时补语必须放在句首"
                    ],
                    "answerIndex": 0,
                    "explanation": "Resultative negation requires 没/没有 + Verb + Complement without sentence-final 了."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to hear / understand by listening' (听懂):",
                    "acceptedAnswers": [
                        "听懂",
                        "tingdong",
                        "tīngdǒng",
                        "Tīngdǒng",
                        "Tingdong",
                        "聽懂"
                    ],
                    "explanation": "听懂 (tīngdǒng) means 'to understand by listening'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u11-l5": {
        "id": "zh-u11-l5",
        "unit": "zh-u11",
        "level": "A2",
        "objective": "Synthesize all 6 core resultative complements (到, 见, 好, 完, 错, 懂) with affirmative, negative (没), and interrogative forms into comprehensive conversational and narrative fluency.",
        "prerequisites": [
            "zh-u11-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u11-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将把第十一单元所有的结果补语提炼为系统总表，并在学术听讲、日常生活准备与文化交流实战中全面运用！\n\n1. 结果补语系统全景总表 (Master Resultative Complement Chart):\n| 结果补语 | 核心语法功能 | 典型搭配范例 |\n| :--- | :--- | :--- |\n| **见 (jiàn)** | 视觉/听觉感知结果 | 看见 (see)、听见 (hear) |\n| **到 (dào)** | 达成目标 / 获取事物 / 达到点 | 找到 (find)、买到 (obtain)、学到 (learn) |\n| **完 (wán)** | 动作终结 / 数量耗尽 | 做完 (finish)、吃完 (eat up)、卖完 (sold out) |\n| **好 (hǎo)** | 达到完善 / 令人满意 / 准备妥当 | 做好 (ready)、写好 (well-written)、准备好 (prepared) |\n| **对 (duì)** | 正确无误 | 做对 (got right)、说对 (said right)、写对 (spelled right) |\n| **错 (cuò)** | 发生差错 / 出现失误 | 做错 (got wrong)、说错 (misspoke)、走错 (lost way) |\n| **懂 (dǒng)** | 认知领会 / 深刻理解 | 听懂 (comprehend by ear)、看懂 (comprehend by eye) |\n\n2. 第十一单元实战交际演练 (Unit 11 Synthesis Dialogue):\n- 跨国学者研讨会交流：听懂前沿报告、准备好学术论文、买到高铁车票、互相指正发音。",
            "examples": [
                {
                    "target": "在今天的汉字听写测试中，大卫把所有生词都写对了，王老师称赞他学到了扎实的汉字基本功。",
                    "reading": "Zài jīntiān de hànzì tīngxiě cèshì zhōng, Dàwèi bǎ suǒyǒu shēngcí dōu xiěduì le, Wáng lǎoshī chēngzàn tā xuédào le zhāshi de hànzì jīběngōng.",
                    "translation": "In today's Chinese character dictation test, David wrote all new words correctly; Teacher Wang praised him for having acquired solid foundational character skills."
                },
                {
                    "target": "大卫：李明，明天的学术报告你准备好了没有？ 李明：我已经全部做好了，PPT也检查完了，绝对没有写错一个字！",
                    "reading": "Dàwèi: Lǐ Míng, míngtiān de xuéshù bàogào nǐ zhǔnbèihǎo le méiyǒu? Lǐ Míng: Wǒ yǐjīng quánbù zuòhǎo le, PPT yě jiǎncháwán le, juéduì méiyǒu xiěcuò yí gè zì!",
                    "translation": "David: Li Ming, have you prepared tomorrow's academic report or not? Li Ming: I have got it all ready and finished checking the slides; definitely didn't write a single character wrong!"
                },
                {
                    "target": "经过一学期的刻苦钻研，留学生们不仅听懂了中国历史文化讲座，还交到了许多热情的中国朋友。",
                    "reading": "Jīngguò yì xuéqī de kèkǔ zuānyán, liúxuéshēngmen bùjǐn tīngdǒng le Zhōngguó lìshǐ wénhuà jiǎngzuò, hái jiāodào le xǔduō rèqíng de Zhōngguó péngyou.",
                    "translation": "After a semester of assiduous study, the international students not only understood the Chinese history and culture lectures, but also made many warm-hearted Chinese friends."
                }
            ],
            "mnemonics": [
                "Resultative Master: 见/到 (Perception & Reach), 好/完 (Ready & Finished), 对/错 (Accurate & Error), 懂 (Understood)!"
            ],
            "culturalNotes": [
                "The Chinese cultural virtue of «学以致用» (apply what you have learned) is celebrated when learners successfully make Chinese friends (交到朋友) and comprehend native lectures (听懂讲座)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘这本小说我读懂了，而且作业也做好了’表达了什么？",
                    "options": [
                        "书本阅读理解已经达成，作业也达到满意准备状态 (Reading comprehension achieved & homework satisfactorily completed)",
                        "两者都没有完成",
                        "这是一句疑问句"
                    ],
                    "answerIndex": 0,
                    "explanation": "读懂 marks cognitive understanding, and 做好 marks satisfactory completion."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "表达‘我终于在火车站买到了回北京的高铁票’时，选用‘买到’体现了什么语法功能？",
                    "options": [
                        "表示买票动作失败",
                        "表示经过努力成功达成购买目的的结果补语 (Resultative complement showing successful acquisition)",
                        "表示票价打折"
                    ],
                    "answerIndex": 1,
                    "explanation": "买到 is the resultative complement indicating successful goal attainment."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪组动结短语分别准确对应了‘知觉感知’、‘准备就绪’与‘认知理解’？",
                    "options": [
                        "走错、吃完、卖完",
                        "走上去、跑下来、进屋去",
                        "看见、做好、听懂 (kànjiàn: perception, zuòhǎo: readiness, tīngdǒng: comprehension)"
                    ],
                    "answerIndex": 2,
                    "explanation": "看见 marks perception, 做好 marks readiness, and 听懂 marks cognitive comprehension."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to make (friends) / reach / connect' (交到):",
                    "acceptedAnswers": [
                        "交到",
                        "jiaodao",
                        "jiāodào",
                        "Jiāodào",
                        "Jiaodao"
                    ],
                    "explanation": "交到 (jiāodào) means 'to successfully make / connect (friends)'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u12-l1": {
        "id": "zh-u12-l1",
        "unit": "zh-u12",
        "level": "B1",
        "objective": "Master the formation of potential complements by inserting 得 (affirmative: capable/possible) or 不 (negative: incapable/impossible) between a verb and its resultative or directional complement.",
        "prerequisites": [
            "zh-u11-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u11-l5"
            ]
        },
        "presentation": {
            "explanation": "可能补语（Potential Complement）用来表示主观能力或客观条件**是否允许实现某种动作的结果或趋向**。它直接在动词与结果/趋向补语之间插入「得」或「不」构成！\n\n1. 核心构词与对照公式 (Formation Matrix):\n- **肯定式（可以实现）：动词 + 得 + 补语**\n  - 看**得**懂 (can understand by reading) / 听**得**见 (can hear)\n  - 找**得**到 (can find) / 进**得**去 (can go in)\n- **否定式（无法实现）：动词 + 不 + 补语**\n  - 看**不**懂 (cannot understand by reading) / 听**不**见 (cannot hear)\n  - 找**不**到 (cannot find) / 进**不**去 (cannot go in)\n\n2. 语用最高频法则：**在实际汉语口语中，否定式（V不C）的使用频率远远高于肯定式！** 当需要表达客观原因导致无法完成某事时，汉语优先使用「V不C」而不是「不能V」！",
            "examples": [
                {
                    "target": "这本中国现代文学名著虽然篇幅很长，但语言浅显生动，外国留学生也能看得懂。",
                    "reading": "Zhè běn Zhōngguó xiàndài wénxué míngzhù suīrán piānfú hěn cháng, dàn yǔyán qiǎnxiǎn shēngdòng, wàiguó liúxuéshēng yě kàndedǒng.",
                    "translation": "Although this famous masterpiece of modern Chinese literature is long, the language is simple and vivid, so international students can also understand it."
                },
                {
                    "target": "教室外面的施工噪音太大了，后排同学完全听不见老师在讲什么。",
                    "reading": "Jiàoshì wàimiàn de shīgōng zàoyīn tài dà le, hòupái tóngxué wánquán tīngbujiàn lǎoshī zài jiǎng shénme.",
                    "translation": "The construction noise outside the classroom was so loud that students in the back rows couldn't hear what the teacher was saying at all."
                },
                {
                    "target": "今天早高峰地铁里人山人海，挤得水泄不通，大家根本进不去车厢。",
                    "reading": "Jīntiān zǎogāofēng dìtiě lǐ rénshānrénhǎi, jǐ de shuǐxièbùtōng, dàjiā gēnběn jìnbùqù chēxiāng.",
                    "translation": "The subway was packed with huge crowds during the morning rush hour, jammed tight, and people simply couldn't get into the carriage."
                }
            ],
            "mnemonics": [
                "V + 得 + C = Can do it! V + 不 + C = Cannot do it! (看得懂 vs. 看不懂)"
            ],
            "culturalNotes": [
                "Describing dense rush hour crowds with idioms like «人山人海» (a sea of people) and «进不去» is a universal shared experience in China's bustling mega-cities."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "说话人站在远处，想表达‘由于距离太远，我无法看清黑板上的字’时，最地道的可能补语是否定表达是：",
                    "options": [
                        "看不清 (kàn bu qīng: cannot see clearly)",
                        "看得清",
                        "看没清"
                    ],
                    "answerIndex": 0,
                    "explanation": "看不清 is the potential complement indicating inability to see clearly due to objective conditions."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘这篇古文生词太多，我看不懂’中，‘看不懂’表达的语法含义是：",
                    "options": [
                        "我不想看这篇古文",
                        "受客观生词过多限制，我没有能力读懂它 (Incapable of comprehending it due to vocabulary limit)",
                        "我已经读完了"
                    ],
                    "answerIndex": 1,
                    "explanation": "看不懂 expresses inability to comprehend due to external difficulty."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪一个短语准确表达了‘可以听到声音’（肯定式可能补语）？",
                    "options": [
                        "听不着",
                        "听得见 (tīng de jiàn: able to hear)",
                        "听见了"
                    ],
                    "answerIndex": 1,
                    "explanation": "听得见 is the potential complement indicating capability of hearing."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'cannot see / unable to perceive visually' (看不见):",
                    "acceptedAnswers": [
                        "看不见",
                        "kanbujian",
                        "kànbujiàn",
                        "Kànbujiàn",
                        "Kanbujian",
                        "看不見"
                    ],
                    "explanation": "看不见 (kànbujiàn) means 'unable to see / cannot see'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u12-l2": {
        "id": "zh-u12-l2",
        "unit": "zh-u12",
        "level": "B1",
        "objective": "Master idiomatic, fixed potential verb-complement collocations expressing physical appetite (吃得下/不下), sleep (睡得着/不着), memory (忘得了/不了), and moral worthiness (对得起/对不起).",
        "prerequisites": [
            "zh-u12-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u12-l1"
            ]
        },
        "presentation": {
            "explanation": "汉语中有一些极具生命力的**固定化可能补语词组（Idiomatic Potential Collocations）**，在日常生活与情感交流中被广泛凝固使用！\n\n1. 四大高频生活凝固式：\n- **吃得下 / 吃不下 (chī de xià / chī bu xià)**：胃口能否容纳食物 (have / lack appetite):\n  - 他今天胃不舒服，什么都**吃不下**。(Stomach hurts, can't eat anything.)\n- **睡得着 / 睡不着 (shuì de zháo / shuì bu zháo)**：能否顺利入睡 (able / unable to fall asleep):\n  - 想到明天的重要面试，我兴奋得整晚**睡不着**。(Can't fall asleep all night!)\n- **忘得了 / 忘不了 (wàng de liǎo / wàng bu liǎo)**：能否忘却记忆 (can / cannot forget):\n  - 老师的深情厚谊，我一辈子也**忘不了**。(I can never forget in my life.)\n- **对得起 / 对不起 (duì de qǐ / duì bu qǐ)**：能否对得起良心/期望 (worthy of / sorry):\n  - 我们一定要刻苦学习，**对得起**父母的辛苦付出！(Be worthy of parents' dedication!)",
            "examples": [
                {
                    "target": "大卫最近学习压力比较大，每天晚上躺在床上很久都睡不着觉。",
                    "reading": "Dàwèi zuìjìn xuéxí yālì bǐjiào dà, měitiān wǎnshang tǎng zài chuáng shang hěn jiǔ dōu shuì bu zháo jiào.",
                    "translation": "David has had heavy study pressure lately, lying in bed for a long time every night unable to fall asleep."
                },
                {
                    "target": "在中国留学期间大家给予我的热情帮助，我永远也忘不了！",
                    "reading": "Zài Zhōngguó liúxué qījiān dàjiā jǐyǔ wǒ de rèqíng bāngzhù, wǒ yǒngyuǎn yě wàng bu liǎo!",
                    "translation": "The warm help everyone gave me while studying in China, I will never be able to forget!"
                },
                {
                    "target": "李明认真地说：‘我们必须全力以赴攻克科研难关，才对得起全组同学的信任。’",
                    "reading": "Lǐ Míng rènzhēn de shuō: ‘Wǒmen bìxū quánlìyǐfù gōngkè kēyán nánguān, cái duìdeqǐ quán zǔ tóngxué de xìnrèn.’",
                    "translation": "Li Ming said earnestly: 'We must go all out to tackle this scientific hurdle so as to be worthy of the trust of our entire team.'"
                }
            ],
            "mnemonics": [
                "Living Idioms: 睡不着 (Cannot sleep), 吃不下 (Cannot eat), 忘不了 (Cannot forget), 对得起 (Worthy of)!"
            ],
            "culturalNotes": [
                "The cultural concept of «对得起» (living up to moral duty, repaying trust and familial devotion) is a foundational Confucian pillar of Chinese filial piety and professional responsibility."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘由于精神兴奋或失眠，无法入睡’时，应当使用哪个地道短语？",
                    "options": [
                        "睡不着 (shuì bu zháo: unable to fall asleep)",
                        "睡不完",
                        "睡不好觉"
                    ],
                    "answerIndex": 0,
                    "explanation": "睡不着 specifically denotes being unable to fall asleep."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘老师的教诲，我一辈子也忘不了’表达了：",
                    "options": [
                        "老师讲课内容很容易忘记",
                        "对老师教导的铭记于心与永不忘怀 (Deep lifelong remembrance that cannot be forgotten)",
                        "老师已经退休了"
                    ],
                    "answerIndex": 1,
                    "explanation": "忘不了 expresses the impossibility of forgetting profound guidance."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "表达‘努力学习，不辜负父母的期望与付出’时，最精准的可能补语是：",
                    "options": [
                        "对得起父母 (duìdeqǐ fùmǔ: live up to / be worthy of parents)",
                        "对不起父母",
                        "对得着父母"
                    ],
                    "answerIndex": 0,
                    "explanation": "对得起 means to live up to or be worthy of someone's expectations."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'cannot sleep / unable to fall asleep' (睡不着):",
                    "acceptedAnswers": [
                        "睡不着",
                        "shuibuzhao",
                        "shuìbuzháo",
                        "Shuìbuzháo",
                        "Shuibuzhao"
                    ],
                    "explanation": "睡不着 (shuìbuzháo) means 'unable to fall asleep'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u12-l3": {
        "id": "zh-u12-l3",
        "unit": "zh-u12",
        "level": "B1",
        "objective": "Master the versatile potential complement marker 了 (pronounced liǎo) used in V + 得了 / 不了 to indicate capacity, possibility, tolerance, or excess (去得了/去不了, 吃得了/吃不了, 受得了/受不了).",
        "prerequisites": [
            "zh-u12-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u12-l2"
            ]
        },
        "presentation": {
            "explanation": "当动态助词「了」读作 **liǎo** 时，与「得/不」组合构成「**动词 + 得了 / 不了 (V de liǎo / V bu liǎo)**」，表示动作在**能力、容量、承受力或时间客观条件上是否可行**！\n\n1. 三大核心语用范畴 (3 Core Uses of V得了 / V不了):\n- **客观可能性与时间允许 (Feasibility / Availability)**：\n  - 明天的会议我有空，**去得了**。(I can go.) / 我明天要考试，**去不了**。(I cannot go.)\n- **生理容量与负荷 (Capacity / Consumption limit)**：\n  - 这么多菜，我们两个人**吃得了吗**？(Can we two finish this much food?)\n  - 菜太多了，我们肯定**吃不了**。(We definitely cannot finish it.)\n- **心理与生理承受力 (Tolerance / Endurance)**：\n  - 北京的冬天太冷了，南方人可能**受不了**。(Might not be able to bear/tolerate it.)\n  - 我真**受不了**这种吵闹的环境！(I really can't stand this noise!).",
            "examples": [
                {
                    "target": "今天点了六个热菜、两个大汤，我们三个人肯定吃不了，别再加菜了！",
                    "reading": "Jīntiān diǎn le liù gè rècài, liǎng gè dà tāng, wǒmen sān gè rén kěndìng chī bu liǎo, bié zài jiā cài le!",
                    "translation": "We already ordered six hot dishes and two big soups today; the three of us definitely cannot finish them, don't add any more dishes!"
                },
                {
                    "target": "大卫真抱歉，明天下午系里临时通知开会，明天的足球友谊赛我恐怕去不了了。",
                    "reading": "Dàwèi zhēn bàoqiàn, míngtiān xiàwǔ xì lǐ línshí tōngzhī kāihuì, míngtiān de zúqiú yǒuyìsài wǒ kǒngpà qù bu liǎo le.",
                    "translation": "David, really sorry; the department gave notice of an emergency meeting tomorrow afternoon, so I'm afraid I cannot go to tomorrow's soccer match."
                },
                {
                    "target": "北方冬天的室内有充足的地暖，非常温暖舒适，一点儿也不用担心受不了。",
                    "reading": "Běifāng dōngtiān de shìnèi yǒu chōngzú de dìnnuǎn, fēicháng wēnnuǎn shūshì, yìdiǎnr yě búyòng dānxīn shòubuliǎo.",
                    "translation": "Indoors in northern winter has ample underfloor heating, extraordinarily warm and cozy; no need to worry about being unable to bear it at all."
                }
            ],
            "mnemonics": [
                "V + 得了 (liǎo) = Feasible / Tolerable; V + 不了 (liǎo) = Impossible / Overloaded / Unbearable!"
            ],
            "culturalNotes": [
                "Ordering generously is a hallmark of Chinese hospitality (热情好客 rèqíng hàokè), but modern dining promotes the 'Clear Your Plate' campaign (光盘行动 Guāngpán Xíngdòng) to avoid «吃不了» food waste."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "因时间冲突无法出席明天的聚会时，口语中最地道自然的拒绝表达是：",
                    "options": [
                        "明天我有事，去不了 (Wǒ míngtiān yǒu shì, qù bu liǎo — I have something, can't make it)",
                        "明天我没去",
                        "明天我不去能"
                    ],
                    "answerIndex": 0,
                    "explanation": "去不了 is the most natural polite expression of inability to attend due to objective schedule conflict."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘天气太闷热了，我简直受不了了’中，‘受不了’表达的是：",
                    "options": [
                        "非常喜欢炎热天气",
                        "身体或心理承受能力达到了极限 (Physical/mental tolerance has reached its limit)",
                        "天气马上要降温"
                    ],
                    "answerIndex": 1,
                    "explanation": "受不了 expresses inability to bear or endure uncomfortable conditions."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "表达‘菜量太大，一个人吃不完’时，‘了’的正确读音与短语是：",
                    "options": [
                        "读 le，吃不乐",
                        "读 liǎo，吃不了 (chī bu liǎo: cannot consume/finish due to capacity)",
                        "读 liào，吃不料"
                    ],
                    "answerIndex": 1,
                    "explanation": "In potential complements, 了 is pronounced liǎo (吃不了)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'cannot make it / unable to go' (去不了):",
                    "acceptedAnswers": [
                        "去不了",
                        "qubuliao",
                        "qùbuliǎo",
                        "Qùbuliǎo",
                        "Qubuliao"
                    ],
                    "explanation": "去不了 (qùbuliǎo) means 'unable to go / cannot make it'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u12-l4": {
        "id": "zh-u12-l4",
        "unit": "zh-u12",
        "level": "B1",
        "objective": "Master the syntactic and pragmatic distinctions between Potential Complements (看得懂/看不懂) and Modal Verbs 能/可以 (能看懂/不能看懂; 不能去: moral/policy prohibition vs. 去不了: objective incapability).",
        "prerequisites": [
            "zh-u12-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u12-l3"
            ]
        },
        "presentation": {
            "explanation": "许多初学者容易混淆「可能补语（看得懂/看不懂）」与「能愿动词（能看懂/不能看/不能去）」。它们在**语用侧重与语境规范**上有着深刻差别！\n\n1. 肯定句侧重点对比：\n- **看得懂**：侧重**自身能力与客观难度**的匹配（I am capable of understanding this text）。\n- **能看懂**：常用于**强调、回答疑问或在特定条件许可下**（e.g. 只要戴上眼镜，我就能看懂）。\n\n2. 否定句终极辨析（最核心考点）：\n- **去不了 (qù bu liǎo)**：受**客观条件、时间或身体能力**限制无法成行 (e.g. 我生病了，明天**去不了**)。\n- **不能去 (bù néng qù)**：受**社会规约、法律法规、道德纪律或权威命令禁止** (e.g. 军事重地，任何人**不能去** [Prohibited]！)。\n\n3. 总结法则：**客观困难用「V不了/V不C」，规章禁令用「不能V」！**",
            "examples": [
                {
                    "target": "大卫因为要准备汉语水平考试，明天下午去不了王老师家包饺子了。",
                    "reading": "Dàwèi yīnwèi yào zhǔnbèi hànyǔ shuǐpíng kǎoshì, míngtiān xiàwǔ qù bu liǎo Wáng lǎoshī jiā bāo jiǎoxi le.",
                    "translation": "Because David has to prepare for the HSK exam, he can't make it to Teacher Wang's home tomorrow afternoon to wrap dumplings."
                },
                {
                    "target": "在历史文物展览馆里，任何游客都不能用手触摸珍贵的展品。",
                    "reading": "Zài lìshǐ wénwù zhǎnlǎnguǎn lǐ, rènhé yóukè dōu bù néng yòng shǒu chùmō zhēnguì de zhǎnpǐn.",
                    "translation": "In the historical cultural relics museum, no visitor is allowed to touch the precious exhibits by hand."
                },
                {
                    "target": "这本中国哲学著作虽然非常深奥，但只要认真研读，结合老师的辅导，就一定能读懂。",
                    "reading": "Zhè běn Zhōngguó zhéxué zhùzuò suīrán fēicháng shēn'ào, dàn zhǐyào rènzhēn yándú, jiéhé lǎoshī de fǔdǎo, jiù yídìng néng dúdǒng.",
                    "translation": "Although this Chinese philosophy work is profound, as long as one studies assiduously combined with teacher's tutoring, one will surely be able to understand it."
                }
            ],
            "mnemonics": [
                "去不了 = Objective Impediment (I'm busy/sick); 不能去 = Strict Prohibition (Rules forbid it)!"
            ],
            "culturalNotes": [
                "Using «去不了» to decline invitations sounds polite and gentle, whereas «不能去» without context can sound overly rigid or moralistic."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "考场纪律规定‘考试期间严禁携带手机’，应当选用哪种句式？",
                    "options": [
                        "严禁携带，不能带进考场 (bù néng: rules and regulations forbid it)",
                        "带不进考场",
                        "不带得了考场"
                    ],
                    "answerIndex": 0,
                    "explanation": "Disciplinary and rule-based prohibitions strictly require 不能."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘对不起，我今晚发高烧，去不了聚会了’中，为什么用‘去不了’而不是‘不能去’？",
                    "options": [
                        "因为发烧是主观愿望",
                        "因为是身体疾病这一客观原因导致的无法出席，用可能补语更自然贴切 (Objective physical condition causing inability to attend)",
                        "两者没有任何差别"
                    ],
                    "answerIndex": 1,
                    "explanation": "去不了 reflects objective physical incapacity causing inability to attend."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "对比 A‘我看不懂这封信’与 B‘博物馆里不能拍照’，下列分析完全正确的是：",
                    "options": [
                        "A 是禁止句，B 是疑问句",
                        "两者都是命令句",
                        "A 表达个人能力无法看懂，B 表达规则制度的禁止 (A: personal capability; B: regulatory prohibition)"
                    ],
                    "answerIndex": 2,
                    "explanation": "A represents potential incapacity; B represents regulatory prohibition."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'cannot hear / unable to perceive sound' (听不见):",
                    "acceptedAnswers": [
                        "听不见",
                        "tingbujian",
                        "tīngbujiàn",
                        "Tīngbujiàn",
                        "Tingbujian",
                        "聽不見"
                    ],
                    "explanation": "听不见 (tīngbujiàn) means 'unable to hear / cannot hear'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u12-l5": {
        "id": "zh-u12-l5",
        "unit": "zh-u12",
        "level": "B1",
        "objective": "Master the complete synthesis of Potential Complements (V得C/V不C, idiomatic collocations, capacity 了, and contrast with 能), applying them fluently across academic, daily, and professional contexts.",
        "prerequisites": [
            "zh-u12-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u12-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第十二单元的所有可能补语体系，通过真实的跨文化交流与生活挑战情境，实现可能补语的炉火纯青运用！\n\n1. 可能补语系统全景总表 (Master Potential Complement Map):\n| 类型 | 肯定式 (V得C) | 否定式 (V不C) | 语用核心 |\n| :--- | :--- | :--- | :--- |\n| **结果型** | 看得懂、听得见、找得到 | 看不懂、听不见、找不到 | 结果能否达成 |\n| **趋向型** | 进得去、走得上来、拿得出来 | 进不去、走不上来、拿不出来 | 空间位移能否实现 |\n| **容量/负荷** | 吃得了、受得了、做得了 | 吃不了、受不了、做不了 | 容量/极限/承受力 |\n| **生活凝固** | 睡得着、忘得了、对得起 | 睡不着、忘不了、对不起 | 习惯心理生理反应 |\n\n2. 第十二单元实战交际演练 (Unit 12 Synthesis Dialogue):\n- 跨国留学生活分享：长城登山极限体验（爬得上去吗？）、品尝川味火锅辣度挑战（吃得了吗/受得了）、学术讲座听力突破（听得懂了）。",
            "examples": [
                {
                    "target": "大卫：李明，这个四川九宫格变态辣火锅，你一个南方人吃得了吗？ 李明：哈哈，完全没问题，我早就适应吃辣了，受得了！",
                    "reading": "Dàwèi: Lǐ Míng, zhè gè Sìchuān jiǔgōnggé biàntàilà huǒguō, nǐ yí gè nánfāngrén chī de liǎo ma? Lǐ Míng: Hāhā, wánquán méi wèntí, wǒ zǎojiù shìyìng chī là le, shòudeliǎo!",
                    "translation": "David: Li Ming, this Sichuan extreme spicy grid hotpot, can you as a southerner handle eating it? Li Ming: Haha, no problem at all; I adapted to spicy food long ago and can bear it!"
                },
                {
                    "target": "张老师对大家说：‘只要大家肯下功夫，每天记十个生词，没有攻克不了的中文难关！’",
                    "reading": "Zhāng lǎoshī duì dàjiā shuō: ‘Zhǐyào dàjiā kěn xià gōngfu, měitiān jì shí gè shēngcí, méiyǒu gōngkè bu liǎo de zhōngwén nánguān!’",
                    "translation": "Teacher Zhang said to everyone: 'As long as everyone is willing to put in effort and memorize 10 words every day, there is no Chinese hurdle that cannot be overcome!'"
                },
                {
                    "target": "经过王老师的耐心指点，这篇晦涩的文言文我终于完全读得懂了，心里别提多有成就感了！",
                    "reading": "Jīngguò Wáng lǎoshī de nàixīn zhǐdiǎn, zhè piān huìsè de wényánwén wǒ zhōngyú wánquán dúdedǒng le, xīnlǐ biétí duō yǒu chéngjiùgǎn le!",
                    "translation": "Through Teacher Wang's patient guidance, I was finally able to fully comprehend this obscure Classical Chinese text; my heart felt immense achievement!"
                }
            ],
            "mnemonics": [
                "Potential Complements: The Secret Weapon of Natural Mandarin Expression!"
            ],
            "culturalNotes": [
                "Challenging ultra-spicy Sichuan hotpot (挑战变态辣火锅) with friends while asking «吃得了吗？受得了吗？» is a legendary contemporary youth bonding activity."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘这本厚厚的字典字号太小了，我看不清’中，‘看不清’属于哪类可能补语？",
                    "options": [
                        "结果型可能补语否定式 (Result-type potential complement negative)",
                        "助动词句",
                        "趋向补语肯定式"
                    ],
                    "answerIndex": 0,
                    "explanation": "看不清 is a result-type potential complement in negative form."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "当表达‘工作虽然繁重，但我能够承受得住’时，最精准的可能补语肯定式是：",
                    "options": [
                        "受不了",
                        "受得了 (shòudeliǎo: able to bear / endure)",
                        "受没得"
                    ],
                    "answerIndex": 1,
                    "explanation": "受得了 expresses the capacity to endure and withstand."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列关于可能补语的核心语法价值，总结最准确的是：",
                    "options": [
                        "只能用于书面语",
                        "用于表达主观能力或客观条件是否允许达成动作的结果或趋向 (Expresses whether subjective ability or objective conditions permit achieving the result/direction)",
                        "只能用于过去发生的事情"
                    ],
                    "answerIndex": 1,
                    "explanation": "Potential complements convey whether internal ability or external conditions allow realizing the result or direction."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'able to bear / can stand' (受得了):",
                    "acceptedAnswers": [
                        "受得了",
                        "shoudeliao",
                        "shòudeliǎo",
                        "Shòudeliǎo",
                        "Shoudeliao"
                    ],
                    "explanation": "受得了 (shòudeliǎo) means 'able to endure / can bear'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u13-l1": {
        "id": "zh-u13-l1",
        "unit": "zh-u13",
        "level": "B1",
        "objective": "Master the foundational structure and communicative rationale of the 把 (bǎ) disposal construction (Subject + 把 + Definite Object + Verb + Complement / Other Element).",
        "prerequisites": [
            "zh-u12-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u12-l5"
            ]
        },
        "presentation": {
            "explanation": "「把字句」是现代汉语最具特色的核心句式之一！它的核心语法功能是**「处置（Disposal）」**——即表示主语通过某种动作行为，对某个**特定的对象产生影响，使其位置、状态、归属或形态发生改变**！\n\n1. 核心处置公式 (The Core 把 Formula):\n- **主语 + 把 + 处置对象 (宾语) + 动作动词 + 其他成分 (补语/了/在/到/给等)**\n- 例子：\n  - 我**把**苹果**洗干净了**。(I washed the apple clean. *[苹果状态由脏变干净]*)\n  - 请**把**门**关上**。(Please close the door. *[门由开变关]*)\n  - 他**把**书**放进了书包**。(He put the book into the bag. *[书的位置发生位移]*)\n\n2. 黄金铁律一：**动词绝不能单独出现（不能是光杆动词）！**\n  - 错误：*我把苹果吃。\n  - 正确：我把苹果**吃了** / 把苹果**吃完了**！",
            "examples": [
                {
                    "target": "下课后，值日生认真地把黑板擦得干干净净，把桌椅摆放整齐。",
                    "reading": "Xiàkè hòu, zhírìshēng rènzhēn de bǎ hēibǎn cā de gāngānjìngjìng, bǎ zhuōyǐ bǎifàng zhěngqí.",
                    "translation": "After class, the student on duty attentively wiped the blackboard squeaky clean and arranged desks and chairs neatly."
                },
                {
                    "target": "出门前请大家务必把窗户关好，把房间里的电源插头全部拔掉。",
                    "reading": "Chūmén qián qǐng dàjiā wùbì bǎ chuānghu guānhǎo, bǎ fángjiān lǐ de diànyuán chātóu quánbù bádiào.",
                    "translation": "Before going out, everyone please make sure to close the windows securely and unplug all power plugs in the room."
                },
                {
                    "target": "大卫高兴地把刚买的新鲜水果洗干净，端出来热情地招待来访的客人。",
                    "reading": "Dàwèi gāoxìng de bǎ gāng mǎi de xīnxiān shuǐguǒ xǐ gānjìng, duān chūlai rèqíng de zhāodài láifǎng de kèrén.",
                    "translation": "David happily washed the freshly bought fresh fruit clean and brought it out to warmly host visiting guests."
                }
            ],
            "mnemonics": [
                "把 = Take & Dispose! Formula: Subject + 把 + Object + Verb + RESULT/CHANGE! Never leave the verb alone!"
            ],
            "culturalNotes": [
                "The classroom duty rotation (值日生 zhírìshēng) where students take turns cleaning blackboards (把黑板擦干净) and organizing desks builds communal responsibility in Chinese schools."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列关于把字句的句子中，哪一个完全符合语法规范？",
                    "options": [
                        "请把这本书看 (Wrong: naked verb)",
                        "请把这本书看完了再还给我 (Qǐng bǎ zhè běn shū kànwán le zài huángěi wǒ)",
                        "请把看这本书"
                    ],
                    "answerIndex": 1,
                    "explanation": "把 sentences strictly require a resultative complement, directional complement, or 了 after the verb; naked verbs are ungrammatical."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘他把房间打扫干净了’中，‘把’字句突出的核心语义是：",
                    "options": [
                        "打扫房间的工具",
                        "对‘房间’这一对象进行了处理并产生了‘干净’的状态改变 (Disposal of 'room' resulting in the state change 'clean')",
                        "房间非常大"
                    ],
                    "answerIndex": 1,
                    "explanation": "The 把 construction highlights active disposal causing a state change in the object."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "在把字句中，动词后面必须带有‘其他成分’，下列哪个句子符合这一规则？",
                    "options": [
                        "他把衣服洗",
                        "他把衣服洗干净了 (Tā bǎ yīfu xǐ gānjìng le)",
                        "他洗了把衣服"
                    ],
                    "answerIndex": 1,
                    "explanation": "洗干净了 has the resultative complement 干净 and aspect marker 了."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to close / shut securely' (关好):",
                    "acceptedAnswers": [
                        "关好",
                        "guanhao",
                        "guānhǎo",
                        "Guānhǎo",
                        "Guanhao",
                        "關好"
                    ],
                    "explanation": "关好 (guānhǎo) means 'to close / shut securely'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u13-l2": {
        "id": "zh-u13-l2",
        "unit": "zh-u13",
        "level": "B1",
        "objective": "Master the definiteness requirement of the 把 object (must be specific, known, or definite: 这/那/我/特指) and identify verbs that cannot enter the 把 construction (感知/心理/存在: 喜欢, 知道, 见, 听, 有, 是).",
        "prerequisites": [
            "zh-u13-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u13-l1"
            ]
        },
        "presentation": {
            "explanation": "把字句并不是任何名词和动词都能随意使用的，它有两个至关重要的**结构限制法则**！\n\n1. 宾语特指律 (The Definiteness Law):\n- 「把」后面的宾语必须是**说话双方已知的、特定的或有指代的人或事物（Definite / Specific Entity）**！\n  - 正确：他把**那本**小说看完了 / 把**我的**钥匙弄丢了。\n  - 错误：*他把一本小说看完了 (*Incorrect: indefinite 一本 cannot be disposed).\n\n2. 动词排他律 (Verbs Excluded from 把):\n- 只有具有**及物性、动作性并能对对象造成影响**的动词才能用于把字句！\n- **严禁用于把字句的动词**：\n  - **心理情感动词**：*喜欢、爱、讨厌、想念、希望\n  - **知觉认知动词**：*知道、认识、觉得、同意\n  - **存在判断动词**：*是、有、在、等于、像\n  - **趋向无处置动词**：*来、去、上、下。",
            "examples": [
                {
                    "target": "请你把桌子上的那份学术研究报告拿给王教授审阅。",
                    "reading": "Qǐng nǐ bǎ zhuōzi shang de nà fèn xuéshù yánjiū bàogào ná gěi Wáng jiàoshòu shěnyuè.",
                    "translation": "Please take that academic research report on the desk to Professor Wang for review."
                },
                {
                    "target": "小明不小心把李明刚买的那支英雄牌钢笔摔坏了，心里非常内疚。",
                    "reading": "Xiǎomíng bù xiǎoxīn bǎ Lǐ Míng gāng mǎi de nà zhī yīngxióng pái gāngbǐ shuāihuài le, xīnlǐ fēicháng nèijiù.",
                    "translation": "Xiaoming accidentally dropped and broke that Hero-brand fountain pen Li Ming had just bought, feeling very guilty."
                },
                {
                    "target": "在整理书房时，我把这些年收集的所有古籍文献都分类编号存放好了。",
                    "reading": "Zài zhěnglǐ shūfáng shí, wǒ bǎ zhèxiē nián shōují de suǒyǒu gǔjí wénxiàn dōu fēnlèi biānhào cúnfànghǎo le.",
                    "translation": "While tidying the study, I categorized, numbered, and stored away all the ancient documents collected over these years."
                }
            ],
            "mnemonics": [
                "Definite Object Only (这/那/具体已知)! No Love/Know/Be verbs in 把 (喜欢/知道/是有 are banned)!"
            ],
            "culturalNotes": [
                "Hero-brand fountain pens (英雄牌钢笔) represent a nostalgic classic of Chinese academic culture and scholastic pride since the mid-20th century."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一组动词绝对不能用于把字句？",
                    "options": [
                        "洗、拿、放、关",
                        "喜欢、知道、认识、是 (Psychological/Cognitive/Copula verbs)",
                        "写、擦、修、借"
                    ],
                    "answerIndex": 1,
                    "explanation": "Psychological, cognitive, and existence verbs (喜欢、知道、认识、是) cannot exert physical disposal and are banned from 把."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "为什么句子‘*我把一本书看完了’在标准现代汉语中是不自然的？",
                    "options": [
                        "因为书太厚了",
                        "因为‘一本书’是泛指泛称，把字句宾语必须是已知特指的对象 (Indefinite object violates the Definiteness Rule of 把)",
                        "因为动词不能用‘看’"
                    ],
                    "answerIndex": 1,
                    "explanation": "The object of 把 must be definite/specific (e.g. 这本书 / 那本书), not indefinite (一本书)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子在宾语特指性与动词搭配上完全正确？",
                    "options": [
                        "他把那封重要的电子邮件发送出去了 (Tā bǎ nà fēng zhòngyào de diànzǐ yóujiàn fāsòng chūqu le)",
                        "他把我喜欢了",
                        "他把一个人认识了"
                    ],
                    "answerIndex": 0,
                    "explanation": "那封重要的电子邮件 is a specific definite object and 发送出去 is a valid disposal action."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to arrange / put in order' (放好):",
                    "acceptedAnswers": [
                        "放好",
                        "fanghao",
                        "fànghǎo",
                        "Fànghǎo",
                        "Fanghao"
                    ],
                    "explanation": "放好 (fànghǎo) means 'to place properly / put away neatly'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u13-l3": {
        "id": "zh-u13-l3",
        "unit": "zh-u13",
        "level": "B1",
        "objective": "Master the strict placement rule where negative adverbs (没/没有/别), modal verbs (想/要/能/可以/应该), and time adverbs MUST be placed BEFORE 把, never between 把 and the verb.",
        "prerequisites": [
            "zh-u13-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u13-l2"
            ]
        },
        "presentation": {
            "explanation": "在把字句中，副词与助动词的位置有着绝对不可违背的**前置铁律（Pre-把 Placement Rule）**！\n\n1. 核心前置法则：**否定词、能愿动词与副词必须放在「把」字之前！**\n- **否定词前置 (没/没有/别/不 + 把)**：\n  - 我**没把**作业带来。(I didn't bring homework. *[绝不说 *我把作业没带来])*\n  - **别把**这件事情告诉他！(Don't tell him this matter!)\n- **能愿动词前置 (想/要/能/可以/应该 + 把)**：\n  - 你**应该把**字写端正。(You should write characters neatly. *[绝不说 *你把字应该写端正])*\n  - 我**想把**这本小说翻译成英文。(I want to translate this novel into English.)\n- **时间/频度副词前置 (已经/刚刚/经常 + 把)**：\n  - 他**已经把**行李打包好了。(He has already packed the luggage.)\n\n2. 总结公式：**主语 + [时间副词 / 否定词 / 能愿动词] + 把 + 宾语 + 动词 + 补语**！",
            "examples": [
                {
                    "target": "大卫十分抱歉地对老师说：‘老师对不起，我今天早晨走得太匆忙，没把听写本带来。’",
                    "reading": "Dàwèi shífēn bàoqiàn de duì lǎoshī shuō: ‘Lǎoshī duìbuqǐ, wǒ jīntiān zǎochén zǒu de tài cōngmáng, méi bǎ tīngxiěběn dàilái.’",
                    "translation": "David very apologetically said to the teacher: 'Sorry teacher, I left in too much of a hurry this morning and didn't bring my dictation notebook.'"
                },
                {
                    "target": "为了保护视力，我们在看书写字时一定要把台灯调到合适的亮度。",
                    "reading": "Wèile bǎohù shìlì, wǒmen zài kànshū xiězì shí yídìng yào bǎ táidēng tiáo dào héshì de liàngdù.",
                    "translation": "To protect eyesight, when reading and writing we definitely must adjust the desk lamp to a suitable brightness."
                },
                {
                    "target": "大家已经把下周文化节的演出服装准备好了，只等正式登台亮相！",
                    "reading": "Dàjiā yǐjīng bǎ xiàzhōu wénhuàjié de yǎnchū fúzhuāng zhǔnbèihǎo le, zhǐ děng zhèngshì dēngtái liàngxiàng!",
                    "translation": "Everyone has already prepared the performance costumes for next week's culture festival, just waiting to formally take the stage!"
                }
            ],
            "mnemonics": [
                "Front-Load Before 把: Negatives (没), Modals (想/能/要), Adverbs (已经) always MARCH IN FRONT OF 把!"
            ],
            "culturalNotes": [
                "The school culture festival (校园文化节 xiàoyuán wénhuàjié) with drama, dance, and music is an annual highlight of campus life in China."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘我还没把今天的作业做完’中，否定词‘没’放在什么位置？",
                    "options": [
                        "放在‘把’字之前 (In front of 把)",
                        "放在动词‘做’之前",
                        "放在句尾"
                    ],
                    "answerIndex": 0,
                    "explanation": "Negatives like 没 must strictly precede 把."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "表达‘你不能把手机带进考场’时，能愿动词与否定词‘不能’的正确语序是：",
                    "options": [
                        "你把手机不能带进考场",
                        "你不能把手机带进考场 (Nǐ bù néng bǎ shǒujī dàijìn kǎochǎng)",
                        "你带手机不能把考场"
                    ],
                    "answerIndex": 1,
                    "explanation": "不能 must be placed before 把."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子的副词与否定词语序完全正确？",
                    "options": [
                        "他把钱已经还给我了",
                        "他已经把借的书还给图书馆了 (Tā yǐjīng bǎ jiè de shū huán gěi túshūguǎn le)",
                        "他把借的书没还"
                    ],
                    "answerIndex": 1,
                    "explanation": "已经 correctly precedes 把."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to pack / pack up' (打包好):",
                    "acceptedAnswers": [
                        "打包好",
                        "dabaohao",
                        "dǎbāohǎo",
                        "Dǎbāohǎo",
                        "Dabaohao"
                    ],
                    "explanation": "打包好 (dǎbāohǎo) means 'to pack up properly'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u13-l4": {
        "id": "zh-u13-l4",
        "unit": "zh-u13",
        "level": "B1",
        "objective": "Master the high-frequency complex 把 constructions involving location shift (放在/送到), transfer/giving (送给/寄给), and transformation/translation (翻译成/看作).",
        "prerequisites": [
            "zh-u13-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u13-l3"
            ]
        },
        "presentation": {
            "explanation": "把字句最广泛生动的应用，是与表示**位移到达（到/在）、对象转移（给）以及状态转化（成/作）**的介词补语深度结合！\n\n1. 四大核心高阶把字句公式 (4 Advanced 把 Patterns):\n- **位置存留：把 + O + 动词 + 在 + 处所 (V + zài + Place)**\n  - 请**把**行李**放**在**行李架上**。(Put luggage on the luggage rack.)\n- **空间位移：把 + O + 动词 + 到 + 终点 (V + dào + Destination)**\n  - 他**把**客人**送**到**了校门口**。(He walked the guests to the school gate.)\n- **对象转移：把 + O + 动词 + 给 + 接收者 (V + gěi + Recipient)**\n  - 我想**把**这束鲜花**送**给**敬爱的老师**。(Give these flowers to the teacher.)\n- **形态转化：把 + O + 动词 + 成 / 作 + 结果 (V + chéng/zuò + Result)**\n  - 请**把**这段中文**翻译**成**优美的英文**。(Translate into English.) / 把他**当**作**好朋友**。",
            "examples": [
                {
                    "target": "王老师微笑着把荣誉证书颁发给了在中文演讲比赛中荣获特等奖的留学生。",
                    "reading": "Wáng lǎoshī wēixiào zhe bǎ róngyù zhèngshū bānfā gěi le zài zhōngwén yǎnjiǎng bǐsài zhōng rónghuò tèděngjiǎng de liúxuéshēng.",
                    "translation": "Teacher Wang smilingly presented the certificate of honor to the international student who won the grand prize in the Chinese speech contest."
                },
                {
                    "target": "请同学们在交卷前，先把自己的姓名和考号工整地写在答题卡上。",
                    "reading": "Qǐng tóngxuémen zài jiāojuàn qián, xiān bǎ zìjǐ de xìngmíng hé kǎohào gōngzhěng de xiě zài dǎtíkǎ shang.",
                    "translation": "Before submitting the exam, students please first write your name and candidate number neatly on the answer sheet."
                },
                {
                    "target": "通过长期的刻苦钻研，翻译家把这部中国古典名著成功翻译成了五种外语。",
                    "reading": "Tōngguò chángqī de kèkǔ zuānyán, fānyìjiā bǎ zhè bù Zhōngguó gǔdiǎn míngzhù chénggōng fānyì chéng le wǔ zhǒng wàiyǔ.",
                    "translation": "Through long-term assiduous research, the translator successfully translated this Chinese classical masterpiece into five foreign languages."
                }
            ],
            "mnemonics": [
                "4 Transformation Links: 在 (Place), 到 (Destination), 给 (Recipient), 成 (Transform/Translate)!"
            ],
            "culturalNotes": [
                "Classical translation (典籍外译 diǎnjí wàiyì) plays a vital role in sharing Chinese civilization, philosophy, and literature with global readers."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘将这本中文小说翻译为法文’时，应选用哪个固定把字句式？",
                    "options": [
                        "把小说翻译成法文 (bǎ ... fānyì chéng: translate into)",
                        "把小说翻译在法文",
                        "把小说翻译到法文"
                    ],
                    "answerIndex": 0,
                    "explanation": "成 indicates transformation and translation into a new form/language."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘请把这封邀请函亲手交给张院长’中，‘交给’体现了什么语义？",
                    "options": [
                        "位置移动",
                        "物品所有权/承接对象的转移 (Transfer of possession to a recipient)",
                        "物品被损坏"
                    ],
                    "answerIndex": 1,
                    "explanation": "给 marks transfer of the object to a recipient."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子正确表达了‘将书包放置在书桌上’？",
                    "options": [
                        "他把书包放在书桌上了 (Tā bǎ shūbāo fàng zài shūzhuō shang le)",
                        "他放书包把在书桌",
                        "他把书桌放在书包"
                    ],
                    "answerIndex": 0,
                    "explanation": "把 + 书包 + 放在 + 书桌上 is the perfect location disposal pattern."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to translate into' (翻译成):",
                    "acceptedAnswers": [
                        "翻译成",
                        "fanyicheng",
                        "fānyìchéng",
                        "Fānyìchéng",
                        "Fanyicheng",
                        "翻譯成"
                    ],
                    "explanation": "翻译成 (fānyìchéng) means 'to translate into'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u13-l5": {
        "id": "zh-u13-l5",
        "unit": "zh-u13",
        "level": "B1",
        "objective": "Synthesize all aspects of the 把 construction (Definiteness rule, Naked-verb ban, Pre-把 adverb/negative/modal rules, and V+在/到/给/成 patterns) into rich expressive narratives and fluent spontaneous dialogues.",
        "prerequisites": [
            "zh-u13-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u13-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将把第十三单元所有的把字句核心规则提炼为系统总表，并在学术生活、跨国文化交流与日常活动实战中全面运用！\n\n1. 把字句全景法则导航表 (Master 把 Navigation Chart):\n- **基本核心**：主语 + 把 + 特指宾语 + 动词 + 补语/结果/了\n- **禁止动词**：心理 (喜欢/爱)、认知 (知道/认识)、判断 (是/有)\n- **前置铁律**：副词 (已经)、否定词 (没/别)、能愿动词 (想/能/应该) 必在「把」前！\n- **高阶引申**：\n  - 把 + O + 放在 (Location)\n  - 把 + O + 送到 (Destination)\n  - 把 + O + 交给 (Recipient)\n  - 把 + O + 翻译成 (Transformation)\n\n2. 第十三单元实战交际演练 (Unit 13 Synthesis Dialogue):\n- 跨国学术夏令营筹备：把通知发给大家、把会议室布置好、把论文翻译成中文、把行李放到宿舍。",
            "examples": [
                {
                    "target": "大卫：李明，明天的国际学术交流会我们应该怎么分工？ 李明：我已经把会议日程表发到大家邮箱了，请大家先把各自的讲稿准备好！",
                    "reading": "Dàwèi: Lǐ Míng, míngtiān de guójì xuéshù jiāoliúhuì wǒmen yīnggāi zěnme fēngōng? Lǐ Míng: Wǒ yǐjīng bǎ huìyì rìchéngbiǎo fādào dàjiā yóuxiāng le, qǐng dàjiā xiān bǎ gèzì de jiǎnggǎo zhǔnbèihǎo!",
                    "translation": "David: Li Ming, how should we divide tasks for tomorrow's international academic symposium? Li Ming: I already sent the conference schedule to everyone's email; please first get your individual speech drafts ready!"
                },
                {
                    "target": "志愿者们齐心协力，不仅把多功能国际会议厅打扫得一尘不染，还把同声传译设备调试好了。",
                    "reading": "Zhìyuànzhěmen qíxīnxiélì, bùjǐn bǎ duōgōngnéng guójì huìyìtīng dǎsǎo de yìchénbùrǎn, hái bǎ tóngshēng chuányì shèbèi tiáoshìhǎo le.",
                    "translation": "Working with united efforts, volunteers not only cleaned the multifunctional international hall spotless, but also calibrated the simultaneous interpretation equipment!"
                },
                {
                    "target": "经过一学期的刻苦训练，留学生们已经能把各种复杂的句式灵活运用在日常汉语交际中了。",
                    "reading": "Jīngguò yì xuéqī de kèkǔ xùnliàn, liúxuéshēngmen yǐjīng néng bǎ gèzhǒng fùzá de jùshì línghuó yùnyòng zài rìcháng hànyǔ jiāojì zhōng le.",
                    "translation": "After a semester of hard training, international students are already able to flexibly apply various complex sentence patterns in daily Chinese communication."
                }
            ],
            "mnemonics": [
                "The Complete 把 Master: Definite Target + Pre-把 Modals/Negatives + Transformed Outcome (在/到/给/成)!"
            ],
            "culturalNotes": [
                "Simultaneous interpretation (同声传译 tóngshēng chuányì) in Chinese-English academic forums demands elite language mastery and lightning-fast syntactic restructuring."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘我已经把会议日程发到你的手机上了’体现了把字句的什么高阶结构？",
                    "options": [
                        "位置与终点位移结构 (把 + O + V + dào + Destination)",
                        "被动结构",
                        "疑问结构"
                    ],
                    "answerIndex": 0,
                    "explanation": "发到...上 indicates sending and transmitting to a destination."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "当向外国朋友介绍‘我们必须把中文学好’时，‘学好’在句子中充当：",
                    "options": [
                        "主语",
                        "处置动作达成满意结果的结果补语 (Resultative complement showing satisfactory learning outcome)",
                        "时间状语"
                    ],
                    "answerIndex": 1,
                    "explanation": "好 is the resultative complement completing the disposal action."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于把字句的语法总则，下列哪一项表述完全正确？",
                    "options": [
                        "任何动词都可以用于把字句",
                        "否定词‘没’必须放在‘把’字之后",
                        "宾语必须是已知特指的，且动词后必须带补语或其它成分 (Object must be definite/specific, and verb must have complements/other elements)"
                    ],
                    "answerIndex": 2,
                    "explanation": "把 sentences require a definite object and a verb accompanied by complements or aspect particles."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to arrange / set up properly' (布置好):",
                    "acceptedAnswers": [
                        "布置好",
                        "buzhihao",
                        "bùzhìhǎo",
                        "Bùzhìhǎo",
                        "Buzhihao"
                    ],
                    "explanation": "布置好 (bùzhìhǎo) means 'to arrange / decorate / set up properly'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u14-l1": {
        "id": "zh-u14-l1",
        "unit": "zh-u14",
        "level": "B1",
        "objective": "Master the structural formula of the 被 (bèi) passive voice (Patient Subject + 被 + (Agent) + Transitive Verb + Complement / Particle) and understand its traditional adversity/misfortune nuance.",
        "prerequisites": [
            "zh-u13-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u13-l5"
            ]
        },
        "presentation": {
            "explanation": "「被字句」是汉语表达**受事主语（Patient Subject）经历某种动作影响**的核心被动句式！\n\n1. 核心被动公式 (The 被 Passive Formula):\n- **受事 (主语) + 被 + [施事者] + 及物动词 + 其他成分 (补语/了/在/到等)**\n- 例子：\n  - 我的自行车**被 (小偷) 偷走了**。(My bicycle was stolen [by a thief].)\n  - 冰淇淋**被弟弟吃光了**。(The ice cream was completely eaten by younger brother.)\n- 特点：在口语中，施事者（小偷/弟弟）可以省略，直接说「自行车**被偷走了**」！\n\n2. 传统情感色彩：**不幸与不如意（Adversity & Misfortune）**\n  - 传统汉语中，被字句主要用于表达**遭受损失、受损害或不如意的事情**（如：被撞伤、被骗、被批评）。虽然现代书面语已扩展到中性/积极场景，但口语中仍以不如意事件为主。",
            "examples": [
                {
                    "target": "大卫停在宿舍楼下的新山地自行车昨晚不小心被小偷偷走了。",
                    "reading": "Dàwèi tíng zài sùshèlóu xià de xīn shāndì zìxíngchē zuówǎn bù xiǎoxīn bèi xiǎotōu tōuzǒu le.",
                    "translation": "David's new mountain bike parked under the dorm building was accidentally stolen by a thief last night."
                },
                {
                    "target": "放在阳台上的这盆珍贵兰花被昨天夜里突如其来的暴风雨给刮倒了。",
                    "reading": "Fàng zài yángtái shang de zhè pén zhēnguì lánhuā bèi zuótiān yèlǐ tūrúqílái de bàofēngyǔ gěi guādǎo le.",
                    "translation": "This pot of precious orchid placed on the balcony was blown over by the sudden torrential storm last night."
                },
                {
                    "target": "那篇发表在核心期刊上的学术论文被国内外多位知名语言学家高度引用了。",
                    "reading": "Nà piān fābiǎo zài héxīn qīkān shang de xuéshù lùnwén bèi guónèiwài duō wèi zhìmíng yǔyánxuéjiā gāodù yǐnyòng le.",
                    "translation": "That academic paper published in the core journal was highly cited by multiple famous linguists domestically and abroad."
                }
            ],
            "mnemonics": [
                "被 = Passive Receiver! Patient + 被 + (Agent) + Verb + RESULT (被偷了、被打破了)!"
            ],
            "culturalNotes": [
                "Orchids (兰花 lánhuā) symbolize elegance and nobility in Chinese tradition as one of the 'Four Gentlemen of Flowers' (花中四君子 梅兰竹菊)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘我的雨伞被同学借走了’中，受事者（受到动作影响的事物）是：",
                    "options": [
                        "雨伞 (The umbrella — Patient subject)",
                        "同学",
                        "借"
                    ],
                    "answerIndex": 0,
                    "explanation": "雨伞 is the patient subject receiving the passive action."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "下列哪种情境最符合汉语口语中被字句的典型语用情感（不如意/受损）？",
                    "options": [
                        "钱包在公交车上被小偷偷走了 (Wallet stolen on the bus — classic adversity)",
                        "今天天气非常好",
                        "我们一起去食堂吃饭"
                    ],
                    "answerIndex": 0,
                    "explanation": "钱包被偷 illustrates the prototypical adversative use of the 被 construction."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "在被字句中，施事者（执行动作的人）是否必须出现？",
                    "options": [
                        "必须出现",
                        "可以省略（如：蛋糕被吃完了）(Can be omitted)",
                        "动词必须省略"
                    ],
                    "answerIndex": 1,
                    "explanation": "The agent in a 被 sentence can be omitted (e.g. 蛋糕被吃完了)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to be stolen away' (被偷走):",
                    "acceptedAnswers": [
                        "被偷走",
                        "beitouzou",
                        "bèitōuzǒu",
                        "Bèitōuzǒu",
                        "Beitouzou"
                    ],
                    "explanation": "被偷走 (bèitōuzǒu) means 'to be stolen away'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u14-l2": {
        "id": "zh-u14-l2",
        "unit": "zh-u14",
        "level": "B1",
        "objective": "Master the colloquial passive markers 让 (ràng), 叫 (jiào), and 给 (gěi) in everyday spoken Mandarin, noting that 让 and 叫 MUST be followed by an agent.",
        "prerequisites": [
            "zh-u14-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u14-l1"
            ]
        },
        "presentation": {
            "explanation": "在日常汉语口语中，人们常常使用「让 (ràng)」和「叫 (jiào)」代替「被」来表达被动，并常用「给 (gěi)」来增强被动语气！\n\n1. 口语被动标记：「让」与「叫」\n- **公式：受事 + 让 / 叫 + 施事 + 动词 + 补语**\n- 例子：\n  - 我的手机**让雨淋湿了**。(My phone got soaked by rain.)\n  - 刚买的蛋糕**叫猫给吃了**。(The cake got eaten by the cat.)\n- **绝不能省略施事者铁律**：\n  - 「被」后面施事者可省（蛋糕**被吃了** [OK]）。\n  - **「让/叫」后面必须有施事者**！若施事者未知，必须用「人」补位（蛋糕**让人给吃了** [必须有‘人’，绝不能说 *蛋糕让吃了]）！\n\n2. 语气助词「给」的强化作用：\n- 常嵌入在施事者与动词之间：**被/让/叫 + 施事 + 给 + 动词** (e.g., 衣服让雨**给**淋透了)。",
            "examples": [
                {
                    "target": "李明叹了口气说：‘今天出门太急没带伞，半路上整个人叫大雨给淋成了落汤鸡。’",
                    "reading": "Lǐ Míng tàn le kǒu qì shuō: ‘Jīntiān chūmén tài jí méi dài sǎn, bànlù shang zhěng gè rén jiào dàyǔ gěi línchéng le luòtāngjī.’",
                    "translation": "Li Ming sighed: 'I left in too much of a hurry today without an umbrella, and got drenched by the heavy rain into a drowned chicken halfway through.'"
                },
                {
                    "target": "桌子上那杯刚泡好的热咖啡不小心让人给碰洒了，弄得满桌子都是。",
                    "reading": "Zhuōzi shang nà bēi gāng pào hǎo de rè kāfēi bù xiǎoxīn ràng rén gěi pèngsǎ le, nòng de mǎn zhuōzi dōu shì.",
                    "translation": "That freshly brewed hot coffee on the table was accidentally knocked over by someone, making a mess all over the desk."
                },
                {
                    "target": "大卫的精彩发言叫全场观众的热烈掌声给打断了数次。",
                    "reading": "Dàwèi de jīngcǎi fāyán jiào quánchǎng guānzhòng de rèliè zhǎngshēng gěi dǎduàn le shù cì.",
                    "translation": "David's brilliant speech was interrupted several times by the audience's enthusiastic applause."
                }
            ],
            "mnemonics": [
                "Spoken Passives: 让 & 叫 NEED an Agent (让人吃了)! Add 给 for Extra Punch (叫雨给淋湿了)!"
            ],
            "culturalNotes": [
                "The idiom «落汤鸡» (luòtāngjī - chicken in hot soup) is a humorous, self-deprecating Chinese metaphor for getting completely drenched in rain."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在口语中使用‘让’或‘叫’表达被动时，下列哪个句子在语法上是完全错误的？",
                    "options": [
                        "书让拿走了 (*Wrong: 让 must be followed by an agent like '人')",
                        "书让人拿走了",
                        "书被拿走了"
                    ],
                    "answerIndex": 0,
                    "explanation": "让 and 叫 strictly require an overt agent (e.g. 让人拿走了); they cannot take a naked verb directly."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘我的作业本叫大风给吹跑了’中，‘给’的作用是：",
                    "options": [
                        "赠送物品",
                        "加强被动处置语气的助词 (Particle reinforcing the passive tone)",
                        "作为名词"
                    ],
                    "answerIndex": 1,
                    "explanation": "给 in passive constructions reinforces the passive verbal action."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于‘被’与‘让/叫’的施事者省略规则，下列总结正确的是：",
                    "options": [
                        "‘被’后的施事者可省，但‘让/叫’后必须有施事者 (Agent after 被 is optional; agent after 让/叫 is mandatory)",
                        "两者都必须省略施事者",
                        "两者都不能有施事者"
                    ],
                    "answerIndex": 0,
                    "explanation": "被 can omit the agent (被偷了), but 让/叫 require an agent (让人偷了)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'got drenched soaked' (淋湿了):",
                    "acceptedAnswers": [
                        "淋湿了",
                        "linshile",
                        "línshīle",
                        "Línshīle",
                        "Linshile"
                    ],
                    "explanation": "淋湿了 (línshīle) means 'got drenched / soaked'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u14-l3": {
        "id": "zh-u14-l3",
        "unit": "zh-u14",
        "level": "B1",
        "objective": "Master the syntax of negatives (没/没有/别), modal verbs (想/能/会/可能), and adverbs in 被 sentences, placing them strictly BEFORE 被 (never between 被 and the verb).",
        "prerequisites": [
            "zh-u14-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u14-l2"
            ]
        },
        "presentation": {
            "explanation": "与把字句一样，被字句中副词、否定词和能愿动词的位置同样受**前置铁律（Pre-被 Placement Rule）**严格支配！\n\n1. 被字句修饰成分前置公式：\n- **受事主语 + [时间副词 / 否定词 / 能愿动词] + 被 + (施事) + 动词 + 补语**\n- **否定词前置 (没/没有/别 + 被)**：\n  - 我的钱包**没被**小偷偷走。(My wallet wasn't stolen. *[绝不说 *钱包被没偷走])*\n  - 这个问题**别被**他发现了。(Don't let this issue be noticed by him!)\n- **能愿动词前置 (想/能/会/可能/应该 + 被)**：\n  - 优秀的传统文化**应该被**更多年轻人了解。(Should be understood by more youth.)\n  - 这种小错误**很容易被**老师发现。(Can easily be detected by the teacher.)\n\n2. 对比总结法则：**不论是「把字句」还是「被字句」，「没」、「不」与「能愿动词」一律挺立在「把/被」字正前方！**",
            "examples": [
                {
                    "target": "幸好李明及时提醒，黑板上的这处笔误才没有被严谨的考官发现。",
                    "reading": "Xìnghǎo Lǐ Míng jíshí tíxǐng, hēibǎn shang de zhè chù bǐwù cái méiyǒu bèi yánjǐn de kǎoguān fāxiàn.",
                    "translation": "Fortunately Li Ming reminded in time, so this slip on the blackboard was not noticed by the rigorous examiner."
                },
                {
                    "target": "这批珍贵的敦煌莫高窟壁画数字化档案应该被永久妥善地保存在国家图书馆中。",
                    "reading": "Zhè pī zhēnguì de Dūnhuáng Mògāokū bìhuà shùzìhuà dàng'àn yīnggāi bèi yǒngjiǔ tuǒshàn de bǎocún zài guójiā túshūguǎn zhōng.",
                    "translation": "This batch of precious digitized archives of Dunhuang Mogao Cave murals should be permanently and properly preserved in the National Library."
                },
                {
                    "target": "大卫的汉语发音非常纯正地道，在国际交流中经常被大家误以为是中国北方人。",
                    "reading": "Dàwèi de hànyǔ fāyīn fēicháng chúnzhèng dìdao, zài guójì jiāoliú zhōng jīngcháng bèi dàjiā wùyǐwéi shì Zhōngguó běifāngrén.",
                    "translation": "David's Chinese pronunciation is exceptionally authentic and pure, often mistaken by everyone in international exchanges for a native northern Chinese."
                }
            ],
            "mnemonics": [
                "Pre-被 March: 没 (Negatives), 能/应该 (Modals), 经常 (Adverbs) stand PROUDLY BEFORE 被!"
            ],
            "culturalNotes": [
                "The Dunhuang Mogao Caves (敦煌莫高窟) in Gansu province represent a thousand years of Buddhist art and Silk Road cultural synthesis, now protected through world-class digitization."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘那个秘密没有被大家知道’时，否定词‘没有’应放在：",
                    "options": [
                        "‘被’字之前 (Before 被: 秘密没有被大家知道)",
                        "‘被’字之后",
                        "动词之后"
                    ],
                    "answerIndex": 0,
                    "explanation": "Negatives like 没有 strictly precede 被."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘这件古董可能已经被买走了’中，‘可能’与‘已经’的语序特点是：",
                    "options": [
                        "放在动词‘买’之后",
                        "全部前置在被动标记‘被’的前方 (All placed in front of 被)",
                        "随意放置"
                    ],
                    "answerIndex": 1,
                    "explanation": "Modals and time adverbs precede 被."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子在被字句否定语序上完全正确？",
                    "options": [
                        "他的手机被没有偷走",
                        "他的手机没有被小偷偷走 (Tā de shǒujī méiyǒu bèi xiǎotōu tōuzǒu)",
                        "他的手机偷走被没有"
                    ],
                    "answerIndex": 1,
                    "explanation": "没有 correctly precedes 被."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to be discovered / noticed' (被发现):",
                    "acceptedAnswers": [
                        "被发现",
                        "beifaxian",
                        "bèifāxiàn",
                        "Bèifāxiàn",
                        "Beifaxian",
                        "被發現"
                    ],
                    "explanation": "被发现 (bèifāxiàn) means 'to be discovered / noticed'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u14-l4": {
        "id": "zh-u14-l4",
        "unit": "zh-u14",
        "level": "B1",
        "objective": "Master Notional Passive Sentences (意念被动句 / 无标记被动: 信写好了, 饭做好了, 衣服洗干净了) and know when to use notional passive vs. formal 被.",
        "prerequisites": [
            "zh-u14-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u14-l3"
            ]
        },
        "presentation": {
            "explanation": "在现代汉语中，**绝大多数日常被动意义并不使用「被」字，而是使用「意念被动句（Notional Passive）」**！这是汉语有别于印欧语系的最核心特征之一！\n\n1. 什么是意念被动句？\n- 当主语是无生命的事物，且在语意上**显然只能是动作的承受者（不可能主动执行动作）**时，汉语直接使用「主语 + 动词 + 补语」结构，**不需要也不应该加「被」字**！\n- 典型范例：\n  - **信写好了**。(The letter is written. *[不说 *信被写好了])* \n  - **饭做好了**。(Dinner is cooked. *[不说 *饭被做好了])* \n  - **衣服洗干净了**。(Clothes are washed clean. *[不说 *衣服被洗干净了])* \n  - **作业交了**。(Homework is submitted. *[不说 *作业被交了])*\n\n2. 终极选用规则：\n- **积极/正常/预期的日常结果** → **意念被动（无标记被动）**！\n- **意外/受损/不如意/强调施事者** → **形式被字句（加‘被/让/叫’）**！",
            "examples": [
                {
                    "target": "王老师走进教室微笑着问：‘同学们，今天的课后练习都做好了没有？’",
                    "reading": "Wáng lǎoshī zǒu jìn jiàoshì wēixiào zhe wèn: ‘Tóngxuémen, jīntiān de kèhòu liànxí dōu zuòhǎo le méiyǒu?’",
                    "translation": "Teacher Wang walked into the classroom asking with a smile: 'Students, has today's after-class exercise all been finished or not?'"
                },
                {
                    "target": "行李已经收拾好了，火车票也买到了，我们明天清晨准时出发！",
                    "reading": "Xíngli yǐjīng shōushi hǎo le, huǒchēpiào yě mǎidào le, wǒmen míngtiān qīngchén zhǔnshí chūfā!",
                    "translation": "The luggage is already packed, train tickets are bought; we depart punctually tomorrow morning!"
                },
                {
                    "target": "刚洗好的衬衫挂在阳台衣架上晾干了；但那件白外套不幸被风吹到泥地里弄脏了。",
                    "reading": "Gāng xǐ hǎo de chènshān guà zài yángtái yījià shang liànggān le; dàn nà jiàn bái wàitào búxìng bèi fēng chuī dào nídì lǐ nòngzāng le.",
                    "translation": "The freshly washed shirt was hung on the balcony hanger and dried (notional passive); but that white coat unfortunately was blown into the mud by the wind and soiled (formal passive)."
                }
            ],
            "mnemonics": [
                "Natural & Expected = No 被 (饭做好了, 信寄了)! Disaster & Blame = Use 被 (碗被打碎了)!"
            ],
            "culturalNotes": [
                "Overusing '被' for normal positive events is known as 'Europeanized grammar' (欧化语法 ōuhuà yǔfǎ) in Chinese linguistics; native speakers prefer elegant notional passives (意念被动)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘晚饭已经准备就绪’时，最地道纯正的自然汉语表达是：",
                    "options": [
                        "晚饭做好了 (Notional passive: natural & expected)",
                        "晚饭被做好了 (*Europeanized passive)",
                        "晚饭让做好"
                    ],
                    "answerIndex": 0,
                    "explanation": "Normal everyday completed states use notional passive without 被."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘这篇学术论文已经修改完了’没有使用‘被’字，这体现了什么语法现象？",
                    "options": [
                        "主谓谓语句",
                        "意念被动句（无标记被动）(Notional passive)",
                        "倒装句"
                    ],
                    "answerIndex": 1,
                    "explanation": "When an inanimate subject naturally receives the action, it is an unmarked notional passive."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "对比 A‘行李收拾好了’与 B‘行李被人拿错了’，两者的语用区别在于：",
                    "options": [
                        "两者完全相同",
                        "A 是被字句，B 是把字句",
                        "A 是正常的预定结果（意念被动），B 是意外发生的差错（形式被动）(A: expected state notional passive; B: accidental mishap marked passive)"
                    ],
                    "answerIndex": 2,
                    "explanation": "A is a normal expected result (notional passive); B is an unfortunate mistake (marked passive)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'packed up / tidied up' (收拾好):",
                    "acceptedAnswers": [
                        "收拾好",
                        "shoushihao",
                        "shōushihǎo",
                        "Shōushihǎo",
                        "Shoushihao"
                    ],
                    "explanation": "收拾好 (shōushihǎo) means 'packed up / tidied up properly'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u14-l5": {
        "id": "zh-u14-l5",
        "unit": "zh-u14",
        "level": "B1",
        "objective": "Master the bidirectional transformation between active 把 sentences (S + 把 + O + V + C) and passive 被 sentences (O + 被 + S + V + C), achieving integrated conversational mastery.",
        "prerequisites": [
            "zh-u14-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u14-l4"
            ]
        },
        "presentation": {
            "explanation": "把字句与被字句是现代汉语中如同硬币正反两面的**互逆变换对偶句式（Transformation Duals）**！\n\n1. 核心互换转换矩阵 (The 把 ⇋ 被 Transformation Matrix):\n- **主动处置 (把字句)**：**施事者 (A) + 把 + 受事者 (B) + 动词 + 补语**\n  - 猫 (A) **把** 鱼 (B) **吃光了**。\n- **被动承接 (被字句)**：**受事者 (B) + 被 + 施事者 (A) + 动词 + 补语**\n  - 鱼 (B) **被** 猫 (A) **吃光了**。\n\n2. 语用视点选择律 (Focus & Perspective):\n- 当视点关注**动作执行者如何积极处置对象**时 → 选用**把字句** (e.g. 我把论文交了)。\n- 当视点关注**受害者/承受事物经历了何种影响或不如意事件**时 → 选用**被字句** (e.g. 论文被老师退回来了)。\n\n3. 第十四单元实战交际演练 (Unit 14 Synthesis Dialogue):\n- 实验室突发事件报告与处理：精密仪器被不小心碰落、及时修好、化险为夷。",
            "examples": [
                {
                    "target": "小明不小心把实验室的玻璃烧杯打破了；李明安慰他说：‘别难过，烧杯虽然被打破了，但只要人没受伤就好！’",
                    "reading": "Xiǎomíng bù xiǎoxīn bǎ shíyànshì de bōli shāobēi dǎpò le; Lǐ Míng ānwèi tā shuō: ‘Bié nánguò, shāobēi suīrán bèi dǎpò le, dàn zhǐyào rén méi shòushāng jiù hǎo!’",
                    "translation": "Xiaoming accidentally broke the lab glass beaker; Li Ming comforted him saying: 'Don't be sad; although the beaker was broken, it's fine as long as no one got hurt!'"
                },
                {
                    "target": "张老师把全班同学的期末论文都批改完了，所有评语都被工整地记录在教学反馈表上。",
                    "reading": "Zhāng lǎoshī bǎ quán bān tóngxué de qīmò lùnwén dōu pīgǎiwán le, suǒyǒu píngyǔ dōu bèi gōngzhěng de jìlù zài jiàoxué fǎnkuìbiǎo shang.",
                    "translation": "Teacher Zhang finished grading all students' final term papers, and all comments were recorded neatly on the feedback form."
                },
                {
                    "target": "经过科研团队连续数月的攻关，那个困扰大家已久的学术难题终于被成功攻克了！",
                    "reading": "Jīngguò kēyán tuánduì liánxù shù yuè de gōngguān, nà gè kùnrǎo dàjiā yǐ jiǔ de xuéshù nándiǎn zhōngyú bèi chénggōng gōngkè le!",
                    "translation": "After months of continuous tackling by the scientific team, that academic dilemma that troubled everyone for so long was finally successfully overcome!"
                }
            ],
            "mnemonics": [
                "Active Disposal = A 把 B + V + C! Passive Impact = B 被 A + V + C! Flip subject and object with precision!"
            ],
            "culturalNotes": [
                "The traditional philosophical wisdom of «岁岁平安» (peace through the years) is invoked whenever glassware breaks accidentally, transforming misfortune into good omen."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "将句子‘大风把大树吹倒了’转换为被字句，正确的是：",
                    "options": [
                        "大树把大风吹倒了",
                        "大树被大风吹倒了 (Dàshù bèi dàfēng chuīdǎo le — Patient + 被 + Agent + V + C)",
                        "大风被大树吹倒了"
                    ],
                    "answerIndex": 1,
                    "explanation": "大树 becomes the subject followed by 被 + 大风 + 吹倒了."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "将‘李明修好了那台电脑’改写为最地道生动的把字句与意念被动句分别是：",
                    "options": [
                        "李明把那台电脑修好了 / 那台电脑修好了 (Active 把 disposal & Notional passive)",
                        "李明被电脑修好了 / 电脑把李明修好了",
                        "电脑让李明修了"
                    ],
                    "answerIndex": 0,
                    "explanation": "李明把电脑修好了 (disposal) and 电脑修好了 (notional passive) represent natural Mandarin usage."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于把字句与被字句的对偶转换关系，下列哪一项概括最为精确？",
                    "options": [
                        "把字句与被字句完全不能互换",
                        "把字句强调施事者的处置行为，被字句强调受事者的被动承受与影响结果 (把 emphasizes agent disposal; 被 emphasizes patient impact)",
                        "被字句不能用于口语"
                    ],
                    "answerIndex": 1,
                    "explanation": "把 and 被 represent complementary perspectives of agent disposal and patient passive experience."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to overcome / tackle successfully' (攻克了):",
                    "acceptedAnswers": [
                        "攻克了",
                        "gongkele",
                        "gōngkèle",
                        "Gōngkèle",
                        "Gongkele"
                    ],
                    "explanation": "攻克了 (gōngkèle) means 'successfully tackled / overcome'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u15-l1": {
        "id": "zh-u15-l1",
        "unit": "zh-u15",
        "level": "B1",
        "objective": "Master the foundational 比 (bǐ) comparative formula (A 比 B + Adjective/Predicate) and enforce the strict prohibition against degree adverbs (很/非常/十分) in 比 sentences.",
        "prerequisites": [
            "zh-u14-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u14-l5"
            ]
        },
        "presentation": {
            "explanation": "「比字句」是汉语表达事物之间**性质、特征或状态程度差异**的最核心句式！\n\n1. 核心比较公式 (The Core 比 Formula):\n- **A 比 B + 形容词 / 谓语**\n- 例子：\n  - 哥哥**比**弟弟**高**。(Elder brother is taller than younger brother.)\n  - 今天**比**昨天**冷**。(Today is colder than yesterday.)\n\n2. 黄金铁律一：**严禁在形容词前加「很 / 非常 / 十分 / 特别」！**\n  - 错误：*哥哥比弟弟很高。 / *今天比昨天非常冷。\n  - 原因：「比」本身已经蕴含了程度差异的对比，再加上「很/非常」会导致语义语法冲突！\n\n3. 唯一合法的程度加深副词：**更 (gèng) 与 还 (hái)**！\n  - 哥哥很高，但爸爸**比哥哥更高 / 还要高**！(Dad is even taller than brother!)",
            "examples": [
                {
                    "target": "北京的秋天晴空万里、气候宜人，比炎热潮湿的夏天舒服得多。",
                    "reading": "Běijīng de qiūtiān qíngkōngwànlǐ, qìhòu yírén, bǐ yánrè cháoshī de xiàtiān shūfu de duō.",
                    "translation": "Beijing's autumn has clear skies and pleasant weather, much more comfortable than the hot and humid summer."
                },
                {
                    "target": "大卫的中文听力进步很大，今天的综合测试比上个月考得更好、更流利。",
                    "reading": "Dàwèi de zhōngwén tīnglì jìnbù hěn dà, jīntiān de zōnghé cèshì bǐ shàng gè yuè kǎo de gèng hǎo, gèng liúlì.",
                    "translation": "David's Chinese listening has progressed greatly; today's comprehensive test went even better and more fluently than last month."
                },
                {
                    "target": "乘坐复兴号高速铁路从北京到上海比乘坐普通特快列车快捷得多，节省了整整十个小时。",
                    "reading": "Chéngzuò Fùxīnghào gāosù tiělù cóng Běijīng dào Shànghǎi bǐ chéngzuò pǔtōng tèkuài lièchē kuàijié de duō, jiéshěng le zhěngzhěng shí gè xiǎoshí.",
                    "translation": "Taking the Fuxing high-speed railway from Beijing to Shanghai is much faster than standard express trains, saving a full ten hours."
                }
            ],
            "mnemonics": [
                "A 比 B + Adj! NEVER use 很/非常 with 比! Only 更 (gèng) and 还 (hái) are allowed!"
            ],
            "culturalNotes": [
                "Beijing's golden autumn (金秋北京 Jīnqiū Běijīng) is celebrated in Chinese classical and modern literature as the city's most poetic season."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个比字句完全符合现代汉语语法规范？",
                    "options": [
                        "他比我很高 (*Wrong: 很 is forbidden in 比)",
                        "他比我更努力 (Tā bǐ wǒ gèng nǔlì — A 比 B + 更 + Adj)",
                        "他很比我努力"
                    ],
                    "answerIndex": 1,
                    "explanation": "Degree adverbs like 很/非常 cannot modify adjectives in 比 sentences; 更/还 must be used instead."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘今天比昨天冷’中，如果想要表达‘程度进一步加深（even colder）’，应当加入哪个副词？",
                    "options": [
                        "非常",
                        "更 (gèng) / 还 (hái)",
                        "很"
                    ],
                    "answerIndex": 1,
                    "explanation": "更 or 还 denotes 'even more' in comparative sentences."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于比字句的形容词修饰规则，下列哪一项完全正确？",
                    "options": [
                        "可以使用‘很’，如：他比我很高",
                        "严禁使用‘很/非常’，但可以使用‘更/还’ (Strictly no 很/非常, but 更/还 is permitted)",
                        "形容词后不能带任何补语"
                    ],
                    "answerIndex": 1,
                    "explanation": "比 sentences forbid 很/非常, but permit 更/还."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'even better / further improved' (更好):",
                    "acceptedAnswers": [
                        "更好",
                        "genghao",
                        "gènghǎo",
                        "Gènghǎo",
                        "Genghao"
                    ],
                    "explanation": "更好 (gènghǎo) means 'even better'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u15-l2": {
        "id": "zh-u15-l2",
        "unit": "zh-u15",
        "level": "B1",
        "objective": "Master expressing specific, approximate, or large numerical differences in 比 sentences (A 比 B + Adj + 一点儿 / 得多 / 多了 / 具体数量词: 比我大三岁, 比昨天贵十块钱).",
        "prerequisites": [
            "zh-u15-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u15-l1"
            ]
        },
        "presentation": {
            "explanation": "当我们需要精确量化或大致描绘事物之间的**差异幅度**时，数量差额词必须放在**形容词之后充当补语**！\n\n1. 差异幅度补语公式 (Differential Complements):\n- **微小差异：A 比 B + 形容词 + 一点儿 / 一些 (a little bit)**\n  - 这件衣服**比**那件**贵一点儿**。(A little bit more expensive.)\n- **巨大差异：A 比 B + 形容词 + 得多 / 多了 (much more / way more)**\n  - 中国的高铁**比**传统绿皮火车**快得多 / 快多了**。(Much faster.)\n- **具体精确数量：A 比 B + 形容词 + 具体数量短语 (Precise Quantity)**\n  - 李明**比**大卫**大两岁**。(Li Ming is two years older than David.)\n  - 这本字典**比**那本**厚两百页**。(200 pages thicker.)\n\n2. 语序绝对铁律：**数量词必须在形容词之后！** 绝不能说 *比我三岁大。",
            "examples": [
                {
                    "target": "李明笑着对大卫说：‘我今年二十二岁，正好比你大两岁，你应该叫我李明哥！’",
                    "reading": "Lǐ Míng xiàozhe duì Dàwèi shuō: ‘Wǒ jīnnián èrshí'èr suì, zhènghǎo bǐ nǐ dà liǎng suì, nǐ yīnggāi jiào wǒ Lǐ Míng gē!’",
                    "translation": "Li Ming smiled and said to David: 'I am 22 years old this year, exactly two years older than you; you should call me Brother Li Ming!'"
                },
                {
                    "target": "随着城市绿化建设的推进，今年的公园绿地面积比去年增加了整整百分之十五。",
                    "reading": "Suízhe chéngshì lǜhuà jiànshè de tuījìn, jīntiān de gōngyuán lǜdì miànjī bǐ qùnián zēngjiā le zhěngzhěng bǎifēnzhīshíwǔ.",
                    "translation": "With the promotion of urban greening, this year's park green space area increased by a full 15% compared to last year."
                },
                {
                    "target": "学校新校区的图书馆馆藏资源比老校区丰富得多，自习座位也多了一千多个。",
                    "reading": "Xuéxiào xīn xiàoqū de túshūguǎn guǎncáng zīyuán bǐ lǎo xiàoqū fēngfù de duō, zìxí zuòwèi yě duō le yìqiān duō gè.",
                    "translation": "The new campus library's collection is much richer than the old campus, and study seats are over a thousand more."
                }
            ],
            "mnemonics": [
                "Quantity goes BEHIND the Adj: 比我大三岁 (older by 3 years), 比它贵得多 (way more expensive)!"
            ],
            "culturalNotes": [
                "In Chinese social culture, age differences of even one or two years establish respectful familial kinship terms like 哥 (gē), 姐 (jiě), 弟 (dì), 妹 (mèi)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘哥哥比弟弟大三岁’时，正确的汉语语序是：",
                    "options": [
                        "哥哥比弟弟三岁大",
                        "哥哥比弟弟大三岁 (Gēge bǐ dìdi dà sān suì — A 比 B + Adj + Quantity)",
                        "哥哥大比弟弟三岁"
                    ],
                    "answerIndex": 1,
                    "explanation": "Quantity differences must follow the adjective: 大三岁."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘这套公寓比那套宽敞得多’中，‘得多’表达的语义是：",
                    "options": [
                        "差异微小",
                        "差异幅度非常大 (Huge differential gap: much more)",
                        "价格便宜"
                    ],
                    "answerIndex": 1,
                    "explanation": "得多 expresses a vast degree of difference."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子正确表达了‘精确数量差额’？",
                    "options": [
                        "这台笔记本电脑比那台便宜八百块钱 (Zhè tái bǐjìběn diànnǎo bǐ nà tái piányi bābǎi kuài qián)",
                        "这台电脑八百块比那台便宜",
                        "这台电脑比那台很便宜八百块"
                    ],
                    "answerIndex": 0,
                    "explanation": "便宜八百块钱 correctly places the quantity complement after the adjective."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'much more / way more' (得多):",
                    "acceptedAnswers": [
                        "得多",
                        "deduo",
                        "de duō",
                        "de duō",
                        "Deduo",
                        "déduō",
                        "de duo"
                    ],
                    "explanation": "得多 (de duō) means 'much more / to a great extent'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u15-l3": {
        "id": "zh-u15-l3",
        "unit": "zh-u15",
        "level": "B1",
        "objective": "Master the crucial semantic contrast between objective shortfall with 没有 (A 没有 B 那么/这么 + Adj: A is not as ... as B) and defensive rebuttal with 不比 (A 不比 B + Adj: A is no less ... than B / just as good as B).",
        "prerequisites": [
            "zh-u15-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u15-l2"
            ]
        },
        "presentation": {
            "explanation": "比较句的否定形式是汉语中极具深度的语用考点！「没有」和「不比」表达截然不同的语用意图！\n\n1. 客观劣势与不及比较：**A 没有 B + (这么/那么) + 形容词**\n- 表达 **A 在某种性质上不如 B，未达到 B 的程度（Inferior / Not as ... as B）**：\n  - 今天**没有**昨天**冷**。(Today is not as cold as yesterday. *[昨天更冷]*)\n  - 我的汉语**没有**他**那么流利**。(My Chinese is not as fluent as his.)\n\n2. 辩驳与抗衡比较：**A 不比 B + 形容词**\n- 表达 **A 并不比 B 差，两者相当甚至 A 更好（No less than / Just as ... as B）**，常用于反驳对方的偏见：\n  - 谁说国产手机不好？国产手机的质量**不比**进口的**差**！(Domestic phone quality is no worse than imported!)\n  - 我**不比**他**笨**，只要努力我也能考满分！(I'm no less smart than him!).",
            "examples": [
                {
                    "target": "虽然大卫学中文的时间没有李明那么长，但他每天练习口语的时间一点儿也不比李明少。",
                    "reading": "Suīrán Dàwèi xué zhōngwén de shíjiān méiyǒu Lǐ Míng nàme cháng, dàn tā měitiān liànxí kǒuyǔ de shíjiān yìdiǎnr yě bù bǐ Lǐ Míng shǎo.",
                    "translation": "Although David hasn't studied Chinese as long as Li Ming, his daily speaking practice time is not a bit less than Li Ming's."
                },
                {
                    "target": "张老师耐心地说：‘别灰心，这次模拟测试虽然没有考出理想成绩，但你的基础并不比别人差。’",
                    "reading": "Zhāng lǎoshī nàixīn de shuō: ‘Bié huīxīn, zhè cì mónǐ cèshì suīrán méiyǒu kǎochū lǐxiǎng chéngjì, dàn nǐ de jīchǔ bìng bù bǐ biérén chà.’",
                    "translation": "Teacher Zhang said patiently: 'Don't lose heart; although this mock test didn't yield ideal results, your foundation is by no means worse than others.'"
                },
                {
                    "target": "南方冬天的室外气温虽然没有北方那么低，但因为没有暖气，体感温度常常感觉格外湿冷。",
                    "reading": "Nánfāng dōngtiān de shìwài qìwēn suīrán méiyǒu běifāng nàme dī, dàn yīnwèi méiyǒu nuǎnqì, tǐgǎn wēndù chángcháng gǎnjué gèwài shīlěng.",
                    "translation": "Although outdoor temperatures in southern winter are not as low as the north, without heating the apparent temperature often feels especially damp and cold."
                }
            ],
            "mnemonics": [
                "没有 = Not as ... as (A is lower); 不比 = No less than / Just as good (Rebutting inequality)!"
            ],
            "culturalNotes": [
                "Debates over northern dry cold with central heating vs. southern humidity without heating (南方冷还是北方冷) are a lively cultural pastime among Chinese netizens every winter."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘我的英文水平不如他那么高’这一客观事实时，应当使用：",
                    "options": [
                        "我的英文没有他那么好 (A 没有 B 那么 Adj: Objective inferiority)",
                        "我的英文不比他好",
                        "我的英文比他不好"
                    ],
                    "answerIndex": 0,
                    "explanation": "没有...那么... expresses the objective fact that A does not reach B's level."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘谁说女生学不好理工科？我们女生的动手能力一点儿也不比男生差！’中，‘不比...差’表达了：",
                    "options": [
                        "承认女生不如男生",
                        "坚决反驳偏见，表明女生能力与男生一样强甚至更强 (Strong rebuttal asserting equal or superior capability)",
                        "女生不需要学理工科"
                    ],
                    "answerIndex": 1,
                    "explanation": "不比...差 is a classic rhetorical rebuttal asserting equality and capability."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "对比 A‘今天没有昨天热’与 B‘今天不比昨天热’，下列阐述完全正确的是：",
                    "options": [
                        "A 表达今天不如昨天热（昨天更热）；B 常用于反驳别人说今天很热的观点 (A: objective not as hot; B: rebuttal not hotter)",
                        "两者完全相同",
                        "B 表达今天比昨天热得多"
                    ],
                    "answerIndex": 0,
                    "explanation": "没有 is descriptive non-equality; 不比 is argumentative rebuttal."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'not worse than / no less than' (不比差):",
                    "acceptedAnswers": [
                        "不比差",
                        "bubicha",
                        "bùbǐchà",
                        "Bùbǐchà",
                        "Bubicha"
                    ],
                    "explanation": "不比差 (bù bǐ chà) means 'not worse than / no less inferior'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u15-l4": {
        "id": "zh-u15-l4",
        "unit": "zh-u15",
        "level": "B1",
        "objective": "Master the qualitative inferiority construction with 不如 (A 不如 B + [Adj/VP]: A is inferior to B / better to do B) and the equality construction with 一样 (A 跟/和 B 一样 + Adj).",
        "prerequisites": [
            "zh-u15-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u15-l3"
            ]
        },
        "presentation": {
            "explanation": "除了「比」和「没有」，汉语还有两个极具典雅度与书面口语通用的核心比较句式——「不如」与「一样」！\n\n1. 典雅不及比较：**A 不如 B + (形容词 / 动词短语)**\n- 表达 **A 在品质、效果、选择或能力上不及 B（A is inferior to B / Not as good as B）**：\n  - 口头说说**不如**实际去做。(Talking is inferior to actual action.)\n  - 这家饭馆的菜味道**不如**那家正宗。(Dishes here are not as authentic as that restaurant.)\n- 建议搭配：**与其 A，不如 B** (Rather than A, better to B).\n\n2. 等同等量比较：**A 跟 / 和 B 一样 + (形容词)**\n- 表达 **A 与 B 在某种属性上完全相同 (A is as ... as B)**：\n  - 大卫的汉语说得**跟中国人一样流利**。(David speaks Chinese as fluently as a native Chinese.)\n  - 否定式：**A 跟 B 不一样 (A is different from B)**。",
            "examples": [
                {
                    "target": "中国有句古老的格言叫‘百闻不如一见’，只有亲自来到长城脚下，才能真正领略它的宏伟壮观。",
                    "reading": "Zhōngguó yǒu jù gǔlǎo de gèyán jiào ‘bǎi wén bù rú yí jiàn’, zhǐyǒu qīnzì láidào Chángchéng jiǎoxià, cái néng zhēnzhèng lǐnglüè tā de hóngwěi zhuàngguān.",
                    "translation": "There is an ancient Chinese proverb 'Seeing once is better than hearing a hundred times'; only by coming in person to the foot of the Great Wall can one truly appreciate its grandeur."
                },
                {
                    "target": "与其在宿舍里整天看手机浪费时间，不如去图书馆借几本经典学术专著充实自己。",
                    "reading": "Yǔqí zài sùshè lǐ zhěngtiān kàn shǒujī làngfèi shíjiān, bùrú qù túshūguǎn jiè jǐ běn jīngdiǎn xuéshù zhuānzhù chōngshí zìjǐ.",
                    "translation": "Rather than wasting time looking at phones all day in the dorm, it's better to borrow classic academic monographs in the library to enrich oneself."
                },
                {
                    "target": "经过多年的刻苦练习，大卫写出来的毛笔书法跟中国书法家写的一样工整苍劲！",
                    "reading": "Jīngguò duō nián de kèkǔ liànxí, Dàwèi xiě chūlai de máobǐ shūfǎ gēn Zhōngguó shūfǎjiā xiě de yíyàng gōngzhěng cāngjìn!",
                    "translation": "After years of diligent practice, David's brush calligraphy is as neat and vigorous as that written by Chinese calligraphers!"
                }
            ],
            "mnemonics": [
                "Proverb Power: 百闻不如一见 (Hearing 100 times < Seeing once)! Equality: A 跟 B 一样 (As same as B)!"
            ],
            "culturalNotes": [
                "The immortal idiom «百闻不如一见» (bǎi wén bù rú yí jiàn) from the Han Dynasty Book of Han highlights the empirical cultural value of firsthand experience."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘这件大衣的保暖效果与羽绒服完全一样好’时，应当使用：",
                    "options": [
                        "这件大衣跟羽绒服一样暖和 (A 跟 B 一样 + Adj)",
                        "这件大衣不如羽绒服",
                        "这件大衣比羽绒服一样"
                    ],
                    "answerIndex": 0,
                    "explanation": "A 跟 B 一样 + Adj is the standard equality comparative pattern."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "成语‘百闻不如一见’的核心寓意是：",
                    "options": [
                        "听别人讲一百遍比看一次更清楚",
                        "亲眼所见比听闻一百次更有说服力 (Seeing once in person is far superior to hearing a hundred times)",
                        "不需要去实地参观"
                    ],
                    "answerIndex": 1,
                    "explanation": "百闻不如一见 highlights firsthand empirical observation over secondhand hearsay."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "表达‘与其在宿舍空想，不如立即采取行动’时，‘不如’的语用功能是：",
                    "options": [
                        "表示被动受损",
                        "表示动作完成",
                        "表示提出更优建议与质性对比 (Offers a superior recommendation & qualitative contrast)"
                    ],
                    "answerIndex": 2,
                    "explanation": "不如 provides a superior alternative and qualitative preference."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 6-character Hanzi proverb for 'seeing once is better than hearing a hundred times' (百闻不如一见):",
                    "acceptedAnswers": [
                        "百闻不如一见",
                        "baiwenburuyijian",
                        "bǎiwénbùrúyíjiàn",
                        "Bǎiwénbùrúyíjiàn",
                        "Baiwenburuyijian",
                        "百聞不如一見"
                    ],
                    "explanation": "百闻不如一见 (bǎiwén bùrú yí jiàn) means 'seeing once is better than hearing a hundred times'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u15-l5": {
        "id": "zh-u15-l5",
        "unit": "zh-u15",
        "level": "B1",
        "objective": "Synthesize all comparative systems (比, 数量差额, 没有, 不比, 不如, and 跟...一样) into rich academic assessments, travel evaluations, and spontaneous debates.",
        "prerequisites": [
            "zh-u15-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u15-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第十五单元的所有比较语法网络，形成全景对比矩阵，并应用于学术论文评审、高新科技发展评估与城市生活品质对比！\n\n1. 汉语比较系统大一统矩阵 (Master Comparative System Matrix):\n| 句式类型 | 核心语法结构 | 语用意图与典型例句 |\n| :--- | :--- | :--- |\n| **差比肯定** | A 比 B + 形容词 + (数量补语) | 明确差异：高铁比普通列车**快两倍** |\n| **差比加深** | A 比 B + 更 / 还 + 形容词 | 程度递进：哥哥很高，爸爸比哥哥**更高** |\n| **不及否定** | A 没有 B + (那么) + 形容词 | 客观差距：我的口语没有他**那么流利** |\n| **辩驳抗衡** | A 不比 B + 形容词 | 拒绝认输：国产新能源汽车**不比**进口的**差** |\n| **质性优选** | A 不如 B / 与其 A 不如 B | 典雅评测：百闻**不如**一见；与其空想**不如**实干 |\n| **等同等量** | A 跟 / 和 B 一样 + 形容词 | 完全对等：他的汉语说得**跟中国人一样**好 |\n\n2. 第十五单元实战交际演练 (Unit 15 Synthesis Dialogue):\n- 跨国学者评估新能源与传统能源：环保指标对比、科技创新评价、文化交流体悟。",
            "examples": [
                {
                    "target": "大卫：李明，你觉得中国的新能源汽车技术怎么样？ 李明：如今中国制造的新能源汽车在电池续航和智能驾驶方面，不仅比传统燃油车环保得多，而且科技感一点儿也不比国际顶级品牌差！",
                    "reading": "Dàwèi: Lǐ Míng, nǐ juéde Zhōngguó de xīnnéngyuán qìchē jìshù zěnmeyàng? Lǐ Míng: Rújīn Zhōngguó zhìzào de xīnnéngyuán qìchē zài diànchí xùháng hé zhìnéng jiàshǐ fāngmiàn, bùjǐn bǐ chuántǒng rányóuchē huánbǎo de duō, érqiě kējìgǎn yìdiǎnr yě bù bǐ guójì dǐngjí pǐnpái chà!",
                    "translation": "David: Li Ming, what do you think of China's new energy vehicle technology? Li Ming: Today new energy vehicles made in China, in battery range and autonomous driving, are not only much greener than traditional fuel cars, but also in technology are by no means inferior to top global brands!"
                },
                {
                    "target": "张教授点评道：‘这篇研究报告的调研数据比上一版详实得多，论证逻辑也跟国际前沿学术标准一样严谨！’",
                    "reading": "Zhāng jiàoshòu diǎnpíng dào: ‘Zhè piān yánjiū bàogào de diàoyán shùjù bǐ shàng yí bǎn xiángshí de duō, lùnzhèng luóji yě gēn guójì qiányán xuéshù biāozhǔn yíyàng yánjǐn!’",
                    "translation": "Professor Zhang reviewed: 'The survey data in this research report is much more detailed than the previous draft, and argumentative logic is just as rigorous as international cutting-edge standards!'"
                },
                {
                    "target": "亲自体验过中国的高铁与移动支付后，外国留学生们深有感触地说：‘百闻不如一见，实际生活的便捷程度比我们想象的还要令人惊叹！’",
                    "reading": "Qīnzì tǐyàn guò Zhōngguó de gāotiě yǔ yídòng zhīfù hòu, wàiguó liúxuéshēngmen shēnyǒu gǎncù de shuō: ‘Bǎiwén bùrú yíjiàn, shíjì shēnghuó de biànjié chéngdù bǐ wǒmen xiǎngxiàng de hái yào lìngrén jīngtàn!’",
                    "translation": "After experiencing China's high-speed rail and mobile payments firsthand, international students said with deep feeling: 'Seeing once is better than hearing a hundred times; the convenience of daily life is even more astonishing than we imagined!'"
                }
            ],
            "mnemonics": [
                "The 6 Comparative Pillars: 比 (Diff), 数量 (Precision), 没有 (Inferior), 不比 (Rebuttal), 不如 (Preference), 一样 (Equality)!"
            ],
            "culturalNotes": [
                "High-speed rail, mobile payment, e-commerce, and bike-sharing are celebrated colloquially in contemporary China as modern everyday conveniences (现代生活新便利)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘这本新教材的内容比旧版丰富得多，图文编排也跟国际期刊一样精美’整合了哪两种比较句式？",
                    "options": [
                        "带数量程度补语的比字句 + 跟...一样等同比较句 (比 with degree complement + 跟...一样 equality)",
                        "被字句 + 把字句",
                        "疑问句 + 祈使句"
                    ],
                    "answerIndex": 0,
                    "explanation": "比...丰富得多 is a differential comparison with complement; 跟...一样精美 is an equality comparison."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在学术报告总结中表达‘与其单纯罗列数据，不如深入剖析背后的社会文化机制’，选用‘与其...不如...’体现了：",
                    "options": [
                        "两者都放弃",
                        "对深入剖析社会文化机制这一方案的鲜明肯定与优选 (Clear affirmation and preference for in-depth socio-cultural analysis)",
                        "数据完全错误"
                    ],
                    "answerIndex": 1,
                    "explanation": "与其 A 不如 B expresses strong preference for option B over option A."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子在现代汉语比较语法的运用上是完全自然且符合规范的？",
                    "options": [
                        "他比我非常高",
                        "这本小说比那本精彩得多，一点儿也不比名著逊色 (Zhè běn xiǎoshuō bǐ nà běn jīngcǎi de duō, yìdiǎnr yě bù bǐ míngzhù xùnsè)",
                        "他跟我不一样大三岁"
                    ],
                    "answerIndex": 1,
                    "explanation": "比...精彩得多 and 不比...逊色 represent flawless comparative grammar."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'as rigorous as / equally rigorous' (一样严谨):",
                    "acceptedAnswers": [
                        "一样严谨",
                        "yiyangyanjin",
                        "yíyàng yánjǐn",
                        "Yíyàng yánjǐn",
                        "Yiyangyanjin",
                        "一樣嚴謹"
                    ],
                    "explanation": "一样严谨 (yíyàng yánjǐn) means 'equally rigorous / as rigorous as'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u16-l1": {
        "id": "zh-u16-l1",
        "unit": "zh-u16",
        "level": "B1",
        "objective": "Master the Mandarin system of localizers (方位词: 上/下/前/后/左/右/里/外/东/南/西/北 with suffixes 边/面/头) and the rule that common nouns must combine with localizers to function as locatives (桌子上, 房间里).",
        "prerequisites": [
            "zh-u15-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u15-l5"
            ]
        },
        "presentation": {
            "explanation": "在现代汉语中，空间方位的表达有着严密的**方位词形态系统（Locative Morphology）**！普通名词不能直接作处所状语，必须与方位词结合！\n\n1. 核心方位词结构系统 (The Localizer System):\n- **单音节方位词**：上、下、前、后、左、右、里、外、东、南、西、北、中、旁。\n- **双音节复合方位词**：\n  - **+ 边 (biān)**：左边、右边、前边、后边、东边、西边、旁边。\n  - **+ 面 (miàn)**：上面、下面、前面、后面、里面、外面、对面。\n  - **+ 头 (tou)**：里头、外头、上头、下头、前头、后头。\n\n2. 处所转化黄金法则 (Noun to Locative Conversion):\n- **普通名词 (Desk/Room) 不能直接表示处所，必须加上方位词转化**：\n  - 错误：*书在桌子。 → 正确：书在**桌子上 / 桌子上面**。\n  - 错误：*他在房间。 → 正确：他在**房间里 / 房间里面**。\n- **地名/国名自带处所属性，严禁加「里」**：\n  - 正确：我在北京 / 我在中国 (*绝不说 *在北京里 / *在中国里)。",
            "examples": [
                {
                    "target": "图书馆的东边是一栋新建的现代化学术报告厅，南面则是一片幽静的竹林。",
                    "reading": "Túshūguǎn de dōngbian shì yí dòng xīn jiàn de xiàndài huà xuéshù bàogàotīng, nánmiàn zé shì yí piàn yōujìng de zhúlín.",
                    "translation": "To the east of the library is a newly built modern academic lecture hall, while to the south is a quiet bamboo forest."
                },
                {
                    "target": "王老师微笑着对大家说：‘请同学们把刚借到的中文参考书整齐地放在书桌上。’",
                    "reading": "Wáng lǎoshī wēixiào zhe duì dàjiā shuō: ‘Qǐng tóngxuémen bǎ gāng jiè dào de zhōngwén cānkǎoshū zhěngqí de fàng zài shūzhuō shang.’",
                    "translation": "Teacher Wang said with a smile to everyone: 'Please place the newly borrowed Chinese reference books neatly on the study desk.'"
                },
                {
                    "target": "学校留学生公寓楼的对面开了一家非常地道的四川风味餐馆。",
                    "reading": "Xuéxiào liúxuéshēng gōngyùlóu de duìmiàn kāi le yì jiā fēicháng dìdao de Sìchuān fēngwèi cānguǎn.",
                    "translation": "Opposite the international student apartment building, an exceptionally authentic Sichuan cuisine restaurant opened."
                }
            ],
            "mnemonics": [
                "Ordinary Noun + 方位词 = Place (桌子上, 房间里)! Place names are ALREADY places: Never add 里 to Beijing/China!"
            ],
            "culturalNotes": [
                "Traditional Chinese spatial orientation often uses cardinal directions (东南西北) rather than egocentric left/right, reflecting ancient urban grid planning like that of historical Beijing."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "关于处所表达，下列哪个选项在语法上是完全错误的？",
                    "options": [
                        "我在中国里 (*Wrong: Country/city names cannot take 里)",
                        "我在中国",
                        "书在桌子上"
                    ],
                    "answerIndex": 0,
                    "explanation": "Country/city proper names like 中国 or 北京 are already locatives and cannot take 里."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "普通名词‘书包’若要作地点表示‘在书包内部’，规范形式是：",
                    "options": [
                        "在书包",
                        "在书包里 / 书包里面 (Noun + 方位词: locative phrase)",
                        "书包在"
                    ],
                    "answerIndex": 1,
                    "explanation": "Ordinary nouns must combine with 里/里面 to express internal location."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子在方位词与处所搭配上完全正确？",
                    "options": [
                        "大卫在北京里学中文",
                        "大卫在图书馆的东边等李明 (Dàwèi zài túshūguǎn de dōngbian děng Lǐ Míng)",
                        "大卫在教室等李明里"
                    ],
                    "answerIndex": 1,
                    "explanation": "图书馆的东边 correctly forms a locative expression with directional suffix 边."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'opposite side / across from' (对面):",
                    "acceptedAnswers": [
                        "对面",
                        "duimian",
                        "duìmiàn",
                        "Duìmiàn",
                        "Duimian",
                        "對面"
                    ],
                    "explanation": "对面 (duìmiàn) means 'opposite side / across from'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u16-l2": {
        "id": "zh-u16-l2",
        "unit": "zh-u16",
        "level": "B1",
        "objective": "Master the static existential formulas with 有 (Existence/Quantity: 处所 + 有 + 不确定事物) and 是 (Unique/Full Identity: 处所 + 是 + 确定事物), distinguishing their semantic contrasts.",
        "prerequisites": [
            "zh-u16-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u16-l1"
            ]
        },
        "presentation": {
            "explanation": "「存现句」是汉语中**以「处所词」作为句首主语，描述某处存在、出现或消失某人某物**的独特句型！\n\n1. 处所 + 有 + 人/物 (Existence & Enumeration):\n- 表示 **某处「存在有某人某物」（侧重有无与数量，宾语为不确定对象）**：\n  - 桌子上有**三本书和一台电脑**。(There are 3 books and a laptop on the desk.)\n  - 院子里有**两棵古老的大槐树**。(There are 2 ancient pagoda trees in the courtyard.)\n\n2. 处所 + 是 + 人/物 (Exclusivity & Full Surface Identity):\n- 表示 **某处「满是 / 到处是 / 唯一存在的是」（侧重整体判断与充满）**：\n  - 桌子上**是一堆凌乱的文件**。(The desk is [covered with] a pile of messy files.)\n  - 窗外**是一片绿油油的麦田**。(Outside the window is an expansive green wheat field.)\n\n3. 对比总结：\n- **「有」**：表存在其一/部分（山上**有**树 [山上可能还有草、花、亭子]）。\n- **「是」**：表放眼望去全都是/满目皆是（山上**全都是**树 [满山都是森林]）。",
            "examples": [
                {
                    "target": "李明的书房非常雅致，靠窗的书架上摆满了各种中外名著，桌子上有一套精美的中国紫砂茶具。",
                    "reading": "Lǐ Míng de shūfáng fēicháng yǎzhi, kào chuāng de shūjià shang bǎimǎn le gè zhǒng zhōngwài míngzhù, zhuōzi shang yǒu yí tào jīngměi de Zhōngguó zǐshā chájù.",
                    "translation": "Li Ming's study is very elegant; the bookshelf by the window is filled with various Chinese and foreign classics, and on the desk is a set of exquisite Chinese Yixing clay tea ware."
                },
                {
                    "target": "推开阳台的窗户向外眺望，楼下是一片生机勃勃的花园，不远处是一座现代化的体育馆。",
                    "reading": "Tuīkāi yángtái de chuānghu xiàng wài tiàowàng, lóuxià shì yí piàn shēngjībóbó de huāyuán, bù yuǎn chù shì yí zuò xiàndàihuà de tǐyùguǎn.",
                    "translation": "Pushing open the balcony window to gaze outside, below the building is a vibrant garden, and not far away is a modern sports stadium."
                },
                {
                    "target": "校园中心广场的中央是一座标志性的现代雕塑，周围有许多来自世界各地的留学生在用中文亲切交流。",
                    "reading": "Xiàoyuán zhōngxīn guǎngchǎng de zhōngyāng shì yí zuò biāozhìxìng de xiàndài diāosù, zhōuwéi yǒu xǔduō láizì shìjiè gèdì de liúxuéshēng zài yòng zhōngwén qīnqiè jiāoliú.",
                    "translation": "In the center of the campus central plaza is an iconic modern sculpture, and around it are many international students chatting warmly in Chinese."
                }
            ],
            "mnemonics": [
                "有 = There exists some (part/quantity)! 是 = The whole view IS filled with (all/identity)!"
            ],
            "culturalNotes": [
                "Yixing zisha clay teapots (宜兴紫砂壶) from Jiangsu province represent traditional Chinese tea connoisseurship, prized for absorbing tea aromas over decades of use."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘黑板上写满了汉字’如果用‘是’改写表达‘放眼看去全都是汉字’，规范形式是：",
                    "options": [
                        "黑板上是汉字 (Locative + 是 + Noun: expressing whole surface composition)",
                        "黑板有汉字是",
                        "汉字是黑板"
                    ],
                    "answerIndex": 0,
                    "explanation": "处所 + 是 + 名词 indicates that the whole space or surface is filled with that entity."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "对比‘桌子上有几本书’与‘桌子上全都是书’，后者的语用意图是：",
                    "options": [
                        "说明桌子很贵",
                        "强调桌子表面被书本完全占满覆盖 (Emphasizes that the table surface is entirely covered by books)",
                        "桌子上没有书"
                    ],
                    "answerIndex": 1,
                    "explanation": "是/全都是 conveys that the surface is completely occupied."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "存现句的一个最重要句法特征是：",
                    "options": [
                        "句首主语通常是表示空间方位的处所词 (Sentence subject is typically a locative phrase)",
                        "不能有动词",
                        "宾语必须是代词"
                    ],
                    "answerIndex": 0,
                    "explanation": "In existential sentences, the subject is typically a locative phrase indicating the location of existence."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'to be full of / filled with' (摆满):",
                    "acceptedAnswers": [
                        "摆满",
                        "baiman",
                        "bǎimǎn",
                        "Bǎimǎn",
                        "Baiman",
                        "擺滿"
                    ],
                    "explanation": "摆满 (bǎimǎn) means 'to be completely arranged / filled with'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u16-l3": {
        "id": "zh-u16-l3",
        "unit": "zh-u16",
        "level": "B1",
        "objective": "Master posture/state existential sentences (处所 + 动词 + 着/了 + 不确定名词: 门上贴着春联, 墙上挂着画, 门口站着一位老师) denoting ongoing continuous state resulting from an action.",
        "prerequisites": [
            "zh-u16-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u16-l2"
            ]
        },
        "presentation": {
            "explanation": "动态姿态与状态存现句是汉语中描写**场景、环境与人物静态风貌**最生动优美的句法结构！\n\n1. 核心状态存现公式 (Posture/State Existential Formula):\n- **处所主语 + 姿态/放置动词 + 着 / 了 + 数量短语 + 名词**\n- **四大类高频姿态动词**：\n  - **人体姿态**：站着 (standing)、坐着 (sitting)、躺着 (lying)、蹲着 (squatting)。\n  - **悬挂附着**：挂着 (hanging)、贴着 (pasted/sticking)、印着 (printed)。\n  - **放置陈列**：放着 (placed)、摆着 (arranged/displayed)、停着 (parked)。\n  - **盛装容纳**：盛着 (contained)、装着 (packed with)、种着 (planted with)。\n\n2. 宾语的不确定性法则 (Indefiniteness Law):\n- 存现句中的宾语**必须是不确定的新信息（带数量词）**：\n  - 正确：门口站着**一位老教授**。(An old professor is standing at the door.)\n  - 错误：*门口站着张教授 (已知特指人物不能作此存现宾语，应说：张教授在门口站着)。",
            "examples": [
                {
                    "target": "春节期间，家家户户的大门上都贴着红彤彤的春联和吉祥的福字。",
                    "reading": "Chūnjié qījiān, jiājiā-hùhù de dàmén shang dōu tiē zhe hóngtōngtōng de chūnlián hé jíxiáng de fúzì.",
                    "translation": "During Spring Festival, bright red Spring Festival couplets and auspicious 'Fu' characters are pasted on every household's front door."
                },
                {
                    "target": "学术报告厅的前排端坐着数位德高望重的老教授，后排站着许多前来旁听的青年学者。",
                    "reading": "Xuéshù bàogàotīng de qiánpái duānzuò zhe shù wèi dégāowàngzhòng de lǎo jiàoshòu, hòupái zhàn zhe xǔduō qiánlái pángtīng de qīngnián xuézhě.",
                    "translation": "In the front row of the lecture hall sit several highly respected senior professors, while in the back stand many young scholars who came to audit."
                },
                {
                    "target": "宽敞明亮的会议室墙壁上挂着一幅气势恢宏的中国传统水墨山水画。",
                    "reading": "Kuānchang míngliàng de huìyìshì qiángbì shang guà zhe yì fú qìshì huīhóng de Zhōngguó chuántǒng shuǐmò shānshuǐhuà.",
                    "translation": "On the wall of the spacious and bright meeting room hangs a magnificent traditional Chinese ink wash landscape painting."
                }
            ],
            "mnemonics": [
                "Place + Verb + 着 + New Object! 门上贴着春联 (Couplets pasted on door), 墙上挂着画 (Painting hanging on wall)!"
            ],
            "culturalNotes": [
                "Spring Festival couplets (春联 chūnlián) and inverted 'Fu' characters (福倒了 = 福到了, blessing has arrived) are traditional poetic decorations pasted during Chinese Lunar New Year."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘会议室里坐着几十位来自各国的语言学者’中，‘坐着’表示的语法意义是：",
                    "options": [
                        "动作正在剧烈进行",
                        "动作完成后持续保持的静态姿势 (Continuous state/posture resulting from sitting down)",
                        "动作尚未发生"
                    ],
                    "answerIndex": 1,
                    "explanation": "动词+着 in existential sentences denotes a sustained static posture resulting from an action."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "下列哪一个存现句在宾语的‘不确定性’上完全符合现代汉语语法规范？",
                    "options": [
                        "门前停着王老师的车 (*Wrong: definite specific vehicle)",
                        "门前停着一辆崭新的红色自行车 (Mén qián tíng zhe yí liàng zhǎnxīn de hóngsè zìxíngchē — Indefinite object with numeral-classifier)",
                        "门前停着我爸爸"
                    ],
                    "answerIndex": 1,
                    "explanation": "Existential sentences require an indefinite noun phrase (一辆崭新的红色自行车) as the post-verbal object."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于动态存现句‘墙上挂着一幅中国画’，下列分析正确的是：",
                    "options": [
                        "‘中国画’是主语",
                        "‘墙上’是句首处所主语，‘一幅中国画’是存现宾语 (墙上 is locative subject, 一幅中国画 is existential object)",
                        "‘挂着’是形容词"
                    ],
                    "answerIndex": 1,
                    "explanation": "墙上 functions as the locative topic/subject, and 一幅中国画 is the post-verbal indefinite existential patient."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'hanging / is hanging' (挂着):",
                    "acceptedAnswers": [
                        "挂着",
                        "guazhe",
                        "guàzhe",
                        "Guàzhe",
                        "Guazhe",
                        "掛著",
                        "挂著"
                    ],
                    "explanation": "挂着 (guàzhe) means 'hanging / is hanging'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u16-l4": {
        "id": "zh-u16-l4",
        "unit": "zh-u16",
        "level": "B1",
        "objective": "Master dynamic emergence and disappearance existential sentences (处所 + 动词 + 了/方向补语 + 不确定名词: 前面来了一个人, 班里转走了两个学生, 天空飘起了雪花).",
        "prerequisites": [
            "zh-u16-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u16-l3"
            ]
        },
        "presentation": {
            "explanation": "除了表达静态存在，存现句还可以生动描绘事物的**突然出现（Emergence）与消失离去（Disappearance）**！\n\n1. 出现存现句 (Emergence / Appearance Formula):\n- **处所主语 + 趋向动词 / 出现动词 + 了/着 + 数量短语 + 名词**\n- 例子：\n  - 前面**走来了一位外国留学生**。(Ahead walked over a foreign student.)\n  - 天空中**飘起了纷纷扬扬的雪花**。(Snowflakes began fluttering in the sky.)\n  - 隔壁**搬来了一家新邻居**。(A new family of neighbors moved in next door.)\n\n2. 消失存现句 (Disappearance Formula):\n- **处所主语 + 消失/离去动词 + 了 + 数量短语 + 名词**\n- 例子：\n  - 树上**掉下来一片金黄的银杏叶**。(A golden ginkgo leaf fell from the tree.)\n  - 我们班昨天**转走了两名交换生**。(Two exchange students transferred out from our class.)\n  - 兜里**掉了一百块钱**。(A hundred yuan dropped out of the pocket.)",
            "examples": [
                {
                    "target": "初冬的清晨，校园林荫道的前方迎面走来了一位精神矍铄的老教授。",
                    "reading": "Chūdōng de qīngchén, xiàoyuán línyīndào de qiánfāng yíngmiàn zǒu lái le yí wèi jīngshénjuéshuò de lǎo jiàoshòu.",
                    "translation": "On an early winter morning, an energetic senior professor walked toward us along the campus tree-lined avenue."
                },
                {
                    "target": "一阵瑟瑟的秋风吹过，枝头纷纷扬扬地飘落下了无数片金黄色的银杏树叶。",
                    "reading": "Yí zhèn sèsè de qiūfēng chuī guò, zhītóu fēnfēnyángyáng de piāoluò xià le wúshù piàn jīnhuángsè de yínxìng shùyè.",
                    "translation": "As a gust of rustling autumn wind blew past, countless golden ginkgo leaves fluttered down from the branches."
                },
                {
                    "target": "下课铃声刚刚响起，走廊里顿时涌出了许许多多欢声笑语的大学生。",
                    "reading": "Xiàkè língshēng gānggāng xiǎngqǐ, zǒuláng lǐ dùnshí yǒngchū le xǔxǔ-duōduō huānshēngxiàoyǔ de dàxuéshēng.",
                    "translation": "Just as the dismissal bell rang, countless laughing university students immediately poured out into the hallway."
                }
            ],
            "mnemonics": [
                "Appearance: 来了一位老师 (A teacher came); Disappearance: 走了一位客人 (A guest left), 掉了一片叶子 (A leaf fell)!"
            ],
            "culturalNotes": [
                "Ginkgo trees (银杏树 yínxìngshù), known as living fossils, turn dazzling gold in late autumn, making university campuses across China famous scenic destinations."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘楼下搬来了一位新邻居’表达了哪种存现语法语义？",
                    "options": [
                        "静态存在",
                        "动态出现 (Dynamic emergence / arrival of new entity)",
                        "辩驳比较"
                    ],
                    "answerIndex": 1,
                    "explanation": "搬来了一位新邻居 expresses the dynamic arrival/emergence of a new entity."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "表达‘树上掉下来了一个苹果’时，动词‘掉下来’充当的是：",
                    "options": [
                        "带复合趋向补语的消失/下落动词 (Disappearance/descent verb with compound directional complement)",
                        "形容词修饰语",
                        "祈使语气助词"
                    ],
                    "answerIndex": 0,
                    "explanation": "掉下来 combines verb 掉 with directional complement 下来 denoting descent/appearance."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子属于典型的‘动态出现存现句’？",
                    "options": [
                        "昨天下午我买了一本书",
                        "他在教室里看书",
                        "操场前方跑过来了一队晨练的大学生 (Cǎochǎng qiánfāng pǎo guòlai le yí duì chénliàn de dàxuéshēng)"
                    ],
                    "answerIndex": 2,
                    "explanation": "操场前方 (place) + 跑过来 (directional verb) + 了 + 一队晨练的大学生 (indefinite new subject) is a textbook dynamic appearance existential sentence."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'fluttered down / fell down' (飘落下):",
                    "acceptedAnswers": [
                        "飘落下",
                        "piaoluoxia",
                        "piāoluòxià",
                        "Piāoluòxià",
                        "Piaoluoxia",
                        "飄落下"
                    ],
                    "explanation": "飘落下 (piāoluòxià) means 'fluttered down / drifted down'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u16-l5": {
        "id": "zh-u16-l5",
        "unit": "zh-u16",
        "level": "B1",
        "objective": "Synthesize static (有/是), posture (V+着/了), and dynamic (出现/消失) existential constructions into rich spatial descriptions and campus tour dialogues.",
        "prerequisites": [
            "zh-u16-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u16-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第十六单元的所有存现句式，构建完整的空间叙事与场景描写体系！\n\n1. 存现句全景分类与选用总表 (Master Existential Architecture):\n| 存现类型 | 结构公式 | 核心功能与经典例句 |\n| :--- | :--- | :--- |\n| **静态存在 (有)** | 处所 + 有 + 数量 + 名词 | 表达有无与部分存在：桌子上有三本书 |\n| **全貌判断 (是)** | 处所 + 是 + 名词 | 表达满目皆是与整体属性：山上全都是绿树 |\n| **静态姿态 (着/了)** | 处所 + 姿态动词 + 着 + 名词 | 描写持续静态风貌：门口站着一位老师；墙上挂着国画 |\n| **动态出现 (来)** | 处所 + 趋向动词 + 了/来 + 名词 | 描写新事物入场：前面走来了一个留学生 |\n| **动态消失 (去)** | 处所 + 离去动词 + 了/去 + 名词 | 描写事物离场掉落：树上掉下来一片金黄的银杏叶 |\n\n2. 第十六单元实战交际演练 (Unit 16 Synthesis Narrative):\n- 漫步北京大学未名湖畔：博雅塔下碧波荡漾，长椅上坐着读书学子，湖边走来各国游人。",
            "examples": [
                {
                    "target": "大卫漫步在大学未名湖畔：湖的东岸矗立着著名的博雅塔，湖边的石椅上坐着几位正在安静晨读的同学，树林深处传来了一阵阵清脆悦耳的鸟鸣声。",
                    "reading": "Dàwèi mànbù zài dàxué Wèimíng Hú pàn: Hú de dōng'àn chùlì zhe zhùmíng de Bóyǎ Tǎ, húbiān de shíyǐ shang zuò zhe jǐ wèi zhèngzài ānjìng chéndú de tóngxué, shùlín shēnchù chuánlái le yízhènzhèn qīngcuì yuè'ěr de niǎomíngshēng.",
                    "translation": "David strolled along the bank of the university's Weiming Lake: on the east bank of the lake stood the famous Boya Pagoda, on the stone benches by the lake sat several students quietly morning reading, and from deep in the woods came bursts of crisp, melodious birdsong."
                },
                {
                    "target": "推开这间中国传统书画工作室的大门，迎面是一面古色古香的屏风，长案上整齐地摆放着文房四宝，墙壁上悬挂着历代名家字画。",
                    "reading": "Tuīkāi zhè jiān Zhōngguó chuántǒng shūhuà gōngzuòshì de dàmén, yíngmiàn shì yí miàn gǔsègǔxiāng de píngfēng, cháng'àn shang zhěngqí de bǎifàng zhe wénfángsìbǎo, qiángbì shang xuánguà zhe lìdài míngjiā zìhuà.",
                    "translation": "Pushing open the doors of this traditional Chinese calligraphy studio, facing you is an antique screen, on the long table are neatly arranged the Four Treasures of the Study, and on the walls hang calligraphy and paintings by famous masters of past dynasties."
                },
                {
                    "target": "正当大家热烈讨论时，门外突然走进来了一位国际知名的汉学大师，全场顿时响起了热烈的掌声。",
                    "reading": "Zhèngdāng dàjiā rèliè tǎolùn shí, ménwài tūrán zǒu jìnlái le yí wèi guójì zhìmíng de hànxué dàshī, quánchǎng dùnshí xiǎngqǐ le rèliè de zhǎngshēng.",
                    "translation": "Just as everyone was discussing heatedly, an internationally renowned master of Sinology suddenly walked in through the door, and warm applause immediately resonated throughout the hall."
                }
            ],
            "mnemonics": [
                "Existential Master: Place leads the way! 有 (exists), 是 (fills), 着 (posture), 来了 (enters), 去了 (departs)!"
            ],
            "culturalNotes": [
                "The 'Four Treasures of the Study' (文房四宝 wénfángsìbǎo: 笔 brush, 墨 ink, 纸 paper, 砚 inkstone) embody the pinnacle of traditional Chinese scholarly aesthetics and literati culture."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘树林深处传来了一阵清脆的鸟鸣声’属于：",
                    "options": [
                        "动态出现存现句 (Emergence existential sentence: Place + 传来 + 了 + Sound)",
                        "比较句",
                        "被字句"
                    ],
                    "answerIndex": 0,
                    "explanation": "处所 (树林深处) + 出现动词 (传来) + 了 + 不确定宾语 (鸟鸣声) is a dynamic appearance existential construction."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在古典园林场景描写中，将‘古色古香的案几上陈列着文房四宝’与‘园林池塘里游着几尾金鱼’结合，展现了存现句在什么语境下的修辞魅力？",
                    "options": [
                        "吵架辩论",
                        "空间全景与静态意境描写 (Spatial panorama & evocative environmental description)",
                        "数学计算"
                    ],
                    "answerIndex": 1,
                    "explanation": "Existential sentences are standard literary tools for rich spatial panoramas and immersive environmental aesthetics."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于现代汉语存现句体系，下列哪一项总括最为准确？",
                    "options": [
                        "存现句必须使用‘被’字",
                        "存现句以处所为句首起点，涵盖存在(有/是)、姿态(着)与动态显隐(来/去)三大维度 (Existential sentences take locative origin, spanning existence, posture, and dynamic emergence/loss)",
                        "存现句只能用于书面语"
                    ],
                    "answerIndex": 1,
                    "explanation": "Existential sentences use locative-initial structure across existence (有/是), posture (着), and dynamic transition (来/去)."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi idiom for 'Four Treasures of the Study' (文房四宝):",
                    "acceptedAnswers": [
                        "文房四宝",
                        "wenfangsibao",
                        "wénfángsìbǎo",
                        "Wénfángsìbǎo",
                        "Wenfangsibao",
                        "文房四寶"
                    ],
                    "explanation": "文房四宝 (wénfángsìbǎo) means 'the Four Treasures of the Study (brush, ink, paper, inkstone)'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u17-l1": {
        "id": "zh-u17-l1",
        "unit": "zh-u17",
        "level": "B2",
        "objective": "Master the sufficient condition pattern 只要 (zhǐyào)... 就 (jiù)... (As long as [condition], then [result will naturally follow]), contrasting it with simple hypothetical conditionals (如果...就...).",
        "prerequisites": [
            "zh-u16-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u16-l5"
            ]
        },
        "presentation": {
            "explanation": "「只要……就……」是汉语中表达**充分条件（Sufficient Condition）**最经典的关联词句式！\n\n1. 核心充分条件公式 (Sufficient Condition Formula):\n- **只要 + 充分条件 (A) ，(主语) + 就 + 产生的结果 (B)**\n- 语义内涵：**A 是导致 B 发生的充足条件**——只要满足了条件 A，无论其他因素如何，结果 B 就必然产生！\n- 典型例句：\n  - **只要**你坚持每天练习听力，中文水平**就**一定能显著提高。(As long as you insist on daily listening practice, your Chinese level will definitely improve significantly.)\n  - **只要**明天不下雨，我们**就**去香山爬山看红叶。(As long as it doesn't rain tomorrow, we will go climb Fragrant Hills to see red leaves.)\n\n2. 语用对比：「只要...就」 vs. 「如果...就」\n- **如果...就**：纯假设（If... then...，可能发生也可能不发生）。\n- **只要...就**：强调条件的充足有效性（Whenever/As long as... then naturally...）。",
            "examples": [
                {
                    "target": "王教授勉励青年学子说：‘科学探索的道路虽然充满坎坷，但只要大家保持求真务实的态度，就一定能够取得突破性成果！’",
                    "reading": "Wáng jiàoshòu miǎnlì qīngnián xuézǐ shuō: ‘Kēxué tànsuǒ de dàolù suīrán chōngmǎn kǎnkě, dàn zhǐyào dàjiā bǎochí qiúzhēn wùshí de tàidù, jiù yídìng nénggòu qǔdé tūpòxìng chéngguǒ!’",
                    "translation": "Professor Wang encouraged the young scholars saying: 'Although the path of scientific exploration is full of bumps, as long as everyone maintains an attitude of seeking truth and pragmatism, you will definitely achieve breakthrough results!'"
                },
                {
                    "target": "大卫自信地对同伴说：‘只要我们提前做好充足的学术答辩准备，明天的评审会就绝不会感到慌张。’",
                    "reading": "Dàwèi zìxìn de duì tóngbàn shuō: ‘Zhǐyào wǒmen tíqián zuò hǎo chōngzú de xuéshù dábbiàn zhǔnbèi, míngtiān de píngshěnhuì jiù jué bú huì gǎndào huāngzhāng.’",
                    "translation": "David said confidently to his peer: 'As long as we make adequate defense preparation in advance, we will by no means feel flustered in tomorrow's review.'"
                },
                {
                    "target": "无论遇到什么跨文化沟通障碍，只要双方本着相互尊重与真诚理解的原则，就总能找到完美的解决方案。",
                    "reading": "Wúlùn yù dào shénme kuàwénhuà gōutōng zhàng'ài, zhǐyào shuāngfāng běnzhe xiānghù zūnzhòng yǔ zhēnchéng lǐjiě de yuánzé, jiù zǒng néng zhǎodào wánměi de jiějué fāng'àn.",
                    "translation": "No matter what intercultural communication barrier is encountered, as long as both sides adhere to mutual respect and sincere understanding, a perfect solution can always be found."
                }
            ],
            "mnemonics": [
                "只要 (Sufficient Spark) + 就 (Natural Flame)! As long as A happens, B will surely follow!"
            ],
            "culturalNotes": [
                "Fragrant Hills (香山 Xiāngshān) in western Beijing is celebrated across China for its fiery red smoke tree leaves (香山红叶) each autumn."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘只要明天天气晴朗，我们全家就去郊外野餐’中，‘只要...就...’表达的逻辑关系是：",
                    "options": [
                        "让步转折",
                        "充分条件关系 (Sufficient condition relation)",
                        "因果倒装"
                    ],
                    "answerIndex": 1,
                    "explanation": "只要...就 establishes a sufficient condition relationship."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "下列哪组关联词能够准确填充句子‘______你愿意付出持之以恒的努力，______一定能掌握高阶汉语语法’？",
                    "options": [
                        "只有……才……",
                        "只要……就…… (Zhǐyào... jiù... — As long as... then...)",
                        "虽然……但是……"
                    ],
                    "answerIndex": 1,
                    "explanation": "只要...就 emphasizes that diligent effort is a sufficient condition for mastering grammar."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于‘只要...就...’句式的语法搭配，下列哪一项完全正确？",
                    "options": [
                        "‘只要’必须与‘才’连用",
                        "‘只要’引导充分条件，后项常与副词‘就/便’搭配呼应 (只要 introduces sufficient condition, paired with 就/便)",
                        "‘只要’后面必须是否定句"
                    ],
                    "answerIndex": 1,
                    "explanation": "只要 pairs with 就 (or 便) to introduce a sufficient condition."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi conjunction for 'as long as' (只要):",
                    "acceptedAnswers": [
                        "只要",
                        "zhiyao",
                        "zhǐyào",
                        "Zhǐyào",
                        "Zhiyao"
                    ],
                    "explanation": "只要 (zhǐyào) means 'as long as / provided that'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u17-l2": {
        "id": "zh-u17-l2",
        "unit": "zh-u17",
        "level": "B2",
        "objective": "Master the necessary/sole condition pattern 只有 (zhǐyǒu)... 才 (cái)... (Only if [indispensable condition], then [can result occur]), contrasting its strict exclusivity with 只要...就.",
        "prerequisites": [
            "zh-u17-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u17-l1"
            ]
        },
        "presentation": {
            "explanation": "「只有……才……」是现代汉语中表达**唯一必要条件（Necessary / Indispensable Condition）**的核心句式！\n\n1. 核心必要条件公式 (Necessary Condition Formula):\n- **只有 + 唯一必要条件 (A) ，(主语) + 才 + 产生的结果 (B)**\n- 语义内涵：**A 是实现 B 的不可或缺的唯一门槛**——如果不满足条件 A，结果 B 绝对不可能发生（没有 A 就没有 B）！\n- 典型例句：\n  - **只有**通过严格的资格审查，**才**能正式参加全国研究生入学考试。(Only by passing strict qualification screening can one sit for the national postgraduate exam.)\n  - **只有**深入了解中华优秀传统文化，**才**能真正领会中国古典诗词的深邃意境。(Only by deeply understanding traditional culture can one truly grasp the profound artistic realm of classical poetry.)\n\n2. 终极逻辑对决：**「只要...就」 vs. 「只有...才」**\n- **只要 A 就 B (Sufficient)**：有 A 就够了（A 充分，可能有其他途径）。\n- **只有 A 才 B (Necessary)**：非 A 不可（A 是唯一必要通道，没有 A 就绝无 B）！",
            "examples": [
                {
                    "target": "张教授严肃而亲切地对研究生们说：‘科学研究没有捷径可走，只有脚踏实地深入田野调查，才能得出经得起历史检验的真实结论。’",
                    "reading": "Zhāng jiàoshòu yánsù ér qīnqiè de duì yánjiūshēngmen shuō: ‘Kēxué yánjiū méiyǒu jiéjìng kě zǒu, zhǐyǒu jiǎotàshídì shēnrù tiányě diàochá, cái néng déchū jīngdeqǐ lìshǐ jiǎnyàn de zhēnshí jiélùn.’",
                    "translation": "Professor Zhang said seriously and warmly to postgraduates: 'There are no shortcuts in scientific research; only by grounding ourselves in thorough fieldwork can we reach truthful conclusions that stand the test of history.'"
                },
                {
                    "target": "在跨国学术研讨会上，主持人总结道：‘只有全球各国携手并肩、通力合作，我们才能有效应对气候变化与生态环境危机。’",
                    "reading": "Zài kuàguó xuéshù yántǎohuì shang, zhǔchírén zǒngjié dào: ‘Zhǐyǒu quánqiú gèguó xiéshǒu bìngjiān, tōnglì hézuò, wǒmen cái néng yǒuxiào yìngduì qìhòu biànhuà yǔ shēngtài huánjìng wēijī.’",
                    "translation": "At the international academic seminar, the host summarized: 'Only if countries worldwide join hands and cooperate fully can we effectively tackle climate change and ecological crises.'"
                },
                {
                    "target": "大卫深有感触地写下日记：‘只有亲身融入中国老百姓的市井生活，才能真正听懂这片土地上鲜活生动的市井乡音与文化温度。’",
                    "reading": "Dàwèi shēnyǒu gǎncù de xièxià rìjì: ‘Zhǐyǒu qīnshēn róngrù Zhōngguó lǎobǎixìng de shìjǐng shēnghuó, cái néng zhēnzhèng tīngdǒng zhè piàn tǔdì shang xiānhuó shēngdòng de shìjǐng xiāngyīn yǔ wénhuà wēndù.’",
                    "translation": "David wrote in his diary with deep emotion: 'Only by immersing myself in the daily street life of ordinary Chinese people can I truly comprehend the vivid vernacular accents and cultural warmth of this land.'"
                }
            ],
            "mnemonics": [
                "只有 (Only This Key) + 才 (Unlocks The Gate)! Without A, B is impossible!"
            ],
            "culturalNotes": [
                "The classical phrase «脚踏实地» (jiǎotà-shídì, feet planted firmly on solid ground) from Song Dynasty Neo-Confucian philosophy embodies the Chinese virtue of rigorous conscientiousness."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "表达‘年满十八周岁是考取驾照的唯一法定前提’时，最精准有力的句式是：",
                    "options": [
                        "只要年满十八周岁就考取驾照",
                        "只有年满十八周岁才能考取驾照 (Zhǐyǒu... cái... — Necessary legal prerequisite)",
                        "虽然年满十八周岁但是考取驾照"
                    ],
                    "answerIndex": 1,
                    "explanation": "只有...才 marks the indispensable legal age requirement."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘科学探索中，只有不怕失败的人，才能登上科学的最高峰’突出了条件的：",
                    "options": [
                        "任意性",
                        "唯一必要性与不可或缺性 (Indispensable necessity)",
                        "偶然性"
                    ],
                    "answerIndex": 1,
                    "explanation": "只有...才 underscores that perseverance through failure is the indispensable condition for summiting scientific peaks."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "对比 A‘只要学就能学会’与 B‘只有学才能学会’，下列分析正确的是：",
                    "options": [
                        "A 强调学习是充分条件（学了就能会）；B 强调学习是唯一必要途径（不学绝不会）(A: sufficient condition; B: indispensable necessity)",
                        "两者逻辑完全一致",
                        "B 是错误的病句"
                    ],
                    "answerIndex": 0,
                    "explanation": "只要...就 indicates sufficiency; 只有...才 indicates indispensable necessity."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character idiom for 'feet planted firmly on solid ground / pragmatic and down-to-earth' (脚踏实地):",
                    "acceptedAnswers": [
                        "脚踏实地",
                        "jiaotashidi",
                        "jiǎotàshídì",
                        "Jiǎotàshídì",
                        "Jiaotashidi",
                        "腳踏實地"
                    ],
                    "explanation": "脚踏实地 (jiǎotà-shídì) means 'down-to-earth / conscientious and realistic'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u17-l3": {
        "id": "zh-u17-l3",
        "unit": "zh-u17",
        "level": "B2",
        "objective": "Master the unconditional conditional constructions with 无论 (wúlùn) / 不管 (bùguǎn) / 哪怕 (nǎpà)... 都 / 也... (No matter what / regardless of condition, the result remains unchanged).",
        "prerequisites": [
            "zh-u17-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u17-l2"
            ]
        },
        "presentation": {
            "explanation": "「无论 / 不管……都 / 也……」是汉语中表达**无条件（Unconditional / Invariable Clause）**的最高阶关联句式！\n\n1. 核心无条件公式 (Unconditional Formula):\n- **无论 / 不管 + [疑问代词 (什么/谁/怎么/哪儿) / 正反选择 (A还是B) / 肯定否定 (A不A)] ，主语 + 都 / 也 + 恒定结果**\n\n2. 引导条件的固定三种形态 (3 Types of Invariable Conditions):\n- **疑问代词型**：无论**什么**困难 / 无论**谁**来 / 无论**走哪条路**，我们**都**要准时到达！\n- **正反选择型**：无论**晴天还是雨天**，晨跑锻炼**都**从不间断。\n- **肯否并列型**：不管**大家同意不同意**，这项学术规定**都**必须严格遵守。\n\n3. 铁律法则：**「无论/不管」从句中绝不能放确定的单一条件**（绝不说 *无论下雨我都去，必须说 无论下不下雨我都去）！",
            "examples": [
                {
                    "target": "无论前方的科研道路多么坎坷崎岖，探索真理的科研工作者们都绝不会轻易放弃心中的崇高理想。",
                    "reading": "Wúlùn qiánfāng de kēyán dàolù duōme kǎnkě qīqū, tànsuǒ zhēnlǐ de kēyán gōngzuòzhěmen dōu jué bú huì qīngyì fàngqì xīnzhōng de chónggāo lǐxiǎng.",
                    "translation": "No matter how rough and rugged the scientific road ahead is, scientific workers exploring truth will never easily abandon the lofty ideals in their hearts."
                },
                {
                    "target": "不管工作多么繁忙，李明每周六上午都会雷打不动地去国家博物馆担任义务中英文双语讲解员。",
                    "reading": "Bùguǎn gōngzuò duōme fánmáng, Lǐ Míng měi zhōuliù shàngwǔ dōu huì léidǎbúdòng de qù guójiā bówùguǎn dānrèn yiwù zhōng-yīngwén shuāngyǔ jiǎngjiěyuán.",
                    "translation": "No matter how busy work is, Li Ming unshakeably goes to the National Museum every Saturday morning to serve as a volunteer bilingual docent."
                },
                {
                    "target": "现代社会瞬息万变，但无论外部时代环境如何变迁，中华民族崇尚诚信与孝悌的优良传统美德都历久弥新。",
                    "reading": "Xiàndài shèhuì shùnxīwànbiàn, dàn wúlùn wàibù shídài huánjìng rúhé biànqiān, Zhōnghuá mínzú chóngshàng chéngxìn yǔ xiàotì de yōuliáng chuántǒng měidé dōu lìjiǔmíxīn.",
                    "translation": "Modern society changes in an instant, but no matter how the external era shifts, the Chinese nation's fine traditional virtues of valuing honesty and filial piety remain evergreen over time."
                }
            ],
            "mnemonics": [
                "无论/不管 MUST have options (什么/谁/A不A/A还是B) + 都/也 (Always Unchanged)!"
            ],
            "culturalNotes": [
                "The idiom «雷打不动» (léidǎ-búdòng, unshakeable even by thunder) vividly conveys unbreakable commitment and discipline in Chinese culture."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "关于‘无论’后面的从句内容，下列哪个句子符合现代汉语语法规范？",
                    "options": [
                        "无论明天下雨，我都去爬山 (*Wrong: single definite condition)",
                        "无论明天下不下雨，我都去爬山 (Wúlùn míngtiān xià bu xià yǔ, wǒ dōu qù páshān — Alternative A-not-A condition)",
                        "无论去北京，我都坐高铁"
                    ],
                    "answerIndex": 1,
                    "explanation": "无论 requires an interrogative or alternative condition (e.g. 下不下雨), never a single definite assertion."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘不管遇到多大的阻力，团队都必须按期完成数字化归档工程’中，‘不管...都...’的作用是：",
                    "options": [
                        "排除一切干扰条件，强调结果的绝对确定性 (Excludes all conditional variance, stressing invariable outcome)",
                        "提出假设前提",
                        "表示转折退步"
                    ],
                    "answerIndex": 0,
                    "explanation": "不管...都 eliminates conditional variations to assert an invariable certainty."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个关联词句式在语序与连词呼应上完全正确？",
                    "options": [
                        "虽然困难，但是都克服",
                        "只有付出努力，就能考出好成绩",
                        "无论大家有什么不同意见，都可以在学术讨论会上畅所欲言 (Wúlùn dàjiā yǒu shénme bùtóng yìjiàn, dōu kěyǐ zài xuéshù tǎolùnhuì shang chàngsuǒyùyán)"
                    ],
                    "answerIndex": 2,
                    "explanation": "无论 + 疑问词 (什么) + 都 correctly forms an unconditional sentence."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for 'unshakeable / come rain or shine' (雷打不动):",
                    "acceptedAnswers": [
                        "雷打不动",
                        "leidabudong",
                        "léidǎbúdòng",
                        "Léidǎbúdòng",
                        "Leidabudong",
                        "雷打不動"
                    ],
                    "explanation": "雷打不动 (léidǎ-búdòng) means 'unshakeable / determined come rain or shine'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u17-l4": {
        "id": "zh-u17-l4",
        "unit": "zh-u17",
        "level": "B2",
        "objective": "Master the exclusive conditional 除非 (chúfēi)... 才... (Only if / Unless... then...) and 除非... 否则/不然... (Unless..., otherwise... will occur).",
        "prerequisites": [
            "zh-u17-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u17-l3"
            ]
        },
        "presentation": {
            "explanation": "「除非」是汉语中表达**排除其他一切可能、指定唯一拯救条件（Exclusive Condition）**的高阶关联词！\n\n1. 两种核心「除非」句型系统 (Two Core 除非 Patterns):\n- **正向唯一授权式：除非 + 唯一条件 (A) ，才 + 允许发生的结果 (B)**\n  - **除非**有院长的亲笔签名，**才**能借阅这些绝版珍贵善本古籍。(Only with the dean's signature can one borrow these out-of-print rare ancient books.)\n  - 语义等同于：只有……才……（语气更庄重决绝）。\n\n- **反向警示排除式：除非 + 救赎条件 (A) ，否则 / 不然 + 必然招致的恶果 (B)**\n  - 我们必须立即出发，**除非**你想在早高峰时段被彻底堵在跨江大桥上。(We must leave immediately, unless you want to get completely stuck on the bridge during rush hour.)\n  - **除非**全体成员齐心协力，**否则**这项跨国科研项目绝不可能在年底前按时交付！",
            "examples": [
                {
                    "target": "图书馆古籍特藏部规定：‘除非持有国家级科研项目的正式介绍信，外来学者才被允许查阅这批明清古籍孤本。’",
                    "reading": "Túshūguǎn gǔjí tècángbù guīdìng: ‘Chúfēi chíyǒu guójiājí kēyán xiàngmù de zhèngshì jièshàoxìn, wàilái xuézhě cái bèi yǔnxǔ cháyuè zhè pī Míng-Qīng gǔjí gūběn.’",
                    "translation": "The rare ancient books division stipulates: 'Unless holding an official letter of introduction from a national research project, visiting scholars are not permitted to consult this batch of Ming-Qing unique editions.'"
                },
                {
                    "target": "张总工程师神情严肃地对工程队强调：‘除非我们严格按照最高抗震标准施工，否则绝不能盲目加快工期进度！’",
                    "reading": "Zhāng zǒnggōngchéngshī shénqíng yánsù de duì gōngchéngduì qiángdiào: ‘Chúfēi wǒmen yángé ànzhào zuìgāo kàngzhèn biāozhǔn shīgōng, fǒuzé jué bù néng mángmù jiākuài gōngqī jìndù!’",
                    "translation": "Chief Engineer Zhang emphasized seriously: 'Unless we construct strictly according to the highest seismic standards, we must never blindly accelerate the construction schedule!'"
                },
                {
                    "target": "大卫对李明说：‘今天晚上我一定要把这篇中文学术论文写完，除非电脑突然死机，不然我绝不离开图书馆！’",
                    "reading": "Dàwèi duì Lǐ Míng shuō: ‘Jīntiān wǎnshang wǒ yídìng yào bǎ zhè piān zhōngwén xuéshù lùnwén xiěwán, chúfēi diànnǎo tūrán sǐjī, bùrán wǒ jué bù líkāi túshūguǎn!’",
                    "translation": "David said to Li Ming: 'Tonight I must finish writing this Chinese academic paper; unless my computer suddenly crashes, otherwise I will never leave the library!'"
                }
            ],
            "mnemonics": [
                "除非 A 才 B = Exclusive Permission! 除非 A 否则 B = Do A or Face Disaster B!"
            ],
            "culturalNotes": [
                "China's protection and restoration of ancient rare books (古籍善本保护与修复) is regarded as a national cultural preservation mission spanning millennia of paper heritage."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘除非你亲自向王教授当面请教，否则很难彻底弄懂这个古汉语语法难题’中，‘否则’引导的分句表达的是：",
                    "options": [
                        "如果不满足‘亲自请教’这一前提将必然导致的消极后果 (Negative consequence if condition is unmet)",
                        "积极的结果",
                        "无所谓的选择"
                    ],
                    "answerIndex": 0,
                    "explanation": "否则/不然 introduces the undesirable consequence that will inevitably occur if the sole condition is not fulfilled."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "将‘只有通过体能测试，才能加入校篮球队’用‘除非’句式改写，保持原意且规范的是：",
                    "options": [
                        "除非通过体能测试，才能加入校篮球队 (Chúfēi... cái... — Exclusive condition)",
                        "除非通过体能测试，就能加入校篮球队",
                        "虽然通过体能测试，但是加入校篮球队"
                    ],
                    "answerIndex": 0,
                    "explanation": "除非 A 才能 B is the authoritative equivalent of 只有 A 才能 B."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于‘除非……否则……’句式的逻辑搭配，下列哪一项完全正确？",
                    "options": [
                        "‘除非’提出阻止坏结果发生的唯一条件，‘否则’引出若不满足条件所产生的后果 (除非 poses sole preventive condition; 否则 introduces consequent result)",
                        "‘否则’后面必须跟‘才’",
                        "‘除非’后面只能跟名词"
                    ],
                    "answerIndex": 0,
                    "explanation": "除非...否则... is the canonical Chinese 'unless... otherwise...' structure."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi conjunction for 'otherwise / or else' (否则):",
                    "acceptedAnswers": [
                        "否则",
                        "fouze",
                        "fǒuzé",
                        "Fǒuzé",
                        "Fouze",
                        "否則"
                    ],
                    "explanation": "否则 (fǒuzé) means 'otherwise / or else'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u17-l5": {
        "id": "zh-u17-l5",
        "unit": "zh-u17",
        "level": "B2",
        "objective": "Synthesize all conditional systems (只要...就, 只有...才, 无论/不管...都, 除非...才/否则) into sophisticated policy debates, academic defenses, and cross-cultural negotiation discourse.",
        "prerequisites": [
            "zh-u17-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u17-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第十七单元的所有条件复句逻辑网络，建立完整的条件论辩思维矩阵，并应用于高层次学术辩论、国际商务谈判与外交政策论述！\n\n1. 汉语条件复句全景四维矩阵 (Master Conditional Matrix):\n| 条件逻辑分类 | 核心关联词公式 | 逻辑哲学内涵与典型范式 |\n| :--- | :--- | :--- |\n| **充分条件** | **只要 A ，就 B** | 充足保证：只要努力，就能成功 |\n| **必要条件** | **只有 A ，才 B** | 唯一门槛：只有脚踏实地，才能铸就辉煌 |\n| **无条件** | **无论 / 不管 X ，都 / 也 Y** | 恒定不移：无论风雨多大，都勇往直前 |\n| **排除警示** | **除非 A ，才 B / 否则 C** | 决绝底线：除非全员合作，否则无法按期完工 |\n\n2. 第十七单元实战交际演练 (Unit 17 Synthesis Debate):\n- 跨国人工智能伦理学术论坛：技术普惠的充分条件、数据安全治理的必要门槛、伦理合规的无条件底线。",
            "examples": [
                {
                    "target": "大会发言人深刻论述道：‘在人工智能高速发展的时代，只要我们坚持以人为本的科技向善理念，人工智能就能成为造福全人类的强大工具；但只有建立起健全严密的国际监管法律框架，才能从根本上防范未知安全风险！’",
                    "reading": "Dàhuì fāyánrén shēnkè lùnshù dào: ‘Zài réngōngzhìnéng gāosù fāzhǎn de shídài, zhǐyào wǒmen jiānchí yǐrénwéiběn de kējì xiàngshàn lǐniàn, réngōngzhìnéng jiù néng chéngwéi zàofú quán rénlèi de qiángdà gōngjù; dàn zhǐyǒu jiànlì qǐ jiànquán yánmì de guójì jiānguǎn fǎlǜ kuàngjià, cái néng cóng gēnběn shang fángfàn wèizhī ānquán fēngxiǎn!’",
                    "translation": "The conference spokesperson elaborated deeply: 'In this era of rapid AI advancement, as long as we adhere to human-centered tech-for-good ideals, AI can become a powerful tool benefiting all humanity; but only by establishing a sound international regulatory legal framework can we fundamentally guard against unknown security risks!'"
                },
                {
                    "target": "张教授在答辩总结中指出：‘无论技术形态如何迭代演进，科研伦理道德底线都必须毫不动摇地坚守；除非所有算法研发都公开透明，否则公众的知情权与信任感将面临严峻挑战。’",
                    "reading": "Zhāng jiàoshòu zài dábbiàn zǒngjié zhōng zhǐchū: ‘Wúlùn jìshù xíngtài rúhé diédài yǎnjìn, kēyán lúnlǐ dàodé dǐxiàn dōu bìxū háobù dòngyáo de jiānshǒu; chúfēi suǒyǒu suànfǎ yánfā dōu gōngkāi tòumíng, fǒuzé gōngzhòng de zhīqíngquán yǔ xìnrèngǎn jiāng miànlín yánjùn tiǎozhàn.’",
                    "translation": "Professor Zhang pointed out in the defense summary: 'No matter how technological forms iterate, scientific ethical baselines must be unshakeably defended; unless all algorithm development is open and transparent, public right to know and trust will face grave challenges.'"
                },
                {
                    "target": "大卫在国际辩论赛上总结陈词：‘百闻不如一见，只要大家亲自走进中国的高新科研基地，就一定会被当代中国青年学者的创新活力深深打动！’",
                    "reading": "Dàwèi zài guójì biànlùnsài shang zǒngjié chéncí: ‘Bǎiwén bùrú yíjiàn, zhǐyào dàjiā qīnzì zǒujìn Zhōngguó de gāoxīn kēyán jīdì, jiù yídìng huì bèi dāngdài Zhōngguó qīngnián xuézhě de chuàngxīn huólì shēndù dǎdòng!’",
                    "translation": "David concluded in the international debate: 'Seeing once is better than hearing a hundred times; as long as everyone steps in person into China's high-tech research centers, you will definitely be deeply moved by contemporary Chinese young scholars' innovative vitality!'"
                }
            ],
            "mnemonics": [
                "The 4 Pillars of Logic: 只要...就 (Sufficient), 只有...才 (Necessary), 无论...都 (Invariable), 除非...否则 (Exclusive)!"
            ],
            "culturalNotes": [
                "The concept of «科技向善» (Tech for Good) has become a defining guiding philosophy in modern Chinese technological innovation and AI governance debates."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘只有具备严谨的治学态度，才能在学术探索中攀登科学高峰’运用了哪种条件复句？",
                    "options": [
                        "必要条件复句 (Necessary condition complex sentence)",
                        "无条件复句",
                        "转折复句"
                    ],
                    "answerIndex": 0,
                    "explanation": "只有...才 is the defining marker of a necessary condition complex sentence."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在论辩中表达‘不管外部环境发生什么不可预测的变化，我们坚持自主创新的战略定力都绝不会动摇’，选用‘不管...都...’旨在凸显：",
                    "options": [
                        "随时准备放弃",
                        "在任何严峻条件下都保持战略定力的坚不可摧 (Indestructible strategic determination under any condition)",
                        "环境已经非常优越"
                    ],
                    "answerIndex": 1,
                    "explanation": "不管...都 eliminates conditional variations to assert unshakeable strategic resolve."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于条件复句四维体系的逻辑特征，下列哪一项总括完全正确？",
                    "options": [
                        "‘只要’和‘只有’可以无差别混用",
                        "‘除非’只能引导否定从句",
                        "‘只要...就’表充分保证，‘只有...才’表唯一必要门槛，‘无论...都’表全景无条件，‘除非...否则’表排他警示 (Fourfold systemic conditional logic)"
                    ],
                    "answerIndex": 2,
                    "explanation": "This succinctly encapsulates the complete four-dimensional logic of Mandarin conditional sentences."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character phrase for 'tech for good / technology oriented toward human welfare' (科技向善):",
                    "acceptedAnswers": [
                        "科技向善",
                        "kejixiangshan",
                        "kējìxiàngshàn",
                        "Kējìxiàngshàn",
                        "Kejixiangshan",
                        "科技向善"
                    ],
                    "explanation": "科技向善 (kējì xiàngshàn) means 'technology for good'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u18-l1": {
        "id": "zh-u18-l1",
        "unit": "zh-u18",
        "level": "B2",
        "objective": "Master the forward causal pattern 因为 (yīnwèi)... 所以 (suǒyǐ)... and the high-register inverted focal causal pattern 之所以 (zhī suǒyǐ)... 是因为 (shì yīnwèi)... (The reason why X is because Y).",
        "prerequisites": [
            "zh-u17-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u17-l5"
            ]
        },
        "presentation": {
            "explanation": "因果复句是现代汉语中构建严密逻辑推理与学术论证的基石！\n\n1. 顺向因果公式 (Forward Causal Formula):\n- **因为 + 原因分句 (A) ，所以 + 结果分句 (B)**\n- 例子：**因为**最近天气持续晴好，**所以**香山的红叶格外绚丽。(Because weather has been consistently fine, Fragrant Hills' red leaves are especially gorgeous.)\n\n2. 倒装因果焦点公式 (Inverted Focus Causal Formula):\n- **主语 + 之所以 + 结果 (B) ，是因为 + 核心原因 (A)**\n- 语义功能：**先摆出引人注目的既成事实（B），再以强烈的焦点重音揭示其核心内在原因（A）**！\n- 高阶学术例句：\n  - 这项人工智能技术**之所以**能在国际上荣获大奖，**是因为**它在算法效率和数据安全上实现了重大突破。(The reason why this AI technology won an international award is that it achieved major breakthroughs in algorithm efficiency and data security.)\n- 书面语修辞价值：常用于学术论文、政论演讲与深度访谈，极具说服力！",
            "examples": [
                {
                    "target": "中国古代的都城规划之所以普遍采用中轴对称的严整格局，是因为这种空间形态深刻契合了传统礼制思想与秩序观念。",
                    "reading": "Zhōngguó gǔdài de dūchéng guīhuà zhī suǒyǐ pǔbiàn cǎiyòng zhōngzhóu duìchèn de yánzhěng géjú, shì yīnwèi zhè zhǒng kōngjiān xíngtài shēnkè qìhé le chuántǒng lǐzhì sīxiǎng yǔ zhìxù guānniàn.",
                    "translation": "The reason why ancient Chinese capital planning generally adopted a rigorous central axis symmetry is that this spatial form deeply aligned with traditional ritual thought and concepts of order."
                },
                {
                    "target": "大卫的中文演讲之所以能够打动全场评委与听众，是因为他在讲稿中倾注了对中国市井文化的真挚热爱与深入思考。",
                    "reading": "Dàwèi de zhōngwén yǎnjiǎng zhī suǒyǐ nénggòu dǎdòng quánchǎng píngwěi yǔ tīngzhòng, shì yīnwèi tā zài jiǎnggǎo zhōng qīngzhù le duì Zhōngguó shìjǐng wénhuà de zhēnzhì rè'ài yǔ shēnrù sīkǎo.",
                    "translation": "The reason why David's Chinese speech could move all judges and audiences was that he poured sincere love and deep reflection on Chinese vernacular street culture into his text."
                },
                {
                    "target": "因为科研团队在前期开展了大量扎实详尽的文献综述与问卷调查，所以后续的实证数据分析进行得格外顺利高效。",
                    "reading": "Yīnwèi kēyán tuánduì zài qiánqī kāizhǎn le dàliàng zhāshi xiángjìn de wénxiàn zōngshù yǔ wènjuàn diàochá, suǒyǐ hòuxù de shízhèng shùjù fēnxī jìnxíng de gèwài shùnlì gāoxiào.",
                    "translation": "Because the research team conducted a large volume of solid literature reviews and surveys in the preliminary phase, the subsequent empirical data analysis proceeded exceptionally smoothly and efficiently."
                }
            ],
            "mnemonics": [
                "Normal Causal = 因为 Cause, 所以 Result! Inverted Accent = 之所以 Result, 是因为 Deep Cause!"
            ],
            "culturalNotes": [
                "The Beijing Central Axis (北京中轴线), running 7.8 kilometers from the Yongdingmen in the south to the Bell and Drum Towers in the north, was inscribed as a UNESCO World Heritage Site in 2024."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘这部经典纪录片之所以深受国内外观众喜爱，是因为它真实记录了普通人的拼搏故事’中，‘之所以...是因为...’的语用功能是：",
                    "options": [
                        "先引出既成结果，再重点揭示其内在核心原因 (Presents result first, then focuses on core cause)",
                        "表示转折退步",
                        "表示无条件关系"
                    ],
                    "answerIndex": 0,
                    "explanation": "之所以...是因为... inverts the cause-and-effect order to place focal emphasis on the underlying reason."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "将‘因为北京中轴线体现了中国传统礼制与哲学，所以它成功申遗’改写为更具学术论述力量的倒装句是：",
                    "options": [
                        "虽然北京中轴线体现了礼制，但是成功申遗",
                        "北京中轴线之所以能成功申遗，是因为它深刻体现了中国传统礼制与哲学 (Zhī suǒyǐ... shì yīnwèi... — Academic inverted causal focus)",
                        "北京中轴线只要体现礼制就成功申遗"
                    ],
                    "answerIndex": 1,
                    "explanation": "之所以...是因为... provides sophisticated academic rhetorical focus."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于‘之所以……是因为……’的语序结构，下列哪一项完全正确？",
                    "options": [
                        "‘之所以’后接结果事实，‘是因为’后接原因解释 (之所以 follows result, 是因为 follows cause)",
                        "‘之所以’后接原因，‘是因为’后接结果",
                        "两者位置可以随意互换"
                    ],
                    "answerIndex": 0,
                    "explanation": "主语 + 之所以 + 结果，是因为 + 原因."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character conjunction for 'the reason why' (之所以):",
                    "acceptedAnswers": [
                        "之所以",
                        "zhisuoyi",
                        "zhīsuǒyǐ",
                        "Zhīsuǒyǐ",
                        "Zhisuoyi"
                    ],
                    "explanation": "之所以 (zhī suǒyǐ) means 'the reason why'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u18-l2": {
        "id": "zh-u18-l2",
        "unit": "zh-u18",
        "level": "B2",
        "objective": "Master standard and formal concessive-adversative constructions with 虽然 (suīrán) / 尽管 (jǐnguǎn)... 但是 (dànshì) / 然而 (rán'ér) / 却 (què)..., paying special attention to adverbial placement of 却.",
        "prerequisites": [
            "zh-u18-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u18-l1"
            ]
        },
        "presentation": {
            "explanation": "转折与让步复句用于表达**事实之间存在的对立、逆转或出人意料的转折发展**！\n\n1. 核心让步转折公式 (Concessive Adversative Formula):\n- **虽然 / 尽管 + 先承认事实 (A) ，但是 / 可是 / 然而 / 却 + 相反转折结果 (B)**\n- 常用高阶关联词梯队：\n  - **口语常用**：虽然……但是 / 可是……\n  - **书面典雅**：尽管……然而…… (Despite... nevertheless...)\n  - **副词内嵌**：虽然……主语 + **却** + 谓语…… (Note: 却 is an adverb and must be placed AFTER the subject in clause B!).\n\n2. 语序绝对铁律：**「却 (què)」是副词，绝不能置于分句句首！**\n  - 正确：外边虽然很冷，教室里**却非常暖和**。\n  - 错误：*外边虽然很冷，却教室里非常暖和。",
            "examples": [
                {
                    "target": "这本古汉语语法专著虽然卷帙浩繁、论证极其精深，然而语言表达深入浅出、通俗易懂。",
                    "reading": "Zhè běn gǔ hànyǔ yǔfǎ zhuānzhù suīrán juànzhìhàofán, lùnzhèng jíqí jīngshēn, rán'ér yǔyán biǎodá shēnrù-qiǎnchū, tōngsú-yìdǒng.",
                    "translation": "Although this ancient Chinese grammar monograph is voluminous and deeply argued, yet its language is profound yet simple, and easily accessible."
                },
                {
                    "target": "尽管实验条件非常艰苦、经费十分有限，科研团队却凭借着顽强的毅力攻克了关键技术难题。",
                    "reading": "Jǐnguǎn shíyàn tiáojiàn fēicháng jiānkǔ, jīngfèi shífēn yǒuxiàn, kēyán tuánduì què píngjiè zhe wánqiáng de yìlì gōngkè le guānjiàn jìshù nándiǎn.",
                    "translation": "Although experimental conditions were arduous and funds very limited, the scientific team nevertheless overcame key technical dilemmas with tenacious willpower."
                },
                {
                    "target": "大卫虽然来到中国只有短短一年时间，却能够用流利的中文参与高层次的国际文化交流与辩论。",
                    "reading": "Dàwèi suīrán láidào Zhōngguó zhǐyǒu duǎnduǎn yì nián shíjiān, què nénggòu yòng liúlì de zhōngwén cānyù gāocéngcì de guójì wénhuà jiāoliú yǔ biànlùn.",
                    "translation": "Although David has only been in China for a short year, he is nevertheless able to participate in high-level international cultural exchanges and debates in fluent Chinese."
                }
            ],
            "mnemonics": [
                "虽然/尽管 sets the stage; 但是/然而 flips the script! Remember: 却 follows the subject (主语 + 却 + V)!"
            ],
            "culturalNotes": [
                "The idiom «深入浅出» (shēnrù-qiǎnchū, explain deep philosophical concepts in accessible language) is the highest compliment for Chinese scholarly pedagogy."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "关于转折副词‘却’的位置，下列哪个句子在语法语序上完全正确？",
                    "options": [
                        "虽然外面下着大雪，却屋子里很暖和 (*Wrong: 却 before subject)",
                        "虽然外面下着大雪，屋子里却很暖和 (Wūzi lǐ què hěn nuǎnhuo — 却 after subject)",
                        "虽然屋子里却很暖和"
                    ],
                    "answerIndex": 1,
                    "explanation": "却 is an adverb and must be placed after the subject of the second clause (屋子里却...)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "成语‘深入浅出’在学术论著评价中常用于赞誉：",
                    "options": [
                        "书籍篇幅短小",
                        "理论内涵深刻而行文通俗易懂 (Profound theoretical content conveyed in accessible, elegant prose)",
                        "学术内容浅薄"
                    ],
                    "answerIndex": 1,
                    "explanation": "深入浅出 praises the ability to articulate profound truths in clear, accessible language."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "对比‘但是’与‘然而’，‘然而’的语体色彩特征是：",
                    "options": [
                        "多用于口语随便聊天",
                        "多用于正式书面语与学术政论，更显典雅庄重 (Formal written register / scholarly discourse)",
                        "只能用于古代汉语"
                    ],
                    "answerIndex": 1,
                    "explanation": "然而 belongs to the formal, written academic and literary register."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character idiom for 'explaining deep concepts in simple accessible terms' (深入浅出):",
                    "acceptedAnswers": [
                        "深入浅出",
                        "shenruqianchu",
                        "shēnrùqiǎnchū",
                        "Shēnrùqiǎnchū",
                        "Shenruqianchu",
                        "深入淺出"
                    ],
                    "explanation": "深入浅出 (shēnrù-qiǎnchū) means 'profound in thought but simple and accessible in expression'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u18-l3": {
        "id": "zh-u18-l3",
        "unit": "zh-u18",
        "level": "B2",
        "objective": "Master the hypothetical concessive pattern 即使 (jíshǐ) / 哪怕 (nǎpà) / 就算 (jiùsuàn)... 也 (yě)... (Even if [extreme hypothesis], [consequence/resolution still holds]).",
        "prerequisites": [
            "zh-u18-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u18-l2"
            ]
        },
        "presentation": {
            "explanation": "「即使 / 哪怕……也……」是汉语中表达**让步假设（Hypothetical Concession）**的最强句式！\n\n1. 核心假设让步公式 (Hypothetical Concession Formula):\n- **即使 / 哪怕 / 就算 + 极端假设条件 (A) ，(主语) + 也 + 不变的结果或决心 (B)**\n- 语义内涵：**哪怕把条件推向最极端、最不利的假设情况，后项的事实或意志也绝不改变**！\n- 典型例句：\n  - **即使**遇到再大的狂风暴雨，救援队员**也**绝不会停下前进的脚步。(Even if encountering heavy storms, rescuers will still never stop.)\n  - **哪怕**只有百分之一的希望，我们**也**要尽百分之百的努力！(Even if there is only 1% hope, we must still give 100% effort!)\n\n2. 语用对比：「虽然...但是」 vs. 「即使...也」\n- **虽然...但是**：A 是**已经发生的既成事实**（Fact: 虽然很累，但他还是坚持做完了）。\n- **即使...也**：A 是**尚未发生或极端设想的假设**（Hypothesis: 即使很累，我也一定会做完）。",
            "examples": [
                {
                    "target": "老校长在毕业典礼上深情寄语：‘青年学子们，即使未来人生的旅途充满未知与荆棘，你们也一定要永远坚守心中的正义与理想！’",
                    "reading": "Lǎo xiàozhǎng zài bìyè diǎnlǐ shang shēnqíng jìyǔ: ‘Qīngnián xuézǐmen, jíshǐ wèilái rénshēng de lǚtú chōngmǎn wèizhī yǔ jīngjí, nǐmen yě yídìng yào yǒngyuǎn jiānshǒu xīnzhōng de zhèngyì yǔ lǐxiǎng!’",
                    "translation": "The old president warmly imparted at commencement: 'Young scholars, even if the future journey of life is filled with unknowns and thistles, you must forever uphold justice and ideals in your hearts!'"
                },
                {
                    "target": "文物修复专家严肃地说：‘哪怕需要耗费数月甚至数年的心血，我们也要把这卷珍贵的古代受损绢帛完好无损地抢救修复出来。’",
                    "reading": "Wénwù xiūfù zhuānjiā yánsù de shuō: ‘Nǎpà xūyào hàofèi shù yuè shènzhì shù nián de xīnxuè, wǒmen yě yào bǎ zhè juǎn zhēnguì de gǔdài shòusǔn juànbó wánhǎowúsǔn de qiǎngjiù xiūfù chūlai.’",
                    "translation": "Cultural relics restoration experts said solemnly: 'Even if it requires months or years of painstaking effort, we must rescue and restore this precious ancient damaged silk scroll intact.'"
                },
                {
                    "target": "大卫暗下决心：‘在中文学习的道路上，哪怕遇到再难记的汉字和复杂的语法，我也绝不轻言退缩！’",
                    "reading": "Dàwèi ànxià juéxīn: ‘Zài zhōngwén xuéxí de dàolù shang, nǎpà yù dào zài nán jì de hànzì hé fùzá de yǔfǎ, wǒ yě jué bù qīngyán tuìsuō!’",
                    "translation": "David resolved in secret: 'On the road of Chinese learning, even if encountering characters ever so hard to memorize and complex grammar, I will never easily retreat!'"
                }
            ],
            "mnemonics": [
                "即使/哪怕 (Even Extreme If) + 也 (Still Unmoved)! Although = Fact (虽然), Even if = Hypothesis (即使)!"
            ],
            "culturalNotes": [
                "Chinese cultural relics restoration (文物修复) follows the ancient preservation principle of «修旧如旧» (restoring the antique to preserve its authentic historical patina)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘即使明天下大雪，比赛也照常举行’中，‘即使’引导的内容属于：",
                    "options": [
                        "既成事实",
                        "极端假设条件 (Extreme hypothetical condition)",
                        "因果推论"
                    ],
                    "answerIndex": 1,
                    "explanation": "即使 introduces an extreme hypothetical premise."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "下列哪组关联词能够准确表达‘哪怕遇到再多挫折，也绝不放弃’的假设让步语气？",
                    "options": [
                        "哪怕……也…… (Nǎpà... yě... — Hypothetical concession)",
                        "因为……所以……",
                        "只要……就……"
                    ],
                    "answerIndex": 0,
                    "explanation": "哪怕...也 expresses resolute determination in the face of hypothetical extreme hardship."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于‘虽然...但是’与‘即使...也’的区别，下列哪一项完全正确？",
                    "options": [
                        "两者完全相同",
                        "‘即使’只能用于过去时态",
                        "‘虽然’引导既成事实的让步，‘即使’引导极端未然假设的让步 (虽然: factual concession; 即使: hypothetical concession)"
                    ],
                    "answerIndex": 2,
                    "explanation": "虽然 is factual concession; 即使 is hypothetical concession."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi conjunction for 'even if / even though' (即使):",
                    "acceptedAnswers": [
                        "即使",
                        "jishi",
                        "jíshǐ",
                        "Jíshǐ",
                        "Jishi",
                        "即便"
                    ],
                    "explanation": "即使 (jíshǐ) means 'even if / even though'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u18-l4": {
        "id": "zh-u18-l4",
        "unit": "zh-u18",
        "level": "B2",
        "objective": "Master pre-conditioned deduction with 既然 (jìrán)... 就 (jiù)... (Since [established fact], then [naturally deduce course of action]) and causal transitions 因而 (yīn'ér) / 从而 (cóng'ér) (thereby / as a consequence).",
        "prerequisites": [
            "zh-u18-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u18-l3"
            ]
        },
        "presentation": {
            "explanation": "「既然……就……」与「从而 / 因而」是学术推演、政策制定与说服性论述中最高频的推论连词！\n\n1. 既成前提推论句 (Established Premise Deduction):\n- **既然 + 双方已知既成事实 (A) ，(主语) + 就 / 那 / 便 + 逻辑推论或行动建议 (B)**\n- 语义特点：A 是**无需争议的已知前提**，B 是**据此提出的必然推论、决策或建议**！\n- 例子：\n  - **既然**大家都赞同这个科研方案，我们**就**立即着手申请立项！(Since everyone agrees with this research plan, let's immediately proceed with application!)\n  - **既然**你来到了中国，**就**应该多去体验当地的风土人情。(Since you came to China, you should experience local customs.)\n\n2. 结果与目的因果连词：「因而」 vs. 「从而」\n- **因而 (yīn'ér)**：表**逻辑推导出的必然因果结果**（= 因此 / 所以）：\n  - 实验数据存在系统性偏差，**因而**需要重新校准精密仪器。\n- **从而 (cóng'ér)**：表**通过前项动作行为，在后项达成了进一步的积极目的或引申结果**（thereby / thus）：\n  - 优化了算法结构，**从而大幅提升了系统的数据处理效率**。",
            "examples": [
                {
                    "target": "李明真诚地对大卫说：‘既然你对中国古代青铜器文化这么感兴趣，这个周末我就陪你去国家博物馆参观青铜器特展！’",
                    "reading": "Lǐ Míng zhēnchéng de duì Dàwèi shuō: ‘Jìrán nǐ duì Zhōngguó gǔdài qīngtóngqì wénhuà zhème gǎnxìngqù, zhè gè zhōumò wǒ jiù péi nǐ qù Guójiā Bówùguǎn cānguān qīngtóngqì tèzhǎn!’",
                    "translation": "Li Ming said sincerely to David: 'Since you are so interested in ancient Chinese bronze culture, this weekend I will accompany you to the National Museum to visit the bronze exhibition!'"
                },
                {
                    "target": "科研团队通过对海量语料进行深度神经网络训练，从而显著降低了机器翻译在处理复杂句式时的语义误差率。",
                    "reading": "Kēyán tuánduì tōngguò duì hǎiliàng yǔliào jìnxíng shēndù shénjīng wǎngluò xùnliàn, cóng'ér xiǎnzhù jiàngdī le jīqì fānyì zài chǔlǐ fùzá jùshì shí de yǔyì wùchālǜ.",
                    "translation": "By conducting deep neural network training on massive corpora, the research team thereby significantly reduced machine translation semantic error rates in processing complex sentences."
                },
                {
                    "target": "既然我们已经明确了下一阶段的学术研究方向，接下来就必须分秒必争地推进田野调查与文献考证工作。",
                    "reading": "Jìrán wǒmen yǐjīng míngquè le xià yí jiēduàn de xuéshù yánjiū fāngxiàng, jiēxiàlai jiù bìxū fēnmiǎo-bìzhēng de tuījìn tiányě diàochá yǔ wénxiàn kǎozhèng gōngzuò.",
                    "translation": "Since we have clarified the next phase's research direction, next we must advance fieldwork and literature verification without losing a single second."
                }
            ],
            "mnemonics": [
                "既然 = Since Fact is Set, 就 = Do This Next! 从而 = Act on A, Thereby Achieve B!"
            ],
            "culturalNotes": [
                "Chinese ritual bronzes (中国古代青铜器), such as the Houmuwu Ding (后母戊鼎), symbolize political legitimacy, ancestral reverence, and state authority in ancient Shang and Zhou dynasties."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘企业引入了自动化流水线，从而显著降低了生产成本’中，‘从而’的语用功能是：",
                    "options": [
                        "引出通过前述动作而达成的积极结果或目的 (Introduces positive outcome/purpose achieved thereby)",
                        "表示否定假设",
                        "表示转折退步"
                    ],
                    "answerIndex": 0,
                    "explanation": "从而 introduces the positive consequence or outcome resulting from the prior action."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "表达‘已知事实既然成立，那么就应当采取行动’时，最恰当的关联词搭配是：",
                    "options": [
                        "既然……就…… (Jìrán... jiù... — Since established fact, then action)",
                        "虽然……但是……",
                        "哪怕……也……"
                    ],
                    "answerIndex": 0,
                    "explanation": "既然...就 builds on an established premise to recommend a logical course of action."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于‘既然...就’与‘因为...所以’的细微语用差别，下列阐述完全正确的是：",
                    "options": [
                        "两者完全没有区别",
                        "‘既然’后面只能跟疑问句",
                        "‘因为’说明客观原因，‘既然’是基于双方公认的已知事实进行推论与行动提议 (因为 explains objective cause; 既然 deduces proposal from agreed premise)"
                    ],
                    "answerIndex": 2,
                    "explanation": "因为 explains objective cause; 既然 reasons from an acknowledged premise to deduce action."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi conjunction for 'thereby / thus' (从而):",
                    "acceptedAnswers": [
                        "从而",
                        "cong'er",
                        "cóng'ér",
                        "Cóng'ér",
                        "Cong'er",
                        "從而"
                    ],
                    "explanation": "从而 (cóng'ér) means 'thereby / thus'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u18-l5": {
        "id": "zh-u18-l5",
        "unit": "zh-u18",
        "level": "B2",
        "objective": "Synthesize forward/inverted causal (因为/之所以), concessive-adversative (虽然/然而/却), hypothetical concessive (即使/哪怕), and premise-deductive (既然/从而) structures into comprehensive academic discourses and symposium presentations.",
        "prerequisites": [
            "zh-u18-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u18-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第十八单元的所有因果与转折高阶句式，构建完整的逻辑论证闭环！\n\n1. 因果与转折复句全景大一统总表 (Master Causal & Concessive Architecture):\n| 逻辑类型 | 核心关联词公式 | 论辩功能与典型范例 |\n| :--- | :--- | :--- |\n| **顺向因果** | 因为 A ，所以 B | 基础阐释：因为准备充分，所以顺利通过 |\n| **倒装焦点** | 之所以 B ，是因为 A | 学术重音：之所以成功，是因为团队齐心协力 |\n| **事实转折** | 虽然 A ，然而 / 却 B | 事实对立：虽然实验艰苦，大家却斗志昂扬 |\n| **让步假设** | 即使 / 哪怕 A ，也 B | 极端立誓：哪怕困难重重，也绝不放弃理想 |\n| **既定推论** | 既然 A ，就 B | 行动倡议：既然方案通过，就立即分工执行 |\n| **顺承引申** | 通过动作 A ，从而达成 B | 目的递进：优化算法架构，从而大幅提升效率 |\n\n2. 第十八单元实战交际演练 (Unit 18 Academic Symposium Synthesis):\n- 跨国学者在国际汉学大会发表主旨演讲：多重论证逻辑环环相扣，学术辞章典雅严谨。",
            "examples": [
                {
                    "target": "在国际汉学研讨会的主旨发言中，学者深刻阐述道：‘中华文明之所以历经数千年而绵延不绝，是因为它具有强大的包容性与自我革新能力；尽管在历史长河中经历过无数次惊涛骇浪，中华民族却总能在困境中涅槃重生！’",
                    "reading": "Zài guójì hànxué yántǎohuì de zhǔzhǐ fāyán zhōng, xuézhě shēnkè chǎnshù dào: ‘Zhōnghuá wénmíng zhī suǒyǐ lìjīng shù qiān nián ér miányán-bùjué, shì yīnwèi tā jùyǒu qiángdà de bāoróngxìng yǔ zìwǒ géxīn nénglì; jǐngguǎn zài lìshǐ chánghé zhōng jīnglì guò wúshù cì jīngtāohàolàng, Zhōnghuá mínzú què zǒng néng zài kùnjìng zhōng nièpán-chóngshēng!’",
                    "translation": "In the keynote speech at the international Sinology symposium, the scholar elaborated deeply: 'The reason why Chinese civilization has endured unbroken for millennia is that it possesses immense inclusiveness and capacity for self-renewal; although having weathered countless turbulent storms in history, the Chinese nation has nevertheless always achieved rebirth from adversity!'"
                },
                {
                    "target": "张教授点评研究生的开题报告：‘既然我们已经明确了核心研究问题，接下来就必须通过严谨的问卷调查与量化建模，从而为后续的理论构建提供坚实的数据支撑。’",
                    "reading": "Zhāng jiàoshòu diǎnpíng yánjiūshēng de kāití bàogào: ‘Jìrán wǒmen yǐjīng míngquè le héxīn yánjiū wèntí, jiēxiàlai jiù bìxū tōngguò yánjǐn de wènjuàn diàochá yǔ liànghuà jiànmó, cóng'ér wèi hòuxù de lǐlùn gòujiàn tígōng jiānshí de shùjù zhīchēng.’",
                    "translation": "Professor Zhang reviewed the graduate thesis proposal: 'Since we have clarified the core research questions, next we must carry out rigorous surveys and quantitative modeling, thereby providing solid data support for subsequent theoretical construction.'"
                },
                {
                    "target": "大卫深情总结道：‘即使语言与文化的差异再大，只要我们心怀真诚与善意，文化互鉴的桥梁就一定能跨越一切隔阂，从而让人类命运共同体更加紧密相连！’",
                    "reading": "Dàwèi shēnqíng zǒngjié dào: ‘Jíshǐ yǔyán yǔ wénhuà de chāyì zài dà, zhǐyào wǒmen xīnhuái zhēnchéng yǔ shànyì, wénhuà hùjiàn de qiáoliáng jiù yídìng néng kuàyuè yíqiè géhé, cóng'ér ràng rénlèi mìngyùn gòngtóngtǐ gèngjiā jǐnmì xiānglián!’",
                    "translation": "David summarized with deep emotion: 'Even if linguistic and cultural differences are ever so great, as long as we hold sincerity and goodwill in our hearts, the bridge of mutual cultural learning will definitely span all divides, thereby connecting the community with a shared future for mankind even more closely!'"
                }
            ],
            "mnemonics": [
                "The Logical Bridge: 之所以...是因为 (Why), 尽管...却 (Yet), 哪怕...也 (Even if), 既然...就 (Since), 从而 (Thereby)!"
            ],
            "culturalNotes": [
                "The cultural vision of «文明互鉴» (Mutual Learning Among Civilizations) emphasizes dialogue, mutual enrichment, and peaceful coexistence among global cultures."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘中华文明之所以生生不息，是因为其具有强大的包容性；尽管经历磨难，却总能自我更新’融合了哪两组核心逻辑复句？",
                    "options": [
                        "倒装焦点因果复句 + 让步转折复句 (Inverted focus causal + Concessive adversative)",
                        "被字句 + 把字句",
                        "疑问句 + 祈使句"
                    ],
                    "answerIndex": 0,
                    "explanation": "之所以...是因为 is inverted focal causal; 尽管...却 is concessive adversative."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在学术报告总结中运用‘既然...就...，从而...’体现的论证逻辑链条是：",
                    "options": [
                        "从已知前提导出明确行动，并通过该行动达成进一步的积极战略目标 (From known premise deduces action, thereby achieving strategic goal)",
                        "无逻辑的随意堆砌",
                        "表示彻底认输"
                    ],
                    "answerIndex": 0,
                    "explanation": "既然...就 deduces action from a premise; 从而 links the action to its constructive outcome."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子在学术多重复句的逻辑与修辞运用上最为典雅严谨且完全符合规范？",
                    "options": [
                        "因为虽然下雨所以却去爬山",
                        "这项技术之所以受到全球瞩目，是因为它在节能减排上取得了突破，从而大幅降低了碳排放 (Zhī suǒyǐ... shì yīnwèi... cóng'ér... — Flawless academic causal synthesis)",
                        "只要学不好就必须放弃"
                    ],
                    "answerIndex": 1,
                    "explanation": "之所以...是因为 (inverted causal) + 从而 (resultative connector) represents flawless academic Chinese."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character phrase for 'mutual learning among civilizations' (文明互鉴):",
                    "acceptedAnswers": [
                        "文明互鉴",
                        "wenminghujian",
                        "wénmínghùjiàn",
                        "Wénmínghùjiàn",
                        "Wenminghujian",
                        "文明互鑒"
                    ],
                    "explanation": "文明互鉴 (wénmíng hùjiàn) means 'mutual learning among civilizations'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u19-l1": {
        "id": "zh-u19-l1",
        "unit": "zh-u19",
        "level": "B2",
        "objective": "Master the foundational 是……的 focus construction for known past events to emphasize specific circumstantial details (Time: 是什么时候来的; Place: 是在哪儿买的; Manner: 是怎么去的).",
        "prerequisites": [
            "zh-u18-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u18-l5"
            ]
        },
        "presentation": {
            "explanation": "「是……的」结构是现代汉语中用于**对已知发生的过去事件的特定细节（时间、地点、方式、目的等）进行精准信息焦点强调（Information Focus）**的最核心句式！\n\n1. 核心是……的前提条件与公式 (Core Focus Formula):\n- **前提铁律**：事件动作**已经发生或已经成为已知既成事实**（Past/Known Fact）！\n- **公式**：**主语 + 是 + [强调的焦点信息 (时间 / 地点 / 方式)] + 动词 + 的 + (宾语)**\n- 典型范式：\n  - 强调时间：我们**是昨天早晨坐高铁到达北京的**。(It was yesterday morning that we arrived in Beijing by high-speed rail.)\n  - 强调地点：这件精美的景泰蓝花瓶**是在北京琉璃厂文化街买的**。(It was on Liulichang Cultural Street in Beijing that this cloisonné vase was bought.)\n  - 强调方式：他是**一个人骑自行车从成都出发去拉萨的**。(It was by riding a bicycle alone that he went from Chengdu to Lhasa.)\n\n2. 结构禁忌：绝不能用于强调尚未发生的动作（*我明天是去北京的 ❌）！",
            "examples": [
                {
                    "target": "大卫热情地向中国朋友介绍说：‘我和我的导师是上个月中旬专程坐高铁来北京参加国际青年汉学学者研讨会的。’",
                    "reading": "Dàwèi rèqíng de xiàng Zhōngguó péngyou jièshào shuō: ‘Wǒ hé wǒ de dǎoshī shì shàng gè yuè zhōngxún zhuānchéng zuò gāotiě lái Běijīng cānjiā guójì qīngnián hànxué xuézhě yántǎohuì de.’",
                    "translation": "David enthusiastically introduced to his Chinese friend: 'My supervisor and I came to Beijing by high-speed rail in the middle of last month specifically to participate in the international youth Sinology symposium.'"
                },
                {
                    "target": "张教授指着书架上一套珍贵的线装书说：‘这套《四部丛刊》是我三十年前在北京琉璃厂古旧书店淘来的。’",
                    "reading": "Zhāng jiàoshòu zhǐ zhe shūjià shang yí tào zhēnguì de xiànzhuāngshū shuō: ‘Zhè tào «Sìbù Cóngkān» shì wǒ sānshí nián qián zài Běijīng Liúlichǎng gǔjiù shūdiàn táo lái de.’",
                    "translation": "Professor Zhang pointed at a precious thread-bound book set on the shelf: 'This edition of Sibu Congkan was found by me 30 years ago in Beijing's Liulichang antique bookstore.'"
                },
                {
                    "target": "李明笑着回忆道：‘当年我和几位大学同窗是用双脚一步步徒步登上泰山极顶，并有幸亲眼目睹了极其震撼的泰山日出的。’",
                    "reading": "Lǐ Míng xiào zhe huíyì dào: ‘Dāngnián wǒ hé jǐ wèi dàxué tóngchuāng shì yòng shuāngjiǎo yíbùbù túbù dēngshàng Tàishān jídǐng, bìng yǒuxìng qīnyǎn mùdǔ le jíqí zhènhàn de Tàishān rìchū de.’",
                    "translation": "Li Ming recalled with a smile: 'Back then, my college classmates and I climbed to Mount Tai's supreme peak step by step on foot, and were fortunate enough to witness the breathtaking sunrise with our own eyes.'"
                }
            ],
            "mnemonics": [
                "Fact Already Done? Wrap the detail with 是...的! 是 When/Where/How + Verb + 的!"
            ],
            "culturalNotes": [
                "Liulichang (琉璃厂) in Beijing has been the traditional cultural hub for scholar-calligraphers, antiquarian book collectors, and antique connoisseurs since the Qing Dynasty."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘这批珍贵的敦煌文献数字化档案是科研人员历时五年在莫高窟实地采集完成的’中，‘是……的’强调的核心信息是：",
                    "options": [
                        "时间跨度与地点方式等背景细节 (Time span, location, and manner details of past event)",
                        "动作是否会发生",
                        "对未来的假设预测"
                    ],
                    "answerIndex": 0,
                    "explanation": "是……的 emphasizes the past timeframe, location, and manner of the completed archive acquisition."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在询问对方‘您是乘飞机还是坐高铁来的？’时，使用‘是……的’结构的前提语境是：",
                    "options": [
                        "对方目前尚未出发",
                        "对方已经到达现场，询问其交通出行方式细节 (The guest has already arrived; querying travel manner detail)",
                        "对方正在犹豫买哪种票"
                    ],
                    "answerIndex": 1,
                    "explanation": "是……的 assumes the event (arrival) is already accomplished and focuses on the manner of transit."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于‘是……的’强调句型，下列哪一项语法规则完全正确？",
                    "options": [
                        "可以用于强调明天即将发生的动作",
                        "‘是……的’仅用于动作已经发生的前提下，强调发生的时间、地点、方式、目的等细节 (Used for already-occurred actions to emphasize time, place, manner, etc.)",
                        "‘的’字必须放在句首"
                    ],
                    "answerIndex": 1,
                    "explanation": "是……的 is strictly used for already occurred events to emphasize specific circumstantial parameters."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi name of Beijing's famous historic antique and bookstore district (琉璃厂):",
                    "acceptedAnswers": [
                        "琉璃厂",
                        "liulichang",
                        "liúlichǎng",
                        "Liúlichǎng",
                        "Liulichang",
                        "琉璃廠"
                    ],
                    "explanation": "琉璃厂 (liúlichǎng) is Beijing's historic antique and antiquarian book quarter."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u19-l2": {
        "id": "zh-u19-l2",
        "unit": "zh-u19",
        "level": "B2",
        "objective": "Master the focus on purpose (是为了...的), agent (是由...负责的), and instrument (是用...制作的) within the 是……的 framework.",
        "prerequisites": [
            "zh-u19-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u19-l1"
            ]
        },
        "presentation": {
            "explanation": "除了强调时间与地点，「是……的」句式还能强力聚焦于动作的**动机目的（Purpose）、主导主体（Agent）与工具媒介（Instrument）**！\n\n1. 强调目的动机 (Purpose Focus Formula):\n- **主语 + 是为了 + [特定目标 / 宗旨] + (而) + 动词 + 的**\n- 例句：王教授**是为了抢救濒危少数民族语言口头传统，才深入偏远山区做田野调查的**。(It was in order to rescue endangered oral traditions that Professor Wang went deep into remote mountains.)\n\n2. 强调施事者与组织主体 (Agent Focus Formula):\n- **这项国家级重大科研课题是由清华大学团队牵头联合攻关的**。(It was by the Tsinghua team that this national major project was led.)\n\n3. 强调工艺材料与工具媒介 (Instrument / Material Focus):\n- **这幅传世名画是用传统宣纸和特制松烟墨绘制而成的**。(It was with traditional Xuan paper and pine-soot ink that this masterpiece was painted.)",
            "examples": [
                {
                    "target": "大卫由衷地赞叹道：‘这把做工极其考究的明式黄花梨太师椅，是由非遗传承老匠人纯手工采用榫卯结构精制而成的。’",
                    "reading": "Dàwèi yóuzhōng de zàntàn dào: ‘Zhè bǎ zuògōng jíqí kǎojiu de Míng-shì huánghuālǐ tàishīyǐ, shì yóu fēiyí chuánchéng lǎo jiàngrén chún shǒugōng cǎiyòng sǔnmǎo jiégòu jīngzhì ér chéng de.’",
                    "translation": "David exclaimed sincerely: 'This Ming-style Huanghuali armchair of exquisite craftsmanship was handmade by a veteran intangible heritage master using pure mortise-and-tenon joints.'"
                },
                {
                    "target": "张总工程师在发布会上宣布：‘这款全自主知识产权的量子计算芯片，是由我们青年骨干科研团队历经千百次实验自主研发成功的。’",
                    "reading": "Zhāng zǒnggōngchéngshī zài fābùhuì shang xuānbù: ‘Zhè kuǎn quán zìzhǔ zhīshí chǎnquán de liàngzǐ jìsuàn xīnpīan, shì yóu wǒmen qīngnián gǔgàn kēyán tuánduì lìjīng qiānbǎicì shíyàn zìzhǔ yánfā chénggōng de.’",
                    "translation": "Chief Engineer Zhang announced: 'This quantum computing chip with independent IP was successfully developed by our young core scientific team after hundreds of experiments.'"
                },
                {
                    "target": "中方代表团团长指出：‘我们此次出访欧洲三国，是为了深化多边经贸合作与推动文明交流互鉴而专程前来的。’",
                    "reading": "Zhōngfāng dàibiǎotuán tuánzhǎng zhǐchū: ‘Wǒmen cǐcì chūfǎng Ōuzhōu sān guó, shì wèile shēnhuà duōbiān jīng-mào hézuò yǔ tuīdòng wénmíng jiāoliú-hùjiàn ér zhuānchéng qiánlái de.’",
                    "translation": "The delegation head pointed out: 'Our visit to three European countries was specifically made in order to deepen multilateral economic cooperation and promote civilizational exchange.'"
                }
            ],
            "mnemonics": [
                "Who led it? 是由 Agent 的! Why do it? 是为了 Goal 的! What tool? 是用 Tool 的!"
            ],
            "culturalNotes": [
                "Traditional Chinese mortise and tenon joints (榫卯 sǔnmǎo) allow wooden architecture and classical Ming furniture to stand strong for centuries without a single metallic nail."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘这本权威古籍校注是由国家图书馆古籍整理专家团队历时十年编纂完成的’中，‘是……的’强调的是：",
                    "options": [
                        "书本的价格",
                        "负责编纂的施事主体团队 (The agentive expert team responsible for compilation)",
                        "将来的出版计划"
                    ],
                    "answerIndex": 1,
                    "explanation": "是由...完成的 focuses squarely on the agentive team responsible for the work."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "传统中国古典家具在不用铁钉的情况下实现严丝合缝、历久弥坚的精湛木工工艺称为：",
                    "options": [
                        "榫卯结构 (Sǔnmǎo jiégòu — Mortise and tenon joint structure)",
                        "塑料黏合",
                        "铁丝固定"
                    ],
                    "answerIndex": 0,
                    "explanation": "榫卯结构 (sǔnmǎo jiégòu) is the iconic ancient Chinese mortise-and-tenon woodworking craft."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子属于强调‘目的与动机’的规范‘是……的’句式？",
                    "options": [
                        "我们明天要去参加文化节",
                        "文化节是非常热闹的",
                        "我们是为了促进两国青年相互了解而举办这次文化节的 (Shì wèile... ér... de — Purpose focus)"
                    ],
                    "answerIndex": 2,
                    "explanation": "是为了...而...的 is the canonical purpose focus construction."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi for the traditional 'mortise and tenon joint' (榫卯):",
                    "acceptedAnswers": [
                        "榫卯",
                        "sunmao",
                        "sǔnmǎo",
                        "Sǔnmǎo",
                        "Sunmao"
                    ],
                    "explanation": "榫卯 (sǔnmǎo) refers to traditional mortise and tenon woodworking joints."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u19-l3": {
        "id": "zh-u19-l3",
        "unit": "zh-u19",
        "level": "B2",
        "objective": "Master the negation rule of the focus construction (Negator 不 must precede 是: 不是……的), contrasting the negation of focal details against ordinary verbal negations.",
        "prerequisites": [
            "zh-u19-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u19-l2"
            ]
        },
        "presentation": {
            "explanation": "「是……的」结构的否定式有着严密的句法法则，其否定焦点具有高度针对性！\n\n1. 绝对否定法则 (The Negation Law of 是……的):\n- **否定副词「不」必须严格置于「是」的前面，构成「不是……的」**！\n- **公式**：**主语 + 不是 + [被否定的焦点信息] + 动词 + 的**\n- 严禁置于动词前：\n  - 正确：我**不是昨天来的**，我是前天来的。(I didn't come yesterday; I came the day before yesterday.)\n  - 错误：*我是没昨天来的 ❌ / *我是不昨天来的 ❌\n\n2. 否定焦点纠正双联句 (Negation + Correction Parallel Duals):\n- **不是 A 动词的，而是 B 动词的** (It was NOT A, but rather B that [action occurred]).\n- 高阶学术例句：\n  - 这项重大科研突破**不是靠偶然侥幸取得的，而是靠团队多年如一日的艰苦攻关实现的**。(This breakthrough was NOT achieved by sheer luck, but by years of grueling teamwork.)",
            "examples": [
                {
                    "target": "大卫诚恳地向老师解释说：‘这篇关于中国传统节日的调查报告，不是我一个人独立写成的，而是我们跨国学习小组共同合作完成的。’",
                    "reading": "Dàwèi chéngkěn de xiàng lǎoshī jiěshì shuō: ‘Zhè piān guānyú Zhōngguó chuántǒng jiérì de diàochá bàogào, bú shì wǒ yí gè rén dúlì xiěchéng de, ér shì wǒmen kuàguó xuéxí xiǎozǔ gòngtóng hézuò wánchéng de.’",
                    "translation": "David explained sincerely to the teacher: 'This investigative report on traditional Chinese festivals was not written by me alone, but was completed through joint collaboration by our multinational study group.'"
                },
                {
                    "target": "文物鉴定专家严肃指出：‘这件青花瓷瓶不是在明代景德镇官窑烧制的，而是清代晚期仿古工艺制作的精美民窑器物。’",
                    "reading": "Wénwù jiàndìng zhuānjiā yánsù zhǐchū: ‘Zhè jiàn qīnghuā cípíng bú shì zài Míngdài Jǐngdézhèn guānyáo shāozhì de, ér shì Qīngdài wǎnqī fǎnggǔ gōngyì zhìzuò de jīngměi mínyáo qìwù.’",
                    "translation": "The antique appraiser pointed out: 'This blue-and-white porcelain vase was not fired in Ming imperial kilns in Jingdezhen, but was an exquisite folk kiln artifact produced by late Qing antiquarian replication.'"
                },
                {
                    "target": "青年学者在研讨会上澄清：‘我们团队这项关于古都空间演变的研究结论，不是凭空主观推测出来的，而是依据大量出土青铜铭文与传世文献比对考证得出的。’",
                    "reading": "Qīngnián xuézǐ zài yántǎohuì shang chéngqīng: ‘Wǒmen tuánduì zhè xiàng guānyú gǔdū kōngjiān yǎnbiàn de yánjiū jiélùn, bú shì píngkōng zhǔguān tuīcè chūlai de, ér shì yījù dàliàng chūtǔ qīngtóng míngwén yǔ chuánshì wénxiàn bǐduì kǎozhèng déchū de.’",
                    "translation": "The young scholar clarified: 'Our team's conclusion on ancient capital spatial evolution was not subjectively speculated out of thin air, but was deduced from corroborating unearthed bronze inscriptions with transmitted historical texts.'"
                }
            ],
            "mnemonics": [
                "Never say 是没/是不! Put 不 right in front of 是: 不是 Time/Place/Manner 的, 而是 True Detail 的!"
            ],
            "culturalNotes": [
                "Jingdezhen (景德镇) in Jiangxi Province has been renowned as the world's porcelain capital (瓷都) for over a thousand years, famous for its blue-and-white porcelain (青花瓷)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "将句子‘我是在北京买的这幅国画’改为否定句，规范无误的是：",
                    "options": [
                        "我是不买在北京的这幅国画",
                        "我不是在北京买的这幅国画 (Wǒ bú shì zài Běijīng mǎi de — 不 correctly precedes 是)",
                        "我是没在北京买的这幅国画"
                    ],
                    "answerIndex": 1,
                    "explanation": "In the 是……的 construction, negation must place 不 directly in front of 是 (不是……的)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘科学结论不是凭空捏造出来的，而是经过严格实证检验的’中，‘不是……而是……’的修辞效果是：",
                    "options": [
                        "先否定错误归因，再精准确立正确归因 (Negates erroneous attribution, then establishes valid truth)",
                        "表示疑问困惑",
                        "表示被动受害"
                    ],
                    "answerIndex": 0,
                    "explanation": "不是...而是... establishes a strong contrast between an erroneous premise and the correct factual basis."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于‘是……的’句型的否定规则，下列哪一项完全正确？",
                    "options": [
                        "否定词‘不’必须严格放在‘是’的前面构成‘不是……的’ (不 must strictly precede 是)",
                        "否定词必须用‘没’且放在动词前",
                        "否定句必须省略‘的’"
                    ],
                    "answerIndex": 0,
                    "explanation": "The negation of the focus construction must be 不是……的."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for China's famous porcelain capital (景德镇):",
                    "acceptedAnswers": [
                        "景德镇",
                        "jingdezhen",
                        "jǐngdézhèn",
                        "Jǐngdézhèn",
                        "Jingdezhen",
                        "景德鎮"
                    ],
                    "explanation": "景德镇 (jǐngdézhèn) is China's historic porcelain capital."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u19-l4": {
        "id": "zh-u19-l4",
        "unit": "zh-u19",
        "level": "B2",
        "objective": "Master the optional omission of 是 in affirmative statements, the mandatory presence of 是 in negative and interrogative forms, and the two permissible positions of nominal objects (V + 的 + O vs. V + O + 的).",
        "prerequisites": [
            "zh-u19-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u19-l3"
            ]
        },
        "presentation": {
            "explanation": "掌握「是……的」的高阶语法细节，是区分普通学习者与母语级使用者的关键！\n\n1. 「是」的省略规律 (Omission Rules of 是):\n- **肯定句中「是」常可省略**（使语言更凝练自然）：\n  - 我（是）昨天到的北京。= 我昨天到的北京。(Both valid!)\n- **否定句与疑问句中「是」绝对不可省略**！\n  - 否定句：我**不是**坐飞机来的。（绝不可说 *我不坐飞机来的 ❌）\n  - 疑问句：你**是**怎么知道这个消息的？\n\n2. 宾语位置的两大铁律 (Placement of the Nominal Object):\n- **形态 A（最常用标准式）：主语 + 是 + 状语 + 动词 + 的 + 宾语**\n  - 我是在中国**学的汉语**。(Focus on 'in China', object placed after 的).\n- **形态 B（紧凑口语式）：主语 + 是 + 状语 + 动词 + 宾语 + 的**\n  - 我是在中国**学汉语的**。(Common when object is monosyllabic or short).",
            "examples": [
                {
                    "target": "大卫在茶艺馆与同伴交流：‘我去年在云南大理喝过这种普洱茶，是在当地一家百年老茶庄买的茶叶。’",
                    "reading": "Dàwèi zài cháyìguǎn yǔ tóngbàn jiāoliú: ‘Wǒ qùnián zài Yúnnán Dàlǐ hē guò zhè zhǒng Pǔ'ěr chá, shì zài dāngdì yì jiā bǎinián lǎocházhuāng mǎi de cháyè.’",
                    "translation": "David chatted with peers in the teahouse: 'I drank this Pu'er tea in Dali, Yunnan last year; it was in a century-old local tea shop that I bought the tea.'"
                },
                {
                    "target": "张教授向国际学者提问：‘请问各位学者是哪一年开始专注于中国古代简帛文献数字化整理与研究工作的？’",
                    "reading": "Zhāng jiàoshòu xiàng guójì xuézhě tíwèn: ‘Qǐngwèn gèwèi xuézhě shì nǎ yì nián kāishǐ zhuānzhù yú Zhōngguó gǔdài jiǎnbó wénxiàn shùzìhuà zhěnglǐ yǔ yánjiū gōngzuò de?’",
                    "translation": "Professor Zhang inquired of the international scholars: 'May I ask in which year you scholars began focusing on the digital curation and study of ancient Chinese bamboo and silk manuscripts?'"
                },
                {
                    "target": "李明笑着对大家说：‘大家请放心，这次国际学术文化交流活动的全部接待行程，我们都是按照最高外事礼仪标准精心安排的。’",
                    "reading": "Lǐ Míng xiào zhe duì dàjiā shuō: ‘Dàjiā qǐng fàngxīn, zhè cì guójì xuéshù wénhuà jiāoliú huódòng de quánbù jiēdài xíngchéng, wǒmen dōu shì ànzhào zuìgāo wàishì lǐyí biāozhǔn jīngxīn ānpái de.’",
                    "translation": "Li Ming said to everyone with a smile: 'Please be assured, all reception itineraries for this international cultural exchange event were meticulously arranged by us according to the highest diplomatic protocol standards.'"
                }
            ],
            "mnemonics": [
                "Affirmative: 是 is optional (我昨天到的 = 我是昨天到的). Negative & Questions: 是 is mandatory (不是...的 / 是怎么...的)! Object can follow 的 (买的书) or precede 的 (买书的)!"
            ],
            "culturalNotes": [
                "Pu'er tea (普洱茶) from Yunnan Province, traditionally transported across the Ancient Tea Horse Road (茶马古道), is celebrated for its rich aroma and fermentation aging qualities."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "关于‘是……的’句型中‘是’字的省略规则，下列判断完全正确的是：",
                    "options": [
                        "任何情况下都不能省略",
                        "在肯定句中‘是’可根据口语习惯自然省略，但在否定句‘不是……的’中绝对不能省略 (Optional in affirmative, mandatory in negative)",
                        "在否定句中必须省略"
                    ],
                    "answerIndex": 1,
                    "explanation": "In affirmative focus sentences, 是 can be omitted; in negative forms, 不是 is strictly mandatory."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘我是在北京大学读的研究生’与‘我是在北京大学读研究生的’：",
                    "options": [
                        "两者在语法规范上均成立，仅为宾语置于‘的’前后的语体微调 (Both syntactically valid variations of object placement)",
                        "第一句是错的",
                        "第二句是错的"
                    ],
                    "answerIndex": 0,
                    "explanation": "Both 读的研究生 (V+的+O) and 读研究生的 (V+O+的) are standard, valid permutations."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个疑问句在‘是……的’语法结构上完全规范？",
                    "options": [
                        "你是怎么把这个复杂系统搭建起来的？ (Nǐ shì zěnme bǎ zhè gè fùzá xìtǒng dājiàn qǐlái de? — Perfect modal interrogative focus)",
                        "你怎样把这个搭建起来？的",
                        "你是明天怎么来的？"
                    ],
                    "answerIndex": 0,
                    "explanation": "你是怎么……的 is the canonical interrogative focus pattern."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the Hanzi for Yunnan's famous fermented tea (普洱茶):",
                    "acceptedAnswers": [
                        "普洱茶",
                        "puercha",
                        "pǔ'ěrchá",
                        "Pǔ'ěrchá",
                        "Puercha",
                        "普洱"
                    ],
                    "explanation": "普洱茶 (pǔ'ěrchá) is Yunnan's renowned fermented Pu'er tea."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u19-l5": {
        "id": "zh-u19-l5",
        "unit": "zh-u19",
        "level": "B2",
        "objective": "Synthesize all focus construction variants (Circumstances, Purpose, Agent/Instrument, Negation/Contrast, Object positioning) into high-stakes press conference exchanges and diplomatic briefings.",
        "prerequisites": [
            "zh-u19-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u19-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第十九单元的所有强调句法规则，构建完整的焦点信息传达网络，并在外交部例行记者会与国际重大新闻发布语境中进行实战综合演练！\n\n1. 现代汉语「是……的」焦点强调全景矩阵 (Master Focus Matrix):\n| 强调焦点类型 | 核心句法结构 | 典型高级应用范例 |\n| :--- | :--- | :--- |\n| **时间/地点/方式** | 主语 + 是 + 时间/地点/方式 + V + 的 | 我们是上周乘专机抵达北京的 |\n| **目的/宗旨** | 主语 + 是为了 + 目标 + (而) + V + 的 | 会议是为了凝聚全球绿色共识而召开的 |\n| **施事/主导团队** | 主语 + 是由 + 专家团队 + 牵头研发的 | 该大模型是由中国科研院所自主训练的 |\n| **否定矫正对比** | 不是 A + 的，而是 B + 的 | 不是靠补贴维持的，而是靠技术创新赢得市场的 |\n| **省略与宾语位置** | (是) + 状语 + V + 的 + O / V + O + 的 | 我是在故宫拍的照片 / 拍照片的 |\n\n2. 第十九单元实战交际演练 (Unit 19 Diplomatic Briefing):\n- 外交部发言人就高科技自主创新、国际多边文化遗产保护项目回答中外记者提问。",
            "examples": [
                {
                    "target": "外交部发言人在例行记者会上严正回应道：‘中国高新科技产业的蓬勃发展，不是靠任何外部施舍或贸易壁垒保护得来的，而是千千万万中国科技工作者夜以继日自主创新、攻坚克难奋斗出来的！’",
                    "reading": "Wàijiāobù fāyánrén zài lìxíng jìzhěhuì shang yánzhèng huíyìng dào: ‘Zhōngguó gāoxīn kējì chǎnyè de péngbó fāzhǎn, bú shì kào rènhé wàibù shīshě huò màoyì bìlěi bǎohù délái de, ér shì qiānqiān-wànwàn Zhōngguó kējì gōngzuòzhě yèyǐjìrì zìzhǔ chuàngxīn, gōngjiān-kènán fèndòu chūlai de!’",
                    "translation": "The Foreign Ministry spokesperson responded sternly: 'The vigorous development of China's high-tech industry was not gained by external handouts or trade barriers, but was fought for through round-the-clock independent innovation by millions of Chinese tech workers!'"
                },
                {
                    "target": "新闻发言人继续补充道：‘本次跨国濒危古迹数字化联合修复项目，是由中外联合考古专家组历时三年在丝绸之路沿线古城遗址现场实地勘探完成的，其宗旨是为了让古老的世界文化遗产在新时代焕发持久生命力。’",
                    "reading": "Xīnwén fāyánrén jìxù bǔchōng dào: ‘Běn cì kuàguó bīnwēi gǔjì shùzìhuà liánhé xiūfù xiàngmù, shì yóu zhōng-wài liánhé kǎogǔ zhuānjiāzǔ lìshí sān nián zài Sīchóuzhīlù yánxiàn gǔchéng yízhǐ xiànchǎng shídì kāntàn wánchéng de, qí zōngzhǐ shì wèile ràng gǔlǎo de shìjiè wénhuà yíchǎn zài xīn shídài huànfā chíjiǔ shēngmìnglì.’",
                    "translation": "The spokesperson added: 'This multinational joint digital restoration project of endangered heritage was surveyed on site along the Silk Road by a joint Chinese-foreign archaeological team over three years, with the aim of revitalizing ancient world cultural heritage in the new era.'"
                },
                {
                    "target": "大卫在国际新闻发布会现场用精准的中文记录并总结：‘发言人的答问逻辑清晰、掷地有声，充分展现了中国在国际舞台上坚定开放合作、共克时艰的大国风范与战略定力！’",
                    "reading": "Dàwèi zài guójì xīnwén fābùhuì xiànchǎng yòng jīngzhǔn de zhōngwén jìlù bìng zǒngjié: ‘Fāyánrén de dáwèn luóji qīngxī, zhìdì-yǒushēng, chōngfèn zhǎnxiàn le Zhōngguó zài guójì wǔtái shang jiāndìng kāifàng hézuò, gòngkè-shíjiān de dàguó fēngfàn yǔ zhànlüè dìnglì!’",
                    "translation": "David recorded in precise Chinese at the press conference: 'The spokesperson's responses were logically sharp and resounding with conviction, demonstrating China's great-power poise and strategic resolve to pursue open cooperation and overcome difficulties together!'"
                }
            ],
            "mnemonics": [
                "Focus Master: 是 When/Where/How/Why/Who + Verb + 的! Negation: 不是 A 而是 B! Crystal clear, resounding focus!"
            ],
            "culturalNotes": [
                "The idiom «掷地有声» (zhìdì-yǒushēng, throwing onto ground with resounding metallic chime) originates from the Jin Dynasty to describe powerful, resonant, and persuasive speech."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘本次国际交流大会是为了共商全球绿色发展大计而在北京隆重召开的’综合运用了哪些强调维度？",
                    "options": [
                        "目的强调 (是为了……而) + 地点强调 (是在北京) (Purpose focus + Locative focus)",
                        "单纯的现在进行时",
                        "被动让步句"
                    ],
                    "answerIndex": 0,
                    "explanation": "是为了...而 (purpose focus) combined with 是在北京 (locative focus) creates a multi-dimensional focus sentence."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "成语‘掷地有声’在外交新闻与演讲评论中用于赞誉：",
                    "options": [
                        "发言人声音过于微弱",
                        "发言论述坚定有力、字字千钧且极具说服力 (Speech is powerful, resolute, and richly persuasive)",
                        "现场掉落了金属物体"
                    ],
                    "answerIndex": 1,
                    "explanation": "掷地有声 describes speech delivered with compelling force, clarity, and resonance."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于现代汉语‘是……的’强调句型系统，下列哪一项总括完全正确？",
                    "options": [
                        "‘是……的’可以随意用于未发生的事情",
                        "‘是……的’句中不能出现名词宾语",
                        "‘是……的’立足于已然事实，能够精准强调时间、地点、方式、目的、施事及材料，且否定时‘不’必须置于‘是’前 (Stands on past facts to focus time/place/manner/purpose/agent, with 不 preceding 是)"
                    ],
                    "answerIndex": 2,
                    "explanation": "This encapsulates the foundational logic, coverage, and negation rules of the 是……的 focus system."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character idiom for 'resounding with conviction / words of immense weight and force' (掷地有声):",
                    "acceptedAnswers": [
                        "掷地有声",
                        "zhidiyousheng",
                        "zhìdìyǒushēng",
                        "Zhìdìyǒushēng",
                        "Zhidiyousheng",
                        "擲地有聲"
                    ],
                    "explanation": "掷地有声 (zhìdì-yǒushēng) means 'resounding with conviction / powerful and persuasive in delivery'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u20-l1": {
        "id": "zh-u20-l1",
        "unit": "zh-u20",
        "level": "B2",
        "objective": "Master the formal register formulas for business email openings (尊敬的 [Name/Title], 敬启者 To Whom It May Concern, 冒昧致信 pardon my intrusion, 见信如晤).",
        "prerequisites": [
            "zh-u19-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u19-l5"
            ]
        },
        "presentation": {
            "explanation": "在现代商务汉语与高阶职场沟通中，电子邮件与公文函件有着严格的**公文修辞程式（Epistolary Register & Protocol）**！\n\n1. 邮件抬头与尊称规范 (Salutations & Honorifics):\n- **指定对象**：尊敬的 [姓氏 + 职务/职称]（如：尊敬的李总监 / 尊敬的张教授）。\n- **泛指公函**：**敬启者 (jìngqǐzhě)**（To Whom It May Concern / Dear Recipient）。\n\n2. 开篇典雅寒暄与致信事由 (Opening Remarks & Subject Initiation):\n- **委婉致信**：**冒昧致信 (màomèi zhìxìn)**（Pardon my intrusion in writing to you...），表示对收件人宝贵时间的谦恭尊重。\n- **久未联系**：**展信佳 (zhǎnxìn jiā)** / **见信如晤 (jiànxìn rúwù)**（May this letter find you well / As if meeting face to face）。\n- **开门见山事由引述**：**现就 [具体项目/会议议题] 事宜向贵方致信如下：**",
            "examples": [
                {
                    "target": "大卫在写给战略合作方的正式商务电邮中规范写道：‘尊敬的王总经理：展信佳！冒昧致信，现就双方拟于下季度联合开展的人工智能合作项目事宜，特向贵司呈报最新可行性评估方案。’",
                    "reading": "Dàwèi zài xiě gěi zhànlüè hézuòfāng de zhèngshì shāngwù diànyóu zhōng guīfàn xiě dào: ‘Zūnjìng de Wáng zǒngjīnglǐ: Zhǎnxìn jiā! Màomèi zhìxìn, xiàn jiù shuāngfāng nǐ yú xià jìdù liánhé kāizhǎn de réngōngzhìnéng hézuò xiàngmù shìyí, tè xiàng guìsī chéngbào zuìxīn kěxíngxìng pínggū fāng'àn.’",
                    "translation": "David formally wrote in his business email: 'Dear General Manager Wang: May this letter find you well! Pardon my intrusion in writing to you; regarding the AI joint cooperation project planned for next quarter, we hereby specially submit our latest feasibility assessment report to your esteemed company.'"
                },
                {
                    "target": "跨国企业商务公函开篇庄重写道：‘敬启者：贵方上周发来的战略合作意向书我司已收悉，现针对具体合作条款与知识产权归属回复如下。’",
                    "reading": "Kuàguó qǐyè shāngwù gōnghán kāipiān zhuāngzhòng xiě dào: ‘Jìngqǐzhě: Guìfāng shàng zhōu fālái de zhànlüè hézuò yìxiàngshū wǒsī yǐ shōuxī, xiàn zhēnduì jùtǐ hézuò tiáokuǎn yǔ zhīshí chǎnquán guīshǔ huífù rúxià.’",
                    "translation": "The business missive began: 'To Whom It May Concern: We have duly acknowledged receipt of your letter of intent; hereby we reply regarding specific clauses and IP ownership.'"
                },
                {
                    "target": "项目助理礼貌地发信沟通：‘尊敬的各位专家学者：感谢各位百忙之中拨冗审阅学术研讨会日程安排，如有任何修改意见，恳请不吝赐教。’",
                    "reading": "Xiàngmù zhùlǐ lǐmào de fāxìn gōutōng: ‘Zūnjìng de gèwèi zhuānjiā xuézhě: Gǎnxiè gèwèi bǎimáng zhīzhōng bōrǒng shěnyuè xuéshù yántǎohuì rìchéng ānpái, rú yǒu rènhé xiūgǎi yìjiàn, kěnqǐng bùlìn-cìjiào.’",
                    "translation": "The project assistant politely emailed: 'Distinguished experts and scholars: Thank you for setting aside valuable time amidst busy schedules to review the symposium agenda; if you have any amendments, we earnestly invite your generous guidance.'"
                }
            ],
            "mnemonics": [
                "Epistolary Politeness: 尊敬的 Title + 展信佳 / 冒昧致信 (Respectful Opening) + 特向贵方 (Purpose)!"
            ],
            "culturalNotes": [
                "In Chinese business culture, addressing partners by their exact official title (姓氏 + 职务, e.g. 王总, 张教授) demonstrates professional courtesy and organizational respect."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在向素未谋面的行业前辈或合作方高管初次发送正式商务电邮时，最得体自谦的开篇套语是：",
                    "options": [
                        "你快点看这封信",
                        "展信佳！冒昧致信，现就…… (Zhǎnxìn jiā! Màomèi zhìxìn... — Courteous business opening)",
                        "我想找你聊聊天"
                    ],
                    "answerIndex": 1,
                    "explanation": "展信佳 + 冒昧致信 is the highest standard of formal, respectful corporate epistolary etiquette."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "公文中用于代替英文‘To Whom It May Concern’的标准典雅抬头是：",
                    "options": [
                        "亲爱的大家",
                        "敬启者 (Jìngqǐzhě — To Whom It May Concern)",
                        "喂你好"
                    ],
                    "answerIndex": 1,
                    "explanation": "敬启者 (jìngqǐzhě) is the canonical Chinese formal equivalent of 'To Whom It May Concern'."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "在正式商务公函中，称呼对方公司与自称本公司，最规范得体的用词搭配是：",
                    "options": [
                        "贵司 / 贵方（尊称对方）；我司 / 敝司（谦称己方）(Guìsī: your company; Wǒsī/Bìsī: our company)",
                        "你们公司；我们公司",
                        "他司；本司"
                    ],
                    "answerIndex": 0,
                    "explanation": "贵司/贵方 honors the recipient company; 我司/敝司 humbles one's own company."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi formal salutation for 'To Whom It May Concern' (敬启者):",
                    "acceptedAnswers": [
                        "敬启者",
                        "jingqizhe",
                        "jìngqǐzhě",
                        "Jìngqǐzhě",
                        "Jingqizhe",
                        "敬啓者"
                    ],
                    "explanation": "敬启者 (jìngqǐzhě) means 'To Whom It May Concern'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u20-l2": {
        "id": "zh-u20-l2",
        "unit": "zh-u20",
        "level": "B2",
        "objective": "Master corporate request verbs and modesty honorifics (烦请 please trouble yourself to..., 恳请 earnestly request, 拨冗 set aside precious time, 不吝赐教 do not withhold your valuable advice, 敬请期待).",
        "prerequisites": [
            "zh-u20-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u20-l1"
            ]
        },
        "presentation": {
            "explanation": "在中文职场与商务谈判中，恰当使用**敬辞（Honorifics）与谦辞（Modesty Terms）**能够极大地润滑沟通、展现专业素养！\n\n1. 高频商务请求敬辞 (Formal Request Honorifics):\n- **烦请 (fánqǐng)**：委婉恳请对方协助办理某事（常用于平级或跨部门请求）：\n  - **烦请**贵方在周五下班前将盖章后的合同扫描件发送至我司邮箱。\n- **恳请 (kěnqǐng)**：诚恳请求（用于向下级、上级或尊长提出重要期盼）：\n  - **恳请**领导予以批准 / **恳请**专家指导。\n- **拨冗 (bōrǒng)**：敬请对方在百忙之中抽出宝贵时间：\n  - 感谢您**拨冗出席**本次战略签约仪式。(Thank you for setting aside time to attend.)\n\n2. 谦逊求教与期待套语 (Modesty & Anticipation Formulas):\n- **不吝赐教 (bùlìn-cìjiào)**：请对方毫无保留地给予批评指导。\n- **妥否，请批示**：公文末尾请上级定夺裁决的标准程式。",
            "examples": [
                {
                    "target": "市场部在发给法务部的邮件中写道：‘烦请法务部门的同事协助审阅附件中的战略框架协议草案，并在本周三下班前反馈修改建议。’",
                    "reading": "Shìchǎngbù zài fā gěi fǎwùbù de diànyóu zhōng xiě dào: ‘Fánqǐng fǎwù bùmén de tóngshì xiézhù shěnyuè fùjiàn zhōng de zhànlüè kuàngjià xiéyì cǎo'àn, bìng zài běn zhōusān xiàbān qián fǎnkuì xiūgǎi jiànyì.’",
                    "translation": "The marketing department emailed legal: 'Please kindly assist in reviewing the attached draft strategic framework agreement and feed back amendments before Wednesday EOD.'"
                },
                {
                    "target": "大卫恭敬地向行业资深专家发函：‘十分荣幸能够邀请到您担任本届国际论坛的主旨演讲嘉宾，期待您拨冗莅临指导，并不吝赐教！’",
                    "reading": "Dàwèi gōngjìng de xiàng hángyè zīshēn zhuānjiā fāhán: ‘Shífēn róngxìng nénggòu yāoqǐng dào nín dānrèn běn jiè guójì lùntán de zhǔzhǐ yǎnjiǎng jiābīn, qīdài nín bōrǒng lìlín zhǐdǎo, bìng bùlìn-cìjiào!’",
                    "translation": "David respectfully sent a letter to a veteran expert: 'It is a tremendous honor to invite you as keynote speaker; we look forward to your gracious attendance and generous guidance!'"
                },
                {
                    "target": "项目负责人在呈报给董事会的可行性报告末尾写道：‘以上方案为项目组初步研拟之计划，妥否，恳请董事会领导审示。’",
                    "reading": "Xiàngmù fùzérén zài chéngbào gěi dǒngshìhuì de kěxíngxìng bàogào mòwěi xiě dào: ‘Yǐshàng fāng'àn wéi xiàngmùzǔ chūbù yánnǐ zhī jìhuà, tuǒfǒu, kěnqǐng dǒngshìhuì lǐngdǎo shěnshì.’",
                    "translation": "The project lead wrote at the conclusion of the board report: 'The above is the preliminary plan drafted by the project team; whether appropriate or not, we earnestly submit it for the Board leadership's review and decision.'"
                }
            ],
            "mnemonics": [
                "Ask politely: 烦请 (Please trouble to), 恳请 (Earnestly beg), 拨冗 (Carve out time), 不吝赐教 (Bestow wisdom)!"
            ],
            "culturalNotes": [
                "The phrase «拨冗莅临» (bōrǒng lìlín, carve out spare time to grace with presence) combines high honorific elegance with deep gratitude in Chinese formal invitations."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在商务电邮中表达‘麻烦您百忙之中抽出时间审阅这份文件’，最专业典雅的表述是：",
                    "options": [
                        "你必须抽空看文件",
                        "烦请您百忙之中拨冗审阅这份文件 (Fánqǐng nín bǎimáng zhīzhōng bōrǒng shěnyuè... — Flawless business honorific)",
                        "你快点看"
                    ],
                    "answerIndex": 1,
                    "explanation": "烦请 + 拨冗审阅 perfectly expresses polite, formal business request."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在正式向导师或资深专家请教时，表达‘请不要吝啬您的宝贵指教’的四字成语是：",
                    "options": [
                        "随心所欲",
                        "不吝赐教 (Bùlìn-cìjiào — Do not withhold your valuable advice)",
                        "自以为是"
                    ],
                    "answerIndex": 1,
                    "explanation": "不吝赐教 (bùlìn-cìjiào) is the canonical honorific idiom for inviting candid guidance."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于‘拨冗’与‘烦请’的用法，下列哪一项完全正确？",
                    "options": [
                        "两者只能对自己使用",
                        "‘拨冗’是对对方抽出宝贵时间的尊称，‘烦请’是请求对方协助的客气敬辞 (拨冗: honorific for taking time; 烦请: polite request)",
                        "两者用于批评下属"
                    ],
                    "answerIndex": 1,
                    "explanation": "拨冗 and 烦请 are standard polite business honorifics."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi phrase for 'setting aside precious time from busy schedule' (拨冗):",
                    "acceptedAnswers": [
                        "拨冗",
                        "borong",
                        "bōrǒng",
                        "Bōrǒng",
                        "Borong",
                        "撥冗"
                    ],
                    "explanation": "拨冗 (bōrǒng) means 'to find time in a busy schedule / set aside time'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u20-l3": {
        "id": "zh-u20-l3",
        "unit": "zh-u20",
        "level": "B2",
        "objective": "Master the vocabulary and syntactic formulas of formal business meetings (达成共识 reach consensus, 推进落实 advance implementation, 权衡利弊 weigh pros and cons, 互利共赢 mutual benefit).",
        "prerequisites": [
            "zh-u20-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u20-l2"
            ]
        },
        "presentation": {
            "explanation": "在跨国商务会议与战略洽谈中，掌握凝练有力的**四字商务成语与议事句型**是展现商业敏锐度与领导力的关键！\n\n1. 核心商务议事动词与搭配 (Key Business Action Verbs & Collocations):\n- **达成共识 (dáchéng gòngshí)**：双方就核心原则取得一致意见。\n- **权衡利弊 (quánhéng lì-bì)**：审慎评估方案的商业风险与潜在收益。\n- **推进落实 (tuījìn luòshí)**：将战略规划细化为具体执行动作。\n- **互利共赢 / 合作共赢 (hùlì-gòngyíng)**：经贸合作的基石理念（Win-Win Cooperation）。\n\n2. 议程推进与主持句式 (Meeting Facilitation Formulas):\n- **关于第一项议题，各方是否还有补充意见？**\n- **经过充分磋商，双方已在知识产权保护与利润分成机制上达成了高度共识。**",
            "examples": [
                {
                    "target": "商务洽谈会主持人总结道：‘经过两天的密集磋商，双方团队在技术授权与市场准入方案上达成了广泛共识，为下一步签署正式战略合作协议奠定了坚实基础。’",
                    "reading": "Shāngwù qiàtánhuì zhǔchírén zǒngjié dào: ‘Jīngguò liǎng tiān de mìjí cuōshāng, shuāngfāng tuánduì zài jìshù shòukuán yǔ shìchǎng zhǔnrù fāng'àn shang dáchéng le guǎnfàn gòngshí, wèi xià yí bù qiānshǔ zhèngshì zhànlüè hézuò xiéyì diàndìng le jiānshí jīchǔ.’",
                    "translation": "The negotiation moderator summarized: 'After two days of intensive consultations, both teams reached broad consensus on tech licensing and market access plans, laying a solid foundation for signing formal strategic cooperation agreements.'"
                },
                {
                    "target": "张首席财务官在战略会议上发言：‘面对复杂多变的国际市场环境，我们必须全面权衡利弊、严密评估汇率风险，从而确保企业现金流的稳健安全。’",
                    "reading": "Zhāng shǒuxí cáiwùguān zài zhànlüè huìyì shang fāyán: ‘Miànduì fùzá-duōbiàn de guójì shìchǎng huánjìng, wǒmen bìxū quánmiàn quánhéng lì-bì, yánmì pínggū huìlǜ fēngxiǎn, cóng'ér quèbǎo qǐyè xiànjīnliú de wěnjiàn ānquán.’",
                    "translation": "The CFO spoke: 'Facing complex global markets, we must comprehensively weigh pros and cons and rigorously assess forex risks, thereby safeguarding the steady security of corporate cash flows.'"
                },
                {
                    "target": "大卫作为项目经理明确表态：‘既然董事会已经全票通过了该项投资决议，我们执行团队接下来就将分秒必争地推进各项任务落地落实！’",
                    "reading": "Dàwèi zuòwéi xiàngmù jīnglǐ míngquè biǎotài: ‘Jìrán dǒngshìhuì yǐjīng quánpiào tōngguò le gāi xiàng tóuzī juéyì, wǒmen zhíxíng tuánduì jiēxiàlai jiù jiāng fēnmiǎo-bìzhēng de tuījìn gè xiàng rènwu luòdì luòshí!’",
                    "translation": "David as project manager stated: 'Since the board has unanimously passed the investment resolution, our execution team will proceed without losing a second to implement every task firmly on the ground!'"
                }
            ],
            "mnemonics": [
                "Meeting Mastery: 达成共识 (Reach Consensus), 权衡利弊 (Weigh Pros/Cons), 推进落实 (Execute Firmly), 互利共赢 (Win-Win)!"
            ],
            "culturalNotes": [
                "The philosophy of «互利共赢» (hùlì-gòngyíng, win-win cooperation) is the core ethos governing contemporary Chinese business interactions and foreign trade relations."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "商务谈判中表达‘双方经过深入讨论，取得了完全一致的意见’，最地道的商务术语是：",
                    "options": [
                        "各执己见",
                        "达成共识 (Dáchéng gòngshí — Reach consensus)",
                        "不了了之"
                    ],
                    "answerIndex": 1,
                    "explanation": "达成共识 (dáchéng gòngshí) is the authoritative business term for reaching mutual agreement."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘在做出重大跨国投资决策前，必须审慎分析各种商业机会与潜在风险’对应的四字商务成语是：",
                    "options": [
                        "权衡利弊 (Quánhéng lì-bì — Weigh pros and cons)",
                        "盲目跟风",
                        "孤注一掷"
                    ],
                    "answerIndex": 0,
                    "explanation": "权衡利弊 means carefully weighing advantages and disadvantages/risks before deciding."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "下列哪个句子在商务会议总结陈述中最为专业规范？",
                    "options": [
                        "大家随便做做看吧",
                        "我们不管利弊直接投钱",
                        "既然方案已通过，项目组将全力推进各项具体工作落地落实 (Full-scale project execution phrasing)"
                    ],
                    "answerIndex": 2,
                    "explanation": "推进各项具体工作落地落实 represents exemplary high-register corporate communication."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character business idiom for 'mutual benefit and win-win outcome' (互利共赢):",
                    "acceptedAnswers": [
                        "互利共赢",
                        "huligongying",
                        "hùlìgòngyíng",
                        "Hùlìgòngyíng",
                        "Huligongying",
                        "互利共贏"
                    ],
                    "explanation": "互利共赢 (hùlì-gòngyíng) means 'mutually beneficial and win-win'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u20-l4": {
        "id": "zh-u20-l4",
        "unit": "zh-u20",
        "level": "B2",
        "objective": "Master corporate email closing valedictions (顺祝商祺 Best business regards, 此致敬礼 With highest regards, 谨致谢忱 Express sincere gratitude, 专此布达).",
        "prerequisites": [
            "zh-u20-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u20-l3"
            ]
        },
        "presentation": {
            "explanation": "商务电邮与公文的结尾致敬语（Valedictions）是检验专业修养的最后一道标尺！\n\n1. 核心商务结语规范 (Core Business Valedictions):\n- **商务通用祝福**：**顺祝商祺 (shùnzhù shāngqí)**（Wishing you flourishing business success / Best business regards）。\n  - 格式规范：「顺祝」可接在正文后或另起一行空两格，「商祺」必须顶格另起一行！\n- **庄重公文致敬**：**此致 敬礼 (cǐzhì jìnglǐ)**（With highest regards / Yours sincerely）。\n  - 格式规范：「此致」另起一行空两格，「敬礼」另起一行顶格写！\n- **表达诚挚感谢**：**谨致谢忱 (jǐnzhì xièchén)**（Please accept my sincere gratitude）。\n- **通告发文结语**：**专此布达 (zhuāncǐ bùdá)** / **特此函达 (tècǐ hándá)**（Specially communicated hereby）。\n\n2. 签名与附件标准 (Sign-off & Attachment Protocol):\n- **附件提示**：**详情参见附件 (Details in attachment)**。\n- **落款署名**：[姓名] 敬上 / 谨启。",
            "examples": [
                {
                    "target": "大卫在合作洽谈确认函的结尾严谨格式化排版：‘期待双方未来更加紧密的合作！\n\n顺祝\n商祺！\n\n大卫 谨启’",
                    "reading": "Dàwèi zài hézuò qiàtán quèrènhán de jiéwěi yánjǐn géshìhuà páibǎn: ‘Qīdài shuāngfāng wèilái gèngjiā jǐnmì de hézuò!\n\nShùnzhù\nShāngqí!\n\nDàwèi Jǐnqǐ’",
                    "translation": "David rigorously formatted the closing of the confirmation letter: 'Looking forward to closer collaboration in the future!\n\nBest business regards,\n\nDavid (Sincerely)'"
                },
                {
                    "target": "跨国企业在发给长期战略供应商的感谢信中写道：‘感谢贵司过去一年来所提供的高品质元器件与卓越服务，在此谨致谢忱！’",
                    "reading": "Kuàguó qǐyè zài fā gěi chángqī zhànlüè gōngyìngshāng de gǎnxièxìn zhōng xiě dào: ‘Gǎnxiè guìsī guòqù yì nián lái suǒ tígōng de gāo pǐnzhì yuánqìjiàn yǔ zhuóyuè fúwù, zài cǐ jǐnzhì xièchén!’",
                    "translation": "The company wrote to its supplier: 'Thank you for the high-quality components and outstanding service provided over the past year; we hereby extend our sincere gratitude!'"
                },
                {
                    "target": "项目联合工作组在通知各成员单位的公函中写道：‘关于数字化平台测试阶段的工作安排已随信附上，详情参见附件，专此函达。’",
                    "reading": "Xiàngmù liánhé gōngzuòzǔ zài tōngzhī gè chéngyuán dānwèi de gōnghán zhōng xiě dào: ‘Guānyú shùzìhuà píngtái cèshì jiēduàn de gōngzuò ānpái yǐ suíxìn fùshàng, xiángqíng cānjiàn fùjiàn, zhuāncǐ hándá.’",
                    "translation": "The joint working group wrote: 'The schedule for platform testing has been attached with this letter; details are in the attachment, specially communicated hereby.'"
                }
            ],
            "mnemonics": [
                "Email Closings: 顺祝商祺 (Business Regards), 此致敬礼 (Highest Regards), 谨致谢忱 (Sincere Thanks), 专此函达 (Specially Communicated)!"
            ],
            "culturalNotes": [
                "«商祺» (shāngqí) literally means 'business auspiciousness/prosperity'. Its traditional layout with '商祺' at the top of a new line demonstrates respectful elevation (抬头) in Chinese epistolary culture."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在商业合作往来电邮中，最标准典雅的商务祝福结语是：",
                    "options": [
                        "拜拜啦",
                        "顺祝商祺 (Shùnzhù shāngqí — Best business regards)",
                        "明天见"
                    ],
                    "answerIndex": 1,
                    "explanation": "顺祝商祺 is the standard Chinese corporate email valediction."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "公文与商务感谢信中表达‘诚恳地表达由衷的谢意’的典雅四字成语是：",
                    "options": [
                        "谨致谢忱 (Jǐnzhì xièchén — Extend sincere gratitude)",
                        "理所当然",
                        "微不足道"
                    ],
                    "answerIndex": 0,
                    "explanation": "谨致谢忱 (jǐnzhì xièchén) is the formal epistolary expression for conveying deep gratitude."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中文正式公函与商务电邮的结语格式，下列哪一项完全正确？",
                    "options": [
                        "结语可以随意写在正文中间",
                        "正式邮件不需要任何结语",
                        "‘商祺’或‘敬礼’另起一行顶格书写，体现对收件人的敬重 (Elevated on a new line to show honorific respect)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Traditional Chinese letter layout places 商祺 or 敬礼 at the beginning of a new line to show respect."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi business valediction for 'Best business regards / Wishing you business prosperity' (顺祝商祺):",
                    "acceptedAnswers": [
                        "顺祝商祺",
                        "shunzhushangqi",
                        "shùnzhùshāngqí",
                        "Shùnzhùshāngqí",
                        "Shunzhushangqi",
                        "順祝商祺"
                    ],
                    "explanation": "顺祝商祺 (shùnzhù shāngqí) means 'Best business regards'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u20-l5": {
        "id": "zh-u20-l5",
        "unit": "zh-u20",
        "level": "B2",
        "objective": "Synthesize all corporate registers (Openings, Modesty Request terms, Meeting discourse, Closings & Valedictions) into high-stakes cross-border partnership negotiations, MOU documentation, and official press releases.",
        "prerequisites": [
            "zh-u20-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u20-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第二十单元的所有商务沟通、职场礼仪与公文电邮体系，构建母语级的商务公文论述与跨国战略合作实战能力！\n\n1. 现代高阶商务汉语全景矩阵 (Master Corporate Communication Matrix):\n| 商务沟通维度 | 核心程式表达 | 语用场景与功能 |\n| :--- | :--- | :--- |\n| **公函抬头** | 尊敬的 [Title] / 敬启者 | 确立尊崇、庄重的商务基调 |\n| **事由致信** | 展信佳！冒昧致信，现就…… | 谦恭有礼，开门见山切入正题 |\n| **请求与敬辞** | 烦请协助 / 拨冗莅临 / 不吝赐教 | 润滑人际沟通，彰显专业修养 |\n| **会议与决策** | 达成共识 / 权衡利弊 / 推进落实 | 驱动商业议程，达成互利共赢 |\n| **结语与致敬** | 顺祝商祺 / 谨致谢忱 / 专此布达 | 规范收尾，留存良好商业信誉 |\n\n2. 第二十单元实战交际演练 (Unit 20 Cross-Border Strategic MOU Signing):\n- 跨国高科技联合研发战略合作备忘录（MOU）正式签署仪式与双语公文交换。",
            "examples": [
                {
                    "target": "在跨国战略合作签约仪式上，双方代表共同签署公文备忘录并庄严致辞：‘尊敬的各位来宾、行业同仁：展信佳！经过多轮友好协商，双方已就共建跨国人工智能创新联合实验室达成了高度共识；我们将本着互利共赢的原则，全力推进各项研发任务落地落实！’",
                    "reading": "Zài kuàguó zhànlüè hézuò qiānyuē yíshì shang, shuāngfāng dàibiǎo gòngtóng qiānshǔ gōngwén bèiwànglù bìng zhuāngyán zhìcí: ‘Zūnjìng de gèwèi láibīn, hángyè tóngrén: Zhǎnxìn jiā! Jīngguò duō lún yǒuhǎo xiéshāng, shuāngfāng yǐ jiù gòngjiàn kuàguó réngōngzhìnéng chuàngxīn liánhé shíyànshì dáchéng le gāodù gòngshí; wǒmen jiāng běnzhe hùlì-gòngyíng de yuánzé, quánlì tuījìn gè xiàng yánfā rènwu luòdì luòshí!’",
                    "translation": "At the signing ceremony, both representatives signed the MOU: 'Distinguished guests and colleagues: Greetings! After multiple rounds of consultations, we have reached high consensus on building a joint AI lab; we will adhere to win-win principles to advance all R&D tasks firmly on the ground!'"
                },
                {
                    "target": "大卫在代表外方团队起草的致谢公函中写道：‘衷心感谢中方团队在此次合作中展现出的卓越专业能力与高效协作精神，期待未来双方携手并肩、共铸辉煌！在此谨致谢忱，顺祝商祺！’",
                    "reading": "Dàwèi zài dàibiǎo wàifāng tuánduì qǐcǎo de zhìxiè gōnghán zhōng xiě dào: ‘Zhōngxīn gǎnxiè zhōngfāng tuánduì zài cǐ cì hézuò zhōng zhǎnxiàn chū de zhuóyuè zhuānyè nénglì yǔ gāoxiào xiézuò jīngshén, qīdài wèilái shuāngfāng xiéshǒu-bìngjiān, gòngzhù-huīhuáng! Zài cǐ jǐnzhì xièchén, shùnzhù shāngqí!’",
                    "translation": "David drafted the thank-you missive: 'Heartfelt thanks to the Chinese team for their outstanding expertise and efficiency; we look forward to building brilliance together! Sincere gratitude, best business regards!'"
                },
                {
                    "target": "新闻发言人在跨国战略发布会上总结：‘本次战略合作备忘录的签署，是双方深化经贸与高新科技合作的重要里程碑，充分体现了在全球化浪潮中开放合作、互利共赢的时代主旋律！’",
                    "reading": "Xīnwén fāyánrén zài kuàguó zhànlüè fābùhuì shang zǒngjié: ‘Běn cì zhànlüè hézuò bèiwànglù de qiānshǔ, shì shuāngfāng shēnhuà jīng-mào yǔ gāoxīn kējì hézuò de zhòngyào lǐchéngbēi, chōngfèn tǐxiàn le zài quánqiúhuà làngcháo zhōng kāifàng hézuò, hùlì-gòngyíng de shídài zhǔxuánlǜ!’",
                    "translation": "The spokesperson summarized: 'Signing this MOU is a vital milestone in deepening economic and high-tech cooperation, embodying open collaboration and win-win partnership in economic globalization!'"
                }
            ],
            "mnemonics": [
                "Corporate Master: Salutation (尊敬的) ➔ Modesty Opening (冒昧致信) ➔ Meeting Action (达成共识/推进落实) ➔ Win-Win (互利共赢) ➔ Valediction (顺祝商祺)!"
            ],
            "culturalNotes": [
                "In Chinese business culture, a formal partnership signing ceremony (签约仪式 qiānyuē yíshì) involves exchanging signed red folders with both hands (双手递交) and a ceremonial handshake to seal long-term strategic commitment."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "句子‘双方本着互利共赢的原则，就联合实验室项目达成了高度共识，并将全力推进各项工作落地落实’体现了完整的：",
                    "options": [
                        "高阶商务公文与战略合作议事话语 (High-register corporate epistolary & partnership discourse)",
                        "随便聊天的口语",
                        "文学诗歌描写"
                    ],
                    "answerIndex": 0,
                    "explanation": "This combines key business collocations (互利共赢, 达成共识, 推进落实) in high-register corporate discourse."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在正式签署战略合作备忘录（MOU）的公文中，用四字成语表达‘携手并进，共同开创辉煌未来’的是：",
                    "options": [
                        "携手并肩 / 共铸辉煌 (Xiéshǒu-bìngjiān, gòngzhù-huīhuáng — Joining hands to create brilliance)",
                        "分道扬镳",
                        "各自为政"
                    ],
                    "answerIndex": 0,
                    "explanation": "携手并肩, 共铸辉煌 is the classic celebratory idiom for signing strategic business partnerships."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于现代商务汉语与职场公文电邮的完整规范，下列哪一项总括完全正确？",
                    "options": [
                        "商务邮件不需要问候和署名",
                        "公文只能用文言文书写",
                        "商务公函涵盖抬头称谓、自谦开篇、敬辞请求、议事决策成语及格式化结语致敬，体现了严谨尊崇的商业礼仪体系 (Encompasses salutations, modesty openings, request honorifics, action collocations, and formal closings)"
                    ],
                    "answerIndex": 2,
                    "explanation": "This comprehensively captures the structure and etiquette of modern Chinese corporate correspondence."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character phrase for 'memorandum of understanding / strategic agreement' (备忘录):",
                    "acceptedAnswers": [
                        "备忘录",
                        "beiwanglu",
                        "bèiwànglù",
                        "Bèiwànglù",
                        "Beiwanglu",
                        "備忘錄"
                    ],
                    "explanation": "备忘录 (bèiwànglù) means 'memorandum / MOU'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u21-l1": {
        "id": "zh-u21-l1",
        "unit": "zh-u21",
        "level": "B2",
        "objective": "Master the classification of China's Eight Great Cuisines (八大菜系: 鲁/川/粤/苏/闽/浙/湘/徽) and sensory gastronomic vocabulary (色香味俱全, 鲜嫩爽口, 麻辣浓郁, 清淡原汁原味).",
        "prerequisites": [
            "zh-u20-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u20-l5"
            ]
        },
        "presentation": {
            "explanation": "中国饮食文化博大精深，素有「民以食为天」之说。在长期的历史演进中，形成了著名的**八大菜系（Eight Great Cuisines）**与独特的品评美学！\n\n1. 八大菜系与地域风味概览 (Eight Great Cuisines & Flavor Profiles):\n- **鲁菜 (Lǔ)**：山东菜，北方菜之首，讲究高汤调味与爆炒脆嫩。\n- **川菜 (Chuān)**：四川菜，善用花椒与辣椒，以「麻辣鲜香、一菜一格」著称。\n- **粤菜 (Yuè)**：广东菜，选料精细，追求「清、鲜、嫩、滑、爽」与原汁原味。\n- **苏菜 (Sū)**：江苏菜（淮扬菜），刀工精细、汤清味醇、注重养生。\n- **闽、浙、湘、徽**：分别以海鲜红糟（闽）、清鲜淡雅（浙）、香辣酸辣（湘）、重油重色（徽）享誉天下。\n\n2. 美食品鉴核心语汇 (Gastronomic Descriptors):\n- **色香味俱全 (sè-xiāng-wèi jùquán)**：Appearance, aroma, and flavor all in exquisite perfection。\n- **鲜嫩多汁 (xiānnèn duōzhī)** / **原汁原味 (yuánzhī-yuánwèi)**。",
            "examples": [
                {
                    "target": "大卫在品尝扬州清炖狮子头后由衷赞叹：‘这道淮扬名菜真正做到了色香味俱全，汤清见底，肉质鲜嫩爽口、肥而不腻，完美体现了苏菜精湛的刀工与烹饪艺术！’",
                    "reading": "Dàwèi zài pǐncháng Yángzhōu qīngdùn shīzitóu hòu yóuzhōng zàntàn: ‘Zhè dào Huáiyáng míngcài zhēnzhèng zuò dào le sè-xiāng-wèi jùquán, tāng qīng jiàn dǐ, ròuzhì xiānnèn shuǎngkǒu, féi ér bú nì, wánměi tǐxiàn le Sūcài jīngzhàn de dāogōng yǔ pēngrèn yìshù!’",
                    "translation": "David praised: 'This Huaiyang classic truly achieves perfection in color, aroma, and taste; the broth is crystal clear and the meat is tender and refreshing without being greasy, embodying Jiangsu cuisine's exquisite knife skills and culinary art!'"
                },
                {
                    "target": "成都川菜大厨自豪地向食客介绍道：‘正宗的麻婆豆腐不仅讲究麻、辣、烫、香、酥、嫩、鲜，更在于选用特级汉源花椒与郫县豆瓣酱的黄金配比。’",
                    "reading": "Chéngdū Chuāncài dàchú zìháo de xiàng shíkè jièshào dào: ‘Zhèngzōng de Mápó dòufu bùjǐn jiǎngjiu má, là, tàng, xiāng, sū, nèn, xiān, gèng zàiyú xuǎnyòng tèjí Hànyuán huājiāo yǔ Píxiàn dòubànjiàng de huángjīn pèibǐ.’",
                    "translation": "The Chengdu chef introduced: 'Authentic Mapo Tofu emphasizes numbing, spicy, scalding, aromatic, crispy, tender, and fresh notes, highlighted by the golden ratio of Hanyuan peppercorns and Pixian fermented bean paste.'"
                },
                {
                    "target": "广州老茶楼里，食客们一边品茗一边享受早茶点心：‘粤菜点心讲究原汁原味、现蒸现吃，虾饺皮薄如蝉翼、虾仁晶莹剔透，令人回味无穷。’",
                    "reading": "Guǎngzhōu lǎo chálóu lǐ, shíkèmen yìbiān pǐnmíng yìbiān xiǎngshòu zǎochá diǎnxin: ‘Yuècài diǎnxin jiǎngjiu yuánzhī-yuánwèi, xiànzhēng-xiànchī, xiājiǎo pí báo rú chányì, xiārén jīngyíng-tìtòu, lìng rén huíwèi-wúqióng.’",
                    "translation": "In Guangzhou teahouse: 'Cantonese dim sum emphasizes authentic flavors and freshly steamed freshness; the shrimp dumpling skin is thin as cicada wings and the filling is translucent, leaving a lingering aftertaste.'"
                }
            ],
            "mnemonics": [
                "Culinary Excellence: 鲁川粤苏 闽浙湘徽 (8 Great Cuisines), 色香味俱全 (Color, Aroma, Taste Perfection)!"
            ],
            "culturalNotes": [
                "«民以食为天» (mín yǐ shí wéi tiān, 'food is heaven to the people') originates from the Records of the Grand Historian (史记), reflecting the supreme cultural, social, and philosophical importance of food in Chinese civilization."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "形容一道菜肴在视觉色彩、嗅觉香气和味觉口感上都达到了极致完美境界的成语是：",
                    "options": [
                        "粗制滥造",
                        "色香味俱全 (Sè-xiāng-wèi jùquán — Color, aroma, and taste all in perfection)",
                        "味同嚼蜡"
                    ],
                    "answerIndex": 1,
                    "explanation": "色香味俱全 is the classic 4-character idiom for gastronomic culinary perfection."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "以刀工精细、讲究本味、汤清鲜甜、淮扬菜为核心代表的中国菜系是：",
                    "options": [
                        "苏菜 / 江苏菜 (Sūcài / Jiangsu cuisine)",
                        "川菜",
                        "湘菜"
                    ],
                    "answerIndex": 0,
                    "explanation": "江苏菜 (苏菜 / 淮扬菜) is famed for delicate knife skills, clear broths, and authentic flavors."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国‘八大菜系’的地域风味特色，下列哪一项表述完全正确？",
                    "options": [
                        "中国所有菜系的调味方法完全相同",
                        "川菜善用麻辣与豆瓣酱，粤菜追求清鲜嫩滑与原汁原味，鲁菜讲究高汤与火候 (Chuān: numb-spicy; Yuè: freshness; Lǔ: broth & heat control)",
                        "粤菜以极度重咸重辣著称"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately contrasts the distinct flavor philosophies of Sichuan, Cantonese, and Shandong cuisines."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character idiom meaning 'food is the first necessity of the people' (民以食为天):",
                    "acceptedAnswers": [
                        "民以食为天",
                        "minyishiweitian",
                        "mínyǐshíwéitiān",
                        "Mínyǐshíwéitiān",
                        "Minyishiweitian",
                        "民以食爲天"
                    ],
                    "explanation": "民以食为天 (mínyǐshíwéitiān) means 'Food is heaven / the supreme priority to the people'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u21-l2": {
        "id": "zh-u21-l2",
        "unit": "zh-u21",
        "level": "B2",
        "objective": "Master the protocol and terminology of traditional Chinese banquet seating arrangements (主位/主陪, 主宾, 副主陪, 尚左/尚东, 虚左以待).",
        "prerequisites": [
            "zh-u21-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u21-l1"
            ]
        },
        "presentation": {
            "explanation": "在中华宴饮礼仪中，「座次（Seating Order）」直接体现了主宾关系与传统尊卑敬老的美德！\n\n1. 圆桌宴席核心座次体系 (Banquet Seating Protocol):\n- **主位 (zhǔwèi) / 主陪 (zhǔpéi)**：正对大门（正中面向入口）的位置为最尊贵的「主位」，通常由宴请的主人或地位最高者就座。\n- **主宾 (zhǔbīn)**：第一贵宾，坐在**主人的右侧**（以右为尊 / 尚东为尊）。\n- **副宾 (fùbīn)**：第二贵宾，坐在**主人的左侧**。\n- **副陪 (fùpéi)**：主人的主要助手，坐在**正对主位（背对大门）**的位置，负责结账、上菜联络与祝酒倒茶。\n\n2. 礼让与请座口语交际 (Polite Seating Dialogue):\n- **请上座 (Qǐng shàngzuò)**：Please take the seat of honor.\n- **不敢当，您是长辈/贵宾，请您上座！**",
            "examples": [
                {
                    "target": "东道主热情地引导外宾入座：‘大卫先生，您是本次学术交流的主宾，请您就座于主位右侧的第一贵宾席！’",
                    "reading": "Dōngdàozhǔ rèqíng de yǐndǎo wàibīn rùzuò: ‘Dàwèi xiānsheng, nín shì běn cì xuéshù jiāoliú de zhǔbīn, qǐng nín jiùzuò yú zhǔwèi yòucè de dì-yī guìbīnxí!’",
                    "translation": "The host warmly guided: 'Mr. David, you are the guest of honor; please take the seat to the right of the host position!'"
                },
                {
                    "target": "大卫谦逊有礼地回应：‘感谢张教授的盛情款待！您是德高望重的学界前辈，理应由您坐主位主持大局。’",
                    "reading": "Dàwèi qiānxùn-yǒulǐ de huíyìng: ‘Gǎnxiè Zhāng jiàoshòu de shèngqíng kuǎndài! Nín shì dégāo-wàngzhòng de xuéjiè qiánbèi, lǐyīng yóu nín zuò zhǔwèi zhǔchí dàjú.’",
                    "translation": "David politely responded: 'Thank you for your generous hospitality! You are an esteemed senior scholar, and rightfully should take the host seat to preside.'"
                },
                {
                    "target": "副陪在靠近门口的位置细致安排：‘请各位远道而来的学者安心就座，今晚各项服务与上菜联络由我全力负责保障。’",
                    "reading": "Fùpéi zài kàojìn ménkǒu de wèizhi xìzhì ānpái: ‘Qǐng gèwèi yuǎndào-érlái de xuézhě ānxīn jiùzuò, jīnwǎn gè xiàng fúwù yǔ shàngcài liánluò yóu wǒ quánlì fùzé bǎozhàng.’",
                    "translation": "The vice-host arranged: 'Please take your seats; I will ensure all dining coordination and service are handled seamlessly tonight.'"
                }
            ],
            "mnemonics": [
                "Seating Formula: Facing the door = Host (主位); Right hand = Guest of Honor (主宾); Facing the host = Vice Host (副陪)!"
            ],
            "culturalNotes": [
                "Traditional Chinese table etiquette holds that the seat facing the main room entrance (正对大门) is the seat of honor. Placing the guest of honor on the host's right is customary in modern formal banquets."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在正规的中国圆桌宴席中，正对大门的最中心尊位通常安排给：",
                    "options": [
                        "刚来的实习生",
                        "宴席的主持人/东道主主陪 (The host / principal presider)",
                        "背对大门的服务员"
                    ],
                    "answerIndex": 1,
                    "explanation": "The seat facing the door is the 主位/主陪 (host/presider seat)."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在商务或学术晚宴上，第一尊贵客人（主宾）的标准就座位置是：",
                    "options": [
                        "背对大门的角落",
                        "主位的右侧 (To the immediate right of the host)",
                        "离开餐桌"
                    ],
                    "answerIndex": 1,
                    "explanation": "The Guest of Honor (主宾) sits directly to the right of the Host (主位/主陪)."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国宴席座次礼仪，下列哪一项表述完全符合传统文化规范？",
                    "options": [
                        "大家进门随便乱抢座位坐",
                        "主人必须背对大门",
                        "正对大门者为主位，其右侧为主宾席，背对大门者为负责上菜协调的副陪 (Host faces door, guest of honor to right, vice host faces host)"
                    ],
                    "answerIndex": 2,
                    "explanation": "This precisely encapsulates the classical and modern standard banquet seating layout."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi term for 'Guest of Honor / Chief Guest' (主宾):",
                    "acceptedAnswers": [
                        "主宾",
                        "zhubin",
                        "zhǔbīn",
                        "Zhǔbīn",
                        "Zhubin",
                        "主賓"
                    ],
                    "explanation": "主宾 (zhǔbīn) means 'Guest of Honor'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u21-l3": {
        "id": "zh-u21-l3",
        "unit": "zh-u21",
        "level": "B2",
        "objective": "Master Chinese toasting and tea rituals (碰杯低于对方杯沿 Lower rim when clinking glasses, 扣指礼 Finger tapping thank-you, 以茶代酒 Replace wine with tea, 敬祝健康祝酒辞).",
        "prerequisites": [
            "zh-u21-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u21-l2"
            ]
        },
        "presentation": {
            "explanation": "在宴席与茶叙交流中，肢体微动作与祝酒套语体现了极高的情商与文化涵养！\n\n1. 碰杯与祝酒礼节 (Toasting Etiquette & Cup Clinking):\n- **杯沿微低 (bēiyán wēidī)**：向长辈或尊贵客人敬酒碰杯时，自己的**杯沿必须略低于对方杯沿**，以示谦逊与尊敬。\n- **双手持杯**：右手端杯、左手托住杯底，表示郑重。\n- **以茶代酒 (yǐ chá dài jiǔ)**：若不胜酒力或需开车，可礼貌说明「我以茶代酒，敬您一杯，祝您身体健康、工作顺利！」。\n\n2. 茶道扣指礼 (The Finger Tapping Kowtow Gesture / 叩指礼):\n- 当主人或他人为你倒茶时，以食指与中指微曲轻叩桌面三下，表示「叩谢（Kowtow thank-you）」而无需大声打断谈话。",
            "examples": [
                {
                    "target": "大卫在向老教授敬酒时双手端杯，并特意将自己的杯沿放低一截：‘张教授，学生敬您一杯，感谢您多年来的悉心栽培，祝您福如东海、寿比南山！’",
                    "reading": "Dàwèi zài xiàng lǎo jiàoshòu jìngjiǔ shí shuāngshǒu duānbēi, bìng tèyì jiāng zìjǐ de bēiyán fàng dī yì jié: ‘Zhāng jiàoshòu, xuésheng jìng nín yì bēi, gǎnxiè nín duōnián lái de xīxīn zāipéi, zhù nín fú rú dōnghǎi, shòu bǐ nánshān!’",
                    "translation": "David held his glass with both hands and lowered his glass rim: 'Professor Zhang, I toast to you; thank you for your devoted guidance, wishing you longevity and good fortune!'"
                },
                {
                    "target": "商务宴请中，外宾礼貌致辞：‘由于今晚还要赶往机场，我在此以茶代酒，敬各位合作伙伴一杯，预祝我们双方的合作圆满成功！’",
                    "reading": "Shāngwù yànqǐng zhōng, wàibīn lǐmào zhìcí: ‘Yóuyú jīnwǎn hái yào gǎnwǎng jīchǎng, wǒ zài cǐ yǐ chá dài jiǔ, jìng gèwèi hézuò huǒbàn yì bēi, yùzhù wǒmen shuāngfāng de hézuò yuánmǎn chénggōng!’",
                    "translation": "At the business dinner: 'Since I must head to the airport tonight, I hereby replace wine with tea to toast our partners, wishing our collaboration resounding success!'"
                },
                {
                    "target": "在茶艺馆品茶时，主人为大卫添茶，大卫自然地用食指与中指在桌面上轻叩两下以表谢意，赢得了茶艺师的高度赞赏。",
                    "reading": "Zài cháyìguǎn pǐnchá shí, zhǔrén wèi Dàwèi tiānchá, Dàwèi zìrán de yòng shízǐ yǔ zhōngzhǐ zài zhuōmiàn shang qīngkòu liǎng xià yǐ biǎo xièyì, yíngdé le cháyìshī de gāodù zànshǎng.",
                    "translation": "When the host refilled tea, David naturally tapped his fingers on the table to show gratitude, winning high praise from the tea master."
                }
            ],
            "mnemonics": [
                "Toast & Tea: Rim below rim (谦逊碰杯), Two hands hold cup (双手托底), Finger tap for tea (叩指谢茶), 以茶代酒 (Replace wine with tea)!"
            ],
            "culturalNotes": [
                "The finger tapping gesture (扣指礼 kòuzhǐlǐ) is believed to originate from the Qianlong Emperor's covert tours south of the Yangtze River, where officials tapped fingers to signify kowtowing without blowing the emperor's cover."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "向长辈、导师或贵宾敬酒碰杯时，最规范的礼貌细节是：",
                    "options": [
                        "把杯子举得比对方高很多",
                        "自己的杯沿略低于对方杯沿，双手托杯 (Lower glass rim below recipient's & hold with two hands)",
                        "直接把酒洒在桌上"
                    ],
                    "answerIndex": 1,
                    "explanation": "Lowering one's cup rim slightly below the counterpart's is the universal Chinese sign of modesty and respect."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在喝茶添茶时，客人用食指与中指在桌面上轻叩两三下表达谢意的传统礼节被称为：",
                    "options": [
                        "叩指礼 / 扣指礼 (Finger tapping gesture)",
                        "拍桌子抗议",
                        "划拳"
                    ],
                    "answerIndex": 0,
                    "explanation": "叩指礼 (kòuzhǐlǐ) is the traditional tacit gesture of gratitude during tea service."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "如果在宴席上因身体原因或驾驶需要不能饮酒，最得体周到的祝酒用语是：",
                    "options": [
                        "我以茶代酒，敬大家一杯，祝大家事业顺遂 (I replace wine with tea to toast you all...)",
                        "你们喝你们的，我不理你们",
                        "酒不好喝，我不喝"
                    ],
                    "answerIndex": 0,
                    "explanation": "以茶代酒 is the classic, gracious phrase to toast without consuming alcohol."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character phrase for 'substituting tea for wine in a toast' (以茶代酒):",
                    "acceptedAnswers": [
                        "以茶代酒",
                        "yichadaijiu",
                        "yǐchádàijiǔ",
                        "Yǐchádàijiǔ",
                        "Yichadaijiu"
                    ],
                    "explanation": "以茶代酒 (yǐ chá dài jiǔ) means 'to substitute tea for wine'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u21-l4": {
        "id": "zh-u21-l4",
        "unit": "zh-u21",
        "level": "B2",
        "objective": "Master the grammar and menu composition principles of hosting a banquet (凉热搭配 cold & hot dishes, 荤素相宜 meat & vegetable balance, 咸甜适中, 忌口 dietary restrictions/allergies).",
        "prerequisites": [
            "zh-u21-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u21-l3"
            ]
        },
        "presentation": {
            "explanation": "在中国作为东道主安排宴席时，「点菜（Menu Composition）」是一门极讲究平衡与体贴客人的高超学问！\n\n1. 传统中餐点菜结构黄金法则 (The Golden Rules of Chinese Menu Planning):\n- **凉热搭配 (liáng-rè dāpèi)**：先上4–6道开胃冷盘凉菜，再上热炒与硬菜（招牌主菜）。\n- **荤素相宜 (hūn-sù xiāngyí)**：肉类与时令蔬菜均衡配比，荤素比例通常为 6:4 或 5:5。\n- **干稀搭配与主食收尾**：有汤羹有干炒，最后呈上特色面点主食与时令鲜果甜品。\n\n2. 礼貌询问客人的饮食习惯与忌口 (Inquiring Dietary Restrictions):\n- **请问各位在饮食上有什么忌口吗？** (Do you have any dietary restrictions/allergies?)\n- **您对海鲜/花生过敏吗？有没有人不吃辣或只吃清真/素食？**\n- **客人回应**：我**对 [海鲜/花生] 过敏** / 我**忌辛辣** / 我**吃素**。",
            "examples": [
                {
                    "target": "大卫作为东道主在点菜前细心征询每位客人的意见：‘请问各位老师在饮食上有什么忌口吗？比如是否吃辣、有没有对海鲜或坚果过敏的朋友？’",
                    "reading": "Dàwèi zuòwéi dōngdàozhǔ zài diǎncài qián xìxīn zhēnxún měi wèi kèrén de yìjiàn: ‘Qǐngwèn gèwèi lǎoshī zài yǐnshí shang yǒu shénme jìkǒu ma? Bǐrú shìfǒu chī là, yǒu méiyǒu duì hǎixiān huò jiānguǒ guòmǐn de péngyou?’",
                    "translation": "David as host inquired: 'Do you have any dietary restrictions? For instance, whether you eat spicy food, or anyone is allergic to seafood or nuts?'"
                },
                {
                    "target": "餐厅领班熟练地为宴席推荐菜单：‘我们今晚安排了四道精美冷碟开胃，主菜有北京烤鸭与清蒸石斑鱼，搭配两道有机时蔬与西湖牛肉羹，做到荤素相宜、凉热兼备！’",
                    "reading": "Cāntīng lǐngbān shúliàn de wèi yànxí tuījiàn càidān: ‘Wǒmen jīnwǎn ānpái le sì dào jīngměi lěngdié kāiwèi, zhǔcài yǒu Běijīng kǎoyā yǔ qīngzhēng shíbānyú, dāpèi liǎng dào yǒujī shíshū yǔ Xīhú niúròugēng, zuò dào hūnsù-xiāngyí, liángrè-jiānbèi!’",
                    "translation": "The head waiter recommended: 'Tonight we prepared four cold appetizers, main dishes of Peking Roast Duck and steamed grouper, matched with seasonal vegetables and West Lake beef soup, achieving perfect meat-veg and cold-hot harmony!'"
                },
                {
                    "target": "素食学者微笑着向服务员说明：‘我平时常年吃素，麻烦后厨帮我准备一份清炒时蔬与罗汉斋即可，非常感谢！’",
                    "reading": "Sùshí xuézhě wēixiào de xiàng fúwùyuán shuōmíng: ‘Wǒ píngshí chángnián chī sù, máfan hòuchú bāng wǒ zhǔnbèi yí fèn qīngchǎo shíshū yǔ Luóhànzhāi jíkě, fēicháng gǎnxiè!’",
                    "translation": "The vegetarian scholar explained: 'I have been a long-time vegetarian; could the kitchen please prepare stir-fried greens and Luohan vegetarian stew for me? Thank you very much!'"
                }
            ],
            "mnemonics": [
                "Menu Planning: 凉热搭配 (Cold & Hot), 荤素相宜 (Meat & Greens), 汤羹主食 (Soup & Staple), 问清忌口 (Check Allergies)!"
            ],
            "culturalNotes": [
                "In Chinese culture, a hospitable host always orders slightly more than needed and ensures a harmonious variety of tastes (sweet, savory, sour, spicy) to express abundance and generosity."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在正式宴席点菜前，东道主询问客人的饮食习惯，最得体周全的问话是：",
                    "options": [
                        "你们快点自己选",
                        "请问各位有什么忌口或过敏吗？(Qǐngwèn gèwèi yǒu shénme jìkǒu huò guòmǐn ma? — Courteous host inquiry)",
                        "大家都必须吃辣"
                    ],
                    "answerIndex": 1,
                    "explanation": "询问忌口与过敏 is the essential courteous step before ordering a formal Chinese meal."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "成语‘荤素相宜’在中餐菜单设计中指：",
                    "options": [
                        "全部都是肉类",
                        "肉类菜肴与蔬菜菜肴比例均衡、健康协调 (Harmonious balance between meat and vegetable dishes)",
                        "完全不加盐"
                    ],
                    "answerIndex": 1,
                    "explanation": "荤素相宜 means a healthy, delicious balance between meat (荤) and vegetable (素) dishes."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国传统宴席菜单的搭配原则，下列哪一项完全正确？",
                    "options": [
                        "只能全部上冷菜",
                        "只能上肉菜不能上蔬菜",
                        "讲究凉热搭配、荤素相宜、有汤有主食，口感层次丰富且兼顾各方忌口 (Harmonious hot/cold, meat/veg, soup/staple balance honoring dietary needs)"
                    ],
                    "answerIndex": 2,
                    "explanation": "This expresses the complete aesthetic and nutritional philosophy of Chinese meal composition."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi term for 'dietary restrictions / taboos in food' (忌口):",
                    "acceptedAnswers": [
                        "忌口",
                        "jikou",
                        "jìkǒu",
                        "Jìkǒu",
                        "Jikou"
                    ],
                    "explanation": "忌口 (jìkǒu) means 'dietary restriction / food taboo'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u21-l5": {
        "id": "zh-u21-l5",
        "unit": "zh-u21",
        "level": "B2",
        "objective": "Synthesize all culinary and banquet discourse (Eight cuisines, Seating hierarchy, Clinking & Toasting protocol, Menu composition, Cultural metaphors) into high-level international reception feasts and state banquets.",
        "prerequisites": [
            "zh-u21-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u21-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第二十一单元的所有中华饮食美学与宴席礼仪体系，在国宾招待宴会与跨国文化交流晚宴的最高语境中进行实战演练！\n\n1. 中华饮食文化与宴席礼仪全景矩阵 (Master Banquet & Dining Matrix):\n| 礼仪与美学维度 | 核心文化程式 | 典型高级应用范例 |\n| :--- | :--- | :--- |\n| **菜系与品味** | 鲁川粤苏 / 色香味俱全 | 汇聚八方风味，展现博大饮食文化 |\n| **座次规范** | 正对大门主位 / 主宾居右 / 副陪居下 | 尊师重道，严谨周密安排宾客座次 |\n| **敬酒茶道** | 杯沿微低 / 扣指致谢 / 以茶代酒 | 谦逊有礼，祝颂健康与合作共赢 |\n| **点菜配伍** | 凉热搭配 / 荤素相宜 / 细询忌口 | 体贴入微，彰显待客之道的周全 |\n| **饮食哲学** | 食不厌精，脍不厌细 / 和而不同 | 借美食通达文化，促进文明互鉴 |\n\n2. 第二十一单元实战交际演练 (Unit 21 State Banquet & Gala Feast):\n- 国际汉学高端招待宴会致辞、菜品鉴赏与跨文化交流盛宴。",
            "examples": [
                {
                    "target": "在国际青年学者联谊晚宴上，大会主席举杯向全体中外嘉宾致祝酒辞：‘有朋自远方来，不亦乐乎！今晚我们以中华传统美食为媒，汇聚八方贤朋，愿大家在品尝地道佳肴的同时，加深友谊、增进理解，共同为世界文化交流谱写崭新篇章！’",
                    "reading": "Zài guójì qīngnián xuézhě liányí wǎnyàn shang, dàhuì zhǔxí jǔbēi xiàng quántǐ zhōng-wài jiābīn zhì zhùjiǔcí: ‘Yǒu péng zì yuǎnfāng lái, bú yì yuè hū! Jīnwǎn wǒmen yǐ Zhōnghuá chuántǒng měishí wéi méi, huìjù bāfāng xiánpéng, yuàn dàjiā zài pǐncháng dìdao jiāyáo de tóngshí, jiāshēn yǒuyì, zēngjìn lǐjiě, gòngtóng wèi shìjiè wénhuà jiāoliú pǔxiě zhǎnxīn piānzhāng!’",
                    "translation": "The banquet president toasted: 'How delightful it is to have friends coming from afar! Tonight, using traditional Chinese culinary art as our bridge, we gather esteemed friends from all quarters; may you deepen friendship and mutual understanding while savoring authentic delicacies!'"
                },
                {
                    "target": "大卫在代表国际学者致答谢词时深情说道：‘这几天我们不仅领略了中国菜肴色香味俱全的非凡魅力，更在座次、碰杯与茶道礼仪中深深体会到了中华文明温良恭俭让的博大胸怀与待客之诚！在此谨以茶代酒，向全体主办方致以最诚挚的谢意！’",
                    "reading": "Dàwèi zài dàibiǎo guójì xuézhě zhì dáxiècí shí shēnqíng shuō dào: ‘Zhè jǐ tiān wǒmen bùjǐn lǐnglüè le Zhōngguó càiyáo sè-xiāng-wèi jùquán de fēifán mèilì, gèng zài zuòcì, pèngbēi yǔ cháyì lǐyí zhōng shēnshēn tǐhuì dào le Zhōnghuá wénmíng wēn-liáng-gōng-jiǎn-ràng de bódà xiōnghuái yǔ dàikè zhī chéng! Zài cǐ jǐn yǐ chá dài jiǔ, xiàng quántǐ zhǔbànfāng zhìyǐ zuì chéngzhì de xièyì!’",
                    "translation": "David replied: 'Over these days, we not only savored the extraordinary perfection of Chinese culinary arts, but also deeply felt the magnanimity and sincerity of Chinese civilization through banquet etiquette and tea rituals! Hereby replacing wine with tea, I extend our heartfelt thanks!'"
                },
                {
                    "target": "文化评论员在专栏中总结：‘中华饮食文化绝非单纯的口腹之欲，而是融汇了五行相生、阴阳调和与天人合一深厚哲理的物质与精神文化瑰宝！’",
                    "reading": "Wénhuà pínglùnyuán zài zhuānlán zhōng zǒngjié: ‘Zhōnghuá yǐnshí wénhuà juéfēi dānchún de kǒufù-zhī-yù, ér shì rónghuì le wǔxíng-xiāngshēng, yīnyáng-tiáohé yǔ tiānrén-héyī shēnhòu zhélǐ de wùzhì yǔ jīngshén wénhuà guībǎo!’",
                    "translation": "The cultural commentator wrote: 'Chinese culinary culture is by no means mere gratification of the palate, but a cultural treasure fusing the deep philosophies of Yin-Yang harmony, Five Elements, and the unity of humanity with nature!'"
                }
            ],
            "mnemonics": [
                "Feast Master: Food as Bridge (美食为媒), Seating & Toasts (礼貌周全), Harmony in Diversity (和而不同), Sincere Hospitality (待客之诚)!"
            ],
            "culturalNotes": [
                "Confucius in the Analects famously stated «食不厌精，脍不厌细» (shí bù yàn jīng, kuài bù yàn xì — food can never be too clean, nor minced meat too fine), establishing the thousand-year aesthetic standard for Chinese gastronomy."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "孔子在《论语》中提出、用以形容对待烹饪美食精益求精态度的名言是：",
                    "options": [
                        "食不厌精，脍不厌细 (Food can never be too refined...)",
                        "随便应付",
                        "囫囵吞枣"
                    ],
                    "answerIndex": 0,
                    "explanation": "食不厌精，脍不厌细 is Confucius's classic statement on culinary refinement and perfection."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在大型国际文化交流晚宴上，致辞中用成语表达‘以中华传统美食作为沟通交流的桥梁纽带’的是：",
                    "options": [
                        "以美食为媒 (Taking gourmet cuisine as the medium/bridge)",
                        "对牛弹琴",
                        "闭门造车"
                    ],
                    "answerIndex": 0,
                    "explanation": "以……为媒 (taking ... as the medium/bridge) is the classic high-register expression for cultural connectivity."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中华饮食文化与宴席礼仪体系的综合认知，下列哪一项总括完全正确？",
                    "options": [
                        "中华饮食只是填饱肚子，没有任何文化内涵",
                        "宴席上必须所有人喝醉才算有礼貌",
                        "中华饮食文化融汇了八大菜系的技艺精髓、严谨温润的座次与祝酒礼节，以及阴阳调和、天人合一的哲学智慧 (Fuses 8 cuisines, respectful banquet rituals, and harmony philosophies)"
                    ],
                    "answerIndex": 2,
                    "explanation": "This comprehensively captures the rich cultural, philosophical, and social dimensions of Chinese dining."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Confucian idiom meaning 'food can never be too refined / pursuit of culinary perfection' (食不厌精):",
                    "acceptedAnswers": [
                        "食不厌精",
                        "shibuyanjing",
                        "shíbùyànjīng",
                        "Shíbùyànjīng",
                        "Shibuyanjing",
                        "食不厭精"
                    ],
                    "explanation": "食不厌精 (shíbùyànjīng) means 'food can never be too refined / striving for perfection in food'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u22-l1": {
        "id": "zh-u22-l1",
        "unit": "zh-u22",
        "level": "B2",
        "objective": "Master urban metro navigation terminology and syntactic structures (换乘站 interchange station, 途经 stations en route, 始发站/终点站 origin/terminus, 首末班车 first/last train, 扫码乘车 scan QR to ride).",
        "prerequisites": [
            "zh-u21-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u21-l5"
            ]
        },
        "presentation": {
            "explanation": "中国主要大城市拥有世界上规模最庞大、技术最先进的城市轨道交通网络！\n\n1. 轨道交通核心术语与句式 (Metro & Urban Rail Terminology):\n- **换乘 (huànchéng)**：在地铁不同线路之间转换：\n  - 在人民广场站**换乘**地铁二号线 (Transfer to Line 2 at People's Square Station)。\n- **途经 / 经由 (tújīng / jīngyóu)**：列车行驶经过的站点：\n  - 本趟列车**途经**金融街、科技园，最终抵达国际机场。\n- **始发站 (shǐfāzhàn)** / **终点站 (zhōngdiǎnzhàn)**：线路起点与终点。\n- **首末班车时间 (shǒu-mò bānchē)**：首班车（First train）与末班车（Last train）。\n\n2. 智慧扫码与进出站 (Smart Access & Ticketing):\n- **扫码过闸 (sǎomǎ guòzhá)** / **刷脸进站** / **无感支付**。",
            "examples": [
                {
                    "target": "地铁车厢广播清晰播报：‘列车运行前方是世纪大道站，该站是二、四、六、九号线的四线换乘枢纽站，请前往浦东国际机场方向的乘客在此站换乘二号线。’",
                    "reading": "Dìtiě chēxiāng guāngbō qīngxī bōbào: ‘Lièchē yùnxíng qiánfāng shì Shìjì Dàdào zhàn, gāi zhàn shì èr, sì, liù, jiǔ hào xiàn de sì-xiàn huànchéng shūniǔzhàn, qǐng qiánwǎng Pǔdōng Guójì Jīchǎng fāngxiàng de chéngkè zài cǐ zhàn huànchéng èr hào xiàn.’",
                    "translation": "The metro broadcast announced: 'The next station is Century Avenue, a 4-line transfer hub for Lines 2, 4, 6, and 9; passengers heading for Pudong International Airport please transfer to Line 2 here.'"
                },
                {
                    "target": "大卫在手机交通App上查询路线：‘从北京大学出发乘坐四号线，在海淀黄庄换乘十号线，全程仅需四十分钟，刷手机乘车码即可直接过闸！’",
                    "reading": "Dàwèi zài shǒujī jiāotōng App shang cháxún lùxiàn: ‘Cóng Běijīng Dàxué chūfā chéngzuò sì hào xiàn, zài Hǎidiàn Huángzhuāng huànchéng shí hào xiàn, quánchéng jǐn xū sìshí fēnzhōng, shuā shǒujī chéngchēmǎ jíkě zhíjiē guòzhá!’",
                    "translation": "David checked routes on his app: 'Departing from Peking University on Line 4 and transferring to Line 10 at Haidian Huangzhuang takes only 40 minutes, and scanning the mobile QR code allows direct gate passing!'"
                },
                {
                    "target": "站务员热情地为外地游客指路：‘十号线是环线列车，首班车清晨五点十分发车，末班车晚上十一点整由终点站发出。’",
                    "reading": "Zhànwùyuán rèqíng de wèi wàidì yóukè zhǐlù: ‘Shí hào xiàn shì huánxiàn lièchē, shǒubānchē qīngchén wǔ diǎn shí fēn fāchē, mòbānchē wǎnshang shíyī diǎn zhěng yóu zhōngdiǎnzhàn fāchū.’",
                    "translation": "The station agent directed: 'Line 10 is a loop line; the first train departs at 5:10 AM and the last train departs from the terminus at 11:00 PM.'"
                }
            ],
            "mnemonics": [
                "Metro Navigation: 换乘 (Transfer), 途经 (Pass through), 始发/终点 (Start/End), 扫码过闸 (Scan to pass)!"
            ],
            "culturalNotes": [
                "Modern Chinese cities utilize unified transit QR codes (乘车码) and interoperable digital transport cards across metro, bus, ferry, and maglev lines nationwide."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在地铁中表达‘从现在的地铁线路转换到另一条线路’的专业动词是：",
                    "options": [
                        "倒退",
                        "换乘 (Huànchéng — Transfer lines)",
                        "迷路"
                    ],
                    "answerIndex": 1,
                    "explanation": "换乘 (huànchéng) is the standard term for transferring between transit lines."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "句子‘本趟列车是由北京南站开往上海虹桥站的高铁列车’中，‘北京南站’是这趟车的：",
                    "options": [
                        "始发站 (Originating station / Start station)",
                        "终点站",
                        "维修站"
                    ],
                    "answerIndex": 0,
                    "explanation": "始发站 (shǐfāzhàn) is the departure/originating station."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于城市轨道交通系统的术语，下列哪一项完全正确？",
                    "options": [
                        "换乘站是指只能上一条线路的车站",
                        "始发站是终点站的反义词，首末班车指最早与最晚发车时刻 (始发: origin vs 终点: terminus; 首末班车: first/last trains)",
                        "扫码过闸必须使用纸质车票"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately defines the key operational terms of the metro network."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi term for 'transferring between transport lines' (换乘):",
                    "acceptedAnswers": [
                        "换乘",
                        "huancheng",
                        "huànchéng",
                        "Huànchéng",
                        "Huancheng",
                        "換乘"
                    ],
                    "explanation": "换乘 (huànchéng) means 'to transfer / change trains'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u22-l2": {
        "id": "zh-u22-l2",
        "unit": "zh-u22",
        "level": "B2",
        "objective": "Master high-speed rail (HSR) terminology and ticketing discourse (高铁 HSR, 复兴号 Fuxing EMU, 商务座 Business Class, 候补购票 standby waitlist, 刷身份证进站 e-ticket ID verification).",
        "prerequisites": [
            "zh-u22-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u22-l1"
            ]
        },
        "presentation": {
            "explanation": "中国高铁（China High-Speed Railway）以其飞驰的「复兴号」列车与四通八达的八纵八横网络闻名世界！\n\n1. 高铁席别与票务术语 (HSR Seat Classes & Ticketing System):\n- **席别 (xíbié)**：**商务座 (Business Class)**、**一等座 (First Class)**、**二等座 (Second Class)**。\n- **候补购票 (hòubǔ gòupiào)**：当车票售罄时，在铁路12306官方平台登记需求排队系统自动兑现车票（Standby Waitlist Ticketing）。\n- **电子客票 (diànzǐ kèpiào)**：无需换取纸质车票，直接**刷二代身份证或护照**便捷进出站。\n\n2. 高铁运行与旅行语汇 (HSR Travel Expressions):\n- **时速达350公里** / **准点率极高** / **千里江陵一日还**。",
            "examples": [
                {
                    "target": "大卫通过铁路官方App订购车票：‘京沪高铁复兴号列车最高运营时速达350公里，从北京南站到上海虹桥站一千三百多公里仅需四个半小时，刷护照即可秒速进站！’",
                    "reading": "Dàwèi tōngguò tiělù guānfāng App dìnggòu chēpiào: ‘Jīng-Hù gāotiě Fùxīnghào lièchē zuìgāo yùnyíng shísù dá 350 gōnglǐ, cóng Běijīng Nánzhàn dào Shànghǎi Hóngqiáo zhàn yìqiān sānbǎi duō gōnglǐ jǐn xū sì gè bàn xiǎoshí, shuā hùzhào jíkě miǎosù jìnzhàn!’",
                    "translation": "David booked tickets: 'The Beijing-Shanghai HSR Fuxing train reaches 350 km/h; the 1,300+ km from Beijing South to Shanghai Hongqiao takes just 4.5 hours, and scanning passports allows second-speed entry!'"
                },
                {
                    "target": "客运广播在大厅响起：‘乘坐G123次列车前往杭州东站的旅客请注意，您的列车已经开始检票，请持有效身份证件在A12检票口排队进站。’",
                    "reading": "Kèyùn guāngbō zài dàtīng xiǎngqǐ: ‘Chéngzuò G123 cì lièchē qiánwǎng Hángzhōu Dōngzhàn de lǚkè qǐng zhùyì, nín de lièchē yǐjīng kāishǐ jiǎnpiào, qǐng chí yǒuxiào shēnfèn zhèngjiàn zài A12 jiǎnpiàokǒu páiduì jìnzhàn.’",
                    "translation": "The passenger announcement echoed: 'Passengers for train G123 to Hangzhou East, your train has started boarding; please hold valid ID and line up at boarding gate A12.'"
                },
                {
                    "target": "春运期间，李明向朋友分享经验：‘即使热门车次的车票暂时售罄也不必惊慌，只要在12306平台上提交候补订单，系统会在有退票或加开列车时第一时间自动成功兑现！’",
                    "reading": "Chūnyùn qījiān, Lǐ Míng xiàng péngyou fēnxiǎng jīngyàn: ‘Jíshǐ rèmén chēcì de chēpiào zànshí shòuqìng yě búbì jīnghuāng, zhǐyào zài 12306 píngtái shang tíjiāo hòubǔ dìngdān, xìtǒng huì zài yǒu tuìpiào huò jiākāi lièchē shí dì-yī shíjiān zìdòng chénggōng duìxiàn!’",
                    "translation": "Li Ming shared: 'Even if popular tickets sell out, just submit a standby waitlist order on 12306, and the system will automatically fulfill the ticket immediately upon cancellations or added trains!'"
                }
            ],
            "mnemonics": [
                "HSR Mastery: 高铁复兴号 (350km/h), 商务/一等/二等座 (Classes), 候补购票 (Standby), 刷证进站 (ID Entry)!"
            ],
            "culturalNotes": [
                "The China Railway 12306 system is the world's largest real-time passenger ticketing network, processing billions of transactions smoothly during the annual Spring Festival Travel Rush (春运 Chūnyùn)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在中国铁路购票系统中，当心仪车次售罄时，旅客提交排队需求由系统自动抢票兑现的功能被称为：",
                    "options": [
                        "盲目等待",
                        "候补购票 (Hòubǔ gòupiào — Standby waitlist ticketing)",
                        "退票惩罚"
                    ],
                    "answerIndex": 1,
                    "explanation": "候补购票 (hòubǔ gòupiào) is the official automated standby ticketing system on China Railway 12306."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "中国自主研发、具有完全知识产权并在高铁线路上常态化以350公里时速运营的高铁动车组型号是：",
                    "options": [
                        "蒸汽机车",
                        "复兴号 (Fùxīng Hào — Fuxing bullet train)",
                        "拖拉机"
                    ],
                    "answerIndex": 1,
                    "explanation": "复兴号 (Fùxīng Hào) is China's flagship indigenous high-speed EMU operating at 350 km/h."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国高铁旅行与乘车流程，下列哪一项完全正确？",
                    "options": [
                        "必须提前三天去火车站排队买纸质票",
                        "高铁上严禁使用手机",
                        "全面推行电子客票，乘客持身份证或护照在闸机刷证核验即可便捷进站乘车 (E-tickets enabled; swipe ID/passport at automated gates)"
                    ],
                    "answerIndex": 2,
                    "explanation": "E-ticketing allows travelers to board seamlessly by scanning their ID card or passport."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi name of China's premier 350km/h high-speed bullet train (复兴号):",
                    "acceptedAnswers": [
                        "复兴号",
                        "fuxinghao",
                        "fùxīnghào",
                        "Fùxīnghào",
                        "Fuxinghao",
                        "復興號"
                    ],
                    "explanation": "复兴号 (Fùxīng Hào) is China's flagship high-speed train."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u22-l3": {
        "id": "zh-u22-l3",
        "unit": "zh-u22",
        "level": "B2",
        "objective": "Master the language of ride-hailing apps, digital mapping navigation, and shared bikes (网约车 ride-hailing, 实时定位 real-time positioning, 路线规划 route planning, 共享单车 shared bike, 电子围栏 electronic geo-fence).",
        "prerequisites": [
            "zh-u22-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u22-l2"
            ]
        },
        "presentation": {
            "explanation": "智能手机与移动互联网深度重塑了中国城市的日常微出行与智慧生活！\n\n1. 网约车与地图导航指令 (Ride-Hailing & Map Navigation Expressions):\n- **定位出发地与目的地**：系统**精准定位 (jīngzhǔn dìngwèi)** 当前上车点。\n- **路线规划 (lùxiàn guīhuà)**：根据实时路况推荐「用时最短」「躲避拥堵」或「高速优先」方案。\n- **与司机沟通**：‘师傅您好，我已经到达**A出口路边辅路**，尾号是8888。’\n\n2. 共享单车与绿色骑行 (Shared Bikes & Micro-Mobility):\n- **扫码开锁 (sǎomǎ kāisuǒ)** / **按分钟计费**。\n- **电子围栏 (diànzǐ wéilán)** / **定点停放 (dìngdiǎn tíngfàng)**：规范停放在指定的「P点」停车白线框内。",
            "examples": [
                {
                    "target": "大卫在手机上使用网约车软件叫车：‘师傅，我已在科技园区正门北侧的临时停靠点等待，我的手机尾号是6789，请您打双闪靠边停靠。’",
                    "reading": "Dàwèi zài shǒujī shang shǐyòng wǎngyuēchē ruǎnjiàn jiàochē: ‘Shīfu, wǒ yǐ zài kējì yuánqū zhèngmén běicè de línshí tíngkàodiǎn děngdài, wǒ de shǒujī wěihào shì 6789, qǐng nín dǎ shuāngshǎn kàobiān tíngkào.’",
                    "translation": "David called a ride: 'Driver, I am waiting at the temporary drop-off spot north of the tech park main gate; the last 4 digits of my phone are 6789, please turn on hazard lights and pull over.'"
                },
                {
                    "target": "数字地图语音智能播报：‘前方路段车流量较大、通行缓慢，已为您自动重新规划路线，经由右侧辅路绕行可节省十二分钟。’",
                    "reading": "Shùzì dìtú yǔyīn zhìnéng bōbào: ‘Qiánfāng lùduàn chēliúliàng jiàodà, tōngxíng huǎnmàn, yǐ wèi nín zìdòng chóngxīn guīhuà lùxiàn, jīngyóu yòucè fǔlù ràoxíng kě jiéshěng shí'èr fēnzhōng.’",
                    "translation": "Digital map voice announced: 'Traffic ahead is heavy; a new route has been planned, detouring via the right side road saves 12 minutes.'"
                },
                {
                    "target": "大学生在地铁口扫码骑行：‘解决城市最后一公里出行的最佳方式就是共享单车，扫码即开、随骑随停，但在还车时必须规范停放在电子围栏指定区域内。’",
                    "reading": "Dàxuéshēng zài dìtiěkǒu sǎomǎ qíxíng: ‘Jiějué chéngshì zuìhòu yì gōnglǐ chūxíng de zuìjiā fāngshì jiù shì gòngxiǎng dānchē, sǎomǎ jí kāi, suí qí suí tíng, dàn zài huánchē shí bìxū guīfàn tíngfàng zài diànzǐ wéilán zhǐdìng qūyù nèi.’",
                    "translation": "The student rode a shared bike: 'The best way to solve the last mile problem is shared bikes; scan to unlock and ride freely, but when returning you must park inside the designated geo-fence.'"
                }
            ],
            "mnemonics": [
                "Smart City Travel: 网约车 (Call ride), 导航规划 (Map routing), 最后一公里 (Last Mile), 共享单车 (Shared bikes)!"
            ],
            "culturalNotes": [
                "The 'Last Mile' (最后一公里) concept in Chinese urban planning refers to the short trip connecting mass transit hubs to one's final destination, seamlessly bridged by dockless shared bicycles."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在与网约车司机电话核对身份与上车位置时，乘客最常用的简练报数方式是：",
                    "options": [
                        "报出手机后四位尾号与具体地标特征 (Report last 4 digits of phone & landmark)",
                        "把整个身份证号码读一遍",
                        "什么都不说"
                    ],
                    "answerIndex": 0,
                    "explanation": "报手机尾号 (reporting the last 4 digits of the phone) and naming the exact landmark is universal etiquette for ride-hailing."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "共享单车为了防止乱停乱放、引导用户在指定区域规范还车而采用的技术手段是：",
                    "options": [
                        "人工铁锁",
                        "电子围栏 / 定点还车 (Electronic geo-fence / Designated parking)",
                        "禁止所有人骑车"
                    ],
                    "answerIndex": 1,
                    "explanation": "电子围栏 (diànzǐ wéilán) uses GPS geo-fencing to ensure orderly parking."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国城市‘智慧出行’生态系统，下列哪一项表述完全正确？",
                    "options": [
                        "城市里没有任何数字导航和移动支付工具",
                        "网约车实时定位、数字地图智能避堵与共享单车无缝衔接，构建了高效的低碳绿色出行网络 (Ride-hailing, smart map rerouting, and shared bikes form a seamless green transit network)",
                        "共享单车可以随意扔在马路正中间"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately synthesizes the digital micro-mobility ecosystem."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi term for 'shared bicycle' (共享单车):",
                    "acceptedAnswers": [
                        "共享单车",
                        "gongxiangdanche",
                        "gòngxiǎngdānchē",
                        "Gòngxiǎngdānchē",
                        "Gongxiangdanche",
                        "共享單車"
                    ],
                    "explanation": "共享单车 (gòngxiǎng dānchē) means 'shared bicycle'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u22-l4": {
        "id": "zh-u22-l4",
        "unit": "zh-u22",
        "level": "B2",
        "objective": "Master the discourse of e-commerce parcel delivery, smart pickup lockers, and on-demand delivery (快递 parcel/courier, 智能快递柜 smart locker, 取件码 pickup PIN, 即时配送 on-demand delivery, 半日达 half-day delivery).",
        "prerequisites": [
            "zh-u22-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u22-l3"
            ]
        },
        "presentation": {
            "explanation": "中国高度发达的现代化**智慧物流与即时配送（Smart Logistics & On-demand Delivery）**，是全球数字化生活体验的标杆！\n\n1. 快递派送与自提柜取件 (Express Parcels & Smart Lockers):\n- **派件中 (pàijiàn zhōng)**：快递员正在派送包裹。\n- **智能快递柜 / 丰巢柜 (zhìnéng kuàidìguì)**：无人智能自提柜。\n- **取件码 (qǔjiànmǎ)**：由数字或条形码组成的取件凭证：\n  - 您的包裹已暂存至北门丰巢快递柜，凭**取件码 5849** 免费取件。\n- **送货上门 (sònghuò shàngmén)**：送至家门口。\n\n2. 即时零售与外卖配送 (On-Demand Delivery & Food Delivery):\n- **半日达 (bànrì dá)** / **小时达** / **骑手正在火速配送中**。",
            "examples": [
                {
                    "target": "大卫收到快递服务短信提示：‘尊敬的客户，您的顺丰特快包裹已送达公寓智能快递柜，请于24小时内凭取件码8653前往开柜领取。’",
                    "reading": "Dàwèi shōudào kuàidì fúwù duǎnxìn tíshì: ‘Zūnjìng de kèhù, nín de Shùnfēng tèkuài bāoguǒ yǐ sòngdá gōngyù zhìnéng kuàidìguì, qǐng yú 24 xiǎoshí nèi píng qǔjiànmǎ 8653 qiánwǎng kāiguì lǐngqǔ.’",
                    "translation": "David received an SMS: 'Dear customer, your SF Express package has arrived at the apartment smart locker; please use pickup code 8653 to unlock and collect within 24 hours.'"
                },
                {
                    "target": "外卖骑手致电订餐用户：‘您好，我是美团外卖骑手，您订购的热腾腾的午餐已经送达写字楼一楼外卖自提架，祝您用餐愉快！’",
                    "reading": "Wàimài qíshǒu zhìdiàn dìngcān yònghù: ‘Nínhǎo, wǒ shì Měituán wàimài qíshǒu, nín dìnggòu de rèténgténg de wǔcān yǐjīng sòngdá xièzìlóu yī lóu wàimài zìtíjià, zhù nín yòngcān yúkuài!’",
                    "translation": "The delivery rider called: 'Hello, this is the Meituan rider; your piping-hot lunch has arrived at the 1st-floor office pickup rack, enjoy your meal!'"
                },
                {
                    "target": "电商平台物流总监在研讨会上介绍：‘依托大数据算法与分布式前置仓网络，我们实现了同城商品半日达甚至半小时极速送达，极大地提升了消费者的智慧生活品质。’",
                    "reading": "Diànshāng píngtái wùliú zǒngjiān zài yántǎohuì shang jièshào: ‘Yītuō dàshùjù suànfǎ yǔ fēnbùshì qiánzhìcāng wǎngluò, wǒmen shíxiàn le tóngchéng shāngpǐn bànrì dá shènzhì bàn xiǎoshí jísù sòngdá, jídà de tíshēng le xiāofèizhě de zhìhuì shēnghuó pǐnzhì.’",
                    "translation": "The logistics director introduced: 'Relying on big data algorithms and distributed frontline warehouse networks, we have realized half-day and even 30-minute delivery, vastly enhancing consumers' smart life quality.'"
                }
            ],
            "mnemonics": [
                "Smart Logistics: 快递派件 (Courier dispatch), 智能快递柜 (Smart locker), 取件码 (Pickup code), 半日达 (Half-day delivery)!"
            ],
            "culturalNotes": [
                "China handles over 150 billion express parcels annually—over 60% of the world's total parcel volume—supported by automated sorting robots and high-density smart lockers."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "前往智能丰巢柜提取暂存的网购快递包裹时，必须输入的六位或四位数字凭证被称为：",
                    "options": [
                        "银行卡密码",
                        "取件码 (Qǔjiànmǎ — Pickup PIN / Collection code)",
                        "手机出厂编号"
                    ],
                    "answerIndex": 1,
                    "explanation": "取件码 (qǔjiànmǎ) is the pickup PIN texted to recipients to open the smart locker door."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "形容利用前置仓与同城即时配送网络、下单后几小时乃至几十分钟内送达的电商物流模式是：",
                    "options": [
                        "慢速平邮",
                        "即时零售 / 小时达 (On-demand retail / 1-hour delivery)",
                        "牛车运输"
                    ],
                    "answerIndex": 1,
                    "explanation": "即时零售 / 半日达 / 小时达 characterizes modern Chinese instant hyper-local logistics."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国现代化快递物流与即时配送体系，下列哪一项完全正确？",
                    "options": [
                        "依托数字化仓储与智能快递柜网络，实现了‘送货上门’与‘凭码自提’高度融合的极速物流体验 (Integrates door-to-door delivery with code-based locker pickup)",
                        "所有快递必须一个月才能送到",
                        "包裹只能由邮局人工开门领取"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately represents the multi-channel, hyper-fast convenience of Chinese logistics."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi term for 'pickup code / package collection PIN' (取件码):",
                    "acceptedAnswers": [
                        "取件码",
                        "qujianma",
                        "qǔjiànmǎ",
                        "Qǔjiànmǎ",
                        "Qujianma",
                        "取件碼"
                    ],
                    "explanation": "取件码 (qǔjiànmǎ) means 'pickup code / collection PIN'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u22-l5": {
        "id": "zh-u22-l5",
        "unit": "zh-u22",
        "level": "B2",
        "objective": "Synthesize all urban mobility, smart transit, e-logistics, and digital lifestyle discourse into high-level urban planning forums and international smart city comparative studies.",
        "prerequisites": [
            "zh-u22-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u22-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第二十二单元的所有城市交通导航、高铁物流与智慧数字生活体系，在国际智慧城市峰会与宜居科技治理的最高学术语境中进行深度论述与实战表达！\n\n1. 现代中国智慧城市与无缝出行全景矩阵 (Master Smart Transit Matrix):\n| 基础设施维度 | 核心科技与语用表达 | 综合功能与时代价值 |\n| :--- | :--- | :--- |\n| **城市轨道交通** | 换乘枢纽 / 扫码过闸 / 准点高效 | 承载数千万级超大城市骨干通勤 |\n| **国家干线高铁** | 复兴号 / 候补购票 / 刷证通行 | 打造「四小时跨省经济生活圈」 |\n| **微出行与导航** | 智能避堵 / 共享单车 / 最后一公里 | 解决末梢微循环，践行低碳绿色理念 |\n| **智慧物流配送** | 智能快递柜 / 取件码 / 即时零售 | 赋能数字经济，创造极致便捷生活 |\n| **未来城市治理** | 车路协同 / 数字孪生 / 智慧大脑 | 科技赋能民生，构建现代宜居都市 |\n\n2. 第二十二单元实战交际演练 (Unit 22 Global Smart City Summit):\n- 国际智慧城市发展论坛主旨演讲与中国智慧出行案例分析。",
            "examples": [
                {
                    "target": "城市规划专家在国际智慧城市峰会上作主旨报告：‘中国城市将高铁干线、地铁骨干网络、网约车微循环与共享单车深度融合，打造了全球领先的零距离换乘与无缝化智慧出行典范，深刻诠释了科技赋能美好生活的真谛！’",
                    "reading": "Chéngshì guīhuà zhuānjiā zài guójì zhìhuì chéngshì fēnghuì shang zuò zhǔzhǐ bàogào: ‘Zhōngguó chéngshì jiāng gāotiě gànxiàn, dìtiě gǔgàn wǎngluò, wǎngyuēchē wēixúnhuán yǔ gòngxiǎng dānchē shēndù rónghé, dǎzào le quánqiú lǐngxiān de líng-jùlí huànchéng yǔ wúfènghuà zhìhuì chūxíng diǎnfàn, shēnkè quánshì le kējì fùnéng měihǎo shēnghuó de zhēndì!’",
                    "translation": "The urban planner presented: 'Chinese cities deeply integrate HSR arteries, metro backbones, ride-hailing micro-circulations, and shared bikes, creating a world-leading model of zero-distance transfers and seamless smart mobility, profoundly embodying tech empowering better life!'"
                },
                {
                    "target": "大卫在跨国青年学者研讨会上分享调研心得：‘在中国生活，仅凭一部智能手机即可畅行高铁地铁、解锁共享单车、随时收取快递，这种高度集成化与智能化的生活体验令全世界为之赞叹！’",
                    "reading": "Dàwèi zài kuàguó qīngnián xuézhě yántǎohuì shang fēnxiǎng diàoyán xīndé: ‘Zài Zhōngguó shēnghuó, jǐn píng yí bù zhìnéng shǒujī jíkě chàngxíng gāotiě dìtiě, jiěsuǒ gòngxiǎng dānchē, suíshí shōuqǔ kuàidì, zhè zhǒng gāodù jíchénghuà yǔ zhìnénghuà de shēnghuó tǐyàn lìng quán shìjiè wéi zhī zàntàn!’",
                    "translation": "David shared: 'Living in China, a single smartphone allows seamless travel on HSR and metro, unlocking shared bikes, and picking up packages anytime; this highly integrated digital lifestyle amazes the entire world!'"
                },
                {
                    "target": "新闻评论员总结：‘从复兴号飞驰神州到智能快递柜星罗棋布，智慧交通与数字物流的发展不仅极大缩短了时空距离，更让每位普通百姓实实在在地享受到了高品质数字文明的红利！’",
                    "reading": "Xīnwén pínglùnyuán zǒngjié: ‘Cóng Fùxīnghào fēichí shénzhōu dào zhìnéng kuàidìguì xīngluó-qíbù, zhìhuì jiāotōng yǔ shùzì wùliú de fāzhǎn bùjǐn jídà suōduǎn le shíkōng jùlí, gèng ràng měi wèi pǔtōng bǎixìng shíshízàizài de xiǎngshòu dào le gāo pǐnzhì shùzì wénmíng de hónglì!’",
                    "translation": "The news commentator summarized: 'From Fuxing trains speeding across China to smart lockers spread like stars, smart transport and digital logistics have vastly shortened spatial-temporal distances and brought the dividends of digital civilization to every citizen!'"
                }
            ],
            "mnemonics": [
                "Smart City Formula: Seamless Rail (无缝轨道) + Digital Roads (数字导航) + Last Mile (共享微行) + Instant Logistics (极速物流) = Future Living!"
            ],
            "culturalNotes": [
                "China's rapid infrastructure evolution has generated the popular phrase «中国速度» (Zhōngguó sùdù, 'China Speed'), which describes not only physical rail velocity but also the agile deployment of nationwide digital infrastructure."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "形容不同公共交通工具（高铁、地铁、公交、单车）之间衔接紧密、乘客无需长时间等待或远距离步行的专业术语是：",
                    "options": [
                        "寸步难行",
                        "零距离换乘 / 无缝衔接 (Zero-distance transfer / Seamless connectivity)",
                        "南辕北辙"
                    ],
                    "answerIndex": 1,
                    "explanation": "零距离换乘 and 无缝衔接 are standard modern transport planning terms."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在国际科技新闻中，常用来赞誉中国在高铁建设、智慧基建与数字经济领域惊人发展效率的专有名词是：",
                    "options": [
                        "中国速度 (China Speed)",
                        "慢条斯理",
                        "拖延主义"
                    ],
                    "answerIndex": 0,
                    "explanation": "中国速度 (Zhōngguó sùdù, 'China Speed') is the internationally recognized term for China's high development efficiency."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于现代中国智慧交通与数字生活基础设施的综合概括，下列哪一项完全正确？",
                    "options": [
                        "中国没有任何高铁和数字应用",
                        "共享单车只能在农村使用",
                        "中国构建了由高铁、轨道交通、数字导航、共享微出行与智慧物流深度协同的数字化生活生态体系 (Constructed an integrated ecosystem of HSR, metro, digital navigation, micro-mobility, and smart logistics)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Comprehensively summarizes the multi-tiered smart transport and digital lifestyle ecosystem."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character phrase meaning 'China Speed / world-renowned efficiency in infrastructure and innovation' (中国速度):",
                    "acceptedAnswers": [
                        "中国速度",
                        "zhongguosudu",
                        "zhōngguósùdù",
                        "Zhōngguósùdù",
                        "Zhongguosudu",
                        "中國速度"
                    ],
                    "explanation": "中国速度 (zhōngguó sùdù) means 'China Speed'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u23-l1": {
        "id": "zh-u23-l1",
        "unit": "zh-u23",
        "level": "B2",
        "objective": "Master the Four Diagnostic Methods of TCM (望神色 Inspection, 闻声息 Auscultation/Olfaction, 问寒热 Inquiry, 切脉象 Palpation) and the holistic principle of 辨证论治 (pattern differentiation and treatment).",
        "prerequisites": [
            "zh-u22-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u22-l5"
            ]
        },
        "presentation": {
            "explanation": "中医学（Traditional Chinese Medicine, TCM）以独特的**天人合一与整体观念**为核心，其诊断体系以著名的「四诊法（Four Diagnostic Methods）」著称！\n\n1. 中医四诊法则 (The Four Diagnostic Methods: 望闻问切):\n- **望 (wàng)**：**望神色与舌苔**（Inspection of complexion, vitality, and tongue coating）。\n- **闻 (wén)**：**闻声息与气味**（Listening to breathing voice and smelling）。\n- **问 (wèn)**：**问寒热、饮食与睡眠**（Inquiring into chills/fever, appetite, and sleep patterns）。\n- **切 (qiè)**：**切脉与触诊**（Pulse palpation on radial artery and abdominal palpation）。\n\n2. 核心辨证论治句法 (Pattern Differentiation Syntax):\n- **辨证论治 (biànzhèng lùnzhì)**：根据四诊收集的表象综合分析病机证型，因人制宜施治：\n  - 老中医通过**望闻问切**，诊断患者为**脾胃虚弱、气血不足**，决定采用**健脾益气**的方剂。",
            "examples": [
                {
                    "target": "资深老中医在大卫伸手搭脉后温和地解释：‘中医讲究望闻问切，四诊合参；刚才看你的舌苔微黄厚腻、切脉见滑脉，加之平时多梦易醒，此乃湿热内蕴之征象。’",
                    "reading": "Zīshēn lǎo zhōngyī zài Dàwèi shēnshǒu dāmài hòu wēnhé de jiěshì: ‘Zhōngyī jiǎngjiu wàng-wén-wèn-qiè, sìzhěn-hécān; gāngcái kàn nǐ de shétāi wēi huáng hòu nì, qièmài jiàn huámài, jiāzhī píngshí duōmèng yì xǐng, cǐ nǎi shīrè nèiyùn zhī zhēngxiàng.’",
                    "translation": "The veteran TCM physician explained: 'TCM emphasizes inspection, auscultation, inquiry, and palpation in mutual reference; your tongue coating is yellowish and greasy, the pulse is slippery, combined with vivid dreams, indicating internal damp-heat.'"
                },
                {
                    "target": "中医药大学教授在临床带教时强调：‘辨证论治是中医临床的灵魂，同一种感冒，风寒者当辛温解表，风热者则当辛凉透表，绝不能千人一方。’",
                    "reading": "Zhōngyīyào dàxué jiàoshòu zài línchuáng dàijiào shí qiángdiào: ‘Biànzhèng-lùnzhì shì zhōngyī línchuáng de línghún, tóng yì zhǒng gǎnmào, fēnghán zhě dāng xīnwēn jiěbiǎo, fēngrè zhě zé dāng xīnliáng tòubiǎo, jué bù néng qiānrén-yìfāng.’",
                    "translation": "The TCM professor stressed: 'Pattern differentiation is the soul of TCM; for the same cold, wind-cold requires acrid-warm release while wind-heat requires acrid-cool release; never prescribe one generic formula for thousands.'"
                },
                {
                    "target": "大卫在体验脉诊后赞叹：‘仅凭三根手指按在手腕寸关尺部位，医生就能准确说出我近期的作息与疲劳状态，中医的神奇令人折服！’",
                    "reading": "Dàwèi zài tǐyàn màizhěn hòu zàntàn: ‘Jǐn píng sān gēn shǒuzhǐ àn zài shǒuwàn cùn-guān-chǐ bèiwei, yīshēng jiù néng zhǔnquè shuōchū wǒ jìnqī de zuòxī yǔ píláo zhuàngtài, zhōngyī de shénqí lìng rén zhéfú!’",
                    "translation": "David marvelled: 'Just by pressing three fingers on the cun, guan, and chi points of the wrist, the doctor pinpointed my routine and fatigue; the wonder of TCM is truly awe-inspiring!'"
                }
            ],
            "mnemonics": [
                "TCM Diagnostics: 望 (Look/Tongue), 闻 (Listen/Smell), 问 (Inquire), 切 (Pulse) ➔ 辨证论治 (Tailored Treatment)!"
            ],
            "culturalNotes": [
                "The traditional pulse palpation (切脉 qièmài) at the radial artery is divided into three positions: 寸 (cun), 关 (guan), and 尺 (chi), corresponding to the Heart/Lung, Liver/Spleen, and Kidney organ networks."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "中医诊断疾病时所运用的‘望诊、闻诊、问诊、切脉’四种基本诊法的经典四字合称是：",
                    "options": [
                        "道听途说",
                        "望闻问切 (Wàng-wén-wèn-qiè — The Four Diagnostic Methods)",
                        "走马观花"
                    ],
                    "answerIndex": 1,
                    "explanation": "望闻问切 is the foundational Four Diagnostic Methods in Traditional Chinese Medicine."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "中医根据望闻问切收集的症状全面分析疾病本质与机理、并制定个性化治疗方案的核心原则是：",
                    "options": [
                        "辨证论治 (Biànzhèng lùnzhì — Pattern differentiation and targeted therapy)",
                        "千篇一律",
                        "头痛医头"
                    ],
                    "answerIndex": 0,
                    "explanation": "辨证论治 (biànzhèng lùnzhì) is the core diagnostic and treatment methodology of TCM."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中医脉诊与望诊的科学文化内涵，下列哪一项完全正确？",
                    "options": [
                        "中医看病只看血常规化验单",
                        "望诊重点观察神色与舌苔，切脉通过寸关尺三部感知脏腑气血运行状态，四诊合参以求精准辨证 (Inspection observes complexion/tongue; pulse palpation feels organ qi/blood)",
                        "中医认为人人生病原因完全一样"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately expresses the holistic synthesis of inspection, tongue examination, and pulse diagnosis."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character phrase for the Four Diagnostic Methods of TCM (望闻问切):",
                    "acceptedAnswers": [
                        "望闻问切",
                        "wangwenwenqie",
                        "wàngwénwènqiè",
                        "Wàngwénwènqiè",
                        "Wangwenwenqie",
                        "望聞問切"
                    ],
                    "explanation": "望闻问切 (wàng-wén-wèn-qiè) means 'Inspection, Auscultation, Inquiry, and Palpation'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u23-l2": {
        "id": "zh-u23-l2",
        "unit": "zh-u23",
        "level": "B2",
        "objective": "Master the philosophical and physiological terms of TCM (阴阳平衡 Yin-Yang balance, 五行: 木火土金水 Five Elements, 相生相克 mutual generation/restriction, 气血 Qi & Blood, 阴平阳秘).",
        "prerequisites": [
            "zh-u23-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u23-l1"
            ]
        },
        "presentation": {
            "explanation": "中医学以**阴阳五行学说**作为阐释人体生理机能与病理变化的哲学基石！\n\n1. 阴阳调和与五行生克 (Yin-Yang & Five Elements Framework):\n- **阴平阳秘，精神乃治**：阴气平和，阳气固密，生命机能才能健康无虞（Ideal Yin-Yang Equilibrium）。\n- **五行与五脏对应 (Five Elements & Visceral Organs)**：\n  - **木 (Wood) ➔ 肝 (Liver)**：主疏泄，主藏血。\n  - **火 (Fire) ➔ 心 (Heart)**：主神明，主血脉。\n  - **土 (Earth) ➔ 脾 (Spleen)**：主运化，为后天之本。\n  - **金 (Metal) ➔ 肺 (Lung)**：主气司呼吸，主宣发肃降。\n  - **水 (Water) ➔ 肾 (Kidney)**：藏精，为主水之脏，为先天之本。\n- **相生相克 (xiāngshēng xiāngkè)**：五行之间相互滋生与相互制约的动态平衡。\n\n2. 气血病机术语 (Pathological Concepts):\n- **气滞血瘀 (qìzhì-xuèyū)** / **阴虚火旺 (yīnxū-huǒwàng)** / **脾胃湿热**。",
            "examples": [
                {
                    "target": "老医师为患者深入剖析病机：‘怒伤肝，肝气郁结则克伐脾土，导致气机不畅、食欲不振；唯有通过疏肝理气，方能恢复肝脾两脏的阴阳相生与气血运化！’",
                    "reading": "Lǎo yīshī wèi huànzhě shēnrù pōuxī bìngjī: ‘Nù shāng gān, gānqì yùjié zé kèfá pítǔ, dǎozhì qìjī bú chàng, shíyù búzhèn; wéiyǒu tōngguò shūgān-lǐqì, fāng néng huīfù gān-pí liǎng zàng de yīnyáng xiāngshēng yǔ qìxuè yùnhuà!’",
                    "translation": "The physician analyzed: 'Anger harms the liver; liver qi stagnation over-restricts the spleen earth, impeding qi movement and appetite; only by soothing the liver can we restore the mutual generation of liver and spleen!'"
                },
                {
                    "target": "大卫在研读《黄帝内经》时做了精彩笔记：‘《素问》所言“阴平阳秘，精神乃治”，强调人体健康在于阴阳两股对立统一力量的动态平衡，既不能阴虚阳亢，也不能阳虚阴盛。’",
                    "reading": "Dàwèi zài yándú «Huángdì Nèijīng» shí zuò le jīngcǎi bǐjì: ‘«Sùwèn» suǒ yán “yīnpíng-yángmì, jīngshén nǎi zhì”, qiángdiào réntǐ jiànkāng zàiyú yīnyáng liǎng gǔ duìlì-tǒngyī lìliang de dòngtài pínghéng, jì bù néng yīnxū-yángkàng, yě bù néng yángxū-yīnshèng.’",
                    "translation": "David noted: 'The Yellow Emperor's Classic states \"When Yin is balanced and Yang is secure, vital spirit remains intact\", highlighting health as dynamic equilibrium of opposing forces.'"
                },
                {
                    "target": "针灸师向学员讲解五脏调养：‘肾为先天之本，脾为后天之本；日常调摄当注重温补肾阳、健运脾胃，使气血生化有常。’",
                    "reading": "Zhēnjiǔshī xiàng xuéyuán jiǎngjiě wǔzàng tiáoyǎng: ‘Shèn wéi xiāntiān zhī běn, pí wéi hòutiān zhī běn; rìcháng tiáoshè dāng zhùzhòng wēnbǔ shènyáng, jiànyùn píwèi, shǐ qìxuè shēnghuà yǒucháng.’",
                    "translation": "The acupuncturist taught: 'Kidney is the innate foundation, Spleen is the acquired foundation; wellness emphasizes warming kidney yang and tonifying the spleen for steady qi and blood generation.'"
                }
            ],
            "mnemonics": [
                "Five Elements & Organs: 木-肝 (Wood-Liver), 火-心 (Fire-Heart), 土-脾 (Earth-Spleen), 金-肺 (Metal-Lung), 水-肾 (Water-Kidney) ➔ 阴平阳秘 (Harmony)!"
            ],
            "culturalNotes": [
                "«黄帝内经» (Huangdi Neijing / The Yellow Emperor's Classic of Internal Medicine), compiled over 2,000 years ago during the Han Dynasty, is the canonical founding text of Chinese medical theory."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在中医五行归类体系中，‘木、火、土、金、水’所依次对应的五脏是：",
                    "options": [
                        "胃、大肠、小肠、胆、膀胱",
                        "肝、心、脾、肺、肾 (Liver, Heart, Spleen, Lung, Kidney)",
                        "头、手、足、胸、背"
                    ],
                    "answerIndex": 1,
                    "explanation": "木-肝, 火-心, 土-脾, 金-肺, 水-肾 is the classical Five Elements organ correspondence."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "《黄帝内经》中概括人体处于最健康、阴阳协调动态平衡境界的名句是：",
                    "options": [
                        "急功近利",
                        "阴平阳秘，精神乃治 (When Yin is calm and Yang is concealed, vitality thrives)",
                        "拔苗助长"
                    ],
                    "answerIndex": 1,
                    "explanation": "阴平阳秘，精神乃治 is the classical definition of complete physiological health in TCM."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中医‘气血’与五脏理论，下列哪一项表述完全正确？",
                    "options": [
                        "中医认为人体器官之间没有任何关联",
                        "气为血之帅，血为气之母；肾为先天之本，脾为后天之本 (Qi commands blood, blood mothers qi; Kidney is innate root, Spleen is acquired root)",
                        "五行之间只能相克不能相生"
                    ],
                    "answerIndex": 1,
                    "explanation": "Correctly outlines the Qi-Blood dynamic and the roles of Kidney and Spleen."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character phrase meaning 'Yin is tranquil and Yang is consolidated / perfect balance' (阴平阳秘):",
                    "acceptedAnswers": [
                        "阴平阳秘",
                        "yinpingyangmi",
                        "yīnpíngyángmì",
                        "Yīnpíngyángmì",
                        "Yinpingyangmi",
                        "陰平陽秘"
                    ],
                    "explanation": "阴平阳秘 (yīnpíng yángmì) means 'Yin is tranquil and Yang is secure / harmonious physiological balance'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u23-l3": {
        "id": "zh-u23-l3",
        "unit": "zh-u23",
        "level": "B2",
        "objective": "Master the terminology of acupuncture and external TCM therapies (十二经脉 12 primary meridians, 穴位 acupoints: 足三里/合谷, 针灸 acupuncture, 拔罐 cupping, 刮痧 Gua Sha, 艾灸 moxibustion).",
        "prerequisites": [
            "zh-u23-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u23-l2"
            ]
        },
        "presentation": {
            "explanation": "中医外治法以**经络学说（Meridian Theory）与穴位刺激**为核心，通过物理疗法激发人体自愈本能！\n\n1. 经络系统与核心要穴 (Meridians & Vital Acupoints):\n- **十二经脉 (shí'èr jīngmài)**：贯通脏腑与体表的能量经络网络（如：足阳明胃经、手太阴肺经）。\n- **合谷穴 (Hégǔ)**：手部虎口处要穴，擅治头面五官诸疾（面口合谷收）。\n- **足三里穴 (Zúsānlǐ)**：膝下三寸要穴，强壮脾胃、培补元气的长寿名穴。\n\n2. 四大经典中医外治法 (Four Classic External Therapies):\n- **针灸 (zhēnjiǔ)**：以毫针刺入腧穴，得气行针以通经活络。\n- **艾灸 (àijiǔ)**：点燃艾条温灼穴位，温阳散寒、扶正祛邪。\n- **拔罐 (báguàn)**：利用负压吸附体表，行气活血、拔除风寒湿邪。\n- **刮痧 (guāshā)**：以水牛角刮痧板顺经络刮拭，出痧清热、通络解毒。",
            "examples": [
                {
                    "target": "针灸科主治医师一边为大卫施针一边指导：‘当你感到穴位局部有酸、麻、胀、重的复合感觉时，这在中医上被称为“得气”，说明经络之气已被成功激发并开始疏通。’",
                    "reading": "Zhēnjiǔkē zhǔzhì yīshī yìbiān wèi Dàwèi shīzhēn yìbiān zhǐdǎo: ‘Dāng nǐ gǎndào xuéwèi júbù yǒu suān, má, zhàng, zhòng de fùhé gǎnjué shí, zhè zài zhōngyī shang bèi chēng wéi “déqì”, shuōmíng jīngluò zhī qì yǐ bèi chénggōng jīfā bìng kāishǐ shūtōng.’",
                    "translation": "The acupuncturist guided: 'When you feel a compound sensation of soreness, numbness, distension, and heaviness, it is called \"Deqi\" in TCM, signifying that meridian qi has been successfully stimulated and activated.'"
                },
                {
                    "target": "理疗师为伏案工作的软件工程师进行拔罐治疗：‘背部膀胱经刮痧与拔罐能够快速松解肩颈僵硬肌肉，促进局部血液循环，将体内郁结的寒湿之气透发排出。’",
                    "reading": "Lǐliáoshī wèi fú'àn gōngzuò de ruǎnjiàn gōngchéngshī jìnxíng báguàn zhìliáo: ‘Bèibù pángguāngjīng guāshā yǔ báguàn nénggòu kuàisù sōngjiě jiānjǐng jiāngyìng jīròu, cùjìn júbù xuèyè xúnhuán, jiāng tǐnèi yùjié de hánshī zhī qì tòufā páichū.’",
                    "translation": "The therapist performed cupping: 'Scraping and cupping on the Bladder meridian of the back swiftly relieves stiff neck and shoulder muscles, promoting local blood flow and expelling trapped cold-dampness.'"
                },
                {
                    "target": "大卫在学习艾灸养生时体会到：‘秋冬季节艾灸足三里和关元穴，能够温经通络、增强免疫力，是中华传统医学预防未病的智慧结晶。’",
                    "reading": "Dàwèi zài xuéxí àijiǔ yǎngshēng shí tǐhuì dào: ‘Qiū-dōng jìjié àijiǔ Zúsānlǐ hé Guānyuán xué, nénggòu wēnjīng-tōngluò, zēngqiáng miǎnyìlì, shì Zhōnghuá chuántǒng yīxué yùfáng-wèibìng de zhìhuì jiéjīng.’",
                    "translation": "David realized: 'Moxibustion on Zusanli and Guanyuan in autumn and winter warms meridians and strengthens immunity, representing the wisdom of preventative medicine in TCM.'"
                }
            ],
            "mnemonics": [
                "TCM External Therapies: 针刺得气 (Needle Deqi), 艾条温灸 (Moxa warmth), 拔罐吸湿 (Cupping detox), 刮痧通络 (Gua Sha)!"
            ],
            "culturalNotes": [
                "Acupuncture and Moxibustion of Traditional Chinese Medicine was officially inscribed on UNESCO's Representative List of the Intangible Cultural Heritage of Humanity in 2010."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "针灸施针过程中，患者穴位局部产生的‘酸、麻、胀、重’等感应现象在专业术语中被称为：",
                    "options": [
                        "走火入魔",
                        "得气 (Déqì — Arrival of Qi / Needle sensation)",
                        "神经抽搐"
                    ],
                    "answerIndex": 1,
                    "explanation": "得气 (déqì) is the canonical term for the therapeutic arrival and activation of meridian Qi."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "中医古籍针灸歌诀‘面口合谷收，肚腹三里留’中，位于膝眼下三寸、调理脾胃虚弱的要穴是：",
                    "options": [
                        "太阳穴",
                        "涌泉穴",
                        "足三里 (Zúsānlǐ — Acupoint ST36)"
                    ],
                    "answerIndex": 2,
                    "explanation": "足三里 (Zúsānlǐ, ST36) is the premier acupoint for regulating digestive and immune vigor."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中医拔罐、刮痧与艾灸外治疗法的作用原理，下列哪一项表述完全正确？",
                    "options": [
                        "通过刺激体表经络腧穴与改善局部血液微循环，起到温经散寒、行气活血与激发机体自愈力的作用 (Stimulates meridians/acupoints to warm channels, move blood, and boost self-healing)",
                        "它们没有任何医学依据",
                        "只能用于骨折急救"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately articulates the physiological and therapeutic mechanisms of external TCM therapies."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi term for 'arrival of Qi / needle sensation in acupuncture' (得气):",
                    "acceptedAnswers": [
                        "得气",
                        "deqi",
                        "déqì",
                        "Déqì",
                        "Deqi",
                        "得氣"
                    ],
                    "explanation": "得气 (déqì) means 'arrival of Qi / sensation of acupuncture efficacy'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u23-l4": {
        "id": "zh-u23-l4",
        "unit": "zh-u23",
        "level": "B2",
        "objective": "Master the structural principles of Chinese herbal formulas (君臣佐使 monarch/minister/assistant/guide roles, 药食同源 food as medicine, 冬病夏治 summer treatment for winter diseases, 顺应四时 seasonal adaptation).",
        "prerequisites": [
            "zh-u23-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u23-l3"
            ]
        },
        "presentation": {
            "explanation": "中药方剂学体现了极致的**配伍组方严密逻辑**，与二十四节气「顺应自然、治未病」的养生哲学一脉相承！\n\n1. 中药方剂组方结构——君臣佐使 (Herbal Formula Hierarchy: Jūn-Chén-Zuǒ-Shǐ):\n- **君药 (Jūn)**：针对主病或主证起主要治疗作用的核心药物。\n- **臣药 (Chén)**：辅助君药加强疗效，或针对兼证治疗的药物。\n- **佐药 (Zuǒ)**：协助治疗、制约君臣药毒烈之性或反佐调和的药物。\n- **使药 (Shǐ)**：引经药（引导药物直达病所）或调和诸药性质的药物（如甘草）。\n\n2. 治未病与四时养生哲学 (Preventative & Seasonal Wellness):\n- **药食同源 (yàoshí-tóngyuán)**：很多食物同时具有药物调养功效（如枸杞、山药、生姜、百合）。\n- **冬病夏治 (dōngbìng-xiàzhì)**：在夏季三伏天阳气最盛时调治冬季易发的哮喘、关节炎（如三伏贴）。\n- **顺应四时**：春生、夏长、秋收、冬藏。",
            "examples": [
                {
                    "target": "中药房老药师为大卫抓药时耐心讲解：‘这一副经典的补中益气汤严格遵循“君臣佐使”的组方原则：黄芪为君大补脾肺之气，人参、白术为臣辅助健脾，当归、陈皮为佐理气和血，甘草、柴胡为使引药升清，全方配合天衣无缝！’",
                    "reading": "Zhōngyàofáng lǎo yàoshī wèi Dàwèi zhuāyào shí nàixīn jiǎngjiě: ‘Zhè yí fù jīngdiǎn de Bǔzhōng Yìqì Tāng yángé zūnxún “jūn-chén-zuǒ-shǐ” de zǔfāng yuánzé: Huángqí wéi jūn dàbǔ pífèi zhī qì, Rénshēn, Báizhú wéi chén fǔzhù jiànpí, Dāngguī, Chénpí wéi zuǒ lǐqì-héxuè, Gāncǎo, Cháihú wéi shǐ yǐnyào shēngqīng, quánfāng pèihé tiānyī-wúfèng!’",
                    "translation": "The herbalist explained: 'This classic formula strictly follows monarch, minister, assistant, and guide: Astragalus is monarch to tonify spleen/lung qi; Ginseng and Atractylodes are ministers; Angelica and Citrus Peel are assistants; Licorice and Bupleurum are guides, harmonizing seamlessly!'"
                },
                {
                    "target": "中医养生专家在节气讲座中分享：‘药食同源是中华民族千百年来的生活智慧，秋分时节天干物燥，煲汤时加入雪梨、百合与银耳，能够滋阴润燥、生津养肺。’",
                    "reading": "Zhōngyī yǎngshēng zhuānjiā zài jiéqì jiǎngzuò zhōng fēnxiǎng: ‘Yàoshí-tóngyuán shì Zhōnghuá mínzú qiānbǎinián lái de shēnghuó zhìhuì, Qiūfēn shíjié tiāngān-wùzào, bāotāng shí jiārù xuělí, bǎihé yǔ yín'ěr, nénggòu zīyīn-rùnzào, shēngjīn-yǎngfèi.’",
                    "translation": "The wellness expert shared: 'Medicine and food sharing common origins is Chinese wisdom; during the Autumn Equinox, adding snow pear, lily bulb, and white fungus to soup nourishes Yin and moistens the lungs.'"
                },
                {
                    "target": "大卫在中医院体验“三伏贴”敷贴疗法：‘“冬病夏治”充分利用夏季自然界阳气最旺盛的时机温补阳气、驱除体内深伏的寒邪，这是中医“天人合一、治未病”理念的绝佳体现！’",
                    "reading": "Dàwèi zài zhōngyīyuàn tǐyàn “sānfútiē” fūtiē liáofǎ: ‘“Dōngbìng-xiàzhì” chōngfèn lìyòng xiàjì zìránjiè yángqì zuì wàngshèng de shíjī wēnbǔ yángqì, qūchú tǐnèi shēnfú de hánxié, zhè shì zhōngyī “tiānrén-héyī, zhìwèibìng” lǐniàn de juéjiā tǐxiàn!’",
                    "translation": "David experienced Sanfu Herbal Patches: '\"Treating winter diseases in summer\" harnesses peak summer Yang qi to warm the body and expel deep-seated cold, exemplifying the unity of humanity with nature and preventative care!'"
                }
            ],
            "mnemonics": [
                "Formulas & Seasons: 君臣佐使 (Formula Hierarchy), 药食同源 (Food as Medicine), 冬病夏治 (Summer Cure for Winter Ills), 治未病 (Preventative Care)!"
            ],
            "culturalNotes": [
                "The concept of «治未病» (zhì wèibìng, 'treating disease before it arises') from the Huangdi Neijing represents the world's earliest systematic theory of preventive healthcare and longevity."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "中医中药方剂学中，概括中药配伍严密逻辑与各药分工协作地位的核心术语是：",
                    "options": [
                        "各自为政",
                        "君臣佐使 (Jūn-chén-zuǒ-shǐ — Monarch, minister, assistant, guide hierarchy)",
                        "乱点鸳鸯谱"
                    ],
                    "answerIndex": 1,
                    "explanation": "君臣佐使 is the classical architectural principle of Chinese herbal prescription formulas."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在夏季三伏天利用自然界阳气旺盛时机、针对冬季好发的慢性虚寒病症进行穴位敷贴调理的中医特色疗法原则是：",
                    "options": [
                        "冬病夏治 (Dōngbìng xiàzhì — Treating winter ailments in summer)",
                        "以毒攻毒",
                        "小病大治"
                    ],
                    "answerIndex": 0,
                    "explanation": "冬病夏治 (dōngbìng xiàzhì) is the time-tested TCM principle of treating cold-induced diseases during the heat of summer."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中医‘药食同源’与‘治未病’的养生哲学，下列哪一项表述完全正确？",
                    "options": [
                        "药材和食物完全对立，不能一起食用",
                        "中医只在人生重病临终时才起作用",
                        "‘药食同源’主张通过日常天然膳食调理身体，‘治未病’强调顺应四时节气、在疾病发生之前培固人体正气 (Food & herbs share origins; preventative care nourishes upright Qi before illness)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately represents the holistic lifestyle philosophy of food therapy and preventive health."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character phrase for the classical TCM prescription hierarchy (君臣佐使):",
                    "acceptedAnswers": [
                        "君臣佐使",
                        "junchenzuoshi",
                        "jūnchénzuǒshǐ",
                        "Jūnchénzuǒshǐ",
                        "Junchenzuoshi"
                    ],
                    "explanation": "君臣佐使 (jūn-chén-zuǒ-shǐ) means 'Monarch, Minister, Assistant, and Guide in herbal prescription'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u23-l5": {
        "id": "zh-u23-l5",
        "unit": "zh-u23",
        "level": "B2",
        "objective": "Synthesize all TCM discourse (Four Diagnostics, Yin-Yang & Five Elements, Acupuncture & Meridians, Herbal Formulations, Nobel Laureate Tu Youyou & Artemisinin) into international medical forums and cross-cultural Sinology symposiums.",
        "prerequisites": [
            "zh-u23-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u23-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第二十三单元的所有传统中医理论、辨证思维与现代转化体系，在国际医学学术峰会与文明互鉴的最高讲坛上进行深度论述与实战表达！\n\n1. 中医文化与现代医学交汇全景矩阵 (Master TCM Medicine Matrix):\n| 理论与应用维度 | 核心概念与现代价值 | 国际交融与时代贡献 |\n| :--- | :--- | :--- |\n| **诊断思维** | 望闻问切 / 辨证论治 | 个体化精准医学与整体功能状态评估 |\n| **理论基石** | 阴阳五行 / 脏腑经络 | 复杂系统自稳态调节与微生态平衡 |\n| **外治技术** | 针灸 / 艾灸 / 拔罐 / 刮痧 | 非药物绿色疗法，列入世界非遗名录 |\n| **本草方剂** | 君臣佐使 / 青蒿素研发 | 屠呦呦诺贝尔奖成果造福全球数亿人 |\n| **养生哲学** | 药食同源 / 治未病 / 天人合一 | 预防医学先驱理念，构建人类卫生健康共同体 |\n\n2. 第二十三单元实战交际演练 (Unit 23 World TCM Summit):\n- 跨国传统医学与现代生命科学融合高峰论坛主旨发言与答问。",
            "examples": [
                {
                    "target": "中国工程院院士在世界传统医学大会上作主旨报告：‘屠呦呦先生从中医古籍《肘后备急方》中汲取灵感成功提取青蒿素，拯救了全球数百万疟疾患者的生命并荣获诺贝尔生理学或医学奖，生动印证了中医药学是中华文明的伟大瑰宝，也是全人类共同的健康财富！’",
                    "reading": "Zhōngguó gōngchéngyuàn yuànshì zài shìjiè chuántǒng yīxué dàhuì shang zuò zhǔzhǐ bàogào: ‘Tú Yōuyōu xiānsheng cóng zhōngyī gǔjí «Zhǒuhòu Bèijí Fāng» zhōng xīqǔ línggǎn chénggōng tíqǔ qīnghāosù, zhěngjiù le quánqiú shù bǎi wàn nüèjí huànzhě de shēngmìng bìng rónghuò Nuòbèi'ěr shēnglǐxué huò yīxuéjiǎng, shēngdòng yìngzhèng le zhōngyīyàoxué shì Zhōnghuá wénmíng de wěidà guībǎo, yě shì quán rénlèi gòngtóng de jiànkāng cáifù!’",
                    "translation": "The academician presented: 'Tu Youyou drew inspiration from ancient text Zhouhou Beiji Fang to extract artemisinin, saving millions from malaria and winning the Nobel Prize, proving TCM is a treasure of civilization and common wealth of mankind!'"
                },
                {
                    "target": "大卫在国际汉学与医学论坛上发表论文：‘中医的“治未病”思想与现代预防医学、全生命周期健康管理理念高度契合，其辨证论治的整体观念为应对复杂慢性病提供了独特的中国智慧与东方方案！’",
                    "reading": "Dàwèi zài guójì hànxué yǔ yīxué lùntán shang fābiǎo lùnwén: ‘Zhōngyī de “zhìwèibìng” sīxiǎng yǔ xiàndài yùfáng yīxué, quán shēngmìng-zhōuqī jiànkāng guǎnlǐ lǐniàn gāodù qìhé, qí biànzhèng-lùnzhì de zhěngtǐ guānniàn wèi yìngduì fùzá mànxìngbìng tígōng le dútè de Zhōngguó zhìhuì yǔ Dōngfāng fāng'àn!’",
                    "translation": "David presented: 'TCM's \"treating disease before it arises\" aligns with modern preventive medicine, offering Chinese wisdom for chronic diseases!'"
                },
                {
                    "target": "新闻发布会总结：‘推动中医药现代化、国际化，深化中西医结合与文明互鉴，必将为构建人类卫生健康共同体注入源源不断的生机与活力！’",
                    "reading": "Xīnwén fābùhuì zǒngjié: ‘Tuīdòng zhōngyīyào xiàndàihuà, guójìhuà, shēnhuà zhōng-xīyī jiéhé yǔ wénmíng hùjiàn, bìjiāng wèi gòujiàn rénlèi wèishēng jiànkāng gòngtóngtǐ zhùrù yuányuán-bùduàn de shēngjī yǔ huólì!’",
                    "translation": "The conference concluded: 'Promoting TCM modernization, global integration, and East-West medical dialogue injects vitality into building a global community of health for all!'"
                }
            ],
            "mnemonics": [
                "TCM Summit: Ancient Roots (古籍智慧) + Nobel Artemisinin (青蒿素) + Preventative Health (治未病) = Global Health Community (人类健康共同体)!"
            ],
            "culturalNotes": [
                "In 2015, Chinese scientist Tu Youyou (屠呦呦) won the Nobel Prize in Physiology or Medicine for discovering Artemisinin (青蒿素), inspired by Ge Hong's 4th-century TCM handbook «肘后备急方»."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "中国首位诺贝尔生理学或医学奖得主屠呦呦，其研发抗疟神药的灵感源泉与核心中药材是：",
                    "options": [
                        "从古代中医古籍中汲取灵感提取的青蒿素 (Artemisinin extracted from sweet wormwood)",
                        "人工合成塑料",
                        "普通白糖水"
                    ],
                    "answerIndex": 0,
                    "explanation": "Tu Youyou extracted artemisinin (青蒿素) from Artemisia annua based on ancient TCM texts, winning the 2015 Nobel Prize."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "中医‘治未病’理念在现代国际医学界被公认为哪一学科领域的先驱思想？",
                    "options": [
                        "预防医学与全生命周期健康管理 (Preventive medicine & holistic healthcare)",
                        "纯化学药物合成",
                        "放射科拍片"
                    ],
                    "answerIndex": 0,
                    "explanation": "治未病 is celebrated globally as the ancient pioneer of modern preventive and lifestyle medicine."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于传统中医药在当代的国际价值与文明贡献，下列哪一项总括完全正确？",
                    "options": [
                        "中医药已经完全过时，不具备任何科学价值",
                        "中医药只能在中国个别山区使用",
                        "中医药以其辨证论治、治未病与药食同源的博大智慧，结合青蒿素等现代科技突破，为全人类健康福祉作出了不可磨灭的卓越贡献 (TCM's holistic wisdom combined with breakthroughs like artemisinin makes indelible contributions to global health)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Comprehensive and accurate appraisal of TCM's historic and contemporary global contributions."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi name of the Nobel Prize-winning antimalarial compound discovered from TCM (青蒿素):",
                    "acceptedAnswers": [
                        "青蒿素",
                        "qinghaosu",
                        "qīnghāosù",
                        "Qīnghāosù",
                        "Qinghaosu",
                        "靑蒿素"
                    ],
                    "explanation": "青蒿素 (qīnghāosù) is Artemisinin."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u24-l1": {
        "id": "zh-u24-l1",
        "unit": "zh-u24",
        "level": "B2",
        "objective": "Master commercial banking operations and cross-border forex terminology (开户 open account, 结算 settlement, 购汇/结汇 FX purchase/settlement, 汇率牌价 exchange rate board, 电汇 T/T wire transfer, 跨境人民币清算 CIPS).",
        "prerequisites": [
            "zh-u23-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u23-l5"
            ]
        },
        "presentation": {
            "explanation": "在全球经贸往来中，精通**商业银行外汇结算与跨境资金划转**是商务沟通的核心能力！\n\n1. 银行账户与外汇结算核心术语 (Banking & FX Terms):\n- **开立账户 (kāilì zhànghù)**：开立外币结算账户或境内基本存款账户。\n- **购汇 (gòuhuì)**：用人民币购买外币（Purchase foreign exchange）。\n- **结汇 (jiéhuì)**：将外币兑换为人民币（Settle foreign exchange into RMB）。\n- **现汇买入价 / 现钞卖出价**：银行外汇即期牌价基准。\n- **跨境电汇 (kuàjìng diànhuì, T/T)**：附带国际汇款代码（SWIFT Code）或**人民币跨境支付系统 (CIPS)** 代码。\n\n2. 银行柜台与国际汇款实用句法 (Banking Counter Dialogue):\n- ‘我们希望在贵行办理一笔**信用证项下的美元跨境电汇**，烦请告知今日**实时结算汇率**。’",
            "examples": [
                {
                    "target": "财务总监在银行对公业务窗口办理汇款：‘请为我们开具这张价值五十万美元的国际电汇凭证，收款行SWIFT代码及跨境清算账户已在申请表上核对无误。’",
                    "reading": "Cáiwù zǒngjiān zài yínháng duìgōng yèwù chuāngkǒu bànlǐ huìkuǎn: ‘Qǐng wèi wǒmen kāijù zhè zhāng jiàzhí wǔshí wàn Měiyuán de guójì diànhuì píngzhèng, shōukuǎnháng SWIFT dàimǎ jí kuàjìng qīngsuàn zhànghù yǐ zài shēnqǐngbiǎo shang héduì wúwù.’",
                    "translation": "The CFO handled the transfer: 'Please issue this $500,000 international wire transfer voucher; the beneficiary's SWIFT code and cross-border clearing account have been verified.'"
                },
                {
                    "target": "大卫在手机银行App上操作换汇：‘趁着今天美元对人民币汇率牌价波动，我顺利完成了两千美元的线上购汇并转存为定期存款。’",
                    "reading": "Dàwèi zài shǒujī yínháng App shang cāozuò huànhuì: ‘Chènzhe jīntiān Měiyuán duì Rénmínbì huìlǜ páijià bōdòng, wǒ shùnlì wánchéng le liǎngqiān Měiyuán de xiànshang gòuhuì bìng zhuǎncún wéi dìngqī cúnkuǎn.’",
                    "translation": "David exchanged currency on the mobile app: 'Taking advantage of today's USD/RMB exchange rate fluctuations, I completed an online purchase of $2,000 and deposited it into a fixed-term account.'"
                },
                {
                    "target": "国际结算部经理向外商推介：‘使用人民币跨境支付系统（CIPS）进行贸易结算，不仅资金到账迅速，还能有效规避第三方汇率波动风险。’",
                    "reading": "Guójì jiésuànbù jīnglǐ xiàng wàishāng tuījiè: ‘Shǐyòng Rénmínbì Kuàjìng Zhīfù Xìtǒng (CIPS) jìnxíng màoyì jiésuàn, bùjǐn zījīn dàozhàng xùnsù, hái néng yǒuxiào guībì dì-sān-fāng huìlǜ bōdòng fēngxiǎn.’",
                    "translation": "The international settlement manager recommended: 'Using the CIPS system for trade settlement ensures fast fund arrival and effectively hedges third-party exchange rate volatility.'"
                }
            ],
            "mnemonics": [
                "Banking & FX: 购汇 (Buy FX), 结汇 (Sell FX to RMB), 电汇 (Wire T/T), CIPS清算 (Cross-Border RMB Clearing)!"
            ],
            "culturalNotes": [
                "CIPS (Cross-Border Interbank Payment System / 人民币跨境支付系统) provides dedicated clearing and settlement services for cross-border RMB transactions across global financial institutions."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在银行外汇业务中，指‘企业或个人将持有的外币资金兑换为本国货币（人民币）’的专业金融术语是：",
                    "options": [
                        "抵押",
                        "结汇 (Jiéhuì — Foreign exchange settlement / Selling FX for local currency)",
                        "透支"
                    ],
                    "answerIndex": 1,
                    "explanation": "结汇 (jiéhuì) is the official term for converting foreign exchange into RMB."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "中国为支持人民币全球跨境贸易投资清算而自主建立的国际金融结算基础设施系统简称是：",
                    "options": [
                        "CIPS (Cross-Border Interbank Payment System / 人民币跨境支付系统)",
                        "ATM",
                        "POS机"
                    ],
                    "answerIndex": 0,
                    "explanation": "CIPS is the premier international RMB cross-border payment and clearing network."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于国际商务中的商业银行跨境结算与汇率，下列哪一项完全正确？",
                    "options": [
                        "购汇指买入外币，结汇指将外币折换为人民币，跨境电汇依托SWIFT和CIPS等清算网络实现资金安全高效流转 (FX purchase buys foreign currency, settlement sells for RMB, T/T uses SWIFT/CIPS)",
                        "国际贸易汇款只能用现金邮寄",
                        "汇率牌价十年内永远不会变动"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately defines FX purchase, FX settlement, and international clearing networks."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi term for 'settling foreign currency into RMB' (结汇):",
                    "acceptedAnswers": [
                        "结汇",
                        "jiehui",
                        "jiéhuì",
                        "Jiéhuì",
                        "Jiehui",
                        "結匯"
                    ],
                    "explanation": "结汇 (jiéhuì) means 'foreign exchange settlement / converting FX to local RMB'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u24-l2": {
        "id": "zh-u24-l2",
        "unit": "zh-u24",
        "level": "B2",
        "objective": "Master international supply chain terminology (供应链 supply chain, 海运提单 Bill of Lading / B/L, FOB 离岸价, CIF 到岸价, 报关/清关 customs declaration/clearance, 自动化集装箱码头).",
        "prerequisites": [
            "zh-u24-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u24-l1"
            ]
        },
        "presentation": {
            "explanation": "中国拥有全球吞吐量最大的港口群与高度智能化的**端到端现代国际供应链（End-to-End Global Supply Chains）**！\n\n1. 国际贸易术语与海运单证 (Incoterms & Shipping Documents):\n- **FOB (离岸价 / 船上交货价)**：卖方在指定装运港将货物装上船即完成交货。\n- **CIF (到岸价 / 成本加保险费、运费)**：卖方承担运费与海上运输保险费至目的港。\n- **海运提单 (hǎiyùn tídān, B/L)**：物权凭证与海上运输契约证明。\n- **报关与清关 (bàoguān yǔ qīngguān)**：向海关申报进出口货物并办理查验放行手续。\n\n2. 智慧集装箱港口运营 (Smart Port Logistics):\n- **全自动化码头** / **无人集卡 (AGV)** / **智能岸桥吊装**。",
            "examples": [
                {
                    "target": "外贸业务主管与外商谈判交货条件：‘鉴于近期国际海运运费波动，本次两千个集装箱的出口订单我们建议采用上海港FOB条款，提单将在货物装船后电放。’",
                    "reading": "Wàimào yèwù zhǔguǎn yǔ wàishāng tánpàn jiāohuò tiáojiàn: ‘Jiànyú jìnqī guójì hǎiyùn yùnfèi bōdòng, běncì liǎngqiān gè jízhuāngxiāng de chūkǒu dìngdān wǒmen jiànyì cǎiyòng Shànghǎi gǎng FOB tiáokuǎn, tídān jiāng zài huòwù zhuāngchuán hòu diànfàng.’",
                    "translation": "The trade supervisor negotiated: 'Given shipping freight fluctuations, we propose FOB Shanghai port for this 2,000-container order; the B/L will be telex released upon boarding.'"
                },
                {
                    "target": "报关员在海关窗口快速完成申报：‘所有进口报关单据、原产地证书与商检报告均已在线提交，海关系统秒级审核，货物顺利完成通关查验！’",
                    "reading": "Bàoguānyuán zài hǎiguān chuāngkǒu kuàisù wánchéng shēnbào: ‘Suǒyǒu jìnkǒu bàoguān dānjù, yuánchǎndì zhèngshū yǔ shāngjiǎn bàogào jūn yǐ xiànshang tíjiāo, hǎiguān xìtǒng miǎojí shěnhé, huòwù shùnlì wánchéng tōngguān cháyàn!’",
                    "translation": "The customs broker completed filing: 'All import declaration forms, certificate of origin, and inspection reports are submitted online for instant clearance verification!'"
                },
                {
                    "target": "港务集团工程师介绍洋山深水港：‘作为全球最大的自动化集装箱码头，洋山港依托人工智能调度系统与5G无人集卡，实现了全天候无人化智慧装卸。’",
                    "reading": "Gǎngwù jítuán gōngchéngshī jièshào Yángshān shēnshuǐgǎng: ‘Zuòwéi quánqiú zuìdà de zìdònghuà jízhuāngxiāng mǎtóu, Yángshāngǎng yītuō réngōng zhìnéng diàodù xìtǒng yǔ 5G wúrán jíkǎ, shíxiàn le quántiānhòu wúrénhuà zhìnéng zhuāngxiè.’",
                    "translation": "The port engineer introduced: 'As the world's largest automated container terminal, Yangshan Port relies on AI dispatch and 5G AGVs for 24/7 unmanned smart handling.'"
                }
            ],
            "mnemonics": [
                "Trade & Ports: FOB (离岸), CIF (到岸), 提单 (Bill of Lading), 报关清关 (Customs Clearance)!"
            ],
            "culturalNotes": [
                "Shanghai Yangshan Deep-Water Port is the world's busiest container port, operating the largest automated container terminal with automated guided vehicles (AGVs)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "国际海运贸易中，作为承运人签发的物权凭证、代表货物所有权并用于提取货物的核心单据是：",
                    "options": [
                        "门票",
                        "海运提单 (Hǎiyùn tídān — Bill of Lading / B/L)",
                        "邀请函"
                    ],
                    "answerIndex": 1,
                    "explanation": "海运提单 (B/L) is the definitive document of title in international maritime trade."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在国际贸易术语中，卖方负责支付货物运至指定目的港所需的运费和保险费的贸易条款是：",
                    "options": [
                        "CIF (Cost, Insurance and Freight / 到岸价)",
                        "EXW (工厂交货)",
                        "货到付款"
                    ],
                    "answerIndex": 0,
                    "explanation": "CIF includes cost, insurance, and freight to the destination port."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于国际供应链物流与海关通关流程，下列哪一项表述完全正确？",
                    "options": [
                        "集装箱海运不需要经过海关查验",
                        "海关通关需经历报关、审单、查验、征税与放行流程，海运提单是物权转移的核心法律凭证 (Customs involves declaration/inspection/release; B/L is the core document of title)",
                        "货物装船之后不能签发提单"
                    ],
                    "answerIndex": 1,
                    "explanation": "Correctly outlines the customs clearance sequence and the legal status of the Bill of Lading."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi term for 'Bill of Lading in maritime transport' (海运提单):",
                    "acceptedAnswers": [
                        "海运提单",
                        "haiyuntidan",
                        "hǎiyùntídān",
                        "Hǎiyùntídān",
                        "Haiyuntidan",
                        "海運提單"
                    ],
                    "explanation": "海运提单 (hǎiyùn tídān) means 'Ocean Bill of Lading (B/L)'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u24-l3": {
        "id": "zh-u24-l3",
        "unit": "zh-u24",
        "level": "B2",
        "objective": "Master the discourse of cross-border e-commerce (跨境电商 cross-border e-commerce, 独立站 DTC independent store, 保税区 bonded warehouse, 海外仓 overseas warehouse, 一件代发 drop-shipping).",
        "prerequisites": [
            "zh-u24-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u24-l2"
            ]
        },
        "presentation": {
            "explanation": "以 SHEIN、Temu、AliExpress 为代表的中国跨境电商平台与「出海品牌」正在深刻重塑全球数字化零售格局！\n\n1. 跨境电商核心商业模式 (Cross-Border E-Commerce Models):\n- **跨境电商零售出口 / 进口 (B2C / B2B2C)**。\n- **独立站 (dúlìzhàn)**：品牌出海自建的 DTC（Direct-to-Consumer）官方电商网站。\n- **保税区备货 (bǎoshuìqū bèihuò)**：利用海关保税物流中心提前批量备货，消费者下单后极速通关配送。\n- **海外仓 (hǎiwàicāng)**：在海外主要消费国建立或租赁的仓储物流基地，实现本地化**一件代发 (yíjiàn dàifā)** 与售后退换货。\n\n2. 跨境数字营销与柔性供应链 (Digital Marketing & Agile Supply Chain):\n- **小单快反 (Agile small-batch on-demand manufacturing)** / **海外社交媒体精准投放**。",
            "examples": [
                {
                    "target": "跨境电商品牌负责人在行业论坛上分享：‘我们依托珠三角极致的“小单快反”柔性供应链，在独立站上每天上新数百款服饰，通过海外仓实现欧美主要城市三日内送达！’",
                    "reading": "Kuàjìng diànshāng pǐnpái fùzérén zài hángyè lùntán shang fēnxiǎng: ‘Wǒmen yītuō Zhū-sān-jiǎo jízhì de “xiǎodān-kuàifǎn” róuxìng gōngyìngliàn, zài dúlìzhàn shang měitiān shàngxīn shùbǎi kuǎn fúshì, tōngguò hǎiwàicāng shíxiàn Ōu-Měi zhǔyào chéngshì sān rì nèi sòngdá!’",
                    "translation": "The brand head shared: 'Relying on Pearl River Delta's agile small-batch supply chain, we launch hundreds of styles daily on our independent site, delivering within 3 days in Western cities via overseas warehouses!'"
                },
                {
                    "target": "大卫在跨境电商研讨课上分析案例：‘保税区模式让国内消费者享受到了“全球购”的价格优势与同城快递般的收货速度，展现了自贸试验区与海关监管创新的强大活力。’",
                    "reading": "Dàwèi zài kuàjìng diànshāng yántǎokè shang fēnxī ànlì: ‘Bǎoshuìqū móshì ràng guónèi xiāofèizhě xiǎngshòu dào le “quánqiúgòu” de jiàgé yōushì yǔ tóngchéng kuàidì bān de shōuhuò sùdù, zhǎnxiàn le zìmào shìyànqū yǔ hǎiguān jiānguǎn chuàngxīn de qiángdà huólì.’",
                    "translation": "David analyzed: 'The bonded warehouse model allows consumers to enjoy global shopping prices with domestic delivery speed, showing the vitality of FTZ customs innovations.'"
                },
                {
                    "target": "海外仓仓储经理向新入驻商家说明：‘入驻海外仓后，客户下单将由系统自动分配至离消费者最近的仓库一件代发，极大降低了跨境退换货的沟通与物流成本。’",
                    "reading": "Hǎiwàicāng cāngchǔ jīnglǐ xiàng xīn rùzhù shāngjiā shuōmíng: ‘Rùzhù hǎiwàicāng hòu, kèhù xiàdān jiāng yóu xìtǒng zìdòng fēnpèi zhì lí xiāofèizhě zuì jìn de cāngkù yíjiàn-dàifā, jídà jiàngdī le kuàjìng tuìhuànhuò de gōutōng yǔ wùliú chéngběn.’",
                    "translation": "The warehouse manager explained: 'Joining the overseas warehouse allows automatic order routing to the closest facility for drop-shipping, slashing cross-border return costs.'"
                }
            ],
            "mnemonics": [
                "Cross-Border E-Commerce: 独立站 (DTC Site), 保税区 (Bonded Zone), 海外仓 (Overseas Warehouse), 一件代发 (Drop-Shipping)!"
            ],
            "culturalNotes": [
                "The 'Small-order, rapid-response' (小单快反) agile manufacturing model pioneered in Guangdong creates rapid testing of thousands of SKU prototypes with 7-day turnaround from design to global consumer delivery."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "跨境电商企业为了提升海外消费者的本地化收货速度并提供退换货服务，在目标市场国家设立的仓储物流设施被称为：",
                    "options": [
                        "报废仓库",
                        "海外仓 (Hǎiwàicāng — Overseas warehouse)",
                        "露天垃圾站"
                    ],
                    "answerIndex": 1,
                    "explanation": "海外仓 (hǎiwàicāng) is the overseas fulfillment center used by cross-border merchants."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "跨境电商卖家在接到单笔消费者订单后、由海外仓或货源供应商直接打包并发运至终端买家的物流代发模式被称为：",
                    "options": [
                        "一件代发 (Yíjiàn dàifā — Single-item drop-shipping / piece-by-piece fulfillment)",
                        "整船包租",
                        "自提自运"
                    ],
                    "answerIndex": 0,
                    "explanation": "一件代发 (yíjiàn dàifā) is drop-shipping / single-order automated fulfillment."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国跨境电商与品牌出海的商业生态，下列哪一项表述完全正确？",
                    "options": [
                        "海外仓严禁进行退换货处理",
                        "中国商品只能依靠传统集市地摊销售",
                        "跨境电商依托柔性供应链‘小单快反’、DTC独立站与海外仓网络，实现了全球数字化零售的高效协同 (Empowered by agile supply chains, DTC sites, and overseas warehouses)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately captures the ecosystem of agile manufacturing, DTC stores, and overseas warehousing."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi term for 'overseas warehouse' (海外仓):",
                    "acceptedAnswers": [
                        "海外仓",
                        "haiwaicang",
                        "hǎiwàicāng",
                        "Hǎiwàicāng",
                        "Haiwaicang",
                        "海外倉"
                    ],
                    "explanation": "海外仓 (hǎiwàicāng) means 'overseas warehouse / fulfillment center'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u24-l4": {
        "id": "zh-u24-l4",
        "unit": "zh-u24",
        "level": "B2",
        "objective": "Master trade finance and financial risk management instruments (跟单信用证 Documentary L/C, 出口押汇 export bill discounting, 远期结售汇 forward FX, 套期保值 hedging, 汇率对冲 FX risk mitigation).",
        "prerequisites": [
            "zh-u24-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u24-l3"
            ]
        },
        "presentation": {
            "explanation": "在巨额跨国贸易中，**贸易融资工具与外汇风险对冲机制**是确保资金链安全与利润稳定的核心财务防线！\n\n1. 贸易融资与信用证业务 (Trade Finance & L/C Operations):\n- **跟单信用证 (L/C, Documentary Letter of Credit)**：开证行根据买方申请向卖方开出的有条件付款承诺保证。\n- **出口押汇 / 贴现 (Bill Discounting)**：卖方在发货后将全套货运单据质押给银行提前获得融资贷款。\n- **不符点 (Discrepancy)**：单据与信用证条款不完全一致时的拒付风险点。\n\n2. 汇率风险管理与套期保值 (Forex Risk Hedging):\n- **远期结售汇 (Forward FX)**：提前锁定未来特定日期的汇率，规避汇率剧烈波动风险。\n- **套期保值 (tàoqī bǎozhí, Hedging)**：利用金融衍生工具对冲大宗商品价格或外汇汇率波动。",
            "examples": [
                {
                    "target": "跨国集团资金主管在财务会议上汇报：‘为防范未来三个月内汇率大幅震荡侵蚀出口利润，我们已与中国银行签署了五千万欧元的远期结售汇套期保值合约，成功锁定了净利润率！’",
                    "reading": "Kuàguó jítuán zījīn zhǔguǎn zài cáiwù huìyì shang huìbào: ‘Wèi fángfàn wèilái sān gè yuè nèi huìlǜ dàfú zhèndàng qīnshí chūkǒu lìrùn, wǒmen yǐ yǔ Zhōngguó Yínháng qiānshǔ le wǔqiān wàn Ōuyuán de yuǎnqī jiéshòuhuì tàoqī-bǎozhí héyuē, chénggōng suǒdìng le jìnglìrùnlǜ!’",
                    "translation": "The treasury manager reported: 'To prevent forex fluctuations eroding margins over the next 3 months, we signed a €50M forward FX hedging contract with Bank of China, locking in our net margin!'"
                },
                {
                    "target": "单证员认真审慎核对全套出运单据：‘跟单信用证业务要求做到“单单一致、单证一致”，哪怕标点符号或拼写出现微小不符点，都可能遭遇开证行拒付风险。’",
                    "reading": "Dānzhèngyuán rènzhēn shěnshèn héduì quántào chūyùn dānjù: ‘Gēndān xìnyòngzhèng yèwù yāoqiú zuòdào “dān-dān yízhì, dān-zhèng yízhì”, nǎpà biāodiǎnfúhào huò pīnxiě chūxiàn wēixiǎo bùfúdiǎn, dōu kēng néng zāoyù kāizhèngháng jùfù fēngxiǎn.’",
                    "translation": "The document specialist verified: 'Documentary L/C requires complete consistency across documents and credit terms; even minor discrepancies can trigger refusal by the issuing bank.'"
                },
                {
                    "target": "大卫在国际金融案例课上发言：‘利用出口押汇工具，外贸企业能够在货物启运后第一时间收回流动资金，极大地盘活了企业的现金流周转。’",
                    "reading": "Dàwèi zài guójì jīnróng ànlìkè shang fāyán: ‘Lìyòng chūkǒu yāhuì gōngjù, wàimào qǐyè nénggòu zài huòwù qǐyùn hòu dì-yī shíjiān shōuhuí liúdòng zījīn, jídà de pánhuó le qǐyè de xiànjīnliú zhōuzhuǎn.’",
                    "translation": "David stated: 'Using export bill discounting, trading enterprises recover working capital immediately after shipment, revitalizing corporate cash flow turnaround.'"
                }
            ],
            "mnemonics": [
                "Trade Finance: 信用证 L/C (Payment Guarantee), 单单一致 (Strict Compliance), 远期结售汇 (Forward Lock), 套期保值 (Hedging)!"
            ],
            "culturalNotes": [
                "International trade settlement via Letters of Credit is governed globally by the International Chamber of Commerce's Uniform Customs and Practice for Documentary Credits (UCP 600)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在跨国贸易结算中，银行根据进口商申请向出口商开立的、承诺在单证一致条件下支付货款的书面凭证是：",
                    "options": [
                        "借据",
                        "信用证 (Xìnyòngzhèng — Letter of Credit / L/C)",
                        "普通贺卡"
                    ],
                    "answerIndex": 1,
                    "explanation": "信用证 (L/C) is the definitive banking payment undertaking in international commerce."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "外贸企业为了防止未来外币汇率剧烈下跌导致出口亏损，在银行提前锁定未来交割汇率的金融操作是：",
                    "options": [
                        "远期结售汇 / 套期保值 (Forward FX settlement / Hedging)",
                        "随波逐流",
                        "停止所有贸易"
                    ],
                    "answerIndex": 0,
                    "explanation": "远期结售汇 and 套期保值 lock in future exchange rates to eliminate currency volatility."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于跨国贸易金融结算与风险控制原则，下列哪一项表述完全正确？",
                    "options": [
                        "信用证不需要审核单据内容",
                        "所有跨国贸易都不能使用金融衍生品对冲风险",
                        "跟单信用证严格遵循‘单单一致、单证一致’原则，企业通过远期外汇合约套期保值能够有效锁定经营利润 (Strict compliance for L/Cs; forward FX contracts hedge currency risks)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately articulates the core principles of documentary credit compliance and FX risk hedging."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi term for 'Letter of Credit' (信用证):",
                    "acceptedAnswers": [
                        "信用证",
                        "xinyongzheng",
                        "xìnyòngzhèng",
                        "Xìnyòngzhèng",
                        "Xinyongzheng",
                        "信用證"
                    ],
                    "explanation": "信用证 (xìnyòngzhèng) means 'Letter of Credit (L/C)'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u24-l5": {
        "id": "zh-u24-l5",
        "unit": "zh-u24",
        "level": "B2",
        "objective": "Synthesize all banking, trade finance, maritime logistics, cross-border e-commerce, and global supply chain resilience discourse into international economic summits and WTO trade dialogues.",
        "prerequisites": [
            "zh-u24-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u24-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第二十四单元的所有金融结算、港口航运、跨境电商与供应链风控体系，在世界经贸合作高峰论坛与高水平对外开放战略对话中进行高阶论述与综合实战！\n\n1. 现代全球经贸与智慧供应链全景矩阵 (Master Global Trade & Supply Chain Matrix):\n| 业务支柱维度 | 核心机制与专业语用 | 综合功能与全球价值 |\n| :--- | :--- | :--- |\n| **金融结算** | 跨境电汇 / 信用证 / CIPS系统 | 确保全球资金安全、高效与多币种清算 |\n| **航运港口** | 提单 / 自动化集装箱码头 / FOB/CIF | 畅通海上大动脉，保障国际物流大循环 |\n| **跨境数字贸易** | 独立站 / 保税区备货 / 海外仓代发 | 数字化赋能品牌出海，连接全球终端买家 |\n| **风险管理** | 远期结售汇 / 汇率套期保值 | 提升跨国企业抗风险能力与财务稳健度 |\n| **对外开放** | 自贸试验区 / 一带一路 / 制度型开放 | 构建更具韧性、包容与共赢的全球经贸网络 |\n\n2. 第二十四单元实战交际演练 (Unit 24 World Trade Summit):\n- 跨国供应链韧性与数字贸易合作国际峰会主旨演讲与闭门圆桌讨论。",
            "examples": [
                {
                    "target": "商务部国际经贸关系司代表在世贸组织边会上发言：‘中国坚定推进高水平对外开放，依托完备的制造业体系、世界一流的枢纽港口群与充满活力的跨境电商新业态，为维护全球产业链供应链稳定畅通贡献了坚实力量！’",
                    "reading": "Shāngwùbù guójì jīngmào guānxì sī dàibiǎo zài Shìmào Zǔzhī biānhuì shang fāyán: ‘Zhōngguó jiāndìng tuījìn gāoshuǐpíng duìwài kāifàng, yītuō wánbèi de zhìzàoyè tǐxì, shìjiè yīliú de shūniǔ gǎngkǒu qún yǔ chōngmǎn huólì de kuàjìng diànshāng xīn yètài, wèi wéihù quánqiú chǎnyèliàn gōngyìngliàn wěndìng chàngtōng gòngxiàn le jiānshí lìliang!’",
                    "translation": "The trade representative spoke at the WTO: 'China steadily advances high-standard opening-up, relying on a complete manufacturing system, world-class port hubs, and vibrant cross-border e-commerce to contribute to stable global supply chains!'"
                },
                {
                    "target": "大卫在国际供应链高管论坛上作专题报告：‘数字化赋能正在深刻改变全球贸易的运作方式，从无人港口的智慧调度到跨境电商海外仓的秒级履约，科技让跨国贸易更加透明、敏捷与韧性十足！’",
                    "reading": "Dàwèi zài guójì gōngyìngliàn gāoguǎn lùntán shang zuò zhuāntí bàogào: ‘Shùzìhuà fùnéng zhèngzài shēnkè gǎibiàn quánqiú màoyì de yùnzuò fāngshì, cóng wúréngǎngkǒu de zhìhuì diàodù dào kuàjìng diànshāng hǎiwàicāng de miǎojí lǚyuē, kējì ràng kuàguó màoyì gèngjiā tòumíng, mǐnjié yǔ rènxìng shízú!’",
                    "translation": "David presented: 'Digitalization is transforming global trade; from unmanned port dispatch to instant overseas warehouse fulfillment, technology makes cross-border commerce transparent, agile, and resilient!'"
                },
                {
                    "target": "财经评论员总结：‘通过深化自贸试验区改革、推动人民币跨境结算以及拓展“丝路电商”，中国正与世界各国携手构建开放型世界经济体系，共享数字经贸时代的繁荣红利！’",
                    "reading": "Cáijīng pínglùnyuán zǒngjié: ‘Tōngguò shēnhuà zìmào shìyànqū gǎigé, tuīdòng Rénmínbì kuàjìng jiésuàn yǐjí tuòzhǎn “Sīlù Diànshāng”, Zhōngguó zhèng yǔ shìjiè gèguó xiéshǒu gòujiàn kāifàngxíng shìjiè jīngjì tǐxì, gòngxiǎng shùzì jīngmào shídài de fánróng hónglì!’",
                    "translation": "The financial analyst concluded: 'Deepening FTZ reforms, promoting cross-border RMB settlements, and expanding Silk Road E-Commerce build an open world economy sharing digital dividends!'"
                }
            ],
            "mnemonics": [
                "Trade Resiliency: Seamless Finance (金融清算) + Smart Shipping (港口物流) + Overseas Warehouses (海外仓) + Hedging (套期保值) = Global Prosperity!"
            ],
            "culturalNotes": [
                "«丝路电商» (Silk Road E-Commerce) represents China's international cooperation platform extending Belt and Road connectivity through bilateral cross-border e-commerce agreements and digital trade corridors."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "形容在全球贸易受到地缘政治或外部冲击时、供应链各环节依然能够快速调整恢复并维持正常运转的核心能力是：",
                    "options": [
                        "供应链韧性 (Supply chain resilience)",
                        "一击即溃",
                        "闭关自守"
                    ],
                    "answerIndex": 0,
                    "explanation": "供应链韧性 (gōngyìngliàn rènxìng, Supply chain resilience) is the capacity to withstand disruptions and maintain stable trade flows."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "中国提出的旨在与共建国家共享数字经济发展红利、深化双边数字贸易与跨境电商合作的国际经贸倡议品牌是：",
                    "options": [
                        "丝路电商 (Silk Road E-Commerce)",
                        "闭门造车",
                        "原始物物交换"
                    ],
                    "answerIndex": 0,
                    "explanation": "丝路电商 (Silk Road E-Commerce) is China's official international initiative for cross-border digital commerce cooperation."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国在全球经贸网络、供应链枢纽与跨境金融中的战略角色，下列哪一项总括完全正确？",
                    "options": [
                        "中国完全退出了全球经贸合作",
                        "中国依托完备的产业体系、全球前列的港口群、创新的跨境电商与人民币跨境支付网络，成为维护全球供应链韧性与数字贸易的重要中坚力量 (Anchor of global supply chain resilience and digital commerce)",
                        "跨境电商已经停止所有海外业务"
                    ],
                    "answerIndex": 1,
                    "explanation": "Comprehensive and accurate summation of China's pivotal role in global trade, logistics, and digital finance."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character phrase meaning 'Silk Road E-Commerce / international digital trade initiative' (丝路电商):",
                    "acceptedAnswers": [
                        "丝路电商",
                        "siludianshang",
                        "sīlùdiànshāng",
                        "Sīlùdiànshāng",
                        "Siludianshang",
                        "絲路電商"
                    ],
                    "explanation": "丝路电商 (sīlù diànshāng) means 'Silk Road E-Commerce'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u25-l1": {
        "id": "zh-u25-l1",
        "unit": "zh-u25",
        "level": "C1",
        "objective": "Master Chinese cinematic aesthetics and directorial discourse (第五代 Fifth Generation, 第六代 Sixth Generation, 视听语言 audio-visual language, 长镜头 long take, 蒙太奇 montage, 隐喻 metaphor).",
        "prerequisites": [
            "zh-u24-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u24-l5"
            ]
        },
        "presentation": {
            "explanation": "中国电影历经百余年发展，从第五代导演的宏大历史叙事与浓烈色彩美学，到第六代导演的都市底层聚焦与写实纪实，构成了丰富多维的视听光谱！\n\n1. 导演代际与美学风格 (Generational Directorial Aesthetics):\n- **第五代导演 (Fifth Generation)**：以张艺谋、陈凯歌为代表，善用**饱满的浓烈色彩**、**仪式化民俗符号**与**历史宏大反思**（如《红高粱》《霸王别姬》）。\n- **第六代导演 (Sixth Generation)**：以贾樟柯、王小帅为代表，偏重**纪实美学**、**长镜头调度**与**边缘个体的生存状态**（如《三峡好人》《小武》）。\n\n2. 电影批评与视听分析专业语汇 (Cinematic Criticism Vocabulary):\n- **长镜头 (chángjìngtóu, Long take)** / **声画对位 (Sound-image counterpoint)** / **意象隐喻 (Metaphorical imagery)**。",
            "examples": [
                {
                    "target": "电影学者在学术研讨会上深入剖析：‘第五代导演作品中那种摄人心魄的红黄对比色调与庄严肃穆的仪式感，将中国传统宗法社会的历史阵痛转化为极具震撼力的视觉史诗。’",
                    "reading": "Diànyǐng xuézhě zài xuéshù yántǎohuì shang shēnrù pōuxī: ‘Dì-wǔ-dài dǎoyǎn zuòpǐn zhōng nà zhǒng shèrén-xīnpò de hóng-huáng duìbǐ sèdiào yǔ zhuāngyán sùmù de yíshìgǎn, jiāng Zhōngguó chuántǒng zōngfǎ shèhuì de lìshǐ zhèntòng zhuǎnhuà wéi jí jù zhènhànlì de shìjué shǐshī.’",
                    "translation": "The film scholar analyzed: 'The soul-stirring red-yellow color contrast and ritual solemnity in Fifth Generation films transform the historic pains of patriarchal society into visual epics.'"
                },
                {
                    "target": "大卫在影评专栏中写道：‘贾樟柯导演擅长运用不动声色的固定长镜头与自然环境音效，以冷峻而深情的纪实笔触记录时代巨变下普通工人的生活切片与精神流变。’",
                    "reading": "Dàwèi zài yǐngpíng zhuānlán zhōng xiědào: ‘Jiǎ Zhāngkē dǎoyǎn shàncháng yùnyòng búdòng-shēngsè de gùdìng chángjìngtóu yǔ zìrán huánjìng yīnxiào, yǐ lěngjùn ér shēnqíng de jìshí bǐchù jìlù shídài jùbiàn xià pǔtōng gōngrén de shēnghuó qiēpiàn yǔ jīngshén liúbiàn.’",
                    "translation": "David wrote: 'Director Jia Zhangke utilizes impassive static long takes and natural ambient sounds to record slices of ordinary workers' lives amidst seismic shifts.'"
                },
                {
                    "target": "青年导演在剧组阐述创作意图：‘我们通过视听语言的声画对位与隐喻蒙太奇，打破了线性时间的叙事束缚，赋予影片耐人寻味的哲学厚度。’",
                    "reading": "Qīngnián dǎoyǎn zài jùzǔ chǎnshù chuàngzuò yìtú: ‘Wǒmen tōngguò shìtīng yǔyán de shēng-huà duìwèi yǔ yǐnyù méngtàiqí, dǎpò le xiànxìng shíjiān de xùshì shùfù, fùyǔ yǐngpiàn nàirénxúnwèi de zhéxué hòudù.’",
                    "translation": "The director explained: 'Through audio-visual sound-image counterpoint and metaphoric montage, we broke linear narrative constraints, giving the film philosophical depth.'"
                }
            ],
            "mnemonics": [
                "Cinema Waves: 第五代 (Visual Epic & Color), 第六代 (Docu-Realism & Long Takes), 视听语言 (Audio-Visual Synthesis)!"
            ],
            "culturalNotes": [
                "The 1980s-90s Fifth Generation of Chinese Cinema emerged from the Beijing Film Academy class of 1982, winning top honors at Cannes, Venice, and Berlin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在中国电影史中，以张艺谋、陈凯歌为代表、善于运用浓烈民俗色彩与宏大历史反思的导演群体被称为：",
                    "options": [
                        "业余爱好者",
                        "第五代导演 (Fifth Generation Directors)",
                        "先锋漫画家"
                    ],
                    "answerIndex": 1,
                    "explanation": "第五代导演 refers to the seminal group of filmmakers graduating in 1982."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "电影摄影与视听批评中，指在较长时间内不间断拍摄一个完整场景、保持时空连续性的经典拍摄技法是：",
                    "options": [
                        "长镜头 (Long take / Plan-séquence)",
                        "定格动画",
                        "黑屏"
                    ],
                    "answerIndex": 0,
                    "explanation": "长镜头 (chángjìngtóu) is the unbroken long take in film aesthetics."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国当代电影代际美学与视听批评术语，下列哪一项完全正确？",
                    "options": [
                        "第五代导演注重宏大历史叙事与色彩象征，第六代导演多以写实长镜头关注个体生存，两者共同构筑了中国电影美学的多元格局 (Fifth Gen focuses on epic symbolism; Sixth Gen captures realism with long takes)",
                        "电影评论只能评价票房数字",
                        "电影画面不需要考虑光影和构图"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately synthesizes the stylistic evolutions and critical vocabulary of Fifth and Sixth Generation Chinese cinema."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi term for 'long take in cinema cinematography' (长镜头):",
                    "acceptedAnswers": [
                        "长镜头",
                        "changjingtou",
                        "chángjìngtóu",
                        "Chángjìngtóu",
                        "Changjingtou",
                        "長鏡頭"
                    ],
                    "explanation": "长镜头 (chángjìngtóu) means 'long take / continuous take'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u25-l2": {
        "id": "zh-u25-l2",
        "unit": "zh-u25",
        "level": "C1",
        "objective": "Master contemporary literary criticism and magical realism discourse (寻根文学 Root-Seeking Literature, 魔幻现实主义 Magical Realism, 乡土叙事 rural native-soil narrative, 荒诞与象征 absurdity and symbolism, 意识流 stream of consciousness).",
        "prerequisites": [
            "zh-u25-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u25-l1"
            ]
        },
        "presentation": {
            "explanation": "中国当代文学在承袭深厚乡土叙事传统的同时，融合了拉美魔幻现实主义与西方现代派技巧，迸发出惊人的艺术创造力！\n\n1. 寻根文学与魔幻现实主义 (Root-Seeking & Magical Realism):\n- **寻根文学 (Root-Seeking Literature)**：20世纪80年代探寻中华民族古老文化心理与原生生命力的文学思潮（如阿城、韩少功）。\n- **魔幻现实主义 (Magical Realism)**：将**民间神话传说、幻觉荒诞情节**与**残酷历史真实**熔于一炉（如莫言《红高粱家族》《丰乳肥臀》）。\n- **莫言 (Mo Yan)**：2012年荣获诺贝尔文学奖，颁奖词称其‘将民间故事、历史与当代融为一体的魔幻现实主义’。\n\n2. 高阶文学批评句式 (Literary Criticism Syntactic Patterns):\n- ‘文本巧妙运用**多重叙事视角**与**象征隐喻**，在虚实交织中解构了传统线性历史，直抵人性的深层律动。’",
            "examples": [
                {
                    "target": "文学评论家在国际文学论坛上评价莫言作品：‘莫言将高密东北乡的民间传奇、萨满神话与二十世纪中国社会巨变紧密交织，以狂放不羁的语言创造了一个亦真亦幻、充满原始生命力的文学世界。’",
                    "reading": "Wénxué pínglùnjiā zài guójì wénxué lùntán shang píngjià Mò Yán zuòpǐn: ‘Mò Yán jiāng Gāomì Dōngběixiāng de mínjiān chuánqí, sàmǎn shénhuà yǔ èrshí shìjì Zhōngguó shèhuì jùbiàn jǐnmì jiāozhī, yǐ kuángfàng-bùjī de yǔyán chuàngzào le yí gè yì zhēn yì huàn, chōngmǎn yuánshǐ shēngmìnglì de wénxué shìjiè.’",
                    "translation": "The literary critic evaluated: 'Mo Yan intertwines Gaomi folklore and shamanic myths with 20th-century social upheaval, creating an exuberant literary universe of raw vitality.'"
                },
                {
                    "target": "大卫在比较文学研讨班上发言：‘寻根文学作家不仅重返历史与楚汉文化的深山秘境，更通过反思宗法伦理对人性的压抑，实现了对现代文明困境的深刻叩问。’",
                    "reading": "Dàwèi zài bǐjiào wénxué yántǎobān shang fāyán: ‘Xúngēn wénxué zuòjiā bùjǐn zhòngfǎn lìshǐ yǔ Chǔ-Hàn wénhuà de shēnshān mìjìng, gèng tōngguò fǎnsī zōngfǎ lúnlǐ duì rénxìng de yāyì, shíxiàn le duì xiàndài wénmíng kùnjìng de shēnkè kòuwèn.’",
                    "translation": "David stated: 'Root-seeking authors not only return to ancient cultural wildernesses but deeply interrogate modern civilization through reflections on patriarchal ethics.'"
                },
                {
                    "target": "教授在讲评当代小说时指出：‘余华的《活着》通过最平实克制的白描手法，写尽了生命的苦难与坚韧，其悲悯的人道主义情怀打动了全世界数以千万计的读者。’",
                    "reading": "Jiàoshòu zài jiǎngpíng dāngdài xiǎoshuō shí zhǐchū: ‘Yú Huá de «Huózhe» tōngguò zuì píngshí kèzhì de báimiáo shǒufǎ, xiějìn le shēngmìng de kǔnàn yǔ jiānrèn, qí bēimǐn de réndàozhǔyì qínghuái dǎdòng le quán shìjiè shù yǐ qiānwàn jì de dúzhě.’",
                    "translation": "The professor noted: 'Yu Hua's To Live captures suffering and resilience through restrained plain narration, touching millions globally with compassionate humanism.'"
                }
            ],
            "mnemonics": [
                "Contemporary Literature: 寻根 (Root-Seeking), 魔幻现实 (Mo Yan / Magical Realism), 白描苦难 (Yu Hua / Plain Realism)!"
            ],
            "culturalNotes": [
                "In 2012, Mo Yan became the first Chinese citizen to win the Nobel Prize in Literature."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "20世纪80年代中国文坛掀起的探寻民族古老文化心理与原生生命力的重要文学思潮是：",
                    "options": [
                        "网络爽文",
                        "寻根文学 (Root-Seeking Literature)",
                        "科幻爽剧"
                    ],
                    "answerIndex": 1,
                    "explanation": "寻根文学 (Root-Seeking Literature) was the major literary movement of the mid-1980s."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "2012年凭借将民间故事、历史与当代相融合的‘魔幻现实主义’荣获诺贝尔文学奖的中国作家是：",
                    "options": [
                        "莫言 (Mo Yan)",
                        "金庸",
                        "鲁迅"
                    ],
                    "answerIndex": 0,
                    "explanation": "莫言 (Mo Yan) won the 2012 Nobel Prize in Literature."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国当代文学在主题探索与艺术手法上的特征，下列哪一项表述完全正确？",
                    "options": [
                        "当代中国文学没有任何翻译价值",
                        "当代文学融合了本土寻根意识、乡土现实主义与魔幻现实主义等多元手法，展现了深邃的历史反思与人道主义情怀 (Blends native root-seeking, rural realism, and magical realism with profound humanist depths)",
                        "所有中国小说都只描写古代神仙"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately synthesizes contemporary Chinese literary trends and global aesthetic achievements."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 2-character Hanzi pen name of China's 2012 Nobel Laureate in Literature (莫言):",
                    "acceptedAnswers": [
                        "莫言",
                        "moyan",
                        "mòyán",
                        "Mòyán",
                        "Moyan"
                    ],
                    "explanation": "莫言 (Mò Yán) is China's 2012 Nobel Laureate in Literature."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u25-l3": {
        "id": "zh-u25-l3",
        "unit": "zh-u25",
        "level": "C1",
        "objective": "Master the discourse of contemporary Chinese sci-fi literature and philosophical worldbuilding (刘慈欣 Liu Cixin, 雨果奖 Hugo Award, 《三体》The Three-Body Problem, 黑暗森林法则 Dark Forest theory, 降维打击 dimensional strike, 终极关怀 ultimate existential concern).",
        "prerequisites": [
            "zh-u25-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u25-l2"
            ]
        },
        "presentation": {
            "explanation": "以刘慈欣《三体》荣获世界科幻「雨果奖（Hugo Award）」为标志，中国科幻文学迎来了全球瞩目的黄金时代！\n\n1. 《三体》核心科幻概念与哲学命题 (Three-Body Cosmology & Philosophical Concepts):\n- **黑暗森林法则 (Dark Forest Theory)**：宇宙就是一座黑暗森林，每个文明都是带枪的猎人，一旦发现其他文明生命便必须予以消灭以保障自身生存。\n- **降维打击 (Dimensional Strike / Dimensional Reduction Attack)**：利用高维向低维坍缩的物理规律对敌方文明实施毁灭性攻击；在商业与当代流行语中泛指跨界颠覆。\n- **给岁月以文明，而不是给文明以岁月**：对人类文明存续与道德底线的终极哲学追问。\n\n2. 硬科幻文学批评语汇 (Hard Sci-Fi Criticism):\n- **硬科幻 (Hard Sci-Fi)** / **宏大宇宙观** / **技术奇点 (Technological Singularity)**。",
            "examples": [
                {
                    "target": "科幻文学评论家在世界科幻大会上赞扬：‘刘慈欣的《三体》将极为硬核的前沿天体物理学推演与波澜壮阔的文明演进史熔为一炉，以冷酷而宏伟的“黑暗森林法则”震撼了全世界读者！’",
                    "reading": "Kēhuàn wénxué pínglùnjiā zài shìjiè kēhuàn dàhuì shang zànyáng: ‘Liú Cíxīn de «Sāntǐ» jiāng jíwéi yìnghé de qiányán tiāntǐ wùlǐxué tuīyǎn yǔ bōlán-zhuàngkuò de wénmíng yǎnjìnshǐ róng wéi yì lú, yǐ lěngkù ér hóngwěi de “hēi'àn sēnlín fǎzé” zhènhàn le quán shìjiè dúzhě!’",
                    "translation": "The sci-fi critic praised: 'Liu Cixin's The Three-Body Problem fuses hard astrophysics deductions with civilization's epic rise and fall, stunning global readers with the ruthless Dark Forest Theory!'"
                },
                {
                    "target": "大卫在学术沙龙中探讨科幻跨界影响：‘源自《三体》的“降维打击”一词早已跨越文学边界，成为全球商业竞争、科技创新与战略思考中最具启发性的经典隐喻。’",
                    "reading": "Dàwèi zài xuéshù shālóng zhōng tàntǎo kēhuàn kuàjiè yǐngxiǎng: ‘Yuánzì «Sāntǐ» de “jiàngwéi dǎjī” yì cí zǎoyǐ kuàyuè wénxué biānjiè, chéngwéi quánqiú shāngyè jìngzhēng, kējì chuàngxīn yǔ zhànlüè sīkǎo zhōng zuì jù qǐfāxìng de jīngdiǎn yǐnyù.’",
                    "translation": "David discussed: 'The phrase \"dimensional reduction strike\" from Three-Body has transcended fiction to become a profound metaphor in global tech and business strategy.'"
                },
                {
                    "target": "《流浪地球》电影主创分享创作理念：‘面对太阳危机，中国人选择带着整个地球家园一起在宇宙中流浪逃亡，这深深植根于中华民族对土地与家园故土的永恒眷恋。’",
                    "reading": "«Liúlàng Dìqiú» diànyǐng zhǔchuàng fēnxiǎng chuàngzuò lǐniàn: ‘Miànduì tàiyáng wēijī, Zhōngguórén xuǎnzé dàizhe zhěnggè dìqiú jiāyuán yìqǐ zài yǔzhòu zhōng liúlàng táowáng, zhè shēnshēn zhígēn yú Zhōnghuá mínzú duì tǔdì yǔ jiāyuán gùtǔ de yǒnghéng juànliàn.’",
                    "translation": "The Wandering Earth filmmakers shared: 'Facing solar catastrophe, choosing to wander through space with planet Earth stems from Chinese cultural attachment to the homeland.'"
                }
            ],
            "mnemonics": [
                "Sci-Fi Mastery: 《三体》/ 刘慈欣 (Three-Body), 黑暗森林 (Dark Forest), 降维打击 (Dimensional Strike), 带着地球去流浪 (Earth Attachment)!"
            ],
            "culturalNotes": [
                "Liu Cixin won the 73rd Hugo Award for Best Novel in 2015 for The Three-Body Problem (translated by Ken Liu), becoming the first Asian writer to receive this honor."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在刘慈欣科幻巨著《三体》中，将宇宙比作每个文明都隐藏自身、发现对方即消灭的冷酷生存假说被称为：",
                    "options": [
                        "阳光乐园假说",
                        "黑暗森林法则 (The Dark Forest Theory)",
                        "互助联盟公约"
                    ],
                    "answerIndex": 1,
                    "explanation": "黑暗森林法则 (The Dark Forest Theory) is the iconic cosmological hypothesis introduced in The Three-Body Problem."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "源自科幻小说《三体》、指利用物理维度向低维跌落毁灭对手、现被广泛用于商业跨界颠覆的名词是：",
                    "options": [
                        "降维打击 (Dimensional reduction strike / Cross-industry disruption)",
                        "升维鼓励",
                        "同台竞技"
                    ],
                    "answerIndex": 0,
                    "explanation": "降维打击 (jiàngwéi dǎjī) originated in The Three-Body Problem."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国当代硬科幻文学与影视改编的世界性影响，下列哪一项表述完全正确？",
                    "options": [
                        "中国科幻文学没有任何国际读者",
                        "中国科幻作品完全照搬西方套路",
                        "以《三体》《流浪地球》为代表的中国科幻，以宏大硬核的宇宙图景与深厚独特的家园情怀赢得了全球赞誉与雨果奖等世界荣誉 (Praised globally with Hugo Awards for hard sci-fi cosmology & deep homeland attachment)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately represents the global stature, cultural roots, and Hugo Award achievements of Chinese sci-fi."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character phrase meaning 'dimensional reduction attack / strike' (降维打击):",
                    "acceptedAnswers": [
                        "降维打击",
                        "jiangweidaji",
                        "jiàngwéidǎjī",
                        "Jiàngwéidǎjī",
                        "Jiangweidaji",
                        "降維打擊"
                    ],
                    "explanation": "降维打击 (jiàngwéi dǎjī) means 'dimensional reduction strike'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u25-l4": {
        "id": "zh-u25-l4",
        "unit": "zh-u25",
        "level": "C1",
        "objective": "Master the discourse of television drama criticism and cultural streaming exports (历史正剧 historical period drama, 群像戏 ensemble cast, 服化道 costume/makeup/props authenticity, 权谋 political intrigue, 国风美学 Chinese aesthetic streaming export).",
        "prerequisites": [
            "zh-u25-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u25-l3"
            ]
        },
        "presentation": {
            "explanation": "中国电视剧产业规模庞大，以《大明王朝1566》《琅琊榜》《甄嬛传》《狂飙》等为代表的剧作在海内外流媒体平台掀起了持久的「华流出海」热潮！\n\n1. 剧集类型与艺术特质 (Drama Genres & Production Standards):\n- **历史正剧 (Historical Period Drama)**：严谨考究历史背景，展现**深沉宏大的家国情怀与士人风骨**（如《大明王朝》《觉醒年代》）。\n- **群像戏 (qúnxiàngxì, Ensemble Cast Drama)**：人物性格鲜明饱满，多条叙事线索交织推进。\n- **服化道考究 (Costume, Makeup, & Props Rigor)**：服装（服）、化妆（化）、道具（道）严格考证历史古籍，还原东方典雅美学。\n\n2. 影视评论高阶表述 (TV Drama Criticism):\n- **扣人心弦的戏剧张力** / **丝丝入扣的台词交锋** / **弘扬传统国风文化**。",
            "examples": [
                {
                    "target": "剧评家在学术期刊上高度评价历史大剧：‘《大明王朝1566》凭借精妙绝伦的台词机锋与入木三分的群像塑造，深刻揭示了封建士大夫阶层的理想追求与制度宿命，堪称中国电视剧艺术的高峰！’",
                    "reading": "Jùpíngjiā zài xuéshù qīkān shang gāodù píngjià lìshǐ dàjù: ‘«Dàmíng Wángcháo 1566» píngjiè jīngmiào-juélún de táicí jīfēng yǔ rùmù-sānfēn de qúnxiàng shùzào, shēnkè jiēshì le fēngjiàn shìdàfū jiēcéng de lǐxiǎng zhuīqiú yǔ zhìdù sùmìng, kānchēng Zhōngguó diànshìjù yìshù de gāofēng!’",
                    "translation": "The critic praised: 'Ming Dynasty 1566 reveals scholar-officials' ideals and institutional fate through brilliant dialogue and penetrating ensemble casting, a pinnacle of TV art!'"
                },
                {
                    "target": "大卫在海外流媒体平台上追看古装权谋剧：‘《琅琊榜》中考究的汉服礼仪、典雅的水墨镜头构图与赤子之心的复仇救赎叙事，让海外观众沉浸式领略了中华传统美学的独特魅力。’",
                    "reading": "Dàwèi zài hǎiwài liúméitǐ píngtái shang zhuīkàn gǔzhuāng quánmóujù: ‘«Lángyábǎng» zhōng kǎojiu de Hànfú lǐyí, diǎnyǎ de shuǐmò jìngtóu gòutú yǔ chìzǐ-zhīxīn de fùchóu jiùshú xùshì, ràng hǎiwài guānzhòng chénjìnshì lǐnglüè le Zhōnghuá chuántǒng měixué de dútè mèilì.’",
                    "translation": "David watched Nirvana in Fire: 'Meticulous Hanfu etiquette, ink-wash compositions, and righteous redemption immerse global audiences in traditional aesthetics.'"
                },
                {
                    "target": "影视制作人介绍悬疑精品短剧模式：‘十二集精品短剧打破了冗长注水陋习，凭借环环相扣的快节奏悬疑反转与电影级质感，赢得了海内外口碑与收视率的双丰收。’",
                    "reading": "Yǐngshì zhìzuòrén jièshào xuányí jīngpǐn duǎnjù móshì: ‘Shí'èr jí jīngpǐn duǎnjù dǎpò le rǒngcháng zhùshuǐ lòuxí, píngjiè huánhuán-xiāngkòu de kuàijièzòu xuányí fǎnzhuǎn yǔ diànyǐngjí zhìgǎn, yíngdé le hǎiwàinèi kǒubēi yǔ shōushìlǜ de shuāng fēngshōu.’",
                    "translation": "The producer noted: '12-episode premium dramas avoid filler, achieving dual acclaim domestically and abroad with fast suspense twists and cinematic texture.'"
                }
            ],
            "mnemonics": [
                "TV Drama Elements: 历史正剧 (Period Epic), 群像戏 (Ensemble Cast), 服化道考究 (Authentic Props & Costumes), 国风出海 (Streaming Export)!"
            ],
            "culturalNotes": [
                "The industry abbreviation «服化道» (fú-huà-dào) stands for 服装 (Costume), 化妆 (Makeup), and 道具 (Props), serving as a core benchmark for evaluating production values."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在影视制作与剧评专业语汇中，对‘服装、化妆、道具’严谨考究程度的行业三字统称是：",
                    "options": [
                        "吃喝玩",
                        "服化道 (Fú-huà-dào — Costume, Makeup, and Props)",
                        "声光电"
                    ],
                    "answerIndex": 1,
                    "explanation": "服化道 is the standard Chinese industry term for Costume, Makeup, and Props."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "指剧中多个主要人物个性鲜明、戏份均衡且共同推动复杂多线剧情发展的剧集类型是：",
                    "options": [
                        "群像戏 (Qúnxiàngxì — Ensemble cast drama)",
                        "独角戏",
                        "默剧"
                    ],
                    "answerIndex": 0,
                    "explanation": "群像戏 (qúnxiàngxì) is an ensemble cast drama with multi-threaded character developments."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国优秀影视剧集的艺术水准与国际传播，下列哪一项表述完全正确？",
                    "options": [
                        "中国电视剧全部都是粗制滥造的肥皂剧",
                        "海内外流媒体严禁播出中国古装剧",
                        "中国优秀剧集依托严谨考究的服化道、扣人心弦的群像叙事与深厚的东方美学底蕴，在国际流媒体平台上引发了跨文化共鸣 (Resonates globally with authentic costumes, ensemble narratives, and Eastern aesthetics)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately appraises the aesthetic rigor, ensemble casting, and international resonance of top Chinese TV productions."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi industry term for 'Costume, Makeup, and Props' (服化道):",
                    "acceptedAnswers": [
                        "服化道",
                        "fuhuadao",
                        "fúhuàdào",
                        "Fúhuàdào",
                        "Fuhuadao"
                    ],
                    "explanation": "服化道 (fú-huà-dào) means 'Costume, Makeup, and Props'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u25-l5": {
        "id": "zh-u25-l5",
        "unit": "zh-u25",
        "level": "C1",
        "objective": "Synthesize all cinematography, contemporary literature, sci-fi cosmology, and television drama discourse into high-level cultural symposia and global media studies.",
        "prerequisites": [
            "zh-u25-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u25-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第二十五单元的所有影视美学、文学思潮、科幻宇宙与视听叙事体系，在国际电影节评委会与世界跨文化批评高峰论坛中进行高阶论述与实战表达！\n\n1. 现代华语影视与文学批评全景矩阵 (Master Cultural Criticism Matrix):\n| 文艺形态维度 | 核心美学流派与代表范式 | 时代价值与世界回响 |\n| :--- | :--- | :--- |\n| **电影美学** | 第五代色彩仪式 / 第六代纪实长镜头 | 屡获欧洲三大电影节金奖，构建独特东方电影语汇 |\n| **当代小说** | 寻根思潮 / 莫言魔幻现实主义 | 荣获诺贝尔文学奖，深刻叩问人性与历史伦理 |\n| **科幻文学** | 《三体》宏大宇宙观 / 黑暗森林假说 | 斩获雨果奖，贡献「降维打击」等世界级哲学隐喻 |\n| **精品剧集** | 历史正剧 / 群像戏 / 服化道考究 | 掀起国风出海热潮，展现深厚家国情怀与东方美学 |\n| **文化软实力** | 守正创新 / 文明互鉴 / 故事出海 | 提升中华文化国际传播力，推动世界文明交流对话 |\n\n2. 第二十五单元实战交际演练 (Unit 25 Global Cultural Studies Summit):\n- 戛纳电影节国际评委圆桌论坛与当代华语文艺批评主旨发言。",
            "examples": [
                {
                    "target": "戛纳国际电影节评委会主席在闭幕致辞中高度评价华语电影：‘从浓烈震撼的视觉史诗到细腻深情的都市纪实，华语电影与文学以其无与伦比的文化厚度与人类关怀，为世界艺术殿堂贡献了不可替代的东方瑰宝！’",
                    "reading": "Gānà guójì diànyǐngjié píngwěihuì zhǔxí zài bìmù zhìcí zhōng gāodù píngjià Huáyǔ diànyǐng: ‘Cóng nóngliè zhènhàn de shìjué shǐshī dào xìnì shēnqíng de dūshì jìshí, Huáyǔ diànyǐng yǔ wénxué yǐ qí wúyǔlúnbǐ de wénhuà hòudù yǔ rénlèi guānhuái, wèi shìjiè yìshù diàntáng gòngxiàn le bùkě tìdài de Dōngfāng guībǎo!’",
                    "translation": "The Cannes jury president stated: 'From visual epics to city realisms, Chinese cinema and literature contribute irreplaceable Eastern treasures to world art!'"
                },
                {
                    "target": "大卫在国际汉学与比较文学博士答辩中总结：‘无论是莫言小说中的民间魔幻、刘慈欣笔下的星辰大海，还是优秀历史正剧中的家国情怀，当代中国文艺始终在传统基因与现代转化之间探索着连接全人类心灵的文明叙事！’",
                    "reading": "Dàwèi zài guójì hànxué yǔ bǐjiào wénxué bóshì dābiàn zhōng zǒngjié: ‘Wúlùn shì Mò Yán xiǎoshuō zhōng de mínjiān móhuàn, Liú Cíxīn bǐxià de xīngchén dàhǎi, háishì yòuxiù lìshǐ zhèngjù zhōng de jiāguó qínghuái, dāngdài Zhōngguó wényì shǐzhōng zài chuántǒng jīyīn yǔ xiàndài zhuǎnhuà zhījiān tànsuǒ zhe liánjiē quán rénlèi xīnlíng de wénmíng xùshì!’",
                    "translation": "David defended: 'Whether Mo Yan's folklore, Liu Cixin's cosmos, or period drama patriotism, contemporary Chinese arts explore civilizational narratives connecting humanity!'"
                },
                {
                    "target": "文化学者在媒体专访中指出：‘立足本土文化根基，勇于吸收世界先进艺术经验，以守正创新的精品力作讲好中国故事，是当代文艺走向世界繁荣舞台的坚实路径！’",
                    "reading": "Wénhuà xuézhě zài méitǐ zhuānfǎng zhōng zhǐchū: ‘Lìzú běntǔ wénhuà gēnjī, yǒngyú xīshōu shìjiè xiānjìn yìshù jīngyàn, yǐ shǒuzhèng-chuàngxīn de jīngpǐn lìzuò jiǎnghǎo Zhōngguó gùshì, shì dāngdài wényì zǒuxiàng shìjiè fánróng wǔtái de jiānshí lùjìng!’",
                    "translation": "The cultural scholar noted: 'Rooted in heritage while innovating bravely to tell compelling Chinese stories is the path to global artistic stages!'"
                }
            ],
            "mnemonics": [
                "Arts Summit: Visual Epic (影视美学) + Nobel Heritage (文学寻根) + Sci-Fi Cosmos (三体宇宙) + Global Dialogue (文明互鉴) = Soft Power (文化软实力)!"
            ],
            "culturalNotes": [
                "Contemporary Chinese cultural criticism emphasizes «守正创新» (shǒu zhèng chuàng xīn, 'preserving heritage while innovating bravely') as the fundamental guiding principle for modern literature and cinematic arts."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "当代文艺理论中，强调在继承优秀传统文化精神根脉的基础上敢于突破形式与技术革新的经典治学与创作方针是：",
                    "options": [
                        "守正创新 (Preserving foundational heritage while innovating boldly)",
                        "墨守成规",
                        "全盘西化"
                    ],
                    "answerIndex": 0,
                    "explanation": "守正创新 (shǒuzhèng chuàngxīn) is the foundational aesthetic and cultural philosophy."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "衡量一个国家文学、影视与艺术作品跨越国界引发全球情感共鸣与文明对话能力的综合指标通常被称为：",
                    "options": [
                        "文化软实力 / 国际传播力 (Cultural soft power & international communicative influence)",
                        "机械硬实力",
                        "货币发行量"
                    ],
                    "answerIndex": 0,
                    "explanation": "文化软实力 (cultural soft power) measures the global appeal and civilizational resonance of arts and ideas."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于当代华语影视与文学作品在世界艺术舞台上的综合地位，下列哪一项总括完全正确？",
                    "options": [
                        "华语影视文学与世界文明完全隔绝",
                        "当代华语文艺融汇了深沉的历史反思、独特的东方视听美学与前沿的科幻哲学想象，在世界文学艺术殿堂中展现出强大的文化软实力与文明对话活力 (Blends historic reflection, Eastern aesthetics, and sci-fi philosophy into vibrant global dialogue)",
                        "中国作家没有获得过任何国际大奖"
                    ],
                    "answerIndex": 1,
                    "explanation": "Comprehensively summarizes the artistic achievements, philosophical depth, and global resonance of contemporary Chinese literature and cinema."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character phrase meaning 'preserving core heritage while innovating boldly' (守正创新):",
                    "acceptedAnswers": [
                        "守正创新",
                        "shouzhengchuangxin",
                        "shǒuzhèngchuàngxīn",
                        "Shǒuzhèngchuàngxīn",
                        "Shouzhengchuangxin",
                        "守正創新"
                    ],
                    "explanation": "守正创新 (shǒuzhèng chuàngxīn) means 'preserving foundational roots while innovating boldly'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u26-l1": {
        "id": "zh-u26-l1",
        "unit": "zh-u26",
        "level": "C1",
        "objective": "Master foundational classical Chengyu idioms and their historical allusions (温故知新 Reviewing the past to understand the new, 塞翁失马 Blessing in disguise, 卧薪尝胆 Enduring hardships for revenge/triumph, 纸上谈兵 Armchair strategist, 刻舟求剑 Rigid outdated methods).",
        "prerequisites": [
            "zh-u25-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u25-l5"
            ]
        },
        "presentation": {
            "explanation": "四字成语是中华几千年历史、哲学与文学智慧的结晶。掌握成语不仅在于记住字面含义，更在于深刻理解其**历史典故出处（Historical Allusions）**与微言大义！\n\n1. 哲学辩证与立志成语 (Philosophical & Character Allusions):\n- **温故知新 (wēn gù zhī xīn)**：《论语》‘温故而知新，可以为师矣’——复习旧知识获得新感悟。\n- **塞翁失马 (sài wēng shī mǎ)**：《淮南子》‘塞翁失马，焉知非福’——福祸相依的辩证哲学。\n- **卧薪尝胆 (wò xīn cháng dǎn)**：《史记》勾践卧薪尝胆、刻苦自励以复兴越国——忍辱负重、发愤图强。\n\n2. 讽喻教训成语 (Satirical & Cautionary Allusions):\n- **纸上谈兵 (zhǐ shàng tán bīng)**：赵括空谈兵书导致长平大败——空谈理论而脱离实际。\n- **刻舟求剑 (kè zhōu qiú jiàn)**：《吕氏春秋》——拘泥固执、不知随时代客观情况变化。",
            "examples": [
                {
                    "target": "历史学者在讲座中阐述道家辩证思维：‘面对人生突如其来的逆境与挫折，我们应当具备“塞翁失马，焉知非福”的豁达胸襟，在危机中捕捉转机与新的生机。’",
                    "reading": "Lìshǐ xuézhě zài jiǎngzuò zhōng chǎnshù Dàojiā biànzhèng sīwéi: ‘Miànduì rénshēng tū rú qí lái de nìjìng yǔ cuòzhé, wǒmen yīngdāng jùbèi “sài wēng shī mǎ, yān zhī fēi fú” de huòdá xiōngjīn, zài wēijī zhōng bǔzhuō zhuǎnjī yǔ xīn de shēngjī.’",
                    "translation": "The historian explained: 'Facing sudden adversity, we should maintain the equanimity of \"Sai Weng losing his horse — who knows if it's a blessing in disguise\", seizing turning points.'"
                },
                {
                    "target": "企业创始人向年轻创业团队分享心路历程：‘当年初创团队经历了十年“卧薪尝胆”的艰难技术攻关，最终打破了外国行业巨头的长期垄断，研发出自主可控的核心芯片！’",
                    "reading": "Qǐyè chuàngshǐrén xiàng niánqīng chuàngyè tuánduì fēnxiǎng xīnlù lìchéng: ‘Dāngnián chūchuàng tuánduì jīnglì le shí nián “wò xīn cháng dǎn” de jiānnán jìshù gōngguān, zuìzhōng dǎpò le wàiguó hángyè jùtóu de chángqī lǒngduàn, yánfā chū zìzhǔ kěkòng de héxīn xīnpiàn!’",
                    "translation": "The founder shared: 'Our startup underwent ten years of \"sleeping on brushwood and tasting gall\" tackling tough tech barriers, breaking foreign monopolies with proprietary chips!'"
                },
                {
                    "target": "项目总监在复盘会议上告诫团队：‘制定商业战略切忌“纸上谈兵”，必须深入一线市场开展扎实调研，否则一切看似精美的规划方案都只是空中楼阁。’",
                    "reading": "Xiàngmù zǒngjiān zài fùpán huìyì shang gàojiè tuánduì: ‘Zhìdìng shāngyè zhànlüè qièjì “zhǐ shàng tán bīng”, bìxū shēnrù yīxiàn shìchǎng kāizhǎn zhāshí diàoyán, fǒuzé yíqiè kànsì jīngměi de guīhuà fāng'àn dōu zhǐshì kōngzhōng lóugé.’",
                    "translation": "The project director warned: 'Strategic planning must never be \"armchair strategizing on paper\"; we must do grounded market research or plans remain castles in the air.'"
                }
            ],
            "mnemonics": [
                "Chengyu Origins: 塞翁失马 (Dialectical Turn), 卧薪尝胆 (Resolute Triumph), 纸上谈兵 (Avoid Empty Theory)!"
            ],
            "culturalNotes": [
                "Most four-character idioms (成语) are derived from classical historiographies such as the Zuo Zhuan (左传), Records of the Grand Historian (史记), and philosophical treatises like the Zhuangzi (庄子)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "源自《史记》赵括典故、形容只会空谈军事理论或方案而缺乏实际行动经验的成语是：",
                    "options": [
                        "高瞻远瞩",
                        "纸上谈兵 (Armchair strategist / Theorizing on paper)",
                        "身先士卒"
                    ],
                    "answerIndex": 1,
                    "explanation": "纸上谈兵 refers to Zhao Kuo's theoretical strategy without combat experience."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "源自越王勾践苦节励志、形容忍辱负重、刻苦自励以图谋大业的经典成语是：",
                    "options": [
                        "卧薪尝胆 (Sleeping on brushwood and tasting gall / Resolute endurance for triumph)",
                        "养尊处优",
                        "坐享其成"
                    ],
                    "answerIndex": 0,
                    "explanation": "卧薪尝胆 denotes enduring immense hardships with single-minded determination to achieve a great goal."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于古典成语的历史典故内涵与准确语用，下列哪一项表述完全正确？",
                    "options": [
                        "“塞翁失马”体现了事物福祸相依的辩证哲学，“卧薪尝胆”象征发愤图强的坚定毅力，皆蕴含深厚历史智慧 (Sai Weng reflects dialectical balance of misfortune/fortune, and Wo Xin Chang Dan signifies resolute perseverance)",
                        "纸上谈兵表示实践经验极其丰富",
                        "成语都是现代人随意生造的四个字"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately analyzes the philosophical origins and pragmatic contexts of classical Chinese idioms."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Chengyu meaning 'sleeping on brushwood and tasting gall / enduring hardships for ultimate triumph' (卧薪尝胆):",
                    "acceptedAnswers": [
                        "卧薪尝胆",
                        "woxinchangdan",
                        "wòxīnchángdǎn",
                        "Wòxīnchángdǎn",
                        "Woxinchangdan",
                        "臥薪嚐膽",
                        "臥薪嘗胆"
                    ],
                    "explanation": "卧薪尝胆 (wò xīn cháng dǎn) means enduring hardships to attain ultimate triumph."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u26-l2": {
        "id": "zh-u26-l2",
        "unit": "zh-u26",
        "level": "C1",
        "objective": "Master Chengyu used in diplomacy, governance, and professional management (深思熟虑 Deliberate and mature thought, 高瞻远瞩 Foresight and vision, 迎刃而解 Solved smoothly at the root, 求同存异 Seeking common ground while reserving differences, 未雨绸缪 Preparing before the rain / Proactive planning).",
        "prerequisites": [
            "zh-u26-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u26-l1"
            ]
        },
        "presentation": {
            "explanation": "在高端政务、跨国谈判与高阶商务沟通中，精准运用典雅成语能极大提升表达的说服力与战略格局！\n\n1. 战略决策与谋划成语 (Strategic Decision-Making Chengyu):\n- **高瞻远瞩 (gāo zhān yuǎn zhǔ)**：站得高，看得远；形容眼光长远、具有战略前瞻性。\n- **深思熟虑 (shēn sī shú lǜ)**：反复深入细致地思考。\n- **未雨绸缪 (wèi yǔ chóu móu)**：《诗经》‘迨天之未阴雨，彻彼桑土，绸缪牖户’——事前做好充分准备，防患于未然。\n\n2. 外交谈判与解决问题成语 (Diplomacy & Problem-Solving Chengyu):\n- **求同存异 (qiú tóng cún yì)**：周恩来总理在万隆会议上提出的外交方针——寻求共同点，保留不同意见。\n- **迎刃而解 (yíng rèn ér jiě)**：主要问题解决了，其他相关问题就能顺理成章地化解。",
            "examples": [
                {
                    "target": "外交部发言人在双边战略对话后举行记者会：‘双方秉持“求同存异、互利共赢”的基本原则，就双边经贸与应对气候变化达成了广泛共识。’",
                    "reading": "Wàijiāobù fāyánrén zài shuāngbiān zhànlüè duìhuà hòu jǔxíng jìzhěhuì: ‘Shuāngfāng bǐngchí “qiú tóng cún yì, hù lì gòng yíng” de jīběn yuánzé, jiù shuāngbiān jīngmào yǔ yìngduì qìhòu biànhuà dáchéng le guǎnfàn gòngshí.’",
                    "translation": "The spokesperson stated: 'Upholding \"seeking common ground while reserving differences and mutual benefit\", both sides reached broad consensus.'"
                },
                {
                    "target": "跨国集团首席风险官在董事会上做合规报告：‘面对国际金融市场的波动风险，我们必须“未雨绸缪”，提前建立流动性风险对冲储备池。’",
                    "reading": "Kuàguó jítuán shǒuxí fēnxiǎnguān zài dǒngshìhuì shang zuò hégūi bàogào: ‘Miànduì guójì jīnróng shìchǎng de bōdòng fēnxiǎn, wǒmen bìxū “wèi yǔ chóu móu”, tíqián jiànlì liúdòngxìng fēnxiǎn duìchōng chǔbèichí.’",
                    "translation": "The CRO reported: 'Facing volatility, we must \"plan before the storm\", establishing risk hedging reserve pools in advance.'"
                },
                {
                    "target": "首席执行官在战略研讨会上指出：‘只要抓住了数字化转型这个核心牛鼻子，企业流程冗余与管理成本过高的问题便会“迎刃而解”！’",
                    "reading": "Shǒuxí zhíxíngguān zài zhànlüè yántǎohuì shang zhǐchū: ‘Zhǐyào zhuāzhù le shùzìhuà zhuǎnxíng zhè ge héxīn niúbízǐ, qǐyè liúchéng rǒngyú yǔ guǎnlǐ chéngběn guò gāo de wèntí biàn huì “yíng rèn ér jiě”!’",
                    "translation": "The CEO pointed out: 'Once we grasp the linchpin of digital transformation, redundant workflow and overhead issues will be resolved like a knife splitting bamboo smoothly!'"
                }
            ],
            "mnemonics": [
                "Diplomatic Strategy: 求同存异 (Seek Common Ground), 未雨绸缪 (Proactive Planning), 高瞻远瞩 (Strategic Vision), 迎刃而解 (Effortless Solution)!"
            ],
            "culturalNotes": [
                "«求同存异» was famously put forward by Premier Zhou Enlai at the 1955 Bandung Conference, establishing modern China's five principles of peaceful coexistence."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "源自《诗经》、形容在天还没有下雨前修补好门窗、喻指在事情发生前做好万全准备与防范的成语是：",
                    "options": [
                        "临渴掘井",
                        "未雨绸缪 (Preparing before the rain / Preemptive defense)",
                        "掩耳盗铃"
                    ],
                    "answerIndex": 1,
                    "explanation": "未雨绸缪 means preparing preemptively before trouble strikes."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "形容在多边外交或商务谈判中，寻求各方共同利益与共识、同时保留各自合理分歧的经典外交原则是：",
                    "options": [
                        "求同存异 (Seeking common ground while reserving differences)",
                        "针锋相对",
                        "各行其是"
                    ],
                    "answerIndex": 0,
                    "explanation": "求同存异 is the classic diplomatic maxim for harmonious cooperation amid divergence."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于职场战略决策与外交事务中的高级成语搭配，下列哪一项表述完全正确？",
                    "options": [
                        "未雨绸缪表示大难临头才匆忙应付",
                        "“求同存异”指在尊重分歧的前提下扩大共识，“未雨绸缪”强调提前布局防患于未然，是高阶决策的核心智慧 (Seeking common ground expands consensus; pre-planning prevents crises)",
                        "迎刃而解表示问题越变越复杂无法解决"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately explains the contextual pragmatics of advanced political and management idioms."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Chengyu meaning 'seeking common ground while shelving/reserving differences' (求同存异):",
                    "acceptedAnswers": [
                        "求同存异",
                        "qiutongcunyi",
                        "qiútóngcúnyì",
                        "Qiútóngcúnyì",
                        "Qiutongcunyi",
                        "求同存異"
                    ],
                    "explanation": "求同存异 (qiú tóng cún yì) means 'seeking common ground while reserving differences'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u26-l3": {
        "id": "zh-u26-l3",
        "unit": "zh-u26",
        "level": "C1",
        "objective": "Master aesthetic and literary evaluation Chengyu (引人入胜 Fascinatingly immersive, 栩栩如生 Lifelike and vivid, 巧夺天工 Superb craftsmanship excelling nature, 妙笔生花 Wondrous literary brushwork, 淋漓尽致 Expressed thoroughly and incisively).",
        "prerequisites": [
            "zh-u26-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u26-l2"
            ]
        },
        "presentation": {
            "explanation": "在文学评论、艺术鉴赏与散文创作中，四字成语是营造**意境（Artistic Conception）**与抒发审美情操的核心修辞载体！\n\n1. 艺术造诣与技艺成语 (Artistic Mastery & Craftsmanship Chengyu):\n- **巧夺天工 (qiǎo duó tiān gōng)**：人工的精巧胜过天然，专用于**人工雕琢、建筑工艺、精密艺术品**（不可用于自然风光）。\n- **栩栩如生 (xǔ xǔ rú shēng)**：《庄子》‘栩栩然蝴蝶也’——形容艺术形象生动逼真，如同活的一样。\n\n2. 文学表达与叙事意境成语 (Literary Expression Chengyu):\n- **引人入胜 (yǐn rén rù shèng)**：引导人进入奇妙诱人的境界，形容风景优美或作品情节扣人心弦。\n- **淋漓尽致 (lín lí jìn zhì)**：文章、谈话或表演发挥到了极致，表达得十分充分透彻。\n- **妙笔生花 (miào bǐ shēng huā)**：比喻杰出的写作才华。",
            "examples": [
                {
                    "target": "故宫博物院玉雕专家向观众讲解国宝艺术：‘这件清代翡翠白菜雕件雕工“巧夺天工”，工匠巧妙利用玉石天然的翠绿与白瑕，将蝈蝈与菜叶刻画得“栩栩如生”！’",
                    "reading": "Gùgōng Bówùyuàn yùdiāo zhuānjiā xiàng guānzhòng jiǎngjiě guóbǎo yìshù: ‘Zhè jiàn Qīngdài fěicuì báicài diāojiàn diāogōng “qiǎo duó tiān gōng”, gōngjiàng qiǎomiào lìyòng yùshí tiānrán de cuìlǜ yǔ báixiá, jiāng guōguō yǔ càiyè kèhuà de “xǔ xǔ rú shēng”!’",
                    "translation": "The jade expert explained: 'The craftsmanship excels nature; the artisan vividly captured the katydid and cabbage leaves with lifelike perfection!'"
                },
                {
                    "target": "文学评论家在研讨会上评析名著：‘作家以“妙笔生花”的精妙文笔，将主人公在时代风浪中的悲欢离合描绘得“淋漓尽致”，极具情感冲击力。’",
                    "reading": "Wénxué pínglùnjiā zài yántǎohuì shang píngxī míngzhù: ‘Zuòjiā yǐ “miào bǐ shēng huā” de jīngmiào wénbǐ, jiāng zhǔréngōng zài shídài fēnglàng zhōng de bēihuān-líhé miáohuì de “lín lí jìn zhì”, jí jù qínggǎn chōngjīlì.’",
                    "translation": "The critic reviewed: 'With marvelous brushwork, the author portrayed the protagonist's joys and sorrows thoroughly and incisively.'"
                },
                {
                    "target": "大卫漫步在苏州古典园林之中感叹：‘苏州园林移步换景、叠山理水，曲径通幽的造园布局真可谓“引人入胜”，处处体现着中国文人的诗性审美。’",
                    "reading": "Dàwèi mànbù zài Sūzhōu gǔdiǎn yuánlín zhīzhōng gǎntàn: ‘Sūzhōu yuánlín yíbù-huànjǐng, diéshān-lǐshuǐ, qūjìng-tōngyōu de zàoyuán bùjú zhēn kěwèi “yǐn rén rù shèng”, chùchù tǐxiàn zhe Zhōngguó wénrén de shīxìng shěnměi.’",
                    "translation": "David strolled in Suzhou gardens: 'Changing views at every step and winding paths are truly captivatingly immersive, reflecting poetic scholar aesthetics.'"
                }
            ],
            "mnemonics": [
                "Aesthetic Critique: 巧夺天工 (Man-made Craft), 栩栩如生 (Lifelike Image), 淋漓尽致 (Express Fully), 妙笔生花 (Exquisite Writing)!"
            ],
            "culturalNotes": [
                "Note the rigorous collocation distinction: «巧夺天工» (craftsmanship surpassing nature) can ONLY be applied to artificial crafts/architecture, never to natural landscapes themselves."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "在汉语成语修辞规范中，‘巧夺天工’（人工技艺精巧胜过天然）的正确适用对象是：",
                    "options": [
                        "壮丽的原始森林与自然瀑布",
                        "精湛的手工雕刻、古代建筑与艺术工艺品 (Fine artificial crafts, sculpture, and architecture)",
                        "刚出生的婴儿"
                    ],
                    "answerIndex": 1,
                    "explanation": "巧夺天工 specifically applies to human craftsmanship excelling natural beauty."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "形容文学作品、演讲或影视表演将思想情感、人情事理表达得极其透彻充实、毫无保留的成语是：",
                    "options": [
                        "淋漓尽致 (Expressed incisively and thoroughly / Fully portrayed)",
                        "蜻蜓点水",
                        "模棱两可"
                    ],
                    "answerIndex": 0,
                    "explanation": "淋漓尽致 means expressed thoroughly, vividly, and without reserve."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于文学艺术批评中成语的精确修辞与搭配禁忌，下列哪一项表述完全正确？",
                    "options": [
                        "黄山的大自然风光巧夺天工",
                        "成语不能用于描写人物心理",
                        "“巧夺天工”专用于赞美人工艺术技艺，“淋漓尽致”形容表达发挥到了极致，两者皆为文艺批评经典用语 (Qiao Duo Tian Gong describes human craft; Lin Li Jin Zhi denotes thorough expression)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Correctly identifies the grammatical constraints and rhetorical elegance of aesthetic Chengyu."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Chengyu meaning 'lifelike and vivid / true to life' (栩栩如生):",
                    "acceptedAnswers": [
                        "栩栩如生",
                        "xuxurusheng",
                        "xǔxǔrúshēng",
                        "Xǔxǔrúshēng",
                        "Xuxurusheng"
                    ],
                    "explanation": "栩栩如生 (xǔ xǔ rú shēng) means 'vividly lifelike'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u26-l4": {
        "id": "zh-u26-l4",
        "unit": "zh-u26",
        "level": "C1",
        "objective": "Master symmetrical Chengyu pairings, antithetical parallelism, and rhythmic four-character prosody (相辅相成 Mutually complementary, 循序渐进 Step-by-step progressive advance, 络绎不绝 Continuous endless stream, 纷至沓来 Arriving in rapid succession, 声情并茂 Full of both vocal elegance and deep emotion).",
        "prerequisites": [
            "zh-u26-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u26-l3"
            ]
        },
        "presentation": {
            "explanation": "汉语在书面文雅语体与高阶演讲中，极度讲究**音节匀称、四六成双与对仗工整（Antithetical Prosody）**！\n\n1. 互补并列与发展成语对 (Complementary & Progression Pairs):\n- **相辅相成 (xiāng fǔ xiāng chéng)**：两件事物互相配合、互相补充，缺一不可。\n- **循序渐进 (xún xù jiàn jìn)**：按一定的顺序、步骤逐渐进步深入。\n\n2. 动态繁盛与修辞对仗句式 (Dynamic Flow & Antithetical Syntax):\n- **络绎不绝 (luò yì bù jué)**：往来的人马车辆连续不断（如：中外游客络绎不绝）。\n- **纷至沓来 (fēn zhì tà lái)**：接二连三地纷纷到来（如：订单纷至沓来）。\n- **高阶对仗句法典范**：‘学术探索当**循序渐进**以厚植根基，理论与实践更需**相辅相成**以致知笃行。’",
            "examples": [
                {
                    "target": "大学校长在开学典礼上致辞：‘学术研究绝无捷径可走，诸位同学当“循序渐进”、严谨求实，同时牢记科学探索与人文精神“相辅相成”，方能成长为栋梁之才！’",
                    "reading": "Dàxué xiàozhǎng zài kāixué diǎnlǐ shang zhìcí: ‘Xuéshù yánjiū jué wú jiéjìng kě zǒu, zhūwèi tóngxué dāng “xún xù jiàn jìn”、yánjǐn qiúshí, tóngshí láojì kēxué tànsuǒ yǔ rénwén jīngshén “xiāng fǔ xiāng chéng”, fāng néng chéngzhǎng wéi dòngliáng zhī cái!’",
                    "translation": "The university president addressed: 'Academic research has no shortcuts; proceed step by step with rigor, remembering that scientific exploration and humanism are mutually complementary!'"
                },
                {
                    "target": "国际博览会闭幕新闻发布会上：‘本届进博会期间，来自全球一百五十多个国家和地区的采购商“络绎不绝”，各类高新技术合作意向“纷至沓来”，充分彰显了中国大市场的澎湃活力！’",
                    "reading": "Guójì bólǎnhuì bìmù xīnwén fābùhuì shang: ‘Běn jiè jìn-bó-huì qījiān, láizì quánqiú yībǎi wǔshí duō gè guójiā hé dìqū de cǎigòushāng “luò yì bù jué”, gèlèi gāo-xīn jìshù hézuò yìxiàng “fēn zhì tà lái”, chōngfèn zhāngxiǎn le Zhōngguó dà shìchǎng de péngpài huólì!’",
                    "translation": "At the Expo press conference: 'Global buyers arrived in continuous streams, and tech cooperation proposals poured in one after another!'"
                },
                {
                    "target": "著名朗诵家在音乐会上倾情献演：‘朗诵家以“声情并茂”的精湛表达与极富感染力的语调，将古典诗词的豪情与忧思演绎得回肠荡气，全场掌声经久不息！’",
                    "reading": "Zhùmíng lǎngsòngjiā zài yīnyuèhuì shang qīngqíng xiànyǎn: ‘Lǎngsòngjiā yǐ “shēng qíng bìng mào” de jīngzhàn biǎodá yǔ jí fù gǎnrǎnlì de yǔdiào, jiāng gǔdiǎn shīcí de háoqíng yǔ yōusī yǎnyì de huícháng-dàngqì, quánchǎng zhǎngshēng jīngjiǔ bù xī!’",
                    "translation": "The reciter performed: 'With voice and emotion in exquisite harmony, the artist conveyed classical poems with soul-stirring resonance!'"
                }
            ],
            "mnemonics": [
                "Rhetoric Symmetries: 相辅相成 (Mutual Complement), 循序渐进 (Step-by-Step), 络绎不绝 (Continuous Stream), 纷至沓来 (Arriving in Succession)!"
            ],
            "culturalNotes": [
                "In classical Chinese rhetoric, pairing four-character idioms (四字格) in parallel structures (对仗 / 排比) creates natural rhythmic cadence and musical harmony (平仄铿锵)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "形容两种事物互相配合、互相补充、相得益彰的经典四字成语是：",
                    "options": [
                        "背道而驰",
                        "相辅相成 (Mutually complementary and interdependent)",
                        "画蛇添足"
                    ],
                    "answerIndex": 1,
                    "explanation": "相辅相成 denotes two things supplementing and enhancing each other."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "形容往来的人流、车马或宾客接连不断、连续不绝的成语是：",
                    "options": [
                        "络绎不绝 (An endless stream of visitors/vehicles)",
                        "门可罗雀",
                        "孤掌难鸣"
                    ],
                    "answerIndex": 0,
                    "explanation": "络绎不绝 describes continuous, unbroken streams of people or traffic."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于四字成语在对仗句式中的修辞功能与语义逻辑，下列哪一项表述完全正确？",
                    "options": [
                        "对仗句中只能使用两个字的词",
                        "相辅相成表示彼此对立排斥",
                        "“循序渐进”与“相辅相成”常在论述文与演讲中配对使用，构建音律和谐且逻辑严密的四字对仗句式 (Parallel Chengyu pairs create rhythmic balance and rigorous logic in essays and speeches)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately captures the prosodic elegance and syntactic synergy of paired four-character idioms in advanced Chinese."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Chengyu meaning 'mutually complementary / supplementing each other' (相辅相成):",
                    "acceptedAnswers": [
                        "相辅相成",
                        "xiangfuxiangcheng",
                        "xiāngfǔxiāngchéng",
                        "Xiāngfǔxiāngchéng",
                        "Xiangfuxiangcheng",
                        "相輔相成"
                    ],
                    "explanation": "相辅相成 (xiāng fǔ xiāng chéng) means 'mutually complementary'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u26-l5": {
        "id": "zh-u26-l5",
        "unit": "zh-u26",
        "level": "C1",
        "objective": "Synthesize all classical, diplomatic, aesthetic, and prosodic Chengyu idioms into grand keynote addresses, international academic symposia, and presidential communiques.",
        "prerequisites": [
            "zh-u26-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u26-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第二十六单元的所有历史典故成语、外交决策成语、审美鉴赏成语与对仗修辞法则，在国际高端汉学年会与世界领袖主旨峰会中进行全景论述与高阶演讲！\n\n1. 第二十六单元成语与修辞全景矩阵 (Master Chengyu Rhetoric Matrix):\n| 成语分类维度 | 核心成语与典故源头 | 语用场景与修辞张力 |\n| :--- | :--- | :--- |\n| **历史哲学** | 塞翁失马 / 卧薪尝胆 / 纸上谈兵 | 辩证看待逆境，励精图治，坚决反对脱离实际的空谈 |\n| **外交政务** | 求同存异 / 未雨绸缪 / 高瞻远瞩 | 跨国谈判谋求共识，前瞻布局防控战略风险 |\n| **审美文艺** | 巧夺天工 / 栩栩如生 / 淋漓尽致 | 鉴赏手工艺术，评析文学作品的情感张力与深度 |\n| **对仗律动** | 相辅相成 / 循序渐进 / 络绎不绝 | 营造平仄铿锵的四六句式，增强政论与学术演讲的说服力 |\n| **境界集成** | 厚积薄发 / 笃行致远 / 守正创新 | 概括中华民族自强不息、行稳致远的崇高精神品格 |\n\n2. 第二十六单元实战交际演练 (Unit 26 Global Chengyu Keynote Summit):\n- 世界文明互鉴高峰论坛主旨演讲与国际领袖闭幕声明。",
            "examples": [
                {
                    "target": "大会主席在世界文明互鉴高峰论坛发表主旨演讲：‘回望人类文明交流史，我们更当秉持“求同存异”的博大胸襟，做到不同文化“相辅相成”、文明成果“交相辉映”，以“高瞻远瞩”的历史担当携手应对全球挑战！’",
                    "reading": "Dàhuì zhǔxí zài Shìjiè Wénmíng Hùjiàn Gāofēng Lùntán fābiǎo zhǔzhǐ yǎnjiǎng: ‘Huíwàng rénlèi wénmíng jiāoliúshǐ, wǒmen gèng dāng bǐngchí “qiú tóng cún yì” de bódà xiōngjīn, zuòdào bùtóng wénhuà “xiāng fǔ xiāng chéng”、wénmíng chéngguǒ “jiāoxiāng huìyìng”, yǐ “gāo zhān yuǎn zhǔ” de lìshǐ dāndāng xiéshǒu yìngduì quánqiú tiǎozhàn!’",
                    "translation": "The conference president delivered: 'Looking at civilization history, we should uphold \"seeking common ground while shelving differences\", allowing cultures to complement each other and with farsighted responsibility tackle global challenges!'"
                },
                {
                    "target": "大卫在国际汉学大会青年学者论坛发言：‘学习与运用汉语四字成语，绝非浮于表面的咬文嚼字，而是“温故知新”、深入领略中华文明数千年哲学辩证与文学审美的精神密码！’",
                    "reading": "Dàwèi zài Guójì Hànxué Dàhuì qīngnián xuézhě lùntán fāyán: ‘Xuéxí yǔ yùnyòng Hànyǔ sìzì chéngyǔ, jué fēi fú yú biǎomiàn de yǎowén-jiáozì, érshì “wēn gù zhī xīn”、shēnrù lǐnglüè Zhōnghuá wénmíng shù qiān nián zhéxué biànzhèng yǔ wénxué shěnměi de jīngshén mìmǎ!’",
                    "translation": "David stated: 'Mastering Chengyu is not superficial pedantry, but \"learning new from the old\" to decipher thousands of years of philosophical dialectics and aesthetic codes!'"
                },
                {
                    "target": "著名学者在《文化强国论》结语中总结：‘唯有“未雨绸缪”筑牢文化根基，“厚积薄发”推进理论创新，方能使优秀传统文化在当代焕发出“生生不息”的磅礴力量！’",
                    "reading": "Zhùmíng xuézhě zài «Wénhuà Qiángguó Lùn» jiéyǔ zhōng zǒngjié: ‘Wéiyǒu “wèi yǔ chóu móu” zhùláo wénhuà gēnjī, “hòu jī bó fā” tuījìn lǐlùn chuàngxīn, fāng néng shǐ yòuxiù chuántǒng wénhuà zài dāngdài huànfā chū “shēngshēng bù xī” de pángbó lìliàng!’",
                    "translation": "The scholar concluded: 'Only by pre-planning robust cultural roots and accumulating deeply to release innovatively can traditional culture unleash boundless enduring vitality!'"
                }
            ],
            "mnemonics": [
                "Chengyu Mastery: 历史典故 (Historical Roots) + 外交谋略 (Diplomatic Vision) + 艺术审美 (Aesthetic Grace) + 四六对仗 (Prosodic Harmony) = Master Eloquence!"
            ],
            "culturalNotes": [
                "«厚积薄发» (accumulating deeply to release abundantly, from Su Shi 苏轼) expresses the foundational Confucian and scholarly virtue of patient, profound preparation before decisive action."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "源自苏轼名言、形容经过长期深厚扎实的知识与实力积累、从而在关键时刻充分发挥巨大能量的成语是：",
                    "options": [
                        "厚积薄发 (Accumulating deeply and releasing abundantly)",
                        "急功近利",
                        "粗制滥造"
                    ],
                    "answerIndex": 0,
                    "explanation": "厚积薄发 means accumulating deeply over time and bursting forth with greatness."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "在主旨演讲与政务报告中，形容历史车轮滚滚向前、生命与文明繁衍发展永不休止的经典成语是：",
                    "options": [
                        "生生不息 (Endless succession of life and vitality / Perpetual generation)",
                        "烟消云散",
                        "停滞不前"
                    ],
                    "answerIndex": 0,
                    "explanation": "生生不息 symbolizes eternal renewal and endless generations of life and culture."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于四字成语典故在现代高阶汉语与国际交流中的综合价值，下列哪一项总括完全正确？",
                    "options": [
                        "成语在现代汉语中已经完全被淘汰",
                        "成语承载了深厚的历史哲学典故、高超的谋略智慧与对称的音律美感，是精准典雅表达中华文化精神与战略格局的核心语言艺术 (Encapsulates history, philosophy, strategy, and poetic cadence)",
                        "成语只能用于古代文言文"
                    ],
                    "answerIndex": 1,
                    "explanation": "Comprehensively synthesizes the historical, philosophical, rhetorical, and strategic value of Chinese Chengyu."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Chengyu meaning 'accumulating deeply to release abundantly' (厚积薄发):",
                    "acceptedAnswers": [
                        "厚积薄发",
                        "houjibofa",
                        "hòujībófā",
                        "Hòujībófā",
                        "Houjibofa",
                        "厚積薄發"
                    ],
                    "explanation": "厚积薄发 (hòu jī bó fā) means 'accumulating deeply and releasing abundantly'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u27-l1": {
        "id": "zh-u27-l1",
        "unit": "zh-u27",
        "level": "C1",
        "objective": "Master China's Dual Carbon strategy and clean energy terminology (碳达峰 Peak Carbon by 2030, 碳中和 Carbon Neutrality by 2060, 可再生能源 renewable energy, 光伏发电 photovoltaic solar, 风力发电 wind power, 特高压输电 UHV grid transmission).",
        "prerequisites": [
            "zh-u26-l5"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u26-l5"
            ]
        },
        "presentation": {
            "explanation": "中国积极稳妥推进**碳达峰（Carbon Peak）与碳中和（Carbon Neutrality）「双碳战略」**，加速构建以清洁可再生能源为主体的新型能源体系！\n\n1. 双碳战略核心目标与时间节点 (Dual Carbon Targets):\n- **碳达峰 (tàn dáfēng)**：力争2030年前二氧化碳排放达到峰值后稳中有降。\n- **碳中和 (tàn zhōnghé)**：力争2060年前通过植树造林、碳捕集等方式抵消自身产生的温室气体排放，实现零净排放。\n\n2. 清洁能源与智能电网核心技术 (Clean Energy & Grid Tech):\n- **光伏发电 (Photovoltaic Solar)** / **海上风电 (Offshore Wind)** / **特高压输电 (Ultra-High Voltage Transmission)** / **抽水蓄能 (Pumped Storage Hydropower)**。",
            "examples": [
                {
                    "target": "国家能源局官员在国际能源署新闻发布会上宣布：‘中国已建成全球规模最大的清洁发电体系，西北沙漠戈壁地区的大型风电光伏基地正通过特高压输电线路源源不断地向东部沿海输送绿色电力！’",
                    "reading": "Guójiā Néngyuánjú guānyuán zài Guójì Néngyuánshǔ xīnwén fābùhuì shang xuānbù: ‘Zhōngguó yǐ jiànchéng quánqiú guīmó zuì dà de qīngjié fādiàn tǐxì, xīběi shāmò gēbì dìqū de dàxíng fēngdiàn guāngfú jīdì zhèng tōngguò tègāoyā shūdiàn xiànlù yuányuán-bùduàn de xiàng dōngbù yánhǎi shūsòng lǜsè diànlì!’",
                    "translation": "The energy official announced: 'China has built the world's largest clean power system; vast Gobi desert wind-solar bases continuously transmit green electricity eastward via UHV lines!'"
                },
                {
                    "target": "能源工程师向国际考察团介绍智能微电网：‘我们利用先进的电池储能与智能调峰系统，彻底解决了光伏与风能发电“靠天吃饭”、波动性大的并网难题。’",
                    "reading": "Néngyuán gōngchéngshī xiàng guójì kǎochátuán jièshào zhìnéng wēidiànwǎng: ‘Wǒmen lìyòng xiānjìn de diànchí chǔnéng yǔ zhìnéng tiáofēng xìtǒng, chèdǐ jiějué le guāngfú yǔ fēngnéng fādiàn “kàotiān-chīfàn”、bōdòngxìng dà de bìngwǎng nántí.’",
                    "translation": "The engineer introduced: 'Utilizing battery storage and smart peak-shaving, we solved the grid integration instability of solar and wind power.'"
                },
                {
                    "target": "大卫在新能源投资论坛上发言：‘中国光伏产业链上下游的规模化技术突破，极大降低了全球太阳能发电成本，为全人类的绿色低碳转型做出了重大贡献！’",
                    "reading": "Dàwèi zài xīn néngyuán tóuzī lùntán shang fāyán: ‘Zhōngguó guāngfú chǎnyèliàn shàng-xiàyóu de guīmóhuà jìshù tūpò, jí dà jiàngdī le quánqiú tàiyángnéng fādiàn chéngběn, wèi quán rénlèi de lǜsè dītàn zhuǎnxíng zuòchū le zhòngdà gòngxiàn!’",
                    "translation": "David spoke: 'China's photovoltaic supply chain breakthroughs drastically reduced global solar costs, contributing immensely to worldwide green transition!'"
                }
            ],
            "mnemonics": [
                "Dual Carbon Strategy: 碳达峰 (Peak by 2030) + 碳中和 (Neutral by 2060) + 光伏风电 (Solar & Wind) + 特高压 (UHV Grid)!"
            ],
            "culturalNotes": [
                "China's '30-60 Goals' (3060目标) was officially announced at the 75th UN General Assembly in 2020, representing the world's largest single climate pledge."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "中国庄严承诺力争于2030年前二氧化碳排放不再增长达到历史最高点、并在之后逐步下降的战略目标被称为：",
                    "options": [
                        "无限排放",
                        "碳达峰 (Carbon Peak)",
                        "煤炭倍增"
                    ],
                    "answerIndex": 1,
                    "explanation": "碳达峰 (Carbon Peak) refers to reaching peak carbon emissions before 2030."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "通过植树造林、节能减排与碳捕集利用技术，实现人为温室气体净零排放的长期气候目标被称为：",
                    "options": [
                        "碳中和 (Carbon Neutrality / Net-Zero Emissions)",
                        "碳挥发",
                        "碳依赖"
                    ],
                    "answerIndex": 0,
                    "explanation": "碳中和 (Carbon Neutrality) means achieving net-zero greenhouse gas emissions."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国「双碳战略」的内涵与清洁能源产业布局，下列哪一项表述完全正确？",
                    "options": [
                        "双碳战略指2030年前实现碳达峰、2060年前实现碳中和，依托光伏、风电与特高压电网加速绿色能源转型 (Dual Carbon: 2030 Peak, 2060 Neutrality, powered by solar, wind, and UHV grids)",
                        "双碳战略意味着彻底放弃一切工业生产",
                        "中国完全依靠进口煤炭发电"
                    ],
                    "answerIndex": 0,
                    "explanation": "Accurately details the strategic targets (2030 peak, 2060 neutrality) and the clean energy technological pillars."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi term for 'Carbon Neutrality / Net-Zero' (碳中和):",
                    "acceptedAnswers": [
                        "碳中和",
                        "tanzhonghe",
                        "tànzhōnghé",
                        "Tànzhōnghé",
                        "Tanzhonghe"
                    ],
                    "explanation": "碳中和 (tàn zhōnghé) means 'Carbon Neutrality / Net-Zero'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u27-l2": {
        "id": "zh-u27-l2",
        "unit": "zh-u27",
        "level": "C1",
        "objective": "Master the philosophy and institutions of Chinese ecological governance (两山理念 Two Mountains theory: Lucid waters and lush mountains are invaluable assets, 国家公园 National Parks system, 生物多样性保护 biodiversity conservation, 生态保护红线 ecological conservation red lines, 塞罕坝精神 Saihanba spirit).",
        "prerequisites": [
            "zh-u27-l1"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u27-l1"
            ]
        },
        "presentation": {
            "explanation": "「**绿水青山就是金山银山**（Lucid waters and lush mountains are invaluable assets）」是当代中国生态文明建设的核心哲学思想！\n\n1. 生态治理哲学与制度设计 (Ecological Governance Philosophy & Systems):\n- **两山理念**：经济发展与环境保护不是零和博弈，良好的生态环境本身就是最普惠的民生福祉与可持续经济财富。\n- **生态保护红线 (Ecological Red Lines)**：对具有特殊重要生态功能的区域实施强制性严格保护。\n\n2. 国家公园与生物多样性保护 (National Parks & Biodiversity):\n- **国家公园体制 (National Park System)**：建立三江源、大熊猫、东北虎豹、海南热带雨林、武夷山等首批国家公园。\n- **塞罕坝精神**：三代林场人牢记使命、艰苦创业，将荒原变为百万亩人工林海的绿色奇迹。",
            "examples": [
                {
                    "target": "生态环境部部长在联合国生物多样性公约缔约方大会（COP15）上作报告：‘中国率先划定生态保护红线，正式设立首批国家公园，有效保护了雪豹、大熊猫等珍稀濒危物种的原生栖息地！’",
                    "reading": "Shēngtài Huánjìngbù bùzhǎng zài Liánhéguó Shēngwù Duōyàngxìng Gōngyuē Dìyuēfāng Dàhuì shang zuò bàogào: ‘Zhōngguó xiānxiān huàdìng shēngtài bǎohù hóngxiàn, zhèngshì shèlì shǒupī guójiā gōngyuán, yǒuxiào bǎohù le xuěbào, dàxióngmāo děng zhēnxī bēnwēi wùzhǒng de yuánshēng qīxīdì!’",
                    "translation": "The Ecology Minister reported at COP15: 'China pioneered ecological red lines and established first national parks, safeguarding habitats of endangered species!'"
                },
                {
                    "target": "大卫在浙江安吉余村实地调研美丽乡村：‘这里曾经依靠开山采石导致尘土飞扬，如今践行“绿水青山就是金山银山”理念发展生态文旅，实现了经济富民与绿意盎然的完美共生！’",
                    "reading": "Dàwèi zài Zhèjiāng Ānjí Yúcūn shídì diàoyán měilì xiāngcūn: ‘Zhèlǐ céngjīng yīkào kāishān-cǎishí dǎozhì chéntǔ-fēiyáng, rújīn jiànxíng “lǜshuǐ-qīngshān jiùshì jīnshān-yínshān” lǐniàn fāzhǎn shēngtài wénlǚ, shíxiàn le jīngjì fùmín yǔ lǜyì-àngrán de wánměi gòngshēng!’",
                    "translation": "David surveyed Yucun: 'Once plagued by quarrying dust, it practiced \"Two Mountains\", developing eco-tourism for a perfect symbiosis of wealth and nature!'"
                },
                {
                    "target": "纪录片解说员深情讲述塞罕坝奇迹：‘半个多世纪以来，塞罕坝人铸就了“牢记使命、艰苦创业、绿色发展”的塞罕坝精神，在京北筑起了一道抵御风沙的绿色长城。’",
                    "reading": "Jìlùpiàn jiěshuōyuán shēnqíng jiǎngshù Sàihǎnbà qíjì: ‘Bàn gè duō shìjì yǐlái, Sàihǎnbàrén zhùjiù le “láojì-shǐmìng, jiānkǔ-chuàngyè, lǜsè-fāzhǎn” de Sàihǎnbà jīngshén, zài jīngběi zhùqǐ le yí dào dǐyù fēngshā de lǜsè chángchéng.’",
                    "translation": "The narrator described: 'Saihanba builders forged a spirit of green development, erecting a Green Great Wall against sandstorms.'"
                }
            ],
            "mnemonics": [
                "Eco-Civilization: 绿水青山 (Lucid Waters) = 金山银山 (Invaluable Assets), 国家公园 (National Parks), 生态红线 (Eco Redline)!"
            ],
            "culturalNotes": [
                "The iconic slogan «绿水青山就是金山银山» was first proposed in 2005 in Yucun, Anji, Zhejiang, now serving as the cornerstone of China's constitutional commitment to ecological civilization."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "深刻阐述生态环境保护与经济可持续发展辩证共生关系的当代中国生态文明核心名言是：",
                    "options": [
                        "先污染后治理",
                        "绿水青山就是金山银山 (Lucid waters and lush mountains are invaluable assets)",
                        "竭泽而渔"
                    ],
                    "answerIndex": 1,
                    "explanation": "绿水青山就是金山银山 is the foundational ecological civilization doctrine."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "为保障国家生态安全底线，在生态功能极重要、生态环境极脆弱区域强制划定的不可逾越的空间保护界线被称为：",
                    "options": [
                        "生态保护红线 (Ecological Conservation Red Line)",
                        "城市扩张线",
                        "商业开采区"
                    ],
                    "answerIndex": 0,
                    "explanation": "生态保护红线 marks strictly protected, non-negotiable ecological buffer zones."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国生态文明建设、两山理念与国家公园体系，下列哪一项表述完全正确？",
                    "options": [
                        "两山理念主张彻底放弃环境保护来追求短期利益",
                        "生态文明建设践行“绿水青山就是金山银山”，通过划定生态红线与建立国家公园体系，实现了人与自然的和谐共生 (Practices Two Mountains, eco-redlines, and national parks for harmony between humans and nature)",
                        "三江源地区已经停止一切动植物保护"
                    ],
                    "answerIndex": 1,
                    "explanation": "Accurately articulates the ideological and institutional framework of China's ecological civilization."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi phrase for 'lucid waters and lush mountains / green hills and clear waters' (绿水青山):",
                    "acceptedAnswers": [
                        "绿水青山",
                        "lvshuiqingshan",
                        "lǜshuǐqīngshān",
                        "Lǜshuǐqīngshān",
                        "Lvshuiqingshan",
                        "綠水青山"
                    ],
                    "explanation": "绿水青山 (lǜ shuǐ qīng shān) means 'lucid waters and lush mountains'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u27-l3": {
        "id": "zh-u27-l3",
        "unit": "zh-u27",
        "level": "C1",
        "objective": "Master the technical and industrial discourse of New Energy Vehicles and battery technology (新能源汽车 NEVs, 动力电池 power battery, 磷酸铁锂 / 三元锂 LFP / NCM batteries, 固态电池 solid-state battery, 超级快充 supercharging, 换电站 battery-swap station).",
        "prerequisites": [
            "zh-u27-l2"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u27-l2"
            ]
        },
        "presentation": {
            "explanation": "中国新能源汽车（NEV）产业已构建起从上游关键矿产提炼、动力电池电芯制造到整车制造与全球出口的完备工业生态！\n\n1. 核心动力与电池技术路线 (Battery Chemistry & Tech):\n- **动力电池 (Power Battery)**：以宁德时代（CATL）、比亚迪为代表，全球市场份额占据半壁江山。\n- **磷酸铁锂电池 (LFP Battery)**：安全性高、循环寿命长、成本优势显著。\n- **三元锂电池 (NCM Battery)**：能量密度高、低温续航表现优异。\n- **固态电池 (Solid-State Battery)**：下一代颠覆性电池技术，具有极高能量密度与本征安全性。\n\n2. 补能生态与智能网联 (Charging Ecosystem & Smart Cockpit):\n- **800V高压超充** / **换电模式 (Battery-Swapping)** / **车路协同与高阶智能驾驶**。",
            "examples": [
                {
                    "target": "汽车工业协会秘书长在国际车展主旨论坛上发布数据：‘中国新能源汽车产销量连续多年位居全球第一，凭借成熟的动力电池垂直整合能力与智能座舱体验，成为全球汽车电动化转型的核心引擎！’",
                    "reading": "Qìchē Gōngyè Xiéhuì mǐshūzhǎng zài guójì chēzhǎn zhǔzhǐ lùntán shang fābù shùjù: ‘Zhōngguó xīn néngyuán qìchē chǎnxiāoliàng liánxù duō nián wèijū quánqiú dì-yī, píngjiè chéngshú de dònglì diànchí chuízhí zhěnghé nénglì yǔ zhìnéng zuòcāng tǐyàn, chéngwéi quánqiú qìchē diàndònghuà zhuǎnxíng de héxīn yǐnqíng!’",
                    "translation": "The association secretary announced: 'China leads global NEV production, serving as the primary engine for global EV transition with battery integration and smart cockpits!'"
                },
                {
                    "target": "电池研发首席科学家在学术研讨会上展示最新突破：‘我们自研的新一代高能量密度全固态电池已进入装车路测阶段，在零下三十度极寒环境下续航衰减不到百分之十！’",
                    "reading": "Diànchí yánfā shǒuxí kēxuéjiā zài xuéshù yántǎohuì shang zhǎnshì zuìxīn tūpò: ‘Wǒmen zìyán de xīn yídài gāo néngliàng mìdù quán-gùtài diànchí yǐ jìnrù zhuāngchē lùcè jiēduàn, zài língxià sānshí dù jíhán huánjìng xià xùháng shuāijiǎn bù dào bǎifēnzhī shí!’",
                    "translation": "The scientist presented: 'Our proprietary solid-state battery has entered road testing, retaining over 90% range at minus 30 degrees Celsius!'"
                },
                {
                    "target": "大卫体验全自动换电站的便捷服务：‘开进智能换电站后，机械臂在短短三分钟内便完成了底盘动力电池的精准更换，完全消除了长途自驾的里程焦虑！’",
                    "reading": "Dàwèi tǐyàn quán-zìdòng huàndiànzhàn de biànjié fúwù: ‘Kāijìn zhìnéng huàndiànzhàn hòu, jīxièbì zài duǎnduǎn sān fēnzhōng nèi biàn wánchéng le dǐpán dònglì diànchí de jīngzhǔn gēnghuàn, wánquán xiāochú le chángtú zìjià de lǐchéng jiāolǜ!’",
                    "translation": "David experienced automated battery swap: 'Robotic arms swapped the chassis battery in 3 minutes, eliminating long-distance range anxiety!'"
                }
            ],
            "mnemonics": [
                "NEV Dominance: 新能源汽车 (NEV), 动力电池 (Power Battery), 固态电池 (Solid-State), 换电超充 (Swap & Supercharge)!"
            ],
            "culturalNotes": [
                "China accounts for over 60% of global electric vehicle production and over 70% of global battery manufacturing capacity (led by CATL and BYD)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "包括纯电动汽车（BEV）、插电式混合动力汽车（PHEV）与燃料电池汽车（FCEV）在内的官方综合产业统称是：",
                    "options": [
                        "传统燃油车",
                        "新能源汽车 (New Energy Vehicles / NEVs)",
                        "人力三轮车"
                    ],
                    "answerIndex": 1,
                    "explanation": "新能源汽车 (NEV) is China's official classification encompassing BEVs, PHEVs, and FCEVs."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "通过机械自动化设备在数分钟内将电动汽车亏电电池替换为满电电池的补能创新模式被称为：",
                    "options": [
                        "换电模式 / 换电站 (Battery-swapping mode / Battery-swap station)",
                        "燃油加注",
                        "拖车救援"
                    ],
                    "answerIndex": 0,
                    "explanation": "换电模式 (battery-swapping) allows full recharge in 3 minutes via automated battery replacement."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国新能源汽车产业技术优势与全球竞争格局，下列哪一项表述完全正确？",
                    "options": [
                        "中国新能源汽车没有任何核心电池技术",
                        "中国新能源汽车无法实现出口",
                        "中国凭借成熟的动力电池产业链、高压超充与换电生态以及领先的智能座舱技术，形成了强大的全球新能源汽车智造优势 (Mature battery supply chain, fast charging/swap ecosystem, and smart cockpits)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately synthesizes the industrial supremacy and technological features of China's NEV ecosystem."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 5-character Hanzi phrase for 'New Energy Vehicles' (新能源汽车):",
                    "acceptedAnswers": [
                        "新能源汽车",
                        "xinnengyuanqiche",
                        "xīnnéngyuánqìchē",
                        "Xīnnéngyuánqìchē",
                        "Xinnengyuanqiche",
                        "新能源汽車"
                    ],
                    "explanation": "新能源汽车 (xīn néngyuán qìchē) means 'New Energy Vehicles / NEVs'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u27-l4": {
        "id": "zh-u27-l4",
        "unit": "zh-u27",
        "level": "C1",
        "objective": "Master the financial and compliance discourse of carbon markets and green finance (全国碳排放权交易市场 National Carbon ETS, 碳配额 carbon allowance, 碳足迹 carbon footprint, 绿色金融 green finance, 绿色债券 green bonds, ESG 环境社会治理报告).",
        "prerequisites": [
            "zh-u27-l3"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u27-l3"
            ]
        },
        "presentation": {
            "explanation": "利用市场化机制推动全社会低碳减排，**全国碳排放权交易市场（National Carbon ETS）与绿色金融体系**已成为实现可持续发展的核心制度支柱！\n\n1. 碳交易市场机制 (Carbon Market Architecture):\n- **碳排放权配额 (Carbon Emission Allowance - CEA)**：监管部门向重点排放企业核发的二氧化碳排放许可额度。\n- **碳履约与碳交易**：超额减排企业可在交易所出售剩余配额，超标排放企业必须在市场上买入配额以完成清缴履约。\n- **产品碳足迹 (Product Carbon Footprint)**：核算产品从原材料采集、制造到废弃全生命周期的碳排放量。\n\n2. 绿色金融与ESG评级 (Green Finance & ESG):\n- **绿色信贷与绿色债券 (Green Credit & Green Bonds)**：资金专门用于支持节能环保与清洁能源项目。\n- **ESG（环境、社会与公司治理）**：上市公司可持续发展能力与合规治理的国际通行评价标准。",
            "examples": [
                {
                    "target": "上海环境能源交易所负责人在碳金融峰会上公布：‘中国全国碳排放权交易市场已覆盖全球最大规模的温室气体排放量，碳定价机制有效倒逼了高耗能企业实施绿色节能技改！’",
                    "reading": "Shànghǎi Huánjìng Néngyuán Jiāoyìsuǒ fùzérén zài tàn jīnróng fēnghuì shang gōngbù: ‘Zhōngguó quánguó tàn páifàngquán jiāoyì shìchǎng yǐ fùgài quánqiú zuì dà guīmó de wēnshì qìtǐ páifàngliàng, tàn dìngjià jīzhì yǒuxiào dàobī le gāo-hàonéng qǐyè shíshī lǜsè jiénéng jìgǎi!’",
                    "translation": "The exchange head announced: 'China's national ETS covers the largest emissions globally; carbon pricing compels energy-intensive firms to innovate green technologies!'"
                },
                {
                    "target": "可持续发展总监在年度股东大会上展示ESG成果：‘我们严格按照国际准则核算全产业链的“产品碳足迹”，并成功发行了五亿元人民币的绿色碳中和债券，全部投向零碳智慧园区建设。’",
                    "reading": "Kěchíxù Fāzhǎn zǒngjiān zài niándù gǔdōng dàhuì shang zhǎnshì ESG chéngguǒ: ‘Wǒmen yángé ànzhào guójì zhǔnzé hésuàn quán chǎnyèliàn de “chǎnpǐn tànzújì”, bìng chénggōng fāxíng le wǔ yì yuán Rénmínbì de lǜsè tàn zhōnghé zhàndài, quánbù tóuxiàng língtàn zhìnéng yuánqū jiànshè.’",
                    "translation": "The sustainability director presented: 'We audited product carbon footprints across supply chains and issued 500M RMB green carbon-neutral bonds for zero-carbon parks.'"
                },
                {
                    "target": "大卫在跨国投行做绿色金融尽调报告：‘将ESG指标深度纳入信贷审批与投资决策体系，不仅能有效规避高污染行业的合规风险，更能精准捕捉绿色转型带来的长期价值增长。’",
                    "reading": "Dàwèi zài kuàguó tóuháng zuò lǜsè jīnróng jìndiào bàogào: ‘Jiāng ESG zhǐbiāo shēndù nàrù xìndài shěnpī yǔ tóuzī juécè tǐxì, bùjǐn néng yǒuxiào guībì gāo-wūrǎn hángyè de hégūi fēnxiǎn, gèng néng jīngzhǔn bǔzhuō lǜsè zhuǎnxíng dài lái de chángqī jiàzhí zēngzhǎng.’",
                    "translation": "David reported: 'Integrating ESG into credit approvals mitigates compliance risks and captures long-term value from green transitions.'"
                }
            ],
            "mnemonics": [
                "Green Finance: 碳交易 (ETS Allowance), 碳足迹 (Carbon Footprint), 绿色债券 (Green Bonds), ESG披露 (ESG Reporting)!"
            ],
            "culturalNotes": [
                "China's National Carbon ETS launched in July 2021, instantly becoming the largest carbon market in the world by covered emissions (over 4.5 billion tonnes of CO2 in the power sector alone)."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "衡量一个产品从原材料获取、生产加工、运输储存到最终消费与废弃处理全生命周期温室气体排放总量的指标是：",
                    "options": [
                        "产品碳足迹 (Product Carbon Footprint)",
                        "产品体积",
                        "产品保质期"
                    ],
                    "answerIndex": 0,
                    "explanation": "产品碳足迹 (Product Carbon Footprint) measures the full lifecycle greenhouse gas emissions of a product."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "企业或政府募集资金、专门用于支持符合国家标准的节能减排、清洁能源或生态环保项目的债券品种是：",
                    "options": [
                        "高息垃圾债",
                        "绿色债券 (Green Bonds / Climate Bonds)",
                        "博彩彩票"
                    ],
                    "answerIndex": 1,
                    "explanation": "绿色债券 (Green Bonds) are earmarked specifically for environmentally beneficial and climate transition projects."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国全国碳交易市场与绿色金融工具的运作机制，下列哪一项表述完全正确？",
                    "options": [
                        "碳排放配额可以无限制免费随意挥霍",
                        "碳足迹无法进行科学核算",
                        "全国碳市场通过配额交易与碳定价机制倒逼企业减排，结合绿色信贷与绿色债券等金融工具为绿色低碳转型提供坚实支撑 (National ETS uses carbon pricing and green bonds/loans to compel and finance decarbonization)"
                    ],
                    "answerIndex": 2,
                    "explanation": "Accurately represents the market mechanisms of carbon trading and green financial instruments."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 3-character Hanzi term for 'carbon footprint' (碳足迹):",
                    "acceptedAnswers": [
                        "碳足迹",
                        "tanzuji",
                        "tànzújì",
                        "Tànzújì",
                        "Tanzuji",
                        "碳足跡"
                    ],
                    "explanation": "碳足迹 (tàn zújì) means 'carbon footprint'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u27-l5": {
        "id": "zh-u27-l5",
        "unit": "zh-u27",
        "level": "C1",
        "objective": "Synthesize all clean energy, ecological governance, NEVs, and carbon finance discourse into UN climate negotiations, COP summits, and global ESG communiques.",
        "prerequisites": [
            "zh-u27-l4"
        ],
        "warmup": {
            "srsPull": true,
            "reviewFocus": [
                "zh-u27-l4"
            ]
        },
        "presentation": {
            "explanation": "在本课中，我们将系统整合第二十七单元的所有双碳战略、生态红线、新能源汽车革命与绿色金融体系，在联合国气候变化大会（COP）与全球可持续发展领导人峰会中进行全景论述与高阶谈判！\n\n1. 绿色转型与全球生态治理全景矩阵 (Master Eco-Policy Matrix):\n| 生态转型维度 | 核心制度与技术支撑 | 全球贡献与战略格局 |\n| :--- | :--- | :--- |\n| **双碳战略** | 2030碳达峰 / 2060碳中和 / 光伏特高压 | 建成全球最大规模清洁发电网络，大幅压低全球绿色用能成本 |\n| **生态治理** | 两山理念 / 生态红线 / 国家公园体制 | 保护全球生物多样性，提供荒漠化治理与生态修复的中国方案 |\n| **新能源出行** | 动力电池 / 智能座舱 / 800V超充换电 | 领跑全球NEV智造与电动化普及，构建零碳智慧交通生态 |\n| **市场金融** | 全国碳市场 / 产品碳足迹 / 绿色债券 | 覆盖全球最大碳排放交易量，以绿色金融赋能实体产业减碳 |\n| **气候外交** | 共同但有区别的责任 / 人类命运共同体 | 坚守多边主义，积极推动构建公平合理、合作共赢的全球环境治理体系 |\n\n2. 第二十七单元实战交际演练 (Unit 27 Global Climate Summit):\n- 联合国气候变化大会（COP）中国角主旨发言与全球绿色低碳发展高级别对话。",
            "examples": [
                {
                    "target": "中国气候变化事务特使在联合国气候大会（COP）全体会议上发表演讲：‘中国坚持言必信、行必果，不仅制定了清晰雄健的“双碳”行动方案，更通过全球领先的绿色能源与新能源汽车产业，为全球落实《巴黎协定》注入了强劲确定性！’",
                    "reading": "Zhōngguó Qìhòu Biànhuà Shìwù Tèshǐ zài Liánhéguó Qìhòu Dàhuì (COP) quántǐ huìyì shang fābiǎo yǎnjiǎng: ‘Zhōngguó jiānchí yán bì xìn, xíng bì guǒ, bùjǐn zhìdìng le qīngxī xióngjiàn de “shuāngtàn” xíngdòng fāng'àn, gèng tōngguò quánqiú lǐngxiān de lǜsè néngyuán yǔ xīn néngyuán qìchē chǎnyè, wèi quánqiú luòshí «Bālí Xiédìng» zhùrù le qiángjìn quèdìngxìng!’",
                    "translation": "The climate envoy addressed COP: 'China keeps its word with concrete Dual Carbon actions, injecting strong momentum into Paris Agreement implementation via clean tech!'"
                },
                {
                    "target": "大卫在世界可持续发展工商理事会主旨论坛发言：‘从荒漠光伏基地到智能换电网络，从全国碳市场到深入人心的“两山”生态哲学，中国正在走出一条经济繁荣与绿水青山相得益彰的中国式现代化绿色发展之路！’",
                    "reading": "Dàwèi zài Shìjiè Kěchíxù Fāzhǎn Gōngshāng Lǐshìhuì zhǔzhǐ lùntán fāyán: ‘Cóng huāngmò guāngfú jīdì dào zhìnéng huàndiàn wǎngluò, cóng quánguó tàn shìchǎng dào shēnrù-rénxīn de “liǎngshān” shēngtài zhéxué, Zhōngguó zhèngzài zǒuchū yì tiáo jīngjì fánróng yǔ lǜshuǐ-qīngshān xiāngdé-yìzhāng de Zhōngguóshì xiàndàihuà lǜsè fāzhǎn zhī lù!’",
                    "translation": "David stated: 'From desert solar to battery swapping, from ETS to Two Mountains, China demonstrates a modernized green path harmonizing growth and ecology!'"
                },
                {
                    "target": "联合国环境规划署执行主任高度评价中国贡献：‘中国在荒漠化治理、可再生能源规模化应用与生态红线保护方面的卓越实践，为广大发展中国家实现绿色包容性增长树立了光辉典范！’",
                    "reading": "Liánhéguó Huánjìng Guīhuàshǔ zhíxíng zhǔrèn gāodù píngjià Zhōngguó gòngxiàn: ‘Zhōngguó zài huāngmòhuà zhìlǐ, kězàishēng néngyuán guīmóhuà yìngyòng yǔ shēngtài hóngxiàn bǎohù fāngmiàn de zhuóyuè shíjiàn, wèi guǎngdà fāzhǎnzhōng guójiā shíxiàn lǜsè bāoróngxìng zēngzhǎng shùlì le guānghuī diǎnfàn!’",
                    "translation": "The UNEP Executive Director praised: 'China's desertification control, renewables scale, and eco-redlines set a brilliant model for green inclusive growth!'"
                }
            ],
            "mnemonics": [
                "Climate Leadership: 3060双碳 (Dual Carbon) + 两山理念 (Two Mountains) + 绿电电车 (Solar & NEVs) + 碳市金融 (ETS & Green Bonds) = Sustainable Planet (人类命运共同体)!"
            ],
            "culturalNotes": [
                "In international climate negotiations, China upholds the core principle of «共同但有区别的责任» (Common But Differentiated Responsibilities - CBDR) as enshrined in the UNFCCC."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "联合国气候变化框架公约确立的指导发达国家与发展中国家公平分担减排历史责任的核心国际法原则是：",
                    "options": [
                        "完全相同绝对责任",
                        "共同但有区别的责任 (Common But Differentiated Responsibilities / CBDR)",
                        "互不相干原则"
                    ],
                    "answerIndex": 1,
                    "explanation": "共同但有区别的责任 (CBDR) is the foundational principle of international climate law."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "中国向世界倡导的旨在统筹经济繁荣、社会公平与地球生态环境平衡发展的人类未来愿景是：",
                    "options": [
                        "人与自然生命共同体 (A Community of Life for Man and Nature / Ecological Community of Shared Future)",
                        "零和博弈竞争",
                        "掠夺式开发"
                    ],
                    "answerIndex": 0,
                    "explanation": "人与自然生命共同体 represents the global vision for harmonious ecological co-existence."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于中国在应对全球气候变化、推动生态文明建设与绿色产业发展中的综合战略定位，下列哪一项总括完全正确？",
                    "options": [
                        "中国反对一切全球绿色气候合作",
                        "中国依托雄健的「双碳」行动方案、世界领先的清洁能源与新能源汽车全产业链、以及不断深化的生态红线与碳交易制度，成为全球生态治理的重要参与者、贡献者与引领者 (Crucial participant, contributor, and leader in global eco-governance)",
                        "中国只在口头上承诺减排"
                    ],
                    "answerIndex": 1,
                    "explanation": "Comprehensively summarizes China's role as a major contributor and leader in global climate governance, clean energy, and ecological civilization."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the 4-character Hanzi phrase for 'Dual Carbon goals (Peak Carbon & Carbon Neutrality)' (双碳战略):",
                    "acceptedAnswers": [
                        "双碳战略",
                        "双碳",
                        "shuangtanzhanlve",
                        "shuāngtànzhànlüè",
                        "Shuāngtànzhànlüè",
                        "Shuangtanzhanlve",
                        "雙碳戰略",
                        "雙碳"
                    ],
                    "explanation": "双碳战略 (shuāngtàn zhànlüè) means 'Dual Carbon Strategy (Peak & Neutrality)'."
                }
            ],
            "passThreshold": 0.8
        }
    },
    "zh-u28-l1": {
        "id": "zh-u28-l1",
        "subject": "mandarin",
        "unit": 28,
        "lessonNumber": 1,
        "title": "行政法务与知识产权监管 (Administrative & IP Law) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of 行政法务与知识产权 (Administrative & IP Law).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「行政法务与知识产权监管 (Administrative & IP Law)」（第1部分）的核心句法结构与行政法务与知识产权 (Administrative & IP Law)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (28.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (28.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (28.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 行政法务与知识产权 (Administrative & IP Law)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「行政法务与知识产权 (Administrative & IP Law)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (28.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (28.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (28.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「行政法务与知识产权监管 (Administrative & IP Law)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (28.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (28.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (28.1.3)。"
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
                    "prompt": "关于「行政法务与知识产权 (Administrative & IP Law)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 28-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (28.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (28.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (28.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («知识产权_28_1»):",
                    "acceptedAnswers": [
                        "知识产权_28_1"
                    ],
                    "explanation": "The target keyword was: 【知识产权_28_1】"
                }
            ]
        }
    },
    "zh-u28-l2": {
        "id": "zh-u28-l2",
        "subject": "mandarin",
        "unit": 28,
        "lessonNumber": 2,
        "title": "行政法务与知识产权监管 (Administrative & IP Law) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of 行政法务与知识产权 (Administrative & IP Law).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「行政法务与知识产权监管 (Administrative & IP Law)」（第2部分）的核心句法结构与行政法务与知识产权 (Administrative & IP Law)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (28.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (28.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (28.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 行政法务与知识产权 (Administrative & IP Law)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「行政法务与知识产权 (Administrative & IP Law)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (28.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (28.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (28.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「行政法务与知识产权监管 (Administrative & IP Law)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (28.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (28.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (28.2.3)。"
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
                    "prompt": "关于「行政法务与知识产权 (Administrative & IP Law)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 28-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (28.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (28.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (28.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («知识产权_28_2»):",
                    "acceptedAnswers": [
                        "知识产权_28_2"
                    ],
                    "explanation": "The target keyword was: 【知识产权_28_2】"
                }
            ]
        }
    },
    "zh-u28-l3": {
        "id": "zh-u28-l3",
        "subject": "mandarin",
        "unit": 28,
        "lessonNumber": 3,
        "title": "行政法务与知识产权监管 (Administrative & IP Law) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of 行政法务与知识产权 (Administrative & IP Law).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「行政法务与知识产权监管 (Administrative & IP Law)」（第3部分）的核心句法结构与行政法务与知识产权 (Administrative & IP Law)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (28.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (28.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (28.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 行政法务与知识产权 (Administrative & IP Law)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「行政法务与知识产权 (Administrative & IP Law)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (28.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (28.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (28.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「行政法务与知识产权监管 (Administrative & IP Law)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (28.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (28.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (28.3.3)。"
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
                    "prompt": "关于「行政法务与知识产权 (Administrative & IP Law)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 28-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (28.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (28.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (28.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («知识产权_28_3»):",
                    "acceptedAnswers": [
                        "知识产权_28_3"
                    ],
                    "explanation": "The target keyword was: 【知识产权_28_3】"
                }
            ]
        }
    },
    "zh-u28-l4": {
        "id": "zh-u28-l4",
        "subject": "mandarin",
        "unit": 28,
        "lessonNumber": 4,
        "title": "行政法务与知识产权监管 (Administrative & IP Law) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of 行政法务与知识产权 (Administrative & IP Law).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「行政法务与知识产权监管 (Administrative & IP Law)」（第4部分）的核心句法结构与行政法务与知识产权 (Administrative & IP Law)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (28.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (28.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (28.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 行政法务与知识产权 (Administrative & IP Law)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「行政法务与知识产权 (Administrative & IP Law)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (28.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (28.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (28.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「行政法务与知识产权监管 (Administrative & IP Law)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (28.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (28.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (28.4.3)。"
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
                    "prompt": "关于「行政法务与知识产权 (Administrative & IP Law)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 28-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (28.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (28.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (28.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («知识产权_28_4»):",
                    "acceptedAnswers": [
                        "知识产权_28_4"
                    ],
                    "explanation": "The target keyword was: 【知识产权_28_4】"
                }
            ]
        }
    },
    "zh-u28-l5": {
        "id": "zh-u28-l5",
        "subject": "mandarin",
        "unit": 28,
        "lessonNumber": 5,
        "title": "行政法务与知识产权监管 (Administrative & IP Law) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of 行政法务与知识产权 (Administrative & IP Law).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「行政法务与知识产权监管 (Administrative & IP Law)」（第5部分）的核心句法结构与行政法务与知识产权 (Administrative & IP Law)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (28.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (28.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (28.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 行政法务与知识产权 (Administrative & IP Law)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「行政法务与知识产权 (Administrative & IP Law)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (28.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (28.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (28.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「行政法务与知识产权监管 (Administrative & IP Law)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (28.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (28.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (28.5.3)。"
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
                    "prompt": "关于「行政法务与知识产权 (Administrative & IP Law)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 28-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (28.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (28.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (28.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («知识产权_28_5»):",
                    "acceptedAnswers": [
                        "知识产权_28_5"
                    ],
                    "explanation": "The target keyword was: 【知识产权_28_5】"
                }
            ]
        }
    },
    "zh-u29-l1": {
        "id": "zh-u29-l1",
        "subject": "mandarin",
        "unit": 29,
        "lessonNumber": 1,
        "title": "学术论文规范与科研答辩 (Academic Dissertation & Defense) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of 学术论文与科研答辩 (Academic Dissertation & Defense).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「学术论文规范与科研答辩 (Academic Dissertation & Defense)」（第1部分）的核心句法结构与学术论文与科研答辩 (Academic Dissertation & Defense)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (29.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (29.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (29.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 学术论文与科研答辩 (Academic Dissertation & Defense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「学术论文与科研答辩 (Academic Dissertation & Defense)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (29.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (29.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (29.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「学术论文规范与科研答辩 (Academic Dissertation & Defense)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (29.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (29.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (29.1.3)。"
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
                    "prompt": "关于「学术论文与科研答辩 (Academic Dissertation & Defense)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 29-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (29.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (29.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (29.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («论文_29_1»):",
                    "acceptedAnswers": [
                        "论文_29_1"
                    ],
                    "explanation": "The target keyword was: 【论文_29_1】"
                }
            ]
        }
    },
    "zh-u29-l2": {
        "id": "zh-u29-l2",
        "subject": "mandarin",
        "unit": 29,
        "lessonNumber": 2,
        "title": "学术论文规范与科研答辩 (Academic Dissertation & Defense) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of 学术论文与科研答辩 (Academic Dissertation & Defense).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「学术论文规范与科研答辩 (Academic Dissertation & Defense)」（第2部分）的核心句法结构与学术论文与科研答辩 (Academic Dissertation & Defense)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (29.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (29.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (29.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 学术论文与科研答辩 (Academic Dissertation & Defense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「学术论文与科研答辩 (Academic Dissertation & Defense)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (29.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (29.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (29.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「学术论文规范与科研答辩 (Academic Dissertation & Defense)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (29.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (29.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (29.2.3)。"
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
                    "prompt": "关于「学术论文与科研答辩 (Academic Dissertation & Defense)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 29-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (29.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (29.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (29.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («论文_29_2»):",
                    "acceptedAnswers": [
                        "论文_29_2"
                    ],
                    "explanation": "The target keyword was: 【论文_29_2】"
                }
            ]
        }
    },
    "zh-u29-l3": {
        "id": "zh-u29-l3",
        "subject": "mandarin",
        "unit": 29,
        "lessonNumber": 3,
        "title": "学术论文规范与科研答辩 (Academic Dissertation & Defense) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of 学术论文与科研答辩 (Academic Dissertation & Defense).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「学术论文规范与科研答辩 (Academic Dissertation & Defense)」（第3部分）的核心句法结构与学术论文与科研答辩 (Academic Dissertation & Defense)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (29.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (29.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (29.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 学术论文与科研答辩 (Academic Dissertation & Defense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「学术论文与科研答辩 (Academic Dissertation & Defense)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (29.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (29.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (29.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「学术论文规范与科研答辩 (Academic Dissertation & Defense)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (29.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (29.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (29.3.3)。"
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
                    "prompt": "关于「学术论文与科研答辩 (Academic Dissertation & Defense)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 29-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (29.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (29.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (29.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («论文_29_3»):",
                    "acceptedAnswers": [
                        "论文_29_3"
                    ],
                    "explanation": "The target keyword was: 【论文_29_3】"
                }
            ]
        }
    },
    "zh-u29-l4": {
        "id": "zh-u29-l4",
        "subject": "mandarin",
        "unit": 29,
        "lessonNumber": 4,
        "title": "学术论文规范与科研答辩 (Academic Dissertation & Defense) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of 学术论文与科研答辩 (Academic Dissertation & Defense).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「学术论文规范与科研答辩 (Academic Dissertation & Defense)」（第4部分）的核心句法结构与学术论文与科研答辩 (Academic Dissertation & Defense)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (29.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (29.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (29.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 学术论文与科研答辩 (Academic Dissertation & Defense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「学术论文与科研答辩 (Academic Dissertation & Defense)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (29.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (29.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (29.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「学术论文规范与科研答辩 (Academic Dissertation & Defense)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (29.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (29.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (29.4.3)。"
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
                    "prompt": "关于「学术论文与科研答辩 (Academic Dissertation & Defense)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 29-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (29.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (29.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (29.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («论文_29_4»):",
                    "acceptedAnswers": [
                        "论文_29_4"
                    ],
                    "explanation": "The target keyword was: 【论文_29_4】"
                }
            ]
        }
    },
    "zh-u29-l5": {
        "id": "zh-u29-l5",
        "subject": "mandarin",
        "unit": 29,
        "lessonNumber": 5,
        "title": "学术论文规范与科研答辩 (Academic Dissertation & Defense) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of 学术论文与科研答辩 (Academic Dissertation & Defense).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「学术论文规范与科研答辩 (Academic Dissertation & Defense)」（第5部分）的核心句法结构与学术论文与科研答辩 (Academic Dissertation & Defense)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (29.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (29.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (29.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 学术论文与科研答辩 (Academic Dissertation & Defense)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「学术论文与科研答辩 (Academic Dissertation & Defense)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (29.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (29.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (29.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「学术论文规范与科研答辩 (Academic Dissertation & Defense)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (29.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (29.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (29.5.3)。"
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
                    "prompt": "关于「学术论文与科研答辩 (Academic Dissertation & Defense)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 29-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (29.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (29.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (29.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («论文_29_5»):",
                    "acceptedAnswers": [
                        "论文_29_5"
                    ],
                    "explanation": "The target keyword was: 【论文_29_5】"
                }
            ]
        }
    },
    "zh-u30-l1": {
        "id": "zh-u30-l1",
        "subject": "mandarin",
        "unit": 30,
        "lessonNumber": 1,
        "title": "古典诗词格律在现代散文的化用 (Classical Poetry Prosody) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of 古典诗词意境鉴赏 (Classical Poetry in Modern Prose).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「古典诗词格律在现代散文的化用 (Classical Poetry Prosody)」（第1部分）的核心句法结构与古典诗词意境鉴赏 (Classical Poetry in Modern Prose)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (30.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (30.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (30.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 古典诗词意境鉴赏 (Classical Poetry in Modern Prose)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「古典诗词意境鉴赏 (Classical Poetry in Modern Prose)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (30.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (30.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (30.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「古典诗词格律在现代散文的化用 (Classical Poetry Prosody)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (30.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (30.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (30.1.3)。"
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
                    "prompt": "关于「古典诗词意境鉴赏 (Classical Poetry in Modern Prose)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 30-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (30.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (30.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (30.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («诗词_30_1»):",
                    "acceptedAnswers": [
                        "诗词_30_1"
                    ],
                    "explanation": "The target keyword was: 【诗词_30_1】"
                }
            ]
        }
    },
    "zh-u30-l2": {
        "id": "zh-u30-l2",
        "subject": "mandarin",
        "unit": 30,
        "lessonNumber": 2,
        "title": "古典诗词格律在现代散文的化用 (Classical Poetry Prosody) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of 古典诗词意境鉴赏 (Classical Poetry in Modern Prose).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「古典诗词格律在现代散文的化用 (Classical Poetry Prosody)」（第2部分）的核心句法结构与古典诗词意境鉴赏 (Classical Poetry in Modern Prose)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (30.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (30.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (30.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 古典诗词意境鉴赏 (Classical Poetry in Modern Prose)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「古典诗词意境鉴赏 (Classical Poetry in Modern Prose)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (30.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (30.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (30.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「古典诗词格律在现代散文的化用 (Classical Poetry Prosody)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (30.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (30.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (30.2.3)。"
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
                    "prompt": "关于「古典诗词意境鉴赏 (Classical Poetry in Modern Prose)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 30-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (30.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (30.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (30.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («诗词_30_2»):",
                    "acceptedAnswers": [
                        "诗词_30_2"
                    ],
                    "explanation": "The target keyword was: 【诗词_30_2】"
                }
            ]
        }
    },
    "zh-u30-l3": {
        "id": "zh-u30-l3",
        "subject": "mandarin",
        "unit": 30,
        "lessonNumber": 3,
        "title": "古典诗词格律在现代散文的化用 (Classical Poetry Prosody) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of 古典诗词意境鉴赏 (Classical Poetry in Modern Prose).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「古典诗词格律在现代散文的化用 (Classical Poetry Prosody)」（第3部分）的核心句法结构与古典诗词意境鉴赏 (Classical Poetry in Modern Prose)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (30.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (30.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (30.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 古典诗词意境鉴赏 (Classical Poetry in Modern Prose)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「古典诗词意境鉴赏 (Classical Poetry in Modern Prose)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (30.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (30.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (30.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「古典诗词格律在现代散文的化用 (Classical Poetry Prosody)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (30.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (30.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (30.3.3)。"
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
                    "prompt": "关于「古典诗词意境鉴赏 (Classical Poetry in Modern Prose)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 30-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (30.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (30.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (30.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («诗词_30_3»):",
                    "acceptedAnswers": [
                        "诗词_30_3"
                    ],
                    "explanation": "The target keyword was: 【诗词_30_3】"
                }
            ]
        }
    },
    "zh-u30-l4": {
        "id": "zh-u30-l4",
        "subject": "mandarin",
        "unit": 30,
        "lessonNumber": 4,
        "title": "古典诗词格律在现代散文的化用 (Classical Poetry Prosody) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of 古典诗词意境鉴赏 (Classical Poetry in Modern Prose).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「古典诗词格律在现代散文的化用 (Classical Poetry Prosody)」（第4部分）的核心句法结构与古典诗词意境鉴赏 (Classical Poetry in Modern Prose)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (30.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (30.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (30.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 古典诗词意境鉴赏 (Classical Poetry in Modern Prose)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「古典诗词意境鉴赏 (Classical Poetry in Modern Prose)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (30.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (30.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (30.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「古典诗词格律在现代散文的化用 (Classical Poetry Prosody)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (30.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (30.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (30.4.3)。"
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
                    "prompt": "关于「古典诗词意境鉴赏 (Classical Poetry in Modern Prose)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 30-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (30.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (30.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (30.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («诗词_30_4»):",
                    "acceptedAnswers": [
                        "诗词_30_4"
                    ],
                    "explanation": "The target keyword was: 【诗词_30_4】"
                }
            ]
        }
    },
    "zh-u30-l5": {
        "id": "zh-u30-l5",
        "subject": "mandarin",
        "unit": 30,
        "lessonNumber": 5,
        "title": "古典诗词格律在现代散文的化用 (Classical Poetry Prosody) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of 古典诗词意境鉴赏 (Classical Poetry in Modern Prose).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「古典诗词格律在现代散文的化用 (Classical Poetry Prosody)」（第5部分）的核心句法结构与古典诗词意境鉴赏 (Classical Poetry in Modern Prose)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (30.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (30.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (30.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 古典诗词意境鉴赏 (Classical Poetry in Modern Prose)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「古典诗词意境鉴赏 (Classical Poetry in Modern Prose)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (30.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (30.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (30.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「古典诗词格律在现代散文的化用 (Classical Poetry Prosody)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (30.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (30.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (30.5.3)。"
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
                    "prompt": "关于「古典诗词意境鉴赏 (Classical Poetry in Modern Prose)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 30-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (30.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (30.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (30.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («诗词_30_5»):",
                    "acceptedAnswers": [
                        "诗词_30_5"
                    ],
                    "explanation": "The target keyword was: 【诗词_30_5】"
                }
            ]
        }
    },
    "zh-u31-l1": {
        "id": "zh-u31-l1",
        "subject": "mandarin",
        "unit": 31,
        "lessonNumber": 1,
        "title": "新闻评论与深度社论修辞 (Media Analysis & Editorial) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of 新闻社论与深度评论 (Journalism & Editorial Rhetoric).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「新闻评论与深度社论修辞 (Media Analysis & Editorial)」（第1部分）的核心句法结构与新闻社论与深度评论 (Journalism & Editorial Rhetoric)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (31.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (31.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (31.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 新闻社论与深度评论 (Journalism & Editorial Rhetoric)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「新闻社论与深度评论 (Journalism & Editorial Rhetoric)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (31.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (31.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (31.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「新闻评论与深度社论修辞 (Media Analysis & Editorial)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (31.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (31.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (31.1.3)。"
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
                    "prompt": "关于「新闻社论与深度评论 (Journalism & Editorial Rhetoric)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 31-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (31.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (31.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (31.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («社论_31_1»):",
                    "acceptedAnswers": [
                        "社论_31_1"
                    ],
                    "explanation": "The target keyword was: 【社论_31_1】"
                }
            ]
        }
    },
    "zh-u31-l2": {
        "id": "zh-u31-l2",
        "subject": "mandarin",
        "unit": 31,
        "lessonNumber": 2,
        "title": "新闻评论与深度社论修辞 (Media Analysis & Editorial) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of 新闻社论与深度评论 (Journalism & Editorial Rhetoric).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「新闻评论与深度社论修辞 (Media Analysis & Editorial)」（第2部分）的核心句法结构与新闻社论与深度评论 (Journalism & Editorial Rhetoric)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (31.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (31.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (31.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 新闻社论与深度评论 (Journalism & Editorial Rhetoric)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「新闻社论与深度评论 (Journalism & Editorial Rhetoric)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (31.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (31.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (31.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「新闻评论与深度社论修辞 (Media Analysis & Editorial)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (31.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (31.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (31.2.3)。"
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
                    "prompt": "关于「新闻社论与深度评论 (Journalism & Editorial Rhetoric)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 31-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (31.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (31.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (31.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («社论_31_2»):",
                    "acceptedAnswers": [
                        "社论_31_2"
                    ],
                    "explanation": "The target keyword was: 【社论_31_2】"
                }
            ]
        }
    },
    "zh-u31-l3": {
        "id": "zh-u31-l3",
        "subject": "mandarin",
        "unit": 31,
        "lessonNumber": 3,
        "title": "新闻评论与深度社论修辞 (Media Analysis & Editorial) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of 新闻社论与深度评论 (Journalism & Editorial Rhetoric).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「新闻评论与深度社论修辞 (Media Analysis & Editorial)」（第3部分）的核心句法结构与新闻社论与深度评论 (Journalism & Editorial Rhetoric)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (31.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (31.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (31.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 新闻社论与深度评论 (Journalism & Editorial Rhetoric)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「新闻社论与深度评论 (Journalism & Editorial Rhetoric)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (31.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (31.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (31.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「新闻评论与深度社论修辞 (Media Analysis & Editorial)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (31.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (31.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (31.3.3)。"
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
                    "prompt": "关于「新闻社论与深度评论 (Journalism & Editorial Rhetoric)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 31-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (31.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (31.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (31.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («社论_31_3»):",
                    "acceptedAnswers": [
                        "社论_31_3"
                    ],
                    "explanation": "The target keyword was: 【社论_31_3】"
                }
            ]
        }
    },
    "zh-u31-l4": {
        "id": "zh-u31-l4",
        "subject": "mandarin",
        "unit": 31,
        "lessonNumber": 4,
        "title": "新闻评论与深度社论修辞 (Media Analysis & Editorial) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of 新闻社论与深度评论 (Journalism & Editorial Rhetoric).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「新闻评论与深度社论修辞 (Media Analysis & Editorial)」（第4部分）的核心句法结构与新闻社论与深度评论 (Journalism & Editorial Rhetoric)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (31.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (31.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (31.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 新闻社论与深度评论 (Journalism & Editorial Rhetoric)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「新闻社论与深度评论 (Journalism & Editorial Rhetoric)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (31.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (31.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (31.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「新闻评论与深度社论修辞 (Media Analysis & Editorial)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (31.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (31.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (31.4.3)。"
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
                    "prompt": "关于「新闻社论与深度评论 (Journalism & Editorial Rhetoric)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 31-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (31.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (31.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (31.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («社论_31_4»):",
                    "acceptedAnswers": [
                        "社论_31_4"
                    ],
                    "explanation": "The target keyword was: 【社论_31_4】"
                }
            ]
        }
    },
    "zh-u31-l5": {
        "id": "zh-u31-l5",
        "subject": "mandarin",
        "unit": 31,
        "lessonNumber": 5,
        "title": "新闻评论与深度社论修辞 (Media Analysis & Editorial) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of 新闻社论与深度评论 (Journalism & Editorial Rhetoric).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「新闻评论与深度社论修辞 (Media Analysis & Editorial)」（第5部分）的核心句法结构与新闻社论与深度评论 (Journalism & Editorial Rhetoric)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (31.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (31.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (31.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 新闻社论与深度评论 (Journalism & Editorial Rhetoric)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「新闻社论与深度评论 (Journalism & Editorial Rhetoric)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (31.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (31.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (31.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「新闻评论与深度社论修辞 (Media Analysis & Editorial)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (31.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (31.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (31.5.3)。"
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
                    "prompt": "关于「新闻社论与深度评论 (Journalism & Editorial Rhetoric)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 31-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (31.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (31.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (31.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («社论_31_5»):",
                    "acceptedAnswers": [
                        "社论_31_5"
                    ],
                    "explanation": "The target keyword was: 【社论_31_5】"
                }
            ]
        }
    },
    "zh-u32-l1": {
        "id": "zh-u32-l1",
        "subject": "mandarin",
        "unit": 32,
        "lessonNumber": 1,
        "title": "儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of 儒道思想与哲学思辨 (Confucian-Daoist Philosophy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics)」（第1部分）的核心句法结构与儒道思想与哲学思辨 (Confucian-Daoist Philosophy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (32.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (32.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (32.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 儒道思想与哲学思辨 (Confucian-Daoist Philosophy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「儒道思想与哲学思辨 (Confucian-Daoist Philosophy)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (32.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (32.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (32.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (32.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (32.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (32.1.3)。"
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
                    "prompt": "关于「儒道思想与哲学思辨 (Confucian-Daoist Philosophy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 32-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (32.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (32.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (32.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («儒家_32_1»):",
                    "acceptedAnswers": [
                        "儒家_32_1"
                    ],
                    "explanation": "The target keyword was: 【儒家_32_1】"
                }
            ]
        }
    },
    "zh-u32-l2": {
        "id": "zh-u32-l2",
        "subject": "mandarin",
        "unit": 32,
        "lessonNumber": 2,
        "title": "儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of 儒道思想与哲学思辨 (Confucian-Daoist Philosophy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics)」（第2部分）的核心句法结构与儒道思想与哲学思辨 (Confucian-Daoist Philosophy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (32.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (32.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (32.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 儒道思想与哲学思辨 (Confucian-Daoist Philosophy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「儒道思想与哲学思辨 (Confucian-Daoist Philosophy)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (32.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (32.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (32.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (32.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (32.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (32.2.3)。"
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
                    "prompt": "关于「儒道思想与哲学思辨 (Confucian-Daoist Philosophy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 32-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (32.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (32.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (32.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («儒家_32_2»):",
                    "acceptedAnswers": [
                        "儒家_32_2"
                    ],
                    "explanation": "The target keyword was: 【儒家_32_2】"
                }
            ]
        }
    },
    "zh-u32-l3": {
        "id": "zh-u32-l3",
        "subject": "mandarin",
        "unit": 32,
        "lessonNumber": 3,
        "title": "儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of 儒道思想与哲学思辨 (Confucian-Daoist Philosophy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics)」（第3部分）的核心句法结构与儒道思想与哲学思辨 (Confucian-Daoist Philosophy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (32.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (32.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (32.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 儒道思想与哲学思辨 (Confucian-Daoist Philosophy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「儒道思想与哲学思辨 (Confucian-Daoist Philosophy)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (32.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (32.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (32.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (32.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (32.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (32.3.3)。"
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
                    "prompt": "关于「儒道思想与哲学思辨 (Confucian-Daoist Philosophy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 32-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (32.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (32.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (32.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («儒家_32_3»):",
                    "acceptedAnswers": [
                        "儒家_32_3"
                    ],
                    "explanation": "The target keyword was: 【儒家_32_3】"
                }
            ]
        }
    },
    "zh-u32-l4": {
        "id": "zh-u32-l4",
        "subject": "mandarin",
        "unit": 32,
        "lessonNumber": 4,
        "title": "儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of 儒道思想与哲学思辨 (Confucian-Daoist Philosophy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics)」（第4部分）的核心句法结构与儒道思想与哲学思辨 (Confucian-Daoist Philosophy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (32.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (32.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (32.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 儒道思想与哲学思辨 (Confucian-Daoist Philosophy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「儒道思想与哲学思辨 (Confucian-Daoist Philosophy)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (32.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (32.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (32.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (32.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (32.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (32.4.3)。"
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
                    "prompt": "关于「儒道思想与哲学思辨 (Confucian-Daoist Philosophy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 32-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (32.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (32.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (32.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («儒家_32_4»):",
                    "acceptedAnswers": [
                        "儒家_32_4"
                    ],
                    "explanation": "The target keyword was: 【儒家_32_4】"
                }
            ]
        }
    },
    "zh-u32-l5": {
        "id": "zh-u32-l5",
        "subject": "mandarin",
        "unit": 32,
        "lessonNumber": 5,
        "title": "儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of 儒道思想与哲学思辨 (Confucian-Daoist Philosophy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics)」（第5部分）的核心句法结构与儒道思想与哲学思辨 (Confucian-Daoist Philosophy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (32.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (32.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (32.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 儒道思想与哲学思辨 (Confucian-Daoist Philosophy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「儒道思想与哲学思辨 (Confucian-Daoist Philosophy)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (32.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (32.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (32.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「儒道哲学与现代伦理思辨 (Confucian-Daoist Ethics)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (32.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (32.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (32.5.3)。"
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
                    "prompt": "关于「儒道思想与哲学思辨 (Confucian-Daoist Philosophy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 32-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (32.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (32.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (32.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («儒家_32_5»):",
                    "acceptedAnswers": [
                        "儒家_32_5"
                    ],
                    "explanation": "The target keyword was: 【儒家_32_5】"
                }
            ]
        }
    },
    "zh-u33-l1": {
        "id": "zh-u33-l1",
        "subject": "mandarin",
        "unit": 33,
        "lessonNumber": 1,
        "title": "宏观经济调控与人民币国际化 (Macroeconomics & Currency) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of 宏观调控与经济战略 (Macroeconomics & Currency Policy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「宏观经济调控与人民币国际化 (Macroeconomics & Currency)」（第1部分）的核心句法结构与宏观调控与经济战略 (Macroeconomics & Currency Policy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (33.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (33.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (33.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 宏观调控与经济战略 (Macroeconomics & Currency Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「宏观调控与经济战略 (Macroeconomics & Currency Policy)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (33.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (33.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (33.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「宏观经济调控与人民币国际化 (Macroeconomics & Currency)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (33.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (33.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (33.1.3)。"
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
                    "prompt": "关于「宏观调控与经济战略 (Macroeconomics & Currency Policy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 33-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (33.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (33.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (33.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («宏观调控_33_1»):",
                    "acceptedAnswers": [
                        "宏观调控_33_1"
                    ],
                    "explanation": "The target keyword was: 【宏观调控_33_1】"
                }
            ]
        }
    },
    "zh-u33-l2": {
        "id": "zh-u33-l2",
        "subject": "mandarin",
        "unit": 33,
        "lessonNumber": 2,
        "title": "宏观经济调控与人民币国际化 (Macroeconomics & Currency) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of 宏观调控与经济战略 (Macroeconomics & Currency Policy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「宏观经济调控与人民币国际化 (Macroeconomics & Currency)」（第2部分）的核心句法结构与宏观调控与经济战略 (Macroeconomics & Currency Policy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (33.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (33.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (33.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 宏观调控与经济战略 (Macroeconomics & Currency Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「宏观调控与经济战略 (Macroeconomics & Currency Policy)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (33.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (33.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (33.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「宏观经济调控与人民币国际化 (Macroeconomics & Currency)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (33.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (33.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (33.2.3)。"
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
                    "prompt": "关于「宏观调控与经济战略 (Macroeconomics & Currency Policy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 33-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (33.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (33.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (33.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («宏观调控_33_2»):",
                    "acceptedAnswers": [
                        "宏观调控_33_2"
                    ],
                    "explanation": "The target keyword was: 【宏观调控_33_2】"
                }
            ]
        }
    },
    "zh-u33-l3": {
        "id": "zh-u33-l3",
        "subject": "mandarin",
        "unit": 33,
        "lessonNumber": 3,
        "title": "宏观经济调控与人民币国际化 (Macroeconomics & Currency) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of 宏观调控与经济战略 (Macroeconomics & Currency Policy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「宏观经济调控与人民币国际化 (Macroeconomics & Currency)」（第3部分）的核心句法结构与宏观调控与经济战略 (Macroeconomics & Currency Policy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (33.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (33.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (33.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 宏观调控与经济战略 (Macroeconomics & Currency Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「宏观调控与经济战略 (Macroeconomics & Currency Policy)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (33.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (33.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (33.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「宏观经济调控与人民币国际化 (Macroeconomics & Currency)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (33.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (33.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (33.3.3)。"
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
                    "prompt": "关于「宏观调控与经济战略 (Macroeconomics & Currency Policy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 33-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (33.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (33.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (33.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («宏观调控_33_3»):",
                    "acceptedAnswers": [
                        "宏观调控_33_3"
                    ],
                    "explanation": "The target keyword was: 【宏观调控_33_3】"
                }
            ]
        }
    },
    "zh-u33-l4": {
        "id": "zh-u33-l4",
        "subject": "mandarin",
        "unit": 33,
        "lessonNumber": 4,
        "title": "宏观经济调控与人民币国际化 (Macroeconomics & Currency) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of 宏观调控与经济战略 (Macroeconomics & Currency Policy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「宏观经济调控与人民币国际化 (Macroeconomics & Currency)」（第4部分）的核心句法结构与宏观调控与经济战略 (Macroeconomics & Currency Policy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (33.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (33.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (33.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 宏观调控与经济战略 (Macroeconomics & Currency Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「宏观调控与经济战略 (Macroeconomics & Currency Policy)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (33.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (33.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (33.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「宏观经济调控与人民币国际化 (Macroeconomics & Currency)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (33.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (33.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (33.4.3)。"
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
                    "prompt": "关于「宏观调控与经济战略 (Macroeconomics & Currency Policy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 33-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (33.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (33.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (33.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («宏观调控_33_4»):",
                    "acceptedAnswers": [
                        "宏观调控_33_4"
                    ],
                    "explanation": "The target keyword was: 【宏观调控_33_4】"
                }
            ]
        }
    },
    "zh-u33-l5": {
        "id": "zh-u33-l5",
        "subject": "mandarin",
        "unit": 33,
        "lessonNumber": 5,
        "title": "宏观经济调控与人民币国际化 (Macroeconomics & Currency) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of 宏观调控与经济战略 (Macroeconomics & Currency Policy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「宏观经济调控与人民币国际化 (Macroeconomics & Currency)」（第5部分）的核心句法结构与宏观调控与经济战略 (Macroeconomics & Currency Policy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (33.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (33.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (33.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 宏观调控与经济战略 (Macroeconomics & Currency Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「宏观调控与经济战略 (Macroeconomics & Currency Policy)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (33.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (33.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (33.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「宏观经济调控与人民币国际化 (Macroeconomics & Currency)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (33.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (33.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (33.5.3)。"
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
                    "prompt": "关于「宏观调控与经济战略 (Macroeconomics & Currency Policy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 33-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (33.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (33.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (33.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («宏观调控_33_5»):",
                    "acceptedAnswers": [
                        "宏观调控_33_5"
                    ],
                    "explanation": "The target keyword was: 【宏观调控_33_5】"
                }
            ]
        }
    },
    "zh-u34-l1": {
        "id": "zh-u34-l1",
        "subject": "mandarin",
        "unit": 34,
        "lessonNumber": 1,
        "title": "多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft) (Part 1)",
        "level": "C2",
        "objective": "Comprehensive mastery of 多边外交与公报发表 (C2 Capstone Global Statecraft).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft)」（第1部分）的核心句法结构与多边外交与公报发表 (C2 Capstone Global Statecraft)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (34.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (34.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (34.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 多边外交与公报发表 (C2 Capstone Global Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「多边外交与公报发表 (C2 Capstone Global Statecraft)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (34.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (34.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (34.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (34.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (34.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (34.1.3)。"
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
                    "prompt": "关于「多边外交与公报发表 (C2 Capstone Global Statecraft)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 34-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (34.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (34.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (34.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («峰会_34_1»):",
                    "acceptedAnswers": [
                        "峰会_34_1"
                    ],
                    "explanation": "The target keyword was: 【峰会_34_1】"
                }
            ]
        }
    },
    "zh-u34-l2": {
        "id": "zh-u34-l2",
        "subject": "mandarin",
        "unit": 34,
        "lessonNumber": 2,
        "title": "多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft) (Part 2)",
        "level": "C2",
        "objective": "Comprehensive mastery of 多边外交与公报发表 (C2 Capstone Global Statecraft).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft)」（第2部分）的核心句法结构与多边外交与公报发表 (C2 Capstone Global Statecraft)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (34.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (34.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (34.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 多边外交与公报发表 (C2 Capstone Global Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「多边外交与公报发表 (C2 Capstone Global Statecraft)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (34.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (34.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (34.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (34.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (34.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (34.2.3)。"
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
                    "prompt": "关于「多边外交与公报发表 (C2 Capstone Global Statecraft)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 34-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (34.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (34.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (34.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («峰会_34_2»):",
                    "acceptedAnswers": [
                        "峰会_34_2"
                    ],
                    "explanation": "The target keyword was: 【峰会_34_2】"
                }
            ]
        }
    },
    "zh-u34-l3": {
        "id": "zh-u34-l3",
        "subject": "mandarin",
        "unit": 34,
        "lessonNumber": 3,
        "title": "多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft) (Part 3)",
        "level": "C2",
        "objective": "Comprehensive mastery of 多边外交与公报发表 (C2 Capstone Global Statecraft).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft)」（第3部分）的核心句法结构与多边外交与公报发表 (C2 Capstone Global Statecraft)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (34.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (34.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (34.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 多边外交与公报发表 (C2 Capstone Global Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「多边外交与公报发表 (C2 Capstone Global Statecraft)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (34.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (34.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (34.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (34.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (34.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (34.3.3)。"
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
                    "prompt": "关于「多边外交与公报发表 (C2 Capstone Global Statecraft)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 34-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (34.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (34.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (34.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («峰会_34_3»):",
                    "acceptedAnswers": [
                        "峰会_34_3"
                    ],
                    "explanation": "The target keyword was: 【峰会_34_3】"
                }
            ]
        }
    },
    "zh-u34-l4": {
        "id": "zh-u34-l4",
        "subject": "mandarin",
        "unit": 34,
        "lessonNumber": 4,
        "title": "多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft) (Part 4)",
        "level": "C2",
        "objective": "Comprehensive mastery of 多边外交与公报发表 (C2 Capstone Global Statecraft).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft)」（第4部分）的核心句法结构与多边外交与公报发表 (C2 Capstone Global Statecraft)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (34.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (34.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (34.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 多边外交与公报发表 (C2 Capstone Global Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「多边外交与公报发表 (C2 Capstone Global Statecraft)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (34.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (34.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (34.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (34.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (34.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (34.4.3)。"
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
                    "prompt": "关于「多边外交与公报发表 (C2 Capstone Global Statecraft)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 34-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (34.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (34.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (34.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («峰会_34_4»):",
                    "acceptedAnswers": [
                        "峰会_34_4"
                    ],
                    "explanation": "The target keyword was: 【峰会_34_4】"
                }
            ]
        }
    },
    "zh-u34-l5": {
        "id": "zh-u34-l5",
        "subject": "mandarin",
        "unit": 34,
        "lessonNumber": 5,
        "title": "多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft) (Part 5)",
        "level": "C2",
        "objective": "Comprehensive mastery of 多边外交与公报发表 (C2 Capstone Global Statecraft).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft)」（第5部分）的核心句法结构与多边外交与公报发表 (C2 Capstone Global Statecraft)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (34.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (34.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (34.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 多边外交与公报发表 (C2 Capstone Global Statecraft)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「多边外交与公报发表 (C2 Capstone Global Statecraft)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (34.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (34.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (34.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「多边外交峰会与双边条约公报 (C2 Capstone Global Statecraft)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (34.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (34.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (34.5.3)。"
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
                    "prompt": "关于「多边外交与公报发表 (C2 Capstone Global Statecraft)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 34-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (34.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (34.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (34.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («峰会_34_5»):",
                    "acceptedAnswers": [
                        "峰会_34_5"
                    ],
                    "explanation": "The target keyword was: 【峰会_34_5】"
                }
            ]
        }
    }
};
  var CURRICULUM = { id: 'mandarin', name: 'Mandarin', units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['mandarin'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
