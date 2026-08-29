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
