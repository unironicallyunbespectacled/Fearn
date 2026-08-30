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
