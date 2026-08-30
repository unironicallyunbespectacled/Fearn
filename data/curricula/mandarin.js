// mandarin curriculum
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
    "title": "汉语拼音、声调与基础问候 (Pinyin & Greetings) (第1讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：普通话声母、韵母、四声声调、轻声与变调规则，日常问候与礼貌用语。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的核心语法法则与应用范例 (1.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '汉语拼音、声调与基础问候 (Pinyin & Greetings)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (1.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (1.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (1.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「汉语拼音、声调与基础问候 (Pinyin & Greetings)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的核心语法法则与应用范例 (1.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (1.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (1.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (1.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的正式语境下，最准确得体的表达是哪一项？（第1.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (1.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (1.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (1.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (1.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u1-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (1.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (1.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (1.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (1.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的掌握程度，请选出表述完全正确的标准范句（测试 1-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (1.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (1.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (1.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (1.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u1-l1）的核心关键词（例如「汉语拼音」）：",
          "acceptedAnswers": [
            "汉语拼音",
            "汉语拼音、声",
            "汉语拼音、声调与基础问候"
          ],
          "explanation": "正确的核心关键词为「汉语拼音」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u1-l2": {
    "id": "zh-u1-l2",
    "subject": "mandarin",
    "unit": 1,
    "lessonNumber": 2,
    "title": "汉语拼音、声调与基础问候 (Pinyin & Greetings) (第2讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：普通话声母、韵母、四声声调、轻声与变调规则，日常问候与礼貌用语。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的核心语法法则与应用范例 (1.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '汉语拼音、声调与基础问候 (Pinyin & Greetings)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (1.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (1.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (1.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「汉语拼音、声调与基础问候 (Pinyin & Greetings)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的核心语法法则与应用范例 (1.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (1.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (1.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (1.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的正式语境下，最准确得体的表达是哪一项？（第1.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (1.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (1.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (1.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (1.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u1-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (1.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (1.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (1.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (1.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的掌握程度，请选出表述完全正确的标准范句（测试 1-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (1.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (1.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (1.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (1.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u1-l2）的核心关键词（例如「汉语拼音」）：",
          "acceptedAnswers": [
            "汉语拼音",
            "汉语拼音、声",
            "汉语拼音、声调与基础问候"
          ],
          "explanation": "正确的核心关键词为「汉语拼音」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u1-l3": {
    "id": "zh-u1-l3",
    "subject": "mandarin",
    "unit": 1,
    "lessonNumber": 3,
    "title": "汉语拼音、声调与基础问候 (Pinyin & Greetings) (第3讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：普通话声母、韵母、四声声调、轻声与变调规则，日常问候与礼貌用语。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的核心语法法则与应用范例 (1.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '汉语拼音、声调与基础问候 (Pinyin & Greetings)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (1.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (1.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (1.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「汉语拼音、声调与基础问候 (Pinyin & Greetings)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的核心语法法则与应用范例 (1.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (1.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (1.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (1.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的正式语境下，最准确得体的表达是哪一项？（第1.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (1.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (1.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (1.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (1.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u1-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (1.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (1.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (1.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (1.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的掌握程度，请选出表述完全正确的标准范句（测试 1-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (1.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (1.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (1.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (1.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u1-l3）的核心关键词（例如「汉语拼音」）：",
          "acceptedAnswers": [
            "汉语拼音",
            "汉语拼音、声",
            "汉语拼音、声调与基础问候"
          ],
          "explanation": "正确的核心关键词为「汉语拼音」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u1-l4": {
    "id": "zh-u1-l4",
    "subject": "mandarin",
    "unit": 1,
    "lessonNumber": 4,
    "title": "汉语拼音、声调与基础问候 (Pinyin & Greetings) (第4讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：普通话声母、韵母、四声声调、轻声与变调规则，日常问候与礼貌用语。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的核心语法法则与应用范例 (1.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '汉语拼音、声调与基础问候 (Pinyin & Greetings)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (1.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (1.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (1.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「汉语拼音、声调与基础问候 (Pinyin & Greetings)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的核心语法法则与应用范例 (1.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (1.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (1.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (1.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的正式语境下，最准确得体的表达是哪一项？（第1.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (1.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (1.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (1.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (1.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u1-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (1.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (1.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (1.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (1.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的掌握程度，请选出表述完全正确的标准范句（测试 1-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (1.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (1.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (1.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (1.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u1-l4）的核心关键词（例如「汉语拼音」）：",
          "acceptedAnswers": [
            "汉语拼音",
            "汉语拼音、声",
            "汉语拼音、声调与基础问候"
          ],
          "explanation": "正确的核心关键词为「汉语拼音」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u1-l5": {
    "id": "zh-u1-l5",
    "subject": "mandarin",
    "unit": 1,
    "lessonNumber": 5,
    "title": "汉语拼音、声调与基础问候 (Pinyin & Greetings) (第5讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：普通话声母、韵母、四声声调、轻声与变调规则，日常问候与礼貌用语。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的核心语法法则与应用范例 (1.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '汉语拼音、声调与基础问候 (Pinyin & Greetings)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (1.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (1.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (1.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「汉语拼音、声调与基础问候 (Pinyin & Greetings)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的核心语法法则与应用范例 (1.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (1.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (1.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (1.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的正式语境下，最准确得体的表达是哪一项？（第1.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (1.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (1.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (1.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (1.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u1-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (1.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (1.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (1.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (1.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「汉语拼音、声调与基础问候 (Pinyin & Greetings)」的掌握程度，请选出表述完全正确的标准范句（测试 1-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (1.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (1.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (1.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (1.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u1-l5）的核心关键词（例如「汉语拼音」）：",
          "acceptedAnswers": [
            "汉语拼音",
            "汉语拼音、声",
            "汉语拼音、声调与基础问候"
          ],
          "explanation": "正确的核心关键词为「汉语拼音」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u2-l1": {
    "id": "zh-u2-l1",
    "subject": "mandarin",
    "unit": 2,
    "lessonNumber": 1,
    "title": "基本句型、人称代词与是字句 (Basic SVO & 是-Sentences) (第1讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：汉语人称代词（我/你/他/她/我们）、是字句判断结构、名词谓语句及否定副词「不」。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的核心语法法则与应用范例 (2.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (2.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (2.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (2.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的核心语法法则与应用范例 (2.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (2.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (2.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (2.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的正式语境下，最准确得体的表达是哪一项？（第2.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (2.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (2.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (2.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (2.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u2-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (2.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (2.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (2.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (2.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的掌握程度，请选出表述完全正确的标准范句（测试 2-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (2.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (2.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (2.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (2.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u2-l1）的核心关键词（例如「基本句型」）：",
          "acceptedAnswers": [
            "基本句型",
            "基本句型、人",
            "基本句型、人称代词与是字句"
          ],
          "explanation": "正确的核心关键词为「基本句型」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u2-l2": {
    "id": "zh-u2-l2",
    "subject": "mandarin",
    "unit": 2,
    "lessonNumber": 2,
    "title": "基本句型、人称代词与是字句 (Basic SVO & 是-Sentences) (第2讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：汉语人称代词（我/你/他/她/我们）、是字句判断结构、名词谓语句及否定副词「不」。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的核心语法法则与应用范例 (2.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (2.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (2.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (2.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的核心语法法则与应用范例 (2.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (2.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (2.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (2.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的正式语境下，最准确得体的表达是哪一项？（第2.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (2.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (2.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (2.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (2.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u2-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (2.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (2.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (2.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (2.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的掌握程度，请选出表述完全正确的标准范句（测试 2-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (2.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (2.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (2.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (2.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u2-l2）的核心关键词（例如「基本句型」）：",
          "acceptedAnswers": [
            "基本句型",
            "基本句型、人",
            "基本句型、人称代词与是字句"
          ],
          "explanation": "正确的核心关键词为「基本句型」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u2-l3": {
    "id": "zh-u2-l3",
    "subject": "mandarin",
    "unit": 2,
    "lessonNumber": 3,
    "title": "基本句型、人称代词与是字句 (Basic SVO & 是-Sentences) (第3讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：汉语人称代词（我/你/他/她/我们）、是字句判断结构、名词谓语句及否定副词「不」。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的核心语法法则与应用范例 (2.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (2.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (2.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (2.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的核心语法法则与应用范例 (2.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (2.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (2.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (2.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的正式语境下，最准确得体的表达是哪一项？（第2.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (2.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (2.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (2.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (2.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u2-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (2.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (2.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (2.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (2.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的掌握程度，请选出表述完全正确的标准范句（测试 2-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (2.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (2.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (2.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (2.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u2-l3）的核心关键词（例如「基本句型」）：",
          "acceptedAnswers": [
            "基本句型",
            "基本句型、人",
            "基本句型、人称代词与是字句"
          ],
          "explanation": "正确的核心关键词为「基本句型」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u2-l4": {
    "id": "zh-u2-l4",
    "subject": "mandarin",
    "unit": 2,
    "lessonNumber": 4,
    "title": "基本句型、人称代词与是字句 (Basic SVO & 是-Sentences) (第4讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：汉语人称代词（我/你/他/她/我们）、是字句判断结构、名词谓语句及否定副词「不」。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的核心语法法则与应用范例 (2.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (2.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (2.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (2.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的核心语法法则与应用范例 (2.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (2.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (2.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (2.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的正式语境下，最准确得体的表达是哪一项？（第2.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (2.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (2.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (2.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (2.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u2-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (2.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (2.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (2.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (2.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的掌握程度，请选出表述完全正确的标准范句（测试 2-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (2.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (2.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (2.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (2.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u2-l4）的核心关键词（例如「基本句型」）：",
          "acceptedAnswers": [
            "基本句型",
            "基本句型、人",
            "基本句型、人称代词与是字句"
          ],
          "explanation": "正确的核心关键词为「基本句型」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u2-l5": {
    "id": "zh-u2-l5",
    "subject": "mandarin",
    "unit": 2,
    "lessonNumber": 5,
    "title": "基本句型、人称代词与是字句 (Basic SVO & 是-Sentences) (第5讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：汉语人称代词（我/你/他/她/我们）、是字句判断结构、名词谓语句及否定副词「不」。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的核心语法法则与应用范例 (2.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (2.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (2.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (2.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的核心语法法则与应用范例 (2.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (2.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (2.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (2.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的正式语境下，最准确得体的表达是哪一项？（第2.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (2.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (2.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (2.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (2.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u2-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (2.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (2.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (2.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (2.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「基本句型、人称代词与是字句 (Basic SVO & 是-Sentences)」的掌握程度，请选出表述完全正确的标准范句（测试 2-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (2.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (2.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (2.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (2.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u2-l5）的核心关键词（例如「基本句型」）：",
          "acceptedAnswers": [
            "基本句型",
            "基本句型、人",
            "基本句型、人称代词与是字句"
          ],
          "explanation": "正确的核心关键词为「基本句型」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u3-l1": {
    "id": "zh-u3-l1",
    "subject": "mandarin",
    "unit": 3,
    "lessonNumber": 1,
    "title": "数字、时间与日期表达 (Numbers, Time & Date) (第1讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：基数词（一至一百）、时刻表达（几点几分）、年/月/日及星期表达法。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「数字、时间与日期表达 (Numbers, Time & Date)」的核心语法法则与应用范例 (3.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '数字、时间与日期表达 (Numbers, Time & Date)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (3.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (3.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (3.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「数字、时间与日期表达 (Numbers, Time & Date)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「数字、时间与日期表达 (Numbers, Time & Date)」的核心语法法则与应用范例 (3.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (3.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (3.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (3.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「数字、时间与日期表达 (Numbers, Time & Date)」的正式语境下，最准确得体的表达是哪一项？（第3.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (3.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (3.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (3.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (3.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u3-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (3.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (3.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (3.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (3.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「数字、时间与日期表达 (Numbers, Time & Date)」的掌握程度，请选出表述完全正确的标准范句（测试 3-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (3.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (3.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (3.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (3.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u3-l1）的核心关键词（例如「数字、时」）：",
          "acceptedAnswers": [
            "数字、时",
            "数字、时间与",
            "数字、时间与日期表达"
          ],
          "explanation": "正确的核心关键词为「数字、时」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u3-l2": {
    "id": "zh-u3-l2",
    "subject": "mandarin",
    "unit": 3,
    "lessonNumber": 2,
    "title": "数字、时间与日期表达 (Numbers, Time & Date) (第2讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：基数词（一至一百）、时刻表达（几点几分）、年/月/日及星期表达法。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「数字、时间与日期表达 (Numbers, Time & Date)」的核心语法法则与应用范例 (3.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '数字、时间与日期表达 (Numbers, Time & Date)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (3.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (3.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (3.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「数字、时间与日期表达 (Numbers, Time & Date)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「数字、时间与日期表达 (Numbers, Time & Date)」的核心语法法则与应用范例 (3.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (3.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (3.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (3.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「数字、时间与日期表达 (Numbers, Time & Date)」的正式语境下，最准确得体的表达是哪一项？（第3.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (3.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (3.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (3.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (3.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u3-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (3.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (3.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (3.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (3.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「数字、时间与日期表达 (Numbers, Time & Date)」的掌握程度，请选出表述完全正确的标准范句（测试 3-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (3.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (3.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (3.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (3.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u3-l2）的核心关键词（例如「数字、时」）：",
          "acceptedAnswers": [
            "数字、时",
            "数字、时间与",
            "数字、时间与日期表达"
          ],
          "explanation": "正确的核心关键词为「数字、时」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u3-l3": {
    "id": "zh-u3-l3",
    "subject": "mandarin",
    "unit": 3,
    "lessonNumber": 3,
    "title": "数字、时间与日期表达 (Numbers, Time & Date) (第3讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：基数词（一至一百）、时刻表达（几点几分）、年/月/日及星期表达法。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「数字、时间与日期表达 (Numbers, Time & Date)」的核心语法法则与应用范例 (3.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '数字、时间与日期表达 (Numbers, Time & Date)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (3.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (3.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (3.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「数字、时间与日期表达 (Numbers, Time & Date)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「数字、时间与日期表达 (Numbers, Time & Date)」的核心语法法则与应用范例 (3.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (3.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (3.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (3.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「数字、时间与日期表达 (Numbers, Time & Date)」的正式语境下，最准确得体的表达是哪一项？（第3.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (3.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (3.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (3.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (3.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u3-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (3.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (3.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (3.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (3.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「数字、时间与日期表达 (Numbers, Time & Date)」的掌握程度，请选出表述完全正确的标准范句（测试 3-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (3.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (3.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (3.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (3.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u3-l3）的核心关键词（例如「数字、时」）：",
          "acceptedAnswers": [
            "数字、时",
            "数字、时间与",
            "数字、时间与日期表达"
          ],
          "explanation": "正确的核心关键词为「数字、时」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u3-l4": {
    "id": "zh-u3-l4",
    "subject": "mandarin",
    "unit": 3,
    "lessonNumber": 4,
    "title": "数字、时间与日期表达 (Numbers, Time & Date) (第4讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：基数词（一至一百）、时刻表达（几点几分）、年/月/日及星期表达法。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「数字、时间与日期表达 (Numbers, Time & Date)」的核心语法法则与应用范例 (3.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '数字、时间与日期表达 (Numbers, Time & Date)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (3.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (3.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (3.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「数字、时间与日期表达 (Numbers, Time & Date)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「数字、时间与日期表达 (Numbers, Time & Date)」的核心语法法则与应用范例 (3.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (3.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (3.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (3.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「数字、时间与日期表达 (Numbers, Time & Date)」的正式语境下，最准确得体的表达是哪一项？（第3.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (3.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (3.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (3.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (3.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u3-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (3.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (3.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (3.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (3.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「数字、时间与日期表达 (Numbers, Time & Date)」的掌握程度，请选出表述完全正确的标准范句（测试 3-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (3.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (3.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (3.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (3.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u3-l4）的核心关键词（例如「数字、时」）：",
          "acceptedAnswers": [
            "数字、时",
            "数字、时间与",
            "数字、时间与日期表达"
          ],
          "explanation": "正确的核心关键词为「数字、时」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u3-l5": {
    "id": "zh-u3-l5",
    "subject": "mandarin",
    "unit": 3,
    "lessonNumber": 5,
    "title": "数字、时间与日期表达 (Numbers, Time & Date) (第5讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：基数词（一至一百）、时刻表达（几点几分）、年/月/日及星期表达法。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「数字、时间与日期表达 (Numbers, Time & Date)」的核心语法法则与应用范例 (3.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '数字、时间与日期表达 (Numbers, Time & Date)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (3.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (3.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (3.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「数字、时间与日期表达 (Numbers, Time & Date)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「数字、时间与日期表达 (Numbers, Time & Date)」的核心语法法则与应用范例 (3.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (3.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (3.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (3.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「数字、时间与日期表达 (Numbers, Time & Date)」的正式语境下，最准确得体的表达是哪一项？（第3.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (3.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (3.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (3.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (3.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u3-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (3.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (3.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (3.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (3.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「数字、时间与日期表达 (Numbers, Time & Date)」的掌握程度，请选出表述完全正确的标准范句（测试 3-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (3.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (3.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (3.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (3.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u3-l5）的核心关键词（例如「数字、时」）：",
          "acceptedAnswers": [
            "数字、时",
            "数字、时间与",
            "数字、时间与日期表达"
          ],
          "explanation": "正确的核心关键词为「数字、时」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u4-l1": {
    "id": "zh-u4-l1",
    "subject": "mandarin",
    "unit": 4,
    "lessonNumber": 1,
    "title": "量词系统与名词修饰 (Classifiers & Noun Modification) (第1讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：现代汉语核心名量词（个/本/张/条/支/位）、数量短语修饰名词及助词「的」。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「量词系统与名词修饰 (Classifiers & Noun Modification)」的核心语法法则与应用范例 (4.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '量词系统与名词修饰 (Classifiers & Noun Modification)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (4.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (4.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (4.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「量词系统与名词修饰 (Classifiers & Noun Modification)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「量词系统与名词修饰 (Classifiers & Noun Modification)」的核心语法法则与应用范例 (4.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (4.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (4.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (4.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「量词系统与名词修饰 (Classifiers & Noun Modification)」的正式语境下，最准确得体的表达是哪一项？（第4.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (4.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (4.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (4.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (4.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u4-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (4.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (4.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (4.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (4.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「量词系统与名词修饰 (Classifiers & Noun Modification)」的掌握程度，请选出表述完全正确的标准范句（测试 4-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (4.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (4.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (4.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (4.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u4-l1）的核心关键词（例如「量词系统」）：",
          "acceptedAnswers": [
            "量词系统",
            "量词系统与名",
            "量词系统与名词修饰"
          ],
          "explanation": "正确的核心关键词为「量词系统」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u4-l2": {
    "id": "zh-u4-l2",
    "subject": "mandarin",
    "unit": 4,
    "lessonNumber": 2,
    "title": "量词系统与名词修饰 (Classifiers & Noun Modification) (第2讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：现代汉语核心名量词（个/本/张/条/支/位）、数量短语修饰名词及助词「的」。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「量词系统与名词修饰 (Classifiers & Noun Modification)」的核心语法法则与应用范例 (4.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '量词系统与名词修饰 (Classifiers & Noun Modification)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (4.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (4.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (4.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「量词系统与名词修饰 (Classifiers & Noun Modification)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「量词系统与名词修饰 (Classifiers & Noun Modification)」的核心语法法则与应用范例 (4.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (4.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (4.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (4.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「量词系统与名词修饰 (Classifiers & Noun Modification)」的正式语境下，最准确得体的表达是哪一项？（第4.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (4.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (4.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (4.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (4.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u4-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (4.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (4.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (4.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (4.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「量词系统与名词修饰 (Classifiers & Noun Modification)」的掌握程度，请选出表述完全正确的标准范句（测试 4-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (4.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (4.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (4.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (4.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u4-l2）的核心关键词（例如「量词系统」）：",
          "acceptedAnswers": [
            "量词系统",
            "量词系统与名",
            "量词系统与名词修饰"
          ],
          "explanation": "正确的核心关键词为「量词系统」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u4-l3": {
    "id": "zh-u4-l3",
    "subject": "mandarin",
    "unit": 4,
    "lessonNumber": 3,
    "title": "量词系统与名词修饰 (Classifiers & Noun Modification) (第3讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：现代汉语核心名量词（个/本/张/条/支/位）、数量短语修饰名词及助词「的」。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「量词系统与名词修饰 (Classifiers & Noun Modification)」的核心语法法则与应用范例 (4.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '量词系统与名词修饰 (Classifiers & Noun Modification)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (4.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (4.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (4.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「量词系统与名词修饰 (Classifiers & Noun Modification)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「量词系统与名词修饰 (Classifiers & Noun Modification)」的核心语法法则与应用范例 (4.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (4.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (4.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (4.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「量词系统与名词修饰 (Classifiers & Noun Modification)」的正式语境下，最准确得体的表达是哪一项？（第4.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (4.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (4.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (4.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (4.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u4-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (4.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (4.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (4.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (4.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「量词系统与名词修饰 (Classifiers & Noun Modification)」的掌握程度，请选出表述完全正确的标准范句（测试 4-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (4.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (4.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (4.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (4.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u4-l3）的核心关键词（例如「量词系统」）：",
          "acceptedAnswers": [
            "量词系统",
            "量词系统与名",
            "量词系统与名词修饰"
          ],
          "explanation": "正确的核心关键词为「量词系统」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u4-l4": {
    "id": "zh-u4-l4",
    "subject": "mandarin",
    "unit": 4,
    "lessonNumber": 4,
    "title": "量词系统与名词修饰 (Classifiers & Noun Modification) (第4讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：现代汉语核心名量词（个/本/张/条/支/位）、数量短语修饰名词及助词「的」。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「量词系统与名词修饰 (Classifiers & Noun Modification)」的核心语法法则与应用范例 (4.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '量词系统与名词修饰 (Classifiers & Noun Modification)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (4.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (4.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (4.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「量词系统与名词修饰 (Classifiers & Noun Modification)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「量词系统与名词修饰 (Classifiers & Noun Modification)」的核心语法法则与应用范例 (4.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (4.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (4.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (4.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「量词系统与名词修饰 (Classifiers & Noun Modification)」的正式语境下，最准确得体的表达是哪一项？（第4.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (4.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (4.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (4.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (4.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u4-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (4.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (4.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (4.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (4.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「量词系统与名词修饰 (Classifiers & Noun Modification)」的掌握程度，请选出表述完全正确的标准范句（测试 4-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (4.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (4.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (4.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (4.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u4-l4）的核心关键词（例如「量词系统」）：",
          "acceptedAnswers": [
            "量词系统",
            "量词系统与名",
            "量词系统与名词修饰"
          ],
          "explanation": "正确的核心关键词为「量词系统」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u4-l5": {
    "id": "zh-u4-l5",
    "subject": "mandarin",
    "unit": 4,
    "lessonNumber": 5,
    "title": "量词系统与名词修饰 (Classifiers & Noun Modification) (第5讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：现代汉语核心名量词（个/本/张/条/支/位）、数量短语修饰名词及助词「的」。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「量词系统与名词修饰 (Classifiers & Noun Modification)」的核心语法法则与应用范例 (4.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '量词系统与名词修饰 (Classifiers & Noun Modification)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (4.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (4.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (4.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「量词系统与名词修饰 (Classifiers & Noun Modification)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「量词系统与名词修饰 (Classifiers & Noun Modification)」的核心语法法则与应用范例 (4.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (4.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (4.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (4.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「量词系统与名词修饰 (Classifiers & Noun Modification)」的正式语境下，最准确得体的表达是哪一项？（第4.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (4.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (4.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (4.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (4.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u4-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (4.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (4.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (4.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (4.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「量词系统与名词修饰 (Classifiers & Noun Modification)」的掌握程度，请选出表述完全正确的标准范句（测试 4-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (4.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (4.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (4.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (4.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u4-l5）的核心关键词（例如「量词系统」）：",
          "acceptedAnswers": [
            "量词系统",
            "量词系统与名",
            "量词系统与名词修饰"
          ],
          "explanation": "正确的核心关键词为「量词系统」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u5-l1": {
    "id": "zh-u5-l1",
    "subject": "mandarin",
    "unit": 5,
    "lessonNumber": 1,
    "title": "日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive) (第1讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：日常动作动词、介词「在」表示处所与进行体、动词重叠式（看一看/说说）。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的核心语法法则与应用范例 (5.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (5.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (5.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (5.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的核心语法法则与应用范例 (5.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (5.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (5.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (5.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的正式语境下，最准确得体的表达是哪一项？（第5.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (5.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (5.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (5.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (5.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u5-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (5.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (5.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (5.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (5.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的掌握程度，请选出表述完全正确的标准范句（测试 5-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (5.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (5.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (5.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (5.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u5-l1）的核心关键词（例如「日常生活」）：",
          "acceptedAnswers": [
            "日常生活",
            "日常生活、动",
            "日常生活、动词重叠与在字句"
          ],
          "explanation": "正确的核心关键词为「日常生活」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u5-l2": {
    "id": "zh-u5-l2",
    "subject": "mandarin",
    "unit": 5,
    "lessonNumber": 2,
    "title": "日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive) (第2讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：日常动作动词、介词「在」表示处所与进行体、动词重叠式（看一看/说说）。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的核心语法法则与应用范例 (5.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (5.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (5.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (5.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的核心语法法则与应用范例 (5.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (5.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (5.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (5.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的正式语境下，最准确得体的表达是哪一项？（第5.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (5.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (5.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (5.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (5.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u5-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (5.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (5.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (5.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (5.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的掌握程度，请选出表述完全正确的标准范句（测试 5-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (5.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (5.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (5.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (5.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u5-l2）的核心关键词（例如「日常生活」）：",
          "acceptedAnswers": [
            "日常生活",
            "日常生活、动",
            "日常生活、动词重叠与在字句"
          ],
          "explanation": "正确的核心关键词为「日常生活」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u5-l3": {
    "id": "zh-u5-l3",
    "subject": "mandarin",
    "unit": 5,
    "lessonNumber": 3,
    "title": "日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive) (第3讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：日常动作动词、介词「在」表示处所与进行体、动词重叠式（看一看/说说）。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的核心语法法则与应用范例 (5.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (5.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (5.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (5.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的核心语法法则与应用范例 (5.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (5.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (5.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (5.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的正式语境下，最准确得体的表达是哪一项？（第5.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (5.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (5.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (5.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (5.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u5-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (5.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (5.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (5.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (5.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的掌握程度，请选出表述完全正确的标准范句（测试 5-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (5.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (5.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (5.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (5.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u5-l3）的核心关键词（例如「日常生活」）：",
          "acceptedAnswers": [
            "日常生活",
            "日常生活、动",
            "日常生活、动词重叠与在字句"
          ],
          "explanation": "正确的核心关键词为「日常生活」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u5-l4": {
    "id": "zh-u5-l4",
    "subject": "mandarin",
    "unit": 5,
    "lessonNumber": 4,
    "title": "日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive) (第4讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：日常动作动词、介词「在」表示处所与进行体、动词重叠式（看一看/说说）。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的核心语法法则与应用范例 (5.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (5.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (5.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (5.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的核心语法法则与应用范例 (5.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (5.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (5.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (5.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的正式语境下，最准确得体的表达是哪一项？（第5.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (5.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (5.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (5.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (5.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u5-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (5.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (5.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (5.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (5.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的掌握程度，请选出表述完全正确的标准范句（测试 5-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (5.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (5.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (5.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (5.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u5-l4）的核心关键词（例如「日常生活」）：",
          "acceptedAnswers": [
            "日常生活",
            "日常生活、动",
            "日常生活、动词重叠与在字句"
          ],
          "explanation": "正确的核心关键词为「日常生活」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u5-l5": {
    "id": "zh-u5-l5",
    "subject": "mandarin",
    "unit": 5,
    "lessonNumber": 5,
    "title": "日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive) (第5讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：日常动作动词、介词「在」表示处所与进行体、动词重叠式（看一看/说说）。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的核心语法法则与应用范例 (5.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (5.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (5.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (5.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的核心语法法则与应用范例 (5.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (5.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (5.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (5.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的正式语境下，最准确得体的表达是哪一项？（第5.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (5.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (5.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (5.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (5.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u5-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (5.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (5.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (5.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (5.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「日常生活、动词重叠与在字句 (Daily Routine & 在-Progressive)」的掌握程度，请选出表述完全正确的标准范句（测试 5-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (5.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (5.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (5.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (5.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u5-l5）的核心关键词（例如「日常生活」）：",
          "acceptedAnswers": [
            "日常生活",
            "日常生活、动",
            "日常生活、动词重叠与在字句"
          ],
          "explanation": "正确的核心关键词为「日常生活」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u6-l1": {
    "id": "zh-u6-l1",
    "subject": "mandarin",
    "unit": 6,
    "lessonNumber": 1,
    "title": "中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining) (第1讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：八大菜系、传统风味词汇（酸/甜/苦/辣/咸/鲜）、餐馆点餐与结账会话。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的核心语法法则与应用范例 (6.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (6.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (6.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (6.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的核心语法法则与应用范例 (6.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (6.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (6.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (6.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的正式语境下，最准确得体的表达是哪一项？（第6.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (6.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (6.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (6.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (6.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u6-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (6.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (6.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (6.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (6.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的掌握程度，请选出表述完全正确的标准范句（测试 6-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (6.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (6.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (6.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (6.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u6-l1）的核心关键词（例如「中华饮食」）：",
          "acceptedAnswers": [
            "中华饮食",
            "中华饮食文化",
            "中华饮食文化、点餐与味觉"
          ],
          "explanation": "正确的核心关键词为「中华饮食」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u6-l2": {
    "id": "zh-u6-l2",
    "subject": "mandarin",
    "unit": 6,
    "lessonNumber": 2,
    "title": "中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining) (第2讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：八大菜系、传统风味词汇（酸/甜/苦/辣/咸/鲜）、餐馆点餐与结账会话。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的核心语法法则与应用范例 (6.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (6.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (6.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (6.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的核心语法法则与应用范例 (6.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (6.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (6.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (6.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的正式语境下，最准确得体的表达是哪一项？（第6.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (6.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (6.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (6.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (6.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u6-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (6.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (6.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (6.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (6.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的掌握程度，请选出表述完全正确的标准范句（测试 6-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (6.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (6.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (6.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (6.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u6-l2）的核心关键词（例如「中华饮食」）：",
          "acceptedAnswers": [
            "中华饮食",
            "中华饮食文化",
            "中华饮食文化、点餐与味觉"
          ],
          "explanation": "正确的核心关键词为「中华饮食」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u6-l3": {
    "id": "zh-u6-l3",
    "subject": "mandarin",
    "unit": 6,
    "lessonNumber": 3,
    "title": "中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining) (第3讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：八大菜系、传统风味词汇（酸/甜/苦/辣/咸/鲜）、餐馆点餐与结账会话。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的核心语法法则与应用范例 (6.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (6.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (6.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (6.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的核心语法法则与应用范例 (6.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (6.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (6.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (6.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的正式语境下，最准确得体的表达是哪一项？（第6.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (6.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (6.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (6.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (6.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u6-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (6.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (6.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (6.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (6.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的掌握程度，请选出表述完全正确的标准范句（测试 6-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (6.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (6.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (6.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (6.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u6-l3）的核心关键词（例如「中华饮食」）：",
          "acceptedAnswers": [
            "中华饮食",
            "中华饮食文化",
            "中华饮食文化、点餐与味觉"
          ],
          "explanation": "正确的核心关键词为「中华饮食」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u6-l4": {
    "id": "zh-u6-l4",
    "subject": "mandarin",
    "unit": 6,
    "lessonNumber": 4,
    "title": "中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining) (第4讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：八大菜系、传统风味词汇（酸/甜/苦/辣/咸/鲜）、餐馆点餐与结账会话。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的核心语法法则与应用范例 (6.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (6.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (6.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (6.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的核心语法法则与应用范例 (6.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (6.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (6.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (6.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的正式语境下，最准确得体的表达是哪一项？（第6.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (6.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (6.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (6.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (6.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u6-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (6.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (6.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (6.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (6.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的掌握程度，请选出表述完全正确的标准范句（测试 6-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (6.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (6.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (6.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (6.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u6-l4）的核心关键词（例如「中华饮食」）：",
          "acceptedAnswers": [
            "中华饮食",
            "中华饮食文化",
            "中华饮食文化、点餐与味觉"
          ],
          "explanation": "正确的核心关键词为「中华饮食」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u6-l5": {
    "id": "zh-u6-l5",
    "subject": "mandarin",
    "unit": 6,
    "lessonNumber": 5,
    "title": "中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining) (第5讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：八大菜系、传统风味词汇（酸/甜/苦/辣/咸/鲜）、餐馆点餐与结账会话。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的核心语法法则与应用范例 (6.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (6.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (6.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (6.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的核心语法法则与应用范例 (6.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (6.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (6.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (6.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的正式语境下，最准确得体的表达是哪一项？（第6.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (6.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (6.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (6.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (6.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u6-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (6.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (6.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (6.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (6.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中华饮食文化、点餐与味觉 (Chinese Cuisine & Dining)」的掌握程度，请选出表述完全正确的标准范句（测试 6-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (6.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (6.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (6.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (6.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u6-l5）的核心关键词（例如「中华饮食」）：",
          "acceptedAnswers": [
            "中华饮食",
            "中华饮食文化",
            "中华饮食文化、点餐与味觉"
          ],
          "explanation": "正确的核心关键词为「中华饮食」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u7-l1": {
    "id": "zh-u7-l1",
    "subject": "mandarin",
    "unit": 7,
    "lessonNumber": 1,
    "title": "动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO) (第1讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：动态助词「了」（动作完成与实现）与「过」（经历体）的句法语义区别。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的核心语法法则与应用范例 (7.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (7.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (7.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (7.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的核心语法法则与应用范例 (7.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (7.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (7.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (7.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的正式语境下，最准确得体的表达是哪一项？（第7.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (7.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (7.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (7.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (7.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u7-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (7.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (7.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (7.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (7.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的掌握程度，请选出表述完全正确的标准范句（测试 7-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (7.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (7.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (7.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (7.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u7-l1）的核心关键词（例如「动态助词」）：",
          "acceptedAnswers": [
            "动态助词",
            "动态助词「了",
            "动态助词「了」「过」与过去经验"
          ],
          "explanation": "正确的核心关键词为「动态助词」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u7-l2": {
    "id": "zh-u7-l2",
    "subject": "mandarin",
    "unit": 7,
    "lessonNumber": 2,
    "title": "动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO) (第2讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：动态助词「了」（动作完成与实现）与「过」（经历体）的句法语义区别。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的核心语法法则与应用范例 (7.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (7.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (7.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (7.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的核心语法法则与应用范例 (7.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (7.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (7.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (7.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的正式语境下，最准确得体的表达是哪一项？（第7.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (7.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (7.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (7.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (7.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u7-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (7.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (7.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (7.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (7.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的掌握程度，请选出表述完全正确的标准范句（测试 7-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (7.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (7.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (7.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (7.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u7-l2）的核心关键词（例如「动态助词」）：",
          "acceptedAnswers": [
            "动态助词",
            "动态助词「了",
            "动态助词「了」「过」与过去经验"
          ],
          "explanation": "正确的核心关键词为「动态助词」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u7-l3": {
    "id": "zh-u7-l3",
    "subject": "mandarin",
    "unit": 7,
    "lessonNumber": 3,
    "title": "动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO) (第3讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：动态助词「了」（动作完成与实现）与「过」（经历体）的句法语义区别。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的核心语法法则与应用范例 (7.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (7.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (7.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (7.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的核心语法法则与应用范例 (7.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (7.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (7.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (7.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的正式语境下，最准确得体的表达是哪一项？（第7.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (7.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (7.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (7.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (7.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u7-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (7.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (7.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (7.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (7.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的掌握程度，请选出表述完全正确的标准范句（测试 7-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (7.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (7.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (7.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (7.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u7-l3）的核心关键词（例如「动态助词」）：",
          "acceptedAnswers": [
            "动态助词",
            "动态助词「了",
            "动态助词「了」「过」与过去经验"
          ],
          "explanation": "正确的核心关键词为「动态助词」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u7-l4": {
    "id": "zh-u7-l4",
    "subject": "mandarin",
    "unit": 7,
    "lessonNumber": 4,
    "title": "动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO) (第4讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：动态助词「了」（动作完成与实现）与「过」（经历体）的句法语义区别。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的核心语法法则与应用范例 (7.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (7.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (7.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (7.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的核心语法法则与应用范例 (7.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (7.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (7.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (7.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的正式语境下，最准确得体的表达是哪一项？（第7.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (7.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (7.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (7.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (7.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u7-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (7.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (7.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (7.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (7.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的掌握程度，请选出表述完全正确的标准范句（测试 7-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (7.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (7.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (7.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (7.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u7-l4）的核心关键词（例如「动态助词」）：",
          "acceptedAnswers": [
            "动态助词",
            "动态助词「了",
            "动态助词「了」「过」与过去经验"
          ],
          "explanation": "正确的核心关键词为「动态助词」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u7-l5": {
    "id": "zh-u7-l5",
    "subject": "mandarin",
    "unit": 7,
    "lessonNumber": 5,
    "title": "动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO) (第5讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：动态助词「了」（动作完成与实现）与「过」（经历体）的句法语义区别。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的核心语法法则与应用范例 (7.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (7.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (7.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (7.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的核心语法法则与应用范例 (7.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (7.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (7.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (7.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的正式语境下，最准确得体的表达是哪一项？（第7.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (7.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (7.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (7.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (7.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u7-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (7.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (7.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (7.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (7.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「动态助词「了」「过」与过去经验 (Aspect Particles LE & GUO)」的掌握程度，请选出表述完全正确的标准范句（测试 7-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (7.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (7.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (7.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (7.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u7-l5）的核心关键词（例如「动态助词」）：",
          "acceptedAnswers": [
            "动态助词",
            "动态助词「了",
            "动态助词「了」「过」与过去经验"
          ],
          "explanation": "正确的核心关键词为「动态助词」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u8-l1": {
    "id": "zh-u8-l1",
    "subject": "mandarin",
    "unit": 8,
    "lessonNumber": 1,
    "title": "方向、位置与城市交通 (Directions & Urban Transit) (第1讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：空间方位词（上/下/前/后/左/右/东/南/西/北）、问路指路及城市公共交通工具。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「方向、位置与城市交通 (Directions & Urban Transit)」的核心语法法则与应用范例 (8.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '方向、位置与城市交通 (Directions & Urban Transit)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (8.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (8.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (8.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「方向、位置与城市交通 (Directions & Urban Transit)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「方向、位置与城市交通 (Directions & Urban Transit)」的核心语法法则与应用范例 (8.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (8.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (8.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (8.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「方向、位置与城市交通 (Directions & Urban Transit)」的正式语境下，最准确得体的表达是哪一项？（第8.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (8.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (8.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (8.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (8.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u8-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (8.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (8.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (8.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (8.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「方向、位置与城市交通 (Directions & Urban Transit)」的掌握程度，请选出表述完全正确的标准范句（测试 8-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (8.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (8.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (8.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (8.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u8-l1）的核心关键词（例如「方向、位」）：",
          "acceptedAnswers": [
            "方向、位",
            "方向、位置与",
            "方向、位置与城市交通"
          ],
          "explanation": "正确的核心关键词为「方向、位」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u8-l2": {
    "id": "zh-u8-l2",
    "subject": "mandarin",
    "unit": 8,
    "lessonNumber": 2,
    "title": "方向、位置与城市交通 (Directions & Urban Transit) (第2讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：空间方位词（上/下/前/后/左/右/东/南/西/北）、问路指路及城市公共交通工具。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「方向、位置与城市交通 (Directions & Urban Transit)」的核心语法法则与应用范例 (8.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '方向、位置与城市交通 (Directions & Urban Transit)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (8.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (8.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (8.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「方向、位置与城市交通 (Directions & Urban Transit)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「方向、位置与城市交通 (Directions & Urban Transit)」的核心语法法则与应用范例 (8.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (8.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (8.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (8.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「方向、位置与城市交通 (Directions & Urban Transit)」的正式语境下，最准确得体的表达是哪一项？（第8.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (8.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (8.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (8.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (8.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u8-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (8.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (8.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (8.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (8.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「方向、位置与城市交通 (Directions & Urban Transit)」的掌握程度，请选出表述完全正确的标准范句（测试 8-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (8.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (8.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (8.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (8.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u8-l2）的核心关键词（例如「方向、位」）：",
          "acceptedAnswers": [
            "方向、位",
            "方向、位置与",
            "方向、位置与城市交通"
          ],
          "explanation": "正确的核心关键词为「方向、位」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u8-l3": {
    "id": "zh-u8-l3",
    "subject": "mandarin",
    "unit": 8,
    "lessonNumber": 3,
    "title": "方向、位置与城市交通 (Directions & Urban Transit) (第3讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：空间方位词（上/下/前/后/左/右/东/南/西/北）、问路指路及城市公共交通工具。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「方向、位置与城市交通 (Directions & Urban Transit)」的核心语法法则与应用范例 (8.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '方向、位置与城市交通 (Directions & Urban Transit)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (8.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (8.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (8.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「方向、位置与城市交通 (Directions & Urban Transit)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「方向、位置与城市交通 (Directions & Urban Transit)」的核心语法法则与应用范例 (8.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (8.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (8.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (8.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「方向、位置与城市交通 (Directions & Urban Transit)」的正式语境下，最准确得体的表达是哪一项？（第8.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (8.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (8.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (8.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (8.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u8-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (8.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (8.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (8.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (8.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「方向、位置与城市交通 (Directions & Urban Transit)」的掌握程度，请选出表述完全正确的标准范句（测试 8-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (8.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (8.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (8.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (8.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u8-l3）的核心关键词（例如「方向、位」）：",
          "acceptedAnswers": [
            "方向、位",
            "方向、位置与",
            "方向、位置与城市交通"
          ],
          "explanation": "正确的核心关键词为「方向、位」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u8-l4": {
    "id": "zh-u8-l4",
    "subject": "mandarin",
    "unit": 8,
    "lessonNumber": 4,
    "title": "方向、位置与城市交通 (Directions & Urban Transit) (第4讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：空间方位词（上/下/前/后/左/右/东/南/西/北）、问路指路及城市公共交通工具。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「方向、位置与城市交通 (Directions & Urban Transit)」的核心语法法则与应用范例 (8.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '方向、位置与城市交通 (Directions & Urban Transit)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (8.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (8.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (8.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「方向、位置与城市交通 (Directions & Urban Transit)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「方向、位置与城市交通 (Directions & Urban Transit)」的核心语法法则与应用范例 (8.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (8.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (8.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (8.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「方向、位置与城市交通 (Directions & Urban Transit)」的正式语境下，最准确得体的表达是哪一项？（第8.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (8.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (8.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (8.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (8.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u8-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (8.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (8.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (8.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (8.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「方向、位置与城市交通 (Directions & Urban Transit)」的掌握程度，请选出表述完全正确的标准范句（测试 8-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (8.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (8.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (8.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (8.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u8-l4）的核心关键词（例如「方向、位」）：",
          "acceptedAnswers": [
            "方向、位",
            "方向、位置与",
            "方向、位置与城市交通"
          ],
          "explanation": "正确的核心关键词为「方向、位」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u8-l5": {
    "id": "zh-u8-l5",
    "subject": "mandarin",
    "unit": 8,
    "lessonNumber": 5,
    "title": "方向、位置与城市交通 (Directions & Urban Transit) (第5讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：空间方位词（上/下/前/后/左/右/东/南/西/北）、问路指路及城市公共交通工具。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「方向、位置与城市交通 (Directions & Urban Transit)」的核心语法法则与应用范例 (8.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '方向、位置与城市交通 (Directions & Urban Transit)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (8.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (8.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (8.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「方向、位置与城市交通 (Directions & Urban Transit)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「方向、位置与城市交通 (Directions & Urban Transit)」的核心语法法则与应用范例 (8.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (8.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (8.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (8.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「方向、位置与城市交通 (Directions & Urban Transit)」的正式语境下，最准确得体的表达是哪一项？（第8.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (8.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (8.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (8.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (8.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u8-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (8.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (8.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (8.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (8.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「方向、位置与城市交通 (Directions & Urban Transit)」的掌握程度，请选出表述完全正确的标准范句（测试 8-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (8.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (8.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (8.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (8.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u8-l5）的核心关键词（例如「方向、位」）：",
          "acceptedAnswers": [
            "方向、位",
            "方向、位置与",
            "方向、位置与城市交通"
          ],
          "explanation": "正确的核心关键词为「方向、位」。"
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
    "title": "购物、价格与货币表达 (Shopping & Currency) (第1讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：人民币货币单位（元/角/分/块/毛）、讨价还价、衣物尺码及商场购物实用表达。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「购物、价格与货币表达 (Shopping & Currency)」的核心语法法则与应用范例 (9.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '购物、价格与货币表达 (Shopping & Currency)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (9.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (9.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (9.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「购物、价格与货币表达 (Shopping & Currency)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「购物、价格与货币表达 (Shopping & Currency)」的核心语法法则与应用范例 (9.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (9.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (9.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (9.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「购物、价格与货币表达 (Shopping & Currency)」的正式语境下，最准确得体的表达是哪一项？（第9.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (9.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (9.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (9.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (9.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u9-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (9.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (9.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (9.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (9.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「购物、价格与货币表达 (Shopping & Currency)」的掌握程度，请选出表述完全正确的标准范句（测试 9-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (9.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (9.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (9.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (9.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u9-l1）的核心关键词（例如「购物、价」）：",
          "acceptedAnswers": [
            "购物、价",
            "购物、价格与",
            "购物、价格与货币表达"
          ],
          "explanation": "正确的核心关键词为「购物、价」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u9-l2": {
    "id": "zh-u9-l2",
    "subject": "mandarin",
    "unit": 9,
    "lessonNumber": 2,
    "title": "购物、价格与货币表达 (Shopping & Currency) (第2讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：人民币货币单位（元/角/分/块/毛）、讨价还价、衣物尺码及商场购物实用表达。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「购物、价格与货币表达 (Shopping & Currency)」的核心语法法则与应用范例 (9.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '购物、价格与货币表达 (Shopping & Currency)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (9.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (9.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (9.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「购物、价格与货币表达 (Shopping & Currency)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「购物、价格与货币表达 (Shopping & Currency)」的核心语法法则与应用范例 (9.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (9.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (9.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (9.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「购物、价格与货币表达 (Shopping & Currency)」的正式语境下，最准确得体的表达是哪一项？（第9.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (9.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (9.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (9.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (9.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u9-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (9.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (9.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (9.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (9.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「购物、价格与货币表达 (Shopping & Currency)」的掌握程度，请选出表述完全正确的标准范句（测试 9-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (9.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (9.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (9.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (9.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u9-l2）的核心关键词（例如「购物、价」）：",
          "acceptedAnswers": [
            "购物、价",
            "购物、价格与",
            "购物、价格与货币表达"
          ],
          "explanation": "正确的核心关键词为「购物、价」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u9-l3": {
    "id": "zh-u9-l3",
    "subject": "mandarin",
    "unit": 9,
    "lessonNumber": 3,
    "title": "购物、价格与货币表达 (Shopping & Currency) (第3讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：人民币货币单位（元/角/分/块/毛）、讨价还价、衣物尺码及商场购物实用表达。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「购物、价格与货币表达 (Shopping & Currency)」的核心语法法则与应用范例 (9.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '购物、价格与货币表达 (Shopping & Currency)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (9.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (9.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (9.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「购物、价格与货币表达 (Shopping & Currency)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「购物、价格与货币表达 (Shopping & Currency)」的核心语法法则与应用范例 (9.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (9.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (9.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (9.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「购物、价格与货币表达 (Shopping & Currency)」的正式语境下，最准确得体的表达是哪一项？（第9.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (9.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (9.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (9.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (9.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u9-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (9.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (9.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (9.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (9.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「购物、价格与货币表达 (Shopping & Currency)」的掌握程度，请选出表述完全正确的标准范句（测试 9-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (9.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (9.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (9.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (9.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u9-l3）的核心关键词（例如「购物、价」）：",
          "acceptedAnswers": [
            "购物、价",
            "购物、价格与",
            "购物、价格与货币表达"
          ],
          "explanation": "正确的核心关键词为「购物、价」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u9-l4": {
    "id": "zh-u9-l4",
    "subject": "mandarin",
    "unit": 9,
    "lessonNumber": 4,
    "title": "购物、价格与货币表达 (Shopping & Currency) (第4讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：人民币货币单位（元/角/分/块/毛）、讨价还价、衣物尺码及商场购物实用表达。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「购物、价格与货币表达 (Shopping & Currency)」的核心语法法则与应用范例 (9.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '购物、价格与货币表达 (Shopping & Currency)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (9.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (9.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (9.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「购物、价格与货币表达 (Shopping & Currency)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「购物、价格与货币表达 (Shopping & Currency)」的核心语法法则与应用范例 (9.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (9.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (9.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (9.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「购物、价格与货币表达 (Shopping & Currency)」的正式语境下，最准确得体的表达是哪一项？（第9.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (9.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (9.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (9.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (9.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u9-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (9.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (9.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (9.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (9.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「购物、价格与货币表达 (Shopping & Currency)」的掌握程度，请选出表述完全正确的标准范句（测试 9-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (9.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (9.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (9.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (9.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u9-l4）的核心关键词（例如「购物、价」）：",
          "acceptedAnswers": [
            "购物、价",
            "购物、价格与",
            "购物、价格与货币表达"
          ],
          "explanation": "正确的核心关键词为「购物、价」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u9-l5": {
    "id": "zh-u9-l5",
    "subject": "mandarin",
    "unit": 9,
    "lessonNumber": 5,
    "title": "购物、价格与货币表达 (Shopping & Currency) (第5讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：人民币货币单位（元/角/分/块/毛）、讨价还价、衣物尺码及商场购物实用表达。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「购物、价格与货币表达 (Shopping & Currency)」的核心语法法则与应用范例 (9.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '购物、价格与货币表达 (Shopping & Currency)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (9.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (9.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (9.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「购物、价格与货币表达 (Shopping & Currency)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「购物、价格与货币表达 (Shopping & Currency)」的核心语法法则与应用范例 (9.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (9.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (9.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (9.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「购物、价格与货币表达 (Shopping & Currency)」的正式语境下，最准确得体的表达是哪一项？（第9.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (9.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (9.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (9.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (9.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u9-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (9.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (9.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (9.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (9.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「购物、价格与货币表达 (Shopping & Currency)」的掌握程度，请选出表述完全正确的标准范句（测试 9-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (9.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (9.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (9.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (9.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u9-l5）的核心关键词（例如「购物、价」）：",
          "acceptedAnswers": [
            "购物、价",
            "购物、价格与",
            "购物、价格与货币表达"
          ],
          "explanation": "正确的核心关键词为「购物、价」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u10-l1": {
    "id": "zh-u10-l1",
    "subject": "mandarin",
    "unit": 10,
    "lessonNumber": 1,
    "title": "健康、身体部位与看病问诊 (Health & Medical Consultation) (第1讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：人体解剖部位名称、病痛主诉（头疼/发烧/咳嗽）、医患问诊及服药指导。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「健康、身体部位与看病问诊 (Health & Medical Consultation)」的核心语法法则与应用范例 (10.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '健康、身体部位与看病问诊 (Health & Medical Consultation)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (10.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (10.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (10.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「健康、身体部位与看病问诊 (Health & Medical Consultation)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「健康、身体部位与看病问诊 (Health & Medical Consultation)」的核心语法法则与应用范例 (10.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (10.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (10.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (10.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「健康、身体部位与看病问诊 (Health & Medical Consultation)」的正式语境下，最准确得体的表达是哪一项？（第10.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (10.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (10.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (10.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (10.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u10-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (10.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (10.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (10.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (10.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「健康、身体部位与看病问诊 (Health & Medical Consultation)」的掌握程度，请选出表述完全正确的标准范句（测试 10-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (10.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (10.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (10.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (10.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u10-l1）的核心关键词（例如「健康、身」）：",
          "acceptedAnswers": [
            "健康、身",
            "健康、身体部",
            "健康、身体部位与看病问诊"
          ],
          "explanation": "正确的核心关键词为「健康、身」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u10-l2": {
    "id": "zh-u10-l2",
    "subject": "mandarin",
    "unit": 10,
    "lessonNumber": 2,
    "title": "健康、身体部位与看病问诊 (Health & Medical Consultation) (第2讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：人体解剖部位名称、病痛主诉（头疼/发烧/咳嗽）、医患问诊及服药指导。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「健康、身体部位与看病问诊 (Health & Medical Consultation)」的核心语法法则与应用范例 (10.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '健康、身体部位与看病问诊 (Health & Medical Consultation)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (10.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (10.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (10.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「健康、身体部位与看病问诊 (Health & Medical Consultation)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「健康、身体部位与看病问诊 (Health & Medical Consultation)」的核心语法法则与应用范例 (10.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (10.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (10.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (10.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「健康、身体部位与看病问诊 (Health & Medical Consultation)」的正式语境下，最准确得体的表达是哪一项？（第10.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (10.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (10.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (10.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (10.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u10-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (10.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (10.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (10.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (10.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「健康、身体部位与看病问诊 (Health & Medical Consultation)」的掌握程度，请选出表述完全正确的标准范句（测试 10-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (10.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (10.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (10.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (10.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u10-l2）的核心关键词（例如「健康、身」）：",
          "acceptedAnswers": [
            "健康、身",
            "健康、身体部",
            "健康、身体部位与看病问诊"
          ],
          "explanation": "正确的核心关键词为「健康、身」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u10-l3": {
    "id": "zh-u10-l3",
    "subject": "mandarin",
    "unit": 10,
    "lessonNumber": 3,
    "title": "健康、身体部位与看病问诊 (Health & Medical Consultation) (第3讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：人体解剖部位名称、病痛主诉（头疼/发烧/咳嗽）、医患问诊及服药指导。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「健康、身体部位与看病问诊 (Health & Medical Consultation)」的核心语法法则与应用范例 (10.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '健康、身体部位与看病问诊 (Health & Medical Consultation)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (10.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (10.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (10.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「健康、身体部位与看病问诊 (Health & Medical Consultation)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「健康、身体部位与看病问诊 (Health & Medical Consultation)」的核心语法法则与应用范例 (10.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (10.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (10.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (10.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「健康、身体部位与看病问诊 (Health & Medical Consultation)」的正式语境下，最准确得体的表达是哪一项？（第10.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (10.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (10.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (10.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (10.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u10-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (10.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (10.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (10.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (10.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「健康、身体部位与看病问诊 (Health & Medical Consultation)」的掌握程度，请选出表述完全正确的标准范句（测试 10-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (10.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (10.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (10.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (10.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u10-l3）的核心关键词（例如「健康、身」）：",
          "acceptedAnswers": [
            "健康、身",
            "健康、身体部",
            "健康、身体部位与看病问诊"
          ],
          "explanation": "正确的核心关键词为「健康、身」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u10-l4": {
    "id": "zh-u10-l4",
    "subject": "mandarin",
    "unit": 10,
    "lessonNumber": 4,
    "title": "健康、身体部位与看病问诊 (Health & Medical Consultation) (第4讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：人体解剖部位名称、病痛主诉（头疼/发烧/咳嗽）、医患问诊及服药指导。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「健康、身体部位与看病问诊 (Health & Medical Consultation)」的核心语法法则与应用范例 (10.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '健康、身体部位与看病问诊 (Health & Medical Consultation)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (10.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (10.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (10.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「健康、身体部位与看病问诊 (Health & Medical Consultation)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「健康、身体部位与看病问诊 (Health & Medical Consultation)」的核心语法法则与应用范例 (10.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (10.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (10.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (10.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「健康、身体部位与看病问诊 (Health & Medical Consultation)」的正式语境下，最准确得体的表达是哪一项？（第10.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (10.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (10.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (10.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (10.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u10-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (10.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (10.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (10.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (10.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「健康、身体部位与看病问诊 (Health & Medical Consultation)」的掌握程度，请选出表述完全正确的标准范句（测试 10-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (10.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (10.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (10.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (10.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u10-l4）的核心关键词（例如「健康、身」）：",
          "acceptedAnswers": [
            "健康、身",
            "健康、身体部",
            "健康、身体部位与看病问诊"
          ],
          "explanation": "正确的核心关键词为「健康、身」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u10-l5": {
    "id": "zh-u10-l5",
    "subject": "mandarin",
    "unit": 10,
    "lessonNumber": 5,
    "title": "健康、身体部位与看病问诊 (Health & Medical Consultation) (第5讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：人体解剖部位名称、病痛主诉（头疼/发烧/咳嗽）、医患问诊及服药指导。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「健康、身体部位与看病问诊 (Health & Medical Consultation)」的核心语法法则与应用范例 (10.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '健康、身体部位与看病问诊 (Health & Medical Consultation)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (10.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (10.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (10.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「健康、身体部位与看病问诊 (Health & Medical Consultation)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「健康、身体部位与看病问诊 (Health & Medical Consultation)」的核心语法法则与应用范例 (10.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (10.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (10.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (10.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「健康、身体部位与看病问诊 (Health & Medical Consultation)」的正式语境下，最准确得体的表达是哪一项？（第10.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (10.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (10.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (10.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (10.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u10-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (10.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (10.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (10.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (10.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「健康、身体部位与看病问诊 (Health & Medical Consultation)」的掌握程度，请选出表述完全正确的标准范句（测试 10-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (10.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (10.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (10.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (10.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u10-l5）的核心关键词（例如「健康、身」）：",
          "acceptedAnswers": [
            "健康、身",
            "健康、身体部",
            "健康、身体部位与看病问诊"
          ],
          "explanation": "正确的核心关键词为「健康、身」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u11-l1": {
    "id": "zh-u11-l1",
    "subject": "mandarin",
    "unit": 11,
    "lessonNumber": 1,
    "title": "能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans) (第1讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：五大情态助动词在意愿、能力、许可及必然性上的精细语义分工。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的核心语法法则与应用范例 (11.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (11.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (11.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (11.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的核心语法法则与应用范例 (11.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (11.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (11.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (11.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的正式语境下，最准确得体的表达是哪一项？（第11.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (11.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (11.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (11.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (11.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u11-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (11.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (11.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (11.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (11.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的掌握程度，请选出表述完全正确的标准范句（测试 11-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (11.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (11.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (11.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (11.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u11-l1）的核心关键词（例如「能愿动词」）：",
          "acceptedAnswers": [
            "能愿动词",
            "能愿动词（想",
            "能愿动词（想/要/能/会/可以）与计划"
          ],
          "explanation": "正确的核心关键词为「能愿动词」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u11-l2": {
    "id": "zh-u11-l2",
    "subject": "mandarin",
    "unit": 11,
    "lessonNumber": 2,
    "title": "能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans) (第2讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：五大情态助动词在意愿、能力、许可及必然性上的精细语义分工。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的核心语法法则与应用范例 (11.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (11.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (11.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (11.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的核心语法法则与应用范例 (11.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (11.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (11.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (11.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的正式语境下，最准确得体的表达是哪一项？（第11.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (11.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (11.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (11.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (11.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u11-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (11.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (11.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (11.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (11.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的掌握程度，请选出表述完全正确的标准范句（测试 11-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (11.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (11.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (11.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (11.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u11-l2）的核心关键词（例如「能愿动词」）：",
          "acceptedAnswers": [
            "能愿动词",
            "能愿动词（想",
            "能愿动词（想/要/能/会/可以）与计划"
          ],
          "explanation": "正确的核心关键词为「能愿动词」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u11-l3": {
    "id": "zh-u11-l3",
    "subject": "mandarin",
    "unit": 11,
    "lessonNumber": 3,
    "title": "能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans) (第3讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：五大情态助动词在意愿、能力、许可及必然性上的精细语义分工。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的核心语法法则与应用范例 (11.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (11.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (11.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (11.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的核心语法法则与应用范例 (11.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (11.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (11.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (11.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的正式语境下，最准确得体的表达是哪一项？（第11.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (11.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (11.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (11.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (11.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u11-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (11.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (11.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (11.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (11.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的掌握程度，请选出表述完全正确的标准范句（测试 11-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (11.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (11.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (11.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (11.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u11-l3）的核心关键词（例如「能愿动词」）：",
          "acceptedAnswers": [
            "能愿动词",
            "能愿动词（想",
            "能愿动词（想/要/能/会/可以）与计划"
          ],
          "explanation": "正确的核心关键词为「能愿动词」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u11-l4": {
    "id": "zh-u11-l4",
    "subject": "mandarin",
    "unit": 11,
    "lessonNumber": 4,
    "title": "能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans) (第4讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：五大情态助动词在意愿、能力、许可及必然性上的精细语义分工。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的核心语法法则与应用范例 (11.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (11.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (11.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (11.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的核心语法法则与应用范例 (11.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (11.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (11.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (11.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的正式语境下，最准确得体的表达是哪一项？（第11.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (11.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (11.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (11.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (11.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u11-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (11.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (11.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (11.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (11.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的掌握程度，请选出表述完全正确的标准范句（测试 11-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (11.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (11.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (11.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (11.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u11-l4）的核心关键词（例如「能愿动词」）：",
          "acceptedAnswers": [
            "能愿动词",
            "能愿动词（想",
            "能愿动词（想/要/能/会/可以）与计划"
          ],
          "explanation": "正确的核心关键词为「能愿动词」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u11-l5": {
    "id": "zh-u11-l5",
    "subject": "mandarin",
    "unit": 11,
    "lessonNumber": 5,
    "title": "能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans) (第5讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：五大情态助动词在意愿、能力、许可及必然性上的精细语义分工。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的核心语法法则与应用范例 (11.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (11.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (11.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (11.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的核心语法法则与应用范例 (11.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (11.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (11.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (11.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的正式语境下，最准确得体的表达是哪一项？（第11.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (11.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (11.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (11.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (11.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u11-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (11.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (11.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (11.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (11.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「能愿动词（想/要/能/会/可以）与计划 (Modal Verbs & Plans)」的掌握程度，请选出表述完全正确的标准范句（测试 11-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (11.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (11.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (11.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (11.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u11-l5）的核心关键词（例如「能愿动词」）：",
          "acceptedAnswers": [
            "能愿动词",
            "能愿动词（想",
            "能愿动词（想/要/能/会/可以）与计划"
          ],
          "explanation": "正确的核心关键词为「能愿动词」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u12-l1": {
    "id": "zh-u12-l1",
    "subject": "mandarin",
    "unit": 12,
    "lessonNumber": 1,
    "title": "兴趣爱好、体育与离合词 (Hobbies & Separable Verbs) (第1讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：文娱体育词汇、离合动词（游泳/跑步/唱歌/跳舞/睡觉）的语法扩展与插入规则。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的核心语法法则与应用范例 (12.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (12.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (12.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (12.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的核心语法法则与应用范例 (12.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (12.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (12.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (12.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的正式语境下，最准确得体的表达是哪一项？（第12.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (12.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (12.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (12.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (12.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u12-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (12.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (12.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (12.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (12.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的掌握程度，请选出表述完全正确的标准范句（测试 12-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (12.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (12.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (12.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (12.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u12-l1）的核心关键词（例如「兴趣爱好」）：",
          "acceptedAnswers": [
            "兴趣爱好",
            "兴趣爱好、体",
            "兴趣爱好、体育与离合词"
          ],
          "explanation": "正确的核心关键词为「兴趣爱好」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u12-l2": {
    "id": "zh-u12-l2",
    "subject": "mandarin",
    "unit": 12,
    "lessonNumber": 2,
    "title": "兴趣爱好、体育与离合词 (Hobbies & Separable Verbs) (第2讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：文娱体育词汇、离合动词（游泳/跑步/唱歌/跳舞/睡觉）的语法扩展与插入规则。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的核心语法法则与应用范例 (12.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (12.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (12.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (12.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的核心语法法则与应用范例 (12.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (12.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (12.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (12.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的正式语境下，最准确得体的表达是哪一项？（第12.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (12.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (12.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (12.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (12.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u12-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (12.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (12.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (12.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (12.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的掌握程度，请选出表述完全正确的标准范句（测试 12-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (12.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (12.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (12.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (12.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u12-l2）的核心关键词（例如「兴趣爱好」）：",
          "acceptedAnswers": [
            "兴趣爱好",
            "兴趣爱好、体",
            "兴趣爱好、体育与离合词"
          ],
          "explanation": "正确的核心关键词为「兴趣爱好」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u12-l3": {
    "id": "zh-u12-l3",
    "subject": "mandarin",
    "unit": 12,
    "lessonNumber": 3,
    "title": "兴趣爱好、体育与离合词 (Hobbies & Separable Verbs) (第3讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：文娱体育词汇、离合动词（游泳/跑步/唱歌/跳舞/睡觉）的语法扩展与插入规则。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的核心语法法则与应用范例 (12.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (12.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (12.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (12.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的核心语法法则与应用范例 (12.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (12.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (12.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (12.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的正式语境下，最准确得体的表达是哪一项？（第12.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (12.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (12.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (12.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (12.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u12-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (12.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (12.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (12.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (12.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的掌握程度，请选出表述完全正确的标准范句（测试 12-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (12.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (12.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (12.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (12.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u12-l3）的核心关键词（例如「兴趣爱好」）：",
          "acceptedAnswers": [
            "兴趣爱好",
            "兴趣爱好、体",
            "兴趣爱好、体育与离合词"
          ],
          "explanation": "正确的核心关键词为「兴趣爱好」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u12-l4": {
    "id": "zh-u12-l4",
    "subject": "mandarin",
    "unit": 12,
    "lessonNumber": 4,
    "title": "兴趣爱好、体育与离合词 (Hobbies & Separable Verbs) (第4讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：文娱体育词汇、离合动词（游泳/跑步/唱歌/跳舞/睡觉）的语法扩展与插入规则。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的核心语法法则与应用范例 (12.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (12.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (12.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (12.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的核心语法法则与应用范例 (12.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (12.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (12.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (12.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的正式语境下，最准确得体的表达是哪一项？（第12.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (12.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (12.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (12.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (12.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u12-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (12.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (12.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (12.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (12.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的掌握程度，请选出表述完全正确的标准范句（测试 12-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (12.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (12.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (12.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (12.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u12-l4）的核心关键词（例如「兴趣爱好」）：",
          "acceptedAnswers": [
            "兴趣爱好",
            "兴趣爱好、体",
            "兴趣爱好、体育与离合词"
          ],
          "explanation": "正确的核心关键词为「兴趣爱好」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u12-l5": {
    "id": "zh-u12-l5",
    "subject": "mandarin",
    "unit": 12,
    "lessonNumber": 5,
    "title": "兴趣爱好、体育与离合词 (Hobbies & Separable Verbs) (第5讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：文娱体育词汇、离合动词（游泳/跑步/唱歌/跳舞/睡觉）的语法扩展与插入规则。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的核心语法法则与应用范例 (12.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (12.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (12.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (12.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的核心语法法则与应用范例 (12.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (12.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (12.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (12.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的正式语境下，最准确得体的表达是哪一项？（第12.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (12.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (12.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (12.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (12.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u12-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (12.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (12.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (12.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (12.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「兴趣爱好、体育与离合词 (Hobbies & Separable Verbs)」的掌握程度，请选出表述完全正确的标准范句（测试 12-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (12.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (12.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (12.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (12.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u12-l5）的核心关键词（例如「兴趣爱好」）：",
          "acceptedAnswers": [
            "兴趣爱好",
            "兴趣爱好、体",
            "兴趣爱好、体育与离合词"
          ],
          "explanation": "正确的核心关键词为「兴趣爱好」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u13-l1": {
    "id": "zh-u13-l1",
    "subject": "mandarin",
    "unit": 13,
    "lessonNumber": 1,
    "title": "职业、学术专业与职场对话 (Professions & Workplace Dialogue) (第1讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：职场职务称谓、大学专业设置、面试沟通及商务电子邮件基础格式。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的核心语法法则与应用范例 (13.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '职业、学术专业与职场对话 (Professions & Workplace Dialogue)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (13.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (13.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (13.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的核心语法法则与应用范例 (13.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (13.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (13.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (13.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的正式语境下，最准确得体的表达是哪一项？（第13.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (13.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (13.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (13.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (13.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u13-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (13.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (13.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (13.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (13.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的掌握程度，请选出表述完全正确的标准范句（测试 13-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (13.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (13.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (13.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (13.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u13-l1）的核心关键词（例如「职业、学」）：",
          "acceptedAnswers": [
            "职业、学",
            "职业、学术专",
            "职业、学术专业与职场对话"
          ],
          "explanation": "正确的核心关键词为「职业、学」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u13-l2": {
    "id": "zh-u13-l2",
    "subject": "mandarin",
    "unit": 13,
    "lessonNumber": 2,
    "title": "职业、学术专业与职场对话 (Professions & Workplace Dialogue) (第2讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：职场职务称谓、大学专业设置、面试沟通及商务电子邮件基础格式。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的核心语法法则与应用范例 (13.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '职业、学术专业与职场对话 (Professions & Workplace Dialogue)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (13.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (13.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (13.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的核心语法法则与应用范例 (13.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (13.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (13.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (13.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的正式语境下，最准确得体的表达是哪一项？（第13.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (13.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (13.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (13.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (13.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u13-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (13.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (13.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (13.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (13.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的掌握程度，请选出表述完全正确的标准范句（测试 13-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (13.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (13.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (13.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (13.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u13-l2）的核心关键词（例如「职业、学」）：",
          "acceptedAnswers": [
            "职业、学",
            "职业、学术专",
            "职业、学术专业与职场对话"
          ],
          "explanation": "正确的核心关键词为「职业、学」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u13-l3": {
    "id": "zh-u13-l3",
    "subject": "mandarin",
    "unit": 13,
    "lessonNumber": 3,
    "title": "职业、学术专业与职场对话 (Professions & Workplace Dialogue) (第3讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：职场职务称谓、大学专业设置、面试沟通及商务电子邮件基础格式。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的核心语法法则与应用范例 (13.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '职业、学术专业与职场对话 (Professions & Workplace Dialogue)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (13.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (13.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (13.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的核心语法法则与应用范例 (13.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (13.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (13.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (13.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的正式语境下，最准确得体的表达是哪一项？（第13.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (13.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (13.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (13.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (13.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u13-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (13.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (13.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (13.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (13.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的掌握程度，请选出表述完全正确的标准范句（测试 13-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (13.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (13.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (13.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (13.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u13-l3）的核心关键词（例如「职业、学」）：",
          "acceptedAnswers": [
            "职业、学",
            "职业、学术专",
            "职业、学术专业与职场对话"
          ],
          "explanation": "正确的核心关键词为「职业、学」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u13-l4": {
    "id": "zh-u13-l4",
    "subject": "mandarin",
    "unit": 13,
    "lessonNumber": 4,
    "title": "职业、学术专业与职场对话 (Professions & Workplace Dialogue) (第4讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：职场职务称谓、大学专业设置、面试沟通及商务电子邮件基础格式。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的核心语法法则与应用范例 (13.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '职业、学术专业与职场对话 (Professions & Workplace Dialogue)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (13.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (13.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (13.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的核心语法法则与应用范例 (13.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (13.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (13.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (13.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的正式语境下，最准确得体的表达是哪一项？（第13.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (13.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (13.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (13.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (13.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u13-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (13.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (13.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (13.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (13.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的掌握程度，请选出表述完全正确的标准范句（测试 13-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (13.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (13.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (13.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (13.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u13-l4）的核心关键词（例如「职业、学」）：",
          "acceptedAnswers": [
            "职业、学",
            "职业、学术专",
            "职业、学术专业与职场对话"
          ],
          "explanation": "正确的核心关键词为「职业、学」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u13-l5": {
    "id": "zh-u13-l5",
    "subject": "mandarin",
    "unit": 13,
    "lessonNumber": 5,
    "title": "职业、学术专业与职场对话 (Professions & Workplace Dialogue) (第5讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：职场职务称谓、大学专业设置、面试沟通及商务电子邮件基础格式。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的核心语法法则与应用范例 (13.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '职业、学术专业与职场对话 (Professions & Workplace Dialogue)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (13.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (13.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (13.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的核心语法法则与应用范例 (13.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (13.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (13.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (13.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的正式语境下，最准确得体的表达是哪一项？（第13.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (13.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (13.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (13.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (13.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u13-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (13.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (13.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (13.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (13.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「职业、学术专业与职场对话 (Professions & Workplace Dialogue)」的掌握程度，请选出表述完全正确的标准范句（测试 13-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (13.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (13.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (13.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (13.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u13-l5）的核心关键词（例如「职业、学」）：",
          "acceptedAnswers": [
            "职业、学",
            "职业、学术专",
            "职业、学术专业与职场对话"
          ],
          "explanation": "正确的核心关键词为「职业、学」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u14-l1": {
    "id": "zh-u14-l1",
    "subject": "mandarin",
    "unit": 14,
    "lessonNumber": 1,
    "title": "比较句（比/没有/不如/一样） (Comparative Structures) (第1讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：汉语四大比较句型（A比B更...、A没有B...、A不如B...、A跟B一样...）的句法制约。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「比较句（比/没有/不如/一样） (Comparative Structures)」的核心语法法则与应用范例 (14.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '比较句（比/没有/不如/一样） (Comparative Structures)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (14.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (14.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (14.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「比较句（比/没有/不如/一样） (Comparative Structures)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「比较句（比/没有/不如/一样） (Comparative Structures)」的核心语法法则与应用范例 (14.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (14.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (14.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (14.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「比较句（比/没有/不如/一样） (Comparative Structures)」的正式语境下，最准确得体的表达是哪一项？（第14.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (14.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (14.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (14.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (14.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u14-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (14.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (14.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (14.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (14.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「比较句（比/没有/不如/一样） (Comparative Structures)」的掌握程度，请选出表述完全正确的标准范句（测试 14-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (14.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (14.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (14.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (14.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u14-l1）的核心关键词（例如「比较句（」）：",
          "acceptedAnswers": [
            "比较句（",
            "比较句（比/",
            "比较句（比/没有/不如/一样）"
          ],
          "explanation": "正确的核心关键词为「比较句（」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u14-l2": {
    "id": "zh-u14-l2",
    "subject": "mandarin",
    "unit": 14,
    "lessonNumber": 2,
    "title": "比较句（比/没有/不如/一样） (Comparative Structures) (第2讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：汉语四大比较句型（A比B更...、A没有B...、A不如B...、A跟B一样...）的句法制约。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「比较句（比/没有/不如/一样） (Comparative Structures)」的核心语法法则与应用范例 (14.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '比较句（比/没有/不如/一样） (Comparative Structures)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (14.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (14.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (14.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「比较句（比/没有/不如/一样） (Comparative Structures)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「比较句（比/没有/不如/一样） (Comparative Structures)」的核心语法法则与应用范例 (14.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (14.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (14.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (14.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「比较句（比/没有/不如/一样） (Comparative Structures)」的正式语境下，最准确得体的表达是哪一项？（第14.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (14.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (14.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (14.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (14.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u14-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (14.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (14.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (14.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (14.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「比较句（比/没有/不如/一样） (Comparative Structures)」的掌握程度，请选出表述完全正确的标准范句（测试 14-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (14.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (14.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (14.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (14.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u14-l2）的核心关键词（例如「比较句（」）：",
          "acceptedAnswers": [
            "比较句（",
            "比较句（比/",
            "比较句（比/没有/不如/一样）"
          ],
          "explanation": "正确的核心关键词为「比较句（」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u14-l3": {
    "id": "zh-u14-l3",
    "subject": "mandarin",
    "unit": 14,
    "lessonNumber": 3,
    "title": "比较句（比/没有/不如/一样） (Comparative Structures) (第3讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：汉语四大比较句型（A比B更...、A没有B...、A不如B...、A跟B一样...）的句法制约。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「比较句（比/没有/不如/一样） (Comparative Structures)」的核心语法法则与应用范例 (14.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '比较句（比/没有/不如/一样） (Comparative Structures)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (14.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (14.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (14.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「比较句（比/没有/不如/一样） (Comparative Structures)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「比较句（比/没有/不如/一样） (Comparative Structures)」的核心语法法则与应用范例 (14.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (14.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (14.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (14.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「比较句（比/没有/不如/一样） (Comparative Structures)」的正式语境下，最准确得体的表达是哪一项？（第14.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (14.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (14.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (14.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (14.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u14-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (14.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (14.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (14.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (14.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「比较句（比/没有/不如/一样） (Comparative Structures)」的掌握程度，请选出表述完全正确的标准范句（测试 14-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (14.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (14.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (14.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (14.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u14-l3）的核心关键词（例如「比较句（」）：",
          "acceptedAnswers": [
            "比较句（",
            "比较句（比/",
            "比较句（比/没有/不如/一样）"
          ],
          "explanation": "正确的核心关键词为「比较句（」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u14-l4": {
    "id": "zh-u14-l4",
    "subject": "mandarin",
    "unit": 14,
    "lessonNumber": 4,
    "title": "比较句（比/没有/不如/一样） (Comparative Structures) (第4讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：汉语四大比较句型（A比B更...、A没有B...、A不如B...、A跟B一样...）的句法制约。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「比较句（比/没有/不如/一样） (Comparative Structures)」的核心语法法则与应用范例 (14.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '比较句（比/没有/不如/一样） (Comparative Structures)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (14.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (14.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (14.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「比较句（比/没有/不如/一样） (Comparative Structures)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「比较句（比/没有/不如/一样） (Comparative Structures)」的核心语法法则与应用范例 (14.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (14.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (14.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (14.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「比较句（比/没有/不如/一样） (Comparative Structures)」的正式语境下，最准确得体的表达是哪一项？（第14.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (14.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (14.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (14.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (14.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u14-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (14.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (14.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (14.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (14.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「比较句（比/没有/不如/一样） (Comparative Structures)」的掌握程度，请选出表述完全正确的标准范句（测试 14-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (14.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (14.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (14.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (14.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u14-l4）的核心关键词（例如「比较句（」）：",
          "acceptedAnswers": [
            "比较句（",
            "比较句（比/",
            "比较句（比/没有/不如/一样）"
          ],
          "explanation": "正确的核心关键词为「比较句（」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u14-l5": {
    "id": "zh-u14-l5",
    "subject": "mandarin",
    "unit": 14,
    "lessonNumber": 5,
    "title": "比较句（比/没有/不如/一样） (Comparative Structures) (第5讲)",
    "level": "A2",
    "objective": "全面掌握与熟练运用本课核心内容：汉语四大比较句型（A比B更...、A没有B...、A不如B...、A跟B一样...）的句法制约。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「比较句（比/没有/不如/一样） (Comparative Structures)」的核心语法法则与应用范例 (14.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '比较句（比/没有/不如/一样） (Comparative Structures)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (14.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (14.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (14.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「比较句（比/没有/不如/一样） (Comparative Structures)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「比较句（比/没有/不如/一样） (Comparative Structures)」的核心语法法则与应用范例 (14.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (14.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (14.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (14.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「比较句（比/没有/不如/一样） (Comparative Structures)」的正式语境下，最准确得体的表达是哪一项？（第14.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (14.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (14.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (14.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (14.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u14-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (14.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (14.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (14.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (14.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「比较句（比/没有/不如/一样） (Comparative Structures)」的掌握程度，请选出表述完全正确的标准范句（测试 14-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (14.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (14.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (14.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (14.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u14-l5）的核心关键词（例如「比较句（」）：",
          "acceptedAnswers": [
            "比较句（",
            "比较句（比/",
            "比较句（比/没有/不如/一样）"
          ],
          "explanation": "正确的核心关键词为「比较句（」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u15-l1": {
    "id": "zh-u15-l1",
    "subject": "mandarin",
    "unit": 15,
    "lessonNumber": 1,
    "title": "中国地理、旅游与名胜古迹 (Geography & Cultural Heritage) (第1讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：中国主要省区地貌、世界文化遗产（故宫/长城/兵马俑）及旅游出行用语。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的核心语法法则与应用范例 (15.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (15.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (15.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (15.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的核心语法法则与应用范例 (15.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (15.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (15.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (15.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的正式语境下，最准确得体的表达是哪一项？（第15.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (15.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (15.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (15.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (15.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u15-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (15.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (15.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (15.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (15.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的掌握程度，请选出表述完全正确的标准范句（测试 15-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (15.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (15.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (15.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (15.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u15-l1）的核心关键词（例如「中国地理」）：",
          "acceptedAnswers": [
            "中国地理",
            "中国地理、旅",
            "中国地理、旅游与名胜古迹"
          ],
          "explanation": "正确的核心关键词为「中国地理」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u15-l2": {
    "id": "zh-u15-l2",
    "subject": "mandarin",
    "unit": 15,
    "lessonNumber": 2,
    "title": "中国地理、旅游与名胜古迹 (Geography & Cultural Heritage) (第2讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：中国主要省区地貌、世界文化遗产（故宫/长城/兵马俑）及旅游出行用语。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的核心语法法则与应用范例 (15.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (15.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (15.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (15.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的核心语法法则与应用范例 (15.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (15.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (15.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (15.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的正式语境下，最准确得体的表达是哪一项？（第15.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (15.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (15.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (15.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (15.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u15-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (15.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (15.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (15.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (15.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的掌握程度，请选出表述完全正确的标准范句（测试 15-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (15.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (15.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (15.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (15.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u15-l2）的核心关键词（例如「中国地理」）：",
          "acceptedAnswers": [
            "中国地理",
            "中国地理、旅",
            "中国地理、旅游与名胜古迹"
          ],
          "explanation": "正确的核心关键词为「中国地理」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u15-l3": {
    "id": "zh-u15-l3",
    "subject": "mandarin",
    "unit": 15,
    "lessonNumber": 3,
    "title": "中国地理、旅游与名胜古迹 (Geography & Cultural Heritage) (第3讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：中国主要省区地貌、世界文化遗产（故宫/长城/兵马俑）及旅游出行用语。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的核心语法法则与应用范例 (15.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (15.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (15.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (15.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的核心语法法则与应用范例 (15.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (15.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (15.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (15.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的正式语境下，最准确得体的表达是哪一项？（第15.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (15.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (15.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (15.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (15.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u15-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (15.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (15.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (15.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (15.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的掌握程度，请选出表述完全正确的标准范句（测试 15-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (15.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (15.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (15.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (15.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u15-l3）的核心关键词（例如「中国地理」）：",
          "acceptedAnswers": [
            "中国地理",
            "中国地理、旅",
            "中国地理、旅游与名胜古迹"
          ],
          "explanation": "正确的核心关键词为「中国地理」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u15-l4": {
    "id": "zh-u15-l4",
    "subject": "mandarin",
    "unit": 15,
    "lessonNumber": 4,
    "title": "中国地理、旅游与名胜古迹 (Geography & Cultural Heritage) (第4讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：中国主要省区地貌、世界文化遗产（故宫/长城/兵马俑）及旅游出行用语。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的核心语法法则与应用范例 (15.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (15.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (15.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (15.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的核心语法法则与应用范例 (15.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (15.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (15.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (15.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的正式语境下，最准确得体的表达是哪一项？（第15.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (15.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (15.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (15.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (15.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u15-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (15.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (15.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (15.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (15.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的掌握程度，请选出表述完全正确的标准范句（测试 15-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (15.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (15.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (15.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (15.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u15-l4）的核心关键词（例如「中国地理」）：",
          "acceptedAnswers": [
            "中国地理",
            "中国地理、旅",
            "中国地理、旅游与名胜古迹"
          ],
          "explanation": "正确的核心关键词为「中国地理」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u15-l5": {
    "id": "zh-u15-l5",
    "subject": "mandarin",
    "unit": 15,
    "lessonNumber": 5,
    "title": "中国地理、旅游与名胜古迹 (Geography & Cultural Heritage) (第5讲)",
    "level": "A1",
    "objective": "全面掌握与熟练运用本课核心内容：中国主要省区地貌、世界文化遗产（故宫/长城/兵马俑）及旅游出行用语。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的核心语法法则与应用范例 (15.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (15.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (15.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (15.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的核心语法法则与应用范例 (15.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (15.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (15.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (15.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的正式语境下，最准确得体的表达是哪一项？（第15.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (15.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (15.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (15.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (15.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u15-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (15.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (15.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (15.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (15.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国地理、旅游与名胜古迹 (Geography & Cultural Heritage)」的掌握程度，请选出表述完全正确的标准范句（测试 15-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (15.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (15.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (15.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (15.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u15-l5）的核心关键词（例如「中国地理」）：",
          "acceptedAnswers": [
            "中国地理",
            "中国地理、旅",
            "中国地理、旅游与名胜古迹"
          ],
          "explanation": "正确的核心关键词为「中国地理」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u16-l1": {
    "id": "zh-u16-l1",
    "subject": "mandarin",
    "unit": 16,
    "lessonNumber": 1,
    "title": "把字句的深层结构与处置义 (The BA Disposal Construction) (第1讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：把字句的句法语义条件：谓语动词的处置性、宾语的有定性及补语的强制要求。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「把字句的深层结构与处置义 (The BA Disposal Construction)」的核心语法法则与应用范例 (16.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '把字句的深层结构与处置义 (The BA Disposal Construction)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (16.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (16.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (16.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「把字句的深层结构与处置义 (The BA Disposal Construction)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「把字句的深层结构与处置义 (The BA Disposal Construction)」的核心语法法则与应用范例 (16.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (16.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (16.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (16.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「把字句的深层结构与处置义 (The BA Disposal Construction)」的正式语境下，最准确得体的表达是哪一项？（第16.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (16.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (16.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (16.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (16.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u16-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (16.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (16.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (16.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (16.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「把字句的深层结构与处置义 (The BA Disposal Construction)」的掌握程度，请选出表述完全正确的标准范句（测试 16-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (16.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (16.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (16.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (16.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u16-l1）的核心关键词（例如「把字句的」）：",
          "acceptedAnswers": [
            "把字句的",
            "把字句的深层",
            "把字句的深层结构与处置义"
          ],
          "explanation": "正确的核心关键词为「把字句的」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u16-l2": {
    "id": "zh-u16-l2",
    "subject": "mandarin",
    "unit": 16,
    "lessonNumber": 2,
    "title": "把字句的深层结构与处置义 (The BA Disposal Construction) (第2讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：把字句的句法语义条件：谓语动词的处置性、宾语的有定性及补语的强制要求。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「把字句的深层结构与处置义 (The BA Disposal Construction)」的核心语法法则与应用范例 (16.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '把字句的深层结构与处置义 (The BA Disposal Construction)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (16.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (16.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (16.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「把字句的深层结构与处置义 (The BA Disposal Construction)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「把字句的深层结构与处置义 (The BA Disposal Construction)」的核心语法法则与应用范例 (16.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (16.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (16.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (16.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「把字句的深层结构与处置义 (The BA Disposal Construction)」的正式语境下，最准确得体的表达是哪一项？（第16.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (16.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (16.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (16.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (16.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u16-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (16.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (16.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (16.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (16.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「把字句的深层结构与处置义 (The BA Disposal Construction)」的掌握程度，请选出表述完全正确的标准范句（测试 16-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (16.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (16.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (16.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (16.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u16-l2）的核心关键词（例如「把字句的」）：",
          "acceptedAnswers": [
            "把字句的",
            "把字句的深层",
            "把字句的深层结构与处置义"
          ],
          "explanation": "正确的核心关键词为「把字句的」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u16-l3": {
    "id": "zh-u16-l3",
    "subject": "mandarin",
    "unit": 16,
    "lessonNumber": 3,
    "title": "把字句的深层结构与处置义 (The BA Disposal Construction) (第3讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：把字句的句法语义条件：谓语动词的处置性、宾语的有定性及补语的强制要求。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「把字句的深层结构与处置义 (The BA Disposal Construction)」的核心语法法则与应用范例 (16.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '把字句的深层结构与处置义 (The BA Disposal Construction)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (16.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (16.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (16.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「把字句的深层结构与处置义 (The BA Disposal Construction)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「把字句的深层结构与处置义 (The BA Disposal Construction)」的核心语法法则与应用范例 (16.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (16.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (16.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (16.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「把字句的深层结构与处置义 (The BA Disposal Construction)」的正式语境下，最准确得体的表达是哪一项？（第16.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (16.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (16.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (16.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (16.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u16-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (16.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (16.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (16.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (16.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「把字句的深层结构与处置义 (The BA Disposal Construction)」的掌握程度，请选出表述完全正确的标准范句（测试 16-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (16.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (16.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (16.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (16.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u16-l3）的核心关键词（例如「把字句的」）：",
          "acceptedAnswers": [
            "把字句的",
            "把字句的深层",
            "把字句的深层结构与处置义"
          ],
          "explanation": "正确的核心关键词为「把字句的」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u16-l4": {
    "id": "zh-u16-l4",
    "subject": "mandarin",
    "unit": 16,
    "lessonNumber": 4,
    "title": "把字句的深层结构与处置义 (The BA Disposal Construction) (第4讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：把字句的句法语义条件：谓语动词的处置性、宾语的有定性及补语的强制要求。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「把字句的深层结构与处置义 (The BA Disposal Construction)」的核心语法法则与应用范例 (16.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '把字句的深层结构与处置义 (The BA Disposal Construction)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (16.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (16.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (16.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「把字句的深层结构与处置义 (The BA Disposal Construction)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「把字句的深层结构与处置义 (The BA Disposal Construction)」的核心语法法则与应用范例 (16.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (16.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (16.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (16.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「把字句的深层结构与处置义 (The BA Disposal Construction)」的正式语境下，最准确得体的表达是哪一项？（第16.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (16.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (16.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (16.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (16.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u16-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (16.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (16.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (16.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (16.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「把字句的深层结构与处置义 (The BA Disposal Construction)」的掌握程度，请选出表述完全正确的标准范句（测试 16-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (16.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (16.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (16.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (16.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u16-l4）的核心关键词（例如「把字句的」）：",
          "acceptedAnswers": [
            "把字句的",
            "把字句的深层",
            "把字句的深层结构与处置义"
          ],
          "explanation": "正确的核心关键词为「把字句的」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u16-l5": {
    "id": "zh-u16-l5",
    "subject": "mandarin",
    "unit": 16,
    "lessonNumber": 5,
    "title": "把字句的深层结构与处置义 (The BA Disposal Construction) (第5讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：把字句的句法语义条件：谓语动词的处置性、宾语的有定性及补语的强制要求。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「把字句的深层结构与处置义 (The BA Disposal Construction)」的核心语法法则与应用范例 (16.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '把字句的深层结构与处置义 (The BA Disposal Construction)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (16.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (16.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (16.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「把字句的深层结构与处置义 (The BA Disposal Construction)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「把字句的深层结构与处置义 (The BA Disposal Construction)」的核心语法法则与应用范例 (16.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (16.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (16.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (16.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「把字句的深层结构与处置义 (The BA Disposal Construction)」的正式语境下，最准确得体的表达是哪一项？（第16.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (16.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (16.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (16.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (16.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u16-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (16.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (16.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (16.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (16.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「把字句的深层结构与处置义 (The BA Disposal Construction)」的掌握程度，请选出表述完全正确的标准范句（测试 16-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (16.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (16.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (16.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (16.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u16-l5）的核心关键词（例如「把字句的」）：",
          "acceptedAnswers": [
            "把字句的",
            "把字句的深层",
            "把字句的深层结构与处置义"
          ],
          "explanation": "正确的核心关键词为「把字句的」。"
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
    "title": "被字句与受事主语句 (The BEI Passive Voice) (第1讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：介词「被/叫/让」构成的被动句、受事主语句及被动句的负面与中性语用色彩。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「被字句与受事主语句 (The BEI Passive Voice)」的核心语法法则与应用范例 (17.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '被字句与受事主语句 (The BEI Passive Voice)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (17.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (17.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (17.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「被字句与受事主语句 (The BEI Passive Voice)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「被字句与受事主语句 (The BEI Passive Voice)」的核心语法法则与应用范例 (17.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (17.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (17.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (17.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「被字句与受事主语句 (The BEI Passive Voice)」的正式语境下，最准确得体的表达是哪一项？（第17.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (17.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (17.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (17.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (17.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u17-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (17.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (17.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (17.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (17.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「被字句与受事主语句 (The BEI Passive Voice)」的掌握程度，请选出表述完全正确的标准范句（测试 17-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (17.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (17.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (17.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (17.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u17-l1）的核心关键词（例如「被字句与」）：",
          "acceptedAnswers": [
            "被字句与",
            "被字句与受事",
            "被字句与受事主语句"
          ],
          "explanation": "正确的核心关键词为「被字句与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u17-l2": {
    "id": "zh-u17-l2",
    "subject": "mandarin",
    "unit": 17,
    "lessonNumber": 2,
    "title": "被字句与受事主语句 (The BEI Passive Voice) (第2讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：介词「被/叫/让」构成的被动句、受事主语句及被动句的负面与中性语用色彩。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「被字句与受事主语句 (The BEI Passive Voice)」的核心语法法则与应用范例 (17.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '被字句与受事主语句 (The BEI Passive Voice)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (17.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (17.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (17.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「被字句与受事主语句 (The BEI Passive Voice)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「被字句与受事主语句 (The BEI Passive Voice)」的核心语法法则与应用范例 (17.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (17.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (17.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (17.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「被字句与受事主语句 (The BEI Passive Voice)」的正式语境下，最准确得体的表达是哪一项？（第17.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (17.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (17.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (17.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (17.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u17-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (17.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (17.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (17.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (17.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「被字句与受事主语句 (The BEI Passive Voice)」的掌握程度，请选出表述完全正确的标准范句（测试 17-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (17.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (17.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (17.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (17.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u17-l2）的核心关键词（例如「被字句与」）：",
          "acceptedAnswers": [
            "被字句与",
            "被字句与受事",
            "被字句与受事主语句"
          ],
          "explanation": "正确的核心关键词为「被字句与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u17-l3": {
    "id": "zh-u17-l3",
    "subject": "mandarin",
    "unit": 17,
    "lessonNumber": 3,
    "title": "被字句与受事主语句 (The BEI Passive Voice) (第3讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：介词「被/叫/让」构成的被动句、受事主语句及被动句的负面与中性语用色彩。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「被字句与受事主语句 (The BEI Passive Voice)」的核心语法法则与应用范例 (17.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '被字句与受事主语句 (The BEI Passive Voice)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (17.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (17.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (17.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「被字句与受事主语句 (The BEI Passive Voice)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「被字句与受事主语句 (The BEI Passive Voice)」的核心语法法则与应用范例 (17.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (17.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (17.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (17.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「被字句与受事主语句 (The BEI Passive Voice)」的正式语境下，最准确得体的表达是哪一项？（第17.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (17.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (17.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (17.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (17.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u17-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (17.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (17.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (17.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (17.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「被字句与受事主语句 (The BEI Passive Voice)」的掌握程度，请选出表述完全正确的标准范句（测试 17-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (17.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (17.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (17.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (17.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u17-l3）的核心关键词（例如「被字句与」）：",
          "acceptedAnswers": [
            "被字句与",
            "被字句与受事",
            "被字句与受事主语句"
          ],
          "explanation": "正确的核心关键词为「被字句与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u17-l4": {
    "id": "zh-u17-l4",
    "subject": "mandarin",
    "unit": 17,
    "lessonNumber": 4,
    "title": "被字句与受事主语句 (The BEI Passive Voice) (第4讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：介词「被/叫/让」构成的被动句、受事主语句及被动句的负面与中性语用色彩。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「被字句与受事主语句 (The BEI Passive Voice)」的核心语法法则与应用范例 (17.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '被字句与受事主语句 (The BEI Passive Voice)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (17.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (17.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (17.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「被字句与受事主语句 (The BEI Passive Voice)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「被字句与受事主语句 (The BEI Passive Voice)」的核心语法法则与应用范例 (17.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (17.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (17.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (17.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「被字句与受事主语句 (The BEI Passive Voice)」的正式语境下，最准确得体的表达是哪一项？（第17.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (17.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (17.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (17.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (17.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u17-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (17.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (17.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (17.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (17.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「被字句与受事主语句 (The BEI Passive Voice)」的掌握程度，请选出表述完全正确的标准范句（测试 17-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (17.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (17.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (17.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (17.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u17-l4）的核心关键词（例如「被字句与」）：",
          "acceptedAnswers": [
            "被字句与",
            "被字句与受事",
            "被字句与受事主语句"
          ],
          "explanation": "正确的核心关键词为「被字句与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u17-l5": {
    "id": "zh-u17-l5",
    "subject": "mandarin",
    "unit": 17,
    "lessonNumber": 5,
    "title": "被字句与受事主语句 (The BEI Passive Voice) (第5讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：介词「被/叫/让」构成的被动句、受事主语句及被动句的负面与中性语用色彩。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「被字句与受事主语句 (The BEI Passive Voice)」的核心语法法则与应用范例 (17.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '被字句与受事主语句 (The BEI Passive Voice)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (17.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (17.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (17.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「被字句与受事主语句 (The BEI Passive Voice)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「被字句与受事主语句 (The BEI Passive Voice)」的核心语法法则与应用范例 (17.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (17.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (17.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (17.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「被字句与受事主语句 (The BEI Passive Voice)」的正式语境下，最准确得体的表达是哪一项？（第17.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (17.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (17.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (17.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (17.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u17-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (17.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (17.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (17.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (17.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「被字句与受事主语句 (The BEI Passive Voice)」的掌握程度，请选出表述完全正确的标准范句（测试 17-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (17.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (17.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (17.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (17.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u17-l5）的核心关键词（例如「被字句与」）：",
          "acceptedAnswers": [
            "被字句与",
            "被字句与受事",
            "被字句与受事主语句"
          ],
          "explanation": "正确的核心关键词为「被字句与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u18-l1": {
    "id": "zh-u18-l1",
    "subject": "mandarin",
    "unit": 18,
    "lessonNumber": 1,
    "title": "结果补语与趋向补语 (Resultative & Directional Complements) (第1讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：复合趋向补语（出来/进去/起来/下去）的引申用法与结果补语（见/到/完/好/懂）。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「结果补语与趋向补语 (Resultative & Directional Complements)」的核心语法法则与应用范例 (18.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '结果补语与趋向补语 (Resultative & Directional Complements)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (18.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (18.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (18.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「结果补语与趋向补语 (Resultative & Directional Complements)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「结果补语与趋向补语 (Resultative & Directional Complements)」的核心语法法则与应用范例 (18.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (18.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (18.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (18.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「结果补语与趋向补语 (Resultative & Directional Complements)」的正式语境下，最准确得体的表达是哪一项？（第18.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (18.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (18.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (18.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (18.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u18-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (18.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (18.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (18.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (18.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「结果补语与趋向补语 (Resultative & Directional Complements)」的掌握程度，请选出表述完全正确的标准范句（测试 18-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (18.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (18.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (18.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (18.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u18-l1）的核心关键词（例如「结果补语」）：",
          "acceptedAnswers": [
            "结果补语",
            "结果补语与趋",
            "结果补语与趋向补语"
          ],
          "explanation": "正确的核心关键词为「结果补语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u18-l2": {
    "id": "zh-u18-l2",
    "subject": "mandarin",
    "unit": 18,
    "lessonNumber": 2,
    "title": "结果补语与趋向补语 (Resultative & Directional Complements) (第2讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：复合趋向补语（出来/进去/起来/下去）的引申用法与结果补语（见/到/完/好/懂）。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「结果补语与趋向补语 (Resultative & Directional Complements)」的核心语法法则与应用范例 (18.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '结果补语与趋向补语 (Resultative & Directional Complements)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (18.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (18.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (18.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「结果补语与趋向补语 (Resultative & Directional Complements)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「结果补语与趋向补语 (Resultative & Directional Complements)」的核心语法法则与应用范例 (18.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (18.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (18.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (18.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「结果补语与趋向补语 (Resultative & Directional Complements)」的正式语境下，最准确得体的表达是哪一项？（第18.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (18.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (18.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (18.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (18.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u18-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (18.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (18.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (18.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (18.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「结果补语与趋向补语 (Resultative & Directional Complements)」的掌握程度，请选出表述完全正确的标准范句（测试 18-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (18.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (18.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (18.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (18.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u18-l2）的核心关键词（例如「结果补语」）：",
          "acceptedAnswers": [
            "结果补语",
            "结果补语与趋",
            "结果补语与趋向补语"
          ],
          "explanation": "正确的核心关键词为「结果补语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u18-l3": {
    "id": "zh-u18-l3",
    "subject": "mandarin",
    "unit": 18,
    "lessonNumber": 3,
    "title": "结果补语与趋向补语 (Resultative & Directional Complements) (第3讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：复合趋向补语（出来/进去/起来/下去）的引申用法与结果补语（见/到/完/好/懂）。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「结果补语与趋向补语 (Resultative & Directional Complements)」的核心语法法则与应用范例 (18.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '结果补语与趋向补语 (Resultative & Directional Complements)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (18.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (18.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (18.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「结果补语与趋向补语 (Resultative & Directional Complements)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「结果补语与趋向补语 (Resultative & Directional Complements)」的核心语法法则与应用范例 (18.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (18.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (18.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (18.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「结果补语与趋向补语 (Resultative & Directional Complements)」的正式语境下，最准确得体的表达是哪一项？（第18.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (18.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (18.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (18.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (18.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u18-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (18.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (18.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (18.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (18.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「结果补语与趋向补语 (Resultative & Directional Complements)」的掌握程度，请选出表述完全正确的标准范句（测试 18-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (18.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (18.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (18.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (18.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u18-l3）的核心关键词（例如「结果补语」）：",
          "acceptedAnswers": [
            "结果补语",
            "结果补语与趋",
            "结果补语与趋向补语"
          ],
          "explanation": "正确的核心关键词为「结果补语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u18-l4": {
    "id": "zh-u18-l4",
    "subject": "mandarin",
    "unit": 18,
    "lessonNumber": 4,
    "title": "结果补语与趋向补语 (Resultative & Directional Complements) (第4讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：复合趋向补语（出来/进去/起来/下去）的引申用法与结果补语（见/到/完/好/懂）。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「结果补语与趋向补语 (Resultative & Directional Complements)」的核心语法法则与应用范例 (18.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '结果补语与趋向补语 (Resultative & Directional Complements)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (18.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (18.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (18.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「结果补语与趋向补语 (Resultative & Directional Complements)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「结果补语与趋向补语 (Resultative & Directional Complements)」的核心语法法则与应用范例 (18.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (18.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (18.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (18.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「结果补语与趋向补语 (Resultative & Directional Complements)」的正式语境下，最准确得体的表达是哪一项？（第18.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (18.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (18.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (18.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (18.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u18-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (18.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (18.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (18.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (18.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「结果补语与趋向补语 (Resultative & Directional Complements)」的掌握程度，请选出表述完全正确的标准范句（测试 18-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (18.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (18.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (18.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (18.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u18-l4）的核心关键词（例如「结果补语」）：",
          "acceptedAnswers": [
            "结果补语",
            "结果补语与趋",
            "结果补语与趋向补语"
          ],
          "explanation": "正确的核心关键词为「结果补语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u18-l5": {
    "id": "zh-u18-l5",
    "subject": "mandarin",
    "unit": 18,
    "lessonNumber": 5,
    "title": "结果补语与趋向补语 (Resultative & Directional Complements) (第5讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：复合趋向补语（出来/进去/起来/下去）的引申用法与结果补语（见/到/完/好/懂）。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「结果补语与趋向补语 (Resultative & Directional Complements)」的核心语法法则与应用范例 (18.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '结果补语与趋向补语 (Resultative & Directional Complements)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (18.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (18.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (18.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「结果补语与趋向补语 (Resultative & Directional Complements)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「结果补语与趋向补语 (Resultative & Directional Complements)」的核心语法法则与应用范例 (18.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (18.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (18.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (18.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「结果补语与趋向补语 (Resultative & Directional Complements)」的正式语境下，最准确得体的表达是哪一项？（第18.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (18.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (18.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (18.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (18.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u18-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (18.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (18.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (18.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (18.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「结果补语与趋向补语 (Resultative & Directional Complements)」的掌握程度，请选出表述完全正确的标准范句（测试 18-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (18.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (18.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (18.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (18.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u18-l5）的核心关键词（例如「结果补语」）：",
          "acceptedAnswers": [
            "结果补语",
            "结果补语与趋",
            "结果补语与趋向补语"
          ],
          "explanation": "正确的核心关键词为「结果补语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u19-l1": {
    "id": "zh-u19-l1",
    "subject": "mandarin",
    "unit": 19,
    "lessonNumber": 1,
    "title": "可能补语（得/不）与程度表达 (Potential Complements) (第1讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：可能补语的肯定与否定式（看得懂/听不清楚）、状态补语及程度补语的用法。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「可能补语（得/不）与程度表达 (Potential Complements)」的核心语法法则与应用范例 (19.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '可能补语（得/不）与程度表达 (Potential Complements)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (19.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (19.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (19.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「可能补语（得/不）与程度表达 (Potential Complements)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「可能补语（得/不）与程度表达 (Potential Complements)」的核心语法法则与应用范例 (19.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (19.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (19.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (19.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「可能补语（得/不）与程度表达 (Potential Complements)」的正式语境下，最准确得体的表达是哪一项？（第19.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (19.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (19.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (19.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (19.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u19-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (19.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (19.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (19.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (19.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「可能补语（得/不）与程度表达 (Potential Complements)」的掌握程度，请选出表述完全正确的标准范句（测试 19-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (19.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (19.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (19.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (19.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u19-l1）的核心关键词（例如「可能补语」）：",
          "acceptedAnswers": [
            "可能补语",
            "可能补语（得",
            "可能补语（得/不）与程度表达"
          ],
          "explanation": "正确的核心关键词为「可能补语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u19-l2": {
    "id": "zh-u19-l2",
    "subject": "mandarin",
    "unit": 19,
    "lessonNumber": 2,
    "title": "可能补语（得/不）与程度表达 (Potential Complements) (第2讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：可能补语的肯定与否定式（看得懂/听不清楚）、状态补语及程度补语的用法。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「可能补语（得/不）与程度表达 (Potential Complements)」的核心语法法则与应用范例 (19.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '可能补语（得/不）与程度表达 (Potential Complements)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (19.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (19.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (19.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「可能补语（得/不）与程度表达 (Potential Complements)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「可能补语（得/不）与程度表达 (Potential Complements)」的核心语法法则与应用范例 (19.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (19.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (19.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (19.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「可能补语（得/不）与程度表达 (Potential Complements)」的正式语境下，最准确得体的表达是哪一项？（第19.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (19.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (19.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (19.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (19.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u19-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (19.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (19.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (19.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (19.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「可能补语（得/不）与程度表达 (Potential Complements)」的掌握程度，请选出表述完全正确的标准范句（测试 19-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (19.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (19.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (19.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (19.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u19-l2）的核心关键词（例如「可能补语」）：",
          "acceptedAnswers": [
            "可能补语",
            "可能补语（得",
            "可能补语（得/不）与程度表达"
          ],
          "explanation": "正确的核心关键词为「可能补语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u19-l3": {
    "id": "zh-u19-l3",
    "subject": "mandarin",
    "unit": 19,
    "lessonNumber": 3,
    "title": "可能补语（得/不）与程度表达 (Potential Complements) (第3讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：可能补语的肯定与否定式（看得懂/听不清楚）、状态补语及程度补语的用法。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「可能补语（得/不）与程度表达 (Potential Complements)」的核心语法法则与应用范例 (19.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '可能补语（得/不）与程度表达 (Potential Complements)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (19.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (19.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (19.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「可能补语（得/不）与程度表达 (Potential Complements)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「可能补语（得/不）与程度表达 (Potential Complements)」的核心语法法则与应用范例 (19.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (19.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (19.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (19.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「可能补语（得/不）与程度表达 (Potential Complements)」的正式语境下，最准确得体的表达是哪一项？（第19.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (19.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (19.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (19.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (19.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u19-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (19.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (19.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (19.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (19.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「可能补语（得/不）与程度表达 (Potential Complements)」的掌握程度，请选出表述完全正确的标准范句（测试 19-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (19.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (19.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (19.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (19.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u19-l3）的核心关键词（例如「可能补语」）：",
          "acceptedAnswers": [
            "可能补语",
            "可能补语（得",
            "可能补语（得/不）与程度表达"
          ],
          "explanation": "正确的核心关键词为「可能补语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u19-l4": {
    "id": "zh-u19-l4",
    "subject": "mandarin",
    "unit": 19,
    "lessonNumber": 4,
    "title": "可能补语（得/不）与程度表达 (Potential Complements) (第4讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：可能补语的肯定与否定式（看得懂/听不清楚）、状态补语及程度补语的用法。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「可能补语（得/不）与程度表达 (Potential Complements)」的核心语法法则与应用范例 (19.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '可能补语（得/不）与程度表达 (Potential Complements)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (19.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (19.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (19.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「可能补语（得/不）与程度表达 (Potential Complements)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「可能补语（得/不）与程度表达 (Potential Complements)」的核心语法法则与应用范例 (19.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (19.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (19.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (19.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「可能补语（得/不）与程度表达 (Potential Complements)」的正式语境下，最准确得体的表达是哪一项？（第19.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (19.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (19.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (19.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (19.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u19-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (19.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (19.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (19.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (19.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「可能补语（得/不）与程度表达 (Potential Complements)」的掌握程度，请选出表述完全正确的标准范句（测试 19-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (19.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (19.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (19.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (19.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u19-l4）的核心关键词（例如「可能补语」）：",
          "acceptedAnswers": [
            "可能补语",
            "可能补语（得",
            "可能补语（得/不）与程度表达"
          ],
          "explanation": "正确的核心关键词为「可能补语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u19-l5": {
    "id": "zh-u19-l5",
    "subject": "mandarin",
    "unit": 19,
    "lessonNumber": 5,
    "title": "可能补语（得/不）与程度表达 (Potential Complements) (第5讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：可能补语的肯定与否定式（看得懂/听不清楚）、状态补语及程度补语的用法。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「可能补语（得/不）与程度表达 (Potential Complements)」的核心语法法则与应用范例 (19.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '可能补语（得/不）与程度表达 (Potential Complements)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (19.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (19.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (19.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「可能补语（得/不）与程度表达 (Potential Complements)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「可能补语（得/不）与程度表达 (Potential Complements)」的核心语法法则与应用范例 (19.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (19.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (19.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (19.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「可能补语（得/不）与程度表达 (Potential Complements)」的正式语境下，最准确得体的表达是哪一项？（第19.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (19.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (19.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (19.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (19.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u19-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (19.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (19.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (19.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (19.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「可能补语（得/不）与程度表达 (Potential Complements)」的掌握程度，请选出表述完全正确的标准范句（测试 19-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (19.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (19.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (19.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (19.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u19-l5）的核心关键词（例如「可能补语」）：",
          "acceptedAnswers": [
            "可能补语",
            "可能补语（得",
            "可能补语（得/不）与程度表达"
          ],
          "explanation": "正确的核心关键词为「可能补语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u20-l1": {
    "id": "zh-u20-l1",
    "subject": "mandarin",
    "unit": 20,
    "lessonNumber": 1,
    "title": "存现句与空间状态描写 (Existential Sentences) (第1讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：处所词作主语的存现句（存在句/出现句/消失句）及动词后附助词「着/了」。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「存现句与空间状态描写 (Existential Sentences)」的核心语法法则与应用范例 (20.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '存现句与空间状态描写 (Existential Sentences)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (20.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (20.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (20.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「存现句与空间状态描写 (Existential Sentences)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「存现句与空间状态描写 (Existential Sentences)」的核心语法法则与应用范例 (20.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (20.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (20.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (20.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「存现句与空间状态描写 (Existential Sentences)」的正式语境下，最准确得体的表达是哪一项？（第20.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (20.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (20.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (20.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (20.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u20-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (20.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (20.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (20.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (20.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「存现句与空间状态描写 (Existential Sentences)」的掌握程度，请选出表述完全正确的标准范句（测试 20-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (20.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (20.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (20.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (20.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u20-l1）的核心关键词（例如「存现句与」）：",
          "acceptedAnswers": [
            "存现句与",
            "存现句与空间",
            "存现句与空间状态描写"
          ],
          "explanation": "正确的核心关键词为「存现句与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u20-l2": {
    "id": "zh-u20-l2",
    "subject": "mandarin",
    "unit": 20,
    "lessonNumber": 2,
    "title": "存现句与空间状态描写 (Existential Sentences) (第2讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：处所词作主语的存现句（存在句/出现句/消失句）及动词后附助词「着/了」。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「存现句与空间状态描写 (Existential Sentences)」的核心语法法则与应用范例 (20.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '存现句与空间状态描写 (Existential Sentences)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (20.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (20.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (20.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「存现句与空间状态描写 (Existential Sentences)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「存现句与空间状态描写 (Existential Sentences)」的核心语法法则与应用范例 (20.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (20.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (20.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (20.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「存现句与空间状态描写 (Existential Sentences)」的正式语境下，最准确得体的表达是哪一项？（第20.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (20.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (20.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (20.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (20.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u20-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (20.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (20.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (20.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (20.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「存现句与空间状态描写 (Existential Sentences)」的掌握程度，请选出表述完全正确的标准范句（测试 20-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (20.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (20.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (20.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (20.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u20-l2）的核心关键词（例如「存现句与」）：",
          "acceptedAnswers": [
            "存现句与",
            "存现句与空间",
            "存现句与空间状态描写"
          ],
          "explanation": "正确的核心关键词为「存现句与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u20-l3": {
    "id": "zh-u20-l3",
    "subject": "mandarin",
    "unit": 20,
    "lessonNumber": 3,
    "title": "存现句与空间状态描写 (Existential Sentences) (第3讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：处所词作主语的存现句（存在句/出现句/消失句）及动词后附助词「着/了」。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「存现句与空间状态描写 (Existential Sentences)」的核心语法法则与应用范例 (20.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '存现句与空间状态描写 (Existential Sentences)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (20.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (20.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (20.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「存现句与空间状态描写 (Existential Sentences)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「存现句与空间状态描写 (Existential Sentences)」的核心语法法则与应用范例 (20.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (20.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (20.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (20.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「存现句与空间状态描写 (Existential Sentences)」的正式语境下，最准确得体的表达是哪一项？（第20.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (20.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (20.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (20.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (20.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u20-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (20.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (20.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (20.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (20.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「存现句与空间状态描写 (Existential Sentences)」的掌握程度，请选出表述完全正确的标准范句（测试 20-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (20.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (20.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (20.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (20.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u20-l3）的核心关键词（例如「存现句与」）：",
          "acceptedAnswers": [
            "存现句与",
            "存现句与空间",
            "存现句与空间状态描写"
          ],
          "explanation": "正确的核心关键词为「存现句与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u20-l4": {
    "id": "zh-u20-l4",
    "subject": "mandarin",
    "unit": 20,
    "lessonNumber": 4,
    "title": "存现句与空间状态描写 (Existential Sentences) (第4讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：处所词作主语的存现句（存在句/出现句/消失句）及动词后附助词「着/了」。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「存现句与空间状态描写 (Existential Sentences)」的核心语法法则与应用范例 (20.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '存现句与空间状态描写 (Existential Sentences)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (20.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (20.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (20.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「存现句与空间状态描写 (Existential Sentences)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「存现句与空间状态描写 (Existential Sentences)」的核心语法法则与应用范例 (20.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (20.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (20.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (20.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「存现句与空间状态描写 (Existential Sentences)」的正式语境下，最准确得体的表达是哪一项？（第20.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (20.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (20.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (20.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (20.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u20-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (20.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (20.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (20.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (20.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「存现句与空间状态描写 (Existential Sentences)」的掌握程度，请选出表述完全正确的标准范句（测试 20-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (20.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (20.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (20.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (20.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u20-l4）的核心关键词（例如「存现句与」）：",
          "acceptedAnswers": [
            "存现句与",
            "存现句与空间",
            "存现句与空间状态描写"
          ],
          "explanation": "正确的核心关键词为「存现句与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u20-l5": {
    "id": "zh-u20-l5",
    "subject": "mandarin",
    "unit": 20,
    "lessonNumber": 5,
    "title": "存现句与空间状态描写 (Existential Sentences) (第5讲)",
    "level": "B1",
    "objective": "全面掌握与熟练运用本课核心内容：处所词作主语的存现句（存在句/出现句/消失句）及动词后附助词「着/了」。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「存现句与空间状态描写 (Existential Sentences)」的核心语法法则与应用范例 (20.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '存现句与空间状态描写 (Existential Sentences)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (20.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (20.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (20.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「存现句与空间状态描写 (Existential Sentences)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「存现句与空间状态描写 (Existential Sentences)」的核心语法法则与应用范例 (20.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (20.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (20.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (20.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「存现句与空间状态描写 (Existential Sentences)」的正式语境下，最准确得体的表达是哪一项？（第20.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (20.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (20.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (20.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (20.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u20-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (20.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (20.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (20.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (20.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「存现句与空间状态描写 (Existential Sentences)」的掌握程度，请选出表述完全正确的标准范句（测试 20-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (20.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (20.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (20.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (20.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u20-l5）的核心关键词（例如「存现句与」）：",
          "acceptedAnswers": [
            "存现句与",
            "存现句与空间",
            "存现句与空间状态描写"
          ],
          "explanation": "正确的核心关键词为「存现句与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u21-l1": {
    "id": "zh-u21-l1",
    "subject": "mandarin",
    "unit": 21,
    "lessonNumber": 1,
    "title": "关联词与复杂复句结构 (Complex Sentences & Connectives) (第1讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：递进、转折、因果、假设、条件及让步复句的高级关联词搭配（不仅...而且...、虽然...但是...）。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「关联词与复杂复句结构 (Complex Sentences & Connectives)」的核心语法法则与应用范例 (21.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '关联词与复杂复句结构 (Complex Sentences & Connectives)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (21.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (21.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (21.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「关联词与复杂复句结构 (Complex Sentences & Connectives)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「关联词与复杂复句结构 (Complex Sentences & Connectives)」的核心语法法则与应用范例 (21.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (21.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (21.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (21.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「关联词与复杂复句结构 (Complex Sentences & Connectives)」的正式语境下，最准确得体的表达是哪一项？（第21.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (21.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (21.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (21.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (21.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u21-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (21.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (21.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (21.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (21.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「关联词与复杂复句结构 (Complex Sentences & Connectives)」的掌握程度，请选出表述完全正确的标准范句（测试 21-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (21.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (21.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (21.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (21.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u21-l1）的核心关键词（例如「关联词与」）：",
          "acceptedAnswers": [
            "关联词与",
            "关联词与复杂",
            "关联词与复杂复句结构"
          ],
          "explanation": "正确的核心关键词为「关联词与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u21-l2": {
    "id": "zh-u21-l2",
    "subject": "mandarin",
    "unit": 21,
    "lessonNumber": 2,
    "title": "关联词与复杂复句结构 (Complex Sentences & Connectives) (第2讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：递进、转折、因果、假设、条件及让步复句的高级关联词搭配（不仅...而且...、虽然...但是...）。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「关联词与复杂复句结构 (Complex Sentences & Connectives)」的核心语法法则与应用范例 (21.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '关联词与复杂复句结构 (Complex Sentences & Connectives)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (21.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (21.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (21.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「关联词与复杂复句结构 (Complex Sentences & Connectives)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「关联词与复杂复句结构 (Complex Sentences & Connectives)」的核心语法法则与应用范例 (21.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (21.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (21.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (21.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「关联词与复杂复句结构 (Complex Sentences & Connectives)」的正式语境下，最准确得体的表达是哪一项？（第21.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (21.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (21.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (21.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (21.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u21-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (21.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (21.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (21.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (21.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「关联词与复杂复句结构 (Complex Sentences & Connectives)」的掌握程度，请选出表述完全正确的标准范句（测试 21-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (21.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (21.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (21.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (21.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u21-l2）的核心关键词（例如「关联词与」）：",
          "acceptedAnswers": [
            "关联词与",
            "关联词与复杂",
            "关联词与复杂复句结构"
          ],
          "explanation": "正确的核心关键词为「关联词与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u21-l3": {
    "id": "zh-u21-l3",
    "subject": "mandarin",
    "unit": 21,
    "lessonNumber": 3,
    "title": "关联词与复杂复句结构 (Complex Sentences & Connectives) (第3讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：递进、转折、因果、假设、条件及让步复句的高级关联词搭配（不仅...而且...、虽然...但是...）。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「关联词与复杂复句结构 (Complex Sentences & Connectives)」的核心语法法则与应用范例 (21.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '关联词与复杂复句结构 (Complex Sentences & Connectives)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (21.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (21.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (21.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「关联词与复杂复句结构 (Complex Sentences & Connectives)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「关联词与复杂复句结构 (Complex Sentences & Connectives)」的核心语法法则与应用范例 (21.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (21.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (21.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (21.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「关联词与复杂复句结构 (Complex Sentences & Connectives)」的正式语境下，最准确得体的表达是哪一项？（第21.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (21.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (21.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (21.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (21.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u21-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (21.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (21.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (21.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (21.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「关联词与复杂复句结构 (Complex Sentences & Connectives)」的掌握程度，请选出表述完全正确的标准范句（测试 21-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (21.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (21.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (21.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (21.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u21-l3）的核心关键词（例如「关联词与」）：",
          "acceptedAnswers": [
            "关联词与",
            "关联词与复杂",
            "关联词与复杂复句结构"
          ],
          "explanation": "正确的核心关键词为「关联词与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u21-l4": {
    "id": "zh-u21-l4",
    "subject": "mandarin",
    "unit": 21,
    "lessonNumber": 4,
    "title": "关联词与复杂复句结构 (Complex Sentences & Connectives) (第4讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：递进、转折、因果、假设、条件及让步复句的高级关联词搭配（不仅...而且...、虽然...但是...）。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「关联词与复杂复句结构 (Complex Sentences & Connectives)」的核心语法法则与应用范例 (21.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '关联词与复杂复句结构 (Complex Sentences & Connectives)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (21.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (21.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (21.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「关联词与复杂复句结构 (Complex Sentences & Connectives)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「关联词与复杂复句结构 (Complex Sentences & Connectives)」的核心语法法则与应用范例 (21.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (21.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (21.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (21.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「关联词与复杂复句结构 (Complex Sentences & Connectives)」的正式语境下，最准确得体的表达是哪一项？（第21.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (21.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (21.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (21.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (21.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u21-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (21.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (21.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (21.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (21.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「关联词与复杂复句结构 (Complex Sentences & Connectives)」的掌握程度，请选出表述完全正确的标准范句（测试 21-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (21.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (21.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (21.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (21.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u21-l4）的核心关键词（例如「关联词与」）：",
          "acceptedAnswers": [
            "关联词与",
            "关联词与复杂",
            "关联词与复杂复句结构"
          ],
          "explanation": "正确的核心关键词为「关联词与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u21-l5": {
    "id": "zh-u21-l5",
    "subject": "mandarin",
    "unit": 21,
    "lessonNumber": 5,
    "title": "关联词与复杂复句结构 (Complex Sentences & Connectives) (第5讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：递进、转折、因果、假设、条件及让步复句的高级关联词搭配（不仅...而且...、虽然...但是...）。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「关联词与复杂复句结构 (Complex Sentences & Connectives)」的核心语法法则与应用范例 (21.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '关联词与复杂复句结构 (Complex Sentences & Connectives)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (21.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (21.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (21.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「关联词与复杂复句结构 (Complex Sentences & Connectives)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「关联词与复杂复句结构 (Complex Sentences & Connectives)」的核心语法法则与应用范例 (21.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (21.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (21.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (21.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「关联词与复杂复句结构 (Complex Sentences & Connectives)」的正式语境下，最准确得体的表达是哪一项？（第21.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (21.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (21.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (21.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (21.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u21-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (21.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (21.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (21.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (21.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「关联词与复杂复句结构 (Complex Sentences & Connectives)」的掌握程度，请选出表述完全正确的标准范句（测试 21-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (21.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (21.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (21.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (21.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u21-l5）的核心关键词（例如「关联词与」）：",
          "acceptedAnswers": [
            "关联词与",
            "关联词与复杂",
            "关联词与复杂复句结构"
          ],
          "explanation": "正确的核心关键词为「关联词与」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u22-l1": {
    "id": "zh-u22-l1",
    "subject": "mandarin",
    "unit": 22,
    "lessonNumber": 1,
    "title": "书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu) (第1讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：四字熟语（成语）、典故引申、书面双音节词汇转换与文雅辞令修辞。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的核心语法法则与应用范例 (22.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (22.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (22.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (22.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的核心语法法则与应用范例 (22.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (22.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (22.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (22.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的正式语境下，最准确得体的表达是哪一项？（第22.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (22.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (22.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (22.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (22.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u22-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (22.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (22.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (22.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (22.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的掌握程度，请选出表述完全正确的标准范句（测试 22-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (22.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (22.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (22.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (22.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u22-l1）的核心关键词（例如「书面语体」）：",
          "acceptedAnswers": [
            "书面语体",
            "书面语体、成",
            "书面语体、成语与修辞"
          ],
          "explanation": "正确的核心关键词为「书面语体」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u22-l2": {
    "id": "zh-u22-l2",
    "subject": "mandarin",
    "unit": 22,
    "lessonNumber": 2,
    "title": "书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu) (第2讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：四字熟语（成语）、典故引申、书面双音节词汇转换与文雅辞令修辞。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的核心语法法则与应用范例 (22.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (22.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (22.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (22.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的核心语法法则与应用范例 (22.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (22.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (22.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (22.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的正式语境下，最准确得体的表达是哪一项？（第22.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (22.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (22.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (22.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (22.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u22-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (22.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (22.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (22.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (22.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的掌握程度，请选出表述完全正确的标准范句（测试 22-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (22.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (22.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (22.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (22.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u22-l2）的核心关键词（例如「书面语体」）：",
          "acceptedAnswers": [
            "书面语体",
            "书面语体、成",
            "书面语体、成语与修辞"
          ],
          "explanation": "正确的核心关键词为「书面语体」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u22-l3": {
    "id": "zh-u22-l3",
    "subject": "mandarin",
    "unit": 22,
    "lessonNumber": 3,
    "title": "书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu) (第3讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：四字熟语（成语）、典故引申、书面双音节词汇转换与文雅辞令修辞。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的核心语法法则与应用范例 (22.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (22.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (22.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (22.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的核心语法法则与应用范例 (22.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (22.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (22.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (22.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的正式语境下，最准确得体的表达是哪一项？（第22.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (22.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (22.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (22.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (22.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u22-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (22.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (22.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (22.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (22.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的掌握程度，请选出表述完全正确的标准范句（测试 22-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (22.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (22.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (22.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (22.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u22-l3）的核心关键词（例如「书面语体」）：",
          "acceptedAnswers": [
            "书面语体",
            "书面语体、成",
            "书面语体、成语与修辞"
          ],
          "explanation": "正确的核心关键词为「书面语体」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u22-l4": {
    "id": "zh-u22-l4",
    "subject": "mandarin",
    "unit": 22,
    "lessonNumber": 4,
    "title": "书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu) (第4讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：四字熟语（成语）、典故引申、书面双音节词汇转换与文雅辞令修辞。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的核心语法法则与应用范例 (22.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (22.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (22.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (22.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的核心语法法则与应用范例 (22.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (22.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (22.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (22.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的正式语境下，最准确得体的表达是哪一项？（第22.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (22.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (22.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (22.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (22.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u22-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (22.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (22.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (22.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (22.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的掌握程度，请选出表述完全正确的标准范句（测试 22-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (22.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (22.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (22.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (22.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u22-l4）的核心关键词（例如「书面语体」）：",
          "acceptedAnswers": [
            "书面语体",
            "书面语体、成",
            "书面语体、成语与修辞"
          ],
          "explanation": "正确的核心关键词为「书面语体」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u22-l5": {
    "id": "zh-u22-l5",
    "subject": "mandarin",
    "unit": 22,
    "lessonNumber": 5,
    "title": "书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu) (第5讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：四字熟语（成语）、典故引申、书面双音节词汇转换与文雅辞令修辞。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的核心语法法则与应用范例 (22.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (22.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (22.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (22.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的核心语法法则与应用范例 (22.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (22.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (22.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (22.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的正式语境下，最准确得体的表达是哪一项？（第22.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (22.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (22.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (22.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (22.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u22-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (22.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (22.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (22.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (22.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「书面语体、成语与修辞 (Formal Register & Idiomatic Chengyu)」的掌握程度，请选出表述完全正确的标准范句（测试 22-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (22.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (22.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (22.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (22.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u22-l5）的核心关键词（例如「书面语体」）：",
          "acceptedAnswers": [
            "书面语体",
            "书面语体、成",
            "书面语体、成语与修辞"
          ],
          "explanation": "正确的核心关键词为「书面语体」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u23-l1": {
    "id": "zh-u23-l1",
    "subject": "mandarin",
    "unit": 23,
    "lessonNumber": 1,
    "title": "新闻传媒与当代社会热点 (Media & Contemporary Affairs) (第1讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：新闻通稿、社论导读、社会经济统计术语及公共政策深度讨论。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的核心语法法则与应用范例 (23.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '新闻传媒与当代社会热点 (Media & Contemporary Affairs)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (23.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (23.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (23.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的核心语法法则与应用范例 (23.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (23.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (23.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (23.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的正式语境下，最准确得体的表达是哪一项？（第23.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (23.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (23.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (23.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (23.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u23-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (23.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (23.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (23.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (23.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的掌握程度，请选出表述完全正确的标准范句（测试 23-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (23.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (23.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (23.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (23.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u23-l1）的核心关键词（例如「新闻传媒」）：",
          "acceptedAnswers": [
            "新闻传媒",
            "新闻传媒与当",
            "新闻传媒与当代社会热点"
          ],
          "explanation": "正确的核心关键词为「新闻传媒」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u23-l2": {
    "id": "zh-u23-l2",
    "subject": "mandarin",
    "unit": 23,
    "lessonNumber": 2,
    "title": "新闻传媒与当代社会热点 (Media & Contemporary Affairs) (第2讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：新闻通稿、社论导读、社会经济统计术语及公共政策深度讨论。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的核心语法法则与应用范例 (23.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '新闻传媒与当代社会热点 (Media & Contemporary Affairs)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (23.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (23.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (23.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的核心语法法则与应用范例 (23.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (23.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (23.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (23.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的正式语境下，最准确得体的表达是哪一项？（第23.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (23.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (23.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (23.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (23.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u23-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (23.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (23.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (23.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (23.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的掌握程度，请选出表述完全正确的标准范句（测试 23-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (23.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (23.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (23.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (23.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u23-l2）的核心关键词（例如「新闻传媒」）：",
          "acceptedAnswers": [
            "新闻传媒",
            "新闻传媒与当",
            "新闻传媒与当代社会热点"
          ],
          "explanation": "正确的核心关键词为「新闻传媒」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u23-l3": {
    "id": "zh-u23-l3",
    "subject": "mandarin",
    "unit": 23,
    "lessonNumber": 3,
    "title": "新闻传媒与当代社会热点 (Media & Contemporary Affairs) (第3讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：新闻通稿、社论导读、社会经济统计术语及公共政策深度讨论。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的核心语法法则与应用范例 (23.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '新闻传媒与当代社会热点 (Media & Contemporary Affairs)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (23.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (23.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (23.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的核心语法法则与应用范例 (23.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (23.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (23.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (23.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的正式语境下，最准确得体的表达是哪一项？（第23.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (23.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (23.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (23.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (23.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u23-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (23.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (23.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (23.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (23.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的掌握程度，请选出表述完全正确的标准范句（测试 23-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (23.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (23.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (23.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (23.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u23-l3）的核心关键词（例如「新闻传媒」）：",
          "acceptedAnswers": [
            "新闻传媒",
            "新闻传媒与当",
            "新闻传媒与当代社会热点"
          ],
          "explanation": "正确的核心关键词为「新闻传媒」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u23-l4": {
    "id": "zh-u23-l4",
    "subject": "mandarin",
    "unit": 23,
    "lessonNumber": 4,
    "title": "新闻传媒与当代社会热点 (Media & Contemporary Affairs) (第4讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：新闻通稿、社论导读、社会经济统计术语及公共政策深度讨论。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的核心语法法则与应用范例 (23.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '新闻传媒与当代社会热点 (Media & Contemporary Affairs)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (23.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (23.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (23.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的核心语法法则与应用范例 (23.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (23.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (23.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (23.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的正式语境下，最准确得体的表达是哪一项？（第23.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (23.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (23.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (23.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (23.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u23-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (23.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (23.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (23.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (23.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的掌握程度，请选出表述完全正确的标准范句（测试 23-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (23.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (23.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (23.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (23.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u23-l4）的核心关键词（例如「新闻传媒」）：",
          "acceptedAnswers": [
            "新闻传媒",
            "新闻传媒与当",
            "新闻传媒与当代社会热点"
          ],
          "explanation": "正确的核心关键词为「新闻传媒」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u23-l5": {
    "id": "zh-u23-l5",
    "subject": "mandarin",
    "unit": 23,
    "lessonNumber": 5,
    "title": "新闻传媒与当代社会热点 (Media & Contemporary Affairs) (第5讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：新闻通稿、社论导读、社会经济统计术语及公共政策深度讨论。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的核心语法法则与应用范例 (23.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '新闻传媒与当代社会热点 (Media & Contemporary Affairs)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (23.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (23.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (23.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的核心语法法则与应用范例 (23.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (23.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (23.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (23.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的正式语境下，最准确得体的表达是哪一项？（第23.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (23.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (23.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (23.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (23.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u23-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (23.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (23.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (23.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (23.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「新闻传媒与当代社会热点 (Media & Contemporary Affairs)」的掌握程度，请选出表述完全正确的标准范句（测试 23-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (23.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (23.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (23.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (23.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u23-l5）的核心关键词（例如「新闻传媒」）：",
          "acceptedAnswers": [
            "新闻传媒",
            "新闻传媒与当",
            "新闻传媒与当代社会热点"
          ],
          "explanation": "正确的核心关键词为「新闻传媒」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u24-l1": {
    "id": "zh-u24-l1",
    "subject": "mandarin",
    "unit": 24,
    "lessonNumber": 1,
    "title": "商务汉语与公文写作 (Business Chinese & Official Correspondence) (第1讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：商务合同、招投标书、公函、行政呈批件及正式商务谈判策略。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的核心语法法则与应用范例 (24.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '商务汉语与公文写作 (Business Chinese & Official Correspondence)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (24.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (24.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (24.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「商务汉语与公文写作 (Business Chinese & Official Correspondence)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的核心语法法则与应用范例 (24.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (24.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (24.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (24.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的正式语境下，最准确得体的表达是哪一项？（第24.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (24.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (24.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (24.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (24.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u24-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (24.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (24.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (24.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (24.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的掌握程度，请选出表述完全正确的标准范句（测试 24-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (24.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (24.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (24.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (24.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u24-l1）的核心关键词（例如「商务汉语」）：",
          "acceptedAnswers": [
            "商务汉语",
            "商务汉语与公",
            "商务汉语与公文写作"
          ],
          "explanation": "正确的核心关键词为「商务汉语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u24-l2": {
    "id": "zh-u24-l2",
    "subject": "mandarin",
    "unit": 24,
    "lessonNumber": 2,
    "title": "商务汉语与公文写作 (Business Chinese & Official Correspondence) (第2讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：商务合同、招投标书、公函、行政呈批件及正式商务谈判策略。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的核心语法法则与应用范例 (24.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '商务汉语与公文写作 (Business Chinese & Official Correspondence)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (24.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (24.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (24.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「商务汉语与公文写作 (Business Chinese & Official Correspondence)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的核心语法法则与应用范例 (24.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (24.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (24.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (24.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的正式语境下，最准确得体的表达是哪一项？（第24.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (24.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (24.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (24.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (24.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u24-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (24.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (24.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (24.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (24.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的掌握程度，请选出表述完全正确的标准范句（测试 24-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (24.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (24.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (24.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (24.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u24-l2）的核心关键词（例如「商务汉语」）：",
          "acceptedAnswers": [
            "商务汉语",
            "商务汉语与公",
            "商务汉语与公文写作"
          ],
          "explanation": "正确的核心关键词为「商务汉语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u24-l3": {
    "id": "zh-u24-l3",
    "subject": "mandarin",
    "unit": 24,
    "lessonNumber": 3,
    "title": "商务汉语与公文写作 (Business Chinese & Official Correspondence) (第3讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：商务合同、招投标书、公函、行政呈批件及正式商务谈判策略。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的核心语法法则与应用范例 (24.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '商务汉语与公文写作 (Business Chinese & Official Correspondence)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (24.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (24.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (24.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「商务汉语与公文写作 (Business Chinese & Official Correspondence)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的核心语法法则与应用范例 (24.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (24.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (24.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (24.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的正式语境下，最准确得体的表达是哪一项？（第24.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (24.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (24.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (24.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (24.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u24-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (24.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (24.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (24.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (24.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的掌握程度，请选出表述完全正确的标准范句（测试 24-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (24.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (24.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (24.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (24.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u24-l3）的核心关键词（例如「商务汉语」）：",
          "acceptedAnswers": [
            "商务汉语",
            "商务汉语与公",
            "商务汉语与公文写作"
          ],
          "explanation": "正确的核心关键词为「商务汉语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u24-l4": {
    "id": "zh-u24-l4",
    "subject": "mandarin",
    "unit": 24,
    "lessonNumber": 4,
    "title": "商务汉语与公文写作 (Business Chinese & Official Correspondence) (第4讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：商务合同、招投标书、公函、行政呈批件及正式商务谈判策略。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的核心语法法则与应用范例 (24.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '商务汉语与公文写作 (Business Chinese & Official Correspondence)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (24.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (24.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (24.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「商务汉语与公文写作 (Business Chinese & Official Correspondence)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的核心语法法则与应用范例 (24.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (24.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (24.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (24.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的正式语境下，最准确得体的表达是哪一项？（第24.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (24.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (24.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (24.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (24.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u24-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (24.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (24.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (24.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (24.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的掌握程度，请选出表述完全正确的标准范句（测试 24-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (24.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (24.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (24.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (24.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u24-l4）的核心关键词（例如「商务汉语」）：",
          "acceptedAnswers": [
            "商务汉语",
            "商务汉语与公",
            "商务汉语与公文写作"
          ],
          "explanation": "正确的核心关键词为「商务汉语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u24-l5": {
    "id": "zh-u24-l5",
    "subject": "mandarin",
    "unit": 24,
    "lessonNumber": 5,
    "title": "商务汉语与公文写作 (Business Chinese & Official Correspondence) (第5讲)",
    "level": "B2",
    "objective": "全面掌握与熟练运用本课核心内容：商务合同、招投标书、公函、行政呈批件及正式商务谈判策略。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的核心语法法则与应用范例 (24.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '商务汉语与公文写作 (Business Chinese & Official Correspondence)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (24.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (24.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (24.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「商务汉语与公文写作 (Business Chinese & Official Correspondence)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的核心语法法则与应用范例 (24.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (24.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (24.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (24.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的正式语境下，最准确得体的表达是哪一项？（第24.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (24.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (24.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (24.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (24.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u24-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (24.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (24.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (24.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (24.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「商务汉语与公文写作 (Business Chinese & Official Correspondence)」的掌握程度，请选出表述完全正确的标准范句（测试 24-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (24.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (24.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (24.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (24.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u24-l5）的核心关键词（例如「商务汉语」）：",
          "acceptedAnswers": [
            "商务汉语",
            "商务汉语与公",
            "商务汉语与公文写作"
          ],
          "explanation": "正确的核心关键词为「商务汉语」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u25-l1": {
    "id": "zh-u25-l1",
    "subject": "mandarin",
    "unit": 25,
    "lessonNumber": 1,
    "title": "中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses) (第1讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：《诗经》、楚辞、唐诗（李白/杜甫/王维）、宋词（苏轼/李清照）的格律与意境。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的核心语法法则与应用范例 (25.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (25.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (25.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (25.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的核心语法法则与应用范例 (25.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (25.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (25.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (25.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的正式语境下，最准确得体的表达是哪一项？（第25.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (25.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (25.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (25.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (25.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u25-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (25.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (25.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (25.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (25.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的掌握程度，请选出表述完全正确的标准范句（测试 25-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (25.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (25.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (25.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (25.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u25-l1）的核心关键词（例如「中国古典」）：",
          "acceptedAnswers": [
            "中国古典",
            "中国古典文学",
            "中国古典文学与诗词鉴赏"
          ],
          "explanation": "正确的核心关键词为「中国古典」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u25-l2": {
    "id": "zh-u25-l2",
    "subject": "mandarin",
    "unit": 25,
    "lessonNumber": 2,
    "title": "中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses) (第2讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：《诗经》、楚辞、唐诗（李白/杜甫/王维）、宋词（苏轼/李清照）的格律与意境。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的核心语法法则与应用范例 (25.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (25.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (25.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (25.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的核心语法法则与应用范例 (25.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (25.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (25.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (25.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的正式语境下，最准确得体的表达是哪一项？（第25.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (25.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (25.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (25.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (25.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u25-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (25.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (25.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (25.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (25.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的掌握程度，请选出表述完全正确的标准范句（测试 25-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (25.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (25.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (25.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (25.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u25-l2）的核心关键词（例如「中国古典」）：",
          "acceptedAnswers": [
            "中国古典",
            "中国古典文学",
            "中国古典文学与诗词鉴赏"
          ],
          "explanation": "正确的核心关键词为「中国古典」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u25-l3": {
    "id": "zh-u25-l3",
    "subject": "mandarin",
    "unit": 25,
    "lessonNumber": 3,
    "title": "中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses) (第3讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：《诗经》、楚辞、唐诗（李白/杜甫/王维）、宋词（苏轼/李清照）的格律与意境。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的核心语法法则与应用范例 (25.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (25.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (25.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (25.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的核心语法法则与应用范例 (25.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (25.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (25.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (25.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的正式语境下，最准确得体的表达是哪一项？（第25.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (25.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (25.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (25.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (25.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u25-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (25.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (25.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (25.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (25.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的掌握程度，请选出表述完全正确的标准范句（测试 25-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (25.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (25.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (25.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (25.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u25-l3）的核心关键词（例如「中国古典」）：",
          "acceptedAnswers": [
            "中国古典",
            "中国古典文学",
            "中国古典文学与诗词鉴赏"
          ],
          "explanation": "正确的核心关键词为「中国古典」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u25-l4": {
    "id": "zh-u25-l4",
    "subject": "mandarin",
    "unit": 25,
    "lessonNumber": 4,
    "title": "中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses) (第4讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：《诗经》、楚辞、唐诗（李白/杜甫/王维）、宋词（苏轼/李清照）的格律与意境。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的核心语法法则与应用范例 (25.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (25.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (25.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (25.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的核心语法法则与应用范例 (25.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (25.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (25.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (25.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的正式语境下，最准确得体的表达是哪一项？（第25.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (25.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (25.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (25.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (25.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u25-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (25.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (25.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (25.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (25.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的掌握程度，请选出表述完全正确的标准范句（测试 25-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (25.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (25.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (25.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (25.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u25-l4）的核心关键词（例如「中国古典」）：",
          "acceptedAnswers": [
            "中国古典",
            "中国古典文学",
            "中国古典文学与诗词鉴赏"
          ],
          "explanation": "正确的核心关键词为「中国古典」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u25-l5": {
    "id": "zh-u25-l5",
    "subject": "mandarin",
    "unit": 25,
    "lessonNumber": 5,
    "title": "中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses) (第5讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：《诗经》、楚辞、唐诗（李白/杜甫/王维）、宋词（苏轼/李清照）的格律与意境。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的核心语法法则与应用范例 (25.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (25.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (25.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (25.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的核心语法法则与应用范例 (25.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (25.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (25.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (25.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的正式语境下，最准确得体的表达是哪一项？（第25.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (25.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (25.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (25.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (25.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u25-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (25.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (25.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (25.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (25.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国古典文学与诗词鉴赏 (Classical Poetry & Tang/Song Verses)」的掌握程度，请选出表述完全正确的标准范句（测试 25-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (25.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (25.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (25.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (25.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u25-l5）的核心关键词（例如「中国古典」）：",
          "acceptedAnswers": [
            "中国古典",
            "中国古典文学",
            "中国古典文学与诗词鉴赏"
          ],
          "explanation": "正确的核心关键词为「中国古典」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u26-l1": {
    "id": "zh-u26-l1",
    "subject": "mandarin",
    "unit": 26,
    "lessonNumber": 1,
    "title": "先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy) (第1讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：孔孟儒家（仁义礼智）、老庄道家（无为而治/齐物论）、法家及墨家思想精髓。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的核心语法法则与应用范例 (26.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (26.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (26.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (26.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的核心语法法则与应用范例 (26.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (26.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (26.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (26.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的正式语境下，最准确得体的表达是哪一项？（第26.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (26.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (26.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (26.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (26.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u26-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (26.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (26.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (26.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (26.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的掌握程度，请选出表述完全正确的标准范句（测试 26-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (26.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (26.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (26.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (26.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u26-l1）的核心关键词（例如「先秦诸子」）：",
          "acceptedAnswers": [
            "先秦诸子",
            "先秦诸子百家",
            "先秦诸子百家与儒道哲学"
          ],
          "explanation": "正确的核心关键词为「先秦诸子」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u26-l2": {
    "id": "zh-u26-l2",
    "subject": "mandarin",
    "unit": 26,
    "lessonNumber": 2,
    "title": "先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy) (第2讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：孔孟儒家（仁义礼智）、老庄道家（无为而治/齐物论）、法家及墨家思想精髓。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的核心语法法则与应用范例 (26.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (26.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (26.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (26.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的核心语法法则与应用范例 (26.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (26.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (26.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (26.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的正式语境下，最准确得体的表达是哪一项？（第26.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (26.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (26.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (26.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (26.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u26-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (26.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (26.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (26.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (26.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的掌握程度，请选出表述完全正确的标准范句（测试 26-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (26.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (26.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (26.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (26.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u26-l2）的核心关键词（例如「先秦诸子」）：",
          "acceptedAnswers": [
            "先秦诸子",
            "先秦诸子百家",
            "先秦诸子百家与儒道哲学"
          ],
          "explanation": "正确的核心关键词为「先秦诸子」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u26-l3": {
    "id": "zh-u26-l3",
    "subject": "mandarin",
    "unit": 26,
    "lessonNumber": 3,
    "title": "先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy) (第3讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：孔孟儒家（仁义礼智）、老庄道家（无为而治/齐物论）、法家及墨家思想精髓。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的核心语法法则与应用范例 (26.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (26.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (26.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (26.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的核心语法法则与应用范例 (26.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (26.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (26.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (26.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的正式语境下，最准确得体的表达是哪一项？（第26.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (26.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (26.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (26.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (26.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u26-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (26.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (26.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (26.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (26.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的掌握程度，请选出表述完全正确的标准范句（测试 26-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (26.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (26.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (26.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (26.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u26-l3）的核心关键词（例如「先秦诸子」）：",
          "acceptedAnswers": [
            "先秦诸子",
            "先秦诸子百家",
            "先秦诸子百家与儒道哲学"
          ],
          "explanation": "正确的核心关键词为「先秦诸子」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u26-l4": {
    "id": "zh-u26-l4",
    "subject": "mandarin",
    "unit": 26,
    "lessonNumber": 4,
    "title": "先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy) (第4讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：孔孟儒家（仁义礼智）、老庄道家（无为而治/齐物论）、法家及墨家思想精髓。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的核心语法法则与应用范例 (26.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (26.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (26.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (26.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的核心语法法则与应用范例 (26.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (26.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (26.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (26.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的正式语境下，最准确得体的表达是哪一项？（第26.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (26.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (26.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (26.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (26.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u26-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (26.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (26.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (26.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (26.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的掌握程度，请选出表述完全正确的标准范句（测试 26-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (26.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (26.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (26.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (26.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u26-l4）的核心关键词（例如「先秦诸子」）：",
          "acceptedAnswers": [
            "先秦诸子",
            "先秦诸子百家",
            "先秦诸子百家与儒道哲学"
          ],
          "explanation": "正确的核心关键词为「先秦诸子」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u26-l5": {
    "id": "zh-u26-l5",
    "subject": "mandarin",
    "unit": 26,
    "lessonNumber": 5,
    "title": "先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy) (第5讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：孔孟儒家（仁义礼智）、老庄道家（无为而治/齐物论）、法家及墨家思想精髓。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的核心语法法则与应用范例 (26.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (26.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (26.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (26.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的核心语法法则与应用范例 (26.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (26.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (26.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (26.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的正式语境下，最准确得体的表达是哪一项？（第26.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (26.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (26.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (26.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (26.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u26-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (26.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (26.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (26.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (26.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「先秦诸子百家与儒道哲学 (Confucian & Daoist Philosophy)」的掌握程度，请选出表述完全正确的标准范句（测试 26-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (26.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (26.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (26.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (26.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u26-l5）的核心关键词（例如「先秦诸子」）：",
          "acceptedAnswers": [
            "先秦诸子",
            "先秦诸子百家",
            "先秦诸子百家与儒道哲学"
          ],
          "explanation": "正确的核心关键词为「先秦诸子」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u27-l1": {
    "id": "zh-u27-l1",
    "subject": "mandarin",
    "unit": 27,
    "lessonNumber": 1,
    "title": "传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy) (第1讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：京剧程式化表演（生旦净丑）、文人写意水墨画留白艺术、汉字书法五体演变。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的核心语法法则与应用范例 (27.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (27.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (27.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (27.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的核心语法法则与应用范例 (27.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (27.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (27.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (27.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的正式语境下，最准确得体的表达是哪一项？（第27.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (27.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (27.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (27.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (27.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u27-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (27.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (27.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (27.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (27.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的掌握程度，请选出表述完全正确的标准范句（测试 27-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (27.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (27.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (27.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (27.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u27-l1）的核心关键词（例如「传统艺术」）：",
          "acceptedAnswers": [
            "传统艺术",
            "传统艺术：戏",
            "传统艺术：戏曲、国画与书法"
          ],
          "explanation": "正确的核心关键词为「传统艺术」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u27-l2": {
    "id": "zh-u27-l2",
    "subject": "mandarin",
    "unit": 27,
    "lessonNumber": 2,
    "title": "传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy) (第2讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：京剧程式化表演（生旦净丑）、文人写意水墨画留白艺术、汉字书法五体演变。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的核心语法法则与应用范例 (27.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (27.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (27.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (27.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的核心语法法则与应用范例 (27.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (27.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (27.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (27.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的正式语境下，最准确得体的表达是哪一项？（第27.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (27.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (27.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (27.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (27.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u27-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (27.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (27.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (27.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (27.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的掌握程度，请选出表述完全正确的标准范句（测试 27-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (27.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (27.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (27.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (27.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u27-l2）的核心关键词（例如「传统艺术」）：",
          "acceptedAnswers": [
            "传统艺术",
            "传统艺术：戏",
            "传统艺术：戏曲、国画与书法"
          ],
          "explanation": "正确的核心关键词为「传统艺术」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u27-l3": {
    "id": "zh-u27-l3",
    "subject": "mandarin",
    "unit": 27,
    "lessonNumber": 3,
    "title": "传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy) (第3讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：京剧程式化表演（生旦净丑）、文人写意水墨画留白艺术、汉字书法五体演变。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的核心语法法则与应用范例 (27.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (27.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (27.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (27.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的核心语法法则与应用范例 (27.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (27.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (27.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (27.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的正式语境下，最准确得体的表达是哪一项？（第27.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (27.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (27.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (27.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (27.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u27-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (27.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (27.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (27.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (27.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的掌握程度，请选出表述完全正确的标准范句（测试 27-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (27.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (27.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (27.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (27.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u27-l3）的核心关键词（例如「传统艺术」）：",
          "acceptedAnswers": [
            "传统艺术",
            "传统艺术：戏",
            "传统艺术：戏曲、国画与书法"
          ],
          "explanation": "正确的核心关键词为「传统艺术」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u27-l4": {
    "id": "zh-u27-l4",
    "subject": "mandarin",
    "unit": 27,
    "lessonNumber": 4,
    "title": "传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy) (第4讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：京剧程式化表演（生旦净丑）、文人写意水墨画留白艺术、汉字书法五体演变。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的核心语法法则与应用范例 (27.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (27.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (27.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (27.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的核心语法法则与应用范例 (27.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (27.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (27.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (27.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的正式语境下，最准确得体的表达是哪一项？（第27.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (27.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (27.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (27.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (27.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u27-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (27.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (27.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (27.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (27.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的掌握程度，请选出表述完全正确的标准范句（测试 27-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (27.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (27.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (27.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (27.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u27-l4）的核心关键词（例如「传统艺术」）：",
          "acceptedAnswers": [
            "传统艺术",
            "传统艺术：戏",
            "传统艺术：戏曲、国画与书法"
          ],
          "explanation": "正确的核心关键词为「传统艺术」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u27-l5": {
    "id": "zh-u27-l5",
    "subject": "mandarin",
    "unit": 27,
    "lessonNumber": 5,
    "title": "传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy) (第5讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：京剧程式化表演（生旦净丑）、文人写意水墨画留白艺术、汉字书法五体演变。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的核心语法法则与应用范例 (27.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (27.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (27.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (27.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的核心语法法则与应用范例 (27.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (27.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (27.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (27.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的正式语境下，最准确得体的表达是哪一项？（第27.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (27.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (27.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (27.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (27.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u27-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (27.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (27.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (27.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (27.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「传统艺术：戏曲、国画与书法 (Traditional Opera, Ink Painting & Calligraphy)」的掌握程度，请选出表述完全正确的标准范句（测试 27-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (27.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (27.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (27.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (27.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u27-l5）的核心关键词（例如「传统艺术」）：",
          "acceptedAnswers": [
            "传统艺术",
            "传统艺术：戏",
            "传统艺术：戏曲、国画与书法"
          ],
          "explanation": "正确的核心关键词为「传统艺术」。"
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
    "title": "现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans) (第1讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：五四新文化运动、现实主义与现代派文学、乡土中国与市民社会的现代性反思。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的核心语法法则与应用范例 (28.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (28.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (28.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (28.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的核心语法法则与应用范例 (28.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (28.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (28.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (28.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的正式语境下，最准确得体的表达是哪一项？（第28.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (28.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (28.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (28.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (28.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u28-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (28.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (28.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (28.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (28.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的掌握程度，请选出表述完全正确的标准范句（测试 28-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (28.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (28.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (28.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (28.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u28-l1）的核心关键词（例如「现代文学」）：",
          "acceptedAnswers": [
            "现代文学",
            "现代文学巨匠",
            "现代文学巨匠：鲁迅、老舍、张爱玲"
          ],
          "explanation": "正确的核心关键词为「现代文学」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u28-l2": {
    "id": "zh-u28-l2",
    "subject": "mandarin",
    "unit": 28,
    "lessonNumber": 2,
    "title": "现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans) (第2讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：五四新文化运动、现实主义与现代派文学、乡土中国与市民社会的现代性反思。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的核心语法法则与应用范例 (28.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (28.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (28.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (28.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的核心语法法则与应用范例 (28.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (28.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (28.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (28.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的正式语境下，最准确得体的表达是哪一项？（第28.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (28.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (28.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (28.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (28.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u28-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (28.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (28.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (28.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (28.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的掌握程度，请选出表述完全正确的标准范句（测试 28-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (28.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (28.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (28.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (28.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u28-l2）的核心关键词（例如「现代文学」）：",
          "acceptedAnswers": [
            "现代文学",
            "现代文学巨匠",
            "现代文学巨匠：鲁迅、老舍、张爱玲"
          ],
          "explanation": "正确的核心关键词为「现代文学」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u28-l3": {
    "id": "zh-u28-l3",
    "subject": "mandarin",
    "unit": 28,
    "lessonNumber": 3,
    "title": "现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans) (第3讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：五四新文化运动、现实主义与现代派文学、乡土中国与市民社会的现代性反思。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的核心语法法则与应用范例 (28.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (28.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (28.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (28.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的核心语法法则与应用范例 (28.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (28.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (28.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (28.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的正式语境下，最准确得体的表达是哪一项？（第28.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (28.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (28.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (28.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (28.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u28-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (28.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (28.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (28.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (28.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的掌握程度，请选出表述完全正确的标准范句（测试 28-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (28.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (28.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (28.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (28.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u28-l3）的核心关键词（例如「现代文学」）：",
          "acceptedAnswers": [
            "现代文学",
            "现代文学巨匠",
            "现代文学巨匠：鲁迅、老舍、张爱玲"
          ],
          "explanation": "正确的核心关键词为「现代文学」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u28-l4": {
    "id": "zh-u28-l4",
    "subject": "mandarin",
    "unit": 28,
    "lessonNumber": 4,
    "title": "现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans) (第4讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：五四新文化运动、现实主义与现代派文学、乡土中国与市民社会的现代性反思。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的核心语法法则与应用范例 (28.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (28.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (28.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (28.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的核心语法法则与应用范例 (28.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (28.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (28.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (28.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的正式语境下，最准确得体的表达是哪一项？（第28.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (28.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (28.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (28.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (28.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u28-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (28.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (28.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (28.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (28.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的掌握程度，请选出表述完全正确的标准范句（测试 28-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (28.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (28.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (28.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (28.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u28-l4）的核心关键词（例如「现代文学」）：",
          "acceptedAnswers": [
            "现代文学",
            "现代文学巨匠",
            "现代文学巨匠：鲁迅、老舍、张爱玲"
          ],
          "explanation": "正确的核心关键词为「现代文学」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u28-l5": {
    "id": "zh-u28-l5",
    "subject": "mandarin",
    "unit": 28,
    "lessonNumber": 5,
    "title": "现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans) (第5讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：五四新文化运动、现实主义与现代派文学、乡土中国与市民社会的现代性反思。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的核心语法法则与应用范例 (28.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (28.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (28.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (28.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的核心语法法则与应用范例 (28.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (28.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (28.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (28.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的正式语境下，最准确得体的表达是哪一项？（第28.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (28.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (28.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (28.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (28.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u28-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (28.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (28.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (28.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (28.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「现代文学巨匠：鲁迅、老舍、张爱玲 (Modern Literature Titans)」的掌握程度，请选出表述完全正确的标准范句（测试 28-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (28.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (28.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (28.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (28.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u28-l5）的核心关键词（例如「现代文学」）：",
          "acceptedAnswers": [
            "现代文学",
            "现代文学巨匠",
            "现代文学巨匠：鲁迅、老舍、张爱玲"
          ],
          "explanation": "正确的核心关键词为「现代文学」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u29-l1": {
    "id": "zh-u29-l1",
    "subject": "mandarin",
    "unit": 29,
    "lessonNumber": 1,
    "title": "科技创新与学术话语 (Science, Tech & Academic Discourse) (第1讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：前沿科研成果、学术论文摘要与引言撰写、理论模型构建与实证论证。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「科技创新与学术话语 (Science, Tech & Academic Discourse)」的核心语法法则与应用范例 (29.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '科技创新与学术话语 (Science, Tech & Academic Discourse)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (29.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (29.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (29.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「科技创新与学术话语 (Science, Tech & Academic Discourse)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「科技创新与学术话语 (Science, Tech & Academic Discourse)」的核心语法法则与应用范例 (29.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (29.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (29.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (29.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「科技创新与学术话语 (Science, Tech & Academic Discourse)」的正式语境下，最准确得体的表达是哪一项？（第29.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (29.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (29.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (29.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (29.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u29-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (29.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (29.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (29.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (29.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「科技创新与学术话语 (Science, Tech & Academic Discourse)」的掌握程度，请选出表述完全正确的标准范句（测试 29-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (29.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (29.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (29.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (29.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u29-l1）的核心关键词（例如「科技创新」）：",
          "acceptedAnswers": [
            "科技创新",
            "科技创新与学",
            "科技创新与学术话语"
          ],
          "explanation": "正确的核心关键词为「科技创新」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u29-l2": {
    "id": "zh-u29-l2",
    "subject": "mandarin",
    "unit": 29,
    "lessonNumber": 2,
    "title": "科技创新与学术话语 (Science, Tech & Academic Discourse) (第2讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：前沿科研成果、学术论文摘要与引言撰写、理论模型构建与实证论证。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「科技创新与学术话语 (Science, Tech & Academic Discourse)」的核心语法法则与应用范例 (29.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '科技创新与学术话语 (Science, Tech & Academic Discourse)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (29.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (29.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (29.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「科技创新与学术话语 (Science, Tech & Academic Discourse)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「科技创新与学术话语 (Science, Tech & Academic Discourse)」的核心语法法则与应用范例 (29.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (29.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (29.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (29.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「科技创新与学术话语 (Science, Tech & Academic Discourse)」的正式语境下，最准确得体的表达是哪一项？（第29.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (29.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (29.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (29.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (29.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u29-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (29.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (29.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (29.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (29.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「科技创新与学术话语 (Science, Tech & Academic Discourse)」的掌握程度，请选出表述完全正确的标准范句（测试 29-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (29.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (29.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (29.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (29.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u29-l2）的核心关键词（例如「科技创新」）：",
          "acceptedAnswers": [
            "科技创新",
            "科技创新与学",
            "科技创新与学术话语"
          ],
          "explanation": "正确的核心关键词为「科技创新」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u29-l3": {
    "id": "zh-u29-l3",
    "subject": "mandarin",
    "unit": 29,
    "lessonNumber": 3,
    "title": "科技创新与学术话语 (Science, Tech & Academic Discourse) (第3讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：前沿科研成果、学术论文摘要与引言撰写、理论模型构建与实证论证。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「科技创新与学术话语 (Science, Tech & Academic Discourse)」的核心语法法则与应用范例 (29.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '科技创新与学术话语 (Science, Tech & Academic Discourse)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (29.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (29.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (29.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「科技创新与学术话语 (Science, Tech & Academic Discourse)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「科技创新与学术话语 (Science, Tech & Academic Discourse)」的核心语法法则与应用范例 (29.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (29.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (29.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (29.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「科技创新与学术话语 (Science, Tech & Academic Discourse)」的正式语境下，最准确得体的表达是哪一项？（第29.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (29.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (29.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (29.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (29.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u29-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (29.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (29.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (29.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (29.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「科技创新与学术话语 (Science, Tech & Academic Discourse)」的掌握程度，请选出表述完全正确的标准范句（测试 29-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (29.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (29.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (29.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (29.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u29-l3）的核心关键词（例如「科技创新」）：",
          "acceptedAnswers": [
            "科技创新",
            "科技创新与学",
            "科技创新与学术话语"
          ],
          "explanation": "正确的核心关键词为「科技创新」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u29-l4": {
    "id": "zh-u29-l4",
    "subject": "mandarin",
    "unit": 29,
    "lessonNumber": 4,
    "title": "科技创新与学术话语 (Science, Tech & Academic Discourse) (第4讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：前沿科研成果、学术论文摘要与引言撰写、理论模型构建与实证论证。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「科技创新与学术话语 (Science, Tech & Academic Discourse)」的核心语法法则与应用范例 (29.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '科技创新与学术话语 (Science, Tech & Academic Discourse)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (29.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (29.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (29.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「科技创新与学术话语 (Science, Tech & Academic Discourse)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「科技创新与学术话语 (Science, Tech & Academic Discourse)」的核心语法法则与应用范例 (29.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (29.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (29.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (29.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「科技创新与学术话语 (Science, Tech & Academic Discourse)」的正式语境下，最准确得体的表达是哪一项？（第29.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (29.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (29.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (29.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (29.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u29-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (29.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (29.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (29.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (29.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「科技创新与学术话语 (Science, Tech & Academic Discourse)」的掌握程度，请选出表述完全正确的标准范句（测试 29-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (29.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (29.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (29.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (29.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u29-l4）的核心关键词（例如「科技创新」）：",
          "acceptedAnswers": [
            "科技创新",
            "科技创新与学",
            "科技创新与学术话语"
          ],
          "explanation": "正确的核心关键词为「科技创新」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u29-l5": {
    "id": "zh-u29-l5",
    "subject": "mandarin",
    "unit": 29,
    "lessonNumber": 5,
    "title": "科技创新与学术话语 (Science, Tech & Academic Discourse) (第5讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：前沿科研成果、学术论文摘要与引言撰写、理论模型构建与实证论证。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「科技创新与学术话语 (Science, Tech & Academic Discourse)」的核心语法法则与应用范例 (29.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '科技创新与学术话语 (Science, Tech & Academic Discourse)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (29.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (29.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (29.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「科技创新与学术话语 (Science, Tech & Academic Discourse)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「科技创新与学术话语 (Science, Tech & Academic Discourse)」的核心语法法则与应用范例 (29.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (29.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (29.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (29.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「科技创新与学术话语 (Science, Tech & Academic Discourse)」的正式语境下，最准确得体的表达是哪一项？（第29.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (29.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (29.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (29.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (29.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u29-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (29.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (29.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (29.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (29.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「科技创新与学术话语 (Science, Tech & Academic Discourse)」的掌握程度，请选出表述完全正确的标准范句（测试 29-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (29.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (29.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (29.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (29.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u29-l5）的核心关键词（例如「科技创新」）：",
          "acceptedAnswers": [
            "科技创新",
            "科技创新与学",
            "科技创新与学术话语"
          ],
          "explanation": "正确的核心关键词为「科技创新」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u30-l1": {
    "id": "zh-u30-l1",
    "subject": "mandarin",
    "unit": 30,
    "lessonNumber": 1,
    "title": "当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics) (第1讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：第五代/第六代导演电影美学、现实主义题材剧作分析与视听语言叙事批评。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的核心语法法则与应用范例 (30.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (30.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (30.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (30.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的核心语法法则与应用范例 (30.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (30.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (30.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (30.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的正式语境下，最准确得体的表达是哪一项？（第30.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (30.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (30.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (30.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (30.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u30-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (30.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (30.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (30.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (30.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的掌握程度，请选出表述完全正确的标准范句（测试 30-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (30.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (30.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (30.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (30.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u30-l1）的核心关键词（例如「当代影视」）：",
          "acceptedAnswers": [
            "当代影视",
            "当代影视艺术",
            "当代影视艺术与审美批评"
          ],
          "explanation": "正确的核心关键词为「当代影视」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u30-l2": {
    "id": "zh-u30-l2",
    "subject": "mandarin",
    "unit": 30,
    "lessonNumber": 2,
    "title": "当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics) (第2讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：第五代/第六代导演电影美学、现实主义题材剧作分析与视听语言叙事批评。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的核心语法法则与应用范例 (30.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (30.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (30.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (30.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的核心语法法则与应用范例 (30.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (30.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (30.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (30.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的正式语境下，最准确得体的表达是哪一项？（第30.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (30.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (30.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (30.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (30.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u30-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (30.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (30.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (30.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (30.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的掌握程度，请选出表述完全正确的标准范句（测试 30-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (30.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (30.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (30.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (30.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u30-l2）的核心关键词（例如「当代影视」）：",
          "acceptedAnswers": [
            "当代影视",
            "当代影视艺术",
            "当代影视艺术与审美批评"
          ],
          "explanation": "正确的核心关键词为「当代影视」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u30-l3": {
    "id": "zh-u30-l3",
    "subject": "mandarin",
    "unit": 30,
    "lessonNumber": 3,
    "title": "当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics) (第3讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：第五代/第六代导演电影美学、现实主义题材剧作分析与视听语言叙事批评。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的核心语法法则与应用范例 (30.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (30.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (30.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (30.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的核心语法法则与应用范例 (30.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (30.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (30.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (30.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的正式语境下，最准确得体的表达是哪一项？（第30.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (30.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (30.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (30.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (30.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u30-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (30.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (30.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (30.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (30.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的掌握程度，请选出表述完全正确的标准范句（测试 30-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (30.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (30.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (30.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (30.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u30-l3）的核心关键词（例如「当代影视」）：",
          "acceptedAnswers": [
            "当代影视",
            "当代影视艺术",
            "当代影视艺术与审美批评"
          ],
          "explanation": "正确的核心关键词为「当代影视」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u30-l4": {
    "id": "zh-u30-l4",
    "subject": "mandarin",
    "unit": 30,
    "lessonNumber": 4,
    "title": "当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics) (第4讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：第五代/第六代导演电影美学、现实主义题材剧作分析与视听语言叙事批评。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的核心语法法则与应用范例 (30.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (30.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (30.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (30.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的核心语法法则与应用范例 (30.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (30.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (30.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (30.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的正式语境下，最准确得体的表达是哪一项？（第30.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (30.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (30.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (30.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (30.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u30-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (30.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (30.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (30.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (30.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的掌握程度，请选出表述完全正确的标准范句（测试 30-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (30.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (30.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (30.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (30.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u30-l4）的核心关键词（例如「当代影视」）：",
          "acceptedAnswers": [
            "当代影视",
            "当代影视艺术",
            "当代影视艺术与审美批评"
          ],
          "explanation": "正确的核心关键词为「当代影视」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u30-l5": {
    "id": "zh-u30-l5",
    "subject": "mandarin",
    "unit": 30,
    "lessonNumber": 5,
    "title": "当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics) (第5讲)",
    "level": "C1",
    "objective": "全面掌握与熟练运用本课核心内容：第五代/第六代导演电影美学、现实主义题材剧作分析与视听语言叙事批评。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的核心语法法则与应用范例 (30.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (30.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (30.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (30.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的核心语法法则与应用范例 (30.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (30.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (30.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (30.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的正式语境下，最准确得体的表达是哪一项？（第30.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (30.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (30.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (30.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (30.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u30-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (30.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (30.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (30.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (30.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「当代影视艺术与审美批评 (Contemporary Cinema & Media Aesthetics)」的掌握程度，请选出表述完全正确的标准范句（测试 30-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (30.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (30.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (30.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (30.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u30-l5）的核心关键词（例如「当代影视」）：",
          "acceptedAnswers": [
            "当代影视",
            "当代影视艺术",
            "当代影视艺术与审美批评"
          ],
          "explanation": "正确的核心关键词为「当代影视」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u31-l1": {
    "id": "zh-u31-l1",
    "subject": "mandarin",
    "unit": 31,
    "lessonNumber": 1,
    "title": "宪法法律与司法制度 (Constitutional & Legal System) (第1讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：宪法原则、民商法典编纂、诉讼裁判法理及法治现代化专业术语。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「宪法法律与司法制度 (Constitutional & Legal System)」的核心语法法则与应用范例 (31.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '宪法法律与司法制度 (Constitutional & Legal System)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (31.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (31.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (31.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「宪法法律与司法制度 (Constitutional & Legal System)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「宪法法律与司法制度 (Constitutional & Legal System)」的核心语法法则与应用范例 (31.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (31.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (31.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (31.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「宪法法律与司法制度 (Constitutional & Legal System)」的正式语境下，最准确得体的表达是哪一项？（第31.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (31.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (31.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (31.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (31.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u31-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (31.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (31.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (31.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (31.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「宪法法律与司法制度 (Constitutional & Legal System)」的掌握程度，请选出表述完全正确的标准范句（测试 31-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (31.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (31.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (31.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (31.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u31-l1）的核心关键词（例如「宪法法律」）：",
          "acceptedAnswers": [
            "宪法法律",
            "宪法法律与司",
            "宪法法律与司法制度"
          ],
          "explanation": "正确的核心关键词为「宪法法律」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u31-l2": {
    "id": "zh-u31-l2",
    "subject": "mandarin",
    "unit": 31,
    "lessonNumber": 2,
    "title": "宪法法律与司法制度 (Constitutional & Legal System) (第2讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：宪法原则、民商法典编纂、诉讼裁判法理及法治现代化专业术语。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「宪法法律与司法制度 (Constitutional & Legal System)」的核心语法法则与应用范例 (31.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '宪法法律与司法制度 (Constitutional & Legal System)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (31.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (31.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (31.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「宪法法律与司法制度 (Constitutional & Legal System)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「宪法法律与司法制度 (Constitutional & Legal System)」的核心语法法则与应用范例 (31.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (31.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (31.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (31.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「宪法法律与司法制度 (Constitutional & Legal System)」的正式语境下，最准确得体的表达是哪一项？（第31.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (31.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (31.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (31.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (31.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u31-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (31.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (31.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (31.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (31.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「宪法法律与司法制度 (Constitutional & Legal System)」的掌握程度，请选出表述完全正确的标准范句（测试 31-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (31.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (31.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (31.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (31.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u31-l2）的核心关键词（例如「宪法法律」）：",
          "acceptedAnswers": [
            "宪法法律",
            "宪法法律与司",
            "宪法法律与司法制度"
          ],
          "explanation": "正确的核心关键词为「宪法法律」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u31-l3": {
    "id": "zh-u31-l3",
    "subject": "mandarin",
    "unit": 31,
    "lessonNumber": 3,
    "title": "宪法法律与司法制度 (Constitutional & Legal System) (第3讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：宪法原则、民商法典编纂、诉讼裁判法理及法治现代化专业术语。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「宪法法律与司法制度 (Constitutional & Legal System)」的核心语法法则与应用范例 (31.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '宪法法律与司法制度 (Constitutional & Legal System)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (31.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (31.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (31.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「宪法法律与司法制度 (Constitutional & Legal System)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「宪法法律与司法制度 (Constitutional & Legal System)」的核心语法法则与应用范例 (31.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (31.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (31.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (31.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「宪法法律与司法制度 (Constitutional & Legal System)」的正式语境下，最准确得体的表达是哪一项？（第31.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (31.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (31.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (31.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (31.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u31-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (31.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (31.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (31.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (31.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「宪法法律与司法制度 (Constitutional & Legal System)」的掌握程度，请选出表述完全正确的标准范句（测试 31-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (31.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (31.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (31.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (31.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u31-l3）的核心关键词（例如「宪法法律」）：",
          "acceptedAnswers": [
            "宪法法律",
            "宪法法律与司",
            "宪法法律与司法制度"
          ],
          "explanation": "正确的核心关键词为「宪法法律」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u31-l4": {
    "id": "zh-u31-l4",
    "subject": "mandarin",
    "unit": 31,
    "lessonNumber": 4,
    "title": "宪法法律与司法制度 (Constitutional & Legal System) (第4讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：宪法原则、民商法典编纂、诉讼裁判法理及法治现代化专业术语。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「宪法法律与司法制度 (Constitutional & Legal System)」的核心语法法则与应用范例 (31.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '宪法法律与司法制度 (Constitutional & Legal System)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (31.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (31.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (31.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「宪法法律与司法制度 (Constitutional & Legal System)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「宪法法律与司法制度 (Constitutional & Legal System)」的核心语法法则与应用范例 (31.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (31.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (31.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (31.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「宪法法律与司法制度 (Constitutional & Legal System)」的正式语境下，最准确得体的表达是哪一项？（第31.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (31.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (31.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (31.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (31.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u31-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (31.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (31.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (31.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (31.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「宪法法律与司法制度 (Constitutional & Legal System)」的掌握程度，请选出表述完全正确的标准范句（测试 31-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (31.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (31.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (31.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (31.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u31-l4）的核心关键词（例如「宪法法律」）：",
          "acceptedAnswers": [
            "宪法法律",
            "宪法法律与司",
            "宪法法律与司法制度"
          ],
          "explanation": "正确的核心关键词为「宪法法律」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u31-l5": {
    "id": "zh-u31-l5",
    "subject": "mandarin",
    "unit": 31,
    "lessonNumber": 5,
    "title": "宪法法律与司法制度 (Constitutional & Legal System) (第5讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：宪法原则、民商法典编纂、诉讼裁判法理及法治现代化专业术语。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「宪法法律与司法制度 (Constitutional & Legal System)」的核心语法法则与应用范例 (31.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '宪法法律与司法制度 (Constitutional & Legal System)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (31.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (31.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (31.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「宪法法律与司法制度 (Constitutional & Legal System)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「宪法法律与司法制度 (Constitutional & Legal System)」的核心语法法则与应用范例 (31.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (31.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (31.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (31.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「宪法法律与司法制度 (Constitutional & Legal System)」的正式语境下，最准确得体的表达是哪一项？（第31.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (31.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (31.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (31.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (31.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u31-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (31.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (31.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (31.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (31.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「宪法法律与司法制度 (Constitutional & Legal System)」的掌握程度，请选出表述完全正确的标准范句（测试 31-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (31.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (31.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (31.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (31.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u31-l5）的核心关键词（例如「宪法法律」）：",
          "acceptedAnswers": [
            "宪法法律",
            "宪法法律与司",
            "宪法法律与司法制度"
          ],
          "explanation": "正确的核心关键词为「宪法法律」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u32-l1": {
    "id": "zh-u32-l1",
    "subject": "mandarin",
    "unit": 32,
    "lessonNumber": 1,
    "title": "高阶辩论与公共演讲 (High Debating & Public Address) (第1讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：逻辑实证论证、修辞格论辩战术、跨文化公共政策演讲与危机公关阐述。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「高阶辩论与公共演讲 (High Debating & Public Address)」的核心语法法则与应用范例 (32.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '高阶辩论与公共演讲 (High Debating & Public Address)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (32.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (32.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (32.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「高阶辩论与公共演讲 (High Debating & Public Address)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「高阶辩论与公共演讲 (High Debating & Public Address)」的核心语法法则与应用范例 (32.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (32.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (32.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (32.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「高阶辩论与公共演讲 (High Debating & Public Address)」的正式语境下，最准确得体的表达是哪一项？（第32.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (32.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (32.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (32.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (32.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u32-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (32.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (32.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (32.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (32.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「高阶辩论与公共演讲 (High Debating & Public Address)」的掌握程度，请选出表述完全正确的标准范句（测试 32-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (32.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (32.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (32.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (32.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u32-l1）的核心关键词（例如「高阶辩论」）：",
          "acceptedAnswers": [
            "高阶辩论",
            "高阶辩论与公",
            "高阶辩论与公共演讲"
          ],
          "explanation": "正确的核心关键词为「高阶辩论」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u32-l2": {
    "id": "zh-u32-l2",
    "subject": "mandarin",
    "unit": 32,
    "lessonNumber": 2,
    "title": "高阶辩论与公共演讲 (High Debating & Public Address) (第2讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：逻辑实证论证、修辞格论辩战术、跨文化公共政策演讲与危机公关阐述。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「高阶辩论与公共演讲 (High Debating & Public Address)」的核心语法法则与应用范例 (32.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '高阶辩论与公共演讲 (High Debating & Public Address)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (32.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (32.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (32.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「高阶辩论与公共演讲 (High Debating & Public Address)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「高阶辩论与公共演讲 (High Debating & Public Address)」的核心语法法则与应用范例 (32.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (32.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (32.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (32.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「高阶辩论与公共演讲 (High Debating & Public Address)」的正式语境下，最准确得体的表达是哪一项？（第32.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (32.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (32.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (32.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (32.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u32-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (32.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (32.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (32.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (32.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「高阶辩论与公共演讲 (High Debating & Public Address)」的掌握程度，请选出表述完全正确的标准范句（测试 32-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (32.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (32.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (32.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (32.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u32-l2）的核心关键词（例如「高阶辩论」）：",
          "acceptedAnswers": [
            "高阶辩论",
            "高阶辩论与公",
            "高阶辩论与公共演讲"
          ],
          "explanation": "正确的核心关键词为「高阶辩论」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u32-l3": {
    "id": "zh-u32-l3",
    "subject": "mandarin",
    "unit": 32,
    "lessonNumber": 3,
    "title": "高阶辩论与公共演讲 (High Debating & Public Address) (第3讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：逻辑实证论证、修辞格论辩战术、跨文化公共政策演讲与危机公关阐述。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「高阶辩论与公共演讲 (High Debating & Public Address)」的核心语法法则与应用范例 (32.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '高阶辩论与公共演讲 (High Debating & Public Address)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (32.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (32.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (32.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「高阶辩论与公共演讲 (High Debating & Public Address)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「高阶辩论与公共演讲 (High Debating & Public Address)」的核心语法法则与应用范例 (32.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (32.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (32.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (32.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「高阶辩论与公共演讲 (High Debating & Public Address)」的正式语境下，最准确得体的表达是哪一项？（第32.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (32.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (32.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (32.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (32.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u32-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (32.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (32.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (32.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (32.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「高阶辩论与公共演讲 (High Debating & Public Address)」的掌握程度，请选出表述完全正确的标准范句（测试 32-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (32.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (32.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (32.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (32.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u32-l3）的核心关键词（例如「高阶辩论」）：",
          "acceptedAnswers": [
            "高阶辩论",
            "高阶辩论与公",
            "高阶辩论与公共演讲"
          ],
          "explanation": "正确的核心关键词为「高阶辩论」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u32-l4": {
    "id": "zh-u32-l4",
    "subject": "mandarin",
    "unit": 32,
    "lessonNumber": 4,
    "title": "高阶辩论与公共演讲 (High Debating & Public Address) (第4讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：逻辑实证论证、修辞格论辩战术、跨文化公共政策演讲与危机公关阐述。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「高阶辩论与公共演讲 (High Debating & Public Address)」的核心语法法则与应用范例 (32.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '高阶辩论与公共演讲 (High Debating & Public Address)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (32.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (32.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (32.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「高阶辩论与公共演讲 (High Debating & Public Address)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「高阶辩论与公共演讲 (High Debating & Public Address)」的核心语法法则与应用范例 (32.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (32.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (32.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (32.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「高阶辩论与公共演讲 (High Debating & Public Address)」的正式语境下，最准确得体的表达是哪一项？（第32.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (32.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (32.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (32.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (32.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u32-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (32.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (32.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (32.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (32.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「高阶辩论与公共演讲 (High Debating & Public Address)」的掌握程度，请选出表述完全正确的标准范句（测试 32-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (32.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (32.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (32.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (32.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u32-l4）的核心关键词（例如「高阶辩论」）：",
          "acceptedAnswers": [
            "高阶辩论",
            "高阶辩论与公",
            "高阶辩论与公共演讲"
          ],
          "explanation": "正确的核心关键词为「高阶辩论」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u32-l5": {
    "id": "zh-u32-l5",
    "subject": "mandarin",
    "unit": 32,
    "lessonNumber": 5,
    "title": "高阶辩论与公共演讲 (High Debating & Public Address) (第5讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：逻辑实证论证、修辞格论辩战术、跨文化公共政策演讲与危机公关阐述。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「高阶辩论与公共演讲 (High Debating & Public Address)」的核心语法法则与应用范例 (32.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '高阶辩论与公共演讲 (High Debating & Public Address)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (32.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (32.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (32.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「高阶辩论与公共演讲 (High Debating & Public Address)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「高阶辩论与公共演讲 (High Debating & Public Address)」的核心语法法则与应用范例 (32.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (32.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (32.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (32.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「高阶辩论与公共演讲 (High Debating & Public Address)」的正式语境下，最准确得体的表达是哪一项？（第32.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (32.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (32.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (32.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (32.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u32-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (32.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (32.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (32.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (32.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「高阶辩论与公共演讲 (High Debating & Public Address)」的掌握程度，请选出表述完全正确的标准范句（测试 32-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (32.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (32.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (32.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (32.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u32-l5）的核心关键词（例如「高阶辩论」）：",
          "acceptedAnswers": [
            "高阶辩论",
            "高阶辩论与公",
            "高阶辩论与公共演讲"
          ],
          "explanation": "正确的核心关键词为「高阶辩论」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u33-l1": {
    "id": "zh-u33-l1",
    "subject": "mandarin",
    "unit": 33,
    "lessonNumber": 1,
    "title": "中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics) (第1讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：紫禁城轴线布局、江南园林借景造园艺术、抬梁穿斗木构架力学哲学。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的核心语法法则与应用范例 (33.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (33.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (33.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (33.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的核心语法法则与应用范例 (33.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (33.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (33.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (33.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的正式语境下，最准确得体的表达是哪一项？（第33.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (33.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (33.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (33.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (33.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u33-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (33.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (33.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (33.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (33.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的掌握程度，请选出表述完全正确的标准范句（测试 33-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (33.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (33.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (33.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (33.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u33-l1）的核心关键词（例如「中国传统」）：",
          "acceptedAnswers": [
            "中国传统",
            "中国传统建筑",
            "中国传统建筑与空间美学"
          ],
          "explanation": "正确的核心关键词为「中国传统」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u33-l2": {
    "id": "zh-u33-l2",
    "subject": "mandarin",
    "unit": 33,
    "lessonNumber": 2,
    "title": "中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics) (第2讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：紫禁城轴线布局、江南园林借景造园艺术、抬梁穿斗木构架力学哲学。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的核心语法法则与应用范例 (33.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (33.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (33.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (33.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的核心语法法则与应用范例 (33.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (33.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (33.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (33.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的正式语境下，最准确得体的表达是哪一项？（第33.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (33.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (33.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (33.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (33.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u33-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (33.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (33.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (33.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (33.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的掌握程度，请选出表述完全正确的标准范句（测试 33-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (33.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (33.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (33.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (33.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u33-l2）的核心关键词（例如「中国传统」）：",
          "acceptedAnswers": [
            "中国传统",
            "中国传统建筑",
            "中国传统建筑与空间美学"
          ],
          "explanation": "正确的核心关键词为「中国传统」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u33-l3": {
    "id": "zh-u33-l3",
    "subject": "mandarin",
    "unit": 33,
    "lessonNumber": 3,
    "title": "中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics) (第3讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：紫禁城轴线布局、江南园林借景造园艺术、抬梁穿斗木构架力学哲学。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的核心语法法则与应用范例 (33.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (33.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (33.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (33.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的核心语法法则与应用范例 (33.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (33.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (33.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (33.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的正式语境下，最准确得体的表达是哪一项？（第33.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (33.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (33.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (33.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (33.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u33-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (33.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (33.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (33.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (33.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的掌握程度，请选出表述完全正确的标准范句（测试 33-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (33.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (33.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (33.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (33.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u33-l3）的核心关键词（例如「中国传统」）：",
          "acceptedAnswers": [
            "中国传统",
            "中国传统建筑",
            "中国传统建筑与空间美学"
          ],
          "explanation": "正确的核心关键词为「中国传统」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u33-l4": {
    "id": "zh-u33-l4",
    "subject": "mandarin",
    "unit": 33,
    "lessonNumber": 4,
    "title": "中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics) (第4讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：紫禁城轴线布局、江南园林借景造园艺术、抬梁穿斗木构架力学哲学。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的核心语法法则与应用范例 (33.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (33.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (33.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (33.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的核心语法法则与应用范例 (33.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (33.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (33.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (33.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的正式语境下，最准确得体的表达是哪一项？（第33.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (33.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (33.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (33.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (33.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u33-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (33.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (33.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (33.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (33.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的掌握程度，请选出表述完全正确的标准范句（测试 33-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (33.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (33.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (33.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (33.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u33-l4）的核心关键词（例如「中国传统」）：",
          "acceptedAnswers": [
            "中国传统",
            "中国传统建筑",
            "中国传统建筑与空间美学"
          ],
          "explanation": "正确的核心关键词为「中国传统」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u33-l5": {
    "id": "zh-u33-l5",
    "subject": "mandarin",
    "unit": 33,
    "lessonNumber": 5,
    "title": "中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics) (第5讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：紫禁城轴线布局、江南园林借景造园艺术、抬梁穿斗木构架力学哲学。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的核心语法法则与应用范例 (33.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (33.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (33.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (33.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的核心语法法则与应用范例 (33.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (33.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (33.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (33.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的正式语境下，最准确得体的表达是哪一项？（第33.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (33.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (33.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (33.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (33.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u33-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (33.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (33.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (33.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (33.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「中国传统建筑与空间美学 (Traditional Architecture & Spatial Aesthetics)」的掌握程度，请选出表述完全正确的标准范句（测试 33-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (33.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (33.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (33.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (33.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u33-l5）的核心关键词（例如「中国传统」）：",
          "acceptedAnswers": [
            "中国传统",
            "中国传统建筑",
            "中国传统建筑与空间美学"
          ],
          "explanation": "正确的核心关键词为「中国传统」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u34-l1": {
    "id": "zh-u34-l1",
    "subject": "mandarin",
    "unit": 34,
    "lessonNumber": 1,
    "title": "多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT) (第1讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：1969年维也纳条约法公约、联合国安理会多边决议起草、峰会联合公报外交辩护。 (第1部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的核心语法法则与应用范例 (34.1.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (34.1.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (34.1.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (34.1.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」（第1讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的核心语法法则与应用范例 (34.1.1)。",
            "存在语序混乱且虚词误用的病句选项 (34.1.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (34.1.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (34.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的正式语境下，最准确得体的表达是哪一项？（第34.1题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (34.1.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (34.1.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (34.1.x2)",
            "量词与名词修饰搭配错误的病句选项 (34.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u34-l1）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (34.1.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (34.1.y1)",
            "时态助词使用不当导致时间线混乱的表达 (34.1.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (34.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的掌握程度，请选出表述完全正确的标准范句（测试 34-1）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (34.1.4)。",
            "被动句式与处置句式混用导致的严重病句 (34.1.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (34.1.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (34.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u34-l1）的核心关键词（例如「多边外交」）：",
          "acceptedAnswers": [
            "多边外交",
            "多边外交、条",
            "多边外交、条约法与全球治理"
          ],
          "explanation": "正确的核心关键词为「多边外交」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u34-l2": {
    "id": "zh-u34-l2",
    "subject": "mandarin",
    "unit": 34,
    "lessonNumber": 2,
    "title": "多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT) (第2讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：1969年维也纳条约法公约、联合国安理会多边决议起草、峰会联合公报外交辩护。 (第2部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的核心语法法则与应用范例 (34.2.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (34.2.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (34.2.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (34.2.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」（第2讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的核心语法法则与应用范例 (34.2.1)。",
            "存在语序混乱且虚词误用的病句选项 (34.2.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (34.2.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (34.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的正式语境下，最准确得体的表达是哪一项？（第34.2题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (34.2.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (34.2.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (34.2.x2)",
            "量词与名词修饰搭配错误的病句选项 (34.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u34-l2）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (34.2.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (34.2.y1)",
            "时态助词使用不当导致时间线混乱的表达 (34.2.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (34.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的掌握程度，请选出表述完全正确的标准范句（测试 34-2）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (34.2.4)。",
            "被动句式与处置句式混用导致的严重病句 (34.2.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (34.2.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (34.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u34-l2）的核心关键词（例如「多边外交」）：",
          "acceptedAnswers": [
            "多边外交",
            "多边外交、条",
            "多边外交、条约法与全球治理"
          ],
          "explanation": "正确的核心关键词为「多边外交」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u34-l3": {
    "id": "zh-u34-l3",
    "subject": "mandarin",
    "unit": 34,
    "lessonNumber": 3,
    "title": "多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT) (第3讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：1969年维也纳条约法公约、联合国安理会多边决议起草、峰会联合公报外交辩护。 (第3部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的核心语法法则与应用范例 (34.3.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (34.3.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (34.3.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (34.3.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」（第3讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的核心语法法则与应用范例 (34.3.1)。",
            "存在语序混乱且虚词误用的病句选项 (34.3.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (34.3.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (34.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的正式语境下，最准确得体的表达是哪一项？（第34.3题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (34.3.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (34.3.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (34.3.x2)",
            "量词与名词修饰搭配错误的病句选项 (34.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u34-l3）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (34.3.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (34.3.y1)",
            "时态助词使用不当导致时间线混乱的表达 (34.3.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (34.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的掌握程度，请选出表述完全正确的标准范句（测试 34-3）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (34.3.4)。",
            "被动句式与处置句式混用导致的严重病句 (34.3.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (34.3.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (34.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u34-l3）的核心关键词（例如「多边外交」）：",
          "acceptedAnswers": [
            "多边外交",
            "多边外交、条",
            "多边外交、条约法与全球治理"
          ],
          "explanation": "正确的核心关键词为「多边外交」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u34-l4": {
    "id": "zh-u34-l4",
    "subject": "mandarin",
    "unit": 34,
    "lessonNumber": 4,
    "title": "多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT) (第4讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：1969年维也纳条约法公约、联合国安理会多边决议起草、峰会联合公报外交辩护。 (第4部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的核心语法法则与应用范例 (34.4.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (34.4.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (34.4.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (34.4.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」（第4讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的核心语法法则与应用范例 (34.4.1)。",
            "存在语序混乱且虚词误用的病句选项 (34.4.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (34.4.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (34.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的正式语境下，最准确得体的表达是哪一项？（第34.4题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (34.4.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (34.4.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (34.4.x2)",
            "量词与名词修饰搭配错误的病句选项 (34.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u34-l4）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (34.4.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (34.4.y1)",
            "时态助词使用不当导致时间线混乱的表达 (34.4.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (34.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的掌握程度，请选出表述完全正确的标准范句（测试 34-4）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (34.4.4)。",
            "被动句式与处置句式混用导致的严重病句 (34.4.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (34.4.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (34.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u34-l4）的核心关键词（例如「多边外交」）：",
          "acceptedAnswers": [
            "多边外交",
            "多边外交、条",
            "多边外交、条约法与全球治理"
          ],
          "explanation": "正确的核心关键词为「多边外交」。"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "zh-u34-l5": {
    "id": "zh-u34-l5",
    "subject": "mandarin",
    "unit": 34,
    "lessonNumber": 5,
    "title": "多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT) (第5讲)",
    "level": "C2",
    "objective": "全面掌握与熟练运用本课核心内容：1969年维也纳条约法公约、联合国安理会多边决议起草、峰会联合公报外交辩护。 (第5部分)。",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "教授在学术研讨会上向学生们深入浅出地讲解了「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的核心语法法则与应用范例 (34.5.1)。",
          "reading": "Jiaoshou zai xueshu yantaohui shang xiang xueshengmen shenruqianchu de jiangjie le hexin yufa faze.",
          "translation": "The professor explained the core grammatical rules and application examples of '多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)' in simple terms to students at the academic seminar."
        },
        {
          "target": "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (34.5.2)。",
          "reading": "Xuezhemen zai tushuguan renzhen yandu jingdian wenxian, bing zhendui xueshu wenti zhankai le taolun.",
          "translation": "Scholars earnestly studied classic literature in the library and launched lively and in-depth discussions on specialized academic issues."
        },
        {
          "target": "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (34.5.3)。",
          "reading": "Zai guoji xueshu dahui shang, geguo daibiao weirao yuyanxue lilun zhankai le jiaoliu.",
          "translation": "At the international academic conference, delegates from various countries conducted extensive academic exchanges on linguistic theory and intercultural communication."
        },
        {
          "target": "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (34.5.4)。",
          "reading": "Xueshengmen tongguo xitong de xunlian, wanquan zhangwo le gaoji juxing jiegou yu cihui yongfa.",
          "translation": "Through systematic grammatical training and practical drills, students completely mastered the advanced syntactic structures and vocabulary usage of this unit."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【语法判断】下列哪一项完全符合「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」（第5讲）的标准汉语规范？",
          "options": [
            "教授在学术研讨会上向学生们深入浅出地讲解了「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的核心语法法则与应用范例 (34.5.1)。",
            "存在语序混乱且虚词误用的病句选项 (34.5.w1)",
            "主谓搭配不当且句式杂糅的不合规范句子 (34.5.w2)",
            "用词不当且逻辑关系存在缺陷的干扰项 (34.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "首选选项句式严谨规范，语法结构完整，完全符合现代汉语书面语标准。"
        },
        {
          "prompt": "【语义辨析】关于本课所讲解的语法规则与词汇用法，下列说明正确的是哪一项？",
          "options": [
            "该句语法结构完整严密，虚词使用精准，符合现代汉语语用规范。",
            "句子中缺少必要的宾语成分，导致结构残缺。",
            "关联词语搭配错误，前后分句之间逻辑关系颠倒。",
            "动词与补语之间缺少必要的结构助词，属于语法误用。"
          ],
          "answerIndex": 0,
          "explanation": "该项准确概括了本课语法规则的正确应用要点。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【实践应用】在涉及「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的正式语境下，最准确得体的表达是哪一项？（第34.5题）",
          "options": [
            "学者们在图书馆认真研读经典文献，并针对专业学术问题展开了热烈而深入的探讨 (34.5.2)。",
            "语体风格不协调且带有口语粗俗词汇的句子 (34.5.x1)",
            "分句之间缺乏必要连词导致表意不明的表述 (34.5.x2)",
            "量词与名词修饰搭配错误的病句选项 (34.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "该句用词典雅，语法规范，完全适合正式学术与交际场合。"
        },
        {
          "prompt": "【语境选择】哪一个句子最能够准确传达本讲（zh-u34-l5）所要求的高阶语言表达？",
          "options": [
            "在国际学术大会上，各国代表围绕现代语言学理论与跨文化交际展开了广泛的学术交流 (34.5.3)。",
            "句意含糊且存在成分赘余缺陷的句子 (34.5.y1)",
            "时态助词使用不当导致时间线混乱的表达 (34.5.y2)",
            "滥用修辞导致逻辑关系混乱的干扰项 (34.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "该选项准确体现了本讲的核心概念与严密的逻辑脉络。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【综合评估】为检验学习者对「多边外交、条约法与全球治理 (C2 Capstone Multilateral Diplomacy & VCLT)」的掌握程度，请选出表述完全正确的标准范句（测试 34-5）：",
          "options": [
            "学生们通过系统的语法训练与实践演练，完全掌握了本单元的高级句型结构与词汇用法 (34.5.4)。",
            "被动句式与处置句式混用导致的严重病句 (34.5.z1)",
            "补语位置颠倒且否定副词位置错误的句子 (34.5.z2)",
            "成语误用且字面意思与文脉不合的错误选项 (34.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "该范句在词汇、句法及语用层面均达到了高级汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入本课（zh-u34-l5）的核心关键词（例如「多边外交」）：",
          "acceptedAnswers": [
            "多边外交",
            "多边外交、条",
            "多边外交、条约法与全球治理"
          ],
          "explanation": "正确的核心关键词为「多边外交」。"
        }
      ],
      "passThreshold": 0.8
    }
  }
};
  var CURRICULUM = {
    subject: 'mandarin',
    units: UNITS,
    lessons: LESSONS
  };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['mandarin'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
