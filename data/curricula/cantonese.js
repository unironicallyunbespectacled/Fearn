// cantonese curriculum
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
    "title": "粵拼聲母辨析與早晨打招呼 (Jyutping Initials & Morning Greetings)",
    "level": "A1",
    "objective": "掌握粵拼不送氣與送氣塞音辨析（b/p, d/t, g/k），並熟練運用「早晨」同「你好」進行日常見面問候。",
    "presentation": {
      "explanation": "廣東話語音系統採用香港語言學學會制定之粵拼標準方案。粵語輔音系統中並無濁塞音，其核心對立在於不送氣清塞音與送氣清塞音之分明對比：\n\n一、聲母對立規律辨析：\n１．雙唇塞音：聲母 b 為不送氣清音（如「爸」），對比聲母 p 為送氣清音（如「怕」，發音時帶有強烈爆破氣流）。\n２．舌尖塞音：聲母 d 為不送氣清音（如「打」），對比聲母 t 為送氣清音（如「他」）。\n３．舌根塞音：聲母 g 為不送氣清音（如「家」），對比聲母 k 為送氣清音（如「卡」）。\n\n二、日常見面問候語境與社交禮儀：\n１．「早晨」：香港最地道、最普遍之晨早見面問候語，通常於上午十一時前廣泛使用。在大廈大堂、辦公室遇到同事、鄰里或物業管理員，一聲清脆之「早晨」或「早晨呀」配以點頭微笑，乃極為親切得體之社交規範。\n２．「你好」：屬於較為莊重或初次相識之禮貌問候。在熟人同輩之間，香港人更習慣直接點頭打招呼以示友好親睦。",
      "examples": [
        {
          "target": "早晨，李先生！今日天氣真係好。",
          "reading": "zou2 san4, lei5 sin1 saang1! gam1 jat6 tin1 hei3 zan1 hai6 hou2. [tsou˧˥ sɐn˨˩, lei˩˧ siːn˥ saːŋ˥! kɐm˥ jɐt̚˨ tʰiːn˥ hei˧ tsɐn˥ hɐi˨ hou˧˥] (TSOH-SUN, LEE SEEN-SAHNG! GUM-YUT TEEN-HAY JUN-HY HOH)",
          "translation": "Good morning, Mr. Lee! The weather is really nice today."
        },
        {
          "target": "陳小姐，你好！好高興喺度見到你。",
          "reading": "can4 siu2 ze2, nei5 hou2! hou2 gou1 hing3 hai2 dou6 gin3 dou2 nei5. [tsʰɐn˨˩ siːu˧˥ tsɛː˧˥, nei˩˧ hou˧˥! hou˧˥ kou˥ hɪŋ˧ hɐi˩˧ tou˨ kiːn˧ tou˧˥ nei˩˧] (CHUN SEW-JEH, NAY HOH! HOH GOH-HING HY-DOH GEEN-DOH NAY)",
          "translation": "Hello, Miss Chan! So glad to see you here."
        },
        {
          "target": "早晨呀大家，我哋開始開會啦。",
          "reading": "zou2 san4 aa3 daai6 gaa1, ngo5 dei6 hoi1 ci2 hoi1 wui6 laa1. [tsou˧˥ sɐn˨˩ aː˧ taːi˨ kaː˥, ŋɔː˩˧ tei˨ hɔːi˥ tsʰiː˧˥ hɔːi˥ wuːi˨ laː˥] (TSOH-SUN AH DY-GAH, NGOH-DAY HOY-CHEE HOY-WOOEY LAH)",
          "translation": "Good morning everyone, let's start the meeting."
        }
      ],
      "mnemonics": [
        "【聲調記憶法】「早晨」（zou2 san4）嘅音高好似晨曦初升：第2聲「早」（zou2）由中音向上升起，第4聲「晨」（san4）順勢回落至低沉胸音，抑揚頓挫。"
      ],
      "culturalNotes": [
        "喺香港日常社交中，句末助詞「呀」（aa3）扮演著極為重要嘅語氣調節角色。「早晨」加上「呀」變成「早晨呀」，能令問候語氣更加親切柔和，消除生硬感。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【情境選擇】早上八時半喺大廈電梯遇到鄰居，最適當且自然嘅問候語係：",
          "options": [
            "早晨呀 (zou2 san4 aa3)",
            "再見 (zoi3 gin3)",
            "多謝 (do1 ze6)",
            "唔緊要 (m4 gan2 jiu3)"
          ],
          "answerIndex": 0,
          "explanation": "早晨 (zou2 san4) 係粵語最標準正宗嘅晨早問候語。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語音辨析】邊一組粵拼聲母準確呈現咗「不送氣清塞音」同「送氣清塞音」嘅對立？",
          "options": [
            "b [p] 對比 p [pʰ]",
            "d [t] 對比 z [ts]",
            "m [m] 對比 n [n]",
            "g [k] 對比 h [h]"
          ],
          "answerIndex": 0,
          "explanation": "b 代表不送氣清雙唇塞音 [p]，p 代表送氣清雙唇塞音 [pʰ]。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【禮貌規範】喺商務會議初次接見客戶時，最適當嘅日間問候語係：",
          "options": [
            "你好 (nei5 hou2)",
            "早晨 (zou2 san4)",
            "唔該 (m4 goi1)",
            "拜拜 (baai1 baai3)"
          ],
          "answerIndex": 0,
          "explanation": "「你好」（nei5 hou2）係初次見面最得體正式嘅敬語問候。"
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
    "title": "唔該與多謝：粵語致謝體系的語用分工 (Gratitude: m4 goi1 vs do1 ze6)",
    "level": "A1",
    "objective": "清晰區分「唔該」（勞動服務/請求）同「多謝」（餽贈禮品/讚美）嘅語用範疇，準確運用「唔該晒」。",
    "presentation": {
      "explanation": "廣東話中之致謝系統存在涇渭分明之雙軌分工，「唔該」與「多謝」在語用功能上嚴禁混淆，乃衡量粵語純正度之重要標誌：\n\n一、「唔該」之語用範圍：\n１．用於感謝他人付出勞動、時間或提供服務。例如侍應遞茶、司機停車、他人協助開門或搬運重物時，必須道謝「唔該」。\n２．用於禮貌請求或示意借過。例如：「唔該借借」（請借過）、「唔該埋單」（麻煩結帳）。\n３．加上動態助詞「晒」（表全體、徹底）構成「唔該晒」，表達「非常感謝您的鼎力相助」。\n\n二、「多謝」之語用範圍：\n１．專門用於接受物質禮品、金錢餽贈、新春利是（紅包）或受人宴請款待。例如收取生日禮物或受人請客時，必須道謝「多謝」。\n２．用於回應他人的言語讚美或肯定。\n\n辨析準則：他人為你付出勞力或提供便利，道「唔該」；他人將物質財物或言語讚譽贈予於你，道「多謝」。",
      "examples": [
        {
          "target": "唔該借借，我想過一過。",
          "reading": "m4 goi1 ze3 ze3, ngo5 soeng2 gwo3 jat1 gwo3. [m̩˨˩ kɔːi˥ tsɛː˧ tsɛː˧, ŋɔː˩˧ sœːŋ˧˥ kʷɔː˧ jɐt̚˥ kʷɔː˧] (M-GOY JEH-JEH, NGOH SEUNG GWOR YUT GWOR)",
          "translation": "Excuse me, please let me through."
        },
        {
          "target": "多謝你份生日禮物，真係好精緻！",
          "reading": "do1 ze6 nei5 fan6 saang1 jat6 lai5 mat6, zan1 hai6 hou2 zing1 zi3! [tɔː˥ tsɛː˨ nei˩˧ fɐn˨ saːŋ˥ jɐt̚˨ lɐi˩˧ mɐt̚˨, tsɐn˥ hɐi˨ hou˧˥ tsɪŋ˥ tsiː˧] (DOH-JEH NAY FUN SAHNG-YUT LY-MUT, JUN-HY HOH JING-JEE)",
          "translation": "Thank you for your birthday gift, it is really exquisite!"
        },
        {
          "target": "唔該晒你幫我手搬呢箱文件。",
          "reading": "m4 goi1 saai3 nei5 bong1 ngo5 sau2 bun1 ni1 soeng1 man4 gin2. [m̩˨˩ kɔːi˥ saːi˧ nei˩˧ pɔːŋ˥ ŋɔː˩˧ sɐu˧˥ puːn˥ niː˥ sœːŋ˥ mɐn˨˩ kiːn˧˥] (M-GOY-SYE NAY BONG NGOH-SAU BOON NEE-SEUNG MUN-GEEN)",
          "translation": "Thank you very much for helping me carry this box of documents."
        }
      ],
      "mnemonics": [
        "【詞源記憶法】「唔該」字面意為「不應該讓您如此勞累」，專敬勞動服務；「多謝」字面為「多加感謝餽贈」，專受禮物賞賜。"
      ],
      "culturalNotes": [
        "農曆新年期間收利是（紅包）時，必須雙手接過並連聲講「多謝」，隨後送上賀年吉言（如「祝你身體健康、心想事成」）。此時若誤講「唔該」，會被視為不諳傳統禮數。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【情境辨析】同事專程買咗杯熱咖啡請你飲作為鼓勵，你應對佢講：",
          "options": [
            "多謝你 (do1 ze6 nei5)",
            "唔該借借 (m4 goi1 ze3 ze3)",
            "早晨 (zou2 san4)",
            "對唔住 (deoi3 m4 zyu6)"
          ],
          "answerIndex": 0,
          "explanation": "受人宴請或餽贈飲品，必須使用「多謝」表達謝意。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【日常生活】搭乘地鐵準備落車，前方乘客阻擋出口，最適當嘅禮貌用語係：",
          "options": [
            "唔該借借 (m4 goi1 ze3 ze3)",
            "多謝借借 (do1 ze6 ze3 ze3)",
            "拜拜 (baai1 baai3)",
            "好高興 (hou2 gou1 hing3)"
          ],
          "answerIndex": 0,
          "explanation": "請求他人讓路或提供便利時，使用「唔該借借」（m4 goi1 ze3 ze3）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語用判斷】以下邊種情境必須使用「唔該」而絕對不可使用「多謝」？",
          "options": [
            "喺茶餐廳示意侍應添熱水或結帳",
            "婚宴上收取親友致贈嘅賀禮紅包",
            "生日聚會接過朋友送嘅香水禮盒",
            "被同事讚賞工作效率高超"
          ],
          "answerIndex": 0,
          "explanation": "指示或請求餐飲侍應服務，必須使用「唔該」。"
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
    "title": "粵語九聲六調與音高輪廓 (The Six Tones & Pitch Contours)",
    "level": "A1",
    "objective": "掌握現代廣東話六個舒聲調嘅音高輪廓（55, 35, 33, 21, 23, 22），熟練朗讀經典「詩史試時市事」音調序列。",
    "presentation": {
      "explanation": "粵語聲調系統完整保留中古漢語平上去入分陰陽之宏大格局。現代標準廣東話舒聲字共有六個獨立音位聲調，其五度標音音高輪廓如下：\n\n一、六調音高分佈與代表字：\n１．第1聲（陰平）：五五高平調，音高居於頂點，如「詩」、「天」。\n２．第2聲（陰上）：三五高升調，由中音升至最高音，如「史」、「好」。\n３．第3聲（陰去）：三三中平調，平穩適中，如「試」、「去」。\n４．第4聲（陽平）：二一低降調，音高落至最低胸音，如「時」、「人」。\n５．第5聲（陽上）：二三低升調，由低音緩升至中音，如「市」、「我」。\n６．第6聲（陽去）：二二低平調，低音平直微高於第4聲，如「事」、「食」。\n\n二、經典聲調口訣與辨義重要性：\n香港學界常用「三碗細牛腩麵」作為順序記憶第1至第6聲之代表語句。粵語聲調具極強辨義功能，聲調改變將徹底改變詞義，例如「買」（第5聲低升）與「賣」（第6聲低平）。",
      "examples": [
        {
          "target": "詩、史、試、時、市、事",
          "reading": "si1, si2, si3, si4, si5, si6 [siː˥, siː˧˥, siː˧, siː˨˩, siː˨˧, siː˨] (SEE1, SEE2, SEE3, SEE4, SEE5, SEE6)",
          "translation": "Poetry, history, test, time, market, matter (The standard 6-tone test series)"
        },
        {
          "target": "三碗細牛腩麵",
          "reading": "saam1 wun2 sai3 ngau4 naam5 min6 [saːm˥, wuːn˧˥, sɐi˧, ŋɐu˨˩, naːm˨˧, miːn˨] (SAHM WOON SYE NGAU NAHM MEEN)",
          "translation": "Three bowls of small beef brisket noodles (Tone sequence 1-2-3-4-5-6)"
        },
        {
          "target": "佢今日去街市買新鮮海鮮。",
          "reading": "keoi5 gam1 jat6 heoi3 gaai1 si5 maai5 san1 sin1 hoi2 sin1. [kʰɵy˩˧ kɐm˥ jɐt̚˨ hɵy˧ kaːi˥ siː˨˧ maːi˩˧ sɐn˥ siːn˥ hɔːi˧˥ siːn˥] (KUY GUM-YUT HOY GY-SEE MY SUN-SEEN HOY-SEEN)",
          "translation": "He/she is going to the wet market to buy fresh seafood today."
        }
      ],
      "mnemonics": [
        "【美食口訣法】「三碗細牛腩麵」（saam1 wun2 sai3 ngau4 naam5 min6）六個字嘅聲調正好完全對應 1、2、3、4、5、6 聲，念熟菜名即掌握聲調序列！"
      ],
      "culturalNotes": [
        "粵語嘅聲調差異至關重要：買（maai5）同賣（maai6）、糖（tong4，糖果）同湯（tong1，熱湯）、杯（bui1）同背（bui3），若發音聲調不準會引起嚴重語義混淆。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【音高辨析】粵語第2聲（陰上，如「史」si2、「好」hou2）嘅五度音高輪廓係：",
          "options": [
            "高升調 35",
            "高平調 55",
            "低降調 21",
            "低平調 22"
          ],
          "answerIndex": 0,
          "explanation": "第2聲（陰上）由中音（3度）升至最高音（5度）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【詞義辨析】「買」（maai5）同「賣」（maai6）喺聲調與含義上嘅核心差別係：",
          "options": [
            "「買」係第5聲（低升，購進），「賣」係第6聲（低平，售出）",
            "「買」係第6聲（售出），「賣」係第5聲（購進）",
            "兩者皆為第1聲且意思完全相同",
            "「買」係名詞，「賣」係形容詞"
          ],
          "answerIndex": 0,
          "explanation": "「買」為第5聲（maai5，23低升），「賣」為第6聲（maai6，22低平）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【口訣驗證】以下邊句地道粵語名句嘅字音聲調嚴格按照第1聲至第6聲依序排列？",
          "options": [
            "三碗細牛腩麵 (saam1 wun2 sai3 ngau4 naam5 min6)",
            "早晨李先生呀 (zou2 san4 lei5 sin1 saang1 aa3)",
            "唔該借借我過 (m4 goi1 ze3 ze3 ngo5 gwo3)",
            "你好陳大文生 (nei5 hou2 can4 daai6 man4 saang1)"
          ],
          "answerIndex": 0,
          "explanation": "三(1) 碗(2) 細(3) 牛(4) 腩(5) 麵(6) 完美對應 1 至 6 聲。"
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
    "title": "道別用語、拜拜與「得閒飲茶」 (Farewells & 'Dak Haan Jam Caa')",
    "level": "A1",
    "objective": "靈活運用「再見」、「拜拜」、「聽日見」同「我走先」，並掌握「得閒飲茶」嘅社交語用深意。",
    "presentation": {
      "explanation": "廣東話之道別表達兼具典雅規範與高度口語化特徵，不同場合有相應之言辭習慣：\n\n一、常用道別句式：\n１．「再見」：標準正式道別語，多見於廣播通告、學校課堂、正式會議散會或新聞播報。\n２．「拜拜」：源自英語借詞，已完全融入粵語日常生活，老少咸宜，適用於朋友、同事與日常道別。第二個音節常讀成變調高升音。\n３．「聽日見」：「聽日」即明天，意為「明天見」；「一陣見」意為「稍後見 / 一會兒見」。\n４．「我走先喇」：粵語副詞「先」習慣置於動詞之後表「先行一步」，乃告辭離席時極具禮貌之慣用語句。\n\n二、「得閒飲茶」之社交語用深意：\n「得閒飲茶」字面意為「有空時一起去飲茶品嚐點心」。在香港社交文化中，此語往往作為溫暖客氣之告別客套語，表達維繫情誼之美好願望，除非緊接約定具體時間地點，否則不宜死板視為即刻兌現之日程承諾。",
      "examples": [
        {
          "target": "我走先喇，聽日公司開會見！",
          "reading": "ngo5 zau2 sin1 laa3, ting1 jat6 gung1 si1 hoi1 wui6 gin3! [ŋɔː˩˧ tsɐu˧˥ siːn˥ laː˧, tʰɪŋ˥ jɐt̚˨ kʊŋ˥ siː˥ hɔːi˥ wuːi˨ kiːn˧] (NGOH JAU SEEN LAH, TING-YUT GOONG-SEE HOY-WOOEY GEEN!)",
          "translation": "I'm leaving first, see you at the company meeting tomorrow!"
        },
        {
          "target": "拜拜！得閒出嚟飲茶食飯啦。",
          "reading": "baai1 baai3! dak1 haan4 ceot1 lai4 jam2 caa4 sik6 faan6 laa1. [baːi˥ baːi˧! tɐk̚˥ haːn˨˩ tsʰɵt̚˥ lɐi˨˩ jɐm˧˥ tsʰaː˨˩ sɪk̚˨ faːn˨ laː˥] (BYE-BYE! DUK-HAHN CHUT-LY YUM-CHAH SIK-FAHN LAH!)",
          "translation": "Bye-bye! Let's get tea and a meal sometime when you're free."
        },
        {
          "target": "陳經理，慢行呀，再見！",
          "reading": "can4 ging1 lei5, maan6 haang4 aa3, zoi3 gin3! [tsʰɐn˨˩ kɪŋ˥ lei˩˧, maːn˨ haːŋ˨˩ aː˧, tsɔːi˧ kiːn˧] (CHUN GING-LEE, MAHN-HAHNG AH, JOY-GEEN!)",
          "translation": "Manager Chan, take care on your way, goodbye!"
        }
      ],
      "mnemonics": [
        "【語序記憶法】粵語講「我走先」（ngo5 zau2 sin1），副詞「先」放喺動詞後面，代表「我先走一步」，語氣謙遜有禮。"
      ],
      "culturalNotes": [
        "告別主人家或店主時，對方常客氣講「慢行」（maan6 haang4，請慢走/路上小心），此時客人最得體嘅回應係「唔使送」（m4 sai2 sung3，請留步/不用送），體恤主人辛勞。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【日常下班】下班離開辦公室向同組同事告別，最自然地道嘅說法係：",
          "options": [
            "我走先喇，聽日見！ (ngo5 zau2 sin1 laa3, ting1 jat6 gin3!)",
            "早晨陳小姐！ (zou2 san4 can4 siu2 ze2!)",
            "唔該埋單！ (m4 goi1 maai4 daan1!)",
            "對唔住呀！ (deoi3 m4 zyu6 aa3!)"
          ],
          "answerIndex": 0,
          "explanation": "「我走先喇，聽日見！」係放工離場最地道親切嘅粵語告別語。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【文化理解】友人離別時講「得閒飲茶啦」，最符合香港社交語用嘅真實意涵係：",
          "options": [
            "表達友好掛念嘅告別客套，意為「保持聯絡、改天相聚」",
            "要求你即刻預訂聽朝早茶位",
            "表示對你目前工作忙碌嘅嚴厲批評",
            "要求你即刻替對方支付茶水費用"
          ],
          "answerIndex": 0,
          "explanation": "「得閒飲茶」係香港極具代表性嘅人情味客套道別語。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【口語習慣】喺香港年輕同輩或朋友之間，最普遍使用嘅非正式告別語係：",
          "options": [
            "拜拜 (baai1 baai3)",
            "貴姓 (gwai3 sing3)",
            "請問 (cing2 man6)",
            "多謝 (do1 ze6)"
          ],
          "answerIndex": 0,
          "explanation": "「拜拜」（baai1 baai3）喺香港日常社交中普及率最高。"
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
    "title": "姓氏稱謂與禮貌問名 (Surnames, Titles & Polite Inquiries)",
    "level": "A1",
    "objective": "運用「請問點稱呼」與「貴姓」禮貌詢問姓名，熟練使用「我姓...」及粵語「先生/小姐/太太」後置稱謂。",
    "presentation": {
      "explanation": "在廣東話社交與商務往來中，禮貌詢問對方尊姓大名並準確使用稱謂乃人際交往之基石：\n\n一、禮貌問名句式：\n１．「請問點稱呼？」：最地道、最普遍之敬語問名句式。「請問」表禮貌請求，「點」表如何，「稱呼」表稱謂。\n２．「請問你貴姓？」：較為正式隆重之商務問法，「貴姓」意為「您尊貴的姓氏」。\n３．回應姓名方式：自報姓氏可道「我姓張」；報上慣用稱呼可道「叫我阿Ken得喇」。\n\n二、粵語稱謂語序特徵：\n廣東話之尊稱一律後置於姓氏之後：\n１．「先生」：黃先生。\n２．「小姐」：李小姐。\n３．「太太」：陳太太。\n日常熟人之間，常在單字名或英文名前加前綴「阿」（如「阿強」、「阿May」），以增添親切隨和之氣氛。",
      "examples": [
        {
          "target": "請問點稱呼呀？我姓張，叫我阿John得喇。",
          "reading": "cing2 man6 dim2 cing1 fu1 aa3? ngo5 sing3 zoeng1, giu3 ngo5 aa3 John dak1 laa3. [tsʰɪŋ˧˥ mɐn˨ tiːm˧˥ tsʰɪŋ˥ fuː˥ aː˧? ŋɔː˩˧ sɪŋ˧ tsœːŋ˥, kiːu˧ ŋɔː˩˧ aː˧ John tɐk̚˥ laː˧] (CHING-MUN DEEM CHING-FOO AH? NGOH SING JEUNG, GEW NGOH AH JOHN DUK LAH)",
          "translation": "May I ask how I should address you? My surname is Cheung, you can just call me John."
        },
        {
          "target": "張先生，呢位係我哋市場部嘅王小姐。",
          "reading": "zoeng1 sin1 saang1, ni1 wai2 hai6 ngo5 dei6 si5 coeng4 bou6 ge3 wong4 siu2 ze2. [tsœːŋ˥ siːn˥ saːŋ˥, niː˥ wɐi˧˥ hɐi˨ ŋɔː˩˧ tei˨ siː˨˧ tsʰœːŋ˨˩ pou˨ kɛː˧ wɔːŋ˨˩ siːu˧˥ tsɛː˧˥] (JEUNG SEEN-SAHNG, NEE-WY HY NGOH-DAY SEE-CHEUNG BO GEH WONG SEW-JEH)",
          "translation": "Mr. Cheung, this is Miss Wong from our marketing department."
        },
        {
          "target": "幸會幸會，好高興喺度識到咁多位朋友。",
          "reading": "hang6 wui6 hang6 wui6, hou2 gou1 hing3 hai2 dou6 sik1 dou2 gam3 do1 wai2 pang4 jau5. [hɐŋ˨ wuːi˨ hɐŋ˨ wuːi˨, hou˧˥ kou˥ hɪŋ˧ hɐi˩˧ tou˨ sɪk̚˥ tou˧˥ kɐm˧ tɔː˥ wɐi˧˥ pʰɐŋ˨˩ jɐu˩˧] (HUNG-WOOEY HUNG-WOOEY, HOH GOH-HING HY-DOH SIK-DOH GUM-DOH WY PUNG-YAU)",
          "translation": "Charmed to meet you, so pleased to meet so many friends here."
        }
      ],
      "mnemonics": [
        "【稱謂語序法】記住粵語稱謂「姓氏在前、稱謂在後」：黃先生（Wong Sin-saang）、李小姐（Lee Siu-ze），恪守東方尊長禮序。"
      ],
      "culturalNotes": [
        "喺香港職場同社交圈子，前綴「阿」（aa3，如阿Ming、阿強）非常普及，既避免直呼全名嘅生硬疏離，又保持親切溫和嘅同袍關係。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【商務拜訪】初次與客戶見面，最得體禮貌詢問對方姓名嘅句式係：",
          "options": [
            "請問點稱呼？ (cing2 man6 dim2 cing1 fu1?)",
            "你走先喇！ (nei5 zau2 sin1 laa3!)",
            "唔該借借！ (m4 goi1 ze3 ze3!)",
            "多謝禮物！ (do1 ze6 lai5 mat6!)"
          ],
          "answerIndex": 0,
          "explanation": "「請問點稱呼？」係粵語詢問姓名最得體標準嘅敬語。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【稱謂規範】向大家正式介紹「黃先生」時，正確嘅粵語詞序係：",
          "options": [
            "黃先生 (wong4 sin1 saang1)",
            "先生黃 (sin1 saang1 wong4)",
            "黃多謝 (wong4 do1 ze6)",
            "黃早晨 (wong4 zou2 san4)"
          ],
          "answerIndex": 0,
          "explanation": "粵語稱謂嚴格遵循「姓氏在前、稱謂在後」：黃先生 (wong4 sin1 saang1)。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【問答匹配】當對方禮貌詢問「請問點稱呼？」時，最適切自然嘅答覆係：",
          "options": [
            "我姓李，叫我阿Ben得喇。 (ngo5 sing3 lei5, giu3 ngo5 aa3 Ben dak1 laa3.)",
            "唔該晒你幫手搬枱。 (m4 goi1 saai3 nei5 bong1 sau2 bun1 toi2.)",
            "聽日公司再見啦。 (ting1 jat6 gung1 si1 zoi3 gin3 laa1.)",
            "得閒出嚟飲茶啦。 (dak1 haan4 ceot1 lai4 jam2 caa4 laa1.)"
          ],
          "answerIndex": 0,
          "explanation": "報出姓氏（我姓...）及慣用稱呼（叫我...得喇）係最標準完整嘅回應。"
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
    "title": "人稱代詞系統：我、你、佢與複數後綴「哋」 (Personal Pronouns & Plural Suffix dei6)",
    "level": "A1",
    "objective": "掌握粵語單數人稱代詞（我、你、佢）及加上複數後綴「哋」（我哋、你哋、佢哋）之語法結構。",
    "presentation": {
      "explanation": "廣東話之人稱代詞系統簡潔明晰，第三人稱代詞不分性別，複數形式一律通過後綴「哋」構詞：\n\n一、單數人稱代詞：\n１．第一人稱單數：「我」，指稱自己。\n２．第二人稱單數：「你」，指稱對方（粵語無北方話「您」字，對尊長一律通過稱謂如「黃先生」、「陳經理」表達敬意）。\n３．第三人稱單數：「佢」，兼指「他、她、它」，無性別與物稱差別，口語高度通用。\n\n二、複數人稱代詞（代詞根＋「哋」）：\n１．「我哋」：我們。\n２．「你哋」：你們。\n３．「佢哋」：他們、她們、它們。\n\n後綴「哋」僅用於人稱代詞及部分指人名詞（如「朋友哋」、「後生仔哋」），不可用於普通非指人物件。",
      "examples": [
        {
          "target": "我哋全部都係香港大學嘅學生。",
          "reading": "ngo5 dei6 cyun4 bou6 dou1 hai6 hoeng1 gong2 daai6 hok6 ge3 hok6 saang1. [ŋɔː˩˧ tei˨ tsʰyːn˨˩ pou˨ tou˥ hɐi˨ hœːŋ˥ kɔːŋ˧˥ taːi˨ hɔːk˨ kɛː˧ hɔːk˨ saːŋ˥] (NGOH-DAY TSUEN-BO DOH HY HEUNG-GONG DY-HOK GEH HOK-SAHNG)",
          "translation": "We are all students at the University of Hong Kong."
        },
        {
          "target": "佢哋今日下晝約咗去中環食飯。",
          "reading": "keoi5 dei6 gam1 jat6 haa6 zau3 joek3 zo2 heoi3 zung1 waan4 sik6 faan6. [kʰɵy˩˧ tei˨ kɐm˥ jɐt̚˨ haː˨ tsɐu˧ jœːk˧ tsɔː˧˥ hɵy˧ tsʊŋ˥ waːn˨˩ sɪk̚˨ faːn˨] (KUY-DAY GUM-YUT HAH-JAU YEUK-JOR HOY JOONG-WAHN SIK-FAHN)",
          "translation": "They arranged to have a meal in Central this afternoon."
        },
        {
          "target": "你哋兩位聽朝使唔使返工呀？",
          "reading": "nei5 dei6 loeng5 wai2 ting1 ziu1 sai2 m4 sai2 faan1 gung1 aa3? [nei˩˧ tei˨ lœːŋ˩˧ wɐi˧˥ tʰɪŋ˥ tsiːu˥ sɐi˧˥ m̩˨˩ sɐi˧˥ faːn˥ kʊŋ˥ aː˧] (NAY-DAY LEUNG-WY TING-JEW SYE M-SYE FAHN-GOONG AH?)",
          "translation": "Do the two of you need to go to work tomorrow morning?"
        }
      ],
      "mnemonics": [
        "【構詞記憶法】單數代詞加上後綴「哋」（dei6），好似一群人手拉手「喺同一塊地（哋）上」，即成複數群體：我哋、你哋、佢哋！"
      ],
      "culturalNotes": [
        "廣東話日常對話中並無書面語「您」之敬稱。粵語社會中表達尊敬，係直接使用對方之職業稱謂或姓氏尊稱（如「李校長」、「張律師」、「陳伯」），直呼「你」配以尊稱即合乎禮儀。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【代詞替換】欲將「佢一個人去行街」改為複數「他們一起去逛街」，正確代詞係：",
          "options": [
            "佢哋 (keoi5 dei6)",
            "我哋 (ngo5 dei6)",
            "你哋 (nei5 dei6)",
            "大家 (daai6 gaa1)"
          ],
          "answerIndex": 0,
          "explanation": "第三人稱複數「他們/她們」在粵語中為「佢哋」（keoi5 dei6）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語法規則】關於粵語第三人稱單數代詞「佢」（keoi5），以下描述何者完全正確？",
          "options": [
            "口語中不分性別，兼指男性、女性及事物",
            "僅專門指代女性",
            "僅專門指代男性",
            "只能指代非人類動物"
          ],
          "answerIndex": 0,
          "explanation": "粵語代詞「佢」在口語中兼表他、她、它，不分性別與物稱。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【句子填空】「＿＿＿今晚一齊去銅鑼灣睇戲啦！」（提議我們大家一起去）應填入：",
          "options": [
            "我哋 (ngo5 dei6)",
            "佢 (keoi5)",
            "你 (nei5)",
            "佢哋 (keoi5 dei6)"
          ],
          "answerIndex": 0,
          "explanation": "提議包含說話者自身之集體行動，應使用第一人稱複數「我哋」（ngo5 dei6）。"
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
    "title": "判斷動詞「係」與否定結構「唔係」 (The Copula hai6 & Negation m4 hai6)",
    "level": "A1",
    "objective": "熟練運用繫詞「係」（表肯定判斷）與「唔係」（表否定判斷）建構主謂賓基本陳述句。",
    "presentation": {
      "explanation": "粵語基本句型遵循「主語＋謂語＋賓語」結構。其中判斷動詞「係」相當於英語繫詞，否定形式則在動詞前加否定詞「唔」：\n\n一、肯定判斷句（主語＋係＋名詞/形容詞短語）：\n１．表示身份、國籍或職業：例如「我係工程師」、「佢係香港人」。\n２．表示事物屬性：「呢部係最新款電話」。\n\n二、否定判斷句（主語＋唔係＋名詞/形容詞短語）：\n１．粵語核心否定詞為「唔」（鼻音獨立成音節，第4聲低降調），置於動詞「係」之前構成「唔係」。\n２．例如：「我唔係遊客，我喺呢度住」、「嗰個唔係我嘅手袋」。",
      "examples": [
        {
          "target": "陳先生係一間中學嘅英文老師。",
          "reading": "can4 sin1 saang1 hai6 jat1 gaan1 zung1 hok6 ge3 jing1 man4 lou5 si1. [tsʰɐn˨˩ siːn˥ saːŋ˥ hɐi˨ jɐt̚˥ kaːn˥ tsʊŋ˥ hɔːk˨ kɛː˧ jɪŋ˥ mɐn˨˩ lou˩˧ siː˥] (CHUN SEEN-SAHNG HY YUT-GAHN JOONG-HOK GEH YING-MUN LOH-SEE)",
          "translation": "Mr. Chan is an English teacher at a secondary school."
        },
        {
          "target": "我唔係護士，我係醫院嘅藥劑師。",
          "reading": "ngo5 m4 hai6 wu6 si6, ngo5 hai6 ji1 jyun2 ge3 joek6 zai1 si1. [ŋɔː˩˧ m̩˨˩ hɐi˨ wuː˨ siː˨, ŋɔː˩˧ hɐi˨ jiː˥ jyːn˧˥ kɛː˧ jœːk˨ tsɐi˥ siː˥] (NGOH M-HY WOO-SEE, NGOH HY YEE-YUEN GEH YEUK-JY-SEE)",
          "translation": "I am not a nurse; I am a pharmacist at the hospital."
        },
        {
          "target": "呢位女士唔係佢太太，係佢生意拍檔。",
          "reading": "ni1 wai2 neoi5 si6 m4 hai6 keoi5 taai3 taai2, hai6 keoi5 saang1 ji3 paak3 dong3. [niː˥ wɐi˧˥ nɵy˩˧ siː˨ m̩˨˩ hɐi˨ kʰɵy˩˧ tʰaːi˧ tʰaːi˧˥, hɐi˨ kʰɵy˩˧ saːŋ˥ jiː˧ pʰaːk̚˧ tɔːŋ˧] (NEE-WY NUI-SEE M-HY KUY TY-TY, HY KUY SAHNG-YEE PAH-DONG)",
          "translation": "This lady is not his wife; she is his business partner."
        }
      ],
      "mnemonics": [
        "【發音助記法】否定詞「唔」（m4）閉唇發出鼻音低調，好似搖頭沉聲示意「不」；「唔係」（m4 hai6）即是堅決否定。"
      ],
      "culturalNotes": [
        "粵語中回答他人詢問時，單獨講一聲「係呀」（hai6 aa3）即表示贊同或「是的」；若表示否定，則講「唔係呀」（m4 hai6 aa3），語氣自然溫和。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【句型轉換】將肯定句「佢係我哋公司經理」改為否定句，正確表達係：",
          "options": [
            "佢唔係我哋公司經理 (keoi5 m4 hai6 ngo5 dei6 gung1 si1 ging1 lei5)",
            "佢冇係我哋公司經理 (keoi5 mou5 hai6...)",
            "佢未係我哋公司經理 (keoi5 mei6 hai6...)",
            "佢咪係我哋公司經理 (keoi5 mai6 hai6...)"
          ],
          "answerIndex": 0,
          "explanation": "否定動詞「係」必須使用「唔」，構成「唔係」（m4 hai6）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語法辨析】喺「我＿＿＿日本人，我＿＿＿韓國人」中，表「不是...而是...」之正確詞語搭配係：",
          "options": [
            "唔係……係……",
            "冇……有……",
            "未……係……",
            "唔……都……"
          ],
          "answerIndex": 0,
          "explanation": "「唔係……係……」表達否定前者、肯定後者之判斷。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【正誤判斷】以下邊句粵語判斷句嘅語法完全正確？",
          "options": [
            "佢係一名經驗豐富嘅建築師。",
            "佢冇係一名建築師。",
            "佢係唔建築師。",
            "佢建築師係唔。"
          ],
          "answerIndex": 0,
          "explanation": "「主語＋係＋名詞短語」係標準正確之粵語判斷句。"
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
    "title": "領屬助詞「嘅」與定語修飾結構 (Possessive Particle ge3 & Modifiers)",
    "level": "A1",
    "objective": "掌握結構助詞「嘅」（ge3）在表示所有關係（我嘅/你嘅）及形容詞修飾名詞時之核心用法。",
    "presentation": {
      "explanation": "助詞「嘅」係廣東話中使用頻率最高之結構助詞之一，主要承擔兩種語法功能：\n\n一、表示領屬所有關係：\n１．代詞/名詞＋「嘅」＋中心名詞：例如「我嘅手錶」、「公司嘅文件」。\n２．領屬代詞省略中心語：「呢本小說係我嘅」（這本小說是我的）。\n３．親屬關係中助詞可省略：在關係親近之家庭成員前，常可省去「嘅」，直接講「我阿爸」、「我阿哥」。\n\n二、形容詞修飾名詞（定語標記）：\n１．形容詞短語＋「嘅」＋名詞：例如「好靚嘅衫」（漂亮的衣服）、「新鮮嘅水果」。\n２．複合修飾結構：「好平好食嘅茶餐廳」（便宜好吃的茶餐廳）。",
      "examples": [
        {
          "target": "呢部銀色手提電腦係黃小姐嘅。",
          "reading": "ni1 bou6 ngan4 sik1 sau2 tai4 din6 nou5 hai6 wong4 siu2 ze2 ge3. [niː˥ pou˨ ŋɐn˨˩ sɪk̚˥ sɐu˧˥ tʰɐi˨˩ tiːn˨ nou˩˧ hɐi˨ wɔːŋ˨˩ siːu˧˥ tsɛː˧˥ kɛː˧] (NEE-BO N GUN-SIK SAU-TY DEEN-NOH HY WONG SEW-JEH GEH)",
          "translation": "This silver laptop belongs to Miss Wong."
        },
        {
          "target": "我好鍾意佢設計嗰套好典雅嘅晚裝。",
          "reading": "ngo5 hou2 zung1 ji3 keoi5 cit3 gai3 go2 tou3 hou2 din2 ngaa5 ge3 maan5 zong1. [ŋɔː˩˧ hou˧˥ tsʊŋ˥ jiː˧ kʰɵy˩˧ tsʰiːt˧ kɐi˧ kɔː˧˥ tʰou˧ hou˧˥ tiːn˧˥ ŋaː˩˧ kɛː˧ maːn˩˧ tsɔːŋ˥] (NGOH HOH JOONG-YEE KUY CHEET-GY GOH-TOE HOH DEEN-NGAH GEH MAHN-JONG)",
          "translation": "I really like that very elegant evening gown she designed."
        },
        {
          "target": "今日天氣好好，我同我阿哥去行山。",
          "reading": "gam1 jat6 tin1 hei3 hou2 hou2, ngo5 tung4 ngo5 aa3 go1 heoi3 haang4 saan1. [kɐm˥ jɐt̚˨ tʰiːn˥ hei˧ hou˧˥ hou˧˥, ŋɔː˩˧ tʰʊŋ˨˩ ŋɔː˩˧ aː˧ kɔː˥ hɵy˧ haːŋ˨˩ saːn˥] (GUM-YUT TEEN-HAY HOH-HOH, NGOH TOONG NGOH AH-GOH HOY HAHNG-SAHN)",
          "translation": "The weather is great today; I am going hiking with my older brother."
        }
      ],
      "mnemonics": [
        "【口訣法】「嘅」（ge3）字中平音，好似一條連繫紐帶，將主人與物品緊緊連埋一齊：我嘅筆、你嘅書、大家嘅家！"
      ],
      "culturalNotes": [
        "廣東話日常習慣將「我嘅媽媽」簡化為「我阿媽」或「我媽咪」，直呼親切自然。但在正式書面轉述或商務引介時，則多稱「我嘅母親」或「家母」。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【表達所有】欲表達「這是陳律師的公事包」，最道地之粵語句式係：",
          "options": [
            "呢個係陳律師嘅公事包。 (ni1 go3 hai6 can4 leot6 si1 ge3 gung1 si6 baau1.)",
            "呢個係陳律師公事包嘅。",
            "呢個陳律師係嘅公事包。",
            "呢個公事包陳律師係嘅。"
          ],
          "answerIndex": 0,
          "explanation": "領屬助詞「嘅」置於所有者與名詞之間：陳律師嘅公事包。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語法填空】「呢間餐廳有好多好食＿＿＿點心。」空格內應填入之結構助詞係：",
          "options": [
            "嘅 (ge3)",
            "哋 (dei6)",
            "喺 (hai2)",
            "晒 (saai3)"
          ],
          "answerIndex": 0,
          "explanation": "形容詞修飾名詞（好食嘅點心）需使用定語標記「嘅」（ge3）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語用語義】句子「呢部車係佢哋嘅」所表達之真實含義係：",
          "options": [
            "這輛車是屬於他們的",
            "這輛車是他們駕駛的",
            "他們正在購買這輛車",
            "他們討厭這輛車"
          ],
          "answerIndex": 0,
          "explanation": "「代詞＋嘅」作謂語表所有權歸屬。"
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
    "title": "粵語疑問句式：句末助詞「呀」與正反問「係唔係」 (Questions: aa4 & 係唔係 hai6 m4 hai6)",
    "level": "A1",
    "objective": "掌握粵語是非問句之兩種主要構式：句末疑問語氣助詞「呀/咩」與正反重疊問句「係唔係」。",
    "presentation": {
      "explanation": "廣東話形成疑問句之手段極為豐富靈活，日常是非問句主要有兩大核心構式：\n\n一、正反重疊問句：\n１．動詞正反重疊：「主語＋動詞＋唔＋動詞＋賓語」。例如：「你係唔係張先生？」（你是不是張先生？）\n２．行為動詞正反問：「你飲唔飲奶茶？」（你喝不喝奶茶？）「佢去唔去尖沙咀？」（他去不去尖沙咀？）\n３．特點：正反問句內部已包含疑問焦點，句末通常不再需要重複加疑問詞。\n\n二、句末疑問助詞問句：\n１．陳述句＋「呀？」（中性禮貌詢問，如「你係學生呀？」）。\n２．陳述句＋「咩？」（帶有詫異、懷疑或不確定語氣，如「佢今日唔返工咩？」）。",
      "examples": [
        {
          "target": "請問李經理喺唔喺辦公室入面呀？",
          "reading": "cing2 man6 lei5 ging1 lei5 hai2 m4 hai2 baan6 gung1 sat1 jap6 min6 aa3? [tsʰɪŋ˧˥ mɐn˨ lei˩˧ kɪŋ˥ lei˩˧ hɐi˩˧ m̩˨˩ hɐi˩˧ paːn˨ kʊŋ˥ sɐt̚˥ jɐp˨ miːn˨ aː˧] (CHING-MUN LEE GING-LEE HY M-HY BAHN-GOONG-SUT YUP-MEEN AH?)",
          "translation": "Excuse me, is Manager Lee inside the office?"
        },
        {
          "target": "你哋聽日得唔得閒一齊去食日本菜呀？",
          "reading": "nei5 dei6 ting1 jat6 dak1 m4 dak1 haan4 jat1 cai4 heoi3 sik6 jat6 bun2 coi3 aa3? [nei˩˧ tei˨ tʰɪŋ˥ jɐt̚˨ tɐk̚˥ m̩˨˩ tɐk̚˥ haːn˨˩ jɐt̚˥ tsʰɐi˨˩ hɵy˧ sɪk̚˨ jɐt̚˨ puːn˧˥ tsʰɔːi˧ aː˧] (NAY-DAY TING-YUT DUK M-DUK-HAHN YUT-TSY HOY SIK YUT-BOON-TSOY AH?)",
          "translation": "Are you all free to go eat Japanese food together tomorrow?"
        },
        {
          "target": "呢件外套真係你嘅咩？顏色好似有啲唔同。",
          "reading": "ni1 gin6 ngoi6 tou3 zan1 hai6 nei5 ge3 me1? ngaan4 sik1 hou2 ci5 jau5 di1 m4 tung4. [niː˥ kiːn˨ ŋɔːi˨ tʰou˧ tsɐn˥ hɐi˨ nei˩˧ kɛː˧ mɛː˥? ŋaːn˨˩ sɪk̚˥ hou˧˥ tsʰiː˩˧ jɐu˩˧ tiː˥ m̩˨˩ tʰʊŋ˨˩] (NEE-GEEN NGOI-TOE JUN HY NAY GEH MEH? NGAHN-SIK HOH-TSZEE YAU-DEE M-TOONG)",
          "translation": "Is this coat really yours? The color seems a bit different."
        }
      ],
      "mnemonics": [
        "【句式規律法】粵語問句「正反相疊」（係唔係、去唔去、食唔食），先肯定後否定，節奏明快，一問即明！"
      ],
      "culturalNotes": [
        "在茶餐廳或餐廳點餐時，侍應常用極簡正反問詢問顧客需求，如「飲熱定凍？」（喝熱的還是凍的？）、「要唔要加飯？」（要不要加米飯？），直接回答「熱」或「要」即可。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【問句構造】欲以正反問句詢問對方「你今天去不去九龍塘」，正確句式係：",
          "options": [
            "你今日去唔去九龍塘？ (nei5 gam1 jat6 heoi3 m4 heoi3 gau2 lung4 tong4?)",
            "你今日去九龍塘係唔？",
            "你今日去唔九龍塘？",
            "你今日係九龍塘去？"
          ],
          "answerIndex": 0,
          "explanation": "正反問句將動詞正反重疊：「去唔去」（heoi3 m4 heoi3）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語氣辨析】句末助詞「咩」（me1，如「佢唔知咩？」）帶有何種典型語氣色彩？",
          "options": [
            "驚訝、反詰或難以置信之懷疑語氣",
            "極度恭敬之謙卑語氣",
            "冷淡命令之威嚴語氣",
            "歡欣慶祝之熱烈語氣"
          ],
          "answerIndex": 0,
          "explanation": "「咩」（me1）常用於表示詫異、反問或不相信之語氣。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【問答匹配】對問句「你係唔係陳大文先生？」之標準肯定與否定答覆分別為：",
          "options": [
            "肯定：「係，我係」／ 否定：「唔係，我姓黃」",
            "肯定：「好，我哋」／ 否定：「冇，我唔」",
            "肯定：「有，我知」／ 否定：「未，我早」",
            "肯定：「得，我去」／ 否定：「咪，我講」"
          ],
          "answerIndex": 0,
          "explanation": "回答判斷動詞問句時，肯定答「係」，否定答「唔係」。"
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
    "title": "指示詞體系：呢個、嗰個與方位代詞 (Demonstratives: ni1 vs go2 & Locations)",
    "level": "A1",
    "objective": "掌握粵語近指指示詞「呢」（ni1）與遠指指示詞「嗰」（go2）及其引申之處所方位代詞（呢度、嗰度、邊度）。",
    "presentation": {
      "explanation": "廣東話之指示詞系統層次分明，以空間距離之遠近為基準，並與量詞及處所名詞緊密結合：\n\n一、近指代詞（靠近說話者空間）：\n１．「呢個」：這個（物件/人）。\n２．「呢度」或「呢便」：這裡、這兒、這邊。\n３．「呢啲」：這些（複數指示）。\n\n二、遠指代詞（遠離說話者空間）：\n１．「嗰個」：那個（物件/人）。\n２．「嗰度」或「嗰便」：那裡、那兒、那邊。\n３．「嗰啲」：那些（複數指示）。\n\n三、疑問處所代詞：\n１．「邊度」或「邊便」：哪裡、哪兒、何處。例如：「地鐵站喺邊度？」（地鐵站在哪裡？）。",
      "examples": [
        {
          "target": "唔該借借，我想睇下呢個櫥窗入面嗰隻手錶。",
          "reading": "m4 goi1 ze3 ze3, ngo5 soeng2 tai2 haa5 ni1 go3 cyu4 coeng1 jap6 min6 go2 zek3 sau2 biu1. [m̩˨˩ kɔːi˥ tsɛː˧ tsɛː˧, ŋɔː˩˧ sœːŋ˧˥ tʰɐi˧˥ haː˩˧ niː˥ kɔː˧ tsʰyː˨˩ tsʰœːŋ˥ jɐp˨ miːn˨ kɔː˧˥ tsɛːk˧ sɐu˧˥ piːu˥] (M-GOY JEH-JEH, NGOH SEUNG TY-HAH NEE-GOH CHU-CHEUNG YUP-MEEN GOH-JEK SAU-BEW)",
          "translation": "Excuse me, I would like to look at that watch inside this display window."
        },
        {
          "target": "請問最近嘅洗手間喺邊度呀？喺嗰度轉右就係。",
          "reading": "cing2 man6 zeoi3 kan5 ge3 sai2 sau2 gaan1 hai2 bin1 dou6 aa3? hai2 go2 dou6 zyun3 jau6 zau6 hai6. [tsʰɪŋ˧˥ mɐn˨ tsɵy˧ kʰɐn˩˧ kɛː˧ sɐi˧˥ sɐu˧˥ kaːn˥ hɐi˩˧ piːn˥ tou˨ aː˧? hɐi˩˧ kɔː˧˥ tou˨ tsyn˧ jɐu˨ tsɐu˨ hɐi˨] (CHING-MUN JOY-KUN GEH SYE-SAU-GAHN HY BEEN-DOH AH? HY GOH-DOH JUEN-YAU JAU-HY)",
          "translation": "Excuse me, where is the nearest restroom? Turn right over there and it is right there."
        },
        {
          "target": "呢啲全部都係今日新鮮出爐嘅蛋撻。",
          "reading": "ni1 di1 cyun4 bou6 dou1 hai6 gam1 jat6 san1 sin1 ceot1 lou4 ge3 daan6 taat1. [niː˥ tiː˥ tsʰyːn˨˩ pou˨ tou˥ hɐi˨ kɐm˥ jɐt̚˨ sɐn˥ siːn˥ tsʰɵt̚˥ lou˨˩ kɛː˧ taːn˨ tʰaːt̚˥] (NEE-DEE TSEN-BO DOH HY GUM-YUT SUN-SEEN CHUT-LOH GEH DAHN-TAHT)",
          "translation": "These are all fresh out of the oven egg tarts today."
        }
      ],
      "mnemonics": [
        "【音義對比法】近在眼前用「呢」（ni1，近指），遠在天邊用「嗰」（go2，遠指），尋求方位問「邊度」（bin1 dou6）！"
      ],
      "culturalNotes": [
        "喺香港問路時，先講一聲禮貌呼語「唔該請問……喺邊度？」（m4 goi1 cing2 man6 ... hai2 bin1 dou6?），對方指路時常講「喺嗰便、行過去就係」，語調親切簡潔。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【問路表達】欲禮貌向路人詢問「請問巴士總站在哪裡？」，正確粵語句式係：",
          "options": [
            "請問巴士總站喺邊度呀？ (cing2 man6 baa1 si2 zung2 zaam6 hai2 bin1 dou6 aa3?)",
            "請問巴士總站喺呢度呀？",
            "請問巴士總站喺嗰度呀？",
            "請問巴士總站係邊個呀？"
          ],
          "answerIndex": 0,
          "explanation": "詢問方位處所使用疑問代詞「邊度」（bin1 dou6）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【指示辨析】指著近處手中的文件說「這份文件很重要」，應使用之指示詞係：",
          "options": [
            "呢份 (ni1 fan6)",
            "嗰份 (go2 fan6)",
            "邊份 (bin1 fan6)",
            "邊度 (bin1 dou6)"
          ],
          "answerIndex": 0,
          "explanation": "近指量詞短語為「呢份」（ni1 fan6）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【空間對應】「呢度」對應「這裡」，「嗰度」對應「那裡」，則「邊度」對應之現代漢語詞彙係：",
          "options": [
            "哪裡 / 何處",
            "這裡",
            "那裡",
            "到處"
          ],
          "answerIndex": 0,
          "explanation": "「邊度」（bin1 dou6）為粵語處所疑問代詞，相當於「哪裡/何處」。"
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
    "title": "基數一至十與入聲韻尾辨析 (Numbers 1-10 & Checked Tone Finals -p, -t, -k)",
    "level": "A1",
    "objective": "掌握粵語基數一至十之標準發音，並深入辨析入聲塞音韻尾（-p, -t, -k）之唯閉不發音特徵。",
    "presentation": {
      "explanation": "粵語完整保留中古漢語入聲韻尾系統。基數一至十之語音結構充分展現入聲塞音唯閉音特徵：\n\n一、基數一至十發音序列：\n１．一（jat1）：陰入聲，以舌尖塞音 [-t̚] 收尾。\n２．二（ji6）：陽去聲，低平調。\n３．三（saam1）：陰平聲，雙唇鼻音 [-m] 閉唇收尾。\n４．四（sei3）：陰去聲，中平調。\n５．五（ng5）：陽上聲，鼻音獨立成音節。\n６．六（luk6）：陽入聲，以舌根塞音 [-k̚] 喉部收尾。\n７．七（cat1）：陰入聲，送氣塞擦音聲母配舌尖塞音 [-t̚] 收尾。\n８．八（baat3）：中入聲，長元音配舌尖塞音 [-t̚] 收尾。\n９．九（gau2）：陰上聲，高升調。\n１０．十（sap6）：陽入聲，以雙唇塞音 [-p̚] 緊閉雙唇收尾。\n\n二、入聲韻尾核心要領：\n粵語入聲韻尾 [-p̚]、[-t̚]、[-k̚] 均為「唯閉音」，即發音器官到位阻斷氣流後即刻停頓，絕不可爆破出聲。",
      "examples": [
        {
          "target": "一、二、三、四、五、六、七、八、九、十。",
          "reading": "jat1, ji6, saam1, sei3, ng5, luk6, cat1, baat3, gau2, sap6. [jɐt̚˥, jiː˨, saːm˥, sei˧, ŋ̍˩˧, lʊk̚˨, tsʰɐt̚˥, paːt̚˧, kɐu˧˥, sɐp̚˨] (YUT, YEE, SAHM, SAY, NG, LOOK, CHUT, BAHT, GAU, SUP)",
          "translation": "One, two, three, four, five, six, seven, eight, nine, ten."
        },
        {
          "target": "呢度一共有七位客人同八杯熱奶茶。",
          "reading": "ni1 dou6 jat1 gung6 jau5 cat1 wai2 haak3 jan4 tung4 baat3 bui1 jit6 naai5 caa4. [niː˥ tou˨ jɐt̚˥ kʊŋ˨ jɐu˩˧ tsʰɐt̚˥ wɐi˧˥ haːk̚˧ jɐn˨˩ tʰʊŋ˨˩ paːt̚˧ puːi˥ jiːt̚˨ naːi˩˧ tsʰaː˨˩] (NEE-DOH YUT-GOONG YAU CHUT-WY HAHK-YUN TOONG BAHT-BOOY YEET NY-CHAH)",
          "translation": "There are seven guests and eight cups of hot milk tea in total here."
        },
        {
          "target": "我買咗六個蘋果同十個橙。",
          "reading": "ngo5 maai5 zo2 luk6 go3 ping4 gwo2 tung4 sap6 go3 caang2. [ŋɔː˩˧ maːi˩˧ tsɔː˧˥ lʊk̚˨ kɔː˧ pʰɪŋ˨˩ kʷɔː˧˥ tʰʊŋ˨˩ sɐp̚˨ kɔː˧ tsʰaːŋ˧˥] (NGOH MY-JOR LOOK-GOH PING-GWOR TOONG SUP-GOH CHAHNG)",
          "translation": "I bought six apples and ten oranges."
        }
      ],
      "mnemonics": [
        "【入聲收尾法】讀「十」（sap6）時雙唇緊閉不開，讀「一」（jat1）、「七」（cat1）、「八」（baat3）時舌尖頂住上齒齦停住，讀「六」（luk6）時舌根頂住軟顎，短促有力！"
      ],
      "culturalNotes": [
        "在香港傳統文化中，數字「八」（baat3）因與「發」（faat3，發財）諧音而極受喜愛；數字「三」（saam1）諧音「生」（生猛活力）；數字「四」（sei3）諧音「死」（sei2）則在樓層編號或車牌選擇時常被避忌。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【入聲辨析】以下邊一組數字在粵語中全部屬於入聲字（以 -p, -t, -k 收尾）？",
          "options": [
            "一 (jat1)、六 (luk6)、七 (cat1)、八 (baat3)、十 (sap6)",
            "二 (ji6)、三 (saam1)、四 (sei3)、五 (ng5)、九 (gau2)",
            "三 (saam1)、五 (ng5)、九 (gau2)",
            "二 (ji6)、四 (sei3)、八 (baat3)"
          ],
          "answerIndex": 0,
          "explanation": "一(-t)、六(-k)、七(-t)、八(-t)、十(-p) 均為入聲字。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語音細節】粵語「十」（sap6）嘅韻尾屬於邊種入聲塞音？",
          "options": [
            "雙唇塞音 [-p̚]（發音結束時緊閉雙唇）",
            "舌尖塞音 [-t̚]",
            "舌根塞音 [-k̚]",
            "雙唇鼻音 [-m]"
          ],
          "answerIndex": 0,
          "explanation": "「十」（sap6）以雙唇閉塞音 [-p̚] 結尾。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【文化音韻】廣東人喜愛數字「八」（baat3），主要因為其發音與邊個吉祥詞語諧音？",
          "options": [
            "發（faat3，發財富貴）",
            "生（saang1，生生不息）",
            "福（fuk1，幸福安康）",
            "吉（gat1，大吉大利）"
          ],
          "answerIndex": 0,
          "explanation": "「八」（baat3）與「發」（faat3）同韻且音近，象徵發財興旺。"
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
    "title": "百千萬數詞與「兩」同「二」之量詞搭配 (Hundreds, Thousands & ji6 vs loeng5)",
    "level": "A1",
    "objective": "掌握百、千、萬之大數表達，並嚴格掌握量詞前使用「兩」（loeng5）而非「二」（ji6）之語法規範。",
    "presentation": {
      "explanation": "粵語在較大數詞系統及量詞修飾搭配上有嚴格語法分工：\n\n一、數級單位：\n１．十（sap6）、百（baak3）、千（cin1）、萬（maan6）。\n２．特殊合音字：廿（jaa6，二十）、卅（saa1，三十）。例如「廿蚊」（二十元）、「卅歲」（三十歲）。\n\n二、「二」（ji6）與「兩」（loeng5）之核心區別：\n１．基數報數、序數及複合數尾數用「二」：如「一二三」、「第二個」、「十二」、「廿二」。\n２．量詞前面修飾名詞必須用「兩」：如「兩個人」（兩個人）、「兩部車」（兩輛車）、「兩杯水」（兩杯水），絕對不可說成「*二個人」。\n３．百、千、萬數詞單位前通常用「兩」：如「兩百」（二百）、「兩千」（二千）、「兩萬」（二萬）。",
      "examples": [
        {
          "target": "呢件外套標價八百八十蚊，抵唔抵買呀？",
          "reading": "ni1 gin6 ngoi6 tou3 biu1 gaa3 baat3 baak3 baat3 sap6 man1, dai2 m4 dai2 maai5 aa3? [niː˥ kiːn˨ ŋɔːi˨ tʰou˧ piːu˥ kaː˧ paːt̚˧ paːk̚˧ paːt̚˧ sɐp̚˨ mɐn˥, tɐi˧˥ m̩˨˩ tɐi˧˥ maːi˩˧ aː˧] (NEE-GEEN NGOI-TOE BEW-GAH BAHT-BAHK BAHT-SUP MUN, DY M-DY MY AH?)",
          "translation": "This coat is marked at 880 dollars, is it worth buying?"
        },
        {
          "target": "我哋兩個人一共叫咗三籠點心同兩碗粥。",
          "reading": "ngo5 dei6 loeng5 go3 jan4 jat1 gung6 giu3 zo2 saam1 lung4 dim2 sam1 tung4 loeng5 wun2 zuk1. [ŋɔː˩˧ tei˨ lœːŋ˩˧ kɔː˧ jɐn˨˩ jɐt̚˥ kʊŋ˨ kiːu˧ tsɔː˧˥ saːm˥ lʊŋ˨˩ tiːm˧˥ sɐm˥ tʰʊŋ˨˩ lœːŋ˩˧ wuːn˧˥ tsʊk̚˥] (NGOH-DAY LEUNG-GOH YUN YUT-GOONG GEW-JOR SAHM-LOONG DEEM-SUM TOONG LEUNG-WOON JOOK)",
          "translation": "The two of us ordered three baskets of dim sum and two bowls of congee in total."
        },
        {
          "target": "佢每個月人工有兩萬幾蚊。",
          "reading": "keoi5 mui5 go3 jyut6 jan4 gung1 jau5 loeng5 maan6 gei2 man1. [kʰɵy˩˧ muːi˩˧ kɔː˧ jyːt̚˨ jɐn˨˩ kʊŋ˥ jɐu˩˧ lœːŋ˩˧ maːn˨ kei˧˥ mɐn˥] (KUY MOOY-GOH YEET YUN-GOONG YAU LEUNG-MAHN-GAY MUN)",
          "translation": "His/her monthly salary is over twenty thousand dollars."
        }
      ],
      "mnemonics": [
        "【搭配口訣】量詞當前「兩」字立，百千萬前「兩」相宜；報數排位方用「二」，分工嚴明莫混疑！"
      ],
      "culturalNotes": [
        "在香港日常口語中，貨幣單位「元」習慣講成「蚊」（man1）。例如「十蚊」（十元）、「一百蚊」（一百元）、「一千蚊」（一千元），極具地道市井特色。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【量詞搭配】欲表達「兩位朋友」，正確之粵語詞組係：",
          "options": [
            "兩位朋友 (loeng5 wai2 pang4 jau5)",
            "二位朋友 (ji6 wai2 pang4 jau5)",
            "雙位朋友 (soeng1 wai2 pang4 jau5)",
            "個位朋友 (go3 wai2 pang4 jau5)"
          ],
          "answerIndex": 0,
          "explanation": "量詞前表示數量「二」必須使用「兩」（loeng5）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【口語縮合】粵語日常生活中「廿蚊」所代表之具體金額係：",
          "options": [
            "二十元",
            "十二元",
            "二百元",
            "兩千元"
          ],
          "answerIndex": 0,
          "explanation": "「廿」（jaa6）係「二十」之合音字，「廿蚊」即二十元。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法判斷】以下邊句句子在「二」與「兩」之使用上完全合乎粵語語法規範？",
          "options": [
            "我今日喺書店買咗兩本書同兩支筆。",
            "我今日喺書店買咗二本書同二支筆。",
            "呢架巴士係第二兩架。",
            "我有二個阿哥。"
          ],
          "answerIndex": 0,
          "explanation": "修飾量詞「本」、「支」必須使用「兩」（兩本書、兩支筆）。"
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
    "title": "鐘點表達：「點」、「個字」與「半」 (Telling Time: dim2, go3 zi6, bun3)",
    "level": "A1",
    "objective": "掌握粵語鐘點系統，熟練運用「點」（小時）、「個字」（五分鐘單位）及「半」（三十分鐘）精確報時。",
    "presentation": {
      "explanation": "廣東話之時間報時系統極具地域特色，其中以「字」計分之傳統源遠流長：\n\n一、核心時間單位：\n１．「點」（dim2）：小時/點鐘。如「三點」（三點鐘）。\n２．「半」（bun3）：半小時/三十分鐘。如「三點半」（3:30）。\n３．「個字」（go3 zi6）：以鐘錶錶盤上之 1 至 12 數字為基準，指針每走過一個大格（5分鐘）即為「一個字」：\n   - 「一個字」＝ 5分鐘（如三點一個字 ＝ 3:05）\n   - 「兩個字」＝ 10分鐘（如三點兩個字 ＝ 3:10）\n   - 「三個字」＝ 15分鐘（如三點三個字 ＝ 3:15 / 一刻鐘）\n   - 「九個字」＝ 45分鐘（如三點九個字 ＝ 3:45 / 三刻鐘）\n\n二、差時表達：\n「差」（caa1）表相欠。如「差一個字四點」（3:55，差五分鐘到四點）。",
      "examples": [
        {
          "target": "依家幾多點呀？依家係下晝三點三個字。",
          "reading": "ji1 gaa1 gei2 do1 dim2 aa3? ji1 gaa1 hai6 haa6 zau3 saam1 dim2 saam1 go3 zi6. [jiː˥ kaː˥ kei˧˥ tɔː˥ tiːm˧˥ aː˧? jiː˥ kaː˥ hɐi˨ haː˨ tsɐu˧ saːm˥ tiːm˧˥ saːm˥ kɔː˧ tsiː˨] (YEE-GAH GAY-DOH DEEM AH? YEE-GAH HY HAH-JAU SAHM-DEEM SAHM-GOH-JEE)",
          "translation": "What time is it now? It is now 3:15 in the afternoon."
        },
        {
          "target": "我哋約咗聽朝十點半喺地鐵站大堂等。",
          "reading": "ngo5 dei6 joek3 zo2 ting1 ziu1 sap6 dim2 bun3 hai2 dei6 tit3 zaam6 daai6 tong4 dang2. [ŋɔː˩˧ tei˨ jœːk˧ tsɔː˧˥ tʰɪŋ˥ tsiːu˥ sɐp̚˨ tiːm˧˥ puːn˧ hɐi˩˧ tei˨ tʰiːt̚˧ tsaːm˨ taːi˨ tʰɔːŋ˨˩ tɐŋ˧˥] (NGOH-DAY YEUK-JOR TING-JEW SUP-DEEM-BOON HY DAY-TEET JAHM DY-TONG DUNG)",
          "translation": "We agreed to wait in the MTR station concourse at 10:30 tomorrow morning."
        },
        {
          "target": "仲有差兩個字就到六點，大家準備收工啦。",
          "reading": "zung6 jau5 caa1 loeng5 go3 zi6 zau6 dou3 luk6 dim2, daai6 gaa1 zeon2 bei6 sau1 gung1 laa1. [tsʊŋ˨ jɐu˩˧ tsʰaː˥ lœːŋ˩˧ kɔː˧ tsiː˨ tsɐu˨ tou˧ lʊk̚˨ tiːm˧˥, taːi˨ kaː˥ tsɵn˧˥ pei˨ sɐu˥ kʊŋ˥ laː˥] (JOONG-YAU CHAH LEUNG-GOH-JEE JAU-DOH LOOK-DEEM, DY-GAH JUEN-BAY SAU-GOONG LAH)",
          "translation": "There are still ten minutes until six o'clock, everyone get ready to finish work."
        }
      ],
      "mnemonics": [
        "【錶盤記憶法】鐘錶錶盤數字一至十二，指針每行一格即「一個字」（五分鐘）；三格十五分即「三個字」，六格三十分即「半」！"
      ],
      "culturalNotes": [
        "在香港街頭詢問時間，最道地問法係「唔該請問依家幾點？」（m4 goi1 cing2 man6 ji1 gaa1 gei2 dim2?）。在商務會議或日程安排中，「三個字」（15分鐘）同「九個字」（45分鐘）使用頻率極高。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【時間換算】粵語「四點三個字」所對應之精確時間係：",
          "options": [
            "4:15",
            "4:03",
            "4:30",
            "4:45"
          ],
          "answerIndex": 0,
          "explanation": "「三個字」代表錶盤數字 3，即 3 × 5 ＝ 15 分鐘，故為 4:15。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【時間表達】欲表達「差十分鐘到八點」（即 7:50），最道地之粵語句式係：",
          "options": [
            "差兩個字八點 (caa1 loeng5 go3 zi6 baat3 dim2)",
            "差十分鐘八點",
            "八點差兩個字",
            "八點過兩個字"
          ],
          "answerIndex": 0,
          "explanation": "「差兩個字八點」係表示 7:50 最地道之粵語說法。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【生活問答】當對方回答「依家兩點九個字」時，錶盤上之時間係：",
          "options": [
            "2:45",
            "2:09",
            "2:15",
            "2:30"
          ],
          "answerIndex": 0,
          "explanation": "「九個字」對應 9 × 5 ＝ 45 分鐘，故為 2:45。"
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
    "title": "星期、月份與今日/聽日/琴日 (Days of the Week, Months & Time Adverbs)",
    "level": "A1",
    "objective": "掌握粵語星期（星期/禮拜）、月份、號數以及今日、聽日、琴日等核心時間參照詞彙。",
    "presentation": {
      "explanation": "廣東話之日期與時間座標體系結構完整，兼具傳統與現代口語特徵：\n\n一、星期表達系統：\n１．「星期」系統：星期一至星期六，星期日（sing1 kei4 jat6）。\n２．「禮拜」系統（口語更為地道常用）：禮拜一至禮拜六，禮拜日（lai5 baai3 jat6）或禮拜天。\n\n二、日期時間座標詞：\n１．「今日」（gam1 jat6）：今天。\n２．「聽日」（ting1 jat6）：明天；「聽朝」（ting1 ziu1）：明早。\n３．「琴日」或「尋日」（kam4 jat6 / cam4 jat6）：昨天；「琴晚」（kam4 maan5）：昨晚。\n４．「後日」（hau6 jat6）：後天；「前日」（cin4 jat6）：前天。\n\n三、月份與日期：\n１．月份：一月（jat1 jyut6）至十二月（sap6 ji6 jyut6）。\n２．日/號：口語多用「號」（hou6），如「五月八號」（五月八日）。",
      "examples": [
        {
          "target": "今日係星期三，聽日下晝我有個重要會議。",
          "reading": "gam1 jat6 hai6 sing1 kei4 saam1, ting1 jat6 haa6 zau3 ngo5 jau5 go3 zung6 jiu3 wui6 ji5. [kɐm˥ jɐt̚˨ hɐi˨ sɪŋ˥ kʰei˨˩ saːm˥, tʰɪŋ˥ jɐt̚˨ haː˨ tsɐu˧ ŋɔː˩˧ jɐu˩˧ kɔː˧ tsʊŋ˨ jiu˧ wuːi˨ jiː˩˧] (GUM-YUT HY SING-KAY-SAHM, TING-YUT HAH-JAU NGOH YAU-GOH JOONG-YEW WOOEY-YEE)",
          "translation": "Today is Wednesday; I have an important meeting tomorrow afternoon."
        },
        {
          "target": "我哋每個禮拜日都去茶樓飲茶食點心。",
          "reading": "ngo5 dei6 mui5 go3 lai5 baai3 jat6 dou1 heoi3 caa4 lau4 jam2 caa4 sik6 dim2 sam1. [ŋɔː˩˧ tei˨ muːi˩˧ kɔː˧ lɐi˩˧ paːi˧ jɐt̚˨ tou˥ hɵy˧ tsʰaː˨˩ lɐu˨˩ jɐm˧˥ tsʰaː˨˩ sɪk̚˨ tiːm˧˥ sɐm˥] (NGOH-DAY MOOY-GOH LY-BY-YUT DOH HOY CHAH-LAU YUM-CHAH SIK DEEM-SUM)",
          "translation": "We go to the teahouse to drink tea and eat dim sum every Sunday."
        },
        {
          "target": "琴晚落咗成晚大雨，今日天氣好涼爽。",
          "reading": "kam4 maan5 lok6 zo2 seng4 maan5 daai6 jyu5, gam1 jat6 tin1 hei3 hou2 loeng4 song2. [kʰɐm˨˩ maːn˩˧ lɔːk˨ tsɔː˧˥ sɛːŋ˨˩ maːn˩˧ taːi˨ jyː˩˧, kɐm˥ jɐt̚˨ tʰiːn˥ hei˧ hou˧˥ lœːŋ˨˩ sɔːŋ˧˥] (KUM-MAHN LOK-JOR SENG-MAHN DY-YOO, GUM-YUT TEEN-HAY HOH LEUNG-SONG)",
          "translation": "It rained heavily all night last night; today's weather is very cool."
        }
      ],
      "mnemonics": [
        "【時間鏈條記】琴日（昨天）已過去，今日（今天）在手中，聽日（明天）展希望；禮拜今日歡聚時！"
      ],
      "culturalNotes": [
        "在香港社會，約定聚會或詢問行程時，「禮拜」（lai5 baai3）與「星期」（sing1 kei4）完全等價互通，例如「呢個禮拜六」即「這個星期六」，口語極具人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【詞彙對應】粵語口語中「聽日」（ting1 jat6）所指之時間係：",
          "options": [
            "明天",
            "昨天",
            "今天",
            "後天"
          ],
          "answerIndex": 0,
          "explanation": "「聽日」（ting1 jat6）即現代標準漢語之「明天」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【日常對話】「琴晚」（kam4 maan5）在粵語中表達之真實時間係：",
          "options": [
            "昨晚",
            "今晚",
            "明晚",
            "後晚"
          ],
          "answerIndex": 0,
          "explanation": "「琴晚 / 尋晚」（kam4 maan5）即「昨晚 / 昨天晚上」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語境應用】同事問「你禮拜日有冇空？」，其中「禮拜日」意指：",
          "options": [
            "星期日",
            "星期一",
            "星期六",
            "工作日"
          ],
          "answerIndex": 0,
          "explanation": "「禮拜日」（lai5 baai3 jat6）即星期日。"
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
    "title": "約定時間與會面句式 (Making Appointments & Scheduling)",
    "level": "A1",
    "objective": "靈活運用「約喺...」、「幾點見」以及「得唔得閒」等高頻句式進行商務與社交約定。",
    "presentation": {
      "explanation": "在廣東話社交與商務溝通中，精確禮貌約定時間地點係極為關鍵之實用技能：\n\n一、核心預約句式：\n１．詢問空閒：「你聽日下晝得唔得閒呀？」（你明天下午有空嗎？）\n２．商議時間：「我哋幾點見面好呀？」（我們幾點見面好呢？）\n３．指定時間地點：「我哋約喺聽朝十點中環地鐵站出口見啦。」（我們約在明早十點中環地鐵站出口見吧。）\n\n二、確認與變更約定：\n１．確認約定：「好呀，咁就一言為定啦！」（好啊，那就說定了！）\n２．改期禮貌用語：「真係唔好意思，我聽日有啲事，可唔可以改去後日呀？」（真的很不好意思，我明天有點事，能不能改到後天呢？）",
      "examples": [
        {
          "target": "陳先生，請問你聽日下晝兩點半得唔得閒開個短會？",
          "reading": "can4 sin1 saang1, cing2 man6 nei5 ting1 jat6 haa6 zau3 loeng5 dim2 bun3 dak1 m4 dak1 haan4 hoi1 go3 dyun2 wui6? [tsʰɐn˨˩ siːn˥ saːŋ˥, tsʰɪŋ˧˥ mɐn˨ nei˩˧ tʰɪŋ˥ jɐt̚˨ haː˨ tsɐu˧ lœːŋ˩˧ tiːm˧˥ puːn˧ tɐk̚˥ m̩˨˩ tɐk̚˥ haːn˨˩ hɔːi˥ kɔː˧ tyːn˧˥ wuːi˨] (CHUN SEEN-SAHNG, CHING-MUN NAY TING-YUT HAH-JAU LEUNG-DEEM-BOON DUK M-DUK-HAHN HOY-GOH DUEN-WOOEY?)",
          "translation": "Mr. Chan, are you free tomorrow afternoon at 2:30 to have a short meeting?"
        },
        {
          "target": "好呀，無問題，我哋到時見！",
          "reading": "hou2 aa3, mou4 man6 tai4, ngo5 dei6 dou3 si4 gin3! [hou˧˥ aː˧, mou˨˩ mɐn˨ tʰɐi˨˩, ŋɔː˩˧ tei˨ tou˧ siː˨˩ kiːn˧] (HOH AH, MOU MUN-TY, NGOH-DAY DOH-SEE GEEN!)",
          "translation": "Great, no problem, see you then!"
        },
        {
          "target": "咁我哋就一言為定，禮拜五下晝四點見啦。",
          "reading": "gam2 ngo5 dei6 zau6 jat1 jin4 wai4 ding6, lai5 baai3 ng5 haa6 zau3 sei3 dim2 gin3 laa1. [kɐm˧˥ ŋɔː˩˧ tei˨ tsɐu˨ jɐt̚˥ jiːn˨˩ wɐi˨˩ tɪŋ˨, lɐi˩˧ paːi˧ ŋ̍˩˧ haː˨ tsɐu˧ sei˧ tiːm˧˥ kiːn˧ laː˥] (GUM NGOH-DAY JAU YUT-YEEN-WY-DING, LY-BY-NG HAH-JAU SAY-DEEM GEEN LAH)",
          "translation": "Then it is a deal; see you Friday afternoon at four o'clock."
        }
      ],
      "mnemonics": [
        "【預約三部曲】先問「得唔得閒」（是否有空），再定「幾點邊度」（時間地點），最後「一言為定」（敲定約會）！"
      ],
      "culturalNotes": [
        "香港節奏緊湊，約定會面講求守時（準時 zeon2 si4）。若因交通延誤，宜提前致電或發訊息告知對方「唔好意思，塞緊車，我大概遲兩個字到」（不好意思，堵車中，我大約遲到十分鐘），展現專業教養。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【商務約定】欲禮貌詢問合作方「您明天上午是否有空」，最得體之粵語句式係：",
          "options": [
            "請問你聽朝得唔得閒？ (cing2 man6 nei5 ting1 ziu1 dak1 m4 dak1 haan4?)",
            "你聽朝做乜嘢？",
            "你聽朝走先喇！",
            "你聽朝唔好意思！"
          ],
          "answerIndex": 0,
          "explanation": "「請問你聽朝得唔得閒？」係商務與社交詢問時間最得體禮貌之句式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【敲定約定】雙方商定好會面時間地點後，表示「就這麼說定了」之經典成語句式係：",
          "options": [
            "一言為定 (jat1 jin4 wai4 ding6)",
            "得閒飲茶 (dak1 haan4 jam2 caa4)",
            "唔該借借 (m4 goi1 ze3 ze3)",
            "早晨你好 (zou2 san4 nei5 hou2)"
          ],
          "answerIndex": 0,
          "explanation": "「一言為定」（jat1 jin4 wai4 ding6）表示雙方一致同意、敲定約定。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【情境應對】若因突發事務需向朋友延遲會面十分鐘，最適當之地道說法係：",
          "options": [
            "唔好意思，我有啲事，大概遲兩個字到。 (m4 hou2 ji3 si3, ngo5 jau5 di1 si6, daai6 koi3 ci4 loeng5 go3 zi6 dou3.)",
            "多謝禮物，我走先喇。",
            "早晨李先生，聽日見。",
            "請問最近嘅洗手間喺邊度？"
          ],
          "answerIndex": 0,
          "explanation": "「遲兩個字到」精確表達遲到 10 分鐘，並以「唔好意思」禮貌致歉。"
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
    "title": "高頻個體量詞：個、隻、條、間 (Individual Classifiers: go3, zek3, tiu4, gaan1)",
    "level": "A1",
    "objective": "掌握粵語最核心之四大個體量詞（個、隻、條、間）之分類特徵與精準名詞搭配語法。",
    "presentation": {
      "explanation": "廣東話量詞系統豐富精密，名詞與量詞之間存在嚴格語義制約：\n\n一、核心四大量詞範疇：\n１．「個」（go3）：最通用量詞。用於人（一個人）、圓形球狀物（一個蘋果、一個橙）、抽象單位（一個問題、一個鐘頭）。\n２．「隻」（zek3）：用於動物（一隻狗、一隻貓）、船隻（一隻船）、餐具器皿（一隻杯、一隻碟）、成雙成對中之單件（一隻手、一隻鞋）。\n３．「條」（tiu4）：用於細長柔軟或延伸之物（一條繩、一條毛巾、一條褲）、水生魚類（一條魚）、街道道路（一條街、一條路）。\n４．「間」（gaan1）：專門用於房屋、店舖、機構建築（一間屋、一間舖頭、一間學校、一間醫院、一間茶餐廳）。",
      "examples": [
        {
          "target": "街角嗰間舖頭養咗一隻好得意嘅花貓。",
          "reading": "gaai1 gok3 go2 gaan1 pou3 tau2 joeng5 zo2 jat1 zek3 hou2 dak1 ji3 ge3 faa1 maau1. [kaːi˥ kɔːk̚˧ kɔː˧˥ kaːn˥ pʰou˧ tʰɐu˧˥ jœːŋ˩˧ tsɔː˧˥ jɐt̚˥ tsɛːk˧ hou˧˥ tɐk̚˥ jiː˧ kɛː˧ faː˥ maːu˥] (GY-GOK GOH-GAHN POH-TAU YEUNG-JOR YUT-JEK HOH DUK-YEE GEH FAH-MAU)",
          "translation": "That shop at the corner of the street keeps a very cute calico cat."
        },
        {
          "target": "佢今日著咗一條好修身嘅黑色牛仔褲。",
          "reading": "keoi5 gam1 jat6 zoek3 zo2 jat1 tiu4 hou2 sau1 san1 ge3 hak1 sik1 ngau4 zai2 fu3. [kʰɵy˩˧ kɐm˥ jɐt̚˨ tsœːk̚˧ tsɔː˧˥ jɐt̚˥ tʰiːu˨˩ hou˧˥ sɐu˥ sɐn˥ kɛː˧ hɐk̚˥ sɪk̚˥ ŋɐu˨˩ tsɐi˧˥ fuː˧] (KUY GUM-YUT JEUK-JOR YUT-TEW HOH SAU-SUN GEH HUK-SIK NGAU-JY-FOO)",
          "translation": "He/she is wearing a pair of very slim-fitting black jeans today."
        },
        {
          "target": "我哋打算喺呢間茶餐廳叫三個午市套餐。",
          "reading": "ngo5 dei6 daa2 syun3 hai2 ni1 gaan1 caa4 caan1 teng1 giu3 saam1 go3 ng5 si5 tou3 caan1. [ŋɔː˩˧ tei˨ taː˧˥ syːn˧ hɐi˩˧ niː˥ kaːn˥ tsʰaː˨˩ tsʰaːn˥ tʰɛːŋ˥ kiːu˧ saːm˥ kɔː˧ ŋ̍˩˧ siː˨˧ tʰou˧ tsʰaːn˥] (NGOH-DAY DY-SUEN HY NEE-GAHN CHAH-TSAHN-TENG GEW SAHM-GOH NG-SEE TOE-TSAHN)",
          "translation": "We plan to order three lunch set meals at this cha chaan teng."
        }
      ],
      "mnemonics": [
        "【量詞分類法】屋宇店舖全用「間」，動物器具多用「隻」；長條魚路皆用「條」，一般人事信手「個」！"
      ],
      "culturalNotes": [
        "粵語在描述杯子或碟子時，習慣講「一隻杯」（jat1 zek3 bui1）、「一隻碟」（jat1 zek3 dip6），在北方漢語中則多用「個」。這種器皿用「隻」之習慣係粵語鮮明特徵。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【量詞匹配】欲形容「一家茶餐廳」，最正宗道地之粵語量詞係：",
          "options": [
            "一間茶餐廳 (jat1 gaan1 caa4 caan1 teng1)",
            "一個茶餐廳",
            "一隻茶餐廳",
            "一條茶餐廳"
          ],
          "answerIndex": 0,
          "explanation": "建築物、餐飲門店及機構必須使用量詞「間」（gaan1）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【器物搭配】粵語口語中稱呼「一隻水杯」，正確量詞搭配係：",
          "options": [
            "一隻杯 (jat1 zek3 bui1)",
            "一個杯",
            "一條杯",
            "一間杯"
          ],
          "answerIndex": 0,
          "explanation": "粵語中杯子、碟子等器皿習慣以「隻」（zek3）作量詞。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法糾錯】以下邊句句子中之量詞搭配完全符合粵語語法規範？",
          "options": [
            "街市嗰條鮮魚好新鮮，游嚟游去。",
            "街市嗰間鮮魚好新鮮。",
            "街市嗰隻褲好靚。",
            "街市嗰條舖頭好大。"
          ],
          "answerIndex": 0,
          "explanation": "魚類使用量詞「條」（條魚）。"
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
    "title": "容器與集合量詞：杯、碗、碟、樽、對、打 (Container & Group Classifiers)",
    "level": "A1",
    "objective": "熟練運用餐飲容器量詞（杯、碗、碟、樽）與成套集合量詞（對、打、套）進行日常計量。",
    "presentation": {
      "explanation": "在飲食與日用品消費領域，容器量詞與集合量詞扮演著核心角色：\n\n一、餐飲容器量詞（兼作計量單位）：\n１．「杯」（bui1）：液體飲品。如「一杯凍檸茶」、「兩杯熱鴛鴦」。\n２．「碗」（wun2）：湯麵粥品。如「一碗雲吞麵」、「一碗艇仔粥」。\n３．「碟」（dip6）：飯麵菜餚。如「一碟乾炒牛河」、「兩碟油菜」。\n４．「樽」（zeon1）：瓶裝飲品。如「一樽蒸餾水」、「兩樽汽水」。\n\n二、集合與成雙量詞：\n１．「對」（deoi3）：成對之物。如「一對筷子」、「一對皮鞋」。\n２．「打」（daa1 / daa2）：源自英語 'dozen'（十二個）。如「一打蛋撻」（12個蛋撻）、「半打西餅」（6件蛋糕）。\n３．「套」（tou3）：成套之物。如「一套西裝」、「一套餐具」。",
      "examples": [
        {
          "target": "唔該伙計，畀一碗雲吞麵同一杯凍奶茶少甜。",
          "reading": "m4 goi1 fo2 gai3, bei2 jat1 wun2 wan4 tan1 min6 tung4 jat1 bui1 dung3 naai5 caa4 siu2 tim4. [m̩˨˩ kɔːi˥ fɔː˧˥ kɐi˧, pei˧˥ jɐt̚˥ wuːn˧˥ wɐn˨˩ tʰɐn˥ miːn˨ tʰʊŋ˨˩ jɐt̚˥ puːi˥ tʊŋ˧ naːi˩˧ tsʰaː˨˩ siːu˧˥ tʰiːm˨˩] (M-GOY FOH-GY, BAY YUT-WOON WUN-TUN-MEEN TOONG YUT-BOOY DOONG NY-CHAH SEW-TEEM)",
          "translation": "Excuse me waiter, please give me a bowl of wonton noodles and an iced milk tea less sweet."
        },
        {
          "target": "我買咗半打熱辣辣嘅新鮮葡撻返去請同事食。",
          "reading": "ngo5 maai5 zo2 bun3 daa1 jit6 laat6 laat6 ge3 san1 sin1 pou4 taat1 faan1 heoi3 cing2 tung4 si6 sik6. [ŋɔː˩˧ maːi˩˧ tsɔː˧˥ puːn˧ taː˥ jiːt̚˨ laːt̚˨ laːt̚˨ kɛː˧ sɐn˥ siːn˥ pʰou˨˩ tʰaːt̚˥ faːn˥ hɵy˧ tsʰɪŋ˧˥ tʰʊŋ˨˩ siː˨ sɪk̚˨] (NGOH MY-JOR BOON-DAH YEET-LAHT-LAHT GEH SUN-SEEN POH-TAHT FAHN-HOY CHING TOONG-SEE SIK)",
          "translation": "I bought half a dozen piping hot fresh Portuguese egg tarts back to treat colleagues."
        },
        {
          "target": "請擺多一對筷子同一隻湯匙喺枱上面。",
          "reading": "cing2 baai2 do1 jat1 deoi3 faai3 zi2 tung4 jat1 zek3 tong1 ci4 hai2 toi2 soeng6 min6. [tsʰɪŋ˧˥ paːi˧˥ tɔː˥ jɐt̚˥ tʰɵy˧ faːi˧ tsiː˧˥ tʰʊŋ˨˩ jɐt̚˥ tsɛːk˧ tʰɔːŋ˥ tsʰiː˨˩ hɐi˩˧ tʰɔːi˧˥ sœːŋ˨ miːn˨] (CHING BY-DOH YUT-DOEY FY-JEE TOONG YUT-JEK TONG-CHEE HY TOY-SEUNG-MEEN)",
          "translation": "Please place an extra pair of chopsticks and a soup spoon on the table."
        }
      ],
      "mnemonics": [
        "【借詞融入法】「一打」（daa1）十二件，洋派詞彙粵音顯；一碗雲吞一杯茶，港式滋味滿人間！"
      ],
      "culturalNotes": [
        "喺香港餅店買蛋撻或西餅，店員常問「要幾多個呀？半打定一打？」（要幾個？半打還是十二個？）。買「半打」（6個）或「一打」（12個）通常配以專用紙盒包裝，體面方便。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【飲食點餐】在茶餐廳欲點一份熱奶茶，最正確之量詞係：",
          "options": [
            "一杯熱奶茶 (jat1 bui1 jit6 naai5 caa4)",
            "一碗熱奶茶",
            "一碟熱奶茶",
            "一條熱奶茶"
          ],
          "answerIndex": 0,
          "explanation": "杯裝液體飲品使用量詞「杯」（bui1）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【集合量詞】在香港麵包店購買「一打蛋撻」，其精確數量係：",
          "options": [
            "十二個",
            "六個",
            "十個",
            "二十個"
          ],
          "answerIndex": 0,
          "explanation": "「一打」（jat1 daa1）源自英語 'dozen'，即十二個。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語境點餐】以下邊組點餐語句之量詞搭配完全符合香港茶餐廳慣例？",
          "options": [
            "一碗雲吞麵、一碟乾炒牛河、一杯凍檸茶",
            "一樽雲吞麵、一碗乾炒牛河、一條凍檸茶",
            "一隻雲吞麵、一條乾炒牛河、一碗凍檸茶",
            "一間雲吞麵、一對乾炒牛河、一打凍檸茶"
          ],
          "answerIndex": 0,
          "explanation": "麵用「碗」，炒河粉用「碟」，冷飲用「杯」。"
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
    "title": "量詞單獨修飾名詞與定指功能 (Classifier without Numeral as Definite Marker)",
    "level": "A1",
    "objective": "掌握粵語量詞直接置於名詞前（無數詞）表達定指「這/那/該（the）」之重大語法特徵。",
    "presentation": {
      "explanation": "粵語語法中有一項極具特色且有別於北方話之重大規律：量詞可以直接與名詞結合（省略數詞「一」或指示詞），並承擔「定指」（Definite Reference）功能，相當於英語定冠詞 'the'：\n\n一、結構規律（量詞＋名詞）：\n１．「部車好靚」（bou6 ce1 hou2 leng3）：（那輛 / 這輛）車真漂亮。（直指上下文已提及或眼前特定之車輛）。\n２．「條路好窄」（tiu4 lou6 hou2 zaak3）：（那條）路很窄。\n３．「間舖頭執咗」（gaan1 pou3 tau2 zap1 zo2）：（那家）店舖結業倒閉了。\n４．「隻狗好惡」（zek3 gau2 hou2 ok3）：（那隻）狗非常兇猛。\n\n二、定指與非定指對比：\n１．泛指/非定指：「我好想買車」（ngo5 hou2 soeng2 maai5 ce1，我想買車，不特指某輛）。\n２．定指：「部車賣咗喇」（bou6 ce1 maai6 zo2 laa3，那輛車已經賣掉了）。",
      "examples": [
        {
          "target": "隻貓喺梳化上面瞓得好冧。",
          "reading": "zek3 maau1 hai2 so1 faa2 soeng6 min6 fan3 dak1 hou2 lam1. [tsɛːk˧ maːu˥ hɐi˩˧ sɔː˥ faː˧˥ sœːŋ˨ miːn˨ fɐn˧ tɐk̚˥ hou˧˥ lɐm˥] (JEK-MAU HY SOH-FAH SEUNG-MEEN FUN-DUK HOH-LUM)",
          "translation": "The cat is sleeping very soundly on the sofa."
        },
        {
          "target": "間茶餐廳啲奶茶真係好香滑。",
          "reading": "gaan1 caa4 caan1 teng1 di1 naai5 caa4 zan1 hai6 hou2 hoeng1 waat6. [kaːn˥ tsʰaː˨˩ tsʰaːn˥ tʰɛːŋ˥ tiː˥ naːi˩˧ tsʰaː˨˩ tsɐn˥ hɐi˨ hou˧˥ hœːŋ˥ waːt̚˨] (GAHN CHAH-TSAHN-TENG DEE NY-CHAH JUN-HY HOH HEUNG-WAHT)",
          "translation": "The milk tea of that cha chaan teng is truly fragrant and smooth."
        },
        {
          "target": "條褲太長，需要攞去改短少少。",
          "reading": "tiu4 fu3 taai3 coeng4, seoi1 jiu3 lo2 heoi3 goi2 dyun2 siu2 siu2. [tʰiːu˨˩ fuː˧ tʰaːi˧ tsʰœːŋ˨˩, sɵy˥ jiu˧ lɔː˧˥ hɵy˧ kɔːi˧˥ tyːn˧˥ siːu˧˥ siːu˧˥] (TEW-FOO TY CHEUNG, SOEY-YEW LOR-HOY GOY-DUEN SEW-SEW)",
          "translation": "The pair of trousers is too long; it needs to be taken to be shortened a bit."
        }
      ],
      "mnemonics": [
        "【量詞定指法】量詞當前無數詞，即表特定「嗰一隻」；英文 'the' 字粵中現，簡練傳神顯本色！"
      ],
      "culturalNotes": [
        "在香港日常交談中，講話者極少累贅地說「那一間茶餐廳」、「那一隻貓」，而係極度自然流暢地直接講「間茶餐廳」、「隻貓」，節奏緊湊明快。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【定指理解】句子「部電腦壞咗」中，「部電腦」所表達之真實語法涵義係：",
          "options": [
            "（特定的那部）電腦壞了 (The computer is broken)",
            "世界上所有的電腦都壞了",
            "某一部不知名的電腦",
            "很多部電腦"
          ],
          "answerIndex": 0,
          "explanation": "「量詞＋名詞」（部電腦）在粵語中具備明確之定指功能（The computer）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語法造句】欲特指「剛才提到的那條街很熱鬧」，最簡練地道之粵語開頭係：",
          "options": [
            "條街好熱鬧 (tiu4 gaai1 hou2 jit6 naau6)",
            "一個街好熱鬧",
            "街好熱鬧一個",
            "熱鬧好條街"
          ],
          "answerIndex": 0,
          "explanation": "以「條街」定指開頭，最為地道自然。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法辨析】關於粵語「量詞＋名詞」（如「隻杯」、「間屋」）之結構功能，以下何者正確？",
          "options": [
            "直接表達定指（相當於英語中的 the）",
            "只能表示疑問",
            "只能表示否定",
            "表示數量極大"
          ],
          "answerIndex": 0,
          "explanation": "粵語「量詞＋名詞」承擔定指（Definite Reference）功能。"
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
    "title": "街市買餸與量詞問價：「幾多錢一斤/磅」 (Market Shopping & Price Inquiries)",
    "level": "A1",
    "objective": "掌握香港街市傳統計量單位（斤、磅、兩）以及「幾多錢一斤」等買餸高頻問價句式。",
    "presentation": {
      "explanation": "在香港街市（傳統菜市場）買餸時，量詞與計量重量單位緊密相連：\n\n一、街市常用重量單位：\n１．「斤」（gan1）：香港司馬斤，一斤合 16 兩（約 600 克）。\n２．「兩」（loeng2）：一兩約 37.5 克。如「買四兩蝦」。（注意此處讀第2聲陰上調 loeng2，以別於數詞 loeng5）。\n３．「磅」（bong6）：英制單位（Pound，約 454 克），在水果攤或超市極常用。\n\n二、問價與計價句式：\n１．「請問呢啲菜幾多錢一斤呀？」（請問這些蔬菜多少錢一斤？）\n２．「二十蚊一斤，買兩斤算你平啲啦！」（二十元一斤，買兩斤算你便宜點吧！）\n３．「唔該同我稱半斤排骨。」（麻煩幫我秤半斤排骨。）",
      "examples": [
        {
          "target": "老闆，呢啲新鮮菜心幾多錢一斤呀？",
          "reading": "lou5 baan2, ni1 di1 san1 sin1 coi3 sam1 gei2 do1 cin2 jat1 gan1 aa3? [lou˩˧ paːn˧˥, niː˥ tiː˥ sɐn˥ siːn˥ tsʰɔːi˧ sɐm˥ kei˧˥ tɔː˥ tsʰiːn˧˥ jɐt̚˥ kɐn˥ aː˧] (LOH-BAHN, NEE-DEE SUN-SEEN TSOY-SUM GAY-DOH CHEEN YUT-GUN AH?)",
          "translation": "Boss, how much per catty for this fresh choy sum?"
        },
        {
          "target": "唔該同我稱一條石斑同半斤鮮蝦。",
          "reading": "m4 goi1 tung4 ngo5 cing3 jat1 tiu4 sek6 baan1 tung4 bun3 gan1 sin1 haa1. [m̩˨˩ kɔːi˥ tʰʊŋ˨˩ ŋɔː˩˧ tsʰɪŋ˧ jɐt̚˥ tʰiːu˨˩ sɛːk˨ paːn˥ tʰʊŋ˨˩ puːn˧ kɐn˥ siːn˥ haː˥] (M-GOY TOONG NGOH CHING YUT-TEW SEK-BAHN TOONG BOON-GUN SEEN-HAH)",
          "translation": "Please weigh a garoupa and half a catty of fresh prawns for me."
        },
        {
          "target": "啲澳洲橙十蚊三個，好抵買呀。",
          "reading": "di1 ou3 zau1 caang2 sap6 man1 saam1 go3, hou2 dai2 maai5 aa3. [tiː˥ ou˧ tsɐu˥ tsʰaːŋ˧˥ sɐp̚˨ mɐn˥ saːm˥ kɔː˧, hou˧˥ tɐi˧˥ maːi˩˧ aː˧] (DEE OH-JAU CHAHNG SUP-MUN SAHM-GOH, HOH-DY-MY AH)",
          "translation": "Those Australian oranges are ten dollars for three, very good value."
        }
      ],
      "mnemonics": [
        "【買餸問價訣】稱斤論兩街市行，「幾多錢一斤」掛嘴旁；「十蚊三個」算得明，地道生活樂洋洋！"
      ],
      "culturalNotes": [
        "香港街市講求人情味與鮮活（生猛 saang1 maang5）。買菜時菜販常在秤好後主動送多幾條蔥或一把芫荽，稱為「送粒蔥」，展現市井人情之美。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【買菜問價】在香港街市欲詢問番茄每斤價格，最地道之句式係：",
          "options": [
            "請問番茄幾多錢一斤呀？ (cing2 man6 faan1 ke2 gei2 do1 cin2 jat1 gan1 aa3?)",
            "請問番茄有冇一斤呀？",
            "請問番茄走先喇！",
            "請問番茄得閒飲茶！"
          ],
          "answerIndex": 0,
          "explanation": "「幾多錢一斤」係標準地道之問價句式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【單位常識】香港傳統市場所稱之一「斤」（司馬斤），一斤等於幾多「兩」？",
          "options": [
            "十六兩",
            "十兩",
            "十二兩",
            "八兩"
          ],
          "answerIndex": 0,
          "explanation": "香港司馬斤沿用十六兩制（半斤八兩）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語境理解】菜檔標明「十蚊三棵」，欲買六棵菜需支付之金額為：",
          "options": [
            "二十蚊 (jaa6 man1 / 二十元)",
            "三十蚊",
            "十五蚊",
            "十蚊"
          ],
          "answerIndex": 0,
          "explanation": "十蚊三棵，六棵即兩份，共計二十蚊。"
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
    "title": "購物議價與折扣表達：「平啲啦」、「幾多折」 (Bargaining & Discounts)",
    "level": "A1",
    "objective": "掌握粵語購物議價口語（平啲啦、抵唔抵）、折扣計算（八折、減價）及結帳表達。",
    "presentation": {
      "explanation": "在香港零售與集市購物時，議價與折扣表達具有鮮明之語言習慣：\n\n一、議價與求減價句式：\n１．「平啲得唔得呀？」（peng4 di1 dak1 m4 dak1 aa3？，便宜點行不行？）\n２．「算平啲啦，我買多兩件呀。」（算便宜點吧，我多買兩件。）\n３．「好抵呀！」（hou2 dai2 aa3！，性價比極高/非常划算！）對比「好貴呀」（太貴了）。\n\n二、折扣與促銷術語：\n１．「折」（zit3）：粵語折扣計算與現代漢語一致，以百分比成數計算：\n   - 「八折」（baat3 zit3）：即原價之 80%（相當於 20% off）。\n   - 「半價」（bun3 gaa3）：五折（50% off）。\n２．「減價」（gaam2 gaa3）：降價促銷；「大減價」（daai6 gaam2 gaa3）：大減價 / 清貨大特賣。",
      "examples": [
        {
          "target": "老細，如果我買兩件，可唔可以算平啲呀？",
          "reading": "lou5 sai3, jyu4 gwo2 ngo5 maai5 loeng5 gin6, ho2 m4 ho2 ji5 syun3 peng4 di1 aa3? [lou˩˧ sɐi˧, jyː˨˩ kʷɔː˧˥ ŋɔː˩˧ maːi˩˧ lœːŋ˩˧ kiːn˨, hɔː˧˥ m̩˨˩ hɔː˧˥ jiː˩˧ syːn˧ pʰɛːŋ˨˩ tiː˥ aː˧] (LOH-SY, YOO-GWOR NGOH MY LEUNG-GEEN, HOH-M-HOH-YEE SUEN PENG-DEE AH?)",
          "translation": "Boss, if I buy two pieces, can you give me a cheaper price?"
        },
        {
          "target": "全場貨品一律八折，買滿五百蚊仲有禮券送。",
          "reading": "cyun4 coeng4 fo3 ban2 jat1 leot6 baat3 zit3, maai5 mun5 ng5 baak3 man1 zung6 jau5 lai5 hyun3 sung3. [tsʰyːn˨˩ tsʰœːŋ˨˩ fɔː˧ pɐn˧˥ jɐt̚˥ lɵt˨ paːt̚˧ tsit̚˧, maːi˩˧ muːn˩˧ ŋ̍˩˧ paːk̚˧ mɐn˥ tsʊŋ˨ jɐu˩˧ lɐi˩˧ hyːn˧ sʊŋ˧] (TSUEN-CHEUNG FOH-BUN YUT-LOOT BAHT-JEET, MY-MOON NG-BAHK-MUN JOONG-YAU LY-HUEN SOONG)",
          "translation": "All goods in the store are 20% off; purchases over 500 dollars come with gift coupons."
        },
        {
          "target": "呢對皮鞋真係好靚，而且折咗之後好抵買。",
          "reading": "ni1 deoi3 pei4 haai4 zan1 hai6 hou2 leng3, ji4 ce2 zit3 zo2 zi1 hau6 hou2 dai2 maai5. [niː˥ tʰɵy˧ pʰei˨˩ haːi˨˩ tsɐn˥ hɐi˨ hou˧˥ lɛːŋ˧, jiː˨˩ tsʰɛː˧˥ tsit̚˧ tsɔː˧˥ tsiː˥ hɐu˨ hou˧˥ tɐi˧˥ maːi˩˧] (NEE-DOEY PAY-HY JUN-HY HOH-LENG, YEE-TSHE JEET-JOR JEE-HAU HOH-DY-MY)",
          "translation": "This pair of leather shoes is really nice, and after discount it is very great value."
        }
      ],
      "mnemonics": [
        "【議價記憶法】「平」（peng4）係便宜「貴」（gwai3）係昂，「抵買」（dai2 maai5）划算真叫爽；八折即付八成銀，買得稱心樂開懷！"
      ],
      "culturalNotes": [
        "在香港大型商場或連鎖店通常標價固定（不設議價），但在女人街、廟街、深水埗鴨寮街等露天市集，適度禮貌講一句「老細，平少少得唔得呀？」，往往能獲得友善折扣。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【議價用語】在露天排檔買衣服，欲禮貌請求店主降價，最地道之句式係：",
          "options": [
            "老細，平啲得唔得呀？ (lou5 sai3, peng4 di1 dak1 m4 dak1 aa3?)",
            "老細，貴啲得唔得呀？",
            "老細，早晨你好！",
            "老細，我走先喇！"
          ],
          "answerIndex": 0,
          "explanation": "「平啲得唔得呀？」（便宜點行不行？）係最經典之粵語議價句式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【折扣計算】商場櫥窗貼出「全場七折」，一件原價 100 蚊嘅襯衫折後售價係：",
          "options": [
            "70 蚊 (七十元)",
            "30 蚊",
            "17 蚊",
            "7 蚊"
          ],
          "answerIndex": 0,
          "explanation": "「七折」（cat1 zit3）即按原價 70% 支付，100 蚊 × 70% ＝ 70 蚊。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【詞彙理解】在粵語中，形容一件商品「物超所值、極度划算」之專用形容詞係：",
          "options": [
            "好抵 (hou2 dai2)",
            "好貴 (hou2 gwai3)",
            "好慢 (hou2 maan6)",
            "好難 (hou2 naan4)"
          ],
          "answerIndex": 0,
          "explanation": "「抵」（dai2 / 抵買）意為划算、性價比高。"
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
    "title": "處所介詞「喺」與「主語＋喺＋處所＋動詞」語序 (Location Preposition hai2 & Word Order)",
    "level": "A1",
    "objective": "掌握粵語核心處所介詞「喺」（hai2）及「主語＋喺＋處所＋動詞」之標準空間行動句式語序。",
    "presentation": {
      "explanation": "粵語中表達動作發生之空間處所時，處所介詞「喺」（hai2，第2聲高升調）扮演核心樞紐角色：\n\n一、「喺」之核心句式結構：\n１．「主語＋喺＋處所＋動詞短語」：表示某人在某處進行某項活動。例如「我喺中環返工」（我在中環上班）、「佢哋喺屋企睇電視」（他們在家看電視）。\n２．「主語＋喺＋處所」：單純表示存在方位。例如「陳先生依家喺辦公室」（陳先生現在在辦公室）。\n\n二、語音與字形辨析：\n１．「喺」（hai2，第2聲高升調）：處所介詞/動詞，表「在……地方」。\n２．「係」（hai6，第6聲低平調）：判斷動詞（繫詞），表「是」。\n兩者聲調不同、語義完全獨立，嚴禁混淆！",
      "examples": [
        {
          "target": "黃小姐每日朝早都喺公園跑步做運動。",
          "reading": "wong4 siu2 ze2 mui5 jat6 ziu1 zou2 dou1 hai2 gung1 jyun2 paau4 bou6 zou6 wan6 dung6. [wɔːŋ˨˩ siːu˧˥ tsɛː˧˥ muːi˩˧ jɐt̚˨ tsiːu˥ tsou˧˥ tou˥ hɐi˩˧ kʊŋ˥ jyːn˧˥ pʰaːu˨˩ pou˨ tsou˨ wɐn˨ tʊŋ˨] (WONG SEW-JEH MOOY-YUT JEW-JOH DOH HY GOONG-YUEN POW-BO JOE WUN-DOONG)",
          "translation": "Miss Wong runs and exercises in the park every morning."
        },
        {
          "target": "我哋今晚打算喺銅鑼灣嗰間日本餐廳食晚飯。",
          "reading": "ngo5 dei6 gam1 maan5 daa2 syun3 hai2 tung4 lo4 waan4 go2 gaan1 jat6 bun2 caan1 teng1 sik6 maan5 faan6. [ŋɔː˩˧ tei˨ kɐm˥ maːn˩˧ taː˧˥ syːn˧ hɐi˩˧ tʰʊŋ˨˩ lɔː˨˩ waːn˨˩ kɔː˧˥ kaːn˥ jɐt̚˨ puːn˧˥ tsʰaːn˥ tʰɛːŋ˥ sɪk̚˨ maːn˩˧ faːn˨] (NGOH-DAY GUM-MAHN DY-SUEN HY TOONG-LOH-WAHN GOH-GAHN YUT-BOON TSAHN-TENG SIK MAHN-FAHN)",
          "translation": "We plan to have dinner at that Japanese restaurant in Causeway Bay tonight."
        },
        {
          "target": "李經理依家喺會議室同客戶開緊會。",
          "reading": "lei5 ging1 lei5 ji1 gaa1 hai2 wui6 ji5 sat1 tung4 haak3 wu6 hoi1 gan2 wui6. [lei˩˧ kɪŋ˥ lei˩˧ jiː˥ kaː˥ hɐi˩˧ wuːi˨ jiː˩˧ sɐt̚˥ tʰʊŋ˨˩ haːk̚˧ wuː˨ hɔːi˥ kɐn˧˥ wuːi˨] (LEE GING-LEE YEE-GAH HY WOOEY-YEE-SUT TOONG HAHK-WOO HOY-GUN-WOOEY)",
          "translation": "Manager Lee is currently in the meeting room holding a meeting with clients."
        }
      ],
      "mnemonics": [
        "【聲調辨析訣】二聲高升「喺」（hai2）在處所，六聲低平「係」（hai6）作判斷；聲調分明句式準，處所行動一目了然！"
      ],
      "culturalNotes": [
        "在香港問候他人近況時，常問「你最近喺邊度返工呀？」（你最近在哪裡上班？），以工作區域（如中環、觀塘、鰂魚涌）為社交話題切入點。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【語序造句】欲表達「我們在圖書館看書」，正確之粵語語序係：",
          "options": [
            "我哋喺圖書館睇書。 (ngo5 dei6 hai2 tou4 syu1 gun2 tai2 syu1.)",
            "我哋睇書喺圖書館。",
            "喺圖書館我哋睇書係。",
            "我哋圖書館喺睇書。"
          ],
          "answerIndex": 0,
          "explanation": "「主語＋喺＋處所＋動詞短語」（我哋喺圖書館睇書）係標準粵語語序。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【音義辨析】「佢＿＿＿香港人」與「佢＿＿＿香港住」，兩空格依序應填入之字詞係：",
          "options": [
            "係 (hai6) …… 喺 (hai2)",
            "喺 (hai2) …… 係 (hai6)",
            "喺 (hai2) …… 喺 (hai2)",
            "係 (hai6) …… 係 (hai6)"
          ],
          "answerIndex": 0,
          "explanation": "前者為判斷身份（係香港人），後者為處所居住（喺香港住）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法正誤】以下邊句句子之處所介詞與語序完全正確？",
          "options": [
            "陳生每日下晝都喺尖沙咀見客戶。",
            "陳生每日下晝都係尖沙咀見客戶。",
            "陳生每日見客戶尖沙咀喺。",
            "陳生喺每日見客戶尖沙咀。"
          ],
          "answerIndex": 0,
          "explanation": "「喺＋處所＋動詞短語」（喺尖沙咀見客戶）完全正確。"
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
    "title": "「喺邊度」問句與空間方位詞（前、後、左、右、上、下、入、出） (Location Questions & Spatial Relators)",
    "level": "A1",
    "objective": "掌握「喺邊度」處所詢問句式，並熟練運用前、後、左、右、上、下、入、出、隔離等全套空間方位詞。",
    "presentation": {
      "explanation": "在廣東話中進行空間定位與方位指示時，方位詞系統呈現鮮明之名詞後綴結構：\n\n一、空間方位詞體系：\n１．基本方位：「前面」（前頭/前方）、「後面」（後方）、「左便」（左邊）、「右便」（右邊）。\n２．垂直與內外：「上面」（上方/表面）、「下面」（下方/底端）、「入面」（內部/裡面）、「出面」（外部/外面）。\n３．鄰近與相對：「隔離」（gaak3 lei4，隔壁/相鄰）、「對面」（deoi3 min6，正對面）。\n\n二、「喺邊度」處所問答句式：\n１．詢問：「請問便利店喺邊度呀？」（請問便利店在哪裡？）\n２．回答：「便利店喺地鐵站出口對面，藥房隔離。」（便利店在地鐵站出口對面，藥房隔壁。）",
      "examples": [
        {
          "target": "請問洗手間喺邊度呀？喺前面轉左，餐廳出面就係。",
          "reading": "cing2 man6 sai2 sau2 gaan1 hai2 bin1 dou6 aa3? hai2 cin4 min6 zyun3 zo2, caan1 teng1 ceot1 min6 zau6 hai6. [tsʰɪŋ˧˥ mɐn˨ sɐi˧˥ sɐu˧˥ kaːn˥ hɐi˩˧ piːn˥ tou˨ aː˧? hɐi˩˧ tsʰiːn˨˩ miːn˨ tsyn˧ tsɔː˧˥, tsʰaːn˥ tʰɛːŋ˥ tsʰɵt̚˥ miːn˨ tsɐu˨ hɐi˨] (CHING-MUN SYE-SAU-GAHN HY BEEN-DOH AH? HY CHEEN-MEEN JUEN-JOH, TSAHN-TENG CHUT-MEEN JAU-HY)",
          "translation": "Excuse me, where is the restroom? Turn left ahead, and it is right outside the restaurant."
        },
        {
          "target": "我部電話擺咗喺書枱上面，電腦隔離。",
          "reading": "ngo5 bou6 din6 waa2 baai2 zo2 hai2 syu1 toi2 soeng6 min6, din6 nou5 gaak3 lei4. [ŋɔː˩˧ pou˨ tiːn˨ waː˧˥ paːi˧˥ tsɔː˧˥ hɐi˩˧ syː˥ tʰɔːi˧˥ sœːŋ˨ miːn˨, tiːn˨ nou˩˧ kaːk̚˧ lei˨˩] (NGOH-BO DEEN-WAH BY-JOR HY SYU-TOY SEUNG-MEEN, DEEN-NOH GAHK-LEY)",
          "translation": "My phone is placed on the desk, next to the computer."
        },
        {
          "target": "銀行就喺商場入面，超市對面。",
          "reading": "ngan4 hong4 zau6 hai2 soeng1 coeng4 jap6 min6, ciu1 si5 deoi3 min6. [ŋɐn˨˩ hɔːŋ˨˩ tsɐu˨ hɐi˩˧ sœːŋ˥ tsʰœːŋ˨˩ jɐp˨ miːn˨, tsʰiːu˥ siː˨˧ tʰɵy˧ miːn˨] (NGUN-HONG JAU HY SEUNG-CHEUNG YUP-MEEN, CHEW-SEE DOEY-MEEN)",
          "translation": "The bank is right inside the shopping mall, opposite the supermarket."
        }
      ],
      "mnemonics": [
        "【方位定位訣】前瞻後顧左便右，上天入地出面留；「隔離」緊挨「對面」望，行街問路唔使愁！"
      ],
      "culturalNotes": [
        "香港地少人多、高樓林立，給人指路時常精確結合商舖地標與「隔離」（相鄰）、「對面」，如「喺港鐵A出口對面，餅店隔離」，極為直觀有效。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【方位理解】「間咖啡舖喺書店隔離」所表達之具體方位關係係：",
          "options": [
            "咖啡店在書店隔壁 / 緊挨著書店",
            "咖啡店在書店對面",
            "咖啡店在書店樓上",
            "咖啡店在書店裡面"
          ],
          "answerIndex": 0,
          "explanation": "「隔離」（gaak3 lei4）在粵語中意為「隔壁/相鄰」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【問路句式】欲向路人詢問「請問最近嘅地鐵站在哪裡」，正確之粵語表達係：",
          "options": [
            "請問最近嘅地鐵站喺邊度呀？ (cing2 man6 zeoi3 kan5 ge3 dei6 tit3 zaam6 hai2 bin1 dou6 aa3?)",
            "請問最近嘅地鐵站係邊個呀？",
            "請問最近嘅地鐵站有冇人呀？",
            "請問最近嘅地鐵站得唔得閒呀？"
          ],
          "answerIndex": 0,
          "explanation": "詢問地點處所使用「喺邊度」（hai2 bin1 dou6）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【方位對應】與「入面」（裡面）語義完全相反之粵語方位詞係：",
          "options": [
            "出面 (ceot1 min6 / 外面)",
            "上面 (soeng6 min6)",
            "下面 (haa6 min6)",
            "後面 (hau6 min6)"
          ],
          "answerIndex": 0,
          "explanation": "「出面」（外面）與「入面」（裡面）構成反義詞。"
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
    "title": "公共交通工具：搭地鐵、搭巴士、搭小巴、坐的士 (Public Transport Collocations)",
    "level": "A1",
    "objective": "掌握搭乘香港特色公共交通工具之動賓搭配（搭地鐵、搭巴士、搭小巴、坐的士、搭叮叮）。",
    "presentation": {
      "explanation": "香港擁有世界領先之公共交通網絡，日常出行中動詞「搭」（daap3）與「坐」（co5）為主要乘坐動詞：\n\n一、交通工具搭配：\n１．「搭地鐵 / 港鐵」（daap3 dei6 tit3）：乘坐地下鐵路。\n２．「搭巴士」（daap3 baa1 si2）：乘坐雙層巴士。\n３．「搭小巴」（daap3 siu2 baa1）：乘坐公共小型巴士（綠色專線小巴或紅色小巴）。\n４．「坐的士 / 搭的士」（co5 dik1 si2）：乘坐計程車/出租車。\n５．「搭電車 / 搭叮叮」（daap3 din6 ce1 / daap3 ding1 ding1）：乘坐港島百年雙層有軌電車。\n６．「搭天星小輪」（daap3 tin1 sing1 siu2 leon4）：乘坐維港渡海輪船。\n\n二、出行問答句式：\n「你平時點樣返工呀？」「我平時搭地鐵返工，好快好方便。」",
      "examples": [
        {
          "target": "由中環去尖沙咀，搭地鐵或者搭天星小輪都好快到。",
          "reading": "jau4 zung1 waan4 heoi3 zim1 saa1 zeoi2, daap3 dei6 tit3 waak6 ze2 daap3 tin1 sing1 siu2 leon4 dou1 hou2 faai3 dou3. [jɐu˨˩ tsʊŋ˥ waːn˨˩ hɵy˧ tsɪm˥ saː˥ tsɵy˧˥, taːp̚˧ tei˨ tʰiːt̚˧ waːk˨ tsɛː˧˥ taːp̚˧ tʰiːn˥ sɪŋ˥ siːu˧˥ lɵn˨˩ tou˥ hou˧˥ faːi˧ tou˧] (YAU JOONG-WAHN HOY JEEM-SAH-TSOY, DAHP DAY-TEET WAHK-JEH DAHP TEEN-SING SEW-LUN DOH HOH-FY DOH)",
          "translation": "From Central to Tsim Sha Tsui, taking the MTR or the Star Ferry is very fast."
        },
        {
          "target": "如果趕時間嘅話，我哋不如坐的士去機場啦。",
          "reading": "jyu4 gwo2 gon2 si4 gaan3 ge3 waa2, ngo5 dei6 bat1 jyu4 co5 dik1 si2 heoi3 gei1 coeng4 laa1. [jyː˨˩ kʷɔː˧˥ kɔːn˧˥ siː˨˩ kaːn˧ kɛː˧ waː˧˥, ŋɔː˩˧ tei˨ pɐt̚˥ jyː˨˩ tsʰɔː˩˧ tɪk̚˥ siː˧˥ hɵy˧ kei˥ tsʰœːŋ˨˩ laː˥] (YOO-GWOR GON-SEE-GAHN GEH-WAH, NGOH-DAY BUT-YOO CHOH DIK-SEE HOY GAY-CHEUNG LAH)",
          "translation": "If we are in a hurry, why don't we take a taxi to the airport."
        },
        {
          "target": "喺港島搭叮叮慢悠悠睇街景，真係一種享受。",
          "reading": "hai2 gong2 dou2 daap3 ding1 ding1 maan6 jau4 jau4 tai2 gaai1 ging2, zan1 hai6 jat1 zung2 hoeng2 sau6. [hɐi˩˧ kɔːŋ˧˥ tou˧˥ taːp̚˧ tɪŋ˥ tɪŋ˥ maːn˨ jɐu˨˩ jɐu˨˩ tʰɐi˧˥ kaːi˥ kɪŋ˧˥, tsɐn˥ hɐi˨ jɐt̚˥ tsʊŋ˧˥ hœːŋ˧˥ sɐu˨] (HY GONG-DOH DAHP DING-DING MAHN-YAU-YAU TY GY-GING, JUN-HY YUT-JOONG HEUNG-SAU)",
          "translation": "Riding the tram leisurely on Hong Kong Island to watch the street scenes is truly an enjoyment."
        }
      ],
      "mnemonics": [
        "【港島交通訣】地鐵穿梭海陸通，雙層巴士過橋衝；「叮叮」電車聲聲脆，天星小輪渡海風！"
      ],
      "culturalNotes": [
        "香港電車因行車時發出清脆之「叮叮」警示鈴聲，被全港市民親切暱稱為「叮叮」（ding1 ding1）。搭乘叮叮「後門上車、前門落車付款」，係港島獨特之城市文化印記。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【文化名詞】香港市民常將香港島百年雙層有軌電車親切暱稱為：",
          "options": [
            "叮叮 (ding1 ding1)",
            "小巴 (siu2 baa1)",
            "的士 (dik1 si2)",
            "小輪 (siu2 leon4)"
          ],
          "answerIndex": 0,
          "explanation": "香港電車因鈴聲而被廣泛稱為「叮叮」（ding1 ding1）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【動賓搭配】欲表達「乘坐地下鐵路上班」，最地道之粵語詞組係：",
          "options": [
            "搭地鐵返工 (daap3 dei6 tit3 faan1 gung1)",
            "行地鐵返工",
            "跑地鐵返工",
            "飛地鐵返工"
          ],
          "answerIndex": 0,
          "explanation": "乘坐交通工具使用動詞「搭」（搭地鐵）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【交通辨析】以下邊種交通工具係橫渡維多利亞港之經典渡輪？",
          "options": [
            "天星小輪 (tin1 sing1 siu2 leon4)",
            "叮叮電車 (ding1 ding1)",
            "紅色小巴 (hung4 sik1 siu2 baa1)",
            "雙層巴士 (soeng1 caang4 baa1 si2)"
          ],
          "answerIndex": 0,
          "explanation": "天星小輪係維多利亞港極具歷史文化底蘊之渡海輪船。"
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
    "title": "日常生活作息動詞：起身、返工、放工、食飯、瞓覺 (Daily Routine Verbs)",
    "level": "A1",
    "objective": "熟練運用粵語高頻日常作息動詞（起身、返工、放工、食晏、返學、放學、瞓覺）描述一日流程。",
    "presentation": {
      "explanation": "廣東話中描述日常生活作息之核心動詞具有鮮明之構詞特徵：\n\n一、核心作息動詞：\n１．「起身」（hei2 san1）：起床。\n２．「返工」（faan1 gung1）：上班/去工作；「放工」（fong3 gung1）：下班。\n３．「返學」（faan1 hok6）：上學/去學校；「放學」（fong3 hok6）：放學。\n４．「食飯」（sik6 faan6）：用餐；「食晏」（sik6 aan3）：吃午飯/午餐。\n５．「瞓覺」（fan3 gaau3）：睡覺。\n\n二、一日時間與作息串聯：\n「我每日朝早七點起身，八點搭車返工，一點食晏，下晝六點放工，夜晚十一點瞓覺。」",
      "examples": [
        {
          "target": "我平時朝早七點三個字起身，梳洗完就出門口返工。",
          "reading": "ngo5 ping4 si4 ziu1 zou2 cat1 dim2 saam1 go3 zi6 hei2 san1, so1 sai2 jyun4 zau6 ceot1 mun4 hau2 faan1 gung1. [ŋɔː˩˧ pʰɪŋ˨˩ siː˨˩ tsiːu˥ tsou˧˥ tsʰɐt̚˥ tiːm˧˥ saːm˥ kɔː˧ tsiː˨ hei˧˥ sɐn˥, sɔː˥ sɐi˧˥ jyːn˨˩ tsɐu˨ tsʰɵt̚˥ muːn˨˩ hɐu˧˥ faːn˥ kʊŋ˥] (NGOH PING-SEE JEW-JOH CHUT-DEEM SAHM-GOH-JEE HY-SUN, SOH-SY-YUEN JAU CHUT-MOON-HAU FAHN-GOONG)",
          "translation": "I usually get up at 7:15 in the morning, freshen up and head out to work."
        },
        {
          "target": "今日公司好忙，我哋要加班做到夜晚八點幾先可以放工。",
          "reading": "gam1 jat6 gung1 si1 hou2 mong4, ngo5 dei6 jiu3 gaa1 baan1 zou6 dou3 je6 maan5 baat3 dim2 gei2 sin1 ho2 ji5 fong3 gung1. [kɐm˥ jɐt̚˨ kʊŋ˥ siː˥ hou˧˥ mɔːŋ˨˩, ŋɔː˩˧ tei˨ jiu˧ kaː˥ paːn˥ tsou˨ tou˧ jɛː˨ maːn˩˧ paːt̚˧ tiːm˧˥ kei˧˥ siːn˥ hɔː˧˥ jiː˩˧ fɔːŋ˧ kʊŋ˥] (GUM-YUT GOONG-SEE HOH-MONG, NGOH-DAY YEW GAH-BAHN JOE-DOH YE-MAHN BAHT-DEEM-GAY SEEN HOH-YEE FONG-GOONG)",
          "translation": "The company is very busy today; we have to work overtime until after 8:00 pm before getting off work."
        },
        {
          "target": "時間唔早喇，大家早啲瞓覺，聽朝精神啲。",
          "reading": "si4 gaan3 m4 zou2 laa3, daai6 gaa1 zou2 di1 fan3 gaau3, ting1 ziu1 zing1 san4 di1. [siː˨˩ kaːn˧ m̩˨˩ tsou˧˥ laː˧, taːi˨ kaː˥ tsou˧˥ tiː˥ fɐn˧ kaːu˧, tʰɪŋ˥ tsiːu˥ tsɪŋ˥ sɐn˨˩ tiː˥] (SEE-GAHN M-JOH LAH, DY-GAH JOH-DEE FUN-GOW, TING-JEW JING-SUN-DEE)",
          "translation": "It is getting late; everyone go to sleep earlier so we are more refreshed tomorrow morning."
        }
      ],
      "mnemonics": [
        "【作息循環歌】晨早「起身」迎朝陽，「返工」「返學」步履忙；傍晚「放工」回溫暖，「食飯」「瞓覺」夢甜鄉！"
      ],
      "culturalNotes": [
        "粵語將吃午飯特稱為「食晏」（sik6 aan3），「晏」字本義為日落或遲暮，引申為中午時分。例如「晏晝」（下午）、「食晏未呀？」（吃午飯了嗎？），係地道生活問候。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【詞彙對應】粵語詞彙「放工」所對應之現代標準漢語係：",
          "options": [
            "下班",
            "上班",
            "請假",
            "加班"
          ],
          "answerIndex": 0,
          "explanation": "「放工」（fong3 gung1）即下班，相對應之「返工」（faan1 gung1）為上班。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【日常問候】同事在中午時分向你打招呼「食晏未呀？」，其真實意圖係詢問：",
          "options": [
            "吃午飯了嗎？",
            "起床了嗎？",
            "下班了嗎？",
            "睡覺了嗎？"
          ],
          "answerIndex": 0,
          "explanation": "「食晏」（sik6 aan3）專指吃午餐。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法造句】以下邊句句子之日常作息表達完全符合粵語習慣？",
          "options": [
            "我每晚十一點半瞓覺，聽朝七點起身。",
            "我每晚十一點半起身，聽朝七點瞓覺。",
            "我每晚十一點半放學返工。",
            "我每晚十一點半食晏。"
          ],
          "answerIndex": 0,
          "explanation": "夜晚睡覺（瞓覺）、明早起床（起身）邏輯與語法完全正確。"
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
    "title": "「有」與「冇」之存在句與領屬表達 (Existential & Possessive 有 jau5 vs 冇 mou5)",
    "level": "A1",
    "objective": "掌握粵語存在動詞與領屬動詞「有」（jau5）及其強大否定對立詞「冇」（mou5）之句法結構。",
    "presentation": {
      "explanation": "粵語中「有」（jau5）與「冇」（mou5）構成高度對稱之肯定與否定體系：\n\n一、「有」之兩大功能：\n１．領屬所有（Possession）：「主語＋有＋賓語」。例如「我有兩部電話」（我有兩部手機）。\n２．存在句（Existence）：「處所＋有＋名詞」。例如「樓下有一間超市」（樓下有一家超市）。\n\n二、「冇」（mou5，第5聲低升調）之對稱否定：\n「冇」係粵語極具代表性之本字（字形由「有」內部兩橫被掏空演化而來），直接對應「沒有」：\n１．否定領屬：「我冇帶現金」（我沒帶現金）。\n２．否定存在：「呢度冇洗手間」（這裡沒有洗手間）。\n３．否定過去動作/完成貌（相當於未曾/沒有做）：「我琴日冇見過佢」（我昨天沒見過他）。",
      "examples": [
        {
          "target": "請問呢間茶餐廳有冇免費無線網絡呀？",
          "reading": "cing2 man6 ni1 gaan1 caa4 caan1 teng1 jau5 mou5 min5 fai3 mou4 sin3 mong5 lok3 aa3? [tsʰɪŋ˧˥ mɐn˨ niː˥ kaːn˥ tsʰaː˨˩ tsʰaːn˥ tʰɛːŋ˥ jɐu˩˧ mou˩˧ miːn˩˧ fɐi˧ mou˨˩ siːn˧ mɔːŋ˩˧ lɔːk˨ aː˧] (CHING-MUN NEE-GAHN CHAH-TSAHN-TENG YAU-MOU MEEN-FY MOU-SEEN-MONG-LOK AH?)",
          "translation": "Excuse me, does this cha chaan teng have free Wi-Fi?"
        },
        {
          "target": "唔好意思，我今日出門太急，冇帶雨遮。",
          "reading": "m4 hou2 ji3 si3, ngo5 gam1 jat6 ceot1 mun4 taai3 gap1, mou5 daai3 jyu5 ze1. [m̩˨˩ hou˧˥ jiː˧ siː˧, ŋɔː˩˧ kɐm˥ jɐt̚˨ tsʰɵt̚˥ muːn˨˩ tʰaːi˧ kɐp̚˥, mou˩˧ taːi˧ jyː˩˧ tsɛː˥] (M-HOH-YEE-SEE, NGOH GUM-YUT CHUT-MOON TY-GUP, MOU DY YOO-JEH)",
          "translation": "Sorry, I left home in a hurry today and didn't bring an umbrella."
        },
        {
          "target": "公司附近有好多間好地道嘅傳統茶樓。",
          "reading": "gung1 si1 fu6 gan6 jau5 hou2 do1 gaan1 hou2 dei6 dou6 ge3 cyun4 tung4 caa4 lau4. [kʊŋ˥ siː˥ fuː˨ kɐn˨ jɐu˩˧ hou˧˥ tɔː˥ kaːn˥ hou˧˥ tei˨ tou˨ kɛː˧ tsʰyːn˨˩ tʰʊŋ˨˩ tsʰaː˨˩ lɐu˨˩] (GOONG-SEE FOO-GUN YAU HOH-DOH GAHN HOH-DAY-DOH GEH TSUEN-TOONG CHAH-LAU)",
          "translation": "There are many very authentic traditional teahouses near the company."
        }
      ],
      "mnemonics": [
        "【字形記憶法】「有」中藏筆畫表擁有，「冇」字中空無一物即「沒有」；「有冇」相連成問句，一語道盡存與無！"
      ],
      "culturalNotes": [
        "在香港商戶詢問是否有某件商品時，最地道之正反問句係「請問有冇……呀？」（jau5 mou5 ... aa3?）。店員若有則答「有呀」，若售罄則答「冇喇 / 賣晒喇」。「有冇」係粵語使用率最高之核心詞組之一。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【正反問句】在便利店詢問店員「請問有沒有熱咖啡」，最地道之句式係：",
          "options": [
            "請問有冇熱咖啡呀？ (cing2 man6 jau5 mou5 jit6 gaa3 fe1 aa3?)",
            "請問是不是熱咖啡呀？",
            "請問有沒有熱咖啡是？",
            "請問熱咖啡有冇是？"
          ],
          "answerIndex": 0,
          "explanation": "「有冇」（jau5 mou5）係詢問有無最標準正宗之正反問構式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語意否定】粵語獨特字「冇」（mou5）之核心語法功能係：",
          "options": [
            "直接表達「沒有 / 未曾」",
            "表示「很多」",
            "表示「非常喜歡」",
            "表示「已經完成」"
          ],
          "answerIndex": 0,
          "explanation": "「冇」（mou5）在粵語中專門表示「沒有」或否定過去動作。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【問答匹配】對問句「你今日有冇帶八達通卡？」之標準否定答覆係：",
          "options": [
            "我今日冇帶。 (ngo5 gam1 jat6 mou5 daai3.)",
            "我今日唔係。 (ngo5 gam1 jat6 m4 hai6.)",
            "我今日唔得。 (ngo5 gam1 jat6 m4 dak1.)",
            "我今日唔使。 (ngo5 gam1 jat6 m4 sai2.)"
          ],
          "answerIndex": 0,
          "explanation": "回答「有冇」問句時，否定答「冇」（冇帶）。"
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
    "title": "茶樓飲茶文化與開茶禮儀：「一盅兩件」、「叩指謝茶」 (Yum Cha Culture & Tea Etiquette)",
    "level": "A1",
    "objective": "掌握粵式茶樓「飲茶」社交文化、開茶茶種選擇（普洱、香片、鐵觀音、水仙）及「叩指謝茶」地道禮儀。",
    "presentation": {
      "explanation": "「飲茶」（jam2 caa4）係嶺南及香港文化中最具代表性之飲食社交傳統，蘊含深厚之歷史禮儀：\n\n一、「一盅兩件」與開茶茶種：\n入座後侍應（伙計）第一句必問「飲咩茶？」（想要什麼茶？），顧客可選擇：\n１．「普洱」（bou2 lei2）：醇厚消滯，最為大眾化。\n２．「香片」（hoeng1 pin2）：茉莉花茶，清香怡人。\n３．「鐵觀音」（tit3 gun1 jam1）：烏龍茶類，茶味濃郁甘醇。\n４．「水仙」（seoi2 sin1）：福建閩北烏龍，岩韻悠長。\n５．「菊普」（guk1 bou2）：菊花茶混合普洱茶，清熱消脂。\n\n二、飲茶三大肢體禮儀暗號：\n１．「叩指謝茶」（kau3 zi2 lai5）：他人為自己倒茶時，食指與中指微屈在枱面輕叩兩三下，表示謝意（相傳源自乾隆皇帝微服南巡之典故）。\n２．「揭壺蓋」（kit3 wu4 goi3）：茶壺水飲完需要加熱水時，將壺蓋斜放在壺口或壺柄邊，侍應見到便會主動前來加熱水，無須大聲呼喊。",
      "examples": [
        {
          "target": "伙計，唔該開一壺熱普洱，兩位。",
          "reading": "fo2 gai3, m4 goi1 hoi1 jat1 wu4 jit6 bou2 lei2, loeng5 wai6. [fɔː˧˥ kɐi˧, m̩˨˩ kɔːi˥ hɔːi˥ jɐt̚˥ wuː˨˩ jiːt̚˨ pou˧˥ lei˩˧, lœːŋ˩˧ wɐi˨] (FOH-GY, M-GOY HOY YUT-WOO YEET POH-LAY, LEUNG-WY)",
          "translation": "Waiter, please make a pot of hot Pu-erh tea, for two people."
        },
        {
          "target": "朋友幫你斟茶嗰陣，記得要用手指叩枱表示多謝。",
          "reading": "pang4 jau5 bong1 nei5 zam1 caa4 go2 zan6, gei3 dak1 jiu3 jung6 sau2 zi2 kau3 toi2 biu2 si6 do1 ze6. [pʰɐŋ˨˩ jɐu˩˧ pɔːŋ˥ nei˩˧ tsɐm˥ tsʰaː˨˩ kɔː˧˥ tsɐn˨, kei˧ tɐk̚˥ jiu˧ jʊŋ˨ sɐu˧˥ tsiː˧˥ kʰɐu˧ tʰɔːi˧˥ piːu˧˥ siː˨ tɔː˥ tsɛː˨] (PUNG-YAU BONG-NEI JUM-CHAH GOH-JUN, GAY-DUK YEW YOONG SAU-JEE KAU-TOY BEW-SEE DOH-JEH)",
          "translation": "When a friend pours tea for you, remember to tap the table with fingers to express gratitude."
        },
        {
          "target": "禮拜日朝早，一家人齊齊整整去茶樓歎一盅兩件。",
          "reading": "lai5 baai3 jat6 ziu1 zou2, jat1 gaa1 jan4 cai4 cai4 zing2 zing2 heoi3 caa4 lau4 taan3 jat1 zung1 loeng5 gin6. [lɐi˩˧ paːi˧ jɐt̚˨ tsiːu˥ tsou˧˥, jɐt̚˥ kaː˥ jɐn˨˩ tsʰɐi˨˩ tsʰɐi˨˩ tsɪŋ˧˥ tsɪŋ˧˥ hɵy˧ tsʰaː˨˩ lɐu˨˩ tʰaːn˧ jɐt̚˥ tsʊŋ˥ lœːŋ˩˧ kiːn˨] (LY-BY-YUT JEW-JOH, YUT-GAH-YUN CHY-CHY JING-JING HOY CHAH-LAU TAHN YUT-JOONG LEUNG-GEEN)",
          "translation": "On Sunday morning, the whole family goes together to the teahouse to enjoy tea and dim sum."
        }
      ],
      "mnemonics": [
        "【飲茶三部曲】開茶首選「普洱」「香」，他人斟茶「叩指」忙；壺空「揭蓋」水自滿，「一盅兩件」福綿長！"
      ],
      "culturalNotes": [
        "粵語中的「歎」（taan3）意為極致享受，如「歎茶」（悠閒享受品茗之樂）、「歎世界」（享受生活）。「飲茶」在嶺南文化中不僅係飽腹，更係家人團聚、商務洽談與生活減壓之神聖社交時刻。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【開茶用語】在茶樓入座被問及「飲咩茶」，欲點選菊花與普洱調配之混合茶，應回答：",
          "options": [
            "唔該要菊普 (m4 goi1 jiu3 guk1 bou2)",
            "唔該要凍檸茶",
            "唔該要熱可樂",
            "唔該要蒸餾水"
          ],
          "answerIndex": 0,
          "explanation": "「菊普」（guk1 bou2）即菊花茶與普洱茶之經典調和。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【茶樓禮儀】在茶樓如果茶壺需要加水，最地道得體之做法係：",
          "options": [
            "將茶壺蓋揭開半搭在壺口邊 (kit3 caa4 wu4 goi3)",
            "大聲敲擊茶杯呼叫伙計",
            "自行拿著茶壺跑到廚房加水",
            "把茶壺倒扣在枱面上"
          ],
          "answerIndex": 0,
          "explanation": "「揭開壺蓋」係粵港茶樓通用默契信號，侍應見到即會主動前來加熱水。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【社交文化】他人為你斟茶時，用手指在枱面輕叩兩下（叩指禮）之寓意係：",
          "options": [
            "表示感謝 (do1 ze6 / 謝茶)",
            "表示茶太燙",
            "表示茶不好喝",
            "要求更換茶杯"
          ],
          "answerIndex": 0,
          "explanation": "「叩指謝茶」（kau3 zi2 lai5）係嶺南飲茶文化中最高雅普及之感謝手勢。"
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
    "title": "經典粵式點心四大天王：蝦餃、燒賣、叉燒包、蛋撻 (The Big Four Dim Sum & Ordering)",
    "level": "A1",
    "objective": "掌握粵式點心「四大天王」與高頻點心名稱及點心紙（加單、劃單）點餐語句。",
    "presentation": {
      "explanation": "粵式飲茶點心以做工精細、皮薄餡靚著稱，其中譽為「四大天王」者為：\n\n一、點心「四大天王」：\n１．「蝦餃」（haa1 gaau2）：水晶皮晶瑩剔透，鮮蝦爽口彈牙。\n２．「燒賣」（siu1 maai2）：黃色薄皮裹豬肉鮮蝦與蟹籽香菇。\n３．「叉燒包」（caa1 siu1 baau1）：蠔油叉燒餡，鬆軟開口如花笑。\n４．「蛋撻」（daan6 taat1）：酥皮或牛油皮裹金黃香滑蛋漿。\n\n二、其他高頻必食點心：\n１．「腸粉」（coeng2 fan2）：鮮蝦腸（haa1 coeng2）、牛肉腸（ngau4 coeng2）、叉燒腸（caa1 siu1 coeng2）。\n２．「鳳爪」（fung6 zaau2）：豉汁蒸鳳爪（sauce braised chicken feet）。\n３．「山竹牛肉球」（saan1 zuk1 ngau4 juk6 kau4）：嫩滑牛肉球墊腐竹。\n４．「蘿蔔糕」（lo4 baak6 gou1）：煎香白蘿蔔絲臘味糕點。\n\n三、點餐動作：\n「填點心紙」（tin4 dim2 sam1 zi2）、「加單」（gaa1 daan1，加點）。",
      "examples": [
        {
          "target": "唔該幫我哋叫一籠筍尖蝦餃同兩籠蟹籽燒賣。",
          "reading": "m4 goi1 bong1 ngo5 dei6 giu3 jat1 lung4 seon2 zim1 haa1 gaau2 tung4 loeng5 lung4 haai5 zi2 siu1 maai2. [m̩˨˩ kɔːi˥ pɔːŋ˥ ŋɔː˩˧ tei˨ kiːu˧ jɐt̚˥ lʊŋ˨˩ sɵn˧˥ tsiːm˥ haː˥ kaːu˧˥ tʰʊŋ˨˩ lœːŋ˩˧ lʊŋ˨˩ haːi˩˧ tsiː˧˥ siːu˥ maːi˨] (M-GOY BONG NGOH-DAY GEW YUT-LOONG SOON-JEEM HAH-GOW TOONG LEUNG-LOONG HY-JEE SEW-MY)",
          "translation": "Excuse me, please order one steamer of shrimp dumplings and two steamers of crab roe siu mai for us."
        },
        {
          "target": "呢度嘅鮮蝦腸粉皮薄爽滑，豉油好香甜。",
          "reading": "ni1 dou6 ge3 sin1 haa1 coeng2 fan2 pei4 bok6 song2 waat6, si6 jau4 hou2 hoeng1 tim4. [niː˥ tou˨ kɛː˧ siːn˥ haː˥ tsʰœːŋ˧˥ fɐn˧˥ pʰei˨˩ pɔːk̚˨ sɔːŋ˧˥ waːt̚˨, siː˨ jɐu˨˩ hou˧˥ hœːŋ˥ tʰiːm˨˩] (NEE-DOH GEH SEEN-HAH CHEUNG-FUN PAY-BOK SONG-WAHT, SEE-YAU HOH HEUNG-TEEM)",
          "translation": "The fresh shrimp rice noodle rolls here have thin and smooth wrapper; the soy sauce is very aromatic and sweet."
        },
        {
          "target": "我哋食完點心之後，可唔可以再加單叫幾件蛋撻？",
          "reading": "ngo5 dei6 sik6 jyun4 dim2 sam1 zi1 hau6, ho2 m4 ho2 ji5 zoi3 gaa1 daan1 giu3 gei2 gin6 daan6 taat1? [ŋɔː˩˧ tei˨ sɪk̚˨ jyːn˨˩ tiːm˧˥ sɐm˥ tsiː˥ hɐu˨, hɔː˧˥ m̩˨˩ hɔː˧˥ jiː˩˧ tsɔːi˧ kaː˥ taːn˥ kiːu˧ kei˧˥ kiːn˨ taːn˨ tʰaːt̚˥] (NGOH-DAY SIK-YUEN DEEM-SUM JEE-HAU, HOH-M-HOH-YEE JOY GAH-DAHN GEW GAY-GEEN DAHN-TAHT?)",
          "translation": "After finishing the dim sum, can we add to the order and get a few egg tarts?"
        }
      ],
      "mnemonics": [
        "【點心四大王】蝦餃晶瑩鮮又爽，燒賣金黃蟹籽亮；叉燒熱氣爆包香，蛋撻甜脆心舒暢！"
      ],
      "culturalNotes": [
        "點心計量常以「籠」（lung4，蒸籠）或「碟」（dip6）為單位，如「一籠蝦餃」、「一碟腸粉」。早年茶樓有點心車（點心阿姐推車叫賣），現代多改為在「點心紙」上劃選，即叫即蒸。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【點心搭配】以下邊一項屬於廣東傳統點心「四大天王」之一？",
          "options": [
            "蝦餃 (haa1 gaau2)",
            "炸薯條",
            "漢堡包",
            "比薩餅"
          ],
          "answerIndex": 0,
          "explanation": "「蝦餃、燒賣、叉燒包、蛋撻」合稱點心四大天王。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【點餐詞彙】在茶樓用餐中途欲加點幾道點心，應向伙計講：",
          "options": [
            "伙計，唔該加單！ (fo2 gai3, m4 goi1 gaa1 daan1!)",
            "伙計，唔該埋單！",
            "伙計，唔該早晨！",
            "伙計，唔該走先！"
          ],
          "answerIndex": 0,
          "explanation": "加點菜式稱為「加單」（gaa1 daan1），而「埋單」係結帳買單。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【量詞點餐】欲點選兩份蒸籠點心燒賣，最地道之量詞搭配係：",
          "options": [
            "兩籠燒賣 (loeng5 lung4 siu1 maai2)",
            "兩部燒賣",
            "兩條燒賣",
            "兩間燒賣"
          ],
          "answerIndex": 0,
          "explanation": "蒸籠點心使用量詞「籠」（lung4）。"
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
    "title": "茶餐廳術語與特色餐點：菠蘿油、凍檸茶、乾炒牛河、鴛鴦 (Cha Chaan Teng Lingo & Classics)",
    "level": "A1",
    "objective": "掌握茶餐廳核心特色餐點（菠蘿油、乾炒牛河、西多士）與經典港式飲品（凍檸茶、絲襪奶茶、鴛鴦）。",
    "presentation": {
      "explanation": "香港「茶餐廳」（caa4 caan1 teng1）融合中西飲食精粹，發展出獨樹一幟之飲食符號：\n\n一、茶餐廳招牌餐點：\n１．「菠蘿油」（bo1 lo4 jau4）：熱辣菠蘿包中間夾一片厚切冰冷牛油，冰火交融。\n２．「乾炒牛河」（gon1 caau2 ngau4 ho2）：芽菜牛肉炒河粉，極講求「鑊氣」（wok6 hei3）。\n３．「西多士」（sai1 do1 si2，法蘭西多士）：沾蛋漿油炸之夾心吐司，淋上牛油糖漿。\n４．「沙爹牛肉麵」（saa1 de1 ngau4 juk6 min6）：濃郁沙爹牛肉配出前一丁即食麵。\n\n二、靈魂飲品體系：\n１．「凍檸茶」（dung3 ning4 caa4）：紅茶底加四五片鮮檸檬與碎冰，飲前用茶匙「篤檸檬」（duk1 ning4 mung1，戳壓檸檬榨汁）。\n２．「港式奶茶」（gong2 sik1 naai5 caa4）：多種斯里蘭卡紅茶拼配，經棉紗網拉茶沖撞淡奶，香濃順滑。\n３．「鴛鴦」（jin1 joeng1）：七成奶茶混合三成咖啡，兼具咖啡香氣與奶茶幼滑。",
      "examples": [
        {
          "target": "下午茶時間，我最鍾意食一個熱辣辣嘅菠蘿油配一杯凍檸茶。",
          "reading": "haa6 zau3 caa4 si4 gaan3, ngo5 zeoi3 zung1 ji3 sik6 jat1 go3 jit6 laat6 laat6 ge3 bo1 lo4 jau4 pui3 jat1 bui1 dung3 ning4 caa4. [haː˨ tsʰaː˨˩ siː˨˩ kaːn˧, ŋɔː˩˧ tsɵy˧ tsʊŋ˥ jiː˧ sɪk̚˨ jɐt̚˥ kɔː˧ jiːt̚˨ laːt̚˨ laːt̚˨ kɛː˧ pɔː˥ lɔː˨˩ jɐu˨˩ pʰuːi˧ jɐt̚˥ puːi˥ tʊŋ˧ nɪŋ˨˩ tsʰaː˨˩] (HAH-TSAH-SEE-GAHN, NGOH JOY JOONG-YEE SIK YUT-GOH YEET-LAHT-LAHT GEH BOH-LOH-YAU POOY YUT-BOOY DOONG-NING-CHAH)",
          "translation": "At afternoon tea time, my favourite is having a piping hot pineapple bun with butter paired with an iced lemon tea."
        },
        {
          "target": "呢碟乾炒牛河鑊氣十足，牛肉好嫩，河粉又唔油膩。",
          "reading": "ni1 dip6 gon1 caau2 ngau4 ho2 wok6 hei3 sap6 zuk1, ngau4 juk6 hou2 nyun6, ho4 fan2 jau6 m4 jau4 nei6. [niː˥ tiːp̚˨ kɔːn˥ tsʰaːu˧˥ ŋɐu˨˩ hɔː˧˥ wɔːk˨ hei˧ sɐp̚˨ tsʊk̚˥, ŋɐu˨˩ jʊk̚˨ hou˧˥ nyːn˨, hɔː˨˩ fɐn˧˥ jɐu˨ m̩˨˩ jɐu˨˩ nei˨] (NEE-DEEP GON-CHAU NGAU-HOH WOK-HEY SUP-JOOK, NGAU-YOOK HOH-NUEN, HOH-FUN YAU M-YAU-NAY)",
          "translation": "This plate of stir-fried beef flat noodles is full of wok hei; the beef is very tender and the noodles are not greasy."
        },
        {
          "target": "唔該畀一杯熱鴛鴦，咖啡同奶茶嘅比例調得啱啱好。",
          "reading": "m4 goi1 bei2 jat1 bui1 jit6 jin1 joeng1, gaa3 fe1 tung4 naai5 caa4 ge3 bei2 lai6 tiu4 dak1 aam1 aam1 hou2. [m̩˨˩ kɔːi˥ pei˧˥ jɐt̚˥ puːi˥ jiːt̚˨ jiːn˥ jœːŋ˥, kaː˧ fɛː˥ tʰʊŋ˨˩ naːi˩˧ tsʰaː˨˩ kɛː˧ pei˧˥ lɐi˨ tʰiːu˨˩ tɐk̚˥ aːm˥ aːm˥ hou˧˥] (M-GOY BAY YUT-BOOY YEET YEEN-YEUNG, GAH-FEH TOONG NY-CHAH GEH BAY-LY TEW-DUK AHM-AHM-HOH)",
          "translation": "Please give me a hot Yuenyeung; the proportion of coffee and milk tea is tuned just right."
        }
      ],
      "mnemonics": [
        "【茶餐廳名物】「菠蘿油」香夾牛油，「凍檸茶」篤汁爽透；「乾炒牛河」鑊氣足，「鴛鴦」奶啡融入口！"
      ],
      "culturalNotes": [
        "「乾炒牛河」被視為考驗粵菜廚師功底之試金石：必須達到「鑊氣夠、牛肉嫩、河粉條條分明完整且盤底無多餘積油」之境界。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【特飲常識】港式特色飲品「鴛鴦」（jin1 joeng1）之主要原料配方係：",
          "options": [
            "奶茶混合咖啡 (naai5 caa4 + gaa3 fe1)",
            "綠茶混合紅茶",
            "檸檬水混合可樂",
            "豆漿混合牛奶"
          ],
          "answerIndex": 0,
          "explanation": "「鴛鴦」係港式奶茶與咖啡按獨特比例調製而成之經典混搭飲品。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【烘焙名產】「菠蘿油」（bo1 lo4 jau4）與普通「菠蘿包」之最大區別係：",
          "options": [
            "中間夾入了一片厚切冰牛油",
            "裡面包了真正的菠蘿果肉",
            "麵包頂部塗上了朱古力醬",
            "麵包是用油炸熟的"
          ],
          "answerIndex": 0,
          "explanation": "「菠蘿油」係在剛出爐之熱菠蘿包中橫切夾入厚切冰凍牛油（牛油遇熱半融）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【品味習慣】在香港茶餐廳飲「凍檸茶」時，顧客常拿茶匙做邊個動作以萃取檸檬汁？",
          "options": [
            "篤檸檬 (duk1 ning4 mung1 / 戳壓檸檬)",
            "撈走檸檬扔掉",
            "把茶水倒進杯蓋",
            "加大量白開水"
          ],
          "answerIndex": 0,
          "explanation": "「篤檸檬」（用茶匙反覆戳壓檸檬片）係港人釋放檸檬香氣酸味之經典習慣。"
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
    "title": "茶餐廳定製點餐暗號：走甜、少甜、走冰、少冰、烘底 (Customization Jargon)",
    "level": "A1",
    "objective": "掌握茶餐廳高度個性化之定製術語（走甜、少甜、走冰、少冰、走青、烘底、飛邊、多汁）。",
    "presentation": {
      "explanation": "香港茶餐廳點餐講求快、準、客製化，形成了一整套極高效率之定製暗號：\n\n一、甜度與冰量控制：\n１．「走甜」（zau2 tim4）：不加糖水/糖漿（完全無糖）。\n２．「少甜」（siu2 tim4）：少放糖漿（減半甜度）。\n３．「走冰」（zau2 bing1）：不加冰塊（去冰）。\n４．「少冰」（siu2 bing1）：減少冰塊（微冰）。\n５．「多冰」（do1 bing1）：多加碎冰。\n\n二、食材與烹飪要求：\n１．「烘底」（hung3 dai2）：三文治麵包用多士爐烘烤至金黃酥脆（通常加收 1-2 元）。\n２．「飛邊」（fei1 bin1）：將三文治麵包皮邊切除。\n３．「走青」（zau2 ceng1）：麵食粥品中不放蔥花、芫荽等青綠調料。\n４．「多飯」（do1 faan6）/「少飯」（siu2 faan6）/「多汁」（do1 zap1，多淋醬汁）。",
      "examples": [
        {
          "target": "唔該伙計，叫一份蛋治烘底，配一杯凍奶茶少甜少冰。",
          "reading": "m4 goi1 fo2 gai3, giu3 jat1 fan6 daan6 zi6 hung3 dai2, pui3 jat1 bui1 dung3 naai5 caa4 siu2 tim4 siu2 bing1. [m̩˨˩ kɔːi˥ fɔː˧˥ kɐi˧, kiːu˧ jɐt̚˥ fɐn˨ taːn˨ tsiː˨ hʊŋ˧ tɐi˧˥, pʰuːi˧ jɐt̚˥ puːi˥ tʊŋ˧ naːi˩˧ tsʰaː˨˩ siːu˧˥ tʰiːm˨˩ siːu˧˥ pɪŋ˥] (M-GOY FOH-GY, GEW YUT-FUN DAHN-JEE HOONG-DY, POOY YUT-BOOY DOONG-NY-CHAH SEW-TEEM SEW-BING)",
          "translation": "Excuse me waiter, order an egg sandwich on toasted bread, paired with an iced milk tea less sweet and less ice."
        },
        {
          "target": "我碗雲吞麵要走青，唔要蔥同芫荽。",
          "reading": "ngo5 wun2 wan4 tan1 min6 jiu3 zau2 ceng1, m4 jiu3 cung1 tung4 jin4 seoi1. [ŋɔː˩˧ wuːn˧˥ wɐn˨˩ tʰɐn˥ miːn˨ jiu˧ tsɐu˧˥ tsʰɛːŋ˥, m̩˨˩ jiu˧ tsʰʊŋ˥ tʰʊŋ˨˩ jiːn˨˩ sɵy˥] (NGOH-WOON WUN-TUN-MEEN YEW JAU-CHENG, M-YEW CHOONG TOONG YEEN-SOEY)",
          "translation": "My bowl of wonton noodles needs 'zau ceng'—no scallions and no coriander."
        },
        {
          "target": "叫多一碟牛腩飯，記得同廚房講要多汁少飯呀。",
          "reading": "giu3 do1 jat1 dip6 ngau4 naam5 faan6, gei3 dak1 tung4 cyu4 fong2 gong2 jiu3 do1 zap1 siu2 faan6 aa3. [kiːu˧ tɔː˥ jɐt̚˥ tiːp̚˨ ŋɐu˨˩ naːm˩˧ faːn˨, kei˧ tɐk̚˥ tʰʊŋ˨˩ tsʰyː˨˩ fɔːŋ˧˥ kɔːŋ˧˥ jiu˧ tɔː˥ tsɐp̚˥ siːu˧˥ faːn˨ aː˧] (GEW-DOH YUT-DEEP NGAU-NAHM-FAHN, GAY-DUK TOONG CHU-FONG GONG YEW DOH-JUP SEW-FAHN AH)",
          "translation": "Order one more beef brisket rice; remember to tell the kitchen extra sauce and less rice."
        }
      ],
      "mnemonics": [
        "【客製暗號訣】去糖「走甜」減「少甜」，「走冰」「少冰」隨心選；三文「烘底」「飛」其邊，粉麵「走青」蔥草免！"
      ],
      "culturalNotes": [
        "茶餐廳點單時，動詞「走」（zau2）表示去除或免去（如「走甜」免糖、「走冰」免冰、「走青」免蔥）。這種高度簡潔靈活之語言體系體現出香港人追求極致效率之生活美學。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【點餐術語】在茶餐廳點凍飲時，如果不想要加糖漿，應說：",
          "options": [
            "走甜 (zau2 tim4)",
            "多甜 (do1 tim4)",
            "走冰 (zau2 bing1)",
            "烘底 (hung3 dai2)"
          ],
          "answerIndex": 0,
          "explanation": "「走甜」（zau2 tim4）即免糖、不放糖漿。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【三文治術語】點餐時講「腿蛋治烘底」，其中「烘底」之意思係：",
          "options": [
            "將三文治麵包在多士爐中烤脆 (Toasted)",
            "切除麵包皮",
            "加多一隻煎蛋",
            "加大量番茄醬"
          ],
          "answerIndex": 0,
          "explanation": "「烘底」（hung3 dai2）指將吐司烘烤成多士。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【飲食禁忌】顧客點雲吞麵時強調「走青」，廚師出餐時會排除以下邊種食材？",
          "options": [
            "蔥花與芫荽 (cung1 tung4 jin4 seoi1)",
            "雲吞與蝦肉",
            "麵條與湯底",
            "大地魚乾"
          ],
          "answerIndex": 0,
          "explanation": "「青」（ceng1）指綠色調味料蔥花與芫荽，「走青」即不要蔥芫荽。"
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
    "title": "食肆結帳與打包禮儀：「埋單」、「搭枱」、「打包 / 外賣」 (Billing & Table Sharing)",
    "level": "A1",
    "objective": "掌握香港餐飲結帳（埋單）、併桌文化（搭枱）、剩菜打包（打包）與外帶打包（外賣/行街）之全套交際用語。",
    "presentation": {
      "explanation": "在香港餐飲場景中，結帳與就餐空間共享具有獨特之語言與文化規範：\n\n一、結帳買單用語：\n１．「埋單」（maai4 daan1）：最核心之結帳買單詞彙（相傳源自昔日水上人泊船靠岸「埋岸」算清費用賬單）。\n２．「唔該埋單，分開畀定一齊畀？」（麻煩結帳，分開付還是一起付？）\n３．「收銀處 / 櫃檯」（sau1 ngan4 cyu3）：部分茶餐廳需持水牌/帳單自行到收銀台付款。\n\n二、就餐空間與外賣術語：\n１．「搭枱」（daap3 toi2）：午市繁忙客滿時，互不相識之顧客合坐同一張枱用餐。侍應會問「兩位呀？搭唔搭枱呀？」（兩位嗎？介意拼桌嗎？）。\n２．「打包」（daa2 baau1）：將堂食未食完之剩餘菜餚裝盒帶走。\n３．「外賣」（ngoi6 maai6）：直接外帶，對比「堂食」（tong4 sik6，在店內吃）。\n４．「行街」（haang4 gaai1）：飲品店或茶餐廳外帶熱/凍飲之俚語說法（如「一杯凍檸茶行街」）。",
      "examples": [
        {
          "target": "午飯時間周圍都好多人，我哋唔介意搭枱呀。",
          "reading": "ng5 faan6 si4 gaan3 zau1 wai4 dou1 hou2 do1 jan4, ngo5 dei6 m4 gaai3 ji3 daap3 toi2 aa3. [ŋ̍˩˧ faːn˨ siː˨˩ kaːn˧ tsɐu˥ wɐi˨˩ tou˥ hou˧˥ tɔː˥ jɐn˨˩, ŋɔː˩˧ tei˨ m̩˨˩ kaːi˧ jiː˧ taːp̚˧ tʰɔːi˧˥ aː˧] (NG-FAHN SEE-GAHN JAU-WY DOH HOH-DOH YUN, NGOH-DAY M-GY-YEE DAHP-TOY AH)",
          "translation": "During lunchtime everywhere is crowded; we don't mind sharing a table."
        },
        {
          "target": "伙計，唔該埋單，另外呢碟炒飯食唔晒想打包。",
          "reading": "fo2 gai3, m4 goi1 maai4 daan1, ling6 ngoi6 ni1 dip6 caau2 faan6 sik6 m4 saai3 soeng2 daa2 baau1. [fɔː˧˥ kɐi˧, m̩˨˩ kɔːi˥ maːi˨˩ taːn˥, lɪŋ˨ ŋɔːi˨ niː˥ tiːp̚˨ tsʰaːu˧˥ faːn˨ sɪk̚˨ m̩˨˩ saːi˧ sœːŋ˧˥ taː˧˥ paːu˥] (FOH-GY, M-GOY MY-DAHN, LING-NGOY NEE-DEEP CHAU-FAHN SIK-M-SY SEUNG DY-BAU)",
          "translation": "Waiter, check please; also we can't finish this fried rice and would like to box it up."
        },
        {
          "target": "請問喺度堂食定係拎走外賣？我要外賣行街呀。",
          "reading": "cing2 man6 hai2 dou6 tong4 sik6 ding6 hai6 ling1 zau2 ngoi6 maai6? ngo5 jiu3 ngoi6 maai6 haang4 gaai1 aa3. [tsʰɪŋ˧˥ mɐn˨ hɐi˩˧ tou˨ tʰɔːŋ˨˩ sɪk̚˨ tɪŋ˨ hɐi˨ lɪŋ˥ tsɐu˧˥ ŋɔːi˨ maːi˨? ŋɔː˩˧ jiu˧ ŋɔːi˨ maːi˨ haːŋ˨˩ kaːi˥ aː˧] (CHING-MUN HY-DOH TONG-SIK DING-HY LING-JAU NGOY-MY? NGOH YEW NGOY-MY HAHNG-GY AH)",
          "translation": "Excuse me, dine-in here or take away? I want takeout to go."
        }
      ],
      "mnemonics": [
        "【食肆收尾歌】食畢高呼「埋單」清，人多客滿「搭枱」迎；剩餸裝盒稱「打包」，外帶「行街」樂同行！"
      ],
      "culturalNotes": [
        "「搭枱」係香港寸土寸金環境下催生之獨特飲食默契。搭枱就座後，大家心照不宣各自專注用餐睇報紙或滑手機，互不干擾，展現高度成熟之都市公共空間素養。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【結帳用語】在香港食肆用餐完畢欲結帳付款，最地道核心之粵語說法係：",
          "options": [
            "埋單 (maai4 daan1)",
            "買菜",
            "加單",
            "開茶"
          ],
          "answerIndex": 0,
          "explanation": "「埋單」（maai4 daan1）係粵語結帳之絕對通用詞。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【就餐文化】在茶餐廳繁忙時間，侍應引導兩位互不認識之顧客同坐一張四人桌，此現象稱為：",
          "options": [
            "搭枱 (daap3 toi2)",
            "開枱 (hoi1 toi2)",
            "拆枱 (caak3 toi2)",
            "擺枱 (baai2 toi2)"
          ],
          "answerIndex": 0,
          "explanation": "「搭枱」（daap3 toi2）即與陌生人拼桌共用一張餐桌。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【外賣俚語】在港式茶飲店點了一杯熱奶茶並打算邊走邊喝帶走，店員常稱之為：",
          "options": [
            "行街 (haang4 gaai1 / 外帶帶走)",
            "堂食 (tong4 sik6)",
            "坐低 (co5 dai1)",
            "搭枱 (daap3 toi2)"
          ],
          "answerIndex": 0,
          "explanation": "飲品外帶邊行邊飲被俚俗稱為「行街」（如「熱奶茶行街」）。"
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
    "title": "完成貌助詞「咗」（zo2）及其與普通話「了」之深層異同 (Perfective Aspect ZO)",
    "level": "A2",
    "objective": "掌握粵語核心完成貌助詞「咗」（zo2）之緊隨動詞語法規則及其與「未/仲未」否定對立。",
    "presentation": {
      "explanation": "粵語中表達動作已經完成之核心動態助詞為「咗」（zo2，第2聲陰上調）：\n\n一、「咗」之語法位置與特徵：\n１．「咗」必須緊貼動詞之後（「動詞＋咗＋賓語」）。例如「我食咗早餐」（我吃了早餐）、「佢買咗新衫」（他買了新衣服）。\n２．粵語中「咗」不作句末語氣詞。普通話句末表變化的「了」（如「下雨了」），粵語對應為句尾語氣詞「喇 / 啦」（laa3），如「落雨喇」，兩者分工極為涇渭分明。\n\n二、「咗」之否定體系：\n否定已完成動作時，必須去掉「咗」，改用「未」（mei6，還未）或「仲未」（zung6 mei6，還沒有）：\n１．肯定：「我做咗功課喇。」（我做了功課了。）\n２．否定：「我仲未做功課。」（我還沒有做功課。——嚴禁說「我冇做咗功課」）。",
      "examples": [
        {
          "target": "我已經寄咗份重要文件畀香港辦事處喇。",
          "reading": "ngo5 ji5 ging1 gei3 zo2 fan6 zung6 jiu3 man4 gin2 bei2 hoeng1 gong2 baan6 si6 cyu3 laa3. [ŋɔː˩˧ jiː˩˧ kɪŋ˥ kei˧ tsɔː˧˥ fɐn˨ tsʊŋ˨ jiu˧ mɐn˨˩ kiːn˧˥ pei˧˥ hœːŋ˥ kɔːŋ˧˥ paːn˨ siː˨ tsʰyː˧ laː˧] (NGOH YEE-GING GAY-JOR FUN JOONG-YEW MUN-GEEN BAY HEUNG-GONG BAHN-SEE-CHUE LAH)",
          "translation": "I have already sent that important document to the Hong Kong office."
        },
        {
          "target": "佢哋啱啱搭咗地鐵去尖沙咀參加展覽會。",
          "reading": "keoi5 dei6 aam1 aam1 daap3 zo2 dei6 tit3 heoi3 zim1 saa1 zeoi2 caam1 gaa1 zin2 laam5 wui6. [kʰɵy˩˧ tei˨ aːm˥ aːm˥ taːp̚˧ tsɔː˧˥ tei˨ tʰiːt̚˧ hɵy˧ tsɪm˥ saː˥ tsɵy˧˥ tsʰaːm˥ kaː˥ tsiːn˧˥ laːm˩˧ wuːi˨] (KUY-DAY AHM-AHM DAHP-JOR DAY-TEET HOY JEEM-SAH-TSOY TSAHM-GAH JEEN-LAHM-WOOEY)",
          "translation": "They just took the MTR to Tsim Sha Tsui to attend the exhibition."
        },
        {
          "target": "你食咗晏晝飯未呀？我仲未食，不如一齊去飲茶啦。",
          "reading": "nei5 sik6 zo2 aan3 zau3 faan6 mei6 aa3? ngo5 zung6 mei6 sik6, bat1 jyu4 jat1 cai4 heoi3 jam2 caa4 laa1. [nei˩˧ sɪk̚˨ tsɔː˧˥ aːn˧ tsɐu˧ faːn˨ mei˨ aː˧? ŋɔː˩˧ tsʊŋ˨ mei˨ sɪk̚˨, pɐt̚˥ jyː˨˩ jɐt̚˥ tsʰɐi˨˩ hɵy˧ jɐm˧˥ tsʰaː˨˩ laː˥] (NEI SIK-JOR AHN-JAU-FAHN MAY AH? NGOH JOONG-MAY SIK, BUT-YOO YUT-CHY HOY YUM-CHAH LAH)",
          "translation": "Have you eaten lunch yet? I haven't eaten yet; why don't we go for yum cha together."
        }
      ],
      "mnemonics": [
        "【完成貌口訣】動作完畢緊跟「咗」，緊貼動詞不蹉跎；否定切記換「仲未」，句尾變化用「喇」收！"
      ],
      "culturalNotes": [
        "廣東人見面問候常講「食咗飯未呀？」（sik6 zo2 faan6 mei6 aa3？），回答若已吃則講「食咗喇」，若未吃則講「未呀 / 仲未食」，係嶺南飲食文化投射於人際社交之體現。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【語法造句】欲表達「我已經買了車票」，正確之粵語句子係：",
          "options": [
            "我已經買咗車飛喇。 (ngo5 ji5 ging1 maai5 zo2 ce1 fei1 laa3.)",
            "我已經買車飛咗喇。",
            "我已經買車飛了。",
            "我買咗車飛已經冇。"
          ],
          "answerIndex": 0,
          "explanation": "「咗」（zo2）必須緊跟在動詞「買」之後（買咗車飛）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【否定轉換】對問句「你簽咗份合約未？」，標準之否定回答係：",
          "options": [
            "我仲未簽。 (ngo5 zung6 mei6 cim1.)",
            "我冇簽咗。",
            "我唔係簽咗。",
            "我未簽咗。"
          ],
          "answerIndex": 0,
          "explanation": "否定完成貌使用「未 / 仲未」，同時必須去掉「咗」（仲未簽）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法辨析】關於粵語助詞「咗」（zo2）之用法，以下敘述何者完全正確？",
          "options": [
            "必須緊隨動詞之後表示動作完成",
            "必須放在句末表示狀態改變",
            "可以用於否定句「冇＋動詞＋咗」",
            "只能用於形容詞後面"
          ],
          "answerIndex": 0,
          "explanation": "「咗」作為動態助詞，必須緊貼動詞後面。"
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
    "title": "進行貌助詞「緊」（gan2）與持續態 (Progressive Aspect GAN)",
    "level": "A2",
    "objective": "掌握粵語進行貌助詞「緊」（gan2）表達「正在進行某動作」之精準語法結構。",
    "presentation": {
      "explanation": "粵語中表達動作正在進行中（相當於英語 '-ing' 或普通話『正在……』）之核心助詞為「緊」（gan2，第2聲陰上調）：\n\n一、「緊」之句法規則：\n１．「主語＋動詞＋緊＋賓語」：例如「我睇緊電視」（我正在看電視）、「佢哋開緊會」（他們正在開會）。\n２．可與副詞「正喺度 / 喺度」（正在）結合加強語氣：「我正喺度寫緊報告」（我正在寫著報告）。\n\n二、高頻進行時問答：\n１．「你做緊乜嘢呀？」（你正在做什麼？）\n２．「我執緊行李，準備聽日搭飛機出差。」（我正在收拾行李，準備明天坐飛機出差。）",
      "examples": [
        {
          "target": "唔好意思，我揸緊車，陣間停低車再打返畀你。",
          "reading": "m4 hou2 ji3 si3, ngo5 zaa1 gan2 ce1, zan6 gaan1 ting4 dai1 ce1 zoi3 daa2 faan1 bei2 nei5. [m̩˨˩ hou˧˥ jiː˧ siː˧, ŋɔː˩˧ tsaː˥ kɐn˧˥ tsʰɛː˥, tsɐn˨ kaːn˥ tʰɪŋ˨˩ tɐi˥ tsʰɛː˥ tsɔːi˧ taː˧˥ faːn˥ pei˧˥ nei˩˧] (M-HOH-YEE-SEE, NGOH JAH-GUN-CHEH, JUN-GAHN TING-DY-CHEH JOY DY-FAHN BAY-NEI)",
          "translation": "Sorry, I am driving right now; I will call you back once I pull over in a moment."
        },
        {
          "target": "陳教授喺課室入面同學生講緊語言學歷史。",
          "reading": "can4 gaau3 sau6 hai2 fo3 sat1 jap6 min6 tung4 hok6 saang1 gong2 gan2 jyu5 jin4 hok6 lik6 si2. [tsʰɐn˨˩ kaːu˧ sɐu˨ hɐi˩˧ fɔː˧ sɐt̚˥ jɐp˨ miːn˨ tʰʊŋ˨˩ hɔːk˨ saːŋ˥ kɔːŋ˧˥ kɐn˧˥ jyː˩˧ jiːn˨˩ hɔːk˨ lɪk˨ siː˧˥] (CHUN GAU-SAU HY FOH-SUT YUP-MEEN TOONG HOK-SAHNG GONG-GUN YOO-YEEN-HOK LIK-SEE)",
          "translation": "Professor Chan is explaining the history of linguistics to students in the classroom."
        },
        {
          "target": "出面落緊大雨，出門口記得帶把雨遮呀。",
          "reading": "ceot1 min6 lok6 gan2 daai6 jyu5, ceot1 mun4 hau2 gei3 dak1 daai3 baa2 jyu5 ze1 aa3. [tsʰɵt̚˥ miːn˨ lɔːk˨ kɐn˧˥ taːi˨ jyː˩˧, tsʰɵt̚˥ muːn˨˩ hɐu˧˥ kei˧ tɐk̚˥ taːi˧ paː˧˥ jyː˩˧ tsɛː˥ aː˧] (CHUT-MEEN LOK-GUN DY-YOO, CHUT-MOON-HAU GAY-DUK DY BAH YOO-JEH AH)",
          "translation": "It is raining heavily outside; remember to take an umbrella when heading out."
        }
      ],
      "mnemonics": [
        "【進行貌口訣】當下動作正在行，動詞後便緊接「緊」；揸車講電話唔得，專心辦事最醒神！"
      ],
      "culturalNotes": [
        "接到電話若不便通話，香港人最常用之禮貌應對即係「動詞＋緊」（如「開緊會」、「食緊飯」、「行緊路」），簡練明快直指當下狀態。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【進行時態】欲表達「他正在聽音樂」，最地道之粵語句子係：",
          "options": [
            "佢聽緊音樂。 (keoi5 teng1 gan2 jam1 ngok6.)",
            "佢聽咗音樂。",
            "佢聽過音樂。",
            "佢聽住音樂喇。"
          ],
          "answerIndex": 0,
          "explanation": "「動詞＋緊」（聽緊）表示動作正在進行中。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語意理解】句子「我覆緊客戶電郵」表示之時間狀態係：",
          "options": [
            "說話當下正在回覆客戶郵件 (Progressive)",
            "昨天已經回覆完了客戶郵件",
            "從來沒有回覆過客戶郵件",
            "明天打算回覆客戶郵件"
          ],
          "answerIndex": 0,
          "explanation": "「覆緊」（覆＋緊）精確標記當下正在進行之動作。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語句糾錯】在以下句子中，邊句正確運用「緊」表達「正在下雨」？",
          "options": [
            "出面落緊雨。 (ceot1 min6 lok6 gan2 jyu5.)",
            "出面緊落雨。",
            "出面落雨緊。",
            "出面緊雨落。"
          ],
          "answerIndex": 0,
          "explanation": "「緊」必須緊貼動詞「落」（落緊雨）。"
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
    "title": "經歷貌助詞「過」（gwo3）與人生體驗表達 (Experiential Aspect GWO)",
    "level": "A2",
    "objective": "掌握粵語經歷貌助詞「過」（gwo3）表達過往經驗（曾幾何時）與「從來未……過」之全套句式。",
    "presentation": {
      "explanation": "粵語中表達主體過去之人生經歷與體驗時，使用經歷貌助詞「過」（gwo3，第3聲陰去調）：\n\n一、「過」之核心句式：\n１．肯定句：「主語＋動詞＋過＋（次數/賓語）」。例如「我去過兩次日本」（我去過兩次日本）、「我食過呢間餐廳嘅點心」（我吃過這家餐廳的點心）。\n２．正反疑問句：「動詞＋過……未呀？」。例如「你睇過呢套戲未呀？」（你看過這部電影了嗎？）\n\n二、「過」之否定體系：\n否定經歷貌時，句首加「未 / 仲未」或「從來未」（從未），但後綴「過」保留：\n１．「我仲未去過長洲。」（我還沒去過長洲。）\n２．「佢從來未食過榴槤。」（他從來沒吃過榴槤。）",
      "examples": [
        {
          "target": "你以前有冇去過大嶼山睇天壇大佛呀？",
          "reading": "nei5 ji5 cin4 jau5 mou5 heoi3 gwo3 daai6 jyu4 saan1 tai2 tin1 taan4 daai6 fat6 aa3? [nei˩˧ jiː˩˧ tsʰiːn˨˩ jɐu˩˧ mou˩˧ hɵy˧ kʷɔː˧ taːi˨ jyː˨˩ saːn˥ tʰɐi˧˥ tʰiːn˥ tʰaːn˨˩ taːi˨ fɐt̚˨ aː˧] (NEI YEE-CHEEN YAU-MOU HOY-GWOR DY-YOO-SAHN TY TEEN-TAHN DY-FUT AH?)",
          "translation": "Have you ever been to Lantau Island to see the Tian Tan Big Buddha before?"
        },
        {
          "target": "我細個嗰陣學過幾年鋼琴，但依家放低晒喇。",
          "reading": "ngo5 sai3 go3 go2 zan6 hok6 gwo3 gei2 nin4 gong3 kam4, daan6 ji1 gaa1 fong3 dai1 saai3 laa3. [ŋɔː˩˧ sɐi˧ kɔː˧ kɔː˧˥ tsɐn˨ hɔːk˨ kʷɔː˧ kei˧˥ niːn˨˩ kɔːŋ˧ kʰɐm˨˩, taːn˨ jiː˥ kaː˥ fɔːŋ˧ tɐi˥ saːi˧ laː˧] (NGOH SY-GOH GOH-JUN HOK-GWOR GAY-NEEN GONG-KUM, DAHN YEE-GAH FONG-DY-SY LAH)",
          "translation": "I learned the piano for a few years when I was small, but have completely put it down now."
        },
        {
          "target": "呢種正宗順德雙皮奶我從來未試過，真係好香濃。",
          "reading": "ni1 zung2 zing3 zung1 seon6 dak1 soeng1 pei4 naai5 ngo5 cung4 loi4 mei6 si3 gwo3, zan1 hai6 hou2 hoeng1 nung4. [niː˥ tsʊŋ˧˥ tsɪŋ˧ tsʊŋ˥ sɵn˨ tɐk̚˥ sœːŋ˥ pʰei˨˩ naːi˩˧ ŋɔː˩˧ tsʰʊŋ˨˩ lɔːi˨˩ mei˨ siː˧ kʷɔː˧, tsɐn˥ hɐi˨ hou˧˥ hœːŋ˥ nʊŋ˨˩] (NEE-JOONG JING-JOONG SOON-DUK SEUNG-PAY-NY NGOH CHOONG-LOY MAY SEE-GWOR, JUN-HY HOH HEUNG-NOONG)",
          "translation": "I have never tried this authentic Shunde double skin milk before; it is really fragrant and rich."
        }
      ],
      "mnemonics": [
        "【經歷貌口訣】人生閱歷添上「過」，動詞後置述蹉跎；「從來未試」表初度，問句常跟「……未呀」和！"
      ],
      "culturalNotes": [
        "香港作為國際大都會，社交聚會常談論旅遊與生活體驗，「你去過邊度旅行？」（你去過哪裡旅行？）係破冰交談極為高頻之熱門話題。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【經歷表達】欲表達「我以前在英國住過兩年」，正確之粵語句子係：",
          "options": [
            "我以前喺英國住過兩年。 (ngo5 ji5 cin4 hai2 jing1 gwok3 zyu6 gwo3 loeng5 nin4.)",
            "我以前喺英國住咗兩年喇。",
            "我以前喺英國住緊兩年。",
            "我以前喺英國住住兩年。"
          ],
          "answerIndex": 0,
          "explanation": "表達過去的人生經歷體驗使用經歷貌助詞「過」（住過兩年）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【從未經歷】欲表達「我從來沒有喝過絲襪奶茶」，最正宗之粵語說法係：",
          "options": [
            "我從來未飲過絲襪奶茶。 (ngo5 cung4 loi4 mei6 jam2 gwo3 si1 maat6 naai5 caa4.)",
            "我從來冇飲咗絲襪奶茶。",
            "我從來唔飲緊絲襪奶茶。",
            "我從來未飲咗絲襪奶茶。"
          ],
          "answerIndex": 0,
          "explanation": "「從來未＋動詞＋過」（從來未飲過）係否定經歷之標準構式。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【時態區分】「我食咗藥」與「我食過嗰隻藥」之核心差異在於：",
          "options": [
            "前者指剛才完成了吃藥動作，後者指過去曾有過吃那種藥的經歷",
            "前者指正在吃藥，後者指將要吃藥",
            "兩者意思完全相同沒有分別",
            "前者指否定吃藥，後者指肯定吃藥"
          ],
          "answerIndex": 0,
          "explanation": "「咗」標記具體事件之完成，「過」標記人生體驗經歷。"
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
    "title": "持續靜態貌助詞「住」（zyu6）與伴隨動作 (Continuous State ZYU)",
    "level": "A2",
    "objective": "掌握持續貌助詞「住」（zyu6）在靜態持續、伴隨動作及祈使暫緩（「住先」）中之三大核心功能。",
    "presentation": {
      "explanation": "粵語中「住」（zyu6，第6聲陽去調）係極富表現力之持續態助詞，主要承擔三大功能：\n\n一、靜態持續貌（相當於普通話『着』）：\n表示某種姿勢、服飾或狀態之延續：\n１．「佢戴住眼鏡」（他戴著眼鏡）。\n２．「門開住」（門開著）。\n３．「手入面揸住把雨遮」（手裡握著一把雨傘）。\n\n二、伴隨動作（V1住＋V2）：\n表示以 V1 之方式或伴隨狀態進行 V2：\n１．「我哋行住傾啦」（我們邊走邊聊吧）。\n２．「大家坐住等」（大家坐著等）。\n\n三、暫緩或維持現狀（「動詞＋住先 / 唔好……住」）：\n１．「你食住先啦，唔使等我。」（你先吃著吧，不用等我。）\n２．「唔好行住，等埋陳生一齊走。」（先別走，等陳先生一起走。）",
      "examples": [
        {
          "target": "外面好凍，你著住件厚褸先好出門口呀。",
          "reading": "ngoi6 min6 hou2 dung3, nei5 zoek3 zyu6 gin6 hau5 lau1 sin1 hou2 ceot1 mun4 hau2 aa3. [ŋɔːi˨ miːn˨ hou˧˥ tʊŋ˧, nei˩˧ tsœːk̚˧ tsyː˨ kiːn˨ hɐu˩˧ lɐu˥ siːn˥ hou˧˥ tsʰɵt̚˥ muːn˨˩ hɐu˧˥ aː˧] (NGOY-MEEN HOH-DOONG, NEI JEUK-JEW GEEN HAU-LAU SEEN-HOH CHUT-MOON-HAU AH)",
          "translation": "It is very cold outside; put on and wear a thick coat before heading out."
        },
        {
          "target": "會議仲未開始，大家可以飲住咖啡坐低等一等。",
          "reading": "wui6 ji5 zung6 mei6 hoi1 ci2, daai6 gaa1 ho2 ji5 jam2 zyu6 gaa3 fe1 co5 dai1 dang2 jat1 dang2. [wuːi˨ jiː˩˧ tsʊŋ˨ mei˨ hɔːi˥ tsʰiː˧˥, taːi˨ kaː˥ hɔː˧˥ jiː˩˧ jɐm˧˥ tsyː˨ kaː˧ fɛː˥ tsʰɔː˩˧ tɐi˥ tɐŋ˧˥ jɐt̚˥ tɐŋ˧˥] (WOOEY-YEE JOONG-MAY HOY-CHEE, DY-GAH HOH-YEE YUM-JEW GAH-FEH CHOH-DY DUNG-YUT-DUNG)",
          "translation": "The meeting has not started yet; everyone can drink coffee while sitting down and waiting."
        },
        {
          "target": "唔好熄掣住，部電腦仲處理緊啲大數據。",
          "reading": "m4 hou2 sik1 zai3 zyu6, bou6 din6 nou5 zung6 cyu2 lei5 gan2 di1 daai6 sou3 geoi3. [m̩˨˩ hou˧˥ sɪk̚˥ tsɐi˧ tsyː˨, pou˨ tiːn˨ nou˩˧ tsʊŋ˨ tsʰyː˧˥ lei˩˧ kɐn˧˥ tiː˥ taːi˨ sou˧ kɵy˧] (M-HOH SIK-JY-JEW, BO DEEN-NOH JOONG CHU-LEE-GUN DEE DY-SO-GOEY)",
          "translation": "Don't switch it off just yet; the computer is still processing big data."
        }
      ],
      "mnemonics": [
        "【持續態口訣】靜態持續「住」相隨，著衫戴帽開門居；「食住先」表暫緩意，「唔好行住」莫心著！"
      ],
      "culturalNotes": [
        "「你做住先啦 / 你食住先啦」係香港極高頻之社交客套用語，體現出讓對方無需拘泥等待、先行動之體貼與效率。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【伴隨動作】欲表達「我們邊走邊談這件事」，最地道之粵語句子係：",
          "options": [
            "我哋行住傾呢件事。 (ngo5 dei6 haang4 zyu6 king1 ni1 gin6 si6.)",
            "我哋行咗傾呢件事。",
            "我哋行過傾呢件事。",
            "我哋行緊傾呢件事。"
          ],
          "answerIndex": 0,
          "explanation": "「動詞1＋住＋動詞2」（行住傾）表示伴隨動作（邊走邊聊）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【祈使暫緩】朋友催促你離開，你希望對方「先別走，等我五分鐘」，應講：",
          "options": [
            "唔好走住，等我五分鐘！ (m4 hou2 zau2 zyu6, dang2 ngo5 ng5 fan1 zung1!)",
            "唔好走咗，等我五分鐘！",
            "唔好走緊，等我五分鐘！",
            "唔好走過，等我五分鐘！"
          ],
          "answerIndex": 0,
          "explanation": "「唔好＋動詞＋住」（唔好走住）表示「先不要做某事 / 暫緩做某事」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法功能】助詞「住」（zyu6）在句子「你著住件衫」中承擔之核心語法功能係：",
          "options": [
            "表示靜態穿著狀態之持續 (Static Continuous)",
            "表示動作已經結束",
            "表示動作從未發生",
            "表示將來計劃"
          ],
          "answerIndex": 0,
          "explanation": "「著住」表示穿著狀態之持續延續。"
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
    "title": "三大動態助詞綜合辨析與時間副詞搭配（已經、仲未、啱啱、正喺度） (Aspect Synthesis)",
    "level": "A2",
    "objective": "綜合掌握「咗、緊、過、住」四種動態助詞之語義對立，並熟練搭配「已經、仲未、啱啱、正喺度」等時間副詞。",
    "presentation": {
      "explanation": "四項動態助詞構成了粵語精密完備之時體（Aspect）網絡：\n\n一、核心四態語義對比矩陣：\n１．完成態（Perfective）：「食咗」（吃了/已吃）。常搭時間副詞「已經」（已經食咗）、「啱啱」（啱啱食咗）。\n２．進行態（Progressive）：「食緊」（正在吃）。常搭副詞「正喺度 / 喺度」（正喺度食緊）。\n３．經歷態（Experiential）：「食過」（吃過/有經驗）。常搭「以前」（以前食過）、「從來未……過」（從來未食過）。\n４．持續態（Continuous/Accompanying）：「食住」（吃著/伴隨）。常搭「……先」（食住先）、「唔好……住」（唔好食住）。\n\n二、全景語境對比例證：\n「我已經食咗飯」（I have eaten） vs 「我正喺度食緊飯」（I am eating） vs 「我食過呢道菜」（I have tasted this dish before） vs 「大家食住傾」（Let's talk while eating）。",
      "examples": [
        {
          "target": "我啱啱寄咗份合約，佢依家正喺度睇緊，睇完我哋再傾住決定。",
          "reading": "ngo5 aam1 aam1 gei3 zo2 fan6 hap6 zoek3, keoi5 ji1 gaa1 zing3 hai2 dou6 tai2 gan2, tai2 jyun4 ngo5 dei6 zoi3 king1 zyu6 kyut3 ding6. [ŋɔː˩˧ aːm˥ aːm˥ kei˧ tsɔː˧˥ fɐn˨ hɐp̚˨ tsœːk̚˧, kʰɵy˩˧ jiː˥ kaː˥ tsɪŋ˧ hɐi˩˧ tou˨ tʰɐi˧˥ kɐn˧˥, tʰɐi˧˥ jyːn˨˩ ŋɔː˩˧ tei˨ tsɔːi˧ kʰɪŋ˨˩ tsyː˨ kʰyːt̚˧ tɪŋ˨] (NGOH AHM-AHM GAY-JOR FUN HUP-JEUK, KUY YEE-GAH JING-HY-DOH TY-GUN, TY-YUEN NGOH-DAY JOY KING-JEW KUET-DING)",
          "translation": "I just sent the contract; he is currently reading it, and after reading we will talk while deciding."
        },
        {
          "target": "佢雖然從來未去過外國，但講得一口好流利嘅英文。",
          "reading": "keoi5 seoi1 jin4 cung4 loi4 mei6 heoi3 gwo3 ngoi6 gwok3, daan6 gong2 dak1 jat1 hau2 hou2 lau4 lei6 ge3 jing1 man2. [kʰɵy˩˧ sɵy˥ jiːn˨˩ tsʰʊŋ˨˩ lɔːi˨˩ mei˨ hɵy˧ kʷɔː˧ ŋɔːi˨ kʷɔːk̚˧, taːn˨ kɔːŋ˧˥ tɐk̚˥ jɐt̚˥ hɐu˧˥ hou˧˥ lɐu˨˩ lei˨ kɛː˧ jɪŋ˥ mɐn˧˥] (KUY SOEY-YEEN CHOONG-LOY MAY HOY-GWOR NGOY-GWOK, DAHN GONG-DUK YUT-HAU HOH LAU-LAY GEH YING-MUN)",
          "translation": "Although he has never been abroad, he speaks very fluent English."
        },
        {
          "target": "時間好緊迫，我哋唔好等住，一齊開工做咗佢先啦！",
          "reading": "si4 gaan3 hou2 gan2 baak1, ngo5 dei6 m4 hou2 dang2 zyu6, jat1 cai4 hoi1 gung1 zou6 zo2 keoi5 sin1 laa1! [siː˨˩ kaːn˧ hou˧˥ kɐn˧˥ paːk̚˥, ŋɔː˩˧ tei˨ m̩˨˩ hou˧˥ tɐŋ˧˥ tsyː˨, jɐt̚˥ tsʰɐi˨˩ hɔːi˥ kʊŋ˥ tsou˨ tsɔː˧˥ kʰɵy˩˧ siːn˥ laː˥] (SEE-GAHN HOH GUN-BAHK, NGOH-DAY M-HOH DUNG-JEW, YUT-CHY HOY-GOONG JOE-JOR-KUY SEEN LAH!)",
          "translation": "Time is very tight; let's not keep waiting, let's start working together and get it done first!"
        }
      ],
      "mnemonics": [
        "【時態四重奏】「咗」表完成事已辦，「緊」標進行正忙碌；「過」述經歷留痕跡，「住」持狀態伴隨淑！"
      ],
      "culturalNotes": [
        "掌握「咗、緊、過、住」四助詞之切換係邁向粵語中高級（A2-B1）最核心之分水嶺。精準運用能令話語生動自然、充滿道地港味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【語境填空】「我＿＿＿（剛才）食＿＿＿（完成）午餐，依家＿＿＿（正在）寫＿＿＿（進行）報告」，應填入：",
          "options": [
            "啱啱 …… 咗 …… 正喺度 …… 緊",
            "已經 …… 緊 …… 仲未 …… 咗",
            "從來 …… 過 …… 已經 …… 住",
            "正喺度 …… 住 …… 啱啱 …… 過"
          ],
          "answerIndex": 0,
          "explanation": "「啱啱……咗」搭配完成貌，「正喺度……緊」搭配進行貌。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【時體辨析】「你睇緊邊套戲？」詢問之焦點在於：",
          "options": [
            "你當下正在觀看哪部電影 (Ongoing Progressive)",
            "你昨天看完了哪部電影",
            "你生平看過哪部電影",
            "你打算買哪部電影的票"
          ],
          "answerIndex": 0,
          "explanation": "「睇緊」標記正在進行之觀影動作。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【綜合判斷】以下四個句子中，邊句正確表達「我們邊喝茶邊聊天」？",
          "options": [
            "我哋飲住茶傾偈。 (ngo5 dei6 jam2 zyu6 caa4 king1 gai2.)",
            "我哋飲咗茶傾偈。",
            "我哋飲過茶傾偈。",
            "我哋飲緊茶傾咗偈。"
          ],
          "answerIndex": 0,
          "explanation": "「飲住茶傾偈」（V1住＋V2）正確表達伴隨動作（邊喝茶邊聊天）。"
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
    "title": "問路與導航核心動詞：「行直」、「轉左/轉右」、「過馬路」 (Asking Directions & Navigation Verbs)",
    "level": "A2",
    "objective": "掌握粵語問路句式與核心步行導航動詞（行直、轉左、轉右、過馬路、過天橋、搭扶手電梯）。",
    "presentation": {
      "explanation": "在香港立體錯綜複雜之高密度街區中問路與指路，必須熟練運用精確之道地空間移動動詞與方位名詞：\n\n一、核心步行導航動詞短語深度解析：\n１．「行直 / 一直行」（haang4 zik6 / jat1 zik6 haang4）：筆直向前走，指順著當前街道方向直行不拐彎。\n２．「轉左 / 轉右」（zyun3 zo2 / zyun3 jau6）：向左轉或向右轉。注意粵語動詞「轉」在此讀陰去調。\n３．「過馬路」（gwo3 maa5 lou6）：橫過街道馬路，穿越行車道。\n４．「過行人天橋」（gwo3 hang4 jan4 tin1 kiu4）：登上並走過架空人行天橋。\n５．「搭扶手電梯 / 搭升降機」（daap3 fu4 sau2 din6 tai1 / daap3 lip1）：乘搭自動扶梯或乘搭垂直箱式電梯。\n\n二、街頭地標與交通參照物網絡：\n１．「十字路口」（sap6 zi6 lou6 hau2）：四向交叉之道路交匯點。\n２．「紅綠燈 / 燈位」（hung4 luk6 dang1 / dang1 wai2）：交通信號燈處，香港俗稱「燈位」。\n３．「斑馬線」（baan1 maa5 sin3）：地面漆有黑白條紋之行人過路專用通道。\n４．「路口」（lou6 hau2）：街道拐彎或分支處；「巷仔」（hong6 zai2）：狹窄的小巷弄堂。\n\n三、地道禮貌問路句型結構：\n１．「唔該借借，請問去……應該點樣行？」（借光請問，去某地該怎麼走？）\n２．「一直行到燈位，見到天橋上橋轉左，落橋右手邊就係。」（直走到信號燈，看到天橋上去左轉，下橋右邊即是。）",
      "examples": [
        {
          "target": "唔該借借，請問去香港故宮文化博物館應該點樣行？",
          "reading": "m4 goi1 ze3 ze3, cing2 man6 heoi3 hoeng1 gong2 gu3 gung1 man4 faa3 bok3 mat6 gun2 jing1 goi1 dim2 joeng2 haang4? [m̩˨˩ kɔːi˥ tsɛː˧ tsɛː˧, tsʰɪŋ˧˥ mɐn˨ hɵy˧ hœːŋ˥ kɔːŋ˧˥ kuː˧ kʊŋ˥ mɐn˨˩ faː˧ pɔːk̚˧ mɐt̚˨ kuːn˧˥ jɪŋ˥ kɔːi˥ tiːm˧˥ jœːŋ˧˥ haːŋ˨˩] (M-GOY JEH-JEH, CHING-MUN HOY HEUNG-GONG GOO-GOONG MUN-FAH BOK-MUT-GOON YING-GOY DEEM-YEUNG HAHNG?)",
          "translation": "Excuse me, could you tell me how to get to the Hong Kong Palace Museum?"
        },
        {
          "target": "一直行到紅綠燈位轉左，行過條天橋就見到㗎喇。",
          "reading": "jat1 zik6 haang4 dou3 hung4 luk6 dang1 wai2 zyun3 zo2, haang4 gwo3 tiu4 tin1 kiu4 zau6 gin3 dou2 gaa3 laa3. [jɐt̚˥ tsɪk̚˨ haːŋ˨˩ tou˧ hʊŋ˨˩ lʊk˨ tɐŋ˥ wɐi˧˥ tsyn˧ tsɔː˧˥, haːŋ˨˩ kʷɔː˧ tʰiːu˨˩ tʰiːn˥ kʰiːu˨˩ tsɐu˨ kiːn˧ tou˧˥ kaː˧ laː˧] (YUT-JIK HAHNG-DOH HOONG-LUK-DUNG-WY JUEN-JOH, HAHNG-GWOR TEW TEEN-KEW JAU GEEN-DOH GAH LAH)",
          "translation": "Walk straight to the traffic lights and turn left; cross the footbridge and you will see it."
        },
        {
          "target": "前面十字路口過咗馬路之後，右手邊就係地鐵站出口。",
          "reading": "cin4 min6 sap6 zi6 lou6 hau2 gwo3 zo2 maa5 lou6 zi1 hau6, jau6 sau2 bin1 zau6 hai6 dei6 tit3 zaam6 ceot1 hau2. [tsʰiːn˨˩ miːn˨ sɐp̚˨ tsiː˨ lou˨ hɐu˧˥ kʷɔː˧ tsɔː˧˥ maː˩˧ lou˨ tsiː˥ hɐu˨, jɐu˨ sɐu˧˥ piːn˥ tsɐu˨ hɐi˨ tei˨ tʰiːt̚˧ tsaːm˨ tsʰɵt̚˥ hɐu˧˥] (CHEEN-MEEN SUP-JEE LOH-HAU GWOR-JOR MAH-LOH JEE-HAU, YAU-SAU-BEEN JAU-HY DAY-TEET-JAHM CHUT-HAU)",
          "translation": "After crossing the road at the crossroad ahead, the MTR station exit is on your right-hand side."
        }
      ],
      "mnemonics": [
        "【行街導航訣】前行「行直」莫徬徨，見燈「轉左」「轉右」傍；「過橋」「過路」斑馬線，四通八達在香港！"
      ],
      "culturalNotes": [
        "香港立體城市步行網絡極為發達（如中環至半山自動扶手電梯系統、金鐘及中環龐大之人行天橋網絡系統），指路時經常包含「上天橋」（soeng5 tin1 kiu4）或「落地下」（lok6 dei6 haa2）。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【方向指示】路人告訴你「喺前面紅綠燈位轉右」，你應該進行之動作係：",
          "options": [
            "在前面的交通信號燈處向右轉 (Turn right at traffic lights)",
            "在前面的交通信號燈處向左轉",
            "在前面的交通信號燈處往後退",
            "在前面的交通信號燈處停下不走"
          ],
          "answerIndex": 0,
          "explanation": "「轉右」（zyun3 jau6）即向右轉，「燈位」指紅綠燈處。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【立體交通】欲表達「乘搭自動扶手電梯上二樓」，最地道之粵語動賓搭配係：",
          "options": [
            "搭扶手電梯上二樓 (daap3 fu4 sau2 din6 tai1 soeng5 ji6 lau2)",
            "行升降機上二樓",
            "坐斑馬線上二樓",
            "飛天橋上二樓"
          ],
          "answerIndex": 0,
          "explanation": "手扶梯在粵語中稱為「扶手電梯」（fu4 sau2 din6 tai1）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【問路句式】欲向路人禮貌詢問「去香港站應該怎麼走」，最地道標準之句式係：",
          "options": [
            "請問去香港站應該點樣行？ (cing2 man6 heoi3 hoeng1 gong2 zaam6 jing1 goi1 dim2 joeng2 haang4?)",
            "請問去香港站幾多錢一個？",
            "請問去香港站食咗飯未？",
            "請問去香港站有冇得打包？"
          ],
          "answerIndex": 0,
          "explanation": "「應該點樣行」（應該怎麼走）係粵語問路最經典之表達。"
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
    "title": "港鐵搭乘指南：月台、轉線、出閘、拍卡與八達通增值 (MTR Navigation & Octopus Top-up)",
    "level": "A2",
    "objective": "掌握乘搭港鐵必備術語（入閘、出閘、轉線、月台）以及在便利店或客務中心為八達通「增值」之實用語句。",
    "presentation": {
      "explanation": "港鐵鐵路系統係香港市民出行不可或缺之地下動脈網絡，涵蓋一套嚴謹地道之專用搭乘與票務術語：\n\n一、港鐵站內行動專用術語全景剖析：\n１．「八達通」（baat3 daat6 tung1）：香港全覆蓋非接觸式智能收費卡。\n２．「拍卡」（paak3 kaat1）：將卡片貼近感應器刷卡；「入閘」（jap6 zaap6）：刷卡通過驗票閘機進站；「出閘」（ceot1 zaap6）：刷卡通過閘機出站。\n３．「月台」（jyut6 toi4）：列車停靠之候車站台（例如「前往柴灣方向之乘客請前往一號月台」）。\n４．「轉線 / 轉車」（zyun3 sin3 / zyun3 ce1）：在不同線路交匯之樞紐站換乘其他鐵路幹線（例如「喺金鐘站轉乘港島線」）。\n\n二、八達通儲值充值日常對話構式：\n在全港各大便利店或港鐵站內客務中心為八達通儲值時，唯一標準規範動詞為「增值」（zang1 zik6，充值）：\n１．「唔該幫我張八達通增值一百蚊現金。」（麻煩幫我的八達通充值一百元現金。）\n２．「請喺感應器上面拍卡啦，唔該晒！」（請在感應器上刷卡，非常感謝！）\n３．「張卡餘額負數出唔到閘，要去客務中心拍卡補票。」（卡內餘額為負無法出站，需要去服務台刷卡處理。）",
      "examples": [
        {
          "target": "唔該幫我張八達通增值五百蚊現金，多謝。",
          "reading": "m4 goi1 bong1 ngo5 zoeng1 baat3 daat6 tung1 zang1 zik6 ng5 baak3 man1 jin6 gam1, do1 ze6. [m̩˨˩ kɔːi˥ pɔːŋ˥ ŋɔː˩˧ tsœːŋ˥ paːt̚˧ taːt̚˨ tʰʊŋ˥ tsɐŋ˥ tsɪk̚˨ ŋ̍˩˧ paːk̚˧ mɐn˥ jiːn˨ kɐm˥, tɔː˥ tsɛː˨] (M-GOY BONG NGOH JEUNG BAHT-DAHT-TOONG JUNG-JIK NG-BAHK-MUN YEEN-GUM, DOH-JEH)",
          "translation": "Please top up my Octopus card with five hundred dollars in cash, thank you."
        },
        {
          "target": "由荃灣去中環，可以喺荔景站轉東涌線，或者直搭荃灣線過海。",
          "reading": "jau4 cyun4 waan1 heoi3 zung1 waan4, ho2 ji5 hai2 lai6 ging2 zaam6 zyun3 dung1 cung1 sin3, waak6 ze2 zik6 daap3 cyun4 waan1 sin3 gwo3 hoi2. [jɐu˨˩ tsʰyːn˨˩ waːn˨˩ hɵy˧ tsʊŋ˥ waːn˨˩, hɔː˧˥ jiː˩˧ hɐi˩˧ lɐi˨ kɪŋ˧˥ tsaːm˨ tsyn˧ tʊŋ˥ tsʰʊŋ˥ siːn˧, waːk˨ tsɛː˧˥ tsɪk̚˨ taːp̚˧ tsʰyːn˨˩ waːn˨˩ siːn˧ kʷɔː˧ hɔːi˧˥] (YAU TSUEN-WAHN HOY JOONG-WAHN, HOH-YEE HY LY-GING-JAHM JUEN DOONG-CHOONG-SEEN, WAHK-JEH JIK-DAHP TSUEN-WAHN-SEEN GWOR-HOY)",
          "translation": "From Tsuen Wan to Central, you can transfer to the Tung Chung Line at Lai King Station, or directly ride the Tsuen Wan Line across the harbour."
        },
        {
          "target": "我張八達通餘額唔夠出唔到閘，要去客務中心拍卡處理。",
          "reading": "ngo5 zoeng1 baat3 daat6 tung1 jyu4 ngaak6 m4 gau3 ceot1 m4 dou2 zaap6, jiu3 heoi3 haak3 mou6 zung1 sam1 paak3 kaat1 cyu2 lei5. [ŋɔː˩˧ tsœːŋ˥ paːt̚˧ taːt̚˨ tʰʊŋ˥ jyː˨˩ ŋaːk̚˨ m̩˨˩ kɐu˧ tsʰɵt̚˥ m̩˨˩ tou˧˥ tsaːp̚˨, jiu˧ hɵy˧ haːk̚˧ mou˨ tsʊŋ˥ sɐm˥ pʰaːk̚˧ kʰaːt̚˥ tsʰyː˧˥ lei˩˧] (NGOH JEUNG BAHT-DAHT-TOONG YOO-NGAHK M-GAU CHUT-M-DOH-JAHP, YEW HOY HAHK-MOU JOONG-SUM PAHK-KAHT CHU-LEE)",
          "translation": "My Octopus balance is insufficient to exit the turnstile; I need to go to the Customer Service Centre to tap and resolve it."
        }
      ],
      "mnemonics": [
        "【港鐵出行歌】「八達通」卡行全港，入閘出閘輕「拍卡」；線路交匯「轉線」快，餘額不足「增值」妥！"
      ],
      "culturalNotes": [
        "香港的「八達通」除搭乘港鐵、巴士、小巴、輪渡外，亦全面覆蓋便利店、茶餐廳、自動售賣機、甚至公眾停車場，普及率近乎百分之一百，被譽為全球最成功之電子收費卡之一。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【充值用語】在香港便利店欲為八達通充值 200 港幣，應講：",
          "options": [
            "唔該八達通增值兩百蚊。 (m4 goi1 baat3 daat6 tung1 zang1 zik6 loeng5 baak3 man1.)",
            "唔該八達通買單兩百蚊。",
            "唔該八達通找錢兩百蚊。",
            "唔該八達通平啲兩百蚊。"
          ],
          "answerIndex": 0,
          "explanation": "「增值」（zang1 zik6）係粵語為儲值卡充值之唯一正宗專用詞。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【換乘術語】在港鐵廣播中聽到「往柴灣方向嘅乘客，請喺呢個站＿＿＿」，空格應填入：",
          "options": [
            "轉線 (zyun3 sin3 / 換乘線路)",
            "出閘 (ceot1 zaap6)",
            "打包 (daa2 baau1)",
            "埋單 (maai4 daan1)"
          ],
          "answerIndex": 0,
          "explanation": "地鐵換乘線路稱為「轉線」（zyun3 sin3）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【動作識別】將八達通靠近地鐵閘機感應區刷卡進站，此動作在粵語中稱為：",
          "options": [
            "拍卡入閘 (paak3 kaat1 jap6 zaap6)",
            "轉線出閘 (zyun3 sin3 ceot1 zaap6)",
            "埋單找錢 (maai4 daan1 zaau2 cin2)",
            "走青烘底 (zau2 ceng1 hung3 dai2)"
          ],
          "answerIndex": 0,
          "explanation": "刷卡進站稱為「拍卡入閘」（paak3 kaat1 jap6 zaap6）。"
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
    "title": "香港小巴搭乘神技：「有落」、「前面路口落」 (Minibus Shouting Etiquette)",
    "level": "A2",
    "objective": "掌握搭乘香港公共小型巴士（紅頂/綠頂小巴）必備之高聲呼叫下車禮儀與核心句式（有落、燈位有落、路口有落）。",
    "presentation": {
      "explanation": "香港公共小型巴士（俗稱「小巴」，分為綠色專線小巴與紅色非專線公共小巴）係香港極富本土特色但亦極考驗粵語聽說膽識之交通工具：\n\n一、小巴下車核心呼叫喊話句式全套解析（語音必須洪亮清晰、吐字果斷）：\n由於多數小巴不設逐站自動廣播報站系統，乘客到達目的地前必須提前一至兩個街口主動大聲向司機叫停下車：\n１．「有落！」（jau5 lok6！）：有人要下車！此乃最核心之全域下車指令。\n２．「前面有落，唔該！」（cin4 min6 jau5 lok6, m4 goi1！）：前方位置下車，勞駕司機！\n３．「燈位有落！」（dang1 wai2 jau5 lok6！）：在前方紅綠燈交通信號處靠邊停靠下車！\n４．「路口有落！」（lou6 hau2 jau5 lok6！）：在前方十字路口或街巷交匯處下車！\n５．「過咗天橋有落！」（gwo3 zo2 tin1 kiu4 jau5 lok6！）：穿過人行天橋之後立即靠邊下車！\n６．「轉彎有落！」（zyun3 waan1 jau5 lok6！）：拐過街角彎道後靠邊下車！\n\n二、司機車廂互動反饋與默契：\n司機聽聞呼喊後通常會舉手示意、按下車頂「客落」指示燈或簡潔回應「收到 / 知道」（sau1 dou3 / zi1 dou3）。若遇噪音或司機未有反應，乘客宜再度清晰大聲呼喊「司機，前面有落呀！」。",
      "examples": [
        {
          "target": "司機，唔該前面銀行門口有落！",
          "reading": "si1 gei1, m4 goi1 cin4 min6 ngan4 hong4 mun4 hau2 jau5 lok6! [siː˥ kei˥, m̩˨˩ kɔːi˥ tsʰiːn˨˩ miːn˨ ŋɐn˨˩ hɔːŋ˨˩ muːn˨˩ hɐu˧˥ jɐu˩˧ lɔːk˨!] (SEE-GAY, M-GOY CHEEN-MEEN NGUN-HONG MOON-HAU YAU-LOK!)",
          "translation": "Driver, please let me off in front of the bank ahead!"
        },
        {
          "target": "搭小巴一定要夠膽大聲嗌「有落」，司機先聽得清楚。",
          "reading": "daap3 siu2 baa1 jat1 ding6 jiu3 gau3 daam2 daai6 seng1 aai3 \"jau5 lok6\", si1 gei1 sin1 teng1 dak1 cing1 co2. [taːp̚˧ siːu˧˥ paː˥ jɐt̚˥ tɪŋ˨ jiu˧ kɐu˧ taːm˧˥ taːi˨ sɛːŋ˥ aːi˧ \"jɐu˩˧ lɔːk˨\", siː˥ kei˥ siːn˥ tʰɛːŋ˥ tɐk̚˥ tsʰɪŋ˥ tsʰɔː˧˥] (DAHP SEW-BAH YUT-DING YEW GAU-DAHM DY-SENG EYE \"YAU-LOK\", SEE-GAY SEEN TENG-DUK CHING-CHOH)",
          "translation": "Taking a minibus requires having the courage to shout 'yau lok' loudly so the driver can hear clearly."
        },
        {
          "target": "過咗前面個油站之後，第二個路口有落，唔該！",
          "reading": "gwo3 zo2 cin4 min6 go3 jau4 zaam6 zi1 hau6, dai6 ji6 go3 lou6 hau2 jau5 lok6, m4 goi1! [kʷɔː˧ tsɔː˧˥ tsʰiːn˨˩ miːn˨ kɔː˧ jɐu˨˩ tsaːm˨ tsiː˥ hɐu˨, tɐi˨ jiː˨ kɔː˧ lou˨ hɐu˧˥ jɐu˩˧ lɔːk˨, m̩˨˩ kɔːi˥!] (GWOR-JOR CHEEN-MEEN GOH YAU-JAHM JEE-HAU, DY-YEE GOH LOH-HAU YAU-LOK, M-GOY!)",
          "translation": "After passing the petrol station ahead, stopping at the second intersection, please!"
        }
      ],
      "mnemonics": [
        "【小巴嗌落訣】乘搭小巴莫膽怯，提前開口聲清冽；「前面有落」「燈位落」，司機舉手「收到」帖！"
      ],
      "culturalNotes": [
        "「小巴嗌落車」被外國遊客與初學者戲稱為「粵語口語終極考核」。很多害羞的新手因不敢大聲嗌「有落」而坐過站，成為經典文化趣事。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【小巴喊話】乘搭香港小巴即將到達目的地紅綠燈處，欲要求司機停車下車，最地道之喊話係：",
          "options": [
            "司機，燈位有落，唔該！ (si1 gei1, dang1 wai2 jau5 lok6, m4 goi1!)",
            "司機，我想埋單！",
            "司機，唔該增值一百蚊！",
            "司機，我想食雲吞麵！"
          ],
          "answerIndex": 0,
          "explanation": "「燈位有落，唔該！」係要求在紅綠燈處下車最標準地道之小巴用語。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語意理解】在小巴上聽到有乘客大嗌「過咗天橋有落」，其準確含義係：",
          "options": [
            "穿過天橋之後靠邊停車讓我下車 (Stopping after passing the bridge)",
            "在天橋正上方停車跳下去",
            "司機開車撞到了天橋",
            "天橋上面有人跌落下來"
          ],
          "answerIndex": 0,
          "explanation": "「過咗天橋有落」指越過天橋後立即停車落客。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【文化禮儀】在香港乘搭沒有按鈴裝置之紅色小巴時，乘客要求下車之常規方式係：",
          "options": [
            "提前大聲向司機呼喊「有落」 (aai3 jau5 lok6)",
            "在座位上默默等待司機主動問每個人",
            "直接站起來走到司機身旁拍司機肩膀",
            "用手機向運輸署發送下車短信"
          ],
          "answerIndex": 0,
          "explanation": "乘搭紅色小巴必須由乘客主動大聲嗌「有落」。"
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
    "title": "搭的士與司機溝通：「去……唔該」、「行紅隧定東隧」 (Taking a Taxi & Route Choice)",
    "level": "A2",
    "objective": "掌握乘坐香港的士之目的地告知句式、過海隧道選擇（紅隧、東隧、西隧）及找零索取發票禮儀。",
    "presentation": {
      "explanation": "在香港乘搭的士（即計程車、出租車）出行時，與司機之言語溝通講求精煉準確與迅速果斷：\n\n一、告知目的地與過海隧道選擇路徑：\n１．「司機，去……唔該。」（司機，去某某地方，謝謝。）例如「司機，唔該去中環置地廣場。」\n２．跨越維多利亞港之「過海」隧道三大選擇方案：\n   - 「紅隧」（hung4 seoi6）：紅磡海底隧道，收費最低但交通最為繁忙容易塞車。\n   - 「東隧」（dung1 seoi6）：東區海底隧道，前往港島東區北角、鰂魚涌之首選捷徑。\n   - 「西隧」（sai1 seoi6）：西區海底隧道，通道寬暢速度最快，直通中環上環西九龍。\n\n二、車費結算、小費找零與索取乘車收據：\n１．「唔使找喇」（m4 sai2 zaau2 laa3）：不用找零錢了，剩餘零錢作為感謝司機之小費。\n２．「唔該印張收據 / 唔該印張飛」（m4 goi1 jan3 zoeng1 sau1 geoi3 / jan3 zoeng1 fei1）：請打印一張正式乘車發票收據以便報銷。",
      "examples": [
        {
          "target": "司機，唔該去香港國際機場一號客運大樓，行青嶼幹線。",
          "reading": "si1 gei1, m4 goi1 heoi3 hoeng1 gong2 gwok3 zai3 gei1 coeng4 jat1 hou6 haak3 wan6 daai6 lau4, haang4 cing1 jyu4 gon3 sin3. [siː˥ kei˥, m̩˨˩ kɔːi˥ hɵy˧ hœːŋ˥ kɔːŋ˧˥ kʷɔːk̚˧ tsɐi˧ kei˥ tsʰœːŋ˨˩ jɐt̚˥ hou˨ haːk̚˧ wɐn˨ taːi˨ lɐu˨˩, haːŋ˨˩ tsʰɪŋ˥ jyː˩˧ kɔːn˧ siːn˧] (SEE-GAY, M-GOY HOY HEUNG-GONG GWOK-JY GAY-CHEUNG YUT-HOH HAHK-WUN DY-LAU, HAHNG CHING-YOO GON-SEEN)",
          "translation": "Driver, please go to Hong Kong International Airport Terminal 1, via Tsing Ma line."
        },
        {
          "target": "過海去灣仔會展中心，行紅隧定行西隧快啲呀？",
          "reading": "gwo3 hoi2 heoi3 waan1 zai2 wui6 zin2 zung1 sam1, haang4 hung4 seoi6 ding6 haang4 sai1 seoi6 faai3 di1 aa3? [kʷɔː˧ hɔːi˧˥ hɵy˧ waːn˥ tsɐi˧˥ wuːi˨ tsiːn˧˥ tsʊŋ˥ sɐm˥, haːŋ˨˩ hʊŋ˨˩ sɵy˨ tɪŋ˨ haːŋ˨˩ sɐi˥ sɵy˨ faːi˧ tiː˥ aː˧?] (GWOR-HOY HOY WAHN-JY WOOEY-JEEN JOONG-SUM, HAHNG HOONG-SOEY DING HAHNG SY-SOEY FY-DEE AH?)",
          "translation": "Crossing the harbour to Wan Chai Convention Centre, is taking Hung Hom Tunnel or Western Tunnel faster?"
        },
        {
          "target": "呢度一百蚊，唔該印張收據畀我返公司報銷。",
          "reading": "ni1 dou6 jat1 baak3 man1, m4 goi1 jan3 zoeng1 sau1 geoi3 bei2 ngo5 faan1 gung1 si1 bou3 siu1. [niː˥ tou˨ jɐt̚˥ paːk̚˧ mɐn˥, m̩˨˩ kɔːi˥ jɐn˧ tsœːŋ˥ sɐu˥ kɵy˧ pei˧˥ ŋɔː˩˧ faːn˥ kʊŋ˥ siː˥ pou˧ siːu˥] (NEE-DOH YUT-BAHK-MUN, M-GOY YUN JEUNG SAU-GOEY BAY NGOH FAHN GOONG-SEE BO-SEW)",
          "translation": "Here is one hundred dollars; please print a receipt for me to claim expenses at company."
        }
      ],
      "mnemonics": [
        "【乘的士心訣】目的地前「唔該」敬，「紅隧」「西隧」過海巡；找錢零碎「唔使找」，「印張收據」好報銷！"
      ],
      "culturalNotes": [
        "香港的士分三種車身顏色：市區的士（紅色，全港通行除大嶼山南部）、新界的士（綠色，專門行駛於新界指定區域）、大嶼山的士（藍色，專門行駛於大嶼山島內各區），搭乘前需留意各自營運範圍。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【的士小費】車費為 88 元，你給予司機 100 元並表示不用找零錢，應講：",
          "options": [
            "唔使找喇，多謝司機！ (m4 sai2 zaau2 laa3, do1 ze6 si1 gei1!)",
            "一定要找錢畀我！",
            "唔該印張車飛！",
            "我想轉線去柴灣！"
          ],
          "answerIndex": 0,
          "explanation": "「唔使找喇」（m4 sai2 zaau2 laa3）意為不用找零錢了。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【隧道名稱】在香港從九龍過海到港島，所稱「西隧」之全名係：",
          "options": [
            "西區海底隧道 (Western Harbour Crossing)",
            "香港大橋隧道",
            "獅子山隧道",
            "將軍澳隧道"
          ],
          "answerIndex": 0,
          "explanation": "「西隧」（sai1 seoi6）即西區海底隧道。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【發票索取】下車前欲向的士司機索取乘車發票收據，最正確之粵語說法係：",
          "options": [
            "司機，唔該印張收據 / 印張飛。 (si1 gei1, m4 goi1 jan3 zoeng1 sau1 geoi3 / fei1.)",
            "司機，唔該埋單加單。",
            "司機，唔該走青少甜。",
            "司機，唔該行直轉左。"
          ],
          "answerIndex": 0,
          "explanation": "打印發票稱為「印張收據」或「印張飛」（jan3 zoeng1 fei1）。"
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
    "title": "城市地標與繁華街區指引：中環、尖沙咀、旺角、銅鑼灣 (City Landmarks & Districts)",
    "level": "A2",
    "objective": "掌握香港三大地理板塊（港島、九龍、新界）及核心著名街區地標之粵語地道發音與文化認知。",
    "presentation": {
      "explanation": "香港地理劃分為三大主要板塊區域，每個區域皆擁有鮮明之歷史文化底蘊與商業生活地標：\n\n一、香港三大地理板塊與核心街區地標全景分佈：\n１．香港島（俗稱「港島」 gong2 dou2）：\n   - 「中環」（zung1 waan4）：全港金融中樞神經、摩天大廈群、半山扶手電梯系統、蘭桂坊。\n   - 「銅鑼灣」（tung4 lo4 waan4）：繁華購物零售天堂、時代廣場、希慎廣場、崇光百貨。\n   - 「金鐘」（gam1 zung1）：特區政府總部、高等法院、太古廣場樞紐。\n   - 「灣仔」（waan1 zai2）：香港會議展覽中心、金紫荊廣場、老街修頓球場。\n２．九龍半島（俗稱「九龍」 gau2 lung4）：\n   - 「尖沙咀」（zim1 saa1 zeoi2）：星光大道、維多利亞港天際線、海港城、文化中心。\n   - 「旺角」（wong6 gok3）：潮流集市、女人街、西洋菜南街、波鞋街。\n   - 「深水埗」（sam1 seoi2 bou2）：鴨寮街數碼電子跳蚤市場、平民道地美食天國。\n３．新界地區（俗稱「新界」 san1 gaai3）：\n   - 「沙田」（saa1 tin4）、「荃灣」（cyun4 waan1）、「屯門」（tyun4 mun4）、「元朗」（jyun4 long5）。\n\n二、地道空間心理方位語彙：\n香港市民習慣將跨越維多利亞港統稱為「過海」（gwo3 hoi2），跨海公車被稱為「過海巴士」。",
      "examples": [
        {
          "target": "今晚我哋先去尖沙咀睇維多利亞港夜景，然後搭天星小輪過中環。",
          "reading": "gam1 maan5 ngo5 dei6 sin1 heoi3 zim1 saa1 zeoi2 tai2 wai4 do1 lei6 aa3 gong2 je6 ging2, jin4 hau6 daap3 tin1 sing1 siu2 leon4 gwo3 zung1 waan4. [kɐm˥ maːn˩˧ ŋɔː˩˧ tei˨ siːn˥ hɵy˧ tsɪm˥ saː˥ tsɵy˧˥ tʰɐi˧˥ wɐi˨˩ tɔː˥ lei˨˩ aː˧ kɔːŋ˧˥ jɛː˨ kɪŋ˧˥, jiːn˨˩ hɐu˨ taːp̚˧ tʰiːn˥ sɪŋ˥ siːu˧˥ lɵn˨˩ kʷɔː˧ tsʊŋ˥ waːn˨˩] (GUM-MAHN NGOH-DAY SEEN HOY JEEM-SAH-TSOY TY WY-DOH-LAY-AH-GONG YE-GING, YEEN-HAU DAHP TEEN-SING SEW-LUN GWOR JOONG-WAHN)",
          "translation": "Tonight we will first go to Tsim Sha Tsui to see the Victoria Harbour night view, then take the Star Ferry across to Central."
        },
        {
          "target": "旺角同銅鑼灣係全香港最繁華熱鬧嘅購物商圈。",
          "reading": "wong6 gok3 tung4 tung4 lo4 waan4 hai6 cyun4 hoeng1 gong2 zeoi3 faan4 waa4 jit6 naau6 ge3 gau3 mat6 soeng1 hyun1. [wɔːŋ˨ kɔːk̚˧ tʰʊŋ˨˩ tʰʊŋ˨˩ lɔː˨˩ waːn˨˩ hɐi˨ tsʰyːn˨˩ hœːŋ˥ kɔːŋ˧˥ tsɵy˧ faːn˨˩ waː˨˩ jiːt̚˨ naːu˨ kɛː˧ kɐu˧ mɐt̚˨ sœːŋ˥ hyːn˥] (WONG-GOK TOONG TOONG-LOH-WAHN HY TSUEN HEUNG-GONG JOY FAHN-WAH YEET-NAU GEH GAU-MUT SEUNG-HUEN)",
          "translation": "Mong Kok and Causeway Bay are the most bustling and lively shopping districts in the whole of Hong Kong."
        },
        {
          "target": "深水埗保留咗好多香港傳統嘅地道小食同行街排檔。",
          "reading": "sam1 seoi2 bou2 bou2 lau4 zo2 hou2 do1 hoeng1 gong2 cyun4 tung4 ge3 dei6 dou6 siu2 sik6 tung4 haang4 gaai1 paai4 dong3. [sɐm˥ sɵy˧˥ pou˧˥ pou˧˥ lɐu˨˩ tsɔː˧˥ hou˧˥ tɐi˧˥ hœːŋ˥ kɔːŋ˧˥ tsʰyːn˨˩ tʰʊŋ˨˩ kɛː˧ tei˨ tou˨ siːu˧˥ sɪk̚˨ tʰʊŋ˨˩ haːŋ˨˩ kaːi˥ pʰaːi˨˩ tɔːŋ˧] (SUM-SOEY-BO BO-LAU-JOR HOH-DOH HEUNG-GONG TSUEN-TOONG GEH DAY-DOH SEW-SIK TOONG HAHNG-GY PY-DONG)",
          "translation": "Sham Shui Po preserves a great deal of Hong Kong's traditional local snacks and street stalls."
        }
      ],
      "mnemonics": [
        "【港九新界歌】中環金融高樓矗，尖沙咀畔望維港；旺角市集人如潮，銅鑼灣內買興旺！"
      ],
      "culturalNotes": [
        "香港市民習慣將過維多利亞港統稱為「過海」（gwo3 hoi2），例如「我今日要過海見客」（我今天要去港島/九龍見客戶），成為獨具港味之空間心理標記。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【地標識別】位於九龍半島南端、坐擁維多利亞港壯麗海景與星光大道之著名街區係：",
          "options": [
            "尖沙咀 (zim1 saa1 zeoi2)",
            "中環 (zung1 waan4)",
            "屯門 (tyun4 mun4)",
            "沙田 (saa1 tin4)"
          ],
          "answerIndex": 0,
          "explanation": "尖沙咀（zim1 saa1 zeoi2）位於九龍半島南端。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【空間語彙】在香港日常口語中，「過海」（gwo3 hoi2）所指之具體地理行為係：",
          "options": [
            "橫渡或穿過維多利亞港（往返港島與九龍）",
            "出國去外國旅遊",
            "游泳去大嶼山",
            "坐輪船去澳門"
          ],
          "answerIndex": 0,
          "explanation": "「過海」專指跨越維多利亞港往返港島與九龍。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【區域歸屬】以下邊個著名繁華街區位於香港島（而非九龍）？",
          "options": [
            "銅鑼灣 (tung4 lo4 waan4)",
            "旺角 (wong6 gok3)",
            "尖沙咀 (zim1 saa1 zeoi2)",
            "深水埗 (sam1 seoi2 bou2)"
          ],
          "answerIndex": 0,
          "explanation": "銅鑼灣（Causeway Bay）位於香港島北岸。"
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
        }
      ],
      "passThreshold": 0.8
    }
  }
};
  var CURRICULUM = {
    subject: 'cantonese',
    units: UNITS,
    lessons: LESSONS
  };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['cantonese'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
