// FEARN Curriculum Data — Cantonese
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
    "objective": "Jyutping Phonics, 6 Tones & Core Greetings: Master Cantonese Jyutping romanization, unaspirated vs aspirated stops (b/p, d/t, g/k), and greetings (Zou2san4, Nei5hou2).",
    "presentation": {
      "explanation": "歡迎學習廣東話（粵語，Cantonese）！廣東話語音系統採用香港語言學學會制定之標準粵拼方案（Jyutping）。廣東話塞音無清濁對立，而以送氣與否為核心區別：不送氣清塞音 b [p]（如「爸爸」baa4 baa1）、「打」daa2、「大家」daai6 gaa1，對比強烈送氣清塞音 p [pʰ]（如「害怕」paa3）、「聽日」ting1 jat6、「企立」kei5 laap6。廣東話具備六個基本聲調（6 Tones）：第一聲陰平高平調（如「詩」si1）、第二聲陰上高升調（如「史」si2）、第三聲陰去中平調（如「試」si3）、第四聲陽平低降調（如「時」si4）、第五聲陽上低升調（如「市」si5）、第六聲陽去低平調（如「事」si6）。日常核心見面問候語包括「早晨」（zou2 san4，早上問候好）與「你好」（nei5 hou2，禮貌問候）。廣東話完整保留了入聲韻尾（-p, -t, -k），音韻鏗鏘有力，富有古典漢語韻律美感。 熟練掌握雙唇音（b/p/m）、舌尖音（d/t/n/l）與舌根音（g/k/ng）之發音位置與送氣對比，並於晨早見面時親切道出「早晨，食咗早餐未呀？」，體現嶺南早茶社交之問候溫情。",
      "examples": [
        {
          "target": "早晨！今日天氣真係好好。",
          "reading": "Zou2 san4! Gam1 jat6 tin1 hei3 zan1 hai6 hou2 hou2.",
          "translation": "Good morning! Today's weather is really great."
        },
        {
          "target": "你好，請問你點稱呼？",
          "reading": "Nei5 hou2, cing2 man6 nei5 dim2 cing1 fu1?",
          "translation": "Hello, may I ask how to address you?"
        }
      ],
      "mnemonics": [
        "Jyutping: Numbers 1-6 denote tones. Zou2san4 = Morning (Tones 2 & 4), Nei5hou2 = Hello (Tones 5 & 2)."
      ],
      "culturalNotes": [
        "Cantonese retains nine historical tonal categories (including enter tones / 入聲) matching Middle Chinese poetry rhymes far more closely than modern standard Mandarin."
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
      "explanation": "廣東話中之致謝系統存在涇渭分明之雙軌分工，「唔該」與「多謝」在語用功能上嚴禁混淆，乃衡量粵語純正度之重要標誌：\n\n一、「唔該」之語用範圍：\n１．用於感謝他人付出勞動、時間或提供服務。例如侍應遞茶、司機停車、他人協助開門或搬運重物時，必須道謝「唔該」。\n２．用於禮貌請求或示意借過。例如：「唔該借借」（請借過）、「唔該埋單」（麻煩結帳）。\n３．加上動態助詞「晒」（表全體、徹底）構成「唔該晒」，表達「非常感謝您的鼎力相助」。\n\n二、「多謝」之語用範圍：\n１．專門用於接受物質禮品、金錢餽贈、新春利是（紅包）或受人宴請款待。例如收取生日禮物或受人請客時，必須道謝「多謝」。\n２．用於回應他人的言語讚美或肯定。\n\n辨析準則：他人為你付出勞力或提供便利，道「唔該」；他人將物質財物或言語讚譽贈予於你，道「多謝」。 嚴格掌握「勞駕服務講唔該，收禮獲贈講多謝」之語用分工；若請人借過或幫手開門須講「唔該借借」，接受朋友餽贈生日禮物則必講「多謝你嘅心意」。",
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
            "喺茶餐廳示意侍應添熱水或結帳 (指示或請求餐飲侍應服務，必須使用「唔該」。) (唔該與多謝：粵語致謝體系的語用分工 (Gratitude)",
            "婚宴上收取親友致贈嘅賀禮紅包 (清晰區分「唔該」（勞動服務/請求）同「多謝」（餽贈禮品/讚美）嘅語用範疇，準確運用「唔該晒」。) (唔該與多謝：粵語致謝體系的語用分工 (Gratitude)",
            "生日聚會接過朋友送嘅香水禮盒 (清晰區分「唔該」（勞動服務/請求）同「多謝」（餽贈禮品/讚美）嘅語用範疇，準確運用「唔該晒」。) (唔該與多謝：粵語致謝體系的語用分工 (Gratitude)",
            "被同事讚賞工作效率高超 (清晰區分「唔該」（勞動服務/請求）同「多謝」（餽贈禮品/讚美）嘅語用範疇，準確運用「唔該晒」。) (唔該與多謝：粵語致謝體系的語用分工 (Gratitude)"
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
      "explanation": "粵語聲調系統完整保留中古漢語平上去入分陰陽之宏大格局。現代標準廣東話舒聲字共有六個獨立音位聲調，其五度標音音高輪廓如下：\n\n一、六調音高分佈與代表字：\n１．第1聲（陰平）：五五高平調，音高居於頂點，如「詩」、「天」。\n２．第2聲（陰上）：三五高升調，由中音升至最高音，如「史」、「好」。\n３．第3聲（陰去）：三三中平調，平穩適中，如「試」、「去」。\n４．第4聲（陽平）：二一低降調，音高落至最低胸音，如「時」、「人」。\n５．第5聲（陽上）：二三低升調，由低音緩升至中音，如「市」、「我」。\n６．第6聲（陽去）：二二低平調，低音平直微高於第4聲，如「事」、「食」。\n\n二、經典聲調口訣與辨義重要性：\n香港學界常用「三碗細牛腩麵」作為順序記憶第1至第6聲之代表語句。粵語聲調具極強辨義功能，聲調改變將徹底改變詞義，例如「買」（第5聲低升）與「賣」（第6聲低平）。 粵語調值由高平55、高升25、中平33、低降21、低升23至低平22排列有序，入聲則配屬陰入（高/中）與陽入（低），多聽「分分鐘鐘」與「三碗半牛肉麵」之調值口訣有助精準掌握音高。",
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
            "高升調 35 (第2聲（陰上）由中音（3度）升至最高音（5度）。) (粵語九聲六調與音高輪廓 (The Six Tones & Pitch Contours))",
            "高平調 55) (Context: 粵語九聲六調與音高輪廓 (The Six Tones & Pitch )",
            "低降調 21) (Context: 粵語九聲六調與音高輪廓 (The Six Tones & Pitch )",
            "低平調 22) (Context: 粵語九聲六調與音高輪廓 (The Six Tones & Pitch )"
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
            "「買」係第5聲（低升，購進），「賣」係第6聲（低平，售出） (「買」為第5聲（maai5，23低升），「賣」為第6聲（maai6，22低平）。)",
            "「買」係第6聲（售出），「賣」係第5聲（購進）) (Context: 粵語九聲六調與音高輪廓 (The Six Tones & Pitch )",
            "兩者皆為第1聲且意思完全相同) (Context: 粵語九聲六調與音高輪廓 (The Six Tones & Pitch )",
            "「買」係名詞，「賣」係形容詞) (Context: 粵語九聲六調與音高輪廓 (The Six Tones & Pitch )"
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
      "explanation": "廣東話之道別表達兼具典雅規範與高度口語化特徵，不同場合有相應之言辭習慣：\n\n一、常用道別句式：\n１．「再見」：標準正式道別語，多見於廣播通告、學校課堂、正式會議散會或新聞播報。\n２．「拜拜」：源自英語借詞，已完全融入粵語日常生活，老少咸宜，適用於朋友、同事與日常道別。第二個音節常讀成變調高升音。\n３．「聽日見」：「聽日」即明天，意為「明天見」；「一陣見」意為「稍後見 / 一會兒見」。\n４．「我走先喇」：粵語副詞「先」習慣置於動詞之後表「先行一步」，乃告辭離席時極具禮貌之慣用語句。\n\n二、「得閒飲茶」之社交語用深意：\n「得閒飲茶」字面意為「有空時一起去飲茶品嚐點心」。在香港社交文化中，此語往往作為溫暖客氣之告別客套語，表達維繫情誼之美好願望，除非緊接約定具體時間地點，否則不宜死板視為即刻兌現之日程承諾。 「得閒飲茶」多屬客套社交辭令，展現港式人情味與社交默契；真正約定聚會時常會進一步追問具體日期與地點，例如「下個禮拜三約喺旺角等」。",
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
            "表達友好掛念嘅告別客套，意為「保持聯絡、改天相聚」 (「得閒飲茶」係香港極具代表性嘅人情味客套道別語。) (道別用語、拜拜與「得閒飲茶」 (Farewells & 'Dak Haan Jam Caa'))",
            "要求你即刻預訂聽朝早茶位 (靈活運用「再見」、「拜拜」、「聽日見」同「我走先」，並掌握「得閒飲茶」嘅社交語用深意。) (道別用語、拜拜與「得閒飲茶」 (Farewells & 'Dak Haan Jam Caa'))",
            "表示對你目前工作忙碌嘅嚴厲批評 (靈活運用「再見」、「拜拜」、「聽日見」同「我走先」，並掌握「得閒飲茶」嘅社交語用深意。) (道別用語、拜拜與「得閒飲茶」 (Farewells & 'Dak Haan Jam Caa'))",
            "要求你即刻替對方支付茶水費用 (靈活運用「再見」、「拜拜」、「聽日見」同「我走先」，並掌握「得閒飲茶」嘅社交語用深意。) (道別用語、拜拜與「得閒飲茶」 (Farewells & 'Dak Haan Jam Caa'))"
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
      "explanation": "在廣東話社交與商務往來中，禮貌詢問對方尊姓大名並準確使用稱謂乃人際交往之基石：\n\n一、禮貌問名句式：\n１．「請問點稱呼？」：最地道、最普遍之敬語問名句式。「請問」表禮貌請求，「點」表如何，「稱呼」表稱謂。\n２．「請問你貴姓？」：較為正式隆重之商務問法，「貴姓」意為「您尊貴的姓氏」。\n３．回應姓名方式：自報姓氏可道「我姓張」；報上慣用稱呼可道「叫我阿Ken得喇」。\n\n二、粵語稱謂語序特徵：\n廣東話之尊稱一律後置於姓氏之後：\n１．「先生」：黃先生。\n２．「小姐」：李小姐。\n３．「太太」：陳太太。\n日常熟人之間，常在單字名或英文名前加前綴「阿」（如「阿強」、「阿May」），以增添親切隨和之氣氛。 職場上稱呼男士為「先生」（如「陳先生」）、女士為「小姐」或「女士」；日常口語常以「貴姓呀？」、「請問點樣稱呼你？」表示敬意，親切而得體。",
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
      "explanation": "廣東話之人稱代詞系統簡潔明晰，第三人稱代詞不分性別，複數形式一律通過後綴「哋」構詞：\n\n一、單數人稱代詞：\n１．第一人稱單數：「我」，指稱自己。\n２．第二人稱單數：「你」，指稱對方（粵語無北方話「您」字，對尊長一律通過稱謂如「黃先生」、「陳經理」表達敬意）。\n３．第三人稱單數：「佢」，兼指「他、她、它」，無性別與物稱差別，口語高度通用。\n\n二、複數人稱代詞（代詞根＋「哋」）：\n１．「我哋」：我們。\n２．「你哋」：你們。\n３．「佢哋」：他們、她們、它們。\n\n後綴「哋」僅用於人稱代詞及部分指人名詞（如「朋友哋」、「後生仔哋」），不可用於普通非指人物件。 複數詞綴「哋」（dei6）可靈活附於所有代詞與指人名詞之後，如「我哋」（我們）、「你哋」（你們）、「佢哋」（他們）及「朋友哋」，口語發音輕快自然。",
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
            "口語中不分性別，兼指男性、女性及事物 (粵語代詞「佢」在口語中兼表他、她、它，不分性別與物稱。) (人稱代詞系統：我、你、佢與複數後綴「哋」 (Personal Pronouns & Plural Suffix dei6))",
            "僅專門指代女性 (掌握粵語單數人稱代詞（我、你、佢）及加上複數後綴「哋」（我哋、你哋、佢哋）之語法結構。) (人稱代詞系統：我、你、佢與複數後綴「哋」 (Personal Pronouns & Plural Suffix dei6))",
            "僅專門指代男性 (掌握粵語單數人稱代詞（我、你、佢）及加上複數後綴「哋」（我哋、你哋、佢哋）之語法結構。) (人稱代詞系統：我、你、佢與複數後綴「哋」 (Personal Pronouns & Plural Suffix dei6))",
            "只能指代非人類動物 (掌握粵語單數人稱代詞（我、你、佢）及加上複數後綴「哋」（我哋、你哋、佢哋）之語法結構。) (人稱代詞系統：我、你、佢與複數後綴「哋」 (Personal Pronouns & Plural Suffix dei6))"
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
      "explanation": "粵語基本句型遵循「主語＋謂語＋賓語」結構。其中判斷動詞「係」相當於英語繫詞，否定形式則在動詞前加否定詞「唔」：\n\n一、肯定判斷句（主語＋係＋名詞/形容詞短語）：\n１．表示身份、國籍或職業：例如「我係工程師」、「佢係香港人」。\n２．表示事物屬性：「呢部係最新款電話」。\n\n二、否定判斷句（主語＋唔係＋名詞/形容詞短語）：\n１．粵語核心否定詞為「唔」（鼻音獨立成音節，第4聲低降調），置於動詞「係」之前構成「唔係」。\n２．例如：「我唔係遊客，我喺呢度住」、「嗰個唔係我嘅手袋」。 否定詞「唔」（m4）乃雙唇鼻音成節輔音，直接置於動詞「係」之前構成「唔係」，口語中如「我唔係遊客，我喺香港讀書」節奏分明。",
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
            "唔係……係…… (「唔係……係……」表達否定前者、肯定後者之判斷。) (判斷動詞「係」與否定結構「唔係」 (The Copula hai6 & Negation m4 hai6))",
            "冇……有…… (熟練運用繫詞「係」（表肯定判斷）與「唔係」（表否定判斷）建構主謂賓基本陳述句。) (判斷動詞「係」與否定結構「唔係」 (The Copula hai6 & Negation m4 hai6))",
            "未……係…… (熟練運用繫詞「係」（表肯定判斷）與「唔係」（表否定判斷）建構主謂賓基本陳述句。) (判斷動詞「係」與否定結構「唔係」 (The Copula hai6 & Negation m4 hai6))",
            "唔……都…… (熟練運用繫詞「係」（表肯定判斷）與「唔係」（表否定判斷）建構主謂賓基本陳述句。) (判斷動詞「係」與否定結構「唔係」 (The Copula hai6 & Negation m4 hai6))"
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
            "佢係一名經驗豐富嘅建築師。 (「主語＋係＋名詞短語」係標準正確之粵語判斷句。) (判斷動詞「係」與否定結構「唔係」 (The Copula hai6 & Negation m4 hai6))",
            "佢冇係一名建築師。 (熟練運用繫詞「係」（表肯定判斷）與「唔係」（表否定判斷）建構主謂賓基本陳述句。) (判斷動詞「係」與否定結構「唔係」 (The Copula hai6 & Negation m4 hai6))",
            "佢係唔建築師。 (熟練運用繫詞「係」（表肯定判斷）與「唔係」（表否定判斷）建構主謂賓基本陳述句。) (判斷動詞「係」與否定結構「唔係」 (The Copula hai6 & Negation m4 hai6))",
            "佢建築師係唔。 (熟練運用繫詞「係」（表肯定判斷）與「唔係」（表否定判斷）建構主謂賓基本陳述句。) (判斷動詞「係」與否定結構「唔係」 (The Copula hai6 & Negation m4 hai6))"
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
      "explanation": "助詞「嘅」係廣東話中使用頻率最高之結構助詞之一，主要承擔兩種語法功能：\n\n一、表示領屬所有關係：\n１．代詞/名詞＋「嘅」＋中心名詞：例如「我嘅手錶」、「公司嘅文件」。\n２．領屬代詞省略中心語：「呢本小說係我嘅」（這本小說是我的）。\n３．親屬關係中助詞可省略：在關係親近之家庭成員前，常可省去「嘅」，直接講「我阿爸」、「我阿哥」。\n\n二、形容詞修飾名詞（定語標記）：\n１．形容詞短語＋「嘅」＋名詞：例如「好靚嘅衫」（漂亮的衣服）、「新鮮嘅水果」。\n２．複合修飾結構：「好平好食嘅茶餐廳」（便宜好吃的茶餐廳）。 助詞「嘅」（ge3）既表領屬關係（如「我嘅書包」），亦可用於定語後置修飾與強調語氣（如「靚嘅衫」），功能與古漢語之「之」字一脈相承。",
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
            "呢個係陳律師公事包嘅。 (掌握結構助詞「嘅」（ge3）在表示所有關係（我嘅/你嘅）及形容詞修飾名詞時之核心用法。)",
            "呢個陳律師係嘅公事包。 (掌握結構助詞「嘅」（ge3）在表示所有關係（我嘅/你嘅）及形容詞修飾名詞時之核心用法。)",
            "呢個公事包陳律師係嘅。 (掌握結構助詞「嘅」（ge3）在表示所有關係（我嘅/你嘅）及形容詞修飾名詞時之核心用法。)"
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
            "這輛車是屬於他們的 (「代詞＋嘅」作謂語表所有權歸屬。) (領屬助詞「嘅」與定語修飾結構 (Possessive Particle ge3 & Modifiers))",
            "這輛車是他們駕駛的 (掌握結構助詞「嘅」（ge3）在表示所有關係（我嘅/你嘅）及形容詞修飾名詞時之核心用法。)",
            "他們正在購買這輛車 (掌握結構助詞「嘅」（ge3）在表示所有關係（我嘅/你嘅）及形容詞修飾名詞時之核心用法。)",
            "他們討厭這輛車 (掌握結構助詞「嘅」（ge3）在表示所有關係（我嘅/你嘅）及形容詞修飾名詞時之核心用法。)"
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
      "explanation": "廣東話形成疑問句之手段極為豐富靈活，日常是非問句主要有兩大核心構式：\n\n一、正反重疊問句：\n１．動詞正反重疊：「主語＋動詞＋唔＋動詞＋賓語」。例如：「你係唔係張先生？」（你是不是張先生？）\n２．行為動詞正反問：「你飲唔飲奶茶？」（你喝不喝奶茶？）「佢去唔去尖沙咀？」（他去不去尖沙咀？）\n３．特點：正反問句內部已包含疑問焦點，句末通常不再需要重複加疑問詞。\n\n二、句末疑問助詞問句：\n１．陳述句＋「呀？」（中性禮貌詢問，如「你係學生呀？」）。\n２．陳述句＋「咩？」（帶有詫異、懷疑或不確定語氣，如「佢今日唔返工咩？」）。 正反問句「動詞＋唔＋動詞」（如「去唔去？」、「識唔識？」）語氣直接明瞭，句尾常疊加助詞「呀」以柔化語調，體現粵語特有之親和力。",
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
            "你今日去九龍塘係唔？ (掌握粵語是非問句之兩種主要構式：句末疑問語氣助詞「呀/咩」與正反重疊問句「係唔係」。) (粵語疑問句式：句末助詞「呀」與正反問「係唔係」 (Questions)",
            "你今日去唔九龍塘？ (掌握粵語是非問句之兩種主要構式：句末疑問語氣助詞「呀/咩」與正反重疊問句「係唔係」。) (粵語疑問句式：句末助詞「呀」與正反問「係唔係」 (Questions)",
            "你今日係九龍塘去？ (掌握粵語是非問句之兩種主要構式：句末疑問語氣助詞「呀/咩」與正反重疊問句「係唔係」。) (粵語疑問句式：句末助詞「呀」與正反問「係唔係」 (Questions)"
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
            "驚訝、反詰或難以置信之懷疑語氣 (「咩」（me1）常用於表示詫異、反問或不相信之語氣。)",
            "極度恭敬之謙卑語氣 (掌握粵語是非問句之兩種主要構式：句末疑問語氣助詞「呀/咩」與正反重疊問句「係唔係」。) (粵語疑問句式：句末助詞「呀」與正反問「係唔係」 (Questions)",
            "冷淡命令之威嚴語氣 (掌握粵語是非問句之兩種主要構式：句末疑問語氣助詞「呀/咩」與正反重疊問句「係唔係」。) (粵語疑問句式：句末助詞「呀」與正反問「係唔係」 (Questions)",
            "歡欣慶祝之熱烈語氣 (掌握粵語是非問句之兩種主要構式：句末疑問語氣助詞「呀/咩」與正反重疊問句「係唔係」。) (粵語疑問句式：句末助詞「呀」與正反問「係唔係」 (Questions)"
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
            "肯定：「係，我係」／ 否定：「唔係，我姓黃」 (回答判斷動詞問句時，肯定答「係」，否定答「唔係」。) (粵語疑問句式：句末助詞「呀」與正反問「係唔係」 (Questions)",
            "肯定：「好，我哋」／ 否定：「冇，我唔」 (掌握粵語是非問句之兩種主要構式：句末疑問語氣助詞「呀/咩」與正反重疊問句「係唔係」。) (粵語疑問句式：句末助詞「呀」與正反問「係唔係」 (Questions)",
            "肯定：「有，我知」／ 否定：「未，我早」 (掌握粵語是非問句之兩種主要構式：句末疑問語氣助詞「呀/咩」與正反重疊問句「係唔係」。) (粵語疑問句式：句末助詞「呀」與正反問「係唔係」 (Questions)",
            "肯定：「得，我去」／ 否定：「咪，我講」 (掌握粵語是非問句之兩種主要構式：句末疑問語氣助詞「呀/咩」與正反重疊問句「係唔係」。) (粵語疑問句式：句末助詞「呀」與正反問「係唔係」 (Questions)"
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
      "explanation": "廣東話之指示詞系統層次分明，以空間距離之遠近為基準，並與量詞及處所名詞緊密結合：\n\n一、近指代詞（靠近說話者空間）：\n１．「呢個」：這個（物件/人）。\n２．「呢度」或「呢便」：這裡、這兒、這邊。\n３．「呢啲」：這些（複數指示）。\n\n二、遠指代詞（遠離說話者空間）：\n１．「嗰個」：那個（物件/人）。\n２．「嗰度」或「嗰便」：那裡、那兒、那邊。\n３．「嗰啲」：那些（複數指示）。\n\n三、疑問處所代詞：\n１．「邊度」或「邊便」：哪裡、哪兒、何處。例如：「地鐵站喺邊度？」（地鐵站在哪裡？）。 近指用「呢」（ni1，如「呢度」、「呢部電話」），遠指用「嗰」（go2，如「嗰邊」、「嗰位朋友」），指稱清晰明確且廣泛應用於市井買賣。",
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
            "請問巴士總站喺呢度呀？) (Context: 指示詞體系：呢個、嗰個與方位代詞 (Demonstratives)",
            "請問巴士總站喺嗰度呀？) (Context: 指示詞體系：呢個、嗰個與方位代詞 (Demonstratives)",
            "請問巴士總站係邊個呀？) (Context: 指示詞體系：呢個、嗰個與方位代詞 (Demonstratives)"
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
            "哪裡 / 何處 (「邊度」（bin1 dou6）為粵語處所疑問代詞，相當於「哪裡/何處」。)",
            "這裡) (Context: 指示詞體系：呢個、嗰個與方位代詞 (Demonstratives)",
            "那裡) (Context: 指示詞體系：呢個、嗰個與方位代詞 (Demonstratives)",
            "到處) (Context: 指示詞體系：呢個、嗰個與方位代詞 (Demonstratives)"
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
      "explanation": "粵語完整保留中古漢語入聲韻尾系統。基數一至十之語音結構充分展現入聲塞音唯閉音特徵：\n\n一、基數一至十發音序列：\n１．一（jat1）：陰入聲，以舌尖塞音 [-t̚] 收尾。\n２．二（ji6）：陽去聲，低平調。\n３．三（saam1）：陰平聲，雙唇鼻音 [-m] 閉唇收尾。\n４．四（sei3）：陰去聲，中平調。\n５．五（ng5）：陽上聲，鼻音獨立成音節。\n６．六（luk6）：陽入聲，以舌根塞音 [-k̚] 喉部收尾。\n７．七（cat1）：陰入聲，送氣塞擦音聲母配舌尖塞音 [-t̚] 收尾。\n８．八（baat3）：中入聲，長元音配舌尖塞音 [-t̚] 收尾。\n９．九（gau2）：陰上聲，高升調。\n１０．十（sap6）：陽入聲，以雙唇塞音 [-p̚] 緊閉雙唇收尾。\n\n二、入聲韻尾核心要領：\n粵語入聲韻尾 [-p̚]、[-t̚]、[-k̚] 均為「唯閉音」，即發音器官到位阻斷氣流後即刻停頓，絕不可爆破出聲。 數字「一」（jat1，-t尾）、「七」（cat1，-t尾）、「八」（baat3，-t尾）、「十」（sap6，-p尾）、「六」（luk6，-k尾）均具備嚴整塞音韻尾，發音時短促不爆破。",
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
            "發（faat3，發財富貴） (「八」（baat3）與「發」（faat3）同韻且音近，象徵發財興旺。)",
            "生（saang1，生生不息） (掌握粵語基數一至十之標準發音，並深入辨析入聲塞音韻尾（-p, -t, -k）之唯閉不發音特徵。)",
            "福（fuk1，幸福安康） (掌握粵語基數一至十之標準發音，並深入辨析入聲塞音韻尾（-p, -t, -k）之唯閉不發音特徵。)",
            "吉（gat1，大吉大利） (掌握粵語基數一至十之標準發音，並深入辨析入聲塞音韻尾（-p, -t, -k）之唯閉不發音特徵。)"
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
      "explanation": "粵語在較大數詞系統及量詞修飾搭配上有嚴格語法分工：\n\n一、數級單位：\n１．十（sap6）、百（baak3）、千（cin1）、萬（maan6）。\n２．特殊合音字：廿（jaa6，二十）、卅（saa1，三十）。例如「廿蚊」（二十元）、「卅歲」（三十歲）。\n\n二、「二」（ji6）與「兩」（loeng5）之核心區別：\n１．基數報數、序數及複合數尾數用「二」：如「一二三」、「第二個」、「十二」、「廿二」。\n２．量詞前面修飾名詞必須用「兩」：如「兩個人」（兩個人）、「兩部車」（兩輛車）、「兩杯水」（兩杯水），絕對不可說成「*二個人」。\n３．百、千、萬數詞單位前通常用「兩」：如「兩百」（二百）、「兩千」（二千）、「兩萬」（二萬）。 量詞與名詞前計數必用「兩」（loeng5，如「兩杯水」、「兩千蚊」），序數、電話號碼與數學計算則用「二」（ji6，如「第二位」、「二加二」）。",
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
            "二十元 (「廿」（jaa6）係「二十」之合音字，「廿蚊」即二十元。)",
            "十二元) (Context: 百千萬數詞與「兩」同「二」之量詞搭配 (Hundreds, Thous)",
            "二百元) (Context: 百千萬數詞與「兩」同「二」之量詞搭配 (Hundreds, Thous)",
            "兩千元) (Context: 百千萬數詞與「兩」同「二」之量詞搭配 (Hundreds, Thous)"
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
            "我今日喺書店買咗兩本書同兩支筆。 (修飾量詞「本」、「支」必須使用「兩」（兩本書、兩支筆）。) (百千萬數詞與「兩」同「二」之量詞搭配 (Hundreds, Thousands & ji6 vs loeng5))",
            "我今日喺書店買咗二本書同二支筆。) (Context: 百千萬數詞與「兩」同「二」之量詞搭配 (Hundreds, Thous)",
            "呢架巴士係第二兩架。) (Context: 百千萬數詞與「兩」同「二」之量詞搭配 (Hundreds, Thous)",
            "我有二個阿哥。) (Context: 百千萬數詞與「兩」同「二」之量詞搭配 (Hundreds, Thous)"
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
      "explanation": "廣東話之時間報時系統極具地域特色，其中以「字」計分之傳統源遠流長：\n\n一、核心時間單位：\n１．「點」（dim2）：小時/點鐘。如「三點」（三點鐘）。\n２．「半」（bun3）：半小時/三十分鐘。如「三點半」（3:30）。\n３．「個字」（go3 zi6）：以鐘錶錶盤上之 1 至 12 數字為基準，指針每走過一個大格（5分鐘）即為「一個字」：\n   - 「一個字」＝ 5分鐘（如三點一個字 ＝ 3:05）\n   - 「兩個字」＝ 10分鐘（如三點兩個字 ＝ 3:10）\n   - 「三個字」＝ 15分鐘（如三點三個字 ＝ 3:15 / 一刻鐘）\n   - 「九個字」＝ 45分鐘（如三點九個字 ＝ 3:45 / 三刻鐘）\n\n二、差時表達：\n「差」（caa1）表相欠。如「差一個字四點」（3:55，差五分鐘到四點）。 香港民間以五分鐘為「一個字」，三點十五分即「三點三個字」，四點四十五分即「四點九個字」，半點稱「半」（如「五點半」），極具本土特色。",
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
            "差十分鐘八點 (掌握粵語鐘點系統，熟練運用「點」（小時）、「個字」（五分鐘單位）及「半」（三十分鐘）精確報時。) (鐘點表達：「點」、「個字」與「半」 (Telling Time)",
            "八點差兩個字 (掌握粵語鐘點系統，熟練運用「點」（小時）、「個字」（五分鐘單位）及「半」（三十分鐘）精確報時。) (鐘點表達：「點」、「個字」與「半」 (Telling Time)",
            "八點過兩個字 (掌握粵語鐘點系統，熟練運用「點」（小時）、「個字」（五分鐘單位）及「半」（三十分鐘）精確報時。) (鐘點表達：「點」、「個字」與「半」 (Telling Time)"
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
      "explanation": "廣東話之日期與時間座標體系結構完整，兼具傳統與現代口語特徵：\n\n一、星期表達系統：\n１．「星期」系統：星期一至星期六，星期日（sing1 kei4 jat6）。\n２．「禮拜」系統（口語更為地道常用）：禮拜一至禮拜六，禮拜日（lai5 baai3 jat6）或禮拜天。\n\n二、日期時間座標詞：\n１．「今日」（gam1 jat6）：今天。\n２．「聽日」（ting1 jat6）：明天；「聽朝」（ting1 ziu1）：明早。\n３．「琴日」或「尋日」（kam4 jat6 / cam4 jat6）：昨天；「琴晚」（kam4 maan5）：昨晚。\n４．「後日」（hau6 jat6）：後天；「前日」（cin4 jat6）：前天。\n\n三、月份與日期：\n１．月份：一月（jat1 jyut6）至十二月（sap6 ji6 jyut6）。\n２．日/號：口語多用「號」（hou6），如「五月八號」（五月八日）。 時間副詞「琴日」（昨天）、「今日」（今天）、「聽日」（明天）與「後日」（後天）日常交際高頻使用，搭配「禮拜一至禮拜日」準確安排日程。",
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
            "明天 (「聽日」（ting1 jat6）即現代標準漢語之「明天」。)",
            "昨天 (掌握粵語星期（星期/禮拜）、月份、號數以及今日、聽日、琴日等核心時間參照詞彙。) (星期、月份與今日/聽日/琴日 (Days of the Week, Months & Time Adverbs))",
            "今天 (掌握粵語星期（星期/禮拜）、月份、號數以及今日、聽日、琴日等核心時間參照詞彙。) (星期、月份與今日/聽日/琴日 (Days of the Week, Months & Time Adverbs))",
            "後天 (掌握粵語星期（星期/禮拜）、月份、號數以及今日、聽日、琴日等核心時間參照詞彙。) (星期、月份與今日/聽日/琴日 (Days of the Week, Months & Time Adverbs))"
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
            "昨晚 (「琴晚 / 尋晚」（kam4 maan5）即「昨晚 / 昨天晚上」。)",
            "今晚 (掌握粵語星期（星期/禮拜）、月份、號數以及今日、聽日、琴日等核心時間參照詞彙。) (星期、月份與今日/聽日/琴日 (Days of the Week, Months & Time Adverbs))",
            "明晚 (掌握粵語星期（星期/禮拜）、月份、號數以及今日、聽日、琴日等核心時間參照詞彙。) (星期、月份與今日/聽日/琴日 (Days of the Week, Months & Time Adverbs))",
            "後晚 (掌握粵語星期（星期/禮拜）、月份、號數以及今日、聽日、琴日等核心時間參照詞彙。) (星期、月份與今日/聽日/琴日 (Days of the Week, Months & Time Adverbs))"
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
            "星期日 (「禮拜日」（lai5 baai3 jat6）即星期日。)",
            "星期一 (掌握粵語星期（星期/禮拜）、月份、號數以及今日、聽日、琴日等核心時間參照詞彙。) (星期、月份與今日/聽日/琴日 (Days of the Week, Months & Time Adverbs))",
            "星期六 (掌握粵語星期（星期/禮拜）、月份、號數以及今日、聽日、琴日等核心時間參照詞彙。) (星期、月份與今日/聽日/琴日 (Days of the Week, Months & Time Adverbs))",
            "工作日 (掌握粵語星期（星期/禮拜）、月份、號數以及今日、聽日、琴日等核心時間參照詞彙。) (星期、月份與今日/聽日/琴日 (Days of the Week, Months & Time Adverbs))"
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
      "explanation": "在廣東話社交與商務溝通中，精確禮貌約定時間地點係極為關鍵之實用技能：\n\n一、核心預約句式：\n１．詢問空閒：「你聽日下晝得唔得閒呀？」（你明天下午有空嗎？）\n２．商議時間：「我哋幾點見面好呀？」（我們幾點見面好呢？）\n３．指定時間地點：「我哋約喺聽朝十點中環地鐵站出口見啦。」（我們約在明早十點中環地鐵站出口見吧。）\n\n二、確認與變更約定：\n１．確認約定：「好呀，咁就一言為定啦！」（好啊，那就說定了！）\n２．改期禮貌用語：「真係唔好意思，我聽日有啲事，可唔可以改去後日呀？」（真的很不好意思，我明天有點事，能不能改到後天呢？） 約會常見句式如「聽日下晝三點喺銅鑼灣等，得唔得呀？」，答覆「冇問題，到時見！」展現高效便捷之都市溝通節奏。",
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
            "你聽朝做乜嘢？ (靈活運用「約喺...」、「幾點見」以及「得唔得閒」等高頻句式進行商務與社交約定。) (約定時間與會面句式 (Making Appointments & Scheduling))",
            "你聽朝走先喇！ (靈活運用「約喺...」、「幾點見」以及「得唔得閒」等高頻句式進行商務與社交約定。) (約定時間與會面句式 (Making Appointments & Scheduling))",
            "你聽朝唔好意思！ (靈活運用「約喺...」、「幾點見」以及「得唔得閒」等高頻句式進行商務與社交約定。) (約定時間與會面句式 (Making Appointments & Scheduling))"
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
            "多謝禮物，我走先喇。 (靈活運用「約喺...」、「幾點見」以及「得唔得閒」等高頻句式進行商務與社交約定。) (約定時間與會面句式 (Making Appointments & Scheduling))",
            "早晨李先生，聽日見。 (靈活運用「約喺...」、「幾點見」以及「得唔得閒」等高頻句式進行商務與社交約定。) (約定時間與會面句式 (Making Appointments & Scheduling))",
            "請問最近嘅洗手間喺邊度？ (靈活運用「約喺...」、「幾點見」以及「得唔得閒」等高頻句式進行商務與社交約定。) (約定時間與會面句式 (Making Appointments & Scheduling))"
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
      "explanation": "廣東話量詞系統豐富精密，名詞與量詞之間存在嚴格語義制約：\n\n一、核心四大量詞範疇：\n１．「個」（go3）：最通用量詞。用於人（一個人）、圓形球狀物（一個蘋果、一個橙）、抽象單位（一個問題、一個鐘頭）。\n２．「隻」（zek3）：用於動物（一隻狗、一隻貓）、船隻（一隻船）、餐具器皿（一隻杯、一隻碟）、成雙成對中之單件（一隻手、一隻鞋）。\n３．「條」（tiu4）：用於細長柔軟或延伸之物（一條繩、一條毛巾、一條褲）、水生魚類（一條魚）、街道道路（一條街、一條路）。\n４．「間」（gaan1）：專門用於房屋、店舖、機構建築（一間屋、一間舖頭、一間學校、一間醫院、一間茶餐廳）。 粵語量詞豐富嚴謹：動物與單隻器具用「隻」（一隻貓、一隻碟），細長物件用「條」（一條魚、一條褲），店舖建築用「間」（一間餐廳）。",
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
            "一個茶餐廳 (掌握粵語最核心之四大個體量詞（個、隻、條、間）之分類特徵與精準名詞搭配語法。) (高頻個體量詞：個、隻、條、間 (Individual Classifiers)",
            "一隻茶餐廳 (掌握粵語最核心之四大個體量詞（個、隻、條、間）之分類特徵與精準名詞搭配語法。) (高頻個體量詞：個、隻、條、間 (Individual Classifiers)",
            "一條茶餐廳 (掌握粵語最核心之四大個體量詞（個、隻、條、間）之分類特徵與精準名詞搭配語法。) (高頻個體量詞：個、隻、條、間 (Individual Classifiers)"
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
            "一個杯 (掌握粵語最核心之四大個體量詞（個、隻、條、間）之分類特徵與精準名詞搭配語法。) (高頻個體量詞：個、隻、條、間 (Individual Classifiers)",
            "一條杯 (掌握粵語最核心之四大個體量詞（個、隻、條、間）之分類特徵與精準名詞搭配語法。) (高頻個體量詞：個、隻、條、間 (Individual Classifiers)",
            "一間杯 (掌握粵語最核心之四大個體量詞（個、隻、條、間）之分類特徵與精準名詞搭配語法。) (高頻個體量詞：個、隻、條、間 (Individual Classifiers)"
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
            "街市嗰條鮮魚好新鮮，游嚟游去。 (魚類使用量詞「條」（條魚）。) (高頻個體量詞：個、隻、條、間 (Individual Classifiers)",
            "街市嗰間鮮魚好新鮮。 (掌握粵語最核心之四大個體量詞（個、隻、條、間）之分類特徵與精準名詞搭配語法。) (高頻個體量詞：個、隻、條、間 (Individual Classifiers)",
            "街市嗰隻褲好靚。 (掌握粵語最核心之四大個體量詞（個、隻、條、間）之分類特徵與精準名詞搭配語法。) (高頻個體量詞：個、隻、條、間 (Individual Classifiers)",
            "街市嗰條舖頭好大。 (掌握粵語最核心之四大個體量詞（個、隻、條、間）之分類特徵與精準名詞搭配語法。) (高頻個體量詞：個、隻、條、間 (Individual Classifiers)"
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
      "explanation": "在飲食與日用品消費領域，容器量詞與集合量詞扮演著核心角色：\n\n一、餐飲容器量詞（兼作計量單位）：\n１．「杯」（bui1）：液體飲品。如「一杯凍檸茶」、「兩杯熱鴛鴦」。\n２．「碗」（wun2）：湯麵粥品。如「一碗雲吞麵」、「一碗艇仔粥」。\n３．「碟」（dip6）：飯麵菜餚。如「一碟乾炒牛河」、「兩碟油菜」。\n４．「樽」（zeon1）：瓶裝飲品。如「一樽蒸餾水」、「兩樽汽水」。\n\n二、集合與成雙量詞：\n１．「對」（deoi3）：成對之物。如「一對筷子」、「一對皮鞋」。\n２．「打」（daa1 / daa2）：源自英語 'dozen'（十二個）。如「一打蛋撻」（12個蛋撻）、「半打西餅」（6件蛋糕）。\n３．「套」（tou3）：成套之物。如「一套西裝」、「一套餐具」。 飲食場合高頻使用容器量詞，如「一樽可樂」、「一碟乾炒牛河」、「一對筷子」與「一打蛋撻」，量詞運用得當方顯地道。",
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
            "一碗熱奶茶 (熟練運用餐飲容器量詞（杯、碗、碟、樽）與成套集合量詞（對、打、套）進行日常計量。) (容器與集合量詞：杯、碗、碟、樽、對、打 (Container & Group Classifiers))",
            "一碟熱奶茶 (熟練運用餐飲容器量詞（杯、碗、碟、樽）與成套集合量詞（對、打、套）進行日常計量。) (容器與集合量詞：杯、碗、碟、樽、對、打 (Container & Group Classifiers))",
            "一條熱奶茶 (熟練運用餐飲容器量詞（杯、碗、碟、樽）與成套集合量詞（對、打、套）進行日常計量。) (容器與集合量詞：杯、碗、碟、樽、對、打 (Container & Group Classifiers))"
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
            "十二個 (「一打」（jat1 daa1）源自英語 dozen，即十二個。)",
            "六個 (熟練運用餐飲容器量詞（杯、碗、碟、樽）與成套集合量詞（對、打、套）進行日常計量。) (容器與集合量詞：杯、碗、碟、樽、對、打 (Container & Group Classifiers))",
            "十個 (熟練運用餐飲容器量詞（杯、碗、碟、樽）與成套集合量詞（對、打、套）進行日常計量。) (容器與集合量詞：杯、碗、碟、樽、對、打 (Container & Group Classifiers))",
            "二十個 (熟練運用餐飲容器量詞（杯、碗、碟、樽）與成套集合量詞（對、打、套）進行日常計量。) (容器與集合量詞：杯、碗、碟、樽、對、打 (Container & Group Classifiers))"
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
            "一碗雲吞麵、一碟乾炒牛河、一杯凍檸茶 (麵用「碗」，炒河粉用「碟」，冷飲用「杯」。) (容器與集合量詞：杯、碗、碟、樽、對、打 (Container & Group Classifiers))",
            "一樽雲吞麵、一碗乾炒牛河、一條凍檸茶 (熟練運用餐飲容器量詞（杯、碗、碟、樽）與成套集合量詞（對、打、套）進行日常計量。) (容器與集合量詞：杯、碗、碟、樽、對、打 (Container & Group Classifiers))",
            "一隻雲吞麵、一條乾炒牛河、一碗凍檸茶 (熟練運用餐飲容器量詞（杯、碗、碟、樽）與成套集合量詞（對、打、套）進行日常計量。) (容器與集合量詞：杯、碗、碟、樽、對、打 (Container & Group Classifiers))",
            "一間雲吞麵、一對乾炒牛河、一打凍檸茶 (熟練運用餐飲容器量詞（杯、碗、碟、樽）與成套集合量詞（對、打、套）進行日常計量。) (容器與集合量詞：杯、碗、碟、樽、對、打 (Container & Group Classifiers))"
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
      "explanation": "粵語語法中有一項極具特色且有別於北方話之重大規律：量詞可以直接與名詞結合（省略數詞「一」或指示詞），並承擔「定指」（Definite Reference）功能，相當於英語定冠詞 'the'：\n\n一、結構規律（量詞＋名詞）：\n１．「部車好靚」（bou6 ce1 hou2 leng3）：（那輛 / 這輛）車真漂亮。（直指上下文已提及或眼前特定之車輛）。\n２．「條路好窄」（tiu4 lou6 hou2 zaak3）：（那條）路很窄。\n３．「間舖頭執咗」（gaan1 pou3 tau2 zap1 zo2）：（那家）店舖結業倒閉了。\n４．「隻狗好惡」（zek3 gau2 hou2 ok3）：（那隻）狗非常兇猛。\n\n二、定指與非定指對比：\n１．泛指/非定指：「我好想買車」（ngo5 hou2 soeng2 maai5 ce1，我想買車，不特指某輛）。\n２．定指：「部車賣咗喇」（bou6 ce1 maai6 zo2 laa3，那輛車已經賣掉了）。 粵語特有「量詞＋名詞」定指結構（如「本小說好精彩」、「個男仔好高」），無須數詞「一」即具特指特徵，為嶺南語法之一大瑰寶。",
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
            "世界上所有的電腦都壞了 (掌握粵語量詞直接置於名詞前（無數詞）表達定指「這/那/該（the）」之重大語法特徵。)",
            "某一部不知名的電腦 (掌握粵語量詞直接置於名詞前（無數詞）表達定指「這/那/該（the）」之重大語法特徵。)",
            "很多部電腦 (掌握粵語量詞直接置於名詞前（無數詞）表達定指「這/那/該（the）」之重大語法特徵。)"
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
            "一個街好熱鬧 (掌握粵語量詞直接置於名詞前（無數詞）表達定指「這/那/該（the）」之重大語法特徵。)",
            "街好熱鬧一個 (掌握粵語量詞直接置於名詞前（無數詞）表達定指「這/那/該（the）」之重大語法特徵。)",
            "熱鬧好條街 (掌握粵語量詞直接置於名詞前（無數詞）表達定指「這/那/該（the）」之重大語法特徵。)"
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
            "直接表達定指（相當於英語中的 the） (粵語「量詞＋名詞」承擔定指（Definite Reference）功能。)",
            "只能表示疑問 (掌握粵語量詞直接置於名詞前（無數詞）表達定指「這/那/該（the）」之重大語法特徵。)",
            "只能表示否定 (掌握粵語量詞直接置於名詞前（無數詞）表達定指「這/那/該（the）」之重大語法特徵。)",
            "表示數量極大 (掌握粵語量詞直接置於名詞前（無數詞）表達定指「這/那/該（the）」之重大語法特徵。)"
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
      "explanation": "在香港街市（傳統菜市場）買餸時，量詞與計量重量單位緊密相連：\n\n一、街市常用重量單位：\n１．「斤」（gan1）：香港司馬斤，一斤合 16 兩（約 600 克）。\n２．「兩」（loeng2）：一兩約 37.5 克。如「買四兩蝦」。（注意此處讀第2聲陰上調 loeng2，以別於數詞 loeng5）。\n３．「磅」（bong6）：英制單位（Pound，約 454 克），在水果攤或超市極常用。\n\n二、問價與計價句式：\n１．「請問呢啲菜幾多錢一斤呀？」（請問這些蔬菜多少錢一斤？）\n２．「二十蚊一斤，買兩斤算你平啲啦！」（二十元一斤，買兩斤算你便宜點吧！）\n３．「唔該同我稱半斤排骨。」（麻煩幫我秤半斤排骨。） 走入傳統街市向菜販魚販問價，常言「老細，呢啲菜心幾多錢一斤呀？」、「游水蝦新鮮唔新鮮呀？」，市井生活氣息撲面而來。",
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
            "請問番茄有冇一斤呀？ (掌握香港街市傳統計量單位（斤、磅、兩）以及「幾多錢一斤」等買餸高頻問價句式。) (街市買餸與量詞問價：「幾多錢一斤/磅」 (Market Shopping & Price Inquiries))",
            "請問番茄走先喇！ (掌握香港街市傳統計量單位（斤、磅、兩）以及「幾多錢一斤」等買餸高頻問價句式。) (街市買餸與量詞問價：「幾多錢一斤/磅」 (Market Shopping & Price Inquiries))",
            "請問番茄得閒飲茶！ (掌握香港街市傳統計量單位（斤、磅、兩）以及「幾多錢一斤」等買餸高頻問價句式。) (街市買餸與量詞問價：「幾多錢一斤/磅」 (Market Shopping & Price Inquiries))"
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
            "十六兩 (香港司馬斤沿用十六兩制（半斤八兩）。) (街市買餸與量詞問價：「幾多錢一斤/磅」 (Market Shopping & Price Inquiries))",
            "十兩 (掌握香港街市傳統計量單位（斤、磅、兩）以及「幾多錢一斤」等買餸高頻問價句式。) (街市買餸與量詞問價：「幾多錢一斤/磅」 (Market Shopping & Price Inquiries))",
            "十二兩 (掌握香港街市傳統計量單位（斤、磅、兩）以及「幾多錢一斤」等買餸高頻問價句式。) (街市買餸與量詞問價：「幾多錢一斤/磅」 (Market Shopping & Price Inquiries))",
            "八兩 (掌握香港街市傳統計量單位（斤、磅、兩）以及「幾多錢一斤」等買餸高頻問價句式。) (街市買餸與量詞問價：「幾多錢一斤/磅」 (Market Shopping & Price Inquiries))"
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
            "三十蚊 (掌握香港街市傳統計量單位（斤、磅、兩）以及「幾多錢一斤」等買餸高頻問價句式。) (街市買餸與量詞問價：「幾多錢一斤/磅」 (Market Shopping & Price Inquiries))",
            "十五蚊 (掌握香港街市傳統計量單位（斤、磅、兩）以及「幾多錢一斤」等買餸高頻問價句式。) (街市買餸與量詞問價：「幾多錢一斤/磅」 (Market Shopping & Price Inquiries))",
            "十蚊 (掌握香港街市傳統計量單位（斤、磅、兩）以及「幾多錢一斤」等買餸高頻問價句式。) (街市買餸與量詞問價：「幾多錢一斤/磅」 (Market Shopping & Price Inquiries))"
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
      "explanation": "在香港零售與集市購物時，議價與折扣表達具有鮮明之語言習慣：\n\n一、議價與求減價句式：\n１．「平啲得唔得呀？」（peng4 di1 dak1 m4 dak1 aa3？，便宜點行不行？）\n２．「算平啲啦，我買多兩件呀。」（算便宜點吧，我多買兩件。）\n３．「好抵呀！」（hou2 dai2 aa3！，性價比極高/非常划算！）對比「好貴呀」（太貴了）。\n\n二、折扣與促銷術語：\n１．「折」（zit3）：粵語折扣計算與現代漢語一致，以百分比成數計算：\n   - 「八折」（baat3 zit3）：即原價之 80%（相當於 20% off）。\n   - 「半價」（bun3 gaa3）：五折（50% off）。\n２．「減價」（gaam2 gaa3）：降價促銷；「大減價」（daai6 gaam2 gaa3）：大減價 / 清貨大特賣。 購買衣物小商品時常言「老闆，計平啲啦」、「買兩件有冇折呀？」，商家若答「九折畀你啦」，即指按原價九成計算。",
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
            "老細，貴啲得唔得呀？ (掌握粵語購物議價口語（平啲啦、抵唔抵）、折扣計算（八折、減價）及結帳表達。) (購物議價與折扣表達：「平啲啦」、「幾多折」 (Bargaining & Discounts))",
            "老細，早晨你好！ (掌握粵語購物議價口語（平啲啦、抵唔抵）、折扣計算（八折、減價）及結帳表達。) (購物議價與折扣表達：「平啲啦」、「幾多折」 (Bargaining & Discounts))",
            "老細，我走先喇！ (掌握粵語購物議價口語（平啲啦、抵唔抵）、折扣計算（八折、減價）及結帳表達。) (購物議價與折扣表達：「平啲啦」、「幾多折」 (Bargaining & Discounts))"
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
            "70 蚊 (七十元) (「七折」（cat1 zit3）即按原價 70% 支付，100 蚊 × 70% ＝ 70 蚊。)",
            "30 蚊 (掌握粵語購物議價口語（平啲啦、抵唔抵）、折扣計算（八折、減價）及結帳表達。) (購物議價與折扣表達：「平啲啦」、「幾多折」 (Bargaining & Discounts))",
            "17 蚊 (掌握粵語購物議價口語（平啲啦、抵唔抵）、折扣計算（八折、減價）及結帳表達。) (購物議價與折扣表達：「平啲啦」、「幾多折」 (Bargaining & Discounts))",
            "7 蚊 (掌握粵語購物議價口語（平啲啦、抵唔抵）、折扣計算（八折、減價）及結帳表達。) (購物議價與折扣表達：「平啲啦」、「幾多折」 (Bargaining & Discounts))"
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
      "explanation": "粵語中表達動作發生之空間處所時，處所介詞「喺」（hai2，第2聲高升調）扮演核心樞紐角色：\n\n一、「喺」之核心句式結構：\n１．「主語＋喺＋處所＋動詞短語」：表示某人在某處進行某項活動。例如「我喺中環返工」（我在中環上班）、「佢哋喺屋企睇電視」（他們在家看電視）。\n２．「主語＋喺＋處所」：單純表示存在方位。例如「陳先生依家喺辦公室」（陳先生現在在辦公室）。\n\n二、語音與字形辨析：\n１．「喺」（hai2，第2聲高升調）：處所介詞/動詞，表「在……地方」。\n２．「係」（hai6，第6聲低平調）：判斷動詞（繫詞），表「是」。\n兩者聲調不同、語義完全獨立，嚴禁混淆！ 處所介詞「喺」（hai2）引介動作發生之地點，遵循「主語＋喺＋地點＋做嘢」之典型漢語語序，如「佢哋喺圖書館溫書」。",
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
            "我哋睇書喺圖書館。 (掌握粵語核心處所介詞「喺」（hai2）及「主語＋喺＋處所＋動詞」之標準空間行動句式語序。)",
            "喺圖書館我哋睇書係。 (掌握粵語核心處所介詞「喺」（hai2）及「主語＋喺＋處所＋動詞」之標準空間行動句式語序。)",
            "我哋圖書館喺睇書。 (掌握粵語核心處所介詞「喺」（hai2）及「主語＋喺＋處所＋動詞」之標準空間行動句式語序。)"
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
            "陳生每日下晝都喺尖沙咀見客戶。 (「喺＋處所＋動詞短語」（喺尖沙咀見客戶）完全正確。) (處所介詞「喺」與「主語＋喺＋處所＋動詞」語序 (Location Preposition hai2 & Word Order))",
            "陳生每日下晝都係尖沙咀見客戶。 (掌握粵語核心處所介詞「喺」（hai2）及「主語＋喺＋處所＋動詞」之標準空間行動句式語序。)",
            "陳生每日見客戶尖沙咀喺。 (掌握粵語核心處所介詞「喺」（hai2）及「主語＋喺＋處所＋動詞」之標準空間行動句式語序。)",
            "陳生喺每日見客戶尖沙咀。 (掌握粵語核心處所介詞「喺」（hai2）及「主語＋喺＋處所＋動詞」之標準空間行動句式語序。)"
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
      "explanation": "在廣東話中進行空間定位與方位指示時，方位詞系統呈現鮮明之名詞後綴結構：\n\n一、空間方位詞體系：\n１．基本方位：「前面」（前頭/前方）、「後面」（後方）、「左便」（左邊）、「右便」（右邊）。\n２．垂直與內外：「上面」（上方/表面）、「下面」（下方/底端）、「入面」（內部/裡面）、「出面」（外部/外面）。\n３．鄰近與相對：「隔離」（gaak3 lei4，隔壁/相鄰）、「對面」（deoi3 min6，正對面）。\n\n二、「喺邊度」處所問答句式：\n１．詢問：「請問便利店喺邊度呀？」（請問便利店在哪裡？）\n２．回答：「便利店喺地鐵站出口對面，藥房隔離。」（便利店在地鐵站出口對面，藥房隔壁。） 尋找地點必用「……喺邊度呀？」，方位詞如「前面、後面、左手邊、右手邊、樓上、樓下」指示清晰，問路指路通行無阻。",
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
            "咖啡店在書店隔壁 / 緊挨著書店 (「隔離」（gaak3 lei4）在粵語中意為「隔壁/相鄰」。)",
            "咖啡店在書店對面 (掌握「喺邊度」處所詢問句式，並熟練運用前、後、左、右、上、下、入、出、隔離等全套空間方位詞。) (「喺邊度」問句與空間方位詞（前、後、左、右、上、下、入、出） (Location Questions & Spatial Relators))",
            "咖啡店在書店樓上 (掌握「喺邊度」處所詢問句式，並熟練運用前、後、左、右、上、下、入、出、隔離等全套空間方位詞。) (「喺邊度」問句與空間方位詞（前、後、左、右、上、下、入、出） (Location Questions & Spatial Relators))",
            "咖啡店在書店裡面 (掌握「喺邊度」處所詢問句式，並熟練運用前、後、左、右、上、下、入、出、隔離等全套空間方位詞。) (「喺邊度」問句與空間方位詞（前、後、左、右、上、下、入、出） (Location Questions & Spatial Relators))"
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
            "請問最近嘅地鐵站係邊個呀？ (掌握「喺邊度」處所詢問句式，並熟練運用前、後、左、右、上、下、入、出、隔離等全套空間方位詞。) (「喺邊度」問句與空間方位詞（前、後、左、右、上、下、入、出） (Location Questions & Spatial Relators))",
            "請問最近嘅地鐵站有冇人呀？ (掌握「喺邊度」處所詢問句式，並熟練運用前、後、左、右、上、下、入、出、隔離等全套空間方位詞。) (「喺邊度」問句與空間方位詞（前、後、左、右、上、下、入、出） (Location Questions & Spatial Relators))",
            "請問最近嘅地鐵站得唔得閒呀？ (掌握「喺邊度」處所詢問句式，並熟練運用前、後、左、右、上、下、入、出、隔離等全套空間方位詞。) (「喺邊度」問句與空間方位詞（前、後、左、右、上、下、入、出） (Location Questions & Spatial Relators))"
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
      "explanation": "香港擁有世界領先之公共交通網絡，日常出行中動詞「搭」（daap3）與「坐」（co5）為主要乘坐動詞：\n\n一、交通工具搭配：\n１．「搭地鐵 / 港鐵」（daap3 dei6 tit3）：乘坐地下鐵路。\n２．「搭巴士」（daap3 baa1 si2）：乘坐雙層巴士。\n３．「搭小巴」（daap3 siu2 baa1）：乘坐公共小型巴士（綠色專線小巴或紅色小巴）。\n４．「坐的士 / 搭的士」（co5 dik1 si2）：乘坐計程車/出租車。\n５．「搭電車 / 搭叮叮」（daap3 din6 ce1 / daap3 ding1 ding1）：乘坐港島百年雙層有軌電車。\n６．「搭天星小輪」（daap3 tin1 sing1 siu2 leon4）：乘坐維港渡海輪船。\n\n二、出行問答句式：\n「你平時點樣返工呀？」「我平時搭地鐵返工，好快好方便。」 乘搭交通工具動詞統稱「搭」（搭地鐵、搭渡輪、搭電車），亦可言「坐的士」，刷八達通卡「嘟一聲」即可便捷過閘乘車。",
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
            "行地鐵返工 (掌握搭乘香港特色公共交通工具之動賓搭配（搭地鐵、搭巴士、搭小巴、坐的士、搭叮叮）。) (公共交通工具：搭地鐵、搭巴士、搭小巴、坐的士 (Public Transport Collocations))",
            "跑地鐵返工 (掌握搭乘香港特色公共交通工具之動賓搭配（搭地鐵、搭巴士、搭小巴、坐的士、搭叮叮）。) (公共交通工具：搭地鐵、搭巴士、搭小巴、坐的士 (Public Transport Collocations))",
            "飛地鐵返工 (掌握搭乘香港特色公共交通工具之動賓搭配（搭地鐵、搭巴士、搭小巴、坐的士、搭叮叮）。) (公共交通工具：搭地鐵、搭巴士、搭小巴、坐的士 (Public Transport Collocations))"
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
      "explanation": "廣東話中描述日常生活作息之核心動詞具有鮮明之構詞特徵：\n\n一、核心作息動詞：\n１．「起身」（hei2 san1）：起床。\n２．「返工」（faan1 gung1）：上班/去工作；「放工」（fong3 gung1）：下班。\n３．「返學」（faan1 hok6）：上學/去學校；「放學」（fong3 hok6）：放學。\n４．「食飯」（sik6 faan6）：用餐；「食晏」（sik6 aan3）：吃午飯/午餐。\n５．「瞓覺」（fan3 gaau3）：睡覺。\n\n二、一日時間與作息串聯：\n「我每日朝早七點起身，八點搭車返工，一點食晏，下晝六點放工，夜晚十一點瞓覺。」 描述每日作息口語常用動詞：早起叫「起身」，上班叫「返工」，下班叫「放工」，睡眠叫「瞓覺」，用語簡潔生動。",
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
            "下班 (「放工」（fong3 gung1）即下班，相對應之「返工」（faan1 gung1）為上班。)",
            "上班 (熟練運用粵語高頻日常作息動詞（起身、返工、放工、食晏、返學、放學、瞓覺）描述一日流程。) (日常生活作息動詞：起身、返工、放工、食飯、瞓覺 (Daily Routine Verbs))",
            "請假 (熟練運用粵語高頻日常作息動詞（起身、返工、放工、食晏、返學、放學、瞓覺）描述一日流程。) (日常生活作息動詞：起身、返工、放工、食飯、瞓覺 (Daily Routine Verbs))",
            "加班 (熟練運用粵語高頻日常作息動詞（起身、返工、放工、食晏、返學、放學、瞓覺）描述一日流程。) (日常生活作息動詞：起身、返工、放工、食飯、瞓覺 (Daily Routine Verbs))"
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
            "吃午飯了嗎？ (「食晏」（sik6 aan3）專指吃午餐。)",
            "起床了嗎？ (熟練運用粵語高頻日常作息動詞（起身、返工、放工、食晏、返學、放學、瞓覺）描述一日流程。) (日常生活作息動詞：起身、返工、放工、食飯、瞓覺 (Daily Routine Verbs))",
            "下班了嗎？ (熟練運用粵語高頻日常作息動詞（起身、返工、放工、食晏、返學、放學、瞓覺）描述一日流程。) (日常生活作息動詞：起身、返工、放工、食飯、瞓覺 (Daily Routine Verbs))",
            "睡覺了嗎？ (熟練運用粵語高頻日常作息動詞（起身、返工、放工、食晏、返學、放學、瞓覺）描述一日流程。) (日常生活作息動詞：起身、返工、放工、食飯、瞓覺 (Daily Routine Verbs))"
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
            "我每晚十一點半瞓覺，聽朝七點起身。 (夜晚睡覺（瞓覺）、明早起床（起身）邏輯與語法完全正確。) (日常生活作息動詞：起身、返工、放工、食飯、瞓覺 (Daily Routine Verbs))",
            "我每晚十一點半起身，聽朝七點瞓覺。 (熟練運用粵語高頻日常作息動詞（起身、返工、放工、食晏、返學、放學、瞓覺）描述一日流程。) (日常生活作息動詞：起身、返工、放工、食飯、瞓覺 (Daily Routine Verbs))",
            "我每晚十一點半放學返工。 (熟練運用粵語高頻日常作息動詞（起身、返工、放工、食晏、返學、放學、瞓覺）描述一日流程。) (日常生活作息動詞：起身、返工、放工、食飯、瞓覺 (Daily Routine Verbs))",
            "我每晚十一點半食晏。 (熟練運用粵語高頻日常作息動詞（起身、返工、放工、食晏、返學、放學、瞓覺）描述一日流程。) (日常生活作息動詞：起身、返工、放工、食飯、瞓覺 (Daily Routine Verbs))"
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
      "explanation": "粵語中「有」（jau5）與「冇」（mou5）構成高度對稱之肯定與否定體系：\n\n一、「有」之兩大功能：\n１．領屬所有（Possession）：「主語＋有＋賓語」。例如「我有兩部電話」（我有兩部手機）。\n２．存在句（Existence）：「處所＋有＋名詞」。例如「樓下有一間超市」（樓下有一家超市）。\n\n二、「冇」（mou5，第5聲低升調）之對稱否定：\n「冇」係粵語極具代表性之本字（字形由「有」內部兩橫被掏空演化而來），直接對應「沒有」：\n１．否定領屬：「我冇帶現金」（我沒帶現金）。\n２．否定存在：「呢度冇洗手間」（這裡沒有洗手間）。\n３．否定過去動作/完成貌（相當於未曾/沒有做）：「我琴日冇見過佢」（我昨天沒見過他）。 「有」（jau5）表擁有或存在，「冇」（mou5）表沒有或無存在，如「雪櫃入面冇晒鮮奶」或「我手頭上有一份急件要做」，掌握對立即可自由表達。",
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
            "請問是不是熱咖啡呀？ (掌握粵語存在動詞與領屬動詞「有」（jau5）及其強大否定對立詞「冇」（mou5）之句法結構。)",
            "請問有沒有熱咖啡是？ (掌握粵語存在動詞與領屬動詞「有」（jau5）及其強大否定對立詞「冇」（mou5）之句法結構。)",
            "請問熱咖啡有冇是？ (掌握粵語存在動詞與領屬動詞「有」（jau5）及其強大否定對立詞「冇」（mou5）之句法結構。)"
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
            "直接表達「沒有 / 未曾」 (「冇」（mou5）在粵語中專門表示「沒有」或否定過去動作。)",
            "表示「很多」 (掌握粵語存在動詞與領屬動詞「有」（jau5）及其強大否定對立詞「冇」（mou5）之句法結構。)",
            "表示「非常喜歡」 (掌握粵語存在動詞與領屬動詞「有」（jau5）及其強大否定對立詞「冇」（mou5）之句法結構。)",
            "表示「已經完成」 (掌握粵語存在動詞與領屬動詞「有」（jau5）及其強大否定對立詞「冇」（mou5）之句法結構。)"
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
      "explanation": "「飲茶」（jam2 caa4）係嶺南及香港文化中最具代表性之飲食社交傳統，蘊含深厚之歷史禮儀：\n\n一、「一盅兩件」與開茶茶種：\n入座後侍應（伙計）第一句必問「飲咩茶？」（想要什麼茶？），顧客可選擇：\n１．「普洱」（bou2 lei2）：醇厚消滯，最為大眾化。\n２．「香片」（hoeng1 pin2）：茉莉花茶，清香怡人。\n３．「鐵觀音」（tit3 gun1 jam1）：烏龍茶類，茶味濃郁甘醇。\n４．「水仙」（seoi2 sin1）：福建閩北烏龍，岩韻悠長。\n５．「菊普」（guk1 bou2）：菊花茶混合普洱茶，清熱消脂。\n\n二、飲茶三大肢體禮儀暗號：\n１．「叩指謝茶」（kau3 zi2 lai5）：他人為自己倒茶時，食指與中指微屈在枱面輕叩兩三下，表示謝意（相傳源自乾隆皇帝微服南巡之典故）。\n２．「揭壺蓋」（kit3 wu4 goi3）：茶壺水飲完需要加熱水時，將壺蓋斜放在壺口或壺柄邊，侍應見到便會主動前來加熱水，無須大聲呼喊。 侍應斟茶時以食指與中指輕叩桌面即為「叩指禮」，傳承乾隆微服私訪之文化典故，既表謝意亦免打斷席間談話，為粵式茶樓重要社交禮貌。",
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
            "唔該要凍檸茶 (掌握粵式茶樓「飲茶」社交文化、開茶茶種選擇（普洱、香片、鐵觀音、水仙）及「叩指謝茶」地道禮儀。) (茶樓飲茶文化與開茶禮儀：「一盅兩件」、「叩指謝茶」 (Yum Cha Culture & Tea Etiquette))",
            "唔該要熱可樂 (掌握粵式茶樓「飲茶」社交文化、開茶茶種選擇（普洱、香片、鐵觀音、水仙）及「叩指謝茶」地道禮儀。) (茶樓飲茶文化與開茶禮儀：「一盅兩件」、「叩指謝茶」 (Yum Cha Culture & Tea Etiquette))",
            "唔該要蒸餾水 (掌握粵式茶樓「飲茶」社交文化、開茶茶種選擇（普洱、香片、鐵觀音、水仙）及「叩指謝茶」地道禮儀。) (茶樓飲茶文化與開茶禮儀：「一盅兩件」、「叩指謝茶」 (Yum Cha Culture & Tea Etiquette))"
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
            "大聲敲擊茶杯呼叫伙計 (掌握粵式茶樓「飲茶」社交文化、開茶茶種選擇（普洱、香片、鐵觀音、水仙）及「叩指謝茶」地道禮儀。) (茶樓飲茶文化與開茶禮儀：「一盅兩件」、「叩指謝茶」 (Yum Cha Culture & Tea Etiquette))",
            "自行拿著茶壺跑到廚房加水 (掌握粵式茶樓「飲茶」社交文化、開茶茶種選擇（普洱、香片、鐵觀音、水仙）及「叩指謝茶」地道禮儀。) (茶樓飲茶文化與開茶禮儀：「一盅兩件」、「叩指謝茶」 (Yum Cha Culture & Tea Etiquette))",
            "把茶壺倒扣在枱面上 (掌握粵式茶樓「飲茶」社交文化、開茶茶種選擇（普洱、香片、鐵觀音、水仙）及「叩指謝茶」地道禮儀。) (茶樓飲茶文化與開茶禮儀：「一盅兩件」、「叩指謝茶」 (Yum Cha Culture & Tea Etiquette))"
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
            "表示茶太燙 (掌握粵式茶樓「飲茶」社交文化、開茶茶種選擇（普洱、香片、鐵觀音、水仙）及「叩指謝茶」地道禮儀。) (茶樓飲茶文化與開茶禮儀：「一盅兩件」、「叩指謝茶」 (Yum Cha Culture & Tea Etiquette))",
            "表示茶不好喝 (掌握粵式茶樓「飲茶」社交文化、開茶茶種選擇（普洱、香片、鐵觀音、水仙）及「叩指謝茶」地道禮儀。) (茶樓飲茶文化與開茶禮儀：「一盅兩件」、「叩指謝茶」 (Yum Cha Culture & Tea Etiquette))",
            "要求更換茶杯 (掌握粵式茶樓「飲茶」社交文化、開茶茶種選擇（普洱、香片、鐵觀音、水仙）及「叩指謝茶」地道禮儀。) (茶樓飲茶文化與開茶禮儀：「一盅兩件」、「叩指謝茶」 (Yum Cha Culture & Tea Etiquette))"
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
      "explanation": "粵式飲茶點心以做工精細、皮薄餡靚著稱，其中譽為「四大天王」者為：\n\n一、點心「四大天王」：\n１．「蝦餃」（haa1 gaau2）：水晶皮晶瑩剔透，鮮蝦爽口彈牙。\n２．「燒賣」（siu1 maai2）：黃色薄皮裹豬肉鮮蝦與蟹籽香菇。\n３．「叉燒包」（caa1 siu1 baau1）：蠔油叉燒餡，鬆軟開口如花笑。\n４．「蛋撻」（daan6 taat1）：酥皮或牛油皮裹金黃香滑蛋漿。\n\n二、其他高頻必食點心：\n１．「腸粉」（coeng2 fan2）：鮮蝦腸（haa1 coeng2）、牛肉腸（ngau4 coeng2）、叉燒腸（caa1 siu1 coeng2）。\n２．「鳳爪」（fung6 zaau2）：豉汁蒸鳳爪（sauce braised chicken feet）。\n３．「山竹牛肉球」（saan1 zuk1 ngau4 juk6 kau4）：嫩滑牛肉球墊腐竹。\n４．「蘿蔔糕」（lo4 baak6 gou1）：煎香白蘿蔔絲臘味糕點。\n\n三、點餐動作：\n「填點心紙」（tin4 dim2 sam1 zi2）、「加單」（gaa1 daan1，加點）。 點單必嚐皮薄餡靚之「筍尖鮮蝦餃」、肉質彈牙之「蟹子燒賣皇」、醬汁濃郁之「蠔油叉燒包」與酥皮滑嫩之「葡式/牛油皮蛋撻」，滋味無窮。",
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
            "炸薯條 (掌握粵式點心「四大天王」與高頻點心名稱及點心紙（加單、劃單）點餐語句。) (經典粵式點心四大天王：蝦餃、燒賣、叉燒包、蛋撻 (The Big Four Dim Sum & Ordering))",
            "漢堡包 (掌握粵式點心「四大天王」與高頻點心名稱及點心紙（加單、劃單）點餐語句。) (經典粵式點心四大天王：蝦餃、燒賣、叉燒包、蛋撻 (The Big Four Dim Sum & Ordering))",
            "比薩餅 (掌握粵式點心「四大天王」與高頻點心名稱及點心紙（加單、劃單）點餐語句。) (經典粵式點心四大天王：蝦餃、燒賣、叉燒包、蛋撻 (The Big Four Dim Sum & Ordering))"
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
            "伙計，唔該埋單！ (掌握粵式點心「四大天王」與高頻點心名稱及點心紙（加單、劃單）點餐語句。) (經典粵式點心四大天王：蝦餃、燒賣、叉燒包、蛋撻 (The Big Four Dim Sum & Ordering))",
            "伙計，唔該早晨！ (掌握粵式點心「四大天王」與高頻點心名稱及點心紙（加單、劃單）點餐語句。) (經典粵式點心四大天王：蝦餃、燒賣、叉燒包、蛋撻 (The Big Four Dim Sum & Ordering))",
            "伙計，唔該走先！ (掌握粵式點心「四大天王」與高頻點心名稱及點心紙（加單、劃單）點餐語句。) (經典粵式點心四大天王：蝦餃、燒賣、叉燒包、蛋撻 (The Big Four Dim Sum & Ordering))"
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
            "兩部燒賣 (掌握粵式點心「四大天王」與高頻點心名稱及點心紙（加單、劃單）點餐語句。) (經典粵式點心四大天王：蝦餃、燒賣、叉燒包、蛋撻 (The Big Four Dim Sum & Ordering))",
            "兩條燒賣 (掌握粵式點心「四大天王」與高頻點心名稱及點心紙（加單、劃單）點餐語句。) (經典粵式點心四大天王：蝦餃、燒賣、叉燒包、蛋撻 (The Big Four Dim Sum & Ordering))",
            "兩間燒賣 (掌握粵式點心「四大天王」與高頻點心名稱及點心紙（加單、劃單）點餐語句。) (經典粵式點心四大天王：蝦餃、燒賣、叉燒包、蛋撻 (The Big Four Dim Sum & Ordering))"
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
      "explanation": "香港「茶餐廳」（caa4 caan1 teng1）融合中西飲食精粹，發展出獨樹一幟之飲食符號：\n\n一、茶餐廳招牌餐點：\n１．「菠蘿油」（bo1 lo4 jau4）：熱辣菠蘿包中間夾一片厚切冰冷牛油，冰火交融。\n２．「乾炒牛河」（gon1 caau2 ngau4 ho2）：芽菜牛肉炒河粉，極講求「鑊氣」（wok6 hei3）。\n３．「西多士」（sai1 do1 si2，法蘭西多士）：沾蛋漿油炸之夾心吐司，淋上牛油糖漿。\n４．「沙爹牛肉麵」（saa1 de1 ngau4 juk6 min6）：濃郁沙爹牛肉配出前一丁即食麵。\n\n二、靈魂飲品體系：\n１．「凍檸茶」（dung3 ning4 caa4）：紅茶底加四五片鮮檸檬與碎冰，飲前用茶匙「篤檸檬」（duk1 ning4 mung1，戳壓檸檬榨汁）。\n２．「港式奶茶」（gong2 sik1 naai5 caa4）：多種斯里蘭卡紅茶拼配，經棉紗網拉茶沖撞淡奶，香濃順滑。\n３．「鴛鴦」（jin1 joeng1）：七成奶茶混合三成咖啡，兼具咖啡香氣與奶茶幼滑。 熱熱菠蘿包夾上厚切冰牛油即為「菠蘿油」，咖啡混合絲襪奶茶即為「鴛鴦」，火候十足之「乾炒牛河」更考驗廚師鑊氣功力。",
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
            "綠茶混合紅茶 (掌握茶餐廳核心特色餐點（菠蘿油、乾炒牛河、西多士）與經典港式飲品（凍檸茶、絲襪奶茶、鴛鴦）。) (茶餐廳術語與特色餐點：菠蘿油、凍檸茶、乾炒牛河、鴛鴦 (Cha Chaan Teng Lingo & Classics))",
            "檸檬水混合可樂 (掌握茶餐廳核心特色餐點（菠蘿油、乾炒牛河、西多士）與經典港式飲品（凍檸茶、絲襪奶茶、鴛鴦）。) (茶餐廳術語與特色餐點：菠蘿油、凍檸茶、乾炒牛河、鴛鴦 (Cha Chaan Teng Lingo & Classics))",
            "豆漿混合牛奶 (掌握茶餐廳核心特色餐點（菠蘿油、乾炒牛河、西多士）與經典港式飲品（凍檸茶、絲襪奶茶、鴛鴦）。) (茶餐廳術語與特色餐點：菠蘿油、凍檸茶、乾炒牛河、鴛鴦 (Cha Chaan Teng Lingo & Classics))"
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
            "中間夾入了一片厚切冰牛油 (「菠蘿油」係在剛出爐之熱菠蘿包中橫切夾入厚切冰凍牛油（牛油遇熱半融）。) (茶餐廳術語與特色餐點：菠蘿油、凍檸茶、乾炒牛河、鴛鴦 (Cha Chaan Teng Lingo & Classics))",
            "裡面包了真正的菠蘿果肉 (掌握茶餐廳核心特色餐點（菠蘿油、乾炒牛河、西多士）與經典港式飲品（凍檸茶、絲襪奶茶、鴛鴦）。) (茶餐廳術語與特色餐點：菠蘿油、凍檸茶、乾炒牛河、鴛鴦 (Cha Chaan Teng Lingo & Classics))",
            "麵包頂部塗上了朱古力醬 (掌握茶餐廳核心特色餐點（菠蘿油、乾炒牛河、西多士）與經典港式飲品（凍檸茶、絲襪奶茶、鴛鴦）。) (茶餐廳術語與特色餐點：菠蘿油、凍檸茶、乾炒牛河、鴛鴦 (Cha Chaan Teng Lingo & Classics))",
            "麵包是用油炸熟的 (掌握茶餐廳核心特色餐點（菠蘿油、乾炒牛河、西多士）與經典港式飲品（凍檸茶、絲襪奶茶、鴛鴦）。) (茶餐廳術語與特色餐點：菠蘿油、凍檸茶、乾炒牛河、鴛鴦 (Cha Chaan Teng Lingo & Classics))"
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
            "撈走檸檬扔掉 (掌握茶餐廳核心特色餐點（菠蘿油、乾炒牛河、西多士）與經典港式飲品（凍檸茶、絲襪奶茶、鴛鴦）。) (茶餐廳術語與特色餐點：菠蘿油、凍檸茶、乾炒牛河、鴛鴦 (Cha Chaan Teng Lingo & Classics))",
            "把茶水倒進杯蓋 (掌握茶餐廳核心特色餐點（菠蘿油、乾炒牛河、西多士）與經典港式飲品（凍檸茶、絲襪奶茶、鴛鴦）。) (茶餐廳術語與特色餐點：菠蘿油、凍檸茶、乾炒牛河、鴛鴦 (Cha Chaan Teng Lingo & Classics))",
            "加大量白開水 (掌握茶餐廳核心特色餐點（菠蘿油、乾炒牛河、西多士）與經典港式飲品（凍檸茶、絲襪奶茶、鴛鴦）。) (茶餐廳術語與特色餐點：菠蘿油、凍檸茶、乾炒牛河、鴛鴦 (Cha Chaan Teng Lingo & Classics))"
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
      "explanation": "香港茶餐廳點餐講求快、準、客製化，形成了一整套極高效率之定製暗號：\n\n一、甜度與冰量控制：\n１．「走甜」（zau2 tim4）：不加糖水/糖漿（完全無糖）。\n２．「少甜」（siu2 tim4）：少放糖漿（減半甜度）。\n３．「走冰」（zau2 bing1）：不加冰塊（去冰）。\n４．「少冰」（siu2 bing1）：減少冰塊（微冰）。\n５．「多冰」（do1 bing1）：多加碎冰。\n\n二、食材與烹飪要求：\n１．「烘底」（hung3 dai2）：三文治麵包用多士爐烘烤至金黃酥脆（通常加收 1-2 元）。\n２．「飛邊」（fei1 bin1）：將三文治麵包皮邊切除。\n３．「走青」（zau2 ceng1）：麵食粥品中不放蔥花、芫荽等青綠調料。\n４．「多飯」（do1 faan6）/「少飯」（siu2 faan6）/「多汁」（do1 zap1，多淋醬汁）。 茶餐廳點飲品可自由定製暗號：不加糖叫「走甜」，去冰塊叫「走冰」，多士烤至焦香香脆叫「烘底」，充分展現香港飲食之個性化與效率。",
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
            "切除麵包皮 (掌握茶餐廳高度個性化之定製術語（走甜、少甜、走冰、少冰、走青、烘底、飛邊、多汁）。) (茶餐廳定製點餐暗號：走甜、少甜、走冰、少冰、烘底 (Customization Jargon))",
            "加多一隻煎蛋 (掌握茶餐廳高度個性化之定製術語（走甜、少甜、走冰、少冰、走青、烘底、飛邊、多汁）。) (茶餐廳定製點餐暗號：走甜、少甜、走冰、少冰、烘底 (Customization Jargon))",
            "加大量番茄醬 (掌握茶餐廳高度個性化之定製術語（走甜、少甜、走冰、少冰、走青、烘底、飛邊、多汁）。) (茶餐廳定製點餐暗號：走甜、少甜、走冰、少冰、烘底 (Customization Jargon))"
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
            "雲吞與蝦肉 (掌握茶餐廳高度個性化之定製術語（走甜、少甜、走冰、少冰、走青、烘底、飛邊、多汁）。) (茶餐廳定製點餐暗號：走甜、少甜、走冰、少冰、烘底 (Customization Jargon))",
            "麵條與湯底 (掌握茶餐廳高度個性化之定製術語（走甜、少甜、走冰、少冰、走青、烘底、飛邊、多汁）。) (茶餐廳定製點餐暗號：走甜、少甜、走冰、少冰、烘底 (Customization Jargon))",
            "大地魚乾 (掌握茶餐廳高度個性化之定製術語（走甜、少甜、走冰、少冰、走青、烘底、飛邊、多汁）。) (茶餐廳定製點餐暗號：走甜、少甜、走冰、少冰、烘底 (Customization Jargon))"
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
      "explanation": "在香港餐飲場景中，結帳與就餐空間共享具有獨特之語言與文化規範：\n\n一、結帳買單用語：\n１．「埋單」（maai4 daan1）：最核心之結帳買單詞彙（相傳源自昔日水上人泊船靠岸「埋岸」算清費用賬單）。\n２．「唔該埋單，分開畀定一齊畀？」（麻煩結帳，分開付還是一起付？）\n３．「收銀處 / 櫃檯」（sau1 ngan4 cyu3）：部分茶餐廳需持水牌/帳單自行到收銀台付款。\n\n二、就餐空間與外賣術語：\n１．「搭枱」（daap3 toi2）：午市繁忙客滿時，互不相識之顧客合坐同一張枱用餐。侍應會問「兩位呀？搭唔搭枱呀？」（兩位嗎？介意拼桌嗎？）。\n２．「打包」（daa2 baau1）：將堂食未食完之剩餘菜餚裝盒帶走。\n３．「外賣」（ngoi6 maai6）：直接外帶，對比「堂食」（tong4 sik6，在店內吃）。\n４．「行街」（haang4 gaai1）：飲品店或茶餐廳外帶熱/凍飲之俚語說法（如「一杯凍檸茶行街」）。 用餐完畢招手呼喚「侍應，唔該埋單！」，午市高峰期人多擠迫常須「搭枱」（與陌生人共用大枱），吃不完食物則禮貌要求「唔該幫我打包」。",
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
            "買菜) (Context: 食肆結帳與打包禮儀：「埋單」、「搭枱」、「打包 / 外賣」 (Bill)",
            "加單) (Context: 食肆結帳與打包禮儀：「埋單」、「搭枱」、「打包 / 外賣」 (Bill)",
            "開茶) (Context: 食肆結帳與打包禮儀：「埋單」、「搭枱」、「打包 / 外賣」 (Bill)"
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
      "explanation": "粵語中表達動作已經完成之核心動態助詞為「咗」（zo2，第2聲陰上調）：\n\n一、「咗」之語法位置與特徵：\n１．「咗」必須緊貼動詞之後（「動詞＋咗＋賓語」）。例如「我食咗早餐」（我吃了早餐）、「佢買咗新衫」（他買了新衣服）。\n２．粵語中「咗」不作句末語氣詞。普通話句末表變化的「了」（如「下雨了」），粵語對應為句尾語氣詞「喇 / 啦」（laa3），如「落雨喇」，兩者分工極為涇渭分明。\n\n二、「咗」之否定體系：\n否定已完成動作時，必須去掉「咗」，改用「未」（mei6，還未）或「仲未」（zung6 mei6，還沒有）：\n１．肯定：「我做咗功課喇。」（我做了功課了。）\n２．否定：「我仲未做功課。」（我還沒有做功課。——嚴禁說「我冇做咗功課」）。 助詞「咗」（zo2）緊隨動詞之後表示動作完結（如「食咗飯」、「買咗飛」），與普通話句末「了」之語氣變化不同，聚焦於動作實體之完成狀態。",
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
            "我已經買車飛咗喇。 (掌握粵語核心完成貌助詞「咗」（zo2）之緊隨動詞語法規則及其與「未/仲未」否定對立。)",
            "我已經買車飛了。 (掌握粵語核心完成貌助詞「咗」（zo2）之緊隨動詞語法規則及其與「未/仲未」否定對立。)",
            "我買咗車飛已經冇。 (掌握粵語核心完成貌助詞「咗」（zo2）之緊隨動詞語法規則及其與「未/仲未」否定對立。)"
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
            "我冇簽咗。 (掌握粵語核心完成貌助詞「咗」（zo2）之緊隨動詞語法規則及其與「未/仲未」否定對立。)",
            "我唔係簽咗。 (掌握粵語核心完成貌助詞「咗」（zo2）之緊隨動詞語法規則及其與「未/仲未」否定對立。)",
            "我未簽咗。 (掌握粵語核心完成貌助詞「咗」（zo2）之緊隨動詞語法規則及其與「未/仲未」否定對立。)"
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
            "必須緊隨動詞之後表示動作完成 (「咗」作為動態助詞，必須緊貼動詞後面。) (完成貌助詞「咗」（zo2）及其與普通話「了」之深層異同 (Perfective Aspect ZO))",
            "必須放在句末表示狀態改變 (掌握粵語核心完成貌助詞「咗」（zo2）之緊隨動詞語法規則及其與「未/仲未」否定對立。)",
            "可以用於否定句「冇＋動詞＋咗」 (掌握粵語核心完成貌助詞「咗」（zo2）之緊隨動詞語法規則及其與「未/仲未」否定對立。)",
            "只能用於形容詞後面 (掌握粵語核心完成貌助詞「咗」（zo2）之緊隨動詞語法規則及其與「未/仲未」否定對立。)"
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
      "explanation": "粵語中表達動作正在進行中（相當於英語 '-ing' 或普通話『正在……』）之核心助詞為「緊」（gan2，第2聲陰上調）：\n\n一、「緊」之句法規則：\n１．「主語＋動詞＋緊＋賓語」：例如「我睇緊電視」（我正在看電視）、「佢哋開緊會」（他們正在開會）。\n２．可與副詞「正喺度 / 喺度」（正在）結合加強語氣：「我正喺度寫緊報告」（我正在寫著報告）。\n\n二、高頻進行時問答：\n１．「你做緊乜嘢呀？」（你正在做什麼？）\n２．「我執緊行李，準備聽日搭飛機出差。」（我正在收拾行李，準備明天坐飛機出差。） 「動詞＋緊」（gan2）精準表達動作正在進行中，如「我開緊會」、「佢睇緊電視」，常搭配副詞「正喺度」加強進行時態語氣。",
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
            "佢聽咗音樂。 (掌握粵語進行貌助詞「緊」（gan2）表達「正在進行某動作」之精準語法結構。)",
            "佢聽過音樂。 (掌握粵語進行貌助詞「緊」（gan2）表達「正在進行某動作」之精準語法結構。)",
            "佢聽住音樂喇。 (掌握粵語進行貌助詞「緊」（gan2）表達「正在進行某動作」之精準語法結構。)"
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
            "昨天已經回覆完了客戶郵件 (掌握粵語進行貌助詞「緊」（gan2）表達「正在進行某動作」之精準語法結構。)",
            "從來沒有回覆過客戶郵件 (掌握粵語進行貌助詞「緊」（gan2）表達「正在進行某動作」之精準語法結構。)",
            "明天打算回覆客戶郵件 (掌握粵語進行貌助詞「緊」（gan2）表達「正在進行某動作」之精準語法結構。)"
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
            "出面緊落雨。 (掌握粵語進行貌助詞「緊」（gan2）表達「正在進行某動作」之精準語法結構。)",
            "出面落雨緊。 (掌握粵語進行貌助詞「緊」（gan2）表達「正在進行某動作」之精準語法結構。)",
            "出面緊雨落。 (掌握粵語進行貌助詞「緊」（gan2）表達「正在進行某動作」之精準語法結構。)"
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
      "explanation": "粵語中表達主體過去之人生經歷與體驗時，使用經歷貌助詞「過」（gwo3，第3聲陰去調）：\n\n一、「過」之核心句式：\n１．肯定句：「主語＋動詞＋過＋（次數/賓語）」。例如「我去過兩次日本」（我去過兩次日本）、「我食過呢間餐廳嘅點心」（我吃過這家餐廳的點心）。\n２．正反疑問句：「動詞＋過……未呀？」。例如「你睇過呢套戲未呀？」（你看過這部電影了嗎？）\n\n二、「過」之否定體系：\n否定經歷貌時，句首加「未 / 仲未」或「從來未」（從未），但後綴「過」保留：\n１．「我仲未去過長洲。」（我還沒去過長洲。）\n２．「佢從來未食過榴槤。」（他從來沒吃過榴槤。） 助詞「過」（gwo3）用於陳述過去之生活經歷或曾否發生某事，如「我未去過歐洲旅行」、「你試過呢間餐廳未？」，表達閱歷生動自然。",
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
            "我以前喺英國住咗兩年喇。 (掌握粵語經歷貌助詞「過」（gwo3）表達過往經驗（曾幾何時）與「從來未……過」之全套句式。)",
            "我以前喺英國住緊兩年。 (掌握粵語經歷貌助詞「過」（gwo3）表達過往經驗（曾幾何時）與「從來未……過」之全套句式。)",
            "我以前喺英國住住兩年。 (掌握粵語經歷貌助詞「過」（gwo3）表達過往經驗（曾幾何時）與「從來未……過」之全套句式。)"
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
            "我從來冇飲咗絲襪奶茶。 (掌握粵語經歷貌助詞「過」（gwo3）表達過往經驗（曾幾何時）與「從來未……過」之全套句式。)",
            "我從來唔飲緊絲襪奶茶。 (掌握粵語經歷貌助詞「過」（gwo3）表達過往經驗（曾幾何時）與「從來未……過」之全套句式。)",
            "我從來未飲咗絲襪奶茶。 (掌握粵語經歷貌助詞「過」（gwo3）表達過往經驗（曾幾何時）與「從來未……過」之全套句式。)"
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
            "前者指剛才完成了吃藥動作，後者指過去曾有過吃那種藥的經歷 (「咗」標記具體事件之完成，「過」標記人生體驗經歷。) (經歷貌助詞「過」（gwo3）與人生體驗表達 (Experiential Aspect GWO))",
            "前者指正在吃藥，後者指將要吃藥 (掌握粵語經歷貌助詞「過」（gwo3）表達過往經驗（曾幾何時）與「從來未……過」之全套句式。)",
            "兩者意思完全相同沒有分別 (掌握粵語經歷貌助詞「過」（gwo3）表達過往經驗（曾幾何時）與「從來未……過」之全套句式。)",
            "前者指否定吃藥，後者指肯定吃藥 (掌握粵語經歷貌助詞「過」（gwo3）表達過往經驗（曾幾何時）與「從來未……過」之全套句式。)"
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
      "explanation": "粵語中「住」（zyu6，第6聲陽去調）係極富表現力之持續態助詞，主要承擔三大功能：\n\n一、靜態持續貌（相當於普通話『着』）：\n表示某種姿勢、服飾或狀態之延續：\n１．「佢戴住眼鏡」（他戴著眼鏡）。\n２．「門開住」（門開著）。\n３．「手入面揸住把雨遮」（手裡握著一把雨傘）。\n\n二、伴隨動作（V1住＋V2）：\n表示以 V1 之方式或伴隨狀態進行 V2：\n１．「我哋行住傾啦」（我們邊走邊聊吧）。\n２．「大家坐住等」（大家坐著等）。\n\n三、暫緩或維持現狀（「動詞＋住先 / 唔好……住」）：\n１．「你食住先啦，唔使等我。」（你先吃著吧，不用等我。）\n２．「唔好行住，等埋陳生一齊走。」（先別走，等陳先生一起走。） 助詞「住」（zyu6）表示動作或狀態之持續保持（如「著住件褸」、「企喺度等住先」），亦可用於祈使句表示暫緩行動（如「等陣先，睇住先」）。",
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
            "我哋行咗傾呢件事。 (掌握持續貌助詞「住」（zyu6）在靜態持續、伴隨動作及祈使暫緩（「住先」）中之三大核心功能。)",
            "我哋行過傾呢件事。 (掌握持續貌助詞「住」（zyu6）在靜態持續、伴隨動作及祈使暫緩（「住先」）中之三大核心功能。)",
            "我哋行緊傾呢件事。 (掌握持續貌助詞「住」（zyu6）在靜態持續、伴隨動作及祈使暫緩（「住先」）中之三大核心功能。)"
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
            "唔好走咗，等我五分鐘！ (掌握持續貌助詞「住」（zyu6）在靜態持續、伴隨動作及祈使暫緩（「住先」）中之三大核心功能。)",
            "唔好走緊，等我五分鐘！ (掌握持續貌助詞「住」（zyu6）在靜態持續、伴隨動作及祈使暫緩（「住先」）中之三大核心功能。)",
            "唔好走過，等我五分鐘！ (掌握持續貌助詞「住」（zyu6）在靜態持續、伴隨動作及祈使暫緩（「住先」）中之三大核心功能。)"
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
            "表示動作已經結束 (掌握持續貌助詞「住」（zyu6）在靜態持續、伴隨動作及祈使暫緩（「住先」）中之三大核心功能。)",
            "表示動作從未發生 (掌握持續貌助詞「住」（zyu6）在靜態持續、伴隨動作及祈使暫緩（「住先」）中之三大核心功能。)",
            "表示將來計劃 (掌握持續貌助詞「住」（zyu6）在靜態持續、伴隨動作及祈使暫緩（「住先」）中之三大核心功能。)"
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
      "explanation": "四項動態助詞構成了粵語精密完備之時體（Aspect）網絡：\n\n一、核心四態語義對比矩陣：\n１．完成態（Perfective）：「食咗」（吃了/已吃）。常搭時間副詞「已經」（已經食咗）、「啱啱」（啱啱食咗）。\n２．進行態（Progressive）：「食緊」（正在吃）。常搭副詞「正喺度 / 喺度」（正喺度食緊）。\n３．經歷態（Experiential）：「食過」（吃過/有經驗）。常搭「以前」（以前食過）、「從來未……過」（從來未食過）。\n４．持續態（Continuous/Accompanying）：「食住」（吃著/伴隨）。常搭「……先」（食住先）、「唔好……住」（唔好食住）。\n\n二、全景語境對比例證：\n「我已經食咗飯」（I have eaten） vs 「我正喺度食緊飯」（I am eating） vs 「我食過呢道菜」（I have tasted this dish before） vs 「大家食住傾」（Let's talk while eating）。 綜合運用「已經……咗」（已完成）、「正喺度……緊」（進行中）、「仲未……過」（未曾體驗）與「啱啱……咗」（剛完成），使粵語時態表達精確無誤。",
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
            "啱啱 …… 咗 …… 正喺度 …… 緊 (「啱啱……咗」搭配完成貌，「正喺度……緊」搭配進行貌。) (三大動態助詞綜合辨析與時間副詞搭配（已經、仲未、啱啱、正喺度） (Aspect Synthesis))",
            "已經 …… 緊 …… 仲未 …… 咗) (Context: 三大動態助詞綜合辨析與時間副詞搭配（已經、仲未、啱啱、正喺度） (As)",
            "從來 …… 過 …… 已經 …… 住) (Context: 三大動態助詞綜合辨析與時間副詞搭配（已經、仲未、啱啱、正喺度） (As)",
            "正喺度 …… 住 …… 啱啱 …… 過) (Context: 三大動態助詞綜合辨析與時間副詞搭配（已經、仲未、啱啱、正喺度） (As)"
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
            "你昨天看完了哪部電影) (Context: 三大動態助詞綜合辨析與時間副詞搭配（已經、仲未、啱啱、正喺度） (As)",
            "你生平看過哪部電影) (Context: 三大動態助詞綜合辨析與時間副詞搭配（已經、仲未、啱啱、正喺度） (As)",
            "你打算買哪部電影的票) (Context: 三大動態助詞綜合辨析與時間副詞搭配（已經、仲未、啱啱、正喺度） (As)"
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
            "我哋飲咗茶傾偈。) (Context: 三大動態助詞綜合辨析與時間副詞搭配（已經、仲未、啱啱、正喺度） (As)",
            "我哋飲過茶傾偈。) (Context: 三大動態助詞綜合辨析與時間副詞搭配（已經、仲未、啱啱、正喺度） (As)",
            "我哋飲緊茶傾咗偈。) (Context: 三大動態助詞綜合辨析與時間副詞搭配（已經、仲未、啱啱、正喺度） (As)"
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
      "explanation": "在香港立體錯綜複雜之高密度街區中問路與指路，必須熟練運用精確之道地空間移動動詞與方位名詞：\n\n一、核心步行導航動詞短語深度解析：\n１．「行直 / 一直行」（haang4 zik6 / jat1 zik6 haang4）：筆直向前走，指順著當前街道方向直行不拐彎。\n２．「轉左 / 轉右」（zyun3 zo2 / zyun3 jau6）：向左轉或向右轉。注意粵語動詞「轉」在此讀陰去調。\n３．「過馬路」（gwo3 maa5 lou6）：橫過街道馬路，穿越行車道。\n４．「過行人天橋」（gwo3 hang4 jan4 tin1 kiu4）：登上並走過架空人行天橋。\n５．「搭扶手電梯 / 搭升降機」（daap3 fu4 sau2 din6 tai1 / daap3 lip1）：乘搭自動扶梯或乘搭垂直箱式電梯。\n\n二、街頭地標與交通參照物網絡：\n１．「十字路口」（sap6 zi6 lou6 hau2）：四向交叉之道路交匯點。\n２．「紅綠燈 / 燈位」（hung4 luk6 dang1 / dang1 wai2）：交通信號燈處，香港俗稱「燈位」。\n３．「斑馬線」（baan1 maa5 sin3）：地面漆有黑白條紋之行人過路專用通道。\n４．「路口」（lou6 hau2）：街道拐彎或分支處；「巷仔」（hong6 zai2）：狹窄的小巷弄堂。\n\n三、地道禮貌問路句型結構：\n１．「唔該借借，請問去……應該點樣行？」（借光請問，去某地該怎麼走？）\n２．「一直行到燈位，見到天橋上橋轉左，落橋右手邊就係。」（直走到信號燈，看到天橋上去左轉，下橋右邊即是。） 街道指引必備口訣：「一路直行，過咗斑馬線之後喺十字路口轉左，目的地就喺你右手邊」，指示清晰令行人一目了然。",
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
            "在前面的交通信號燈處向左轉 (掌握粵語問路句式與核心步行導航動詞（行直、轉左、轉右、過馬路、過天橋、搭扶手電梯）。) (問路與導航核心動詞：「行直」、「轉左/轉右」、「過馬路」 (Asking Directions & Navigation Verbs))",
            "在前面的交通信號燈處往後退 (掌握粵語問路句式與核心步行導航動詞（行直、轉左、轉右、過馬路、過天橋、搭扶手電梯）。) (問路與導航核心動詞：「行直」、「轉左/轉右」、「過馬路」 (Asking Directions & Navigation Verbs))",
            "在前面的交通信號燈處停下不走 (掌握粵語問路句式與核心步行導航動詞（行直、轉左、轉右、過馬路、過天橋、搭扶手電梯）。) (問路與導航核心動詞：「行直」、「轉左/轉右」、「過馬路」 (Asking Directions & Navigation Verbs))"
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
            "行升降機上二樓 (掌握粵語問路句式與核心步行導航動詞（行直、轉左、轉右、過馬路、過天橋、搭扶手電梯）。) (問路與導航核心動詞：「行直」、「轉左/轉右」、「過馬路」 (Asking Directions & Navigation Verbs))",
            "坐斑馬線上二樓 (掌握粵語問路句式與核心步行導航動詞（行直、轉左、轉右、過馬路、過天橋、搭扶手電梯）。) (問路與導航核心動詞：「行直」、「轉左/轉右」、「過馬路」 (Asking Directions & Navigation Verbs))",
            "飛天橋上二樓 (掌握粵語問路句式與核心步行導航動詞（行直、轉左、轉右、過馬路、過天橋、搭扶手電梯）。) (問路與導航核心動詞：「行直」、「轉左/轉右」、「過馬路」 (Asking Directions & Navigation Verbs))"
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
            "請問去香港站幾多錢一個？ (掌握粵語問路句式與核心步行導航動詞（行直、轉左、轉右、過馬路、過天橋、搭扶手電梯）。) (問路與導航核心動詞：「行直」、「轉左/轉右」、「過馬路」 (Asking Directions & Navigation Verbs))",
            "請問去香港站食咗飯未？ (掌握粵語問路句式與核心步行導航動詞（行直、轉左、轉右、過馬路、過天橋、搭扶手電梯）。) (問路與導航核心動詞：「行直」、「轉左/轉右」、「過馬路」 (Asking Directions & Navigation Verbs))",
            "請問去香港站有冇得打包？ (掌握粵語問路句式與核心步行導航動詞（行直、轉左、轉右、過馬路、過天橋、搭扶手電梯）。) (問路與導航核心動詞：「行直」、「轉左/轉右」、「過馬路」 (Asking Directions & Navigation Verbs))"
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
      "explanation": "港鐵鐵路系統係香港市民出行不可或缺之地下動脈網絡，涵蓋一套嚴謹地道之專用搭乘與票務術語：\n\n一、港鐵站內行動專用術語全景剖析：\n１．「八達通」（baat3 daat6 tung1）：香港全覆蓋非接觸式智能收費卡。\n２．「拍卡」（paak3 kaat1）：將卡片貼近感應器刷卡；「入閘」（jap6 zaap6）：刷卡通過驗票閘機進站；「出閘」（ceot1 zaap6）：刷卡通過閘機出站。\n３．「月台」（jyut6 toi4）：列車停靠之候車站台（例如「前往柴灣方向之乘客請前往一號月台」）。\n４．「轉線 / 轉車」（zyun3 sin3 / zyun3 ce1）：在不同線路交匯之樞紐站換乘其他鐵路幹線（例如「喺金鐘站轉乘港島線」）。\n\n二、八達通儲值充值日常對話構式：\n在全港各大便利店或港鐵站內客務中心為八達通儲值時，唯一標準規範動詞為「增值」（zang1 zik6，充值）：\n１．「唔該幫我張八達通增值一百蚊現金。」（麻煩幫我的八達通充值一百元現金。）\n２．「請喺感應器上面拍卡啦，唔該晒！」（請在感應器上刷卡，非常感謝！）\n３．「張卡餘額負數出唔到閘，要去客務中心拍卡補票。」（卡內餘額為負無法出站，需要去服務台刷卡處理。） 乘搭港鐵時留意廣播提示「請勿靠近車門」，於客務中心或自助機為八達通增值，依隨指示牌尋找正確出口（如「A出口出閘」）。",
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
            "唔該八達通買單兩百蚊。 (掌握乘搭港鐵必備術語（入閘、出閘、轉線、月台）以及在便利店或客務中心為八達通「增值」之實用語句。) (港鐵搭乘指南：月台、轉線、出閘、拍卡與八達通增值 (MTR Navigation & Octopus Top-up))",
            "唔該八達通找錢兩百蚊。 (掌握乘搭港鐵必備術語（入閘、出閘、轉線、月台）以及在便利店或客務中心為八達通「增值」之實用語句。) (港鐵搭乘指南：月台、轉線、出閘、拍卡與八達通增值 (MTR Navigation & Octopus Top-up))",
            "唔該八達通平啲兩百蚊。 (掌握乘搭港鐵必備術語（入閘、出閘、轉線、月台）以及在便利店或客務中心為八達通「增值」之實用語句。) (港鐵搭乘指南：月台、轉線、出閘、拍卡與八達通增值 (MTR Navigation & Octopus Top-up))"
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
      "explanation": "香港公共小型巴士（俗稱「小巴」，分為綠色專線小巴與紅色非專線公共小巴）係香港極富本土特色但亦極考驗粵語聽說膽識之交通工具：\n\n一、小巴下車核心呼叫喊話句式全套解析（語音必須洪亮清晰、吐字果斷）：\n由於多數小巴不設逐站自動廣播報站系統，乘客到達目的地前必須提前一至兩個街口主動大聲向司機叫停下車：\n１．「有落！」（jau5 lok6！）：有人要下車！此乃最核心之全域下車指令。\n２．「前面有落，唔該！」（cin4 min6 jau5 lok6, m4 goi1！）：前方位置下車，勞駕司機！\n３．「燈位有落！」（dang1 wai2 jau5 lok6！）：在前方紅綠燈交通信號處靠邊停靠下車！\n４．「路口有落！」（lou6 hau2 jau5 lok6！）：在前方十字路口或街巷交匯處下車！\n５．「過咗天橋有落！」（gwo3 zo2 tin1 kiu4 jau5 lok6！）：穿過人行天橋之後立即靠邊下車！\n６．「轉彎有落！」（zyun3 waan1 jau5 lok6！）：拐過街角彎道後靠邊下車！\n\n二、司機車廂互動反饋與默契：\n司機聽聞呼喊後通常會舉手示意、按下車頂「客落」指示燈或簡潔回應「收到 / 知道」（sau1 dou3 / zi1 dou3）。若遇噪音或司機未有反應，乘客宜再度清晰大聲呼喊「司機，前面有落呀！」。 乘搭紅色或綠色專線小巴，臨近下車點須大聲向司機叫喚「前面街口有落，唔該！」或「燈位有落！」，司機舉手示意即可安心準備下車。",
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
            "司機，我想埋單！) (Context: 香港小巴搭乘神技：「有落」、「前面路口落」 (Minibus Shou)",
            "司機，唔該增值一百蚊！) (Context: 香港小巴搭乘神技：「有落」、「前面路口落」 (Minibus Shou)",
            "司機，我想食雲吞麵！) (Context: 香港小巴搭乘神技：「有落」、「前面路口落」 (Minibus Shou)"
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
            "在天橋正上方停車跳下去) (Context: 香港小巴搭乘神技：「有落」、「前面路口落」 (Minibus Shou)",
            "司機開車撞到了天橋) (Context: 香港小巴搭乘神技：「有落」、「前面路口落」 (Minibus Shou)",
            "天橋上面有人跌落下來) (Context: 香港小巴搭乘神技：「有落」、「前面路口落」 (Minibus Shou)"
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
            "在座位上默默等待司機主動問每個人) (Context: 香港小巴搭乘神技：「有落」、「前面路口落」 (Minibus Shou)",
            "直接站起來走到司機身旁拍司機肩膀) (Context: 香港小巴搭乘神技：「有落」、「前面路口落」 (Minibus Shou)",
            "用手機向運輸署發送下車短信) (Context: 香港小巴搭乘神技：「有落」、「前面路口落」 (Minibus Shou)"
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
      "explanation": "在香港乘搭的士（即計程車、出租車）出行時，與司機之言語溝通講求精煉準確與迅速果斷：\n\n一、告知目的地與過海隧道選擇路徑：\n１．「司機，去……唔該。」（司機，去某某地方，謝謝。）例如「司機，唔該去中環置地廣場。」\n２．跨越維多利亞港之「過海」隧道三大選擇方案：\n   - 「紅隧」（hung4 seoi6）：紅磡海底隧道，收費最低但交通最為繁忙容易塞車。\n   - 「東隧」（dung1 seoi6）：東區海底隧道，前往港島東區北角、鰂魚涌之首選捷徑。\n   - 「西隧」（sai1 seoi6）：西區海底隧道，通道寬暢速度最快，直通中環上環西九龍。\n\n二、車費結算、小費找零與索取乘車收據：\n１．「唔使找喇」（m4 sai2 zaau2 laa3）：不用找零錢了，剩餘零錢作為感謝司機之小費。\n２．「唔該印張收據 / 唔該印張飛」（m4 goi1 jan3 zoeng1 sau1 geoi3 / jan3 zoeng1 fei1）：請打印一張正式乘車發票收據以便報銷。 上車告知司機目的地「唔該去中環天星碼頭」，過海時司機會詢問「行紅隧、東隧定西隧呀？」，根據即時路況選擇隧道可避開塞車。",
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
            "一定要找錢畀我！ (掌握乘坐香港的士之目的地告知句式、過海隧道選擇（紅隧、東隧、西隧）及找零索取發票禮儀。) (搭的士與司機溝通：「去……唔該」、「行紅隧定東隧」 (Taking a Taxi & Route Choice))",
            "唔該印張車飛！ (掌握乘坐香港的士之目的地告知句式、過海隧道選擇（紅隧、東隧、西隧）及找零索取發票禮儀。) (搭的士與司機溝通：「去……唔該」、「行紅隧定東隧」 (Taking a Taxi & Route Choice))",
            "我想轉線去柴灣！ (掌握乘坐香港的士之目的地告知句式、過海隧道選擇（紅隧、東隧、西隧）及找零索取發票禮儀。) (搭的士與司機溝通：「去……唔該」、「行紅隧定東隧」 (Taking a Taxi & Route Choice))"
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
            "香港大橋隧道 (掌握乘坐香港的士之目的地告知句式、過海隧道選擇（紅隧、東隧、西隧）及找零索取發票禮儀。) (搭的士與司機溝通：「去……唔該」、「行紅隧定東隧」 (Taking a Taxi & Route Choice))",
            "獅子山隧道 (掌握乘坐香港的士之目的地告知句式、過海隧道選擇（紅隧、東隧、西隧）及找零索取發票禮儀。) (搭的士與司機溝通：「去……唔該」、「行紅隧定東隧」 (Taking a Taxi & Route Choice))",
            "將軍澳隧道 (掌握乘坐香港的士之目的地告知句式、過海隧道選擇（紅隧、東隧、西隧）及找零索取發票禮儀。) (搭的士與司機溝通：「去……唔該」、「行紅隧定東隧」 (Taking a Taxi & Route Choice))"
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
            "司機，唔該埋單加單。 (掌握乘坐香港的士之目的地告知句式、過海隧道選擇（紅隧、東隧、西隧）及找零索取發票禮儀。) (搭的士與司機溝通：「去……唔該」、「行紅隧定東隧」 (Taking a Taxi & Route Choice))",
            "司機，唔該走青少甜。 (掌握乘坐香港的士之目的地告知句式、過海隧道選擇（紅隧、東隧、西隧）及找零索取發票禮儀。) (搭的士與司機溝通：「去……唔該」、「行紅隧定東隧」 (Taking a Taxi & Route Choice))",
            "司機，唔該行直轉左。 (掌握乘坐香港的士之目的地告知句式、過海隧道選擇（紅隧、東隧、西隧）及找零索取發票禮儀。) (搭的士與司機溝通：「去……唔該」、「行紅隧定東隧」 (Taking a Taxi & Route Choice))"
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
      "explanation": "香港地理劃分為三大主要板塊區域，每個區域皆擁有鮮明之歷史文化底蘊與商業生活地標：\n\n一、香港三大地理板塊與核心街區地標全景分佈：\n１．香港島（俗稱「港島」 gong2 dou2）：\n   - 「中環」（zung1 waan4）：全港金融中樞神經、摩天大廈群、半山扶手電梯系統、蘭桂坊。\n   - 「銅鑼灣」（tung4 lo4 waan4）：繁華購物零售天堂、時代廣場、希慎廣場、崇光百貨。\n   - 「金鐘」（gam1 zung1）：特區政府總部、高等法院、太古廣場樞紐。\n   - 「灣仔」（waan1 zai2）：香港會議展覽中心、金紫荊廣場、老街修頓球場。\n２．九龍半島（俗稱「九龍」 gau2 lung4）：\n   - 「尖沙咀」（zim1 saa1 zeoi2）：星光大道、維多利亞港天際線、海港城、文化中心。\n   - 「旺角」（wong6 gok3）：潮流集市、女人街、西洋菜南街、波鞋街。\n   - 「深水埗」（sam1 seoi2 bou2）：鴨寮街數碼電子跳蚤市場、平民道地美食天國。\n３．新界地區（俗稱「新界」 san1 gaai3）：\n   - 「沙田」（saa1 tin4）、「荃灣」（cyun4 waan1）、「屯門」（tyun4 mun4）、「元朗」（jyun4 long5）。\n\n二、地道空間心理方位語彙：\n香港市民習慣將跨越維多利亞港統稱為「過海」（gwo3 hoi2），跨海公車被稱為「過海巴士」。 熟悉香港核心地標地名：港島之中環金融街、銅鑼灣購物區，九龍之尖沙咀海旁維港景色與旺角熱鬧市集，皆為實地導航必備常識。",
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
            "橫渡或穿過維多利亞港（往返港島與九龍） (「過海」專指跨越維多利亞港往返港島與九龍。) (城市地標與繁華街區指引：中環、尖沙咀、旺角、銅鑼灣 (City Landmarks & Districts))",
            "出國去外國旅遊 (掌握香港三大地理板塊（港島、九龍、新界）及核心著名街區地標之粵語地道發音與文化認知。) (城市地標與繁華街區指引：中環、尖沙咀、旺角、銅鑼灣 (City Landmarks & Districts))",
            "游泳去大嶼山 (掌握香港三大地理板塊（港島、九龍、新界）及核心著名街區地標之粵語地道發音與文化認知。) (城市地標與繁華街區指引：中環、尖沙咀、旺角、銅鑼灣 (City Landmarks & Districts))",
            "坐輪船去澳門 (掌握香港三大地理板塊（港島、九龍、新界）及核心著名街區地標之粵語地道發音與文化認知。) (城市地標與繁華街區指引：中環、尖沙咀、旺角、銅鑼灣 (City Landmarks & Districts))"
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
    "title": "購物詢價與度量衡：「幾多錢話？」、「秤兩斤」 (Inquiring Prices & Cantonese Weights and Measures)",
    "level": "A2",
    "objective": "掌握粵語市集詢價核心句式、傳統嶺南度量衡單位（斤、兩、磅、打）及街市買餸實用語彙。",
    "presentation": {
      "explanation": "在香港傳統街市、果欄、海鮮檔或各類雜貨商舖選購物品時，詢問價格與衡量貨物擁有一套極富嶺南文化底蘊之傳統度量衡語言體系與日常商貿交流習慣：\n\n一、道地詢價核心句式結構全景深度剖析：\n１．「呢個幾多錢話？」（nei1 go3 gei2 do1 cin2 waa2？）：這個多少錢來著？句尾語氣助詞「話」帶有再次確認、提示檔主或親切探詢之語氣，乃港澳街市最自然地道之詢價句式。\n２．「啲菜點樣賣呀？」（di1 coi3 dim2 joeng2 maai6 aa3？）：這些青菜怎麼賣呀？用於向攤檔老闆詢問計價方式與售價標準。\n３．「幾多錢一斤 / 幾多錢一磅？」（gei2 do1 cin2 jat1 gan1 / jat1 bong6？）：每斤或每磅的具體單價是多少？\n\n二、傳統與現代度量衡計量單位深度解析：\n１．「斤」（gan1）：嶺南傳統司馬斤，一斤嚴格等於十六兩，約等於六百零四點八克（重量明顯高於內地通行之五百克市斤標準）。成語「半斤八兩」正源於此嶺南十六兩制古法。\n２．「兩」（loeng2）：司馬兩，一斤之十六分之一，約等於三十七點八克。香港街市售賣海鮮魚蝦、名貴中藥材、金銀首飾及參茸燕窩時，普遍以「兩」為計價結算基準。\n３．「磅」（bong6）：英制重量單位磅，約等於四百五十三點六克。香港大型連鎖超級市場、進口優質水果攤檔及急凍肉類專門店常以「磅」作為標準標價計量單位。\n４．「打」（daa1）：量詞打，一打等於十二個單位。例如「一打雞蛋」（十二隻雞蛋）、「兩打熱蛋撻」（二十四隻蛋撻）。\n\n三、街市挑選選購動詞搭配：\n「秤兩斤菜心」（cing3 loeng5 gan1 coi3 sam1，稱兩斤菜心）；「執兩斤靚蘋果」（zap1 loeng5 gan1 leng3 ping4 gwo2，挑選兩斤優質蘋果）；「搭多兩棵蔥」（daap3 do1 loeng5 po1 cung1，買菜結帳時請攤主順手附贈幾根調味香蔥）。 香港傳統市場計重以十六両為一斤（約600克），買海鮮肉食時講「唔該幫我秤斤半」、「呢條魚幾多錢一斤話？」，計算法度分明。",
      "examples": [
        {
          "target": "老闆，呢啲新鮮海蝦幾多錢一斤話？唔該幫我秤斤半。",
          "reading": "lou5 baan2, ni1 di1 san1 sin1 hoi2 haa1 gei2 do1 cin2 jat1 gan1 waa2? m4 goi1 bong1 ngo5 cing3 gan1 bun3. [lou˧˥ paːn˧˥, niː˥ tiː˥ sɐn˥ siːn˥ hɔːi˧˥ haː˥ kei˧˥ tɔː˥ tsʰiːn˧˥ jɐt̚˥ kɐn˥ waː˧˥? m̩˨˩ kɔːi˥ pɔːŋ˥ ŋɔː˩˧ tsʰɪŋ˧ kɐn˥ puːn˧] (LOH-BAHN, NEE-DEE SUN-SEEN HOY-HAH GAY-DOH-CHEEN YUT-GUN WAH? M-GOY BONG NGOH CHING GUN-BOON)",
          "translation": "Boss, how much is a catty of these fresh sea prawns again? Please weigh a catty and a half for me."
        },
        {
          "target": "今日啲澳洲甜橙好靚，三十蚊一打，買兩打仲送多兩個。",
          "reading": "gam1 jat6 di1 ou3 zau1 tim4 caang2 hou2 leng3, saam1 sap6 man1 jat1 daa1, maai5 loeng5 daa1 zung6 sung3 do1 loeng5 go3. [kɐm˥ jɐt˨ tiː˥ ou˧ tsɐu˥ tʰiːm˨˩ tsʰaːŋ˧˥ hou˧˥ lɛːŋ˧, saːm˥ sɐp̚˨ mɐn˥ jɐt̚˥ taː˥, maːi˩˧ lœːŋ˩˧ taː˥ tsʊŋ˨ sʊŋ˧ tɔː˥ lœːŋ˩˧ kɔː˧] (GUM-YUT DEE OH-JAU TEEM-CHAHNG HOH-LENG, SAHM-SUP-MUN YUT-DAH, MY LEUNG-DAH JOONG SOONG DOH LEUNG-GOH)",
          "translation": "Today's Australian sweet oranges are very nice, thirty dollars a dozen; buy two dozen and get two extra free."
        },
        {
          "target": "買半斤菜心同埋一條鯇魚，夾埋一共八十五蚊。",
          "reading": "maai5 bun3 gan1 coi3 sam1 tung4 maai4 jat1 tiu4 waan5 jyu2, gaap3 maai4 jat1 gung6 baat3 sap6 ng5 man1. [maːi˩˧ puːn˧ kɐn˥ tsʰɔːi˧ sɐm˥ tʰʊŋ˨˩ maːi˨˩ jɐt̚˥ tʰiːu˨˩ waːn˩˧ jyː˧˥, kaːp̚˧ maːi˨˩ jɐt̚˥ kʊŋ˨ paːt̚˧ sɐp̚˨ ŋ̍˩˧ mɐn˥] (MY BOON-GUN CHOY-SUM TOONG-MY YUT-TEW WAHN-YOO, GAHP-MY YUT-GOONG BAHT-SUP-NG-MUN)",
          "translation": "Buying half a catty of choy sum and a grass carp, totaling eighty-five dollars altogether."
        }
      ],
      "mnemonics": [
        "【街市買餸訣】司馬一斤十六兩，買蝦買菜秤分明；問價多添「幾多話」，夾埋計數最精明！"
      ],
      "culturalNotes": [
        "香港傳統街市（如中環街市、灣仔街市、油麻地街市）至今仍廣泛沿用「司馬斤兩制」及傳統桿秤。到街市買菜時，檔主習慣順手搭送一小把蔥或芫荽，稱為「送棵蔥 / 搭棵蔥」，展現濃郁街坊人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【度量衡計量】在香港海鮮檔買蝦，檔主問「要幾多？」，你欲購買半斤，應講：",
          "options": [
            "唔該要半斤 (m4 goi1 jiu3 bun3 gan1)",
            "唔該要半打 (掌握粵語市集詢價核心句式、傳統嶺南度量衡單位（斤、兩、磅、打）及街市買餸實用語彙。) (購物詢價與度量衡：「幾多錢話？」、「秤兩斤」 (Inquiring Prices & Cantonese Weights and Measures))",
            "唔該要半條 (掌握粵語市集詢價核心句式、傳統嶺南度量衡單位（斤、兩、磅、打）及街市買餸實用語彙。) (購物詢價與度量衡：「幾多錢話？」、「秤兩斤」 (Inquiring Prices & Cantonese Weights and Measures))",
            "唔該要半間 (掌握粵語市集詢價核心句式、傳統嶺南度量衡單位（斤、兩、磅、打）及街市買餸實用語彙。) (購物詢價與度量衡：「幾多錢話？」、「秤兩斤」 (Inquiring Prices & Cantonese Weights and Measures))"
          ],
          "answerIndex": 0,
          "explanation": "「半斤」（bun3 gan1）指半司馬斤（八兩）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語句探詢】向水果檔店主詢問富士蘋果價格，最地道之問法係：",
          "options": [
            "呢啲富士蘋果幾多錢一磅話？ (ni1 di1 fu3 si6 ping4 gwo2 gei2 do1 cin2 jat1 bong6 waa2?)",
            "呢啲富士蘋果有冇得搭枱？ (掌握粵語市集詢價核心句式、傳統嶺南度量衡單位（斤、兩、磅、打）及街市買餸實用語彙。) (購物詢價與度量衡：「幾多錢話？」、「秤兩斤」 (Inquiring Prices & Cantonese Weights and Measures))",
            "呢啲富士蘋果印張收據未？ (掌握粵語市集詢價核心句式、傳統嶺南度量衡單位（斤、兩、磅、打）及街市買餸實用語彙。) (購物詢價與度量衡：「幾多錢話？」、「秤兩斤」 (Inquiring Prices & Cantonese Weights and Measures))",
            "呢啲富士蘋果轉線出閘未？ (掌握粵語市集詢價核心句式、傳統嶺南度量衡單位（斤、兩、磅、打）及街市買餸實用語彙。) (購物詢價與度量衡：「幾多錢話？」、「秤兩斤」 (Inquiring Prices & Cantonese Weights and Measures))"
          ],
          "answerIndex": 0,
          "explanation": "「幾多錢一磅話？」（gei2 do1 cin2 jat1 bong6 waa2）係詢價最地道自然之口語表達。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【度量衡換算】在香港傳統街市中，一「司馬斤」等於幾多「兩」？",
          "options": [
            "十六兩 (sap6 luk6 loeng2)",
            "十兩 (掌握粵語市集詢價核心句式、傳統嶺南度量衡單位（斤、兩、磅、打）及街市買餸實用語彙。) (購物詢價與度量衡：「幾多錢話？」、「秤兩斤」 (Inquiring Prices & Cantonese Weights and Measures))",
            "十二兩 (掌握粵語市集詢價核心句式、傳統嶺南度量衡單位（斤、兩、磅、打）及街市買餸實用語彙。) (購物詢價與度量衡：「幾多錢話？」、「秤兩斤」 (Inquiring Prices & Cantonese Weights and Measures))",
            "二十兩 (掌握粵語市集詢價核心句式、傳統嶺南度量衡單位（斤、兩、磅、打）及街市買餸實用語彙。) (購物詢價與度量衡：「幾多錢話？」、「秤兩斤」 (Inquiring Prices & Cantonese Weights and Measures))"
          ],
          "answerIndex": 0,
          "explanation": "香港傳統司馬斤為十六兩制（半斤八兩）。"
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
    "title": "找續與零錢運算：「找錢」、「散銀」、「毫子」 (Giving Change & Coins)",
    "level": "A2",
    "objective": "掌握粵語貨幣單位（蚊、毫子、仙）、找續算術表達（找返、唱錢）及零錢日常用語（散銀、散紙）。",
    "presentation": {
      "explanation": "粵語中之貨幣計量與找續算術擁有獨特而嚴謹之專用詞彙與語法搭配體系，精確反映嶺南商業社會之交易精細度：\n\n一、貨幣計量單位名稱詳細剖析：\n１．「蚊 / 蚊銀」（man1）：港幣元整數單位（例如「十蚊」代表十港元、「一百蚊」代表一百港元、「一千蚊」代表一千港元整）。\n２．「毫子 / 毫」（hou4 zi2 / hou4）：一角或十分之一港元（例如「一毫」代表一角硬幣、「兩毫」代表兩角硬幣、「五毫」代表五角硬幣）。\n３．「個半」（go3 bun3）：一元五角（即一塊半港幣）；「五個二」（ng5 go3 ji6）：五元兩角；「八個八」（baat3 go3 baat3）：八元八角。\n\n二、零錢找續與貨幣兌換專用動詞深度掌握：\n１．「散銀 / 散紙」（saan2 ngan2 / saan2 zi2）：金屬硬幣碎銀或小面額流通紙幣。\n２．「找錢 / 找續」（zaau2 cin2 / zaau2 zuk6）：找回多餘零錢；「找返」（zaau2 faan1）：將剩餘零錢找回給買家（例如「找返二十蚊畀你」）。\n３．「唱錢」（coeng3 cin2）：破開大額面值鈔票換取零散小錢或兌換外幣（例如「唔該幫我唱散張五百蚊紙做五張一百蚊」）。\n\n三、找續對話運算實例剖析：\n- 「收你五百蚊大牛一張，買嘢用咗一百二十蚊，找返三百八十蚊畀你，請數清楚點收妥當！」 現金找零口語稱「找錢」，硬幣稱「散銀」或「銀仙」，一角/兩角/五角稱「毫子」（如「兩毫、五毫」），結帳找回零錢清爽明瞭。",
      "examples": [
        {
          "target": "收你一張五百蚊紙，買嘢用咗六十七個半，找返四百三十二個半畀你。",
          "reading": "sau1 nei5 jat1 zoeng1 ng5 baak3 man1 zi2, maai5 je5 jung6 zo2 luk6 sap6 cat1 go3 bun3, zaau2 faan1 sei3 baak3 saam1 sap6 ji6 go3 bun3 bei2 nei5. [sɐu˥ nei˩˧ jɐt̚˥ tsœːŋ˥ ŋ̍˩˧ paːk̚˧ mɐn˥ tsiː˧˥, maːi˩˧ jɛː˩˧ jʊŋ˨ tsɔː˧˥ lʊk˨ sɐp̚˨ tsʰɐt̚˥ kɔː˧ puːn˧, tsaːu˧˥ faːn˥ sei˧ paːk̚˧ saːm˥ sɐp̚˨ jiː˨ kɔː˧ puːn˧ pei˧˥ nei˩˧] (SAU NEI YUT-JEUNG NG-BAHK-MUN JEE, MY-YEH YOONG-JOR LUK-SUP-CHUT-GOH-BOON, JAU-FAHN SAY-BAHK-SAHM-SUP-YEE-GOH-BOON BAY NEI)",
          "translation": "Received a five-hundred-dollar note from you; purchases cost sixty-seven fifty, returning four hundred thirty-two fifty in change to you."
        },
        {
          "target": "唔好意思，我手頭上冇散紙，可唔可以幫我唱散張一千蚊大牛呀？",
          "reading": "m4 hou2 ji3 si3, ngo5 sau2 tau4 soeng6 mou5 saan2 zi2, ho2 m4 ho2 ji5 bong1 ngo5 coeng3 saan2 zoeng1 jat1 cin1 man1 daai6 ngau4 aa3? [m̩˨˩ hou˧˥ jiː˧ siː˧, ŋɔː˩˧ sɐu˧˥ tʰɐu˨˩ sœːŋ˨ mou˩˧ saːn˧˥ tsiː˧˥, hɔː˧˥ m̩˨˩ hɔː˧˥ jiː˩˧ pɔːŋ˥ ŋɔː˩˧ tsʰœːŋ˧ saːn˧˥ tsœːŋ˥ jɐt̚˥ tsʰiːn˥ mɐn˥ taːi˨ ŋɐu˨˩ aː˧?] (M-HOH-YEE-SEE, NGOH SAU-TAU-SEUNG MOU SAHN-JEE, HOH-M-HOH-YEE BONG NGOH CHEUNG-SAHN JEUNG YUT-CHEEN-MUN DY-NGAU AH?)",
          "translation": "Excuse me, I have no small change on hand; could you help me break this one-thousand-dollar note into smaller bills?"
        },
        {
          "target": "個銀包塞滿晒一毫、兩毫同五毫子嘅散銀，好沉重呀。",
          "reading": "go3 ngan4 baau1 sak1 mun2 saai3 jat1 hou4, loeng5 hou4 tung4 ng5 hou4 zi2 ge3 saan2 ngan2, hou2 cam4 zung6 aa3. [kɔː˧ ŋɐn˨˩ paːu˥ sɐk̚˥ muːn˧˥ saːi˧ jɐt̚˥ hou˨˩, lœːŋ˩˧ hou˨˩ tʰʊŋ˨˩ ŋ̍˩˧ hou˨˩ tsiː˧˥ kɛː˧ saːn˧˥ ŋɐn˨˩, hou˧˥ tsʰɐm˨˩ tsʊŋ˨ aː˧] (GOH NGUN-BAU SUK-MOON-SY YUT-HOU, LEUNG-HOU TOONG NG-HOU-JEE GEH SAHN-NGUN, HOH CHUM-JOONG AH)",
          "translation": "The wallet is completely stuffed with 10-cent, 20-cent, and 50-cent coins, which is very heavy."
        }
      ],
      "mnemonics": [
        "【找錢算術訣】買嘢畀錢講「蚊銀」，一角二角叫「毫子」；找零退回用「找返」，大鈔唱散換「散紙」！"
      ],
      "culturalNotes": [
        "香港俗語對大面額紙幣有專屬外號：一千元紙幣俗稱「金牛 / 大牛」（因早期匯豐千元鈔票呈金黃色），五百元紙幣俗稱「大牛 / 大棉胎 / 啡牛」，一百元俗稱「紅衫仔」，五十元俗稱「藍精靈」，二十元俗稱「花蟹 / 藍蟹 / 綠蟹」。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【零錢兌換】欲請店員將一張 500 元大鈔破開換成零錢，最地道之粵語說法係：",
          "options": [
            "唔該幫我唱散張五百蚊紙。 (m4 goi1 bong1 ngo5 coeng3 saan2 zoeng1 ng5 baak3 man1 zi2.)",
            "唔該幫我埋單張五百蚊紙。 (掌握粵語貨幣單位（蚊、毫子、仙）、找續算術表達（找返、唱錢）及零錢日常用語（散銀、散紙）。) (找續與零錢運算：「找錢」、「散銀」、「毫子」 (Giving Change & Coins))",
            "唔該幫我增值張五百蚊紙。 (掌握粵語貨幣單位（蚊、毫子、仙）、找續算術表達（找返、唱錢）及零錢日常用語（散銀、散紙）。) (找續與零錢運算：「找錢」、「散銀」、「毫子」 (Giving Change & Coins))",
            "唔該幫我打包張五百蚊紙。 (掌握粵語貨幣單位（蚊、毫子、仙）、找續算術表達（找返、唱錢）及零錢日常用語（散銀、散紙）。) (找續與零錢運算：「找錢」、「散銀」、「毫子」 (Giving Change & Coins))"
          ],
          "answerIndex": 0,
          "explanation": "「唱散」（coeng3 saan2）意為把大額紙幣兌換為零錢。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【找零計算】購物花費 35 元，顧客付 50 元，店員找回 15 元零錢時應講：",
          "options": [
            "找返十五蚊畀你，唔該晒！ (zaau2 faan1 sap6 ng5 man1 bei2 nei5, m4 goi1 saai3!)",
            "增值十五蚊畀你！ (掌握粵語貨幣單位（蚊、毫子、仙）、找續算術表達（找返、唱錢）及零錢日常用語（散銀、散紙）。) (找續與零錢運算：「找錢」、「散銀」、「毫子」 (Giving Change & Coins))",
            "買單十五蚊畀你！ (掌握粵語貨幣單位（蚊、毫子、仙）、找續算術表達（找返、唱錢）及零錢日常用語（散銀、散紙）。) (找續與零錢運算：「找錢」、「散銀」、「毫子」 (Giving Change & Coins))",
            "行街十五蚊畀你！ (掌握粵語貨幣單位（蚊、毫子、仙）、找續算術表達（找返、唱錢）及零錢日常用語（散銀、散紙）。) (找續與零錢運算：「找錢」、「散銀」、「毫子」 (Giving Change & Coins))"
          ],
          "answerIndex": 0,
          "explanation": "「找返……畀你」（zaau2 faan1...bei2 nei5）係找回零錢之標準用語。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【俚語識別】在香港俗語中，「金牛 / 大牛」通常指代面額幾多之紙幣？",
          "options": [
            "一千蚊紙 (jat1 cin1 man1 zi2 / $1000 note)",
            "五百蚊紙 ($500 note)",
            "一百蚊紙 ($100 note)",
            "五十蚊紙 ($50 note)"
          ],
          "answerIndex": 0,
          "explanation": "香港俗稱一千元港幣紙幣為「金牛 / 大牛」。"
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
    "title": "討價還價與促銷術語：「平啲啦」、「買一送一」、「減價」 (Bargaining & Promotions)",
    "level": "A2",
    "objective": "掌握排檔買賣講價常用對話（平啲啦、計平少少）及商家促銷術語（減價、特價、折、買一送一）。",
    "presentation": {
      "explanation": "在香港女人街、鴨寮街排檔、海味乾貨店或一般零售商舖購物時，靈活運用討價還價與折扣促銷詞彙能達到良好之地道商貿交流效果：\n\n一、討價還價實用句式矩陣深度解析：\n１．「老闆，平啲啦！」（lou5 baan2, peng4 di1 laa1！）：老闆，便宜一點吧！此乃全港最通用流行之講價日常口語。\n２．「計平少少得唔得呀？」（gai3 peng4 siu2 siu2 dak1 m4 dak1 aa3？）：算便宜一點點行不行呀？態度客氣懇切，易獲折扣。\n３．「我買多幾件，畀個批發折頭啦。」（ngo5 maai5 do1 gei2 gin6, bei2 go3 pai1 faat3 zit3 tau4 laa1.）：我多買幾件商品，請給予適度之批發折扣優惠吧。\n\n二、商家促銷活動與折扣術語解析：\n１．「大減價 / 減價」（daai6 gaam2 gaa3 / gaam2 gaa3）：降價促銷特賣活動或季末大清貨。\n２．「特價 / 特價品」（dak6 gaa3 / dak6 gaa3 ban2）：特價優惠推廣商品。\n３．「折」（zit3）：粵語折扣計算以折減成數為基準（例如「八折」baat3 zit3 即按原價百分之八十出售、減價兩成；「七折」即減價三成；「半價」bun3 gaa3 即五折半價優惠）。\n４．「買一送一」（maai5 jat1 sung3 jat1）：購買一件正價商品即可免費獲贈一件同類商品。\n５．「買滿二百減五十」（maai5 mun5 loeng5 baak3 gaam2 ng5 sap6）：消費滿額立減促銷推廣模式。 商場熱賣常掛「大減價」、「買一送一」、「清貨特價」標語；詢問優惠講「買得多有冇平呀？」，靈活掌握促銷術語精明消費。",
      "examples": [
        {
          "target": "老闆，呢件外套標價三百八，平啲賣三百蚊得唔得呀？",
          "reading": "lou5 baan2, ni1 gin6 ngoi6 tou3 biu1 gaa3 saam1 baak3 baat3, peng4 di1 maai6 saam1 baak3 man1 dak1 m4 dak1 aa3? [lou˧˥ paːn˧˥, niː˥ kiːn˨ ŋɔːi˨ tʰou˧ piːu˥ kaː˧ saːm˥ paːk̚˧ paːt̚˧, pʰɛːŋ˨˩ tiː˥ maːi˨ saːm˥ paːk̚˧ mɐn˥ tɐk̚˥ m̩˨˩ tɐk̚˥ aː˧?] (LOH-BAHN, NEE-GEEN NGOY-TOU BEW-GAH SAHM-BAHK-BAHT, PENG-DEE MY SAHM-BAHK-MUN DUK-M-DUK AH?)",
          "translation": "Boss, this jacket is marked at three hundred eighty; can you make it cheaper and sell it for three hundred?"
        },
        {
          "target": "全場夏季新裝一律七折，買滿五百蚊仲可以免費送貨。",
          "reading": "cyun4 coeng4 haa6 gwai3 san1 zong1 jat1 leot6 cat1 zit3, maai5 mun5 ng5 baak3 man1 zung6 ho2 ji5 min5 fai3 sung3 fo3. [tsʰyːn˨˩ tsʰœːŋ˨˩ haː˨ kʷɐi˧ sɐn˥ tsɔːŋ˥ jɐt̚˥ lɵt˨ tsʰɐt̚˥ tsɪt̚˧, maːi˩˧ muːn˧˥ ŋ̍˩˧ paːk̚˧ mɐn˥ tsʊŋ˨ hɔː˧˥ jiː˩˧ miːn˩˧ fɐi˧ sʊŋ˧ fɔː˧] (TSUEN-CHEUNG HAH-GWY SUN-JONG YUT-LUT CHUT-JIK, MY-MOON NG-BAHK-MUN JOONG HOH-YEE MEEN-FY SOONG-FOH)",
          "translation": "All summer new arrivals throughout the store are thirty percent off; purchases over five hundred dollars also qualify for free delivery."
        },
        {
          "target": "本店小本經營利潤微薄，呢個已經係最低批發價，冇得再平㗎喇。",
          "reading": "bun2 dim3 siu2 bun2 ging1 jing4 lei6 reon6 mei4 bok6, ni1 go3 ji5 ging1 hai6 zeoi3 dai1 pai1 faat3 gaa3, mou5 dak1 zoi3 peng4 gaa3 laa3. [puːn˧˥ tiːm˧ siːu˧˥ puːn˧˥ kɪŋ˥ jɪŋ˨˩ lei˨ jɵn˨ mei˨˩ pɔːk̚˨, niː˥ kɔː˧ jiː˩˧ kɪŋ˥ hɐi˨ tsɵy˧ tɐi˥ pʰaːi˥ faːt̚˧ kaː˧, mou˩˧ tɐk̚˥ tsɔːi˧ pʰɛːŋ˨˩ kaː˧ laː˧] (BOON-DEEM SEW-BOON GING-YING LAY-YUN MAY-BOK, NEE-GOH YEE-GING HY JOY-DY PY-FAHT-GAH, MOU-DUK JOY PENG GAH LAH)",
          "translation": "Our shop operates on small capital and slim profits; this is already the lowest wholesale price and cannot be discounted further."
        }
      ],
      "mnemonics": [
        "【講價促銷歌】「平啲啦」字常掛口，女人街裏逛排檔；「大減價」逢「買一送」，「八折」「半價」心花放！"
      ],
      "culturalNotes": [
        "在香港大型連鎖百貨公司（如崇光百貨、連卡佛）或明碼標價之超級市場一般不允許討價還價；但在露天排檔（如旺角女人街、深水埗鴨寮街、赤柱市集）或海味乾貨街，適度客氣地講價（「平少少啦老闆」）係普遍接受之市井文化。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【折扣計算】在香港服裝店看到櫥窗貼著「全場八折」，其含義為：",
          "options": [
            "所有商品按原價百分之八十出售（享受 20% 折扣） (「八折」（baat3 zit3）即原價之 80%（20% off）。)",
            "所有商品只需八塊錢 (掌握排檔買賣講價常用對話（平啲啦、計平少少）及商家促銷術語（減價、特價、折、買一送一）。) (討價還價與促銷術語：「平啲啦」、「買一送一」、「減價」 (Bargaining & Promotions))",
            "買八件衣服打折 (掌握排檔買賣講價常用對話（平啲啦、計平少少）及商家促銷術語（減價、特價、折、買一送一）。) (討價還價與促銷術語：「平啲啦」、「買一送一」、「減價」 (Bargaining & Promotions))",
            "每件衣服降價八塊錢 (掌握排檔買賣講價常用對話（平啲啦、計平少少）及商家促銷術語（減價、特價、折、買一送一）。) (討價還價與促銷術語：「平啲啦」、「買一送一」、「減價」 (Bargaining & Promotions))"
          ],
          "answerIndex": 0,
          "explanation": "「八折」（baat3 zit3）即原價之 80%（20% off）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【排檔講價】在旺角排檔購物，欲請店主算便宜一點點，最地道得體之句式係：",
          "options": [
            "老闆，計平少少得唔得呀？ (lou5 baan2, gai3 peng4 siu2 siu2 dak1 m4 dak1 aa3?)",
            "老闆，唔該幫我搭枱！ (掌握排檔買賣講價常用對話（平啲啦、計平少少）及商家促銷術語（減價、特價、折、買一送一）。) (討價還價與促銷術語：「平啲啦」、「買一送一」、「減價」 (Bargaining & Promotions))",
            "老闆，唔該印張車飛！ (掌握排檔買賣講價常用對話（平啲啦、計平少少）及商家促銷術語（減價、特價、折、買一送一）。) (討價還價與促銷術語：「平啲啦」、「買一送一」、「減價」 (Bargaining & Promotions))",
            "老闆，落緊大雨未？ (掌握排檔買賣講價常用對話（平啲啦、計平少少）及商家促銷術語（減價、特價、折、買一送一）。) (討價還價與促銷術語：「平啲啦」、「買一送一」、「減價」 (Bargaining & Promotions))"
          ],
          "answerIndex": 0,
          "explanation": "「計平少少得唔得呀？」（算便宜一點好不好）係地道講價句式。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【促銷用語】商場門口掛出「買一送一」橫幅，其精確商業含義係：",
          "options": [
            "購買一件正價商品即可獲贈另一件相同商品 (Buy one get one free)",
            "買一件商品需要送貨一次 (掌握排檔買賣講價常用對話（平啲啦、計平少少）及商家促銷術語（減價、特價、折、買一送一）。) (討價還價與促銷術語：「平啲啦」、「買一送一」、「減價」 (Bargaining & Promotions))",
            "買了一件商品必須送給別人 (掌握排檔買賣講價常用對話（平啲啦、計平少少）及商家促銷術語（減價、特價、折、買一送一）。) (討價還價與促銷術語：「平啲啦」、「買一送一」、「減價」 (Bargaining & Promotions))",
            "一次只能購買一件商品 (掌握排檔買賣講價常用對話（平啲啦、計平少少）及商家促銷術語（減價、特價、折、買一送一）。) (討價還價與促銷術語：「平啲啦」、「買一送一」、「減價」 (Bargaining & Promotions))"
          ],
          "answerIndex": 0,
          "explanation": "「買一送一」（maai5 jat1 sung3 jat1）即買一贈一。"
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
    "title": "支付方式多樣性：「畀現金」、「拍八達通」、「嘟卡」、「碌卡」 (Payment Methods)",
    "level": "A2",
    "objective": "掌握香港多元支付手段用語（畀現金、拍/嘟八達通、碌信用卡、轉數快FPS、掃碼支付）。",
    "presentation": {
      "explanation": "香港作為國際金融與智慧消費之都，日常結帳付款方式多樣且擁有豐富之道地口語動詞搭配體系：\n\n一、多元付款動詞短語深度解析：\n１．「畀現金」（bei2 jin6 gam1）：使用實體紙幣及金屬硬幣結算支付貨款。\n２．「拍八達通 / 嘟八達通」（paak3 / dyut1 baat3 daat6 tung1）：將八達通智慧卡貼近讀卡機感應付款。「嘟」（dyut1）為擬聲詞，源自讀卡器感應成功時發出之「嘟」聲提示音。\n３．「碌卡 / 簽卡」（luk1 kaat1 / cim1 kaat1）：使用信用卡或扣帳卡刷卡付款。「碌」（luk1）原指早年機械刷卡機將卡面凸字壓印至複寫簽帳單時滾輪滾過之動作聲音，沿用至今成為刷信用卡之全港通用口頭禪。\n４．「掃碼支付」（sou3 maa5 zi1 fu6）：使用智慧型手機二維碼（微信支付、支付寶、電子錢包）掃碼扣款。\n５．「轉數快」（zyun2 sou3 faai3，FPS）：香港金融管理局推行之跨銀行即時轉帳系統，可通過手機號碼或電郵地址即時收付款項。\n\n二、結帳付款實用問答句型：\n- 「請問呢度收唔收信用卡或者微信支付呀？」（請問這裡接受信用卡或微信支付嗎？）\n- 「我哋收現金、八達通同轉數快，買滿一百蚊可以碌卡。」（我們收現金、八達通和轉數快，滿一百元可以刷信用卡。） 現金付款講「畀現金」，信用卡刷卡講「碌卡」，感應式非接觸支付講「拍卡」或「嘟卡」（如嘟八達通），收銀溝通靈活迅捷。",
      "examples": [
        {
          "target": "請問呢度可唔可以用八達通或者轉數快畀錢？",
          "reading": "cing2 man6 ni1 dou6 ho2 m4 ho2 ji5 jung6 baat3 daat6 tung1 waak6 ze2 zyun2 sou3 faai3 bei2 cin2? [tsʰɪŋ˧˥ mɐn˨ niː˥ tou˨ hɔː˧˥ m̩˨˩ hɔː˧˥ jiː˩˧ jʊŋ˨ paːt̚˧ taːt̚˨ tʰʊŋ˥ waːk˨ tsɛː˧˥ tsyn˧˥ sou˧ faːi˧ pei˧˥ tsʰiːn˧˥?] (CHING-MUN NEE-DOH HOH-M-HOH-YEE YOONG BAHT-DAHT-TOONG WAHK-JEH JUEN-SO-FY BAY-CHEEN?)",
          "translation": "Excuse me, can I pay using Octopus or FPS here?"
        },
        {
          "target": "我冇帶足夠現金喺身，唔該幫我碌信用卡啦。",
          "reading": "ngo5 mou5 daai3 zuk1 gau3 jin6 gam1 hai2 san1, m4 goi1 bong1 ngo5 luk1 seon3 jung3 kaat1 laa1. [ŋɔː˩˧ mou˩˧ taːi˧ tsʊk̚˥ kɐu˧ jiːn˨ kɐm˥ hɐi˩˧ sɐn˥, m̩˨˩ kɔːi˥ pɔːŋ˥ ŋɔː˩˧ lʊk̚˥ sɵn˧ jʊŋ˨ kʰaːt̚˥ laː˥] (NGOH MOU DY JOOK-GAU YEEN-GUM HY SUN, M-GOY BONG NGOH LUK SEON-YOONG-KAHT LAH)",
          "translation": "I did not bring enough cash on me; please swipe my credit card, thank you."
        },
        {
          "target": "買呢件電器只要嘟一嘟手機二維碼，就可以即刻完成付款。",
          "reading": "maai5 ni1 gin6 din6 hei3 zi2 jiu3 dyut1 jat1 dyut1 sau2 gei1 ji6 wai4 maa5, zau6 ho2 ji5 zik1 hak1 jyun4 sing4 fu6 fun2. [maːi˩˧ niː˥ kiːn˨ tiːn˨ hei˧ tsiː˧˥ jiu˧ tyːt̚˥ jɐt̚˥ tyːt̚˥ sɐu˧˥ kei˥ jiː˨ wɐi˨˩ maː˩˧, tsɐu˨ hɔː˧˥ jiː˩˧ tsɪk̚˥ hɐk̚˥ jyːn˨˩ sɪŋ˨˩ fu˨ fuːn˨] (MY NEE-GEEN DEEN-HEY JEE-YEW DYUT-YUT-DYUT SAU-GAY YEE-WY-MAH, JAU HOH-YEE JIK-HUK YUEN-SING FOO-FOON)",
          "translation": "Buying this appliance only requires scanning the mobile QR code, and the payment is completed immediately."
        }
      ],
      "mnemonics": [
        "【支付多樣訣】出門買嘢付款便，「畀現金」與「拍卡」健；大額消費「碌卡」快，「轉數快」同「掃碼」連！"
      ],
      "culturalNotes": [
        "「碌卡」（luk1 kaat1）係香港極為傳神之經典粵語詞彙，原指早期機械刷卡機將卡片凸字壓印到複寫簽帳單之滾動聲音，如今已成為全港市民使用信用卡之唯一口語俗稱。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【支付動詞】在香港收銀台欲表示「我用信用卡刷卡付款」，應講：",
          "options": [
            "我碌信用卡畀錢。 (ngo5 luk1 seon3 jung3 kaat1 bei2 cin2.)",
            "我行街信用卡畀錢。 (掌握香港多元支付手段用語（畀現金、拍/嘟八達通、碌信用卡、轉數快FPS、掃碼支付）。)",
            "我搭枱信用卡畀錢。 (掌握香港多元支付手段用語（畀現金、拍/嘟八達通、碌信用卡、轉數快FPS、掃碼支付）。)",
            "我走青信用卡畀錢。 (掌握香港多元支付手段用語（畀現金、拍/嘟八達通、碌信用卡、轉數快FPS、掃碼支付）。)"
          ],
          "answerIndex": 0,
          "explanation": "刷信用卡付款在粵語中稱為「碌卡」（luk1 kaat1）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語彙由來】粵語中用「嘟卡」（dyut1 kaat1）指代刷八達通卡，該詞之由來係：",
          "options": [
            "刷卡機感應成功時發出的「嘟」提示音 (Onomatopoeic sound of reader)",
            "八達通發明人的名字 (掌握香港多元支付手段用語（畀現金、拍/嘟八達通、碌信用卡、轉數快FPS、掃碼支付）。)",
            "香港某座地鐵站的名稱 (掌握香港多元支付手段用語（畀現金、拍/嘟八達通、碌信用卡、轉數快FPS、掃碼支付）。)",
            "古漢語的傳統動詞 (掌握香港多元支付手段用語（畀現金、拍/嘟八達通、碌信用卡、轉數快FPS、掃碼支付）。)"
          ],
          "answerIndex": 0,
          "explanation": "「嘟」係刷卡機感應提示音之擬聲詞。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【金融術語】香港金管局推行之快速跨銀行即時電子轉帳系統之粵語名稱係：",
          "options": [
            "轉數快 (zyun2 sou3 faai3 / FPS)",
            "八達通 (baat3 daat6 tung1)",
            "易辦事 (EPS)",
            "支票簿 (zi1 piu3 bou2)"
          ],
          "answerIndex": 0,
          "explanation": "香港快速支付系統官方俗稱為「轉數快」（FPS）。"
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
    "title": "商舖類型與退換貨溝通：「士多」、「藥房」、「退貨/換貨」 (Store Types & Returns)",
    "level": "A2",
    "objective": "掌握香港特色店舖類型名詞（士多、藥房、辦館、街市）及售後退換貨、單據保養期溝通句式。",
    "presentation": {
      "explanation": "香港街頭遍佈各具歷史特色之傳統與現代店舖類型，消費者需掌握各類店舖名稱與售後權益交涉用語：\n\n一、香港特色店舖名稱深度解析：\n１．「士多」（si6 do1）：英語 'Store' 之粵語音譯，指傳統街坊小型雜貨士多店，售賣零食、汽水冰棒及日用小百貨。\n２．「藥房 / 藥行」（joek6 fong4 / joek6 hong4）：售賣西藥、中成藥、嬰兒奶粉及個人護理用品之店舖（掛有白底紅十字「Rx」標誌者方為政府註冊藥房，具備配售處方藥資格）。\n３．「辦館」（baan6 gun2）：傳統批發兼零售高檔進口洋酒、罐頭食品及西式雜貨之老字號商號。\n４．「街市」（gaai1 si5）：室內或露天肉菜生鮮農貿市場。\n\n二、售後服務與退換貨交涉句式深度剖析：\n１．「退貨 / 換貨」（teoi3 fo3 / wun6 fo3）：退還商品或更換同款新商品。\n２．「單據 / 發票」（daan1 geoi3 / faat3 piu3）：購買憑證收據。\n３．「保養期」（bou2 joeng5 kei4）：產品質量保修期限。\n４．「出門恕不退換」（ceot1 mun4 syu3 bat1 teoi3 wun6）：貨品出門概不退換之商家免責告示。 街坊小雜貨店稱「士多」（源自Store），買日用品往「藥房」；若商品有瑕疵憑單據講「件衫有破損，想辦理換貨手續」，合情合理。",
      "examples": [
        {
          "target": "我琴日喺你哋藥房買嘅血壓計有故障，憑單據可唔可以換貨呀？",
          "reading": "ngo5 kam4 jat6 hai2 nei5 dei6 joek6 fong4 maai5 ge3 hyut3 aat3 gai3 jau5 gu3 zoeng3, pang4 daan1 geoi3 ho2 m4 ho2 ji5 wun6 fo3 aa3? [ŋɔː˩˧ kʰɐm˨˩ jɐt˨ hɐi˩˧ nei˩˧ tei˨ jœːk̚˨ fɔːŋ˨˩ maːi˩˧ kɛː˧ hyːt̚˧ aːt̚˧ kɐi˧ jɐu˩˧ kuː˧ tsœːŋ˧, pʰɐŋ˨˩ taːn˥ kɵy˧ hɔː˧˥ m̩˨˩ hɔː˧˥ jiː˩˧ wuːn˨ fɔː˧ aː˧?] (NGOH KUM-YUT HY NEI-DAY YEUK-FONG MY GEH HUET-AHT-GY YAU GOO-JEUNG, PUNG DAHN-GOEY HOH-M-HOH-YEE WOON-FOH AH?)",
          "translation": "The blood pressure monitor I bought at your pharmacy yesterday has a malfunction; can I exchange it with the receipt?"
        },
        {
          "target": "落樓下士多買支樽裝可樂，順便同士多老闆傾兩句計。",
          "reading": "lok6 lau4 haa6 si6 do1 maai5 zi1 zeon1 zong1 ho2 lok6, seon6 bin6 tung4 si6 do1 lou5 baan2 king1 loeng5 geui3 gai2. [lɔːk˨ lɐu˨˩ haː˨ siː˨ tɔː˥ maːi˩˧ tsiː˥ tsɵn˥ tsɔːŋ˥ hɔː˧˥ lɔːk˨, sɵn˨ piːn˨ tʰʊŋ˨˩ siː˨ tɔː˥ lou˧˥ paːn˧˥ kʰɪŋ˨˩ lœːŋ˩˧ kɵy˧ kɐi˧˥] (LOK LAU-HAH SEE-DOH MY JEE JEUN-JONG HOH-LOK, SOON-BEEN TOONG SEE-DOH LOH-BAHN KING LEUNG-GOEY-GY)",
          "translation": "Going downstairs to the 'store' to buy a bottle of Coca-Cola, and chat with the store boss while there."
        },
        {
          "target": "呢部抽濕機有一年原廠保養期，請妥善保留張收據單。",
          "reading": "ni1 bou6 cau1 sap1 gei1 jau5 jat1 nin4 jyun4 cong2 bou2 joeng5 kei4, cing2 to5 sin6 bou2 lau4 zoeng1 sau1 geoi3 daan1. [niː˥ pou˨ tsʰɐu˥ sɐp̚˥ kei˥ jɐu˩˧ jɐt̚˥ niːn˨˩ jyːn˨˩ tsʰɔːŋ˧˥ pou˧˥ jœːŋ˩˧ kʰei˨˩, tsʰɪŋ˧˥ tʰɔː˩˧ siːn˨ pou˧˥ lɐu˨˩ tsœːŋ˥ sɐu˥ kɵy˧ taːn˥] (NEE-BO CHAU-SUP-GAY YAU YUT-NEEN YUEN-CHONG HOH-JEUNG-KAY, CHING TOH-SEEN BO-LAU JEUNG SAU-GOEY-DAHN)",
          "translation": "This dehumidifier comes with a one-year original manufacturer warranty; please keep the purchase receipt safe."
        }
      ],
      "mnemonics": [
        "【商舖售後歌】買雜貨落「士多」店，買西藥去「藥房」巡；退換貨物憑「單據」，「保養期」內護權純！"
      ],
      "culturalNotes": [
        "「士多」（Store）與「辦館」見證了香港開埠百餘年來華洋交融之商貿歷史。舊式士多店前常放置紅豆冰櫃、汽水箱與扭蛋機，充滿香港幾代人之集體童年記憶。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【店舖識別】香港街坊用以稱呼售賣零食、飲料、香煙及日常雜貨之傳統小店為：",
          "options": [
            "士多 (si6 do1 / Store)",
            "月台 (jyut6 toi4)",
            "天橋 (tin1 kiu4)",
            "燈位 (dang1 wai2)"
          ],
          "answerIndex": 0,
          "explanation": "傳統雜貨小店音譯英語 'Store' 稱為「士多」（si6 do1）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【售後權益】所購電器出現故障，欲憑購買發票向商家要求更換一件新貨，應講：",
          "options": [
            "我憑單據想換貨。 (ngo5 pang4 daan1 geoi3 soeng2 wun6 fo3.)",
            "我憑單據想搭枱。 (掌握香港特色店舖類型名詞（士多、藥房、辦館、街市）及售後退換貨、單據保養期溝通句式。) (商舖類型與退換貨溝通：「士多」、「藥房」、「退貨/換貨」 (Store Types & Returns))",
            "我憑單據想轉線。 (掌握香港特色店舖類型名詞（士多、藥房、辦館、街市）及售後退換貨、單據保養期溝通句式。) (商舖類型與退換貨溝通：「士多」、「藥房」、「退貨/換貨」 (Store Types & Returns))",
            "我憑單據想走甜。 (掌握香港特色店舖類型名詞（士多、藥房、辦館、街市）及售後退換貨、單據保養期溝通句式。) (商舖類型與退換貨溝通：「士多」、「藥房」、「退貨/換貨」 (Store Types & Returns))"
          ],
          "answerIndex": 0,
          "explanation": "「憑單據想換貨」（憑發票收據想要換貨）係售後更換商品之標準表達。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【商家告示】在香港店舖門口常看到「出門恕不退換」告示牌，其意思係：",
          "options": [
            "商品售出離開店門後概不提供退貨或換貨服務 (Goods sold are non-refundable)",
            "出門時必須向店員脫帽鞠躬 (掌握香港特色店舖類型名詞（士多、藥房、辦館、街市）及售後退換貨、單據保養期溝通句式。) (商舖類型與退換貨溝通：「士多」、「藥房」、「退貨/換貨」 (Store Types & Returns))",
            "走出門口可以免費退換所有商品 (掌握香港特色店舖類型名詞（士多、藥房、辦館、街市）及售後退換貨、單據保養期溝通句式。) (商舖類型與退換貨溝通：「士多」、「藥房」、「退貨/換貨」 (Store Types & Returns))",
            "商品只能在門口使用 (掌握香港特色店舖類型名詞（士多、藥房、辦館、街市）及售後退換貨、單據保養期溝通句式。) (商舖類型與退換貨溝通：「士多」、「藥房」、「退貨/換貨」 (Store Types & Returns))"
          ],
          "answerIndex": 0,
          "explanation": "「出門恕不退換」意為商品售出離店後恕不接受退貨或更換。"
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
    "title": "人體部位名詞深度辨析：「個頭」、「隻手」、「條腰」、「對腳」 (Human Body Parts & Cantonese Classifiers)",
    "level": "A2",
    "objective": "掌握粵語人體各部位專屬量詞搭配（個、隻、條、塊、對、把）與地道解剖部位名稱（膝頭哥、心口、肚腩）。",
    "presentation": {
      "explanation": "粵語在描述人體生理構造、各部器官與解剖部位時，嚴格遵循漢語傳統量詞搭配法則，並擁有豐富獨特之嶺南口語專屬名詞體系與構詞特徵：\n\n一、頭面五官部位與量詞精準搭配：\n１．「個頭」（go3 tau4）：頭部整體。例如「個頭好痛」（頭部劇烈疼痛）、「梳順個頭」（把頭髮梳理整齊）。\n２．「塊面」（faai3 min6）：臉部或面部整體。量詞必用「塊」（faai3），不可誤用為「個」。例如「塊面好紅」（臉色紅潤或羞紅）、「洗乾淨塊面」（把臉洗乾淨）。\n３．「隻眼 / 對眼」（zek3 ngaan5 / deoi3 ngaan5）：單隻眼睛量詞用「隻」，雙眼並稱用「對」。例如「隻左眼發炎紅腫」、「對眼好攰要滴眼藥水」。\n４．「個鼻」（go3 bei6）：鼻子及鼻樑。\n５．「把口 / 個嘴」（baa2 hau2 / go3 zeoi2）：內部口腔或說話功能用「把口」，外部嘴唇外觀輪廓用「個嘴」。例如「張開把口等醫生檢查喉嚨」、「個嘴唇好乾」。\n６．「隻耳仔」（zek3 ji5 zai2）：耳朵器官，日常口語慣常帶有親切小稱後綴「仔」。例如「隻左耳聽唔清楚」。\n７．「啲頭髮」（di1 tau4 faat3）：頭頂毛髮，集合名詞複數量詞用「啲」。例如「啲頭髮好長要剪髮」。\n\n二、軀幹與四肢部位名詞深度辨析：\n１．「條頸」（tiu4 geng2）：脖子與頸椎部位。細長條狀人體結構量詞專用「條」。例如「條頸好赤好僵硬」。\n２．「個喉嚨」（go3 hau4 lung4）：喉嚨與咽喉腔體。例如「個喉嚨發炎吞嘢好痛」。\n３．「個心口」（go3 sam1 hau2）：胸口、胸膛與心前區部位。例如「個心口翳住好難呼吸」。\n４．「個肚 / 肚腩」（go3 tou5 / tou5 naam5）：腹部與肚子，腹部積聚之脂肪贅肉特稱為「肚腩」。例如「個肚咕咕叫好肚餓」。\n５．「條腰」（tiu4 jiu1）：腰部與腰椎。例如「彎低條腰搬重嘢整親條腰」。\n６．「隻手 / 對手」（zek3 sau2 / deoi3 sau2）：手部、手掌與整條手臂。例如「隻右手寫字寫到好酸」。\n７．「隻腳 / 對腳」（zek3 goek3 / deoi3 goek3）：腿部、小腿與腳掌。例如「行咗成日對腳好酸軟」。\n８．「個膝頭哥」（go3 sat1 tau4 go1）：人體膝蓋關節。粵語俗稱膝蓋為「膝頭哥」，極具嶺南民間方言特色。例如「落樓梯嗰陣個膝頭哥好痛」。\n９．「個腳板底」（go3 goek3 baan2 dai2）：腳底板與足底神經反射區。例如「做腳底按摩按個腳板底」。\n\n三、身體部位語法特徵深度歸納：\n粵語指示單一肢體器官時，廣泛採用「量詞＋名詞」之獨特結構替代普通話之代詞所有格，例如以「隻手好痛」表示「我的手很痛」，以「整親條腰」表示「扭傷了腰部」，語法簡潔生動且極具嶺南口語神韻。 人體部位與量詞搭配嚴謹有序：頭顱用「個」（個頭痛），手臂手掌用「隻」（隻手擦傷），腰脊用「條」（條腰好酸），雙足用「對」（對腳好攰）。",
      "examples": [
        {
          "target": "我琴晚瞓醒之後條頸好硬，個膝頭哥郁動嗰陣仲隱隱作痛。",
          "reading": "ngo5 kam4 maan5 fan3 seng2 zi1 hau6 tiu4 geng2 hou2 ngaang6, go3 sat1 tau4 go1 juk1 dung6 go2 zan6 zung6 jan2 jan2 zok3 tung3. [ŋɔː˩˧ kʰɐm˨˩ maːn˩˧ fɐn˧ sɛːŋ˧˥ tsiː˥ hɐu˨ tʰiːu˨˩ kɛːŋ˧˥ hou˧˥ ŋaːŋ˨, kɔː˧ sɐt̚˥ tʰɐu˨˩ kɔː˥ jʊk̚˥ tʊŋ˨ kɔː˧˥ tsɐn˨ tsʊŋ˨ jɐn˧˥ jɐn˧˥ tsɔːk̚˧ tʰʊŋ˧] (NGOH KUM-MAHN FUN-SENG JEE-HAU TEW-GENG HOH-NGAHNG, GOH SUT-TAU-GOH YOOK-DOONG GOH-JUN JOONG YUN-YUN-JOK-TOONG)",
          "translation": "After waking up last night, my neck was very stiff, and my knee also had a dull ache when moving."
        },
        {
          "target": "佢對眼睇嘢好模糊，醫生話要徹底檢查下隻左眼。",
          "reading": "keoi5 deoi3 ngaan5 tai2 je5 hou2 mou4 wu4, ji1 sang1 waa6 jiu3 cit3 dai2 gim2 caa4 haa5 zek3 zo2 ngaan5. [kʰɵy˩˧ tɵy˧ ŋaːn˩˧ tʰɐi˧˥ jɛː˩˧ hou˧˥ mou˨˩ wuː˨˩, jiː˥ sɐŋ˥ waː˨ jiu˧ tsʰiːt̚˧ tɐi˧˥ kiːm˧˥ tsʰaː˩˧ haː˩˧ tsɛːk̚˧ tsɔː˧˥ ŋaːn˩˧] (KUY DEOY-NGAHN TY-YEH HOH MOU-WOO, YEE-SUNG WAH YEW CHEET-DY GEEM-CHAH HAH JEK JOH-NGAHN)",
          "translation": "His eyes see things very blurrily; the doctor said his left eye needs a thorough examination."
        },
        {
          "target": "做完劇烈運動之後，我成個心口同兩條手臂都好酸痛。",
          "reading": "zou6 jyun4 gik6 lit6 wan6 dung6 zi1 hau6, ngo5 seng4 go3 sam1 hau2 tung4 loeng5 tiu4 sau2 bei3 dou1 hou2 syun1 tung3. [tsou˨ jyːn˨˩ kɪk̚˨ liːt˨ wɐn˨ tʊŋ˨ tsiː˥ hɐu˨, ŋɔː˩˧ sɛːŋ˨˩ kɔː˧ sɐm˥ hɐu˧˥ tʰʊŋ˨˩ lœːŋ˩˧ tʰiːu˨˩ sɐu˧˥ pei˧ tou˥ hou˧˥ syːn˥ tʰʊŋ˧] (JOH-YUEN GIK-LEET WUN-DOONG JEE-HAU, NGOH SENG-GOH SUM-HAU TOONG LEUNG-TEW SAU-BAY DOH HOH SUEN-TOONG)",
          "translation": "After strenuous exercise, my entire chest and both arms feel very sore and aching."
        }
      ],
      "mnemonics": [
        "【身體部位歌】面用「一塊」頸「一條」，「膝頭哥」痛步難搖；雙眼雙腳講「一對」，「心口」護好身體苗！"
      ],
      "culturalNotes": [
        "粵語日常口語習慣為身體部位添加生動之人稱或小稱綴詞，例如「膝蓋」稱為「膝頭哥」（加「哥」字顯得親切有趣），「耳朵」稱為「耳仔」，「肚腩」特指腹部脂肪，展現出嶺南語言觀察人體之細膩特點。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【量詞搭配】在粵語中描述「臉部」與「脖子」，正確之專屬量詞分別係：",
          "options": [
            "一塊面、一條頸 (jat1 faai3 min6, jat1 tiu4 geng2)",
            "一條面、一塊頸 (掌握粵語人體各部位專屬量詞搭配（個、隻、條、塊、對、把）與地道解剖部位名稱（膝頭哥、心口、肚腩）。) (人體部位名詞深度辨析：「個頭」、「隻手」、「條腰」、「對腳」 (Human Body Parts & Cantonese Classifiers))",
            "一隻面、一對頸 (掌握粵語人體各部位專屬量詞搭配（個、隻、條、塊、對、把）與地道解剖部位名稱（膝頭哥、心口、肚腩）。) (人體部位名詞深度辨析：「個頭」、「隻手」、「條腰」、「對腳」 (Human Body Parts & Cantonese Classifiers))",
            "一個面、一把頸 (掌握粵語人體各部位專屬量詞搭配（個、隻、條、塊、對、把）與地道解剖部位名稱（膝頭哥、心口、肚腩）。) (人體部位名詞深度辨析：「個頭」、「隻手」、「條腰」、「對腳」 (Human Body Parts & Cantonese Classifiers))"
          ],
          "answerIndex": 0,
          "explanation": "臉部量詞用「塊」（一塊面），頸部量詞用「條」（一條頸）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【名詞識別】粵語俗稱人體腿部之「膝蓋」為：",
          "options": [
            "膝頭哥 (sat1 tau4 go1)",
            "心口 (sam1 hau2)",
            "腳板底 (goek3 baan2 dai2)",
            "肚腩 (tou5 naam5)"
          ],
          "answerIndex": 0,
          "explanation": "膝蓋在粵語中俗稱為「膝頭哥」（sat1 tau4 go1）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法搭配】若指單隻眼睛出現發炎紅腫，最準確之量詞短語係：",
          "options": [
            "隻眼 (zek3 ngaan5)",
            "條眼 (掌握粵語人體各部位專屬量詞搭配（個、隻、條、塊、對、把）與地道解剖部位名稱（膝頭哥、心口、肚腩）。) (人體部位名詞深度辨析：「個頭」、「隻手」、「條腰」、「對腳」 (Human Body Parts & Cantonese Classifiers))",
            "把眼 (掌握粵語人體各部位專屬量詞搭配（個、隻、條、塊、對、把）與地道解剖部位名稱（膝頭哥、心口、肚腩）。) (人體部位名詞深度辨析：「個頭」、「隻手」、「條腰」、「對腳」 (Human Body Parts & Cantonese Classifiers))",
            "幅眼 (掌握粵語人體各部位專屬量詞搭配（個、隻、條、塊、對、把）與地道解剖部位名稱（膝頭哥、心口、肚腩）。) (人體部位名詞深度辨析：「個頭」、「隻手」、「條腰」、「對腳」 (Human Body Parts & Cantonese Classifiers))"
          ],
          "answerIndex": 0,
          "explanation": "單隻眼睛或耳朵等對稱器官在粵語中量詞用「隻」（隻眼、隻耳仔）。"
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
    "title": "常見病徵與不適症狀表達：「頭痛」、「發燒」、「作感冒」、「肚痾」 (Common Illnesses & Symptoms)",
    "level": "A2",
    "objective": "掌握粵語常見病徵詞彙（發燒、頭痛、肚痾、聲沙）與病發前兆構詞詞綴「作」（作感冒、作嘔、作病）。",
    "presentation": {
      "explanation": "在粵語中表達身體不適、疼痛感覺與各類臨床症狀時，擁有高度專業、精確且生活化之詞彙結構體系：\n\n一、核心病徵詞彙深度解析：\n１．「發燒 / 發熱」（faat3 siu1 / faat3 jit6）：體溫異常升高發燒。高熱體溫特稱為「發高燒」（faat3 gou1 siu1），低熱稱為「發微燒」。\n２．「頭痛 / 頭暈」（tau4 tung3 / tau4 wan4）：頭部血管神經疼痛或頭暈目眩天旋地轉。「頭暈眼花」描述眩暈失衡感。\n３．「咳 / 乾咳 / 咳痰」（kat1 / gon1 kat1 / kat1 taam4）：呼吸道咳嗽、無痰乾咳或劇烈咳嗽帶痰。喉嚨痕癢引發之咳嗽稱為「喉嚨痕咳」。\n４．「喉嚨痛 / 聲沙」（hau4 lung4 tung3 / seng1 saa1）：咽喉發炎紅腫疼痛、聲帶充血聲音沙啞嘶啞。嚴重時「連吞口水都痛」。\n５．「肚痛 / 肚痾」（tou5 tung3 / tou5 o1）：腹部絞痛、腸胃炎腹瀉拉肚子（「痾」o1 為嶺南專用排泄動詞）。頻繁腹瀉稱為「痾到七彩 / 痾水」。\n６．「流鼻涕 / 鼻塞」（lau4 bei6 tai3 / bei6 sak1）：流鼻水或鼻腔黏膜充血堵塞不通氣。清鼻涕稱為「流清鼻涕」，濃稠鼻涕稱為「黃鼻涕」。\n\n二、病發前兆構詞前綴「作」（zok3）之核心語法功能：\n在粵語語法中，前綴動詞「作」（zok3）置於病名或生理反應前，專門用以表達「感覺快要生病、有發作前兆、隱隱感到即將發作」之微觀體貌狀態：\n１．「作感冒 / 作病」（zok3 gam2 mou6 / zok3 beng6）：感覺快要感冒生病、身體微恙出現起初症狀，如畏寒乏力。\n２．「作嘔 / 作吐」（zok3 au2 / zok3 tou3）：胃部翻江倒海泛酸噁心、感覺想要嘔吐反胃。\n３．「作抽筋」（zok3 cau1 gan1）：肌肉隱隱緊繃有即將抽搐痙攣之前兆感。\n４．「作發燒」（zok3 faat3 siu1）：身體開始發燙發熱、隱隱有即將發燒之體感。\n\n三、疼痛程度與感覺之精細修飾詞彙：\n粵語形容疼痛程度層次分明：極度劇痛稱為「痛到入心入肺」、「痛到標眼淚」；持續隱痛稱為「陰陰痛 / 隱隱作痛」；刺痛稱為「好似針拮咁痛」；灼熱疼痛稱為「好赤好辣」；肌肉酸痛疲勞稱為「酸軟無力」。 描述身體抱恙用語：體溫偏高叫「發燒」，腹瀉叫「肚痾/肚痛」，鼻塞流涕叫「作感冒/傷風」，喉嚨乾涸叫「喉嚨痛」，向醫護陳述清晰準確。",
      "examples": [
        {
          "target": "我由今日朝早開始個人好攰，喉嚨乾涸，好似有啲作感冒。",
          "reading": "ngo5 jau4 gam1 jat6 ziu1 zou2 hoi1 ci2 go3 jan4 hou2 gui6, hau4 lung4 gon1 kok3, hou2 ci5 jau5 di1 zok3 gam2 mou6. [ŋɔː˩˧ jɐu˨˩ kɐm˥ jɐt˨ tsiːu˥ tsou˧˥ hɔːi˥ tsʰiː˧˥ kɔː˧ jɐn˨˩ hou˧˥ kʷeːi˨, hɐu˨˩ lʊŋ˨˩ kɔːn˥ kʰɔːk̚˧, hou˧˥ tsʰiː˩˧ jɐu˩˧ tiː˥ tsɔːk̚˧ kɐm˧˥ mou˨] (NGOH YAU GUM-YUT JIU-JOU HOI-CHEE GOH-YUN HOH-GUI, HAU-LOONG GOHN-KOK, HOH-CHEE YAU-DEE JOK-GUM-MOU)",
          "translation": "Starting from this morning I feel very tired, my throat is dry, and it seems I am coming down with a cold."
        },
        {
          "target": "佢琴晚食完生冷海鮮之後就不斷肚痛同肚痾，成晚訓唔到覺。",
          "reading": "keoi5 kam4 maan5 sik6 jyun4 saang1 laang5 hoi2 sin1 zi1 hau6 zau6 bat1 dyun6 tou5 tung3 tung4 tou5 o1, seng4 maan5 fan3 m4 dou2 gaau3. [kʰɵy˩˧ kʰɐm˨˩ maːn˩˧ sɪk̚˨ jyːn˨˩ saːŋ˥ laːŋ˩˧ hɔːi˧˥ siːn˥ tsiː˥ hɐu˨ tsɐu˨ pɐt̚˥ tyːn˨ tou˩˧ tʰʊŋ˧ tʰʊŋ˨˩ tou˩˧ ɔː˥, sɛːŋ˨˩ maːn˩˧ fɐn˧ m̩˨˩ tou˧˥ kaːu˧] (KUY KUM-MAHN SIK-YUEN SAHNG-LAHNG HOY-SEEN JEE-HAU JAU BUT-DUEN TOU-TOONG TOONG TOU-OH, SENG-MAHN FUN-M-DOU-GAU)",
          "translation": "After eating raw cold seafood last night, he suffered continuous stomach pain and diarrhea, unable to sleep all night."
        },
        {
          "target": "BB發高燒到三十九度半，仲有啲作嘔，要即刻去睇急症。",
          "reading": "bi4 bi1 faat3 gou1 siu1 dou3 saam1 sap6 gau2 dou6 bun3, zung6 jau5 di1 zok3 au2, jiu3 zik1 hak1 heoi3 tai2 gap1 zing3. [piː˨˩ piː˥ faːt̚˧ kou˥ siːu˥ tou˧ saːm˥ sɐp̚˨ kɐu˧˥ tou˨ puːn˧, tsʊŋ˨ jɐu˩˧ tiː˥ tsɔːk̚˧ ɐu˧˥, jiu˧ tsɪk̚˥ hɐk̚˥ hɵy˧ tʰɐi˧˥ kɐp̚˥ tsɪŋ˧] (BEE-BEE FAHT-GOH-SEW DOU SAHM-SUP-GAU-DOH-BOON, JOONG YAU-DEE JOK-AU, YEW JIK-HUK HOEY TY GUP-JING)",
          "translation": "The baby has a high fever of 39.5 degrees and feels nauseous; we must see emergency care immediately."
        }
      ],
      "mnemonics": [
        "【病徵辨識訣】病症初起用「作病」，拉肚腹瀉講「肚痾」；高熱體溫「發高燒」，聲音沙啞痛難磨！"
      ],
      "culturalNotes": [
        "前綴「作」（zok3）在粵語中係極具表現力之語法化詞綴，專門用來捕捉疾病即將爆發前的微妙體感（例如「作感冒」、「作嘔」、「作發燒」）。若身體微熱微痛但尚未臥床，港人常說「我硬係覺得有啲作病」以此提醒自己及早休息飲涼茶。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【語法詞綴】感覺身體微熱、咽喉微痛，似乎「快要感冒了」，最地道之粵語表達係：",
          "options": [
            "我好似有啲作感冒。 (ngo5 hou2 ci5 jau5 di1 zok3 gam2 mou6.)",
            "我好似有啲搭感冒。 (掌握粵語常見病徵詞彙（發燒、頭痛、肚痾、聲沙）與病發前兆構詞詞綴「作」（作感冒、作嘔、作病）。) (常見病徵與不適症狀表達：「頭痛」、「發燒」、「作感冒」、「肚痾」 (Common Illnesses & Symptoms))",
            "我好似有啲轉感冒。 (掌握粵語常見病徵詞彙（發燒、頭痛、肚痾、聲沙）與病發前兆構詞詞綴「作」（作感冒、作嘔、作病）。) (常見病徵與不適症狀表達：「頭痛」、「發燒」、「作感冒」、「肚痾」 (Common Illnesses & Symptoms))",
            "我好似有啲走感冒。 (掌握粵語常見病徵詞彙（發燒、頭痛、肚痾、聲沙）與病發前兆構詞詞綴「作」（作感冒、作嘔、作病）。) (常見病徵與不適症狀表達：「頭痛」、「發燒」、「作感冒」、「肚痾」 (Common Illnesses & Symptoms))"
          ],
          "answerIndex": 0,
          "explanation": "「作」（zok3）置於病名感冒前，表示感覺快要感冒生病之前兆。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【病徵識別】進食不潔食物導致肚子疼痛且頻繁腹瀉，粵語稱此症狀為：",
          "options": [
            "肚痛同肚痾 (tou5 tung3 tung4 tou5 o1)",
            "頭痛同頭暈 (掌握粵語常見病徵詞彙（發燒、頭痛、肚痾、聲沙）與病發前兆構詞詞綴「作」（作感冒、作嘔、作病）。) (常見病徵與不適症狀表達：「頭痛」、「發燒」、「作感冒」、「肚痾」 (Common Illnesses & Symptoms))",
            "鼻塞同流涕 (掌握粵語常見病徵詞彙（發燒、頭痛、肚痾、聲沙）與病發前兆構詞詞綴「作」（作感冒、作嘔、作病）。) (常見病徵與不適症狀表達：「頭痛」、「發燒」、「作感冒」、「肚痾」 (Common Illnesses & Symptoms))",
            "聲沙同乾咳 (掌握粵語常見病徵詞彙（發燒、頭痛、肚痾、聲沙）與病發前兆構詞詞綴「作」（作感冒、作嘔、作病）。) (常見病徵與不適症狀表達：「頭痛」、「發燒」、「作感冒」、「肚痾」 (Common Illnesses & Symptoms))"
          ],
          "answerIndex": 0,
          "explanation": "腹部疼痛腹瀉在粵語中稱為「肚痛同肚痾」（tou5 tung3 tung4 tou5 o1）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【構詞解析】在粵語短語「作嘔」（zok3 au2）中，字首「作」之確切語義功能為：",
          "options": [
            "表示想要嘔吐、噁心作嘔之生理預兆體感 (Onset / feeling like nausea)",
            "表示故意裝作嘔吐動作 (掌握粵語常見病徵詞彙（發燒、頭痛、肚痾、聲沙）與病發前兆構詞詞綴「作」（作感冒、作嘔、作病）。) (常見病徵與不適症狀表達：「頭痛」、「發燒」、「作感冒」、「肚痾」 (Common Illnesses & Symptoms))",
            "表示創作關於嘔吐的文章 (掌握粵語常見病徵詞彙（發燒、頭痛、肚痾、聲沙）與病發前兆構詞詞綴「作」（作感冒、作嘔、作病）。) (常見病徵與不適症狀表達：「頭痛」、「發燒」、「作感冒」、「肚痾」 (Common Illnesses & Symptoms))",
            "表示工作勞動導致嘔吐 (掌握粵語常見病徵詞彙（發燒、頭痛、肚痾、聲沙）與病發前兆構詞詞綴「作」（作感冒、作嘔、作病）。) (常見病徵與不適症狀表達：「頭痛」、「發燒」、「作感冒」、「肚痾」 (Common Illnesses & Symptoms))"
          ],
          "answerIndex": 0,
          "explanation": "前綴「作」在醫學症狀中表示即將發作或產生噁心前兆之生理感受。"
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
    "title": "診所求診實戰會話：「睇醫生」、「掛號」、「量血壓」 (Doctor Visit Dialogue)",
    "level": "A2",
    "objective": "掌握香港診所求醫全流程會話（睇醫生、登記掛號、量體溫/血壓、問診答問、藥物過敏確認）。",
    "presentation": {
      "explanation": "在香港私家診所、公立門診或醫院專科求醫就診時，從接待處登記掛號到與醫生臨床問診擁有一套標準而禮貌之道地對話體系：\n\n一、求診登記流程關鍵術語深度解析：\n１．「睇醫生 / 睇西醫 / 睇中醫」（tai2 ji1 sang1 / tai2 sai1 ji1 / tai2 zung1 ji1）：就醫診治。看現代西醫或傳統中醫。\n２．「登記 / 掛號」（dang1 gei3 / gwaa3 hou6）：在接待處出示香港身份證或護照等有效身份證明文件完成登記手續，領取籌號排隊。\n３．「量體溫 / 量血壓」（loeng4 tai2 wan1 / loeng4 hyut3 aat3）：護士為病人精確測量耳溫、額溫、脈搏與收縮壓舒張壓指數。\n４．「叫名入診室」（giu3 meng2 jap6 can2 sat1）：在大堂候診區等待護士叫喚患者全名進入診室見醫生。\n\n二、醫生問診與患者陳述核心句型矩陣：\n１．醫生臨床問診常用核心句型：\n- 「邊度唔舒服呀？」（身體哪裡感到不適？）\n- 「痛咗幾多日呀？」（這個疼痛症狀已經持續了多少天？）\n- 「有冇發燒或者發冷？」（有沒有發高燒或者畏寒怕冷？）\n- 「有冇對咩藥物敏感？」（過往對哪些抗生素或止痛藥物存在過敏反應？）\n２．患者陳述病情句式結構：\n- 「我由琴日開始發燒，喉嚨好痛，連吞口水都痛。」（我從昨天開始發燒，喉嚨很痛，甚至吞口水都劇痛。）\n- 「我食親海鮮或者某啲西藥都會皮膚敏感出紅疹。」（我每次吃海鮮或某些西藥都會皮膚過敏起紅疹點。）\n- 「我平時血壓偏高，有食開降血壓藥。」（我平常血壓偏高，一直有長期服用降壓藥習慣。）\n\n三、醫患溝通禮儀與問診技巧：\n就診時稱呼女護士為「姑娘」，稱呼醫生為「醫生」。描述症狀時應按時間先後順序清晰講述發病經過（如「由前晚開始……之後琴日……到今日朝早……」），並準確說明有無長期病患史與家族遺傳病史。 抵達私家診所先向姑娘「登記掛號」，測量體溫血壓後入診室「睇醫生」，醫生常問「邊度唔舒服呀？幾時開始唔適應？」，互動自然。",
      "examples": [
        {
          "target": "早晨姑娘，我有預約十點半睇醫生，呢個係我張香港身份證。",
          "reading": "zou2 san4 gu1 neong4, ngo5 jau5 jyu6 joek3 sap6 dim2 bun3 tai2 ji1 sang1, ni1 go3 hai6 ngo5 zoeng1 hoeng1 gong2 san1 fan2 zing3. [tsou˧˥ sɐn˨˩ kuː˥ nœːŋ˨˩, ŋɔː˩˧ jɐu˩˧ jyː˨ jœːk̚˧ sɐp̚˨ tiːm˧˥ puːn˧ tʰɐi˧˥ jiː˥ sɐŋ˥, niː˥ kɔː˧ hɐi˨ ŋɔː˩˧ tsœːŋ˥ hœːŋ˥ kɔːŋ˧˥ sɐn˥ fɐn˧˥ tsɪŋ˧] (JOU-SUN GOO-NEUNG, NGOH YAU YU-YEUK SUP-DEEM-BOON TY YEE-SUNG, NEE-GOH HY NGOH JEUNG HEUNG-GONG SUN-FUN-JING)",
          "translation": "Good morning nurse, I have a 10:30 appointment to see the doctor; here is my Hong Kong ID card."
        },
        {
          "target": "醫生，我成個胸口壓住痛咗兩日，呼吸嗰陣仲有啲氣促。",
          "reading": "ji1 sang1, ngo5 seng4 go3 hung1 hau2 aat3 zyu6 tung3 zo2 loeng5 jat6, fu1 kap1 go2 zan6 zung6 jau5 di1 hei3 cuk1. [jiː˥ sɐŋ˥, ŋɔː˩˧ sɛːŋ˨˩ kɔː˧ hʊŋ˥ hɐu˧˥ aːt̚˧ tsyː˨ tʰʊŋ˧ tsɔː˧˥ lœːŋ˩˧ jɐt˨, fuː˥ kʰɐp̚˥ kɔː˧˥ tsɐn˨ tsʊŋ˨ jɐu˩˧ tiː˥ hei˧ tsʰʊk̚˥] (YEE-SUNG, NGOH SENG-GOH HOONG-HAU AHT-JYU TOONG-JOR LEUNG-YUT, FOO-KUP GOH-JUN JOONG YAU-DEE HEY-CHOOK)",
          "translation": "Doctor, my whole chest has felt a pressing pain for two days, and I am also a bit short of breath when inhaling."
        },
        {
          "target": "請問你過往有冇對阿士匹靈或者抗生素藥物敏感？",
          "reading": "cing2 man6 nei5 gwo3 wong5 jau5 mou5 deoi3 aa3 si6 pat1 ling4 waak6 ze2 kong3 sang1 sou3 joek6 mat6 man5 gam2? [tsʰɪŋ˧˥ mɐn˨ nei˩˧ kʷɔː˧ wɔːŋ˩˧ jɐu˩˧ mou˩˧ tɵy˧ aː˧ siː˨ pʰɐt̚˥ lɪŋ˨˩ waːk˨ tsɛː˧˥ kʰɔːŋ˧ sɐŋ˥ sou˧ jœːk̚˨ mɐt̚˨ mɐn˩˧ kɐm˧˥?] (CHING-MUN NEI GWO-WONG YAU MOU DEOY AH-SEE-PUT-LING WAHK-JEH KONG-SUNG-SO YEUK-MUT MUN-GUM?)",
          "translation": "May I ask if you have had past allergic reactions to aspirin or antibiotic medications?"
        }
      ],
      "mnemonics": [
        "【診所求醫訣】入診登記「遞張證」，「姑娘」量溫量血壓；醫生問診詳陳述，「藥物敏感」講得真！"
      ],
      "culturalNotes": [
        "在香港診所與公私立醫院中，病人傳統上一律尊稱診所護士為「姑娘」（gu1 neong4），此稱呼親切得體且極具嶺南歷史淵源；醫生則普遍尊稱為「醫生」（ji1 sang1）。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【醫護尊稱】在香港診所接待處向當值護士登記掛號時，最得體之道地尊稱為：",
          "options": [
            "姑娘 (gu1 neong4)",
            "老闆娘 (lou5 baan2 neong4)",
            "師傅 (si1 fu2)",
            "經理 (ging1 lei5)"
          ],
          "answerIndex": 0,
          "explanation": "香港文化中尊稱診所及醫院女護士為「姑娘」（gu1 neong4）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【問診交涉】進入診室後，醫生詢問「邊度唔舒服呀？」，欲表達「我喉嚨痛且發燒兩天」，應講：",
          "options": [
            "我喉嚨痛同埋發燒咗兩日。 (ngo5 hau4 lung4 tung3 tung4 maai4 faat3 siu1 zo2 loeng5 jat6.)",
            "我八達通增值咗兩日。 (掌握香港診所求醫全流程會話（睇醫生、登記掛號、量體溫/血壓、問診答問、藥物過敏確認）。) (診所求診實戰會話：「睇醫生」、「掛號」、「量血壓」 (Doctor Visit Dialogue))",
            "我開茶搭枱咗兩日。 (掌握香港診所求醫全流程會話（睇醫生、登記掛號、量體溫/血壓、問診答問、藥物過敏確認）。) (診所求診實戰會話：「睇醫生」、「掛號」、「量血壓」 (Doctor Visit Dialogue))",
            "我行街買衫咗兩日。 (掌握香港診所求醫全流程會話（睇醫生、登記掛號、量體溫/血壓、問診答問、藥物過敏確認）。) (診所求診實戰會話：「睇醫生」、「掛號」、「量血壓」 (Doctor Visit Dialogue))"
          ],
          "answerIndex": 0,
          "explanation": "「喉嚨痛同埋發燒咗兩日」係準確清晰之病情自述句式。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【醫療安全】醫生處方前詢問「有冇藥物敏感？」，其核心用意為確認：",
          "options": [
            "病人過往是否對某些特定西藥存在過敏不良反應 (Drug allergies)",
            "病人是否喜歡吃甜味藥水 (掌握香港診所求醫全流程會話（睇醫生、登記掛號、量體溫/血壓、問診答問、藥物過敏確認）。) (診所求診實戰會話：「睇醫生」、「掛號」、「量血壓」 (Doctor Visit Dialogue))",
            "病人對藥物價格是否敏感在乎 (掌握香港診所求醫全流程會話（睇醫生、登記掛號、量體溫/血壓、問診答問、藥物過敏確認）。) (診所求診實戰會話：「睇醫生」、「掛號」、「量血壓」 (Doctor Visit Dialogue))",
            "病人是否能夠自行吞服藥丸 (掌握香港診所求醫全流程會話（睇醫生、登記掛號、量體溫/血壓、問診答問、藥物過敏確認）。) (診所求診實戰會話：「睇醫生」、「掛號」、「量血壓」 (Doctor Visit Dialogue))"
          ],
          "answerIndex": 0,
          "explanation": "「藥物敏感」（joek6 mat6 man5 gam2）指藥物過敏史。"
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
    "title": "用藥指示與服藥劑量：「每日三次」、「每次兩粒」、「飯後服」 (Medication Instructions & Dosage)",
    "level": "A2",
    "objective": "掌握藥劑劑型名詞（藥丸、膠囊、藥水、藥膏）、服藥時間頻率（每日幾次、飯前/後服）及警示語（令人昏睡勿駕駛）。",
    "presentation": {
      "explanation": "在香港醫院藥房或社區註冊藥房取藥時，藥劑師向患者詳細交代服藥指引拥有一套極其嚴謹之標準臨床術語體系：\n\n一、藥品劑型分類名稱深度解析：\n１．「藥丸」（joek6 jyun2）：固體壓制藥片、口服片劑。例如「每次吞兩粒藥丸」。\n２．「膠囊」（gaau1 nong4）：外層由明膠包裹之膠囊狀藥物，利於腸道吸收。\n３．「藥水 / 止咳水」（joek6 seoi2 / zi2 kat1 seoi2）：液體口服糖漿藥水，飲用前需搖勻。\n４．「藥膏」（joek6 gou1）：外用塗抹抗炎止癢軟膏，薄薄塗於患處皮膚。\n５．「抗生素」（kong3 sang1 sou3）：抗菌消炎專用處方藥物（必須嚴格遵循醫囑按療程完全服完，切忌中途自行停藥）。\n６．「退燒止痛藥」（teoi3 siu1 zi2 tung3 joek6）：解熱鎮痛專用藥品，有發燒疼痛症狀時方需服用。\n\n二、服藥劑量與時間頻率標準語彙：\n１．「每日三次 / 每日四次」（mui5 jat6 saam1 ci3 / sei3 ci3）：每天早午晚按固定間隔時間服用三次或四次。\n２．「每次食兩粒」（mui5 ci3 sik6 loeng5 nap1）：每次服用兩片或兩粒。顆粒狀藥物量詞專用「粒」（nap1）。\n３．「飯前服 / 飯後服 / 空肚服」（faan6 cin4 fuk6 / faan6 hau6 fuk6 / hung1 tou5 fuk6）：用餐前半小時服用、用餐後十五至三十分鐘內服用以護胃，或空腹狀態下直接口服。\n４．「瞓覺前服」（fan3 gaau3 cin4 fuk6）：臨睡前三十分鐘內服用。\n\n三、藥物副作用與安全警示語句：\n- 「呢隻感冒藥食完之後會令人好想瞓覺，服藥期間千祈唔好揸車或者操作任何危險機械！」\n- 「呢隻抗生素必須連續食滿七日成個療程，千祈唔好因為退咗燒就自己停藥！」 藥劑師配藥叮囑須留神：「呢隻消炎藥每日食三次，每次一粒，一定要飯後食；呢隻藥水瞓覺前飲一匙羹」，依從藥囑確保健康。",
      "examples": [
        {
          "target": "呢隻抗生素每日要食三次，每次一粒，飯後服，一定要連續食晒成個療程。",
          "reading": "ni1 zek3 kong3 sang1 sou3 mui5 jat6 jiu3 sik6 saam1 ci3, mui5 ci3 jat1 nap1, faan6 hau6 fuk6, jat1 ding6 jiu3 lin4 zuk6 sik6 saai3 seng4 go3 liu4 cing4. [niː˥ tsɛːk̚˧ kʰɔːŋ˧ sɐŋ˥ sou˧ muːi˩˧ jɐt˨ jiu˧ sɪk̚˨ saːm˥ tsʰiː˧, muːi˩˧ tsʰiː˧ jɐt̚˥ nɐp̚˥, faːn˨ hɐu˨ fʊk̚˨, jɐt̚˥ tɪŋ˨ jiu˧ liːn˨˩ tsʊk̚˨ sɪk̚˨ saːi˧ sɛːŋ˨˩ kɔː˧ liːu˨˩ tsʰɪŋ˨˩] (NEE-JEK KONG-SUNG-SO MOOI-YUT YEW SIK SAHM-CHEE, MOOI-CHEE YUT-NUP, FAHN-HAU FOOK, YUT-DING YEW LEEN-JOOK SIK-SY SENG-GOH LEW-CHING)",
          "translation": "This antibiotic must be taken three times a day, one capsule each time, after meals, and you must finish the entire course continuously."
        },
        {
          "target": "止咳藥水每次飲十毫升，每日早午晚各一次，飲之前請先搖勻。",
          "reading": "zi2 kat1 joek6 seoi2 mui5 ci3 jam2 sap6 hou4 sing1, mui5 jat6 zou2 ng5 maan5 gok3 jat1 ci3, jam2 zi1 cin4 cing2 sin1 jiu4 wan4. [tsiː˧˥ kʰɐt̚˥ jœːk̚˨ sɵy˧˥ muːi˩˧ tsʰiː˧ jɐm˧˥ sɐp̚˨ hou˨˩ sɪŋ˥, muːi˩˧ jɐt˨ tsou˧˥ ŋ̍˩˧ maːn˩˧ kɔːk̚˧ jɐt̚˥ tsʰiː˧, jɐm˧˥ tsiː˥ tsʰiːn˨˩ tsʰɪŋ˧˥ siːn˥ jiu4 wɐn˨˩] (JEE-KUT YEUK-SOEY MOOI-CHEE YUM SUP-HOU-SING, MOOI-YUT JOU-NG-MAHN GOK YUT-CHEE, YUM JEE-CHEEN CHING SEEN YEW-WUN)",
          "translation": "Take ten milliliters of cough syrup each time, three times daily (morning, noon, evening), and shake well before drinking."
        },
        {
          "target": "退燒藥有需要嗰陣每隔四個鐘食一次，如果燒退咗就唔使再食。",
          "reading": "teoi3 siu1 joek6 jau5 seoi1 jiu3 go2 zan6 mui5 gaak3 sei3 go3 zung1 sik6 jat1 ci3, jyu4 gwo2 siu1 teoi3 zo2 zau6 m4 sai2 zoi3 sik6. [tʰɵy˧ siːu˥ jœːk̚˨ jɐu˩˧ sɵy˥ jiu˧ kɔː˧˥ tsɐn˨ muːi˩˧ kaːk̚˧ sei˧ kɔː˧ tsʊŋ˥ sɪk̚˨ jɐt̚˥ tsʰiː˧, jyː˨˩ kʷɔː˧˥ siːu˥ tʰɵy˧ tsɔː˧˥ tsɐu˨ m̩˨˩ sɐi˧˥ tsɔːi˧ sɪk̚˨] (TOEY-SEW YEUK YAU SOEY-YEW GOH-JUN MOOI-GAK SAY-GOH-JOONG SIK YUT-CHEE, YU-GWOH SEW TOEY-JOR JAU M-SY JOY SIK)",
          "translation": "Take the fever reducer when needed every four hours; if the fever has subsided, you do not need to take it anymore."
        }
      ],
      "mnemonics": [
        "【服藥指南歌】藥丸量詞叫「一粒」，「每日三次」「飯後服」；「抗生素」藥食成套，「令人想瞓」咪開車！"
      ],
      "culturalNotes": [
        "香港衛生署嚴格規定抗生素為處方藥物，藥劑師在派發抗生素時必會再三叮囑患者「一定要食晒成個療程」（必須徹底服完完整療程），不可因症狀稍見好轉便擅自停藥，以防細菌產生抗藥性。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【服藥量詞】藥劑師交代「每次吃兩粒藥片」，在粵語中最地道之說法為：",
          "options": [
            "每次食兩粒 (mui5 ci3 sik6 loeng5 nap1)",
            "每次食兩條) (Context: 用藥指示與服藥劑量：「每日三次」、「每次兩粒」、「飯後服」 (Medi)",
            "每次食兩隻) (Context: 用藥指示與服藥劑量：「每日三次」、「每次兩粒」、「飯後服」 (Medi)",
            "每次食兩間) (Context: 用藥指示與服藥劑量：「每日三次」、「每次兩粒」、「飯後服」 (Medi)"
          ],
          "answerIndex": 0,
          "explanation": "顆粒狀藥丸藥片在粵語中量詞用「粒」（nap1）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【用藥安全】若藥袋上標註「服後可能引起昏睡」，患者在服藥期間應特別避免：",
          "options": [
            "駕駛汽車或操作重型機械 (Driving or operating machinery)",
            "喝溫開水) (Context: 用藥指示與服藥劑量：「每日三次」、「每次兩粒」、「飯後服」 (Medi)",
            "臥床休息) (Context: 用藥指示與服藥劑量：「每日三次」、「每次兩粒」、「飯後服」 (Medi)",
            "按時按量服藥) (Context: 用藥指示與服藥劑量：「每日三次」、「每次兩粒」、「飯後服」 (Medi)"
          ],
          "answerIndex": 0,
          "explanation": "引起嗜睡昏睡之藥物（如傳統抗過敏及感冒藥）服後嚴禁駕駛車輛或高空危險操作。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【服藥時機】藥袋標籤註明「飯後服」（faan6 hau6 fuk6），其正確之服用方法係：",
          "options": [
            "吃完飯後十五至三十分鐘內服用 (Take after meals)",
            "吃早飯前三小時服用) (Context: 用藥指示與服藥劑量：「每日三次」、「每次兩粒」、「飯後服」 (Medi)",
            "只能在不吃飯的那天服用) (Context: 用藥指示與服藥劑量：「每日三次」、「每次兩粒」、「飯後服」 (Medi)",
            "把藥物混合米飯一起吞食) (Context: 用藥指示與服藥劑量：「每日三次」、「每次兩粒」、「飯後服」 (Medi)"
          ],
          "answerIndex": 0,
          "explanation": "「飯後服」指在用餐結束後適當時間服用以減少藥物對胃黏膜之刺激。"
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
    "title": "香港醫療體系與急症求助：「公立醫院」、「私家診所」、「急症室」、「打999」 (HK Healthcare & Emergency)",
    "level": "A2",
    "objective": "掌握香港公私營醫療體系（公立醫院、私家診所、急症室分流）、緊急呼救（打999叫白車）及請病假（病假紙/醫生紙）。",
    "presentation": {
      "explanation": "香港擁有雙軌制之公立與私家醫療系統，並建有一套高效運作之緊急求助與勞工病假法律保障制度：\n\n一、香港公私營醫療機構深度解析：\n１．「公立醫院」（gung1 laap6 ji1 jyun2）：醫院管理局（HA）統籌管轄之大型公立醫院（如瑪麗醫院、伊利沙伯醫院、威爾斯親王醫院），收費親民但非緊急專科門診輪候時間較長。\n２．「私家醫院 / 私家診所」（si1 gaa1 ji1 jyun2 / can2 so2）：私人營辦之各類專科與全科醫療機構（如養和醫院、港安醫院），預約靈活便捷但收費標準較高。\n３．「急症室」（gap1 zing3 sat1）：公立醫院二十四小時運作之急症科部門，實施嚴格五級分流制度（第一類危殆、第二類危急、第三類緊急、第四類次緊急、第五類非緊急）。\n\n二、緊急求救與救護車專用語彙：\n１．「打999」（daa2 gau2 gau2 gau2）：香港特區官方統一緊急求助、報警與召喚救護車之專線電話。\n２．「叫白車 / 叫救護車」（giu3 baak6 ce1 / giu3 gau3 wu6 ce1）：呼叫緊急醫療救護車。「白車」為香港全體市民對白色救護車之專屬經典口語。\n\n三、職場就醫與請病假專用詞彙：\n１．「病假紙 / 醫生紙」（beng6 gaa3 zi2 / ji1 sang1 zi2）：香港註冊醫生簽發之合法病假證明書（Medical Certificate），乃向僱主請病假之法定必備憑證。\n２．「請一日病假」（cing2 jat1 jat6 beng6 gaa3）：因身體不適向公司或學校請假一天休養。\n３．「覆診」（fuk1 can2）：病情好轉或需要持續跟進時再次回醫院診所接受檢查覆查。\n\n四、急救分流常識與應對指引：\n在急症室登記後，分流護士會即時評估生命體徵。非緊急病患需耐心在大堂等候，危重傷病患者則享有絕對優先搶救權利。 突發重症緊急求助立即「致電999叫救護車」送往公立醫院「急症室」，日常輕症則就近尋訪社區「私家西醫診所」，醫療資源分工清晰有序。",
      "examples": [
        {
          "target": "如果屋企有人突然昏迷不醒，要即刻打九九九叫白車送去急症室！",
          "reading": "jyu4 gwo2 uk1 kei2 jau5 jan4 tat1 jin4 fan1 mai4 bat1 seng2, jiu3 zik1 hak1 daa2 gau2 gau2 gau2 giu3 baak6 ce1 sung3 heoi3 gap1 zing3 sat1! [jyː˨˩ kʷɔː˧˥ ʊk̚˥ kʰei˧˥ jɐu˩˧ jɐn˨˩ tʰɐt̚˥ jiːn˨˩ fɐn˥ mɐi˨˩ pɐt̚˥ sɛːŋ˧˥, jiu˧ tsɪk̚˥ hɐk̚˥ daː˧˥ kɐu˧˥ kɐu˧˥ kɐu˧˥ kiːu˧ paːk̚˨ tsʰɛː˥ sʊŋ˧ hɵy˧ kɐp̚˥ tsɪŋ˧ sɐt̚˥!] (YU-GWOH OOK-KAY YAU-YUN TUT-YEEN FUN-MY BUT-SENG, YEW JIK-HUK DY GAU-GAU-GAU GIU BAHK-CHEH SOONG HOEY GUP-JING-SUT!)",
          "translation": "If someone at home suddenly falls unconscious, call 999 immediately for an ambulance to rush to the A&E!"
        },
        {
          "target": "醫生幫我開咗兩日病假紙，等我可以喺屋企好好休息幾日。",
          "reading": "ji1 sang1 bong1 ngo5 hoi1 zo2 loeng5 jat6 beng6 gaa3 zi2, dang2 ngo5 ho2 ji5 hai2 uk1 kei2 hou2 hou2 jau1 sik1 gei2 jat6. [jiː˥ sɐŋ˥ pɔːŋ˥ ŋɔː˩˧ hɔːi˥ tsɔː˧˥ lœːŋ˩˧ jɐt˨ pɪŋ˨ kaː˧ tsiː˧˥, tɐŋ˧˥ ŋɔː˩˧ hɔː˧˥ jiː˩˧ hɐi˩˧ ʊk̚˥ kʰei˧˥ hou˧˥ hou˧˥ jɐu˥ sɪk̚˥ kei˧˥ jɐt˨] (YEE-SUNG BONG NGOH HOI-JOR LEUNG-YUT BENG-GAH-JEE, DUNG NGOH HOH-YEE HY OOK-KAY HOH-HOH YAU-SIK GAY-YUT)",
          "translation": "The doctor issued a two-day sick leave certificate for me so that I can rest well at home for a few days."
        },
        {
          "target": "急症室分流站護士會按照傷病嚴重程度決定邊個優先睇醫生。",
          "reading": "gap1 zing3 sat1 fan1 lau4 zaam6 gu1 neong4 wui5 on3 ziu3 soeng1 beng6 jim4 zung6 cing4 dou6 kyut3 ding6 bin1 go3 jau1 sin1 tai2 ji1 sang1. [kɐp̚˥ tsɪŋ˧ sɐt̚˥ fɐn˥ lɐu˨˩ tsaːm˨ kuː˥ nœːŋ˨˩ wuːi˩˧ ɔːn˧ tsiːu˧ sœːŋ˥ pɪŋ˨ jiːm˨˩ tsʊŋ˨ tsʰɪŋ˨˩ tou˨ kʰyːt̚˧ tɪŋ˨ piːn˥ kɔː˧ jɐu˥ siːn˥ tʰɐi˧˥ jiː˥ sɐŋ˥] (GUP-JING-SUT FUN-LAU-JAHM GOO-NEUNG WUI ON-JEW SEUNG-BENG YEEM-JOONG CHING-DOU KUET-DING BEEN-GOH YAU-SEEN TY YEE-SUNG)",
          "translation": "The triage nurse at the A&E will prioritize who sees the doctor first based on the severity of the injury or illness."
        }
      ],
      "mnemonics": [
        "【急救求醫歌】緊急危難「打999」，呼叫「白車」急症收；看病請假「醫生紙」，公私分流保康籌！"
      ],
      "culturalNotes": [
        "在香港日常俚語中，「叫白車」係呼叫救護車之唯一大眾俗稱（源於香港消防處救護車通體白色外觀）。而向公司或學校請病假時所需的醫療證明書，口語一律稱為「病假紙」或「醫生紙」，極具香港職場文化特點。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【應急呼救】在香港遇到突發重病或嚴重事故欲呼叫救護車，應撥打之緊急求助電話號碼係：",
          "options": [
            "999 (Emergency Hotline)",
            "911",
            "110",
            "120"
          ],
          "answerIndex": 0,
          "explanation": "香港之統一緊急求助報警與救護電話號碼為 999。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【職場就醫】在香港向公司主管請病假，必備出具由註冊醫生簽發之證明文件，俗稱係：",
          "options": [
            "病假紙 / 醫生紙 (beng6 gaa3 zi2 / ji1 sang1 zi2)",
            "收據單 (sau1 geoi3 daan1)",
            "車飛 (ce1 fei1)",
            "八達通卡 (baat3 daat6 tung1 kaat1)"
          ],
          "answerIndex": 0,
          "explanation": "醫生簽發之合法病假證明在香港俗稱為「病假紙」或「醫生紙」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【俚語識別】香港市民日常俗稱緊急送院之白色救護車為：",
          "options": [
            "白車 (baak6 ce1 / Ambulance)",
            "的士 (dik1 si2)",
            "小巴 (siu2 baa1)",
            "叮叮 (ding1 ding1)"
          ],
          "answerIndex": 0,
          "explanation": "救護車在香港廣泛俗稱為「白車」（baak6 ce1）。"
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
    "title": "意願與必然助動詞：「想」、「要」、「諗住」 (Volition, Necessity, & Intention: soeng2, jiu3, lam2 zyu6)",
    "level": "A2",
    "objective": "掌握粵語核心意願與必然助動詞（想、要、諗住）之語義分工、否定轉換規則（要之否定為「唔使」而非「唔要」）與正反問句結構。",
    "presentation": {
      "explanation": "粵語情態助動詞系統極其豐富精準，在表達說話者之主觀願望、客觀必要性與未來行動計劃時，展現出高度嚴密之語法規則與構詞分工：\n\n一、核心意願與必然助動詞語義深度辨析：\n１．「想」（soeng2）：表達主觀意願、內心希望或心理渴求（相當於英語之 want to / wish to）。例如「我想學廣東話」（我希望學習粵語）、「你想唔想飲咖啡？」（你想喝咖啡嗎？）。\n２．「要」（jiu3）：表達客觀必然性、義務約束或強烈指令需求（相當於英語之 must / need to / have to）。例如「我聽朝要早起返工」（我明天早晨必須早起上班）。\n３．「諗住」（lam2 zyu6）：由動詞「諗」（思考）與持續體助詞「住」複合而成，專門表達心理正在醞釀之打算、計劃或意圖（相當於英語之 intend to / plan to）。例如「我聽日諗住去旺角買書」（我明天打算去旺角買書）。\n\n二、情態否定之關鍵不對稱轉換法則：\n粵語助動詞之否定形式存在極具特色之語法分化，學習者務必嚴格區分：\n１．「想」之否定為「唔想」（m4 soeng2）：表示「不想、不願」。例如「我今晚好攰，唔想出街食飯」。\n２．「要」表必要性時，其否定嚴格為「唔使」（m4 sai2，不必/不需要），絕對不可說成「唔要」！「唔要」（m4 jiu3）在粵語中專指「拒絕接受某項實體物品或提議」（例如「我唔要呢個蘋果」），若表達「不需要做某動作」，語法上必須轉換為「唔使」（例如「你聽日唔使加班」）。\n３．「諗住」之否定通常採用「冇諗住」（mou5 lam2 zyu6）：表示「原本沒有打算」。\n\n三、正反問句（A-not-A）構造規則：\n- 「想唔想」：例如「你今晚想唔想一齊食飯？」\n- 「要唔要 / 使唔使」：詢問必要性常用「使唔使」（例如「聽日使唔使著西裝？」），詢問索取物品常用「要唔要」（例如「你要唔要加糖？」）。",
      "examples": [
        {
          "target": "我今個週末諗住留喺屋企溫習，因為下個禮拜要應付日文考試。",
          "reading": "ngo5 gam1 go3 zau1 mut6 lam2 zyu6 lau4 hai2 uk1 kei2 wan1 zaap6, jan1 wai6 haa6 go3 lai5 baai3 jiu3 jing3 fu6 jat6 man42 haau2 si3. [ŋɔː˩˧ kɐm˥ kɔː˧ tsɐu˥ muːt̚˨ lɐm˧˥ tsyː˨ lɐu˨˩ hɐi˩˧ ʊk̚˥ kʰei˧˥ wɐn˥ tsaːp̚˨, jɐn˥ wɐi˨ haː˨ kɔː˧ lɐi˩˧ paːi˧ jiu˧ jɪŋ˧ fuː˨ jɐt˨ mɐn˨˩ haːu˧˥ siː˧] (NGOH GUM-GOH JAU-MOOT LUM-JYU LAU HY OOK-KAY WUN-JAHK, YUN-WAI HAH-GOH LY-BY YEW YING-FOO YUT-MUN HAU-SEE)",
          "translation": "I plan to stay home this weekend to study, because next week I must handle a Japanese examination."
        },
        {
          "target": "你如果唔舒服就早啲返去休息啦，聽日朝早嘅早會唔使出席㗎喇。",
          "reading": "nei5 jyu4 gwo2 m4 syu1 fuk6 zau6 zou2 di1 faan1 heoi3 jau1 sik1 laa1, ting1 jat6 ziu1 zou2 ge3 zou2 wui6 m4 sai2 ceot1 zik6 gaa3 laa3. [nei˩˧ jyː˨˩ kʷɔː˧˥ m̩˨˩ syː˥ fʊk̚˨ tsɐu˨ tsou˧˥ tiː˥ faːn˥ hɵy˧ jɐu˥ sɪk̚˥ laː˥, tʰɪŋ˥ jɐt˨ tsiːu˥ tsou˧˥ kɛː˧ tsou˧˥ wuːi˨ m̩˨˩ sɐi˧˥ tsʰɵt̚˥ tsɪk̚˨ kaː˧ laː˧] (NEI YU-GWOH M-SYU-FOOK JAU JOU-DEE FAHN-HOEY YAU-SIK LAH, TING-YUT JIU-JOU GEH JOU-WOEY M-SY CHUT-JIK GAH-LAH)",
          "translation": "If you are unwell, go back and rest early; you do not need to attend tomorrow morning's early meeting."
        },
        {
          "target": "老細問你下個月想唔想調去中環總部負責新嘅科技項目？",
          "reading": "lou5 sai3 man6 nei5 haa6 go3 jyut6 soeng2 m4 soeng2 diu6 heoi3 zung1 waan4 zung2 bou6 fu6 zaak3 san1 ge3 fo1 gei6 hong6 muk6? [lou˧˥ sɐi˧ mɐn˨ nei˩˧ haː˨ kɔː˧ jyːt̚˨ sœːŋ˧˥ m̩˨˩ sœːŋ˧˥ tiːu˨ hɵy˧ tsʊŋ˥ waːn˨˩ tsʊŋ˧˥ pou˨ fuː˨ tsaːk̚˧ sɐn˥ kɛː˧ fɔː˥ kei˨ hɔːŋ˨ mʊk̚˨?] (LOU-SY MUN NEI HAH-GOH YUET SEUNG-M-SEUNG DEW-HOEY JOONG-WAHN JOONG-BOU FOO-JAHK SUN-GEH FOH-GAY HONG-MOOK?)",
          "translation": "The boss asked if you would like to transfer to the Central headquarters next month to lead the new tech project."
        }
      ],
      "mnemonics": [
        "【助動詞三字訣】主觀希望講「我想」，客觀必須用「我要」；心中計劃「我諗住」，不必去做「你唔使」！"
      ],
      "culturalNotes": [
        "在粵語日常交際中，否定「必須做某事」時極忌講成「唔要做」，因為「唔要」帶有強烈的主觀排斥與厭惡語氣；正確且禮貌之說法一律為「唔使做」（不必做），充分體現嶺南人情世故之溫和與客氣。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【情態否定】若主管告知員工明天是公眾假期，「不需要來公司上班」，最地道之粵語表達係：",
          "options": [
            "你聽日唔使返工。 (nei5 ting1 jat6 m4 sai2 faan1 gung1.)",
            "你聽日唔要返工。) (Context: 意願與必然助動詞：「想」、「要」、「諗住」 (Volition, Ne)",
            "你聽日唔想返工。) (Context: 意願與必然助動詞：「想」、「要」、「諗住」 (Volition, Ne)",
            "你聽日唔諗住返工。) (Context: 意願與必然助動詞：「想」、「要」、「諗住」 (Volition, Ne)"
          ],
          "answerIndex": 0,
          "explanation": "「要」（必須）之情態否定為「唔使」（不必/不需要）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【意圖表達】欲表達自己「原本打算週末去圖書館看書」，應使用之助動詞係：",
          "options": [
            "我週末諗住去圖書館睇書。 (ngo5 zau1 mut6 lam2 zyu6 heoi3 tou4 syu1 gun2 tai2 syu1.)",
            "我週末搭去圖書館睇書。) (Context: 意願與必然助動詞：「想」、「要」、「諗住」 (Volition, Ne)",
            "我週末轉去圖書館睇書。) (Context: 意願與必然助動詞：「想」、「要」、「諗住」 (Volition, Ne)",
            "我週末落去圖書館睇書。) (Context: 意願與必然助動詞：「想」、「要」、「諗住」 (Volition, Ne)"
          ],
          "answerIndex": 0,
          "explanation": "「諗住」（lam2 zyu6）表示心中的打算或計劃。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語義辨析】在粵語中，「你要唔要加糖？」與「你使唔使加糖？」之細微語意差異為：",
          "options": [
            "「要唔要」詢問是否想要具體物品糖，「使唔使」詢問客觀上是否需要進行加糖動作 (Want item vs. Need action)",
            "兩者完全相反，「要唔要」表示拒絕) (Context: 意願與必然助動詞：「想」、「要」、「諗住」 (Volition, Ne)",
            "「使唔使」只能對長輩使用) (Context: 意願與必然助動詞：「想」、「要」、「諗住」 (Volition, Ne)",
            "「要唔要」只能在茶餐廳點凍飲時使用) (Context: 意願與必然助動詞：「想」、「要」、「諗住」 (Volition, Ne)"
          ],
          "answerIndex": 0,
          "explanation": "「要唔要」側重於主觀是否索取物品，「使唔使」側重於客觀是否有必要進行某動作。"
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
    "title": "習得能力與生理潛能助動詞：「識」同「識得」 (Acquired Knowledge & Skills: sik1, sik1 dak1)",
    "level": "A2",
    "objective": "掌握粵語助動詞「識」與「識得」在表達後天學習技能（語言、駕駛、游泳）與認識人物/文字時之語法功能與否定形式（唔識）。",
    "presentation": {
      "explanation": "在粵語情態範疇中，「識」（sik1）與其複合形式「識得」（sik1 dak1）係最核心之「後天習得技能」與「認知識別」助動詞：\n\n一、「識」之雙重語法功能深度剖析：\n１．作為助動詞（後接動詞短語）：專門表示「通過後天學習、訓練或經驗累積而掌握某種特定技能」（相當於英語之 know how to do）。\n- 「識講廣東話」（掌握粵語口語表達能力）\n- 「識游水」（掌握游泳技能）\n- 「識揸車」（擁有駕駛汽車技術）\n- 「識煮飯」（懂得烹飪做菜料理）\n２．作為及物動詞（後接名詞短語）：表示「認識某人、知曉某項事實或辨識某文字標誌」（相當於英語之 know a person / recognize a character）。\n- 「我識得佢好多年喇」（我認識他很多年了）\n- 「你識唔識呢個漢字點讀？」（你認識這個漢字怎麼讀嗎？）。\n\n二、「識」與「識得」之語法微觀差異：\n１．單音節「識」口語通用性極強，可自由修飾各類動詞與名詞賓語（如「識游水」、「識法文」、「識好多朋友」）。\n２．雙音節「識得」語氣較為正式、莊重且具備肯定強調意味，常用於辨識人物、文字或抽象知識（如「我識得去嗰個地方嘅路」）。\n\n三、否定與提問句式結構：\n１．否定結構：統一採用「唔識」（m4 sik1）或「唔識得」（m4 sik1 dak1）。例如「我唔識游水」（我不會游泳）、「我唔識呢個人」（我不認識這個人）。\n２．正反問句：構建為「識唔識……？」。例如「你識唔識用呢部新型影印機呀？」。",
      "examples": [
        {
          "target": "我嚟咗香港三年，依家唔單止聽得明，仲識講好流利嘅廣東話添。",
          "reading": "ngo5 lai4 zo2 hoeng1 gong2 saam1 nin4, ji1 gaa1 m4 daan1 zi2 tai2 dak1 ming4, zung6 sik1 gong2 hou2 lau4 lei6 ge3 gong2 dung1 waa2 tim1. [ŋɔː˩˧ lɐi˨˩ tsɔː˧˥ hœːŋ˥ kɔːŋ˧˥ saːm˥ niːn˨˩, jiː˥ kaː˥ m̩˨˩ taːn˥ tsiː˧˥ tʰɐi˧˥ tɐk̚˥ mɪŋ˨˩, tsʊŋ˨ sɪk̚˥ kɔːŋ˧˥ hou˧˥ lɐu˨˩ lei˨ kɛː˧ kɔːŋ˧˥ tʊŋ˥ waː˧˥ tʰiːm˥] (NGOH LY-JOR HEUNG-GONG SAHM-NEEN, YEE-GAH M-DAHN-JEE TY-DUK-MING, JOONG SIK GONG HOH LAU-LEY GEH GONG-DOONG-WAH TEEM)",
          "translation": "I have been in Hong Kong for three years; now not only can I understand, but I also know how to speak very fluent Cantonese."
        },
        {
          "target": "佢雖然考到私家車車牌，但係平時好少揸車，所以唔識泊位。",
          "reading": "keoi5 seoi1 jin4 haau2 dou2 si1 gaa1 ce1 ce1 paai4, daan6 hai6 ping4 si4 hou2 siu2 zaa1 ce1, so2 ji5 m4 sik1 paak3 wai62. [kʰɵy˩˧ sɵy˥ jiːn˨˩ haːu˧˥ tou˧˥ siː˥ kaː˥ tsʰɛː˥ tsʰɛː˥ pʰaːi˨˩, taːn˨ hɐi˨ pʰɪŋ˨˩ siː˨˩ hou˧˥ siu˧˥ tsaː˥ tsʰɛː˥, sɔː˧˥ jiː˩˧ m̩˨˩ sɪk̚˥ pʰaːk̚˧ wɐi˧˥] (KUY SOEY-YEEN HAU-DOU SEE-GAH-CHEH CHEH-PY, DAHN-HY PING-SEE HOH-SIU JAH-CHEH, SOH-YEE M-SIK PAHK-WY)",
          "translation": "Although he passed his private car driving test, he seldom drives usually, so he doesn't know how to park in a parking space."
        },
        {
          "target": "請問診所入面有冇姑娘識得講西班牙話或者普通話？",
          "reading": "cing2 man6 can2 so2 jap6 min6 jau5 mou5 gu1 neong4 sik1 dak1 gong2 sai1 baan1 ngaa4 waa2 waak6 ze2 pou2 tung1 waa2? [tsʰɪŋ˧˥ mɐn˨ tsʰɐn˧˥ sɔː˧˥ jɐp̚˨ miːn˨ jɐu˩˧ mou˩˧ kuː˥ nœːŋ˨˩ sɪk̚˥ tɐk̚˥ kɔːŋ˧˥ sɐi˥ paːn˥ ŋaː˨˩ waː˧˥ waːk˨ tsɛː˧˥ pʰou˧˥ tʰʊŋ˥ waː˧˥?] (CHING-MUN CHUN-SOH YUP-MEEN YAU MOU GOO-NEUNG SIK-DUK GONG SY-BAHN-NGAH-WAH WAHK-JEH POU-TOONG-WAH?)",
          "translation": "May I ask if there are any nurses in the clinic who know how to speak Spanish or Mandarin?"
        }
      ],
      "mnemonics": [
        "【技能習得歌】後天學習掌握好，講句「我識」技能高；認人識字「我識得」，不會做事「我唔識」！"
      ],
      "culturalNotes": [
        "在香港多元國際化環境中，「識講幾多種語言」係職場競爭力之重要指標。港人日常讚賞他人語言能力強時，常講「佢好叻，識講四國語言」（他很厲害，懂得講四國語言）。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【技能助動詞】欲表達「他通過後天學習掌握了烹飪與駕駛技術」，正確之粵語助動詞句式係：",
          "options": [
            "佢識煮飯同埋識揸車。 (keoi5 sik1 zyu2 faan6 tung4 maai4 sik1 zaa1 ce1.)",
            "佢要煮飯同埋要揸車。) (Context: 習得能力與生理潛能助動詞：「識」同「識得」 (Acquired Kno)",
            "佢想煮飯同埋想揸車。) (Context: 習得能力與生理潛能助動詞：「識」同「識得」 (Acquired Kno)",
            "佢諗住煮飯同埋諗住揸車。) (Context: 習得能力與生理潛能助動詞：「識」同「識得」 (Acquired Kno)"
          ],
          "answerIndex": 0,
          "explanation": "「識」（sik1）專門用於表示後天學會之各類技能。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【正反問句】向新朋友禮貌詢問「你懂得游泳嗎？」，地道之粵語提問係：",
          "options": [
            "你識唔識游水呀？ (nei5 sik1 m4 sik1 jau4 seoi2 aa3?)",
            "你搭唔搭游水呀？) (Context: 習得能力與生理潛能助動詞：「識」同「識得」 (Acquired Kno)",
            "你轉唔轉游水呀？) (Context: 習得能力與生理潛能助動詞：「識」同「識得」 (Acquired Kno)",
            "你落唔落游水呀？) (Context: 習得能力與生理潛能助動詞：「識」同「識得」 (Acquired Kno)"
          ],
          "answerIndex": 0,
          "explanation": "技能正反問句結構為「識唔識……？」（Do you know how to...?）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語義範疇】下列哪一項最準確描述了助動詞「識」（sik1）之核心語言學功能？",
          "options": [
            "表示通過後天學習、培訓而具備之技能或認知 (Learned ability or cognition)",
            "表示客觀法律或規則之強制義務) (Context: 習得能力與生理潛能助動詞：「識」同「識得」 (Acquired Kno)",
            "表示生理構造之本能反應) (Context: 習得能力與生理潛能助動詞：「識」同「識得」 (Acquired Kno)",
            "表示瞬時完成之動作體貌) (Context: 習得能力與生理潛能助動詞：「識」同「識得」 (Acquired Kno)"
          ],
          "answerIndex": 0,
          "explanation": "「識」在語法上專門表達後天習得之能力或認知識別。"
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
    "title": "許可、客觀條件與能力助動詞：「可以」同「能夠」 (Permission & Possibility: ho2 ji5, nang4 gau3)",
    "level": "A2",
    "objective": "掌握粵語情態助動詞「可以」與「能夠」在表達社會許可（Permission）、客觀條件允許（Possibility）與能力極限時之語法規則。",
    "presentation": {
      "explanation": "在粵語情態體系中，「可以」（ho2 ji5）與「能夠」（nang4 gau3）承載著請求許可、判定客觀客體條件與表達潛在能力之重要語法功能：\n\n一、「可以」之三大核心語用範疇：\n１．表達社會許可與授權（Permission）：表示規則、法律或長輩主管允許進行某項行為（相當於英語之 may / can）。\n- 「呢度可唔可以影相？」（這裡可以拍照嗎？）\n- 「你可以入去喇」（你可以進去了）。\n２．表達客觀環境條件允許（Possibility / Opportunity）：表示外部客觀條件成熟、具備可能性。\n- 「搭地鐵可以避開紅磡海底隧道嘅大塞車」（搭乘地鐵可以避開紅隧大堵車）。\n３．表達禮貌請求與協商（Polite Request）：置於句首以正反問句形式提出委婉請求。\n- 「可唔可以借你部電腦用五分鐘？」（可以借你的電腦用五分鐘嗎？）。\n\n二、「能夠」之正式語體色彩與語意極限：\n１．「能夠」（nang4 gau3）具備較高之書面語體與正式公文色彩，側重於表達主體具備足夠力量、資源或客觀條件克服困難達成目標（相當於英語之 be capable of / be in a position to）。\n- 「我哋希望能夠喺年底前完成所有系統升級工程」。\n\n三、否定與答問模式：\n１．請求許可之肯定回答：「可以呀 / 梗係可以啦」（當然可以）。\n２．請求許可之否定回答：「唔可以」（不可/不行/嚴禁）。例如「圖書館入面唔可以大聲講嘢」。\n３．正反問句標準句型：「可唔可以＋動詞短語……？」",
      "examples": [
        {
          "target": "請問我可唔可以借用你張八達通拍卡出閘，因為我張卡啱啱唔見咗。",
          "reading": "cing2 man6 ngo5 ho2 m4 ho2 ji5 ze3 jung6 nei5 zoeng1 baat3 daat6 tung1 paak3 kaat1 ceot1 zaap6, jan1 wai6 ngo5 zoeng1 kaat1 aam1 aam1 m4 gin3 zo2. [tsʰɪŋ˧˥ mɐn˨ ŋɔː˩˧ hɔː˧˥ m̩˨˩ hɔː˧˥ jiː˩˧ tsɛː˧ jʊŋ˨ nei˩˧ tsœːŋ˥ paːt̚˧ taːt̚˨ tʰʊŋ˥ pʰaːk̚˧ kʰaːt̚˥ tsʰɵt̚˥ tsaːp̚˨, jɐn˥ wɐi˨ ŋɔː˩˧ tsœːŋ˥ kʰaːt̚˥ aːm˥ aːm˥ m̩˨˩ kiːn˧ tsɔː˧˥] (CHING-MUN NGOH HOH-M-HOH-YEE JEH-YOONG NEI JEUNG BAHK-DAHT-TOONG PAHK-KAHT CHUT-JAHK, YUN-WAI NGOH JEUNG KAHT AHM-AHM M-GEEN-JOR)",
          "translation": "May I please borrow your Octopus card to tap through the exit gate, because I just lost my card."
        },
        {
          "target": "呢度係非吸煙區，全座大廈範圍內都唔可以食煙，違者會被罰款。",
          "reading": "ni1 dou6 hai6 fei1 kap1 jin1 keoi1, cyun4 zo6 daai6 haa6 faan4 wai4 noi6 dou1 m4 ho2 ji5 sik6 jin1, wai4 ze2 wui5 bei6 fat6 fun2. [niː˥ tou˨ hɐi˨ fei˥ kʰɐp̚˥ jiːn˥ kʰɵy˥, tsʰyːn˨˩ tsɔː˨ taːi˨ haː˨ faːn˨˩ wɐi˨˩ nɔːi˨ tou˥ m̩˨˩ hɔː˧˥ jiː˩˧ sɪk̚˨ jiːn˥, wɐi˨˩ tsɛː˧˥ wuːi˩˧ pei˨ fɐt̚˨ fun˧˥] (NEE-DOU HY FEY-KUP-YEEN KOEY, CHUEN-JOH DY-HAH FAHN-WY-NOY DOH M-HOH-YEE SIK-YEEN, WY-JEH WUI BAY FUT-FOON)",
          "translation": "This is a non-smoking area; smoking is not permitted anywhere within the entire building, and violators will be fined."
        },
        {
          "target": "我哋只要團結一致，就一定能夠克服呢次經濟危機帶嚟嘅挑戰。",
          "reading": "ngo5 dei6 zi2 jiu3 tyun4 git3 jat1 zi3, zau6 jat1 ding6 nang4 gau3 hak1 fuk6 ni1 ci3 ging1 zai3 ngai4 gei1 daai3 lai4 ge3 tiu1 zin3. [ŋɔː˩˧ tei˨ tsiː˧˥ jiu˧ tʰyːn˨˩ kiːt̚˧ jɐt̚˥ tsiː˧, tsɐu˨ jɐt̚˥ tɪŋ˨ nɐŋ˨˩ kɐu˧ hɐk̚˥ fʊk̚˨ niː˥ tsʰiː˧ kɪŋ˥ tsɐi˧ ŋɐi˨˩ kei˥ taːi˧ lɐi˨˩ kɛː˧ tʰiːu˥ tsiːn˧] (NGOH-DAY JEE-YEW TUEN-GEET YUT-JEE, JAU YUT-DING NUNG-GAU HUK-FOOK NEE-CHEE GING-JAI NGY-GAY DY-LY GEH TEW-JEEN)",
          "translation": "As long as we unite as one, we will definitely be able to overcome the challenges brought by this economic crisis."
        }
      ],
      "mnemonics": [
        "【許可請求訣】請求批准「可唔可以」，客觀允許「就可以」；規則嚴禁「唔可以」，克服困難「定能夠」！"
      ],
      "culturalNotes": [
        "在香港商務溝通與公共服務交涉時，「可唔可以唔該你……」（能否麻煩您……）係最得體之高情商禮貌句式，將助動詞「可以」與禮貌詞「唔該」結合，展現出極佳之教養。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【禮貌請求】在會議中欲禮貌請求同事「能否把窗戶關上」，最得體之粵語句式係：",
          "options": [
            "可唔可以唔該你幫手閂埋隻窗？ (ho2 m4 ho2 ji5 m4 goi1 nei5 bong1 sau2 saan1 maai4 zek3 coeng1?)",
            "你一定要閂埋隻窗！) (Context: 許可、客觀條件與能力助動詞：「可以」同「能夠」 (Permission)",
            "你識唔識閂埋隻窗？) (Context: 許可、客觀條件與能力助動詞：「可以」同「能夠」 (Permission)",
            "你諗住閂埋隻窗未？) (Context: 許可、客觀條件與能力助動詞：「可以」同「能夠」 (Permission)"
          ],
          "answerIndex": 0,
          "explanation": "「可唔可以唔該你……」係表達禮貌請求之最標準句式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【規則禁令】公共場所張貼告示標明「嚴禁飲食」，口語化之粵語解釋係：",
          "options": [
            "呢度唔可以食嘢同飲水。 (ni1 dou6 m4 ho2 ji5 sik6 je5 tung4 jam2 seoi2.)",
            "呢度唔識食嘢同飲水。) (Context: 許可、客觀條件與能力助動詞：「可以」同「能夠」 (Permission)",
            "呢度唔諗住食嘢同飲水。) (Context: 許可、客觀條件與能力助動詞：「可以」同「能夠」 (Permission)",
            "呢度唔使食嘢同飲水。) (Context: 許可、客觀條件與能力助動詞：「可以」同「能夠」 (Permission)"
          ],
          "answerIndex": 0,
          "explanation": "「唔可以」表示規則禁止或不被許可（Not allowed）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法辨析】當別人詢問「我可唔可以坐呢度呀？」，若表示「可以，請坐」，最自然之道地回應為：",
          "options": [
            "可以呀，請坐啦！ (ho2 ji5 aa3, cing2 co5 laa1!)",
            "識得呀，請坐啦！) (Context: 許可、客觀條件與能力助動詞：「可以」同「能夠」 (Permission)",
            "要呀，請坐啦！) (Context: 許可、客觀條件與能力助動詞：「可以」同「能夠」 (Permission)",
            "諗住呀，請坐啦！) (Context: 許可、客觀條件與能力助動詞：「可以」同「能夠」 (Permission)"
          ],
          "answerIndex": 0,
          "explanation": "回答許可請求正向確認時使用「可以呀」（ho2 ji5 aa3）。"
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
    "title": "後置潛能助詞與情態助動詞：「得」之雙重語法功能 (The Versatile Modal 'dak1')",
    "level": "A2",
    "objective": "掌握粵語多功能情態詞「得」（dak1）之雙重語法定位：後置可能補語助詞（V+得 / V+唔+得）與獨立情態謂語（得/唔得）。",
    "presentation": {
      "explanation": "在粵語語法體系中，「得」（dak1）係極具靈活性與表現力之核心情態助詞，其在句法結構中主要扮演兩大關鍵角色：\n\n一、後置可能補語助詞（Post-Verbal Potential Complement：動詞 ＋ 得）：\n「得」緊跟在動詞之後，表達該動作「具備可行性、狀態已就緒、客觀上可以進行或被允許」：\n１．「食得」（sik6 dak1）：食物已經烹飪煮熟可以開動進食（如「飯餸煮好，食得喇！」），或指某物質安全可供食用（如「呢種野菇食唔得㗎」）。\n２．「行得」（haang4 dak1）：道路暢通可以通行，或傷者腿部痊癒可以行走。\n３．「走得」（zau2 dak1）：事情處理完畢可以離開（如「開完會，大家走得喇」）。\n４．「用得」（jung6 dak1）：設備功能正常可以使用（如「部電腦整好，用得喇」）。\n\n二、可能補語之否定句型結構（V ＋ 唔 ＋ 得 / 唔 ＋ V ＋ 得）：\n表達「某動作不可行或被禁止」時：\n- 「食唔得 / 唔食得」（不能吃/不可食用）\n- 「去唔到 / 去唔得」（無法前往/去不成）\n- 「講唔得 / 唔講得」（不可洩漏/說不得）。\n\n三、獨立情態謂語與正反問答（得 / 唔得）：\n１．作為獨立謂語表示「行、可行、可以、沒問題」：\n- 問句：「聽日朝早九點交報告，得唔得？」（明天早晨九點交報告，行不行？）\n- 肯定回答：「得！」（行！沒問題！）或「得咗！」（成功搞定了！）\n- 否定回答：「唔得！」（不行！不可以！不行做不到！）。",
      "examples": [
        {
          "target": "啲點心啱啱蒸好，好熱㗎，等陣先食得，小心燙親把口呀！",
          "reading": "di1 dim2 sam1 aam1 aam1 zing1 hou2, hou2 jit6 gaa3, dang2 zan6 sin1 sik6 dak1, siu2 sam1 tong3 can1 baa2 hau2 aa3! [tiː˥ tiːm˧˥ sɐm˥ aːm˥ aːm˥ tsɪŋ˥ hou˧˥, hou˧˥ jiːt̚˨ kaː˧, tɐŋ˧˥ tsɐn˨ siːn˥ sɪk̚˨ tɐk̚˥, siu˧˥ sɐm˥ tʰɔːŋ˧ tsʰɐn˥ paː2 hɐu˧˥ aː˧!] (DEE DEEM-SUM AHM-AHM JING-HOH, HOH-YEET GAH, DUNG-JUN SEEN SIK-DUK, SIU-SUM TONG-CHUN BAH-HAU AH!)",
          "translation": "The dim sum is freshly steamed and very hot; wait a moment before it's ready to eat, be careful not to scald your mouth!"
        },
        {
          "target": "你份企劃書改好未呀？如果老細審批通過，我哋聽日就開得工喇。",
          "reading": "nei5 fan6 kei5 waak6 syu1 goi2 hou2 mei6 aa3? jyu4 gwo2 lou5 sai3 sam2 pai1 tung1 gwo3, ngo5 dei6 ting1 jat6 zau6 hoi1 dak1 gung1 laa3. [nei˩˧ fɐn˨ kʰei˧˥ waːk̚˨ syː˥ kɔːi˧˥ hou˧˥ mei˨ aː˧? jyː˨˩ kʷɔː˧˥ lou˧˥ sɐi˧ sɐm˧˥ pʰɐi˥ tʰʊŋ˥ kʷɔː˧, ŋɔː˩˧ tei˨ tʰɪŋ˥ jɐt˨ tsɐu˨ hɔːi˥ tɐk̚˥ kʊŋ˥ laː˧] (NEI FUN KAY-WAHK-SYU GOI-HOH MAY AH? YU-GWOH LOU-SY SUM-PY TOONG-GWO, NGOH-DAY TING-YUT JAU HOI-DUK-GONG LAH)",
          "translation": "Has your proposal been revised yet? If the boss approves it, we can start work tomorrow."
        },
        {
          "target": "今日落咁大雨，條山路好跣，真係行唔得㗎，千祈唔好去行山！",
          "reading": "gam1 jat6 lok6 gam3 daai6 jyu5, tiu4 saan1 lou6 hou2 sin2, zan1 hai6 haang4 m4 dak1 gaa3, cin1 kei4 m4 hou2 heoi3 haang4 saan1! [kɐm˥ jɐt˨ lɔːk̚˨ kɐm˧ taːi˨ jyː˩˧, tʰiːu˨˩ saːn˥ lou˨ hou˧˥ siːn˧˥, tsɐn˥ hɐi˨ haːŋ˨˩ m̩˨˩ tɐk̚˥ kaː˧, tsʰiːn˥ kʰei˨˩ m̩˨˩ hou˧˥ hɵy˧ haːŋ˨˩ saːn˥!] (GUM-YUT LOK GUM DY-YU, TEW SAHN-LOU HOH-SEEN, JUN-HY HAHNG-M-DUK GAH, CHEEN-KAY M-HOH HOEY HAHNG-SAHN!)",
          "translation": "It is raining so heavily today and the mountain path is slippery; it really cannot be walked on, do not go hiking under any circumstances!"
        }
      ],
      "mnemonics": [
        "【情態助詞得】動詞後面跟個「得」，準備就緒「食得喇」；單字問句「得唔得」，乾脆利落「得咗啦」！"
      ],
      "culturalNotes": [
        "香港茶餐廳與酒樓中，「食得喇！」係極具人情味之宣告，代表美味佳餚烹製完畢、全桌親友可以舉筷共嚐。而在職場對話中，一句乾脆俐落之「得！」展現出香港人講求效率、言出必行的辦事風格。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【可能補語】主廚把煲仔飯端上桌，告知顧客「飯已經煮熟可以開始吃了」，最地道之粵語表達係：",
          "options": [
            "煲仔飯整好，食得喇！ (bou1 zai2 faan6 zing2 hou2, sik6 dak1 laa3!)",
            "煲仔飯整好，食識喇！) (Context: 後置潛能助詞與情態助動詞：「得」之雙重語法功能 (The Versat)",
            "煲仔飯整好，食要喇！) (Context: 後置潛能助詞與情態助動詞：「得」之雙重語法功能 (The Versat)",
            "煲仔飯整好，食諗住喇！) (Context: 後置潛能助詞與情態助動詞：「得」之雙重語法功能 (The Versat)"
          ],
          "answerIndex": 0,
          "explanation": "動詞後加「得」（食得）表示動作已經就緒、可以進行。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【協商答問】同事提議「聽日下晝兩點開會，得唔得？」，欲表示「行，沒問題」，應回答：",
          "options": [
            "得，冇問題！ (dak1, mou5 man6 tai4!)",
            "識，冇問題！) (Context: 後置潛能助詞與情態助動詞：「得」之雙重語法功能 (The Versat)",
            "要，冇問題！) (Context: 後置潛能助詞與情態助動詞：「得」之雙重語法功能 (The Versat)",
            "諗住，冇問題！) (Context: 後置潛能助詞與情態助動詞：「得」之雙重語法功能 (The Versat)"
          ],
          "answerIndex": 0,
          "explanation": "獨立情態謂語「得」（dak1）表示同意、可行或沒問題。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【句法功能】短語「部打印機整好，用得喇」中，「用得」之確切語法含義為：",
          "options": [
            "打印機已經修復完畢，具備正常功能可以使用 (Ready/functional to use)",
            "打印機必須強制作業) (Context: 後置潛能助詞與情態助動詞：「得」之雙重語法功能 (The Versat)",
            "打印機很想去工作) (Context: 後置潛能助詞與情態助動詞：「得」之雙重語法功能 (The Versat)",
            "打印機認識很多文件) (Context: 後置潛能助詞與情態助動詞：「得」之雙重語法功能 (The Versat)"
          ],
          "answerIndex": 0,
          "explanation": "「用得」表示設備處於可正常使用之就緒狀態。"
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
    "title": "情態助動詞綜合對比與職場生活實戰交涉 (Comprehensive Modal Contrast & Negotiations)",
    "level": "A2",
    "objective": "綜合融會粵語五大情態範疇（想、要、識、可以、得）與「應該、肯、准」，熟練運用於職場請假、任務協商與項目交涉。",
    "presentation": {
      "explanation": "在職場商務溝通、專案協商與日常社交中，精準混合運用各類情態助動詞係達成高效溝通之關鍵技能：\n\n一、高級情態助動詞擴展矩陣：\n１．「應該」（jing1 goi1）：表達道義責任、合理推論或建議（相當於英語之 should / ought to）。例如「我哋應該遵守合約規定」（我們應該遵守合同條款）。\n２．「肯」（hang2）：表達主觀意願之認同、甘願或答應（相當於英語之 be willing to）。例如「老細肯唔肯批准呢筆預算？」（老闆願不願意批準這筆預算？）。\n３．「准」（zeon2）：表達上級對下級之官方批准或許可（相當於英語之 allow / permit）。例如「公司唔准員工私下兼職」（公司不允許員工私自兼職）。\n\n二、五大核心助動詞職場情境實戰對比：\n１．主觀請假意願：「我想請兩日年假去旅行」（想：個人願望）。\n２．法定義務責任：「我要交齊醫生紙先至申請到病假津貼」（要：客觀制度要求）。\n３．專業技術能力：「佢識寫程式同埋識處理大數據」（識：後天掌握之專業技能）。\n４．上司授權許可：「經理話我可以提早半個鐘放工」（可以：獲得主管許可）。\n５．專案就緒狀態：「份合約改好晒，簽得喇」（得：狀態就緒隨時可行）。\n\n三、高難度職場交涉複合句型：\n- 「如果大家肯加班趕工，呢個項目星期五之前就做得切，唔使延期！」",
      "examples": [
        {
          "target": "如果老細肯批准呢個方案，我哋聽日就可以正式同客戶簽約，成個項目就搞得掂喇。",
          "reading": "jyu4 gwo2 lou5 sai3 hang2 pai1 zeon2 ni1 go3 fong1 on3, ngo5 dei6 ting1 jat6 zau6 ho2 ji5 zing3 sik1 tung4 haak3 wu6 cin1 joek3, seng4 go3 hong6 muk6 zau6 gaau2 dak1 dim6 laa3. [jyː˨˩ kʷɔː˧˥ lou˧˥ sɐi˧ hɐŋ˧˥ pʰɐi˥ tsɵn˧˥ niː˥ kɔː˧ fɔːŋ˥ ɔːn˧, ŋɔː˩˧ tei˨ tʰɪŋ˥ jɐt˨ tsɐu˨ hɔː˧˥ jiː˩˧ tsɪŋ˧ sɪk̚˥ tʰʊŋ˨˩ haːk̚˧ wuː˨ tsʰiːn˥ jœːk̚˧, sɛːŋ˨˩ kɔː˧ hɔːŋ˨ mʊk̚˨ tsɐu˨ kaːu˧˥ tɐk̚˥ tiːm˨ laː˧] (YU-GWOH LOU-SY HUNG-PY-JEUN NEE-GOH FONG-ON, NGOH-DAY TING-YUT JAU HOH-YEE JING-SIK TOONG HAHK-WOO CHEEN-YEUK, SENG-GOH HONG-MOOK JAU GAU-DUK-DEEM LAH)",
          "translation": "If the boss is willing to approve this proposal, we can officially sign the contract with the client tomorrow, and the entire project will be accomplished."
        },
        {
          "target": "你應該先向人事部登記，確認符合資格之後先至可以申請進修津貼。",
          "reading": "nei5 jing1 goi1 sin1 hoeng3 jan4 si6 bou6 dang1 gei3, kok3 jin6 fu4 hap6 zi1 gaak3 zi1 hau6 sin1 zi3 ho2 ji5 san1 cing2 zeon3 sau1 zeon1 tip3. [nei˩˧ jɪŋ˥ kɔːi˥ siːn˥ hœːŋ˧ jɐn˨˩ siː˨ pou˨ tɐŋ˥ kei˧, kʰɔːk̚˧ jiːn˨ fuː˨˩ hɐp̚˨ tsiː˥ kaːk̚˧ tsiː˥ hɐu˨ siːn˥ tsiː˧ hɔː˧˥ jiː˩˧ sɐn˥ tsʰɪŋ˧˥ tsɵn˧ sɐu˥ tsɵn˥ tʰiːp̚˧] (NEI YING-GOI SEEN HEUNG YUN-SEE-BOU DUNG-GAY, KOK-YEEN FOO-HUP JEE-GAK JEE-HAU SEEN-JEE HOH-YEE SUN-CHING JEUN-SAU JEUN-TEEP)",
          "translation": "You should first register with HR, and only after confirming you meet the qualifications can you apply for the education subsidy."
        },
        {
          "target": "我哋部門個個都識用呢套人工智能軟件，所以處理數據做得好快。",
          "reading": "ngo5 dei6 bou6 mun4 go3 go3 dou1 sik1 jung6 ni1 tou3 jan4 gung1 zi3 nang4 jyun5 gin62, so2 ji5 cyu2 lei5 sou3 geoi3 zou6 dak1 hou2 faai3. [ŋɔː˩˧ tei˨ pou˨ muːn˨˩ kɔː˧ kɔː˧ tou˥ sɪk̚˥ jʊŋ˨ niː˥ tʰou˧ jɐn˨˩ kʊŋ˥ tsiː˧ nɐŋ˨˩ jyːn˩˧ kiːn˧˥, sɔː˧˥ jiː˩˧ tsʰyː˧˥ lei˩˧ sou˧ kɵy˧ tsou˨ tɐk̚˥ hou˧˥ faːi˧] (NGOH-DAY BOU-MOON GOH-GOH DOH SIK-YOONG NEE-TOU YUN-GONG JEE-NUNG YUEN-GEEN, SOH-YEE CHU-LY SOU-GOEY JOH-DUK HOH-FY)",
          "translation": "Everyone in our department knows how to use this AI software suite, so we process data very rapidly."
        }
      ],
      "mnemonics": [
        "【情態綜合融會訣】「想」表願望「要」表責，「識」顯技能「可」獲批；「得」字收尾萬事順，職場交涉最得體！"
      ],
      "culturalNotes": [
        "在香港高度專業之商業文化中，精準區分「想」（願望）、「要」（義務）與「可以」（許可）能避免合約談判中之法律漏洞。例如「我想交貨」僅代表主觀意向，而「我要按時交貨」則構成法律責任，體現出商業粵語之嚴謹。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【職場交涉】欲向上級表達「員工全體具備該技術（識），只要老闆願意批準（肯），明天就能正式動工（可以/得）」，應講：",
          "options": [
            "我哋個個都識做，只要老細肯批，聽日就開得工！ (ngo5 dei6 go3 go3 dou1 sik1 zou6, zi2 jiu3 lou5 sai3 hang2 pai1, ting1 jat6 zau6 hoi1 dak1 gung1!)",
            "我哋個個都唔識做，只要老細唔肯批，聽日就開唔到工！) (Context: 情態助動詞綜合對比與職場生活實戰交涉 (Comprehensive M)",
            "我哋個個都搭車，只要老細轉車，聽日就落車！) (Context: 情態助動詞綜合對比與職場生活實戰交涉 (Comprehensive M)",
            "我哋個個都行街，只要老細買衫，聽日就找錢！) (Context: 情態助動詞綜合對比與職場生活實戰交涉 (Comprehensive M)"
          ],
          "answerIndex": 0,
          "explanation": "該句精確融合了技能「識」、主觀同意「肯」與就緒狀態「開得工」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【情態辨析】在句子「公司唔准員工喺辦公室食煙」中，「唔准」之精確含義為：",
          "options": [
            "不允許 / 嚴格禁止 (Not permitted / Strictly forbidden)",
            "不想吸煙) (Context: 情態助動詞綜合對比與職場生活實戰交涉 (Comprehensive M)",
            "不會吸煙) (Context: 情態助動詞綜合對比與職場生活實戰交涉 (Comprehensive M)",
            "不需要吸煙) (Context: 情態助動詞綜合對比與職場生活實戰交涉 (Comprehensive M)"
          ],
          "answerIndex": 0,
          "explanation": "「唔准」（m4 zeon2）表示官方或上級嚴格禁止、不予許可。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【綜合判斷】請選出語法結構、情態助動詞搭配完全正確且符合地道粵語表達之句子：",
          "options": [
            "如果老細肯批准呢個計劃，我哋聽日就可以開得工喇。 (If the boss approves, we can start work tomorrow.)",
            "如果老細要批准呢個計劃，我哋聽日就唔要返工喇。) (Context: 情態助動詞綜合對比與職場生活實戰交涉 (Comprehensive M)",
            "如果老細識批准呢個計劃，我哋聽日就諗住開工喇。) (Context: 情態助動詞綜合對比與職場生活實戰交涉 (Comprehensive M)",
            "如果老細准批准呢個計劃，我哋聽日就使返工喇。) (Context: 情態助動詞綜合對比與職場生活實戰交涉 (Comprehensive M)"
          ],
          "answerIndex": 0,
          "explanation": "該句語法邏輯嚴密，正確使用了意願「肯」、許可「可以」與就緒補語「開得工」。"
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
    "title": "球類與團隊運動動詞搭配：「踢波」、「打波」、「游水」、「跑步」 (Sports & Ball Games Collocations)",
    "level": "A2",
    "objective": "掌握粵語各類體育運動專屬動詞搭配體系（足踢足球用「踢波」、手打球類用「打波」、水上「游水」、陸上「跑步/做Gym」）。",
    "presentation": {
      "explanation": "粵語在描述體育運動與各類球類競技項目時，嚴格依據肢體動作部位與力學施力方式進行極其精準之動詞搭配與構詞分工：\n\n一、球類運動專屬動詞精準分工體系：\n１．「踢波」（tek3 bo1）：專指足球運動。因足球主要依託雙腳踢擊，故動詞嚴格搭配「踢」，絕對不可講成「打足球」！例如「星期六約咗班波友去球場踢波」（週六約了一群球友去球場踢足球比賽）。\n２．「打波」（daa2 bo1）：泛指一切主要依託雙手揮擊或球拍拍擊進行之球類運動項目：\n- 「打籃球」（daa2 laam4 kau4）：雙手運球投籃。\n- 「打羽毛球」（daa2 jyu5 mou4 kau4）：手持球拍擊打羽毛球。\n- 「打乒乓波」（daa2 ping1 pong1 bo1）：打乒乓球（廣東口語通稱乒乓波）。\n- 「打網球」（daa2 mong5 kau4）：手持網球拍揮擊網球。\n- 「打排球」（daa2 paai4 kau4）：雙手墊球扣殺排球。\n\n二、田徑、水上與健身運動動詞搭配：\n１．「游水」（jau4 seoi2）：游泳鍛鍊。例如「夏天去沙灘或者公眾泳池游水消暑解熱」。\n２．「跑步 / 跑公眾步」（paau2 bou6）：跑步慢跑。例如「每日朝早圍繞維多利亞公園跑五公里鍛鍊心肺功能」。\n３．「做瑜伽」（zou6 jyu4 gaa1）：伸展肢體練習瑜伽體位法。\n４．「做Gym / 做尖」（zou6 gym）：前往健身房進行重量訓練或器械鍛鍊（在香港口語中廣泛將英文健身房口語化為「做尖」）。",
      "examples": [
        {
          "target": "我每個禮拜三晚都會同同事去室內體育館打羽毛球，出返身汗個人精神好多。",
          "reading": "ngo5 mui5 go3 lai5 baai3 saam1 maan5 dou1 wui5 tung4 tung4 si6 heoi3 sat1 noi6 tai2 juk6 gun2 daa2 jyu5 mou4 kau4, ceot1 faan1 san1 hon6 go3 jan4 zing1 san4 hou2 do1. [ŋɔː˩˧ muːi˩˧ kɔː˧ lɐi˩˧ paːi˧ saːm˥ maːn˩˧ tou˥ wuːi˩˧ tʰʊŋ˨˩ tʰʊŋ˨˩ siː˨ hɵy˧ sɐt̚˥ nɔːi˨ tʰɐi˧˥ jʊk̚˨ kuːn˧˥ taː˧˥ jyː˩˧ mou˨˩ kʰɐu˨˩, tsʰɵt̚˥ faːn˥ sɐn˥ hɔːn˨ kɔː˧ jɐn˨˩ tsɪŋ˥ sɐn˨˩ hou˧˥ tɔː˥] (NGOH MOOI-GOH LY-BY-SAHM-MAHN DOH WUI TOONG TOONG-SEE HOEY SUT-NOY TY-YOOK-GOON DY YU-MOU-KAU, CHUT-FAHN SUN-HON GOH-YUN JING-SUN HOH-DOH)",
          "translation": "Every Wednesday night I go to the indoor stadium with my colleagues to play badminton; sweating it out makes me feel much more refreshed."
        },
        {
          "target": "細佬好中意踢波，佢由中學開始就係學校足球隊嘅主力前鋒。",
          "reading": "sai3 lou2 hou2 zung1 ji3 tek3 bo1, keoi5 jau4 zung1 hok6 hoi1 ci2 zau6 hai6 hok6 haau6 zuk1 kau4 deoi6 ge3 zyu2 lik6 cin4 fung1. [sɐi˧ lou˧˥ hou˧˥ tsʊŋ˥ jiː˧ tʰɛːk̚˧ pɔː˥, kʰɵy˩˧ jɐu˨˩ tsʊŋ˥ hɔːk̚˨ hɔːi˥ tsʰiː˧˥ tsɐu˨ hɐi˨ hɔːk̚˨ haːu˨ tsʊk̚˥ kʰɐu˨˩ tɵy˨ kɛː˧ tsyː˧˥ lɪk̚˨ tsʰiːn˨˩ fʊŋ˥] (SY-LOU HOH-JOONG-YEE TEK-BOH, KUY YAU JOONG-HOK HOI-CHEE JAU HY HOK-HAU JOOK-KAU-DEOY GEH JYU-LIK CHEEN-FOONG)",
          "translation": "My younger brother loves playing soccer; since secondary school he has been the starting striker of the school football team."
        },
        {
          "target": "放工之後去健身室做兩個鐘頭Gym，操練下肌肉同核心力量。",
          "reading": "fong3 gung1 zi1 hau6 heoi3 gin6 san1 sat1 zou6 loeng5 go3 zung1 tau4 gym, cou1 lin6 haa5 gei1 juk6 tung4 hat6 sam1 lik6 loeng6. [fɔːŋ˧ kʊŋ˥ tsiː˥ hɐu˨ hɵy˧ kiːn˨ sɐn˥ sɐt̚˥ tsou˨ lœːŋ˩˧ kɔː˧ tsʊŋ˥ tʰɐu˨˩ gym, tsʰou˥ liːn˨ haː˩˧ kei˥ jʊk̚˨ tʰʊŋ˨˩ hɐt̚˨ sɐm˥ lɪk̚˨ lœːŋ˨] (FONG-GONG JEE-HAU HOEY GEEN-SUN-SUT JOH LEUNG-GOH-JOONG-TAU GYM, CHOU-LEEN HAH GAY-YOOK TOONG HUK-SUM LIK-LEUNG)",
          "translation": "After work I go to the gym to work out for two hours, training my muscles and core strength."
        }
      ],
      "mnemonics": [
        "【運動動詞歌】足球用腳叫「踢波」，手拍手打全「打波」；水裡遨遊「去游水」，健身鍛鍊「做尖」多！"
      ],
      "culturalNotes": [
        "香港市民極具運動健康意識，每逢週末康文署（LCSD）轄下之公眾足球場、羽毛球館與泳池均一位難求。而「波友」（球友）與「做尖」（做Gym）更係香港年輕一代社交生活中不可或缺之高頻文化名詞。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【動詞搭配】在粵語中描述「踢足球」與「打籃球」，正確之專屬動詞短語分別係：",
          "options": [
            "踢波、打籃球 (tek3 bo1, daa2 laam4 kau4)",
            "打波、踢籃球) (Context: 球類與團隊運動動詞搭配：「踢波」、「打波」、「游水」、「跑步」 (Sp)",
            "游波、做籃球) (Context: 球類與團隊運動動詞搭配：「踢波」、「打波」、「游水」、「跑步」 (Sp)",
            "行波、搭籃球) (Context: 球類與團隊運動動詞搭配：「踢波」、「打波」、「游水」、「跑步」 (Sp)"
          ],
          "answerIndex": 0,
          "explanation": "足球運動量詞動詞用「踢」（踢波），手打球類用「打」（打籃球）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【俚語識別】香港市民日常俗稱「去健身房進行器械重訓與體能健身」為：",
          "options": [
            "做Gym / 做尖 (zou6 gym)",
            "行街 (haang4 gaai1)",
            "睇戲 (tai2 hei3)",
            "唱K (coeng3 kei1)"
          ],
          "answerIndex": 0,
          "explanation": "「做Gym / 做尖」（zou6 gym）指前往健身房健身鍛鍊。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法正誤】請選出動詞搭配完全符合粵語規範之運動表達句子：",
          "options": [
            "我同班波友每個星期六都去跑馬地踢波。 (My friends and I play soccer in Happy Valley every Saturday.)",
            "我同班波友每個星期六都去跑馬地打足球。) (Context: 球類與團隊運動動詞搭配：「踢波」、「打波」、「游水」、「跑步」 (Sp)",
            "我同班波友每個星期六都去跑馬地游足球。) (Context: 球類與團隊運動動詞搭配：「踢波」、「打波」、「游水」、「跑步」 (Sp)",
            "我同班波友每個星期六都去跑馬地做足球。) (Context: 球類與團隊運動動詞搭配：「踢波」、「打波」、「游水」、「跑步」 (Sp)"
          ],
          "answerIndex": 0,
          "explanation": "足球運動在粵語中嚴格搭配動詞「踢」（踢波）。"
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
    "title": "戶外消閒與嶺南特色活動：「行山」、「露營」、「踩單車」、「釣魚」 (Outdoor Recreation)",
    "level": "A2",
    "objective": "掌握香港著名戶外休閒運動詞彙（行山、露營、踩單車、釣魚、滑浪）與香港知名郊野徑地理名稱（麥理浩徑、龍脊、大東山）。",
    "presentation": {
      "explanation": "香港擁有逾四成之廣袤郊野公園土地面積，山巒起伏碧海相連，孕育出極其興旺且全民熱愛之戶外休閒遠足文化體系：\n\n一、核心戶外消閒活動名詞與專屬動詞搭配：\n１．「行山」（haang4 saan1）：登山健行、徒步遠足。香港全民盛行登山遠足，著名經典路徑包括橫跨新界的「麥理浩徑」、貫穿南北的「衛奕信徑」、港島名勝「龍脊芒草徑」、大嶼山「大東山日落徑」以及象徵香港精神的「獅子山峰」。例如「秋高氣爽涼風習習，最好約埋三五知己去行山登上山頂俯瞰全港美景」。\n２．「踩單車」（caai2 daan1 ce1）：騎自行車腳踏車。粵語動詞專用「踩」，生動描繪雙腳踩踏踏板前進。全港著名單車徑有「沙田經大埔至大美督」以及貫通新界之「超級單車徑」。\n３．「露營」（lou6 jing4）：在郊野山嶺或海灘平地搭建帳篷野營宿營。著名露營勝地如「塔門草原」、「西貢大浪西灣海灘」與「大嶼山昂坪高原」。\n４．「釣魚」（diu3 jyu42）：在海邊碼頭防波堤垂釣或乘船出海深海垂釣。\n５．「出海滑浪 / 划獨木舟」（ceot1 hoi2 waat6 long6 / waa4 duk6 muk6 zau1）：迎風衝浪與水上皮划艇運動。\n\n二、戶外登山活動必備配備與安全防護名詞：\n- 「行山杖」（haang4 saan1 zoeng2）：支撐身體防滑減壓之登山手杖。\n- 「行山鞋」（haang4 saan1 haai4）：抓地防滑之專業登山健行鞋履。\n- 「防曬油」（fong4 saai3 jau4）：阻擋紫外線曬傷之防曬霜乳液。\n- 「蚊怕水」（man1 paa3 seoi2）：驅趕蚊蟲防叮咬之噴霧噴劑（字面意義為令蚊蟲懼怕之水劑）。\n- 「帳篷 / 營幕」（zoeng3 pung4 / jing4 mok6）：野外宿營搭建之帳篷遮蔽所。",
      "examples": [
        {
          "target": "秋天涼涼哋最啱去行山，我哋今個星期日打算去挑戰西貢麥理浩徑第二段。",
          "reading": "cau1 tin1 loeng4 loeng4 dei2 zeoi3 aam1 heoi3 haang4 saan1, ngo5 dei6 gam1 go3 sing1 kei4 jat6 daa2 syun3 heoi3 tiu1 zin3 sai1 gung3 mak6 lei5 hou4 ging3 dai6 ji6 dyun6. [tsʰɐu˥ tʰiːn˥ lœːŋ˨˩ lœːŋ˨˩ tei˧˥ tsɵy˧ aːm˥ hɵy˧ haːŋ˨˩ saːn˥, ŋɔː˩˧ tei˨ kɐm˥ kɔː˧ sɪŋ˥ kʰei˨˩ jɐt˨ taː˧˥ syːn˧ hɵy˧ tʰiːu˥ tsiːn˧ sɐi˥ kʊŋ˥ mɐk̚˨ lei˩˧ hou˨˩ kɪŋ˧ tɐi˨ jiː˨ tyːn˨] (CHAU-TEEN LEUNG-LEUNG-DY JEOY-AHM HOEY HAHNG-SAHN, NGOH-DAY GUM-GOH SING-KAY-YUT DY-SUEN HOEY TEW-JEEN SY-GOONG MUK-LY-HOH-GING DY-YEE-DUEN)",
          "translation": "Cool autumn weather is best for hiking; this Sunday we plan to take on Section 2 of the MacLehose Trail in Sai Kung."
        },
        {
          "target": "由沙田踩單車去大美督沿途風景好靚，仲可以欣賞成個吐露港海景添。",
          "reading": "jau4 saa1 tin4 caai2 daan1 ce1 heoi3 daai6 mei5 duk1 jyun4 tou4 fung1 ging2 hou2 leng3, zung6 ho2 ji5 jan1 soeng2 seng4 go3 tou3 lou6 gong2 hoi2 ging2 tim1. [jɐu˨˩ saː˥ tʰiːn˨˩ tsʰaːi˧˥ taːn˥ tsʰɛː˥ hɵy˧ taːi˨ mei˩˧ tʊk̚˥ jyːn˨˩ tʰou4 fʊŋ˥ kɪŋ˧˥ hou˧˥ lɛːŋ˧, tsʊŋ˨ hɔː˧˥ jiː˩˧ jɐn˥ sœːŋ˧˥ sɛːŋ˨˩ kɔː˧ tʰou˧ lou˨ kɔːŋ˧˥ hɔːi˧˥ kɪŋ˧˥ tʰiːm˥] (YAU SAH-TEEN CHY-DAHN-CHEH HOEY DY-MAY-DOOK YUEN-TOU FOONG-GING HOH-LENG, JOONG HOH-YEE YUN-SEUNG SENG-GOH TOU-LOU-GONG HOY-GING TEEM)",
          "translation": "Cycling from Shatin to Tai Mei Tuk offers beautiful scenery along the way, and you can also admire the entire Tolo Harbour sea view."
        },
        {
          "target": "去露營記得帶齊營幕、電筒同蚊怕水，夜晚郊外好多蚊蟲㗎。",
          "reading": "heoi3 lou6 jing4 gei3 dak1 daai3 cai4 jing4 mok6, din6 tung2 tung4 man1 paa3 seoi2, je6 maan5 gaau1 ngoi6 hou2 do1 man1 cung4 gaa3. [hɵy˧ lou˨ jɪŋ˨˩ kei˧ tɐk̚˥ taːi˧ tsʰɐi˨˩ jɪŋ˨˩ mɔːk̚˨, tiːn˨ tʰʊŋ˧˥ tʰʊŋ˨˩ mɐn˥ pʰaː˧ sɵy˧˥, jɛː˨ maːn˩˧ kaːu˥ ŋɔːi˨ hou˧˥ tɔː˥ mɐn˥ tsʰʊŋ˨˩ kaː˧] (HOEY LOU-YING GAY-DUK DY-CHY YING-MOK, DEEN-TOONG TOONG MUN-PAH-SOEY, YEH-MAHN GAU-NGOY HOH-DOH MUN-CHOONG GAH)",
          "translation": "Remember to bring your tent, flashlight, and mosquito repellent when camping; there are many insects outdoors at night."
        }
      ],
      "mnemonics": [
        "【戶外郊遊歌】登山遠足「去行山」，踩踏單車「踩單車」；沙灘野外「去露營」，防蚊必帶「蚊怕水」！"
      ],
      "culturalNotes": [
        "香港之「行山」文化極具特色，市區與壯麗郊野公園僅相隔半小時車程。港人行山注重「山野無痕」（Leave No Trace），並常在登頂後在標高柱（俗稱「標高柱/標柱」）拍照打卡。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【戶外名詞】在粵語中描述「騎自行車」與「防蚊液/驅蚊水」，地道詞彙分別係：",
          "options": [
            "踩單車、蚊怕水 (caai2 daan1 ce1, man1 paa3 seoi2)",
            "坐單車、防蚊汁) (Context: 戶外消閒與嶺南特色活動：「行山」、「露營」、「踩單車」、「釣魚」 (O)",
            "行單車、蚊見愁) (Context: 戶外消閒與嶺南特色活動：「行山」、「露營」、「踩單車」、「釣魚」 (O)",
            "搭單車、驅蟲油) (Context: 戶外消閒與嶺南特色活動：「行山」、「露營」、「踩單車」、「釣魚」 (O)"
          ],
          "answerIndex": 0,
          "explanation": "自行車在粵語中稱為「單車」（動詞用「踩」），驅蚊水俗稱「蚊怕水」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【香港地理】香港著名之遠足徑「龍脊」或「麥理浩徑」，其主要戶外運動類型係：",
          "options": [
            "行山 (haang4 saan1 / Hiking)",
            "唱K (coeng3 kei1)",
            "打麻雀 (daa2 maa4 zoek3)",
            "睇戲 (tai2 hei3)"
          ],
          "answerIndex": 0,
          "explanation": "「行山」（haang4 saan1）指登山徒步健行。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【文化理解】粵語詞彙「蚊怕水」（man1 paa3 seoi2）之字面構詞理據與實際用途為：",
          "options": [
            "塗抹於皮膚上令蚊蟲懼怕不敢靠近之驅蚊液 (Mosquito repellent)",
            "用來淹死蚊子之污水) (Context: 戶外消閒與嶺南特色活動：「行山」、「露營」、「踩單車」、「釣魚」 (O)",
            "蚊子產卵喜愛之糖水) (Context: 戶外消閒與嶺南特色活動：「行山」、「露營」、「踩單車」、「釣魚」 (O)",
            "洗滌登山衣物之清潔劑) (Context: 戶外消閒與嶺南特色活動：「行山」、「露營」、「踩單車」、「釣魚」 (O)"
          ],
          "answerIndex": 0,
          "explanation": "「蚊怕水」直譯為「讓蚊子害怕的水」，即驅蚊噴霧/防蚊水。"
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
    "title": "都市娛樂與室內消遣：「睇戲」、「唱K」、「打麻雀」、「打機」 (Urban Entertainment & Nightlife)",
    "level": "A2",
    "objective": "掌握香港都市室內娛樂核心詞彙（睇戲、戲院/戲飛、唱K、打麻雀/食糊、打機/煲劇）與社交聚會地道對話。",
    "presentation": {
      "explanation": "香港作為享譽國際之繁華不夜城，都市室內娛樂休閒與親朋聚會消遣活動極其豐富多元，積澱出獨具韻味之粵語專屬文化術語：\n\n一、核心都市消遣項目深度解析：\n１．「睇戲」（tai2 hei3）：觀看電影大片。在粵語中看電影一律稱為「睇戲」：\n- 「戲院」（hei3 jyun2）：放映電影之電影院。\n- 「戲飛」（hei3 fei1）：入場觀影之電影門票。\n- 「早場 / 夜場 / 午夜場」（zou2 coeng4 / je6 coeng4 / ng5 je6 coeng4）：上午特惠場次、晚間熱門場次或深夜跨日子夜場次。\n- 「爆谷」（baau3 guk1）：電影院必備香脆爆米花小食。\n２．「唱K / 去卡拉OK」（coeng3 kei1）：前往量販式卡拉OK廂房聚會引吭高歌。通宵包房唱歌特稱為「唱K唱到天光」或「通宵唱K歡聚」。\n３．「打麻雀 / 打麻將 / 游乾水」（daa2 maa4 zoek3 / jau4 gon1 seoi2）：打麻將牌局娛樂。麻將在香港又被幽默俗稱為「游乾水」（指雙手在乾燥桌面上來回洗牌搓牌如同在水中游泳）：\n- 「食糊 / 糊咗」（sik6 wu42 / wu42 zo2）：麻將牌局中成功和牌獲勝贏得籌碼彩頭。\n- 「碰 / 槓 / 摸牌 / 自摸」（pung3 / gong3 / mo2 paai2 / zi6 mo1）：麻將經典行牌術語與自己抓牌和牌。\n- 「打四圈 / 打八圈」（daa2 sei3 hyun1 / baat3 hyun1）：麻將完整對局輪數計量單位。\n４．「打機」（daa2 gei1）：操作家用遊戲主機、掌上遊戲機或手機暢玩各類電子遊戲。\n５．「煲劇」（bou1 kek6）：長時間連續追看多集電視連續劇集（如同以文火慢工細火熬「煲」老火靚湯一般傾注漫長時間與專注力）。",
      "examples": [
        {
          "target": "今晚有部荷里活大片首映，我已經喺網上訂咗兩張戲飛，放工一齊去睇戲啦。",
          "reading": "gam1 maan5 jau5 bou6 ho4 lei5 wut6 daai6 pin3*2 sau2 jing2, ngo5 ji5 ging1 hai2 mong5 soeng6 deng6 zo2 loeng5 zoeng1 hei3 fei1, fong3 gung1 jat1 cai4 heoi3 tai2 hei3 laa1. [kɐm˥ maːn˩˧ jɐu˩˧ pou˨ hɔː˨˩ lei˩˧ wuːt̚˨ taːi˨ pʰiːn˧˥ sɐu˧˥ jɪŋ˧˥, ŋɔː˩˧ jiː˩˧ kɪŋ˥ hɐi˩˧ mɔːŋ˩˧ sœːŋ˨ tɪŋ˨ tsɔː˧˥ lœːŋ˩˧ tsœːŋ˥ hei˧ fei˥, fɔːŋ˧ kʊŋ˥ jɐt̚˥ tsʰɐi˨˩ hɵy˧ tʰɐi˧˥ hei˧ laː˥] (GUM-MAHN YAU BOU HOH-LY-WOOT DY-PEEN SAU-YING, NGOH YEE-GING HY MONG-SEUNG DENG-JOR LEUNG-JEUNG HEY-FAY, FONG-GONG YUT-CHY HOEY TY-HEY LAH)",
          "translation": "There is a Hollywood blockbuster premiere tonight; I have already booked two movie tickets online, let's go watch the movie together after work."
        },
        {
          "target": "過年嗰陣成家人圍埋打麻雀，阿婆自摸十三么，開心到不得了！",
          "reading": "gwo3 nin4 go2 zan6 seng4 gaa1 jan4 wai4 maai4 daa2 maa4 zoek3, aa3 po4 zi6 mo1 sap6 saam1 jiu1, hoi1 sam1 dou3 bat1 dak1 liu5! [kʷɔː˧ niːn˨˩ kɔː˧˥ tsɐn˨ sɛːŋ˨˩ kaː jɐn˨˩ wɐi˨˩ maːi˨˩ taː˧˥ maː˨˩ tsœːk̚˧, aː˧ pʰɔː˨˩ tsiː˨ mɔː˥ sɐp̚˨ saːm˥ jiːu˥, hɔːi˥ sɐm˥ tou˧ pɐt̚˥ tɐk̚˥ liːu˩˧!]",
          "translation": "During Lunar New Year the whole family gathered to play Mahjong; Grandma won by self-draw with Thirteen Orphans, she was thrilled beyond words!"
        },
        {
          "target": "放假最爽就係匿喺屋企邊食外賣邊煲劇，一連睇咗八集韓劇。",
          "reading": "fong3 gaa3 zeoi3 song2 zau6 hai6 nei1 hai2 uk1 kei2 bin1 sik6 ngoi6 maai6 bin1 bou1 kek6, jat1 lin4 tai2 zo2 baat3 zaap6 hon4 kek6. [fɔːŋ˧ kaː˧ tsɵy˧ sɔːŋ˧˥ tsɐu˨ hɐi˨ nei˥ hɐi˩˧ ʊk̚˥ kʰei˧˥ piːn˥ sɪk̚˨ ŋɔːi˨ maːi˨ piːn˥ pou˥ kʰɛːk̚˨, jɐt̚˥ liːn˨˩ tʰɐi˧˥ tsɔː˧˥ paːt̚˧ tsaːp̚˨ hɔːn˨˩ kʰɛːk̚˨] (FONG-GAH JEOY-SONG JAU HY NEY HY OOK-KAY BEEN-SIK NGOY-MY BEEN-BOU-KEK, YUT-LEEN TY-JOR BAHT-JAHK HOHN-KEK)",
          "translation": "The best thing on holidays is hiding at home eating takeout while binge-watching dramas; I watched eight episodes of Korean drama in a row."
        }
      ],
      "mnemonics": [
        "【市井娛樂歌】看場電影叫「睇戲」，朋友歡聚去「唱K」；洗牌築城「游乾水」，追看長劇「煲劇」迷！"
      ],
      "culturalNotes": [
        "「打麻雀」（打麻將）與「食糊」（胡牌和牌）係嶺南文化之精髓，甚至衍生出海量粵語商業俚語：若談成一單大生意，香港人常稱「呢單生意真係食大糊」（這單生意真是贏了大牌發了大財）。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【影視詞彙】在粵語中描述「看電影」、「電影院」與「電影票」，正確之名詞組合係：",
          "options": [
            "睇戲、戲院、戲飛 (tai2 hei3, hei3 jyun2, hei3 fei1)",
            "看電、電影室、電影券) (Context: 都市娛樂與室內消遣：「睇戲」、「唱K」、「打麻雀」、「打機」 (Urb)",
            "望劇、劇院、劇票) (Context: 都市娛樂與室內消遣：「睇戲」、「唱K」、「打麻雀」、「打機」 (Urb)",
            "瞧影、影城、影紙) (Context: 都市娛樂與室內消遣：「睇戲」、「唱K」、「打麻雀」、「打機」 (Urb)"
          ],
          "answerIndex": 0,
          "explanation": "看電影在粵語中稱為「睇戲」，電影院為「戲院」，電影票為「戲飛」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【俚語識別】粵語生動口語「煲劇」（bou1 kek6）之確切含義為：",
          "options": [
            "連續長時間追看電視劇集 (Binge-watching TV dramas)",
            "一邊煮煲仔飯一邊演戲) (Context: 都市娛樂與室內消遣：「睇戲」、「唱K」、「打麻雀」、「打機」 (Urb)",
            "在廚房用砂鍋熬煮中藥) (Context: 都市娛樂與室內消遣：「睇戲」、「唱K」、「打麻雀」、「打機」 (Urb)",
            "批評某部戲劇拍得太差) (Context: 都市娛樂與室內消遣：「睇戲」、「唱K」、「打麻雀」、「打機」 (Urb)"
          ],
          "answerIndex": 0,
          "explanation": "「煲劇」（bou1 kek6）專指連續狂看追劇（如同文火慢燉）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【麻雀術語】在香港打麻雀牌局中，當某位玩家成功和牌獲勝，口語中宣告之標準說法為：",
          "options": [
            "我食糊喇！ (ngo5 sik6 wu42 laa3! / I won / Mahjong!)",
            "我買單喇！) (Context: 都市娛樂與室內消遣：「睇戲」、「唱K」、「打麻雀」、「打機」 (Urb)",
            "我搭枱喇！) (Context: 都市娛樂與室內消遣：「睇戲」、「唱K」、「打麻雀」、「打機」 (Urb)",
            "我行街喇！) (Context: 都市娛樂與室內消遣：「睇戲」、「唱K」、「打麻雀」、「打機」 (Urb)"
          ],
          "answerIndex": 0,
          "explanation": "麻將胡牌在粵語中稱為「食糊」（sik6 wu42）。"
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
    "title": "文化藝術與靜態嗜好：「睇書」、「聽歌」、「彈琴」、「畫畫」、「影相」 (Cultural Arts & Hobbies)",
    "level": "A2",
    "objective": "掌握粵語文藝雅好名詞（睇書/閱讀、聽歌/音樂會、彈琴/彈結他、畫畫/寫書法、影相/打卡）與專屬動詞搭配。",
    "presentation": {
      "explanation": "在文藝雅好、音樂演奏、書畫創作與靜態美學休閒範疇，粵語擁有一整套典雅深厚且富於視覺感染力之動名詞搭配系統：\n\n一、文藝雅好專屬動詞搭配體系：\n１．「睇書 / 閱讀」（tai2 syu1 / jyut6 duk6）：閱讀書籍典籍。粵語日常口語一律統一稱作「睇書」（看書閱讀）。\n２．「聽歌 / 聽音樂會」（teng1 go1 / teng1 jam1 ngok6 wui62）：聆聽流行歌曲旋律或前往音樂廳欣賞古典交響樂演奏會。\n３．樂器演奏專屬動詞精準分化法則：\n- 鍵盤樂器與指彈撥弦樂器專用「彈」（taan4）：例如「彈琴 / 彈鋼琴」（taan4 kam4）、「彈結他」（taan4 git3 taa1，彈奏六弦吉他）、「彈古箏」（taan4 gu2 zang1，撥弄傳統古箏琴弦）。\n- 氣流吹奏管樂器專用「吹」（ceoi1）：例如「吹長笛」（ceoi1 coeng4 dek6，吹奏橫笛）、「吹色士風」（ceoi1 sik1 si6 fung1，吹奏薩克斯風爵士樂）。\n- 弓弦拉動摩擦樂器專用「拉」（laai1）：例如「拉小提琴」（laai1 siu2 tai4 kam4）、「拉二胡」（laai1 ji6 wu42）。\n４．「畫畫 / 寫書法」（waak6 waa2 / se2 syu1 faat3）：揮毫繪畫水彩油畫與研墨書寫毛筆書法藝術作品。\n５．「影相 / 攝影」（jing2 soeng2 / sip3 jing2）：拍照攝影留下珍貴影像。粵語動詞嚴格必用「影」（留影映照之本義），絕對不可講成「拍相片」！例如「去尖沙咀海旁影相打卡」（前往尖沙咀海濱長廊拍攝美麗海景並在社交網絡打卡留念）。",
      "examples": [
        {
          "target": "佢由細到大都好有音樂天份，五歲開始學彈鋼琴，依家仲識拉小提琴添。",
          "reading": "keoi5 jau4 sai3 dou3 daai6 dou1 hou2 jau5 jam1 ngok6 tin1 fan6, ng5 seoi3 hoi1 ci2 hok6 taan4 gong3 kam4, ji1 gaa1 zung6 sik1 laai1 siu2 tai4 kam4 tim1. [kʰɵy˩˧ jɐu˨˩ sɐi˧ tou˧ taːi˨ tou˥ hou˧˥ jɐu˩˧ jɐm˥ ŋɔːk̚˨ tʰiːn˥ fɐn˨, ŋ̩˩˧ sɵy˧ hɔːi˥ tsʰiː˧˥ hɔːk̚˨ tʰaːn˨˩ kɔːŋ˧ kʰɐm˨˩, jiː˥ kaː˥ tsʊŋ˨ sɪk̚˥ laːi˥ siu˧˥ tʰɐi˨˩ kʰɐm˨˩ tʰiːm˥] (KUY YAU SY DOU DY DOH HOH YAU YUM-NGOK TEEN-FUN, NG-SOEY HOI-CHEE HOK TAAN GONG-KUM, YEE-GAH JOONG SIK LY SIU-TY-KUM TEEM)",
          "translation": "She has had musical talent since childhood; she started learning piano at age five, and now she also knows how to play the violin."
        },
        {
          "target": "假日時我最中意坐喺窗邊一邊飲手沖咖啡一邊靜靜哋睇書。",
          "reading": "gaa3 jat6 si4 ngo5 zeoi3 zung1 ji3 co5 hai2 coeng1 bin1 jat1 bin1 jam2 sau2 cung1 gaa3 fe1 jat1 bin1 zing6 zing6 dei2 tai2 syu1. [kaː˧ jɐt˨ siː˨˩ ŋɔː˩˧ tsʰɔː˩˧ hɐi˩˧ tsʰœːŋ˥ piːn˥ jɐt̚˥ piːn˥ jɐm˧˥ sɐu˧˥ tsʰʊŋ˥ kaː˧ fɛː˥ jɐt̚˥ piːn˥ tsɪŋ˨ tsɪŋ˨ tei˧˥ tʰɐi˧˥ syː˥] (GAH-YUT SEE NGOH JEOY-JOONG-YEE CHOH HY CHEUNG-BEEN YUT-BEEN YUM SAU-CHOONG GAH-FEH YUT-BEEN JING-JING-DY TY-SYU)",
          "translation": "On holidays I enjoy sitting by the window most, drinking pour-over coffee while quietly reading a book."
        },
        {
          "target": "維多利亞港嘅日落景色好靚，吸引咗好多攝影發燒友喺度影相。",
          "reading": "wai4 do1 lei6 aa3 gong2 ge3 jat6 lok6 ging2 sik1 hou2 leng3, kap1 jan5 zo2 hou2 do1 sip3 jing2 faat3 siu1 jau5 hai2 dou6 jing2 soeng2. [wɐi˨˩ tɔː˥ lei˨ aː˧ kɔːŋ˧˥ kɛː˧ jɐt˨ lɔːk̚˨ kɪŋ˧˥ sɪk̚˥ hou˧˥ lɛːŋ˧, kʰɐp̚˥ jɐn˩˧ tsɔː˧˥ hou˧˥ tɔː˥ sɪp̚˧ jɪŋ˧˥ faːt̚˧ siːu˥ jɐu˩˧ hɐi˩˧ tou˨ jɪŋ˧˥ sœːŋ˧˥] (WY-DOH-LEY-AH GONG GEH YUT-LOK GING-SIK HOH-LENG, KUP-YUN-JOR HOH-DOH SIP-YING FAHT-SEW-YAU HY-DOU YING-SEUNG)",
          "translation": "The sunset over Victoria Harbour is magnificent, attracting numerous photography enthusiasts to take pictures here."
        }
      ],
      "mnemonics": [
        "【文藝雅好訣】黑白鍵盤「彈鋼琴」，四弦拉弓「小提琴」；捕捉光影「影張相」，靜心沉醉「多睇書」！"
      ],
      "culturalNotes": [
        "在粵語中，拍照一律用「影相」（留影映相之意）。狂熱愛好者俗稱為「發燒友」（如「音響發燒友」、「攝影發燒友」），此詞彙源於上世紀五六十年代香港音響愛好者之俚稱，現已成為現代漢語通用之經典詞彙。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【樂器動詞】在粵語中描述演奏「鋼琴」與演奏「小提琴」，正確之專屬動詞分別係：",
          "options": [
            "彈鋼琴、拉小提琴 (taan4 gong3 kam4, laai1 siu2 tai4 kam4)",
            "拉鋼琴、彈小提琴) (Context: 文化藝術與靜態嗜好：「睇書」、「聽歌」、「彈琴」、「畫畫」、「影相」 )",
            "吹鋼琴、打小提琴) (Context: 文化藝術與靜態嗜好：「睇書」、「聽歌」、「彈琴」、「畫畫」、「影相」 )",
            "踢鋼琴、做小提琴) (Context: 文化藝術與靜態嗜好：「睇書」、「聽歌」、「彈琴」、「畫畫」、「影相」 )"
          ],
          "answerIndex": 0,
          "explanation": "鍵盤樂器用「彈」（彈鋼琴），弦樂拉弓用「拉」（拉小提琴）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【動詞搭配】欲表達「拿相機在海濱長廊拍照留念」，地道之粵語表達係：",
          "options": [
            "喺海濱長廊影相 (hai2 hoi2 ban1 coeng4 long4 jing2 soeng2)",
            "喺海濱長廊拍相) (Context: 文化藝術與靜態嗜好：「睇書」、「聽歌」、「彈琴」、「畫畫」、「影相」 )",
            "喺海濱長廊打相) (Context: 文化藝術與靜態嗜好：「睇書」、「聽歌」、「彈琴」、「畫畫」、「影相」 )",
            "喺海濱長廊做相) (Context: 文化藝術與靜態嗜好：「睇書」、「聽歌」、「彈琴」、「畫畫」、「影相」 )"
          ],
          "answerIndex": 0,
          "explanation": "拍照在粵語中嚴格使用動詞「影」（影相）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【俚語溯源】粵語中形容對攝影、音響或特定技藝極度痴迷之行家發燒愛好者，稱之為：",
          "options": [
            "發燒友 (faat3 siu1 jau5 / Enthusiasts)",
            "波友 (bo1 jau5)",
            "搭枱友 (daap3 toi2 jau5)",
            "司機友 (si1 gei1 jau5)"
          ],
          "answerIndex": 0,
          "explanation": "痴迷某項愛好的資深愛好者在粵語中稱為「發燒友」（faat3 siu1 jau5）。"
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
    "title": "喜好程度、頻率副詞與邀約會話：「好中意」、「最沉迷」、「得閒約埋」 (Preferences & Invitations)",
    "level": "A2",
    "objective": "掌握粵語喜好程度副詞（好中意、最沉迷、麻麻哋、好反感）、頻率副詞（成日、時不時、好少）與社交邀約句型（得閒約埋）。",
    "presentation": {
      "explanation": "在日常社交生活與朋友聚會交流中，精準表達個人喜好傾嚮程度、描述各類休閒活動之進行頻率並向朋友發出熱情得體之聚會邀約，擁有一套極其豐富之地道句法體系：\n\n一、喜好情感傾向精確程度梯度解析：\n１．「極度喜愛熱衷」：\n- 「好中意」（hou2 zung1 ji3）：內心非常喜歡愛好。\n- 「最沉迷」（zeoi3 cam4 mai4）：最為痴迷深陷其中熱衷投入。\n- 「超鍾意 / 勁中意」（tsiu1 zung1 ji3 / ging6 zung1 ji3）：極致超級喜歡（青年流行口語強烈讚賞用語）。\n２．「中立平淡一般」：\n- 「麻麻哋 / 麻麻哋中意」（maa4 maa2 dei2）：一般般、平平無奇、算不上十分熱愛喜好。\n３．「反感排斥厭惡」：\n- 「好反感 / 好憎」（hou2 faan2 gam2 / hou2 zang1）：非常討厭反感、內心極度抗拒排斥。\n\n二、時間頻率副詞梯度分佈體系：\n１．「成日」（seng4 jat6）：總是、整天、老是、頻繁不絕地進行某事。\n２．「經常 / 時不時」（ging1 soeng4 / si4 bat1 si4）：常常、經常進行，或三不五時、隔三差五偶爾為之。\n３．「好少」（hou2 siu2）：極少、難得一見、很少進行某項活動。\n４．「從來未試過」（cung4 loi4 mei6 si3 gwo3）：自始至終從未親身嘗試過。\n\n三、社交聚會熱情邀約地道標準句型：\n- 「得閒約埋一齊去＋活動名詞」（dak1 haan4 joek3 maai4 jat1 cai4 heoi3...）：有空的時候相約聚在一起前往某地……\n- 「你呢個禮拜六得唔得閒呀？」（請問你這個星期六是否有空閒時間呢？）\n- 「不如我哋今晚收工之後一齊去唱K囉？」（不如我們今晚下班後一起去唱歌聚會吧？）",
      "examples": [
        {
          "target": "我細佬成日沉迷打機，時不時玩到半夜三更，搞到第二朝早起唔到身返學。",
          "reading": "ngo5 sai3 lou2 seng4 jat6 cam4 mai4 daa2 gei1, si4 bat1 si4 waan2 dou3 bun3 je6 saam1 gaang1, gaau2 dou3 dai6 ji6 ziu1 zou2 hei2 m4 dou2 san1 faan1 hok6. [ŋɔː˩˧ sɐi˧ lou˧˥ sɛːŋ˨˩ jɐt˨ tsʰɐm˨˩ mɐi˨˩ taː˧˥ kei˥, siː˨˩ pɐt̚˥ siː˨˩ waːn˧˥ tou˧ puːn˧ jɛː˨ saːm˥ kaːŋ˥, kaːu˧˥ tou˧ tɐi˨ jiː˨ tsiːu˥ tsou˧˥ hei˧˥ m̩˨˩ tou˧˥ sɐn˥ faːn˥ hɔːk̚˨] (NGOH SY-LOU SENG-YUT CHUM-MY DY-GAY, SEE-BUT-SEE WAAN DOU BOON-YEH-SAHM-GAHNG, GAU-DOU DY-YEE JIU-JOU HAY-M-DOU-SUN FAHN-HOK)",
          "translation": "My younger brother is always obsessed with playing video games, occasionally playing until the middle of the night, causing him to be unable to wake up for school the next morning."
        },
        {
          "target": "我對打麻雀興趣麻麻哋，反而比較中意靜靜哋睇書同埋聽古典音樂。",
          "reading": "ngo5 deoi3 daa2 maa4 zoek3 hing3 ceoi3 maa4 maa2 dei2, faan2 ji4 bei2 gaau3 zung1 ji3 zing6 zing6 dei2 tai2 syu1 tung4 maai4 teng1 gu2 din2 jam1 ngok6. [ŋɔː˩˧ tɵy˧ taː˧˥ maː˨˩ tsœːk̚˧ hɪŋ˧ tsʰɵy˧ maː˨˩ maː˧˥ tei˧˥, faːn˩˧ jiː˨˩ pei˧˥ kaːu˧ tsʊŋ˥ jiː˧ tsɪŋ˨ tsɪŋ˨ tei˧˥ tʰɐi˧˥ syː˥ tʰʊŋ˨˩ maːi˨˩ tʰɛːŋ˥ kuː˧˥ tiːn˧˥ jɐm˥ ŋɔːk̚˨] (NGOH DEOY DY-MAH-JEUK HING-CHOEY MAH-MAH-DY, FAHN-YEE BAY-GAU JOONG-YEE JING-JING-DY TY-SYU TOONG-MY TENG GOO-DEEN YUM-NGOK)",
          "translation": "My interest in playing Mahjong is just so-so; instead, I prefer quietly reading books and listening to classical music."
        },
        {
          "target": "好耐冇見喇！今個週末大家得唔得閒？得閒約埋一齊去西貢食海鮮啦！",
          "reading": "hou2 noi6 mou5 gin3 laa3! gam1 go3 zau1 mut6 daai6 gaa1 dak1 m4 dak1 haan4? dak1 haan4 joek3 maai4 jat1 cai4 heoi3 sai1 gung3 sik6 hoi2 sin1 laa1! [hou˧˥ nɔːi˨ mou˩˧ kiːn˧ laː˧! kɐm˥ kɔː˧ tsɐu˥ muːt̚˨ taːi˨ kaː˥ tɐk̚˥ m̩˨˩ tɐk̚˥ haːn˨˩? tɐk̚˥ haːn˨˩ jœːk̚˧ maːi˨˩ jɐt̚˥ tsʰɐi˨˩ hɵy˧ sɐi˥ kʊŋ˥ sɪk̚˨ hɔːi˧˥ siːn˥ laː˥!] (HOH-NOY MOU-GEEN LAH! GUM-GOH JAU-MOOT DY-GAH DUK-M-DUK-HAHN? DUK-HAHN YEUK-MY YUT-CHY HOEY SY-GOONG SIK HOY-SEEN LAH!)",
          "translation": "Long time no see! Is everyone free this weekend? If free, let's gather together to go eat seafood in Sai Kung!"
        }
      ],
      "mnemonics": [
        "【聚會邀約訣】極度喜歡「好中意」，感覺一般「麻麻哋」；經常總是「成日做」，有空聚會「約埋去」！"
      ],
      "culturalNotes": [
        "「得閒約埋一齊飲茶啦！」（有空一起約去喝茶飲點心吧！）係嶺南文化中最熱情親切之社交告別語與邀約常規，展現出廣東人重視朋友情誼與美食相聚的樂天生活哲學。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【喜好表達】欲表達自己對某項活動「感覺一般、算不上特別喜歡」，最地道之粵語詞彙係：",
          "options": [
            "麻麻哋 (maa4 maa2 dei2 / So-so)",
            "好中意 (hou2 zung1 ji3)",
            "最沉迷 (zeoi3 cam4 mai4)",
            "超鍾意 (tsiu1 zung1 ji3)"
          ],
          "answerIndex": 0,
          "explanation": "「麻麻哋」（maa4 maa2 dei2）在粵語中表示普通、一般般。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【社交邀約】欲向朋友提出「有空時聚在一起去郊外行山」，最熱情得體之粵語句式係：",
          "options": [
            "得閒約埋一齊去行山啦！ (dak1 haan4 joek3 maai4 jat1 cai4 heoi3 haang4 saan1 laa1!)",
            "你一定要自己去行山！) (Context: 喜好程度、頻率副詞與邀約會話：「好中意」、「最沉迷」、「得閒約埋」 ()",
            "我唔識同你去行山！) (Context: 喜好程度、頻率副詞與邀約會話：「好中意」、「最沉迷」、「得閒約埋」 ()",
            "大家唔好去行山！) (Context: 喜好程度、頻率副詞與邀約會話：「好中意」、「最沉迷」、「得閒約埋」 ()"
          ],
          "answerIndex": 0,
          "explanation": "「得閒約埋一齊去……」係粵語最標準親切之社交聚會邀約語。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【頻率副詞】在粵語中，副詞「成日」（seng4 jat6）之確切含義為：",
          "options": [
            "總是、整天、頻繁老是 (Always / All the time)",
            "僅限於昨天一天) (Context: 喜好程度、頻率副詞與邀約會話：「好中意」、「最沉迷」、「得閒約埋」 ()",
            "從來沒有發生過) (Context: 喜好程度、頻率副詞與邀約會話：「好中意」、「最沉迷」、「得閒約埋」 ()",
            "每年只發生一次) (Context: 喜好程度、頻率副詞與邀約會話：「好中意」、「最沉迷」、「得閒約埋」 ()"
          ],
          "answerIndex": 0,
          "explanation": "「成日」（seng4 jat6）在粵語中作為頻率副詞表示總是、老是、整天。"
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
    "title": "香港核心工種與專業職銜：「做邊行」、「工程師」、「會計師」、「地產經紀」 (Professions & Job Titles)",
    "level": "A2",
    "objective": "掌握粵語詢問職業行業之專屬社交句式（做邊行、喺邊度高就）與香港金融、法律、地產及專業服務核心職銜名稱。",
    "presentation": {
      "explanation": "在香港作為國際金融與專業服務樞紐之商務社會中，職場職業詢問與職銜稱謂展現出高度專業且講究禮貌之粵語體系：\n\n一、詢問從事行業之標準社交句式：\n１．「請問你做邊行呀？」：詢問對方從事何種行業領域之標準口語，其中「行」指行業行當、商業領域。\n２．「喺邊度高就呀？」：極具教養與尊崇之商務敬語辭令，意為「在何處高就任職、在哪家機構效力」。\n３．「做緊咩職位？」：詢問目前具體擔任何種職務頭銜。\n\n二、香港核心專業工種與職銜稱謂矩陣：\n１．專業持牌專才類（多以專屬後綴「師」字稱呼）：\n- 「會計師」：負責核數審計與財務會計規劃之法定專才。\n- 「律師」：處理合約訴訟與法律諮詢之事務律師或大律師。\n- 「工程師」：土木工程、機械工程或軟件開發專才。\n- 「建築師」：空間規劃與建築景觀設計專才。\n- 「精算師」：評估金融保險風險與數學模型之精算專才。\n２．商業代理與顧問專才（多以後綴「經紀」或「顧問」稱呼）：\n- 「地產經紀」：物業樓盤買賣租賃中介代理顧問。\n- 「保險經紀 / 財富管理顧問」：保險理財規劃與家庭資產配置專員。\n- 「公關」：企業品牌形象推廣與公共關係協調專員。\n- 「社工」：政府註冊之專業社會工作輔導專員。",
      "examples": [
        {
          "target": "請問陳先生做邊行呀？我喺中環一間國際會計師樓做高級審計師。",
          "reading": "cing2 man6 can4 saan1 sang1 zou6 bin1 hong4 aa3? ngo5 hai2 zung1 waan4 jat1 gaan1 gwok3 zai3 wui6 gai3 si1 lau4 zou6 gou1 kap1 sam2 gai3 si1. [tsʰɪŋ˧˥ mɐn˨ tsʰɐn˨˩ saːn˥ sɐŋ˥ tsou˨ piːn˥ hɔːŋ˨˩ aː˧? ŋɔː˩˧ hɐi˩˧ tsʊŋ˥ waːn˨˩ jɐt̚˥ kaːn˥ kʷɔːk̚˧ tsɐi˧ wuːi˨ kɐi˧ siː˥ lɐu˨˩ tsou˨ kou˥ kʰɐp̚˥ sɐm˧˥ kɐi˧ siː˥] (CHING-MUN CHUN-SAHN-SANG JOH BEEN-HONG AH? NGOH HY JOONG-WAHN YUT-GAHN GWOK-JAI WUI-GAY-SEE-LAU JOH GOU-KUP SUM-GAY-SEE)",
          "translation": "May I ask which industry Mr. Chan works in? I work as a senior auditor at an international accounting firm in Central."
        },
        {
          "target": "佢大學畢業之後考咗個地產牌，依家喺尖沙咀做地產經紀幫客買賣商舖。",
          "reading": "keoi5 daai6 hok6 bat1 jip6 zi1 hau6 haau2 zo2 go3 dei6 caan2 paai4, ji1 gaa1 hai2 zim1 saa1 zeoi2 zou6 dei6 caan2 ging1 gei2 bong1 haak3 maai5 maai6 soeng1 pou3. [kʰɵy˩˧ taːi˨ hɔːk̚˨ pɐt̚˥ jiːp̚˨ tsiː˥ hɐu˨ haːu˧˥ tsɔː˧˥ kɔː˧ tei˨ tsʰaːn˧˥ pʰaːi˨˩, jiː˥ kaː˥ hɐi˩˧ tsiːm˥ saː˥ tsɵy˧˥ tsou˨ tei˨ tsʰaːn˧˥ kɪŋ˥ kei˧˥ pɔːŋ˥ haːk̚˧ maːi˩˧ maːi˨ sœːŋ˥ pʰou˧] (KUY DY-HOK BUT-YEAP JEE-HAU HAU-JOR GOH DAY-CHAAN-PY, YEE-GAH HY JEEM-SAH-JEOY JOH DAY-CHAAN GING-GAY BONG HAHK MY-MY SEUNG-POU)",
          "translation": "After graduating from university he passed the real estate licensing exam; now he works as a real estate agent in Tsim Sha Tsui helping clients buy and sell commercial shops."
        },
        {
          "target": "我表姐係註冊社工，平時主要喺社區中心輔導青少年同長者。",
          "reading": "ngo5 biu2 ze2 hai6 zyu3 caak3 se5 gung1, ping4 si4 zyu2 jiu3 hai2 se5 keoi1 zung1 sam1 fu6 dou6 cing1 siu3 nin4 tung4 coeng4 ze2. [ŋɔː˩˧ piːu˧˥ tsɛː˧˥ hɐi˨ tsyː˧ tsʰaːk̚˧ sɛː˩˧ kʊŋ˥, pʰɪŋ˨˩ siː˨˩ tsyː˧˥ jiu˧ hɐi˩˧ sɛː˩˧ kʰɵy˥ tsʊŋ˥ sɐm˥ fuː˨ tou˨ tsʰɪŋ˥ siu˧ niːn˨˩ tʰʊŋ˨˩ tsʰœːŋ˨˩ tsɛː˧˥] (NGOH BEW-JEH HY JYU-CHAHK SEH-GONG, PING-SEE JYU-YEW HY SEH-KOEY JOONG-SUM FOO-DOU CHING-SIU-NEEN TOONG CHEUNG-JEH)",
          "translation": "My cousin is a registered social worker; usually she mainly counsels youth and the elderly at community centers."
        }
      ],
      "mnemonics": [
        "【職業詢問歌】初次見面問「邊行」，會計律師全「大行」；地產保險做「經紀」，各行各業展所長！"
      ],
      "culturalNotes": [
        "香港傳統尊稱專業人士為「師爺」或冠以「師」字（如律師、會計師、測量師、工程師），代表通過嚴格之法定專業考核，社會認可度極高。而詢問對方職業時講「喺邊度高就」顯得極為文雅尊崇。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【社交詢問】在商務社交場合欲禮貌詢問對方「從事哪個行業」，最地道之粵語提問係：",
          "options": [
            "請問你做邊行呀？ (cing2 man6 nei5 zou6 bin1 hong4 aa3?)",
            "請問你搭邊架車呀？) (Context: 香港核心工種與專業職銜：「做邊行」、「工程師」、「會計師」、「地產經紀)",
            "請問你行邊條路呀？) (Context: 香港核心工種與專業職銜：「做邊行」、「工程師」、「會計師」、「地產經紀)",
            "請問你買邊件衫呀？) (Context: 香港核心工種與專業職銜：「做邊行」、「工程師」、「會計師」、「地產經紀)"
          ],
          "answerIndex": 0,
          "explanation": "「做邊行」（zou6 bin1 hong4）係粵語中詢問從事何種行業之標準表達。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【職銜稱謂】專門負責協助客戶進行住宅或寫字樓買賣租賃之中介專才，粵語稱之為：",
          "options": [
            "地產經紀 (dei6 caan2 ging1 gei2 / Real Estate Agent)",
            "司機 (si1 gei1)",
            "廚師 (cyu4 si1)",
            "波友 (bo1 jau5)"
          ],
          "answerIndex": 0,
          "explanation": "房產物業代理在香港通稱為「地產經紀」（dei6 caan2 ging1 gei2）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【商務敬語】在粵語中，禮貌敬語「喺邊度高就呀？」之確切含義為：",
          "options": [
            "請問您在哪裡任職工作？ (Where do you work? - Polite)",
            "請問您住在哪座高山？) (Context: 香港核心工種與專業職銜：「做邊行」、「工程師」、「會計師」、「地產經紀)",
            "請問您爬了多高的山？) (Context: 香港核心工種與專業職銜：「做邊行」、「工程師」、「會計師」、「地產經紀)",
            "請問您身材有多高？) (Context: 香港核心工種與專業職銜：「做邊行」、「工程師」、「會計師」、「地產經紀)"
          ],
          "answerIndex": 0,
          "explanation": "「高就」（gou1 zau6）係商務場合禮貌詢問任職機構之敬語辭令。"
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
    "title": "職場日常動作與公務流程：「開會」、「見客」、「見工面試」、「出差」 (Office Routines & Business Trips)",
    "level": "A2",
    "objective": "掌握粵語辦公室核心業務動作（開會、見客、見工面試、出差公幹）與解決疑難問題地道俚語（拆掂佢）。",
    "presentation": {
      "explanation": "在快節奏之香港職場環境中，公務處理、客戶接洽與商務出差擁有一整套乾脆俐落之粵語動作動詞體系：\n\n一、核心辦公室公務動作解析：\n１．「見工 / 面試」：求職應聘面試。粵語日常極少講「找工作面試」，而一律講「去見工」。「見工」直譯為「與僱主見面確認工作職位與雙向選擇」。\n２．「見客 / 傾生意」：會見商務客戶、商談業務合作條款與訂單契約。\n３．「開會 / 開早會 / 散會」：召開定期例會、晨會或會議圓滿結束解散。\n４．「出差 / 公幹」：離開常駐機構前往外地執行商務公務任務（常講「飛外地出差」或「返大灣區公幹交流」）。\n\n二、職場危機處理與辦事效率俚語：\n１．「拆掂佢 / 搞掂佢」：「拆」本義為拆解排查炸彈難題，「拆掂」專指憑藉智慧協調將棘手難題圓滿化解平息妥當。\n２．「見招拆招」：根據現場突發情況靈活機變應對處置。\n３．「跟進 / 跟單」：持續跟進項目進度或訂單落實情況。",
      "examples": [
        {
          "target": "我下個禮拜一朝早要去中環總行見工面試，依家要好好準備自我介紹同履歷表。",
          "reading": "ngo5 haa6 go3 lai5 baai3 jat1 ziu1 zou2 jiu3 heoi3 zung1 waan4 zung2 hong4 gin3 gung1 min6 si3, ji1 gaa1 jiu3 hou2 hou2 zeon2 bei6 zi6 ngo5 gaai3 siu6 tung4 maai4 lei5 lik6 biu2. [ŋɔː˩˧ haː˨ kɔː˧ lɐi˩˧ paːi˧ jɐt̚˥ tsiːu˥ tsou˧˥ jiu˧ hɵy˧ tsʊŋ˥ waːn˨˩ tsʊŋ˧˥ hɔːŋ˨˩ kiːn˧ kʊŋ˥ miːn˨ siː˧, jiː˥ kaː˥ jiu˧ hou˧˥ hou˧˥ tsɵn˧˥ pei˨ tsiː˨ ŋɔː˩˧ kaːi˧ siu˨ tʰʊŋ˨˩ maːi˨˩ lei˩˧ lɪk̚˨ piːu˧˥] (NGOH HAH-GOH LY-BY-YUT JIU-JOU YEW HOEY JOONG-WAHN JOONG-HONG GEEN-GONG MEEN-SEE, YEE-GAH YEW HOH-HOH JEUN-BAY JEE-NGOH GAI-SIU TOONG-MY LY-LIK-BEW)",
          "translation": "Next Monday morning I have to go to the Central main branch for a job interview; now I need to thoroughly prepare my self-introduction and resume."
        },
        {
          "target": "經理今日成日都要出外見客傾合約，你有急事就打佢手提電話搵佢啦。",
          "reading": "ging1 lei5 gam1 jat6 seng4 jat6 dou1 jiu3 ceot1 ngoi6 gin3 haak3 king1 hap6 joek3, nei5 jau5 gap1 si6 zau6 daa2 keoi5 sau2 tai4 din6 waa2 wan2 keoi5 laa1. [kɪŋ˥ lei˩˧ kɐm˥ jɐt˨ sɛːŋ˨˩ jɐt˨ tou˥ jiu˧ tsʰɵt̚˥ ŋɔːi˨ kiːn˧ haːk̚˧ kʰɪŋ˥ hɐp̚˨ jœːk̚˧, nei˩˧ jɐu˩˧ kɐp̚˥ siː˨ tsɐu˨ taː˧˥ kʰɵy˩˧ sɐu˧˥ tʰɐi˨˩ tiːn˨ waː˧˥ wɐn˧˥ kʰɵy˩˧ laː˥] (GING-LY GUM-YUT SENG-YUT DOH YEW CHUT-NGOY GEEN-HAHK KING HUP-YEUK, NEI YAU GUP-SEE JAU DY KUY SAU-TY DEEN-WAH WUN KUY LAH)",
          "translation": "The manager has to be out meeting clients to negotiate contracts all day today; if you have urgent matters, call his mobile phone to find him."
        },
        {
          "target": "呢個項目雖然好棘手，但係只要團隊合作，我哋一定可以幫老細拆掂佢！",
          "reading": "ni1 go3 hong6 muk6 seoi1 jin4 hou2 gik1 sau2, daan6 hai6 zi2 jiu3 tyun4 deoi6 hap6 zok3, ngo5 dei6 jat1 ding6 ho2 ji5 bong1 lou5 sai3 caak3 dim6 keoi5! [niː˥ kɔː˧ hɔːŋ˨ mʊk̚˨ sɵy˥ jiːn˨˩ hou˧˥ kɪk̚˥ sɐu˧˥, taːn˨ hɐi˨ tsiː˧˥ jiu˧ tʰyːn˨˩ tɵy˨ hɐp̚˨ tsɔːk̚˧, ŋɔː˩˧ tei˨ jɐt̚˥ tɪŋ˨ hɔː˧˥ jiː˩˧ pɔːŋ˥ lou˧˥ sɐi˧ tsʰaːk̚˧ tiːm˨ kʰɵy˩˧!] (NEE-GOH HONG-MOOK SOEY-YEEN HOH-GIK-SAU, DAHN-HY JEE-YEW TUEN-DEOY HUP-JOK, NGOH-DAY YUT-DING HOH-YEE BONG LOU-SY CHAHK-DEEM-KUY!)",
          "translation": "Although this project is very thorny, as long as the team cooperates, we will definitely be able to resolve it smoothly for the boss!"
        }
      ],
      "mnemonics": [
        "【公務實戰訣】求職面試叫「見工」，約談客戶「見客」忙；遇到難題「拆掂佢」，出差公幹跑四方！"
      ],
      "culturalNotes": [
        "在香港商業文化中，「見工」（求職面試）與「見客」（洽談業務）極為注重準時守信（Punctuality）與專業著裝（Business Attire）。「拆掂佢」（搞定化解難題）更係衡量一位員工職場執行力與應變情商之核心口頭禪。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【求職表達】在粵語中描述「前往企業應聘職位參加求職面試」，最地道之說法係：",
          "options": [
            "去見工 (heoi3 gin3 gung1)",
            "去買工 (掌握粵語辦公室核心業務動作（開會、見客、見工面試、出差公幹）與解決疑難問題地道俚語（拆掂佢）。) (職場日常動作與公務流程：「開會」、「見客」、「見工面試」、「出差」 (Office Routines & Business Trips))",
            "去行工 (掌握粵語辦公室核心業務動作（開會、見客、見工面試、出差公幹）與解決疑難問題地道俚語（拆掂佢）。) (職場日常動作與公務流程：「開會」、「見客」、「見工面試」、「出差」 (Office Routines & Business Trips))",
            "去搭工 (掌握粵語辦公室核心業務動作（開會、見客、見工面試、出差公幹）與解決疑難問題地道俚語（拆掂佢）。) (職場日常動作與公務流程：「開會」、「見客」、「見工面試」、「出差」 (Office Routines & Business Trips))"
          ],
          "answerIndex": 0,
          "explanation": "參加求職面試在粵語中稱為「見工」（gin3 gung1）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【職場俚語】當遇到棘手複雜之業務突發危機，主管要求下屬「想辦法協調妥善解決」，口語常講：",
          "options": [
            "諗辦法幫手拆掂佢！ (lam2 baan6 faat3 bong1 sau2 caak3 dim6 keoi5!)",
            "諗辦法幫手炒魷魚！ (掌握粵語辦公室核心業務動作（開會、見客、見工面試、出差公幹）與解決疑難問題地道俚語（拆掂佢）。) (職場日常動作與公務流程：「開會」、「見客」、「見工面試」、「出差」 (Office Routines & Business Trips))",
            "諗辦法幫手遞信！ (掌握粵語辦公室核心業務動作（開會、見客、見工面試、出差公幹）與解決疑難問題地道俚語（拆掂佢）。) (職場日常動作與公務流程：「開會」、「見客」、「見工面試」、「出差」 (Office Routines & Business Trips))",
            "諗辦法幫手派散水餅！ (掌握粵語辦公室核心業務動作（開會、見客、見工面試、出差公幹）與解決疑難問題地道俚語（拆掂佢）。) (職場日常動作與公務流程：「開會」、「見客」、「見工面試」、「出差」 (Office Routines & Business Trips))"
          ],
          "answerIndex": 0,
          "explanation": "「拆掂佢」（caak3 dim6 keoi5）指把困難難題圓滿化解處理妥當。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【公務術語】粵語動詞短語「傾生意」（king1 saang1 ji3）之確切含義為：",
          "options": [
            "與客戶洽談商務合作與合約訂單 (Negotiating business deals)",
            "向主管申請休假 (掌握粵語辦公室核心業務動作（開會、見客、見工面試、出差公幹）與解決疑難問題地道俚語（拆掂佢）。) (職場日常動作與公務流程：「開會」、「見客」、「見工面試」、「出差」 (Office Routines & Business Trips))",
            "在辦公室吃下午茶 (掌握粵語辦公室核心業務動作（開會、見客、見工面試、出差公幹）與解決疑難問題地道俚語（拆掂佢）。) (職場日常動作與公務流程：「開會」、「見客」、「見工面試」、「出差」 (Office Routines & Business Trips))",
            "操作影印機複印文件 (掌握粵語辦公室核心業務動作（開會、見客、見工面試、出差公幹）與解決疑難問題地道俚語（拆掂佢）。) (職場日常動作與公務流程：「開會」、「見客」、「見工面試」、「出差」 (Office Routines & Business Trips))"
          ],
          "answerIndex": 0,
          "explanation": "「傾生意」（king1 saang1 ji3）指洽談商業合作、商談買賣訂單。"
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
    "title": "辦公室日常設備與文儀用品：「影印機」、「碎紙機」、「夾萬」、「釘書機」 (Office Equipment & Supplies)",
    "level": "A2",
    "objective": "掌握香港辦公室日常文儀用品與辦公設備專屬詞彙（影印機、碎紙機、夾萬、釘書機、萬字夾、改錯帶）。",
    "presentation": {
      "explanation": "香港辦公室文儀用品與設備名稱保留了大量極具歷史淵源與視覺特徵之本土特色粵語名詞：\n\n一、核心辦公室自動化設備名詞：\n１．「影印機」：複印機設備。複印文件動作稱為「影印文件」或口語「印嘢」。「打印機」則指電腦打印設備。\n２．「碎紙機」：將機密敏感文件切碎銷毀之碎紙設備。\n３．「夾萬」：保險箱、保險櫃。字面意為「能夾藏萬貫家財之堅固鐵櫃」，極富嶺南商貿歷史底蘊。\n\n二、高頻文儀文具用品名詞辨析：\n１．「釘書機 / 釘書釘」：訂書機與訂書針。粵語動詞用「釘」（例如「幫手將份報告釘好佢」）。\n２．「萬字夾」：迴形針、曲別針（因其金屬形狀彎曲酷似傳統漢字『萬』字之佛宗吉祥符號而得名）。\n３．「改錯帶 / 改錯水」：塗改帶與修正液。\n４．「原子筆」：圓珠筆、原子筆。\n５．「螢光筆」：高亮熒光標記筆。\n６．「公文袋 / 膠擦」：牛皮紙檔案袋與橡皮擦。",
      "examples": [
        {
          "target": "部影印機突然卡紙仲閃緊紅燈添，唔該你幫手打開機蓋攞返張紙出嚟。",
          "reading": "bou6 jing2 jan3 gei1 tat1 jin4 kaat1 zi2 zung6 sim2 gan2 hung4 dang1 tim1, m4 goi1 nei5 bong1 sau2 daa2 hoi1 gei1 goi3 lo2 faan1 zoeng1 zi2 ceot1 lai4. [pou˨ jɪŋ˧˥ jɐn˧ kei˥ tʰɐt̚˥ jiːn˨˩ kʰaːt̚˥ tsiː˧˥ tsʊŋ˨ siːm˧˥ kɐn˩˧ hʊŋ˨˩ tɐŋ˥ tʰiːm˥, m̩˨˩ kɔːi˥ nei˩˧ pɔːŋ˥ sɐu˧˥ taː˧˥ hɔːi˥ kei˥ kɔːi˧ lɔː˧˥ faːn˥ tsœːŋ˥ tsiː˧˥ tsʰɵt̚˥ lɐi˨˩] (BOU YING-YUN-GAY TUT-YEEN KAHT-JEE JOONG SEEM-GUN HOONG-DUNG TEEM, M-GOI NEI BONG-SAU DY-HOI GAY-GOI LOH-FAHN JEUNG-JEE CHUT-LY)",
          "translation": "The photocopier suddenly got paper jammed and is flashing a red light; please help open the machine cover to take the paper out."
        },
        {
          "target": "呢啲包含客戶個人資料嘅舊文件好敏感，一定要放入碎紙機徹底銷毀。",
          "reading": "ni1 di1 baau1 ham4 haak3 wu6 go3 jan4 zi1 liu6*2 ge3 gau6 man4 gin62 hou2 man5 gam2, jat1 ding6 jiu3 fong3 jap6 seoi3 zi2 gei1 cit3 dai2 siu1 wai2. [niː˥ tiː˥ paːu˥ hɐm˨˩ haːk̚˧ wuː˨ kɔː˧ jɐn˨˩ tsiː˥ liːu˧˥ kɛː˧ kɐu˨ mɐn˨˩ kiːn˧˥ hou˧˥ mɐn˩˧ kɐm˧˥, jɐt̚˥ tɪŋ˨ jiu˧ fɔːŋ˧ jɐp̚˨ sɵy˧ tsiː˧˥ kei˥ tsʰiːt̚˧ tɐi˧˥ siːu˥ wɐi˧˥] (NEE-DEE BAU-HUM HAHK-WOO GOH-YUN JEE-LEW GEH GAU-MUN-GEEN HOH-MUN-GUM, YUT-DING YEW FONG-YUP SOEY-JEE-GAY CHEET-DY SEW-WY)",
          "translation": "These old documents containing clients' personal data are very sensitive; they must be put into the paper shredder to be completely destroyed."
        },
        {
          "target": "秘書用釘書機將十幾張報價單整整齊齊咁釘埋一齊，放喺公文袋入面。",
          "reading": "bei3 syu1 jung6 deng1 syu1 gei1 zoeng1 sap6 gei2 zoeng1 bou3 gaa3 daan1 zing2 zing2 cai4 cai4 gam2 deng1 maai4 jat1 cai4, fong3 hai2 gung1 man4 doi2 jap6 min6. [pei˧ syː˥ jʊŋ˨ tɛːŋ˥ syː˥ kei˥ tsœːŋ˥ sɐp̚˨ kei˧˥ tsœːŋ˥ pou˧ kaː˧ taːn˥ tsɪŋ˧˥ tsɪŋ˧˥ tsʰɐi˨˩ tsʰɐi˨˩ kɐm˧˥ tɛːŋ˥ maːi˨˩ jɐt̚˥ tsʰɐi˨˩, fɔːŋ˧ hɐi˩˧ kʊŋ˥ mɐn˨˩ tɔːi˧˥ jɐp̚˨ miːn˨] (BAY-SYU YOONG DENG-SYU-GAY JEUNG SUP-GAY JEUNG BOU-GAH-DAHN JING-JING-CHY-CHY GUM DENG-MY YUT-CHY, FONG HY GONG-MUN-DOY YUP-MEEN)",
          "translation": "The secretary used a stapler to neatly staple over a dozen quotation sheets together and put them inside the document envelope."
        }
      ],
      "mnemonics": [
        "【辦公文儀訣】複印文件「影印機」，銷毀機密「碎紙機」；金銀鎖入「大夾萬」，裝訂文件「釘書機」！"
      ],
      "culturalNotes": [
        "「夾萬」（保險箱）一詞極具嶺南特色，香港各大金行、洋行自十九世紀開埠以來均將重型鑄鐵保險箱稱為「大夾萬」。而「萬字夾」（迴形針）則生動展現出粵人依據漢字象形特徵進行造詞之智慧。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【文儀名詞】在粵語中描述辦公室用來裝訂文件的「訂書機」與「迴形針」，正確之名稱分別係：",
          "options": [
            "釘書機、萬字夾 (deng1 syu1 gei1, maan6 zi6 gaap3)",
            "夾書機、回形扣 (掌握香港辦公室日常文儀用品與辦公設備專屬詞彙（影印機、碎紙機、夾萬、釘書機、萬字夾、改錯帶）。) (辦公室日常設備與文儀用品：「影印機」、「碎紙機」、「夾萬」、「釘書機」 (Office Equipment & Supplies))",
            "訂紙機、鐵絲環 (掌握香港辦公室日常文儀用品與辦公設備專屬詞彙（影印機、碎紙機、夾萬、釘書機、萬字夾、改錯帶）。) (辦公室日常設備與文儀用品：「影印機」、「碎紙機」、「夾萬」、「釘書機」 (Office Equipment & Supplies))",
            "合頁機、字形扣 (掌握香港辦公室日常文儀用品與辦公設備專屬詞彙（影印機、碎紙機、夾萬、釘書機、萬字夾、改錯帶）。) (辦公室日常設備與文儀用品：「影印機」、「碎紙機」、「夾萬」、「釘書機」 (Office Equipment & Supplies))"
          ],
          "answerIndex": 0,
          "explanation": "訂書機在粵語中稱為「釘書機」，迴形針稱為「萬字夾」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【設備識別】公司財務部用來存放現金印章與極重要機密文件之安全保險箱，粵語稱之為：",
          "options": [
            "夾萬 (gaap3 maan6 / Safe)",
            "影印機 (jing2 jan3 gei1)",
            "碎紙機 (seoi3 zi2 gei1)",
            "公文袋 (gung1 man4 doi2)"
          ],
          "answerIndex": 0,
          "explanation": "保險箱在粵語中稱為「夾萬」（gaap3 maan6）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【辦公操作】當辦公室影印機出現「卡紙」（kaat1 zi2）故障時，其確切含義為：",
          "options": [
            "打印紙張夾在機器滾輪內部無法順暢運轉輸出 (Paper jam)",
            "影印機的墨水用完了 (掌握香港辦公室日常文儀用品與辦公設備專屬詞彙（影印機、碎紙機、夾萬、釘書機、萬字夾、改錯帶）。) (辦公室日常設備與文儀用品：「影印機」、「碎紙機」、「夾萬」、「釘書機」 (Office Equipment & Supplies))",
            "影印機電源線被拔掉 (掌握香港辦公室日常文儀用品與辦公設備專屬詞彙（影印機、碎紙機、夾萬、釘書機、萬字夾、改錯帶）。) (辦公室日常設備與文儀用品：「影印機」、「碎紙機」、「夾萬」、「釘書機」 (Office Equipment & Supplies))",
            "影印機被鎖進了夾萬 (掌握香港辦公室日常文儀用品與辦公設備專屬詞彙（影印機、碎紙機、夾萬、釘書機、萬字夾、改錯帶）。) (辦公室日常設備與文儀用品：「影印機」、「碎紙機」、「夾萬」、「釘書機」 (Office Equipment & Supplies))"
          ],
          "answerIndex": 0,
          "explanation": "「卡紙」（kaat1 zi2）指紙張卡在印表機或影印機內部。"
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
    "title": "薪酬福利、假期與勞工法例：「人工」、「雙糧」、「花紅」、「強積金 MPF」 (Compensation & Benefits)",
    "level": "A2",
    "objective": "掌握香港薪酬福利核心制度詞彙（人工/出糧、雙糧、花紅/年終獎、強積金MPF、大假/年假、勞工假與銀行假）。",
    "presentation": {
      "explanation": "香港勞工僱傭條例與薪酬福利體系擁有鮮明之法制規範與地道粵語表達方式：\n\n一、薪酬與年終獎勵名詞深度解析：\n１．「人工 / 糧」：薪金工資待遇。發放月薪稱為「出糧」，調增薪資稱為「加人工」，減薪稱為「減人工」。\n２．「雙糧」：第十三個月年終雙薪保障。\n３．「花紅」：依據公司全年盈利狀況發放之浮動年終分紅獎金。\n４．「強積金 / MPF」：強制性公積金制度。法定由僱員與僱主各出資百分之五撥入專屬退休信託基金賬戶。\n\n二、香港法定假期分類與休假術語：\n１．「大假 / 年假」：僱員合同享有之帶薪年假福利。\n２．「勞工假」與「銀行假」之關鍵差異：\n- 「勞工假」：香港勞工法例規定之法定假日（每年現為十四天並逐步遞增至十七天）。\n- 「銀行假 / 公眾假期」：香港公眾假期條例規定之全體十七天法定假日（銀行、政府機構與大型外企普遍享有）。\n３．「有薪病假」：憑註冊醫生簽發之醫生紙申請之帶薪病假福利。",
      "examples": [
        {
          "target": "公司每年年尾除咗保證出雙糧之外，業績好嗰陣仲會派兩至三個月花紅添。",
          "reading": "gung1 si1 mui5 nin4 nin4 mei5 ceoi4 zo2 bou2 zing3 ceot1 soeng1 loeng4 zi1 ngoi6, jip6 zik1 hou2 go2 zan6 zung6 wui5 paai3 loeng5 zi3 saam1 go3 jyut6 faa1 hung4 tim1. [kʊŋ˥ siː˥ muːi˩˧ niːn˨˩ niːn˨˩ mei˩˧ tsʰɵy˨˩ tsɔː˧˥ pou˧˥ tsɪŋ˧ tsʰɵt̚˥ sœːŋ˥ lœːŋ˨˩ tsiː˥ ŋɔːi˨, jiːp̚˨ tsɪk̚˥ hou˧˥ kɔː˧˥ tsɐn˨ tsʊŋ˨ wuːi˩˧ pʰaːi˧ lœːŋ˩˧ tsiː˧ saːm˥ kɔː˧ jyːt̚˨ faː˥ hʊŋ˨˩ tʰiːm˥] (GONG-SEE MOOI-NEEN NEEN-MAY CHOEY-JOR BOU-JING CHUT SEUNG-LEUNG JEE-NGOY, YEAP-JIK HOH GOH-JUN JOONG WUI PY LEUNG JEE SAHM GOH YUET FAH-HOONG TEEM)",
          "translation": "Every year-end, besides guaranteeing a 13th-month double pay, the company also distributes two to three months of bonus when business performance is good."
        },
        {
          "target": "每個月出糧嗰陣，公司會喺我份人工入面扣除百分之五供強積金。",
          "reading": "mui5 go3 jyut6 ceot1 loeng4 go2 zan6, gung1 si1 wui5 hai2 ngo5 fan6 jan4 gung1 jap6 min6 kau3 ceoi4 baak3 fan6 zi1 ng5 gung1 koeng4 zik1 gam1. [muːi˩˧ kɔː˧ jyːt̚˨ tsʰɵt̚˥ lœːŋ˨˩ kɔː˧˥ tsɐn˨, kʊŋ˥ siː˥ wuːi˩˧ hɐi˩˧ ŋɔː˩˧ fɐn˨ jɐn˨˩ kʊŋ˥ jɐp̚˨ miːn˨ kʰɐu˧ tsʰɵy˨˩ paːt̚˧ fɐn˨ tsiː˥ ŋ̩˩˧ kʊŋ˥ kʰœːŋ˨˩ tsɪk̚˥ kɐm˥] (MOOI-GOH-YUET CHUT-LEUNG GOH-JUN, GONG-SEE WUI HY NGOH FUN YUN-GONG YUP-MEEN KAU-CHOEY BAHK-FUN-JEE-NG GOONG KEUNG-JIK-GUM)",
          "translation": "Every month when salary is disbursed, the company will deduct five percent from my pay to contribute to the Mandatory Provident Fund."
        },
        {
          "target": "我今年仲有七日大假未放，諗住請連續幾日假去日本旅行賞櫻花。",
          "reading": "ngo5 gam1 nin4 zung6 jau5 cat1 jat6 daai6 gaa3 mei6 fong3, lam2 zyu6 cing2 lin4 zuk6 gei2 jat6 gaa3 heoi3 jat6 bun2 leoi5 hang4 soeng2 jing1 faa1. [ŋɔː˩˧ kɐm˥ niːn˨˩ tsʊŋ˨ jɐu˩˧ tsʰɐt̚˥ jɐt˨ taːi˨ kaː˧ mei˨ fɔːŋ˧, lɐm˧˥ tsyː˨ tsʰɪŋ˧˥ liːn˨˩ tsʊk̚˨ kei˧˥ jɐt˨ kaː˧ hɵy˧ jɐt˨ puːn˧˥ lɵy˩˧ hɐŋ˨˩ sœːŋ˧˥ jɪŋ˥ faː˥] (NGOH GUM-NEEN JOONG YAU CHUT-YUT DY-GAH MAY FONG, LUM-JYU CHING LEEN-JOOK GAY-YUT-GAH HOEY YUT-BOON LOEY-HAHNG SEUNG-YING-FAH)",
          "translation": "I still have seven days of annual leave untaken this year, planning to apply for several consecutive days off to travel to Japan to view cherry blossoms."
        }
      ],
      "mnemonics": [
        "【薪酬福利歌】每月出糧「發人工」，年尾雙薪「出雙糧」；盈利分紅「派花紅」，法定退休「供強積」！"
      ],
      "culturalNotes": [
        "「出糧」（發薪水）源於古代軍隊發放糧草餉銀之說法，在香港沿用至今。香港上班族每逢月底收到薪水時常歡呼「今日出糧喇！」，並會相約親友「食餐好嘅」以慶祝辛勤工作的回報。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【福利名詞】在香港職場中，年終固定加發一個月薪水之薪酬制度，口語稱為：",
          "options": [
            "雙糧 (soeng1 loeng4 / 13th Month Pay)",
            "單糧) (Context: 薪酬福利、假期與勞工法例：「人工」、「雙糧」、「花紅」、「強積金 MP)",
            "半糧) (Context: 薪酬福利、假期與勞工法例：「人工」、「雙糧」、「花紅」、「強積金 MP)",
            "空糧) (Context: 薪酬福利、假期與勞工法例：「人工」、「雙糧」、「花紅」、「強積金 MP)"
          ],
          "answerIndex": 0,
          "explanation": "年終加發一個月薪水在香港稱為「雙糧」（soeng1 loeng4）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【制度簡稱】香港法定之退休保障制度「強制性公積金」，英文簡稱與中文口語簡稱為：",
          "options": [
            "強積金 / MPF (koeng4 zik1 gam1)",
            "養老金 / CPP",
            "退休保 / 401K",
            "醫保卡 / NHS"
          ],
          "answerIndex": 0,
          "explanation": "香港強制性公積金簡稱為「強積金」或英文縮寫「MPF」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【假期辨析】香港上班族口語中所講之「放公眾大假」（daai6 gaa3），確切指代：",
          "options": [
            "僱員合同中享有的法定帶薪年假 (Paid Annual Leave)",
            "週末兩天雙休日) (Context: 薪酬福利、假期與勞工法例：「人工」、「雙糧」、「花紅」、「強積金 MP)",
            "因病請假的病假) (Context: 薪酬福利、假期與勞工法例：「人工」、「雙糧」、「花紅」、「強積金 MP)",
            "政府規定的颱風假) (Context: 薪酬福利、假期與勞工法例：「人工」、「雙糧」、「花紅」、「強積金 MP)"
          ],
          "answerIndex": 0,
          "explanation": "在香港職場中，「大假」（daai6 gaa3）指代帶薪年假（Annual Leave）。"
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
    "title": "職場升遷、離職與職場俚語實戰：「升職」、「跳槽」、「遞信」、「派散水餅」 (Promotions & Farewells)",
    "level": "A2",
    "objective": "掌握香港職場升遷（升職加薪）、跳槽轉工、主動離職（遞信）、被解僱（炒魷魚）與獨特離職告別習俗（派散水餅）。",
    "presentation": {
      "explanation": "香港職場文化極具活力與流動性，在升遷、跳槽、離職告別等關鍵轉折點上，發展出一整套獨具人文特色之經典粵語俚語體系：\n\n一、職場升遷與轉工跳槽名詞：\n１．「升職 / 升職加薪」：獲得職級晉升並提升薪酬福利待遇。\n２．「跳槽 / 轉工」：更換工作東家、跳往待遇更優厚之新機構發展。\n３．「挖角 / 獵頭」：同行機構以高薪厚職挖走核心關鍵專才。\n\n二、主動離職與被動解僱之生動俚語：\n１．「遞信」：主動遞交辭職信件。香港通常僱傭合同規定「一個月通知期」，遞信後需完成一個月工作交接方可正式離任。\n２．「炒魷魚 / 畀老細炒」：被僱主解僱開除。典故源於早年廣東打工者自備草蓆行李，一旦被解僱便捲起草蓆鋪蓋走人，其捲縮形態恰似熱鍋中受熱捲曲之魷魚片，故生動稱作「炒魷魚」。\n\n三、香港獨一無二之職場離職告別習俗：\n１．「派散水餅」：「散水」在粵語中意為「散夥、離去、各奔前程」。員工在最後工作日自費購買精緻西餅蛋糕或甜點逐一派發給同組同事與主管，表達感謝關照並互道珍重祝福，係香港職場極為重視之傳統社交禮儀。",
      "examples": [
        {
          "target": "佢喺公司做咗五年表現出色，上個月終於升職做咗市場部高級經理。",
          "reading": "keoi5 hai2 gung1 si1 zou6 zo2 ng5 nin4 biu2 jin6 ceot1 sik1, soeng6 go3 jyut6 zung1 jyu1 sing1 zik1 zou6 zo2 si5 coeng4 bou6 gou1 kap1 ging1 lei5. [kʰɵy˩˧ hɐi˩˧ kʊŋ˥ siː˥ tsou˨ tsɔː˧˥ ŋ̩˩˧ niːn˨˩ piːu˧˥ jiːn˨ tsʰɵt̚˥ sɪk̚˥, sœːŋ˨ kɔː˧ jyːt̚˨ tsʊŋ˥ jyː˩ sing1 zik1 zou˨ tsɔː˧˥ siː˩˧ tsʰœːŋ˨˩ pou˨ kou˥ kʰɐp̚˥ kɪŋ˥ lei˩˧] (KUY HY GONG-SEE JOH-JOR NG-NEEN BEW-YEEN CHUT-SIK, SEUNG-GOH-YUET JOONG-YU SING-JIK JOH-JOR SEE-CHEUNG-BOU GOU-KUP GING-LY)",
          "translation": "He has worked at the company for five years with outstanding performance; last month he was finally promoted to senior marketing manager."
        },
        {
          "target": "我已經搵到新工，今日正式向老細遞信，下個月底就正式離職跳槽。",
          "reading": "ngo5 ji5 ging1 wan2 dou2 san1 gung1, gam1 jat6 zing3 sik1 hoeng3 lou5 sai3 dai6 seon3, haa6 go3 jyut6 dai2 zau6 zing3 sik1 lei4 zik1 tiu3 cou4. [ŋɔː˩˧ jiː˩˧ kɪŋ˥ wɐn˧˥ tou˧˥ sɐn˥ kʊŋ˥, kɐm˥ jɐt˨ tsɪŋ˧ sɪk̚˥ hœːŋ˧ lou˧˥ sɐi˧ tɐi˨ sɵn˧, haː˨ kɔː˧ jyːt̚˨ tɐi˧˥ tsɐu˨ tsɪŋ˧ sɪk̚˥ lei˨˩ tsɪk̚˨ tʰiːu˧ tsʰou4] (NGOH YEE-GING WUN-DOU SUN-GONG, GUM-YUT JING-SIK HEUNG LOU-SY DY-SEUN, HAH-GOH-YUET-DY JAU JING-SIK LY-JIK TEW-CHOU)",
          "translation": "I have already found a new job; today I officially submitted my resignation letter to the boss, and at the end of next month I will officially leave and switch companies."
        },
        {
          "target": "今日係陳小姐最後一日返工，佢下晝買咗好多精緻蛋糕派散水餅畀大家。",
          "reading": "gam1 jat6 hai6 can4 siu2 ze2 zeoi3 hau6 jat1 jat6 faan1 gung1, keoi5 haa6 zau3 maai5 zo2 hou2 do1 zing1 zi3 daan6 gou1 paai3 saan2 seoi2 beng2 bei2 daai6 gaa1. [kɐm˥ jɐt˨ hɐi˨ tsʰɐn˨˩ siu˧˥ tsɛː˧˥ tsɵy˧ hɐu˨ jɐt̚˥ jɐt˨ faːn˥ kʊŋ˥, kʰɵy˩˧ haː˨ tsɐu˧ maːi˩˧ tsɔː˧˥ hou˧˥ tɔː˥ tsɪŋ˥ tsiː˧ taːn˨ kou˥ pʰaːi˧ saːn˧˥ sɵy˧˥ pɛːŋ˧˥ pei˨ taːi˨ kaː˥] (GUM-YUT HY CHUN-SIU-JEH JEOY-HAU YUT-YUT FAHN-GONG, KUY HAH-JAU MY-JOR HOH-DOH JING-JEE DAHN-GOU PY SAHN-SOEY-BENG BAY DY-GAH)",
          "translation": "Today is Miss Chan's last day at work; this afternoon she bought many exquisite cakes to distribute as farewell pastries to everyone."
        }
      ],
      "mnemonics": [
        "【職場離合歌】努力打拼「升職」快，尋覓高就「跳槽」忙；主動離職「遞封信」，最後一天「派散水」！"
      ],
      "culturalNotes": [
        "「派散水餅」係香港極具代表性之職場人情文化。無論離職原因如何，在最後一天向昔日戰友同事派發精緻美味之散水餅，象徵好聚好散、山水有相逢，留下良好之口碑與人脈網絡。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【離職習俗】香港員工在最後一個工作日（Last Day）購買西餅甜品派發給同事以示告別感謝，此傳統稱為：",
          "options": [
            "派散水餅 (paai3 saan2 seoi2 beng2 / Farewell Cakes)",
            "派月餅) (Context: 職場升遷、離職與職場俚語實戰：「升職」、「跳槽」、「遞信」、「派散水餅)",
            "派嫁女餅) (Context: 職場升遷、離職與職場俚語實戰：「升職」、「跳槽」、「遞信」、「派散水餅)",
            "派老婆餅) (Context: 職場升遷、離職與職場俚語實戰：「升職」、「跳槽」、「遞信」、「派散水餅)"
          ],
          "answerIndex": 0,
          "explanation": "香港職場離職告別時派發的告別點心稱為「散水餅」（saan2 seoi2 beng2）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【職場動作】在粵語中描述員工「主動向主管提交辭職信」，最標準之口語短語係：",
          "options": [
            "遞信 (dai6 seon3)",
            "寄信) (Context: 職場升遷、離職與職場俚語實戰：「升職」、「跳槽」、「遞信」、「派散水餅)",
            "收信) (Context: 職場升遷、離職與職場俚語實戰：「升職」、「跳槽」、「遞信」、「派散水餅)",
            "印信) (Context: 職場升遷、離職與職場俚語實戰：「升職」、「跳槽」、「遞信」、「派散水餅)"
          ],
          "answerIndex": 0,
          "explanation": "提交辭職信在粵語中稱為「遞信」（dai6 seon3）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【成語溯源】粵語經典俚語「畀老細炒魷魚」（caau2 jau4 jyu42）之實際含義為：",
          "options": [
            "被老闆解僱開除 (Being dismissed / Fired by the boss)",
            "被老闆邀請吃海鮮大餐) (Context: 職場升遷、離職與職場俚語實戰：「升職」、「跳槽」、「遞信」、「派散水餅)",
            "在公司廚房烹飪海鮮) (Context: 職場升遷、離職與職場俚語實戰：「升職」、「跳槽」、「遞信」、「派散水餅)",
            "獲得老闆升職加薪獎勵) (Context: 職場升遷、離職與職場俚語實戰：「升職」、「跳槽」、「遞信」、「派散水餅)"
          ],
          "answerIndex": 0,
          "explanation": "「炒魷魚」指被解僱、開除（源於打工者捲起鋪蓋捲行李之形象）。"
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
    "title": "粵語後置超越比較句：「A + 形容詞 + 過 + B」（平過、貴過、快過、大過） (Post-Adjectival Comparatives)",
    "level": "A2",
    "objective": "掌握粵語最核心之後置超越比較句句型「A + 形容詞 + 過 + B」，精準區分粵語後置與現代標準漢語前置之語序本質差異。",
    "presentation": {
      "explanation": "粵語之比較句型保留了上古漢語與中古漢語經典語序特徵，與現代標準漢語存在極為顯著之結構差異：\n\n一、核心後置超越比較句公式：\n１．基本語法結構：【主語Ａ ＋ 形容詞謂語 ＋ 「過」 ＋ 比較對象Ｂ】。\n２．語序本質對比：現代標準漢語採用介詞前置結構「Ａ比Ｂ＋形容詞」，而粵語則嚴格遵循形容詞後接比較標記之古漢語語序「Ａ＋形容詞＋過＋Ｂ」（源自古漢語「苛政猛於虎」之后置介引結構）。\n\n二、高頻核心形容詞搭配辨析：\n１．「平過」：價格比某物更便宜實惠。\n２．「貴過」：價格比某物更昂貴。\n３．「快過」：速度比某事物更快捷迅猛。\n４．「大過」：體積大於某物，或在年齡上長於某人（例如「佢大過我」意為他年紀比我大）。\n５．「細過」：體積小於某物，或在年齡上小於某人。\n６．「好過」：品質或處境優於某事物（口語常講「好過冇」意為聊勝於無）。",
      "examples": [
        {
          "target": "搭港鐵去中環快過搭巴士好多，而且完全唔使驚塞車。",
          "reading": "daap3 gong2 tit3 heoi3 zung1 waan4 faai3 gwo3 daap3 baa1 si6*2 hou2 do1, ji4 ce2 jyun4 cyun4 m4 sai2 geng1 sak1 ce1. [taːp̚˧ kɔːŋ˧˥ tʰiːt̚˧ hɵy˧ tsʊŋ˥ waːn˨˩ faːi˧ kʷɔː˧ taːp̚˧ paː˥ siː˧˥ hou˧˥ tɔː˥, jiː˨˩ tsʰɛː˧˥ jyːn˨˩ tsʰyːn˨˩ m̩˨˩ sɐi˧˥ kɛːŋ˥ sɐk̚˥ tsʰɛː˥] (DAHP GONG-TEET HOEY JOONG-WAHN FY-GWOR DAHP BAH-SEE HOH-DOH, YEE-CHEH YUEN-CHUEN M-SY GANG SUK-CHEH)",
          "translation": "Taking the MTR to Central is much faster than taking the bus, and what's more, there is no need to worry about traffic jams at all."
        },
        {
          "target": "呢部新款手機雖然功能多，但係售價貴過舊款成千蚊。",
          "reading": "ni1 bou6 san1 fun2 sau2 gei1 seoi1 jin4 gung1 nang4 do1, daan6 hai6 sau6 gaa3 gwai3 gwo3 gau6 fun2 seng4 cin1 man1. [niː˥ pou˨ sɐn˥ fun˧˥ sɐu˧˥ kei˥ sɵy˥ jiːn˨˩ kʊŋ˥ nɐŋ˨˩ tɔː˥, taːn˨ hɐi˨ sɐu˨ kaː˧ kʷɐi˧ kʷɔː˧ kɐu˨ fun˧˥ sɛːŋ˨˩ tsʰiːn˥ mɐn˥] (NEE-BOU SUN-FOON SAU-GAY SOEY-YEEN GONG-NUNG DOH, DAHN-HY SAU-GAH GWY-GWOR GAU-FOON SENG-CHEEN-MUN)",
          "translation": "Although this new model mobile phone has many features, its selling price is a whole thousand dollars more expensive than the old model."
        },
        {
          "target": "陳先生個大仔大過我個仔兩歲，依家已經讀緊小學三年級喇。",
          "reading": "can4 saan1 sang1 go3 daai6 zai2 daai6 gwo3 ngo5 go3 zai2 loeng5 seoi3, ji1 gaa1 ji5 ging1 duk6 gan2 siu2 hok6 saam1 nin4 kap1 laa3. [tsʰɐn˨˩ saːn˥ sɐŋ˥ kɔː˧ taːi˨ tsɐi˧˥ taːi˨ kʷɔː˧ ŋɔː˩˧ kɔː˧ tsɐi˧˥ lœːŋ˩˧ sɵy˧, jiː˥ kaː˥ jiː˩˧ kɪŋ˥ tʊk̚˨ kɐn˩˧ siu˧˥ hɔːk̚˨ saːm˥ niːn˨˩ kʰɐp̚˥ laː˧] (CHUN-SAHN-SANG GOH DY-JY DY-GWOR NGOH GOH-JY LEUNG-SOEY, YEE-GAH YEE-GING DOOK-GUN SIU-HOK SAHM-NEEN-KUP LAH)",
          "translation": "Mr. Chan's eldest son is two years older than my son; now he is already studying in primary school grade three."
        }
      ],
      "mnemonics": [
        "【後置比較訣】粵語比較真特別，形容詞後加個「過」；快過貴過大過佢，古漢語序最地道！"
      ],
      "culturalNotes": [
        "「形＋過＋賓」係粵語最典型之上古遺存語法。先秦古籍如《禮記》「苛政猛於虎」、《論語》「季氏富於周公」，其結構正係「形容詞＋介詞＋對象」，粵語完美繼承此一千年古風。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【語序轉換】欲用標準粵語表達「搭地鐵比搭巴士快」，正確之語法語序係：",
          "options": [
            "搭地鐵快過搭巴士。 (daap3 dei6 tit3 faai3 gwo3 daap3 baa1 si6*2.)",
            "搭地鐵比搭巴士快。) (Context: 粵語後置超越比較句：「A + 形容詞 + 過 + B」（平過、貴過、快)",
            "搭地鐵過搭巴士快。) (Context: 粵語後置超越比較句：「A + 形容詞 + 過 + B」（平過、貴過、快)",
            "搭地鐵快比搭巴士。) (Context: 粵語後置超越比較句：「A + 形容詞 + 過 + B」（平過、貴過、快)"
          ],
          "answerIndex": 0,
          "explanation": "粵語超越比較句嚴格採用「形容詞＋過＋比較對象」之後置結構（快過……）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【年齡比較】在粵語中表達「他比我大三歲」，最地道標準之句式係：",
          "options": [
            "佢大過我三歲。 (keoi5 daai6 gwo3 ngo5 saam1 seoi3.)",
            "佢比我大三歲。) (Context: 粵語後置超越比較句：「A + 形容詞 + 過 + B」（平過、貴過、快)",
            "佢過我大三歲。) (Context: 粵語後置超越比較句：「A + 形容詞 + 過 + B」（平過、貴過、快)",
            "佢大三歲比我。) (Context: 粵語後置超越比較句：「A + 形容詞 + 過 + B」（平過、貴過、快)"
          ],
          "answerIndex": 0,
          "explanation": "年齡比較在粵語中同樣遵循「大過＋對象＋差額」之語序。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法判斷】在粵語口語中，短語「好過冇」之確切含義為：",
          "options": [
            "有總比沒有好 / 聊勝於無 (Better than nothing)",
            "最好甚麼都沒有) (Context: 粵語後置超越比較句：「A + 形容詞 + 過 + B」（平過、貴過、快)",
            "非常好而且應有盡有) (Context: 粵語後置超越比較句：「A + 形容詞 + 過 + B」（平過、貴過、快)",
            "完全沒有任何好處) (Context: 粵語後置超越比較句：「A + 形容詞 + 過 + B」（平過、貴過、快)"
          ],
          "answerIndex": 0,
          "explanation": "「好過冇」（hou2 gwo3 mou5）指比沒有要好，相當於「聊勝於無」。"
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
    "title": "差額比較與程度副詞疊加：「A + 形容詞 + 過 + B + 好多 / 少少 / 數量詞」 (Comparative Differentials)",
    "level": "A2",
    "objective": "掌握粵語比較句中量化差額與程度補語之精確後置規則（好多、少少、啲、具體數量詞）。",
    "presentation": {
      "explanation": "在掌握基礎比較句之後，精確表達兩者之間之差距幅度（大幅領先、微弱差距或具體數值）需遵循嚴格之程度補語後置規則：\n\n一、差額與程度補語之標準位置：\n１．基本擴展公式：【主語Ａ ＋ 形容詞 ＋ 「過」 ＋ 比較對象Ｂ ＋ 差額補語】。\n２．補語後置原則：所有表示差距大小之補語詞彙，必須統一置於比較對象Ｂ之後，絕不可插入形容詞與「過」之間。\n\n二、高頻差額補語分類矩陣：\n１．大幅度差距補語：「好多」（差距極大）。例如「高過佢好多」（比他高很多）。\n２．微小差距補語：「少少」或「啲」（略微有些差距）。例如「平過嗰間舖頭少少」（比那家店便宜一點點）。\n３．精確數量差額補語：【數詞 ＋ 量詞】。例如「平過出面廿蚊」（比外面便宜二十元）、「快過行路半個鐘」（比走路快半小時）。\n４．倍數差距表達：【倍數詞 ＋ 咁多】。例如「貴過舊年一倍咁多」（比去年貴了一倍之多）。",
      "examples": [
        {
          "target": "街市呢檔生果新鮮過超市好多，而且價錢仲平過佢哋兩成添。",
          "reading": "gaai1 si5 ni1 dong3 saang1 gwo2 san1 sin1 gwo3 ciu1 si5 hou2 do1, ji4 ce2 gaa3 cin4 zung6 peng4 gwo3 keoi5 dei6 loeng5 sing4 tim1. [kaːi˥ siː˩˧ niː˥ tɔːŋ˧ saːŋ˥ kʷɔː˧˥ sɐn˥ siːn˥ kʷɔː˧ tsʰiːu˥ siː˩˧ hou˧˥ tɔː˥, jiː˨˩ tsʰɛː˧˥ kaː˧ tsʰiːn˨˩ tsʊŋ˨ pʰɛːŋ˨˩ kʷɔː˧ kʰɵy˩˧ tei˨ lœːŋ˩˧ sɪŋ˨˩ tʰiːm˥] (GY-SEE NEE-DONG SAHNG-GWOR SUN-SEEN-GWOR CHEW-SEE HOH-DOH, YEE-CHEH GAH-CHEEN JOONG PENG-GWOR KUY-DAY LEUNG-SING TEEM)",
          "translation": "The fruits at this wet market stall are much fresher than those in the supermarket, and what's more, the prices are twenty percent cheaper than theirs."
        },
        {
          "target": "我呢件冷衫雖然厚過你嗰件少少，但係著落一樣好輕好舒服。",
          "reading": "ngo5 ni1 gin6 laang1*4 saam1 seoi1 jin4 hau5 gwo3 nei5 go2 gin6 siu2 siu2, daan6 hai6 zoek3 lok6 jat1 joeng6 hou2 heng1 hou2 syu1 fuk6. [ŋɔː˩˧ niː˥ kiːn˨ laːŋ˨˩ saːm˥ sɵy˥ jiːn˨˩ hɐu˩˧ kʷɔː˧ nei˩˧ kɔː˧˥ kiːn˨ siu˧˥ siu˧˥, taːn˨ hɐi˨ tsœːk̚˧ lɔːk̚˨ jɐt̚˥ jœːŋ˨ hou˧˥ hɪŋ˥ hou˧˥ syː˥ fʊk̚˨] (NGOH NEE-GEEN LAHNG-SAHM SOEY-YEEN HAU-GWOR NEI GOH-GEEN SIU-SIU, DAHN-HY JEUk-LOK YUT-YEUNG HOH-HENG HOH-SYU-FOOK)",
          "translation": "Although this sweater of mine is a little bit thicker than yours, it feels just as light and comfortable when worn."
        },
        {
          "target": "由呢度搭的士去機場快過搭巴士差唔多四十五分鐘。",
          "reading": "jau4 ni1 dou6 daap3 dik1 si6*2 heoi3 gei1 coeng4 faai3 gwo3 daap3 baa1 si6*2 caa1 m4 do1 sei3 sap6 ng5 fan1 zung1. [jɐu˨˩ niː˥ tou˨ taːp̚˧ tɪk̚˥ siː˧˥ hɵy˧ kei˥ tsʰœːŋ˨˩ faːi˧ kʷɔː˧ taːp̚˧ paː˥ siː˧˥ tsʰaː˥ m̩˨˩ tɔː˥ sei˧ sɐp̚˨ ŋ̩˩˧ fɐn˥ tsʊŋ˥] (YAU NEE-DOU DAHP DIK-SEE HOEY GAY-CHEUNG FY-GWOR DAHP BAH-SEE CHAH-M-DOH SAY-SUP-NG FUN-JOONG)",
          "translation": "Taking a taxi from here to the airport is almost forty-five minutes faster than taking the bus."
        }
      ],
      "mnemonics": [
        "【差額後置歌】差距大小放最後，多過少過分清楚；「好多」「少少」跟後尾，具體數字莫擺錯！"
      ],
      "culturalNotes": [
        "香港市民在街市買餸或商場購物時極具精打細算之生活智慧，對話中高頻運用「平過出面五蚊」、「抵過買散裝好多」等精確差額比較，體現出務實精明之嶺南市井文化。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【差額位置】在粵語中表達「這件衣服比那件便宜五十塊錢」，正確之句子係：",
          "options": [
            "呢件衫平過嗰件五十蚊。 (ni1 gin6 saam1 peng4 gwo3 go2 gin6 ng5 sap6 man1.)",
            "呢件衫五十蚊平過嗰件。 (掌握粵語比較句中量化差額與程度補語之精確後置規則（好多、少少、啲、具體數量詞）。) (差額比較與程度副詞疊加：「A + 形容詞 + 過 + B + 好多 / 少少 / 數量詞」 (Comparative Differentials))",
            "呢件衫平五十蚊過嗰件。 (掌握粵語比較句中量化差額與程度補語之精確後置規則（好多、少少、啲、具體數量詞）。) (差額比較與程度副詞疊加：「A + 形容詞 + 過 + B + 好多 / 少少 / 數量詞」 (Comparative Differentials))",
            "呢件衫比嗰件平五十蚊過。 (掌握粵語比較句中量化差額與程度補語之精確後置規則（好多、少少、啲、具體數量詞）。) (差額比較與程度副詞疊加：「A + 形容詞 + 過 + B + 好多 / 少少 / 數量詞」 (Comparative Differentials))"
          ],
          "answerIndex": 0,
          "explanation": "數量差額「五十蚊」必須置於比較對象「嗰件」之後。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【程度補語】欲表達「這款電腦運行速度比舊電腦快很多」，地道口語係：",
          "options": [
            "呢部電腦快過舊電腦好多。 (ni1 bou6 din6 nou5 faai3 gwo3 gau6 din6 nou5 hou2 do1.)",
            "呢部電腦很多快過舊電腦。 (掌握粵語比較句中量化差額與程度補語之精確後置規則（好多、少少、啲、具體數量詞）。) (差額比較與程度副詞疊加：「A + 形容詞 + 過 + B + 好多 / 少少 / 數量詞」 (Comparative Differentials))",
            "呢部電腦快好多過舊電腦。 (掌握粵語比較句中量化差額與程度補語之精確後置規則（好多、少少、啲、具體數量詞）。) (差額比較與程度副詞疊加：「A + 形容詞 + 過 + B + 好多 / 少少 / 數量詞」 (Comparative Differentials))",
            "呢部電腦比舊電腦很多快。 (掌握粵語比較句中量化差額與程度補語之精確後置規則（好多、少少、啲、具體數量詞）。) (差額比較與程度副詞疊加：「A + 形容詞 + 過 + B + 好多 / 少少 / 數量詞」 (Comparative Differentials))"
          ],
          "answerIndex": 0,
          "explanation": "程度補語「好多」必須置於比較對象「舊電腦」之後。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語序正誤】請判斷以下哪一句粵語差額比較句完全符合語法規範：",
          "options": [
            "我哥哥高過我半個頭。 (ngo5 go1 go1 gou1 gwo3 ngo5 bun3 go3 tau4.)",
            "我哥哥半個頭高過我。 (掌握粵語比較句中量化差額與程度補語之精確後置規則（好多、少少、啲、具體數量詞）。) (差額比較與程度副詞疊加：「A + 形容詞 + 過 + B + 好多 / 少少 / 數量詞」 (Comparative Differentials))",
            "我哥哥高半個頭過我。 (掌握粵語比較句中量化差額與程度補語之精確後置規則（好多、少少、啲、具體數量詞）。) (差額比較與程度副詞疊加：「A + 形容詞 + 過 + B + 好多 / 少少 / 數量詞」 (Comparative Differentials))",
            "我哥哥過我高半個頭。 (掌握粵語比較句中量化差額與程度補語之精確後置規則（好多、少少、啲、具體數量詞）。) (差額比較與程度副詞疊加：「A + 形容詞 + 過 + B + 好多 / 少少 / 數量詞」 (Comparative Differentials))"
          ],
          "answerIndex": 0,
          "explanation": "差額量詞「半個頭」置於比較對象「我」之後，結構完全正確。"
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
    "title": "隱性否定比較句：「A + 冇 + B + 咁 + 形容詞」（冇咁貴、冇咁凍） (Inferiority Comparisons)",
    "level": "A2",
    "objective": "掌握粵語隱性否定/不及比較句「A + 冇 + B + 咁 + 形容詞」之構造規則與日常委婉表達技巧。",
    "presentation": {
      "explanation": "當欲表達「Ａ不如Ｂ那麼……」或「Ａ在某方面不及Ｂ」之否定/劣等比較時，粵語擁有一套專屬且極為自然之語法結構：\n\n一、否定比較句核心公式：\n１．基本語法公式：【主語Ａ ＋ 「冇」 ＋ 比較對象Ｂ ＋ 「咁」 ＋ 形容詞】。\n２．核心詞彙功能解析：\n- 「冇」（mou5）：否定副詞/動詞，相當於「沒有」。\n- 「咁」（gam3）：指示程度副詞，相當於「那麼、如此」。\n- 整體句意直譯為「Ａ沒有Ｂ那麼……」。\n\n二、與其他句式之語義轉換對比：\n１．「今日冇琴日咁凍」＝「琴日凍過今日」（昨天比今天冷）。\n２．「搭巴士冇搭地鐵咁快」＝「搭地鐵快過搭巴士」（搭地鐵比搭巴士快）。\n３．「呢間餐廳冇嗰間咁好食」＝「嗰間餐廳好食過呢間」（那間餐廳比這間好吃）。\n\n三、口語高頻省略句式：\n１．省略比較對象Ｂ之簡縮用法：在上下文語境明確時，比較對象可省略，形成「主語 ＋ 冇咁 ＋ 形容詞」。\n- 「冇咁貴」：沒有那麼貴。\n- 「冇咁易」：沒有那麼容易/沒那麼簡單。\n- 「冇咁好」：沒有那麼好。",
      "examples": [
        {
          "target": "今日天氣回暖咗，出面吹緊微風，完全冇琴日咁凍喇。",
          "reading": "gam1 jat6 tin1 hei3 wui4 nyun5 zo2, ceot1 min6 ceoi1 gan2 mei4 fung1, jyun4 cyun4 mou5 kam4 jat6 gam3 dung3 laa3. [kɐm˥ jɐt˨ tʰiːn˥ hei˧ wuːi˨˩ nyːn˩˧ tsɔː˧˥, tsʰɵt̚˥ miːn˨ tsʰɵy˥ kɐn˩˧ mei˨˩ fʊŋ˥, jyːn˨˩ tsʰyːn˨˩ mou˩˧ kʰɐm˨˩ jɐt˨ kɐm˧ tʊŋ˧ laː˧] (GUM-YUT TEEN-HEY WUI-NUEN-JOR, CHUT-MEEN CHOEY-GUN MY-FOONG, YUEN-CHUEN MOU KUM-YUT GUM DOONG LAH)",
          "translation": "The weather has warmed up today; a gentle breeze is blowing outside, not nearly as cold as yesterday at all."
        },
        {
          "target": "呢部手提電腦雖然輕便，但係運行大型軟件嗰陣冇枱機咁順暢。",
          "reading": "ni1 bou6 sau2 tai4 din6 nou5 seoi1 jin4 heng1 bin6, daan6 hai6 wan6 hang4 daai6 jing4 jyun5 gin62 go2 zan6 mou5 toi4 gei1 gam3 seon6 coeng3. [niː˥ pou˨ sɐu˧˥ tʰɐi˨˩ tiːn˨ nou˩˧ sɵy˥ jiːn˨˩ hɪŋ˥ piːn˨, taːn˨ hɐi˨ wɐn˨ hɐŋ˨˩ taːi˨ jɪŋ˨˩ jyːn˩˧ kiːn˧˥ kɔː˧˥ tsɐn˨ mou˩˧ tʰɔːi˨˩ kei˥ kɐm˧ sɵn˨ tsʰœːŋ˧] (NEE-BOU SAU-TY DEEN-NOU SOEY-YEEN HENG-BEEN, DAHN-HY WUN-HAHNG DY-YING YUEN-GEEN GOH-JUN MOU TOY-GAY GUM SEUN-CHEUNG)",
          "translation": "Although this laptop is portable, it is not as smooth as a desktop when running heavy software."
        },
        {
          "target": "你想喺一個月之內學識游水？件事冇你諗得咁易㗎！",
          "reading": "nei5 soeng2 hai2 jat1 go3 jyut6 zi1 noi6 hok6 sik1 jau4 seoi2? gin6 si6 mou5 nei5 lam2 dak1 gam3 ji6 gaa3! [nei˩˧ sœːŋ˧˥ hɐi˩˧ jɐt̚˥ kɔː˧ jyːt̚˨ tsiː˥ nɔːi˨ hɔːk̚˨ sɪk̚˥ jɐu˨˩ sɵy˧˥? kiːn˨ siː˨ mou˩˧ nei˩˧ lɐm˧˥ tɐk̚˥ kɐm˧ jiː˨ kaː˧] (NEI SEUNG HY YUT-GOH-YUET JEE-NGOY HOK-SIK YAU-SOEY? GEEN-SEE MOU NEI LUM-DUK GUM YEE GAH!)",
          "translation": "You want to learn how to swim within one month? The matter is not as easy as you think!"
        }
      ],
      "mnemonics": [
        "【不及比較訣】不如某人叫「冇咁」，冇咁貴來冇咁凍；客氣委婉表對比，日常對話最實用！"
      ],
      "culturalNotes": [
        "在粵語社交禮儀中，直接講「你煮嘅餸好難食」顯得極不禮貌，而委婉改用否定比較「今日呢碟餸冇琴日嗰碟咁惹味」，既表達了真實意見又保留了對方顏面，體現出嶺南文化中講究圓融得體之語言情商。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【否定比較】欲用粵語委婉表達「今天沒有昨天那麼冷」，標準之句子係：",
          "options": [
            "今日冇琴日咁凍。 (gam1 jat6 mou5 kam4 jat6 gam3 dung3.)",
            "今日不比琴日凍。) (Context: 隱性否定比較句：「A + 冇 + B + 咁 + 形容詞」（冇咁貴、冇)",
            "今日冇琴日凍過。) (Context: 隱性否定比較句：「A + 冇 + B + 咁 + 形容詞」（冇咁貴、冇)",
            "今日冇咁凍琴日。) (Context: 隱性否定比較句：「A + 冇 + B + 咁 + 形容詞」（冇咁貴、冇)"
          ],
          "answerIndex": 0,
          "explanation": "粵語不及比較句固定結構為「主語＋冇＋對象＋咁＋形容詞」（今日冇琴日咁凍）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【句意轉換】句子「搭地鐵快過搭巴士」轉換為以「搭巴士」為主語之否定比較句，應為：",
          "options": [
            "搭巴士冇搭地鐵咁快。 (daap3 baa1 si6*2 mou5 daap3 dei6 tit3 gam3 faai3.)",
            "搭巴士快過搭地鐵。) (Context: 隱性否定比較句：「A + 冇 + B + 咁 + 形容詞」（冇咁貴、冇)",
            "搭巴士冇地鐵快過。) (Context: 隱性否定比較句：「A + 冇 + B + 咁 + 形容詞」（冇咁貴、冇)",
            "搭巴士同地鐵一樣快。) (Context: 隱性否定比較句：「A + 冇 + B + 咁 + 形容詞」（冇咁貴、冇)"
          ],
          "answerIndex": 0,
          "explanation": "「Ａ快過Ｂ」之等價否定句為「Ｂ冇Ａ咁快」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語氣理解】當朋友向你請教某項高難度技能，你回答「件事冇咁易㗎！」，此話含意為：",
          "options": [
            "這件事情沒有想像中那麼容易 (It is not that easy!)",
            "這件事情非常簡單容易) (Context: 隱性否定比較句：「A + 冇 + B + 咁 + 形容詞」（冇咁貴、冇)",
            "這件事情根本不需要做) (Context: 隱性否定比較句：「A + 冇 + B + 咁 + 形容詞」（冇咁貴、冇)",
            "這件事情已經徹底完成了) (Context: 隱性否定比較句：「A + 冇 + B + 咁 + 形容詞」（冇咁貴、冇)"
          ],
          "answerIndex": 0,
          "explanation": "「冇咁易」（mou5 gam3 ji6）意為沒有那麼容易。"
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
    "title": "等同與相似比較句：「A + 同 / 同埋 + B + 一樣（咁 + 形容詞）」與「差唔多」 (Equatives & Similarity)",
    "level": "A2",
    "objective": "掌握粵語等同比較句「A + 同 + B + 一樣（咁 + 形容詞）」與近似比較句「差唔多」之語法規則與靈活運用。",
    "presentation": {
      "explanation": "在表達兩者完全相同、具備同等程度屬性或大致相仿時，粵語擁有一套嚴密之等同與相似比較句式：\n\n一、等同比較句三大核心結構：\n１．全體相同：【主語Ａ ＋ 「同 / 同埋」 ＋ 對象Ｂ ＋ 「一樣」】。\n- 例如：「我部電話同你嗰部一樣」（我的手機和你的那部一樣）。\n２．具體屬性等同：【主語Ａ ＋ 「同 / 同埋」 ＋ 對象Ｂ ＋ 「一樣咁」 ＋ 形容詞】。\n- 其中「咁」強化了同等之程度感。\n- 例如：「呢間舖頭同嗰間一樣咁受歡迎」（這家店和那家店一樣受歡迎）。\n３．否定等同：【主語Ａ ＋ 「同」 ＋ 對象Ｂ ＋ 「唔同 / 唔一樣」】。\n\n二、近似相仿句型「差唔多」之靈活運用：\n１．作為謂語：【主語Ａ ＋ 「同」 ＋ 對象Ｂ ＋ 「差唔多」】（兩者差不多）。\n- 例如：「我同佢年紀差唔多」（我和他年紀差不多大）。\n２．修飾形容詞：【主語Ａ ＋ 「同」 ＋ 對象Ｂ ＋ 「差唔多咁」 ＋ 形容詞】。\n- 例如：「呢件衫同嗰件差唔多咁貴」（這件衣服和那件差不多一樣貴）。\n３．修飾數量時間：「差唔多 ＋ 數量詞」（大約、將近）。例如「差唔多十點鐘」（差不多十點鐘）。",
      "examples": [
        {
          "target": "佢兩個雖然係雙胞胎兄弟，但係性格同興趣完全唔同。",
          "reading": "keoi5 loeng5 go3 seoi1 jin4 hai6 soeng1 baau1 toi1 hing1 dai6, daan6 hai6 sing3 gik3 tung4 hing3 ceoi3 jyun4 cyun4 m4 tung4. [kʰɵy˩˧ lœːŋ˩˧ kɔː˧ sɵy˥ jiːn˨˩ hɐi˨ sœːŋ˥ paːu˥ tʰɔːi˥ hɪŋ˥ tɐi˨, taːn˨ hɐi˨ sɪŋ˧ kɪk̚˧ tʰʊŋ˨˩ hɪŋ˧ tsʰɵy˧ jyːn˨˩ tsʰyːn˨˩ m̩˨˩ tʰʊŋ˨˩] (KUY LEUNG-GOH SOEY-YEEN HY SEUNG-BAU-TOY HING-DY, DAHN-HY SING-GIK TOONG HING-CHOEY YUEN-CHUEN M-TOONG)",
          "translation": "Although the two of them are twin brothers, their personalities and interests are completely different."
        },
        {
          "target": "新開嗰間茶餐廳同舊舖一樣咁有鑊氣，啲乾炒牛河真係一流！",
          "reading": "san1 hoi1 go2 gaan1 caa4 caan1 teng1 tung4 gau6 pou3 jat1 joeng6 gam3 jau5 wok6 hei3, di1 gon1 caau2 ngau4 ho2*4 zan1 hai6 jat1 lau4! [sɐn˥ hɔːi˥ kɔː˧˥ kaːn˥ tsʰaː˨˩ tsʰaːn˥ tʰɛːŋ˥ tʰʊŋ˨˩ kɐu˨ pʰou˧ jɐt̚˥ jœːŋ˨ kɐm˧ jɐu˩˧ wɔːk̚˨ hei˧, tiː˥ kɔːn˥ tsʰaːu˧˥ ŋɐu˨˩ hɔː˨˩ tsɐn˥ hɐi˨ jɐt̚˥ lɐu˨˩!] (SUN-HOI GOH-GAHN CHAH-CHAAN-TENG TOONG GAU-POU YUT-YEUNG GUM YAU-WOK-HEY, DEE GOHN-CHAU NGAU-HOR JUN-HY YUT-LAU!)",
          "translation": "The newly opened cha chaan teng is just as full of wok hei as the old shop; the dry-fried beef hor fun is truly first-class!"
        },
        {
          "target": "我同陳經理入職嘅時間差唔多，所以大家平時好啱傾。",
          "reading": "ngo5 tung4 can4 ging1 lei5 jap6 zik1 ge3 si4 gaan1 caa1 m4 do1, so2 ji5 daai6 gaa1 ping4 si4 hou2 aam1 king1. [ŋɔː˩˧ tʰʊŋ˨˩ tsʰɐn˨˩ kɪŋ˥ lei˩˧ jɐp̚˨ tsɪk̚˨ kɛː˧ siː˨˩ kaːn˥ tsʰaː˥ m̩˨˩ tɔː˥, sɔː˧˥ jiː˩˧ taːi˨ kaː˥ pʰɪŋ˨˩ siː˨˩ hou˧˥ aːm˥ kʰɪŋ˥] (NGOH TOONG CHUN-GING-LY YUP-JIK GEH SEE-GAHN CHAH-M-DOH, SOH-YEE DY-GAH PING-SEE HOH-AHM-KING)",
          "translation": "Manager Chan and I joined the company at roughly the same time, so we get along very well and chat easily."
        }
      ],
      "mnemonics": [
        "【等同相似歌】兩者一樣「同埋」連，一樣咁好一樣甜；若然相差唔算遠，「差唔多」字掛嘴邊！"
      ],
      "culturalNotes": [
        "「鑊氣」（wok hei）係粵菜烹飪之靈魂境界，指食材在高溫鐵鑊中快速翻炒激發出之焦香與鑊香。評價一間新茶餐廳「同舊舖一樣咁有鑊氣」，係廣東食客對廚師技藝之崇高讚譽。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【等同句式】在粵語中表達「這部手機和那部一樣貴」，正確之句子係：",
          "options": [
            "呢部手機同嗰部一樣咁貴。 (ni1 bou6 sau2 gei1 tung4 go2 bou6 jat1 joeng6 gam3 gwai3.)",
            "呢部手機一樣貴過嗰部。) (Context: 等同與相似比較句：「A + 同 / 同埋 + B + 一樣（咁 + 形)",
            "呢部手機同嗰部貴一樣。) (Context: 等同與相似比較句：「A + 同 / 同埋 + B + 一樣（咁 + 形)",
            "呢部手機比嗰部一樣貴。) (Context: 等同與相似比較句：「A + 同 / 同埋 + B + 一樣（咁 + 形)"
          ],
          "answerIndex": 0,
          "explanation": "屬性等同比較句結構為「Ａ＋同＋Ｂ＋一樣咁＋形容詞」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【相仿表達】欲表達「我和他年齡相仿、差不多大」，地道口語係：",
          "options": [
            "我同佢年紀差唔多。 (ngo5 tung4 keoi5 nin4 gei2 caa1 m4 do1.)",
            "我同佢年紀差不多過。) (Context: 等同與相似比較句：「A + 同 / 同埋 + B + 一樣（咁 + 形)",
            "我比佢年紀差唔多大。) (Context: 等同與相似比較句：「A + 同 / 同埋 + B + 一樣（咁 + 形)",
            "我過佢年紀差唔多。) (Context: 等同與相似比較句：「A + 同 / 同埋 + B + 一樣（咁 + 形)"
          ],
          "answerIndex": 0,
          "explanation": "「差唔多」（caa1 m4 do1）作為謂語表示大體相仿、相差無幾。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【否定判斷】句子「我嘅意見同你完全唔同」之確切含義為：",
          "options": [
            "我的意見和你的完全不一樣 / 大相徑庭 (My opinion is completely different from yours)",
            "我的意見和你的完全一致) (Context: 等同與相似比較句：「A + 同 / 同埋 + B + 一樣（咁 + 形)",
            "我沒有任何意見) (Context: 等同與相似比較句：「A + 同 / 同埋 + B + 一樣（咁 + 形)",
            "我非常贊成你的觀點) (Context: 等同與相似比較句：「A + 同 / 同埋 + B + 一樣（咁 + 形)"
          ],
          "answerIndex": 0,
          "explanation": "「唔同」（m4 tung4）在粵語中表示不同、不一樣。"
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
    "title": "最高級與極致程度句式：「最 + 形容詞」、「形容詞 + 到極 / 頂透」、「數一數二」 (Superlatives & Extreme Degree)",
    "level": "A2",
    "objective": "掌握粵語最高級標記「最」、極致程度補語「到極/頂透/到震」與綜合比較評價句式（數一數二、一流）。",
    "presentation": {
      "explanation": "在完成兩者比較之後，晉階表達全體中最突出之「最高級」或「極致程度」時，粵語展現出極富表現力之詞彙與補語體系：\n\n一、最高級句式：【「最」 ＋ 形容詞 / 心理動詞】\n１．「最抵買 / 最抵食」：性價比最高、最實惠超值。\n２．「最受歡迎」：人氣最旺、大眾評價最高。\n３．「最中意 / 最鍾意」：最喜愛、最偏愛。\n\n二、極致程度後置補語（形容詞＋程度標記）：\n１．「形容詞 ＋ 到極」：達到極點、無以復加。例如「開心到極」（高興到了極點）、「悶到極」（無聊透頂）。\n２．「形容詞 ＋ 頂透」：達到頂峰極限。例如「抵到頂透」（划算到了極致）。\n３．「形容詞 ＋ 到震」：程度劇烈令人震撼。例如「靚到震」（美艷絕倫震撼人心）、「凍到震」（冷得直打哆嗦）。\n\n三、綜合卓越評價成語與口語：\n１．「數一數二」：在同類中名列第一或第二。\n２．「一流」：品質頂級無可挑剔。\n３．「冇得頂 / 冇得輸」：好得無可比擬、絕不可能失敗遜色。",
      "examples": [
        {
          "target": "呢間海鮮酒家嘅避風塘炒蟹喺全香港數一數二，味道真係冇得頂！",
          "reading": "ni1 gaan1 hoi2 sin1 zau2 gaa1 ge3 bei6 fung1 tong4 caau2 haai5 hai2 cyun4 hoeng1 gong2 sou2 jat1 sou2 ji6, mei6 dou6 zan1 hai6 mou5 dak1 ding2! [niː˥ kaːn˥ hɔːi˧˥ siːn˥ tsɐu˧˥ kaː˥ kɛː˧ pei˨ fʊŋ˥ tʰɔːŋ˨˩ tsʰaːu˧˥ haːi˩˧ hɐi˩˧ tsʰyːn˨˩ hœːŋ˥ kɔːŋ˧˥ sou˧˥ jɐt̚˥ sou˧˥ jiː˨, mei˨ tou˨ tsɐn˥ hɐi˨ mou˩˧ tɐk̚˥ tɪŋ˧˥!] (NEE-GAHN HOY-SEEN JAU-GAH GEH BAY-FOONG-TONG CHAU-HY HY CHUEN HEUNG-GONG SOU-YUT SOU-YEE, MAY-DOU JUN-HY MOU-DUK-DING!)",
          "translation": "The typhoon shelter fried crab of this seafood restaurant is among the best one or two in all of Hong Kong; the taste is truly unbeatable!"
        },
        {
          "target": "年尾商場大減價，所有名牌服裝買一送一，真係平到極、抵到頂透呀！",
          "reading": "nin4 mei5 soeng1 coeng4 daai6 gaam2 gaa3, so2 jau5 ming4 paai4 fuk6 zong1 maai5 jat1 sung3 jat1, zan1 hai6 peng4 dou3 gik6, dai2 dou3 ding2 tau3 aa3! [niːn˨˩ mei˩˧ sœːŋ˥ tsʰœːŋ˨˩ taːi˨ kaːm˧˥ kaː˧, sɔː˧˥ jɐu˩˧ mɪŋ˨˩ pʰaːi˨˩ fʊk̚˨ tsɔːŋ˥ maːi˩˧ jɐt̚˥ sʊŋ˧ jɐt̚˥, tsɐn˥ hɐi˨ pʰɛːŋ˨˩ tou˧ kɪk̚˨, tɐi˧˥ tou˧ tɪŋ˧˥ tʰɐu˧ aː˧!] (NEEN-MAY SEUNG-CHEUNG DY-GAHM-GAH, SOH-YAU MING-PY FOOK-JONG MY-YUT SOONG-YUT, JUN-HY PENG-DOU-GIK, DY-DOU-DING-TAU AH!)",
          "translation": "The year-end shopping mall massive sale features buy-one-get-one-free on all designer clothes; it is truly dirt cheap and utmost value for money!"
        },
        {
          "target": "今日太平山頂嘅夜景靚到震，成個維多利亞港燈火通明，美不勝收。",
          "reading": "gam1 jat6 taai3 ping4 saan1 deng2 ge3 je6 ging2 leng3 dou3 zan3, seng4 go3 wai4 do1 lei6 aa3 gong2 dang1 fo2 tung1 ming4, mei5 bat1 sing1 sau1. [kɐm˥ jɐt˨ tʰaːi˧ pʰɪŋ˨˩ saːn˥ tɛːŋ˧˥ kɛː˧ jɛː˨ kɪŋ˧˥ lɛːŋ˧ tou˧ tsɐn˧, sɛːŋ˨˩ kɔː˧ wɐi˨˩ tɔː˥ lei˨ aː˧ kɔːŋ˧˥ tɐŋ˥ fɔː˧˥ tʰʊŋ˥ mɪŋ˨˩, mei˩˧ pɐt̚˥ sɪŋ˥ sɐu˥] (GUM-YUT TY-PING-SAHN-DENG GEH YEH-GING LENG-DOU-JUN, SENG-GOH WY-DOH-LEY-AH-GONG DUNG-FOH TOONG-MING, MAY-BUT-SING-SAU)",
          "translation": "The night view from Victoria Peak today is stunningly gorgeous; the entire Victoria Harbour is brilliantly illuminated, breathtakingly beautiful."
        }
      ],
      "mnemonics": [
        "【極致稱讚歌】全場之冠用個「最」，抵食抵買「到頂透」；維港夜景「靚到震」，無可挑剔「冇得頂」！"
      ],
      "culturalNotes": [
        "「冇得頂」（好得無可挑剔、無與倫比）與「冇得輸」（穩操勝券、絕不落後）係香港極富代表性之讚賞口頭禪。在飲食、購物與文娛評價中，香港人喜用帶有強烈感染力之極致補語抒發由衷讚嘆。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【極致補語】在粵語中欲極度讚賞某物「美艷震撼到了極點」，地道之形容詞搭配係：",
          "options": [
            "靚到震 (leng3 dou3 zan3 / Stunningly gorgeous)",
            "靚到坐 (掌握粵語最高級標記「最」、極致程度補語「到極/頂透/到震」與綜合比較評價句式（數一數二、一流）。) (最高級與極致程度句式：「最 + 形容詞」、「形容詞 + 到極 / 頂透」、「數一數二」 (Superlatives & Extreme Degree))",
            "靚到跑 (掌握粵語最高級標記「最」、極致程度補語「到極/頂透/到震」與綜合比較評價句式（數一數二、一流）。) (最高級與極致程度句式：「最 + 形容詞」、「形容詞 + 到極 / 頂透」、「數一數二」 (Superlatives & Extreme Degree))",
            "靚到跳 (掌握粵語最高級標記「最」、極致程度補語「到極/頂透/到震」與綜合比較評價句式（數一數二、一流）。) (最高級與極致程度句式：「最 + 形容詞」、「形容詞 + 到極 / 頂透」、「數一數二」 (Superlatives & Extreme Degree))"
          ],
          "answerIndex": 0,
          "explanation": "「靚到震」（leng3 dou3 zan3）指美麗到令人心靈震撼之極致程度。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【極致稱讚】在香港粵語中，讚美食物或服務好到無可挑剔、頂級絕妙，最經典之俚語係：",
          "options": [
            "冇得頂！ (mou5 dak1 ding2! / Unbeatable!)",
            "冇得食！ (掌握粵語最高級標記「最」、極致程度補語「到極/頂透/到震」與綜合比較評價句式（數一數二、一流）。) (最高級與極致程度句式：「最 + 形容詞」、「形容詞 + 到極 / 頂透」、「數一數二」 (Superlatives & Extreme Degree))",
            "冇得睇！ (掌握粵語最高級標記「最」、極致程度補語「到極/頂透/到震」與綜合比較評價句式（數一數二、一流）。) (最高級與極致程度句式：「最 + 形容詞」、「形容詞 + 到極 / 頂透」、「數一數二」 (Superlatives & Extreme Degree))",
            "冇得行！ (掌握粵語最高級標記「最」、極致程度補語「到極/頂透/到震」與綜合比較評價句式（數一數二、一流）。) (最高級與極致程度句式：「最 + 形容詞」、「形容詞 + 到極 / 頂透」、「數一數二」 (Superlatives & Extreme Degree))"
          ],
          "answerIndex": 0,
          "explanation": "「冇得頂」（mou5 dak1 ding2）意為好到了極點、頂級絕妙。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【成語語義】在粵語評價中稱讚某餐廳的菜式「喺全香港數一數二」，其確切含義為：",
          "options": [
            "在全香港名列前茅、頂尖一流 (Top-ranking / One of the very best)",
            "全香港只有一到兩個人吃過 (掌握粵語最高級標記「最」、極致程度補語「到極/頂透/到震」與綜合比較評價句式（數一數二、一流）。) (最高級與極致程度句式：「最 + 形容詞」、「形容詞 + 到極 / 頂透」、「數一數二」 (Superlatives & Extreme Degree))",
            "全香港只開了一家到兩家分店 (掌握粵語最高級標記「最」、極致程度補語「到極/頂透/到震」與綜合比較評價句式（數一數二、一流）。) (最高級與極致程度句式：「最 + 形容詞」、「形容詞 + 到極 / 頂透」、「數一數二」 (Superlatives & Extreme Degree))",
            "價格在全香港排名倒數第一 (掌握粵語最高級標記「最」、極致程度補語「到極/頂透/到震」與綜合比較評價句式（數一數二、一流）。) (最高級與極致程度句式：「最 + 形容詞」、「形容詞 + 到極 / 頂透」、「數一數二」 (Superlatives & Extreme Degree))"
          ],
          "answerIndex": 0,
          "explanation": "「數一數二」指在同行或同類事物中名列前茅、數一數二。"
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
    "title": "香港三大地理板塊與跨海樞紐：「香港島」、「九龍半島」、「新界同離島」、「過海」 (HK Macro Geography & Cross-Harbour Links)",
    "level": "A2",
    "objective": "掌握香港三大宏觀地理板塊名稱（香港島、九龍半島、新界同離島）與維多利亞港跨海交通動詞及三大海底隧道專屬稱謂（過海、紅隧、東隧、西隧）。",
    "presentation": {
      "explanation": "香港地理版圖以維多利亞港為天然屏障與核心紐帶，劃分為三大歷史地理板塊，並發展出獨具特色之跨海方位術語體系：\n\n一、香港三大宏觀地理板塊名稱：\n１．「香港島 / 港島」：香港政治與金融商貿核心樞紐所在，簡稱「港島」。\n２．「九龍半島 / 九龍」：與港島隔海相望之繁華城區，涵蓋油尖旺、深水埗、九龍城等經典街區。\n３．「新界」與「離島」：面積最為遼闊之北部陸地與周邊海島群落，包括大嶼山、長洲、南丫島等。\n\n二、跨越維多利亞港之專屬動詞與隧道設施：\n１．「過海」：從九龍或新界前往香港島，或從香港島返回九龍新界之跨海專用動詞。\n２．「過海巴士 / 過海的士」：專門提供跨海客運服務之公共巴士與的士。\n３．三大過海海底隧道口語簡稱：\n- 「紅隧」（紅磡海底隧道）：香港歷史最悠久、車流量最高之核心跨海海底隧道。\n- 「東隧」（東區海底隧道）：連接鰂魚涌與茶果嶺之東部跨海隧道。\n- 「西隧」（西區海底隧道）：連接西營盤與西九龍之高規格跨海隧道。\n４．「過海隧道巴士 / 隧巴」：行經海底隧道之跨區特快巴士路線。",
      "examples": [
        {
          "target": "我每日朝早都要由沙田搭東鐵線過海去金鐘返工，車程只需要半個鐘左右。",
          "reading": "ngo5 mui5 jat6 ziu1 zou2 dou1 jiu3 jau4 saa1 tin4 daap3 dung1 tit3 sin3 gwo3 hoi2 heoi3 gam1 zung1 faan1 gung1, ce1 cing4 zi2 jiu3 seoi1 jiu3 bun3 go3 zung1 zo2 jau6. [ŋɔː˩˧ muːi˩˧ jɐt˨ tsiːu˥ tsou˧˥ tou˥ jiu˧ jɐu˨˩ saː˥ tʰiːn˨˩ taːp̚˧ tʊŋ˥ tʰiːt̚˧ siːn˧ kʷɔː˧ hɔːi˧˥ hɵy˧ kɐm˥ tsʊŋ˥ faːn˥ kʊŋ˥, tsʰɛː˥ tsʰɪŋ˨˩ tsiː˧˥ jiu˧ sɵy˥ jiu˧ pun˧ kɔː˧ tsʊŋ˥ tsɔː˧˥ jɐu˨] (NGOH MOOI-YUT JIU-JOU DOH YEW YAU SAH-TEEN DAHP DUNG-TEET-SEEN GWOR-HOY HOEY GUM-JOONG FAHN-GONG, CHEH-CHING JEE-YEW SOEY-YEW BOON-GOH-JOONG JOR-YAU)",
          "translation": "Every morning I have to take the East Rail Line from Sha Tin to cross the harbour to Admiralty for work; the journey only takes about half an hour."
        },
        {
          "target": "傍晚放工繁忙時間紅隧通常都會塞車，司機建議我哋改行西隧過海。",
          "reading": "bong3 maan5 fong3 gung1 faan4 mong4 si4 gaan1 hung4 seoi6 tung1 soeng4 dou1 wui5 sak1 ce1, si1 gei1 gin3 ji5 ngo5 dei6 goi2 hang4 sai1 seoi6 gwo3 hoi2. [pɔːŋ˧ maːn˩˧ fɔːŋ˧ kʊŋ˥ faːn˨˩ mɔːŋ˨˩ siː˨˩ kaːn˥ hʊŋ˨˩ sɵy˨ tʰʊŋ˥ sœːŋ˨˩ tou˥ jɐu˩˧ sɐk̚˥ tsʰɛː˥, siː˥ kei˥ kiːn˧ jiː˩˧ ŋɔː˩˧ tei˨ kɔːi˧˥ hɐŋ˨˩ sɐi˥ sɵy˨ kʷɔː˧ hɔːi˧˥] (BONG-MAHN FONG-GONG FAHN-MONG SEE-GAHN HOONG-SOEY TOONG-SEUNG DOH WUI SUK-CHEH, SEE-GAY GEEN-YEE NGOH-DAY GOI-HAHNG SY-SOEY GWOR-HOY)",
          "translation": "During the evening peak rush hour, the Cross-Harbour Tunnel is usually jammed; the driver suggested we change route via the Western Harbour Crossing to cross the harbour."
        },
        {
          "target": "新界嘅面積佔咗全香港超過百分之八十，擁有好多壯麗嘅山野同離島風光。",
          "reading": "san1 gaai3 ge3 min6 zik1 zim3 zo2 cyun4 hoeng1 gong2 ciu1 gwo3 baak3 fan6 zi1 baat3 sap6, jung2 jau5 hou2 do1 zong3 lai6 ge3 saan1 je5 tung4 lei4 dou2 fung1 gwong1. [sɐn˥ kaːi˧ kɛː˧ miːn˨ tsɪk̚˨ tsiːm˧ tsɔː˧˥ tsʰyːn˨˩ hœːŋ˥ kɔːŋ˧˥ tsʰiːu˥ kʷɔː˧ paːt̚˧ fɐn˨ tsiː˥ paːt̚˧ sɐp̚˨, jʊŋ˧˥ jɐu˩˧ hou˧˥ tɔː˥ tsɔːŋ˧ lɐi˨ kɛː˧ saːn˥ jɛː˩˧ tʰʊŋ˨˩ lei˨˩ tou˧˥ fʊŋ˥ kʷɔːŋ˥] (SUN-GY GEH MEEN-JIK JEEM-JOR CHUEN HEUNG-GONG CHEW-GWOR BAHK-FUN-JEE-BAHT-SUP, YUNG-YAU HOH-DOH JONG-LY GEH SAHN-YEH TOONG LY-DOU FOONG-GWONG)",
          "translation": "The New Territories account for over eighty percent of Hong Kong's total land area, possessing plenty of magnificent countryside and outlying island scenery."
        }
      ],
      "mnemonics": [
        "【港島九龍歌】港島九龍隔個海，跨越維港叫「過海」；紅隧東隧加西隧，新界離島景色美！"
      ],
      "culturalNotes": [
        "在香港，「過海」一詞具有深厚之歷史與文化心理內涵。在海底隧道開通前，市民必須依賴天星小輪或汽車渡輪渡海；如今即便地鐵與三隧四通八達，香港人仍習慣將往來港島與九龍新界統稱為「過海」。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【跨海動詞】在香港粵語中描述從九龍或新界前往香港島，最地道專屬之動詞係：",
          "options": [
            "過海 (gwo3 hoi2)",
            "過河) (Context: 香港三大地理板塊與跨海樞紐：「香港島」、「九龍半島」、「新界同離島」、)",
            "過橋) (Context: 香港三大地理板塊與跨海樞紐：「香港島」、「九龍半島」、「新界同離島」、)",
            "過山) (Context: 香港三大地理板塊與跨海樞紐：「香港島」、「九龍半島」、「新界同離島」、)"
          ],
          "answerIndex": 0,
          "explanation": "往來港島與九龍新界在粵語中專用動詞「過海」（gwo3 hoi2）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【設施簡稱】香港歷史最悠久、連接紅磡與灣仔告士打道之海底隧道，口語簡稱為：",
          "options": [
            "紅隧 (hung4 seoi6 / Cross-Harbour Tunnel)",
            "東隧) (Context: 香港三大地理板塊與跨海樞紐：「香港島」、「九龍半島」、「新界同離島」、)",
            "西隧) (Context: 香港三大地理板塊與跨海樞紐：「香港島」、「九龍半島」、「新界同離島」、)",
            "大隧) (Context: 香港三大地理板塊與跨海樞紐：「香港島」、「九龍半島」、「新界同離島」、)"
          ],
          "answerIndex": 0,
          "explanation": "紅磡海底隧道在香港口語中普遍簡稱為「紅隧」（hung4 seoi6）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【板塊常識】香港地理三大核心組成板塊中，佔全港土地面積八成以上之區域為：",
          "options": [
            "新界同離島 (New Territories & Outlying Islands)",
            "香港島) (Context: 香港三大地理板塊與跨海樞紐：「香港島」、「九龍半島」、「新界同離島」、)",
            "九龍半島) (Context: 香港三大地理板塊與跨海樞紐：「香港島」、「九龍半島」、「新界同離島」、)",
            "維多利亞港) (Context: 香港三大地理板塊與跨海樞紐：「香港島」、「九龍半島」、「新界同離島」、)"
          ],
          "answerIndex": 0,
          "explanation": "新界連同各個離島佔香港整體陸地面積超過百分之八十。"
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
    "title": "港島核心城區與名勝地標：「中環」、「銅鑼灣」、「太平山頂」、「淺水灣」 (HK Island Districts & Landmarks)",
    "level": "A2",
    "objective": "掌握香港島核心金融商圈、購物地標、觀光名勝與海灘古蹟之粵語地名（中環、銅鑼灣、太平山頂、淺水灣、蘭桂坊、大館）。",
    "presentation": {
      "explanation": "香港島依山傍海，自中西區向南區延伸出金融、購物、夜生活與海濱度假相結合之多元景觀：\n\n一、核心都會商圈與歷史地標：\n１．「中環」（zung1 waan4）：香港之金融中樞與政經心臟，摩天大樓林立。\n- 「大館」：由舊中區警署建築群活化而成之古蹟與藝術文化館。\n- 「蘭桂坊」：中環著名之酒吧與異國料理夜生活街區。\n- 「半山扶手電梯」：全球最長之戶外有蓋行人登山電梯系統。\n２．「銅鑼灣」（tung4 lo4 waan4）：港島著名之購物天堂與人流中心。\n- 「時代廣場」與「崇光百貨」：核心大型購物商場地標。\n- 「維多利亞公園 / 維園」：全港最大之市區公園，年宵花市與大型集會舉辦地。\n\n二、自然名勝與海濱度假勝地：\n１．「太平山頂 / 山頂纜車」（taai3 ping4 saan1 deng2 / saan1 deng2 laam6 ce1）：全港最佳之俯瞰維港全景觀景勝地，擁有逾百年歷史之復古登山纜車。\n２．「淺水灣 / 赤柱」（cin2 seoi2 waan1 / cek3 cyu5）：港島南區著名之月牙形天然沙灘與充滿歐陸風情之赤柱市集。",
      "examples": [
        {
          "target": "遊客第一次嚟香港，一定要搭山頂纜車上去太平山頂睇維港百萬夜景。",
          "reading": "jau4 haak3 dai6 jat1 ci3 lai4 hoeng1 gong2, jat1 ding6 jiu3 daap3 saan1 deng2 laam6 ce1 soeng5 heoi3 taai3 ping4 saan1 deng2 tai2 wai4 gong2 baak3 maan6 je6 ging2. [jɐu˨˩ haːk̚˧ tɐi˨ jɐt̚˥ tsʰiː˧ lɐi˨˩ hœːŋ˥ kɔːŋ˧˥, jɐt̚˥ tɪŋ˨ jiu˧ taːp̚˧ saːn˥ tɛːŋ˧˥ laːm˨ tsʰɛː˥ sœːŋ˩˧ hɵy˧ tʰaːi˧ pʰɪŋ˨˩ saːn˥ tɛːŋ˧˥ tʰɐi˧˥ wɐi˨˩ kɔːŋ˧˥ paːk̚˧ maːn˨ jɛː˨ kɪŋ˧˥] (YAU-HAHK DY-YUT-CHEE LY HEUNG-GONG, YUT-DING YEW DAHP SAHN-DENG LAHM-CHEH SEUNG-HOEY TY-PING-SAHN-DENG TY WY-GONG BAHK-MAHN YEH-GING)",
          "translation": "When tourists come to Hong Kong for the first time, they must take the Peak Tram up to Victoria Peak to view the million-dollar night scenery of Victoria Harbour."
        },
        {
          "target": "中環大館保留咗好多舊警署嘅紅磚建築，依家變成好受歡迎嘅文藝打卡勝地。",
          "reading": "zung1 waan4 daai6 gun2 bou2 lau4 zo2 hou2 do1 gau6 ging2 cyu5 ge3 hung4 zyun1 gin3 zuk1, ji1 gaa1 bin3 sing4 hou2 sau6 fun1 jing4 ge3 man4 ngai6 daa2 kaat1 sing3 dei6. [tsʊŋ˥ waːn˨˩ taːi˨ kuːn˧˥ pou˧˥ lɐu˨˩ tsɔː˧˥ hou˧˥ tɔː˥ kɐu˨ kɪŋ˧˥ tsʰyː˩˧ kɛː˧ hʊŋ˨˩ tsyːn˥ kiːn˧ tsʊk̚˨, jiː˥ kaː˥ piːn˧ sɪŋ˨˩ hou˧˥ sɐu˨ fuːn˥ jɪŋ˨˩ kɛː˧ mɐn˨˩ ŋɐi˨ taː˧˥ kʰaːt̚˥ sɪŋ˧ tei˨] (JOONG-WAHN DY-GOON BOU-LAU-JOR HOH-DOH GAU-GING-CHYU GEH HOONG-JUEN GEEN-JOOK, YEE-GAH BEEN-SING HOH-SAU-FOON-YING GEH MUN-NGAI DY-KAHT SING-DAY)",
          "translation": "Tai Kwun in Central preserves many red-brick buildings of the former police station; now it has transformed into a very popular arts and culture photo hotspot."
        },
        {
          "target": "每逢農曆新年，好多市民都會去銅鑼灣維多利亞公園逛年宵花市買年花。",
          "reading": "mui5 fung4 nung4 lik6 san1 nin4, hou2 do1 si5 man4 dou1 wui5 heoi3 tung4 lo4 waan4 wai4 do1 lei6 aa3 gung1 jyun4*2 kwaang3 nin4 siu1 faa1 si5 maai5 nin4 faa1. [muːi˩˧ fʊŋ˨˩ nʊŋ˨˩ lɪk̚˨ sɐn˥ niːn˨˩, hou˧˥ tɔː˥ siː˩˧ mɐn˨˩ tou˥ jɐu˩˧ hɵy˧ tʰʊŋ˨˩ lɔː˨˩ waːn˨˩ wɐi˨˩ tɔː˥ lei˨ aː˧ kʊŋ˥ jyːn˧˥ kʰwaːŋ˧ niːn˨˩ siu˥ faː˥ siː˩˧ maːi˩˧ niːn˨˩ faː˥] (MOOI-FOONG NOONG-LIK SUN-NEEN, HOH-DOH SEE-MUN DOH WUI HOEY TOONG-LOH-WAHN WY-DOH-LEY-AH GONG-YUEN KWAHNG NEEN-SIU FAH-SEE MY NEEN-FAH)",
          "translation": "Every Lunar New Year, many citizens go to Victoria Park in Causeway Bay to stroll through the Lunar New Year flower market to buy festive flowers."
        }
      ],
      "mnemonics": [
        "【港島名勝訣】中環大館蘭桂坊，銅鑼灣逛時代場；山頂纜車穿雲過，淺水灣畔浴日光！"
      ],
      "culturalNotes": [
        "中環蘭桂坊與中上環蘇豪區展現了香港「華洋雜處」之國際化特質。而銅鑼灣維園每年農曆除夕之年宵花市，更係幾代香港人全家行大運、祈求新年吉利之集體文化記憶。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【地標匹配】香港歷史悠久之登山復古纜車，其直達之港島著名俯瞰全港夜景勝地係：",
          "options": [
            "太平山頂 (taai3 ping4 saan1 deng2 / Victoria Peak)",
            "獅子山) (Context: 港島核心城區與名勝地標：「中環」、「銅鑼灣」、「太平山頂」、「淺水灣」)",
            "大帽山) (Context: 港島核心城區與名勝地標：「中環」、「銅鑼灣」、「太平山頂」、「淺水灣」)",
            "鳳凰山) (Context: 港島核心城區與名勝地標：「中環」、「銅鑼灣」、「太平山頂」、「淺水灣」)"
          ],
          "answerIndex": 0,
          "explanation": "山頂纜車直達太平山頂（taai3 ping4 saan1 deng2）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【街區識別】位於港島中環、以異國風情特色酒吧、西餐廳與夜生活聞名之街區係：",
          "options": [
            "蘭桂坊 (laan4 gwai3 fong1)",
            "女人街) (Context: 港島核心城區與名勝地標：「中環」、「銅鑼灣」、「太平山頂」、「淺水灣」)",
            "波鞋街) (Context: 港島核心城區與名勝地標：「中環」、「銅鑼灣」、「太平山頂」、「淺水灣」)",
            "金魚街) (Context: 港島核心城區與名勝地標：「中環」、「銅鑼灣」、「太平山頂」、「淺水灣」)"
          ],
          "answerIndex": 0,
          "explanation": "中環著名酒吧與夜生活街區為「蘭桂坊」（laan4 gwai3 fong1）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【古蹟文化】由舊中區警署建築群活化而成之當代文藝古蹟地標，其通稱為：",
          "options": [
            "大館 (daai6 gun2 / Tai Kwun)",
            "大會堂) (Context: 港島核心城區與名勝地標：「中環」、「銅鑼灣」、「太平山頂」、「淺水灣」)",
            "大劇院) (Context: 港島核心城區與名勝地標：「中環」、「銅鑼灣」、「太平山頂」、「淺水灣」)",
            "大碼頭) (Context: 港島核心城區與名勝地標：「中環」、「銅鑼灣」、「太平山頂」、「淺水灣」)"
          ],
          "answerIndex": 0,
          "explanation": "舊中區警署建築群在香港通稱「大館」（daai6 gun2）。"
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
    "title": "九龍繁華商圈與民俗街區：「尖沙咀」、「旺角」、「油麻地果欄」、「黃大仙祠」 (Kowloon Landmarks & Heritage)",
    "level": "A2",
    "objective": "掌握九龍半島核心商圈、特色主題街區與傳統信仰民俗名勝之粵語地名（尖沙咀、旺角、油麻地果欄、廟街夜市、黃大仙祠、星光大道）。",
    "presentation": {
      "explanation": "九龍半島匯聚了世界級之維港海濱景觀、生機盎然之市井主題街區與香火鼎盛之民間廟宇文化：\n\n一、尖沙咀海濱與購物地標：\n１．「尖沙咀」（zim1 saa1 zeoi2）：九龍半島南端核心旅遊重鎮。\n- 「星光大道」：尖沙咀海旁表彰香港電影傑出影人之觀海長廊。\n- 「天星碼頭」：搭乘天星小輪過海橫渡維港之百年歷史碼頭。\n- 「海港城」：全港最大面積之大型臨海購物綜合體。\n\n二、旺角與油麻地特色主題街區：\n１．「旺角」（wong6 gok3）：全港人口密度極高、活力充沛之購物娛樂街區。\n- 「女人街」（通菜街南段）：露天擺賣平價女裝飾物之特色排檔街。\n- 「波鞋街」（花園街南段）：專門售賣各國限量運動鞋之特色街。\n- 「金魚街」（通菜街北段）：店舖掛滿袋裝熱帶觀賞魚之獨特市景。\n２．「油麻地」（jau4 maa4 dei6*2）：\n- 「油麻地果欄」：逾百年歷史之批發水果交易市場。\n- 「廟街夜市」：大排檔、算命占卜與懷舊唱曲匯聚之平民夜市。\n\n三、民間信仰核心地標：\n１．「黃大仙祠」（wong4 daai6 sin1 ci4）：香港香火極旺之著名道教廟宇，素有「有求必應」之美譽，農曆正月初一搶插頭炷香係著名民俗盛事。",
      "examples": [
        {
          "target": "夜晚漫步尖沙咀星光大道，可以近距離欣賞維多利亞港對岸璀璨嘅摩天大廈。",
          "reading": "je6 maan5 maan6 bou6 zim1 saa1 zeoi2 seng1 gwong1 daai6 dou6, ho2 ji5 gan6 keoi1 lei4 jan1 soeng2 wai4 do1 lei6 aa3 gong2 deoi3 ngon6 ceoi2 caan3 ge3 mo1 tin1 daai6 haa6. [jɛː˨ maːn˩˧ maːn˨ pou˨ tsiːm˥ saː˥ tsɵy˧˥ sɛːŋ˥ kʷɔːŋ˥ taːi˨ tou˨, hɔː˧˥ jiː˩˧ kɐn˨ kʰɵy˥ lei˨˩ jɐn˥ sœːŋ˧˥ wɐi˨˩ tɔː˥ lei˨ aː˧ kɔːŋ˧˥ tɵy˧ ŋɔːn˨ tsʰɵy˧˥ tsʰaːn˧ kɛː˧ mɔː˥ tʰiːn˥ taːi˨ haː˨] (YEH-MAHN MAHN-BOU JEEM-SAH-JEOY SENG-GWONG DY-DOU, HOH-YEE GUN-KOEY-LY YUN-SEUNG WY-DOH-LEY-AH-GONG DEOY-NGOHN CHOEY-CHAAN GEH MOH-TEEN DY-HAH)",
          "translation": "Strolling along the Tsim Sha Tsui Avenue of Stars at night, one can appreciate the dazzling skyscrapers on the opposite shore of Victoria Harbour at close range."
        },
        {
          "target": "旺角波鞋街有好多限量版運動鞋賣，每逢週末都吸引好多後生仔去掃貨。",
          "reading": "wong6 gok3 bo1 haai4 gaai1 jau5 hou2 do1 haan6 loeng6 baan2 wan6 dung6 haai4 maai6, mui5 fung4 zau1 mut6 dou1 kap1 jan5 hou2 do1 hau6 saang1 zai2 heoi3 sou3 fo3. [wɔːŋ˨ kɔːk̚˧ pɔː˥ haːi˨˩ kaːi˥ jɐu˩˧ hou˧˥ tɔː˥ haːn˨ lœːŋ˨ paːn˧˥ wɐn˨ tʊŋ˨ haːi˨˩ maːi˨, muːi˩˧ fʊŋ˨˩ tsɐu˥ muːt̚˨ tou˥ kʰɐp̚˥ jɐn˩˧ hou˧˥ tɔː˥ hɐu˨ saːŋ˥ tsɐi˧˥ hɵy˧ sou˧ fɔː˧] (WONG-GOK BOH-HY-GY YAU HOH-DOH HAHN-LEUNG-BAHN WUN-DOONG-HY MY, MOOI-FOONG JAU-MOOT DOH KUP-YUN HOH-DOH HAU-SAHNG-JY HOEY SOU-FOH)",
          "translation": "Sneaker Street in Mong Kok sells many limited-edition sneakers; every weekend it attracts many young people to go shopping."
        },
        {
          "target": "黃大仙祠以有求必應聞名，每年除夕夜都有成千上萬善信排隊爭插頭炷香。",
          "reading": "wong4 daai6 sin1 ci4 ji5 jau5 kau4 bit1 jing3 man4 ming4, mui5 nin4 ceoi4 zik6 je6 dou1 jau5 seng4 cin1 soeng6 maan6 sin6 seon3 paai4 deoi6*2 zang1 caap3 tau4 zyu3 hoeng1. [wɔːŋ˨˩ taːi˨ siːn˥ tsʰiː˨˩ jiː˩˧ jɐu˩˧ kʰɐu˨˩ pɪt̚˥ jɪŋ˧ mɐn˨˩ mɪŋ˨˩, muːi˩˧ niːn˨˩ tsʰɵy˨˩ tsɪk̚˨ jɛː˨ tou˥ jɐu˩˧ sɛːŋ˨˩ tsʰiːn˥ sœːŋ˨ maːn˨ siːn˨ sɵn˧ pʰaːi˨˩ tɵy˧˥ tsɐŋ˥ tsʰaːp̚˧ tʰɐu˨˩ tsyː˧ hœːŋ˥] (WONG-DY-SEEN-CHEE YEE YAU-KAU-BIT-YING MUN-MING, MOOI-NEEN CHOEY-JIK-YEH DOH YAU SENG-CHEEN-SEUNG-MAHN SEEN-SEUN PY-DEOY JUNG CHAHK-TAU-JYU-HEUNG)",
          "translation": "Wong Tai Sin Temple is renowned for answering every prayer; on Chinese New Year's Eve every year, thousands upon thousands of devotees queue up to rush for the first incense offering."
        }
      ],
      "mnemonics": [
        "【九龍地標歌】尖沙咀畔星光道，旺角波鞋女人街；油麻地果欄生果甜，黃大仙祠求吉祥！"
      ],
      "culturalNotes": [
        "香港特色主題街「波鞋街」、「女人街」、「金魚街」體現了嶺南傳統商業「同業集聚」之特色。而「插頭炷香」（新春爭插第一爐香）則體現了民間對來年平安順遂之虔誠祈盼。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【特色街區】位於九龍旺角花園街南段、專門集中售賣各類潮流運動鞋之特色街道稱為：",
          "options": [
            "波鞋街 (bo1 haai4 gaai1 / Sneaker Street)",
            "金魚街) (Context: 九龍繁華商圈與民俗街區：「尖沙咀」、「旺角」、「油麻地果欄」、「黃大仙)",
            "女人街) (Context: 九龍繁華商圈與民俗街區：「尖沙咀」、「旺角」、「油麻地果欄」、「黃大仙)",
            "廟街) (Context: 九龍繁華商圈與民俗街區：「尖沙咀」、「旺角」、「油麻地果欄」、「黃大仙)"
          ],
          "answerIndex": 0,
          "explanation": "花園街南段因專門售賣運動鞋（波鞋）而通稱「波鞋街」（bo1 haai4 gaai1）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【廟宇民俗】以「有求必應」著稱、每逢農曆新年除夕善信爭插「頭炷香」之著名道教宮觀係：",
          "options": [
            "黃大仙祠 (wong4 daai6 sin1 ci4)",
            "文武廟) (Context: 九龍繁華商圈與民俗街區：「尖沙咀」、「旺角」、「油麻地果欄」、「黃大仙)",
            "車公廟) (Context: 九龍繁華商圈與民俗街區：「尖沙咀」、「旺角」、「油麻地果欄」、「黃大仙)",
            "天后廟) (Context: 九龍繁華商圈與民俗街區：「尖沙咀」、「旺角」、「油麻地果欄」、「黃大仙)"
          ],
          "answerIndex": 0,
          "explanation": "「黃大仙祠」（wong4 daai6 sin1 ci4）以有求必應與新春頭炷香聞名。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【市井街區】九龍油麻地擁有百年歷史之著名水果批發交易市場，粵語口語簡稱為：",
          "options": [
            "果欄 (gwo2 laan4 / Yau Ma Tei Fruit Market)",
            "菜欄) (Context: 九龍繁華商圈與民俗街區：「尖沙咀」、「旺角」、「油麻地果欄」、「黃大仙)",
            "魚欄) (Context: 九龍繁華商圈與民俗街區：「尖沙咀」、「旺角」、「油麻地果欄」、「黃大仙)",
            "肉欄) (Context: 九龍繁華商圈與民俗街區：「尖沙咀」、「旺角」、「油麻地果欄」、「黃大仙)"
          ],
          "answerIndex": 0,
          "explanation": "油麻地水果批發市場在香港通稱為「果欄」（gwo2 laan4）。"
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
    "title": "新界自然生態與傳統古村：「西貢」、「大埔 / 大美督」、「沙田 / 車公廟」、「元朗 / 圍村」 (New Territories Heritage & Nature)",
    "level": "A2",
    "objective": "掌握新界核心市鎮、自然風景區、地質公園與宗族圍村文化地名（西貢、大埔大美督、沙田車公廟、元朗圍村盆菜）。",
    "presentation": {
      "explanation": "新界地域廣袤，融合了鬼斧神工之地質海岸生態、歷史悠久之嶺南原居民圍村文化與現代新市鎮風貌：\n\n一、自然景觀與休閒勝地：\n１．「西貢」（sai1 gung3）：素有「香港後花園」之美譽。\n- 「西貢海鮮街」：臨海現挑現煮活海鮮之美食聚集地。\n- 「地質公園」：擁有世界級六角形火山岩柱景觀。\n２．「大埔」與「大美督」（daai6 bou3 / daai6 mei5 duk1）：\n- 「大美督水塘主壩」：市民週末租單車踩單車、放風箏與燒烤之勝地。\n\n二、新市鎮歷史與民俗地標：\n１．「沙田」（saa1 tin4）：\n- 「車公廟」：祈求轉運之著名古廟，信眾會轉動銅風車祈求「風生水起、運轉乾坤」。\n- 「城門河」：每年端午節舉辦龍舟競渡之重要河道。\n２．「元朗」（jyun4 long5）與「圍村」（wai4 cyun1）：\n- 「吉慶圍」與「屏山文物徑」：保留完整之原居民防禦性古圍村與宗族祠堂。\n- 「圍村盆菜」：將十幾種豐盛食材（鮑魚、海參、燒鴨、大蝦、枝竹、蘿蔔等）層層疊疊置於大盆中之傳統盛宴，象徵「闔家團圓、盆滿缽滿」。",
      "examples": [
        {
          "target": "週末好多人中意去西貢租船出海遊船河，順便喺海鮮街歎一餐豐富嘅海鮮大餐。",
          "reading": "zau1 mut6 hou2 do1 jan4 zung1 ji3 heoi3 sai1 gung3 zou1 syun4 ceot1 hoi2 jau4 syun4 ho4, seon6 bin6 hai2 hoi2 sin1 gaai1 taan3 jat1 saan1 fung1 fu3 ge3 hoi2 sin1 daai6 caan1. [tsɐu˥ muːt̚˨ hou˧˥ tɔː˥ jɐn˨˩ tsʊŋ˥ jiː˧ hɵy˧ sɐi˥ kʊŋ˧ tsou˥ syːn˨˩ tsʰɵt̚˥ hɔːi˧˥ jɐu˨˩ syːn˨˩ hɔː˨˩, sɵn˨ piːn˨ hɐi˩˧ hɔːi˧˥ siːn˥ kaːi˥ tʰaːn˧ jɐt̚˥ saːn˥ fʊŋ˥ fuː˧ kɛː˧ hɔːi˧˥ siːn˥ taːi˨ tsʰaːn˥] (JAU-MOOT HOH-DOH YUN JOONG-YEE HOEY SY-GONG JOU-SYUN CHUT-HOY YAU-SYUN-HOR, SEUN-BEEN HY HOY-SEEN-GY TAAN YUT-SAHN FOONG-FOO GEH HOY-SEEN DY-CHAAN)",
          "translation": "On weekends many people like going to Sai Kung to rent a boat for a junk boat trip, and smoothly enjoy a sumptuous seafood feast along Seafood Street."
        },
        {
          "target": "農曆新年年初三赤口，好多市民會去沙田車公廟轉風車祈求全家轉運平安。",
          "reading": "nung4 lik6 san1 nin4 nin4 co1 saam1 cek3 hau2, hou2 do1 si5 man4 wui5 heoi3 saa1 tin4 ce1 gung1 miu6 zyun3 fung1 ce1 kei4 kau4 cyun4 gaa1 zyun3 wan6 ping4 on1. [nʊŋ˨˩ lɪk̚˨ sɐn˥ niːn˨˩ niːn˨˩ tsʰɔː˥ saːm˥ tsʰɛːk̚˧ hɐu˧˥, hou˧˥ tɔː˥ siː˩˧ mɐn˨˩ wuːi˩˧ hɵy˧ saː˥ tʰiːn˨˩ tsʰɛː˥ kʊŋ˥ miːu˨ tsyn˧ fʊŋ˥ tsʰɛː˥ kʰei˨˩ kʰɐu˨˩ tsʰyːn˨˩ kaː˥ tsyn˧ wɐn˨ pʰɪŋ˨˩ ɔːn˥] (NOONG-LIK SUN-NEEN NEEN-CHOH-SAHM CHEK-HAU, HOH-DOH SEE-MUN WUI HOEY SAH-TEEN CHEH-GONG-MEW JUEN-FOONG-CHEH KEY-KAU CHUEN-GAH JUEN-WUN PING-ON)",
          "translation": "On the third day of the Lunar New Year, many citizens go to Che Kung Temple in Sha Tin to spin the windmills to pray for good fortune and peace for the whole family."
        },
        {
          "target": "元朗圍村嘅傳統盆菜用料十足，象徵一家人團團圓圓、盆滿缽滿。",
          "reading": "jyun4 long5 wai4 cyun1 ge3 cyun4 tung2 pun4 coi3 jung6 liu6*2 sap6 zuk1, zoeng6 zing1 jat1 gaa1 jan4 tyun4 tyun4 jyun4 jyun4, pun4 mun5 bat1 mun5. [jyːn˨˩ lɔːŋ˩˧ wɐi˨˩ tsʰyːn˥ kɛː˧ tsʰyːn˨˩ tʰʊŋ˧˥ pʰuːn˨˩ tsʰɔːi˧ jʊŋ˨ liːu˧˥ sɐp̚˨ tsʊk̚˥, tsœːŋ˨ tsɪŋ˥ jɐt̚˥ kaː˥ jɐn˨˩ tʰyːn˨˩ tʰyːn˨˩ jyːn˨˩ jyːn˨˩, pʰuːn˨˩ muːn˩˧ pɐt̚˥ muːn˩˧] (YUEN-LONG WY-CHUEN GEH CHUEN-TOONG POON-CHOY YOONG-LEW SUP-JOOK, JEUNG-JING YUT-GAH-YUN TUEN-TUEN-YUEN-YUEN, POON-MOON-BOON-MOON)",
          "translation": "Traditional Poon Choi in Yuen Long walled villages is packed with solid ingredients, symbolizing family reunion and overflowing abundance."
        }
      ],
      "mnemonics": [
        "【新界風物歌】西貢後花園景色好，大美督主壩單車踩；沙田車公轉風車，元朗圍村歎盆菜！"
      ],
      "culturalNotes": [
        "元朗圍村盆菜源於南宋末年文天祥與宋帝南逃至新界之歷史傳說，村民將各家僅有食材置於大木盆中款待御駕，後演變為新界宗族祭祖、婚嫁與添丁慶典不可或缺之非物質文化遺產。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【自然地標】因山清水秀、地質公園景觀優美而素有「香港後花園」美譽之新界地區係：",
          "options": [
            "西貢 (sai1 gung3 / Sai Kung)",
            "觀塘) (Context: 新界自然生態與傳統古村：「西貢」、「大埔 / 大美督」、「沙田 / 車)",
            "深水埗) (Context: 新界自然生態與傳統古村：「西貢」、「大埔 / 大美督」、「沙田 / 車)",
            "油麻地) (Context: 新界自然生態與傳統古村：「西貢」、「大埔 / 大美督」、「沙田 / 車)"
          ],
          "answerIndex": 0,
          "explanation": "「西貢」（sai1 gung3）被譽為「香港後花園」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【非遺美食】元朗原居民圍村在喜慶節日時全村共食、象徵「盆滿缽滿」之傳統特色菜式係：",
          "options": [
            "圍村盆菜 (wai4 cyun1 pun4 coi3 / Poon Choi)",
            "叉燒包) (Context: 新界自然生態與傳統古村：「西貢」、「大埔 / 大美督」、「沙田 / 車)",
            "菠蘿包) (Context: 新界自然生態與傳統古村：「西貢」、「大埔 / 大美督」、「沙田 / 車)",
            "老婆餅) (Context: 新界自然生態與傳統古村：「西貢」、「大埔 / 大美督」、「沙田 / 車)"
          ],
          "answerIndex": 0,
          "explanation": "新界原居民圍村最具代表性之喜慶盛宴為「盆菜」（pun4 coi3）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【民俗祈福】沙田車公廟每年新春吸引大量善信前往祈福，信眾通常透過轉動何種吉祥物象徵轉運：",
          "options": [
            "銅風車 (Windmills)",
            "轉經筒) (Context: 新界自然生態與傳統古村：「西貢」、「大埔 / 大美督」、「沙田 / 車)",
            "大銅鐘) (Context: 新界自然生態與傳統古村：「西貢」、「大埔 / 大美督」、「沙田 / 車)",
            "八卦鏡) (Context: 新界自然生態與傳統古村：「西貢」、「大埔 / 大美督」、「沙田 / 車)"
          ],
          "answerIndex": 0,
          "explanation": "車公廟信眾透過轉動銅風車（zyun3 fung1 ce1）祈求轉運轉吉。"
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
    "title": "離島風情與文化景觀：「大嶼山 / 天壇大佛」、「長洲 / 搶包山」、「南丫島 / 榕樹灣」 (Outlying Islands & Living Heritage)",
    "level": "A2",
    "objective": "掌握香港主要離島（大嶼山、長洲、南丫島、大澳）之核心觀光名勝、非物質文化遺產（昂坪天壇大佛、太平清醮搶包山、大澳水鄉棚屋）。",
    "presentation": {
      "explanation": "香港各個離島遠離都會喧囂，保留了悠閒之漁村風貌、世界級宗教聖地與極具震撼力之國家級非物質文化遺產：\n\n一、大嶼山與大澳水鄉：\n１．「大嶼山」（daai6 jyu4 saan1）：全港面積最大之島嶼（面積約為港島之兩倍）。\n- 「昂坪360纜車」：連接東涌與昂坪之跨海全景纜車。\n- 「天壇大佛 / 寶蓮禪寺」：全球最高之戶外青銅坐佛。\n２．「大澳水鄉」（daai6 ou3）：素有「東方威尼斯」美稱之傳統漁村，標誌性景觀為建於水上之「棚屋」（paang4 uk1），出產著名之「蝦膏」與「鹹魚」。\n\n二、長洲與國家級非遺民俗：\n１．「長洲」（coeng4 zau1）：形似啞鈴之熱門休閒海島。\n- 「太平清醮」：農曆四月初八舉辦之國家級非遺祭典。\n- 「飄色巡遊」：由小童化裝扮演古今歷史人物凌空巡遊之絕技。\n- 「搶包山」：深夜攀爬由平安包搭建而成之高塔爭奪福包之民俗競技。\n- 「平安包」：蓋有紅色「平安」印章之蒸包，寓意合家平安順遂。\n\n三、南丫島異國風情：\n１．「南丫島」（naam4 aa1 dou2）：\n- 「榕樹灣」：充滿異國情調、特色咖啡館與工藝品小店之街區。\n- 「索罟灣」：著名之海鮮酒家聚集港灣。\n- 兩灣之間之遠足行山徑係極受歡迎之休閒路線。",
      "examples": [
        {
          "target": "搭昂坪360纜車去大嶼山睇天壇大佛，沿途可以俯瞰成個香港國際機場同港珠澳大橋。",
          "reading": "daap3 ngong5 ping4 saam1 luk6 ling4 laam6 ce1 heoi3 daai6 jyu4 saan1 tai2 tin1 taan4 daai6 fat6, jyun4 tou4 ho2 ji5 fu2 ham3 seng4 go3 hoeng1 gong2 gwok3 zai3 gei1 coeng4 tung4 gong2 zyu1 ou3 daai6 kiu4. [taːp̚˧ ŋɔːŋ˩˧ pʰɪŋ˨˩ saːm˥ lʊk̚˨ lɪŋ˨˩ laːm˨ tsʰɛː˥ hɵy˧ taːi˨ jyː˨˩ saːn˥ tʰɐi˧˥ tʰiːn˥ tʰaːn˨˩ taːi˨ fɐt̚˨, jyːn˨˩ tʰou4 hɔː˧˥ jiː˩˧ fuː˧˥ hɐm˧ sɛːŋ˨˩ kɔː˧ hœːŋ˥ kɔːŋ˧˥ kʷɔːk̚˧ tsɐi˧ kei˥ tsʰœːŋ˨˩ tʰʊŋ˨˩ kɔːŋ˧˥ tsyː˥ ou˧ taːi˨ kʰiːu˨˩] (DAHP NGONG-PING SAHM-LOOK-LING LAHM-CHEH HOEY DY-YUE-SAHN TY TEEN-TAHN DY-FUT, YUEN-TOU HOH-YEE FOO-HUM SENG-GOH HEUNG-GONG GWOK-JAI GAY-CHEUNG TOONG GONG-JYUE-OU DY-KEW)",
          "translation": "Taking the Ngong Ping 360 cable car to Lantau Island to see the Big Buddha, along the way one can overlook the entire Hong Kong International Airport and Hong Kong-Zhuhai-Macao Bridge."
        },
        {
          "target": "長洲太平清醮嘅搶包山比賽同飄色巡遊，每年都吸引幾萬名遊客專程搭渡輪去觀賞。",
          "reading": "coeng4 zau1 taai3 ping4 cing1 ziu3 ge3 coeng2 baau1 saan1 bei2 coi3 tung4 piu1 sik1 ceon4 jau4, mui5 nin4 dou1 kap1 jan5 gei2 maan6 ming4 jau4 haak3 zyun1 cing4 daap3 dou6 leon4 heoi3 gun1 soeng2. [tsʰœːŋ˨˩ tsɐu˥ tʰaːi˧ pʰɪŋ˨˩ tsʰɪŋ˥ tsiːu˧ kɛː˧ tsʰœːŋ˧˥ paːu˥ saːn˥ pei˧˥ tsʰɔːi˧ tʰʊŋ˨˩ pʰiːu˥ sɪk̚˥ tsʰɵn˨˩ jɐu˨˩, muːi˩˧ niːn˨˩ tou˥ kʰɐp̚˥ jɐn˩˧ kei˧˥ maːn˨ mɪŋ˨˩ jɐu˨˩ haːk̚˧ tsyːn˥ tsʰɪŋ˨˩ taːp̚˧ tou˨ lœːn˨˩ hɵy˧ kuːn˥ sœːŋ˧˥] (CHEUNG-JAU TY-PING CHING-JIU GEH CHEUNG-BAU-SAHN BAY-CHOY TOONG PEW-SIK CHUN-YAU, MOOI-NEEN DOH KUP-YUN GAY-MAHN-MING YAU-HAHK JUEN-CHING DAHP DOU-LEUN HOEY GOON-SEUNG)",
          "translation": "The Bun Scrambling Competition and Floating Colours Parade of Cheung Chau Jiao Festival attract tens of thousands of tourists taking ferries to watch every year."
        },
        {
          "target": "大澳漁村保留咗獨特嘅水上棚屋，遊客可以坐小艇出海睇中華白海豚。",
          "reading": "daai6 ou3 jyu4 cyun1 bou2 lau4 zo2 duk6 dak6 ge3 seoi2 soeng6 paang4 uk1, jau4 haak3 ho2 ji5 co5 siu2 teng5 ceot1 hoi2 tai2 zung1 waa4 baak6 hoi2 tyun4. [taːi˨ ou˧ jyː˨˩ tsʰyːn˥ pou˧˥ lɐu˨˩ tsɔː˧˥ tʊk̚˨ tɐk̚˨ kɛː˧ sɵy˧˥ sœːŋ˨ pʰaːŋ˨˩ ʊk̚˥, jɐu˨˩ haːk̚˧ hɔː˧˥ jiː˩˧ tsʰɔː˩˧ siu˧˥ tʰɛːŋ˩˧ tsʰɵt̚˥ hɔːi˧˥ tʰɐi˧˥ tsʊŋ˥ waː˨˩ paːk̚˨ hɔːi˧˥ tʰyːn˨˩] (DY-OU YUE-CHUEN BOU-LAU-JOR DOOK-DUK GEH SOEY-SEUNG PAHNG-OOK, YAU-HAHK HOH-YEE CHOH SIU-TENG CHUT-HOY TY JOONG-WAH BAHK-HOY-TUEN)",
          "translation": "Tai O fishing village preserves unique stilt houses on the water; tourists can take small boats out to sea to watch Chinese white dolphins."
        }
      ],
      "mnemonics": [
        "【離島風情歌】大嶼山上拜大佛，大澳水鄉看棚屋；長洲清醮搶包山，南丫遠足海鮮足！"
      ],
      "culturalNotes": [
        "長洲太平清醮已有百餘年歷史，最初為平息瘟疫、超度亡魂而設。其「飄色巡遊」以鋼支巧妙隱藏於戲服中支撐幼童凌空起舞，巧奪天工；而「搶包山」更是全球絕無僅有之民俗體育盛事。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【非遺盛事】每年農曆四月在長洲舉行、以「搶包山」與「飄色巡遊」聞名全港之傳統節慶係：",
          "options": [
            "長洲太平清醮 (Cheung Chau Bun Festival)",
            "大坑舞火龍) (Context: 離島風情與文化景觀：「大嶼山 / 天壇大佛」、「長洲 / 搶包山」、「)",
            "中秋綵燈會) (Context: 離島風情與文化景觀：「大嶼山 / 天壇大佛」、「長洲 / 搶包山」、「)",
            "天后誕巡遊) (Context: 離島風情與文化景觀：「大嶼山 / 天壇大佛」、「長洲 / 搶包山」、「)"
          ],
          "answerIndex": 0,
          "explanation": "長洲最負盛名之國家級非遺民俗節慶為「太平清醮」（taai3 ping4 cing1 ziu3）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【名勝景觀】大嶼山寶蓮禪寺旁著名之世界級戶外青銅坐佛，其正式名稱係：",
          "options": [
            "天壇大佛 (tin1 taan4 daai6 fat6 / Big Buddha)",
            "樂山大佛) (Context: 離島風情與文化景觀：「大嶼山 / 天壇大佛」、「長洲 / 搶包山」、「)",
            "雲岡大佛) (Context: 離島風情與文化景觀：「大嶼山 / 天壇大佛」、「長洲 / 搶包山」、「)",
            "龍門大佛) (Context: 離島風情與文化景觀：「大嶼山 / 天壇大佛」、「長洲 / 搶包山」、「)"
          ],
          "answerIndex": 0,
          "explanation": "大嶼山著名青銅坐佛為「天壇大佛」（tin1 taan4 daai6 fat6）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【水鄉景觀】被譽為「東方威尼斯」之大澳漁村，其搭建在水面潮汐之上的標誌性民居建築稱為：",
          "options": [
            "棚屋 (paang4 uk1 / Stilt Houses)",
            "石屋) (Context: 離島風情與文化景觀：「大嶼山 / 天壇大佛」、「長洲 / 搶包山」、「)",
            "竹樓) (Context: 離島風情與文化景觀：「大嶼山 / 天壇大佛」、「長洲 / 搶包山」、「)",
            "碉堡) (Context: 離島風情與文化景觀：「大嶼山 / 天壇大佛」、「長洲 / 搶包山」、「)"
          ],
          "answerIndex": 0,
          "explanation": "大澳水鄉建於水面木柱之上的傳統民居稱為「棚屋」（paang4 uk1）。"
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
    "title": "粵語書面與口語處置式概論：「將」字處置結構本質 (The 'zoeng1' Disposal Construction)",
    "level": "B1",
    "objective": "掌握粵語「將」字處置句之核心句式結構「主語 + 將 + 受事賓語 + 動詞謂語 + 結果/趨向補語」與商務公文規範表達。",
    "presentation": {
      "explanation": "處置式係漢語語法中極具表現力之特殊句型，其核心功能在於凸顯主語對某特定受事對象之主動處置、位置轉移或使之產生某種結果狀態：\n\n一、「將」字處置句核心語法公式：\n１．標準句式結構：【主語 ＋ 「將」 ＋ 受事賓語 ＋ 動詞謂語 ＋ 結果/趨向補語】。\n２．語法必備約束條件：\n- 受事賓語必須為已知、確定之特定人或物（通常帶有指示詞或特指領屬）。\n- 動詞謂語後方絕不可單獨空置，必須攜帶結果補語、趨向補語或體貌助詞（如「好、完、妥、走、埋」）。\n\n二、「將」字句在粵語中之語體分工：\n１．正式公文與禮貌指示語體：在香港政府公告、銀行合約、職場指引與商務交流中，廣泛使用「將」字句表達嚴謹、莊重之公務操作要求。\n- 例如：「請將已簽署之合約交返畀人事部」（請將簽署好的合同交回給人事部）。\n- 例如：「請將個人隨身物品妥善保管」（請將個人隨身物品妥善保管）。\n２．口語對比提示：粵語日常市井口語中，除了「將」字句外，更常使用後置複指詞「佢」進行口語處置（於後續課堂深入剖析）。",
      "examples": [
        {
          "target": "請大家將填妥嘅報名表格同身份證副本一齊交畀秘書處。",
          "reading": "cing2 daai6 gaa1 zoeng1 tin4 to5 ge3 bou3 meng4 biu2 gaak3 tung4 san1 fan2 zing3 fu3 bun2 jat1 cai4 gaau1 bei2 bei3 syu1 cyu3. [tsʰɪŋ˧˥ taːi˨ kaː˥ tsœːŋ˥ tʰiːn˨˩ tʰɔː˩˧ kɛː˧ pou˧ mɪŋ˨˩ piːu˧˥ kaːk̚˧ tʰʊŋ˨˩ sɐn˥ fɐn˧˥ tsɪŋ˧ fuː˧ puːn˧˥ jɐt̚˥ tsʰɐi˨˩ kaːu˥ pei˨ pei˧ syː˥ tsʰyː˧] (CHING DY-GAH JEUNG TEEN-TOH GEH BOU-MING BEW-GARK TOONG SUN-FUN-JING FOO-BOON YUT-CHY GAU-BAY BAY-SYU-CHYU)",
          "translation": "Please hand in the completed application form together with a copy of your identity card to the secretariat."
        },
        {
          "target": "出發之前，導遊再三提醒大家要將所有重要證件同貴重物品放好。",
          "reading": "ceot1 faat3 zi1 cin4, dou6 jau4 zoi3 saam1 tai4 seng2 daai6 gaa1 jiu3 zoeng1 so2 jau5 zung6 jiu3 zing3 gin62 tung4 gwai3 zung6 mat6 ban2 fong3 hou2. [tsʰɵt̚˥ faːt̚˧ tsiː˥ tsʰiːn˨˩, tou˨˩ jɐu˨˩ tsɔːi˧ saːm˥ tʰɐi˨˩ sɛːŋ˧˥ taːi˨ kaː˥ jiu˧ tsœːŋ˥ sɔː˧˥ jɐu˩˧ tsʊŋ˨ jiu˧ tsɪŋ˧ kiːn˧˥ tʰʊŋ˨˩ kʷɐi˧ tsʊŋ˨ mɐt̚˨ pʰɐn˧˥ fɔːŋ˧ hou˧˥] (CHUT-FAHT JEE-CHEEN, DOH-YAU JOY-SAHM TY-SENG DY-GAH YEW JEUNG SOH-YAU JOONG-YEW JING-GEEN TOONG GWY-JOONG MUT-BUN FONG-HOH)",
          "translation": "Before setting off, the tour guide repeatedly reminded everyone to put away all important documents and valuables properly."
        },
        {
          "target": "義工團隊好快就將幾十箱物資整整齊齊咁搬咗上貨車。",
          "reading": "ji6 gung1 tyun4 deoi6 hou2 faai3 zau6 zoeng1 gei2 sap6 soeng1 mat6 zi1 zing2 zing2 cai4 cai4 gam2 bun1 zo2 soeng5 fo3 ce1. [jiː˨ kʊŋ˥ tʰyːn˨˩ tɵy˨ hou˧˥ faːi˧ tsɐu˨ tsœːŋ˥ kei˧˥ sɐp̚˨ sœːŋ˥ mɐt̚˨ tsiː˥ tsɪŋ˧˥ tsɪŋ˧˥ tsʰɐi˨˩ tsʰɐi˨˩ kɐm˧˥ puːn˥ tsɔː˧˥ sœːŋ˩˧ fɔː˧ tsʰɛː˥] (YEE-GONG TUEN-DEOY HOH-FY JAU JEUNG GAY-SUP SEUNG MUT-JEE JING-JING-CHY-CHY GUM BOON-JOR SEUNG FOH-CHEH)",
          "translation": "The volunteer team quickly moved dozens of boxes of supplies neatly onto the lorry."
        }
      ],
      "mnemonics": [
        "【將字處置訣】處置動作先用「將」，賓語置前莫慌張；動詞後面補語跟，「好完妥埋」全妥當！"
      ],
      "culturalNotes": [
        "「將」字處置句在粵語正式商務公文、廣播公告與法定通告中被奉為最高標準書面句式。在香港港鐵車廂廣播中（如「請將座位讓畀有需要人士」），「將」字句展現了現代公務粵語之嚴謹與優雅。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【公文句式】在正式商務或公務場合表達「請把這份文件交給陳經理」，最得體之粵語處置句係：",
          "options": [
            "請將呢份文件交畀陳經理。 (cing2 zoeng1 ni1 fan6 man4 gin62 gaau1 bei2 can4 ging1 lei5.)",
            "請交呢份文件畀陳經理。) (Context: 粵語書面與口語處置式概論：「將」字處置結構本質 (The 'zoeng)",
            "請將陳經理交畀呢份文件。) (Context: 粵語書面與口語處置式概論：「將」字處置結構本質 (The 'zoeng)",
            "請呢份文件將交畀陳經理。) (Context: 粵語書面與口語處置式概論：「將」字處置結構本質 (The 'zoeng)"
          ],
          "answerIndex": 0,
          "explanation": "標準處置句公式為「主語＋將＋賓語＋動詞補語」（請將呢份文件交畀……）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語法結構】在粵語「將」字句中，動詞謂語後方必須具備之語法要素係：",
          "options": [
            "結果補語、趨向補語或體貌助詞 (Resultative/Directional Complements)",
            "形容詞最高級標記) (Context: 粵語書面與口語處置式概論：「將」字處置結構本質 (The 'zoeng)",
            "疑問代名詞) (Context: 粵語書面與口語處置式概論：「將」字處置結構本質 (The 'zoeng)",
            "否定副詞「唔」) (Context: 粵語書面與口語處置式概論：「將」字處置結構本質 (The 'zoeng)"
          ],
          "answerIndex": 0,
          "explanation": "處置句要求動詞後方必須帶有結果、趨向補語或體態助詞，以交代處置之終結狀態。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【句意解析】港鐵廣播詞「請將座位讓畀有需要嘅乘客」，其句法結構屬於：",
          "options": [
            "「將」字受事處置祈使句 (Disposal Imperative Sentence)",
            "否定比較句) (Context: 粵語書面與口語處置式概論：「將」字處置結構本質 (The 'zoeng)",
            "被動被字句) (Context: 粵語書面與口語處置式概論：「將」字處置結構本質 (The 'zoeng)",
            "可能態疑問句) (Context: 粵語書面與口語處置式概論：「將」字處置結構本質 (The 'zoeng)"
          ],
          "answerIndex": 0,
          "explanation": "此句通過「將＋受事（座位）＋動詞（讓畀）＋對象」構成標準處置祈使句。"
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
    "title": "粵語口語特有代名詞複指處置句：「V + 賓語 + 佢」與「抌/執/擺 + 佢」 (Resumptive 'keoi5' Disposal)",
    "level": "B1",
    "objective": "掌握粵語市井口語最核心之處置句式「動詞 + 賓語 + 佢」與虛指代詞「佢」作為處置終結標記之語法特徵（食咗佢、抌咗佢、搞掂佢）。",
    "presentation": {
      "explanation": "現代標準漢語日常高頻使用「把」字句，而粵語在市井日常口語交流中，極少使用「把」，而係創造出一套獨特之「後置代詞『佢』複指處置式」：\n\n一、口語複指處置式核心公式：\n１．公式一（帶實質名詞賓語）：【動詞 ＋ 體貌/結果補語 ＋ 實質名詞 ＋ 「佢」】。\n- 例如：「食咗個蘋果佢啦！」（把那個蘋果吃了它吧！）。\n- 例如：「洗乾淨對鞋佢」（把那雙鞋洗乾淨！）。\n- 其中末尾之「佢」並非代表具體某個人，而係作為「後置複指虛詞」，強化處置、了結、解決之語法語氣。\n\n２．公式二（賓語省略/直接處置代詞）：【動詞 ＋ 補語 ＋ 「佢」】。\n- 「抌咗佢」（dam2 zo2 keoi5）：把它扔掉、丟棄掉。\n- 「飲咗佢」（jam2 zo2 keoi5）：把它喝掉。\n- 「執掂佢」（zap1 dim6 keoi5）：把它收拾整齊、處理妥當。\n- 「搞掂佢」（gaau2 dim6 keoi5）：把它順利辦妥解決。\n\n二、語氣與語用特徵：\n１．帶有強烈之「決斷、了結、痛快處置」之口氣色彩，在祈使句、催促句與承諾句中極為常見。",
      "examples": [
        {
          "target": "呢杯熱奶茶就快凍喇，你趁熱快啲飲咗佢啦！",
          "reading": "ni1 bui1 jit6 naai5 caa4 zau6 faai3 dung3 laa3, nei5 can3 jit6 faai3 di1 jam2 zo2 keoi5 laa1! [niː˥ puːi˥ jiːt̚˨ naːi˩˧ tsʰaː˨˩ tsɐu˨ faːi˧ tʊŋ˧ laː˧, nei˩˧ tsʰɐn˧ jiːt̚˨ faːi˧ tiː˥ jɐm˧˥ tsɔː˧˥ kʰɵy˩˧ laː˥!] (NEE-BOOY YEET NY-CHAH JAU-FY DOONG LAH, NEI CHUN-YEET FY-DEE YUM-JOR KUY LAH!)",
          "translation": "This cup of hot milk tea is about to get cold; drink it up quickly while it's hot!"
        },
        {
          "target": "呢張舊梳化已經坐爛咗，聽日叫搬運工人嚟抌咗佢啦。",
          "reading": "ni1 zoeng1 gau6 so1 faa1*2 ji5 ging1 co5 laan6 zo2, ting1 jat6 giu3 bun1 wan6 gung1 jan4 lai4 dam2 zo2 keoi5 laa1. [niː˥ tsœːŋ˥ kɐu˨ sɔː˥ faː˧˥ jiː˩˧ kɪŋ˥ tsʰɔː˩˧ laːn˨ tsɔː˧˥, tʰɪŋ˥ jɐt˨ kiːu˧ puːn˥ wɐn˨ kʊŋ˥ jɐn˨˩ lɐi˨˩ tɐm˧˥ tsɔː˧˥ kʰɵy˩˧ laː˥] (NEE-JEUNG GAU SOH-FAH YEE-GING CHOH-LAHN-JOR, TING-YUT GEW BOON-WUN GONG-YUN LY DUM-JOR KUY LAH)",
          "translation": "This old sofa is already broken from sitting; call the movers to throw it away tomorrow."
        },
        {
          "target": "老細交代落嚟嘅呢單緊急公事，我哋今晚一定要合力搞掂佢！",
          "reading": "lou5 sai3 gaau1 doi6 lok6 lai4 ge3 ni1 daan1 gan2 gap1 gung1 si6, ngo5 dei6 gam1 maan5 jat1 ding6 jiu3 hap6 lik6 gaau2 dim6 keoi5! [lou˧˥ sɐi˧ kaːu˥ tɔːi˨ lɔːk̚˨ lɐi˨˩ kɛː˧ niː˥ taːn˥ kɐn˧˥ kɐp̚˥ kʊŋ˥ siː˨, ŋɔː˩˧ tei˨ kɐm˥ maːn˩˧ jɐt̚˥ tɪŋ˨ jiu˧ hɐp̚˨ lɪk̚˨ kaːu˧˥ tiːm˨ kʰɵy˩˧!] (LOU-SY GAU-DOY LOK-LY GEH NEE-DAHN GUN-GUP GONG-SEE, NGOH-DAY GUM-MAHN YUT-DING YEW HUP-LIK GAU-DEEM-KUY!)",
          "translation": "This urgent task assigned by the boss, we must definitely cooperate to get it done tonight!"
        }
      ],
      "mnemonics": [
        "【口語複指佢】日常廣東唔用把，動詞後尾加個「佢」；飲咗佢來抌咗佢，搞掂佢字最俐落！"
      ],
      "culturalNotes": [
        "「動詞＋賓語＋佢」係廣州話最神妙之語法構詞之一。語言學家指出，代詞「佢」在句末虛化為處置標記，展現出嶺南人乾脆俐落、辦事講求速戰速決之務實性格。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【口語處置】在粵語日常生活中欲催促對方「把這碗湯喝了它」，最地道之口語說法係：",
          "options": [
            "快啲飲咗碗湯佢！ (faai3 di1 jam2 zo2 wun2 tong1 keoi5!)",
            "快啲把碗湯喝！) (Context: 粵語口語特有代名詞複指處置句：「V + 賓語 + 佢」與「抌/執/擺 )",
            "快啲飲碗湯把！) (Context: 粵語口語特有代名詞複指處置句：「V + 賓語 + 佢」與「抌/執/擺 )",
            "快啲將碗湯喝！) (Context: 粵語口語特有代名詞複指處置句：「V + 賓語 + 佢」與「抌/執/擺 )"
          ],
          "answerIndex": 0,
          "explanation": "粵語口語處置句典型結構為「動詞＋賓語＋佢」（飲咗碗湯佢）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【動作識別】當看見桌上有過期壞掉之食物，媽媽吩咐孩子「把它扔掉」，口語常講：",
          "options": [
            "抌咗佢！ (dam2 zo2 keoi5!)",
            "食咗佢！) (Context: 粵語口語特有代名詞複指處置句：「V + 賓語 + 佢」與「抌/執/擺 )",
            "買咗佢！) (Context: 粵語口語特有代名詞複指處置句：「V + 賓語 + 佢」與「抌/執/擺 )",
            "睇咗佢！) (Context: 粵語口語特有代名詞複指處置句：「V + 賓語 + 佢」與「抌/執/擺 )"
          ],
          "answerIndex": 0,
          "explanation": "「抌」（dam2）在粵語中表示扔掉、丟棄。「抌咗佢」即把它扔掉。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法功能】在粵語短語「搞掂佢」（gaau2 dim6 keoi5）中，字尾「佢」之主要語法功能係：",
          "options": [
            "作為後置虛指處置代詞，強化完成處置之語氣 (Resumptive Disposal Marker)",
            "專門特指某一位男性長輩) (Context: 粵語口語特有代名詞複指處置句：「V + 賓語 + 佢」與「抌/執/擺 )",
            "表示疑問語氣助詞) (Context: 粵語口語特有代名詞複指處置句：「V + 賓語 + 佢」與「抌/執/擺 )",
            "表示否定副詞) (Context: 粵語口語特有代名詞複指處置句：「V + 賓語 + 佢」與「抌/執/擺 )"
          ],
          "answerIndex": 0,
          "explanation": "「佢」在處置短語中虛化為處置了結之代詞標記。"
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
    "title": "處置式之後接結果補語與趨向動詞：「將……擺喺/放喺/交畀/帶返」 (Resultative & Directional Disposals)",
    "level": "B1",
    "objective": "掌握粵語處置句中空間位移（擺喺/放喺）、受事轉移（交畀/遞畀）與原位回歸（帶返/攞返）之複合補語搭配規則。",
    "presentation": {
      "explanation": "處置式之核心在於改變物體之物理位置、領屬關係或空間歸屬，粵語中通過豐富之結果與趨向介詞補語體系予以精確表達：\n\n一、三大核心空間與歸屬處置補語矩陣：\n１．空間位置轉移補語：【「將」 ＋ 賓語 ＋ 「擺喺 / 放喺」 ＋ 處所名詞】。\n- 「擺喺」（baai2 hai2）與「放喺」（fong3 hai2）：將物品安放於某處。\n- 例如：「將啲書本擺喺書架上面」（把書本放在書架上）。\n２．領屬對象轉移補語：【「將」 ＋ 賓語 ＋ 「交畀 / 遞畀 / 送畀」 ＋ 接受人】。\n- 「交畀」（gaau1 bei2）：將物件交付給某人。\n- 「遞畀」（dai6 bei2）：將物件親手遞傳給某人。\n- 「送畀」（sung3 bei2）：將物件餽贈給某人。\n３．原位回歸與帶回補語：【「將」 ＋ 賓語 ＋ 「帶返 / 攞返 / 寄返」 ＋ 處所/原主】。\n- 「帶返」（daai3 faan1）：將物品順利帶回原地。\n- 「攞返」（lo2 faan1）：將物品重新取回。",
      "examples": [
        {
          "target": "秘書將印好嘅十幾份會議議程整齊咁擺喺會議室張大長枱上面。",
          "reading": "bei3 syu1 zoeng1 jan3 hou2 ge3 sap6 gei2 fan6 wui6 ji5 ji5 cing4 zing2 cai4 gam2 baai2 hai2 wui6 ji5 sat1 zoeng1 daai6 coeng4 toi4*2 soeng6 min6. [pei˧ syː˥ tsœːŋ˥ jɐn˧ hou˧˥ kɛː˧ sɐp̚˨ kei˧˥ fɐn˨ wuːi˨ jiː˩˧ jiː˩˧ tsʰɪŋ˨˩ tsɪŋ˧˥ tsʰɐi˨˩ kɐm˧˥ paːi˧˥ hɐi˩˧ wuːi˨ jiː˩˧ sɐt̚˥ tsœːŋ˥ taːi˨ tsʰœːŋ˨˩ tʰɔːi˧˥ sœːŋ˨ miːn˨] (BAY-SYU JEUNG YUN-HOH GEH SUP-GAY FUN WUI-YEE YEE-CHING JING-CHY GUM BAAI HY WUI-YEE-SUT JEUNG DY-CHEUNG-TOY SEUNG-MEEN)",
          "translation": "The secretary neatly placed the ten-plus printed copies of the meeting agenda onto the large conference table in the meeting room."
        },
        {
          "target": "請你離開辦公室之前，記得將部手提電腦同工作證帶返屋企。",
          "reading": "cing2 nei5 lei4 hoi1 baan6 gung1 sat1 zi1 cin4, gei3 dak1 zoeng1 bou6 sau2 tai4 din6 nou5 tung4 gung1 zok3 zing3 daai3 faan1 uk1 kei2. [tsʰɪŋ˧˥ nei˩˧ lei˨˩ hɔːi˥ paːn˨ kʊŋ˥ sɐt̚˥ tsiː˥ tsʰiːn˨˩, kei˧ tɐk̚˥ tsœːŋ˥ pou˨ sɐu˧˥ tʰɐi˨˩ tiːn˨ nou˩˧ tʰʊŋ˨˩ kʊŋ˥ tsɔːk̚˧ tsɪŋ˧ taːi˧ faːn˥ ʊk̚˥ kʰei˧˥] (CHING NEI LY-HOI BAHN-GONG-SUT JEE-CHEEN, GAY-DUK JEUNG BOU SAU-TY DEEN-NOU TOONG GONG-JOK-JING DY-FAHN OOK-KAY)",
          "translation": "Before you leave the office, please remember to take the laptop and staff ID card back home."
        },
        {
          "target": "快遞員已經將個包裹親手遞畀陳太，仲叫佢簽收咗添。",
          "reading": "faai3 dai6 jyun4 ji5 ging1 zoeng1 go3 baau1 gwo2 can1 sau2 dai6 bei2 can4 taai3*2, zung6 giu3 keoi5 cim1 sau1 zo2 tim1. [faːi˧ tɐi˨ jyːn˨˩ jiː˩˧ kɪŋ˥ tsœːŋ˥ kɔː˧ paːu˥ kʷɔː˧˥ tsʰɐn˥ sɐu˧˥ tɐi˨ pei˨ tsʰɐn˨˩ tʰaːi˧˥, tsʊŋ˨ kiːu˧ kʰɵy˩˧ tsʰiːm˥ sɐu˥ tsɔː˧˥ tʰiːm˥] (FY-DY-YUEN YEE-GING JEUNG GOH BAU-GWOR CHUN-SAU DY-BAY CHUN-TY, JOONG GEW KUY CHEEM-SAU-JOR TEEM)",
          "translation": "The courier has already personally handed the parcel over to Mrs. Chan and asked her to sign for it."
        }
      ],
      "mnemonics": [
        "【空間歸屬訣】物品放置「擺喺度」，交付他人「交畀」好；物品歸位「帶返去」，方位趨向分分曉！"
      ],
      "culturalNotes": [
        "粵語中「擺」（baai2）比「放」（fong3）使用頻率更高，極具視覺造型感。而趨向補語「返」（faan1）帶有強烈之「回歸原位、恢復常態」之文化心理，廣泛用於各類生活指令中。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【位置轉移】欲表達「請把這份文件放在我的辦公桌上」，標準粵語處置句係：",
          "options": [
            "請將呢份文件擺喺我張寫字枱上面。 (cing2 zoeng1 ni1 fan6 man4 gin62 baai2 hai2 ngo5 zoeng1 se2 zi6 toi4*2 soeng6 min6.)",
            "請將我張寫字枱擺喺呢份文件。) (Context: 處置式之後接結果補語與趨向動詞：「將……擺喺/放喺/交畀/帶返」 (R)",
            "請擺喺呢份文件我張寫字枱。) (Context: 處置式之後接結果補語與趨向動詞：「將……擺喺/放喺/交畀/帶返」 (R)",
            "請呢份文件擺喺將我張寫字枱。) (Context: 處置式之後接結果補語與趨向動詞：「將……擺喺/放喺/交畀/帶返」 (R)"
          ],
          "answerIndex": 0,
          "explanation": "「將＋賓語（呢份文件）＋動詞補語（擺喺……）」為正確結構。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【對象轉移】快遞員將物品親手送達並轉移給接收者，動詞短語應選用：",
          "options": [
            "遞畀 (dai6 bei2 / Hand over to)",
            "食畀) (Context: 處置式之後接結果補語與趨向動詞：「將……擺喺/放喺/交畀/帶返」 (R)",
            "行畀) (Context: 處置式之後接結果補語與趨向動詞：「將……擺喺/放喺/交畀/帶返」 (R)",
            "睇畀) (Context: 處置式之後接結果補語與趨向動詞：「將……擺喺/放喺/交畀/帶返」 (R)"
          ],
          "answerIndex": 0,
          "explanation": "「遞畀」（dai6 bei2）表示親手遞交、傳遞給某人。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【趨向理解】句子「記得將部手提電腦帶返屋企」中，「帶返」之核心語義為：",
          "options": [
            "把筆記本電腦帶回到家中原處 (Take it back home)",
            "把筆記本電腦丟棄在家中) (Context: 處置式之後接結果補語與趨向動詞：「將……擺喺/放喺/交畀/帶返」 (R)",
            "在家中購買一台新電腦) (Context: 處置式之後接結果補語與趨向動詞：「將……擺喺/放喺/交畀/帶返」 (R)",
            "在家中修理筆記本電腦) (Context: 處置式之後接結果補語與趨向動詞：「將……擺喺/放喺/交畀/帶返」 (R)"
          ],
          "answerIndex": 0,
          "explanation": "補語「返」表示回歸原處，「帶返屋企」即帶回家中。"
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
    "title": "處置動詞之體貌助詞與處置標記連用：「將……整/整爛/整唔見/抌咗」 (Causative & Telic Disposals)",
    "level": "B1",
    "objective": "掌握粵語使役致使動詞「整」在處置句中之獨特用法（整爛、整唔見、整污糟）與體貌標記「埋/走/咗」之極致語義整合。",
    "presentation": {
      "explanation": "在粵語處置句中，致使動詞「整」與各類終結體貌補語（埋、走、咗）構成了極為靈活且表現力強大之使成處置體系：\n\n一、致使動詞「整」之致損與使成處置：\n１．「整」在粵語中作為致使動詞，相當於「弄、搞、使之變成」。\n２．高頻使成/損壞處置矩陣：\n- 「將……整爛」：把某物弄壞、破損。例如「將部電話整爛咗」（把手機弄壞了）。\n- 「將……整唔見」：把某物弄丟、遺失。例如「將條鎖匙整唔見咗」（把鑰匙搞丟了）。\n- 「將……整污糟」：把某物弄髒。例如「將件新衫整污糟」（把新衣服弄髒了）。\n- 「將……整返好」：把損壞之物品修復完好。\n\n二、終結性體貌助詞之語義擴展：\n１．「埋」（包容/完結）：表示將剩餘部分徹底處理完畢或收藏起來。\n- 「將啲剩菜食埋佢」：把剩菜全部吃完。\n- 「將啲機密文件收埋」：把機密文件收藏隱蔽起來。\n２．「走」（移除/離去）：表示通過處置將某對象移除清空。\n- 「將堆垃圾抌走」：把那堆垃圾扔掉運走。\n- 「將架私家車揸走」：把私家車開離現場。",
      "examples": [
        {
          "target": "細佬唔小心將爸爸部新相機整爛咗，依家好驚畀爸爸鬧。",
          "reading": "sai3 lou2 m4 siu2 sam1 zoeng1 baa4 baa1 bou6 san1 soeng2 gei1 zing2 laan6 zo2, ji1 gaa1 hou2 geng1 bei2 baa4 baa1 naau6. [sɐi˧ lou˩˧ m̩˨˩ siu˧˥ sɐm˥ tsœːŋ˥ paː˨˩ paː˥ pou˨ sɐn˥ sœːŋ˧˥ kei˥ tsɪŋ˧˥ laːn˨ tsɔː˧˥, jiː˥ kaː˥ hou˧˥ kɛːŋ˥ pei˨ paː˨˩ paː˥ naːu˨] (SY-LOU M-SIU-SUM JEUNG BAH-BAH BOU SUN-SEUNG-GAY JING-LAHN-JOR, YEE-GAH HOH-GANG BAY BAH-BAH NAU)",
          "translation": "Little brother accidentally broke Dad's new camera; now he is very afraid of being scolded by Dad."
        },
        {
          "target": "我頭先唔知將條門匙整咗去邊，搵咗半個鐘都搵唔到。",
          "reading": "ngo5 tau4 sin1 m4 zi1 zoeng1 tiu4 mun4 si4 zing2 zo2 heoi3 bin1, wan2 zo2 bun3 go3 zung1 dou1 wan2 m4 dou2. [ŋɔː˩˧ tʰɐu˨˩ siːn˥ m̩˨˩ tsiː˥ tsœːŋ˥ tʰiːu˨˩ muːn˨˩ siː˨˩ tsɪŋ˧˥ tsɔː˧˥ hɵy˧ piːn˥, wɐn˧˥ tsɔː˧˥ pun˧ kɔː˧ tsʊŋ˥ tou˥ wɐn˧˥ m̩˨˩ tou˧˥] (NGOH TAU-SEEN M-JEE JEUNG TEW-MOON-SEE JING-JOR HOEY BEEN, WUN-JOR BOON-GOH-JOONG DOH WUN-M-DOU)",
          "translation": "Just now I didn't know where I misplaced the door key; I searched for half an hour and still couldn't find it."
        },
        {
          "target": "今晚啲餸煮得咁好食，大家快啲合力將啲飯菜食埋佢啦！",
          "reading": "gam1 maan5 di1 sung3 zyu2 dak1 gam3 hou2 sik6, daai6 gaa1 faai3 di1 hap6 lik6 zoeng1 di1 faan6 coi3 sik6 maai4 keoi5 laa1! [kɐm˥ maːn˩˧ tiː˥ sʊŋ˧ tsyː˧˥ tɐk̚˥ kɐm˧ hou˧˥ sɪk̚˨, taːi˨ kaː˥ faːi˧ tiː˥ hɐp̚˨ lɪk̚˨ tsœːŋ˥ tiː˥ faːn˨ tsʰɔːi˧ sɪk̚˨ maːi˨˩ kʰɵy˩˧ laː˥!] (GUM-MAHN DEE SOONG JYUE-DUK GUM HOH-SIK, DY-GAH FY-DEE HUP-LIK JEUNG DEE FAHN-CHOY SIK-MY-KUY LAH!)",
          "translation": "Tonight's dishes are cooked so deliciously; everyone quickly cooperate to finish up all the food!"
        }
      ],
      "mnemonics": [
        "【致使體貌訣】弄損搞壞用「整爛」，遺失物件「整唔見」；吃盡收拾用個「埋」，移除垃圾「抌走」掂！"
      ],
      "culturalNotes": [
        "在粵語日常會話中，「整」字係萬能致使動詞（如整飯、整車、整爛、整污糟），搭配體貌補語「埋」（吃光用盡）與「走」（消除離開），展現出極為生動之語言節奏。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【使成動詞】在粵語中描述不小心把鑰匙「弄丟、搞丟了」，最標準之動詞搭配係：",
          "options": [
            "整唔見咗 (zing2 m4 gin3 zo2)",
            "行唔見咗) (Context: 處置動詞之體貌助詞與處置標記連用：「將……整/整爛/整唔見/抌咗」 ()",
            "睇唔見咗) (Context: 處置動詞之體貌助詞與處置標記連用：「將……整/整爛/整唔見/抌咗」 ()",
            "聽唔見咗) (Context: 處置動詞之體貌助詞與處置標記連用：「將……整/整爛/整唔見/抌咗」 ()"
          ],
          "answerIndex": 0,
          "explanation": "「整唔見」（zing2 m4 gin3）係粵語中表達把物品搞丟、遺失之標準說法。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【體貌補語】欲表達「把桌上剩餘之飯菜全部吃完」，動詞短語應使用助詞：",
          "options": [
            "食埋佢 (sik6 maai4 keoi5)",
            "食起佢) (Context: 處置動詞之體貌助詞與處置標記連用：「將……整/整爛/整唔見/抌咗」 ()",
            "食落佢) (Context: 處置動詞之體貌助詞與處置標記連用：「將……整/整爛/整唔見/抌咗」 ()",
            "食過佢) (Context: 處置動詞之體貌助詞與處置標記連用：「將……整/整爛/整唔見/抌咗」 ()"
          ],
          "answerIndex": 0,
          "explanation": "補語「埋」（maai4）表示將剩餘部分徹底做完、了結。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語意理解】句子「將架私家車揸走」中，「揸走」之確切含義為：",
          "options": [
            "開車離開現場 (Drive the car away)",
            "把車停放在原地) (Context: 處置動詞之體貌助詞與處置標記連用：「將……整/整爛/整唔見/抌咗」 ()",
            "在車裡休息睡覺) (Context: 處置動詞之體貌助詞與處置標記連用：「將……整/整爛/整唔見/抌咗」 ()",
            "把車輛徹底拆解) (Context: 處置動詞之體貌助詞與處置標記連用：「將……整/整爛/整唔見/抌咗」 ()"
          ],
          "answerIndex": 0,
          "explanation": "「揸」（zaa1）為開車，「揸走」即開車離開移走。"
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
    "title": "處置句、受事主題化與被動句之三維語義轉換實戰 (Disposal, Topic-Comment, & Passives)",
    "level": "B1",
    "objective": "掌握粵語主動句（SVO）、處置句（將/佢）、受事主題化（Topic-Comment）與被動句（畀字句）之三維靈活轉換與實戰語用技巧。",
    "presentation": {
      "explanation": "在粵語高階語法中，同一個核心事件可以根據說話者之焦點、情感色彩與語境需求，在四種經典句式之間自如轉換：\n\n一、四維核心句式語法矩陣與轉換實例：\n１．基礎主動句（主謂賓 SVO）：陳述客觀動作事實。\n- 例句：「阿強整爛咗部電腦。」\n２．「將」字處置句 / 口語複指處置句：強調主語之主動處置與結果。\n- 例句：「阿強將部電腦整爛咗。」 / 「阿強整爛咗部電腦佢。」\n３．受事主題化句（Topic-Comment）：將受事焦點前置為全句話題。\n- 例句：「部電腦，阿強整爛咗。」（焦點在於交代『電腦』之遭遇現狀）。\n４．「畀」字被動句：強調受害者視角或遭受意外之無奈感。\n- 例句：「部電腦畀阿強整爛咗。」（電腦遭受了損壞）。\n\n二、職場與生活語用語境決策：\n１．強調責任歸屬或操作指示：使用「將」字處置句。\n２．客氣催促或口語交代：使用「動詞 ＋ 賓語 ＋ 佢」。\n３．回報事故結果：使用受事主題化或被動句。",
      "examples": [
        {
          "target": "呢份緊急文件我已經將佢交畀總經理，你唔使再擔心喇。",
          "reading": "ni1 fan6 gan2 gap1 man4 gin62 ngo5 ji5 ging1 zoeng1 keoi5 gaau1 bei2 zung2 ging1 lei5, nei5 m4 sai2 zoi3 daam1 sam1 laa3. [niː˥ fɐn˨ kɐn˧˥ kɐp̚˥ mɐn˨˩ kiːn˧˥ ŋɔː˩˧ jiː˩˧ kɪŋ˥ tsœːŋ˥ kʰɵy˩˧ kaːu˥ pei˨ tsʊŋ˧˥ kɪŋ˥ lei˩˧, nei˩˧ m̩˨˩ sɐi˧˥ tsɔːi˧ taːm˥ sɐm˥ laː˧] (NEE-FUN GUN-GUP MUN-GEEN NGOH YEE-GING JEUNG-KUY GAU-BAY JOONG-GING-LY, NEI M-SY JOY DAHM-SUM LAH)",
          "translation": "As for this urgent document, I have already handed it to the general manager; you don't need to worry anymore."
        },
        {
          "target": "我部全新手機琴日畀細佬整爛咗個螢幕，真係好心痛！",
          "reading": "ngo5 bou6 cyun4 san1 sau2 gei1 kam4 jat6 bei2 sai3 lou2 zing2 laan6 zo2 go3 jing4 mok6, zan1 hai6 hou2 sam1 tung3! [ŋɔː˩˧ pou˨ tsʰyːn˨˩ sɐn˥ sɐu˧˥ kei˥ kʰɐm˨˩ jɐt˨ pei˨ sɐi˧ lou˩˧ tsɪŋ˧˥ laːn˨ tsɔː˧˥ kɔː˧ jɪŋ˨˩ mɔːk̚˨, tsɐn˥ hɐi˨ hou˧˥ sɐm˥ tʰʊŋ˧!] (NGOH BOU CHUEN-SUN SAU-GAY KUM-YUT BAY SY-LOU JING-LAHN-JOR GOH YING-MOK, JUN-HY HOH-SUM-TOONG!)",
          "translation": "The screen of my brand-new mobile phone was broken by my little brother yesterday; it really breaks my heart!"
        },
        {
          "target": "嗰堆過期文件，我哋頭先已經全部抌晒佢喇。",
          "reading": "go2 deoi1 gwo3 kei4 man4 gin62, ngo5 dei6 tau4 sin1 ji5 ging1 cyun4 bou6 dam2 saai3 keoi5 laa3. [kɔː˧˥ tɵy˥ kʷɔː˧ kʰei˨˩ mɐn˨˩ kiːn˧˥, ŋɔː˩˧ tei˨ tʰɐu˨˩ siːn˥ jiː˩˧ kɪŋ˥ tsʰyːn˨˩ pou˨ tɐm˧˥ saːi˧ kʰɵy˩˧ laː˧] (GOH-DEOY GWOR-KEY MUN-GEEN, NGOH-DAY TAU-SEEN YEE-GING CHUEN-BOU DUM-SY-KUY LAH)",
          "translation": "As for that pile of expired documents, we already threw all of them away just now."
        }
      ],
      "mnemonics": [
        "【句式轉換歌】主動SVO陳述事，處置「將」字立焦點；受事放前做話題，遭受不幸「畀」字言！"
      ],
      "culturalNotes": [
        "在粵語人際溝通中，靈活切換處置句與被動句係高情商之體現。例如交代損壞時講「部機畀人整爛咗」（被動）能弱化主觀過錯，而指示操作時用「將份表格填妥」（處置）則彰顯專業高效。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【句式轉換】將主動句「同事借咗我部相機」轉換為強調「我部相機」之受事主題化句，應為：",
          "options": [
            "我部相機，同事借咗。 (ngo5 bou6 soeng2 gei1, tung4 si6 ze3 zo2.)",
            "我部相機借咗同事。) (Context: 處置句、受事主題化與被動句之三維語義轉換實戰 (Disposal, T)",
            "同事我部相機借咗。) (Context: 處置句、受事主題化與被動句之三維語義轉換實戰 (Disposal, T)",
            "借咗我部相機同事。) (Context: 處置句、受事主題化與被動句之三維語義轉換實戰 (Disposal, T)"
          ],
          "answerIndex": 0,
          "explanation": "受事主題化將受事焦點「我部相機」提至句首作為話題。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【被動結構】在粵語中表達「杯子被弟弟打破了」，正確之「畀」字被動句係：",
          "options": [
            "隻杯畀細佬整爛咗。 (zek3 bui1 bei2 sai3 lou2 zing2 laan6 zo2.)",
            "隻杯將細佬整爛咗。) (Context: 處置句、受事主題化與被動句之三維語義轉換實戰 (Disposal, T)",
            "細佬畀隻杯整爛咗。) (Context: 處置句、受事主題化與被動句之三維語義轉換實戰 (Disposal, T)",
            "隻杯過細佬整爛咗。) (Context: 處置句、受事主題化與被動句之三維語義轉換實戰 (Disposal, T)"
          ],
          "answerIndex": 0,
          "explanation": "粵語被動句結構為「受事＋畀＋施事＋動詞補語」（隻杯畀細佬整爛咗）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語用選擇】在向客戶交代工作完成進度時，欲展現最高之專業度與責任感，最推薦之句式係：",
          "options": [
            "我已經將所有資料核對好並寄出咗。 (I have verified and dispatched all data.)",
            "資料畀我寄出咗。) (Context: 處置句、受事主題化與被動句之三維語義轉換實戰 (Disposal, T)",
            "資料寄出咗佢。) (Context: 處置句、受事主題化與被動句之三維語義轉換實戰 (Disposal, T)",
            "唔知邊個寄咗資料。) (Context: 處置句、受事主題化與被動句之三維語義轉換實戰 (Disposal, T)"
          ],
          "answerIndex": 0,
          "explanation": "「將」字處置句在商務交流中展現出最高之主動性與嚴謹規範性。"
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
    "title": "粵語被動句標記「畀」之語義本質與核心結構：「受事 + 畀 + 施事 + 動詞補語」 (The Core 'bei2' Passive Voice)",
    "level": "B1",
    "objective": "掌握粵語被動句核心標記「畀」之句式結構「受事主語 + 畀 + 施事者 + 動詞謂語 + 結果補語」與施事者不可省略之語法約束規則。",
    "presentation": {
      "explanation": "粵語中之被動態以介詞「畀」（bei2）為核心標記，其語法機制與現代標準漢語之「被」字句存在重要之結構性差異：\n\n一、「畀」字被動句核心語法公式：\n１．標準句式結構：【受事主語 ＋ 「畀」 ＋ 施事主體 ＋ 動詞謂語 ＋ 結果補語/體貌助詞】。\n- 例如：「我部手機畀細佬整爛咗」（我的手機被弟弟弄壞了）。\n- 例如：「嗰份合約畀老細簽咗字」（那份合同被老闆簽署了）。\n\n二、施事主體「不可懸空」之強制性語法規則：\n１．在普通話中，「被」字後方之施事者可以省略（如「他被打了」）；但在地道粵語口語中，「畀」字後方絕不可直接接動詞（不可說「佢畀打咗」）。\n２．若施事者未知、不明確或不願指明，必須強制補入泛指代詞「人」（jan4），構成「畀人 ＋ 動詞」結構：\n- 例如：「佢尋晚畀人偷咗個銀包」（他昨晚被人偷了錢包）。\n- 例如：「呢張梳化畀人坐爛咗」（這張沙發被人坐壞了）。\n\n三、動詞後接補語之必要性：\n１．動詞謂語後方必須帶有結果補語（如「爛、走、完、親」）或體貌標記（如「咗」），以完整交代被動行為之最終結果與影響。",
      "examples": [
        {
          "target": "我尋日擺喺公司雪櫃嘅午餐飯盒，唔知畀邊個同事食咗。",
          "reading": "ngo5 cam4 jat6 baai2 hai2 gung1 si1 syut3 gwai6 ge3 ng5 caan1 faan6 hap6, m4 zi1 bei2 bin1 go3 tung4 si6 sik6 zo2. [ŋɔː˩˧ tsʰɐm˨˩ jɐt˨ paːi˧˥ hɐi˩˧ kʊŋ˥ siː˥ syːt̚˧ kʷɐi˨ kɛː˧ ŋ̩˩˧ tsʰaːn˥ faːn˨ hɐp̚˨, m̩˨˩ tsiː˥ pei˨ piːn˥ kɔː˧ tʰʊŋ˨˩ siː˨ sɪk̚˨ tsɔː˧˥] (NGOH CHUM-YUT BAAI HY GONG-SEE SUET-GWY GEH NG-CHAAN FAHN-HUP, M-JEE BAY BEEN-GOH TOONG-SEE SIK-JOR)",
          "translation": "The lunch box I placed in the office refrigerator yesterday was eaten by I don't know which colleague."
        },
        {
          "target": "呢篇極具爭議性嘅報導一刊登出嚟，即刻畀好多網民批評。",
          "reading": "ni1 pin1 gik6 geoi6 zang1 ji5 sing3 ge3 bou3 dou6 jat1 hon1 dang1 ceot1 lai4, zik1 hak1 bei2 hou2 do1 mong5 man4 pai1 ping4. [niː˥ pʰiːn˥ kɪk̚˨ kɵy˨ tsɐŋ˥ jiː˩˧ sɪŋ˧ kɛː˧ pou˧ tou˨ jɐt̚˥ hɔːn˥ tɐŋ˥ tsʰɵt̚˥ lɐi˨˩, tsɪk̚˥ hɐk̚˥ pei˨ hou˧˥ tɔː˥ mɔːŋ˩˧ mɐn˨˩ pʰɐi˥ pʰɪŋ˨˩] (NEE-PEEN GIK-GOEY JUNG-YEE-SING GEH BOU-DOH YUT-HON-DUNG CHUT-LY, JIK-HUK BAY HOH-DOH MONG-MUN PY-PING)",
          "translation": "As soon as this highly controversial report was published, it was immediately criticized by many netizens."
        },
        {
          "target": "張大寫字枱畀兩個小朋友畫到污糟晒，媽媽睇到好無奈。",
          "reading": "zoeng1 daai6 se2 zi6 toi4*2 bei2 loeng5 go3 siu2 pang4 jau5 waa2 dak1 wu1 zou1 saai3, maa4 maa1 tai2 dou2 hou2 mou4 noi6. [tsœːŋ˥ taːi˨ sɛː˧˥ tsiː˨ tʰɔːi˧˥ pei˨ lœːŋ˩˧ kɔː˧ siu˧˥ pʰɐŋ˨˩ jɐu˩˧ waː˧˥ tɐk̚˥ wuː˥ tsou˥ saːi˧, maː˨˩ maː˥ tʰɐi˧˥ tou˧˥ hou˧˥ mou4 nɔːi˨] (JEUNG DY SEH-JEE-TOY BAY LEUNG-GOH SIU-PANG-YAU WAH DUK WOO-JOU-SY, MAH-MAH TY-DOU HOH MO-NOY)",
          "translation": "The large desk was drawn on and completely dirtied by the two children; Mother looked at it with great helplessness."
        }
      ],
      "mnemonics": [
        "【畀字被動訣】廣東被動用「畀」字，施事主體不可避；無名施事補個「人」，動詞補語緊跟記！"
      ],
      "culturalNotes": [
        "普通話可以說「錢包被偷了」，但粵語必須說「銀包畀人偷咗」。這一「施事不可缺省」之特徵，展現了粵語語法結構在認知層面上追求「施事主體清晰具體」之深層語言哲學。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【語法正誤】在粵語中表達「手機被摔壞了（未知是誰摔的）」，符合粵語語法規範之句子係：",
          "options": [
            "部手機畀人整爛咗。 (bou6 sau2 gei1 bei2 jan4 zing2 laan6 zo2.)",
            "部手機畀整爛咗。) (Context: 粵語被動句標記「畀」之語義本質與核心結構：「受事 + 畀 + 施事 +)",
            "部手機整爛咗畀人。) (Context: 粵語被動句標記「畀」之語義本質與核心結構：「受事 + 畀 + 施事 +)",
            "部手機被整爛咗。) (Context: 粵語被動句標記「畀」之語義本質與核心結構：「受事 + 畀 + 施事 +)"
          ],
          "answerIndex": 0,
          "explanation": "粵語「畀」字後方不可懸空，施事者未知時必須補入泛指代詞「人」（畀人整爛咗）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【被動結構】在粵語被動句「本書畀陳老師借咗」中，動作之實際發出者（施事者）係：",
          "options": [
            "陳老師 (The Teacher / Agent)",
            "本書 (The Book)",
            "我 (Me)",
            "圖書館 (The Library)"
          ],
          "answerIndex": 0,
          "explanation": "在「受事＋畀＋施事＋動詞」結構中，「畀」後方之「陳老師」為動作施事者。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【特徵對比】相較於現代標準漢語「被」字句，粵語「畀」字句最顯著之句法約束係：",
          "options": [
            "「畀」字後方之施事主體不可省略，泛指時須填補「人」 (Agent cannot be omitted)",
            "「畀」字句不能使用任何結果補語) (Context: 粵語被動句標記「畀」之語義本質與核心結構：「受事 + 畀 + 施事 +)",
            "「畀」字句只能用於祈使語氣) (Context: 粵語被動句標記「畀」之語義本質與核心結構：「受事 + 畀 + 施事 +)",
            "「畀」字句不能含有時間副詞) (Context: 粵語被動句標記「畀」之語義本質與核心結構：「受事 + 畀 + 施事 +)"
          ],
          "answerIndex": 0,
          "explanation": "粵語「畀」字後方施事不可懸空，無定施事時必須補入「人」（如「畀人偷咗」）。"
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
    "title": "「畀人 + V」無定施事被動句與職場/市井高頻遭遇：「畀人呃」、「畀人炒」、「畀人鬧」 (Adverse 'bei2 jan4' Passives)",
    "level": "B1",
    "objective": "掌握粵語市井與職場高頻無定施事被害被動短語（畀人呃、畀人炒、畀人鬧、畀人屈、畀人蝦）之實戰語用語意與語法搭配。",
    "presentation": {
      "explanation": "粵語中之「畀人 ＋ 動詞」結構廣泛用於表達說話者或受事主體遭受意外、挫折、冤屈或不幸之「被害義」語境：\n\n一、職場生活挫折與負面遭遇高頻詞庫：\n１．「畀人炒 / 畀老細炒魷魚」（bei2 jan4 caau2）：被公司解僱、辭退、開除。\n２．「畀人鬧 / 畀老細肺」（bei2 jan4 naau6）：被他人或上司嚴厲責罵、訓斥。\n３．「畀人呃 / 畀人騙」（bei2 jan4 aak1）：被人欺騙、受騙上當（如遭遇電騙）。\n４．「畀人屈」（bei2 jan4 wat1）：被人冤枉、栽贓陷害或無辜背黑鍋。\n５．「畀人蝦」（bei2 jan4 haa1）：被人欺負、霸凌或以強凌弱。\n６．「畀人搶」（bei2 jan4 coeng2）：財物遭人搶劫或強行掠奪。\n\n二、語用情感與口氣特徵：\n１．「畀人」被動句帶有強烈之委屈、倒霉、同情或無奈色彩。\n２．在傾訴、投訴、求助或報案等語境中係最自然流露之口語表達。",
      "examples": [
        {
          "target": "隔壁陳伯琴日收到詐騙電話，唔小心畀人呃咗十幾萬積蓄。",
          "reading": "gaak3 bik1 can4 baak3 kam4 jat6 sau1 dou2 zaa3 pin3 din6 waa6*2, m4 siu2 sam1 bei2 jan4 aak1 zo2 sap6 gei2 maan6 zik1 cuk1. [kaːk̚˧ pɪk̚˥ tsʰɐn˨˩ paːk̚˧ kʰɐm˨˩ jɐt˨ sɐu˥ tou˧˥ tsaː˧ pʰiːn˧ tiːn˨ waː˧˥, m̩˨˩ siu˧˥ sɐm˥ pei˨ jɐn˨˩ aːk̚˥ tsɔː˧˥ sɐp̚˨ kei˧˥ maːn˨ tsɪk̚˥ tsʰʊk̚˥] (GAHK-BIK CHUN-BAHK KUM-YUT SAU-DOU JAH-PEEN DEEN-WAH, M-SIU-SUM BAY-YUN AHK-JOR SUP-GAY-MAHN JIK-CHOOK)",
          "translation": "Neighbor Uncle Chan received a scam call yesterday and accidentally was scowled/swindled out of over one hundred thousand dollars of savings by someone."
        },
        {
          "target": "阿明因為返工經常遲到早退，上個禮拜終於畀老細炒咗魷魚。",
          "reading": "aa3 ming4 jan1 wai6 faan1 gung1 ging1 soeng4 ci4 dou3 zou2 teoi3, soeng6 go3 lai5 baai3 zung1 jyu1 bei2 lou5 sai3 caau2 zo2 jau4 jyu4*2. [aː˧ mɪŋ˨˩ jɐn˥ wɐi˨ faːn˥ kʊŋ˥ kɪŋ˥ sœːŋ˨˩ tsʰiː˨˩ tou˧ tsou˧˥ tʰɵy˧, sœːŋ˨ kɔː˧ lɐi˩˧ paːi˧ tsʊŋ˥ jyː˥ pei˨ lou˧˥ sɐi˧ tsʰaːu˧˥ tsɔː˧˥ jɐu˨˩ jyː˧˥] (AH-MING YUN-WAI FAHN-GONG GING-SEUNG CHEE-DOU JOU-TOEY, SEUNG-GOH LY-BY JOONG-YUE BAY LOU-SY CHAU-JOR YAU-YUE)",
          "translation": "Because Ah Ming frequently came to work late and left early, last week he was finally fired by the boss."
        },
        {
          "target": "明明唔係我做錯事，今次真係無辜畀人屈，真係好唔甘心！",
          "reading": "ming4 ming4 m4 hai6 ngo5 zou6 co3 si6, gam1 ci3 zan1 hai6 mou4 gu1 bei2 jan4 wat1, zan1 hai6 hou2 m4 gam1 sam1! [mɪŋ˨˩ mɪŋ˨˩ m̩˨˩ hɐi˨ ŋɔː˩˧ tsou˨ tsʰɔː˧ siː˨, kɐm˥ tsʰiː˧ tsɐn˥ hɐi˨ mou4 kuː˥ pei˨ jɐn˨˩ wɐt̚˥, tsɐn˥ hɐi˨ hou˧˥ m̩˨˩ kɐm˥ sɐm˥!] (MING-MING M-HY NGOH JOU-CHOH-SEE, GUM-CHEE JUN-HY MO-GOO BAY-YUN WUT, JUN-HY HOH M-GUM-SUM!)",
          "translation": "It clearly wasn't me who made the mistake; this time I was innocently falsely accused by others, I really feel deeply aggrieved!"
        }
      ],
      "mnemonics": [
        "【市井遭遇歌】受騙上當「畀人呃」，解僱失業「畀人炒」；無辜蒙冤「畀人屈」，以強凌弱「畀人蝦」！"
      ],
      "culturalNotes": [
        "「炒魷魚」（被解僱）源於昔日廣東勞工被辭退時卷鋪蓋走人，鋪蓋捲起之形狀極似炒熟蜷曲之魷魚。「畀人屈」中之「屈」（冤枉）更係嶺南廣府文化中維護自身清白之強烈情感詞。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【語意匹配】在廣東話中描述自己遭受了詐騙分子之欺騙，最地道之口語被動說法係：",
          "options": [
            "我畀人呃咗。 (ngo5 bei2 jan4 aak1 zo2.)",
            "我畀人炒咗。) (Context: 「畀人 + V」無定施事被動句與職場/市井高頻遭遇：「畀人呃」、「畀人)",
            "我畀人屈咗。) (Context: 「畀人 + V」無定施事被動句與職場/市井高頻遭遇：「畀人呃」、「畀人)",
            "我畀人蝦咗。) (Context: 「畀人 + V」無定施事被動句與職場/市井高頻遭遇：「畀人呃」、「畀人)"
          ],
          "answerIndex": 0,
          "explanation": "「呃」（aak1）為欺騙，「畀人呃咗」表示被人欺騙上當。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【職場俚語】在香港職場中，若某員工不幸遭到公司開除解僱，其口語被動表達為：",
          "options": [
            "畀老細炒魷魚 (Fired by the boss)",
            "畀老細請食飯) (Context: 「畀人 + V」無定施事被動句與職場/市井高頻遭遇：「畀人呃」、「畀人)",
            "畀老細加人工) (Context: 「畀人 + V」無定施事被動句與職場/市井高頻遭遇：「畀人呃」、「畀人)",
            "畀老細升職) (Context: 「畀人 + V」無定施事被動句與職場/市井高頻遭遇：「畀人呃」、「畀人)"
          ],
          "answerIndex": 0,
          "explanation": "「畀……炒魷魚」係粵語中被解僱開除之經典被動表達。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【詞義辨析】句子「佢個人好老實，喺學校成日畀人蝦」中，「畀人蝦」之含義係：",
          "options": [
            "被人欺負、霸凌 (Bullied by others)",
            "被人請吃海鮮大蝦) (Context: 「畀人 + V」無定施事被動句與職場/市井高頻遭遇：「畀人呃」、「畀人)",
            "被人誇獎表揚) (Context: 「畀人 + V」無定施事被動句與職場/市井高頻遭遇：「畀人呃」、「畀人)",
            "被人邀請去旅遊) (Context: 「畀人 + V」無定施事被動句與職場/市井高頻遭遇：「畀人呃」、「畀人)"
          ],
          "answerIndex": 0,
          "explanation": "「蝦」（haa1）在粵語中作動詞時表示欺負、霸凌，「畀人蝦」即被人欺負。"
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
    "title": "被動標記「畀」與使役標記「畀」之歧義消除與多功能語義辨析 (Disambiguating Dative, Causative, & Passives)",
    "level": "B1",
    "objective": "掌握粵語多功能高頻字「畀」在給予動詞（與事/雙賓）、使役動詞（讓/准許）與被動標記（被）三種語義角色間之精確辨析與歧義消除技巧。",
    "presentation": {
      "explanation": "「畀」（bei2）係粵語中使用頻率極高、語法化程度極深之「超級多功能動詞/介詞」，其在不同語境下承載三種截然不同之語法功能：\n\n一、「畀」字三大核心語法角色光譜：\n１．給予動詞（與事 / 雙賓語 / 介詞交付）：表示物質或權益之轉移，相當於「給」。\n- 語法標誌：後接【接收人 ＋ 物件】或【動詞 ＋ 畀 ＋ 接收人】。\n- 例句：「爸爸畀咗五百蚊我做零用錢」（爸爸給了我五百元當零用錢）。\n- 例句：「請將份報告遞畀經理」（請把報告遞給經理）。\n\n２．使役動詞（使令 / 准許 / 容許）：表示允許、促成某人做某事，相當於「讓、准許」。\n- 語法標誌：結構為【主語 ＋ 畀 ＋ 使役對象 ＋ 主動動作】（後接主動施行的動作）。\n- 例句：「媽咪唔畀我夜晚出去玩」（媽媽不讓我晚上出去玩）。\n- 例句：「畀我諗多兩日先決定啦」（讓我多想兩天再決定吧）。\n\n３．被動標記（被害 / 遭受）：表示主語承受某種外力動作與結果，相當於「被」。\n- 語法標誌：結構為【受事主語 ＋ 畀 ＋ 施事者 ＋ 及物動詞 ＋ 結果補語】。\n- 例句：「阿強畀老細鬧咗一餐」（阿強被老闆訓斥了一頓）。\n\n二、歧義消除黃金法則：\n１．觀察動詞後方補語：若動詞後帶有「爛、走、親、咗」等終結性結果補語，且句首主語為承受者，則為被動句。\n２．觀察主語意圖：若句首主語發出許可或阻攔意願（如帶有「唔畀、准唔畀」），則為使役句。",
      "examples": [
        {
          "target": "陳先生每個月出糧都會畀家用太太，從來唔會拖欠。（給予動詞）",
          "reading": "can4 saan1 saang1 mui5 go3 jyut6 ceot1 loeng4 dou1 wui5 bei2 gaa1 jung6 taai3*2, cung4 loi4 m4 wui5 to1 him3. [tsʰɐn˨˩ saːn˥ saːŋ˥ muːi˩˧ kɔː˧ jyːt̚˨ tsʰɵt̚˥ lœːŋ˨˩ tou˥ wui˩˧ pei˨ kaː˥ jʊŋ˨ tʰaːi˧˥, tsʰʊŋ˨˩ lɔːi˨˩ m̩˨˩ wui˩˧ tʰɔː˥ him˧] (CHUN SAHN-SAHNG MOOI-GOH-YUET CHUT-LEUNG DOH WUI BAY GAH-YOONG TY, CHOONG-LOY M-WUI TOH-HEEM)",
          "translation": "Every month when Mr. Chan receives his salary, he gives housekeeping money to his wife, never delaying."
        },
        {
          "target": "醫生建議病人要多啲休息，唔好畀自己太大精神壓力。（使役動詞）",
          "reading": "ji1 sang1 gin3 ji5 beng6 jan4 jiu3 do1 di1 jau1 sik1, m4 hou2 bei2 zi6 gei2 taai3 daai6 zing1 san4 aat3 lik6. [jiː˥ sɐŋ˥ kiːn˧ jiː˩˧ pɪŋ˨ jɐn˨˩ jiu˧ tɔː˥ tiː˥ jɐu˥ sɪk̚˥, m̩˨˩ hou˧˥ pei˨ tsiː˨ kei˧˥ tʰaːi˧ taːi˨ tsɪŋ˥ sɐn˨˩ aːt̚˧ lɪk̚˨] (YEE-SUNG GEEN-YEE BING-YUN YEW DOH-DEE YAU-SIK, M-HOH BAY JEE-GAY TY-DY JING-SUN AHT-LIK)",
          "translation": "The doctor advises the patient to rest more and not let oneself bear too much mental stress."
        },
        {
          "target": "細路仔喺公園玩嗰陣唔小心畀蜜蜂針親，痛到大喊。（被動標記）",
          "reading": "sai3 lou6 zai2 hai2 gung1 jyun4*2 waan2 go2 zan6 m4 siu2 sam1 bei2 mat6 fung1 zam1 can1, tung3 dou3 daai6 haam3. [sɐi˧ lou˨ tsɐi˧˥ hɐi˩˧ kʊŋ˥ jyːn˧˥ waːn˧˥ kɔː˧˥ tsɐn˨ m̩˨˩ siu˧˥ sɐm˥ pei˨ mɐt̚˨ fʊŋ˥ tsɐm˥ tsʰɐn˥, tʰʊŋ˧ tou˧ taːi˨ haːm˧] (SY-LOU-JY HY GONG-YUEN WAAN GOH-JUN M-SIU-SUM BAY MUT-FOONG JUM-CHUN, TOONG-DOU DY-HAHM)",
          "translation": "When the child was playing in the park, he was accidentally stung by a bee and cried loudly from the pain."
        }
      ],
      "mnemonics": [
        "【畀字三用歌】「畀錢畀物」係畀予，「畀我去玩」係使令；「畀人整爛」係被動，前後補語分得清！"
      ],
      "culturalNotes": [
        "語言學家指出，「畀」字之多功能性係漢語南方方言「給予動詞語法化為使役動詞與被動標記」之典型代表。掌握「畀」字之三維用法，係衡量粵語達到中高階水準之關鍵分水嶺。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【功能辨析】句子「媽咪唔畀我睇電視」中，「畀」字所承擔之語法功能係：",
          "options": [
            "使役動詞（表示准許、允許） (Causative / Allow)",
            "被動標記（表示被動承受）) (Context: 被動標記「畀」與使役標記「畀」之歧義消除與多功能語義辨析 (Disam)",
            "給予動詞（表示交付物品）) (Context: 被動標記「畀」與使役標記「畀」之歧義消除與多功能語義辨析 (Disam)",
            "形容詞最高級標記) (Context: 被動標記「畀」與使役標記「畀」之歧義消除與多功能語義辨析 (Disam)"
          ],
          "answerIndex": 0,
          "explanation": "「唔畀我睇」表示不允許我看，此處「畀」為使役動詞。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【功能辨析】句子「我個銀包尋晚畀小偷扒咗」中，「畀」字所承擔之語法功能係：",
          "options": [
            "被動標記（表示遭受被盜） (Passive Marker)",
            "使役動詞（表示准許小偷）) (Context: 被動標記「畀」與使役標記「畀」之歧義消除與多功能語義辨析 (Disam)",
            "給予動詞（表示送給小偷）) (Context: 被動標記「畀」與使役標記「畀」之歧義消除與多功能語義辨析 (Disam)",
            "疑問代名詞) (Context: 被動標記「畀」與使役標記「畀」之歧義消除與多功能語義辨析 (Disam)"
          ],
          "answerIndex": 0,
          "explanation": "「銀包畀小偷扒咗」表示錢包被小偷偷走，此處「畀」為被動標記。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【綜合判斷】下列四個含有「畀」字之粵語句子中，屬於典型「雙賓語給予動詞」用法嘅係：",
          "options": [
            "叔叔畀咗一百蚊利是阿明。 (Uncle gave a 100-dollar red packet to Ah Ming.)",
            "部電腦畀細佬整爛咗。) (Context: 被動標記「畀」與使役標記「畀」之歧義消除與多功能語義辨析 (Disam)",
            "經理唔畀員工請假。) (Context: 被動標記「畀」與使役標記「畀」之歧義消除與多功能語義辨析 (Disam)",
            "佢尋日畀雨淋濕咗。) (Context: 被動標記「畀」與使役標記「畀」之歧義消除與多功能語義辨析 (Disam)"
          ],
          "answerIndex": 0,
          "explanation": "選項A中「畀＋一百蚊（物）＋阿明（人）」為標準給予雙賓語用法。"
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
    "title": "自然界與意外事件被動句：「畀雨淋濕」、「畀太陽曬傷」、「畀車撞倒」 (Environmental & Accidental Passives)",
    "level": "B1",
    "objective": "掌握粵語在自然天氣現象（雨淋、日曬、風吹）與人身意外傷害（滾水淥、紙割、車撞、骨鯁）中「畀 + 自然施事 + V親/濕」之獨特被動表達。",
    "presentation": {
      "explanation": "在粵語中，無生命之自然氣候力量（雨、太陽、風）或物理事故對人體造成損害時，廣泛使用「畀」字被動句，並高度黏著身體損傷補語「親」（can1）：\n\n一、自然氣候與環境被動矩陣：\n１．「畀雨淋到濕晒」（bei2 jyu5 lam4 dou3 sap1 saai3）：被大雨淋得全身濕透。\n２．「畀太陽曬傷 / 曬黑」（bei2 taai3 joeng4 saai3 soeng1）：被烈日曬傷或曬黑。\n３．「畀大風吹走咗」（bei2 daai6 fung1 ceoi1 zau2 zo2）：被狂風吹走。\n\n二、日常生活人身意外傷害被動短語（帶損傷補語「親」）：\n１．「親」（can1）在粵語動詞後作結果補語，專門表示人身遭受意外觸碰、燙傷、割傷或輕微受損：\n- 「畀滾水淥親」（bei2 gwan2 seoi2 luk6 can1）：被開水燙傷。\n- 「畀張紙割親」（bei2 zoeng1 zi2 got3 can1）：被紙張邊緣割傷手指。\n- 「畀魚骨鯁親」（bei2 jyu4 gwat1 gang2 can1）：被魚刺骨頭卡住喉嚨。\n- 「畀蜜蜂針親」（bei2 mat6 fung1 zam1 can1）：被蜜蜂螫傷。\n- 「畀車撞親 / 撞倒」（bei2 ce1 zong6 can1）：被車輛碰撞受傷。",
      "examples": [
        {
          "target": "出門嗰陣突然落起狂風暴雨，我冇帶遮，成身畀雨淋到濕晒。",
          "reading": "ceot1 mun4 go2 zan6 tat1 jin4 lok6 hei2 kwong4 fung1 bou6 jyu5, ngo5 mou5 daai3 ze1, seng4 san1 bei2 jyu5 lam4 dou3 sap1 saai3. [tsʰɵt̚˥ muːn˨˩ kɔː˧˥ tsɐn˨ tʰɐt̚˥ jiːn˨˩ lɔːk̚˨ hei˧˥ kʰwɔːŋ˨˩ fʊŋ˥ pou˨ jyː˩˧, ŋɔː˩˧ mou˩˧ taːi˧ tsɛː˥, sɛːŋ˨˩ sɐn˥ pei˨ jyː˩˧ lɐm˨˩ tou˧ sɐp̚˥ saːi˧] (CHUT-MOON GOH-JUN TUT-YEEN LOK-HEY KWONG-FOONG BOU-YUE, NGOH MO-DY JEH, SENG-SUN BAY YUE LUM DOU SUP-SY)",
          "translation": "When I went out it suddenly started pouring rain and wind; I didn't bring an umbrella and my whole body was completely soaked by the rain."
        },
        {
          "target": "煮滾水嗰陣一定要格外留神，千祈唔好畀滾水淥親手。",
          "reading": "zyu2 gwan2 seoi2 go2 zan6 jat1 ding6 jiu3 gaak3 ngoi6 lau4 san4, cin1 kei4 m4 hou2 bei2 gwan2 seoi2 luk6 can1 sau2. [tsyː˧˥ kʷɐn˧˥ sɵy˧˥ kɔː˧˥ tsɐn˨ jɐt̚˥ tɪŋ˨ jiu˧ kaːk̚˧ ŋɔːi˨ lɐu˨˩ sɐn˨˩, tsʰiːn˥ kʰei˨˩ m̩˨˩ hou˧˥ pei˨ kʷɐn˧˥ sɵy˧˥ lʊk̚˨ tsʰɐn˥ sɐu˧˥] (JYUE GWUN-SOEY GOH-JUN YUT-DING YEW GARK-NGOY LAU-SUN, CHEEN-KEY M-HOH BAY GWUN-SOEY LOOK-CHUN SAU)",
          "translation": "When boiling water one must definitely be exceptionally attentive; by all means do not let your hands be scalded by boiling water."
        },
        {
          "target": "食海鮮魚類嗰陣要慢慢𡁲，小心唔好畀魚骨鯁親喉嚨。",
          "reading": "sik6 hoi2 sin1 jyu4 leoi6 go2 zan6 jiu3 maan6 maan6*2 zeoi3, siu2 sam1 m4 hou2 bei2 jyu4 gwat1 gang2 can1 hau4 lung4. [sɪk̚˨ hɔːi˧˥ siːn˥ jyː˨˩ lɵy˨ kɔː˧˥ tsɐn˨ jiu˧ maːn˨ maːn˧˥ tsɵy˧, siu˧˥ sɐm˥ m̩˨˩ hou˧˥ pei˨ jyː˨˩ kʷɐt̚˥ kɐŋ˧˥ tsʰɐn˥ hɐu˨˩ lʊŋ˨˩] (SIK HOY-SEEN YUE-LOEY GOH-JUN YEW MAHN-MAHN JOEY, SIU-SUM M-HOH BAY YUE-GWUT GUNG-CHUN HAU-LOONG)",
          "translation": "When eating seafood fish dishes one must chew slowly; be careful not to let your throat be choked by fish bones."
        }
      ],
      "mnemonics": [
        "【意外傷害訣】風吹雨淋自然力，身體受損加個「親」；滾水淥親魚骨鯁，小心謹慎保平安！"
      ],
      "culturalNotes": [
        "粵語中之「親」（can1）作為結果補語極具特色，專門用於「跌親」（摔倒）、「撞親」（撞傷）、「凍親」（著涼）、「淥親」（燙傷）等意外身體創傷，體現出對身體感受極為細膩之語言捕捉。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【受傷補語】在粵語中描述不小心被滾燙之開水燙傷了手，正確之動詞補語組合係：",
          "options": [
            "畀滾水淥親手 (bei2 gwan2 seoi2 luk6 can1 sau2)",
            "畀滾水食親手) (Context: 自然界與意外事件被動句：「畀雨淋濕」、「畀太陽曬傷」、「畀車撞倒」 ()",
            "畀滾水行親手) (Context: 自然界與意外事件被動句：「畀雨淋濕」、「畀太陽曬傷」、「畀車撞倒」 ()",
            "畀滾水睇親手) (Context: 自然界與意外事件被動句：「畀雨淋濕」、「畀太陽曬傷」、「畀車撞倒」 ()"
          ],
          "answerIndex": 0,
          "explanation": "「淥」（luk6）表示燙，「淥親」表示被熱水燙傷。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【氣候被動】下雨天出門未帶雨具導致衣服全部濕透，地道粵語表達係：",
          "options": [
            "畀雨淋到濕晒 (bei2 jyu5 lam4 dou3 sap1 saai3)",
            "畀雨曬到乾晒) (Context: 自然界與意外事件被動句：「畀雨淋濕」、「畀太陽曬傷」、「畀車撞倒」 ()",
            "畀雨吹到飛晒) (Context: 自然界與意外事件被動句：「畀雨淋濕」、「畀太陽曬傷」、「畀車撞倒」 ()",
            "畀雨煮到熟晒) (Context: 自然界與意外事件被動句：「畀雨淋濕」、「畀太陽曬傷」、「畀車撞倒」 ()"
          ],
          "answerIndex": 0,
          "explanation": "「畀雨淋到濕晒」表示被雨水淋得全身濕透。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【字義理解】句子「食魚小心畀魚骨鯁親」中，「鯁」（gang2）之具體意思係：",
          "options": [
            "卡在喉嚨中咽不下去 (Choked / Stuck in throat)",
            "把魚骨咬碎) (Context: 自然界與意外事件被動句：「畀雨淋濕」、「畀太陽曬傷」、「畀車撞倒」 ()",
            "把魚骨吐出來) (Context: 自然界與意外事件被動句：「畀雨淋濕」、「畀太陽曬傷」、「畀車撞倒」 ()",
            "把魚骨煮成湯) (Context: 自然界與意外事件被動句：「畀雨淋濕」、「畀太陽曬傷」、「畀車撞倒」 ()"
          ],
          "answerIndex": 0,
          "explanation": "「鯁」（gang2）在粵語中指骨頭或異物卡在食道咽喉。"
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
    "title": "粵語被動句之情感色彩、被害義與中性/正向被動語態實戰 (Valence in Cantonese Passives)",
    "level": "B1",
    "objective": "掌握傳統粵語「被害被動（Adverse Passive）」與現代公務/新聞「中性/正向被動（Formal Passive）」之情感色彩差異與得體語用切換。",
    "presentation": {
      "explanation": "在嶺南語言學中，粵語被動句之感情色彩經歷了從傳統市井口語到現代公務語體之重要演進：\n\n一、傳統粵語被動句之強烈「被害義（Adverse Valence）」：\n１．在純粹之傳統廣州話口語中，被動句絕大多數帶有「遭受不幸、蒙受損害、違背心願」之消極色彩。\n- 例如：「畀人偷咗」、「畀車撞親」、「畀老細鬧」。\n２．在日常表達令人高興之正向事件時，傳統口語極少使用被動句，而傾向使用主動句或受事主題句：\n- 傳統傾向說：「大學收咗我」（大學錄取了我），而極少說「我畀大學收咗」。\n\n二、現代書面與新聞傳媒中之「中性與褒義被動句」：\n１．受現代公文、法律條文及國際語言接觸之影響，現代粵語在正式場合亦接納了中性與正向之「畀」字被動句：\n- 嘉獎與表彰：「陳醫生畀全體同仁推選為本年度最佳傑出員工」（中性/褒義）。\n- 錄取與聘任：「佢成功畀一間跨國大企業錄取為高級顧問」。\n- 公共決策：「呢項新法案已經畀立法會正式通過」。\n\n三、語用語境切換決策：\n１．市井日常閒聊：表達喜事宜用主動句（「老細讚我呀！」）；表達不幸用被動句（「畀老細鬧」）。\n２．正式公務會議與新聞播報：可規範使用中性「畀」字被動句陳述客觀事實。",
      "examples": [
        {
          "target": "經過全體員工投票，張經理畀大家選為年度最優秀管理人員。（正向公務被動）",
          "reading": "ging1 gwo3 cyun4 tai2 gung1 jan4 tau4 piu3, zoeng1 ging1 lei5 bei2 daai6 gaa1 syun2 wai4 nin4 dou6 zeoi3 jau1 sau3 gun2 lei5 jan4 jyun4. [kɪŋ˥ kʷɔː˧ tsʰyːn˨˩ tʰɐi˧˥ kʊŋ˥ jɐn˨˩ tʰɐu˨˩ pʰiːu˧, tsœːŋ˥ kɪŋ˥ lei˩˧ pei˨ taːi˨ kaː˥ syːn˧˥ wɐi˨˩ niːn˨˩ tou˨ tsɵy˧ jɐu˥ sɐu˧ kuːn˧˥ lei˩˧ jɐn˨˩ jyːn˨˩] (GING-GWOR CHUEN-TY GONG-YUN TAU-PEW, JEUNG GING-LY BAY DY-GAH SUEN WAI NEEN-DOU JEOY YAU-SAU GOON-LY YUN-YUEN)",
          "translation": "After voting by all employees, Manager Cheung was elected by everyone as the most outstanding managerial personnel of the year."
        },
        {
          "target": "阿強今日好開心，因為佢遞交嘅創業企劃書畀投資者選中咗。（正向被動）",
          "reading": "aa3 koeng4 gam1 jat6 hou2 hoi1 sam1, jan1 wai6 keoi5 dai6 gaau1 ge3 cong3 jip6 kei5 waak6 syu1 bei2 tau4 zi1 ze2 syun2 zung3 zo2. [aː˧ kʰœːŋ˨˩ kɐm˥ jɐt˨ hou˧˥ hɔːi˥ sɐm˥, jɐn˥ wɐi˨ kʰɵy˩˧ tɐi˨ kaːu˥ kɛː˧ tsʰɔːŋ˧ jiːp̚˨ kʰei˩˧ waːk̚˨ syː˥ pei˨ tʰɐu˨˩ tsiː˥ tsɛː˧˥ syːn˧˥ tsʊŋ˧ tsɔː˧˥] (AH-KEUNG GUM-YUT HOH HOI-SUM, YUN-WAI KUY DY-GAU GEH CHONG-YIP KEY-WAHK-SYU BAY TAU-JEE-JEH SUEN-JOONG-JOR)",
          "translation": "Ah Keung is very happy today because the startup proposal he submitted was selected by investors."
        },
        {
          "target": "日常傾偈如果遇到喜事，我哋通常直接講「老細升咗我職」會顯得更加自然。（口語主動句）",
          "reading": "jat6 seung4 king1 gai2 jyu4 gwo2 jyu6 dou2 hei2 si6, ngo5 dei6 tung1 soeng4 zik6 zip3 gong2 'lou5 sai3 sing1 zo2 ngo5 zik1' wui5 hin2 dak1 gang3 gaa1 zi6 jin4. [jɐt˨ sœːŋ˨˩ kʰɪŋ˥ kɐi˧˥ jyː˨˩ kʷɔː˧˥ jyː˨ tou˧˥ hei˧˥ siː˨, ŋɔː˩˧ tei˨ tʰʊŋ˥ sœːŋ˨˩ tsɪk̚˨ tsiːp̚˧ kɔːŋ˧˥ 'lou˧˥ sɐi˧ sɪŋ˥ tsɔː˧˥ ŋɔː˩˧ tsɪk̚˥' wui˩˧ hin˩˧ tɐk̚˥ kɐŋ˧ kaː˥ tsiː˨ jiːn˨˩] (YUT-SEUNG KING-GY YUE-GWOR YUE-DOU HEY-SEE, NGOH-DAY TOONG-SEUNG JIK-JIP GONG 'LOU-SY SING-JOR NGOH JIK' WUI HEEN-DUK GUNG-GAH JEE-YEEN)",
          "translation": "In daily chats, if encountering happy events, we usually say directly 'The boss promoted me', which sounds much more natural."
        }
      ],
      "mnemonics": [
        "【被動情感訣】市井被動多不幸，遇難蒙冤「畀」字陳；公文褒獎亦可用，日常報喜主動真！"
      ],
      "culturalNotes": [
        "粵語傳統文化忌諱負面不祥，因此口語中「畀」字句往往帶有防禦與訴苦心理。現代公務語言雖然吸收了中性被動句，但在街坊日常閒聊中，報喜時說「我中咗獎」比說「我畀幸運選中」地道百倍。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【語用得體】在日常生活中向朋友分享「我升職了」之喜訊，最地道自然之口語表達係：",
          "options": [
            "老細升咗我職！ (The boss promoted me! / Active SVO)",
            "我畀老細升職咗。) (Context: 粵語被動句之情感色彩、被害義與中性/正向被動語態實戰 (Valence)",
            "我畀人升咗職。) (Context: 粵語被動句之情感色彩、被害義與中性/正向被動語態實戰 (Valence)",
            "職畀老細升咗我。) (Context: 粵語被動句之情感色彩、被害義與中性/正向被動語態實戰 (Valence)"
          ],
          "answerIndex": 0,
          "explanation": "粵語口語表達正向喜事時，首選主動句「老細升咗我職」，避免生硬被動態。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【公文語體】在正式公司公告中表彰某位傑出員工，規範之現代公務被動句係：",
          "options": [
            "李經理畀全體同仁推選為本年度模範員工。 (Manager Li was elected by all colleagues...)",
            "李經理畀全體同仁整爛咗。) (Context: 粵語被動句之情感色彩、被害義與中性/正向被動語態實戰 (Valence)",
            "全體同仁畀李經理推選咗。) (Context: 粵語被動句之情感色彩、被害義與中性/正向被動語態實戰 (Valence)",
            "李經理推選咗畀全體同仁。) (Context: 粵語被動句之情感色彩、被害義與中性/正向被動語態實戰 (Valence)"
          ],
          "answerIndex": 0,
          "explanation": "正式公文中可使用「受事＋畀＋施事＋推選為……」表達客觀推選表彰。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語言學常識】傳統純口語粵語中，「畀」字被動句最核心之語義特徵係：",
          "options": [
            "強烈之「被害義」與遭受不幸色彩 (Adverse / Victim Valence)",
            "專門用於表達強烈祝賀) (Context: 粵語被動句之情感色彩、被害義與中性/正向被動語態實戰 (Valence)",
            "只能用於天氣預報) (Context: 粵語被動句之情感色彩、被害義與中性/正向被動語態實戰 (Valence)",
            "只能用於醫學診斷) (Context: 粵語被動句之情感色彩、被害義與中性/正向被動語態實戰 (Valence)"
          ],
          "answerIndex": 0,
          "explanation": "傳統粵語口語被動句主要用於表達遭受損害、挫折、委屈等被害語義。"
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
    "title": "粵語核心結果補語：「V + 掂 / 齊 / 晒 / 錯」 (Core Resultative Complements)",
    "level": "B1",
    "objective": "掌握粵語四大核心結果補語「掂（圓滿辦妥）」、「齊（全員齊全）」、「晒（徹底全盡）」與「錯（失誤偏差）」之精確語義與語法搭配規則。",
    "presentation": {
      "explanation": "結果補語緊接於動詞謂語之後，用以交代該動作所引發之狀態改變、完成度或終結品質。粵語擁有四個極具嶺南特色之核心結果補語：\n\n一、四大核心結果補語語義矩陣：\n１．「掂」（dim6）：表示動作順利辦妥、圓滿解決或妥善搞定。\n- 「搞掂」（gaau2 dim6）：順利辦妥、解決難題。\n- 「執掂」（zap1 dim6）：收拾整齊、處理妥當。\n- 「傾掂」（king1 dim6）：談判成功、商議妥當。\n\n２．「齊」（cai4）：表示人、物或要素全員到齊、準備齊全、無一遺漏。\n- 「到齊」（dou3 cai4）：所有人全部到達。\n- 「買齊」（maai5 cai4）：把所有清單物品全部買全。\n- 「收齊」（sau1 cai4）：把所有款項或表格全部收齊。\n\n３．「晒」（saai3）：表示動作涉及之對象全部耗盡、全體覆蓋或徹底完結（窮盡體）。\n- 「食晒」（sik6 saai3）：全部吃光、一點不剩。\n- 「賣晒」（maai6 saai3）：全部售罄、賣光。\n- 「用晒」（jung6 saai3）：全部用盡、耗光。\n\n４．「錯」（co3）：表示動作執行出現失誤、錯誤或偏離預期。\n- 「寫錯」（se2 co3）：寫錯字或填錯資料。\n- 「講錯」（gong2 co3）：說錯話或口誤。\n- 「行錯路」（haang4 co3 lou6）：走錯方向或迷路。\n\n二、語序必備規則：\n１．結果補語必須緊貼動詞，且置於賓語之前：【動詞 ＋ 結果補語 ＋ 賓語】（如「食晒啲飯」，絕不可說「食啲飯晒」）。",
      "examples": [
        {
          "target": "經過成個禮拜嘅艱苦談判，我哋終於同客戶傾掂咗合約條款。",
          "reading": "ging1 gwo3 seng4 go3 lai5 baai3 ge3 gaan1 fu2 taam4 pun3, ngo5 dei6 zung1 jyu1 tung4 haak3 wu6 king1 dim6 zo2 hap6 joek3 tiu4 fun2. [kɪŋ˥ kʷɔː˧ sɛːŋ˨˩ kɔː˧ lɐi˩˧ paːi˧ kɛː˧ kaːn˥ fuː˧˥ tʰaːm˨˩ pʰuːn˧, ŋɔː˩˧ tei˨ tsʊŋ˥ jyː˥ tʰʊŋ˨˩ haːk̚˧ wuː˨ kʰɪŋ˥ tiːm˨ tsɔː˧˥ hɐp̚˨ jœːk̚˧ tʰiːu˨˩ fuːn˧˥] (GING-GWOR SENG-GOH LY-BY GEH GAHN-FOO TAHM-POON, NGOH-DAY JOONG-YUE TOONG HAHK-WOO KING-DEEM-JOR HUP-YERK TEW-FOON)",
          "translation": "After a whole week of arduous negotiations, we finally successfully settled the contract terms with the client."
        },
        {
          "target": "今晚開會全體董事已經到齊，主席隨即宣佈會議正式開始。",
          "reading": "gam1 maan5 hoi1 wui6*2 cyun4 tai2 dung2 si6 ji5 ging1 dou3 cai4, zyu2 zik6 ceoi4 zik1 syun1 bou3 wui6 ji5 zing3 sik1 hoi1 ci2. [kɐm˥ maːn˩˧ hɔːi˥ wuːi˨ tsʰyːn˨˩ tʰɐi˧˥ tʊŋ˧˥ siː˨ jiː˩˧ kɪŋ˥ tou˧ tsʰɐi˨˩, tsyː˧˥ tsɪk̚˨ tsʰɵy˨˩ tsɪk̚˥ syːn˥ pou˧ wuːi˨ jiː˩˧ tsɪŋ˧ sɪk̚˥ hɔːi˥ tsʰiː˧˥] (GUM-MAHN HOI-WUI CHUEN-TY DOONG-SEE YEE-GING DOU-CHY, JYUE-JIK CHOEY-JIK SUEN-BOU WUI-YEE JING-SIK HOI-CHEE)",
          "translation": "All directors have arrived completely for tonight's meeting; the chairman immediately announced the official opening of the meeting."
        },
        {
          "target": "超級市場入面嘅特價新鮮雞蛋好快就畀街坊買晒喇。",
          "reading": "ciu1 kap1 si5 coeng4 jap6 min6 ge3 dak6 gaa3 san1 sin1 gai1 daan6*2 hou2 faai3 zau6 bei2 gaai1 fong1 maai5 saai3 laa3. [tsʰiːu˥ kʰɐp̚˥ siː˩˧ tsʰœːŋ˨˩ jɐp̚˨ miːn˨ kɛː˧ tɐk̚˨ kaː˧ sɐn˥ siːn˥ kɐi˥ taːn˧˥ hou˧˥ faːi˧ tsɐu˨ pei˨ kaːi˥ fɔːŋ˥ maːi˩˧ saːi˧ laː˧] (CHEW-KUP SEE-CHEUNG YUP-MEEN GEH DUK-GAH SUN-SEEN GAI-DAHN HOH-FY JAU BAY GY-FONG MY-SY LAH)",
          "translation": "The discounted fresh eggs in the supermarket were quickly bought out completely by local residents."
        }
      ],
      "mnemonics": [
        "【四大結果訣】圓滿辦妥就話「掂」，全員無缺用個「齊」；吃光賣淨統統「晒」，出現失誤講句「錯」！"
      ],
      "culturalNotes": [
        "「掂」（dim6）係粵語中最具代表性之吉利口頭禪，如「橫掂都係」、「掂過碌蔗」（順利無比）。而「晒」（saai3）作為窮盡補語，極具嶺南語言之誇張與生動表現力。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【補語匹配】在廣東話中表達「所有任務都已經圓滿辦妥、解決了」，動詞短語應為：",
          "options": [
            "搞掂 (gaau2 dim6)",
            "搞齊) (Context: 粵語核心結果補語：「V + 掂 / 齊 / 晒 / 錯」 (Core )",
            "搞錯) (Context: 粵語核心結果補語：「V + 掂 / 齊 / 晒 / 錯」 (Core )",
            "搞爛) (Context: 粵語核心結果補語：「V + 掂 / 齊 / 晒 / 錯」 (Core )"
          ],
          "answerIndex": 0,
          "explanation": "「搞掂」（gaau2 dim6）表示順利辦妥、圓滿解決。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【窮盡語義】當麵包店所有新鮮出爐之蛋撻全部售罄，店員會向客人解釋：",
          "options": [
            "蛋撻已經賣晒喇。 (Egg tarts are completely sold out.)",
            "蛋撻已經賣齊喇。) (Context: 粵語核心結果補語：「V + 掂 / 齊 / 晒 / 錯」 (Core )",
            "蛋撻已經賣錯喇。) (Context: 粵語核心結果補語：「V + 掂 / 齊 / 晒 / 錯」 (Core )",
            "蛋撻已經賣掂喇。) (Context: 粵語核心結果補語：「V + 掂 / 齊 / 晒 / 錯」 (Core )"
          ],
          "answerIndex": 0,
          "explanation": "「賣晒」（maai6 saai3）表示全部售罄、賣光。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語序規則】下列關於粵語結果補語與賓語位置關係之敘述，正確嘅係：",
          "options": [
            "結果補語必須緊貼動詞，置於賓語之前（如「食晒啲飯」） (Complement precedes object)",
            "結果補語必須放在賓語最後方（如「食啲飯晒」）) (Context: 粵語核心結果補語：「V + 掂 / 齊 / 晒 / 錯」 (Core )",
            "結果補語必須放在句首主語前面) (Context: 粵語核心結果補語：「V + 掂 / 齊 / 晒 / 錯」 (Core )",
            "結果補語不能與及物動詞連用) (Context: 粵語核心結果補語：「V + 掂 / 齊 / 晒 / 錯」 (Core )"
          ],
          "answerIndex": 0,
          "explanation": "粵語語法規範要求結果補語緊隨動詞謂語，置於名詞賓語之前（動＋補＋賓）。"
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
    "title": "身體感受與意外受損結果補語：「V + 親 / 死 / 爛 / 斷」 (Somatic & Traumatic Complements)",
    "level": "B1",
    "objective": "掌握粵語在人體意外受損（親）、極致程度/危殆（死）、物體損壞（爛）與斷裂截斷（斷）之專屬結果補語搭配體系。",
    "presentation": {
      "explanation": "粵語在描寫人身肉體感受、意外創傷與物理結構破壞時，發展出極具生理真實感之專屬結果補語：\n\n一、四大創傷與物理破壞結果補語：\n１．「親」（can1）：專門表示人體遭受意外碰撞、燙傷、受涼、驚嚇或輕度創傷。\n- 「跌親」（tit3 can1）：跌倒摔傷。\n- 「凍親」（dung3 can1）：受涼著涼、著涼感冒。\n- 「嚇親」（haak3 can1）：受到驚嚇。\n- 「撞親」（zong6 can1）：身體被碰撞受傷。\n\n２．「死」（sei2）：\n- 極致生理程度（誇張修辭）：「熱死」（熱得要命）、「笑死」（笑痛肚皮）、「攰死」（累得半死）。\n- 致命或癱瘓物理結果：「砸死」（被重物砸死）、「砸死部車」（壓毀車輛）。\n\n３．「爛」（laan6）：表示物理表面破損、破碎、撕裂或功能損毀。\n- 「整爛」（zing2 laan6）：弄壞損毀。\n- 「咬爛」（ngaau5 laan6）：咬碎咬爛。\n- 「坐爛」（co5 laan6）：坐壞椅子。\n\n４．「斷」（tyun5）：表示線性物體、骨骼或繩索被截斷、折斷或拉斷。\n- 「跌斷手」（tit3 tyun5 sau2）：摔斷手臂骨骼。\n- 「剪斷」（zin2 tyun5）：用剪刀剪斷線路。\n- 「扯斷」（ce2 tyun5）：用力拉斷繩索。",
      "examples": [
        {
          "target": "昨晚天氣突然轉冷，阿爺瞓覺嗰陣唔小心凍親，今朝係咁咳。",
          "reading": "zok3 maan5 tin1 hei3 tat1 jin4 zyun3 laang5, aa3 je4 fan3 gaau3 go2 zan6 m4 siu2 sam1 dung3 can1, gam1 ziu1 hai6 gam2 kat1. [tsɔːk̚˧ maːn˩˧ tʰiːn˥ hei˧ tʰɐt̚˥ jiːn˨˩ tsyn˧ laːŋ˩˧, aː˧ jɛː˨˩ fɐn˧ kaːu˧ kɔː˧˥ tsɐn˨ m̩˨˩ siu˧˥ sɐm˥ tʊŋ˧ tsʰɐn˥, kɐm˥ tsiːu˥ hɐi˨ kɐm˧˥ kʰɐt̚˥] (JOK-MAHN TEEN-HEY TUT-YEEN JUEN-LAHNG, AH-YEH FUN-GAU GOH-JUN M-SIU-SUM DOONG-CHUN, GUM-JIU HY GUM KUT)",
          "translation": "Last night the weather suddenly turned cold; Grandpa accidentally caught a chill while sleeping and kept coughing this morning."
        },
        {
          "target": "運動員喺比賽中唔好彩跌斷咗右腳骨，需要即刻送醫院做手術。",
          "reading": "wan6 dung6 jyun4 hai2 bei2 coi3 zung1 m4 hou2 coi2 tit3 tyun5 zo2 jau6 goek3 gwat1, seoi1 jiu3 zik1 hak1 sung3 ji1 jyun4*2 zou6 sau2 seot6. [wɐn˨ tʊŋ˨ jyːn˨˩ hɐi˩˧ pei˧˥ tsʰɔːi˧ tsʊŋ˥ m̩˨˩ hou˧˥ tsʰɔːi˧˥ tʰiːt̚˧ tʰyːn˩˧ tsɔː˧˥ jɐu˨ kœːk̚˧ kʷɐt̚˥, sɵy˥ jiu˧ tsɪk̚˥ hɐk̚˥ sʊŋ˧ jiː˥ jyːn˧˥ tsou˨ sɐu˧˥ sɵt̚˨] (WUN-DOONG-YUEN HY BAY-CHOY JOONG M-HOH-CHOY TEET-TUEN-JOR YAU-GERK-GWUT, SOEY-YEW JIK-HUK SOONG YEE-YUEN JOU SAU-SUT)",
          "translation": "The athlete unfortunately broke his right leg bone during the competition and needed to be sent to the hospital immediately for surgery."
        },
        {
          "target": "今日天氣高達三十六度，喺戶外行咗十分鐘就真係熱死人喇！",
          "reading": "gam1 jat6 tin1 hei3 gou1 daat6 saam1 sap6 luk6 dou6, hai2 wu6 ngoi6 haang4 zo2 sap6 fan1 zung1 zau6 zan1 hai6 jit6 sei2 jan4 laa3! [kɐm˥ jɐt˨ tʰiːn˥ hei˧ kou˥ taːt̚˨ saːm˥ sɐp̚˨ lʊk̚˨ tou˨, hɐi˩˧ wuː˨ ŋɔːi˨ haːŋ˨˩ tsɔː˧˥ sɐp̚˨ fɐn˥ tsʊŋ˥ tsɐu˨ tsɐn˥ hɐi˨ jiːt̚˨ sei˧˥ jɐn˨˩ laː˧!] (GUM-YUT TEEN-HEY GOU-DAHT SAHM-SUP-LOOK-DOU, HY WOO-NGOY HAHNG-JOR SUP-FUN-JOONG JAU JUN-HY YEET-SAY-YUN LAH!)",
          "translation": "Today's weather reaches up to thirty-six degrees; walking outdoors for just ten minutes is really stifling hot to death!"
        }
      ],
      "mnemonics": [
        "【創傷補語歌】跌親凍親加嚇親，身體受創用個「親」；骨骼折損講「跌斷」，物理破壞「整爛」真！"
      ],
      "culturalNotes": [
        "「親」（can1）在粵語中係極具同理心與身體感受之黏著補語。當他人跌倒時，廣東人第一反應必問「有冇跌親呀？」（有沒有摔傷？），溫情洋溢。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【創傷補語】在廣東話中詢問對方摔倒後「有沒有摔傷、受傷」，最關切之問句係：",
          "options": [
            "你有冇跌親呀？ (Did you get hurt from falling?)",
            "你有冇跌爛呀？) (Context: 身體感受與意外受損結果補語：「V + 親 / 死 / 爛 / 斷」 ()",
            "你有冇跌斷呀？) (Context: 身體感受與意外受損結果補語：「V + 親 / 死 / 爛 / 斷」 ()",
            "你有冇跌死呀？) (Context: 身體感受與意外受損結果補語：「V + 親 / 死 / 爛 / 斷」 ()"
          ],
          "answerIndex": 0,
          "explanation": "「跌親」（tit3 can1）為跌倒受傷之專屬表達，「有冇跌親」為最標準慰問語。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【骨骼損傷】若滑雪時不幸造成手臂骨骼折斷，動詞短語應表達為：",
          "options": [
            "跌斷手 (tit3 tyun5 sau2 / Broke arm bone)",
            "跌爛手) (Context: 身體感受與意外受損結果補語：「V + 親 / 死 / 爛 / 斷」 ()",
            "跌碎手) (Context: 身體感受與意外受損結果補語：「V + 親 / 死 / 爛 / 斷」 ()",
            "跌裂手) (Context: 身體感受與意外受損結果補語：「V + 親 / 死 / 爛 / 斷」 ()"
          ],
          "answerIndex": 0,
          "explanation": "骨骼折斷在粵語中專用結果補語「斷」（跌斷手）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【程度修辭】短語「攰死」（gui6 sei2）在粵語中之實際語義為：",
          "options": [
            "極度疲倦、累得要命 (Extremely exhausted)",
            "已經死亡) (Context: 身體感受與意外受損結果補語：「V + 親 / 死 / 爛 / 斷」 ()",
            "感到非常寒冷) (Context: 身體感受與意外受損結果補語：「V + 親 / 死 / 爛 / 斷」 ()",
            "感到非常憤怒) (Context: 身體感受與意外受損結果補語：「V + 親 / 死 / 爛 / 斷」 ()"
          ],
          "answerIndex": 0,
          "explanation": "「攰死」中「死」為極致程度補語，表示極度疲勞勞累。"
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
    "title": "基礎與複合空間趨向補語：「入嚟 / 出去」、「上嚟 / 落去」、「過嚟 / 過去」 (Directional Complements)",
    "level": "B1",
    "objective": "掌握粵語以說話者為視角基準點之空間趨向補語體系（入嚟/入去、出嚟/出去、上嚟/落去、過嚟/過去）與實體空間位移規律。",
    "presentation": {
      "explanation": "趨向補語緊隨動作動詞之後，用以標註物體移動之空間軌跡與朝向說話者之視角距離：\n\n一、空間視角基準錨點（Deictic Anchor）：\n１．「嚟」（lai4）：朝向說話者所在位置接近移動（接近視角）。\n２．「去」（heoi3）：背離說話者所在位置遠離移動（遠離視角）。\n\n二、四大複合空間位移趨向矩陣：\n１．內外維度：\n- 「入嚟」（jap6 lai4）：由外向內、朝向說話者走進來。\n- 「入去」（jap6 heoi3）：由外向內、背離說話者走進去。\n- 「出嚟」（ceot1 lai4）：由內向外、朝向說話者走出來。\n- 「出去」（ceot1 heoi3）：由內向外、背離說話者走出去。\n\n２．垂直高低維度：\n- 「上嚟」（soeng5 lai4）：由低向高、朝向說話者走上來。\n- 「落去」（lok6 heoi3）：由高向低、背離說話者走下去。\n\n３．水平跨越維度：\n- 「過嚟」（gwo3 lai4）：橫向跨越、朝向說話者走過來。\n- 「過去」（gwo3 heoi3）：橫向跨越、背離說話者走過去。\n\n三、處所名詞嵌入規則：\n１．當動詞帶有具體處所賓語時，處所名詞通常插入複合趨向補語中間：\n- 例如：「行入屋企嚟」（走進家裡來）、「行出門口去」（走出門口去）。",
      "examples": [
        {
          "target": "外面依家落緊大雨，大家快啲行入嚟屋企避雨啦！",
          "reading": "ngoi6 min6 ji1 gaa1 lok6 gan2 daai6 jyu5, daai6 gaa1 faai3 di1 haang4 jap6 lai4 uk1 kei2 bei6 jyu5 laa1! [ŋɔːi˨ miːn˨ jiː˥ kaː˥ lɔːk̚˨ kɐn˧˥ taːi˨ jyː˩˧, taːi˨ kaː˥ faːi˧ tiː˥ haːŋ˨˩ jɐp̚˨ lɐi˨˩ ʊk̚˥ kʰei˧˥ pei˨ jyː˩˧ laː˥!] (NGOY-MEEN YEE-GAH LOK-GUN DY-YUE, DY-GAH FY-DEE HAHNG-YUP-LY OOK-KAY BAY-YUE LAH!)",
          "translation": "It is raining heavily outside right now; everyone quickly walk inside the house to shelter from the rain!"
        },
        {
          "target": "陳生請你等等，經理啱啱行咗出會議室去聽緊個緊要電話。",
          "reading": "can4 saan1 cing2 nei5 dang2 dang2, ging1 lei5 ngaam1 ngaam1 haang4 zo2 ceot1 wui6 ji5 sat1 heoi3 teng1 gan2 go3 gan2 jiu3 din6 waa6*2. [tsʰɐn˨˩ saːn˥ tsʰɪŋ˧˥ nei˩˧ tɐŋ˧˥ tɐŋ˧˥, kɪŋ˥ lei˩˧ ŋaːm˥ ŋaːm˥ haːŋ˨˩ tsɔː˧˥ tsʰɵt̚˥ wuːi˨ jiː˩˧ sɐt̚˥ hɵy˧ tʰɛːŋ˥ kɐn˧˥ kɔː˧ kɐn˧˥ jiu˧ tiːn˨ waː˧˥] (CHUN-SAHN CHING NEI DUNG-DUNG, GING-LY NGAHM-NGAHM HAHNG-JOR-CHUT WUI-YEE-SUT HOEY TENG-GUN GOH GUN-YEW DEEN-WAH)",
          "translation": "Mr. Chan please wait a moment; the manager just walked out of the meeting room to answer an important call."
        },
        {
          "target": "你企喺對面馬路好危險，快啲趁綠燈行過嚟呢邊啦！",
          "reading": "nei5 kei5 hai2 deoi3 min6 maa5 lou6 hou2 ngai4 him2, faai3 di1 can3 luk6 dang1 haang4 gwo3 lai4 ni1 bin1 laa1! [nei˩˧ kʰei˩˧ hɐi˩˧ tɵy˧ miːn˨ maː˩˧ lou˨ hou˧˥ ŋɐi˨˩ hiːm˧˥, faːi˧ tiː˥ tsʰɐn˧ lʊk̚˨ tɐŋ˥ haːŋ˨˩ kʷɔː˧ lɐi˨˩ niː˥ piːn˥ laː˥!] (NEI KEY HY DEOY-MEEN MAH-LOU HOH NGY-HEEM, FY-DEE CHUN LOOK-DUNG HAHNG-GWOR-LY NEE-BEEN LAH!)",
          "translation": "Standing across the street is very dangerous; quickly walk over to this side while the green light is on!"
        }
      ],
      "mnemonics": [
        "【趨向視角訣】向我走來用個「嚟」，離我遠去用個「去」；入嚟出去高低分，過嚟過去方向明！"
      ],
      "culturalNotes": [
        "以說話者為中心之視角參照係漢語趨向補語之靈魂。在香港茶餐廳中，侍應招呼熟客常熱情高呼「行入嚟坐啦！」（進來坐吧！），體現出熱絡之市井人情味。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【空間視角】說話者站在辦公室內部，欲招呼門外之同事「走進辦公室來」，應講：",
          "options": [
            "快啲行入嚟啦！ (haang4 jap6 lai4 / Walk in towards here)",
            "快啲行入去啦！) (Context: 基礎與複合空間趨向補語：「入嚟 / 出去」、「上嚟 / 落去」、「過嚟)",
            "快啲行出去啦！) (Context: 基礎與複合空間趨向補語：「入嚟 / 出去」、「上嚟 / 落去」、「過嚟)",
            "快啲行出嚟啦！) (Context: 基礎與複合空間趨向補語：「入嚟 / 出去」、「上嚟 / 落去」、「過嚟)"
          ],
          "answerIndex": 0,
          "explanation": "由外向內且朝向說話者位置移動，使用趨向補語「入嚟」（jap6 lai4）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【視角轉換】說話者在樓下，看見朋友正從樓下走向頂樓（遠離說話者），應描述為：",
          "options": [
            "佢行咗上去。 (haang4 zo2 soeng5 heoi3 / Walked up away)",
            "佢行咗上嚟。) (Context: 基礎與複合空間趨向補語：「入嚟 / 出去」、「上嚟 / 落去」、「過嚟)",
            "佢行咗落嚟。) (Context: 基礎與複合空間趨向補語：「入嚟 / 出去」、「上嚟 / 落去」、「過嚟)",
            "佢行咗入嚟。) (Context: 基礎與複合空間趨向補語：「入嚟 / 出去」、「上嚟 / 落去」、「過嚟)"
          ],
          "answerIndex": 0,
          "explanation": "由低向高且背離說話者移動，使用趨向補語「上去」（soeng5 heoi3）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【跨越維度】在街道一側向對面之朋友揮手示意「走過來我這邊」，正確之趨向動詞係：",
          "options": [
            "行過嚟 (haang4 gwo3 lai4 / Walk over here)",
            "行過去) (Context: 基礎與複合空間趨向補語：「入嚟 / 出去」、「上嚟 / 落去」、「過嚟)",
            "行落去) (Context: 基礎與複合空間趨向補語：「入嚟 / 出去」、「上嚟 / 落去」、「過嚟)",
            "行入去) (Context: 基礎與複合空間趨向補語：「入嚟 / 出去」、「上嚟 / 落去」、「過嚟)"
          ],
          "answerIndex": 0,
          "explanation": "橫向跨越並朝向說話者走近，使用「過嚟」（gwo3 lai4）。"
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
    "title": "回歸與延續特徵趨向補語：「V + 返 / 返嚟」、「V + 落去 / 起上嚟」 (Aspectual Directionals)",
    "level": "B1",
    "objective": "掌握粵語虛化趨向補語在狀態回歸（返/返嚟）、持續延續（落去）與動作起始/主觀評估（起上嚟）中之高階語法功能。",
    "presentation": {
      "explanation": "在粵語高階語法中，趨向動詞「返」、「落去」與「起上嚟」脫離了單純之物理空間位移，虛化為表達體貌、狀態轉變與心理評估之語法標記：\n\n一、狀態回歸與原物取回：「返」（faan1）與「返嚟」（faan1 lai4）：\n１．表示動作使事物回歸初始狀態、原有位置或恢復常態。\n- 「攞返」（lo2 faan1）：重新取回自己之物品。\n- 「買返」（maai5 faan1）：重新購回丟失或用盡之物品。\n- 「改返好」（goi2 faan1 hou2）：將錯誤修正恢復正確。\n- 「搬返嚟」（bun1 faan1 lai4）：重新搬回原來居住地。\n\n二、動作持續與未來延續：「落去」（lok6 heoi3）：\n１．表示某種動作、狀態或事業自現在起一直延續、堅持至未來。\n- 「做落去」（zou6 lok6 heoi3）：繼續堅持做下去。\n- 「住落去」（zyu6 lok6 heoi3）：繼續在此地長久居住。\n- 「講落去」（gong2 lok6 heoi3）：繼續往下說。\n\n三、動作起始與主觀感知評估：「起上嚟」（hei2 soeng5 lai4）：\n１．動作起始：表示某種情緒或行為突然爆發開始（如「笑起上嚟」突然笑起來）。\n２．條件假設與主觀評估：相當於「一旦……起來 / 看起來」。\n- 「認真起上嚟」（一旦認真起來）。\n- 「睇起上嚟好精神」（看起來神采奕奕）。",
      "examples": [
        {
          "target": "經過工程師連夜搶修，大廈嘅供電系統終於恢復返正常運作。",
          "reading": "ging1 gwo3 gung1 cing4 si1 lin4 je6 coeng2 sau1, daai6 haa6 ge3 gung1 din6 hai6 tung2 zung1 jyu1 fui3 fuk6 faan1 zing3 soeng4 wan6 zok3. [kɪŋ˥ kʷɔː˧ kʊŋ˥ tsʰɪŋ˨˩ siː˥ liːn˨˩ jɛː˨ tsʰœːŋ˧˥ sɐu˥, taːi˨ haː˨ kɛː˧ kʊŋ˥ tiːn˨ hɐi˨ tʰʊŋ˨ tsʊŋ˥ jyː˥ fuːi˧ fʊk̚˨ faːn˥ tsɪŋ˧ sœːŋ˨˩ wɐn˨ tsɔːk̚˧] (GING-GWOR GONG-CHING-SEE LEEN-YEH CHEUNG-SAU, DY-HAH GEH GONG-DEEN HY-TOONG JOONG-YUE FOOI-FOOK-FAHN JING-SEUNG WUN-JOK)",
          "translation": "After emergency repairs overnight by engineers, the building's power supply system finally resumed back to normal operation."
        },
        {
          "target": "就算前路有幾多困難，為咗理想，我哋都會堅持做落去！",
          "reading": "zau6 syun3 cin4 lou6 jau5 gei2 do1 kwan3 naan4, wai6 zo2 lei5 soeng2, ngo5 dei6 dou1 wui5 gin1 ci4 zou6 lok6 heoi3! [tsɐu˨ syːn˧ tsʰiːn˨˩ lou˨ jɐu˩˧ kei˧˥ tɔː˥ kʰwɐn˧ naːn˨˩, wɐi˨ tsɔː˧˥ lei˩˧ sœːŋ˧˥, ŋɔː˩˧ tei˨ tou˥ wui˩˧ kiːn˥ tsʰiː˨˩ tsou˨ lɔːk̚˨ hɵy˧!] (JAU-SUEN CHEEN-LOU YAU GAY-DOH KWUN-NAHN, WAI-JOR LY-SEUNG, NGOH-DAY DOH WUI GEEN-CHEE JOU-LOK-HOEY!)",
          "translation": "Even if there are many difficulties ahead, for the sake of our dreams, we will persevere and keep doing it!"
        },
        {
          "target": "佢份人平日好隨和，但係一旦認真起上嚟，真係好有威嚴。",
          "reading": "keoi5 fan6 jan4 ping4 jat6 hou2 ceoi4 wo4, daan6 hai6 jat1 daan3 jing6 zan1 hei2 soeng5 lai4, zan1 hai6 hou2 jau5 wai1 jim4. [kʰɵy˩˧ fɐn˨ jɐn˨˩ pʰɪŋ˨˩ jɐt˨ hou˧˥ tsʰɵy˨˩ wɔː˨˩, taːn˨ hɐi˨ jɐt̚˥ taːn˧ jɪŋ˨ tsɐn˥ hei˧˥ sœːŋ˩˧ lɐi˨˩, tsɐn˥ hɐi˨ hou˧˥ jɐu˩˧ wɐi˥ jiːm˨˩] (KUY FUN-YUN PING-YUT HOH CHOEY-WOH, DAHN-HY YUT-DAHN YING-JUN HEY-SEUNG-LY, JUN-HY HOH-YAU WY-YEEM)",
          "translation": "He is usually very easygoing, but once he becomes serious, he really possesses great authority."
        }
      ],
      "mnemonics": [
        "【虛化趨向歌】恢復常態加個「返」，堅持未來「做落去」；一旦認真「起上嚟」，語法精妙最地道！"
      ],
      "culturalNotes": [
        "「返」（faan1）係粵語文化中最具治癒感之字眼（如「返工」、「返屋企」、「好返」），隱含著重返平穩常軌之願望。「做落去」則展現了香港人迎難而上之獅子山奮鬥精神。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【狀態回歸】生病發燒數天後，欲表達身體「已經痊癒、恢復健康」，最地道之口語說法係：",
          "options": [
            "我已經好返喇。 (ngo5 ji5 ging1 hou2 faan1 laa3.)",
            "我已經好去喇。) (Context: 回歸與延續特徵趨向補語：「V + 返 / 返嚟」、「V + 落去 / )",
            "我已經好落喇。) (Context: 回歸與延續特徵趨向補語：「V + 返 / 返嚟」、「V + 落去 / )",
            "我已經好上喇。) (Context: 回歸與延續特徵趨向補語：「V + 返 / 返嚟」、「V + 落去 / )"
          ],
          "answerIndex": 0,
          "explanation": "「好返」（hou2 faan1）表示病癒、身體恢復健康。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【動作延續】在會議上鼓勵發言者「請繼續往下講」，地道粵語表達係：",
          "options": [
            "請你繼續講落去。 (cing2 nei5 gai3 zuk6 gong2 lok6 heoi3.)",
            "請你繼續講上去。) (Context: 回歸與延續特徵趨向補語：「V + 返 / 返嚟」、「V + 落去 / )",
            "請你繼續講入嚟。) (Context: 回歸與延續特徵趨向補語：「V + 返 / 返嚟」、「V + 落去 / )",
            "請你繼續講出嚟。) (Context: 回歸與延續特徵趨向補語：「V + 返 / 返嚟」、「V + 落去 / )"
          ],
          "answerIndex": 0,
          "explanation": "「講落去」（gong2 lok6 heoi3）表示繼續往下講述。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語意評估】短語「睇起上嚟好後生」中，「起上嚟」之主要語法功能係：",
          "options": [
            "表示主觀觀察、感知與評估 (Subjective Perception / Evaluation)",
            "表示身體意外受傷) (Context: 回歸與延續特徵趨向補語：「V + 返 / 返嚟」、「V + 落去 / )",
            "表示方位向低處移動) (Context: 回歸與延續特徵趨向補語：「V + 返 / 返嚟」、「V + 落去 / )",
            "表示動作徹底完成) (Context: 回歸與延續特徵趨向補語：「V + 返 / 返嚟」、「V + 落去 / )"
          ],
          "answerIndex": 0,
          "explanation": "「睇起上嚟」表示看起來、在視覺評估上。"
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
    "title": "補語語序重構與賓語位置法則：「動詞 + 補語 + 賓語」 (Complement-Object Word Order)",
    "level": "B1",
    "objective": "掌握粵語補語與各類名詞賓語（實物賓語、處所賓語、數量賓語）之嚴格語序排列規則與病句診斷修復能力。",
    "presentation": {
      "explanation": "粵語中補語與賓語之語序排列具有嚴格之語法幾何結構，與現代標準漢語及其他方言存在鮮明對比：\n\n一、結果補語與實物賓語之絕對語序：\n１．黃金法則一：【動詞 ＋ 結果補語 ＋ 名詞賓語】。\n- 在粵語中，結果補語（晒、掂、完、錯）必須緊貼動詞，絕不可置於賓語之後。\n- 正確範例：「食晒啲飯」（吃光了飯）、「搞掂呢單案」（辦妥這宗案件）。\n- 嚴格禁忌：不可說成「*食啲飯晒」或「*搞呢單案掂」。\n\n二、空間趨向補語與處所賓語之語序：\n１．黃金法則二：【動詞 ＋ 趨向第一成分 ＋ 處所名詞 ＋ 嚟/去】。\n- 當賓語為處所名詞時，處所名詞必須嵌入趨向補語中間。\n- 正確範例：「行入會議室嚟」（走進會議室來）、「帶返屋企去」（帶回家去）。\n\n三、數量賓語之靈活夾置：\n１．帶數量詞賓語時，可靈活置於動補結構之中：\n- 例如：「買返兩本雜誌睇下」（買回兩本雜誌看一看）。\n- 例如：「食多一碗飯」（多吃一碗飯）。\n\n四、綜合語病診斷修復實戰：\n１．病句辨析：「*佢睇呢本書完」（語序顛倒） -> 修復為：「佢睇完呢本書」！",
      "examples": [
        {
          "target": "你一定要喺今晚放工之前，將所有文件校對清楚並交齊畀秘書。",
          "reading": "nei5 jat1 ding6 jiu3 hai2 gam1 maan5 fong3 gung1 zi1 cin4, zoeng1 so2 jau5 man4 gin62 gaau3 deoi3 cing1 co2 bing6 gaau1 cai4 bei2 bei3 syu1. [nei˩˧ jɐt̚˥ tɪŋ˨ jiu˧ hɐi˩˧ kɐm˥ maːn˩˧ fɔːŋ˧ kʊŋ˥ tsiː˥ tsʰiːn˨˩, tsœːŋ˥ sɔː˧˥ jɐu˩˧ mɐn˨˩ kiːn˧˥ kaːu˧ tɵy˧ tsʰɪŋ˥ tsʰɔː˧˥ pɪŋ˨ kaːu˥ tsʰɐi˨˩ pei˨ pei˧ syː˥] (NEI YUT-DING YEW HY GUM-MAHN FONG-GONG JEE-CHEEN, JEUNG SOH-YAU MUN-GEEN GAU-DEOY CHING-CHOH BING GAU-CHY BAY BAY-SYU)",
          "translation": "You must definitely proofread all documents clearly and hand them in completely to the secretary before leaving work tonight."
        },
        {
          "target": "小朋友放學一返到屋企，好快就做晒所有功課同溫好書。",
          "reading": "siu2 pang4 jau5 fong3 hok6 jat1 faan1 dou3 uk1 kei2, hou2 faai3 zau6 zou6 saai3 so2 jau5 gung1 fo3 tung4 wan1 hou2 syu1. [siu˧˥ pʰɐŋ˨˩ jɐu˩˧ fɔːŋ˧ hɔːk̚˨ jɐt̚˥ faːn˥ tou˧ ʊk̚˥ kʰei˧˥, hou˧˥ faːi˧ tsɐu˨ tsou˨ saːi˧ sɔː˧˥ jɐu˩˧ kʊŋ˥ fɔː˧ tʰʊŋ˨˩ wɐn˥ hou˧˥ syː˥] (SIU-PANG-YAU FONG-HOK YUT-FAHN-DOU OOK-KAY, HOH-FY JAU JOU-SY SOH-YAU GONG-FOH TOONG WUN-HOH-SYU)",
          "translation": "As soon as the children returned home from school, they quickly finished all homework and reviewed their books well."
        },
        {
          "target": "我哋下個禮拜打算買返幾張新餐椅擺喺客廳度。",
          "reading": "ngo5 dei6 haa6 go3 lai5 baai3 daa2 syun3 maai5 faan1 gei2 zoeng1 san1 caan1 ji2 baai2 hai2 haak3 teng1 dou6. [ŋɔː˩˧ tei˨ haː˨ kɔː˧ lɐi˩˧ paːi˧ taː˧˥ syːn˧ maːi˩˧ faːn˥ kei˧˥ tsœːŋ˥ sɐn˥ tsʰaːn˥ jiː˧˥ paːi˧˥ hɐi˩˧ haːk̚˧ tʰɛːŋ˥ tou˨] (NGOH-DAY HAH-GOH LY-BY DY-SUEN MY-FAHN GAY-JEUNG SUN-CHAAN-YEE BAAI HY HAHK-TENG DOU)",
          "translation": "Next week we plan to buy a few new dining chairs to place in the living room."
        }
      ],
      "mnemonics": [
        "【語序法則歌】動補在前賓在後，食晒啲飯順溜溜；處所夾在趨向中，行入屋企樂悠悠！"
      ],
      "culturalNotes": [
        "掌握「動詞＋補語＋賓語」之緊湊語序，係克服非母語者「受中介語干擾導致補語後置」之關鍵一步。嚴守此規則能使粵語表達瞬間達到地道母語者之流暢度。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【語病修復】下列四個句子中，符合粵語「動詞 + 結果補語 + 賓語」標準語序之句子係：",
          "options": [
            "我已經做晒所有功課。 (ngo5 ji5 ging1 zou6 saai3 so2 jau5 gung1 fo3.)",
            "我已經做所有功課晒。 (掌握粵語補語與各類名詞賓語（實物賓語、處所賓語、數量賓語）之嚴格語序排列規則與病句診斷修復能力。) (補語語序重構與賓語位置法則：「動詞 + 補語 + 賓語」 (Complement-Object Word Order))",
            "我已經晒做所有功課。 (掌握粵語補語與各類名詞賓語（實物賓語、處所賓語、數量賓語）之嚴格語序排列規則與病句診斷修復能力。) (補語語序重構與賓語位置法則：「動詞 + 補語 + 賓語」 (Complement-Object Word Order))",
            "我所有功課已經做晒晒。 (掌握粵語補語與各類名詞賓語（實物賓語、處所賓語、數量賓語）之嚴格語序排列規則與病句診斷修復能力。) (補語語序重構與賓語位置法則：「動詞 + 補語 + 賓語」 (Complement-Object Word Order))"
          ],
          "answerIndex": 0,
          "explanation": "「做（動）＋晒（補）＋所有功課（賓）」為標準正確語序。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【處所嵌入】欲表達「走進圖書館來」，正確之複合趨向補語與處所嵌入句式係：",
          "options": [
            "行入圖書館嚟 (haang4 jap6 tou4 syu1 gun2 lai4)",
            "行圖書館入嚟 (掌握粵語補語與各類名詞賓語（實物賓語、處所賓語、數量賓語）之嚴格語序排列規則與病句診斷修復能力。) (補語語序重構與賓語位置法則：「動詞 + 補語 + 賓語」 (Complement-Object Word Order))",
            "行入嚟圖書館 (掌握粵語補語與各類名詞賓語（實物賓語、處所賓語、數量賓語）之嚴格語序排列規則與病句診斷修復能力。) (補語語序重構與賓語位置法則：「動詞 + 補語 + 賓語」 (Complement-Object Word Order))",
            "圖書館行入嚟 (掌握粵語補語與各類名詞賓語（實物賓語、處所賓語、數量賓語）之嚴格語序排列規則與病句診斷修復能力。) (補語語序重構與賓語位置法則：「動詞 + 補語 + 賓語」 (Complement-Object Word Order))"
          ],
          "answerIndex": 0,
          "explanation": "處所名詞「圖書館」應夾在趨向補語中間構成「行入圖書館嚟」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法綜合】在粵語會話中表達「吃完這碗雲吞麵」，最純正地道之語序為：",
          "options": [
            "食完呢碗雲吞麵 (sik6 jyun4 ni1 wun2 wan4 tan1 min6)",
            "食呢碗雲吞麵完 (掌握粵語補語與各類名詞賓語（實物賓語、處所賓語、數量賓語）之嚴格語序排列規則與病句診斷修復能力。) (補語語序重構與賓語位置法則：「動詞 + 補語 + 賓語」 (Complement-Object Word Order))",
            "呢碗雲吞麵完食 (掌握粵語補語與各類名詞賓語（實物賓語、處所賓語、數量賓語）之嚴格語序排列規則與病句診斷修復能力。) (補語語序重構與賓語位置法則：「動詞 + 補語 + 賓語」 (Complement-Object Word Order))",
            "完食呢碗雲吞麵 (掌握粵語補語與各類名詞賓語（實物賓語、處所賓語、數量賓語）之嚴格語序排列規則與病句診斷修復能力。) (補語語序重構與賓語位置法則：「動詞 + 補語 + 賓語」 (Complement-Object Word Order))"
          ],
          "answerIndex": 0,
          "explanation": "結果補語「完」必須緊貼動詞「食」，置於數量名詞賓語之前。"
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
    "title": "粵語可能補語基本肯定與否定式：「V + 得 + 補語」與「V + 唔 + 補語」 (Core Potential Complements)",
    "level": "B1",
    "objective": "掌握粵語可能補語中綴標記「得（肯定能夠）」與「唔（否定無法）」之語法公式「動詞 + 得/唔 + 結果/趨向補語」與常用感知動詞搭配。",
    "presentation": {
      "explanation": "可能補語用以表示主客觀條件是否容許某動作達到預期之結果或目標。粵語在可能補語之構造上與普通話存在鮮明差異：\n\n一、肯定式與否定式核心中綴公式：\n１．肯定可能式：【動詞 ＋ 「得」 ＋ 結果/趨向補語】。\n- 表示具備主觀能力或客觀條件，能夠實現該結果。\n- 例如：「睇得見」（看得見）、「聽得明」（聽得懂）、「做得到」（做得到）。\n２．否定可能式：【動詞 ＋ 「唔」 ＋ 結果/趨向補語】。\n- 粵語否定中綴專用「唔」（普通話用『不』），表示無法達成該結果。\n- 例如：「睇唔見」（看不見）、「聽唔明」（聽不懂）、「搵唔到」（找不到）、「做唔到」（做不到）。\n\n二、高頻感知與認知動詞可能補語矩陣：\n１．視聽感知：\n- 「睇得清楚」 vs 「睇唔清楚」（能否看清晰）。\n- 「聽得明」 vs 「聽唔明」（能否聽懂理解）。\n- 「睇得切」 vs 「睇唔切」（時間上能否來得及看完）。\n２．行動實踐：\n- 「搵得到」 vs 「搵唔到」（能否尋獲）。\n- 「買得切」 vs 「買唔切」（能否及時買到）。\n- 「追得上」 vs 「追唔上」（能否跟上步伐）。",
      "examples": [
        {
          "target": "禮堂後面坐得太遠，我睇唔清楚台上投影屏幕上面啲字。",
          "reading": "lai5 tong4 hau6 min6 co5 dak1 taai3 jyun5, ngo5 tai2 m4 cing1 co2 toi4 soeng6 min6 tau4 jing2 ping4 muk6 soeng6 min6 di1 zi6. [lɐi˩˧ tʰɔːŋ˨˩ hɐu˨ miːn˨ tsʰɔː˩˧ tɐk̚˥ tʰaːi˧ jyːn˩˧, ŋɔː˩˧ tʰɐi˧˥ m̩˨˩ tsʰɪŋ˥ tsʰɔː˧˥ tʰɔːi˨˩ sœːŋ˨ miːn˨ tʰɐu˨˩ jɪŋ˧˥ pʰɪŋ˨˩ mʊk̚˨ sœːŋ˨ miːn˨ tiː˥ tsiː˨] (LY-TONG HAU-MEEN CHOH DUK TY YUEN, NGOH TY M-CHING-CHOH TOY-SEUNG-MEEN TAU-YING PING-MOK SEUNG-MEEN DEE JEE)",
          "translation": "Sitting too far back in the auditorium, I cannot see clearly the words on the projection screen on stage."
        },
        {
          "target": "講者發音好標準，就算講得好快，大家依然聽得明佢嘅重點。",
          "reading": "gong2 ze2 faat3 jam1 hou2 biu1 zeon2, zau6 syun3 gong2 dak1 hou2 faai3, daai6 gaa1 ji1 jin4 teng1 dak1 ming4 keoi5 ge3 zung6 dim2. [kɔːŋ˧˥ tsɛː˧˥ faːt̚˧ jɐm˥ hou˧˥ piːu˥ tsɵn˧˥, tsɐu˨ syːn˧ kɔːŋ˧˥ tɐk̚˥ hou˧˥ faːi˧, taːi˨ kaː˥ jiː˥ jiːn˨˩ tʰɛːŋ˥ tɐk̚˥ mɪŋ˨˩ kʰɵy˩˧ kɛː˧ tsʊŋ˨ tiːm˧˥] (GONG-JEH FAHT-YUM HOH BEW-JEON, JAU-SUEN GONG DUK HOH-FY, DY-GAH YEE-YEEN TENG-DUK-MING KUY GEH JOONG-DEEM)",
          "translation": "The speaker's pronunciation is very standard; even if he speaks very quickly, everyone can still understand his key points."
        },
        {
          "target": "我已經喺成間屋搵咗幾次，但係始終都搵唔到條車匙。",
          "reading": "ngo5 ji5 ging1 hai2 seng4 gaan1 uk1 wan2 zo2 gei2 ci3, daan6 hai6 ci2 zung1 dou1 wan2 m4 dou2 tiu4 ce1 si4. [ŋɔː˩˧ jiː˩˧ kɪŋ˥ hɐi˩˧ sɛːŋ˨˩ kaːn˥ ʊk̚˥ wɐn˧˥ tsɔː˧˥ kei˧˥ tsʰiː˧, taːn˨ hɐi˨ tsʰiː˧˥ tsʊŋ˥ tou˥ wɐn˧˥ m̩˨˩ tou˧˥ tʰiːu˨˩ tsʰɛː˥ siː˨˩] (NGOH YEE-GING HY SENG-GAHN OOK WUN-JOR GAY-CHEE, DAHN-HY CHEE-JOONG DOH WUN-M-DOU TEW-CHEH-SEE)",
          "translation": "I have already searched the whole house several times, but still cannot find the car key."
        }
      ],
      "mnemonics": [
        "【可能中綴歌】肯定能夠中綴「得」，否定辦唔到加個「唔」；聽得明來搵唔到，能力條件分得清！"
      ],
      "culturalNotes": [
        "粵語使用「唔」作為可能補語否定中綴（如「食唔晒」、「睇唔明」），直接繼承了古漢語否定副詞之語法痕跡。在日常對話中，清晰運用「得/唔」中綴能精準傳達自身之客觀能力限度。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【否定可能】在廣東話中表達「聽不懂對方所說的話」，最地道之動詞可能補語短語係：",
          "options": [
            "聽唔明 (teng1 m4 ming4 / Cannot understand)",
            "聽得明) (Context: 粵語可能補語基本肯定與否定式：「V + 得 + 補語」與「V + 唔 )",
            "聽唔好) (Context: 粵語可能補語基本肯定與否定式：「V + 得 + 補語」與「V + 唔 )",
            "聽唔晒) (Context: 粵語可能補語基本肯定與否定式：「V + 得 + 補語」與「V + 唔 )"
          ],
          "answerIndex": 0,
          "explanation": "否定可能式使用中綴「唔」，「聽唔明」表示聽不懂。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【肯定可能】欲向對方確認「我看得清楚你寫的字」，肯定式可能補語應講：",
          "options": [
            "我睇得清楚 (ngo5 tai2 dak1 cing1 co2)",
            "我睇唔清楚) (Context: 粵語可能補語基本肯定與否定式：「V + 得 + 補語」與「V + 唔 )",
            "我睇得晒) (Context: 粵語可能補語基本肯定與否定式：「V + 得 + 補語」與「V + 唔 )",
            "我睇唔到) (Context: 粵語可能補語基本肯定與否定式：「V + 得 + 補語」與「V + 唔 )"
          ],
          "answerIndex": 0,
          "explanation": "肯定可能式使用中綴「得」，「睇得清楚」表示能夠看清。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法結構】短語「做唔到」（zou6 m4 dou2）之核心語法性質係：",
          "options": [
            "可能補語否定式 (Negative Potential Complement)",
            "處置式祈使句) (Context: 粵語可能補語基本肯定與否定式：「V + 得 + 補語」與「V + 唔 )",
            "被動態肯定句) (Context: 粵語可能補語基本肯定與否定式：「V + 得 + 補語」與「V + 唔 )",
            "形容詞最高級) (Context: 粵語可能補語基本肯定與否定式：「V + 得 + 補語」與「V + 唔 )"
          ],
          "answerIndex": 0,
          "explanation": "動詞「做」＋否定中綴「唔」＋結果補語「到」構成典型否定可能補語。"
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
    "title": "容量與空間容納可能補語：「V + 得落 / 唔落」與「坐/企/裝/食」 (Capacity Potential Complements)",
    "level": "B1",
    "objective": "掌握粵語在空間容量容納（坐、企、裝、擺）與食慾消化（食、飲）中專屬可能補語「得落（容納得到）」與「唔落（容納不下）」之語義用法。",
    "presentation": {
      "explanation": "「得落」（dak1 lok6）與「唔落」（m4 lok6）係粵語極具特色之容量、空間與生理吞吐可能補語：\n\n一、空間與物理容量容納矩陣：\n１．表示物理空間是否足夠容納特定數量之人或物品：\n- 「坐得落」 vs 「坐唔落」：座位空間能否容納坐下。例如：「架車坐唔坐得落五個人？」（這輛車坐得下五個人嗎？）。\n- 「企得落」 vs 「企唔落」：站立空間能否容納站下。例如：「部升降機太迫，企唔落喇」（電梯太擠，站不下了）。\n- 「裝得落」 vs 「裝唔落」：容器容量能否裝載得下。例如：「個行李箱裝唔落咁多衫」（行李箱裝不下這麼多衣服）。\n- 「擺得落」 vs 「擺唔落」：平面或空間能否擺放得下。例如：「客廳擺得落張大梳化」（客廳擺得下一張大沙發）。\n\n二、生理食慾與消化吞吐矩陣：\n１．表示胃容量、食慾或身體狀況能否繼續進食：\n- 「食得落」 vs 「食唔落」：是否有胃口吃下或胃部能否裝下。例如：「我好飽喇，真係食唔落喇」（我好飽了，真的吃不下了）。\n- 「吞得落」 vs 「吞唔落」：喉嚨食道能否順利吞嚥下。",
      "examples": [
        {
          "target": "呢架七人私家車空間好闊落，後排坐得落三個成年人。",
          "reading": "ni1 gaa3 cat1 jan4 si1 gaa1 ce1 hung1 gaan1 hou2 fut3 lok6, hau6 paai4 co5 dak1 lok6 saam1 go3 sing4 nin4 jan4. [niː˥ kaː˧ tsʰɐt̚˥ jɐn˨˩ siː˥ kaː˥ tsʰɛː˥ hʊŋ˥ kaːn˥ hou˧˥ fuːt̚˧ lɔːk̚˨, hɐu˨ pʰaːi˨˩ tsʰɔː˩˧ tɐk̚˥ lɔːk̚˨ saːm˥ kɔː˧ sɪŋ˨˩ niːn˨˩ jɐn˨˩] (NEE-GAH CHUT-YUN SEE-GAH-CHEH HOONG-GAHN HOH FOOT-LOK, HAU-PY CHOH-DUK-LOK SAHM-GOH SING-NEEN-YUN)",
          "translation": "This seven-seater car has plenty of space; the back row can accommodate three adults sitting."
        },
        {
          "target": "我今日發燒感冒喉嚨好痛，胃口好差，咩都食唔落。",
          "reading": "ngo5 gam1 jat6 faat3 siu1 gam2 mou6 hau4 lung4 hou2 tung3, wai6 hau2 hou2 caa1, me1 dou1 sik6 m4 lok6. [ŋɔː˩˧ kɐm˥ jɐt˨ faːt̚˧ siːu˥ kɐm˧˥ mou˨ hɐu˨˩ lʊŋ˨˩ hou˧˥ tʰʊŋ˧, wɐi˨ hɐu˧˥ hou˧˥ tsʰaː˥, mɛː˥ tou˥ sɪk̚˨ m̩˨˩ lɔːk̚˨] (NGOH GUM-YUT FAHT-SIU GUM-MOU HAU-LOONG HOH-TOONG, WAI-HAU HOH-CHAH, MEH DOH SIK-M-LOK)",
          "translation": "I have a fever, cold, and sore throat today; my appetite is terrible, and I can't stomach eating anything."
        },
        {
          "target": "個手提行李袋太細喇，裝唔落咁多盒香港手信禮盒。",
          "reading": "go3 sau2 tai4 hang4 lei5 doi6*2 taai3 sai3 laa3, zong1 m4 lok6 gam3 do1 hap6 hoeng1 gong2 sau2 seon3 lai5 hap6. [kɔː˧ sɐu˧˥ tʰɐi˨˩ hɐŋ˨˩ lei˩˧ tɔːi˧˥ tʰaːi˧ sɐi˧ laː˧, tsɔːŋ˥ m̩˨˩ lɔːk̚˨ kɐm˧ tɔː˥ hɐp̚˨ hœːŋ˥ kɔːŋ˧˥ sɐu˧˥ sɵn˧ lɐi˩˧ hɐp̚˨] (GOH SAU-TY HAHNG-LEY-DOY TY-SY LAH, JONG-M-LOK GUM-DOH HUP HEUNG-GONG SAU-SEUN LY-HUP)",
          "translation": "The handbag is too small; it cannot fit so many boxes of Hong Kong souvenir gift boxes."
        }
      ],
      "mnemonics": [
        "【容納容量歌】空間容量「裝得落」，人多位少「企唔落」；飽足病痛「食唔落」，吞吐空間掌握確！"
      ],
      "culturalNotes": [
        "「食唔落」（吃不下）在廣府飲食文化中係極高頻之健康體徵反饋。當親友生病時，長輩常問「食唔食得落飯呀？」，體現出嶺南文化中「以食為天、能吃是福」之生活哲學。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【空間容量】升降機內已經站滿了人，欲向外面等待的人表示「站不下了」，地道粵語表達係：",
          "options": [
            "企唔落喇！ (kei5 m4 lok6 laa3 / Cannot fit standing!)",
            "企得落喇！) (Context: 容量與空間容納可能補語：「V + 得落 / 唔落」與「坐/企/裝/食」)",
            "企唔明喇！) (Context: 容量與空間容納可能補語：「V + 得落 / 唔落」與「坐/企/裝/食」)",
            "企唔晒喇！) (Context: 容量與空間容納可能補語：「V + 得落 / 唔落」與「坐/企/裝/食」)"
          ],
          "answerIndex": 0,
          "explanation": "「企唔落」（kei5 m4 lok6）表示站立空間已滿，容納不下更多人站立。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【食慾表達】已經吃得非常飽足、無法再吃下甜品時，應向朋友表示：",
          "options": [
            "我太飽，真係食唔落喇。 (I'm too full, really can't eat more.)",
            "我太飽，真係食得落喇。) (Context: 容量與空間容納可能補語：「V + 得落 / 唔落」與「坐/企/裝/食」)",
            "我太飽，真係食得切喇。) (Context: 容量與空間容納可能補語：「V + 得落 / 唔落」與「坐/企/裝/食」)",
            "我太飽，真係食唔切喇。) (Context: 容量與空間容納可能補語：「V + 得落 / 唔落」與「坐/企/裝/食」)"
          ],
          "answerIndex": 0,
          "explanation": "「食唔落」（sik6 m4 lok6）表示胃部容量已滿或無胃口吃下。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【容器容量】短語「裝得落」（zong1 dak1 lok6）在粵語中之確切語義為：",
          "options": [
            "容器空間充足，能夠容納裝得下 (Can fit / accommodate inside)",
            "容器已經破裂漏水) (Context: 容量與空間容納可能補語：「V + 得落 / 唔落」與「坐/企/裝/食」)",
            "容器外觀非常精美) (Context: 容量與空間容納可能補語：「V + 得落 / 唔落」與「坐/企/裝/食」)",
            "容器重量非常沉重) (Context: 容量與空間容納可能補語：「V + 得落 / 唔落」與「坐/企/裝/食」)"
          ],
          "answerIndex": 0,
          "explanation": "「裝得落」表示容器具備足夠容量裝入物件。"
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
    "title": "物理承受與力量負載可能補語：「V + 得起 / 唔起」與「經受得住」 (Affordability & Endurance)",
    "level": "B1",
    "objective": "掌握粵語在經濟負擔能力（買/租/賠）、心理承受力（受/玩）與尊重評價（睇）中專屬可能補語「得起（承擔得起）」與「唔起（承擔不起）」之深度語義。",
    "presentation": {
      "explanation": "「得起」（dak1 hei2）與「唔起」（m4 hei2）係粵語中表達經濟購買力、心理耐受度與人格評價之核心可能補語：\n\n一、經濟購買與賠償承擔能力：\n１．「買得起」 vs 「買唔起」：經濟實力能否負擔購買某物。例如：「市區樓價太貴，後生仔買唔起」（市區房價太貴，年輕人買不起）。\n２．「租得起」 vs 「租唔起」：能否承擔租金開支。\n３．「賠得起」 vs 「賠唔起」：發生事故時能否承擔經濟賠償責任。例如：「整爛咗古董你賠唔賠得起？」（弄壞了古董你賠得起嗎？）。\n\n二、心理承載與經受耐受度：\n１．「受得起」 vs 「受唔起」：心理或體魄能否經受打擊，或福份能否承受過度厚待。\n２．「玩得起」 vs 「玩唔起」：性格是否豁達大度、輸得起、經得起開玩笑（玩得起），抑或輸打贏要、經不起玩笑（玩唔起）。\n\n三、人際評價與尊重維度：\n１．「睇得起」 vs 「睇唔起」：重視、賞識、看得起某人（睇得起），抑或輕視、鄙視、看不起某人（睇唔起）。例如：「老細睇得起你先交重任畀你」（老闆看得起你才把重任交給你）。",
      "examples": [
        {
          "target": "呢度係全香港最高級嘅地段，普通打工仔根本租唔起呢度嘅寫字樓。",
          "reading": "ni1 dou6 hai6 cyun4 hoeng1 gong2 zeoi3 gou1 kap1 ge3 dei6 dyun6, pou2 tung1 daa2 gung1 zai2 gan1 bun2 zou1 m4 hei2 ni1 dou6 ge3 se2 zi6 lau4. [niː˥ tou˨ hɐi˨ tsʰyːn˨˩ hœːŋ˥ kɔːŋ˧˥ tsɵy˧ kou˥ kʰɐp̚˥ kɛː˧ tei˨ tyːn˨, pʰou˧˥ tʰʊŋ˥ taː˧˥ kʊŋ˥ tsɐi˧˥ kɐn˥ puːn˧˥ tsou˥ m̩˨˩ hei˧˥ niː˥ tou˨ kɛː˧ sɛː˧˥ tsiː˨ lɐu˨˩] (NEE-DOU HY CHUEN HEUNG-GONG JEOY GOU-KUP GEH DAY-DUEN, POU-TOONG DY-GONG-JY GUN-BOON JOU-M-HEY NEE-DOU GEH SEH-JEE-LAU)",
          "translation": "This is the most upscale district in all of Hong Kong; ordinary working people simply cannot afford to rent an office here."
        },
        {
          "target": "大家出嚟聚會開下玩笑啫，你要大方啲，唔好咁容易玩唔起啦。",
          "reading": "daai6 gaa1 ceot1 lai4 zeoi6 wui6 hoi1 haa5 waan2 siu3 ze1, nei5 jiu3 daai6 fong1 di1, m4 hou2 gam3 jung4 ji6 waan2 m4 hei2 laa1. [taːi˨ kaː˥ tsʰɵt̚˥ lɐi˨˩ tsɵy˨ wuːi˨ hɔːi˥ haː˩˧ waːn˧˥ siu˧ tsɛː˥, nei˩˧ jiu˧ taːi˨ fɔːŋ˥ tiː˥, m̩˨˩ hou˧˥ kɐm˧ jʊŋ˨˩ jiː˨ waːn˧˥ m̩˨˩ hei˧˥ laː˥] (DY-GAH CHUT-LY JEOY-WUI HOI-HAH WAAN-SIU JEH, NEI YEW DY-FONG-DEE, M-HOH GUM YOONG-YEE WAAN-M-HEY LAH)",
          "translation": "Everyone comes out to gather and just crack some jokes; you should be more generous and not be so easily unable to take a joke."
        },
        {
          "target": "前輩咁睇得起我，畀咁好嘅機會我發揮，我一定會全力以赴！",
          "reading": "cin4 bui3 gam3 tai2 dak1 hei2 ngo5, bei2 gam3 hou2 ge3 gei1 wui6 ngo5 faat3 fai1, ngo5 jat1 ding6 wui5 cyun4 lik6 ji5 fu6! [tsʰiːn˨˩ puːi˧ kɐm˧ tʰɐi˧˥ tɐk̚˥ hei˧˥ ŋɔː˩˧, pei˨ kɐm˧ hou˧˥ kɛː˧ kei˥ wuːi˨ ŋɔː˩˧ faːt̚˧ fɐi˥, ŋɔː˩˧ jɐt̚˥ tɪŋ˨ wui˩˧ tsʰyːn˨˩ lɪk̚˨ jiː˩˧ fuː˨!] (CHEEN-BOOY GUM TY-DUK-HEY NGOH, BAY GUM HOH GEH GAY-WUI NGOH FAHT-FY, NGOH YUT-DING WUI CHUEN-LIK-YEE-FOO!)",
          "translation": "The seniors think so highly of me and gave me such a good opportunity to perform; I will definitely go all out!"
        }
      ],
      "mnemonics": [
        "【承受負載訣】財力雄厚「買得起」，經得起笑「玩得起」；前輩器重「睇得起」，承擔能力最清晰！"
      ],
      "culturalNotes": [
        "「玩得起」（開得起玩笑、豁達大度）係香港社交圈極受推崇之性格特質。相反，「玩唔起」則帶有小家子氣、輸不起之貶義色彩。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【負擔能力】在香港買房時表達「樓價太高，普通家庭根本負擔不起、買不起」，應講：",
          "options": [
            "普通家庭買唔起 (maai5 m4 hei2 / Cannot afford to buy)",
            "普通家庭買得起) (Context: 物理承受與力量負載可能補語：「V + 得起 / 唔起」與「經受得住」 )",
            "普通家庭買唔落) (Context: 物理承受與力量負載可能補語：「V + 得起 / 唔起」與「經受得住」 )",
            "普通家庭買唔明) (Context: 物理承受與力量負載可能補語：「V + 得起 / 唔起」與「經受得住」 )"
          ],
          "answerIndex": 0,
          "explanation": "「買唔起」（maai5 m4 hei2）表示經濟能力上無法負擔購買。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【社交評價】形容一個人性格豁達、輸得起且經得起朋友開玩笑，廣東話讚揚為：",
          "options": [
            "玩得起 (waan2 dak1 hei2 / Sporting / Can take a joke)",
            "玩唔起) (Context: 物理承受與力量負載可能補語：「V + 得起 / 唔起」與「經受得住」 )",
            "玩唔落) (Context: 物理承受與力量負載可能補語：「V + 得起 / 唔起」與「經受得住」 )",
            "玩唔明) (Context: 物理承受與力量負載可能補語：「V + 得起 / 唔起」與「經受得住」 )"
          ],
          "answerIndex": 0,
          "explanation": "「玩得起」（waan2 dak1 hei2）表示經得起開玩笑、輸得起。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【人際評價】句子「老細好睇得起你」中，「睇得起」之實際含義為：",
          "options": [
            "老闆非常賞識、看重你 (Thinks highly of / Respects you)",
            "老闆看不起你) (Context: 物理承受與力量負載可能補語：「V + 得起 / 唔起」與「經受得住」 )",
            "老闆看不清楚你) (Context: 物理承受與力量負載可能補語：「V + 得起 / 唔起」與「經受得住」 )",
            "老闆監視你) (Context: 物理承受與力量負載可能補語：「V + 得起 / 唔起」與「經受得住」 )"
          ],
          "answerIndex": 0,
          "explanation": "「睇得起」（tai2 dak1 hei2）表示器重、賞識、看得起。"
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
    "title": "勝任與熟練程度可能補語：「V + 得嚟 / 唔嚟」與「做得嚟、應付得嚟」 (Competence Complements)",
    "level": "B1",
    "objective": "掌握粵語在工作業務勝任（做/應付/招呼）與人際投緣相處（傾/玩）中專屬可能補語「得嚟（勝任/投緣）」與「唔嚟（無法應付/不投緣）」之高階語法功能。",
    "presentation": {
      "explanation": "「得嚟」（dak1 lai4）與「唔嚟」（m4 lai4）係粵語中專門用於評估工作勝任能力、負擔承受度以及人際投緣契合度之核心可能補語：\n\n一、工作業務勝任與精力應付矩陣：\n１．「做得嚟」 vs 「做唔嚟」：工作任務在技術、體能或時間上能否勝任搞定。\n- 例句：「呢個項目工作量咁大，你一個人做得嚟唔做得嚟？」（工作量這麼大，你一個人應付得來嗎？）。\n２．「應付得嚟」 vs 「應付唔嚟」：精力、資源能否妥善應對複雜局面。\n３．「招呼得嚟」 vs 「招呼唔嚟」：接待服務人手能否照顧周全。\n\n二、人際投緣與性格相處契合矩陣：\n１．「傾得嚟」 vs 「傾唔嚟」：彼此交談是否投機、合拍、聊得來。\n- 例句：「我同新同事好傾得嚟，大家都好中意攝影」（我和新同事很聊得來，大家都喜愛攝影）。\n２．「玩得嚟」 vs 「玩唔嚟」：彼此性格志趣能否玩到一塊、和睦相處。",
      "examples": [
        {
          "target": "新入職呢份工雖然節奏好快，但我適應咗之後覺得自己完全做得嚟。",
          "reading": "san1 jap6 zik1 ni1 fan6 gung1 seoi1 jin4 zit3 zau3 hou2 faai3, daan6 ngo5 sik1 jing3 zo2 zi1 hau6 gok3 dak1 zi6 gei2 jyun4 cyun4 zou6 dak1 lai4. [sɐn˥ jɐp̚˨ tsɪk̚˥ niː˥ fɐn˨ kʊŋ˥ sɵy˥ jiːn˨˩ tsit̚˧ tsɐu˧ hou˧˥ faːi˧, taːn˨ ŋɔː˩˧ sɪk̚˥ jɪŋ˧ tsɔː˧˥ tsiː˥ hɐu˨ kɔːk̚˧ tɐk̚˥ tsiː˨ kei˧˥ jyːn˨˩ tsʰyːn˨˩ tsou˨ tɐk̚˥ lɐi˨˩] (SUN-YUP-JIK NEE-FUN GONG SOEY-YEEN JEET-JAU HOH-FY, DAHN NGOH SIK-YING-JOR JEE-HAU GOK-DUK JEE-GAY CHUEN-CHUEN JOU-DUK-LY)",
          "translation": "Although the pace of this new job is very fast, after adapting I feel that I can completely manage the work."
        },
        {
          "target": "今日舖頭客人太多，得兩個侍應根本招呼唔嚟咁多位顧客。",
          "reading": "gam1 jat6 pou3 tau4*2 haak3 jan4 taai3 do1, dak1 loeng5 go3 si6 jing3 gan1 bun2 ziu1 fu1 m4 lai4 gam3 do1 wai62 gu3 haak3. [kɐm˥ jɐt˨ pʰou˧ tʰɐu˧˥ haːk̚˧ jɐn˨˩ taːi˧ tɔː˥, tɐk̚˥ lœːŋ˩˧ kɔː˧ siː˨ jɪŋ˧ kɐn˥ puːn˧˥ tsiːu˥ fuː˥ m̩˨˩ lɐi˨˩ kɐm˧ tɔː˥ wɐi˧˥ kuː˧ haːk̚˧] (GUM-YUT POU-TAU HAHK-YUN TY-DOH, DUK LEUNG-GOH SEE-YING GUN-BOON JEW-FOO-M-LY GUM-DOH-WY GOO-HAHK)",
          "translation": "There are too many customers in the shop today; having only two waiters simply cannot cope with serving so many patrons."
        },
        {
          "target": "佢哋兩個人性格好合得嚟，一見面就有講有笑，非常投契。",
          "reading": "keoi5 dei6 loeng5 go3 jan4 sing3 gaak3 hou2 hap6 dak1 lai4, jat1 gin3 min6 zau6 jau5 gong2 jau5 siu3, fei1 soeng4 tau4 kai3. [kʰɵy˩˧ tei˨ lœːŋ˩˧ kɔː˧ jɐn˨˩ sɪŋ˧ kaːk̚˧ hou˧˥ hɐp̚˨ tɐk̚˥ lɐi˨˩, jɐt̚˥ kiːn˧ miːn˨ tsɐu˨ jɐu˩˧ kɔːŋ˧˥ jɐu˩˧ siu˧, fei˥ sœːŋ˨˩ tʰɐu˨˩ kʰɐi˧] (KUY-DAY LEUNG-GOH-YUN SING-GARK HOH HUP-DUK-LY, YUT-GEEN-MEEN JAU YAU-GONG-YAU-SIU, FAY-SEUNG TAU-KAI)",
          "translation": "The two of them have very compatible personalities; as soon as they meet they talk and laugh, hitting it off wonderfully."
        }
      ],
      "mnemonics": [
        "【勝任投緣歌】業務勝任「做得嚟」，人手不足「招呼唔嚟」；志趣相投「傾得嚟」，人際交往最和美！"
      ],
      "culturalNotes": [
        "「傾得嚟」（聊得來）係嶺南人交友擇偶之首要標準。廣東人講求「啱傾啱玩」（談得投機玩得合拍），體現出務實自然、不喜偽飾之人際交往文化。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【人際投緣】形容自己與新朋友「非常聊得來、志趣相投」，最地道之粵語短語係：",
          "options": [
            "好傾得嚟 (hou2 king1 dak1 lai4 / Click well in conversation)",
            "好傾唔嚟) (Context: 勝任與熟練程度可能補語：「V + 得嚟 / 唔嚟」與「做得嚟、應付得嚟)",
            "好傾得落) (Context: 勝任與熟練程度可能補語：「V + 得嚟 / 唔嚟」與「做得嚟、應付得嚟)",
            "好傾得起) (Context: 勝任與熟練程度可能補語：「V + 得嚟 / 唔嚟」與「做得嚟、應付得嚟)"
          ],
          "answerIndex": 0,
          "explanation": "「傾得嚟」（king1 dak1 lai4）表示交談投契、聊得來。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【工作勝任】面對繁重工作任務，欲向主管表示自己「完全能夠勝任應付」，應講：",
          "options": [
            "我應付得嚟 (ngo5 jing3 fu6 dak1 lai4 / I can manage/cope)",
            "我應付唔嚟) (Context: 勝任與熟練程度可能補語：「V + 得嚟 / 唔嚟」與「做得嚟、應付得嚟)",
            "我應付得落) (Context: 勝任與熟練程度可能補語：「V + 得嚟 / 唔嚟」與「做得嚟、應付得嚟)",
            "我應付唔起) (Context: 勝任與熟練程度可能補語：「V + 得嚟 / 唔嚟」與「做得嚟、應付得嚟)"
          ],
          "answerIndex": 0,
          "explanation": "「應付得嚟」（jing3 fu6 dak1 lai4）表示能夠勝任處理。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語意理解】餐廳經理講「客人太多，樓面招呼唔嚟」，「招呼唔嚟」之意思是：",
          "options": [
            "人手不足，無法把所有客人接待周全 (Cannot cope with serving all guests)",
            "客人不願意進來餐廳) (Context: 勝任與熟練程度可能補語：「V + 得嚟 / 唔嚟」與「做得嚟、應付得嚟)",
            "經理不認識客人) (Context: 勝任與熟練程度可能補語：「V + 得嚟 / 唔嚟」與「做得嚟、應付得嚟)",
            "餐廳菜式已經售罄) (Context: 勝任與熟練程度可能補語：「V + 得嚟 / 唔嚟」與「做得嚟、應付得嚟)"
          ],
          "answerIndex": 0,
          "explanation": "「招呼唔嚟」表示接待服務能力超出負荷，無法應付。"
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
    "title": "可能態之情態助詞問答與「得唔得 / 能唔能夠」對比實戰 (Potential Questions & Modals)",
    "level": "B1",
    "objective": "掌握粵語可能補語正反疑問句構造（V唔V得C / V得C唔V得C）、句尾疑問助詞搭配與能願情態助詞（識唔識/可唔可以）之三維精確語用對比。",
    "presentation": {
      "explanation": "可能補語在疑問句構造與情態助詞辨析上具有極為嚴謹之句法規則：\n\n一、可能補語三大正反疑問句公式：\n１．公式一（常用精簡正反問）：【動詞 ＋ 「唔」 ＋ 動詞 ＋ 「得」 ＋ 補語】。\n- 例如：「你睇唔睇得明？」（你看不看得懂？）。\n- 例如：「你做唔做得嚟？」（你做不做得到/應付得來嗎？）。\n２．公式二（完整對稱正反問）：【動詞 ＋ 「得」 ＋ 補語 ＋ 「唔」 ＋ 補語】。\n- 例如：「你食得晒唔食得晒？」（你吃不吃得完？）。\n- 例如：「部車坐得落唔坐得落？」（車子坐不坐得下？）。\n３．公式三（句尾附加問句）：【陳述句 ＋ 「得唔得呀 / 係咪呀」】。\n- 例如：「呢份報告你今晚搞得掂，係咪呀？」。\n\n二、可能補語與能願動詞之三維語義對比：\n１．可能補語（睇得明）：強調客觀條件或當前具體動作之成功結果。\n２．技能能願詞「識」（識唔識睇）：強調後天學習習得之技術或知識本領（如識唔識法文）。\n３．許可/客觀可能「可以」（可唔可以睇）：強調外界規章、法規或他人之准許許可。",
      "examples": [
        {
          "target": "呢篇法文合約咁深奧，你睇唔睇得明入面啲法律專業術語？",
          "reading": "ni1 pin1 faat3 man4*2 hap6 joek3 gam3 sam1 ou3, nei5 tai2 m4 tai2 dak1 ming4 jap6 min6 di1 faat3 leot6 zyun1 jip6 seot6 jyu5. [niː˥ pʰiːn˥ faːt̚˧ mɐn˨˩ hɐp̚˨ jœːk̚˧ kɐm˧ sɐm˥ ou˧, nei˩˧ tʰɐi˧˥ m̩˨˩ tʰɐi˧˥ tɐk̚˥ mɪŋ˨˩ jɐp̚˨ miːn˨ tiː˥ faːt̚˧ lɵt̚˨ tsyn˥ jiːp̚˨ sɵt̚˨ jyː˩˧] (NEE-PEEN FAHT-MUN HUP-YERK GUM SUM-OU, NEI TY-M-TY-DUK-MING YUP-MEEN DEE FAHT-LUET JUEN-YIP SUT-YUE)",
          "translation": "This French contract is so profound; can you understand the legal specialized terms inside?"
        },
        {
          "target": "今次展覽啲機密展品，公眾可唔可以入去影相拍照？",
          "reading": "gam1 ci3 zin2 laam5 di1 gei1 mat6 zin2 ban2, gung1 zung3 ho2 m4 ho2 ji5 jap6 heoi3 jing2 soeng2 piu3 ziu3. [kɐm˥ tsʰiː˧ tsiːn˧˥ laːm˩˧ tiː˥ kei˥ mɐt̚˨ tsiːn˧˥ pʰɐn˧˥, kʊŋ˥ tsʊŋ˧ hɔː˧˥ m̩˨˩ hɔː˧˥ jiː˩˧ jɐp̚˨ hɵy˧ jɪŋ˧˥ sœːŋ˧˥ pʰiːu˧ tsiːu˧] (GUM-CHEE JEEN-LAHM DEE GAY-MUT JEEN-BUN, GONG-JOONG HOH-M-HOH-YEE YUP-HOEY YING-SEUNG PEW-JEW)",
          "translation": "For the confidential exhibits in this exhibition, is the public permitted to enter and take photos?"
        },
        {
          "target": "我識講少少廣東話，平時同街坊日常溝通完全應付得嚟。",
          "reading": "ngo5 sik1 gong2 siu2 siu2 gwong2 dung1 waa6*2, ping4 si4 tung4 gaai1 fong1 jat6 seung4 kau1 tung1 jyun4 cyun4 jing3 fu6 dak1 lai4. [ŋɔː˩˧ sɪk̚˥ kɔːŋ˧˥ siu˧˥ siu˧˥ kʷɔːŋ˧˥ tʊŋ˥ waː˧˥, pʰɪŋ˨˩ siː˨˩ tʰʊŋ˨˩ kaːi˥ fɔːŋ˥ jɐt˨ sœːŋ˨˩ kʰɐu˥ tʰʊŋ˥ jyːn˨˩ tsʰyːn˨˩ jɪŋ˧ fuː˨ tɐk̚˥ lɐi˨˩] (NGOH SIK GONG SIU-SIU GWONG-DUNG-WAH, PING-SEE TOONG GY-FONG YUT-SEUNG KAU-TOONG CHUEN-CHUEN JING-FOO-DUK-LY)",
          "translation": "I know how to speak a little Cantonese; communicating daily with neighbors normally is completely manageable."
        }
      ],
      "mnemonics": [
        "【問答辨析歌】正反提問「睇唔睇得明」，技能本領「識唔識」；規章准許「可唔可以」，情態補語辨析清！"
      ],
      "culturalNotes": [
        "在香港商務面試中，面試官常精準切換「你識唔識用呢套系統？」（技能技能）與「你做唔做得嚟？」（勝任負載），精準回答能充分展現求職者之語言素養與自信。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【正反疑問】欲向對方詢問「你能不能聽得懂我說的粵語」，最標準之正反問句係：",
          "options": [
            "你聽唔聽得明我講嘅廣東話？ (Can you understand my Cantonese?)",
            "你聽得明聽唔明我廣東話？) (Context: 可能態之情態助詞問答與「得唔得 / 能唔能夠」對比實戰 (Potent)",
            "你廣東話聽唔聽？) (Context: 可能態之情態助詞問答與「得唔得 / 能唔能夠」對比實戰 (Potent)",
            "你明唔明聽廣東話？) (Context: 可能態之情態助詞問答與「得唔得 / 能唔能夠」對比實戰 (Potent)"
          ],
          "answerIndex": 0,
          "explanation": "「聽唔聽得明」（動＋唔＋動＋得＋補）為標準正反疑問句式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【情態對比】詢問對方是否具備「開車、駕駛這項技術本領」，應選用之情態動詞係：",
          "options": [
            "你識唔識揸車？ (Do you know how to drive? / Learned skill)",
            "你揸得落車嗎？) (Context: 可能態之情態助詞問答與「得唔得 / 能唔能夠」對比實戰 (Potent)",
            "你揸得起車嗎？) (Context: 可能態之情態助詞問答與「得唔得 / 能唔能夠」對比實戰 (Potent)",
            "你揸唔揸得明？) (Context: 可能態之情態助詞問答與「得唔得 / 能唔能夠」對比實戰 (Potent)"
          ],
          "answerIndex": 0,
          "explanation": "表示後天習得之技能本領，專用能願動詞「識」（識唔識）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【綜合辨析】下列三句話中，分別強調「許可准許」、「習得技能」與「客觀完成可能」之排列順序係：",
          "options": [
            "可唔可以入去（許可） / 識唔識游水（技能） / 睇唔睇得見（可能） (「可以」表許可准許，「識」表習得技能，「睇得見」表客觀結果達成之可能性。) (可能態之情態助詞問答與「得唔得 / 能唔能夠」對比實戰 (Potential Questions & Modals))",
            "睇唔睇得見（許可） / 可唔可以入去（技能） / 識唔識游水（可能）) (Context: 可能態之情態助詞問答與「得唔得 / 能唔能夠」對比實戰 (Potent)",
            "識唔識游水（許可） / 睇唔睇得見（技能） / 可唔可以入去（可能）) (Context: 可能態之情態助詞問答與「得唔得 / 能唔能夠」對比實戰 (Potent)",
            "可唔可以入去（技能） / 識唔識游水（許可） / 睇唔睇得見（可能）) (Context: 可能態之情態助詞問答與「得唔得 / 能唔能夠」對比實戰 (Potent)"
          ],
          "answerIndex": 0,
          "explanation": "「可以」表許可准許，「識」表習得技能，「睇得見」表客觀結果達成之可能性。"
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
    "title": "粵語存在句核心結構：「處所 + 有 / 冇 + 實體」對比「實體 + 喺 + 處所」 (Existential Sentences)",
    "level": "B1",
    "objective": "掌握粵語存在句「處所 + 有/冇 + 無定名詞」（引介新事物）與處所定位句「特定實體 + 喺 + 處所」（交代已知事物位置）之句法結構與語用差異。",
    "presentation": {
      "explanation": "粵語中描寫空間存在與空間定位由兩個涇渭分明之句法範式構成：\n\n一、存在句範式（引介無定新信息）：\n１．核心公式：【處所名詞 ＋ 「有 / 冇」 ＋ 無定名詞實體】。\n- 功能：用以向聽者引介該空間內存在或不存在某人某物（強調存在狀態本身）。\n- 肯定範例：「檯面有兩本雜誌」（桌上有兩本雜誌）、「會議室入面有好多人」（會議室裡有很多人）。\n- 否定範例：「雪櫃冇晒鮮奶」（冰箱裡完全沒有牛奶了）、「街上冇半個行人」（街上沒有半個行人）。\n\n二、處所定位句範式（交代有定已知信息）：\n１．核心公式：【特定名詞實體 ＋ 「喺」 ＋ 處所名詞 （＋ 度）】。\n- 功能：名詞通常為已知、特定對象，強調該對象具體坐落於何處。\n- 範例：「你本護照喺抽屜入面」（你的護照在抽屜裡面）、「陳經理喺辦公室度」（陳經理在辦公室裡）。\n\n三、焦點與有定性（Definiteness Effect）對比：\n１．「雪櫃有鮮奶」：回答「雪櫃有咩？」（引介未知物品）。\n２．「鮮奶喺雪櫃」：回答「鮮奶喺邊度？」（定位已知物品）。",
      "examples": [
        {
          "target": "客廳茶几上面有一套好精緻嘅紫砂茶具同幾盒鳳凰單叢茶葉。",
          "reading": "haak3 teng1 caa4 gai1 soeng6 min6 jau5 jat1 tou3 hou2 zing1 zi3 ge3 zi2 saa1 caa4 geoi6 tung4 gei2 hap6 fung6 wong4 daan1 cung4 caa4 jip6. [haːk̚˧ tʰɛːŋ˥ tsʰaː˨˩ kɐi˥ sœːŋ˨ miːn˨ jɐu˩˧ jɐt̚˥ tʰou˧ hou˧˥ tsɪŋ˥ tsiː˧ kɛː˧ tsiː˧˥ saː˥ tsʰaː˨˩ kɵy˨ tʰʊŋ˨˩ kei˧˥ hɐp̚˨ fʊŋ˨ kuːŋ˨˩ taːn˥ tsʰʊŋ˨˩ tsʰaː˨˩ jiːp̚˨] (HAHK-TENG CHAH-GY SEUNG-MEEN YAU YUT-TOU HOH JING-JEE GEH JEE-SAH CHAH-GOEY TOONG GAY-HUP FOONG-WONG DAHN-CHOONG CHAH-YEEP)",
          "translation": "On the living room coffee table there is a very exquisite purple clay tea set and several boxes of Fenghuang Dancong tea leaves."
        },
        {
          "target": "你問緊嗰份加急報關文件，依家正正喺總經理張辦公檯上面。",
          "reading": "nei5 man6 gan2 go2 fan6 gaa1 gap1 bou3 gwaan1 man4 gin62, ji1 gaa1 zing3 zing3 hai2 zung2 ging1 lei5 zoeng1 baan6 gung1 toi4 soeng6 min6. [nei˩˧ mɐn˨ kɐn˧˥ kɔː˧˥ fɐn˨ kaː˥ kɐp̚˥ pou˧ kʷaːn˥ mɐn˨˩ kiːn˧˥, jiː˥ kaː˥ tsɪŋ˧ tsɪŋ˧ hɐi˩˧ tsʊŋ˧˥ kɪŋ˥ lei˩˧ tsœːŋ˥ paːn˨ kʊŋ˥ tʰɔːi˨˩ sœːŋ˨ miːn˨] (NEI MUN-GUN GOH-FUN GAH-GUP BOU-GWAHN MUN-GEEN, YEE-GAH JING-JING HY JOONG-GING-LY JEUNG BAHN-GONG-TOY SEUNG-MEEN)",
          "translation": "The urgent customs declaration document you are asking about is right now on the general manager's office desk."
        },
        {
          "target": "呢條偏僻鄉村入面冇任何便利店，買嘢要行去市鎮中心先得。",
          "reading": "ni1 tiu4 pin1 pik1 hoeng1 cyun1 jap6 min6 mou5 jam6 ho4 bin6 lei6 dim3, maai5 je5 jiu3 haang4 heoi3 si5 zan3 zung1 sam1 sin1 dak1. [niː˥ tʰiːu˨˩ pʰiːn˥ pʰɪk̚˥ hœːŋ˥ tsʰyːn˥ jɐp̚˨ miːn˨ mou˩˧ jɐm˨ hɔː˨˩ piːn˨ lei˨ tiːm˧, maːi˩˧ jɛː˩˧ jiu˧ haːŋ˨˩ hɵy˧ siː˩˧ tsɐn˧ tsʊŋ˥ sɐm˥ siːn˥ tɐk̚˥] (NEE-TEW PEEN-PIK HEUNG-CHUEN YUP-MEEN MOU YUM-HOH BEEN-LEY-DEEM, MY-YEH YEW HAHNG-HOEY SEE-JUN JOONG-SUM SEEN DUK)",
          "translation": "There are no convenience stores in this remote rural village; to buy goods one must walk all the way to the town center."
        }
      ],
      "mnemonics": [
        "【存在定位歌】引介新物「處所有」，交代位置「實體喺」；處所冇物用個「冇」，存在定位分得明！"
      ],
      "culturalNotes": [
        "廣東人對「有」與「冇」之存在哲學極為敏感。在商業經營中，「門市有貨」代表充沛財氣，而「冇」字在逢年過節時常以吉利代稱避忌（如通勝避諱『輸』字）。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【存在句構造】欲向客人介紹「會議室裡面有十張旋轉椅」，標準粵語存在句句式係：",
          "options": [
            "會議室入面有十張旋轉椅。 (There are 10 swivel chairs in the meeting room.)",
            "十張旋轉椅喺會議室入面有。) (Context: 粵語存在句核心結構：「處所 + 有 / 冇 + 實體」對比「實體 + )",
            "有十張旋轉椅喺會議室入面度。) (Context: 粵語存在句核心結構：「處所 + 有 / 冇 + 實體」對比「實體 + )",
            "會議室入面喺十張旋轉椅。) (Context: 粵語存在句核心結構：「處所 + 有 / 冇 + 實體」對比「實體 + )"
          ],
          "answerIndex": 0,
          "explanation": "存在句標準句序為【處所 ＋ 有 ＋ 數量名詞】（會議室入面有……）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【處所定位】回答「我部手機去咗邊？」，指出「你的手機在沙發上面」，應講：",
          "options": [
            "你部手機喺梳化上面。 (Your mobile is on the sofa.)",
            "梳化上面有你部手機。) (Context: 粵語存在句核心結構：「處所 + 有 / 冇 + 實體」對比「實體 + )",
            "你部手機有梳化上面。) (Context: 粵語存在句核心結構：「處所 + 有 / 冇 + 實體」對比「實體 + )",
            "梳化上面喺你部手機。) (Context: 粵語存在句核心結構：「處所 + 有 / 冇 + 實體」對比「實體 + )"
          ],
          "answerIndex": 0,
          "explanation": "交代已知特定物品之具體坐標，使用處所定位句【名詞 ＋ 喺 ＋ 處所】。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語法辨析】句子「雪櫃入面冇晒雞蛋」中，「冇」之主要語法功能係：",
          "options": [
            "存在句否定標記，表示某空間內不存在某實體 (Negative Existential Marker)",
            "動態進行體標記) (Context: 粵語存在句核心結構：「處所 + 有 / 冇 + 實體」對比「實體 + )",
            "被動態引介詞) (Context: 粵語存在句核心結構：「處所 + 有 / 冇 + 實體」對比「實體 + )",
            "比較級介詞) (Context: 粵語存在句核心結構：「處所 + 有 / 冇 + 實體」對比「實體 + )"
          ],
          "answerIndex": 0,
          "explanation": "「冇」在存在句中作為否定核心謂語，表示處所內目標物之缺失。"
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
    "title": "動詞持續態存在句：「處所 + 擺住 / 掛住 / 坐住 / 企住」 (Durative Existential Complements)",
    "level": "B1",
    "objective": "掌握粵語靜態存現持續句「處所 + 動詞 + 住（持續體） + 實體」之空間狀態描摹機制與姿勢/放置動詞精確搭配。",
    "presentation": {
      "explanation": "靜態存現句用以描寫某個處所持續呈現某種空間擺設、人物姿態或物體附著狀態：\n\n一、動態存現持續句核心公式：\n１．公式：【處所名詞 ＋ 動詞 ＋ 「住」（持續體） ＋ 存在實體】。\n- 語法特徵：動詞附加體助詞「住」（zyu6），表示動作完成後所留下之靜態延續與空間陳列。\n\n二、四大空間存現動詞家族：\n１．懸掛與附著類：\n- 「掛住」（kwaa3 zyu6）：牆上面掛住一幅水墨山水畫。\n- 「貼住」（tip3 zyu6）：門口貼住一張紅色揮春。\n２．擺放與陳列類：\n- 「擺住」（baai2 zyu6）：客廳擺住一張實木長餐檯。\n- 「放住」（fong3 zyu6）：書架放住幾排厚厚嘅英文工具書。\n３．人體姿態停留類：\n- 「企住」（kei5 zyu6）：大門兩邊企住兩名威嚴嘅儀仗隊員。\n- 「坐住」（co5 zyu6）：長凳上面坐住幾位傾緊偈嘅長者。\n４．生長與種植類：\n- 「種住」（zung3 zyu6）：天台花園種住好多新鮮薄荷葉同迷迭香。",
      "examples": [
        {
          "target": "客廳正中間嘅主牆上面，端端正正噉掛住一幅嶺南畫派名家嘅荔枝畫。",
          "reading": "haak3 teng1 zing3 zung1 gaan1 ge3 zyu2 coeng4 soeng6 min6, dyun1 dyun1 zing3 zing3 gam2 kwaa3 zyu6 jat1 fuk1 ling5 naam4 waa2*4 paai3 ming4 gaa1 ge3 lai6 zi1 waa2*4. [haːk̚˧ tʰɛːŋ˥ tsɪŋ˧ tsʊŋ˥ kaːn˥ kɛː˧ tsyː˧˥ tsʰœːŋ˨˩ sœːŋ˨ miːn˨, tyːn˥ tyːn˥ tsɪŋ˧ tsɪŋ˧ kɐm˧˥ kʷaː˧ tsyː˨ jɐt̚˥ fʊk̚˥ lɪŋ˩˧ naːm˨˩ waː˧˥ pʰaːi˧ mɪŋ˨˩ kaː˥ kɛː˧ lɐi˨ tsiː˥ waː˧˥] (HAHK-TENG JING-JOONG-GAHN GEH JYUE-CHEUNG SEUNG-MEEN, DUEN-DUEN-JING-JING GUM KWAH-JYE YUT-FOOK LING-NAHM-WAH-PY MING-GAH GEH LY-JEE-WAH)",
          "translation": "On the main wall right in the center of the living room, there hangs properly a lychee painting by a famous master of the Lingnan School."
        },
        {
          "target": "公司接待處門口企住兩個著深藍色西裝嘅保安員，負責登記訪客資料。",
          "reading": "gung1 si1 zip3 doi6 cyu3 mun4 hau2 kei5 zyu6 loeng5 go3 zoek3 sam1 laam4 sik1 sai1 zong1 ge3 bou2 on1 jyun4, fu6 zaak3 dang1 gei3 fong2 haak3 zi1 liu6*2. [kʊŋ˥ siː˥ tsip̚˧ tɔːi˨ tsʰyː˧ muːn˨˩ hɐu˧˥ kʰei˩˧ tsyː˨ lœːŋ˩˧ kɔː˧ tsœːk̚˧ sɐm˥ laːm˨˩ sɪk̚˥ sɐi˥ tsɔːŋ˥ kɛː˧ pou˧˥ ɔːn˥ jyːn˨˩, fu˨ tsaːk̚˧ tɐŋ˥ kei˧ fɔːŋ˧˥ haːk̚˧ tsiː˥ liu˨] (GONG-SEE JIP-DOY-CHY MOON-HAU KEY-JYE LEUNG-GOH JERK SUM-LAHM-SIK SY-JONG GEH BOU-ON-YUEN, FOO-JARK DUNG-GAY FONG-HAHK JEE-LEW)",
          "translation": "At the entrance of the company reception area stand two security guards wearing dark blue suits, responsible for registering visitor details."
        },
        {
          "target": "陽台花架上面整齊噉擺住十幾盆生長得好茂盛嘅綠色多肉植物。",
          "reading": "joeng4 toi4 faa1 gaa2*4 soeng6 min6 zing2 cai4 gam2 baai2 zyu6 sap6 gei2 pun4 sang1 zoeng2 dak1 hou2 mau6 sing6 ge3 luk6 sik1 do1 juk6 zik6 mat6. [jœːŋ˨˩ tʰɔːi˨˩ faː˥ kaː˧˥ sœːŋ˨ miːn˨ tsɪŋ˧˥ tsʰɐi˨˩ kɐm˧˥ paːi˧˥ tsyː˨ sɐp̚˨ kei˧˥ pʰuːn˨˩ sɐŋ˥ tsœːŋ˧˥ tɐk̚˥ hou˧˥ mɐu˨ sɪŋ˨ kɛː˧ lʊk̚˨ sɪk̚˥ tɔː˥ jʊk̚˨ tsɪk̚˨ mɐt̚˨] (YEUNG-TOY FAH-GAH SEUNG-MEEN JING-CHY GUM BAAI-JYE SUP-GAY-POON SUNG-JEUNG DUK HOH MAU-SING GEH LOOK-SIK DOH-YOOK JIK-MUT)",
          "translation": "On the balcony flower rack are neatly arranged more than ten pots of lush green succulent plants."
        }
      ],
      "mnemonics": [
        "【靜態存現訣】牆上「掛住」名家畫，門口「企住」保安員；桌上「擺住」精緻物，空間狀態描寫全！"
      ],
      "culturalNotes": [
        "持續體「住」（zyu6）賦予空間描寫強烈之畫面凝固感與靜態美。在傳統嶺南大宅（如西關大屋、圍村宗祠）中，「神龕擺住祖先牌位、樑上掛住八卦鏡」係極為典型之空間文化意象。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【空間存現句】欲描寫「會議室牆上掛著一張世界地圖」，最地道之粵語存現句係：",
          "options": [
            "會議室牆上面掛住一張世界地圖。 (On the wall hangs a world map.)",
            "會議室牆上面掛緊一張世界地圖。) (Context: 動詞持續態存在句：「處所 + 擺住 / 掛住 / 坐住 / 企住」 ()",
            "會議室牆上面掛咗一張世界地圖晒。) (Context: 動詞持續態存在句：「處所 + 擺住 / 掛住 / 坐住 / 企住」 ()",
            "一張世界地圖掛住會議室牆上面。) (Context: 動詞持續態存在句：「處所 + 擺住 / 掛住 / 坐住 / 企住」 ()"
          ],
          "answerIndex": 0,
          "explanation": "靜態存現持續句公式為【處所 ＋ 動詞 ＋ 住 ＋ 實體】（牆上面掛住……）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【姿態存現】描寫「大門兩旁站著兩位接待員」，應選用之姿態動詞短語係：",
          "options": [
            "企住兩位接待員 (kei5 zyu6 loeng5 wai62 / Two receptionists standing)",
            "坐住兩位接待員) (Context: 動詞持續態存在句：「處所 + 擺住 / 掛住 / 坐住 / 企住」 ()",
            "擺住兩位接待員) (Context: 動詞持續態存在句：「處所 + 擺住 / 掛住 / 坐住 / 企住」 ()",
            "掛住兩位接待員) (Context: 動詞持續態存在句：「處所 + 擺住 / 掛住 / 坐住 / 企住」 ()"
          ],
          "answerIndex": 0,
          "explanation": "人物站立姿態在粵語中專用動詞「企」（企住）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語態對比】「掛住」（kwaa3 zyu6）與「掛緊」（kwaa3 gan2）在空間描寫中之核心語法差別係：",
          "options": [
            "「掛住」表示物體靜態懸掛之持續狀態，「掛緊」表示正在進行懸掛之動態過程 (「住」標註狀態之靜態延續（存現態），「緊」標註動作正處於進行過程中（進行態）。) (動詞持續態存在句：「處所 + 擺住 / 掛住 / 坐住 / 企住」 (Durative Existential Complements))",
            "「掛住」表示動作已經失敗，「掛緊」表示動作順利完成) (Context: 動詞持續態存在句：「處所 + 擺住 / 掛住 / 坐住 / 企住」 ()",
            "「掛住」只能用於人體，「掛緊」只能用於建築物) (Context: 動詞持續態存在句：「處所 + 擺住 / 掛住 / 坐住 / 企住」 ()",
            "兩者在語法與語義上完全等同無差別) (Context: 動詞持續態存在句：「處所 + 擺住 / 掛住 / 坐住 / 企住」 ()"
          ],
          "answerIndex": 0,
          "explanation": "「住」標註狀態之靜態延續（存現態），「緊」標註動作正處於進行過程中（進行態）。"
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
    "title": "嶺南特色空間方位詞與指代標記：「……度」、「……邊」、「……面」 (Spatial Localizers & Clitics)",
    "level": "B1",
    "objective": "掌握粵語專屬處所化名詞詞綴「度（代詞/人稱處所化）」、方位標記「邊（側向朝向）」與邊界名詞「面（內部/表面）」之幾何拓撲體系。",
    "presentation": {
      "explanation": "粵語之空間方位詞系統具備嚴密之形態標記功能，其中「度」、「邊」、「面」在拓撲語義上有清晰分工：\n\n一、「度」（dou6）：代詞與人稱處所化黏著後綴：\n１．代詞處所化：在指示代詞後加上「度」構成處所副詞：\n- 「呢度」（ni1 dou6）：這裡、此處。\n- 「嗰度」（go2 dou6）：那裡、彼處。\n- 「邊度」（bin1 dou6）：哪裡、何處（疑問）。\n２．人稱處所化：人稱代詞或名詞後加「度」，表示「在某人身邊/某人處/某人家裡」：\n- 「喺我度」（在我這裡/由我保管）。\n- 「喺陳生度」（在陳先生那裡）。\n\n二、「邊」（bin1）：側向朝向與橫向維度標記：\n１．左右側向：「左手邊」（左側）、「右手邊」（右側）。\n２．前後方位：「前邊 / переди」（前面）、「後邊」（後面）。\n３．遠近朝向：「呢邊」（這邊）、「嗰邊」（那邊）、「邊一邊」（哪一邊）。\n\n三、「面」（min6）：表面、邊界與立體包容度標記：\n１．立體包容：「入面」（裡面、內部） vs 「外面」（外面、外部）。\n２．垂直上下：「上面」（上方、頂部） vs 「下面」（下方、底部）。\n３．相對朝向：「對面」（正對面） vs 「斜對面」（斜角正對面）。",
      "examples": [
        {
          "target": "你唔使四圍周圍搵喇，份合約正正擺喺我度，我依家攞畀你。",
          "reading": "nei5 m4 sai2 sei3 wai4 zau1 wai4 wan2 laa3, fan6 hap6 joek3 zing3 zing3 baai2 hai2 ngo5 dou6, ngo5 ji1 gaa1 lo2 bei2 nei5. [nei˩˧ m̩˨˩ sɐi˧˥ sei˧ wɐi˨˩ tsɐu˥ wɐi˨˩ wɐn˧˥ laː˧, fɐn˨ hɐp̚˨ jœːk̚˧ tsɪŋ˧ tsɪŋ˧ paːi˧˥ hɐi˩˧ ŋɔː˩˧ tou˨, ŋɔː˩˧ jiː˥ kaː˥ lɔː˧˥ pei˨ nei˩˧] (NEI M-SY SAY-WY JAU-WY WUN LAH, FUN HUP-YERK JING-JING BAAI HY NGOH DOU, NGOH YEE-GAH LOH BAY NEI)",
          "translation": "You don't need to look all around; the contract is right with me, and I will get it for you right now."
        },
        {
          "target": "地鐵站出口右手邊有一間廿四小時營業嘅便利店同埋兩部自動櫃員機。",
          "reading": "dei6 tit3 zaam6 ceot1 hau2 jau6 sau2 bin1 jau5 jat1 gaan1 jaa6 sei3 siu2 si4 jing4 jip6 ge3 bin6 lei6 dim3 tung4 maai4 loeng5 bou6 zi6 dung6 gwai6 jyun4 gei1. [tei˨ tʰiːt̚˧ tsaːm˨ tsʰɵt̚˥ hɐu˧˥ jɐu˨ sɐu˧˥ piːn˥ jɐu˩˧ jɐt̚˥ kaːn˥ jaː˨ sei˧ siu˧˥ siː˨˩ jɪŋ˨˩ jiːp̚˨ kɛː˧ piːn˨ lei˨ tiːm˧ tʰʊŋ˨˩ maːi˨˩ lœːŋ˩˧ pou˨ tsiː˨ tʊŋ˨ kʷɐi˨ jyːn˨˩ kei˥] (DAY-TEET JAHM CHUT-HAU YAU-SAU-BEEN YAU YUT-GAHN YAH-SAY SIU-SEE YING-YIP GEH BEEN-LEY-DEEM TOONG-MY LEUNG-BOU JEE-DOONG GWY-YUEN-GAY)",
          "translation": "On the right-hand side of the subway station exit there is a 24-hour convenience store and two ATMs."
        },
        {
          "target": "大廈停車場入面好陰暗，記得開大燈行慢少少以策安全。",
          "reading": "daai6 haa6 ting4 ce1 coeng4 jap6 min6 hou2 jam1 am3, gei3 dak1 hoi1 daai6 dang1 haang4 maan6 siu2 siu2 ji5 caak3 on1 cyun4. [taːi˨ haː˨ tʰɪŋ˨˩ tsʰɛː˥ tsʰœːŋ˨˩ jɐp̚˨ miːn˨ hou˧˥ jɐm˥ ɐm˧, kei˧ tɐk̚˥ hɔːi˥ taːi˨ tɐŋ˥ haːŋ˨˩ maːn˨ siu˧˥ siu˧˥ jiː˩˧ tsʰaːk̚˧ ɔːn˥ tsʰyːn˨˩] (DY-HAH TING-CHEH-CHEUNG YUP-MEEN HOH YUM-UM, GAY-DUK HOI DY-DUNG HAHNG MAHN SIU-SIU YEE-CHAHK ON-CHUEN)",
          "translation": "Inside the building parking lot is very dim; remember to turn on your headlights and drive a little slower for safety."
        }
      ],
      "mnemonics": [
        "【處所詞綴訣】人稱代詞加「度」字，喺我度同喺嗰度；左右側向用「邊」字，內外立體用「面」字！"
      ],
      "culturalNotes": [
        "「喺我度」（在我這裡）係粵語人際交流中極高頻之句式，精準表示實物或責任當前在某人保管之下。這種透過「度」將人物處所化之語法特性，極具嶺南語言精巧性。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【人稱處所化】欲向同事表示「那份重要文件由我保管、在我這裡」，最地道粵語表達係：",
          "options": [
            "份文件喺我度。 (fan6 man4 gin62 hai2 ngo5 dou6 / The document is with me.)",
            "份文件喺我邊。) (Context: 嶺南特色空間方位詞與指代標記：「……度」、「……邊」、「……面」 (S)",
            "份文件喺我面。) (Context: 嶺南特色空間方位詞與指代標記：「……度」、「……邊」、「……面」 (S)",
            "份文件喺我處。) (Context: 嶺南特色空間方位詞與指代標記：「……度」、「……邊」、「……面」 (S)"
          ],
          "answerIndex": 0,
          "explanation": "人稱代詞後加「度」（喺我度）表示在某人處/由某人保管。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【方位指向】指示方向「向右側看、在右手側」，應選用之方位短語係：",
          "options": [
            "右手邊 (jau6 sau2 bin1 / Right-hand side)",
            "右手度) (Context: 嶺南特色空間方位詞與指代標記：「……度」、「……邊」、「……面」 (S)",
            "右手面) (Context: 嶺南特色空間方位詞與指代標記：「……度」、「……邊」、「……面」 (S)",
            "右手處) (Context: 嶺南特色空間方位詞與指代標記：「……度」、「……邊」、「……面」 (S)"
          ],
          "answerIndex": 0,
          "explanation": "左右側向維度專用標記「邊」（右手邊、左手邊）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【拓撲辨析】指示代詞「邊度」（bin1 dou6）在粵語中之標準語法语義為：",
          "options": [
            "何處、哪裡（處所疑問代詞） (Where / What place)",
            "什麼時候（時間疑問代詞）) (Context: 嶺南特色空間方位詞與指代標記：「……度」、「……邊」、「……面」 (S)",
            "為什麼（原因疑問代詞）) (Context: 嶺南特色空間方位詞與指代標記：「……度」、「……邊」、「……面」 (S)",
            "多少錢（價格疑問代詞）) (Context: 嶺南特色空間方位詞與指代標記：「……度」、「……邊」、「……面」 (S)"
          ],
          "answerIndex": 0,
          "explanation": "「邊度」為粵語標準處所疑問詞，相當於「哪裡/何處」。"
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
    "title": "微觀與宏觀城市空間拓撲描寫：「隔離」、「對面」、「轉角位」、「斜對面」 (Urban Spatial Topology)",
    "level": "B1",
    "objective": "掌握香港高密度立體街區拓撲方位詞（隔離/斜對面/轉角位/天橋底/後巷）在城市尋路與商圈定位中之精確語用語境。",
    "presentation": {
      "explanation": "香港作為高密度立體縱深都市，孕育出一套極為精確且生動之城市微觀空間拓撲定位詞彙：\n\n一、街區相鄰與對向空間拓撲：\n１．「隔離」（gaak3 lei4）：緊密相鄰、一牆之隔、左右隔壁。\n- 「隔離鄰舍」（左右鄰居）、「隔離舖頭」（隔壁商店）、「坐喺我隔離」（坐在我旁邊）。\n２．「對面」（deoi3 min6）：隔街相望、正對面。\n- 「馬路對面」（馬路正對面）、「對面海」（維港對岸）。\n３．「斜對面」（ce4 deoi3 min6）：非正對、呈斜角對向。\n- 「地鐵站斜對面間藥房」（地鐵站斜對角的那家藥店）。\n\n二、街角與立體建築空間節點：\n１．「轉角位 / 街角」（zyun3 gok3 wai6*2）：街道轉彎處、十字路口拐角。\n- 「轉角位間便利店」（拐角處的便利店）。\n２．「天橋底」（tin1 kiu4 dai2）：行人或行車天橋下方空間（如銅鑼灣打小人文化空間）。\n３．「後巷」（hau6 hong6*2）：建築物背後之後街小巷。",
      "examples": [
        {
          "target": "你過咗十字路口之後，轉角位間茶餐廳隔離就係我哋公司嘅正門。",
          "reading": "nei5 gwo3 zo2 sap6 zi6 lou6 hau2 zi1 hau6, zyun3 gok3 wai6*2 gaan1 caa4 caan1 teng1 gaak3 lei4 zau6 hai6 ngo5 dei6 gung1 si1 ge3 zing3 mun4. [nei˩˧ kʷɔː˧ tsɔː˧˥ sɐp̚˨ tsiː˨ lou˨ hɐu˧˥ tsiː˥ hɐu˨, tsyn˧ kɔːk̚˧ wɐi˧˥ kaːn˥ tsʰaː˨˩ tsʰaːn˥ tʰɛːŋ˥ kaːk̚˧ lei˨˩ tsɐu˨ hɐi˨ ŋɔː˩˧ tei˨ kʊŋ˥ siː˥ kɛː˧ tsɪŋ˧ muːn˨˩] (NEI GWOR-JOR SUP-JEE-LOU-HAU JEE-HAU, JUEN-GOK-WY GAHN CHAH-CHAAN-TENG GARK-LEY JAU HY NGOH-DAY GONG-SEE GEH JING-MOON)",
          "translation": "After you cross the intersection, right next to the cha chaan teng at the street corner is our company's main entrance."
        },
        {
          "target": "匯豐銀行總行大廈斜對面，就係歷史悠久嘅終審法院大樓。",
          "reading": "wui6 fung1 ngan4 hong4 zung2 hong4 daai6 haa6 ce4 deoi3 min6, zau6 hai6 lik6 si2 jau4 gau2 ge3 zung1 sam2 faat3 jyun4*2 daai6 lau4. [wuːi˨ fʊŋ˥ ŋɐn˨˩ hɔːŋ˨˩ tsʊŋ˧˥ hɔːŋ˨˩ taːi˨ haː˨ tsʰɛː˩˧ tɵy˧ miːn˨, tsɐu˨ hɐi˨ lɪk̚˨ siː˧˥ jɐu˨˩ kɐu˧˥ kɛː˧ tsʊŋ˥ sɐm˧˥ faːt̚˧ jyːn˧˥ taːi˨ lɐu˨˩] (WUI-FOONG NGAHN-HONG JOONG-HONG DY-HAH CHEH-DEOY-MEEN, JAU HY LIK-SEE YAU-GAU GEH JOONG-SUM FAHT-YUEN DY-LAU)",
          "translation": "Diagonally opposite the HSBC Main Building is the historic Court of Final Appeal Building."
        },
        {
          "target": "每逢驚蟄，銅鑼灣鵝頸橋天橋底都會坐滿幫街坊打小人嘅阿婆。",
          "reading": "mui5 fung4 ging1 zat6, tung4 lo4 waan1 ngo4 geng2 kiu4 tin1 kiu4 dai2 dou1 wui5 co5 mun5 bong1 gaai1 fong1 daa2 siu2 jan4 ge3 aa3 po4*2. [muːi˩˧ fʊŋ˨˩ kɪŋ˥ tsɐk̚˨, tʰʊŋ˨˩ lɔː˨˩ waːn˥ ŋɔː˨˩ kɛːŋ˧˥ kʰiːu˨˩ tʰiːn˥ kʰiːu˨˩ tɐi˧˥ tou˥ wui˩˧ tsʰɔː˩˧ muːn˩˧ pɔːŋ˥ kaːi˥ fɔːŋ˥ taː˧˥ siu˧˥ jɐn˨˩ kɛː˧ aː˧ pʰɔː˧˥] (MOOY-FOONG GING-JUK, TOONG-LOH-WAHN NGOH-GENG-KEW TEEN-KEW-DY DOH WUI CHOH-MOON BONG GY-FONG DY-SIU-YUN GEH AH-POH)",
          "translation": "Every Jingzhe festival, under the Canal Road flyover in Causeway Bay will be full of elderly women 'beating petty persons' for neighbors."
        }
      ],
      "mnemonics": [
        "【城市拓撲歌】緊貼相鄰叫「隔離」，正對馬路講「對面」；拐彎抹角「轉角位」，斜角相望「斜對面」！"
      ],
      "culturalNotes": [
        "「隔離」（隔壁）體現出香港高密度鄰里之緊湊感。而鵝頸橋「天橋底打小人」更被列入香港非物質文化遺產，展示出城市立體空間與民俗信仰之交融。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【相鄰關係】在香港街頭指引「隔壁那家店舖」，最地道之拓撲方位詞係：",
          "options": [
            "隔離舖頭 (gaak3 lei4 pou3 tau4*2 / Next-door shop)",
            "對面舖頭) (Context: 微觀與宏觀城市空間拓撲描寫：「隔離」、「對面」、「轉角位」、「斜對面」)",
            "斜對面舖頭) (Context: 微觀與宏觀城市空間拓撲描寫：「隔離」、「對面」、「轉角位」、「斜對面」)",
            "天橋底舖頭) (Context: 微觀與宏觀城市空間拓撲描寫：「隔離」、「對面」、「轉角位」、「斜對面」)"
          ],
          "answerIndex": 0,
          "explanation": "「隔離」（gaak3 lei4）專門表示相鄰、隔壁。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【拐角拓撲】形容商店坐落於「街道轉角拐彎處」，標準名詞短語係：",
          "options": [
            "轉角位 (zyun3 gok3 wai6*2 / Street corner / Turning corner)",
            "天橋底) (Context: 微觀與宏觀城市空間拓撲描寫：「隔離」、「對面」、「轉角位」、「斜對面」)",
            "後巷位) (Context: 微觀與宏觀城市空間拓撲描寫：「隔離」、「對面」、「轉角位」、「斜對面」)",
            "對面海) (Context: 微觀與宏觀城市空間拓撲描寫：「隔離」、「對面」、「轉角位」、「斜對面」)"
          ],
          "answerIndex": 0,
          "explanation": "「轉角位」表示道路轉折拐角處之位置。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【空間幾何】建築物Ａ與建築物Ｂ位於十字路口之對角線兩側，彼此之空間拓撲關係係：",
          "options": [
            "斜對面 (ce4 deoi3 min6 / Diagonally opposite)",
            "隔離) (Context: 微觀與宏觀城市空間拓撲描寫：「隔離」、「對面」、「轉角位」、「斜對面」)",
            "正對面) (Context: 微觀與宏觀城市空間拓撲描寫：「隔離」、「對面」、「轉角位」、「斜對面」)",
            "天橋底) (Context: 微觀與宏觀城市空間拓撲描寫：「隔離」、「對面」、「轉角位」、「斜對面」)"
          ],
          "answerIndex": 0,
          "explanation": "十字路口斜對角位置在粵語中嚴格稱為「斜對面」（ce4 deoi3 min6）。"
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
    "title": "複雜空間指引與路線拓撲綜合實戰：從室內導覽到街區尋路 (Route Navigation Mastery)",
    "level": "B1",
    "objective": "綜合運用存在句、處所方位詞（度/邊/面）、拓撲地標與趨向動詞進行高階室內商場導覽與複雜街區路線指引。",
    "presentation": {
      "explanation": "路線指引（Wayfinding）係空間語法、趨向補語與方位名詞之最高綜合實戰應用：\n\n一、街區立體尋路四大語法步驟：\n１．出發點與動作指令：【由/喺 ＋ 起點 ＋ 動詞 ＋ 趨向補語】（如「由地鐵站Ａ出口行出嚟」）。\n２．直線位移與路標參照：【一路直行 ＋ 經過/過咗 ＋ 地標】（如「一路直行，過咗兩個街口」）。\n３．方向轉折指令：【喺 ＋ 地標 ＋ 轉左 / 轉右】（如「喺交通燈位轉左」）。\n４．終點定位交代：【終點 ＋ 就喺你 ＋ 左手邊/右手邊】（如「圖書館就喺你右手邊」）。\n\n二、大型室內商場立體導覽公式：\n１．垂直樓層轉換：【搭扶手電梯 / 搭升降機 ＋ 上 / 落 ＋ 樓層】。\n- 例如：「搭扶手電梯上一樓」（搭手扶梯上一樓）。\n２．中庭與走廊穿梭：【行過 ＋ 中庭 / 走廊】。\n- 例如：「穿過中庭，客服中心就喺斜對面」。",
      "examples": [
        {
          "target": "你由中環站Ｄ出口行出嚟之後一路直行，過咗皇后大道中轉右，大館就喺你左手邊。",
          "reading": "nei5 jau4 zung1 waan4 zaam6 D ceot1 hau2 haang4 ceot1 lai4 zi1 hau6 jat1 lou6 zik6 haang4, gwo3 zo2 wong4 hau6 daai6 dou6 zung1 zyun3 jau6, daai6 gun2 zau6 hai2 nei5 zo2 sau2 bin1. [nei˩˧ jɐu˨˩ tsʊŋ˥ waːn˨˩ tsaːm˨ tiː˥ tsʰɵt̚˥ hɐu˧˥ haːŋ˨˩ tsʰɵt̚˥ lɐi˨˩ tsiː˥ hɐu˨ jɐt̚˥ lou˨ tsɪk̚˨ haːŋ˨˩, kʷɔː˧ tsɔː˧˥ wɔːŋ˨˩ hɐu˨ taːi˨ tou˨ tsʊŋ˥ tsyn˧ jɐu˨, taːi˨ kuːn˧˥ tsɐu˨ hɐi˩˧ nei˩˧ tsɔː˧˥ sɐu˧˥ piːn˥] (NEI YAU JOONG-WAHN JAHM D CHUT-HAU HAHNG-CHUT-LY JEE-HAU YUT-LOU JIK-HAHNG, GWOR-JOR WONG-HAU DY-DOU-JOONG JUEN-YAU, DY-GOON JAU HY NEI JOH-SAU-BEEN)",
          "translation": "After you walk out from Central Station Exit D, walk straight ahead all the way; after passing Queen's Road Central turn right, and Tai Kwun will be on your left-hand side."
        },
        {
          "target": "行入商場大堂搭扶手電梯上三樓，行過中間個圓形中庭，戲院就喺斜對面。",
          "reading": "haang4 jap6 soeng1 coeng4 daai6 tong4 daap3 fu4 sau2 din6 tai1 soeng5 saam1 lau4, haang4 gwo3 zung1 gaan1 go3 jyun4 jing4 zung1 ting4, hei3 jyun4*2 zau6 hai2 ce4 deoi3 min6. [haːŋ˨˩ jɐp̚˨ sœːŋ˥ tsʰœːŋ˨˩ taːi˨ tʰɔːŋ˨˩ taːp̚˧ fuː˨˩ sɐu˧˥ tiːn˨ tʰɐi˥ sœːŋ˩˧ saːm˥ lɐu˨˩, haːŋ˨˩ kʷɔː˧ tsʊŋ˥ kaːn˥ kɔː˧ jyːn˨˩ jɪŋ˨˩ tsʊŋ˥ tʰɪŋ˨˩, hei˧ jyːn˧˥ tsɐu˨ hɐi˩˧ tsʰɛː˩˧ tɵy˧ miːn˨] (HAHNG-YUP SEUNG-CHEUNG DY-TONG DAHP FOO-SAU-DEEN-TY SEUNG SAHM-LAU, HAHNG-GWOR JOONG-GAHN GOH YUEN-YING JOONG-TING, HEY-YUEN JAU HY CHEH-DEOY-MEEN)",
          "translation": "Walk into the shopping mall lobby, take the escalator up to the 3rd floor, walk past the round atrium in the middle, and the cinema is diagonally opposite."
        },
        {
          "target": "如果您喺呢度直行到海旁轉左，沿住星光大道一路行，就可以睇到成個維港夜景。",
          "reading": "jyu4 gwo2 nei5 hai2 ni1 dou6 zik6 haang4 dou3 hoi2 pong4 zyun3 zo2, jyun4 zyu6 sing1 gwong1 daai6 dou6 jat1 lou6 haang4, zau6 ho2 ji5 tai2 dou2 seng4 go3 wai4 gong2 je6 ging2. [jyː˨˩ kʷɔː˧˥ nei˩˧ hɐi˩˧ niː˥ tou˨ tsɪk̚˨ haːŋ˨˩ tou˧ hɔːi˧˥ pʰɔːŋ˨˩ tsyn˧ tsɔː˧˥, jyːn˨˩ tsyː˨ sɪŋ˥ kʷɔːŋ˥ taːi˨ tou˨ jɐt̚˥ lou˨ haːŋ˨˩, tsɐu˨ hɔː˧˥ jiː˩˧ tʰɐi˧˥ tou˧˥ sɛːŋ˨˩ kɔː˧ wɐi˨˩ kɔːŋ˧˥ jɛː˨ kɪŋ˧˥] (YUE-GWOR NEI HY NEE-DOU JIK-HAHNG DOU HOY-PONG JUEN-JOH, YUEN-JYE SING-GWONG-DY-DOU YUT-LOU HAHNG, JAU HOH-YEE TY-DOU SENG-GOH WY-GONG YEH-GING)",
          "translation": "If you walk straight from here to the seafront and turn left, walking all along the Avenue of Stars, you will be able to see the entire Victoria Harbour night view."
        }
      ],
      "mnemonics": [
        "【尋路四步曲】由起點行出嚟，一路直行過街口；轉左轉右睇地標，左右兩邊見目標！"
      ],
      "culturalNotes": [
        "香港街區立體天橋網絡（如中區行人天橋系統、旺角行人天橋系統）極為發達，因此粵語指路常結合「上一層天橋」、「落地下」等立體維度，體現出三維立體尋路之都市特點。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【路線指引】指引「走出手鐵站出口後一直往前走」，地道粵語語句係：",
          "options": [
            "行出地鐵站出口之後一路直行。 (haang4 ceot1 ... jat1 lou6 zik6 haang4)",
            "行入地鐵站出口之後一路轉左。) (Context: 複雜空間指引與路線拓撲綜合實戰：從室內導覽到街區尋路 (Route N)",
            "行過地鐵站出口之後一路坐低。) (Context: 複雜空間指引與路線拓撲綜合實戰：從室內導覽到街區尋路 (Route N)",
            "行落地鐵站出口之後一路停低。) (Context: 複雜空間指引與路線拓撲綜合實戰：從室內導覽到街區尋路 (Route N)"
          ],
          "answerIndex": 0,
          "explanation": "「行出……之後一路直行」為標準出發直線位移引導句式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【室內樓層轉換】在大型商場引導顧客「乘搭手扶電梯上二樓」，應講：",
          "options": [
            "搭扶手電梯上二樓 (daap3 fu4 sau2 din6 tai1 soeng5 ji6 lau4)",
            "搭扶手電梯落二樓) (Context: 複雜空間指引與路線拓撲綜合實戰：從室內導覽到街區尋路 (Route N)",
            "搭扶手電梯出二樓) (Context: 複雜空間指引與路線拓撲綜合實戰：從室內導覽到街區尋路 (Route N)",
            "搭扶手電梯入二樓) (Context: 複雜空間指引與路線拓撲綜合實戰：從室內導覽到街區尋路 (Route N)"
          ],
          "answerIndex": 0,
          "explanation": "由低層前往高層，使用趨向動詞「上」（上一樓、上二樓）。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【綜合指引】句子「過咗交通燈位轉右，診所就喺你右手邊」，其中各成分之指引邏輯為：",
          "options": [
            "地標參照（交通燈位）＋ 動作轉向（轉右）＋ 終點方位定位（右手邊） (該句完整展示了路標參照、方向轉折與目標終點坐標之完整導覽結構。) (複雜空間指引與路線拓撲綜合實戰：從室內導覽到街區尋路 (Route Navigation Mastery))",
            "時間判斷 ＋ 速度限制 ＋ 費用計算) (Context: 複雜空間指引與路線拓撲綜合實戰：從室內導覽到街區尋路 (Route N)",
            "人物介紹 ＋ 年齡說明 ＋ 職業交代) (Context: 複雜空間指引與路線拓撲綜合實戰：從室內導覽到街區尋路 (Route N)",
            "菜單推薦 ＋ 價格說明 ＋ 口味評估) (Context: 複雜空間指引與路線拓撲綜合實戰：從室內導覽到街區尋路 (Route N)"
          ],
          "answerIndex": 0,
          "explanation": "該句完整展示了路標參照、方向轉折與目標終點坐標之完整導覽結構。"
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
    "title": "申明、提醒與既成事態助詞：「喇 / 啦」、「囉」、「呀嘛」 (Evidential & State Particles)",
    "level": "B2",
    "objective": "掌握粵語核心句尾語氣助詞「喇（新事態實現）」、「囉（顯而易見/理所當然）」與「呀嘛（提醒共有認知/反問確認）」之語氣特徵與聲調語用。",
    "presentation": {
      "explanation": "句尾語氣助詞（Sentence-Final Particles, SFPs）係粵語語法之靈魂，賦予句子極為精微之認識情態、信息來源與人際互動色彩：\n\n一、「喇 / 啦」（laa3，高平變調/中平調）：新事態成立與既成事實標記：\n１．表示某種新情況已經發生或即將實現（相當於普通話『了』）：\n- 「我食飽喇」（我吃飽了，狀態轉變）。\n- 「時間到喇」（時間到了，階段終結）。\n- 「落雨喇」（下雨了，新氣象出現）。\n\n二、「囉」（lo1，高平調）：顯而易見、理所當然與因果推論：\n１．表示結論顯而易見，毋庸置疑，或事態順理成章：\n- 「唔返工咪冇人工囉」（不上班自然就沒有薪水了）。\n- 「係噉㗎囉」（事實本來就是這樣嘛）。\n- 「咁你問佢咪得囉」（那你直接問他不就行了嗎）。\n\n三、「呀嘛」（aa3 maa3，雙音節複合助詞）：共有知識提醒與反詰確認：\n１．提醒對方注意彼此皆已知曉之事實，或尋求對方之理所當然認同：\n- 「你知㗎嘛」（你是知道這件事的呀，何必多問）。\n- 「佢係我老細呀嘛」（他是我老闆呀，我怎能拒絕）。\n- 「今日星期日呀嘛」（今天可是星期日呀）。",
      "examples": [
        {
          "target": "經過成個月嘅加班籌備，我哋個新產品發佈會終於順利搞掂喇！",
          "reading": "ging1 gwo3 seng4 go3 jyut6 ge3 gaa1 baan1 cau4 bei6, ngo5 dei6 go3 san1 caan2 faat3 bou3 wui6*2 zung1 jyu1 seon6 lei6 gaau2 dim6 laa3! [kɪŋ˥ kʷɔː˧ sɛːŋ˨˩ kɔː˧ jyːt̚˨ kɛː˧ kaː˥ paːn˥ tsʰɐu˨˩ pei˨, ŋɔː˩˧ tei˨ kɔː˧ sɐn˥ tsʰaːn˧˥ faːt̚˧ pou˧ wuːi˨ tsʊŋ˥ jyː˥ sɵn˨ lei˨ kaːu˧˥ tiːm˨ laː˧!] (GING-GWOR SENG-GOH YUET GEH GAH-BAHN CHAU-BAY, NGOH-DAY GOH SUN-CHAAN FAHT-BOU-WUI JOONG-YUE SEUN-LEY GAU-DEEM LAH!)",
          "translation": "After a whole month of overtime preparation, our new product launch conference is finally smoothly settled!"
        },
        {
          "target": "你平時唔好好溫書複習，到考試嗰陣成績唔理想，好正常囉。",
          "reading": "nei5 ping4 si4 m4 hou2 hou2 wan1 syu1 fuk1 zaap6, dou3 haau2 si3 go2 zan6 sing4 zik1 m4 lei5 soeng2, hou2 zing3 soeng4 lo1. [nei˩˧ pʰɪŋ˨˩ siː˨˩ m̩˨˩ hou˧˥ hou˧˥ wɐn˥ syː˥ fʊk̚˥ tsaːp̚˨, tou˧ haːu˧˥ siː˧ kɔː˧˥ tsɐn˨ sɪŋ˨˩ tsɪk̚˥ m̩˨˩ lei˩˧ sœːŋ˧˥, hou˧˥ tsɪŋ˧ sœːŋ˨˩ lɔː˥] (NEI PING-SEE M-HOH-HOH WUN-SYU FOOK-JAHK, DOU HAU-SEE GOH-JUN SING-JIK M-LY-SEUNG, HOH JING-SEUNG LOH)",
          "translation": "If you don't study and review diligently during normal times, having poor exam results when tests come is only natural."
        },
        {
          "target": "你唔好逼佢食辣椒啦，佢由細到大都食唔得辣㗎嘛！",
          "reading": "nei5 m4 hou2 bik1 keoi5 sik6 laat6 ziu1 laa1, keoi5 jau4 sai3 dou3 daai6 dou1 sik6 m4 dak1 laat6 gaa3 maa3! [nei˩˧ m̩˨˩ hou˧˥ pɪk̚˥ kʰɵy˩˧ sɪk̚˨ laːt̚˨ tsiːu˥ laː˥, kʰɵy˩˧ jɐu˨˩ sɐi˧ tou˧ taːi˨ tou˥ sɪk̚˨ m̩˨˩ tɐk̚˥ laːt̚˨ kaː˧ maː˧] (NEI M-HOH BIK KUY SIK LAHT-JEW LAH, KUY YAU-SY-DOU-DY DOH SIK-M-DUK LAHT GAH-MAH!)",
          "translation": "Don't force him to eat hot chili peppers; he has never been able to eat spicy food since childhood, as you well know!"
        }
      ],
      "mnemonics": [
        "【事態三助詞】事態轉變用「喇」字，理所當然講個「囉」；共有常識「呀嘛」提，語氣生動最地道！"
      ],
      "culturalNotes": [
        "粵語語氣助詞多達三十多個，承載了母語者細膩的情感與社交分寸。「囉」（lo1）常帶有輕微之調侃或無奈接受，而「呀嘛」（aa3 maa3）則在委婉提醒對方的同時維持了說話雙方的共同心理紐帶。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【理所當然】欲表達「如果你努力工作，自然就能賺到錢，這是理所當然的」，結尾語氣詞應為：",
          "options": [
            "自然就賺到錢囉！ (lo1 / Naturally / Obviously)",
            "自然就賺到錢咩？) (Context: 申明、提醒與既成事態助詞：「喇 / 啦」、「囉」、「呀嘛」 (Evid)",
            "自然就賺到錢啫？) (Context: 申明、提醒與既成事態助詞：「喇 / 啦」、「囉」、「呀嘛」 (Evid)",
            "自然就賺到錢喎？) (Context: 申明、提醒與既成事態助詞：「喇 / 啦」、「囉」、「呀嘛」 (Evid)"
          ],
          "answerIndex": 0,
          "explanation": "「囉」（lo1）表示理所當然、顯而易見之因果必然性。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【常識提醒】提醒朋友「今天是公眾假期，銀行不開門是大家都知道的事實」，應講：",
          "options": [
            "今日係假期，銀行唔開門㗎嘛。 (aa3 maa3 / As you well know)",
            "今日係假期，銀行唔開門囉。) (Context: 申明、提醒與既成事態助詞：「喇 / 啦」、「囉」、「呀嘛」 (Evid)",
            "今日係假期，銀行唔開門咩。) (Context: 申明、提醒與既成事態助詞：「喇 / 啦」、「囉」、「呀嘛」 (Evid)",
            "今日係假期，銀行唔開門喎。) (Context: 申明、提醒與既成事態助詞：「喇 / 啦」、「囉」、「呀嘛」 (Evid)"
          ],
          "answerIndex": 0,
          "explanation": "「㗎嘛 / 呀嘛」用以提醒對方共有之常識或背景信息。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語氣功能】短語「時間到喇」（si4 gaan3 dou3 laa3）中，「喇」之核心語法功能係：",
          "options": [
            "標註新事態之成立與實現 (Realization of New State)",
            "表示強烈質疑反問) (Context: 申明、提醒與既成事態助詞：「喇 / 啦」、「囉」、「呀嘛」 (Evid)",
            "表示主觀輕視與忽略) (Context: 申明、提醒與既成事態助詞：「喇 / 啦」、「囉」、「呀嘛」 (Evid)",
            "表示引用他人傳聞) (Context: 申明、提醒與既成事態助詞：「喇 / 啦」、「囉」、「呀嘛」 (Evid)"
          ],
          "answerIndex": 0,
          "explanation": "「喇」（laa3）作為句尾助詞，核心功能為標註事態轉變或階段性完成。"
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
    "title": "疑問、確證與探詢反問助詞：「咩」、「喎」、「可」 (Inquisitive & Hearsay Particles)",
    "level": "B2",
    "objective": "掌握粵語反詰驚異助詞「咩（質疑反問）」、傳聞引述助詞「喎（聽說傳聞/驚奇發現）」與求證附加助詞「可（尋求確認）」之語用場景。",
    "presentation": {
      "explanation": "粵語在信息來源（言據性 Evidentiality）與反詰求證上有極為精準之專屬助詞：\n\n一、「咩」（me1，高平調）：反詰質疑與出乎意料：\n１．表示說話者對某事感到意外、震驚或表示強烈懷疑反問：\n- 「真係咩？」（真的是這樣嗎？！）。\n- 「佢冇話你知咩？」（他沒有告訴你嗎？！我以為他早說了）。\n- 「你唔去咩？」（難道你竟然不去嗎？）。\n\n二、「喎 / 啝」（wo3/wo5，中平調/高平調）：傳聞引述與新奇發現：\n１．傳聞引述（言據標記，wo3）：表示信息轉述自他人，自己不作絕對擔保：\n- 「天文台話聽日會掛八號風球喎」（天文台說明天會掛八號風球呢）。\n２．新奇驚異發現（wo5）：表示說話者剛剛意外目睹新情況：\n- 「原來你都喺度喎！」（原來你也在這裡呀！）。\n\n三、「可」（ho2，高平調/陰平調）：徵詢認同與求證附加問：\n１．相當於英文 Tag Question（'..., right?'），置於句尾尋求對方確證：\n- 「你今晚得閒嘅，可？」（你今晚有空吧，對不對？）。\n- 「呢個字讀『粵』，可？」（這個字唸『粵』，對吧？）。",
      "examples": [
        {
          "target": "佢咁大個人，連最基本嘅乘數表都唔識，唔係真係咁誇張咩？",
          "reading": "keoi5 gam3 daai6 go3 jan4, lin4 zeoi3 gei1 bun2 ge3 sing4 sou3 biu2 dou1 m4 sik1, m4 hai6 zan1 hai6 gam3 kwaa1 zoeng1 me1? [kʰɵy˩˧ kɐm˧ taːi˨ kɔː˧ jɐn˨˩, liːn˨˩ tsɵy˧ kei˥ puːn˧˥ kɛː˧ sɪŋ˨˩ sou˧ piːu˧˥ tou˥ m̩˨˩ sɪk̚˥, m̩˨˩ hɐi˨ tsɐn˥ hɐi˨ kɐm˧ kʰwaː˥ tsœːŋ˥ mɛː˥?] (KUY GUM DY-GOH-YUN, LEEN JEOY GAY-BOON GEH SING-SOU-BEW DOH M-SIK, M-HY JUN-HY GUM KWAH-JEUNG MEH?)",
          "translation": "He is such an adult and doesn't even know the basic multiplication table; isn't that really too exaggerated?!"
        },
        {
          "target": "聽新聞報導講，政府下個月開始會派發新一輪嘅電子消費券喎。",
          "reading": "teng1 san1 man4 bou3 dou6 gong2, zing3 fu2 haa6 go3 jyut6 hoi1 ci2 wui5 paai3 faat3 san1 jat1 leon4 ge3 din6 zi2 siu1 fai3 gyun3 wo3. [tʰɛːŋ˥ sɐn˥ mɐn˨˩ pou˧ tou˨ kɔːŋ˧˥, tsɪŋ˧ fuː˧˥ haː˨ kɔː˧ jyːt̚˨ hɔːi˥ tsʰiː˧˥ wui˩˧ pʰaːi˧ faːt̚˧ sɐn˥ jɐt̚˥ lɵn˨˩ kɛː˧ tiːn˨ tsiː˧˥ siːu˥ fɐi˧ kyːn˧ wɔː˧] (TENG SUN-MUN BOU-DOU GONG, JING-FOO HAH-GOH-YUET HOI-CHEE WUI PY-FAHT SUN-YUT-LEON GEH DEEN-JEE SIU-FY-GUEN WOH)",
          "translation": "Listening to the news reports, the government will begin distributing a new round of electronic consumption vouchers next month."
        },
        {
          "target": "我哋下個禮拜一齊去大嶼山行山睇日落，你都會一齊去嘅，可？",
          "reading": "ngo5 dei6 haa6 go3 lai5 baai3 jat1 cai4 heoi3 daai6 jyu4 saan1 haang4 saan1 tai2 jat6 lok6, nei5 dou1 wui5 jat1 cai4 heoi3 ge3, ho2? [ŋɔː˩˧ tei˨ haː˨ kɔː˧ lɐi˩˧ paːi˧ jɐt̚˥ tsʰɐi˨˩ hɵy˧ taːi˨ jyː˨˩ saːn˥ haːŋ˨˩ saːn˥ tʰɐi˧˥ jɐt˨ lɔːk̚˨, nei˩˧ tou˥ wui˩˧ jɐt̚˥ tsʰɐi˨˩ hɵy˧ kɛː˧, hɔː˧˥?] (NGOH-DAY HAH-GOH LY-BY YUT-CHY HOEY DY-YUE-SAHN HAHNG-SAHN TY YUT-LOK, NEI DOH WUI YUT-CHY HOEY GEH, HOH?)",
          "translation": "We are going hiking on Lantau Island to watch the sunset together next week; you will come along too, right?"
        }
      ],
      "mnemonics": [
        "【質疑傳聞訣】反詰驚訝用個「咩」，轉述傳聞講句「喎」；向人求證加「可」字，探詢反問最清楚！"
      ],
      "culturalNotes": [
        "「咩」（me1）帶有強烈的情感張力，若對長輩或上司使用過多可能顯得不敬或具挑戰性。「喎」（wo3）作為言據標記，在香港職場中轉達指令時常能有效釐清責任邊界（如『老細話聽日要交喎』）。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【驚訝反問】聽到令人難以置信的消息時，反問「真的是這樣嗎？！難道真的會這樣？」，應講：",
          "options": [
            "真係噉咩？！ (me1 / Rhetorical surprise)",
            "真係噉囉？！) (Context: 疑問、確證與探詢反問助詞：「咩」、「喎」、「可」 (Inquisiti)",
            "真係噉啫？！) (Context: 疑問、確證與探詢反問助詞：「咩」、「喎」、「可」 (Inquisiti)",
            "真係噉可？！) (Context: 疑問、確證與探詢反問助詞：「咩」、「喎」、「可」 (Inquisiti)"
          ],
          "answerIndex": 0,
          "explanation": "「咩」（me1）表示出乎意料之強烈反問與懷疑。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【轉述傳聞】向朋友轉達「我聽經理說下星期要全體加班」，客觀轉述助詞應為：",
          "options": [
            "經理話下個禮拜要加班喎。 (wo3 / Hearsay reporting)",
            "經理話下個禮拜要加班咩。) (Context: 疑問、確證與探詢反問助詞：「咩」、「喎」、「可」 (Inquisiti)",
            "經理話下個禮拜要加班啫。) (Context: 疑問、確證與探詢反問助詞：「咩」、「喎」、「可」 (Inquisiti)",
            "經理話下個禮拜要加班可。) (Context: 疑問、確證與探詢反問助詞：「咩」、「喎」、「可」 (Inquisiti)"
          ],
          "answerIndex": 0,
          "explanation": "「喎」（wo3）用於轉述第三方言論或傳聞消息。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【求證附加問】句子「份報告聽日交嘅，可？」（ho2）中，「可」之功能相當於英語中之：",
          "options": [
            "附加疑問句標記（Tag Question，如 '..., right?'） (Seeking confirmation)",
            "動態完成標記（如 'already'）) (Context: 疑問、確證與探詢反問助詞：「咩」、「喎」、「可」 (Inquisiti)",
            "條件連詞（如 'if'）) (Context: 疑問、確證與探詢反問助詞：「咩」、「喎」、「可」 (Inquisiti)",
            "否定副詞（如 'never'）) (Context: 疑問、確證與探詢反問助詞：「咩」、「喎」、「可」 (Inquisiti)"
          ],
          "answerIndex": 0,
          "explanation": "「可」（ho2）置於句尾，功能為向對方尋求肯定與確認（..., right?）。"
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
    "title": "主觀限止、輕描淡寫與強調本質助詞：「啫」、「㗎」 (Limitative & Inherent Particles)",
    "level": "B2",
    "objective": "掌握粵語主觀縮小限定助詞「啫（只不過/僅僅）」與本質屬性申述助詞「㗎（本質固有/向來如此）」之深層語言學功能。",
    "presentation": {
      "explanation": "「啫」與「㗎」在粵語語氣體系中分別承擔「主觀縮小限止」與「本質屬性確認」之核心功能：\n\n一、「啫」（ze1，高平調）：主觀限止、輕描淡寫與縮小範圍：\n１．表示事物數量少、程度輕、微不足道或意在安撫對方（相當於『只不過是……罷了』）：\n- 「玩下啫」（只是開開玩笑罷了，別介意）。\n- 「幾十蚊啫」（只不過幾十塊錢而已，不貴）。\n- 「我問下啫」（我只是隨口問問罷了）。\n- 「小事嚟啫」（只是一件小事而已）。\n\n二、「㗎」（gaa3，中平調/高平調）：本質屬性、固有特徵與恆常規律：\n１．源自「嘅（ge3）＋ 呀（aa3）」之合音，表示事物的本質特徵、恆常規律或固有事實：\n- 「佢係我阿哥嚟㗎」（他本來就是我的親哥哥，固有身份）。\n- 「呢間餐廳星期一唔開㗎」（這家餐廳向來週一都不營業，恆常規律）。\n- 「火係好熱㗎」（火本質上就是燙的，客觀規律）。",
      "examples": [
        {
          "target": "大家同事一場，頭先開會講多兩句都係為工作啫，你千萬唔好擺喺心上。",
          "reading": "daai6 gaa1 tung4 si6 jat1 coeng4, tau4 sin1 hoi1 wui6*2 gong2 do1 loeng5 geui3 dou1 hai6 wai6 gung1 zok3 ze1, nei5 cin1 maan6 m4 hou2 baai2 hai2 sam1 soeng6. [taːi˨ kaː˥ tʰʊŋ˨˩ siː˨ jɐt̚˥ tsʰœːŋ˨˩, tʰɐu˨˩ siːn˥ hɔːi˥ wuːi˨ kɔːŋ˧˥ tɔː˥ lœːŋ˩˧ kɵy˧ tou˥ hɐi˨ wɐi˨ kʊŋ˥ tsɔːk̚˧ tsɛː˥, nei˩˧ tsʰiːn˥ maːn˨ m̩˨˩ hou˧˥ paːi˧˥ hɐi˩˧ sɐm˥ sœːŋ˨] (DY-GAH TOONG-SEE YUT-CHEUNG, TAU-SEEN HOI-WUI GONG DOH LEUNG-GOEY DOH HY WAI GONG-JOK JEH, NEI CHEEN-MAHN M-HOH BAAI HY SUM-SEUNG)",
          "translation": "We are all colleagues; saying a few more words in the meeting just now was only for the work, please don't take it to heart at all."
        },
        {
          "target": "呢度係全港最繁華嘅商業核心區，寫字樓租金一向都好貴㗎！",
          "reading": "ni1 dou6 hai6 cyun4 gong2 zeoi3 faan4 waa4 ge3 soeng1 jip6 hat6 sam1 keoi1, se2 zi6 lau4 zou1 gam1 jat1 hoeng3 dou1 hou2 gwai3 gaa3! [niː˥ tou˨ hɐi˨ tsʰyːn˨˩ kɔːŋ˧˥ tsɵy˧ faːn˨˩ waː˨˩ kɛː˧ sœːŋ˥ jiːp̚˨ hɐt̚˨ sɐm˥ kʰɵy˥, sɛː˧˥ tsiː˨ lɐu˨˩ tsou˥ kɐm˥ jɐt̚˥ hœːŋ˧ tou˥ hou˧˥ kʷɐi˧ kaː˧!] (NEE-DOU HY CHUEN-GONG JEOY FAHN-WAH GEH SEUNG-YIP HUK-SUM-KUY, SEH-JEE-LAU JOU-GUM YUT-HEUNG DOH HOH-GWY GAH!)",
          "translation": "This is the most prosperous commercial core district in Hong Kong; office rents have always inherently been very expensive!"
        },
        {
          "target": "我都係買咗兩杯奶茶同兩件蛋撻啫，使唔使咁大驚小怪呀？",
          "reading": "ngo5 dou1 hai6 maai5 zo2 loeng5 bui1 naai5 caa4 tung4 loeng5 gin6 daan6*2 taat1 ze1, sai2 m4 sai2 gam3 daai6 ging1 siu2 gwaai3 aa3? [ŋɔː˩˧ tou˥ hɐi˨ maːi˩˧ tsɔː˧˥ lœːŋ˩˧ puːi˥ naːi˩˧ tsʰaː˨˩ tʰʊŋ˨˩ lœːŋ˩˧ kiːn˨ taːn˧˥ tʰaːt̚˧ tsɛː˥, sɐi˧˥ m̩˨˩ sɐi˧˥ kɐm˧ taːi˨ kɪŋ˥ siu˧˥ kʷaːi˧ aː˧?] (NGOH DOH HY MY-JOR LEUNG-BOOY NY-CHAH TOONG LEUNG-GEEN DAHN-TAHT JEH, SY-M-SY GUM DY-GING-SIU-GWY AH?)",
          "translation": "I only just bought two cups of milk tea and two egg tarts; is there any need to make such a big fuss?"
        }
      ],
      "mnemonics": [
        "【輕描本質訣】輕描淡寫加個「啫」，本質固有講個「㗎」；只係小事何須燥，語氣分明境界高！"
      ],
      "culturalNotes": [
        "「啫」（ze1）在化解人際矛盾與緩和緊張氣氛時扮演關鍵角色。當對方道歉時，一句「小事嚟啫，唔緊要啦」能瞬間拉近彼此距離，展現出嶺南文化之豁達與包容。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【輕描淡寫】安慰朋友「這只是一件微不足道的小事，別放在心上」，地道結尾語氣詞係：",
          "options": [
            "小事嚟啫。 (ze1 / Merely / Just a small matter)",
            "小事嚟㗎。) (Context: 主觀限止、輕描淡寫與強調本質助詞：「啫」、「㗎」 (Limitativ)",
            "小事嚟咩。) (Context: 主觀限止、輕描淡寫與強調本質助詞：「啫」、「㗎」 (Limitativ)",
            "小事嚟囉。) (Context: 主觀限止、輕描淡寫與強調本質助詞：「啫」、「㗎」 (Limitativ)"
          ],
          "answerIndex": 0,
          "explanation": "「啫」（ze1）用於輕描淡寫、主觀縮小嚴重性。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【本質特徵】向外地朋友解釋「香港夏天向來都非常炎熱多雨（固有規律）」，應講：",
          "options": [
            "香港夏天好熱㗎。 (gaa3 / Inherent permanent fact)",
            "香港夏天好熱啫。) (Context: 主觀限止、輕描淡寫與強調本質助詞：「啫」、「㗎」 (Limitativ)",
            "香港夏天好熱咩。) (Context: 主觀限止、輕描淡寫與強調本質助詞：「啫」、「㗎」 (Limitativ)",
            "香港夏天好熱可。) (Context: 主觀限止、輕描淡寫與強調本質助詞：「啫」、「㗎」 (Limitativ)"
          ],
          "answerIndex": 0,
          "explanation": "「㗎」（gaa3）表示本質固有事實與規律。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【對比辨析】句子Ａ「我問下啫」與句子Ｂ「我問下㗎」之語法語氣核心差別係：",
          "options": [
            "句子Ａ強調『只是隨口問問、別介意』，句子Ｂ強調『問問題是我的固有習慣或職責』 (「啫」表縮小輕描淡寫，「㗎」表固有特徵或慣常做法。) (主觀限止、輕描淡寫與強調本質助詞：「啫」、「㗎」 (Limitative & Inherent Particles))",
            "句子Ａ表示憤怒，句子Ｂ表示高興) (Context: 主觀限止、輕描淡寫與強調本質助詞：「啫」、「㗎」 (Limitativ)",
            "句子Ａ是疑問句，句子Ｂ是祈使句) (Context: 主觀限止、輕描淡寫與強調本質助詞：「啫」、「㗎」 (Limitativ)",
            "兩者毫無語義差別) (Context: 主觀限止、輕描淡寫與強調本質助詞：「啫」、「㗎」 (Limitativ)"
          ],
          "answerIndex": 0,
          "explanation": "「啫」表縮小輕描淡寫，「㗎」表固有特徵或慣常做法。"
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
    "title": "規勸、催促與商榷請求助詞：「啦」、「喇喎」、「罷啦」 (Directives & Warnings)",
    "level": "B2",
    "objective": "掌握粵語祈使祈請助詞「啦（緩和請求/催促）」、警示轉折助詞「喇喎（即將逾期警示）」與無奈放棄助詞「罷啦（算了罷了）」之語用規範。",
    "presentation": {
      "explanation": "在人際互動與指令傳達中，粵語運用專屬助詞來調節祈使語氣之強弱、發出警示或表達無奈妥協：\n\n一、「啦」（laa1，陰平高平調）：溫和祈請、催促與建議：\n１．弱化命令之生硬感，使請求更具親和力或迫切催促：\n- 「快啲行啦」（快點走吧，催促）。\n- 「幫幫手啦」（幫幫忙吧，懇求）。\n- 「食多件點心啦」（多吃一件點心吧，熱情招待）。\n\n二、「喇喎」（laa3 wo3，複合警示助詞）：事態迫近與即將轉折警示：\n１．提醒對方當前情況已接近臨界點，若不採取行動將產生不良後果：\n- 「就嚟遲到喇喎」（快要遲到了哦，小心警示）。\n- 「就快落大雨喇喎」（快要下大雨了哦）。\n- 「再唔買就賣晒喇喎」（再不買就全部售罄了哦）。\n\n三、「罷啦」（baa6 laa1，複合放棄助詞）：無奈放棄、妥協與任由發展：\n１．表示事情無法挽回，決定放棄努力或不再追究（相當於『算了罷了』）：\n- 「算罷啦」（算了吧，不再計較）。\n- 「由得佢罷啦」（隨他去吧，別管了）。",
      "examples": [
        {
          "target": "依家已經八點四十五分，再唔出門口就真係會遲到喇喎！",
          "reading": "ji1 gaa1 ji5 ging1 baat3 dim2 sei3 sap6 ng5 fan1, zoi3 m4 ceot1 mun4 hau2 zau6 zan1 hai6 wui5 ci4 dou3 laa3 wo3! [jiː˥ kaː˥ jiː˩˧ kɪŋ˥ paːt̚˧ tiːm˧˥ sei˧ sɐp̚˨ ŋ̩˩˧ fɐn˥, tsɔːi˧ m̩˨˩ tsʰɵt̚˥ muːn˨˩ hɐu˧˥ tsɐu˨ tsɐn˥ hɐi˨ wui˩˧ tsʰiː˨˩ tou˧ laː˧ wɔː˧!] (YEE-GAH YEE-GING BAHT-DEEM SAY-SUP-NG-FUN, JOY M-CHUT MOON-HAU JAU JUN-HY WUI CHEE-DOU LAH-WOH!)",
          "translation": "It is already 8:45 right now; if we still don't head out the door, we will really be late, watch out!"
        },
        {
          "target": "既然大家意見分歧咁大，又傾唔埋欄，不如暫時算罷啦。",
          "reading": "gei3 jin4 daai6 gaa1 ji3 gin3 fan1 kei4 gam3 daai6, jau6 king1 m4 maai4 laan4, bat1 jyu4 zaam6 si4 syun3 baa6 laa1. [kei˧ jiːn˨˩ taːi˨ kaː˥ jiː˧ kiːn˧ fɐn˥ kʰei˨˩ kɐm˧ taːi˨, jɐu˨ kʰɪŋ˥ m̩˨˩ maːi˨˩ laːn˨˩, pɐt̚˥ jyː˨˩ tsaːm˨ siː˨˩ syːn˧ paː˨ laː˥] (GAY-YEEN DY-GAH YEE-GEEN FUN-KEY GUM DY, YAU KING-M-MY-LAHN, BUT-YUE JAHM-SEE SUEN-BAH-LAH)",
          "translation": "Since everyone's difference in opinions is so great and we can't reach an agreement, why not just forget it for now."
        },
        {
          "target": "呢度啲蝦餃好新鮮好彈牙，你趁熱食多粒啦！",
          "reading": "ni1 dou6 di1 haa1 gaau2 hou2 san1 sin1 hou2 daan6 ngaa4, nei5 can3 jit6 sik6 do1 nap1 laa1! [niː˥ tou˨ tiː˥ haː˥ kaːu˧˥ hou˧˥ sɐn˥ siːn˥ hou˧˥ taːn˨ ŋaː˨˩, nei˩˧ tsʰɐn˧ jiːt̚˨ sɪk̚˨ tɔː˥ nɐp̚˥ laː˥!] (NEE-DOU DEE HAH-GAU HOH SUN-SEEN HOH DAHN-NGAH, NEI CHUN-YEET SIK DOH LUP LAH!)",
          "translation": "The shrimp dumplings here are very fresh and bouncy; please eat another one while they are hot!"
        }
      ],
      "mnemonics": [
        "【指令規勸歌】溫和請求加個「啦」，緊迫警示「喇喎」提；無奈放棄講「罷啦」，人際溝通最和宜！"
      ],
      "culturalNotes": [
        "「算罷啦」（算了吧）反映了嶺南人「退一步海闊天空」之處世智慧。在商業談判陷入僵局或日常爭執時，適時使用「算罷啦」有助於避免衝突升級。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【緊迫警示】提醒朋友「末班地鐵快要開走了，再不跑就趕不上了」，應講：",
          "options": [
            "尾班車就嚟開走喇喎！ (laa3 wo3 / Imminent warning)",
            "尾班車就嚟開走罷啦！) (Context: 規勸、催促與商榷請求助詞：「啦」、「喇喎」、「罷啦」 (Directi)",
            "尾班車就嚟開走啫！) (Context: 規勸、催促與商榷請求助詞：「啦」、「喇喎」、「罷啦」 (Directi)",
            "尾班車就嚟開走可！) (Context: 規勸、催促與商榷請求助詞：「啦」、「喇喎」、「罷啦」 (Directi)"
          ],
          "answerIndex": 0,
          "explanation": "「喇喎」（laa3 wo3）用於發出事態迫近之警告。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【放棄妥協】面對無法挽回之失敗局面，表達「算了，別再糾結了」，最地道粵語表達係：",
          "options": [
            "算罷啦。 (syun3 baa6 laa1 / Forget it / Let it be)",
            "算喇喎。) (Context: 規勸、催促與商榷請求助詞：「啦」、「喇喎」、「罷啦」 (Directi)",
            "算咩啦。) (Context: 規勸、催促與商榷請求助詞：「啦」、「喇喎」、「罷啦」 (Directi)",
            "算㗎喎。) (Context: 規勸、催促與商榷請求助詞：「啦」、「喇喎」、「罷啦」 (Directi)"
          ],
          "answerIndex": 0,
          "explanation": "「算罷啦」（syun3 baa6 laa1）表示無奈放棄、不再計較。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語氣對比】祈請助詞「啦」（laa1）與事態助詞「喇」（laa3）之核心語音與語義差異係：",
          "options": [
            "「啦」（laa1，高平調）表請求建議，「喇」（laa3，中平調）表事態完成轉變 (第一聲「啦」（laa1）為祈使祈請助詞，第三聲「喇」（laa3）為既成事態助詞。)",
            "「啦」表否定，「喇」表肯定) (Context: 規勸、催促與商榷請求助詞：「啦」、「喇喎」、「罷啦」 (Directi)",
            "「啦」只能用於書面語，「喇」只能用於口語) (Context: 規勸、催促與商榷請求助詞：「啦」、「喇喎」、「罷啦」 (Directi)",
            "兩者聲調與用法完全相同) (Context: 規勸、催促與商榷請求助詞：「啦」、「喇喎」、「罷啦」 (Directi)"
          ],
          "answerIndex": 0,
          "explanation": "第一聲「啦」（laa1）為祈使祈請助詞，第三聲「喇」（laa3）為既成事態助詞。"
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
    "title": "複合語氣助詞疊用與多重層疊語意：「㗎喇」、「嘅啫」、「啫嘛」、「㗎喎」 (Compound Particle Stacking)",
    "level": "B2",
    "objective": "掌握粵語複合語氣助詞多重疊用機制（㗎喇、嘅啫、啫嘛、㗎喎）之語義合成公式與頂級母語者語感精準實戰。",
    "presentation": {
      "explanation": "粵語語氣助詞最精妙之處在於可將兩個或三個助詞依序疊加，合成出極為立體多維之語氣效果：\n\n一、四大金牌複合助詞矩陣：\n１．「㗎喇」（gaa3 laa3 = 㗎 + 喇）：【本質事實 ＋ 既成事態成立】。\n- 表示某種原本就具備之屬性，現在已經正式生效或徹底辦妥。\n- 範例：「搞掂㗎喇」（已經完全辦妥搞定了）、「知㗎喇」（早就已經知道了）。\n\n２．「嘅啫」（ge3 ze1 = 嘅 + 啫）：【解釋說明 ＋ 主觀縮小限止】。\n- 用於向對方解釋原因，同時申明這只是微不足道之事，不必大驚小怪。\n- 範例：「我問下嘅啫」（我只是隨口問問解釋一下罷了）。\n\n３．「啫嘛」（ze1 maa3 = 啫 + 嘛）：【縮小限止 ＋ 共有常識/何足掛齒】。\n- 強調程度非常輕微，且這件事顯而易見不值得大驚小怪。\n- 範例：「五分鐘啫嘛」（只不過五分鐘而已嘛，何必著急）。\n- 範例：「十蚊啫嘛」（才十塊錢而已嘛）。\n\n４．「㗎喎」（gaa3 wo3 = 㗎 + 喎）：【固有事實 ＋ 提醒/新奇傳聞】。\n- 提示對方某個不容忽視之固有事實或新奇特徵。\n- 範例：「佢好勁㗎喎」（他其實非常厲害的哦，你可別小看他）。",
      "examples": [
        {
          "target": "你放心啦，所有報關文件我今朝一早就已經全部交齊畀海關搞掂㗎喇！",
          "reading": "nei5 fong3 sam1 laa1, so2 jau5 bou3 gwaan1 man4 gin62 ngo5 gam1 ziu1 jat1 zou2 zau6 ji5 ging1 cyun4 bou6 gaau1 cai4 bei2 hoi2 gwaan1 gaau2 dim6 gaa3 laa3! [nei˩˧ fɔːŋ˧ sɐm˥ laː˥, sɔː˧˥ jɐu˩˧ pou˧ kʷaːn˥ mɐn˨˩ kiːn˧˥ ŋɔː˩˧ kɐm˥ tsiːu˥ jɐt̚˥ tsou˧˥ tsɐu˨ jiː˩˧ kɪŋ˥ tsʰyːn˨˩ pou˨ kaːu˥ tsʰɐi˨˩ pei˨ hɔːi˧˥ kʷaːn˥ kaːu˧˥ tiːm˨ kaː˧ laː˧!] (NEI FONG-SUM LAH, SOH-YAU BOU-GWAHN MUN-GEEN NGOH GUM-JIU YUT-JOU JAU YEE-GING CHUEN-BOU GAU-CHY BAY HOY-GWAHN GAU-DEEM GAH-LAH!)",
          "translation": "Don't worry; all customs declaration documents were already fully submitted to customs and settled early this morning!"
        },
        {
          "target": "遲到幾分鐘啫嘛，唔使發咁大脾氣㗎，大家放鬆啲啦。",
          "reading": "ci4 dou3 gei2 fan1 zung1 ze1 maa3, m4 sai2 faat3 gam3 daai6 pei4 hei3 gaa3, daai6 gaa1 fong3 sung1 di1 laa1. [tsʰiː˨˩ tou˧ kei˧˥ fɐn˥ tsʊŋ˥ tsɛː˥ maː˧, m̩˨˩ sɐi˧˥ faːt̚˧ kɐm˧ taːi˨ pʰei˨˩ hei˧ kaː˧, taːi˨ kaː˥ fɔːŋ˧ sʊŋ˥ tiː˥ laː˥] (CHEE-DOU GAY-FUN-JOONG JEH-MAH, M-SY FAHT GUM DY-PAY-HEY GAH, DY-GAH FONG-SOONG-DEE LAH)",
          "translation": "It's only being late for a few minutes, what's the big deal? There's no need to lose your temper so much; everyone relax a bit."
        },
        {
          "target": "你唔好睇佢平時唔多講嘢，佢以前係全港羽毛球冠軍嚟㗎喎！",
          "reading": "nei5 m4 hou2 tai2 keoi5 ping4 si4 m4 do1 gong2 je5, keoi5 ji5 cin4 hai6 cyun4 gong2 jyu5 mou4 kau4 gun3 gwan1 lai4 gaa3 wo3! [nei˩˧ m̩˨˩ hou˧˥ tʰɐi˧˥ kʰɵy˩˧ pʰɪŋ˨˩ siː˨˩ m̩˨˩ tɔː˥ kɔːŋ˧˥ jɛː˩˧, kʰɵy˩˧ jiː˩˧ tsʰiːn˨˩ hɐi˨ tsʰyːn˨˩ kɔːŋ˧˥ jyː˩˧ mouou˨˩ kʰɐu˨˩ kuːn˧ kʷɐn˥ lɐi˨˩ kaː˧ wɔː˧!] (NEI M-HOH TY KUY PING-SEE M-DOH GONG-YEH, KUY YEE-CHEEN HY CHUEN-GONG YUE-MOU-KAU GOON-GWUN LY GAH-WOH!)",
          "translation": "Don't just look at him not talking much usually; he was actually the all-Hong Kong badminton champion in the past, you know!"
        }
      ],
      "mnemonics": [
        "【疊用助詞訣】辦妥生效「㗎喇」講，隨口解釋「嘅啫」談；微不足道「啫嘛」勸，深藏不露「㗎喎」讚！"
      ],
      "culturalNotes": [
        "複合助詞疊用（如『㗎喇』、『嘅啫』、『啫嘛』）展現了粵語語法高度精準之情緒調控力。掌握助詞疊用，係學習者由中級邁向高級母語者語感之終極分水嶺。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【語氣疊用】向老闆匯報任務時確認「全部工作都已經徹底辦妥無誤了」，最地道複合助詞短語係：",
          "options": [
            "全部搞掂㗎喇！ (gaa3 laa3 / Completely settled already)",
            "全部搞掂嘅啫！ (掌握粵語複合語氣助詞多重疊用機制（㗎喇、嘅啫、啫嘛、㗎喎）之語義合成公式與頂級母語者語感精準實戰。) (複合語氣助詞疊用與多重層疊語意：「㗎喇」、「嘅啫」、「啫嘛」、「㗎喎」 (Compound Particle Stacking))",
            "全部搞掂啫嘛！ (掌握粵語複合語氣助詞多重疊用機制（㗎喇、嘅啫、啫嘛、㗎喎）之語義合成公式與頂級母語者語感精準實戰。) (複合語氣助詞疊用與多重層疊語意：「㗎喇」、「嘅啫」、「啫嘛」、「㗎喎」 (Compound Particle Stacking))",
            "全部搞掂㗎喎！ (掌握粵語複合語氣助詞多重疊用機制（㗎喇、嘅啫、啫嘛、㗎喎）之語義合成公式與頂級母語者語感精準實戰。) (複合語氣助詞疊用與多重層疊語意：「㗎喇」、「嘅啫」、「啫嘛」、「㗎喎」 (Compound Particle Stacking))"
          ],
          "answerIndex": 0,
          "explanation": "「㗎喇」（gaa3 laa3）表示任務已經徹底辦妥並正式生效。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【複合微不足道】向著急的朋友勸解「只不過是等十分鐘而已嘛，何必這麼心急」，應講：",
          "options": [
            "等十分鐘啫嘛。 (ze1 maa3 / Just 10 mins, what's the big deal?)",
            "等十分鐘㗎喇。 (掌握粵語複合語氣助詞多重疊用機制（㗎喇、嘅啫、啫嘛、㗎喎）之語義合成公式與頂級母語者語感精準實戰。) (複合語氣助詞疊用與多重層疊語意：「㗎喇」、「嘅啫」、「啫嘛」、「㗎喎」 (Compound Particle Stacking))",
            "等十分鐘㗎喎。 (掌握粵語複合語氣助詞多重疊用機制（㗎喇、嘅啫、啫嘛、㗎喎）之語義合成公式與頂級母語者語感精準實戰。) (複合語氣助詞疊用與多重層疊語意：「㗎喇」、「嘅啫」、「啫嘛」、「㗎喎」 (Compound Particle Stacking))",
            "等十分鐘嘅可。 (掌握粵語複合語氣助詞多重疊用機制（㗎喇、嘅啫、啫嘛、㗎喎）之語義合成公式與頂級母語者語感精準實戰。) (複合語氣助詞疊用與多重層疊語意：「㗎喇」、「嘅啫」、「啫嘛」、「㗎喎」 (Compound Particle Stacking))"
          ],
          "answerIndex": 0,
          "explanation": "「啫嘛」（ze1 maa3）結合了縮小微不足道與共有認知之勸解語氣。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【多重語氣分析】句子「佢好勁㗎喎」（gaa3 wo3）中，複合助詞之語意合成效果係：",
          "options": [
            "強調對方客觀上具備卓越能力（㗎），同時向聽者發出提示或表達驚嘆（喎） (「㗎」確立本質屬性事實，「喎」承擔提醒聽者注意或傳遞新奇信息之功能。) (複合語氣助詞疊用與多重層疊語意：「㗎喇」、「嘅啫」、「啫嘛」、「㗎喎」 (Compound Particle Stacking))",
            "表示完全否定對方的能力 (掌握粵語複合語氣助詞多重疊用機制（㗎喇、嘅啫、啫嘛、㗎喎）之語義合成公式與頂級母語者語感精準實戰。) (複合語氣助詞疊用與多重層疊語意：「㗎喇」、「嘅啫」、「啫嘛」、「㗎喎」 (Compound Particle Stacking))",
            "表示向對方發出嚴厲批評 (掌握粵語複合語氣助詞多重疊用機制（㗎喇、嘅啫、啫嘛、㗎喎）之語義合成公式與頂級母語者語感精準實戰。) (複合語氣助詞疊用與多重層疊語意：「㗎喇」、「嘅啫」、「啫嘛」、「㗎喎」 (Compound Particle Stacking))",
            "表示疑問求證對方是否具備能力 (掌握粵語複合語氣助詞多重疊用機制（㗎喇、嘅啫、啫嘛、㗎喎）之語義合成公式與頂級母語者語感精準實戰。) (複合語氣助詞疊用與多重層疊語意：「㗎喇」、「嘅啫」、「啫嘛」、「㗎喎」 (Compound Particle Stacking))"
          ],
          "answerIndex": 0,
          "explanation": "「㗎」確立本質屬性事實，「喎」承擔提醒聽者注意或傳遞新奇信息之功能。"
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
    "title": "四大嶺南市井哲學俗語：「食得鹹魚抵得渴」、「邊有咁大隻蛤乸隨街跳」 (Core Cantonese Proverbs)",
    "level": "B2",
    "objective": "掌握嶺南商業市井智慧四大核心俗語（食得鹹魚抵得渴、邊有咁大隻蛤乸隨街跳、執輸行頭慘過敗家、扮豬食老虎）之語源背景與社交語用語境。",
    "presentation": {
      "explanation": "粵語俗語凝結了嶺南人數百年商業航運、市井謀生與務實進取之生活哲學，具備鮮明之形象思維與警世價值：\n\n一、四大核心市井哲學俗語深度矩陣：\n１．「食得鹹魚抵得渴」（sik6 dak1 haam4 jyu4*2 dai2 dak1 hot3）：\n- 語義：既然選擇了某種利益或冒險道路，就必須承擔隨之而來之代價、後果或艱辛。\n- 典故：舊時廣東人以鹹魚下飯，鹹魚極鹹，吃完必然口乾舌燥。比喻「敢作敢當、承擔後果」。\n\n２．「邊有咁大隻蛤乸隨街跳」（bin1 jau5 gam3 daai6 zek3 gap3 naa2 ceoi4 gaai1 tiu3）：\n- 語義：世上哪有不勞而獲、天上掉餡餅之好事？用於警惕防範詐騙與虛幻暴利誘惑。\n- 典故：「蛤乸」（田雞/青蛙）在水田難覓，絕不可能有碩大之肥蛙在繁華大街上隨意亂跳任人捕捉。\n\n３．「執輸行頭慘過敗家」（zap1 syu1 haang4 tau4 caam2 gwo3 baai6 gaa1）：\n- 語義：在競爭中落後於他人、錯失先機，比敗光家產還要令人痛心。體現嶺南人勇於爭先、敏銳捕捉商機之強烈進取心。\n\n４．「扮豬食老虎」（baan6 zyu1 sik6 lou5 fu2）：\n- 語義：故意假裝愚笨無能以麻痺對手，實則暗中積蓄實力、在關鍵時刻一舉制勝（深藏不露之韜晦之策）。",
      "examples": [
        {
          "target": "你當初既然決定自己創業開公司，就要食得鹹魚抵得渴，預咗要日夜捱苦㗎喇。",
          "reading": "nei5 dong1 co1 gei3 jin4 kyut3 ding6 zi6 gei2 cong3 jip6 hoi1 gung1 si1, zau6 jiu3 sik6 dak1 haam4 jyu4*2 dai2 dak1 hot3, jyu6 zo2 jiu3 jat6 je6 ngaai1 fu2 gaa3 laa3. [nei˩˧ tɔːŋ˥ tsʰɔː˥ kei˧ jiːn˨˩ kʰyːt̚˧ tɪŋ˨ tsiː˨ kei˧˥ tsʰɔːŋ˧ jiːp̚˨ hɔːi˥ kʊŋ˥ siː˥, tsɐu˨ jiu˧ sɪk̚˨ tɐk̚˥ haːm˨˩ jyː˧˥ tɐi˧˥ tɐk̚˥ hɔːt̚˧, jyː˨ tsɔː˧˥ jiu˧ jɐt˨ jɛː˨ ŋaːi˥ fuː˧˥ kaː˧ laː˧] (NEI DONG-CHOH GAY-YEEN KUET-DING JEE-GAY CHONG-YIP HOI GONG-SEE, JAU YEW SIK-DUK-HAHM-YUE DY-DUK-HOT, YUE-JOR YEW YUT-YEH NGY-FOO GAH-LAH)",
          "translation": "Since you originally decided to start your own business, you have to endure the consequences of your choice and expect to endure hardships day and night."
        },
        {
          "target": "呢個投資計劃保證每月有三十厘回報？邊有咁大隻蛤乸隨街跳呀，擺明係騙局！",
          "reading": "ni1 go3 tau4 zi1 gai3 waak6 bou2 zing3 mui5 jyut6 jau5 saam1 sap6 lei4 wui4 bou3? bin1 jau5 gam3 daai6 zek3 gap3 naa2 ceoi4 gaai1 tiu3 aa3, baai2 ming4 hai6 pin3 guk6! [niː˥ kɔː˧ tʰɐu˨˩ tsiː˥ kɐi˧ waːk̚˨ pou˧˥ tsɪŋ˧ muːi˩˧ jyːt̚˨ jɐu˩˧ saːm˥ sɐp̚˨ lei˨˩ wuːi˨˩ pou˧? piːn˥ jɐu˩˧ kɐm˧ taːi˨ tsɛːk̚˧ kɐp̚˧ naː˧˥ tsʰɵy˨˩ kaːi˥ tʰiːu˧ aː˧, paːi˧˥ mɪŋ˨˩ hɐi˨ pʰiːn˧ kʊk̚˨!] (NEE-GOH TAU-JEE GAI-WAAK BOU-JING MOOY-YUET YAU SAHM-SUP-LEY WUI-BOU? BEEN-YAU GUM-DY-JEK GUP-NAH CHOEY-GY-TEW AH, BAAI-MING HY PEEN-GOK!)",
          "translation": "This investment scheme guarantees a 30 percent return every month? How could there be such a free lunch lying around? It is obviously a scam!"
        },
        {
          "target": "商場競爭分秒必爭，正所謂執輸行頭慘過敗家，我哋一定要搶先推出新產品。",
          "reading": "soeng1 coeng4 ging6 zaang1 fan1 miu5 bit1 zaang1, zing3 so2 wai6 zap1 syu1 haang4 tau4 caam2 gwo3 baai6 gaa1, ngo5 dei6 jat1 ding6 jiu3 coeng2 sin1 teoi1 ceot1 san1 caan2 ban2. [sœːŋ˥ tsʰœːŋ˨˩ kɪŋ˨ tsaːŋ˥ fɐn˥ miu˧˥ piːt̚˥ tsaːŋ˥, tsɪŋ˧ sɔː˧˥ wɐi˨ tsɐp̚˥ syː˥ haːŋ˨˩ tʰɐu˨˩ tsʰaːm˧˥ kʷɔː˧ paːi˨ kaː˥, ŋɔː˩˧ tei˨ jɐt̚˥ tɪŋ˨ jiu˧ tsʰœːŋ˧˥ siːn˥ tʰɵy˥ tsʰɵt̚˥ sɐn˥ tsʰaːn˧˥ pʰɐn˧˥] (SEUNG-CHEUNG GING-JAHNG FUN-MIU-BIT-JAHNG, JING SOH-WAI JUP-SYU-HAHNG-TAU CHAAM-GWOR-BY-GAH, NGOH-DAY YUT-DING YEW CHEUNG-SEEN TOEY-CHUT SUN-CHAAN-BUN)",
          "translation": "Commercial competition fights for every second; as the saying goes 'missing the lead is worse than ruining the family', we must definitely launch the new product ahead of others."
        }
      ],
      "mnemonics": [
        "【市井四大訣】食得鹹魚抵得渴，邊有蛤乸街上跳；執輸行頭慘敗家，扮豬食虎智謀高！"
      ],
      "culturalNotes": [
        "「食得鹹魚抵得渴」展現了香港人「願賭服輸、務實擔當」之契約精神；「邊有咁大隻蛤乸隨街跳」則係嶺南民間防範金融詐騙之至理名言。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【防騙俗語】面對聲稱「零風險、高回報」之可疑投資宣傳，廣東人最常用之警惕俗語係：",
          "options": [
            "邊有咁大隻蛤乸隨街跳 (No such thing as a free lunch)",
            "食得鹹魚抵得渴) (Context: 四大嶺南市井哲學俗語：「食得鹹魚抵得渴」、「邊有咁大隻蛤乸隨街跳」 ()",
            "執輸行頭慘過敗家) (Context: 四大嶺南市井哲學俗語：「食得鹹魚抵得渴」、「邊有咁大隻蛤乸隨街跳」 ()",
            "扮豬食老虎) (Context: 四大嶺南市井哲學俗語：「食得鹹魚抵得渴」、「邊有咁大隻蛤乸隨街跳」 ()"
          ],
          "answerIndex": 0,
          "explanation": "「邊有咁大隻蛤乸隨街跳」比喻天下沒有免費午餐，警惕提防被騙。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【承擔後果】告誡他人「既然選擇了高風險高回報之路，就要勇於承受隨之而來的壓力」，應引用：",
          "options": [
            "食得鹹魚抵得渴 (If you eat salted fish, endure the thirst)",
            "邊有咁大隻蛤乸隨街跳) (Context: 四大嶺南市井哲學俗語：「食得鹹魚抵得渴」、「邊有咁大隻蛤乸隨街跳」 ()",
            "水過鴨背) (Context: 四大嶺南市井哲學俗語：「食得鹹魚抵得渴」、「邊有咁大隻蛤乸隨街跳」 ()",
            "阿茂整餅) (Context: 四大嶺南市井哲學俗語：「食得鹹魚抵得渴」、「邊有咁大隻蛤乸隨街跳」 ()"
          ],
          "answerIndex": 0,
          "explanation": "「食得鹹魚抵得渴」比喻敢作敢當、承擔自己選擇所帶來的必然代價。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【商戰心態】俗語「執輸行頭慘過敗家」（zap1 syu1 haang4 tau4 caam2 gwo3 baai6 gaa1）所體現之核心精神係：",
          "options": [
            "強烈之搶佔商機與爭先恐後競爭意識 (Urgent competitiveness to seize first-mover advantage)",
            "安貧樂道、與世無爭) (Context: 四大嶺南市井哲學俗語：「食得鹹魚抵得渴」、「邊有咁大隻蛤乸隨街跳」 ()",
            "崇尚奢侈浪費之敗家行為) (Context: 四大嶺南市井哲學俗語：「食得鹹魚抵得渴」、「邊有咁大隻蛤乸隨街跳」 ()",
            "消極放棄所有投資機會) (Context: 四大嶺南市井哲學俗語：「食得鹹魚抵得渴」、「邊有咁大隻蛤乸隨街跳」 ()"
          ],
          "answerIndex": 0,
          "explanation": "該俗語強調商場競爭中錯失先機之痛心，體現出積極進取、爭分奪秒之搶佔商機意識。"
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
    "title": "經典嶺南飲食文化成語：「炒魷魚」、「食死貓」、「食檸檬」、「食軟飯」 (Culinary Idioms)",
    "level": "B2",
    "objective": "掌握以嶺南飲食（海鮮、蔬果、點心、米飯）為隱喻載體之高頻成語俗語（炒魷魚、食死貓、食檸檬、食軟飯、飲頭啖湯）之深層語義機制。",
    "presentation": {
      "explanation": "「食在廣州，味在嶺南」。粵語將飲食烹飪之物理特性化為豐富生動之人際與職場隱喻：\n\n一、五大經典飲食文化成語矩陣：\n１．「炒魷魚」（caau2 jau4 jyu4*2）：\n- 語義：被解僱、開除出局。\n- 隱喻由來：炒熟之魷魚片會自然捲縮。舊時打工仔被解僱時，需自行將鋪蓋草席捲起離開，形態與炒魷魚如出一轍。\n\n２．「食死貓」（sik6 sei2 maau1）：\n- 語義：無辜背黑鍋、替人頂罪受過。\n- 隱喻由來：死貓腐臭不可食，被迫吃下死貓比喻含冤受屈、吞下不白之冤。\n\n３．「食檸檬」（sik6 ning4 mung4*2）：\n- 語義：求愛被拒絕、辦事遭人冷遇回絕（碰釘子）。\n- 隱喻由來：檸檬酸澀難當，比喻遭到拒絕時內心之酸楚與尷尬感受。\n\n４．「食軟飯」（sik6 jyun5 faan6）：\n- 語義：男子依靠女性經濟供養生活（軟飯男）。\n\n５．「飲頭啖湯」（jam2 tau4 daam6 tong1）：\n- 語義：喝第一口新鮮煲出之靚湯，比喻搶佔先機、最先享受到新行業或新政策帶來的豐厚利潤。",
      "examples": [
        {
          "target": "因為經濟不景氣加上公司重組，阿強尋日好不幸畀老細炒咗魷魚。",
          "reading": "jan1 wai6 ging1 zai3 bat1 ging2 hei3 gaa1 soeng6 gung1 si1 cung4 zou2, aa3 koeng4 cam4 jat6 hou2 bat1 hang6 bei2 lou5 sai3 caau2 zo2 jau4 jyu4*2. [jɐn˥ wɐi˨ kɪŋ˥ tsɐi˧ pɐt̚˥ kɪŋ˧˥ hei˧ kaː˥ sœːŋ˨ kʊŋ˥ siː˥ tsʰʊŋ˨˩ tsou˧˥, aː˧ kʰœːŋ˨˩ tsʰɐm˨˩ jɐt˨ hou˧˥ pɐt̚˥ hɐŋ˨ pei˨ lou5 sɐi˧ tsʰaːu˧˥ tsɔː˧˥ jɐu˨˩ jyː˧˥] (YUN-WAI GING-JAI BUT-GING-HEY GAH-SEUNG GONG-SEE CHOONG-JOU, AH-KEUNG CHUM-YUT HOH BUT-HUNG BAY LOU-SY CHAU-JOR-YAU-YUE)",
          "translation": "Due to the economic downturn and corporate restructuring, Ah Keung was unfortunately fired by the boss yesterday."
        },
        {
          "target": "明明係個項目經理自己簽錯字，依家竟然要成組人幫佢食死貓！",
          "reading": "ming4 ming4 hai6 go3 hong6 muk6 ging1 lei5 zi6 gei2 cim1 co3 zi6, ji1 gaa1 ging2 jin4 jiu3 seng4 zou2 jan4 bong1 keoi5 sik6 sei2 maau1! [mɪŋ˨˩ mɪŋ˨˩ hɐi˨ kɔː˧ hɔːŋ˨ mʊk̚˨ kɪŋ˥ lei˩˧ tsiː˨ kei˧˥ tsʰiːm˥ tsʰɔː˧ tsiː˨, jiː˥ kaː˥ kɪŋ˧˥ jiːn˨˩ jiu˧ sɛːŋ˨˩ tsou˧˥ jɐn˨˩ pɔːŋ˥ kʰɵy˩˧ sɪk̚˨ sei˧˥ maːu˥!] (MING-MING HY GOH HOHNG-MOK GING-LY JEE-GAY CHEEM-CHOH-JEE, YEE-GAH GING-YEEN YEW SENG-JOU-YUN BONG KUY SIK-SAY-MAAU!)",
          "translation": "It was clearly the project manager himself who signed the wrong name, but now the whole team is surprisingly made to take the blame for him!"
        },
        {
          "target": "佢鼓起勇氣約心儀嘅女仔睇戲，點知即刻畀對方請食檸檬。",
          "reading": "keoi5 gu2 hei2 jung5 hei3 joek3 sam1 ji4 ge3 neoi5 zai2 tai2 hei3, dim2 zi1 zik1 hak1 bei2 deoi3 fong1 cing2 sik6 ning4 mung4*2. [kʰɵy˩˧ kuː˧˥ hei˧˥ jʊŋ˩˧ hei˧ jœːk̚˧ sɐm˥ jiː˨˩ kɛː˧ nɵy˩˧ tsɐi˧˥ tʰɐi˧˥ hei˧, tiːm˧˥ tsiː˥ tsɪk̚˥ hɐk̚˥ pei˨ tɵy˧ fɔːŋ˥ tsʰɪŋ˧˥ sɪk̚˨ nɪŋ˨˩ mʊŋ˧˥] (KUY GOO-HEY YOONG-HEY YERK SUM-YEE GEH NOEY-JY TY-HEY, DEEM-JEE JIK-HUK BAY DEOY-FONG CHING-SIK-NING-MOONG)",
          "translation": "He mustered the courage to ask out the girl he liked to a movie, only to be given the cold shoulder and rejected immediately."
        }
      ],
      "mnemonics": [
        "【飲食隱喻歌】被炒開除「炒魷魚」，含冤受屈「食死貓」；求愛遭拒「食檸檬」，搶佔先機「頭啖湯」！"
      ],
      "culturalNotes": [
        "飲食成語在粵語流行文化中無處不在。例如「請食檸檬」在港產電影與流行曲中常用作青年男女戀愛拒絕之生動修辭，幽默中帶有幾分酸楚自嘲。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【職場隱喻】在公司中被無辜栽贓、替他人頂罪受過，地道飲食成語係：",
          "options": [
            "食死貓 (sik6 sei2 maau1 / Take the blame / Scapegoated)",
            "炒魷魚) (Context: 經典嶺南飲食文化成語：「炒魷魚」、「食死貓」、「食檸檬」、「食軟飯」 )",
            "食檸檬) (Context: 經典嶺南飲食文化成語：「炒魷魚」、「食死貓」、「食檸檬」、「食軟飯」 )",
            "飲頭啖湯) (Context: 經典嶺南飲食文化成語：「炒魷魚」、「食死貓」、「食檸檬」、「食軟飯」 )"
          ],
          "answerIndex": 0,
          "explanation": "「食死貓」比喻背黑鍋、含冤受屈。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【商業先機】形容企業搶先進入新市場、最先享受豐厚紅利，應選用之成語係：",
          "options": [
            "飲頭啖湯 (jam2 tau4 daam6 tong1 / First-mover advantage)",
            "食死貓) (Context: 經典嶺南飲食文化成語：「炒魷魚」、「食死貓」、「食檸檬」、「食軟飯」 )",
            "炒魷魚) (Context: 經典嶺南飲食文化成語：「炒魷魚」、「食死貓」、「食檸檬」、「食軟飯」 )",
            "食軟飯) (Context: 經典嶺南飲食文化成語：「炒魷魚」、「食死貓」、「食檸檬」、「食軟飯」 )"
          ],
          "answerIndex": 0,
          "explanation": "「飲頭啖湯」比喻第一批搶先獲取最大利益者。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【社交隱喻】短語「畀人請食檸檬」在廣東話中之真正含義為：",
          "options": [
            "遭到對方的拒絕或冷落回絕 (Rejected / Turned down)",
            "獲贈新鮮美味的水果禮品) (Context: 經典嶺南飲食文化成語：「炒魷魚」、「食死貓」、「食檸檬」、「食軟飯」 )",
            "被邀請參加豪華宴會) (Context: 經典嶺南飲食文化成語：「炒魷魚」、「食死貓」、「食檸檬」、「食軟飯」 )",
            "在餐廳免費獲得檸檬茶飲品) (Context: 經典嶺南飲食文化成語：「炒魷魚」、「食死貓」、「食檸檬」、「食軟飯」 )"
          ],
          "answerIndex": 0,
          "explanation": "「食檸檬」為遭到求愛拒絕或請求碰釘子之經典隱喻。"
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
    "title": "經典粵語俏皮歇後語（一）：日常生活與市井幽默 (Everyday Xiehouyu)",
    "level": "B2",
    "objective": "掌握粵語歇後語「引子（謎面） + 註解（謎底）」之雙層結構，精通日常生活四大高頻歇後語之妙用與市井幽默感。",
    "presentation": {
      "explanation": "歇後語係漢語特有之雙截言語形式，由「引子」（前半段謎面）與「註解」（後半段謎底）組成。在粵語會話中，說話者常只說前半句，聽者心領神會後半句：\n\n一、日常生活四大經典歇後語矩陣：\n１．「黃鼠狼畀雞拜年 —— 冇安好心」：\n- 語義：表面熱情和善，實則暗藏惡意、不懷好意。\n\n２．「水過鴨背 —— 唔入心 / 冇痕跡」：\n- 語義：形容聽話左耳進右耳出、完全不放在心上，或事情過去後不留任何痕跡。\n- 典故：鴨毛自帶油脂，水潑在鴨背上會瞬間滑落，無法滲透。\n\n３．「盲人食湯圓 —— 心中有數」：\n- 語義：雖然表面上不說或看不見，但內心裡對事情底細清清楚楚、心知肚明。\n\n４．「阿茂整餅 —— 冇嗰樣整嗰樣」：\n- 語義：形容人多此一舉、自找麻煩、無事生非做不必要之事情。\n- 典故：相傳廣州茶樓麵點師傅『阿茂』為了招徠顧客，每當哪種點心賣完就專門製作哪種，引申為『無事生非、多此一舉』。",
      "examples": [
        {
          "target": "平時對人冷冰冰嘅對手突然登門送大禮，真係黃鼠狼畀雞拜年 —— 冇安好心！",
          "reading": "ping4 si4 deoi3 jan4 laang5 bing1 bing1 ge3 deoi3 sau2 tat1 jin4 dang1 mun4 sung3 daai6 lai5, zan1 hai6 wong4 syu2 long4 bei2 gai1 baai3 nin4 —— mou5 on1 hou2 sam1! [pʰɪŋ˨˩ siː˨˩ tɵy˧ jɐn˨˩ laːŋ˩˧ pɪŋ˥ pɪŋ˥ kɛː˧ tɵy˧ sɐu˧˥ tʰɐt̚˥ jiːn˨˩ tɐŋ˥ muːn˨˩ sʊŋ˧ taːi˨ lɐi˩˧, tsɐn˥ hɐi˨ wɔːŋ˨˩ syː˧˥ lɔːŋ˨˩ pei˨ kɐi˥ paːi˧ niːn˨˩ —— mou˩˧ ɔːn˥ hou˧˥ sɐm˥!] (PING-SEE DEOY-YUN LAHNG-BING-BING GEH DEOY-SAU TUT-YEEN DUNG-MOON SOONG DY-LY, JUN-HY WONG-SYU-LONG BAY GAI BAAI-NEEN —— MOU-ON-HOH-SUM!)",
          "translation": "The competitor who is usually cold suddenly visited with big gifts; it is really the weasel wishing the hen Happy New Year —— with ill intentions!"
        },
        {
          "target": "老師點樣苦口婆心勸佢，佢都當係水過鴨背，轉頭就忘記晒。",
          "reading": "lou5 si1 dim2 joeng6*2 fu2 hau2 po4 sam1 hyun3 keoi5, keoi5 dou1 dong3 hai6 seoi2 gwo3 aap3 bui3, zyun3 tau4 zau6 mong4 gei3 saai3. [lou˧˥ siː˥ tiːm˧˥ jœːŋ˨ fuː˧˥ hɐu˧˥ pʰɔː˨˩ sɐm˥ hyn˧ kʰɵy˩˧, kʰɵy˩˧ tou˥ tɔːŋ˧ hɐi˨ sɵy˧˥ kʷɔː˧ aːp̚˧ puːi˧, tsyn˧ tʰɐu˨˩ tsɐu˨ mɔːŋ˨˩ kei˧ saːi˧] (LOU-SEE DEEM-YEUNG FOO-HAU-POH-SUM HUEN KUY, KUY DOH DONG HY SOEY-GWOR-AHP-BOOY, JUEN-TAU JAU MONG-GAY-SY)",
          "translation": "No matter how earnestly the teacher advised him, he treated it like water off a duck's back, forgetting it all immediately."
        },
        {
          "target": "你唔好見陳生平日唔出聲，其實佢對成個部門嘅賬目係盲人食湯圓 —— 心中有數。",
          "reading": "nei5 m4 hou2 gin3 can4 saan1 ping4 jat6 m4 ceot1 seng1, kei4 sat6 keoi5 deoi3 seng4 go3 bou6 mun4 ge3 zoeng3 muk6 hai6 maang4 jan4 sik6 tong1 jyun4*2 —— sam1 zung1 jau5 sou3. [nei˩˧ m̩˨˩ hou˧˥ kiːn˧ tsʰɐn˨˩ saːn˥ pʰɪŋ˨˩ jɐt˨ m̩˨˩ tsʰɵt̚˥ sɛːŋ˥, kʰei˨˩ sɐt̚˨ kʰɵy˩˧ tɵy˧ sɛːŋ˨˩ kɔː˧ pou˨ muːn˨˩ kɛː˧ tsœːŋ˧ mʊk̚˨ hɐi˨ maːŋ˨˩ jɐn˨˩ sɪk̚˨ tʰɔːŋ˥ jyːn˧˥ —— sɐm˥ tsʊŋ˥ jɐu˩˧ sou˧] (NEI M-HOH GEEN CHUN-SAHN PING-YUT M-CHUT-SENG, KEY-SUT KUY DEOY SENG-GOH BOU-MOON GEH JEUNG-MOK HY MAHNG-YUN SIK TONG-YUEN —— SUM-JOONG-YAU-SOU)",
          "translation": "Don't just assume Mr. Chan says nothing usually; in fact, regarding the department's accounts he is like a blind man eating tangyuan —— clearly knowing in his heart."
        }
      ],
      "mnemonics": [
        "【歇後日常歌】黃鼠狼拜年「冇安好心」，水過鴨背「唔入心」；盲人食湯圓「心中有數」，阿茂整餅「冇嗰樣整嗰樣」！"
      ],
      "culturalNotes": [
        "「阿茂整餅」係極具廣州老西關風情之經典歇後語。在香港辦公室文化中，當有人提出毫無意義之繁瑣新要求時，同事常私下笑稱『又係阿茂整餅』。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【歇後匹配】歇後語「水過鴨背」之後半段對應謎底係：",
          "options": [
            "唔入心 / 冇痕跡 (In one ear and out the other / No trace)",
            "心中有數) (Context: 經典粵語俏皮歇後語（一）：日常生活與市井幽默 (Everyday Xi)",
            "冇嗰樣整嗰樣) (Context: 經典粵語俏皮歇後語（一）：日常生活與市井幽默 (Everyday Xi)",
            "冇安好心) (Context: 經典粵語俏皮歇後語（一）：日常生活與市井幽默 (Everyday Xi)"
          ],
          "answerIndex": 0,
          "explanation": "「水過鴨背」比喻說話如過眼雲煙、聽不進去（唔入心）。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【多此一舉】形容人無事生非、多此一舉做無用功，對應之歇後語前半句係：",
          "options": [
            "阿茂整餅 (aa3 mau6 zing2 beng2 / Making unnecessary trouble)",
            "盲人食湯圓) (Context: 經典粵語俏皮歇後語（一）：日常生活與市井幽默 (Everyday Xi)",
            "黃鼠狼畀雞拜年) (Context: 經典粵語俏皮歇後語（一）：日常生活與市井幽默 (Everyday Xi)",
            "泥菩薩過江) (Context: 經典粵語俏皮歇後語（一）：日常生活與市井幽默 (Everyday Xi)"
          ],
          "answerIndex": 0,
          "explanation": "「阿茂整餅 —— 冇嗰樣整嗰樣」比喻多此一舉、自找麻煩。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【心知肚明】歇後語「盲人食湯圓」（maang4 jan4 sik6 tong1 jyun4*2）所表達之真實寓意係：",
          "options": [
            "心中有數、內心對底細清清楚楚 (Knowing clearly in one's heart)",
            "完全不知道吃了多少) (Context: 經典粵語俏皮歇後語（一）：日常生活與市井幽默 (Everyday Xi)",
            "湯圓味道非常甜美) (Context: 經典粵語俏皮歇後語（一）：日常生活與市井幽默 (Everyday Xi)",
            "雙眼視力突然恢復) (Context: 經典粵語俏皮歇後語（一）：日常生活與市井幽默 (Everyday Xi)"
          ],
          "answerIndex": 0,
          "explanation": "「盲人食湯圓 —— 心中有數」比喻內心對事情來龍去脈與數字底細極為清楚。"
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
    "title": "經典粵語俏皮歇後語（二）：人物傳奇與歷史諧音 (Historical & Punning Xiehouyu)",
    "level": "B2",
    "objective": "掌握以歷史人物、民間信仰與粵語雙關諧音為特色之高階歇後語（泥菩薩過江、風吹雞蛋殼、神仙過鐵橋、單眼佬睇榜）之文化語義。",
    "presentation": {
      "explanation": "粵語歇後語融合了民間傳奇與極具智慧之諧音雙關（Pun），在民間說唱與日常侃談中廣受歡迎：\n\n一、四大人物傳奇與諧音歇後語矩陣：\n１．「泥菩薩過江 —— 自身難保」：\n- 語義：自己連保全自身都極度困難，根本無力再去顧及或援助他人。\n- 典故：泥塑之菩薩像遇到江水浸泡必然溶化崩塌。\n\n２．「風吹雞蛋殼 —— 財散人安樂」：\n- 語義：錢財散盡或破財之後，反而放下了沉重心理包袱，心情變得舒暢坦然。\n- 典故：雞蛋殼空無一物，被風吹走毫不可惜，比喻「破財消災」。\n\n３．「神仙過鐵橋 —— 包穩陣」：\n- 語義：萬無一失、絕對有把握、穩操勝券。\n- 典故：神仙本有法力，再加上堅固無比之鐵橋，雙重保險，極度穩當（包穩陣）。\n\n４．「單眼佬睇榜 —— 一目了然」：\n- 語義：一清二楚，一眼看去就完全明白。\n- 諧音雙關：只有一隻眼睛看榜單，既是『一眼（一目）』，又是『一目了然』之幽默雙關。",
      "examples": [
        {
          "target": "佢自己都負債累累，你仲去向佢借錢，佢依家係泥菩薩過江 —— 自身難保呀！",
          "reading": "keoi5 zi6 gei2 dou1 fu6 zaai3 leoi5 leoi5, nei5 zung6 heoi3 hoeng3 keoi5 ze3 cin2, keoi5 ji1 gaa1 hai6 nai4 pou4 saat3 gwo3 gong1 —— zi6 san1 naan4 bou2 aa3! [kʰɵy˩˧ tsiː˨ kei˧˥ tou˥ fu˨ tsaːi˧ lɵy˩˧ lɵy˩˧, nei˩˧ tsʊŋ˨ hɵy˧ hœːŋ˧ kʰɵy˩˧ tsɛː˧ tsʰiːn˧˥, kʰɵy˩˧ jiː˥ kaː˥ hɐi˨ nɐi˨˩ pʰou4 saːt̚˧ kʷɔː˧ kɔːŋ˥ —— tsiː˨ sɐn˥ naːn˨˩ pou˧˥ aː˧!] (KUY JEE-GAY DOH FOO-JAI LOEY-LOEY, NEI JOONG HOEY HEUNG KUY JEH-CHEEN, KUY YEE-GAH HY NAI-POU-SAHT GWOR-GONG —— JEE-SUN NAHN-BOU AH!)",
          "translation": "He is already heavily in debt himself and you still go borrow money from him; right now he is like a clay idol crossing the river —— unable to even save himself!"
        },
        {
          "target": "放心交畀我哋團隊搞啦，以我哋廿年嘅專業經驗，今次合作係神仙過鐵橋 —— 包穩陣！",
          "reading": "fong3 sam1 gaau1 bei2 ngo5 dei6 tyun4 deoi6*2 gaau2 laa1, ji5 ngo5 dei6 jaa6 nin4 ge3 zyun1 jip6 ging1 jim6, gam1 ci3 hap6 zok3 hai6 san4 sin1 gwo3 tit3 kiu4 —— baau1 wan2 zan6! [fɔːŋ˧ sɐm˥ kaːu˥ pei˨ ŋɔː˩˧ tei˨ tʰyːn˨˩ tɵy˧˥ kaːu˧˥ laː˥, jiː˩˧ ŋɔː˩˧ tei˨ jaː˨ niːn˨˩ kɛː˧ tsyn˥ jiːp̚˨ kɪŋ˥ jiːm˨, kɐm˥ tsʰiː˧ hɐp̚˨ tsɔːk̚˧ hɐi˨ sɐn˨˩ siːn˥ kʷɔː˧ tʰiːt̚˧ kʰiːu˨˩ —— paːu˥ wɐn˧˥ tsɐn˨!] (FONG-SUM GAU-BAY NGOH-DAY TUEN-DEOY GAU LAH, YEE NGOH-DAY YAH-NEEN GEH JUEN-YIP GING-YEEM, GUM-CHEE HUP-JOK HY SUN-SEEN GWOR-TEET-KEW —— BAAU-WUN-JUT!)",
          "translation": "Rest assured and leave it to our team; with our 20 years of professional experience, this cooperation is like immortals crossing an iron bridge —— absolutely guaranteed!"
        },
        {
          "target": "呢份財務報表分類好清晰，收入同支出嘅對比真係單眼佬睇榜 —— 一目了然。",
          "reading": "ni1 fan6 coi4 mou6 bou3 biu2 fan1 leoi6 hou2 cing1 sik1, sau1 jap6 tung4 zi1 ceot1 ge3 deoi3 bei2 zan1 hai6 daan1 ngaan5 lou2 tai2 bong2 —— jat1 muk6 liu5 jin4. [niː˥ fɐn˨ tsʰɔːi˨˩ mou˨ pou˧ piːu˧˥ fɐn˥ lɵy˨ hou˧˥ tsʰɪŋ˥ sɪk̚˥, sɐu˥ jɐp̚˨ tʰʊŋ˨˩ tsiː˥ tsʰɵt̚˥ kɛː˧ tɵy˧ pei˧˥ tsɐn˥ hɐi˨ taːn˥ ŋaːn˩˧ lou˧˥ tʰɐi˧˥ pɔːŋ˧˥ —— jɐt̚˥ mʊk̚˨ liu˩˧ jiːn˨˩] (NEE-FUN CHOY-MOU BOU-BEW FUN-LOEY HOH CHING-SIK, SAU-YUP TOONG JEE-CHUT GEH DEOY-BAY JUN-HY DAHN-NGAHN-LOU TY-BONG —— YUT-MOK-LEW-YEEN)",
          "translation": "This financial statement is categorized very clearly; the comparison between income and expenditure is really like a one-eyed man reading the board —— crystal clear at a single glance."
        }
      ],
      "mnemonics": [
        "【傳奇諧音訣】泥菩薩過江「難自身」，風吹蛋殼「人安樂」；神仙過鐵橋「包穩陣」，單眼佬睇榜「一目了然」！"
      ],
      "culturalNotes": [
        "「包穩陣」（絕對穩當）係嶺南商旅交易時最令人心安之承諾。將「神仙過鐵橋」融入商務談判中，既顯幽默自信，又極富嶺南地域文化特色。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【萬無一失】形容事情有十足把握、絕對安全穩妥，對應之歇後語前半句係：",
          "options": [
            "神仙過鐵橋 (san4 sin1 gwo3 tit3 kiu4 / Absolutely guaranteed)",
            "泥菩薩過江) (Context: 經典粵語俏皮歇後語（二）：人物傳奇與歷史諧音 (Historical )",
            "風吹雞蛋殼) (Context: 經典粵語俏皮歇後語（二）：人物傳奇與歷史諧音 (Historical )",
            "單眼佬睇榜) (Context: 經典粵語俏皮歇後語（二）：人物傳奇與歷史諧音 (Historical )"
          ],
          "answerIndex": 0,
          "explanation": "「神仙過鐵橋 —— 包穩陣」比喻萬無一失、極其穩妥。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【自身難保】比喻連自己都難以自保、無力顧及他人，歇後語前半句係：",
          "options": [
            "泥菩薩過江 (nai4 pou4 saat3 gwo3 gong1 / Cannot even save oneself)",
            "神仙過鐵橋) (Context: 經典粵語俏皮歇後語（二）：人物傳奇與歷史諧音 (Historical )",
            "風吹雞蛋殼) (Context: 經典粵語俏皮歇後語（二）：人物傳奇與歷史諧音 (Historical )",
            "阿茂整餅) (Context: 經典粵語俏皮歇後語（二）：人物傳奇與歷史諧音 (Historical )"
          ],
          "answerIndex": 0,
          "explanation": "「泥菩薩過江 —— 自身難保」形容自身處境危殆、無力助人。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【雙關諧音】歇後語「單眼佬睇榜 —— 一目了然」中，「一目」所運用的修辭手法係：",
          "options": [
            "雙關諧音（一隻眼睛 vs 一目了然） (Punning / Double Entendre)",
            "誇張修辭) (Context: 經典粵語俏皮歇後語（二）：人物傳奇與歷史諧音 (Historical )",
            "借代修辭) (Context: 經典粵語俏皮歇後語（二）：人物傳奇與歷史諧音 (Historical )",
            "擬人修辭) (Context: 經典粵語俏皮歇後語（二）：人物傳奇與歷史諧音 (Historical )"
          ],
          "answerIndex": 0,
          "explanation": "單眼人只有一隻眼（一目），與成語「一目了然」形成絕妙雙關諧音。"
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
    "title": "成語、俗語與歇後語在商務與社交中之高階得體語用 (Pragmatic Deployment Mastery)",
    "level": "B2",
    "objective": "掌握在商務談判、職場溝通與市井社交中得體、精準、高情商運用成語俗語與歇後語之高階語用策略。",
    "presentation": {
      "explanation": "掌握成語、俗語與歇後語之最高境界在於「因時因地因人」之精準語用調控：\n\n一、三大商務與社交語用場景分級：\n１．商務正式談判（莊重典雅、委婉幽默）：\n- 宜用正向自信之成語（如「飲頭啖湯」、「神仙過鐵橋 —— 包穩陣」）。\n- 避用過於粗俗或帶有強烈挫敗感之詞彙。\n２．同事日常協作（化解緊張、拉近距離）：\n- 適度運用幽默自嘲之歇後語（如「小事嚟啫」、「盲人食湯圓 —— 心中有數」），既展現親和力，又避免過於嚴肅呆板。\n３．市井街坊交流（親切熱絡、原汁原味）：\n- 靈活運用「食得鹹魚抵得渴」、「邊有咁大隻蛤乸隨街跳」，瞬間融入嶺南本土生活氛圍。\n\n二、語用失誤診斷與避坑指南：\n１．避免在嚴肅道歉時使用「算罷啦」（會被誤解為敷衍不負責任）。\n２．避免在正式合同簽約儀式上隨意使用過度市井之俚俗語。",
      "examples": [
        {
          "target": "喺今次大灣區科技博覽會上，我哋公司搶先推出人工智能翻譯系統，真係飲咗頭啖湯！",
          "reading": "hai2 gam1 ci3 daai6 waan1 keoi1 fo1 gai6 bok3 laam5 wui6*2 soeng6, ngo5 dei6 gung1 si1 coeng2 sin1 teoi1 ceot1 jan4 gung1 zi3 nang4 faan1 jik6 hai6 tung2, zan1 hai6 jam2 zo2 tau4 daam6 tong1! [hɐi˩˧ kɐm˥ tsʰiː˧ taːi˨ waːn˥ kʰɵy˥ fɔː˥ kɐi˨ pɔːk̚˧ laːm˩˧ wuːi˨ sœːŋ˨, ŋɔː˩˧ tei˨ kʊŋ˥ siː˥ tsʰœːŋ˧˥ siːn˥ tʰɵy˥ tsʰɵt̚˥ jɐn˨˩ kʊŋ˥ tsiː˧ nɐŋ˨˩ faːn˥ jɪk̚˨ hɐi˨ tʰʊŋ˨, tsɐn˥ hɐi˨ jɐm˧˥ tsɔː˧˥ tʰɐu˨˩ taːm˨˩ tʰɔːŋ˥!] (HY GUM-CHEE DY-WAHN-KUY FOH-GAY BOK-LAHM-WUI SEUNG, NGOH-DAY GONG-SEE CHEUNG-SEEN TOEY-CHUT YUN-GONG-JEE-NUNG FAHN-YIK HY-TOONG, JUN-HY YUM-JOR TAU-DAHM-TONG!)",
          "translation": "At this Greater Bay Area Tech Expo, our company took the lead in launching the AI translation system, really seizing the first-mover advantage!"
        },
        {
          "target": "同本地客傾生意嗰陣適當講兩句地道俗語，除咗可以活躍氣氛，仲能瞬間拉近彼此距離。",
          "reading": "tung4 bun2 dei6 haak3 king1 saang1 ji3 go2 zan6 sik1 dong3 gong2 loeng5 geui3 dei6 dou6 zuk6 jyu5, ceoi4 zo2 ho2 ji5 wut6 joek6 hei3 fan1, zung6 nang4 seon1 gaan1 laai1 kan5 bei2 ci2 keoi5 lei4. [tʰʊŋ˨˩ puːn˧˥ tei˨ haːk̚˧ kʰɪŋ˥ saːŋ˥ jiː˧ kɔː˧˥ tsɐn˨ sɪk̚˥ tɔːŋ˧ kɔːŋ˧˥ lœːŋ˩˧ kɵy˧ tei˨ tou˨ tsʊk̚˨ jyː˩˧, tsʰɵy˨˩ tsɔː˧˥ hɔː˧˥ jiː˩˧ wuːt̚˨ jœːk̚˨ hei˧ fɐn˥, tsʊŋ˨ nɐŋ˨˩ sɵn˥ kaːn˥ laːi˥ kʰɐn˩˧ pei˧˥ tsʰiː˧˥ kʰɵy˩˧ lei˨˩] (TOONG BOON-DAY HAHK KING SAHNG-YEE GOH-JUN SIK-DONG GONG LEUNG-GOEY DAY-DOU JUK-YUE, CHOEY-JOR HOH-YEE WOOT-YERK HEY-FUN, JOONG NUNG SEUN-GAHN LAI-KUN BAY-CHEE KUY-LEY)",
          "translation": "When negotiating business with local clients, speaking a couple of authentic proverbs appropriately not only enlivens the atmosphere, but also instantly narrows the interpersonal distance."
        },
        {
          "target": "做人處世最緊要明辨是非，千祈唔好聽信小人讒言，搞到自己食死貓。",
          "reading": "zou6 jan4 cyu3 sai3 zeoi3 gan2 jiu3 ming4 bin6 si6 fei1, cin1 kei4 m4 hou2 teng1 seon3 siu2 jan4 caam4 jin4, gaau2 dou3 zi6 gei2 sik6 sei2 maau1. [tsou˨ jɐn˨˩ tsʰyː˧ sɐi˧ tsɵy˧ kɐn˧˥ jiu˧ mɪŋ˨˩ piːn˨ siː˨ fei˥, tsʰiːn˥ kʰei˨˩ m̩˨˩ hou˧˥ tʰɛːŋ˥ sɵn˧ siu˧˥ jɐn˨˩ tsʰaːm˨˩ jiːn˨˩, kaːu˧˥ tou˧ tsiː˨ kei˧˥ sɪk̚˨ sei˧˥ maːu˥] (JOU-YUN CHY-SY JEOY GUN-YEW MING-BEEN SEE-FAY, CHEEN-KEY M-HOH TENG-SEUN SIU-YUN CHAHM-YEEN, GAU-DOU JEE-GAY SIK-SAY-MAAU)",
          "translation": "The most important thing in life is to distinguish right from wrong clearly; never listen to petty people's slander and end up being made to take the blame yourself."
        }
      ],
      "mnemonics": [
        "【語用分寸訣】商務談判講穩陣，同事協作幽默陳；因人因地選成語，得體高情最服人！"
      ],
      "culturalNotes": [
        "掌握成語俗語在香港高階商務中的得體切換，係衡量非母語人士是否具備『文化雙語能力』（Bicultural Competence）之最高標竿。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【語用語境】在與香港商業合作夥伴簽約時，欲表達「我方承諾該項目絕對穩當、萬無一失」，最得體幽默之表達係：",
          "options": [
            "今次合作真係神仙過鐵橋 —— 包穩陣！ (baau1 wan2 zan6 / Rock-solid)",
            "今次合作真係阿茂整餅！ (掌握在商務談判、職場溝通與市井社交中得體、精準、高情商運用成語俗語與歇後語之高階語用策略。) (成語、俗語與歇後語在商務與社交中之高階得體語用 (Pragmatic Deployment Mastery))",
            "今次合作真係水過鴨背！ (掌握在商務談判、職場溝通與市井社交中得體、精準、高情商運用成語俗語與歇後語之高階語用策略。) (成語、俗語與歇後語在商務與社交中之高階得體語用 (Pragmatic Deployment Mastery))",
            "今次合作真係泥菩薩過江！ (掌握在商務談判、職場溝通與市井社交中得體、精準、高情商運用成語俗語與歇後語之高階語用策略。) (成語、俗語與歇後語在商務與社交中之高階得體語用 (Pragmatic Deployment Mastery))"
          ],
          "answerIndex": 0,
          "explanation": "「神仙過鐵橋 —— 包穩陣」在商務溝通中兼具自信承諾與地道幽默。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【職場自衛】告誡年輕員工「要小心核對簽名文件，避免日後替他人背黑鍋」，應講：",
          "options": [
            "小心核對，免得幫人食死貓。 (Avoid taking the blame for others)",
            "小心核對，免得幫人飲頭啖湯。 (掌握在商務談判、職場溝通與市井社交中得體、精準、高情商運用成語俗語與歇後語之高階語用策略。) (成語、俗語與歇後語在商務與社交中之高階得體語用 (Pragmatic Deployment Mastery))",
            "小心核對，免得幫人食檸檬。 (掌握在商務談判、職場溝通與市井社交中得體、精準、高情商運用成語俗語與歇後語之高階語用策略。) (成語、俗語與歇後語在商務與社交中之高階得體語用 (Pragmatic Deployment Mastery))",
            "小心核對，免得幫人食軟飯。 (掌握在商務談判、職場溝通與市井社交中得體、精準、高情商運用成語俗語與歇後語之高階語用策略。) (成語、俗語與歇後語在商務與社交中之高階得體語用 (Pragmatic Deployment Mastery))"
          ],
          "answerIndex": 0,
          "explanation": "「食死貓」為替人背黑鍋受過之專屬表達。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【高情商策略】在跨文化商務社交中，巧妙運用廣東話俗語與歇後語之主要價值在於：",
          "options": [
            "活躍談判氣氛，展示文化共鳴，迅速拉近與本地夥伴之人際心理距離 (Building rapport & cultural resonance)",
            "故意讓對方聽不懂以獲取利益 (掌握在商務談判、職場溝通與市井社交中得體、精準、高情商運用成語俗語與歇後語之高階語用策略。) (成語、俗語與歇後語在商務與社交中之高階得體語用 (Pragmatic Deployment Mastery))",
            "取代所有正式法律合同條款 (掌握在商務談判、職場溝通與市井社交中得體、精準、高情商運用成語俗語與歇後語之高階語用策略。) (成語、俗語與歇後語在商務與社交中之高階得體語用 (Pragmatic Deployment Mastery))",
            "展示自身方言優越感 (掌握在商務談判、職場溝通與市井社交中得體、精準、高情商運用成語俗語與歇後語之高階語用策略。) (成語、俗語與歇後語在商務與社交中之高階得體語用 (Pragmatic Deployment Mastery))"
          ],
          "answerIndex": 0,
          "explanation": "恰當運用本土俗語能展現文化包容度與親和力，快速建立互信與心理共鳴。"
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
    "title": "新聞傳媒與香港社會論題：新聞播報語體與信源引述 (Formal Broadcast Cantonese & Sourcing)",
    "level": "B2",
    "objective": "掌握粵語廣播新聞語體（據悉、消息指、當局表示、發言人指出、重申、呼籲）之詞彙規範、客觀引述句式與莊重語調。",
    "presentation": {
      "explanation": "粵語新聞播報語體（廣播粵語）係一種融合了古典雅詞、書面規範與地道粵語語音之莊重語體（Formal Register）：\n\n一、新聞信源引述與客觀陳述核心標記：\n１．信源引述標記（Sourcing Markers）：\n- 「據悉」（geoi3 sik1）：據知情人士獲悉。\n- 「消息指」（siu1 sik1 zi2）：據內部或權威消息來源透露。\n- 「據了解」（geoi3 liu5 gaai2）：根據記者實地調查或了解。\n\n２．官方立場與機構聲明標記（Official Statements）：\n- 「當局表示」（dong1 guk6 biu2 si6）：政府主管部門正式對外表態。\n- 「發言人指出 / 強調」（faat3 jin4 jan4 zi2 ceot1 / koeng4 diu1）：發言人闡明重點。\n- 「重申」（cung4 san1）：再次鄭重申明既定方針。\n- 「呼籲市民」（fu1 ju6 si5 man4）：鄭重請求公眾配合配合。\n\n二、廣播語體與日常口語之對比：\n- 日常口語「政府話」→ 新聞播報「當局表示 / 發言人指出」。\n- 日常口語「聽人講」→ 新聞播報「據悉 / 消息透露」。\n- 日常口語「叫大家注意」→ 新聞播報「呼籲公眾提高警惕」。",
      "examples": [
        {
          "target": "據悉，政府最快會喺下個禮拜正式公佈新一輪扶貧助弱同就業支援政策措施。",
          "reading": "geoi3 sik1, zing3 fu2 zeoi3 faai3 wui5 hai2 haa6 go3 lai5 baai3 zing3 sik1 gung1 bou3 san1 jat1 leon4 fu4 pan4 zo6 joek6 tung4 zau6 jip6 zi1 wun4 zing3 caak3 cok3 si1. [kɵy˧ sɪk̚˥, tsɪŋ˧ fuː˧˥ tsɵy˧ faːi˧ wui˩˧ hɐi˩˧ haː˨ kɔː˧ lɐi˩˧ paːi˧ tsɪŋ˧ sɪk̚˥ kʊŋ˥ pou˧ sɐn˥ jɐt̚˥ lɵn˨˩ fuː˨˩ pʰɐn˨˩ tsɔː˨ jœːk̚˨ tʰʊŋ˨˩ tsɐu˨ jiːp̚˨ tsiː˥ wuːn˨˩ tsɪŋ˧ tsʰaːk̚˧ tsʰɔːk̚˧ siː˥] (GOEY-SIK, JING-FOO JEOY-FY WUI HY HAH-GOH-LY-BY JING-SIK GONG-BOU SUN-YUT-LEON FOO-PUN JOR-YERK TOONG JAU-YIP JEE-WOON JING-CHAHK CHOK-SEE)",
          "translation": "It is understood that the government will officially announce a new round of poverty alleviation and employment support policy measures as early as next week."
        },
        {
          "target": "運輸署發言人指出，受惡劣天氣影響，多條主要幹道需要實施臨時交通管制措施。",
          "reading": "wan6 syu1 cyu5 faat3 jin4 jan4 zi2 ceot1, sau6 ok3 lit6 tin1 hei3 jing2 hoeng2, do1 tiu4 zyu2 jiu3 gon3 dou6 seoi1 jiu3 sat6 si1 lin4 si4 gaau1 tung1 gun2 zai3 cok3 si1. [wɐn˨ syː˥ tsʰyː˩˧ faːt̚˧ jiːn˨˩ jɐn˨˩ tsiː˧˥ tsʰɵt̚˥, sɐu˨ ɔːk̚˧ liːt̚˨ tʰiːn˥ hei˧ jɪŋ˧˥ hœːŋ˧˥, tɔː˥ tʰiːu˨˩ tsyː˧˥ jiu˧ kɔːn˧ tou˨ sɵy˥ jiu˧ sɐt̚˨ siː˥ liːn˨˩ siː˨˩ kaːu˥ tʰʊŋ˥ kuːn˧˥ tsɐi˧ tsʰɔːk̚˧ siː˥] (WUN-SYU-CHUE FAHT-YEEN-YUN JEE-CHUT, SAU OK-LEET TEEN-HEY YING-HEUNG, DOH-TEW JUE-YEW GOHN-DOU SOEY-YEW SUT-SEE LEEN-SEE GAU-TOONG GOON-JAI CHOK-SEE)",
          "translation": "The Transport Department spokesperson pointed out that affected by severe weather, several major trunk roads need to implement temporary traffic control measures."
        },
        {
          "target": "警方重申絕不容忍任何違法行為，並再次呼籲市民切勿以身試法。",
          "reading": "ging2 fong1 cung4 san1 zyut6 bat1 jung4 jan2 jam6 ho4 wai4 faat3 hang4 wai4, bing6 zoi3 ci3 fu1 ju6 si5 man4 cit3 mat6 ji5 san1 si3 faat3. [kɪŋ˧˥ fɔːŋ˥ tsʰʊŋ˨˩ sɐn˥ tsyːt̚˨ pɐt̚˥ jʊŋ˨˩ jɐn˩˧ jɐm˨ hɔː˨˩ wɐi˨˩ faːt̚˧ hɐŋ˨˩ wɐi˨˩, pɪŋ˨ tsɔːi˧ tsʰiː˧ fuː˥ jyː˨ siː˨˩ mɐn˨˩ tsʰiːt̚˧ mɐt̚˨ jiː˩˧ sɐn˥ siː˧ faːt̚˧] (GING-FONG CHOONG-SUN JUET-BUT-YOONG-YUN YUM-HOH WAI-FAHT HAHNG-WAI, BING JOY-CHEE FOO-YUE SEE-MUN CHEET-MUT YEE-SUN-SEE-FAHT)",
          "translation": "The police reaffirmed that they will never tolerate any illegal acts and once again appealed to citizens never to defy the law."
        }
      ],
      "mnemonics": [
        "【播報引述歌】客觀傳媒講「據悉」，權威透露「消息指」；官方表態「當局話」，鄭重叮囑「呼籲起」！"
      ],
      "culturalNotes": [
        "香港電台（RTHK）與無綫電視（TVB）的新聞播音員被視為標準粵語正音與新聞語體之典範。其特點係聲調沉穩、用字精準典雅，並嚴格遵循粵語九聲正音標準。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【新聞引述】新聞主播引述可靠內部情報時，最權威客觀之開篇信源詞係：",
          "options": [
            "消息指 (Sources indicate)",
            "有人講) (Context: 新聞傳媒與香港社會論題：新聞播報語體與信源引述 (Formal Bro)",
            "聽講話) (Context: 新聞傳媒與香港社會論題：新聞播報語體與信源引述 (Formal Bro)",
            "街坊話) (Context: 新聞傳媒與香港社會論題：新聞播報語體與信源引述 (Formal Bro)"
          ],
          "answerIndex": 0,
          "explanation": "「消息指 / 據悉」為新聞傳媒最權威標準之客觀信源引述詞。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【官方表態】在正式新聞稿中表述主管部門對某項政策的鄭重說明，地道表達係：",
          "options": [
            "當局發言人指出並重申方針 (Spokesperson pointed out & reaffirmed)",
            "老細隨便講兩句) (Context: 新聞傳媒與香港社會論題：新聞播報語體與信源引述 (Formal Bro)",
            "阿茂整餅式通知) (Context: 新聞傳媒與香港社會論題：新聞播報語體與信源引述 (Formal Bro)",
            "街坊私下傾計) (Context: 新聞傳媒與香港社會論題：新聞播報語體與信源引述 (Formal Bro)"
          ],
          "answerIndex": 0,
          "explanation": "「發言人指出 / 重申」為官方新聞語體之標準莊重表達。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語體轉換】日常口語「警察叫大家千祈唔好犯法」轉換為莊重新聞語體應為：",
          "options": [
            "警方呼籲市民切勿以身試法 (Police appeal to citizens not to defy law)",
            "差人叫大家唔好做壞事) (Context: 新聞傳媒與香港社會論題：新聞播報語體與信源引述 (Formal Bro)",
            "警察話大家小心啲啦) (Context: 新聞傳媒與香港社會論題：新聞播報語體與信源引述 (Formal Bro)",
            "警署發明咗新規矩) (Context: 新聞傳媒與香港社會論題：新聞播報語體與信源引述 (Formal Bro)"
          ],
          "answerIndex": 0,
          "explanation": "「警方呼籲市民切勿以身試法」體現了新聞語體之規範性、典雅性與客觀性。"
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
    "title": "房屋、物業與城市規劃深度論題：「納米樓 / 劏房」、「供樓負擔」、「市區重建」 (Housing & Urban Redevelopment)",
    "level": "B2",
    "objective": "掌握香港房屋居住制度、房地產市場、按揭貸款與市區重建規劃核心術語（劏房、納米樓、居屋、供樓、首期、強拍）之社會論述。",
    "presentation": {
      "explanation": "房屋政策與樓市走勢係香港社會民生關注度最高之核心論題，涉及獨特之本土居住形態與金融術語：\n\n一、香港特色居住形態與房屋階梯：\n１．公營房屋體系：\n- 「公屋」（gung1 uk1）：公共租住房屋，由房委會興建提供予低收入家庭。\n- 「居屋」（geoi1 uk1）：居者有其屋計劃，以折扣價售予中低收入家庭之資助出售房屋。\n２．私營極端居住形態：\n- 「劏房」（tong1 fong4*2）：將一個普通住宅單位分間成兩個或以上獨立微型房間出租。\n- 「納米樓」（naap6 mai5 lau4*2）：實用面積極小（通常少於200平方呎）之袖珍私樓單位。\n\n二、置業按揭與市區更新術語：\n１．購房金融體系：\n- 「首期」（sau2 kei4）：購房時需即時支付之首期訂金/首付。\n- 「供樓」（gung1 lau4*2）：按月償還房屋按揭貸款本金與利息。\n- 「按揭成數」（on3 kit3 sing4 sou3）：銀行貸款額佔物業總估值之百分比。\n２．市區更新與舊樓收購：\n- 「市區重建局（市建局）」（si5 gin3 guk6）：主導舊區更新與樓宇復修之法定機構。\n- 「強拍」（koeng4 paak3）：強制拍賣，發展商收集舊樓達法定業權門檻後向土地審裁處申請拍賣整個地段。",
      "examples": [
        {
          "target": "為咗改善基層市民嘅居住環境，政府近年積極加快興建簡約公屋以取締劣質劏房。",
          "reading": "wai6 zo2 goi2 sin6 gei1 cang4 si5 man4 ge3 geoi1 zyu6 waan4 ging2, zing3 fu2 gan6 nin4 zik1 gik6 gaa1 faai3 hing1 gin3 gaan2 joek3 gung1 uk1 ji5 ceoi2 dai3 lyut3 zat1 tong1 fong4*2. [wɐi˨ tsɔː˧˥ kɔːi˧˥ siːn˨ kei˥ tsʰɐŋ˨˩ siː˨˩ mɐn˨˩ kɛː˧ kɵy˥ tsyː˨ waːn˨˩ kɪŋ˧˥, tsɪŋ˧ fuː˧˥ kɐn˨ niːn˨˩ tsɪk̚˥ kɪk̚˨ kaː˥ faːi˧ hɪŋ˥ kiːn˧ kaːn˧˥ jœːk̚˧ kʊŋ˥ uk̚˥ jiː˩˧ tsʰɵy˧˥ tɐi˧ lyːt̚˧ tsɐt̚˥ tʰɔːŋ˥ fɔːŋ˧˥] (WAI-JOR GOY-SEEN GAY-CHUNG SEE-MUN GEH GOEY-JUE WAHN-GING, JING-FOO GUN-NEEN JIK-GIK GAH-FY HING-GEEN GAAN-YERK GONG-UK YEE CHOEY-DY LUET-JUT TONG-FONG)",
          "translation": "In order to improve the living environment of grassroots citizens, the government has actively accelerated the construction of light public housing in recent years to eradicate substandard subdivided flats."
        },
        {
          "target": "依家高息環境下供樓負擔加重，好多後生仔就算儲夠首期，都未必敢貿然入市買樓。",
          "reading": "ji1 gaa1 gou1 sik1 waan4 ging2 haa6 gung1 lau4*2 fu6 daam1 gaa1 zung6, hou2 do1 hau6 saang1 zai2 zau6 syun3 cou5 gau3 sau2 kei4, dou1 mei6 bit1 gam2 mau6 jin4 jap6 si5 maai5 lau4*2. [jiː˥ kaː˥ kou˥ sɪk̚˥ waːn˨˩ kɪŋ˧˥ haː˨ kʊŋ˥ lɐu˧˥ fu˨ taːm˥ kaː˥ tsʊŋ˨, hou˧˥ tɔː˥ hɐu˨ saːŋ˥ tsɐi˧˥ tsɐu˨ syːn˧ tsʰou˩˧ kɐu˧ sɐu˧˥ kʰei˨˩, tou˥ mei˨ piːt̚˥ kɐm˧˥ mɐu˨ jiːn˨˩ jɐp̚˨ siː˩˧ maːi˩˧ lɐu˧˥] (YEE-GAH GOU-SIK WAHN-GING HAH GONG-LAU FOO-DAHM GAH-JOONG, HOH-DOH HAU-SAHNG-JY JAU-SUEN CHOU-GAU SAU-KEY, DOH MAY-BIT GUM MAU-YEEN YUP-SEE MY-LAU)",
          "translation": "Under the current high interest rate environment, mortgage repayment burdens have increased; many young people, even if they have saved enough for the down payment, may not dare to rashly enter the market to buy property."
        },
        {
          "target": "深水埗同土瓜灣等舊區正進行大規模市區重建，以提升樓宇安全同社區配套設施。",
          "reading": "sam1 seoi2 bou6*2 tung4 tou2 gwaa1 waan1 dang2 gau6 keoi1 zing3 zeon3 hang4 daai6 kwai1 mou4 si5 keoi1 cung4 gin3, ji5 tai4 sing1 lau4 jyu5 on1 cyun4 tung4 se5 keoi1 pui3 tou3 cit3 si1. [sɐm˥ sɵy˧˥ pou˧˥ tʰʊŋ˨˩ tʰou˧˥ kʷaː˥ waːn˥ tɐŋ˧˥ kɐu˨ kʰɵy˥ tsɪŋ˧ tsɵn˧ hɐŋ˨˩ taːi˨ kʰwɐi˥ mouou˨˩ siː˨˩ kʰɵy˥ tsʰʊŋ˨˩ kiːn˧, jiː˩˧ tʰɐi˨˩ sɪŋ˥ lɐu˨˩ jyː˩˧ ɔːn˥ tsʰyːn˨˩ tʰʊŋ˨˩ sɛː˩˧ kʰɵy˥ pʰuːi˧ tou˧ tsʰiːt̚˧ siː˥] (SUM-SOEY-POU TOONG TOU-GWAH-WAHN DUNG GAU-KUY JING JUEN-HAHNG DY-KWAI-MOU SEE-KUY CHOONG-GEEN, YEE TY-SING LAU-YUE ON-CHUEN TOONG SEH-KUY POOY-TOU CHEET-SEE)",
          "translation": "Old districts like Sham Shui Po and To Kwa Wan are undergoing large-scale urban redevelopment to enhance building safety and community infrastructure."
        }
      ],
      "mnemonics": [
        "【房屋術語訣】基層租住住「公屋」，折扣資助買「居屋」；分間微型叫「劏房」，每月還款叫「供樓」！"
      ],
      "culturalNotes": [
        "「買樓置業」在香港文化中被視為人生最重要的里程碑之一。「上車」（首次置業）、「供樓」（供還按揭）與「換樓」（升級住宅）構成了香港中產階級之典型生活軌跡。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【房屋類型】指稱將住宅單位分間為多個極微小空間獨立出租之住房形態，專用術語係：",
          "options": [
            "劏房 (tong1 fong4*2 / Subdivided flats)",
            "居屋) (Context: 房屋、物業與城市規劃深度論題：「納米樓 / 劏房」、「供樓負擔」、「市)",
            "村屋) (Context: 房屋、物業與城市規劃深度論題：「納米樓 / 劏房」、「供樓負擔」、「市)",
            "豪宅) (Context: 房屋、物業與城市規劃深度論題：「納米樓 / 劏房」、「供樓負擔」、「市)"
          ],
          "answerIndex": 0,
          "explanation": "「劏房」指將單位分間出租之極端微型居住形態。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【置業術語】廣東話中指稱「按月償還房屋貸款本金與利息」，地道動詞短語係：",
          "options": [
            "供樓 (gung1 lau4*2 / Paying mortgage)",
            "炒樓) (Context: 房屋、物業與城市規劃深度論題：「納米樓 / 劏房」、「供樓負擔」、「市)",
            "租樓) (Context: 房屋、物業與城市規劃深度論題：「納米樓 / 劏房」、「供樓負擔」、「市)",
            "睇樓) (Context: 房屋、物業與城市規劃深度論題：「納米樓 / 劏房」、「供樓負擔」、「市)"
          ],
          "answerIndex": 0,
          "explanation": "「供樓」指每月按期向銀行繳付按揭貸款。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【金融術語】在香港購買私人物業時，買家首先必須自行支付之初始訂金額度稱為：",
          "options": [
            "首期 (sau2 kei4 / Down payment)",
            "利息) (Context: 房屋、物業與城市規劃深度論題：「納米樓 / 劏房」、「供樓負擔」、「市)",
            "差餉) (Context: 房屋、物業與城市規劃深度論題：「納米樓 / 劏房」、「供樓負擔」、「市)",
            "管理費) (Context: 房屋、物業與城市規劃深度論題：「納米樓 / 劏房」、「供樓負擔」、「市)"
          ],
          "answerIndex": 0,
          "explanation": "「首期」指置業時買家自備並先行繳付之首期款項（Down Payment）。"
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
    "title": "經濟金融、股市波動與民生通脹：「恒指升跌」、「加息週期」、「通脹壓力」 (Financial Markets & Economy)",
    "level": "B2",
    "objective": "掌握國際金融中心語境下之股市指數波動、利率政策調整、通脹壓力與家庭預算開支（恒指、跌穿、升破、加息、減息、抗通脹）之專業表達。",
    "presentation": {
      "explanation": "香港作為全球重要金融樞紐，日常傳媒與市民侃談深度交織著股市、利率與經濟民生詞彙：\n\n一、股市與金融市場核心動態術語：\n１．指數與點數行情：\n- 「恒生指數（恒指）」（hang4 sang1 zi2 sou3）：反映香港股票市場表現之旗艦指數。\n- 「跌穿」（tit3 cyun1）：股指跌破某一重要心理關口（如『跌穿萬八點』）。\n- 「升破 / 衝破」（sing1 po3 / cung1 po3）：股指強勢突破向上關口。\n- 「成交額」（sing4 gaau1 ngaak6）：市場全日總交易金額（如『大市成交過千億』）。\n２．貨幣與利率週期：\n- 「加息 / 減息」（gaa1 sik1 / gaam2 sik1）：央行或金管局調高或調低基準利率。\n- 「最優惠利率（P息）」（zeoi3 jau1 wai6 lei6 leot6）：商業銀行提供予優質客戶之貸款基準利率。\n\n二、民生經濟與物價通脹術語：\n- 「通脹壓力」（tung1 zoeng3 aat3 lik6）：通貨膨脹引致物價攀升之壓力。\n- 「緊縮開支 / 慳荷包」（gan2 suk1 hoi1 zi1 / haan1 ho4 baau1）：縮減非必要花銷。\n- 「開支預算」（hoi1 zi1 jyu6 syun3）：家庭或企業預定支出規劃。",
      "examples": [
        {
          "target": "受外圍股市造好帶動，恒指今日高開三百點，全日大市總成交額突破千五億港元。",
          "reading": "sau6 ngoi6 wai4 gu2 si5 zou6 hou2 daai3 dung6, hang4 zi2 gam1 jat6 gou1 hoi1 saam1 baak3 dim2, cyun4 jat6 daai6 si5 zung2 sing4 gaau1 ngaak6 tut1 po3 cin1 ng5 jik1 gong2 jyun4. [sɐu˨ ŋɔːi˨ wɐi˨˩ kuː˧˥ siː˩˧ tsou˨ hou˧˥ taːi˧ tʊŋ˨, hɐŋ˨˩ tsiː˧˥ kɐm˥ jɐt˨ kou˥ hɔːi˥ saːm˥ paːk̚˧ tiːm˧˥, tsʰyːn˨˩ jɐt˨ taːi˨ siː˩˧ tsʊŋ˧˥ sɪŋ˨˩ kaːu˥ ŋaːk̚˨ tʰɐt̚˥ pʰɔː˧ tsʰiːn˥ ŋ̩˩˧ jɪk̚˩ kɔːŋ˧˥ jyːn˨˩] (SAU NGOY-WAI GOO-SEE JOU-HOH DY-DOONG, HUNG-JEE GUM-YUT GOU-HOI SAHM-BAHK-DEEM, CHUEN-YUT DY-SEE JOONG SING-GAU-NGAHK TUT-POH CHEEN-NG-YIK GONG-YUEN)",
          "translation": "Driven by positive performance in overseas markets, the Hang Seng Index opened 300 points higher today, and total market turnover exceeded 150 billion HKD for the full day."
        },
        {
          "target": "喺持續加息週期下，各行各業經營成本上升，市民日常開支亦都面對唔少通脹壓力。",
          "reading": "hai2 ci4 zuk6 gaa1 sik1 zau1 kei4 haa6, gok3 hong4 gok3 jip6 ging1 jing4 sing4 bun2 soeng5 sing1, si5 man4 jat6 seung4 hoi1 zi1 jik6 dou1 min6 deoi3 m4 siu2 tung1 zoeng3 aat3 lik6. [hɐi˩˧ tsʰiː˨˩ tsʊk̚˨ kaː˥ sɪk̚˥ tsɐu˥ kʰei˨˩ haː˨, kɔːk̚˧ hɔːŋ˨˩ kɔːk̚˧ jiːp̚˨ kɪŋ˥ jɪŋ˨˩ sɪŋ˨˩ puːn˧˥ sœːŋ˨ sɪŋ˥, siː˨˩ mɐn˨˩ jɐt˨ sœːŋ˨˩ hɔːi˥ tsiː˥ jɪk̚˨ tou˥ miːn˨ tɵy˧ m̩˨˩ siu˧˥ tʰʊŋ˥ tsœːŋ˧ aːt̚˧ lɪk̚˨] (HY CHEE-JUK GAH-SIK JAU-KEY HAH, GOK-HOHNG GOK-YIP GING-YING SING-BOON SEUNG-SING, SEE-MUN YUT-SEUNG HOI-JEE YIK DOH MEEN-DEOY M-SIU TOONG-JEUNG AHT-LIK)",
          "translation": "Under the continuous rate-hiking cycle, operating costs for all industries have risen, and citizens' daily expenditure also faces considerable inflationary pressure."
        },
        {
          "target": "面對百物騰貴，精打細算嘅家庭主婦紛紛諗計慳荷包，以減輕家庭財政負擔。",
          "reading": "min6 deoi3 baak3 mat6 tang4 gwai3, zing1 daa2 sai3 syun3 ge3 gaa1 ting4 zyu2 fu5 fan1 fan1 lam2 gai3*2 haan1 ho4 baau1, ji5 gaam2 hing1 gaa1 ting4 coi4 zing3 fu6 daam1. [miːn˨ tɵy˧ paːk̚˧ mɐt̚˨ tʰɐŋ˨˩ kʷɐi˧, tsɪŋ˥ taː˧˥ sɐi˧ syːn˧ kɛː˧ kaː˥ tʰɪŋ˨˩ tsyː˧˥ fuː˩˧ fɐn˥ fɐn˥ lɐm˩˧ kɐi˧˥ haːn˥ hɔː˨˩ paːu˥, jiː˩˧ kaːm˧˥ hɪŋ˥ kaː˥ tʰɪŋ˨˩ tsʰɔːi˨˩ tsɪŋ˧ fu˨ taːm˥] (MEEN-DEOY BAHK-MUT TUNG-GWY, JING-DAH-SY-SUEN GEH GAH-TING JUE-FOO FUN-FUN LUM-GY HAAN-HOH-BAAU, YEE GAHM-HING GAH-TING CHOY-JING FOO-DAHM)",
          "translation": "Facing soaring commodity prices, shrewd housewives are figuring out ways to save money to alleviate household financial burdens."
        }
      ],
      "mnemonics": [
        "【財經金融歌】股市旗艦「恒生指」，跌破關口叫「跌穿」；銀行加息供樓緊，精打細算「慳荷包」！"
      ],
      "culturalNotes": [
        "香港茶餐廳與街市早晨常可見市民熱烈討論『恒指今日升幾多點』、『幾時減息』。金融市場行情已深入融入香港市井大眾之生活常態。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【股指術語】形容恒生指數跌破重要心理支持點位，專業廣東話術語係：",
          "options": [
            "跌穿 (tit3 cyun1 / Fell below / Breached)",
            "跌入) (Context: 經濟金融、股市波動與民生通脹：「恒指升跌」、「加息週期」、「通脹壓力」)",
            "跌埋) (Context: 經濟金融、股市波動與民生通脹：「恒指升跌」、「加息週期」、「通脹壓力」)",
            "跌醒) (Context: 經濟金融、股市波動與民生通脹：「恒指升跌」、「加息週期」、「通脹壓力」)"
          ],
          "answerIndex": 0,
          "explanation": "「跌穿」（如跌穿萬八點）為財經新聞描寫指數跌破關口之專屬動補結構。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【節省開支】市井口語中生動形容「節約花銷、省錢守住錢包」，地道動賓短語係：",
          "options": [
            "慳荷包 (haan1 ho4 baau1 / Save money / Tighten purse strings)",
            "炒荷包) (Context: 經濟金融、股市波動與民生通脹：「恒指升跌」、「加息週期」、「通脹壓力」)",
            "供荷包) (Context: 經濟金融、股市波動與民生通脹：「恒指升跌」、「加息週期」、「通脹壓力」)",
            "買荷包) (Context: 經濟金融、股市波動與民生通脹：「恒指升跌」、「加息週期」、「通脹壓力」)"
          ],
          "answerIndex": 0,
          "explanation": "「慳荷包」（慳錢）比喻節省開銷、精打細算。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【宏觀經濟】術語「加息週期」（gaa1 sik1 zau1 kei4）對普通置業家庭最直接之影響為：",
          "options": [
            "銀行物業按揭月供款項隨利率上升而增加 (Monthly mortgage repayment burdens increase)",
            "超市物價立刻全部免費) (Context: 經濟金融、股市波動與民生通脹：「恒指升跌」、「加息週期」、「通脹壓力」)",
            "水電費賬單徹底免除) (Context: 經濟金融、股市波動與民生通脹：「恒指升跌」、「加息週期」、「通脹壓力」)",
            "公共交通工具全面停止收費) (Context: 經濟金融、股市波動與民生通脹：「恒指升跌」、「加息週期」、「通脹壓力」)"
          ],
          "answerIndex": 0,
          "explanation": "加息週期下銀行利率上升，直接導致浮動利率按揭家庭之「供樓」負擔顯著加重。"
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
    "title": "環保政策、廢物徵費與可持續綠色生活：「垃圾徵費」、「走塑政策」、「源頭減廢」 (Environmental Policy & Green Living)",
    "level": "B2",
    "objective": "掌握香港環保公共政策論述（垃圾收費、走塑政策、源頭減廢、廚餘回收、碳中和、綠色低碳轉型）之核心專業詞彙與公眾討論句型。",
    "presentation": {
      "explanation": "隨著可持續發展理念深入人心，香港近年推行多項重大環保政策，引發社會廣泛討論：\n\n一、香港環保政策核心關鍵字：\n１．垃圾徵費體系：\n- 「都市固體廢物收費（垃圾徵費）」（dou1 si5 gu3 tai2 fai3 mat6 sau1 fai3）：按『污染者自付』原則推行之廢物收費計劃。\n- 「指定垃圾袋」（zi2 ding6 laap6 saap3 doi6*2）：市民棄置垃圾必須購買之專用環保袋。\n- 「廚餘回收」（cyu4 jyu4 wui4 sau1）：推動有機廚餘分類收集，減少堆填區負荷。\n\n２．管制即棄塑膠政策：\n- 「走塑」（zau2 sok3）：告別/減少使用一次性即棄塑膠餐具及用品。\n- 「即棄膠餐具」（zik1 hei3 gaau1 caan1 geoi6）：塑膠吸管、刀叉、發泡膠飯盒等。\n- 「環保替代品」（waan4 bou2 tai3 doi6 ban2）：紙質、竹木等可降解材料製品。\n\n二、可持續發展理念標語：\n- 「源頭減廢」（jyun4 tau4 gaam2 fai3）：在產品生產與消費源頭減少垃圾產生。\n- 「綠色在區區」（luk6 sik1 zoi6 keoi1 keoi1）：全港社區回收網絡點（綠在區區）。\n- 「碳中和」（taan3 zung1 wo4）：實現溫室氣體淨零排放。",
      "examples": [
        {
          "target": "全港食肆全面落實第一階段走塑政策，堂食禁止提供即棄膠餐具同膠飲管。",
          "reading": "cyun4 gong2 sik6 si3 cyun4 min6 lok6 sat6 dai6 jat1 gaai1 dyun6 zau2 sok3 zing3 caak3, tong4 sik6 gam1 zi2 tai4 gung1 zik1 hei3 gaau1 caan1 geoi6 tung4 gaau1 jam2 gun2. [tsʰyːn˨˩ kɔːŋ˧˥ sɪk̚˨ siː˧ tsʰyːn˨˩ miːn˨ lɔːk̚˨ sɐt̚˨ tɐi˨ jɐt̚˥ kaːi˥ tyːn˨ tsɐu˧˥ sɔːk̚˧ tsɪŋ˧ tsʰaːk̚˧, tʰɔːŋ˨˩ sɪk̚˨ kɐm˥ tsiː˧˥ tʰɐi˨˩ kʊŋ˥ tsɪk̚˥ hei˧ kaːu˥ tsʰaːn˥ kɵy˧ tʰʊŋ˨˩ kaːu˥ jɐm˧˥ kuːn˨] (CHUEN-GONG SIK-SEE CHUEN-MEEN LOK-SUT DY-YUT-GAI-DUEN JAU-SOK JING-CHAHK, TONG-SIK GUM-JEE TY-GONG JIK-HEY-GAU-CHAAN-GOEY TOONG GAU-YUM-GOON)",
          "translation": "Restaurants across Hong Kong have fully implemented the first phase of the plastic-free policy, banning the provision of disposable plastic cutlery and plastic straws for dine-in."
        },
        {
          "target": "要真正達到源頭減廢，除咗推行垃圾徵費之外，仲要全方位加強社區廚餘回收配套。",
          "reading": "jiu3 zan1 zing3 daat6 dou3 jyun4 tau4 gaam2 fai3, ceoi4 zo2 teoi1 hang4 laap6 saap3 zing1 fai3 zi1 ngoi6, zung6 jiu3 cyun4 fong1 wai6 gaa1 koeng4 se5 keoi1 cyu4 jyu4 wui4 sau1 pui3 tou3. [jiu˧ tsɐn˥ tsɪŋ˧ taːt̚˨ tou˧ jyːn˨˩ tʰɐu˨˩ kaːm˧˥ fɐi˧, tsʰɵy˨˩ tsɔː˧˥ tʰɵy˥ hɐŋ˨˩ laːp̚˨ saːp̚˧ tsɪŋ˥ fɐi˧ tsiː˥ ŋɔːi˨, tsʊŋ˨ jiu˧ tsʰyːn˨˩ fɔːŋ˥ wɐi˨ kaː˥ kʰœːŋ˨˩ sɛː˩˧ kʰɵy˥ tsʰyː˨˩ jyː˨˩ wuːi˨˩ sɐu˥ pʰuːi˧ tou˧] (YEW JUN-JING DAHT-DOU YUEN-TAU-GAHM-FY, CHOEY-JOR TOEY-HAHNG LAHP-SAHP-JING-FY JEE-NGOY, JOONG YEW CHUEN-FONG-WAI GAH-KEUNG SEH-KUY CHUE-YUE-WUI-SAU POOY-TOU)",
          "translation": "To genuinely achieve waste reduction at source, in addition to implementing municipal waste charging, it is also necessary to comprehensively strengthen community food waste recycling infrastructure."
        },
        {
          "target": "市民每逢週末都可以帶舊電器同廢紙去『綠在區區』回收站儲積分換取生活用品。",
          "reading": "si5 man4 mui5 fung4 zau1 mut6 dou1 ho2 ji5 daai3 gau6 din6 hei3 tung4 fai3 zi2 heoi3 \"luk6 zoi6 keoi1 keoi1\" wui4 sau1 zaam6 cou5 zik1 fan1 wun6 ceoi2 sang1 wut6 jung6 ban2. [siː˨˩ mɐn˨˩ muːi˩˧ fʊŋ˨˩ tsɐu˥ muːt̚˨ tou˥ hɔː˧˥ jiː˩˧ taːi˧ kɐu˨ tiːn˨ hei˧ tʰʊŋ˨˩ fɐi˧ tsiː˧˥ hɵy˧ \"lʊk̚˨ tsɔːi˨ kʰɵy˥ kʰɵy˥\" wuːi˨˩ sɐu˥ tsaːm˨ tsʰou˩˧ tsɪk̚˥ fɐn˥ wuːn˨ tsʰɵy˧˥ sɐŋ˥ wuːt̚˨ jʊŋ˨ pʰɐn˧˥] (SEE-MUN MOOY-FOONG JAU-MOOT DOH HOH-YEE DY GAU-DEEN-HEY TOONG FY-JEE HOEY \"LUK-JOY-KUY-KUY\" WUI-SAU-JAHM CHOU-JIK-FUN WOON-CHOEY SUNG-WOOT-YOONG-BUN)",
          "translation": "Every weekend, citizens can take old electrical appliances and waste paper to 'Green@Community' recycling stations to accumulate reward points for household necessities."
        }
      ],
      "mnemonics": [
        "【綠色環保訣】外賣自備叫「走塑」，垃圾收費「袋指定」；廚餘分類去回收，「源頭減廢」綠滿城！"
      ],
      "culturalNotes": [
        "「走塑」（告別一次性塑膠）已成為香港人日常生活之高頻流行詞。外賣叫餐時講一句「唔該，走餐具、走飲管」，展現了現代都市人對生態環境之自覺責任感。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【環保生活】在香港餐廳點餐外賣時，表達「不要一次性即棄塑膠餐具和吸管」，地道術語係：",
          "options": [
            "走塑 / 走餐具 (Plastic-free / No disposable cutlery)",
            "走甜) (Context: 環保政策、廢物徵費與可持續綠色生活：「垃圾徵費」、「走塑政策」、「源頭)",
            "走冰) (Context: 環保政策、廢物徵費與可持續綠色生活：「垃圾徵費」、「走塑政策」、「源頭)",
            "走油) (Context: 環保政策、廢物徵費與可持續綠色生活：「垃圾徵費」、「走塑政策」、「源頭)"
          ],
          "answerIndex": 0,
          "explanation": "「走塑」（如同走甜、走冰）指不索取即棄塑膠餐具之環保倡議。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【政策理念】環保宣傳中強調「在消費與生產最前端就減少廢棄物產生」，核心標語係：",
          "options": [
            "源頭減廢 (Waste reduction at source)",
            "炒魷魚) (Context: 環保政策、廢物徵費與可持續綠色生活：「垃圾徵費」、「走塑政策」、「源頭)",
            "食死貓) (Context: 環保政策、廢物徵費與可持續綠色生活：「垃圾徵費」、「走塑政策」、「源頭)",
            "邊有蛤乸跳) (Context: 環保政策、廢物徵費與可持續綠色生活：「垃圾徵費」、「走塑政策」、「源頭)"
          ],
          "answerIndex": 0,
          "explanation": "「源頭減廢」為可持續固體廢物管理之核心政策理念。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【社區網絡】遍佈全港十八區、鼓勵市民將廢紙塑膠玻璃回收換取生活日用品之社區環保網絡名稱為：",
          "options": [
            "綠在區區 (Green@Community)",
            "紅在街市) (Context: 環保政策、廢物徵費與可持續綠色生活：「垃圾徵費」、「走塑政策」、「源頭)",
            "藍在碼頭) (Context: 環保政策、廢物徵費與可持續綠色生活：「垃圾徵費」、「走塑政策」、「源頭)",
            "黃在地鐵) (Context: 環保政策、廢物徵費與可持續綠色生活：「垃圾徵費」、「走塑政策」、「源頭)"
          ],
          "answerIndex": 0,
          "explanation": "「綠在區區」為香港環保署推動之全港性社區回收環保站網絡。"
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
    "title": "公共政策辯論與社論評論高階表達：「有助於……但難以……」、「長遠而言」 (Policy Debates & Editorials)",
    "level": "B2",
    "objective": "掌握高級社論評論與政策辯論之論述邏輯銜接標記（有助於、難以一蹴即至、長遠而言、從宏觀角度審視、平衡各方利益）之高階語言架構。",
    "presentation": {
      "explanation": "撰寫社論、參與公共政策論壇或專業辯論時，需熟練運用邏輯嚴密、視角平衡之高階論證銜接詞：\n\n一、政策論證與辯證評估四大邏輯句式：\n１．效益肯定與局限指出（轉折對比句）：\n- 「……固然有助於【正面效益】，然而單靠此舉實難以徹底根治【深層病灶】。」\n- 範例：「興建簡約公屋固然有助於短期紓緩基層住房困難，然而長遠而言仍需加快開拓土地供應。」\n\n２．宏觀與縱深視角引入標記：\n- 「長遠而言 / 從長遠角度看」（coeng4 jyun5 ji4 jin4）：著眼未來可持續發展。\n- 「從宏觀角度審視」（cung4 wang4 gun1 gok3 dou6 sam2 si6）：跳出局部看全局。\n\n３．多元利益平衡與公眾訴求對接：\n- 「平衡各方利益衝突」（ping4 hang4 gok3 fong1 lei6 jik1 cung1 tat6）。\n- 「顧及基層市民與弱勢社群之承受能力」（gu3 kap6 gei1 cang4 si5 man4 jyu4 joek6 sai3 se5 kwan4 zi1 sing4 sau6 nang4 lik6）。\n\n４．循序漸進與審慎推進：\n- 「難以一蹴即至，必須循序漸進」（naan4 ji5 jat1 cuk1 zik1 zi3, bit1 seoi1 ceon4 zeoi6 zim3 zeon3）。",
      "examples": [
        {
          "target": "推行綠色經濟轉型固然有助於可持續發展，但政策落實過程必須充分顧及中小企業嘅承受能力。",
          "reading": "teoi1 hang4 luk6 sik1 ging1 zai3 zyun2 jing4 gu3 jin4 jau5 zo6 jyu1 ho2 ci4 zuk6 faat3 zin2, daan6 zing3 caak3 lok6 sat6 gwo3 cing4 bit1 seoi1 cung1 fan1 gu3 kap6 zung1 siu2 kei5 jip6 ge3 sing4 sau6 nang4 lik6. [tʰɵy˥ hɐŋ˨˩ lʊk̚˨ sɪk̚˨ kɪŋ˥ tsɐi˧ tsyn˧˥ jɪŋ˨˩ kuː˧ jiːn˨˩ jɐu˩˧ tsɔː˨ jyː˥ hɔː˧˥ tsʰiː˨˩ tsʊk̚˨ faːt̚˧ tsiːn˧˥, taːn˨ tsɪŋ˧ tsʰaːk̚˧ lɔːk̚˨ sɐt̚˨ kʷɔː˧ tsʰɪŋ˨˩ piːt̚˥ sɵy˥ tsʰʊŋ˥ fɐn˨˩ kuː˧ kʰɐp̚˨ tsʊŋ˥ siu˧˥ kʰei˩˧ jiːp̚˨ kɛː˧ sɪŋ˨˩ sɐu˨ nɐŋ˨˩ lɪk̚˨] (TOEY-HAHNG LUK-SIK GING-JAI JUEN-YING GOO-YEEN YAU-JOR-YUE HOH-CHEE-JUK FAHT-JEEN, DAHN JING-CHAHK LOK-SUT GWOR-CHING BIT-SOEY CHOONG-FUN GOO-KUP JOONG-SIU-KEY-YIP GEH SING-SAU-NUNG-LIK)",
          "translation": "Promoting a green economic transition certainly helps sustainable development, but the policy implementation process must fully take into account the bearing capacity of small and medium enterprises."
        },
        {
          "target": "從宏觀角度審視，香港必須積極融入國家發展大局，長遠而言先至可以鞏固國際金融中心地位。",
          "reading": "cung4 wang4 gun1 gok3 dou6 sam2 si6, hoeng1 gong2 bit1 seoi1 zik1 gik6 jung4 jap6 gwok3 gaa1 faat3 zin2 daai6 guk6, coeng4 jyun5 ji4 jin4 sin1 zi3 ho2 ji5 gung2 gu3 gwok3 zai3 gam1 jung4 zung1 sam1 dei6 wai6. [tsʰʊŋ˨˩ wɐŋ˨˩ kuːn˥ kɔːk̚˧ tou˨ sɐm˧˥ siː˨, hœːŋ˥ kɔːŋ˧˥ piːt̚˥ sɵy˥ tsɪk̚˥ kɪk̚˨ jʊŋ˨˩ jɐp̚˨ kʷɔːk̚˧ kaː˥ faːt̚˧ tsiːn˧˥ taːi˨ kʊk̚˨, tsʰœːŋ˨˩ jyːn˩˧ jiː˨˩ jiːn˨˩ siːn˥ tsiː˧ hɔː˧˥ jiː˩˧ kuːŋ˧˥ kuː˧ kʷɔːk̚˧ tsɐi˧ kɐm˥ jʊŋ˨˩ tsʊŋ˥ sɐm˥ tei˨ wɐi˨] (CHOONG WUNG-GOON GOK-DOU SUM-SEE, HEUNG-GONG BIT-SOEY JIK-GIK YOONG-YUP GWOK-GAH FAHT-JEEN DY-GOK, CHEUNG-YUEN-YEE-YEEN SEEN-JEE HOH-YEE GOONG-GOO GWOK-JAI GUM-YOONG JOONG-SUM DAY-WAI)",
          "translation": "Examining from a macro perspective, Hong Kong must actively integrate into the national development blueprint; only then, in the long run, can it consolidate its position as an international financial centre."
        },
        {
          "target": "任何重大公共政策都牽一髮而動全身，當局必須在推動改革同保持社會穩定之間取得最佳平衡。",
          "reading": "jam6 ho4 zung6 daai6 gung1 gung6 zing3 caak3 dou1 hin1 jat1 faat3 ji4 dung6 cyun4 san1, dong1 guk6 bit1 seoi1 zoi6 teoi1 dung6 goi2 gaak3 tung4 bou2 ci4 se5 wui6*2 wan2 ding6 zi1 gaan1 cak1 dak1 zeoi3 gaai1 ping4 hang4. [jɐm˨ hɔː˨˩ tsʊŋ˨ taːi˨ kʊŋ˥ kʊŋ˨ tsɪŋ˧ tsʰaːk̚˧ tou˥ hiːn˥ jɐt̚˥ faːt̚˧ jiː˨˩ tʊŋ˨ tsʰyːn˨˩ sɐn˥, tɔːŋ˥ kʊk̚˨ piːt̚˥ sɵy˥ tsɔːi˨ tʰɵy˥ tʊŋ˨ kɔːi˧˥ kaːk̚˧ tʰʊŋ˨˩ pou˧˥ tsʰiː˨˩ sɛː˩˧ wuːi˨ wɐn˧˥ tɪŋ˨ tsiː˥ tsʰaːk̚˥ tɐk̚˥ tsɵy˧ kaːi˥ pʰɪŋ˨˩ hɐŋ˨˩] (YUM-HOH JOONG-DY GONG-GONG JING-CHAHK DOH HEEN-YUT-FAHT-YEE-DOONG-CHUEN-SUN, DONG-GOK BIT-SOEY JOY TOEY-DOONG GOY-GAAK TOONG BOU-CHEE SEH-WUI WUN-DING JEE-GAHN CHUK-DUK JEOY-GY PING-HUNG)",
          "translation": "Any major public policy affects the whole situation with a slight move; the authorities must strike the best balance between promoting reform and maintaining social stability."
        }
      ],
      "mnemonics": [
        "【政策社論歌】正面效益「有助於」，深入剖析「宏觀審」；長遠縱深「長遠言」，兼顧各方「平衡尋」！"
      ],
      "culturalNotes": [
        "香港主流大報（如《明報》、《信報》、《香港經濟日報》）之社論與評論版面，展現了高度成熟之雙語政策論辯語言。掌握此類句式，係在香港高等教育與公共決策智庫中開展專業交流之必備技能。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【社論銜接】在政策評論中客觀表述「這項措施對緩解短期問題有幫助，但無法從根本上徹底解決」，應使用之論證句式係：",
          "options": [
            "固然有助於……然而難以徹底解決…… (Certainly helps... however difficult to completely solve)",
            "完全冇用兼阿茂整餅) (Context: 公共政策辯論與社論評論高階表達：「有助於……但難以……」、「長遠而言」)",
            "一目了然唔使諗) (Context: 公共政策辯論與社論評論高階表達：「有助於……但難以……」、「長遠而言」)",
            "神仙過鐵橋包解決) (Context: 公共政策辯論與社論評論高階表達：「有助於……但難以……」、「長遠而言」)"
          ],
          "answerIndex": 0,
          "explanation": "「固然有助於……然而難以徹底解決……」為政策社論中辨析局部效益與深層局限之經典平衡句式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【宏觀視角】引導讀者跳出當前微觀局部爭拗、從未來整體戰略視角評估政策，應引出之書面銜接詞係：",
          "options": [
            "從宏觀角度審視，長遠而言…… (Examined macroscopically, in the long run...)",
            "即刻執輸行頭慘過敗家) (Context: 公共政策辯論與社論評論高階表達：「有助於……但難以……」、「長遠而言」)",
            "大家算罷啦) (Context: 公共政策辯論與社論評論高階表達：「有助於……但難以……」、「長遠而言」)",
            "食死貓算數) (Context: 公共政策辯論與社論評論高階表達：「有助於……但難以……」、「長遠而言」)"
          ],
          "answerIndex": 0,
          "explanation": "「從宏觀角度審視 / 長遠而言」為高階社論評論之專業視角轉換標記。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【政策論辯架構】優秀公共政策社論的核心論述特徵在於：",
          "options": [
            "邏輯嚴密、視角宏觀，既肯定政策正面效益，又辯證指出執行局限並提出建設性平衡方案 (Rigorous logic, macro perspective & constructive balance)",
            "盲目情緒化宣洩或人身攻擊) (Context: 公共政策辯論與社論評論高階表達：「有助於……但難以……」、「長遠而言」)",
            "只堆砌市井歇後語而無實質數據支持) (Context: 公共政策辯論與社論評論高階表達：「有助於……但難以……」、「長遠而言」)",
            "全盤否定所有公共治理措施) (Context: 公共政策辯論與社論評論高階表達：「有助於……但難以……」、「長遠而言」)"
          ],
          "answerIndex": 0,
          "explanation": "專業社論依託嚴謹的邏輯論證、宏觀辯證視角以及兼顧多方利益之平衡建設性。"
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
    "title": "商務粵語與公文寫作：會議協調、審批流程與財務跟進 (Business Operations & Approvals)",
    "level": "B2",
    "objective": "掌握現代香港商務職場核心辦公協調與財務流程術語（跟進、過目、批核、過數、開單、找數、報銷）之精準運用。",
    "presentation": {
      "explanation": "香港商務粵語（Business Cantonese）融合了英式職場管理效率與嶺南傳統商業禮儀，具備高度精簡、專業與務實之特點：\n\n一、項目推進與審批流程核心術語：\n１．工作進度與協調：\n- 「跟進（Follow up）」（gan1 zeon3）：追蹤項目進展並落實後續工作。\n- 「過目」（gwo3 muk6）：恭請主管或合作夥伴審閱文件（敬語）。\n- 「批核 / 審批」（pai1 hat6 / sam2 pai1）：主管簽署同意方案或預算。\n- 「落實細節」（lok6 sat6 sai3 zit3）：將方案具體化為可執行步驟。\n\n二、財務結算與會計出納術語：\n１．款項支付與發票：\n- 「過數 / 轉賬」（gwo3 sou3 / zyun2 zoeng3）：銀行轉賬匯款。\n- 「開單 / 出發票」（hoi1 daan1 / ceot1 faat3 piu3）：開具銷售單據或商業發票（Invoice）。\n- 「找數 / 結清」（zaau2 sou3 / git3 cing1）：結清應付賬款或債務。\n- 「報銷（Claim錢）」（bou3 siu1 / klem1 cin2）：向公司申報公務支出補償。\n- 「期限 / 截止日（Deadline）」（kit3 zi2 jat6 / det1 laai1）：任務提交最後時限。",
      "examples": [
        {
          "target": "份項目預算案我已經調整好，請陳總抽空過目批核，以便我哋下星期正式落實執行。",
          "reading": "fan6 hong6 muk6 jyu6 syun3 on3 ngo5 ji5 ging1 tiu4 zing2 hou2, cing2 can4 zung2 cau1 hung1 gwo3 muk6 pai1 hat6, ji5 bin6 ngo5 dei6 haa6 sing1 kei4 zing3 sik1 lok6 sat6 zap1 hang4. [fɐn˨ hɔːŋ˨ mʊk̚˨ jyː˨ syːn˧ ɔːn˧ ŋɔː˩˧ jiː˩˧ kɪŋ˥ tʰiːu˨˩ tsɪŋ˧˥ hou˧˥, tsʰɪŋ˧˥ tsʰɐn˨˩ tsʊŋ˧˥ tsʰɐu˥ hʊŋ˥ kʷɔː˧ mʊk̚˨ pʰaːi˥ hɐt̚˨, jiː˩˧ piːn˨ ŋɔː˩˧ tei˨ haː˨ sɪŋ˥ kʰei˨˩ tsɪŋ˧ sɪk̚˥ lɔːk̚˨ sɐt̚˨ tsɐp̚˥ hɐŋ˨˩] (FUN HOHNG-MOK YUE-SUEN-ON NGOH YEE-GING TEW-JING-HOH, CHING CHUN-JOONG CHAU-HOONG GWOR-MOK PY-HUT, YEE-BEEN NGOH-DAY HAH-SING-KEY JING-SIK LOK-SUT JUP-HAHNG)",
          "translation": "I have adjusted the project budget proposal; please take time to review and approve it, Mr. Chan, so that we can formally implement it next week."
        },
        {
          "target": "會計部已經將今期供應商嘅貨款全部過咗數，發票亦都已經開單寄出。",
          "reading": "wui6 gai3 bou6 ji5 ging1 zoeng1 gam1 kei4 gung1 jing3 soeng1 ge3 fo3 fun2 cyun4 bou6 gwo3 zo2 sou3, faat3 piu3 jik6 dou1 ji5 ging1 hoi1 daan1 gei3 ceot1. [wuːi˨ kɐi˧ pou˨ jiː˩˧ kɪŋ˥ tsœːŋ˥ kɐm˥ kʰei˨˩ kʊŋ˥ jɪŋ˧ sœːŋ˥ kɛː˧ fɔː˧ fuːn˧˥ tsʰyːn˨˩ pou˨ kʷɔː˧ tsɔː˧˥ sou˧, faːt̚˧ pʰiːu˧ jɪk̚˨ tou˥ jiː˩˧ kɪŋ˥ hɔːi˥ taːn˥ kei˧ tsʰɵt̚˥] (WUI-GY-BOU YEE-GING JEUNG GUM-KEY GONG-YING-SEUNG GEH FOH-FOON CHUEN-BOU GWOR-JOR-SOU, FAHT-PEW YIK DOH YEE-GING HOI-DAHN GAY-CHUT)",
          "translation": "The accounts department has already transferred all payment amounts to the suppliers for this period, and the invoices have also been issued and mailed out."
        },
        {
          "target": "出差返嚟記得喺三個工作天內交齊單據畀行政部報銷，千祈唔好過咗截止日期。",
          "reading": "ceot1 caai1 faan1 lai4 gei3 dak1 hai2 saam1 go3 gung1 zok3 tin1 noi6 gaau1 cai4 daan1 geoi3 bei2 hang4 zing3 bou6 bou3 siu1, cin1 kei4 m4 hou2 gwo3 zo2 kit3 zi2 jat6 kei4. [tsʰɵt̚˥ tsʰaːi˥ faːn˥ lɐi˨˩ kei˧ tɐk̚˥ hɐi˩˧ saːm˥ kɔː˧ kʊŋ˥ tsɔːk̚˧ tʰiːn˥ nɔːi˨ kaːu˥ tsʰɐi˨˩ taːn˥ kɵy˧ pei˨ hɐŋ˨˩ tsɪŋ˧ pou˨ pou˧ siːu˥, tsʰiːn˥ kʰei˨˩ m̩˨˩ hou˧˥ kʷɔː˧ tsɔː˧˥ kʰiːt̚˧ tsiː˧˥ jɐt˨ kʰei˨˩] (CHUT-CHY FAHN-LY GAY-DUK HY SAHM-GOH GONG-JOK-TEEN NOY GAU-CHY DAHN-GOEY BAY HAHNG-JING-BOU BOU-SIU, CHEEN-KEY M-HOH GWOR-JOR KEET-JEE YUT-KEY)",
          "translation": "Remember to submit all receipts to the administration department for expense claims within three working days after returning from the business trip; never exceed the deadline."
        }
      ],
      "mnemonics": [
        "【商務辦公歌】項目推進要「跟進」，呈遞主管請「過目」；銀行匯款叫「過數」，開單發票「找數」清！"
      ],
      "culturalNotes": [
        "香港外企與本地企業普遍存在混合英語術語之商務粵語習慣（如『跟進個Issue』、『Confirm個Meeting』）。但在正式書面公文與高層會議匯報時，規範純粹之商務粵語詞彙更顯莊重專業。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【財務流程】在廣東話商業語境中，指稱「向客戶開具收費單據或發票」，標準動賓短語係：",
          "options": [
            "開單 (hoi1 daan1 / Issue invoice or bill)",
            "炒單) (Context: 商務粵語與公文寫作：會議協調、審批流程與財務跟進 (Business )",
            "食單) (Context: 商務粵語與公文寫作：會議協調、審批流程與財務跟進 (Business )",
            "走單) (Context: 商務粵語與公文寫作：會議協調、審批流程與財務跟進 (Business )"
          ],
          "answerIndex": 0,
          "explanation": "「開單 / 出單」指開立商業收費發票或賬單。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【審批敬語】將方案文件呈交主管請其審閱時，最得體禮貌之敬語詞彙係：",
          "options": [
            "請主管過目 (Please review / inspect)",
            "請主管食死貓) (Context: 商務粵語與公文寫作：會議協調、審批流程與財務跟進 (Business )",
            "請主管算罷啦) (Context: 商務粵語與公文寫作：會議協調、審批流程與財務跟進 (Business )",
            "請主管邊度跳) (Context: 商務粵語與公文寫作：會議協調、審批流程與財務跟進 (Business )"
          ],
          "answerIndex": 0,
          "explanation": "「過目」為商務公文中懇請對方審閱之莊重敬語。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【商業結算】短語「找清貨款」（zaau2 cing1 fo3 fun2）在粵語商業活動中之準確含義為：",
          "options": [
            "全額結清應付貨物款項 (Settling all outstanding merchandise payments)",
            "尋找丟失的貨物) (Context: 商務粵語與公文寫作：會議協調、審批流程與財務跟進 (Business )",
            "給予客戶折扣優惠) (Context: 商務粵語與公文寫作：會議協調、審批流程與財務跟進 (Business )",
            "拒絕支付貨款) (Context: 商務粵語與公文寫作：會議協調、審批流程與財務跟進 (Business )"
          ],
          "answerIndex": 0,
          "explanation": "「找數 / 找清」為粵語商業傳統中結清賬目之核心術語。"
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
    "title": "商務公文、書信函件與電郵得體格式：「茲通知」、「承蒙支持」、「敬請查照」 (Formal Business Correspondence)",
    "level": "B2",
    "objective": "掌握嶺南與香港專業商務公函、電郵及正式通知之書面語體規範（茲通知、承蒙、隨函附上、敬請查照、如蒙賜教、祝商祺）。",
    "presentation": {
      "explanation": "香港與大灣區商務公函書信保留了典雅考究之傳統尺牘（書信）文風，並與現代企業電郵規範完美結合：\n\n一、正式商務公函與電郵三大核心區塊格式：\n１．起首發端與背景引介詞（Opening Invocations）：\n- 「茲特函告 / 茲通知」（zi1 dak6 haam4 gou3 / zi1 tung1 zi1）：特以此信件正式告知。\n- 「承蒙 貴公司大力支持」（sing4 mung4 gwai3 gung1 si1 daai6 lik6 zi1 ci4）：承蒙貴方支持與信任（抬頭敬語空一格）。\n- 「頃接 來函，敬悉一切」（king2 zip3 loi4 haam4, ging3 sik1 jat1 cai3）：剛收到來信，已悉知全部內容。\n\n２．正文附件與請求查閱標記（Body & Attachments）：\n- 「隨函附上 / 隨電郵附呈」（ceoi4 haam4 fu6 soeng6）：附隨本郵件呈遞文件。\n- 「敬請 查照 / 審閱」（ging3 cing2 caa4 ziu3 / sam2 jyut6）：恭請審查過目。\n\n３．結尾祝頌與期待回音（Closing & Salutations）：\n- 「如蒙 賜教，不勝感荷」（jyu4 mung4 ci3 gaau3, bat1 sing1 gam2 ho4）：若蒙指教，感激不盡。\n- 「祝 商祺 / 順祝 商安」（zuk1 soeng1 kei4 / seon6 zuk1 soeng1 on1）：祝願商務順遂吉慶。\n- 「【署名】 謹啟 / 敬上」（gan2 kai2 / ging3 soeng6）。",
      "examples": [
        {
          "target": "承蒙 貴公司多年來嘅信任與鼎力支持，本公司深表謝意，並期待未來進一步深化合作。",
          "reading": "sing4 mung4 gwai3 gung1 si1 do1 nin4 loi4 ge3 seon3 jam6 jyu4 ding2 lik6 zi1 ci4, bun2 gung1 si1 sam1 biu2 ze6 ji3, bing6 kei4 doi6 mei6 loi4 zeon3 jat1 bou6 sam1 faa3 hap6 zok3. [sɪŋ˨˩ mʊŋ˨˩ kʷɐi˧ kʊŋ˥ siː˥ tɔː˥ niːn˨˩ lɔːi˨˩ kɛː˧ sɵn˧ jɐm˨ jyː˩˧ tɪŋ˧˥ lɪk̚˨ tsiː˥ tsʰiː˨, puːn˧˥ kʊŋ˥ siː˥ sɐm˥ piːu˧˥ tsɛː˨ jiː˧, pɪŋ˨ kʰei˨˩ tɔːi˨ mei˨ lɔːi˨˩ tsɵn˧ jɐt̚˥ pou˨ sɐm˥ faː˧ hɐp̚˨ tsɔːk̚˧] (SING-MOONG GWY GONG-SEE DOH-NEEN-LY GEH SEUN-YUM YUE DING-LIK JEE-CHEE, BOON GONG-SEE SUM-BEW JEH-YEE, BING KEY-DOY MAY-LY JUEN-YUT-BOU SUM-FAH HUP-JOK)",
          "translation": "Greatly appreciated by your company's trust and tremendous support over the years, our company expresses profound gratitude and looks forward to further deepening our cooperation in the future."
        },
        {
          "target": "隨電郵附上最新合作協議草案及報價單，敬請 貴方查照，如有任何疑問歡迎隨時垂詢。",
          "reading": "ceoi4 din6 jau4 fu6 soeng6 zeoi3 san1 hap6 zok3 hip3 ji5 cou2 on3 kap6 bou3 gaa3 daan1, ging3 cing2 gwai3 fong1 caa4 ziu3, jyu4 jau5 jam6 ho4 ji4 man6 fun1 jing4 ceoi4 si4 seoi4 seon1. [tsʰɵy˨˩ tiːn˨ jɐu˩˧ fu˨ sœːŋ˨ tsɵy˧ sɐn˥ hɐp̚˨ tsɔːk̚˧ hiːp̚˧ jiː˩˧ tsʰou˧˥ ɔːn˧ kʰɐp̚˨ pou˧ kaː˧ taːn˥, kɪŋ˧ tsʰɪŋ˧˥ kʷɐi˧ fɔːŋ˥ tsʰaː˥ tsiːu˧, jyː˨˩ jɐu˩˧ jɐm˨ hɔː˨˩ jiː˨˩ mɐn˨˩ fuːn˥ jɪŋ˨˩ tsʰɵy˨˩ siː˨˩ sɵy˨˩ sɵn˥] (CHOEY DEEN-YAU FOO-SEUNG JEOY-SUN HUP-JOK HIP-YEE CHOU-ON KUP BOU-GAH-DAHN, GING-CHING GWY-FONG CHAH-JEW, YUE-YAU YUM-HOH YEE-MUN FOON-YING CHOEY-SEE SOEY-SEUN)",
          "translation": "Attached with this email are the latest draft cooperation agreement and quotation sheet; we respectfully invite your party to inspect them, and please feel free to inquire if you have any questions."
        },
        {
          "target": "茲通知各部門主管，下年度業務戰略規劃會議將於本月二十五號上午十時準時召開。",
          "reading": "zi1 tung1 zi1 gok3 bou6 mun4 zyu2 gun2, haa6 nin4 dou6 jip6 mou6 zin3 loek6 kwai1 waak6 wui6*2 ji3 zoeng1 jyu1 bun2 jyut6 ji6 sap6 ng5 hou6 soeng6 ng5 sap6 si4 zeon2 si4 ziu1 hoi1. [tsiː˥ tʰʊŋ˥ tsiː˥ kɔːk̚˧ pou˨ muːn˨˩ tsyː˧˥ kuːn˧˥, haː˨ niːn˨˩ tou˨ jiːp̚˨ mou˨ tsiːn˧ lœːk̚˨ kʰwɐi˥ waːk̚˨ wuːi˨ jiː˧ tsœːŋ˥ jyː˥ puːn˧˥ jyːt̚˨ ji˨ sɐp̚˨ ŋ̩˩˧ hou˨ sœːŋ˨ ŋ̩˩˧ sɐp̚˨ siː˨˩ tsɵn˧˥ siː˨˩ tsiːu˥ hɔːi˥] (JEE-TOONG-JEE GOK-BOU-MOON JUE-GOON, HAH-NEEN-DOU YIP-MOU JEEN-LEUK KWAI-WAAK WUI-YEE JEUNG-YUE BOON-YUET YEE-SUP-NG-HOU SEUNG-NG SUP-SEE JUEN-SEE JEW-HOI)",
          "translation": "Notice is hereby given to all department heads that the business strategic planning meeting for next year will be punctually convened at 10:00 AM on the 25th of this month."
        }
      ],
      "mnemonics": [
        "【公文書信歌】正式告知「茲通知」，承蒙關照「承蒙提」；附件呈遞「隨函附」，敬請查照「祝商祺」！"
      ],
      "culturalNotes": [
        "香港傳統商行與現代大型律師行、投行在公函中對「抬頭空格敬語」（如『承蒙 貴公司』）有嚴格禮貌要求，體現了對合作夥伴之崇高敬意。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【商務電郵結尾】正式商務書信最標準典雅之結尾祝頌語係：",
          "options": [
            "祝 商祺 (Wishing business prosperity)",
            "祝 算罷啦) (Context: 商務公文、書信函件與電郵得體格式：「茲通知」、「承蒙支持」、「敬請查照)",
            "祝 炒魷魚) (Context: 商務公文、書信函件與電郵得體格式：「茲通知」、「承蒙支持」、「敬請查照)",
            "祝 泥菩薩) (Context: 商務公文、書信函件與電郵得體格式：「茲通知」、「承蒙支持」、「敬請查照)"
          ],
          "answerIndex": 0,
          "explanation": "「祝 商祺」為中文正式商務往來公函之標準祝福語。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【公函發端】公函開頭鄭重告知各方某項官方決議，傳統標準起首語係：",
          "options": [
            "茲特函告 / 茲通知 (Hereby notify)",
            "聽講話通知大家) (Context: 商務公文、書信函件與電郵得體格式：「茲通知」、「承蒙支持」、「敬請查照)",
            "阿茂話畀你知) (Context: 商務公文、書信函件與電郵得體格式：「茲通知」、「承蒙支持」、「敬請查照)",
            "食死貓式通知) (Context: 商務公文、書信函件與電郵得體格式：「茲通知」、「承蒙支持」、「敬請查照)"
          ],
          "answerIndex": 0,
          "explanation": "「茲通知 / 茲特函告」為正式公文起首之標準法定用語。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【附件提示】商務電郵中提請對方查看附隨合同草案時，最得體之表達為：",
          "options": [
            "隨電郵附呈合作協議，敬請 查照 (Agreement attached, respectfully invite review)",
            "隨便睇下個協議啦) (Context: 商務公文、書信函件與電郵得體格式：「茲通知」、「承蒙支持」、「敬請查照)",
            "協議放喺度你愛理不理) (Context: 商務公文、書信函件與電郵得體格式：「茲通知」、「承蒙支持」、「敬請查照)",
            "協議唔准睇) (Context: 商務公文、書信函件與電郵得體格式：「茲通知」、「承蒙支持」、「敬請查照)"
          ],
          "answerIndex": 0,
          "explanation": "「隨電郵附呈……敬請查照」結合了精準格式與高度商業禮儀。"
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
    "title": "商務談判、合同條款與讓步博弈：「傾條件」、「底線」、「各讓一步」 (Negotiations & Contracts)",
    "level": "B2",
    "objective": "掌握高階商業談判策略、合同條款約定、利益妥協博弈（傾條件、底線、讓步、諒解備忘錄、違約責任、互利共贏）之專業話術。",
    "presentation": {
      "explanation": "商業談判係智慧、心理博弈與語言藝術之綜合展現。在商務粵語中，談判各階段有專屬之策略表達：\n\n一、談判博弈與底線設定核心矩陣：\n１．條件洽商與立場探詢：\n- 「傾條件」（king1 tiu4 gin6*2）：商討合作具體條款與權責劃分。\n- 「我方底線」（ngo5 fong1 dai2 sin3）：不可再作退讓之最低利益紅線。\n- 「保留追究權利」（bou2 lau4 zeoi1 gau3 kyun4 lei6）：若對方違約，保留採取法律行動之權利。\n\n２．妥協讓步與雙贏共識：\n- 「各讓一步」（gok3 joeng6 jat1 bou6）：雙方均作出適度妥協以打破僵局。\n- 「尋求雙贏方案 / 互利共贏」（cam4 kau4 soeng1 jing4 fong1 on3 / wu6 lei6 gung6 jing4）。\n\n３．合同法律文件簽署：\n- 「簽署諒解備忘錄（MOU）」（cim1 cyu5 loeng6 gaai2 bei6 mong4 luk1）：確立初步合作意向。\n- 「具有法律約束力之正式合約」（geoi6 jau5 faat3 leot6 joek3 cuk1 lik6 ge3 zing3 sik1 hap6 joek3）。\n- 「違約賠償條款」（wai4 joek3 pui4 soeng4 tiu4 fun2）。",
      "examples": [
        {
          "target": "喺價格條款上呢個已經係我方嘅底線，如果貴公司能夠喺付款週期上作出適當讓步，我哋即刻可以簽約。",
          "reading": "hai2 gaa3 gaak3 tiu4 fun2 soeng6 ni1 go3 ji5 ging1 hai6 ngo5 fong1 ge3 dai2 sin3, jyu4 gwo2 gwai3 gung1 si1 nang4 gau3 hai2 fu6 fun2 zau1 kei4 soeng6 zok3 ceot1 sik1 dong3 joeng6 bou6, ngo5 dei6 zik1 hak1 ho2 ji5 cim1 joek3. [hɐi˩˧ kaː˧ kaːk̚˧ tʰiːu˨˩ fuːn˧˥ sœːŋ˨ niː˥ kɔː˧ jiː˩˧ kɪŋ˥ hɐi˨ ŋɔː˩˧ fɔːŋ˥ kɛː˧ tɐi˧˥ siːn˧, jyː˨˩ kʷɔː˧˥ kʷɐi˧ kʊŋ˥ siː˥ nɐŋ˨˩ kɐu˧ hɐi˩˧ fu˨ fuːn˧˥ tsɐu˥ kʰei˨˩ sœːŋ˨ tsɔːk̚˧ tsʰɵt̚˥ sɪk̚˥ tɔːŋ˧ jœːŋ˨ pou˨, ŋɔː˩˧ tei˨ tsɪk̚˥ hɐk̚˥ hɔː˧˥ jiː˩˧ tsʰiːm˥ jœːk̚˧] (HY GAH-GAAK TEW-FOON SEUNG NEE-GOH YEE-GING HY NGOH-FONG GEH DY-SEEN, YUE-GWOR GWY GONG-SEE NUNG-GAU HY FOO-FOON JAU-KEY SEUNG JOK-CHUT SIK-DONG YEUNG-BOU, NGOH-DAY JIK-HUK HOH-YEE CHEEM-YERK)",
          "translation": "Regarding the pricing terms, this is already our bottom line; if your company can make appropriate concessions on the payment cycle, we can sign the contract immediately."
        },
        {
          "target": "為咗促成今次跨國戰略併購，雙方代表決定各讓一步，終於喺午夜達成互利共贏嘅共識。",
          "reading": "wai6 zo2 cuk1 sing4 gam1 ci3 kwaa1 gwok3 zin3 loek6 bing3 gau3, soeng1 fong1 doi6 biu2 kyut3 ding6 gok3 joeng6 jat1 bou6, zung1 jyu1 hai2 ng5 je6 daat6 sing4 wu6 lei6 gung6 jing4 ge3 gung6 sik1. [wɐi˨ tsɔː˧˥ tsʰʊk̚˥ sɪŋ˨˩ kɐm˥ tsʰiː˧ kʰwaː˥ kʷɔːk̚˧ tsiːn˧ lœːk̚˨ pɪŋ˧ kɐu˧, sœːŋ˥ fɔːŋ˥ tɔːi˨ piːu˧˥ kʰyːt̚˧ tɪŋ˨ kɔːk̚˧ jœːŋ˨ jɐt̚˥ pou˨, tsʊŋ˥ jyː˥ hɐi˩˧ ŋ̩˩˧ jɛː˨ taːt̚˨ sɪŋ˨˩ wuː˨ lei˨ kʊŋ˨˩ jɪŋ˨˩ kɛː˧ kʊŋ˨˩ sɪk̚˥] (WAI-JOR CHUK-SING GUM-CHEE KWAH-GWOK JEEN-LEUK BING-GAU, SEUNG-FONG DY-BEW KUET-DING GOK-YEUNG YUT-BOU, JOONG-YUE HY NG-YEH DAHT-SING WOO-LEY-GONG-YING GEH GONG-SIK)",
          "translation": "In order to facilitate this cross-border strategic acquisition, representatives from both sides decided to each take a step back and make concessions, finally reaching a win-win consensus at midnight."
        },
        {
          "target": "雙方今日正式簽署咗諒解備忘錄，確認咗合作原則，下階段將交由律師擬定正式合約條款。",
          "reading": "soeng1 fong1 gam1 jat6 zing3 sik1 cim1 cyu5 zo2 loeng6 gaai2 bei6 mong4 luk1, kok3 jin6 zo2 hap6 zok3 jyun4 zak1, haa6 gaai1 dyun6 zoeng1 gaau1 jau4 leot6 si1 ji4 ding6 zing3 sik1 hap6 joek3 tiu4 fun2. [sœːŋ˥ fɔːŋ˥ kɐm˥ jɐt˨ tsɪŋ˧ sɪk̚˥ tsʰiːm˥ tsʰyː˩˧ tsɔː˧˥ lœːŋ˨ kaːi˧˥ pei˨ mɔːŋ˨˩ lʊk̚˨, kʰɔːk̚˧ jiːn˨ tsɔː˧˥ hɐp̚˨ tsɔːk̚˧ jyːn˨˩ tsɐk̚˥, haː˨ kaːi˥ tyːn˨ tsœːŋ˥ kaːu˥ jɐu˨˩ lɵt̚˨ siː˥ jiː˨˩ tɪŋ˨ tsɪŋ˧ sɪk̚˥ hɐp̚˨ joek̚˧ tʰiːu˨˩ fuːn˧˥] (SEUNG-FONG GUM-YUT JING-SIK CHEEM-CHUE-JOR LEUNG-GAI-BAY-MONG-LOK, KOK-YEEN-JOR HUP-JOK YUEN-JUK, HAH-GAI-DUEN JEUNG GAU-YAU LUT-SEE YEE-DING JING-SIK HUP-YERK TEW-FOON)",
          "translation": "Both parties formally signed a Memorandum of Understanding today, confirming the principles of cooperation, and the next phase will be handed over to lawyers to draft the formal contract clauses."
        }
      ],
      "mnemonics": [
        "【談判博弈歌】洽商條款「傾條件」，堅守原則「底線堅」；互諒互讓「各退步」，合作共贏「簽字前」！"
      ],
      "culturalNotes": [
        "「傾條件」體現了香港商業文化之務實精神。在香港談判中，直奔主題、清晰列出各方底線與權責邊界，被視為最高效、最誠懇之商業素養。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【談判妥協】形容談判雙方各自作出讓步以消除分歧、達成共識，經典短語係：",
          "options": [
            "各讓一步 (Each take a step back / Mutual concession)",
            "邊有蛤乸跳) (Context: 商務談判、合同條款與讓步博弈：「傾條件」、「底線」、「各讓一步」 (N)",
            "食得鹹魚渴) (Context: 商務談判、合同條款與讓步博弈：「傾條件」、「底線」、「各讓一步」 (N)",
            "阿茂整餅式) (Context: 商務談判、合同條款與讓步博弈：「傾條件」、「底線」、「各讓一步」 (N)"
          ],
          "answerIndex": 0,
          "explanation": "「各讓一步」指雙方互相妥協、尋求利益平衡點。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【法律意向】在正式合同簽署前，雙方先行簽訂之初步合作意向文件名稱係：",
          "options": [
            "諒解備忘錄（MOU） (Memorandum of Understanding)",
            "炒魷魚協議) (Context: 商務談判、合同條款與讓步博弈：「傾條件」、「底線」、「各讓一步」 (N)",
            "食檸檬保證書) (Context: 商務談判、合同條款與讓步博弈：「傾條件」、「底線」、「各讓一步」 (N)",
            "水過鴨背記錄) (Context: 商務談判、合同條款與讓步博弈：「傾條件」、「底線」、「各讓一步」 (N)"
          ],
          "answerIndex": 0,
          "explanation": "「諒解備忘錄（MOU）」為商務談判初步階段確立合作框架之法定意向書。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【底線定義】在商業合約洽商中，「我方底線」所指的具體含義為：",
          "options": [
            "我方在談判中所能接受之最低限度利益條件，逾此則寧可放棄合作 (The non-negotiable minimum acceptable terms)",
            "辦公室最底層的地板線) (Context: 商務談判、合同條款與讓步博弈：「傾條件」、「底線」、「各讓一步」 (N)",
            "合同最下方的一條橫線) (Context: 商務談判、合同條款與讓步博弈：「傾條件」、「底線」、「各讓一步」 (N)",
            "無條件答應對方所有苛刻要求) (Context: 商務談判、合同條款與讓步博弈：「傾條件」、「底線」、「各讓一步」 (N)"
          ],
          "answerIndex": 0,
          "explanation": "「底線」指談判中不可逾越之最低利益與原則邊界。"
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
    "title": "客戶服務、客訴處理與危機公關化解：「添麻煩」、「專人跟進」、「妥善解決」 (Customer Relations & Crisis PR)",
    "level": "B2",
    "objective": "掌握高情商客訴處理、同理心致歉、危機公關化解與客戶信任重塑（唔好意思畀您添麻煩、專人跟進、妥善解決、全額退款）之高階話術。",
    "presentation": {
      "explanation": "在服務業極度發達之香港，處理客戶投訴（Complaint）與公關危機要求極高之情商與得體話術：\n\n一、客訴處理四步黃金法則與話術矩陣：\n１．第一步：誠懇致歉與同理心共情（Empathy & Apology）：\n- 「唔好意思畀您添咗咁多麻煩」（m4 hou2 ji3 si1 bei2 nei5 tim1 zo2 gam3 do1 maa4 faan4）：真誠致歉並肯定對方的困擾。\n- 「我哋非常理解您嘅焦急同不滿」（ngo5 dei6 fei1 soeng4 lei5 gaai2 nei5 ge3 ziu1 gap1 tung4 bat1 mun5）。\n\n２．第二步：即時承諾行動與責任認領（Action & Ownership）：\n- 「我哋會即時安排專人跟進調查」（zik1 si4 on1 paai4 zyun1 jan4 gan1 zeon3）。\n- 「承諾喺二十四小時之內畀到滿意嘅答覆」（sing4 nok6 hai2... bei2 dou3 mun5 ji3 ge3 daap3 fuk1）。\n\n３．第三步：提供補救方案與妥善解決（Remediation）：\n- 「安排全額退款或免費換貨」（on1 paai4 cyun4 ngaak6 teoi3 fun2 waak6 min5 fai3 wun6 fo3）。\n- 「妥善解決問題，確保顧客權益」（to5 sin6 gaai2 kyut3 man6 tai4）。\n\n４．第四步：致謝反饋與重塑信任（Gratitude & Trust）：\n- 「多謝您寶貴嘅意見，促使我哋提升服務質素」（do1 ze6 nei5 bou2 gwai3 ge3 ji3 gin3...）。",
      "examples": [
        {
          "target": "陳生您好，真係唔好意思畀您添咗咁多麻煩！我哋經理已經親自跟進緊呢個個案，保證今日內為您妥善解決。",
          "reading": "can4 saan1 nei5 hou2, zan1 hai6 m4 hou2 ji3 si1 bei2 nei5 tim1 zo2 gam3 do1 maa4 faan4! ngo5 dei6 ging1 lei5 ji5 ging1 can1 zi6 gan1 zeon3 gan2 ni1 go3 go3 on3, bou2 zing3 gam1 jat6 noi6 wai6 nei5 to5 sin6 gaai2 kyut3. [tsʰɐn˨˩ saːn˥ nei˩˧ hou˧˥, tsɐn˥ hɐi˨ m̩˨˩ hou˧˥ jiː˧ siː˥ pei˨ nei˩˧ tʰiːm˥ tsɔː˧˥ kɐm˧ tɔː˥ maː˨˩ faːn˨˩! ŋɔː˩˧ tei˨ kɪŋ˥ lei˩˧ jiː˩˧ kɪŋ˥ tsʰɐn˥ tsiː˨ kɐn˥ tsɵn˧ kɐn˧˥ niː˥ kɔː˧ kɔː˧ ɔːn˧, pou˧˥ tsɪŋ˧ kɐm˥ jɐt˨ nɔːi˨ wɐi˨ nei˩˧ tʰɔː˧˥ siːn˨ kaːi˧˥ kʰyːt̚˧] (CHUN-SAHN NEI-HOH, JUN-HY M-HOH-YEE-SEE BAY NEI TEEM-JOR GUM DOH MAH-FAAHN! NGOH-DAY GING-LY YEE-GING CHUN-JEE GUN-JEUN-GUN NEE-GOH GOH-ON, BOU-JING GUM-YUT NOY WAI NEI TOH-SEEN-GAI-KUET)",
          "translation": "Hello Mr. Chan, we are truly sorry for causing you so much trouble! Our manager is already personally following up on this case, and we guarantee to resolve it properly for you within today."
        },
        {
          "target": "對於今次物流延誤造成嘅不便，我哋深表歉意，並會立即安排全額退款同補償優惠券。",
          "reading": "deoi3 jyu1 gam1 ci3 mat6 lau4 jin4 ng6 zou6 sing4 ge3 bat1 bin6, ngo5 dei6 sam1 biu2 hip3 ji3, bing6 wui5 laap6 zik1 on1 paai4 cyun4 ngaak6 teoi3 fun2 tung4 bu2 soeng4 jau1 wai6 gyun3. [tɵy˧ jyː˥ kɐm˥ tsʰiː˧ mɐt̚˨ lɐu˨˩ jiːn˨˩ m̩˨˩ tsou˨ sɪŋ˨˩ kɛː˧ pɐt̚˥ piːn˨, ŋɔː˩˧ tei˨ sɐm˥ piːu˧˥ hiːp̚˧ jiː˧, pɪŋ˨ wui˩˧ laːp̚˨ tsɪk̚˥ ɔːn˥ pʰaːi˧ tsʰyːn˨˩ ŋaːk̚˨ tʰɵy˧ fuːn˧˥ tʰʊŋ˨˩ pou˧˥ sœːŋ˨˩ jɐu˥ wɐi˨ kyːn˧] (DEOY-YUE GUM-CHEE MUT-LAU YEEN-M JOU-SING GEH BUT-BEEN, NGOH-DAY SUM-BEW HIP-YEE, BING WUI LAHP-JIK ON-PY CHUEN-NGAHK TOEY-FOON TOONG BOU-SEUNG YAU-WAI-GUEN)",
          "translation": "Regarding the inconvenience caused by the logistics delay this time, we express deep apologies and will immediately arrange a full refund and compensation vouchers."
        },
        {
          "target": "多謝您嘅寶貴投訴，呢個問題促使我哋及時檢視系統漏洞，全面提升顧客服務體驗。",
          "reading": "do1 ze6 nei5 ge3 bou2 gwai3 tau4 sou3, ni1 go3 man6 tai4 cuk1 sai2 ngo5 dei6 kap6 si4 gim2 si6 hai6 tung2 lau6 dung6, cyun4 min6 tai4 sing1 gu3 haak3 fuk6 mou6 tai2 jim6. [tɔː˥ tsɛː˨ nei˩˧ kɛː˧ pou˧˥ kʷɐi˧ tʰɐu˨˩ sou˧, niː˥ kɔː˧ mɐn˨ tʰɐi˨˩ tsʰʊk̚˥ sɐi˧˥ ŋɔː˩˧ tei˨ kʰɐp̚˨ siː˨˩ kiːm˧˥ siː˨ hɐi˨ tʰʊŋ˨ lɐu˨ tʊŋ˨, tsʰyːn˨˩ miːn˨ tʰɐi˨˩ sɪŋ˥ kuː˧ haːk̚˧ fʊk̚˨ mou˨ tʰɐi˧˥ jiːm˨] (DOH-JEH NEI GEH BOU-GWY TAU-SOU, NEE-GOH MUN-TY CHUK-SY NGOH-DAY KUP-SEE GEEM-SEE HY-TOONG LAU-DOONG, CHUEN-MEEN TY-SING GOO-HAHK FOOK-MOU TY-YEEM)",
          "translation": "Thank you for your valuable complaint; this issue has prompted us to timely examine system loopholes and comprehensively elevate customer service experiences."
        }
      ],
      "mnemonics": [
        "【客訴化解訣】主動致歉「添麻煩」，專人跟進「莫遲延」；全額退款「妥善處」，感謝反饋「客心安」！"
      ],
      "culturalNotes": [
        "在香港商務客服中，「添麻煩」（添咗麻煩）具有極強之情緒降溫魔力。以同理心先安撫客戶受損情緒，再談具體技術補償，係香港五星級服務業享譽全球之秘訣。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【同理致歉】面對憤怒投訴的客戶，第一時間平息其情緒之最得體粵語話術係：",
          "options": [
            "真係唔好意思畀您添咗咁多麻煩！ (Truly sorry for causing you so much trouble!)",
            "你算罷啦唔好鬧啦) (Context: 客戶服務、客訴處理與危機公關化解：「添麻煩」、「專人跟進」、「妥善解決)",
            "邊有蛤乸跳你咪鬧啦) (Context: 客戶服務、客訴處理與危機公關化解：「添麻煩」、「專人跟進」、「妥善解決)",
            "食死貓都唔關我事) (Context: 客戶服務、客訴處理與危機公關化解：「添麻煩」、「專人跟進」、「妥善解決)"
          ],
          "answerIndex": 0,
          "explanation": "「唔好意思畀您添咗咁多麻煩」真誠認同客戶困擾，能迅速化解對抗情緒。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【責任認領】向客戶保證會由專屬人員負責追蹤解決問題，地道商務承諾係：",
          "options": [
            "我哋會即時安排專人跟進 (Immediately arrange dedicated staff to follow up)",
            "我哋會當水過鴨背) (Context: 客戶服務、客訴處理與危機公關化解：「添麻煩」、「專人跟進」、「妥善解決)",
            "我哋會阿茂整餅) (Context: 客戶服務、客訴處理與危機公關化解：「添麻煩」、「專人跟進」、「妥善解決)",
            "我哋會炒魷魚) (Context: 客戶服務、客訴處理與危機公關化解：「添麻煩」、「專人跟進」、「妥善解決)"
          ],
          "answerIndex": 0,
          "explanation": "「安排專人跟進」展現高度專業性與負責態度。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【危機公關】處理重大客戶投訴時，最關鍵之首要原則係：",
          "options": [
            "展現同理心傾聽並真誠致歉，迅速鎖定問題並安排具體補救措施 (Demonstrating empathy, apologizing & providing concrete remediation)",
            "推卸責任並指責客戶操作不當) (Context: 客戶服務、客訴處理與危機公關化解：「添麻煩」、「專人跟進」、「妥善解決)",
            "直接掛斷電話置之不理) (Context: 客戶服務、客訴處理與危機公關化解：「添麻煩」、「專人跟進」、「妥善解決)",
            "向客戶發出法律威脅) (Context: 客戶服務、客訴處理與危機公關化解：「添麻煩」、「專人跟進」、「妥善解決)"
          ],
          "answerIndex": 0,
          "explanation": "及時共情致歉、認領責任並提供切實補救方案係危機公關的核心法則。"
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
    "title": "高階商務口頭演報與項目提案綜合實戰：「簡報結構」、「核心優勢」、「答辯互動」 (Business Pitching & Project Presentations)",
    "level": "B2",
    "objective": "掌握高級商業項目路演（Pitching）、提案簡報結構引導、核心競爭優勢剖析與問答環節（Q&A）之全套專業演報話術。",
    "presentation": {
      "explanation": "在董事會、投資人路演或跨國客戶提案中，專業流暢之商務粵語演報能力係商業精英之核心競爭力：\n\n一、商務提案簡報三大標準結構話術：\n１．開場與簡報地圖引導（Introduction & Roadmap）：\n- 「各位早晨/午安，好榮幸今日有機會向大家介紹我哋嘅項目提案。」\n- 「今日嘅簡報主要分為三個核心部分：第一係市場痛點，第二係我哋嘅創新解決方案，第三係預期財務回報。」\n\n２．核心競爭優勢提煉與價值展示（Value Proposition）：\n- 「我哋方案嘅核心競爭優勢在於【專利技術/成本效益】。」\n- 「相比傳統模式，我哋能夠降低三成營運成本，同時提升五成用戶轉化率。」\n\n３．總結回顧與問答互動環節（Conclusion & Q&A）：\n- 「總括而言，呢個項目具備極高嘅市場潛力同投資回報率。」\n- 「多謝各位抽空出席，依家歡迎大家提問（Q&A session）。」\n- 「呢個問題問得非常好，等我為大家詳細說明一下……」",
      "examples": [
        {
          "target": "各位評審午安，今日我哋團隊嘅商業提案主要聚焦於如何利用人工智能提升跨境物流效率。",
          "reading": "gok3 wai2 ping4 sam2 ng5 on1, gam1 jat6 ngo5 dei6 tyun4 deoi6*2 ge3 soeng1 jip6 tai4 on3 zyu2 jiu3 zi1 ziu1 jyu1 jyu4 ho4 lei6 jung6 jan4 gung1 zi3 nang4 tai4 sing1 kwaa1 ging1 mat6 lau4 haau6 leot6. [kɔːk̚˧ wɐi˨ pʰɪŋ˨˩ sɐm˧˥ ŋ̩˩˧ ɔːn˥, kɐm˥ jɐt˨ ŋɔː˩˧ tei˨ tʰyːn˨˩ tɵy˧˥ kɛː˧ sœːŋ˥ jiːp̚˨ tʰɐi˨˩ ɔːn˧ tsyː˧˥ jiu˧ tsiː˥ tsiːu˥ jyː˥ jyː˨˩ hɔː˨˩ lei˨ jʊŋ˨ jɐn˨˩ kʊŋ˥ tsiː˧ nɐŋ˨˩ tʰɐi˨˩ sɪŋ˥ kʰwaː˥ kɪŋ˥ mɐt̚˨ lɐu˨˩ haːu˨ lɵt̚˨] (GOK-WAI PING-SUM NG-ON, GUM-YUT NGOH-DAY TUEN-DEOY GEH SEUNG-YIP TY-ON JUE-YEW JEE-JEW YUE YUE-HOH LEY-YOONG YUN-GONG-JEE-NUNG TY-SING KWAH-GING MUT-LAU HAU-LEUT)",
          "translation": "Good afternoon, esteemed judges; our team's business proposal today mainly focuses on how to utilize artificial intelligence to enhance cross-border logistics efficiency."
        },
        {
          "target": "我哋產品嘅最大競爭優勢在於擁有自主研發算法，能夠實現精準預測，為客戶節省大量倉儲成本。",
          "reading": "ngo5 dei6 caan2 ban2 ge3 zeoi3 daai6 ging6 zaang1 jau1 sai3 zoi6 jyu1 jung2 jau5 zi6 zyu2 jin4 faat3 syun3 faat3, nang4 gau3 sat6 jin6 zing1 zeon2 jyu6 cak1, wai6 haak3 wu6 zit3 saang2 daai6 loeng6 cong1 cyu5 sing4 bun2. [ŋɔː˩˧ tei˨ tsʰaːn˧˥ pʰɐn˧˥ kɛː˧ tsɵy˧ taːi˨ kɪŋ˨ tsaːŋ˥ jɐu˥ sɐi˧ tsɔːi˨ jyː˥ jʊŋ˩˧ jɐu˩˧ tsiː˨ tsyː˧˥ jiːn˨˩ faːt̚˧ syːn˧ faːt̚˧, nɐŋ˨˩ kɐu˧ sɐt̚˨ jiːn˨ tsɪŋ˥ tsɵn˧˥ jyː˨ tsʰaːk̚˥, wɐi˨ haːk̚˧ wu˨ tsit̚˧ saːŋ˧˥ taːi˨ lœːŋ˨ tsʰɔːŋ˥ tsʰyː˩˧ sɪŋ˨˩ puːn˧˥] (NGOH-DAY CHAAN-BUN GEH JEOY-DY GING-JAHNG YAU-SY JOY-YUE YOONG-YAU JEE-JUE YEEN-FAHT SUEN-FAHT, NUNG-GAU SUT-YEEN JING-JEUN YUE-CHUK, WAI HAHK-WOO JEET-SAHNG DY-LEUNG CHONG-CHUE SING-BOON)",
          "translation": "The greatest competitive advantage of our product lies in having self-developed algorithms that can achieve accurate forecasting, saving customers substantial warehousing costs."
        },
        {
          "target": "多謝各位董事嘅寶貴時間，簡報到此為止，依家非常歡迎各位就財務細節提出問題。",
          "reading": "do1 ze6 gok3 wai2 dung2 si6 ge3 bou2 gwai3 si4 gaan3, gaan2 bou3 dou3 ci2 wai4 zi2, ji1 gaa1 fei1 soeng4 fun1 jing4 gok3 wai2 zau6 coi4 mou6 sai3 zit3 tai4 ceot1 man6 tai4. [tɔː˥ tsɛː˨ kɔːk̚˧ wɐi˨ tʊŋ˧˥ siː˨ kɛː˧ pou˧˥ kʷɐi˧ siː˨˩ kaːn˧, kaːn˧˥ pou˧ tou˧ tsʰiː˧˥ wɐi˨˩ tsiː˧˥, jiː˥ kaː˥ fei˥ sœːŋ˨˩ fuːn˥ jɪŋ˨˩ kɔːk̚˧ wɐi˨ tsɐu˨ tsʰɔːi˨˩ mou˨ sɐi˧ zit̚˧ tʰɐi˨˩ tsʰɵt̚˥ mɐn˨ tʰɐi˨˩] (DOH-JEH GOK-WAI DONG-SEE GEH BOU-GWY SEE-GAHN, GAAN-BOU DOU-CHEE WAI-JEE, YEE-GAH FAY-SEUNG FOON-YING GOK-WAI JAU CHOY-MOU SY-JEET TY-CHUT MUN-TY)",
          "translation": "Thank you for your valuable time, directors; the presentation ends here, and we now warmly welcome any questions regarding financial details."
        }
      ],
      "mnemonics": [
        "【商務演報訣】開場地圖「分三部」，價值提煉「優勢顯」；論據嚴密數據撐，禮貌結尾「問答全」！"
      ],
      "culturalNotes": [
        "在香港商務簡報中，清晰的時間把控（Time Management）與邏輯架構至關重要。演報者通常在前兩分鐘內必須精準拋出『痛點』與『解決方案』，以牢牢抓住高層決策者之注意力。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【簡報架構】在項目演報開篇引介簡報大綱時，最標準之引導句式係：",
          "options": [
            "今日嘅簡報主要分為三個核心部分 (Today's presentation is mainly divided into 3 core parts)",
            "大家隨便聽下算罷啦) (Context: 高階商務口頭演報與項目提案綜合實戰：「簡報結構」、「核心優勢」、「答辯)",
            "我都唔知講乜好) (Context: 高階商務口頭演報與項目提案綜合實戰：「簡報結構」、「核心優勢」、「答辯)",
            "阿茂整餅式簡報開始) (Context: 高階商務口頭演報與項目提案綜合實戰：「簡報結構」、「核心優勢」、「答辯)"
          ],
          "answerIndex": 0,
          "explanation": "「今日嘅簡報主要分為……」為商務演報最標準之結構導引句式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【問答過渡】簡報結束後禮貌邀請在場投資人或董事提問，標準專業話術係：",
          "options": [
            "簡報到此為止，依家歡迎大家提問 (Presentation ends here, now welcome questions)",
            "簡報講完，千祈咪問問題) (Context: 高階商務口頭演報與項目提案綜合實戰：「簡報結構」、「核心優勢」、「答辯)",
            "邊有蛤乸跳問乜鬼) (Context: 高階商務口頭演報與項目提案綜合實戰：「簡報結構」、「核心優勢」、「答辯)",
            "食死貓問答開始) (Context: 高階商務口頭演報與項目提案綜合實戰：「簡報結構」、「核心優勢」、「答辯)"
          ],
          "answerIndex": 0,
          "explanation": "「簡報到此為止，依家歡迎大家提問」為演報過渡至Q&A之標準禮貌話術。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【演報價值主張】在項目提案中，闡述「核心競爭優勢」（Core Competitive Advantage）之關鍵目的在於：",
          "options": [
            "向投資人清晰展示本產品相比市場競品不可替代之獨特價值與技術門檻 (Highlighting unique, irreplaceable value and barriers to entry)",
            "故意隱瞞所有財務數據) (Context: 高階商務口頭演報與項目提案綜合實戰：「簡報結構」、「核心優勢」、「答辯)",
            "向評審抱怨行業艱辛) (Context: 高階商務口頭演報與項目提案綜合實戰：「簡報結構」、「核心優勢」、「答辯)",
            "單純展示漂亮的幻燈片動畫) (Context: 高階商務口頭演報與項目提案綜合實戰：「簡報結構」、「核心優勢」、「答辯)"
          ],
          "answerIndex": 0,
          "explanation": "核心競爭優勢之剖析係說服投資人與決策者採納提案的最核心商業依據。"
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
    "title": "粵語文白異讀系統（Literary vs. Colloquial Readings）：讀書音與白話音 (Literary & Colloquial Readings)",
    "level": "C1",
    "objective": "掌握粵語文白異讀系統（文讀音與白讀音）之歷史音變規律、高頻字例（行、生、學、食、見）及其在正式文雅詞與市井白話中之嚴格分工。",
    "presentation": {
      "explanation": "文白異讀（Literary and Colloquial Readings）係漢語方言在不同歷史層次疊加下形成之雙重語音系統：\n\n一、文讀（讀書音）與白讀（白話音）之本質差異：\n１．文讀音（Literary Reading）：受歷代中原通語（如洛陽音、金陵音、近代官話）影響，主要用於朗讀文言文、書面成語、學術科舉及莊重專有名詞。\n２．白讀音（Colloquial Reading）：繼承自更早歷史層次之本土口傳語音，主要用於日常生活會話、市井口語及本土專屬詞彙。\n\n二、五大經典高頻漢字文白異讀對照表：\n１．「行」：\n- 文讀：hang4（行動、行業、品行、流行）。\n- 白讀：haang4（行街、行路、行先）。\n- 另音：hong4（銀行、行家）。\n\n２．「生」：\n- 文讀：saang1（學生、生命、先生）。\n- 白讀：saang1 / seng1（花生 faa1 saang1、陌生 maang4 sang1）。\n\n３．「食」：\n- 文讀：zik6（食糧、食言而肥、自食其果）。\n- 白讀：sik6（食飯、食嘢、食點心）。\n\n４．「學」：\n- 文讀：hok6（學校、學術、哲學）。\n- 白讀：hok6（學嘢、學游水）。\n\n５．「見」：\n- 文讀：gin3（見解、意見、遠見）。\n- 白讀：gin3（見面、見到）。",
      "examples": [
        {
          "target": "做人最緊要言行一致，講得出就要切實去實行，千祈唔好隨便食言！",
          "reading": "zou6 jan4 zeoi3 gan2 jiu3 jin4 hang4 jat1 zi3, gong2 dak1 ceot1 zau6 jiu3 cit3 sat6 heoi3 sat6 hang4, cin1 kei4 m4 hou2 ceoi4 bin6*2 zik6 jin4! [tsou˨ jɐn˨˩ tsɵy˧ kɐn˧˥ jiu˧ jiːn˨˩ hɐŋ˨˩ jɐt̚˥ tsiː˧, kɔːŋ˧˥ tɐk̚˥ tsʰɵt̚˥ tsɐu˨ jiu˧ tsʰiːt̚˧ sɐt̚˨ hɵy˧ sɐt̚˨ hɐŋ˨˩, tsʰiːn˥ kʰei˨˩ m̩˨˩ hou˧˥ tsʰɵy˨˩ piːn˧˥ tsɪk̚˨ jiːn˨˩!] (JOU-YUN JEOY GUN-YEW YEEN-HAHNG YUT-JEE, GONG-DUK-CHUT JAU YEW CHEET-SUT HOEY SUT-HAHNG, CHEEN-KEY M-HOH CHOEY-BEEN JIK-YEEN!)",
          "translation": "The most important thing in life is to match words with deeds; if you say it you must earnestly implement it, never go back on your word rashly!"
        },
        {
          "target": "佢哋兩個趁放假一齊去銅鑼灣行街買衫，沿途有講有笑好開心。",
          "reading": "keoi5 dei6 loeng5 go3 can3 fong3 gaa3 jat1 cai4 heoi3 tung4 lo4 waan1 haang4 gaai1 maai5 saam1, jyun4 tou4 jau5 gong2 jau5 siu3 hou2 hoi1 sam1. [kʰɵy˩˧ tei˨ lœːŋ˩˧ kɔː˧ tsʰɐn˧ fɔːŋ˧ kaː˧ jɐt̚˥ tsʰɐi˨˩ hɵy˧ tʰʊŋ˨˩ lɔː˨˩ waːn˥ haːŋ˨˩ kaːi˥ maːi˩˧ saːm˥, jyːn˨˩ tʰou˨˩ jɐu˩˧ kɔːŋ˧˥ jɐu˩˧ siu˧ hou˧˥ hɔːi˥ sɐm˥] (KUY-DAY LEUNG-GOH CHUN FONG-GAH YUT-CHY HOEY TOONG-LOH-WAHN HAHNG-GY MY-SAHM, YUEN-TOU YAU-GONG-YAU-SIU HOH HOI-SUM)",
          "translation": "The two of them took advantage of the holiday to go shopping for clothes in Causeway Bay together, chatting and laughing happily along the way."
        },
        {
          "target": "古代讀書人講求『行萬里路，讀萬卷書』，兼具深厚學養與開闊眼界。",
          "reading": "gu2 doi6 duk6 syu1 jan4 gong2 kau4 \"hang4 maan6 lei5 lou6, duk6 maan6 gyun2 syu1\", gim1 geoi6 sam1 hau5 hok6 joeng5 jyu4 hoi1 fut3 ngaan5 gaai3. [kuː˧˥ tɔːi˨ tʊk̚˨ syː˥ jɐn˨˩ kɔːŋ˧˥ kʰɐu˨˩ \"hɐŋ˨˩ maːn˨ lei˩˧ lou˨, tʊk̚˨ maːn˨ kyːn˧˥ syː˥\", kiːm˥ kɵy˨ sɐm˥ hɐu˩˧ hɔːk̚˨ jœːŋ˩˧ jyː˩˧ hɔːi˥ fuːt̚˧ ŋaːn˩˧ kaːi˧] (GOO-DOY DUK-SYU-YUN GONG-KAU \"HAHNG-MAHN-LEY-LOU, DUK-MAHN-GUEN-SYU\", GEEM-GOEY SUM-HAU HOK-YEUNG YUE HOI-FOOT NGAHN-GY)",
          "translation": "Ancient scholars pursued 'walking ten thousand miles and reading ten thousand scrolls of books', possessing both profound academic cultivation and a broad horizon."
        }
      ],
      "mnemonics": [
        "【文白異讀歌】讀書成語「hang4行動」，市井漫步「haang4行街」；文言讀書「zik6食言」，日常美味「sik6好嘢」！"
      ],
      "culturalNotes": [
        "文白異讀係漢語方言學中極具歷史厚度之現象。在粵語吟誦古文或成語時，若將『言行一致』讀成『haang4』或將『食言』讀成『sik6』，會被視為不合規範之語音混淆。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【文白辨析】在成語「言行一致」（jin4 hang4 jat1 zi3）中，「行」字的正確文讀音係：",
          "options": [
            "hang4 (Literary reading for behavior / action)",
            "haang4 (Colloquial walk)",
            "hong4 (Bank / trade)",
            "hang6 (Happiness)"
          ],
          "answerIndex": 0,
          "explanation": "成語「言行一致」中「行」指行為舉止，必須使用文讀音「hang4」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【口語白讀】在日常口語句子「我哋去行街睇戲」中，「行」字的正確白讀音係：",
          "options": [
            "haang4 (Colloquial walking / strolling)",
            "hang4",
            "hong4",
            "hang6"
          ],
          "answerIndex": 0,
          "explanation": "口語「行街 / 行路」使用白讀音「haang4」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【成語讀音】成語「自食其果」中，「食」字在傳統讀書音中的標準文讀音為：",
          "options": [
            "zik6 (Literary reading in classical compounds)",
            "sik6 (Colloquial eating)",
            "saang1",
            "si4"
          ],
          "answerIndex": 0,
          "explanation": "「食言」、「自食其果」等文言成語中，「食」之標準文讀音為「zik6」。"
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
    "title": "中古漢語入聲韻尾（-p, -t, -k）與唐宋詩詞格律之完美契合 (Middle Chinese Entering Tones)",
    "level": "C1",
    "objective": "掌握粵語完整保留中古漢語三大塞音入聲韻尾（-p, -t, -k）與九聲六調系統，以及運用粵語吟誦唐詩宋詞之格律押韻優勢。",
    "presentation": {
      "explanation": "粵語被語言學界公認為保留中古漢語（隋唐切韻音系）語音特徵最完整之現代漢語方言之一：\n\n一、三大入聲韻尾（Checked Codas）矩陣：\n１．雙唇塞音韻尾【-p】：\n- 代表字：十（sap6）、粒（nap1）、盒（hap6）、立（laap6）、集（zaap6）。\n- 發音要領：發音結束時雙唇緊閉，阻塞氣流，不爆破。\n\n２．舌尖塞音韻尾【-t】：\n- 代表字：一（jat1）、八（baat3）、日（jat6）、月（jyut6）、物（mat6）。\n- 發音要領：舌尖緊貼上齒齦，阻斷氣流。\n\n３．舌根塞音韻尾【-k】：\n- 代表字：六（luk6）、百（baak3）、國（gwok3）、屋（nguk1）、北（bak1）。\n- 發音要領：舌根頂住軟齶，形成緊縮塞音。\n\n二、唐宋詩詞吟誦之平仄與押韻優勢：\n- 現代普通話因入聲消失（『平分陰陽、入派三聲』），導致大量唐宋入聲韻詩詞（如李白《將進酒》、岳飛《滿江紅》、蘇軾《念奴嬌·赤壁懷古》）在普通話中不再押韻。\n- 粵語完整保留九聲（陰平、陰上、陰去、陽平、陽上、陽去、陰入上、陰入下、陽入），平仄分明，吟誦古詩時音韻鏗鏘有力、完美押韻！",
      "examples": [
        {
          "target": "岳飛《滿江紅》：「三十功名塵與土，八千里路雲和月。」用粵語吟誦，「月（jyut6）」與「歇（hit3）」、「切（cit3）」押入聲韻，慷慨激昂！",
          "reading": "ngok6 fei1 \"mun5 gong1 hung4\": \"saam1 sap6 gung1 ming4 can4 jyu5 tou2, baat3 cin1 lei5 lou6 wan4 wo4 jyut6.\" jung6 jyut6 jyu5 jam4 zung6, \"jyut6 [jyːt̚˨]\" jyu5 \"hit3 [hiːt̚˧]\", \"cit3 [tsʰiːt̚˧]\" aap3 jap6 seng1 wan6, hong2 koi3 gik1 ngoeng5! [ŋɔːk̚˨ fei˥ \"muːn˩˧ kɔːŋ˥ hʊŋ˨˩\": \"saːm˥ sɐp̚˨ kʊŋ˥ mɪŋ˨˩ tsʰɐn˨˩ jyː˩˧ tʰou˧˥, paːt̚˧ tsʰiːn˥ lei˩˧ lou˨ wɐn˨˩ wɔː˨˩ jyːt̚˨.\" jʊŋ˨ jyːt̚˨ jyː˩˧ jɐm˨˩ tsʊŋ˨, \"jyːt̚˨\" jyː˩˧ \"hiːt̚˧\", \"tsʰiːt̚˧\" aːp̚˧ jɐp̚˨ sɛːŋ˥ wɐn˨, hɔːŋ˧˥ kʰɔːi˧ kɪk̚˥ ŋœːŋ˩˧!] (NGOK-FAY \"MOON-GONG-HOONG\": \"SAHM-SUP GONG-MING CHUN-YUE-TOU, BAHT-CHEEN-LEY-LOU WUN-WOH-YUET.\" YOONG YUET-YUE YUM-JOONG, \"YUET\" YUE \"HEET\", \"CHEET\" AHP YUP-SENG-WUN, HONG-KOY-GIK-NGEUNG!)",
          "translation": "Yue Fei's 'Man Jiang Hong': 'Thirty years of deeds, dust and earth; eight thousand miles of road, clouds and the moon.' Recited in Cantonese, 'jyut6' rhymes with 'hit3' and 'cit3' in entering tones, impassioned and heroic!"
        },
        {
          "target": "李白《將進酒》中「天生我材必有用，千金散盡還復來」嘅「復（fuk1）」字，正係典型嘅舌根塞音入聲字。",
          "reading": "lei5 baak6 \"zoeng1 zeon3 zau2\" zung1 \"tin1 sang1 ngo5 coi4 bit1 jau5 jung6, cin1 gam1 saan3 zeon6 waan4 fuk1 loi4\" ge3 \"fuk1 [fʊk̚˥]\" zi6, zing3 hai6 din2 jing4 ge3 sit3 gan1 sak1 jam1 jap6 seng1 zi6. [lei˩˧ paːk̚˨ \"tsœːŋ˥ tsɵn˧ tsɐu˧˥\" tsʊŋ˥ \"tʰiːn˥ sɐŋ˥ ŋɔː˩˧ tsʰɔːi˨˩ piːt̚˥ jɐu˩˧ jʊŋ˨, tsʰiːn˥ kɐm˥ saːn˧ tsɵn˨ waːn˨˩ fʊk̚˥ lɔːi˨˩\" kɛː˧ \"fʊk̚˥\" tsiː˨, tsɪŋ˧ hɐi˨ tiːn˧˥ jɪŋ˨˩ kɛː˧ siːt̚˧ kɐn˥ sɐk̚˥ jɐm˥ jɐp̚˨ sɛːŋ˥ tsiː˨] (LY-BAHK \"JEUNG-JEUN-JAU\" JOONG \"TEEN-SUNG NGOH-CHOY BIT-YAU-YOONG, CHEEN-GUM SAHN-JEUN WAHN-FOOK-LOY\" GEH \"FOOK\" JEE, JING HY DEEN-YING GEH SEET-GUN-SUK-YUM YUP-SENG-JEE)",
          "translation": "In Li Bai's 'Invitation to Wine', the character 'fuk1' in 'Heaven endowed me with talent, it must be put to use; a thousand gold spent will return again' is precisely a typical velar stop entering tone character."
        },
        {
          "target": "用粵語朗讀杜甫同蘇軾嘅絕句律詩，平仄協調，押韻嚴絲合縫，完美重現盛唐宋代之音韻美感。",
          "reading": "jung6 jyut6 jyu5 long5 duk6 dou6 fu2 tung4 sou1 sik1 ge3 zyut6 geui3 leot6 si1, ping4 zak1 hip3 tiu4, aap3 wan6 jim4 si1 hap6 fung4, jyun4 mei5 cung4 jin6 sing6 tong4 sung3 doi6 zi1 jam1 wan6 mei5 gam2. [jʊŋ˨ jyːt̚˨ jyː˩˧ lɔːŋ˩˧ tʊk̚˨ tou˨ fuː˧˥ tʰʊŋ˨˩ sou˥ sɪk̚˥ kɛː˧ tsyːt̚˨ kɵy˧ lɵt̚˨ siː˥, pʰɪŋ˨˩ tsɐk̚˥ hiːp̚˧ tʰiːu˨˩, aːp̚˧ wɐn˨ jiːm˨˩ siː˥ hɐp̚˨ fʊŋ˨˩, jyːn˨˩ mei˩˧ tsʰʊŋ˨˩ jiːn˨ sɪŋ˨ tʰɔːŋ˨˩ sʊŋ˧ tɔːi˨ tsiː˥ jɐm˥ wɐn˨ mei˩˧ kɐm˧˥] (YOONG YUET-YUE LONG-DUK DOU-FOO TOONG SOU-SIK GEH JUET-GOEY LUT-SEE, PING-JUK HIP-TEW, AHP-WUN YEEM-SEE-HUP-FOONG, YUEN-MAY CHOONG-YEEN SING-TONG SOONG-DOY JEE YUM-WUN MAY-GUM)",
          "translation": "Declaiming Du Fu and Su Shi's regulated verses in Cantonese harmonizes level and oblique tones, with rhymes fitting seamlessly together, perfectly reproducing the phonological aesthetics of the High Tang and Song dynasties."
        }
      ],
      "mnemonics": [
        "【入聲音韻訣】雙唇閉合【-p】十粒，舌尖抵齒【-t】日月；舌根頂齶【-k】六百，唐詩宋詞韻味絕！"
      ],
      "culturalNotes": [
        "香港許多傳統文人社團（如嶺雅詩社、學海書樓）至今仍堅持使用廣州話九聲吟誦古詩詞。清代學者陳澧在《切韻考》中精確指出：『廣州人聲音，與隋唐切韻最合。』"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【入聲韻尾】漢字「八（baat3）」與「月（jyut6）」在粵語中共同具備之中古塞音韻尾係：",
          "options": [
            "舌尖塞音韻尾【-t】 (Alveolar stop coda -t)",
            "雙唇塞音韻尾【-p】) (Context: 中古漢語入聲韻尾（-p, -t, -k）與唐宋詩詞格律之完美契合 (M)",
            "舌根塞音韻尾【-k】) (Context: 中古漢語入聲韻尾（-p, -t, -k）與唐宋詩詞格律之完美契合 (M)",
            "鼻音韻尾【-m】) (Context: 中古漢語入聲韻尾（-p, -t, -k）與唐宋詩詞格律之完美契合 (M)"
          ],
          "answerIndex": 0,
          "explanation": "「八（baat3）」與「月（jyut6）」均以舌尖塞音【-t】收尾。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【古詩格律】用粵語吟誦岳飛《滿江紅》能完美押韻，其根本原因在於粵語保留了古代之：",
          "options": [
            "入聲韻尾與九聲調類系統 (Middle Chinese entering tones & 9-tone system)",
            "英語外來借詞) (Context: 中古漢語入聲韻尾（-p, -t, -k）與唐宋詩詞格律之完美契合 (M)",
            "現代網絡流行語) (Context: 中古漢語入聲韻尾（-p, -t, -k）與唐宋詩詞格律之完美契合 (M)",
            "西方格律詩節奏) (Context: 中古漢語入聲韻尾（-p, -t, -k）與唐宋詩詞格律之完美契合 (M)"
          ],
          "answerIndex": 0,
          "explanation": "《滿江紅》全篇押入聲韻，粵語完整保留入聲韻尾，因而能完美重現古代詩詞音律。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【語音學辨析】漢字「十（sap6）」與「盒（hap6）」在發音結束時之發音部位特徵為：",
          "options": [
            "雙唇緊閉阻斷氣流（-p 塞音尾） (Bilabial stop closure -p)",
            "舌根頂住軟齶（-k 塞音尾）) (Context: 中古漢語入聲韻尾（-p, -t, -k）與唐宋詩詞格律之完美契合 (M)",
            "舌尖頂住上齒齦（-t 塞音尾）) (Context: 中古漢語入聲韻尾（-p, -t, -k）與唐宋詩詞格律之完美契合 (M)",
            "氣流從鼻腔完全釋放) (Context: 中古漢語入聲韻尾（-p, -t, -k）與唐宋詩詞格律之完美契合 (M)"
          ],
          "answerIndex": 0,
          "explanation": "「十（sap6）」與「盒（hap6）」屬於雙唇塞音韻尾【-p】字。"
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
    "title": "嶺南詩壇先驅與經典粵詩名篇深度析讀：「嶺南三大家」與屈大均、陳恭尹 (Lingnan Classical Poets)",
    "level": "C1",
    "objective": "掌握嶺南古典文學巨擘「嶺南三大家（屈大均、陳恭尹、梁佩蘭）」之代表詩作析讀、愛國情懷與《廣東新語》之早期粵方言記錄。",
    "presentation": {
      "explanation": "明清之際，嶺南文風大盛，湧現出以「嶺南三大家」為代表之傑出詩人群體，將嶺南自然風貌與家國氣節融入古典詩篇：\n\n一、嶺南三大家歷史地位與代表作家：\n１．屈大均（Wat Daai-gwan，號翁山）：\n- 嶺南文學領袖，著有《廣東新語》，百科全書式記錄了明清時期廣東之天文、地理、物產及早期粵語詞彙（如『煲』、『埗』、『諗』）。\n- 詩風雄奇悲壯，代表作《道塘》、《詠木棉》。\n\n２．陳恭尹（Chan Gung-wan，號獨漉）：\n- 明末抗清名將陳邦彥之子，詩風沉鬱悲涼、格律森嚴，被尊為清初嶺南詩冠。\n- 代表作《崖門竭》：「山川浩劫動神明，一死難償帝子情。」以磅礴悲壯之筆觸憑弔宋末崖門海戰。\n\n３．梁佩蘭（Leung Pui-laan，號藥亭）：\n- 康熙朝進士，詩作清麗超逸、音律圓潤，與中原名士王士禛等唱和。",
      "examples": [
        {
          "target": "屈大均喺《廣東新語》入面精確記錄咗嶺南風土人情，為後世研究粵語歷史語音與詞彙提供咗珍貴文獻。",
          "reading": "wat1 daai6 gwan1 hai2 \"gwong2 dung1 san1 jyu5\" jap6 min6 zing1 kok3 gei3 luk6 zo2 ling5 naam4 fung1 tou2 jan4 cing4, wai6 hau6 sai3 jin4 gau3 jyut6 jyu5 lik6 si1 jyu5 jam1 jyu5 ci4 wui6 tai4 gung1 zo2 zan1 gwai3 man4 hin3. [wɐt̚˥ taːi˨ kʷɐn˥ hɐi˩˧ \"kʷɔːŋ˧˥ tʊŋ˥ sɐn˥ jyː˩˧\" jɐp̚˨ miːn˨ tsɪŋ˥ kʰɔːk̚˧ kei˧ lʊk̚˨ tsɔː˧˥ lɪŋ˩˧ naːm˨˩ fʊŋ˥ tʰou˧˥ jɐn˨˩ tsʰɪŋ˨˩, wɐi˨ hɐu˨ sɐi˧ jiːn˨˩ kɐu˧ jyːt̚˨ jyː˩˧ lɪk̚˨ siː˥ jyː˩˧ jɐm˥ jyː˩˧ tsʰiː˨˩ wuːi˨ tʰɐi˨˩ kʊŋ˥ tsɔː˧˥ tsɐn˥ kʷɐi˧ mɐn˨˩ hiːn˧] (WUT DY-GWUN HY \"GWONG-DONG SUN-YUE\" YUP-MEEN JING-KOK GAY-LOK-JOR LING-NAHM FONG-TOU YUN-CHING, WAI HAU-SY YEEN-GAU YUET-YUE LIK-SEE YUE-YUM YUE CHEE-WUI TY-GONG-JOR JUN-GWY MUN-HEEN)",
          "translation": "Qu Dajun accurately recorded Lingnan customs and conditions in 'Guangdong Xinyu', providing precious documentation for future generations to study the historical phonology and vocabulary of Cantonese."
        },
        {
          "target": "陳恭尹《崖門竭》詩句沉雄悲壯，用粵語吟詠更顯蒼涼大氣，展現出嶺南文人堅貞不屈之民族氣節。",
          "reading": "can4 gung1 wan5 \"ngaai4 mun4 hit3\" si1 geui3 cam4 hung4 bei1 zong3, jung6 jyut6 jyu5 jam4 wing6 gang3 hin2 cong1 loeng4 daai6 hei3, zin2 jin6 ceot1 ling5 naam4 man4 jan4 gin1 zing1 bat1 wat1 zi1 man4 zuk6 hei3 zit3. [tsʰɐn˨˩ kʊŋ˥ wɐn˩˧ \"ŋaːi˨˩ muːn˨˩ hiːt̚˧\" siː˥ kɵy˧ tsʰɐm˨˩ hʊŋ˨˩ pei˥ tsɔːŋ˧, jʊŋ˨ jyːt̚˨ jyː˩˧ jɐm˨˩ wɪŋ˨ kɐŋ˧ hiːn˧˥ tsʰɔːŋ˥ lœːŋ˨˩ taːi˨ hei˧, tsiːn˧˥ jiːn˨ tsʰɵt̚˥ lɪŋ˩˧ naːm˨˩ mɐn˨˩ jɐn˨˩ kiːn˥ tsɪŋ˥ pɐt̚˥ wɐt̚˥ tsiː˥ mɐn˨˩ tsʊk̚˨ hei˧ tsiːt̚˧] (CHUN GONG-WUN \"NGAI-MOON-HEET\" SEE-GOEY CHUM-HOONG BAY-JONG, YOONG YUET-YUE YUM-WING GUNG HEEN CHONG-LEUNG DY-HEY, JEEN-YEEN-CHUT LING-NAHM MUN-YUN GEEN-JING-BUT-WUT JEE MUN-JOK HEY-JEET)",
          "translation": "The lines of Chen Gongyin's 'Ode to Yamen' are solemn and tragic; chanting them in Cantonese highlights their desolation and grandeur, showcasing Lingnan scholars' unyielding national integrity."
        },
        {
          "target": "嶺南三大家之詩作既繼承中原唐宋格律精髓，又深植嶺南本土風土人情，獨樹一幟。",
          "reading": "ling5 naam4 saam1 daai6 gaa1 zi1 si1 zok3 gei3 gai3 sing4 zung1 jyun4 tong4 sung3 gaak3 leot6 zing1 seoi5, jau6 sam1 zik6 ling5 naam4 bun2 dei6 fung1 tou2 jan4 cing4, duk6 syu6 jat1 ci3. [lɪŋ˩˧ naːm˨˩ saːm˥ taːi˨ kaː˥ tsiː˥ siː˥ tsɔːk̚˧ kei˧ kɐi˧ sɪŋ˨˩ tsʊŋ˥ jyːn˨˩ tʰɔːŋ˨˩ sʊŋ˧ kaːk̚˧ lɵt̚˨ tsɪŋ˥ sɵy˩˧, jɐu˨ sɐm˥ tsɪk̚˨ lɪŋ˩˧ naːm˨˩ puːn˧˥ tei˨ fʊŋ˥ tʰou˧˥ jɐn˨˩ tsʰɪŋ˨˩, tʊk̚˨ syː˨ jɐt̚˥ tsʰiː˧] (LING-NAHM SAHM-DY-GAH JEE SEE-JOK GAY GAI-SING JOONG-YUEN TONG-SOONG GAAK-LUT JING-SOEY, YAU SUM-JIK LING-NAHM BOON-DAY FONG-TOU YUN-CHING, DUK-SYU-YUT-CHEE)",
          "translation": "The poetic works of the Lingnan Three Masters not only inherited the essence of Tang and Song meters from the Central Plains, but also took deep root in Lingnan's local conditions and customs, creating a unique school."
        }
      ],
      "mnemonics": [
        "【嶺南三家訣】翁山大均記《新語》，獨漉恭尹《崖門竭》；佩蘭藥亭音清麗，嶺南詩壇千古烈！"
      ],
      "culturalNotes": [
        "明末清初的「嶺南三大家」奠定了粵派古典詩文在中華文壇之崇高地位。他們的作品兼具楚辭之奇詭浪漫與杜甫之沉雄悲壯，是嶺南文化最璀璨的文學瑰寶。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【嶺南名著】明末清初學者屈大均所撰、全面記錄廣東地理風俗與早期粵語字彙之百科全書名著係：",
          "options": [
            "《廣東新語》 (Guangdong Xinyu)",
            "《全唐詩》) (Context: 嶺南詩壇先驅與經典粵詩名篇深度析讀：「嶺南三大家」與屈大均、陳恭尹 ()",
            "《文心雕龍》) (Context: 嶺南詩壇先驅與經典粵詩名篇深度析讀：「嶺南三大家」與屈大均、陳恭尹 ()",
            "《粵曲大辭典》) (Context: 嶺南詩壇先驅與經典粵詩名篇深度析讀：「嶺南三大家」與屈大均、陳恭尹 ()"
          ],
          "answerIndex": 0,
          "explanation": "《廣東新語》為屈大均撰寫之嶺南歷史地理與民俗語言百科全書。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【名篇作者】名作《崖門竭》（山川浩劫動神明）之作者、「嶺南三大家」之一係：",
          "options": [
            "陳恭尹 (Chan Gung-wan)",
            "蘇軾) (Context: 嶺南詩壇先驅與經典粵詩名篇深度析讀：「嶺南三大家」與屈大均、陳恭尹 ()",
            "屈大均) (Context: 嶺南詩壇先驅與經典粵詩名篇深度析讀：「嶺南三大家」與屈大均、陳恭尹 ()",
            "李白) (Context: 嶺南詩壇先驅與經典粵詩名篇深度析讀：「嶺南三大家」與屈大均、陳恭尹 ()"
          ],
          "answerIndex": 0,
          "explanation": "《崖門竭》為清初嶺南詩冠陳恭尹之代表詩作。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【詩壇三大家】在中國文學史上被譽為「嶺南三大家」的三位古典文學巨擘係：",
          "options": [
            "屈大均、陳恭尹、梁佩蘭 (Wat Daai-gwan, Chan Gung-wan, Leung Pui-laan)",
            "李白、杜甫、白居易) (Context: 嶺南詩壇先驅與經典粵詩名篇深度析讀：「嶺南三大家」與屈大均、陳恭尹 ()",
            "蘇軾、蘇洵、蘇轍) (Context: 嶺南詩壇先驅與經典粵詩名篇深度析讀：「嶺南三大家」與屈大均、陳恭尹 ()",
            "韓愈、柳宗元、歐陽修) (Context: 嶺南詩壇先驅與經典粵詩名篇深度析讀：「嶺南三大家」與屈大均、陳恭尹 ()"
          ],
          "answerIndex": 0,
          "explanation": "「嶺南三大家」指明末清初嶺南著名詩人屈大均、陳恭尹與梁佩蘭。"
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
    "title": "木魚書、龍舟歌與粵曲唱詞之民間文學修辭 (Folk Ballads & Cantonese Opera Lyrics)",
    "level": "C1",
    "objective": "掌握嶺南傳統民間說唱文學（木魚書、龍舟歌、南音）之格律修辭、敘事結構及其在近現代粵劇粵曲唱詞中之傳承發展。",
    "presentation": {
      "explanation": "嶺南民間說唱文學係粵語方言文學之瑰寶，構成了粵劇、粵曲與南音藝術之深厚基石：\n\n一、嶺南三大傳統說唱文學體裁：\n１．「木魚書（木魚歌）」（muk6 jyu4 syu1）：\n- 形成於明末清初，以七言句為基本骨架，句句押韻或隔句押韻，採用地道粵語長篇敘事。\n- 代表名作：《花箋記》（Faa Zin Gei）、《二度梅》。《花箋記》在19世紀即被歌德譯介至歐洲，讚歎其為東方抒情文學經典。\n\n２．「龍舟歌」（lung4 zau1 go1）：\n- 嶺南水鄉藝人手持小鑼小鼓、手牽木雕小龍舟，沿街即興說唱之民間曲藝，節奏明快、生動詼諧。\n\n３．「南音（粵調地水南音）」（naam4 jam1）：\n- 嶺南瞽師（盲人藝人）以椰胡、秦琴伴奏之深情彈唱，曲調哀婉蒼涼，詞句典雅精緻（如《客途秋恨》）。\n\n二、說唱唱詞之語言修辭特色：\n- 夾敘夾議，文白交融（融文言典雅詞彙與方言助詞於七字格律之中）。\n- 善用頂真、重疊、對偶與疊字（如『冷冷清清、淒淒慘慘』）。",
      "examples": [
        {
          "target": "南音名曲《客途秋恨》開篇：「涼風有信，秋月無邊。虧我思嬌情緒，好比度日如年。」詞句典雅，韻味悠長。",
          "reading": "naam4 jam1 ming4 kuk1 \"haak3 tou4 cau1 han6\" hoi1 pin1: \"loeng4 fung1 jau5 seon3, cau1 jyut6 mou4 bin1. kwai1 ngo5 si1 giu1 cing4 seoi5, hou2 bei2 dou6 jat6 jyu4 nin4.\" ci4 geui3 din2 ngaa5, wan6 mei6 jau4 coeng4. [naːm˨˩ jɐm˥ mɪŋ˨˩ kʰʊk̚˥ \"haːk̚˧ tʰou˨˩ tsʰɐu˥ hɐn˨\": \"lœːŋ˨˩ fʊŋ˥ jɐu˩˧ sɵn˧, tsʰɐu˥ jyːt̚˨ mouou˨˩ piːn˥. kʰwɐi˥ ŋɔː˩˧ siː˥ kiːu˥ tsʰɪŋ˨˩ sɵy˩˧, hou˧˥ pei˧˥ tou˨ jɐt˨ jyː˨˩ niːn˨˩.\" tsʰiː˨˩ kɵy˧ tiːn˧˥ ŋaː˩˧, wɐn˨ mei˨ jɐu˨˩ tsʰœːŋ˨˩] (NAHM-YUM MING-KUK \"HAHK-TOU-CHAU-HUN\" HOI-PEEN: \"LEUNG-FONG YAU-SEUN, CHAU-YUET MOU-BEEN. KWAI NGOH SEE-GEW CHING-SOEY, HOH-BAY DOU-YUT YUE-NEEN.\" CHEE-GOEY DEEN-NGAH, WUN-MAY YAU-CHEUNG)",
          "translation": "The opening of the famous Naamyum piece 'Autumn Regrets on a Traveller's Journey': 'Cool breeze keeps faith, autumn moon knows no bounds; alas, my longing for my love makes each passing day feel like a year.' The lyric is elegant and deeply resonant."
        },
        {
          "target": "木魚書《花箋記》用純正廣州話七言句式寫成，情節曲折動人，被譽為東方說唱文學之巔峰。",
          "reading": "muk6 jyu4 syu1 \"faa1 zin1 gei3\" jung6 seon4 zing3 gwong2 zau1 waa6*2 cat1 jin4 geui3 sik1 se2 sing4, cing4 zit3 kuk1 zit3 dung6 jan4, bei2 jyu6 wai4 dung1 fong1 seoi3 coeng3 man4 hok6 zi1 din1 fung1. [mʊk̚˨ jyː˨˩ syː˥ \"faː˥ tsiːn˥ kei˧\" jʊŋ˨ sɵn˨˩ tsɪŋ˧ kʷɔːŋ˧˥ tsɐu˥ waː˧˥ tsʰɐt̚˥ jiːn˨˩ kɵy˧ sɪk̚˧ sɛː˧˥ sɪŋ˨˩, tsʰɪŋ˨˩ tsiːt̚˧ kʰʊk̚˥ tsiːt̚˧ tʊŋ˨ jɐn˨˩, pei˨ jyː˨ wɐi˨˩ tʊŋ˥ fɔːŋ˥ sɵy˧ tsʰœːŋ˧ mɐn˨˩ hɔːk̚˨ tsiː˥ tiːn˥ fʊŋ˥] (MOK-YUE-SYU \"FAH-JEEN-GAY\" YOONG SEUN-JING GWONG-JAU-WAH CHUT-YEEN GOEY-SIK SEH-SING, CHING-JEET KUK-JEET DOONG-YUN, BAY-YUE WAI DONG-FONG SOEY-CHEUNG MUN-HOK JEE DEEN-FOONG)",
          "translation": "The Wooden Fish book 'The Flowered Scroll' was written in pure Cantonese 7-character verse, with moving twists and turns, praised as the pinnacle of Eastern narrative folk literature."
        },
        {
          "target": "地水南音嘅唱腔哀怨纏綿，盲人藝人以秦琴自彈自唱，訴盡人間滄桑同離愁別緒。",
          "reading": "dei6 seoi2 naam4 jam1 ge3 coeng3 hoeng1 oi1 jyun3 cin4 min4, maang4 jan4 ngai6 jan4 ji5 ceon4 kam4 zi6 daan2 zi6 coeng3, sou3 zeon6 jan4 gaan1 cong1 song1 tung4 lei4 sau4 bit6 seoi5. [tei˨ sɵy˧˥ naːm˨˩ jɐm˥ kɛː˧ tsʰœːŋ˧ hœːŋ˥ ɔːi˥ jyːn˧ tsʰiːn˨˩ miːn˨˩, maːŋ˨˩ jɐn˨˩ ŋɐi˨ jɐn˨˩ jiː˩˧ tsʰɵn˨˩ kʰɐm˨˩ tsiː˨ taːn˧˥ tsiː˨ tsʰœːŋ˧, sou˧ tsɵn˨ jɐn˨˩ kaːn˥ tsʰɔːŋ˥ sɔːŋ˥ tʰʊŋ˨˩ lei˨˩ sɐu˨˩ piːt̚˨ sɵy˩˧] (DAY-SOEY NAHM-YUM GEH CHEUNG-HEUNG OY-YUEN CHEEN-MEEN, MAHNG-YUN NGY-YUN YEE CHUN-KUM JEE-DAH-JEE-CHEUNG, SOU-JEUN YUN-GAHN CHONG-SOHNG TOONG LEY-SAU BEET-SOEY)",
          "translation": "The vocal melody of Dishui Naamyum is plaintive and lingering; blind folk artists sang while playing the Qinqin, expressing all the world's vicissitudes and sorrow of parting."
        }
      ],
      "mnemonics": [
        "【說唱文學歌】木魚唱本《花箋記》，龍舟水鄉鑼鼓齊；南音一曲《秋恨》嘆，文白交融嶺南藝！"
      ],
      "culturalNotes": [
        "粵曲與地水南音被列入國家級非物質文化遺產名錄。已故一代名伶新馬師曾、白雪仙等大師在唱詞咬字上極為講究粵語『正字正音』，使嶺南說唱文學達到了極高的戲劇藝術境界。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【民間說唱名篇】開篇為「涼風有信，秋月無邊。虧我思嬌情緒好比度日如年」之著名地水南音曲目係：",
          "options": [
            "《客途秋恨》 (Autumn Regrets on a Traveller's Journey)",
            "《帝女花》) (Context: 木魚書、龍舟歌與粵曲唱詞之民間文學修辭 (Folk Ballads &)",
            "《鳳閣恩仇未了情》) (Context: 木魚書、龍舟歌與粵曲唱詞之民間文學修辭 (Folk Ballads &)",
            "《將進酒》) (Context: 木魚書、龍舟歌與粵曲唱詞之民間文學修辭 (Folk Ballads &)"
          ],
          "answerIndex": 0,
          "explanation": "《客途秋恨》為嶺南地水南音最具代表性之千古名篇。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【木魚名著】19世紀即被翻譯傳入歐洲、以粵語七言說唱體裁寫成之木魚書經典係：",
          "options": [
            "《花箋記》 (The Flowered Scroll / Faa Zin Gei)",
            "《水滸傳》) (Context: 木魚書、龍舟歌與粵曲唱詞之民間文學修辭 (Folk Ballads &)",
            "《紅樓夢》) (Context: 木魚書、龍舟歌與粵曲唱詞之民間文學修辭 (Folk Ballads &)",
            "《廣東新語》) (Context: 木魚書、龍舟歌與粵曲唱詞之民間文學修辭 (Folk Ballads &)"
          ],
          "answerIndex": 0,
          "explanation": "《花箋記》為明末清初木魚書之傳世經典。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【曲藝特色】嶺南傳統說唱曲藝「龍舟歌」最標誌性之表演形式為：",
          "options": [
            "藝人手持小鑼小鼓與木雕小龍舟，沿街邊敲邊唱即興敘事 (Singing while holding miniature gong, drum and wooden dragon boat)",
            "百人大型交響樂團伴奏) (Context: 木魚書、龍舟歌與粵曲唱詞之民間文學修辭 (Folk Ballads &)",
            "無伴奏純美聲合唱) (Context: 木魚書、龍舟歌與粵曲唱詞之民間文學修辭 (Folk Ballads &)",
            "西洋芭蕾舞劇配樂) (Context: 木魚書、龍舟歌與粵曲唱詞之民間文學修辭 (Folk Ballads &)"
          ],
          "answerIndex": 0,
          "explanation": "龍舟歌藝人手持小鑼鼓與木龍舟，採用靈動即興之粵語口頭敘事。"
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
    "title": "文言倒裝、古漢語詞彙存古與現代高階文言粵語之融合 (Archaic Syntax & Lexical Preservation)",
    "level": "C1",
    "objective": "掌握粵語中古先秦漢語存古現象（副詞/形容詞後置倒裝、單音節古動詞、名詞存古）及其在現代高階文雅粵語寫作中之融會貫通。",
    "presentation": {
      "explanation": "粵語常被稱為『古漢語之活化石』，其語法結構與核心詞庫深植著大量先秦兩漢及唐宋古漢語特徵：\n\n一、古漢語語序倒裝存古現象：\n１．狀語（副詞）後置倒裝：\n- 「你行先」（你先走）—— 相當於先秦古漢語『賓/狀語後置』。\n- 「畀多一件我」（多給我一件）。\n- 「食多啲」（多吃一點）。\n２．比較補語後置：\n- 「我大過你」（我比你年長）—— 保留先秦『大於汝』之介詞後置語序（過＝於）。\n\n二、單音節核心古漢語詞彙存古：\n１．日常核心動作動詞：\n- 「行（haang4）」（走）—— 先秦『步行為行，奔跑為走』。\n- 「走（zau2）」（跑）—— 『扁鵲望桓侯而還走』之古義。\n- 「食（sik6）」（吃）與「飲（jam2）」（喝）。\n- 「睇（tai2）」（看）—— 源自古字『睇』。\n- 「企（kei5）」（站立）—— 『企者不立』之古義。\n\n２．自然身體名詞存古：\n- 「頸（geng2）」（脖子）、「翼（jik6）」（翅膀）、「面（min6）」（臉）、「身（san1）」（身體）。\n\n三、現代高階文言粵語之融會貫通：\n- 在高級社評、文學散文與學術演講中，靈活融合古雅詞彙與嚴謹粵語語法，達成『文而不俗，雅而不澀』之最高境界。",
      "examples": [
        {
          "target": "粵語講「你行先啦，我跟住就嚟」，完美保留咗古漢語狀語後置嘅倒裝語法結構。",
          "reading": "jyut6 jyu5 gong2 \"nei5 haang4 sin1 laa1, ngo5 gan1 zyu6 zau6 lai4\", jyun4 mei5 bou2 lau4 zo2 gu2 hon3 jyu5 zong6 jyu5 hau6 zi3 ge3 dou2 zong1 jyu5 faat3 git3 gau3. [jyːt̚˨ jyː˩˧ kɔːŋ˧˥ \"nei˩˧ haːŋ˨˩ siːn˥ laː˥, ŋɔː˩˧ kɐn˥ tsyː˨ tsɐu˨ lɐi˨˩\", jyːn˨˩ mei˩˧ pou˧˥ lɐu˨˩ tsɔː˧˥ kuː˧˥ hɔːn˧ jyː˩˧ tsɔːŋ˨ jyː˩˧ hɐu˨ tsiː˧ kɛː˧ tou˧˥ tsɔːŋ˥ jyː˩˧ faːt̚˧ kiːt̚˧ kɐu˧] (YUET-YUE GONG \"NEI HAHNG-SEEN LAH, NGOH GUN-JUE JAU-LY\", YUEN-MAY BOU-LAU-JOR GOO-HOHN-YUE JONG-YUE HAU-JEE GEH DOU-JONG YUE-FAHT GEET-GAU)",
          "translation": "Cantonese saying 'You walk first, I will follow right away' perfectly preserves the postpositional inverted grammatical structure of archaic Chinese adverbials."
        },
        {
          "target": "喺日常生活中，廣東話保留咗「行、走、食、飲、睇、企」等大量單音節先秦古動詞，體現出深厚嘅文化底蘊。",
          "reading": "hai2 jat6 seung4 sang1 wut6 zung1, gwong2 dung1 waa6*2 bou2 lau4 zo2 \"haang4, zau2, sik6, jam2, tai2, kei5\" dang2 daai6 loeng6 daan1 jam1 zit3 sin1 ceon4 gu2 dung6 ci4, tai2 jin6 ceot1 sam1 hau5 ge3 man4 faa3 dai2 wan3. [hɐi˩˧ jɐt˨ sœːŋ˨˩ sɐŋ˥ wuːt̚˨ tsʊŋ˥, kʷɔːŋ˧˥ tʊŋ˥ waː˧˥ pou˧˥ lɐu˨˩ tsɔː˧˥ \"haːŋ˨˩, tsɐu˧˥, sɪk̚˨, jɐm˧˥, tʰɐi˧˥, kʰei˩˧\" tɐŋ˧˥ taːi˨ lœːŋ˨ taːn˥ jɐm˥ tsiːt̚˧ siːn˥ tsʰɵn˨˩ kuː˧˥ tʊŋ˨ tsʰiː˨˩, tʰɐi˧˥ jiːn˨ tsʰɵt̚˥ sɐm˥ hɐu˩˧ kɛː˧ mɐn˨˩ faː˧ tɐi˧˥ wɐn˧] (HY YUT-SEUNG SUNG-WOOT JOONG, GWONG-DONG-WAH BOU-LAU-JOR \"HAHNG, JAU, SIK, YUM, TY, KAY\" DUNG DY-LEUNG DAHN-YUM-JEET SEEN-CHUN GOO-DOONG-CHEE, TY-YEEN-CHUT SUM-HAU GEH MUN-FAH DY-WUN)",
          "translation": "In daily life, Cantonese preserves a large number of monosyllabic pre-Qin ancient verbs such as 'haang4 (walk), zau2 (run), sik6 (eat), jam2 (drink), tai2 (look), kei5 (stand)', reflecting profound cultural depth."
        },
        {
          "target": "當代高階粵語寫作融會古典雅詞與本土語法，展現出古今交融、典雅博大之語言魅力。",
          "reading": "dong1 doi6 gou1 gaai1 jyut6 jyu5 se2 zok3 jung4 wui6 gu2 din2 ngaa5 ci4 jyu5 bun2 tou2 jyu5 faat3, zin2 jin6 ceot1 gu2 gam1 gaau1 jung4, din2 ngaa5 bok3 daai6 zi1 jyu5 jin4 mei6 lik6. [tɔːŋ˥ tɔːi˨ kou˥ kaːi˥ jyːt̚˨ jyː˩˧ sɛː˧˥ tsɔːk̚˧ jʊŋ˨˩ wuːi˨ kuː˧˥ tiːn˧˥ ŋaː˩˧ tsʰiː˨˩ jyː˩˧ puːn˧˥ tʰou˧˥ jyː˩˧ faːt̚˧, tsiːn˧˥ jiːn˨ tsʰɵt̚˥ kuː˧˥ kɐm˥ kaːu˥ jʊŋ˨˩, tiːn˧˥ ŋaː˩˧ pɔːk̚˧ taːi˨ tsiː˥ jyː˩˧ jiːn˨˩ mei˨ lɪk̚˨] (DONG-DOY GOU-GAI YUET-YUE SEH-JOK YOONG-WUI GOO-DEEN-NGAH CHEE YUE BOON-TOU YUE-FAHT, JEEN-YEEN-CHUT GOO-GUM GAU-YOONG, DEEN-NGAH BOK-DY JEE YUE-YEEN MAY-LIK)",
          "translation": "Contemporary high-register Cantonese writing blends classical elegant diction with native syntax, demonstrating a linguistic charm of ancient-modern integration and profound elegance."
        }
      ],
      "mnemonics": [
        "【古漢存古歌】慢行快「走」古意存，食飯「飲」水睇得真；行先「大過」倒裝序，活化石語千載春！"
      ],
      "culturalNotes": [
        "粵語中的『走（zau2）』保留了古代『奔跑、逃跑』之本義（如『走難』、『走狗』、『走得快』）；而『行（haang4）』則保留了古代『慢步前行』之本義。這與現代普通話的『走（walk）』與『跑（run）』形成了鮮明的歷史層次對比。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【古漢語動詞】廣東話中「走（zau2）」字在古漢語及本地方言中的原始本義係：",
          "options": [
            "奔跑、逃跑 (Run / Flee - Pre-Qin original meaning)",
            "緩慢步行) (Context: 文言倒裝、古漢語詞彙存古與現代高階文言粵語之融合 (Archaic S)",
            "躺臥睡覺) (Context: 文言倒裝、古漢語詞彙存古與現代高階文言粵語之融合 (Archaic S)",
            "跳躍舞蹈) (Context: 文言倒裝、古漢語詞彙存古與現代高階文言粵語之融合 (Archaic S)"
          ],
          "answerIndex": 0,
          "explanation": "先秦古漢語中「走」為奔跑（如走馬觀花、夸父逐日棄杖而走），粵語完整保留此古義。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【語序倒裝】日常表達「你行先」（你先走）所體現的古漢語語法特徵係：",
          "options": [
            "狀語副詞後置倒裝 (Postpositional adverbial inversion)",
            "賓語前置) (Context: 文言倒裝、古漢語詞彙存古與現代高階文言粵語之融合 (Archaic S)",
            "主謂倒裝) (Context: 文言倒裝、古漢語詞彙存古與現代高階文言粵語之融合 (Archaic S)",
            "定語後置) (Context: 文言倒裝、古漢語詞彙存古與現代高階文言粵語之融合 (Archaic S)"
          ],
          "answerIndex": 0,
          "explanation": "「行先」、「食多啲」體現了狀語副詞後置於動詞之後的古漢語倒裝語法遺存。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【比較句淵源】粵語比較句「我大過你」（ngo5 daai6 gwo3 nei5）中，「過」字的古代語法淵源相當於先秦古漢語的：",
          "options": [
            "介詞「於」（相當於『大於汝』） (Preposition 'yu' - greater than you)",
            "動詞「經過」) (Context: 文言倒裝、古漢語詞彙存古與現代高階文言粵語之融合 (Archaic S)",
            "名詞「過錯」) (Context: 文言倒裝、古漢語詞彙存古與現代高階文言粵語之融合 (Archaic S)",
            "助詞「的」) (Context: 文言倒裝、古漢語詞彙存古與現代高階文言粵語之融合 (Archaic S)"
          ],
          "answerIndex": 0,
          "explanation": "「大過你」在結構上直接對應先秦漢語之「大於汝」，「過」承擔了比較介詞「於」之功能。"
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
    "title": "陳白沙與江門心學：「靜中養出端倪」、「自得之學」 (Chan Baak-saa & Baisha School of Mind)",
    "level": "C1",
    "objective": "掌握明代嶺南大儒陳獻章（陳白沙）江門心學之核心命題（靜中養出端倪、自得、自然隨順）及其在哲學文言粵語中之闡釋體系。",
    "presentation": {
      "explanation": "陳獻章（陳白沙，1428–1500，廣東新會人）係明代心學之開山宗師，創立「江門學派（白沙學派）」，開創了明代由理學轉向心學之歷史先河：\n\n一、陳白沙江門心學三大核心哲學範疇：\n１．「靜坐中養出端倪」（zing6 zo6 zung1 joeng5 ceot1 dyun1 ngai4）：\n- 白沙主張打破宋代程朱理學繁瑣章句註疏之束縛，提倡透過「靜坐」澄心息慮，在心體虛靜中自然體悟善念與天地生機之萌動。\n\n２．「自得之學」（zi6 dak1 zi1 hok6）：\n- 強調為學貴在自得，反對盲從書本或權威教條。「學貴自得，求之於心而安」—— 知識與道德必須由本心內省體認而得。\n\n３．「自然隨順與茅龍筆意」（zi6 jin4 ceoi4 seon6）：\n- 哲學上主張融於自然，藝術上以圭峰山茅草製成獨創之「茅龍筆」，書法蒼勁飛動，展現出心學自由超脫之精神境界。\n\n二、嶺南哲學特質：求真務實、反對教條、注重個體心靈覺醒。",
      "examples": [
        {
          "target": "陳白沙先生提倡「學貴自得」，主張學者唔好盲從前人註疏，應當喺虛靜之中自省本心。",
          "reading": "can4 baak6 saa1 sin1 saang1 tai4 coeng3 \"hok6 gwai3 zi6 dak1\", zyu2 zoeng1 hok6 ze2 m4 hou2 maang4 cung4 cin4 jan4 zyu3 so1, jing3 dong1 hai2 heoi1 zing6 zi1 zung1 zi6 sing2 bun2 sam1. [tsʰɐn˨˩ paːk̚˨ saː˥ siːn˥ saːŋ˥ tʰɐi˨˩ tsʰœːŋ˧ \"hɔːk̚˨ kʷɐi˧ tsiː˨ tɐk̚˥\", tsyː˧˥ tsœːŋ˧ hɔːk̚˨ tsɛː˧˥ m̩˨˩ hou˧˥ maːŋ˨˩ tsʰʊŋ˨˩ tsʰiːn˨˩ jɐn˨˩ tsyː˧ sɔː˥, jɪŋ˥ tɔːŋ˥ hɐi˩˧ hɵy˥ tsɪŋ˨ tsiː˥ tsʊŋ˥ tsiː˨ sɪŋ˧˥ puːn˧˥ sɐm˥] (CHUN BAHK-SAH SEEN-SAHNG TY-CHEUNG \"HOK-GWY JEE-DUK\", JUE-JEUNG HOK-JEH M-HOH MAHNG-CHOONG CHEEN-YUN JUE-SOH, YING-DONG HY HOEY-JING JEE JOONG JEE-SING BOON-SUM)",
          "translation": "Master Chan Baak-saa advocated 'learning values personal self-realization', proposing that scholars should not blindly follow predecessor annotations, but should reflect upon their true minds in tranquility."
        },
        {
          "target": "白沙心學以「靜中養出端倪」為工夫起點，啟發咗後嚟陽明心學對良知本體之深刻探索。",
          "reading": "baak6 saa1 sam1 hok6 ji5 \"zing6 zung1 joeng5 ceot1 dyun1 ngai4\" wai4 gung1 fu1 hei2 dim2, kai2 faat3 zo2 hau6 loi4 joeng4 ming4 sam1 hok6 deoi3 loeng4 zi1 bun2 tai2 zi1 sam1 hak1 taam3 sok3. [paːk̚˨ saː˥ sɐm˥ hɔːk̚˨ jiː˩˧ \"tsɪŋ˨ tsʊŋ˥ jœːŋ˩˧ tsʰɵt̚˥ tyːn˥ ŋɐi˨˩\" wɐi˨˩ kʊŋ˥ fuː˥ hei˧˥ tiːm˧˥, kʰɐi˧˥ faːt̚˧ tsɔː˧˥ hɐu˨ lɔːi˨˩ jœːŋ˨˩ mɪŋ˨˩ sɐm˥ hɔːk̚˨ tɵy˧ lœːŋ˨˩ tsiː˥ puːn˧˥ tʰɐi˧˥ tsiː˥ sɐm˥ hɐk̚˥ tʰaːm˧ sɔːk̚˧] (BAHK-SAH SUM-HOK YEE \"JING-JOONG YEUNG-CHUT DUEN-NGAI\" WAI GONG-FOO HAY-DEEM, KY-FAHT-JOR HAU-LY YEUNG-MING SUM-HOK DEOY LEUNG-JEE BOON-TY JEE SUM-HUK TAHM-SOK)",
          "translation": "Baisha School of Mind took 'nurturing the nascent sprouts of goodness in stillness' as its starting practice, inspiring the later Yangming School's profound exploration of the innate moral mind."
        },
        {
          "target": "先生以圭峰茅草製成茅龍筆，筆鋒雄健奔放，正正係其自然心性在藝術創作上之生動體現。",
          "reading": "sin1 saang1 ji5 gwai1 fung1 maau4 cou2 zai3 sing4 maau4 lung4 bat1, bat1 fung1 hung4 gin6 ban1 fong3, zing3 zing3 hai6 kei4 zi6 jin4 sam1 sing3 zoi6 ngai6 seot6 cong3 zok3 soeng6 zi1 sang1 dung6 tai2 jin6. [siːn˥ saːŋ˥ jiː˩˧ kʷɐi˥ fʊŋ˥ maːu˨˩ tsʰou˧˥ tsɐi˧ sɪŋ˨˩ maːu˨˩ lʊŋ˨˩ pɐt̚˥, pɐt̚˥ fʊŋ˥ hʊŋ˨˩ kiːn˨ pɐn˥ fɔːŋ˧, tsɪŋ˧ tsɪŋ˧ hɐi˨ kʰei˨˩ tsiː˨ jiːn˨˩ sɐm˥ sɪŋ˧ tsɔːi˨ ŋɐi˨ sɵt̚˨ tsʰɔːŋ˧ tsɔːk̚˧ sœːŋ˨ tsiː˥ sɐŋ˥ tʊŋ˨ tʰɐi˧˥ jiːn˨] (SEEN-SAHNG YEE GWY-FOONG MAU-CHOU JY-SING MAU-LONG-BUT, BUT-FONG HOONG-GEEN BUN-FONG, JING-JING HY KEY JEE-YEEN SUM-SING JOY NGY-SUT CHONG-JOK SEUNG JEE SUNG-DOONG TY-YEEN)",
          "translation": "The master fashioned the Maolong reed brush from Guifeng cogongrass; its strokes were bold and unrestrained, precisely a vivid manifestation of his natural mind-nature in artistic creation."
        }
      ],
      "mnemonics": [
        "【白沙心學訣】新會白沙江門立，端倪自得「靜中養」；茅龍筆下寫自然，心學先聲嶺南唱！"
      ],
      "culturalNotes": [
        "陳白沙係明代唯一從祀孔廟的嶺南大儒，被尊為『嶺南一人』。其創立的江門學派標誌著嶺南學術從被動接受中原文化轉變為引領全國哲學思潮之里程碑。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【心學開山】明代江門學派宗師陳白沙提倡之核心求知與心性修養原則係：",
          "options": [
            "學貴自得 / 靜中養出端倪 (Learning values self-realization / nurture sprouts in stillness)",
            "死記硬背註疏) (Context: 陳白沙與江門心學：「靜中養出端倪」、「自得之學」 (Chan Baak)",
            "盲目遵從教條) (Context: 陳白沙與江門心學：「靜中養出端倪」、「自得之學」 (Chan Baak)",
            "放棄所有思考) (Context: 陳白沙與江門心學：「靜中養出端倪」、「自得之學」 (Chan Baak)"
          ],
          "answerIndex": 0,
          "explanation": "陳白沙江門心學以「學貴自得」與「靜中養出端倪」為核心宗旨。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【嶺南名筆】陳獻章（陳白沙）就地取材、以廣東新會圭峰山茅草發明之獨特書法名筆係：",
          "options": [
            "茅龍筆 (Maolong reed brush)",
            "狼毫筆) (Context: 陳白沙與江門心學：「靜中養出端倪」、「自得之學」 (Chan Baak)",
            "羊毫筆) (Context: 陳白沙與江門心學：「靜中養出端倪」、「自得之學」 (Chan Baak)",
            "紫毫筆) (Context: 陳白沙與江門心學：「靜中養出端倪」、「自得之學」 (Chan Baak)"
          ],
          "answerIndex": 0,
          "explanation": "陳白沙以圭峰山茅草創製「茅龍筆」，書法獨具古拙蒼勁之美。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【哲學史地位】陳白沙（陳獻章）在中國思想史上的崇高地位在於：",
          "options": [
            "開創明代江門心學，打破程朱理學教條束縛，為後續陽明心學之崛起奠定先聲 (Pioneering Ming School of Mind and laying foundations for Yangming philosophy)",
            "主張全盤否定儒家道德體系) (Context: 陳白沙與江門心學：「靜中養出端倪」、「自得之學」 (Chan Baak)",
            "只專注於海外貿易而無學術建樹) (Context: 陳白沙與江門心學：「靜中養出端倪」、「自得之學」 (Chan Baak)",
            "禁止弟子進行任何哲學思考) (Context: 陳白沙與江門心學：「靜中養出端倪」、「自得之學」 (Chan Baak)"
          ],
          "answerIndex": 0,
          "explanation": "陳白沙被尊為明代心學之先驅，打破了宋儒註疏之錮蔽，開啟了主體自得心學之新紀元。"
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
    "title": "湛若水（甘泉先生）與隨處體認天理：「心包萬物」、「格物致知」 (Zaam Joek-seoi & Ganquan Philosophy)",
    "level": "C1",
    "objective": "掌握明代嶺南哲學巨擘湛若水（湛甘泉）「隨處體認天理」之哲學體系，理解甘泉學派與陽明學派之學術異同及高階思辨表達。",
    "presentation": {
      "explanation": "湛若水（湛甘泉，1466–1560，廣東增城人），白沙弟子，官至南京禮、吏、兵三部尚書。與王陽明齊名並稱『王湛之學』：\n\n一、湛甘泉「甘泉學派」三大核心命題：\n１．「隨處體認天理」（ceoi4 cyu3 tai2 jin6 tin1 lei5）：\n- 甘泉哲學之最高綱領。主張天理無所不在，學者應在日常行住坐臥、為政處事之一切境遇中，「隨處」以本心體認貫通天理。\n\n２．「心包萬物」（sam1 baau1 maan6 mat6）：\n- 認為心與萬物非內外二分，『心體無邊無界，萬物皆在心體之中』，反對將格物窮理視為向外逐物。\n\n３．王湛之學比較（Ganquan vs. Yangming）：\n- 陽明主「致良知」（側重於本心良知之自我擴充與發見）。\n- 甘泉主「隨處體認天理」（側重於心與境遇交融共照，體用兼備）。\n\n二、興辦書院與廣育英才：\n- 甘泉一生在羅浮山、西樵山、南嶽等地興建書院近四十所，將嶺南儒學心學傳播至大江南北。",
      "examples": [
        {
          "target": "湛甘泉先生主張「隨處體認天理」，強調無論讀書、為官定係日常生活，無一處唔係修心體道之所在。",
          "reading": "zaam3 gam1 cyun4 sin1 saang1 zyu2 zoeng1 \"ceoi4 cyu3 tai2 jin6 tin1 lei5\", koeng4 diu6 mou4 leon6 duk6 syu1, wai4 gun1 ding6 hai6 jat6 seung4 sang1 wut6, mou4 jat1 cyu3 m4 hai6 sau1 sam1 tai2 dou6 zi1 so2 zoi6. [tsaːm˧ kɐm˥ tsʰyːn˨˩ siːn˥ saːŋ˥ tsyː˧˥ tsœːŋ˧ \"tsʰɵy˨˩ tsʰyː˧ tʰɐi˧˥ jiːn˨ tʰiːn˥ lei˩˧\", kʰœːŋ˨˩ tiːu˨ mouou˨˩ lɵn˨ tʊk̚˨ syː˥, wɐi˨˩ kuːn˥ tɪŋ˨ hɐi˨ jɐt˨ sœːŋ˨˩ sɐŋ˥ wuːt̚˨, mouou˨˩ jɐt̚˥ tsʰyː˧ m̩˨˩ hɐi˨ sɐu˥ sɐm˥ tʰɐi˧˥ tou˨ tsiː˥ sɔː˧˥ tsɔːi˨] (JAHM GUM-CHUEN SEEN-SAHNG JUE-JEUNG \"CHOEY-CHUE TY-YEEN TEEN-LEY\", KEUNG-DEW MOU-LEUN DUK-SYU, WAI-GOON DING HY YUT-SEUNG SUNG-WOOT, MOU-YUT-CHUE M-HY SAU-SUM TY-DOU JEE SOH-JOY)",
          "translation": "Master Zaam Ganquan advocated 'realizing heavenly principle everywhere', emphasizing that whether studying, serving as an official, or in daily life, there is no place that is not a site for cultivating the mind and realizing the Dao."
        },
        {
          "target": "明代哲學界「王湛並稱」，王陽明主「致良知」，而湛若水則以「體認天理」相發明，共同推動心學達到鼎盛。",
          "reading": "ming4 doi6 zit3 hok6 gaai1 \"wong4 zaam3 bing6 cing1\", wong4 joeng4 ming4 zyu2 \"zi3 loeng4 zi1\", ji4 zaam3 joek6 seoi2 zak1 ji5 \"tai2 jin6 tin1 lei5\" soeng1 faat3 ming4, gung6 tung4 teoi1 dung6 sam1 hok6 daat6 dou3 ding2 sing6. [mɪŋ˨˩ tɔːi˨ tsit̚˧ hɔːk̚˨ kaːi˥ \"wɔːŋ˨˩ tsaːm˧ pɪŋ˨ tsʰɪŋ˥\", wɔːŋ˨˩ jœːŋ˨˩ mɪŋ˨˩ tsyː˧˥ \"tsiː˧ lœːŋ˨˩ tsiː˥\", jiː˨˩ tsaːm˧ jœːk̚˨ sɵy˧˥ tsɐk̚˥ jiː˩˧ \"tʰɐi˧˥ jiːn˨ tʰiːn˥ lei˩˧\" sœːŋ˥ faːt̚˧ mɪŋ˨˩, kʊŋ˨ tʰʊŋ˨ tʰɵy˥ tʊŋ˨ sɐm˥ hɔːk̚˨ taːt̚˨ tou˧ tɪŋ˧˥ sɪŋ˨] (MING-DOY JEET-HOK-GY \"WONG-JAHM BING-CHING\", WONG YEUNG-MING JUE \"JEE LEUNG-JEE\", YEE JAHM YERK-SOEY JUK YEE \"TY-YEEN TEEN-LEY\" SEUNG FAHT-MING, GONG-TOONG TOEY-DOONG SUM-HOK DAHT-DOU DING-SING)",
          "translation": "In Ming dynasty philosophy, 'Wang and Zhan were celebrated together'; Wang Yangming championed 'extending innate moral knowledge', while Zhan Ruoshui articulated 'realizing heavenly principle', jointly propelling the School of Mind to its zenith."
        },
        {
          "target": "甘泉先生喺西樵山同羅浮山大興書院講學，培育出大量嶺南精英學者，深遠影響咗嶺南士風。",
          "reading": "gam1 cyun4 sin1 saang1 hai2 sai1 ciu4 saan1 tung4 lo4 fau4 saan1 daai6 hing1 syu1 jyun6*2 gong2 hok6, pui4 juk6 ceot1 daai6 loeng6 ling5 naam4 zing1 jing1 hok6 ze2, sam1 jyun5 jing2 hoeng2 zo2 ling5 naam4 si6 fung1. [kɐm˥ tsʰyːn˨˩ siːn˥ saːŋ˥ hɐi˩˧ sɐi˥ tsʰiːu˨˩ saːn˥ tʰʊŋ˨˩ lɔː˨˩ fɐu˨˩ saːn˥ taːi˨ hɪŋ˥ syː˥ jyːn˧˥ kɔːŋ˧˥ hɔːk̚˨, pʰuːi˨˩ jʊk̚˨ tsʰɵt̚˥ taːi˨ lœːŋ˨ lɪŋ˩˧ naːm˨˩ tsɪŋ˥ jɪŋ˥ hɔːk̚˨ tsɛː˧˥, sɐm˥ jyːn˩˧ jɪŋ˧˥ hœːŋ˧˥ tsɔː˧˥ lɪŋ˩˧ naːm˨˩ siː˨ fʊŋ˥] (GUM-CHUEN SEEN-SAHNG HY SY-CHIU-SAHN TOONG LOH-FAU-SAHN DY-HING SYU-YUEN GONG-HOK, PUI-YUK-CHUT DY-LEUNG LING-NAHM JING-YING HOK-JEH, SUM-YUEN YING-HEUNG-JOR LING-NAHM SEE-FONG)",
          "translation": "Master Ganquan established academies and lectured extensively at Xiqiao Mountain and Luofu Mountain, cultivating numerous elite Lingnan scholars and deeply influencing the scholarly spirit of Lingnan."
        }
      ],
      "mnemonics": [
        "【甘泉哲學歌】增城甘泉湛若水，隨處體認天理明；心包萬物無內外，王湛並稱天下驚！"
      ],
      "culturalNotes": [
        "湛甘泉活到九十五歲高齡，一生興辦三十餘所書院，弟子遍佈天下。他與王陽明保持了數十年的深厚學術友誼，互相切磋，成就了明代思想史上一段千古佳話。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【哲學核心】明代思想家湛若水（湛甘泉）所創立之甘泉學派，其最高哲學命題係：",
          "options": [
            "隨處體認天理 (Realizing Heavenly Principle in all places)",
            "存天理滅人欲) (Context: 湛若水（甘泉先生）與隨處體認天理：「心包萬物」、「格物致知」 (Zaa)",
            "唯物辯證法) (Context: 湛若水（甘泉先生）與隨處體認天理：「心包萬物」、「格物致知」 (Zaa)",
            "因果報應說) (Context: 湛若水（甘泉先生）與隨處體認天理：「心包萬物」、「格物致知」 (Zaa)"
          ],
          "answerIndex": 0,
          "explanation": "湛甘泉哲學之核心綱領為「隨處體認天理」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【並稱巨擘】在明代心學發展史上，與王陽明齊名並稱「王湛之學」的嶺南大儒係：",
          "options": [
            "湛若水（湛甘泉） (Zaam Joek-seoi / Zaam Ganquan)",
            "屈大均) (Context: 湛若水（甘泉先生）與隨處體認天理：「心包萬物」、「格物致知」 (Zaa)",
            "梁啟超) (Context: 湛若水（甘泉先生）與隨處體認天理：「心包萬物」、「格物致知」 (Zaa)",
            "康有為) (Context: 湛若水（甘泉先生）與隨處體認天理：「心包萬物」、「格物致知」 (Zaa)"
          ],
          "answerIndex": 0,
          "explanation": "湛若水（湛甘泉）與王陽明齊名，被明代學術界並稱為「王湛之學」。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【心物關係】湛甘泉「心包萬物」命題所闡發之核心宇宙心性觀為：",
          "options": [
            "心體無邊無界，萬物皆涵容於心體之中，主體與世界渾然一體 (Mind encapsulates all myriad things without internal/external divide)",
            "物質完全獨立於意識之外且彼此隔絕) (Context: 湛若水（甘泉先生）與隨處體認天理：「心包萬物」、「格物致知」 (Zaa)",
            "只有看得見的具體物件才算存在) (Context: 湛若水（甘泉先生）與隨處體認天理：「心包萬物」、「格物致知」 (Zaa)",
            "心靈與外界毫無關聯) (Context: 湛若水（甘泉先生）與隨處體認天理：「心包萬物」、「格物致知」 (Zaa)"
          ],
          "answerIndex": 0,
          "explanation": "「心包萬物」強調心體博大無外，萬事萬物皆在心體之中涵融貫通。"
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
    "title": "康有為、梁啟超與萬木草堂維新思想：「變法圖強」、「新民說」 (Kang-Liang Enlightenment)",
    "level": "C1",
    "objective": "掌握近代嶺南維新啟蒙思潮（萬木草堂、變法圖強、新民說、大同書）及其在近代思想界之變革話語體系與政論修辭。",
    "presentation": {
      "explanation": "近代廣東處於中西文明碰撞交融之最前沿，孕育出深刻改變中國歷史進程之維新啟蒙思想：\n\n一、康有為與萬木草堂（Wanmu Caotang）：\n１．創立萬木草堂：\n- 康有為在廣州長興里創辦萬木草堂，開創「中西並包、古今融通」之新學風，培養出梁啟超、麥孟華等維新中堅。\n２．哲學與變法理論：\n- 《新學偽經考》、《孔子改制考》：借孔子託古改制之名，打破封建正統思想錮蔽，為維新變法提供理論合法性。\n- 《大同書》：勾勒出人類消滅階級、國家、家庭隔閡，邁向世界大同之烏托邦宏偉構想。\n\n二、梁啟超與「新民說」（New Citizenry）：\n１．新民理論：\n- 梁啟超提出「欲維新吾國，當先維新吾民」，主張改造國民劣根性，培育具備獨立人格、權利義務意識與公德之現代「新民」。\n２．「新文體（報章體）」：\n- 融會文言典雅、口語生動與西洋邏輯，筆鋒常帶感情，極具鼓動性與啟蒙力量。",
      "examples": [
        {
          "target": "萬木草堂打破咗傳統科舉八股嘅束縛，提倡中西合璧與經世致用，成為近代維新思想之搖籃。",
          "reading": "maan6 muk6 cou2 tong4 daa2 po3 zo2 cyun4 tung4 fo1 geoi2 baat3 gu2 ge3 cuk1 bok3, tai4 coeng3 zung1 sai1 hap6 bik1 jyu5 ging1 sai3 zi3 jung6, sing4 wai4 gan6 doi6 wai4 san1 si1 soeng2 zi1 jiu4 laam4. [maːn˨ mʊk̚˨ tsʰou˧˥ tʰɔːŋ˨˩ taː˧˥ pʰɔː˧ tsɔː˧˥ tsʰyːn˨˩ tʰʊŋ˨˩ fɔː˥ kɵy˧˥ paːt̚˧ kuː˧˥ kɛː˧ tsʰʊk̚˥ pɔːk̚˧, tʰɐi˨˩ tsʰœːŋ˧ tsʊŋ˥ sɐi˥ hɐp̚˨ pɪk̚˥ jyː˩˧ kɪŋ˥ sɐi˧ tsiː˧ jʊŋ˨, sɪŋ˨˩ wɐi˨˩ kɐn˨ tɔːi˨ wɐi˨˩ sɐn˥ siː˥ sœːŋ˧˥ tsiː˥ jiːu˨˩ laːm˨˩] (MAHN-MOK CHOU-TONG DAH-POH-JOR CHUEN-TOONG FOH-GOEY BAHT-GOO GEH CHUK-BOK, TY-CHEUNG JOONG-SY HUP-BIK YUE GING-SY-JEE-YOONG, SING-WAI GUN-DOY WAI-SUN SEE-SEUNG JEE YIU-LAHM)",
          "translation": "Wanmu Caotang shattered the shackles of traditional civil service eight-legged essays, promoting the fusion of Chinese and Western learning and statecraft, becoming the cradle of modern reformist thought."
        },
        {
          "target": "梁啟超先生喺《新民說》中疾呼：欲要國家富強獨立，首要之務在於重塑國民品格，培育現代公民意識。",
          "reading": "loeng4 kai2 ciu1 sin1 saang1 hai2 \"san1 man4 syut3\" zung1 zat6 fu1: juk6 jiu3 gwok3 gaa1 fu3 koeng4 duk6 laap6, sau2 jiu3 zi1 mou6 zoi6 jyu1 cung4 sou3 gwok3 man4 ban2 gaak3, pui4 juk6 jin6 doi6 gung1 man4 ji3 sik1. [lœːŋ˨˩ kʰɐi˧˥ tsʰiːu˥ siːn˥ saːŋ˥ hɐi˩˧ \"sɐn˥ mɐn˨˩ syːt̚˧\" tsʊŋ˥ tsɐt̚˨ fuː˥: jʊk̚˨ jiu˧ kʷɔːk̚˧ kaː˥ fuː˧ kʰœːŋ˨˩ tʊk̚˨ laːp̚˨, sɐu˧˥ jiu˧ tsiː˥ mou˨ tsɔːi˨ jyː˥ tsʰʊŋ˨˩ sou˧ kʷɔːk̚˧ mɐn˨˩ pʰɐn˧˥ kaːk̚˧, pʰuːi˨˩ jʊk̚˨ jiːn˨ tɔːi˨ kʊŋ˥ mɐn˨˩ jiː˧ sɪk̚˥] (LEUNG KY-CHIU SEEN-SAHNG HY \"SUN-MUN-SUET\" JOONG JUT-FOO: YUK-YEW GWOK-GAH FOO-KEUNG DUK-LAHP, SAU-YEW JEE MOU JOY-YUE CHOONG-SOU GWOK-MUN BUN-GAAK, PUI-YUK YEEN-DOY GONG-MUN YEE-SIK)",
          "translation": "Mr. Liang Qichao vigorously appealed in 'On the New Citizenry': To make the nation prosperous, strong, and independent, the foremost priority lies in reshaping the national character and cultivating modern civic consciousness."
        },
        {
          "target": "康梁二人以犀利之筆鋒宣傳變法圖強，其澎湃之政論文章深深震撼咗當時封閉沉睡之思想界。",
          "reading": "hong1 loeng4 ji6 jan4 ji5 sai1 lei6 zi1 bat1 fung1 syun1 cyun4 bin3 faat3 tou4 koeng4, kei4 pang4 baai3 zi1 zing3 leon6 man4 zoeng1 sam1 sam1 zan3 ham6 zo2 dong1 si4 fung1 bai3 cam4 seoi6 zi1 si1 soeng2 gaai1. [hɔːŋ˥ lœːŋ˨˩ ji˨ jɐn˨˩ jiː˩˧ sɐi˥ lei˨ tsiː˥ pɐt̚˥ fʊŋ˥ syːn˥ tsʰyːn˨˩ piːn˧ faːt̚˧ tʰou˨˩ kʰœːŋ˨˩, kʰei˨˩ pʰɐŋ˨˩ paːi˧ tsiː˥ tsɪŋ˧ lɵn˨ mɐn˨˩ tsœːŋ˥ sɐm˥ sɐm˥ tsɐn˧ hɐm˨ tsɔː˧˥ tɔːŋ˥ siː˨˩ fʊŋ˥ pɐi˧ tsʰɐm˨˩ sɵy˨ tsiː˥ siː˥ sœːŋ˧˥ kaːi˥] (HOHNG-LEUNG YEE-YUN YEE SY-LEY JEE BUT-FONG SUEN-CHUEN BEEN-FAHT TOU-KEUNG, KEY PUNG-BY JEE JING-LEUN MUN-JEUNG SUM-SUM JUN-HUM-JOR DONG-SEE FONG-BY CHUM-SOEY JEE SEE-SEUNG-GY)",
          "translation": "Kang and Liang used their incisive pens to promote reform and national rejuvenation, and their surging political essays deeply jolted the closed and slumbering intellectual world of the time."
        }
      ],
      "mnemonics": [
        "【維新思想歌】南海康南海有為，草堂萬木育奇才；新民說動天下志，變法圖強風暴來！"
      ],
      "culturalNotes": [
        "萬木草堂舊址位於廣州中山四路邱氏書室。康有為在此講學打破傳統四書五經模式，兼授萬國史記、算術、地理與格致之學，被視為中國近代高等教育改革的先驅實驗。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【啟蒙名作】近代思想家梁啟超所著、主張「欲維新吾國，當先維新吾民」之核心啟蒙著作係：",
          "options": [
            "《新民說》 (On the New Citizenry)",
            "《廣東新語》) (Context: 康有為、梁啟超與萬木草堂維新思想：「變法圖強」、「新民說」 (Kang)",
            "《花箋記》) (Context: 康有為、梁啟超與萬木草堂維新思想：「變法圖強」、「新民說」 (Kang)",
            "《大同書》) (Context: 康有為、梁啟超與萬木草堂維新思想：「變法圖強」、「新民說」 (Kang)"
          ],
          "answerIndex": 0,
          "explanation": "《新民說》為梁啟超系統闡述現代國民品格與公民意識重塑之經典名篇。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【維新搖籃】康有為在廣州創辦、培養了梁啟超等維新變法核心骨幹之著名學堂係：",
          "options": [
            "萬木草堂 (Wanmu Caotang Academy)",
            "白鹿洞書院) (Context: 康有為、梁啟超與萬木草堂維新思想：「變法圖強」、「新民說」 (Kang)",
            "嶽麓書院) (Context: 康有為、梁啟超與萬木草堂維新思想：「變法圖強」、「新民說」 (Kang)",
            "應天書院) (Context: 康有為、梁啟超與萬木草堂維新思想：「變法圖強」、「新民說」 (Kang)"
          ],
          "answerIndex": 0,
          "explanation": "萬木草堂為康有為於廣州設立、推動近代維新變法思想之著名講學聖地。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【思想烏托邦】康有為晚年所著、描繪消除國家階級界限與實現人類世界大同理想之著作係：",
          "options": [
            "《大同書》 (The Book of Great Unity)",
            "《新學偽經考》) (Context: 康有為、梁啟超與萬木草堂維新思想：「變法圖強」、「新民說」 (Kang)",
            "《孔子改制考》) (Context: 康有為、梁啟超與萬木草堂維新思想：「變法圖強」、「新民說」 (Kang)",
            "《變法通議》) (Context: 康有為、梁啟超與萬木草堂維新思想：「變法圖強」、「新民說」 (Kang)"
          ],
          "answerIndex": 0,
          "explanation": "《大同書》勾勒出康有為對未來世界大同社會之宏偉哲學構想。"
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
    "title": "容閎、留美幼童與嶺南近代西學東漸：「開眼看世界之先驅」 (Yung Wing & Early Modernization)",
    "level": "C1",
    "objective": "掌握嶺南作為中國近代西學東漸門戶之歷史地位，理解容閎（留美幼童之父）與近代啟蒙先鋒之現代化話術與跨文化思辨表達。",
    "presentation": {
      "explanation": "嶺南依託毗鄰港澳與海洋貿易之天然優勢，成為近代中國『西學東漸』最重要之窗口與橋樑：\n\n一、容閎（Yung Wing，1828–1912，廣東香山人）：\n１．中國近代留學之父：\n- 1854年畢業於美國耶魯大學，成為中國首位留美大學畢業生。\n２．倡導「留美幼童」計劃（Chinese Educational Mission）：\n- 歷經艱辛促成清政府派遣四批共120名幼童赴美留學（包括詹天佑、唐紹儀、梁敦彥等），為中國近代鐵路、礦業、海軍與外交培養了第一代現代化奠基人才。\n\n二、嶺南海洋文明與現代化特質：\n１．「開眼看世界」（Broad Global Horizon）：嶺南人最先接觸現代西方科學、法律、醫學與工程技術。\n２．求真務實、敢為人先：形成了兼具愛國情懷與世界視野之嶺南近代知識分子群體。",
      "examples": [
        {
          "target": "容閎先生作為中國留美第一人，以畢生心血推動幼童赴美留學，為國家現代化播下咗寶貴種子。",
          "reading": "jung4 wang4 sin1 saang1 zok3 wai4 zung1 gwok3 lau4 mei5 dai6 jat1 jan4, ji5 bat1 sang1 sam1 hyut3 teoi1 dung6 jau3 tung4 fu6 mei5 lau4 hok6, wai6 gwok3 gaa1 jin6 doi6 faa3 bo3 haa6 zo2 zan1 gwai3 zung2 zi2. [jʊŋ˨˩ wɐŋ˨˩ siːn˥ saːŋ˥ tsɔːk̚˧ wɐi˨˩ tsʊŋ˥ kʷɔːk̚˧ lɐu˨˩ mei˩˧ tɐi˨ jɐt̚˥ jɐn˨˩, jiː˩˧ pɐt̚˥ sɐŋ˥ sɐm˥ hyːt̚˧ tʰɵy˥ tʊŋ˨ jɐu˧ tʰʊŋ˨˩ fu˨ mei˩˧ lɐu˨˩ hɔːk̚˨, wɐi˨ kʷɔːk̚˧ kaː˥ jiːn˨ tɔːi˨ faː˧ pɔː˧ haː˨ tsɔː˧˥ tsɐn˥ kʷɐi˧ tsʊŋ˧˥ tsiː˧˥] (YOONG-WUNG SEEN-SAHNG JOK-WAI JOONG-GWOK LAU-MAY DY-YUT-YUN, YEE BUT-SUNG SUM-HUET TOEY-DOONG YAU-TOONG FOO-MAY LAU-HOK, WAI GWOK-GAH YEEN-DOY-FAH POH-HAH-JOR JUN-GWY JOONG-JEE)",
          "translation": "Mr. Yung Wing, as the first Chinese person to study in America, dedicated his life's blood to promoting young boys studying in the United States, sowing precious seeds for the nation's modernization."
        },
        {
          "target": "香山與珠三角地區作為西學東漸嘅前沿陣地，孕育出大批具備世界眼光與改革勇氣之開明先鋒。",
          "reading": "hoeng1 saan1 jyu5 zyu1 saam1 gok3 dei6 keoi1 zok3 wai4 sai1 hok6 dung1 zim1 ge3 cin4 jin4 zan6 dei6, juk6 juk6 ceot1 daai6 pai1 geoi6 jau5 sai3 gaai3 ngaan5 gwong1 jyu5 goi2 gaak3 jung5 hei3 zi1 hoi1 ming4 sin1 fung1. [hœːŋ˥ saːn˥ jyː˩˧ tsyː˥ saːm˥ kɔːk̚˧ tei˨ kʰɵy˥ tsɔːk̚˧ wɐi˨˩ sɐi˥ hɔːk̚˨ tʊŋ˥ tsiːm˥ kɛː˧ tsʰiːn˨˩ jiːn˨˩ tsɐn˨ tei˨, jʊk̚˨ jʊk̚˨ tsʰɵt̚˥ taːi˨ pʰaːi˥ kɵy˨ jɐu˩˧ sɐi˧ kaːi˧ ŋaːn˩˧ kʷɔːŋ˥ jyː˩˧ kɔːi˧˥ kaːk̚˧ jʊŋ˩˧ hei˧ tsiː˥ hɔːi˥ mɪŋ˨˩ siːn˥ fʊŋ˥] (HEUNG-SAHN YUE JUE-SAHM-GOK DAY-KOEY JOK-WAI SY-HOK DONG-JEEM GEH CHEEN-YEEN JUN-DAY, YUK-YUK-CHUT DY-PY GOEY-YAU SY-GY NGAHN-GWONG YUE GOY-GAAK YOONG-HEY JEE HOI-MING SEEN-FONG)",
          "translation": "Xiangshan and the Pearl River Delta region, as the frontier outpost of the spread of Western learning eastward, nurtured a large cohort of enlightened pioneers endowed with global perspectives and reformist courage."
        },
        {
          "target": "留美幼童計劃培養出鐵路工程之父詹天佑等傑出人才，彰顯出嶺南人敢為人先之歷史擔當。",
          "reading": "lau4 mei5 jau3 tung4 kwai1 waak6 pui4 joeng5 ceot1 tit3 lou6 gung1 cing4 zi1 fu6 zim1 tin1 jau6 dang2 git6 ceot1 jan4 coi4, zoeng1 hin2 ceot1 ling5 naam4 jan4 gam2 wai4 jan4 sin1 zi1 lik6 si1 daam1 dong1. [lɐu˨˩ mei˩˧ jɐu˧ tʰʊŋ˨˩ kʰwɐi˥ waːk̚˨ pʰuːi˨˩ jœːŋ˩˧ tsʰɵt̚˥ tʰiːt̚˧ lou˨ kʊŋ˥ tsʰɪŋ˨˩ tsiː˥ fuː˨ tsiːm˥ tʰiːn˥ jɐu˨ tɐŋ˧˥ kiːt̚˨ tsʰɵt̚˥ jɐn˨˩ tsʰɔːi˨˩, tsœːŋ˥ hiːn˧˥ tsʰɵt̚˥ lɪŋ˩˧ naːm˨˩ jɐn˨˩ kɐm˧˥ wɐi˨˩ jɐn˨˩ siːn˥ tsiː˥ lɪk̚˨ siː˥ taːm˥ tɔːŋ˥] (LAU-MAY YAU-TOONG KWAI-WAAK PUI-YEUNG-CHUT TEET-LOU GONG-CHING JEE FOO JEEM-TEEN-YAU DUNG GEET-CHUT YUN-CHOY, JEUNG-HEEN-CHUT LING-NAHM-YUN GUM-WAI-YUN-SEEN JEE LIK-SEE DAHM-DONG)",
          "translation": "The Chinese Educational Mission cultivated outstanding talents like Jeme Tien Yow, the Father of Chinese Railroads, demonstrating the historical courage of Lingnan people to dare to lead the world."
        }
      ],
      "mnemonics": [
        "【容閎先驅頌】耶魯歸來香山容，留美幼童拓鴻蒙；鐵路詹公留青史，西學東漸嶺南風！"
      ],
      "culturalNotes": [
        "廣東香山（今中山市與珠海市一帶）孕育了容閎、唐紹儀、孫中山等眾多改寫中國近代史的風雲人物。香山買辦文化與華僑傳統，使其成為中國近代放眼看世界之首善之區。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【留學之父】1854年畢業於美國耶魯大學、被尊為「中國留學生之父」並推動留美幼童計劃之嶺南先驅係：",
          "options": [
            "容閎 (Yung Wing)",
            "詹天佑) (Context: 容閎、留美幼童與嶺南近代西學東漸：「開眼看世界之先驅」 (Yung W)",
            "林則徐) (Context: 容閎、留美幼童與嶺南近代西學東漸：「開眼看世界之先驅」 (Yung W)",
            "魏源) (Context: 容閎、留美幼童與嶺南近代西學東漸：「開眼看世界之先驅」 (Yung W)"
          ],
          "answerIndex": 0,
          "explanation": "容閎為首位留美中國大學畢業生，一生致力於推動中國教育現代化。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【近代工程】由留美幼童出身之傑出工程師、主持修建京張鐵路並被譽為「中國鐵路之父」之名家係：",
          "options": [
            "詹天佑 (Jeme Tien Yow)",
            "容閎) (Context: 容閎、留美幼童與嶺南近代西學東漸：「開眼看世界之先驅」 (Yung W)",
            "唐紹儀) (Context: 容閎、留美幼童與嶺南近代西學東漸：「開眼看世界之先驅」 (Yung W)",
            "梁敦彥) (Context: 容閎、留美幼童與嶺南近代西學東漸：「開眼看世界之先驅」 (Yung W)"
          ],
          "answerIndex": 0,
          "explanation": "詹天佑為第一批留美幼童優秀代表，主持修建了著名的京張鐵路。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【地理樞紐】嶺南地區在中國近代「西學東漸」進程中扮演核心角色之根本優勢在於：",
          "options": [
            "毗鄰港澳與海外通商口岸之海洋地理優勢，孕育出勇於革新、開眼看世界的重商與留學傳統 (Maritime gateway advantage adjacent to HK/Macau with reformist traditions)",
            "地理位置封閉偏僻遠離所有海外航線) (Context: 容閎、留美幼童與嶺南近代西學東漸：「開眼看世界之先驅」 (Yung W)",
            "嚴格禁止任何外國人與外來技術進入) (Context: 容閎、留美幼童與嶺南近代西學東漸：「開眼看世界之先驅」 (Yung W)",
            "完全缺乏商業與航海歷史) (Context: 容閎、留美幼童與嶺南近代西學東漸：「開眼看世界之先驅」 (Yung W)"
          ],
          "answerIndex": 0,
          "explanation": "嶺南得天獨厚之海洋口岸優勢使其成為近代西方思想與科學技術傳入中國之首要樞紐。"
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
    "title": "近代嶺南政論文與現代粵語思想論辯之修辭架構：「立論」、「駁論」、「辨證」 (Political Discourse & Rhetorical Architecture)",
    "level": "C1",
    "objective": "掌握近代嶺南政論名篇（梁啟超報章體、孫中山民權演說）之修辭架構、立論駁論邏輯銜接標記及其在當代高階粵語學術思辨中之運用。",
    "presentation": {
      "explanation": "近代嶺南政論文開創了中文現代政論與思想論辯之新紀元，其嚴密的邏輯架構與修辭體系至今仍係高階學術思辨之範式：\n\n一、近代政論與思辨論文三大核心論述板塊：\n１．立論與前提奠定（Proposition & Premises）：\n- 「何以見得？究其根源……」（ho4 ji5 gin3 dak1? gau3 kei4 gan1 jyun4...）：提問設疑，追根溯源引出核心論點。\n- 「由此觀之，事態之本質在於……」（jau4 ci2 gun1 zi1...）：從現象提煉本質。\n\n２．駁論與謬誤破斥（Refutation & Counter-Arguments）：\n- 「彼等論調看似言之成理，實則避重就輕，倒果為因」（bei2 dang2 leon6 diu6...）：揭示對方邏輯謬誤。\n- 「若以此邏輯推演，勢必導向自相矛盾之困局」（joek6 ji5 ci2 lo4 cap1 teoi1 jin2...）：以歸謬法瓦解對手立場。\n\n３．辨證綜合與長遠建言（Synthesis & Conclusion）：\n- 「既不可盲目冒進，亦不可因循守舊，唯有動態平衡各方利益」（gei3 bat1 ho2...）：辯證折中。\n- 「總結全文，縱觀全局，唯有深化體制改革，方為長治久安之根本」（zung2 git3 cyun4 man4...）。",
      "examples": [
        {
          "target": "何以見得？究其根源，傳統保守勢力之所以阻撓變法，實質上係為咗維護其既得利益，而非顧及國家前途。",
          "reading": "ho4 ji5 gin3 dak1? gau3 kei4 gan1 jyun4, cyun4 tung4 bou2 sau2 sai3 lik6 zi1 so2 ji5 zo2 naau4 bin3 faat3, sat6 zat1 soeng6 hai6 wai6 zo2 wai4 wu6 kei4 gei3 dak1 lei6 jik1, ji4 fei1 gu3 kap6 gwok3 gaa1 cin4 tou4. [hɔː˨˩ jiː˩˧ kiːn˧ tɐk̚˥? kɐu˧ kʰei˨˩ kɐn˥ jyːn˨˩, tsʰyːn˨˩ tʰʊŋ˨˩ pou˧˥ sɐu˧˥ sɐi˧ lɪk̚˨ tsiː˥ sɔː˧˥ jiː˩˧ tsɔː˧˥ naːu˨˩ piːn˧ faːt̚˧, sɐt̚˨ tsɐt̚˥ sœːŋ˨ hɐi˨ wɐi˨ tsɔː˧˥ wɐi˨˩ wuː˨ kʰei˨˩ kei˧ tɐk̚˥ lei˨ jɪk̚˥, jiː˨˩ fei˥ kuː˧ kʰɐp̚˨ kʷɔːk̚˧ kaː˥ tsʰiːn˨˩ tʰou˨˩] (HOH-YEE GEEN-DUK? GAU-KEY GUN-YUEN, CHUEN-TOONG BOU-SAU SY-LIK JEE SOH-YEE JOR-NAU BEEN-FAHT, SUT-JUT SEUNG HY WAI-JOR WAI-WOO KEY GAY-DUK LEY-YIK, YEE-FAY GOO-KUP GWOK-GAH CHEEN-TOU)",
          "translation": "How is this evident? Probing its root cause, the reason traditional conservative forces obstruct reform is essentially to safeguard their vested interests rather than considering the nation's future."
        },
        {
          "target": "彼等反對方案看似言之成理，實則混淆視聽、倒果為因，完全禁唔起嚴密之邏輯推敲與數據驗證。",
          "reading": "bei2 dang2 faan2 deoi3 fong1 on3 faan2 ji5 ho2 seng1, sat6 zak1 wan6 ngaau4 si6 ting1, dou2 gwo2 wai4 jan1, cyun4 min6 gam1 m4 hei2 jim4 mat6 zi1 lo4 cap1 teoi1 kaau1 jyu5 sou3 geui3 jim6 zing3. [pei˧˥ tɐŋ˧˥ faːn˧˥ tɵy˧ fɔːŋ˥ ɔːn˧ faːn˧˥ jiː˩˧ hɔː˧˥ sɪŋ˥, sɐt̚˨ tsɐk̚˥ wɐn˨ ŋaːu˨˩ siː˨ tʰɪŋ˥, tou˧˥ kʷɔː˧˥ wɐi˨˩ jɐn˥, tsʰyːn˨˩ miːn˨ kɐm˥ m̩˨˩ hei˧˥ jiːm˨˩ mɐt̚˨ tsiː˥ lɔː˨˩ tsʰɐp̚˥ tʰɵy˥ haːu˥ jyː˩˧ sou˧ kɵy˧ jiːm˨ tsɪŋ˧] (BAY-DUNG FAHN-DEOY FONG-ON FAHN-YEE HOH-SENG, SUT-JUK WUN-NGAU SEE-TING, DOU-GWOR WAI-YUN, CHUEN-MEEN GUM-M-HAY YEEM-MUT JEE LOH-CHUP TOEY-HAU YUE SOU-GOEY YEEM-JING)",
          "translation": "Their counter-arguments appear plausible on the surface, but in fact confuse the public and invert cause and effect, completely failing to withstand rigorous logical scrutiny and empirical data verification."
        },
        {
          "target": "縱觀全局，我哋既要堅定傳承嶺南文化之實踐精神，又要以開放包容之胸襟積極吸收現代世界一切優秀文明成果。",
          "reading": "zung3 gun1 cyun4 guk6, ngo5 dei6 gei3 jiu3 gin1 ding6 cyun4 sing4 ling5 naam4 man4 faa3 zi1 sat6 zin2 zing1 san1, jau6 jiu3 ji5 hoi1 fong3 baau1 jung4 zi1 hung1 kam1 zik1 gik1 kap1 sau1 jin6 doi6 sai3 gaai3 jat1 cai3 jau1 sau3 man4 ming4 sing4 gwo2. [tsʊŋ˧ kuːn˥ tsʰyːn˨˩ kʊk̚˨, ŋɔː˩˧ tei˨ kei˧ jiu˧ kiːn˥ tɪŋ˨ tsʰyːn˨˩ sɪŋ˨˩ lɪŋ˩˧ naːm˨˩ mɐn˨˩ faː˧ tsiː˥ sɐt̚˨ tsiːn˧˥ tsɪŋ˥ sɐn˥, jɐu˨ jiu˧ jiː˩˧ hɔːi˥ fɔːŋ˧ paːu˥ jʊŋ˨˩ tsiː˥ hʊŋ˥ kʰɐm˥ tsɪk̚˥ kɪk̚˥ kʰɐp̚˨ sɐu˥ jiːn˨ tɔːi˨ sɐi˧ kaːi˧ jɐt̚˥ tsʰɐi˨˩ jɐu˥ sɐu˧ mɐn˨˩ mɪŋ˨˩ sɪŋ˨˩ kʷɔː˧˥] (JOONG-GOON CHUEN-GUK, NGOH-DAY GAY-YEW GEEN-DING CHUEN-SING LING-NAHM MUN-FAH JEE SUT-JEEN JING-SUN, YAU-YEW YEE HOI-FONG BAHU-YOONG JEE HOONG-KUM JIK-GIK KUP-SAU YEEN-DOY SY-GY YUT-CHY YAU-SAU MUN-MING SING-GWOR)",
          "translation": "Looking at the overall situation, we must both firmly inherit the practical spirit of Lingnan culture and actively absorb all outstanding achievements of modern world civilization with an open and inclusive mindset."
        }
      ],
      "mnemonics": [
        "【政論思辨訣】設疑立論「何以見」，批駁謬誤「倒果因」；辯證折中兼包蓄，縱觀全局格局新！"
      ],
      "culturalNotes": [
        "梁啟超在《新民叢報》上發表的政論文章被譽為『筆鋒常帶情感，讀者為之動容』。現代香港與大灣區高階政論社評、法庭辯論與學術演講，深刻繼承了這種文言雅健與邏輯力量相結合的語言傳統。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【立論設問】在學術政論文中，引導讀者探尋事件根本原因之標準設疑過渡句係：",
          "options": [
            "何以見得？究其根源…… (How is this evident? Probing its root cause...)",
            "你問我我問邊個) (Context: 近代嶺南政論文與現代粵語思想論辯之修辭架構：「立論」、「駁論」、「辨證)",
            "大家隨便估下啦) (Context: 近代嶺南政論文與現代粵語思想論辯之修辭架構：「立論」、「駁論」、「辨證)",
            "算罷啦唔好問) (Context: 近代嶺南政論文與現代粵語思想論辯之修辭架構：「立論」、「駁論」、「辨證)"
          ],
          "answerIndex": 0,
          "explanation": "「何以見得？究其根源……」為經典政論文剖析因果機制之高階設問句式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【駁論謬誤】指出對手論證顛倒因果關係之專業邏輯術語係：",
          "options": [
            "倒果為因 (Inverting cause and effect)",
            "阿茂整餅) (Context: 近代嶺南政論文與現代粵語思想論辯之修辭架構：「立論」、「駁論」、「辨證)",
            "斷章取義) (Context: 近代嶺南政論文與現代粵語思想論辯之修辭架構：「立論」、「駁論」、「辨證)",
            "食死貓) (Context: 近代嶺南政論文與現代粵語思想論辯之修辭架構：「立論」、「駁論」、「辨證)"
          ],
          "answerIndex": 0,
          "explanation": "「倒果為因」為駁論文中精確指出邏輯因果顛倒之標準術語。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【政論修辭架構】一篇高水平思想政論文的核心論述架構應包含：",
          "options": [
            "立論鮮明、論據充分，運用嚴謹邏輯反駁對立觀點，並在宏觀層面提出辯證建設性方案 (Clear proposition, rigorous refutation, and dialectical constructive synthesis)",
            "單純情緒化謾罵而無任何事實論據) (Context: 近代嶺南政論文與現代粵語思想論辯之修辭架構：「立論」、「駁論」、「辨證)",
            "全盤抄襲他人觀點並拼湊網絡段子) (Context: 近代嶺南政論文與現代粵語思想論辯之修辭架構：「立論」、「駁論」、「辨證)",
            "前後自相矛盾且邏輯混亂) (Context: 近代嶺南政論文與現代粵語思想論辯之修辭架構：「立論」、「駁論」、「辨證)"
          ],
          "answerIndex": 0,
          "explanation": "優秀政論文依託立論、駁論與辯證綜合三位一體之嚴謹修辭架構。"
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
    "title": "傳統藝術：粵劇行當、鑼鼓經與生旦淨丑舞台術語 (Cantonese Opera Conventions)",
    "level": "C1",
    "objective": "掌握粵劇（廣東大戲）核心舞台行當（文武生、花旦、丑生）、四功五法（唱做念打）及日常粵語中源自粵劇之高頻成語熟語（大陣仗、壓軸、開台）。",
    "presentation": {
      "explanation": "粵劇（Cantonese Opera，俗稱『廣東大戲』）係聯合國教科文組織人類非物質文化遺產，凝聚了嶺南戲劇、音樂與方言藝術之最高成就：\n\n一、粵劇核心表演技藝與行當劃分：\n１．「四功五法」（Sei Gung Ng Faat）：\n- 四功：唱（coeng3，唱腔聲樂）、做（zou6，身段表演）、念（nim6，白欖念白）、打（daa2，武打把子功）。\n- 五法：手、眼、身、法、步（手勢、眼神、身段、章法、步法）。\n\n２．主要角色行當（Roles）：\n- 「文武生」（man4 mou5 sang1）：能文能武之男主角。\n- 「正印花旦」（zing3 jan3 faa1 daan3*2）：劇團首席女主角。\n- 「丑生 / 幫緊」（cau2 sang1）：滑稽幽默之丑角配角。\n- 「武生 / 花面（淨）」（mou5 sang1 / faa1 min6*2）：威武勇猛之大花臉淨角。\n\n二、日常粵語中源自粵劇之熟語：\n- 「大陣仗」（daai6 zan6 zoeng6）：排場極大、聲勢浩大。\n- 「壓軸」（ngaat3 zuk6）：倒數第二個重要劇目（現泛指最後壓陣之精彩高潮）。\n- 「開台」（hoi1 toi4）：大戲正式開演（現亦引申指打麻雀開局）。",
      "examples": [
        {
          "target": "今晚新光戲院上演經典粵劇《帝女花》，由正印花旦同文武生擔綱主演，全場座無虛席！",
          "reading": "gam1 maan5 san1 gwong1 hei3 jyun6*2 soeng5 jin2 ging1 din2 jyut6 kek6 \"dai3 neoi5 faa1\", jau4 zing3 jan3 faa1 daan3*2 tung4 man4 mou5 sang1 daam1 gong1 zyu2 jin2, cyun4 coeng4 zo6 mou4 heoi1 zik6! [kɐm˥ maːn˩˧ sɐn˥ kʷɔːŋ˥ hei˧ jyːn˧˥ sœːŋ˩˧ jiːn˧˥ kɪŋ˥ tiːn˧˥ jyːt̚˨ kʰɪk̚˨ \"tɐi˧ nɵy˩˧ faː˥\", jɐu˨˩ tsɪŋ˧ jɐn˧ faː˥ taːn˧˥ tʰʊŋ˨˩ mɐn˨˩ mouou˩˧ sɐŋ˥ taːm˥ kɔːŋ˥ tsyː˧˥ jiːn˧˥, tsʰyːn˨˩ tsʰœːŋ˨˩ tsɔː˨ mouou˨˩ hɵy˥ tsɪk̚˨!] (GUM-MAHN SUN-GWONG HEY-YUEN SEUNG-YEEN GING-DEEN YUET-KEK \"DY-NEOY-FAH\", YAU JING-YUN FAH-DAHN TOONG MUN-MOU-SUNG DAHM-GONG JUE-YEEN, CHUEN-CHEUNG JOR-MOU-HOEY-JIK!)",
          "translation": "Tonight Sunbeam Theatre stages the classic Cantonese opera 'Princess Changping', starring the leading prima donna and the civil-military lead, with a completely packed house!"
        },
        {
          "target": "粵劇演員講求「台上一分鐘，台下十年功」，唱做念打每一樣都要經過嚴格刻苦之基本功訓練。",
          "reading": "jyut6 kek6 jin2 jyun4 gong2 kau4 \"toi4 soeng6 jat1 fan1 zung1, toi4 haa6 sap6 nin4 gung1\", coeng3 zou6 nim6 daa2 mui5 jat1 joeng6 dou1 jiu3 ging1 gwo3 jim4 gaak3 hak1 fu2 zi1 gei1 bun2 gung1 fan3 lin6. [jyːt̚˨ kʰɪk̚˨ jiːn˧˥ jyːn˨˩ kɔːŋ˧˥ kʰɐu˨˩ \"tʰɔːi˨˩ sœːŋ˨ jɐt̚˥ fɐn˥ tsʊŋ˥, tʰɔːi˨˩ haː˨ sɐp̚˨ niːn˨˩ kʊŋ˥\", tsʰœːŋ˧ tsou˨ niːm˨ taː˧˥ muːi˩˧ jɐt̚˥ jœːŋ˨ tou˥ jiu˧ kɪŋ˥ kʷɔː˧ jiːm˨˩ kaːk̚˧ hɐk̚˥ fuː˧˥ tsiː˥ kei˥ puːn˧˥ kʊŋ˥ fɐn˧ liːn˨] (YUET-KEK YEEN-YUEN GONG-KAU \"TOY-SEUNG YUT-FUN-JOONG, TOY-HAH SUP-NEEN-GONG\", CHEUNG-JOU-NEEM-DAH MOOY-YUT-YEUNG DOH YEW GING-GWOR YEEM-GAAK HUK-FOO JEE GAY-BOON-GONG FUN-LEEN)",
          "translation": "Cantonese opera actors uphold 'one minute on stage requires ten years of effort off stage'; singing, acting, recitative, and acrobatics each require rigorous and painstaking training in basic skills."
        },
        {
          "target": "呢次慈善晚會搞得好大陣仗，最後仲請嚟殿堂級歌星壓軸出場獻唱。",
          "reading": "ni1 ci3 ci4 sin6 maan5 wui6*2 gaau2 dak1 hou2 daai6 zan6 zoeng6, zeoi3 hau6 zung6 cing2 lai4 din6 tong4 kap1 go1 sing1 ngaat3 zuk6 ceot1 coeng4 hin3 coeng3. [niː˥ tsʰiː˧ tsʰiː˨˩ siːn˨ maːn˩˧ wuːi˨˩ kaːu˧˥ tɐk̚˥ hou˧˥ taːi˨ tsɐn˨ tsœːŋ˨, tsɵy˧ hɐu˨ tsʊŋ˨ tsʰɪŋ˧˥ lɐi˨˩ tiːn˨ tʰɔːŋ˨˩ kʰɐp̚˥ kɔː˥ sɪŋ˥ ŋaːt̚˧ tsʊk̚˨ tsʰɵt̚˥ tsʰœːŋ˨˩ hiːn˧ tsʰœːŋ˧] (NEE-CHEE CHEE-SEEN MAHN-WUI GAU-DUK HOH DY-JUN-JEUNG, JEOY-HAU JOONG CHING-LY DEEN-TONG-KUP GOH-SING NGAHT-JUK CHUT-CHEUNG HEEN-CHEUNG)",
          "translation": "This charity gala was organized on a grand scale, and in the end, a legendary singer was invited for the grand finale performance."
        }
      ],
      "mnemonics": [
        "【粵劇大戲歌】文武生唱花旦嬌，唱做念打把子挑；排場盛大「大陣仗」，壓軸名篇掌聲囂！"
      ],
      "culturalNotes": [
        "香港新光戲院（Sunbeam Theatre）被譽為『粵劇殿堂』。名伶如任劍輝、白雪仙創立的仙鳳鳴劇團，將唐滌生編寫之《帝女花》、《紫釵記》、《再世紅梅記》推向了世界戲劇文學之巔峰。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【粵劇行當】在廣東大戲中，負責飾演劇團第一首席女主角之核心行當稱謂係：",
          "options": [
            "正印花旦 (Principal Leading Actress / Prima Donna)",
            "文武生) (Context: 傳統藝術：粵劇行當、鑼鼓經與生旦淨丑舞台術語 (Cantonese O)",
            "丑生) (Context: 傳統藝術：粵劇行當、鑼鼓經與生旦淨丑舞台術語 (Cantonese O)",
            "大花面) (Context: 傳統藝術：粵劇行當、鑼鼓經與生旦淨丑舞台術語 (Cantonese O)"
          ],
          "answerIndex": 0,
          "explanation": "「正印花旦」為粵劇劇團中地位最高之首席女主角行當。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【戲曲熟語】形容演出排場宏大、準備工作極為隆重浩大之粵語熟語係：",
          "options": [
            "大陣仗 (Huge elaborate spectacle / Massive scale)",
            "細場仔) (Context: 傳統藝術：粵劇行當、鑼鼓經與生旦淨丑舞台術語 (Cantonese O)",
            "草草收場) (Context: 傳統藝術：粵劇行當、鑼鼓經與生旦淨丑舞台術語 (Cantonese O)",
            "靜英英) (Context: 傳統藝術：粵劇行當、鑼鼓經與生旦淨丑舞台術語 (Cantonese O)"
          ],
          "answerIndex": 0,
          "explanation": "「大陣仗」源自古代戲曲大排場武打陣勢，現泛指聲勢浩大之場面。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【戲劇名篇】被譽為粵劇黃金時代巔峰代表作、由劇作家唐滌生編撰之傳世名劇係：",
          "options": [
            "《帝女花》與《紫釵記》 (Princess Changping & The Purple Hairpin)",
            "《哈姆雷特》) (Context: 傳統藝術：粵劇行當、鑼鼓經與生旦淨丑舞台術語 (Cantonese O)",
            "《天鵝湖》) (Context: 傳統藝術：粵劇行當、鑼鼓經與生旦淨丑舞台術語 (Cantonese O)",
            "《等待戈多》) (Context: 傳統藝術：粵劇行當、鑼鼓經與生旦淨丑舞台術語 (Cantonese O)"
          ],
          "answerIndex": 0,
          "explanation": "《帝女花》與《紫釵記》為粵劇編劇泰斗唐滌生最負盛名之傳世經典。"
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
    "title": "嶺南畫派「折衷中西，融匯古今」與撞水撞粉技法 (Lingnan School of Painting)",
    "level": "C1",
    "objective": "掌握嶺南畫派代表人物「二高一陳」、藝術綱領（折衷中西，融匯古今）及標誌性水墨設色技法（撞水法、撞粉法、沒骨法）之專業藝術評述。",
    "presentation": {
      "explanation": "嶺南畫派（Lingnan School of Painting）係中國近代三大畫派之一，創立於二十世紀初之廣東：\n\n一、代表人物與藝術主張：\n１．「嶺南三傑（二高一陳）」：\n- 高劍父（Gao Jianfu）、高奇峰（Gao Qifeng）、陳樹人（Chen Shuren）。\n２．核心藝術綱領：\n- 「折衷中西，融匯古今」：既繼承傳統中國水墨畫之筆墨氣韻與留白意境，又大膽吸收西方繪畫之透視、光影明暗與寫生寫實技法，革新傳統文人畫之因循守舊。\n\n二、嶺南畫派獨創之標誌性繪畫技法：\n１．「撞水法」（zong6 seoi2 faat3）：\n- 在色墨未乾之際，以清水滴入畫面，利用水與色墨之自然排斥擴散，形成水汽氤氳、光影斑駁之特殊質感。\n２．「撞粉法」（zong6 fan2 faat3）：\n- 在植物花卉或鳥獸設色未乾時，以白粉（白蛤粉）點入花瓣或羽翼中心，使色彩飽滿立體、嬌艷欲滴。\n３．「沒骨法」（mut6 gwat1 faat3）：\n- 不用墨線勾勒輪廓，直接以色彩渲染出物象形體。",
      "examples": [
        {
          "target": "嶺南畫派大師高劍父提倡「折衷中西，融匯古今」，將現代飛機、汽車與革命題材大膽融入傳統水墨畫之中。",
          "reading": "ling5 naam4 waa2*6 paai3 daai6 si1 gou1 gim3 fu6 tai4 coeng3 \"zit3 cung1 zung1 sai1, jung4 wui6 gu2 gam1\", zoeng1 jin6 doi6 fei1 gei1, hei1 ce1 jyu5 gaak3 ming6 tai4 coi4 daai6 daam2 jung4 jap6 cyun4 tung4 seoi2 mak6 waa2*6 zi1 zung1. [lɪŋ˩˧ naːm˨˩ waː˧˥ pʰaːi˧ taːi˨ siː˥ kou˥ kiːm˧ fuː˨ tʰɐi˨˩ tsʰœːŋ˧ \"tsit̚˧ tsʰʊŋ˥ tsʊŋ˥ sɐi˥, jʊŋ˨˩ wuːi˨ kuː˧˥ kɐm˥\", tsœːŋ˥ jiːn˨ tɔːi˨ fei˥ kei˥, hei˧ tsʰɛː˥ jyː˩˧ kaːk̚˧ mɪŋ˨˩ tʰɐi˨˩ tsʰɔːi˨˩ taːi˨ taːm˧˥ jʊŋ˨˩ jɐp̚˨ tsʰyːn˨˩ tʰʊŋ˨˩ sɵy˧˥ mɐk̚˨ waː˧˥ tsiː˥ tsʊŋ˥] (LING-NAHM WAH-PY DY-SEE GOU GEEM-FOO TY-CHEUNG \"JEET-CHOONG JOONG-SY, YOONG-WUI GOO-GUM\", JEUNG YEEN-DOY FAY-GAY, HEY-CHEH YUE GAAK-MING TY-CHOY DY-DAHM YOONG-YUP CHUEN-TOONG SOEY-MUK-WAH JEE JOONG)",
          "translation": "Gao Jianfu, master of the Lingnan School of Painting, advocated 'compromising Chinese and Western, blending ancient and modern', boldly incorporating modern airplanes, automobiles, and revolutionary themes into traditional ink wash painting."
        },
        {
          "target": "居廉發明嘅「撞水撞粉」技法，令嶺南花鳥畫呈現出嬌艷濕潤、光影生動之自然美感。",
          "reading": "geoi1 lim4 faat3 ming4 ge3 \"zong6 seoi2 zong6 fan2\" gei6 faat3, ling6 ling5 naam4 faa1 niu5 waa2*6 cing4 jin6 ceot1 giu1 jim6 sap1 jeon6, gwong1 jing2 sang1 dung6 zi1 zi6 jin4 mei5 gam2. [kɵy˥ liːm˨˩ faːt̚˧ mɪŋ˨˩ kɛː˧ \"tsɔːŋ˨ sɵy˧˥ tsɔːŋ˨ fɐn˧˥\" kei˨ faːt̚˧, lɪŋ˨ lɪŋ˩˧ naːm˨˩ faː˥ niːu˩˧ waː˧˥ tsʰɪŋ˨˩ jiːn˨ tsʰɵt̚˥ kiːu˥ jiːm˨ sɐp̚˥ jɵn˨, kʷɔːŋ˥ jɪŋ˧˥ sɐŋ˥ tʊŋ˨ tsiː˥ tsiː˨ jiːn˨˩ mei˩˧ kɐm˧˥] (GOEY-LEEM FAHT-MING GEH \"JONG-SOEY JONG-FUN\" GAY-FAHT, LING LING-NAHM FAH-NIU-WAH CHING-YEEN-CHUT GEW-YEEM SUP-YUN, GWONG-YING SUNG-DOONG JEE JEE-YEEN MAY-GUM)",
          "translation": "The 'colliding water and colliding powder' techniques invented by Ju Lian enabled Lingnan bird-and-flower paintings to display a natural aesthetic of tender moistness and vivid light-and-shadow effects."
        },
        {
          "target": "陳樹人筆下嘅木棉花雄渾挺拔、紅艷如火，充分展現出嶺南風物熱烈奔放之生命力。",
          "reading": "can4 syu6 jan4 bat1 haa6 ge3 muk6 min4 faa1 hung4 wan4 ting5 bat6, hung4 jim6 jyu4 fo2, cung1 fan1 zin2 jin6 ceot1 ling5 naam4 fung1 mat6 jit6 lit6 ban1 fong3 zi1 sang1 ming6 lik6. [tsʰɐn˨˩ syː˨ jɐn˨˩ pɐt̚˥ haː˨ kɛː˧ mʊk̚˨ miːn˨˩ faː˥ hʊŋ˨˩ wɐn˨˩ tʰɪŋ˩˧ pɐt̚˨, hʊŋ˨˩ jiːm˨ jyː˨˩ fɔː˧˥, tsʰʊŋ˥ fɐn˥ tsiːn˧˥ jiːn˨ tsʰɵt̚˥ lɪŋ˩˧ naːm˨˩ fʊŋ˥ mɐt̚˨ jiːt̚˨ liːt̚˨ pɐn˥ fɔːŋ˧ tsiː˥ sɐŋ˥ mɪŋ˨ lɪk̚˨] (CHUN SYU-YUN BUT-HAH GEH MOK-MEEN-FAH HOONG-WUN TING-BUT, HOONG-YEEM YUE FOH, CHOONG-FUN JEEN-YEEN-CHUT LING-NAHM FONG-MUT YEET-LEET BUN-FONG JEE SUNG-MING-LIK)",
          "translation": "The kapok blossoms painted by Chen Shuren are vigorous and erect, red as fire, fully demonstrating the ardent and unrestrained vitality of Lingnan natural scenery."
        }
      ],
      "mnemonics": [
        "【嶺南畫派歌】二高一陳創畫壇，折衷中西古今連；撞水撞粉居派妙，嶺南風物墨香傳！"
      ],
      "culturalNotes": [
        "居巢、居廉（『二居』）創立之隔山畫派，在十香園中培育了高劍父、陳樹人等名家。十香園位於廣州海珠區，被譽為『嶺南畫派的搖籃』。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【畫派宗旨在於】二十世紀初嶺南畫派（高劍父、高奇峰、陳樹人）的核心藝術綱領係：",
          "options": [
            "折衷中西，融匯古今 (Compromise Chinese & Western, blend ancient & modern)",
            "全盤模仿古代文人畫) (Context: 嶺南畫派「折衷中西，融匯古今」與撞水撞粉技法 (Lingnan Sch)",
            "徹底放棄中國傳統筆墨) (Context: 嶺南畫派「折衷中西，融匯古今」與撞水撞粉技法 (Lingnan Sch)",
            "單純追求西洋抽象藝術) (Context: 嶺南畫派「折衷中西，融匯古今」與撞水撞粉技法 (Lingnan Sch)"
          ],
          "answerIndex": 0,
          "explanation": "「折衷中西，融匯古今」為嶺南畫派最核心之藝術革新旗幟。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【水墨技法】在花鳥設色未乾時注入清水或白蛤粉以形成生動光影與濕潤質感之嶺南畫派技法係：",
          "options": [
            "撞水法與撞粉法 (Colliding water & powder techniques)",
            "油畫厚塗法) (Context: 嶺南畫派「折衷中西，融匯古今」與撞水撞粉技法 (Lingnan Sch)",
            "版畫刻線法) (Context: 嶺南畫派「折衷中西，融匯古今」與撞水撞粉技法 (Lingnan Sch)",
            "水彩拓印法) (Context: 嶺南畫派「折衷中西，融匯古今」與撞水撞粉技法 (Lingnan Sch)"
          ],
          "answerIndex": 0,
          "explanation": "「撞水撞粉」為嶺南畫派先驅居廉所獨創之標誌性繪畫技法。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【畫派三傑】在中國近代美術史上被尊稱為「嶺南三傑（二高一陳）」的三位畫壇宗師係：",
          "options": [
            "高劍父、高奇峰、陳樹人 (Gao Jianfu, Gao Qifeng, Chen Shuren)",
            "齊白石、張大千、徐悲鴻) (Context: 嶺南畫派「折衷中西，融匯古今」與撞水撞粉技法 (Lingnan Sch)",
            "任伯年、吳昌碩、虛谷) (Context: 嶺南畫派「折衷中西，融匯古今」與撞水撞粉技法 (Lingnan Sch)",
            "黃賓虹、傅抱石、李可染) (Context: 嶺南畫派「折衷中西，融匯古今」與撞水撞粉技法 (Lingnan Sch)"
          ],
          "answerIndex": 0,
          "explanation": "「嶺南三傑（二高一陳）」指創立嶺南畫派之高劍父、高奇峰與陳樹人。"
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
    "title": "廣彩瓷器（織金彩瓷）與廣繡、牙雕之「三雕一彩一繡」嶺南工藝 (Guangzhou Crafts)",
    "level": "C1",
    "objective": "掌握嶺南非遺傳統工藝精粹「三雕一彩一繡（牙雕、玉雕、木雕、廣彩、廣繡）」之工藝特徵、歷史淵源及其在高端文化鑑賞中之詞彙體系。",
    "presentation": {
      "explanation": "廣州自清代一口通商以來，憑藉繁榮之十三行對外貿易，孕育出享譽全球之「三雕一彩一繡」傳統工藝絕技：\n\n一、「三雕一彩一繡」五大非遺工藝矩陣：\n１．「廣彩（廣州織金彩瓷）」（gwong2 coi2）：\n- 創於清康熙年間，在白瓷胎上以金彩及五彩織填紋樣，素有「堆金織玉、璀璨奪目」之美譽，專供外銷歐美宮廷貴族。\n\n２．「廣繡（廣東刺繡）」（gwong2 sau3）：\n- 中國四大名繡之一。特點：色彩富麗鮮艷、構圖飽滿緊密、針法多樣（如釘金繡、墊高繡），代表作《百鳥朝鳳》。\n\n３．「三雕」（牙雕、玉雕、木雕）：\n- 廣州牙雕：以「多層透雕象牙球」（鬼斧神工，可多達數十層轉動）聞名。\n- 廣東木雕（金漆木雕）：多層通雕，貼金箔裝飾於嶺南宗祠廟宇梁枋。\n- 廣州玉雕：巧色玉雕與玉球透雕。",
      "examples": [
        {
          "target": "廣彩瓷器以「織金彩瓷」聞名於世，色彩金碧輝煌、構圖繁茂，係清代十三行外銷藝術之巔峰代表。",
          "reading": "gwong2 coi2 ci4 hei3 ji5 \"zik1 gam1 coi2 ci4\" man4 ming4 jyu1 sai3, sik1 coi2 gam1 bik1 fai1 wong4, gau3 tou4 faan4 mau6, hai6 cing1 doi6 sap6 saam1 hong4 ngoi6 siu1 ngai6 seot6 zi1 din1 fung1 doi6 biu2. [kʷɔːŋ˧˥ tsʰɔːi˧˥ tsʰiː˨˩ hei˧ jiː˩˧ \"tsɪk̚˥ kɐm˥ tsʰɔːi˧˥ tsʰiː˨˩\" mɐn˨˩ mɪŋ˨˩ jyː˥ sɐi˧, sɪk̚˥ tsʰɔːi˧˥ kɐm˥ pɪk̚˥ fɐi˥ wɔːŋ˨˩, kɐu˧ tʰou˨˩ faːn˨˩ mɐu˨, hɐi˨ tsʰɪŋ˥ tɔːi˨ sɐp̚˨ saːm˥ hɔːŋ˨˩ ŋɔːi˨ siːu˥ ŋɐi˨ sɵt̚˨ tsiː˥ tiːn˥ fʊŋ˥ tɔːi˨ piːu˧˥] (GWONG-CHOY CHEE-HEY YEE \"JIK-GUM-CHOY-CHEE\" MUN-MING YUE SY, SIK-CHOY GUM-BIK-FY-WONG, GAU-TOU FAHN-MAU, HY CHING-DOY SUP-SAHM-HOHNG NGOY-SIU NGY-SUT JEE DEEN-FOONG DY-BEW)",
          "translation": "Guangcai porcelain is renowned worldwide for its 'gold-woven polychrome porcelain', with magnificent golden colors and exuberant compositions, serving as the pinnacle representative of the Qing Dynasty Thirteen Hongs export art."
        },
        {
          "target": "廣繡藝人運用釘金繡同絲線漸變技巧，將嶺南荔枝同孔雀羽毛繡得生動逼真、巧奪天工。",
          "reading": "gwong2 sau3 ngai6 jan4 wan6 jung6 deng1 gam1 sau3 tung4 si1 sin3 zim6 bin3 gei2 haau2, zoeng1 ling5 naam4 lai6 zi1 tung4 hung2 zoek3 jyu5 mou4 sau3 dak1 sang1 dung6 bik1 zan1, haau2 dyut6 tin1 gung1. [kʷɔːŋ˧˥ sɐu˧ ŋɐi˨ jɐn˨˩ wɐn˨ jʊŋ˨ tɪŋ˥ kɐm˥ sɐu˧ tʰʊŋ˨˩ siː˥ siːn˧ tsiːm˨ piːn˧ kei˧˥ haːu˧˥, tsœːŋ˥ lɪŋ˩˧ naːm˨˩ lɐi˨ tsiː˥ tʰʊŋ˨˩ hʊŋ˧˥ tsœːk̚˧ jyː˩˧ mouou˨˩ sɐu˧ tɐk̚˥ sɐŋ˥ tʊŋ˨ pɪk̚˥ tsɐn˥, haːu˧˥ tyːt̚˨ tʰiːn˥ kʊŋ˥] (GWONG-SAU NGY-YUN WUN-YOONG DENG-GUM-SAU TOONG SEE-SEEN JEEM-BEEN GAY-HAU, JEUNG LING-NAHM LY-JEE TOONG HOONG-JERK YUE-MOU SAU-DUK SUNG-DOONG BIK-JUN, HAU-DUET-TEEN-GONG)",
          "translation": "Guangxiu embroidery artisans deploy gold-couching and thread gradient techniques to embroider Lingnan lychees and peacock feathers with vivid realism and superb craftsmanship."
        },
        {
          "target": "「三雕一彩一繡」凝聚咗嶺南匠人世代傳承之精湛手藝，展現出嶺南工藝文化之極致魅力。",
          "reading": "\"saam1 diu1 jat1 coi2 jat1 sau3\" jing4 zeoi6 zo2 ling5 naam4 zoeng6 jan4 sai3 doi6 cyun4 sing4 zi1 zing1 zaam3 sau2 ngai6, zin2 jin6 ceot1 ling5 naam4 gung1 ngai6 man4 faa3 zi1 gik6 zi3 mei6 lik6. [\"saːm˥ tiːu˥ jɐt̚˥ tsʰɔːi˧˥ jɐt̚˥ sɐu˧\" jɪŋ˨˩ tsɵy˨ tsɔː˧˥ lɪŋ˩˧ naːm˨˩ tsœːŋ˨ jɐn˨˩ sɐi˧ tɔːi˨ tsʰyːn˨˩ sɪŋ˨˩ tsiː˥ tsɪŋ˥ tsaːm˧ sɐu˧˥ ŋɐi˨, tsiːn˧˥ jiːn˨ tsʰɵt̚˥ lɪŋ˩˧ naːm˨˩ kʊŋ˥ ŋɐi˨ mɐn˨˩ faː˧ tsiː˥ kɪk̚˨ tsiː˧ mei˨ lɪk̚˨] (\"SAHM-DEW YUT-CHOY YUT-SAU\" YING-JEOY-JOR LING-NAHM JEUNG-YUN SY-DOY CHUEN-SING JEE JING-JAHM SAU-NGY, JEEN-YEEN-CHUT LING-NAHM GONG-NGY MUN-FAH JEE GIK-JEE MAY-LIK)",
          "translation": "'Three Carvings, One Color, and One Embroidery' crystallizes the exquisite craftsmanship handed down by Lingnan artisans through generations, demonstrating the ultimate charm of Lingnan craft culture."
        }
      ],
      "mnemonics": [
        "【三雕一彩歌】牙玉木雕鬼斧工，廣彩織金萬國通；廣繡百鳥朝鳳舞，嶺南非遺耀長空！"
      ],
      "culturalNotes": [
        "廣彩因大量銷往歐洲，常被西方皇室定製印有家族徽章之『紋章瓷』。其融合了中國傳統釉上五彩與西洋銅版畫琺瑯技法，是近代中西文化商貿交流之重要見證。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【工藝總稱】代表廣州傳統手工藝最高成就、享譽海內外之「三雕一彩一繡」中之「一彩」指：",
          "options": [
            "廣彩（廣州織金彩瓷） (Guangzhou Polychrome Enamel Porcelain)",
            "彩色玻璃) (Context: 廣彩瓷器（織金彩瓷）與廣繡、牙雕之「三雕一彩一繡」嶺南工藝 (Guan)",
            "油畫色彩) (Context: 廣彩瓷器（織金彩瓷）與廣繡、牙雕之「三雕一彩一繡」嶺南工藝 (Guan)",
            "皮影彩繪) (Context: 廣彩瓷器（織金彩瓷）與廣繡、牙雕之「三雕一彩一繡」嶺南工藝 (Guan)"
          ],
          "answerIndex": 0,
          "explanation": "「一彩」指創立於廣州、以金碧輝煌著稱之「廣彩（廣州織金彩瓷）」。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【名繡特點】中國四大名繡之一的「廣繡」（廣東刺繡）最顯著之風格特色係：",
          "options": [
            "色彩富麗鮮艷、構圖緊密飽滿、善用釘金繡法 (Rich brilliant colors, dense composition & gold couching)",
            "純黑白素色單調) (Context: 廣彩瓷器（織金彩瓷）與廣繡、牙雕之「三雕一彩一繡」嶺南工藝 (Guan)",
            "完全不使用任何絲線) (Context: 廣彩瓷器（織金彩瓷）與廣繡、牙雕之「三雕一彩一繡」嶺南工藝 (Guan)",
            "無任何刺繡圖案) (Context: 廣彩瓷器（織金彩瓷）與廣繡、牙雕之「三雕一彩一繡」嶺南工藝 (Guan)"
          ],
          "answerIndex": 0,
          "explanation": "廣繡以色彩鮮濃熱烈、針法多變、構圖豐滿繁茂為標誌性藝術特徵。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【象牙透雕】廣州傳統牙雕工藝中，最能體現「鬼斧神工」高超技藝之代表性經典工藝品係：",
          "options": [
            "多層透雕象牙套球 (Multilayer Concentric Hollowed Ivory Ball)",
            "普通實心象牙筷子) (Context: 廣彩瓷器（織金彩瓷）與廣繡、牙雕之「三雕一彩一繡」嶺南工藝 (Guan)",
            "未經雕琢的象牙原料) (Context: 廣彩瓷器（織金彩瓷）與廣繡、牙雕之「三雕一彩一繡」嶺南工藝 (Guan)",
            "平面象牙印章) (Context: 廣彩瓷器（織金彩瓷）與廣繡、牙雕之「三雕一彩一繡」嶺南工藝 (Guan)"
          ],
          "answerIndex": 0,
          "explanation": "多層透雕象牙球內外各層均可靈活轉動，層層透雕精美花紋，為廣州牙雕技冠全球之絕活。"
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
    "title": "廣府醒獅、嶺南武術（洪拳、詠春）與非遺體育文化 (Southern Lion Dance & Martial Arts)",
    "level": "C1",
    "objective": "掌握廣府醒獅（採青、高樁醒獅）與嶺南傳統武術門派（洪拳、詠春拳、蔡李佛）之核心術語、武德精神及在粵港影視文化中之全球傳播。",
    "presentation": {
      "explanation": "廣府醒獅與嶺南武術係嶺南文化『尚武崇德、生生不息』之精神象徵：\n\n一、廣府醒獅（Southern Lion Dance）：\n１．由來與神韻：\n- 融武術、舞蹈、鑼鼓音樂於一體，象徵祥瑞威武。醒獅動作講求『喜、怒、哀、樂、動、靜、驚、疑』八態。\n２．核心儀軌術語：\n- 「採青」（coi2 cing1）：醒獅騰躍克服障礙採下生菜（象徵『生財』），為醒獅表演之高潮。\n- 「高樁醒獅」（gou1 zong1 sing2 si1）：在數米高之梅花樁上飛躍跳躍，驚險萬分。\n- 「點睛開光」（dim2 zing1 hoi1 gwong1）。\n\n二、嶺南三大核心武術門派：\n１．「洪拳」（hung4 kyun4）：\n- 代表人物黃飛鴻（Wong Fei-hung）。拳勢剛猛沉穩，步穩勢烈，代表套路《虎鶴雙形拳》、《工字伏虎拳》。\n２．「詠春拳」（wing6 ceon1 kyun4）：\n- 代表人物葉問（Ip Man）、李小龍（Bruce Lee）。注重短橋窄馬、中線理論、借力打力，核心器械「木人樁」（muk6 jan4 zong1）與「黐手」（ci1 sau2）對練。\n３．「蔡李佛拳」（coi3 lei5 fat1 kyun4）：\n- 氣勢磅礴，長拳短打兼備，大開大合。",
      "examples": [
        {
          "target": "農曆新年期間，街頭鑼鼓喧天，醒獅隊喺梅花樁上靈活跳躍，精彩嘅「採青」表演引嚟全場陣陣喝彩！",
          "reading": "nung4 lik6 san1 nin4 kei4 gaan1, gaai1 tau4 lo4 gu2 hyun1 tin1, sing2 si1 deoi6*2 hai2 mui4 faa1 zong1 soeng6 ling4 wut6 tiu3 joek6, zing1 coi2 ge3 \"coi2 cing1\" biu2 jin2 jan5 lai4 cyun4 coeng4 zan6 zan6 hot3 coi2! [nʊŋ˨˩ lɪk̚˨ sɐn˥ niːn˨˩ kʰei˨˩ kaːn˥, kaːi˥ tʰɐu˨˩ lɔː˨˩ kuː˧˥ hyːn˥ tʰiːn˥, sɪŋ˧˥ siː˥ tɵy˧˥ hɐi˩˧ muːi˨˩ faː˥ tsɔːŋ˥ sœːŋ˨ lɪŋ˨˩ wuːt̚˨ tʰiːu˧ jœːk̚˨, tsɪŋ˥ tsʰɔːi˧˥ kɛː˧ \"tsʰɔːi˧˥ tsʰɪŋ˥\" piːu˧˥ jiːn˧˥ jɐn˩˧ lɐi˨˩ tsʰyːn˨˩ tsʰœːŋ˨˩ tsɐn˨ tsɐn˨ hɔːt̚˧ tsʰɔːi˧˥!] (NOONG-LIK SUN-NEEN KEY-GAHN, GY-TAU LOH-GOO HUEN-TEEN, SING-SEE-DEOY HY MOOY-FAH-JONG SEUNG LING-WOOT TEW-YERK, JING-CHOY GEH \"CHOY-CHING\" BEW-YEEN YUN-LY CHUEN-CHEUNG JUN-JUN HOT-CHOY!)",
          "translation": "During the Lunar New Year, gongs and drums resound through the streets as the lion dance troupe leaps nimbly on the plum blossom stilts, with the splendid 'plucking the greens' performance drawing rounds of cheers from the audience!"
        },
        {
          "target": "詠春拳講求守中用中同埋借力打力，透過黐手同木人樁訓練，培養出極為靈敏之貼身防守反應。",
          "reading": "wing6 ceon1 kyun4 gong2 kau4 sau2 zung1 jung6 zung1 tung4 maai4 ze3 lik6 daa2 lik6, tau3 gwo3 ci1 sau2 tung4 muk6 jan4 zong1 fan3 lin6, pui4 joeng5 ceot1 gik6 wai4 ling4 man5 zi1 tip3 san1 fong4 sau2 faan2 jing3. [wɪŋ˨ tsʰɵn˥ kʰyːn˨˩ kɔːŋ˧˥ kʰɐu˨˩ sɐu˧˥ tsʊŋ˥ jʊŋ˨ tsʊŋ˥ tʰʊŋ˨˩ maːi˨˩ tsɛː˧ lɪk̚˨ taː˧˥ lɪk̚˨, tʰɐu˧ kʷɔː˧ tsʰiː˥ sɐu˧˥ tʰʊŋ˨˩ mʊk̚˨ jɐn˨˩ tsɔːŋ˥ fɐn˧ liːn˨, pʰuːi˨˩ jœːŋ˩˧ tsʰɵt̚˥ kɪk̚˨ wɐi˨˩ lɪŋ˨˩ mɐn˩˧ tsiː˥ tʰiːp̚˧ sɐn˥ fɔːŋ˨˩ sɐu˧˥ faːn˧˥ jɪŋ˧] (WING-CHUN-KUEN GONG-KAU SAU-JOONG YOONG-JOONG TOONG-MY JEH-LIK DAH-LIK, TAU-GWOR CHEE-SAU TOONG MOK-YUN-JONG FUN-LEEN, PUI-YEUNG-CHUT GIK-WAI LING-MUN JEE TEEP-SUN FONG-SAU FAHN-YING)",
          "translation": "Wing Chun focuses on guarding and utilizing the centerline and borrowing the opponent's force to strike back; through Chi Sao and wooden dummy training, it cultivates highly sensitive close-body defensive reflexes."
        },
        {
          "target": "黃飛鴻宗師以洪拳同醒獅名揚省港澳，其行俠仗義、弘揚武德之精神成為嶺南文化之驕傲。",
          "reading": "wong4 fei1 hung4 zung1 si1 ji5 hung4 kyun4 tung4 sing2 si1 ming4 joeng4 saang2 gong2 ou3, kei4 hang4 haap6 zoeng3 ji6, wang4 joeng4 mou5 dak1 zi1 zing1 san1 sing4 wai4 ling5 naam4 man4 faa3 zi1 giu1 ngou6. [wɔːŋ˨˩ fei˥ hʊŋ˨˩ tsʊŋ˥ siː˥ jiː˩˧ hʊŋ˨˩ kʰyːn˨˩ tʰʊŋ˨˩ sɪŋ˧˥ siː˥ mɪŋ˨˩ jœːŋ˨˩ saːŋ˧˥ kɔːŋ˧˥ ou˧, kʰei˨˩ hɐŋ˨˩ haːp̚˨ tsœːŋ˧ jiː˨, wɐŋ˨˩ jœːŋ˨˩ mouou˩˧ tɐk̚˥ tsiː˥ tsɪŋ˥ sɐn˥ sɪŋ˨˩ wɐi˨˩ lɪŋ˩˧ naːm˨˩ mɐn˨˩ faː˧ tsiː˥ kiːu˥ ŋou˨] (WONG FAY-HOONG JOONG-SEE YEE HOONG-KUEN TOONG SING-SEE MING-YEUNG SAHNG-GONG-OU, KEY HAHNG-HAHP JEUNG-YEE, WUNG-YEUNG MOU-DUK JEE JING-SUN SING-WAI LING-NAHM MUN-FAH JEE GEW-NGOU)",
          "translation": "Grandmaster Wong Fei-hung gained renown across Canton, Hong Kong, and Macau through Hong Boxing and Lion Dance; his spirit of chivalry and promoting martial virtue has become the pride of Lingnan culture."
        }
      ],
      "mnemonics": [
        "【醒獅武術訣】高樁醒獅採青生，鑼鼓喧天武德崇；詠春黐手木人樁，洪拳虎鶴耀粵風！"
      ],
      "culturalNotes": [
        "廣東醒獅與嶺南功夫密不可分，傳統上醒獅隊員皆為武館弟子。香港功夫電影（如李小龍、成龍、李連杰主演之黃飛鴻系列電影）將嶺南武術與醒獅藝術推廣至全球，成為世界認識中華文化的重要文化符號。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【醒獅儀軌】廣府醒獅表演中，獅子歷經艱險騰躍採摘生菜以寓意「生財」之核心高潮動作係：",
          "options": [
            "採青 (Plucking the greens / Coi cing)",
            "出洞) (Context: 廣府醒獅、嶺南武術（洪拳、詠春）與非遺體育文化 (Southern L)",
            "睡獅) (Context: 廣府醒獅、嶺南武術（洪拳、詠春）與非遺體育文化 (Southern L)",
            "洗鬚) (Context: 廣府醒獅、嶺南武術（洪拳、詠春）與非遺體育文化 (Southern L)"
          ],
          "answerIndex": 0,
          "explanation": "「採青」為醒獅表演中寓意生財大吉、技藝難度最高之核心環節。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【武術器械】詠春拳門派進行貼身攻防、走位與卸力發力訓練所使用之專屬木製器械係：",
          "options": [
            "木人樁 (Wooden dummy / Muk jan zong)",
            "石鎖) (Context: 廣府醒獅、嶺南武術（洪拳、詠春）與非遺體育文化 (Southern L)",
            "沙包) (Context: 廣府醒獅、嶺南武術（洪拳、詠春）與非遺體育文化 (Southern L)",
            "大刀) (Context: 廣府醒獅、嶺南武術（洪拳、詠春）與非遺體育文化 (Southern L)"
          ],
          "answerIndex": 0,
          "explanation": "「木人樁」為詠春拳精煉寸勁、黐手與近身走位之標誌性專屬訓練器具。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【武學名家】在嶺南武術史上集洪拳之大成、兼擅醒獅且被眾多香港影視作品廣泛歌頌之一代宗師係：",
          "options": [
            "黃飛鴻 (Wong Fei-hung)",
            "陳真) (Context: 廣府醒獅、嶺南武術（洪拳、詠春）與非遺體育文化 (Southern L)",
            "霍元甲) (Context: 廣府醒獅、嶺南武術（洪拳、詠春）與非遺體育文化 (Southern L)",
            "張三丰) (Context: 廣府醒獅、嶺南武術（洪拳、詠春）與非遺體育文化 (Southern L)"
          ],
          "answerIndex": 0,
          "explanation": "黃飛鴻為嶺南洪拳宗師與醒獅名家，其武德傳奇深深融入了省港澳文化歷史之中。"
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
    "title": "文化遺產保護、現代文創活化與藝術評論高階論述：「活化保育」、「傳承創新」 (Heritage Revitalization & Art Criticism)",
    "level": "C1",
    "objective": "掌握文化遺產保育、當代文化創意產業（文創）轉型、非遺活化及專業藝術評論之高階詞彙矩陣與宏觀思辨體系。",
    "presentation": {
      "explanation": "在全球化與現代化浪潮中，如何活化保育嶺南文化遺產成為當代學術界與公共政策探討之核心論題：\n\n一、文化遺產保育與活化核心術語體系：\n１．「非物質文化遺產（非遺）」（fei1 mat6 zat1 man4 faa3 wai4 caan2）：\n- 強調活態傳承（Living Heritage），保護口頭傳統、表演藝術與傳統手工藝。\n２．「活化保育」（wut6 faa3 bou2 juk6 / Revitalization）：\n- 反對將文化遺產死板封存，主張賦予其現代商業、社區與文創功能（如香港『大館』、中環街市活化項目）。\n３．「文創轉型與跨界融合」（man4 cong3 zyun2 jing4）：\n- 將傳統粵劇、廣彩、醒獅元素融入現代潮流潮牌、數字藝術（Digital Art）與沉浸式文旅體驗。\n\n二、高階藝術批評專業語彙：\n- 「形神兼備，氣韻生動」（jing4 san4 gim1 bei6, hei3 wan6 sang1 dung6）：讚歎藝術品既有精湛外在形體，又有深刻內在精神。\n- 「匠心獨運，融會貫通」（zoeng6 sam1 duk6 wan6, jung4 wui6 gung1 tung1）：構思精妙獨創。\n- 「承前啟後，推陳出新」（sing4 cin4 kai2 hau6, teoi1 can4 ceot1 san1）。",
      "examples": [
        {
          "target": "香港大館（舊中區警署）成功將百年歷史古蹟活化保育為當代藝術文化地標，實現咗歷史遺產與現代城市生活之完美共融。",
          "reading": "hoeng1 gong2 daai6 gun2 (gau6 zung1 keoi1 ging2 cyu5) sing4 gung1 zoeng1 baak3 nin4 lik6 si1 gu2 zik1 wut6 faa3 bou2 juk6 wai4 dong1 doi6 ngai6 seot6 man4 faa3 dei6 biu1, sat6 jin6 zo2 lik6 si1 wai4 caan2 jyu5 jin6 doi6 sing4 si5 sang1 wut6 zi1 jyun4 mei5 gung6 jung4. [hœːŋ˥ kʷɔːŋ˧˥ taːi˨ kuːn˧˥ (kɐu˨ tsʊŋ˥ kʰɵy˥ kɪŋ˧˥ tsʰyː˩˧) sɪŋ˨˩ kʊŋ˥ tsœːŋ˥ paːk̚˧ niːn˨˩ lɪk̚˨ siː˥ kuː˧˥ tsɪk̚˥ wuːt̚˨ faː˧ pou˧˥ jʊk̚˨ wɐi˨˩ tɔːŋ˥ tɔːi˨ ŋɐi˨ sɵt̚˨ mɐn˨˩ faː˧ tei˨ piːu˥, sɐt̚˨ jiːn˨ tsɔː˧˥ lɪk̚˨ siː˥ wɐi˨˩ tsʰaːn˨˩ jyː˩˧ jiːn˨ tɔːi˨ sɪŋ˨˩ siː˨ sɐŋ˥ wuːt̚˨ tsiː˥ jyːn˨˩ mei˩˧ kʊŋ˨ jʊŋ˨˩] (HEUNG-GONG DY-GOON (GAU JOONG-KOEY GING-CHUE) SING-GONG JEUNG BAAK-NEEN LIK-SEE GOO-JIK WOOT-FAH BOU-YUK WAI DONG-DOY NGY-SUT MUN-FAH DAY-BEW, SUT-YEEN-JOR LIK-SEE WAI-CHAAN YUE YEEN-DOY SING-SEE SUNG-WOOT JEE YUEN-MAY GONG-YOONG)",
          "translation": "Tai Kwun in Hong Kong (former Central Police Station) successfully revitalized a century-old historical heritage site into a contemporary arts and cultural landmark, achieving a perfect harmony between historical heritage and modern urban life."
        },
        {
          "target": "呢件廣彩創新作品匠心獨運，既保留傳統織金構圖，又大膽融入當代幾何線條，展現出推陳出新之藝術魅力。",
          "reading": "ni1 gin6 gwong2 coi2 cong3 san1 zok3 ban2 zoeng6 sam1 duk6 wan6, gei3 bou2 lau4 cyun4 tung4 zik1 gam1 gau3 tou4, jau6 daai6 daam2 jung4 jap6 dong1 doi6 gei2 ho4 sin3 tiu4, zin2 jin6 ceot1 teoi1 can4 ceot1 san1 zi1 ngai6 seot6 mei6 lik6. [niː˥ kiːn˨ kʷɔːŋ˧˥ tsʰɔːi˧˥ tsʰɔːŋ˧ sɐn˥ tsɔːk̚˧ pʰɐn˧˥ tsœːŋ˨ sɐm˥ tʊk̚˨ wɐn˨, kei˧ pou˧˥ lɐu˨˩ tsʰyːn˨˩ tʰʊŋ˨˩ tsɪk̚˥ kɐm˥ kɐu˧ tʰou˨˩, jɐu˨ taːi˨ taːm˧˥ jʊŋ˨˩ jɐp̚˨ tɔːŋ˥ tɔːi˨ kei˧˥ hɔː˨˩ siːn˧ tʰiːu˨˩, tsiːn˧˥ jiːn˨ tsʰɵt̚˥ tʰɵy˥ tsʰɐn˨˩ tsʰɵt̚˥ sɐn˥ tsiː˥ ŋɐi˨ sɵt̚˨ mei˨ lɪk̚˨] (NEE-GEEN GWONG-CHOY CHONG-SUN JOK-BUN JEUNG-SUM-DUK-WUN, GAY BOU-LAU CHUEN-TOONG JIK-GUM GAU-TOU, YAU DY-DAHM YOONG-YUP DONG-DOY GAY-HOH SEEN-TEW, JEEN-YEEN-CHUT TOEY-CHUN-CHUT-SUN JEE NGY-SUT MAY-LIK)",
          "translation": "This innovative Guangcai piece demonstrates extraordinary ingenuity; it not only preserves traditional gold-woven compositions, but also boldly integrates contemporary geometric lines, showcasing the artistic charm of weeding through the old to bring forth the new."
        },
        {
          "target": "非遺保護之核心在於「見人、見物、見生活」，唯有透過現代文創激發年輕一代之參與熱情，傳統文化先至能夠生生不息。",
          "reading": "fei1 mat6 zat1 man4 faa3 wai4 caan2 bou2 wu6 zi1 hat6 sam1 zoi6 jyu1 \"gin3 jan4, gin3 mat6, gin3 sang1 wut6\", wai4 jau5 tau3 gwo3 jin6 doi6 man4 cong3 gik1 faat3 nin4 hing1 jat1 doi6 zi1 caam1 jyu5 jit6 cing4, cyun4 tung4 man4 faa3 sin1 zi3 nang4 gau3 sang1 sang1 bat1 sik1. [fei˥ mɐt̚˨ tsɐt̚ mɐn˨˩ faː˧ wɐi˨˩ tsʰaːn˨˩ pou˧˥ wuː˨ tsiː˥ hɐt̚˨ sɐm˥ tsɔːi˨ jyː˥ \"kiːn˧ jɐn˨˩, kiːn˧ mɐt̚˨, kiːn˧ sɐŋ˥ wuːt̚˨\", wɐi˨˩ jɐu˩˧ tʰɐu˧ kʷɔː˧ jiːn˨ tɔːi˨ mɐn˨˩ tsʰɔːŋ˧ kɪk̚˥ faːt̚˧ niːn˨˩ hɪŋ˥ jɐt̚˥ tɔːi˨ tsiː˥ tsʰaːm˥ jyː˨ jiːt̚˨ tsʰɪŋ˨˩, tsʰyːn˨˩ tʰʊŋ˨˩ mɐn˨˩ faː˧ siːn˥ tsiː˧ nɐŋ˨˩ kɐu˧ sɐŋ˥ sɐŋ˥ pɐt̚˥ sɪk̚˥] (FAY-MUT-JUT MUN-FAH WAI-CHAAN BOU-WOO JEE HUT-SUM JOY-YUE \"GEEN-YUN, GEEN-MUT, GEEN-SUNG-WOOT\", WAI-YAU TAU-GWOR YEEN-DOY MUN-CHONG GIK-FAHT NEEN-HING YUT-DOY JEE CHAHM-YUE YEET-CHING, CHUEN-TOONG MUN-FAH SEEN-JEE NUNG-GAU SUNG-SUNG-BUT-SIK)",
          "translation": "The core of intangible heritage protection lies in 'seeing the people, seeing the artifacts, and seeing everyday life'; only by stimulating the younger generation's participation passion through modern cultural creativity can traditional culture thrive perpetually."
        }
      ],
      "mnemonics": [
        "【非遺活化訣】古蹟保育在「活化」，文創轉型煥生機；形神兼備傳薪火，推陳出新世界知！"
      ],
      "culturalNotes": [
        "香港的『活化歷史建築伙伴計劃』與大灣區非遺文創園區（如佛山嶺南天地）被聯合國教科文組織譽為亞太地區文化遺產保護與城市可持續發展的成功典範。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【遺產活化】將歷史古建築或傳統工藝賦予現代生活功能與文創新活力之保護理念稱為：",
          "options": [
            "活化保育 (Heritage Revitalization / Adaptive Reuse)",
            "全盤拆除重建) (Context: 文化遺產保護、現代文創活化與藝術評論高階論述：「活化保育」、「傳承創新)",
            "徹底封閉禁止參觀) (Context: 文化遺產保護、現代文創活化與藝術評論高階論述：「活化保育」、「傳承創新)",
            "任由風化廢棄) (Context: 文化遺產保護、現代文創活化與藝術評論高階論述：「活化保育」、「傳承創新)"
          ],
          "answerIndex": 0,
          "explanation": "「活化保育」強調在妥善保護歷史真實性的前提下，注入當代文化與社區活力。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【藝術評論】形容藝術作品構思極為精妙、具備高度原創性與精湛技藝之高階評論成語係：",
          "options": [
            "匠心獨運 (Ingenious and original conception)",
            "千篇一律) (Context: 文化遺產保護、現代文創活化與藝術評論高階論述：「活化保育」、「傳承創新)",
            "粗製濫造) (Context: 文化遺產保護、現代文創活化與藝術評論高階論述：「活化保育」、「傳承創新)",
            "生搬硬套) (Context: 文化遺產保護、現代文創活化與藝術評論高階論述：「活化保育」、「傳承創新)"
          ],
          "answerIndex": 0,
          "explanation": "「匠心獨運」為文藝評論中讚美創作者構思獨特奇妙之高階成語。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【非遺真諦】現代非物質文化遺產保護所秉持之「見人、見物、見生活」核心理念意指：",
          "options": [
            "非遺保護必須依托傳承人（人）、技藝載體（物）並深植於當代大眾日常生活（生活）之中 (Heritage protection must rely on master artisans, physical vessels & daily living)",
            "將所有傳統工藝品只鎖入博物館庫房) (Context: 文化遺產保護、現代文創活化與藝術評論高階論述：「活化保育」、「傳承創新)",
            "禁止任何商業文創改編) (Context: 文化遺產保護、現代文創活化與藝術評論高階論述：「活化保育」、「傳承創新)",
            "強迫所有人完全按古代生活方式生活) (Context: 文化遺產保護、現代文創活化與藝術評論高階論述：「活化保育」、「傳承創新)"
          ],
          "answerIndex": 0,
          "explanation": "「見人、見物、見生活」強調非物質文化遺產作為活態文化之動態傳承本質。"
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
    "title": "香港新派武俠文學：金庸、梁羽生之俠義世界與文白相間敘事體 (New School Wuxia Literature)",
    "level": "C1",
    "objective": "掌握香港新派武俠小說宗師（金庸、梁羽生）之俠義精神綱領（俠之大者，為國為民）、文白相間敘事修辭及其在當代全球華語流行文化中之深遠影響。",
    "presentation": {
      "explanation": "二十世紀五十年代起於香港報章連載之「新派武俠小說」，以金庸、梁羽生為代表，開創了華語通俗文學之巔峰：\n\n一、新派武俠核心精神與文學特質：\n１．俠義精神之至高境界：\n- 「俠之大者，為國為民」（haap6 zi1 daai6 ze2, wai4 gwok3 wai4 man4）：金庸《射鵰英雄傳》郭靖名言，將傳統武俠之個人恩怨昇華為家國情懷。\n\n２．文白相間之雅健文風：\n- 融合傳統文言文之簡練厚重與白話文之生動流暢，善用四字成語與古典詩詞意境。\n\n３．武學哲學名言與高頻典故：\n- 「無招勝有招，飛花摘葉皆可傷人」（mou4 ziu1 sing3 jau5 ziu1）：《笑傲江湖》獨孤九劍與《倚天屠龍記》太極哲學，寓意擺脫形式拘泥、直達化境。\n- 「人在江湖，身不由己」（jan4 zoi6 gong1 wu4, san1 bat1 jau4 gei2）：古龍名句，道盡社會關係與命運牽絆之無奈。",
      "examples": [
        {
          "target": "金庸武俠小說深刻詮釋咗「俠之大者，為國為民」之崇高理念，影響咗全球數以億計之華人讀者。",
          "reading": "gam1 jung4 mou5 haap6 siu2 syut3 sam1 hak1 cyun4 sik1 zo2 \"haap6 zi1 daai6 ze2, wai4 gwok3 wai4 man4\" zi1 sung4 gou1 lei5 nim3, jing2 hoeng2 zo2 cyun4 kau4 sou3 ji5 jik1 gai3 zi1 waa4 jan4 duk6 ze2. [kɐm˥ jʊŋ˨˩ mouou˩˧ haːp̚˨ siːu˧˥ syːt̚˧ sɐm˥ hɐk̚˥ tsʰyːn˨˩ sɪk̚˥ tsɔː˧˥ \"haːp̚˨ tsiː˥ taːi˨ tsɛː˧˥, wɐi˨˩ kʷɔːk̚˧ wɐi˨˩ mɐn˨˩\" tsiː˥ sʊŋ˨˩ kou˥ lei˩˧ niːm˧, jɪŋ˧˥ hœːŋ˧˥ tsɔː˧˥ tsʰyːn˨˩ kʰɐu˨˩ sou˧ jiː˩˧ jɪk̚˥ kɐi˧ tsiː˥ waː˨˩ jɐn˨˩ tʊk̚˨ tsɛː˧˥] (GUM-YOONG MOU-HAHP SIU-SYUT SUM-HUK CHUEN-SIK-JOR \"HAHP JEE DY-JEH, WAI-GWOK WAI-MUN\" JEE SOONG-GOU LEY-NEEM, YING-HEUNG-JOR CHUEN-KAU SOU-YEE-YIK-GY JEE WAH-YUN DUK-JEH)",
          "translation": "Jin Yong's martial arts novels profoundly interpreted the sublime philosophy of 'the greatest chivalry lies in serving the nation and its people', influencing hundreds of millions of Chinese readers worldwide."
        },
        {
          "target": "獨孤九劍所講求之「無招勝有招」，不僅係武學至高境界，亦蘊含咗順應自然、打破教條之人生智慧。",
          "reading": "duk6 gu1 gau2 gim3 so2 gong2 kau4 zi1 \"mou4 ziu1 sing3 jau5 ziu1\", bat1 gan2 hai6 mou5 hok6 zi3 gou1 ging2 gaai3, jik6 wan3 ham4 zo2 seon6 jing3 zi6 jin4, daa2 po3 gaau3 tiu4 zi1 jan4 sang1 zi3 wai3. [tʊk̚˨ kuː˥ kɐu˧˥ kiːm˧ sɔː˧˥ kɔːŋ˧˥ kʰɐu˨˩ tsiː˥ \"mouou˨˩ tsiːu˥ sɪŋ˧ jɐu˩˧ tsiːu˥\", pɐt̚˥ kɐn˧˥ hɐi˨ mouou˩˧ hɔːk̚˨ tsiː˧ kou˥ kɪŋ˧˥ kaːi˧, jɪk̚˨ wɐn˧ hɐm˨˩ tsɔː˧˥ sɵn˨ jɪŋ˧ tsiː˨ jiːn˨˩, taː˧˥ pʰɔː˧ kaːu˧ tʰiːu˨˩ tsiː˥ jɐn˨˩ sɐŋ˥ tsiː˧ wɐi˧] (DUK-GOO GAU-GEEM SOH GONG-KAU JEE \"MOU-JEW SING YAU-JEW\", BUT-GUN HY MOU-HOK JEE-GOU GING-GY, YIK WUN-HUM-JOR SEON-YING JEE-YEEN, DAH-POH GAU-TEW JEE YUN-SUNG JEE-WAI)",
          "translation": "The concept of 'no move surpasses having moves' in Nine Swords of Dugu is not only the supreme realm of martial arts, but also embodies the life wisdom of following nature and breaking dogma."
        },
        {
          "target": "梁羽生將古典詩詞與嶺南歷史掌故融入武俠小說，開創出文采斐然、典雅醇厚之新派流派。",
          "reading": "loeng4 jyu5 sang1 zoeng1 gu2 din2 si1 ci4 jyu5 ling5 naam4 lik6 si1 zoeng2 gu3 jung4 jap6 mou5 haap6 siu2 syut3, hoi1 cong3 ceot1 man4 coi2 fei2 jin4, din2 ngaa5 seon4 hau5 zi1 san1 paai3 lau4 paai3. [lœːŋ˨˩ jyː˩˧ sɐŋ˥ tsœːŋ˥ kuː˧˥ tiːn˧˥ siː˥ tsʰiː˨˩ jyː˩˧ lɪŋ˩˧ naːm˨˩ lɪk̚˨ siː˥ tsœːŋ˧˥ kuː˧ jʊŋ˨˩ jɐp̚˨ mouou˩˧ haːp̚˨ siːu˧˥ syːt̚˧, hɔːi˥ tsʰɔːŋ˧ tsʰɵt̚˥ mɐn˨˩ tsʰɔːi˧˥ fei˧˥ jiːn˨˩, tiːn˧˥ ŋaː˩˧ sɵn˨˩ hɐu˧˥ tsiː˥ sɐn˥ pʰaːi˧ lɐu˨˩ pʰaːi˧] (LEUNG YUE-SUNG JEUNG GOO-DEEN SEE-CHEE YUE LING-NAHM LIK-SEE JEUNG-GOO YOONG-YUP MOU-HAHP SIU-SYUT, HOI-CHONG-CHUT MUN-CHOY FAY-YEEN, DEEN-NGAH SEON-HAU JEE SUN-PY LAU-PY)",
          "translation": "Liang Yusheng integrated classical poetry and Lingnan historical anecdotes into martial arts fiction, pioneering a new genre characterized by brilliant literary elegance and profound refinement."
        }
      ],
      "mnemonics": [
        "【金庸武俠訣】俠之大者為國民，文白相間筆生神；無招勝招臻化境，倚天笑傲動乾坤！"
      ],
      "culturalNotes": [
        "查良鏞（金庸）在香港創辦《明報》，其在副刊連載的十五部武俠小說被譽為『有華人的地方，就有金庸的武俠小說』。香港文化博物館特設『金庸館』以表彰其對世界文學與文化的卓越貢獻。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【武俠精神】金庸小說《射鵰英雄傳》中郭靖所道出、代表中華俠義文化至高境界之名言係：",
          "options": [
            "俠之大者，為國為民 (The greatest chivalry lies in serving the nation & people)",
            "事不關己，己不勞心) (Context: 香港新派武俠文學：金庸、梁羽生之俠義世界與文白相間敘事體 (New S)",
            "人不為己，天誅地滅) (Context: 香港新派武俠文學：金庸、梁羽生之俠義世界與文白相間敘事體 (New S)",
            "得過且過，逍遙快活) (Context: 香港新派武俠文學：金庸、梁羽生之俠義世界與文白相間敘事體 (New S)"
          ],
          "answerIndex": 0,
          "explanation": "「俠之大者，為國為民」為金庸武俠哲學中將個人武藝昇華至家國擔當之核心綱領。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【武學哲理】形容超越一切固定招式套路、順應對手形勢直達武學與思維化境之經典成語係：",
          "options": [
            "無招勝有招 (No moves surpass fixed moves / Supreme formlessness)",
            "生搬硬套) (Context: 香港新派武俠文學：金庸、梁羽生之俠義世界與文白相間敘事體 (New S)",
            "墨守成規) (Context: 香港新派武俠文學：金庸、梁羽生之俠義世界與文白相間敘事體 (New S)",
            "按部就班) (Context: 香港新派武俠文學：金庸、梁羽生之俠義世界與文白相間敘事體 (New S)"
          ],
          "answerIndex": 0,
          "explanation": "「無招勝有招」為獨孤九劍與太極拳哲學中破除形式拘泥之至高境地。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【文學宗師】在香港創辦《明報》並著有《天龍八部》、《笑傲江湖》、《鹿鼎記》等經典武俠巨作之大師係：",
          "options": [
            "金庸（查良鏞） (Louis Cha / Jin Yong)",
            "魯迅) (Context: 香港新派武俠文學：金庸、梁羽生之俠義世界與文白相間敘事體 (New S)",
            "張愛玲) (Context: 香港新派武俠文學：金庸、梁羽生之俠義世界與文白相間敘事體 (New S)",
            "老舍) (Context: 香港新派武俠文學：金庸、梁羽生之俠義世界與文白相間敘事體 (New S)"
          ],
          "answerIndex": 0,
          "explanation": "金庸（查良鏞）為二十世紀華語文學界最負盛名之武俠小說泰斗。"
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
    "title": "香港現代都市文學：劉以鬯《對倒》、西西《我城》與意識流本土書寫 (Modern HK Literature)",
    "level": "C1",
    "objective": "掌握香港現代主義與本土純文學代表作家（劉以鬯、西西）之標誌性文本、意識流寫作手法、對倒結構及香港本土城市認同書寫。",
    "presentation": {
      "explanation": "香港現代都市文學以其獨特之現代主義實驗與對本土生存經驗之細膩凝視著稱：\n\n一、劉以鬯與中國現代主義小說高峰：\n１．《酒徒》（1963年）：\n- 中國第一部意識流長篇小說，深刻揭示了現代商業社會中純文學藝術家之精神苦悶與內心掙扎。\n２．《對倒》（1972年 / 雙連郵票結構）：\n- 透過一老一少（淳于白與亞杏）在香港街頭互不相識卻交錯並行的平行蒙太奇敘事，啟發了王家衛導演拍出電影名作《花樣年華》。\n\n二、西西與香港本土城市自覺：\n１．《我城》（1974年）：\n- 以阿果等青年之童稚純真視角（Defamiliarization），重新凝視七十年代香港之街道、樓宇、天橋與草根生活，首次確立了以「我城」為核心之香港本土文化身分認同。\n２．語言特色：\n- 頑童體、語法拆解、融匯粵語口語節奏與童話般詩意文字。",
      "examples": [
        {
          "target": "劉以鬯先生嘅《對倒》以雙線平行結構描繪香港都市百態，成為世界現代主義文學之瑰寶。",
          "reading": "lau4 ji5 coeng3 sin1 saang1 ge3 \"deoi3 dou2\" ji5 soeng1 sin3 ping4 hang4 git3 gau3 miu4 kui2 hoeng1 gong2 dou1 si5 baak3 taai3, sing4 wai4 sai3 gaai3 jin6 doi6 zyu2 ji6 man4 hok6 zi1 gwai1 bou2. [lɐu˨˩ jiː˩˧ tsʰœːŋ˧ siːn˥ saːŋ˥ kɛː˧ \"tɵy˧ tou˧˥\" jiː˩˧ sœːŋ˥ siːn˧ pʰɪŋ˨˩ hɐŋ˨˩ kiːt̚˧ kɐu˧ miːu˨˩ kʰɵy˧˥ hœːŋ˥ kʷɔːŋ˧˥ tou˥ siː˨ paːk̚˧ tʰaːi˧, sɪŋ˨˩ wɐi˨˩ sɐi˧ kaːi˧ jiːn˨ tɔːi˨ tsyː˧˥ jiː˨ mɐn˨˩ hɔːk̚˨ tsiː˥ kʷɐi˥ pou˧˥] (LAU YEE-CHEUNG SEEN-SAHNG GEH \"DEOY-DOU\" YEE SEUNG-SEEN PING-HAHNG GEET-GAU MEW-KOEY HEUNG-GONG DOU-SEE BAAK-TY, SING-WAI SY-GY YEEN-DOY JUE-YEE MUN-HOK JEE GWAI-BOU)",
          "translation": "Mr. Liu Yichang's 'Tête-bêche' depicted myriad aspects of urban Hong Kong through a dual-line parallel structure, becoming a gem of world modernist literature."
        },
        {
          "target": "西西在《我城》入面用清新純真之語言描繪草根市民生活，深刻建立起屬於香港人自己之本土文化認同。",
          "reading": "sai1 sai1 zoi6 \"ngo5 sing4\" jap6 min6 jung6 cing1 san1 seon4 zan1 zi1 jyu5 jin4 miu4 kui2 cou2 gan1 si5 man4 sang1 wut6, sam1 hak1 gin3 laap6 hei2 suk6 jyu1 hoeng1 gong2 jan4 zi6 gei2 zi1 bun2 tou2 man4 faa3 jing6 tung4. [sɐi˥ sɐi˥ tsɔːi˨ \"ŋɔː˩˧ sɪŋ˨˩\" jɐp̚˨ miːn˨ jʊŋ˨ tsʰɪŋ˥ sɐn˥ sɵn˨˩ tsɐn˥ tsiː˥ jyː˩˧ jiːn˨˩ miːu˨˩ kʰɵy˧˥ tsʰou˧˥ kɐn˥ siː˩˧ mɐn˨˩ sɐŋ˥ wuːt̚˨, sɐm˥ hɐk̚˥ kiːn˧ laːp̚˨ hei˧˥ sʊk̚˨ jyː˩˧ hœːŋ˥ kʷɔːŋ˧˥ jɐn˨˩ tsiː˨ kei˧˥ tsiː˥ puːn˧˥ tʰou˩˧ mɐn˨˩ faː˧ jɪŋ˨ tʰʊŋ˨˩] (SY-SY JOY \"NGOH-SING\" YUP-MEEN YOONG CHING-SUN SEON-JUN JEE YUE-YEEN MEW-KOEY TSOU-GUN SEE-MUN SUNG-WOOT, SUM-HUK GEEN-LAHP-HAY SOK-YUE HEUNG-GONG-YUN JEE-GAY JEE BOON-TOU MUN-FAH YING-TOONG)",
          "translation": "Xi Xi in 'My City' used fresh, innocent language to portray grassroots citizens' lives, profoundly establishing a local cultural identity belonging to Hong Kong people themselves."
        },
        {
          "target": "《酒徒》作為華文世界第一部意識流長篇巨著，以奔湧之內心獨白展現出文人在消費主義時代之精神探索。",
          "reading": "\"zau2 tou4\" zok3 wai4 waa4 man4 sai3 gaai3 dai6 jat1 bou6 ji3 sik1 lau4 coeng4 pin3*2 geoi6 zok3, ji5 ban1 jung2 zi1 noi6 sam1 duk6 baak6 zin2 jin6 ceot1 man4 jan4 zoi6 siu1 fai3 zyu2 ji6 si4 doi6 zi1 zing1 san1 taam3 sok3. [\"tsɐu˧˥ tʰou˨˩\" tsɔːk̚˧ wɐi˨˩ waː˨˩ mɐn˨˩ sɐi˧ kaːi˧ tɐi˨ jɐt̚˥ pou˨ jiː˧ sɪk̚˥ lɐu˨˩ tsʰœːŋ˨˩ pʰiːn˧˥ kɵy˨ tsɔːk̚˧, jiː˩˧ pɐn˥ jʊŋ˩˧ tsiː˥ nɔːi˨ sɐm˥ tʊk̚˨ paːk̚˨ tsiːn˧˥ jiːn˨ tsʰɵt̚˥ mɐn˨˩ jɐn˨˩ tsɔːi˨ siːu˥ fɐi˧ tsyː˧˥ jiː˨ siː˨˩ tɔːi˨ tsiː˥ tsɪŋ˥ sɐn˥ tʰaːm˧ sɔːk̚˧] (\"JAU-TOU\" JOK-WAI WAH-MUN SY-GY DY-YUT-BOU YEE-SIK-LAU CHEUNG-PEEN GOEY-JOK, YEE BUN-YOONG JEE NOY-SUM DUK-BAAK JEEN-YEEN-CHUT MUN-YUN JOY SIU-FY JUE-YEE SEE-DOY JEE JING-SUN TAHM-SOK)",
          "translation": "As the first full-length stream-of-consciousness novel in the Chinese literary world, 'The Drunkard' demonstrated the spiritual quest of intellectuals in an era of consumerism through surging interior monologues."
        }
      ],
      "mnemonics": [
        "【港島文學訣】酒徒對倒劉以鬯，意識流動構思奇；我城草根西西筆，童稚純真認同知！"
      ],
      "culturalNotes": [
        "劉以鬯曾任香港《香港時報》、《星島晚報》副刊編輯數十年，培育了無數青年作家。西西作品《我城》、《像我這樣的一個女子》被選入香港中學及大學文學必讀經典。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【現代主義】被公認為華語文學史上第一部意識流長篇小說之香港經典名作係：",
          "options": [
            "劉以鬯《酒徒》 (The Drunkard by Liu Yichang)",
            "《紅樓夢》) (Context: 香港現代都市文學：劉以鬯《對倒》、西西《我城》與意識流本土書寫 (Mo)",
            "《三國演義》) (Context: 香港現代都市文學：劉以鬯《對倒》、西西《我城》與意識流本土書寫 (Mo)",
            "《水滸傳》) (Context: 香港現代都市文學：劉以鬯《對倒》、西西《我城》與意識流本土書寫 (Mo)"
          ],
          "answerIndex": 0,
          "explanation": "劉以鬯於1963年出版之《酒徒》為中國第一部意識流長篇小說。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【我城自覺】以童稚純真視角描寫七十年代香港草根市民日常生活、開創「我城」本土敘事之作家係：",
          "options": [
            "西西 (Xi Xi)",
            "冰心) (Context: 香港現代都市文學：劉以鬯《對倒》、西西《我城》與意識流本土書寫 (Mo)",
            "茅盾) (Context: 香港現代都市文學：劉以鬯《對倒》、西西《我城》與意識流本土書寫 (Mo)",
            "朱自清) (Context: 香港現代都市文學：劉以鬯《對倒》、西西《我城》與意識流本土書寫 (Mo)"
          ],
          "answerIndex": 0,
          "explanation": "著名香港女作家西西於1974年發表小說《我城》，奠定了香港本土文學之重要基石。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【電影靈感】王家衛執導之經典電影《花樣年華》，其文學構思主要靈感來源於劉以鬯先生之邊部小說：",
          "options": [
            "《對倒》 (Tête-bêche)",
            "《狂人日記》) (Context: 香港現代都市文學：劉以鬯《對倒》、西西《我城》與意識流本土書寫 (Mo)",
            "《雷雨》) (Context: 香港現代都市文學：劉以鬯《對倒》、西西《我城》與意識流本土書寫 (Mo)",
            "《駱駝祥子》) (Context: 香港現代都市文學：劉以鬯《對倒》、西西《我城》與意識流本土書寫 (Mo)"
          ],
          "answerIndex": 0,
          "explanation": "《花樣年華》片尾特別鳴謝劉以鬯，其雙線交叉之時空氛圍深受小說《對倒》之啟發。"
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
    "title": "香港電影黃金時代（港產片）：周星馳無厘頭文化、王家衛文藝美學與警匪類型片 (HK Cinema)",
    "level": "C1",
    "objective": "掌握香港電影（港產片）黃金時代核心流派（周星馳無厘頭喜劇、王家衛文藝電影、警匪臥底片）之經典台詞、文化解構手法及電影語言修辭。",
    "presentation": {
      "explanation": "香港電影（Hong Kong Cinema / 港產片）在二十世紀八九十年代被譽為「東方好萊塢」（Hollywood of the East），締造了獨樹一幟之影視美學：\n\n一、三大代表性電影美學與語言流派：\n１．周星馳「無厘頭文化」（Mo Lei Tau / Postmodern Parody）：\n- 特徵：顛覆傳統權威、邏輯跳躍、戲謔自嘲、字面解構。\n- 經典名句：「做人如果冇夢想，同條鹹魚有咩分別？」（《少林足球》）、「曾經有一份真摯嘅感情擺喺我面前……」（《大話西遊》）。\n\n２．王家衛「詩性文藝美學」（Poetic Cinema）：\n- 特徵：抽幀慢鏡、斑駁光影、獨白旁白、都市寂寞疏離與時間流逝感。\n- 經典隱喻：《阿飛正傳》「無翼鳥」與「一分鐘朋友」、《重慶森林》「鳳梨罐頭保質期」。\n\n３．香港警匪臥底類型片（Crime & Undercover Films）：\n- 經典代表《無間道》（Infernal Affairs）：身分認同迷失與道德困境。「對唔住，我係警察」（deoi3 m4 zyu6, ngo5 hai6 ging2 caat3）。",
      "examples": [
        {
          "target": "周星馳嘅喜劇以無厘頭解構傳統權威，經典台詞「做人如果冇夢想，同條鹹魚有咩分別」鼓舞咗無數草根小人物。",
          "reading": "zau1 sing1 ci4 ge3 hei2 kek6 ji5 mou4 lei4 tau4 gaai2 kau3 cyun4 tung4 kyun4 wai1, ging1 din2 toi4 ci4 \"zou6 jan4 jyu4 gwo2 mou5 mung6 soeng2, tung4 tiu4 haam4 jyu4*2 jau5 me1 fan1 bit6\" gu2 mou5 zo2 mou4 sou3 cou2 gan1 siu2 jan4 mat6. [tsɐu˥ sɪŋ˥ tsʰiː˨˩ kɛː˧ hei˧˥ kʰɪk̚˨ jiː˩˧ mouou˨˩ lei˨˩ tʰɐu˨˩ kaːi˧˥ kʰɐu˧ tsʰyːn˨˩ tʰʊŋ˨˩ kʰyːn˨˩ wɐi˥, kɪŋ˥ tiːn˧˥ tʰɔːi˨˩ tsʰiː˨˩ \"tsou˨ jɐn˨˩ jyː˨˩ kʷɔː˧˥ mouou˩˧ mʊŋ˨ sœːŋ˧˥, tʰʊŋ˨˩ tʰiːu˨˩ haːm˨˩ jyː˧˥ jɐu˩˧ mɛː˥ fɐn˥ piːt̚˨\" kuː˧˥ mouou˩˧ tsɔː˧˥ mouou˨˩ sou˧ tsʰou˧˥ kɐn˥ siːu˧˥ jɐn˨˩ mɐt̚˨] (JAU SING-CHEE GEH HAY-KEK YEE MOU-LAY-TAU GAI-KAU CHUEN-TOONG KUEN-WAI, GING-DEEN TOY-CHEE \"JOU-YUN YUE-GWOR MOU-MOONG-SEUNG, TOONG TEW HAHM-YUE YAU MEH FUN-BEET\" GOO-MOU-JOR MOU-SOU TSOU-GUN SIU-YUN-MUT)",
          "translation": "Stephen Chow's comedies deconstructed traditional authority through nonsensical humor; his classic line 'If a person has no dreams, what difference is there between them and a salted fish?' inspired countless grassroots underdogs."
        },
        {
          "target": "王家衛電影運用獨特之光影色調與抽離旁白，將現代都市男女之孤獨迷惘與時間記憶表現得淋漓盡致。",
          "reading": "wong4 gaa1 wai6 din6 jing2 wan6 jung6 duk6 dak6 zi1 gwong1 jing2 sik1 diu6 jyu5 cau1 lei4 pong4 baak6, zoeng1 jin6 doi6 dou1 si5 naam4 neoi5 zi1 gu1 duk6 mai4 mong5 jyu5 si4 gaan3 gei3 jik1 biu2 jin6 dak1 lam4 lei4 zin3 zi3. [wɔːŋ˨˩ kaː˥ wɐi˨ tiːn˨ jɪŋ˧˥ wɐn˨ jʊŋ˨ tʊk̚˨ tɐk̚˨ tsiː˥ kʷɔːŋ˥ jɪŋ˧˥ sɪk̚˥ tiːu˨ jyː˩˧ tsʰɐu˥ lei˨˩ pʰɔːŋ˨˩ paːk̚˨, tsœːŋ˥ jiːn˨ tɔːi˨ tou˥ siː˨ naːm˨˩ nɵy˩˧ tsiː˥ kuː˥ tʊk̚˨ mɐi˨˩ mɔːŋ˩˧ jyː˩˧ siː˨˩ kaːn˧ kei˧ jɪk̚˥ piːu˧˥ jiːn˨ tɐk̚˥ lɐm˨˩ lei˨˩ tsiːn˧ tsiː˧] (WONG GAH-WAI DEEN-YING WUN-YOONG DUK-DUK JEE GWONG-YING SIK-DEW YUE CHAU-LAY POHNG-BAAK, JEUNG YEEN-DOY DOU-SEE NAHM-NEOY JEE GOO-DUK MY-MONG YUE SEE-GAHN GAY-YIK BEW-YEEN-DUK LUM-LAY-JEEN-JEE)",
          "translation": "Wong Kar-wai's cinema uses unique lighting tones and detached voiceovers to portray the loneliness, perplexity, time, and memory of modern urban men and women to perfection."
        },
        {
          "target": "電影《無間道》以黑白兩道臥底之心理較量為主線，探討人性善惡與身分迷失，成為香港警匪片之巔峰神作。",
          "reading": "din6 jing2 \"mou4 gaan3 dou6\" ji5 hak1 baak6 loeng5 dou6 ngaak6 dai2 zi1 sam1 lei5 gaau3 loeng6 wai4 zyu2 sin3, taam3 tou2 jan4 sing3 sin6 ok3 jyu5 san1 fan6*2 mai4 sat1, sing4 wai4 hoeng1 gong2 ging2 fei2 pin3*2 zi1 din1 fung1 san4 zok3. [tiːn˨ jɪŋ˧˥ \"mouou˨˩ kaːn˧ tou˨\" jiː˩˧ hɐk̚˥ paːk̚˨ lœːŋ˩˧ tou˨ ŋaːk̚˨ tɐi˧˥ tsiː˥ sɐm˥ lei˩˧ kaːu˧ lœːŋ˨ wɐi˨˩ tsyː˧˥ siːn˧, tʰaːm˧ tʰou˧˥ jɐn˨˩ sɪŋ˧ siːn˨ ɔːk̚˧ jyː˩˧ sɐn˥ fɐn˨ mai˨˩ sɐt̚˥, sɪŋ˨˩ wɐi˨˩ hœːŋ˥ kʷɔːŋ˧˥ kɪŋ˧˥ fei˧˥ pʰiːn˧˥ tsiː˥ tiːn˥ fʊŋ˥ sɐn˨˩ tsɔːk̚˧] (DEEN-YING \"MOU-GAHN-DOU\" YEE HUK-BAAK LEUNG-DOU NGAHK-DY JEE SUM-LEY GAU-LEUNG WAI JUE-SEEN, TAHM-TOU YUN-SING SEEN-OK YUE SUN-FUN MY-SUT, SING-WAI HEUNG-GONG GING-FAY-PEEN JEE DEEN-FOONG SUN-JOK)",
          "translation": "The movie 'Infernal Affairs' centered on the psychological contest between undercover agents on both sides of the law, exploring human nature's good and evil and identity loss, becoming the crowning masterpiece of Hong Kong crime cinema."
        }
      ],
      "mnemonics": [
        "【港產電影訣】星爺無厘解構顛，鹹魚夢想勵萬千；王導墨鏡留光影，無間風雲名海外！"
      ],
      "culturalNotes": [
        "香港電影金像獎（Hong Kong Film Awards）是亞洲最具影響力的電影獎項之一。香港警匪片、武打功夫片與無厘頭喜劇共同構成了全球幾代影迷對香港文化的鮮活集體記憶。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【經典金句】在周星馳電影《少林足球》中，激勵小人物勇於追求夢想之傳世金句係：",
          "options": [
            "做人如果冇夢想，同條鹹魚有咩分別？ (If a person has no dreams, what difference is there with a salted fish?)",
            "我都係聽日先諗啦) (Context: 香港電影黃金時代（港產片）：周星馳無厘頭文化、王家衛文藝美學與警匪類型)",
            "大家千祈唔好努力) (Context: 香港電影黃金時代（港產片）：周星馳無厘頭文化、王家衛文藝美學與警匪類型)",
            "算數啦返去訓覺) (Context: 香港電影黃金時代（港產片）：周星馳無厘頭文化、王家衛文藝美學與警匪類型)"
          ],
          "answerIndex": 0,
          "explanation": "「做人如果冇夢想，同條鹹魚有咩分別」為周星馳電影最膾炙人口之勵志名言。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【電影名篇】以梁朝偉、劉德華飾演之雙重臥底身分困境為核心、被荷里活翻拍並獲奧斯卡最佳影片之香港神作係：",
          "options": [
            "《無間道》 (Infernal Affairs)",
            "《哈利波特》) (Context: 香港電影黃金時代（港產片）：周星馳無厘頭文化、王家衛文藝美學與警匪類型)",
            "《鐵達尼號》) (Context: 香港電影黃金時代（港產片）：周星馳無厘頭文化、王家衛文藝美學與警匪類型)",
            "《侏羅紀公園》) (Context: 香港電影黃金時代（港產片）：周星馳無厘頭文化、王家衛文藝美學與警匪類型)"
          ],
          "answerIndex": 0,
          "explanation": "《無間道》為香港警匪臥底題材之經典巔峰，獲全球廣泛讚譽。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【文藝大師】執導《阿飛正傳》、《重慶森林》、《花樣年華》，榮獲康城影展最佳導演獎之香港文藝片泰斗係：",
          "options": [
            "王家衛 (Wong Kar-wai)",
            "希治閣) (Context: 香港電影黃金時代（港產片）：周星馳無厘頭文化、王家衛文藝美學與警匪類型)",
            "史匹堡) (Context: 香港電影黃金時代（港產片）：周星馳無厘頭文化、王家衛文藝美學與警匪類型)",
            "諾蘭) (Context: 香港電影黃金時代（港產片）：周星馳無厘頭文化、王家衛文藝美學與警匪類型)"
          ],
          "answerIndex": 0,
          "explanation": "王家衛為享譽國際影壇之香港殿堂級電影大師。"
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
    "title": "粵語流行曲（Cantopop）經典填詞藝術：黃霑、林夕、黃偉文之詩化修辭 (Cantopop Lyricism)",
    "level": "C1",
    "objective": "掌握粵語流行音樂（Cantopop）「依聲填詞（協音）」之聲調聲樂規律、三大填詞宗師（黃霑、林夕、黃偉文）之詞風修辭及其文化內涵。",
    "presentation": {
      "explanation": "粵語流行曲（Cantopop）以粵語九聲六調為依托，創造了全球獨一無二之「依聲填詞」詩化藝術：\n\n一、粵語流行曲核心語言學特徵：\n１．「依聲填詞 / 協音」（hip3 jam1）：\n- 粵語字詞聲調必須與旋律音高走勢完全吻合（俗稱『啱音』），否則會產生「倒字」（即聽成其他同音或異調字）之聽覺偏差。\n\n二、Cantopop三大作詞泰斗風格解析：\n１．黃霑（James Wong）——「豪邁灑脫、家國情懷」：\n- 代表作：《滄海一聲笑》（「滄海一聲笑，滔滔兩岸潮」）、《獅子山下》（「攜手踏平崎嶇，我哋大家用艱辛努力寫下那，不朽香江名句」）、《上海灘》。\n\n２．林夕（Lin Xi）——「佛理禪意、都市情傷、細膩隱喻」：\n- 代表作：《約定》、《富士山下》（「誰能憑愛意要富士山私有」）、《紅豆》。詞風深邃幽微，融合佛學哲思。\n\n３．黃偉文（Wyman Wong）——「犀利前衛、社會批判、解構世俗」：\n- 代表作：《浮誇》、《喜帖街》（借利東街拆遷探討城市記憶與告別）、《年度之歌》。",
      "examples": [
        {
          "target": "黃霑先生填詞之《獅子山下》唱出香港人同舟共濟、奮鬥不懈之精神，成為激勵幾代人之香港非官方城歌。",
          "reading": "wong4 zim1 sin1 saang1 tin4 ci4 zi1 \"si1 zi2 saan1 haa6\" coeng3 ceot1 hoeng1 gong2 jan4 tung4 zau1 gung6 zai3, fan5 dau3 bat1 haai6 zi1 zing1 san1, sing4 wai4 gik1 lai6 gei2 doi6 jan4 zi1 hoeng1 gong2 fei1 gung1 fong1 sing4 go1. [wɔːŋ˨˩ tsiːm˥ siːn˥ saːŋ˥ tʰiːn˨˩ tsʰiː˨˩ tsiː˥ \"siː˥ tsiː˧˥ saːn˥ haː˨\" tsʰœːŋ˧ tsʰɵt̚˥ hœːŋ˥ kʷɔːŋ˧˥ jɐn˨˩ tʰʊŋ˨˩ tsɐu˥ kʊŋ˨ tsɐi˧, fɐn˩˧ tɐu˧ pɐt̚˥ haːi˨ tsiː˥ tsɪŋ˥ sɐn˥, sɪŋ˨˩ wɐi˨˩ kɪk̚˥ lɐi˨ kei˧˥ tɔːi˨ jɐn˨˩ tsiː˥ hœːŋ˥ kʷɔːŋ˧˥ fei˥ kʊŋ˥ fɔːŋ˥ sɪŋ˨˩ kɔː˥] (WONG-JEEM SEEN-SAHNG TEEN-CHEE JEE \"SEE-JEE-SAHN-HAH\" CHEUNG-CHUT HEUNG-GONG-YUN TOONG-JAU GONG-JAI, FUN-DAU-BUT-HAI JEE JING-SUN, SING-WAI GIK-LY GAY-DOY-YUN JEE HEUNG-GONG FAY-GONG-FONG SING-GOH)",
          "translation": "Mr. James Wong's lyrics for 'Below the Lion Rock' sang of Hong Kong people's spirit of being in the same boat and persevering in struggle, becoming an unofficial anthem of Hong Kong that inspired generations."
        },
        {
          "target": "林夕將深奧之佛理同現代愛情哲學融入歌詞，意境深遠、句句錐心，被譽為當代詞壇宗師。",
          "reading": "lam4 zik6 zoeng1 sam1 ou3 zi1 fat1 lei5 tung4 jin6 doi6 oi3 cing4 zit3 hok6 jung4 jap6 go1 ci4, ji3 ging2 sam1 jyun5, geui3 geui3 zeoi1 sam1, bei6 jyu6 wai4 dong1 doi6 ci4 taan4 zung1 si1. [lɐm˨˩ tsɪk̚˨ tsœːŋ˥ sɐm˥ ou˧ tsiː˥ fɐt̚ mɐt̚˨ lei˩˧ tʰʊŋ˨˩ jiːn˨ tɔːi˨ ɔːi˧ tsʰɪŋ˨˩ tsit̚˧ hɔːk̚˨ jʊŋ˨˩ jɐp̚˨ kɔː˥ tsʰiː˨˩, jiː˧ kɪŋ˧˥ sɐm˥ jyːn˩˧, kɵy˧ kɵy˧ tsɵy˥ sɐm˥, pei˨ jyː˨ wɐi˨˩ tɔːŋ˥ tɔːi˨ tsʰiː˨˩ tʰaːn˨˩ tsʊŋ˥ siː˥] (LUM-JIK JEUNG SUM-OU JEE FUT-LEY TOONG YEEN-DOY OY-CHING JEET-HOK YOONG-YUP GOH-CHEE, YEE-GING SUM-YUEN, GOEY-GOEY JEOY-SUM, BAY-YUE WAI DONG-DOY CHEE-TAHN JOONG-SEE)",
          "translation": "Lin Xi integrated profound Buddhist philosophy and modern love metaphysics into lyrics with profound artistic conception, piercing through every line, earning renown as the grandmaster of contemporary lyricism."
        },
        {
          "target": "黃偉文創作嘅《喜帖街》借一條印刷喜帖老街之消逝，唱出對城市歷史變遷同人生告別之深刻反思。",
          "reading": "wong4 wai5 man4 cong3 zok3 ge3 \"hei2 tip3 gaai1\" ze3 jat1 tiu4 jan3 caat3 hei2 tip3 lou5 gaai1 zi1 siu1 sai6, coeng3 ceot1 deoi3 sing4 si5 lik6 si1 bin3 cin1 tung4 jan4 sang1 gou3 bit6 zi1 sam1 hak1 faan2 si1. [wɔːŋ˨˩ wɐi˩˧ mɐn˨˩ tsʰɔːŋ˧ tsɔːk̚˧ kɛː˧ \"hei˧˥ tʰiːp̚˧ kaːi˥\" tsɛː˧ jɐt̚˥ tʰiːu˨˩ jɐn˧ tsʰaːt̚˧ hei˧˥ tʰiːp̚˧ lou˩˧ kaːi˥ tsiː˥ siːu˥ sɐi˧, tsʰœːŋ˧ tsʰɵt̚˥ tɵy˧ sɪŋ˨˩ siː˨ lɪk̚˨ siː˥ piːn˧ tsʰiːn˥ tʰʊŋ˨˩ jɐn˨˩ sɐŋ˥ kou˧ piːt̚˨ tsiː˥ sɐm˥ hɐk̚˥ faːn˧˥ siː˥] (WONG WAI-MUN CHONG-JOK GEH \"HEY-TEEP-GY\" JEH YUT-TEW YUN-CHAAT HEY-TEEP LOU-GY JEE SIU-SY, CHEUNG-CHUT DEOY SING-SEE LIK-SEE BEEN-CHEEN TOONG YUN-SUNG GOU-BEET JEE SUM-HUK FAHN-SEE)",
          "translation": "Wyman Wong's 'Wedding Card Street' used the disappearance of an old street printing wedding cards to sing of profound reflections on urban historical metamorphosis and life's farewells."
        }
      ],
      "mnemonics": [
        "【粵曲填詞訣】九聲協音啱音節，霑叔豪邁獅山鐵；林夕佛理悟富士，黃偉文筆寫喜帖！"
      ],
      "culturalNotes": [
        "顧嘉煇與黃霑（『煇黃組合』）在七八十年代合作創作了數百首經典粵語影視金曲，奠定了香港Cantopop黃金時代的基石。粵語流行歌曲隨香港影視風靡全亞洲，成為海外華人寄託故土情懷的重要文化紐帶。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【填詞術語】粵語流行曲創作中，歌詞字音聲調必須嚴格契合曲譜旋律音高走勢之語言學要求稱為：",
          "options": [
            "依聲填詞 / 協音（啱音） (Matching lyrics tone to melody pitch / Hip jam)",
            "隨便亂填) (Context: 粵語流行曲（Cantopop）經典填詞藝術：黃霑、林夕、黃偉文之詩化修)",
            "完全不看曲譜) (Context: 粵語流行曲（Cantopop）經典填詞藝術：黃霑、林夕、黃偉文之詩化修)",
            "單純拼湊英文單詞) (Context: 粵語流行曲（Cantopop）經典填詞藝術：黃霑、林夕、黃偉文之詩化修)"
          ],
          "answerIndex": 0,
          "explanation": "「協音（依聲填詞）」為粵語流行歌曲確保不出現「倒字」現象之核心創作法則。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【經典名曲】由黃霑填詞、羅文演唱，深刻凝聚香港草根同舟共濟與逆境拼搏精神之代表歌曲係：",
          "options": [
            "《獅子山下》 (Below the Lion Rock)",
            "《兩隻老虎》) (Context: 粵語流行曲（Cantopop）經典填詞藝術：黃霑、林夕、黃偉文之詩化修)",
            "《小星星》) (Context: 粵語流行曲（Cantopop）經典填詞藝術：黃霑、林夕、黃偉文之詩化修)",
            "《生日快樂》) (Context: 粵語流行曲（Cantopop）經典填詞藝術：黃霑、林夕、黃偉文之詩化修)"
          ],
          "answerIndex": 0,
          "explanation": "《獅子山下》為黃霑填詞之不朽名作，被視為香港奮鬥精神之精神像徵。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【詞壇宗師】創作逾三千首歌詞、將佛學禪理與現代都市情感完美融合、寫下《約定》《富士山下》之詞壇泰斗係：",
          "options": [
            "林夕 (Lin Xi)",
            "徐志摩) (Context: 粵語流行曲（Cantopop）經典填詞藝術：黃霑、林夕、黃偉文之詩化修)",
            "戴望舒) (Context: 粵語流行曲（Cantopop）經典填詞藝術：黃霑、林夕、黃偉文之詩化修)",
            "海子) (Context: 粵語流行曲（Cantopop）經典填詞藝術：黃霑、林夕、黃偉文之詩化修)"
          ],
          "answerIndex": 0,
          "explanation": "林夕為當代華語樂壇最具影響力與文學深度之填詞大家。"
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
    "title": "香港本土文化身分認同、獅子山精神與當代流行文化研究：「雅俗共賞」、「香港製造」 (HK Cultural Identity)",
    "level": "C1",
    "objective": "掌握香港本土文化認同建構、獅子山精神之文化社會學意涵、大眾文化研究（Cultural Studies）理論術語及「雅俗共賞」之傳播學反思。",
    "presentation": {
      "explanation": "香港流行文化作為二十世紀全球華語世界最強大之文化軟實力輸出源，其形成與演變具備深刻之社會文化學脈絡：\n\n一、香港文化核心精神與符號矩陣：\n１．「獅子山精神」（si1 zi2 saan1 zing1 san1）：\n- 起源於七十年代香港經濟起飛與草根公屋建設，象徵「同舟共濟、自強不息、靈活變通、逆境自強」之集體人格特質。\n２．「香港製造」（hoeng1 gong2 zai3 zou6 / Made in Hong Kong）：\n- 不僅係工業產品質量之保證，更昇華為一種結合東西文化、追求專業卓越與精緻效率之文化品牌。\n\n二、當代文化研究與評論高階術語：\n- 「雅俗共賞」（ngaa5 zuk6 gung6 soeng2）：既有高雅文學藝術之深度，又能為普通大眾所喜聞樂見。\n- 「文化雜糅 / 混血性」（man4 faa3 zaap6 jau4 / Cultural Hybridity）：嶺南傳統底蘊、英國制度文化與全球消費主義之深度嫁接。\n- 「集體記憶與文化認同」（zaap6 tai2 gei3 jik1 jyu5 man4 faa3 jing6 tung4）。",
      "examples": [
        {
          "target": "「獅子山精神」凝聚咗香港人同舟共濟、逆境自強之奮鬥意志，係香港繁榮發展之精神基石。",
          "reading": "\"si1 zi2 saan1 zing1 san1\" jing4 zeoi6 zo2 hoeng1 gong2 jan4 tung4 zau1 gung6 zai3, jik6 ging3 zi6 koeng4 zi1 fan5 dau3 ji3 zi3, hai6 hoeng1 gong2 faan4 wing4 faat3 zin2 zi1 zing1 san1 gei1 sek6. [\"siː˥ tsiː˧˥ saːn˥ tsɪŋ˥ sɐn˥\" jɪŋ˨˩ tsɵy˨ tsɔː˧˥ hœːŋ˥ kʷɔːŋ˧˥ jɐn˨˩ tʰʊŋ˨˩ tsɐu˥ kʊŋ˨ tsɐi˧, jɪk̚˨ kɪŋ˧ tsiː˨ kʰœːŋ˨˩ tsiː˥ fɐn˩˧ tɐu˧ jiː˧ tsiː˧, hɐi˨ hœːŋ˥ kʷɔːŋ˧˥ faːn˨˩ wɪŋ˨˩ faːt̚˧ tsiːn˧˥ tsiː˥ tsɪŋ˥ sɐn˥ kei˥ sɪk̚˨] (\"SEE-JEE-SAHN JING-SUN\" YING-JEOY-JOR HEUNG-GONG-YUN TOONG-JAU GONG-JAI, YIK-GING JEE-KEUNG JEE FUN-DAU YEE-JEE, HY HEUNG-GONG FAHN-WING FAHT-JEEN JEE JING-SUN GAY-SEK)",
          "translation": "The 'Lion Rock Spirit' condenses the fighting will of Hong Kong people to pull together in the same boat and strive through adversity, serving as the spiritual bedrock of Hong Kong's prosperity."
        },
        {
          "target": "香港流行文化之所以能夠風靡全球，關鍵在於其具備「雅俗共賞」之高度包容性與極致專業水準。",
          "reading": "hoeng1 gong2 lau4 hang4 man4 faa3 zi1 so2 ji5 nang4 gau3 fung1 mai4 cyun4 kau4, gwaan1 gin3 zoi6 jyu1 kei4 geoi6 bei6 \"ngaa5 zuk6 gung6 soeng2\" zi1 gou1 dou6 baau1 jung4 sing3 jyu5 gik6 zi3 zyun1 jip6 seoi2 zeon2. [hœːŋ˥ kʷɔːŋ˧˥ lɐu˨˩ hɐŋ˨˩ mɐn˨˩ faː˧ tsiː˥ sɔː˧˥ jiː˩˧ nɐŋ˨˩ kɐu˧ fʊŋ˥ mɐi˨˩ tsʰyːn˨˩ kʰɐu˨˩, kʷaːn˥ kiːn˧ tsɔːi˨ jyː˥ kʰei˨˩ kɵy˨ pei˨ \"ŋaː˩˧ tsʊk̚˨ kʊŋ˨ sœːŋ˧˥\" tsiː˥ kou˥ tou˨ paːu˥ jʊŋ˨˩ sɪŋ˧ jyː˩˧ kɪk̚˨ tsiː˧ tsʰyːn˥ jiːp̚˨ sɵy˧˥ tsɵn˧˥] (HEUNG-GONG LAU-HAHNG MUN-FAH JEE SOH-YEE NUNG-GAU FOONG-MY CHUEN-KAU, GWAHN-GEEN JOY-YUE KEY GOEY-BAY \"NGAH-JUK GONG-SEUNG\" JEE GOU-DOU BAHU-YOONG-SING YUE GIK-JEE JUEN-YEEP SOEY-JEON)",
          "translation": "The reason Hong Kong pop culture gained worldwide popularity lies in its high inclusiveness of 'appealing to both refined and popular tastes' and its consummate professional standards."
        },
        {
          "target": "文化研究學者指出，香港文化之獨特魅力在於其文化雜糅性，在傳統嶺南根基上綻放出世界級之現代文明果實。",
          "reading": "man4 faa3 jin4 gau3 hok6 ze2 zi2 ceot1, hoeng1 gong2 man4 faa3 zi1 duk6 dak6 mei6 lik6 zoi6 jyu1 kei4 man4 faa3 zaap6 jau4 sing3, zoi6 cyun4 tung4 ling5 naam4 gan1 gei1 soeng6 zaan6 fong3 ceot1 sai3 gaai3 kap1 zi1 jin6 doi6 man4 ming4 gwo2 sat6. [mɐn˨˩ faː˧ jiːn˨˩ kɐu˧ hɔːk̚˨ tsɛː˧˥ tsiː˧˥ tsʰɵt̚˥, hœːŋ˥ kʷɔːŋ˧˥ mɐn˨˩ faː˧ tsiː˥ tʊk̚˨ tɐk̚˨ mei˨ lɪk̚˨ tsɔːi˨ jyː˥ kʰei˨˩ mɐn˨˩ faː˧ tsaːp̚˨ jɐu˨˩ sɪŋ˧, tsɔːi˨ tsʰyːn˨˩ tʰʊŋ˨˩ lɪŋ˩˧ naːm˨˩ kɐn˥ kei˥ sœːŋ˨ tsaːn˨ fɔːŋ˧ tsʰɵt̚˥ sɐi˧ kaːi˧ kʰɐp̚˥ tsiː˥ jiːn˨ tɔːi˨ mɐn˨˩ mɪŋ˨˩ kʷɔː˧˥ sɐt̚˨] (MUN-FAH YEEN-GAU HOK-JEH JEE-CHUT, HEUNG-GONG MUN-FAH JEE DUK-DUK MAY-LIK JOY-YUE KEY MUN-FAH JAHP-YAU-SING, JOY CHUEN-TOONG LING-NAHM GUN-GAY SEUNG JAAN-FONG-CHUT SY-GY-KUP JEE YEEN-DOY MUN-MING GWOR-SUT)",
          "translation": "Cultural studies scholars point out that the unique charm of Hong Kong culture lies in its cultural hybridity, blossoming into world-class fruits of modern civilization upon its traditional Lingnan foundation."
        }
      ],
      "mnemonics": [
        "【獅子山精神】獅子山下同舟濟，自強不息創奇蹟；雅俗共賞香江韻，香港製造四海知！"
      ],
      "culturalNotes": [
        "香港中文大學與香港大學等學府開創了享譽國際的『香港文化研究』學術領域。研究涵蓋李小龍全球武術傳播、九龍城寨空間政治、重慶大廈跨國草根全球化等經典課題。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【核心精神】象徵香港草根大眾同舟共濟、勤勞勇敢、在逆境中互助拼搏之核心精神象徵係：",
          "options": [
            "獅子山精神 (Lion Rock Spirit)",
            "逃避主義) (Context: 香港本土文化身分認同、獅子山精神與當代流行文化研究：「雅俗共賞」、「香)",
            "拜金主義) (Context: 香港本土文化身分認同、獅子山精神與當代流行文化研究：「雅俗共賞」、「香)",
            "得過且過) (Context: 香港本土文化身分認同、獅子山精神與當代流行文化研究：「雅俗共賞」、「香)"
          ],
          "answerIndex": 0,
          "explanation": "「獅子山精神」為香港社會最核心、最受推崇之集體拼搏與互助精神象徵。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【文化特質】形容香港流行文化既具備高雅深刻之藝術品味，又能被廣大普通市民大眾所喜愛欣賞之成語係：",
          "options": [
            "雅俗共賞 (Appealing to both refined and popular tastes)",
            "孤芳自賞) (Context: 香港本土文化身分認同、獅子山精神與當代流行文化研究：「雅俗共賞」、「香)",
            "曲高和寡) (Context: 香港本土文化身分認同、獅子山精神與當代流行文化研究：「雅俗共賞」、「香)",
            "庸俗不堪) (Context: 香港本土文化身分認同、獅子山精神與當代流行文化研究：「雅俗共賞」、「香)"
          ],
          "answerIndex": 0,
          "explanation": "「雅俗共賞」精確概括了香港武俠文學、電影與粵語金曲跨越階層之傳播魅力。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【文化研究】當代文化研究中，用以描述香港文化兼具嶺南底蘊、西方制度與全球流行元素之理論概念係：",
          "options": [
            "文化雜糅性 / 混血性 (Cultural Hybridity)",
            "單一封閉性) (Context: 香港本土文化身分認同、獅子山精神與當代流行文化研究：「雅俗共賞」、「香)",
            "完全同質化) (Context: 香港本土文化身分認同、獅子山精神與當代流行文化研究：「雅俗共賞」、「香)",
            "原始未開化) (Context: 香港本土文化身分認同、獅子山精神與當代流行文化研究：「雅俗共賞」、「香)"
          ],
          "answerIndex": 0,
          "explanation": "「文化雜糅性（Cultural Hybridity）」為香港文化研究中最核心之理論闡釋架構。"
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
    "title": "人工智能、機器學習與大數據分析：「算法演進」、「深度學習」、「訓練模型」 (AI & Big Data Analytics)",
    "level": "C1",
    "objective": "掌握人工智能（AI）、大語言模型（LLM）、機器學習、深度神經網絡及大數據分析之專業前沿粵語科技詞彙與高階科技論述。",
    "presentation": {
      "explanation": "人工智能與大數據技術之飛速發展，催生了高度專業化之現代科技粵語話語體系：\n\n一、人工智能與大數據核心術語矩陣：\n１．核心架構與模型（Core Architecture）：\n- 「大語言模型」（daai6 jyu5 jin4 mou4 jing4 / LLM）：以巨量參數進行自然語言處理之深度學習模型。\n- 「機器學習與深度學習」（gei1 hei3 hok6 zaap6 jyu5 sam1 dou6 hok6 zaap6）：透過多層神經網絡自主提取特徵。\n- 「算法演進與迭代」（syun3 faat3 jin2 zeon3 jyu5 dip6 doi6）：不斷優化計算路徑以提升預測準確率。\n\n２．工程落地與數據治理（Engineering & Data）：\n- 「數據清洗與標註」（sou3 geoi3 cing1 sai2 jyu5 biu1 zyu3）：剔除噪聲數據，確保訓練質量。\n- 「微調與參數對齊」（mei4 tiu4 jyu5 caam1 sou3 deoi3 cai4 / Fine-tuning & Alignment）：使模型輸出更符合人類價值觀與具體業務場景。\n- 「算力集群與雲端分佈式運算」（syun3 lik6 zaap6 kwan4）。",
      "examples": [
        {
          "target": "科研團隊利用海量語料庫對大語言模型進行深度訓練同參數微調，顯著提升咗機器翻譯同邏輯推理能力。",
          "reading": "fo1 jin4 tyun4 deoi6*2 lei6 jung6 hoi2 loeng6 jyu5 liu6*2 fu3 deoi3 daai6 jyu5 jin4 mou4 jing4 zeon3 hang4 sam1 dou6 fan3 lin6 tung4 caam1 sou3 mei4 tiu4, hin2 zoek3 tai4 sing1 zo2 gei1 hei3 faan1 jik6 tung4 lo4 cap1 teoi1 lei5 nang4 lik6. [fɔː˥ jiːn˨˩ tʰyːn˨˩ tɵy˧˥ lei˨ jʊŋ˨ hɔːi˩˧ lœːŋ˨ jyuː˩˧ liu˨ fu˧ tɵy˧ taːi˨ jyuː˩˧ jiːn˨˩ mouou˨˩ jɪŋ˨˩ tsɵn˧ hɐŋ˨˩ sɐm˥ tou˨ fɐn˧ liːn˨ tʰʊŋ˨˩ tsʰaːm˥ sou˧ mei˨˩ tʰiːu˨˩, hin˧˥ tsœːk̚˧ tʰɐi˨˩ sɪŋ˥ tsɔː˧˥ kei˥ hei˧ faːn˥ jɪk̚˨ tʰʊŋ˨˩ lɔː˨˩ tsʰɐp̚˥ tʰɵy˥ lei˩˧ nɐŋ˨˩ lɪk̚˨] (FOH-YEEN TUEN-DEOY LEY-YOONG HOI-LEUNG YUE-LEW-FOO DEOY DY YUE-YEEN MOU-YING JEON-HAHNG SUM-DOU FUN-LEEN TOONG CHAAM-SOU MAY-TEW, HEEN-JERK TY-SING-JOR GAY-HEY FAHN-YIK TOONG LOH-CHUP TOEY-LEY NUNG-LIK)",
          "translation": "The scientific research team utilized a massive corpus to conduct deep training and parameter fine-tuning on the large language model, significantly enhancing its machine translation and logical reasoning capabilities."
        },
        {
          "target": "大數據分析唔單止能夠精準預測市場趨勢，仲可以為公共衛生防控提供實時算力支援。",
          "reading": "daai6 sou3 geoi3 fan1 sik1 m4 daan1 zi2 nang4 gau3 zing1 zeon2 jyu6 cak1 si5 coeng4 ceoi1 sai3, zung6 ho2 ji5 wai4 gung1 gung6 wai6 sang1 fong4 hung3 tai4 gung1 sat6 si4 syun3 lik6 zi1 jyun4. [taːi˨ sou˧ kɵy˧ fɐn˥ sɪk̚˥ m̩˨˩ taːn˥ tsiː˧˥ nɐŋ˨˩ kɐu˧ tsɪŋ˥ tsɵn˧˥ jyu˨ tsʰak̚˥ siː˩˧ tsʰœːŋ˨˩ tsʰɵy˥ sɐi˧, tsʊŋ˨ hɔː˧˥ jiː˩˧ wɐi˨˩ kʊŋ˥ kʊŋ˨ wɐi˨ sɐŋ˥ fɔːŋ˨˩ hʊŋ˧ tʰɐi˨˩ kʊŋ˥ sɐt̚˨ siː˨˩ syun˧ lɪk̚˨ tsiː˥ jyːn˨˩] (DY SOU-GOEY FUN-SIK M-DAHN-JEE NUNG-GAU JING-JEON YUE-CHUK SEE-CHEUNG CHOEY-SY, JOONG HOH-YEE WAI GONG-GONG WAI-SUNG FONG-HOONG TY-GONG SUT-SEE SUEN-LIK JEE-YUEN)",
          "translation": "Big data analytics not only accurately predicts market trends, but also provides real-time computing support for public health epidemic prevention and control."
        },
        {
          "target": "深度學習算法之突破性演進，徹底顛覆咗傳統圖像識別同自然語言處理之技術邊界。",
          "reading": "sam1 dou6 hok6 zaap6 syun3 faat3 zi1 tat6 po3 sing3 jin2 zeon3, cit3 dai2 din1 fuk1 zo2 cyun4 tung4 tou4 zoeng6 sik1 bit6 tung4 zi6 jin4 jyu5 jin4 cyu2 lei5 zi1 gei6 seot6 bin1 gaai3. [sɐm˥ tou˨ hɔːk̚˨ tsaːp̚˨ syun˧ faːt̚˧ tsiː˥ tʰɐt̚˨ pʰɔː˧ sɪŋ˧ jiːn˧˥ tsɵn˧, tsʰiːt̚˧ tɐi˧˥ tiːn˥ fʊk̚˥ tsɔː˧˥ tsʰyːn˨˩ tʰʊŋ˨˩ tʰou˨˩ tsœːŋ˨ sɪk̚˥ piːt̚˨ tʰʊŋ˨˩ tsiː˨ jiːn˨˩ jyuː˩˧ jiːn˨˩ tsʰyː˧˥ lei˩˧ tsiː˥ kei˨ sɵt̚˨ piːn˥ kaːi˧] (SUM-DOU HOK-JAHP SUEN-FAHT JEE TUT-POH-SING YEEN-JEON, CHEET-DY DEEN-FUK-JOR CHUEN-TOONG TOU-JEUNG SIK-BEET TOONG JEE-YEEN YUE-YEEN CHUE-LEY JEE GAY-SUT BEEN-GY)",
          "translation": "The breakthrough evolution of deep learning algorithms has completely overturned the technical boundaries of traditional image recognition and natural language processing."
        }
      ],
      "mnemonics": [
        "【人工智能訣】大模型訓語料庫，參數微調算法精；機器深度學神經，算力奔湧智慧生！"
      ],
      "culturalNotes": [
        "香港科技大學與香港中文大學在計算機視覺、自然語言處理與大數據領域位居世界頂尖行列。大灣區已建成以香港為科研核心、深圳與廣州為產業轉化基地之全球級AI算力集群。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【前沿科技】以海量數據為基礎、能夠進行複雜語言生成與邏輯推理之核心AI技術架構稱為：",
          "options": [
            "大語言模型 (Large Language Model / LLM)",
            "算盤珠心算) (Context: 人工智能、機器學習與大數據分析：「算法演進」、「深度學習」、「訓練模型)",
            "打字機打字) (Context: 人工智能、機器學習與大數據分析：「算法演進」、「深度學習」、「訓練模型)",
            "機械發條鐘) (Context: 人工智能、機器學習與大數據分析：「算法演進」、「深度學習」、「訓練模型)"
          ],
          "answerIndex": 0,
          "explanation": "「大語言模型（LLM）」為當代生成式人工智能之核心技術基石。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【技術工程】為使預訓練AI模型更貼合特定領域專業知識或具體應用場景所進行之針對性參數調整過程係：",
          "options": [
            "微調 (Fine-tuning / Mei4 tiu4)",
            "格式化全盤清空) (Context: 人工智能、機器學習與大數據分析：「算法演進」、「深度學習」、「訓練模型)",
            "拔掉電源關機) (Context: 人工智能、機器學習與大數據分析：「算法演進」、「深度學習」、「訓練模型)",
            "隨機猜測) (Context: 人工智能、機器學習與大數據分析：「算法演進」、「深度學習」、「訓練模型)"
          ],
          "answerIndex": 0,
          "explanation": "「微調（Fine-tuning）」係在大模型基礎上調整權重參數以適配專屬垂直領域之核心工藝。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【深度學習】深度學習（Deep Learning）之所以具備強大表徵學習能力，主要歸功於其採用咗邊種核心架構：",
          "options": [
            "多層人工神經網絡 (Multilayer Artificial Neural Networks)",
            "單純手工規則枚舉) (Context: 人工智能、機器學習與大數據分析：「算法演進」、「深度學習」、「訓練模型)",
            "隨機亂數生成器) (Context: 人工智能、機器學習與大數據分析：「算法演進」、「深度學習」、「訓練模型)",
            "機械指針齒輪) (Context: 人工智能、機器學習與大數據分析：「算法演進」、「深度學習」、「訓練模型)"
          ],
          "answerIndex": 0,
          "explanation": "深度學習依托多層人工神經網絡實現對高維非線性特徵之自主提取與擬合。"
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
    "title": "金融科技（FinTech）、區塊鏈與虛擬資產監管：「智能合約」、「去中心化」、「反洗黑錢」 (FinTech & Blockchain)",
    "level": "C1",
    "objective": "掌握金融科技（FinTech）、Web3區塊鏈底層邏輯（去中心化、智能合約）及香港虛擬資產合規監管（監管沙盒、AML反洗黑錢）之專業金融法律術語。",
    "presentation": {
      "explanation": "香港作為國際金融中心，在金融科技創新與虛擬資產監管體系建設上處於全球領先地位：\n\n一、Web3與區塊鏈核心技術詞彙：\n１．「去中心化分佈式賬本」（heoi3 zung1 sam1 faa3 fan1 bou3 sik1 zoeng3 bun2）：\n- 透過共識機制（Consensus Mechanism）確保數據不可篡改與高度透明。\n２．「智能合約」（zi3 nang4 hap6 joek3 / Smart Contracts）：\n- 在區塊鏈上部署、條件滿足時自動執行的確定性程序代碼。\n\n二、虛擬資產合規與金融監管矩陣：\n１．「監管沙盒」（gaam1 gun2 saa1 haap6 / Regulatory Sandbox）：\n- 允許金融機構在受控環境下測試創新金融產品。\n２．「反洗黑錢（AML）與打擊恐怖主義融資（CFT）」（faan2 sai2 hak1 cin4*2）：\n- 金融機構必須嚴格落實「認識你的客戶（KYC）」與資金溯源審查。\n３．「虛擬資產交易平台發牌制度」（heoi1 ji5 zi1 caan2 gaau1 jik6 ping4 toi4 faat3 paai4 zai3 dou6 / VASP Licensing）。",
      "examples": [
        {
          "target": "香港證監會正式實施虛擬資產交易平台發牌制度，在推動金融創新嘅同時嚴密防範金融風險。",
          "reading": "hoeng1 gong2 zing3 gaam1 wui6*2 zing3 sik1 sat6 si1 heoi1 ji5 zi1 caan2 gaau1 jik6 ping4 toi4 faat3 paai4 zai3 dou6, zoi6 teoi1 dung6 gam1 jung4 cong3 san1 ge3 tung4 si4 jim4 mat6 fong4 faan6 gam1 jung4 fung1 him2. [hœːŋ˥ kʷɔːŋ˧˥ tsɪŋ˧ kaːm˥ wuːi˨˩ tsɪŋ˧ sɪk̚˥ sɐt̚˨ siː˥ hɵy˥ jiː˩˧ tsiː˥ tsʰaːn˨˩ kaːu˥ jɪk̚˨ pʰɪŋ˨˩ tʰɔːi˨˩ faːt̚˧ pʰaːi˨˩ tsai˧ tou˨, tsɔːi˨ tʰɵy˥ tʊŋ˨ kɐm˥ jʊŋ˨˩ tsʰɔːŋ˧ sɐn˥ kɛː˧ tʰʊŋ˨˩ siː˨˩ jiːm˨˩ mɐt̚˨ fɔːŋ˨˩ faːn˨ kɐm˥ jʊŋ˨˩ fʊŋ˥ hiːm˧˥] (HEUNG-GONG JING-GAHM-WUI JING-SIK SUT-SEE HOEY-YEE JEE-CHAAN GAU-YIK PING-TOY FAHT-PY JAI-DOU, JOY TOEY-DOONG GUM-YOONG CHONG-SUN GEH TOONG-SEE YEEM-MUT FONG-FAHN GUM-YOONG FOONG-HEEM)",
          "translation": "The Hong Kong Securities and Futures Commission officially implemented the licensing regime for virtual asset trading platforms, strictly preventing financial risks while promoting financial innovation."
        },
        {
          "target": "區塊鏈技術透過智能合約實現自動清算結算，大幅降低跨境貿易之信任成本同履約風險。",
          "reading": "keoi1 faai3 lin2 gei6 seot6 tau3 gwo3 zi3 nang4 hap6 joek3 sat6 jin6 zi6 dung6 cing1 syun3 git3 syun3, daai6 fuk1 gong3 dai1 kwaa1 ging3 mau6 jik6 zi1 seon3 jam6 sing4 bun2 tung4 leoi5 joek3 fung1 him2. [kʰɵy˥ faːi˧ liːn˧˥ kei˨ sɵt̚˨ tʰɐu˧ kʷɔː˧ tsiː˧ nɐŋ˨˩ hɐp̚˨ jœːk̚˧ sɐt̚˨ jiːn˨ tsiː˨ tʊŋ˨ tsʰɪŋ˥ syun˧ kiːt̚˧ syun˧, taːi˨ fʊk̚˥ kɔːŋ˧ tɐi˥ kʷʰaː˥ kɪŋ˧ mɐu˨ jɪk̚˨ tsiː˥ sɵn˧ jɐm˨ sɪŋ˨˩ puːn˧˥ tʰʊŋ˨˩ lɵy˩˧ jœːk̚˧ fʊŋ˥ hiːm˧˥] (KOEY-FAI-LEEN GAY-SUT TAU-GWOR JEE-NUNG HUP-YERK SUT-YEEN JEE-DOONG CHING-SUEN GEET-SUEN, DY-FUK GONG-DY KWAH-GING MAU-YIK JEE SEON-YUM SING-BOON TOONG LOEY-YERK FOONG-HEEM)",
          "translation": "Blockchain technology realizes automatic clearing and settlement through smart contracts, substantially reducing trust costs and performance risks in cross-border trade."
        },
        {
          "target": "所有獲批牌照之金融機構都必須嚴格遵守反洗黑錢條例，切實做好客戶身分認證同資金來源穿透審查。",
          "reading": "so2 jau5 wok6 pai1 paai4 ziu3 zi1 gam1 jung4 gei1 gau3 dou1 bit1 seoi1 jim4 gaak3 zeon1 sau2 faan2 sai2 hak1 cin4*2 tiu4 lai6, cai3 sat6 zou6 hou2 haak3 wu6 san1 fan6*2 jing6 zing3 tung4 zi1 gam1 loi4 jyun4 cyun1 tau3 sam2 caa4. [sɔː˧˥ jɐu˩˧ wɔːk̚˨ pʰɐi˥ pʰaːi˨˩ tsiːu˧ tsiː˥ kɐm˥ jʊŋ˨˩ kei˥ kɐu˧ tou˥ piːt̚˥ sɵy˥ jiːm˨˩ kaːk̚˧ tsɵn˥ sɐu˧˥ faːn˧˥ sɐi˧˥ hɐk̚˥ tsʰiːn˨˩ tʰiːu˨˩ lɐi˨, tsʰɐi˧ sɐt̚˨ tsou˨ hou˧˥ haːk̚˧ wuː˨ sɐn˥ fɐn˨ jɪŋ˨ tsɪŋ˧ tʰʊŋ˨˩ tsiː˥ kɐm˥ lɔːi˨˩ jyːn˨˩ tsʰyːn˥ tʰɐu˧ sɐm˧˥ tsʰaː˨˩] (SOH-YAU WOK-PY PY-JEW JEE GUM-YOONG GAY-GAU DOH BEET-SOEY YEEM-GAAK JEON-SAU FAHN-SY HUK-CHEEN TEW-LY, CHY-SUT JOU-HOH HAAK-WOO SUN-FUN YING-JING TOONG JEE-GUM LOY-YUEN CHUEN-TAU SUM-CHAH)",
          "translation": "All licensed financial institutions must strictly adhere to Anti-Money Laundering regulations, earnestly performing customer identity verification and look-through examination of fund sources."
        }
      ],
      "mnemonics": [
        "【金科監管訣】去中心化合約靈，區塊鏈上結算清；監管沙盒控風險，合規發牌四海名！"
      ],
      "culturalNotes": [
        "香港特區政府發布的《有關香港虛擬資產發展的政策宣言》，確立了香港建設全球Web3與虛擬資產創新中心的戰略地位。數碼港（Cyberport）與香港金融管理局（HKMA）推出了多項支持FinTech初創企業的孵化政策。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【區塊鏈應用】在區塊鏈上部署、當預設條件被觸發時自動無偏差執行之程序代碼稱為：",
          "options": [
            "智能合約 (Smart Contracts / Zi3 nang4 hap6 joek3)",
            "口頭協議) (Context: 金融科技（FinTech）、區塊鏈與虛擬資產監管：「智能合約」、「去中)",
            "手寫收據) (Context: 金融科技（FinTech）、區塊鏈與虛擬資產監管：「智能合約」、「去中)",
            "傳真文件) (Context: 金融科技（FinTech）、區塊鏈與虛擬資產監管：「智能合約」、「去中)"
          ],
          "answerIndex": 0,
          "explanation": "「智能合約（Smart Contracts）」為去中心化應用中自動執行條款之核心技術。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【金融監管】允許金融科技初創企業在真實市場環境但受限範圍內測試創新產品之監管機制稱為：",
          "options": [
            "監管沙盒 (Regulatory Sandbox / Gaam1 gun2 saa1 haap6)",
            "全面禁止創新) (Context: 金融科技（FinTech）、區塊鏈與虛擬資產監管：「智能合約」、「去中)",
            "放任自流不予監管) (Context: 金融科技（FinTech）、區塊鏈與虛擬資產監管：「智能合約」、「去中)",
            "強制關閉業務) (Context: 金融科技（FinTech）、區塊鏈與虛擬資產監管：「智能合約」、「去中)"
          ],
          "answerIndex": 0,
          "explanation": "「監管沙盒（Regulatory Sandbox）」為平衡金融創新與風險防控之標誌性監管制度。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【合規義務】金融機構為防止不法資金透過金融體系合法化，必須強制嚴格落實之合規審查條例係：",
          "options": [
            "反洗黑錢條例（AML）與認識你的客戶（KYC） (Anti-Money Laundering & KYC)",
            "單純登記用戶暱稱) (Context: 金融科技（FinTech）、區塊鏈與虛擬資產監管：「智能合約」、「去中)",
            "免除一切身分核實) (Context: 金融科技（FinTech）、區塊鏈與虛擬資產監管：「智能合約」、「去中)",
            "允許匿名大額跨境轉賬) (Context: 金融科技（FinTech）、區塊鏈與虛擬資產監管：「智能合約」、「去中)"
          ],
          "answerIndex": 0,
          "explanation": "AML（反洗黑錢）與KYC（客戶身分識別）為全球金融機構營運之法定底線。"
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
    "title": "生物醫藥、基因工程與醫療科技前沿：「臨床試驗」、「標靶治療」、「基因編輯」 (Biomedicine & MedTech)",
    "level": "C1",
    "objective": "掌握現代生物醫藥、精準醫療、基因編輯技術及嚴謹科學臨床試驗（雙盲測試、對照組、安慰劑效應）之高階粵語學術詞彙。",
    "presentation": {
      "explanation": "現代生命科學與精準醫學（Precision Medicine）之突破，依託嚴密之科學研究方法與實驗驗證體系：\n\n一、生物醫學與前沿療法核心詞彙：\n１．「標靶治療與免疫療法」（biu1 baa3 zi6 liu4 jyu5 min5 jik6 liu4 faat3）：\n- 精準識別癌細胞特異分子靶點，大幅降低對正常人體細胞之毒副作用。\n２．「基因編輯技術」（gei1 jan1 pin1 cap1 / CRISPR-Cas9）：\n- 對生物體特定DNA序列進行精確剪切、替換或修復。\n\n二、臨床試驗與實證科研方法論：\n１．「隨機雙盲對照試驗」（ceoi4 gei1 soeng1 mong4 deoi3 ziu3 si3 jim6 / Randomized Double-Blind Trial）：\n- 受試者與研究人員均不知曉分組情況，以徹底消除主觀偏見。\n２．「安慰劑效應」（on1 wai3 zai1 haau6 jing3 / Placebo Effect）：\n- 對照組服用無活性成分製劑，用以衡量藥物之真實生物化學療效。\n３．「統計學顯著差異」（tung2 gai3 hok6 hin2 zoek3 caa1 ji6 / p < 0.05）。",
      "examples": [
        {
          "target": "新研發之抗癌標靶藥物在第三期臨床試驗中表現優異，顯著延長咗晚期患者之無進展生存期。",
          "reading": "san1 jin4 faat3 zi1 kong3 ngaam4 biu1 baa3 joek6 mat6 zoi6 dai6 saam1 kei4 lam4 cong4 si3 jim6 zung1 biu2 jin6 jau1 ji3, hin2 zoek3 jin4 coeng4 zo2 maan5 kei4 waan6 ze2 zi1 mou4 zeon3 zin2 sang1 cyun4 kei4. [sɐn˥ jiːn˨˩ faːt̚˧ tsiː˥ kʰɔːŋ˧ ŋaːm˨˩ biːu˥ paː˧ jœːk̚˨ mɐt̚˨ tsɔːi˨ tɐi˨ saːm˥ kʰei˨˩ lɐm˨˩ tsʰɔːŋ˨˩ siː˧ jiːm˨ tsʊŋ˥ piːu˧˥ jiːn˨ jɐu˥ jiː˧, hin˧˥ tsœːk̚˧ jiːn˨˩ tsʰœːŋ˨˩ tsɔː˧˥ maːn˩˧ kʰei˨˩ waːn˨ tsɛː˧˥ tsiː˥ mouou˨˩ tsɵn˧ tsiːn˧˥ sɐŋ˥ tsʰyːn˨˩ kʰei˨˩] (SUN YEEN-FAHT JEE KONG-NGAHM BEW-BAH YERK-MUT JOY DY-SAHM-KEY LUM-CHONG SEE-YEEM JOONG BEW-YEEN YAU-YEE, HEEN-JERK YEEN-CHEUNG-JOR MAHN-KEY WAHN-JEH JEE MOU-JEON-JEEN SUNG-CHUEN-KEY)",
          "translation": "The newly developed anti-cancer targeted drug performed outstandingly in Phase III clinical trials, significantly extending the progression-free survival of advanced patients."
        },
        {
          "target": "為確保研究結論之客觀公正，實驗必須嚴格執行雙盲測試，徹底排除安慰劑效應之干擾。",
          "reading": "wai4 kok3 biu2 jin4 gau3 git3 leon6 zi1 haak3 gun1 gung1 zing3, sat6 jim6 bit1 seoi1 jim4 gaak3 zap1 hang4 soeng1 mong4 cak1 si3, cit3 dai2 paai4 ceoi4 on1 wai3 zai1 haau6 jing3 zi1 gon1 jiu2. [wɐi˨˩ kʰɔːk̚˧ piːu˧˥ jiːn˨˩ kɐu˧ kiːt̚˧ lɵn˨ tsiː˥ haːk̚˧ kuːn˥ kʊŋ˥ tsɪŋ˧, sɐt̚˨ jiːm˨ piːt̚˥ sɵy˥ jiːm˨˩ kaːk̚˧ tsɐp̚˥ hɐŋ˨˩ sœːŋ˥ mɔːŋ˨˩ tsʰak̚˥ siː˧, tsʰiːt̚˧ tɐi˧˥ pʰaːi˨˩ tsʰɵy˨˩ ɔːn˥ wɐi˧ tsɐi˥ haːu˨ jɪŋ˧ tsiː˥ kɔːn˥ jiːu˩˧] (WAI KOK-BEW YEEN-GAU GEET-LEON JEE HAAK-GOON GONG-JING, SUT-YEEM BEET-SOEY YEEM-GAAK JUP-HAHNG SEUNG-MONG CHUK-SEE, CHEET-DY PY-CHOEY ON-WAI-JAI HAU-YING JEE GOHN-YIU)",
          "translation": "To ensure the objectivity and impartiality of the research conclusions, the experiment must strictly implement double-blind testing to thoroughly eliminate the interference of the placebo effect."
        },
        {
          "target": "基因編輯技術為遺傳性罕見病之根治帶來咗全新希望，但同時亦必須接受嚴格之生命倫理審查。",
          "reading": "gei1 jan1 pin1 cap1 gei6 seot6 wai4 wai4 cyun4 sing3 hon2 gin3 beng6 zi1 gan1 zi6 daai3 lai4 zo2 cyun4 san1 hei1 mong6, daan6 tung4 si4 jik6 bit1 seoi1 zip3 sau6 jim4 gaak3 zi1 sang1 ming6 leon4 lei5 sam2 caa4. [kei˥ jɐn˥ pʰiːn˥ tsʰɐp̚˥ kei˨ sɵt̚˨ wɐi˨˩ wɐi˨˩ tsʰyːn˨˩ sɪŋ˧ hɔːn˧˥ kiːn˧ pɪŋ˨ tsiː˥ kɐn˥ tsiː˨ taːi˧ lɐi˨˩ tsɔː˧˥ tsʰyːn˨˩ sɐn˥ hei˥ mɔːŋ˨, taːn˨ tʰʊŋ˨˩ siː˨˩ jik̚˨ piːt̚˥ sɵy˥ tsiːp̚˧ sɐu˨ jiːm˨˩ kaːk̚˧ tsiː˥ sɐŋ˥ mɪŋ˨ lœːn˨˩ lei˩˧ sɐm˧˥ tsʰaː˨˩] (GAY-YUN PEEN-CHUP GAY-SUT WAI WAI-CHUEN-SING HOHN-GEEN-BENG JEE GUN-JEE DY-LY-JOR CHUEN-SUN HEY-MONG, DAHN TOONG-SEE YIK BEET-SOEY JEEP-SAU YEEM-GAAK JEE SUNG-MING LEON-LEY SUM-CHAH)",
          "translation": "Gene editing technology has brought brand new hope for the radical cure of rare hereditary diseases, but at the same time it must undergo rigorous bioethical scrutiny."
        }
      ],
      "mnemonics": [
        "【生物醫藥訣】標靶精準攻病灶，雙盲對照驗真效；基因編輯除罕疾，實證醫學規矩高！"
      ],
      "culturalNotes": [
        "香港大學李嘉誠醫學院與香港中文大學醫學院在鼻咽癌早篩（盧煜明院士無創產前診斷及液體活檢技術）、傳染病控制（管軼、袁國勇教授團隊）等領域引領全球醫學突破，享有崇高國際聲譽。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【臨床試驗】在醫學實驗中，為徹底消除受試患者同醫生雙方之主觀心理暗示所採用之標準科研方法係：",
          "options": [
            "雙盲測試 (Double-blind test / Soeng1 mong4 cak1 si3)",
            "隨意公開測試) (Context: 生物醫藥、基因工程與醫療科技前沿：「臨床試驗」、「標靶治療」、「基因編)",
            "單純問卷調查) (Context: 生物醫藥、基因工程與醫療科技前沿：「臨床試驗」、「標靶治療」、「基因編)",
            "口頭訪問) (Context: 生物醫藥、基因工程與醫療科技前沿：「臨床試驗」、「標靶治療」、「基因編)"
          ],
          "answerIndex": 0,
          "explanation": "「雙盲測試（Double-blind trial）」為國際醫學臨床試驗最高標準之黃金準則。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【精準醫療】針對癌細胞特定突變基因或受體分子進行精準打擊、對正常組織損傷極小之現代療法係：",
          "options": [
            "標靶治療 (Targeted therapy / Biu1 baa3 zi6 liu4)",
            "大劑量普通化療) (Context: 生物醫藥、基因工程與醫療科技前沿：「臨床試驗」、「標靶治療」、「基因編)",
            "傳統放血療法) (Context: 生物醫藥、基因工程與醫療科技前沿：「臨床試驗」、「標靶治療」、「基因編)",
            "單純休息靜養) (Context: 生物醫藥、基因工程與醫療科技前沿：「臨床試驗」、「標靶治療」、「基因編)"
          ],
          "answerIndex": 0,
          "explanation": "「標靶治療（Targeted Therapy）」為現代精準腫瘤醫學之重大突破。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【前沿生物】利用CRISPR分子剪刀對生物基因組特定序列進行精確修改之尖端生物技術係：",
          "options": [
            "基因編輯 (Gene editing / CRISPR-Cas9)",
            "普通血液透析) (Context: 生物醫藥、基因工程與醫療科技前沿：「臨床試驗」、「標靶治療」、「基因編)",
            "X光骨骼透視) (Context: 生物醫藥、基因工程與醫療科技前沿：「臨床試驗」、「標靶治療」、「基因編)",
            "心電圖檢查) (Context: 生物醫藥、基因工程與醫療科技前沿：「臨床試驗」、「標靶治療」、「基因編)"
          ],
          "answerIndex": 0,
          "explanation": "「基因編輯（Gene Editing）」為當代分子生物學中革命性之基因操作工具。"
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
    "title": "高教科研、學術論文寫作與研究方法論：「文獻探討」、「實證分析」、「統計顯著性」 (Academic Methodology)",
    "level": "C1",
    "objective": "掌握高階學術論文寫作架構（文獻探討、假說提出、實證分析、結論建言）、定量與定性研究方法論及統計學顯著性驗證之專業話語。",
    "presentation": {
      "explanation": "撰寫高水平學術論文與參與國際學術研討，要求極為嚴謹之研究方法論與規範性學術語體：\n\n一、學術論文標準結構與寫作話語體系：\n１．「文獻探討 / 文獻綜述」（man4 hin3 taam3 tou2）：\n- 「縱觀過往文獻，既有研究多聚焦於……然而對於……仍缺乏深入探討」（梳理學術脈絡，確立研究缺口）。\n２．「研究假說提出」（tai4 ceot1 jin4 gau3 gaa2 syut3）：\n- 「基於上述理論推導，本研究提出以下核心假說：假說一（H1）……」。\n３．「實證分析與數據檢驗」（sat6 zing3 fan1 sik1）：\n- 運用回歸模型、結構方程模型（SEM）進行因果推斷。\n\n二、研究方法與統計學術語：\n- 「定量研究與定性研究」（ding6 loeng6 jyu5 ding6 sing3）：量化統計 vs. 質性訪談個案。\n- 「統計顯著性」（tung2 gai3 hin2 zoek3 sing3 / Statistical Significance）：p < 0.01 或 p < 0.05，拒絕零假設。\n- 「同行評審」（tung4 hong4 ping4 sam2 / Peer Review）：國際學術期刊嚴格匿名審稿機制。",
      "examples": [
        {
          "target": "文獻探討部分系統梳理咗近十年相關領域之研究成果，為本篇論文奠定咗扎實之理論基礎。",
          "reading": "man4 hin3 taam3 tou2 bou6 fan6 hai6 tung2 so1 lei5 zo2 gan6 sap6 nin4 soeng1 gwaan1 ling5 wik6 zi1 jin4 gau3 sing4 gwo2, wai4 bun2 pin1 leon6 man4*2 din6 ding6 zo2 zaat3 sat6 zi1 lei5 leon6 gei1 sek6. [mɐn˨˩ hin˧ tʰaːm˧ tʰou˧˥ pou˨ fɐn˨ hɐi˨ tʰʊŋ˧˥ sɔː˥ lei˩˧ tsɔː˧˥ kɐn˨ sɐp̚˨ niːn˨˩ sœːŋ˥ kʷaːn˥ lɪŋ˩˧ wɪk̚˨ tsiː˥ jiːn˨˩ kɐu˧ sɪŋ˨˩ kʷɔː˧˥, wɐi˨˩ puːn˧˥ pʰiːn˥ lœːn˨ mɐn˨˩ tiːn˨ tɪŋ˨ tsɔː˧˥ tsaːt̚˧ sɐt̚˨ tsiː˥ lei˩˧ lœːn˨ kei˥ sɪk̚˨] (MUN-HEEN TAHM-TOU BOU-FUN HY-TOONG SOH-LEY-JOR GUN SUP-NEEN SEUNG-GWAHN LING-WIK JEE YEEN-GAU SING-GWOR, WAI BOON-PEEN LEON-MUN DEEN-DING-JOR JAAT-SUT JEE LEY-LEON GAY-SEK)",
          "translation": "The literature review section systematically combed through research achievements in related fields over the past decade, laying a solid theoretical foundation for this thesis."
        },
        {
          "target": "實證分析結果顯示，自變量對因變量產生顯著之正向影響，統計顯著性達到百分之一之極高水平。",
          "reading": "sat6 zing3 fan1 sik1 git3 gwo2 hin2 si6, zi6 bin3 loeng6 deoi3 jan1 bin3 loeng6 caang1 sang1 hin2 zoek3 zi1 zing3 hoeng3 jing2 hoeng2, tung2 gai3 hin2 zoek3 sing3 daat6 dou3 baak3 fan1 zi1 jat1 zi1 gik6 gou1 seoi2 zeon2. [sɐt̚˨ tsɪŋ˧ fɐn˥ sɪk̚˥ kiːt̚˧ kʷɔː˧˥ hin˧˥ siː˨, tsiː˨ piːn˧ lœːŋ˨ tɵy˧ jɐn˥ piːn˧ lœːŋ˨ tsʰaːŋ˥ sɐŋ˥ hin˧˥ tsœːk̚˧ tsiː˥ tsɪŋ˧ hœːŋ˧ jɪŋ˧˥ hœːŋ˧˥, tʰʊŋ˧˥ kɐi˧ hin˧˥ tsœːk̚˧ sɪŋ˧ taːt̚˨ tou˧ paːk̚˧ fɐn˥ tsiː˥ jɐt̚˥ tsiː˥ kɪk̚˨ kou˥ sɵy˧˥ tsɵn˧˥] (SUT-JING FUN-SIK GEET-GWOR HEEN-SEE, JEE-BEEN-LEUNG DEOY YUN-BEEN-LEUNG CHAANG-SUNG HEEN-JERK JEE JING-HEUNG YING-HEUNG, TOONG-GY HEEN-JERK-SING DAHT-DOU BAAK-FUN-JEE-YUT JEE GIK-GOU SOEY-JEON)",
          "translation": "The empirical analysis results show that the independent variable exerts a significant positive impact on the dependent variable, with statistical significance reaching an extremely high level of one percent."
        },
        {
          "target": "論文必須經過嚴格之雙向匿名同行評審，唯有方法嚴謹、論據充分且具備原創貢獻者方能獲准發表。",
          "reading": "leon6 man4*2 bit1 seoi1 ging1 gwo3 jim4 gaak3 zi1 soeng1 hoeng3 nik1 ming4 tung4 hong4 ping4 sam2, wai4 jau5 fong1 faat3 jim4 gan2, leon6 geui3 cung1 fan1 ce2 geoi6 bei6 jyun4 cong3 gung3 hin3 ze2 fong1 nang4 wok6 zeon2 faat3 biu2. [lœːn˨ mɐn˨˩ piːt̚˥ sɵy˥ kɪŋ˥ kʷɔː˧ jiːm˨˩ kaːk̚˧ tsiː˥ sœːŋ˥ hœːŋ˧ nɪk̚˥ mɪŋ˨˩ tʰʊŋ˨˩ hɔːŋ˨˩ pʰɪŋ˨˩ sɐm˥, wɐi˨˩ jɐu˩˧ fɔːŋ˥ faːt̚˧ jiːm˨˩ kɐn˧˥, lœːn˨ kɵy˧ tsʰʊŋ˥ fɐn˥ tsʰɛː˧˥ kɵy˨ pei˨ jyːn˨˩ tsʰɔːŋ˧ kʊŋ˧ hin˧ tsɛː˧˥ fɔːŋ˥ nɐŋ˨˩ wɔːk̚˨ tsɵn˧˥ faːt̚˧ piːu˧˥] (LEON-MUN BEET-SOEY GING-GWOR YEEM-GAAK JEE SEUNG-HEUNG NIK-MING TOONG-HOHNG PING-SUM, WAI-YAU FONG-FAHT YEEM-GUN, LEON-GOEY CHOONG-FUN CHEH GOEY-BAY YUEN-CHONG GONG-HEEN-JEH FONG-NUNG WOK-JEON FAHT-BEW)",
          "translation": "The manuscript must undergo rigorous double-blind peer review; only those with rigorous methodology, sufficient evidence, and original contributions can be approved for publication."
        }
      ],
      "mnemonics": [
        "【學術論文訣】文獻綜述探源流，提出假說論據修；實證分析統計顯，同行評審志在求！"
      ],
      "culturalNotes": [
        "香港擁有五所全球排名前一百位之頂尖研究型大學（港大、中大、科大、城大、理大）。香港的大學採用全英語教學與國際化學術規範，其教授與研究團隊在頂級期刊（如《Nature》、《Science》、《Cell》）發表的學術論文數量長期名列亞洲前茅。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【學術寫作】在論文開篇部分，系統梳理前人研究成果並精確指出既有研究不足之章節稱為：",
          "options": [
            "文獻探討 / 文獻綜述 (Literature Review / Man4 hin3 taam3 tou2)",
            "隨手日記) (Context: 高教科研、學術論文寫作與研究方法論：「文獻探討」、「實證分析」、「統計)",
            "純個人抒情) (Context: 高教科研、學術論文寫作與研究方法論：「文獻探討」、「實證分析」、「統計)",
            "小說創作) (Context: 高教科研、學術論文寫作與研究方法論：「文獻探討」、「實證分析」、「統計)"
          ],
          "answerIndex": 0,
          "explanation": "「文獻探討（Literature Review）」為確立研究價值與理論起點之必備核心章節。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【統計分析】在定量實證研究中，用以表明研究結果並非出於隨機偶然、具備科學可靠性之核心概念係：",
          "options": [
            "統計顯著性 (Statistical Significance / Tung2 gai3 hin2 zoek3 sing3)",
            "主觀直覺感應) (Context: 高教科研、學術論文寫作與研究方法論：「文獻探討」、「實證分析」、「統計)",
            "個人偏好猜測) (Context: 高教科研、學術論文寫作與研究方法論：「文獻探討」、「實證分析」、「統計)",
            "拋硬幣決定) (Context: 高教科研、學術論文寫作與研究方法論：「文獻探討」、「實證分析」、「統計)"
          ],
          "answerIndex": 0,
          "explanation": "「統計顯著性（Statistical Significance）」為實證定量分析中驗證假說之標準科學判據。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【審稿機制】國際權威學術期刊為確保論文學術質量與客觀公正所普遍採用的審稿機制係：",
          "options": [
            "雙向匿名同行評審 (Double-blind Peer Review)",
            "作者自審自發) (Context: 高教科研、學術論文寫作與研究方法論：「文獻探討」、「實證分析」、「統計)",
            "商業廣告競價排名) (Context: 高教科研、學術論文寫作與研究方法論：「文獻探討」、「實證分析」、「統計)",
            "社交媒體投票) (Context: 高教科研、學術論文寫作與研究方法論：「文獻探討」、「實證分析」、「統計)"
          ],
          "answerIndex": 0,
          "explanation": "「同行評審（Peer Review）」為現代國際學術出版與科學共同體驗證學術成果之基石。"
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
    "title": "科技倫理、數據私隱與智慧城市可持續治理：「算法偏見」、「倫理界限」、「可持續發展」 (Tech Ethics & Smart Governance)",
    "level": "C1",
    "objective": "掌握科技倫理爭議（算法偏見、數據私隱、深度偽造）、智慧城市可持續發展及高階公共政策科技治理之專業批判思辨術語。",
    "presentation": {
      "explanation": "科技之迅猛發展在帶來極大便利之同時，亦引發了深刻之倫理挑戰與治理難題：\n\n一、科技倫理與數字人權核心議題：\n１．「算法偏見與歧視」（syun3 faat3 pin1 gin3 jyu5 kei4 sik1 / Algorithmic Bias）：\n- 訓練數據中隱含之歷史偏見被AI算法放大，導致招聘、信貸審批中之系統性不公。\n２．「數據私隱侵犯與監控資本主義」（sou3 geoi3 jan2 si1 cam1 faan6）：\n- 個人生物特徵與行為軌跡被過度採集與濫用。\n３．「深度偽造（Deepfake）與信息操縱」：\n- 偽造音視頻引發之社會信任危機。\n\n二、智慧城市與可持續科技治理：\n１．「智慧城市可持續發展」（zi3 wai3 sing4 si5 ho2 ci4 zuk6 faat3 zin2）：\n- 智慧交通、綠色低碳能源電網與數字政務平台。\n２．「以人為本之科技治理綱領」（ji5 jan4 wai4 bun2 zi1 fo1 gei6 zi6 lei5）：\n- 「科技向善」（Tech for Good），確立清晰之倫理紅線與法律法規約束。",
      "examples": [
        {
          "target": "科技研發必須堅守「以人為本、科技向善」之倫理底線，嚴防算法偏見加劇社會不平等現象。",
          "reading": "fo1 gei6 jin4 faat3 bit1 seoi1 gin1 sau2 \"ji5 jan4 wai4 bun2, fo1 gei6 hoeng3 sin6\" zi1 leon4 lei5 dai2 sin3, jim4 fong4 syun3 faat3 pin1 gin3 gaa1 kek6 se5 wui6*2 bat1 ping4 dang2 jin6 zoeng6. [fɔː˥ kei˨ jiːn˨˩ faːt̚˧ piːt̚˥ sɵy˥ kiːn˥ sɐu˧˥ \"jiː˩˧ jɐn˨˩ wɐi˨˩ puːn˧˥, fɔː˥ kei˨ hœːŋ˧ siːn˨\" tsiː˥ lœːn˨˩ lei˩˧ tɐi˧˥ siːn˧, jiːm˨˩ fɔːŋ˨˩ syun˧ faːt̚˧ pʰiːn˥ kiːn˧ kaː˥ kʰɪk̚˨ sɛː˩˧ wuːi˨˩ pɐt̚˥ pʰɪŋ˨˩ tɐŋ˧˥ jiːn˨ tsœːŋ˨] (FOH-GAY YEEN-FAHT BEET-SOEY GEEN-SAU \"YEE-YUN WAI-BOON, FOH-GAY HEUNG-SEEN\" JEE LEON-LEY DY-SEEN, YEEM-FONG SUEN-FAHT PEEN-GEEN GAH-KEK SHEH-WUI BUT-PING-DUNG YEEN-JEUNG)",
          "translation": "Technology R&D must uphold the ethical baseline of 'human-centered and technology for good', strictly preventing algorithmic bias from exacerbating social inequalities."
        },
        {
          "target": "智慧城市建設應當在提升公共服務效率同嚴格保護公民數據私隱之間取得動態平衡。",
          "reading": "zi3 wai3 sing4 si5 gin3 cit3 jing1 dong1 zoi6 tai4 sing1 gung1 gung6 fuk6 mou6 haau6 leot6 tung4 jim4 gaak3 bou2 wu6 gung1 man4 sou3 geoi3 jan2 si1 zi1 gaan1 cak1 dak1 dung6 taai3 ping4 hang4. [tsiː˧ wɐi˧ sɪŋ˨˩ siː˨ kiːn˧ tsʰiːt̚˧ jɪŋ˥ tɔːŋ˥ tsɔːi˨ tʰɐi˨˩ sɪŋ˥ kʊŋ˥ kʊŋ˨ fʊk̚˨ mouou˨ haːu˨ lɵt̚˨ tʰʊŋ˨˩ jiːm˨˩ kaːk̚˧ pou˧˥ wuː˨ kʊŋ˥ mɐn˨˩ sou˧ kɵy˧ jɐn˩˧ siː˥ tsiː˥ kaːn˥ tsʰak̚˥ tɐk̚˥ tʊŋ˨ tʰaːi˧ pʰɪŋ˨˩ hɐŋ˨˩] (JEE-WAI SING-SEE GEEN-CHEET YING-DONG JOY TY-SING GONG-GONG FOOK-MOU HAU-LEUT TOONG YEEM-GAAK BOU-WOO GONG-MUN SOU-GOEY YUN-SEE JEE-GAHN CHUK-DUK DOONG-TY PING-HAHNG)",
          "translation": "Smart city development should strike a dynamic balance between improving public service efficiency and strictly protecting citizens' data privacy."
        },
        {
          "target": "面對深度偽造技術引發之新型網絡詐騙，監管部門應當未雨綢繆，制定嚴格之法律法規進行溯源治理。",
          "reading": "min6 deoi3 sam1 dou6 ngai6 zou6 gei6 seot6 jan5 faat3 zi1 san1 jing4 mong5 lok3 zaa3 pin3, gaam1 gun2 bou6 mun4 jing1 dong1 mei6 jyu5 cau4 mau4, zai3 ding6 jim4 gaak3 zi1 faat3 leot6 faat3 kwai1 zeon3 hang4 sou3 jyun4 zi6 lei5. [miːn˨ tɵy˧ sɐm˥ tou˨ ŋɐi˨ tsou˨ kei˨ sɵt̚˨ jɐn˩˧ faːt̚˧ tsiː˥ sɐn˥ jɪŋ˨˩ mɔːŋ˩˧ lɔːk̚˧ tsaː˧ pʰiːn˧, kaːm˥ kʷuːn˧˥ pou˨ muːn˨˩ jɪŋ˥ tɔːŋ˥ mei˨ jyu˩˧ tsʰɐu˨˩ mɐu˨˩, tsai˧ tɪŋ˨ jiːm˨˩ kaːk̚˧ tsiː˥ faːt̚˧ lɵt̚˨ faːt̚˧ kʷɐi˥ tsɵn˧ hɐŋ˨˩ sou˧ jyːn˨˩ tsiː˨ lei˩˧] (MEEN-DEOY SUM-DOU NGY-JOU GAY-SUT YUN-FAHT JEE SUN-YING MONG-LOK JAH-PEEN, GAHM-GOON BOU-MOON YING-DONG MAY-YUE-CHAU-MAU, JAI-DING YEEM-GAAK JEE FAHT-LEUT FAHT-KWAI JEON-HAHNG SOU-YUEN JEE-LEY)",
          "translation": "Faced with new cyber frauds triggered by deepfake technology, regulatory authorities should prepare in advance, formulating strict laws and regulations to conduct trace-and-source governance."
        }
      ],
      "mnemonics": [
        "【科技倫理訣】科技向善人為本，算法偏見須辨真；數據私隱守防線，智慧城市福祉深！"
      ],
      "culturalNotes": [
        "香港《個人資料（私隱）條例》（PDPO）是亞洲最早出台的個人數據保護法律之一。香港個人資料私隱專員公署（PCPD）發布了《人工智能道德發展指引》，為企業合規部署AI技術提供了全方位的倫理指引。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【科技倫理】因訓練數據存在偏頗而導致AI決策系統對特定群體產生不公評判之現象稱為：",
          "options": [
            "算法偏見 (Algorithmic Bias / Syun3 faat3 pin1 gin3)",
            "完全客觀公正) (Context: 科技倫理、數據私隱與智慧城市可持續治理：「算法偏見」、「倫理界限」、「)",
            "絕對完美無瑕) (Context: 科技倫理、數據私隱與智慧城市可持續治理：「算法偏見」、「倫理界限」、「)",
            "硬件電路故障) (Context: 科技倫理、數據私隱與智慧城市可持續治理：「算法偏見」、「倫理界限」、「)"
          ],
          "answerIndex": 0,
          "explanation": "「算法偏見（Algorithmic Bias）」為當前人工智能倫理治理中最關鍵之核心議題。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【公共政策】在重大科技風險或危機發生前預先制定防範對策與監管法規之成語係：",
          "options": [
            "未雨綢繆 (Preparing in advance / Mei6 jyu5 cau4 mau4)",
            "臨渴掘井) (Context: 科技倫理、數據私隱與智慧城市可持續治理：「算法偏見」、「倫理界限」、「)",
            "亡羊補牢) (Context: 科技倫理、數據私隱與智慧城市可持續治理：「算法偏見」、「倫理界限」、「)",
            "坐以待斃) (Context: 科技倫理、數據私隱與智慧城市可持續治理：「算法偏見」、「倫理界限」、「)"
          ],
          "answerIndex": 0,
          "explanation": "「未雨綢繆」常用於科技政策前瞻性制定與前沿風險防範語境。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【科技治理】現代科技創新與數字化轉型必須恪守之核心倫理指導原則係：",
          "options": [
            "以人為本、科技向善 (Human-centered & Technology for Good)",
            "利潤至上不顧後果) (Context: 科技倫理、數據私隱與智慧城市可持續治理：「算法偏見」、「倫理界限」、「)",
            "肆意侵犯個人私隱) (Context: 科技倫理、數據私隱與智慧城市可持續治理：「算法偏見」、「倫理界限」、「)",
            "全面推行算法壟斷) (Context: 科技倫理、數據私隱與智慧城市可持續治理：「算法偏見」、「倫理界限」、「)"
          ],
          "answerIndex": 0,
          "explanation": "「以人為本、科技向善」為全球公認之科技治理與可持續發展最高準則。"
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
    "title": "香港新浪潮電影運動：許鞍華、徐克、譚家明之紀實美學與視聽革新 (HK New Wave Cinema)",
    "level": "C1",
    "objective": "掌握香港新浪潮電影運動（1979年起）代表導演（許鞍華、徐克、譚家明）之創作特色、實景拍攝紀實風格、作者論電影美學及對邊緣社會之深刻人文關懷。",
    "presentation": {
      "explanation": "二十世紀七十年代末興起之「香港電影新浪潮」，為香港電影史最重要之美學革命：\n\n一、新浪潮運動歷史背景與藝術特徵：\n１．電視編導大銀幕轉型：\n- 許鞍華（Ann Hui）、徐克（Tsui Hark）、譚家明（Patrick Tam）、章國明等自海外影視學院畢業後，先任職於TVB與香港電台（RTHK），隨後將現代視聽語言帶入大銀幕。\n２．實景拍攝與紀實寫實主義（Realism）：\n- 擺脫傳統邵氏片場搭景之封閉感，深入香港大街小巷、公屋社區與邊緣角落進行菲林實景拍攝。\n３．作者論與社會批判意識（Auteur Theory）：\n- 代表作：許鞍華《投奔怒海》（越戰難民命運）、《天水圍的日與夜》（草根社區溫情）；徐克《蝶變》（新派武俠懸疑）。",
      "examples": [
        {
          "target": "香港電影新浪潮導演打破片場搭景傳統，以真實街頭實景拍攝展現出強烈之社會紀實風格。",
          "reading": "hoeng1 gong2 din6 jing2 san1 long6 ciu4 dou6 jin2 daa2 po3 pin3*2 coeng4 daap3 ging2 cyun4 tung4, ji5 zan1 sat6 gaai1 tau4 sat6 ging2 paak3 sip3 zin2 jin6 ceot1 koeng4 lit6 zi1 se5 wui6*2 gei2 sat6 fung1 gaak3. [hœːŋ˥ kʷɔːŋ˧˥ tiːn˨ jɪŋ˧˥ sɐn˥ lɔːŋ˨ ciːu˨˩ tou˨ jiːn˧˥ taː˧˥ pʰɔː˧ pʰiːn˧˥ tsʰœːŋ˨˩ taːp̚˧ kɪŋ˧˥ tsʰyːn˨˩ tʰʊŋ˨˩, jiː˩˧ tsɐn˥ sɐt̚˨ kaːi˥ tʰɐu˨˩ sɐt̚˨ kɪŋ˧˥ pʰaːk̚˧ siːp̚˧ tsiːn˧˥ jiːn˨ tsʰɵt̚˥ kʰœːŋ˨˩ liːt̚˨ tsiː˥ sɛː˩˧ wuːi˨˩ kei˧˥ sɐt̚˨ fʊŋ˥ kaːk̚˧] (HEUNG-GONG DEEN-YING SUN-LONG-CHIU DOU-YEEN DAH-POH PEEN-CHEUNG DAAP-GING CHUEN-TOONG, YEE JUN-SUT GY-TAU SUT-GING PAAK-SEEP JEEN-YEEN-CHUT KEUNG-LEET JEE SHEH-WUI GAY-SUT FOONG-GAAK)",
          "translation": "Directors of the Hong Kong New Wave cinema broke the tradition of studio sets, demonstrating a strong social documentary realism through authentic street on-location shooting."
        },
        {
          "target": "許鞍華導演在《天水圍的日與夜》入面以克制細膩之鏡頭語言，捕捉普通市民家庭平凡而真摯之人文溫情。",
          "reading": "heoi2 on1 waa4 dou6 jin2 zoi6 \"tin1 seoi2 wai4 zi1 jat6 jyu5 je6\" jap6 min6 ji5 hak1 zai3 sai3 nei6 zi1 geng3 tau4*2 jyu5 jin4, bat1 zuk6 pou2 tung1 si5 man4 gaa1 ting4 ping4 faan4 ji4 zan1 zi3 zi1 jan4 man4 wan1 cing4. [hɵy˧˥ ɔːn˥ waː˨˩ tou˨ jiːn˧˥ tsɔːi˨ \"tʰiːn˥ sɵy˧˥ wɐi˨˩ tsiː˥ jɐt˨ jyː˩˧ jɛː˨\" jɐp̚˨ miːn˨ jiː˩˧ hɐk̚˥ tsai˧ sɐi˧ nei˨ tsiː˥ kɪŋ˧ tʰɐu˨˩ jyuː˩˧ jiːn˨˩, pɐt̚˥ tsʊk̚˥ pʰou˧˥ tʰʊŋ˥ siː˩˧ mɐn˨˩ kaː˥ tʰɪŋ˨˩ pʰɪŋ˨˩ faːn˨˩ jiː˨˩ tsɐn˥ tsiː˧ tsiː˥ jɐn˨˩ mɐn˨˩ wɐn˥ tsʰɪŋ˨˩] (HOEY ON-WAH DOU-YEEN JOY \"TEEN-SOEY-WAI JEE YUT YUE YEH\" YUP-MEEN YEE HUK-JAI SY-NEY JEE GENG-TAU YUE-YEEN, BUT-JUK POU-TOONG SEE-MUN GAH-TING PING-FAHN YEE JUN-JEE JEE YUN-MUN WUN-CHING)",
          "translation": "Director Ann Hui, in 'The Way We Are', captured the ordinary yet sincere humanist warmth of common citizens' families with restrained and delicate cinematic language."
        },
        {
          "target": "新浪潮運動確立咗導演作為電影「作者」之核心地位，推動香港電影步入國際藝術影展之最高殿堂。",
          "reading": "san1 long6 ciu4 wan6 dung6 kok3 laap6 zo2 dou6 jin2 zok3 wai4 din6 jing2 \"zok3 ze2\" zi1 hat6 sam1 dei6 wai6, teoi1 dung6 hoeng1 gong2 din6 jing2 bou6 jap6 gwok3 zai3 ngai6 seot6 jing2 zin2 zi1 zeoi3 gou1 din6 tong4. [sɐn˥ lɔːŋ˨ ciːu˨˩ wɐn˨ tʊŋ˨ kʰɔːk̚˧ laːp̚˨ tsɔː˧˥ tou˨ jiːn˧˥ tsɔːk̚˧ wɐi˨˩ tiːn˨ jɪŋ˧˥ \"tsɔːk̚˧ tsɛː˧˥\" tsiː˥ hɐt̚˨ sɐm˥ tei˨ wɐi˨, tʰɵy˥ tʊŋ˨ hœːŋ˥ kʷɔːŋ˧˥ tiːn˨ jɪŋ˧˥ pou˨ jɐp̚˨ kʷɔːk̚˧ tsai˧ ŋɐi˨ sɵt̚˨ jɪŋ˧˥ tsiːn˧˥ tsiː˥ tsɵy˧ kou˥ tiːn˨ tʰɔːŋ˨˩] (SUN-LONG-CHIU WUN-DOONG KOK-LAHP-JOR DOU-YEEN JOK-WAI DEEN-YING \"JOK-JEH\" JEE HUT-SUM DAY-WAI, TOEY-DOONG HEUNG-GONG DEEN-YING BOU-YUP GWOK-JAI NGY-SUT YING-JEEN JEE JEOY-GOU DEEN-TONG)",
          "translation": "The New Wave movement established the central status of the director as the film's 'auteur', propelling Hong Kong cinema into the highest halls of international art film festivals."
        }
      ],
      "mnemonics": [
        "【新浪潮電影】電視轉戰大銀幕，實景拍攝紀實真；鞍華克導樹作者，香江光影天下聞！"
      ],
      "culturalNotes": [
        "許鞍華導演曾六次榮獲香港電影金像獎最佳導演獎，並於2020年榮獲威尼斯國際電影節終身成就金獅獎，成為全球首位獲此殊榮的華人女性導演。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【電影運動】二十世紀七十年代末在香港興起、由許鞍華徐克等年輕導演推動之視聽美學革命稱為：",
          "options": [
            "香港電影新浪潮 (Hong Kong New Wave Cinema / San1 long6 ciu4)",
            "黑白默片運動) (Context: 香港新浪潮電影運動：許鞍華、徐克、譚家明之紀實美學與視聽革新 (HK )",
            "皮影戲巡演) (Context: 香港新浪潮電影運動：許鞍華、徐克、譚家明之紀實美學與視聽革新 (HK )",
            "純商業廣告片潮) (Context: 香港新浪潮電影運動：許鞍華、徐克、譚家明之紀實美學與視聽革新 (HK )"
          ],
          "answerIndex": 0,
          "explanation": "「香港電影新浪潮」為香港電影邁向現代主義與作者電影美學之關鍵里程碑。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【影壇巨匠】執導《投奔怒海》、《女人四十》、《桃姐》，榮獲威尼斯影展終身成就金獅獎之香港女導演係：",
          "options": [
            "許鞍華 (Ann Hui)",
            "宮崎駿) (Context: 香港新浪潮電影運動：許鞍華、徐克、譚家明之紀實美學與視聽革新 (HK )",
            "黑澤明) (Context: 香港新浪潮電影運動：許鞍華、徐克、譚家明之紀實美學與視聽革新 (HK )",
            "奉俊昊) (Context: 香港新浪潮電影運動：許鞍華、徐克、譚家明之紀實美學與視聽革新 (HK )"
          ],
          "answerIndex": 0,
          "explanation": "許鞍華為香港新浪潮領軍人物及享譽全球之電影大師。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【美學風格】香港新浪潮電影在製作手法上最顯著區別於傳統片場電影之核心特點係：",
          "options": [
            "走出攝影棚、大量採用真實街頭社區進行菲林實景拍攝 (On-location street shooting in authentic communities)",
            "全片只在單一綠幕前用電腦合成) (Context: 香港新浪潮電影運動：許鞍華、徐克、譚家明之紀實美學與視聽革新 (HK )",
            "完全不使用任何真實演員) (Context: 香港新浪潮電影運動：許鞍華、徐克、譚家明之紀實美學與視聽革新 (HK )",
            "禁止在香港本地取景) (Context: 香港新浪潮電影運動：許鞍華、徐克、譚家明之紀實美學與視聽革新 (HK )"
          ],
          "answerIndex": 0,
          "explanation": "深入香港本土社區進行實景拍攝為新浪潮紀實寫實美學之標誌性特徵。"
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
    "title": "電影視聽語言：鏡頭調度、蒙太奇剪接與光影色彩美學 (Cinematography & Mise-en-scène)",
    "level": "C1",
    "objective": "掌握專業電影視聽語言系統（長鏡頭、空鏡頭、特寫、推拉搖移）、蒙太奇剪接手法（交叉剪接、聲畫對位）及光影色彩隱喻之高階電影評析術語。",
    "presentation": {
      "explanation": "深入解構電影作品之藝術魅力，依託對鏡頭調度（Mise-en-scène）與蒙太奇（Montage）之專業視聽語法分析：\n\n一、攝影運鏡與空間調度核心術語：\n１．「鏡頭景別與運鏡」（Shot Types & Movement）：\n- 特寫（dak6 se2 / Close-up）、大特寫、中景、全景、遠景。\n- 運鏡手法：推、拉、搖、移、跟、升降（teoi1, laai1, jiu4, ji4, gan1, sing1 gong3）。\n２．「長鏡頭與場面調度」（coeng4 geng3 tau4 / Long Take & Mise-en-scène）：\n- 連續不間斷拍攝，保留真實時間流逝與演員情緒之自然流淌。\n\n二、剪接技巧與視聽修辭：\n１．「蒙太奇與交叉剪接」（mung4 taai3 kei4 jyu5 gaau1 caa1 zin2 zip3）：\n- 平行剪接兩條或多條空間線索，營造強烈之懸念節奏與戲劇張力。\n２．「聲畫對位與聲畫同步」（seng1 waa2*6 deoi3 wai6*2）：\n- 聲音與畫面內容形成互補、對比或反諷關係，豐富多義性詮釋空間。",
      "examples": [
        {
          "target": "導演運用一組行雲流水之長鏡頭調度，流暢展現出主角在狹窄唐樓巷弄中穿梭之迷惘孤寂心境。",
          "reading": "dou6 jin2 wan6 jung6 jat1 zou2 hang4 wan4 lau4 seoi2 zi1 coeng4 geng3 tau4*2 diu6 dou6, lau4 coeng3 zin2 jin6 ceot1 zyu2 gok3 zoi6 haap6 zaak3 tong4 lau4 hong6 lung6 zung1 cyun1 so1 zi1 mai4 mong5 gu1 zik6 sam1 ging2. [tou˨ jiːn˧˥ wɐn˨ jʊŋ˨ jɐt̚˥ tsou˧˥ hɐŋ˨˩ wɐn˨˩ lɐu˨˩ sɵy˧˥ tsiː˥ tsʰœːŋ˨˩ kɪŋ˧ tʰɐu˨˩ tiːu˨ tou˨, lɐu˨˩ tsʰœːŋ˧ tsiːn˧˥ jiːn˨ tsʰɵt̚˥ tsyː˧˥ kɔːk̚˧ tsɔːi˨ haːp̚˨ tsaːk̚˧ tʰɔːŋ˨˩ lɐu˨˩ hɔːŋ˨ lʊŋ˨ tsʊŋ˥ tsʰyːn˥ sɔː˥ tsiː˥ mɐi˨˩ mɔːŋ˩˧ kuː˥ tsɪk̚˨ sɐm˥ kɪŋ˧˥] (DOU-YEEN WUN-YOONG YUT-JOU HAHNG-WUN LAU-SOEY JEE CHEUNG-GENG-TAU DEW-DOU, LAU-CHEUNG JEEN-YEEN-CHUT JUE-GOK JOY HAHP-JAAK TONG-LOU HOHNG-LOONG JOONG CHUEN-SOH JEE MY-MONG GOO-JIK SUM-GING)",
          "translation": "The director deployed a set of flowing long-take mise-en-scène, smoothly presenting the protagonist's perplexed and lonely state of mind as they navigated the narrow tenement building alleyways."
        },
        {
          "target": "電影在決戰高潮處巧妙運用交叉蒙太奇剪接，將警匪兩方之激烈博弈節奏推向極致。",
          "reading": "din6 jing2 zoi6 kyut3 zin3 gou1 ciu4 cyu3 hiu2 miu6 wan6 jung6 gaau1 caa1 mung4 taai3 kei4 zin2 zip3, zoeng1 ging2 fei2 loeng5 fong1 zi1 gik1 lit6 bok3 jik6 zit3 zau3 teoi1 hoeng3 gik6 zi3. [tiːn˨ jɪŋ˧˥ tsɔːi˨ kʰyːt̚˧ tsiːn˧ kou˥ tsʰiːu˨˩ tsʰyː˧ hiːu˧˥ miːu˨ wɐn˨ jʊŋ˨ kaːu˥ tsʰaː˥ mʊŋ˨˩ tʰaːi˧ kʰei˨˩ tsiːn˧˥ tsiːp̚˧, tsœːŋ˥ kɪŋ˧˥ fei˧˥ lœːŋ˩˧ fɔːŋ˥ tsiː˥ kɪk̚˥ liːt̚˨ pɔːk̚˧ jɪk̚˨ tsit̚˧ tsɐu˧ tʰɵy˥ hœːŋ˧ kɪk̚˨ tsiː˧] (DEEN-YING JOY KUET-JEEN GOU-CHIU CHUE HIU-MEW WUN-YOONG GAU-CHAH MOONG-TY-KEY JEEN-JEEP, JEUNG GING-FAY LEUNG-FONG JEE GIK-LEET BOK-YIK JEET-JAU TOEY-HEUNG GIK-JEE)",
          "translation": "At the climax of the decisive battle, the film skillfully deployed cross-cutting montage, pushing the intense game rhythm between police and robbers to its utmost limit."
        },
        {
          "target": "聲畫對位手法之運用，令歡快之流行配樂與沉重之命運悲劇畫面形成強烈反諷，極具震撼力。",
          "reading": "seng1 waa2*6 deoi3 wai6*2 sau2 faat3 zi1 wan6 jung6, ling6 fun1 faai3 zi1 lau4 hang4 pui3 ngok6 jyu5 cam4 zung6 zi1 ming6 wan6 bei1 kek6 waa2*6 min6*2 jing4 sing4 koeng4 lit6 faan2 fung3, gik6 geoi6 zan3 ham6 lik6. [sɛːŋ˥ waː˧˥ tɵy˧ wɐi˨ tsiː˥ sɐu˧˥ faːt̚˧ tsiː˥ wɐn˨ jʊŋ˨, lɪŋ˨ fuːn˥ faːi˧ tsiː˥ lɐu˨˩ hɐŋ˨˩ pʰuːi˧ ŋɔːk̚˨ jyː˩˧ tsʰɐm˨˩ tsʊŋ˨ tsiː˥ mɪŋ˨ wɐn˨ pei˥ kʰɪk̚˨ waː˧˥ miːn˨ jɪŋ˨˩ sɪŋ˨˩ kʰœːŋ˨˩ liːt̚˨ faːn˧˥ fʊŋ˧, kɪk̚˨ kɵy˨ tsɐn˧ hɐm˨ lɪk̚˨] (SENG-WAH DEOY-WAI SAU-FAHT JEE WUN-YOONG, LING FOON-FAI JEE LAU-HAHNG PUI-NGOK YUE CHUM-JOONG JEE MING-WUN BAY-KEK WAH-MEEN YING-SING KEUNG-LEET FAHN-FOONG, GIK-GOEY JUN-HUM-LIK)",
          "translation": "The deployment of audiovisual counterpoint technique allowed upbeat pop background music to form a sharp irony with the heavy tragic imagery of destiny, generating immense dramatic power."
        }
      ],
      "mnemonics": [
        "【視聽語言訣】推拉搖移長鏡頭，交叉蒙太奇節奏；聲畫對位寓意深，光影調度神韻流！"
      ],
      "culturalNotes": [
        "香港攝影大師杜可風（Christopher Doyle）與王家衛合作，以大膽的高飽和度色彩、手持搖晃鏡頭與慢快門抽幀，創造了風靡全球的『王氏光影視覺符號』，深刻影響了當代世界電影美學。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【剪接手法】在電影中將兩條或多條在不同空間同時發生的劇情線索交替剪接在一起之蒙太奇手法係：",
          "options": [
            "交叉剪接 / 平行蒙太奇 (Cross-cutting / Gaau1 caa1 zin2 zip3)",
            "單純黑屏暫停) (Context: 電影視聽語言：鏡頭調度、蒙太奇剪接與光影色彩美學 (Cinematog)",
            "快進十倍播放) (Context: 電影視聽語言：鏡頭調度、蒙太奇剪接與光影色彩美學 (Cinematog)",
            "隨意刪除素材) (Context: 電影視聽語言：鏡頭調度、蒙太奇剪接與光影色彩美學 (Cinematog)"
          ],
          "answerIndex": 0,
          "explanation": "「交叉剪接（Cross-cutting）」為電影營造緊迫懸念與時空交織感最經典之剪接語法。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【視聽修辭】電影中背景聲音（如歡快音樂）與畫面內容（如悲慘處境）形成鮮明反差與諷刺效果之手法稱為：",
          "options": [
            "聲畫對位 (Audiovisual Counterpoint / Seng1 waa2 deoi3 wai6)",
            "無聲靜音) (Context: 電影視聽語言：鏡頭調度、蒙太奇剪接與光影色彩美學 (Cinematog)",
            "噪聲干擾) (Context: 電影視聽語言：鏡頭調度、蒙太奇剪接與光影色彩美學 (Cinematog)",
            "設備短路) (Context: 電影視聽語言：鏡頭調度、蒙太奇剪接與光影色彩美學 (Cinematog)"
          ],
          "answerIndex": 0,
          "explanation": "「聲畫對位」透過視聽反差營造深刻之象徵寓意與哲學思辨空間。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【攝影技術】在電影拍攝中，攝影機不中斷且持續跟隨角色運動或場景流轉之單一鏡頭稱為：",
          "options": [
            "長鏡頭 (Long Take / Coeng4 geng3 tau4)",
            "定格照片) (Context: 電影視聽語言：鏡頭調度、蒙太奇剪接與光影色彩美學 (Cinematog)",
            "幻燈片切換) (Context: 電影視聽語言：鏡頭調度、蒙太奇剪接與光影色彩美學 (Cinematog)",
            "一秒快速閃爍) (Context: 電影視聽語言：鏡頭調度、蒙太奇剪接與光影色彩美學 (Cinematog)"
          ],
          "answerIndex": 0,
          "explanation": "「長鏡頭（Long Take）」能夠完整保留時空連續性與現場氛圍之真實張力。"
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
    "title": "香港紀錄片與社會現實關懷：「時代見證」、「真實呈現」、「人文溫度」 (HK Documentaries)",
    "level": "C1",
    "objective": "掌握香港獨立紀錄片與紀實非虛構影像之美學流派（直接電影、參與式觀察）、社會現實關懷及「時代見證」之文化反思話語。",
    "presentation": {
      "explanation": "香港紀錄片以其強烈之社會責任感與對普通人命運之深情凝視，構成了香港歷史最珍貴之影像檔案：\n\n一、紀錄片核心創作流派與方法論：\n１．「直接電影與牆上蒼蠅」（Direct Cinema / Fly on the Wall）：\n- 攝影機不介入、不誘導，力求真實記錄事件之自然進展（如張經緯《音樂人生》）。\n２．「參與式紀錄片與口述歷史」（caam1 jyu5 sik1 gin3 zing3）：\n- 導演與受訪者深度對話，挖掘草根記憶、歷史沉積與身分認同。\n\n二、紀錄片評論高階術語矩陣：\n- 「時代見證與歷史存檔」（si4 doi6 gin3 zing3）：以客觀冷靜之鏡頭記錄城市歷史之巨大變遷。\n- 「非虛構敘事力量」（fei1 heoi1 gau3 zeoi6 si6）：真實生活本身所蘊含之戲劇性與感染力超越一切編造。\n- 「人文溫度與同理心」（jan4 man4 wan1 dou6）。",
      "examples": [
        {
          "target": "紀錄片導演以十年時間默默跟蹤拍攝，用影像為香港普通市民之成長歷程留下咗珍貴之時代見證。",
          "reading": "gei2 luk6 pin3*2 dou6 jin2 ji5 sap6 nin4 si4 gaan3 mak6 mak6 gan1 zung1 paak3 sip3, jung6 jing2 zoeng6 wai4 hoeng1 gong2 pou2 tung1 si5 man4 zi1 sing4 zoeng2 lik6 cing4 lau4 haa6 zo2 zan1 gwai3 zi1 si4 doi6 gin3 zing3. [kei˧˥ lʊk̚˨ pʰiːn˧˥ tou˨ jiːn˧˥ jiː˩˧ sɐp̚˨ niːn˨˩ siː˨˩ kaːn˧ mɐk̚˨ mɐk̚˨ kɐn˥ tsʊŋ˥ pʰaːk̚˧ siːp̚˧, jʊŋ˨ jɪŋ˧˥ tsœːŋ˨ wɐi˨˩ hœːŋ˥ kʷɔːŋ˧˥ pʰou˧˥ tʰʊŋ˥ siː˩˧ mɐn˨˩ tsiː˥ sɪŋ˨˩ tsœːŋ˧˥ lɪk̚˨ tsʰɪŋ˨˩ lɐu˨˩ haː˨ tsɔː˧˥ tsɐn˥ kʷɐi˧ tsiː˥ siː˨˩ tɔːi˨ kiːn˧ tsɪŋ˧] (GAY-LUK-PEEN DOU-YEEN YEE SUP-NEEN SEE-GAHN MUK-MUK GUN-JOONG PAAK-SEEP, YOONG YING-JEUNG WAI HEUNG-GONG POU-TOONG SEE-MUN JEE SING-JEUNG LIK-CHING LAU-HAH-JOR JUN-GWAI JEE SEE-DOY GEEN-JING)",
          "translation": "The documentary director tracked and filmed silently over ten years, leaving a precious witness of the era for the growth journeys of ordinary Hong Kong citizens through imagery."
        },
        {
          "target": "非虛構紀錄片之力量在於真實，佢摒棄咗一切虛假煽情，以克制之視角展現出生活本身之厚重與力量。",
          "reading": "fei1 heoi1 gau3 gei2 luk6 pin3*2 zi1 lik6 loeng6 zoi6 jyu1 zan1 sat6, keoi5 bing2 kai3 zo2 jat1 cai3 heoi1 gaa2 sin3 cing4, ji5 hak1 zai3 zi1 si6 gok3 zin2 jin6 ceot1 sang1 wut6 bun2 san1 zi1 hau5 zung6 jyu5 lik6 loeng6. [fei˥ hɵy˥ kɐu˧ kei˧˥ lʊk̚˨ pʰiːn˧˥ tsiː˥ lɪk̚˨ lœːŋ˨ tsɔːi˨ jyː˥ tsɐn˥ sɐt̚˨, kʰɵy˩˧ pɪŋ˧˥ kʰɐi˧ tsɔː˧˥ jɐt̚˥ tsʰɐi˨˩ hɵy˥ kaː˧˥ siːn˧ tsʰɪŋ˨˩, jiː˩˧ hɐk̚˥ tsai˧ tsiː˥ siː˨ kɔːk̚˧ tsiːn˧˥ jiːn˨ tsʰɵt̚˥ sɐŋ˥ wuːt̚˨ puːn˧˥ sɐn˥ tsiː˥ hɐu˧˥ tsʊŋ˨ jyː˩˧ lɪk̚˨ lœːŋ˨] (FAY-HOEY-GAU GAY-LUK-PEEN JEE LIK-LEUNG JOY-YUE JUN-SUT, KOEY BING-KAI-JOR YUT-CHY HOEY-GAH SEEN-CHING, YEE HUK-JAI JEE SEE-GOK JEEN-YEEN-CHUT SUNG-WOOT BOON-SUN JEE HAU-JOONG YUE LIK-LEUNG)",
          "translation": "The power of non-fiction documentaries lies in authenticity; abandoning all false melodrama, it demonstrates the depth and power of life itself through a restrained perspective."
        },
        {
          "target": "張經緯導演之《音樂人生》透過對少年音樂天才之深度跟拍，引發大眾對教育體制與人生價值之深刻反思。",
          "reading": "zoeng1 ging1 wai5 dou6 jin2 zi1 \"jam1 ngok6 jan4 sang1\" tau3 gwo3 deoi3 siu3 nin4 jam1 ngok6 tin1 coi4 zi1 sam1 dou6 gan1 paak3, jan5 faat3 daai6 zung3 deoi3 gaau3 juk6 tai2 zai3 jyu5 jan4 sang1 gaa3 zik6 zi1 sam1 hak1 faan2 si1. [tsœːŋ˥ kɪŋ˥ wɐi˩˧ tou˨ jiːn˧˥ tsiː˥ \"jɐm˥ ŋɔːk̚˨ jɐn˨˩ sɐŋ˥\" tʰɐu˧ kʷɔː˧ tɵy˧ siːu˧ niːn˨˩ jɐm˥ ŋɔːk̚˨ tʰiːn˥ tsʰɔːi˨˩ tsiː˥ sɐm˥ tou˨ kɐn˥ pʰaːk̚˧, jɐn˩˧ faːt̚˧ taːi˨ tsʊŋ˧ tɵy˧ kaːu˧ jʊk̚˨ tʰɐi˧˥ tsai˧ jyː˩˧ jɐn˨˩ sɐŋ˥ kaː˧ tsɪk̚˨ tsiː˥ sɐm˥ hɐk̚˥ faːn˧˥ siː˥] (JEUNG GING-WAI DOU-YEEN JEE \"YUM-NGOK YUN-SUNG\" TAU-GWOR DEOY SIU-NEEN YUM-NGOK TEEN-CHOY JEE SUM-DOU GUN-PAAK, YUN-FAHT DY-JOONG DEOY GAU-YUK TY-JAI YUE YUN-SUNG GAH-JIK JEE SUM-HUK FAHN-SEE)",
          "translation": "Director Cheung King-wai's 'KJ: Music and Life', through deep ongoing filming of a young musical prodigy, provoked profound reflections among the public regarding the educational system and the values of life."
        }
      ],
      "mnemonics": [
        "【非虛構紀錄】十年追蹤見證真，拒絕煽情寫平民；音樂人生時代記，人文溫度最動人！"
      ],
      "culturalNotes": [
        "香港國際電影節（HKIFF）設有專門的華語紀錄片競賽單元，多年來發掘並資助了大量記錄基層勞工、老舊街區變遷及少數族裔生活經驗的優秀紀錄片作品。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【紀錄片流派】強調攝影機盡可能不干預被拍攝對象、客觀真實記錄事件自然生長之紀錄片流派係：",
          "options": [
            "直接電影 (Direct Cinema / Zik6 zip3 din6 jing2)",
            "荷里活特效科幻片) (Context: 香港紀錄片與社會現實關懷：「時代見證」、「真實呈現」、「人文溫度」 ()",
            "舞台情景喜劇) (Context: 香港紀錄片與社會現實關懷：「時代見證」、「真實呈現」、「人文溫度」 ()",
            "劇本虛構電影) (Context: 香港紀錄片與社會現實關懷：「時代見證」、「真實呈現」、「人文溫度」 ()"
          ],
          "answerIndex": 0,
          "explanation": "「直接電影（Direct Cinema）」主張客觀觀察，被譽為紀錄片真實性之核心範式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【影壇名作】榮獲金馬獎最佳紀錄片、由張經緯導演深入跟拍音樂少年黃家正成長困惑之香港名片係：",
          "options": [
            "《音樂人生》 (KJ: Music and Life / Jam1 ngok6 jan4 sang1)",
            "《阿凡達》) (Context: 香港紀錄片與社會現實關懷：「時代見證」、「真實呈現」、「人文溫度」 ()",
            "《變形金剛》) (Context: 香港紀錄片與社會現實關懷：「時代見證」、「真實呈現」、「人文溫度」 ()",
            "《復仇者聯盟》) (Context: 香港紀錄片與社會現實關懷：「時代見證」、「真實呈現」、「人文溫度」 ()"
          ],
          "answerIndex": 0,
          "explanation": "《音樂人生》為香港紀錄片史上口碑與藝術成就極高之經典代表作。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【非虛構價值】優秀紀錄片之所以具備跨越時空之震撼力量，其最根本之核心價值在於：",
          "options": [
            "真實記錄社會現實、作為時代見證並傳遞深厚之人文關懷 (Authentic witness of era & profound humanist empathy)",
            "純粹追求商業票房最大化) (Context: 香港紀錄片與社會現實關懷：「時代見證」、「真實呈現」、「人文溫度」 ()",
            "完全脫離現實虛構劇情) (Context: 香港紀錄片與社會現實關懷：「時代見證」、「真實呈現」、「人文溫度」 ()",
            "使用炫目電腦特效掩蓋內容空洞) (Context: 香港紀錄片與社會現實關懷：「時代見證」、「真實呈現」、「人文溫度」 ()"
          ],
          "answerIndex": 0,
          "explanation": "真實呈現歷史變遷與人文關懷係紀錄片最核心之精神內核。"
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
    "title": "串流平台時代之影視轉型與跨國合拍片策略：「網絡串流」、「合拍片」、「IP孵化」 (Streaming Era & Coproductions)",
    "level": "C1",
    "objective": "掌握全球網絡串流平台（Streaming Platforms）興起背景下香港影視產業轉型、跨國跨區域合拍片策略、IP文創孵化及市場分眾發行話語體系。",
    "presentation": {
      "explanation": "面對Netflix、Disney+等流媒體巨頭崛起及全球影視消費習慣變革，香港影視業展現出強大之適應力與創新轉型：\n\n一、流媒體與影視產業轉型詞彙：\n１．「網絡串流平台與線上點播」（cyun3 lau4 ping4 toi4 / Over-The-Top OTT）：\n- 打破傳統院線排片壟斷，提供全球同步分發與個性化算法推薦。\n２．「內地與香港合拍片機制」（hap6 paak3 pin3*2 / CEPA Coproductions）：\n- 整合香港頂尖主創製作實力與內地廣闊市場規模，打造大製作商業巨片。\n３．「原創IP深度孵化」（fu1 faa3）：\n- 圍繞優質文學、動漫或影視IP進行電影、劇集、周邊商品之全產業鏈開發。\n\n二、市場策略與發行評析：\n- 「院網協同發行」（jyun6*2 mong5 hip3 tung4）：院線上映與串流上線之窗口期優化。\n- 「精準分眾市場」（fan1 zung3 si5 coeng4 / Niche Targeting）：針對特定青年社群或海外華人受眾定製小成本精品劇集。",
      "examples": [
        {
          "target": "香港青年導演透過網絡串流平台將本土精品劇集推向全球一百多個國家，實現跨地域文化傳播。",
          "reading": "hoeng1 gong2 nin4 hing1 dou6 jin2 tau3 gwo3 mong5 lok3 cyun3 lau4 ping4 toi4 zoeng1 bun2 tou2 zing1 ban2 kek6 zaap6 teoi1 hoeng3 cyun4 kau4 jat1 baak3 do1 go3 gwok3 gaa1, sat6 jin6 kwaa1 dei6 wik6 man4 faa3 cyun4 bo3. [hœːŋ˥ kʷɔːŋ˧˥ niːn˨˩ hɪŋ˥ tou˨ jiːn˧˥ tʰɐu˧ kʷɔː˧ mɔːŋ˩˧ lɔːk̚˧ tsʰyːn˧ lɐu˨˩ pʰɪŋ˨˩ tʰɔːi˨˩ tsœːŋ˥ puːn˧˥ tʰou˩˧ tsɪŋ˥ pʰɐn˧˥ kʰɪk̚˨ tsaːp̚˨ tʰɵy˥ hœːŋ˧ tsʰyːn˨˩ kʰɐu˨˩ jɐt̚˥ paːk̚˧ tɔː˥ kɔː˧ kʷɔːk̚˧ kaː˥, sɐt̚˨ jiːn˨ kʷʰaː˥ tei˨ wɪk̚˨ mɐn˨˩ faː˧ tsʰyːn˨˩ pɔː˧] (HEUNG-GONG NEEN-HING DOU-YEEN TAU-GWOR MONG-LOK CHUEN-LAU PING-TOY JEUNG BOON-TOU JING-BUN KEK-JAHP TOEY-HEUNG CHUEN-KAU YUT-BAAK DOH GOH GWOK-GAH, SUT-YEEN KWAH-DAY-WIK MUN-FAH CHUEN-BOH)",
          "translation": "Hong Kong young directors pushed local boutique drama series to more than a hundred countries globally through online streaming platforms, achieving cross-regional cultural dissemination."
        },
        {
          "target": "合拍片模式有效整合咗兩地資金、技術同人才優勢，同時亦考驗主創團隊如何平衡本土特色與宏觀市場需求。",
          "reading": "hap6 paak3 pin3*2 mou4 sik1 jau6 haau6 zing2 hap6 zo2 loeng5 dei6 zi1 gam1, gei6 seot6 tung4 jan4 coi4 jau1 sai3, tung4 si4 jik6 haau2 jim6 zyu2 cong3 tyun4 deoi6*2 jyu4 ho4 ping4 hang4 bun2 tou2 dak6 sik1 jyu5 wang4 gun1 si5 coeng4 seoi1 kau4. [hɐp̚˨ pʰaːk̚˧ pʰiːn˧˥ mouou˨˩ sɪk̚˥ jɐu˨ haːu˨ tsɪŋ˧˥ hɐp̚˨ tsɔː˧˥ lœːŋ˩˧ tei˨ tsiː˥ kɐm˥, kei˨ sɵt̚˨ tʰʊŋ˨˩ jɐn˨˩ tsʰɔːi˨˩ jɐu˥ sɐi˧, tʰʊŋ˨˩ siː˨˩ jik̚˨ haːu˧˥ jiːm˨ tsyː˧˥ tsʰɔːŋ˧ tʰyːn˨˩ tɵy˧˥ jyː˨˩ hɔː˨˩ pʰɪŋ˨˩ hɐŋ˨˩ puːn˧˥ tʰou˩˧ tɐk̚˨ sɪk̚˥ jyː˩˧ wɐŋ˨˩ kuːn˥ siː˩˧ tsʰœːŋ˨˩ sɵy˥ kʰɐu˨˩] (HUP-PAAK-PEEN MOU-SIK YAU-HAU JING-HUP-JOR LEUNG-DAY JEE-GUM, GAY-SUT TOONG YUN-CHOY YAU-SY, TOONG-SEE YIK HAU-YEEM JUE-CHONG TUEN-DEOY YUE-HOH PING-HAHNG BOON-TOU DUK-SIK YUE WUNG-GOON SEE-CHEUNG SOEY-KAU)",
          "translation": "The coproduction model effectively integrated capital, technical, and talent advantages from both regions, while testing how creative teams balance local characteristics with macroscopic market demands."
        },
        {
          "target": "深耕原創IP孵化同跨界衍生開發，係影視產業在數字經濟浪潮中提升核心競爭力之必由之路。",
          "reading": "sam1 gang1 jyun4 cong3 IP fu1 faa3 tung4 kwaa1 gaai3 jin2 sang1 hoi1 faat3, hai6 jing2 si6 caan2 jip6 zoi6 sou3 geoi3 ging1 zai3 long6 ciu4 zung1 tai4 sing1 hat6 sam1 ging3 zaang1 lik6 zi1 bit1 jau4 zi1 lou6. [sɐm˥ kɐŋ˥ jyːn˨˩ tsʰɔːŋ˧ IP fuː˥ faː˧ tʰʊŋ˨˩ kʷʰaː˥ kaːi˧ jiːn˧˥ sɐŋ˥ hɔːi˥ faːt̚˧, hɐi˨ jɪŋ˧˥ siː˨ tsʰaːn˧˥ jiːp̚˨ tsɔːi˨ sou˧ kɵy˧ kɪŋ˥ tsai˧ lɔːŋ˨ ciːu˨˩ tsʊŋ˥ tʰɐi˨˩ sɪŋ˥ hɐt̚˨ sɐm˥ kɪŋ˧ tsaːŋ˥ lɪk̚˨ tsiː˥ piːt̚˥ jɐu˨˩ tsiː˥ lou˨] (SUM-GUNG YUEN-CHONG IP FOO-FAH TOONG KWAH-GY YEEN-SUNG HOI-FAHT, HY YING-SEE CHAAN-YEEP JOY SOU-GOEY GING-JAI LONG-CHIU JOONG TY-SING HUT-SUM GING-JAANG-LIK JEE BEET-YAU JEE LOU)",
          "translation": "Deeply cultivating original IP incubation and cross-industry derivative development is the essential path for the film and television industry to elevate core competitiveness amidst the digital economy wave."
        }
      ],
      "mnemonics": [
        "【影視轉型訣】網絡串流破藩籬，合拍融合兩地奇；原創IP深孵化，分眾市場創先機！"
      ],
      "culturalNotes": [
        "香港特區政府設立了『電影發展基金』（FDF），資助中小型製作及青年導演首部劇情電影計劃（FFFI），培育出了如《手捲煙》、《白日之下》、《年少日記》等一系列斬獲國際大獎的本土新銳力作。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【影視分發】打破傳統實體電影院排片限制、透過互聯網向全球用戶提供即時影音點播之平台形式稱為：",
          "options": [
            "網絡串流平台 (Streaming Platforms / Cyun3 lau4 ping4 toi4)",
            "錄影帶租賃小店) (Context: 串流平台時代之影視轉型與跨國合拍片策略：「網絡串流」、「合拍片」、「I)",
            "露天黑白放映隊) (Context: 串流平台時代之影視轉型與跨國合拍片策略：「網絡串流」、「合拍片」、「I)",
            "實體光盤售賣攤) (Context: 串流平台時代之影視轉型與跨國合拍片策略：「網絡串流」、「合拍片」、「I)"
          ],
          "answerIndex": 0,
          "explanation": "「網絡串流平台（Streaming Platforms）」為數字時代全球影視分發之主導形態。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【產業模式】香港電影製作團隊與內地資本及市場深度合作、在CEPA框架下共同投資拍攝之電影類型稱為：",
          "options": [
            "合拍片 (Coproductions / Hap6 paak3 pin3)",
            "純個人家庭錄像) (Context: 串流平台時代之影視轉型與跨國合拍片策略：「網絡串流」、「合拍片」、「I)",
            "未經授權盜版片) (Context: 串流平台時代之影視轉型與跨國合拍片策略：「網絡串流」、「合拍片」、「I)",
            "單純進口引進片) (Context: 串流平台時代之影視轉型與跨國合拍片策略：「網絡串流」、「合拍片」、「I)"
          ],
          "answerIndex": 0,
          "explanation": "「合拍片」為二十一世紀華語電影產業規模化與跨地域合作之核心模式。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【文創戰略】以核心文學或動漫角色世界觀為基礎、進行全產業鏈多維度影視與衍生產品開發之過程稱為：",
          "options": [
            "IP孵化與衍生開發 (IP Incubation & Derivative Development)",
            "隨意抄襲翻拍) (Context: 串流平台時代之影視轉型與跨國合拍片策略：「網絡串流」、「合拍片」、「I)",
            "一次性短期投機) (Context: 串流平台時代之影視轉型與跨國合拍片策略：「網絡串流」、「合拍片」、「I)",
            "徹底封存版權) (Context: 串流平台時代之影視轉型與跨國合拍片策略：「網絡串流」、「合拍片」、「I)"
          ],
          "answerIndex": 0,
          "explanation": "「IP孵化」為文創產業實現長期品牌價值積累與商業變現之重要戰略。"
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
    "title": "高階影評寫作、美學思辨與電影哲學：「互文性」、「視聽符號學」、「解構主義」 (Film Philosophy & Criticism)",
    "level": "C1",
    "objective": "掌握高階電影評論寫作、視聽符號學（Film Semiotics）、互文性理論（Intertextuality）及解構主義哲學在當代影視美學批判中之專業思辨建構。",
    "presentation": {
      "explanation": "撰寫高水平電影評論與學術美學專論，需要熟練運用當代文化哲學與視聽符號學之批判工具：\n\n一、當代電影哲學核心批評框架：\n１．「互文性與典故互涉」（wu6 man4 sing3 / Intertextuality）：\n- 電影文本與經典文學、歷史事件、其他名作之間之深層對話與意象借用。\n２．「視聽符號學分析」（si6 ting1 fu4 hou4 hok6 / Film Semiotics）：\n- 解析鏡頭構圖、色彩隱喻、道具設置中之能指（Signifier）與所指（Signified）。\n３．「解構主義與元電影」（gaai2 kau3 zyu2 ji6 / Deconstruction & Meta-cinema）：\n- 戲仿傳統類型片套路，打破「第四面牆」，引導觀眾反思影像自身的虛構性本質。\n\n二、高階文藝批評評述話語：\n- 「立意深遠，思想厚度」（laap6 ji3 sam1 jyun5）：非停留於表面娛樂，直擊人性幽微與時代命題。\n- 「解構而不流於低俗，創新而不失其本色」（gaai2 kau3 ji4 bat1 lau4 jyu1 dai1 zuk6）。",
      "examples": [
        {
          "target": "呢篇高階影評運用視聽符號學理論，深刻剖析咗電影鏡頭中光影明暗與角色身分迷失之間之深層符號對應關係。",
          "reading": "ni1 pin1 gou1 kap1 jing2 ping4 wan6 jung6 si6 ting1 fu4 hou4 hok6 lei5 leon6, sam1 hak1 fau2 sik1 zo2 din6 jing2 geng3 tau4*2 zung1 gwong1 jing2 ming4 am3 jyu5 gok3 sik1 san1 fan6*2 mai4 sat1 zi1 gaan1 zi1 sam1 caang4 fu4 hou4 deoi3 jing3 gwaan1 hai6. [niː˥ pʰiːn˥ kou˥ kʰɐp̚˥ jɪŋ˧˥ pʰɪŋ˨˩ wɐn˨ jʊŋ˨ siː˨ tʰɪŋ˥ fuː˨˩ hou˨˩ hɔːk̚˨ lei˩˧ lœːn˨, sɐm˥ hɐk̚˥ fɐu˧˥ sɪk̚˥ tsɔː˧˥ tiːn˨ jɪŋ˧˥ kɪŋ˧ tʰɐu˨˩ tsʊŋ˥ kʷɔːŋ˥ jɪŋ˧˥ mɪŋ˨˩ ɐm˧ jyː˩˧ kɔːk̚˧ sɪk̚˥ sɐn˥ fɐn˨ mɐi˨˩ sɐt̚˥ tsiː˥ kaːn˥ tsiː˥ sɐm˥ tsʰaːŋ˨˩ fuː˨˩ hou˨˩ tɵy˧ jɪŋ˧ kʷaːn˥ hɐi˨] (NEE-PEEN GOU-KUP YING-PING WUN-YOONG SEE-TING FOO-HOU-HOK LEY-LEON, SUM-HUK FAU-SIK-JOR DEEN-YING GENG-TAU JOONG GWONG-YING MING-UM YUE GOK-SIK SUN-FUN MY-SUT JEE-GAHN JEE SUM-CHAANG FOO-HOU DEOY-YING GWAHN-HY)",
          "translation": "This advanced film critique utilized film semiotics theory to profoundly analyze the deep symbolic correspondence between light-and-shadow contrast in the cinematic frames and the characters' identity loss."
        },
        {
          "target": "影片充滿咗豐富之互文性致敬，將古典文學詩詞與現代警匪動作場面熔於一爐，展現出極高之文化思想厚度。",
          "reading": "jing2 pin3*2 cung1 mun5 zo2 fung1 fu3 zi1 wu6 man4 sing3 zi3 ging3, zoeng1 gu2 din2 man4 hok6 si1 ci4 jyu5 jin6 doi6 ging2 fei2 dung6 zok3 coeng4 min6*2 jung4 jyu1 jat1 lou4, zin2 jin6 ceot1 gik6 gou1 zi1 man4 faa3 si1 soeng2 hau5 dou6. [jɪŋ˧˥ pʰiːn˧˥ tsʰʊŋ˥ muːn˩˧ tsɔː˧˥ fʊŋ˥ fuː˧ tsiː˥ wuː˨ mɐn˨˩ sɪŋ˧ tsiː˧ kɪŋ˧, tsœːŋ˥ kuː˧˥ tiːn˧˥ mɐn˨˩ hɔːk̚˨ siː˥ tsʰiː˨˩ jyː˩˧ jiːn˨ tɔːi˨ kɪŋ˧˥ fei˧˥ tʊŋ˨ tsɔːk̚˧ tsʰœːŋ˨˩ miːn˨ jʊŋ˨˩ jyː˥ jɐt̚˥ lou˨˩, tsiːn˧˥ jiːn˨ tsʰɵt̚˥ kɪk̚˨ kou˥ tsiː˥ mɐn˨˩ faː˧ siː˥ sœːŋ˧˥ hɐu˧˥ tou˨] (YING-PEEN CHOONG-MOON-JOR FOONG-FOO JEE WOO-MUN-SING JEE-GING, JEUNG GOO-DEEN MUN-HOK SEE-CHEE YUE YEEN-DOY GING-FAY DOONG-JOK CHEUNG-MEEN YOONG YUE YUT-LOU, JEEN-YEEN-CHUT GIK-GOU JEE MUN-FAH SEE-SEUNG HAU-DOU)",
          "translation": "The film is replete with rich intertextual homages, blending classical literary poetry and modern crime action scenes in one furnace, demonstrating immense cultural and philosophical depth."
        },
        {
          "target": "導演透過解構傳統英雄主義神話，引導觀眾直面人性在道德灰色地帶之抉擇困境，立意深遠。",
          "reading": "dou6 jin2 tau3 gwo3 gaai2 kau3 cyun4 tung4 jing1 hung4 zyu2 ji6 san4 waa6, jan5 dou6 gun3 zung3 zik6 min6 jan4 sing3 zoi6 dou6 dak1 fui1 sik1 dei6 daai3 zi1 kyut3 zaak6 kwan3 ging2, laap6 ji3 sam1 jyun5. [tou˨ jiːn˧˥ tʰɐu˧ kʷɔː˧ kaːi˧˥ kʰɐu˧ tsʰyːn˨˩ tʰʊŋ˨˩ jɪŋ˥ hʊŋ˨˩ tsyː˧˥ jiː˨ sɐn˨˩ waː˨, jɐn˩˧ tou˨ kuːn˧ tsʊŋ˧ tsik̚˨ miːn˨ jɐn˨˩ sɪŋ˧ tsɔːi˨ tou˨ tɐk̚˥ fuːi˥ sɪk̚˥ tei˨ taːi˧ tsiː˥ kʰyːt̚˧ tsaːk̚˨ kʰwɐn˧ kɪŋ˧˥, laːp̚˨ jiː˧ sɐm˥ jyːn˩˧] (DOU-YEEN TAU-GWOR GAI-KAU CHUEN-TOONG YING-HOONG JUE-YEE SUN-WAH, YUN-DOU GOON-JOONG JIK-MEEN YUN-SING JOY DOU-DUK FOOY-SIK DAY-DY JEE KUET-JAAK KWAN-GING, LAHP-YEE SUM-YUEN)",
          "translation": "By deconstructing the traditional myth of heroism, the director led the audience to confront the dilemma of human choices in moral gray areas, with profound and far-reaching thematic resonance."
        }
      ],
      "mnemonics": [
        "【電影哲學訣】視聽符號顯幽微，互文引申意境飛；解構英雄觀本質，立意深遠天下知！"
      ],
      "culturalNotes": [
        "香港電影評論學會（HKFCS）每年主辦的影評人評獎，堅持純粹的專業美學標準與獨立批判精神，成為華語影壇公認最具專業權威與學術信譽的專業獎項之一。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【批評理論】在電影評論中，用以分析影片如何與其他經典文學名著或影視文本產生跨時空對話與引申之理論概念係：",
          "options": [
            "互文性 (Intertextuality / Wu6 man4 sing3)",
            "完全抄襲) (Context: 高階影評寫作、美學思辨與電影哲學：「互文性」、「視聽符號學」、「解構主)",
            "毫無關聯) (Context: 高階影評寫作、美學思辨與電影哲學：「互文性」、「視聽符號學」、「解構主)",
            "偶然巧合) (Context: 高階影評寫作、美學思辨與電影哲學：「互文性」、「視聽符號學」、「解構主)"
          ],
          "answerIndex": 0,
          "explanation": "「互文性（Intertextuality）」為當代文藝理論中揭示文本間對話與文化引申之核心範式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【符號分析】將電影中的鏡頭、光線、色彩與道具作為具備特定隱喻含義之符號體系進行嚴密剖析之學術方法係：",
          "options": [
            "視聽符號學 (Film Semiotics / Si6 ting1 fu4 hou4 hok6)",
            "隨意主觀猜謎) (Context: 高階影評寫作、美學思辨與電影哲學：「互文性」、「視聽符號學」、「解構主)",
            "單純八卦緋聞) (Context: 高階影評寫作、美學思辨與電影哲學：「互文性」、「視聽符號學」、「解構主)",
            "票房商業統計) (Context: 高階影評寫作、美學思辨與電影哲學：「互文性」、「視聽符號學」、「解構主)"
          ],
          "answerIndex": 0,
          "explanation": "「視聽符號學（Film Semiotics）」為電影美學分析中精確解讀影像深層隱喻之科學工具。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【影評高度】一篇具備高度學術價值與思想深度之高階電影評論，其核心評價維度應聚焦於：",
          "options": [
            "視聽語言創新性、思想哲學厚度及對人性與時代命題之深刻剖析 (Audiovisual innovation, philosophical depth & profound inquiry into humanity & era)",
            "單純宣洩個人追星情緒) (Context: 高階影評寫作、美學思辨與電影哲學：「互文性」、「視聽符號學」、「解構主)",
            "只複述電影官方劇情簡介) (Context: 高階影評寫作、美學思辨與電影哲學：「互文性」、「視聽符號學」、「解構主)",
            "完全按照商業利益評分) (Context: 高階影評寫作、美學思辨與電影哲學：「互文性」、「視聽符號學」、「解構主)"
          ],
          "answerIndex": 0,
          "explanation": "高階影評依托嚴謹之視聽語法與思想厚度，實現對作品之哲學級審美昇華。"
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
    "title": "香港普通法體系之源流與憲制基礎：「判例法」、「遵循先例」、「司法獨立」 (Common Law & Stare Decisis)",
    "level": "C2",
    "objective": "掌握香港普通法（Common Law）傳統源流、基本法憲制地位、法院層級架構（終審法院、高等法院）及「遵循先例原則」（Stare Decisis）之專業法律粵語話語。",
    "presentation": {
      "explanation": "香港作為中國境內唯一實行普通法之司法管轄區，其法律體系具備高度嚴密之憲制與判例傳統：\n\n一、普通法體系與法治核心支柱：\n１．「普通法與衡平法體系」（pou2 tung1 faat3 jyu5 hang4 ping4 faat3 / Common Law & Equity）：\n- 以歷史判例為主要法律淵源，兼具確定性與因時制宜之靈活性。\n２．「遵循先例原則」（ceon4 ceon1 sin1 lai6 jyun4 zak1 / Stare Decisis）：\n- 下級法院必須嚴格受上級法院既有終審判決判例拘束（Binding Precedent）。\n３．「司法獨立與終審權」（si1 faat3 duk6 laap6 / Judicial Independence）：\n- 法官行使審判權不受任何行政或外部干預，香港終審法院（Court of Final Appeal）享有最終裁判權。\n\n二、法院層級架構（Court Hierarchy）：\n- 終審法院（Court of Final Appeal） -> 高等法院上訴法庭與原訟法庭（High Court） -> 區域法院（District Court） -> 裁判法院（Magistrates' Courts）。",
      "examples": [
        {
          "target": "香港特區法院依據基本法獨立行使審判權，嚴格貫徹遵循先例原則，確保司法判決之確定性與權威性。",
          "reading": "hoeng1 gong2 dak6 keoi1 faat3 jyun6*2 ji1 geoi3 gei1 bun2 faat3 duk6 laap6 hang4 sai2 sam2 pun3 kyun4, jim4 gaak3 gun3 cit3 ceon4 ceon1 sin1 lai6 jyun4 zak1, kok3 bou2 si1 faat3 pun3 kyut3 zi1 kok3 ding6 sing3 jyu5 kyun4 wai1 sing3. [hœːŋ˥ kʷɔːŋ˧˥ tɐk̚˨ kʰɵy˥ faːt̚˧ jyːn˨ jiː˥ kɵy˧ kei˥ puːn˧˥ faːt̚˧ tʊk̚˨ laːp̚˨ hɐŋ˨˩ sɐi˧˥ sɐm˧˥ pʰuːn˧ kʰyːn˨˩, jiːm˨˩ kaːk̚˧ kuːn˧ tsʰiːt̚˧ tsʰɵn˨˩ tsʰɵn˥ siːn˥ lɐi˨ jyːn˨˩ tsak̚˥, kʰɔːk̚˧ pou˧˥ siː˥ faːt̚˧ pʰuːn˧ kʰyːt̚˧ tsiː˥ kʰɔːk̚˧ tɪŋ˨ sɪŋ˧ jyː˩˧ kʰyːn˨˩ wɐi˥ sɪŋ˧] (HEUNG-GONG DUK-KOEY FAHT-YUEN YEE-GOEY GAY-BOON-FAHT DUK-LAHP HAHNG-SY SUM-POON-KUEN, YEEM-GAAK GOON-CHEET CHUEN-CHUEN SEEN-LY YUEN-JUK, KOK-BOU SEE-FAHT POON-KUET JEE KOK-DING-SING YUE KUEN-WAI-SING)",
          "translation": "The courts of the Hong Kong Special Administrative Region exercise judicial power independently according to the Basic Law, strictly implementing the doctrine of precedent to ensure the certainty and authority of judicial decisions."
        },
        {
          "target": "終審法院之權威判例對香港全體下級法院具有法律拘束力，為商業合約與人權保障樹立咗清晰之法律準繩。",
          "reading": "zung1 sam2 faat3 jyun6*2 zi1 kyun4 wai1 pun3 lai6 deoi3 hoeng1 gong2 cyun4 tai2 haa6 kap1 faat3 jyun6*2 geoi6 jau5 faat3 leot6 keoi1 cuk1 lik6, wai4 soeng1 jip6 hap6 joek3 jyu5 jan4 kyun4 bou2 zoeng3 syu6 laap6 zo2 cing1 sik1 zi1 faat3 leot6 zeon2 sang4. [tsʊŋ˥ sɐm˧˥ faːt̚˧ jyːn˨ tsiː˥ kʰyːn˨˩ wɐi˥ pʰuːn˧ lɐi˨ tɵy˧ hœːŋ˥ kʷɔːŋ˧˥ tsʰyːn˨˩ tʰɐi˧˥ haː˨ kʰɐp̚˥ faːt̚˧ jyːn˨ kɵy˨ jɐu˩˧ faːt̚˧ lɵt̚˨ kʰɵy˥ tsʰʊk̚˥ lɪk̚˨, wɐi˨˩ sœːŋ˥ jiːp̚˨ hɐp̚˨ jœːk̚˧ jyː˩˧ jɐn˨˩ kʰyːn˨˩ pou˧˥ tsœːŋ˧ syː˨ laːp̚˨ tsɔː˧˥ tsʰɪŋ˥ sɪk̚˥ tsiː˥ faːt̚˧ lɵt̚˨ tsɵn˧˥ sɐŋ˨˩] (JOONG-SUM FAHT-YUEN JEE KUEN-WAI POON-LY DEOY HEUNG-GONG CHUEN-TY HAH-KUP FAHT-YUEN GOEY-YAU FAHT-LEUT KOEY-CHUK-LIK, WAI SEUNG-YEEP HUP-YERK YUE YUN-KUEN BOU-JEUNG SUE-LAHP-JOR CHING-SIK JEE FAHT-LEUT JEON-SUNG)",
          "translation": "The authoritative precedents of the Court of Final Appeal possess binding legal force over all lower courts in Hong Kong, establishing a clear legal yardstick for commercial contracts and human rights protections."
        },
        {
          "target": "健全之普通法體系同崇高之法治聲譽，係香港鞏固國際金融、貿易同國際法律樞紐地位之最核心基石。",
          "reading": "gin6 cyun4 zi1 pou2 tung1 faat3 tai2 hai6 tung4 sung4 gou1 zi1 faat3 zi6 sing1 jyu6, hai6 hoeng1 gong2 gung2 gu3 gwok3 zai3 gam1 jung4, mau6 jik6 tung4 gwok3 zai3 faat3 leot6 syu1 nau2 dei6 wai6 zi1 zeoi3 hat6 sam1 gei1 sek6. [kiːn˨ tsʰyːn˨˩ tsiː˥ pʰou˧˥ tʰʊŋ˥ faːt̚˧ tʰɐi˧˥ hɐi˨ tʰʊŋ˨˩ sʊŋ˨˩ kou˥ tsiː˥ faːt̚˧ tsiː˨ sɪŋ˥ jyː˨, hɐi˨ hœːŋ˥ kʷɔːŋ˧˥ kʊŋ˧˥ kuː˧ kʷɔːk̚˧ tsai˧ kɐm˥ jʊŋ˨˩, mɐu˨ jɪk̚˨ tʰʊŋ˨˩ kʷɔːk̚˧ tsai˧ faat̚˧ lɵt̚˨ syː˥ nɐu˩˧ tei˨ wɐi˨ tsiː˥ tsɵy˧ hɐt̚˨ sɐm˥ kei˥ sɪk̚˨] (GEEN-CHUEN JEE POU-TOONG-FAHT TY-HY TOONG SOONG-GOU JEE FAHT-JEE SING-YUE, HY HEUNG-GONG GONG-GOO GWOK-JAI GUM-YOONG, MAU-YIK TOONG GWOK-JAI FAHT-LEUT SUE-NAU DAY-WAI JEE JEOY-HUT-SUM GAY-SEK)",
          "translation": "A robust common law system and high rule-of-law reputation constitute the most core cornerstone for Hong Kong to consolidate its status as an international financial, trading, and legal hub."
        }
      ],
      "mnemonics": [
        "【普通法典訣】遵循先例判案公，終審法院坐鎮中；司法獨立法治固，東方之珠百代隆！"
      ],
      "culturalNotes": [
        "香港終審法院座落於中環昃臣道前最高法院大樓（立法局大樓舊址）。根據《基本法》，香港終審法院可依法邀請其他普通法適用地區（如英國、澳大利亞、新西蘭）的資深法官參加審判，展現了香港普通法體系與全球普通法共同體的深度互聯。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【法律體系】普通法體系中下級法院在裁判同類案件時必須嚴格遵從上級法院既有判例之核心司法原則稱為：",
          "options": [
            "遵循先例原則 (Doctrine of Precedent / Stare Decisis)",
            "隨意自行裁量) (Context: 香港普通法體系之源流與憲制基礎：「判例法」、「遵循先例」、「司法獨立」)",
            "每年重新立法) (Context: 香港普通法體系之源流與憲制基礎：「判例法」、「遵循先例」、「司法獨立」)",
            "由當事人抽籤決定) (Context: 香港普通法體系之源流與憲制基礎：「判例法」、「遵循先例」、「司法獨立」)"
          ],
          "answerIndex": 0,
          "explanation": "「遵循先例原則（Stare Decisis）」為普通法體系確定性與連續性之最核心基石。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【司法架構】香港特區法院體系中享有最高司法審判權與最終裁決權之司法機構係：",
          "options": [
            "香港終審法院 (Hong Kong Court of Final Appeal / Zung1 sam2 faat3 jyun6)",
            "裁判法院) (Context: 香港普通法體系之源流與憲制基礎：「判例法」、「遵循先例」、「司法獨立」)",
            "勞資審裁處) (Context: 香港普通法體系之源流與憲制基礎：「判例法」、「遵循先例」、「司法獨立」)",
            "淫褻物品審裁處) (Context: 香港普通法體系之源流與憲制基礎：「判例法」、「遵循先例」、「司法獨立」)"
          ],
          "answerIndex": 0,
          "explanation": "香港終審法院為香港特別行政區最高級別之終審司法機構。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【憲制地位】香港特別行政區之所以能夠在中國境內保持普通法制度，其最根本之憲制法律依據係：",
          "options": [
            "《中華人民共和國香港特別行政區基本法》 (The Basic Law of the HKSAR)",
            "中世紀大憲章) (Context: 香港普通法體系之源流與憲制基礎：「判例法」、「遵循先例」、「司法獨立」)",
            "外國商會協議) (Context: 香港普通法體系之源流與憲制基礎：「判例法」、「遵循先例」、「司法獨立」)",
            "民間習慣法) (Context: 香港普通法體系之源流與憲制基礎：「判例法」、「遵循先例」、「司法獨立」)"
          ],
          "answerIndex": 0,
          "explanation": "《香港基本法》在憲制層面確立並保障了香港維持普通法制度與司法獨立。"
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
    "title": "法庭審訊程序與訴訟話語：「大律師與事務律師」、「無罪推定」、「舉證責任」 (Courtroom Procedure & Litigation)",
    "level": "C2",
    "objective": "掌握香港普通法訴訟程序（刑事 vs 民事）、法律專業分工（大律師/事務律師）、法庭辯護術語及刑事審訊黃金準則（無罪推定、排除合理懷疑）。",
    "presentation": {
      "explanation": "香港法庭審訊融合了普通法對抗制訴訟（Adversarial System）與嚴格之程序正義：\n\n一、律師專業雙軌分工體系：\n１．「大律師 / 大狀」（daai6 leot6 si1 / Barrister）：\n- 專門負責在各級法院出庭辯護與陳詞，資深者可獲委任為「資深大律師」（Senior Counsel SC）。\n２．「事務律師」（si6 mou6 leot6 si1 / Solicitor）：\n- 直接接洽客戶、草擬合約訴狀、處理非訴訟法律事務並指示大律師出庭。\n\n二、刑事審判核心原則與法庭辯護話語：\n１．「無罪推定原則」（mou4 zeoi6 teoi1 ding6 / Presumption of Innocence）：\n- 被告人在未經法庭依法定罪前一律假定為無罪。\n２．「舉證責任與舉證標準」（geoi2 zing3 zaak3 jam6）：\n- 刑事案中舉證責任全在控方，標準必須達到「無可置疑 / 排除合理疑點」（Beyond Reasonable Doubt）。\n３．「疑點利益歸於被告」（ji4 dim2 lei6 jik1 gwai1 jyu1 bei6 gou3）。",
      "examples": [
        {
          "target": "主控官如果未能提出確鑿證據排除合理疑點，法庭依據無罪推定原則必須判處被告罪名不成立。",
          "reading": "zyu2 hung3 gun1 jyu4 gwo2 mei6 nang4 tai4 ceot1 kok3 zok6 zing3 geui3 paai4 ceoi4 hap6 lei5 ji4 dim2, faat3 jyun6*2 ji1 geoi3 mou4 zeoi6 teoi1 ding6 jyun4 zak1 bit1 seoi1 pun3 cyu2 bei6 gou3 zeoi6 ming4 bat1 sing4 laap6. [tsyː˧˥ hʊŋ˧ kuːn˥ jyː˨˩ kʷɔː˧˥ mei˨ nɐŋ˨˩ tʰɐi˨˩ tsʰɵt̚˥ kʰɔːk̚˧ tsɔːk̚˨ tsɪŋ˧ kɵy˧ pʰaːi˨˩ tsʰɵy˨˩ hɐp̚˨ lei˩˧ jiː˨˩ tiːm˧˥, faːt̚˧ jyːn˨ jiː˥ kɵy˧ mouou˨˩ tsɵy˨ tʰɵy˥ tɪŋ˨ jyːn˨˩ tsak̚˥ piːt̚˥ sɵy˥ pʰuːn˧ tsʰyː˧˥ pei˨ kou˧ tsɵy˨ mɪŋ˨˩ pɐt̚˥ sɪŋ˨˩ laːp̚˨] (JUE-HOONG-GOON YUE-GWOR MAY-NUNG TY-CHUT KOK-JOK JING-GOEY PY-CHOEY HUP-LEY YEE-DEEM, FAHT-YUEN YEE-GOEY MOU-JEOY TOEY-DING YUEN-JUK BEET-SOEY POON-CHUE BAY-GOU JEOY-MING BUT-SING-LAHP)",
          "translation": "If the prosecutor fails to present solid evidence to eliminate reasonable doubt, the court must pronounce the defendant not guilty according to the presumption of innocence."
        },
        {
          "target": "資深大律師在法庭盤問證人環節抓住對方證詞之嚴重矛盾，成功推翻控方之關鍵指控。",
          "reading": "zi1 sam1 daai6 leot6 si1 zoi6 faat3 jyun6*2 pun4 man6 zing3 jan4 waan4 zit3 zaa2 zyu6 deoi3 fong1 zing3 ci4 zi1 jim4 zung6 maau4 teon5, sing4 gung1 teoi1 faan1 hung3 fong1 zi1 gwaan1 gin6 zi2 hung3. [tsiː˥ sɐm˥ taːi˨ lɵt̚˨ siː˥ tsɔːi˨ faːt̚˧ jyːn˨ pʰuːn˨˩ mɐn˨ tsɪŋ˧ jɐn˨˩ waːn˨˩ tsit̚˧ tsaː˧˥ tsyː˨ tɵy˧ fɔːŋ˥ tsɪŋ˧ tsʰiː˨˩ tsiː˥ jiːm˨˩ tsʊŋ˨ maːu˨˩ tʰɵn˩˧, sɪŋ˨˩ kʊŋ˥ tʰɵy˥ faːn˥ hʊŋ˧ fɔːŋ˥ tsiː˥ kʷaːn˥ kiːn˧ tsiː˧˥ hʊŋ˧] (JEE-SUM DY LEUT-SEE JOY FAHT-YUEN POON-MUN JING-YUN WAHN-JEET JAA-JUE DEOY-FONG JING-CHEE JEE YEEM-JOONG MAU-TEON, SING-GONG TOEY-FAHN HOONG-FONG JEE GWAHN-GEEN JEE-HOONG)",
          "translation": "The Senior Counsel seized upon serious contradictions in the opposing testimony during the witness cross-examination session, successfully overturning the prosecution's key accusation."
        },
        {
          "target": "事務律師為當事人搜集詳盡書面證供並指示出庭大律師，雙方緊密配合以維護當事人之法定權益。",
          "reading": "si6 mou6 leot6 si1 wai4 dong1 si6 jan4 sau2 zaap6 coeng4 zeon2 syu1 min6 zing3 gung1 bing6 zi2 si6 ceot1 ting4 daai6 leot6 si1, soeng1 fong1 gan2 mat6 pui3 hap6 ji5 wai4 wu6 dong1 si6 jan4 zi1 faat3 ding6 kyun4 jik1. [siː˨ mouou˨ lɵt̚˨ siː˥ wɐi˨˩ tɔːŋ˥ siː˨ jɐn˨˩ sɐu˧˥ tsaːp̚˨ tsʰœːŋ˨˩ tsɵn˧˥ syː˥ miːn˨ tsɪŋ˧ kʊŋ˥ pɪŋ˨ tsiː˧˥ siː˨ tsʰɵt̚˥ tʰɪŋ˨˩ taːi˨ lɵt̚˨ siː˥, sœːŋ˥ fɔːŋ˥ kɐn˧˥ mɐt̚˨ pʰuːi˧ hɐp̚˨ jiː˩˧ wɐi˨˩ wuː˨ tɔːŋ˥ siː˨ jɐn˨˩ tsiː˥ faːt̚˧ tɪŋ˨ kʰyːn˨˩ jɪk̚˨] (SEE-MOU LEUT-SEE WAI DONG-SEE-YUN SAU-JAHP CHEUNG-JEON SUE-MEEN JING-GONG BING JEE-SEE CHUT-TING DY LEUT-SEE, SEUNG-FONG GUN-MUT PUI-HUP YEE WAI-WOO DONG-SEE-YUN JEE FAHT-DING KUEN-YIK)",
          "translation": "The solicitor gathers detailed written evidence for the client and instructs the barrister appearing in court, the two sides collaborating closely to uphold the client's legal rights and interests."
        }
      ],
      "mnemonics": [
        "【法庭審訊訣】大狀出庭大律師，事務律師理卷書；無罪推定疑點益，排除懷疑正義居！"
      ],
      "culturalNotes": [
        "香港法律界保持了英國普通法的傳統分工。大律師（俗稱『大狀』）在法庭審訊時身著傳統黑色大律師袍並佩戴馬毛假髮（Wig），體現了法庭的莊嚴與法律面前人人平等的象徵意義。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【刑事原則】普通法刑事訴訟中，在法院依法審測定罪前將一切被告人假定為無罪之黃金原則係：",
          "options": [
            "無罪推定原則 (Presumption of Innocence / Mou4 zeoi6 teoi1 ding6)",
            "有罪推定) (Context: 法庭審訊程序與訴訟話語：「大律師與事務律師」、「無罪推定」、「舉證責任)",
            "先入為主定罪) (Context: 法庭審訊程序與訴訟話語：「大律師與事務律師」、「無罪推定」、「舉證責任)",
            "以口供為唯一依據) (Context: 法庭審訊程序與訴訟話語：「大律師與事務律師」、「無罪推定」、「舉證責任)"
          ],
          "answerIndex": 0,
          "explanation": "「無罪推定」為文明司法制度中保障人身權利與防止冤假錯案之底線基石。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【律師分工】在香港法律體系中，獲專門認可出庭進行高級別訴訟辯護與口頭陳詞之法律專家係：",
          "options": [
            "大律師 / 大狀 (Barrister / Daai6 leot6 si1)",
            "房地產經紀) (Context: 法庭審訊程序與訴訟話語：「大律師與事務律師」、「無罪推定」、「舉證責任)",
            "物業管理員) (Context: 法庭審訊程序與訴訟話語：「大律師與事務律師」、「無罪推定」、「舉證責任)",
            "會計記賬員) (Context: 法庭審訊程序與訴訟話語：「大律師與事務律師」、「無罪推定」、「舉證責任)"
          ],
          "answerIndex": 0,
          "explanation": "香港大律師（Barrister）專精於法庭訴訟、盤問與法律論辯。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【證明標準】在普通法刑事案件中，控方欲指控被告有罪所必須達到的最高法律證明標準係：",
          "options": [
            "排除合理疑點 (Beyond Reasonable Doubt / Paai4 ceoi4 hap6 lei5 ji4 dim2)",
            "五成可能性的蓋然性權衡) (Context: 法庭審訊程序與訴訟話語：「大律師與事務律師」、「無罪推定」、「舉證責任)",
            "主觀直覺懷疑) (Context: 法庭審訊程序與訴訟話語：「大律師與事務律師」、「無罪推定」、「舉證責任)",
            "媒體輿論傾向) (Context: 法庭審訊程序與訴訟話語：「大律師與事務律師」、「無罪推定」、「舉證責任)"
          ],
          "answerIndex": 0,
          "explanation": "「排除合理疑點（Beyond Reasonable Doubt）」為普通法刑事定罪之法定唯一證明門檻。"
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
    "title": "民商事法與國際仲裁：「違約損害賠償」、「謹慎責任」、「侵權行為」 (Commercial Law & Arbitration)",
    "level": "C2",
    "objective": "掌握普通法契約法（違約責任、損害賠償）、侵權法（謹慎責任、疏忽侵權）及香港作為亞太國際法律爭議解決與仲裁中心之高階商事法律話語。",
    "presentation": {
      "explanation": "香港作為國際商業樞紐，其發達之民商事法體系與國際仲裁服務享有全球極高聲譽：\n\n一、契約法與侵權法核心概念：\n１．「契約成立要件與違約救濟」（Contract Law & Breach）：\n- 要約與承諾（Offer & Acceptance）、對價（Consideration）。\n- 違約救濟：損害賠償金（Damages）、強制履行令（Specific Performance）、禁制令（Injunction）。\n２．「侵權法與謹慎責任」（Tort of Negligence & Duty of Care）：\n- 源自著名「鄰人原則」（Neighbor Principle）：行為人對可合理預見會受損害之第三方負有法定謹慎責任。\n\n二、國際商事仲裁與爭議解決（Arbitration & Mediation）：\n１．「香港國際仲裁中心」（HKIAC）：\n- 全球排名前列之仲裁機構，具備高效、中立、裁決可跨國執行之特點。\n２．「仲裁協議之獨立性」（Doctrine of Separability）：\n- 合約中之仲裁條款獨立於主合同存在。",
      "examples": [
        {
          "target": "合約一方因重大違約導致項目終止，守約方有權依法向法院申請強制履行令並申索相應之損害賠償。",
          "reading": "hap6 joek3 jat1 fong1 jan1 zung6 daai6 wai4 joek3 dou6 zi3 hong6 muk6 zung1 zi2, sau2 joek3 fong1 jau5 kyun4 ji1 faat3 hoeng3 faat3 jyun6*2 san1 cing2 koeng4 zai3 luk6 hang4 ling6 bing6 san1 sok3 soeng1 jing3 zi1 syun2 hoi6 pui4 soeng4. [hɐp̚˨ jœːk̚˧ jɐt̚˥ fɔːŋ˥ jɐn˥ tsʊŋ˨ taːi˨ wɐi˨ jœːk̚˧ tou˨ tsiː˧ hɔːŋ˨ mʊk̚˨ tsʊŋ˥ tsiː˧˥, sɐu˧˥ jœːk̚˧ fɔːŋ˥ jɐu˩˧ kʰyːn˨˩ jiː˥ faːt̚˧ hœːŋ˧ faːt̚˧ jyːn˨ sɐn˥ tsʰɪŋ˧˥ kʰœːŋ˨˩ tsai˧ lʊk̚˨ hɐŋ˨˩ lɪŋ˨ pɪŋ˨ sɐn˥ sɔːk̚˧ sœːŋ˥ jɪŋ˧ tsiː˥ syːn˧˥ hɔːi˨ pʰuːi˨˩ sœːŋ˨˩] (HUP-YERK YUT-FONG YUN JOONG-DY WAI-YERK DOU-JEE HOHNG-MUK JOONG-JEE, SAU-YERK FONG YAU-KUEN YEE-FAHT HEUNG FAHT-YUEN SUN-CHING KEUNG-JAI LUK-HAHNG LING BING SUN-SOK SEUNG-YING JEE SUEN-HOI PUI-SEUNG)",
          "translation": "Where one contracting party causes project termination through a material breach, the non-breaching party is entitled by law to apply to court for an order of specific performance and claim corresponding damages."
        },
        {
          "target": "專業人士在履行職責時如果違反合理之謹慎責任而造成客戶損失，將構成普通法下之疏忽侵權責任。",
          "reading": "zyun1 jip6 jan4 si6 zoi6 leoi5 hang4 zik1 zaak3 si4 jyu4 gwo2 wai4 faan2 hap6 lei5 zi1 gan2 san6 zaak3 jam6 ji4 zou6 sing4 haak3 wu6 syun2 sat1, zoeng1 gau3 sing4 pou2 tung1 faat3 haa6 zi1 so1 fat1 cam1 kyun4 zaak3 jam6. [tsyn˥ jiːp̚˨ jɐn˨˩ siː˨ tsɔːi˨ lɵy˩˧ hɐŋ˨˩ tsɪk̚˥ tsaːk̚˧ siː˨˩ jyː˨˩ kʷɔː˧˥ wɐi˨˩ faːn˨ hɐp̚˨ lei˩˧ tsiː˥ kɐn˧˥ sɐn˨ tsaːk̚˧ jɐm˨ jiː˨˩ tsou˨ sɪŋ˨˩ haːk̚˧ wuː˨ syːn˧˥ sɐt̚˥, tsœːŋ˥ kɐu˧ sɪŋ˨˩ pʰou˧˥ tʰʊŋ˥ faːt̚˧ haː˨ tsiː˥ sɔː˥ fɐt̚˥ tsʰɐm˥ kʰyːn˨˩ tsaːk̚˧ jɐm˨] (JUEN-YEEP YUN-SEE JOY LOEY-HAHNG JIK-JAAK SEE YUE-GWOR WAI-FAHN HUP-LEY JEE GUN-SUN JAAK-YUM YEE JOU-SING HAAK-WOO SUEN-SUT, JEUNG GAU-SING POU-TOONG-FAHT HAH JEE SOH-FUT CHUM-KUEN JAAK-YUM)",
          "translation": "If professionals breach their reasonable duty of care in fulfilling their duties causing customer losses, it will constitute liability for the tort of negligence under common law."
        },
        {
          "target": "香港國際仲裁中心憑藉中立專業之仲裁裁決，贏得全球跨國企業在跨境爭議解決中之高度信賴。",
          "reading": "hoeng1 gong2 gwok3 zai3 zung6 coi4 zung1 sam1 pang4 ze3 zung1 laap6 zyun1 jip6 zi1 zung6 coi4 coi4 kyut3, jeng4 dak1 cyun4 kau4 kwaa1 gwok3 kei5 jip6 zoi6 kwaa1 ging3 zang1 ji5 gaai2 kyut3 zung1 zi1 gou1 dou6 seon3 laai6. [hœːŋ˥ kʷɔːŋ˧˥ kʷɔːk̚˧ tsai˧ tsʊŋ˨ tsʰɔːi˨˩ tsʊŋ˥ sɐm˥ pʰɐŋ˨˩ tsɛː˧ tsʊŋ˥ laːp̚˨ tsyn˥ jiːp̚˨ tsiː˥ tsʊŋ˨ tsʰɔːi˨˩ tsʰɔːi˨˩ kʰyːt̚˧, jɛːŋ˨˩ tɐk̚˥ tsʰyːn˨˩ kʰɐu˨˩ kʷʰaː˥ kʷɔːk̚˧ kʰei˩˧ jiːp̚˨ tsɔːi˨ kʷʰaː˥ kɪŋ˧ tsaːŋ˥ jiː˩˧ kaːi˧˥ kʰyːt̚˧ tsʊŋ˥ tsiː˥ kou˥ tou˨ sɵn˧ laːi˨] (HEUNG-GONG GWOK-JAI JOONG-CHOY JOONG-SUM PUNG-JEH JOONG-LAHP JUEN-YEEP JEE JOONG-CHOY CHOY-KUET, YENG-DUK CHUEN-KAU KWAH-GWOK KAY-YEEP JOY KWAH-GING JAANG-YEE GAI-KUET JOONG JEE GOU-DOU SEON-LY)",
          "translation": "The Hong Kong International Arbitration Centre, through neutral and professional arbitral awards, has won the deep trust of multinational enterprises globally in cross-border dispute resolution."
        }
      ],
      "mnemonics": [
        "【商事侵權訣】違約賠償補損失，謹慎責任不可失；國際仲裁信譽好，跨國商貿展宏圖！"
      ],
      "culturalNotes": [
        "香港是《紐約公約》（Convention on the Recognition and Enforcement of Foreign Arbitral Awards）的適用地區，在香港作出的仲裁裁決可在全球超過160多個締約國獲得強制執行。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【侵權法】普通法中規定每個人在行動時對周圍可合理預見會受其行為影響之人負有防範損害義務之核心概念係：",
          "options": [
            "謹慎責任 (Duty of Care / Gan2 san6 zaak3 jam6)",
            "無限絕對責任) (Context: 民商事法與國際仲裁：「違約損害賠償」、「謹慎責任」、「侵權行為」 (C)",
            "互不相干免責) (Context: 民商事法與國際仲裁：「違約損害賠償」、「謹慎責任」、「侵權行為」 (C)",
            "純粹道德倡議) (Context: 民商事法與國際仲裁：「違約損害賠償」、「謹慎責任」、「侵權行為」 (C)"
          ],
          "answerIndex": 0,
          "explanation": "「謹慎責任（Duty of Care）」為侵權法中疏忽責任（Negligence）成立之核心前提。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【爭議解決】跨國商業交易中雙方約定由獨立中立之專業第三方機構作出具終局法律效力裁決之非訴訟爭議解決途徑係：",
          "options": [
            "國際商事仲裁 (International Commercial Arbitration / Gwok3 zai3 zung6 coi4)",
            "網上公開罵戰) (Context: 民商事法與國際仲裁：「違約損害賠償」、「謹慎責任」、「侵權行為」 (C)",
            "單方面武力威脅) (Context: 民商事法與國際仲裁：「違約損害賠償」、「謹慎責任」、「侵權行為」 (C)",
            "無休止街頭爭吵) (Context: 民商事法與國際仲裁：「違約損害賠償」、「謹慎責任」、「侵權行為」 (C)"
          ],
          "answerIndex": 0,
          "explanation": "「國際商事仲裁（Commercial Arbitration）」為全球商業貿易中首選之爭議解決機制。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【違約救濟】當金錢賠償不足以彌補受害方損失時，法院依據衡平法原則命令違約方必須按照原約定履行義務之司法命令稱為：",
          "options": [
            "強制履行令 (Specific Performance / Koeng4 zai3 luk6 hang4 ling6)",
            "罰款警告信) (Context: 民商事法與國際仲裁：「違約損害賠償」、「謹慎責任」、「侵權行為」 (C)",
            "撤銷法庭設立) (Context: 民商事法與國際仲裁：「違約損害賠償」、「謹慎責任」、「侵權行為」 (C)",
            "免除全部合同責任) (Context: 民商事法與國際仲裁：「違約損害賠償」、「謹慎責任」、「侵權行為」 (C)"
          ],
          "answerIndex": 0,
          "explanation": "「強制履行令（Specific Performance）」為普通法衡平法體系下極具約束力之違約特殊救濟手段。"
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
    "title": "法律草擬、雙語立法與法庭語言學：「法例詮釋條例」、「字義規則」、「雙語立法」 (Legal Drafting & Bilingual Legislation)",
    "level": "C2",
    "objective": "掌握香港雙語立法架構（中文與英文文本同具真準效力）、法例詮釋三大規則（字義規則、黃金規則、目的性詮釋法）及高階法律起草語法。",
    "presentation": {
      "explanation": "香港作為全球唯一建立成熟英漢雙語普通法體系之地區，其法律起草與法例詮釋具備極高之語言學嚴密性：\n\n一、雙語立法與法例文本效力（Bilingual Legislation）：\n１．「同具真準效力」（Equally Authentic）：\n- 根據《法定語文條例》，法例之英文本與中文本具有同等法律效力。\n２．雙語法例對照與釋義協調：\n- 遇有歧義時，參照《釋義及通則條例》（香港法例第1章）探求立法真意。\n\n二、法例司法詮釋三大經典規則（Statutory Interpretation）：\n１．「字義規則」（Literal Rule）：\n- 按照法律文本字面通常含義進行嚴格解釋，不作推測擴展。\n２．「黃金規則」（Golden Rule）：\n- 若字面解釋會導致明顯荒謬之結果，法官可對詞義作適度修正。\n３．「目的性詮釋法 / 補救原則」（Purposive Approach / Mischief Rule）：\n- 依據立法的整體宗旨與社會目的進行解釋，填補法律漏洞。",
      "examples": [
        {
          "target": "香港法例之中文本與英文本同具真準效力，法官在審訊時須確保兩種語言文本在法律涵義上之高度一致性。",
          "reading": "hoeng1 gong2 faat3 lai6 zi1 zung1 man4 bun2 jyu5 jing1 man4 bun2 tung4 geoi6 zan1 zeon2 haau6 lik6, faat3 gun1 zoi6 sam2 seon3 si4 seoi1 kok3 bou2 loeng5 zung3 jyu5 jin4 man4 bun2 zoi6 faat3 leot6 haam4 ji3 soeng6 zi1 gou1 dou6 jat1 zi3 sing3. [hœːŋ˥ kʷɔːŋ˧˥ faːt̚˧ lɐi˨ tsiː˥ tsʊŋ˥ mɐn˨˩ puːn˧˥ jyː˩˧ jɪŋ˥ mɐn˨˩ puːn˧˥ tʰʊŋ˨˩ kɵy˨ tsɐn˥ tsɵn˧˥ haːu˨ lɪk̚˨, faːt̚˧ kuːn˥ tsɔːi˨ sɐm˧˥ sɵn˧ siː˨˩ sɵy˥ kʰɔːk̚˧ pou˧˥ lœːŋ˩˧ tsʊŋ˧ jyuː˩˧ jiːn˨˩ mɐn˨˩ puːn˧˥ tsɔːi˨ faːt̚˧ lɵt̚˨ haːm˨˩ jiː˧ sœːŋ˨ tsiː˥ kou˥ tou˨ jɐt̚˥ tsiː˧ sɪŋ˧] (HEUNG-GONG FAHT-LY JEE JOONG-MUN-BOON YUE YING-MUN-BOON TOONG-GOEY JUN-JEON HAU-LIK, FAHT-GOON JOY SUM-SEON SEE SOEY KOK-BOU LEUNG-JOONG YUE-YEEN MUN-BOON JOY FAHT-LEUT HAHM-YEE SEUNG JEE GOU-DOU YUT-JEE-SING)",
          "translation": "The Chinese and English texts of Hong Kong ordinances are equally authentic; judges during trials must ensure the high consistency of the two linguistic texts in legal meaning."
        },
        {
          "target": "法院在解釋法例條文時採用目的性詮釋法，以貫徹立法原意並防止機械執法損害社會公平正義。",
          "reading": "faat3 jyun6*2 zoi6 gaai2 sik1 faat3 lai6 tiu4 man4 si4 coi2 jung6 muk6 dik1 sing3 kyun4 sik1 faat3, ji5 gun3 cit3 laap6 faat3 jyun4 ji3 bing6 fong4 fong4 gei1 haai6 zap1 faat3 syun2 hoi6 se5 wui6*2 gung1 ping4 zing3 ji6. [faːt̚˧ jyːn˨ tsɔːi˨ kaːi˧˥ sɪk̚˥ faːt̚˧ lɐi˨ tʰiːu˨˩ mɐn˨˩ siː˨˩ tsʰɔːi˧˥ jʊŋ˨ mʊk̚˨ tɪk̚˥ sɪŋ˧ kʰyːn˨˩ sɪk̚˥ faːt̚˧, jiː˩˧ kuːn˧ tsʰiːt̚˧ laːp̚˨ faːt̚˧ jyːn˨˩ jiː˧ pɪŋ˨ fɔːŋ˨˩ fɔːŋ˨˩ kei˥ haːi˨ tsɐp̚˥ faːt̚˧ syːn˧˥ hɔːi˨ sɛː˩˧ wuːi˨˩ kʊŋ˥ pʰɪŋ˨˩ tsɪŋ˧ jiː˨] (FAHT-YUEN JOY GAI-SIK FAHT-LY TEW-MUN SEE CHOY-YOONG MUK-DIK-SING KUEN-SIK-FAHT, YEE GOON-CHEET LAHP-FAHT YUEN-YEE BING FONG-FONG GAY-HAI JUP-FAHT SUEN-HOI SHEH-WUI GONG-PING JING-YEE)",
          "translation": "When interpreting statutory provisions, the court adopted the purposive approach to implement the legislative intent and prevent mechanical enforcement from undermining social equity and justice."
        },
        {
          "target": "法律起草工作要求極致之文字嚴謹度，每一個定義條款與關聯詞都必須經過反覆推敲以防歧義。",
          "reading": "faat3 leot6 hei2 cou2 gung1 zok3 jiu1 kau4 gik6 zi3 zi1 man4 zi6 jim4 gan2 dou6, mui5 jat1 go3 ding6 ji6 tiu4 fun2 jyu5 gwaan1 lyun4 ci4 dou1 bit1 seoi1 ging1 gwo3 faan2 fuk1 teoi1 kaau1 ji5 fong4 kei4 ji6. [faːt̚˧ lɵt̚˨ hei˧˥ tsʰou˧˥ kʊŋ˥ tsɔːk̚˧ jiːu˥ kʰɐu˨˩ kɪk̚˨ tsiː˧ tsiː˥ mɐn˨˩ tsiː˨ jiːm˨˩ kɐn˧˥ tou˨, muːi˩˧ jɐt̚˥ kɔː˧ tɪŋ˨ jiː˧ tʰiːu˨˩ fuːn˧˥ jyː˩˧ kʷaːn˥ lyːn˨˩ tsʰiː˨˩ tou˥ piːt̚˥ sɵy˥ kɪŋ˥ kʷɔː˧ faːn˧˥ fʊk̚˥ tʰɵy˥ kʰaːu˥ jiː˩˧ fɔːŋ˨˩ kʰei˨˩ jiː˨] (FAHT-LEUT HEY-CHOU GONG-JOK YIU-KAU GIK-JEE JEE MUN-JEE YEEM-GUN-DOU, MOOY YUT-GOH DING-YEE TEW-FOON YUE GWAHN-LUEN-CHEE DOH BEET-SOEY GING-GWOR FAHN-FUK TOEY-HAU YEE FONG KAY-YEE)",
          "translation": "Legal drafting requires the utmost linguistic rigor; every definition clause and conjunction must undergo repeated deliberation to prevent ambiguities."
        }
      ],
      "mnemonics": [
        "【雙語立法訣】中英法例文本精，同具真準效力平；字義黃金目的法，探求真意法網明！"
      ],
      "culturalNotes": [
        "香港自1980年代起推動法律雙語化工程，律政司法律草擬科（Law Drafting Division）匯聚了世界頂級法律語言學家與起草專家，成功將數百萬字普通法法例精確翻譯並創立了現代中文普通法專用詞庫。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【法例詮釋】在法例解釋中，法官不局限於法條死板字面、而是探求立法背後整體政策目的與社會宗旨之詮釋方法係：",
          "options": [
            "目的性詮釋法 (Purposive Approach / Muk6 dik1 sing3 kyun4 sik1)",
            "隨便曲解法條) (Context: 法律草擬、雙語立法與法庭語言學：「法例詮釋條例」、「字義規則」、「雙語)",
            "機械字面死扣) (Context: 法律草擬、雙語立法與法庭語言學：「法例詮釋條例」、「字義規則」、「雙語)",
            "抽籤決定含義) (Context: 法律草擬、雙語立法與法庭語言學：「法例詮釋條例」、「字義規則」、「雙語)"
          ],
          "answerIndex": 0,
          "explanation": "「目的性詮釋法（Purposive Approach）」為現代普通法法官探求法例精神實質最主流之詮釋準則。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【雙語制度】香港《法定語文條例》對香港法例文本法律效力作出的核心規定係：",
          "options": [
            "中文本與英文本同具真準效力 (Chinese and English texts are equally authentic)",
            "英文本效力永遠高於中文本) (Context: 法律草擬、雙語立法與法庭語言學：「法例詮釋條例」、「字義規則」、「雙語)",
            "中文本僅供參考無法律效力) (Context: 法律草擬、雙語立法與法庭語言學：「法例詮釋條例」、「字義規則」、「雙語)",
            "只以口頭聲明為準) (Context: 法律草擬、雙語立法與法庭語言學：「法例詮釋條例」、「字義規則」、「雙語)"
          ],
          "answerIndex": 0,
          "explanation": "香港特區法律規定中英兩種語言文本同具真準法定效力。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【法例文本】在法例草擬中，為精確界定特定專有名詞在該部法律中之具體適用範圍所專門設置的法條章節稱為：",
          "options": [
            "釋義與定義條款 (Interpretation and Definition Clauses / Sik1 ji6 tiu4 fun2)",
            "作者簡介) (Context: 法律草擬、雙語立法與法庭語言學：「法例詮釋條例」、「字義規則」、「雙語)",
            "廣告宣傳頁) (Context: 法律草擬、雙語立法與法庭語言學：「法例詮釋條例」、「字義規則」、「雙語)",
            "感謝名單) (Context: 法律草擬、雙語立法與法庭語言學：「法例詮釋條例」、「字義規則」、「雙語)"
          ],
          "answerIndex": 0,
          "explanation": "「釋義條款（Interpretation Clauses）」為法例起草中鎖定法律術語內涵與外延之核心技術手段。"
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
    "title": "法理學、司法倫理與當代法治思辨：「自然法與實證法」、「實體正義」、「程序正義」 (Jurisprudence & Ethics)",
    "level": "C2",
    "objective": "掌握法理學核心流派（自然法學派 vs 法律實證主義）、自然公正原則（Natural Justice）、實體正義與程序正義思辨及司法倫理最高準則之法學話語。",
    "presentation": {
      "explanation": "抵達法學思想之最高殿堂，要求對法理學（Jurisprudence）與司法倫理進行深邃之哲學批判：\n\n一、法哲學核心學派之永恆論辯：\n１．「自然法學派」（Natural Law）：\n- 法律之上存在永恆之道德正義與理性法則，「惡法非法」（Lex injusta non est lex）。\n２．「法律實證主義」（Legal Positivism）：\n- 法律為合法權威主權者頒布之指令，法與道德在概念上嚴格分離（「惡法亦法」）。\n\n二、司法正義與程序倫理之黃金準則：\n１．「程序正義與實體正義之辯證」（Procedural vs. Substantive Justice）：\n- 「正義不僅要得到實現，而且要以讓人看得見的方式實現」（Justice must not only be done, but must also be seen to be done）。\n２．「自然公正原則」（Rules of Natural Justice）：\n- 任何人不得在涉及自己的案件中擔任法官（Nemo judex in causa sua / 排除偏頗）。\n- 必須公平聆聽爭議雙方之陳詞（Audi alteram partem / 聆聽權利）。",
      "examples": [
        {
          "target": "法官在審理案件時必須恪守自然公正原則，嚴格迴避任何存在利益衝突或可能引發偏頗懷疑之審判程序。",
          "reading": "faat3 gun1 zoi6 sam2 lei5 on3 gin3*2 si4 bit1 seoi1 kok3 sau2 zi6 jin4 gung1 zing3 jyun4 zak1, jim4 gaak3 wui4 bei6 jam6 ho4 cyun4 zoi6 lei6 jik1 cung1 tat6 waak6 ho2 nang4 jan5 faat3 pin1 po2 waai4 ji4 zi1 sam2 pun3 cing4 zeoi6. [faːt̚˧ kuːn˥ tsɔːi˨ sɐm˧˥ lei˩˧ ɔːn˧ kiːn˧˥ siː˨˩ piːt̚˥ sɵy˥ kʰɔːk̚˧ sɐu˧˥ tsiː˨ jiːn˨˩ kʊŋ˥ tsɪŋ˧ jyːn˨˩ tsak̚˥, jiːm˨˩ kaːk̚˧ wuːi˨˩ pei˨ jɐm˨ hɔː˨˩ tsʰyːn˨˩ tsɔːi˨ lei˨ jɪk̚˨ tsʰʊŋ˥ tʰɐt̚˨ waːk̚˨ hɔː˧˥ nɐŋ˨˩ jɐn˩˧ faːt̚˧ pʰiːn˥ pʰɔː˧˥ waːi˨˩ jiː˨˩ tsiː˥ sɐm˧˥ pʰuːn˧ tsʰɪŋ˨˩ tsɵy˨] (FAHT-GOON JOY SUM-LEY ON-GEEN SEE BEET-SOEY KOK-SAU JEE-YEEN GONG-JING YUEN-JUK, YEEM-GAAK WOOI-BAY YUM-HOH CHUEN-JOY LEY-YIK CHOONG-TUT WAAK HOH-NUNG YUN-FAHT PEEN-POH WAI-YEE JEE SUM-POON CHING-JEOY)",
          "translation": "When adjudicating cases, judges must scrupulously adhere to the principles of natural justice, strictly recusing themselves from any trial proceedings involving conflicts of interest or possible suspicions of bias."
        },
        {
          "target": "程序正義乃法治文明之基石，正義不僅要被實質實現，更必須以公眾看得見之透明程序展現出來。",
          "reading": "cing4 zeoi6 zing3 ji6 naai5 faat3 zi6 man4 ming4 zi1 gei1 sek6, zing3 ji6 bat1 daan1 zi2 jiu3 bei6 sat6 zat1 sat6 jin6, gang3 bit1 seoi1 ji5 gung1 zung3 hon3 dak1 gin3 zi1 tau1 ming4 cing4 zeoi6 zin2 jin6 ceot1 lai4. [tsʰɪŋ˨˩ tsɵy˨ tsɪŋ˧ jiː˨ naːi˩˧ faːt̚˧ tsiː˨ mɐn˨˩ mɪŋ˨˩ tsiː˥ kei˥ sɪk̚˨, tsɪŋ˧ jiː˨ pɐt̚˥ taːn˥ tsiː˧˥ jiːu˧ pei˨ sɐt̚˨ tsɐt̚ sɐt̚˨ jiːn˨, kɐŋ˧ piːt̚˥ sɵy˥ jiː˩˧ kʊŋ˥ tsʊŋ˧ hɔːn˧ tɐk̚˥ kiːn˧ tsiː˥ tʰɐu˥ mɪŋ˨˩ tsʰɪŋ˨˩ tsɵy˨ tsiːn˧˥ jiːn˨ tsʰɵt̚˥ lɐi˨˩] (CHING-JEOY JING-YEE NY FAHT-JEE MUN-MING JEE GAY-SEK, JING-YEE BUT-DAHN-JEE YIU BAY SUT-JUT SUT-YEEN, GUNG BEET-SOEY YEE GONG-JOONG HOHN-DUK-GEEN JEE TAU-MING CHING-JEOY JEEN-YEEN-CHUT-LY)",
          "translation": "Procedural justice is the cornerstone of rule of law civilization; justice must not only be substantively realized, but must also be demonstrated through transparent procedures visible to the public."
        },
        {
          "target": "自然法學派同法律實證主義對法律與道德關聯之深刻思辨，持續引領住人類對良法善治之不懈探索。",
          "reading": "zi6 jin4 faat3 hok6 paai3 tung4 faat3 leot6 sat6 zing3 zyu2 ji6 deoi3 faat3 leot6 jyu5 dou6 dak1 gwaan1 lyun4 zi1 sam1 hak1 si1 bin6, ci4 zuk6 jan5 ling5 zyu6 jan4 leoi6 deoi3 loeng4 faat3 sin6 zi6 zi1 bat1 haai6 taam3 sok3. [tsiː˨ jiːn˨˩ faːt̚˧ hɔːk̚˨ pʰaːi˧ tʰʊŋ˨˩ faːt̚˧ lɵt̚˨ sɐt̚˨ tsɪŋ˧ tsyː˧˥ jiː˨ tɵy˧ faːt̚˧ lɵt̚˨ jyː˩˧ tou˨ tɐk̚˥ kʷaːn˥ lyːn˨˩ tsiː˥ sɐm˥ hɐk̚˥ siː˥ piːn˧, tsʰiː˨˩ tsʊk̚˨ jɐn˩˧ lɪŋ˩˧ tsyː˨ jɐn˨˩ lɵy˨ tɵy˧ lœːŋ˨˩ faːt̚˧ siːn˨ tsiː˨ tsiː˥ pɐt̚˥ haːi˨ tʰaːm˧ sɔːk̚˧] (JEE-YEEN FAHT-HOK-PY TOONG FAHT-LEUT SUT-JING JUE-YEE DEOY FAHT-LEUT YUE DOU-DUK GWAHN-LUEN JEE SUM-HUK SEE-BEEN, CHEE-JUK YUN-LING-JUE YUN-LOEY DEOY LEUNG-FAHT SEEN-JEE JEE BUT-HY TAHM-SOK)",
          "translation": "The profound deliberations between natural law and legal positivism on the nexus between law and morality continue to guide humanity's untiring quest for good laws and good governance."
        }
      ],
      "mnemonics": [
        "【法理正義訣】程序實體雙正義，自然公正莫徇私；自然法光照天地，善治良法四海期！"
      ],
      "culturalNotes": [
        "普通法中最著名的正義格言『Justice must not only be done, but must also be seen to be done』出自1924年英國高等法院Rex v. Sussex Justices一案中休厄特首席大法官（Lord Hewart）的名言，已成為香港及全球普通法司法獨立與公開審判的核心座右銘。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【司法倫理】自然公正原則（Natural Justice）中嚴格規定法官絕不能審理與自己存在利益關聯案件之拉丁法諺係：",
          "options": [
            "任何人不得在自己的案件中擔任法官 (Nemo judex in causa sua)",
            "法官可以任意接受饋贈) (Context: 法理學、司法倫理與當代法治思辨：「自然法與實證法」、「實體正義」、「程)",
            "法官可以自告自審) (Context: 法理學、司法倫理與當代法治思辨：「自然法與實證法」、「實體正義」、「程)",
            "法官無須迴避利益衝突) (Context: 法理學、司法倫理與當代法治思辨：「自然法與實證法」、「實體正義」、「程)"
          ],
          "answerIndex": 0,
          "explanation": "「Nemo judex in causa sua」為確保司法公正無偏頗之第一自然正義鐵律。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【法學流派】主張法律之上存在著永恆客觀之道德與理性法則、非正義之法律並非真正法律之學派係：",
          "options": [
            "自然法學派 (Natural Law School / Zi6 jin4 faat3 hok6 paai3)",
            "純粹強權論) (Context: 法理學、司法倫理與當代法治思辨：「自然法與實證法」、「實體正義」、「程)",
            "虛無主義派) (Context: 法理學、司法倫理與當代法治思辨：「自然法與實證法」、「實體正義」、「程)",
            "商業至上派) (Context: 法理學、司法倫理與當代法治思辨：「自然法與實證法」、「實體正義」、「程)"
          ],
          "answerIndex": 0,
          "explanation": "「自然法學派（Natural Law）」將道德正義與理性視為檢驗法律正當性之最高標準。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【法治名言】普通法體系中強調審判程序必須公開透明、公眾必須能夠直觀感受正義得以落實之世界名言係：",
          "options": [
            "正義不僅要得到實現，而且要以讓人看得見的方式實現 (Justice must not only be done, but must also be seen to be done)",
            "正義可以秘密暗中達成) (Context: 法理學、司法倫理與當代法治思辨：「自然法與實證法」、「實體正義」、「程)",
            "審判結果無須向公眾說明) (Context: 法理學、司法倫理與當代法治思辨：「自然法與實證法」、「實體正義」、「程)",
            "只要目的正確可以不擇手段) (Context: 法理學、司法倫理與當代法治思辨：「自然法與實證法」、「實體正義」、「程)"
          ],
          "answerIndex": 0,
          "explanation": "此名言精闢闡明了程序正義（Procedural Justice）對於公眾建立法治信心之不可替代價值。"
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
    "title": "高階辯論架構與立論駁論策略：「立論破題」、「界定概念」、「防守反擊」 (Debate & Argumentation)",
    "level": "C2",
    "objective": "掌握高階政策性與哲學性辯論賽制架構（立論破題、概念界定、評判標準）、以子之矛攻子之盾反駁策略及法庭與議會辯論論辯話語。",
    "presentation": {
      "explanation": "在高等院校華語辯論賽及議會政策辯論中，高階論辯要求嚴密之邏輯架構與精準之修辭策略：\n\n一、辯論立論三部曲（Debate Framework）：\n１．「破題與概念界定」（po3 tai4 jyu5 koi3 nim6 gaai3 ding6）：\n- 嚴格界定辯題中爭議性核心概念之內涵與外延，搶佔理論高地。\n２．「評判標準確立」（ping4 pun3 biu1 zeon2）：\n- 「衡量某項政策是否應當推行，關鍵在於其是否符合公共利益最大化與可行性之底線」。\n３．「分論點層層遞進」（cang4 cang4 dai6 zeon3）：\n- 論點一（必要性）、論點二（可行性）、論點三（深遠效益）。\n\n二、高階反駁與攻防話語矩陣：\n- 「以子之矛，攻子之盾」（ji5 zi2 zi1 maau4 gung1 zi2 zi1 teon5）：抓取對方論據自身之不可調和內在矛盾。\n- 「防守反擊與歸謬法」（gwai1 mau6 faat3 / Reductio ad absurdum）：順著對方邏輯推導至荒謬結論以徹底擊潰其論點。",
      "examples": [
        {
          "target": "我方在開篇立論中明確界定核心概念，確立以社會總體福祉與可持續發展作為衡量辯題之根本標準。",
          "reading": "ngo5 fong1 zoi6 hoi1 pin1 laap6 leon6 zung1 ming4 kok3 gaai3 ding6 hat6 sam1 koi3 nim6, kok3 laap6 ji5 se5 wui6*2 zung2 tai2 fuk1 zi2 jyu5 ho2 ci4 zuk6 faat3 zin2 zok3 wai4 hang4 loeng4 bin6 tai4 zi1 gan1 bun2 biu1 zeon2. [ŋɔː˩˧ fɔːŋ˥ tsɔːi˨ hɔːi˥ pʰiːn˥ laːp̚˨ lœːn˨ tsʊŋ˥ mɪŋ˨˩ kʰɔːk̚˧ kaːi˧ tɪŋ˨ hɐt̚˨ sɐm˥ kʰɔːi˧ niːm˨, kʰɔːk̚˧ laːp̚˨ jiː˩˧ sɛː˩˧ wuːi˨˩ tsʊŋ˧˥ tʰɐi˧˥ fʊk̚˥ tsiː˧˥ jyː˩˧ hɔː˧˥ tsʰiː˨˩ tsʊk̚˨ faːt̚˧ tsiːn˧˥ tsɔːk̚˧ wɐi˨˩ hɐŋ˨˩ lœːŋ˨˩ piːn˨ tʰɐi˨˩ tsiː˥ kɐn˥ puːn˧˥ piːu˥ tsɵn˧˥] (NGOH-FONG JOY HOI-PEEN LAHP-LEON JOONG MING-KOK GY-DING HUT-SUM KOI-NEEM, KOK-LAHP YEE SHEH-WUI JOONG-TY FOOK-JEE YUE HOH-CHEE-JUK FAHT-JEEN JOK-WAI HAHNG-LEUNG BEEN-TY JEE GUN-BOON BEW-JEON)",
          "translation": "Our side clearly defined core concepts in the opening statement, establishing total societal well-being and sustainable development as the fundamental metric for evaluating the debate resolution."
        },
        {
          "target": "一辯以子之矛攻子之盾，敏銳指出對方辯友在論證過程中所暴露出之自相矛盾之處。",
          "reading": "jat1 bin6 ji5 zi2 zi1 maau4 gung1 zi2 zi1 teon5, man5 jeoi6 zi2 ceot1 deoi3 fong1 bin6 jau5 zoi6 leon6 zing3 gwo3 cing4 zung1 so2 bau6 lou6 ceot1 zi1 zi6 soeng1 maau4 teon5 zi1 cyu3. [jɐt̚˥ piːn˨ jiː˩˧ tsiː˧˥ tsiː˥ maːu˨˩ kʊŋ˥ tsiː˧˥ tsiː˥ tʰɵn˩˧, mɐn˩˧ jɵy˨ tsiː˧˥ tsʰɵt̚˥ tɵy˧ fɔːŋ˥ piːn˨ jɐu˩˧ tsɔːi˨ lœːn˨ tsɪŋ˧ kʷɔː˧ tsʰɪŋ˨˩ tsʊŋ˥ sɔː˧˥ pɐu˨ lou˨ tsʰɵt̚˥ tsiː˥ tsiː˨ sœːŋ˥ maːu˨˩ tʰɵn˩˧ tsiː˥ tsʰyː˧] (YUT-BEEN YEE-JEE-JEE-MAU GONG-JEE-JEE-TEON, MUN-YEOY JEE-CHUT DEOY-FONG BEEN-YAU JOY LEON-JING GWOR-CHING JOONG SOH BAU-LOU-CHUT JEE JEE-SEUNG MAU-TEON JEE CHUE)",
          "translation": "The first debater used the opponent's own spear to attack their shield, keenly pointing out the self-contradictions exposed in the opposing side's argumentation process."
        },
        {
          "target": "四辯總結陳詞鏗鏘有力，層層拆解對方偽命題，成功將全場辯論節奏牢牢掌控在己方標準之內。",
          "reading": "sei3 bin6 zung2 git3 can4 ci4 hang1 coeng1 jau5 lik6, cang4 cang4 caak3 gaai2 deoi3 fong1 ngai6 ming6 tai4, sing4 gung1 zoeng1 cyun4 coeng4 bin6 leon6 zit3 zau3 lou4 lou4 zaang1 hung3 zoi6 gei2 fong1 biu1 zeon2 zi1 noi6. [sei˧ piːn˨ tsʊŋ˧˥ kiːt̚˧ tsʰɐn˨˩ tsʰiː˨˩ hɐŋ˥ tsʰœːŋ˥ jɐu˩˧ lɪk̚˨, tsʰɐŋ˨˩ tsʰɐŋ˨˩ tsʰaːk̚˧ kaːi˧˥ tɵy˧ fɔːŋ˥ ŋɐi˨ mɪŋ˨ tʰɐi˨˩, sɪŋ˨˩ kʊŋ˥ tsœːŋ˥ tsʰyːn˨˩ tsʰœːŋ˨˩ piːn˨ lœːn˨ tsit̚˧ tsɐu˧ lou˨˩ lou˨˩ tsaːŋ˥ hʊŋ˧ tsɔːi˨ kei˧˥ fɔːŋ˥ piːu˥ tsɵn˧˥ tsiː˥ nɔːi˨] (SAY-BEEN JOONG-GEET CHUN-CHEE HUNG-CHEUNG YAU-LIK, CHUNG-CHUNG CHAAK-GAI DEOY-FONG NGY-MING-TY, SING-GONG JEUNG CHUEN-CHEUNG BEEN-LEON JEET-JAU LOU-LOU JAANG-HOONG JOY GAY-FONG BEW-JEON JEE NOY)",
          "translation": "The concluding speech by the fourth debater was resonant and powerful, deconstructing the opponent's pseudo-propositions layer by layer and firmly controlling the rhythm of the entire debate within our own criteria."
        }
      ],
      "mnemonics": [
        "【高階辯論訣】開篇立論界定明，評判標準立如松；以子之矛破矛盾，結辯鏗鏘奪全勝！"
      ],
      "culturalNotes": [
        "香港大專辯論賽（如星島全港校際辯論比賽、大專辯論賽）歷史悠久，培養了大量香港政界、司法界及傳媒界的領袖精英。粵語辯論強調言辭犀利、引經據典與極高速度的即興臨場反駁能力。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【辯論策略】在辯論中利用對方所提出的論據推導出對方自身論點自相矛盾之經典反駁技法係：",
          "options": [
            "以子之矛，攻子之盾 (Using opponent's spear against their shield)",
            "直接人身攻擊) (Context: 高階辯論架構與立論駁論策略：「立論破題」、「界定概念」、「防守反擊」 )",
            "大聲喧嘩打斷) (Context: 高階辯論架構與立論駁論策略：「立論破題」、「界定概念」、「防守反擊」 )",
            "承認對方全對) (Context: 高階辯論架構與立論駁論策略：「立論破題」、「界定概念」、「防守反擊」 )"
          ],
          "answerIndex": 0,
          "explanation": "「以子之矛，攻子之盾」為辯論攻防中直擊對方邏輯自洽性漏洞之最高效招式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【立論架構】在辯論開篇環節，確立全場論辯評判依據與核心價值導向之環節稱為：",
          "options": [
            "確立評判標準 (Establishing Evaluation Criteria / Biu1 zeon2)",
            "隨意講笑話) (Context: 高階辯論架構與立論駁論策略：「立論破題」、「界定概念」、「防守反擊」 )",
            "朗讀課文) (Context: 高階辯論架構與立論駁論策略：「立論破題」、「界定概念」、「防守反擊」 )",
            "宣布比賽結束) (Context: 高階辯論架構與立論駁論策略：「立論破題」、「界定概念」、「防守反擊」 )"
          ],
          "answerIndex": 0,
          "explanation": "「評判標準（Criteria）」為政策與價值辯論中決定勝負判定之核心坐標軸。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【反駁方法】假定對方荒謬的主張為真、進而順著其邏輯推導出顯然荒謬絕倫之結論以反證其錯誤之邏輯方法係：",
          "options": [
            "歸謬法 (Reductio ad absurdum / Gwai1 mau6 faat3)",
            "循環論證) (Context: 高階辯論架構與立論駁論策略：「立論破題」、「界定概念」、「防守反擊」 )",
            "強詞奪理) (Context: 高階辯論架構與立論駁論策略：「立論破題」、「界定概念」、「防守反擊」 )",
            "無效枚舉) (Context: 高階辯論架構與立論駁論策略：「立論破題」、「界定概念」、「防守反擊」 )"
          ],
          "answerIndex": 0,
          "explanation": "「歸謬法（Reductio ad absurdum）」為邏輯學與辯論學中極具殺傷力之反駁利器。"
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
    "title": "邏輯謬誤批判辨析：「偷換概念」、「稻草人謬誤」、「滑坡謬誤」 (Logical Fallacies Analysis)",
    "level": "C2",
    "objective": "掌握常見非形式邏輯謬誤（偷換概念、稻草人、滑坡謬誤、訴諸人身、假兩難）之辨識、批判剖析與精確粵語辯駁話語體系。",
    "presentation": {
      "explanation": "精確識別與有力擊破邏輯謬誤（Logical Fallacies），係批判性思維與高階論辯之必備武裝：\n\n一、論辯中最常見之經典邏輯謬誤解構：\n１．「偷換概念與歧義謬誤」（tau1 wun6 koi3 nim6 / Equivocation）：\n- 在論證過程中暗中將詞語之特定含義偷換為另一完全不同之概念。\n２．「稻草人謬誤」（dou6 cou2 jan4 mau6 ng6 / Straw Man Fallacy）：\n- 故意曲解、誇大或樹立對方從未主張之極端觀點，隨後對該「稻草人」進行猛烈攻擊。\n３．「滑坡謬誤」（waat6 bo1 mau6 ng6 / Slippery Slope）：\n- 無合理因果依據地斷言某個微小開端必然會引發一連串災難性後果。\n４．「假兩難謬誤」（False Dilemma）：\n- 人為製造非黑即白之極端對立，刻意隱瞞客觀存在之中間道路。\n５．「訴諸人身」（sou3 zyu1 jan4 san1 / Ad Hominem）：\n- 不討論論點本身，而是直接攻擊論者之品格、身分或動機。",
      "examples": [
        {
          "target": "對方辯友樹立一個極端化之稻草人進行攻擊，試圖偷換概念以掩蓋其論證缺乏實質證據之致命硬傷。",
          "reading": "deoi3 fong1 bin6 jau5 syu6 laap6 jat1 go3 gik6 dyun1 faa3 zi1 dou6 cou2 jan4 zeon3 hang4 gung1 gik1, si3 tou4 tau1 wun6 koi3 nim6 ji5 jim2 koi3 kei4 leon6 zing3 kyut3 faat3 sat6 zat1 zing3 geui3 zi1 zi3 ming4 ngaang6 soeng1. [tɵy˧ fɔːŋ˥ piːn˨ jɐu˩˧ syː˨ laːp̚˨ jɐt̚˥ kɔː˧ kɪk̚˨ tyːn˥ faː˧ tsiː˥ tou˨ tsʰou˧˥ jɐn˨˩ tsɵn˧ hɐŋ˨˩ kʊŋ˥ kɪk̚˥, siː˧ tʰouu˨˩ tʰɐu˥ wuːn˨ kʰɔːi˧ niːm˨ jiː˩˧ jiːm˧˥ kʰɔːi˧ kʰei˨˩ lœːn˨ tsɪŋ˧ kʰyːt̚˧ faːt̚˧ sɐt̚˨ tsɐt̚ tsɪŋ˧ kɵy˧ tsiː˥ tsiː˧ mɪŋ˨˩ ŋaːŋ˨ sœːŋ˥] (DEOY-FONG BEEN-YAU SUE-LAHP YUT-GOH GIK-DUEN-FAH JEE DOU-CHOU-YUN JEON-HAHNG GONG-GIK, SEE-TOU TAU-WOON KOI-NEEM YEE YEEM-KOI KAY LEON-JING KUET-FAHT SUT-JUT JING-GOEY JEE JEE-MING NGAANG-SEUNG)",
          "translation": "The opposing debater set up an extreme straw man to attack, attempting to equivocate concepts to cover up the fatal weakness of their lack of substantive evidence in argumentation."
        },
        {
          "target": "將單一偶發個案無限上綱推導出極端毀滅性後果，係典型之滑坡謬誤，在邏輯上完全站唔住腳。",
          "reading": "zoeng1 daan1 jat1 ngau5 faat3 go3 on3 mou4 haan6 soeng5 gong1 teoi1 dou6 ceot1 gik6 dyun1 wai2 mit6 sing3 hau6 gwo2, hai6 din2 jing4 zi1 waat6 bo1 mau6 ng6, zoi6 lo4 cap1 soeng6 cyun4 cyun4 zaam6 m4 zyu6 goek3. [tsœːŋ˥ taːn˥ jɐt̚˥ ŋɐu˩˧ faːt̚˧ kɔː˧ ɔːn˧ mouou˨˩ haːn˨ sœːŋ˩˧ kɔːŋ˥ tʰɵy˥ tou˨ tsʰɵt̚˥ kɪk̚˨ tyːn˥ wɐi˧˥ miːt̚˨ sɪŋ˧ hɐu˨ kʷɔː˧˥, hɐi˨ tiːn˧˥ jɪŋ˨˩ tsiː˥ waːt̚˨ pɔː˥ mauu˨ ŋ̩˨, tsɔːi˨ lɔː˨˩ tsʰɐp̚˥ sœːŋ˨ tsʰyːn˨˩ tsʰyːn˨˩ tsaːm˨ m̩˨˩ tsyː˨ kœːk̚˧] (JEUNG DAHN-YUT NGAU-FAHT GOH-ON MOU-HAHN SEUNG-GONG TOEY-DOU-CHUT GIK-DUEN WAI-MEET-SING HAU-GWOR, HY DEEN-YING JEE WAAT-BOH MAU-NG, JOY LOH-CHUP-SEUNG CHUEN-CHUEN JAAM M-JUE GERK)",
          "translation": "Infinitely escalating a single isolated case to deduce extreme catastrophic consequences is a typical slippery slope fallacy, which cannot stand logically at all."
        },
        {
          "target": "面對他人之合理質疑應當以事實論據理性回應，而唔係訴諸人身攻擊對方之出身背景。",
          "reading": "min6 deoi3 taa1 jan4 zi1 hap6 lei5 zat1 ji4 jing1 dong1 ji5 sat6 sat6 leon6 geui3 lei5 sing3 wui4 jing3, ji4 m4 hai6 sou3 zyu1 jan4 san1 gung1 gik1 deoi3 fong1 zi1 ceot1 san1 bui3 ging2. [miːn˨ tɵy˧ tʰaː˥ jɐn˨˩ tsiː˥ hɐp̚˨ lei˩˧ tsɐt̚˥ jiː˨˩ jɪŋ˥ tɔːŋ˥ jiː˩˧ sɐt̚˨ sɐt̚˨ lœːn˨ kɵy˧ lei˩˧ sɪŋ˧ wuːi˨˩ jɪŋ˧, jiː˨˩ m̩˨˩ hɐi˨ sou˧ tsyː˥ jɐn˨˩ sɐn˥ kʊŋ˥ kɪk̚˥ tɵy˧ fɔːŋ˥ tsiː˥ tsʰɵt̚˥ sɐn˥ puːi˧ kɪŋ˧˥] (MEEN-DEOY TAH-YUN JEE HUP-LEY JUT-YEE YING-DONG YEE SUT-SUT LEON-GOEY LEY-SING WOOI-YING, YEE M-HY SOU-JUE YUN-SUN GONG-GIK DEOY-FONG JEE CHUT-SUN BUI-GING)",
          "translation": "Faced with reasonable questions from others, one should respond rationally with factual evidence, rather than resorting to ad hominem attacks on the opponent's background."
        }
      ],
      "mnemonics": [
        "【邏輯謬誤訣】稻草人立虛幻擊，偷換概念亂真實；滑坡妄推極端果，訴諸人身理虧極！"
      ],
      "culturalNotes": [
        "香港中文大學哲學系教授李天命先生著有《李天命的思考藝術》、《殺腦綱》等暢銷名作，以幽默犀利、深入淺出的『天命語理分析』系統剖析各類邏輯謬誤與語言迷霧，在香港學界和大眾讀者中產生了極為深遠的啟蒙影響。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【邏輯謬誤】曲解或誇大對方觀點、樹立一個虛假極端靶子進行猛烈抨擊之邏輯謬誤稱為：",
          "options": [
            "稻草人謬誤 (Straw Man Fallacy / Dou6 cou2 jan4 mau6 ng6)",
            "嚴密三段論) (Context: 邏輯謬誤批判辨析：「偷換概念」、「稻草人謬誤」、「滑坡謬誤」 (Log)",
            "客觀全面分析) (Context: 邏輯謬誤批判辨析：「偷換概念」、「稻草人謬誤」、「滑坡謬誤」 (Log)",
            "實事求是舉證) (Context: 邏輯謬誤批判辨析：「偷換概念」、「稻草人謬誤」、「滑坡謬誤」 (Log)"
          ],
          "answerIndex": 0,
          "explanation": "「稻草人謬誤（Straw Man Fallacy）」為論辯中歪曲對手立場最常見之形式。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【批判思維】在論證中不反駁對方論點論據、而是直接針對論者個人道德人品或出身背景進行攻擊之謬誤係：",
          "options": [
            "訴諸人身謬誤 (Ad Hominem Fallacy / Sou3 zyu1 jan4 san1)",
            "歸納邏輯) (Context: 邏輯謬誤批判辨析：「偷換概念」、「稻草人謬誤」、「滑坡謬誤」 (Log)",
            "演繹推理) (Context: 邏輯謬誤批判辨析：「偷換概念」、「稻草人謬誤」、「滑坡謬誤」 (Log)",
            "實證檢驗) (Context: 邏輯謬誤批判辨析：「偷換概念」、「稻草人謬誤」、「滑坡謬誤」 (Log)"
          ],
          "answerIndex": 0,
          "explanation": "「訴諸人身（Ad Hominem）」屬於典型的轉移論題與關聯性謬誤。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【邏輯推演】無合理中間因果鏈條支持、斷言採取微小一步必然導致極端崩潰毀滅之後果之謬誤係：",
          "options": [
            "滑坡謬誤 (Slippery Slope Fallacy / Waat6 bo1 mau6 ng6)",
            "精確數學模型) (Context: 邏輯謬誤批判辨析：「偷換概念」、「稻草人謬誤」、「滑坡謬誤」 (Log)",
            "嚴謹概率統計) (Context: 邏輯謬誤批判辨析：「偷換概念」、「稻草人謬誤」、「滑坡謬誤」 (Log)",
            "反證法推理) (Context: 邏輯謬誤批判辨析：「偷換概念」、「稻草人謬誤」、「滑坡謬誤」 (Log)"
          ],
          "answerIndex": 0,
          "explanation": "「滑坡謬誤（Slippery Slope）」透過無限誇大因果連鎖反應製造非理性恐慌。"
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
    "title": "亞里士多德修辭學三要素：品格（Ethos）、情感（Pathos）與邏輯（Logos） (Aristotelian Rhetoric)",
    "level": "C2",
    "objective": "掌握古典修辭學三大支柱（Ethos品格說服力、Pathos情感共鳴、Logos理性邏輯）、公共演說節奏調控（抑揚頓挫、排比鋪排）及震撼演說話語。",
    "presentation": {
      "explanation": "卓越之公共演說家，深諳亞里士多德古典修辭學三要素之黃金配比與交融：\n\n一、修辭學三大核心說服力支柱（Aristotelian Triad）：\n１．「品格說服力」（Ethos / ban2 gaak3 seoi3 fuk6 lik6）：\n- 演說者展現出的誠信、專業威望、道德操守與值得信賴之人格魅力。\n２．「情感共鳴力」（Pathos / cing4 gam2 gung6 ming4）：\n- 喚起聽眾同理心、熱情、希望或正義感，使受眾產生深層心理投射。\n３．「理性邏輯力」（Logos / lei5 sing3 lo4 cap1）：\n- 依托清晰之論點架構、無懈可擊之數據實證與因果推導。\n\n二、演說修辭與聲調語音美學：\n- 「排比鋪排與氣勢磅礴」（paai4 bei2 pou1 paai4）：連用結構對稱之排比句，增強演說之感召力。\n- 「抑揚頓挫與留白節奏」（jik1 joeng4 deon6 co3）：快慢相間、高低起伏，關鍵處適當停頓留白。",
      "examples": [
        {
          "target": "演說家將嚴密之邏輯論證、真摯之情感共鳴與崇高之道德品格熔於一爐，深深震撼全場聽眾之靈魂。",
          "reading": "jin2 seoi3 gaa1 zoeng1 jim4 mat6 zi1 lo4 cap1 leon6 zing3, zan1 zi3 zi1 cing4 gam2 gung6 ming4 jyu5 sung4 gou1 zi1 dou6 dak1 ban2 gaak3 jung4 jyu1 jat1 lou4, sam1 sam1 zan3 ham6 cyun4 coeng4 ting1 zung3 zi1 ling4 wan4. [jiːn˧˥ sɵy˧ kaː˥ tsœːŋ˥ jiːm˨˩ mɐt̚˨ tsiː˥ lɔː˨˩ tsʰɐp̚˥ lœːn˨ tsɪŋ˧, tsɐn˥ tsiː˧ tsiː˥ tsʰɪŋ˨˩ kɐm˧˥ kʊŋ˨ mɪŋ˨˩ jyː˩˧ sʊŋ˨˩ kou˥ tsiː˥ tou˨ tɐk̚˥ pɐn˧˥ kaːk̚˧ jʊŋ˨˩ jyː˥ jɐt̚˥ lou˨˩, sɐm˥ sɐm˥ tsɐn˧ hɐm˨ tsʰyːn˨˩ tsʰœːŋ˨˩ tʰɪŋ˥ tsʊŋ˧ tsiː˥ lɪŋ˨˩ wɐn˨˩] (YEEN-SOEY-GAH JEUNG YEEM-MUT JEE LOH-CHUP LEON-JING, JUN-JEE JEE CHING-GUM GONG-MING YUE SOONG-GOU JEE DOU-DUK BUN-GAAK YOONG YUE YUT-LOU, SUM-SUM JUN-HUM CHUEN-CHEUNG TING-JOONG JEE LING-WUN)",
          "translation": "The orator fused rigorous logical argumentation, sincere emotional resonance, and sublime moral character in one furnace, deeply shaking the souls of the entire audience."
        },
        {
          "target": "演說中巧妙運用排比修辭與抑揚頓挫之聲調轉換，營造出氣勢磅礴且富有感染力之演說節奏。",
          "reading": "jin2 seoi3 zung1 hiu2 miu6 wan6 jung6 paai4 bei2 sau1 ci4 jyu5 jik1 joeng4 deon6 co3 zi1 seng1 diu6 zyun2 wun6, jing4 zou6 ceot1 hei3 sai3 pong4 bok3 ce2 fu3 jau5 gam2 jin5 lik6 zi1 jin2 seoi3 zit3 zau3. [jiːn˧˥ sɵy˧ tsʊŋ˥ hiːu˧˥ miːu˨ wɐn˨ jʊŋ˨ pʰaːi˨˩ pei˧˥ sɐu˥ tsʰiː˨˩ jyː˩˧ jɪk̚˥ jœːŋ˨˩ tɵn˨ tsʰɔː˧ tsiː˥ sɛːŋ˥ tiːu˨ tsyːn˧˥ wuːn˨, jɪŋ˨˩ tsou˨ tsʰɵt̚˥ hei˧ sɐi˧ pʰɔːŋ˨˩ pɔːk̚˧ tsʰɛː˧˥ fuː˧ jɐu˩˧ kɐm˧˥ jiːn˩˧ lɪk̚˨ tsiː˥ jiːn˧˥ sɵy˧ tsit̚˧ tsɐu˧] (YEEN-SOEY JOONG HIU-MEW WUN-YOONG PAI-BAY SAU-CHEE YUE YIK-YEUNG DEON-CHOH JEE SENG-DEW JUEN-WOON, YING-JOU-CHUT HEY-SY PONG-BOK CHEH FOO-YAU GUM-YEEN-LIK JEE YEEN-SOEY JEET-JAU)",
          "translation": "Skillfully deploying parallelism rhetoric and cadence pitch shifts during the address created a grandly momentum-filled and infectious oratorical rhythm."
        },
        {
          "target": "在關鍵觀點提出後適當停頓留白，能給予聽眾充分之思考消化時間，令演說更具張力與深度。",
          "reading": "zoi6 gwaan1 gin6 gun1 dim2 tai4 ceot1 hau6 sik1 dong3 ting4 deon6 lau4 baak6, nang4 kap1 jyu5 ting1 zung3 cung1 fan1 zi1 si1 haau2 siu1 faa3 si4 gaan3, ling6 jin2 seoi3 gang3 geoi6 zoeng1 lik6 jyu5 sam1 dou6. [tsɔːi˨ kʷaːn˥ kiːn˧ kuːn˥ tiːm˧˥ tʰɐi˨˩ tsʰɵt̚˥ hɐu˨ sɪk̚˥ tɔːŋ˧ tʰɪŋ˨˩ tɵn˨ lɐu˨˩ paːk̚˨, nɐŋ˨˩ kʰɐp̚˥ jyː˩˧ tʰɪŋ˥ tsʊŋ˧ tsʰʊŋ˥ fɐn˥ tsiː˥ siː˥ haːu˧˥ siːu˥ faː˧ siː˨˩ kaːn˧, lɪŋ˨ jiːn˧˥ sɵy˧ kɐŋ˧ kɵy˨ tsœːŋ˥ lɪk̚˨ jyː˩˧ sɐm˥ tou˨] (JOY GWAHN-GEEN GOON-DEEM TY-CHUT HAU SIK-DONG TING-DEON LAU-BAAK, NUNG KUP-YUE TING-JOONG CHOONG-FUN JEE SEE-HAU SIU-FAH SEE-GAHN, LING YEEN-SOEY GUNG GOEY JEUNG-LIK YUE SUM-DOU)",
          "translation": "Appropriately pausing after presenting key viewpoints provides the audience with ample time to contemplate and digest, rendering the speech even more compelling and profound."
        }
      ],
      "mnemonics": [
        "【修辭三要素】品格立信道德崇，情感共鳴暖融融；理性邏輯排比振，名篇演說千秋頌！"
      ],
      "culturalNotes": [
        "香港的公共演說文化在立法會辯論、大律師公會演講及大學畢業典禮校長致辭中展現得淋漓盡致。高水平的粵語演說講求文白相間、字正腔圓與深厚的人文底蘊。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【修辭三要素】亞里士多德修辭學中指演說者透過自身誠信、專業聲譽與道德威望贏得聽眾信任之要素係：",
          "options": [
            "品格說服力 (Ethos / Ban2 gaak3 seoi3 fuk6)",
            "單純靠聲音大) (Context: 亞里士多德修辭學三要素：品格（Ethos）、情感（Pathos）與邏輯)",
            "炫耀財富) (Context: 亞里士多德修辭學三要素：品格（Ethos）、情感（Pathos）與邏輯)",
            "威脅恐嚇) (Context: 亞里士多德修辭學三要素：品格（Ethos）、情感（Pathos）與邏輯)"
          ],
          "answerIndex": 0,
          "explanation": "「Ethos（品格說服力）」為確立演說者信譽與道德正當性之第一基石。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【演說技藝】公共演講中連用三個或以上結構相同、語氣一致的對稱句子以增強說服氣勢之修辭手法係：",
          "options": [
            "排比 (Parallelism / Paai4 bei2)",
            "語無倫次) (Context: 亞里士多德修辭學三要素：品格（Ethos）、情感（Pathos）與邏輯)",
            "重複單詞十次) (Context: 亞里士多德修辭學三要素：品格（Ethos）、情感（Pathos）與邏輯)",
            "小聲耳語) (Context: 亞里士多德修辭學三要素：品格（Ethos）、情感（Pathos）與邏輯)"
          ],
          "answerIndex": 0,
          "explanation": "「排比（Parallelism）」為演說中營造磅礴氣勢與鮮明節奏之標誌性修辭工具。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【演講要素】在古典修辭學中，主要透過無可辯駁的客觀數據、實證事實與嚴密邏輯推理進行說服之要素係：",
          "options": [
            "理性邏輯 (Logos / Lei5 sing3 lo4 cap1)",
            "虛構謠言) (Context: 亞里士多德修辭學三要素：品格（Ethos）、情感（Pathos）與邏輯)",
            "盲目迷信) (Context: 亞里士多德修辭學三要素：品格（Ethos）、情感（Pathos）與邏輯)",
            "純粹情緒宣洩) (Context: 亞里士多德修辭學三要素：品格（Ethos）、情感（Pathos）與邏輯)"
          ],
          "answerIndex": 0,
          "explanation": "「Logos（理性邏輯）」為一切嚴謹論證與演說中最不可撼動之理性支柱。"
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
    "title": "公共政策危機溝通與新聞發布會答問：「風險通報」、「澄清謬誤」、「凝聚共識」 (Crisis Communication & Press Conferences)",
    "level": "C2",
    "objective": "掌握政府與大型機構新聞發言人在重大危機事件中之公眾溝通策略、發布會答問技巧（橋接法、信息框定）及高階公關政策粵語話語。",
    "presentation": {
      "explanation": "在突發公共危機與重大政策出台時，新聞發言人必須具備高度專業之危機溝通與記者答問應對素養：\n\n一、危機溝通核心原則（Crisis Communication Principles）：\n１．「第一時間主動通報」（First-time Active Disclosure）：\n- 掌握信息發布主動權，以客觀透明之事實壓縮謠言滋生空間。\n２．「同理心與真誠擔當」（Empathy & Responsibility）：\n- 首要表達對受影響市民之關切與慰問，承諾徹查責任。\n３．「行動導向與明確指引」（Action-oriented Guidance）：\n- 清晰列出當前已採取之救援與補救措施。\n\n二、新聞發布會應對與記者答問技巧：\n- 「橋接法」（Bridging Technique）：\n  「這確實是一個重要的問題，但我們更應當聚焦於目前最緊迫的核心環節……」。\n- 「框定信息與凝聚共識」（Framing & Consensus）：\n  「我們懇請社會各界同舟共濟，攜手共度難關」。",
      "examples": [
        {
          "target": "新聞發言人在發布會上以誠懇態度通報最新調查進展，迅速澄清網絡謠言，及時穩定公眾情緒。",
          "reading": "san1 man4 faat3 jin4 jan4 zoi6 faat3 bou3 wui6*2 soeng6 ji5 sing4 han2 taai3 dou6 tung1 bou3 zeoi3 san1 diu6 caa4 zeon3 zin2, seon3 cuk1 cing1 cing1 mong5 lok3 jiu4 jin4, kap6 si4 wan2 ding6 gung1 zung3 cing4 seoi5. [sɐn˥ mɐn˨˩ faːt̚˧ jiːn˨˩ jɐn˨˩ tsɔːi˨ faːt̚˧ pou˧ wuːi˨˩ sœːŋ˨ jiː˩˧ sɪŋ˨˩ hɐn˧˥ tʰaːi˧ tou˨ tʰʊŋ˥ pou˧ tsɵy˧ sɐn˥ tiːu˨ tsʰaː˨˩ tsɵn˧ tsiːn˧˥, sɵn˧ tsʰʊk̚˥ tsʰɪŋ˥ tsʰɪŋ˥ mɔːŋ˩˧ lɔːk̚˧ jiːu˨˩ jiːn˨˩, kʰɐp̚˨ siː˨˩ wɐn˧˥ tɪŋ˨ kʊŋ˥ tsʊŋ˧ tsʰɪŋ˨˩ sɵy˩˧] (SUN-MUN FAHT-YEEN-YUN JOY FAHT-BOU-WUI SEUNG YEE SING-HUN TY-DOU TOONG-BOU JEOY-SUN DEW-CHAH JEON-JEEN, SEON-CHUK CHING-CHING MONG-LOK YIU-YEEN, KUP-SEE WUN-DING GONG-JOONG CHING-SOEY)",
          "translation": "The spokesperson reported the latest investigation progress with a sincere attitude at the press conference, swiftly clarifying online rumors and timely stabilizing public sentiment."
        },
        {
          "target": "面對記者之尖銳提問，發言人巧妙運用橋接技巧，引導討論回歸到受災群眾安置與善後保障之核心焦點。",
          "reading": "min6 deoi3 gei3 ze2 zi1 zim1 jeoi6 tai4 man6, faat3 jin4 jan4 hiu2 miu6 wan6 jung6 kiu4 zip3 gei2 hiu2, jan5 dou6 tou2 leon6 wui4 gwai1 dou3 sau6 zoi1 kwan4 zung3 on1 zi3 jyu5 sin6 hau6 bou2 zoeng3 zi1 hat6 sam1 ziu1 dim2. [miːn˨ tɵy˧ kei˧˥ tsɛː˧˥ tsiː˥ tsiːm˥ jɵy˨ tʰɐi˨˩ mɐn˨, faːt̚˧ jiːn˨˩ jɐn˨˩ hiːu˧˥ miːu˨ wɐn˨ jʊŋ˨ kʰiːu˨˩ tsiːp̚˧ kei˧˥ hiːu˧˥, jɐn˩˧ tou˨ tʰouu˧˥ lœːn˨ wuːi˨˩ kʷɐi˥ tou˧ sɐu˨ tsɔːi˥ kʷʰɐn˨˩ tsʊŋ˧ ɔːn˥ tsiː˧ jyː˩˧ siːn˨ hɐu˨ pou˧˥ tsœːŋ˧ tsiː˥ hɐt̚˨ sɐm˥ tsiːu˥ tiːm˧˥] (MEEN-DEOY GAY-JEH JEE JEEM-YEOY TY-MUN, FAHT-YEEN-YUN HIU-MEW WUN-YOONG KIU-JEEP GAY-HIU, YUN-DOU TOU-LEON WOOI-GWAI DOU SAU-JOY KWAN-JOONG ON-JEE YUE SEEN-HAU BOU-JEUNG JEE HUT-SUM JEW-DEEM)",
          "translation": "Faced with sharp questions from journalists, the spokesperson skillfully deployed bridging techniques, guiding the discussion back to the core focus of affected citizens' resettlement and aftermath security."
        },
        {
          "target": "政府團隊展現出高度之危機應變能力，以公開透明之信息發布凝聚社會廣泛共識，化解公眾疑慮。",
          "reading": "zing3 fu2 tyun4 deoi6*2 zin2 jin6 ceot1 gou1 dou6 zi1 ngai4 gei1 jing3 bin3 nang4 lik6, ji5 gung1 hoi1 tau1 ming4 zi1 seon3 sik1 faat3 bou3 jing4 zyu6 se5 wui6*2 gwong2 faan3 gung6 sik1, faa3 gaai2 gung1 zung3 ji4 leoi6. [tsɪŋ˧ fuː˧˥ tʰyːn˨˩ tɵy˧˥ tsiːn˧˥ jiːn˨ tsʰɵt̚˥ kou˥ tou˨ tsiː˥ ŋɐi˨˩ kei˥ jɪŋ˧ piːn˧ nɐŋ˨˩ lɪk̚˨, jiː˩˧ kʊŋ˥ hɔːi˥ tʰɐu˥ mɪŋ˨˩ tsiː˥ sɵn˧ sɪk̚˥ faːt̚˧ pou˧ jɪŋ˨˩ tsyː˨ sɛː˩˧ wuːi˨˩ kʷɔːŋ˧˥ faːn˧ kʊŋ˧ sɪk̚˥, faː˧ kaːi˧˥ kʊŋ˥ tsʊŋ˧ jiː˨˩ lɵy˨] (JING-FOO TUEN-DEOY JEEN-YEEN-CHUT GOU-DOU JEE NGY-GAY YING-BEEN NUNG-LIK, YEE GONG-HOI TAU-MING JEE SEON-SIK FAHT-BOU YING-JUE SHEH-WUI GWONG-FAHN GONG-SIK, FAH-GAI GONG-JOONG YEE-LOEY)",
          "translation": "The government team demonstrated high crisis response capability, consolidating broad social consensus and dispelling public concerns through open and transparent information disclosure."
        }
      ],
      "mnemonics": [
        "【危機溝通訣】第一時間報真情，同理擔當撫民心；橋接技巧導焦點，透明發布共識凝！"
      ],
      "culturalNotes": [
        "香港政府新聞處（ISD）設有嚴格的新聞發布與危機通報機制，在颱風暴雨、公共衛生事件中實行24小時不間斷的信息通報，樹立了高效現代城市治理的典範。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【危機溝通】在突發公共危機中，機構新聞發言人所必須恪守的第一核心原則係：",
          "options": [
            "第一時間主動公開透明通報真實情況 (Immediate, proactive & transparent disclosure)",
            "封鎖一切消息) (Context: 公共政策危機溝通與新聞發布會答問：「風險通報」、「澄清謬誤」、「凝聚共)",
            "長期保持沉默不予理睬) (Context: 公共政策危機溝通與新聞發布會答問：「風險通報」、「澄清謬誤」、「凝聚共)",
            "推卸責任給受害者) (Context: 公共政策危機溝通與新聞發布會答問：「風險通報」、「澄清謬誤」、「凝聚共)"
          ],
          "answerIndex": 0,
          "explanation": "「第一時間主動公開」為危機公關中贏得公眾信任、遏制謠言蔓延之第一黃金鐵律。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【答問技巧】發言人在面對偏頗或陷阱提問時、將話題順暢引導回機構核心信息與關鍵事實之公關技巧係：",
          "options": [
            "橋接法 (Bridging Technique / Kiu4 zip3 gei2 hiu2)",
            "憤怒離場) (Context: 公共政策危機溝通與新聞發布會答問：「風險通報」、「澄清謬誤」、「凝聚共)",
            "當場辱罵記者) (Context: 公共政策危機溝通與新聞發布會答問：「風險通報」、「澄清謬誤」、「凝聚共)",
            "編造虛假謊言) (Context: 公共政策危機溝通與新聞發布會答問：「風險通報」、「澄清謬誤」、「凝聚共)"
          ],
          "answerIndex": 0,
          "explanation": "「橋接法（Bridging）」為新聞發言人掌控發布會主導權之核心專業技能。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【公關目的】高水平公共政策溝通與危機新聞發布會之最終核心歸宿在於：",
          "options": [
            "化解公眾疑慮、保障市民知情權並凝聚全社會廣泛共識 (Dispel concerns, ensure public right to know & consolidate social consensus)",
            "單純掩蓋機構失誤) (Context: 公共政策危機溝通與新聞發布會答問：「風險通報」、「澄清謬誤」、「凝聚共)",
            "忽悠欺騙公眾) (Context: 公共政策危機溝通與新聞發布會答問：「風險通報」、「澄清謬誤」、「凝聚共)",
            "展示官僚傲慢) (Context: 公共政策危機溝通與新聞發布會答問：「風險通報」、「澄清謬誤」、「凝聚共)"
          ],
          "answerIndex": 0,
          "explanation": "保障公眾知情權與凝聚社會共識係現代公共政策溝通之根本價值。"
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
    "title": "重大歷史名篇演說賞析與演說家風範：「思想引領」、「時代號召」、「修辭美學」 (Historic Speeches & Master Oratory)",
    "level": "C2",
    "objective": "掌握世界及嶺南重大歷史名篇演說之思想深度、時代號召力、文本結構美學及演說家崇高風範之高階品評話語。",
    "presentation": {
      "explanation": "縱觀人類歷史，震撼人心之名篇演說往往能夠跨越時空，成為推動歷史巨輪前行之偉大力量：\n\n一、歷史名篇演說核心特徵解構：\n１．「時代號召力與歷史責任感」（si4 doi6 hou6 ziu6 lik6）：\n- 在國家民族面臨危亡或歷史轉折關頭，發出直擊人心的時代強音（如孫中山先生之救國演說、丘吉爾之抗戰演講）。\n２．「崇高思想與普世價值引領」（sou3 gou1 si1 soeng2）：\n- 追求自由、平等、正義與人類尊嚴（如馬丁·路德·金《我有一個夢想》）。\n３．「修辭美學與傳世文本結構」：\n- 意象深邃，結構嚴謹，字字珠璣，擲地有聲。\n\n二、高階演說美學評論語體：\n- 「高瞻遠矚，氣貫長虹」（gou1 zim1 jyun5 zuk1, hei3 gun3 coeng4 hung4）。\n- 「思想之深邃與語言之鏗鏘完美交融，鑄就傳世之不朽名篇」。",
      "examples": [
        {
          "target": "呢篇歷史演說高瞻遠矚、氣貫長虹，以宏大之歷史視野同深沉之家國情懷引領住整個時代之精神走向。",
          "reading": "ni1 pin1 lik6 si2 jin2 seoi3 gou1 zim1 jyun5 zuk1, hei3 gun3 coeng4 hung4, ji5 wang4 daai6 zi1 lik6 si2 si6 je5 tung4 sam1 cam4 zi1 gaa1 gwok3 cing4 waai4 jan5 ling5 zyu6 zing2 go3 si4 doi6 zi1 zing1 san4 zau2 hoeng3. [niː˥ pʰiːn˥ lɪk̚˨ siː˧˥ jiːn˧˥ sɵy˧ kou˥ tsiːm˥ jyːn˩˧ tsʊk̚˥, hei˧ kuːn˧ tsʰœːŋ˨˩ hʊŋ˨˩, jiː˩˧ wɐŋ˨˩ taːi˨ tsiː˥ lɪk̚˨ siː˧˥ siː˨ jɛː˩˧ tʰʊŋ˨˩ sɐm˥ tsʰɐm˨˩ tsiː˥ kaː˥ kʷɔːk̚˧ tsʰɪŋ˨˩ waːi˨˩ jɐn˩˧ lɪŋ˩˧ tsy˨ tsɪŋ˧˥ kɔː˧ siː˨˩ tɔːi˨ tsiː˥ tsɪŋ˥ sɐn˨˩ tsɐu˧˥ hœːŋ˧] (NEE-PEEN LIK-SEE YEEN-SOEY GOU-JEEM YUEN-JUK, HEY-GOON CHEUNG-HOONG, YEE WUNG-DY JEE LIK-SEE SEE-YEH TOONG SUM-CHUM JEE GAH-GWOK CHING-WAI YUN-LING-JUE JING-GOH SEE-DOY JEE JING-SUN JAU-HEUNG)",
          "translation": "This historic address is forward-looking with boundless momentum, guiding the spiritual direction of an entire era with a grand historical vision and deep patriotism."
        },
        {
          "target": "演說家以深厚之人文關懷同不可撼動之道德信念，向世界發出追求平等與正義之時代強音，擲地有聲。",
          "reading": "jin2 seoi3 gaa1 ji5 sam1 hau5 zi1 jan4 man4 gwaan1 waai4 tung4 bat1 ho2 ham6 dung6 zi1 dou6 dak1 seon3 nim6, hoeng3 sai3 gaai3 faat3 ceot1 zeoi1 kau4 ping4 dang2 jyu5 zing3 ji6 zi1 si4 doi6 koeng4 jam1, zaak6 dei6 jau5 seng1. [jiːn˧˥ sɵy˧ kaː˥ jiː˩˧ sɐm˥ hɐu˧˥ tsiː˥ jɐn˨˩ mɐn˨˩ kʷaːn˥ waːi˨˩ tʰʊŋ˨˩ pɐt̚˥ hɔː˧˥ hɐm˨ tʊŋ˨ tsiː˥ tou˨ tɐk̚˥ sɵn˧ niːm˨, hœːŋ˧ sɐi˧ kaːi˧ faːt̚˧ tsʰɵt̚˥ tsɵy˥ kʰɐu˨˩ pʰɪŋ˨˩ tɐŋ˧˥ jyː˩˧ tsɪŋ˧ jiː˨ tsiː˥ siː˨˩ tɔːi˨ kʰœːŋ˨˩ jɐm˥, tsaːk̚˨ tei˨ jɐu˩˧ sɛːŋ˥] (YEEN-SOEY-GAH YEE SUM-HAU JEE YUN-MUN GWAHN-WAI TOONG BUT-HOH-HUM-DOONG JEE DOU-DUK SEON-NEEM, HEUNG SY-GY FAHT-CHUT JOEY-KAU PING-DUNG YUE JING-YEE JEE SEE-DOY KEUNG-YUM, JAAK-DAY YAU-SENG)",
          "translation": "With profound humanist empathy and unshakeable moral convictions, the orator delivered the resounding call of the era pursuing equality and justice to the world, striking chords with powerful resonance."
        },
        {
          "target": "偉大演說之所以能夠穿越百年時空依然激勵人心，在於其超越個人恩怨、承載住人類對崇高美好之永恆追求。",
          "reading": "wai5 daai6 jin2 seoi3 zi1 so2 ji5 nang4 gau3 cyun1 jyut6 baak3 nin4 si4 hung1 ji1 jin4 gik1 lai6 jan4 sam1, zoi6 jyu1 kei4 ciu1 jyut6 go3 jan4 jan1 jyun3, sing4 zoi3 zyu6 jan4 leoi6 deoi3 sung4 gou1 mei5 hou2 zi1 wing5 hang4 zeoi1 kau4. [wɐi˩˧ taːi˨ jiːn˧˥ sɵy˧ tsiː˥ sɔː˧˥ jiː˩˧ nɐŋ˨˩ kɐu˧ tsʰyːn˥ jyːt̚˨ paːk̚˧ niːn˨˩ siː˨˩ hʊŋ˥ jiː˥ jiːn˨˩ kɪk̚˥ lɐi˨ jɐn˨˩ sɐm˥, tsɔːi˨ jyː˥ kʰei˨˩ tsʰiːu˥ jyːt̚˨ kɔː˧ jɐn˨˩ jɐn˥ jyːn˧, sɪŋ˨˩ tsɔːi˧ tsy˨ jɐn˨˩ lɵy˨ tɵy˧ sʊŋ˨˩ kou˥ mei˩˧ hou˧˥ tsiː˥ wɪŋ˩˧ hɐŋ˨˩ tsɵy˥ kʰɐu˨˩] (WAI-DY YEEN-SOEY JEE SOH-YEE NUNG-GAU CHUEN-YUET BAAK-NEEN SEE-HOONG YEE-YEEN GIK-LY YUN-SUM, JOY-YUE KAY CHIU-YUET GOH-YUN YUN-YUEN, SING-JOY-JUE YUN-LOEY DEOY SOONG-GOU MAY-HOH JEE WING-HAHNG JOEY-KAU)",
          "translation": "The reason great oratory can still inspire human hearts across a century of time and space lies in its transcendence of personal grievances, bearing humanity's eternal pursuit of sublime beauty."
        }
      ],
      "mnemonics": [
        "【名篇演說訣】氣貫長虹照乾坤，家國情懷時代真；超越時空勵百代，字字鏗鏘鑄精神！"
      ],
      "culturalNotes": [
        "1923年孫中山先生在香港大學大禮堂發表演說，回顧自己在香港求學歲月並直言『我之革命思想完全得自香港』。這場著名演講成為香港近代史與華人革命史上極具象徵意義的歷史篇章。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【演說魅力】重大歷史名篇演說之所以能夠穿越漫長歷史時空依然震撼人心的根本原因在於：",
          "options": [
            "具備崇高思想引領、強烈時代號召力與深厚人文情懷 (Sublime thought, strong era appeal & deep humanist empathy)",
            "單純堆砌華麗辭藻 (掌握世界及嶺南重大歷史名篇演說之思想深度、時代號召力、文本結構美學及演說家崇高風範之高階品評話語。) (重大歷史名篇演說賞析與演說家風範：「思想引領」、「時代號召」、「修辭美學」 (Historic Speeches & Master Oratory))",
            "聲音調至最高分貝 (掌握世界及嶺南重大歷史名篇演說之思想深度、時代號召力、文本結構美學及演說家崇高風範之高階品評話語。) (重大歷史名篇演說賞析與演說家風範：「思想引領」、「時代號召」、「修辭美學」 (Historic Speeches & Master Oratory))",
            "迎合庸俗低級趣味 (掌握世界及嶺南重大歷史名篇演說之思想深度、時代號召力、文本結構美學及演說家崇高風範之高階品評話語。) (重大歷史名篇演說賞析與演說家風範：「思想引領」、「時代號召」、「修辭美學」 (Historic Speeches & Master Oratory))"
          ],
          "answerIndex": 0,
          "explanation": "崇高思想價值與時代精神號召係歷史名篇演說永恆生命力之所在。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【歷史名篇】1923年在香港大學發表演說、深情回顧求學歲月並指出其思想得自香港之近代偉人係：",
          "options": [
            "孫中山先生 (Dr. Sun Yat-sen)",
            "愛迪生 (掌握世界及嶺南重大歷史名篇演說之思想深度、時代號召力、文本結構美學及演說家崇高風範之高階品評話語。) (重大歷史名篇演說賞析與演說家風範：「思想引領」、「時代號召」、「修辭美學」 (Historic Speeches & Master Oratory))",
            "牛頓 (掌握世界及嶺南重大歷史名篇演說之思想深度、時代號召力、文本結構美學及演說家崇高風範之高階品評話語。) (重大歷史名篇演說賞析與演說家風範：「思想引領」、「時代號召」、「修辭美學」 (Historic Speeches & Master Oratory))",
            "達爾文 (掌握世界及嶺南重大歷史名篇演說之思想深度、時代號召力、文本結構美學及演說家崇高風範之高階品評話語。) (重大歷史名篇演說賞析與演說家風範：「思想引領」、「時代號召」、「修辭美學」 (Historic Speeches & Master Oratory))"
          ],
          "answerIndex": 0,
          "explanation": "孫中山先生於1923年在港大的歷史演說是香港近代史上的標誌性事件。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【演說評價】形容一篇演說論點宏大、立意高遠、氣勢磅礴且極具感染力之經典成語係：",
          "options": [
            "高瞻遠矚、氣貫長虹 (Forward-looking with boundless momentum)",
            "鼠目寸光 (掌握世界及嶺南重大歷史名篇演說之思想深度、時代號召力、文本結構美學及演說家崇高風範之高階品評話語。) (重大歷史名篇演說賞析與演說家風範：「思想引領」、「時代號召」、「修辭美學」 (Historic Speeches & Master Oratory))",
            "言之無物 (掌握世界及嶺南重大歷史名篇演說之思想深度、時代號召力、文本結構美學及演說家崇高風範之高階品評話語。) (重大歷史名篇演說賞析與演說家風範：「思想引領」、「時代號召」、「修辭美學」 (Historic Speeches & Master Oratory))",
            "無病呻吟 (掌握世界及嶺南重大歷史名篇演說之思想深度、時代號召力、文本結構美學及演說家崇高風範之高階品評話語。) (重大歷史名篇演說賞析與演說家風範：「思想引領」、「時代號召」、「修辭美學」 (Historic Speeches & Master Oratory))"
          ],
          "answerIndex": 0,
          "explanation": "「高瞻遠矚、氣貫長虹」常用於評價傳世歷史名篇演說之崇高境界與雄渾氣魄。"
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
    "title": "嶺南廣府民居建築特徵：鑊耳屋、天井採光與防潮散熱智慧 (Cantonese Vernacular Architecture)",
    "level": "C2",
    "objective": "掌握嶺南廣府傳統民居結構（鑊耳封火山牆、三間兩廊、青磚石腳）、天井採光導風及適應濕熱氣候之高階建築美學話語。",
    "presentation": {
      "explanation": "嶺南廣府傳統民居建築，凝聚住嶺南先民適應亞熱帶季風濕熱氣候之非凡生態智慧：\n\n一、廣府傳統民居核心結構矩陣：\n１．「鑊耳封火山牆」（wok6 ji5 fung1 saan1 saan1 coeng4）：\n- 山牆狀如鑊耳，線條優美圓潤；兼具隔絕火患封火、抵禦颱風之實用功能，並寓意官運亨通「獨佔鰲頭」。\n２．「三間兩廊與天井冷巷」（saam1 gaan1 loeng5 long4 jyu5 tin1 zeng2）：\n- 正廳居中，兩側設廂房；透過天井與狹長「冷巷」形成強大煙囪拔風對流效應，加速自然通風排熱。\n３．「青磚石腳與蠔殼牆」（cing1 zyun1 sek6 goek3）：\n- 花崗岩條石奠基以防潮防蛀，青磚砌牆隔熱冬暖夏涼；沿海更以生蠔殼築牆（蠔殼屋）。\n\n二、生態適應哲學：\n- 「順應氣候，因地制宜，遮陽隔熱，導風散熱」（seon6 jing3 hei3 hau6, jan1 dei6 zai3 ji4）。",
      "examples": [
        {
          "target": "廣府傳統鑊耳屋依託高聳之山牆防火防風，巧妙利用天井同冷巷形成空氣對流，實現卓越之自然散熱排濕。",
          "reading": "gwong2 fu2 cyun4 tung4 wok6 ji5 uk1 ji1 tok3 gou1 sung2 zi1 saan1 coeng4 fong4 fo2 fong4 fung1, hiu2 miu6 lei6 jung6 tin1 zeng2 tung4 laang5 hong6*2 jing4 sing4 hung1 hei3 deoi3 lau4, sat6 jin6 zoek3 jyu4 zi1 zi6 jin4 saan3 jit6 paai4 sap1. [kʷɔːŋ˧˥ fuː˧˥ tsʰyːn˨˩ tʰʊŋ˨˩ wɔːk̚˨ jiː˩˧ ʊk̚˥ jiː˥ tʰɔːk̚˧ kou˥ sʊŋ˧˥ tsiː˥ saːn˥ tsʰœːŋ˨˩ fɔːŋ˨˩ fɔː˧˥ fɔːŋ˨˩ fʊŋ˥, hiːu˧˥ miːu˨ lei˨ jʊŋ˨ tʰiːn˥ tseŋ˧˥ tʰʊŋ˨˩ laːŋ˩˧ hɔːŋ˨ jɪŋ˨˩ sɪŋ˨˩ hʊŋ˥ hei˧ tɵy˧ lɐu˨˩, sɐt̚˨ jiːn˨ tsœːk̚˧ jyː˨˩ tsiː˥ tsiː˨ jiːn˨˩ saːn˧ jiːt̚˨ pʰaːi˨˩ sɐp̚˥] (GWONG-FOO CHUEN-TOONG WOK-YEE-OOK YEE-TOK GOU-SOONG JEE SAHN-CHEUNG FONG-FOH FONG-FOONG, HIU-MEW LEY-YOONG TEEN-JENG TOONG LAANG-HOHNG YING-SING HOONG-HEY DEOY-LAU, SUT-YEEN JERK-YUE JEE JEE-YEEN SAHN-YEET PY-SUP)",
          "translation": "Cantonese traditional wok-ear houses rely on towering gable walls to prevent fire and wind, skillfully utilizing courtyards and cold alleyways to create air convection, achieving outstanding natural heat dissipation and dehumidification."
        },
        {
          "target": "青磚石腳與精美雕飾交相輝映，展現出嶺南民居樸實厚重而又靈動雅緻之獨特建築美學風貌。",
          "reading": "cing1 zyun1 sek6 goek3 jyu5 zing1 mei5 diu1 sik1 gaau1 soeng1 fai2 jing2, zin2 jin6 ceot1 ling5 naam4 man4 geoi1 pok3 sat6 hau5 zung6 ji4 jau6 ling4 dung6 ngaa5 zi3 zi1 duk6 dak6 gin3 zuk6 mei5 hok6 fung1 maau6. [tsʰɪŋ˥ tsyn˥ sɛːk̚˨ kœːk̚˧ jyː˩˧ tsɪŋ˥ mei˩˧ tiːu˥ sɪk̚˥ kaːu˥ sœːŋ˥ fɐi˧˥ jɪŋ˧˥, tsiːn˧˥ jiːn˨ tsʰɵt̚˥ lɪŋ˩˧ naːm˨˩ mɐn˨˩ kɵy˥ pʰɔːk̚˧ sɐt̚˨ hɐu˧˥ tsʊŋ˨ jiː˨˩ jɐu˨ lɪŋ˨˩ tʊŋ˨ ŋaː˩˧ tsi˧ tsiː˥ tʊk̚˨ tɐk̚˨ kiːn˧ tsʊk̚˨ mei˩˧ hɔːk̚˨ fʊŋ˥ maːu˨] (CHING-JUEN SEK-GERK YUE JING-MAY DEW-SIK GAU-SEUNG FY-YING, JEEN-YEEN-CHUT LING-NAHM MUN-GOEY POK-SUT HAU-JOONG YEE-YAU LING-DOONG NGAH-JEE JEE DUK-DUK GEEN-JUK MAY-HOK FOONG-MAU)",
          "translation": "Blue-brick walls and stone bases shine in harmony with exquisite carvings, demonstrating the unique architectural aesthetic style of Lingnan vernacular dwellings that is both plain-sturdy and dynamically elegant."
        },
        {
          "target": "嶺南建築師深入發掘傳統民居之採光遮陽智慧，將其融入現代綠色低碳建築設計之中。",
          "reading": "ling5 naam4 gin3 zuk6 si1 sam1 jap6 faat3 gwat1 cyun4 tung4 man4 geoi1 zi1 coi2 gwong1 ze1 joeng4 zi3 wai3, zoeng1 kei4 jung4 jap6 jin6 doi6 luk6 sik1 dai1 taan3 gin3 zuk6 cit3 gai3 zi1 zung1. [lɪŋ˩˧ naːm˨˩ kiːn˧ tsʊk̚˨ siː˥ sɐm˥ jɐp̚˨ faːt̚˧ kʷɐt̚˥ tsʰyːn˨˩ tʰʊŋ˨˩ mɐn˨˩ kɵy˥ tsiː˥ tsʰɔːi˧˥ kʷɔːŋ˥ tsɛː˥ jœːŋ˨˩ tsiː˧ wɐi˧, tsœːŋ˥ kʰei˨˩ jʊŋ˨˩ jɐp̚˨ jiːn˨ tɔːi˨ lʊk̚˨ sɪk̚˥ tɐi˥ tʰaːn˧ kiːn˧ tsʊk̚˨ tsʰiːt̚˧ kɐi˧ tsiː˥ tsʊŋ˥] (LING-NAHM GEEN-JUK-SEE SUM-YUP FAHT-GWUT CHUEN-TOONG MUN-GOEY JEE CHOY-GWONG JEH-YEUNG JEE-WAI, JEUNG KAY YOONG-YUP YEEN-DOY LUK-SIK DY-TAHN GEEN-JUK CHEET-GY JEE JOONG)",
          "translation": "Lingnan architects deeply excavate the daylighting and shading wisdom of traditional dwellings, integrating it into contemporary green and low-carbon architectural designs."
        }
      ],
      "mnemonics": [
        "【廣府民居訣】鑊耳山牆防風火，天井冷巷引清風；青磚石腳基石固，嶺南民居千載通！"
      ],
      "culturalNotes": [
        "廣東珠三角與香港新界保留了大量歷史鑊耳屋古村落（如廣州沙灣古鎮、佛山逢簡水鄉、香港屏山文物徑覲廷書室）。鑊耳山牆在古代唯有考取功名或獲官府特許之望族方可建造，象徵宗族榮耀。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【廣府建築】嶺南傳統民居中狀如鑊耳、具備防火防風實用功能且象徵獨佔鰲頭之特色山牆稱為：",
          "options": [
            "鑊耳屋 / 鑊耳封火山牆 (Wok-ear gable wall / Wok6 ji5 uk1)",
            "哥特式尖頂) (Context: 嶺南廣府民居建築特徵：鑊耳屋、天井採光與防潮散熱智慧 (Cantone)",
            "羅馬圓形穹頂) (Context: 嶺南廣府民居建築特徵：鑊耳屋、天井採光與防潮散熱智慧 (Cantone)",
            "茅草圓錐頂) (Context: 嶺南廣府民居建築特徵：鑊耳屋、天井採光與防潮散熱智慧 (Cantone)"
          ],
          "answerIndex": 0,
          "explanation": "「鑊耳封火山牆」為嶺南廣府民居最具標誌性與辨識度之傳統建築符號。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【通風智慧】嶺南民居利用狹窄通道與天井高差加速室內熱空氣排出、引入涼風之生態通風構造係：",
          "options": [
            "天井與冷巷 (Courtyards and Cold Alleys / Tin1 zeng2 jyu5 laang5 hong6)",
            "全封閉玻璃幕牆) (Context: 嶺南廣府民居建築特徵：鑊耳屋、天井採光與防潮散熱智慧 (Cantone)",
            "地下密閉地窖) (Context: 嶺南廣府民居建築特徵：鑊耳屋、天井採光與防潮散熱智慧 (Cantone)",
            "加厚實心牆體) (Context: 嶺南廣府民居建築特徵：鑊耳屋、天井採光與防潮散熱智慧 (Cantone)"
          ],
          "answerIndex": 0,
          "explanation": "「冷巷」利用狹管效應（Venturi Effect）與拔風對流，為濕熱嶺南提供天然降溫空調。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【生態適應】嶺南傳統民居建築在構造上最核心之整體設計指導哲學係：",
          "options": [
            "因地制宜、遮陽隔熱、導風散熱與防潮排濕 (Contextual adaptation, sun shading, natural ventilation & moisture removal)",
            "單純模仿北方防寒厚牆) (Context: 嶺南廣府民居建築特徵：鑊耳屋、天井採光與防潮散熱智慧 (Cantone)",
            "完全忽略本地濕熱氣候) (Context: 嶺南廣府民居建築特徵：鑊耳屋、天井採光與防潮散熱智慧 (Cantone)",
            "只追求形式奢華浪費) (Context: 嶺南廣府民居建築特徵：鑊耳屋、天井採光與防潮散熱智慧 (Cantone)"
          ],
          "answerIndex": 0,
          "explanation": "因地制宜適應濕熱氣候係嶺南傳統建築最寶貴之生態建築智慧。"
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
    "title": "嶺南四大名園：清暉園、餘蔭山房、梁園、可園之造園藝術",
    "level": "C2",
    "objective": "掌握嶺南古典園林造園藝術（順德清暉園、番禺餘蔭山房、佛山梁園、東莞可園）、縮龍成寸小中見大構景手法及滿洲窗水石花木美學。",
    "presentation": {
      "explanation": "嶺南四大古典名園代表了嶺南文人園林藝術之巔峰，展現出不同於江南園林之獨特風骨：\n\n一、嶺南四大古典名園代表：\n１．「順德清暉園」：\n- 佈局精巧，水木清華，融嶺南庭院與水鄉風貌於一體。\n２．「番禺餘蔭山房」：\n- 「縮龍成寸，小中見大」，在三畝有限空間內巧妙佈局深柳堂、臨池別館與玲瓏水榭。\n３．「東莞可園」：\n- 空間連通，迴廊曲折，「可羨人間福地，可思洞天福地」。\n４．「佛山梁園」：\n- 以奇石巧布、水系靈動與文人書畫意境見長。\n\n二、嶺南園林造園美學核心手法：\n- 「求實兼蓄，空間通透」：廣泛採用彩色滿洲窗、蠔殼漏窗、通透敞廳。\n- 「園中有園，景外有景，借景入境」。",
      "examples": [
        {
          "target": "番禺餘蔭山房以「縮龍成寸、小中見大」之精妙手法，在有限庭院內構建出層次極其豐富之山水意境。",
          "reading": "pun1 jyu4 jyu4 jam3 saan1 fong4 ji5 \"suk1 lung4 sing4 cyun3, siu2 zung1 gin3 daai6\" zi1 zing1 miu6 sau2 faat3, zoi6 jau5 haan6 ting4 jyun4 noi6 gau3 gin3 ceot1 cang4 ci3 gik6 kei4 fung1 fu3 zi1 saan1 seoi2 ji3 ging3. [pʰuːn˥ jyː˩˧ jyː˨˩ jɐm˧ saːn˥ fɔːŋ˨˩ jiː˩˧ \"sʊk̚˥ lʊŋ˨˩ sɪŋ˨˩ tsʰyn˧, siːu˧˥ tsʊŋ˥ kiːn˧ taːi˨\" tsiː˥ tsɪŋ˥ miːu˨ sɐu˧˥ faːt̚˧, tsɔːi˨ jɐu˩˧ haːn˨ tʰɪŋ˨˩ jyːn˨˩ nɔːi˨ kɐu˧ kiːn˧ tsʰɵt̚˥ tsʰɐŋ˨˩ tsʰiː˧ kɪk̚˨ kʰei˨˩ fʊŋ˥ fuː˧ tsiː˥ saːn˥ sɵy˧˥ jiː˧ kɪŋ˧] (POON-YUE YUE-YUM SAHN-FONG YEE \"SUK-LONG SING-CHUEN, SIU-JOONG GEEN-DY\" JEE JING-MEW SAU-FAHT, JOY YAU-HAHN TING-YUEN NOY GAU-GEEN-CHUT CHUNG-CHEE GIK-KAY FOONG-FOO JEE SAHN-SOEY YEE-GING)",
          "translation": "Panyu Yuyin Shanfang, through the exquisite technique of 'condensing the dragon into an inch and seeing the great in the small', constructed an extremely rich layering of landscape scenery within limited courtyard grounds."
        },
        {
          "target": "清暉園內彩色滿洲窗與靈動水景相互倒映，展現出嶺南文人園林兼收並蓄、雅緻通透之非凡格調。",
          "reading": "cing1 fai1 jyun4 noi6 coi2 sik1 mun5 zau1 coeng1 jyu5 ling4 dung6 seoi2 ging2 soeng1 hu6 dou3 jing2, zin2 jin6 ceot1 ling5 naam4 man4 jan4 jyun4 lam4 zim1 sau1 bing3 cuk1, ngaa5 zi3 tung1 tau3 zi1 fei1 faan4 gaak3 diu6. [tsʰɪŋ˥ fɐi˥ jyːn˨˩ nɔːi˨ tsʰɔːi˧˥ sɪk̚˥ muːn˩˧ tsɐu˥ tsʰœːŋ˥ jyː˩˧ lɪŋ˨˩ tʊŋ˨ sɵy˧˥ kɪŋ˧˥ sœːŋ˥ wuː˨ tou˧ jɪŋ˧˥, tsiːn˧˥ jiːn˨ tsʰɵt̚˥ lɪŋ˩˧ naːm˨˩ mɐn˨˩ jɐn˨˩ jyːn˨˩ lɐm˨˩ tsiːm˥ sɐu˥ pɪŋ˧ tsʰʊk̚˥, ŋaː˩˧ tsi˧ tʰʊŋ˥ tʰɐu˧ tsiː˥ fei˥ faːn˨˩ kaːk̚˧ tiːu˨] (CHING-FY YUEN-NOY CHOY-SIK MOON-JAU CHEUNG YUE LING-DOONG SOEY-GING SEUNG-WOO DOU-YING, JEEN-YEEN-CHUT LING-NAHM MUN-YUN YUEN-LUM JEEM-SAU BING-CHUK, NGAH-JEE TOONG-TAU JEE FAY-FAHN GAAK-DEW)",
          "translation": "Inside Qinghui Garden, colored Manchu stained-glass windows and dynamic water features reflect each other, demonstrating the extraordinary style of Lingnan literati gardens that is inclusive, elegant, and permeable."
        },
        {
          "target": "嶺南名園注重引水入園與因勢構景，使亭台樓閣與奇花異木融為一體，達到天人合一之至美境界。",
          "reading": "ling5 naam4 ming4 jyun4 zyu3 zung6 jan5 seoi2 jap6 jyun4 jyu5 jan1 sai3 gau3 ging2, si2 ting4 toi4 lau4 gok3 jyu5 kei4 faa1 ji6 muk6 jung4 wai4 jat1 tai2, daat6 dou3 tin1 jan4 hap6 jat1 zi1 zi3 mei5 ging2 gaai3. [lɪŋ˩˧ naːm˨˩ mɪŋ˨˩ jyːn˨˩ tsyː˧ tsʊŋ˨ jɐn˩˧ sɵy˧˥ jɐp̚˨ jyːn˨˩ jyː˩˧ jɐn˥ sɐi˧ kɐu˧ kɪŋ˧˥, siː˧˥ tʰɪŋ˨˩ tʰɔːi˨˩ lɐu˨˩ kɔːk̚˧ jyː˩˧ kʰei˨˩ faː˥ jiː˨ mʊk̚˨ jʊŋ˨˩ wɐi˨˩ jɐt̚˥ tʰɐi˧˥, taːt̚˨ tou˧ tʰiːn˥ jɐn˨˩ hɐp̚˨ jɐt̚˥ tsiː˥ tsiː˧ mei˩˧ kɪŋ˧˥ kaːi˧] (LING-NAHM MING-YUEN JUE-JOONG YUN-SOEY YUP-YUEN YUE YUN-SY GAU-GING, SEE TING-TOY LOU-GOK YUE KAY-FAH YEE-MUK YOONG-WAI YUT-TY, DAHT-DOU TEEN-YUN HUP-YUT JEE JEE-MAY GING-GY)",
          "translation": "Famous Lingnan gardens emphasize channeling water into the grounds and constructing scenery according to terrain, integrating pavilions and towers with rare flora, achieving the supreme state of harmony between nature and humanity."
        }
      ],
      "mnemonics": [
        "【四大名園訣】清暉水木滿洲窗，餘蔭縮龍成寸長；梁園奇石可園秀，嶺南園林天下芳！"
      ],
      "culturalNotes": [
        "香港的九龍寨城公園（Kowloon Walled City Park）採用了經典江南與嶺南園林交融的造園手法；荔枝角公園內的『嶺南之風』更是全港最具規模的現代古典嶺南文人園林。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【名園名言】番禺餘蔭山房在有限的三畝土地內創造出極其開闊深遠之山水層次，其最著名之造園格言係：",
          "options": [
            "縮龍成寸，小中見大 (Condensing dragon to an inch, seeing the great in the small)",
            "大興土木，耗資巨萬) (Context: 嶺南四大名園：清暉園、餘蔭山房、梁園、可園之造園藝術)",
            "全盤西化，照抄洋樓) (Context: 嶺南四大名園：清暉園、餘蔭山房、梁園、可園之造園藝術)",
            "寸草不生，鋪滿水泥) (Context: 嶺南四大名園：清暉園、餘蔭山房、梁園、可園之造園藝術)"
          ],
          "answerIndex": 0,
          "explanation": "「縮龍成寸，小中見大」為嶺南園林在方寸之間營造萬千氣象之核心造園哲學。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【園林構件】嶺南園林中將西洋彩色玻璃與傳統木格扇巧妙結合、呈現絢麗光影效果之標誌性窗櫺裝飾係：",
          "options": [
            "滿洲窗 (Manchu Stained-glass Windows / Mun5 zau1 coeng1)",
            "普通塑料窗) (Context: 嶺南四大名園：清暉園、餘蔭山房、梁園、可園之造園藝術)",
            "鋁合金推拉窗) (Context: 嶺南四大名園：清暉園、餘蔭山房、梁園、可園之造園藝術)",
            "鋼化防盜窗) (Context: 嶺南四大名園：清暉園、餘蔭山房、梁園、可園之造園藝術)"
          ],
          "answerIndex": 0,
          "explanation": "「滿洲窗」為嶺南園林中西文化交融與光影美學之璀璨明珠。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【名園總攬】以下哪一組完全屬於中國著名的「嶺南四大名園」：",
          "options": [
            "順德清暉園、番禺餘蔭山房、佛山梁園、東莞可園 (Qinghui, Yuyin, Liangyuan, Keyuan)",
            "拙政園、留園、網師園、滄浪亭) (Context: 嶺南四大名園：清暉園、餘蔭山房、梁園、可園之造園藝術)",
            "頤和園、圓明園、避暑山莊、北海公園) (Context: 嶺南四大名園：清暉園、餘蔭山房、梁園、可園之造園藝術)",
            "凡爾賽宮、楓丹白露、無憂宮、冬宮) (Context: 嶺南四大名園：清暉園、餘蔭山房、梁園、可園之造園藝術)"
          ],
          "answerIndex": 0,
          "explanation": "清暉園、餘蔭山房、梁園、可園合稱為嶺南古典園林之四大代表瑰寶。"
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
    "title": "嶺南「三雕一塑」古建裝飾藝術：木雕、石雕、磚雕與灰塑、嵌瓷 (Lingnan Architectural Decorative Arts)",
    "level": "C2",
    "objective": "掌握嶺南古建築傳統裝飾工藝「三雕一塑一嵌」（木雕、石雕、磚雕、灰塑、嵌瓷）、廣州陳家祠代表作工藝特徵及吉祥文化寓意話語。",
    "presentation": {
      "explanation": "嶺南古建築裝飾工藝以極致精巧、色彩斑斕與寓意吉祥著稱，被譽為「三雕一塑一嵌瓷」：\n\n一、嶺南五大古建裝飾工藝體系：\n１．「木雕」（muk6 diu1）：\n- 多層透雕、貼金金漆木雕（如潮州金漆木雕），刀法繁複，層次分明。\n２．「磚雕與石雕」（zyun1 diu1 jyu5 sek6 diu1）：\n- 水磨青磚精雕細刻（掛口、門楣），線條細若遊絲；花崗岩石雕基座柱礎沉穩莊重。\n３．「灰塑 / 灰批」（fui1 sok3）：\n- 採用石灰、紙筋、稻草等材料在屋脊、山牆上立體堆塑，耐日曬雨淋。\n４．「嵌瓷 / 剪瓷雕」（ham3 ci4）：\n- 剪切彩色瓷片拼接鑲嵌於屋頂脊飾，歷經百年風雨依然色彩絢麗。\n\n二、集大成之巔峰代表：\n- 廣州陳家祠（陳氏書院）：被譽為「嶺南建築藝術之明珠」，薈萃五大工藝之極致精華。",
      "examples": [
        {
          "target": "廣州陳家祠薈萃咗木雕、石雕、磚雕、灰塑同嵌瓷五大傳統工藝，堪稱嶺南建築裝飾藝術之集大成之作。",
          "reading": "gwong2 zau1 can4 gaa1 ci4 wui6 seoi3 zo2 muk6 diu1, sek6 diu1, zyun1 diu1, fui1 sok3 tung4 ham3 ci4 ng5 daai6 cyun4 tung4 gung1 ngai6, ham1 cing1 ling5 naam4 gin3 zuk6 zong1 sik1 ngai6 seot6 zi1 zaap6 daai6 sing4 zi1 zok3. [kʷɔːŋ˧˥ tsɐu˥ tsʰɐn˨˩ kaː˥ tsʰiː˨˩ wuːi˨ sɵy˧ tsɔː˧˥ mʊk̚˨ tiːu˥, sɛːk̚˨ tiːu˥, tsyn˥ tiːu˥, fuːi˥ sɔːk̚˧ tʰʊŋ˨˩ hɐm˧ tsʰiː˨˩ ŋ̩˩˧ taːi˨ tsʰyːn˨˩ tʰʊŋ˨˩ kʊŋ˥ ŋɐi˨, hɐm˥ tsʰɪŋ˥ lɪŋ˩˧ naːm˨˩ kiːn˧ tsʊk̚˨ tsɔːŋ˥ sɪk̚˥ ŋɐi˨ sɵt̚˨ tsiː˥ tsaːp̚˨ taːi˨ sɪŋ˨˩ tsiː˥ tsɔːk̚˧] (GWONG-JAU CHUN-GAH-CHEE WUI-SOEY-JOR MUK-DEW, SEK-DEW, JUEN-DEW, FOOY-SOK TOONG HUM-CHEE NGG-DY CHUEN-TOONG GONG-NGY, HUM-CHING LING-NAHM GEEN-JUK JONG-SIK NGY-SUT JEE JAHP-DY-SING JEE JOK)",
          "translation": "The Chen Clan Ancestral Hall in Guangzhou brings together the five traditional crafts of wood carving, stone carving, brick carving, plaster molding, and ceramic mosaic, ranking as the masterpiece of Lingnan architectural decorative art."
        },
        {
          "target": "屋脊上之灰塑與嵌瓷歷經百年風雨侵蝕依然色彩斑斕，生動呈現出嶺南佳果與歷史神話典故之民俗圖景。",
          "reading": "uk1 zek3 soeng6 zi1 fui1 sok3 jyu5 ham3 ci4 lik6 ging1 baak3 nin4 fung1 jyu5 cam1 sik1 ji1 jin4 sik1 coi2 baan1 laan4, sang1 dung6 cing4 jin6 ceot1 ling5 naam4 gaai1 gwo2 jyu5 lik6 si2 san4 waa6*2 din2 gu3 zi1 man4 zuk6 tou4 ging2. [ʊk̚˥ tsɛːk̚˧ sœːŋ˨ tsiː˥ fuːi˥ sɔːk̚˧ jyː˩˧ hɐm˧ tsʰiː˨˩ lɪk̚˨ kɪŋ˥ paːk̚˧ niːn˨˩ fʊŋ˥ jyː˩˧ tsʰɐm˥ sɪk̚˥ jiː˥ jiːn˨˩ sɪk̚˥ tsʰɔːi˧˥ paːn˥ laːn˨˩, sɐŋ˥ tʊŋ˨ tsʰɪŋ˨˩ jiːn˨ tsʰɵt̚˥ lɪŋ˩˧ naːm˨˩ kaːi˥ kʷɔː˧˥ jyː˩˧ lɪk̚˨ siː˧˥ sɐn˨˩ waː˨ tiːn˧˥ kuː˧ tsiː˥ mɐn˨˩ tsʊk̚˨ tʰou˨˩ kɪŋ˧˥] (OOK-JEK SEUNG JEE FOOY-SOK YUE HUM-CHEE LIK-GING BAAK-NEEN FOONG-YUE CHUM-SIK YEE-YEEN SIK-CHOY BAHN-LAHN, SUNG-DOONG CHING-YEEN-CHUT LING-NAHM GY-GWOR YUE LIK-SEE SUN-WAH DEEN-GOO JEE MUN-JUK TOU-GING)",
          "translation": "The lime plaster relief and ceramic shard mosaics atop the roof ridges, having endured a century of wind and rain erosion, remain colorful, vividly presenting folklore scenes of Lingnan fruits and historical mythological allegories."
        },
        {
          "target": "多層透雕金漆木雕刀工精絕，將嶺南民間工匠之極致匠心展現得淋漓盡致。",
          "reading": "do1 cang4 tau3 diu1 gam1 cat1 muk6 diu1 dou1 gung1 zing1 zyut6, zoeng1 ling5 naam4 man4 gaan1 gung1 zoeng6 zi1 gik6 zi3 zoeng6 sam1 zin2 jin6 dak1 lam4 lei4 zeon6 zi3. [tɔː˥ tsʰɐŋ˨˩ tʰɐu˧ tiːu˥ kɐm˥ tsʰɐt̚˥ mʊk̚˨ tiːu˥ tou˥ kʊŋ˥ tsɪŋ˥ tsyːt̚˧, tsœːŋ˥ lɪŋ˩˧ naːm˨˩ mɐn˨˩ kaːn˥ kʊŋ˥ tsœːŋ˨ tsiː˥ kɪk̚˨ tsiː˧ tsœːŋ˨ sɐm˥ tsiːn˧˥ jiːn˨ tɐk̚˥ lɐm˨˩ lei˨˩ tsɵn˨ tsiː˧] (DOH-CHUNG TAU-DEW GUM-CHUT MUK-DEW DOU-GONG JING-JUET, JEUNG LING-NAHM MUN-GAHN GONG-JEUNG JEE GIK-JEE JEUNG-SUM JEEN-YEEN-DUK LUM-LEY JEON-JEE)",
          "translation": "The multi-layered openwork gold lacquer woodcarving boasts exquisite knife craftsmanship, demonstrating the ultimate artisan spirit of Lingnan folk craftsmen to the fullest."
        }
      ],
      "mnemonics": [
        "【三雕一塑訣】金漆木雕透層樓，磚石雕刻細緻求；灰塑嵌瓷傲風雨，陳家祠裏百藝悠！"
      ],
      "culturalNotes": [
        "廣東灰塑與嵌瓷已被列入國家級非物質文化遺產名錄。香港很多傳統廟宇（如上環文武廟、筲箕灣天后廟、大澳關帝廟）的屋脊上均保留著精美完好的石灣陶塑（瓦脊公仔）與灰塑壁畫。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【建築工藝】以石灰、礦物顏料及植物纖維為原料、在嶺南古建築屋脊與山牆上立體堆塑之耐風雨傳統工藝係：",
          "options": [
            "灰塑 / 灰批 (Lime Plaster Relief / Fui1 sok3)",
            "普通水泥塗抹) (Context: 嶺南「三雕一塑」古建裝飾藝術：木雕、石雕、磚雕與灰塑、嵌瓷 (Ling)",
            "油漆塗鴉) (Context: 嶺南「三雕一塑」古建裝飾藝術：木雕、石雕、磚雕與灰塑、嵌瓷 (Ling)",
            "石膏翻模) (Context: 嶺南「三雕一塑」古建裝飾藝術：木雕、石雕、磚雕與灰塑、嵌瓷 (Ling)"
          ],
          "answerIndex": 0,
          "explanation": "「灰塑」為嶺南古建屋脊抵禦亞熱帶狂風暴雨侵蝕之獨門傳統工藝。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【古建明珠】匯聚木雕、石雕、磚雕、灰塑、陶塑、嵌瓷等全部工藝精華、被譽為嶺南建築裝飾藝術明珠之廣州古蹟係：",
          "options": [
            "陳家祠 / 陳氏書院 (Chen Clan Ancestral Hall / Can4 gaa1 ci4)",
            "黃埔軍校舊址) (Context: 嶺南「三雕一塑」古建裝飾藝術：木雕、石雕、磚雕與灰塑、嵌瓷 (Ling)",
            "廣州電視塔) (Context: 嶺南「三雕一塑」古建裝飾藝術：木雕、石雕、磚雕與灰塑、嵌瓷 (Ling)",
            "天河體育中心) (Context: 嶺南「三雕一塑」古建裝飾藝術：木雕、石雕、磚雕與灰塑、嵌瓷 (Ling)"
          ],
          "answerIndex": 0,
          "explanation": "廣州陳家祠為嶺南傳統民間建築裝飾藝術最高成就之集大成者。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【工藝特點】將廢棄或特製的彩色瓷片精確剪裁後拼貼於屋脊龍鳳花鳥飾物上之傳統屋頂裝飾工藝稱為：",
          "options": [
            "嵌瓷 / 剪瓷雕 (Ceramic Mosaic / Ham3 ci4)",
            "單純玻璃鋼翻制) (Context: 嶺南「三雕一塑」古建裝飾藝術：木雕、石雕、磚雕與灰塑、嵌瓷 (Ling)",
            "普通彩繪木板) (Context: 嶺南「三雕一塑」古建裝飾藝術：木雕、石雕、磚雕與灰塑、嵌瓷 (Ling)",
            "金屬鍍膜) (Context: 嶺南「三雕一塑」古建裝飾藝術：木雕、石雕、磚雕與灰塑、嵌瓷 (Ling)"
          ],
          "answerIndex": 0,
          "explanation": "「嵌瓷（剪瓷雕）」為潮汕及嶺南地區傲立屋頂風雨百年不褪色之精湛非遺工藝。"
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
    "title": "香港近代中西合璧歷史建築：唐樓、騎樓底與法定古蹟活化 (HK Historic Buildings & Shophouses)",
    "level": "C2",
    "objective": "掌握香港近代城市建築形態演進（唐樓、騎樓底、前舖後居）、中西合璧折衷主義風格、法定古蹟評級及文創活化保育話語體系。",
    "presentation": {
      "explanation": "香港近代建築景觀融合了嶺南傳統與西方殖民古典主義，形成了獨一無二之城市肌理：\n\n一、香港近代特色建築形態：\n１．「唐樓與騎樓底」（tong4 lau4 jyu5 ke4 lau4 dai2）：\n- 下層臨街柱廊向外延伸形成人行步道騎樓底，可遮陽避雨；「下舖上居、前舖後居」，商業與居住高度融合。\n２．「中西合璧折衷主義風格」：\n- 如景賢里（中式宮殿屋頂搭配西方鋼筋混凝土結構）、藍屋建築群（灣仔活化典範）、雷生春（深水埗中醫跌打名樓）。\n\n二、歷史建築評級與活化保育：\n- 「法定古蹟」：依法受最高級別保護，禁止拆卸。\n- 「歷史建築評級」：一級、二級、三級歷史建築評定。\n- 「活化歷史建築夥伴計劃」：活化保育注入文創新生命。",
      "examples": [
        {
          "target": "香港戰前唐樓之騎樓底設計既為行街市民遮陽擋雨，又營造出親切緊密之街坊社區生活氛圍。",
          "reading": "hoeng1 gong2 zin3 cin4 tong4 lau4 zi1 ke4 lau4 dai2 cit3 gai3 gei3 wai4 hang4 gaai1 si5 man4 ze1 joeng4 dong2 jyu5, jau6 jing4 zou6 ceot1 can1 cit3 gan2 mat6 zi1 gaai1 fong1 se5 keoi1 sang1 wut6 fan1 wai4. [hœːŋ˥ kʷɔːŋ˧˥ tsiːn˧ tsʰiːn˨˩ tʰɔːŋ˨˩ lɐu˨˩ tsiː˥ kʰɛː˨ lɐu˨˩ tɐi˧˥ tsʰiːt̚˧ kɐi˧ kei˧ wɐi˨˩ hɐŋ˨˩ kaːi˥ siː˩˧ mɐn˨˩ tsɛː˥ jœːŋ˨˩ tɔːŋ˧˥ jyː˩˧, jɐu˨ jɪŋ˨˩ tsou˨ tsʰɵt̚˥ tsʰɐn˥ tsʰiːt̚˧ kɐn˧˥ mɐt̚˨ tsiː˥ kaːi˥ fɔːŋ˥ sɛː˩˧ kʰɵy˥ sɐŋ˥ wuːt̚˨ fɐn˥ wɐi˨˩] (HEUNG-GONG JEEN-CHEEN TONG-LOU JEE KAY-LOU-DY CHEET-GY GAY WAI HAHNG-GY SEE-MUN JEH-YEUNG DONG-YUE, YAU YING-JOU-CHUT CHUN-CHEET GUN-MUT JEE GY-FONG SHEH-KOEY SUNG-WOOT FUN-WAI)",
          "translation": "The verandah arcade design of pre-war Hong Kong shophouses not only provided shade and rain protection for pedestrians, but also created an intimate and close neighborhood community living atmosphere."
        },
        {
          "target": "深水埗雷生春堂透過活化保育工程轉型為中醫藥保健中心，成功實現歷史古蹟與現代社區服務之完美融合。",
          "reading": "sam1 seoi2 bou6*2 leoi4 sang1 ceon1 tong4 tau3 gwo3 wut6 faa3 bou2 juk6 gung1 cing4 zyun2 jing4 wai4 zung1 ji1 joek6 bou2 gin6 zung1 sam1, sing4 gung1 sat6 jin6 lik6 si2 gu2 zik1 jyu5 jin6 doi6 se5 keoi1 fuk6 mou6 zi1 jyun4 mei5 jung4 hap6. [sɐm˥ sɵy˧˥ pou˧˥ lɵy˨˩ sɐŋ˥ tsʰɵn˥ tʰɔːŋ˨˩ tʰɐu˧ kʷɔː˧ wuːt̚˨ faː˧ pou˧˥ jʊk̚˨ kʊŋ˥ tsʰɪŋ˨˩ tsyːn˧˥ jɪŋ˨˩ wɐi˨˩ tsʊŋ˥ jiː˥ jœːk̚˨ pou˧˥ kiːn˨ tsʊŋ˥ sɐm˥, sɪŋ˨˩ kʊŋ˥ sɐt̚˨ jiːn˨ lɪk̚˨ siː˧˥ kuː˧˥ tsik̚˨ jyː˩˧ jiːn˨ tɔːi˨ sɛː˩˧ kʰɵy˥ fʊk̚˨ mouou˨ tsiː˥ jyːn˨˩ mei˩˧ jʊŋ˨˩ hɐp̚˨] (SUM-SOEY-POU LOY-SUNG-CHUN-TONG TAU-GWOR WOOT-FAH BOU-YUK GONG-CHING JUEN-YING WAI JOONG-YEE-YERK BOU-GEEN JOONG-SUM, SING-GONG SUT-YEEN LIK-SEE GOO-JIK YUE YEEN-DOY SHEH-KOEY FOOK-MOU JEE YUEN-MAY YOONG-HUP)",
          "translation": "Lui Seng Chun in Sham Shui Po was transformed into a Chinese medicine and healthcare center through revitalization and conservation projects, successfully realizing a perfect fusion of historic monuments and modern community services."
        },
        {
          "target": "香港特區政府推行活化歷史建築夥伴計劃，在保留城市歷史肌理之同時為老舊建築注入全新生命力。",
          "reading": "hoeng1 gong2 dak6 keoi1 zing3 fu2 teoi1 hang4 wut6 faa3 lik6 si2 gin3 zuk6 fo2 bun6 gai3 waak6, zoi6 bou2 lau4 sing4 si5 lik6 si2 gei1 lei5 zi1 tung4 si4 wai4 lou5 gau6 gin3 zuk6 zyu3 jap6 cyun4 san1 sang1 ming6 lik6. [hœːŋ˥ kʷɔːŋ˧˥ tɐk̚˨ kʰɵy˥ tsɪŋ˧ fuː˧˥ tʰɵy˥ hɐŋ˨˩ wuːt̚˨ faː˧ lɪk̚˨ siː˧˥ kiːn˧ tsʊk̚˨ fɔː˧˥ puːn˨ kɐi˧ waːk̚˨, tsɔːi˨ pou˧˥ lɐu˨˩ sɪŋ˨˩ siː˨ lɪk̚˨ siː˧˥ kei˥ lei˩˧ tsiː˥ tʰʊŋ˨˩ siː˨˩ wɐi˨˩ lou˧˥ kɐu˨ kiːn˧ tsʊk̚˨ tsyː˧ jɐp̚˨ tsʰyːn˨˩ sɐn˥ sɐŋ˥ mɪŋ˨ lɪk̚˨] (HEUNG-GONG DUK-KOEY JING-FOO TOEY-HAHNG WOOT-FAH LIK-SEE GEEN-JUK FOH-BOON GY-WAAK, JOY BOU-LAU SING-SEE LIK-SEE GAY-LEY JEE TOONG-SEE WAI LOU-GAU GEEN-JUK JUE-YUP CHUEN-SUN SUNG-MING-LIK)",
          "translation": "The Hong Kong SAR Government implemented the Revitalising Historic Buildings Through Partnership Scheme, injecting brand-new vitality into old heritage buildings while preserving the urban historical fabric."
        }
      ],
      "mnemonics": [
        "【港島古建訣】唐樓騎樓遮風雨，中西合璧世間稀；雷生春堂施仁術，活化保育展新姿！"
      ],
      "culturalNotes": [
        "灣仔的『藍屋建築群』榮獲聯合國教科文組織（UNESCO）亞太區文化遺產保護獎之最高榮譽『卓越獎』，開創了『留屋留人』的基層社區保育活化新典範。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【香港建築】香港近代典型街道景觀中下層形成通廊人行步道、上居下舖之嶺南中西混合商住建築稱為：",
          "options": [
            "唐樓與騎樓底 (Tong Lau Shophouses & Verandahs / Tong4 lau4)",
            "現代玻璃超高層) (Context: 香港近代中西合璧歷史建築：唐樓、騎樓底與法定古蹟活化 (HK Hist)",
            "野營帆布帳篷) (Context: 香港近代中西合璧歷史建築：唐樓、騎樓底與法定古蹟活化 (HK Hist)",
            "單純地下防空洞) (Context: 香港近代中西合璧歷史建築：唐樓、騎樓底與法定古蹟活化 (HK Hist)"
          ],
          "answerIndex": 0,
          "explanation": "「唐樓與騎樓底」為香港十九世紀末至戰前最核心之城市街區形態特徵。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【古蹟活化】香港深水埗荔枝角道交界、由雷氏家族捐出並成功活化為浸會大學中醫藥保健中心之名建築係：",
          "options": [
            "雷生春 (Lui Seng Chun / Leoi4 sang1 ceon1)",
            "中環怡和大廈) (Context: 香港近代中西合璧歷史建築：唐樓、騎樓底與法定古蹟活化 (HK Hist)",
            "環球貿易廣場ICC) (Context: 香港近代中西合璧歷史建築：唐樓、騎樓底與法定古蹟活化 (HK Hist)",
            "香港摩天輪) (Context: 香港近代中西合璧歷史建築：唐樓、騎樓底與法定古蹟活化 (HK Hist)"
          ],
          "answerIndex": 0,
          "explanation": "「雷生春堂」為香港歷史建築活化保育最著名的成功示範標杆之一。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【保育理念】現代城市可持續規劃中對待老舊歷史建築群最進步之保護保育理念係：",
          "options": [
            "有機活化、保留歷史肌理並注入現代社區生命力 (Adaptive reuse, preserving urban fabric & community revitalization)",
            "全盤推倒夷為平地起豪宅) (Context: 香港近代中西合璧歷史建築：唐樓、騎樓底與法定古蹟活化 (HK Hist)",
            "全封閉鎖死禁止任何人進入) (Context: 香港近代中西合璧歷史建築：唐樓、騎樓底與法定古蹟活化 (HK Hist)",
            "塗抹劣質油漆遮蓋所有痕跡) (Context: 香港近代中西合璧歷史建築：唐樓、騎樓底與法定古蹟活化 (HK Hist)"
          ],
          "answerIndex": 0,
          "explanation": "「有機活化保育」在保留歷史記憶與文脈的同時賦予古建築現代實用功能。"
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
    "title": "現代嶺南建築流派與城市空間可持續規劃哲學：「空間通透」、「在地適應」、「天人合一」 (Modern Lingnan Urbanism)",
    "level": "C2",
    "objective": "掌握現代嶺南建築學派大師（夏昌世、莫伯治、何鏡堂院士）之核心規劃思想、空間通透庭園交融理念及當代綠色低碳城市可持續哲學。",
    "presentation": {
      "explanation": "現代嶺南建築學派在融匯現代主義與嶺南本土氣候特徵方面，創立了享譽國際之中國地域性建築理論：\n\n一、現代嶺南建築學派奠基人與核心哲學：\n１．奠基巨匠與代表作：\n- 夏昌世（遮陽與隔熱通風理論先驅）、莫伯治（廣州白雲賓館、白天鵝賓館故鄉水室內園林）、何鏡堂院士（上海世博會中國館、侵華日軍南京大屠殺遇難同胞紀念館擴建）。\n２．「現代嶺南建築三大核心原則」：\n- 「空間通透與庭園交融」：打破室內外絕對界限，將自然山水引入建築核心。\n- 「在地氣候主動適應」：遮陽板、架空層、通風採光天井之現代化重構。\n- 「文化傳承與現代形式之辯證」：以現代鋼筋混凝土演繹嶺南傳統神韻。\n\n二、城市空間規劃最高境界：\n- 「天人合一，城園共生，綠色低碳，可持續發展」（tin1 jan4 hap6 jat1, sing4 jyun4 gung6 sang1）。",
      "examples": [
        {
          "target": "現代嶺南建築大師將傳統庭園景觀巧妙引入現代高層建築內部，營造出空間通透、天人合一之極致美感。",
          "reading": "jin6 doi6 ling5 naam4 gin3 zuk6 daai6 si1 zoeng1 cyun4 tung4 ting4 jyun4 ging2 gun1 hiu2 miu6 jan5 jap6 jin6 doi6 gou1 cang4 gin3 zuk6 noi6 bou6, jing4 zou6 ceot1 hung1 gaan1 tung1 tau3, tin1 jan4 hap6 jat1 zi1 gik6 zi3 mei5 gam2. [jiːn˨ tɔːi˨ lɪŋ˩˧ naːm˨˩ kiːn˧ tsʊk̚˨ taːi˨ siː˥ tsœːŋ˥ tsʰyːn˨˩ tʰʊŋ˨˩ tʰɪŋ˨˩ jyːn˨˩ kɪŋ˧˥ kuːn˥ hiːu˧˥ miːu˨ jɐn˩˧ jɐp̚˨ jiːn˨ tɔːi˨ kou˥ tsʰɐŋ˨˩ kiːn˧ tsʊk̚˨ nɔːi˨ pou˨, jɪŋ˨˩ tsou˨ tsʰɵt̚˥ hʊŋ˥ kaːn˥ tʰʊŋ˥ tʰɐu˧, tʰiːn˥ jɐn˨˩ hɐp̚˨ jɐt̚˥ tsiː˥ kɪk̚˨ tsiː˧ mei˩˧ kɐm˧˥] (YEEN-DOY LING-NAHM GEEN-JUK DY-SEE JEUNG CHUEN-TOONG TING-YUEN GING-GOON HIU-MEW YUN-YUP YEEN-DOY GOU-CHUNG GEEN-JUK NOY-BOU, YING-JOU-CHUT HOONG-GAHN TOONG-TAU, TEEN-YUN HUP-YUT JEE GIK-JEE MAY-GUM)",
          "translation": "Modern Lingnan architectural masters skillfully introduced traditional courtyard landscapes inside modern high-rise buildings, creating an ultimate aesthetic of spatial permeability and harmony between nature and humanity."
        },
        {
          "target": "白天鵝賓館首創在大型現代中庭內設置「故鄉水」園林景觀，開創咗現代建築與嶺南傳統文脈融合之光輝範例。",
          "reading": "baak6 tin1 ngo4 ban1 gun2 sau2 cong3 zoi6 daai6 jing4 jin6 doi6 zung1 ting4 noi6 cit3 zi3 \"gu3 hoeng1 seoi2\" jyun4 lam4 ging2 gun1, hoi1 cong3 zo2 jin6 doi6 gin3 zuk6 jyu5 ling5 naam4 cyun4 tung4 man4 mak6 jung4 hap6 zi1 gwong1 fai1 faan6 lai6. [paːk̚˨ tʰiːn˥ ŋɔː˨˩ pɐn˥ kuːn˧˥ sɐu˧˥ tsʰɔːŋ˧ tsɔːi˨ taːi˨ jɪŋ˨˩ jiːn˨ tɔːi˨ tsʊŋ˥ tʰɪŋ˨˩ nɔːi˨ tsʰiːt̚˧ tsiː˧ \"kuː˧ hœːŋ˥ sɵy˧˥\" jyːn˨˩ lɐm˨˩ kɪŋ˧˥ kuːn˥, hɔːi˥ tsʰɔːŋ˧ tsɔː˧˥ jiːn˨ tɔːi˨ kiːn˧ tsʊk̚˨ jyː˩˧ lɪŋ˩˧ naːm˨˩ tsʰyːn˨˩ tʰʊŋ˨˩ mɐn˨˩ mɐk̚˨ jʊŋ˨˩ hɐp̚˨ tsiː˥ kʷɔːŋ˥ fɐi˥ faːn˨ lɐi˨] (BAAK-TEEN-NGOH BUN-GOON SAU-CHONG JOY DY-YING YEEN-DOY JOONG-TING NOY CHEET-JEE \"GOO-HEUNG-SOEY\" YUEN-LUM GING-GOON, HOI-CHONG-JOR YEEN-DOY GEEN-JUK YUE LING-NAHM CHUEN-TOONG MUN-MUK YOONG-HUP JEE GWONG-FY FAHN-LY)",
          "translation": "The White Swan Hotel pioneered the installation of the 'Hometown Waters' garden landscape within a large modern atrium, establishing a glorious exemplar of fusing modern architecture with Lingnan traditional cultural heritage."
        },
        {
          "target": "當代嶺南城市規劃秉持綠色低碳理念，倡導「城在園中、園在城中」之可持續生態宜居空間構想。",
          "reading": "dong1 doi6 ling5 naam4 sing4 si5 kwai1 waak6 bing2 ci4 luk6 sik1 dai1 taan3 lei5 nim6, coeng3 dou6 \"sing4 zoi6 jyun4 zung1, jyun4 zoi6 sing4 zung1\" zi1 ho2 ci4 zuk6 sang1 taai3 ji4 geoi1 hung1 gaan1 gau3 soeng2. [tɔːŋ˥ tɔːi˨ lɪŋ˩˧ naːm˨˩ sɪŋ˨˩ siː˨ kʰwɐi˥ waːk̚˨ pɪŋ˧˥ tsʰiː˨˩ lʊk̚˨ sɪk̚˥ tɐi˥ tʰaːn˧ lei˩˧ niːm˨, tsʰœːŋ˧ tou˨ \"sɪŋ˨˩ tsɔːi˨ jyːn˨˩ tsʊŋ˥, jyːn˨˩ tsɔːi˨ sɪŋ˨˩ tsʊŋ˥\" tsiː˥ hɔː˧˥ tsʰiː˨˩ tsʊk̚˨ sɐŋ˥ tʰaːi˧ jiː˨˩ kɵy˥ hʊŋ˥ kaːn˥ kɐu˧ sœːŋ˧˥] (DONG-DOY LING-NAHM SING-SEE KWAI-WAAK BING-CHEE LUK-SIK DY-TAHN LEY-NEEM, CHEUNG-DOU \"SING JOY YUEN-JOONG, YUEN JOY SING-JOONG\" JEE HOH-CHEE-JUK SUNG-TY YEE-GOEY HOONG-GAHN GAU-SEUNG)",
          "translation": "Contemporary Lingnan urban planning adheres to green and low-carbon principles, advocating a sustainable, ecological, and livable spatial vision of 'the city within the garden and the garden within the city'."
        }
      ],
      "mnemonics": [
        "【現代嶺南訣】空間通透納明光，故鄉水美白天鵝；城園共生生態好，天人合一萬載歌！"
      ],
      "culturalNotes": [
        "廣州白天鵝賓館由霍英東先生與廣東省政府合資興建，1983年開業，是中國第一家中外合作的五星級賓館，其『故鄉水』景觀承載了數代海內外華僑與粵港同胞的故土鄉愁。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【現代建築】廣州白天鵝賓館在中庭內首創、將嶺南傳統水石園林搬入現代五星級酒店之著名室內景觀係：",
          "options": [
            "故鄉水 (Hometown Waters / Gu3 hoeng1 seoi2)",
            "人工真雪滑雪場) (Context: 現代嶺南建築流派與城市空間可持續規劃哲學：「空間通透」、「在地適應」、)",
            "室內高速賽車道) (Context: 現代嶺南建築流派與城市空間可持續規劃哲學：「空間通透」、「在地適應」、)",
            "巨型金屬旋轉木馬) (Context: 現代嶺南建築流派與城市空間可持續規劃哲學：「空間通透」、「在地適應」、)"
          ],
          "answerIndex": 0,
          "explanation": "白天鵝賓館「故鄉水」室內園林為現代嶺南建築與鄉愁意象融合之世界經典。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【建築大師】設計上海世博會中國館（東方之冠）、侵華日軍南京大屠殺遇難同胞紀念館擴建之現代嶺南學派院士建築師係：",
          "options": [
            "何鏡堂院士 (Academician He Jingtang)",
            "貝聿銘) (Context: 現代嶺南建築流派與城市空間可持續規劃哲學：「空間通透」、「在地適應」、)",
            "梁思成) (Context: 現代嶺南建築流派與城市空間可持續規劃哲學：「空間通透」、「在地適應」、)",
            "林徽因) (Context: 現代嶺南建築流派與城市空間可持續規劃哲學：「空間通透」、「在地適應」、)"
          ],
          "answerIndex": 0,
          "explanation": "何鏡堂院士為當代嶺南建築學派旗幟性人物及中國工程院院士。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【規劃哲學】現代嶺南建築學派在城市空間與建築設計中最核心之空間哲學特徵係：",
          "options": [
            "空間通透、庭園交融、在地氣候主動適應與天人合一 (Spatial permeability, courtyard integration, climate adaptability & harmony with nature)",
            "全封閉單一火柴盒結構) (Context: 現代嶺南建築流派與城市空間可持續規劃哲學：「空間通透」、「在地適應」、)",
            "完全脫離周圍自然環境) (Context: 現代嶺南建築流派與城市空間可持續規劃哲學：「空間通透」、「在地適應」、)",
            "徹底封閉不通風無採光) (Context: 現代嶺南建築流派與城市空間可持續規劃哲學：「空間通透」、「在地適應」、)"
          ],
          "answerIndex": 0,
          "explanation": "空間通透、庭園交融與在地氣候適應係現代嶺南建築學派立足世界建築之林的根本靈魂。"
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
    "title": "維也納條約法公約（VCLT）與多邊條約締結程序：「全權證書」、「條約草簽」、「批准加入」 (Treaty Law & Ratification)",
    "level": "C2",
    "objective": "掌握《維也納條約法公約》（VCLT）核心原則、條約締結五大法定程序（全權證書、草簽、批准、加入、保留）及國際條約法高階粵語話語。",
    "presentation": {
      "explanation": "在多邊外交與國際公法體系中，《維也納條約法公約》奠定了主權國家締結與履行條約之根本法理基石：\n\n一、多邊國際條約締結法定程序：\n１．「全權證書與代表權」（cyun4 kyun4 zing3 syu1）：\n- 代表國家談判或簽署條約之代表必須出具由國家元首、政府首腦或外長簽發之全權證書。\n２．「條約約文採納與草簽」（coi2 naap6 jyu5 cou2 cim1）：\n- 經全體與會代表協商一致或三分之二多數通過條約約文，由談判代表草簽（Initialling）確認文本。\n３．「正式簽署與批准加入」（pai1 zeon2 jyu5 gaa1 jap6）：\n- 簽署後需經國內立法機關批准，並向條約保存機關交存批准書（Deposit of Instrument of Ratification）。\n\n二、國際法根本鐵律：\n- 「約定必須遵守」（joek3 ding6 bit1 seoi1 zeon1 sau2 / Pacta sunt servanda）：合法締結之條約對締約國具有絕對約束力，必須善意履行。",
      "examples": [
        {
          "target": "特命全權大使向大會秘書處遞交全權證書，代表主權國家正式簽署多邊國際環境保護公約。",
          "reading": "dak6 ming6 cyun4 kyun4 daai6 si3 hoeng3 daai6 wui6*2 bei3 syu1 cyu3 dai6 gaau1 cyun4 kyun4 zing3 syu1, doi6 biu2 zyu2 kyun4 gwok3 zing3 sik1 cim1 cyu5 do1 bin1 gwok3 zai3 waan4 ging2 bou2 wu6 gung1 joek3. [tɐk̚˨ mɪŋ˨ cyːn˨˩ kʰyːn˨˩ taːi˨ siː˧ hœːŋ˧ taːi˨ wuːi˨˩ pei˧ syː˥ tsʰyː˧ tɐi˨ kaːu˥ cyːn˨˩ kʰyːn˨˩ tsɪŋ˧ syː˥, tɔːi˨ piːu˧˥ tsyː˧˥ kʰyːn˨˩ kʷɔːk̚˧ tsɪŋ˧ sɪk̚˥ tsʰiːm˥ tsyː˧˥ tɔː˥ piːn˥ kʷɔːk̚˧ tsɐi˧ waːn˨˩ kɪŋ˧˥ pou˧˥ wuː˨ kʊŋ˥ jœːk̚˧] (DUK-MING CHUEN-KUEN DY-SEE HEUNG DY-WUI BAY-SUE-CHUE DY-GAU CHUEN-KUEN JING-SUE, DOY-BEW JUE-KUEN GWOK JING-SIK CHEEM-CHUE DOH-BEEN GWOK-JY WAHN-GING BOU-WOO GONG-YERK)",
          "translation": "The Ambassador Extraordinary and Plenipotentiary submitted the full powers to the General Assembly Secretariat, formally signing the multilateral international environmental protection convention on behalf of the sovereign state."
        },
        {
          "target": "立法機關全票審議通過條約批准案，國家元首簽署批准書並正式交存聯合國秘書處，條約隨即生效。",
          "reading": "laap6 faat3 gei1 gwaan1 cyun4 piu3 sam2 ji5 tung1 gwo3 tiu4 joek3 pai1 zeon2 on3, gwok3 gaa1 jyun4 sau2 cim1 cyu5 pai1 zeon2 syu1 bing6 zing3 sik1 gaau1 cyun4 lyun4 hap6 gwok3 bei3 syu1 cyu3, tiu4 joek3 ceoi4 zik1 saang1 haau6. [laːp̚˨ faːt̚˧ kei˥ kʷaːn˥ tsʰyːn˨˩ pʰiːu˧ sɐm˧˥ jiː˩˧ tʰʊŋ˥ kʷɔː˧ tʰiːu˨˩ jœːk̚˧ pʰɐi˥ tsɵn˧˥ ɔːn˧, kʷɔːk̚˧ kaː˥ jyːn˨˩ sɐu˧˥ tsʰiːm˥ tsyː˧˥ pʰɐi˥ tsɵn˧˥ syː˥ pɪŋ˨ tsɪŋ˧ sɪk̚˥ kaːu˥ tsʰyːn˨˩ lyːn˨˩ hɐp̚˨ kʷɔːk̚˧ pei˧ syː˥ tsʰyː˧, tʰiːu˨˩ jœːk̚˧ tsʰɵy˨˩ tsɪk̚˥ saːŋ˥ haːu˨] (LAHP-FAHT GAY-GWAHN CHUEN-PEW SUM-YEE TOONG-GWOR TEW-YERK PY-JEON ON, GWOK-GAH YUEN-SAU CHEEM-CHUE PY-JEON-SUE BING JING-SIK GAU-CHUEN LUEN-HUP GWOK BAY-SUE-CHUE, TEW-YERK CHOEY-JIK SUNG-HAU)",
          "translation": "The legislature unanimously deliberated and passed the treaty ratification bill, the head of state signed the instrument of ratification and formally deposited it with the UN Secretariat, and the treaty immediately entered into force."
        },
        {
          "target": "締約各方必須恪守「約定必須遵守」之國際法最高原則，善意履行條約所規定之全部國際法義務。",
          "reading": "tai3 joek3 gok3 fong1 bit1 seoi1 kok3 sau2 \"joek3 ding6 bit1 seoi1 zeon1 sau2\" zi1 gwok3 zai3 faat3 zeoi3 gou1 jyun4 zak1, sin6 ji3 lei5 hang4 tiu4 joek3 so2 kwai1 ding6 zi1 cyun4 bou6 gwok3 zai3 faat3 ji6 mou6. [tʰɐi˧ jœːk̚˧ kɔːk̚˧ fɔːŋ˥ pɪt̚˥ sɵy˥ kʰɔːk̚˧ sɐu˧˥ \"jœːk̚˧ tɪŋ˨ pɪt̚˥ sɵy˥ tsɵn˥ sɐu˧˥\" tsiː˥ kʷɔːk̚˧ tsɐi˧ faːt̚˧ tsɵy˧ kou˥ jyːn˨˩ tsɐk̚˥, siːn˨ jiː˧ lei˩˧ hɐŋ˨˩ tʰiːu˨˩ jœːk̚˧ sɔː˧˥ kʰwɐi˥ tɪŋ˨ tsiː˥ tsʰyːn˨˩ pou˨ kʷɔːk̚˧ tsɐi˧ faːt̚˧ jiː˨ mouou˨] (TY-YERK GOK-FONG BEET-SOEY KOK-SAU \"YERK-DING BEET-SOEY JEON-SAU\" JEE GWOK-JY FAHT JEOY-GOU YUEN-JUK, SEEN-YEE LEY-HAHNG TEW-YERK SOH KWAI-DING JEE CHUEN-BOU GWOK-JY FAHT YEE-MOU)",
          "translation": "All contracting parties must strictly abide by the supreme international law principle of 'pacta sunt servanda', performing in good faith all international legal obligations stipulated by the treaty."
        }
      ],
      "mnemonics": [
        "【條約締結訣】全權證書代表真，草簽約文意相親；批准交存公約立，約定必守千秋信！"
      ],
      "culturalNotes": [
        "香港作為國際金融與航運中心，根據《基本法》享有在對外事務中以『中國香港』（Hong Kong, China）名義單獨參與國際組織、簽署雙邊投資及民用航空協定之廣泛法定權利。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【國際法原則】《維也納條約法公約》中規定有效條約對締約國具有絕對法律約束力、必須善意履行之拉丁法諺係：",
          "options": [
            "約定必須遵守 (Pacta sunt servanda / Joek3 ding6 bit1 seoi1 zeon1 sau2)",
            "強權即是真理) (Context: 維也納條約法公約（VCLT）與多邊條約締結程序：「全權證書」、「條約草)",
            "條約隨時可以單方作廢) (Context: 維也納條約法公約（VCLT）與多邊條約締結程序：「全權證書」、「條約草)",
            "口頭承諾無須遵守) (Context: 維也納條約法公約（VCLT）與多邊條約締結程序：「全權證書」、「條約草)"
          ],
          "answerIndex": 0,
          "explanation": "「約定必須遵守（Pacta sunt servanda）」為國際公法與國際條約法體系中最高級別之根本鐵律。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【締約程序】國家元首或外長出具證明代表享有合法權限談判並簽署國際條約之法定權力憑證係：",
          "options": [
            "全權證書 (Full Powers / Cyun4 kyun4 zing3 syu1)",
            "普通商業名片) (Context: 維也納條約法公約（VCLT）與多邊條約締結程序：「全權證書」、「條約草)",
            "私人推薦信) (Context: 維也納條約法公約（VCLT）與多邊條約締結程序：「全權證書」、「條約草)",
            "口頭自我介紹) (Context: 維也納條約法公約（VCLT）與多邊條約締結程序：「全權證書」、「條約草)"
          ],
          "answerIndex": 0,
          "explanation": "「全權證書（Full Powers）」為代表主權國家締結國際條約之法定必要憑證。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【條約生效】一項多邊國際公約在完成簽署後、在國際法層面正式對締約國產生法律約束力之關鍵法律行為係：",
          "options": [
            "批准並交存批准書 (Ratification and deposit of instrument of ratification)",
            "單純在新聞上口頭宣布) (Context: 維也納條約法公約（VCLT）與多邊條約締結程序：「全權證書」、「條約草)",
            "未經批准私下存放) (Context: 維也納條約法公約（VCLT）與多邊條約締結程序：「全權證書」、「條約草)",
            "拒絕履行任何手續) (Context: 維也納條約法公約（VCLT）與多邊條約締結程序：「全權證書」、「條約草)"
          ],
          "answerIndex": 0,
          "explanation": "國內立法機關批准並向條約保存機關交存批准書係多邊條約對國家正式生效之法定要件。"
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
    "title": "聯合國大會多邊辯論、決議草案協商與程序動議：「程序性動議」、「全體一致通過」、「修正案磋商」 (UNGA Multilateral Debate)",
    "level": "C2",
    "objective": "掌握聯合國大會多邊外交辯論規則（發言次序、程序問題、答辯權）、決議草案磋商博弈及各國代表團正式外交交涉話語體系。",
    "presentation": {
      "explanation": "聯合國大會是主權國家平等開展多邊外交與國際秩序構建之全球最高講壇：\n\n一、聯大議事規則與辯論程序核心話語矩陣：\n１．「程序問題與發言次序」（Point of Order / cing4 zeoi6 man6 tai4）：\n- 「主席先生，我方提出程序問題，要求嚴格遵守議事規則中關於發言時限之規定」。\n２．「答辯權之行使」（Right of Reply / daap3 bin6 kyun4）：\n- 「鑒於個別代表在剛才發言中對我國政策之不實指責，我方請求行使答辯權予以嚴正駁斥」。\n３．「決議草案磋商與表決模式」：\n- 「決議草案共同倡議國」（Co-sponsors）、修正案磋商（Amendments）。\n- 「全體一致協商一致通過」（Consensus / cyun4 tai2 jat1 zi3）：無需付諸表決即獲通過。\n- 「付諸記名表決」（Roll-call Vote / gei3 ming4 biu2 kyut3）。",
      "examples": [
        {
          "target": "常駐聯合國代表在一般性辯論中嚴正行使答辯權，有理有利有節駁斥個別國家之無理指責與雙重標準。",
          "reading": "soeng4 zyu3 lyun4 hap6 gwok3 doi6 biu2 zoi6 jat1 bun1 sing3 bin6 leon6 zung1 jim4 zing3 hang4 sai2 daap3 bin6 kyun4, jau5 lei5 jau5 lei6 jau5 zit3 bok3 cik1 go3 bit6 gwok3 gaa1 zi1 mou4 lei5 zi2 zaak3 jyu5 soeng1 zung1 biu1 zeon2. [sœːŋ˨˩ tsyː˧ lyːn˨˩ hɐp̚˨ kʷɔːk̚˧ tɔːi˨ piːu˧˥ tsɔːi˨ jɐt̚˥ puːn˥ sɪŋ˧ piːn˨ lœːn˨ tsʊŋ˥ jiːm˨˩ tsɪŋ˧ hɐŋ˨˩ sɐi˧˥ taːp̚˧ piːn˨ kʰyːn˨˩, jɐu˩˧ lei˩˧ jɐu˩˧ lei˨ jɐu˩˧ tsit̚˧ pɔːk̚˧ tsʰɪk̚˥ kɔː˧ piːt̚˨ kʷɔːk̚˧ kaː˥ tsiː˥ mouou˨˩ lei˩˧ tsiː˧˥ tsaːk̚˧ jyː˩˧ sœːŋ˥ tsʊŋ˨ piːu˥ tsɵn˧˥] (SEUNG-JUE LUEN-HUP GWOK DOY-BEW JOY YUT-BOON-SING BEEN-LEON JOONG YEEM-JING HAHNG-SY DAAP-BEEN-KUEN, YAU-LEY YAU-LEY YAU-JEET BOK-CHIK GOH-BEET GWOK-GAH JEE MOU-LEY JEE-JAAK YUE SEUNG-JOONG BEW-JEON)",
          "translation": "The Permanent Representative to the UN solemnly exercised the right of reply in the General Debate, forcefully and measuredly refuting the unjustified accusations and double standards of individual countries."
        },
        {
          "target": "經過多輪艱苦卓絕之多邊磋商，各國代表團最終就決議草案達成共識，獲得聯大全體一致協商通過。",
          "reading": "ging1 gwo3 do1 leon4 gaan1 fu2 zoek3 zyut6 zi1 do1 bin1 coe1 seong1, gok3 gwok3 doi6 biu2 tyun4 zeoi3 zung1 zau6 kyut3 ji5 cou2 on3 daat6 sing4 gung6 sik1, wok6 dak1 lyun4 daai6 cyun4 tai2 jat1 zi3 hip3 soeng1 tung1 gwo3. [kɪŋ˥ kʷɔː˧ tɔː˥ lɵn˨˩ kaːn˥ fuː˧˥ tsœːk̚˧ tsyːt̚˧ tsiː˥ tɔː˥ piːn˥ tsʰœː˥ sœːŋ˥, kɔːk̚˧ kʷɔːk̚˧ tɔːi˨ piːu˧˥ tʰyːn˨˩ tsɵy˧ tsʊŋ˥ tsɐu˧ kʰyːt̚˧ jiː˩˧ tsʰou˧˥ ɔːn˧ taːt̚˨ sɪŋ˨˩ kʊŋ˧ sɪk̚˥, waːk̚˨ tɐk̚˥ lyːn˨˩ taːi˨ tsʰyːn˨˩ tʰɐi˧˥ jɐt̚˥ tsiː˧ hip̚˧ sœːŋ˥ tʰʊŋ˥ kʷɔː˧] (GING-GWOR DOH-LEON GAHN-FOO JERK-JUET JEE DOH-BEEN CHOE-SEUNG, GOK-GWOK DOY-BEW-TUEN JEOY-JOONG JAU KUET-YEE CHOU-ON DAHT-SING GONG-SIK, WOK-DUK LUEN-DY CHUEN-TY-YUT-JEE HEEP-SEUNG TOONG-GWOR)",
          "translation": "Following multiple rounds of arduous multilateral consultations, all delegations finally reached consensus on the draft resolution, which was adopted by consensus in the UN General Assembly."
        },
        {
          "target": "代表團團長就重大國際議題發表主旨演說，呼籲國際社會踐行真正之多邊主義同合作共贏。",
          "reading": "doi6 biu2 tyun4 tyun4 zoeng2 zau6 zung6 daai6 gwok3 zai3 ji4 tai4 faat3 biu2 zyu2 zi2 jin2 seoi3, fu1 jyu4 gwok3 zai3 se5 wui6*2 zin6 hang4 zan1 zing3 zi1 do1 bin1 zyu2 ji6 tung4 hap6 zok3 gung6 jing4. [tɔːi˨ piːu˧˥ tʰyːn˨˩ tʰyːn˨˩ tsœːŋ˧˥ tsɐu˧ tsʊŋ˨ taːi˨ kʷɔːk̚˧ tsɐi˧ jiː˨˩ tʰɐi˨˩ faːt̚˧ piːu˧˥ tsyː˧˥ tsiː˧˥ jiːn˧˥ sɵy˧, fuː˥ jyː˩˧ kʷɔːk̚˧ tsɐi˧ sɛː˩˧ wuːi˨˩ tsiːn˨ hɐŋ˨˩ tsɐn˥ tsɪŋ˧ tsiː˥ tɔː˥ piːn˥ tsyː˧˥ jiː˩˧ tʰʊŋ˨˩ hɐp̚˨ tsɔːk̚˧ kʊŋ˨ jɪŋ˨˩] (DOY-BEW-TUEN TUEN-JEUNG JAU JOONG-DY GWOK-JY YEE-TY FAHT-BEW JUE-JEE YEEN-SOEY, FOO-YUE GWOK-JY SHEH-WUI JEEN-HAHNG JUN-JING JEE DOH-BEEN-JUE-YEE TOONG HUP-JOK GONG-YING)",
          "translation": "The head of the delegation delivered a keynote address on major international issues, calling upon the international community to practice genuine multilateralism and win-win cooperation."
        }
      ],
      "mnemonics": [
        "【聯大外交訣】程序問題立新規，答辯權行理不虧；多邊磋商成共識，聯大講壇展宏威！"
      ],
      "culturalNotes": [
        "在聯合國六種官方正式工作語言中，中文擁有崇高的國際公法地位。在多邊國際談判中，精準的中文同聲傳譯與法律文本草擬是捍衛國家核心利益與國際公平正義的關鍵屏障。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【多邊外交】在國際會議中當本國立場遭到他國代表歪曲指責時、代表團請求大會主席給予發言機會進行反駁之法定外交權利係：",
          "options": [
            "答辯權 (Right of Reply / Daap3 bin6 kyun4)",
            "直接離場抗議) (Context: 聯合國大會多邊辯論、決議草案協商與程序動議：「程序性動議」、「全體一致)",
            "當場大聲喧嘩) (Context: 聯合國大會多邊辯論、決議草案協商與程序動議：「程序性動議」、「全體一致)",
            "永久保持沉默) (Context: 聯合國大會多邊辯論、決議草案協商與程序動議：「程序性動議」、「全體一致)"
          ],
          "answerIndex": 0,
          "explanation": "「答辯權（Right of Reply）」為聯合國大會及各大多邊外交論壇中捍衛國家尊嚴與立場之標準法定程序權利。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【表決機制】聯合國大會決議草案在無任何代表團提出異議、無需付諸投票表決而一致通過之最高級別通過方式係：",
          "options": [
            "協商一致通過 (Adoption by Consensus / Cyun4 tai2 jat1 zi3 hip3 soeng1)",
            "少數服從多數勉強通過) (Context: 聯合國大會多邊辯論、決議草案協商與程序動議：「程序性動議」、「全體一致)",
            "抽籤決定) (Context: 聯合國大會多邊辯論、決議草案協商與程序動議：「程序性動議」、「全體一致)",
            "主席一人專斷) (Context: 聯合國大會多邊辯論、決議草案協商與程序動議：「程序性動議」、「全體一致)"
          ],
          "answerIndex": 0,
          "explanation": "「協商一致（Consensus）」代表了國際社會全體成員之最高政治共識。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【議事規則】在多邊會議進行中代表針對主持程序或發言規則是否合規當場打斷並要求主席裁決之程序工具係：",
          "options": [
            "程序問題 (Point of Order / Cing4 zeoi6 man6 tai4)",
            "私人聊天) (Context: 聯合國大會多邊辯論、決議草案協商與程序動議：「程序性動議」、「全體一致)",
            "廣告宣傳) (Context: 聯合國大會多邊辯論、決議草案協商與程序動議：「程序性動議」、「全體一致)",
            "無效抱怨) (Context: 聯合國大會多邊辯論、決議草案協商與程序動議：「程序性動議」、「全體一致)"
          ],
          "answerIndex": 0,
          "explanation": "「程序問題（Point of Order）」為各國代表糾正會議偏離議事規則之有力法定手段。"
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
    "title": "國際法院（ICJ）訴訟辯護、管轄權異議與諮詢意見：「管轄權裁定」、「先決抗辯」、「確定力」 (ICJ Litigation & Advisory Opinions)",
    "level": "C2",
    "objective": "掌握國際法院（ICJ）訴訟程序（管轄權異議、先決抗辯、臨時保全措施、終局判決）、諮詢意見法律地位及海牙和平宮訴訟抗辯話語。",
    "presentation": {
      "explanation": "聯合國主要司法機關國際法院（ICJ，海牙和平宮）承擔著和平解決國家間法律爭端之最高司法職能：\n\n一、國際法院訴訟兩大核心階段：\n１．「管轄權異議與先決抗辯」（Preliminary Objections / sin1 kyut3 kong3 bin6）：\n- 被告國可在實體審理前提出法院缺乏管轄權（Lack of Jurisdiction）或起訴不可受理（Inadmissibility）之先決抗辯。\n２．「實體審理與終局判決」（Merits & Final Judgment）：\n- 經過書面答辯與口頭辯論，法院作出終局且具法律約束力之判決（Final and binding）。\n\n二、國際司法重要概念：\n- 「既判力 / 確定力」（kok3 ding6 lik6 / Res judicata）：案件一經終審判決，同一當事方不得就同一標的重複起訴。\n- 「諮詢意見」（zi1 seon1 ji3 gin3 / Advisory Opinions）：應聯大或安理會請求，就重大國際法律問題提供權威司法闡釋。",
      "examples": [
        {
          "target": "首席法律顧問在海牙國際法院口頭辯論中提出有力之先決抗辯，成功論證法院對本案缺乏管轄權。",
          "reading": "sau2 zik6 faat3 leot6 gu3 man6 zoi6 hoi2 ngaa4 gwok3 zai3 faat3 jyun6*2 hau2 tau4 bin6 leon6 zung1 tai4 ceot1 jau5 lik6 zi1 sin1 kyut3 kong3 bin6, sing4 gung1 leon6 zing3 faat3 jyun6*2 deoi3 bun2 on3 kyut3 faat3 gun2 hat6 kyun4. [sɐu˧˥ tsɪk̚˨ faːt̚˧ lɵt̚˨ kuː˧ mɐn˨ tsɔːi˨ hɔːi˧˥ ŋaː˩˧ kʷɔːk̚˧ tsɐi˧ faːt̚˧ jyːn˨ hɐu˧˥ tʰɐu˨˩ piːn˨ lœːn˨ tsʊŋ˥ tʰɐi˨˩ tsʰɵt̚˥ jɐu˩˧ lɪk̚˨ tsiː˥ siːn˥ kʰyːt̚˧ kʰɔːŋ˧ piːn˨, sɪŋ˨˩ kʊŋ˥ lœːn˨ tsɪŋ˧ faːt̚˧ jyːn˨ tɵy˧ puːn˧˥ ɔːn˧ kʰyːt̚˧ faːt̚˧ kuːn˧˥ hɐt̚˨ kʰyːn˨˩] (SAU-JIK FAHT-LUT GOO-MUN JOY HOI-NGAH GWOK-JY FAHT-YUEN HAU-TAU BEEN-LEON JOONG TY-CHUT YAU-LIK JEE SEEN-KUET KONG-BEEN, SING-GONG LEON-JING FAHT-YUEN DEOY BOON-ON KUET-FAHT GOON-HUT-KUEN)",
          "translation": "The Principal Legal Counsel presented forceful preliminary objections during oral arguments at the International Court of Justice in The Hague, successfully demonstrating that the Court lacked jurisdiction over the present case."
        },
        {
          "target": "國際法院依據《國際法院規約》作出終局判決，該判決具備法律確定力，對雙方當事國均有拘束力。",
          "reading": "gwok3 zai3 faat3 jyun6*2 ji1 geui3 \"gwok3 zai3 faat3 jyun6*2 kwai1 joek3\" zok3 ceot1 zung1 guk6 pun3 kyut3, goi1 pun3 kyut3 geoi6 bei6 faat3 leot6 kok3 ding6 lik6, deoi3 soeng1 fong1 dong1 si6 gwok3 gwan1 jau5 geoi1 cuk1 lik6. [kʷɔːk̚˧ tsɐi˧ faːt̚˧ jyːn˨ jiː˥ kɵy˧ \"kʷɔːk̚˧ tsɐi˧ faːt̚˧ jyːn˨ kʰwɐi˥ jœːk̚˧\" tsɔːk̚˧ tsʰɵt̚˥ tsʊŋ˥ kʊk̚˨ pʰuːn˧ kʰyːt̚˧, kɔːi˥ pʰuːn˧ kʰyːt̚˧ kɵy˨ pei˨ faːt̚˧ lɵt̚˨ kʰɔːk̚˧ tɪŋ˨ lɪk̚˨, tɵy˧ sœːŋ˥ fɔːŋ˥ tɔːŋ˥ siː˨ kʷɔːk̚˧ kʷɐn˥ jɐu˩˧ kɵy˥ tsʰʊk̚˥ lɪk̚˨] (GWOK-JY FAHT-YUEN YEE-GOEY \"GWOK-JY FAHT-YUEN KWAI-YERK\" JOK-CHUT JOONG-GUK POON-KUET, GOI POON-KUET GOEY-BAY FAHT-LUT KOK-DING-LIK, DEOY SEUNG-FONG DONG-SEE GWOK GWUN-YAU GOEY-CHUK-LIK)",
          "translation": "The International Court of Justice rendered a final judgment in accordance with the ICJ Statute; the judgment possesses the authority of res judicata and is binding upon both state parties."
        },
        {
          "target": "應聯合國大會之特別請求，國際法院就相關國際法原則之適用範圍發表權威諮詢意見。",
          "reading": "jing1 lyun4 hap6 gwok3 daai6 wui6*2 zi1 dak6 bit6 cing2 kau4, gwok3 zai3 faat3 jyun6*2 zau6 soeng1 gwaan1 gwok3 zai3 faat3 jyun4 zak1 zi1 sik1 jung6 faan6 wai4 faat3 biu2 kyun4 wai1 zi1 seon1 ji3 gin3. [jɪŋ˥ lyːn˨˩ hɐp̚˨ kʷɔːk̚˧ taːi˨ wuːi˨˩ tsiː˥ tɐk̚˨ piːt̚˨ tsʰɪŋ˧˥ kʰɐu˨˩, kʷɔːk̚˧ tsɐi˧ faːt̚˧ jyːn˨ tsɐu˧ sœːŋ˥ kʷaːn˥ kʷɔːk̚˧ tsɐi˧ faːt̚˧ jyːn˨˩ tsɐk̚˥ tsiː˥ sɪk̚˥ jʊŋ˨ faːn˨ wɐi˨˩ faːt̚˧ piːu˧˥ kʰyːn˨˩ wɐi˥ tsiː˥ sɵn˧ jiː˧ kiːn˧] (YING LUEN-HUP GWOK DY-WUI JEE DUK-BEET CHING-KAU, GWOK-JY FAHT-YUEN JAU SEUNG-GWAHN GWOK-JY FAHT YUEN-JUK JEE SIK-YOONG FAHN-WAI FAHT-BEW KUEN-WAI JEE-SEON YEE-GEEN)",
          "translation": "Upon the special request of the UN General Assembly, the International Court of Justice delivered an authoritative advisory opinion on the scope of application of relevant international law principles."
        }
      ],
      "mnemonics": [
        "【海牙國際法訣】先決抗辯駁管轄，終局判決定力嘉；諮詢意見明法理，海牙法殿定邦家！"
      ],
      "culturalNotes": [
        "設在荷蘭海牙和平宮的國際法院是全球最高司法審判殿堂。包括倪征𣋉法官、史久鏞法官、薛捍勤法官在內的中華法學巨擘先後在國際法院擔任大法官及院長，為國際法治貢獻了深邃的東方智慧。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【國際訴訟】在海牙國際法院訴訟中，被告國在實體問題辯論前主張法院無權審理該案之法定抗辯稱為：",
          "options": [
            "先決抗辯 / 管轄權異議 (Preliminary Objections / Sin1 kyut3 kong3 bin6)",
            "直接認罪認罰) (Context: 國際法院（ICJ）訴訟辯護、管轄權異議與諮詢意見：「管轄權裁定」、「先)",
            "要求法官全部辭職) (Context: 國際法院（ICJ）訴訟辯護、管轄權異議與諮詢意見：「管轄權裁定」、「先)",
            "拒絕出庭並撕毀卷宗) (Context: 國際法院（ICJ）訴訟辯護、管轄權異議與諮詢意見：「管轄權裁定」、「先)"
          ],
          "answerIndex": 0,
          "explanation": "「先決抗辯（Preliminary Objections）」為阻斷不當國際訴訟、質疑法院管轄權之第一道關鍵司法防線。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【判決效力】法院判決一經依法終局作出即具有不容反悔、同一訴訟標的不得重複再審之司法效力稱為：",
          "options": [
            "確定力 / 既判力 (Res Judicata / Kok3 ding6 lik6)",
            "臨時參考效力) (Context: 國際法院（ICJ）訴訟辯護、管轄權異議與諮詢意見：「管轄權裁定」、「先)",
            "隨意撤銷權) (Context: 國際法院（ICJ）訴訟辯護、管轄權異議與諮詢意見：「管轄權裁定」、「先)",
            "無效通知) (Context: 國際法院（ICJ）訴訟辯護、管轄權異議與諮詢意見：「管轄權裁定」、「先)"
          ],
          "answerIndex": 0,
          "explanation": "「確定力（Res Judicata）」為保障司法判決權威性與終局性之根本法律基石。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【法院職能】國際法院除審理國家間爭端外、應聯大或安理會請求就重大法律難題發布權威法律闡釋之形式係：",
          "options": [
            "諮詢意見 (Advisory Opinion / Zi1 seon1 ji3 gin3)",
            "非公開私人信件) (Context: 國際法院（ICJ）訴訟辯護、管轄權異議與諮詢意見：「管轄權裁定」、「先)",
            "新聞評論員文章) (Context: 國際法院（ICJ）訴訟辯護、管轄權異議與諮詢意見：「管轄權裁定」、「先)",
            "匿名社交媒體帖文) (Context: 國際法院（ICJ）訴訟辯護、管轄權異議與諮詢意見：「管轄權裁定」、「先)"
          ],
          "answerIndex": 0,
          "explanation": "國際法院發布之「諮詢意見（Advisory Opinion）」在國際公法領域享有崇高的權威性與指導價值。"
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
    "title": "聯合國安理會制裁決議與維和行動授權談判：「第七章授權」、「制裁豁免」、「斡旋調解」 (UN Security Council Mandates)",
    "level": "C2",
    "objective": "掌握聯合國安理會《憲章》第七章強制行動授權、制裁措施（軍火禁運、資產凍結）、維和部隊交戰規則（ROE）及高階安理會博弈話語。",
    "presentation": {
      "explanation": "聯合國安全理事會承擔著維護國際和平與安全之首要責任，其第七章決議具備強制法律效力：\n\n一、安理會第七章強制措施體系：\n１．「第七章行動授權」（Action under Chapter VII）：\n- 依據《聯合國憲章》第七章，安理會可採取非軍事制裁或授權採取一切必要手段（All necessary means）恢復國際和平。\n２．「定向制裁與人道主義豁免」（Targeted Sanctions）：\n- 包括軍火禁運（Arms Embargo）、資產凍結（Asset Freeze）、旅行禁令（Travel Ban）；嚴格設立人道主義豁免條款。\n３．「維和行動授權與交戰規則」（Peacekeeping & ROE）：\n- 部署聯合國維和部隊（藍盔部隊），恪守中立、同意與自衛使用武力原則。\n\n二、安理會常任理事國博弈：\n- 「否決權之審慎行使」（Veto Power）與建設性斡旋調解（Mediation）。",
      "examples": [
        {
          "target": "安理會依據《憲章》第七章一致通過決議，授權向衝突地區部署聯合國維和部隊以保護平民安全。",
          "reading": "on1 lei5 wui6*2 ji1 geui3 \"hyun1 zoeng1\" dai6 cat1 zoeng1 jat1 zi3 tung1 gwo3 kyut3 ji5, sau6 kyun4 hoeng3 cung1 tat6 dei6 keoi1 bou3 cyu5 lyun4 hap6 gwok3 wai4 ci4 wo4 ping4 bou6 deoi6*2 ji5 bou2 wu6 ping4 man4 on1 cyun4. [ɔːn˥ lei˩˧ wuːi˨˩ jiː˥ kɵy˧ \"hyːn˥ tsœːŋ˥\" tɐi˨ tsʰɐt̚˥ tsœːŋ˥ jɐt̚˥ tsiː˧ tʰʊŋ˥ kʷɔː˧ kʰyːt̚˧ jiː˩˧, sɐu˨ kʰyːn˨˩ hœːŋ˧ tsʰʊŋ˥ tʰɐt̚˧ tei˨ kʰɵy˥ pou˧ tsʰyː˧˥ lyːn˨˩ hɐp̚˨ kʷɔːk̚˧ wɐi˨˩ tsʰiː˨˩ wɔː˨˩ pʰɪŋ˨˩ pou˨ tɵy˧˥ jiː˩˧ pou˧˥ wuː˨ pʰɪŋ˨˩ mɐn˨˩ ɔːn˥ tsʰyːn˨˩] (ON-LEY-WUI YEE-GOEY \"HUEN-JEUNG\" DY-CHUT-JEUNG YUT-JEE TOONG-GWOR KUET-YEE, SAU-KUEN HEUNG CHOONG-TUT DAY-KOEY BOU-CHUE LUEN-HUP GWOK WAI-CHEE WOH-PING BOU-DEOY YEE BOU-WOO PING-MUN ON-CHUEN)",
          "translation": "The Security Council unanimously adopted a resolution under Chapter VII of the Charter, authorizing the deployment of a UN peacekeeping operation to the conflict area to protect civilian safety."
        },
        {
          "target": "決議嚴格設立人道主義物資通行豁免機制，確保國際人道援助能夠及時無阻礙地送達受災民眾手中。",
          "reading": "kyut3 ji5 jim4 gak3 cit3 laap6 jan4 dou6 zyu2 ji6 mat6 zi1 tung1 hang4 kut3 min5 gei1 zai3, kok3 bou2 gwok3 zai3 jan4 dou6 jyun4 zo6 nang4 gau3 kap6 si4 mou4 zo2 ngoi6 dei6 sung3 daat6 sau6 zoi1 man4 zung3 sau2 zung1. [kʰyːt̚˧ jiː˩˧ jiːm˨˩ kɐk̚˧ tsʰiːt̚˧ laːp̚˨ jɐn˨˩ tou˨ tsyː˧˥ jiː˩˧ mɐt̚˨ tsiː˥ tʰʊŋ˥ hɐŋ˨˩ kʰyːt̚˧ miːn˩˧ kei˥ tsɐi˧, kʰɔːk̚˧ pou˧˥ kʷɔːk̚˧ tsɐi˧ jɐn˨˩ tou˨ jyːn˨˩ tsɔː˨ nɐŋ˨˩ kɐu˧ kʰɐp̚˨ siː˨˩ mouou˨˩ tsɔː˧˥ ŋɔːi˨ tei˨ sʊŋ˧ taːt̚˨ sɐu˨ tsɔːi˥ mɐn˨˩ tsʊŋ˧ sɐu˧˥ tsʊŋ˥] (KUET-YEE YEEM-GUK CHEET-LAHP YUN-DOU JUE-YEE MUT-JEE TOONG-HAHNG KUET-MEEN GAY-JAI, KOK-BOU GWOK-JY YUN-DOU YUEN-JOH NUNG-GAU KUP-SEE MOU-JOH-NGOY DAY SOONG-DAHT SAU-JOY MUN-JOONG SAU-JOONG)",
          "translation": "The resolution strictly established a humanitarian goods passage exemption mechanism, ensuring that international humanitarian aid can be delivered to disaster-stricken citizens timely and unhindered."
        },
        {
          "target": "常任理事國代表積極開展斡旋調解，推動停火協議達成，維護地區戰略穩定與和平局勢。",
          "reading": "soeng4 jam6 lei5 si3 gwok3 doi6 biu2 zik1 gik6 hoi1 zin2 waat6 syun4 tiu4 gaai2, teoi1 dung6 ting4 fo2 hip3 ding6 daat6 sing4, wai4 wu6 dei6 keoi1 zin3 loek6 wan2 ding6 jyu5 wo4 ping4 guk6 sai3. [sœːŋ˨˩ jɐm˨ lei˩˧ siː˧ kʷɔːk̚˧ tɔːi˨ piːu˧˥ tsɪk̚˥ kɪk̚˨ hɔːi˥ tsiːn˧˥ waːt̚˨ syːn˨˩ tʰiːu˨˩ kaːi˧˥, tʰɵy˥ tʊŋ˨ tʰɪŋ˨˩ fɔː˧˥ hip̚˧ tɪŋ˨ taːt̚˨ sɪŋ˨˩, wɐi˨˩ wuː˨ tei˨ kʰɵy˥ tsiːn˧ lœːk̚˨ wɐn˧˥ tɪŋ˨ jyː˩˧ wɔː˨˩ pʰɪŋ˨˩ kʊk̚˨ sɐi˧] (SEUNG-YUM LEY-SEE GWOK DOY-BEW JIK-GIK HOI-JEEN WAAT-SUEN TEW-GAI, TOEY-DOONG TING-FOH HEEP-DING DAHT-SING, WAI-WOO DAY-KOEY JEEN-LURK WUN-DING YUE WOH-PING GUK-SY)",
          "translation": "The permanent member representative actively conducted good offices and mediation, promoting the attainment of a ceasefire agreement and safeguarding regional strategic stability and peace."
        }
      ],
      "mnemonics": [
        "【安理會授權訣】第七章起威力宏，維和部隊保民從；人道豁免解民困，斡旋調解化干戈！"
      ],
      "culturalNotes": [
        "中國是聯合國安理會常任理事國中第一大維和人員出兵國和第二大維和攤款國。在黎巴嫩、馬里、南蘇丹等多個維和任務區，中國維和官兵贏得了國際社會的崇高讚譽。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【安理會決議】聯合國安理會為應對和平之威脅而採取強制性非軍事制裁或授權軍事行動所依據之《憲章》章節係：",
          "options": [
            "第七章 (Chapter VII / Dai6 cat1 zoeng1)",
            "第一章) (Context: 聯合國安理會制裁決議與維和行動授權談判：「第七章授權」、「制裁豁免」、)",
            "附錄目錄) (Context: 聯合國安理會制裁決議與維和行動授權談判：「第七章授權」、「制裁豁免」、)",
            "隨機章節) (Context: 聯合國安理會制裁決議與維和行動授權談判：「第七章授權」、「制裁豁免」、)"
          ],
          "answerIndex": 0,
          "explanation": "《聯合國憲章》第七章為安理會採取具有強制法律效力維和與制裁行動之唯一憲章授權來源。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【制裁保護】安理會實施經濟制裁時特意豁免食品、醫療藥品等基本人道物資以保護無辜平民之機制稱為：",
          "options": [
            "人道主義豁免 (Humanitarian Exemption / Jan4 dou6 zyu2 ji6 kut3 min5)",
            "全面封鎖飢餓政策) (Context: 聯合國安理會制裁決議與維和行動授權談判：「第七章授權」、「制裁豁免」、)",
            "無差別懲罰) (Context: 聯合國安理會制裁決議與維和行動授權談判：「第七章授權」、「制裁豁免」、)",
            "取消一切醫療援助) (Context: 聯合國安理會制裁決議與維和行動授權談判：「第七章授權」、「制裁豁免」、)"
          ],
          "answerIndex": 0,
          "explanation": "「人道主義豁免」為現代定向精準制裁避免殃及無辜平民生存權益之必備文明條款。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【和平使命】聯合國維持和平部隊（藍盔部隊）在執行維和任務時所必須嚴格恪守之三大傳統核心原則係：",
          "options": [
            "當事國同意、保持嚴格中立、非自衛不使用武力 (Consent of parties, impartiality & non-use of force except in self-defence)",
            "主動發動侵略戰爭) (Context: 聯合國安理會制裁決議與維和行動授權談判：「第七章授權」、「制裁豁免」、)",
            "全面偏袒單一參戰方) (Context: 聯合國安理會制裁決議與維和行動授權談判：「第七章授權」、「制裁豁免」、)",
            "隨意掠奪當地資源) (Context: 聯合國安理會制裁決議與維和行動授權談判：「第七章授權」、「制裁豁免」、)"
          ],
          "answerIndex": 0,
          "explanation": "「當事國同意、中立、自衛使用武力」為聯合國維和行動享譽全球之三大黃金基石。"
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
    "title": "高階國際峰會聯合公報草擬與外交辭令精要：「措辭折衷」、「建構性模糊」、「堅定承諾」 (Joint Communiqué Drafting)",
    "level": "C2",
    "objective": "掌握國際峰會聯合公報（Joint Communiqué）高階草擬藝術（建構性模糊、承諾層級微調、折衷表述）、外交辭令精妙語感及C2最高峰粵語話語體系。",
    "presentation": {
      "explanation": "作為C2級別之最高巔峰課程，本課融匯外交草擬學中最精深微妙之聯合公報（Joint Communiqué）語言藝術：\n\n一、國際外交公報文本草擬三層微調語意階梯：\n１．「承諾強度層級」（Commitment Intensity）：\n- 最高級（法律義務）：「堅定承諾、決心採取」（Firmly commit to / Reiterate determination）。\n- 中級（政策意向）：「讚賞、歡迎並鼓勵」（Applaud, welcome and encourage）。\n- 低級（審慎關注）：「注意到、審慎評估」（Note with grave concern / Take note of）。\n２．「建構性模糊手法」（gin3 gau3 sing3 mou4 hu4 / Constructive Ambiguity）：\n- 在核心分歧點採用具備多重解讀空間之精妙措辭，促成公報順利簽署，為未來留出彈性談判空間。\n３．「折衷方案與平衡表述」（Balance & Compromise Formulation）：\n- 兼顧雙方核心關切，做到字斟句酌、滴水不漏。\n\n二、全課程最高結語：\n- 融匯古今，貫通中西，以精準優雅之粵語承載人類文明與全球治理之崇高願景。",
      "examples": [
        {
          "target": "各國元首在閉幕式上共同簽署具有里程碑意義之聯合公報，重申對多邊主義與全球可持續發展之堅定承諾。",
          "reading": "gok3 gwok3 jyun4 sau2 zoi6 bai3 muk6 sik1 soeng6 gung6 tung4 cim1 cyu5 geoi6 jau5 lei5 cing4 biu1 ji3 ji3 zi1 lyun4 hap6 gung1 bou3, zung6 san1 deoi3 do1 bin1 zyu2 ji6 jyu5 cyun4 kau4 ho2 ci4 zuk6 faat3 zin2 zi1 gin1 ding6 sing4 nok6. [kɔːk̚˧ kʷɔːk̚˧ jyːn˨˩ sɐu˧˥ tsɔːi˨ pɐi˧ mʊk̚˨ sɪk̚˥ sœːŋ˨ kʊŋ˨ tʰʊŋ˨˩ tsʰiːm˥ tsyː˧˥ kɵy˨ jɐu˩˧ lei˩˧ tsʰɪŋ˨˩ piːu˥ jiː˧ jiː˧ tsiː˥ lyːn˨˩ hɐp̚˨ kʊŋ˥ pou˧, tsʊŋ˨ sɐn˥ tɵy˧ tɔː˥ piːn˥ tsyː˧˥ jiː˩˧ jyː˩˧ tsʰyːn˨˩ kʰɐu˨˩ hɔː˧˥ tsʰiː˨˩ tsʊk̚˨ faːt̚˧ tsiːn˧˥ tsiː˥ kiːn˥ tɪŋ˨ sɪŋ˨˩ nɔːk̚˧] (GOK-GWOK YUEN-SAU JOY BY-MUK-SIK SEUNG GONG-TOONG CHEEM-CHUE GOEY-YAU LEY-CHING-BEW YEE-YEE JEE LUEN-HUP GONG-BOU, JOONG-SUN DEOY DOH-BEEN-JUE-YEE YUE CHUEN-KAU HOH-CHEE-JUK FAHT-JEEN JEE GIN-DING SING-NOK)",
          "translation": "The heads of state jointly signed a milestone joint communiqué at the closing ceremony, reaffirming their firm commitment to multilateralism and global sustainable development."
        },
        {
          "target": "起草團隊通宵達旦字斟句酌，巧妙運用建構性模糊化解最後一項措辭爭議，推動公報獲得圓滿通過。",
          "reading": "hei2 cou2 tyun4 deoi6*2 tung1 siu1 daat6 daan3 zi6 zam1 geui3 zoek3, hiu2 miu6 wan6 jung6 gin3 gau3 sing3 mou4 hu4 faa3 gaai2 zeoi3 hau6 jat1 hong6 cou3 ci4 zaang1 ji3, teoi1 dung6 gung1 bou3 wok6 dak1 jyun4 mun5 tung1 gwo3. [hei˧˥ tsʰou˧˥ tʰyːn˨˩ tɵy˧˥ tʰʊŋ˥ siːu˥ taːt̚˨ taːn˧ tsiː˨ tsɐm˥ kɵy˧ tsœːk̚˧, hiːu˧˥ miːu˨ wɐn˨ jʊŋ˨ kiːn˧ kɐu˧ sɪŋ˧ mouou˨˩ wuː˨˩ faː˧ kaːi˧˥ tsɵy˧ hɐu˨ jɐt̚˥ hɔːŋ˨ tsʰou˧ tsʰiː˨˩ tsaːŋ˥ jiː˧, tʰɵy˥ tʊŋ˨ kʊŋ˥ pou˧ waːk̚˨ tɐk̚˥ jyːn˨˩ muːn˩˧ tʰʊŋ˥ kʷɔː˧] (HEY-CHOU TUEN-DEOY TOONG-SIU DAHT-DAHN JEE-JUM-GOEY-JERK, HIU-MEW WUN-YOONG GEEN-GAU-SING MOU-WOO FAH-GAI JEOY-HAU YUT-HOHNG CHOU-CHEE JAANG-YEE, TOEY-DOONG GONG-BOU WOK-DUK YUEN-MOON TOONG-GWOR)",
          "translation": "The drafting team worked through the night weighing every single word, skillfully deploying constructive ambiguity to resolve the final wording dispute and driving the joint communiqué to a successful adoption."
        },
        {
          "target": "至此我們圓滿完成了一百七十課粵語高階語言學課程之系統學習，全面掌握由日常生活至頂級外交之崇高語言藝術。",
          "reading": "zi3 ci2 ngo5 dei6 jyun4 mun5 jyun4 sing4 zo2 jat1 baak3 cat1 sap6 fo3 jyut6 jyu5 gou1 gaai1 jyu5 jin4 hok6 fo3 cing4 zi1 hai6 tung2 hok6 zaap6, cyun4 min6 zoeng2 wut6 jau4 jat6 seung4 sang1 wut6 zi3 ding2 kap1 ngoi6 gaau1 zi1 sung4 gou1 jyu5 jin4 ngai6 seot6. [tsiː˧ tsʰiː˧˥ ŋɔː˩˧ tei˨ jyːn˨˩ muːn˩˧ jyːn˨˩ sɪŋ˨˩ tsɔː˧˥ jɐt̚˥ paːk̚˧ tsʰɐt̚˥ sɐp̚˨ fɔː˧ jyːt̚˨ jyː˩˧ kou˥ kaːi˥ jyː˩˧ jiːn˨˩ hɔːk̚˨ fɔː˧ tsʰɪŋ˨˩ tsiː˥ hɐi˨ tʰʊŋ˧˥ hɔːk̚˨ tsaːp̚˨, tsʰyːn˨˩ miːn˨ tsœːŋ˧˥ wuːt̚˨ jɐu˨˩ jɐt˨ sœːŋ˨˩ sɐŋ˥ wuːt̚˨ tsiː˧ tɪŋ˧˥ kʰɐp̚˥ ŋɔːi˨ kaːu˥ tsiː˥ sʊŋ˨˩ kou˥ jyː˩˧ jiːn˨˩ ŋɐi˨ sɵt̚˨] (JEE-CHEE NGOH-DAY YUEN-MOON YUEN-SING-JOR YUT-BAAK CHUT-SUP FOH YUET-YUE GOU-GY YUE-YEEN-HOK FOH-CHING JEE HY-TOONG HOK-JAHP, CHUEN-MEEN JEUNG-WOOT YAU YUT-SEUNG SUNG-WOOT JEE DING-KUP NGOY-GAU JEE SOONG-GOU YUE-YEEN NGY-SUT)",
          "translation": "Herewith we have successfully completed the systematic study of all 170 lessons of the advanced Cantonese linguistics curriculum, comprehensively mastering the sublime art of language from daily life to pinnacle diplomacy."
        }
      ],
      "mnemonics": [
        "【公報大成訣】字斟句酌鑄華章，建構模糊化爭芒；一百七十課功滿，粵語乾坤萬世揚！"
      ],
      "culturalNotes": [
        "香港作為國際『超級聯繫人』與國際大都會，長年在亞太經合組織（APEC）、世界貿易組織（WTO）及眾多國際公約框架下展現出卓越的國際法與多邊談判專業實力。掌握高階粵語與國際公法話語，是通向世界舞臺的卓越鑰匙。"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【外交草擬】在國際公報草擬中為化解暫時無法完全調和之分歧、採用兼具多重解讀空間之精妙措辭推動協議簽署之高階技巧係：",
          "options": [
            "建構性模糊 (Constructive Ambiguity / Gin3 gau3 sing3 mou4 hu4)",
            "直接掀翻談判桌) (Context: 高階國際峰會聯合公報草擬與外交辭令精要：「措辭折衷」、「建構性模糊」、)",
            "當場辱罵外國元首) (Context: 高階國際峰會聯合公報草擬與外交辭令精要：「措辭折衷」、「建構性模糊」、)",
            "完全放棄談判) (Context: 高階國際峰會聯合公報草擬與外交辭令精要：「措辭折衷」、「建構性模糊」、)"
          ],
          "answerIndex": 0,
          "explanation": "「建構性模糊（Constructive Ambiguity）」為基辛格等外交巨匠在國際條約與公報草擬中化解死結之經典外交藝術。"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【文本承諾】在國際公報草擬中代表最高級別國家政治與法律義務承諾之標準表述係：",
          "options": [
            "堅定重申承諾 (Reiterate firm commitment / Gin1 ding6 sung1 nok6)",
            "隨便聽聽) (Context: 高階國際峰會聯合公報草擬與外交辭令精要：「措辭折衷」、「建構性模糊」、)",
            "表示完全不在乎) (Context: 高階國際峰會聯合公報草擬與外交辭令精要：「措辭折衷」、「建構性模糊」、)",
            "拒絕做任何表態) (Context: 高階國際峰會聯合公報草擬與外交辭令精要：「措辭折衷」、「建構性模糊」、)"
          ],
          "answerIndex": 0,
          "explanation": "「堅定重申承諾（Reiterate firm commitment）」為多邊公報中表達最高國家決心之嚴肅外交辭令。"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【課程大成】完成全部一百七十課粵語課程後，學習者所具備之核心語言能力境界係：",
          "options": [
            "融匯日常市井生活、文史哲學術、法庭辯論及國際多邊外交之全維度高階語言藝術 (Holistic mastery from daily vernacular to peak jurisprudence & multilateral diplomacy)",
            "只會說兩句問候語) (Context: 高階國際峰會聯合公報草擬與外交辭令精要：「措辭折衷」、「建構性模糊」、)",
            "完全無法進行任何專業對話) (Context: 高階國際峰會聯合公報草擬與外交辭令精要：「措辭折衷」、「建構性模糊」、)",
            "只能閱讀幼兒識字卡片) (Context: 高階國際峰會聯合公報草擬與外交辭令精要：「措辭折衷」、「建構性模糊」、)"
          ],
          "answerIndex": 0,
          "explanation": "恭喜！您已成功解鎖全部170課粵語高階全域語言學之崇高殿堂！"
        }
      ],
      "passThreshold": 0.8
    }
  }
};
  var CURRICULUM = { id: 'cantonese', name: "Cantonese", units: UNITS, lessons: LESSONS };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['cantonese'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
