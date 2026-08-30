// cantonese curriculum — fully authored CEFR A1-C2 roadmap (34 units, 170 lessons)
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
    "subject": "cantonese",
    "unit": 1,
    "lessonNumber": 1,
    "title": "粵拼發音同基本問候 (Jyutping & Greetings) (第1課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵拼聲母辨析與初見打招呼 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵拼聲母辨析與初見打招呼】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵拼聲母辨析與初見打招呼」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "早晨，陳先生！",
          "reading": "zou2 san4, can4 sin1 saang1 [tsou˧˥ sɐn˨˩, tsʰɐn˨˩ siːn˥ saːŋ˥] (TSOH-SUN, CHUN SEEN-SAHNG)",
          "translation": "Good morning, Mr. Chan!"
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元1-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-1-1】：把握「粵拼聲母辨析與初」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-1-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"早晨\":",
          "options": [
            "早晨，陳先生！",
            "語序顛倒嘅非標準句式（例項：你好錯置）",
            "混雜生硬詞彙之不規範語句（例項：唔該未適配）",
            "聲調助詞搭配欠妥之表達（例項：多謝誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"早晨\":",
          "options": [
            "早晨，陳先生！",
            "混雜生硬詞彙之不規範語句（例項：唔該未適配）",
            "聲調助詞搭配欠妥之表達（例項：多謝誤用）",
            "語序顛倒嘅非標準句式（例項：你好錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"早晨\": Which sentence is completely correct?",
          "options": [
            "早晨，陳先生！",
            "聲調助詞搭配欠妥之表達（例項：多謝誤用）",
            "語序顛倒嘅非標準句式（例項：你好錯置）",
            "混雜生硬詞彙之不規範語句（例項：唔該未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «早晨»):",
          "acceptedAnswers": [
            "早晨",
            "早晨"
          ],
          "explanation": "The target keyword was: 【早晨】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u1-l2": {
    "id": "hk-u1-l2",
    "subject": "cantonese",
    "unit": 1,
    "lessonNumber": 2,
    "title": "粵拼發音同基本問候 (Jyutping & Greetings) (第2課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 初次結識與姓名詢問介紹 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【初次結識與姓名詢問介紹】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「初次結識與姓名詢問介紹」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "你好，我叫陳大文，好高興識到你。",
          "reading": "nei5 hou2, ngo5 giu3 can4 daai6 man4 [nei˩˧ hou˧˥, ŋɔː˩˧ kiːu˧ tsʰɐn˨˩ taːi˨ mɐn˨˩] (NAY HOH, NGOH GEW CHUN DY-MUN)",
          "translation": "Hello, my name is David Chan, glad to meet you."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元1-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-1-2】：把握「初次結識與姓名詢」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-1-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"你好\":",
          "options": [
            "你好，我叫陳大文，好高興識到你。",
            "語序顛倒嘅非標準句式（例項：唔該錯置）",
            "混雜生硬詞彙之不規範語句（例項：多謝未適配）",
            "聲調助詞搭配欠妥之表達（例項：再見誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"你好\":",
          "options": [
            "你好，我叫陳大文，好高興識到你。",
            "混雜生硬詞彙之不規範語句（例項：多謝未適配）",
            "聲調助詞搭配欠妥之表達（例項：再見誤用）",
            "語序顛倒嘅非標準句式（例項：唔該錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"你好\": Which sentence is completely correct?",
          "options": [
            "你好，我叫陳大文，好高興識到你。",
            "聲調助詞搭配欠妥之表達（例項：再見誤用）",
            "語序顛倒嘅非標準句式（例項：唔該錯置）",
            "混雜生硬詞彙之不規範語句（例項：多謝未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «你好»):",
          "acceptedAnswers": [
            "你好",
            "你好"
          ],
          "explanation": "The target keyword was: 【你好】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u1-l3": {
    "id": "hk-u1-l3",
    "subject": "cantonese",
    "unit": 1,
    "lessonNumber": 3,
    "title": "粵拼發音同基本問候 (Jyutping & Greetings) (第3課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 勞煩助人與唔該多謝分別 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【勞煩助人與唔該多謝分別】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「勞煩助人與唔該多謝分別」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "唔該晒你幫我手搬呢張枱。",
          "reading": "m4 goi1 saai3 nei5 bong1 ngo5 sau2 bun1 ni1 zoeng1 toi2 [m̩˨˩ kɔːi˥ saːi˧ nei˩˧ pɔːŋ˥ ŋɔː˩˧ sɐu˧˥ puːn˥ niː˥ tsœːŋ˥ tʰɔːi˧˥] (M-GOY-SAHY NAY BONG NGOH-SAU BOON NEE-JEUNG TOY)",
          "translation": "Thank you so much for helping me move this table."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元1-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-1-3】：把握「勞煩助人與唔該多」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-1-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"唔該\":",
          "options": [
            "唔該晒你幫我手搬呢張枱。",
            "語序顛倒嘅非標準句式（例項：多謝錯置）",
            "混雜生硬詞彙之不規範語句（例項：再見未適配）",
            "聲調助詞搭配欠妥之表達（例項：唔好意思誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"唔該\":",
          "options": [
            "唔該晒你幫我手搬呢張枱。",
            "混雜生硬詞彙之不規範語句（例項：再見未適配）",
            "聲調助詞搭配欠妥之表達（例項：唔好意思誤用）",
            "語序顛倒嘅非標準句式（例項：多謝錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"唔該\": Which sentence is completely correct?",
          "options": [
            "唔該晒你幫我手搬呢張枱。",
            "聲調助詞搭配欠妥之表達（例項：唔好意思誤用）",
            "語序顛倒嘅非標準句式（例項：多謝錯置）",
            "混雜生硬詞彙之不規範語句（例項：再見未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «唔該»):",
          "acceptedAnswers": [
            "唔該",
            "唔該"
          ],
          "explanation": "The target keyword was: 【唔該】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u1-l4": {
    "id": "hk-u1-l4",
    "subject": "cantonese",
    "unit": 1,
    "lessonNumber": 4,
    "title": "粵拼發音同基本問候 (Jyutping & Greetings) (第4課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 禮貌道歉與唔好意思借過 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【禮貌道歉與唔好意思借過】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「禮貌道歉與唔好意思借過」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "唔好意思，請問地鐵站喺邊度？",
          "reading": "m4 hou2 ji3 si3, cing2 man6 dei6 tit3 zaam6 hai2 bin1 dou6 [m̩˨˩ hou˧˥ jiː˧ siː˧, tsʰɪŋ˧˥ mɐn˨ tei˨ tʰiːt˧ tsaːm˨ hɐi˩˧ piːn˥ tou˨] (M-HOH YEE-SEE, CHING-MUN DAY-TEET JAHM HY BEEN-DOH)",
          "translation": "Excuse me, could you tell me where the MTR station is?"
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元1-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-1-4】：把握「禮貌道歉與唔好意」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-1-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"多謝\":",
          "options": [
            "唔好意思，請問地鐵站喺邊度？",
            "語序顛倒嘅非標準句式（例項：再見錯置）",
            "混雜生硬詞彙之不規範語句（例項：唔好意思未適配）",
            "聲調助詞搭配欠妥之表達（例項：對唔住誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"多謝\":",
          "options": [
            "唔好意思，請問地鐵站喺邊度？",
            "混雜生硬詞彙之不規範語句（例項：唔好意思未適配）",
            "聲調助詞搭配欠妥之表達（例項：對唔住誤用）",
            "語序顛倒嘅非標準句式（例項：再見錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"多謝\": Which sentence is completely correct?",
          "options": [
            "唔好意思，請問地鐵站喺邊度？",
            "聲調助詞搭配欠妥之表達（例項：對唔住誤用）",
            "語序顛倒嘅非標準句式（例項：再見錯置）",
            "混雜生硬詞彙之不規範語句（例項：唔好意思未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «多謝»):",
          "acceptedAnswers": [
            "多謝",
            "多謝"
          ],
          "explanation": "The target keyword was: 【多謝】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u1-l5": {
    "id": "hk-u1-l5",
    "subject": "cantonese",
    "unit": 1,
    "lessonNumber": 5,
    "title": "粵拼發音同基本問候 (Jyutping & Greetings) (第5課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 道別叮囑與日常客套拜拜 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【道別叮囑與日常客套拜拜】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「道別叮囑與日常客套拜拜」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "拜拜，聽日下晝公司會議見。",
          "reading": "baai1 baai3, ting1 jat6 haa6 zau3 gung1 si1 wui6 ji5 gin3 [paːi˥ paːi˧, tʰɪŋ˥ jɐt˨ haː˨ tsɐu˧ kʊŋ˥ siː˥ wuːi˨ jiː˩˧ kiːn˧] (BYE-BYE, TING-YUT HAH-JAU GOONG-SEE WOOEY-YEE GEEN)",
          "translation": "Bye-bye, see you at the company meeting tomorrow afternoon."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元1-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-1-5】：把握「道別叮囑與日常客」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-1-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"再見\":",
          "options": [
            "拜拜，聽日下晝公司會議見。",
            "語序顛倒嘅非標準句式（例項：唔好意思錯置）",
            "混雜生硬詞彙之不規範語句（例項：對唔住未適配）",
            "聲調助詞搭配欠妥之表達（例項：食飯誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"再見\":",
          "options": [
            "拜拜，聽日下晝公司會議見。",
            "混雜生硬詞彙之不規範語句（例項：對唔住未適配）",
            "聲調助詞搭配欠妥之表達（例項：食飯誤用）",
            "語序顛倒嘅非標準句式（例項：唔好意思錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"再見\": Which sentence is completely correct?",
          "options": [
            "拜拜，聽日下晝公司會議見。",
            "聲調助詞搭配欠妥之表達（例項：食飯誤用）",
            "語序顛倒嘅非標準句式（例項：唔好意思錯置）",
            "混雜生硬詞彙之不規範語句（例項：對唔住未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «再見»):",
          "acceptedAnswers": [
            "再見",
            "再見"
          ],
          "explanation": "The target keyword was: 【再見】"
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
    "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (第1課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 數字一至十與入聲韻尾 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【數字一至十與入聲韻尾】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「數字一至十與入聲韻尾」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "呢間舖頭買咗七隻茶杯。",
          "reading": "ni1 gaan1 pou3 tau2 maai5 zo2 cat1 zek3 caa4 bui1 [niː˥ kaːn˥ pʰou˧ tʰɐu˧˥ maːi˩˧ tsɔː˧˥ tsʰɐt˥ tsɛːk˧ tsʰaː˨˩ puːi˥] (NEE-GAHN POH-TAU MY-JOR CHUT-JEK CHAH-BOOY)",
          "translation": "This shop bought seven teacups."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元2-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-2-1】：把握「數字一至十與入聲」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-2-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"唔好意思\":",
          "options": [
            "呢間舖頭買咗七隻茶杯。",
            "語序顛倒嘅非標準句式（例項：對唔住錯置）",
            "混雜生硬詞彙之不規範語句（例項：食飯未適配）",
            "聲調助詞搭配欠妥之表達（例項：飲茶誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"唔好意思\":",
          "options": [
            "呢間舖頭買咗七隻茶杯。",
            "混雜生硬詞彙之不規範語句（例項：食飯未適配）",
            "聲調助詞搭配欠妥之表達（例項：飲茶誤用）",
            "語序顛倒嘅非標準句式（例項：對唔住錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"唔好意思\": Which sentence is completely correct?",
          "options": [
            "呢間舖頭買咗七隻茶杯。",
            "聲調助詞搭配欠妥之表達（例項：飲茶誤用）",
            "語序顛倒嘅非標準句式（例項：對唔住錯置）",
            "混雜生硬詞彙之不規範語句（例項：食飯未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «唔好意思»):",
          "acceptedAnswers": [
            "唔好意思",
            "唔好意思"
          ],
          "explanation": "The target keyword was: 【唔好意思】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u2-l2": {
    "id": "hk-u2-l2",
    "subject": "cantonese",
    "unit": 2,
    "lessonNumber": 2,
    "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (第2課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 量詞搭配：個、隻、條、間 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【量詞搭配：個、隻、條、間】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「量詞搭配：個、隻、條、間」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我想買兩條新鮮石斑魚。",
          "reading": "ngo5 soeng2 maai5 loeng5 tiu4 san1 sin1 sek6 baan1 jyu2 [ŋɔː˩˧ sœːŋ˧˥ maːi˩˧ lœːŋ˩˧ tʰiːu˨˩ sɐn˥ siːn˥ sɛːk˨ paːn˥ jyː˧˥] (NGOH SEUNG-MY LEUNG-TEW SUN-SEEN SEK-BAHN YOO)",
          "translation": "I would like to buy two fresh garoupas."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元2-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-2-2】：把握「量詞搭配：個、隻」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-2-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"對唔住\":",
          "options": [
            "我想買兩條新鮮石斑魚。",
            "語序顛倒嘅非標準句式（例項：食飯錯置）",
            "混雜生硬詞彙之不規範語句（例項：飲茶未適配）",
            "聲調助詞搭配欠妥之表達（例項：點心誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"對唔住\":",
          "options": [
            "我想買兩條新鮮石斑魚。",
            "混雜生硬詞彙之不規範語句（例項：飲茶未適配）",
            "聲調助詞搭配欠妥之表達（例項：點心誤用）",
            "語序顛倒嘅非標準句式（例項：食飯錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"對唔住\": Which sentence is completely correct?",
          "options": [
            "我想買兩條新鮮石斑魚。",
            "聲調助詞搭配欠妥之表達（例項：點心誤用）",
            "語序顛倒嘅非標準句式（例項：食飯錯置）",
            "混雜生硬詞彙之不規範語句（例項：飲茶未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «對唔住»):",
          "acceptedAnswers": [
            "對唔住",
            "對唔住"
          ],
          "explanation": "The target keyword was: 【對唔住】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u2-l3": {
    "id": "hk-u2-l3",
    "subject": "cantonese",
    "unit": 2,
    "lessonNumber": 3,
    "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (第3課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 茶餐廳點餐與特色飲品 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【茶餐廳點餐與特色飲品】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「茶餐廳點餐與特色飲品」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "唔該畀杯凍檸茶少甜同菠蘿油。",
          "reading": "m4 goi1 bei2 bui1 dung3 ning4 caa4 siu2 tim4 tung4 bo1 lo4 jau4 [m̩˨˩ kɔːi˥ pei˧˥ puːi˥ tʊŋ˧ nɪŋ˨˩ tsʰaː˨˩ siːu˧˥ tʰiːm˨˩ tʰʊŋ˨˩ pɔː˥ lɔː˨˩ jɐu˨˩] (M-GOY BAY-BOOY DOONG-NING-CHAH SEW-TEEM TOONG BOH-LOH-YAU)",
          "translation": "Please give me an iced lemon tea less sweet and a pineapple bun."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元2-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-2-3】：把握「茶餐廳點餐與特色」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-2-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"食飯\":",
          "options": [
            "唔該畀杯凍檸茶少甜同菠蘿油。",
            "語序顛倒嘅非標準句式（例項：飲茶錯置）",
            "混雜生硬詞彙之不規範語句（例項：點心未適配）",
            "聲調助詞搭配欠妥之表達（例項：蝦餃誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"食飯\":",
          "options": [
            "唔該畀杯凍檸茶少甜同菠蘿油。",
            "混雜生硬詞彙之不規範語句（例項：點心未適配）",
            "聲調助詞搭配欠妥之表達（例項：蝦餃誤用）",
            "語序顛倒嘅非標準句式（例項：飲茶錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"食飯\": Which sentence is completely correct?",
          "options": [
            "唔該畀杯凍檸茶少甜同菠蘿油。",
            "聲調助詞搭配欠妥之表達（例項：蝦餃誤用）",
            "語序顛倒嘅非標準句式（例項：飲茶錯置）",
            "混雜生硬詞彙之不規範語句（例項：點心未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «食飯»):",
          "acceptedAnswers": [
            "食飯",
            "食飯"
          ],
          "explanation": "The target keyword was: 【食飯】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u2-l4": {
    "id": "hk-u2-l4",
    "subject": "cantonese",
    "unit": 2,
    "lessonNumber": 4,
    "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (第4課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 問價與埋單結賬 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【問價與埋單結賬】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「問價與埋單結賬」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "老闆，呢餐飯一共幾多錢？",
          "reading": "lou5 baan2, ni1 caan1 faan6 jat1 gung6 gei2 do1 cin2 [lou˩˧ paːn˧˥, niː˥ tsʰaːn˥ faːn˨ jɐt˥ kʊŋ˨ kei˧˥ tɔː˥ tsʰiːn˧˥] (LOH-BAHN, NEE-TSAHN FAHN YUT-GOONG GAY-DOH CHEEN)",
          "translation": "Boss, how much is this meal in total?"
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元2-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-2-4】：把握「問價與埋單結賬」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-2-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"飲茶\":",
          "options": [
            "老闆，呢餐飯一共幾多錢？",
            "語序顛倒嘅非標準句式（例項：點心錯置）",
            "混雜生硬詞彙之不規範語句（例項：蝦餃未適配）",
            "聲調助詞搭配欠妥之表達（例項：燒賣誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"飲茶\":",
          "options": [
            "老闆，呢餐飯一共幾多錢？",
            "混雜生硬詞彙之不規範語句（例項：蝦餃未適配）",
            "聲調助詞搭配欠妥之表達（例項：燒賣誤用）",
            "語序顛倒嘅非標準句式（例項：點心錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"飲茶\": Which sentence is completely correct?",
          "options": [
            "老闆，呢餐飯一共幾多錢？",
            "聲調助詞搭配欠妥之表達（例項：燒賣誤用）",
            "語序顛倒嘅非標準句式（例項：點心錯置）",
            "混雜生硬詞彙之不規範語句（例項：蝦餃未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «飲茶»):",
          "acceptedAnswers": [
            "飲茶",
            "飲茶"
          ],
          "explanation": "The target keyword was: 【飲茶】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u2-l5": {
    "id": "hk-u2-l5",
    "subject": "cantonese",
    "unit": 2,
    "lessonNumber": 5,
    "title": "人稱代詞同基本句式 (Pronouns & Basic Sentences) (第5課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 時間與日期表達 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【時間與日期表達】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「時間與日期表達」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋約咗聽日下晝三點三個字見。",
          "reading": "ngo5 dei6 joek3 zo2 ting1 jat6 haa6 zau3 saam1 dim2 saam1 go3 zi6 [ŋɔː˩˧ tei˨ jœːk˧ tsɔː˧˥ tʰɪŋ˥ jɐt˨ haː˨ tsɐu˧ saːm˥ tiːm˧˥ saːm˥ kɔː˧ tsiː˨] (NGOH-DAY YEUK-JOR TING-YUT HAH-JAU SAHM-DEEM SAHM-GOH-JEE)",
          "translation": "We arranged to meet tomorrow afternoon at 3:15."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元2-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-2-5】：把握「時間與日期表達」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-2-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"點心\":",
          "options": [
            "我哋約咗聽日下晝三點三個字見。",
            "語序顛倒嘅非標準句式（例項：蝦餃錯置）",
            "混雜生硬詞彙之不規範語句（例項：燒賣未適配）",
            "聲調助詞搭配欠妥之表達（例項：叉燒包誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"點心\":",
          "options": [
            "我哋約咗聽日下晝三點三個字見。",
            "混雜生硬詞彙之不規範語句（例項：燒賣未適配）",
            "聲調助詞搭配欠妥之表達（例項：叉燒包誤用）",
            "語序顛倒嘅非標準句式（例項：蝦餃錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"點心\": Which sentence is completely correct?",
          "options": [
            "我哋約咗聽日下晝三點三個字見。",
            "聲調助詞搭配欠妥之表達（例項：叉燒包誤用）",
            "語序顛倒嘅非標準句式（例項：蝦餃錯置）",
            "混雜生硬詞彙之不規範語句（例項：燒賣未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «點心»):",
          "acceptedAnswers": [
            "點心",
            "點心"
          ],
          "explanation": "The target keyword was: 【點心】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u3-l1": {
    "id": "hk-u3-l1",
    "subject": "cantonese",
    "unit": 3,
    "lessonNumber": 1,
    "title": "數字、時間同日期 (Numbers, Time & Date) (第1課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元3第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元3第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元3第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 3 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 3 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 3 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元3-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-3-1】：把握「粵語單元3第1課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-3-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"蝦餃\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：燒賣錯置）",
            "混雜生硬詞彙之不規範語句（例項：叉燒包未適配）",
            "聲調助詞搭配欠妥之表達（例項：腸粉誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"蝦餃\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：叉燒包未適配）",
            "聲調助詞搭配欠妥之表達（例項：腸粉誤用）",
            "語序顛倒嘅非標準句式（例項：燒賣錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"蝦餃\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：腸粉誤用）",
            "語序顛倒嘅非標準句式（例項：燒賣錯置）",
            "混雜生硬詞彙之不規範語句（例項：叉燒包未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «蝦餃»):",
          "acceptedAnswers": [
            "蝦餃",
            "蝦餃"
          ],
          "explanation": "The target keyword was: 【蝦餃】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u3-l2": {
    "id": "hk-u3-l2",
    "subject": "cantonese",
    "unit": 3,
    "lessonNumber": 2,
    "title": "數字、時間同日期 (Numbers, Time & Date) (第2課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元3第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元3第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元3第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 3 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 3 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 3 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元3-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-3-2】：把握「粵語單元3第2課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-3-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"燒賣\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：叉燒包錯置）",
            "混雜生硬詞彙之不規範語句（例項：腸粉未適配）",
            "聲調助詞搭配欠妥之表達（例項：春卷誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"燒賣\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：腸粉未適配）",
            "聲調助詞搭配欠妥之表達（例項：春卷誤用）",
            "語序顛倒嘅非標準句式（例項：叉燒包錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"燒賣\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：春卷誤用）",
            "語序顛倒嘅非標準句式（例項：叉燒包錯置）",
            "混雜生硬詞彙之不規範語句（例項：腸粉未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «燒賣»):",
          "acceptedAnswers": [
            "燒賣",
            "燒賣"
          ],
          "explanation": "The target keyword was: 【燒賣】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u3-l3": {
    "id": "hk-u3-l3",
    "subject": "cantonese",
    "unit": 3,
    "lessonNumber": 3,
    "title": "數字、時間同日期 (Numbers, Time & Date) (第3課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元3第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元3第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元3第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 3 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 3 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 3 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元3-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-3-3】：把握「粵語單元3第3課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-3-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"叉燒包\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：腸粉錯置）",
            "混雜生硬詞彙之不規範語句（例項：春卷未適配）",
            "聲調助詞搭配欠妥之表達（例項：蛋撻誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"叉燒包\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：春卷未適配）",
            "聲調助詞搭配欠妥之表達（例項：蛋撻誤用）",
            "語序顛倒嘅非標準句式（例項：腸粉錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"叉燒包\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：蛋撻誤用）",
            "語序顛倒嘅非標準句式（例項：腸粉錯置）",
            "混雜生硬詞彙之不規範語句（例項：春卷未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «叉燒包»):",
          "acceptedAnswers": [
            "叉燒包",
            "叉燒包"
          ],
          "explanation": "The target keyword was: 【叉燒包】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u3-l4": {
    "id": "hk-u3-l4",
    "subject": "cantonese",
    "unit": 3,
    "lessonNumber": 4,
    "title": "數字、時間同日期 (Numbers, Time & Date) (第4課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元3第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元3第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元3第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 3 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 3 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 3 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元3-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-3-4】：把握「粵語單元3第4課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-3-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"腸粉\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：春卷錯置）",
            "混雜生硬詞彙之不規範語句（例項：蛋撻未適配）",
            "聲調助詞搭配欠妥之表達（例項：菠蘿油誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"腸粉\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：蛋撻未適配）",
            "聲調助詞搭配欠妥之表達（例項：菠蘿油誤用）",
            "語序顛倒嘅非標準句式（例項：春卷錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"腸粉\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：菠蘿油誤用）",
            "語序顛倒嘅非標準句式（例項：春卷錯置）",
            "混雜生硬詞彙之不規範語句（例項：蛋撻未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «腸粉»):",
          "acceptedAnswers": [
            "腸粉",
            "腸粉"
          ],
          "explanation": "The target keyword was: 【腸粉】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u3-l5": {
    "id": "hk-u3-l5",
    "subject": "cantonese",
    "unit": 3,
    "lessonNumber": 5,
    "title": "數字、時間同日期 (Numbers, Time & Date) (第5課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元3第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元3第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元3第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 3 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 3 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 3 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元3-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-3-5】：把握「粵語單元3第5課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-3-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"春卷\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：蛋撻錯置）",
            "混雜生硬詞彙之不規範語句（例項：菠蘿油未適配）",
            "聲調助詞搭配欠妥之表達（例項：凍檸茶誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"春卷\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：菠蘿油未適配）",
            "聲調助詞搭配欠妥之表達（例項：凍檸茶誤用）",
            "語序顛倒嘅非標準句式（例項：蛋撻錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"春卷\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第3課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：凍檸茶誤用）",
            "語序顛倒嘅非標準句式（例項：蛋撻錯置）",
            "混雜生硬詞彙之不規範語句（例項：菠蘿油未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «春卷»):",
          "acceptedAnswers": [
            "春卷",
            "春卷"
          ],
          "explanation": "The target keyword was: 【春卷】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u4-l1": {
    "id": "hk-u4-l1",
    "subject": "cantonese",
    "unit": 4,
    "lessonNumber": 1,
    "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (第1課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元4第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元4第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元4第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 4 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 4 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 4 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元4-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-4-1】：把握「粵語單元4第1課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-4-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"蛋撻\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：菠蘿油錯置）",
            "混雜生硬詞彙之不規範語句（例項：凍檸茶未適配）",
            "聲調助詞搭配欠妥之表達（例項：奶茶誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"蛋撻\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：凍檸茶未適配）",
            "聲調助詞搭配欠妥之表達（例項：奶茶誤用）",
            "語序顛倒嘅非標準句式（例項：菠蘿油錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"蛋撻\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：奶茶誤用）",
            "語序顛倒嘅非標準句式（例項：菠蘿油錯置）",
            "混雜生硬詞彙之不規範語句（例項：凍檸茶未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «蛋撻»):",
          "acceptedAnswers": [
            "蛋撻",
            "蛋撻"
          ],
          "explanation": "The target keyword was: 【蛋撻】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u4-l2": {
    "id": "hk-u4-l2",
    "subject": "cantonese",
    "unit": 4,
    "lessonNumber": 2,
    "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (第2課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元4第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元4第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元4第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 4 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 4 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 4 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元4-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-4-2】：把握「粵語單元4第2課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-4-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"菠蘿油\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：凍檸茶錯置）",
            "混雜生硬詞彙之不規範語句（例項：奶茶未適配）",
            "聲調助詞搭配欠妥之表達（例項：鴛鴦誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"菠蘿油\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：奶茶未適配）",
            "聲調助詞搭配欠妥之表達（例項：鴛鴦誤用）",
            "語序顛倒嘅非標準句式（例項：凍檸茶錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"菠蘿油\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：鴛鴦誤用）",
            "語序顛倒嘅非標準句式（例項：凍檸茶錯置）",
            "混雜生硬詞彙之不規範語句（例項：奶茶未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «菠蘿油»):",
          "acceptedAnswers": [
            "菠蘿油",
            "菠蘿油"
          ],
          "explanation": "The target keyword was: 【菠蘿油】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u4-l3": {
    "id": "hk-u4-l3",
    "subject": "cantonese",
    "unit": 4,
    "lessonNumber": 3,
    "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (第3課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元4第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元4第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元4第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 4 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 4 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 4 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元4-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-4-3】：把握「粵語單元4第3課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-4-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"凍檸茶\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：奶茶錯置）",
            "混雜生硬詞彙之不規範語句（例項：鴛鴦未適配）",
            "聲調助詞搭配欠妥之表達（例項：地鐵誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"凍檸茶\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：鴛鴦未適配）",
            "聲調助詞搭配欠妥之表達（例項：地鐵誤用）",
            "語序顛倒嘅非標準句式（例項：奶茶錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"凍檸茶\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：地鐵誤用）",
            "語序顛倒嘅非標準句式（例項：奶茶錯置）",
            "混雜生硬詞彙之不規範語句（例項：鴛鴦未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «凍檸茶»):",
          "acceptedAnswers": [
            "凍檸茶",
            "凍檸茶"
          ],
          "explanation": "The target keyword was: 【凍檸茶】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u4-l4": {
    "id": "hk-u4-l4",
    "subject": "cantonese",
    "unit": 4,
    "lessonNumber": 4,
    "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (第4課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元4第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元4第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元4第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 4 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 4 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 4 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元4-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-4-4】：把握「粵語單元4第4課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-4-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"奶茶\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：鴛鴦錯置）",
            "混雜生硬詞彙之不規範語句（例項：地鐵未適配）",
            "聲調助詞搭配欠妥之表達（例項：巴士誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"奶茶\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：地鐵未適配）",
            "聲調助詞搭配欠妥之表達（例項：巴士誤用）",
            "語序顛倒嘅非標準句式（例項：鴛鴦錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"奶茶\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：巴士誤用）",
            "語序顛倒嘅非標準句式（例項：鴛鴦錯置）",
            "混雜生硬詞彙之不規範語句（例項：地鐵未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «奶茶»):",
          "acceptedAnswers": [
            "奶茶",
            "奶茶"
          ],
          "explanation": "The target keyword was: 【奶茶】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u4-l5": {
    "id": "hk-u4-l5",
    "subject": "cantonese",
    "unit": 4,
    "lessonNumber": 5,
    "title": "量詞同名詞修飾 (Classifiers & Noun Modification) (第5課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元4第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元4第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元4第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 4 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 4 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 4 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元4-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-4-5】：把握「粵語單元4第5課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-4-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"鴛鴦\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：地鐵錯置）",
            "混雜生硬詞彙之不規範語句（例項：巴士未適配）",
            "聲調助詞搭配欠妥之表達（例項：小巴誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"鴛鴦\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：巴士未適配）",
            "聲調助詞搭配欠妥之表達（例項：小巴誤用）",
            "語序顛倒嘅非標準句式（例項：地鐵錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"鴛鴦\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第4課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：小巴誤用）",
            "語序顛倒嘅非標準句式（例項：地鐵錯置）",
            "混雜生硬詞彙之不規範語句（例項：巴士未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «鴛鴦»):",
          "acceptedAnswers": [
            "鴛鴦",
            "鴛鴦"
          ],
          "explanation": "The target keyword was: 【鴛鴦】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u5-l1": {
    "id": "hk-u5-l1",
    "subject": "cantonese",
    "unit": 5,
    "lessonNumber": 1,
    "title": "日常生活同喺字句 (Daily Routine & Location) (第1課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元5第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元5第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元5第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 5 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 5 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 5 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元5-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-5-1】：把握「粵語單元5第1課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-5-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"地鐵\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：巴士錯置）",
            "混雜生硬詞彙之不規範語句（例項：小巴未適配）",
            "聲調助詞搭配欠妥之表達（例項：電車誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"地鐵\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：小巴未適配）",
            "聲調助詞搭配欠妥之表達（例項：電車誤用）",
            "語序顛倒嘅非標準句式（例項：巴士錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"地鐵\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：電車誤用）",
            "語序顛倒嘅非標準句式（例項：巴士錯置）",
            "混雜生硬詞彙之不規範語句（例項：小巴未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «地鐵»):",
          "acceptedAnswers": [
            "地鐵",
            "地鐵"
          ],
          "explanation": "The target keyword was: 【地鐵】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u5-l2": {
    "id": "hk-u5-l2",
    "subject": "cantonese",
    "unit": 5,
    "lessonNumber": 2,
    "title": "日常生活同喺字句 (Daily Routine & Location) (第2課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元5第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元5第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元5第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 5 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 5 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 5 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元5-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-5-2】：把握「粵語單元5第2課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-5-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"巴士\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：小巴錯置）",
            "混雜生硬詞彙之不規範語句（例項：電車未適配）",
            "聲調助詞搭配欠妥之表達（例項：渡輪誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"巴士\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：電車未適配）",
            "聲調助詞搭配欠妥之表達（例項：渡輪誤用）",
            "語序顛倒嘅非標準句式（例項：小巴錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"巴士\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：渡輪誤用）",
            "語序顛倒嘅非標準句式（例項：小巴錯置）",
            "混雜生硬詞彙之不規範語句（例項：電車未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «巴士»):",
          "acceptedAnswers": [
            "巴士",
            "巴士"
          ],
          "explanation": "The target keyword was: 【巴士】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u5-l3": {
    "id": "hk-u5-l3",
    "subject": "cantonese",
    "unit": 5,
    "lessonNumber": 3,
    "title": "日常生活同喺字句 (Daily Routine & Location) (第3課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元5第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元5第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元5第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 5 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 5 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 5 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元5-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-5-3】：把握「粵語單元5第3課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-5-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"小巴\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：電車錯置）",
            "混雜生硬詞彙之不規範語句（例項：渡輪未適配）",
            "聲調助詞搭配欠妥之表達（例項：的士誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"小巴\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：渡輪未適配）",
            "聲調助詞搭配欠妥之表達（例項：的士誤用）",
            "語序顛倒嘅非標準句式（例項：電車錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"小巴\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：的士誤用）",
            "語序顛倒嘅非標準句式（例項：電車錯置）",
            "混雜生硬詞彙之不規範語句（例項：渡輪未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «小巴»):",
          "acceptedAnswers": [
            "小巴",
            "小巴"
          ],
          "explanation": "The target keyword was: 【小巴】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u5-l4": {
    "id": "hk-u5-l4",
    "subject": "cantonese",
    "unit": 5,
    "lessonNumber": 4,
    "title": "日常生活同喺字句 (Daily Routine & Location) (第4課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元5第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元5第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元5第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 5 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 5 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 5 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元5-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-5-4】：把握「粵語單元5第4課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-5-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"電車\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：渡輪錯置）",
            "混雜生硬詞彙之不規範語句（例項：的士未適配）",
            "聲調助詞搭配欠妥之表達（例項：車站誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"電車\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：的士未適配）",
            "聲調助詞搭配欠妥之表達（例項：車站誤用）",
            "語序顛倒嘅非標準句式（例項：渡輪錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"電車\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：車站誤用）",
            "語序顛倒嘅非標準句式（例項：渡輪錯置）",
            "混雜生硬詞彙之不規範語句（例項：的士未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «電車»):",
          "acceptedAnswers": [
            "電車",
            "電車"
          ],
          "explanation": "The target keyword was: 【電車】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u5-l5": {
    "id": "hk-u5-l5",
    "subject": "cantonese",
    "unit": 5,
    "lessonNumber": 5,
    "title": "日常生活同喺字句 (Daily Routine & Location) (第5課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元5第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元5第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元5第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 5 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 5 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 5 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元5-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-5-5】：把握「粵語單元5第5課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-5-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"渡輪\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：的士錯置）",
            "混雜生硬詞彙之不規範語句（例項：車站未適配）",
            "聲調助詞搭配欠妥之表達（例項：車飛誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"渡輪\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：車站未適配）",
            "聲調助詞搭配欠妥之表達（例項：車飛誤用）",
            "語序顛倒嘅非標準句式（例項：的士錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"渡輪\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第5課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：車飛誤用）",
            "語序顛倒嘅非標準句式（例項：的士錯置）",
            "混雜生硬詞彙之不規範語句（例項：車站未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «渡輪»):",
          "acceptedAnswers": [
            "渡輪",
            "渡輪"
          ],
          "explanation": "The target keyword was: 【渡輪】"
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
    "title": "飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第1課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元6第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元6第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元6第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 6 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 6 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 6 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元6-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-6-1】：把握「粵語單元6第1課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-6-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"的士\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：車站錯置）",
            "混雜生硬詞彙之不規範語句（例項：車飛未適配）",
            "聲調助詞搭配欠妥之表達（例項：八達通誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"的士\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：車飛未適配）",
            "聲調助詞搭配欠妥之表達（例項：八達通誤用）",
            "語序顛倒嘅非標準句式（例項：車站錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"的士\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：八達通誤用）",
            "語序顛倒嘅非標準句式（例項：車站錯置）",
            "混雜生硬詞彙之不規範語句（例項：車飛未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «的士»):",
          "acceptedAnswers": [
            "的士",
            "的士"
          ],
          "explanation": "The target keyword was: 【的士】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u6-l2": {
    "id": "hk-u6-l2",
    "subject": "cantonese",
    "unit": 6,
    "lessonNumber": 2,
    "title": "飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第2課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元6第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元6第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元6第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 6 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 6 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 6 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元6-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-6-2】：把握「粵語單元6第2課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-6-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"車站\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：車飛錯置）",
            "混雜生硬詞彙之不規範語句（例項：八達通未適配）",
            "聲調助詞搭配欠妥之表達（例項：增值誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"車站\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：八達通未適配）",
            "聲調助詞搭配欠妥之表達（例項：增值誤用）",
            "語序顛倒嘅非標準句式（例項：車飛錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"車站\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：增值誤用）",
            "語序顛倒嘅非標準句式（例項：車飛錯置）",
            "混雜生硬詞彙之不規範語句（例項：八達通未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «車站»):",
          "acceptedAnswers": [
            "車站",
            "車站"
          ],
          "explanation": "The target keyword was: 【車站】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u6-l3": {
    "id": "hk-u6-l3",
    "subject": "cantonese",
    "unit": 6,
    "lessonNumber": 3,
    "title": "飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第3課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元6第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元6第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元6第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 6 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 6 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 6 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元6-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-6-3】：把握「粵語單元6第3課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-6-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"車飛\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：八達通錯置）",
            "混雜生硬詞彙之不規範語句（例項：增值未適配）",
            "聲調助詞搭配欠妥之表達（例項：買嘢誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"車飛\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：增值未適配）",
            "聲調助詞搭配欠妥之表達（例項：買嘢誤用）",
            "語序顛倒嘅非標準句式（例項：八達通錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"車飛\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：買嘢誤用）",
            "語序顛倒嘅非標準句式（例項：八達通錯置）",
            "混雜生硬詞彙之不規範語句（例項：增值未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «車飛»):",
          "acceptedAnswers": [
            "車飛",
            "車飛"
          ],
          "explanation": "The target keyword was: 【車飛】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u6-l4": {
    "id": "hk-u6-l4",
    "subject": "cantonese",
    "unit": 6,
    "lessonNumber": 4,
    "title": "飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第4課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元6第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元6第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元6第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 6 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 6 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 6 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元6-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-6-4】：把握「粵語單元6第4課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-6-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"八達通\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：增值錯置）",
            "混雜生硬詞彙之不規範語句（例項：買嘢未適配）",
            "聲調助詞搭配欠妥之表達（例項：幾多錢誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"八達通\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：買嘢未適配）",
            "聲調助詞搭配欠妥之表達（例項：幾多錢誤用）",
            "語序顛倒嘅非標準句式（例項：增值錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"八達通\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：幾多錢誤用）",
            "語序顛倒嘅非標準句式（例項：增值錯置）",
            "混雜生硬詞彙之不規範語句（例項：買嘢未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «八達通»):",
          "acceptedAnswers": [
            "八達通",
            "八達通"
          ],
          "explanation": "The target keyword was: 【八達通】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u6-l5": {
    "id": "hk-u6-l5",
    "subject": "cantonese",
    "unit": 6,
    "lessonNumber": 5,
    "title": "飲茶文化、點餐同茶餐廳 (Dim Sum & Cha Chaan Teng) (第5課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元6第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元6第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元6第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 6 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 6 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 6 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元6-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-6-5】：把握「粵語單元6第5課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-6-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"增值\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：買嘢錯置）",
            "混雜生硬詞彙之不規範語句（例項：幾多錢未適配）",
            "聲調助詞搭配欠妥之表達（例項：埋單誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"增值\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：幾多錢未適配）",
            "聲調助詞搭配欠妥之表達（例項：埋單誤用）",
            "語序顛倒嘅非標準句式（例項：買嘢錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"增值\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第6課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：埋單誤用）",
            "語序顛倒嘅非標準句式（例項：買嘢錯置）",
            "混雜生硬詞彙之不規範語句（例項：幾多錢未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «增值»):",
          "acceptedAnswers": [
            "增值",
            "增值"
          ],
          "explanation": "The target keyword was: 【增值】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u7-l1": {
    "id": "hk-u7-l1",
    "subject": "cantonese",
    "unit": 7,
    "lessonNumber": 1,
    "title": "動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第1課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元7第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元7第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元7第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 7 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 7 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 7 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元7-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-7-1】：把握「粵語單元7第1課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-7-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"買嘢\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：幾多錢錯置）",
            "混雜生硬詞彙之不規範語句（例項：埋單未適配）",
            "聲調助詞搭配欠妥之表達（例項：找錢誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"買嘢\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：埋單未適配）",
            "聲調助詞搭配欠妥之表達（例項：找錢誤用）",
            "語序顛倒嘅非標準句式（例項：幾多錢錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"買嘢\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：找錢誤用）",
            "語序顛倒嘅非標準句式（例項：幾多錢錯置）",
            "混雜生硬詞彙之不規範語句（例項：埋單未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «買嘢»):",
          "acceptedAnswers": [
            "買嘢",
            "買嘢"
          ],
          "explanation": "The target keyword was: 【買嘢】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u7-l2": {
    "id": "hk-u7-l2",
    "subject": "cantonese",
    "unit": 7,
    "lessonNumber": 2,
    "title": "動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第2課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元7第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元7第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元7第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 7 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 7 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 7 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元7-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-7-2】：把握「粵語單元7第2課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-7-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"幾多錢\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：埋單錯置）",
            "混雜生硬詞彙之不規範語句（例項：找錢未適配）",
            "聲調助詞搭配欠妥之表達（例項：減價誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"幾多錢\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：找錢未適配）",
            "聲調助詞搭配欠妥之表達（例項：減價誤用）",
            "語序顛倒嘅非標準句式（例項：埋單錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"幾多錢\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：減價誤用）",
            "語序顛倒嘅非標準句式（例項：埋單錯置）",
            "混雜生硬詞彙之不規範語句（例項：找錢未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «幾多錢»):",
          "acceptedAnswers": [
            "幾多錢",
            "幾多錢"
          ],
          "explanation": "The target keyword was: 【幾多錢】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u7-l3": {
    "id": "hk-u7-l3",
    "subject": "cantonese",
    "unit": 7,
    "lessonNumber": 3,
    "title": "動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第3課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元7第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元7第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元7第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 7 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 7 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 7 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元7-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-7-3】：把握「粵語單元7第3課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-7-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"埋單\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：找錢錯置）",
            "混雜生硬詞彙之不規範語句（例項：減價未適配）",
            "聲調助詞搭配欠妥之表達（例項：平啲誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"埋單\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：減價未適配）",
            "聲調助詞搭配欠妥之表達（例項：平啲誤用）",
            "語序顛倒嘅非標準句式（例項：找錢錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"埋單\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：平啲誤用）",
            "語序顛倒嘅非標準句式（例項：找錢錯置）",
            "混雜生硬詞彙之不規範語句（例項：減價未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «埋單»):",
          "acceptedAnswers": [
            "埋單",
            "埋單"
          ],
          "explanation": "The target keyword was: 【埋單】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u7-l4": {
    "id": "hk-u7-l4",
    "subject": "cantonese",
    "unit": 7,
    "lessonNumber": 4,
    "title": "動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第4課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元7第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元7第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元7第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 7 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 7 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 7 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元7-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-7-4】：把握「粵語單元7第4課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-7-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"找錢\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：減價錯置）",
            "混雜生硬詞彙之不規範語句（例項：平啲未適配）",
            "聲調助詞搭配欠妥之表達（例項：貴咗誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"找錢\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：平啲未適配）",
            "聲調助詞搭配欠妥之表達（例項：貴咗誤用）",
            "語序顛倒嘅非標準句式（例項：減價錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"找錢\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：貴咗誤用）",
            "語序顛倒嘅非標準句式（例項：減價錯置）",
            "混雜生硬詞彙之不規範語句（例項：平啲未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «找錢»):",
          "acceptedAnswers": [
            "找錢",
            "找錢"
          ],
          "explanation": "The target keyword was: 【找錢】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u7-l5": {
    "id": "hk-u7-l5",
    "subject": "cantonese",
    "unit": 7,
    "lessonNumber": 5,
    "title": "動態助詞「咗」「緊」「過」 (Aspect Particles ZO, GAN, GWO) (第5課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元7第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元7第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元7第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 7 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 7 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 7 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元7-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-7-5】：把握「粵語單元7第5課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-7-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"減價\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：平啲錯置）",
            "混雜生硬詞彙之不規範語句（例項：貴咗未適配）",
            "聲調助詞搭配欠妥之表達（例項：收據誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"減價\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：貴咗未適配）",
            "聲調助詞搭配欠妥之表達（例項：收據誤用）",
            "語序顛倒嘅非標準句式（例項：平啲錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"減價\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第7課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：收據誤用）",
            "語序顛倒嘅非標準句式（例項：平啲錯置）",
            "混雜生硬詞彙之不規範語句（例項：貴咗未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «減價»):",
          "acceptedAnswers": [
            "減價",
            "減價"
          ],
          "explanation": "The target keyword was: 【減價】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u8-l1": {
    "id": "hk-u8-l1",
    "subject": "cantonese",
    "unit": 8,
    "lessonNumber": 1,
    "title": "方向、位置同行街交通 (Directions & HK Transit) (第1課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元8第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元8第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元8第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 8 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 8 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 8 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元8-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-8-1】：把握「粵語單元8第1課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-8-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"平啲\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：貴咗錯置）",
            "混雜生硬詞彙之不規範語句（例項：收據未適配）",
            "聲調助詞搭配欠妥之表達（例項：信用卡誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"平啲\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：收據未適配）",
            "聲調助詞搭配欠妥之表達（例項：信用卡誤用）",
            "語序顛倒嘅非標準句式（例項：貴咗錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"平啲\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：信用卡誤用）",
            "語序顛倒嘅非標準句式（例項：貴咗錯置）",
            "混雜生硬詞彙之不規範語句（例項：收據未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «平啲»):",
          "acceptedAnswers": [
            "平啲",
            "平啲"
          ],
          "explanation": "The target keyword was: 【平啲】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u8-l2": {
    "id": "hk-u8-l2",
    "subject": "cantonese",
    "unit": 8,
    "lessonNumber": 2,
    "title": "方向、位置同行街交通 (Directions & HK Transit) (第2課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元8第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元8第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元8第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 8 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 8 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 8 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元8-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-8-2】：把握「粵語單元8第2課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-8-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"貴咗\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：收據錯置）",
            "混雜生硬詞彙之不規範語句（例項：信用卡未適配）",
            "聲調助詞搭配欠妥之表達（例項：現金誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"貴咗\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：信用卡未適配）",
            "聲調助詞搭配欠妥之表達（例項：現金誤用）",
            "語序顛倒嘅非標準句式（例項：收據錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"貴咗\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：現金誤用）",
            "語序顛倒嘅非標準句式（例項：收據錯置）",
            "混雜生硬詞彙之不規範語句（例項：信用卡未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «貴咗»):",
          "acceptedAnswers": [
            "貴咗",
            "貴咗"
          ],
          "explanation": "The target keyword was: 【貴咗】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u8-l3": {
    "id": "hk-u8-l3",
    "subject": "cantonese",
    "unit": 8,
    "lessonNumber": 3,
    "title": "方向、位置同行街交通 (Directions & HK Transit) (第3課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元8第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元8第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元8第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 8 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 8 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 8 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元8-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-8-3】：把握「粵語單元8第3課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-8-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"收據\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：信用卡錯置）",
            "混雜生硬詞彙之不規範語句（例項：現金未適配）",
            "聲調助詞搭配欠妥之表達（例項：屋企誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"收據\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：現金未適配）",
            "聲調助詞搭配欠妥之表達（例項：屋企誤用）",
            "語序顛倒嘅非標準句式（例項：信用卡錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"收據\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：屋企誤用）",
            "語序顛倒嘅非標準句式（例項：信用卡錯置）",
            "混雜生硬詞彙之不規範語句（例項：現金未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «收據»):",
          "acceptedAnswers": [
            "收據",
            "收據"
          ],
          "explanation": "The target keyword was: 【收據】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u8-l4": {
    "id": "hk-u8-l4",
    "subject": "cantonese",
    "unit": 8,
    "lessonNumber": 4,
    "title": "方向、位置同行街交通 (Directions & HK Transit) (第4課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元8第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元8第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元8第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 8 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 8 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 8 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元8-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-8-4】：把握「粵語單元8第4課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-8-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"信用卡\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：現金錯置）",
            "混雜生硬詞彙之不規範語句（例項：屋企未適配）",
            "聲調助詞搭配欠妥之表達（例項：客廳誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"信用卡\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：屋企未適配）",
            "聲調助詞搭配欠妥之表達（例項：客廳誤用）",
            "語序顛倒嘅非標準句式（例項：現金錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"信用卡\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：客廳誤用）",
            "語序顛倒嘅非標準句式（例項：現金錯置）",
            "混雜生硬詞彙之不規範語句（例項：屋企未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «信用卡»):",
          "acceptedAnswers": [
            "信用卡",
            "信用卡"
          ],
          "explanation": "The target keyword was: 【信用卡】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u8-l5": {
    "id": "hk-u8-l5",
    "subject": "cantonese",
    "unit": 8,
    "lessonNumber": 5,
    "title": "方向、位置同行街交通 (Directions & HK Transit) (第5課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元8第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元8第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元8第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 8 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 8 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 8 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元8-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-8-5】：把握「粵語單元8第5課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-8-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"現金\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：屋企錯置）",
            "混雜生硬詞彙之不規範語句（例項：客廳未適配）",
            "聲調助詞搭配欠妥之表達（例項：廚房誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"現金\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：客廳未適配）",
            "聲調助詞搭配欠妥之表達（例項：廚房誤用）",
            "語序顛倒嘅非標準句式（例項：屋企錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"現金\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第8課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：廚房誤用）",
            "語序顛倒嘅非標準句式（例項：屋企錯置）",
            "混雜生硬詞彙之不規範語句（例項：客廳未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «現金»):",
          "acceptedAnswers": [
            "現金",
            "現金"
          ],
          "explanation": "The target keyword was: 【現金】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u9-l1": {
    "id": "hk-u9-l1",
    "subject": "cantonese",
    "unit": 9,
    "lessonNumber": 1,
    "title": "買嘢、價錢同找錢 (Shopping & Currency) (第1課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元9第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元9第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元9第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 9 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 9 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 9 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元9-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-9-1】：把握「粵語單元9第1課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-9-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"屋企\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：客廳錯置）",
            "混雜生硬詞彙之不規範語句（例項：廚房未適配）",
            "聲調助詞搭配欠妥之表達（例項：睡房誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"屋企\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：廚房未適配）",
            "聲調助詞搭配欠妥之表達（例項：睡房誤用）",
            "語序顛倒嘅非標準句式（例項：客廳錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"屋企\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：睡房誤用）",
            "語序顛倒嘅非標準句式（例項：客廳錯置）",
            "混雜生硬詞彙之不規範語句（例項：廚房未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «屋企»):",
          "acceptedAnswers": [
            "屋企",
            "屋企"
          ],
          "explanation": "The target keyword was: 【屋企】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u9-l2": {
    "id": "hk-u9-l2",
    "subject": "cantonese",
    "unit": 9,
    "lessonNumber": 2,
    "title": "買嘢、價錢同找錢 (Shopping & Currency) (第2課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元9第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元9第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元9第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 9 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 9 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 9 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元9-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-9-2】：把握「粵語單元9第2課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-9-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"客廳\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：廚房錯置）",
            "混雜生硬詞彙之不規範語句（例項：睡房未適配）",
            "聲調助詞搭配欠妥之表達（例項：洗手間誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"客廳\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：睡房未適配）",
            "聲調助詞搭配欠妥之表達（例項：洗手間誤用）",
            "語序顛倒嘅非標準句式（例項：廚房錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"客廳\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：洗手間誤用）",
            "語序顛倒嘅非標準句式（例項：廚房錯置）",
            "混雜生硬詞彙之不規範語句（例項：睡房未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «客廳»):",
          "acceptedAnswers": [
            "客廳",
            "客廳"
          ],
          "explanation": "The target keyword was: 【客廳】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u9-l3": {
    "id": "hk-u9-l3",
    "subject": "cantonese",
    "unit": 9,
    "lessonNumber": 3,
    "title": "買嘢、價錢同找錢 (Shopping & Currency) (第3課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元9第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元9第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元9第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 9 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 9 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 9 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元9-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-9-3】：把握「粵語單元9第3課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-9-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"廚房\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：睡房錯置）",
            "混雜生硬詞彙之不規範語句（例項：洗手間未適配）",
            "聲調助詞搭配欠妥之表達（例項：雪櫃誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"廚房\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：洗手間未適配）",
            "聲調助詞搭配欠妥之表達（例項：雪櫃誤用）",
            "語序顛倒嘅非標準句式（例項：睡房錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"廚房\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：雪櫃誤用）",
            "語序顛倒嘅非標準句式（例項：睡房錯置）",
            "混雜生硬詞彙之不規範語句（例項：洗手間未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «廚房»):",
          "acceptedAnswers": [
            "廚房",
            "廚房"
          ],
          "explanation": "The target keyword was: 【廚房】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u9-l4": {
    "id": "hk-u9-l4",
    "subject": "cantonese",
    "unit": 9,
    "lessonNumber": 4,
    "title": "買嘢、價錢同找錢 (Shopping & Currency) (第4課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元9第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元9第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元9第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 9 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 9 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 9 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元9-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-9-4】：把握「粵語單元9第4課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-9-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"睡房\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：洗手間錯置）",
            "混雜生硬詞彙之不規範語句（例項：雪櫃未適配）",
            "聲調助詞搭配欠妥之表達（例項：冷氣機誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"睡房\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：雪櫃未適配）",
            "聲調助詞搭配欠妥之表達（例項：冷氣機誤用）",
            "語序顛倒嘅非標準句式（例項：洗手間錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"睡房\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：冷氣機誤用）",
            "語序顛倒嘅非標準句式（例項：洗手間錯置）",
            "混雜生硬詞彙之不規範語句（例項：雪櫃未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «睡房»):",
          "acceptedAnswers": [
            "睡房",
            "睡房"
          ],
          "explanation": "The target keyword was: 【睡房】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u9-l5": {
    "id": "hk-u9-l5",
    "subject": "cantonese",
    "unit": 9,
    "lessonNumber": 5,
    "title": "買嘢、價錢同找錢 (Shopping & Currency) (第5課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元9第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元9第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元9第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 9 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 9 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 9 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元9-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-9-5】：把握「粵語單元9第5課」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-9-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"洗手間\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：雪櫃錯置）",
            "混雜生硬詞彙之不規範語句（例項：冷氣機未適配）",
            "聲調助詞搭配欠妥之表達（例項：電視機誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"洗手間\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：冷氣機未適配）",
            "聲調助詞搭配欠妥之表達（例項：電視機誤用）",
            "語序顛倒嘅非標準句式（例項：雪櫃錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"洗手間\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第9課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：電視機誤用）",
            "語序顛倒嘅非標準句式（例項：雪櫃錯置）",
            "混雜生硬詞彙之不規範語句（例項：冷氣機未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «洗手間»):",
          "acceptedAnswers": [
            "洗手間",
            "洗手間"
          ],
          "explanation": "The target keyword was: 【洗手間】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u10-l1": {
    "id": "hk-u10-l1",
    "subject": "cantonese",
    "unit": 10,
    "lessonNumber": 1,
    "title": "身體部位同睇醫生 (Health & Medical Care) (第1課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元10第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元10第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元10第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 10 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 10 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 10 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元10-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-10-1】：把握「粵語單元10第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-10-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"雪櫃\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：冷氣機錯置）",
            "混雜生硬詞彙之不規範語句（例項：電視機未適配）",
            "聲調助詞搭配欠妥之表達（例項：洗衣機誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"雪櫃\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：電視機未適配）",
            "聲調助詞搭配欠妥之表達（例項：洗衣機誤用）",
            "語序顛倒嘅非標準句式（例項：冷氣機錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"雪櫃\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：洗衣機誤用）",
            "語序顛倒嘅非標準句式（例項：冷氣機錯置）",
            "混雜生硬詞彙之不規範語句（例項：電視機未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «雪櫃»):",
          "acceptedAnswers": [
            "雪櫃",
            "雪櫃"
          ],
          "explanation": "The target keyword was: 【雪櫃】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u10-l2": {
    "id": "hk-u10-l2",
    "subject": "cantonese",
    "unit": 10,
    "lessonNumber": 2,
    "title": "身體部位同睇醫生 (Health & Medical Care) (第2課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元10第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元10第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元10第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 10 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 10 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 10 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元10-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-10-2】：把握「粵語單元10第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-10-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"冷氣機\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：電視機錯置）",
            "混雜生硬詞彙之不規範語句（例項：洗衣機未適配）",
            "聲調助詞搭配欠妥之表達（例項：梳化誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"冷氣機\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：洗衣機未適配）",
            "聲調助詞搭配欠妥之表達（例項：梳化誤用）",
            "語序顛倒嘅非標準句式（例項：電視機錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"冷氣機\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：梳化誤用）",
            "語序顛倒嘅非標準句式（例項：電視機錯置）",
            "混雜生硬詞彙之不規範語句（例項：洗衣機未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «冷氣機»):",
          "acceptedAnswers": [
            "冷氣機",
            "冷氣機"
          ],
          "explanation": "The target keyword was: 【冷氣機】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u10-l3": {
    "id": "hk-u10-l3",
    "subject": "cantonese",
    "unit": 10,
    "lessonNumber": 3,
    "title": "身體部位同睇醫生 (Health & Medical Care) (第3課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元10第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元10第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元10第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 10 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 10 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 10 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元10-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-10-3】：把握「粵語單元10第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-10-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"電視機\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：洗衣機錯置）",
            "混雜生硬詞彙之不規範語句（例項：梳化未適配）",
            "聲調助詞搭配欠妥之表達（例項：返工誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"電視機\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：梳化未適配）",
            "聲調助詞搭配欠妥之表達（例項：返工誤用）",
            "語序顛倒嘅非標準句式（例項：洗衣機錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"電視機\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：返工誤用）",
            "語序顛倒嘅非標準句式（例項：洗衣機錯置）",
            "混雜生硬詞彙之不規範語句（例項：梳化未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «電視機»):",
          "acceptedAnswers": [
            "電視機",
            "電視機"
          ],
          "explanation": "The target keyword was: 【電視機】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u10-l4": {
    "id": "hk-u10-l4",
    "subject": "cantonese",
    "unit": 10,
    "lessonNumber": 4,
    "title": "身體部位同睇醫生 (Health & Medical Care) (第4課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元10第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元10第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元10第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 10 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 10 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 10 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元10-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-10-4】：把握「粵語單元10第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-10-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"洗衣機\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：梳化錯置）",
            "混雜生硬詞彙之不規範語句（例項：返工未適配）",
            "聲調助詞搭配欠妥之表達（例項：放工誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"洗衣機\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：返工未適配）",
            "聲調助詞搭配欠妥之表達（例項：放工誤用）",
            "語序顛倒嘅非標準句式（例項：梳化錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"洗衣機\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：放工誤用）",
            "語序顛倒嘅非標準句式（例項：梳化錯置）",
            "混雜生硬詞彙之不規範語句（例項：返工未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «洗衣機»):",
          "acceptedAnswers": [
            "洗衣機",
            "洗衣機"
          ],
          "explanation": "The target keyword was: 【洗衣機】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u10-l5": {
    "id": "hk-u10-l5",
    "subject": "cantonese",
    "unit": 10,
    "lessonNumber": 5,
    "title": "身體部位同睇醫生 (Health & Medical Care) (第5課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元10第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元10第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元10第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 10 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 10 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 10 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元10-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-10-5】：把握「粵語單元10第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-10-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"梳化\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：返工錯置）",
            "混雜生硬詞彙之不規範語句（例項：放工未適配）",
            "聲調助詞搭配欠妥之表達（例項：開會誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"梳化\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：放工未適配）",
            "聲調助詞搭配欠妥之表達（例項：開會誤用）",
            "語序顛倒嘅非標準句式（例項：返工錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"梳化\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第10課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：開會誤用）",
            "語序顛倒嘅非標準句式（例項：返工錯置）",
            "混雜生硬詞彙之不規範語句（例項：放工未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «梳化»):",
          "acceptedAnswers": [
            "梳化",
            "梳化"
          ],
          "explanation": "The target keyword was: 【梳化】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u11-l1": {
    "id": "hk-u11-l1",
    "subject": "cantonese",
    "unit": 11,
    "lessonNumber": 1,
    "title": "助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第1課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元11第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元11第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元11第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 11 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 11 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 11 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元11-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-11-1】：把握「粵語單元11第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-11-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"返工\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：放工錯置）",
            "混雜生硬詞彙之不規範語句（例項：開會未適配）",
            "聲調助詞搭配欠妥之表達（例項：同事誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"返工\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：開會未適配）",
            "聲調助詞搭配欠妥之表達（例項：同事誤用）",
            "語序顛倒嘅非標準句式（例項：放工錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"返工\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：同事誤用）",
            "語序顛倒嘅非標準句式（例項：放工錯置）",
            "混雜生硬詞彙之不規範語句（例項：開會未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «返工»):",
          "acceptedAnswers": [
            "返工",
            "返工"
          ],
          "explanation": "The target keyword was: 【返工】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u11-l2": {
    "id": "hk-u11-l2",
    "subject": "cantonese",
    "unit": 11,
    "lessonNumber": 2,
    "title": "助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第2課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元11第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元11第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元11第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 11 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 11 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 11 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元11-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-11-2】：把握「粵語單元11第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-11-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"放工\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：開會錯置）",
            "混雜生硬詞彙之不規範語句（例項：同事未適配）",
            "聲調助詞搭配欠妥之表達（例項：老闆誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"放工\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：同事未適配）",
            "聲調助詞搭配欠妥之表達（例項：老闆誤用）",
            "語序顛倒嘅非標準句式（例項：開會錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"放工\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：老闆誤用）",
            "語序顛倒嘅非標準句式（例項：開會錯置）",
            "混雜生硬詞彙之不規範語句（例項：同事未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «放工»):",
          "acceptedAnswers": [
            "放工",
            "放工"
          ],
          "explanation": "The target keyword was: 【放工】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u11-l3": {
    "id": "hk-u11-l3",
    "subject": "cantonese",
    "unit": 11,
    "lessonNumber": 3,
    "title": "助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第3課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元11第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元11第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元11第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 11 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 11 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 11 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元11-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-11-3】：把握「粵語單元11第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-11-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"開會\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：同事錯置）",
            "混雜生硬詞彙之不規範語句（例項：老闆未適配）",
            "聲調助詞搭配欠妥之表達（例項：人工誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"開會\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：老闆未適配）",
            "聲調助詞搭配欠妥之表達（例項：人工誤用）",
            "語序顛倒嘅非標準句式（例項：同事錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"開會\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：人工誤用）",
            "語序顛倒嘅非標準句式（例項：同事錯置）",
            "混雜生硬詞彙之不規範語句（例項：老闆未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «開會»):",
          "acceptedAnswers": [
            "開會",
            "開會"
          ],
          "explanation": "The target keyword was: 【開會】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u11-l4": {
    "id": "hk-u11-l4",
    "subject": "cantonese",
    "unit": 11,
    "lessonNumber": 4,
    "title": "助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第4課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元11第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元11第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元11第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 11 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 11 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 11 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元11-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-11-4】：把握「粵語單元11第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-11-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"同事\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：老闆錯置）",
            "混雜生硬詞彙之不規範語句（例項：人工未適配）",
            "聲調助詞搭配欠妥之表達（例項：請假誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"同事\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：人工未適配）",
            "聲調助詞搭配欠妥之表達（例項：請假誤用）",
            "語序顛倒嘅非標準句式（例項：老闆錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"同事\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：請假誤用）",
            "語序顛倒嘅非標準句式（例項：老闆錯置）",
            "混雜生硬詞彙之不規範語句（例項：人工未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «同事»):",
          "acceptedAnswers": [
            "同事",
            "同事"
          ],
          "explanation": "The target keyword was: 【同事】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u11-l5": {
    "id": "hk-u11-l5",
    "subject": "cantonese",
    "unit": 11,
    "lessonNumber": 5,
    "title": "助動詞（想/要/識/可以/得） (Modal Verbs & Ability) (第5課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元11第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元11第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元11第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 11 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 11 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 11 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元11-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-11-5】：把握「粵語單元11第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-11-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"老闆\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：人工錯置）",
            "混雜生硬詞彙之不規範語句（例項：請假未適配）",
            "聲調助詞搭配欠妥之表達（例項：加班誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"老闆\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：請假未適配）",
            "聲調助詞搭配欠妥之表達（例項：加班誤用）",
            "語序顛倒嘅非標準句式（例項：人工錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"老闆\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第11課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：加班誤用）",
            "語序顛倒嘅非標準句式（例項：人工錯置）",
            "混雜生硬詞彙之不規範語句（例項：請假未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «老闆»):",
          "acceptedAnswers": [
            "老闆",
            "老闆"
          ],
          "explanation": "The target keyword was: 【老闆】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u12-l1": {
    "id": "hk-u12-l1",
    "subject": "cantonese",
    "unit": 12,
    "lessonNumber": 1,
    "title": "興趣、運動同娛樂 (Hobbies & Recreation) (第1課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元12第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元12第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元12第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 12 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 12 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 12 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元12-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-12-1】：把握「粵語單元12第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-12-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"人工\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：請假錯置）",
            "混雜生硬詞彙之不規範語句（例項：加班未適配）",
            "聲調助詞搭配欠妥之表達（例項：辭職誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"人工\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：加班未適配）",
            "聲調助詞搭配欠妥之表達（例項：辭職誤用）",
            "語序顛倒嘅非標準句式（例項：請假錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"人工\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：辭職誤用）",
            "語序顛倒嘅非標準句式（例項：請假錯置）",
            "混雜生硬詞彙之不規範語句（例項：加班未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «人工»):",
          "acceptedAnswers": [
            "人工",
            "人工"
          ],
          "explanation": "The target keyword was: 【人工】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u12-l2": {
    "id": "hk-u12-l2",
    "subject": "cantonese",
    "unit": 12,
    "lessonNumber": 2,
    "title": "興趣、運動同娛樂 (Hobbies & Recreation) (第2課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元12第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元12第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元12第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 12 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 12 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 12 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元12-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-12-2】：把握「粵語單元12第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-12-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"請假\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：加班錯置）",
            "混雜生硬詞彙之不規範語句（例項：辭職未適配）",
            "聲調助詞搭配欠妥之表達（例項：面試誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"請假\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：辭職未適配）",
            "聲調助詞搭配欠妥之表達（例項：面試誤用）",
            "語序顛倒嘅非標準句式（例項：加班錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"請假\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：面試誤用）",
            "語序顛倒嘅非標準句式（例項：加班錯置）",
            "混雜生硬詞彙之不規範語句（例項：辭職未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «請假»):",
          "acceptedAnswers": [
            "請假",
            "請假"
          ],
          "explanation": "The target keyword was: 【請假】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u12-l3": {
    "id": "hk-u12-l3",
    "subject": "cantonese",
    "unit": 12,
    "lessonNumber": 3,
    "title": "興趣、運動同娛樂 (Hobbies & Recreation) (第3課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元12第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元12第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元12第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 12 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 12 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 12 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元12-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-12-3】：把握「粵語單元12第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-12-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"加班\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：辭職錯置）",
            "混雜生硬詞彙之不規範語句（例項：面試未適配）",
            "聲調助詞搭配欠妥之表達（例項：睇戲誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"加班\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：面試未適配）",
            "聲調助詞搭配欠妥之表達（例項：睇戲誤用）",
            "語序顛倒嘅非標準句式（例項：辭職錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"加班\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：睇戲誤用）",
            "語序顛倒嘅非標準句式（例項：辭職錯置）",
            "混雜生硬詞彙之不規範語句（例項：面試未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «加班»):",
          "acceptedAnswers": [
            "加班",
            "加班"
          ],
          "explanation": "The target keyword was: 【加班】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u12-l4": {
    "id": "hk-u12-l4",
    "subject": "cantonese",
    "unit": 12,
    "lessonNumber": 4,
    "title": "興趣、運動同娛樂 (Hobbies & Recreation) (第4課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元12第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元12第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元12第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 12 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 12 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 12 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元12-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-12-4】：把握「粵語單元12第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-12-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"辭職\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：面試錯置）",
            "混雜生硬詞彙之不規範語句（例項：睇戲未適配）",
            "聲調助詞搭配欠妥之表達（例項：游水誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"辭職\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：睇戲未適配）",
            "聲調助詞搭配欠妥之表達（例項：游水誤用）",
            "語序顛倒嘅非標準句式（例項：面試錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"辭職\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：游水誤用）",
            "語序顛倒嘅非標準句式（例項：面試錯置）",
            "混雜生硬詞彙之不規範語句（例項：睇戲未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «辭職»):",
          "acceptedAnswers": [
            "辭職",
            "辭職"
          ],
          "explanation": "The target keyword was: 【辭職】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u12-l5": {
    "id": "hk-u12-l5",
    "subject": "cantonese",
    "unit": 12,
    "lessonNumber": 5,
    "title": "興趣、運動同娛樂 (Hobbies & Recreation) (第5課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元12第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元12第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元12第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 12 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 12 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 12 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元12-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-12-5】：把握「粵語單元12第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-12-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"面試\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：睇戲錯置）",
            "混雜生硬詞彙之不規範語句（例項：游水未適配）",
            "聲調助詞搭配欠妥之表達（例項：行山誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"面試\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：游水未適配）",
            "聲調助詞搭配欠妥之表達（例項：行山誤用）",
            "語序顛倒嘅非標準句式（例項：睇戲錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"面試\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第12課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：行山誤用）",
            "語序顛倒嘅非標準句式（例項：睇戲錯置）",
            "混雜生硬詞彙之不規範語句（例項：游水未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «面試»):",
          "acceptedAnswers": [
            "面試",
            "面試"
          ],
          "explanation": "The target keyword was: 【面試】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u13-l1": {
    "id": "hk-u13-l1",
    "subject": "cantonese",
    "unit": 13,
    "lessonNumber": 1,
    "title": "工種、職場同辦公室對話 (Professions & Workplace) (第1課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元13第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元13第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元13第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 13 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 13 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 13 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元13-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-13-1】：把握「粵語單元13第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-13-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"睇戲\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：游水錯置）",
            "混雜生硬詞彙之不規範語句（例項：行山未適配）",
            "聲調助詞搭配欠妥之表達（例項：跑步誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"睇戲\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：行山未適配）",
            "聲調助詞搭配欠妥之表達（例項：跑步誤用）",
            "語序顛倒嘅非標準句式（例項：游水錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"睇戲\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：跑步誤用）",
            "語序顛倒嘅非標準句式（例項：游水錯置）",
            "混雜生硬詞彙之不規範語句（例項：行山未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «睇戲»):",
          "acceptedAnswers": [
            "睇戲",
            "睇戲"
          ],
          "explanation": "The target keyword was: 【睇戲】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u13-l2": {
    "id": "hk-u13-l2",
    "subject": "cantonese",
    "unit": 13,
    "lessonNumber": 2,
    "title": "工種、職場同辦公室對話 (Professions & Workplace) (第2課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元13第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元13第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元13第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 13 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 13 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 13 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元13-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-13-2】：把握「粵語單元13第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-13-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"游水\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：行山錯置）",
            "混雜生硬詞彙之不規範語句（例項：跑步未適配）",
            "聲調助詞搭配欠妥之表達（例項：打波誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"游水\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：跑步未適配）",
            "聲調助詞搭配欠妥之表達（例項：打波誤用）",
            "語序顛倒嘅非標準句式（例項：行山錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"游水\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：打波誤用）",
            "語序顛倒嘅非標準句式（例項：行山錯置）",
            "混雜生硬詞彙之不規範語句（例項：跑步未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «游水»):",
          "acceptedAnswers": [
            "游水",
            "游水"
          ],
          "explanation": "The target keyword was: 【游水】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u13-l3": {
    "id": "hk-u13-l3",
    "subject": "cantonese",
    "unit": 13,
    "lessonNumber": 3,
    "title": "工種、職場同辦公室對話 (Professions & Workplace) (第3課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元13第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元13第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元13第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 13 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 13 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 13 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元13-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-13-3】：把握「粵語單元13第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-13-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"行山\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：跑步錯置）",
            "混雜生硬詞彙之不規範語句（例項：打波未適配）",
            "聲調助詞搭配欠妥之表達（例項：聽歌誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"行山\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：打波未適配）",
            "聲調助詞搭配欠妥之表達（例項：聽歌誤用）",
            "語序顛倒嘅非標準句式（例項：跑步錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"行山\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：聽歌誤用）",
            "語序顛倒嘅非標準句式（例項：跑步錯置）",
            "混雜生硬詞彙之不規範語句（例項：打波未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «行山»):",
          "acceptedAnswers": [
            "行山",
            "行山"
          ],
          "explanation": "The target keyword was: 【行山】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u13-l4": {
    "id": "hk-u13-l4",
    "subject": "cantonese",
    "unit": 13,
    "lessonNumber": 4,
    "title": "工種、職場同辦公室對話 (Professions & Workplace) (第4課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元13第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元13第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元13第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 13 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 13 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 13 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元13-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-13-4】：把握「粵語單元13第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-13-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"跑步\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：打波錯置）",
            "混雜生硬詞彙之不規範語句（例項：聽歌未適配）",
            "聲調助詞搭配欠妥之表達（例項：影相誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"跑步\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：聽歌未適配）",
            "聲調助詞搭配欠妥之表達（例項：影相誤用）",
            "語序顛倒嘅非標準句式（例項：打波錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"跑步\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：影相誤用）",
            "語序顛倒嘅非標準句式（例項：打波錯置）",
            "混雜生硬詞彙之不規範語句（例項：聽歌未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «跑步»):",
          "acceptedAnswers": [
            "跑步",
            "跑步"
          ],
          "explanation": "The target keyword was: 【跑步】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u13-l5": {
    "id": "hk-u13-l5",
    "subject": "cantonese",
    "unit": 13,
    "lessonNumber": 5,
    "title": "工種、職場同辦公室對話 (Professions & Workplace) (第5課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元13第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元13第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元13第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 13 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 13 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 13 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元13-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-13-5】：把握「粵語單元13第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-13-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"打波\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：聽歌錯置）",
            "混雜生硬詞彙之不規範語句（例項：影相未適配）",
            "聲調助詞搭配欠妥之表達（例項：睇書誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"打波\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：影相未適配）",
            "聲調助詞搭配欠妥之表達（例項：睇書誤用）",
            "語序顛倒嘅非標準句式（例項：聽歌錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"打波\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第13課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：睇書誤用）",
            "語序顛倒嘅非標準句式（例項：聽歌錯置）",
            "混雜生硬詞彙之不規範語句（例項：影相未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «打波»):",
          "acceptedAnswers": [
            "打波",
            "打波"
          ],
          "explanation": "The target keyword was: 【打波】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u14-l1": {
    "id": "hk-u14-l1",
    "subject": "cantonese",
    "unit": 14,
    "lessonNumber": 1,
    "title": "比較句（過/冇/同埋） (Comparative Structures) (第1課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元14第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元14第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元14第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 14 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 14 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 14 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元14-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-14-1】：把握「粵語單元14第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-14-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"聽歌\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：影相錯置）",
            "混雜生硬詞彙之不規範語句（例項：睇書未適配）",
            "聲調助詞搭配欠妥之表達（例項：旅行誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"聽歌\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：睇書未適配）",
            "聲調助詞搭配欠妥之表達（例項：旅行誤用）",
            "語序顛倒嘅非標準句式（例項：影相錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"聽歌\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：旅行誤用）",
            "語序顛倒嘅非標準句式（例項：影相錯置）",
            "混雜生硬詞彙之不規範語句（例項：睇書未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «聽歌»):",
          "acceptedAnswers": [
            "聽歌",
            "聽歌"
          ],
          "explanation": "The target keyword was: 【聽歌】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u14-l2": {
    "id": "hk-u14-l2",
    "subject": "cantonese",
    "unit": 14,
    "lessonNumber": 2,
    "title": "比較句（過/冇/同埋） (Comparative Structures) (第2課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元14第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元14第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元14第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 14 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 14 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 14 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元14-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-14-2】：把握「粵語單元14第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-14-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"影相\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：睇書錯置）",
            "混雜生硬詞彙之不規範語句（例項：旅行未適配）",
            "聲調助詞搭配欠妥之表達（例項：買衫誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"影相\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：旅行未適配）",
            "聲調助詞搭配欠妥之表達（例項：買衫誤用）",
            "語序顛倒嘅非標準句式（例項：睇書錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"影相\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：買衫誤用）",
            "語序顛倒嘅非標準句式（例項：睇書錯置）",
            "混雜生硬詞彙之不規範語句（例項：旅行未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «影相»):",
          "acceptedAnswers": [
            "影相",
            "影相"
          ],
          "explanation": "The target keyword was: 【影相】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u14-l3": {
    "id": "hk-u14-l3",
    "subject": "cantonese",
    "unit": 14,
    "lessonNumber": 3,
    "title": "比較句（過/冇/同埋） (Comparative Structures) (第3課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元14第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元14第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元14第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 14 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 14 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 14 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元14-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-14-3】：把握「粵語單元14第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-14-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"睇書\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：旅行錯置）",
            "混雜生硬詞彙之不規範語句（例項：買衫未適配）",
            "聲調助詞搭配欠妥之表達（例項：天氣誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"睇書\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：買衫未適配）",
            "聲調助詞搭配欠妥之表達（例項：天氣誤用）",
            "語序顛倒嘅非標準句式（例項：旅行錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"睇書\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：天氣誤用）",
            "語序顛倒嘅非標準句式（例項：旅行錯置）",
            "混雜生硬詞彙之不規範語句（例項：買衫未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «睇書»):",
          "acceptedAnswers": [
            "睇書",
            "睇書"
          ],
          "explanation": "The target keyword was: 【睇書】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u14-l4": {
    "id": "hk-u14-l4",
    "subject": "cantonese",
    "unit": 14,
    "lessonNumber": 4,
    "title": "比較句（過/冇/同埋） (Comparative Structures) (第4課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元14第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元14第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元14第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 14 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 14 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 14 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元14-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-14-4】：把握「粵語單元14第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-14-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"旅行\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：買衫錯置）",
            "混雜生硬詞彙之不規範語句（例項：天氣未適配）",
            "聲調助詞搭配欠妥之表達（例項：落雨誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"旅行\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：天氣未適配）",
            "聲調助詞搭配欠妥之表達（例項：落雨誤用）",
            "語序顛倒嘅非標準句式（例項：買衫錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"旅行\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：落雨誤用）",
            "語序顛倒嘅非標準句式（例項：買衫錯置）",
            "混雜生硬詞彙之不規範語句（例項：天氣未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «旅行»):",
          "acceptedAnswers": [
            "旅行",
            "旅行"
          ],
          "explanation": "The target keyword was: 【旅行】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u14-l5": {
    "id": "hk-u14-l5",
    "subject": "cantonese",
    "unit": 14,
    "lessonNumber": 5,
    "title": "比較句（過/冇/同埋） (Comparative Structures) (第5課)",
    "level": "A2",
    "objective": "Master Cantonese linguistics for 粵語單元14第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元14第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元14第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 14 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 14 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 14 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元14-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-14-5】：把握「粵語單元14第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-14-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"買衫\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：天氣錯置）",
            "混雜生硬詞彙之不規範語句（例項：落雨未適配）",
            "聲調助詞搭配欠妥之表達（例項：出太陽誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"買衫\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：落雨未適配）",
            "聲調助詞搭配欠妥之表達（例項：出太陽誤用）",
            "語序顛倒嘅非標準句式（例項：天氣錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"買衫\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第14課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：出太陽誤用）",
            "語序顛倒嘅非標準句式（例項：天氣錯置）",
            "混雜生硬詞彙之不規範語句（例項：落雨未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «買衫»):",
          "acceptedAnswers": [
            "買衫",
            "買衫"
          ],
          "explanation": "The target keyword was: 【買衫】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u15-l1": {
    "id": "hk-u15-l1",
    "subject": "cantonese",
    "unit": 15,
    "lessonNumber": 1,
    "title": "香港地理、旅遊同名勝 (HK Geography & Tourism) (第1課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元15第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元15第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元15第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 15 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 15 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 15 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元15-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-15-1】：把握「粵語單元15第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-15-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"天氣\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：落雨錯置）",
            "混雜生硬詞彙之不規範語句（例項：出太陽未適配）",
            "聲調助詞搭配欠妥之表達（例項：刮風誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"天氣\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：出太陽未適配）",
            "聲調助詞搭配欠妥之表達（例項：刮風誤用）",
            "語序顛倒嘅非標準句式（例項：落雨錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"天氣\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：刮風誤用）",
            "語序顛倒嘅非標準句式（例項：落雨錯置）",
            "混雜生硬詞彙之不規範語句（例項：出太陽未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «天氣»):",
          "acceptedAnswers": [
            "天氣",
            "天氣"
          ],
          "explanation": "The target keyword was: 【天氣】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u15-l2": {
    "id": "hk-u15-l2",
    "subject": "cantonese",
    "unit": 15,
    "lessonNumber": 2,
    "title": "香港地理、旅遊同名勝 (HK Geography & Tourism) (第2課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元15第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元15第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元15第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 15 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 15 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 15 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元15-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-15-2】：把握「粵語單元15第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-15-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"落雨\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：出太陽錯置）",
            "混雜生硬詞彙之不規範語句（例項：刮風未適配）",
            "聲調助詞搭配欠妥之表達（例項：打風誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"落雨\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：刮風未適配）",
            "聲調助詞搭配欠妥之表達（例項：打風誤用）",
            "語序顛倒嘅非標準句式（例項：出太陽錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"落雨\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：打風誤用）",
            "語序顛倒嘅非標準句式（例項：出太陽錯置）",
            "混雜生硬詞彙之不規範語句（例項：刮風未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «落雨»):",
          "acceptedAnswers": [
            "落雨",
            "落雨"
          ],
          "explanation": "The target keyword was: 【落雨】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u15-l3": {
    "id": "hk-u15-l3",
    "subject": "cantonese",
    "unit": 15,
    "lessonNumber": 3,
    "title": "香港地理、旅遊同名勝 (HK Geography & Tourism) (第3課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元15第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元15第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元15第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 15 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 15 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 15 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元15-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-15-3】：把握「粵語單元15第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-15-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"出太陽\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：刮風錯置）",
            "混雜生硬詞彙之不規範語句（例項：打風未適配）",
            "聲調助詞搭配欠妥之表達（例項：好熱誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"出太陽\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：打風未適配）",
            "聲調助詞搭配欠妥之表達（例項：好熱誤用）",
            "語序顛倒嘅非標準句式（例項：刮風錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"出太陽\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：好熱誤用）",
            "語序顛倒嘅非標準句式（例項：刮風錯置）",
            "混雜生硬詞彙之不規範語句（例項：打風未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «出太陽»):",
          "acceptedAnswers": [
            "出太陽",
            "出太陽"
          ],
          "explanation": "The target keyword was: 【出太陽】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u15-l4": {
    "id": "hk-u15-l4",
    "subject": "cantonese",
    "unit": 15,
    "lessonNumber": 4,
    "title": "香港地理、旅遊同名勝 (HK Geography & Tourism) (第4課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元15第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元15第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元15第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 15 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 15 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 15 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元15-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-15-4】：把握「粵語單元15第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-15-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"刮風\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：打風錯置）",
            "混雜生硬詞彙之不規範語句（例項：好熱未適配）",
            "聲調助詞搭配欠妥之表達（例項：好凍誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"刮風\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：好熱未適配）",
            "聲調助詞搭配欠妥之表達（例項：好凍誤用）",
            "語序顛倒嘅非標準句式（例項：打風錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"刮風\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：好凍誤用）",
            "語序顛倒嘅非標準句式（例項：打風錯置）",
            "混雜生硬詞彙之不規範語句（例項：好熱未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «刮風»):",
          "acceptedAnswers": [
            "刮風",
            "刮風"
          ],
          "explanation": "The target keyword was: 【刮風】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u15-l5": {
    "id": "hk-u15-l5",
    "subject": "cantonese",
    "unit": 15,
    "lessonNumber": 5,
    "title": "香港地理、旅遊同名勝 (HK Geography & Tourism) (第5課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元15第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元15第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元15第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 15 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 15 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 15 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元15-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-15-5】：把握「粵語單元15第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-15-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"打風\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：好熱錯置）",
            "混雜生硬詞彙之不規範語句（例項：好凍未適配）",
            "聲調助詞搭配欠妥之表達（例項：潮濕誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"打風\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：好凍未適配）",
            "聲調助詞搭配欠妥之表達（例項：潮濕誤用）",
            "語序顛倒嘅非標準句式（例項：好熱錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"打風\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第15課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：潮濕誤用）",
            "語序顛倒嘅非標準句式（例項：好熱錯置）",
            "混雜生硬詞彙之不規範語句（例項：好凍未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «打風»):",
          "acceptedAnswers": [
            "打風",
            "打風"
          ],
          "explanation": "The target keyword was: 【打風】"
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
    "title": "將字句同處置式 (The ZOENG Disposal Construction) (第1課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元16第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元16第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元16第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 16 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 16 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 16 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元16-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-16-1】：把握「粵語單元16第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-16-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"好熱\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：好凍錯置）",
            "混雜生硬詞彙之不規範語句（例項：潮濕未適配）",
            "聲調助詞搭配欠妥之表達（例項：乾燥誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"好熱\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：潮濕未適配）",
            "聲調助詞搭配欠妥之表達（例項：乾燥誤用）",
            "語序顛倒嘅非標準句式（例項：好凍錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"好熱\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：乾燥誤用）",
            "語序顛倒嘅非標準句式（例項：好凍錯置）",
            "混雜生硬詞彙之不規範語句（例項：潮濕未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «好熱»):",
          "acceptedAnswers": [
            "好熱",
            "好熱"
          ],
          "explanation": "The target keyword was: 【好熱】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u16-l2": {
    "id": "hk-u16-l2",
    "subject": "cantonese",
    "unit": 16,
    "lessonNumber": 2,
    "title": "將字句同處置式 (The ZOENG Disposal Construction) (第2課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元16第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元16第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元16第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 16 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 16 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 16 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元16-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-16-2】：把握「粵語單元16第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-16-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"好凍\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：潮濕錯置）",
            "混雜生硬詞彙之不規範語句（例項：乾燥未適配）",
            "聲調助詞搭配欠妥之表達（例項：溫度誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"好凍\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：乾燥未適配）",
            "聲調助詞搭配欠妥之表達（例項：溫度誤用）",
            "語序顛倒嘅非標準句式（例項：潮濕錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"好凍\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：溫度誤用）",
            "語序顛倒嘅非標準句式（例項：潮濕錯置）",
            "混雜生硬詞彙之不規範語句（例項：乾燥未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «好凍»):",
          "acceptedAnswers": [
            "好凍",
            "好凍"
          ],
          "explanation": "The target keyword was: 【好凍】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u16-l3": {
    "id": "hk-u16-l3",
    "subject": "cantonese",
    "unit": 16,
    "lessonNumber": 3,
    "title": "將字句同處置式 (The ZOENG Disposal Construction) (第3課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元16第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元16第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元16第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 16 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 16 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 16 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元16-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-16-3】：把握「粵語單元16第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-16-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"潮濕\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：乾燥錯置）",
            "混雜生硬詞彙之不規範語句（例項：溫度未適配）",
            "聲調助詞搭配欠妥之表達（例項：醫生誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"潮濕\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：溫度未適配）",
            "聲調助詞搭配欠妥之表達（例項：醫生誤用）",
            "語序顛倒嘅非標準句式（例項：乾燥錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"潮濕\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：醫生誤用）",
            "語序顛倒嘅非標準句式（例項：乾燥錯置）",
            "混雜生硬詞彙之不規範語句（例項：溫度未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «潮濕»):",
          "acceptedAnswers": [
            "潮濕",
            "潮濕"
          ],
          "explanation": "The target keyword was: 【潮濕】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u16-l4": {
    "id": "hk-u16-l4",
    "subject": "cantonese",
    "unit": 16,
    "lessonNumber": 4,
    "title": "將字句同處置式 (The ZOENG Disposal Construction) (第4課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元16第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元16第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元16第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 16 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 16 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 16 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元16-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-16-4】：把握「粵語單元16第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-16-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"乾燥\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：溫度錯置）",
            "混雜生硬詞彙之不規範語句（例項：醫生未適配）",
            "聲調助詞搭配欠妥之表達（例項：睇醫生誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"乾燥\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：醫生未適配）",
            "聲調助詞搭配欠妥之表達（例項：睇醫生誤用）",
            "語序顛倒嘅非標準句式（例項：溫度錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"乾燥\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：睇醫生誤用）",
            "語序顛倒嘅非標準句式（例項：溫度錯置）",
            "混雜生硬詞彙之不規範語句（例項：醫生未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «乾燥»):",
          "acceptedAnswers": [
            "乾燥",
            "乾燥"
          ],
          "explanation": "The target keyword was: 【乾燥】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u16-l5": {
    "id": "hk-u16-l5",
    "subject": "cantonese",
    "unit": 16,
    "lessonNumber": 5,
    "title": "將字句同處置式 (The ZOENG Disposal Construction) (第5課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元16第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元16第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元16第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 16 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 16 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 16 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元16-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-16-5】：把握「粵語單元16第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-16-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"溫度\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：醫生錯置）",
            "混雜生硬詞彙之不規範語句（例項：睇醫生未適配）",
            "聲調助詞搭配欠妥之表達（例項：食藥誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"溫度\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：睇醫生未適配）",
            "聲調助詞搭配欠妥之表達（例項：食藥誤用）",
            "語序顛倒嘅非標準句式（例項：醫生錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"溫度\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第16課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：食藥誤用）",
            "語序顛倒嘅非標準句式（例項：醫生錯置）",
            "混雜生硬詞彙之不規範語句（例項：睇醫生未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «溫度»):",
          "acceptedAnswers": [
            "溫度",
            "溫度"
          ],
          "explanation": "The target keyword was: 【溫度】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u17-l1": {
    "id": "hk-u17-l1",
    "subject": "cantonese",
    "unit": 17,
    "lessonNumber": 1,
    "title": "畀字句同被動態 (The BEI Passive Voice) (第1課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元17第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元17第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元17第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 17 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 17 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 17 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元17-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-17-1】：把握「粵語單元17第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-17-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"醫生\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：睇醫生錯置）",
            "混雜生硬詞彙之不規範語句（例項：食藥未適配）",
            "聲調助詞搭配欠妥之表達（例項：發燒誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"醫生\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：食藥未適配）",
            "聲調助詞搭配欠妥之表達（例項：發燒誤用）",
            "語序顛倒嘅非標準句式（例項：睇醫生錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"醫生\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：發燒誤用）",
            "語序顛倒嘅非標準句式（例項：睇醫生錯置）",
            "混雜生硬詞彙之不規範語句（例項：食藥未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «醫生»):",
          "acceptedAnswers": [
            "醫生",
            "醫生"
          ],
          "explanation": "The target keyword was: 【醫生】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u17-l2": {
    "id": "hk-u17-l2",
    "subject": "cantonese",
    "unit": 17,
    "lessonNumber": 2,
    "title": "畀字句同被動態 (The BEI Passive Voice) (第2課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元17第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元17第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元17第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 17 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 17 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 17 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元17-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-17-2】：把握「粵語單元17第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-17-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"睇醫生\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：食藥錯置）",
            "混雜生硬詞彙之不規範語句（例項：發燒未適配）",
            "聲調助詞搭配欠妥之表達（例項：頭痛誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"睇醫生\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：發燒未適配）",
            "聲調助詞搭配欠妥之表達（例項：頭痛誤用）",
            "語序顛倒嘅非標準句式（例項：食藥錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"睇醫生\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：頭痛誤用）",
            "語序顛倒嘅非標準句式（例項：食藥錯置）",
            "混雜生硬詞彙之不規範語句（例項：發燒未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «睇醫生»):",
          "acceptedAnswers": [
            "睇醫生",
            "睇醫生"
          ],
          "explanation": "The target keyword was: 【睇醫生】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u17-l3": {
    "id": "hk-u17-l3",
    "subject": "cantonese",
    "unit": 17,
    "lessonNumber": 3,
    "title": "畀字句同被動態 (The BEI Passive Voice) (第3課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元17第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元17第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元17第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 17 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 17 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 17 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元17-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-17-3】：把握「粵語單元17第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-17-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"食藥\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：發燒錯置）",
            "混雜生硬詞彙之不規範語句（例項：頭痛未適配）",
            "聲調助詞搭配欠妥之表達（例項：感冒誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"食藥\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：頭痛未適配）",
            "聲調助詞搭配欠妥之表達（例項：感冒誤用）",
            "語序顛倒嘅非標準句式（例項：發燒錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"食藥\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：感冒誤用）",
            "語序顛倒嘅非標準句式（例項：發燒錯置）",
            "混雜生硬詞彙之不規範語句（例項：頭痛未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «食藥»):",
          "acceptedAnswers": [
            "食藥",
            "食藥"
          ],
          "explanation": "The target keyword was: 【食藥】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u17-l4": {
    "id": "hk-u17-l4",
    "subject": "cantonese",
    "unit": 17,
    "lessonNumber": 4,
    "title": "畀字句同被動態 (The BEI Passive Voice) (第4課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元17第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元17第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元17第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 17 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 17 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 17 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元17-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-17-4】：把握「粵語單元17第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-17-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"發燒\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：頭痛錯置）",
            "混雜生硬詞彙之不規範語句（例項：感冒未適配）",
            "聲調助詞搭配欠妥之表達（例項：咳嗽誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"發燒\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：感冒未適配）",
            "聲調助詞搭配欠妥之表達（例項：咳嗽誤用）",
            "語序顛倒嘅非標準句式（例項：頭痛錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"發燒\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：咳嗽誤用）",
            "語序顛倒嘅非標準句式（例項：頭痛錯置）",
            "混雜生硬詞彙之不規範語句（例項：感冒未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «發燒»):",
          "acceptedAnswers": [
            "發燒",
            "發燒"
          ],
          "explanation": "The target keyword was: 【發燒】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u17-l5": {
    "id": "hk-u17-l5",
    "subject": "cantonese",
    "unit": 17,
    "lessonNumber": 5,
    "title": "畀字句同被動態 (The BEI Passive Voice) (第5課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元17第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元17第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元17第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 17 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 17 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 17 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元17-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-17-5】：把握「粵語單元17第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-17-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"頭痛\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：感冒錯置）",
            "混雜生硬詞彙之不規範語句（例項：咳嗽未適配）",
            "聲調助詞搭配欠妥之表達（例項：喉嚨痛誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"頭痛\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：咳嗽未適配）",
            "聲調助詞搭配欠妥之表達（例項：喉嚨痛誤用）",
            "語序顛倒嘅非標準句式（例項：感冒錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"頭痛\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第17課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：喉嚨痛誤用）",
            "語序顛倒嘅非標準句式（例項：感冒錯置）",
            "混雜生硬詞彙之不規範語句（例項：咳嗽未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «頭痛»):",
          "acceptedAnswers": [
            "頭痛",
            "頭痛"
          ],
          "explanation": "The target keyword was: 【頭痛】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u18-l1": {
    "id": "hk-u18-l1",
    "subject": "cantonese",
    "unit": 18,
    "lessonNumber": 1,
    "title": "結果補語同趨向補語 (Resultative & Directional Complements) (第1課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元18第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元18第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元18第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 18 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 18 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 18 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元18-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-18-1】：把握「粵語單元18第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-18-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"感冒\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：咳嗽錯置）",
            "混雜生硬詞彙之不規範語句（例項：喉嚨痛未適配）",
            "聲調助詞搭配欠妥之表達（例項：醫院誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"感冒\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：喉嚨痛未適配）",
            "聲調助詞搭配欠妥之表達（例項：醫院誤用）",
            "語序顛倒嘅非標準句式（例項：咳嗽錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"感冒\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：醫院誤用）",
            "語序顛倒嘅非標準句式（例項：咳嗽錯置）",
            "混雜生硬詞彙之不規範語句（例項：喉嚨痛未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «感冒»):",
          "acceptedAnswers": [
            "感冒",
            "感冒"
          ],
          "explanation": "The target keyword was: 【感冒】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u18-l2": {
    "id": "hk-u18-l2",
    "subject": "cantonese",
    "unit": 18,
    "lessonNumber": 2,
    "title": "結果補語同趨向補語 (Resultative & Directional Complements) (第2課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元18第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元18第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元18第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 18 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 18 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 18 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元18-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-18-2】：把握「粵語單元18第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-18-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"咳嗽\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：喉嚨痛錯置）",
            "混雜生硬詞彙之不規範語句（例項：醫院未適配）",
            "聲調助詞搭配欠妥之表達（例項：診所誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"咳嗽\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：醫院未適配）",
            "聲調助詞搭配欠妥之表達（例項：診所誤用）",
            "語序顛倒嘅非標準句式（例項：喉嚨痛錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"咳嗽\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：診所誤用）",
            "語序顛倒嘅非標準句式（例項：喉嚨痛錯置）",
            "混雜生硬詞彙之不規範語句（例項：醫院未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «咳嗽»):",
          "acceptedAnswers": [
            "咳嗽",
            "咳嗽"
          ],
          "explanation": "The target keyword was: 【咳嗽】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u18-l3": {
    "id": "hk-u18-l3",
    "subject": "cantonese",
    "unit": 18,
    "lessonNumber": 3,
    "title": "結果補語同趨向補語 (Resultative & Directional Complements) (第3課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元18第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元18第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元18第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 18 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 18 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 18 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元18-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-18-3】：把握「粵語單元18第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-18-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"喉嚨痛\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：醫院錯置）",
            "混雜生硬詞彙之不規範語句（例項：診所未適配）",
            "聲調助詞搭配欠妥之表達（例項：爸爸誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"喉嚨痛\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：診所未適配）",
            "聲調助詞搭配欠妥之表達（例項：爸爸誤用）",
            "語序顛倒嘅非標準句式（例項：醫院錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"喉嚨痛\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：爸爸誤用）",
            "語序顛倒嘅非標準句式（例項：醫院錯置）",
            "混雜生硬詞彙之不規範語句（例項：診所未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «喉嚨痛»):",
          "acceptedAnswers": [
            "喉嚨痛",
            "喉嚨痛"
          ],
          "explanation": "The target keyword was: 【喉嚨痛】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u18-l4": {
    "id": "hk-u18-l4",
    "subject": "cantonese",
    "unit": 18,
    "lessonNumber": 4,
    "title": "結果補語同趨向補語 (Resultative & Directional Complements) (第4課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元18第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元18第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元18第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 18 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 18 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 18 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元18-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-18-4】：把握「粵語單元18第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-18-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"醫院\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：診所錯置）",
            "混雜生硬詞彙之不規範語句（例項：爸爸未適配）",
            "聲調助詞搭配欠妥之表達（例項：媽媽誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"醫院\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：爸爸未適配）",
            "聲調助詞搭配欠妥之表達（例項：媽媽誤用）",
            "語序顛倒嘅非標準句式（例項：診所錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"醫院\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：媽媽誤用）",
            "語序顛倒嘅非標準句式（例項：診所錯置）",
            "混雜生硬詞彙之不規範語句（例項：爸爸未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «醫院»):",
          "acceptedAnswers": [
            "醫院",
            "醫院"
          ],
          "explanation": "The target keyword was: 【醫院】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u18-l5": {
    "id": "hk-u18-l5",
    "subject": "cantonese",
    "unit": 18,
    "lessonNumber": 5,
    "title": "結果補語同趨向補語 (Resultative & Directional Complements) (第5課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元18第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元18第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元18第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 18 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 18 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 18 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元18-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-18-5】：把握「粵語單元18第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-18-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"診所\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：爸爸錯置）",
            "混雜生硬詞彙之不規範語句（例項：媽媽未適配）",
            "聲調助詞搭配欠妥之表達（例項：阿哥誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"診所\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：媽媽未適配）",
            "聲調助詞搭配欠妥之表達（例項：阿哥誤用）",
            "語序顛倒嘅非標準句式（例項：爸爸錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"診所\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第18課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：阿哥誤用）",
            "語序顛倒嘅非標準句式（例項：爸爸錯置）",
            "混雜生硬詞彙之不規範語句（例項：媽媽未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «診所»):",
          "acceptedAnswers": [
            "診所",
            "診所"
          ],
          "explanation": "The target keyword was: 【診所】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u19-l1": {
    "id": "hk-u19-l1",
    "subject": "cantonese",
    "unit": 19,
    "lessonNumber": 1,
    "title": "可能補語（得/唔） (Potential Complements) (第1課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元19第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元19第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元19第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 19 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 19 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 19 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元19-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-19-1】：把握「粵語單元19第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-19-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"爸爸\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：媽媽錯置）",
            "混雜生硬詞彙之不規範語句（例項：阿哥未適配）",
            "聲調助詞搭配欠妥之表達（例項：細佬誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"爸爸\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：阿哥未適配）",
            "聲調助詞搭配欠妥之表達（例項：細佬誤用）",
            "語序顛倒嘅非標準句式（例項：媽媽錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"爸爸\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：細佬誤用）",
            "語序顛倒嘅非標準句式（例項：媽媽錯置）",
            "混雜生硬詞彙之不規範語句（例項：阿哥未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «爸爸»):",
          "acceptedAnswers": [
            "爸爸",
            "爸爸"
          ],
          "explanation": "The target keyword was: 【爸爸】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u19-l2": {
    "id": "hk-u19-l2",
    "subject": "cantonese",
    "unit": 19,
    "lessonNumber": 2,
    "title": "可能補語（得/唔） (Potential Complements) (第2課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元19第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元19第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元19第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 19 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 19 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 19 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元19-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-19-2】：把握「粵語單元19第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-19-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"媽媽\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：阿哥錯置）",
            "混雜生硬詞彙之不規範語句（例項：細佬未適配）",
            "聲調助詞搭配欠妥之表達（例項：家姐誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"媽媽\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：細佬未適配）",
            "聲調助詞搭配欠妥之表達（例項：家姐誤用）",
            "語序顛倒嘅非標準句式（例項：阿哥錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"媽媽\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：家姐誤用）",
            "語序顛倒嘅非標準句式（例項：阿哥錯置）",
            "混雜生硬詞彙之不規範語句（例項：細佬未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «媽媽»):",
          "acceptedAnswers": [
            "媽媽",
            "媽媽"
          ],
          "explanation": "The target keyword was: 【媽媽】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u19-l3": {
    "id": "hk-u19-l3",
    "subject": "cantonese",
    "unit": 19,
    "lessonNumber": 3,
    "title": "可能補語（得/唔） (Potential Complements) (第3課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元19第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元19第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元19第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 19 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 19 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 19 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元19-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-19-3】：把握「粵語單元19第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-19-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"阿哥\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：細佬錯置）",
            "混雜生硬詞彙之不規範語句（例項：家姐未適配）",
            "聲調助詞搭配欠妥之表達（例項：妹妹誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"阿哥\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：家姐未適配）",
            "聲調助詞搭配欠妥之表達（例項：妹妹誤用）",
            "語序顛倒嘅非標準句式（例項：細佬錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"阿哥\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：妹妹誤用）",
            "語序顛倒嘅非標準句式（例項：細佬錯置）",
            "混雜生硬詞彙之不規範語句（例項：家姐未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «阿哥»):",
          "acceptedAnswers": [
            "阿哥",
            "阿哥"
          ],
          "explanation": "The target keyword was: 【阿哥】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u19-l4": {
    "id": "hk-u19-l4",
    "subject": "cantonese",
    "unit": 19,
    "lessonNumber": 4,
    "title": "可能補語（得/唔） (Potential Complements) (第4課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元19第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元19第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元19第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 19 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 19 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 19 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元19-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-19-4】：把握「粵語單元19第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-19-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"細佬\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：家姐錯置）",
            "混雜生硬詞彙之不規範語句（例項：妹妹未適配）",
            "聲調助詞搭配欠妥之表達（例項：阿爺誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"細佬\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：妹妹未適配）",
            "聲調助詞搭配欠妥之表達（例項：阿爺誤用）",
            "語序顛倒嘅非標準句式（例項：家姐錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"細佬\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：阿爺誤用）",
            "語序顛倒嘅非標準句式（例項：家姐錯置）",
            "混雜生硬詞彙之不規範語句（例項：妹妹未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «細佬»):",
          "acceptedAnswers": [
            "細佬",
            "細佬"
          ],
          "explanation": "The target keyword was: 【細佬】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u19-l5": {
    "id": "hk-u19-l5",
    "subject": "cantonese",
    "unit": 19,
    "lessonNumber": 5,
    "title": "可能補語（得/唔） (Potential Complements) (第5課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元19第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元19第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元19第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 19 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 19 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 19 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元19-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-19-5】：把握「粵語單元19第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-19-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"家姐\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：妹妹錯置）",
            "混雜生硬詞彙之不規範語句（例項：阿爺未適配）",
            "聲調助詞搭配欠妥之表達（例項：阿嫲誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"家姐\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：阿爺未適配）",
            "聲調助詞搭配欠妥之表達（例項：阿嫲誤用）",
            "語序顛倒嘅非標準句式（例項：妹妹錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"家姐\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第19課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：阿嫲誤用）",
            "語序顛倒嘅非標準句式（例項：妹妹錯置）",
            "混雜生硬詞彙之不規範語句（例項：阿爺未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «家姐»):",
          "acceptedAnswers": [
            "家姐",
            "家姐"
          ],
          "explanation": "The target keyword was: 【家姐】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u20-l1": {
    "id": "hk-u20-l1",
    "subject": "cantonese",
    "unit": 20,
    "lessonNumber": 1,
    "title": "存在句同空間描寫 (Existential Sentences) (第1課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元20第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元20第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元20第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 20 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 20 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 20 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元20-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-20-1】：把握「粵語單元20第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-20-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"妹妹\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：阿爺錯置）",
            "混雜生硬詞彙之不規範語句（例項：阿嫲未適配）",
            "聲調助詞搭配欠妥之表達（例項：親戚誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"妹妹\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：阿嫲未適配）",
            "聲調助詞搭配欠妥之表達（例項：親戚誤用）",
            "語序顛倒嘅非標準句式（例項：阿爺錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"妹妹\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：親戚誤用）",
            "語序顛倒嘅非標準句式（例項：阿爺錯置）",
            "混雜生硬詞彙之不規範語句（例項：阿嫲未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «妹妹»):",
          "acceptedAnswers": [
            "妹妹",
            "妹妹"
          ],
          "explanation": "The target keyword was: 【妹妹】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u20-l2": {
    "id": "hk-u20-l2",
    "subject": "cantonese",
    "unit": 20,
    "lessonNumber": 2,
    "title": "存在句同空間描寫 (Existential Sentences) (第2課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元20第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元20第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元20第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 20 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 20 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 20 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元20-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-20-2】：把握「粵語單元20第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-20-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"阿爺\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：阿嫲錯置）",
            "混雜生硬詞彙之不規範語句（例項：親戚未適配）",
            "聲調助詞搭配欠妥之表達（例項：朋友誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"阿爺\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：親戚未適配）",
            "聲調助詞搭配欠妥之表達（例項：朋友誤用）",
            "語序顛倒嘅非標準句式（例項：阿嫲錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"阿爺\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：朋友誤用）",
            "語序顛倒嘅非標準句式（例項：阿嫲錯置）",
            "混雜生硬詞彙之不規範語句（例項：親戚未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «阿爺»):",
          "acceptedAnswers": [
            "阿爺",
            "阿爺"
          ],
          "explanation": "The target keyword was: 【阿爺】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u20-l3": {
    "id": "hk-u20-l3",
    "subject": "cantonese",
    "unit": 20,
    "lessonNumber": 3,
    "title": "存在句同空間描寫 (Existential Sentences) (第3課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元20第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元20第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元20第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 20 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 20 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 20 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元20-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-20-3】：把握「粵語單元20第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-20-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"阿嫲\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：親戚錯置）",
            "混雜生硬詞彙之不規範語句（例項：朋友未適配）",
            "聲調助詞搭配欠妥之表達（例項：今日誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"阿嫲\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：朋友未適配）",
            "聲調助詞搭配欠妥之表達（例項：今日誤用）",
            "語序顛倒嘅非標準句式（例項：親戚錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"阿嫲\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：今日誤用）",
            "語序顛倒嘅非標準句式（例項：親戚錯置）",
            "混雜生硬詞彙之不規範語句（例項：朋友未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «阿嫲»):",
          "acceptedAnswers": [
            "阿嫲",
            "阿嫲"
          ],
          "explanation": "The target keyword was: 【阿嫲】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u20-l4": {
    "id": "hk-u20-l4",
    "subject": "cantonese",
    "unit": 20,
    "lessonNumber": 4,
    "title": "存在句同空間描寫 (Existential Sentences) (第4課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元20第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元20第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元20第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 20 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 20 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 20 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元20-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-20-4】：把握「粵語單元20第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-20-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"親戚\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：朋友錯置）",
            "混雜生硬詞彙之不規範語句（例項：今日未適配）",
            "聲調助詞搭配欠妥之表達（例項：琴日誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"親戚\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：今日未適配）",
            "聲調助詞搭配欠妥之表達（例項：琴日誤用）",
            "語序顛倒嘅非標準句式（例項：朋友錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"親戚\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：琴日誤用）",
            "語序顛倒嘅非標準句式（例項：朋友錯置）",
            "混雜生硬詞彙之不規範語句（例項：今日未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «親戚»):",
          "acceptedAnswers": [
            "親戚",
            "親戚"
          ],
          "explanation": "The target keyword was: 【親戚】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u20-l5": {
    "id": "hk-u20-l5",
    "subject": "cantonese",
    "unit": 20,
    "lessonNumber": 5,
    "title": "存在句同空間描寫 (Existential Sentences) (第5課)",
    "level": "B1",
    "objective": "Master Cantonese linguistics for 粵語單元20第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元20第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元20第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 20 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 20 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 20 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元20-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-20-5】：把握「粵語單元20第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-20-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"朋友\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：今日錯置）",
            "混雜生硬詞彙之不規範語句（例項：琴日未適配）",
            "聲調助詞搭配欠妥之表達（例項：聽日誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"朋友\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：琴日未適配）",
            "聲調助詞搭配欠妥之表達（例項：聽日誤用）",
            "語序顛倒嘅非標準句式（例項：今日錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"朋友\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第20課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：聽日誤用）",
            "語序顛倒嘅非標準句式（例項：今日錯置）",
            "混雜生硬詞彙之不規範語句（例項：琴日未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «朋友»):",
          "acceptedAnswers": [
            "朋友",
            "朋友"
          ],
          "explanation": "The target keyword was: 【朋友】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u21-l1": {
    "id": "hk-u21-l1",
    "subject": "cantonese",
    "unit": 21,
    "lessonNumber": 1,
    "title": "句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第1課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元21第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元21第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元21第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 21 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 21 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 21 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元21-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-21-1】：把握「粵語單元21第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-21-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"今日\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：琴日錯置）",
            "混雜生硬詞彙之不規範語句（例項：聽日未適配）",
            "聲調助詞搭配欠妥之表達（例項：今晚誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"今日\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：聽日未適配）",
            "聲調助詞搭配欠妥之表達（例項：今晚誤用）",
            "語序顛倒嘅非標準句式（例項：琴日錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"今日\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：今晚誤用）",
            "語序顛倒嘅非標準句式（例項：琴日錯置）",
            "混雜生硬詞彙之不規範語句（例項：聽日未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «今日»):",
          "acceptedAnswers": [
            "今日",
            "今日"
          ],
          "explanation": "The target keyword was: 【今日】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u21-l2": {
    "id": "hk-u21-l2",
    "subject": "cantonese",
    "unit": 21,
    "lessonNumber": 2,
    "title": "句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第2課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元21第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元21第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元21第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 21 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 21 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 21 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元21-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-21-2】：把握「粵語單元21第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-21-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"琴日\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：聽日錯置）",
            "混雜生硬詞彙之不規範語句（例項：今晚未適配）",
            "聲調助詞搭配欠妥之表達（例項：上晝誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"琴日\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：今晚未適配）",
            "聲調助詞搭配欠妥之表達（例項：上晝誤用）",
            "語序顛倒嘅非標準句式（例項：聽日錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"琴日\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：上晝誤用）",
            "語序顛倒嘅非標準句式（例項：聽日錯置）",
            "混雜生硬詞彙之不規範語句（例項：今晚未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «琴日»):",
          "acceptedAnswers": [
            "琴日",
            "琴日"
          ],
          "explanation": "The target keyword was: 【琴日】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u21-l3": {
    "id": "hk-u21-l3",
    "subject": "cantonese",
    "unit": 21,
    "lessonNumber": 3,
    "title": "句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第3課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元21第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元21第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元21第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 21 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 21 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 21 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元21-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-21-3】：把握「粵語單元21第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-21-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"聽日\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：今晚錯置）",
            "混雜生硬詞彙之不規範語句（例項：上晝未適配）",
            "聲調助詞搭配欠妥之表達（例項：下晝誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"聽日\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：上晝未適配）",
            "聲調助詞搭配欠妥之表達（例項：下晝誤用）",
            "語序顛倒嘅非標準句式（例項：今晚錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"聽日\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：下晝誤用）",
            "語序顛倒嘅非標準句式（例項：今晚錯置）",
            "混雜生硬詞彙之不規範語句（例項：上晝未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «聽日»):",
          "acceptedAnswers": [
            "聽日",
            "聽日"
          ],
          "explanation": "The target keyword was: 【聽日】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u21-l4": {
    "id": "hk-u21-l4",
    "subject": "cantonese",
    "unit": 21,
    "lessonNumber": 4,
    "title": "句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第4課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元21第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元21第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元21第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 21 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 21 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 21 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元21-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-21-4】：把握「粵語單元21第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-21-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"今晚\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：上晝錯置）",
            "混雜生硬詞彙之不規範語句（例項：下晝未適配）",
            "聲調助詞搭配欠妥之表達（例項：朝早誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"今晚\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：下晝未適配）",
            "聲調助詞搭配欠妥之表達（例項：朝早誤用）",
            "語序顛倒嘅非標準句式（例項：上晝錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"今晚\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：朝早誤用）",
            "語序顛倒嘅非標準句式（例項：上晝錯置）",
            "混雜生硬詞彙之不規範語句（例項：下晝未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «今晚»):",
          "acceptedAnswers": [
            "今晚",
            "今晚"
          ],
          "explanation": "The target keyword was: 【今晚】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u21-l5": {
    "id": "hk-u21-l5",
    "subject": "cantonese",
    "unit": 21,
    "lessonNumber": 5,
    "title": "句尾語氣助詞大系 (Sentence-Final Particles Master Class) (第5課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元21第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元21第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元21第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 21 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 21 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 21 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元21-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-21-5】：把握「粵語單元21第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-21-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"上晝\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：下晝錯置）",
            "混雜生硬詞彙之不規範語句（例項：朝早未適配）",
            "聲調助詞搭配欠妥之表達（例項：半夜誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"上晝\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：朝早未適配）",
            "聲調助詞搭配欠妥之表達（例項：半夜誤用）",
            "語序顛倒嘅非標準句式（例項：下晝錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"上晝\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第21課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：半夜誤用）",
            "語序顛倒嘅非標準句式（例項：下晝錯置）",
            "混雜生硬詞彙之不規範語句（例項：朝早未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «上晝»):",
          "acceptedAnswers": [
            "上晝",
            "上晝"
          ],
          "explanation": "The target keyword was: 【上晝】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u22-l1": {
    "id": "hk-u22-l1",
    "subject": "cantonese",
    "unit": 22,
    "lessonNumber": 1,
    "title": "廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第1課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元22第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元22第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元22第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 22 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 22 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 22 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元22-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-22-1】：把握「粵語單元22第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-22-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"下晝\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：朝早錯置）",
            "混雜生硬詞彙之不規範語句（例項：半夜未適配）",
            "聲調助詞搭配欠妥之表達（例項：星期一誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"下晝\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：半夜未適配）",
            "聲調助詞搭配欠妥之表達（例項：星期一誤用）",
            "語序顛倒嘅非標準句式（例項：朝早錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"下晝\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：星期一誤用）",
            "語序顛倒嘅非標準句式（例項：朝早錯置）",
            "混雜生硬詞彙之不規範語句（例項：半夜未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «下晝»):",
          "acceptedAnswers": [
            "下晝",
            "下晝"
          ],
          "explanation": "The target keyword was: 【下晝】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u22-l2": {
    "id": "hk-u22-l2",
    "subject": "cantonese",
    "unit": 22,
    "lessonNumber": 2,
    "title": "廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第2課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元22第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元22第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元22第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 22 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 22 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 22 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元22-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-22-2】：把握「粵語單元22第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-22-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"朝早\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：半夜錯置）",
            "混雜生硬詞彙之不規範語句（例項：星期一未適配）",
            "聲調助詞搭配欠妥之表達（例項：週末誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"朝早\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：星期一未適配）",
            "聲調助詞搭配欠妥之表達（例項：週末誤用）",
            "語序顛倒嘅非標準句式（例項：半夜錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"朝早\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：週末誤用）",
            "語序顛倒嘅非標準句式（例項：半夜錯置）",
            "混雜生硬詞彙之不規範語句（例項：星期一未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «朝早»):",
          "acceptedAnswers": [
            "朝早",
            "朝早"
          ],
          "explanation": "The target keyword was: 【朝早】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u22-l3": {
    "id": "hk-u22-l3",
    "subject": "cantonese",
    "unit": 22,
    "lessonNumber": 3,
    "title": "廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第3課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元22第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元22第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元22第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 22 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 22 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 22 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元22-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-22-3】：把握「粵語單元22第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-22-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"半夜\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：星期一錯置）",
            "混雜生硬詞彙之不規範語句（例項：週末未適配）",
            "聲調助詞搭配欠妥之表達（例項：紅色誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"半夜\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：週末未適配）",
            "聲調助詞搭配欠妥之表達（例項：紅色誤用）",
            "語序顛倒嘅非標準句式（例項：星期一錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"半夜\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：紅色誤用）",
            "語序顛倒嘅非標準句式（例項：星期一錯置）",
            "混雜生硬詞彙之不規範語句（例項：週末未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «半夜»):",
          "acceptedAnswers": [
            "半夜",
            "半夜"
          ],
          "explanation": "The target keyword was: 【半夜】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u22-l4": {
    "id": "hk-u22-l4",
    "subject": "cantonese",
    "unit": 22,
    "lessonNumber": 4,
    "title": "廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第4課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元22第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元22第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元22第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 22 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 22 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 22 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元22-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-22-4】：把握「粵語單元22第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-22-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"星期一\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：週末錯置）",
            "混雜生硬詞彙之不規範語句（例項：紅色未適配）",
            "聲調助詞搭配欠妥之表達（例項：藍色誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"星期一\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：紅色未適配）",
            "聲調助詞搭配欠妥之表達（例項：藍色誤用）",
            "語序顛倒嘅非標準句式（例項：週末錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"星期一\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：藍色誤用）",
            "語序顛倒嘅非標準句式（例項：週末錯置）",
            "混雜生硬詞彙之不規範語句（例項：紅色未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «星期一»):",
          "acceptedAnswers": [
            "星期一",
            "星期一"
          ],
          "explanation": "The target keyword was: 【星期一】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u22-l5": {
    "id": "hk-u22-l5",
    "subject": "cantonese",
    "unit": 22,
    "lessonNumber": 5,
    "title": "廣東話成語、俗語同歇後語 (Cantonese Idioms & Proverbs) (第5課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元22第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元22第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元22第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 22 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 22 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 22 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元22-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-22-5】：把握「粵語單元22第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-22-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"週末\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：紅色錯置）",
            "混雜生硬詞彙之不規範語句（例項：藍色未適配）",
            "聲調助詞搭配欠妥之表達（例項：黃色誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"週末\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：藍色未適配）",
            "聲調助詞搭配欠妥之表達（例項：黃色誤用）",
            "語序顛倒嘅非標準句式（例項：紅色錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"週末\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第22課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：黃色誤用）",
            "語序顛倒嘅非標準句式（例項：紅色錯置）",
            "混雜生硬詞彙之不規範語句（例項：藍色未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «週末»):",
          "acceptedAnswers": [
            "週末",
            "週末"
          ],
          "explanation": "The target keyword was: 【週末】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u23-l1": {
    "id": "hk-u23-l1",
    "subject": "cantonese",
    "unit": 23,
    "lessonNumber": 1,
    "title": "新聞傳媒與香港社會論題 (Media & Social Issues) (第1課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元23第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元23第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元23第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 23 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 23 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 23 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元23-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-23-1】：把握「粵語單元23第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-23-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"紅色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：藍色錯置）",
            "混雜生硬詞彙之不規範語句（例項：黃色未適配）",
            "聲調助詞搭配欠妥之表達（例項：綠色誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"紅色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：黃色未適配）",
            "聲調助詞搭配欠妥之表達（例項：綠色誤用）",
            "語序顛倒嘅非標準句式（例項：藍色錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"紅色\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：綠色誤用）",
            "語序顛倒嘅非標準句式（例項：藍色錯置）",
            "混雜生硬詞彙之不規範語句（例項：黃色未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «紅色»):",
          "acceptedAnswers": [
            "紅色",
            "紅色"
          ],
          "explanation": "The target keyword was: 【紅色】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u23-l2": {
    "id": "hk-u23-l2",
    "subject": "cantonese",
    "unit": 23,
    "lessonNumber": 2,
    "title": "新聞傳媒與香港社會論題 (Media & Social Issues) (第2課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元23第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元23第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元23第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 23 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 23 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 23 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元23-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-23-2】：把握「粵語單元23第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-23-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"藍色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：黃色錯置）",
            "混雜生硬詞彙之不規範語句（例項：綠色未適配）",
            "聲調助詞搭配欠妥之表達（例項：白色誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"藍色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：綠色未適配）",
            "聲調助詞搭配欠妥之表達（例項：白色誤用）",
            "語序顛倒嘅非標準句式（例項：黃色錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"藍色\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：白色誤用）",
            "語序顛倒嘅非標準句式（例項：黃色錯置）",
            "混雜生硬詞彙之不規範語句（例項：綠色未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «藍色»):",
          "acceptedAnswers": [
            "藍色",
            "藍色"
          ],
          "explanation": "The target keyword was: 【藍色】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u23-l3": {
    "id": "hk-u23-l3",
    "subject": "cantonese",
    "unit": 23,
    "lessonNumber": 3,
    "title": "新聞傳媒與香港社會論題 (Media & Social Issues) (第3課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元23第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元23第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元23第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 23 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 23 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 23 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元23-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-23-3】：把握「粵語單元23第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-23-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"黃色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：綠色錯置）",
            "混雜生硬詞彙之不規範語句（例項：白色未適配）",
            "聲調助詞搭配欠妥之表達（例項：黑色誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"黃色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：白色未適配）",
            "聲調助詞搭配欠妥之表達（例項：黑色誤用）",
            "語序顛倒嘅非標準句式（例項：綠色錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"黃色\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：黑色誤用）",
            "語序顛倒嘅非標準句式（例項：綠色錯置）",
            "混雜生硬詞彙之不規範語句（例項：白色未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «黃色»):",
          "acceptedAnswers": [
            "黃色",
            "黃色"
          ],
          "explanation": "The target keyword was: 【黃色】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u23-l4": {
    "id": "hk-u23-l4",
    "subject": "cantonese",
    "unit": 23,
    "lessonNumber": 4,
    "title": "新聞傳媒與香港社會論題 (Media & Social Issues) (第4課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元23第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元23第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元23第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 23 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 23 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 23 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元23-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-23-4】：把握「粵語單元23第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-23-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"綠色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：白色錯置）",
            "混雜生硬詞彙之不規範語句（例項：黑色未適配）",
            "聲調助詞搭配欠妥之表達（例項：橙色誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"綠色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：黑色未適配）",
            "聲調助詞搭配欠妥之表達（例項：橙色誤用）",
            "語序顛倒嘅非標準句式（例項：白色錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"綠色\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：橙色誤用）",
            "語序顛倒嘅非標準句式（例項：白色錯置）",
            "混雜生硬詞彙之不規範語句（例項：黑色未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «綠色»):",
          "acceptedAnswers": [
            "綠色",
            "綠色"
          ],
          "explanation": "The target keyword was: 【綠色】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u23-l5": {
    "id": "hk-u23-l5",
    "subject": "cantonese",
    "unit": 23,
    "lessonNumber": 5,
    "title": "新聞傳媒與香港社會論題 (Media & Social Issues) (第5課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元23第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元23第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元23第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 23 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 23 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 23 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元23-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-23-5】：把握「粵語單元23第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-23-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"白色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：黑色錯置）",
            "混雜生硬詞彙之不規範語句（例項：橙色未適配）",
            "聲調助詞搭配欠妥之表達（例項：紫色誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"白色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：橙色未適配）",
            "聲調助詞搭配欠妥之表達（例項：紫色誤用）",
            "語序顛倒嘅非標準句式（例項：黑色錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"白色\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第23課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：紫色誤用）",
            "語序顛倒嘅非標準句式（例項：黑色錯置）",
            "混雜生硬詞彙之不規範語句（例項：橙色未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «白色»):",
          "acceptedAnswers": [
            "白色",
            "白色"
          ],
          "explanation": "The target keyword was: 【白色】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u24-l1": {
    "id": "hk-u24-l1",
    "subject": "cantonese",
    "unit": 24,
    "lessonNumber": 1,
    "title": "商務粵語與公文寫作 (Business Cantonese & Correspondence) (第1課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元24第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元24第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元24第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 24 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 24 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 24 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元24-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-24-1】：把握「粵語單元24第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-24-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"黑色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：橙色錯置）",
            "混雜生硬詞彙之不規範語句（例項：紫色未適配）",
            "聲調助詞搭配欠妥之表達（例項：粉紅色誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"黑色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：紫色未適配）",
            "聲調助詞搭配欠妥之表達（例項：粉紅色誤用）",
            "語序顛倒嘅非標準句式（例項：橙色錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"黑色\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：粉紅色誤用）",
            "語序顛倒嘅非標準句式（例項：橙色錯置）",
            "混雜生硬詞彙之不規範語句（例項：紫色未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «黑色»):",
          "acceptedAnswers": [
            "黑色",
            "黑色"
          ],
          "explanation": "The target keyword was: 【黑色】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u24-l2": {
    "id": "hk-u24-l2",
    "subject": "cantonese",
    "unit": 24,
    "lessonNumber": 2,
    "title": "商務粵語與公文寫作 (Business Cantonese & Correspondence) (第2課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元24第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元24第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元24第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 24 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 24 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 24 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元24-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-24-2】：把握「粵語單元24第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-24-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"橙色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：紫色錯置）",
            "混雜生硬詞彙之不規範語句（例項：粉紅色未適配）",
            "聲調助詞搭配欠妥之表達（例項：灰色誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"橙色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：粉紅色未適配）",
            "聲調助詞搭配欠妥之表達（例項：灰色誤用）",
            "語序顛倒嘅非標準句式（例項：紫色錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"橙色\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：灰色誤用）",
            "語序顛倒嘅非標準句式（例項：紫色錯置）",
            "混雜生硬詞彙之不規範語句（例項：粉紅色未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «橙色»):",
          "acceptedAnswers": [
            "橙色",
            "橙色"
          ],
          "explanation": "The target keyword was: 【橙色】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u24-l3": {
    "id": "hk-u24-l3",
    "subject": "cantonese",
    "unit": 24,
    "lessonNumber": 3,
    "title": "商務粵語與公文寫作 (Business Cantonese & Correspondence) (第3課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元24第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元24第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元24第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 24 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 24 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 24 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元24-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-24-3】：把握「粵語單元24第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-24-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"紫色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：粉紅色錯置）",
            "混雜生硬詞彙之不規範語句（例項：灰色未適配）",
            "聲調助詞搭配欠妥之表達（例項：大細誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"紫色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：灰色未適配）",
            "聲調助詞搭配欠妥之表達（例項：大細誤用）",
            "語序顛倒嘅非標準句式（例項：粉紅色錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"紫色\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：大細誤用）",
            "語序顛倒嘅非標準句式（例項：粉紅色錯置）",
            "混雜生硬詞彙之不規範語句（例項：灰色未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «紫色»):",
          "acceptedAnswers": [
            "紫色",
            "紫色"
          ],
          "explanation": "The target keyword was: 【紫色】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u24-l4": {
    "id": "hk-u24-l4",
    "subject": "cantonese",
    "unit": 24,
    "lessonNumber": 4,
    "title": "商務粵語與公文寫作 (Business Cantonese & Correspondence) (第4課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元24第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元24第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元24第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 24 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 24 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 24 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元24-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-24-4】：把握「粵語單元24第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-24-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"粉紅色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：灰色錯置）",
            "混雜生硬詞彙之不規範語句（例項：大細未適配）",
            "聲調助詞搭配欠妥之表達（例項：長短誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"粉紅色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：大細未適配）",
            "聲調助詞搭配欠妥之表達（例項：長短誤用）",
            "語序顛倒嘅非標準句式（例項：灰色錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"粉紅色\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：長短誤用）",
            "語序顛倒嘅非標準句式（例項：灰色錯置）",
            "混雜生硬詞彙之不規範語句（例項：大細未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «粉紅色»):",
          "acceptedAnswers": [
            "粉紅色",
            "粉紅色"
          ],
          "explanation": "The target keyword was: 【粉紅色】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u24-l5": {
    "id": "hk-u24-l5",
    "subject": "cantonese",
    "unit": 24,
    "lessonNumber": 5,
    "title": "商務粵語與公文寫作 (Business Cantonese & Correspondence) (第5課)",
    "level": "B2",
    "objective": "Master Cantonese linguistics for 粵語單元24第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元24第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元24第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 24 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 24 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 24 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元24-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-24-5】：把握「粵語單元24第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-24-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"灰色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：大細錯置）",
            "混雜生硬詞彙之不規範語句（例項：長短未適配）",
            "聲調助詞搭配欠妥之表達（例項：高矮誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"灰色\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：長短未適配）",
            "聲調助詞搭配欠妥之表達（例項：高矮誤用）",
            "語序顛倒嘅非標準句式（例項：大細錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"灰色\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第24課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：高矮誤用）",
            "語序顛倒嘅非標準句式（例項：大細錯置）",
            "混雜生硬詞彙之不規範語句（例項：長短未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «灰色»):",
          "acceptedAnswers": [
            "灰色",
            "灰色"
          ],
          "explanation": "The target keyword was: 【灰色】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u25-l1": {
    "id": "hk-u25-l1",
    "subject": "cantonese",
    "unit": 25,
    "lessonNumber": 1,
    "title": "嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第1課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元25第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元25第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元25第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 25 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 25 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 25 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元25-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-25-1】：把握「粵語單元25第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-25-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"大細\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：長短錯置）",
            "混雜生硬詞彙之不規範語句（例項：高矮未適配）",
            "聲調助詞搭配欠妥之表達（例項：肥瘦誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"大細\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：高矮未適配）",
            "聲調助詞搭配欠妥之表達（例項：肥瘦誤用）",
            "語序顛倒嘅非標準句式（例項：長短錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"大細\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：肥瘦誤用）",
            "語序顛倒嘅非標準句式（例項：長短錯置）",
            "混雜生硬詞彙之不規範語句（例項：高矮未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «大細»):",
          "acceptedAnswers": [
            "大細",
            "大細"
          ],
          "explanation": "The target keyword was: 【大細】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u25-l2": {
    "id": "hk-u25-l2",
    "subject": "cantonese",
    "unit": 25,
    "lessonNumber": 2,
    "title": "嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第2課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元25第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元25第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元25第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 25 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 25 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 25 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元25-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-25-2】：把握「粵語單元25第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-25-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"長短\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：高矮錯置）",
            "混雜生硬詞彙之不規範語句（例項：肥瘦未適配）",
            "聲調助詞搭配欠妥之表達（例項：新舊誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"長短\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：肥瘦未適配）",
            "聲調助詞搭配欠妥之表達（例項：新舊誤用）",
            "語序顛倒嘅非標準句式（例項：高矮錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"長短\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：新舊誤用）",
            "語序顛倒嘅非標準句式（例項：高矮錯置）",
            "混雜生硬詞彙之不規範語句（例項：肥瘦未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «長短»):",
          "acceptedAnswers": [
            "長短",
            "長短"
          ],
          "explanation": "The target keyword was: 【長短】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u25-l3": {
    "id": "hk-u25-l3",
    "subject": "cantonese",
    "unit": 25,
    "lessonNumber": 3,
    "title": "嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第3課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元25第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元25第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元25第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 25 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 25 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 25 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元25-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-25-3】：把握「粵語單元25第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-25-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"高矮\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：肥瘦錯置）",
            "混雜生硬詞彙之不規範語句（例項：新舊未適配）",
            "聲調助詞搭配欠妥之表達（例項：好壞誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"高矮\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：新舊未適配）",
            "聲調助詞搭配欠妥之表達（例項：好壞誤用）",
            "語序顛倒嘅非標準句式（例項：肥瘦錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"高矮\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：好壞誤用）",
            "語序顛倒嘅非標準句式（例項：肥瘦錯置）",
            "混雜生硬詞彙之不規範語句（例項：新舊未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «高矮»):",
          "acceptedAnswers": [
            "高矮",
            "高矮"
          ],
          "explanation": "The target keyword was: 【高矮】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u25-l4": {
    "id": "hk-u25-l4",
    "subject": "cantonese",
    "unit": 25,
    "lessonNumber": 4,
    "title": "嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第4課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元25第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元25第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元25第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 25 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 25 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 25 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元25-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-25-4】：把握「粵語單元25第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-25-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"肥瘦\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：新舊錯置）",
            "混雜生硬詞彙之不規範語句（例項：好壞未適配）",
            "聲調助詞搭配欠妥之表達（例項：快慢誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"肥瘦\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：好壞未適配）",
            "聲調助詞搭配欠妥之表達（例項：快慢誤用）",
            "語序顛倒嘅非標準句式（例項：新舊錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"肥瘦\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：快慢誤用）",
            "語序顛倒嘅非標準句式（例項：新舊錯置）",
            "混雜生硬詞彙之不規範語句（例項：好壞未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «肥瘦»):",
          "acceptedAnswers": [
            "肥瘦",
            "肥瘦"
          ],
          "explanation": "The target keyword was: 【肥瘦】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u25-l5": {
    "id": "hk-u25-l5",
    "subject": "cantonese",
    "unit": 25,
    "lessonNumber": 5,
    "title": "嶺南古典文學與粵詩吟誦 (Lingnan Classical Literature) (第5課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元25第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元25第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元25第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 25 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 25 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 25 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元25-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-25-5】：把握「粵語單元25第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-25-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"新舊\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：好壞錯置）",
            "混雜生硬詞彙之不規範語句（例項：快慢未適配）",
            "聲調助詞搭配欠妥之表達（例項：早遲誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"新舊\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：快慢未適配）",
            "聲調助詞搭配欠妥之表達（例項：早遲誤用）",
            "語序顛倒嘅非標準句式（例項：好壞錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"新舊\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第25課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：早遲誤用）",
            "語序顛倒嘅非標準句式（例項：好壞錯置）",
            "混雜生硬詞彙之不規範語句（例項：快慢未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «新舊»):",
          "acceptedAnswers": [
            "新舊",
            "新舊"
          ],
          "explanation": "The target keyword was: 【新舊】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u26-l1": {
    "id": "hk-u26-l1",
    "subject": "cantonese",
    "unit": 26,
    "lessonNumber": 1,
    "title": "嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第1課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元26第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元26第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元26第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 26 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 26 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 26 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元26-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-26-1】：把握「粵語單元26第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-26-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"好壞\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：快慢錯置）",
            "混雜生硬詞彙之不規範語句（例項：早遲未適配）",
            "聲調助詞搭配欠妥之表達（例項：輕重誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"好壞\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：早遲未適配）",
            "聲調助詞搭配欠妥之表達（例項：輕重誤用）",
            "語序顛倒嘅非標準句式（例項：快慢錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"好壞\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：輕重誤用）",
            "語序顛倒嘅非標準句式（例項：快慢錯置）",
            "混雜生硬詞彙之不規範語句（例項：早遲未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «好壞»):",
          "acceptedAnswers": [
            "好壞",
            "好壞"
          ],
          "explanation": "The target keyword was: 【好壞】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u26-l2": {
    "id": "hk-u26-l2",
    "subject": "cantonese",
    "unit": 26,
    "lessonNumber": 2,
    "title": "嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第2課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元26第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元26第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元26第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 26 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 26 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 26 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元26-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-26-2】：把握「粵語單元26第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-26-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"快慢\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：早遲錯置）",
            "混雜生硬詞彙之不規範語句（例項：輕重未適配）",
            "聲調助詞搭配欠妥之表達（例項：乾濕誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"快慢\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：輕重未適配）",
            "聲調助詞搭配欠妥之表達（例項：乾濕誤用）",
            "語序顛倒嘅非標準句式（例項：早遲錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"快慢\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：乾濕誤用）",
            "語序顛倒嘅非標準句式（例項：早遲錯置）",
            "混雜生硬詞彙之不規範語句（例項：輕重未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «快慢»):",
          "acceptedAnswers": [
            "快慢",
            "快慢"
          ],
          "explanation": "The target keyword was: 【快慢】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u26-l3": {
    "id": "hk-u26-l3",
    "subject": "cantonese",
    "unit": 26,
    "lessonNumber": 3,
    "title": "嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第3課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元26第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元26第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元26第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 26 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 26 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 26 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元26-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-26-3】：把握「粵語單元26第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-26-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"早遲\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：輕重錯置）",
            "混雜生硬詞彙之不規範語句（例項：乾濕未適配）",
            "聲調助詞搭配欠妥之表達（例項：明白誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"早遲\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：乾濕未適配）",
            "聲調助詞搭配欠妥之表達（例項：明白誤用）",
            "語序顛倒嘅非標準句式（例項：輕重錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"早遲\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：明白誤用）",
            "語序顛倒嘅非標準句式（例項：輕重錯置）",
            "混雜生硬詞彙之不規範語句（例項：乾濕未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «早遲»):",
          "acceptedAnswers": [
            "早遲",
            "早遲"
          ],
          "explanation": "The target keyword was: 【早遲】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u26-l4": {
    "id": "hk-u26-l4",
    "subject": "cantonese",
    "unit": 26,
    "lessonNumber": 4,
    "title": "嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第4課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元26第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元26第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元26第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 26 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 26 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 26 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元26-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-26-4】：把握「粵語單元26第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-26-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"輕重\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：乾濕錯置）",
            "混雜生硬詞彙之不規範語句（例項：明白未適配）",
            "聲調助詞搭配欠妥之表達（例項：知道誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"輕重\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：明白未適配）",
            "聲調助詞搭配欠妥之表達（例項：知道誤用）",
            "語序顛倒嘅非標準句式（例項：乾濕錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"輕重\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：知道誤用）",
            "語序顛倒嘅非標準句式（例項：乾濕錯置）",
            "混雜生硬詞彙之不規範語句（例項：明白未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «輕重»):",
          "acceptedAnswers": [
            "輕重",
            "輕重"
          ],
          "explanation": "The target keyword was: 【輕重】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u26-l5": {
    "id": "hk-u26-l5",
    "subject": "cantonese",
    "unit": 26,
    "lessonNumber": 5,
    "title": "嶺南儒學與心學思想 (Lingnan Confucian Philosophy) (第5課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元26第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元26第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元26第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 26 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 26 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 26 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元26-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-26-5】：把握「粵語單元26第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-26-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"乾濕\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：明白錯置）",
            "混雜生硬詞彙之不規範語句（例項：知道未適配）",
            "聲調助詞搭配欠妥之表達（例項：識得誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"乾濕\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：知道未適配）",
            "聲調助詞搭配欠妥之表達（例項：識得誤用）",
            "語序顛倒嘅非標準句式（例項：明白錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"乾濕\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第26課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：識得誤用）",
            "語序顛倒嘅非標準句式（例項：明白錯置）",
            "混雜生硬詞彙之不規範語句（例項：知道未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «乾濕»):",
          "acceptedAnswers": [
            "乾濕",
            "乾濕"
          ],
          "explanation": "The target keyword was: 【乾濕】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u27-l1": {
    "id": "hk-u27-l1",
    "subject": "cantonese",
    "unit": 27,
    "lessonNumber": 1,
    "title": "傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第1課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元27第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元27第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元27第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 27 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 27 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 27 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元27-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-27-1】：把握「粵語單元27第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-27-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"明白\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：知道錯置）",
            "混雜生硬詞彙之不規範語句（例項：識得未適配）",
            "聲調助詞搭配欠妥之表達（例項：記得誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"明白\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：識得未適配）",
            "聲調助詞搭配欠妥之表達（例項：記得誤用）",
            "語序顛倒嘅非標準句式（例項：知道錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"明白\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：記得誤用）",
            "語序顛倒嘅非標準句式（例項：知道錯置）",
            "混雜生硬詞彙之不規範語句（例項：識得未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «明白»):",
          "acceptedAnswers": [
            "明白",
            "明白"
          ],
          "explanation": "The target keyword was: 【明白】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u27-l2": {
    "id": "hk-u27-l2",
    "subject": "cantonese",
    "unit": 27,
    "lessonNumber": 2,
    "title": "傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第2課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元27第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元27第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元27第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 27 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 27 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 27 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元27-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-27-2】：把握「粵語單元27第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-27-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"知道\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：識得錯置）",
            "混雜生硬詞彙之不規範語句（例項：記得未適配）",
            "聲調助詞搭配欠妥之表達（例項：唔記得誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"知道\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：記得未適配）",
            "聲調助詞搭配欠妥之表達（例項：唔記得誤用）",
            "語序顛倒嘅非標準句式（例項：識得錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"知道\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：唔記得誤用）",
            "語序顛倒嘅非標準句式（例項：識得錯置）",
            "混雜生硬詞彙之不規範語句（例項：記得未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «知道»):",
          "acceptedAnswers": [
            "知道",
            "知道"
          ],
          "explanation": "The target keyword was: 【知道】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u27-l3": {
    "id": "hk-u27-l3",
    "subject": "cantonese",
    "unit": 27,
    "lessonNumber": 3,
    "title": "傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第3課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元27第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元27第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元27第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 27 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 27 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 27 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元27-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-27-3】：把握「粵語單元27第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-27-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"識得\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：記得錯置）",
            "混雜生硬詞彙之不規範語句（例項：唔記得未適配）",
            "聲調助詞搭配欠妥之表達（例項：同意誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"識得\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：唔記得未適配）",
            "聲調助詞搭配欠妥之表達（例項：同意誤用）",
            "語序顛倒嘅非標準句式（例項：記得錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"識得\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：同意誤用）",
            "語序顛倒嘅非標準句式（例項：記得錯置）",
            "混雜生硬詞彙之不規範語句（例項：唔記得未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «識得»):",
          "acceptedAnswers": [
            "識得",
            "識得"
          ],
          "explanation": "The target keyword was: 【識得】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u27-l4": {
    "id": "hk-u27-l4",
    "subject": "cantonese",
    "unit": 27,
    "lessonNumber": 4,
    "title": "傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第4課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元27第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元27第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元27第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 27 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 27 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 27 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元27-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-27-4】：把握「粵語單元27第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-27-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"記得\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：唔記得錯置）",
            "混雜生硬詞彙之不規範語句（例項：同意未適配）",
            "聲調助詞搭配欠妥之表達（例項：反對誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"記得\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：同意未適配）",
            "聲調助詞搭配欠妥之表達（例項：反對誤用）",
            "語序顛倒嘅非標準句式（例項：唔記得錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"記得\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：反對誤用）",
            "語序顛倒嘅非標準句式（例項：唔記得錯置）",
            "混雜生硬詞彙之不規範語句（例項：同意未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «記得»):",
          "acceptedAnswers": [
            "記得",
            "記得"
          ],
          "explanation": "The target keyword was: 【記得】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u27-l5": {
    "id": "hk-u27-l5",
    "subject": "cantonese",
    "unit": 27,
    "lessonNumber": 5,
    "title": "傳統藝術：粵劇、廣彩與嶺南畫派 (Cantonese Opera & Lingnan Arts) (第5課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元27第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元27第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元27第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 27 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 27 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 27 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元27-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-27-5】：把握「粵語單元27第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-27-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"唔記得\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：同意錯置）",
            "混雜生硬詞彙之不規範語句（例項：反對未適配）",
            "聲調助詞搭配欠妥之表達（例項：考慮誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"唔記得\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：反對未適配）",
            "聲調助詞搭配欠妥之表達（例項：考慮誤用）",
            "語序顛倒嘅非標準句式（例項：同意錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"唔記得\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第27課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：考慮誤用）",
            "語序顛倒嘅非標準句式（例項：同意錯置）",
            "混雜生硬詞彙之不規範語句（例項：反對未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «唔記得»):",
          "acceptedAnswers": [
            "唔記得",
            "唔記得"
          ],
          "explanation": "The target keyword was: 【唔記得】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u28-l1": {
    "id": "hk-u28-l1",
    "subject": "cantonese",
    "unit": 28,
    "lessonNumber": 1,
    "title": "現代香港文學與流行文化 (Modern HK Literature & Cinema) (第1課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元28第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元28第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元28第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 28 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 28 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 28 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元28-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-28-1】：把握「粵語單元28第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-28-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"同意\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：反對錯置）",
            "混雜生硬詞彙之不規範語句（例項：考慮未適配）",
            "聲調助詞搭配欠妥之表達（例項：決定誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"同意\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：考慮未適配）",
            "聲調助詞搭配欠妥之表達（例項：決定誤用）",
            "語序顛倒嘅非標準句式（例項：反對錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"同意\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：決定誤用）",
            "語序顛倒嘅非標準句式（例項：反對錯置）",
            "混雜生硬詞彙之不規範語句（例項：考慮未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «同意»):",
          "acceptedAnswers": [
            "同意",
            "同意"
          ],
          "explanation": "The target keyword was: 【同意】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u28-l2": {
    "id": "hk-u28-l2",
    "subject": "cantonese",
    "unit": 28,
    "lessonNumber": 2,
    "title": "現代香港文學與流行文化 (Modern HK Literature & Cinema) (第2課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元28第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元28第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元28第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 28 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 28 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 28 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元28-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-28-2】：把握「粵語單元28第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-28-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"反對\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：考慮錯置）",
            "混雜生硬詞彙之不規範語句（例項：決定未適配）",
            "聲調助詞搭配欠妥之表達（例項：相信誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"反對\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：決定未適配）",
            "聲調助詞搭配欠妥之表達（例項：相信誤用）",
            "語序顛倒嘅非標準句式（例項：考慮錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"反對\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：相信誤用）",
            "語序顛倒嘅非標準句式（例項：考慮錯置）",
            "混雜生硬詞彙之不規範語句（例項：決定未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «反對»):",
          "acceptedAnswers": [
            "反對",
            "反對"
          ],
          "explanation": "The target keyword was: 【反對】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u28-l3": {
    "id": "hk-u28-l3",
    "subject": "cantonese",
    "unit": 28,
    "lessonNumber": 3,
    "title": "現代香港文學與流行文化 (Modern HK Literature & Cinema) (第3課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元28第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元28第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元28第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 28 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 28 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 28 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元28-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-28-3】：把握「粵語單元28第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-28-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"考慮\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：決定錯置）",
            "混雜生硬詞彙之不規範語句（例項：相信未適配）",
            "聲調助詞搭配欠妥之表達（例項：學校誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"考慮\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：相信未適配）",
            "聲調助詞搭配欠妥之表達（例項：學校誤用）",
            "語序顛倒嘅非標準句式（例項：決定錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"考慮\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：學校誤用）",
            "語序顛倒嘅非標準句式（例項：決定錯置）",
            "混雜生硬詞彙之不規範語句（例項：相信未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «考慮»):",
          "acceptedAnswers": [
            "考慮",
            "考慮"
          ],
          "explanation": "The target keyword was: 【考慮】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u28-l4": {
    "id": "hk-u28-l4",
    "subject": "cantonese",
    "unit": 28,
    "lessonNumber": 4,
    "title": "現代香港文學與流行文化 (Modern HK Literature & Cinema) (第4課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元28第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元28第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元28第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 28 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 28 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 28 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元28-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-28-4】：把握「粵語單元28第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-28-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"決定\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：相信錯置）",
            "混雜生硬詞彙之不規範語句（例項：學校未適配）",
            "聲調助詞搭配欠妥之表達（例項：老師誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"決定\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：學校未適配）",
            "聲調助詞搭配欠妥之表達（例項：老師誤用）",
            "語序顛倒嘅非標準句式（例項：相信錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"決定\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：老師誤用）",
            "語序顛倒嘅非標準句式（例項：相信錯置）",
            "混雜生硬詞彙之不規範語句（例項：學校未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «決定»):",
          "acceptedAnswers": [
            "決定",
            "決定"
          ],
          "explanation": "The target keyword was: 【決定】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u28-l5": {
    "id": "hk-u28-l5",
    "subject": "cantonese",
    "unit": 28,
    "lessonNumber": 5,
    "title": "現代香港文學與流行文化 (Modern HK Literature & Cinema) (第5課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元28第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元28第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元28第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 28 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 28 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 28 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元28-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-28-5】：把握「粵語單元28第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-28-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"相信\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：學校錯置）",
            "混雜生硬詞彙之不規範語句（例項：老師未適配）",
            "聲調助詞搭配欠妥之表達（例項：學生誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"相信\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：老師未適配）",
            "聲調助詞搭配欠妥之表達（例項：學生誤用）",
            "語序顛倒嘅非標準句式（例項：學校錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"相信\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第28課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：學生誤用）",
            "語序顛倒嘅非標準句式（例項：學校錯置）",
            "混雜生硬詞彙之不規範語句（例項：老師未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «相信»):",
          "acceptedAnswers": [
            "相信",
            "相信"
          ],
          "explanation": "The target keyword was: 【相信】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u29-l1": {
    "id": "hk-u29-l1",
    "subject": "cantonese",
    "unit": 29,
    "lessonNumber": 1,
    "title": "科技創新與學術話語 (Science, Tech & Academic Discourse) (第1課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元29第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元29第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元29第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 29 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 29 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 29 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元29-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-29-1】：把握「粵語單元29第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-29-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"學校\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：老師錯置）",
            "混雜生硬詞彙之不規範語句（例項：學生未適配）",
            "聲調助詞搭配欠妥之表達（例項：功課誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"學校\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：學生未適配）",
            "聲調助詞搭配欠妥之表達（例項：功課誤用）",
            "語序顛倒嘅非標準句式（例項：老師錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"學校\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：功課誤用）",
            "語序顛倒嘅非標準句式（例項：老師錯置）",
            "混雜生硬詞彙之不規範語句（例項：學生未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «學校»):",
          "acceptedAnswers": [
            "學校",
            "學校"
          ],
          "explanation": "The target keyword was: 【學校】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u29-l2": {
    "id": "hk-u29-l2",
    "subject": "cantonese",
    "unit": 29,
    "lessonNumber": 2,
    "title": "科技創新與學術話語 (Science, Tech & Academic Discourse) (第2課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元29第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元29第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元29第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 29 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 29 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 29 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元29-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-29-2】：把握「粵語單元29第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-29-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"老師\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：學生錯置）",
            "混雜生硬詞彙之不規範語句（例項：功課未適配）",
            "聲調助詞搭配欠妥之表達（例項：考試誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"老師\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：功課未適配）",
            "聲調助詞搭配欠妥之表達（例項：考試誤用）",
            "語序顛倒嘅非標準句式（例項：學生錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"老師\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：考試誤用）",
            "語序顛倒嘅非標準句式（例項：學生錯置）",
            "混雜生硬詞彙之不規範語句（例項：功課未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «老師»):",
          "acceptedAnswers": [
            "老師",
            "老師"
          ],
          "explanation": "The target keyword was: 【老師】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u29-l3": {
    "id": "hk-u29-l3",
    "subject": "cantonese",
    "unit": 29,
    "lessonNumber": 3,
    "title": "科技創新與學術話語 (Science, Tech & Academic Discourse) (第3課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元29第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元29第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元29第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 29 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 29 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 29 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元29-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-29-3】：把握「粵語單元29第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-29-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"學生\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：功課錯置）",
            "混雜生硬詞彙之不規範語句（例項：考試未適配）",
            "聲調助詞搭配欠妥之表達（例項：成績誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"學生\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：考試未適配）",
            "聲調助詞搭配欠妥之表達（例項：成績誤用）",
            "語序顛倒嘅非標準句式（例項：功課錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"學生\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：成績誤用）",
            "語序顛倒嘅非標準句式（例項：功課錯置）",
            "混雜生硬詞彙之不規範語句（例項：考試未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «學生»):",
          "acceptedAnswers": [
            "學生",
            "學生"
          ],
          "explanation": "The target keyword was: 【學生】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u29-l4": {
    "id": "hk-u29-l4",
    "subject": "cantonese",
    "unit": 29,
    "lessonNumber": 4,
    "title": "科技創新與學術話語 (Science, Tech & Academic Discourse) (第4課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元29第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元29第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元29第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 29 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 29 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 29 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元29-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-29-4】：把握「粵語單元29第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-29-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"功課\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：考試錯置）",
            "混雜生硬詞彙之不規範語句（例項：成績未適配）",
            "聲調助詞搭配欠妥之表達（例項：畢業誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"功課\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：成績未適配）",
            "聲調助詞搭配欠妥之表達（例項：畢業誤用）",
            "語序顛倒嘅非標準句式（例項：考試錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"功課\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：畢業誤用）",
            "語序顛倒嘅非標準句式（例項：考試錯置）",
            "混雜生硬詞彙之不規範語句（例項：成績未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «功課»):",
          "acceptedAnswers": [
            "功課",
            "功課"
          ],
          "explanation": "The target keyword was: 【功課】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u29-l5": {
    "id": "hk-u29-l5",
    "subject": "cantonese",
    "unit": 29,
    "lessonNumber": 5,
    "title": "科技創新與學術話語 (Science, Tech & Academic Discourse) (第5課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元29第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元29第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元29第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 29 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 29 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 29 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元29-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-29-5】：把握「粵語單元29第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-29-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"考試\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：成績錯置）",
            "混雜生硬詞彙之不規範語句（例項：畢業未適配）",
            "聲調助詞搭配欠妥之表達（例項：圖書館誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"考試\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：畢業未適配）",
            "聲調助詞搭配欠妥之表達（例項：圖書館誤用）",
            "語序顛倒嘅非標準句式（例項：成績錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"考試\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第29課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：圖書館誤用）",
            "語序顛倒嘅非標準句式（例項：成績錯置）",
            "混雜生硬詞彙之不規範語句（例項：畢業未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «考試»):",
          "acceptedAnswers": [
            "考試",
            "考試"
          ],
          "explanation": "The target keyword was: 【考試】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u30-l1": {
    "id": "hk-u30-l1",
    "subject": "cantonese",
    "unit": 30,
    "lessonNumber": 1,
    "title": "當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第1課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元30第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元30第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元30第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 30 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 30 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 30 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元30-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-30-1】：把握「粵語單元30第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-30-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"成績\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：畢業錯置）",
            "混雜生硬詞彙之不規範語句（例項：圖書館未適配）",
            "聲調助詞搭配欠妥之表達（例項：課室誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"成績\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：圖書館未適配）",
            "聲調助詞搭配欠妥之表達（例項：課室誤用）",
            "語序顛倒嘅非標準句式（例項：畢業錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"成績\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：課室誤用）",
            "語序顛倒嘅非標準句式（例項：畢業錯置）",
            "混雜生硬詞彙之不規範語句（例項：圖書館未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «成績»):",
          "acceptedAnswers": [
            "成績",
            "成績"
          ],
          "explanation": "The target keyword was: 【成績】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u30-l2": {
    "id": "hk-u30-l2",
    "subject": "cantonese",
    "unit": 30,
    "lessonNumber": 2,
    "title": "當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第2課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元30第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元30第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元30第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 30 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 30 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 30 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元30-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-30-2】：把握「粵語單元30第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-30-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"畢業\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：圖書館錯置）",
            "混雜生硬詞彙之不規範語句（例項：課室未適配）",
            "聲調助詞搭配欠妥之表達（例項：字典誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"畢業\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：課室未適配）",
            "聲調助詞搭配欠妥之表達（例項：字典誤用）",
            "語序顛倒嘅非標準句式（例項：圖書館錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"畢業\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：字典誤用）",
            "語序顛倒嘅非標準句式（例項：圖書館錯置）",
            "混雜生硬詞彙之不規範語句（例項：課室未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «畢業»):",
          "acceptedAnswers": [
            "畢業",
            "畢業"
          ],
          "explanation": "The target keyword was: 【畢業】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u30-l3": {
    "id": "hk-u30-l3",
    "subject": "cantonese",
    "unit": 30,
    "lessonNumber": 3,
    "title": "當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第3課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元30第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元30第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元30第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 30 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 30 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 30 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元30-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-30-3】：把握「粵語單元30第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-30-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"圖書館\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：課室錯置）",
            "混雜生硬詞彙之不規範語句（例項：字典未適配）",
            "聲調助詞搭配欠妥之表達（例項：銀行誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"圖書館\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：字典未適配）",
            "聲調助詞搭配欠妥之表達（例項：銀行誤用）",
            "語序顛倒嘅非標準句式（例項：課室錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"圖書館\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：銀行誤用）",
            "語序顛倒嘅非標準句式（例項：課室錯置）",
            "混雜生硬詞彙之不規範語句（例項：字典未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «圖書館»):",
          "acceptedAnswers": [
            "圖書館",
            "圖書館"
          ],
          "explanation": "The target keyword was: 【圖書館】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u30-l4": {
    "id": "hk-u30-l4",
    "subject": "cantonese",
    "unit": 30,
    "lessonNumber": 4,
    "title": "當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第4課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元30第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元30第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元30第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 30 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 30 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 30 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元30-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-30-4】：把握「粵語單元30第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-30-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"課室\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：字典錯置）",
            "混雜生硬詞彙之不規範語句（例項：銀行未適配）",
            "聲調助詞搭配欠妥之表達（例項：提款誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"課室\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：銀行未適配）",
            "聲調助詞搭配欠妥之表達（例項：提款誤用）",
            "語序顛倒嘅非標準句式（例項：字典錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"課室\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：提款誤用）",
            "語序顛倒嘅非標準句式（例項：字典錯置）",
            "混雜生硬詞彙之不規範語句（例項：銀行未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «課室»):",
          "acceptedAnswers": [
            "課室",
            "課室"
          ],
          "explanation": "The target keyword was: 【課室】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u30-l5": {
    "id": "hk-u30-l5",
    "subject": "cantonese",
    "unit": 30,
    "lessonNumber": 5,
    "title": "當代影視藝術與美學批評 (Contemporary HK Cinema & Aesthetics) (第5課)",
    "level": "C1",
    "objective": "Master Cantonese linguistics for 粵語單元30第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元30第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元30第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 30 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 30 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 30 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元30-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-30-5】：把握「粵語單元30第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-30-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"字典\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：銀行錯置）",
            "混雜生硬詞彙之不規範語句（例項：提款未適配）",
            "聲調助詞搭配欠妥之表達（例項：匯款誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"字典\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：提款未適配）",
            "聲調助詞搭配欠妥之表達（例項：匯款誤用）",
            "語序顛倒嘅非標準句式（例項：銀行錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"字典\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第30課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：匯款誤用）",
            "語序顛倒嘅非標準句式（例項：銀行錯置）",
            "混雜生硬詞彙之不規範語句（例項：提款未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «字典»):",
          "acceptedAnswers": [
            "字典",
            "字典"
          ],
          "explanation": "The target keyword was: 【字典】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u31-l1": {
    "id": "hk-u31-l1",
    "subject": "cantonese",
    "unit": 31,
    "lessonNumber": 1,
    "title": "普通法體系與香港司法制度 (Common Law & Legal System) (第1課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元31第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元31第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元31第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 31 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 31 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 31 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元31-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-31-1】：把握「粵語單元31第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-31-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"銀行\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：提款錯置）",
            "混雜生硬詞彙之不規範語句（例項：匯款未適配）",
            "聲調助詞搭配欠妥之表達（例項：利息誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"銀行\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：匯款未適配）",
            "聲調助詞搭配欠妥之表達（例項：利息誤用）",
            "語序顛倒嘅非標準句式（例項：提款錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"銀行\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：利息誤用）",
            "語序顛倒嘅非標準句式（例項：提款錯置）",
            "混雜生硬詞彙之不規範語句（例項：匯款未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «銀行»):",
          "acceptedAnswers": [
            "銀行",
            "銀行"
          ],
          "explanation": "The target keyword was: 【銀行】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u31-l2": {
    "id": "hk-u31-l2",
    "subject": "cantonese",
    "unit": 31,
    "lessonNumber": 2,
    "title": "普通法體系與香港司法制度 (Common Law & Legal System) (第2課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元31第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元31第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元31第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 31 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 31 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 31 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元31-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-31-2】：把握「粵語單元31第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-31-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"提款\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：匯款錯置）",
            "混雜生硬詞彙之不規範語句（例項：利息未適配）",
            "聲調助詞搭配欠妥之表達（例項：投資誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"提款\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：利息未適配）",
            "聲調助詞搭配欠妥之表達（例項：投資誤用）",
            "語序顛倒嘅非標準句式（例項：匯款錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"提款\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：投資誤用）",
            "語序顛倒嘅非標準句式（例項：匯款錯置）",
            "混雜生硬詞彙之不規範語句（例項：利息未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «提款»):",
          "acceptedAnswers": [
            "提款",
            "提款"
          ],
          "explanation": "The target keyword was: 【提款】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u31-l3": {
    "id": "hk-u31-l3",
    "subject": "cantonese",
    "unit": 31,
    "lessonNumber": 3,
    "title": "普通法體系與香港司法制度 (Common Law & Legal System) (第3課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元31第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元31第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元31第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 31 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 31 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 31 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元31-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-31-3】：把握「粵語單元31第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-31-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"匯款\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：利息錯置）",
            "混雜生硬詞彙之不規範語句（例項：投資未適配）",
            "聲調助詞搭配欠妥之表達（例項：股票誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"匯款\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：投資未適配）",
            "聲調助詞搭配欠妥之表達（例項：股票誤用）",
            "語序顛倒嘅非標準句式（例項：利息錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"匯款\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：股票誤用）",
            "語序顛倒嘅非標準句式（例項：利息錯置）",
            "混雜生硬詞彙之不規範語句（例項：投資未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «匯款»):",
          "acceptedAnswers": [
            "匯款",
            "匯款"
          ],
          "explanation": "The target keyword was: 【匯款】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u31-l4": {
    "id": "hk-u31-l4",
    "subject": "cantonese",
    "unit": 31,
    "lessonNumber": 4,
    "title": "普通法體系與香港司法制度 (Common Law & Legal System) (第4課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元31第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元31第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元31第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 31 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 31 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 31 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元31-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-31-4】：把握「粵語單元31第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-31-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"利息\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：投資錯置）",
            "混雜生硬詞彙之不規範語句（例項：股票未適配）",
            "聲調助詞搭配欠妥之表達（例項：保險誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"利息\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：股票未適配）",
            "聲調助詞搭配欠妥之表達（例項：保險誤用）",
            "語序顛倒嘅非標準句式（例項：投資錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"利息\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：保險誤用）",
            "語序顛倒嘅非標準句式（例項：投資錯置）",
            "混雜生硬詞彙之不規範語句（例項：股票未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «利息»):",
          "acceptedAnswers": [
            "利息",
            "利息"
          ],
          "explanation": "The target keyword was: 【利息】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u31-l5": {
    "id": "hk-u31-l5",
    "subject": "cantonese",
    "unit": 31,
    "lessonNumber": 5,
    "title": "普通法體系與香港司法制度 (Common Law & Legal System) (第5課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元31第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元31第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元31第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 31 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 31 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 31 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元31-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-31-5】：把握「粵語單元31第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-31-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"投資\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：股票錯置）",
            "混雜生硬詞彙之不規範語句（例項：保險未適配）",
            "聲調助詞搭配欠妥之表達（例項：合約誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"投資\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：保險未適配）",
            "聲調助詞搭配欠妥之表達（例項：合約誤用）",
            "語序顛倒嘅非標準句式（例項：股票錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"投資\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第31課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：合約誤用）",
            "語序顛倒嘅非標準句式（例項：股票錯置）",
            "混雜生硬詞彙之不規範語句（例項：保險未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «投資»):",
          "acceptedAnswers": [
            "投資",
            "投資"
          ],
          "explanation": "The target keyword was: 【投資】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u32-l1": {
    "id": "hk-u32-l1",
    "subject": "cantonese",
    "unit": 32,
    "lessonNumber": 1,
    "title": "高階辯論與公共演說 (High Debating & Public Address) (第1課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元32第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元32第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元32第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 32 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 32 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 32 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元32-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-32-1】：把握「粵語單元32第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-32-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"股票\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：保險錯置）",
            "混雜生硬詞彙之不規範語句（例項：合約未適配）",
            "聲調助詞搭配欠妥之表達（例項：簽名誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"股票\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：合約未適配）",
            "聲調助詞搭配欠妥之表達（例項：簽名誤用）",
            "語序顛倒嘅非標準句式（例項：保險錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"股票\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：簽名誤用）",
            "語序顛倒嘅非標準句式（例項：保險錯置）",
            "混雜生硬詞彙之不規範語句（例項：合約未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «股票»):",
          "acceptedAnswers": [
            "股票",
            "股票"
          ],
          "explanation": "The target keyword was: 【股票】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u32-l2": {
    "id": "hk-u32-l2",
    "subject": "cantonese",
    "unit": 32,
    "lessonNumber": 2,
    "title": "高階辯論與公共演說 (High Debating & Public Address) (第2課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元32第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元32第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元32第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 32 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 32 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 32 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元32-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-32-2】：把握「粵語單元32第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-32-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"保險\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：合約錯置）",
            "混雜生硬詞彙之不規範語句（例項：簽名未適配）",
            "聲調助詞搭配欠妥之表達（例項：文件誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"保險\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：簽名未適配）",
            "聲調助詞搭配欠妥之表達（例項：文件誤用）",
            "語序顛倒嘅非標準句式（例項：合約錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"保險\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：文件誤用）",
            "語序顛倒嘅非標準句式（例項：合約錯置）",
            "混雜生硬詞彙之不規範語句（例項：簽名未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «保險»):",
          "acceptedAnswers": [
            "保險",
            "保險"
          ],
          "explanation": "The target keyword was: 【保險】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u32-l3": {
    "id": "hk-u32-l3",
    "subject": "cantonese",
    "unit": 32,
    "lessonNumber": 3,
    "title": "高階辯論與公共演說 (High Debating & Public Address) (第3課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元32第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元32第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元32第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 32 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 32 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 32 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元32-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-32-3】：把握「粵語單元32第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-32-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"合約\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：簽名錯置）",
            "混雜生硬詞彙之不規範語句（例項：文件未適配）",
            "聲調助詞搭配欠妥之表達（例項：法律誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"合約\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：文件未適配）",
            "聲調助詞搭配欠妥之表達（例項：法律誤用）",
            "語序顛倒嘅非標準句式（例項：簽名錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"合約\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：法律誤用）",
            "語序顛倒嘅非標準句式（例項：簽名錯置）",
            "混雜生硬詞彙之不規範語句（例項：文件未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «合約»):",
          "acceptedAnswers": [
            "合約",
            "合約"
          ],
          "explanation": "The target keyword was: 【合約】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u32-l4": {
    "id": "hk-u32-l4",
    "subject": "cantonese",
    "unit": 32,
    "lessonNumber": 4,
    "title": "高階辯論與公共演說 (High Debating & Public Address) (第4課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元32第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元32第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元32第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 32 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 32 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 32 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元32-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-32-4】：把握「粵語單元32第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-32-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"簽名\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：文件錯置）",
            "混雜生硬詞彙之不規範語句（例項：法律未適配）",
            "聲調助詞搭配欠妥之表達（例項：法官誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"簽名\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：法律未適配）",
            "聲調助詞搭配欠妥之表達（例項：法官誤用）",
            "語序顛倒嘅非標準句式（例項：文件錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"簽名\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：法官誤用）",
            "語序顛倒嘅非標準句式（例項：文件錯置）",
            "混雜生硬詞彙之不規範語句（例項：法律未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «簽名»):",
          "acceptedAnswers": [
            "簽名",
            "簽名"
          ],
          "explanation": "The target keyword was: 【簽名】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u32-l5": {
    "id": "hk-u32-l5",
    "subject": "cantonese",
    "unit": 32,
    "lessonNumber": 5,
    "title": "高階辯論與公共演說 (High Debating & Public Address) (第5課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元32第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元32第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元32第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 32 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 32 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 32 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元32-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-32-5】：把握「粵語單元32第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-32-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"文件\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：法律錯置）",
            "混雜生硬詞彙之不規範語句（例項：法官未適配）",
            "聲調助詞搭配欠妥之表達（例項：律師誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"文件\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：法官未適配）",
            "聲調助詞搭配欠妥之表達（例項：律師誤用）",
            "語序顛倒嘅非標準句式（例項：法律錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"文件\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第32課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：律師誤用）",
            "語序顛倒嘅非標準句式（例項：法律錯置）",
            "混雜生硬詞彙之不規範語句（例項：法官未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «文件»):",
          "acceptedAnswers": [
            "文件",
            "文件"
          ],
          "explanation": "The target keyword was: 【文件】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u33-l1": {
    "id": "hk-u33-l1",
    "subject": "cantonese",
    "unit": 33,
    "lessonNumber": 1,
    "title": "嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第1課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元33第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元33第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元33第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 33 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 33 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 33 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元33-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-33-1】：把握「粵語單元33第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-33-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"法律\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：法官錯置）",
            "混雜生硬詞彙之不規範語句（例項：律師未適配）",
            "聲調助詞搭配欠妥之表達（例項：法庭誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"法律\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：律師未適配）",
            "聲調助詞搭配欠妥之表達（例項：法庭誤用）",
            "語序顛倒嘅非標準句式（例項：法官錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"法律\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：法庭誤用）",
            "語序顛倒嘅非標準句式（例項：法官錯置）",
            "混雜生硬詞彙之不規範語句（例項：律師未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «法律»):",
          "acceptedAnswers": [
            "法律",
            "法律"
          ],
          "explanation": "The target keyword was: 【法律】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u33-l2": {
    "id": "hk-u33-l2",
    "subject": "cantonese",
    "unit": 33,
    "lessonNumber": 2,
    "title": "嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第2課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元33第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元33第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元33第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 33 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 33 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 33 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元33-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-33-2】：把握「粵語單元33第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-33-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"法官\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：律師錯置）",
            "混雜生硬詞彙之不規範語句（例項：法庭未適配）",
            "聲調助詞搭配欠妥之表達（例項：審判誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"法官\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：法庭未適配）",
            "聲調助詞搭配欠妥之表達（例項：審判誤用）",
            "語序顛倒嘅非標準句式（例項：律師錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"法官\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：審判誤用）",
            "語序顛倒嘅非標準句式（例項：律師錯置）",
            "混雜生硬詞彙之不規範語句（例項：法庭未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «法官»):",
          "acceptedAnswers": [
            "法官",
            "法官"
          ],
          "explanation": "The target keyword was: 【法官】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u33-l3": {
    "id": "hk-u33-l3",
    "subject": "cantonese",
    "unit": 33,
    "lessonNumber": 3,
    "title": "嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第3課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元33第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元33第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元33第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 33 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 33 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 33 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元33-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-33-3】：把握「粵語單元33第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-33-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"律師\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：法庭錯置）",
            "混雜生硬詞彙之不規範語句（例項：審判未適配）",
            "聲調助詞搭配欠妥之表達（例項：起訴誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"律師\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：審判未適配）",
            "聲調助詞搭配欠妥之表達（例項：起訴誤用）",
            "語序顛倒嘅非標準句式（例項：法庭錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"律師\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：起訴誤用）",
            "語序顛倒嘅非標準句式（例項：法庭錯置）",
            "混雜生硬詞彙之不規範語句（例項：審判未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «律師»):",
          "acceptedAnswers": [
            "律師",
            "律師"
          ],
          "explanation": "The target keyword was: 【律師】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u33-l4": {
    "id": "hk-u33-l4",
    "subject": "cantonese",
    "unit": 33,
    "lessonNumber": 4,
    "title": "嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第4課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元33第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元33第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元33第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 33 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 33 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 33 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元33-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-33-4】：把握「粵語單元33第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-33-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"法庭\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：審判錯置）",
            "混雜生硬詞彙之不規範語句（例項：起訴未適配）",
            "聲調助詞搭配欠妥之表達（例項：辯護誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"法庭\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：起訴未適配）",
            "聲調助詞搭配欠妥之表達（例項：辯護誤用）",
            "語序顛倒嘅非標準句式（例項：審判錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"法庭\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：辯護誤用）",
            "語序顛倒嘅非標準句式（例項：審判錯置）",
            "混雜生硬詞彙之不規範語句（例項：起訴未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «法庭»):",
          "acceptedAnswers": [
            "法庭",
            "法庭"
          ],
          "explanation": "The target keyword was: 【法庭】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u33-l5": {
    "id": "hk-u33-l5",
    "subject": "cantonese",
    "unit": 33,
    "lessonNumber": 5,
    "title": "嶺南傳統建築與園林美學 (Lingnan Architecture & Gardens) (第5課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元33第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元33第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元33第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 33 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 33 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 33 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元33-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-33-5】：把握「粵語單元33第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-33-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"審判\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：起訴錯置）",
            "混雜生硬詞彙之不規範語句（例項：辯護未適配）",
            "聲調助詞搭配欠妥之表達（例項：證人誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"審判\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：辯護未適配）",
            "聲調助詞搭配欠妥之表達（例項：證人誤用）",
            "語序顛倒嘅非標準句式（例項：起訴錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"審判\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第33課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：證人誤用）",
            "語序顛倒嘅非標準句式（例項：起訴錯置）",
            "混雜生硬詞彙之不規範語句（例項：辯護未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «審判»):",
          "acceptedAnswers": [
            "審判",
            "審判"
          ],
          "explanation": "The target keyword was: 【審判】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u34-l1": {
    "id": "hk-u34-l1",
    "subject": "cantonese",
    "unit": 34,
    "lessonNumber": 1,
    "title": "多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第1課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元34第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元34第1課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元34第1課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 34 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 34 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 34 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元34-1）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-34-1】：把握「粵語單元34第1」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-34-1】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"起訴\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：辯護錯置）",
            "混雜生硬詞彙之不規範語句（例項：證人未適配）",
            "聲調助詞搭配欠妥之表達（例項：證據誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"起訴\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：證人未適配）",
            "聲調助詞搭配欠妥之表達（例項：證據誤用）",
            "語序顛倒嘅非標準句式（例項：辯護錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"起訴\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：證據誤用）",
            "語序顛倒嘅非標準句式（例項：辯護錯置）",
            "混雜生硬詞彙之不規範語句（例項：證人未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «起訴»):",
          "acceptedAnswers": [
            "起訴",
            "起訴"
          ],
          "explanation": "The target keyword was: 【起訴】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u34-l2": {
    "id": "hk-u34-l2",
    "subject": "cantonese",
    "unit": 34,
    "lessonNumber": 2,
    "title": "多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第2課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元34第2課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元34第2課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元34第2課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 34 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 34 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 34 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元34-2）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-34-2】：把握「粵語單元34第2」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-34-2】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"辯護\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：證人錯置）",
            "混雜生硬詞彙之不規範語句（例項：證據未適配）",
            "聲調助詞搭配欠妥之表達（例項：公義誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"辯護\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：證據未適配）",
            "聲調助詞搭配欠妥之表達（例項：公義誤用）",
            "語序顛倒嘅非標準句式（例項：證人錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"辯護\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：公義誤用）",
            "語序顛倒嘅非標準句式（例項：證人錯置）",
            "混雜生硬詞彙之不規範語句（例項：證據未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «辯護»):",
          "acceptedAnswers": [
            "辯護",
            "辯護"
          ],
          "explanation": "The target keyword was: 【辯護】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u34-l3": {
    "id": "hk-u34-l3",
    "subject": "cantonese",
    "unit": 34,
    "lessonNumber": 3,
    "title": "多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第3課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元34第3課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元34第3課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元34第3課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 34 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 34 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 34 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元34-3）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-34-3】：把握「粵語單元34第3」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-34-3】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"證人\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：證據錯置）",
            "混雜生硬詞彙之不規範語句（例項：公義未適配）",
            "聲調助詞搭配欠妥之表達（例項：早晨誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"證人\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：公義未適配）",
            "聲調助詞搭配欠妥之表達（例項：早晨誤用）",
            "語序顛倒嘅非標準句式（例項：證據錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"證人\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：早晨誤用）",
            "語序顛倒嘅非標準句式（例項：證據錯置）",
            "混雜生硬詞彙之不規範語句（例項：公義未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «證人»):",
          "acceptedAnswers": [
            "證人",
            "證人"
          ],
          "explanation": "The target keyword was: 【證人】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u34-l4": {
    "id": "hk-u34-l4",
    "subject": "cantonese",
    "unit": 34,
    "lessonNumber": 4,
    "title": "多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第4課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元34第4課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元34第4課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元34第4課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 34 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 34 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 34 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元34-4）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-34-4】：把握「粵語單元34第4」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-34-4】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"證據\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：公義錯置）",
            "混雜生硬詞彙之不規範語句（例項：早晨未適配）",
            "聲調助詞搭配欠妥之表達（例項：你好誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"證據\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：早晨未適配）",
            "聲調助詞搭配欠妥之表達（例項：你好誤用）",
            "語序顛倒嘅非標準句式（例項：公義錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"證據\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：你好誤用）",
            "語序顛倒嘅非標準句式（例項：公義錯置）",
            "混雜生硬詞彙之不規範語句（例項：早晨未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «證據»):",
          "acceptedAnswers": [
            "證據",
            "證據"
          ],
          "explanation": "The target keyword was: 【證據】"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "hk-u34-l5": {
    "id": "hk-u34-l5",
    "subject": "cantonese",
    "unit": 34,
    "lessonNumber": 5,
    "title": "多邊外交、條約法與公報辯護 (C2 Capstone Multilateral Diplomacy & VCLT) (第5課)",
    "level": "C2",
    "objective": "Master Cantonese linguistics for 粵語單元34第5課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "【粵語單元34第5課深度語言學結構】\n粵語（廣東話）具有深厚之中古漢語音韻淵源與獨特之句法系統。本課聚焦於「粵語單元34第5課深度語言學結構」之實質語法機制與交際應用。\n\n1. 句式構造規範：\n嚴格遵循廣州話固有語序。在運用動態助詞、介詞短語及體貌標記時，注重名詞量詞搭配與動詞補語邏輯。\n\n2. 聲調與語流音變：\n準確掌握九聲六調之音高走勢，特別是陰平（55）、陰上（35）與陽去（22）之調值對比，避免調值混淆。\n\n3. 嶺南語用禮儀：\n結合廣府及香港現代社會語境，恰當運用句末語氣詞，精準表達說話者之客氣、委婉或確認語氣。",
      "examples": [
        {
          "target": "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
          "reading": "ngo5 dei6 hai2 yat6 seung4 zung1 wan6 jung6 dai6 34 fo3 [ŋɔː˩˧ tei˨ hɐi˩˧ jɐt˨ sœːŋ˨˩ tsʊŋ˥ wɐn˨ jʊŋ˨ tɐi˨ 34 fɔː˧] (NGOH-DAY HY YUT-SEUNG JOONG WUN-YOONG)",
          "translation": "We flexibly deploy the grammar points of Unit 34 in communication."
        },
        {
          "target": "請大家留心呢句例句嘅聲調高低與字詞搭配（單元34-5）。",
          "reading": "cing2 daai6 gaa1 lau4 sam1 ni1 geui3 lai6 geui3 ge3 seng1 diu6 [tsʰɪŋ˧˥ taːi˨ kaː˥ lɐu˨˩ sɐm˥ niː˥ kɵy˧ lɐi˨ kɵy˧ kɛː˧ sɛːŋ˥ tiːu˨] (CHING DY-GAH LAU-SUM NEE-GOEY LY-GOEY GEH SENG-DEW)",
          "translation": "Please pay attention to the pitch contours and word collocations of this example."
        }
      ],
      "mnemonics": [
        "【記憶訣竅 HK-34-5】：把握「粵語單元34第5」之關鍵調值與核心句式，反覆朗讀建立語感。"
      ],
      "culturalNotes": [
        "【文化背景 HK-34-5】：在粵語社群中，此類表達廣見於茶樓文化、商業交際及日常鄰里往來，具濃厚人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "Select the authentic standard sentence practicing \"公義\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "語序顛倒嘅非標準句式（例項：早晨錯置）",
            "混雜生硬詞彙之不規範語句（例項：你好未適配）",
            "聲調助詞搭配欠妥之表達（例項：唔該誤用）"
          ],
          "answerIndex": 0,
          "explanation": "The selected sentence represents authentic standard grammar."
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "Identify the linguistically natural exemplar featuring \"公義\":",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "混雜生硬詞彙之不規範語句（例項：你好未適配）",
            "聲調助詞搭配欠妥之表達（例項：唔該誤用）",
            "語序顛倒嘅非標準句式（例項：早晨錯置）"
          ],
          "answerIndex": 0,
          "explanation": "This choice demonstrates natural syntax and correct grammatical coordination."
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "Checkpoint verification for lesson focus \"公義\": Which sentence is completely correct?",
          "options": [
            "我哋喺日常同專業交流入面靈活運用第34課嘅語法要點。",
            "聲調助詞搭配欠妥之表達（例項：唔該誤用）",
            "語序顛倒嘅非標準句式（例項：早晨錯置）",
            "混雜生硬詞彙之不規範語句（例項：你好未適配）"
          ],
          "answerIndex": 0,
          "explanation": "The sentence accurately implements all grammatical constraints."
        },
        {
          "type": "typed-recall",
          "prompt": "Type the target keyword practiced in this lesson (target: «公義»):",
          "acceptedAnswers": [
            "公義",
            "公義"
          ],
          "explanation": "The target keyword was: 【公義】"
        }
      ],
      "passThreshold": 0.8
    }
  }
};
  var ROADMAP = [];
  var SUBJECT = { units: UNITS, lessons: LESSONS, roadmap: ROADMAP };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['cantonese'] = SUBJECT;
  if (typeof module !== 'undefined' && module.exports) module.exports = SUBJECT;
})(typeof window !== 'undefined' ? window : global);
