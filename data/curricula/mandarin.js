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
    "title": "汉语拼音系统概论：声母、单韵母与发音部位 (Pinyin Initials & Single Finals)",
    "level": "A1",
    "objective": "掌握汉语拼音的基本音节结构，熟练发准六个核心单韵母（a, o, e, i, u, ü）与第一组基础声母（b, p, m, f, d, t, n, l）的发音要领与拼读规则。",
    "presentation": {
      "explanation": "现代标准汉语普通话的每一个基本音节，通常由声母、韵母与声调三个核心要素共同构成。声母位于音节开头，韵母紧随其后构成音节主体，声调则贯穿整个音节的音高升降变化。掌握拼音是准确拼读汉字、规范普通话发音与实现计算机汉字输入的基石。\n\n一、六个核心单韵母的发音生理机制与唇舌要领：\n1. ɑ（央低不圆唇元音）：发音时口腔自然大幅度张开，舌头平放于口腔底部，舌位居中不前不后，声带自然振动，声音洪亮清晰，示范汉字如「爸爸」、「大马」、「大家」。\n2. o（后半高圆唇元音）：发音时舌身显著向后缩，舌面后部适度隆起，双唇自然聚拢呈饱满圆形，声音圆润，示范汉字如「我」、「波涛」、「坡度」。\n3. e（后半高不圆唇元音）：发音时舌位与 o 完全一致，但嘴角向左右两侧自然舒展呈扁平状，双唇绝不拢圆，示范汉字如「哥哥」、「白鹅」、「饥饿」。\n4. i（前高不圆唇元音）：发音时舌尖轻抵下门齿背，舌面前部向硬腭高高隆起，嘴角向两边展开如微笑，气流自舌面与硬腭之间通过，示范汉字如「你」、「弟弟」、「衣服」。\n5. u（后高圆唇元音）：发音时舌身后缩，舌面后部向软腭高高隆起，双唇用力聚拢向前突出成极小圆孔，示范汉字如「五」、「大路」、「房屋」。\n6. ü（前高圆唇元音）：发音舌位与 i 完全一致，关键在于保持舌位不动的同时将双唇拢圆向前突出成撮口状，气流均匀呼出，示范汉字如「绿叶」、「下雨」、「金鱼」。\n\n二、第一组核心声母的发音部位与阻气方式：\n1. 双唇音：b（双唇紧闭阻碍气流，除阻时不送气清塞音，如「八个」）；p（双唇紧闭阻气，除阻时伴随强烈爆发气流之送气清塞音，如「害怕」）；m（双唇闭合，软腭下垂，声带颤动且气流由鼻腔透出之浊鼻音，如「妈妈」）。\n2. 唇齿音：f（上门齿轻触下唇内边缘形成狭窄缝隙，气流摩擦而出之清擦音，如「出发」）。\n3. 舌尖中音：d（舌尖紧抵上齿龈形成阻塞，除阻时不送气清塞音，如「大门」）；t（舌尖抵上齿龈阻气，除阻时伴随强烈爆发气流之送气清塞音，如「他们」）；n（舌尖顶住上齿龈，气流振动声带完全自鼻腔透出之浊鼻音，如「你好」）；l（舌尖抵上齿龈中央，气流从舌头两旁畅通流出之浊边音，如「六月」）。\n\n三、两拼音节拼读法则：\n拼读时遵循「前音轻短后音重，两音相连猛一碰」的基本原理，声母快速滑向韵母，一气呵成形成完整音节。声母发音务必轻微短促，韵母则须饱满响亮。",
      "examples": [
        {
          "target": "妈妈 (māma)",
          "reading": "[ˈma˥.ma] (mā-ma)",
          "translation": "Mother / Mom"
        },
        {
          "target": "爸爸 (bàba)",
          "reading": "[ˈpa˥˩.pa] (bà-ba)",
          "translation": "Father / Dad"
        },
        {
          "target": "大马 (dàmǎ)",
          "reading": "[ta˥˩.ma˨˩˦] (dà-mǎ)",
          "translation": "Big horse"
        },
        {
          "target": "绿叶 (lǜyè)",
          "reading": "[ly˥˩.jɛ˥˩] (lǜ-yè)",
          "translation": "Green leaf"
        }
      ],
      "mnemonics": [
        "张大嘴巴 ɑ ɑ ɑ，圆圆嘴巴 o o o，白鹅倒影 e e e，牙齿对齐 i i i，突出嘴巴 u u u，吹起笛子 ü ü ü！"
      ],
      "culturalNotes": [
        "《汉语拼音方案》于1958年由第一届全国人民代表大会第五次会议正式批准推行，现已成为联合国与国际标准化组织公认的汉字罗马化国际标准。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "单韵母「ü」在发音时的核心唇形与舌位要领是：",
          "options": [
            "舌位与「i」完全相同，但双唇拢圆呈小圆孔（撮口呼）。 (Rounding lips while holding the i tongue position)",
            "舌位与「u」完全相同，双唇展开呈扁平状。",
            "张大嘴巴，舌头平放于口腔底部。",
            "舌尖轻触上齿背，嘴角向两侧用力拉开。"
          ],
          "answerIndex": 0,
          "explanation": "单韵母 ü 是前高圆唇元音，其舌位与前高不圆唇元音 i 完全一致，关键在于保持双唇紧圆向前突出。"
        },
        {
          "prompt": "在声母「b」与「p」的发音对比中，两者最关键的区别在于：",
          "options": [
            "气流强弱：b 是不送气音，而 p 是强烈送气音。 (b is unaspirated [p], while p is aspirated [pʰ])",
            "发音部位：b 是双唇音，而 p 是唇齿音。",
            "声带状态：b 声带剧烈振动，而 p 声带完全不振动。",
            "鼻腔通道：b 走鼻腔气流，而 p 走口腔气流。"
          ],
          "answerIndex": 0,
          "explanation": "普通话中的 b 和 p 均为双唇清塞音，二者的核心对立在于不送气与送气的强弱气流差异。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "请选出下列声母中属于「唇齿音」的声母：",
          "options": [
            "f (上齿接触下唇形成窄缝呼气) (Labiodental fricative f)",
            "b (双唇闭合不送气塞音)",
            "m (双唇闭合鼻音)",
            "d (舌尖抵住上齿龈塞音)"
          ],
          "answerIndex": 0,
          "explanation": "在汉语拼音系统中，声母 f 是唯一的唇齿音，发音时上门齿轻触下唇内缘摩擦出声。"
        },
        {
          "prompt": "声母「d」与韵母「a」拼读组成汉字「大」时，正确的拼音标注为：",
          "options": [
            "dà (第四声，去声全降调) (Fourth tone dà)",
            "tā (送气音，第一声)",
            "bà (双唇音，第四声)",
            "nǎ (鼻音，第三声)"
          ],
          "answerIndex": 0,
          "explanation": "汉字「大」由声母 d 和韵母 a 拼合而成，声调为第四声（去声），拼音为 dà。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "下列哪一组词语的声母全部属于「舌尖中音（d, t, n, l）」？",
          "options": [
            "地图 (dìtú)、男女 (nánnǚ)、大路 (dàlù)",
            "爸爸 (bàba)、妈妈 (māma)、头发 (tóufa)",
            "白皮 (báipí)、面包 (miànbāo)、大门 (dàmén)",
            "飞机 (fēijī)、跑步 (pǎobù)、绿草 (lǜcǎo)"
          ],
          "answerIndex": 0,
          "explanation": "「地图 (d, t)」、「男女 (n, n)」、「大路 (d, l)」的所有声母均属于舌尖中音（d, t, n, l）。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入由声母「m」和单韵母「a」组成的第一声亲属称谓词汉字（例如「妈」）：",
          "acceptedAnswers": [
            "妈",
            "妈妈"
          ],
          "explanation": "汉字「妈 / 妈妈」读音为 mā / māma，由声母 m 与韵母 a 拼合，为普通话第一声。"
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
    "title": "普通话四声调值、五度标记法与轻声规律 (The Four Tones & Neutral Tone)",
    "level": "A1",
    "objective": "系统掌握普通话四个基本声调的调类、五度调值变化曲线、标调位置口诀以及轻声音节的发音特征。",
    "presentation": {
      "explanation": "汉语属于高度发达的声调语言，声调具有不可替代的区别词义之核心功能。音节的声母与韵母即便完全相同，若声调相异，所代表的汉字与概念亦截然不同，失之毫厘谬以千里。\n\n一、普通话四大基本声调与五度标记法调值体系：\n1. 第一声（阴平，调值 55 高平调）：发音时音高始终保持在最高点 5 度，声音高亢平稳且持续饱满，气息平稳均匀，如汉字「妈」、「三」、「高」、「飞」、「天」。\n2. 第二声（阳平，调值 35 中升调）：发音由中等音高 3 度平滑上升至最高点 5 度，音势微扬向上，如爬坡般持续升起，如汉字「麻」、「十」、「国」、「白」、「来」。\n3. 第三声（上声，调值 214 降升调）：单念时音高由次低音 2 度先平缓降至最低音 1 度，再强劲扬升至次高音 4 度，波折分明，如汉字「马」、「我」、「好」、「水」、「北」。\n4. 第四声（去声，调值 51 全降调）：发音由最高音 5 度迅猛垂直骤降至最低音 1 度，短促有力、坚决果断，如高山流水一落千丈，如汉字「骂」、「大」、「去」、「对」、「看」。\n\n二、经典同音四声辨析范例：\n普通话以声调区分词义的典型体现：mā（妈，母亲） -> má（麻，亚麻） -> mǎ（马，骏马） -> mà（骂，责备）。四个字声韵完全相同，但声调各异，含义完全独立。\n\n三、轻声的发音本质与常见规律：\n轻声是普通话音节在语流连读时产生的一种特殊的音变弱化现象，发音特点是音长显著变短、音强显著减弱，拼写时不标注调号：\n1. 重叠亲属称谓词的后一音节：如「妈妈」、「爸爸」、「哥哥」、「姐姐」、「弟弟」、「妹妹」。\n2. 常用语法虚词与结构助词：如助词「你的」、「吃了」、「看着」、「走吧」、「好吗」。\n3. 常用名词后缀：如「桌子」、「石头」、「木头」、「朋友们」、「学生们」。\n\n四、声调符号标调位置口诀：\n汉语拼音标注声调符号严格遵循主元音响度顺序：「有 ɑ 不放过，没 ɑ 找 o e；i u 并列标在后，单个韵母不用说。」（例如 bái 标在 ɑ 上，duō 标在 o 上，guì 标在 i 上，liù 标在 u 上）。",
      "examples": [
        {
          "target": "妈妈骑马，马慢，妈妈骂马。(Māma qí mǎ, mǎ màn, māma mà mǎ.)",
          "reading": "[ˈma˥.ma t͡ɕʰi˧˥ ma˨˩˦, ma˨˩˦ man˥˩, ˈma˥.ma ma˥˩ ma˨˩˦] (Mā-ma qí mǎ, mǎ màn, mā-ma mà mǎ.)",
          "translation": "Mom rides a horse; the horse is slow; Mom scolds the horse."
        },
        {
          "target": "哥哥的桌子 (gēge de zhuōzi)",
          "reading": "[ˈkɤ˥.kɤ tɤ ˈt͡swɔ˥.t͡sɨ] (gē-ge de zhuō-zi)",
          "translation": "Elder brother's table"
        },
        {
          "target": "我的朋友 (wǒ de péngyou)",
          "reading": "[wɔ˨˩ tɤ ˈpʰɤŋ˧˥.joʊ] (wǒ de péng-you)",
          "translation": "My friend"
        },
        {
          "target": "八百把刀 (bā bǎi bǎ dāo)",
          "reading": "[pa˥ paɪ̯˧˥ pa˨˩˦ taʊ̯˥] (bā bǎi bǎ dāo)",
          "translation": "Eight hundred knives"
        }
      ],
      "mnemonics": [
        "一声高平 55 像条线，二声上升 35 爬上山，三声下坡又上坡 214 转个弯，四声下降 51 往下窜！"
      ],
      "culturalNotes": [
        "著名语言学家赵元任先生创立的「五度制调值标记法」，将人类发音自然音域划分为 1 至 5 度，精准刻画了汉语四声的音高轨迹，现已被国际语音学界广泛采纳。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在普通话声调中，调值为「51（高降调）」的声调是哪一个？",
          "options": [
            "第四声（去声） (Fourth tone / Falling tone 51)",
            "第一声（阴平 55）",
            "第二声（阳平 35）",
            "第三声（上声 214）"
          ],
          "answerIndex": 0,
          "explanation": "第四声（去声）的五度调值为 51，发音特点是由最高度 5 迅速降到最低度 1，短促有力。"
        },
        {
          "prompt": "关于拼音标调位置，复合韵母「iu」和「ui」的标调原则是：",
          "options": [
            "「i 和 u 并列标在后」：iu 标在 u 上，ui 标在 i 上。 (When i and u appear together, tone mark goes on the second letter)",
            "始终优先标在 i 上。",
            "始终优先标在 u 上。",
            "随机标注在第一个元音字母上。"
          ],
          "answerIndex": 0,
          "explanation": "按照标调口诀「i u 并列标在后」，在 iu 组合中标在 u 上（如 liù），在 ui 组合中标在 i 上（如 guì）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "下列词语中，第二个音节属于「轻声」的是：",
          "options": [
            "桌子 (zhuōzi) (Suffix -zi takes neutral tone)",
            "中国 (Zhōngguó)",
            "汉语 (Hànyǔ)",
            "学生 (xuéshēng)"
          ],
          "answerIndex": 0,
          "explanation": "名词后缀「子（zi）」在「桌子、椅子、杯子」等词中均弱化为轻声，读作 zhuōzi。"
        },
        {
          "prompt": "请选出声调调类顺序严格符合「一、二、三、四声」的一组词语：",
          "options": [
            "山 (shān) -> 羊 (yáng) -> 马 (mǎ) -> 大 (dà) (Tone sequence: 1st -> 2nd -> 3rd -> 4th)",
            "马 (mǎ) -> 山 (shān) -> 大 (dà) -> 羊 (yáng)",
            "羊 (yáng) -> 大 (dà) -> 山 (shān) -> 马 (mǎ)",
            "大 (dà) -> 马 (mǎ) -> 羊 (yáng) -> 山 (shān)"
          ],
          "answerIndex": 0,
          "explanation": "山（shān，一声）、羊（yáng，二声）、马（mǎ，三声）、大（dà，四声），严格对应阴平、阳平、上声、去声。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "下列哪一个句子的拼音声调标注完全正确且轻声处理得当？",
          "options": [
            "爸爸和妈妈去买西瓜。(Bàba hé māma qù mǎi xīguā.)",
            "Bàbà hé māmā qù mǎi xīguā.",
            "Bàba hè māma qú mài xǐguǎ.",
            "Bába hé mamá qū mài xīguà."
          ],
          "answerIndex": 0,
          "explanation": "「Bàba」和「māma」后字为轻声，「hé」为二声，「qù」为四声，「mǎi」为三声，「xīguā」均为一声，标注完全准确。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示「骏马」的第三声（上声）单字汉字（拼音为 mǎ）：",
          "acceptedAnswers": [
            "马"
          ],
          "explanation": "汉字「马」读音为 mǎ，为普通话第三声（上声 214 调）。"
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
    "title": "核心音变规律：三声连读变调与「一」、「不」的音变规律 (Mandarin Tone Sandhi)",
    "level": "A1",
    "objective": "掌握普通话最重要的音变规律：两个第三声连读变第二声、半三声规律，以及高频字「一」和「不」在不同语境下的变调法则。",
    "presentation": {
      "explanation": "普通话在实际连续言语流动中，音节相连发音时受前后语音的相互制约与发音省力原则驱动，往往发生声调变化，此即「变调」现象。掌握变调是使普通话发音流畅、自然、地道的核心关键。\n\n一、三声相连连读变调规律：\n1. 两个第三声相连：前一个第三声音节必须变读为第二声（阳平 35 调），后一个第三声保持原调（214 调值转换为 35 加 214）。在书面拼写时依然标注原词本调，但口语发音必须按变调读出：\n- 你好（拼写作 nǐ hǎo，实际口语读作 ní hǎo）\n- 可以（拼写作 kě yǐ，实际口语读作 ké yǐ）\n- 水果（拼写作 shuǐ guǒ，实际口语读作 shuí guǒ）\n- 很好（拼写作 hěn hǎo，实际口语读作 hén hǎo）\n- 语法（拼写作 yǔ fǎ，实际口语读作 yú fǎ）\n- 手表（拼写作 shǒu biǎo，实际口语读作 shóu biǎo）\n\n2. 半三声（半上声）规则：\n当第三声音节位于第一声、第二声、第四声或轻声音节之前时，该第三声仅读出前半段的低平降势（调值由 214 简化为 21），后半段的扬升部分完全省略：\n- 北京（第三声在第一声前，实际读 Běi[21] + jīng[55]）\n- 语言（第三声在第二声前，实际读 yǔ[21] + yán[35]）\n- 好看（第三声在第四声前，实际读 hǎo[21] + kàn[51]）\n- 喜欢（第三声在第一声前，实际读 xǐ[21] + huān[55]）\n\n二、「一」的变调核心法则：\n1. 单念、位于词句末尾或表示序数时读本调第一声（阴平 55 调）：如「第一」、「一二三」、「统一」、「初一」。\n2. 在第四声音节前变读为第二声（阳平 35 调）：如「一个」、「一定」、「一次」、「一块」、「一片」。\n3. 在第一声、第二声、第三声音节前一律变读为第四声（去声 51 调）：如「一天」、「一年」、「一起」、「一本」、「一双」。\n\n三、「不」的变调核心法则：\n1. 单念或位于第一声、第二声、第三声音节前时，保持本调第四声（去声 51 调）：如「不行」、「不好」、「不高」、「不来」、「不吃」。\n2. 在第四声音节前一律变读为第二声（阳平 35 调）：如「不是」、「不对」、「不要」、「不必」、「不去」。\n3. 嵌在动词或补语中间时读轻声：如「去不去」、「对不起」、「差不多」、「好不好」。",
      "examples": [
        {
          "target": "你好！我想买一个新鲜的水果。(Nǐ hǎo! Wǒ xiǎng mǎi yí gè xīnxiān de shuǐguǒ.)",
          "reading": "[ni˧˥ xaʊ˨˩˦! wɔ˨˩ ɕjɑŋ˧˥ maɪ̯˨˩˦ i˧˥ kɤ˥˩ ɕin˥.ɕjɛn˥ tɤ ʂweɪ̯˧˥ kwɔ˨˩˦] (Nǐ hǎo! Wǒ xiǎng mǎi yí gè xīn-xiān de shuǐ-guǒ.)",
          "translation": "Hello! I would like to buy a fresh fruit."
        },
        {
          "target": "这不是一本普通的书。(Zhè bú shì yì běn pǔtōng de shū.)",
          "reading": "[ʈ͡ʂɤ˥˩ pu˧˥ ʂɨ˥˩ i˥˩ pən˨˩ pʰu˨˩.tʰʊŋ˥ tɤ ʂu˥] (Zhè bú shì yì běn pǔ-tōng de shū.)",
          "translation": "This is not an ordinary book."
        },
        {
          "target": "我们一起去北京。(Wǒmen yìqǐ qù Běijīng.)",
          "reading": "[wɔ˨˩.mən i˥˩.t͡ɕʰi˨˩˦ t͡ɕʰy˥˩ peɪ̯˨˩.t͡ɕiŋ˥] (Wǒ-men yì-qǐ qù Běi-jīng.)",
          "translation": "We go to Beijing together."
        },
        {
          "target": "对不对？很好！(Duì bu duì? Hěn hǎo!)",
          "reading": "[tweɪ̯˥˩ pu tweɪ̯˥˩? xən˧˥ xaʊ˨˩˦] (Duì bu duì? Hěn hǎo!)",
          "translation": "Right or wrong? Very good!"
        }
      ],
      "mnemonics": [
        "两三相连前变二（你好读 ní hǎo）；「一」「不」遇到四声变二声（一个 yí gè，不是 bú shì）；「一」遇非四变四声（一天 yì tiān，一起 yì qǐ）！"
      ],
      "culturalNotes": [
        "在正式汉语拼音书写规范中，变调词语一般只标本调（如「你好」标 nǐ hǎo，「一个」标 yī gè），但初级教材为了帮助学习者发准口语，常直接标注变调后实际发音。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在日常口语中，双音节词「你好」的实际发音声调变化为：",
          "options": [
            "前字变为第二声：ní hǎo (3rd + 3rd sandhi becomes 2nd + 3rd)",
            "两字都变为第二声：ní háo",
            "后字变为第四声：nǐ hào",
            "前字保持第三声，后字变为轻声：nǐ hao"
          ],
          "answerIndex": 0,
          "explanation": "根据三声变调规则，两个第三声音节相连时，前字由 214 调变为第二声 35 调，即读作「ní hǎo」。"
        },
        {
          "prompt": "在短语「不是」和「不同」中，否定词「不」的实际发音声调分别为：",
          "options": [
            "「不是」读 bú（第二声），「不同」读 bù（第四声）。 (bù becomes bú before 4th tone shì, stays bù before 2nd tone tóng)",
            "两处都读第二声（bú shì, bú tóng）。",
            "两处都读第四声（bù shì, bù tóng）。",
            "「不是」读 bù，「不同」读 bú。"
          ],
          "answerIndex": 0,
          "explanation": "「不」在第四声「是」前变读第二声（bú shì）；在非第四声「同（第二声）」前保持本调第四声（bù tóng）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "在短语「一个苹果」和「一天时间」中，「一」的实际变调读音分别是：",
          "options": [
            "一个 (yí gè, 二声)，一天 (yì tiān, 四声) (yī becomes yí before 4th tone, becomes yì before 1st tone)",
            "一个 (yì gè)，一天 (yí tiān)",
            "两处均读第一声原调 (yī gè, yī tiān)",
            "两处均读第二声 (yí gè, yí tiān)"
          ],
          "answerIndex": 0,
          "explanation": "「个」是第四声，故「一」变读第二声 yí gè；「天」是第一声，故「一」变读第四声 yì tiān。"
        },
        {
          "prompt": "下列哪一个词语在前字发音时必须执行「三声变第二声」的变调？",
          "options": [
            "可以 (kěyǐ -> kéyǐ) (Both are 3rd tone, kě becomes ké)",
            "老师 (lǎoshī) (3rd + 1st tone)",
            "北方 (běifāng) (3rd + 1st tone)",
            "雨衣 (yǔyī) (3rd + 1st tone)"
          ],
          "answerIndex": 0,
          "explanation": "「可以 (kě + yǐ)」两个音节均为第三声，故前字必须变调为第二声「kéyǐ」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请判断下列句子中「一」和「不」的变调标注完全正确的是哪一项？",
          "options": [
            "他一定不去参加会议。(Tā yí dìng bú qù cānjiā huìyì.)",
            "Tā yì dìng bù qù cānjiā huìyì.",
            "Tā yī dìng bù qù cānjiā huìyì.",
            "Tā yí dìng bù qù cānjiā huìyì."
          ],
          "answerIndex": 0,
          "explanation": "「定」与「去」均为第四声，其前面的「一」与「不」均须变调为第二声：yí dìng 与 bú qù。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入由两个第三声字组成的中国最经典日常问候语（汉字为「你好」）：",
          "acceptedAnswers": [
            "你好"
          ],
          "explanation": "汉字「你好」由两个第三声字（nǐ + hǎo）构成，实际口语中前字变调读作「ní hǎo」。"
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
    "title": "基础日常问候与敬称：你好、您好与师生交际礼节 (Daily Greetings & Honorifics)",
    "level": "A1",
    "objective": "掌握普通话日常问候语（你好/您好/早上好/老师好）、人称敬称区分以及基础近况询问（你好吗/我很好）的语用交际场景。",
    "presentation": {
      "explanation": "汉语问候语体系深刻凝聚了中华传统文化中注重人伦秩序、尊师重道、尊长爱幼与谦逊和睦的礼仪精神，在人际交往中具有核心语用地位：\n\n一、核心问候语与人称敬称的严格分野：\n1. 「你好！」：适用范围最广泛的普适性日常问候语，主要用于平辈同侪、普通朋友、同事以及同龄初识者之间。\n2. 「您好！」：专用尊称敬语。「您」字在结构上由「你」字底置「心」字构成，表征「由衷将对方放在心上」。专用于长辈、师长、尊长领导或商业客户，表达庄重尊敬。\n3. 「你们好！」：用于面向两位或两位以上群体时的复数问候。\n\n二、「称谓 + 好」定向问候句式：\n在中文正式社交与校园礼节中，面对特定长辈或职场人士，最得体规范的问候是将身份称谓置于「好」字之前：\n- 老师好！（问候授课教师与学者）\n- 王经理好！（问候职场上级与商务伙伴）\n- 叔叔好！ / 阿姨好！（问候长辈亲友）\n- 大家好！（面向全体听众与同仁的开场问候）\n\n三、基于时间维度的日常礼貌问候：\n1. 早上好 / 早！（清晨问候，熟人之间单道一声「早」格外亲切自然）\n2. 下午好！（午后商务与日常工作问候）\n3. 晚上好！（傍晚及夜间聚会、晚间课程问候）\n\n四、近况询问与经典应答会话闭环：\n- 问：你好吗？（「吗」为是非疑问语气助词，用于询问对方近期生活与身体状况）\n- 答：我很好，谢谢！你呢？（先表述自身良好状态，再行礼貌致谢，继而使用「呢」字承前反问对方状况）\n- 答：我也很好。（副词「也」作为状语，必须置于主语之后、形容词谓语「很好」之前，表示情况相同）。",
      "examples": [
        {
          "target": "张老师，您好！早上好！(Zhāng lǎoshī, nín hǎo! Zǎoshang hǎo!)",
          "reading": "[ʈ͡ʂɑŋ˥ laʊ˨˩.ʂɨ˥, nin˧˥ xaʊ˨˩˦! t͡saʊ˨˩.ʂaŋ xaʊ˨˩˦] (Zhāng lǎo-shī, nín hǎo! Zǎo-shang hǎo!)",
          "translation": "Teacher Zhang, hello (respectful)! Good morning!"
        },
        {
          "target": "同学们好！大家请坐。(Tóngxuémen hǎo! Dàjiā qǐng zuò.)",
          "reading": "[tʰʊŋ˧˥.ɕɥɛ˧˥.mən xaʊ˨˩˦! ta˥˩.t͡ɕja˥ t͡ɕʰiŋ˨˩ t͡swɔ˥˩] (Tóng-xué-men hǎo! Dà-jiā qǐng zuò.)",
          "translation": "Hello, students! Everyone please sit down."
        },
        {
          "target": "——你好吗？——我很好，谢谢，你呢？(—Nǐ hǎo ma? —Wǒ hěn hǎo, xièxie, nǐ ne?)",
          "reading": "[—ni˧˥ xaʊ˨˩˦ ma? —wɔ˨˩ xən˧˥ xaʊ˨˩˦, ɕjɛ˥˩.ɕjɛ, ni˨˩˦ nɤ?] (—Nǐ hǎo ma? —Wǒ hěn hǎo, xiè-xie, nǐ ne?)",
          "translation": "—How are you? —I am very well, thank you, and you?"
        },
        {
          "target": "我也很好，很高兴认识你！(Wǒ yě hěn hǎo, hěn gāoxìng rènshi nǐ!)",
          "reading": "[wɔ˨˩ jɛ˨˩ xən˧˥ xaʊ˨˩˦, xən˨˩ kaʊ̯˥.ɕiŋ˥˩ ʐən˥˩.ʂɨ ni˨˩˦] (Wǒ yě hěn hǎo, hěn gāo-xìng rèn-shi nǐ!)",
          "translation": "I am also very well, very glad to meet you!"
        }
      ],
      "mnemonics": [
        "长辈师长用「您好」，平辈朋友用「你好」；称谓在前好在后（老师好），心存敬意礼节高！"
      ],
      "culturalNotes": [
        "在传统中国师生关系中，「尊师重道」至为关键。学生见到老师通常必须使用「老师好」或「您好」，直呼其名或使用平辈的「你好」会被视作不合礼仪。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在大学校园中初次见到授课教授时，最得体、最礼貌的中文问候语是：",
          "options": [
            "教授，您好！ (Professor, hello [respectful]!)",
            "喂，你好！",
            "老头好！",
            "你叫什么名字？"
          ],
          "answerIndex": 0,
          "explanation": "对师长使用尊称「您好」或「职务/称谓 + 您好」是中文中标准而得体的礼貌问候方式。"
        },
        {
          "prompt": "对方询问「你好吗？」时，最自然标准的礼貌回应结构是：",
          "options": [
            "我很好，谢谢！你呢？ (I am very well, thank you! And you?)",
            "我是学生，谢谢你。",
            "你很好，我也好。",
            "我不认识你。"
          ],
          "answerIndex": 0,
          "explanation": "标准回应模式为先回答自身状态「我很好」，致谢「谢谢」，再回问对方「你呢？」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "清晨遇到邻居或同事时，最简洁亲切的中文问候是：",
          "options": [
            "早！ / 早上好！ (Zǎo! / Zǎoshang hǎo!)",
            "晚安！",
            "下午好！",
            "再见！"
          ],
          "answerIndex": 0,
          "explanation": "清晨时分汉语常用「早上好」或单字「早！」进行亲切问候。"
        },
        {
          "prompt": "在句子「我也很好」中，副词「也」的正确语序位置是：",
          "options": [
            "紧跟在主语「我」之后，形容词谓语「很好」之前。 (Placed directly after subject and before predicate)",
            "放在句子的最开头：也我很好。",
            "放在句子的最末尾：我很好也。",
            "放在「很」和「好」之间：我很也好。"
          ],
          "answerIndex": 0,
          "explanation": "在汉语语法中，副词「也」作为状语，必须位于主语之后、谓语成分之前。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列对话中语序与语用逻辑完全正确的一组：",
          "options": [
            "甲：王老师，您好！ 乙：你好，李华！早上好！",
            "甲：王老师，你呢！ 乙：我也老师好！",
            "甲：您好吗王老师？ 乙：我是好谢谢！",
            "甲：大家早！ 乙：不客气对不起！"
          ],
          "answerIndex": 0,
          "explanation": "学生对老师使用敬称「您好」，老师对学生亲切回复「你好」并道「早上好」，完全符合语用礼仪。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入由「你」加上「心」字底构成的第二人称尊称汉字（拼音为 nín）：",
          "acceptedAnswers": [
            "您"
          ],
          "explanation": "汉字「您」为「你」的敬称，用于长辈、师长或客户，表示由衷尊敬。"
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
    "title": "日常礼貌应答、致谢道歉与道别用语 (Polite Expressions & Conversational Etiquette)",
    "level": "A1",
    "objective": "掌握中文核心礼貌用语（谢谢/不客气、对不起/没关系、请/请问）以及各类道别表达（再见/明天见/回头见）的完整交际闭环。",
    "presentation": {
      "explanation": "中文日常人际交往极度强调礼尚往来与谦和体谅，掌握致谢、道歉、请求与道别的成对礼貌应答体系，是构建良好和谐交际关系的基石：\n\n一、致谢与礼貌应答的完整交际闭环：\n1. 表达感谢：\n- 谢谢！（最通用的基础道谢）\n- 谢谢你！ / 谢谢您！（定向致谢，对师长长辈用「您」）\n- 非常感谢！ / 十分感谢！（程度更深的真挚感谢）\n- 太感谢你了！（充满由衷感叹语气的诚挚谢意）\n2. 礼貌应答（用以消除对方的心理负担与亏欠感）：\n- 不客气！（最标准的通用礼貌回应）\n- 不用谢！（亲切随和的回应）\n- 别客气！（劝慰对方不必过于拘谨客套）\n\n二、道歉与宽慰应答的完整交际闭环：\n1. 表达歉意：\n- 对不起！（语义较重，专用于造成实质性过失、延误或打扰时）\n- 不好意思！（语气柔和委婉，多用于轻度打扰、借光借过或提出微小请求时）\n2. 宽慰应答：\n- 没关系！（表示毫无大碍、完全无需挂怀的标准回应）\n- 没事！ / 没事儿！（口语中极其自然随和的宽慰用语）\n\n三、礼貌请求词「请」的高频应用模式：\n动词「请」置于动词动作之前，赋予整个句子以尊重谦逊的礼貌色彩：\n- 请进！（热情欢迎客人进门）\n- 请坐！（礼貌邀请客人就座）\n- 请喝茶！（中华传统待客礼节）\n- 请问...（问路、求助、咨询信息时的黄金开场敬语）\n\n四、丰富多样的道别表达体系：\n1. 再见！（最通用的道别语，字面含义为「再次相见」）\n2. 明天见！（次日继续相逢的职场与校园常用语）\n3. 一会儿见！（短暂离别后当天稍后即聚）\n4. 下周见！（周末告别时的周期性道别用语）。",
      "examples": [
        {
          "target": "——太感谢你了！——不客气，这是我应该做的。(—Tài gǎnxiè nǐ le! —Bú kèqi, zhè shì wǒ yīnggāi zuò de.)",
          "reading": "[—tʰaɪ̯˥˩ kan˨˩.ɕjɛ˥˩ ni˨˩˦ lɤ! —pu˧˥ kʰɤ˥˩.t͡ɕʰi, ʈ͡ʂɤ˥˩ ʂɨ˥˩ wɔ˨˩ iŋ˥.kaɪ̯ t͡swɔ˥˩ tɤ] (—Tài gǎn-xiè nǐ le! —Bú kè-qi, zhè shì wǒ yīng-gāi zuò de.)",
          "translation": "—Thank you so much! —You're welcome, this is what I should do."
        },
        {
          "target": "——对不起，我迟到了。——没关系，请进！(—Duìbuqǐ, wǒ chídào le. —Méi guānxi, qǐng jìn!)",
          "reading": "[—tweɪ̯˥˩.pu.t͡ɕʰi˨˩˦, wɔ˨˩ ʈ͡ʂʰi˧˥.taʊ̯˥˩ lɤ. —meɪ̯˧˥ kwan˥.ɕi, t͡ɕʰiŋ˨˩ t͡ɕin˥˩!] (—Duì-bu-qǐ, wǒ chí-dào le. —Méi guān-xi, qǐng jìn!)",
          "translation": "—I'm sorry, I'm late. —It doesn't matter, please come in!"
        },
        {
          "target": "请问，图书馆在哪里？(Qǐngwèn, túshūguǎn zài nǎlǐ?)",
          "reading": "[t͡ɕʰiŋ˨˩.wən˥˩, tʰu˧˥.ʂu˥.kwan˨˩˦ t͡saɪ̯˥˩ na˧˥.li˨˩˦?] (Qǐng-wèn, tú-shū-guǎn zài nǎ-lǐ?)",
          "translation": "Excuse me, where is the library?"
        },
        {
          "target": "今天很高兴，我们明天见！(Jīntiān hěn gāoxìng, wǒmen míngtiān jiàn!)",
          "reading": "[t͡ɕin˥.tʰjɛn˥ xən˨˩ kaʊ̯˥.ɕiŋ˥˩, wɔ˨˩.mən miŋ˧˥.tʰjɛn˥ t͡ɕjɛn˥˩!] (Jīn-tiān hěn gāo-xìng, wǒ-men míng-tiān jiàn!)",
          "translation": "Very happy today, see you tomorrow!"
        }
      ],
      "mnemonics": [
        "谢谢对不客气，对不起配没关系；礼貌问路用「请问」，道别相期「明天见」！"
      ],
      "culturalNotes": [
        "汉字「再见」由「再（again）」和「见（see）」组成，蕴含着对未来再次相遇的期盼，比单纯的离开更具人情温度。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "当别人向你真诚道谢说「谢谢你！」时，最得体的礼貌回应是：",
          "options": [
            "不客气！ / 不用谢！ (Bú kèqi! / Bú yòng xiè! - You're welcome!)",
            "对不起！",
            "没关系！",
            "再见！"
          ],
          "answerIndex": 0,
          "explanation": "回应感谢的固定礼貌用语是「不客气」或「不用谢」，而「没关系」是用于回应道歉的。"
        },
        {
          "prompt": "如果不小心踩到了别人的脚，最准确表达歉意的句子是：",
          "options": [
            "对不起！ / 不好意思！ (Duìbuqǐ! / Bù hǎoyìsi! - I am sorry!)",
            "没关系！",
            "不客气！",
            "谢谢你！"
          ],
          "answerIndex": 0,
          "explanation": "发生过失时应主动表达歉意「对不起」或「不好意思」，受影响的一方才会回答「没关系」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "在向陌生路人询问地铁站位置前，最礼貌的起首敬语是：",
          "options": [
            "请问... (Qǐngwèn... - Excuse me, may I ask...)",
            "谢谢...",
            "对不起...",
            "没关系..."
          ],
          "answerIndex": 0,
          "explanation": "向人打听信息或问路时，句首使用「请问（Qǐngwèn）」是最标准地道的中文礼貌表达。"
        },
        {
          "prompt": "同事下班离开办公室时，如果约定好第二天上班碰面，最自然的道别是：",
          "options": [
            "明天见！ (Míngtiān jiàn! - See you tomorrow!)",
            "不客气！",
            "请问！",
            "对不起！"
          ],
          "answerIndex": 0,
          "explanation": "「明天见」直接指明次日相聚，是在职场和学校中最自然亲切的道别语。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "选出下列日常交际对话中回应搭配完全正确的一项：",
          "options": [
            "甲：非常感谢您的帮助！ 乙：不客气，不用谢！",
            "甲：非常感谢您的帮助！ 乙：对不起，没关系！",
            "甲：对不起，我来晚了！ 乙：不客气，请坐吧！",
            "甲：明天见！ 乙：我也很好，谢谢！"
          ],
          "answerIndex": 0,
          "explanation": "对「感谢」回应「不客气 / 不用谢」，完全符合汉语标准交际应答规则。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入由两个相同汉字组成的中文最常用道谢词（拼音为 xièxie）：",
          "acceptedAnswers": [
            "谢谢"
          ],
          "explanation": "汉字「谢谢」是中文中最基础、最通用的表达感谢的词汇。"
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
    "title": "汉语基本语序（主谓宾 SVO）与人称代词系统 (Personal Pronouns & SVO Word Order)",
    "level": "A1",
    "objective": "掌握汉语孤立语的语法特征，熟练运用汉语主谓宾基本语序以及单复数人称代词系统（我、你、您、他、她、它、我们、你们、他们）。",
    "presentation": {
      "explanation": "现代标准汉语在语言类型学上属于典型的孤立语（分析语），其最显著的语法特征是没有印欧语系复杂的动词时态变位、名词格位屈折或阴阳性数形态变化。句子的句法关系、语义指向与逻辑层次主要依靠「词序」与「虚词」来精密表达。\n\n一、汉语基本语序——主谓宾结构：\n汉语最基础、最核心的陈述句基本语序为主语居前、谓语动词居中、宾语殿后：\n1. 主语（施事主体） + 谓语动词（动作行为） + 宾语（受事对象）\n- 我爱你。（主语「我」+ 动词「爱」+ 宾语「你」）\n- 我们学习中文。（主语「我们」+ 动词「学习」+ 宾语「中文」）\n- 他们喝中国茶。（主语「他们」+ 动词「喝」+ 宾语「中国茶」）\n- 老师爱学生。（主语「老师」+ 动词「爱」+ 宾语「学生」）\n无论句中主语是单数还是复数，谓语动词在形态上永远保持恒定不变，绝不发生任何形态屈折变位。\n\n二、现代汉语人称代词完整体系：\n1. 单数人称代词体系：\n- 第一人称单数：我（指称说话人自身）\n- 第二人称单数（平称）：你（用于平辈同侪、普通朋友、同龄初识者）\n- 第二人称单数（敬称）：您（专用于师长学者、尊长领导、长辈亲友或贵客，字形从心，表由衷尊崇）\n- 第三人称单数（男性或泛指）：他\n- 第三人称单数（女性）：她\n- 第三人称单数（事物或非人生物）：它\n语音重点提示：在标准普通话口语中，「他」、「她」、「它」的语音完全相同，均读第一声阴平 tā；在书面语篇中则通过不同的汉字偏旁部首予以精密区分。\n\n2. 复数人称代词体系（单数代词附加轻声后缀「们」）：\n- 我们（第一人称复数，代表说话方全体）\n- 你们（第二人称复数，代表听话方全体）\n- 他们（第三人称复数，代表第三方全体男性或男女混合群体）\n- 她们（第三人称复数，代表第三方全体女性群体）\n- 它们（第三人称复数，代表第三方多个非人生物或无生命事物）\n\n三、复数后缀「们」的重要语法限制规则：\n指人名词后亦可附加「们」以表复数群体（例如「老师们」、「学生们」、「朋友们」、「工人们」）。然而必须特别注意：当指人名词前已经出现具体数量词修饰限定时，名词后绝对严禁重复附加「们」（例如标准表达为「三个学生」、「五位老师」；若说成「*三个学生们*」或「*五位老师们*」则属于严重语法杂糅病句）。",
      "examples": [
        {
          "target": "我们每天都认真学习汉语。(Wǒmen měitiān dōu rènzhēn xuéxí Hànyǔ.)",
          "reading": "[wɔ˨˩.mən meɪ̯˨˩.tʰjɛn˥ toʊ̯˥ ʐən˥˩.ʈ͡ʂən˥ ɕɥɛ˧˥.ɕi˧˥ xan˥˩.y˨˩˦] (Wǒ-men měi-tiān dōu rèn-zhēn xué-xí Hàn-yǔ.)",
          "translation": "We study Chinese earnestly every day."
        },
        {
          "target": "他们喜欢喝中国绿茶。(Tāmen xǐhuan hē Zhōngguó lǜchá.)",
          "reading": "[tʰa˥.mən ɕi˨˩.xwan xɤ˥ ʈ͡ʂʊŋ˥.kwɔ˧˥ ly˥˩.ʈ͡ʂʰa˧˥] (Tā-men xǐ-huan hē Zhōng-guó lǜ-chá.)",
          "translation": "They like to drink Chinese green tea."
        },
        {
          "target": "老师爱每一个学生。(Lǎoshī ài měi yí gè xuésheng.)",
          "reading": "[laʊ˨˩.ʂɨ˥ aɪ̯˥˩ meɪ̯˨˩ i˧˥ kɤ˥˩ ɕɥɛ˧˥.ʂəŋ] (Lǎo-shī ài měi yí gè xué-sheng.)",
          "translation": "The teacher loves every single student."
        },
        {
          "target": "我认识你们的汉语老师。(Wǒ rènshi nǐmen de Hànyǔ lǎoshī.)",
          "reading": "[wɔ˨˩ ʐən˥˩.ʂɨ ni˨˩.mən tɤ xan˥˩.y˨˩˦ laʊ˨˩.ʂɨ˥] (Wǒ rèn-shi nǐ-men de Hàn-yǔ lǎo-shī.)",
          "translation": "I know your Chinese teacher."
        }
      ],
      "mnemonics": [
        "主语在前动词中，宾语殿后主谓宾；我你他后加个「们」，复数轻声记在心！"
      ],
      "culturalNotes": [
        "在古代文言文中，第三人称泛用「他」或「之/其」。五四运动时期，著名学者刘半农先生创造了女字旁的「她」字，专门用于指代女性，极大地促进了现代汉语白话文的精确化与性别平等表达。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "按照现代汉语标准的主谓宾（SVO）语序，表达「他们学习汉语」的正确语序是：",
          "options": [
            "他们（主语） + 学习（谓语动词） + 汉语（宾语） (Subject + Verb + Object: Tāmen xuéxí Hànyǔ)",
            "他们（主语） + 汉语（宾语） + 学习（谓语动词）",
            "学习（谓语动词） + 他们（主语） + 汉语（宾语）",
            "汉语（宾语） + 学习（谓语动词） + 他们（主语）"
          ],
          "answerIndex": 0,
          "explanation": "现代汉语陈述句的基本语序为主谓宾（SVO），主语置于句首，动词位于中间，宾语紧随动词之后。"
        },
        {
          "prompt": "关于复数后缀「们」的语法使用限制，下列哪一项完全正确？",
          "options": [
            "当名词前面已有具体数量词修饰时，名词后不能再加「们」（如只能说「五个学生」，不能说「五个学生们」）。 (No -men suffix after specific numeral classifiers)",
            "任何名词后面都必须强制加上「们」表示复数。",
            "「们」字在任何语境下都必须读第一声高平调。",
            "单数代词「我」后面不能加「们」。"
          ],
          "answerIndex": 0,
          "explanation": "在汉语语法中，数量词短语（如「五个」）本身已经明确表示复数，名词后不可再叠加复数后缀「们」，否则构成语义赘余。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "在书面语中专门指代女性第三人称单数的汉字是：",
          "options": [
            "她 (女字旁指代女性第三人称) (She / Her: tā)",
            "他 (人字旁男性或通用第三人称)",
            "它 (宝盖头事物或动物第三人称)",
            "你 (单人旁第二人称)"
          ],
          "answerIndex": 0,
          "explanation": "汉字「她」带有女字旁，在现代汉语书面语中专用于指代女性第三人称单数。"
        },
        {
          "prompt": "请选出下列句子中代词与动词搭配完全正确且符合标准主谓宾语序的句子：",
          "options": [
            "我们喜欢学习中文。(Wǒmen xǐhuan xuéxí Zhōngwén.) (We like studying Chinese)",
            "我们中文喜欢学习。",
            "喜欢中文学习我们。",
            "学习喜欢我们中文。"
          ],
          "answerIndex": 0,
          "explanation": "「我们（主语）+ 喜欢学习（谓语动词短语）+ 中文（宾语）」完全符合汉语规范的 SVO 句式结构。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列人称代词中属于「第二人称复数」的标准词语：",
          "options": [
            "你们 (nǐmen) (You plural)",
            "我们 (wǒmen)",
            "他们 (tāmen)",
            "她们 (tāmen)"
          ],
          "answerIndex": 0,
          "explanation": "「你们」是第二人称单数「你」加上复数后缀「们」构成的第二人称复数代词。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示「我们」的第一人称单数核心汉字（拼音为 wǒ）：",
          "acceptedAnswers": [
            "我"
          ],
          "explanation": "汉字「我」是现代汉语中最基础的第一人称单数代词。"
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
    "title": "核心判断动词「是」字句及其句式结构 (The Copula '是' in Judgment Sentences)",
    "level": "A1",
    "objective": "掌握核心判断动词「是」的句法功能，熟练构造「A 是 B」等同与分类从属句式，并掌握指示代词「这/那」的判断表达。",
    "presentation": {
      "explanation": "动词「是」是现代汉语中最核心、使用频率最高的判断系动词，主要用于连接主语与表语名词性成分，表达逻辑判断、身份确认、分类归属或属性认定等基本关系。\n\n一、「是」字句的核心句法模型：\n基本骨架结构为：主语 + 是 + 宾语（A 是 B，表示「A 等同于 B」或「A 从属于 B 类」）。\n1. 身份等同判断：\n- 我是李华。（主语「我」与宾语「李华」属于同一个人）\n- 他是张教授。（指明其特定学术身份）\n2. 职业身份与社会属性从属判断：\n- 他是大学老师。（表示属于教师职业范畴）\n- 她是儿科医生。（表示属于医疗专业群体）\n- 我们是留学生。（表示具有留学生社会身份）\n3. 事物属性与类别归属判定：\n- 这是汉语词典。（表明该物品属于中文辞书类别）\n- 那是智能手机。（远距离指认物品属性）\n- 北京是中国的首都。（确认国家政治与文化中心地位）\n\n二、指示代词「这」与「那」的判断句型应用：\n1. 近指代词「这」：指称空间位置、时间维度或心理距离上靠近说话人的人或事物。\n- 这是我的个人电脑。（近距离指认自身物品）\n2. 远指代词「那」：指称空间位置、时间维度或心理距离上远离说话人的人或事物。\n- 那是我们大学的图书馆。（远距离指认建筑设施）\n\n三、初学者至关重要的避坑法则——形容词谓语前绝不可滥加「是」：\n在英语等印欧语言中，形容词作表语必须借助系动词支撑。然而在汉语语法体系中，形容词本身具有充当谓语的核心语法功能，**绝对不能**在形容词前添加判断词「是」：\n- 典型中介语病句：*我是高* / *苹果是红* / *今天天气是好*\n- 规范地道表达：我很高。 / 苹果很红。 / 今天天气很好。\n语法铁律：判断动词「是」后接名词性成分；形容词作谓语独立成句，前置程度副词「很」，切莫滥用「是」字！",
      "examples": [
        {
          "target": "我是大学老师，他是我的学生。(Wǒ shì dàxué lǎoshī, tā shì wǒ de xuésheng.)",
          "reading": "[wɔ˨˩ ʂɨ˥˩ ta˥˩.ɕɥɛ˧˥ laʊ˨˩.ʂɨ˥, tʰa˥ ʂɨ˥˩ wɔ˨˩ tɤ ɕɥɛ˧˥.ʂəŋ] (Wǒ shì dà-xué lǎo-shī, tā shì wǒ de xué-sheng.)",
          "translation": "I am a university teacher, and he is my student."
        },
        {
          "target": "这是今天新买的汉语词典。(Zhè shì jīntiān xīn mǎi de Hànyǔ cídiǎn.)",
          "reading": "[ʈ͡ʂɤ˥˩ ʂɨ˥˩ t͡ɕin˥.tʰjɛn˥ ɕin˥ maɪ̯˨˩˦ tɤ xan˥˩.y˨˩˦ t͡sʰɨ˧˥.tjɛn˨˩˦] (Zhè shì jīn-tiān xīn mǎi de Hàn-yǔ cí-diǎn.)",
          "translation": "This is the Chinese dictionary newly bought today."
        },
        {
          "target": "那是我们学校的图书馆。(Nà shì wǒmen xuéxiào de túshūguǎn.)",
          "reading": "[na˥˩ ʂɨ˥˩ wɔ˨˩.mən ɕɥɛ˧˥.ɕjaʊ̯˥˩ tɤ tʰu˧˥.ʂu˥.kwan˨˩˦] (Nà shì wǒ-men xué-xiào de tú-shū-guǎn.)",
          "translation": "That is our school's library."
        },
        {
          "target": "北京是历史悠久的文化名城。(Běijīng shì lìshǐ yōujiǔ de wénhuà míngchéng.)",
          "reading": "[peɪ̯˨˩.t͡ɕiŋ˥ ʂɨ˥˩ li˥˩.ʂɨ˨˩˦ joʊ̯˥.t͡ɕjoʊ̯˨˩˦ tɤ wən˧˥.xwa˥˩ miŋ˧˥.ʈ͡ʂʰɤŋ˧˥] (Běi-jīng shì lì-shǐ yōu-jiǔ de wén-huà míng-chéng.)",
          "translation": "Beijing is a renowned cultural city with a long history."
        }
      ],
      "mnemonics": [
        "A 是 B 是判断句，名词紧跟在后头；形容词前莫加「是」，「很高很好」才地道！"
      ],
      "culturalNotes": [
        "在古代文言文中，判断句多采用「...者，...也」的语法结构（如「陈涉者，阳城人也」），而「是」字在先秦时期主要充当指示代词「此/这」。汉代以后，「是」字才逐渐演变确立为现代汉语的标准判断系动词。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在句子「王华是北京大学的学生」中，动词「是」所表达的核心语法功能是：",
          "options": [
            "判断主语的身份与从属归属分类关系 (Classifying / identifying subject as a student)",
            "表示主语正在进行的具体动作行为",
            "修饰形容词表示程度极高",
            "连接两个动词表示先后顺序"
          ],
          "answerIndex": 0,
          "explanation": "动词「是」在句中充当判断动词，明确断定主语王华具有「北京大学学生」的社会身份与从属归属。"
        },
        {
          "prompt": "下列句子中，哪一句存在把「是」字错误用于形容词谓语前的语法毛病？",
          "options": [
            "我是很高。(Wǒ shì hěn gāo.) —— 误在形容词前添加「是」 (Incorrect copula before adjective)",
            "我是汉语老师。(Wǒ shì Hànyǔ lǎoshī.)",
            "这是我的书包。(Zhè shì wǒ de shūbāo.)",
            "那是中国地图。(Nà shì Zhōngguó dìtú.)"
          ],
          "answerIndex": 0,
          "explanation": "汉语中形容词自身可直接作谓语（如「我很高」），在形容词谓语前滥加判断动词「是」属于典型受外语影响的病句。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "当需要向朋友介绍近处指认的事物「这是我的手机」时，应选用的指示代词是：",
          "options": [
            "这 (zhè - 近指代词) (This / Close proximity)",
            "那 (nà - 远指代词)",
            "哪 (nǎ - 疑问代词)",
            "谁 (shéi - 疑问代词)"
          ],
          "answerIndex": 0,
          "explanation": "指示代词「这」用于指代空间或时间上距离说话人较近的人或事物。"
        },
        {
          "prompt": "请选出下列句子中「是字句」结构与用词完全正确的一项：",
          "options": [
            "张明是我们班的班长。(Zhāng Míng shì wǒmen bān de bānzhǎng.) (Zhang Ming is our class monitor)",
            "张明是班长我们班的。",
            "我们班的张明班长是。",
            "是张明班长我们班的。"
          ],
          "answerIndex": 0,
          "explanation": "「主语（张明）+ 是 + 宾语（我们班的班长）」语序严整规范，完全符合是字句标准模型。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中属于完全正确的现代汉语「是字判断句」的一项：",
          "options": [
            "中国是一个历史悠久的伟大国家。(Zhōngguó shì yí gè lìshǐ yōujiǔ de wěidà guójiā.)",
            "中国是很伟大国家。(缺少必要量词与结构)",
            "中国是发展迅速很。(语序错乱)",
            "中国美丽是很国家。(词序颠倒)"
          ],
          "answerIndex": 0,
          "explanation": "「中国（主语）+ 是 + 一个历史悠久的伟大国家（名词性宾语短语）」结构完整规范。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入汉语中最核心的单字判断系动词汉字（拼音为 shì）：",
          "acceptedAnswers": [
            "是"
          ],
          "explanation": "汉字「是」是现代汉语中最重要、最基础的判断系动词。"
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
    "title": "否定副词「不」在是字句与动词句中的否定规则 (Negation with '不')",
    "level": "A1",
    "objective": "掌握否定副词「不」在是字句（A 不是 B）与一般动词谓语句中的位置规则、否定范围以及「不」字的变调规律。",
    "presentation": {
      "explanation": "否定副词「不」是现代汉语中最核心、最通用的主观否定词与现在/将来时态否定标记，主要用于否定动作意愿、日常习惯、状态属性以及逻辑判断。\n\n一、「是字句」的否定模式——「不是」：\n基本句法结构为：主语 + 不是 + 宾语（A 不是 B，表示「A 不等同于 B」或「A 不属于 B 类别」）。\n1. 否定身份归属：\n- 我不是老师，我是学生。（否定教师身份，确认学生身份）\n- 他不是医生，他是软件工程师。（否定原有职业预设）\n2. 否定事物判定：\n- 这不是我的手机。（否定物品归属权）\n- 那不是汉语词典。（否定物品种类属性）\n\n二、一般动作动词谓语句的否定规则：\n在一般动词谓语句中，否定副词「不」必须紧密置于谓语动词之前，充当状语成分以修饰限定动词：\n- 主语 + 不 + 动词谓语 + 宾语\n- 我不喝浓咖啡，我喜欢喝绿茶。（表达日常饮食习惯的主观偏好）\n- 他今天不来学校上课。（否定即将发生的动作行为）\n- 我们不买昂贵的名牌衣服。（表达主观意愿层面的否定）\n\n三、否定副词「不」的语流变调规律精解：\n1. 在第四声音节（去声 51 调）前，「不」必须变调为第二声阳平「bú」：\n- 不是（拼写作 bú shì）\n- 不去（拼写作 bú qù）\n- 不要（拼写作 bú yào）\n- 不看（拼写作 bú kàn）\n- 不对（拼写作 bú duì）\n2. 在第一声、第二声、第三声音节前，「不」始终保持本调第四声去声「bù」：\n- 不吃（第一声前，读 bù chī）\n- 不来（第二声前，读 bù lái）\n- 不买（第三声前，读 bù mǎi）\n- 不好（第三声前，读 bù hǎo）",
      "examples": [
        {
          "target": "我不是大夫，我是这所学校的英语老师。(Wǒ bú shì dàifu, wǒ shì zhè suǒ xuéxiào de Yīngyǔ lǎoshī.)",
          "reading": "[wɔ˨˩ pu˧˥ ʂɨ˥˩ taɪ̯˥˩.fu, wɔ˨˩ ʂɨ˥˩ ʈ͡ʂɤ˥˩ swɔ˨˩˦ ɕɥɛ˧˥.ɕjaʊ̯˥˩ tɤ iŋ˥.y˨˩˦ laʊ˨˩.ʂɨ˥] (Wǒ bú shì dài-fu, wǒ shì zhè suǒ xué-xiào de Yīng-yǔ lǎo-shī.)",
          "translation": "I am not a doctor; I am this school's English teacher."
        },
        {
          "target": "这不是他的书包，那是王华的书包。(Zhè bú shì tā de shūbāo, nà shì Wáng Huá de shūbāo.)",
          "reading": "[ʈ͡ʂɤ˥˩ pu˧˥ ʂɨ˥˩ tʰa˥ tɤ ʂu˥.paʊ̯˥, na˥˩ ʂɨ˥˩ wɑŋ˧˥ xwa˧˥ tɤ ʂu˥.paʊ̯˥] (Zhè bú shì tā de shū-bāo, nà shì Wáng Huá de shū-bāo.)",
          "translation": "This is not his backpack; that is Wang Hua's backpack."
        },
        {
          "target": "我们平时不喝浓咖啡。(Wǒmen píngshí bù hē nóng kāfēi.)",
          "reading": "[wɔ˨˩.mən pʰiŋ˧˥.ʂɨ˧˥ pu˥˩ xɤ˥ nʊŋ˧˥ kʰa˥.feɪ̯˥] (Wǒ-men píng-shí bù hē nóng kā-fēi.)",
          "translation": "We usually do not drink strong coffee."
        },
        {
          "target": "他今天身体不舒服，不去公司上班。(Tā jīntiān shēntǐ bù shūfu, bú qù gōngsī shàngbān.)",
          "reading": "[tʰa˥ t͡ɕin˥.tʰjɛn˥ ʂən˥.tʰi˨˩˦ pu˥˩ ʂu˥.fu, pu˧˥ t͡ɕʰy˥˩ kʊŋ˥.sɨ˥ ʂɑŋ˥˩.pan˥] (Tā jīn-tiān shēn-tǐ bù shū-fu, bú qù gōng-sī shàng-bān.)",
          "translation": "He is not feeling well today and is not going to the company to work."
        }
      ],
      "mnemonics": [
        "动词前头加个「不」，否定句型立呈现；遇到四声读「bú shì」，遇到非四读「bù hē」！"
      ],
      "culturalNotes": [
        "在现代汉语中，「不」主要负责主观意愿、经常性行为以及当前判断的否定；而对于过去已经发生的动作完成状态（如「没去」）或客观存在与领有（如「没有书」），则必须使用「没/没有」，二者分工明确。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在句子「他______是我的汉语老师」中，正确的否定表达与读音是：",
          "options": [
            "不是 (bú shì) ——「不」在第四声「是」前变读为第二声 (bú shì with tone sandhi)",
            "不很 (bù hěn)",
            "没有是 (méi yǒu shì)",
            "没是不 (méi shì bù)"
          ],
          "answerIndex": 0,
          "explanation": "否定判断句使用「不是」，且因「是」为第四声，「不」字必须变调读作第二声「bú shì」。"
        },
        {
          "prompt": "要表达「我不喝茶」时，否定词「不」在句子中的正确位置是：",
          "options": [
            "置于主语「我」之后、动词「喝」之前充当状语 (Between subject and verb)",
            "置于句子最末尾：我喝茶不。",
            "置于宾语「茶」之前、动词之后：我喝不茶。",
            "置于主语最前面：不我喝茶。"
          ],
          "answerIndex": 0,
          "explanation": "在汉语语法中，否定副词「不」作为状语，必须紧跟在被否定的动词之前。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "在短语「不去」和「不吃」中，否定词「不」的实际发音声调分别是：",
          "options": [
            "「不去」读第二声 bú，「不吃」读第四声 bù (bú qù vs bù chī)",
            "两处均读第二声 bú",
            "两处均读第四声 bù",
            "「不去」读第四声，「不吃」读第二声"
          ],
          "answerIndex": 0,
          "explanation": "「去」是第四声，故「不」变读第二声 bú qù；「吃」是第一声，故「不」保持原调第四声 bù chī。"
        },
        {
          "prompt": "请选出下列句子中否定句表达完全规范地道的一项：",
          "options": [
            "这本书不是我的，是李华的。(Zhè běn shū bú shì wǒ de, shì Lǐ Huá de.) (This book is not mine, it is Li Hua's)",
            "这本书是我的不，李华的是。",
            "这本书没有是我的，是李华。",
            "不这本书是我的，李华是书。"
          ],
          "answerIndex": 0,
          "explanation": "「主语 + 不是 + 宾语」结构规范严谨，后半句对比清晰自然。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中否定词使用与语序搭配完全正确的一项：",
          "options": [
            "他们今天都不去图书馆看书。(Tāmen jīntiān dōu bú qù túshūguǎn kànshū.)",
            "他们今天去不去不图书馆看书。",
            "他们今天都不看书去图书馆是。",
            "他们不今天都去图书馆看书。"
          ],
          "answerIndex": 0,
          "explanation": "范围副词「都」位于时间状语后，否定副词「不」紧贴谓语动词「去」，完全符合汉语语法标准规则。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入汉语中最常用的单字主观否定副词汉字（拼音为 bù）：",
          "acceptedAnswers": [
            "不"
          ],
          "explanation": "汉字「不」是现代汉语中最基础的否定副词。"
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
    "title": "是非疑问句助词「吗」与判断句问答交际闭环 (Yes-No Questions with '吗')",
    "level": "A1",
    "objective": "掌握句末疑问助词「吗」构造是非疑问句的规则，理解无需倒装语序的结构特点，熟练进行肯定与否定的问答闭环交流。",
    "presentation": {
      "explanation": "现代汉语是非疑问句的句法构造极其明晰高效：只需在任何完整陈述句末尾直接附加上轻声疑问助词「吗」，整句句尾语调适度微扬，便能迅速转换为疑问句，**原句中所有词语顺序完全保持不变，绝无需任何倒装变动**。\n\n一、陈述句转换为是非疑问句的核心规则：\n1. 是字判断句的疑问化转换：\n- 陈述句：你是大学学生。（确认陈述）\n- 疑问句：你是大学学生吗？（句末加「吗」转换为是非提问）\n- 陈述句：这是你的个人电脑。（确认物品）\n- 疑问句：这是你的个人电脑吗？（求证物品归属）\n\n2. 一般动词谓语句的疑问化转换：\n- 陈述句：他喜欢喝中国茶。（陈述习惯）\n- 疑问句：他喜欢喝中国茶吗？（询问喜好）\n- 陈述句：你们明天一起去北京。（陈述计划）\n- 疑问句：你们明天一起去北京吗？（核实出行计划）\n\n二、是非疑问句的标准问答交际闭环模式：\n1. 肯定应答模式：\n- 简洁肯定：是。 / 是的。 / 对。 / 对的。\n- 完整肯定：是的，我是大学学生。 / 是的，这是我的电脑。\n- 动词复述肯定（最地道自然的日常口语）：去！ / 喝！ / 喜欢！\n\n2. 否定应答模式：\n- 简洁否定：不是。 / 不。 / 不对。\n- 完整否定：不，我不是学生，我是老师。 / 不是，那不是我的电脑。\n- 动词否定复述：不去！ / 不喝！ / 不喜欢！\n\n三、英汉疑问句构造机制对比：\n英语构造一般疑问句时必须使用助动词前置并颠倒主谓语序。而汉语严格保留主谓宾基本语序，仅通过句末附着助词「吗」实现语法功能转换，极具结构经济性与规则对称美。",
      "examples": [
        {
          "target": "——请问，您是张教授吗？——是的，我就是张教授。(—Qǐngwèn, nín shì Zhāng jiàoshòu ma? —Shì de, wǒ jiù shì Zhāng jiàoshòu.)",
          "reading": "[—t͡ɕʰiŋ˨˩.wən˥˩, nin˧˥ ʂɨ˥˩ ʈ͡ʂɑŋ˥ t͡ɕjaʊ̯˥˩.ʂoʊ̯˥˩ ma? —ʂɨ˥˩ tɤ, wɔ˨˩ t͡ɕjoʊ̯˥˩ ʂɨ˥˩ ʈ͡ʂɑŋ˥ t͡ɕjaʊ̯˥˩.ʂoʊ̯˥˩] (—Qǐng-wèn, nín shì Zhāng jiào-shòu ma? —Shì de, wǒ jiù shì Zhāng jiào-shòu.)",
          "translation": "—Excuse me, are you Professor Zhang? —Yes, I am Professor Zhang."
        },
        {
          "target": "——那是你的新手机吗？——不是，那是李华的手机。(—Nà shì nǐ de xīn shǒujī ma? —Bú shì, nà shì Lǐ Huá de shǒujī.)",
          "reading": "[—na˥˩ ʂɨ˥˩ ni˨˩˦ tɤ ɕin˥ ʂoʊ̯˨˩.t͡ɕi˥ ma? —pu˧˥ ʂɨ˥˩, na˥˩ ʂɨ˥˩ li˨˩˦ xwa˧˥ tɤ ʂoʊ̯˨˩.t͡ɕi˥] (—Nà shì nǐ de xīn shǒu-jī ma? —Bú shì, nà shì Lǐ Huá de shǒu-jī.)",
          "translation": "—Is that your new mobile phone? —No, that is Li Hua's mobile phone."
        },
        {
          "target": "——你们明天上午去图书馆借书吗？——去，我们明天都去。(—Nǐmen míngtiān shàngwǔ qù túshūguǎn jiè shū ma? —Qù, wǒmen míngtiān dōu qù.)",
          "reading": "[—ni˨˩.mən miŋ˧˥.tʰjɛn˥ ʂɑŋ˥˩.u˨˩˦ t͡ɕʰy˥˩ tʰu˧˥.ʂu˥.kwan˨˩˦ t͡ɕjɛ˥˩ ʂu˥ ma? —t͡ɕʰy˥˩, wɔ˨˩.mən miŋ˧˥.tʰjɛn˥ toʊ̯˥ t͡ɕʰy˥˩] (—Nǐ-men míng-tiān shàng-wǔ qù tú-shū-guǎn jiè shū ma? —Qù, wǒ-men míng-tiān dōu qù.)",
          "translation": "—Are you going to the library to borrow books tomorrow morning? —Yes, we are all going tomorrow."
        },
        {
          "target": "——李老师喜欢喝乌龙茶吗？——他非常喜欢喝。(—Lǐ lǎoshī xǐhuan hē wūlóngchá ma? —Tā fēicháng xǐhuan hē.)",
          "reading": "[—li˨˩˦ laʊ˨˩.ʂɨ˥ ɕi˨˩.xwan xɤ˥ u˥.lʊŋ˧˥.ʈ͡ʂʰa˧˥ ma? —tʰa˥ feɪ̯˥.ʈ͡ʂʰɑŋ˧˥ ɕi˨˩.xwan xɤ˥] (—Lǐ lǎo-shī xǐ-huan hē wū-lóng-chá ma? —Tā fēi-cháng xǐ-huan hē.)",
          "translation": "—Does Teacher Li like drinking oolong tea? —He likes drinking it very much."
        }
      ],
      "mnemonics": [
        "陈述句尾加个「吗」，语序不变成问话；肯定回答答声「是」，否定回答说「不是」！"
      ],
      "culturalNotes": [
        "中文在口语应答中，直接复述问句中的核心谓语动词（如问「吃吗？」，答「吃！」或「不吃！」）比单纯说「是的」更显得自然、干脆且符合中国本土日常言语习惯。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "将陈述句「他是中国留学生」转换为是非疑问句时，最正确简明的方法是：",
          "options": [
            "在句末直接加上轻声疑问助词「吗」：他是中国留学生吗？ (Add question particle ma to the end without changing word order)",
            "将动词「是」调换到句首：是他中国留学生？",
            "在句首加上疑问词「什么」：什么是中国留学生？",
            "将主语与宾语完全颠倒位置：中国留学生是他吗？"
          ],
          "answerIndex": 0,
          "explanation": "汉语是非疑问句只需在陈述句末尾加上疑问助词「吗」，句内所有词语顺序完全保持不变。"
        },
        {
          "prompt": "面对提问「这是你的汉语字典吗？」，如果不是自己的，最标准的礼貌应答是：",
          "options": [
            "不是，这不是我的字典，这是王老师的。(No, this is not my dictionary, it is Teacher Wang's)",
            "对不起，谢谢你。",
            "我很好，你呢？",
            "不客气，请进吧。"
          ],
          "answerIndex": 0,
          "explanation": "否定回答先用「不是」表明态度，再陈述客观事实「这不是我的字典」，逻辑完整连贯。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "下列哪一个句子的句式结构属于标准的是非疑问句？",
          "options": [
            "你们明天去不去学校？ / 你们明天去学校吗？ (Are you going to school tomorrow?)",
            "谁明天去学校？ (特指疑问句)",
            "你什么时候去学校？ (特指疑问句)",
            "你去哪个学校？ (特指疑问句)"
          ],
          "answerIndex": 0,
          "explanation": "句末带有疑问助词「吗」的句子属于标准是非疑问句，回答时只需作出肯定或否定选择。"
        },
        {
          "prompt": "请选出下列问答对话中逻辑完全闭合且语用恰当的一项：",
          "options": [
            "甲：请问，您是新来的王经理吗？ 乙：是的，我就是王经理，很高兴认识你！",
            "甲：那是你的手机吗？ 乙：不用谢，我是学生。",
            "甲：你喝茶吗？ 乙：对不起，没关系。",
            "甲：你是学生吗？ 乙：再见，明天见！"
          ],
          "answerIndex": 0,
          "explanation": "提问身份确认，回答用「是的」明确肯定并表达礼貌致意，问答完全契合。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中「吗」字疑问句使用完全正确无瑕疵的一项：",
          "options": [
            "王教授今天下午在办公室开会吗？(Is Professor Wang holding a meeting in the office this afternoon?)",
            "王教授今天下午是谁在办公室开会吗？(疑问词与「吗」不可混用)",
            "王教授今天下午什么开会吗？(疑问代词与「吗」杂糅)",
            "王教授是在吗办公室开会？(「吗」位置错乱)"
          ],
          "answerIndex": 0,
          "explanation": "是非疑问句助词「吗」必须位于完整陈述句的最末尾，且句中不能再出现其他疑问代词（如谁、什么）。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入用于构成是非疑问句的句末轻声疑问助词汉字（拼音为 ma）：",
          "acceptedAnswers": [
            "吗"
          ],
          "explanation": "汉字「吗」是汉语中最常用的是非疑问助词，置于句末表达提问。"
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
    "title": "国籍、身份与职业表达：人称 + 是 + 某国人/某种职业 (Expressing Nationality, Identity & Profession)",
    "level": "A1",
    "objective": "熟练掌握「国家名称 + 人」的国籍表达规则，掌握高频职业与社会身份词汇，并能运用「是字句」进行流畅的自我介绍与跨文化个人背景交流。",
    "presentation": {
      "explanation": "在国际交流与跨文化日常交往中，准确表达国籍、籍贯与职业身份是最基础且最高频的核心交际场景。\n\n一、国籍词汇的高效构词法则：\n汉语表达国籍具有极强的逻辑规律性，一律采用「国家名称 + 人」的构词模式，无需任何复杂的派生词形变化：\n1. 中国 -> 中国人（中国公民/华裔人士）\n2. 美国 -> 美国人（美利坚合众国公民）\n3. 英国 -> 英国人（大不列颠及北爱尔兰联合王国公民）\n4. 法国 -> 法国人（法兰西共和国公民）\n5. 德国 -> 德国人（德意志联邦共和国公民）\n6. 日本 -> 日本人（日本国公民）\n7. 加拿大 -> 加拿大人（加拿大公民）\n8. 澳大利亚 -> 澳大利亚人（澳大利亚联邦公民）\n9. 俄罗斯 -> 俄罗斯人（俄罗斯联邦公民）\n\n二、高频职业与社会身份核心词汇：\n1. 教育与学术：老师、学生、教授、留学生、学者\n2. 医疗与卫生：医生、大夫、护士、药剂师\n3. 工程与技术：工程师、建筑师、程序员、科学家\n4. 法律与商业：律师、法官、经理、商人、翻译家\n\n三、国籍与职业询问及应答核心句型：\n1. 询问国籍与身份：\n- 问：请问，您是哪国人？（询问对方所属国家）\n- 答：我是法国人。你也是法国人吗？（明确回答并回问）\n- 答：不，我不是法国人，我是加拿大人。（否定后补充事实）\n\n2. 询问职业与自我介绍闭环：\n- 问：您做什么工作？ / 您的职业是什么？\n- 答：我是软件工程师，在一家科技公司工作。\n- 综合自我介绍示范：大家好！我是大卫，我是美国人。我是北京语言大学的留学生，我在中国学习汉语言文学。",
      "examples": [
        {
          "target": "——请问，您是哪国人？——我是加拿大人。(—Qǐngwèn, nín shì nǎ guó rén? —Wǒ shì Jiānádàrén.)",
          "reading": "[—t͡ɕʰiŋ˨˩.wən˥˩, nin˧˥ ʂɨ˥˩ na˧˥ kwɔ˧˥ ʐən˧˥? —wɔ˨˩ ʂɨ˥˩ t͡ɕja˥.na˧˥.ta˥˩.ʐən˧˥] (—Qǐng-wèn, nín shì nǎ guó rén? —Wǒ shì Jiā-ná-dà-rén.)",
          "translation": "—Excuse me, which country are you from? —I am Canadian."
        },
        {
          "target": "玛丽是法国留学生，她的爸爸是著名的建筑工程师。(Mǎlì shì Fǎguó liúxuéshēng, tā de bàba shì zhùmíng de jiànzhù gōngchéngshī.)",
          "reading": "[ma˨˩.li˥˩ ʂɨ˥˩ fa˨˩.kwɔ˧˥ ljoʊ̯˧˥.ɕɥɛ˧˥.ʂəŋ, tʰa˥ tɤ ˈpa˥˩.pa ʂɨ˥˩ ʈ͡ʂu˥˩.miŋ˧˥ tɤ t͡ɕjɛn˥˩.ʈ͡ʂu˥˩ kʊŋ˥.ʈ͡ʂʰɤŋ˧˥.ʂɨ˥] (Mǎ-lì shì Fǎ-guó liú-xué-shēng, tā de bà-ba shì zhù-míng de jiàn-zhù gōng-chéng-shī.)",
          "translation": "Mary is a French international student, and her father is a renowned architectural engineer."
        },
        {
          "target": "王先生是经验丰富的律师，李女士是儿科医生。(Wáng xiānsheng shì jīngyàn fēngfù de lǜshī, Lǐ nǚshì shì érkē yīshēng.)",
          "reading": "[wɑŋ˧˥ ɕjɛn˥.ʂəŋ ʂɨ˥˩ t͡ɕiŋ˥.jɛn˥˩ fɤŋ˥.fu˥˩ tɤ ly˥˩.ʂɨ˥, li˨˩˦ ny˨˩.ʂɨ˥˩ ʂɨ˥˩ aɻ˧˥.kʰɤ˥ i˥.ʂəŋ] (Wáng xiān-sheng shì jīng-yàn fēng-fù de lǜ-shī, Lǐ nǚ-shì shì ér-kē yī-shēng.)",
          "translation": "Mr. Wang is an experienced lawyer, and Ms. Li is a pediatrician."
        },
        {
          "target": "我们都是英国人，我们都在北京学习中国文化。(Wǒmen dōu shì Yīngguórén, wǒmen dōu zài Běijīng xuéxí Zhōngguó wénhuà.)",
          "reading": "[wɔ˨˩.mən toʊ̯˥ ʂɨ˥˩ iŋ˥.kwɔ˧˥.ʐən˧˥, wɔ˨˩.mən toʊ̯˥ t͡saɪ̯˥˩ peɪ̯˨˩.t͡ɕiŋ˥ ɕɥɛ˧˥.ɕi˧˥ ʈ͡ʂʊŋ˥.kwɔ˧˥ wən˧˥.xwa˥˩] (Wǒ-men dōu shì Yīng-guó-rén, wǒ-men dōu zài Běi-jīng xué-xí Zhōng-guó wén-huà.)",
          "translation": "We are all British, and we all study Chinese culture in Beijing."
        }
      ],
      "mnemonics": [
        "国名后头加个「人」，国籍表达最分明；我是学生你是医，是字句里话职业！"
      ],
      "culturalNotes": [
        "在中国传统社交礼仪中，向初次相识者询问身份通常遵循「由大到小」的顺序：先问国籍或祖籍城市（如「您是哪里人？」），再了解工作单位与专业职务，体现了中国文化注重整体背景与集体归属的认知传统。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "要表达「大卫是美国人」这一国籍判断，最准确规范的中文表达是：",
          "options": [
            "大卫是美国人。(Dàwèi shì Měiguórén.) (David is American: Country name + rén)",
            "大卫是美国。(David is America - 误把国名当国籍)",
            "大卫美国人是。(语序错乱)",
            "是美国人大卫。(语序颠倒)"
          ],
          "answerIndex": 0,
          "explanation": "表达国籍必须在国家名称「美国」后加上「人」构成「美国人」，并使用「主语 + 是 + 宾语」语序。"
        },
        {
          "prompt": "在向外国友人礼貌询问国籍时，最标准得体的疑问句是：",
          "options": [
            "请问，您是哪国人？(Qǐngwèn, nín shì nǎ guó rén?) (Excuse me, which country are you from?)",
            "请问，您是什么国？",
            "请问，谁是哪国人？",
            "请问，哪国人是您？"
          ],
          "answerIndex": 0,
          "explanation": "「请问，您是哪国人？」是中文中询问对方国籍的最经典、最地道的标准社交句式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "在医院里为病人诊断治疗的职业人士在中文中称为：",
          "options": [
            "医生 / 大夫 (yīshēng / dàifu) (Doctor / Physician)",
            "律师 (lǜshī - 法律工作者)",
            "工程师 (gōngchéngshī - 工程技术人员)",
            "经理 (jīnglǐ - 管理人员)"
          ],
          "answerIndex": 0,
          "explanation": "「医生」或口语中的「大夫」是专指在医院救治病患的医疗专业职业。"
        },
        {
          "prompt": "请选出下列自我介绍句子中表达完全正确、用词地道的一项：",
          "options": [
            "我是英国留学生，我学习汉语。(Wǒ shì Yīngguó liúxuéshēng, wǒ xuéxí Hànyǔ.)",
            "我是英国学习留生，汉语学我。",
            "英国留学生我是，学习我汉语。",
            "我是留学生英国，汉语我学习。"
          ],
          "answerIndex": 0,
          "explanation": "「我是英国留学生（国籍修饰身份），我学习汉语（主谓宾清晰）」句式地道流畅。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "选出下列对话中关于国籍与职业的问答完全规范的一组：",
          "options": [
            "甲：请问，王老师是哪国人？ 乙：王老师是中国人，他是我们大学的教授。",
            "甲：请问，王老师是哪国人？ 乙：王老师是美国，他是很教授。",
            "甲：王老师做什么工作？ 乙：王老师是法国人，他不是中国人工作。",
            "甲：王老师是教授吗？ 乙：不客气，我是王老师。"
          ],
          "answerIndex": 0,
          "explanation": "甲问国籍，乙准确回答「中国人」并补充说明其「大学教授」的职业身份，逻辑自然严谨。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示「人类/某国人」的核心单字汉字（拼音为 rén）：",
          "acceptedAnswers": [
            "人"
          ],
          "explanation": "汉字「人」置于国家名称之后（如「中国人」、「美国人」）用于表示该国国籍人士。"
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
    "title": "汉语基数词系统（0–99）与「二」与「两」的用法区别 (Cardinal Numbers 0-99 & '二' vs '两')",
    "level": "A1",
    "objective": "系统掌握汉语0至99的基数词十进制构造规则，熟练进行数字拼读与听辨，并精准掌握「二」与「两」在基数与量词搭配中的语法分工。",
    "presentation": {
      "explanation": "现代标准汉语采用极其规则严密的十进制计数体系，掌握 0 至 10 的基础单音节基数词，即可顺畅组合出 99 以内的全部自然数。\n\n一、0 至 10 核心基数词体系：\n- 0 零 (líng) —— 音调为第二声阳平\n- 1 一 (yī) —— 基础基数词读第一声阴平\n- 2 二 (èr) —— 第四声去声\n- 3 三 (sān) —— 第一声阴平\n- 4 四 (sì) —— 第四声去声（发舌尖前音，与「十」严格辨析）\n- 5 五 (wǔ) —— 第三声上声\n- 6 六 (liù) —— 第四声去声\n- 7 七 (qī) —— 第一声阴平\n- 8 八 (bā) —— 第一声阴平\n- 9 九 (jiǔ) —— 第三声上声\n- 10 十 (shí) —— 第二声阳平（发舌尖后翘舌音）\n\n二、11 至 99 复合数词构造规则：\n1. 十几（11 至 19）：结构为「十 + 个位数」（十一、十二、十三、十四、十五、十六、十七、十八、十九）。特别注意：当「十」位于两位数首位时，绝不添加「一」（不可说成 *一十一*）。\n2. 几十（20 至 90 整十数）：结构为「个位数 + 十」（二十、三十、四十、五十、六十、七十、八十、九十）。\n3. 几十几（21 至 99 复合数）：结构为「十位个位数 + 十 + 个位数」（例如：二十五、三十八、五十六、七十二、八十八、九十九）。\n\n三、「二」与「两」的严格语法分工与避坑法则：\n1. 使用「二 (èr)」的场合：\n- 纯数学念数、基数数数与计算（一、二、三、四；二加二等于四）\n- 序数词与编号（第二名、二楼、二号、星期二、二月份）\n- 小数、分数与百分数（零点二、三分之二、百分之二十）\n- 电话号码与房间号单独报数（如 202 房间读作 èr líng èr）。\n2. 使用「两 (liǎng)」的场合：\n- 紧接在量词前表示实际数量（两个人、两本书、两张纸、两杯茶、两间教室）\n- 钟点时间表达整点与半点（两点钟、两点半）。",
      "examples": [
        {
          "target": "我们班一共有二十五名学生，其中有八名留学生。(Wǒmen bān yígòng yǒu èrshíwǔ míng xuésheng, qízhōng yǒu bā míng liúxuéshēng.)",
          "reading": "[wɔ˨˩.mən pan˥ i˧˥.kʊŋ˥˩ joʊ̯˨˩˦ aɻ˥˩.ʂɨ˧˥.u˨˩˦ miŋ˧˥ ɕɥɛ˧˥.ʂəŋ, t͡ɕʰi˧˥.ʈ͡ʂʊŋ˥ joʊ̯˨˩˦ pa˥ miŋ˧˥ ljoʊ̯˧˥.ɕɥɛ˧˥.ʂəŋ] (Wǒ-men bān yí-gòng yǒu èr-shí-wǔ míng xué-sheng, qí-zhōng yǒu bā míng liú-xué-shēng.)",
          "translation": "There are twenty-five students in our class in total, among whom eight are international students."
        },
        {
          "target": "桌子上有两本书和三支铅笔。(Zhuōzi shang yǒu liǎng běn shū hé sān zhī qiānbǐ.)",
          "reading": "[ʈ͡ʂwɔ˥.t͡sɨ ʂɑŋ joʊ̯˨˩˦ ljaŋ˨˩ pən˨˩ ʂu˥ xɤ˧˥ san˥ ʈ͡ʂɨ˥ t͡ɕʰjɛn˥.pi˨˩˦] (Zhuō-zi shang yǒu liǎng běn shū hé sān zhī qiān-bǐ.)",
          "translation": "There are two books and three pencils on the table."
        },
        {
          "target": "请给我来两杯热绿茶，谢谢！(Qǐng gěi wǒ lái liǎng bēi rè lǜchá, xièxie!)",
          "reading": "[t͡ɕʰiŋ˨˩ keɪ̯˨˩ wɔ˨˩ laɪ̯˧˥ ljaŋ˨˩ peɪ̯˥ ʐɤ˥˩ ly˥˩.ʈ͡ʂʰa˧˥, ɕjɛ˥˩.ɕjɛ!] (Qǐng gěi wǒ lái liǎng bēi rè lǜ-chá, xiè-xie!)",
          "translation": "Please give me two cups of hot green tea, thank you!"
        },
        {
          "target": "李老师住在第二教学楼二零八房间。(Lǐ lǎoshī zhù zài dì-èr jiàoxuélóu èr líng bā fángjiān.)",
          "reading": "[li˨˩˦ laʊ˨˩.ʂɨ˥ ʈ͡ʂu˥˩ t͡saɪ̯˥˩ ti˥˩.aɻ˥˩ t͡ɕjaʊ̯˥˩.ɕɥɛ˧˥.loʊ̯˧˥ aɻ˥˩ liŋ˧˥ pa˥ faŋ˧˥.t͡ɕjɛn˥] (Lǐ lǎo-shī zhù zài dì-èr jiào-xué-lóu èr líng bā fáng-jiān.)",
          "translation": "Teacher Li lives in Room 208 of the Second Teaching Building."
        }
      ],
      "mnemonics": [
        "数数序数都用「二」（第二、二楼），量词前头必用「两」（两人、两本书）；四是十四是十四，平翘分明要记清！"
      ],
      "culturalNotes": [
        "中国民间绕口令《四和十》是检验普通话平翘舌音发音的经典名篇：「四是四，十是十，十四是十四，四十是四十。莫把四十说十四，莫把十四说四十。」生动展现了数字 4（sì）与 10（shí）的精妙对立。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在表达「我有两本汉语词典」时，数词 2 与量词「本」搭配应选用：",
          "options": [
            "两 (liǎng) —— 量词前表示具体数量必须用「两」 (Use liǎng before measure words)",
            "二 (èr) —— 只能用于数学序数",
            "俩个 (liǎ gè)",
            "双 (shuāng)"
          ],
          "answerIndex": 0,
          "explanation": "在汉语语法中，紧跟在量词（如「本」、「个」、「只」）前面表示数量「2」时，必须使用「两 (liǎng)」，不可说「*二本书*」。"
        },
        {
          "prompt": "数字「88」在现代标准汉语中的正确汉字书写与拼音为：",
          "options": [
            "八十八 (bāshíbā) (Eighty-eight)",
            "八八 (bābā)",
            "八个八 (bā gè bā)",
            "八十和八 (bāshí hé bā)"
          ],
          "answerIndex": 0,
          "explanation": "汉语两位数复合数字构造为「十位数 + 十 + 个位数」，88 规范表达为「八十八 (bāshíbā)」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "下列哪一项短语在数词「二」与「两」的使用上完全正确无误？",
          "options": [
            "第二位老师，带了两个学生。(Dì-èr wèi lǎoshī, dài le liǎng gè xuésheng.) (Second teacher, brought two students)",
            "第两位老师，带了二个学生。",
            "第二位老师，带了二个学生。",
            "第两位老师，带了两名学生。"
          ],
          "answerIndex": 0,
          "explanation": "序数词「第」后必须用「二（第二位）」；表示数量在量词前必须用「两（两个学生）」。"
        },
        {
          "prompt": "请选出基数词「15」的标准普通话读音与词形：",
          "options": [
            "十五 (shíwǔ) —— 首位不加「一」 (Fifteen)",
            "一十五 (yīshíwǔ)",
            "十和五 (shí hé wǔ)",
            "五一十 (wǔ yī shí)"
          ],
          "answerIndex": 0,
          "explanation": "汉语 11 至 19 的数字首位直接读「十」，不加「一」，因此 15 读作「十五 (shíwǔ)」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中数字与量词搭配完全正确的一项：",
          "options": [
            "我们宿舍有三个人，买了六瓶水和两张地图。(Wǒmen sùshè yǒu sān gè rén, mǎi le liù píng shuǐ hé liǎng zhāng dìtú.)",
            "我们宿舍有三个门人，买了六张水和二张地图。",
            "我们宿舍有两名学生们，买了二瓶水和三张地图。",
            "我们宿舍有三个人们，买了六水和两地图。"
          ],
          "answerIndex": 0,
          "explanation": "「三个人」、「六瓶水」、「两张地图」的数词、量词及「两」的用法均完全符合现代汉语语法规范。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入在量词前表示数量「2」的专用单字汉字（拼音为 liǎng）：",
          "acceptedAnswers": [
            "两"
          ],
          "explanation": "汉字「两」专用于量词前表示两个单位的数量（如两人、两本、两只）。"
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
    "title": "百以上大数字（百、千、万）与四位分节计数法 (Large Numbers: 百, 千, 万 & 4-Digit Grouping)",
    "level": "A1",
    "objective": "掌握百（100）、千（1000）、万（10000）及亿（100000000）等大数位阶词，理解汉语音位独特的「四位分节法」与中间连续零的读数规律。",
    "presentation": {
      "explanation": "汉语百以上大数词采用清晰规则的十进制位阶进位体系：百（bǎi，100）、千（qiān，1000）、万（wàn，10000）、亿（yì，100000000）。\n\n一、中西方大数计数核心分野——「四位分节法」：\n西方语言普遍采用「三位分节法」（千 Thousand 10^3、百万 Million 10^6、十亿 Billion 10^9）。而汉语传统计数严格采用「四位分节法」，以每四个数位为一个核心进位级次：\n1. 个级（1 至 9999）：个、十、百、千\n2. 万级（10^4 至 10^7）：万、十万、百万、千万\n3. 亿级（10^8 至 10^11）：亿、十亿、百亿、千亿\n常用换算对照：\n- 10,000 = 一万\n- 100,000 = 十万（英文 One hundred thousand）\n- 1,000,000 = 一百万（英文 One million）\n- 10,000,000 = 一千万（英文 Ten million）\n- 100,000,000 = 一亿（英文 One hundred million）\n\n二、数词中「零」的核心朗读法则（极高频考点）：\n1. 中间连续零只读一个「零」：数位之间无论连续出现几个 0，朗读时一律只念一个「零」：\n- 105 读作：一百零五 (yì bǎi líng wǔ)\n- 1,005 读作：一千零五 (yì qiān líng wǔ)\n- 10,005 读作：一万零五 (yí wàn líng wǔ)\n- 1,050 读作：一千零五十 (yì qiān líng wǔshí)\n2. 末尾的零一律不读：各个数级末尾的 0 均不读出：\n- 150 读作：一百五十 (yì bǎi wǔshí)\n- 1,500 读作：一千五百 (yì qiān wǔbǎi)\n- 15,000 读作：一万五千 (yí wàn wǔqiān)\n\n三、200、2000、20000 在大数中的读法习惯：\n- 200：可读「二百」或「两百」\n- 2,000：可读「二千」或「两千」（口语更倾向于「两千」）\n- 20,000：标准普通话通常读作「两万 (liǎng wàn)」。",
      "examples": [
        {
          "target": "这所大学图书馆藏书超过一百五十万册。(Zhè suǒ dàxué túshūguǎn cángshū chāoguò yībǎiwǔshíwàn cè.)",
          "reading": "[ʈ͡ʂɤ˥˩ swɔ˨˩˦ ta˥˩.ɕɥɛ˧˥ tʰu˧˥.ʂu˥.kwan˨˩˦ t͡sʰɑŋ˧˥.ʂu˥ ʈ͡ʂʰaʊ̯˥.kwɔ˥˩ i˥.paɪ̯˨˩.u˨˩˦.ʂɨ˧˥.wan˥˩ t͡sʰɤ˥˩] (Zhè suǒ dà-xué tú-shū-guǎn cáng-shū chāo-guò yī-bǎi-wǔ-shí-wàn cè.)",
          "translation": "This university library has a collection of over 1.5 million volumes."
        },
        {
          "target": "这部新电脑的价格是八千零九十九元。(Zhè bù xīn diànnǎo de jiàgé shì bāqiān líng jiǔshíjiǔ yuán.)",
          "reading": "[ʈ͡ʂɤ˥˩ pu˥˩ ɕin˥ tjɛn˥˩.naʊ˨˩˦ tɤ t͡ɕja˥˩.kɤ˧˥ ʂɨ˥˩ pa˥.t͡ɕʰjɛn˥ liŋ˧˥ t͡ɕjoʊ̯˨˩.ʂɨ˧˥.t͡ɕjoʊ̯˨˩˦ ɥɛn˧˥] (Zhè bù xīn diàn-nǎo de jià-gé shì bā-qiān líng jiǔ-shí-jiǔ yuán.)",
          "translation": "The price of this new computer is 8,099 yuan."
        },
        {
          "target": "全校一共有两万三千名本科生和研究生。(Quán xiào yígòng yǒu liǎngwàn sānqiān míng běnkēshēng hé yánjiūshēng.)",
          "reading": "[t͡ɕʰɥɛn˧˥ ɕjaʊ̯˥˩ i˧˥.kʊŋ˥˩ joʊ̯˨˩˦ ljaŋ˨˩.wan˥˩ san˥.t͡ɕʰjɛn˥ miŋ˧˥ pən˨˩.kʰɤ˥.ʂəŋ xɤ˧˥ jɛn˧˥.t͡ɕjoʊ̯˥.ʂəŋ] (Quán xiào yí-gòng yǒu liǎng-wàn sān-qiān míng běn-kē-shēng hé yán-jiū-shēng.)",
          "translation": "The whole university has a total of 23,000 undergraduate and graduate students."
        },
        {
          "target": "中国有十四亿多人口。(Zhōngguó yǒu shísì yì duō rénkǒu.)",
          "reading": "[ʈ͡ʂʊŋ˥.kwɔ˧˥ joʊ̯˨˩˦ ʂɨ˧˥.sɨ˥˩ i˥˩ twɔ˥ ʐən˧˥.kʰoʊ̯˨˩˦] (Zhōng-guó yǒu shí-sì yì duō rén-kǒu.)",
          "translation": "China has a population of over 1.4 billion."
        }
      ],
      "mnemonics": [
        "四位一节是汉语，万亿进位记心里；中间有零读一个（一千零五），末尾有零全省略（一千五百）！"
      ],
      "culturalNotes": [
        "在传统中国文化中，「万」常被用作表示极多或无穷大的象征性数字，例如成语「万紫千红」、「万象更新」、「万水千山」以及祝寿用语「万寿无疆」，体现了宏大深远的语言审美。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "阿拉伯数字「10,008」在现代标准汉语中的正确朗读与书写是：",
          "options": [
            "一万零八 (yí wàn líng bā) —— 中间连续三个零只读一个「零」 (One wàn and eight: zeros read once)",
            "一万零零零八 (yí wàn líng líng líng bā)",
            "一千零八 (yì qiān líng bā)",
            "十千零八 (shí qiān líng bā)"
          ],
          "answerIndex": 0,
          "explanation": "10,008 属于万级数（1个万），中间虽有连续三个 0，但汉语语法规定只读一个「零」，即「一万零八」。"
        },
        {
          "prompt": "英语中的「One Million（一百万）」按照汉语四位分节法，对应的正确中文词位是：",
          "options": [
            "一百万 (yì bǎi wàn = 100个万) (1,000,000 = 100 wàn)",
            "一千万 (yì qiān wàn)",
            "十万 (shí wàn)",
            "一亿 (yí yì)"
          ],
          "answerIndex": 0,
          "explanation": "根据汉语四位分节，1,000,000 等于 100 个 10,000（万），因此对应「一百万」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "下列哪一个大数字在朗读时末尾的零不需要读出来？",
          "options": [
            "3,500 读作「三千五百」 (sān qiān wǔ bǎi) (Trailing zeros omitted)",
            "3,005 读作「三千零五」",
            "30,050 读作「三万零五十」",
            "305 读作「三百零五」"
          ],
          "answerIndex": 0,
          "explanation": "3,500 末尾处于百位之后的零属于尾数零，直接读作「三千五百」，无需读零。"
        },
        {
          "prompt": "数字「20,000」在中文口语中最标准自然的表达是：",
          "options": [
            "两万 (liǎng wàn) (Twenty thousand)",
            "二万 (èr wàn)",
            "二十千 (èrshí qiān)",
            "两千千 (liǎng qiān qiān)"
          ],
          "answerIndex": 0,
          "explanation": "在万位前表达数字 2 时，现代标准汉语规范普遍读作「两万 (liǎng wàn)」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列大数字汉字读音与数值对应完全正确的一项：",
          "options": [
            "20,500 —— 两万零五百 (liǎng wàn líng wǔ bǎi)",
            "20,500 —— 二万五百 (漏读中间零)",
            "20,500 —— 两万五 (数值变成 25,000)",
            "20,500 —— 二十千零五百 (非汉语习惯)"
          ],
          "answerIndex": 0,
          "explanation": "20,500 是 2 个万加上 5 个百，千位为 0 必须读出一个「零」，因此为「两万零五百」。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入汉语四位分节中代表 10^4（一万）的专用数词单字汉字（拼音为 wàn）：",
          "acceptedAnswers": [
            "万"
          ],
          "explanation": "汉字「万」是汉语四位分节计数法中最核心的位阶单位（10,000）。"
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
    "title": "钟点时间表达：点、分、半、刻与差 (Telling Time: 点, 分, 半, 刻 & 差)",
    "level": "A1",
    "objective": "熟练掌握汉语钟点时刻表达法（点、分、半、刻、差），掌握时段词前置规则，并能熟练进行日常时刻询问与时间安排对话。",
    "presentation": {
      "explanation": "现代标准汉语时刻表达严格遵循「由大到小（先时段、再小时、后分钟）」的层级顺序，核心时间单位包括：点（小时）、分（分钟）、半（30分钟）、刻（15分钟）、差（相差）。\n\n一、钟点时刻的核心构词元素：\n1. 点 / 点钟 (diǎn / diǎnzhōng)：表示整点钟头（如：八点、十点）。表示两点时一律用「两点 (liǎng diǎn)」，绝对不可说成 *二点*。\n2. 分 / 分钟 (fēn / fēnzhōng)：表示分钟（如：八点零五分、八点二十分）。\n3. 半 (bàn)：表示半点（30 分钟），紧接在「点」之后（如：两点半 = 2:30；九点半 = 9:30）。\n4. 刻 (kè)：表示一刻钟（15 分钟）：\n- 一刻 = 15 分钟（如：三点一刻 = 3:15）\n- 三刻 = 45 分钟（如：三点三刻 = 3:45）\n5. 差 (chà)：表示差几分到某整点：\n- 差五分八点（7:55，即差 5 分钟到 8 点）\n- 差一刻十点（9:45，即差 15 分钟到 10 点）\n\n二、时段词前置规则（必须置于钟点之前）：\n汉语中表示一天中具体时段的词汇，必须严格置于钟点之前充当修饰限制：\n- 早上 (zǎoshang，清晨 6:00–8:00)：早上七点整\n- 上午 (shàngwǔ，上午 8:00–12:00)：上午十点一刻\n- 中午 (zhōngwǔ，中午 12:00–13:00)：中午十二点半\n- 下午 (xiàwǔ，下午 13:00–18:00)：下午三点二十分\n- 晚上 (wǎnshang，傍晚及夜间 18:00–24:00)：晚上八点四十五分\n语法禁忌：绝不能像英语一样把时段放在句末（错误：*八点半晚上*；正确：晚上八点半）。\n\n三、询问时间核心句型闭环：\n- 问：请问，现在几点？ / 现在几点了？(Qǐngwèn, xiànzài jǐ diǎn / jǐ diǎn le?)\n- 答：现在是下午两点半。(Xiànzài shì xiàwǔ liǎng diǎn bàn.)",
      "examples": [
        {
          "target": "——请问，现在几点了？——现在正好是上午十点一刻。(—Qǐngwèn, xiànzài jǐ diǎn le? —Xiànzài zhènghǎo shì shàngwǔ shí diǎn yí kè.)",
          "reading": "[—t͡ɕʰiŋ˨˩.wən˥˩, ɕjɛn˥˩.t͡saɪ̯˥˩ t͡ɕi˨˩˦ tjɛn˨˩˦ lɤ? —ɕjɛn˥˩.t͡saɪ̯˥˩ ʈ͡ʂɤŋ˥˩.xaʊ˨˩˦ ʂɨ˥˩ ʂɑŋ˥˩.u˨˩˦ ʂɨ˧˥ tjɛn˨˩˦ i˧˥ kʰɤ˥˩] (—Qǐng-wèn, xiàn-zài jǐ diǎn le? —Xiàn-zài zhèng-hǎo shì shàng-wǔ shí diǎn yí kè.)",
          "translation": "—Excuse me, what time is it now? —It is exactly 10:15 AM right now."
        },
        {
          "target": "我们每天早上八点半开始上第一节课。(Wǒmen měitiān zǎoshang bā diǎn bàn kāishǐ shàng dì-yī jié kè.)",
          "reading": "[wɔ˨˩.mən meɪ̯˨˩.tʰjɛn˥ t͡saʊ˨˩.ʂaŋ pa˥ tjɛn˨˩˦ pan˥˩ kʰaɪ̯˥.ʂɨ˨˩˦ ʂɑŋ˥˩ ti˥˩.i˥ t͡ɕjɛ˧˥ kʰɤ˥˩] (Wǒ-men měi-tiān zǎo-shang bā diǎn bàn kāi-shǐ shàng dì-yī jié kè.)",
          "translation": "We start our first class at 8:30 every morning."
        },
        {
          "target": "现在的时刻是差五分下午两点。(Xiànzài de shíkè shì chà wǔ fēn xiàwǔ liǎng diǎn.)",
          "reading": "[ɕjɛn˥˩.t͡saɪ̯˥˩ tɤ ʂɨ˧˥.kʰɤ˥˩ ʂɨ˥˩ t͡ʂʰa˥˩ u˨˩˦ fən˥ ɕja˥˩.u˨˩˦ ljaŋ˨˩ tjɛn˨˩˦] (Xiàn-zài de shí-kè shì chà wǔ fēn xià-wǔ liǎng diǎn.)",
          "translation": "The current time is five minutes to 2:00 PM (1:55 PM)."
        },
        {
          "target": "我们约好今天晚上七点三刻在校门口见面。(Wǒmen yuēhǎo jīntiān wǎnshang qī diǎn sān kè zài xiàoménkǒu jiànmiàn.)",
          "reading": "[wɔ˨˩.mən ɥɛ˥.xaʊ˨˩˦ t͡ɕin˥.tʰjɛn˥ wan˨˩.ʂaŋ t͡ɕʰi˥ tjɛn˨˩˦ san˥ kʰɤ˥˩ t͡saɪ̯˥˩ ɕjaʊ̯˥˩.mən˧˥.kʰoʊ̯˨˩˦ t͡ɕjɛn˥˩.mjɛn˥˩] (Wǒ-men yuē-hǎo jīn-tiān wǎn-shang qī diǎn sān kè zài xiào-mén-kǒu jiàn-miàn.)",
          "translation": "We agreed to meet at the school gate at 7:45 PM tonight."
        }
      ],
      "mnemonics": [
        "时段在前点在后（下午三点），两点不念二点钟；半是一半三十整，一刻十五三刻四十五！"
      ],
      "culturalNotes": [
        "古代中国将一昼夜划分为十二个「时辰」，每个时辰相当于现代的两个小时，以十二地支命名（如子时为夜间11点至凌晨1点，午时为中午11点至下午1点）。「正午」、「午时三刻」等传统计时词汇至今仍活跃于中国文学与历史典故中。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在中文中表达下午「2:30」时，最标准地道的口语说法是：",
          "options": [
            "下午两点半 (xiàwǔ liǎng diǎn bàn) (2:30 PM: period first, liǎng before diǎn)",
            "二点半下午 (èr diǎn bàn xiàwǔ)",
            "下午二点半 (xiàwǔ èr diǎn bàn)",
            "下午两点三十钟 (xiàwǔ liǎng diǎn sānshí zhōng)"
          ],
          "answerIndex": 0,
          "explanation": "时段词「下午」必须前置，小时「2」必须读作「两点」，半点读「半」，故为「下午两点半」。"
        },
        {
          "prompt": "时刻「差一刻八点」所对应的具体数字时间是：",
          "options": [
            "7:45（差 15 分钟到 8 点） (Quarter to eight = 7:45)",
            "8:15（8 点过一刻）",
            "8:45（8 点三刻）",
            "7:15（7 点一刻）"
          ],
          "answerIndex": 0,
          "explanation": "「差一刻八点」即距离 8:00 还差一刻钟（15分钟），因此对应 7:45。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "要向路人礼貌询问当前的时间，最标准的中文疑问句是：",
          "options": [
            "请问，现在几点了？(Qǐngwèn, xiànzài jǐ diǎn le?) (Excuse me, what time is it now?)",
            "请问，现在多少点？",
            "请问，现在什么时候点？",
            "请问，什么时间是现在？"
          ],
          "answerIndex": 0,
          "explanation": "「请问，现在几点了？」是询问当前钟点时间的最经典通用句型（小数字疑问用「几」）。"
        },
        {
          "prompt": "请选出下列时间表达中语序完全正确的一项：",
          "options": [
            "晚上九点零五分 (wǎnshang jiǔ diǎn líng wǔ fēn) (9:05 PM)",
            "九点零五分晚上 (时段倒置错误)",
            "晚上九点五分零 (词序颠倒)",
            "零五分九点晚上 (语序混乱)"
          ],
          "answerIndex": 0,
          "explanation": "汉语遵循由大到小的语序：时段「晚上」+ 钟点「九点」+ 分钟「零五分」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列问答会话中时间表达完全规范准确的一组：",
          "options": [
            "甲：请问，会议几点开始？ 乙：明天上午八点三刻正式开始。",
            "甲：请问，会议几点开始？ 乙：明天八点三刻上午开始是。",
            "甲：现在几点？ 乙：现在是二点十五分下午。",
            "甲：现在几点？ 乙：现在是差下午两点五分。"
          ],
          "answerIndex": 0,
          "explanation": "「明天（日期）+ 上午（时段）+ 八点三刻（8:45）」由大到小语序完全严谨准确。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示整点钟头「小时」的单字汉字（例如「两点」的「点」）：",
          "acceptedAnswers": [
            "点"
          ],
          "explanation": "汉字「点」在时间表达中充当整点小时的核心计量词（如八点、两点）。"
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
    "title": "年、月、日、星期表达与宏观至微观时间语序 (Dates: Year, Month, Day, Week & Big-to-Small Order)",
    "level": "A1",
    "objective": "掌握汉语年、月、日、星期的完整表达法则，牢记「由大到小（宏观至微观）」的中国传统时空认知语序，熟练表达生日与日历日程。",
    "presentation": {
      "explanation": "汉语日期与时间的排列体系深刻体现了中华文化「由大及小、从宏观到微观、由整体到局部」的核心认知思维模式：\n\n一、日期表达的层级排列铁律：\n年份（年） -> 月份（月） -> 日期（日/号） -> 星期（星期/周） -> 具体时段 -> 钟点\n范例：2026年8月30日 星期日 上午10点30分（由最大的公元年份一路细化到最小的分钟）。\n\n二、年、月、日、星期的具体构造法则：\n1. 年份表达：直接逐字读出 4 位阿拉伯数字 +「年 (nián)」：\n- 2026年 读作：二零二六年 (èr líng èr liù nián)\n- 1998年 读作：一九九八年 (yī jiǔ jiǔ bā nián)\n- 2008年 读作：二零零八年 (èr líng líng bā nián)\n\n2. 月份表达：1 至 12 基数词 +「月 (yuè)」：\n- 一月 (1月)、二月 (2月)、三月 (3月) ...... 十一月 (11月)、十二月 (12月)。极度规则，无需记忆任何特殊派生词。\n\n3. 日期表达：基数词 +「日 (rì)」或「号 (hào)」：\n- 书面正式语体一律用「日」（例如：公文、报刊、护照上写作「8月30日」）\n- 口语交际日常多用「号」（例如：今天八月三十号）\n\n4. 星期表达体系：\n- 星期一、星期二、星期三、星期四、星期五、星期六\n- 周末特别注意：星期天 / 星期日（**绝对没有** *星期七* 之说！）\n- 常用同义替代格式：周一至周日、礼拜一至礼拜天。\n\n三、询问日期的核心交际句型：\n- 问：今天是几月几号？星期几？(Jīntiān shì jǐ yuè jǐ hào? Xīngqī jǐ?)\n- 答：今天是十月一号，星期五。(Jīntiān shì shí yuè yī hào, xīngqīwǔ.)\n- 问：你的生日是哪一天？(Nǐ de shēngrì shì nǎ yì tiān?)\n- 答：我的生日是一九九九年五月二十号。(Wǒ de shēngrì shì yī jiǔ jiǔ jiǔ nián wǔ yuè èrshí hào.)",
      "examples": [
        {
          "target": "今天是二零二六年八月三十日，星期天。(Jīntiān shì èr líng èr liù nián bā yuè sānshí rì, xīngqītiān.)",
          "reading": "[t͡ɕin˥.tʰjɛn˥ ʂɨ˥˩ aɻ˥˩ liŋ˧˥ aɻ˥˩ ljoʊ̯˥˩ njɛn˧˥ pa˥ ɥɛ˥˩ san˥.ʂɨ˧˥ ʐɨ˥˩, ɕiŋ˥.t͡ɕʰi˥.tʰjɛn˥] (Jīn-tiān shì èr líng èr liù nián bā yuè sān-shí rì, xīng-qī-tiān.)",
          "translation": "Today is Sunday, August 30, 2026."
        },
        {
          "target": "我的生日是九月十八号，你呢？(Wǒ de shēngrì shì jiǔ yuè shíbā hào, nǐ ne?)",
          "reading": "[wɔ˨˩ tɤ ʂɤŋ˥.ʐɨ˥˩ ʂɨ˥˩ t͡ɕjoʊ̯˨˩ ɥɛ˥˩ ʂɨ˧˥.pa˥ xaʊ̯˥˩, ni˨˩˦ nɤ?] (Wǒ de shēng-rì shì jiǔ yuè shí-bā hào, nǐ ne?)",
          "translation": "My birthday is September 18th, what about yours?"
        },
        {
          "target": "新学期从九月一日正式开始。(Xīn xuéqī cóng jiǔ yuè yī rì zhèngshì kāishǐ.)",
          "reading": "[ɕin˥ ɕɥɛ˧˥.t͡ɕʰi˥ t͡sʰʊŋ˧˥ t͡ɕjoʊ̯˨˩ ɥɛ˥˩ i˥ ʐɨ˥˩ ʈ͡ʂɤŋ˥˩.ʂɨ˥˩ kʰaɪ̯˥.ʂɨ˨˩˦] (Xīn xué-qī cóng jiǔ yuè yī rì zhèng-shì kāi-shǐ.)",
          "translation": "The new semester officially starts on September 1st."
        },
        {
          "target": "我们下周三下午两点在三号会议室开会。(Wǒmen xià zhōusān xiàwǔ liǎng diǎn zài sānhào huìyìshì kāihuì.)",
          "reading": "[wɔ˨˩.mən ɕja˥˩ ʈ͡ʂoʊ̯˥.san˥ ɕja˥˩.u˨˩˦ ljaŋ˨˩ tjɛn˨˩˦ t͡saɪ̯˥˩ san˥.xaʊ̯˥˩ xweɪ̯˥˩.i˥˩.ʂɨ˥˩ kʰaɪ̯˥.xweɪ̯˥˩] (Wǒ-men xià zhōu-sān xià-wǔ liǎng diǎn zài sān-hào huì-yì-shì kāi-huì.)",
          "translation": "We will hold a meeting in Meeting Room No. 3 at 2:00 PM next Wednesday."
        }
      ],
      "mnemonics": [
        "大到小年到秒（年月日星期），年份逐字念分明；周日周天无「周七」，书面写「日」口语「号」！"
      ],
      "culturalNotes": [
        "中国传统农历（阴阳历）以月相盈亏结合太阳二十四节气制定，农历新年（春节）、中秋节（八月十五）、端午节（五月初五）等传统节日均依照农历计算，现代中国人日常则同时通用公历（阳历）与农历。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在标准汉语中表达年份「2026年」时，正确的拼读方法是：",
          "options": [
            "二零二六年 (èr líng èr liù nián) —— 逐个数字单独朗读 (Read digits individually)",
            "两千零二十六年 (liǎng qiān líng èrshíliù nián)",
            "二十二十六年 (èrshí èrshíliù nián)",
            "二千二十六 (èr qiān èrshíliù)"
          ],
          "answerIndex": 0,
          "explanation": "在汉语中表达公元年份时，一律将 4 个数字逐个单念（2-0-2-6 读作 二零二六），后加「年」。"
        },
        {
          "prompt": "关于星期的表达，下列哪一个词语在现代汉语中属于**错误**的表达？",
          "options": [
            "星期七 (Xīngqīqī) —— 汉语中无此词，应为「星期天/星期日」 (No such word as Xīngqīqī)",
            "星期日 (Xīngqīrì)",
            "星期天 (Xīngqītiān)",
            "周日 (Zhōurì)"
          ],
          "answerIndex": 0,
          "explanation": "汉语一星期的最后一天称为「星期日」、「星期天」或「周日」，绝对没有「*星期七*」的说法。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "在书面正式公文中表达「5月12日」时，最规范的书写用字是：",
          "options": [
            "五月十二日 (Wǔ yuè shí'èr rì) (Written formal: rì)",
            "五月十二号 (口语常用，非正式公文)",
            "十二号五月 (语序颠倒)",
            "十二日五月 (受外语影响的错误语序)"
          ],
          "answerIndex": 0,
          "explanation": "书面正式语体中日期一律使用「日」，且语序严格为「月在前，日在后」。"
        },
        {
          "prompt": "请选出下列时间日期组合中完全符合「从大到小」中文语序的一项：",
          "options": [
            "2026年10月1日 星期四 上午9点 (Year -> Month -> Day -> Weekday -> Time of day -> Hour)",
            "星期四 2026年 10月1日 上午9点",
            "上午9点 10月1日 2026年 星期四",
            "10月1日 2026年 上午9点 星期四"
          ],
          "answerIndex": 0,
          "explanation": "现代汉语严格遵循从宏观到微观的认知逻辑：年 -> 月 -> 日 -> 星期 -> 时段 -> 钟点。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列对话中关于日期和星期的问答完全规范正确的一项：",
          "options": [
            "甲：请问，今天几月几号？星期几？ 乙：今天九月十号，星期三，是教师节！",
            "甲：今天什么时候号？ 乙：今天星期七，九月十日。",
            "甲：今天几月几号？ 乙：今天是教师节九月星期三号十。",
            "甲：几号今天星期？ 乙：九月十号是今天星期三日。"
          ],
          "answerIndex": 0,
          "explanation": "提问与回答均完全符合标准汉语的日期、月份、星期语法与语用交际规范。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入代表一整年时间维度的核心单字汉字（拼音为 nián）：",
          "acceptedAnswers": [
            "年"
          ],
          "explanation": "汉字「年」是表达年份与一整年周期的核心时间名词与量词。"
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
    "title": "相对时间词与时间状语在句中的语序规则 (Temporal Adverbs & Time Adverbial Position)",
    "level": "A1",
    "objective": "掌握汉语相对时间参照系统（前天/昨天/今天/明天/后天、去年/今年/明年），熟练掌握时间状语置于动词前的核心句法语序铁律。",
    "presentation": {
      "explanation": "现代标准汉语具有高度对称、层次分明的相对时间参照词汇体系，并且时间成分在句子充当状语时受到严格的句法位置制约。\n\n一、相对时间参照词汇完整对称体系：\n1. 以「天」为单位的相对时间轴：\n大前天（3天前） -> 前天（2天前） -> 昨天（1天前） -> 今天（当下） -> 明天（1天后） -> 后天（2天后） -> 大后天（3天后）\n\n2. 以「年」为单位的相对时间轴：\n大前年（3年前） -> 前年（2年前） -> 去年（1年前） -> 今年（当下年） -> 明年（1年后） -> 后年（2年后） -> 大后年（3年后）\n\n3. 以「周/星期」与「月」为单位的相对时间轴：\n- 上上个星期 / 上上个月（前一个周期）\n- 上个星期 / 上个月（上一个周期）\n- 这个星期 / 这个月（当前周期）\n- 下个星期 / 下个月（下一个周期）\n- 下下个星期 / 下下个月（后一个周期）\n\n二、时间状语在句子中的位置铁律（汉语核心语法支柱）：\n在现代汉语中，表示时间的词语充当句子的「时间状语」，其句法位置只能有且仅有两种合法选择，**绝对不能**放在句末谓语动词之后：\n\n1. 位置一：置于主语之后、谓语动词之前（最普遍、最中性的标准语序）：\n- 主语 + [时间状语] + 谓语动词 + 宾语\n- 我 [明天下午] 去北京大学参观。\n- 我们 [今年九月] 开始学习高级汉语。\n- 他 [昨天晚上] 没有来参加聚会。\n\n2. 位置二：置于句首主语之前（突出强调时间背景，或充当全句的话题背景）：\n- [时间状语]，主语 + 谓语动词 + 宾语\n- [明天下午]，我去北京大学参观。\n- [去年夏天]，我们在中国旅行了一个月。\n\n三、跨语言对比与极高频初学者病句警示：\n在英语等印欧语言中，时间状语习惯性置于句末（如 I will go to Beijing tomorrow）。受此母语负迁移影响，初学者极易造出严重病句：\n- 严重病句：*我去北京明天* / *他来我家昨天晚上*\n- 规范汉语：我明天去北京。 / 他昨天晚上来我家。\n牢记口诀：时间状语在动词前，主语前后两边站；绝不殿后放句末，地道汉语自然现！",
      "examples": [
        {
          "target": "我们明天上午九点在第一教学楼开会。(Wǒmen míngtiān shàngwǔ jiǔ diǎn zài dì-yī jiàoxuélóu kāihuì.)",
          "reading": "[wɔ˨˩.mən miŋ˧˥.tʰjɛn˥ ʂɑŋ˥˩.u˨˩˦ t͡ɕjoʊ̯˨˩ tjɛn˨˩˦ t͡saɪ̯˥˩ ti˥˩.i˥ t͡ɕjaʊ̯˥˩.ɕɥɛ˧˥.loʊ̯˧˥ kʰaɪ̯˥.xweɪ̯˥˩] (Wǒ-men míng-tiān shàng-wǔ jiǔ diǎn zài dì-yī jiào-xué-lóu kāi-huì.)",
          "translation": "We will hold a meeting in Teaching Building No. 1 at 9:00 AM tomorrow."
        },
        {
          "target": "去年他在北京学习，今年他在上海工作。(Qùnián tā zài Běijīng xuéxí, jīntiān tā zài Shànghǎi gōngzuò.)",
          "reading": "[t͡ɕʰy˥˩.njɛn˧˥ tʰa˥ t͡saɪ̯˥˩ peɪ̯˨˩.t͡ɕiŋ˥ ɕɥɛ˧˥.ɕi˧˥, t͡ɕin˥.njɛn˧˥ tʰa˥ t͡saɪ̯˥˩ ʂɑŋ˥˩.xaɪ̯˨˩˦ kʊŋ˥.t͡swɔ˥˩] (Qù-nián tā zài Běi-jīng xué-xí, jīn-nián tā zài Shàng-hǎi gōng-zuò.)",
          "translation": "Last year he studied in Beijing; this year he works in Shanghai."
        },
        {
          "target": "昨天晚上我和李华一起去看了中国京剧。(Zuótiān wǎnshang wǒ hé Lǐ Huá yìqǐ qù kàn le Zhōngguó jīngjù.)",
          "reading": "[t͡swɔ˧˥.tʰjɛn˥ wan˨˩.ʂaŋ wɔ˨˩ xɤ˧˥ li˨˩˦ xwa˧˥ i˥˩.t͡ɕʰi˨˩˦ t͡ɕʰy˥˩ kʰan˥˩ lɤ ʈ͡ʂʊŋ˥.kwɔ˧˥ t͡ɕiŋ˥.t͡ɕy˥˩] (Zuó-tiān wǎn-shang wǒ hé Lǐ Huá yì-qǐ qù kàn le Zhōng-guó jīng-jù.)",
          "translation": "Last night Li Hua and I went together to watch Chinese Peking Opera."
        },
        {
          "target": "下个星期五我们全班同学去长城春游。(Xià gè xīngqīwǔ wǒmen quán bān tóngxué qù Chángchéng chūnyóu.)",
          "reading": "[ɕja˥˩ kɤ ɕiŋ˥.t͡ɕʰi˥.u˨˩˦ wɔ˨˩.mən t͡ɕʰɥɛn˧˥ pan˥ tʰʊŋ˧˥.ɕɥɛ˧˥ t͡ɕʰy˥˩ ʈ͡ʂʰɑŋ˧˥.ʈ͡ʂʰɤŋ˧˥ ʈ͡ʂʰwən˥.joʊ̯˧˥] (Xià gè xīng-qī-wǔ wǒ-men quán bān tóng-xué qù Cháng-chéng chūn-yóu.)",
          "translation": "Next Friday our whole class will go on a spring outing to the Great Wall."
        }
      ],
      "mnemonics": [
        "时间状语动词前，主语前后两边站；去年今年和明年，绝不殿后放句末！"
      ],
      "culturalNotes": [
        "中国传统哲学强调整体宇宙秩序与时间流动的前置引导作用。在语言表达中，先把时间大背景确立（在句首或主语后），再叙述在该时空背景下展开的具体人事行为，体现了中国古人「天人合一、顺应天时」的宏观时空观。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "表达「我明天去图书馆」，时间状语「明天」在句子中的正确位置是：",
          "options": [
            "主语「我」之后、动词「去」之前（我明天去图书馆）或句首（明天我去图书馆） (Before the verb: Wǒ míngtiān qù túshūguǎn)",
            "必须放在句子最末尾：我去图书馆明天。",
            "必须放在宾语「图书馆」之后：我去明天图书馆。",
            "必须放在动词「去」和宾语之间：我去看明天图书馆。"
          ],
          "answerIndex": 0,
          "explanation": "汉语时间状语必须位于谓语动词之前，可以置于主语后（我明天去）或句首（明天我去），绝对不可放在句末。"
        },
        {
          "prompt": "在相对时间词中，表示「今天的前一天」和「今年的前一年」的词语分别是：",
          "options": [
            "昨天 (zuótiān) 与 去年 (qùnián) (Yesterday & Last year)",
            "前天 与 前年",
            "明天 与 明年",
            "后天 与 后年"
          ],
          "answerIndex": 0,
          "explanation": "「昨天」指当前日期的前一天；「去年」指当前年份的前一年。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "下列哪一个句子由于把时间状语错误置于句末而构成了典型语序病句？",
          "options": [
            "我们买了两本汉语书昨天下午。(病句：时间状语放在了句末) (Incorrectly placed time adverbial at end)",
            "我们昨天下午买了两本汉语书。",
            "昨天下午，我们买了两本汉语书。",
            "下个星期我们要去北京旅游。"
          ],
          "answerIndex": 0,
          "explanation": "「昨天下午」作为时间状语被放在了句末谓语动词之后，属于受外语影响的严重语序错误。"
        },
        {
          "prompt": "请选出下列时间词语序列严格按照「过去 -> 现在 -> 将来」顺序排列的一项：",
          "options": [
            "前天 -> 昨天 -> 今天 -> 明天 -> 后天 (Past -> Present -> Future time sequence)",
            "后天 -> 明天 -> 今天 -> 昨天 -> 前天",
            "今天 -> 昨天 -> 前天 -> 明天 -> 后天",
            "明天 -> 今天 -> 昨天 -> 后天 -> 前天"
          ],
          "answerIndex": 0,
          "explanation": "从前天（2天前）到昨天（1天前），再到今天（当下），之后到明天（1天后）与后天（2天后），顺序完全正确。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中时间状语位置与词语搭配完全正确的一项：",
          "options": [
            "张教授上个星期在学术大会上发表了重要演讲。(Professor Zhang delivered an important speech at the academic conference last week.)",
            "张教授发表了重要演讲在上个星期学术大会上。",
            "张教授在学术大会上发表了重要演讲上个星期。",
            "张教授发表了上个星期重要演讲在学术大会。"
          ],
          "answerIndex": 0,
          "explanation": "时间状语「上个星期」位于主语「张教授」之后、介词短语与动词之前，完全符合汉语语法标准规则。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示「当下今日」的单字汉字（例如「今天」的「今」）：",
          "acceptedAnswers": [
            "今"
          ],
          "explanation": "汉字「今」表示当下现时（如今天、今年、今日、古今）。"
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
    "title": "汉语量词系统概述与万能通用量词「个」的用法 (Classifier System & The General Classifier '个')",
    "level": "A1",
    "objective": "理解现代汉语量词系统的核心语法机制，掌握「数词 + 量词 + 名词」的基本构造模型，熟练运用万能通用个体量词「个」修饰人、物与抽象概念。",
    "presentation": {
      "explanation": "现代汉语在语言类型学上属于典型的「量词语言（Classifier Language）」。在标准汉语中，数词通常**绝对不能直接修饰名词**，数词与名词之间必须嵌入一个合适的量词，构成规范的「数词 + 量词 + 名词」语法结构。\n\n一、汉语数量短语修饰名词的黄金模型：\n1. 基数词 + 量词 + 名词：\n- 一个人（不可说成 *一人*）\n- 三本书（不可说成 *三书*）\n- 五张桌子（不可说成 *五桌子*）\n2. 指示代词 + 量词 + 名词：\n- 这个人、那本书、这台电脑、那张地图\n3. 疑问代词 + 量词 + 名词：\n- 哪位老师、几个苹果、哪条裤子\n\n二、万能通用个体量词「个」的广阔适用范围：\n「个 (gè)」是现代汉语中使用频率最高、包容性最强的通用个体量词，主要应用于以下范畴：\n1. 人员与亲属称谓：一个人、两个朋友、三个学生、四个同班同学、一个弟弟。\n2. 水果与日常物品：一个苹果、一个西瓜、一个面包、一个包子、一个杯子。\n3. 场所、机构与国家：一个国家、一个学校、一个公司、一个大学、一个房间、一个超市。\n4. 抽象概念与语言事物：一个问题、一个想法、一个好办法、一个汉字、一个故事、一个机会。\n5. 时间周期单位：一个月、一个星期、一个小时、一个季度（注意：「天」和「年」本身具有量词性质，前面不可加「个」，如只能说「三天」、「五年」）。\n\n三、语流发音与「一」的变调：\n1. 量词「个」在口语中通常弱化为轻声：yí ge, liǎng ge, sān ge。\n2. 基数词「一」在第四声「个」前必须变调为第二声阳平「yí gè」。",
      "examples": [
        {
          "target": "我们班一共有二十个来自不同国家的留学生。(Wǒmen bān yígòng yǒu èrshí gè láizì bùtóng guójiā de liúxuéshēng.)",
          "reading": "[wɔ˨˩.mən pan˥ i˧˥.kʊŋ˥˩ joʊ̯˨˩˦ aɻ˥˩.ʂɨ˧˥ kɤ laɪ̯˧˥.t͡sɨ˥˩ pu˥˩.tʰʊŋ˧˥ kwɔ˧˥.t͡ɕja˥ tɤ ljoʊ̯˧˥.ɕɥɛ˧˥.ʂəŋ] (Wǒ-men bān yí-gòng yǒu èr-shí gè lái-zì bù-tóng guó-jiā de liú-xué-shēng.)",
          "translation": "There are twenty international students from different countries in our class in total."
        },
        {
          "target": "我想问老师一个关于汉字由来的问题。(Wǒ xiǎng wèn lǎoshī yí gè guānyú Hànzì yóulái de wèntí.)",
          "reading": "[wɔ˨˩ ɕjɑŋ˨˩˦ wən˥˩ laʊ˨˩.ʂɨ˥ i˧˥ kɤ kwan˥.y˧˥ xan˥˩.t͡sɨ˥˩ joʊ̯˧˥.laɪ̯˧˥ tɤ wən˥˩.tʰi˧˥] (Wǒ xiǎng wèn lǎo-shī yí gè guān-yú Hàn-zì yóu-lái de wèn-tí.)",
          "translation": "I would like to ask the teacher a question regarding the origin of Chinese characters."
        },
        {
          "target": "桌子上有三个红苹果和一个大西瓜。(Zhuōzi shang yǒu sān gè hóng píngguǒ hé yí gè dà xīguā.)",
          "reading": "[ʈ͡ʂwɔ˥.t͡sɨ ʂɑŋ joʊ̯˨˩˦ san˥ kɤ xʊŋ˧˥ pʰiŋ˧˥.kwɔ˨˩˦ xɤ˧˥ i˧˥ kɤ ta˥˩ ɕi˥.kwa˥] (Zhuō-zi shang yǒu sān gè hóng píng-guǒ hé yí gè dà xī-guā.)",
          "translation": "There are three red apples and a big watermelon on the table."
        },
        {
          "target": "我们下个月计划去北京参观故宫。(Wǒmen xià gè yuè jìhuà qù Běijīng cānguān Gùgōng.)",
          "reading": "[wɔ˨˩.mən ɕja˥˩ kɤ ɥɛ˥˩ t͡ɕi˥˩.xwa˥˩ t͡ɕʰy˥˩ peɪ̯˨˩.t͡ɕiŋ˥ t͡sʰan˥.kwan˥ ku˥˩.kʊŋ˥] (Wǒ-men xià gè yuè jì-huà qù Běi-jīng cān-guān Gù-gōng.)",
          "translation": "We plan to go to Beijing next month to visit the Forbidden City."
        }
      ],
      "mnemonics": [
        "数词名词不相见，中间必须量词连；万能通用个体「个」，一人两果一个月！"
      ],
      "culturalNotes": [
        "汉语量词体系起源于先秦时期，成熟于魏晋南北朝。量词的运用反映了汉民族根据事物的外部形象、功能及感官特征对世界进行精细分类的独特认知方式。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在现代汉语语法中，关于数词修饰名词的正确语法规则是：",
          "options": [
            "数词与名词之间必须嵌入合适的量词：数词 + 量词 + 名词 (Numeral + Classifier + Noun)",
            "数词必须直接紧贴在名词前面，绝不使用量词。",
            "量词必须放在句子的最末尾。",
            "只有修饰人时才使用量词，修饰物品不用量词。"
          ],
          "answerIndex": 0,
          "explanation": "汉语属于量词语言，数词修饰名词时必须通过量词连接（如「三个学生」，不可说「*三学生*」）。"
        },
        {
          "prompt": "下列哪一个词语的时间表达中，不能添加量词「个」？",
          "options": [
            "三天 (Sān tiān) ——「天」本身即为量词，不可说「三个天」 (Tiān is inherently a measure word)",
            "三个月 (Sān gè yuè)",
            "三个星期 (Sān gè xīngqī)",
            "三个小时 (Sān gè xiǎoshí)"
          ],
          "answerIndex": 0,
          "explanation": "汉语中「天（日）」和「年」自身兼具量词功能，直接说「三天」、「三年」，绝不可加「个」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "要表达「我想买一个红苹果」，指示代词与数量搭配规范的是：",
          "options": [
            "一个红苹果 (yí gè hóng píngguǒ) (One red apple)",
            "一红苹果 (缺少量词)",
            "个一红苹果 (语序颠倒)",
            "红苹果一个的 (语序混乱)"
          ],
          "answerIndex": 0,
          "explanation": "「数词（一）+ 量词（个）+ 形容词定语（红）+ 名词（苹果）」结构严谨规范。"
        },
        {
          "prompt": "在短语「一个」中，数词「一」的实际口语发音变调为：",
          "options": [
            "第二声阳平：yí gè (1st tone becomes 2nd before 4th tone gè)",
            "第四声去声：yì gè",
            "第一声阴平原调：yī gè",
            "轻声：yi ge"
          ],
          "answerIndex": 0,
          "explanation": "「个」为第四声，数词「一」在第四声音节前必须变调为第二声「yí gè」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中通用量词「个」使用完全正确规范的一项：",
          "options": [
            "我们学校新来了一个经验丰富的美国外教。(Wǒmen xuéxiào xīn lái le yí gè jīngyàn fēngfù de Měiguó wàijiào.)",
            "我们学校新来了一经验丰富的美国外教。(缺少量词)",
            "我们学校新来了三个外教们。(数量词与「们」杂糅)",
            "我们学校新来了个一美国外教。(词序颠倒)"
          ],
          "answerIndex": 0,
          "explanation": "「一个 + 形容词定语 + 名词中心语」完全符合现代汉语标准量词句式规范。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入汉语中最常用的万能通用个体量词单字汉字（拼音为 gè）：",
          "acceptedAnswers": [
            "个"
          ],
          "explanation": "汉字「个」是现代汉语中使用最广泛的通用个体量词。"
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
    "title": "核心个体量词辨析：本、张、条、支、把 (Core Individual Classifiers: 本, 张, 条, 支, 把)",
    "level": "A1",
    "objective": "掌握五大高频核心个体名量词（本、张、条、支、把）的形态认知特征、搭配范围与语义选择机制，能够根据物体的形状与功能精准选用量词。",
    "presentation": {
      "explanation": "汉语个体名量词的选择与被修饰物体的空间形态、物理材质、构造特征及操作方式具有深刻的认知关联：\n\n一、五大核心个体名量词的语义分类与搭配：\n1.「本 (běn)」—— 装订成册的纸质书册刊物：\n- 搭配范畴：书籍、词典、杂志、笔记本、护照、相册。\n- 范例：一本书、两本汉英词典、三本学术杂志、一本厚笔记本、一本新护照。\n\n2.「张 (zhāng)」—— 具有平整展开面、薄片状或平坦表面的器物：\n- 搭配范畴：纸张、票据、照片、画作、床铺、桌子、脸面、嘴巴。\n- 范例：一张白纸、两张飞机票、三张全家福照片、一张大办公桌、一张双人床、一张中国地图。\n\n3.「条 (tiáo)」—— 细长、狭窄、柔韧或蜿蜒曲折的线状物体：\n- 搭配范畴：鱼类、裤子、裙子、领带、毛巾、绳索、道路、河流、短信、新闻。\n- 范例：一条金鱼、两条牛仔裤、一条丝绸领带、一条毛巾、一条柏油马路、一条大河、一条重要新闻。\n\n4.「支 (zhī)」—— 细长、笔直、硬质的杆状或笔类用具：\n- 搭配范畴：笔类、箭支、枪支、香烟、蜡烛。\n- 范例：一支铅笔、两支毛笔、三支圆珠笔、一支红色钢笔、一支白色蜡烛。\n\n5.「把 (bǎ)」—— 带有柄把、手柄或便于单手抓握操控的工具与器物：\n- 搭配范畴：椅子（有靠背把手）、雨伞、刀具、剪刀、钥匙、扇子、茶壶。\n- 范例：一把木头椅子、两把雨伞、一把锋利的小刀、一把剪刀、一把大门钥匙、一把折扇。",
      "examples": [
        {
          "target": "他在书店买了两本很有价值的汉语语法书和三张中国地图。(Tā zài shūdiàn mǎi le liǎng běn hěn yǒu jiàzhí de Hànyǔ yǔfǎ shū hé sān zhāng Zhōngguó dìtú.)",
          "reading": "[tʰa˥ t͡saɪ̯˥˩ ʂu˥.tjɛn˥˩ maɪ̯˨˩˦ lɤ ljaŋ˨˩ pən˨˩ xən˨˩ joʊ̯˨˩˦ t͡ɕja˥˩.ʈ͡ʂɨ˧˥ tɤ xan˥˩.y˨˩˦ y˨˩.fa˨˩˦ ʂu˥ xɤ˧˥ san˥ ʈ͡ʂɑŋ˥ ʈ͡ʂʊŋ˥.kwɔ˧˥ ti˥˩.tʰu˧˥] (Tā zài shū-diàn mǎi le liǎng běn hěn yǒu jià-zhí de Hàn-yǔ yǔ-fǎ shū hé sān zhāng Zhōng-guó dì-tú.)",
          "translation": "He bought two very valuable Chinese grammar books and three maps of China at the bookstore."
        },
        {
          "target": "外面正在下大雨，请带上一把雨伞。(Wàimiàn zhèngzài xià dàyǔ, qǐng dàishang yì bǎ yǔsǎn.)",
          "reading": "[waɪ̯˥˩.mjɛn˥˩ ʈ͡ʂɤŋ˥˩.t͡saɪ̯˥˩ ɕja˥˩ ta˥˩.y˨˩˦, t͡ɕʰiŋ˨˩ taɪ̯˥˩.ʂɑŋ i˧˥ pa˨˩˦ y˨˩.san˨˩˦] (Wài-miàn zhèng-zài xià dà-yǔ, qǐng dài-shang yì bǎ yǔ-sǎn.)",
          "translation": "It is raining heavily outside; please take an umbrella with you."
        },
        {
          "target": "小王借给我一支黑色的圆珠笔和一条新毛巾。(Xiǎo Wáng jiè gěi wǒ yì zhī hēisè de yuánzhūbǐ hé yì tiáo xīn máojīn.)",
          "reading": "[ɕjaʊ̯˨˩ wɑŋ˧˥ t͡ɕjɛ˥˩ keɪ̯˨˩ wɔ˨˩ i˥ ʈ͡ʂɨ˥ xeɪ̯˥.sɤ˥˩ tɤ ɥɛn˧˥.ʈ͡ʂu˥.pi˨˩˦ xɤ˧˥ i˥ tʰjaʊ̯˧˥ ɕin˥ maʊ̯˧˥.t͡ɕin˥] (Xiǎo Wáng jiè gěi wǒ yì zhī hēi-sè de yuán-zhū-bǐ hé yì tiáo xīn máo-jīn.)",
          "translation": "Xiao Wang lent me a black ballpoint pen and a new towel."
        },
        {
          "target": "我们沿着这条风景优美的小路散步。(Wǒmen yánzhe zhè tiáo fēngjǐng yōuměi de xiǎolù sànbù.)",
          "reading": "[wɔ˨˩.mən jɛn˧˥.ʈ͡ʂɤ ʈ͡ʂɤ˥˩ tʰjaʊ̯˧˥ fɤŋ˥.t͡ɕiŋ˨˩ joʊ̯˥.meɪ̯˨˩˦ tɤ ɕjaʊ̯˨˩.lu˥˩ san˥˩.pu˥˩] (Wǒ-men yán-zhe zhè tiáo fēng-jǐng yōu-měi de xiǎo-lù sàn-bù.)",
          "translation": "We take a walk along this path with beautiful scenery."
        }
      ],
      "mnemonics": [
        "书册用「本」纸面「张」，细长蜿蜒用「条」量；直挺笔类用「支」点，手握器物全用「把」！"
      ],
      "culturalNotes": [
        "汉字量词的字形往往直接反映了其原始实词词义，例如「本」字源自树木之根柢与册本，「张」字源于开弓张弦之展开平铺，「把」字从手表示抓握，体现了汉字字形与语法功能的历史同构性。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在下列名词中，应该搭配个体量词「张 (zhāng)」的是：",
          "options": [
            "桌子、机票、床、照片 (Desks, flight tickets, beds, photos - flat surfaces)",
            "汉语书、词典、笔记本",
            "铅笔、毛笔、钢笔",
            "雨伞、椅子、钥匙"
          ],
          "answerIndex": 0,
          "explanation": "量词「张」专用于平展、薄片或平坦表面的物品，如桌子、机票、床、照片。"
        },
        {
          "prompt": "修饰细长、柔软的衣物「裤子」时，正确的量词搭配是：",
          "options": [
            "一条裤子 (yì tiáo kùzi) (tiáo for long, slender, flexible items)",
            "一本裤子",
            "一张裤子",
            "一把裤子"
          ],
          "answerIndex": 0,
          "explanation": "「裤子」属于细长形态的服饰，在汉语中一律使用量词「条」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "下列哪一组名词与量词的搭配完全正确无误？",
          "options": [
            "两本词典、三支铅笔、一把雨伞 (Two dictionaries, three pencils, an umbrella)",
            "两张词典、三条铅笔、一本雨伞",
            "两支词典、三把铅笔、一张雨伞",
            "两条词典、三张铅笔、一支雨伞"
          ],
          "answerIndex": 0,
          "explanation": "词典用「本」，铅笔用「支」，雨伞用「把」，各项搭配完全精准符合规范。"
        },
        {
          "prompt": "修饰用于开门进入房间的工具「钥匙」时，应选用的量词是：",
          "options": [
            "把 (一把钥匙) (bǎ for handheld tools with grip)",
            "本",
            "张",
            "条"
          ],
          "answerIndex": 0,
          "explanation": "钥匙属于手持操控的器具，使用量词「把（一把钥匙）」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中量词使用全部准确得体的一项：",
          "options": [
            "房间里有一张大桌子、两把木头椅子和三本书。(There is a large desk, two wooden chairs, and three books in the room.)",
            "房间里有一本大桌子、两张木头椅子和三把书。",
            "房间里有一条大桌子、两支木头椅子和三张书。",
            "房间里有一把大桌子、两条木头椅子和三支书。"
          ],
          "answerIndex": 0,
          "explanation": "桌子用「张」，椅子用「把」，书用「本」，搭配完全精确无误。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入修饰书籍、刊物、词典的专用单字量词汉字（拼音为 běn）：",
          "acceptedAnswers": [
            "本"
          ],
          "explanation": "汉字「本」是现代汉语中专门用于装订成册之书册刊物的个体量词。"
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
    "title": "容器量词与度量衡量词：杯、瓶、碗、公斤、块、斤 (Container & Measurement Classifiers)",
    "level": "A1",
    "objective": "熟练掌握汉语常用容器量词（杯/瓶/碗/盘）与度量衡及货币单位（公斤/斤/块/毛/分），能够在餐饮点餐、购物与日常交易中精准运用。",
    "presentation": {
      "explanation": "在现代汉语中，除了事物固有的个体量词外，以盛装容器为计量单位的「容器量词」以及标准的「度量衡与货币量词」在日常生活与商业贸易中扮演着至关重要的角色。\n\n一、高频常用容器量词体系：\n1.「杯 (bēi)」—— 用于杯装饮品与液体：\n- 一杯热绿茶、两杯黑咖啡、三杯鲜橙汁、一杯温水、一杯红葡萄酒。\n2.「瓶 (píng)」—— 用于瓶装液体或颗粒物：\n- 一瓶矿泉水、两瓶青岛啤酒、一瓶红酒、一瓶可乐、一瓶牛奶。\n3.「碗 (wǎn)」—— 用于碗装主食与汤羹：\n- 一碗热白米饭、两碗牛肉面、一碗馄饨、一碗酸辣汤。\n4.「盘 (pán)」—— 用于盘装菜肴与点心：\n- 一盘中国特色菜、两盘水饺、一盘炒青菜、一盘新鲜水果。\n\n二、度量衡量词体系（重量、长度、容量）：\n1. 重量单位：\n- 公斤 (gōngjīn，国际千克 1kg = 2市斤)：两公斤苹果、五公斤面粉。\n- 斤 (jīn，市斤 500g，中国农贸超市极高频传统重量单位)：一斤香蕉、三斤猪肉。\n2. 长度与容量：米 (mǐ，公尺)、公里 (gōnglǐ，千米)、升 (shēng，公升)。\n\n三、人民币货币计量单位体系：\n现代人民币采用十进制货币计数单位体系：\n1. 主币单位：块 / 元 (kuài / yuán，1元 = 10角/毛)\n- 口语常用「块」（如：十块钱、一百块钱）\n- 书面语专用「元」（如：售价：50元）\n2. 辅币单位：毛 / 角 (máo / jiǎo，1角 = 10分)\n- 口语常用「毛」（如：五毛钱、八毛五）\n- 书面语用「角」（如：5角）\n3. 最小辅币：分 (fēn)（如：两分钱）。",
      "examples": [
        {
          "target": "服务员，请给我们来两杯热茶、三碗米饭和一盘水饺。(Fúwùyuán, qǐng gěi wǒmen lái liǎng bēi rèchá, sān wǎn mǐfàn hé yì pán shuǐjiǎo.)",
          "reading": "[fu˧˥.u˥˩.ɥɛn˧˥, t͡ɕʰiŋ˨˩ keɪ̯˨˩ wɔ˨˩.mən laɪ̯˧˥ ljaŋ˨˩ peɪ̯˥ ʐɤ˥˩.ʈ͡ʂʰa˧˥, san˥ wan˨˩˦ mi˨˩.fan˥˩ xɤ˧˥ i˥ pʰan˧˥ ʂweɪ̯˨˩.t͡ɕjaʊ̯˨˩˦] (Fú-wù-yuán, qǐng gěi wǒ-men lái liǎng bēi rè-chá, sān wǎn mǐ-fàn hé yì pán shuǐ-jiǎo.)",
          "translation": "Waiter, please bring us two cups of hot tea, three bowls of rice, and a plate of dumplings."
        },
        {
          "target": "这瓶矿泉水两块五毛钱，那两斤苹果一共十五块。(Zhè píng kuàngquánshuǐ liǎng kuài wǔ máo qián, nà liǎng jīn píngguǒ yígòng shíwǔ kuài.)",
          "reading": "[ʈ͡ʂɤ˥˩ pʰiŋ˧˥ kʰwaŋ˥˩.t͡ɕʰɥɛn˧˥.ʂweɪ̯˨˩˦ ljaŋ˨˩ kʰwaɪ̯˥˩ u˨˩˦ maʊ̯˧˥ t͡ɕʰjɛn˧˥, na˥˩ ljaŋ˨˩ t͡ɕin˥ pʰiŋ˧˥.kwɔ˨˩˦ i˧˥.kʊŋ˥˩ ʂɨ˧˥.u˨˩˦ kʰwaɪ̯˥˩] (Zhè píng kuàng-quán-shuǐ liǎng kuài wǔ máo qián, nà liǎng jīn píng-guǒ yí-gòng shí-wǔ kuài.)",
          "translation": "This bottle of mineral water is 2.50 yuan, and those two catties of apples are 15 yuan in total."
        },
        {
          "target": "我每天早晨都要喝一杯新鲜的热牛奶。(Wǒ měitiān zǎochén dōu yào hē yì bēi xīnxiān de rè niúnǎi.)",
          "reading": "[wɔ˨˩ meɪ̯˨˩.tʰjɛn˥ t͡saʊ˨˩.ʈ͡ʂʰən˧˥ toʊ̯˥ jaʊ̯˥˩ xɤ˥ i˥ peɪ̯˥ ɕin˥.ɕjɛn˥ tɤ ʐɤ˥˩ njoʊ̯˧˥.naɪ̯˨˩˦] (Wǒ měi-tiān zǎo-chén dōu yào hē yì bēi xīn-xiān de rè niú-nǎi.)",
          "translation": "I drink a cup of fresh hot milk every morning."
        },
        {
          "target": "请给我称两公斤新鲜的牛肉。(Qǐng gěi wǒ chēng liǎng gōngjīn xīnxiān de niúròu.)",
          "reading": "[t͡ɕʰiŋ˨˩ keɪ̯˨˩ wɔ˨˩ ʈ͡ʂʰɤŋ˥ ljaŋ˨˩ kʊŋ˥.t͡ɕin˥ ɕin˥.ɕjɛn˥ tɤ njoʊ̯˧˥.ʐoʊ̯˥˩] (Qǐng gěi wǒ chēng liǎng gōng-jīn xīn-xiān de niú-ròu.)",
          "translation": "Please weigh two kilograms of fresh beef for me."
        }
      ],
      "mnemonics": [
        "杯装茶水瓶装酒，碗盛米饭盘盛菜；公斤市斤称重量，块毛分里算钱粮！"
      ],
      "culturalNotes": [
        "中国传统市斤（1斤 = 500克）在民间菜市场、果蔬摊位依然是最深入人心的交易计量标准。现代中国年轻人在线上线下购物时，普遍使用移动支付（微信支付与支付宝），口语中仍习惯称「元」为「块」。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在餐馆点餐时，表达「两碗面条」和「两杯热茶」的量词搭配应选用：",
          "options": [
            "碗 (wǎn) 与 杯 (bēi) (Bowls of noodles & Cups of tea)",
            "本 与 张",
            "条 与 支",
            "把 与 个"
          ],
          "answerIndex": 0,
          "explanation": "面条用碗盛装故用「碗」，茶水用杯盛装故用「杯」，属于标准容器量词。"
        },
        {
          "prompt": "在中国菜市场买水果，标价「8元一斤」，这里的「一斤」重量相当于公制：",
          "options": [
            "500克（0.5公斤） (500 grams / half a kilogram)",
            "1000克（1公斤）",
            "250克",
            "100克"
          ],
          "answerIndex": 0,
          "explanation": "中国大陆法定市斤标准中，1 斤严格等于 500 克（即半公斤）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "口语中表达商品价格「15.50元」时，最自然地道的中文说法是：",
          "options": [
            "十五块五毛钱 / 十五块五 (shíwǔ kuài wǔ máo qián / shíwǔ kuài wǔ) (15 kuài 5 máo)",
            "十五元五角钱零分",
            "五毛十五块",
            "十五点五十块钱"
          ],
          "answerIndex": 0,
          "explanation": "中文口语中货币主币读「块」，辅币读「毛」，15.50元常说作「十五块五毛」或简作「十五块五」。"
        },
        {
          "prompt": "修饰装在玻璃瓶或塑料瓶中的矿泉水时，应使用的量词是：",
          "options": [
            "瓶 (一瓶矿泉水) (píng - bottle)",
            "本",
            "把",
            "张"
          ],
          "answerIndex": 0,
          "explanation": "瓶装液体使用容器量词「瓶 (píng)」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列购物结账对话中量词与货币表达完全正确的一项：",
          "options": [
            "甲：两瓶水和三斤苹果一共多少钱？ 乙：一共二十二块五毛钱。",
            "甲：两张水和三把苹果一共多少钱？ 乙：一共二十二本五毛钱。",
            "甲：两个水和三支苹果一共多少钱？ 乙：一共二十二元钱五分条。",
            "甲：两杯水和三条苹果一共多少钱？ 乙：一共二十二毛五块钱。"
          ],
          "answerIndex": 0,
          "explanation": "水用「瓶」，苹果称重用「斤」，价格「二十二块五毛钱」，语法与生活语用完全准确。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示杯装饮料的常用容器量词单字汉字（例如「一杯茶」的「杯」）：",
          "acceptedAnswers": [
            "杯"
          ],
          "explanation": "汉字「杯」是表示杯装液体饮品（如茶、咖啡、水）的标准容器量词。"
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
    "title": "不定量词与集合量词：些、点儿、双、对、群 (Indefinite & Collective Classifiers)",
    "level": "A1",
    "objective": "掌握表示模糊数量的不定量词（一些、一点儿）以及成双与群体聚合量词（双、对、群）的语义范畴与修饰规则。",
    "presentation": {
      "explanation": "当所修饰事物的数量处于不确定状态、或者事物呈现成双成对、群体聚集的存在形态时，现代汉语使用专门的「不定量词」与「集合量词」：\n\n一、不定量词体系（表示模糊不确定数量）：\n1.「些 (xiē)」—— 常与「一」、「这」、「那」、「哪」连用，表示复数多个事物（相当于 some / several / these / those）：\n- 一些书、一些苹果、一些外国留学生（一些 + 可数复数名词）\n- 这些人（these people）、那些事情（those things）、哪些汉字（which characters）\n2.「点儿 (diǎnr) / 一点儿」—— 用于修饰少量不可数名词或少量抽象事物（相当于 a little bit of）：\n- 一点儿水（a little water）、一点儿时间（a little time）、一点儿钱（a little money）\n- 我会说一点儿汉语。（表示掌握少量语言能力）\n\n二、成双与配对集合量词体系：\n1.「双 (shuāng)」—— 专用于两个完全对称、必须配合使用、或人体对称器官相关的物品：\n- 一双鞋子、两双袜子、三双竹筷子、一双皮手套、一双明亮的眼睛、一双勤劳的手。\n2.「对 (duì)」—— 用于成双成对、具有对应配合或夫妻伴侣关系的事物或人：\n- 一对恩爱夫妻、一对年轻情侣、一对金耳环、一对漂亮的石狮子、一对双胞胎兄弟。\n\n三、群体聚合量词体系：\n「群 (qún)」—— 专用于人或动物的大量聚集群体：\n- 一群大学生、一群外国游客、一群可爱的孩子、一群绵羊、一群飞翔的鸟儿。",
      "examples": [
        {
          "target": "我在书店买了一些很有趣的中国历史小说。(Wǒ zài shūdiàn mǎi le yìxiē hěn yǒuqù de Zhōngguó lìshǐ xiǎoshuō.)",
          "reading": "[wɔ˨˩ t͡saɪ̯˥˩ ʂu˥.tjɛn˥˩ maɪ̯˨˩˦ lɤ i˥.ɕjɛ xən˨˩ joʊ̯˨˩.t͡ɕʰy˥˩ tɤ ʈ͡ʂʊŋ˥.kwɔ˧˥ li˥˩.ʂɨ˨˩˦ ɕjaʊ̯˨˩.ʂwɔ˥] (Wǒ zài shū-diàn mǎi le yì-xiē hěn yǒu-qù de Zhōng-guó lì-shǐ xiǎo-shuō.)",
          "translation": "I bought some very interesting Chinese history novels at the bookstore."
        },
        {
          "target": "请给我一点儿时间，我马上就准备好。(Qǐng gěi wǒ yìdiǎnr shíjiān, wǒ mǎshàng jiù zhǔnbèi hǎo.)",
          "reading": "[t͡ɕʰiŋ˨˩ keɪ̯˨˩ wɔ˨˩ i˥.tjɛɻ˨˩˦ ʂɨ˧˥.t͡ɕjɛn˥, wɔ˨˩ ma˨˩.ʂɑŋ˥˩ t͡ɕjoʊ̯˥˩ ʈ͡ʂwən˨˩.peɪ̯˥˩ xaʊ˨˩˦] (Qǐng gěi wǒ yì-diǎnr shí-jiān, wǒ mǎ-shàng jiù zhǔn-bèi hǎo.)",
          "translation": "Please give me a little time; I will be ready immediately."
        },
        {
          "target": "服务员，请再给我们拿两双干净的筷子。(Fúwùyuán, qǐng zài gěi wǒmen ná liǎng shuāng gānjìng de kuàizi.)",
          "reading": "[fu˧˥.u˥˩.ɥɛn˧˥, t͡ɕʰiŋ˨˩ t͡saɪ̯˥˩ keɪ̯˨˩ wɔ˨˩.mən na˧˥ ljaŋ˨˩ ʂwɑŋ˥ kan˥.t͡ɕiŋ˥˩ tɤ kʰwaɪ̯˥˩.t͡sɨ] (Fú-wù-yuán, qǐng zài gěi wǒ-men ná liǎng shuāng gān-jìng de kuài-zi.)",
          "translation": "Waiter, please bring us two more pairs of clean chopsticks."
        },
        {
          "target": "操场上有一群外国留学生正在踢足球。(Cāochǎng shang yǒu yì qún wàiguó liúxuéshēng zhèngzài tī zúqiú.)",
          "reading": "[t͡sʰaʊ̯˥.ʈ͡ʂʰɑŋ˨˩˦ ʂɑŋ joʊ̯˨˩˦ i˥ t͡ɕʰyn˧˥ waɪ̯˥˩.kwɔ˧˥ ljoʊ̯˧˥.ɕɥɛ˧˥.ʂəŋ ʈ͡ʂɤŋ˥˩.t͡saɪ̯˥˩ tʰi˥ t͡swu˧˥.t͡ɕʰjoʊ̯˧˥] (Cāo-chǎng shang yǒu yì qún wài-guó liú-xué-shēng zhèng-zài tī zú-qiú.)",
          "translation": "There is a crowd of international students playing football on the sports field."
        }
      ],
      "mnemonics": [
        "一些复数点儿少（一些书、一点儿水），筷子鞋袜成「双」配；夫妻情侣成「对」对，人多聚集成「群」飞！"
      ],
      "culturalNotes": [
        "在传统中华礼俗中，「双」与「对」代表着吉祥圆满的「好事成双」文化寓意。民间婚庆喜事最讲究送礼送双数、贴「双喜」字、成双配对，忌讳单数单只。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在餐厅就餐时，修饰吃饭用的「筷子」应选用的标准量词是：",
          "options": [
            "双 (一双筷子) (shuāng - a pair of chopsticks)",
            "把",
            "张",
            "本"
          ],
          "answerIndex": 0,
          "explanation": "筷子是两支成套配合使用的对称餐具，必须使用量词「双（一双筷子）」。"
        },
        {
          "prompt": "要表达「我会说少量的汉语」，最地道的中文表达是：",
          "options": [
            "我会说一点儿汉语。(Wǒ huì shuō yìdiǎnr Hànyǔ.) (yìdiǎnr for a little bit of)",
            "我会说一些汉语。(xiē 多用于复数可数对象)",
            "我会说一只汉语。",
            "我会说一本汉语。"
          ],
          "answerIndex": 0,
          "explanation": "修饰不可数抽象的语言能力「少量」，固定搭配使用不定量词「一点儿」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "修饰公园里聚集成堆的很多游客时，应选用的集合量词是：",
          "options": [
            "群 (一群游客) (qún - crowd / flock)",
            "双",
            "对",
            "本"
          ],
          "answerIndex": 0,
          "explanation": "多人聚集而成的群体在汉语中使用集合量词「群（一群游客）」。"
        },
        {
          "prompt": "请选出下列句子中不定量词使用完全正确的一项：",
          "options": [
            "这些苹果很新鲜，请给我称两斤。(These apples are very fresh, please weigh two catties for me.)",
            "这群苹果很新鲜，请给我称两斤。",
            "这双苹果很新鲜，请给我称两斤。",
            "这对苹果很新鲜，请给我称两斤。"
          ],
          "answerIndex": 0,
          "explanation": "指示代词「这」与不定量词「些」组合构成「这些苹果（these apples）」，完全符合规范。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中量词与名词搭配全部正确的一项：",
          "options": [
            "王先生买了一双皮鞋、一对耳环和一些茶叶。(Mr. Wang bought a pair of leather shoes, a pair of earrings, and some tea.)",
            "王先生买了一群皮鞋、一双耳环和一点儿茶叶们。",
            "王先生买了一对皮鞋、一群耳环和一双茶叶。",
            "王先生买了一把皮鞋、一本耳环和一张茶叶。"
          ],
          "answerIndex": 0,
          "explanation": "皮鞋用「双」，耳环用「对」，茶叶用「一些」，完全契合各项量词语法规范。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入修饰鞋袜、手套、筷子等成双成套物品的专用单字量词汉字（拼音为 shuāng）：",
          "acceptedAnswers": [
            "双"
          ],
          "explanation": "汉字「双」专用于修饰两个对称配合使用的物品（如一双鞋、一双筷子）。"
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
    "title": "结构助词「的」作定语标记与名词修饰结构 (Structural Particle '的' & Attributive Modification)",
    "level": "A1",
    "objective": "系统掌握结构助词「的」作为定语标记的核心功能，熟练掌握「定语 + 的 + 中心语」修饰模型，并掌握「的」字在亲属称谓与单音节形容词中的省略规则。",
    "presentation": {
      "explanation": "结构助词「的 (de)」是现代标准汉语中使用频率最高的虚词之一，主要充当「定语标记」，用于连接修饰限制成分（定语）与被修饰的核心名词（中心语）。\n\n一、汉语修饰语的核心语序铁律：\n汉语中所有修饰语（定语、状语）**永远严格置于被修饰中心成分之前**：\n- 定语（修饰限制成分） + 的 + 中心语（核心名词）\n\n二、「的」字定语的三大核心语义功能：\n1. 表示领属所有关系（Possession）：\n- 我的书包、张老师的电脑、北京大学的图书馆、中国的传统文化。\n2. 表示性质、状态与属性修饰（Description）：\n- 漂亮的衣服、新鲜的水果、昂贵的汽车、安宁的环境、热烈友好的气氛。\n3. 动词短语或小句充当定语（相当于关系从句 Relative Clause）：\n- 我昨天买的书（the book that I bought yesterday）\n- 教我们汉语的王老师（Teacher Wang who teaches us Chinese）\n- 正在前面跑步的那个人（the person who is running in front）\n\n三、结构助词「的」的省略规则（地道汉语关键精髓）：\n1. 直系亲属与极亲密人际关系时，代词后常省略「的」：\n- 我爸爸（较少说成 *我的爸爸*）、我妈妈、我哥哥、我朋友、我们班。\n2. 指称所属的工作单位或集体组织时常省略「的」：\n- 我们学校、我们公司、我单位、我国政府。\n3. 单音节形容词直接修饰名词时通常不用「的」：\n- 白纸（不作 *白的纸*）、黑板、好人、大树、热茶、新书。\n4. 双音节形容词修饰名词时一般必须带「的」：\n- 干净的房间、漂亮的衣服、热情的同胞。",
      "examples": [
        {
          "target": "这是我昨天在书店买的那本汉语语法书。(Zhè shì wǒ zuótiān zài shūdiàn mǎi de nà běn Hànyǔ yǔfǎ shū.)",
          "reading": "[ʈ͡ʂɤ˥˩ ʂɨ˥˩ wɔ˨˩ t͡swɔ˧˥.tʰjɛn˥ t͡saɪ̯˥˩ ʂu˥.tjɛn˥˩ maɪ̯˨˩˦ tɤ na˥˩ pən˨˩ xan˥˩.y˨˩˦ y˨˩.fa˨˩˦ ʂu˥] (Zhè shì wǒ zuó-tiān zài shū-diàn mǎi de nà běn Hàn-yǔ yǔ-fǎ shū.)",
          "translation": "This is that Chinese grammar book that I bought at the bookstore yesterday."
        },
        {
          "target": "李老师是一位非常热情、和蔼的好老师。(Lǐ lǎoshī shì yí wèi fēicháng rèqíng, hé'ǎi de hǎo lǎoshī.)",
          "reading": "[li˨˩˦ laʊ˨˩.ʂɨ˥ ʂɨ˥˩ i˧˥ weɪ̯˥˩ feɪ̯˥.ʈ͡ʂʰɑŋ˧˥ ʐɤ˥˩.t͡ɕʰiŋ˧˥, xɤ˧˥.aɪ̯˨˩˦ tɤ xaʊ˨˩˦ laʊ˨˩.ʂɨ˥] (Lǐ lǎo-shī shì yí wèi fēi-cháng rè-qíng, hé-'ǎi de hǎo lǎo-shī.)",
          "translation": "Teacher Li is a very warm and amiable good teacher."
        },
        {
          "target": "我爸爸每天早晨都在公园里打太极拳。(Wǒ bàba měitiān zǎochén dōu zài gōngyuán li dǎ tàijíquán.)",
          "reading": "[wɔ˨˩ ˈpa˥˩.pa meɪ̯˨˩.tʰjɛn˥ t͡saʊ˨˩.ʈ͡ʂʰən˧˥ toʊ̯˥ t͡saɪ̯˥˩ kʊŋ˥.ɥɛn˧˥ li ta˨˩˦ tʰaɪ̯˥˩.t͡ɕi˧˥.t͡ɕʰɥɛn˧˥] (Wǒ bà-ba měi-tiān zǎo-chén dōu zài gōng-yuán li dǎ tài-jí-quán.)",
          "translation": "My dad practices Tai Chi in the park every morning."
        },
        {
          "target": "中国是一个拥有五千年悠久历史的文明古国。(Zhōngguó shì yí gè yōngyǒu wǔqiān nián yōujiǔ lìshǐ de wénmíng gǔguó.)",
          "reading": "[ʈ͡ʂʊŋ˥.kwɔ˧˥ ʂɨ˥˩ i˧˥ kɤ jʊŋ˥.joʊ̯˨˩˦ u˨˩˦.t͡ɕʰjɛn˥ njɛn˧˥ joʊ̯˥.t͡ɕjoʊ̯˨˩˦ li˥˩.ʂɨ˨˩˦ tɤ wən˧˥.miŋ˧˥ ku˨˩.kwɔ˧˥] (Zhōng-guó shì yí gè yōng-yǒu wǔ-qiān nián yōu-jiǔ lì-shǐ de wén-míng gǔ-guó.)",
          "translation": "China is an ancient civilization with a long history of 5,000 years."
        }
      ],
      "mnemonics": [
        "修饰成分在前面，定语后头加个「的」；领属关系性状貌，亲属亲近「的」可抛！"
      ],
      "culturalNotes": [
        "在汉字「的三兄弟」（的、地、得）中，「的」是修饰名词的定语标记（白色的花），「地」是修饰动词的状语标记（认真地学习），「得」是连接动词与补语的标记（跑得很快），三者分工明确，是现代汉语书面语规范的基石。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在句子「这是教我们汉语______王老师」中，定语与中心语之间应填入的结构助词是：",
          "options": [
            "的 (de) —— 动词短语作定语修饰名词中心语 (Attributive marker de)",
            "地 (de)",
            "得 (de)",
            "了 (le)"
          ],
          "answerIndex": 0,
          "explanation": "「教我们汉语」充当定语修饰中心语名词「王老师」，必须使用定语结构助词「的」。"
        },
        {
          "prompt": "下列短语中，哪一个由于属于亲属或单音节形容词而最自然省略「的」？",
          "options": [
            "我妈妈 (My mom - omission of de for immediate family)",
            "漂亮衣服 (双音节形容词应加「的」)",
            "中国历史 (特定专有名词)",
            "我昨天买书 (动词从句定语不可省「的」)"
          ],
          "answerIndex": 0,
          "explanation": "指称直系亲属称谓时代词后通常省略「的」，直称「我妈妈」、「我爸爸」最为自然地道。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "将句子「这本书是李华的」中「的」字结构还原为其省略的中心语，其完整含义是：",
          "options": [
            "这本书是李华的书 (This book is Li Hua's book)",
            "这本书是李华的老师",
            "这本书是李华的电脑",
            "这本书是李华的朋友"
          ],
          "answerIndex": 0,
          "explanation": "「名词 + 的」构成「的字短语」，在此处省略了与主语相同的中心语「书」。"
        },
        {
          "prompt": "请选出下列句子中修饰语语序完全符合汉语规范的一项：",
          "options": [
            "北京大学的图书馆很安静。(Peking University's library is very quiet.)",
            "图书馆北京大学的很大。(语序错乱)",
            "安静很北京大学图书馆。(语序颠倒)",
            "北京大学图书馆很安静的。(句末杂糅)"
          ],
          "answerIndex": 0,
          "explanation": "「定语（北京大学的）+ 中心语（图书馆）+ 谓语（很安静）」结构完全标准规范。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中定语标记「的」使用与语序完全正确的一项：",
          "options": [
            "我昨天买的那本汉语词典非常实用。(The Chinese dictionary that I bought yesterday is very practical.)",
            "我买的那本汉语词典昨天非常实用。(时间状语位置颠倒)",
            "昨天买的那本汉语词典我的非常实用。(领属定语位置倒置)",
            "汉语词典我昨天买的那本非常实用的。(中心语前置错误)"
          ],
          "answerIndex": 0,
          "explanation": "「领属代词（我）+ 时间与动词定语（昨天买的）+ 数量短语（那本）+ 中心语（汉语词典）」语序完全严密。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入充当定语修饰名词标记的结构助词单字汉字（拼音为 de）：",
          "acceptedAnswers": [
            "的"
          ],
          "explanation": "汉字「的」是现代汉语中最核心的定语结构助词标记。"
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
    "title": "高频日常生活行为动词系统与典型一日作息 (Daily Routine Verbs & Typical Day Schedule)",
    "level": "A1",
    "objective": "系统掌握现代汉语高频日常生活动作动词与离合词动宾搭配（起床/洗脸/吃早饭/上课/下班/睡觉），能够结合时间状语流畅叙述个人一日作息安排。",
    "presentation": {
      "explanation": "熟练掌握日常生活核心行为动词以及汉语独特的「动宾离合结构」，是进行日常时间管理、生活叙事与交际对话的基石。\n\n一、一日典型生活作息核心动词分类体系：\n1. 清晨起居与洗漱动作：\n- 起床 (qǐchuáng，动宾离合词：离开床铺起身)\n- 刷牙 (shuāyá，动宾搭配：用牙刷清洁牙齿)\n- 洗脸 (xǐliǎn，动宾搭配：清洁面部)\n- 洗澡 (xǐzǎo，动宾离合词：沐浴冲凉)\n- 穿衣服 (chuān yīfu，动宾搭配：穿戴衣物)\n\n2. 一日三餐饮食动作：\n- 吃早饭 (chī zǎofàn，吃早餐)\n- 吃午饭 (chī wǔfàn，吃午餐)\n- 吃晚饭 (chī wǎnfàn，吃晚餐)\n- 喝茶 / 喝水 / 喝咖啡 (hē chá / hē shuǐ / hē kāfēi)\n\n3. 学习、工作与事务动作：\n- 去学校 / 去公司 (qù xuéxiào / qù gōngsī)\n- 上课 (shàngkè，开始或进行课程) <-> 下课 (xiàkè，课程结束)\n- 上班 (shàngbān，开始工作) <-> 下班 (xiàbān，结束一天工作)\n- 做作业 (zuò zuòyè，完成课后练习)\n- 开会 (kāihuì，参加会议)\n\n4. 晚间休闲与就寝动作：\n- 散步 (sànbù，悠闲步行)\n- 运动 / 锻炼身体 (yùndòng / duànliàn shēntǐ)\n- 看书 / 看报纸 (kànshū / kàn bàozhǐ)\n- 看电视 / 看电影 (kàn diànshì / kàn diànyǐng)\n- 上网 (shàngwǎng，浏览互联网)\n- 睡觉 (shuìjiào，动宾离合词：进入睡眠)\n\n二、作息时间表达的句法语序模型：\n- 主语 + [时间状语] + 谓语动词 + 宾语\n- 范例：我 [每天早上七点半] 起床，[八点] 去教室上课。",
      "examples": [
        {
          "target": "我每天早晨七点准时起床，洗脸、刷牙后去食堂吃早饭。(Wǒ měitiān zǎochén qī diǎn zhǔnshí qǐchuáng, xǐliǎn, shuāyá hòu qù shítáng chī zǎofàn.)",
          "reading": "[wɔ˨˩ meɪ̯˨˩.tʰjɛn˥ t͡saʊ˨˩.ʈ͡ʂʰən˧˥ t͡ɕʰi˥ tjɛn˨˩˦ ʈ͡ʂwən˨˩.ʂɨ˧˥ t͡ɕʰi˨˩.ʈ͡ʂʰwɑŋ˧˥, ɕi˨˩.ljɛn˨˩˦, ʂwa˥.ja˧˥ xoʊ̯˥˩ t͡ɕʰy˥˩ ʂɨ˧˥.tʰɑŋ˧˥ t͡ʂʰɨ˥ t͡saʊ˨˩.fan˥˩] (Wǒ měi-tiān zǎo-chén qī diǎn zhǔn-shí qǐ-chuáng, xǐ-liǎn, shuā-yá hòu qù shí-táng chī zǎo-fàn.)",
          "translation": "I get up punctually at 7:00 every morning, wash my face and brush my teeth, and then go to the dining hall for breakfast."
        },
        {
          "target": "我们上午八点半开始上课，中午十二点下课。(Wǒmen shàngwǔ bā diǎn bàn kāishǐ shàngkè, zhōngwǔ shí'èr diǎn xiàkè.)",
          "reading": "[wɔ˨˩.mən ʂɑŋ˥˩.u˨˩˦ pa˥ tjɛn˨˩˦ pan˥˩ kʰaɪ̯˥.ʂɨ˨˩˦ ʂɑŋ˥˩.kʰɤ˥˩, ʈ͡ʂʊŋ˥.u˨˩˦ ʂɨ˧˥.aɻ˥˩ tjɛn˨˩˦ ɕja˥˩.kʰɤ˥˩] (Wǒ-men shàng-wǔ bā diǎn bàn kāi-shǐ shàng-kè, zhōng-wǔ shí-'èr diǎn xià-kè.)",
          "translation": "We start class at 8:30 in the morning and finish class at 12:00 noon."
        },
        {
          "target": "李老师每天下午五点半下班，晚上常常在操场上散步。(Lǐ lǎoshī měitiān xiàwǔ wǔ diǎn bàn xiàbān, wǎnshang chángcháng zài cāochǎng shang sànbù.)",
          "reading": "[li˨˩˦ laʊ˨˩.ʂɨ˥ meɪ̯˨˩.tʰjɛn˥ ɕja˥˩.u˨˩˦ u˨˩˦ tjɛn˨˩˦ pan˥˩ ɕja˥˩.pan˥, wan˨˩.ʂaŋ ʈ͡ʂʰɑŋ˧˥.ʈ͡ʂʰɑŋ˧˥ t͡saɪ̯˥˩ t͡sʰaʊ̯˥.ʈ͡ʂʰɑŋ˨˩˦ ʂɑŋ san˥˩.pu˥˩] (Lǐ lǎo-shī měi-tiān xià-wǔ wǔ diǎn bàn xià-bān, wǎn-shang cháng-cháng zài cāo-chǎng shang sàn-bù.)",
          "translation": "Teacher Li gets off work at 5:30 every afternoon and often takes a walk on the sports ground in the evening."
        },
        {
          "target": "我通常在晚上十一点左右上床睡觉。(Wǒ tōngcháng zài wǎnshang shíyī diǎn zuǒyòu shàngchuáng shuìjiào.)",
          "reading": "[wɔ˨˩ tʰʊŋ˥.ʈ͡ʂʰɑŋ˧˥ t͡saɪ̯˥˩ wan˨˩.ʂaŋ ʂɨ˧˥.i˥ tjɛn˨˩˦ t͡swɔ˨˩.joʊ̯˥˩ ʂɑŋ˥˩.ʈ͡ʂʰwɑŋ˧˥ ʂweɪ̯˥˩.t͡ɕjaʊ̯˥˩] (Wǒ tōng-cháng zài wǎn-shang shí-yī diǎn zuǒ-yòu shàng-chuáng shuì-jiào.)",
          "translation": "I usually go to bed to sleep at around 11:00 PM."
        }
      ],
      "mnemonics": [
        "清晨起床刷牙脸，上课上班步步前；午后下课晚散步，夜深安稳入睡眠！"
      ],
      "culturalNotes": [
        "现代中国大学与企业普遍保有午休习惯（中午12:00至14:00之间），师生或职员在吃完午饭后常有短暂的小憩，以保证下午与晚间拥有充沛的精力与工作效率。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在下列日常作息动词中，表示「结束课程走出教室」的是：",
          "options": [
            "下课 (xiàkè) (Finish class)",
            "上课 (shàngkè)",
            "下班 (xiàbān)",
            "上班 (shàngbān)"
          ],
          "answerIndex": 0,
          "explanation": "「下课」表示课程结束（Class is over）；「下班」则专指工作下班。"
        },
        {
          "prompt": "要表达「我每天早上七点半起床」，正确的语序结构是：",
          "options": [
            "我每天早上七点半起床。(Wǒ měitiān zǎoshang qī diǎn bàn qǐchuáng.) (Subject + Time + Verb)",
            "我起床每天早上七点半。(时间状语置后病句)",
            "起床我每天早上七点半。(动词句首错位)",
            "每天我起床早上七点半。(时间拆裂错误)"
          ],
          "answerIndex": 0,
          "explanation": "时间状语「每天早上七点半」严格置于主语「我」之后、动词「起床」之前。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "下列哪一组动词词组完全属于清晨起居与洗漱行为？",
          "options": [
            "起床、刷牙、洗脸、吃早饭 (Get up, brush teeth, wash face, eat breakfast)",
            "下班、睡觉、做作业、开会",
            "散步、看电视、下课、买菜",
            "上网、打球、开会、看电影"
          ],
          "answerIndex": 0,
          "explanation": "起床、刷牙、洗脸、吃早饭构成了清晨标准的晨间作息链条。"
        },
        {
          "prompt": "请选出下列句子中表达「就寝入睡」最地道规范的动词搭配：",
          "options": [
            "睡觉 (shuìjiào) (To sleep)",
            "睡床",
            "眠觉",
            "歇宿"
          ],
          "answerIndex": 0,
          "explanation": "现代标准汉语中最通用、最自然的表达就寝睡眠的动词是「睡觉 (shuìjiào)」或「去睡觉」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列作息叙述中逻辑合理且语序完全规范的一项：",
          "options": [
            "王华每天上午八点去学校上课，中午在食堂吃午饭，晚上十一点睡觉。(Wang Hua goes to school for class at 8:00 AM every day, eats lunch in the canteen at noon, and sleeps at 11:00 PM.)",
            "王华每天去学校上课上午八点，在食堂吃午饭中午。(时间状语全部置后错误)",
            "王华上课上午八点，睡觉在十一点晚上。(语序错乱)",
            "王华在十一点睡觉晚上，吃午饭在中午食堂。(介词与时间倒置)"
          ],
          "answerIndex": 0,
          "explanation": "时间状语均置于动词之前，作息时间线清晰顺畅，句式完全规范。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示早晨离开床铺「起身起床」的动宾词组首字汉字（拼音为 qǐ）：",
          "acceptedAnswers": [
            "起"
          ],
          "explanation": "汉字「起」在「起床」中表示起身离开床榻。"
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
    "title": "动词重叠形式（AA、A一A、A了A、ABAB）及其语气功能 (Verb Reduplication)",
    "level": "A1",
    "objective": "系统掌握单音节动词（AA/A一A/A了A）与双音节动词（ABAB）的重叠规则，理解动词重叠表达「短暂短时」、「尝试做」以及「缓和亲切语气」的语法功能。",
    "presentation": {
      "explanation": "动词重叠是现代标准汉语极具类型学特色的形态句法手段，通过将动词词根重叠，改变动作的「时量体貌」与「语用情态」。\n\n一、动词重叠的核心形态结构模式：\n1. 单音节动词重叠式：\n- 基本重叠式 AA：看看 (kànkan)、听听 (tīngting)、想想 (xiǎngxiang)、问问 (wènwen)、说说 (shuōshuo)、试试 (shìshi)。特别注意：第二个音节一律弱化读轻声！\n- 扩展重叠式 A一A（用于未发生或祈使动作）：看一看 (kàn yí kàn)、听一听 (tīng yí tīng)、想一想 (xiǎng yì xiǎng)、尝一尝 (cháng yì cháng)、走一走 (zǒu yì zǒu)。\n- 完成重叠式 A了A / A了一A（用于已发生完毕的短暂动作）：看了看 (kàn le kàn)、试了试 (shì le shì)、听了听 (tīng le tīng)。\n\n2. 双音节动词重叠式：\n- 规则重叠式 ABAB：学习学习 (xuéxí xuéxí)、休息休息 (xiūxi xiūxi)、介绍介绍 (jièshào jièshào)、讨论讨论 (tǎolùn tǎolùn)、准备准备 (zhǔnbèi zhǔnbèi)、运动运动 (yùndòng yùndòng)。\n- **核心语法禁忌**：动词重叠式绝对**不能**重叠为 *AABB* 形式！（AABB 形式如「高高兴兴、清清楚楚、漂漂亮亮」专属于形容词重叠，绝不可用于动词！）。\n\n二、动词重叠的三大核心语义与语用功能：\n1. 表示动作经历的时间极其短暂、动量微小（短暂体/短时量）：\n- 我在外面散散步。（散步时间不长）\n2. 表示尝试做某事（尝试态，try to do something）：\n- 请你尝尝这道中国菜。（品尝一下味道）\n- 这件衣服很合身，你可以穿穿看。\n3. 极大地缓和祈使语气，使说话口吻显得温和、亲切、礼貌与随和：\n- 您帮我想想办法，好吗？（比「你想办法」更加委婉客气）\n- 大家休息休息吧！（亲切建议）",
      "examples": [
        {
          "target": "这件新外套样式非常好看，你穿上试试吧！(Zhè jiàn xīn wàitào yàngshì fēicháng hǎokàn, nǐ chuānshang shìshi ba!)",
          "reading": "[ʈ͡ʂɤ˥˩ t͡ɕjɛn˥˩ ɕin˥ waɪ̯˥˩.tʰaʊ̯˥˩ jɑŋ˥˩.ʂɨ˥˩ feɪ̯˥.ʈ͡ʂʰɑŋ˧˥ xaʊ˨˩.kʰan˥˩, ni˨˩˦ ʈ͡ʂʰwan˥.ʂɑŋ ʂɨ˥˩.ʂɨ pa] (Zhè jiàn xīn wài-tào yàng-shì fēi-cháng hǎo-kàn, nǐ chuān-shang shì-shi ba!)",
          "translation": "The style of this new jacket is very good-looking; please put it on and give it a try!"
        },
        {
          "target": "我们学习了一个下午，去操场上散散步、放松放松吧。(Wǒmen xuéxí le yí gè xiàwǔ, qù cāochǎng shang sànsanbù, fàngsōng fàngsōng ba.)",
          "reading": "[wɔ˨˩.mən ɕɥɛ˧˥.ɕi˧˥ lɤ i˧˥ kɤ ɕja˥˩.u˨˩˦, t͡ɕʰy˥˩ t͡sʰaʊ̯˥.ʈ͡ʂʰɑŋ˨˩˦ ʂɑŋ san˥˩.san.pu˥˩, fɑŋ˥˩.sʊŋ˥ fɑŋ˥˩.sʊŋ˥ pa] (Wǒ-men xué-xí le yí gè xià-wǔ, qù cāo-chǎng shang sàn-san-bù, fàng-sōng fàng-sōng ba.)",
          "translation": "We have studied for an entire afternoon; let's go take a walk on the sports ground and relax a bit."
        },
        {
          "target": "请您听一听这段录音，然后回答后面的问题。(Qǐng nín tīng yí tīng zhè duàn lùyīn, ránhòu huídá hòumiàn de wèntí.)",
          "reading": "[t͡ɕʰiŋ˨˩ nin˧˥ tʰiŋ˥ i˧˥ tʰiŋ˥ ʈ͡ʂɤ˥˩ twan˥˩ lu˥˩.in˥, ʐan˧˥.xoʊ̯˥˩ xweɪ̯˧˥.ta˧˥ xoʊ̯˥˩.mjɛn˥ tɤ wən˥˩.tʰi˧˥] (Qǐng nín tīng yí tīng zhè duàn lù-yīn, rán-hòu huí-dá hòu-miàn de wèn-tí.)",
          "translation": "Please listen to this audio recording and then answer the questions that follow."
        },
        {
          "target": "老师，请您给我们介绍介绍中国的传统书法。(Lǎoshī, qǐng nín gěi wǒmen jièshào jièshào Zhōngguó de chuántǒng shūfǎ.)",
          "reading": "[laʊ˨˩.ʂɨ˥, t͡ɕʰiŋ˨˩ nin˧˥ keɪ̯˨˩ wɔ˨˩.mən t͡ɕjɛ˥˩.ʂaʊ̯˥˩ t͡ɕjɛ˥˩.ʂaʊ̯˥˩ ʈ͡ʂʊŋ˥.kwɔ˧˥ tɤ t͡ʂʰwan˧˥.tʰʊŋ˨˩˦ ʂu˥.fa˨˩˦] (Lǎo-shī, qǐng nín gěi wǒ-men jiè-shào jiè-shào Zhōng-guó de chuán-tǒng shū-fǎ.)",
          "translation": "Teacher, please introduce traditional Chinese calligraphy to us a bit."
        }
      ],
      "mnemonics": [
        "单音动词重叠轻（看看听听想一想），双音重叠 ABAB（学习学习休息休息）；尝试短时语气软，绝无 AABB 动词串！"
      ],
      "culturalNotes": [
        "在汉文化的人际交往中，直接使用单音节动词发号施令（如「你吃」、「你看」）容易显得生硬甚至粗鲁；而使用动词重叠（「你尝尝」、「你看一看」）则能极大地增添亲和力与礼貌分寸感。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "双音节动词「休息 (xiūxi)」在现代标准汉语中的正确动词重叠形式是：",
          "options": [
            "休息休息 (xiūxi xiūxi) —— 双音节动词重叠采用 ABAB 式 (ABAB for disyllabic verbs)",
            "休休息息 (这是错误的 AABB 式)",
            "休息一休息",
            "休一休息"
          ],
          "answerIndex": 0,
          "explanation": "现代汉语双音节动词的重叠形式严格为 ABAB 式（休息休息、学习学习），不可使用 AABB 式。"
        },
        {
          "prompt": "在句子「请你______这道菜的味道」中，表达尝试品尝且语气委婉的动词重叠式是：",
          "options": [
            "尝尝 (chángchang) 或 尝一尝 (cháng yì cháng) (Try tasting - polite/tentative)",
            "尝尝尝",
            "尝了尝了",
            "品尝品尝尝"
          ],
          "answerIndex": 0,
          "explanation": "单音节动词重叠为 AA 式（尝尝）或 A一A 式（尝一尝），表示尝试与客气请求。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "下列哪一个词语属于形容词重叠而非动词重叠？",
          "options": [
            "高高兴兴 (Gāogāoxìngxìng - AABB 形容词重叠) (AABB is for adjectives)",
            "介绍介绍 (动词 ABAB 重叠)",
            "学习学习 (动词 ABAB 重叠)",
            "讨论讨论 (动词 ABAB 重叠)"
          ],
          "answerIndex": 0,
          "explanation": "「高高兴兴」属于形容词的 AABB 重叠式；动词重叠形式一律为 ABAB。"
        },
        {
          "prompt": "在单音节动词 AA 重叠式（如「看看」、「想想」）中，第二个音节的正确发音调值为：",
          "options": [
            "轻声 (Neutral tone for the 2nd reduplicated syllable)",
            "第一声阴平",
            "第四声去声",
            "保持原调不变"
          ],
          "answerIndex": 0,
          "explanation": "单音节动词重叠后，第二个音节在普通话口语中必须弱化读作轻声。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中动词重叠运用完全规范得体的一项：",
          "options": [
            "这个问题很有意思，大家一起讨论讨论吧！(This question is very interesting; let's discuss it together!)",
            "这个问题很有意思，大家一起讨讨论论吧！(动词不可用 AABB 重叠)",
            "这个问题很有意思，大家一起讨论一讨论吧！",
            "这个问题很有意思，大家一起讨一讨论吧！"
          ],
          "answerIndex": 0,
          "explanation": "双音节动词「讨论」重叠为 ABAB 式「讨论讨论」，完全符合汉语语法标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入动词「看」在扩展重叠式「看一看」中嵌入的核心单字数词汉字（拼音为 yī）：",
          "acceptedAnswers": [
            "一"
          ],
          "explanation": "单音节动词 A一A 扩展重叠式中嵌入基数词「一」（如看一看、听一听）。"
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
    "title": "核心动态助词「在/正在/正......呢」表示动作进行体 (Progressive Aspect: 在/正在...呢)",
    "level": "A1",
    "objective": "系统掌握现代汉语动作进行体标记（在/正在/正......呢）的句型结构，掌握使用「没在/没有在」进行严格否定的语法规则，杜绝「不在」误用。",
    "presentation": {
      "explanation": "现代标准汉语通过动态副词（在、正、正在）与句末语气助词「呢」的相互配合，标记某一动作在特定时间点处于持续展开的「进行体（Progressive Aspect）」状态。\n\n一、动作进行体的四大标准句法模式：\n1.「主语 + 在 + 动词短语」—— 最中性、最普遍的进行体表达：\n- 老师在讲语法。\n- 他在听音乐。\n\n2.「主语 + 正在 + 动词短语」—— 突出强调动作恰好在此时此刻正在进行：\n- 同学们正在写汉字作业。\n- 外面正在下大雪。\n\n3.「主语 + 正 + 动词短语 + 呢」—— 带有生动的口语现场感：\n- 我们正开会呢。\n- 我正吃午饭呢。\n\n4.「主语 + 正在 + 动词短语 + 呢」—— 标记最为完整完备的进行体格式：\n- 爸爸正在厨房做晚饭呢。\n- 留学生们正在操场踢足球呢。\n\n二、进行体的否定铁律（极重要避坑考点）：\n1. 进行体的否定形式**必须使用「没 (méi)」或「没有在 (méiyǒu zài)」**：\n- 他没在睡觉，他在看书。(He is not sleeping; he is reading.)\n- 我刚才没有在玩手机。(I was not playing on my phone just now.)\n2. **绝对禁忌**：绝不能用「*不在*」来否定动作进行体！\n- 「不在」表示空间处所上的「不在某地」（如：他不在办公室）或指人去世（不在人世），绝无否定动作进行的功能！\n\n三、询问进行体动作的核心交际句型：\n- 问：你在做什么呢？ / 你正在干什么？(Nǐ zài zuò shénme ne? / Nǐ zhèngzài gàn shénme?)\n- 答：我正在准备明天的中文考试呢。(Wǒ zhèngzài zhǔnbèi míngtiān de Zhōngwén kǎoshì ne.)",
      "examples": [
        {
          "target": "——请问，王老师在办公室吗？——他没在办公室，他正在教室给学生上课呢。(—Qǐngwèn, Wáng lǎoshī zài bàngōngshì ma? —Tā méi zài bàngōngshì, tā zhèngzài jiàoshì gěi xuésheng shàngkè ne.)",
          "reading": "[—t͡ɕʰiŋ˨˩.wən˥˩, wɑŋ˧˥ laʊ˨˩.ʂɨ˥ t͡saɪ̯˥˩ pan˥.kʊŋ˥.ʂɨ˥˩ ma? —tʰa˥ meɪ̯˧˥ t͡saɪ̯˥˩ pan˥.kʊŋ˥.ʂɨ˥˩, tʰa˥ ʈ͡ʂɤŋ˥˩.t͡saɪ̯˥˩ t͡ɕjaʊ̯˥˩.ʂɨ˥˩ keɪ̯˨˩ ɕɥɛ˧˥.ʂəŋ ʂɑŋ˥˩.kʰɤ˥˩ nɤ] (—Qǐng-wèn, Wáng lǎo-shī zài bàn-gōng-shì ma? —Tā méi zài bàn-gōng-shì, tā zhèng-zài jiào-shì gěi xué-sheng shàng-kè ne.)",
          "translation": "—Excuse me, is Teacher Wang in the office? —He is not in the office; he is teaching class to students in the classroom right now."
        },
        {
          "target": "外面正下着雨呢，你出门记得带一把雨伞。(Wàimiàn zhèng xiàzhe yǔ ne, nǐ chūmén jìde dài yì bǎ yǔsǎn.)",
          "reading": "[waɪ̯˥˩.mjɛn˥˩ ʈ͡ʂɤŋ˥˩ ɕja˥˩.ʈ͡ʂɤ y˨˩˦ nɤ, ni˨˩˦ t͡ʂʰu˥.mən˧˥ t͡ɕi˥˩.tɤ taɪ̯˥˩ i˧˥ pa˨˩˦ y˨˩.san˨˩˦] (Wài-miàn zhèng xià-zhe yǔ ne, nǐ chū-mén jì-de dài yì bǎ yǔ-sǎn.)",
          "translation": "It is raining outside; remember to take an umbrella when you go out."
        },
        {
          "target": "我们正在图书馆认真查阅古代汉语文献。(Wǒmen zhèngzài túshūguǎn rènzhēn cháyuè gǔdài Hànyǔ wénxiàn.)",
          "reading": "[wɔ˨˩.mən ʈ͡ʂɤŋ˥˩.t͡saɪ̯˥˩ tʰu˧˥.ʂu˥.kwan˨˩˦ ʐən˥˩.ʈ͡ʂən˥ ʈ͡ʂʰa˧˥.ɥɛ˥˩ ku˨˩.taɪ̯˥˩ xan˥˩.y˨˩˦ wən˧˥.ɕjɛn˥˩] (Wǒ-men zhèng-zài tú-shū-guǎn rèn-zhēn chá-yuè gǔ-dài Hàn-yǔ wén-xiàn.)",
          "translation": "We are earnestly consulting ancient Chinese literature in the library."
        },
        {
          "target": "他没在看电视，他正专心致志地做练习题呢。(Tā méi zài kàn diànshì, tā zhèng zhuānxīnzhìzhì de zuò liànxítí ne.)",
          "reading": "[tʰa˥ meɪ̯˧˥ t͡saɪ̯˥˩ kʰan˥˩ tjɛn˥˩.ʂɨ˥˩, tʰa˥ ʈ͡ʂɤŋ˥˩ ʈ͡ʂwan˥.ɕin˥.ʈ͡ʂɨ˥˩.ʈ͡ʂɨ˥˩ tɤ t͡swɔ˥˩ ljɛn˥˩.ɕi˧˥.tʰi˧˥ nɤ] (Tā méi zài kàn diàn-shì, tā zhèng zhuān-xīn-zhì-zhì de zuò liàn-xí-tí ne.)",
          "translation": "He is not watching TV; he is attentively doing practice exercises."
        }
      ],
      "mnemonics": [
        "正在正正在进行，句末加「呢」声动听；否定一律用「没在」，「不在」表人非进行！"
      ],
      "culturalNotes": [
        "汉语作为一种无形态屈折（Non-inflectional）的孤立语，表达动作进行体不依赖动词词尾加 -ing 等屈折变化，而是巧妙借助虚词「在」、「正」、「正在」以及句末语气词「呢」来实现，展现了汉语语法意合为主的灵动之美。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "要表达「他现在没有在睡觉（进行体否定）」，正确的中文句子是：",
          "options": [
            "他没在睡觉 / 他没有在睡觉 (Tā méi zài shuìjiào - negate progressive with méi/méiyǒu)",
            "他不在睡觉 (用「不在」否定进行体属于严重病句)",
            "他不正在睡觉",
            "他没睡觉在"
          ],
          "answerIndex": 0,
          "explanation": "否定动作进行体必须使用「没在」或「没有在」，绝不能使用「不在」。"
        },
        {
          "prompt": "在句子「大家______认真听老师讲课呢」中，最适合填入的进行体副词是：",
          "options": [
            "正在 (zhèngzài) (Progressive marker correlating with ne)",
            "常常",
            "已经",
            "就要"
          ],
          "answerIndex": 0,
          "explanation": "副词「正在」与句末语气助词「呢」前后呼应，完美构成标准的动作进行体句式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "要向朋友询问「你现在正在做什么？」，最地道自然的中文表达是：",
          "options": [
            "你在做什么呢？(Nǐ zài zuò shénme ne?) (What are you doing?)",
            "你做什么是现在？",
            "现在你是做什么？",
            "你在哪里做什么呢是？"
          ],
          "answerIndex": 0,
          "explanation": "「你在做什么呢？」是询问当前正在发生动作的最经典地道句式。"
        },
        {
          "prompt": "下列哪一个句子由于错误使用「不在」否定动作进行体而构成了病句？",
          "options": [
            "他不在写作业，在玩电脑游戏。(病句：应使用「没在写作业」) (Incorrect use of bù zài for progressive)",
            "他没在写作业，在玩电脑游戏。",
            "他不在办公室，在图书馆。",
            "张老师不在学校。"
          ],
          "answerIndex": 0,
          "explanation": "否定动作进行体必须用「没在写作业」，不能用「不在写作业」。「不在办公室」则是正确的处所否定。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列问答对话中关于动作进行体表达完全准确规范的一组：",
          "options": [
            "甲：李华在做什么呢？ 乙：他正在宿舍听中国现代音乐呢。",
            "甲：李华做什么在呢？ 乙：他做正在宿舍听中国现代音乐。",
            "甲：李华不在做什么？ 乙：他不正在宿舍听音乐。",
            "甲：李华在做什么呢？ 乙：他在听音乐宿舍正在呢。"
          ],
          "answerIndex": 0,
          "explanation": "提问「在做什么呢」与回答「正在......呢」结构完全严密，处所与动词语序精准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入进行体结构「正在......呢」中常置于句末表达进行语气的助词单字汉字（拼音为 ne）：",
          "acceptedAnswers": [
            "呢"
          ],
          "explanation": "语气助词「呢」常置于句末辅助加强动作进行体的现场感与语气。"
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
    "title": "空间存在与处所介词「在」字句及其句法位置 (Locative Preposition '在' & Spatial S-在-P-V-O Order)",
    "level": "A1",
    "objective": "准确辨析「在」作为动词（表存在）与作为处所介词（引出地点状语）的双重语法功能，牢记「主语 + 在处所 + 动词 + 宾语」的核心句法语序铁律。",
    "presentation": {
      "explanation": "汉字「在 (zài)」在现代汉语中兼具两大核心语法功能：一是在主谓句中充当表示存在的「动词（Verb）」；二是充当引出动作发生地点的「处所介词（Preposition）」充当状语。\n\n一、「在」充当全动词（表示人或物存在于某空间）：\n- 句式结构：主语 + 在 + 处所名词\n- 范例：\n- 张老师在办公室。(Teacher Zhang is in the office.)\n- 同学们在图书馆。(Students are in the library.)\n- 词典在桌子上。(The dictionary is on the table.)\n- 否定形式：主语 + 不在 + 处所（如：他今天不在学校）。\n\n二、「在」充当处所介词（引出动作发生地点的介词短语作状语）：\n- **核心句法黄金语序铁律**：\n- 主语 + [介词「在」 + 处所名词] + 谓语动词 + 宾语\n- 范例：\n- 我们 [在食堂] 吃午饭。(We eat lunch in the dining hall.)\n- 他们 [在操场] 踢足球。(They play football on the sports field.)\n- 我 [在图书馆] 借了两本中国历史书。(I borrowed two Chinese history books in the library.)\n\n三、认知哲学动因与初学者高频病句避坑：\n1. 汉民族认知遵循「空间背景在先，动作行为在后」的思维逻辑——人必须先处于某一物理空间场景之中，动作行为才能在该空间内展开。因此，介词短语「在+处所」**绝对必须置于谓语动词之前**！\n2. 严重错误对比：\n- 严重病句（受英语 S-V-O-Locative 负迁移影响）：*我们在吃午饭在食堂* / *我看书在图书馆*\n- 规范汉语（标准 S-在-P-V-O）：我们在食堂吃午饭。 / 我在图书馆看书。\n\n四、询问动作发生地点的标准疑问句式：\n- 问：你在哪儿吃午饭？(Nǐ zài nǎr chī wǔfàn?)\n- 答：我在第二学生食堂吃午饭。(Wǒ zài dì-èr xuésheng shítáng chī wǔfàn.)",
      "examples": [
        {
          "target": "我们每天下午都在学校图书馆三楼认真看书。(Wǒmen měitiān xiàwǔ dōu zài xuéxiào túshūguǎn sān lóu rènzhēn kànshū.)",
          "reading": "[wɔ˨˩.mən meɪ̯˨˩.tʰjɛn˥ ɕja˥˩.u˨˩˦ toʊ̯˥ t͡saɪ̯˥˩ ɕɥɛ˧˥.ɕjaʊ̯˥˩ tʰu˧˥.ʂu˥.kwan˨˩˦ san˥ loʊ̯˧˥ ʐən˥˩.ʈ͡ʂən˥ kʰan˥˩.ʂu˥] (Wǒ-men měi-tiān xià-wǔ dōu zài xué-xiào tú-shū-guǎn sān lóu rèn-zhēn kàn-shū.)",
          "translation": "We earnestly read books on the third floor of the school library every afternoon."
        },
        {
          "target": "很多外国留学生喜欢在操场上练习中国功夫。(Hěnduō wàiguó liúxuéshēng xǐhuan zài cāochǎng shang liànxí Zhōngguó gōngfu.)",
          "reading": "[xən˨˩.two˥ waɪ̯˥˩.kwɔ˧˥ ljoʊ̯˧˥.ɕɥɛ˧˥.ʂəŋ ɕi˨˩.xwan t͡saɪ̯˥˩ t͡sʰaʊ̯˥.ʈ͡ʂʰɑŋ˨˩˦ ʂɑŋ ljɛn˥˩.ɕi˧˥ ʈ͡ʂʊŋ˥.kwɔ˧˥ kʊŋ˥.fu] (Hěn-duō wài-guó liú-xué-shēng xǐ-huan zài cāo-chǎng shang liàn-xí Zhōng-guó gōng-fu.)",
          "translation": "Many international students like practicing Chinese Kung Fu on the sports field."
        },
        {
          "target": "张教授正在第一会议室主持重要的学术研讨会。(Zhāng jiàoshòu zhèngzài dì-yī huìyìshì zhǔchí zhòngyào de xuéshù yántǎohuì.)",
          "reading": "[ʈ͡ʂɑŋ˥ t͡ɕjaʊ̯˥˩.ʂoʊ̯˥˩ ʈ͡ʂɤŋ˥˩.t͡saɪ̯˥˩ ti˥˩.i˥ xweɪ̯˥˩.i˥˩.ʂɨ˥˩ ʈ͡ʂu˨˩.ʈ͡ʂʰɨ˧˥ ʈ͡ʂʊŋ˥˩.jaʊ̯˥˩ tɤ ɕɥɛ˧˥.ʂu˥˩ jɛn˧˥.tʰaʊ̯˨˩.xweɪ̯˥˩] (Zhāng jiào-shòu zhèng-zài dì-yī huì-yì-shì zhǔ-chí zhòng-yào de xué-shù yán-tǎo-huì.)",
          "translation": "Professor Zhang is presiding over an important academic seminar in Meeting Room No. 1."
        },
        {
          "target": "——你在哪儿买的这件衣服？——我是在市中心的大商场买的。(—Nǐ zài nǎr mǎi de zhè jiàn yīfu? —Wǒ shì zài shìzhōngxīn de dà shāngchǎng mǎi de.)",
          "reading": "[—ni˨˩˦ t͡saɪ̯˥˩ na˨˩.aɻ mmaɪ̯˨˩˦ tɤ ʈ͡ʂɤ˥˩ t͡ɕjɛn˥˩ i˥.fu? —wɔ˨˩ ʂɨ˥˩ t͡saɪ̯˥˩ ʂɨ˥˩.ʈ͡ʂʊŋ˥.ɕin˥ tɤ ta˥˩ ʂɑŋ˥.ʈ͡ʂʰɑŋ˨˩˦ maɪ̯˨˩˦ tɤ] (—Nǐ zài nǎr mǎi de zhè jiàn yī-fu? —Wǒ shì zài shì-zhōng-xīn de dà shāng-chǎng mǎi de.)",
          "translation": "—Where did you buy this piece of clothing? —I bought it at the large shopping mall in the city center."
        }
      ],
      "mnemonics": [
        "空间在前动在后，在字引出地点头；食堂吃饭操场跑，绝不殿后句末留！"
      ],
      "culturalNotes": [
        "汉语语序深刻折射了中国古代「先置其身，后观其行」的时空哲学。无论时间状语还是处所状语，都作为宏观的先决背景条件置于动词行为之前，构成了汉语句子稳固的「背景 -> 动作」认知轴线。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "表达「我在食堂吃午饭」，处所状语「在食堂」在句子中的正确位置是：",
          "options": [
            "置于主语「我」之后、动词「吃」之前：我在食堂吃午饭。(Before the verb: Wǒ zài shítáng chī wǔfàn)",
            "置于句子最末尾：我吃午饭在食堂。",
            "置于动词和宾语之间：我吃在食堂午饭。",
            "置于宾语之后：我吃午饭食堂在。"
          ],
          "answerIndex": 0,
          "explanation": "处所介词短语「在食堂」作为状语，必须置于谓语动词「吃」之前。"
        },
        {
          "prompt": "要询问对方「你在哪里学习汉语？」，正确的疑问语序是：",
          "options": [
            "你在哪儿学习汉语？(Nǐ zài nǎr xuéxí Hànyǔ?) (Subject + zài nǎr + Verb + Object)",
            "你学习汉语在哪儿？",
            "你在哪儿是学习汉语？",
            "学习汉语你在哪儿？"
          ],
          "answerIndex": 0,
          "explanation": "疑问代词处所短语「在哪儿」同样必须位于动词「学习」之前。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "下列哪一个句子由于把处所介词短语置于句末而构成了典型语序病句？",
          "options": [
            "我们在借了两本书在图书馆。(病句：处所介词短语放在了句末) (Prepositional phrase placed at the end)",
            "我们在图书馆借了两本书。",
            "张老师在教室上课。",
            "学生们在操场打篮球。"
          ],
          "answerIndex": 0,
          "explanation": "「在图书馆」作为处所状语被放在了句末，属于受外语影响的严重语序错误。"
        },
        {
          "prompt": "在句子「王教授在办公室」中，单字「在」充当的句子成分是：",
          "options": [
            "全句的核心谓语动词（表示存在/位于） (Main predicate verb of location)",
            "修饰动词的介词",
            "名词",
            "形容词"
          ],
          "answerIndex": 0,
          "explanation": "在此句中「在」后直接跟处所名词，没有其他动词，充当全句核心谓语动词。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中时间、处所与动词语序全部正确无误的一项：",
          "options": [
            "我们明天下午在学校体育馆打羽毛球。(We will play badminton in the school gym tomorrow afternoon.)",
            "我们打羽毛球在学校体育馆明天下午。(时间与处所全部置后错误)",
            "我们在学校体育馆明天下午打羽毛球。(时间应置于处所之前)",
            "我们打羽毛球明天下午在学校体育馆。(语序完全错乱)"
          ],
          "answerIndex": 0,
          "explanation": "汉语中标准完整语序为：「主语 + [时间状语] + [处所状语] + 谓语动词 + 宾语」，即「我们 + 明天下午 + 在学校体育馆 + 打 + 羽毛球」。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示主体空间存在或充当处所介词的核心单字汉字（拼音为 zài）：",
          "acceptedAnswers": [
            "在"
          ],
          "explanation": "汉字「在」是现代汉语中表示存在与处所介词最核心的词汇。"
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
    "title": "日常作息会话综合交际与语篇连贯表达 (Daily Routine Narrative & Discourse Cohesion)",
    "level": "A1",
    "objective": "熟练运用时间承接连词（先......然后......、接着、......以后、最后），将日常行为动词、进行体与在字句熔铸为连贯流畅的一日作息语篇与交际会话。",
    "presentation": {
      "explanation": "将零散的词汇与单句组织为逻辑严密、衔接自然的长篇段落与日常会话，需要掌握汉语语篇连贯（Discourse Cohesion）的核心衔接标记。\n\n一、叙述时间先后逻辑的核心承接词汇体系：\n1.「先......然后...... (xiān... ránhòu...)」—— 表示前后两项动作行为的基准先后次序：\n- 我每天早晨 [先] 刷牙洗脸，[然后] 去食堂吃早饭。\n2.「接着...... (jiēzhe...)」—— 紧接上一动作之后开展下一环节：\n- 吃完早饭，[接着] 我们去教室上第一节课。\n3.「......以后 / ......之后 (yǐhòu / zhīhòu)」—— 附在动词或短语后充当时间从句标记：\n- 中午十二点下课 [以后]，我和同学一起在食堂吃午饭。\n- 做完作业 [之后]，我们去操场运动运动。\n4.「最后...... (zuìhòu...)」—— 引出一连串日常事件的收尾终结环节：\n- [最后]，我通常在晚上十一点左右上床睡觉。\n\n二、一日作息语篇组织综合范式（经典学术范文）：\n- 我的一天生活非常充实而规律。我每天早晨六点半准时起床，先去公园慢跑半小时，呼吸新鲜空气，然后回宿舍冲个热水澡，吃一碗热面条。八点一刻我去教学楼上课，老师正在教室等我们呢。中午十二点下课以后，我和朋友在学校食堂吃午饭，聊聊天、休息休息。下午两点我们在图书馆自习，认真做作业。晚上六点半吃晚饭，接着在操场散散步。晚上八点到十点，我在房间上网查资料、复习生词。最后，在晚上十一点半左右上床安心睡觉。",
      "examples": [
        {
          "target": "我每天早晨先打半个小时太极拳，然后去吃早饭，接着去上课。(Wǒ měitiān zǎochén xiān dǎ bàn gè xiǎoshí tàijíquán, ránhòu qù chī zǎofàn, jiēzhe qù shàngkè.)",
          "reading": "[wɔ˨˩ meɪ̯˨˩.tʰjɛn˥ t͡saʊ˨˩.ʈ͡ʂʰən˧˥ ɕjɛn˥ ta˨˩˦ pan˥˩ kɤ ɕjaʊ̯˨˩.ʂɨ˨˩˦ tʰaɪ̯˥˩.t͡ɕi˧˥.t͡ɕʰɥɛn˧˥, ʐan˧˥.xoʊ̯˥˩ t͡ɕʰy˥˩ t͡ʂʰɨ˥ t͡saʊ˨˩.fan˥˩, t͡ɕjɛ˥.ʈ͡ʂɤ t͡ɕʰy˥˩ ʂɑŋ˥˩.kʰɤ˥˩] (Wǒ měi-tiān zǎo-chén xiān dǎ bàn gè xiǎo-shí tài-jí-quán, rán-hòu qù chī zǎo-fàn, jiē-zhe qù shàng-kè.)",
          "translation": "I first practice Tai Chi for half an hour every morning, then go to eat breakfast, and next go to attend class."
        },
        {
          "target": "下午下课以后，我们常常在图书馆自习室里讨论讨论老师留的思考题。(Xiàwǔ xiàkè yǐhòu, wǒmen chángcháng zài túshūguǎn zìxíshì li tǎolùn tǎolùn lǎoshī liú de sīkǎotí.)",
          "reading": "[ɕja˥˩.u˨˩˦ ɕja˥˩.kʰɤ˥˩ i˨˩.xoʊ̯˥˩, wɔ˨˩.mən ʈ͡ʂʰɑŋ˧˥.ʈ͡ʂʰɑŋ˧˥ t͡saɪ̯˥˩ tʰu˧˥.ʂu˥.kwan˨˩˦ t͡sɨ˥˩.ɕi˧˥.ʂɨ˥˩ li tʰaʊ̯˨˩.lwən tʰaʊ̯˨˩.lwən laʊ˨˩.ʂɨ˥ ljoʊ̯˧˥ tɤ sɨ˥.kʰaʊ̯˨˩.tʰi˧˥] (Xià-wǔ xià-kè yǐ-hòu, wǒ-men cháng-cháng zài tú-shū-guǎn zì-xí-shì li tǎo-lùn tǎo-lùn lǎo-shī liú de sī-kǎo-tí.)",
          "translation": "After class in the afternoon, we often discuss the reflection questions assigned by the teacher in the library study room."
        },
        {
          "target": "晚上吃完晚饭，我在操场散散步，最后在十一点半上床睡觉。(Wǎnshang chīwán wǎnfàn, wǒ zài cāochǎng sànsanbù, zuìhòu zài shíyī diǎn bàn shàngchuáng shuìjiào.)",
          "reading": "[wan˨˩.ʂaŋ t͡ʂʰɨ˥.wan˧˥ wan˨˩.fan˥˩, wɔ˨˩ t͡saɪ̯˥˩ t͡sʰaʊ̯˥.ʈ͡ʂʰɑŋ˨˩˦ san˥˩.san.pu˥˩, t͡sweɪ̯˥˩.xoʊ̯˥˩ t͡saɪ̯˥˩ ʂɨ˧˥.i˥ tjɛn˨˩˦ pan˥˩ ʂɑŋ˥˩.ʈ͡ʂʰwɑŋ˧˥ ʂweɪ̯˥˩.t͡ɕjaʊ̯˥˩] (Wǎn-shang chī-wán wǎn-fàn, wǒ zài cāo-chǎng sàn-san-bù, zuì-hòu zài shí-yī diǎn bàn shàng-chuáng shuì-jiào.)",
          "translation": "After finishing dinner in the evening, I take a walk on the sports ground and finally go to bed to sleep at 11:30."
        },
        {
          "target": "——你周末通常怎么安排？——我先复习功课，然后和朋友一起去公园转转。(—Nǐ zhōumò tōngcháng zěnme ānpái? —Wǒ xiān fùxí gōngkè, ránhòu hé péngyou yìqǐ qù gōngyuán zhuànzhuan.)",
          "reading": "[—ni˨˩˦ ʈ͡ʂoʊ̯˥.mwɔ˥˩ tʰʊŋ˥.ʈ͡ʂʰɑŋ˧˥ t͡sən˨˩.mɤ an˥.pʰaɪ̯˧˥? —wɔ˨˩ ɕjɛn˥ fu˥˩.ɕi˧˥ kʊŋ˥.kʰɤ˥˩, ʐan˧˥.xoʊ̯˥˩ xɤ˧˥ pʰɤŋ˧˥.joʊ̯ i˥˩.t͡ɕʰi˨˩˦ t͡ɕʰy˥˩ kʊŋ˥.ɥɛn˧˥ ʈ͡ʂwan˥˩.ʈ͡ʂwan] (—Nǐ zhōu-mò tōng-cháng zěn-me ān-pái? —Wǒ xiān fù-xí gōng-kè, rán-hòu hé péng-you yì-qǐ qù gōng-yuán zhuàn-zhuan.)",
          "translation": "—How do you usually arrange your weekend? —I first review schoolwork, and then go for a stroll in the park with friends."
        }
      ],
      "mnemonics": [
        "先做然后接着行，以后之后表分明；动词重叠语调软，最后作结篇章成！"
      ],
      "culturalNotes": [
        "中国人崇尚「一日之计在于晨，一年之计在于春」的勤勉作息哲学。有条不紊的日常生活叙事不仅体现了语言的连贯性，也展现了中华文化中注重生活节律与自律修身的精神传统。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在叙述作息先后动作时，表示「第一步先做 A，第二步接着做 B」的经典关联词对是：",
          "options": [
            "先......然后...... (xiān... ránhòu... First... then...)",
            "虽然......但是......",
            "因为......所以......",
            "不但......而且......"
          ],
          "answerIndex": 0,
          "explanation": "「先......然后......」是汉语中表达动作时间先后顺序最经典通用的关联词对。"
        },
        {
          "prompt": "表达「下课之后/课程结束以后」，正确的短语结构是：",
          "options": [
            "下课以后 / 下课之后 (xiàkè yǐhòu / xiàkè zhīhòu) (Action + yǐhòu)",
            "以后下课",
            "下课在以后",
            "在以后下课"
          ],
          "answerIndex": 0,
          "explanation": "方位时间词「以后 / 之后」附在动词或小句之后构成时间状语从句（如「下课以后」）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "请选出下列作息叙述中语篇连贯且关联词搭配完全正确的一项：",
          "options": [
            "我每天早晨先跑步，然后吃早饭，最后去上课。(I first run every morning, then eat breakfast, and finally go to class.)",
            "我每天早晨但是跑步，所以吃早饭，虽然去上课。",
            "我每天早晨因为跑步，而且吃早饭，虽然去上课。",
            "我每天早晨如果跑步，那么吃早饭，可是去上课。"
          ],
          "answerIndex": 0,
          "explanation": "「先......然后......最后......」层层递进，时间逻辑严丝合缝。"
        },
        {
          "prompt": "在叙述一系列日常活动完成时，引出最终压轴行为的承接副词是：",
          "options": [
            "最后 (zuìhòu) (Finally / in the end)",
            "最先",
            "首先",
            "本来"
          ],
          "answerIndex": 0,
          "explanation": "「最后」用于表示一连串事件或作息活动的最终收尾步骤。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列篇章段落中语法、语序、动词重叠及语篇衔接完全规范的一项：",
          "options": [
            "我每天早上七点起床，先刷牙洗脸，然后去食堂吃早饭。上午我们在教室认真上课，中午下课以后在食堂吃午饭、休息休息。下午在图书馆看书，晚上十一点睡觉。(My daily routine is well-organized with proper sequence and vocabulary.)",
            "我每天早上七点起床，虽然刷牙洗脸，但是吃早饭在食堂。上午我们上课在教室，中午吃午饭以后下课在食堂。(连词误用且处所置后病句)",
            "我每天早上起床七点，洗脸刷牙先，然后早饭吃在食堂。在教室上课认真上午，休息休息在中午食堂。(语序全面混乱)",
            "我每天七点在起床早上，吃早饭在然后，下课在中午以后食堂。(语法严重缺陷)"
          ],
          "answerIndex": 0,
          "explanation": "该语篇在时间词、处所介词「在」、动词重叠「休息休息」及时间连词「先...然后...以后」上均达到标准现代汉语范文规范。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入关联词对「先......然后......」中表示紧接其后次序的连词首字汉字（拼音为 rán）：",
          "acceptedAnswers": [
            "然"
          ],
          "explanation": "汉字「然」在「然后」中充当承接连词首字。"
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
    "title": "中华核心饮食词汇、主食与菜肴体系 (Chinese Staples, Dishes & Culinary Lexicon)",
    "level": "A1",
    "objective": "掌握现代汉语核心饮食词汇（米饭/面条/饺子/包子/牛肉/豆腐/青菜）与中华代表性名菜名称，熟练描述中餐主食与食材搭配。",
    "presentation": {
      "explanation": "中华饮食文化源远流长，掌握中餐主食、荤素食材及代表性名菜的名称与量词搭配，是进行餐馆点餐与美食交流的基础。\n\n一、核心主食与面点体系：\n1. 米饭类：\n- 米饭 (mǐfàn，煮熟的白米饭，常用量词「碗」：一碗米饭)\n- 炒饭 (chǎofàn，翻炒调味米饭，如扬州炒饭)\n2. 面食与点心类：\n- 面条 (miàntiáo，小麦面条，如牛肉面、炸酱面：一碗面条)\n- 饺子 (jiǎozi，中华传统水饺/蒸饺：一盘饺子、两斤饺子)\n- 包子 (bāozi，带馅蒸面点：三个包子、一笼包子)\n- 馒头 (mántou，无馅发酵蒸面食：两个馒头)\n- 馄饨 (húntun，薄皮包馅汤点：一碗热馄饨)\n\n二、常用荤素食材词汇：\n1. 荤菜肉类：牛肉 (niúròu)、羊肉 (yángròu)、猪肉 (zhūròu)、鸡肉 (jīròu)、鸭肉 (yāròu)、新鲜鱼 (yú)、大虾 (xiā)。\n2. 素菜蔬菜：青菜 / 蔬菜 (qīngcài / shūcài)、豆腐 (dòufu)、西红柿 / 番茄 (xīhóngshì / fānqié)、土豆 / 马铃薯 (tǔdòu)、鸡蛋 (jīdàn)、蘑菇 (mógu)。\n\n三、享誉中外的中华代表名菜：\n1. 宫保鸡丁 (Gōngbǎo jīdīng) —— 川菜代表，花生米与滑嫩鸡丁香辣爆炒。\n2. 麻婆豆腐 (Mápó dòufu) —— 川菜名馔，麻、辣、鲜、香、烫、嫩、酥兼备。\n3. 北京烤鸭 (Běijīng kǎoyā) —— 京味瑰宝，枣红油亮、皮脆肉嫩、薄饼卷食。\n4. 西红柿炒鸡蛋 (Xīhóngshì chǎo jīdàn) —— 中国国民第一家常菜，酸甜可口、老少咸宜。",
      "examples": [
        {
          "target": "我们点了一盘正宗的北京烤鸭和两碗热气腾腾的牛肉面。(Wǒmen diǎn le yì pán zhèngzōng de Běijīng kǎoyā hé liǎng wǎn rèqìténgténg de niúròumiàn.)",
          "reading": "[wɔ˨˩.mən tjɛn˨˩˦ lɤ i˥ pʰan˧˥ ʈ͡ʂɤŋ˥˩.t͡sʊŋ˥ tɤ peɪ̯˨˩.t͡ɕiŋ˥ kʰaʊ̯˨˩.ja˥ xɤ˧˥ ljaŋ˨˩ wan˨˩˦ ʐɤ˥˩.t͡ɕʰi˥˩.tʰɤŋ˧˥.tʰɤŋ˧˥ tɤ njoʊ̯˧˥.ʐoʊ̯˥˩.mjɛn˥˩] (Wǒ-men diǎn le yì pán zhèng-zōng de Běi-jīng kǎo-yā hé liǎng wǎn rè-qì-téng-téng de niú-ròu-miàn.)",
          "translation": "We ordered a plate of authentic Peking Roast Duck and two steaming bowls of beef noodles."
        },
        {
          "target": "中国北方人在过春节时全家人一起包饺子吃。(Zhōngguó běifāngrén zài guò chūnjié shí quán jiārén yìqǐ bāo jiǎozi chī.)",
          "reading": "[ʈ͡ʂʊŋ˥.kwɔ˧˥ peɪ̯˨˩.fɑŋ˥.ʐən˧˥ t͡saɪ̯˥˩ kwɔ˥˩ t͡ʂʰwən˥.t͡ɕjɛ˧˥ ʂɨ˧˥ t͡ɕʰɥɛn˧˥ t͡ɕja˥.ʐən˧˥ i˥˩.t͡ɕʰi˨˩˦ paʊ̯˥ t͡ɕjaʊ̯˨˩.t͡sɨ t͡ʂʰɨ˥] (Zhōng-guó běi-fāng-rén zài guò chūn-jié shí quán jiā-rén yì-qǐ bāo jiǎo-zi chī.)",
          "translation": "People in Northern China wrap dumplings and eat them together with the whole family during the Spring Festival."
        },
        {
          "target": "这家川菜馆的宫保鸡丁和麻婆豆腐味道非常地道！(Zhè jiā Chuāncàiguǎn de Gōngbǎo jīdīng hé Mápó dòufu wèidào fēicháng dìdao!)",
          "reading": "[ʈ͡ʂɤ˥˩ t͡ɕja˥ t͡ʂʰwan˥.t͡sʰaɪ̯˥˩.kwan˨˩˦ tɤ kʊŋ˥.paʊ̯˨˩˦ t͡ɕi˥.tiŋ˥ xɤ˧˥ ma˧˥.pʰwɔ˧˥ toʊ̯˥˩.fu weɪ̯˥˩.taʊ̯ ffeɪ̯˥.ʈ͡ʂʰɑŋ˧˥ ti˥˩.taʊ̯] (Zhè jiā Chuān-cài-guǎn de Gōng-bǎo jī-dīng hé Má-pó dòu-fu wèi-dào fēi-cháng dì-dao!)",
          "translation": "The Kung Pao Chicken and Mapo Tofu of this Sichuan restaurant are very authentic in flavor!"
        },
        {
          "target": "妈妈今天晚上给我们做了一盘西红柿炒鸡蛋和一碗青菜豆腐汤。(Māma jīntiān wǎnshang gěi wǒmen zuò le yì pán xīhóngshì chǎo jīdàn hé yì wǎn qīngcài dòufu tāng.)",
          "reading": "[ma˥.ma t͡ɕin˥.tʰjɛn˥ wan˨˩.ʂaŋ keɪ̯˨˩ wɔ˨˩.mən t͡swɔ˥˩ lɤ i˥ pʰan˧˥ ɕi˥.xʊŋ˧˥.ʂɨ˥˩ t͡ʂʰaʊ̯˨˩˦ t͡ɕi˥.tan˥˩ xɤ˧˥ i˥ wan˨˩˦ t͡ɕʰiŋ˥.t͡sʰaɪ̯˥˩ toʊ̯˥˩.fu tʰɑŋ˥] (Mā-ma jīn-tiān wǎn-shang gěi wǒ-men zuò le yì pán xī-hóng-shì chǎo jī-dàn hé yì wǎn qīng-cài dòu-fu tāng.)",
          "translation": "Mom cooked a plate of scrambled eggs with tomatoes and a bowl of green vegetable and tofu soup for us tonight."
        }
      ],
      "mnemonics": [
        "米面饺包是主食，荤素搭配味道适；烤鸭宫保麻婆豆，红黄西红柿炒蛋！"
      ],
      "culturalNotes": [
        "中国传统饮食地理格局素有「南米北面」之说：南方温暖多雨盛产稻米，居民主食以米饭、米粉为主；北方干爽适种小麦，主食以馒头、面条、水饺与烙饼为主，反映了地理环境与农耕文明的深厚交融。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在下列中华美食中，属于中国传统节庆（如除夕春节）最具象征意义的面食是：",
          "options": [
            "饺子 (jiǎozi - dumplings) (Traditional festival staple)",
            "面包 (miànbāo)",
            "汉堡 (hànbǎo)",
            "三明治 (sānmíngzhì)"
          ],
          "answerIndex": 0,
          "explanation": "饺子形如元宝，是中国传统文化（尤其是北方）过年团圆最重要的象征性主食。"
        },
        {
          "prompt": "由鸡肉丁、花生米、干辣椒爆炒而成的著名川菜名馔是：",
          "options": [
            "宫保鸡丁 (Gōngbǎo jīdīng) (Kung Pao Chicken)",
            "北京烤鸭",
            "西红柿炒鸡蛋",
            "清蒸鱼"
          ],
          "answerIndex": 0,
          "explanation": "「宫保鸡丁」是川菜中以鸡肉丁与花生米为主料的享誉世界的经典菜肴。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "点餐时表达「两碗白米饭和一盘水饺」，量词搭配完全正确的是：",
          "options": [
            "两碗米饭和一盘饺子 (Two bowls of rice and a plate of dumplings)",
            "两张米饭和一本饺子",
            "两条米饭和两支饺子",
            "两把米饭和两双饺子"
          ],
          "answerIndex": 0,
          "explanation": "米饭用容器量词「碗」，水饺用盘装量词「盘」，搭配精准严密。"
        },
        {
          "prompt": "中国国民家常菜「西红柿炒鸡蛋」中的主要蔬菜原料「西红柿」又称作：",
          "options": [
            "番茄 (fānqié) (Tomato)",
            "土豆",
            "黄瓜",
            "青椒"
          ],
          "answerIndex": 0,
          "explanation": "「西红柿」在中文中亦广泛被称为「番茄 (fānqié)」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中菜品名称与量词搭配完全正确的一项：",
          "options": [
            "服务员，请给我们上一盘麻婆豆腐、两碗米饭和一碗热汤。(Waiter, please serve us a plate of Mapo Tofu, two bowls of rice, and a bowl of hot soup.)",
            "服务员，请给我们上一本麻婆豆腐、两张米饭和一条热汤。",
            "服务员，请给我们上两双麻婆豆腐、两支米饭和一把热汤。",
            "服务员，请给我们上一群麻婆豆腐、两个米饭和一点儿热汤们。"
          ],
          "answerIndex": 0,
          "explanation": "麻婆豆腐用「盘」，米饭与热汤用「碗」，完全符合现代汉语餐饮量词规范。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示中国南方主要农作物主食「大米/白米饭」的单字汉字（拼音为 mǐ）：",
          "acceptedAnswers": [
            "米"
          ],
          "explanation": "汉字「米」是构成「大米」、「米饭」、「米粉」的核心字根。"
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
    "title": "餐厅点餐全流程交际：服务员、菜单、点菜与结账 (Restaurant Dining Discourse)",
    "level": "A1",
    "objective": "熟练掌握餐馆就餐全流程交际用语（询问人数、查阅菜单、推荐特色菜、动词「要/来/点」下单、买单结账与移动支付）。",
    "presentation": {
      "explanation": "掌握现代中餐厅真实就餐的完整交际流程，涵盖进门入座、点菜下单至微信结账的全套核心会话模块：\n\n一、进店迎宾与入座安排：\n- 服务员：您好，欢迎光临！请问几位？(Qǐngwèn, jǐ wèi?)\n- 顾客：我们两位。(Wǒmen liǎng wèi.) / 一共四个人。\n- 服务员：请这边坐，请看菜单。(Qǐng zhèbiān zuò, qǐng kàn càidān.)\n\n二、查阅菜单与咨询特色招牌：\n- 顾客：服务员，请问你们这儿有什么特色菜 / 招牌菜？(Yǒu shénme tèsècài / zhāopáicài?)\n- 服务员：我们的北京烤鸭和宫保鸡丁是招牌菜，非常受欢迎。(Zhāopáicài, fēicháng shòu huānyíng.)\n\n三、点菜下单的核心实用动词（要 / 来 / 点）：\n在现代中餐点菜中，动词「要 (yào)」与「来 (lái)」使用频率最高且极其自然地道：\n- 顾客：我们要一盘北京烤鸭，一盘清炒青菜。(Wǒmen yào...)\n- 顾客：再来两碗米饭，一瓶青岛啤酒，谢谢！(Zài lái liǎng wǎn mǐfàn...)\n- 顾客：服务员，我们点好了。(Wǒmen diǎnhǎo le.)\n\n四、餐后买单结账与现代移动支付：\n- 顾客：服务员，买单！ / 结账！(Fúwùyuán, mǎidān / jiézhàng!)\n- 服务员：您好，一共是一百六十八块钱。(Yígòng shì yībǎi liùshíbā kuài qián.)\n- 顾客：可以刷微信 / 支付宝吗？(Kěyǐ shuā Wēixìn / Zhīfùbǎo ma?)\n- 服务员：当然可以，请扫描桌子上的二维码。(Qǐng sǎomiáo èrwéimǎ.)",
      "examples": [
        {
          "target": "——服务员，请问几位？——我们一共三位，请给我们找一个安静的靠窗位子。(—Fúwùyuán, qǐngwèn jǐ wèi? —Wǒmen yígòng sān wèi, qǐng gěi wǒmen zhǎo yí gè ānjìng de kàochuāng wèizi.)",
          "reading": "[—fu˧˥.u˥˩.ɥɛn˧˥, t͡ɕʰiŋ˨˩.wən˥˩ t͡ɕi˨˩˦ weɪ̯˥˩? —wɔ˨˩.mən i˧˥.kʊŋ˥˩ san˥ weɪ̯˥˩, t͡ɕʰiŋ˨˩ keɪ̯˨˩ wɔ˨˩.mən ʈ͡ʂaʊ̯˨˩˦ i˧˥ kɤ an˥.t͡ɕiŋ˥˩ tɤ kʰaʊ̯˥˩.ʈ͡ʂʰwɑŋ˥ weɪ̯˥˩.t͡sɨ] (—Fú-wù-yuán, qǐng-wèn jǐ wèi? —Wǒ-men yí-gòng sān wèi, qǐng gěi wǒ-men zhǎo yí gè ān-jìng de kào-chuāng wèi-zi.)",
          "translation": "—Waiter, how many of you, please? —There are three of us in total; please find us a quiet table by the window."
        },
        {
          "target": "我们点了一盘水煮牛肉、一盘麻婆豆腐，再来三碗白米饭。(Wǒmen diǎn le yì pán shuǐzhǔ niúròu, yì pán Mápó dòufu, zài lái sān wǎn bái mǐfàn.)",
          "reading": "[wɔ˨˩.mən tjɛn˨˩˦ lɤ i˥ pʰan˧˥ ʂweɪ̯˨˩.ʈ͡ʂu˨˩˦ njoʊ̯˧˥.ʐoʊ̯˥˩, i˥ pʰan˧˥ ma˧˥.pʰwɔ˧˥ toʊ̯˥˩.fu, t͡saɪ̯˥˩ laɪ̯˧˥ san˥ wan˨˩˦ paɪ̯˧˥ mi˨˩.fan˥˩] (Wǒ-men diǎn le yì pán shuǐ-zhǔ niú-ròu, yì pán Má-pó dòu-fu, zài lái sān wǎn bái mǐ-fàn.)",
          "translation": "We ordered a plate of Sichuan boiled beef, a plate of Mapo Tofu, and also three bowls of white rice."
        },
        {
          "target": "——服务员，结账！一共多少钱？——您好，一共是一百五十二块。(—Fúwùyuán, jiézhàng! Yígòng duōshao qián? —Nín hǎo, yígòng shì yībǎiwǔshí'èr kuài.)",
          "reading": "[—fu˧˥.u˥˩.ɥɛn˧˥, t͡ɕjɛ˧˥.ʈ͡ʂɑŋ˥˩! i˧˥.kʊŋ˥˩ twɔ˥.ʂaʊ̯ t͡ɕʰjɛn˧˥? —nin˧˥ xaʊ˨˩˦, i˧˥.kʊŋ˥˩ ʂɨ˥˩ i˥.paɪ̯˨˩.u˨˩˦.ʂɨ˧˥.aɻ˥˩ kʰwaɪ̯˥˩] (—Fú-wù-yuán, jié-zhàng! Yí-gòng duō-shao qián? —Nín hǎo, yí-gòng shì yī-bǎi-wǔ-shí-'èr kuài.)",
          "translation": "—Waiter, the bill please! How much is it in total? —Hello, it is 152 yuan in total."
        },
        {
          "target": "我可以用手机扫码支付吗？(Wǒ kěyǐ yòng shǒujī sǎomǎ zhīfù ma?)",
          "reading": "[wɔ˨˩ kʰɤ˨˩.i˨˩˦ jʊŋ˥˩ ʂoʊ̯˨˩.t͡ɕi˥ saʊ̯˨˩.ma˨˩˦ ʈ͡ʂɨ˥.fu˥˩ ma] (Wǒ kě-yǐ yòng shǒu-jī sǎo-mǎ zhī-fù ma?)",
          "translation": "Can I pay by scanning the QR code with my mobile phone?"
        }
      ],
      "mnemonics": [
        "进门入座问几位，看单要菜再来配；买单结账唤服务，扫码支付极干脆！"
      ],
      "culturalNotes": [
        "在中国当代餐饮日常中，移动扫码支付（微信支付与支付宝）已实现全覆盖普及。顾客常常只需扫描餐桌上的专属二维码，即可在手机小程序上自助完成浏览菜单、点菜加菜以及在线支付结算的全流程。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在餐厅就餐完毕需要结账支付时，礼貌呼唤服务员的标准用语是：",
          "options": [
            "服务员，买单！ / 服务员，结账！(Fúwùyuán, mǎidān / jiézhàng!) (Check please!)",
            "服务员，给钱！",
            "服务员，算账我！",
            "服务员，收人民币！"
          ],
          "answerIndex": 0,
          "explanation": "「买单」与「结账」是现代标准汉语中最通用、最礼貌得体的结账用语。"
        },
        {
          "prompt": "服务员询问就餐人数「请问几位？」，两人就餐的标准回答是：",
          "options": [
            "我们两位。(Wǒmen liǎng wèi.) (Two of us - polite classifier wèi)",
            "我们二个。",
            "我们俩位人。",
            "我们二位人。"
          ],
          "answerIndex": 0,
          "explanation": "回答就餐人数时，使用数量词「两位（两位客人）」最为典雅得体。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "点菜时，表达「我们要一盘烤鸭，再来两碗米饭」，动词「来」在语境中的含义是：",
          "options": [
            "上菜 / 带来 / 下单（点取） (Bring / Serve / Order)",
            "走过来",
            "离开",
            "做饭"
          ],
          "answerIndex": 0,
          "explanation": "动词「来」在餐饮点餐语境中是极其高频口语词，表示「请上一道菜/点取某物」。"
        },
        {
          "prompt": "想要询问餐厅最拿手、最具代表性的菜肴，最标准的提问是：",
          "options": [
            "请问你们有什么特色菜 / 招牌菜？(What are your special / signature dishes?)",
            "请问你们有什么贵菜？",
            "请问你们做什么饭？",
            "请问菜好不好吃？"
          ],
          "answerIndex": 0,
          "explanation": "「特色菜」与「招牌菜」专指餐厅独具风味与极高声誉的代表名菜。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列点餐会话中表达最为自然、得体且完全符合规范的一组：",
          "options": [
            "顾客：服务员，我们要一盘宫保鸡丁，再来两碗米饭。 服务员：好的，请稍等！",
            "顾客：服务员，我们要两张鸡丁，再来两支米饭。 服务员：好的！",
            "顾客：服务员，做一盘宫保鸡丁我们吃在现在。 服务员：请等！",
            "顾客：服务员，米饭两碗宫保鸡丁一盘要买。 服务员：是的！"
          ],
          "answerIndex": 0,
          "explanation": "顾客使用「要一盘宫保鸡丁，再来两碗米饭」，量词精准，动词地道，服务员应答得体。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表达就餐后结账付款动作的常用动词单字汉字（例如「买单」的「买」）：",
          "acceptedAnswers": [
            "买"
          ],
          "explanation": "汉字「买」在「买单」中指支付账单结算费用。"
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
    "title": "五味调和与口感偏好表达：酸、甜、苦、辣、咸 (Five Flavors & Taste Expressions)",
    "level": "A1",
    "objective": "掌握中国传统五味核心词汇（酸、甜、苦、辣、咸、鲜、香、清淡），能够精准表达个人饮食风味偏好与忌口定制要求（少放盐/别放辣）。",
    "presentation": {
      "explanation": "中华烹饪哲学极其强调「五味调和，百味纷呈」。掌握味觉描写词汇与个性化点餐定制表达，能让就餐交际精准而得体：\n\n一、传统「五味」核心形容词体系：\n1. 酸 (suān) —— 酸味（如食醋、柠檬、糖醋里脊）：这道糖醋鱼酸甜可口。\n2. 甜 (tián) —— 甜味（如白糖、蜜糖、广式点心）：江南菜普遍偏甜。\n3. 苦 (kǔ) —— 苦味（如苦瓜、黑巧克力、中药）：苦瓜味道虽苦，但清热去火。\n4. 辣 (là) —— 辛辣刺激之味（如辣椒、花椒、川菜）：四川菜和湖南菜都非常辣！\n5. 咸 (xián) —— 咸味（如食盐、酱油）：这碗汤稍微有点儿咸。\n\n二、鲜香与口感清润词汇：\n1. 鲜 (xiān) —— 鲜美鲜甜（Umami，如海鲜、鲜鸡汤、蘑菇）：清蒸鱼的味道特别鲜美！\n2. 香 (xiāng) —— 芳香扑鼻（如芝麻油、烤鸭）：刚出炉的包子真香！\n3. 清淡 (qīngdàn) —— 少油少盐、清爽原味：病人适合吃清淡的饮食。\n4. 油腻 (yóunì) —— 油脂过多：肥肉吃多了容易觉得油腻。\n\n三、个性化忌口与烹饪定制表达句式：\n在餐馆点菜时，顾客常根据自身健康或口味习惯提出烹饪要求：\n1.「请少放...... (Qǐng shǎo fàng...)」：\n- 请少放盐 / 请少放糖 / 请少放辣椒 / 请少放油。\n2.「请别放...... / 不要放...... (Qǐng bié fàng... / Bú yào fàng...)」：\n- 请别放香菜。(Please don't put cilantro.)\n- 请不要放味精。(Please do not add MSG.)\n3.「我对......过敏 (Wǒ duì... guòmǐn)」：\n- 我对海鲜过敏，请不要放虾。(I am allergic to seafood; please do not put shrimp.)",
      "examples": [
        {
          "target": "四川菜以麻辣鲜香著称，味道非常浓郁！(Sìchuāncài yǐ málà xiānxiāng zhùchēng, wèidào fēicháng nóngyù!)",
          "reading": "[sɨ˥˩.t͡ʂʰwan˥.t͡sʰaɪ̯˥˩ i˨˩˦ ma˧˥.la˥˩ ɕjɛn˥.ɕjɑŋ˥ ʈ͡ʂu˥˩.ʈ͡ʂʰɤŋ˥, weɪ̯˥˩.taʊ̯ ffeɪ̯˥.ʈ͡ʂʰɑŋ˧˥ nʊŋ˧˥.y˥˩] (Sì-chuān-cài yǐ má-là xiān-xiāng zhù-chēng, wèi-dào fēi-cháng nóng-yù!)",
          "translation": "Sichuan cuisine is famous for being numbingly spicy, fresh, and fragrant; its flavor is very rich!"
        },
        {
          "target": "服务员，我不大习惯吃辣，请少放辣椒和花椒，多放一点儿葱。(Fúwùyuán, wǒ búdà xíguàn chī là, qǐng shǎo fàng làjiāo hé huājiāo, duō fàng yìdiǎnr cōng.)",
          "reading": "[fu˧˥.u˥˩.ɥɛn˧˥, wɔ˨˩ pu˧˥.ta˥˩ ɕi˧˥.kwan˥˩ t͡ʂʰɨ˥ la˥˩, t͡ɕʰiŋ˨˩ ʂaʊ̯˨˩˦ fɑŋ˥˩ la˥˩.t͡ɕjaʊ̯˥ xɤ˧˥ xwa˥.t͡ɕjaʊ̯˥, twɔ˥ fɑŋ˥˩ i˥.tjɛɻ˨˩˦ t͡sʰʊŋ˥] (Fú-wù-yuán, wǒ bú-dà xí-guàn chī là, qǐng shǎo fàng là-jiāo hé huā-jiāo, duō fàng yì-diǎnr cōng.)",
          "translation": "Waiter, I am not quite used to spicy food; please put less chili and Sichuan pepper, and put a little more scallions."
        },
        {
          "target": "这盘清蒸桂鱼口感非常鲜嫩、清淡，一点儿也不油腻。(Zhè pán qīngzhēng guìyú kǒugǎn fēicháng xiānnèn, qīngdàn, yìdiǎnr yě bù yóunì.)",
          "reading": "[ʈ͡ʂɤ˥˩ pʰan˧˥ t͡ɕʰiŋ˥.ʈ͡ʂɤŋ˥ kweɪ̯˥˩.y˧˥ kʰoʊ̯˨˩.kan˨˩˦ feɪ̯˥.ʈ͡ʂʰɑŋ˧˥ ɕjɛn˥.nən˥˩, t͡ɕʰiŋ˥.tan˥˩, i˥.tjɛɻ˨˩˦ jɛ˨˩˦ pun˥˩ joʊ̯˧˥.ni˥˩] (Zhè pán qīng-zhēng guì-yú kǒu-gǎn fēi-cháng xiān-nèn, qīng-dàn, yì-diǎnr yě bù yóu-nì.)",
          "translation": "This plate of steamed mandarin fish tastes very fresh, tender, and light, not greasy at all."
        },
        {
          "target": "中国传统的糖醋排骨外脆里嫩，酸甜适口。(Zhōngguó chuántǒng de tángcù páigǔ wài cuì lǐ nèn, suāntián shìkǒu.)",
          "reading": "[ʈ͡ʂʊŋ˥.kwɔ˧˥ t͡ʂʰwan˧˥.tʰʊŋ˨˩˦ tɤ tʰɑŋ˧˥.t͡sʰu˥˩ pʰaɪ̯˧˥.ku˨˩˦ waɪ̯˥˩ t͡sʰweɪ̯˥˩ li˨˩˦ nən˥˩, swan˥.tʰjɛn˧˥ ʂɨ˥˩.kʰoʊ̯˨˩˦] (Zhōng-guó chuán-tǒng de táng-cù pái-gǔ wài cuì lǐ nèn, suān-tián shì-kǒu.)",
          "translation": "Traditional Chinese sweet and sour pork ribs are crispy outside and tender inside, sour and sweet to taste."
        }
      ],
      "mnemonics": [
        "酸甜苦辣咸五味，鲜美清淡香味随；少放辣椒多放葱，别放香菜定制美！"
      ],
      "culturalNotes": [
        "在中国传统中医学与养生学中，「五味入五脏」：酸入肝、苦入心、甘（甜）入脾、辛（辣）入肺、咸入肾。调和五味不仅是烹饪审美的追求，更是平衡阴阳、保养身心的健康哲学。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在餐馆点菜时，向服务员表达「不要在菜里添加辣椒」的正确中文句式是：",
          "options": [
            "请别放辣椒 / 请不要放辣椒 (Qǐng bié fàng làjiāo / Qǐng bú yào fàng làjiāo) (Please don't put chili)",
            "请少吃辣椒",
            "请不要辣椒放",
            "辣椒请不给"
          ],
          "answerIndex": 0,
          "explanation": "「请别放......」或「请不要放......」是表达忌口要求的最标准地道格式。"
        },
        {
          "prompt": "中国著名菜肴「糖醋里脊」与「糖醋排骨」最突出的复合风味是：",
          "options": [
            "酸甜 (suāntián - sweet and sour)",
            "苦辣",
            "咸苦",
            "麻辣"
          ],
          "answerIndex": 0,
          "explanation": "「糖醋」指以食糖与米醋调制而成的经典中餐复合风味「酸甜」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "形容清蒸海鲜肉质极佳、带有天然美味鲜香的味觉形容词是：",
          "options": [
            "鲜 / 鲜美 (xiān / xiānměi) (Fresh and umami)",
            "苦",
            "咸",
            "辣"
          ],
          "answerIndex": 0,
          "explanation": "「鲜」是中华饮食中专门赞美水产海鲜、优质肉类或鲜汤纯正滋味的最高评语。"
        },
        {
          "prompt": "如果某位顾客饮食习惯清淡少油，他最可能对服务员说：",
          "options": [
            "请做得清淡一点儿，少放油和盐。(Please make it light, put less oil and salt.)",
            "请做得油腻一点儿，多放辣。",
            "请做得太咸一点儿，少放水。",
            "请多放糖和肥肉。"
          ],
          "answerIndex": 0,
          "explanation": "「清淡一点儿，少放油和盐」准确反映了健康少油盐的饮食偏好。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中口味描写与定制要求完全规范地道的一项：",
          "options": [
            "这道川菜非常辣，服务员，请给我们上一大杯冰水，下一道菜请少放辣椒。(This Sichuan dish is very spicy; waiter, please bring us a large cup of ice water, and please put less chili in the next dish.)",
            "这道川菜非常甜，服务员，下一道菜请少吃辣椒。",
            "这道川菜非常苦，服务员，请放多辣椒在下一道菜上。",
            "这道川菜非常清淡，服务员，请不要放水在菜里。"
          ],
          "answerIndex": 0,
          "explanation": "川菜特征为「辣」，点水解辣并提出「少放辣椒」的要求，语义自然，逻辑严密。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示辣椒辛辣滋味的核心单字汉字（拼音为 là）：",
          "acceptedAnswers": [
            "辣"
          ],
          "explanation": "汉字「辣」是表示辛辣、刺激味觉的核心形容词。"
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
    "title": "助动词「想」、「要」、「想要」在点餐中的意愿层级与语气差异 (Modal Verbs '想' vs '要')",
    "level": "A1",
    "objective": "系统辨析助动词「想」（意愿探讨）、「要」（明确下单）与「想要」在餐饮点选中的语气轻重与语用功能，掌握「不想」与「不要」的否定语义分工。",
    "presentation": {
      "explanation": "能愿助动词「想 (xiǎng)」、「要 (yào)」与复合词「想要 (xiǎngyào)」在表达需求与消费决策时具有极其精妙的语气层次与语用差异：\n\n一、三大意愿助动词的语义层级对照：\n1.「想 (xiǎng)」—— 心理愿望、试探性设想（Would like to）：\n- 侧重表达说话人主观上的倾向与设想，口吻极其温和、谦逊客气：\n- 我想尝尝正宗的北京烤鸭。(I would like to taste authentic Peking Duck.)\n- 询问顾客喜好时最常用：您想喝点儿什么茶？(What kind of tea would you like to drink?)\n\n2.「要 (yào)」—— 明确决断、确定指令（Want / Will have）：\n- 侧重表达坚定的决策意志，在点菜下单给服务员下指令时最直接干脆：\n- 服务员，我们要一盘宫保鸡丁，两碗米饭。(We want a plate of Kung Pao Chicken and two bowls of rice.)\n\n3.「想要 (xiǎngyào)」—— 渴望获得或拥有某种具体实物：\n- 我想要一杯热咖啡。(I would like a cup of hot coffee.)\n\n二、否定形式的严格语义分界（极高频核心考点）：\n1.「不想 (bù xiǎng)」—— 仅表示主观上没有想法、不愿意做某事：\n- 我今天不想吃面条，我想吃米饭。(I don't feel like eating noodles today; I want to eat rice.)\n2.「不要 (bú yào)」—— 具有两大截然不同的核心语法功能：\n- 功能一：表示断然拒绝或不需要某物（如：我不要香菜 / 我们不要加糖）。\n- 功能二：充当祈使句中的强烈禁止否定副词（相当于「别」）：\n- 炒菜时千万不要放味精！(Do not add MSG when cooking!)",
      "examples": [
        {
          "target": "——您好，请问您想喝点儿什么？——我想喝一杯热绿茶，谢谢！(—Nín hǎo, qǐngwèn nín xiǎng hē diǎnr shénme? —Wǒ xiǎng hē yì bēi rè lǜchá, xièxie!)",
          "reading": "[—nin˧˥ xaʊ˨˩˦, t͡ɕʰiŋ˨˩.wən˥˩ nin˧˥ ɕjɑŋ˨˩˦ xɤ˥ tjɛɻ˨˩˦ ʂən˧˥.mɤ? —wɔ˨˩ ɕjɑŋ˨˩˦ xɤ˥ i˥ peɪ̯˥ ʐɤ˥˩ ly˥˩.ʈ͡ʂʰa˧˥, ɕjɛ˥˩.ɕjɛ!] (—Nín hǎo, qǐng-wèn nín xiǎng hē diǎnr shén-me? —Wǒ xiǎng hē yì bēi rè lǜ-chá, xiè-xie!)",
          "translation": "—Hello, what would you like to drink? —I would like to drink a cup of hot green tea, thank you!"
        },
        {
          "target": "服务员，我们要一盘麻婆豆腐，不要太辣，再来两碗米饭。(Fúwùyuán, wǒmen yào yì pán Mápó dòufu, bú yào tài là, zài lái liǎng wǎn mǐfàn.)",
          "reading": "[fu˧˥.u˥˩.ɥɛn˧˥, wɔ˨˩.mən jaʊ̯˥˩ i˥ pʰan˧˥ ma˧˥.pʰwɔ˧˥ toʊ̯˥˩.fu, pu˧˥ jaʊ̯˥˩ tʰaɪ̯˥˩ la˥˩, t͡saɪ̯˥˩ laɪ̯˧˥ ljaŋ˨˩ wan˨˩˦ mi˨˩.fan˥˩] (Fú-wù-yuán, wǒ-men yào yì pán Má-pó dòu-fu, bú yào tài là, zài lái liǎng wǎn mǐ-fàn.)",
          "translation": "Waiter, we want a plate of Mapo Tofu, not too spicy, and two bowls of rice."
        },
        {
          "target": "我今天胃不太舒服，不想吃油腻的肉类，想吃清淡的蔬菜。(Wǒ jīntiān wèi bú tài shūfu, bù xiǎng chī yóunì de ròulèi, xiǎng chī qīngdàn de shūcài.)",
          "reading": "[wɔ˨˩ t͡ɕin˥.tʰjɛn˥ weɪ̯˥˩ pu˧˥ tʰaɪ̯˥˩ ʂu˥.fu, pu˥˩ ɕjɑŋ˨˩˦ t͡ʂʰɨ˥ joʊ̯˧˥.ni˥˩ tɤ ʐoʊ̯˥˩.leɪ̯˥˩, ɕjɑŋ˨˩˦ t͡ʂʰɨ˥ t͡ɕʰiŋ˥.tan˥˩ tɤ ʂu˥.t͡sʰaɪ̯˥˩] (Wǒ jīn-tiān wèi bú tài shū-fu, bù xiǎng chī yóu-nì de ròu-lèi, xiǎng chī qīng-dàn de shū-cài.)",
          "translation": "My stomach is not feeling very well today; I don't feel like eating greasy meats, and would like to eat light vegetables."
        },
        {
          "target": "请服务员做菜时千万不要放花生，我对坚果严重过敏。(Qǐng fúwùyuán zuòcài shí qiānwàn bú yào fàng huāshēng, wǒ duì jiānguǒ yánzhòng guòmǐn.)",
          "reading": "[t͡ɕʰiŋ˨˩ fu˧˥.u˥˩.ɥɛn˧˥ t͡swɔ˥˩.t͡sʰaɪ̯˥˩ ʂɨ˧˥ t͡ɕʰjɛn˥.wan˥˩ pu˧˥ jaʊ̯˥˩ fɑŋ˥˩ xwa˥.ʂɤŋ˥, wɔ˨˩ tweɪ̯˥˩ t͡ɕjɛn˥.kwɔ˨˩˦ jɛn˧˥.ʈ͡ʂʊŋ˥˩ kwɔ˥˩.min˨˩˦] (Qǐng fú-wù-yuán zuò-cài shí qiān-wàn bú yào fàng huā-shēng, wǒ duì jiān-guǒ yán-zhòng guò-mǐn.)",
          "translation": "Please ask the chef never to add peanuts when cooking; I am severely allergic to nuts."
        }
      ],
      "mnemonics": [
        "想表愿望客气探（想尝烤鸭），要表决定下单欢（我们要两碗饭）；不想无意莫强求，不要拒绝与禁言！"
      ],
      "culturalNotes": [
        "汉语在表达请求时，助动词「想」带有明显的委婉与谦抑色彩。对长辈、客人或初次相识者，服务员与主人常用「您想......」而很少直接生硬地说「你要......」，展现了崇尚礼让的语用风范。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在正式点餐向服务员下达点菜指令时，最自然直接的动词是：",
          "options": [
            "要 (我们要一盘北京烤鸭) (yào - decisive order)",
            "必须",
            "应该",
            "可以"
          ],
          "answerIndex": 0,
          "explanation": "在餐馆向服务员点菜下单时，「我们要...... / 来一盘......」是最自然地道的表达。"
        },
        {
          "prompt": "要表达「主观上没有吃辣的意愿/不想吃辣」，应选用的否定形式是：",
          "options": [
            "不想吃辣 (bù xiǎng chī là) (Don't feel like eating spicy)",
            "不要吃辣 (多用于禁止命令)",
            "不肯吃辣",
            "不愿吃辣"
          ],
          "answerIndex": 0,
          "explanation": "表达主观上缺乏做某事的意愿与心情时，使用「不想 (bù xiǎng)」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "请选出下列句子中「不要」表示明确拒绝添加某食材的一项：",
          "options": [
            "服务员，我的这碗面条不要放香菜。(Waiter, please do not add cilantro to my bowl of noodles.)",
            "我不想去上课。",
            "我今天晚上想看电影。",
            "我们要两杯热绿茶。"
          ],
          "answerIndex": 0,
          "explanation": "「不要放香菜」明确表达了拒绝添加香菜的忌口定制要求。"
        },
        {
          "prompt": "询问远方来宾的饮食偏好时，最具礼貌和亲和力的问句是：",
          "options": [
            "请问您想品尝哪种中国特色菜肴？(What Chinese specialty would you like to taste? - polite xiǎng)",
            "你必须吃什么菜？",
            "你一定要吃哪个？",
            "你吃什么现在？"
          ],
          "answerIndex": 0,
          "explanation": "使用「您想品尝......」语气委婉亲切，极具跨文化交际礼貌。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列会话中助动词「想」与「要」运用完全得体正确的一组：",
          "options": [
            "服务员：请问两位想吃点儿什么？ 顾客：我们想尝尝这儿的特色菜，我们要一盘宫保鸡丁和两碗米饭。",
            "服务员：两位必须吃什么？ 顾客：我们不可吃这儿的菜。",
            "服务员：两位要吃什么呢？ 顾客：我们不想要菜在今天。",
            "服务员：想吃两位什么？ 顾客：要一盘鸡丁我们想。"
          ],
          "answerIndex": 0,
          "explanation": "服务员用「想吃点儿什么」礼貌询问，顾客先表达愿望「想尝尝」，再明确下单「我们要......」，语用极其地道标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表达心理愿望「想要/打算做」的单字助动词汉字（拼音为 xiǎng）：",
          "acceptedAnswers": [
            "想"
          ],
          "explanation": "汉字「想」在能愿动词用法中表示主观意愿与打算（如想吃、想去）。"
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
    "title": "中华饮食礼仪、八大菜系与宴饮交际语篇 (Chinese Dining Etiquette & Eight Cuisines)",
    "level": "A1",
    "objective": "了解中国传统八大菜系（川/粤/鲁/苏/浙/闽/湘/徽）的地域风味特色，掌握中餐宴饮礼仪（敬酒/干杯/公筷）与核心文化禁忌（忌插筷），能进行得体的中餐宴席社交叙事。",
    "presentation": {
      "explanation": "中华饮食不仅是烹饪技术的集成，更是中华礼仪文明、宗族亲情与人际交际的最高舞台。\n\n一、中国传统「八大菜系」地域版图与风味灵魂：\n1. 川菜（四川）—— 麻辣鲜香、变化万千（麻婆豆腐、水煮牛肉、宫保鸡丁）。\n2. 粤菜（广东）—— 选料精细、清鲜脆嫩、原汁原味（白切鸡、广式早茶蒸点、烧鹅）。\n3. 鲁菜（山东）—— 北方菜系之首，咸鲜醇厚、重葱香火候（葱烧海参、糖醋黄河鲤鱼）。\n4. 苏菜（江苏/淮扬）—— 刀工精细、咸甜浓淡适口（松鼠鳜鱼、狮子头）。\n5. 浙菜（浙江）—— 选料讲究、清鲜爽脆（西湖醋鱼、东坡肉、龙井虾仁）。\n6. 闽菜（福建）—— 鲜香清甜、善制海鲜汤羹（佛跳墙、荔枝肉）。\n7. 湘菜（湖南）—— 浓辣酸香、色浓味重（剁椒鱼头、腊味合蒸）。\n8. 徽菜（安徽）—— 善用山珍、重火功重油重色（红烧臭鳜鱼、毛豆腐）。\n\n二、中华餐桌社交核心礼仪：\n1. 尊老爱客与动筷顺序：主人与长辈先动筷（「请长辈先动筷」），年轻晚辈随后享用。\n2. 敬酒与祝酒礼仪：\n- 祝酒辞：「大家干杯 (Gānbēi)!」/「祝您身体健康、工作顺利！」\n- 碰杯细节：晚辈或主人敬酒时，自己的酒杯边缘应略低于对方杯沿，以示谦卑敬意。\n3. 公筷公勺：提倡使用公筷夹菜，以示文明卫生。\n\n三、中华筷子文化四大绝对禁忌：\n1. 忌直插筷子（当头插筷）：**绝对不能**把筷子直立插在米饭碗中央（形同给死者祭祀上香，极其不吉利！）。\n2. 忌敲击碗碟（击盏敲盅）：不可用筷子敲打碗沿（古代乞丐乞讨之举）。\n3. 忌筷子指人（仙人指路）：用餐时绝不可拿筷子对着他人指点。\n4. 忌跨盘夹菜：只夹取靠近自己一侧的菜肴，不越过他人挑拣菜品。",
      "examples": [
        {
          "target": "今天晚上王教授在传统中餐馆设宴招待来自各国的留学生。(Jīntiān wǎnshang Wáng jiàoshòu zài chuántǒng Zhōngcānguǎn shèyàn zhāodài láizì gèguó de liúxuéshēng.)",
          "reading": "[t͡ɕin˥.tʰjɛn˥ wan˨˩.ʂaŋ wɑŋ˧˥ t͡ɕjaʊ̯˥˩.ʂoʊ̯˥˩ t͡saɪ̯˥˩ t͡ʂʰwan˧˥.tʰʊŋ˨˩˦ ʈ͡ʂʊŋ˥.t͡sʰan˥.kwan˨˩˦ ʂɤ˥˩.jɛn˥˩ ʈ͡ʂaʊ̯˥.taɪ̯˥˩ laɪ̯˧˥.t͡sɨ˥˩ kɤ˥˩.kwɔ˧˥ tɤ ljoʊ̯˧˥.ɕɥɛ˧˥.ʂəŋ] (Jīn-tiān wǎn-shang Wáng jiào-shòu zài chuán-tǒng Zhōng-cān-guǎn shè-yàn zhāo-dài lái-zì gè-guó de liú-xué-shēng.)",
          "translation": "Tonight Professor Wang hosted a banquet at a traditional Chinese restaurant to entertain international students from various countries."
        },
        {
          "target": "在中国餐桌上，大家举杯祝酒时常说「干杯」，祝愿友谊长存！(Zài Zhōngguó cānzhuō shang, dàjiā jǔbēi zhùjiǔ shí cháng shuō \"Gānbēi\", zhùyuàn yǒuyì chángcún!)",
          "reading": "[t͡saɪ̯˥˩ ʈ͡ʂʊŋ˥.kwɔ˧˥ t͡sʰan˥.ʈ͡ʂwɔ˥ ʂɑŋ, ta˥˩.t͡ɕja˥ t͡ɕy˨˩.peɪ̯˥ ʈ͡ʂu˥˩.t͡ɕjoʊ̯˨˩˦ ʂɨ˧˥ ʈ͡ʂʰɑŋ˧˥ ʂwɔ˥ \"kan˥.peɪ̯˥\", ʈ͡ʂu˥˩.ɥɛn˥˩ joʊ̯˨˩.i˥˩ ʈ͡ʂʰɑŋ˧˥.t͡sʰwən˧˥!] (Zài Zhōng-guó cān-zhuō shang, dà-jiā jǔ-bēi zhù-jiǔ shí cháng shuō \"Gān-bēi\", zhù-yuàn yǒu-yì cháng-cún!)",
          "translation": "At the Chinese dining table, when raising glasses to toast, people often say 'Cheers' to wish that friendship will last forever!"
        },
        {
          "target": "请记住，绝对不能把两支筷子竖直插在米饭碗中央。(Qǐng jìzhu, juéduì bù néng bǎ liǎng zhī kuàizi shùzhí chā zài mǐfàn wǎn zhōngyāng.)",
          "reading": "[t͡ɕʰiŋ˨˩ t͡ɕi˥˩.ʈ͡ʂu, t͡ɕɥɛ˧˥.tweɪ̯˥˩ pu˥˩ nɤŋ˧˥ pa˨˩˦ ljaŋ˨˩ ʈ͡ʂɨ˥ kʰwaɪ̯˥˩.t͡sɨ ʂu˥˩.ʈ͡ʂɨ˧˥ t͡ʂʰa˥ t͡saɪ̯˥˩ mi˨˩.fan˥˩ wan˨˩˦ ʈ͡ʂʊŋ˥.jɑŋ˥] (Qǐng jì-zhu, jué-duì bù néng bǎ liǎng zhī kuài-zi shù-zhí chā zài mǐ-fàn wǎn zhōng-yāng.)",
          "translation": "Please remember that you must never stick two chopsticks vertically into the center of a rice bowl."
        },
        {
          "target": "粤菜注重食材原本的清鲜，而川菜则以麻辣浓郁征服了无数食客。(Yuècài zhùzhòng shícái yuánběn de qīngxiān, ér Chuāncài zé yǐ málà nóngyù zhēngfú le wúshù shíkè.)",
          "reading": "[ɥɛ˥˩.t͡sʰaɪ̯˥˩ ʈ͡ʂu˥˩.ʈ͡ʂʊŋ˥˩ ʂɨ˧˥.t͡sʰaɪ̯˧˥ jɥɛn˧˥.pən˨˩˦ tɤ t͡ɕʰiŋ˥.ɕjɛn˥, aɻ˧˥ t͡ʂʰwan˥.t͡sʰaɪ̯˥˩ t͡sɤ˧˥ i˨˩˦ ma˧˥.la˥˩ nʊŋ˧˥.y˥˩ ʈ͡ʂɤŋ˥.fu˧˥ lɤ u˧˥.ʂu˥˩ ʂɨ˧˥.kʰɤ˥˩] (Yuè-cài zhù-zhòng shí-cái yuán-běn de qīng-xiān, ér Chuān-cài zé yǐ má-là nóng-yù zhēng-fú le wú-shù shí-kè.)",
          "translation": "Cantonese cuisine emphasizes the original freshness of ingredients, while Sichuan cuisine conquers countless diners with its rich numbing-spiciness."
        }
      ],
      "mnemonics": [
        "八大菜系各芬芳，川麻粤鲜鲁醇香；尊长先动干杯敬，忌插筷子碗中央！"
      ],
      "culturalNotes": [
        "「民以食为天」出自《史记·郦生陆贾列传》，彰显了中国人将饮食视为生命依托与治国安邦之本的崇高地位。中国人重食、爱食、善烹、乐聚，餐桌既是情感纽带的熔炉，也是中华待客之道的核心体现。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在中国餐桌礼仪中，关于使用筷子的重大文化禁忌是：",
          "options": [
            "绝对不能将筷子直立插在米饭碗中央 (Never stick chopsticks vertically into rice bowl)",
            "不能用筷子夹蔬菜",
            "不能使用木质筷子",
            "就餐前必须把筷子洗三遍"
          ],
          "answerIndex": 0,
          "explanation": "将筷子直插在饭碗中央形似祭祀插香，在中国文化中属于严重禁忌。"
        },
        {
          "prompt": "以「原汁原味、清脆鲜美、广式早茶点心」闻名天下的中国菜系是：",
          "options": [
            "粤菜（广东菜） (Cantonese Cuisine)",
            "川菜（四川菜）",
            "湘菜（湖南菜）",
            "鲁菜（山东菜）"
          ],
          "answerIndex": 0,
          "explanation": "粤菜极其讲究食材原汁原味与鲜活清爽，广式早茶点心享誉全球。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "在宴席敬酒祝愿时，中国人常说的经典祝酒词是：",
          "options": [
            "干杯！(Gānbēi! - Cheers!)",
            "快喝！",
            "喝完它！",
            "倒酒！"
          ],
          "answerIndex": 0,
          "explanation": "「干杯 (Gānbēi)」是现代中餐宴会聚餐中最经典通用的举杯祝酒用语。"
        },
        {
          "prompt": "在正式中餐宴席上，合乎中华礼仪的动筷进餐顺序是：",
          "options": [
            "请主人与长辈先动筷夹菜，晚辈与客人随后 (Elders and host pick food first)",
            "小孩子抢先吃自己喜欢的菜",
            "所有人必须同时抓起筷子夹菜",
            "只夹离自己最远的那盘菜"
          ],
          "answerIndex": 0,
          "explanation": "「长者先动筷」体现了中华传统尊老敬贤与谦让待客的伦理秩序。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列关于中华饮食文化与宴席礼仪叙述完全正确的一项：",
          "options": [
            "川菜以麻辣著称，粤菜以清鲜闻名；宴席上大家举杯说「干杯」，绝不可将筷子直立插在饭碗中。(Authentic summary of Chinese cuisine and dining etiquette.)",
            "川菜以清淡著称，粤菜以极其辛辣闻名；敬酒时杯子必须高于长辈。(菜系特色颠倒且礼仪错误)",
            "中国餐桌上必须把筷子插在米饭上以示吉利。(严重禁忌错误)",
            "中国人聚餐从来不用筷子，只用刀叉勺。(与事实严重不合)"
          ],
          "answerIndex": 0,
          "explanation": "该项全面准确地概括了川粤菜系风味对比、宴席祝酒词以及筷子核心文化禁忌。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入宴席上举杯碰杯时祝酒的核心单字汉字（例如「干杯」的「杯」）：",
          "acceptedAnswers": [
            "杯"
          ],
          "explanation": "汉字「杯」在「干杯」、「举杯」中指饮酒器具与祝酒动作。"
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
    "title": "动态助词「了₁」（动态了）表示动作的实现与完成 (Aspect Particle '了₁' - Perfective Completion)",
    "level": "A2",
    "objective": "系统掌握动词后动态助词「了₁」表示动作实现与完成的句法结构（动词+了+数量宾语/连动承接式），掌握使用「没/没有」否定时「了」必须脱落的语法铁律。",
    "presentation": {
      "explanation": "动态助词「了₁」（又称「动词了」或「动态了」）直接紧附于谓语动词之后（动词 + 了₁），其核心语法功能是标记动作在特定的参照时间点上已经实现、发生或完成（实现体/完成体）。\n\n一、动态助词「了₁」的核心句法结构：\n1.「主语 + 动词 + 了₁ + 数量短语/特定修饰语 + 宾语」：\n- 昨天我在书店买了一本汉语大词典。\n- 刚才李老师喝了两杯热绿茶。\n- 妈妈在厨房做了一桌丰盛可口的中国菜。\n\n2. 连动承接结构「动词₁ + 了₁......，就 + 动词₂......」：\n表示第一项动作一旦实现完成，紧接着开展第二项动作：\n- 我们下了课就去学校食堂吃午饭。\n- 爸爸吃了晚饭就去公园散步锻炼身体。\n\n二、动态助词「了₁」的否定铁律（极重要避坑考点）：\n1. 否定动作的发生与完成必须使用否定副词「没」或「没有」。\n2. 核心禁忌法则：在否定句中，动词后面的动态助词「了₁」必须彻底脱落，绝对不能保留！\n- 规范正确：他今天早晨没吃早饭。\n- 严重病句：*他今天早晨没吃了早饭*（误加了字） / *他不吃早饭了*（语意演变为改变习惯）。\n\n三、「了₁」与时间态度的深刻认知：\n- 汉语属于无形态时态变化的意合语言，「了₁」是体态标记而非过去时。只要动作在某一时间点实现完成，无论过去还是将来皆可使用「了₁」：\n- 明天你到了北京，就给我发个短信。",
      "examples": [
        {
          "target": "昨天下午我和同学在图书馆借了三本关于中国历史的书。(Zuótiān xiàwǔ wǒ hé tóngxué zài túshūguǎn jiè le sān běn guānyú Zhōngguó lìshǐ de shū.)",
          "reading": "[t͡swɔ˧˥.tʰjɛn˥ ɕja˥˩.u˨˩˦ wɔ˨˩ xɤ˧˥ tʰʊŋ˧˥.ɕɥɛ˧˥ t͡saɪ̯˥˩ tʰu˧˥.ʂu˥.kwan˨˩˦ t͡ɕjɛ˥˩ lɤ san˥ pən˨˩˦ kwan˥.y˧˥ ʈ͡ʂʊŋ˥.kwɔ˧˥ li˥˩.ʂɨ˨˩˦ tɤ ʂu˥] (Zuó-tiān xià-wǔ wǒ hé tóng-xué zài tú-shū-guǎn jiè le sān běn guān-yú Zhōng-guó lì-shǐ de shū.)",
          "translation": "Yesterday afternoon my classmate and I borrowed three books on Chinese history in the library."
        },
        {
          "target": "李老师喝了一杯热咖啡，然后开始认真备课。(Lǐ lǎoshī hē le yì bēi rè kāfēi, ránhòu kāishǐ rènzhēn bèikè.)",
          "reading": "[li˨˩˦ laʊ˨˩.ʂɨ˥ xɤ˥ lɤ i˥ peɪ̯˥ ʐɤ˥˩ kʰa˥.feɪ̯˥, ʐan˧˥.xoʊ̯˥˩ kʰaɪ̯˥.ʂɨ˨˩˦ ʐən˥˩.ʈ͡ʂən˥ peɪ̯˥˩.kʰɤ˥˩] (Lǐ lǎo-shī hē le yì bēi rè kā-fēi, rán-hòu kāi-shǐ rèn-zhēn bèi-kè.)",
          "translation": "Teacher Li drank a cup of hot coffee and then started preparing lessons earnestly."
        },
        {
          "target": "——你买今天的电影票了吗？——我今天太忙，还没买呢。(—Nǐ mǎi jīntiān de diànyǐngpiào le ma? —Wǒ jīntiān tài máng, hái méi mǎi ne.)",
          "reading": "[—ni˨˩˦ maɪ̯˨˩˦ t͡ɕin˥.tʰjɛn˥ tɤ tjɛn˥˩.iŋ˨˩.pʰjaʊ̯˥˩ lɤ ma? —wɔ˨˩ t͡ɕin˥.tʰjɛn˥ tʰaɪ̯˥˩ mɑŋ˧˥, xaɪ̯˧˥ meɪ̯˧˥ maɪ̯˨˩˦ nɤ] (—Nǐ mǎi jīn-tiān de diàn-yǐng-piào le ma? —Wǒ jīn-tiān tài máng, hái méi mǎi ne.)",
          "translation": "—Did you buy today's movie tickets? —I was too busy today and haven't bought them yet."
        },
        {
          "target": "我们明天下了课就一起去学校体育馆打羽毛球吧。(Wǒmen míngtiān xià le kè jiù yìqǐ qù xuéxiào tǐyùguǎn dǎ yǔmáoqiú ba.)",
          "reading": "[wɔ˨˩.mən miŋ˧˥.tʰjɛn˥ ɕja˥˩ lɤ kʰɤ˥˩ t͡ɕjoʊ̯˥˩ i˥˩.t͡ɕʰi˨˩˦ t͡ɕʰy˥˩ ɕɥɛ˧˥.ɕjaʊ̯˥˩ tʰi˨˩.y˥˩.kwan˨˩˦ ta˨˩˦ y˨˩.maʊ̯˧˥.t͡ɕʰjoʊ̯˧˥ pa] (Wǒ-men míng-tiān xià le kè jiù yì-qǐ qù xué-xiào tǐ-yù-guǎn dǎ yǔ-máo-qiú ba.)",
          "translation": "Let's go play badminton together at the school gymnasium as soon as class finishes tomorrow."
        }
      ],
      "mnemonics": [
        "动后加了表完成（买了一本书），承接下了课就走；否定没买脱落了，切莫没吃了出丑！"
      ],
      "culturalNotes": [
        "许多以印欧语为母语的汉语学习者常将「了」等同于过去时（Past Tense），造成在没有发生动作完成（如表示经常性习惯、状态持续或心理活动）时滥用「了」。理解汉语「体（Aspect）优先于时（Tense）」的本质，是突破中阶汉语语法的关键飞跃。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "要表达「他昨天没有买这本汉语词典」，正确的否定句式是：",
          "options": [
            "他昨天没买这本汉语词典。(否定句中助词「了」必须彻底脱落)",
            "他昨天没买了这本汉语词典。(否定句保留了属于严重病句)",
            "他昨天不买这本汉语词典了。",
            "他昨天不买了这本汉语词典。"
          ],
          "answerIndex": 0,
          "explanation": "否定过去动作的发生必须用「没/没有」，动词后面的动态助词「了」必须彻底脱落。"
        },
        {
          "prompt": "在句子「我们明天下______课就去操场散步」中，表示第一项动作完成后立即进行下一动作的助词是：",
          "options": [
            "了 (下课就去：动词1 + 了 + 宾语 + 就 + 动词2)",
            "过",
            "着",
            "在"
          ],
          "answerIndex": 0,
          "explanation": "「动词1 + 了 + 宾语 + 就 + 动词2」是表示两项动作紧密承接的经典格式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "下列哪一个句子由于在否定句中错误保留了动态助词「了」而构成了病句？",
          "options": [
            "他今天早晨没有吃了早饭。(病句：否定副词「没有」与「了」冲突)",
            "他今天早晨没有吃早饭。",
            "他今天早晨吃了一碗热面条。",
            "他吃了早饭就去上课了。"
          ],
          "answerIndex": 0,
          "explanation": "「没有吃了早饭」属于典型的初学者病句，动词后绝不能加「了」。"
        },
        {
          "prompt": "在句子「张教授写了一部优秀的语言学专著」中，「了」的语法性质是：",
          "options": [
            "紧附于动词后的动态助词（表示动作完成实现）",
            "句末语气助词",
            "形容词",
            "副词"
          ],
          "answerIndex": 0,
          "explanation": "「写了一部专著」中「了」紧跟动词「写」，修饰数量宾语，属于标准动态助词「了₁」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中动态助词「了₁」运用完全正确无误的一项：",
          "options": [
            "昨天王华在书店买了两本新书，回宿舍后认真读了一本。(两项动作均已实现完成且带数量词)",
            "昨天王华在书店没买了两本新书。(否定句误用「了」)",
            "昨天王华在书店买新书两本了在下午。(语序混乱)",
            "王华每天在书店买了两本书。(经常性动作不可滥用「了」)"
          ],
          "answerIndex": 0,
          "explanation": "「买了两本新书」、「读了一本」动作实现且带数量宾语，句法语义完全严谨。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示动作完成实现的动态助词核心单字汉字（拼音为 le）：",
          "acceptedAnswers": [
            "了"
          ],
          "explanation": "汉字「了」在现代汉语中充当核心动态助词与语气助词。"
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
    "title": "句末语气助词「了₂」（句末了）表示新情况发生与事态变化 (Modal Particle '了₂' - Change of State)",
    "level": "A2",
    "objective": "熟练掌握句末语气助词「了₂」表示事态变化（从无到有/新情况/新认知）与「快要......了」行将发生句式的语法功能，杜绝与动词「了₁」混淆。",
    "presentation": {
      "explanation": "句末语气助词「了₂」（又称「句末了」或「事态变化了」）位于全句的最末尾，其核心语法功能是向听话人传递事态出现了新变化、进入了新阶段或产生了新认知（事态更新与成态体）：\n\n一、句末「了₂」的三大核心应用情境：\n1. 客观状态与自然环境发生转变（从无到有、从旧到新）：\n- 下雨了！ —— 之前未曾下雨，当前开始出现降雨新状况。\n- 天气变冷了，大家多穿点儿保暖衣服。\n- 春天来到了，校园里的树叶都变绿了。\n\n2. 年龄、时间、数量达到新阶段：\n- 我妹妹今年已经满二十岁了。\n- 此时此刻已经十点半了，我们该回家休息了。\n\n3. 行为习惯发生转向（「不......了」表示停止原有行为或打消原先打算）：\n- 我不喝浓咖啡了，我想喝点儿温开水。\n- 别买了，我不需要这件衣服了！\n\n二、表示动作行将发生的固定格式（即将发生体）：\n-「快要 / 就要 / 要......了」：\n- 国际航班客机快要起飞了，请乘客系好安全带！\n- 喜庆的中国传统农历新年就要到了！\n\n三、「太......了」极度赞叹感叹句式：\n- 这座现代化国际大都市的夜景太美丽了！",
      "examples": [
        {
          "target": "外面下雪了，地面变得非常滑，出门走路要格外小心。(Wàimiàn xiàxuě le, dìmiàn biàn de fēicháng huá, chūmén zǒulù yào géwài xiǎoxīn.)",
          "reading": "[waɪ̯˥˩.mjɛn˥˩ ɕja˥˩.ɕɥɛ˨˩˦ lɤ, ti˥˩.mjɛn˥˩ pjɛn˥˩ tɤ feɪ̯˥.ʈ͡ʂʰɑŋ˧˥ xwa˧˥, t͡ʂʰu˥.mən˧˥ t͡soʊ̯˨˩.lu˥˩ jaʊ̯˥˩ kɤ˧˥.waɪ̯˥˩ ɕjaʊ̯˨˩.ɕin˥] (Wài-miàn xià-xuě le, dì-miàn biàn de fēi-cháng huá, chū-mén zǒu-lù yào gé-wài xiǎo-xīn.)",
          "translation": "It has started snowing outside; the ground has become very slippery, so be extraordinarily careful when walking outside."
        },
        {
          "target": "电影马上就要开始了，我们快进电影院吧！(Diànyǐng mǎshàng jiù yào kāishǐ le, wǒmen kuài jìn diànyǐngyuàn ba!)",
          "reading": "[tjɛn˥˩.iŋ˨˩˦ ma˨˩.ʂɑŋ˥˩ t͡ɕjoʊ̯˥˩ jaʊ̯˥˩ kʰaɪ̯˥.ʂɨ˨˩˦ lɤ, wɔ˨˩.mən kʰwaɪ̯˥˩ t͡ɕin˥˩ tjɛn˥˩.iŋ˨˩.ɥɛn˥˩ pa] (Diàn-yǐng mǎ-shàng jiù yào kāi-shǐ le, wǒ-men kuài jìn diàn-yǐng-yuàn ba!)",
          "translation": "The movie is about to start immediately; let's hurry into the cinema!"
        },
        {
          "target": "——你还喝咖啡吗？——我不喝了，时间太晚了，喝了容易睡不着觉。(—Nǐ hái hē kāfēi ma? —Wǒ bù hē le, shíjiān tài wǎn le, hē le róngyì shuìbuzháo jiào.)",
          "reading": "[—ni˨˩˦ xaɪ̯˧˥ xɤ˥ kʰa˥.feɪ̯˥ ma? —wɔ˨˩ pu˥ xɤ˥ lɤ, ʂɨ˧˥.t͡ɕjɛn˥ tʰaɪ̯˥˩ wan˨˩˦ lɤ, xɤ˥ lɤ ʐʊŋ˧˥.i˥˩ ʂweɪ̯˥˩.pu.ʈ͡ʂaʊ̯˧˥ t͡ɕjaʊ̯˥˩] (—Nǐ hái hē kā-fēi ma? —Wǒ bù hē le, shí-jiān tài wǎn le, hē le róng-yì shuì-bu-zháo jiào.)",
          "translation": "—Are you still drinking coffee? —I won't drink anymore; it is too late, and drinking it makes it easy to suffer from insomnia."
        },
        {
          "target": "我们班的外国留学生现在都会用筷子吃中餐了。(Wǒmen bān de wàiguó liúxuéshēng xiànzài dōu huì yòng kuàizi chī Zhōngcān le.)",
          "reading": "[wɔ˨˩.mən pan˥ tɤ waɪ̯˥˩.kwɔ˧˥ ljoʊ̯˧˥.ɕɥɛ˧˥.ʂəŋ ɕjɛn˥˩.t͡saɪ̯˥˩ toʊ̯˥ xweɪ̯˥˩ jʊŋ˥˩ kʰwaɪ̯˥˩.t͡sɨ t͡ʂʰɨ˥ ʈ͡ʂʊŋ˥.t͡sʰan˥ lɤ] (Wǒ-men bān de wài-guó liú-xué-shēng xiàn-zài dōu huì yòng kuài-zi chī Zhōng-cān le.)",
          "translation": "The international students in our class can all use chopsticks to eat Chinese food now."
        }
      ],
      "mnemonics": [
        "句尾了字表变化（下雨下雪了），快要起飞就要到；不喝不买改主意，太美太贵叹声高！"
      ],
      "culturalNotes": [
        "在汉语交际中，句末「了₂」是传达信息更新（Information Update）的重要标记。当向他人通报最新突发动态（如「老师来了！」、「开饭了！」）时，句末的「了」能瞬间唤起听话人的注意与行动反应。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在句子「下雨了！」中，句末语气助词「了」表达的核心语法意义是：",
          "options": [
            "事态发生新变化（从不下雨转变为开始下雨）",
            "下雨已经彻底结束",
            "从来没有下过雨",
            "询问天气情况"
          ],
          "answerIndex": 0,
          "explanation": "句末「了」在此处作为语气助词表示新情况的出现。"
        },
        {
          "prompt": "表达「火车行将出发/马上就要开走」，正确的固定句式是：",
          "options": [
            "火车快要开了！(快要......了表示动作即将发生)",
            "火车快要开过！",
            "火车快要在开着！",
            "火车开了快要！"
          ],
          "answerIndex": 0,
          "explanation": "「快要......了」是现代汉语中表达动作即将发生的最标准句式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "句子「我不吃肉了」所传达的真实含义是：",
          "options": [
            "改变了原来的饮食习惯，现在不再吃肉了（产生状态转变）",
            "以前不吃肉，现在开始吃肉了",
            "从来没有吃过肉",
            "正在吃肉"
          ],
          "answerIndex": 0,
          "explanation": "「不 + 动词 + 了」表示放弃原有行为，产生状态转变。"
        },
        {
          "prompt": "在感叹句「这里的风景太美了！」中，与副词「太」前后呼应的句末助词是：",
          "options": [
            "了 (「太......了」构成感叹格式)",
            "过",
            "着",
            "的"
          ],
          "answerIndex": 0,
          "explanation": "「太......了」是现代汉语中表达强烈赞叹的固定结构。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中句末语气助词「了₂」运用完全规范得体的一项：",
          "options": [
            "天气渐渐变暖和了，春天快要到了，公园里的花儿都开了。(状态更新与即将发生体完美融合)",
            "天气渐渐变暖和过，春天快要到着。(助词误用)",
            "天气变暖和了渐渐，快要到了春天。(语序颠倒)",
            "春天快要在到了，花儿开了都。(结构错乱)"
          ],
          "answerIndex": 0,
          "explanation": "「变暖和了」（变化）、「快要到了」（即将态）、「花儿都开了」（新状态），句末「了」运用典雅精准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入结构「快要......了」中表示时间临近的核心单字副词汉字（拼音为 kuài）：",
          "acceptedAnswers": [
            "快"
          ],
          "explanation": "汉字「快」在「快要......了」中充当表示即将发生的时间副词。"
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
    "title": "双「了」句式（动词了₁ + 句末了₂）表示动作持续至今 (Double LE Structure - Ongoing Duration)",
    "level": "A2",
    "objective": "系统掌握双「了」句式（主语+动词+了₁+时量补语+宾语+了₂）的形态结构与语义机制，精准辨析单「了」句（动作已终结）与双「了」句（动作持续至今未停）的本质区别。",
    "presentation": {
      "explanation": "当一个句子中同时出现动词后面的动态助词「了₁」与句末的语气助词「了₂」时，构成了现代汉语表达时量累积与持续进行的「双了句式」：\n\n一、双「了」句式的标准形态结构模型：\n- 主语 + 谓语动词 + 了₁ + [时量补语 / 数量补语] + (宾语) + 了₂\n\n二、双「了」句与单「了」句的深刻语义对立：\n1. 双「了」句（动作持续至今，当前仍在进行中）：\n- 我学了一年汉语了。\n- 语义剖析：动词后的「了₁」标记已经完成了一年的学习量；句末的「了₂」标记事态发展至当前阶段，明确传达说话时本人仍在继续学习汉语，动作尚未终结中断。\n- 他在中国上海居住了五年了（至今依然在上海居住）。\n\n2. 单「了」句（动作仅表示过去发生或已经终结）：\n- 我学了一年汉语。\n- 语义剖析：仅陈述过去曾有过一年的学习时量，目前极可能已经停止、中断或不再学习汉语。\n- 他在中国上海居住了五年（如今已经离开上海）。\n\n三、高频时量提问与应答句型：\n- 问：你在北京大学学习深造多长时间了？\n- 答：我在北京大学学习深造了整整两年了。",
      "examples": [
        {
          "target": "张教授在这所著名大学从事中国哲学教学工作整整三十年了。(Zhāng jiàoshòu zài zhè suǒ zhùmíng dàxué cóngshì Zhōngguó zhéxué jiàoxué gōngzuò zhěngzhěng sānshí nián le.)",
          "reading": "[ʈ͡ʂɑŋ˥ t͡ɕjaʊ̯˥˩.ʂoʊ̯˥˩ t͡saɪ̯˥˩ ʈ͡ʂɤ˥˩ swɔ˨˩˦ ʈ͡ʂu˥˩.miŋ˧˥ ta˥˩.ɕɥɛ˧˥ t͡sʰʊŋ˧˥.ʂɨ˥˩ ʈ͡ʂʊŋ˥.kwɔ˧˥ ʈ͡ʂɤ˧˥.ɕɥɛ˧˥ t͡ɕjaʊ̯˥˩.ɕɥɛ˧˥ kʊŋ˥.t͡swɔ˥˩ ʈ͡ʂɤŋ˨˩.ʈ͡ʂɤŋ˨˩˦ san˥.ʂɨ˧˥ njɛn˧˥ lɤ] (Zhāng jiào-shòu zài zhè suǒ zhù-míng dà-xué cóng-shì Zhōng-guó zhé-xué jiào-xué gōng-zuò zhěng-zhěng sān-shí nián le.)",
          "translation": "Professor Zhang has been engaged in Chinese philosophy teaching at this famous university for a full 30 years (and is still teaching)."
        },
        {
          "target": "我们已经在自习室认真复习了三个小时了，去操场休息休息吧。(Wǒmen yǐjīng zài zìxíshì rènzhēn fùxí le sān gè xiǎoshí le, qù cāochǎng xiūxi xiūxi ba.)",
          "reading": "[wɔ˨˩.mən i˨˩.t͡ɕiŋ˥ t͡saɪ̯˥˩ t͡sɨ˥˩.ɕi˧˥.ʂɨ˥˩ ʐən˥˩.ʈ͡ʂən˥ fu˥˩.ɕi˧˥ lɤ san˥ kɤ ɕjaʊ̯˨˩.ʂɨ˨˩˦ lɤ, t͡ɕʰy˥˩ t͡sʰaʊ̯˥.ʈ͡ʂʰɑŋ˨˩˦ ɕjoʊ̯˥.ɕi ɕjoʊ̯˥.ɕi pa] (Wǒ-men yǐ-jīng zài zì-xí-shì rèn-zhēn fù-xí le sān gè xiǎo-shí le, qù cāo-chǎng xiū-xi xiū-xi ba.)",
          "translation": "We have already reviewed earnestly in the study room for three hours (and are still in the session); let's go relax on the sports ground."
        },
        {
          "target": "——雨下得很大吗？——这场大雨已经下了一整天了，还没有停呢。(—Yǔ xià de hěn dà ma? —Zhè cháng dàyǔ yǐjīng xià le yì zhěng tiān le, hái méiyǒu tíng ne.)",
          "reading": "[—y˨˩˦ ɕja˥˩ tɤ xən˨˩ ta˥˩ ma? —ʈ͡ʂɤ˥˩ ʈ͡ʂʰɑŋ˧˥ ta˥˩.y˨˩˦ i˨˩.t͡ɕiŋ˥ ɕja˥˩ lɤ i˥ ʈ͡ʂɤŋ˨˩˦ tʰjɛn˥ lɤ, xaɪ̯˧˥ meɪ̯˧˥.joʊ̯ tʰiŋ˧˥ nɤ] (—Yǔ xià de hěn dà ma? —Zhè cháng dà-yǔ yǐ-jīng xià le yì zhěng tiān le, hái méi-yǒu tíng ne.)",
          "translation": "—Is it raining heavily? —This heavy rain has been falling for an entire day (and is still raining); it hasn't stopped yet."
        },
        {
          "target": "他喝了三杯茶了，还想再喝一杯。(Tā hē le sān bēi chá le, hái xiǎng zài hē yì bēi.)",
          "reading": "[tʰa˥ xɤ˥ lɤ san˥ peɪ̯˥ ʈ͡ʂʰa˧˥ lɤ, xaɪ̯˧˥ ɕjɑŋ˨˩˦ t͡saɪ̯˥˩ xɤ˥ i˥ peɪ̯˥] (Tā hē le sān bēi chá le, hái xiǎng zài hē yì bēi.)",
          "translation": "He has already drunk three cups of tea (up to now), and still wants to drink another cup."
        }
      ],
      "mnemonics": [
        "动后有了尾加了，双了持续至今朝；学了一年汉语了，动作未停继续跑！"
      ],
      "culturalNotes": [
        "双「了」句式是汉语高度凝练表达「时间跨度累积且仍处于进行中」的句法智慧。在叙述跨国求学、工作履历或持续性研究时，双「了」句能准确传递说话人当前依然投身于该项事业的积极状态。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "句子「他在中国工作了五年了」向听话人传递的最核心信息是：",
          "options": [
            "他已经在中国工作了五年，并且目前依然在中国工作 (双「了」表示持续至今)",
            "他在中国工作了五年，现在已经离开中国回国了",
            "他从来没有在中国工作过",
            "他正打算去中国工作五年"
          ],
          "answerIndex": 0,
          "explanation": "双「了」句（工作了五年了）严格表示动作从过去开始，持续了五年且至今仍在继续。"
        },
        {
          "prompt": "对比单双了：表示「过去曾学过半年汉语，但现在已经不学了」的句子是：",
          "options": [
            "我学了半年汉语。(单「了」表示过去完成，现已停止)",
            "我学了半年汉语了。(双「了」表示至今仍在学)",
            "我学过半年汉语了。",
            "我正在学了半年汉语。"
          ],
          "answerIndex": 0,
          "explanation": "单「了」句「我学了半年汉语」句末没有「了」，表示过去动作的完成，现已不再持续。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "要询问对方「你学习汉语多长时间了？」，最标准的回应双「了」句是：",
          "options": [
            "我学习了一年半了。(动词 + 了 + 时量 + 了 表达动作持续至今)",
            "我学习一年半过。",
            "我正在学习一年半了。",
            "我学习了一年半着。"
          ],
          "answerIndex": 0,
          "explanation": "「动词 + 了 + 时量 + 了」是回答持续时间询问的最标准句式。"
        },
        {
          "prompt": "在句子「外面这场大雨已经下了一整天了」中，句末「了」的作用是：",
          "options": [
            "与动词后的「了」配合，表明下雨动作持续至今尚未停歇",
            "表示下雨已经完全停止",
            "表示否定",
            "表示疑问"
          ],
          "answerIndex": 0,
          "explanation": "句末「了」与动词后「了」构成双「了」格局，表达下雨持续整天且仍在下。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中表达「持续性动作至今仍在继续进行」且语法完全正确的一项：",
          "options": [
            "王华在北京大学读了三年研究生了，明年即将毕业。(双「了」结构准确表达学业持续未止)",
            "王华在北京大学读三年研究生过明年。(语法混乱)",
            "王华在北京大学读了三年研究生着。(助词混用)",
            "王华读了三年研究生在北京大学了。(语序错位)"
          ],
          "answerIndex": 0,
          "explanation": "「读了三年研究生了」精准呈现双「了」持续结构，后续「明年即将毕业」语义严密吻合。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入双「了」句中置于时量短语后、位于全句最末尾的单字语气助词汉字（拼音为 le）：",
          "acceptedAnswers": [
            "了"
          ],
          "explanation": "句末汉字「了」与动词后「了」共同构筑双「了」持续态。"
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
    "title": "动态助词「过」表示过往经历体与「没......过」否定式 (Aspect Particle '过' - Experiential Aspect)",
    "level": "A2",
    "objective": "熟练掌握动态助词「过」表示过往人生经历（曾经做过某事）的语义机制，掌握「没(有)+动词+过」否定句式中「过」必须保留的铁律，精准辨析「动词+了」与「动词+过」的本质差异。",
    "presentation": {
      "explanation": "动态助词「过」（拼音为 guo）直接紧附于谓语动词之后（动词 + 过），其核心语法功能是标记主体在过往的某个历史时期曾经有过某种生活经历、体验或尝试（经历体）：\n\n一、动态助词「过」的核心语义与句法特征：\n1. 强调「过往曾经发生，但该动作在现时早已成为历史，并未持续到当前」：\n- 我去过北京。 —— 说话人过去曾经前往过北京（拥有此项经历），但说话时本人早已返回原处，并不在北京。\n- 你品尝过正宗的四川麻婆豆腐吗？\n- 他以前在大学学习过法文，但现在全部忘光了。\n\n2.「没 (没有) + 动词 + 过」否定式铁律（极重要核心考点）：\n- 否定经历体必须使用「没」或「没有」，且动词后面的助词「过」必须严格保留，绝不可脱落！\n- 否定助词对比法则：\n- 否定「了₁」：助词「了」必须脱落（他没买词典，绝不可说 *没买了*）。\n- 否定「过」：助词「过」必须保留（他没去过中国，绝不可省略「过」！）。\n\n二、「动词 + 了」与「动词 + 过」的深刻本质辨析：\n1.「张老师去上海了」：\n- 语义为实现完成或行踪变化：张老师已经启程前往上海，现在人可能正在上海或者在前往上海的路途之中。\n2.「张老师去过上海」：\n- 语义为过往人生经历：张老师过去曾经到访过上海，但现在人肯定不在上海，早已返回出发地。\n\n三、经历体核心疑问句式：\n- 句式一：你吃过正宗的北京烤鸭没有？\n- 句式二：你吃过正宗的北京烤鸭吗？",
      "examples": [
        {
          "target": "我以前去过两次西安，参观过秦始皇兵马俑，那里的历史文化非常震撼。(Wǒ yǐqián qù guo liǎng cì Xī'ān, cānguān guo Qín Shǐhuáng bīngmǎyǒng, nàli de lìshǐ wénhuà fēicháng zhènhàn.)",
          "reading": "[wɔ˨˩ i˨˩.t͡ɕʰjɛn˧˥ t͡ɕʰy˥˩ kwɔ ljaŋ˨˩˦ t͡sʰɨ˥˩ ɕi˥.an˥, t͡sʰan˥.kwan˥ kwɔ t͡ɕʰin˧˥ ʂɨ˨˩.xwaŋ˧˥ piŋ˥.ma˨˩.jʊŋ˨˩˦, na˥˩.li tɤ li˥˩.ʂɨ˨˩˦ wən˧˥.xwa˥˩ feɪ̯˥.ʈ͡ʂʰɑŋ˧˥ ʈ͡ʂɤn˥˩.xan˥˩] (Wǒ yǐ-qián qù guo liǎng cì Xī-'ān, cān-guān guo Qín Shǐ-huáng bīng-mǎ-yǒng, nà-li de lì-shǐ wén-huà fēi-cháng zhèn-hàn.)",
          "translation": "I have been to Xi'an twice before and visited the Terracotta Army of the First Emperor of Qin; the history and culture there are very shocking."
        },
        {
          "target": "——你尝过正宗的四川火锅吗？——我从来没有尝过，听朋友说非常辣。(—Nǐ cháng guo zhèngzōng de Sìchuān huǒguō ma? —Wǒ cónglái méiyǒu cháng guo, tīng péngyou shuō fēicháng là.)",
          "reading": "[—ni˨˩˦ t͡ʂʰɑŋ˧˥ kwɔ ʈ͡ʂɤŋ˥˩.t͡sʊŋ˥ tɤ sɨ˥˩.t͡ʂʰwan˥ xwo˨˩.kwo˥ ma? —wɔ˨˩ t͡sʰʊŋ˧˥.laɪ̯˧˥ meɪ̯˧˥.joʊ̯ t͡ʂʰɑŋ˧˥ kwɔ, tʰiŋ˥ pʰɤŋ˧˥.joʊ̯ ʂwɔ˥ feɪ̯˥.ʈ͡ʂʰɑŋ˧˥ la˥˩] (—Nǐ cháng guo zhèng-zōng de Sì-chuān huǒ-guō ma? —Wǒ cóng-lái méi-yǒu cháng guo, tīng péng-you shuō fēi-cháng là.)",
          "translation": "—Have you ever tasted authentic Sichuan hotpot? —I have never tasted it; I heard from friends that it is very spicy."
        },
        {
          "target": "王教授在中国社科院从事过多年的古代文学研究。(Wáng jiàoshòu zài Zhōngguó Shèkēyuàn cóngshì guo duō nián de gǔdài wénxué yánjiū.)",
          "reading": "[wɑŋ˧˥ t͡ɕjaʊ̯˥˩.ʂoʊ̯˥˩ t͡saɪ̯˥˩ ʈ͡ʂʊŋ˥.kwɔ˧˥ ʂɤ˥˩.kʰɤ˥.ɥɛn˥˩ t͡sʰʊŋ˧˥.ʂɨ˥˩ kwɔ twɔ˥ njɛn˧˥ tɤ ku˨˩.taɪ̯˥˩ wən˧˥.ɕɥɛ˧˥ jɛn˧˥.t͡ɕjoʊ̯˥] (Wáng jiào-shòu zài Zhōng-guó Shè-kē-yuàn cóng-shì guo duō nián de gǔ-dài wén-xué yán-jiū.)",
          "translation": "Professor Wang engaged in research on ancient literature at the Chinese Academy of Social Sciences for many years (past career experience)."
        },
        {
          "target": "这本中国现代小说我以前读过一遍，写得非常深刻感人。(Zhè běn Zhōngguó xiàndài xiǎoshuō wǒ yǐqián dú guo yí biàn, xiě de fēicháng shēnkè gǎnrén.)",
          "reading": "[ʈ͡ʂɤ˥˩ pən˨˩˦ ʈ͡ʂʊŋ˥.kwɔ˧˥ ɕjɛn˥˩.taɪ̯˥˩ ɕjaʊ̯˨˩.ʂwɔ˥ wɔ˨˩ i˨˩.t͡ɕʰjɛn˧˥ tu˧˥ kwɔ i˧˥ pjɛn˥˩, ɕjɛ˨˩˦ tɤ feɪ̯˥.ʈ͡ʂʰɑŋ˧˥ ʂən˥.kʰɤ˥˩ kan˨˩.ʐən˧˥] (Zhè běn Zhōng-guó xiàn-dài xiǎo-shuō wǒ yǐ-qián dú guo yí biàn, xiě de fēi-cháng shēn-kè gǎn-rén.)",
          "translation": "I read this Chinese modern novel once before; it is written in a very profound and touching way."
        }
      ],
      "mnemonics": [
        "动后加过表经历（去过北京吃过鸭），过去发生今已毕；否定没做过还在，去过去了一清二楚！"
      ],
      "culturalNotes": [
        "在跨文化交流与朋友初相识时，中国人非常喜欢使用「去过......吗？」、「吃过......吗？」来作为打破冷场、寻找共同话题的破冰利器，这展现了汉语经历体在日常生活社交中的极高语用价值。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "句子「我去过北京」与「我去了北京」的最大区别是：",
          "options": [
            "「去过北京」指过去曾经有去北京的经历，现在人不在北京；「去了北京」指已经出发前往，现在可能在途或在京",
            "两句话意思完全相同没有任何区别",
            "「去过北京」表示现在正在北京",
            "「去了北京」表示从来没有去过北京"
          ],
          "answerIndex": 0,
          "explanation": "「过」强调过去的经历且已结束；「了」标记动作实现或状态改变（人前往了某地）。"
        },
        {
          "prompt": "表达「我从来没有吃过这种中国特色小吃」，正确的中文句子是：",
          "options": [
            "我从来没吃过这种中国特色小吃。(否定句中经历助词「过」必须保留)",
            "我从来不吃过了这种中国特色小吃。",
            "我从来没吃了这种中国特色小吃。",
            "我没吃这种中国特色小吃过不。"
          ],
          "answerIndex": 0,
          "explanation": "否定经历体使用「没(有) + 动词 + 过」，助词「过」必须保留。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "向外国朋友询问是否曾经登临过中国万里长城，最得体的疑问句是：",
          "options": [
            "你去过长城吗？ / 你登过长城没有？(经历体提问句型)",
            "你正在去长城吗？",
            "你去长城了没有快要？",
            "你想要去长城着吗？"
          ],
          "answerIndex": 0,
          "explanation": "询问人生过往经历，使用「动词 + 过 + 宾语 + 吗/没有」最为地道。"
        },
        {
          "prompt": "在句子「李老师以前在国外教过两年中文」中，动态助词「过」表明：",
          "options": [
            "李老师过去曾经在国外教中文，但现在已经不在此处任教（过往经历）",
            "李老师现在依然在国外教中文",
            "李老师打算去国外教中文",
            "李老师从来没去过国外"
          ],
          "answerIndex": 0,
          "explanation": "「教过」表示过去的从教经历，现已告一段落。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列问答对话中关于经历体「过」运用完全准确地道的一组：",
          "options": [
            "甲：你以前看过这部中国经典电影吗？ 乙：我没看过，但我听朋友介绍过，非常精彩。(经历体问答完全严密规范)",
            "甲：你以前看了这部中国经典电影吗？ 乙：我没看过了这部电影。",
            "甲：你以前在看这部中国电影着吗？ 乙：我不看过这部电影。",
            "甲：你看过这部电影快要吗？ 乙：我看了过一遍。"
          ],
          "answerIndex": 0,
          "explanation": "提问「看过...吗」，否定回答「没看过」，肯定经历「听朋友介绍过」，语法与语用均无可挑剔。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示主体曾经拥有某种过往经历的动态助词单字汉字（拼音为 guo）：",
          "acceptedAnswers": [
            "过"
          ],
          "explanation": "汉字「过」是现代汉语中表示经历体（Experiential Aspect）的核心动态助词。"
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
    "title": "「了₁」「了₂」「过」综合交际辨析与叙事篇章 (Comprehensive Contrast & Past Narrative)",
    "level": "A2",
    "objective": "融会贯通动态助词「了₁」（完成）、句末助词「了₂」（变化）、双「了」（持续）与经历助词「过」（过往体验），能够综合撰写逻辑严密、体貌精准的个人经历与成长叙事语篇。",
    "presentation": {
      "explanation": "将动态助词「了₁」、句末语气助词「了₂」、双「了」持续结构与经历助词「过」有机融合，是进行高阶汉语记叙文写作与口语叙事表达的必经之路：\n\n一、四大体态助词核心功能矩阵总复盘：\n1. 动词「了₁」（完成体）：标记动作实现完成（例如：我昨天在书店买了一台新笔记本电脑）。\n2. 句末「了₂」（变化体）：标记新情况、新认知或即将发生体（例如：春天来到了 / 天气变冷了 / 暴风雨快要来临了）。\n3. 双「了」结构（持续体）：标记动作从过去开始并持续发展至今（例如：我在中国北京大学深造学习了整整两年汉语了）。\n4. 动态「过」（经历体）：标记主体过往曾有某种生活体验，现已成为历史（例如：我以前去过西安古城，品尝过正宗的北京烤鸭）。\n\n二、体态标记叙事综合范文（留学生在华两年成长纪实）：\n- 我来到中国留学深造已经整整两年了（双「了」持续结构）。刚来到北京的时候，我一句中文都不会说，北方的天气也渐渐变冷了（句末「了」表示新变化）。在这两年里，我刻苦努力学习，游览去过了西安、上海、广州和杭州等历史文化名城（经历体「过」），也品尝过了正宗地道的北京烤鸭和四川麻婆豆腐（经历体「过」）。昨天我以优异的成绩顺利通过了汉语水平考试（动词「了₁」表示动作完成），全班老师和朋友们都为我感到由衷高兴。下周我们就要放暑假了（即将发生体「就要......了」），我已经买好了回国的往返机票，打算回家看望亲爱的父母。",
      "examples": [
        {
          "target": "我学了三年汉语了，去过很多中国名胜古迹，昨天又买了一套唐诗选集。(Wǒ xué le sān nián Hànyǔ le, qù guo hěnduō Zhōngguó míngshèng gǔjì, zuótiān yòu mǎi le yí tào Tángshī xuǎnjí.)",
          "reading": "[wɔ˨˩ ɕɥɛ˧˥ lɤ san˥ njɛn˧˥ xan˥˩.y˨˩˦ lɤ, t͡ɕʰy˥˩ kwɔ xən˨˩.two˥ ʈ͡ʂʊŋ˥.kwɔ˧˥ miŋ˧˥.ʂɤŋ˥˩ ku˨˩.t͡ɕi˥˩, t͡swɔ˧˥.tʰjɛn˥ joʊ̯˥˩ maɪ̯˨˩˦ lɤ i˥ tʰaʊ̯˥˩ tʰɑŋ˧˥.ʂɨ˥ ɕɥan˨˩.t͡ɕi˧˥] (Wǒ xué le sān nián Hàn-yǔ le, qù guo hěn-duō Zhōng-guó míng-shèng gǔ-jì, zuó-tiān yòu mǎi le yí tào Táng-shī xuǎn-jí.)",
          "translation": "I have studied Chinese for three years (still studying), have been to many Chinese historical sites (experience), and bought a set of selected Tang Poems yesterday (completed action)."
        },
        {
          "target": "天色暗下来了，暴风雨快要来了，路上的人们都加快了回家的脚步。(Tiānsè àn xiàlái le, bàofēngyǔ kuài yào lái le, lù shang de rénmen dōu jiākuài le huíjiā de jiǎobù.)",
          "reading": "[tʰjɛn˥.sɤ˥˩ an˥˩ ɕja˥˩.laɪ̯ lɤ, paʊ̯˥˩.fɤŋ˥.y˨˩˦ kʰwaɪ̯˥˩ jaʊ̯˥˩ laɪ̯˧˥ lɤ, lu˥˩ ʂɑŋ tɤ ʐən˧˥.mən toʊ̯˥ t͡ɕja˥.kʰwaɪ̯˥˩ lɤ xweɪ̯˧˥.t͡ɕja˥ tɤ t͡ɕjaʊ̯˨˩.pu˥˩] (Tiān-sè àn xià-lái le, bào-fēng-yǔ kuài yào lái le, lù shang de rén-men dōu jiā-kuài le huí-jiā de jiǎo-bù.)",
          "translation": "The sky has darkened (change), the storm is about to come (inchoative), and people on the road all accelerated their steps home (completion)."
        },
        {
          "target": "我以前从来没学过太极拳，今天在操场跟李老师学了一套动作，太有趣了！(Wǒ yǐqián cónglái méi xué guo tàijíquán, jīntiān zài cāochǎng gēn Lǐ lǎoshī xué le yí tào dòngzuò, tài yǒuqù le!)",
          "reading": "[wɔ˨˩ i˨˩.t͡ɕʰjɛn˧˥ t͡sʰʊŋ˧˥.laɪ̯˧˥ meɪ̯˧˥ ɕɥɛ˧˥ kwɔ tʰaɪ̯˥˩.t͡ɕi˧˥.t͡ɕʰɥɛn˧˥, t͡ɕin˥.tʰjɛn˥ t͡saɪ̯˥˩ t͡sʰaʊ̯˥.ʈ͡ʂʰɑŋ˨˩˦ kən˥ li˨˩˦ laʊ˨˩.ʂɨ˥ ɕɥɛ˧˥ lɤ i˥ tʰaʊ̯˥˩ tʊŋ˥˩.t͡swɔ˥˩, tʰaɪ̯˥˩ joʊ̯˨˩.t͡ɕʰy˥˩ lɤ!] (Wǒ yǐ-qián cóng-lái méi xué guo tài-jí-quán, jīn-tiān zài cāo-chǎng gēn Lǐ lǎo-shī xué le yí tào dòng-zuò, tài yǒu-qù le!)",
          "translation": "I had never learned Tai Chi before (negative experience); today I learned a set of movements from Teacher Li on the sports ground (completion), which was so interesting (exclamation)!"
        },
        {
          "target": "——你在中国住了多长时间了？——我住了两年了，去过十几个城市。(—Nǐ zài Zhōngguó zhù le duō cháng shíjiān le? —Wǒ zhù le liǎng nián le, qù guo shí jǐ gè chéngshì.)",
          "reading": "[—ni˨˩˦ t͡saɪ̯˥˩ ʈ͡ʂʊŋ˥.kwɔ˧˥ ʈ͡ʂu˥˩ lɤ twɔ˥ ʈ͡ʂʰɑŋ˧˥ ʂɨ˧˥.t͡ɕjɛn˥ lɤ? —wɔ˨˩ ʈ͡ʂu˥˩ lɤ ljaŋ˨˩ njɛn˧˥ lɤ, t͡ɕʰy˥˩ kwɔ ʂɨ˧˥ t͡ɕi˨˩˦ kɤ ʈ͡ʂʰɤŋ˧˥.ʂɨ˥˩] (—Nǐ zài Zhōng-guó zhù le duō cháng shí-jiān le? —Wǒ zhù le liǎng nián le, qù guo shí jǐ gè chéng-shì.)",
          "translation": "—How long have you lived in China? —I have lived here for two years (ongoing), and have visited over ten cities (experience)."
        }
      ],
      "mnemonics": [
        "动了表完成，句了表变更；双了延至今，经验过字承！篇章四体合，叙事最传神！"
      ],
      "culturalNotes": [
        "掌握汉语独特的体貌体系（Aspectual System）是构建高级叙事连贯性的中枢纽带。通过「了₁、了₂、双了、过」在同一篇章中的交织运用，叙述者能够如电影镜头切换般精准呈现动作的发生、环境的流转、经历的回忆与现时的持续。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在叙述成长经历时，表达「在中国居住了三年且目前仍在居住，期间曾去过长城」，句式组合正确的是：",
          "options": [
            "我在中国住了三年了，去过长城。(双「了」表持续 + 「过」表经历)",
            "我在中国住了三年过，去了长城了。",
            "我在中国住着三年，去在长城了。",
            "我住在中国三年着了，去过长城了在。"
          ],
          "answerIndex": 0,
          "explanation": "「住了三年了」准确表达持续至今；「去过长城」准确表达过往旅游经历。"
        },
        {
          "prompt": "在篇章「下雪了，天气冷了，我们买了一台暖气机」中，三个助词的语法功能依次是：",
          "options": [
            "状态变化（了₂） -> 状态变化（了₂） -> 动作完成（了₁）",
            "动作完成 -> 动作完成 -> 动作完成",
            "经历体 -> 经历体 -> 经历体",
            "状态变化 -> 经历体 -> 状态变化"
          ],
          "answerIndex": 0,
          "explanation": "「下雪了」和「冷了」是事态与天气变化，「买了一台」是动词动作实现。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "请选出下列叙述中体貌助词运用完全严密、逻辑天衣无缝的一项：",
          "options": [
            "我来中国学习一年了，以前没学过汉语，昨天参加了汉语水平考试。(持续体 + 否定经历 + 动作完成)",
            "我来中国学习一年过，以前没学了汉语，昨天参加过汉语考试了。",
            "我来中国学习一年着，以前不学过汉语，昨天参加在考试。",
            "我来中国学习了一年了，以前没学了汉语，昨天参加过考试了。"
          ],
          "answerIndex": 0,
          "explanation": "双「了」（持续）、「没学过」（否定经历）、「参加了」（完成），语法体系极其严谨。"
        },
        {
          "prompt": "在句子「火车快要进站了，乘客们都站起来了」中，句末两个「了」共同表达的核心功能是：",
          "options": [
            "传递即将发生与新动作状态的开启（事态转变）",
            "表示所有动作完全结束于遥远的过去",
            "表示否定与拒绝",
            "表示被动语态"
          ],
          "answerIndex": 0,
          "explanation": "「快要...了」表示动作即将发生，「站起来了」表示新动作状态的产生。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列叙事语篇中动词「了₁」、句末「了₂」、双「了」与「过」运用完全规范得体的一项：",
          "options": [
            "我在北京生活了两年了，尝过很多地道的中华美食。春天来了，天气暖和了，昨天我和朋友去公园拍了很多美丽的照片。(持续、经历、变化与完成四体合璧)",
            "我在北京生活了两年过，尝了许多美食了。春天来过，天气暖和着，昨天我和朋友拍照片很多了。(体貌助词全面错用)",
            "我在北京生活两年了在，尝过美食很多了。春天来在，天气冷过，昨天我和朋友拍了很多照片在公园。(语序与虚词混乱)",
            "我在北京生活两年着，没尝过美食了。春天快到过，昨天我和朋友拍了照片没有。(语法严重缺陷)"
          ],
          "answerIndex": 0,
          "explanation": "该语篇在双「了」（生活了两年了）、经历体（尝过美食）、句末变化（春天来了/暖和了）以及动作完成（拍了很多照片）上均达到了现代汉语典范水准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示曾经拥有过往体验的经历体动态助词核心单字汉字（拼音为 guò / guo）：",
          "acceptedAnswers": [
            "过"
          ],
          "explanation": "汉字「过」是标记过往经历与人生体验的核心动态助词。"
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
    "title": "空间方位词系统与处所名词构成（上/下/前/后/左/右/里/外/东/南/西/北与「边/面/头」） (Spatial Locatives & Suffixes - bian/mian/tou)",
    "level": "A2",
    "objective": "系统掌握现代汉语单音节空间方位词（上下前后左右里外东南西北）及其与后缀「边/面/头」构词规则，掌握普通名词处所化机制，熟练运用空间位置描写句式。",
    "presentation": {
      "explanation": "在现代汉语中，空间方位的表达由一套高度严密、逻辑清晰的「方位词（Locative Words）」体系所支撑：\n\n一、核心单音节方位词与构词后缀衍生系统：\n1. 单音节基元方位词：上、下、前、后、左、右、里、外、东、南、西、北、中、间、旁、对。\n2. 后缀复合构成规律（「边 (biān)」、「面 (miàn)」、「头 (tóu)」）：\n-「边」与「面」：上边/上面、下边/下面、前边/前面、后边/后面、左边/左面、右边/右面、里边/里面、外边/外面、东边/东面、南边/南面、西边/西面、北边/北面。\n-「头」：主要用于口语中表达上下前后里外（上头、下头、前头、后头、里头、外头）。\n- 特殊方位词：旁边（不能说*旁面）、中间（不能说*中边）、对面（不能说*对头）。\n\n二、名词的「处所化」机制（极重要句法规则）：\n1. 普通实体名词本身不具备处所性质，不能直接作处所状语或「在」的宾语，必须后接方位词构成「处所短语」：\n- 桌子（实体名词） -> 桌子上 / 桌子下边（处所短语）\n- 房间（实体名词） -> 房间里 / 房间外头（处所短语）\n- 学校（实体名词） -> 学校对面 / 学校东面（处所短语）\n\n2. 专有名词与地名禁忌铁律：\n- 国名、省名、城市等固定地理专有名词自身即具备处所属性，其后**绝对严禁随意加「里」或「在」**：\n- 规范正确：在中国、在上海、在北京。\n- 严重病句：*在中国里*、*在上海里*、*在北京市里头*。\n\n三、典型存在与位置描写句型：\n-「处所词/方位短语 + 有/是 + 人/物」：桌子上有一台笔记本电脑。\n-「人/物 + 在 + 处所词/方位短语」：汉语大词典在书架的最上层。",
      "examples": [
        {
          "target": "汉语大词典在书架的最上边，你可以搬一把椅子拿下来。(Hànyǔ dà cídiǎn zài shūjià de zuì shàngbian, nǐ kěyǐ bān yì bǎ yǐzi ná xiàlái.)",
          "reading": "[xan˥˩.y˨˩˦ ta˥˩ t͡sʰɨ˧˥.tjɛn˨˩˦ t͡saɪ̯˥˩ ʂu˥.t͡ɕja˥˩ tɤ t͡sweɪ̯˥˩ ʂɑŋ˥˩.pjɛn, ni˨˩˦ kʰɤ˨˩.i˨˩˦ pan˥ i˥ pa˨˩˦ i˨˩.t͡sɨ na˧˥ ɕja˥˩.laɪ̯] (Hàn-yǔ dà cí-diǎn zài shū-jià de zuì shàng-bian, nǐ kě-yǐ bān yì bǎ yǐ-zi ná xià-lái.)",
          "translation": "The unabridged Chinese dictionary is on the top shelf of the bookcase; you can move a chair to take it down."
        },
        {
          "target": "学校图书馆的东面是一座现代化实验大楼，西面是绿树成荫的操场。(Xuéxiào túshūguǎn de dōngmiàn shì yí zuò xiàndàihuà shíyàn dàlóu, xīmiàn shì lǜshù-chéngyīn de cāochǎng.)",
          "reading": "[ɕɥɛ˧˥.ɕjaʊ̯˥˩ tʰu˧˥.ʂu˥.kwan˨˩˦ tɤ tʊŋ˥.mjɛn˥˩ ʂɨ˥˩ i˧˥ t͡swɔ˥˩ ɕjɛn˥˩.taɪ̯˥˩.xwa˥˩ ʂɨ˧˥.jɛn˥˩ ta˥˩.loʊ̯˧˥, ɕi˥.mjɛn˥˩ ʂɨ˥˩ ly˥˩.ʂu˥˩.ʈ͡ʂʰɤŋ˧˥.in˥ tɤ t͡sʰaʊ̯˥.ʈ͡ʂʰɑŋ˨˩˦] (Xué-xiào tú-shū-guǎn de dōng-miàn shì yí zuò xiàn-dài-huà shí-yàn dà-lóu, xī-miàn shì lǜ-shù-chéng-yīn de cāo-chǎng.)",
          "translation": "To the east of the school library is a modernized laboratory building, and to the west is a shaded athletic field."
        },
        {
          "target": "咖啡厅在银行的对面，中间隔着一条宽阔的城市主干道。(Kāfēitīng zài yínháng de duìmiàn, zhōngjiān gé zhe yì tiáo kuānkuò de chéngshì zhǔgàndào.)",
          "reading": "[kʰa˥.feɪ̯˥.tʰiŋ˥ t͡saɪ̯˥˩ in˧˥.xɑŋ˧˥ tɤ tweɪ̯˥˩.mjɛn˥˩, ʈ͡ʂʊŋ˥.t͡ɕjɛn˥ kɤ˧˥ ʈ͡ʂɤ i˥ tʰjaʊ̯˧˥ kʰwan˥.kʰwɔ˥˩ tɤ ʈ͡ʂʰɤŋ˧˥.ʂɨ˥˩ ʈ͡ʂu˨˩.kan˥˩.taʊ̯˥˩] (Kā-fēi-tīng zài yín-háng de duì-miàn, zhōng-jiān gé zhe yì tiáo kuān-kuò de chéng-shì zhǔ-gàn-dào.)",
          "translation": "The cafe is opposite the bank, with a wide urban arterial road in between."
        },
        {
          "target": "我的黑色双肩包放在桌子下头，里面有两本新教材和一支钢笔。(Wǒ de hēisè shuāngjiānbāo fàng zài zhuōzi xiàtou, lǐmiàn yǒu liǎng běn xīn jiàocái hé yì zhī gāngbǐ.)",
          "reading": "[wɔ˨˩ tɤ xeɪ̯˥.sɤ˥˩ ʂwaŋ˥.t͡ɕjɛn˥.paʊ̯˥ fɑŋ˥˩ t͡saɪ̯˥˩ t͡swɔ˥.t͡sɨ ɕja˥˩.tʰoʊ̯, li˨˩˦.mjɛn joʊ̯˨˩˦ ljaŋ˨˩˦ pən˨˩˦ ɕin˥ t͡ɕjaʊ̯˥˩.t͡sʰaɪ̯˧˥ xɤ˧˥ i˥ ʈ͡ʂɨ˥ kɑŋ˥.pi˨˩˦] (Wǒ de hēi-sè shuāng-jiān-bāo fàng zài zhuō-zi xià-tou, lǐ-miàn yǒu liǎng běn xīn jiào-cái hé yì zhī gāng-bǐ.)",
          "translation": "My black backpack is placed under the table; inside there are two new textbooks and a fountain pen."
        }
      ],
      "mnemonics": [
        "方位单字加上边面头，桌上屋里处所留；地名国名不加里，东方西方照水流！"
      ],
      "culturalNotes": [
        "中国传统建筑与城市空间规划深度融入了以「四正方位（东、南、西、北）」为核心的空间哲学。例如古都北京坐北朝南的中轴线格局。北方人在日常指路时，极习惯使用「往东走」、「在路北」等绝对地理坐标，展现了独特的地理方位认知习惯。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "要表达「书架的最上面放着词典」，正确的方位短语是：",
          "options": [
            "书架的最上边 / 最上面 (shūjià de zuì shàngbian/shàngmiàn)",
            "书架的最上头面",
            "书架的最上边里",
            "书架的最面头"
          ],
          "answerIndex": 0,
          "explanation": "「上」可接后缀「边」或「面」构成标准方位词「上边/上面」。"
        },
        {
          "prompt": "下列关于地理专有名词与方位词的搭配中，完全符合汉语语法规范的是：",
          "options": [
            "他在北京工作。(专有名词不随意加「里」)",
            "他在北京里工作。(病句：地名误加「里」)",
            "他在中国里面生活。(病句：国名误加「里面」)",
            "他在上海城市里头居住。(表达累赘不规范)"
          ],
          "answerIndex": 0,
          "explanation": "城市名、国名自身具有处所属性，无需也不应加「里」或「里面」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "在句子「学校的______是一座新建的体育馆，环境非常好」中，表示两建筑相对位置的词语是：",
          "options": [
            "对面 (duìmiàn - opposite)",
            "对边",
            "对头",
            "对上"
          ],
          "answerIndex": 0,
          "explanation": "表示空间相对位置时，固定搭配为「对面」，不能说「对边」或「对头」。"
        },
        {
          "prompt": "下列哪一项属于由于方位词误用而导致的病句？",
          "options": [
            "我昨天在中国里买了很多中国传统茶叶。(病句：国名后误加「里」)",
            "我昨天在中国买了很多中国传统茶叶。",
            "茶叶放在茶几上面的盒子里。",
            "茶几旁边有一把红木椅子。"
          ],
          "answerIndex": 0,
          "explanation": "「在中国里」属于初学者极易出现的语法偏误，国名后不可加「里」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中空间方位词运用完全规范精准的一项：",
          "options": [
            "新华书店在学校东门的正对面，书店的左边是一家安静的咖啡馆。(方位词搭配与空间指引完全严密规范)",
            "新华书店在学校东门的正对边，书店的左头是一家咖啡馆。(对边/左头误用)",
            "新华书店在北京市里东门，书店的旁面有一家咖啡馆。(市里/旁面误用)",
            "新华书店东边在学校对面，左边里是咖啡馆。(语序错乱)"
          ],
          "answerIndex": 0,
          "explanation": "「正对面」、「左边」方位词规范得体，空间结构交代条理井然。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入与方位词「前、后、左、右、东、南、西、北」组合构成双音节方位词的单字汉字后缀（拼音为 biān）：",
          "acceptedAnswers": [
            "边"
          ],
          "explanation": "汉字「边」是构成汉语空间方位词系统最核心的词缀之一。"
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
    "title": "空间介词「在/从/往/向/离」与相对距离句式（A离B很远/近、从A到B、往/向+方向+动词） (Locative Prepositions & Distance Expressions)",
    "level": "A2",
    "objective": "熟练掌握空间介词「在、从、往、向、离」的语法功能与句法位置，掌握「A离B很远/近」相对距离表达与「往/向+方向+动词」位移指向结构。",
    "presentation": {
      "explanation": "在现代汉语中，空间位置的标定、起止路径的延伸以及位移运动的朝向，通过一组功能明确的空间介词来实现：\n\n一、相对空间与时间距离介词「离 (lí)」：\n1. 核心句式模型：\n-「地点A + 离 + 地点B + 很远 / 很近 / 不太远 / 有多远？/ 有五公里」\n- 我们大学离市中心很近，交通十分便利。\n- 请问这里离火车站有多远？\n2.「离」亦可引申表达时间跨度：\n- 离期末考试还有整整两个星期。\n\n二、起止路径介词框架「从 (cóng)......到 (dào)......」：\n- 标定动作位移的起点与终点：\n- 从北京乘坐高铁到上海只需要四个半小时。\n- 从我家到公司每天步行大概需要二十分钟。\n\n三、位移方向指向介词「往 (wǎng)」与「向 (xiàng)」：\n1. 核心句式模型：「往 / 向 + 方位词/处所 + 谓语动词」：\n- 往东走 (Walk towards the east) / 向前看 (Look forward)\n- 往右拐 (Turn right) / 向左转 (Turn left)\n2.「往」与「向」的细微语体辨析：\n-「往」更多用于口语中具体的物理位移（往上爬、往前开）。\n-「向」既可用于物理位移，也可用于抽象对象或敬称（向老师请教、向英雄学习）。\n\n四、介词短语的句法位置铁律：\n- 汉语介词短语（状语）**必须置于谓语动词之前**（S + [介宾短语] + V + O），绝不能置于句末：\n- 正确：我们[从北京]出发。\n- 严重病句：*我们出发从北京*。",
      "examples": [
        {
          "target": "我们学校离市中心的大型购物商场不太远，坐地铁只需十五分钟。(Wǒmen xuéxiào lí shìzhōngxīn de dàxíng gòuwù shāngchǎng bú tài yuǎn, zuò dìtiě zhǐ xū shíwǔ fēnzhōng.)",
          "reading": "[wɔ˨˩.mən ɕɥɛ˧˥.ɕjaʊ̯˥˩ li˧˥ ʂɨ˥˩.ʈ͡ʂʊŋ˥.ɕin˥ tɤ ta˥˩.ɕiŋ˧˥ koʊ̯˥˩.u˥˩ ʂɑŋ˥.ʈ͡ʂʰɑŋ˨˩˦ pu˧˥ tʰaɪ̯˥˩ jɥɛn˨˩˦, t͡swɔ˥˩ ti˥˩.tʰjɛ˨˩˦ ʈ͡ʂɨ˨˩˦ ɕy˥ ʂɨ˧˥.u˨˩˦ fən˥.ʈ͡ʂʊŋ˥] (Wǒ-men xué-xiào lí shì-zhōng-xīn de dà-xíng gòu-wù shāng-chǎng bú tài yuǎn, zuò dì-tiě zhǐ xū shí-wǔ fēn-zhōng.)",
          "translation": "Our school is not very far from the large shopping mall in the city center; it takes only 15 minutes by subway."
        },
        {
          "target": "从北京乘坐复兴号高铁到上海，全程一千三百多公里只需要四个多小时。(Cóng Běijīng chéngzuò Fùxīnghào gāotiě dào Shànghǎi, quánchéng yìqiān sānbǎi duō gōnglǐ zhǐ xūyào sì gè duō xiǎoshí.)",
          "reading": "[t͡sʰʊŋ˧˥ peɪ̯˨˩.t͡ɕiŋ˥ ʈ͡ʂʰɤŋ˧˥.t͡swɔ˥˩ fu˥˩.ɕiŋ˥.xaʊ̯˥˩ kaʊ̯˥.tʰjɛ˨˩˦ taʊ̯˥˩ ʂɑŋ˥˩.xaɪ̯˨˩˦, t͡ɕʰyɛn˧˥.ʈ͡ʂʰɤŋ˧˥ i˥.t͡ɕʰjɛn˥ san˥.paɪ̯˨˩˦ twɔ˥ kʊŋ˥.li˨˩˦ ʈ͡ʂɨ˨˩˦ ɕy˥.jaʊ̯˥˩ sɨ˥˩ kɤ twɔ˥ ɕjaʊ̯˨˩.ʂɨ˨˩˦] (Cóng Běi-jīng chéng-zuò Fù-xīng-hào gāo-tiě dào Shàng-hǎi, quán-chéng yì-qiān sān-bǎi duō gōng-lǐ zhǐ xū-yào sì gè duō xiǎo-shí.)",
          "translation": "Taking the Fuxing high-speed train from Beijing to Shanghai, the entire journey of over 1,300 kilometers takes only four-odd hours."
        },
        {
          "target": "走到前面的十字路口，请向右拐，然后一直往前走两百米。(Zǒu dào qiánmiàn de shízìlùkǒu, qǐng xiàng yòu guǎi, ránhòu yìzhí wǎng qián zǒu liǎng bǎi mǐ.)",
          "reading": "[t͡soʊ̯˨˩.taʊ̯˥˩ t͡ɕʰjɛn˧˥.mjɛn˥˩ tɤ ʂɨ˧˥.t͡sɨ˥˩.lu˥˩.kʰoʊ̯˨˩˦, t͡ɕʰiŋ˨˩˦ ɕjɑŋ˥˩ joʊ̯˥˩ kwaɪ̯˨˩˦, ʐan˧˥.xoʊ̯˥˩ i˥.ʈ͡ʂɨ˧˥ wɑŋ˨˩˦ t͡ɕʰjɛn˧˥ t͡soʊ̯˨˩ ljaŋ˨˩˦ paɪ̯˨˩˦ mi˨˩˦] (Zǒu dào qián-miàn de shí-zì-lù-kǒu, qǐng xiàng yòu guǎi, rán-hòu yì-zhí wǎng qián zǒu liǎng bǎi mǐ.)",
          "translation": "When you walk to the intersection ahead, please turn right, and then walk straight forward for two hundred meters."
        },
        {
          "target": "——请问从这里到中国国家大剧院有多远？——大概有三公里左右。(—Qǐngwèn cóng zhèlǐ dào Zhōngguó Guójiā Dàjùyuàn yǒu duō yuǎn? —Dàgài yǒu sān gōnglǐ zuǒyòu.)",
          "reading": "[—t͡ɕʰiŋ˨˩˦.wən˥˩ t͡sʰʊŋ˧˥ ʈ͡ʂɤ˥˩.li˨˩˦ taʊ̯˥˩ ʈ͡ʂʊŋ˥.kwɔ˧˥ kwɔ˧˥.t͡ɕja˥ ta˥˩.t͡ɕy˥˩.ɥɛn˥˩ joʊ̯˨˩˦ twɔ˥ jɥɛn˨˩˦? —ta˥˩.kaɪ̯˥˩ joʊ̯˨˩˦ san˥ kʊŋ˥.li˨˩˦ t͡swɔ˨˩˦.joʊ̯˥˩] (—Qǐng-wèn cóng zhè-lǐ dào Zhōng-guó Guó-jiā Dà-jù-yuàn yǒu duō yuǎn? —Dà-gài yǒu sān gōng-lǐ zuǒ-yòu.)",
          "translation": "—Excuse me, how far is it from here to the National Centre for the Performing Arts? —It is roughly about three kilometers."
        }
      ],
      "mnemonics": [
        "A离B远近明，从起向终路径清；往东向右动词前，介宾状语步步赢！"
      ],
      "culturalNotes": [
        "在汉语空间哲学中，表达方位移动时遵循「起点在先，位移居中，归宿在后」的自然时间线性顺序。因此「从A到B」与「往/向+方向+动词」始终保持动词前置介词短语的严整格式。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "要表达「图书馆离学生宿舍不远」，正确的句子结构是：",
          "options": [
            "图书馆离学生宿舍不远。(A + 离 + B + 形容词)",
            "图书馆从学生宿舍不远。",
            "图书馆向学生宿舍不远。",
            "图书馆在学生宿舍不远。"
          ],
          "answerIndex": 0,
          "explanation": "表达两地相对空间距离时，必须使用介词「离」（A离B远/近）。"
        },
        {
          "prompt": "在句子「请您走到红绿灯路口______右拐」中，表示位移方向的介词是：",
          "options": [
            "向 / 往 (xiàng / wǎng yòu guǎi)",
            "离",
            "从",
            "在"
          ],
          "answerIndex": 0,
          "explanation": "表示朝向某一方向转弯位移，使用「向」或「往」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "下列哪一个句子由于介词短语位置后置而构成了病句？",
          "options": [
            "我们明天坐高速列车出发从北京。(病句：介词短语置于动词后)",
            "我们明天坐高速列车从北京出发。",
            "从北京到天津只需要半个小时。",
            "北京离天津非常近。"
          ],
          "answerIndex": 0,
          "explanation": "汉语介词短语必须放在谓语动词之前作状语，不可置于动词后。"
        },
        {
          "prompt": "询问两地之间的具体距离，最地道的疑问格式是：",
          "options": [
            "从这里到市中心有多远？ / 这里离市中心有多远？",
            "从这里在市中心有多远？",
            "这里向市中心有多远？",
            "这里往市中心有多远？"
          ],
          "answerIndex": 0,
          "explanation": "询问距离标准句式为「A离B有多远？」或「从A到B有多远？」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列句子中空间介词「离、从、到、向、往」运用完全规范得体的一项：",
          "options": [
            "我们学校离地铁站只有五百米，从校门口一直往前走，在十字路口向左拐就到了。(介词搭配与语序完全严密精确)",
            "我们学校从地铁站只有五百米，离校门口往前走一直。(介词混乱)",
            "我们学校向地铁站很近，往校门口出发到地铁站从。(虚词颠倒)",
            "我们学校在地铁站五百米离，从走往左拐。(结构瓦解)"
          ],
          "answerIndex": 0,
          "explanation": "「离地铁站」、「从校门口」、「往前走」、「向左拐」层层递进，语法完全标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示标定两地之间相对距离的核心单字介词汉字（拼音为 lí）：",
          "acceptedAnswers": [
            "离"
          ],
          "explanation": "汉字「离」在现代汉语中充当标定空间与时间相对跨度的核心介词。"
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
    "title": "城市公共交通工具与出行方式（坐/乘/骑/开/换乘、地铁、公交、出租车与高铁） (Urban Transit & Commuting Verbs)",
    "level": "A2",
    "objective": "系统掌握现代城市公共交通工具词汇（地铁、公交车、出租车、网约车、高铁、共享单车）及对应谓语动词搭配（坐/乘/骑/开/换乘），掌握连动式出行句型。",
    "presentation": {
      "explanation": "在现代中国城市生活中，公共交通出行词汇与连动句式是日常交际的高频核心：\n\n一、核心城市交通工具词汇体系：\n1. 轨道与陆地公共交通：地铁 (dìtiě)、公共汽车 / 公交车 (gōngjiāochē)、轻轨 (qīngguǐ)、有轨电车 (yǒuguǐ diànchē)。\n2. 城际高速客运：高速铁路 / 高铁 (gāotiě)、动车 (dòngchē)、普速列车 / 火车 (huǒchē)。\n3. 乘用车与点对点交通：出租车 (chūzūchē)、网约车 (wǎngyuēchē)、私家车 (sījiāchē)。\n4. 慢行与绿色交通：自行车 (zìxíngchē)、共享单车 (gòngxiǎng dānchē)、电动车 (diàndòngchē)。\n5. 航空与水运：飞机 (fēijī)、轮渡 (lúndù)、轮船 (lúnchuán)。\n\n二、出行方式动词搭配精准铁律：\n1.「坐 (zuò) / 乘 (chéng)」：适用于乘坐有专人驾驶的客运工具（坐地铁、坐公交车、坐出租车、坐高铁、乘飞机）。\n2.「骑 (qí)」：适用于跨骑类两轮交通工具（骑自行车、骑共享单车、骑摩托车）。\n3.「开 (kāi)」：适用于亲自驾驶机动车（开车、开私家车、开出租车）。\n4.「走路 / 步行 (zǒulù / bùxíng)」：适用于徒步出行。\n\n三、连动句式表达出行手段与目的：\n-「主语 + [交通方式动词短语] + 去/到 + [目的地] + (做某事)」：\n- 我每天早晨[坐地铁五号线]去[公司上班]。\n- 他[骑共享单车]到[图书馆借书]。\n\n四、地铁换乘与站台常用交际表达：\n- 换乘 / 转乘：在一号线人民广场站换乘二号线。\n- 进站 / 出站：刷卡进站、扫码出站、A出入口。\n- 始发与终到：首班车 (First train)、末班车 (Last train)。",
      "examples": [
        {
          "target": "我每天早晨骑共享单车去地铁站，然后坐八号线去公司上班。(Wǒ měitiān zǎochén qí gòngxiǎng dānchē qù dìtiězhàn, ránhòu zuò bā hào xiàn qù gōngsī shàngbān.)",
          "reading": "[wɔ˨˩ meɪ̯˨˩.tʰjɛn˥ t͡saʊ̯˨˩˦.ʈ͡ʂʰən t͡ɕʰi˧˥ kʊŋ˥˩.ɕjɑŋ˨˩˦ tan˥.ʈ͡ʂʰɤ t͡ɕʰy˥˩ ti˥˩.tʰjɛ˨˩.ʈ͡ʂan˥˩, ʐan˧˥.xoʊ̯˥˩ t͡swɔ˥˩ pa˥ xaʊ̯˥˩ ɕjɛn˥˩ t͡ɕʰy˥˩ kʊŋ˥.sɨ˥ ʂɑŋ˥˩.pan˥] (Wǒ měi-tiān zǎo-chén qí gòng-xiǎng dān-chē qù dì-tiě-zhàn, rán-hòu zuò bā hào xiàn qù gōng-sī shàng-bān.)",
          "translation": "Every morning I ride a shared bike to the subway station and then take Line 8 to go to work at the company."
        },
        {
          "target": "如果赶时间去首都国际机场，最好在市区东直门乘坐机场快轨列车。(Rúguǒ gǎn shíjiān qù Shǒudū Guójì Jīchǎng, zuì hǎo zài shìqū Dōngzhímén chéngzuò jīchǎng kuàiguǐ lièchē.)",
          "reading": "[ʐu˧˥.kwɔ˨˩˦ kan˨˩˦ ʂɨ˧˥.t͡ɕjɛn˥ t͡ɕʰy˥˩ ʂoʊ̯˨˩.tu˥ kwɔ˧˥.t͡ɕi˥˩ t͡ɕi˥.ʈ͡ʂʰɑŋ˨˩˦, t͡sweɪ̯˥˩ xaʊ̯˨˩˦ t͡saɪ̯˥˩ ʂɨ˥˩.t͡ɕʰy˥ tʊŋ˥.ʈ͡ʂɨ˧˥.mən˧˥ ʈ͡ʂʰɤŋ˧˥.t͡swɔ˥˩ t͡ɕi˥.ʈ͡ʂʰɑŋ˨˩ kuai˥˩.kweɪ̯˨˩˦ ljɛ˥˩.ʈ͡ʂʰɤ˥] (Rú-guǒ gǎn shí-jiān qù Shǒu-dū Guó-jì Jī-chǎng, zuì hǎo zài shì-qū Dōng-zhí-mén chéng-zuò jī-chǎng kuài-guǐ liè-chē.)",
          "translation": "If you are pressed for time to go to Capital International Airport, it is best to take the airport express train at Dongzhimen in the downtown area."
        },
        {
          "target": "你需要先坐地铁一号线，在人民广场站换乘二号线，坐三站后在南京东路站下车。(Nǐ xūyào xiān zuò dìtiě yī hào xiàn, zài Rénmín Guǎngchǎng zhàn huànchéng èr hào xiàn, zuò sān zhàn hòu zài Nánjīng Dōnglù zhàn xiàchē.)",
          "reading": "[ni˨˩˦ ɕy˥.jaʊ̯˥˩ ɕjɛn˥ t͡swɔ˥˩ ti˥˩.tʰjɛ˨˩˦ i˥ xaʊ̯˥˩ ɕjɛn˥˩, t͡saɪ̯˥˩ ʐən˧˥.min˧˥ kwaŋ˨˩.ʈ͡ʂʰɑŋ˨˩˦ ʈ͡ʂan˥˩ xwan˥˩.ʈ͡ʂʰɤŋ˧˥ aɚ˥˩ xaʊ̯˥˩ ɕjɛn˥˩, t͡swɔ˥˩ san˥ ʈ͡ʂan˥˩ xoʊ̯˥˩ t͡saɪ̯˥˩ nan˧˥.t͡ɕiŋ˥ tʊŋ˥.lu˥˩ ʈ͡ʂan˥˩ ɕja˥˩.ʈ͡ʂʰɤ˥] (Nǐ xū-yào xiān zuò dì-tiě yī hào xiàn, zài Rén-mín Guǎng-chǎng zhàn huàn-chéng èr hào xiàn, zuò sān zhàn hòu zài Nán-jīng Dōng-lù zhàn xià-chē.)",
          "translation": "You need to take Subway Line 1 first, transfer to Line 2 at People's Square Station, and get off at East Nanjing Road Station after three stops."
        },
        {
          "target": "现在的中国大城市出行非常便捷，手机扫码就可以骑共享单车或乘坐公交地铁。(Xiànzài de Zhōngguó dà chéngshì chūxíng fēicháng biànjié, shǒujī sǎomǎ jiù kěyǐ qí gòngxiǎng dānchē huò chéngzuò gōngjiāo dìtiě.)",
          "reading": "[ɕjɛn˥˩.t͡saɪ̯˥˩ tɤ ʈ͡ʂʊŋ˥.kwɔ˧˥ ta˥˩ ʈ͡ʂʰɤŋ˧˥.ʂɨ˥˩ t͡ʂʰu˥.ɕiŋ˧˥ feɪ̯˥.ʈ͡ʂʰɑŋ˧˥ pjɛn˥˩.t͡ɕjɛ˧˥, ʂoʊ̯˨˩.t͡ɕi˥ saʊ̯˨˩.ma˨˩˦ t͡ɕjoʊ̯˥˩ kʰɤ˨˩.i˨˩˦ t͡ɕʰi˧˥ kʊŋ˥˩.ɕjɑŋ˨˩˦ tan˥.ʈ͡ʂʰɤ xwo˥˩ ʈ͡ʂʰɤŋ˧˥.t͡swɔ˥˩ kʊŋ˥.t͡ɕjaʊ̯˥ ti˥˩.tʰjɛ˨˩˦] (Xiàn-zài de Zhōng-guó dà chéng-shì chū-xíng fēi-cháng biàn-jié, shǒu-jī sǎo-mǎ jiù kě-yǐ qí gòng-xiǎng dān-chē huò chéng-zuò gōng-jiāo dì-tiě.)",
          "translation": "Travel in modern Chinese major cities is extremely convenient; you can ride shared bikes or take public buses and subways simply by scanning a QR code with a mobile phone."
        }
      ],
      "mnemonics": [
        "坐车乘机骑单车，开动私车转地铁；换乘站点按线走，扫码出行快如铁！"
      ],
      "culturalNotes": [
        "中国建成了全球规模最大的高速铁路网和城市轨道交通网络。在各大主要城市，「手机扫码一码通乘」与遍布街巷的「共享单车」构成了极具中国特色的智慧绿色出行方式。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "与交通工具「自行车 / 共享单车」搭配的正确动词是：",
          "options": [
            "骑 (qí zìxíngchē / qí gòngxiǎng dānchē)",
            "坐",
            "开",
            "乘"
          ],
          "answerIndex": 0,
          "explanation": "跨骑两轮车辆必须使用动词「骑」（骑自行车、骑摩托车）。"
        },
        {
          "prompt": "在地铁线路中，表达「从一号线转到二号线」的专业规范动词是：",
          "options": [
            "换乘 / 转乘 (huànchéng / zhuǎnchéng)",
            "改坐",
            "变车",
            "替乘"
          ],
          "answerIndex": 0,
          "explanation": "在轨道交通中，转换线路的标准术语为「换乘」或「转乘」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "要表达「开着私家车去郊区旅游」，正确的动宾搭配是：",
          "options": [
            "开车 / 开私家车 (kāi chē / kāi sījiāchē)",
            "骑私家车",
            "坐开私家车",
            "步私家车"
          ],
          "answerIndex": 0,
          "explanation": "亲自驾驶汽车必须使用动词「开」（开车）。"
        },
        {
          "prompt": "连动句表达出行手段：下列哪一项在句式逻辑与动词搭配上完全正确？",
          "options": [
            "王老师每天骑自行车到大学图书馆查阅文献资料。(手段在先，目的在后)",
            "王老师每天到大学图书馆查阅文献骑自行车资料。(语序混乱)",
            "王老师每天坐自行车到大学图书馆查阅资料。(动词误用)",
            "王老师每天开自行车去查阅资料。(动词误用)"
          ],
          "answerIndex": 0,
          "explanation": "连动句遵循「S + [方式方式动词短语] + 去/到 + [目的地点] + [动作]」的标准逻辑。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列出行与交通叙述中动词搭配与句法完全规范得体的一项：",
          "options": [
            "我打算明天早晨乘高铁去北京出差，到了北京南站后再坐四号线地铁去酒店。(乘高铁、坐地铁搭配精准自然)",
            "我打算明天早晨骑高铁去北京出差，到了北京南站后开四号线地铁。(动词严重错用)",
            "我打算明天早晨走高铁去北京，坐四号线地铁在骑去酒店。(句式杂糅错乱)",
            "我打算明天早晨开高铁出差北京，到了后乘自行车。(动宾搭配荒谬)"
          ],
          "answerIndex": 0,
          "explanation": "「乘高铁」、「坐地铁」搭配规范，行程时序条理分明。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示城市地下铁道交通工具的核心双字词语汉字（拼音为 dìtiě）：",
          "acceptedAnswers": [
            "地铁"
          ],
          "explanation": "词语「地铁」是现代汉语中指称地下铁道系统的最常用词汇。"
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
    "title": "问路与指路经典会话句式（请问去...怎么走、一直往前走、过马路、红绿灯） (Asking & Giving Directions Discourse)",
    "level": "A2",
    "objective": "熟练掌握汉语街头问路礼貌开场白（请问/劳驾/师傅）、指路方位指令（一直往前走、向左拐/向右转、过马路、红绿灯路口）及地标确认句型。",
    "presentation": {
      "explanation": "掌握地道自然的问路与指路交际句式，是顺利融入汉语真实语境的重要能力：\n\n一、礼貌问路核心句式与尊称开场白：\n1. 尊称与礼貌开场：\n-「请问，去......怎么走？」(Qǐngwèn, qù... zěnme zǒu?)\n-「劳驾，请问这附近有......吗？」(Láojià, qǐngwèn zhè fùjìn yǒu... ma?)\n-「师傅 / 同学 / 您好，打扰一下，请问去......往哪边走？」\n\n二、精准指路核心动词与位移指令词汇：\n1. 直行指令：\n-「一直往前走 (yìzhí wǎng qián zǒu)」(Walk straight ahead)\n-「沿着这条街一直走 (yán zhe zhè tiáo jiē yìzhí zǒu)」\n-「走到底 / 走到头 (zǒu dào dǐ / zǒu dào tóu)」(Walk to the end of the road)\n\n2. 转向指令：\n-「向左拐 / 往左转 (xiàng zuǒ guǎi / wǎng zuǒ zhuǎn)」\n-「向右拐 / 往右转 (xiàng yòu guǎi / wǎng yòu zhuǎn)」\n-「掉头 (diàotóu)」(Make a U-turn)\n\n3. 道路交叉与过街指令：\n-「在第一个十字路口 (zài dì yī gè shízìlùkǒu)」\n-「在红绿灯路口 (zài hónglǜdēng lùkǒu)」\n-「过马路 (guò mǎlù) / 走过街天桥 (zǒu guòjiē tiānqiáo) / 走地下通道 (zǒu dìxià tōngdào)」\n\n三、目标确认与方位终点句式：\n-「......就在你的右手边 / 左手边。」\n-「你看，前边那栋高楼就是。」\n-「大概走五分钟就能看到。」",
      "examples": [
        {
          "target": "劳驾，请问去中国国家博物馆怎么走？(Láojià, qǐngwèn qù Zhōngguó Guójiā Bówùguǎn zěnme zǒu?)",
          "reading": "[laʊ˨˩.t͡ɕja˥˩, t͡ɕʰiŋ˨˩˦.wən˥˩ t͡ɕʰy˥˩ ʈ͡ʂʊŋ˥.kwɔ˧˥ kwɔ˧˥.t͡ɕja˥ pwo˧˥.u˥˩.kwan˨˩˦ t͡sən˨˩.mɤ t͡soʊ̯˨˩˦?] (Láo-jià, qǐng-wèn qù Zhōng-guó Guó-jiā Bó-wù-guǎn zěn-me zǒu?)",
          "translation": "Excuse me, could you tell me how to get to the National Museum of China?"
        },
        {
          "target": "你从这里一直往前走，穿过前方的地下通道，过马路后向右拐就是了。(Nǐ cóng zhèlǐ yìzhí wǎng qián zǒu, chuānguò qiánfāng de dìxià tōngdào, guò mǎlù hòu xiàng yòu guǎi jiù shì le.)",
          "reading": "[ni˨˩˦ t͡sʰʊŋ˧˥ ʈ͡ʂɤ˥˩.li˨˩˦ i˥.ʈ͡ʂɨ˧˥ wɑŋ˨˩˦ t͡ɕʰjɛn˧˥ t͡soʊ̯˨˩, t͡ʂʰwan˥.kwɔ˥˩ t͡ɕʰjɛn˧˥.fɑŋ˥ tɤ ti˥˩.ɕja˥˩ tʰʊŋ˥.taʊ̯˥˩, kwo˥˩ ma˨˩.lu˥˩ xoʊ̯˥˩ ɕjɑŋ˥˩ joʊ̯˥˩ kwaɪ̯˨˩˦ t͡ɕjoʊ̯˥˩ ʂɨ˥˩ lɤ] (Nǐ cóng zhè-lǐ yì-zhí wǎng qián zǒu, chuān-guò qián-fāng de dì-xià tōng-dào, guò mǎ-lù hòu xiàng yòu guǎi jiù shì le.)",
          "translation": "Go straight forward from here, pass through the underground pedestrian passage ahead, cross the street and turn right, and there it is."
        },
        {
          "target": "走到第二个红绿灯路口往左转，你会看到一家大型新华书店，中国银行就在书店隔壁。(Zǒu dào dì èr gè hónglǜdēng lùkǒu wǎng zuǒ zhuǎn, nǐ huì kàndào yì jiā dàxíng Xīnhuá Shūdiàn, Zhōngguó Yínháng jiù zài shūdiàn gébì.)",
          "reading": "[t͡soʊ̯˨˩.taʊ̯˥˩ ti˥˩ aɚ˥˩ kɤ xʊŋ˧˥.ly˥˩.tɤŋ˥ lu˥˩.kʰoʊ̯˨˩˦ wɑŋ˨˩˦ t͡swɔ˨˩˦ ʈ͡ʂwan˨˩˦, ni˨˩˦ xweɪ̯˥˩ kʰan˥˩.taʊ̯˥˩ i˥ t͡ɕja˥ ta˥˩.ɕiŋ˧˥ ɕin˥.xwa˧˥ ʂu˥.tjɛn˥˩, ʈ͡ʂʊŋ˥.kwɔ˧˥ in˧˥.xɑŋ˧˥ t͡ɕjoʊ̯˥˩ t͡saɪ̯˥˩ ʂu˥.tjɛn˥˩ kɤ˧˥.pi˥˩] (Zǒu dào dì èr gè hóng-lǜ-dēng lù-kǒu wǎng zuǒ zhuǎn, nǐ huì kàn-dào yì jiā dà-xíng Xīn-huá Shū-diàn, Zhōng-guó Yín-háng jiù zài shū-diàn gé-bì.)",
          "translation": "Walk to the second traffic light intersection and turn left; you will see a large Xinhua Bookstore, and Bank of China is right next door to the bookstore."
        },
        {
          "target": "——请问这里离最近的地铁站还有多远？——不远，顺着这条林荫大道走五分钟，地铁口就在你的右手边。(—Qǐngwèn zhèlǐ lí zuì jìn de dìtiězhàn hái yǒu duō yuǎn? —Bù yuǎn, shùn zhe zhè tiáo línyīn dàdào zǒu wǔ fēnzhōng, dìtiěkǒu jiù zài nǐ de yòushǒubiān.)",
          "reading": "[—t͡ɕʰiŋ˨˩˦.wən˥˩ ʈ͡ʂɤ˥˩.li˨˩˦ li˧˥ t͡sweɪ̯˥˩ t͡ɕin˥˩ tɤ ti˥˩.tʰjɛ˨˩.ʈ͡ʂan˥˩ xaɪ̯˧˥ joʊ̯˨˩˦ twɔ˥ jɥɛn˨˩˦? —pu˥ jɥɛn˨˩˦, ʂwən˥˩ ʈ͡ʂɤ ʈ͡ʂɤ˥˩ tʰjaʊ̯˧˥ lin˧˥.in˥ ta˥˩.taʊ̯˥˩ t͡soʊ̯˨˩ u˨˩˦ fən˥.ʈ͡ʂʊŋ˥, ti˥˩.tʰjɛ˨˩.kʰoʊ̯˨˩˦ t͡ɕjoʊ̯˥˩ t͡saɪ̯˥˩ ni˨˩˦ tɤ joʊ̯˥˩.ʂoʊ̯˨˩.pjɛn] (—Qǐng-wèn zhè-lǐ lí zuì jìn de dì-tiě-zhàn hái yǒu duō yuǎn? —Bù yuǎn, shùn zhe zhè tiáo lín-yīn dà-dào zǒu wǔ fēn-zhōng, dì-tiě-kǒu jiù zài nǐ de yòu-shǒu-biān.)",
          "translation": "—Excuse me, how far is it from here to the nearest subway station? —Not far, walk along this tree-lined avenue for five minutes, and the subway entrance is right on your right-hand side."
        }
      ],
      "mnemonics": [
        "礼貌问路用请问，一直向前莫停步；红绿灯处拐向转，左右两手辨去路！"
      ],
      "culturalNotes": [
        "在向陌生人问路时，使用敬语礼貌词「劳驾 (láojià)」（北京及北方地区尤为常用）或「师傅 (shīfu) / 您好 (nínhǎo)」能迅速建立友好互信的交际氛围，体现了中华传统礼仪文化的涵养。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "向路人询问去北京大学东门的正确走法，最礼貌得体的开场白是：",
          "options": [
            "请问，去北京大学东门怎么走？(Qǐngwèn, qù... zěnme zǒu?)",
            "喂，北京大学东门在哪里去？",
            "北京大学东门你告诉我走法。",
            "走去北京大学东门怎么你？"
          ],
          "answerIndex": 0,
          "explanation": "「请问，去......怎么走？」是现代汉语最标准的礼貌问路句式。"
        },
        {
          "prompt": "指令「一直往前走」所表达的动作方向是：",
          "options": [
            "沿着当前朝向直行 (Walk straight ahead)",
            "向后退步",
            "向左转弯",
            "原地等待"
          ],
          "answerIndex": 0,
          "explanation": "「一直往前走」是直行指令的最核心表达。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "在句子「走到十字路口，请向右______」中，表示改变行进方向的动词是：",
          "options": [
            "拐 / 转 (guǎi / zhuǎn - turn)",
            "走",
            "行",
            "退"
          ],
          "answerIndex": 0,
          "explanation": "表示向左或向右转弯，使用动词「拐」或「转」。"
        },
        {
          "prompt": "指引对方目的地位于道路一侧，最常用的地道表达是：",
          "options": [
            "就在你的右手边 / 左手边。(Right on your right/left-hand side)",
            "就在你的手脚上。",
            "就在你的头顶上面。",
            "就在你的手心里。"
          ],
          "answerIndex": 0,
          "explanation": "「在你的右手边/左手边」是指引目标位置的固定地道表达。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列问路与指路对话中用词最地道、语法逻辑完全严密的一组：",
          "options": [
            "甲：劳驾，请问去天安门广场怎么走？ 乙：从这里一直往前走，过两个红绿灯路口向右拐，广场就在你的正前方。(礼貌得体，指引条理清晰)",
            "甲：天安门广场怎么去走？ 乙：一直往后走右拐在天安门。(语序错乱)",
            "甲：喂，天安门在哪里？ 乙：你去走红绿灯在左边天安门。(粗鲁且语法破碎)",
            "甲：请问天安门广场去怎么？ 乙：你拐右一直走到头没有。(结构残缺)"
          ],
          "answerIndex": 0,
          "explanation": "提问使用「劳驾，请问...」，回答包含「直行、过路口、转弯、目标方位」，堪称问路指路典范。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入交通路口指示通行与停止的信号灯装置双字名词（拼音为 hónglǜdēng）：",
          "acceptedAnswers": [
            "红绿灯"
          ],
          "explanation": "词语「红绿灯」在日常指路与交通指引中作为极其关键的地标参照物。"
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
    "title": "城市空间导航与路线规划综合叙事篇章 (Comprehensive Wayfinding & Transit Narrative)",
    "level": "A2",
    "objective": "融会贯通空间方位词、位移介词（离/从/往/向）、交通方式搭配（坐/乘/骑/换乘）与指路指令，能够独立撰写逻辑严密、层次清晰的城市出行与路线导航综合语篇。",
    "presentation": {
      "explanation": "将空间方位词、位移介词、交通方式与指路指令融为一体，是实现全景式城市导航与日常游记叙事表达的高阶综合能力：\n\n一、路线规划与导航语篇连贯衔接框架：\n1. 空间与时序递进连接词：\n-「首先 (shǒuxiān) ......，然后 (ránhòu) ......，接着 (jiēzhe) ......，最后 (zuìhòu) ......」\n-「从起点出发 -> 沿途经过 -> 换乘交通 -> 到达目的地」\n2. 动作与环境交互标记：\n-「顺着 / 沿着 (shùn zhe / yán zhe)」+ 街道/林荫大道\n-「穿过 (chuānguò)」+ 桥梁/地下通道/公园\n-「走出 (zǒu chū)」+ 地铁出口/站台\n\n二、城市一日游综合导航范文（北京古都文化动线）：\n- 今天是周末，我和留学生朋友们规划了一次精彩的北京城市一日游。早晨八点，我们从大学南门出发，骑共享单车到五道口地铁站。我们乘坐地铁十三号线，在知春路站换乘十号线，坐了五站后在海淀黄庄站换乘四号线，在圆明园站下车。走出地铁B口，向东一直走两百米就是圆明园南门。下午两点，我们从圆明园乘坐四号线前往西四，顺着古色古香的胡同漫步，沿途经过了几家传统老字号茶馆，最后登上了景山公园的万春亭，俯瞰故宫博物院壮丽的金色琉璃瓦建筑群。整个行程换乘顺畅，交通极其便利！",
      "examples": [
        {
          "target": "今天的北京一日游路线规划非常顺畅：早晨从大学南门出发，骑车到五道口地铁站，乘坐十三号线换乘四号线到达颐和园。(Jīntiān de Běijīng yírìyóu lùxiàn guīhuà fēicháng shùnchàng: zǎochén cóng dàxué nánmén chūfā, qí chē dào Wǔdàokǒu dìtiězhàn, chéngzuò shísān hào xiàn huànchéng sì hào xiàn dàodá Yíhéyuán.)",
          "reading": "[t͡ɕin˥.tʰjɛn˥ tɤ peɪ̯˨˩.t͡ɕiŋ˥ i˥.ʐɨ˥˩.joʊ̯˧˥ lu˥˩.ɕjɛn˥˩ kweɪ̯˥.xwa˥˩ feɪ̯˥.ʈ͡ʂʰɑŋ˧˥ ʂwən˥˩.ʈ͡ʂʰɑŋ˥˩: t͡saʊ̯˨˩˦.ʈ͡ʂʰən t͡sʰʊŋ˧˥ ta˥˩.ɕɥɛ˧˥ nan˧˥.mən˧˥ t͡ʂʰu˥.fa˥, t͡ɕʰi˧˥ ʈ͡ʂʰɤ˥ taʊ̯˥˩ u˨˩˦.taʊ̯˥˩.kʰoʊ̯˨˩˦ ti˥˩.tʰjɛ˨˩.ʈ͡ʂan˥˩, ʈ͡ʂʰɤŋ˧˥.t͡swɔ˥˩ ʂɨ˧˥.san˥ xaʊ̯˥˩ ɕjɛn˥˩ xwan˥˩.ʈ͡ʂʰɤŋ˧˥ sɨ˥˩ xaʊ̯˥˩ ɕjɛn˥˩ taʊ̯˥˩.ta˧˥ i˧˥.xɤ˧˥.jɥɛn˧˥] (Jīn-tiān de Běi-jīng yí-rì-yóu lù-xiàn guī-huà fēi-cháng shùn-chàng: zǎo-chén cóng dà-xué nán-mén chū-fā, qí chē dào Wǔ-dào-kǒu dì-tiě-zhàn, chéng-zuò shí-sān hào xiàn huàn-chéng sì hào xiàn dào-dá Yí-hé-yuán.)",
          "translation": "Today's Beijing one-day trip route planning was very smooth: starting from the university's south gate in the morning, riding bikes to Wudaokou Subway Station, taking Line 13 and transferring to Line 4 to reach the Summer Palace."
        },
        {
          "target": "走出地铁站A出口后，沿着宽敞的人民南路一直向南走两百米，过街天桥的右侧就是美术馆的正门。(Zǒu chū dìtiězhàn A chūkǒu hòu, yán zhe kuānchǎng de Rénmín Nánlù yìzhí xiàng nán zǒu liǎng bǎi mǐ, guòjiē tiānqiáo de yòucè jiù shì měishùguǎn de zhèngmén.)",
          "reading": "[t͡soʊ̯˨˩ t͡ʂʰu˥ ti˥˩.tʰjɛ˨˩.ʈ͡ʂan˥˩ A t͡ʂʰu˥.kʰoʊ̯˨˩˦ xoʊ̯˥˩, jɛn˧˥ ʈ͡ʂɤ kʰwan˥.ʈ͡ʂʰɑŋ˨˩˦ tɤ ʐən˧˥.min˧˥ nan˧˥.lu˥˩ i˥.ʈ͡ʂɨ˧˥ ɕjɑŋ˥˩ nan˧˥ t͡soʊ̯˨˩ ljaŋ˨˩˦ paɪ̯˨˩˦ mi˨˩˦, kwo˥˩.t͡ɕjɛ˥ tʰjɛn˥.t͡ɕʰjaʊ̯˧˥ tɤ joʊ̯˥˩.t͡sʰɤ˥˩ t͡ɕjoʊ̯˥˩ ʂɨ˥˩ meɪ̯˨˩˦.ʂu˥˩.kwan˨˩˦ tɤ ʈ͡ʂɤŋ˥˩.mən˧˥] (Zǒu chū dì-tiě-zhàn A chū-kǒu hòu, yán zhe kuān-chǎng de Rén-mín Nán-lù yì-zhí xiàng nán zǒu liǎng bǎi mǐ, guò-jiē tiān-qiáo de yòu-cè jiù shì měi-shù-guǎn de zhèng-mén.)",
          "translation": "After walking out of Exit A of the subway station, walk straight south along spacious Renmin South Road for two hundred meters, and the right side of the pedestrian overpass is the front gate of the art museum."
        },
        {
          "target": "如果你想避开早晚交通高峰期的拥堵，建议首选乘坐准时快捷的地下铁道系统。(Rúguǒ nǐ xiǎng bìkāi zǎowǎn jiāotōng gāofēngqī de yōngdǔ, jiànyì shǒuxuǎn chéngzuò zhǔnshí kuàijié de dìxià tiědào xìtǒng.)",
          "reading": "[ʐu˧˥.kwɔ˨˩˦ ni˨˩˦ ɕjɑŋ˨˩˦ pi˥˩.kʰaɪ̯˥ t͡saʊ̯˨˩.wan˨˩˦ t͡ɕjaʊ̯˥.tʰʊŋ˥ kaʊ̯˥.fɤŋ˥.t͡ɕʰi˥ tɤ jʊŋ˥.tu˨˩˦, t͡ɕjɛn˥˩.i˥˩ ʂoʊ̯˨˩.ɕɥan˨˩˦ ʈ͡ʂʰɤŋ˧˥.t͡swɔ˥˩ ʈ͡ʂwən˨˩.ʂɨ˧˥ kʰwaɪ̯˥˩.t͡ɕjɛ˧˥ tɤ ti˥˩.ɕja˥˩ tʰjɛ˨˩.taʊ̯˥˩ ɕi˥˩.tʰʊŋ˨˩˦] (Rú-guǒ nǐ xiǎng bì-kāi zǎo-wǎn jiāo-tōng gāo-fēng-qī de yōng-dǔ, jiàn-yì shǒu-xuǎn chéng-zuò zhǔn-shí kuài-jié de dì-xià tiě-dào xì-tǒng.)",
          "translation": "If you want to avoid traffic congestion during the morning and evening rush hours, it is recommended to prefer taking the punctual and speedy underground railway system."
        },
        {
          "target": "我们顺着古色古香的老街漫步，沿途经过了几家传统茶馆和手工艺品店，最后在鼓楼前拍照留念。(Wǒmen shùn zhe gǔsè-gǔxiāng de lǎojiē mànbù, yántú jīngguò le jǐ jiā chuántǒng cháguǎn hé shǒugōngyìpǐndiàn, zuìhòu zài Gǔlóu qián pāizhào liúniàn.)",
          "reading": "[wɔ˨˩.mən ʂwən˥˩ ʈ͡ʂɤ ku˨˩.sɤ˥˩.ku˨˩.ɕjɑŋ˥ tɤ laʊ˨˩.t͡ɕjɛ˥ man˥˩.pu˥˩, jɛn˧˥.tʰu˧˥ t͡ɕiŋ˥.kwɔ˥˩ lɤ t͡ɕi˨˩˦ t͡ɕja˥ t͡ʂʰwan˧˥.tʰʊŋ˧˥ ʈ͡ʂʰa˧˥.kwan˨˩˦ xɤ˧˥ ʂoʊ̯˨˩.kʊŋ˥.i˥˩.pʰin˨˩.tjɛn˥˩, t͡sweɪ̯˥˩.xoʊ̯˥˩ t͡saɪ̯˥˩ ku˨˩˦.loʊ̯˧˥ t͡ɕʰjɛn˧˥ pʰaɪ̯˥.ʈ͡ʂaʊ̯˥˩ ljoʊ̯˧˥.njɛn˥˩] (Wǒ-men shùn zhe gǔ-sè-gǔ-xiāng de lǎo-jiē màn-bù, yán-tú jīng-guò le jǐ jiā chuán-tǒng chá-guǎn hé shǒu-gōng-yì-pǐn-diàn, zuì-hòu zài Gǔ-lóu qián pāi-zhào liú-niàn.)",
          "translation": "We strolled along the antique old street, passed several traditional teahouses and handicraft shops along the way, and finally took photos in front of the Drum Tower to mark the occasion."
        }
      ],
      "mnemonics": [
        "篇章导航顺线走，出站转弯过天桥；介宾连动成一体，城市畅行乐逍遥！"
      ],
      "culturalNotes": [
        "现代中国城市兼具古老历史风貌与高度现代化的基础设施。掌握城市空间导航叙事，不仅能让学习者在现实生活中自如穿梭于大街小巷，更能深化对中国城市空间组织形态与现代生活方式的理解。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在叙述出行路线时，表示「沿着街道前行并穿过通道」的最佳动词组合是：",
          "options": [
            "沿着街道走 -> 穿过地下通道 (yán zhe jiēdào zǒu -> chuānguò dìxià tōngdào)",
            "离着街道走 -> 从过地下通道",
            "在着街道走 -> 往过地下通道",
            "向着街道走 -> 到过地下通道"
          ],
          "answerIndex": 0,
          "explanation": "「沿着/顺着街道」表达顺应道路走向，「穿过通道」表达横穿空间。"
        },
        {
          "prompt": "在语篇「首先坐公交车，接着换乘地铁，最后步行到达」中，三个关联词的主要功能是：",
          "options": [
            "组织时序与动作先后顺序 (Structuring temporal and spatial progression)",
            "表达因果推论",
            "表达转折关系",
            "表达假设条件"
          ],
          "answerIndex": 0,
          "explanation": "「首先...接着...最后...」是构建行程时序与动作衔接的核心语篇标记。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "请选出下列出行路线叙述中方位、介词与交通动词完全严密精确的一项：",
          "options": [
            "我们从酒店出发，骑共享单车到地铁站，乘坐二号线换乘一号线，在天安门东站下车后向北走两百米到达故宫。(时序、介词、动词全流程严密规范)",
            "我们离酒店出发，开共享单车到地铁站，坐二号线坐一号线在天安门东站向北。(动词与介词严重偏误)",
            "我们从酒店出发骑车，换乘到天安门东站下车在向北走两百米后坐地铁。(逻辑颠倒)",
            "我们向酒店出发，坐共享单车在地铁站骑一号线。(搭配荒谬)"
          ],
          "answerIndex": 0,
          "explanation": "该句完整涵盖起点（从酒店出发）、交通接驳（骑单车/乘地铁/换乘）、下车指引（向北走），逻辑天衣无缝。"
        },
        {
          "prompt": "在句子「走出地铁口，过街天桥的右侧就是博物馆」中，「右侧」的语法性质与位置功能是：",
          "options": [
            "方位词短语，标定目标建筑的具体空间方位 (Locative phrase indicating spatial position)",
            "时间副词",
            "语气助词",
            "连词"
          ],
          "answerIndex": 0,
          "explanation": "「右侧」作为方位词短语，明确标定博物馆位于天桥右侧。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列城市导航与出行语篇中语言最典范、结构最严谨的一项：",
          "options": [
            "为了避开早高峰拥堵，我们早晨从宿舍出发，步行五分钟到地铁站，乘坐八号线直达奥林匹克公园。出站后顺着宽阔的景观大道向北走，宏伟的国家体育场就在我们的右手边。(空间、时序、交通工具与方位指引完全融会贯通)",
            "为了避开早高峰，我们从宿舍出发走五分钟在地铁站，开八号线到奥林匹克公园出站向北在国家体育场右手。(语序错乱词汇误用)",
            "我们宿舍离出发，坐步行到地铁，乘八号线转奥林匹克公园，走出向北体育场右边。(语法严重崩坏)",
            "我们从宿舍离出发，骑八号线地铁在奥林匹克公园下，向北走右手边在体育场。(动宾与介词混乱)"
          ],
          "answerIndex": 0,
          "explanation": "该语篇在出行目的、起点、交通方式（步行/乘八号线）、出站指引（顺着大道向北走）以及地标定位（右手边）上均达到了现代汉语的典范标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示顺应道路或河流走向前行的单字介词汉字（拼音为 yán 或 shùn，例如「沿」着）：",
          "acceptedAnswers": [
            "沿",
            "顺"
          ],
          "explanation": "汉字「沿」或「顺」常与「着」连用构成空间介词短语，表示顺应路线前行。"
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
    "title": "人民币货币单位体系（元/角/分 vs 块/毛/分）与价格读法 (Renminbi Currency System & Price Reading)",
    "level": "A2",
    "objective": "系统掌握现代人民币货币单位的书面语（元角分）与口语（块毛分）对应体系，熟练掌握价格读法、省略规律及核心问价句式（多少钱/怎么卖）。",
    "presentation": {
      "explanation": "在现代中国日常经济生活与商贸往来中，人民币（RMB / CNY）的货币单位与价格表达体系具有鲜明的书面语与口语双轨特征：\n\n一、人民币法定单位与口语称谓对照体系：\n1. 书面语法定单位：元 (yuán)、角 (jiǎo)、分 (fēn)。主要用于银行账目、正式发票、合同文本及书面明码标价。\n2. 口语生活俗称单位：块 (kuài)、毛 (máo)、分 (fēn)。主要用于日常市井买卖、街头交际与口语对话。\n- 进率关系：1元 = 10角 = 100分（1块 = 10毛 = 100分）。\n\n二、价格数字读法与口语省略铁律：\n1. 规范口语读法与末尾单位省略（极高频口语规律）：\n- ¥15.50 -> 十五块五（口语中末位的「毛」字通常习惯性省略）/ 十五块五毛。\n- ¥3.80 -> 三块八（等于三块八毛）。\n- ¥150.00 -> 一百五 / 一百五十块（口语中末位单位常省略）。\n\n2. 价格中「零」的读法铁律（绝对不能省略）：\n- ¥15.05 -> 十五块零五分（中间的「零」必须读出，且末尾的「分」绝对不能省略，否则会与「十五块五」混淆造成严重误会！）。\n- ¥105.00 -> 一百零五块（百位与个位之间的「零」必须读出）。\n\n三、高频问价核心句式：\n1.「这个/这种......多少钱？」(Zhè ge... duōshǎo qián?)\n2.「苹果/西红柿怎么卖？」(Píngguǒ zěnme mài?) —— 通常用于询问按斤或按个计价的生鲜商品。\n3.「一共多少钱？」(Yígòng duōshǎo qián?)",
      "examples": [
        {
          "target": "请问这种新鲜的红富士苹果怎么卖？——五块八毛一斤。(Qǐngwèn zhè zhǒng xīnxiān de Hóngfùshì píngguǒ zěnme mài? —Wǔ kuài bā máo yì jīn.)",
          "reading": "[t͡ɕʰiŋ˨˩˦.wən˥˩ ʈ͡ʂɤ˥˩ ʈ͡ʂʊŋ˨˩˦ ɕin˥.ɕjɛn˥ tɤ xʊŋ˧˥.fu˥˩.ʂɨ˥˩ pʰiŋ˧˥.kwɔ˨˩˦ t͡sən˨˩.mɤ maɪ̯˥˩? —u˨˩˦ kʰwaɪ̯˥˩ pa˥ maʊ̯˧˥ i˥ t͡ɕin˥] (Qǐng-wèn zhè zhǒng xīn-xiān de Hóng-fù-shì píng-guǒ zěn-me mài? —Wǔ kuài bā máo yì jīn.)",
          "translation": "Excuse me, how much are these fresh Red Fuji apples? —Five yuan eighty cents per half-kilogram (jin)."
        },
        {
          "target": "这件纯棉衬衫在商场打完折后是一百八十五块钱。(Zhè jiàn chúnmián chènshān zài shāngchǎng dǎ wán zhé hòu shì yībǎi bāshíwǔ kuài qián.)",
          "reading": "[ʈ͡ʂɤ˥˩ t͡ɕjɛn˥˩ ʈ͡ʂʰwən˧˥.mjɛn˧˥ ʈ͡ʂʰən˥˩.ʂan˥ t͡saɪ̯˥˩ ʂɑŋ˥.ʈ͡ʂʰɑŋ˨˩˦ ta˨˩˦ wan˧˥ ʈ͡ʂɤ˧˥ xoʊ̯˥˩ ʂɨ˥˩ i˥.paɪ̯˨˩˦ pa˥.ʂɨ˧˥.u˨˩˦ kʰwaɪ̯˥˩ t͡ɕʰjɛn˧˥] (Zhè jiàn chún-mián chèn-shān zài shāng-chǎng dǎ wán zhé hòu shì yī-bǎi bā-shí-wǔ kuài qián.)",
          "translation": "This pure cotton shirt is 185 yuan after the discount in the department store."
        },
        {
          "target": "一共是六十四块零五分，请问您刷卡还是扫码支付？(Yígòng shì liùshísì kuài líng wǔ fēn, qǐngwèn nín shuākǎ háishì sǎomǎ zhīfù?)",
          "reading": "[i˧˥.kʊŋ˥˩ ʂɨ˥˩ ljoʊ̯˥˩.ʂɨ˧˥.sɨ˥˩ kʰwaɪ̯˥˩ liŋ˧˥ u˨˩˦ fən˥, t͡ɕʰiŋ˨˩˦.wən˥˩ nin˧˥ ʂwa˥.kʰa˨˩˦ xaɪ̯˧˥.ʂɨ˥˩ saʊ̯˨˩.ma˨˩˦ ʈ͡ʂɨ˥.fu˥˩?] (Yí-gòng shì liù-shí-sì kuài líng wǔ fēn, qǐng-wèn nín shuā-kǎ hái-shì sǎo-mǎ zhī-fù?)",
          "translation": "The total is sixty-four yuan and five cents; would you like to pay by card or by scanning a QR code?"
        },
        {
          "target": "商业合同上明确写着本次设备采购的总金额为两万三千五百元整。(Shāngyè hétong shang míngquè xiě zhe běncì shèbèi cǎigòu de zǒng jīné wéi liǎng wàn sān qiān wǔ bǎi yuán zhěng.)",
          "reading": "[ʂɑŋ˥.jɛ˥˩ xɤ˧˥.tʰʊŋ ʂɑŋ miŋ˧˥.t͡ɕʰɥɛ˥˩ ɕjɛ˨˩˦ ʈ͡ʂɤ pən˨˩.t͡sʰɨ˥˩ ʂɤ˥˩.peɪ̯˥˩ t͡sʰaɪ̯˨˩.koʊ̯˥˩ tɤ t͡sʊŋ˨˩˦ t͡ɕin˥.ɤ˧˥ weɪ̯˧˥ ljaŋ˨˩˦ wan˥˩ san˥ t͡ɕʰjɛn˥ u˨˩˦ paɪ̯˨˩˦ jɥɛn˧˥ ʈ͡ʂɤŋ˨˩˦] (Shāng-yè hé-tong shang míng-què xiě zhe běn-cì shè-bèi cǎi-gòu de zǒng jīn-é wéi liǎng wàn sān qiān wǔ bǎi yuán zhěng.)",
          "translation": "The commercial contract explicitly states that the total amount for this equipment procurement is exactly 23,500 yuan."
        }
      ],
      "mnemonics": [
        "元角分字写账目，块毛分音出市井；点五读毛省尾缀，中间有零莫漏声！"
      ],
      "culturalNotes": [
        "人民币是中国法定流通货币。在中国口语语境中，「块」与「毛」的应用频率极高。在菜市场和水果店，商品计价通常以市制单位「斤（1斤 = 500克 / 0.5公斤）」为基准，问价时常说「多少钱一斤」。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在口语日常交际中，价格「¥18.50」最常用且自然的口语读法是：",
          "options": [
            "十八块五 (shíbā kuài wǔ - 'máo' omitted naturally)",
            "十八元五角零分",
            "十八个钱五个钱",
            "十八元角五"
          ],
          "answerIndex": 0,
          "explanation": "口语中¥18.50通常读作「十八块五」，末尾的「毛」字习惯性省略。"
        },
        {
          "prompt": "价格「¥12.05」正确的读法是（注意中间有零）：",
          "options": [
            "十二块零五分 (中间有零，末尾「分」不可省)",
            "十二块五 (这是¥12.50的读法，会产生混淆)",
            "十二块零五",
            "十二点零五块毛"
          ],
          "answerIndex": 0,
          "explanation": "¥12.05中间有零，必须读「十二块零五分」，末尾「分」字绝对不可省。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "在水果摊询问西瓜的价格，最地道规范的口语问法是：",
          "options": [
            "老板，西瓜怎么卖？ / 这个西瓜多少钱一斤？",
            "老板，西瓜怎么买去？",
            "老板，西瓜的价格是多少元角？",
            "老板，西瓜多少货币？"
          ],
          "answerIndex": 0,
          "explanation": "「怎么卖？」或「多少钱一斤？」是市井买卖中最地道的问价句式。"
        },
        {
          "prompt": "下列人民币货币单位中，属于正式书面语规范单位的一组是：",
          "options": [
            "元、角、分 (Official written currency units)",
            "块、毛、分",
            "个、张、张",
            "本、只、条"
          ],
          "answerIndex": 0,
          "explanation": "「元、角、分」是人民币法定的正式书面语货币单位。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列关于人民币价格读法完全正确且符合交际规范的一项：",
          "options": [
            "这盒优质碧螺春茶叶标价是两百零八块整，如果买两盒一共四百一十六块钱。(价格读法与货币量词完全严谨规范)",
            "这盒茶叶标价是两百八块整，买两盒四百一十六元角。(数字与单位混乱)",
            "这盒茶叶标价是两百块零八毛分，买两盒四百十六块。(读法不通)",
            "这盒茶叶两百零八元钱块，买两盒一共四百一十六个。(单位杂糅)"
          ],
          "answerIndex": 0,
          "explanation": "「两百零八块」、「四百一十六块钱」数字发音与货币搭配天衣无缝。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入人民币口语中最核心的主币单位单字汉字（拼音为 kuài）：",
          "acceptedAnswers": [
            "块"
          ],
          "explanation": "汉字「块」是现代汉语口语中指称「元」的最核心货币单位。"
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
    "title": "商场选购、衣物尺寸、颜色与试穿交际（件/条/双、大号/中号/小号、试一试） (Shopping for Clothes, Sizes, Colors & Trying On)",
    "level": "A2",
    "objective": "熟练掌握服饰类专属量词搭配（件/条/双/顶）、尺码表达（大号/中号/小号/合身）、动词重叠式试穿请求（试一试）及「有点儿」与「一点儿」的精细辨析。",
    "presentation": {
      "explanation": "在商场挑选试穿衣物是日常生活极其重要的交际板块，涉及专属量词、尺码颜色与评价副词的系统搭配：\n\n一、服饰类专属量词严密搭配系统：\n1.「件 (jiàn)」：专用于上衣、外套、大衣、衬衫、毛衣、西装（一件衬衫、一件羽绒服）。\n2.「条 (tiáo)」：专用于下装、长条状配饰（一条裤子、一条牛仔裤、一条连衣裙、一条围巾、一条领带）。\n3.「双 (shuāng)」：专用于成双成对的鞋袜手套（一双皮鞋、一双运动鞋、一双袜子）。\n4.「顶 (dǐng)」：专用于帽子（一顶棒球帽、一顶羊毛帽）。\n\n二、服装尺码与肥瘦松紧词汇体系：\n- 尺码规格：大号 (L / dàhào)、中号 (M / zhōnghào)、小号 (S / xiǎohào)、加大号 (XL / jiādàhào)。\n- 穿着体感：合身 (héshēn / fits well)、合适 (héshì)、肥 (féi / too loose)、瘦 (shòu / too tight)、长 (cháng)、短 (duǎn)。\n\n三、「有点儿」与「一点儿」的极重要句法辨析：\n1.「有点儿 (yǒudiǎnr) + 形容词」：置于形容词**之前**，通常表达说话人**消极、不如意、带有抱怨或微词**的感受：\n- 这件大衣[有点儿大]。(A bit too big - undesirable)\n- 这双鞋[有点儿贵]。(A bit too expensive)\n2.「形容词 + 一点儿 (yìdiǎnr)」：置于形容词**之后**，表达说话人的**期待、要求或客观微量调整**：\n- 有没有[便宜一点儿]的？(Can it be a bit cheaper?)\n- 请帮我拿一件[小一点儿]的衬衫。(Please bring a slightly smaller shirt.)\n\n四、试穿委婉请求句式：\n-「请问我可以试一试 / 试穿一下吗？」(Qǐngwèn wǒ kěyǐ shì yi shì ma?)\n-「试衣间 (shìyījiān)」在哪里？",
      "examples": [
        {
          "target": "服务员，这件黑色大衣有点儿大，请帮我拿一件中号的试一试。(Fúwùyuán, zhè jiàn hēisè dàyī yǒudiǎnr dà, qǐng bāng wǒ ná yí jiàn zhōnghào de shì yi shì.)",
          "reading": "[fu˧˥.u˥˩.jɥɛn˧˥, ʈ͡ʂɤ˥˩ t͡ɕjɛn˥˩ xeɪ̯˥.sɤ˥˩ ta˥˩.i˥ joʊ̯˨˩.tjɛɚ˨˩˦ ta˥˩, t͡ɕʰiŋ˨˩˦ pɑŋ˥ wɔ˨˩ na˧˥ i˥ t͡ɕjɛn˥˩ ʈ͡ʂʊŋ˥.xaʊ̯˥˩ tɤ ʂɨ˥˩ i ʂɨ˥˩] (Fú-wù-yuán, zhè jiàn hēi-sè dà-yī yǒu-diǎnr dà, qǐng bāng wǒ ná yí jiàn zhōng-hào de shì yi shì.)",
          "translation": "Salesperson, this black overcoat is a bit too big; please help me get a medium-sized one to try on."
        },
        {
          "target": "这条深蓝色牛仔裤肥瘦刚刚好，穿起来非常合身舒适。(Zhè tiáo shēnlánsè niúzǎikù féishòu gānggāng hǎo, chuān qǐlai fēicháng héshēn shūshì.)",
          "reading": "[ʈ͡ʂɤ˥˩ tʰjaʊ̯˧˥ ʂən˥.lan˧˥.sɤ˥˩ njoʊ̯˧˥.t͡saɪ̯˨˩.kʰu˥˩ feɪ̯˧˥.ʂoʊ̯˥˩ kɑŋ˥.kɑŋ˥ xaʊ̯˨˩˦, t͡ʂʰwan˥ t͡ɕʰi.laɪ̯ feɪ̯˥.ʈ͡ʂʰɑŋ˧˥ xɤ˧˥.ʂən˥ ʂu˥.ʂɨ˥˩] (Zhè tiáo shēn-lán-sè niú-zǎi-kù féi-shòu gāng-gāng hǎo, chuān qǐ-lai fēi-cháng hé-shēn shū-shì.)",
          "translation": "These dark blue jeans are just right in width; they are very well-fitting and comfortable to wear."
        },
        {
          "target": "您觉得这双皮鞋的颜色怎么样？——样式挺好看，就是颜色稍微深了一点儿。(Nín juéde zhè shuāng píxié de yánsè zěnmeyàng? —Yàngshì tǐng hǎokàn, jiùshì yánsè shāowēi shēn le yìdiǎnr.)",
          "reading": "[nin˧˥ t͡ɕɥɛ˧˥.tɤ ʈ͡ʂɤ˥˩ ʂwaŋ˥ pʰi˧˥.ɕjɛ˧˥ tɤ jɛn˧˥.sɤ˨˩˦ t͡sən˨˩.mɤ.jɑŋ˥˩? —jɑŋ˥˩.ʂɨ˥˩ tʰiŋ˨˩˦ xaʊ̯˨˩.kʰan˥˩, t͡ɕjoʊ̯˥˩.ʂɨ˥˩ jɛn˧˥.sɤ˨˩˦ ʂaʊ̯˥.weɪ̯˥ ʂən˥ lɤ i˥.tjɛɚ˨˩˦] (Nín jué-de zhè shuāng pí-xié de yán-sè zěn-me-yàng? —Yàng-shì tǐng hǎo-kàn, jiù-shì yán-sè shāo-wēi shēn le yì-diǎnr.)",
          "translation": "What do you think of the color of this pair of leather shoes? —The style is quite nice, but the color is just slightly a bit too dark."
        },
        {
          "target": "试衣间在专卖店的里侧，您可以先进去试穿一下这套西服。(Shìyījiān zài zhuānmàidiàn de lǐcè, nín kěyǐ xiān jìnqù shìchuān yíxià zhè tào xīfú.)",
          "reading": "[ʂɨ˥˩.i˥.t͡ɕjɛn˥ t͡saɪ̯˥˩ ʈ͡ʂwan˥.maɪ̯˥˩.tjɛn˥˩ tɤ li˨˩.t͡sʰɤ˥˩, nin˧˥ kʰɤ˨˩.i˨˩˦ ɕjɛn˥ t͡ɕin˥˩.t͡ɕʰy ʂɨ˥˩.t͡ʂʰwan˥ i˥.ɕja˥˩ ʈ͡ʂɤ˥˩ tʰaʊ̯˥˩ ɕi˥.fu˧˥] (Shì-yī-jiān zài zhuān-mài-diàn de lǐ-cè, nín kě-yǐ xiān jìn-qù shì-chuān yí-xià zhè tào xī-fú.)",
          "translation": "The fitting room is on the inner side of the specialty store; you can go inside first to try on this suit."
        }
      ],
      "mnemonics": [
        "有点儿大来有点儿贵，消极不快置词前；便宜一点儿大一点儿，微调期望放后边！"
      ],
      "culturalNotes": [
        "在中国的品牌服装专卖店与商场专柜，店员服务非常主动热情。进店时店员常会问候「您好，想看点儿什么？」，试穿后常夸赞「这件衣服特别显您的气质」。掌握得体的客套回应能让购物体验格外温馨融洽。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "要表达「这条裤子我觉得有点太紧了（表达消极感受）」，正确的句子是：",
          "options": [
            "这条裤子有点儿紧。(有点儿 + 形容词 表示消极不如意)",
            "这条裤子紧一点儿。",
            "这条裤子一点儿有紧。",
            "这条裤子紧有点儿。"
          ],
          "answerIndex": 0,
          "explanation": "表达说话人主观上不合心意的感受，使用「有点儿 + 形容词」（有点儿紧）。"
        },
        {
          "prompt": "向店员提出期望「请帮我拿一件稍微大一点的衬衫」，正确的句子是：",
          "options": [
            "请帮我拿一件大一点儿的衬衫。(形容词 + 一点儿 表示期待微调)",
            "请帮我拿一件有点儿大的衬衫。",
            "请帮我拿一件一点儿有大的衬衫。",
            "请帮我拿一件大有点儿的衬衫。"
          ],
          "answerIndex": 0,
          "explanation": "表示希望尺寸进行微量调整，使用「形容词 + 一点儿」（大一点儿）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "下列哪一项量词与服饰名词的搭配完全符合现代汉语规范？",
          "options": [
            "一件外套、两条裤子、一双皮鞋 (件配上装，条配下装，双配鞋袜)",
            "一条外套、一件裤子、一顶皮鞋",
            "一双外套、一顶裤子、一件皮鞋",
            "一顶外套、一条皮鞋、一件裤子"
          ],
          "answerIndex": 0,
          "explanation": "外套用「件」，裤子用「条」，鞋袜用「双」，这是汉语量词铁律。"
        },
        {
          "prompt": "想询问试衣间的位置，最得体的交际用语是：",
          "options": [
            "请问，试衣间在哪里？我想试穿一下。(Qǐngwèn, shìyījiān zài nǎlǐ?)",
            "喂，试衣间在哪里去？",
            "试衣服屋子在何处？",
            "我想穿衣服房子在哪里？"
          ],
          "answerIndex": 0,
          "explanation": "「试衣间」是试穿衣服场所的标准专业词汇，句式礼貌规范。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列试穿选购对话中量词、尺码与副词搭配完全严谨得体的一项：",
          "options": [
            "服务员，这件大号毛衣我穿有点儿肥，请帮我换一件中号的试一试，谢谢。(件、有点儿肥、中号、试一试搭配精准完美)",
            "服务员，这条毛衣我穿肥一点儿，换一顶大号试。(量词与副词错位)",
            "服务员，这件毛衣我穿一点儿肥，换一条小号看。(副词语序颠倒)",
            "服务员，这双毛衣大号有肥，换件试一。(词汇搭配严重错乱)"
          ],
          "answerIndex": 0,
          "explanation": "「一件毛衣」、「有点儿肥」（消极）、「换一件中号」（期望）、「试一试」（重叠），无可挑剔。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入商场服装店中供顾客试穿衣服的专属空间三字名词（拼音为 shìyījiān）：",
          "acceptedAnswers": [
            "试衣间"
          ],
          "explanation": "词语「试衣间」是现代商场与服装专卖店中试穿衣物的核心设施名词。"
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
    "title": "讨价还价艺术与优惠折扣表达（打折、打八折、太贵了、便宜点儿、买一赠一） (Bargaining & Discounts - da zhe)",
    "level": "A2",
    "objective": "系统掌握现代汉语「打折」逆向折扣计算法则（打八折=按原价80%结算），熟练掌握市场讨价还价委婉交际句型与商场促销优惠表达。",
    "presentation": {
      "explanation": "在汉语商业交际与市井购物中，折扣计算与议价表达具有极具特色的文化与句法逻辑：\n\n一、「打折 (dǎzhé)」与中西逆向思维折扣算法（极重要核心考点）：\n1. 核心定义：汉语中的「打X折」指的是**以原价的X成（即百分之X十）出售**，与西方的折扣逻辑（减免百分比）刚好相反：\n-「打九折 (dǎ jiǔ zhé)」：按原价的90%付款（即减价10% / 10% off）。\n-「打八折 (dǎ bā zhé)」：按原价的80%付款（即减价20% / 20% off）。\n-「打七五折 (dǎ qī wǔ zhé)」：按原价的75%付款（即减价25% / 25% off）。\n-「打五折 / 打对折 (dǎ duìzhé)」：按原价的50%付款（即半价 / Half price）。\n-「打一折 (dǎ yì zhé)」：按原价的10%付款（即巨额减价90% / 90% off）。\n\n二、市井讨价还价委婉交际句型：\n1. 表达价格偏高与请求降价：\n-「太贵了，能不能便宜一点儿？」(Tài guì le, néng bu néng piányi yìdiǎnr?)\n-「老板，给个实惠价吧！」\n-「最低多少钱能卖？」\n2. 增加购买量争取优惠：\n-「老板，如果我买两件，能算便宜点儿吗？」\n\n三、现代商场促销与优惠高频词汇：\n-「买一赠一 / 买一送一 (mǎi yī zèng yī)」(Buy one get one free)\n-「满减优惠 (mǎnjiǎn)」：满两百减五十 (Get 50 off on purchases over 200)\n-「清仓大减价 (qīngcāng dà jiǎnjià)」(Clearance sale)\n-「包邮 (bāoyóu)」(Free shipping)",
      "examples": [
        {
          "target": "这款真丝围巾原价三百元，商场店庆全场打八折，现价二百四十元。(Zhè kuǎn zhēnsī wéijīn yuánjià sānbǎi yuán, shāngchǎng diànqìng quánchǎng dǎ bā zhé, xiànjià èrbǎi sìshí yuán.)",
          "reading": "[ʈ͡ʂɤ˥˩ kʰwan˨˩˦ ʈ͡ʂən˥.sɨ˥ weɪ̯˧˥.t͡ɕin˥ jɥɛn˧˥.t͡ɕja˥˩ san˥.paɪ̯˨˩˦ jɥɛn˧˥, ʂɑŋ˥.ʈ͡ʂʰɑŋ˨˩˦ tjɛn˥˩.t͡ɕʰiŋ˥˩ t͡ɕʰyɛn˧˥.ʈ͡ʂʰɑŋ˨˩˦ ta˨˩˦ pa˥ ʈ͡ʂɤ˧˥, ɕjɛn˥˩.t͡ɕja˥˩ aɚ˥˩.paɪ̯˨˩˦ sɨ˥˩.ʂɨ˧˥ jɥɛn˧˥] (Zhè kuǎn zhēn-sī wéi-jīn yuán-jià sān-bǎi yuán, shāng-chǎng diàn-qìng quán-chǎng dǎ bā zhé, xiàn-jià èr-bǎi sì-shí yuán.)",
          "translation": "The original price of this real silk scarf was 300 yuan; for the store anniversary, the entire store is 20% off (at 80% price), and the current price is 240 yuan."
        },
        {
          "target": "老板，这套紫砂茶具一百块钱卖不卖？便宜一点儿我就买两套。(Lǎobǎn, zhè tào zǐshā chájù yībǎi kuài qián mài bu mài? Piányi yìdiǎnr wǒ jiù mǎi liǎng tào.)",
          "reading": "[laʊ˨˩.pan˨˩˦, ʈ͡ʂɤ˥˩ tʰaʊ̯˥˩ t͡sɨ˨˩.ʂa˥ ʈ͡ʂʰa˧˥.t͡ɕy˥˩ i˥.paɪ̯˨˩˦ kʰwaɪ̯˥˩ t͡ɕʰjɛn˧˥ maɪ̯˥˩ pu maɪ̯˥˩? pʰjɛn˧˥.i i˥.tjɛɚ˨˩˦ wɔ˨˩ t͡ɕjoʊ̯˥˩ maɪ̯˨˩˦ ljaŋ˨˩˦ tʰaʊ̯˥˩] (Lǎo-bǎn, zhè tào zǐ-shā chá-jù yī-bǎi kuài qián mài bu mài? Pián-yi yì-diǎnr wǒ jiù mǎi liǎng tào.)",
          "translation": "Boss, will you sell this set of purple clay tea set for 100 yuan? If it's a bit cheaper, I'll buy two sets."
        },
        {
          "target": "超市周末搞大型促销活动，所有进口优质牛奶一律买一箱送一箱。(Chāoshì zhōumò gǎo dàxíng cùxiāo huódòng, suǒyǒu jìnkǒu yōuzhì niúnǎi yílǜ mǎi yì xiāng sòng yì xiāng.)",
          "reading": "[t͡ʂʰaʊ̯˥.ʂɨ˥˩ ʈ͡ʂoʊ̯˥.mwɔ˥˩ kaʊ̯˨˩˦ ta˥˩.ɕiŋ˧˥ t͡sʰu˥˩.ɕjaʊ̯˥ xwo˧˥.tʊŋ˥˩, swɔ˨˩˦.joʊ̯˨˩˦ t͡ɕin˥˩.kʰoʊ̯˨˩˦ joʊ̯˥.ʈ͡ʂɨ˥˩ njoʊ̯˧˥.naɪ̯˨˩˦ i˧˥.ly˥˩ maɪ̯˨˩˦ i˥ ɕjaŋ˥ sʊŋ˥˩ i˥ ɕjaŋ˥] (Chāo-shì zhōu-mò gǎo dà-xíng cù-xiāo huó-dòng, suǒ-yǒu jìn-kǒu yōu-zhì niú-nǎi yí-lǜ mǎi yì xiāng sòng yì xiāng.)",
          "translation": "The supermarket is holding a large promotional campaign this weekend; all imported high-quality milk is buy-one-get-one-free without exception."
        },
        {
          "target": "这种手工艺品虽然做工精细，但价格确实有点儿贵，能给我们打个九折吗？(Zhè zhǒng shǒugōngyìpǐn suīrán zuògōng jīngxì, dàn jiàgé quèshí yǒudiǎnr guì, néng gěi wǒmen dǎ ge jiǔ zhé ma?)",
          "reading": "[ʈ͡ʂɤ˥˩ ʈ͡ʂʊŋ˨˩˦ ʂoʊ̯˨˩.kʊŋ˥.i˥˩.pʰin˨˩˦ sweɪ̯˥.ʐan˧˥ t͡swɔ˥˩.kʊŋ˥ t͡ɕiŋ˥.ɕi˥˩, tan˥˩ t͡ɕja˥˩.kɤ˧˥ t͡ɕʰɥɛ˥˩.ʂɨ˧˥ joʊ̯˨˩.tjɛɚ˨˩˦ kweɪ̯˥˩, nɤŋ˧˥ keɪ̯˨˩˦ wɔ˨˩.mən ta˨˩˦ kɤ t͡ɕjoʊ̯˨˩˦ ʈ͡ʂɤ˧˥ ma?] (Zhè zhǒng shǒu-gōng-yì-pǐn suī-rán zuò-gōng jīng-xì, dàn jià-gé què-shí yǒu-diǎnr guì, néng gěi wǒ-men dǎ ge jiǔ zhé ma?)",
          "translation": "Although this handicraft has fine workmanship, the price is indeed a bit expensive; could you give us a 10% discount (90% price)?"
        }
      ],
      "mnemonics": [
        "打八折来付八成，打七五折付七五；逆向思维算折扣，便宜点儿巧交流！"
      ],
      "culturalNotes": [
        "掌握中国独特的「打折」计算法是跨文化交际的必修课（如看到商场挂出「全场5折」，即为半价特惠）。在传统手工艺品集市或古玩市场，适度而礼貌的讨价还价是促进买卖双方交流互动的市井文化魅力所在。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在商场看到一件标价200元的衣服正在「打八折」，顾客最终需要支付的实际金额是：",
          "options": [
            "160元 (按原价的80%计算：200 × 0.8 = 160元)",
            "40元 (误将打八折理解为减免80%)",
            "20元",
            "180元"
          ],
          "answerIndex": 0,
          "explanation": "「打八折」即按原价的80%付款（200 × 0.8 = 160元）。"
        },
        {
          "prompt": "在小商品集市上，向摊主委婉请求降低价格，最得体的表达是：",
          "options": [
            "老板，能不能便宜一点儿？(Néng bu néng piányi yìdiǎnr?)",
            "老板，你必须给我很便宜！",
            "老板，我不给你钱！",
            "老板，价格太便宜了！"
          ],
          "answerIndex": 0,
          "explanation": "「能不能便宜一点儿？」是集市议价中最经典得体的礼貌表达。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "促销术语「买一赠一」表达的真实含义是：",
          "options": [
            "购买一件商品，免费赠送同款或指定商品一件 (Buy one get one free)",
            "买一件商品收两件的钱",
            "买一件商品打一折",
            "买两件商品只给一件"
          ],
          "answerIndex": 0,
          "explanation": "「买一赠一/买一送一」即买一件免费赠送一件。"
        },
        {
          "prompt": "商场进行半价促销，海报上最规范典雅的中文表达是：",
          "options": [
            "全场打五折 / 全场打对折 (Half price)",
            "全场打半折",
            "全场打二折",
            "全场打十折"
          ],
          "answerIndex": 0,
          "explanation": "半价在汉语中表述为「打五折」或「打对折」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列关于商场折扣与议价表述完全正确无误的一项：",
          "options": [
            "这套精美的中国茶具原价四百元，现在商场搞促销打七五折，实付三百元即可买下。(折扣计算 400 × 0.75 = 300元 完全精确)",
            "这套茶具原价四百元，打七五折后实付一百元。(计算错误)",
            "这套茶具原价四百元，打七折五后实付七十五元。(算法混乱)",
            "这套茶具打折七五，四百元减去三百五。(表达不通)"
          ],
          "answerIndex": 0,
          "explanation": "400元打七五折（400 × 0.75 = 300元），计算与语法表述无懈可击。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入汉语中表达商品按比例降价出售的核心双字动词词语（拼音为 dǎzhé）：",
          "acceptedAnswers": [
            "打折"
          ],
          "explanation": "词语「打折」是现代汉语中指称折扣促销的最核心动词词汇。"
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
    "title": "现代移动支付与结账结算交际（微信支付、支付宝、扫码、发票与退换货） (Mobile Payments & Checkout Discourse)",
    "level": "A2",
    "objective": "熟练掌握现代移动支付全流程词汇与交际（微信支付/支付宝/扫码/出示付款码）、发票索取及售后退换货（七天无理由退货/小票）标准句式。",
    "presentation": {
      "explanation": "现代中国社会的商品交易与日常结账已全面进入移动数字化时代，掌握移动支付与售后交际是不可或缺的生存技能：\n\n一、移动支付核心词汇与操作指令：\n1. 主流移动支付平台：微信支付 (Wēixìn zhīfù)、支付宝 (Zhīfùbǎo)、云闪付 (Yúnshǎnfù)、刷银行卡 (shuā yínhángkǎ)、现金支付 (xiànjīn zhīfù)。\n2. 扫码主被动交互句式：\n-「我扫你 (Wǒ sǎo nǐ)」：顾客用手机摄像头扫描商家的静态或动态「收款码 (shōukuǎnmǎ)」输入金额付款。\n-「你扫我 (Nǐ sǎo wǒ)」：顾客在手机上打开「付款码 (fùkuǎnmǎ)」，商家用扫码枪或POS机扫描扣款。\n\n二、结账与收银经典交际用语：\n-「服务员 / 老板，买单 / 结账！」(Mǎidān / Jiézhàng!)\n-「请问支持微信或支付宝吗？」\n-「请出示您的付款码。」\n-「已经扫码付过了，您看一眼到账提示。」\n\n三、发票索取与售后退换货保障：\n1. 索取票据：\n-「请给我开一张发票 (fāpiào)」/「可以开电子发票 (diànzǐ fāpiào) 吗？」\n-「购物小票 / 收银条 (xiǎopiào / shōuyíntheader)」\n2. 售后权益保障：\n-「七天无理由退货 (qī tiān wú lǐyóu tuìhuò)」\n-「凭购物小票办理退货 (tuìhuò) 或换货 (huànhuò)」",
      "examples": [
        {
          "target": "服务员，结账！请问这里支持微信支付和支付宝吗？——都可以，请出示您的付款码。(Fúwùyuán, jiézhàng! Qǐngwèn zhèlǐ zhīchí Wēixìn zhīfù hé Zhīfùbǎo ma? —Dōu kěyǐ, qǐng chūshì nín de fùkuǎnmǎ.)",
          "reading": "[fu˧˥.u˥˩.jɥɛn˧˥, t͡ɕjɛ˧˥.ʈ͡ʂɑŋ˥˩! t͡ɕʰiŋ˨˩˦.wən˥˩ ʈ͡ʂɤ˥˩.li˨˩˦ ʈ͡ʂɨ˥.ʈ͡ʂʰɨ˧˥ weɪ̯˥.ɕin˥˩ ʈ͡ʂɨ˥.fu˥˩ xɤ˧˥ ʈ͡ʂɨ˥.fu˥˩.paʊ̯˨˩˦ ma? —toʊ̯˥ kʰɤ˨˩.i˨˩˦, t͡ɕʰiŋ˨˩˦ t͡ʂʰu˥.ʂɨ˥˩ nin˧˥ tɤ fu˥˩.kʰwan˨˩.ma˨˩˦] (Fú-wù-yuán, jié-zhàng! Qǐng-wèn zhè-lǐ zhī-chí Wēi-xìn zhī-fù hé Zhī-fù-bǎo ma? —Dōu kě-yǐ, qǐng chū-shì nín de fù-kuǎn-mǎ.)",
          "translation": "Server, the bill please! Do you accept WeChat Pay and Alipay here? —Both are fine; please present your payment QR code."
        },
        {
          "target": "您好，一共消费了三百六十元整，请问需要开具电子发票吗？(Nínhǎo, yígòng xiāofèi le sānbǎi liùshí yuán zhěng, qǐngwèn xūyào kāijù diànzǐ fāpiào ma?)",
          "reading": "[nin˧˥.xaʊ̯˨˩˦, i˧˥.kʊŋ˥˩ ɕjaʊ̯˥.feɪ̯˥˩ lɤ san˥.paɪ̯˨˩˦ ljoʊ̯˥˩.ʂɨ˧˥ jɥɛn˧˥ ʈ͡ʂɤŋ˨˩˦, t͡ɕʰiŋ˨˩˦.wən˥˩ ɕy˥.jaʊ̯˥˩ kʰaɪ̯˥.t͡ɕy˥˩ tjɛn˥˩.t͡sɨ˨˩˦ fa˥.pʰjaʊ̯˥˩ ma?] (Nín-hǎo, yí-gòng xiāo-fèi le sān-bǎi liù-shí yuán zhěng, qǐng-wèn xū-yào kāi-jù diàn-zǐ fā-piào ma?)",
          "translation": "Hello, the total consumption is exactly 360 yuan; would you like an electronic invoice issued?"
        },
        {
          "target": "拿着购物小票和完好的原包装，在七天之内可以在商场总服务台办理免费退换货。(Názhe gòuwù xiǎopiào hé wánhǎo de yuán bāozhuāng, zài qī tiān zhīnèi kěyǐ zài shāngchǎng zǒng fúwùtái bànlǐ miǎnfèi tuì-huàn huò.)",
          "reading": "[na˧˥.ʈ͡ʂɤ koʊ̯˥˩.u˥˩ ɕjaʊ̯˨˩.pʰjaʊ̯˥˩ xɤ˧˥ wan˧˥.xaʊ̯˨˩˦ tɤ jɥɛn˧˥ paʊ̯˥.ʈ͡ʂwaŋ˥, t͡saɪ̯˥˩ t͡ɕʰi˥ tʰjɛn˥ ʈ͡ʂɨ˥.neɪ̯˥˩ kʰɤ˨˩.i˨˩˦ t͡saɪ̯˥˩ ʂɑŋ˥.ʈ͡ʂʰɑŋ˨˩˦ t͡sʊŋ˨˩˦ fu˧˥.u˥˩.tʰaɪ̯˧˥ pan˨˩.li˨˩˦ mjɛn˨˩.feɪ̯˥˩ tʰweɪ̯˥˩.xwan˥˩ xwo˥˩] (Ná-zhe gòu-wù xiǎo-piào hé wán-hǎo de yuán bāo-zhuāng, zài qī tiān zhī-nèi kě-yǐ zài shāng-chǎng zǒng fú-wù-tái bàn-lǐ miǎn-fèi tuì-huàn huò.)",
          "translation": "Holding the shopping receipt and intact original packaging, you can handle free return or exchange at the mall's main service desk within seven days."
        },
        {
          "target": "我扫描柜台上的二维码付了五十块钱，请您确认一下到账信息。(Wǒ sǎomiáo guìtái shang de èrwéimǎ fù le wǔshí kuài qián, qǐng nín quèrèn yíxià dàozhàng xìnxī.)",
          "reading": "[wɔ˨˩ saʊ̯˨˩.mjaʊ̯˧˥ kweɪ̯˥˩.tʰaɪ̯ ʂɑŋ tɤ aɚ˥˩.weɪ̯˧˥.ma˨˩˦ fu˥˩ lɤ u˨˩˦.ʂɨ˧˥ kʰwaɪ̯˥˩ t͡ɕʰjɛn˧˥, t͡ɕʰiŋ˨˩˦ nin˧˥ t͡ɕʰɥɛ˥˩.ʐən˥˩ i˥.ɕja˥˩ taʊ̯˥˩.ʈ͡ʂɑŋ˥˩ ɕin˥.ɕi˥] (Wǒ sǎo-miáo guì-tái shang de èr-wéi-mǎ fù le wǔ-shí kuài qián, qǐng nín què-rèn yí-xià dào-zhàng xìn-xī.)",
          "translation": "I scanned the QR code on the counter and paid fifty yuan; please confirm the incoming payment notification."
        }
      ],
      "mnemonics": [
        "扫码买单出示码，微信支付宝两全；小票开出发票留，七天退换心放宽！"
      ],
      "culturalNotes": [
        "在中国，「扫码支付」已经彻底渗透进城市与乡村的每一个角落。小到街头菜摊、便利店，大到连锁百货、星级酒店，手机轻轻一扫即可完成结算。同时「七天无理由退货」制度为消费者提供了坚实的法律保障。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在餐厅用餐完毕准备结账，最常用得体的汉语表达是：",
          "options": [
            "服务员，买单！ / 服务员，结账！(Mǎidān / Jiézhàng)",
            "服务员，算算你的钱！",
            "服务员，给钱你！",
            "服务员，钱拿走！"
          ],
          "answerIndex": 0,
          "explanation": "「买单」与「结账」是结账结算最标准通用的交际用语。"
        },
        {
          "prompt": "收银员说「请出示您的付款码」，顾客应该进行的操作是：",
          "options": [
            "在手机App上打开自己的付款二维码让商家扫描 (Present customer's payment QR)",
            "用手机去扫描商家桌上的二维码",
            "拿出现金纸币",
            "拿出身份证件"
          ],
          "answerIndex": 0,
          "explanation": "「出示付款码」即展示手机上的个人付款条码或二维码供扫码设备识别。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "向商家索取可用于企业报销或正式记账的凭证，应使用的规范词汇是：",
          "options": [
            "发票 (fāpiào - Official invoice)",
            "草稿",
            "便条",
            "贺卡"
          ],
          "answerIndex": 0,
          "explanation": "「发票」是具有法律效力的正规商业凭证。"
        },
        {
          "prompt": "购买商品后若尺寸不合，凭购物凭证向商场申请换一件新的，该售后行为称为：",
          "options": [
            "换货 (huànhuò - Exchange goods)",
            "送货",
            "进货",
            "发货"
          ],
          "answerIndex": 0,
          "explanation": "更换商品称为「换货」，退掉商品退款称为「退货」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列移动支付与结算对话中表达最规范地道的一组：",
          "options": [
            "甲：你好，一共是一百二十五块钱，扫码还是刷卡？ 乙：我扫微信付款码，顺便帮我开一张电子发票。(移动支付与开票交际完全规范流畅)",
            "甲：你好，一百二十五块钱拿来。 乙：我给你微信扫发票。(粗鲁且语义混乱)",
            "甲：钱一共一百二十五元角。 乙：刷卡出示退货码。(术语完全错用)",
            "甲：买单多少钱你。 乙：我扫你的发票小票。(语无伦次)"
          ],
          "answerIndex": 0,
          "explanation": "收银提问「扫码还是刷卡」，顾客回答「扫微信付款码并开电子发票」，展现了当代中国最典型的结算场景。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示通过手机摄像头识别图形码完成付款的动作双字词语（拼音为 sǎomǎ）：",
          "acceptedAnswers": [
            "扫码"
          ],
          "explanation": "词语「扫码」是现代移动支付中最核心的高频动作词汇。"
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
    "title": "商场购物与集市选购全流程综合篇章 (Comprehensive Shopping & Commercial Narrative)",
    "level": "A2",
    "objective": "融会贯通货币单位、服饰量词、尺码试穿、打折议价与移动支付全流程交际，能够独立撰写逻辑严密、细节生动的现代商业购物综合叙事语篇。",
    "presentation": {
      "explanation": "将货币体系、量词搭配、尺码试穿、打折计算与移动支付融汇于同一叙事脉络中，是掌握高阶汉语实用生活语篇写作的标志：\n\n一、商场与集市购物全流程语篇架构：\n1. 进店与选购：浏览柜台 -> 挑选心仪款式颜色 -> 确认专属量词（件/条/双）。\n2. 试穿与评价：询问试衣间 -> 试穿体验（有点儿大 / 合身舒适 / 稍微深了一点儿）。\n3. 询价与折扣：询问价格 -> 确认优惠政策（打八折 / 满减 / 买一赠一）。\n4. 结算与售后：出示付款码移动支付 -> 索取购物小票与发票 -> 确认七天退换保障。\n\n二、全景式购物叙事范文（周末王府井购物记）：\n- 今天是周末，我和留学生朋友一起去著名的王府井步行街购物。在一楼品牌服装专卖店里，我看中了一件深灰色的羊毛开衫。我让服务员帮我拿了一件中号的，走进试衣间试了试，大小非常合身，款式也很大方。这件开衫原价六百八十块钱，赶上商场换季促销全场打七折，折后只要四百七十六块钱。在收银台结账时，我打开手机微信出示了付款码，两秒钟就完成了扫码支付。收银员微笑着把装好的衣服和购物小票递给我，并提醒我凭小票在七天之内可以办理退换货。整个购物过程既顺畅又开心！",
      "examples": [
        {
          "target": "今天周末我和朋友去王府井百货大楼购物，看中了一件深灰色的羊毛开衫，穿上试了试，大小和颜色都非常合适。(Jīntiān zhōumò wǒ hé péngyou qù Wángfǔjǐng bǎihuò dàlóu gòuwù, kànzhòng le yí jiàn shēnhuīsè de yángmáo kāishān, chuān shang shì le shi, dàxiǎo hé yánsè dōu fēicháng héshì.)",
          "reading": "[t͡ɕin˥.tʰjɛn˥ ʈ͡ʂoʊ̯˥.mwɔ˥˩ wɔ˨˩ xɤ˧˥ pʰɤŋ˧˥.joʊ̯ t͡ɕʰy˥˩ wɑŋ˧˥.fu˨˩.t͡ɕiŋ˨˩˦ paɪ̯˨˩.xwo˥˩ ta˥˩.loʊ̯˧˥ koʊ̯˥˩.u˥˩, kʰan˥˩.ʈ͡ʂʊŋ˥˩ lɤ i˥ t͡ɕjɛn˥˩ ʂən˥.xweɪ̯˥.sɤ˥˩ tɤ jɑŋ˧˥.maʊ̯˧˥ kʰaɪ̯˥.ʂan˥, t͡ʂʰwan˥ ʂɑŋ ʂɨ˥˩ lɤ ʂɨ, ta˥˩.ɕjaʊ̯˨˩˦ xɤ˧˥ jɛn˧˥.sɤ˨˩˦ toʊ̯˥ feɪ̯˥.ʈ͡ʂʰɑŋ˧˥ xɤ˧˥.ʂɨ˥˩] (Jīn-tiān zhōu-mò wǒ hé péng-you qù Wáng-fǔ-jǐng bǎi-huò dà-lóu gòu-wù, kàn-zhòng le yí jiàn shēn-huī-sè de yáng-máo kāi-shān, chuān shang shì le shi, dà-xiǎo hé yán-sè dōu fēi-cháng hé-shì.)",
          "translation": "This weekend my friend and I went shopping at Wangfujing Department Store; I took a fancy to a dark gray wool cardigan, tried it on, and both size and color were very suitable."
        },
        {
          "target": "这件外套原价六百八十元，赶上商场换季促销打七折，店员还热情地帮我开具了增值税电子发票。(Zhè jiàn wàitào yuánjià liùbǎi bāshí yuán, gǎnshang shāngchǎng huànjì cùxiāo dǎ qī zhé, diànyuán hái rèqíng de bāng wǒ kāijù le zēngzhíshuì diànzǐ fāpiào.)",
          "reading": "[ʈ͡ʂɤ˥˩ t͡ɕjɛn˥˩ waɪ̯˥˩.tʰaʊ̯˥˩ jɥɛn˧˥.t͡ɕja˥˩ ljoʊ̯˥˩.paɪ̯˨˩˦ pa˥.ʂɨ˧˥ jɥɛn˧˥, kan˨˩˦.ʂɑŋ ʂɑŋ˥.ʈ͡ʂʰɑŋ˨˩˦ xwan˥˩.t͡ɕi˥˩ t͡sʰu˥˩.ɕjaʊ̯˥ ta˨˩˦ t͡ɕʰi˥ ʈ͡ʂɤ˧˥, tjɛn˥˩.jɥɛn˧˥ xaɪ̯˧˥ ʐɤ˥˩.t͡ɕʰiŋ˧˥ tɤ pɑŋ˥ wɔ˨˩ kʰaɪ̯˥.t͡ɕy˥˩ lɤ t͡sɤŋ˥.ʈ͡ʂɨ˧˥.ʂweɪ̯˥˩ tjɛn˥˩.t͡sɨ˨˩˦ fa˥.pʰjaʊ̯˥˩] (Zhè jiàn wài-tào yuán-jià liù-bǎi bā-shí yuán, gǎn-shang shāng-chǎng huàn-jì cù-xiāo dǎ qī zhé, diàn-yuán hái rè-qíng de bāng wǒ kāi-jù le zēng-zhí-shuì diàn-zǐ fā-piào.)",
          "translation": "The original price of this jacket was 680 yuan; catching the mall's seasonal promotion at 30% off (70% price), the clerk also warmly helped me issue a VAT electronic invoice."
        },
        {
          "target": "在传统茶城选购茶叶时，店主热情地邀请我们品尝了新上市的龙井春茶，最后给我们打了八五折。(Zài chuántǒng cháchéng xuǎngòu cháyè shí, diànzhǔ rèqíng de yāoqǐng wǒmen pǐncháng le xīn shàngshì de Lóngjǐng chūnchá, zuìhòu gěi wǒmen dǎ le bā wǔ zhé.)",
          "reading": "[t͡saɪ̯˥˩ t͡ʂʰwan˧˥.tʰʊŋ˧˥ ʈ͡ʂʰa˧˥.ʈ͡ʂʰɤŋ˧˥ ɕɥan˨˩˦.koʊ̯˥˩ ʈ͡ʂʰa˧˥.jɛ˥˩ ʂɨ˧˥, tjɛn˥˩.ʈ͡ʂu˨˩˦ ʐɤ˥˩.t͡ɕʰiŋ˧˥ tɤ jaʊ̯˥.t͡ɕʰiŋ˨˩˦ wɔ˨˩.mən pʰin˨˩.ʈ͡ʂʰɑŋ˧˥ lɤ ɕin˥ ʂɑŋ˥˩.ʂɨ˥˩ tɤ lʊŋ˧˥.t͡ɕiŋ˨˩˦ t͡ʂʰwən˥.ʈ͡ʂʰa˧˥, t͡sweɪ̯˥˩.xoʊ̯˥˩ keɪ̯˨˩˦ wɔ˨˩.mən ta˨˩˦ lɤ pa˥ u˨˩˦ ʈ͡ʂɤ˧˥] (Zài chuán-tǒng chá-chéng xuǎn-gòu chá-yè shí, diàn-zhǔ rè-qíng de yāo-qǐng wǒ-men pǐn-cháng le xīn shàng-shì de Lóng-jǐng chūn-chá, zuì-hòu gěi wǒ-men dǎ le bā wǔ zhé.)",
          "translation": "When shopping for tea at the traditional tea market, the shop owner warmly invited us to taste the newly listed Longjing spring tea, and finally gave us a 15% discount (85% price)."
        },
        {
          "target": "我拿出手机打开微信扫码买单，不到三秒钟就完成了付款，整个购物体验既高效又愉快。(Wǒ ná chū shǒujī dǎkāi Wēixìn sǎomǎ mǎidān, bú dào sān miǎozhōng jiù wánchéng le fùkuǎn, zhěnggè gòuwù tǐyàn jì gāoxiào yòu yúkuài.)",
          "reading": "[wɔ˨˩ na˧˥ t͡ʂʰu˥ ʂoʊ̯˨˩.t͡ɕi˥ ta˨˩˦.kʰaɪ̯˥ weɪ̯˥.ɕin˥˩ saʊ̯˨˩.ma˨˩˦ maɪ̯˨˩˦.tan˥, pu˧˥ taʊ̯˥˩ san˥ mjaʊ̯˨˩˦.ʈ͡ʂʊŋ˥ t͡ɕjoʊ̯˥˩ wan˧˥.ʈ͡ʂʰɤŋ˧˥ lɤ fu˥˩.kʰwan˨˩˦, ʈ͡ʂɤŋ˨˩.kɤ koʊ̯˥˩.u˥˩ tʰi˨˩.jɛn˥˩ t͡ɕi˥˩ kaʊ̯˥.ɕjaʊ̯˥˩ joʊ̯˥˩ y˧˥.kʰwaɪ̯˥˩] (Wǒ ná chū shǒu-jī dǎ-kāi Wēi-xìn sǎo-mǎ mǎi-dān, bú dào sān miǎo-zhōng jiù wán-chéng le fù-kuǎn, zhěng-gè gòu-wù tǐ-yàn jì gāo-xiào yòu yú-kuài.)",
          "translation": "I took out my mobile phone and opened WeChat to scan the QR code to pay the bill, completing payment in less than three seconds; the entire shopping experience was both efficient and pleasant."
        }
      ],
      "mnemonics": [
        "试穿选色问价格，打折优惠算分明；扫码支付开小票，篇章购物乐融融！"
      ],
      "culturalNotes": [
        "在当代中国，无论是现代化的百货大厦、繁华的商业步行街，还是充满烟火气的特色集市，购物都是感知中国经济活力与市井人情的最直接窗口。融会贯通这些表达，能让汉语学习者真正自信地融入中国日常生活。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "在购物叙事中，正确串联「挑选试穿 -> 询问折扣 -> 扫码支付」的篇章脉络是：",
          "options": [
            "看中试穿合身 -> 询问得知打折 -> 出示付款码结账 (Coherent narrative progression)",
            "先扫码付款 -> 再去试穿衣服 -> 最后询问价格",
            "先开具发票 -> 挑选衣服试穿 -> 询问能不能退货",
            "退换衣服 -> 扫码支付 -> 进店选购"
          ],
          "answerIndex": 0,
          "explanation": "叙事语篇遵循选购试穿、询价打折、扫码买单的自然时序逻辑。"
        },
        {
          "prompt": "语篇中「原价六百元打八折」与「微信扫码支付」对应的实际交际是：",
          "options": [
            "实付480元，使用手机微信完成无现金结算 (600 × 0.8 = 480 yuan via WeChat Pay)",
            "实付120元，使用现金结算",
            "实付600元，使用银行支票结算",
            "实付80元，使用刷卡结算"
          ],
          "answerIndex": 0,
          "explanation": "600元打八折为480元，微信扫码为移动支付方式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "请选出下列购物叙事语篇中词汇搭配、句式与逻辑完全典范通畅的一项：",
          "options": [
            "我在商场看中了一条牛仔裤，试穿后觉得有点儿长，店员帮我换了一条小号的，打八折后扫码付了一百六十块钱。(量词、评价副词、尺码、折扣与支付完全融会贯通)",
            "我在商场看中了一件牛仔裤，试穿后觉得长一点儿，店员换了一顶小号，打二折付了钱。(量词与副词错乱)",
            "我在商场看中一双牛仔裤，有点儿合身，打折了八，现金扫码退换。(逻辑混乱搭配荒谬)",
            "我在商场看中一条裤子，穿起来一点儿长，打八折付了一百六十个。(量词不通)"
          ],
          "answerIndex": 0,
          "explanation": "「一条牛仔裤」、「有点儿长」（消极感受）、「换一条小号」（期望）、「打八折扫码付了一百六十块」，语法体系完美无缺。"
        },
        {
          "prompt": "在语篇「凭小票在七天之内可以办理退换货」中，「凭」的语法功能是：",
          "options": [
            "介词，表示依据或凭借某种凭据 (Preposition: based on / relying on)",
            "动词，表示跑步",
            "副词，表示经常",
            "助词，表示时态"
          ],
          "answerIndex": 0,
          "explanation": "「凭」在此处充当介词，表示「凭借、依据（小票）」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "请选出下列商业购物综合语篇中用词最地道、语法逻辑完全严密的一项：",
          "options": [
            "今天我和同学去商场选购衣物，我试穿了一件深蓝色外套，大小正合适。这件外套原价五百元，赶上商场店庆打八折，我拿出手机扫码支付了四百块钱，收银员还开具了正规电子发票。(全流程要素完备，语法典范流畅)",
            "今天我和同学去商场，我试穿了一条外套，有点儿合身。原价五百元打二折，我扫码支付了一百元小票。(量词与折扣理解错误)",
            "今天我和同学去商场，我试穿一双外套，大一点儿长。五百元打八折给五十元发票。(严重语法语用缺陷)",
            "今天我和同学商场去，试穿外套一件，太贵一点儿。打折八给四百元钱。(语序破碎词汇错乱)"
          ],
          "answerIndex": 0,
          "explanation": "该语篇在选购、试穿（正合适）、原价与打折计算（500 × 0.8 = 400元）、移动支付（扫码支付）及开票（电子发票）上均达到了现代汉语的最高标准。"
        },
        {
          "type": "typed-recall",
          "prompt": "请输入表示消费者购买商品与服务的核心双字动词词语（拼音为 gòuwù）：",
          "acceptedAnswers": [
            "购物"
          ],
          "explanation": "词语「购物」是现代汉语中表达购买物品的最通用核心书面与口语词汇。"
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
