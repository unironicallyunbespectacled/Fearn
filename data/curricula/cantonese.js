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
    "title": "數字、時間同日期 (Numbers, Time & Date) (第1課)",
    "level": "A1",
    "objective": "Master Cantonese linguistics for 粵語單元3第1課深度語言學結構 with authentic syntax, phonology, and idiomatic precision.",
    "presentation": {
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
      "explanation": "",
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
      "mnemonics": [],
      "culturalNotes": []
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
