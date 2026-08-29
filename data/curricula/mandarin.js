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
        "subject": "mandarin",
        "unit": 9,
        "lessonNumber": 1,
        "title": "否定词辨析：不与没/没有 (Negation 不 vs 没) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of 否定词不与没辨析 (Negation Distinctions 不 vs 没).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「否定词辨析：不与没/没有 (Negation 不 vs 没)」（第1部分）的核心句法结构与否定词不与没辨析 (Negation Distinctions 不 vs 没)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (9.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (9.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (9.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 否定词不与没辨析 (Negation Distinctions 不 vs 没)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「否定词不与没辨析 (Negation Distinctions 不 vs 没)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (9.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (9.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (9.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「否定词辨析：不与没/没有 (Negation 不 vs 没)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (9.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (9.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (9.1.3)。"
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
                    "prompt": "关于「否定词不与没辨析 (Negation Distinctions 不 vs 没)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 9-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (9.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (9.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (9.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («不是_9_1»):",
                    "acceptedAnswers": [
                        "不是_9_1"
                    ],
                    "explanation": "The target keyword was: 【不是_9_1】"
                }
            ]
        }
    },
    "zh-u9-l2": {
        "id": "zh-u9-l2",
        "subject": "mandarin",
        "unit": 9,
        "lessonNumber": 2,
        "title": "否定词辨析：不与没/没有 (Negation 不 vs 没) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of 否定词不与没辨析 (Negation Distinctions 不 vs 没).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「否定词辨析：不与没/没有 (Negation 不 vs 没)」（第2部分）的核心句法结构与否定词不与没辨析 (Negation Distinctions 不 vs 没)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (9.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (9.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (9.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 否定词不与没辨析 (Negation Distinctions 不 vs 没)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「否定词不与没辨析 (Negation Distinctions 不 vs 没)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (9.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (9.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (9.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「否定词辨析：不与没/没有 (Negation 不 vs 没)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (9.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (9.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (9.2.3)。"
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
                    "prompt": "关于「否定词不与没辨析 (Negation Distinctions 不 vs 没)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 9-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (9.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (9.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (9.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («不是_9_2»):",
                    "acceptedAnswers": [
                        "不是_9_2"
                    ],
                    "explanation": "The target keyword was: 【不是_9_2】"
                }
            ]
        }
    },
    "zh-u9-l3": {
        "id": "zh-u9-l3",
        "subject": "mandarin",
        "unit": 9,
        "lessonNumber": 3,
        "title": "否定词辨析：不与没/没有 (Negation 不 vs 没) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of 否定词不与没辨析 (Negation Distinctions 不 vs 没).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「否定词辨析：不与没/没有 (Negation 不 vs 没)」（第3部分）的核心句法结构与否定词不与没辨析 (Negation Distinctions 不 vs 没)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (9.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (9.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (9.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 否定词不与没辨析 (Negation Distinctions 不 vs 没)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「否定词不与没辨析 (Negation Distinctions 不 vs 没)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (9.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (9.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (9.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「否定词辨析：不与没/没有 (Negation 不 vs 没)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (9.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (9.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (9.3.3)。"
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
                    "prompt": "关于「否定词不与没辨析 (Negation Distinctions 不 vs 没)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 9-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (9.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (9.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (9.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («不是_9_3»):",
                    "acceptedAnswers": [
                        "不是_9_3"
                    ],
                    "explanation": "The target keyword was: 【不是_9_3】"
                }
            ]
        }
    },
    "zh-u9-l4": {
        "id": "zh-u9-l4",
        "subject": "mandarin",
        "unit": 9,
        "lessonNumber": 4,
        "title": "否定词辨析：不与没/没有 (Negation 不 vs 没) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of 否定词不与没辨析 (Negation Distinctions 不 vs 没).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「否定词辨析：不与没/没有 (Negation 不 vs 没)」（第4部分）的核心句法结构与否定词不与没辨析 (Negation Distinctions 不 vs 没)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (9.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (9.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (9.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 否定词不与没辨析 (Negation Distinctions 不 vs 没)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「否定词不与没辨析 (Negation Distinctions 不 vs 没)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (9.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (9.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (9.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「否定词辨析：不与没/没有 (Negation 不 vs 没)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (9.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (9.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (9.4.3)。"
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
                    "prompt": "关于「否定词不与没辨析 (Negation Distinctions 不 vs 没)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 9-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (9.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (9.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (9.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («不是_9_4»):",
                    "acceptedAnswers": [
                        "不是_9_4"
                    ],
                    "explanation": "The target keyword was: 【不是_9_4】"
                }
            ]
        }
    },
    "zh-u9-l5": {
        "id": "zh-u9-l5",
        "subject": "mandarin",
        "unit": 9,
        "lessonNumber": 5,
        "title": "否定词辨析：不与没/没有 (Negation 不 vs 没) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of 否定词不与没辨析 (Negation Distinctions 不 vs 没).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「否定词辨析：不与没/没有 (Negation 不 vs 没)」（第5部分）的核心句法结构与否定词不与没辨析 (Negation Distinctions 不 vs 没)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (9.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (9.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (9.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 否定词不与没辨析 (Negation Distinctions 不 vs 没)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「否定词不与没辨析 (Negation Distinctions 不 vs 没)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (9.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (9.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (9.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「否定词辨析：不与没/没有 (Negation 不 vs 没)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (9.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (9.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (9.5.3)。"
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
                    "prompt": "关于「否定词不与没辨析 (Negation Distinctions 不 vs 没)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 9-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (9.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (9.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (9.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («不是_9_5»):",
                    "acceptedAnswers": [
                        "不是_9_5"
                    ],
                    "explanation": "The target keyword was: 【不是_9_5】"
                }
            ]
        }
    },
    "zh-u10-l1": {
        "id": "zh-u10-l1",
        "subject": "mandarin",
        "unit": 10,
        "lessonNumber": 1,
        "title": "趋向补语：上来、下去与过 (Directional Complements) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of 简单与复合趋向补语 (Directional Complements: 上来/下去).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「趋向补语：上来、下去与过 (Directional Complements)」（第1部分）的核心句法结构与简单与复合趋向补语 (Directional Complements: 上来/下去)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (10.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (10.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (10.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 简单与复合趋向补语 (Directional Complements: 上来/下去)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「简单与复合趋向补语 (Directional Complements: 上来/下去)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (10.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (10.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (10.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「趋向补语：上来、下去与过 (Directional Complements)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (10.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (10.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (10.1.3)。"
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
                    "prompt": "关于「简单与复合趋向补语 (Directional Complements: 上来/下去)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 10-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (10.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (10.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (10.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («走上来_10_1»):",
                    "acceptedAnswers": [
                        "走上来_10_1"
                    ],
                    "explanation": "The target keyword was: 【走上来_10_1】"
                }
            ]
        }
    },
    "zh-u10-l2": {
        "id": "zh-u10-l2",
        "subject": "mandarin",
        "unit": 10,
        "lessonNumber": 2,
        "title": "趋向补语：上来、下去与过 (Directional Complements) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of 简单与复合趋向补语 (Directional Complements: 上来/下去).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「趋向补语：上来、下去与过 (Directional Complements)」（第2部分）的核心句法结构与简单与复合趋向补语 (Directional Complements: 上来/下去)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (10.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (10.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (10.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 简单与复合趋向补语 (Directional Complements: 上来/下去)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「简单与复合趋向补语 (Directional Complements: 上来/下去)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (10.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (10.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (10.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「趋向补语：上来、下去与过 (Directional Complements)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (10.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (10.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (10.2.3)。"
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
                    "prompt": "关于「简单与复合趋向补语 (Directional Complements: 上来/下去)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 10-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (10.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (10.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (10.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («走上来_10_2»):",
                    "acceptedAnswers": [
                        "走上来_10_2"
                    ],
                    "explanation": "The target keyword was: 【走上来_10_2】"
                }
            ]
        }
    },
    "zh-u10-l3": {
        "id": "zh-u10-l3",
        "subject": "mandarin",
        "unit": 10,
        "lessonNumber": 3,
        "title": "趋向补语：上来、下去与过 (Directional Complements) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of 简单与复合趋向补语 (Directional Complements: 上来/下去).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「趋向补语：上来、下去与过 (Directional Complements)」（第3部分）的核心句法结构与简单与复合趋向补语 (Directional Complements: 上来/下去)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (10.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (10.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (10.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 简单与复合趋向补语 (Directional Complements: 上来/下去)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「简单与复合趋向补语 (Directional Complements: 上来/下去)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (10.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (10.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (10.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「趋向补语：上来、下去与过 (Directional Complements)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (10.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (10.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (10.3.3)。"
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
                    "prompt": "关于「简单与复合趋向补语 (Directional Complements: 上来/下去)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 10-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (10.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (10.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (10.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («走上来_10_3»):",
                    "acceptedAnswers": [
                        "走上来_10_3"
                    ],
                    "explanation": "The target keyword was: 【走上来_10_3】"
                }
            ]
        }
    },
    "zh-u10-l4": {
        "id": "zh-u10-l4",
        "subject": "mandarin",
        "unit": 10,
        "lessonNumber": 4,
        "title": "趋向补语：上来、下去与过 (Directional Complements) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of 简单与复合趋向补语 (Directional Complements: 上来/下去).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「趋向补语：上来、下去与过 (Directional Complements)」（第4部分）的核心句法结构与简单与复合趋向补语 (Directional Complements: 上来/下去)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (10.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (10.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (10.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 简单与复合趋向补语 (Directional Complements: 上来/下去)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「简单与复合趋向补语 (Directional Complements: 上来/下去)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (10.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (10.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (10.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「趋向补语：上来、下去与过 (Directional Complements)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (10.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (10.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (10.4.3)。"
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
                    "prompt": "关于「简单与复合趋向补语 (Directional Complements: 上来/下去)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 10-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (10.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (10.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (10.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («走上来_10_4»):",
                    "acceptedAnswers": [
                        "走上来_10_4"
                    ],
                    "explanation": "The target keyword was: 【走上来_10_4】"
                }
            ]
        }
    },
    "zh-u10-l5": {
        "id": "zh-u10-l5",
        "subject": "mandarin",
        "unit": 10,
        "lessonNumber": 5,
        "title": "趋向补语：上来、下去与过 (Directional Complements) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of 简单与复合趋向补语 (Directional Complements: 上来/下去).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「趋向补语：上来、下去与过 (Directional Complements)」（第5部分）的核心句法结构与简单与复合趋向补语 (Directional Complements: 上来/下去)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (10.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (10.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (10.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 简单与复合趋向补语 (Directional Complements: 上来/下去)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「简单与复合趋向补语 (Directional Complements: 上来/下去)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (10.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (10.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (10.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「趋向补语：上来、下去与过 (Directional Complements)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (10.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (10.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (10.5.3)。"
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
                    "prompt": "关于「简单与复合趋向补语 (Directional Complements: 上来/下去)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 10-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (10.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (10.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (10.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («走上来_10_5»):",
                    "acceptedAnswers": [
                        "走上来_10_5"
                    ],
                    "explanation": "The target keyword was: 【走上来_10_5】"
                }
            ]
        }
    },
    "zh-u11-l1": {
        "id": "zh-u11-l1",
        "subject": "mandarin",
        "unit": 11,
        "lessonNumber": 1,
        "title": "结果补语：看见、做完与找到 (Resultative Complements) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of 结果补语系统 (Resultative Complements: 看见/做完).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「结果补语：看见、做完与找到 (Resultative Complements)」（第1部分）的核心句法结构与结果补语系统 (Resultative Complements: 看见/做完)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (11.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (11.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (11.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 结果补语系统 (Resultative Complements: 看见/做完)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「结果补语系统 (Resultative Complements: 看见/做完)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (11.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (11.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (11.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「结果补语：看见、做完与找到 (Resultative Complements)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (11.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (11.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (11.1.3)。"
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
                    "prompt": "关于「结果补语系统 (Resultative Complements: 看见/做完)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 11-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (11.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (11.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (11.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («看见_11_1»):",
                    "acceptedAnswers": [
                        "看见_11_1"
                    ],
                    "explanation": "The target keyword was: 【看见_11_1】"
                }
            ]
        }
    },
    "zh-u11-l2": {
        "id": "zh-u11-l2",
        "subject": "mandarin",
        "unit": 11,
        "lessonNumber": 2,
        "title": "结果补语：看见、做完与找到 (Resultative Complements) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of 结果补语系统 (Resultative Complements: 看见/做完).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「结果补语：看见、做完与找到 (Resultative Complements)」（第2部分）的核心句法结构与结果补语系统 (Resultative Complements: 看见/做完)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (11.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (11.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (11.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 结果补语系统 (Resultative Complements: 看见/做完)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「结果补语系统 (Resultative Complements: 看见/做完)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (11.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (11.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (11.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「结果补语：看见、做完与找到 (Resultative Complements)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (11.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (11.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (11.2.3)。"
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
                    "prompt": "关于「结果补语系统 (Resultative Complements: 看见/做完)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 11-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (11.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (11.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (11.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («看见_11_2»):",
                    "acceptedAnswers": [
                        "看见_11_2"
                    ],
                    "explanation": "The target keyword was: 【看见_11_2】"
                }
            ]
        }
    },
    "zh-u11-l3": {
        "id": "zh-u11-l3",
        "subject": "mandarin",
        "unit": 11,
        "lessonNumber": 3,
        "title": "结果补语：看见、做完与找到 (Resultative Complements) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of 结果补语系统 (Resultative Complements: 看见/做完).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「结果补语：看见、做完与找到 (Resultative Complements)」（第3部分）的核心句法结构与结果补语系统 (Resultative Complements: 看见/做完)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (11.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (11.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (11.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 结果补语系统 (Resultative Complements: 看见/做完)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「结果补语系统 (Resultative Complements: 看见/做完)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (11.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (11.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (11.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「结果补语：看见、做完与找到 (Resultative Complements)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (11.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (11.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (11.3.3)。"
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
                    "prompt": "关于「结果补语系统 (Resultative Complements: 看见/做完)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 11-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (11.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (11.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (11.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («看见_11_3»):",
                    "acceptedAnswers": [
                        "看见_11_3"
                    ],
                    "explanation": "The target keyword was: 【看见_11_3】"
                }
            ]
        }
    },
    "zh-u11-l4": {
        "id": "zh-u11-l4",
        "subject": "mandarin",
        "unit": 11,
        "lessonNumber": 4,
        "title": "结果补语：看见、做完与找到 (Resultative Complements) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of 结果补语系统 (Resultative Complements: 看见/做完).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「结果补语：看见、做完与找到 (Resultative Complements)」（第4部分）的核心句法结构与结果补语系统 (Resultative Complements: 看见/做完)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (11.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (11.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (11.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 结果补语系统 (Resultative Complements: 看见/做完)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「结果补语系统 (Resultative Complements: 看见/做完)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (11.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (11.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (11.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「结果补语：看见、做完与找到 (Resultative Complements)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (11.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (11.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (11.4.3)。"
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
                    "prompt": "关于「结果补语系统 (Resultative Complements: 看见/做完)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 11-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (11.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (11.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (11.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («看见_11_4»):",
                    "acceptedAnswers": [
                        "看见_11_4"
                    ],
                    "explanation": "The target keyword was: 【看见_11_4】"
                }
            ]
        }
    },
    "zh-u11-l5": {
        "id": "zh-u11-l5",
        "subject": "mandarin",
        "unit": 11,
        "lessonNumber": 5,
        "title": "结果补语：看见、做完与找到 (Resultative Complements) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of 结果补语系统 (Resultative Complements: 看见/做完).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「结果补语：看见、做完与找到 (Resultative Complements)」（第5部分）的核心句法结构与结果补语系统 (Resultative Complements: 看见/做完)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (11.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (11.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (11.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 结果补语系统 (Resultative Complements: 看见/做完)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「结果补语系统 (Resultative Complements: 看见/做完)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (11.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (11.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (11.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「结果补语：看见、做完与找到 (Resultative Complements)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (11.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (11.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (11.5.3)。"
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
                    "prompt": "关于「结果补语系统 (Resultative Complements: 看见/做完)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 11-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (11.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (11.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (11.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («看见_11_5»):",
                    "acceptedAnswers": [
                        "看见_11_5"
                    ],
                    "explanation": "The target keyword was: 【看见_11_5】"
                }
            ]
        }
    },
    "zh-u12-l1": {
        "id": "zh-u12-l1",
        "subject": "mandarin",
        "unit": 12,
        "lessonNumber": 1,
        "title": "可能补语：看得懂与做不完 (Potential Complements) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of 可能补语得与不 (Potential Complements: 得/不).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「可能补语：看得懂与做不完 (Potential Complements)」（第1部分）的核心句法结构与可能补语得与不 (Potential Complements: 得/不)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (12.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (12.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (12.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 可能补语得与不 (Potential Complements: 得/不)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「可能补语得与不 (Potential Complements: 得/不)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (12.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (12.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (12.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「可能补语：看得懂与做不完 (Potential Complements)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (12.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (12.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (12.1.3)。"
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
                    "prompt": "关于「可能补语得与不 (Potential Complements: 得/不)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 12-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (12.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (12.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (12.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («看得懂_12_1»):",
                    "acceptedAnswers": [
                        "看得懂_12_1"
                    ],
                    "explanation": "The target keyword was: 【看得懂_12_1】"
                }
            ]
        }
    },
    "zh-u12-l2": {
        "id": "zh-u12-l2",
        "subject": "mandarin",
        "unit": 12,
        "lessonNumber": 2,
        "title": "可能补语：看得懂与做不完 (Potential Complements) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of 可能补语得与不 (Potential Complements: 得/不).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「可能补语：看得懂与做不完 (Potential Complements)」（第2部分）的核心句法结构与可能补语得与不 (Potential Complements: 得/不)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (12.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (12.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (12.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 可能补语得与不 (Potential Complements: 得/不)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「可能补语得与不 (Potential Complements: 得/不)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (12.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (12.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (12.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「可能补语：看得懂与做不完 (Potential Complements)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (12.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (12.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (12.2.3)。"
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
                    "prompt": "关于「可能补语得与不 (Potential Complements: 得/不)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 12-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (12.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (12.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (12.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («看得懂_12_2»):",
                    "acceptedAnswers": [
                        "看得懂_12_2"
                    ],
                    "explanation": "The target keyword was: 【看得懂_12_2】"
                }
            ]
        }
    },
    "zh-u12-l3": {
        "id": "zh-u12-l3",
        "subject": "mandarin",
        "unit": 12,
        "lessonNumber": 3,
        "title": "可能补语：看得懂与做不完 (Potential Complements) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of 可能补语得与不 (Potential Complements: 得/不).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「可能补语：看得懂与做不完 (Potential Complements)」（第3部分）的核心句法结构与可能补语得与不 (Potential Complements: 得/不)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (12.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (12.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (12.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 可能补语得与不 (Potential Complements: 得/不)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「可能补语得与不 (Potential Complements: 得/不)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (12.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (12.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (12.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「可能补语：看得懂与做不完 (Potential Complements)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (12.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (12.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (12.3.3)。"
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
                    "prompt": "关于「可能补语得与不 (Potential Complements: 得/不)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 12-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (12.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (12.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (12.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («看得懂_12_3»):",
                    "acceptedAnswers": [
                        "看得懂_12_3"
                    ],
                    "explanation": "The target keyword was: 【看得懂_12_3】"
                }
            ]
        }
    },
    "zh-u12-l4": {
        "id": "zh-u12-l4",
        "subject": "mandarin",
        "unit": 12,
        "lessonNumber": 4,
        "title": "可能补语：看得懂与做不完 (Potential Complements) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of 可能补语得与不 (Potential Complements: 得/不).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「可能补语：看得懂与做不完 (Potential Complements)」（第4部分）的核心句法结构与可能补语得与不 (Potential Complements: 得/不)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (12.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (12.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (12.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 可能补语得与不 (Potential Complements: 得/不)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「可能补语得与不 (Potential Complements: 得/不)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (12.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (12.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (12.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「可能补语：看得懂与做不完 (Potential Complements)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (12.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (12.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (12.4.3)。"
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
                    "prompt": "关于「可能补语得与不 (Potential Complements: 得/不)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 12-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (12.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (12.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (12.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («看得懂_12_4»):",
                    "acceptedAnswers": [
                        "看得懂_12_4"
                    ],
                    "explanation": "The target keyword was: 【看得懂_12_4】"
                }
            ]
        }
    },
    "zh-u12-l5": {
        "id": "zh-u12-l5",
        "subject": "mandarin",
        "unit": 12,
        "lessonNumber": 5,
        "title": "可能补语：看得懂与做不完 (Potential Complements) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of 可能补语得与不 (Potential Complements: 得/不).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「可能补语：看得懂与做不完 (Potential Complements)」（第5部分）的核心句法结构与可能补语得与不 (Potential Complements: 得/不)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (12.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (12.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (12.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 可能补语得与不 (Potential Complements: 得/不)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「可能补语得与不 (Potential Complements: 得/不)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (12.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (12.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (12.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「可能补语：看得懂与做不完 (Potential Complements)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (12.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (12.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (12.5.3)。"
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
                    "prompt": "关于「可能补语得与不 (Potential Complements: 得/不)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 12-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (12.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (12.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (12.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («看得懂_12_5»):",
                    "acceptedAnswers": [
                        "看得懂_12_5"
                    ],
                    "explanation": "The target keyword was: 【看得懂_12_5】"
                }
            ]
        }
    },
    "zh-u13-l1": {
        "id": "zh-u13-l1",
        "subject": "mandarin",
        "unit": 13,
        "lessonNumber": 1,
        "title": "把字句的结构限制与对象处置 (The 把 Construction) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of 把字句处置结构 (The 把 Disposal Construction).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「把字句的结构限制与对象处置 (The 把 Construction)」（第1部分）的核心句法结构与把字句处置结构 (The 把 Disposal Construction)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (13.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (13.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (13.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 把字句处置结构 (The 把 Disposal Construction)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「把字句处置结构 (The 把 Disposal Construction)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (13.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (13.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (13.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「把字句的结构限制与对象处置 (The 把 Construction)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (13.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (13.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (13.1.3)。"
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
                    "prompt": "关于「把字句处置结构 (The 把 Disposal Construction)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 13-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (13.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (13.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (13.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («把书_13_1»):",
                    "acceptedAnswers": [
                        "把书_13_1"
                    ],
                    "explanation": "The target keyword was: 【把书_13_1】"
                }
            ]
        }
    },
    "zh-u13-l2": {
        "id": "zh-u13-l2",
        "subject": "mandarin",
        "unit": 13,
        "lessonNumber": 2,
        "title": "把字句的结构限制与对象处置 (The 把 Construction) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of 把字句处置结构 (The 把 Disposal Construction).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「把字句的结构限制与对象处置 (The 把 Construction)」（第2部分）的核心句法结构与把字句处置结构 (The 把 Disposal Construction)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (13.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (13.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (13.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 把字句处置结构 (The 把 Disposal Construction)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「把字句处置结构 (The 把 Disposal Construction)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (13.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (13.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (13.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「把字句的结构限制与对象处置 (The 把 Construction)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (13.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (13.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (13.2.3)。"
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
                    "prompt": "关于「把字句处置结构 (The 把 Disposal Construction)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 13-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (13.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (13.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (13.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («把书_13_2»):",
                    "acceptedAnswers": [
                        "把书_13_2"
                    ],
                    "explanation": "The target keyword was: 【把书_13_2】"
                }
            ]
        }
    },
    "zh-u13-l3": {
        "id": "zh-u13-l3",
        "subject": "mandarin",
        "unit": 13,
        "lessonNumber": 3,
        "title": "把字句的结构限制与对象处置 (The 把 Construction) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of 把字句处置结构 (The 把 Disposal Construction).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「把字句的结构限制与对象处置 (The 把 Construction)」（第3部分）的核心句法结构与把字句处置结构 (The 把 Disposal Construction)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (13.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (13.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (13.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 把字句处置结构 (The 把 Disposal Construction)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「把字句处置结构 (The 把 Disposal Construction)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (13.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (13.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (13.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「把字句的结构限制与对象处置 (The 把 Construction)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (13.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (13.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (13.3.3)。"
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
                    "prompt": "关于「把字句处置结构 (The 把 Disposal Construction)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 13-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (13.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (13.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (13.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («把书_13_3»):",
                    "acceptedAnswers": [
                        "把书_13_3"
                    ],
                    "explanation": "The target keyword was: 【把书_13_3】"
                }
            ]
        }
    },
    "zh-u13-l4": {
        "id": "zh-u13-l4",
        "subject": "mandarin",
        "unit": 13,
        "lessonNumber": 4,
        "title": "把字句的结构限制与对象处置 (The 把 Construction) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of 把字句处置结构 (The 把 Disposal Construction).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「把字句的结构限制与对象处置 (The 把 Construction)」（第4部分）的核心句法结构与把字句处置结构 (The 把 Disposal Construction)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (13.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (13.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (13.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 把字句处置结构 (The 把 Disposal Construction)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「把字句处置结构 (The 把 Disposal Construction)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (13.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (13.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (13.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「把字句的结构限制与对象处置 (The 把 Construction)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (13.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (13.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (13.4.3)。"
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
                    "prompt": "关于「把字句处置结构 (The 把 Disposal Construction)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 13-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (13.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (13.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (13.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («把书_13_4»):",
                    "acceptedAnswers": [
                        "把书_13_4"
                    ],
                    "explanation": "The target keyword was: 【把书_13_4】"
                }
            ]
        }
    },
    "zh-u13-l5": {
        "id": "zh-u13-l5",
        "subject": "mandarin",
        "unit": 13,
        "lessonNumber": 5,
        "title": "把字句的结构限制与对象处置 (The 把 Construction) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of 把字句处置结构 (The 把 Disposal Construction).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「把字句的结构限制与对象处置 (The 把 Construction)」（第5部分）的核心句法结构与把字句处置结构 (The 把 Disposal Construction)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (13.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (13.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (13.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 把字句处置结构 (The 把 Disposal Construction)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「把字句处置结构 (The 把 Disposal Construction)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (13.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (13.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (13.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「把字句的结构限制与对象处置 (The 把 Construction)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (13.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (13.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (13.5.3)。"
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
                    "prompt": "关于「把字句处置结构 (The 把 Disposal Construction)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 13-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (13.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (13.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (13.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («把书_13_5»):",
                    "acceptedAnswers": [
                        "把书_13_5"
                    ],
                    "explanation": "The target keyword was: 【把书_13_5】"
                }
            ]
        }
    },
    "zh-u14-l1": {
        "id": "zh-u14-l1",
        "subject": "mandarin",
        "unit": 14,
        "lessonNumber": 1,
        "title": "被字句与被动表述 (The 被 Passive Voice) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of 被字句与被动表述 (Passive Voice with 被).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「被字句与被动表述 (The 被 Passive Voice)」（第1部分）的核心句法结构与被字句与被动表述 (Passive Voice with 被)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (14.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (14.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (14.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 被字句与被动表述 (Passive Voice with 被)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「被字句与被动表述 (Passive Voice with 被)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (14.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (14.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (14.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「被字句与被动表述 (The 被 Passive Voice)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (14.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (14.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (14.1.3)。"
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
                    "prompt": "关于「被字句与被动表述 (Passive Voice with 被)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 14-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (14.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (14.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (14.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («被发现_14_1»):",
                    "acceptedAnswers": [
                        "被发现_14_1"
                    ],
                    "explanation": "The target keyword was: 【被发现_14_1】"
                }
            ]
        }
    },
    "zh-u14-l2": {
        "id": "zh-u14-l2",
        "subject": "mandarin",
        "unit": 14,
        "lessonNumber": 2,
        "title": "被字句与被动表述 (The 被 Passive Voice) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of 被字句与被动表述 (Passive Voice with 被).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「被字句与被动表述 (The 被 Passive Voice)」（第2部分）的核心句法结构与被字句与被动表述 (Passive Voice with 被)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (14.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (14.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (14.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 被字句与被动表述 (Passive Voice with 被)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「被字句与被动表述 (Passive Voice with 被)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (14.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (14.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (14.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「被字句与被动表述 (The 被 Passive Voice)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (14.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (14.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (14.2.3)。"
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
                    "prompt": "关于「被字句与被动表述 (Passive Voice with 被)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 14-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (14.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (14.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (14.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («被发现_14_2»):",
                    "acceptedAnswers": [
                        "被发现_14_2"
                    ],
                    "explanation": "The target keyword was: 【被发现_14_2】"
                }
            ]
        }
    },
    "zh-u14-l3": {
        "id": "zh-u14-l3",
        "subject": "mandarin",
        "unit": 14,
        "lessonNumber": 3,
        "title": "被字句与被动表述 (The 被 Passive Voice) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of 被字句与被动表述 (Passive Voice with 被).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「被字句与被动表述 (The 被 Passive Voice)」（第3部分）的核心句法结构与被字句与被动表述 (Passive Voice with 被)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (14.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (14.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (14.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 被字句与被动表述 (Passive Voice with 被)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「被字句与被动表述 (Passive Voice with 被)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (14.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (14.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (14.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「被字句与被动表述 (The 被 Passive Voice)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (14.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (14.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (14.3.3)。"
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
                    "prompt": "关于「被字句与被动表述 (Passive Voice with 被)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 14-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (14.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (14.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (14.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («被发现_14_3»):",
                    "acceptedAnswers": [
                        "被发现_14_3"
                    ],
                    "explanation": "The target keyword was: 【被发现_14_3】"
                }
            ]
        }
    },
    "zh-u14-l4": {
        "id": "zh-u14-l4",
        "subject": "mandarin",
        "unit": 14,
        "lessonNumber": 4,
        "title": "被字句与被动表述 (The 被 Passive Voice) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of 被字句与被动表述 (Passive Voice with 被).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「被字句与被动表述 (The 被 Passive Voice)」（第4部分）的核心句法结构与被字句与被动表述 (Passive Voice with 被)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (14.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (14.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (14.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 被字句与被动表述 (Passive Voice with 被)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「被字句与被动表述 (Passive Voice with 被)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (14.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (14.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (14.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「被字句与被动表述 (The 被 Passive Voice)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (14.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (14.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (14.4.3)。"
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
                    "prompt": "关于「被字句与被动表述 (Passive Voice with 被)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 14-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (14.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (14.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (14.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («被发现_14_4»):",
                    "acceptedAnswers": [
                        "被发现_14_4"
                    ],
                    "explanation": "The target keyword was: 【被发现_14_4】"
                }
            ]
        }
    },
    "zh-u14-l5": {
        "id": "zh-u14-l5",
        "subject": "mandarin",
        "unit": 14,
        "lessonNumber": 5,
        "title": "被字句与被动表述 (The 被 Passive Voice) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of 被字句与被动表述 (Passive Voice with 被).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「被字句与被动表述 (The 被 Passive Voice)」（第5部分）的核心句法结构与被字句与被动表述 (Passive Voice with 被)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (14.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (14.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (14.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 被字句与被动表述 (Passive Voice with 被)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「被字句与被动表述 (Passive Voice with 被)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (14.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (14.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (14.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「被字句与被动表述 (The 被 Passive Voice)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (14.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (14.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (14.5.3)。"
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
                    "prompt": "关于「被字句与被动表述 (Passive Voice with 被)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 14-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (14.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (14.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (14.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («被发现_14_5»):",
                    "acceptedAnswers": [
                        "被发现_14_5"
                    ],
                    "explanation": "The target keyword was: 【被发现_14_5】"
                }
            ]
        }
    },
    "zh-u15-l1": {
        "id": "zh-u15-l1",
        "subject": "mandarin",
        "unit": 15,
        "lessonNumber": 1,
        "title": "比较句：比、没有与不如 (Comparatives) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of 比较句式比与不如 (Comparatives: 比/没有/不如).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「比较句：比、没有与不如 (Comparatives)」（第1部分）的核心句法结构与比较句式比与不如 (Comparatives: 比/没有/不如)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (15.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (15.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (15.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 比较句式比与不如 (Comparatives: 比/没有/不如)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「比较句式比与不如 (Comparatives: 比/没有/不如)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (15.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (15.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (15.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「比较句：比、没有与不如 (Comparatives)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (15.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (15.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (15.1.3)。"
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
                    "prompt": "关于「比较句式比与不如 (Comparatives: 比/没有/不如)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 15-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (15.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (15.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (15.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («比我大_15_1»):",
                    "acceptedAnswers": [
                        "比我大_15_1"
                    ],
                    "explanation": "The target keyword was: 【比我大_15_1】"
                }
            ]
        }
    },
    "zh-u15-l2": {
        "id": "zh-u15-l2",
        "subject": "mandarin",
        "unit": 15,
        "lessonNumber": 2,
        "title": "比较句：比、没有与不如 (Comparatives) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of 比较句式比与不如 (Comparatives: 比/没有/不如).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「比较句：比、没有与不如 (Comparatives)」（第2部分）的核心句法结构与比较句式比与不如 (Comparatives: 比/没有/不如)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (15.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (15.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (15.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 比较句式比与不如 (Comparatives: 比/没有/不如)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「比较句式比与不如 (Comparatives: 比/没有/不如)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (15.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (15.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (15.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「比较句：比、没有与不如 (Comparatives)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (15.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (15.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (15.2.3)。"
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
                    "prompt": "关于「比较句式比与不如 (Comparatives: 比/没有/不如)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 15-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (15.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (15.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (15.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («比我大_15_2»):",
                    "acceptedAnswers": [
                        "比我大_15_2"
                    ],
                    "explanation": "The target keyword was: 【比我大_15_2】"
                }
            ]
        }
    },
    "zh-u15-l3": {
        "id": "zh-u15-l3",
        "subject": "mandarin",
        "unit": 15,
        "lessonNumber": 3,
        "title": "比较句：比、没有与不如 (Comparatives) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of 比较句式比与不如 (Comparatives: 比/没有/不如).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「比较句：比、没有与不如 (Comparatives)」（第3部分）的核心句法结构与比较句式比与不如 (Comparatives: 比/没有/不如)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (15.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (15.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (15.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 比较句式比与不如 (Comparatives: 比/没有/不如)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「比较句式比与不如 (Comparatives: 比/没有/不如)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (15.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (15.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (15.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「比较句：比、没有与不如 (Comparatives)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (15.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (15.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (15.3.3)。"
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
                    "prompt": "关于「比较句式比与不如 (Comparatives: 比/没有/不如)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 15-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (15.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (15.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (15.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («比我大_15_3»):",
                    "acceptedAnswers": [
                        "比我大_15_3"
                    ],
                    "explanation": "The target keyword was: 【比我大_15_3】"
                }
            ]
        }
    },
    "zh-u15-l4": {
        "id": "zh-u15-l4",
        "subject": "mandarin",
        "unit": 15,
        "lessonNumber": 4,
        "title": "比较句：比、没有与不如 (Comparatives) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of 比较句式比与不如 (Comparatives: 比/没有/不如).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「比较句：比、没有与不如 (Comparatives)」（第4部分）的核心句法结构与比较句式比与不如 (Comparatives: 比/没有/不如)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (15.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (15.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (15.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 比较句式比与不如 (Comparatives: 比/没有/不如)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「比较句式比与不如 (Comparatives: 比/没有/不如)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (15.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (15.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (15.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「比较句：比、没有与不如 (Comparatives)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (15.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (15.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (15.4.3)。"
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
                    "prompt": "关于「比较句式比与不如 (Comparatives: 比/没有/不如)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 15-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (15.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (15.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (15.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («比我大_15_4»):",
                    "acceptedAnswers": [
                        "比我大_15_4"
                    ],
                    "explanation": "The target keyword was: 【比我大_15_4】"
                }
            ]
        }
    },
    "zh-u15-l5": {
        "id": "zh-u15-l5",
        "subject": "mandarin",
        "unit": 15,
        "lessonNumber": 5,
        "title": "比较句：比、没有与不如 (Comparatives) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of 比较句式比与不如 (Comparatives: 比/没有/不如).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「比较句：比、没有与不如 (Comparatives)」（第5部分）的核心句法结构与比较句式比与不如 (Comparatives: 比/没有/不如)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (15.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (15.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (15.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 比较句式比与不如 (Comparatives: 比/没有/不如)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「比较句式比与不如 (Comparatives: 比/没有/不如)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (15.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (15.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (15.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「比较句：比、没有与不如 (Comparatives)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (15.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (15.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (15.5.3)。"
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
                    "prompt": "关于「比较句式比与不如 (Comparatives: 比/没有/不如)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 15-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (15.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (15.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (15.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («比我大_15_5»):",
                    "acceptedAnswers": [
                        "比我大_15_5"
                    ],
                    "explanation": "The target keyword was: 【比我大_15_5】"
                }
            ]
        }
    },
    "zh-u16-l1": {
        "id": "zh-u16-l1",
        "subject": "mandarin",
        "unit": 16,
        "lessonNumber": 1,
        "title": "存现句与空间方位表述 (Existential Sentences) (Part 1)",
        "level": "B1",
        "objective": "Comprehensive mastery of 空间方位与存现句 (Existential Locative Sentences).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「存现句与空间方位表述 (Existential Sentences)」（第1部分）的核心句法结构与空间方位与存现句 (Existential Locative Sentences)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (16.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (16.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (16.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 空间方位与存现句 (Existential Locative Sentences)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「空间方位与存现句 (Existential Locative Sentences)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (16.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (16.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (16.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「存现句与空间方位表述 (Existential Sentences)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (16.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (16.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (16.1.3)。"
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
                    "prompt": "关于「空间方位与存现句 (Existential Locative Sentences)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 16-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (16.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (16.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (16.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («桌上有_16_1»):",
                    "acceptedAnswers": [
                        "桌上有_16_1"
                    ],
                    "explanation": "The target keyword was: 【桌上有_16_1】"
                }
            ]
        }
    },
    "zh-u16-l2": {
        "id": "zh-u16-l2",
        "subject": "mandarin",
        "unit": 16,
        "lessonNumber": 2,
        "title": "存现句与空间方位表述 (Existential Sentences) (Part 2)",
        "level": "B1",
        "objective": "Comprehensive mastery of 空间方位与存现句 (Existential Locative Sentences).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「存现句与空间方位表述 (Existential Sentences)」（第2部分）的核心句法结构与空间方位与存现句 (Existential Locative Sentences)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (16.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (16.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (16.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 空间方位与存现句 (Existential Locative Sentences)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「空间方位与存现句 (Existential Locative Sentences)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (16.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (16.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (16.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「存现句与空间方位表述 (Existential Sentences)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (16.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (16.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (16.2.3)。"
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
                    "prompt": "关于「空间方位与存现句 (Existential Locative Sentences)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 16-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (16.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (16.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (16.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («桌上有_16_2»):",
                    "acceptedAnswers": [
                        "桌上有_16_2"
                    ],
                    "explanation": "The target keyword was: 【桌上有_16_2】"
                }
            ]
        }
    },
    "zh-u16-l3": {
        "id": "zh-u16-l3",
        "subject": "mandarin",
        "unit": 16,
        "lessonNumber": 3,
        "title": "存现句与空间方位表述 (Existential Sentences) (Part 3)",
        "level": "B1",
        "objective": "Comprehensive mastery of 空间方位与存现句 (Existential Locative Sentences).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「存现句与空间方位表述 (Existential Sentences)」（第3部分）的核心句法结构与空间方位与存现句 (Existential Locative Sentences)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (16.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (16.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (16.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 空间方位与存现句 (Existential Locative Sentences)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「空间方位与存现句 (Existential Locative Sentences)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (16.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (16.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (16.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「存现句与空间方位表述 (Existential Sentences)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (16.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (16.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (16.3.3)。"
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
                    "prompt": "关于「空间方位与存现句 (Existential Locative Sentences)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 16-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (16.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (16.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (16.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («桌上有_16_3»):",
                    "acceptedAnswers": [
                        "桌上有_16_3"
                    ],
                    "explanation": "The target keyword was: 【桌上有_16_3】"
                }
            ]
        }
    },
    "zh-u16-l4": {
        "id": "zh-u16-l4",
        "subject": "mandarin",
        "unit": 16,
        "lessonNumber": 4,
        "title": "存现句与空间方位表述 (Existential Sentences) (Part 4)",
        "level": "B1",
        "objective": "Comprehensive mastery of 空间方位与存现句 (Existential Locative Sentences).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「存现句与空间方位表述 (Existential Sentences)」（第4部分）的核心句法结构与空间方位与存现句 (Existential Locative Sentences)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (16.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (16.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (16.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 空间方位与存现句 (Existential Locative Sentences)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「空间方位与存现句 (Existential Locative Sentences)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (16.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (16.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (16.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「存现句与空间方位表述 (Existential Sentences)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (16.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (16.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (16.4.3)。"
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
                    "prompt": "关于「空间方位与存现句 (Existential Locative Sentences)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 16-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (16.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (16.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (16.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («桌上有_16_4»):",
                    "acceptedAnswers": [
                        "桌上有_16_4"
                    ],
                    "explanation": "The target keyword was: 【桌上有_16_4】"
                }
            ]
        }
    },
    "zh-u16-l5": {
        "id": "zh-u16-l5",
        "subject": "mandarin",
        "unit": 16,
        "lessonNumber": 5,
        "title": "存现句与空间方位表述 (Existential Sentences) (Part 5)",
        "level": "B1",
        "objective": "Comprehensive mastery of 空间方位与存现句 (Existential Locative Sentences).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「存现句与空间方位表述 (Existential Sentences)」（第5部分）的核心句法结构与空间方位与存现句 (Existential Locative Sentences)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (16.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (16.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (16.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 空间方位与存现句 (Existential Locative Sentences)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「空间方位与存现句 (Existential Locative Sentences)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (16.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (16.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (16.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「存现句与空间方位表述 (Existential Sentences)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (16.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (16.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (16.5.3)。"
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
                    "prompt": "关于「空间方位与存现句 (Existential Locative Sentences)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 16-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (16.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (16.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (16.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («桌上有_16_5»):",
                    "acceptedAnswers": [
                        "桌上有_16_5"
                    ],
                    "explanation": "The target keyword was: 【桌上有_16_5】"
                }
            ]
        }
    },
    "zh-u17-l1": {
        "id": "zh-u17-l1",
        "subject": "mandarin",
        "unit": 17,
        "lessonNumber": 1,
        "title": "条件复句：只要...就与只有...才 (Complex Conditionals) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 条件复句关联词 (Conditionals: 只要...就 / 只有...才).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「条件复句：只要...就与只有...才 (Complex Conditionals)」（第1部分）的核心句法结构与条件复句关联词 (Conditionals: 只要...就 / 只有...才)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (17.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (17.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (17.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 条件复句关联词 (Conditionals: 只要...就 / 只有...才)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「条件复句关联词 (Conditionals: 只要...就 / 只有...才)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (17.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (17.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (17.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「条件复句：只要...就与只有...才 (Complex Conditionals)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (17.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (17.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (17.1.3)。"
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
                    "prompt": "关于「条件复句关联词 (Conditionals: 只要...就 / 只有...才)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 17-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (17.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (17.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (17.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («只要就_17_1»):",
                    "acceptedAnswers": [
                        "只要就_17_1"
                    ],
                    "explanation": "The target keyword was: 【只要就_17_1】"
                }
            ]
        }
    },
    "zh-u17-l2": {
        "id": "zh-u17-l2",
        "subject": "mandarin",
        "unit": 17,
        "lessonNumber": 2,
        "title": "条件复句：只要...就与只有...才 (Complex Conditionals) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 条件复句关联词 (Conditionals: 只要...就 / 只有...才).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「条件复句：只要...就与只有...才 (Complex Conditionals)」（第2部分）的核心句法结构与条件复句关联词 (Conditionals: 只要...就 / 只有...才)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (17.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (17.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (17.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 条件复句关联词 (Conditionals: 只要...就 / 只有...才)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「条件复句关联词 (Conditionals: 只要...就 / 只有...才)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (17.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (17.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (17.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「条件复句：只要...就与只有...才 (Complex Conditionals)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (17.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (17.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (17.2.3)。"
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
                    "prompt": "关于「条件复句关联词 (Conditionals: 只要...就 / 只有...才)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 17-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (17.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (17.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (17.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («只要就_17_2»):",
                    "acceptedAnswers": [
                        "只要就_17_2"
                    ],
                    "explanation": "The target keyword was: 【只要就_17_2】"
                }
            ]
        }
    },
    "zh-u17-l3": {
        "id": "zh-u17-l3",
        "subject": "mandarin",
        "unit": 17,
        "lessonNumber": 3,
        "title": "条件复句：只要...就与只有...才 (Complex Conditionals) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 条件复句关联词 (Conditionals: 只要...就 / 只有...才).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「条件复句：只要...就与只有...才 (Complex Conditionals)」（第3部分）的核心句法结构与条件复句关联词 (Conditionals: 只要...就 / 只有...才)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (17.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (17.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (17.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 条件复句关联词 (Conditionals: 只要...就 / 只有...才)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「条件复句关联词 (Conditionals: 只要...就 / 只有...才)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (17.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (17.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (17.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「条件复句：只要...就与只有...才 (Complex Conditionals)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (17.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (17.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (17.3.3)。"
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
                    "prompt": "关于「条件复句关联词 (Conditionals: 只要...就 / 只有...才)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 17-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (17.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (17.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (17.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («只要就_17_3»):",
                    "acceptedAnswers": [
                        "只要就_17_3"
                    ],
                    "explanation": "The target keyword was: 【只要就_17_3】"
                }
            ]
        }
    },
    "zh-u17-l4": {
        "id": "zh-u17-l4",
        "subject": "mandarin",
        "unit": 17,
        "lessonNumber": 4,
        "title": "条件复句：只要...就与只有...才 (Complex Conditionals) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 条件复句关联词 (Conditionals: 只要...就 / 只有...才).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「条件复句：只要...就与只有...才 (Complex Conditionals)」（第4部分）的核心句法结构与条件复句关联词 (Conditionals: 只要...就 / 只有...才)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (17.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (17.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (17.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 条件复句关联词 (Conditionals: 只要...就 / 只有...才)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「条件复句关联词 (Conditionals: 只要...就 / 只有...才)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (17.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (17.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (17.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「条件复句：只要...就与只有...才 (Complex Conditionals)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (17.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (17.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (17.4.3)。"
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
                    "prompt": "关于「条件复句关联词 (Conditionals: 只要...就 / 只有...才)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 17-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (17.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (17.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (17.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («只要就_17_4»):",
                    "acceptedAnswers": [
                        "只要就_17_4"
                    ],
                    "explanation": "The target keyword was: 【只要就_17_4】"
                }
            ]
        }
    },
    "zh-u17-l5": {
        "id": "zh-u17-l5",
        "subject": "mandarin",
        "unit": 17,
        "lessonNumber": 5,
        "title": "条件复句：只要...就与只有...才 (Complex Conditionals) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 条件复句关联词 (Conditionals: 只要...就 / 只有...才).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「条件复句：只要...就与只有...才 (Complex Conditionals)」（第5部分）的核心句法结构与条件复句关联词 (Conditionals: 只要...就 / 只有...才)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (17.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (17.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (17.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 条件复句关联词 (Conditionals: 只要...就 / 只有...才)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「条件复句关联词 (Conditionals: 只要...就 / 只有...才)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (17.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (17.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (17.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「条件复句：只要...就与只有...才 (Complex Conditionals)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (17.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (17.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (17.5.3)。"
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
                    "prompt": "关于「条件复句关联词 (Conditionals: 只要...就 / 只有...才)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 17-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (17.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (17.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (17.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («只要就_17_5»):",
                    "acceptedAnswers": [
                        "只要就_17_5"
                    ],
                    "explanation": "The target keyword was: 【只要就_17_5】"
                }
            ]
        }
    },
    "zh-u18-l1": {
        "id": "zh-u18-l1",
        "subject": "mandarin",
        "unit": 18,
        "lessonNumber": 1,
        "title": "因果与转折复句 (Causal & Concessive) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 因果与转折复句 (Causal & Concessive Clauses).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「因果与转折复句 (Causal & Concessive)」（第1部分）的核心句法结构与因果与转折复句 (Causal & Concessive Clauses)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (18.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (18.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (18.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 因果与转折复句 (Causal & Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「因果与转折复句 (Causal & Concessive Clauses)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (18.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (18.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (18.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「因果与转折复句 (Causal & Concessive)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (18.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (18.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (18.1.3)。"
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
                    "prompt": "关于「因果与转折复句 (Causal & Concessive Clauses)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 18-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (18.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (18.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (18.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («因为所以_18_1»):",
                    "acceptedAnswers": [
                        "因为所以_18_1"
                    ],
                    "explanation": "The target keyword was: 【因为所以_18_1】"
                }
            ]
        }
    },
    "zh-u18-l2": {
        "id": "zh-u18-l2",
        "subject": "mandarin",
        "unit": 18,
        "lessonNumber": 2,
        "title": "因果与转折复句 (Causal & Concessive) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 因果与转折复句 (Causal & Concessive Clauses).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「因果与转折复句 (Causal & Concessive)」（第2部分）的核心句法结构与因果与转折复句 (Causal & Concessive Clauses)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (18.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (18.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (18.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 因果与转折复句 (Causal & Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「因果与转折复句 (Causal & Concessive Clauses)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (18.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (18.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (18.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「因果与转折复句 (Causal & Concessive)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (18.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (18.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (18.2.3)。"
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
                    "prompt": "关于「因果与转折复句 (Causal & Concessive Clauses)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 18-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (18.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (18.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (18.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («因为所以_18_2»):",
                    "acceptedAnswers": [
                        "因为所以_18_2"
                    ],
                    "explanation": "The target keyword was: 【因为所以_18_2】"
                }
            ]
        }
    },
    "zh-u18-l3": {
        "id": "zh-u18-l3",
        "subject": "mandarin",
        "unit": 18,
        "lessonNumber": 3,
        "title": "因果与转折复句 (Causal & Concessive) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 因果与转折复句 (Causal & Concessive Clauses).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「因果与转折复句 (Causal & Concessive)」（第3部分）的核心句法结构与因果与转折复句 (Causal & Concessive Clauses)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (18.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (18.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (18.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 因果与转折复句 (Causal & Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「因果与转折复句 (Causal & Concessive Clauses)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (18.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (18.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (18.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「因果与转折复句 (Causal & Concessive)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (18.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (18.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (18.3.3)。"
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
                    "prompt": "关于「因果与转折复句 (Causal & Concessive Clauses)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 18-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (18.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (18.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (18.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («因为所以_18_3»):",
                    "acceptedAnswers": [
                        "因为所以_18_3"
                    ],
                    "explanation": "The target keyword was: 【因为所以_18_3】"
                }
            ]
        }
    },
    "zh-u18-l4": {
        "id": "zh-u18-l4",
        "subject": "mandarin",
        "unit": 18,
        "lessonNumber": 4,
        "title": "因果与转折复句 (Causal & Concessive) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 因果与转折复句 (Causal & Concessive Clauses).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「因果与转折复句 (Causal & Concessive)」（第4部分）的核心句法结构与因果与转折复句 (Causal & Concessive Clauses)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (18.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (18.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (18.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 因果与转折复句 (Causal & Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「因果与转折复句 (Causal & Concessive Clauses)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (18.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (18.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (18.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「因果与转折复句 (Causal & Concessive)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (18.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (18.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (18.4.3)。"
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
                    "prompt": "关于「因果与转折复句 (Causal & Concessive Clauses)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 18-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (18.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (18.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (18.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («因为所以_18_4»):",
                    "acceptedAnswers": [
                        "因为所以_18_4"
                    ],
                    "explanation": "The target keyword was: 【因为所以_18_4】"
                }
            ]
        }
    },
    "zh-u18-l5": {
        "id": "zh-u18-l5",
        "subject": "mandarin",
        "unit": 18,
        "lessonNumber": 5,
        "title": "因果与转折复句 (Causal & Concessive) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 因果与转折复句 (Causal & Concessive Clauses).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「因果与转折复句 (Causal & Concessive)」（第5部分）的核心句法结构与因果与转折复句 (Causal & Concessive Clauses)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (18.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (18.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (18.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 因果与转折复句 (Causal & Concessive Clauses)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「因果与转折复句 (Causal & Concessive Clauses)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (18.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (18.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (18.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「因果与转折复句 (Causal & Concessive)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (18.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (18.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (18.5.3)。"
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
                    "prompt": "关于「因果与转折复句 (Causal & Concessive Clauses)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 18-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (18.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (18.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (18.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («因为所以_18_5»):",
                    "acceptedAnswers": [
                        "因为所以_18_5"
                    ],
                    "explanation": "The target keyword was: 【因为所以_18_5】"
                }
            ]
        }
    },
    "zh-u19-l1": {
        "id": "zh-u19-l1",
        "subject": "mandarin",
        "unit": 19,
        "lessonNumber": 1,
        "title": "强调句型：是...的结构 (Emphatic 是...的) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 强调句型是...的 (Emphatic 是...的 Construction).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「强调句型：是...的结构 (Emphatic 是...的)」（第1部分）的核心句法结构与强调句型是...的 (Emphatic 是...的 Construction)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (19.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (19.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (19.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 强调句型是...的 (Emphatic 是...的 Construction)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「强调句型是...的 (Emphatic 是...的 Construction)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (19.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (19.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (19.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「强调句型：是...的结构 (Emphatic 是...的)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (19.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (19.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (19.1.3)。"
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
                    "prompt": "关于「强调句型是...的 (Emphatic 是...的 Construction)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 19-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (19.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (19.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (19.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («是在北京学的_19_1»):",
                    "acceptedAnswers": [
                        "是在北京学的_19_1"
                    ],
                    "explanation": "The target keyword was: 【是在北京学的_19_1】"
                }
            ]
        }
    },
    "zh-u19-l2": {
        "id": "zh-u19-l2",
        "subject": "mandarin",
        "unit": 19,
        "lessonNumber": 2,
        "title": "强调句型：是...的结构 (Emphatic 是...的) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 强调句型是...的 (Emphatic 是...的 Construction).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「强调句型：是...的结构 (Emphatic 是...的)」（第2部分）的核心句法结构与强调句型是...的 (Emphatic 是...的 Construction)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (19.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (19.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (19.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 强调句型是...的 (Emphatic 是...的 Construction)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「强调句型是...的 (Emphatic 是...的 Construction)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (19.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (19.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (19.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「强调句型：是...的结构 (Emphatic 是...的)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (19.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (19.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (19.2.3)。"
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
                    "prompt": "关于「强调句型是...的 (Emphatic 是...的 Construction)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 19-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (19.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (19.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (19.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («是在北京学的_19_2»):",
                    "acceptedAnswers": [
                        "是在北京学的_19_2"
                    ],
                    "explanation": "The target keyword was: 【是在北京学的_19_2】"
                }
            ]
        }
    },
    "zh-u19-l3": {
        "id": "zh-u19-l3",
        "subject": "mandarin",
        "unit": 19,
        "lessonNumber": 3,
        "title": "强调句型：是...的结构 (Emphatic 是...的) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 强调句型是...的 (Emphatic 是...的 Construction).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「强调句型：是...的结构 (Emphatic 是...的)」（第3部分）的核心句法结构与强调句型是...的 (Emphatic 是...的 Construction)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (19.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (19.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (19.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 强调句型是...的 (Emphatic 是...的 Construction)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「强调句型是...的 (Emphatic 是...的 Construction)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (19.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (19.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (19.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「强调句型：是...的结构 (Emphatic 是...的)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (19.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (19.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (19.3.3)。"
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
                    "prompt": "关于「强调句型是...的 (Emphatic 是...的 Construction)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 19-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (19.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (19.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (19.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («是在北京学的_19_3»):",
                    "acceptedAnswers": [
                        "是在北京学的_19_3"
                    ],
                    "explanation": "The target keyword was: 【是在北京学的_19_3】"
                }
            ]
        }
    },
    "zh-u19-l4": {
        "id": "zh-u19-l4",
        "subject": "mandarin",
        "unit": 19,
        "lessonNumber": 4,
        "title": "强调句型：是...的结构 (Emphatic 是...的) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 强调句型是...的 (Emphatic 是...的 Construction).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「强调句型：是...的结构 (Emphatic 是...的)」（第4部分）的核心句法结构与强调句型是...的 (Emphatic 是...的 Construction)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (19.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (19.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (19.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 强调句型是...的 (Emphatic 是...的 Construction)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「强调句型是...的 (Emphatic 是...的 Construction)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (19.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (19.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (19.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「强调句型：是...的结构 (Emphatic 是...的)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (19.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (19.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (19.4.3)。"
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
                    "prompt": "关于「强调句型是...的 (Emphatic 是...的 Construction)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 19-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (19.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (19.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (19.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («是在北京学的_19_4»):",
                    "acceptedAnswers": [
                        "是在北京学的_19_4"
                    ],
                    "explanation": "The target keyword was: 【是在北京学的_19_4】"
                }
            ]
        }
    },
    "zh-u19-l5": {
        "id": "zh-u19-l5",
        "subject": "mandarin",
        "unit": 19,
        "lessonNumber": 5,
        "title": "强调句型：是...的结构 (Emphatic 是...的) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 强调句型是...的 (Emphatic 是...的 Construction).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「强调句型：是...的结构 (Emphatic 是...的)」（第5部分）的核心句法结构与强调句型是...的 (Emphatic 是...的 Construction)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (19.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (19.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (19.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 强调句型是...的 (Emphatic 是...的 Construction)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「强调句型是...的 (Emphatic 是...的 Construction)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (19.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (19.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (19.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「强调句型：是...的结构 (Emphatic 是...的)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (19.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (19.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (19.5.3)。"
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
                    "prompt": "关于「强调句型是...的 (Emphatic 是...的 Construction)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 19-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (19.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (19.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (19.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («是在北京学的_19_5»):",
                    "acceptedAnswers": [
                        "是在北京学的_19_5"
                    ],
                    "explanation": "The target keyword was: 【是在北京学的_19_5】"
                }
            ]
        }
    },
    "zh-u20-l1": {
        "id": "zh-u20-l1",
        "subject": "mandarin",
        "unit": 20,
        "lessonNumber": 1,
        "title": "商务沟通、职场礼仪与正式电邮 (Corporate Communication) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 商务职场与正式电邮 (Business & Corporate Communication).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「商务沟通、职场礼仪与正式电邮 (Corporate Communication)」（第1部分）的核心句法结构与商务职场与正式电邮 (Business & Corporate Communication)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (20.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (20.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (20.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 商务职场与正式电邮 (Business & Corporate Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「商务职场与正式电邮 (Business & Corporate Communication)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (20.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (20.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (20.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「商务沟通、职场礼仪与正式电邮 (Corporate Communication)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (20.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (20.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (20.1.3)。"
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
                    "prompt": "关于「商务职场与正式电邮 (Business & Corporate Communication)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 20-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (20.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (20.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (20.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («开会_20_1»):",
                    "acceptedAnswers": [
                        "开会_20_1"
                    ],
                    "explanation": "The target keyword was: 【开会_20_1】"
                }
            ]
        }
    },
    "zh-u20-l2": {
        "id": "zh-u20-l2",
        "subject": "mandarin",
        "unit": 20,
        "lessonNumber": 2,
        "title": "商务沟通、职场礼仪与正式电邮 (Corporate Communication) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 商务职场与正式电邮 (Business & Corporate Communication).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「商务沟通、职场礼仪与正式电邮 (Corporate Communication)」（第2部分）的核心句法结构与商务职场与正式电邮 (Business & Corporate Communication)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (20.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (20.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (20.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 商务职场与正式电邮 (Business & Corporate Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「商务职场与正式电邮 (Business & Corporate Communication)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (20.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (20.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (20.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「商务沟通、职场礼仪与正式电邮 (Corporate Communication)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (20.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (20.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (20.2.3)。"
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
                    "prompt": "关于「商务职场与正式电邮 (Business & Corporate Communication)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 20-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (20.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (20.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (20.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («开会_20_2»):",
                    "acceptedAnswers": [
                        "开会_20_2"
                    ],
                    "explanation": "The target keyword was: 【开会_20_2】"
                }
            ]
        }
    },
    "zh-u20-l3": {
        "id": "zh-u20-l3",
        "subject": "mandarin",
        "unit": 20,
        "lessonNumber": 3,
        "title": "商务沟通、职场礼仪与正式电邮 (Corporate Communication) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 商务职场与正式电邮 (Business & Corporate Communication).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「商务沟通、职场礼仪与正式电邮 (Corporate Communication)」（第3部分）的核心句法结构与商务职场与正式电邮 (Business & Corporate Communication)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (20.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (20.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (20.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 商务职场与正式电邮 (Business & Corporate Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「商务职场与正式电邮 (Business & Corporate Communication)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (20.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (20.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (20.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「商务沟通、职场礼仪与正式电邮 (Corporate Communication)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (20.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (20.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (20.3.3)。"
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
                    "prompt": "关于「商务职场与正式电邮 (Business & Corporate Communication)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 20-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (20.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (20.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (20.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («开会_20_3»):",
                    "acceptedAnswers": [
                        "开会_20_3"
                    ],
                    "explanation": "The target keyword was: 【开会_20_3】"
                }
            ]
        }
    },
    "zh-u20-l4": {
        "id": "zh-u20-l4",
        "subject": "mandarin",
        "unit": 20,
        "lessonNumber": 4,
        "title": "商务沟通、职场礼仪与正式电邮 (Corporate Communication) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 商务职场与正式电邮 (Business & Corporate Communication).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「商务沟通、职场礼仪与正式电邮 (Corporate Communication)」（第4部分）的核心句法结构与商务职场与正式电邮 (Business & Corporate Communication)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (20.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (20.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (20.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 商务职场与正式电邮 (Business & Corporate Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「商务职场与正式电邮 (Business & Corporate Communication)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (20.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (20.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (20.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「商务沟通、职场礼仪与正式电邮 (Corporate Communication)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (20.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (20.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (20.4.3)。"
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
                    "prompt": "关于「商务职场与正式电邮 (Business & Corporate Communication)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 20-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (20.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (20.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (20.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («开会_20_4»):",
                    "acceptedAnswers": [
                        "开会_20_4"
                    ],
                    "explanation": "The target keyword was: 【开会_20_4】"
                }
            ]
        }
    },
    "zh-u20-l5": {
        "id": "zh-u20-l5",
        "subject": "mandarin",
        "unit": 20,
        "lessonNumber": 5,
        "title": "商务沟通、职场礼仪与正式电邮 (Corporate Communication) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 商务职场与正式电邮 (Business & Corporate Communication).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「商务沟通、职场礼仪与正式电邮 (Corporate Communication)」（第5部分）的核心句法结构与商务职场与正式电邮 (Business & Corporate Communication)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (20.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (20.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (20.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 商务职场与正式电邮 (Business & Corporate Communication)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「商务职场与正式电邮 (Business & Corporate Communication)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (20.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (20.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (20.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「商务沟通、职场礼仪与正式电邮 (Corporate Communication)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (20.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (20.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (20.5.3)。"
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
                    "prompt": "关于「商务职场与正式电邮 (Business & Corporate Communication)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 20-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (20.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (20.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (20.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («开会_20_5»):",
                    "acceptedAnswers": [
                        "开会_20_5"
                    ],
                    "explanation": "The target keyword was: 【开会_20_5】"
                }
            ]
        }
    },
    "zh-u21-l1": {
        "id": "zh-u21-l1",
        "subject": "mandarin",
        "unit": 21,
        "lessonNumber": 1,
        "title": "中华饮食文化与宴席礼仪 (Culinary Arts & Banquets) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 中华美食与宴席礼仪 (Chinese Culinary Arts & Dining).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「中华饮食文化与宴席礼仪 (Culinary Arts & Banquets)」（第1部分）的核心句法结构与中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (21.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (21.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (21.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (21.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (21.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (21.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「中华饮食文化与宴席礼仪 (Culinary Arts & Banquets)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (21.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (21.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (21.1.3)。"
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
                    "prompt": "关于「中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 21-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (21.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (21.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (21.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («点菜_21_1»):",
                    "acceptedAnswers": [
                        "点菜_21_1"
                    ],
                    "explanation": "The target keyword was: 【点菜_21_1】"
                }
            ]
        }
    },
    "zh-u21-l2": {
        "id": "zh-u21-l2",
        "subject": "mandarin",
        "unit": 21,
        "lessonNumber": 2,
        "title": "中华饮食文化与宴席礼仪 (Culinary Arts & Banquets) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 中华美食与宴席礼仪 (Chinese Culinary Arts & Dining).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「中华饮食文化与宴席礼仪 (Culinary Arts & Banquets)」（第2部分）的核心句法结构与中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (21.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (21.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (21.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (21.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (21.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (21.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「中华饮食文化与宴席礼仪 (Culinary Arts & Banquets)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (21.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (21.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (21.2.3)。"
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
                    "prompt": "关于「中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 21-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (21.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (21.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (21.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («点菜_21_2»):",
                    "acceptedAnswers": [
                        "点菜_21_2"
                    ],
                    "explanation": "The target keyword was: 【点菜_21_2】"
                }
            ]
        }
    },
    "zh-u21-l3": {
        "id": "zh-u21-l3",
        "subject": "mandarin",
        "unit": 21,
        "lessonNumber": 3,
        "title": "中华饮食文化与宴席礼仪 (Culinary Arts & Banquets) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 中华美食与宴席礼仪 (Chinese Culinary Arts & Dining).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「中华饮食文化与宴席礼仪 (Culinary Arts & Banquets)」（第3部分）的核心句法结构与中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (21.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (21.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (21.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (21.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (21.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (21.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「中华饮食文化与宴席礼仪 (Culinary Arts & Banquets)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (21.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (21.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (21.3.3)。"
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
                    "prompt": "关于「中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 21-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (21.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (21.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (21.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («点菜_21_3»):",
                    "acceptedAnswers": [
                        "点菜_21_3"
                    ],
                    "explanation": "The target keyword was: 【点菜_21_3】"
                }
            ]
        }
    },
    "zh-u21-l4": {
        "id": "zh-u21-l4",
        "subject": "mandarin",
        "unit": 21,
        "lessonNumber": 4,
        "title": "中华饮食文化与宴席礼仪 (Culinary Arts & Banquets) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 中华美食与宴席礼仪 (Chinese Culinary Arts & Dining).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「中华饮食文化与宴席礼仪 (Culinary Arts & Banquets)」（第4部分）的核心句法结构与中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (21.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (21.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (21.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (21.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (21.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (21.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「中华饮食文化与宴席礼仪 (Culinary Arts & Banquets)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (21.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (21.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (21.4.3)。"
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
                    "prompt": "关于「中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 21-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (21.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (21.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (21.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («点菜_21_4»):",
                    "acceptedAnswers": [
                        "点菜_21_4"
                    ],
                    "explanation": "The target keyword was: 【点菜_21_4】"
                }
            ]
        }
    },
    "zh-u21-l5": {
        "id": "zh-u21-l5",
        "subject": "mandarin",
        "unit": 21,
        "lessonNumber": 5,
        "title": "中华饮食文化与宴席礼仪 (Culinary Arts & Banquets) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 中华美食与宴席礼仪 (Chinese Culinary Arts & Dining).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「中华饮食文化与宴席礼仪 (Culinary Arts & Banquets)」（第5部分）的核心句法结构与中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (21.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (21.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (21.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (21.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (21.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (21.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「中华饮食文化与宴席礼仪 (Culinary Arts & Banquets)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (21.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (21.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (21.5.3)。"
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
                    "prompt": "关于「中华美食与宴席礼仪 (Chinese Culinary Arts & Dining)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 21-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (21.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (21.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (21.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («点菜_21_5»):",
                    "acceptedAnswers": [
                        "点菜_21_5"
                    ],
                    "explanation": "The target keyword was: 【点菜_21_5】"
                }
            ]
        }
    },
    "zh-u22-l1": {
        "id": "zh-u22-l1",
        "subject": "mandarin",
        "unit": 22,
        "lessonNumber": 1,
        "title": "城市导航与智慧出行 (Urban Transit & Digital Life) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 城市交通与智慧生活 (Urban Transit & Digital Life).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「城市导航与智慧出行 (Urban Transit & Digital Life)」（第1部分）的核心句法结构与城市交通与智慧生活 (Urban Transit & Digital Life)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (22.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (22.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (22.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 城市交通与智慧生活 (Urban Transit & Digital Life)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「城市交通与智慧生活 (Urban Transit & Digital Life)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (22.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (22.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (22.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「城市导航与智慧出行 (Urban Transit & Digital Life)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (22.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (22.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (22.1.3)。"
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
                    "prompt": "关于「城市交通与智慧生活 (Urban Transit & Digital Life)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 22-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (22.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (22.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (22.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («地铁_22_1»):",
                    "acceptedAnswers": [
                        "地铁_22_1"
                    ],
                    "explanation": "The target keyword was: 【地铁_22_1】"
                }
            ]
        }
    },
    "zh-u22-l2": {
        "id": "zh-u22-l2",
        "subject": "mandarin",
        "unit": 22,
        "lessonNumber": 2,
        "title": "城市导航与智慧出行 (Urban Transit & Digital Life) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 城市交通与智慧生活 (Urban Transit & Digital Life).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「城市导航与智慧出行 (Urban Transit & Digital Life)」（第2部分）的核心句法结构与城市交通与智慧生活 (Urban Transit & Digital Life)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (22.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (22.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (22.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 城市交通与智慧生活 (Urban Transit & Digital Life)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「城市交通与智慧生活 (Urban Transit & Digital Life)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (22.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (22.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (22.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「城市导航与智慧出行 (Urban Transit & Digital Life)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (22.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (22.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (22.2.3)。"
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
                    "prompt": "关于「城市交通与智慧生活 (Urban Transit & Digital Life)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 22-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (22.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (22.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (22.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («地铁_22_2»):",
                    "acceptedAnswers": [
                        "地铁_22_2"
                    ],
                    "explanation": "The target keyword was: 【地铁_22_2】"
                }
            ]
        }
    },
    "zh-u22-l3": {
        "id": "zh-u22-l3",
        "subject": "mandarin",
        "unit": 22,
        "lessonNumber": 3,
        "title": "城市导航与智慧出行 (Urban Transit & Digital Life) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 城市交通与智慧生活 (Urban Transit & Digital Life).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「城市导航与智慧出行 (Urban Transit & Digital Life)」（第3部分）的核心句法结构与城市交通与智慧生活 (Urban Transit & Digital Life)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (22.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (22.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (22.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 城市交通与智慧生活 (Urban Transit & Digital Life)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「城市交通与智慧生活 (Urban Transit & Digital Life)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (22.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (22.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (22.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「城市导航与智慧出行 (Urban Transit & Digital Life)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (22.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (22.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (22.3.3)。"
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
                    "prompt": "关于「城市交通与智慧生活 (Urban Transit & Digital Life)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 22-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (22.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (22.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (22.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («地铁_22_3»):",
                    "acceptedAnswers": [
                        "地铁_22_3"
                    ],
                    "explanation": "The target keyword was: 【地铁_22_3】"
                }
            ]
        }
    },
    "zh-u22-l4": {
        "id": "zh-u22-l4",
        "subject": "mandarin",
        "unit": 22,
        "lessonNumber": 4,
        "title": "城市导航与智慧出行 (Urban Transit & Digital Life) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 城市交通与智慧生活 (Urban Transit & Digital Life).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「城市导航与智慧出行 (Urban Transit & Digital Life)」（第4部分）的核心句法结构与城市交通与智慧生活 (Urban Transit & Digital Life)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (22.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (22.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (22.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 城市交通与智慧生活 (Urban Transit & Digital Life)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「城市交通与智慧生活 (Urban Transit & Digital Life)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (22.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (22.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (22.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「城市导航与智慧出行 (Urban Transit & Digital Life)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (22.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (22.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (22.4.3)。"
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
                    "prompt": "关于「城市交通与智慧生活 (Urban Transit & Digital Life)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 22-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (22.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (22.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (22.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («地铁_22_4»):",
                    "acceptedAnswers": [
                        "地铁_22_4"
                    ],
                    "explanation": "The target keyword was: 【地铁_22_4】"
                }
            ]
        }
    },
    "zh-u22-l5": {
        "id": "zh-u22-l5",
        "subject": "mandarin",
        "unit": 22,
        "lessonNumber": 5,
        "title": "城市导航与智慧出行 (Urban Transit & Digital Life) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 城市交通与智慧生活 (Urban Transit & Digital Life).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「城市导航与智慧出行 (Urban Transit & Digital Life)」（第5部分）的核心句法结构与城市交通与智慧生活 (Urban Transit & Digital Life)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (22.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (22.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (22.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 城市交通与智慧生活 (Urban Transit & Digital Life)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「城市交通与智慧生活 (Urban Transit & Digital Life)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (22.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (22.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (22.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「城市导航与智慧出行 (Urban Transit & Digital Life)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (22.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (22.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (22.5.3)。"
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
                    "prompt": "关于「城市交通与智慧生活 (Urban Transit & Digital Life)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 22-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (22.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (22.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (22.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («地铁_22_5»):",
                    "acceptedAnswers": [
                        "地铁_22_5"
                    ],
                    "explanation": "The target keyword was: 【地铁_22_5】"
                }
            ]
        }
    },
    "zh-u23-l1": {
        "id": "zh-u23-l1",
        "subject": "mandarin",
        "unit": 23,
        "lessonNumber": 1,
        "title": "传统中医与经络养生 (TCM Diagnostics & Wellness) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 传统中医与养生理念 (Traditional Chinese Medicine).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「传统中医与经络养生 (TCM Diagnostics & Wellness)」（第1部分）的核心句法结构与传统中医与养生理念 (Traditional Chinese Medicine)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (23.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (23.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (23.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 传统中医与养生理念 (Traditional Chinese Medicine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「传统中医与养生理念 (Traditional Chinese Medicine)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (23.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (23.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (23.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「传统中医与经络养生 (TCM Diagnostics & Wellness)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (23.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (23.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (23.1.3)。"
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
                    "prompt": "关于「传统中医与养生理念 (Traditional Chinese Medicine)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 23-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (23.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (23.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (23.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («中医_23_1»):",
                    "acceptedAnswers": [
                        "中医_23_1"
                    ],
                    "explanation": "The target keyword was: 【中医_23_1】"
                }
            ]
        }
    },
    "zh-u23-l2": {
        "id": "zh-u23-l2",
        "subject": "mandarin",
        "unit": 23,
        "lessonNumber": 2,
        "title": "传统中医与经络养生 (TCM Diagnostics & Wellness) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 传统中医与养生理念 (Traditional Chinese Medicine).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「传统中医与经络养生 (TCM Diagnostics & Wellness)」（第2部分）的核心句法结构与传统中医与养生理念 (Traditional Chinese Medicine)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (23.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (23.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (23.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 传统中医与养生理念 (Traditional Chinese Medicine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「传统中医与养生理念 (Traditional Chinese Medicine)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (23.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (23.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (23.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「传统中医与经络养生 (TCM Diagnostics & Wellness)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (23.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (23.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (23.2.3)。"
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
                    "prompt": "关于「传统中医与养生理念 (Traditional Chinese Medicine)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 23-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (23.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (23.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (23.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («中医_23_2»):",
                    "acceptedAnswers": [
                        "中医_23_2"
                    ],
                    "explanation": "The target keyword was: 【中医_23_2】"
                }
            ]
        }
    },
    "zh-u23-l3": {
        "id": "zh-u23-l3",
        "subject": "mandarin",
        "unit": 23,
        "lessonNumber": 3,
        "title": "传统中医与经络养生 (TCM Diagnostics & Wellness) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 传统中医与养生理念 (Traditional Chinese Medicine).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「传统中医与经络养生 (TCM Diagnostics & Wellness)」（第3部分）的核心句法结构与传统中医与养生理念 (Traditional Chinese Medicine)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (23.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (23.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (23.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 传统中医与养生理念 (Traditional Chinese Medicine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「传统中医与养生理念 (Traditional Chinese Medicine)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (23.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (23.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (23.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「传统中医与经络养生 (TCM Diagnostics & Wellness)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (23.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (23.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (23.3.3)。"
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
                    "prompt": "关于「传统中医与养生理念 (Traditional Chinese Medicine)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 23-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (23.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (23.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (23.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («中医_23_3»):",
                    "acceptedAnswers": [
                        "中医_23_3"
                    ],
                    "explanation": "The target keyword was: 【中医_23_3】"
                }
            ]
        }
    },
    "zh-u23-l4": {
        "id": "zh-u23-l4",
        "subject": "mandarin",
        "unit": 23,
        "lessonNumber": 4,
        "title": "传统中医与经络养生 (TCM Diagnostics & Wellness) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 传统中医与养生理念 (Traditional Chinese Medicine).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「传统中医与经络养生 (TCM Diagnostics & Wellness)」（第4部分）的核心句法结构与传统中医与养生理念 (Traditional Chinese Medicine)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (23.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (23.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (23.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 传统中医与养生理念 (Traditional Chinese Medicine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「传统中医与养生理念 (Traditional Chinese Medicine)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (23.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (23.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (23.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「传统中医与经络养生 (TCM Diagnostics & Wellness)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (23.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (23.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (23.4.3)。"
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
                    "prompt": "关于「传统中医与养生理念 (Traditional Chinese Medicine)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 23-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (23.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (23.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (23.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («中医_23_4»):",
                    "acceptedAnswers": [
                        "中医_23_4"
                    ],
                    "explanation": "The target keyword was: 【中医_23_4】"
                }
            ]
        }
    },
    "zh-u23-l5": {
        "id": "zh-u23-l5",
        "subject": "mandarin",
        "unit": 23,
        "lessonNumber": 5,
        "title": "传统中医与经络养生 (TCM Diagnostics & Wellness) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 传统中医与养生理念 (Traditional Chinese Medicine).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「传统中医与经络养生 (TCM Diagnostics & Wellness)」（第5部分）的核心句法结构与传统中医与养生理念 (Traditional Chinese Medicine)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (23.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (23.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (23.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 传统中医与养生理念 (Traditional Chinese Medicine)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「传统中医与养生理念 (Traditional Chinese Medicine)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (23.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (23.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (23.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「传统中医与经络养生 (TCM Diagnostics & Wellness)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (23.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (23.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (23.5.3)。"
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
                    "prompt": "关于「传统中医与养生理念 (Traditional Chinese Medicine)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 23-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (23.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (23.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (23.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («中医_23_5»):",
                    "acceptedAnswers": [
                        "中医_23_5"
                    ],
                    "explanation": "The target keyword was: 【中医_23_5】"
                }
            ]
        }
    },
    "zh-u24-l1": {
        "id": "zh-u24-l1",
        "subject": "mandarin",
        "unit": 24,
        "lessonNumber": 1,
        "title": "金融银行、供应链与跨境电商 (Banking & Supply Chains) (Part 1)",
        "level": "B2",
        "objective": "Comprehensive mastery of 金融银行与跨境电商 (Banking, Finance & E-Commerce).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「金融银行、供应链与跨境电商 (Banking & Supply Chains)」（第1部分）的核心句法结构与金融银行与跨境电商 (Banking, Finance & E-Commerce)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (24.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (24.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (24.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 金融银行与跨境电商 (Banking, Finance & E-Commerce)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「金融银行与跨境电商 (Banking, Finance & E-Commerce)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (24.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (24.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (24.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「金融银行、供应链与跨境电商 (Banking & Supply Chains)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (24.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (24.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (24.1.3)。"
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
                    "prompt": "关于「金融银行与跨境电商 (Banking, Finance & E-Commerce)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 24-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (24.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (24.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (24.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («银行_24_1»):",
                    "acceptedAnswers": [
                        "银行_24_1"
                    ],
                    "explanation": "The target keyword was: 【银行_24_1】"
                }
            ]
        }
    },
    "zh-u24-l2": {
        "id": "zh-u24-l2",
        "subject": "mandarin",
        "unit": 24,
        "lessonNumber": 2,
        "title": "金融银行、供应链与跨境电商 (Banking & Supply Chains) (Part 2)",
        "level": "B2",
        "objective": "Comprehensive mastery of 金融银行与跨境电商 (Banking, Finance & E-Commerce).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「金融银行、供应链与跨境电商 (Banking & Supply Chains)」（第2部分）的核心句法结构与金融银行与跨境电商 (Banking, Finance & E-Commerce)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (24.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (24.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (24.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 金融银行与跨境电商 (Banking, Finance & E-Commerce)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「金融银行与跨境电商 (Banking, Finance & E-Commerce)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (24.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (24.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (24.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「金融银行、供应链与跨境电商 (Banking & Supply Chains)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (24.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (24.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (24.2.3)。"
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
                    "prompt": "关于「金融银行与跨境电商 (Banking, Finance & E-Commerce)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 24-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (24.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (24.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (24.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («银行_24_2»):",
                    "acceptedAnswers": [
                        "银行_24_2"
                    ],
                    "explanation": "The target keyword was: 【银行_24_2】"
                }
            ]
        }
    },
    "zh-u24-l3": {
        "id": "zh-u24-l3",
        "subject": "mandarin",
        "unit": 24,
        "lessonNumber": 3,
        "title": "金融银行、供应链与跨境电商 (Banking & Supply Chains) (Part 3)",
        "level": "B2",
        "objective": "Comprehensive mastery of 金融银行与跨境电商 (Banking, Finance & E-Commerce).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「金融银行、供应链与跨境电商 (Banking & Supply Chains)」（第3部分）的核心句法结构与金融银行与跨境电商 (Banking, Finance & E-Commerce)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (24.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (24.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (24.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 金融银行与跨境电商 (Banking, Finance & E-Commerce)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「金融银行与跨境电商 (Banking, Finance & E-Commerce)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (24.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (24.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (24.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「金融银行、供应链与跨境电商 (Banking & Supply Chains)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (24.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (24.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (24.3.3)。"
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
                    "prompt": "关于「金融银行与跨境电商 (Banking, Finance & E-Commerce)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 24-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (24.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (24.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (24.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («银行_24_3»):",
                    "acceptedAnswers": [
                        "银行_24_3"
                    ],
                    "explanation": "The target keyword was: 【银行_24_3】"
                }
            ]
        }
    },
    "zh-u24-l4": {
        "id": "zh-u24-l4",
        "subject": "mandarin",
        "unit": 24,
        "lessonNumber": 4,
        "title": "金融银行、供应链与跨境电商 (Banking & Supply Chains) (Part 4)",
        "level": "B2",
        "objective": "Comprehensive mastery of 金融银行与跨境电商 (Banking, Finance & E-Commerce).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「金融银行、供应链与跨境电商 (Banking & Supply Chains)」（第4部分）的核心句法结构与金融银行与跨境电商 (Banking, Finance & E-Commerce)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (24.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (24.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (24.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 金融银行与跨境电商 (Banking, Finance & E-Commerce)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「金融银行与跨境电商 (Banking, Finance & E-Commerce)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (24.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (24.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (24.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「金融银行、供应链与跨境电商 (Banking & Supply Chains)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (24.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (24.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (24.4.3)。"
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
                    "prompt": "关于「金融银行与跨境电商 (Banking, Finance & E-Commerce)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 24-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (24.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (24.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (24.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («银行_24_4»):",
                    "acceptedAnswers": [
                        "银行_24_4"
                    ],
                    "explanation": "The target keyword was: 【银行_24_4】"
                }
            ]
        }
    },
    "zh-u24-l5": {
        "id": "zh-u24-l5",
        "subject": "mandarin",
        "unit": 24,
        "lessonNumber": 5,
        "title": "金融银行、供应链与跨境电商 (Banking & Supply Chains) (Part 5)",
        "level": "B2",
        "objective": "Comprehensive mastery of 金融银行与跨境电商 (Banking, Finance & E-Commerce).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「金融银行、供应链与跨境电商 (Banking & Supply Chains)」（第5部分）的核心句法结构与金融银行与跨境电商 (Banking, Finance & E-Commerce)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (24.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (24.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (24.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 金融银行与跨境电商 (Banking, Finance & E-Commerce)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「金融银行与跨境电商 (Banking, Finance & E-Commerce)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (24.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (24.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (24.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「金融银行、供应链与跨境电商 (Banking & Supply Chains)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (24.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (24.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (24.5.3)。"
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
                    "prompt": "关于「金融银行与跨境电商 (Banking, Finance & E-Commerce)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 24-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (24.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (24.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (24.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR B2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («银行_24_5»):",
                    "acceptedAnswers": [
                        "银行_24_5"
                    ],
                    "explanation": "The target keyword was: 【银行_24_5】"
                }
            ]
        }
    },
    "zh-u25-l1": {
        "id": "zh-u25-l1",
        "subject": "mandarin",
        "unit": 25,
        "lessonNumber": 1,
        "title": "现代中国影视与文学批评 (Contemporary Cinema & Literature) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of 影视艺术与文学鉴赏 (Cinema & Contemporary Literature).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「现代中国影视与文学批评 (Contemporary Cinema & Literature)」（第1部分）的核心句法结构与影视艺术与文学鉴赏 (Cinema & Contemporary Literature)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (25.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (25.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (25.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 影视艺术与文学鉴赏 (Cinema & Contemporary Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「影视艺术与文学鉴赏 (Cinema & Contemporary Literature)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (25.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (25.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (25.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「现代中国影视与文学批评 (Contemporary Cinema & Literature)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (25.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (25.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (25.1.3)。"
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
                    "prompt": "关于「影视艺术与文学鉴赏 (Cinema & Contemporary Literature)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 25-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (25.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (25.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (25.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («电影_25_1»):",
                    "acceptedAnswers": [
                        "电影_25_1"
                    ],
                    "explanation": "The target keyword was: 【电影_25_1】"
                }
            ]
        }
    },
    "zh-u25-l2": {
        "id": "zh-u25-l2",
        "subject": "mandarin",
        "unit": 25,
        "lessonNumber": 2,
        "title": "现代中国影视与文学批评 (Contemporary Cinema & Literature) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of 影视艺术与文学鉴赏 (Cinema & Contemporary Literature).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「现代中国影视与文学批评 (Contemporary Cinema & Literature)」（第2部分）的核心句法结构与影视艺术与文学鉴赏 (Cinema & Contemporary Literature)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (25.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (25.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (25.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 影视艺术与文学鉴赏 (Cinema & Contemporary Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「影视艺术与文学鉴赏 (Cinema & Contemporary Literature)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (25.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (25.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (25.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「现代中国影视与文学批评 (Contemporary Cinema & Literature)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (25.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (25.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (25.2.3)。"
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
                    "prompt": "关于「影视艺术与文学鉴赏 (Cinema & Contemporary Literature)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 25-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (25.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (25.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (25.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («电影_25_2»):",
                    "acceptedAnswers": [
                        "电影_25_2"
                    ],
                    "explanation": "The target keyword was: 【电影_25_2】"
                }
            ]
        }
    },
    "zh-u25-l3": {
        "id": "zh-u25-l3",
        "subject": "mandarin",
        "unit": 25,
        "lessonNumber": 3,
        "title": "现代中国影视与文学批评 (Contemporary Cinema & Literature) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of 影视艺术与文学鉴赏 (Cinema & Contemporary Literature).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「现代中国影视与文学批评 (Contemporary Cinema & Literature)」（第3部分）的核心句法结构与影视艺术与文学鉴赏 (Cinema & Contemporary Literature)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (25.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (25.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (25.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 影视艺术与文学鉴赏 (Cinema & Contemporary Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「影视艺术与文学鉴赏 (Cinema & Contemporary Literature)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (25.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (25.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (25.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「现代中国影视与文学批评 (Contemporary Cinema & Literature)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (25.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (25.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (25.3.3)。"
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
                    "prompt": "关于「影视艺术与文学鉴赏 (Cinema & Contemporary Literature)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 25-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (25.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (25.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (25.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («电影_25_3»):",
                    "acceptedAnswers": [
                        "电影_25_3"
                    ],
                    "explanation": "The target keyword was: 【电影_25_3】"
                }
            ]
        }
    },
    "zh-u25-l4": {
        "id": "zh-u25-l4",
        "subject": "mandarin",
        "unit": 25,
        "lessonNumber": 4,
        "title": "现代中国影视与文学批评 (Contemporary Cinema & Literature) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of 影视艺术与文学鉴赏 (Cinema & Contemporary Literature).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「现代中国影视与文学批评 (Contemporary Cinema & Literature)」（第4部分）的核心句法结构与影视艺术与文学鉴赏 (Cinema & Contemporary Literature)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (25.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (25.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (25.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 影视艺术与文学鉴赏 (Cinema & Contemporary Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「影视艺术与文学鉴赏 (Cinema & Contemporary Literature)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (25.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (25.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (25.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「现代中国影视与文学批评 (Contemporary Cinema & Literature)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (25.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (25.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (25.4.3)。"
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
                    "prompt": "关于「影视艺术与文学鉴赏 (Cinema & Contemporary Literature)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 25-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (25.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (25.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (25.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («电影_25_4»):",
                    "acceptedAnswers": [
                        "电影_25_4"
                    ],
                    "explanation": "The target keyword was: 【电影_25_4】"
                }
            ]
        }
    },
    "zh-u25-l5": {
        "id": "zh-u25-l5",
        "subject": "mandarin",
        "unit": 25,
        "lessonNumber": 5,
        "title": "现代中国影视与文学批评 (Contemporary Cinema & Literature) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of 影视艺术与文学鉴赏 (Cinema & Contemporary Literature).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「现代中国影视与文学批评 (Contemporary Cinema & Literature)」（第5部分）的核心句法结构与影视艺术与文学鉴赏 (Cinema & Contemporary Literature)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (25.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (25.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (25.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 影视艺术与文学鉴赏 (Cinema & Contemporary Literature)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「影视艺术与文学鉴赏 (Cinema & Contemporary Literature)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (25.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (25.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (25.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「现代中国影视与文学批评 (Contemporary Cinema & Literature)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (25.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (25.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (25.5.3)。"
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
                    "prompt": "关于「影视艺术与文学鉴赏 (Cinema & Contemporary Literature)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 25-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (25.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (25.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (25.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («电影_25_5»):",
                    "acceptedAnswers": [
                        "电影_25_5"
                    ],
                    "explanation": "The target keyword was: 【电影_25_5】"
                }
            ]
        }
    },
    "zh-u26-l1": {
        "id": "zh-u26-l1",
        "subject": "mandarin",
        "unit": 26,
        "lessonNumber": 1,
        "title": "四字成语典故与修辞运用 (Classical Chengyu Idioms) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of 四字成语典故运用 (Classical Chengyu Idioms).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「四字成语典故与修辞运用 (Classical Chengyu Idioms)」（第1部分）的核心句法结构与四字成语典故运用 (Classical Chengyu Idioms)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (26.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (26.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (26.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 四字成语典故运用 (Classical Chengyu Idioms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「四字成语典故运用 (Classical Chengyu Idioms)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (26.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (26.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (26.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「四字成语典故与修辞运用 (Classical Chengyu Idioms)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (26.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (26.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (26.1.3)。"
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
                    "prompt": "关于「四字成语典故运用 (Classical Chengyu Idioms)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 26-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (26.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (26.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (26.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («温故知新_26_1»):",
                    "acceptedAnswers": [
                        "温故知新_26_1"
                    ],
                    "explanation": "The target keyword was: 【温故知新_26_1】"
                }
            ]
        }
    },
    "zh-u26-l2": {
        "id": "zh-u26-l2",
        "subject": "mandarin",
        "unit": 26,
        "lessonNumber": 2,
        "title": "四字成语典故与修辞运用 (Classical Chengyu Idioms) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of 四字成语典故运用 (Classical Chengyu Idioms).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「四字成语典故与修辞运用 (Classical Chengyu Idioms)」（第2部分）的核心句法结构与四字成语典故运用 (Classical Chengyu Idioms)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (26.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (26.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (26.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 四字成语典故运用 (Classical Chengyu Idioms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「四字成语典故运用 (Classical Chengyu Idioms)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (26.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (26.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (26.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「四字成语典故与修辞运用 (Classical Chengyu Idioms)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (26.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (26.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (26.2.3)。"
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
                    "prompt": "关于「四字成语典故运用 (Classical Chengyu Idioms)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 26-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (26.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (26.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (26.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («温故知新_26_2»):",
                    "acceptedAnswers": [
                        "温故知新_26_2"
                    ],
                    "explanation": "The target keyword was: 【温故知新_26_2】"
                }
            ]
        }
    },
    "zh-u26-l3": {
        "id": "zh-u26-l3",
        "subject": "mandarin",
        "unit": 26,
        "lessonNumber": 3,
        "title": "四字成语典故与修辞运用 (Classical Chengyu Idioms) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of 四字成语典故运用 (Classical Chengyu Idioms).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「四字成语典故与修辞运用 (Classical Chengyu Idioms)」（第3部分）的核心句法结构与四字成语典故运用 (Classical Chengyu Idioms)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (26.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (26.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (26.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 四字成语典故运用 (Classical Chengyu Idioms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「四字成语典故运用 (Classical Chengyu Idioms)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (26.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (26.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (26.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「四字成语典故与修辞运用 (Classical Chengyu Idioms)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (26.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (26.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (26.3.3)。"
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
                    "prompt": "关于「四字成语典故运用 (Classical Chengyu Idioms)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 26-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (26.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (26.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (26.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («温故知新_26_3»):",
                    "acceptedAnswers": [
                        "温故知新_26_3"
                    ],
                    "explanation": "The target keyword was: 【温故知新_26_3】"
                }
            ]
        }
    },
    "zh-u26-l4": {
        "id": "zh-u26-l4",
        "subject": "mandarin",
        "unit": 26,
        "lessonNumber": 4,
        "title": "四字成语典故与修辞运用 (Classical Chengyu Idioms) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of 四字成语典故运用 (Classical Chengyu Idioms).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「四字成语典故与修辞运用 (Classical Chengyu Idioms)」（第4部分）的核心句法结构与四字成语典故运用 (Classical Chengyu Idioms)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (26.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (26.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (26.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 四字成语典故运用 (Classical Chengyu Idioms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「四字成语典故运用 (Classical Chengyu Idioms)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (26.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (26.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (26.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「四字成语典故与修辞运用 (Classical Chengyu Idioms)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (26.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (26.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (26.4.3)。"
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
                    "prompt": "关于「四字成语典故运用 (Classical Chengyu Idioms)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 26-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (26.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (26.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (26.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («温故知新_26_4»):",
                    "acceptedAnswers": [
                        "温故知新_26_4"
                    ],
                    "explanation": "The target keyword was: 【温故知新_26_4】"
                }
            ]
        }
    },
    "zh-u26-l5": {
        "id": "zh-u26-l5",
        "subject": "mandarin",
        "unit": 26,
        "lessonNumber": 5,
        "title": "四字成语典故与修辞运用 (Classical Chengyu Idioms) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of 四字成语典故运用 (Classical Chengyu Idioms).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「四字成语典故与修辞运用 (Classical Chengyu Idioms)」（第5部分）的核心句法结构与四字成语典故运用 (Classical Chengyu Idioms)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (26.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (26.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (26.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 四字成语典故运用 (Classical Chengyu Idioms)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「四字成语典故运用 (Classical Chengyu Idioms)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (26.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (26.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (26.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「四字成语典故与修辞运用 (Classical Chengyu Idioms)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (26.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (26.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (26.5.3)。"
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
                    "prompt": "关于「四字成语典故运用 (Classical Chengyu Idioms)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 26-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (26.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (26.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (26.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («温故知新_26_5»):",
                    "acceptedAnswers": [
                        "温故知新_26_5"
                    ],
                    "explanation": "The target keyword was: 【温故知新_26_5】"
                }
            ]
        }
    },
    "zh-u27-l1": {
        "id": "zh-u27-l1",
        "subject": "mandarin",
        "unit": 27,
        "lessonNumber": 1,
        "title": "绿色能源转型与生态文明 (Green Energy & Ecological Policy) (Part 1)",
        "level": "C1",
        "objective": "Comprehensive mastery of 生态文明与绿色发展 (Green Energy & Environmental Policy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「绿色能源转型与生态文明 (Green Energy & Ecological Policy)」（第1部分）的核心句法结构与生态文明与绿色发展 (Green Energy & Environmental Policy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (27.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (27.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (27.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 生态文明与绿色发展 (Green Energy & Environmental Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「生态文明与绿色发展 (Green Energy & Environmental Policy)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (27.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (27.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (27.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「绿色能源转型与生态文明 (Green Energy & Ecological Policy)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (27.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (27.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (27.1.3)。"
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
                    "prompt": "关于「生态文明与绿色发展 (Green Energy & Environmental Policy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 27-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (27.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (27.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (27.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («环保_27_1»):",
                    "acceptedAnswers": [
                        "环保_27_1"
                    ],
                    "explanation": "The target keyword was: 【环保_27_1】"
                }
            ]
        }
    },
    "zh-u27-l2": {
        "id": "zh-u27-l2",
        "subject": "mandarin",
        "unit": 27,
        "lessonNumber": 2,
        "title": "绿色能源转型与生态文明 (Green Energy & Ecological Policy) (Part 2)",
        "level": "C1",
        "objective": "Comprehensive mastery of 生态文明与绿色发展 (Green Energy & Environmental Policy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「绿色能源转型与生态文明 (Green Energy & Ecological Policy)」（第2部分）的核心句法结构与生态文明与绿色发展 (Green Energy & Environmental Policy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (27.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (27.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (27.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 生态文明与绿色发展 (Green Energy & Environmental Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「生态文明与绿色发展 (Green Energy & Environmental Policy)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (27.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (27.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (27.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「绿色能源转型与生态文明 (Green Energy & Ecological Policy)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (27.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (27.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (27.2.3)。"
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
                    "prompt": "关于「生态文明与绿色发展 (Green Energy & Environmental Policy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 27-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (27.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (27.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (27.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («环保_27_2»):",
                    "acceptedAnswers": [
                        "环保_27_2"
                    ],
                    "explanation": "The target keyword was: 【环保_27_2】"
                }
            ]
        }
    },
    "zh-u27-l3": {
        "id": "zh-u27-l3",
        "subject": "mandarin",
        "unit": 27,
        "lessonNumber": 3,
        "title": "绿色能源转型与生态文明 (Green Energy & Ecological Policy) (Part 3)",
        "level": "C1",
        "objective": "Comprehensive mastery of 生态文明与绿色发展 (Green Energy & Environmental Policy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「绿色能源转型与生态文明 (Green Energy & Ecological Policy)」（第3部分）的核心句法结构与生态文明与绿色发展 (Green Energy & Environmental Policy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (27.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (27.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (27.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 生态文明与绿色发展 (Green Energy & Environmental Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「生态文明与绿色发展 (Green Energy & Environmental Policy)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (27.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (27.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (27.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「绿色能源转型与生态文明 (Green Energy & Ecological Policy)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (27.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (27.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (27.3.3)。"
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
                    "prompt": "关于「生态文明与绿色发展 (Green Energy & Environmental Policy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 27-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (27.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (27.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (27.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («环保_27_3»):",
                    "acceptedAnswers": [
                        "环保_27_3"
                    ],
                    "explanation": "The target keyword was: 【环保_27_3】"
                }
            ]
        }
    },
    "zh-u27-l4": {
        "id": "zh-u27-l4",
        "subject": "mandarin",
        "unit": 27,
        "lessonNumber": 4,
        "title": "绿色能源转型与生态文明 (Green Energy & Ecological Policy) (Part 4)",
        "level": "C1",
        "objective": "Comprehensive mastery of 生态文明与绿色发展 (Green Energy & Environmental Policy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「绿色能源转型与生态文明 (Green Energy & Ecological Policy)」（第4部分）的核心句法结构与生态文明与绿色发展 (Green Energy & Environmental Policy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (27.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (27.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (27.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 生态文明与绿色发展 (Green Energy & Environmental Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「生态文明与绿色发展 (Green Energy & Environmental Policy)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (27.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (27.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (27.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「绿色能源转型与生态文明 (Green Energy & Ecological Policy)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (27.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (27.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (27.4.3)。"
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
                    "prompt": "关于「生态文明与绿色发展 (Green Energy & Environmental Policy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 27-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (27.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (27.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (27.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («环保_27_4»):",
                    "acceptedAnswers": [
                        "环保_27_4"
                    ],
                    "explanation": "The target keyword was: 【环保_27_4】"
                }
            ]
        }
    },
    "zh-u27-l5": {
        "id": "zh-u27-l5",
        "subject": "mandarin",
        "unit": 27,
        "lessonNumber": 5,
        "title": "绿色能源转型与生态文明 (Green Energy & Ecological Policy) (Part 5)",
        "level": "C1",
        "objective": "Comprehensive mastery of 生态文明与绿色发展 (Green Energy & Environmental Policy).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「绿色能源转型与生态文明 (Green Energy & Ecological Policy)」（第5部分）的核心句法结构与生态文明与绿色发展 (Green Energy & Environmental Policy)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (27.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (27.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (27.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 生态文明与绿色发展 (Green Energy & Environmental Policy)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「生态文明与绿色发展 (Green Energy & Environmental Policy)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (27.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (27.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (27.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「绿色能源转型与生态文明 (Green Energy & Ecological Policy)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (27.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (27.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (27.5.3)。"
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
                    "prompt": "关于「生态文明与绿色发展 (Green Energy & Environmental Policy)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 27-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (27.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (27.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (27.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR C1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («环保_27_5»):",
                    "acceptedAnswers": [
                        "环保_27_5"
                    ],
                    "explanation": "The target keyword was: 【环保_27_5】"
                }
            ]
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
