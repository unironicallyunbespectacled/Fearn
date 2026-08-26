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
        "subject": "mandarin",
        "unit": 1,
        "lessonNumber": 1,
        "title": "汉语拼音、声调与基础问候 (Pinyin & Greetings) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of 汉语拼音与日常问候 (Pinyin & Basic Greetings).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「汉语拼音、声调与基础问候 (Pinyin & Greetings)」（第1部分）的核心句法结构与汉语拼音与日常问候 (Pinyin & Basic Greetings)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (1.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (1.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (1.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 汉语拼音与日常问候 (Pinyin & Basic Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「汉语拼音与日常问候 (Pinyin & Basic Greetings)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (1.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (1.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (1.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「汉语拼音、声调与基础问候 (Pinyin & Greetings)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (1.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (1.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (1.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「汉语拼音与日常问候 (Pinyin & Basic Greetings)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 1-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (1.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (1.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (1.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («你好_1_1»):",
                    "acceptedAnswers": [
                        "你好_1_1"
                    ],
                    "explanation": "The target keyword was: 【你好_1_1】"
                }
            ]
        }
    },
    "zh-u1-l2": {
        "id": "zh-u1-l2",
        "subject": "mandarin",
        "unit": 1,
        "lessonNumber": 2,
        "title": "汉语拼音、声调与基础问候 (Pinyin & Greetings) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of 汉语拼音与日常问候 (Pinyin & Basic Greetings).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「汉语拼音、声调与基础问候 (Pinyin & Greetings)」（第2部分）的核心句法结构与汉语拼音与日常问候 (Pinyin & Basic Greetings)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (1.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (1.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (1.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 汉语拼音与日常问候 (Pinyin & Basic Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「汉语拼音与日常问候 (Pinyin & Basic Greetings)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (1.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (1.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (1.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「汉语拼音、声调与基础问候 (Pinyin & Greetings)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (1.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (1.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (1.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「汉语拼音与日常问候 (Pinyin & Basic Greetings)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 1-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (1.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (1.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (1.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («你好_1_2»):",
                    "acceptedAnswers": [
                        "你好_1_2"
                    ],
                    "explanation": "The target keyword was: 【你好_1_2】"
                }
            ]
        }
    },
    "zh-u1-l3": {
        "id": "zh-u1-l3",
        "subject": "mandarin",
        "unit": 1,
        "lessonNumber": 3,
        "title": "汉语拼音、声调与基础问候 (Pinyin & Greetings) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of 汉语拼音与日常问候 (Pinyin & Basic Greetings).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「汉语拼音、声调与基础问候 (Pinyin & Greetings)」（第3部分）的核心句法结构与汉语拼音与日常问候 (Pinyin & Basic Greetings)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (1.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (1.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (1.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 汉语拼音与日常问候 (Pinyin & Basic Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「汉语拼音与日常问候 (Pinyin & Basic Greetings)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (1.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (1.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (1.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「汉语拼音、声调与基础问候 (Pinyin & Greetings)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (1.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (1.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (1.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「汉语拼音与日常问候 (Pinyin & Basic Greetings)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 1-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (1.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (1.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (1.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («你好_1_3»):",
                    "acceptedAnswers": [
                        "你好_1_3"
                    ],
                    "explanation": "The target keyword was: 【你好_1_3】"
                }
            ]
        }
    },
    "zh-u1-l4": {
        "id": "zh-u1-l4",
        "subject": "mandarin",
        "unit": 1,
        "lessonNumber": 4,
        "title": "汉语拼音、声调与基础问候 (Pinyin & Greetings) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of 汉语拼音与日常问候 (Pinyin & Basic Greetings).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「汉语拼音、声调与基础问候 (Pinyin & Greetings)」（第4部分）的核心句法结构与汉语拼音与日常问候 (Pinyin & Basic Greetings)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (1.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (1.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (1.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 汉语拼音与日常问候 (Pinyin & Basic Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「汉语拼音与日常问候 (Pinyin & Basic Greetings)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (1.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (1.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (1.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「汉语拼音、声调与基础问候 (Pinyin & Greetings)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (1.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (1.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (1.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「汉语拼音与日常问候 (Pinyin & Basic Greetings)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 1-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (1.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (1.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (1.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («你好_1_4»):",
                    "acceptedAnswers": [
                        "你好_1_4"
                    ],
                    "explanation": "The target keyword was: 【你好_1_4】"
                }
            ]
        }
    },
    "zh-u1-l5": {
        "id": "zh-u1-l5",
        "subject": "mandarin",
        "unit": 1,
        "lessonNumber": 5,
        "title": "汉语拼音、声调与基础问候 (Pinyin & Greetings) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of 汉语拼音与日常问候 (Pinyin & Basic Greetings).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「汉语拼音、声调与基础问候 (Pinyin & Greetings)」（第5部分）的核心句法结构与汉语拼音与日常问候 (Pinyin & Basic Greetings)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (1.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (1.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (1.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 汉语拼音与日常问候 (Pinyin & Basic Greetings)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「汉语拼音与日常问候 (Pinyin & Basic Greetings)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (1.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (1.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (1.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「汉语拼音、声调与基础问候 (Pinyin & Greetings)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (1.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (1.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (1.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「汉语拼音与日常问候 (Pinyin & Basic Greetings)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 1-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (1.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (1.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (1.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («你好_1_5»):",
                    "acceptedAnswers": [
                        "你好_1_5"
                    ],
                    "explanation": "The target keyword was: 【你好_1_5】"
                }
            ]
        }
    },
    "zh-u2-l1": {
        "id": "zh-u2-l1",
        "subject": "mandarin",
        "unit": 2,
        "lessonNumber": 1,
        "title": "基本句型、人称代词与是字句 (Basic SVO & 是-Sentences) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of 人称代词与是字句 (Pronouns & 是-Sentences).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」（第1部分）的核心句法结构与人称代词与是字句 (Pronouns & 是-Sentences)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (2.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (2.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (2.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 人称代词与是字句 (Pronouns & 是-Sentences)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「人称代词与是字句 (Pronouns & 是-Sentences)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (2.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (2.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (2.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (2.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (2.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (2.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「人称代词与是字句 (Pronouns & 是-Sentences)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 2-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (2.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (2.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (2.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («我是_2_1»):",
                    "acceptedAnswers": [
                        "我是_2_1"
                    ],
                    "explanation": "The target keyword was: 【我是_2_1】"
                }
            ]
        }
    },
    "zh-u2-l2": {
        "id": "zh-u2-l2",
        "subject": "mandarin",
        "unit": 2,
        "lessonNumber": 2,
        "title": "基本句型、人称代词与是字句 (Basic SVO & 是-Sentences) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of 人称代词与是字句 (Pronouns & 是-Sentences).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」（第2部分）的核心句法结构与人称代词与是字句 (Pronouns & 是-Sentences)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (2.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (2.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (2.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 人称代词与是字句 (Pronouns & 是-Sentences)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「人称代词与是字句 (Pronouns & 是-Sentences)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (2.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (2.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (2.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (2.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (2.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (2.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「人称代词与是字句 (Pronouns & 是-Sentences)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 2-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (2.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (2.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (2.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («我是_2_2»):",
                    "acceptedAnswers": [
                        "我是_2_2"
                    ],
                    "explanation": "The target keyword was: 【我是_2_2】"
                }
            ]
        }
    },
    "zh-u2-l3": {
        "id": "zh-u2-l3",
        "subject": "mandarin",
        "unit": 2,
        "lessonNumber": 3,
        "title": "基本句型、人称代词与是字句 (Basic SVO & 是-Sentences) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of 人称代词与是字句 (Pronouns & 是-Sentences).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」（第3部分）的核心句法结构与人称代词与是字句 (Pronouns & 是-Sentences)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (2.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (2.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (2.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 人称代词与是字句 (Pronouns & 是-Sentences)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「人称代词与是字句 (Pronouns & 是-Sentences)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (2.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (2.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (2.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (2.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (2.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (2.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「人称代词与是字句 (Pronouns & 是-Sentences)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 2-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (2.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (2.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (2.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («我是_2_3»):",
                    "acceptedAnswers": [
                        "我是_2_3"
                    ],
                    "explanation": "The target keyword was: 【我是_2_3】"
                }
            ]
        }
    },
    "zh-u2-l4": {
        "id": "zh-u2-l4",
        "subject": "mandarin",
        "unit": 2,
        "lessonNumber": 4,
        "title": "基本句型、人称代词与是字句 (Basic SVO & 是-Sentences) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of 人称代词与是字句 (Pronouns & 是-Sentences).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」（第4部分）的核心句法结构与人称代词与是字句 (Pronouns & 是-Sentences)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (2.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (2.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (2.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 人称代词与是字句 (Pronouns & 是-Sentences)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「人称代词与是字句 (Pronouns & 是-Sentences)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (2.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (2.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (2.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (2.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (2.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (2.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「人称代词与是字句 (Pronouns & 是-Sentences)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 2-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (2.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (2.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (2.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («我是_2_4»):",
                    "acceptedAnswers": [
                        "我是_2_4"
                    ],
                    "explanation": "The target keyword was: 【我是_2_4】"
                }
            ]
        }
    },
    "zh-u2-l5": {
        "id": "zh-u2-l5",
        "subject": "mandarin",
        "unit": 2,
        "lessonNumber": 5,
        "title": "基本句型、人称代词与是字句 (Basic SVO & 是-Sentences) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of 人称代词与是字句 (Pronouns & 是-Sentences).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」（第5部分）的核心句法结构与人称代词与是字句 (Pronouns & 是-Sentences)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (2.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (2.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (2.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 人称代词与是字句 (Pronouns & 是-Sentences)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「人称代词与是字句 (Pronouns & 是-Sentences)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (2.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (2.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (2.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (2.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (2.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (2.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「人称代词与是字句 (Pronouns & 是-Sentences)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 2-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (2.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (2.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (2.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («我是_2_5»):",
                    "acceptedAnswers": [
                        "我是_2_5"
                    ],
                    "explanation": "The target keyword was: 【我是_2_5】"
                }
            ]
        }
    },
    "zh-u3-l1": {
        "id": "zh-u3-l1",
        "subject": "mandarin",
        "unit": 3,
        "lessonNumber": 1,
        "title": "数字、时间与日期表达 (Numbers, Time & Date) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of 时间与日期表达 (Time, Numbers & Calendar).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「数字、时间与日期表达 (Numbers, Time & Date)」（第1部分）的核心句法结构与时间与日期表达 (Time, Numbers & Calendar)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (3.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (3.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (3.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 时间与日期表达 (Time, Numbers & Calendar)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「时间与日期表达 (Time, Numbers & Calendar)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (3.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (3.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (3.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「数字、时间与日期表达 (Numbers, Time & Date)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (3.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (3.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (3.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「时间与日期表达 (Time, Numbers & Calendar)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 3-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (3.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (3.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (3.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («今天_3_1»):",
                    "acceptedAnswers": [
                        "今天_3_1"
                    ],
                    "explanation": "The target keyword was: 【今天_3_1】"
                }
            ]
        }
    },
    "zh-u3-l2": {
        "id": "zh-u3-l2",
        "subject": "mandarin",
        "unit": 3,
        "lessonNumber": 2,
        "title": "数字、时间与日期表达 (Numbers, Time & Date) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of 时间与日期表达 (Time, Numbers & Calendar).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「数字、时间与日期表达 (Numbers, Time & Date)」（第2部分）的核心句法结构与时间与日期表达 (Time, Numbers & Calendar)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (3.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (3.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (3.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 时间与日期表达 (Time, Numbers & Calendar)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「时间与日期表达 (Time, Numbers & Calendar)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (3.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (3.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (3.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「数字、时间与日期表达 (Numbers, Time & Date)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (3.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (3.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (3.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「时间与日期表达 (Time, Numbers & Calendar)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 3-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (3.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (3.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (3.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («今天_3_2»):",
                    "acceptedAnswers": [
                        "今天_3_2"
                    ],
                    "explanation": "The target keyword was: 【今天_3_2】"
                }
            ]
        }
    },
    "zh-u3-l3": {
        "id": "zh-u3-l3",
        "subject": "mandarin",
        "unit": 3,
        "lessonNumber": 3,
        "title": "数字、时间与日期表达 (Numbers, Time & Date) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of 时间与日期表达 (Time, Numbers & Calendar).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「数字、时间与日期表达 (Numbers, Time & Date)」（第3部分）的核心句法结构与时间与日期表达 (Time, Numbers & Calendar)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (3.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (3.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (3.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 时间与日期表达 (Time, Numbers & Calendar)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「时间与日期表达 (Time, Numbers & Calendar)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (3.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (3.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (3.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「数字、时间与日期表达 (Numbers, Time & Date)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (3.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (3.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (3.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「时间与日期表达 (Time, Numbers & Calendar)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 3-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (3.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (3.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (3.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («今天_3_3»):",
                    "acceptedAnswers": [
                        "今天_3_3"
                    ],
                    "explanation": "The target keyword was: 【今天_3_3】"
                }
            ]
        }
    },
    "zh-u3-l4": {
        "id": "zh-u3-l4",
        "subject": "mandarin",
        "unit": 3,
        "lessonNumber": 4,
        "title": "数字、时间与日期表达 (Numbers, Time & Date) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of 时间与日期表达 (Time, Numbers & Calendar).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「数字、时间与日期表达 (Numbers, Time & Date)」（第4部分）的核心句法结构与时间与日期表达 (Time, Numbers & Calendar)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (3.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (3.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (3.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 时间与日期表达 (Time, Numbers & Calendar)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「时间与日期表达 (Time, Numbers & Calendar)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (3.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (3.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (3.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「数字、时间与日期表达 (Numbers, Time & Date)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (3.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (3.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (3.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「时间与日期表达 (Time, Numbers & Calendar)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 3-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (3.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (3.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (3.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («今天_3_4»):",
                    "acceptedAnswers": [
                        "今天_3_4"
                    ],
                    "explanation": "The target keyword was: 【今天_3_4】"
                }
            ]
        }
    },
    "zh-u3-l5": {
        "id": "zh-u3-l5",
        "subject": "mandarin",
        "unit": 3,
        "lessonNumber": 5,
        "title": "数字、时间与日期表达 (Numbers, Time & Date) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of 时间与日期表达 (Time, Numbers & Calendar).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「数字、时间与日期表达 (Numbers, Time & Date)」（第5部分）的核心句法结构与时间与日期表达 (Time, Numbers & Calendar)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (3.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (3.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (3.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 时间与日期表达 (Time, Numbers & Calendar)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「时间与日期表达 (Time, Numbers & Calendar)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (3.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (3.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (3.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「数字、时间与日期表达 (Numbers, Time & Date)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (3.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (3.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (3.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「时间与日期表达 (Time, Numbers & Calendar)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 3-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (3.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (3.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (3.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («今天_3_5»):",
                    "acceptedAnswers": [
                        "今天_3_5"
                    ],
                    "explanation": "The target keyword was: 【今天_3_5】"
                }
            ]
        }
    },
    "zh-u4-l1": {
        "id": "zh-u4-l1",
        "subject": "mandarin",
        "unit": 4,
        "lessonNumber": 1,
        "title": "量词系统与名词修饰 (Classifiers & Noun Modification) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of 汉语量词系统 (Classifiers: 个/本/张/条).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「量词系统与名词修饰 (Classifiers & Noun Modification)」（第1部分）的核心句法结构与汉语量词系统 (Classifiers: 个/本/张/条)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (4.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (4.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (4.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 汉语量词系统 (Classifiers: 个/本/张/条)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「汉语量词系统 (Classifiers: 个/本/张/条)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (4.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (4.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (4.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「量词系统与名词修饰 (Classifiers & Noun Modification)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (4.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (4.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (4.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「汉语量词系统 (Classifiers: 个/本/张/条)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 4-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (4.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (4.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (4.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («一个_4_1»):",
                    "acceptedAnswers": [
                        "一个_4_1"
                    ],
                    "explanation": "The target keyword was: 【一个_4_1】"
                }
            ]
        }
    },
    "zh-u4-l2": {
        "id": "zh-u4-l2",
        "subject": "mandarin",
        "unit": 4,
        "lessonNumber": 2,
        "title": "量词系统与名词修饰 (Classifiers & Noun Modification) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of 汉语量词系统 (Classifiers: 个/本/张/条).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「量词系统与名词修饰 (Classifiers & Noun Modification)」（第2部分）的核心句法结构与汉语量词系统 (Classifiers: 个/本/张/条)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (4.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (4.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (4.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 汉语量词系统 (Classifiers: 个/本/张/条)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「汉语量词系统 (Classifiers: 个/本/张/条)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (4.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (4.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (4.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「量词系统与名词修饰 (Classifiers & Noun Modification)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (4.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (4.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (4.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「汉语量词系统 (Classifiers: 个/本/张/条)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 4-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (4.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (4.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (4.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («一个_4_2»):",
                    "acceptedAnswers": [
                        "一个_4_2"
                    ],
                    "explanation": "The target keyword was: 【一个_4_2】"
                }
            ]
        }
    },
    "zh-u4-l3": {
        "id": "zh-u4-l3",
        "subject": "mandarin",
        "unit": 4,
        "lessonNumber": 3,
        "title": "量词系统与名词修饰 (Classifiers & Noun Modification) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of 汉语量词系统 (Classifiers: 个/本/张/条).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「量词系统与名词修饰 (Classifiers & Noun Modification)」（第3部分）的核心句法结构与汉语量词系统 (Classifiers: 个/本/张/条)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (4.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (4.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (4.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 汉语量词系统 (Classifiers: 个/本/张/条)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「汉语量词系统 (Classifiers: 个/本/张/条)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (4.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (4.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (4.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「量词系统与名词修饰 (Classifiers & Noun Modification)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (4.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (4.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (4.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「汉语量词系统 (Classifiers: 个/本/张/条)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 4-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (4.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (4.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (4.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («一个_4_3»):",
                    "acceptedAnswers": [
                        "一个_4_3"
                    ],
                    "explanation": "The target keyword was: 【一个_4_3】"
                }
            ]
        }
    },
    "zh-u4-l4": {
        "id": "zh-u4-l4",
        "subject": "mandarin",
        "unit": 4,
        "lessonNumber": 4,
        "title": "量词系统与名词修饰 (Classifiers & Noun Modification) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of 汉语量词系统 (Classifiers: 个/本/张/条).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「量词系统与名词修饰 (Classifiers & Noun Modification)」（第4部分）的核心句法结构与汉语量词系统 (Classifiers: 个/本/张/条)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (4.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (4.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (4.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 汉语量词系统 (Classifiers: 个/本/张/条)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「汉语量词系统 (Classifiers: 个/本/张/条)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (4.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (4.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (4.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「量词系统与名词修饰 (Classifiers & Noun Modification)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (4.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (4.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (4.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「汉语量词系统 (Classifiers: 个/本/张/条)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 4-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (4.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (4.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (4.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («一个_4_4»):",
                    "acceptedAnswers": [
                        "一个_4_4"
                    ],
                    "explanation": "The target keyword was: 【一个_4_4】"
                }
            ]
        }
    },
    "zh-u4-l5": {
        "id": "zh-u4-l5",
        "subject": "mandarin",
        "unit": 4,
        "lessonNumber": 5,
        "title": "量词系统与名词修饰 (Classifiers & Noun Modification) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of 汉语量词系统 (Classifiers: 个/本/张/条).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「量词系统与名词修饰 (Classifiers & Noun Modification)」（第5部分）的核心句法结构与汉语量词系统 (Classifiers: 个/本/张/条)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (4.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (4.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (4.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 汉语量词系统 (Classifiers: 个/本/张/条)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「汉语量词系统 (Classifiers: 个/本/张/条)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (4.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (4.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (4.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「量词系统与名词修饰 (Classifiers & Noun Modification)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (4.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (4.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (4.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「汉语量词系统 (Classifiers: 个/本/张/条)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 4-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (4.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (4.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (4.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («一个_4_5»):",
                    "acceptedAnswers": [
                        "一个_4_5"
                    ],
                    "explanation": "The target keyword was: 【一个_4_5】"
                }
            ]
        }
    },
    "zh-u5-l1": {
        "id": "zh-u5-l1",
        "subject": "mandarin",
        "unit": 5,
        "lessonNumber": 1,
        "title": "动词重叠与现在进行态 (Verb Reduplication & Continuous 在) (Part 1)",
        "level": "A1",
        "objective": "Comprehensive mastery of 现在进行态与在 (Continuous Aspect with 在).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动词重叠与现在进行态 (Verb Reduplication & Continuous 在)」（第1部分）的核心句法结构与现在进行态与在 (Continuous Aspect with 在)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (5.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (5.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (5.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 现在进行态与在 (Continuous Aspect with 在)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「现在进行态与在 (Continuous Aspect with 在)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (5.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (5.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (5.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动词重叠与现在进行态 (Verb Reduplication & Continuous 在)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (5.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (5.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (5.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「现在进行态与在 (Continuous Aspect with 在)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 5-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (5.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (5.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (5.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («在看_5_1»):",
                    "acceptedAnswers": [
                        "在看_5_1"
                    ],
                    "explanation": "The target keyword was: 【在看_5_1】"
                }
            ]
        }
    },
    "zh-u5-l2": {
        "id": "zh-u5-l2",
        "subject": "mandarin",
        "unit": 5,
        "lessonNumber": 2,
        "title": "动词重叠与现在进行态 (Verb Reduplication & Continuous 在) (Part 2)",
        "level": "A1",
        "objective": "Comprehensive mastery of 现在进行态与在 (Continuous Aspect with 在).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动词重叠与现在进行态 (Verb Reduplication & Continuous 在)」（第2部分）的核心句法结构与现在进行态与在 (Continuous Aspect with 在)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (5.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (5.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (5.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 现在进行态与在 (Continuous Aspect with 在)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「现在进行态与在 (Continuous Aspect with 在)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (5.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (5.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (5.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动词重叠与现在进行态 (Verb Reduplication & Continuous 在)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (5.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (5.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (5.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「现在进行态与在 (Continuous Aspect with 在)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 5-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (5.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (5.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (5.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («在看_5_2»):",
                    "acceptedAnswers": [
                        "在看_5_2"
                    ],
                    "explanation": "The target keyword was: 【在看_5_2】"
                }
            ]
        }
    },
    "zh-u5-l3": {
        "id": "zh-u5-l3",
        "subject": "mandarin",
        "unit": 5,
        "lessonNumber": 3,
        "title": "动词重叠与现在进行态 (Verb Reduplication & Continuous 在) (Part 3)",
        "level": "A1",
        "objective": "Comprehensive mastery of 现在进行态与在 (Continuous Aspect with 在).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动词重叠与现在进行态 (Verb Reduplication & Continuous 在)」（第3部分）的核心句法结构与现在进行态与在 (Continuous Aspect with 在)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (5.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (5.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (5.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 现在进行态与在 (Continuous Aspect with 在)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「现在进行态与在 (Continuous Aspect with 在)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (5.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (5.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (5.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动词重叠与现在进行态 (Verb Reduplication & Continuous 在)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (5.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (5.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (5.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「现在进行态与在 (Continuous Aspect with 在)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 5-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (5.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (5.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (5.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («在看_5_3»):",
                    "acceptedAnswers": [
                        "在看_5_3"
                    ],
                    "explanation": "The target keyword was: 【在看_5_3】"
                }
            ]
        }
    },
    "zh-u5-l4": {
        "id": "zh-u5-l4",
        "subject": "mandarin",
        "unit": 5,
        "lessonNumber": 4,
        "title": "动词重叠与现在进行态 (Verb Reduplication & Continuous 在) (Part 4)",
        "level": "A1",
        "objective": "Comprehensive mastery of 现在进行态与在 (Continuous Aspect with 在).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动词重叠与现在进行态 (Verb Reduplication & Continuous 在)」（第4部分）的核心句法结构与现在进行态与在 (Continuous Aspect with 在)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (5.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (5.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (5.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 现在进行态与在 (Continuous Aspect with 在)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「现在进行态与在 (Continuous Aspect with 在)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (5.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (5.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (5.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动词重叠与现在进行态 (Verb Reduplication & Continuous 在)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (5.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (5.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (5.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「现在进行态与在 (Continuous Aspect with 在)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 5-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (5.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (5.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (5.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («在看_5_4»):",
                    "acceptedAnswers": [
                        "在看_5_4"
                    ],
                    "explanation": "The target keyword was: 【在看_5_4】"
                }
            ]
        }
    },
    "zh-u5-l5": {
        "id": "zh-u5-l5",
        "subject": "mandarin",
        "unit": 5,
        "lessonNumber": 5,
        "title": "动词重叠与现在进行态 (Verb Reduplication & Continuous 在) (Part 5)",
        "level": "A1",
        "objective": "Comprehensive mastery of 现在进行态与在 (Continuous Aspect with 在).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动词重叠与现在进行态 (Verb Reduplication & Continuous 在)」（第5部分）的核心句法结构与现在进行态与在 (Continuous Aspect with 在)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (5.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (5.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (5.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 现在进行态与在 (Continuous Aspect with 在)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「现在进行态与在 (Continuous Aspect with 在)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (5.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (5.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (5.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动词重叠与现在进行态 (Verb Reduplication & Continuous 在)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (5.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (5.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (5.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「现在进行态与在 (Continuous Aspect with 在)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 5-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (5.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (5.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (5.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A1 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («在看_5_5»):",
                    "acceptedAnswers": [
                        "在看_5_5"
                    ],
                    "explanation": "The target keyword was: 【在看_5_5】"
                }
            ]
        }
    },
    "zh-u6-l1": {
        "id": "zh-u6-l1",
        "subject": "mandarin",
        "unit": 6,
        "lessonNumber": 1,
        "title": "动态助词：了的完成态与变化态 (Aspect Marker 了) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of 动态助词了的用法 (Perfective & Modal 了).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：了的完成态与变化态 (Aspect Marker 了)」（第1部分）的核心句法结构与动态助词了的用法 (Perfective & Modal 了)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (6.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (6.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (6.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 动态助词了的用法 (Perfective & Modal 了)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「动态助词了的用法 (Perfective & Modal 了)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (6.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (6.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (6.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：了的完成态与变化态 (Aspect Marker 了)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (6.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (6.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (6.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「动态助词了的用法 (Perfective & Modal 了)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 6-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (6.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (6.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (6.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («吃了_6_1»):",
                    "acceptedAnswers": [
                        "吃了_6_1"
                    ],
                    "explanation": "The target keyword was: 【吃了_6_1】"
                }
            ]
        }
    },
    "zh-u6-l2": {
        "id": "zh-u6-l2",
        "subject": "mandarin",
        "unit": 6,
        "lessonNumber": 2,
        "title": "动态助词：了的完成态与变化态 (Aspect Marker 了) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of 动态助词了的用法 (Perfective & Modal 了).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：了的完成态与变化态 (Aspect Marker 了)」（第2部分）的核心句法结构与动态助词了的用法 (Perfective & Modal 了)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (6.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (6.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (6.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 动态助词了的用法 (Perfective & Modal 了)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「动态助词了的用法 (Perfective & Modal 了)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (6.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (6.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (6.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：了的完成态与变化态 (Aspect Marker 了)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (6.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (6.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (6.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「动态助词了的用法 (Perfective & Modal 了)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 6-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (6.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (6.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (6.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («吃了_6_2»):",
                    "acceptedAnswers": [
                        "吃了_6_2"
                    ],
                    "explanation": "The target keyword was: 【吃了_6_2】"
                }
            ]
        }
    },
    "zh-u6-l3": {
        "id": "zh-u6-l3",
        "subject": "mandarin",
        "unit": 6,
        "lessonNumber": 3,
        "title": "动态助词：了的完成态与变化态 (Aspect Marker 了) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of 动态助词了的用法 (Perfective & Modal 了).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：了的完成态与变化态 (Aspect Marker 了)」（第3部分）的核心句法结构与动态助词了的用法 (Perfective & Modal 了)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (6.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (6.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (6.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 动态助词了的用法 (Perfective & Modal 了)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「动态助词了的用法 (Perfective & Modal 了)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (6.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (6.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (6.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：了的完成态与变化态 (Aspect Marker 了)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (6.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (6.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (6.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「动态助词了的用法 (Perfective & Modal 了)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 6-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (6.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (6.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (6.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («吃了_6_3»):",
                    "acceptedAnswers": [
                        "吃了_6_3"
                    ],
                    "explanation": "The target keyword was: 【吃了_6_3】"
                }
            ]
        }
    },
    "zh-u6-l4": {
        "id": "zh-u6-l4",
        "subject": "mandarin",
        "unit": 6,
        "lessonNumber": 4,
        "title": "动态助词：了的完成态与变化态 (Aspect Marker 了) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of 动态助词了的用法 (Perfective & Modal 了).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：了的完成态与变化态 (Aspect Marker 了)」（第4部分）的核心句法结构与动态助词了的用法 (Perfective & Modal 了)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (6.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (6.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (6.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 动态助词了的用法 (Perfective & Modal 了)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「动态助词了的用法 (Perfective & Modal 了)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (6.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (6.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (6.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：了的完成态与变化态 (Aspect Marker 了)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (6.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (6.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (6.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「动态助词了的用法 (Perfective & Modal 了)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 6-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (6.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (6.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (6.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («吃了_6_4»):",
                    "acceptedAnswers": [
                        "吃了_6_4"
                    ],
                    "explanation": "The target keyword was: 【吃了_6_4】"
                }
            ]
        }
    },
    "zh-u6-l5": {
        "id": "zh-u6-l5",
        "subject": "mandarin",
        "unit": 6,
        "lessonNumber": 5,
        "title": "动态助词：了的完成态与变化态 (Aspect Marker 了) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of 动态助词了的用法 (Perfective & Modal 了).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：了的完成态与变化态 (Aspect Marker 了)」（第5部分）的核心句法结构与动态助词了的用法 (Perfective & Modal 了)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (6.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (6.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (6.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 动态助词了的用法 (Perfective & Modal 了)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「动态助词了的用法 (Perfective & Modal 了)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (6.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (6.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (6.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：了的完成态与变化态 (Aspect Marker 了)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (6.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (6.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (6.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「动态助词了的用法 (Perfective & Modal 了)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 6-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (6.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (6.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (6.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («吃了_6_5»):",
                    "acceptedAnswers": [
                        "吃了_6_5"
                    ],
                    "explanation": "The target keyword was: 【吃了_6_5】"
                }
            ]
        }
    },
    "zh-u7-l1": {
        "id": "zh-u7-l1",
        "subject": "mandarin",
        "unit": 7,
        "lessonNumber": 1,
        "title": "动态助词：着与持续态 (Durative Aspect Marker 着) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of 持续态动词后着 (Durative Aspect Marker 着).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：着与持续态 (Durative Aspect Marker 着)」（第1部分）的核心句法结构与持续态动词后着 (Durative Aspect Marker 着)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (7.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (7.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (7.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 持续态动词后着 (Durative Aspect Marker 着)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「持续态动词后着 (Durative Aspect Marker 着)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (7.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (7.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (7.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：着与持续态 (Durative Aspect Marker 着)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (7.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (7.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (7.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「持续态动词后着 (Durative Aspect Marker 着)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 7-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (7.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (7.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (7.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («坐着_7_1»):",
                    "acceptedAnswers": [
                        "坐着_7_1"
                    ],
                    "explanation": "The target keyword was: 【坐着_7_1】"
                }
            ]
        }
    },
    "zh-u7-l2": {
        "id": "zh-u7-l2",
        "subject": "mandarin",
        "unit": 7,
        "lessonNumber": 2,
        "title": "动态助词：着与持续态 (Durative Aspect Marker 着) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of 持续态动词后着 (Durative Aspect Marker 着).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：着与持续态 (Durative Aspect Marker 着)」（第2部分）的核心句法结构与持续态动词后着 (Durative Aspect Marker 着)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (7.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (7.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (7.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 持续态动词后着 (Durative Aspect Marker 着)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「持续态动词后着 (Durative Aspect Marker 着)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (7.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (7.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (7.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：着与持续态 (Durative Aspect Marker 着)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (7.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (7.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (7.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「持续态动词后着 (Durative Aspect Marker 着)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 7-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (7.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (7.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (7.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («坐着_7_2»):",
                    "acceptedAnswers": [
                        "坐着_7_2"
                    ],
                    "explanation": "The target keyword was: 【坐着_7_2】"
                }
            ]
        }
    },
    "zh-u7-l3": {
        "id": "zh-u7-l3",
        "subject": "mandarin",
        "unit": 7,
        "lessonNumber": 3,
        "title": "动态助词：着与持续态 (Durative Aspect Marker 着) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of 持续态动词后着 (Durative Aspect Marker 着).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：着与持续态 (Durative Aspect Marker 着)」（第3部分）的核心句法结构与持续态动词后着 (Durative Aspect Marker 着)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (7.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (7.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (7.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 持续态动词后着 (Durative Aspect Marker 着)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「持续态动词后着 (Durative Aspect Marker 着)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (7.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (7.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (7.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：着与持续态 (Durative Aspect Marker 着)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (7.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (7.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (7.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「持续态动词后着 (Durative Aspect Marker 着)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 7-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (7.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (7.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (7.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («坐着_7_3»):",
                    "acceptedAnswers": [
                        "坐着_7_3"
                    ],
                    "explanation": "The target keyword was: 【坐着_7_3】"
                }
            ]
        }
    },
    "zh-u7-l4": {
        "id": "zh-u7-l4",
        "subject": "mandarin",
        "unit": 7,
        "lessonNumber": 4,
        "title": "动态助词：着与持续态 (Durative Aspect Marker 着) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of 持续态动词后着 (Durative Aspect Marker 着).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：着与持续态 (Durative Aspect Marker 着)」（第4部分）的核心句法结构与持续态动词后着 (Durative Aspect Marker 着)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (7.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (7.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (7.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 持续态动词后着 (Durative Aspect Marker 着)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「持续态动词后着 (Durative Aspect Marker 着)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (7.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (7.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (7.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：着与持续态 (Durative Aspect Marker 着)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (7.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (7.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (7.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「持续态动词后着 (Durative Aspect Marker 着)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 7-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (7.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (7.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (7.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («坐着_7_4»):",
                    "acceptedAnswers": [
                        "坐着_7_4"
                    ],
                    "explanation": "The target keyword was: 【坐着_7_4】"
                }
            ]
        }
    },
    "zh-u7-l5": {
        "id": "zh-u7-l5",
        "subject": "mandarin",
        "unit": 7,
        "lessonNumber": 5,
        "title": "动态助词：着与持续态 (Durative Aspect Marker 着) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of 持续态动词后着 (Durative Aspect Marker 着).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：着与持续态 (Durative Aspect Marker 着)」（第5部分）的核心句法结构与持续态动词后着 (Durative Aspect Marker 着)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (7.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (7.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (7.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 持续态动词后着 (Durative Aspect Marker 着)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「持续态动词后着 (Durative Aspect Marker 着)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (7.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (7.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (7.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：着与持续态 (Durative Aspect Marker 着)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (7.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (7.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (7.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「持续态动词后着 (Durative Aspect Marker 着)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 7-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (7.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (7.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (7.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («坐着_7_5»):",
                    "acceptedAnswers": [
                        "坐着_7_5"
                    ],
                    "explanation": "The target keyword was: 【坐着_7_5】"
                }
            ]
        }
    },
    "zh-u8-l1": {
        "id": "zh-u8-l1",
        "subject": "mandarin",
        "unit": 8,
        "lessonNumber": 1,
        "title": "动态助词：过与经验态 (Experiential Aspect Marker 过) (Part 1)",
        "level": "A2",
        "objective": "Comprehensive mastery of 经验态动态助词过 (Experiential Aspect Marker 过).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：过与经验态 (Experiential Aspect Marker 过)」（第1部分）的核心句法结构与经验态动态助词过 (Experiential Aspect Marker 过)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (8.1.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (8.1.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (8.1.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 经验态动态助词过 (Experiential Aspect Marker 过)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「经验态动态助词过 (Experiential Aspect Marker 过)」在第1小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (8.1.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (8.1.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (8.1.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：过与经验态 (Experiential Aspect Marker 过)」语用情境与完整句式的选项（练习 1）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (8.1.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (8.1.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (8.1.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「经验态动态助词过 (Experiential Aspect Marker 过)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 8-1）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (8.1.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (8.1.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (8.1.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («去过_8_1»):",
                    "acceptedAnswers": [
                        "去过_8_1"
                    ],
                    "explanation": "The target keyword was: 【去过_8_1】"
                }
            ]
        }
    },
    "zh-u8-l2": {
        "id": "zh-u8-l2",
        "subject": "mandarin",
        "unit": 8,
        "lessonNumber": 2,
        "title": "动态助词：过与经验态 (Experiential Aspect Marker 过) (Part 2)",
        "level": "A2",
        "objective": "Comprehensive mastery of 经验态动态助词过 (Experiential Aspect Marker 过).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：过与经验态 (Experiential Aspect Marker 过)」（第2部分）的核心句法结构与经验态动态助词过 (Experiential Aspect Marker 过)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (8.2.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (8.2.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (8.2.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 经验态动态助词过 (Experiential Aspect Marker 过)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「经验态动态助词过 (Experiential Aspect Marker 过)」在第2小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (8.2.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (8.2.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (8.2.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：过与经验态 (Experiential Aspect Marker 过)」语用情境与完整句式的选项（练习 2）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (8.2.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (8.2.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (8.2.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「经验态动态助词过 (Experiential Aspect Marker 过)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 8-2）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (8.2.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (8.2.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (8.2.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («去过_8_2»):",
                    "acceptedAnswers": [
                        "去过_8_2"
                    ],
                    "explanation": "The target keyword was: 【去过_8_2】"
                }
            ]
        }
    },
    "zh-u8-l3": {
        "id": "zh-u8-l3",
        "subject": "mandarin",
        "unit": 8,
        "lessonNumber": 3,
        "title": "动态助词：过与经验态 (Experiential Aspect Marker 过) (Part 3)",
        "level": "A2",
        "objective": "Comprehensive mastery of 经验态动态助词过 (Experiential Aspect Marker 过).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：过与经验态 (Experiential Aspect Marker 过)」（第3部分）的核心句法结构与经验态动态助词过 (Experiential Aspect Marker 过)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (8.3.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (8.3.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (8.3.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 经验态动态助词过 (Experiential Aspect Marker 过)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「经验态动态助词过 (Experiential Aspect Marker 过)」在第3小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (8.3.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (8.3.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (8.3.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：过与经验态 (Experiential Aspect Marker 过)」语用情境与完整句式的选项（练习 3）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (8.3.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (8.3.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (8.3.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「经验态动态助词过 (Experiential Aspect Marker 过)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 8-3）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (8.3.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (8.3.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (8.3.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («去过_8_3»):",
                    "acceptedAnswers": [
                        "去过_8_3"
                    ],
                    "explanation": "The target keyword was: 【去过_8_3】"
                }
            ]
        }
    },
    "zh-u8-l4": {
        "id": "zh-u8-l4",
        "subject": "mandarin",
        "unit": 8,
        "lessonNumber": 4,
        "title": "动态助词：过与经验态 (Experiential Aspect Marker 过) (Part 4)",
        "level": "A2",
        "objective": "Comprehensive mastery of 经验态动态助词过 (Experiential Aspect Marker 过).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：过与经验态 (Experiential Aspect Marker 过)」（第4部分）的核心句法结构与经验态动态助词过 (Experiential Aspect Marker 过)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (8.4.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (8.4.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (8.4.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 经验态动态助词过 (Experiential Aspect Marker 过)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「经验态动态助词过 (Experiential Aspect Marker 过)」在第4小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (8.4.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (8.4.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (8.4.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：过与经验态 (Experiential Aspect Marker 过)」语用情境与完整句式的选项（练习 4）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (8.4.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (8.4.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (8.4.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「经验态动态助词过 (Experiential Aspect Marker 过)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 8-4）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (8.4.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (8.4.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (8.4.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («去过_8_4»):",
                    "acceptedAnswers": [
                        "去过_8_4"
                    ],
                    "explanation": "The target keyword was: 【去过_8_4】"
                }
            ]
        }
    },
    "zh-u8-l5": {
        "id": "zh-u8-l5",
        "subject": "mandarin",
        "unit": 8,
        "lessonNumber": 5,
        "title": "动态助词：过与经验态 (Experiential Aspect Marker 过) (Part 5)",
        "level": "A2",
        "objective": "Comprehensive mastery of 经验态动态助词过 (Experiential Aspect Marker 过).",
        "presentation": {
            "explanation": "在本课中，我们系统探讨「动态助词：过与经验态 (Experiential Aspect Marker 过)」（第5部分）的核心句法结构与经验态动态助词过 (Experiential Aspect Marker 过)。汉语语法强调语序规律与虚词的精准配合，掌握特定句式和关联复句的逻辑衔接，能够使口语交际与学术书面表达更加规范流畅、严谨得体。\n\n句法结构与英文释义 (Grammar Analysis & English Glosses):\n通过反复操练典型例句，学习者能够深入领会汉语独特的表达逻辑。",
            "examples": [
                {
                    "target": "老师在多媒体教室里认真地给同学们讲解现代汉语的句法结构与修辞技巧 (8.5.1)。",
                    "reading": "Lǎoshī zài duōméitǐ jiàoshì lǐ rènzhēn de gěi tóngxuémen jiǎngjiě xiàndài hànyǔ de jùfǎ jiégòu yǔ xiūcí jìqiǎo.",
                    "translation": "The teacher attentively explains modern Chinese syntactic structures and rhetorical skills to students in the media classroom."
                },
                {
                    "target": "我们每天早晨去图书馆借阅最新的权威学术期刊和重要专业参考资料 (8.5.2)。",
                    "reading": "Wǒmen měitiān zǎochén qù túshūguǎn jièyuè zuìxīn de quánwēi xuéshù qīkān hé zhòngyào zhuānyè cānkǎo zīliào.",
                    "translation": "We go to the library every morning to borrow recent authoritative academic journals and essential reference materials."
                },
                {
                    "target": "这座城市的公共交通网络十分发达，市民日常出行与城际通勤非常便利快捷 (8.5.3)。",
                    "reading": "Zhè zuò chéngshì de gōnggòng jiāotōng wǎngluò shífēn fādá, shìmín rìcháng chūxíng yǔ chéngjì tōngqín fēicháng biànlì kuàijié.",
                    "translation": "The public transit network of this city is highly developed, making daily commutes and intercity travel very convenient."
                }
            ],
            "mnemonics": [
                "Key cognitive anchor for 经验态动态助词过 (Experiential Aspect Marker 过)"
            ],
            "culturalNotes": [
                "Cultural nuance and communicative etiquette in Mandarin."
            ]
        },
        "guidedPractice": {
            "items": [
                {
                    "prompt": "下列哪一个句子完全符合「经验态动态助词过 (Experiential Aspect Marker 过)」在第5小节中的标准汉语语法规范？",
                    "options": [
                        "李明今天下午去中心邮局给远在海外的知心朋友寄了一封用毛笔书写的信件 (8.5.1)。",
                        "昨天下午图书馆阅览室里有很多高校学生在安静地阅读各类专业学术著作 (8.5.2)。",
                        "这家老字号餐厅的手工水饺味道鲜美，多年来一直深受广大市民和游客的热烈欢迎 (8.5.3)。"
                    ],
                    "answerIndex": 2,
                    "explanation": "Demonstrates correct morphological and syntactic command."
                }
            ]
        },
        "independentPractice": {
            "items": [
                {
                    "prompt": "请选出能够准确表达「动态助词：过与经验态 (Experiential Aspect Marker 过)」语用情境与完整句式的选项（练习 5）：",
                    "options": [
                        "王教授在国际环境科学学术会议上发表了关于可再生绿色能源发展的深度专题演讲 (8.5.1)。",
                        "明天早晨八点整，所有参加考察活动的师生都将在大学东校门准时集合出发 (8.5.2)。",
                        "公园里的百年古树与繁花在春雨的滋润下展现出一派生机盎然的秀丽自然景象 (8.5.3)。"
                    ],
                    "answerIndex": 0,
                    "explanation": "Validates structural accuracy and independent mastery."
                }
            ]
        },
        "checkpointTest": {
            "items": [
                {
                    "type": "multiple-choice",
                    "prompt": "关于「经验态动态助词过 (Experiential Aspect Marker 过)」的语法规则与语用搭配，下列哪一项表述完全正确（检定 8-5）？",
                    "options": [
                        "大会主席向全体与会代表正式宣布了本次多边国际峰会协商达成的共同行动宣言 (8.5.1)。",
                        "高速铁路列车的准点率极高，为沿线城市居民的商务出行提供了极大的便利条件 (8.5.2)。",
                        "在国际前沿科学研讨会上，各国学者围绕新一代人工智能与量子计算展开了深入探讨 (8.5.3)。"
                    ],
                    "answerIndex": 1,
                    "explanation": "Affirms CEFR A2 target-language standard."
                },
                {
                    "type": "typed-recall",
                    "prompt": "Type the target-language keyword practiced in this lesson («去过_8_5»):",
                    "acceptedAnswers": [
                        "去过_8_5"
                    ],
                    "explanation": "The target keyword was: 【去过_8_5】"
                }
            ]
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
