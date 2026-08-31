// FEARN Omni-Mastery Global Lexicon & Dictionary Database
// Provides comprehensive, searchable dictionary and glossary entries across all 20 languages and elite skills.

(function (global) {
  'use strict';

  global.FEARN_DICTIONARY = global.FEARN_DICTIONARY || {};

  const DICT = {
  "japanese": [
    {
      "term": "こんにちは (Konnichiwa)",
      "definition": "Hello / Good afternoon (Standard daytime greeting across Japan)",
      "category": "Greeting",
      "level": "N5 / A1"
    },
    {
      "term": "ありがとう (Arigatou)",
      "definition": "Thank you (Informal gratitude)",
      "category": "Etiquette",
      "level": "N5 / A1"
    },
    {
      "term": "ありがとうございます (Arigatou gozaimasu)",
      "definition": "Thank you very much (Polite / Teineigo gratitude)",
      "category": "Etiquette",
      "level": "N5 / A1"
    },
    {
      "term": "すみません (Sumimasen)",
      "definition": "Excuse me / Sorry / Thank you for your trouble",
      "category": "Etiquette",
      "level": "N5 / A1"
    },
    {
      "term": "ごめんなさい (Gomennasai)",
      "definition": "I am sorry (Direct personal apology)",
      "category": "Etiquette",
      "level": "N5 / A1"
    },
    {
      "term": "いただきます (Itadakimasu)",
      "definition": "Humbly receive / Gratitude before eating meal",
      "category": "Culinary Etiquette",
      "level": "N5 / A1"
    },
    {
      "term": "ごちそうさまでした (Gochisousama deshita)",
      "definition": "Thank you for the wonderful meal (Said after eating)",
      "category": "Culinary Etiquette",
      "level": "N5 / A1"
    },
    {
      "term": "いらっしゃいませ (Irasshaimase)",
      "definition": "Welcome! (Greeting by staff in shops and restaurants)",
      "category": "Service",
      "level": "N5 / A1"
    },
    {
      "term": "お願いします (Onegaishimasu)",
      "definition": "Please / I request your assistance",
      "category": "Polite Request",
      "level": "N5 / A1"
    },
    {
      "term": "お疲れ様です (Otsukaresama desu)",
      "definition": "Thank you for your hard work / Standard workplace greeting",
      "category": "Business Keigo",
      "level": "N4 / A2"
    },
    {
      "term": "よろしくお願いいたします (Yoroshiku onegai itashimasu)",
      "definition": "I look forward to working with you / Please treat me favorably",
      "category": "Business Keigo",
      "level": "N4 / A2"
    },
    {
      "term": "名刺交換 (Meishi koukan)",
      "definition": "Business card exchange ritual performed with two hands",
      "category": "Business Etiquette",
      "level": "N3 / B1"
    },
    {
      "term": "報・連・相 (Hou-Ren-Sou)",
      "definition": "Report (Houkoku), Communicate (Renraku), Consult (Soudan) - Golden rule of Japanese corporate communication",
      "category": "Business Concept",
      "level": "N3 / B1"
    },
    {
      "term": "改善 (Kaizen)",
      "definition": "Continuous incremental improvement philosophy originating from Toyota Production System",
      "category": "Management Philosophy",
      "level": "N2 / B2"
    },
    {
      "term": "看板方式 (Kanban houshiki)",
      "definition": "Just-in-Time visual workflow scheduling system developed by Taiichi Ohno",
      "category": "Engineering / Operations",
      "level": "N1 / C1"
    },
    {
      "term": "温故知新 (Onko chishin)",
      "definition": "Learning from the past to discover new truths and insights (Yojijukugo)",
      "category": "Idiom / Yojijukugo",
      "level": "N1 / C1"
    },
    {
      "term": "一期一会 (Ichigo ichie)",
      "definition": "One time, one meeting; treasure every unrepeatable encounter (Tea Ceremony philosophy)",
      "category": "Philosophy / Proverb",
      "level": "N2 / B2"
    },
    {
      "term": "切磋琢磨 (Sessa takuma)",
      "definition": "Polishing and refining one’s character and skills together through friendly rivalry (Yojijukugo)",
      "category": "Idiom / Yojijukugo",
      "level": "N1 / C1"
    },
    {
      "term": "臨機応変 (Rinki ouhen)",
      "definition": "Adapting flexibly to changing circumstances (Yojijukugo)",
      "category": "Idiom / Yojijukugo",
      "level": "N1 / C1"
    },
    {
      "term": "不言実行 (Fugen jikkou)",
      "definition": "Action before words; letting your actions speak louder than promises (Yojijukugo)",
      "category": "Idiom / Yojijukugo",
      "level": "N1 / C1"
    },
    {
      "term": "敷金 (Shikikin)",
      "definition": "Security deposit paid to the landlord when renting an apartment in Japan",
      "category": "Housing & Real Estate",
      "level": "N3 / B1"
    },
    {
      "term": "礼金 (Reikin)",
      "definition": "Key money / Non-refundable gratuity gift paid to the landlord",
      "category": "Housing & Real Estate",
      "level": "N3 / B1"
    },
    {
      "term": "Suica / PASMO",
      "definition": "Contactless IC transit cards used across JR and Tokyo Metro networks and convenience stores",
      "category": "Transit & Daily Life",
      "level": "N5 / A1"
    },
    {
      "term": "居酒屋 (Izakaya)",
      "definition": "Traditional Japanese informal pub serving small shared dishes and drinks",
      "category": "Dining & Culture",
      "level": "N5 / A1"
    },
    {
      "term": "新幹線 (Shinkansen)",
      "definition": "High-speed bullet train network famous for punctuality and zero fatal accidents",
      "category": "Transit & Infrastructure",
      "level": "N4 / A2"
    },
    {
      "term": "指定席 (Shiteiseki) vs 自由席 (Jiyuuseki)",
      "definition": "Reserved seat vs Non-reserved seat on Shinkansen / Limited Express trains",
      "category": "Transit Vocabulary",
      "level": "N4 / A2"
    },
    {
      "term": "お通し (Otooshi)",
      "definition": "Small mandatory table appetizer served with first drink order at Izakayas",
      "category": "Dining Etiquette",
      "level": "N4 / A2"
    },
    {
      "term": "飲み放題 (Nomihoudai) / 食べ放題 (Tabehoudai)",
      "definition": "All-you-can-drink / All-you-can-eat set courses with fixed time limit",
      "category": "Dining & Nightlife",
      "level": "N4 / A2"
    },
    {
      "term": "乾杯 (Kanpai)",
      "definition": "Cheers! (Traditional toast before drinking)",
      "category": "Social Customs",
      "level": "N5 / A1"
    },
    {
      "term": "忖度 (Sontaku)",
      "definition": "Surmising another person’s unspoken feelings and acting proactively on them",
      "category": "Cultural Psychology",
      "level": "N1 / C1"
    },
    {
      "term": "本音 (Honne) vs 建前 (Tatemae)",
      "definition": "True inner desires and private thoughts vs Public facade and social harmony conduct",
      "category": "Cultural Philosophy",
      "level": "N2 / B2"
    },
    {
      "term": "空気を読む (Kuuki wo yomu)",
      "definition": "Reading the air / Sensing the social atmosphere and reacting with social tact",
      "category": "Social Idiom",
      "level": "N2 / B2"
    },
    {
      "term": "木漏れ日 (Komorebi)",
      "definition": "Sunlight filtering through the leaves of trees (Untranslatable poetic noun)",
      "category": "Poetic Japanese",
      "level": "N2 / B2"
    },
    {
      "term": "侘び寂び (Wabi-sabi)",
      "definition": "Aesthetic centered on the acceptance of transience, imperfection, and natural beauty",
      "category": "Aesthetics & Zen",
      "level": "N1 / C1"
    },
    {
      "term": "金継ぎ (Kintsugi)",
      "definition": "The art of repairing broken pottery with lacquer dusted with powdered gold, honoring scars",
      "category": "Traditional Art & Philosophy",
      "level": "N1 / C1"
    },
    {
      "term": "温泉 (Onsen) & 湯道 (Yudou)",
      "definition": "Natural volcanic hot spring bathing ritual and spiritual etiquette of cleansing before entering",
      "category": "Culture & Wellness",
      "level": "N4 / A2"
    },
    {
      "term": "鳥居 (Torii)",
      "definition": "Traditional red sacred gate marking transition from profane world into Shinto shrine precinct",
      "category": "Shinto Architecture",
      "level": "N4 / A2"
    },
    {
      "term": "二礼二拍手一礼 (Ni-rei ni-hakushu ichi-rei)",
      "definition": "Two bows, two claps, one bow - Proper Shinto shrine prayer etiquette",
      "category": "Shrine Etiquette",
      "level": "N3 / B1"
    },
    {
      "term": "初詣 (Hatsumoude)",
      "definition": "First shrine or temple visit of the New Year to pray for health and fortune",
      "category": "Annual Tradition",
      "level": "N3 / B1"
    },
    {
      "term": "花見 (Hanami)",
      "definition": "Cherry blossom viewing picnics under blooming Sakura in spring",
      "category": "Seasonal Tradition",
      "level": "N4 / A2"
    },
    {
      "term": "紅葉狩り (Momijigari)",
      "definition": "Autumn leaf hunting and admiring vibrant maple foliage",
      "category": "Seasonal Tradition",
      "level": "N3 / B1"
    },
    {
      "term": "敬語 (Keigo): 尊敬語 (Sonkeigo) & 謙譲語 (Kenjougo)",
      "definition": "Honorific system: Respectful language elevating the listener vs Humble language lowering oneself",
      "category": "Grammar & Keigo",
      "level": "N2 / B2"
    },
    {
      "term": "いらっしゃる (Irassharu)",
      "definition": "Respectful (Sonkeigo) form of 行く (go), 来る (come), and いる (exist)",
      "category": "Keigo Verb",
      "level": "N3 / B1"
    },
    {
      "term": "参る (Mairu)",
      "definition": "Humble (Kenjougo) form of 行く (go) and 来る (come)",
      "category": "Keigo Verb",
      "level": "N3 / B1"
    },
    {
      "term": "いただく (Itadaku)",
      "definition": "Humble (Kenjougo) form of もらう (receive) and 食べる (eat)",
      "category": "Keigo Verb",
      "level": "N3 / B1"
    },
    {
      "term": "申し上げる (Moushiageru)",
      "definition": "Humble (Kenjougo) form of 言う (say) when addressing a superior or client",
      "category": "Keigo Verb",
      "level": "N2 / B2"
    },
    {
      "term": "ご案内いたします (Go-annai itashimasu)",
      "definition": "I will guide / escort you (Polite business phrasing)",
      "category": "Service Keigo",
      "level": "N3 / B1"
    },
    {
      "term": "お席にご案内します (Oseki ni go-annai shimasu)",
      "definition": "I will show you to your table/seat",
      "category": "Restaurant Keigo",
      "level": "N4 / A2"
    },
    {
      "term": "お会計 (Okaikei)",
      "definition": "Bill / Payment at restaurants and shops",
      "category": "Dining & Commerce",
      "level": "N5 / A1"
    },
    {
      "term": "領収書 (Ryoushuusho)",
      "definition": "Official tax receipt containing company name and seal (Hanko)",
      "category": "Business & Commerce",
      "level": "N3 / B1"
    },
    {
      "term": "桜 (Sakura)",
      "pronunciation": "さくら [sakɯɾa]",
      "partOfSpeech": "Noun",
      "definition": "Cherry blossom / Cherry tree (Prunus serrulata); the quintessential national flower of Japan symbolizing spring, renewal, ephemeral beauty, and transience.",
      "category": "Flora & Culture",
      "level": "N5 / A1",
      "examples": [
        {
          "target": "春になると、川沿いの桜が一斉に満開になります。",
          "translation": "When spring arrives, the cherry blossoms along the river all bloom in full glory simultaneously."
        },
        {
          "target": "桜の花びらが風に舞い散る様子はとても風情があります。",
          "translation": "The sight of cherry blossom petals fluttering and scattering in the wind is deeply tasteful."
        }
      ],
      "synonyms": [
        "花 (Hana - in classical poetry)",
        "山桜 (Yamazakura)"
      ],
      "register": "General / Literary",
      "notes": "In classical waka poetry, the word \"花 (flower)\" without qualification almost always refers specifically to cherry blossoms."
    },
    {
      "term": "食べる (Taberu)",
      "pronunciation": "たべる [tabeɾɯ]",
      "partOfSpeech": "Ichidan Verb (Group 2, Transitive)",
      "definition": "To eat / consume food; to ingest sustenance.",
      "category": "Daily Verbs",
      "level": "N5 / A1",
      "examples": [
        {
          "target": "毎朝、栄養バランスを考えて和食を食べています。",
          "translation": "Every morning, I eat Japanese food considering nutritional balance."
        },
        {
          "target": "京都の老舗で伝統的な懐石料理を食べました。",
          "translation": "I ate traditional Kaiseki cuisine at an established restaurant in Kyoto."
        }
      ],
      "synonyms": [
        "いただく (Itadaku - humble)",
        "召し上がる (Meshiaagaru - honorific)",
        "食す (Shokusu - formal/literary)"
      ],
      "antonyms": [
        "絶食する (Zesshoku suru - to fast)"
      ],
      "register": "Standard / Neutral"
    },
    {
      "term": "飲む (Nomu)",
      "pronunciation": "のむ [nomɯ]",
      "partOfSpeech": "Godan Verb (Group 1 with -mu, Transitive)",
      "definition": "1. To drink / swallow liquids. 2. To take oral medicine (薬を飲む). 3. To accept/swallow conditions (条件を飲む). 4. To overwhelm/engulf (波に飲まれる).",
      "category": "Daily Verbs",
      "level": "N5 / A1",
      "examples": [
        {
          "target": "食後に温かい緑茶を一杯飲みましょう。",
          "translation": "Let us drink a cup of warm green tea after the meal."
        },
        {
          "target": "風邪を治すために処方された薬をきちんと飲んでください。",
          "translation": "Please take your prescribed medicine properly to cure your cold."
        }
      ],
      "synonyms": [
        "召し上がる (Honorific)",
        "いただく (Humble)",
        "服用する (Fukuyou suru - take medicine)"
      ],
      "register": "Standard / Polysemous"
    },
    {
      "term": "美しい (Utsukushii)",
      "pronunciation": "うつくしい [ɯtsɯkɯɕiː]",
      "partOfSpeech": "I-Adjective",
      "definition": "Beautiful, lovely, splendid, aesthetically harmonious; possessing sublime visual, acoustic, or moral elegance.",
      "category": "Adjectives & Aesthetics",
      "level": "N4 / A2",
      "examples": [
        {
          "target": "夕日に染まる富士山の稜線は息を呑むほど美しいです。",
          "translation": "The ridgeline of Mount Fuji dyed in the setting sun is breathtakingly beautiful."
        },
        {
          "target": "困難な状況でも他人を思いやる美しい心を持っています。",
          "translation": "Even in difficult circumstances, they possess a beautiful heart caring for others."
        }
      ],
      "synonyms": [
        "綺麗 (Kirei)",
        "麗しい (Uruwashii - literary/archaic)",
        "見事 (Migoto)"
      ],
      "antonyms": [
        "醜い (Minikui - ugly)"
      ],
      "register": "Standard / Formal"
    },
    {
      "term": "静か (Shizuka)",
      "pronunciation": "しずか [ɕizɯka]",
      "partOfSpeech": "Na-Adjective / Noun",
      "definition": "Quiet, calm, tranquil, serene, peaceful; free from commotion, noise, or agitation.",
      "category": "Adjectives & Environment",
      "level": "N5 / A1",
      "examples": [
        {
          "target": "早朝の境内は観光客もおらず、とても静かで神聖な空気が漂っています。",
          "translation": "Early morning temple grounds have no tourists, with very quiet and sacred air drifting."
        },
        {
          "target": "図書館では静かに読書をしてください。",
          "translation": "Please read quietly in the library."
        }
      ],
      "synonyms": [
        "閑静 (Kansei)",
        "平穏 (Heion)",
        "静謐 (Seihitsu - literary)"
      ],
      "antonyms": [
        "賑やか (Nigiyaka - lively)",
        "騒がしい (Sawagashii - noisy)"
      ],
      "register": "Standard"
    },
    {
      "term": "心 (Kokoro)",
      "pronunciation": "こころ [kokoɾo]",
      "partOfSpeech": "Noun",
      "definition": "Heart, mind, spirit, soul, intention, sincere feeling; the integrative center of emotion, volition, and moral conscience in Japanese culture.",
      "category": "Core Concepts & Psychology",
      "level": "N4 / A2",
      "examples": [
        {
          "target": "相手の立場に立って考える温かい心が大切です。",
          "translation": "A warm heart that puts oneself in the other person's shoes and reflects is vital."
        },
        {
          "target": "茶道の所作には、亭主の細やかなもてなしの心が込められています。",
          "translation": "In tea ceremony movements, the host's meticulous spirit of hospitality is infused."
        }
      ],
      "synonyms": [
        "精神 (Seishin)",
        "心情 (Shinjou)",
        "胸 (Mune)"
      ],
      "register": "Standard / Poetic"
    },
    {
      "term": "勉強する (Benkyou suru)",
      "pronunciation": "べんきょうする [beŋkʲoː sɯɾɯ]",
      "partOfSpeech": "Suru-Verb (Group 3, Transitive/Intransitive)",
      "definition": "1. To study / learn diligently. 2. In commerce: to offer a discount / lower price as a courtesy (お勉強します).",
      "category": "Education & Commerce",
      "level": "N5 / A1",
      "examples": [
        {
          "target": "将来の目標に向けて、毎日図書館で日本語を勉強しています。",
          "translation": "Toward my future goal, I study Japanese in the library every day."
        },
        {
          "target": "まとめて三つ買っていただけるなら、少しお勉強させていただきます。",
          "translation": "If you will buy three together, allow me to offer a small discount for you."
        }
      ],
      "synonyms": [
        "学ぶ (Manabu)",
        "学習する (Gakushuu suru)",
        "値引きする (Nebiki suru - commerce sense)"
      ],
      "register": "Standard / Commercial slang"
    },
    {
      "term": "案内する (Annai suru)",
      "pronunciation": "あんないする [annai sɯɾɯ]",
      "partOfSpeech": "Suru-Verb (Group 3, Transitive)",
      "definition": "To guide, escort, show around, conduct a tour, inform, notify.",
      "category": "Service & Tourism",
      "level": "N4 / A2",
      "examples": [
        {
          "target": "海外から訪れた友人たちを京都の歴史的な名所へ案内しました。",
          "translation": "I guided my friends visiting from abroad to historic sights in Kyoto."
        },
        {
          "target": "新社屋のフロア構成をご案内いたしますので、こちらへどうぞ。",
          "translation": "Allow me to guide you through the floor layout of our new office building, so please come this way."
        }
      ],
      "synonyms": [
        "誘導する (Yuudou suru)",
        "導く (Michibiku)",
        "手引きする (Tebiki suru)"
      ],
      "register": "Standard / Business (ご案内いたします)"
    },
    {
      "term": "頑張る (Ganbaru)",
      "pronunciation": "がんばる [ɡambaɾɯ]",
      "partOfSpeech": "Godan Verb (Group 1 with -ru, Intransitive)",
      "definition": "To persevere, persist, do one's best, hold out, stand firm against hardship; central cultural value of tenacity.",
      "category": "Cultural Psychology",
      "level": "N5 / A1",
      "examples": [
        {
          "target": "どんなに困難な課題であっても、最後まで諦めずに頑張ります。",
          "translation": "No matter how difficult the challenge may be, I will do my best without giving up until the very end."
        },
        {
          "target": "明日の大事な試験、全力で頑張ってください！応援しています。",
          "translation": "For tomorrow's important exam, please do your absolute best! I am cheering for you."
        }
      ],
      "synonyms": [
        "励む (Hagemu)",
        "奮闘する (Funtou suru)",
        "粘る (Nebaru)"
      ],
      "antonyms": [
        "諦める (Akirameru - give up)",
        "怠ける (Namakeru - be lazy)"
      ],
      "register": "Standard / Cultural"
    },
    {
      "term": "思いやり (Omoiyari)",
      "pronunciation": "おもいやり [omoiyaɾi]",
      "partOfSpeech": "Noun",
      "definition": "Thoughtfulness, empathy, active consideration for others' feelings and needs without being asked.",
      "category": "Cultural Ethics",
      "level": "N3 / B1",
      "examples": [
        {
          "target": "相手が言葉にしなくても気持ちを察知して配慮する思いやりが大切です。",
          "translation": "Thoughtfulness that senses feelings and shows consideration even without the other putting it into words is vital."
        },
        {
          "target": "電車の中で高齢者や妊婦に席を譲るのは、温かい思いやりの行動です。",
          "translation": "Giving up one's seat to the elderly or expectant mothers on the train is an act of warm empathy."
        }
      ],
      "synonyms": [
        "配慮 (Hairyo)",
        "気配り (Kikubari)",
        "慈しみ (Itsukushimi)"
      ],
      "antonyms": [
        "無遠慮 (Buenryo - thoughtlessness)",
        "利己的 (Rikiteki - selfish)"
      ],
      "register": "General / Moral"
    },
    {
      "term": "幽玄 (Yuugen)",
      "pronunciation": "ゆうげん [jɯːɡeɴ]",
      "partOfSpeech": "Noun / Na-Adjective",
      "definition": "Subtle grace, profound mystery, hidden depth; traditional aesthetic concept designating beauty suggested rather than stated, hovering in shadow.",
      "category": "Aesthetics & Theater",
      "level": "N1 / C1",
      "examples": [
        {
          "target": "能舞台の薄明かりの中で演じられるシテの舞は、幽玄の美の極致です。",
          "translation": "The dance of the Shite performed within the dim light of the Noh stage is the supreme summit of yugen beauty."
        },
        {
          "target": "藤原定家の和歌には、言葉の余白に広がる幽玄な情趣が宿っています。",
          "translation": "In Fujiwara no Teika's waka poetry resides a profound yugen sentiment spreading through the margins of words."
        }
      ],
      "synonyms": [
        "奥深い (Okubukai)",
        "深遠 (Shin'en)"
      ],
      "antonyms": [
        "露骨 (Rokotsu - explicit / overt)"
      ],
      "register": "Literary / Philosophical"
    },
    {
      "term": "初心忘るべからず (Shoshin wasurubekarazu)",
      "pronunciation": "しょしんわするべからず [ɕoɕiɴ wasɯɾɯbekaɾazɯ]",
      "partOfSpeech": "Proverb / Maxim",
      "definition": "Never forget the beginner's spirit; Zeami's dictum to continuously confront one's immaturity, adapt to every life stage, and remain humble.",
      "category": "Proverbs & Philosophy",
      "level": "N1 / C1",
      "examples": [
        {
          "target": "どれほど高い地位や成功を収めても、初心忘るべからずの謙虚さを保つべきです。",
          "translation": "No matter how high a rank or success one achieves, one should maintain the humility of never forgetting the beginner's mind."
        },
        {
          "target": "新しい分野に挑戦するたびに、世阿弥の「初心忘るべからず」という言葉を胸に刻んでいます。",
          "translation": "Whenever I challenge a new field, I engrave Zeami's words \"Never forget the beginner's mind\" on my heart."
        }
      ],
      "synonyms": [
        "謙虚 (Kenkyo)",
        "初心 (Shoshin)"
      ],
      "register": "Formal / Philosophical"
    },
    {
      "term": "もったいない (Mottainai)",
      "pronunciation": "もったいない [motːainai]",
      "partOfSpeech": "I-Adjective",
      "definition": "1. What a waste! / Regrettable waste of physical resources, time, or talent. 2. Unworthy of such high honor (身に余る光栄). 3. International environmental slogan popularized by Wangari Maathai.",
      "category": "Cultural Philosophy & Ecology",
      "level": "N3 / B1",
      "examples": [
        {
          "target": "まだ十分に食べられる食品を捨てるのは本当にもったいないです。",
          "translation": "Throwing away food that is still perfectly edible is truly a regrettable waste."
        },
        {
          "target": "私のような若輩者にそのような大役をいただくのは、もったいないお言葉です。",
          "translation": "Receiving such a major role for an inexperienced person like me is praise beyond my merit."
        }
      ],
      "synonyms": [
        "惜しい (Oshii)",
        "不経済 (Fukeizai)"
      ],
      "register": "General / Environmental"
    },
    {
      "term": "おもてなし (Omotenashi)",
      "pronunciation": "おもてなし [omotenaɕi]",
      "partOfSpeech": "Noun",
      "definition": "Selfless, wholehearted Japanese hospitality anticipating guest needs before they are voiced, without expectation of reward or tip.",
      "category": "Cultural Values & Hospitality",
      "level": "N2 / B2",
      "examples": [
        {
          "target": "日本の伝統旅館では、客室係の細やかなおもてなしに深く感銘を受けました。",
          "translation": "At the traditional Japanese inn, I was deeply impressed by the room attendant's meticulous hospitality."
        },
        {
          "target": "見返りを求めず純粋に相手の幸福を願う心こそが、おもてなしの神髄です。",
          "translation": "The spirit of purely wishing for the other person's happiness without expecting returns is the essence of omotenashi."
        }
      ],
      "synonyms": [
        "歓待 (Kantai)",
        "接遇 (Setsuguu)",
        "もてなし (Motenashi)"
      ],
      "register": "Standard / Cultural"
    },
    {
      "term": "侘び (Wabi)",
      "pronunciation": "わび [wabi]",
      "partOfSpeech": "Noun",
      "definition": "Aesthetic and spiritual philosophy of finding beauty, serenity, and fulfillment in rustic simplicity, austerity, poverty, and unpretentiousness.",
      "category": "Tea Ceremony & Aesthetics",
      "level": "N1 / C1",
      "examples": [
        {
          "target": "千利休は豪華な唐物を排し、簡素な竹の花入れや素朴な茶室に「侘び」の極致を見出しました。",
          "translation": "Sen no Rikyu rejected ostentatious imported Chinese items, discovering the zenith of \"wabi\" in rustic bamboo flower vases and austere tearooms."
        },
        {
          "target": "物質的な贅沢に頼らず、精神的な静寂を愛でる侘びの心は現代にも通じる知恵です。",
          "translation": "The wabi spirit of cherishing spiritual tranquility without relying on material luxury is wisdom relevant even today."
        }
      ],
      "synonyms": [
        "閑寂 (Kanjaku)",
        "質素 (Shisso)"
      ],
      "antonyms": [
        "華美 (Kabi - ostentatious splendor)",
        "豪奢 (Gousha - luxury)"
      ],
      "register": "Philosophical / Cultural"
    }
  ],
  "spanish": [
    {
      "term": "Hola",
      "definition": "Hello (Standard universal greeting)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Buenos días / Buenas tardes / Buenas noches",
      "definition": "Good morning / Good afternoon / Good evening or night",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Por favor / Muchas gracias",
      "definition": "Please / Thank you very much",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "De nada",
      "definition": "You are welcome / Not at all",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "¿Cuánto cuesta?",
      "definition": "How much does this cost?",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "La cuenta, por favor",
      "definition": "The bill / check, please (In restaurants and cafes)",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "Mucho gusto / Encantado",
      "definition": "Nice to meet you (Standard introduction etiquette)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Perdón / Disculpe",
      "definition": "Excuse me / Pardon (Apology and getting attention)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "¿Dónde está el baño?",
      "definition": "Where is the restroom? (Essential navigation)",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "Tener ganas de (+ inf)",
      "definition": "To feel like doing something / To fancy doing sth",
      "category": "Verbal Idiom",
      "level": "A2"
    },
    {
      "term": "Estar de acuerdo",
      "definition": "To agree / To be in agreement",
      "category": "Conversation",
      "level": "A2"
    },
    {
      "term": "Darse cuenta de",
      "definition": "To realize / Become aware of something",
      "category": "Verbal Idiom",
      "level": "B1"
    },
    {
      "term": "Tapeo / Ir de tapas",
      "definition": "The social custom of hopping from bar to bar sharing small savory dishes",
      "category": "Culture & Gastronomy",
      "level": "A2"
    },
    {
      "term": "Sobremesa",
      "definition": "The traditional Spanish cultural practice of lingering around the table after finishing a meal to engage in relaxed, unhurried conversation with family or friends.",
      "category": "Cultura y Vida Cotidiana",
      "level": "B1 / Intermedio",
      "pronunciation": "/so.βɾeˈme.sa/",
      "partOfSpeech": "Sustantivo femenino (Noun)",
      "examples": [
        {
          "target": "Disfrutamos de una larga sobremesa de dos horas conversando sobre literatura y viajes.",
          "translation": "We enjoyed a long two-hour post-meal conversation discussing literature and travel."
        },
        {
          "target": "La sobremesa es un momento sagrado para estrechar lazos afectivos en España e Iberoamérica.",
          "translation": "The post-meal conversation is a sacred moment for strengthening emotional bonds in Spain and Latin America."
        }
      ],
      "synonyms": [
        "Tertulia de sobremesa",
        "Conversación postprandial"
      ],
      "register": "General / Cultural",
      "notes": "A culturally unique Spanish concept that has no direct single-word equivalent in English."
    },
    {
      "term": "Ser vs Estar",
      "definition": "Essential distinction: inherent permanent traits (Ser) vs temporary states, locations and conditions (Estar)",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Por vs Para",
      "definition": "Cause, motive, duration, exchange (Por) vs destination, purpose, recipient, deadline (Para)",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "Pretérito Indefinido vs Pretérito Imperfecto",
      "definition": "Completed past action with bounded time vs ongoing/habitual past description",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "El Subjuntivo",
      "definition": "Mood expressing doubt, emotion, wish, uncertainty, and hypothetical conditions",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "Tutear vs Tratar de usted",
      "definition": "Informal address with \"tú\" vs respectful formal address with \"usted\"",
      "category": "Social Etiquette",
      "level": "A2"
    },
    {
      "term": "Siesta",
      "definition": "Traditional afternoon rest or pause during the hottest hours of the day",
      "category": "Culture",
      "level": "A1"
    },
    {
      "term": "Pinchos / Pintxos",
      "definition": "Small culinary snacks typically pierced with a toothpick, popular in Northern Spain",
      "category": "Culinary Culture",
      "level": "A2"
    },
    {
      "term": "Menú del día",
      "definition": "Fixed-price multi-course daily lunch menu offered by Spanish restaurants",
      "category": "Dining & Commerce",
      "level": "A2"
    },
    {
      "term": "Churros con chocolate",
      "definition": "Deep-fried dough pastries served with thick hot chocolate for breakfast or merienda",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Tomar el pelo",
      "definition": "Idiom: to pull someone's leg / to tease or kid someone",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Costar un ojo de la cara",
      "definition": "Idiom: to cost an arm and a leg / to be exorbitantly expensive",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Estar en las nubes",
      "definition": "Idiom: to have one's head in the clouds / to daydream or be distracted",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Tener mala leche",
      "definition": "Idiom: to be bad-tempered or have ill intentions",
      "category": "Idiom & Slang",
      "level": "B2"
    },
    {
      "term": "Dar en el clavo",
      "definition": "Idiom: to hit the nail on the head / to be spot on",
      "category": "Idiom",
      "level": "B2"
    },
    {
      "term": "Empadronamiento",
      "definition": "Official municipal registration of residence required for public services in Spain",
      "category": "Civic Administration",
      "level": "B1"
    },
    {
      "term": "NIE (Número de Identidad de Extranjero)",
      "definition": "Foreigner tax and identification number for legal & financial acts in Spain",
      "category": "Civic Administration",
      "level": "B1"
    },
    {
      "term": "Seguridad Social",
      "definition": "State public health and social security system in Spain",
      "category": "Public Services",
      "level": "B1"
    },
    {
      "term": "Renfe & AVE",
      "definition": "Spanish national railway company and its high-speed train network (Alta Velocidad Española)",
      "category": "Transit",
      "level": "A2"
    },
    {
      "term": "Tarjeta sanitaria",
      "definition": "Public health insurance card providing access to primary healthcare (Centro de Salud)",
      "category": "Healthcare",
      "level": "B1"
    },
    {
      "term": "Fianza",
      "definition": "Rental security deposit held in escrow during apartment leases",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "Jornada intensiva",
      "definition": "Continuous summer workday schedule (typically 8:00 to 15:00) without afternoon break",
      "category": "Labor & Business",
      "level": "B2"
    },
    {
      "term": "Desconexión digital",
      "definition": "Legal right of employees to not answer work communications outside working hours",
      "category": "Labor Law & C1",
      "level": "C1"
    },
    {
      "term": "Contrato indefinido",
      "definition": "Permanent open-ended employment contract under Spanish labor law",
      "category": "Labor & Business",
      "level": "B2"
    },
    {
      "term": "Nómina y finiquito",
      "definition": "Monthly payslip and official end-of-contract settlement document",
      "category": "Labor Law",
      "level": "C1"
    },
    {
      "term": "Convenio colectivo",
      "definition": "Collective bargaining agreement regulating sector-wide wages and labor conditions",
      "category": "Labor Law & Business",
      "level": "C1"
    },
    {
      "term": "Autónomo",
      "definition": "Self-employed / Freelance professional tax and social security status",
      "category": "Business & Tax",
      "level": "B2"
    },
    {
      "term": "Factura con IVA y retención IRPF",
      "definition": "Official invoice showing Value Added Tax (21%) and personal income tax withholding",
      "category": "Business & Finance",
      "level": "C1"
    },
    {
      "term": "Acta de reunión",
      "definition": "Formal minutes recording decisions and action items from a business meeting",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Cláusula de confidencialidad",
      "definition": "Non-disclosure / confidentiality clause in commercial agreements",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "Poder notarial",
      "definition": "Notarized power of attorney authorizing legal representation",
      "category": "Legal & Notary",
      "level": "C1"
    },
    {
      "term": "ERTE (Expediente de Regulación Temporal de Empleo)",
      "definition": "Temporary workforce restructuring or furlough scheme under Spanish labor code",
      "category": "Labor Law & Economics",
      "level": "C1"
    },
    {
      "term": "Ojalá",
      "pronunciation": "/o.xaˈla/",
      "partOfSpeech": "Interjección / Adverbio (Interjection)",
      "definition": "God willing / Would that / I hope so; expresses strong yearning, wish, or hope for an event to happen; derived from Arabic \"In sha' Allah\"; obligatorily triggers subjunctive mood.",
      "category": "Gramática y Expresiones",
      "level": "A2 / B1",
      "examples": [
        {
          "target": "¡Ojalá haga buen tiempo mañana para poder salir a la montaña!",
          "translation": "Would that the weather is good tomorrow so we can go out to the mountains!"
        },
        {
          "target": "Ojalá hubiéramos sabido la verdad antes de tomar esa decisión precipitada.",
          "translation": "If only we had known the truth before making that hasty decision."
        }
      ],
      "synonyms": [
        "Dios quiera",
        "Ojalá que sí",
        "Así sea"
      ],
      "register": "General / Polysemous"
    },
    {
      "term": "Desarrollar",
      "pronunciation": "/de.sa.roˈʝaɾ/",
      "partOfSpeech": "Verbo transitivo / pronominal (Verb)",
      "definition": "1. To develop, cultivate, expand, evolve (abilities, economies, ideas). 2. Desarrollarse (Reflexive): to unfold, take place, thrive.",
      "category": "Verbos Fundamentales",
      "level": "B1 / Intermedio",
      "examples": [
        {
          "target": "El equipo de ingenieros desarrolló un software revolucionario de procesamiento de lenguaje.",
          "translation": "The engineering team developed a revolutionary language processing software."
        },
        {
          "target": "La conferencia se desarrolló con total normalidad y gran participación internacional.",
          "translation": "The conference unfolded completely normally and with great international participation."
        }
      ],
      "synonyms": [
        "Fomentar",
        "Evolucionar",
        "Desplegar",
        "Elaborar"
      ],
      "antonyms": [
        "Involucionar",
        "Frenar",
        "Estancar"
      ],
      "register": "General / Académico"
    },
    {
      "term": "Madrugar",
      "pronunciation": "/ma.ðɾuˈɣaɾ/",
      "partOfSpeech": "Verbo intransitivo (Verb)",
      "definition": "To wake up / get up very early in the morning.",
      "category": "Vida Diaria y Hábitos",
      "level": "A2 / Elemental",
      "examples": [
        {
          "target": "A quien madruga, Dios le ayuda (Refrán tradicional).",
          "translation": "The early bird catches the worm / God helps those who wake up early (Traditional proverb)."
        },
        {
          "target": "Mañana tengo que madrugar para tomar el primer vuelo a Madrid.",
          "translation": "Tomorrow I have to get up very early to catch the first flight to Madrid."
        }
      ],
      "synonyms": [
        "Levantarse temprano",
        "Amanecer temprano"
      ],
      "antonyms": [
        "Trasnochar (stay up late)",
        "Dormirse"
      ],
      "register": "General"
    },
    {
      "term": "Estrenar",
      "pronunciation": "/es.tɾeˈnaɾ/",
      "partOfSpeech": "Verbo transitivo (Verb)",
      "definition": "1. To wear, use, or show something for the first time. 2. In cinema/theater: to premiere, release, debut a work.",
      "category": "Cultura y Vocabulario Cotidiano",
      "level": "B1 / Intermedio",
      "examples": [
        {
          "target": "Hoy estreno los zapatos de cuero que compré en el mercado artesanal.",
          "translation": "Today I am wearing for the first time the leather shoes I bought at the artisanal market."
        },
        {
          "target": "La nueva película del galardonado director se estrenará en el festival internacional.",
          "translation": "The new movie of the award-winning director will premiere at the international festival."
        }
      ],
      "synonyms": [
        "Inaugurar",
        "Debutear",
        "Lanzar por primera vez"
      ],
      "register": "General"
    },
    {
      "term": "Empatía",
      "pronunciation": "/em.paˈti.a/",
      "partOfSpeech": "Sustantivo femenino (Noun)",
      "definition": "The capacity to understand and share the feelings, perspective, and emotions of others; deep psychological solidarity.",
      "category": "Psicología y Ética",
      "level": "B2 / Intermedio Alto",
      "examples": [
        {
          "target": "La verdadera empatía requiere escuchar activamente sin juzgar prematuramente a los demás.",
          "translation": "True empathy requires active listening without prematurely judging others."
        },
        {
          "target": "El liderazgo humanista se fundamenta en la empatía y el respeto a la dignidad individual.",
          "translation": "Humanistic leadership is founded on empathy and respect for individual dignity."
        }
      ],
      "synonyms": [
        "Compasión",
        "Sensibilidad",
        "Comprensión mutua"
      ],
      "antonyms": [
        "Apatía",
        "Indiferencia",
        "Insensibilidad"
      ],
      "register": "General / Formal"
    },
    {
      "term": "Imprescindible",
      "pronunciation": "/im.pɾe.sinˈdi.βle/",
      "partOfSpeech": "Adjetivo (Adjective)",
      "definition": "Absolutely essential, indispensable, vital; that which cannot be omitted or dispensed with.",
      "category": "Adjetivos Avanzados",
      "level": "B2 / Intermedio Alto",
      "examples": [
        {
          "target": "El dominio de la gramática y el vocabulario es imprescindible para alcanzar la fluidez.",
          "translation": "Mastery of grammar and vocabulary is indispensable to achieve fluency."
        },
        {
          "target": "El agua potable es un recurso imprescindible para la supervivencia y el bienestar humano.",
          "translation": "Potable water is an indispensable resource for human survival and well-being."
        }
      ],
      "synonyms": [
        "Indispensable",
        "Esencial",
        "Fundamental",
        "Vital"
      ],
      "antonyms": [
        "Prescindible",
        "Secundario",
        "Superfluo",
        "Innecesario"
      ],
      "register": "Formal / General"
    },
    {
      "term": "Vergüenza ajena",
      "pronunciation": "/beɾˈɣwen.sa aˈxe.na/",
      "partOfSpeech": "Locución sustantiva (Noun Phrase)",
      "definition": "Vicarious embarrassment / Cringe; the acute embarrassment felt on behalf of another person who is acting foolishly or inappropriately.",
      "category": "Psicología y Expresiones",
      "level": "B2 / Intermedio",
      "examples": [
        {
          "target": "Sentí una profunda vergüenza ajena al ver cómo interrumpía groseramente al conferenciante.",
          "translation": "I felt profound vicarious embarrassment seeing how he rudely interrupted the keynote speaker."
        },
        {
          "target": "La película retrata situaciones cómicas que provocan risa y vergüenza ajena a la vez.",
          "translation": "The movie portrays comical situations that provoke laughter and vicarious embarrassment at the same time."
        }
      ],
      "synonyms": [
        "Pena ajena",
        "Bochorno ajeno"
      ],
      "register": "Coloquial / General"
    },
    {
      "term": "Agradecer",
      "pronunciation": "/a.ɣɾa.ðeˈseɾ/",
      "partOfSpeech": "Verbo transitivo (Verb)",
      "definition": "To thank, express gratitude, appreciate deeply; to acknowledge a favor, gift, or assistance.",
      "category": "Cortesía y Relaciones",
      "level": "A2 / B1",
      "examples": [
        {
          "target": "Les agradezco de todo corazón el invaluable apoyo que nos brindaron en momentos difíciles.",
          "translation": "I thank you with all my heart for the invaluable support you provided us in difficult moments."
        },
        {
          "target": "Agradeceríamos que nos enviaran la documentación requerida a la mayor brevedad posible.",
          "translation": "We would appreciate it if you could send us the required documentation as promptly as possible."
        }
      ],
      "synonyms": [
        "Dar las gracias",
        "Reconocer",
        "Apreciar"
      ],
      "antonyms": [
        "Desagradecer"
      ],
      "register": "Formal / Estándar"
    },
    {
      "term": "Sostenibilidad",
      "pronunciation": "/sos.te.ni.βi.liˈðað/",
      "partOfSpeech": "Sustantivo femenino (Noun)",
      "definition": "Sustainability; the quality of being able to be maintained at a certain rate or level without exhausting natural resources or causing ecological damage.",
      "category": "Ecología y Economía",
      "level": "B2 / Avanzado",
      "examples": [
        {
          "target": "La transición hacia energías renovables es la piedra angular de la sostenibilidad ambiental global.",
          "translation": "The transition toward renewable energies is the cornerstone of global environmental sustainability."
        },
        {
          "target": "Promovemos un modelo de desarrollo económico que garantiza la sostenibilidad social y financiera.",
          "translation": "We promote an economic development model that guarantees social and financial sustainability."
        }
      ],
      "synonyms": [
        "Sustentabilidad",
        "Perdurabilidad",
        "Equilibrio ecológico"
      ],
      "register": "Académico / Formal"
    }
  ],
  "french": [
    {
      "term": "Bonjour / Bonsoir",
      "definition": "Good day / Good evening (Fundamental etiquette greeting in France)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "S’il vous plaît / S’il te plaît",
      "definition": "Please (Formal/plural vs informal address)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Merci beaucoup / De rien / Je vous en prie",
      "definition": "Thank you very much / You are welcome (Informal vs formal)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Excusez-moi / Pardon",
      "definition": "Excuse me / Pardon (Polite interruption or apology)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "L’addition, s’il vous plaît",
      "definition": "The bill / check, please (In cafes and restaurants)",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "Enchanté(e)",
      "definition": "Delighted to meet you (Standard polite introduction)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Tu vs Vous (Le tutoiement vs Le vouvoiement)",
      "definition": "Crucial social distinction: informal familiarity (Tu) vs polite/hierarchical respect (Vous)",
      "category": "Social Etiquette",
      "level": "A1"
    },
    {
      "term": "Faire la bise",
      "definition": "Traditional cheek-kiss greeting gesture among friends and relatives",
      "category": "Cultural Customs",
      "level": "A1"
    },
    {
      "term": "Passé Composé vs Imparfait",
      "definition": "Completed punctual past action vs ongoing background description or past habit",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "Le Subjonctif",
      "definition": "Subjunctive mood expressing necessity, wish, doubt, emotion (il faut que, bien que)",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "Pronoms compléments (COD et COI: me, te, le, la, lui, leur, y, en)",
      "definition": "Direct and indirect object pronouns and their rigid multi-pronoun ordering",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "Le pronom « Y »",
      "definition": "Replaces spatial locations and abstract ideas introduced by the preposition « à »",
      "category": "Grammar",
      "level": "B1"
    },
    {
      "term": "Le pronom « EN »",
      "definition": "Replaces quantities, partitives, and noun phrases introduced by « de »",
      "category": "Grammar",
      "level": "B1"
    },
    {
      "term": "L’accord du participe passé",
      "definition": "Past participle agreement rules with « être » and preceding direct objects with « avoir »",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "Faux amis (False friends)",
      "definition": "Deceptive cognates (e.g. « actuellement » = currently, not actually; « assister à » = to attend, not assist)",
      "category": "Vocabulary",
      "level": "A2 / B1"
    },
    {
      "term": "Faire la grasse matinée",
      "definition": "Idiom: to sleep in late in the morning",
      "category": "Idiom",
      "level": "A2"
    },
    {
      "term": "Poser un lapin",
      "definition": "Idiom: to stand someone up / fail to show up for a date or meeting",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Avoir le cafard",
      "definition": "Idiom: to feel down / to have the blues",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Coup de foudre",
      "definition": "Idiom: love at first sight / sudden lightning bolt of passion",
      "category": "Idiom",
      "level": "A2"
    },
    {
      "term": "L’esprit de l’escalier",
      "definition": "The witty reply or comeback that comes to mind too late after leaving the room",
      "category": "Untranslatable & Philosophy",
      "level": "B2"
    },
    {
      "term": "Métro-boulot-dodo",
      "definition": "The fast-paced daily Parisian routine: commute, work, sleep",
      "category": "Culture & Society",
      "level": "B1"
    },
    {
      "term": "Terroir",
      "definition": "The unique combination of soil, climate, geography, and tradition defining regional French food and wine",
      "category": "Gastronomy & Culture",
      "level": "B2"
    },
    {
      "term": "AOC / AOP (Appellation d’Origine Protégée)",
      "definition": "Strict French agricultural and culinary certification guaranteeing geographic origin and traditional craft",
      "category": "Gastronomy & Law",
      "level": "B2"
    },
    {
      "term": "La carte vs Le menu",
      "definition": "The full à la carte food list vs the fixed-price multi-course set meal",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "Apéritif (L’apéro)",
      "definition": "Cultural pre-dinner ritual of drinks and light savory snacks with friends",
      "category": "Culinary Culture",
      "level": "A2"
    },
    {
      "term": "Boulangerie & Baguette de tradition",
      "definition": "Artisanal bakery and traditional preservative-free French baguette protected by 1993 bread decree",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Pass Navigo",
      "definition": "Contactless smart transit pass for the Île-de-France (Paris) subway, RER, and bus network",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "TGV (Train à Grande Vitesse)",
      "definition": "France’s high-speed rail network connecting major European metropolitan hubs",
      "category": "Transit",
      "level": "A2"
    },
    {
      "term": "Carte Vitale",
      "definition": "French universal health insurance smart card providing direct electronic healthcare reimbursement",
      "category": "Healthcare & Public Admin",
      "level": "B1"
    },
    {
      "term": "RIB (Relevé d’Identité Bancaire)",
      "definition": "Official French bank account identification document containing IBAN/BIC for direct debits",
      "category": "Banking & Daily Life",
      "level": "A2"
    },
    {
      "term": "Bail d’habitation",
      "definition": "Residential lease agreement governing tenant and landlord obligations under French housing law",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "Dépôt de garantie / Caution",
      "definition": "Security deposit and guarantor requirements for apartment rentals in France",
      "category": "Housing & Finance",
      "level": "B1"
    },
    {
      "term": "Taxe d’habitation & Taxe foncière",
      "definition": "Local municipal residence tax and property ownership taxes",
      "category": "Taxation",
      "level": "B2"
    },
    {
      "term": "CDI (Contrat à Durée Indéterminée)",
      "definition": "Standard permanent open-ended employment contract in France providing strong statutory protections",
      "category": "Labor Law & Business",
      "level": "B2"
    },
    {
      "term": "CDD (Contrat à Durée Déterminée)",
      "definition": "Fixed-term temporary employment contract strictly regulated by the French Labour Code",
      "category": "Labor Law & Business",
      "level": "B2"
    },
    {
      "term": "Les 35 heures et RTT (Réduction du Temps de Travail)",
      "definition": "Statutory 35-hour workweek and compensatory rest days earned for working excess hours",
      "category": "Labor & Economics",
      "level": "B2"
    },
    {
      "term": "Période d’essai",
      "definition": "Trial period at the start of an employment contract during which either party can terminate with notice",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "Rupture conventionnelle",
      "definition": "Mutually agreed contract termination enabling the employee to claim unemployment benefits",
      "category": "Labor Law",
      "level": "C1"
    },
    {
      "term": "Fiche de paie / Bulletin de salaire",
      "definition": "Detailed French payslip showing gross salary, social contributions, and net taxable pay",
      "category": "Payroll & HR",
      "level": "B2"
    },
    {
      "term": "Comité Social et Économique (CSE)",
      "definition": "Mandatory employee representative body in French enterprises with 11+ workers",
      "category": "Labor Law & Governance",
      "level": "C1"
    },
    {
      "term": "Ordre du jour",
      "definition": "Official meeting agenda distributed in advance of executive or board sessions",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Compte-rendu de réunion",
      "definition": "Formal written minutes documenting decisions and action points from a business meeting",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Cahier des charges",
      "definition": "Detailed functional specification and technical requirement document for procurement and tenders",
      "category": "Project Management & Business",
      "level": "C1"
    },
    {
      "term": "Prélèvement à la source (PAS)",
      "definition": "Pay-As-You-Earn direct withholding tax system implemented across French payroll",
      "category": "Taxation & Finance",
      "level": "C1"
    },
    {
      "term": "Droit à la déconnexion",
      "definition": "Statutory right of employees to disconnect from digital work communications outside working hours",
      "category": "Labor Law & Human Rights",
      "level": "C1"
    },
    {
      "term": "Flâneur",
      "pronunciation": "/flɑ.nœʁ/",
      "partOfSpeech": "Nom masculin (Noun)",
      "definition": "An observant wanderer, stroller, or passionate spectator who leisurely walks through the streets of a city (historically Paris) observing urban society and modern life with detached curiosity (Baudelairean concept).",
      "category": "Philosophie et Littérature",
      "level": "C1 / Avancé",
      "examples": [
        {
          "target": "Charles Baudelaire a élevé la figure du flâneur au rang de philosophe de la modernité urbaine.",
          "translation": "Charles Baudelaire elevated the figure of the flâneur to the rank of philosopher of urban modernity."
        },
        {
          "target": "Le dimanche après-midi, les flâneurs se pressent le long des quais de la Seine et des boulevards.",
          "translation": "On Sunday afternoons, flâneurs crowd along the quays of the Seine and the boulevards."
        }
      ],
      "synonyms": [
        "Promeneur",
        "Déambulateur",
        "Observateur solitaire"
      ],
      "register": "Littéraire / Historique",
      "notes": "Central aesthetic and sociological concept in 19th-century French literature and Walter Benjamin's Arcades Project."
    },
    {
      "term": "Retrouvailles",
      "pronunciation": "/ʁə.tʁu.vaj/",
      "partOfSpeech": "Nom féminin pluriel (Noun)",
      "definition": "The joy, emotional warmth, and celebration of reuniting and meeting someone again after a long separation or absence.",
      "category": "Émotions et Relations",
      "level": "B1 / Intermédiaire",
      "examples": [
        {
          "target": "Après dix années d'éloignement, leurs retrouvailles à la gare furent pleines de larmes et d'émotion.",
          "translation": "After ten years of distance, their reunion at the station was full of tears and emotion."
        },
        {
          "target": "Chaque été, les retrouvailles familiales dans le sud de la France renforcent nos liens profonds.",
          "translation": "Every summer, family reunions in the south of France strengthen our deep bonds."
        }
      ],
      "synonyms": [
        "Réunion",
        "Revoir",
        "Ralliement"
      ],
      "register": "Général / Émotionnel"
    },
    {
      "term": "Éphémère",
      "pronunciation": "/e.fe.mɛʁ/",
      "partOfSpeech": "Adjectif / Nom masculin (Adjective / Noun)",
      "definition": "Lasting only for a brief moment or single day; transient, fleeting, short-lived.",
      "category": "Vocabulaire Poétique et Philosophique",
      "level": "B2 / Intermédiaire Supérieur",
      "examples": [
        {
          "target": "La rosée du matin offre un spectacle d'une beauté éphémère avant de s'évaporer sous le soleil.",
          "translation": "Morning dew offers a spectacle of ephemeral beauty before evaporating under the sun."
        },
        {
          "target": "Les modes vestimentaires sont par nature éphémères, tandis que le véritable style reste intemporel.",
          "translation": "Fashion trends are by nature ephemeral, whereas true style remains timeless."
        }
      ],
      "synonyms": [
        "Fugace",
        "Passager",
        "Transitoire",
        "Momentané"
      ],
      "antonyms": [
        "Éternel",
        "Durable",
        "Pérenne",
        "Immuable"
      ],
      "register": "Littéraire / Général"
    },
    {
      "term": "Bienveillance",
      "pronunciation": "/bjɛ̃.vɛ.jɑ̃s/",
      "partOfSpeech": "Nom féminin (Noun)",
      "definition": "Disposition of goodwill, active kindness, empathy, and positive regard towards others; benevolent empathy.",
      "category": "Éthique et Psychologie",
      "level": "B2 / Intermédiaire Supérieur",
      "examples": [
        {
          "target": "Le professeur accueille les questions des étudiants avec une bienveillance et une patience admirables.",
          "translation": "The professor welcomes students' questions with admirable benevolence and patience."
        },
        {
          "target": "Une communication fondée sur l'écoute et la bienveillance désamorce les conflits les plus complexes.",
          "translation": "Communication grounded in listening and goodwill diffuses the most complex conflicts."
        }
      ],
      "synonyms": [
        "Bonté",
        "Indulgence",
        "Empathie",
        "Altruisme"
      ],
      "antonyms": [
        "Malveillance",
        "Hostilité",
        "Dureté",
        "Méchanceté"
      ],
      "register": "Formel / Éthique"
    },
    {
      "term": "Incontournable",
      "pronunciation": "/ɛ̃.kɔ̃.tuʁ.nabl/",
      "partOfSpeech": "Adjectif (Adjective)",
      "definition": "Unavoidable, indispensable, essential; that which cannot be bypassed, ignored, or overlooked.",
      "category": "Culture et Société",
      "level": "B2 / Intermédiaire",
      "examples": [
        {
          "target": "Le Musée du Louvre est une étape incontournable pour tout amateur d'art visitant Paris.",
          "translation": "The Louvre Museum is an unavoidable milestone for any art lover visiting Paris."
        },
        {
          "target": "La maîtrise des outils numériques est devenue incontournable dans le marché du travail contemporain.",
          "translation": "Mastery of digital tools has become indispensable in the contemporary job market."
        }
      ],
      "synonyms": [
        "Indispensable",
        "Inévitable",
        "Essentiel",
        "Capital"
      ],
      "antonyms": [
        "Facultatif",
        "Secondaire",
        "Négligeable"
      ],
      "register": "Général / Journalistique"
    },
    {
      "term": "Dépaysement",
      "pronunciation": "/de.pɛ.iz.mɑ̃/",
      "partOfSpeech": "Nom masculin (Noun)",
      "definition": "The exhilarating, disorienting, and refreshing feeling of being in an unfamiliar country, culture, landscape, or environment far from one's habitual surroundings.",
      "category": "Voyage et Psychologie",
      "level": "B1 / Intermédiaire",
      "examples": [
        {
          "target": "Notre voyage dans les montagnes reculées nous a procuré un total dépaysement.",
          "translation": "Our trip to the remote mountains provided us with total disorientation and refreshing cultural change."
        },
        {
          "target": "Pour échapper à la routine urbaine, rien ne vaut le dépaysement d'une escapade en pleine nature.",
          "translation": "To escape urban routine, nothing beats the refreshing change of scene of a getaway into pure nature."
        }
      ],
      "synonyms": [
        "Changement de décor",
        "Évasion",
        "Exotisme"
      ],
      "register": "Général"
    },
    {
      "term": "Savoir-faire",
      "pronunciation": "/sa.vwaʁ.fɛʁ/",
      "partOfSpeech": "Nom masculin invariable (Noun)",
      "definition": "Know-how, practical expertise, craftsmanship, and tacit skill acquired through rigorous experience and traditional mastery.",
      "category": "Artisanat et Industrie",
      "level": "B1 / Intermédiaire",
      "examples": [
        {
          "target": "La haute couture française repose sur un savoir-faire artisanal exceptionnel transmis de génération en génération.",
          "translation": "French haute couture rests upon an exceptional artisanal savoir-faire passed down from generation to generation."
        },
        {
          "target": "L'ingénieur a démontré son savoir-faire technique lors de la résolution de la panne complexe.",
          "translation": "The engineer demonstrated his technical know-how during the resolution of the complex breakdown."
        }
      ],
      "synonyms": [
        "Compétence",
        "Expertise",
        "Maîtrise",
        "Habilité"
      ],
      "register": "Général / Professionnel"
    },
    {
      "term": "Apprivoiser",
      "pronunciation": "/a.pʁi.vwa.ze/",
      "partOfSpeech": "Verbe transitif (Verb)",
      "definition": "1. To tame / domesticate a wild animal. 2. To win over, soften, or gradually create profound emotional bonds of mutual trust with a person (Saint-Exupéry's Le Petit Prince).",
      "category": "Littérature et Philosophie",
      "level": "B2 / Intermédiaire",
      "examples": [
        {
          "target": "« Si tu m'apprivoises, nous aurons besoin l'un de l'autre », expliqua le renard au Petit Prince.",
          "translation": "\"If you tame me, we will need one another,\" explained the fox to the Little Prince."
        },
        {
          "target": "Il faut du temps et de la patience pour apprivoiser une culture étrangère et comprendre ses subtilités.",
          "translation": "It takes time and patience to become intimately attuned to a foreign culture and comprehend its subtleties."
        }
      ],
      "synonyms": [
        "Domestiquer",
        "Gagner la confiance",
        "Adoucir"
      ],
      "antonyms": [
        "Effaroucher",
        "Aliéner"
      ],
      "register": "Littéraire / Général"
    }
  ],
  "german": [
    {
      "term": "Guten Tag / Guten Morgen / Guten Abend",
      "definition": "Good day / Good morning / Good evening (Standard greetings across German-speaking countries)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Bitte / Danke schön / Vielen Dank",
      "definition": "Please / Thank you / Thank you very much",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Bitte schön / Gern geschehen",
      "definition": "You are welcome / My pleasure (Polite responses to thanks)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Entschuldigung / Verzeihung",
      "definition": "Excuse me / Pardon me (Polite interruption or apology)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Die Rechnung, bitte / Zahlen, bitte",
      "definition": "The bill, please / We would like to pay",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "Freut mich / Sehr angenehm",
      "definition": "Pleased to meet you (Standard introduction etiquette)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Du vs Sie (Duzen vs Siezen)",
      "definition": "Fundamental social rule: informal address with \"du\" vs formal respectful address with capital \"Sie\"",
      "category": "Social Etiquette",
      "level": "A1"
    },
    {
      "term": "Der, Die, Das",
      "definition": "Grammatical genders in German: masculine (der), feminine (die), and neuter (das)",
      "category": "Grammar",
      "level": "A1"
    },
    {
      "term": "Die vier Fälle (The 4 Cases)",
      "definition": "Nominativ (Subject), Akkusativ (Direct Object), Dativ (Indirect Object), and Genitiv (Possession)",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Wechselpräpositionen",
      "definition": "Two-way prepositions taking Akkusativ for direction/movement (Wohin?) and Dativ for location/position (Wo?)",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "Trennbare Verben",
      "definition": "Separable prefix verbs whose prefix moves to the end of main clauses in present and simple past tense",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Konjunktiv II",
      "definition": "Subjunctive mood expressing polite requests (hätte, wäre, würde), unreal wishes, and hypothetical conditions",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "Passiv (Vorgangspassiv & Zustandspassiv)",
      "definition": "Process passive (werden + Partizip II) vs state passive (sein + Partizip II)",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "Nebensätze und Verbletztstellung",
      "definition": "Subordinate clauses with connectors (weil, dass, obwohl, wenn) sending the conjugated verb to the final position",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "Feierabend",
      "definition": "The end of the working day, evening leisure time, or celebration of finishing one's daily work.",
      "category": "Arbeitswelt und Kultur",
      "level": "A2 / Grundstufe",
      "pronunciation": "/ˈfaɪ̯ɐˌʔaːbn̩t/",
      "partOfSpeech": "Substantiv maskulin (Noun)",
      "examples": [
        {
          "target": "Um punkt siebzehn Uhr machen die meisten Mitarbeiter Feierabend.",
          "translation": "At precisely five o'clock, most coworkers finish their workday."
        },
        {
          "target": "Schönen Feierabend allerseits! Genießen Sie das wohlverdiente Wochenende.",
          "translation": "Have a wonderful evening after work everyone! Enjoy your well-earned weekend."
        }
      ],
      "synonyms": [
        "Arbeitsende",
        "Dienstschluss",
        "Freizeit"
      ],
      "register": "Standard / Alltag"
    },
    {
      "term": "Gemütlichkeit",
      "definition": "Untranslatable warmth, coziness, friendly comfort, and peaceful ease of mind",
      "category": "Culture & Untranslatable",
      "level": "B1"
    },
    {
      "term": "Schadenfreude",
      "definition": "Pleasure, malicious joy, or self-satisfaction derived from another person's misfortune or embarrassment.",
      "category": "Psychologie und Emotionen",
      "level": "B1 / Mittelstufe",
      "pronunciation": "/ˈʃaːdənˌfʁɔɪ̯də/",
      "partOfSpeech": "Substantiv feminin (Noun)",
      "examples": [
        {
          "target": "Er konnte eine gewisse Schadenfreude nicht verbergen, als sein arroganter Konkurrent scheiterte.",
          "translation": "He could not conceal a certain malicious joy when his arrogant competitor failed."
        },
        {
          "target": "Schadenfreude gilt in vielen ethischen Traditionen als moralisch fragwürdige Emotion.",
          "translation": "Schadenfreude is regarded in many ethical traditions as a morally questionable emotion."
        }
      ],
      "synonyms": [
        "Häme",
        "Spottlust",
        "Boshaftigkeit"
      ],
      "antonyms": [
        "Mitgefühl (compassion)",
        "Mitleid"
      ],
      "register": "Standard / International entlehnt"
    },
    {
      "term": "Fernweh",
      "definition": "An ache or yearning for distant places, foreign travels, and wanderlust; the opposite of homesickness (Heimweh).",
      "category": "Reise und Sehnsucht",
      "level": "B1 / Mittelstufe",
      "pronunciation": "/ˈfɛʁnˌveː/",
      "partOfSpeech": "Substantiv neutrum (Noun)",
      "examples": [
        {
          "target": "Das Betrachten alter Landkarten weckte in ihr ein unstillbares Fernweh.",
          "translation": "Looking at old maps awakened an insatiable yearning for far-off lands in her."
        },
        {
          "target": "Im trüben Winter packt viele Menschen das Fernweh nach sonnigen Ländern.",
          "translation": "In bleak winter, wanderlust for sunny lands grips many people."
        }
      ],
      "synonyms": [
        "Wanderlust",
        "Reisefieber",
        "Sehnsucht nach der Ferne"
      ],
      "antonyms": [
        "Heimweh (homesickness)"
      ],
      "register": "Standard / Poetisch"
    },
    {
      "term": "Kummerspeck",
      "definition": "Excess weight or body fat gained from emotional overeating or comfort-eating during times of grief, stress, or sorrow.",
      "category": "Alltagssprache und Psychologie",
      "level": "B2 / Mittelstufe",
      "pronunciation": "/ˈkʊmɐˌʃpɛk/",
      "partOfSpeech": "Substantiv maskulin (Noun)",
      "examples": [
        {
          "target": "Nach der schmerzhaften Trennung hatte sie etwas Kummerspeck angesetzt.",
          "translation": "After the painful breakup, she had put on some emotional weight."
        },
        {
          "target": "Regelmäßiger Sport und gesunde Ernährung helfen, den Kummerspeck wieder abzubauen.",
          "translation": "Regular sports and healthy nutrition help to shed stress-gained weight again."
        }
      ],
      "synonyms": [
        "Frustspeck",
        "Stressgewicht"
      ],
      "register": "Umgangssprachlich / Humorvoll"
    },
    {
      "term": "Ohrwurm",
      "definition": "Earworm: a catchy tune or melody that repeats relentlessly in one’s head",
      "category": "Idiomatic Compound",
      "level": "A2"
    },
    {
      "term": "Ich verstehe nur Bahnhof",
      "definition": "Idiom: It’s all Greek to me / I don’t understand a single word",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Daumen drücken",
      "definition": "Idiom: to press thumbs / to keep one’s fingers crossed for good luck",
      "category": "Idiom",
      "level": "A2"
    },
    {
      "term": "Die Kirche im Dorf lassen",
      "definition": "Idiom: to not get carried away / keep things in reasonable perspective",
      "category": "Idiom",
      "level": "B2"
    },
    {
      "term": "Zwei Fliegen mit einer Klappe schlagen",
      "definition": "Idiom: to kill two birds with one stone",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Stammtisch",
      "definition": "Regular, informal table reserved for friends or regulars at a pub or traditional gasthaus",
      "category": "Culture & Dining",
      "level": "A2"
    },
    {
      "term": "Trinkgeld & Stimmt so",
      "definition": "Tipping culture in Germany (typically 5-10% rounded up) confirmed by saying \"Stimmt so\" to the server",
      "category": "Dining Etiquette",
      "level": "A1"
    },
    {
      "term": "Kaffee und Kuchen",
      "definition": "Traditional afternoon custom of gathering for coffee and homemade pastries",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Anmeldung (Wohnsitzanmeldung)",
      "definition": "Mandatory legal registration of residential address at the local Bürgeramt within 14 days of moving",
      "category": "Civic Administration",
      "level": "A2"
    },
    {
      "term": "Schufa-Auskunft",
      "definition": "Germany’s central credit rating score and financial solvency certificate required for apartment leases",
      "category": "Housing & Finance",
      "level": "B1"
    },
    {
      "term": "Warmmiete vs Kaltmiete",
      "definition": "Rent inclusive of heating and shared building utility costs (Warmmiete) vs base rent only (Kaltmiete)",
      "category": "Housing & Real Estate",
      "level": "A2"
    },
    {
      "term": "Mietkaution",
      "definition": "Rental security deposit (statutorily capped at 3 months of net cold rent)",
      "category": "Housing & Legal",
      "level": "B1"
    },
    {
      "term": "Deutschlandticket (49-Euro-Ticket)",
      "definition": "Nationwide subscription ticket valid on all regional trains, subways, trams, and buses across Germany",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "U-Bahn & S-Bahn",
      "definition": "Underground metro system (U-Bahn) vs suburban commuter rail network (S-Bahn)",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "Krankenkasse (Gesetzliche vs Private)",
      "definition": "Statutory public health insurance (GKV) vs private health insurance (PKV)",
      "category": "Healthcare & Insurance",
      "level": "B1"
    },
    {
      "term": "Steuer-Identifikationsnummer (Steuer-ID)",
      "definition": "Permanent 11-digit personal tax identification number assigned for life",
      "category": "Taxation & Civic",
      "level": "B1"
    },
    {
      "term": "Arbeitsvertrag (Unbefristet vs Befristet)",
      "definition": "Permanent open-ended employment contract vs fixed-term temporary contract",
      "category": "Labor Law & Business",
      "level": "B2"
    },
    {
      "term": "Probezeit",
      "definition": "Probationary period (up to 6 months) with a shortened 2-week statutory notice period",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "Kündigungsschutzgesetz (KSchG)",
      "definition": "German Employment Protection Act strictly limiting wrongful employer dismissals",
      "category": "Labor Law & Rights",
      "level": "C1"
    },
    {
      "term": "Aufhebungsvertrag",
      "definition": "Mutual contract termination agreement negotiated between employer and employee",
      "category": "Labor Law & HR",
      "level": "C1"
    },
    {
      "term": "Gehaltsabrechnung / Lohnabrechnung",
      "definition": "Monthly salary statement detailing gross pay, solidarity surcharge, church tax, and net pay",
      "category": "Payroll & Finance",
      "level": "B2"
    },
    {
      "term": "Betriebsrat",
      "definition": "Works council representing employees’ statutory co-determination rights in workplace decisions",
      "category": "Labor Relations & Governance",
      "level": "C1"
    },
    {
      "term": "Tagesordnung (TOP)",
      "definition": "Formal meeting agenda item (Tagesordnungspunkt) in corporate meetings",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Protokoll (Ergebnisprotokoll vs Verlaufsprotokoll)",
      "definition": "Official meeting minutes recording either key decisions or full discussion flow",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Datenschutz-Grundverordnung (DSGVO / GDPR)",
      "definition": "Comprehensive European data protection and privacy regulation governing business data",
      "category": "Legal & Tech Compliance",
      "level": "C1"
    },
    {
      "term": "Mittelstand",
      "definition": "The backbone of the German economy: family-owned, highly specialized, export-oriented small and medium-sized enterprises",
      "category": "Business & Economy",
      "level": "B2 / C1"
    },
    {
      "term": "Waldeinsamkeit",
      "pronunciation": "/ˈvalt.aɪ̯n.zaːm.kaɪ̯t/",
      "partOfSpeech": "Substantiv feminin (Noun)",
      "definition": "The contemplative, tranquil, and restorative feeling of being alone in the forest and connected with nature; quintessential German Romanticism concept.",
      "category": "Natur und Philosophie",
      "level": "B2 / Fortgeschritten",
      "examples": [
        {
          "target": "Ludwig Tieck prägte den Begriff der Waldeinsamkeit in der deutschen Romantik.",
          "translation": "Ludwig Tieck coined the concept of forest loneliness in German Romanticism."
        },
        {
          "target": "Nach einer anstrengenden Arbeitswoche suchte er die heilsame Waldeinsamkeit im Schwarzwald.",
          "translation": "After an exhausting work week, he sought the healing tranquility of the forest in the Black Forest."
        }
      ],
      "synonyms": [
        "Waldesruhe",
        "Naturverbundenheit",
        "Stille im Wald"
      ],
      "register": "Gehoben / Literarisch",
      "notes": "Famous German untranslatable word capturing the spiritual refuge found in dense German woodlands."
    },
    {
      "term": "Gestalt",
      "pronunciation": "/ɡəˈʃtalt/",
      "partOfSpeech": "Substantiv feminin (Noun)",
      "definition": "An organized whole, configuration, or pattern that is perceived as more than the sum of its individual parts (central to Gestalt psychology and aesthetics).",
      "category": "Psychologie und Ästhetik",
      "level": "C1 / Fachsprache",
      "examples": [
        {
          "target": "Die Gestaltpsychologie besagt: Das Ganze ist etwas anderes als die Summe seiner Teile.",
          "translation": "Gestalt psychology asserts: The whole is something other than the sum of its parts."
        },
        {
          "target": "Im dichten Nebel zeichnete sich die dunkle Gestalt eines alten Schlosses ab.",
          "translation": "In the dense fog, the dark figure/silhouette of an ancient castle emerged."
        }
      ],
      "synonyms": [
        "Ganzheit",
        "Form",
        "Struktur",
        "Erscheinungsbild"
      ],
      "register": "Wissenschaftlich / Standard"
    },
    {
      "term": "Zeitgeist",
      "pronunciation": "/ˈtsaɪ̯tˌɡaɪ̯st/",
      "partOfSpeech": "Substantiv maskulin (Noun)",
      "definition": "The defining spirit, intellectual outlook, moral mood, or cultural ethos characteristic of a particular era in history.",
      "category": "Philosophie und Kultur",
      "level": "B2 / Fortgeschritten",
      "examples": [
        {
          "target": "Der Roman fängt den rebellischen Zeitgeist der späten sechziger Jahre perfekt ein.",
          "translation": "The novel perfectly captures the rebellious zeitgeist of the late 1960s."
        },
        {
          "target": "Künstlerische Strömungen reflektieren stets den vorherrschenden gesellschaftlichen Zeitgeist.",
          "translation": "Artistic movements consistently reflect the prevailing societal spirit of the times."
        }
      ],
      "synonyms": [
        "Epochenbewusstsein",
        "Zeitstimmung",
        "Kulturklima"
      ],
      "register": "Gehoben / Kulturphilosophisch"
    },
    {
      "term": "Nachhaltigkeit",
      "pronunciation": "/ˈnaːxˌhaltɪçkaɪ̯t/",
      "partOfSpeech": "Substantiv feminin (Noun)",
      "definition": "Sustainability; principle originally developed in 18th-century German forestry (Hans Carl von Carlowitz) requiring that only as much timber be felled as can naturally regenerate.",
      "category": "Ökologie und Wirtschaft",
      "level": "B2 / Fortgeschritten",
      "examples": [
        {
          "target": "Hans Carl von Carlowitz formulierte 1713 das moderne Prinzip der forstwirtschaftlichen Nachhaltigkeit.",
          "translation": "Hans Carl von Carlowitz formulated the modern principle of forestry sustainability in 1713."
        },
        {
          "target": "Ökologische und ökonomische Nachhaltigkeit müssen in zukunftsfähigen Unternehmen Hand in Hand gehen.",
          "translation": "Ecological and economic sustainability must go hand in hand in future-proof enterprises."
        }
      ],
      "synonyms": [
        "Dauerhaftigkeit",
        "Zukunftsfähigkeit",
        "Ressourcenschonung"
      ],
      "register": "Standard / Fachsprache"
    }
  ],
  "russian": [
    {
      "term": "Здравствуйте (Zdravstvuyte)",
      "definition": "Hello / Formal standard polite greeting in Russian",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Привет (Privet)",
      "definition": "Hi / Informal friendly greeting",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Доброе утро / Добрый день / Добрый вечер (Dobroye utro / Dobryy den / Dobryy vecher)",
      "definition": "Good morning / Good afternoon / Good evening",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Спасибо / Пожалуйста (Spasibo / Pozhaluysta)",
      "definition": "Thank you / Please / You are welcome",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Извините / Простите (Izvinite / Prostite)",
      "definition": "Excuse me / I am sorry / Forgive me",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Счёт, пожалуйста (Schyot, pozhaluysta)",
      "definition": "The bill / check, please in restaurants",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "Сколько это стоит? (Skolko eto stoit?)",
      "definition": "How much does this cost?",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "Где находится туалет? (Gde nakhoditsya tualet?)",
      "definition": "Where is the restroom / toilet?",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "Очень приятно (Ochen priyatno)",
      "definition": "Very pleased to meet you (Standard introduction etiquette)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "До свидания (Do svidaniya)",
      "definition": "Goodbye / Until we meet again",
      "category": "Parting",
      "level": "A1"
    },
    {
      "term": "Ты vs Вы (Ty vs Vy)",
      "definition": "Informal address (ty) vs formal respectful address (Vy) and patronymic address (Imya-Otchestvo)",
      "category": "Social Etiquette",
      "level": "A1 / A2"
    },
    {
      "term": "Шесть падежей (The 6 Cases)",
      "definition": "Именительный (Nom), Родительный (Gen), Дательный (Dat), Винительный (Acc), Творительный (Inst), Предложный (Prep)",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Глаголы движения (Verbs of Motion)",
      "definition": "Unidirectional (идти, ехать) vs Multidirectional (ходить, ездить) motion verb system",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "Вид глагола (Verbal Aspect)",
      "definition": "Несовершенный вид (НСВ - Imperfective/process/habit) vs Совершенный вид (СВ - Perfective/result)",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "Причастия и деепричастия (Participles & Transgressives)",
      "definition": "Active/passive verbal adjectives (Причастия) and adverbial verbal participles (Деепричастия)",
      "category": "Grammar",
      "level": "B2 / C1"
    },
    {
      "term": "Тоска (Toska)",
      "definition": "Profound, aching melancholy, yearning, spiritual anguish, or existential nostalgia with no specific cause (Nabokov described it as a sensation of great spiritual anguish, longing with nothing to long for).",
      "category": "Психология и Литература",
      "level": "B2 / Продвинутый",
      "pronunciation": "тас-КА [tɐˈska]",
      "partOfSpeech": "Существительное женского рода (Noun)",
      "examples": [
        {
          "target": "Владимир Набоков утверждал, что ни одно слово в английском языке не способно передать все оттенки русской тоски.",
          "translation": "Vladimir Nabokov asserted that no single word in the English language is capable of rendering all nuances of Russian toska."
        },
        {
          "target": "Вдали от родины его охватила неизъяснимая душевная тоска.",
          "translation": "Far from his homeland, an inexplicable spiritual yearning seized him."
        }
      ],
      "synonyms": [
        "Меланхолия",
        "Уныние",
        "Грусть",
        "Печаль"
      ],
      "register": "Литературный / Философский",
      "notes": "Classic untranslatable concept in Russian literature (Pushkin, Chekhov, Dostoevsky)."
    },
    {
      "term": "Душа (Dusha)",
      "definition": "The Russian soul: depth of feeling, empathy, unvarnished honesty, and emotional openness",
      "category": "Cultural Philosophy",
      "level": "B1"
    },
    {
      "term": "Быт (Byt)",
      "definition": "Daily material existence, domestic routine, household chores, everyday life and its inescapable practical burdens.",
      "category": "Культура и Общество",
      "level": "B1 / Средний",
      "pronunciation": "БЫТ [bɨt]",
      "partOfSpeech": "Существительное мужского рода (Noun)",
      "examples": [
        {
          "target": "Поэтесса Марина Цветаева часто сетовала на то, как тяжелый быт отвлекает от творчества.",
          "translation": "Poet Marina Tsvetaeva often lamented how heavy daily domestic routine distracts from creative work."
        },
        {
          "target": "Обустройство комфортного быта требует времени и организованности.",
          "translation": "Arranging a comfortable everyday domestic life requires time and organization."
        }
      ],
      "synonyms": [
        "Повседневность",
        "Обиход",
        "Житейский уклад"
      ],
      "register": "Общий / Культурологический"
    },
    {
      "term": "Баня (Banya)",
      "definition": "Traditional Russian steam bath ritual with birch venik whisks and contrast plunges",
      "category": "Cultural Traditions",
      "level": "A2"
    },
    {
      "term": "Дача (Dacha)",
      "definition": "Country cottage and garden retreat for summer leisure, relaxation, and growing berries/vegetables",
      "category": "Daily Life & Culture",
      "level": "A2"
    },
    {
      "term": "Чай с лимоном и сладостями (Tea Culture)",
      "definition": "Central tradition of lingering around the table drinking strong black tea with lemon and sweets (varenye)",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Карта Тройка (Troika Card)",
      "definition": "Contactless smart transit card for the Moscow Metro, MCC, and surface transit network",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "Московское метро (Moscow Metro)",
      "definition": "Underground palace transit network known for socialist-realist art, chandeliers, and hyper-frequency",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "В гостях (Visiting Etiquette)",
      "definition": "Bringing gifts (sweets, odd number of flowers) and taking off outdoor shoes at the threshold (prikhozhaya)",
      "category": "Social Customs",
      "level": "A2"
    },
    {
      "term": "Не свисти — денег не будет",
      "definition": "Superstition / Proverb: Don’t whistle indoors or you will lose your wealth",
      "category": "Superstitions & Culture",
      "level": "B1"
    },
    {
      "term": "Посидеть на дорожку",
      "definition": "Cultural ritual of sitting together in silence for a moment before departing on a long journey",
      "category": "Cultural Customs",
      "level": "A2"
    },
    {
      "term": "Вешать лапшу на уши (Veshat lapshu na ushi)",
      "definition": "Idiom: to hang noodles on someone’s ears / to deceive or pull someone’s leg",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Делать из мухи слона (Delat iz mukhi slona)",
      "definition": "Idiom: to make an elephant out of a fly / to make a mountain out of a molehill",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Руки не доходят (Ruki ne dokhodyat)",
      "definition": "Idiom: hands haven’t reached it / haven’t gotten around to doing it yet",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Ни пуха ни пера — К чёрту!",
      "definition": "Idiom: Break a leg! (Neither down nor feather) — Answered with: To the devil!",
      "category": "Idiom & Customs",
      "level": "A2"
    },
    {
      "term": "Регистрация по месту пребывания",
      "definition": "Mandatory temporary address registration with migration authorities within 7 working days",
      "category": "Civic Administration",
      "level": "B1"
    },
    {
      "term": "ВНЖ / РВП (Residence Permits)",
      "definition": "Temporary residence permit (RVP) and permanent residence permit (VNZh) for foreign citizens",
      "category": "Civic Administration",
      "level": "B2"
    },
    {
      "term": "ОМС (Mandatory Medical Insurance)",
      "definition": "Compulsory state health insurance policy providing free polyclinic healthcare access",
      "category": "Healthcare & Public Admin",
      "level": "B1"
    },
    {
      "term": "Трудовой договор (Labor Contract)",
      "definition": "Formal written employment contract regulated by the Labor Code of the Russian Federation",
      "category": "Labor Law & Business",
      "level": "B2"
    },
    {
      "term": "Испытательный срок (Probation Period)",
      "definition": "Statutory probationary period (typically up to 3 months, up to 6 months for executives)",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "Трудовая книжка (Work Record Book)",
      "definition": "Official state career employment record (paper or electronic) tracking official job history",
      "category": "Labor Law & HR",
      "level": "B2"
    },
    {
      "term": "НДФЛ (Personal Income Tax)",
      "definition": "Personal income tax (13% standard flat rate up to statutory threshold, 15% progressive above)",
      "category": "Taxation & Finance",
      "level": "B2"
    },
    {
      "term": "ИНН и СНИЛС (Tax & Pension Numbers)",
      "definition": "Individual taxpayer number (INN) and insurance number of individual pension account (SNILS)",
      "category": "Civic Administration",
      "level": "B1"
    },
    {
      "term": "Повестка дня (Meeting Agenda)",
      "definition": "Formal meeting agenda distributed to participants before executive discussions",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Протокол заседания (Meeting Minutes)",
      "definition": "Official signed protocol recording decisions, responsible parties, and deadlines",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Договор о неразглашении (NDA)",
      "definition": "Confidentiality and non-disclosure agreement protecting commercial trade secrets",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "Счёт-фактура и акт приёма-передачи",
      "definition": "Value-added tax invoice (Schyot-faktura) and formal acceptance-delivery act confirming services rendered",
      "category": "Business & Finance",
      "level": "C1"
    },
    {
      "term": "Доверенность (Power of Attorney)",
      "definition": "Notarized legal instrument granting authority to act on behalf of an individual or legal entity",
      "category": "Legal & Notary",
      "level": "C1"
    },
    {
      "term": "Печать организации (Company Seal)",
      "definition": "Official organizational rubber stamp used to validate legal and corporate contracts",
      "category": "Corporate Governance",
      "level": "B2"
    },
    {
      "term": "Госуслуги (Gosuslugi)",
      "definition": "Unified national digital government portal managing civic, tax, real estate, and municipal services",
      "category": "Civic Tech & Admin",
      "level": "B1"
    },
    {
      "term": "Пошлость (Poshlost)",
      "pronunciation": "ПОШ-лость [ˈpoʂləsʲtʲ]",
      "partOfSpeech": "Существительное женского рода (Noun)",
      "definition": "Vulgarity, self-satisfied mediocrity, intellectual or aesthetic banality masked as profound or exquisite; kitsch with pretensions of sophistication.",
      "category": "Эстетика и Литература",
      "level": "C1 / Продвинутый",
      "examples": [
        {
          "target": "Николай Гоголь и Владимир Набоков беспощадно разоблачали пошлость мещанского быта.",
          "translation": "Nikolai Gogol and Vladimir Nabokov mercilessly unmasked the vulgar banality of bourgeois life."
        },
        {
          "target": "Глянцевая реклама часто граничит с откровенной пошлостью и дурным вкусом.",
          "translation": "Glossy advertising often borders on overt banality and bad taste."
        }
      ],
      "synonyms": [
        "Вульгарность",
        "Банальность",
        "Мещанство",
        "Кич"
      ],
      "antonyms": [
        "Благородство (nobility)",
        "Утонченность (refinement)"
      ],
      "register": "Литературный / Критический"
    },
    {
      "term": "Соборность (Sobornost)",
      "pronunciation": "са-БОР-насть [sɐˈbornəsʲtʲ]",
      "partOfSpeech": "Существительное женского рода (Noun)",
      "definition": "Spiritual community, organic solidarity, collective communion of individuals freely united in love, truth, and faith (Slavophile philosophy).",
      "category": "Философия и Культура",
      "level": "C1 / Продвинутый",
      "examples": [
        {
          "target": "Философ Алексей Хомяков выдвинул понятие соборности как основу русской духовной традиции.",
          "translation": "Philosopher Aleksey Khomyakov posited the concept of sobornost as the foundation of the Russian spiritual tradition."
        },
        {
          "target": "Соборность противопоставляется как западному индивидуализму, так и принудительному коллективизму.",
          "translation": "Sobornost is contrasted both with Western individualism and with coercive collectivism."
        }
      ],
      "synonyms": [
        "Единство",
        "Духовная общность",
        "Братство"
      ],
      "register": "Философский / Религиозный"
    },
    {
      "term": "Сопереживание (Soperezhivaniye)",
      "pronunciation": "са-пе-ре-жы-ВА-ни-е [səpʲɪrʲɪʐɨˈvanʲɪje]",
      "partOfSpeech": "Существительное среднего рода (Noun)",
      "definition": "Active, empathetic co-experiencing of another person's suffering or emotional state; walking alongside someone in their inner trials.",
      "category": "Психология и Этика",
      "level": "B2 / Продвинутый",
      "examples": [
        {
          "target": "Истинное сопереживание побуждает человека протянуть руку помощи нуждающемуся.",
          "translation": "True empathetic co-feeling impels a person to extend a helping hand to those in need."
        },
        {
          "target": "Великая русская литература воспитывает в читателе способность к глубокому сопереживанию.",
          "translation": "Great Russian literature nurtures in the reader the capacity for deep empathetic co-feeling."
        }
      ],
      "synonyms": [
        "Эмпатия",
        "Сочувствие",
        "Сострадание"
      ],
      "antonyms": [
        "Равнодушие (indifference)",
        "Черствость"
      ],
      "register": "Общий / Формальный"
    },
    {
      "term": "Вдохновение (Vdokhnoveniye)",
      "pronunciation": "вдах-на-ВЕ-ни-е [vdəxnɐˈvʲenʲɪje]",
      "partOfSpeech": "Существительное среднего рода (Noun)",
      "definition": "Inspiration, creative enthusiasm, divine surge of artistic or intellectual illumination.",
      "category": "Творчество и Искусство",
      "level": "B1 / Средний",
      "examples": [
        {
          "target": "Композитор черпал вдохновение в величественной природе русского севера.",
          "translation": "The composer drew inspiration from the majestic nature of the Russian north."
        },
        {
          "target": "Вдохновение приходит во время упорного ежедневного труда.",
          "translation": "Inspiration arrives during the course of persistent daily labor."
        }
      ],
      "synonyms": [
        "Озарение",
        "Творческий подъем",
        "Муза"
      ],
      "register": "Общий / Поэтический"
    }
  ],
  "vietnamese": [
    {
      "term": "Xin chào",
      "definition": "Hello (Standard universal greeting in Vietnamese)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Cảm ơn",
      "definition": "Thank you (Universal gratitude expression)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Xin lỗi",
      "definition": "I am sorry / Excuse me (Apology and getting attention)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Làm ơn / Dạ",
      "definition": "Please / Respectful polite verbal affirmative particle (Dạ)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Tính tiền / Thanh toán",
      "definition": "Settle the bill / Check please in dining and retail",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "Cái này bao nhiêu tiền?",
      "definition": "How much does this cost? (Standard shopping inquiry)",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "Nhà vệ sinh ở đâu?",
      "definition": "Where is the restroom / bathroom?",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "Hẹn gặp lại",
      "definition": "See you again / Goodbye (Polite parting)",
      "category": "Parting",
      "level": "A1"
    },
    {
      "term": "Rất vui được gặp bạn",
      "definition": "Pleased to meet you (Standard polite introduction)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Đại từ nhân xưng (Hierarchical Kinship Pronouns)",
      "definition": "Kinship address based on age/gender: Anh (older bro), Chị (older sis), Em (younger), Bác/Chú/Cô (elder aunt/uncle), Ông/Bà (grandparents)",
      "category": "Sociolinguistics",
      "level": "A1 / A2"
    },
    {
      "term": "Hệ thống 6 thanh điệu (The 6 Tones)",
      "definition": "Ngang (Flat), Sắc (High rising), Huyền (Low falling), Hỏi (Dipping-rising), Ngã (Glottalized broken), Nặng (Heavy dropping with dot below)",
      "category": "Phonetics",
      "level": "A1"
    },
    {
      "term": "Phó từ thời thể: Đã, Đang, Sẽ",
      "definition": "Tense-aspect markers: Đã (Past completed), Đang (Present continuous), Sẽ (Future)",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Loại từ (Classifiers)",
      "definition": "Nominal classifiers: cái (inanimate objects), con (animals/living creatures), người (humans), cuốn/quyển (books), quả/trái (fruits), cây (slender objects)",
      "category": "Grammar",
      "level": "A2"
    },
    {
      "term": "Tính từ đứng sau danh từ (Word Order)",
      "definition": "Modifier follows the head noun (e.g. cà phê sữa đá = coffee milk ice)",
      "category": "Grammar",
      "level": "A1"
    },
    {
      "term": "Cà phê sữa đá (Iced Milk Coffee)",
      "definition": "Traditional dark roast coffee brewed through a metal Phin filter over sweetened condensed milk and crushed ice",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Cà phê trứng (Egg Coffee)",
      "definition": "Iconic Hanoi specialty made with robusta coffee topped with whipped egg yolks, sugar, and condensed milk",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Phở (Phở bò & Phở gà)",
      "definition": "National aromatic noodle soup featuring slow-simmered bone broth, star anise, ginger, flat rice noodles, and fresh herbs",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Bánh mì (Vietnamese Baguette)",
      "definition": "Crispy French-influenced baguette filled with pâté, cold cuts, pickled daikon/carrot, cucumber, cilantro, and chili",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Quán vỉa hè & Văn hóa ngồi ghế nhựa",
      "definition": "Vibrant street food culture on low plastic stools along urban pavements",
      "category": "Culture & Daily Life",
      "level": "A1"
    },
    {
      "term": "Xe máy (Motorbike Culture)",
      "definition": "Dominant mode of urban transportation navigating bustling streets in Hanoi and Ho Chi Minh City",
      "category": "Transit & Culture",
      "level": "A1"
    },
    {
      "term": "Grab & Be (Ride-Hailing Apps)",
      "definition": "Ubiquitous motorbike and car ride-hailing and food delivery applications across Vietnam",
      "category": "Transit & Tech",
      "level": "A1"
    },
    {
      "term": "Văn hóa nhậu (Drinking Culture)",
      "definition": "Social bonding ritual around shared food and beer with the universal toast: «Một, hai, ba, dô!»",
      "category": "Social Customs",
      "level": "A2"
    },
    {
      "term": "Áo dài (National Dress)",
      "definition": "Elegant traditional silk tunic worn over loose silk trousers on festive occasions and school ceremonies",
      "category": "Cultural Heritage",
      "level": "A2"
    },
    {
      "term": "Tết Nguyên Đán (Lunar New Year)",
      "definition": "Sacred national holiday celebrating renewal, family reunions, Bánh chưng, red envelopes (Lì xì), and ancestor worship",
      "category": "Festivals & Culture",
      "level": "A1"
    },
    {
      "term": "Ăn quả nhớ kẻ trồng cây",
      "definition": "Proverb: When eating fruit, remember the person who planted the tree (Gratitude and ancestor reverence)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Học đi đôi với hành",
      "definition": "Proverb: Learning must go hand-in-hand with practical execution",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Nước đến chân mới nhảy",
      "definition": "Proverb: Waiting until water reaches the feet to jump (Procrastination / last-minute panic)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Đầu xuôi đuôi lọt",
      "definition": "Proverb: A smooth beginning leads to a successful end (Well begun is half done)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Thả con tép bắt con tôm",
      "definition": "Idiom: Cast a tiny shrimp to catch a large lobster (Give a small concession for a big return)",
      "category": "Idiom",
      "level": "B2"
    },
    {
      "term": "Đăng ký tạm trú",
      "definition": "Mandatory municipal temporary residence registration for tenants at the local commune police station (Công an phường)",
      "category": "Civic Administration",
      "level": "B1"
    },
    {
      "term": "Hợp đồng thuê nhà",
      "definition": "Formal residential rental agreement detailing monthly rent, deposit (tiền cọc), and utilities",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "Thẻ tạm trú (Temporary Residence Card - TRC)",
      "definition": "Multi-year residence card issued to foreign investors, experts, and employees exempting from visas",
      "category": "Civic Administration",
      "level": "B2"
    },
    {
      "term": "Giấy phép lao động (Work Permit)",
      "definition": "Ministry of Labour, Invalids and Social Affairs permit required for foreign workers",
      "category": "Labor Law & Admin",
      "level": "B2"
    },
    {
      "term": "Hợp đồng lao động",
      "definition": "Statutory employment contract regulated under the Vietnam Labour Code",
      "category": "Labor Law & HR",
      "level": "B2"
    },
    {
      "term": "Thời gian thử việc (Probation Period)",
      "definition": "Probationary period (typically 30 to 60 days) with statutory minimum 85% salary",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "Bảo hiểm xã hội, y tế, thất nghiệp",
      "definition": "Mandatory social, health, and unemployment insurance contributions split between employer and employee",
      "category": "Labor & Social Welfare",
      "level": "B2"
    },
    {
      "term": "Lương tháng 13 (13th Month Salary)",
      "definition": "Customary annual Tet bonus paid to employees before the Lunar New Year",
      "category": "Corporate & HR",
      "level": "B2"
    },
    {
      "term": "Mã số thuế cá nhân (Personal Tax Code - MST)",
      "definition": "Unique tax identification number for personal income tax withholding",
      "category": "Taxation & Finance",
      "level": "B1"
    },
    {
      "term": "Hóa đơn đỏ / Hóa đơn điện tử (VAT e-Invoice)",
      "definition": "Official electronic value-added tax invoice required for corporate accounting and tax deduction",
      "category": "Business & Finance",
      "level": "B2"
    },
    {
      "term": "Giấy chứng nhận đăng ký doanh nghiệp (ERC)",
      "definition": "Corporate business license issued by the Department of Planning and Investment",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "Con dấu doanh nghiệp (Company Seal)",
      "definition": "Official corporate seal legally validating enterprise contracts and administrative filings",
      "category": "Corporate Governance",
      "level": "C1"
    },
    {
      "term": "Biên bản cuộc họp (Meeting Minutes)",
      "definition": "Official signed written record of business meeting discussions and executive decisions",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Thỏa thuận bảo mật thông tin (NDA)",
      "definition": "Non-disclosure agreement safeguarding proprietary business secrets",
      "category": "Legal & Contract",
      "level": "C1"
    },
    {
      "term": "Báo giá & Đơn đặt hàng (Quotation & PO)",
      "definition": "Commercial pricing estimate (Báo giá) and official purchase order (PO)",
      "category": "Commerce & Sales",
      "level": "B2"
    },
    {
      "term": "Kinh tế số & Đổi mới sáng tạo",
      "definition": "Rapidly expanding technology, semiconductor, and fintech startup ecosystem across Vietnam",
      "category": "Economics & Innovation",
      "level": "B2 / C1"
    },
    {
      "term": "Uống nước nhớ nguồn (Uong nuoc nho nguon)",
      "pronunciation": "[ʔuəŋ˧˦ nɨək˧˦ ɲəː˧˦ ŋuən˨˩]",
      "partOfSpeech": "Thành ngữ / Đạo lý (Idiom / Ethical Maxim)",
      "definition": "When drinking water, remember the water source; sacred Vietnamese moral precept expressing profound, lifelong gratitude to ancestors, teachers, parents, and benefactors.",
      "category": "Đạo đức và Truyền thống (Ethics & Tradition)",
      "level": "B1 / Trung cấp",
      "examples": [
        {
          "target": "Truyền thống \"Uống nước nhớ nguồn\" là đạo lý tốt đẹp ngàn đời của dân tộc Việt Nam.",
          "translation": "The tradition of \"When drinking water, remember the source\" is a fine moral principle of thousands of years for the Vietnamese people."
        },
        {
          "target": "Ngày Nhà giáo Việt Nam là dịp để học sinh thể hiện tinh thần uống nước nhớ nguồn đối với thầy cô.",
          "translation": "Vietnamese Teachers' Day is an occasion for students to express the spirit of remembering the source toward their teachers."
        }
      ],
      "synonyms": [
        "Ăn quả nhớ kẻ trồng cây (When eating fruit, remember who planted the tree)",
        "Tôn sư trọng đạo"
      ],
      "register": "Trang trọng / Đạo lý (Formal / Traditional)"
    },
    {
      "term": "Tình làng nghĩa xóm (Tinh lang nghia xom)",
      "pronunciation": "[tïŋ˨˩ laːŋ˨˩ ŋiə˦ˀ˥ sɔm˧˦]",
      "partOfSpeech": "Thành ngữ / Khái niệm xã hội (Idiom / Social Concept)",
      "definition": "Village bond and neighborhood solidarity; warm mutual support, neighborly empathy, and collective care characteristic of traditional Vietnamese communal life.",
      "category": "Văn hóa làng xã (Communal Culture)",
      "level": "B2 / Trung-Cao cấp",
      "examples": [
        {
          "target": "Tình làng nghĩa xóm tối lửa tắt đèn có nhau giúp cộng đồng vượt qua mọi gian khó.",
          "translation": "Village affection and neighborhood bonds standing together in hardship help the community overcome all difficulties."
        },
        {
          "target": "Dù cuộc sống hiện đại thay đổi, người dân quê tôi vẫn luôn giữ gìn tình làng nghĩa xóm.",
          "translation": "Although modern life changes, people in my hometown always preserve warm neighborhood solidarity."
        }
      ],
      "synonyms": [
        "Tình làng nghĩa xóm",
        "Tối lửa tắt đèn có nhau",
        "Tình đồng hương"
      ],
      "register": "Thân mật / Văn hóa (Communal / Cultural)"
    },
    {
      "term": "Hiếu thảo (Hieu thao)",
      "pronunciation": "[hiəw˧˦ tʰaːw˧˩]",
      "partOfSpeech": "Tính từ / Danh từ (Adjective / Noun)",
      "definition": "Filial piety; wholehearted respect, love, devotion, and attentive care shown by children toward their parents and grandparents.",
      "category": "Đạo hiếu và Gia đình (Family & Filial Piety)",
      "level": "A2 / Cơ bản",
      "examples": [
        {
          "target": "Một người con hiếu thảo luôn lắng nghe và chăm sóc cha mẹ khi tuổi già.",
          "translation": "A filial child always listens to and cares for parents in their old age."
        },
        {
          "target": "Lòng hiếu thảo được xem là gốc rễ của mọi phẩm hạnh tốt đẹp trong gia đình.",
          "translation": "Filial devotion is regarded as the root of all fine virtues in the family."
        }
      ],
      "synonyms": [
        "Hiếu thuận",
        "Hiếu kính",
        "Hiếu tâm"
      ],
      "antonyms": [
        "Bất hiếu (unfilial / disobedient)"
      ],
      "register": "Trang trọng / Đạo đức (Formal / Moral)"
    },
    {
      "term": "Chân thành (Chan thanh)",
      "pronunciation": "[tɕən˧˧ tʰïŋ˨˩]",
      "partOfSpeech": "Tính từ (Adjective)",
      "definition": "Sincere, heartfelt, genuine, honest without pretense or deception in feelings and human relations.",
      "category": "Phẩm chất con người (Character & Virtues)",
      "level": "A2 / Cơ bản",
      "examples": [
        {
          "target": "Tôi xin gửi lời cảm ơn chân thành và sâu sắc nhất đến toàn thể quý vị.",
          "translation": "I would like to send my most sincere and profound gratitude to all of you."
        },
        {
          "target": "Một tình bạn bền vững luôn được xây dựng trên sự chân thành và tin cậy lẫn nhau.",
          "translation": "An enduring friendship is always built upon mutual sincerity and trust."
        }
      ],
      "synonyms": [
        "Thành thật",
        "Chân thực",
        "Thành tâm"
      ],
      "antonyms": [
        "Dối trá (deceitful)",
        "Giả tạo"
      ],
      "register": "Phổ biến / Lịch sự (General / Polite)"
    }
  ],
  "turkish": [
    {
      "term": "Merhaba",
      "definition": "Hello (Standard friendly greeting in Turkish)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Günaydın / İyi günler / İyi akşamlar / İyi geceler",
      "definition": "Good morning / Good day / Good evening / Good night",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Teşekkür ederim / Sağ olun",
      "definition": "Thank you / May you be healthy (Gratitude expressions)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Rica ederim / Bir şey değil",
      "definition": "You are welcome / It’s nothing",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Lütfen / Pardon / Özür dilerim",
      "definition": "Please / Excuse me / I am sorry (Core politeness vocabulary)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Hesap, lütfen",
      "definition": "The bill / check, please in restaurants and cafes",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "Ne kadar? / Kaç para?",
      "definition": "How much is it? (Pricing inquiry for shopping)",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "Tuvalet nerede?",
      "definition": "Where is the restroom / toilet?",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "Memnun oldum",
      "definition": "Pleased to meet you (Standard introduction etiquette)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Görüşmek üzere / Hoşça kalın",
      "definition": "See you soon / Stay pleasantly (Said by departing guest) vs «Güle güle» (Go with a smile, said by host)",
      "category": "Parting",
      "level": "A1"
    },
    {
      "term": "Sesli Uyumu (Vowel Harmony)",
      "definition": "Fundamental phonological engine: Front vowels (e, i, ö, ü) vs Back vowels (a, ı, o, u) governing all suffixation",
      "category": "Phonology",
      "level": "A1"
    },
    {
      "term": "Bitişkenlik (Agglutination)",
      "definition": "Suffix-stacking morphology building complex words from roots (e.g. ev-ler-imiz-de = in our houses)",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Görülen vs Duyulan Geçmiş Zaman (-di vs -miş)",
      "definition": "Direct witnessed past (-di) vs reported/inferred past or surprise discovery (-miş)",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "Geniş Zaman (-r / Aorist)",
      "definition": "Broad habitual present expressing general truths, habits, and polite requests (yapar mısınız?)",
      "category": "Grammar",
      "level": "A2"
    },
    {
      "term": "Yönelme, Bulunma, Ayrılma Hal Ekleri",
      "definition": "Locative Cases: Dative (-e/-a = to), Locative (-de/-da = at/in), Ablative (-den/-dan = from)",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Kolay gelsin!",
      "definition": "May it come easy! (Culturally ubiquitous greeting wishing effortless success to anyone working)",
      "category": "Cultural Etiquette",
      "level": "A1"
    },
    {
      "term": "Afiyet olsun!",
      "definition": "May it bring health! (Bon appétit! Said before, during, or after a meal)",
      "category": "Dining Etiquette",
      "level": "A1"
    },
    {
      "term": "Geçmiş olsun!",
      "definition": "May it pass! (Get well soon / Hope your troubles pass quickly during illness or misfortune)",
      "category": "Social Customs",
      "level": "A1"
    },
    {
      "term": "Elinize sağlık!",
      "definition": "Health to your hands! (Deep gratitude thanking cook, craftsman, or host for manual effort)",
      "category": "Social Etiquette",
      "level": "A1"
    },
    {
      "term": "Hayırlı olsun!",
      "definition": "May it bring good fortune! (Congratulations on a new job, home, purchase, or venture)",
      "category": "Social Customs",
      "level": "A2"
    },
    {
      "term": "Nazar Boncuğu (Evil Eye Amulet)",
      "definition": "Traditional cobalt blue glass eye talisman protecting against envious glances",
      "category": "Cultural Heritage",
      "level": "A1"
    },
    {
      "term": "Türk Kahvesi ve Fal (Turkish Coffee & Fortune)",
      "definition": "Unfiltered finely ground coffee boiled in a cezve, followed by tasseography fortune-reading from coffee grounds",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Çay ve İnce Belli Bardak (Tulip Glass Tea)",
      "definition": "Black tea brewed in a double teapot (çaydanlık) served in tulip-shaped glasses everywhere",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Kahvaltı (Breakfast)",
      "definition": "«Before coffee» — lavish spread of cheeses, olives, tomatoes, cucumbers, eggs (menemen), honey-kaymak, and fresh simit",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "İstanbulkart",
      "definition": "Contactless smart transit card used across Istanbul ferries, metro, Marmaray rail, trams, and metrobüs",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "Boğaz Vapuru (Bosphorus Ferry)",
      "definition": "Historic passenger ferries crossing the strait between Europe and Asia feeding seagulls with simit",
      "category": "Transit & Culture",
      "level": "A1"
    },
    {
      "term": "Kapalıçarşı (Grand Bazaar)",
      "definition": "Historic 15th-century covered market with 4,000+ shops and bustling trade culture",
      "category": "Commerce & History",
      "level": "A2"
    },
    {
      "term": "Pazarlık Yapmak (Bargaining)",
      "definition": "Friendly, culturally expected ritual of price negotiation over glasses of tea in traditional bazaars",
      "category": "Commerce & Culture",
      "level": "A2"
    },
    {
      "term": "Damlaya damlaya göl olur",
      "definition": "Proverb: Drop by drop, a lake is formed (Small savings accumulate into great wealth)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Ayağını yorganına göre uzat",
      "definition": "Proverb: Stretch your feet according to your quilt (Live within your financial means)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Tatlı dil yılanı deliğinden çıkarır",
      "definition": "Proverb: Sweet speech coaxes the snake from its hole (Gentle words persuade anyone)",
      "category": "Proverb",
      "level": "B2"
    },
    {
      "term": "İki karpuz bir koltuğa sığmaz",
      "definition": "Proverb: Two watermelons don’t fit under one arm (Don’t take on too many tasks at once)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "İkamet İzni (Residence Permit)",
      "definition": "Official residency permit card issued by the Directorate General of Migration Management (Göç İdaresi)",
      "category": "Civic Administration",
      "level": "B1"
    },
    {
      "term": "Kira Sözleşmesi ve Depozito",
      "definition": "Notarized residential tenancy contract and rental deposit (typically 1-2 months)",
      "category": "Housing & Legal",
      "level": "B1"
    },
    {
      "term": "e-Devlet Kapısı",
      "definition": "Comprehensive national digital government portal for residency, address registration, tax, and healthcare records",
      "category": "Civic Tech & Admin",
      "level": "B1"
    },
    {
      "term": "SGK (Sosyal Güvenlik Kurumu)",
      "definition": "Social Security Institution managing universal healthcare (GSS) and retirement pensions",
      "category": "Healthcare & Public Admin",
      "level": "B1"
    },
    {
      "term": "İş Kanunu ve İş Sözleşmesi",
      "definition": "Statutory employment contract under Turkish Labor Law No. 4857",
      "category": "Labor Law & Business",
      "level": "B2"
    },
    {
      "term": "Deneme Süresi (Probationary Period)",
      "definition": "Trial period (maximum 2 months, extendable to 4 months by collective bargaining)",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "Kıdem Tazminatı (Severance Pay)",
      "definition": "Statutory seniority severance compensation equal to 30 days’ wage per year of service",
      "category": "Labor Law & Finance",
      "level": "C1"
    },
    {
      "term": "İhbar Süresi (Notice Period)",
      "definition": "Statutory termination notice period scaling with employee tenure (from 2 to 8 weeks)",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "Vergi Kimlik Numarası (Tax ID - VKN)",
      "definition": "10-digit tax identification number required for bank accounts, contracts, and company registration",
      "category": "Taxation & Finance",
      "level": "B1"
    },
    {
      "term": "Toplantı Tutanağı (Meeting Minutes)",
      "definition": "Official signed protocol recording discussions, resolutions, and assigned duties in business meetings",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Gizlilik Sözleşmesi (NDA)",
      "definition": "Non-disclosure agreement protecting proprietary trade secrets and technical specifications",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "İmza Sirküleri (Signature Circular)",
      "definition": "Notarized corporate document verifying authorized executive signatories of a company",
      "category": "Corporate Governance",
      "level": "C1"
    },
    {
      "term": "Fatura ve e-Fatura (Invoice & e-Invoice)",
      "definition": "Commercial value-added tax invoice integrated into the Revenue Administration digital system",
      "category": "Business & Finance",
      "level": "B2"
    },
    {
      "term": "Hüzün",
      "pronunciation": "[hyˈzyn]",
      "partOfSpeech": "İsim (Noun)",
      "definition": "Deep, shared, melancholic yearning and communal sense of loss or nostalgia experienced in Istanbul (celebrated by Nobel laureate Orhan Pamuk in \"Istanbul: Memories and the City\").",
      "category": "Kültür, Edebiyat ve Felsefe (Culture & Literature)",
      "level": "C1 / İleri Düzey",
      "examples": [
        {
          "target": "Orhan Pamuk, İstanbul’un sokaklarına sinmiş olan hüzün duygusunu romanlarında ustalıkla anlatır.",
          "translation": "Orhan Pamuk masterfully portrays in his novels the feeling of hüzün (communal melancholy) permeated through the streets of Istanbul."
        },
        {
          "target": "Boğaz kıyısında eski yalıları seyrederken içimi derin bir hüzün kapladı.",
          "translation": "While watching old seaside mansions along the Bosphorus, a deep hüzün (poignant nostalgia) enveloped my soul."
        }
      ],
      "synonyms": [
        "Keder",
        "Melankoli",
        "Gönül burukluğu"
      ],
      "register": "Edebi / Kültürel (Literary / Cultural)"
    },
    {
      "term": "Gönül",
      "pronunciation": "[ɡøˈnyl]",
      "partOfSpeech": "İsim (Noun)",
      "definition": "Heart, soul, inner spiritual emotional sanctuary, seat of unconditional love and mystical intuition (central to Sufi poetry and Yunus Emre).",
      "category": "Tasavvuf ve Duygular (Sufism & Emotions)",
      "level": "B2 / Orta-Üst",
      "examples": [
        {
          "target": "Yunus Emre şöyle demiştir: \"Gönül Çalab'ın tahtı, Çalap gönüle baktı.\"",
          "translation": "Yunus Emre said: \"The heart/gönül is the throne of the Divine, and the Divine gazes into the heart.\""
        },
        {
          "target": "Gönülden yapılan her iyilik insanlar arasında kalıcı sevgi köprüleri kurar.",
          "translation": "Every kindness done genuinely from the heart (gönül) builds lasting bridges of love among people."
        }
      ],
      "synonyms": [
        "Yürek (physical/emotional heart)",
        "Kalp",
        "Can"
      ],
      "register": "Kültürel / Tasavvufi (Spiritual / Cultural)"
    },
    {
      "term": "Keyif",
      "pronunciation": "[ceˈjif]",
      "partOfSpeech": "İsim (Noun)",
      "definition": "Tranquil relaxation, contented leisure, savoring the present moment with quiet pleasure (such as sipping Turkish tea or coffee in a seaside garden).",
      "category": "Gündelik Yaşam ve Zevk (Daily Life & Leisure)",
      "level": "A2 / Temel",
      "examples": [
        {
          "target": "Pazar sabahı deniz kenarında çay içip simit yemenin keyfi bambaşkadır.",
          "translation": "The keyif (contented pleasure) of drinking tea and eating simit by the sea on Sunday morning is completely unparalleled."
        },
        {
          "target": "Bugün kendinize vakit ayırın ve günün keyfini doyasıya çıkarın.",
          "translation": "Today take time for yourself and savor the keyif of the day to the fullest."
        }
      ],
      "synonyms": [
        "Huzur (tranquility)",
        "Neşe",
        "Zevk"
      ],
      "antonyms": [
        "Keyifsizlik (malaise / indisposition)"
      ],
      "register": "Genel / Günlük (General / Daily Life)"
    },
    {
      "term": "Misafirperverlik",
      "pronunciation": "[mi.saː.fiɾ.pɛɾ.vɛɾˈlic]",
      "partOfSpeech": "İsim (Noun)",
      "definition": "Traditional Turkish boundless hospitality, welcoming strangers as honored guests and offering generous food and lodging unconditionally.",
      "category": "Gelenek ve Ahlak (Tradition & Ethics)",
      "level": "B1 / Orta",
      "examples": [
        {
          "target": "Anadolu köylerinde karşılaştığımız içten misafirperverlik bizi derinden etkiledi.",
          "translation": "The sincere hospitality we encountered in Anatolian villages deeply touched us."
        },
        {
          "target": "Misafirperverlik, Türk kültürünün en köklü ve değerli erdemlerinden biridir.",
          "translation": "Hospitality is one of the most deep-rooted and precious virtues of Turkish culture."
        }
      ],
      "synonyms": [
        "Konukseverlik",
        "Cömertlik (generosity)"
      ],
      "register": "Genel / Kültürel (General / Cultural)"
    }
  ],
  "ukrainian": [
    {
      "term": "Доброго дня / Добрий день",
      "definition": "Good day (Standard polite greeting in Ukrainian)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Привіт",
      "definition": "Hi / Hello (Informal friendly greeting)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Доброго ранку / Доброго вечора",
      "definition": "Good morning / Good evening",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Дякую / Дуже дякую",
      "definition": "Thank you / Thank you very much",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Будь ласка / Прошу",
      "definition": "Please / You are welcome / Here you go",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Вибачте / Перепрошую",
      "definition": "Excuse me / I am sorry / Pardon me",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Рахунок, будь ласка",
      "definition": "The bill / check, please in restaurants",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "Скільки це коштує?",
      "definition": "How much does this cost? (Shopping inquiry)",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "Де знаходиться туалет?",
      "definition": "Where is the restroom / toilet?",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "Дуже приємно",
      "definition": "Pleased to meet you (Standard polite introduction)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "До побачення / На все добре",
      "definition": "Goodbye / All the best",
      "category": "Parting",
      "level": "A1"
    },
    {
      "term": "Ти vs Ви (Ty vs Vy)",
      "definition": "Informal address (ty) vs formal respectful address (Vy)",
      "category": "Social Etiquette",
      "level": "A1 / A2"
    },
    {
      "term": "Сім відмінків (The 7 Cases)",
      "definition": "Називний (Nom), Родовий (Gen), Давальний (Dat), Знахідний (Acc), Орудний (Inst), Місцевий (Loc), Кличний (Vocative for direct address: Друже! Оксано!)",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Вид дієслова (Verbal Aspect)",
      "definition": "Доконаний вид (Perfective/completed) vs Недоконаний вид (Imperfective/process)",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "Чергування голосних та приголосних",
      "definition": "Phonological alternations (e.g. о/і, е/і in closed syllables; г-з-ж, к-ц-ч, х-с-ш)",
      "category": "Phonology & Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "Воля (Volya)",
      "definition": "Freedom, liberty, indomitable free will, unchained sovereignty, and spiritual independence; the core existential value of Ukrainian identity and Cossack history.",
      "category": "Культура, Історія та Філософія (Culture, History & Philosophy)",
      "level": "B1 / Середній",
      "pronunciation": "ВО-ля [ˈwɔ.lʲɐ]",
      "partOfSpeech": "Іменник жіночого роду (Noun - Feminine)",
      "examples": [
        {
          "target": "«Борітеся — поборете, вам Бог помагає! За вас правда, за вас слава і воля святая!» (Тарас Шевченко).",
          "translation": "\"Struggle on — and be triumphant, God Himself will aid you! On your side is truth, on your side is glory and holy freedom/volya!\" (Taras Shevchenko)."
        },
        {
          "target": "Прагнення до волі та незалежності споконвіку об'єднує український народ.",
          "translation": "The yearning for freedom (volya) and independence has united the Ukrainian people since time immemorial."
        }
      ],
      "synonyms": [
        "Свобода (freedom / liberty)",
        "Незалежність (independence)"
      ],
      "antonyms": [
        "Неволя (captivity / bondage)",
        "Рабство (slavery)"
      ],
      "register": "Урочистий / Поетичний (Solemn / Poetic)"
    },
    {
      "term": "Гідність (Hidnist)",
      "definition": "Dignity, moral self-worth, inviolable personal honor and human rights (embodied in the historic Revolution of Dignity).",
      "category": "Етика та Суспільство (Ethics & Society)",
      "level": "B2 / Вище середнього",
      "pronunciation": "ГІД-ність [ˈɦʲid.n⁽ʲ⁾isʲtʲ]",
      "partOfSpeech": "Іменник жіночого роду (Noun - Feminine)",
      "examples": [
        {
          "target": "Людська гідність є найвищою цінністю правової та демократичної держави.",
          "translation": "Human dignity (hidnist) is the supreme value of a lawful and democratic state."
        },
        {
          "target": "Зберегти власну гідність у найскладніших випробуваннях — це ознака сильного духу.",
          "translation": "Preserving one's own dignity in the most arduous trials is a hallmark of a strong spirit."
        }
      ],
      "synonyms": [
        "Самоповага (self-respect)",
        "Честь (honor)",
        "Шляхетність"
      ],
      "antonyms": [
        "Приниження (humiliation / degradation)"
      ],
      "register": "Офіційний / Етичний (Formal / Ethical)"
    },
    {
      "term": "Незламність (Nezlamnist)",
      "definition": "Invincibility, steadfastness, unbreakable fortitude, and tenacity in the face of overwhelming hardship and existential threats.",
      "category": "Характер та Стійкість (Character & Resilience)",
      "level": "B2 / Вище середнього",
      "pronunciation": "не-злам-НІСТЬ [nez.lɐmˈn⁽ʲ⁾isʲtʲ]",
      "partOfSpeech": "Іменник жіночого роду (Noun - Feminine)",
      "examples": [
        {
          "target": "Мужність та незламність захисників викликають щире захоплення в усьому світі.",
          "translation": "The courage and unbreakability (nezlamnist) of the defenders evoke sincere admiration across the entire world."
        },
        {
          "target": "Пункти незламності забезпечували людей теплом, світлом і зв'язком у часи блекаутів.",
          "translation": "Points of Invincibility provided people with warmth, light, and connectivity during blackouts."
        }
      ],
      "synonyms": [
        "Стійкість (resilience)",
        "Непохитність (steadfastness)",
        "Мужність"
      ],
      "antonyms": [
        "Слабкість (weakness)",
        "Капітуляція"
      ],
      "register": "Суспільно-політичний / Патріотичний (General / Civic)"
    },
    {
      "term": "Вишиванка (Vyshyvanka)",
      "definition": "Traditional Ukrainian embroidered shirt with regional symbolic geometric patterns serving as cultural identity",
      "category": "Cultural Heritage",
      "level": "A1"
    },
    {
      "term": "Борщ (Borscht)",
      "definition": "UNESCO-inscribed traditional beetroot soup cooked with vegetables, meat/beans, garlic pampushky, and sour cream (smetana)",
      "category": "Culinary Heritage",
      "level": "A1"
    },
    {
      "term": "Вареники (Varenyky)",
      "definition": "Handcrafted boiled dumplings filled with potatoes, mushrooms, cabbage, sour cherries, or sweet cottage cheese",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Дія (Diia e-Governance App)",
      "definition": "State-of-the-art national digital government app storing digital passports, driver licenses, and company registrations",
      "category": "Civic Tech & Innovation",
      "level": "A2"
    },
    {
      "term": "Київ Цифровий (Kyiv Digital)",
      "definition": "Urban transit and civic app managing metro QR-tickets, parking, air alerts, and city notifications",
      "category": "Civic Tech & Transit",
      "level": "A1"
    },
    {
      "term": "Монобанк & Приват24 (Monobank & Privat24)",
      "definition": "Leading mobile banking and digital peer-to-peer payment apps across Ukraine",
      "category": "FinTech & Daily Life",
      "level": "A1"
    },
    {
      "term": "Укрзалізниця (Ukrzaliznytsia)",
      "definition": "National railway network famed for legendary punctuality and resilience during crises",
      "category": "Transit & Infrastructure",
      "level": "A1"
    },
    {
      "term": "Гостинність (Hostynnist)",
      "definition": "Warm hospitality: welcoming guests with bread and salt (khlib-sil) and an abundant table",
      "category": "Cultural Traditions",
      "level": "A2"
    },
    {
      "term": "Хто рано встає, тому Бог дає",
      "definition": "Proverb: God gives to those who rise early (The early bird catches the worm)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Сім разів відмір, один раз відріж",
      "definition": "Proverb: Measure seven times, cut once (Look before you leap)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Терпіння і труд все перетруть",
      "definition": "Proverb: Patience and hard work overcome all obstacles",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Пекти раків (Pekty rakiv)",
      "definition": "Idiom: to bake crawfish / to blush deeply from embarrassment",
      "category": "Idiom",
      "level": "B2"
    },
    {
      "term": "Брати бика за роги (Braty byka za rohy)",
      "definition": "Idiom: to take the bull by the horns",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Договір оренди житла (Residential Lease)",
      "definition": "Formal apartment rental agreement detailing rent, deposit (zastavna suma), and utility bills (komunalni)",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "Посвідка на тимчасове/постійне проживання",
      "definition": "Temporary or permanent residence permit issued by State Migration Service",
      "category": "Civic Administration",
      "level": "B2"
    },
    {
      "term": "Декларація з сімейним лікарем",
      "definition": "Registration with primary care physician under the National Health Service (NSZU)",
      "category": "Healthcare & Public Admin",
      "level": "B1"
    },
    {
      "term": "Трудовий договір (Labor Contract)",
      "definition": "Statutory employment agreement regulated by the Labor Code of Ukraine",
      "category": "Labor Law & Business",
      "level": "B2"
    },
    {
      "term": "Випробувальний термін (Probation Period)",
      "definition": "Probationary period (typically up to 3 months) under Ukrainian labor law",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "Щорічна оплачувана відпустка (Annual Leave)",
      "definition": "Statutory minimum 24 calendar days of paid vacation per working year",
      "category": "Labor Law & HR",
      "level": "B2"
    },
    {
      "term": "Вихідна допомога (Severance Pay)",
      "definition": "Statutory severance payment upon contract termination under specific legal conditions",
      "category": "Labor Law & Finance",
      "level": "C1"
    },
    {
      "term": "ФОП (FOP - Individual Entrepreneur)",
      "definition": "Simplified tax system for IT specialists, freelancers, and small business entrepreneurs (Group 1, 2, 3)",
      "category": "Business & Tax",
      "level": "B2"
    },
    {
      "term": "Єдиний податок та ЄСВ (Single Tax & Social)",
      "definition": "5% flat single tax rate for Group 3 IT/consulting FOPs + Unified Social Contribution",
      "category": "Taxation & Finance",
      "level": "B2 / C1"
    },
    {
      "term": "Порядок денний (Meeting Agenda)",
      "definition": "Formal meeting agenda distributed in advance of business discussions",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Протокол зустрічі (Meeting Minutes)",
      "definition": "Written document capturing discussions, resolutions, and actionable responsibilities",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Договір про нерозголошення (NDA)",
      "definition": "Confidentiality and non-disclosure agreement protecting intellectual property and trade secrets",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "Рахунок-фактура та Акт виконаних робіт",
      "definition": "Commercial invoice and signed act confirming delivery of professional services",
      "category": "Business & Finance",
      "level": "B2"
    },
    {
      "term": "Дія.City (Diia.City Tech Regime)",
      "definition": "Specialized digital economic zone providing tax incentives, gig-contracts, and English law elements for IT companies",
      "category": "Tech Ecosystem & Law",
      "level": "C1"
    },
    {
      "term": "Щедрість (Schedrist)",
      "pronunciation": "ЩЕД-рість [ˈʃtʃɛd.r⁽ʲ⁾isʲtʲ]",
      "partOfSpeech": "Іменник жіночого роду (Noun - Feminine)",
      "definition": "Generosity, bountiful hospitality, open-hearted magnanimity and sharing of resources (celebrated in Ukrainian winter Shchedryk carols).",
      "category": "Традиції та Гостинність (Traditions & Hospitality)",
      "level": "A2 / Базовий",
      "examples": [
        {
          "target": "Українська щедрість та гостинність славляться на весь світ смачними стравами і теплим прийомом.",
          "translation": "Ukrainian generosity (schedrist) and hospitality are celebrated worldwide with delicious dishes and warm reception."
        },
        {
          "target": "На Щедрий вечір господарі щедро обдаровують щедрувальників смаколиками.",
          "translation": "On Generous Eve (Shchedryi Vechir), hosts generously shower carolers with festive treats."
        }
      ],
      "synonyms": [
        "Гостинність (hospitality)",
        "Великодушність (magnanimity)",
        "Доброта"
      ],
      "antonyms": [
        "Скупість (stinginess)"
      ],
      "register": "Загальновживаний / Фольклорний (General / Folklore)"
    }
  ],
  "hindi": [
    {
      "term": "नमस्ते / नमस्कार (Namaste / Namaskar)",
      "definition": "Hello / Traditional respectful Indian greeting with folded palms (Añjali Mudrā)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "आप कैसे हैं? / तुम कैसे हो?",
      "definition": "How are you? (Formal \"aap\" vs informal \"tum\")",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "धन्यवाद / शुक्रिया (Dhanyavaad / Shukriya)",
      "definition": "Thank you (Formal Hindi vs colloquial Hindustani)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "कृपया (Kripya)",
      "definition": "Please (Formal polite request)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "माफ़ कीजिए (Maaf kijiye)",
      "definition": "Excuse me / I am sorry / Forgive me",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "बिल दीजिए / हिसाब कीजिए",
      "definition": "The bill / check, please at restaurants and cafes",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "यह कितने का है? (Yeh kitne ka hai?)",
      "definition": "How much is this? (Marketplace and shopping inquiry)",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "शौचालय कहाँ है? (Shauchalay kahan hai?)",
      "definition": "Where is the restroom / toilet?",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "आपसे मिलकर बहुत खुशी हुई",
      "definition": "Very pleased to meet you (Standard formal introduction)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "अलविदा / फिर मिलेंगे (Alvida / Phir milenge)",
      "definition": "Goodbye / See you again",
      "category": "Parting",
      "level": "A1"
    },
    {
      "term": "आप vs तुम vs तू (Aap vs Tum vs Tu)",
      "definition": "Three-tiered second-person pronoun system: honorific formal (Aap), familiar informal (Tum), intimate/low (Tu)",
      "category": "Sociolinguistics",
      "level": "A1 / A2"
    },
    {
      "term": "लिंग व्यवस्था (Grammatical Gender)",
      "definition": "Two-gender system (Masculine / Feminine) governing all nouns, adjectives, postpositions, and verb agreements",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "परसर्ग (Postpositions)",
      "definition": "Postpositional case markers: ने (ergative), को (dative/acc), से (inst/abl), का/के/की (genitive), में/पर (locative)",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "ने-प्रयोग (Ergative \"Ne\" Construction)",
      "definition": "Ergative alignment in transitive perfective aspects where verb agrees with object rather than subject",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "संयुक्त क्रियाएँ (Compound Verbs)",
      "definition": "Main verb stem + explicator vector verbs (देना, लेना, डालना, जाना, बैठना) adding nuance of completion or suddenness",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "चाय और नुक्कड़ की चाय (Chai Culture)",
      "definition": "Spiced masala chai brewed with milk, cardamom, and ginger served in clay cups (kulhad) at street stalls",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "अतिथि देवो भव (Atithi Devo Bhava)",
      "definition": "The guest is truly equivalent to God; sacred Vedic Sanskrit/Hindi principle of unconditional hospitality and reverence toward guests and travelers.",
      "category": "पारंपरिक आतिथ्य और संस्कृति (Traditional Hospitality)",
      "level": "A2 / प्रारंभिक",
      "pronunciation": "अ-ति-थि दे-वो भ-व [ə.t̪ɪ.t̪ʰɪ d̪eː.ʋoː bʱə.ʋə]",
      "partOfSpeech": "सूक्ति / सांस्कृतिक आदर्श (Maxim / Cultural Ideal)",
      "examples": [
        {
          "target": "भारतीय संस्कृति में \"अतिथि देवो भव\" की भावना से मेहमानों का आदर-सत्कार किया जाता है।",
          "translation": "In Indian culture, guests are honored and welcomed with the spirit of \"The guest is God\"."
        },
        {
          "target": "गृहस्थ जीवन में अतिथियों का सत्कार करना परम धर्म माना गया है।",
          "translation": "In householder life, hospitable reception of guests is regarded as a supreme duty."
        }
      ],
      "synonyms": [
        "आतिथ्य सत्कार",
        "मेहमाननवाज़ी"
      ],
      "register": "पारंपरिक / धार्मिक (Traditional / Cultural)"
    },
    {
      "term": "जुगाड़ (Jugaad)",
      "definition": "Frugal innovation, ingenious improvisation, problem-solving using whatever limited resources are immediately available; cultural concept of inventive resilience.",
      "category": "संस्कृति और व्यावहारिक बुद्धिमत्ता (Culture & Practical Ingenuity)",
      "level": "B1 / मध्यम",
      "pronunciation": "जु-गाड़ [d͡ʒʊ.ɡaːɽ]",
      "partOfSpeech": "संज्ञा (Noun - Masculine)",
      "examples": [
        {
          "target": "भारतीय इंजीनियरों ने कम लागत में देसी जुगाड़ से उपयोगी उपकरण तैयार कर लिया।",
          "translation": "Indian engineers prepared a useful device at low cost through local frugal innovation (jugaad)."
        },
        {
          "target": "कठिन परिस्थितियों में जुगाड़ की सोच नई संभावनाओं के द्वार खोलती है।",
          "translation": "In difficult circumstances, the mindset of resourceful improvisation opens doors to new possibilities."
        }
      ],
      "synonyms": [
        "सुलभ नवाचार",
        "सूझबूझ",
        "तरकीब"
      ],
      "register": "अनौपचारिक / व्यावहारिक (Informal / Practical)"
    },
    {
      "term": "यूपीआई (UPI - Unified Payments Interface)",
      "definition": "India’s transformative real-time mobile QR payment network powering instant digital transactions nationwide",
      "category": "FinTech & Daily Life",
      "level": "A1"
    },
    {
      "term": "दिल्ली मेट्रो (Delhi Metro)",
      "definition": "World-class rapid transit network connecting NCR with contactless smart cards and token systems",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "भारतीय रेल (Indian Railways)",
      "definition": "Vast railway network connecting the subcontinent with IRCTC digital reservations and Vande Bharat express trains",
      "category": "Transit",
      "level": "A2"
    },
    {
      "term": "ऑटो रिक्शा और मीटर (Auto Rickshaw)",
      "definition": "Three-wheeled urban transit operating on meters or app-based booking (Ola/Uber)",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "दाल-रोटी और थाली (Dal-Roti & Thali)",
      "definition": "Staple nutrition and traditional multi-dish platter offering balanced Ayurvedic tastes",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "दाल में कुछ काला होना",
      "definition": "Idiom: Something is fishy / There is something suspicious going on",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "नौ दो ग्यारह होना",
      "definition": "Idiom: To flee rapidly / to vanish into thin air (become nine-two-eleven)",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "आस्तीन का साँप",
      "definition": "Idiom: A snake in the grass / a treacherous backstabbing friend",
      "category": "Idiom",
      "level": "B2"
    },
    {
      "term": "अंगूर खट्टे हैं",
      "definition": "Proverb: Sour grapes (disparaging what one cannot attain)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "जैसी करनी वैसी भरनी",
      "definition": "Proverb: As you sow, so shall you reap",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "किरायानामा (Rent Agreement)",
      "definition": "Registered residential tenancy agreement detailing security deposit and monthly rent",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "आधार कार्ड (Aadhaar Card)",
      "definition": "12-digit biometric unique identification number serving as proof of identity across India",
      "category": "Civic Administration",
      "level": "A2"
    },
    {
      "term": "पैन कार्ड (PAN Card)",
      "definition": "Permanent Account Number issued by Income Tax Department required for financial and tax operations",
      "category": "Taxation & Finance",
      "level": "B1"
    },
    {
      "term": "श्रम कानून और रोजगार अनुबंध",
      "definition": "Statutory employment terms under the Industrial Relations Code and Shops & Establishments Act",
      "category": "Labor Law & Business",
      "level": "B2"
    },
    {
      "term": "परिवीक्षा अवधि (Probation Period)",
      "definition": "Probationary period (typically 3 to 6 months) under corporate HR policies",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "ग्रेच्युटी (Gratuity)",
      "definition": "Statutory retirement benefit paid under Payment of Gratuity Act after 5 years of continuous service",
      "category": "Labor Law & Finance",
      "level": "C1"
    },
    {
      "term": "कर्मचारी भविष्य निधि (EPF)",
      "definition": "Mandatory social security retirement savings scheme with matching employer contribution",
      "category": "Labor & Social Welfare",
      "level": "B2"
    },
    {
      "term": "सकल वेतन बनाम शुद्ध वेतन (Gross vs In-Hand)",
      "definition": "Total CTC compensation package breakdown showing PF deductions, professional tax, and net pay",
      "category": "Payroll & HR",
      "level": "B2"
    },
    {
      "term": "माल एवं सेवा कर (GST)",
      "definition": "Unified indirect tax system with electronic GST e-invoicing for business transactions",
      "category": "Taxation & Commerce",
      "level": "B2"
    },
    {
      "term": "कॉर्पोरेट मामलों का मंत्रालय (MCA & CIN)",
      "definition": "Ministry of Corporate Affairs regulating Company Identification Numbers and corporate compliance",
      "category": "Corporate Governance",
      "level": "C1"
    },
    {
      "term": "कार्यसूची (Meeting Agenda)",
      "definition": "Formal business meeting agenda distributed to participants",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "बैठक का कार्यवृत्त (Meeting Minutes)",
      "definition": "Official signed record documenting corporate meeting proceedings and board resolutions",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "गोपनीयता समझौता (NDA)",
      "definition": "Non-disclosure agreement protecting commercial trade secrets and proprietary software IP",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "कोटेशन और खरीद आदेश (Quotation & PO)",
      "definition": "Commercial price estimate and official purchase order",
      "category": "Commerce & Sales",
      "level": "B2"
    },
    {
      "term": "मुख्तारनामा (Power of Attorney)",
      "definition": "Notarized legal authorization conferring legal power to act on another’s behalf",
      "category": "Legal & Notary",
      "level": "C1"
    },
    {
      "term": "डिजिटल इंडिया (Digital India)",
      "definition": "National initiative transforming public infrastructure through Aadhaar, UPI, DigiLocker, and CoWIN",
      "category": "Tech & Public Policy",
      "level": "B2"
    },
    {
      "term": "स्टार्टअप इंडिया (Startup India)",
      "definition": "Government initiative fostering tech entrepreneurship, venture capital, and patent subsidies",
      "category": "Economics & Innovation",
      "level": "B2 / C1"
    },
    {
      "term": "अहिंसा (Ahimsa)",
      "pronunciation": "अ-हिं-सा [ə.ɦɪ̃m.saː]",
      "partOfSpeech": "संज्ञा (Noun - Feminine)",
      "definition": "Non-violence, reverence for all living beings, and absolute harmlessness in thought, speech, and deed (cardinal virtue in Indian philosophical traditions and Gandhi's Satyagraha).",
      "category": "दर्शन और नैतिकता (Philosophy & Ethics)",
      "level": "B2 / उच्च-मध्यम",
      "examples": [
        {
          "target": "महात्मा गांधी ने अहिंसा और सत्याग्रह के मार्ग पर चलकर भारत को स्वतंत्रता दिलाई।",
          "translation": "Mahatma Gandhi led India to independence by walking the path of non-violence (ahimsa) and truth-force (satyagraha)."
        },
        {
          "target": "अहिंसा केवल शारीरिक हिंसा का त्याग नहीं, बल्कि मन में किसी के प्रति दुर्भावना न रखना भी है।",
          "translation": "Ahimsa is not merely renouncing physical violence, but also harboring no ill will toward anyone in one's mind."
        }
      ],
      "synonyms": [
        "शांति (peace)",
        "अहिंसक आचरण",
        "जीव दया"
      ],
      "antonyms": [
        "हिंसा (violence / himsa)"
      ],
      "register": "दार्शनिक / औपचारिक (Philosophical / Formal)"
    },
    {
      "term": "सहानुभूति (Sahanubhuti)",
      "pronunciation": "स-हा-नु-भू-ति [sə.ɦaː.nʊ.bʱuː.t̪i]",
      "partOfSpeech": "संज्ञा (Noun - Feminine)",
      "definition": "Sympathy, active compassion, shared feeling, and empathy with another person's joy or suffering.",
      "category": "मनोविज्ञान और मानवीय मूल्य (Psychology & Human Values)",
      "level": "B1 / मध्यम",
      "examples": [
        {
          "target": "विपत्ति के समय जरूरतमंदों के प्रति सच्ची सहानुभूति और सहायता प्रकट करनी चाहिए।",
          "translation": "In times of calamity, one should demonstrate genuine sympathy and assistance toward those in need."
        },
        {
          "target": "सहानुभूतिपूर्ण व्यवहार से समाज में आपसी विश्वास और प्रेम बढ़ता है।",
          "translation": "Through sympathetic conduct, mutual trust and love increase in society."
        }
      ],
      "synonyms": [
        "सहानुभाव",
        "संवेदना (compassion)",
        "हमदर्दी"
      ],
      "antonyms": [
        "उदासीनता (indifference)",
        "कठोरता"
      ],
      "register": "औपचारिक / सामान्य (Formal / General)"
    }
  ],
  "urdu": [
    {
      "term": "السلام علیکم (As-salamu alaykum)",
      "definition": "Peace be upon you (Universal formal Islamic and cultural greeting in Urdu)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "وعلیکم السلام (Wa alaykumu s-salam)",
      "definition": "And upon you be peace (Standard obligatory reply)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "آپ کیسے ہیں؟ / مزاج شریف؟",
      "definition": "How are you? / How is your noble disposition? (Polite high-register inquiry)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "شکریہ / نوازش / مہربانی",
      "definition": "Thank you / Kindness / Obliging gratitude",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "برائے مہربانی (Bara-e-meherbani)",
      "definition": "Please (Polite request prefix)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "معاف کیجیے گا (Maaf kijiye ga)",
      "definition": "Excuse me / I beg your pardon",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "بل لائیے / حساب کر دیجیے",
      "definition": "Please bring the bill / settle the check",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "یہ کتنے کا ہے؟ (Yeh kitne ka hai?)",
      "definition": "How much is this? (Shopping inquiry)",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "بیت الخلاء کہاں ہے؟",
      "definition": "Where is the restroom / washroom?",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "آپ سے مل کر بہت خوشی ہوئی",
      "definition": "Delighted to meet you (Standard polite introduction)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "خدا حافظ / اللہ حافظ (Allah Hafiz)",
      "definition": "Goodbye / May God protect you (Standard parting)",
      "category": "Parting",
      "level": "A1"
    },
    {
      "term": "آپ جناب vs تم vs تو",
      "definition": "Refined Urdu honorific register: Aap/Janab (Supreme respect), Tum (Familiar), Tu (Intimate/Low)",
      "category": "Sociolinguistics",
      "level": "A1 / A2"
    },
    {
      "term": "تذکیر و تانیث (Grammatical Gender)",
      "definition": "Masculine (Muzakkar) vs Feminine (Muannas) governing all nouns, postpositions, and verb conjugations",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "علامتِ فاعل \"نے\" (Ergative \"Ne\")",
      "definition": "Ergative subject marker in past transitive verbs where agreement shifts to the direct object",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "اضافت (Izafat - ـِ)",
      "definition": "Perso-Arabic poetic genitive/attributive connector (-e-) linking nouns (e.g. دردِ دل Dard-e-dil, وزیرِ اعظم Wazir-e-Azam)",
      "category": "Grammar & Literature",
      "level": "B1 / B2"
    },
    {
      "term": "امدادِ افعال (Compound Verbs)",
      "definition": "Compound verbal systems with vector verbs (دینا, لینا, جانا, ڈالنا) enriching aspect and emotional nuance",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "تہذیب (Tehzib)",
      "definition": "Refinement, civilization, exquisite manners, cultural grace, and dignified etiquette (hallmark of Lucknow and Delhi Urdu cultural heritage).",
      "category": "ثقافت اور اخلاقیات (Culture & Etiquette)",
      "level": "B2 / اعلیٰ",
      "pronunciation": "تَہْ-ذِیْب [t̪ɛhˈziːb]",
      "partOfSpeech": "اسم مؤنث (Noun - Feminine)",
      "examples": [
        {
          "target": "لکھنؤ کی تہذیب میں زبان کی شائستگی اور باہمی احترام کو بنیادی اہمیت حاصل ہے۔",
          "translation": "In the tehzib (refined culture) of Lucknow, politeness of language and mutual respect hold fundamental importance."
        },
        {
          "target": "قدیم تہذیبوں کا مطالعہ ہمیں انسانی شعور کے ارتقا سے روشناس کراتا ہے۔",
          "translation": "The study of ancient civilizations introduces us to the evolution of human consciousness."
        }
      ],
      "synonyms": [
        "شائستگی (politeness)",
        "تمدن (civilization)",
        "سلیقہ",
        "ادب"
      ],
      "antonyms": [
        "بدتہذیبی (rudeness / uncouthness)"
      ],
      "register": "ادبی / رسمی (Literary / Formal)"
    },
    {
      "term": "شاعری و مشاعرہ (Poetry & Mushaira)",
      "definition": "Traditional poetic symposium where poets recite Ghazals and Nazms to an appreciative audience",
      "category": "Literary Culture",
      "level": "B2"
    },
    {
      "term": "مہمان نوازی (Mehman Nawazi)",
      "definition": "Legendary tradition of lavish South Asian hospitality, serving Biryani, Nihari, and Chai to guests",
      "category": "Cultural Traditions",
      "level": "A2"
    },
    {
      "term": "ڈھابہ اور چائے خانۂ (Chai Khana)",
      "definition": "Roadside tea stall culture serving sweet Karak chai in glass cups with parathas",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "شناختی کارڈ (CNIC)",
      "definition": "Computerized National Identity Card issued by NADRA for Pakistani citizens",
      "category": "Civic Administration",
      "level": "A2"
    },
    {
      "term": "ایزی پیسہ اور جاز کیش (Easypaisa & JazzCash)",
      "definition": "Leading branchless mobile wallet and digital payment platforms across Pakistan",
      "category": "FinTech & Daily Life",
      "level": "A1"
    },
    {
      "term": "راست (Raast Instant Payment)",
      "definition": "Pakistan’s central digital instant payment system enabling interoperable QR transactions",
      "category": "FinTech & Banking",
      "level": "B1"
    },
    {
      "term": "کرایہ نامہ (Rental Lease Agreement)",
      "definition": "Formal tenancy agreement legally registered and witnessed with security deposit terms",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "پیٹ میں چوہے دوڑنا",
      "definition": "Idiom: Mice running in the stomach / ravenously hungry",
      "category": "Idiom",
      "level": "A2"
    },
    {
      "term": "دال میں کالا ہونا",
      "definition": "Idiom: Something is suspicious or fishy",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "چراغ تلے اندھیرا",
      "definition": "Proverb: Darkness beneath the lamp (The closest people remain unaware of the truth)",
      "category": "Proverb",
      "level": "B2"
    },
    {
      "term": "اونٹ کے منہ میں زیرا",
      "definition": "Proverb: A cumin seed in a camel’s mouth (A drop in the ocean / totally insufficient)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "ہمتِ مرداں مددِ خدا",
      "definition": "Proverb: When man shows courage, God provides help (God helps those who help themselves)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "ملازمت کا معاہدہ (Employment Contract)",
      "definition": "Written labor contract outlining salary, job description, and termination notice",
      "category": "Labor Law & Business",
      "level": "B2"
    },
    {
      "term": "آزمائشی مدت (Probation Period)",
      "definition": "Probationary period (typically 3 months) under Pakistani labor law",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "سالانہ با معاوضہ رخصت (Annual Leave)",
      "definition": "Statutory annual paid leave entitlement under the Factories Act / West Pakistan Standing Orders",
      "category": "Labor Law & HR",
      "level": "B2"
    },
    {
      "term": "گریجویٹی و پراویڈنٹ فنڈ",
      "definition": "Mandatory end-of-service retirement gratuity or contributory provident fund",
      "category": "Labor Law & Finance",
      "level": "C1"
    },
    {
      "term": "ای او بی آئی (EOBI)",
      "definition": "Employees’ Old-Age Benefits Institution managing national pension and disability benefits",
      "category": "Social Security",
      "level": "B2"
    },
    {
      "term": "فیڈرل بورڈ آف ریونیو (FBR & NTN)",
      "definition": "Federal Board of Revenue and National Tax Number required for tax filings",
      "category": "Taxation & Finance",
      "level": "B2"
    },
    {
      "term": "سی پی ای سی (CPEC)",
      "definition": "Major infrastructure, energy, and digital connectivity China-Pakistan Economic Corridor initiative",
      "category": "Economics & Infrastructure",
      "level": "B2 / C1"
    },
    {
      "term": "ایس ای سی پی (SECP)",
      "definition": "Securities and Exchange Commission of Pakistan regulating corporate entities and registrations",
      "category": "Corporate Governance",
      "level": "C1"
    },
    {
      "term": "ایجنڈا برائے اجلاس (Meeting Agenda)",
      "definition": "Formal meeting agenda circulated before board and executive meetings",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "رودادِ اجلاس (Meeting Minutes)",
      "definition": "Official written record capturing discussion resolutions and action items",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "معاہدۂ راز داری (NDA)",
      "definition": "Non-disclosure and business confidentiality agreement protecting commercial secrets",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "پروفارما انوائس و قیمت کا تخمینہ",
      "definition": "Official commercial quotation submitted to business clients",
      "category": "Commerce & Sales",
      "level": "B2"
    },
    {
      "term": "مختار نامہ (Power of Attorney)",
      "definition": "Notarized legal authorization delegating legal and commercial representative powers",
      "category": "Legal & Notary",
      "level": "C1"
    },
    {
      "term": "حلف نامہ (Affidavit)",
      "definition": "Sworn written legal statement executed on stamped judicial paper",
      "category": "Legal & Notary",
      "level": "B2"
    },
    {
      "term": "فری لانسنگ اور آئی ٹی برآمدات",
      "definition": "Rapidly booming software export, digital freelancing, and startup ecosystem across Pakistan",
      "category": "Tech & Economy",
      "level": "B2"
    },
    {
      "term": "نستعلیق رسم الخط (Nastaliq Script)",
      "definition": "Flowing, calligraphic right-to-left Persian script traditionally used for printing and writing Urdu",
      "category": "Calligraphy & Orthography",
      "level": "A1 / A2"
    },
    {
      "term": "خودی (Khudi)",
      "pronunciation": "خُ-دِی [xʊˈd̪iː]",
      "partOfSpeech": "اسم مؤنث (Noun - Feminine)",
      "definition": "Selfhood, self-reliance, moral individuality, spiritual ego, and divine self-realization (Allama Iqbal's central philosophical concept).",
      "category": "اقبالیات اور فلسفہ (Iqbalian Philosophy)",
      "level": "C1 / اعلیٰ ترین",
      "examples": [
        {
          "target": "علامہ اقبال نے فرمایا: \"خودی کو کر بلند اتنا کہ ہر تقدیر سے پہلے، خدا بندے سے خود پوچھے بتا تیری رضا کیا ہے۔\"",
          "translation": "Allama Iqbal declared: \"Elevate your selfhood (khudi) so high that before every decree of destiny, God Himself asks His servant: Tell me, what is your desire?\""
        },
        {
          "target": "خودی کی تربیت انسان کو خودداری اور خود اعتمادی کے اعلیٰ مرتبے پر فائز کرتی ہے۔",
          "translation": "Cultivating khudi elevates a person to the sublime station of self-respect and self-confidence."
        }
      ],
      "synonyms": [
        "خودداری (self-respect)",
        "انا (spiritual ego)",
        "معرفت نفس"
      ],
      "register": "فلسفیانہ / فکری (Philosophical / Poetic)"
    },
    {
      "term": "شوق (Shauq)",
      "pronunciation": "شَوق [ʃɔːq]",
      "partOfSpeech": "اسم مذكر (Noun - Masculine)",
      "definition": "Passionate desire, zeal, profound aesthetic or intellectual devotion, deep longing for truth and beauty in classical Ghazal poetry.",
      "category": "شاعری اور جذبات (Poetry & Passion)",
      "level": "B1 / متوسط",
      "examples": [
        {
          "target": "علم کے حصول کا سچا شوق انسان کو کامیابی کی منزل تک پہنچاتا ہے۔",
          "translation": "True shauq (passion) for acquiring knowledge guides a person to the destination of success."
        },
        {
          "target": "غالب کی شاعری میں شوق اور جستجو کے مضامین کو بے مثال ندرت کے ساتھ برتا گیا ہے۔",
          "translation": "In Ghalib's poetry, themes of passion and quest are handled with incomparable novelty."
        }
      ],
      "synonyms": [
        "ذوق (refined taste)",
        "لگن",
        "ارمان",
        "اشتیاق"
      ],
      "register": "ادبی / عام (Literary / General)"
    },
    {
      "term": "مروت (Murawwat)",
      "pronunciation": "مُ-رَوَّت [mʊˈrəʋ.ʋət̪]",
      "partOfSpeech": "اسم مؤنث (Noun - Feminine)",
      "definition": "Gentleness, considerate forbearance, gracious accommodation, and reluctance to offend or embarrass another person.",
      "category": "اخلاق اور معاشرت (Social Ethics)",
      "level": "B2 / اعلیٰ",
      "examples": [
        {
          "target": "اہلِ مروت کبھی کسی کی مجبوری یا کمزوری کا ناجائز فائدہ نہیں اٹھاتے۔",
          "translation": "People of murawwat (forbearance and graciousness) never take unfair advantage of anyone's helplessness or weakness."
        },
        {
          "target": "معاشرتی رشتوں کی مضبوطی مروت، اخلاص اور باہمی ایثار پر منحصر ہے۔",
          "translation": "The strength of societal relationships depends on gracious forbearance, sincerity, and mutual sacrifice."
        }
      ],
      "synonyms": [
        "لحاظ (consideration)",
        "شرم و حیا",
        "رواداری"
      ],
      "antonyms": [
        "بے مروتی (callousness / lack of consideration)"
      ],
      "register": "ادبی / روایتی (Literary / Traditional)"
    }
  ],
  "swahili": [
    {
      "term": "Jambo / Hujambo (Sijambo)",
      "definition": "Hello / How are you? (I am fine - Standard greeting)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Habari gani? / Nzuri",
      "definition": "What news? / How are things? (Good / Fine - Daily greeting)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Shikamoo (Marahaba)",
      "definition": "Respectful greeting addressed to elders and superiors (Honored response: Marahaba)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Asante / Asante sana",
      "definition": "Thank you / Thank you very much (Universal gratitude)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Tafadhali",
      "definition": "Please (Polite request prefix)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Samahani",
      "definition": "Excuse me / I am sorry / Pardon me",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Bili, tafadhali / Naomba bili",
      "definition": "The bill, please in restaurants and cafes",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "Bei gani? / Hii ni kiasi gani?",
      "definition": "How much is this? (Marketplace and shopping inquiry)",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "Choo kiko wapi?",
      "definition": "Where is the restroom / toilet?",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "Nafurahi kukuona / Nimefurahi kukufahamu",
      "definition": "Pleased to meet you (Standard polite introduction)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Kwaheri / Baadaye",
      "definition": "Goodbye / See you later",
      "category": "Parting",
      "level": "A1"
    },
    {
      "term": "Ngeli za Nomino (The 18 Noun Classes)",
      "definition": "Fundamental Bantu noun-class system (M-/Wa-, M-/Mi-, Ki-/Vi-, Ji-/Ma-, N-/N-, U-, Ku-, Pa-/Ku-/Mu-) governing concord",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Upatanisho wa Kisarufi (Concord)",
      "definition": "All-pervasive prefix agreement across adjectives, verbs, possessives, and demonstratives matching noun class",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "Viambishi vya Wakati (Tense Infixes)",
      "definition": "-li- (Past), -na- (Present progressive), -ta- (Future), -me- (Perfective), -ki- (Conditional), -sipo- (Negative conditional)",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Viambishi vya Kitenzi (Verb Slots)",
      "definition": "Agglutinative verbal slot: [Subject Prefix + Tense Infix + Relative/Object Infix + Verb Root + Extension + Final Vowel]",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "Virejeshi na Vinyambuliko",
      "definition": "Causative (-isha/-eza), Applicative (-ia/-ea), Passive (-wa), Reciprocal (-ana), Stative (-ika/-eka)",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "Karibu",
      "definition": "1. Welcome! / You are welcome. 2. Near / Close in distance or time. 3. Response to \"Asante\" (thank you).",
      "category": "Maamkizi na Adabu (Greetings & Etiquette)",
      "level": "A1 / Msingi",
      "pronunciation": "[kaˈɾi.bu]",
      "partOfSpeech": "Kivumishi / Neno la Heshima (Adjective / Interjection)",
      "examples": [
        {
          "target": "Karibu nyumbani kwetu! Jisikie huru kama uko kwako.",
          "translation": "Welcome to our home! Feel free as if you are at your own place."
        },
        {
          "target": "Kituo cha reli kiko karibu sana na hoteli yetu.",
          "translation": "The railway station is very near to our hotel."
        }
      ],
      "synonyms": [
        "Karibisha (verb form)"
      ],
      "antonyms": [
        "Mbali (far / distant)"
      ],
      "register": "Kawaida (General)"
    },
    {
      "term": "Hakuna Matata",
      "definition": "No worries / No problems (Famous Swahili reassurance expression)",
      "category": "Cultural Idiom",
      "level": "A1"
    },
    {
      "term": "Pole pole",
      "definition": "Slowly, gently, step-by-step, with calm patience and without haste; foundational East African life philosophy.",
      "category": "Maisha ya Kila Siku na Falsafa (Daily Life & Philosophy)",
      "level": "A1 / Msingi",
      "pronunciation": "[ˈpɔ.lɛ ˈpɔ.lɛ]",
      "partOfSpeech": "Kielezi (Adverb Phrase)",
      "examples": [
        {
          "target": "Haba na haba, hujaza kibaba; twende pole pole tutafika tu.",
          "translation": "Little by little fills the measure; let us go slowly and steadily, we will surely arrive."
        },
        {
          "target": "Wakati wa kupanda Mlima Kilimanjaro, waongoza watalii wanasisitiza kutembea pole pole.",
          "translation": "When climbing Mount Kilimanjaro, tour guides emphasize walking slowly and steadily."
        }
      ],
      "synonyms": [
        "Taratibu",
        "Kwa utulivu",
        "Bila haraka"
      ],
      "antonyms": [
        "Haraka haraka (hastily / recklessly)"
      ],
      "register": "Kawaida / Methali (General / Proverbial)"
    },
    {
      "term": "Harambee",
      "definition": "Let us pull together; Kenyan national motto and cultural tradition of community self-help, collective pooling of resources, and mutual solidarity to accomplish shared goals.",
      "category": "Utamaduni na Jamii (Culture & Society)",
      "level": "B1 / Kati",
      "pronunciation": "[ha.ɾamˈbeː]",
      "partOfSpeech": "Nomino / Kaulimbiu (Noun / Cultural Maxim)",
      "examples": [
        {
          "target": "Wanakijiji walikusanyika katika harambee ili kujenga kliniki mpya ya afya.",
          "translation": "The villagers gathered in a harambee to build a new health clinic."
        },
        {
          "target": "Mwamko wa harambee umesaidia maelfu ya wanafunzi kupata karo ya shule.",
          "translation": "The harambee initiative has helped thousands of students obtain school fees."
        }
      ],
      "synonyms": [
        "Ushirikiano (cooperation)",
        "Mshikamano (solidarity)",
        "Umoja"
      ],
      "register": "Rasmi / Utamaduni (Official Motto / Cultural Tradition)",
      "notes": "Originated during the independence struggle led by Jomo Kenyatta in 1963."
    },
    {
      "term": "Utamaduni wa Chai na Kahawa",
      "definition": "Coastal Swahili spiced tea (Chai ya viungo) and sweet ginger coffee (Kahawa tungu) served with kashata",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Ugali na Sukuma Wiki",
      "definition": "Staple maize flour porridge paired with braised collard greens (Sukuma Wiki: stretch the week) and nyama choma",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "M-Pesa",
      "definition": "World-pioneering mobile money transfer and financial services ecosystem launched by Safaricom in Kenya",
      "category": "FinTech & Daily Life",
      "level": "A1"
    },
    {
      "term": "Matatu na Bodaboda",
      "definition": "Vibrantly decorated minibus public transit (Matatu) and agile motorcycle taxis (Bodaboda)",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "Khanga na Kitenge",
      "definition": "Traditional East African cotton textiles printed with Swahili proverbs (Jina) and colorful wax prints",
      "category": "Cultural Heritage",
      "level": "A2"
    },
    {
      "term": "Soko Kuu na Kupunguza Bei",
      "definition": "Bustling open-air markets and the friendly, customary art of bargaining",
      "category": "Commerce & Daily Life",
      "level": "A2"
    },
    {
      "term": "Haraka haraka haina baraka",
      "definition": "Proverb: Hurry hurry has no blessing (More haste, less speed)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Haba na haba hujaza kibaba",
      "definition": "Proverb: Little by little fills the measure (Patience and steady accumulation bring success)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Asiyesikia la mkuu huvunjika guu",
      "definition": "Proverb: He who does not listen to elders breaks his leg",
      "category": "Proverb",
      "level": "B2"
    },
    {
      "term": "Mtaka cha mvunguni sharti ainame",
      "definition": "Proverb: He who desires what is under the bed must bend down (Nothing worthwhile comes without effort)",
      "category": "Proverb",
      "level": "B2"
    },
    {
      "term": "Mkataba wa Upangaji Nyumba",
      "definition": "Formal tenancy agreement specifying monthly rent, security deposit (kodi ya amana), and maintenance",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "Kitambulisho cha Taifa (National ID)",
      "definition": "National identity card required for banking, telecom SIM registration, and public services",
      "category": "Civic Administration",
      "level": "A2"
    },
    {
      "term": "Mkataba wa Ajira (Employment Contract)",
      "definition": "Statutory written labor agreement regulated under the Employment and Labour Relations Act",
      "category": "Labor Law & HR",
      "level": "B2"
    },
    {
      "term": "Kipindi cha Majaribio (Probation Period)",
      "definition": "Statutory probationary period (typically up to 6 months) under East African labor law",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "Likizo ya Mwaka Yenye Malipo",
      "definition": "Statutory minimum 21 to 28 consecutive days of paid annual vacation",
      "category": "Labor Law & HR",
      "level": "B2"
    },
    {
      "term": "Kiinua Mgongo / Mafao ya Kustaafu",
      "definition": "Statutory severance pay upon redundancy and national social security pension (NSSF/PSSSF)",
      "category": "Labor Law & Finance",
      "level": "C1"
    },
    {
      "term": "Bima ya Afya ya Taifa (NHIF)",
      "definition": "National Health Insurance Fund providing universal medical coverage",
      "category": "Healthcare & Public Admin",
      "level": "B1"
    },
    {
      "term": "Mamlaka ya Mapato (KRA / TRA)",
      "definition": "Tax authority issuing Personal Identification Numbers (PIN/TIN) for tax compliance",
      "category": "Taxation & Finance",
      "level": "B2"
    },
    {
      "term": "Ajenda ya Mkutano (Meeting Agenda)",
      "definition": "Formal meeting agenda circulated before commercial and executive sessions",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Muhtasari wa Mkutano (Meeting Minutes)",
      "definition": "Official signed written record capturing meeting resolutions and assigned duties",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Mkataba wa Kutotoa Siri (NDA)",
      "definition": "Non-disclosure agreement protecting proprietary trade secrets and technical know-how",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "Nukuu ya Bei na Hati ya Agizo (LPO)",
      "definition": "Commercial price quotation and official Local Purchase Order (LPO)",
      "category": "Commerce & Procurement",
      "level": "B2"
    },
    {
      "term": "Hati ya Idhini ya Kisheria (Power of Attorney)",
      "definition": "Notarized legal authorization instrument certified by an Advocate / Commissioner for Oaths",
      "category": "Legal & Notary",
      "level": "C1"
    },
    {
      "term": "Jumuiya ya Afrika Mashariki (EAC)",
      "definition": "Regional intergovernmental organization promoting common market, single customs, and free movement",
      "category": "Economics & Regional Policy",
      "level": "B2 / C1"
    },
    {
      "term": "Kiswahili Sanifu",
      "definition": "Standard Swahili based on the historical Kiunguja dialect of Zanzibar, serving as the lingua franca of East Africa and African Union official language",
      "category": "Linguistics & History",
      "level": "B1 / B2"
    },
    {
      "term": "Utu",
      "pronunciation": "[ˈu.tu]",
      "partOfSpeech": "Nomino (Noun - Class 14 U-)",
      "definition": "Humanity, humaneness, benevolence, compassion, and moral dignity; East African Swahili equivalent to the Bantu concept of Ubuntu (a person is a person through other persons).",
      "category": "Maadili na Falsafa (Ethics & Philosophy)",
      "level": "B2 / Juu",
      "examples": [
        {
          "target": "Mtu mwenye utu wa kweli hutunza heshima ya kila kiumbe bila kujali hadhi yake.",
          "translation": "A person with true utu preserves the dignity of every living being regardless of their status."
        },
        {
          "target": "Ukarimu na utu ndio nguzo kuu za jamii yetu ya kitamaduni.",
          "translation": "Generosity and humaneness are the central pillars of our traditional community."
        }
      ],
      "synonyms": [
        "Ubinadamu (humanity)",
        "Wema",
        "Ukarimu"
      ],
      "antonyms": [
        "Ukatili (cruelty / brutality)"
      ],
      "register": "Kifalsafa / Maadili (Philosophical / Ethical)"
    }
  ],
  "amharic": [
    {
      "term": "ሰላም / እንደምን ነዎት (Selam / Endemen newot)",
      "definition": "Hello / Peace / How are you? (Standard friendly greeting / Respectful formal greeting)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "እንደምን አደሩ / እንደምን ዋሉ",
      "definition": "Good morning (How did you spend the night?) / Good afternoon (How did you spend the day?)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "አመሰግናለሁ (Amesegenalehu)",
      "definition": "Thank you (Universal expression of gratitude)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "እባክዎ / እባክሽ / እባክህ",
      "definition": "Please (Formal respectful / Informal feminine / Informal masculine)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "ይቅርታ (Yiqirta)",
      "definition": "Excuse me / I am sorry / Pardon me",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "ሂሳብ እባክዎ (Hisab ebakwo)",
      "definition": "The bill / check, please in restaurants and cafes",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "ስንት ነው? (Sint new?)",
      "definition": "How much is it? (Shopping and market pricing inquiry)",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "መጸዳጃ ቤት የት ነው? (Metsedaja bet yet new?)",
      "definition": "Where is the restroom / toilet?",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "ስለተዋወቅን ደስ ብሎኛል",
      "definition": "Pleased to meet you (Standard polite introduction)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "ደህና ሁኑ / ቻው (Dehna hunu / Ciao)",
      "definition": "Goodbye / Stay well (Formal) / Ciao (Informal)",
      "category": "Parting",
      "level": "A1"
    },
    {
      "term": "የግዕዝ ፊደላት (Ge’ez Fidel Syllabary)",
      "definition": "Ethiopic abugida script consisting of 33 consonantal bases each with 7 vowel orders (G’ez, Ka’ib, Salis, Rabi, Hamis, Sadis, Sabi)",
      "category": "Orthography",
      "level": "A1"
    },
    {
      "term": "የአክብሮት ቋንቋ (Honorific: እርሶ / እርስዎ)",
      "definition": "Respectful third/second-person honorific forms used when addressing elders, priests, and distinguished guests",
      "category": "Sociolinguistics",
      "level": "A1 / A2"
    },
    {
      "term": "የጾታ ሥርዓት (Gender & Diminutives)",
      "definition": "Masculine vs Feminine gender system where feminine markers also convey affection or smallness",
      "category": "Grammar",
      "level": "A2"
    },
    {
      "term": "የቅጥያ ሥርዓት (Agglutinative Affixation)",
      "definition": "Complex verbal morphology stacking subject prefixes, object suffixes, and prepositions onto triconsonantal roots",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "የቡና ሥነ-ስርዓት (Coffee Ceremony)",
      "definition": "Sacred 3-round cultural ritual (Abol, Tona, Baraka) roasting raw beans, brewing in a Jebena, served with popcorn and frankincense",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "እንጀራ እና ወጥ (Injera & Wot)",
      "definition": "Sourdough fermented teff flatbread serving as base and utensil for savory stews (Doro Wot, Shiro, Misir, Tibs)",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "ጉርሻ (Gursha)",
      "definition": "Cultural gesture of intimacy and deep hospitality feeding a morsel of food directly into the mouth of a dining companion",
      "category": "Cultural Traditions",
      "level": "A1"
    },
    {
      "term": "እድር (Iddir)",
      "definition": "Traditional Ethiopian community funeral and social insurance association where neighborhood members pool financial and logistical resources to support bereaved families.",
      "category": "ባህልና ማህበራዊ ኑሮ (Culture & Social Mutual Aid)",
      "level": "B1 / መካከለኛ",
      "pronunciation": "እ-ድር [ʔɨd.dɨr]",
      "partOfSpeech": "ስም (Noun - Masculine)",
      "examples": [
        {
          "target": "የመንደራችን እድር በሀዘን ወቅት አባላቱን በገንዘብና በጉልበት ይደግፋል።",
          "translation": "Our village iddir supports its members financially and with physical labor during times of grief."
        },
        {
          "target": "እድር የኢትዮጵያዊያን ጥንታዊና ጠንካራ የማህበራዊ ትብብር ተቋም ነው።",
          "translation": "Iddir is an ancient and robust institution of social cooperation among Ethiopians."
        }
      ],
      "synonyms": [
        "ማህበር (association / mahber)",
        "እቁብ (rotating credit / iqub)"
      ],
      "register": "ባህላዊ / ማህበራዊ (Cultural / Communal)"
    },
    {
      "term": "ቴሌብር (Telebirr)",
      "definition": "Dominant national mobile money platform operated by Ethio Telecom enabling instant digital payments and transfers",
      "category": "FinTech & Daily Life",
      "level": "A1"
    },
    {
      "term": "አዲስ አበባ ቀላል ባቡር (Addis Light Rail)",
      "definition": "Sub-Saharan Africa’s first electrified urban light rail transit network",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "ታክሲ እና ባጃጅ (Taxi & Bajaj)",
      "definition": "Minibus shared taxis with conductor (Weyala) shouting destinations, and three-wheeled Bajajs in regional towns",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "የሐበሻ ቀሚስ (Habesha Kemis)",
      "definition": "Elegant handwoven white cotton chiffon dress adorned with intricate colorful embroidery (Tibeb) worn on Sundays and weddings",
      "category": "Cultural Heritage",
      "level": "A2"
    },
    {
      "term": "እንቁጣጣሽ እና መስቀል (Enkutatash & Meskel)",
      "definition": "Ethiopian New Year on Meskerem 1 (Sept 11) with yellow Adey Abeba flowers, and the Finding of the True Cross bonfire festival",
      "category": "Festivals & Culture",
      "level": "A1"
    },
    {
      "term": "ቀስ በቀስ ቈንቈ ዶሮ በእግሯ ትሄዳለች",
      "definition": "Proverb: Slowly by slowly, the egg begins to walk on its own legs (Patience accomplishes the impossible)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "ድር ቢያብር አንበሳ ያስር",
      "definition": "Proverb: When spider webs unite, they can tie up a lion (Unity is strength)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "ሰው በሰውነቱ ይከበራል",
      "definition": "Proverb: A person is respected simply for their humanity (Universal human dignity)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "ከሞኝ ደጅ ሞፈር ይቈረጣል",
      "definition": "Proverb: Wood for a plow is cut right from a foolish man’s doorstep (Do not let people take advantage of your negligence)",
      "category": "Proverb",
      "level": "B2"
    },
    {
      "term": "ሆድ ሲያውቅ ዶሮ ማታ",
      "definition": "Idiom: The stomach knows, but the chicken is eaten at night (Pretending ignorance while fully aware of reality)",
      "category": "Idiom",
      "level": "B2"
    },
    {
      "term": "የቤት ኪራይ ውል (Residential Lease)",
      "definition": "Tenancy agreement authenticated by the local Kebele administration detailing monthly rent and security deposit",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "የነዋሪነት መታወቂያ እና ፋይዳ (Kebele & Fayda ID)",
      "definition": "Local municipal identity card and the new unified national digital biometric identity ecosystem",
      "category": "Civic Administration",
      "level": "A2"
    },
    {
      "term": "የቅጥር ውል (Employment Contract)",
      "definition": "Statutory written employment agreement regulated under the Ethiopian Labour Proclamation No. 1156/2019",
      "category": "Labor Law & HR",
      "level": "B2"
    },
    {
      "term": "የሙከራ ጊዜ (Probationary Period)",
      "definition": "Statutory probationary period (maximum 60 working days) for testing new employees",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "ዓመታዊ የፈቃድ ቀናት (Paid Annual Leave)",
      "definition": "Statutory minimum 16 working days of paid annual leave for the first year, increasing with tenure",
      "category": "Labor Law & HR",
      "level": "B2"
    },
    {
      "term": "የስንብት ክፍያ እና ካሳ (Severance Pay)",
      "definition": "Statutory severance payment calculated based on salary and continuous years of service",
      "category": "Labor Law & Finance",
      "level": "C1"
    },
    {
      "term": "የማህበራዊ ዋስትና ፈንድ (Pension Fund)",
      "definition": "Private and public sector pension fund with 11% employer and 7% employee contributions",
      "category": "Social Security",
      "level": "B2"
    },
    {
      "term": "የግብር ከፋይ መለያ ቁጥር (TIN Number)",
      "definition": "Unique 10-digit number issued by the Ministry of Revenues for tax administration",
      "category": "Taxation & Finance",
      "level": "B1"
    },
    {
      "term": "የተጨማሪ እሴት ታክስ (VAT - 15%)",
      "definition": "Value Added Tax applied to commercial goods and services transactions",
      "category": "Taxation & Commerce",
      "level": "B2"
    },
    {
      "term": "የንግድ ምዝገባ እና ፈቃድ (Business License)",
      "definition": "Ministry of Trade and Regional Integration business licensing certificates",
      "category": "Business & Legal",
      "level": "B2"
    },
    {
      "term": "የስብሰባ አጀንዳ (Meeting Agenda)",
      "definition": "Formal meeting agenda distributed to attendees before executive discussions",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "የስብሰባ ቃለ-ጉባኤ (Meeting Minutes)",
      "definition": "Official signed protocol recording meeting decisions, resolutions, and action items",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "የምስጢራዊነት ስምምነት (NDA)",
      "definition": "Non-disclosure agreement protecting proprietary trade secrets and technical specifications",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "የዋጋ ማቅረቢያ (Proforma Invoice)",
      "definition": "Official commercial quotation submitted to prospective buyers",
      "category": "Commerce & Sales",
      "level": "B2"
    },
    {
      "term": "የውክልና ስልጣን (Power of Attorney)",
      "definition": "Notarized legal instrument executed before the Federal Documents Authentication and Registration Service (DARS)",
      "category": "Legal & Notary",
      "level": "C1"
    },
    {
      "term": "የኢትዮጵያ አየር መንገድ (Ethiopian Airlines)",
      "definition": "Africa’s largest and most technologically advanced aviation hub connecting Africa to the globe",
      "category": "Aviation & Economy",
      "level": "A2"
    },
    {
      "term": "ኢትዮጵያ ታምርት (Let Ethiopia Produce)",
      "definition": "National industrial and domestic manufacturing competitiveness initiative",
      "category": "Economics & Industry",
      "level": "B2 / C1"
    },
    {
      "term": "እቁብ (Iqub)",
      "pronunciation": "እ-ቁብ [ʔɨ.k’ub]",
      "partOfSpeech": "ስም (Noun - Masculine)",
      "definition": "Traditional Ethiopian rotating savings and credit association (ROSCA) where members contribute fixed sums periodically and take turns collecting the lump sum pool.",
      "category": "ኢኮኖሚና ማህበራዊ ኑሮ (Economy & Mutual Credit)",
      "level": "B1 / መካከለኛ",
      "examples": [
        {
          "target": "ነጋዴዎች ለስራ ማስፋፊያ የሚሆን ካፒታል ለማግኘት እቁብ ይጥላሉ።",
          "translation": "Traders contribute to an iqub to obtain capital for business expansion."
        },
        {
          "target": "የዚህ ወር የእቁብ እጣ ለእኔ ደረሰኝ።",
          "translation": "This month's iqub lottery payout arrived for me."
        }
      ],
      "synonyms": [
        "የገንዘብ ቁጠባ (savings)",
        "እድር"
      ],
      "register": "ማህበራዊ / የኢኮኖሚ (Economic / Everyday)"
    },
    {
      "term": "ጀበና ቡና (Jebena Buna)",
      "pronunciation": "ጀ-በ-ና ቡ-ና [d͡ʒɛ.bɛ.na bu.na]",
      "partOfSpeech": "የስም ሀረግ (Noun Phrase)",
      "definition": "Traditional Ethiopian coffee ceremony brewed in a clay pot (jebena) with frankincense incense and popcorn (abol, tona, bereka rounds); central social hospitality ritual.",
      "category": "የቡና ስነ-ስርዓት (Coffee Ceremony & Hospitality)",
      "level": "A2 / መሰረታዊ",
      "examples": [
        {
          "target": "የእሁድ ከሰአት የጀበና ቡና ጠረን ቤቱን በሙሉ በእጣንና በፍቅር ይሞላዋል።",
          "translation": "The scent of Sunday afternoon jebena buna fills the entire house with frankincense and love."
        },
        {
          "target": "እንግዳ ሲመጣ በጀበና ቡና ማስተናገድ የኢትዮጵያዊያን ዋነኛ መገለጫ ነው።",
          "translation": "Serving guests with jebena buna when they arrive is the primary hallmark of Ethiopians."
        }
      ],
      "synonyms": [
        "የቡና ስነ-ስርዓት (coffee ceremony)",
        "አቦል ቡና"
      ],
      "register": "ባህላዊ (Traditional / Cultural)"
    },
    {
      "term": "ጉብዝና (Gubzina)",
      "pronunciation": "ጉብ-ዝና [ɡʊb.zɨ.na]",
      "partOfSpeech": "ስም (Noun - Masculine)",
      "definition": "Courage, diligence, outstanding fortitude, heroic skill, and clever capability in work and moral character.",
      "category": "ስነ-ምግባርና ጀግንነት (Character & Fortitude)",
      "level": "B2 / ከፍተኛ",
      "examples": [
        {
          "target": "ተማሪው በትምህርቱ ላሳየው ታላቅ ጉብዝና የክብር ሽልማት ተሰጠው።",
          "translation": "The student was granted an honorary award for the great gubzina (diligence and excellence) shown in studies."
        },
        {
          "target": "ገበሬው በመስኩ ባሳየው ጉብዝና የተትረፈረፈ ምርት ሰበሰበ።",
          "translation": "Through the gubzina shown in the field, the farmer gathered an abundant harvest."
        }
      ],
      "synonyms": [
        "ጀግንነት (bravery / heroism)",
        "ትጋት (diligence)",
        "ብልሃት"
      ],
      "antonyms": [
        "ስንፍና (laziness)"
      ],
      "register": "መደበኛ (Standard / Formal)"
    }
  ],
  "romanian": [
    {
      "term": "Bună ziua / Bună dimineața / Bună seara",
      "definition": "Good day / Good morning / Good evening (Standard polite greetings in Romanian)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Salut / Bună",
      "definition": "Hi / Hello (Informal friendly greeting)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Mulțumesc / Mulțumesc frumos",
      "definition": "Thank you / Thank you very much (Expressing gratitude)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Cu plăcere / Pentru puțin",
      "definition": "You are welcome / Don’t mention it (Polite reply to thanks)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Vă rog / Te rog",
      "definition": "Please (Formal/plural vs informal polite request)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Scuzați-mă / Pardon / Îmi cer scuze",
      "definition": "Excuse me / I apologize (Politeness and apologies)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Nota de plată, vă rog",
      "definition": "The bill / check, please in restaurants and cafes",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "Cât costă?",
      "definition": "How much does it cost? (Shopping inquiry)",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "Unde este toaleta?",
      "definition": "Where is the restroom / toilet? (Navigation inquiry)",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "Încântat de cunoștință",
      "definition": "Pleased to meet you (Standard polite introduction)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "La revedere / Pa",
      "definition": "Goodbye / Bye (Formal vs informal parting)",
      "category": "Parting",
      "level": "A1"
    },
    {
      "term": "Tu vs Dumneavoastră",
      "definition": "Informal address (tu) vs formal respectful pronoun (Dumneavoastră)",
      "category": "Sociolinguistics",
      "level": "A1 / A2"
    },
    {
      "term": "Articolul hotărât enclitic",
      "definition": "Enclitic definite articles attached directly to word endings (om-ul, băiat-ul, carte-a, fat-a, mere-le)",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Cele 5 cazuri (The 5 Cases)",
      "definition": "Nominativ, Acuzativ, Genitiv, Dativ, Vocativ (Băiete! Domnule!)",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Subjonctivul cu «să»",
      "definition": "Subjunctive mood replacing infinitive after modal verbs (vreau să merg, trebuie să faci)",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "Dor",
      "definition": "Profound, bittersweet yearning, nostalgic ache, longing, or love for a person, homeland, or past state of happiness (quintessential Romanian untranslatable concept derived from Latin \"dolus\").",
      "category": "Cultură și Sentimente (Culture & Emotions)",
      "level": "A2 / Elementar",
      "pronunciation": "[dor]",
      "partOfSpeech": "Substantiv neutru (Noun - Neuter)",
      "examples": [
        {
          "target": "Mi-e un dor nespus de casa părintească și de munții Carpați.",
          "translation": "I have an unspeakable longing (dor) for my parents' home and the Carpathian Mountains."
        },
        {
          "target": "Muzica populară românească și doina exprimă cel mai profund sentimentul de dor.",
          "translation": "Romanian folk music and the doina express most deeply the feeling of dor (longing)."
        }
      ],
      "synonyms": [
        "Tânjire (yearning)",
        "Nostalgie",
        "Jale"
      ],
      "register": "General / Poetic"
    },
    {
      "term": "Omenie",
      "definition": "Humaneness, moral decency, hospitality, compassion, integrity, and altruistic benevolence; the foundational traditional Romanian ethical virtue.",
      "category": "Etică și Filosofie Tradițională (Ethics & Philosophy)",
      "level": "B2 / Avansat",
      "pronunciation": "[o.meˈni.e]",
      "partOfSpeech": "Substantiv feminin (Noun - Feminine)",
      "examples": [
        {
          "target": "A da dovadă de omenie înseamnă a ajuta necondiționat pe cel aflat la nevoie.",
          "translation": "To give proof of omenie (humaneness) means to unconditionally help those in need."
        },
        {
          "target": "Omenia și bunul-simț sunt valorile de căpătâi ale satului românesc tradițional.",
          "translation": "Human decency (omenie) and common sense are the foremost values of the traditional Romanian village."
        }
      ],
      "synonyms": [
        "Umanitate (humanity)",
        "Bunătate (kindness)",
        "Generozitate",
        "Cumsecădenie"
      ],
      "antonyms": [
        "Neomenie (cruelty / inhumanity)"
      ],
      "register": "Tradițional / Etic (Traditional / Ethical)"
    },
    {
      "term": "Miorița & Spațiul mioritic",
      "definition": "Foundational Romanian pastoral myth of stoic resilience, tranquility, and harmony with nature",
      "category": "Cultural Philosophy",
      "level": "B2"
    },
    {
      "term": "Sărbătoarea Mărțișorului (March 1)",
      "definition": "Spring celebration gifting red-and-white braided silk amulets symbolizing vitality and purity",
      "category": "Cultural Traditions",
      "level": "A1"
    },
    {
      "term": "Sarmale și Mămăligă",
      "definition": "National culinary heritage: minced meat and rice rolled in sour fermented cabbage leaves served with polenta and smântână",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Ciorbă rădăuțeană & Ciorbă de burtă",
      "definition": "Traditional sour soups soured with fermented wheat bran (borș) and seasoned with garlic and vinegar",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Metrorex & STB (Bucharest Transit)",
      "definition": "Bucharest subway network (Metrorex M1-M5) and municipal bus/tram transit network (STB)",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "CFR Călători (Romanian Railways)",
      "definition": "National passenger railway company operating InterRegio (IR) and Regio (R) train services",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "Card contactless & Plată digitală",
      "definition": "Contactless bank cards and municipal smart cards used directly at turnstiles and validators",
      "category": "Daily Life & Transit",
      "level": "A1"
    },
    {
      "term": "A călca pe bec",
      "definition": "Idiom: to step on the lightbulb / to mess up or get caught red-handed",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "A vinde castraveți grădinarului",
      "definition": "Idiom: to sell cucumbers to the gardener / to carry coals to Newcastle",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "A bate câmpii",
      "definition": "Idiom: to beat the fields / to talk nonsense or ramble off-topic",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Pică pară mălăiață în gura lui Nătăfleață",
      "definition": "Proverb: Waiting for roasted pears to fall into a fool’s mouth (Lazy wishful thinking)",
      "category": "Proverb",
      "level": "B2"
    },
    {
      "term": "Unde-s mulți, puterea crește",
      "definition": "Proverb: Where there are many, strength increases (Unity is strength)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Contract de închiriere și Garanție",
      "definition": "Formally registered tenancy contract with ANAF and rental security deposit",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "Permis de ședere (Residence Permit)",
      "definition": "Temporary or permanent residence permit issued by General Inspectorate for Immigration (IGI)",
      "category": "Civic Administration",
      "level": "B2"
    },
    {
      "term": "CNP (Cod Numeric Personal)",
      "definition": "13-digit unique personal identification number assigned for life in civic and fiscal registries",
      "category": "Civic Administration",
      "level": "B1"
    },
    {
      "term": "Cardul Național de Sănătate (CNAS)",
      "definition": "National health insurance smart card providing primary healthcare coverage",
      "category": "Healthcare & Public Admin",
      "level": "B1"
    },
    {
      "term": "Contract individual de muncă (CIM)",
      "definition": "Individual employment contract governed by the Romanian Labour Code (Codul Muncii)",
      "category": "Labor Law & Business",
      "level": "B2"
    },
    {
      "term": "Perioadă de probă (Probation Period)",
      "definition": "Statutory probationary period (up to 90 calendar days for non-executive roles, 120 for management)",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "Concediu de odihnă plătit (Annual Leave)",
      "definition": "Statutory minimum 20 working days of paid vacation per year",
      "category": "Labor Law & HR",
      "level": "B2"
    },
    {
      "term": "Revisal (Registrul Salariaților)",
      "definition": "National electronic registry where employers must report all employment contracts",
      "category": "Labor & Compliance",
      "level": "B2"
    },
    {
      "term": "Salariul brut vs Salariul net",
      "definition": "Gross salary breakdown showing 25% CAS (pension), 10% CASS (health), 10% DP (tax), and net pay",
      "category": "Payroll & Finance",
      "level": "B2"
    },
    {
      "term": "PFA (Persoană Fizică Autorizată)",
      "definition": "Authorized sole proprietorship legal structure for freelancers and independent professionals",
      "category": "Business & Tax",
      "level": "B2"
    },
    {
      "term": "ANAF & Spațiul Privat Virtual (SPV)",
      "definition": "National Agency for Fiscal Administration and its secure digital tax portal",
      "category": "Taxation & Finance",
      "level": "B2"
    },
    {
      "term": "Ordinea de zi (Meeting Agenda)",
      "definition": "Formal meeting agenda distributed before executive and commercial deliberations",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Proces-verbal de ședință (Minutes)",
      "definition": "Official signed protocol recording meeting discussions, resolutions, and action items",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Acord de confidențialitate (NDA)",
      "definition": "Non-disclosure agreement safeguarding proprietary technological and commercial trade secrets",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "Factură fiscală și e-Factura (RO e-Factura)",
      "definition": "Mandatory electronic invoicing system integrated with ANAF fiscal servers",
      "category": "Business & Tax",
      "level": "C1"
    },
    {
      "term": "Procură notarială (Power of Attorney)",
      "definition": "Notarized legal instrument empowering designated agents to perform legal and financial transactions",
      "category": "Legal & Notary",
      "level": "C1"
    },
    {
      "term": "Doină",
      "pronunciation": "[ˈdoj.nə]",
      "partOfSpeech": "Substantiv feminin (Noun - Feminine)",
      "definition": "Traditional Romanian lyrical, improvisational, melismatic folk song expressing sorrow, longing (dor), love, or pastoral connection with nature (UNESCO Intangible Cultural Heritage).",
      "category": "Folclor și Muzică (Folklore & Music)",
      "level": "B1 / Intermediar",
      "examples": [
        {
          "target": "Ciobănașul cânta o doină de jale din fluier pe culmile înverzite ale munților.",
          "translation": "The young shepherd played a sorrowful doina on his flute upon the green mountain peaks."
        },
        {
          "target": "Doina românească a fost inclusă pe lista Patrimoniului Cultural Imaterial UNESCO.",
          "translation": "The Romanian doina was inscribed on the UNESCO Intangible Cultural Heritage list."
        }
      ],
      "synonyms": [
        "Cântec liric popular",
        "Cântec de dor"
      ],
      "register": "Folclor / Cultural"
    },
    {
      "term": "Tihnă",
      "pronunciation": "[ˈtih.nə]",
      "partOfSpeech": "Substantiv feminin (Noun - Feminine)",
      "definition": "Quiet, unhurried peace of mind, restorative tranquility, serene rest and contentment.",
      "category": "Stare de Spirit (State of Mind & Well-being)",
      "level": "B1 / Intermediar",
      "examples": [
        {
          "target": "Bucurați-vă de o seară liniștită și de tihna căminului alături de cei dragi.",
          "translation": "Enjoy a peaceful evening and the restorative tranquility (tihnă) of home alongside your loved ones."
        },
        {
          "target": "După ani de muncă asiduă, bătrânul își trăiește pensia în deplină tihnă.",
          "translation": "After years of arduous labor, the old man lives his retirement in complete tranquility."
        }
      ],
      "synonyms": [
        "Liniște (peace)",
        "Pace sufletească",
        "Răgaz"
      ],
      "antonyms": [
        "Agitație (turmoil / rush)",
        "Zbucium"
      ],
      "register": "Literar / Tradițional (Literary / Traditional)"
    }
  ],
  "argentine-spanish": [
    {
      "term": "Hola / ¡Buenas!",
      "definition": "Casual universal greeting in the Rioplatense region",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Buen día / Buenas tardes / Buenas noches",
      "definition": "Good day / Good afternoon / Good evening or night",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Por favor / Muchas gracias / De nada",
      "definition": "Please / Thank you very much / You’re welcome",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Permiso / Disculpame / Perdón",
      "definition": "Excuse me / Pardon me / I am sorry",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "La cuenta, por favor",
      "definition": "The bill / check, please in cafes and bodegones",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "¿Cuánto cuesta? / ¿Cuánto sale?",
      "definition": "How much is it? (Pricing inquiry)",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "¿Dónde está el baño?",
      "definition": "Where is the restroom / toilet?",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "Un gusto / Encantado",
      "definition": "Pleasure to meet you (Standard polite introduction)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Chau / ¡Nos vemos!",
      "definition": "Informal parting expression (Goodbye / See you!)",
      "category": "Parting",
      "level": "A1"
    },
    {
      "term": "Voseo (Vos tenés, vos podés, vos sos)",
      "definition": "Rioplatense pronominal and verbal paradigm replacing \"tú\" entirely",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Yeísmo rehilado (Pronunciación /ʃ/ o /ʒ/)",
      "definition": "Distinctive Argentine phonetic feature pronouncing \"ll\" and \"y\" with \"sh\" sound",
      "category": "Phonetics",
      "level": "A1"
    },
    {
      "term": "Che (Iconic Discourse Marker)",
      "definition": "Ubiquitous conversational vocative: Hey! / Pal! / Listen! used to address friends",
      "category": "Discourse Marker",
      "level": "A1"
    },
    {
      "term": "Lunfardo (Buenos Aires Slang)",
      "definition": "Rich historical Buenos Aires argot born from tango, immigration, and street life (laburo, pibe, guita, mina)",
      "category": "Lexicon & Culture",
      "level": "B1"
    },
    {
      "term": "Mate",
      "definition": "Traditional South American caffeine-rich herbal infusion brewed in a hollowed gourd from Ilex paraguariensis leaves, sipped through a metal bombilla straw; the supreme ritual of Argentine hospitality and fraternity.",
      "category": "Cultura Rioplatense y Costumbres (Rioplatense Culture)",
      "level": "A1 / Básico",
      "pronunciation": "[ˈma.te]",
      "partOfSpeech": "Sustantivo masculino (Noun)",
      "examples": [
        {
          "target": "Compartir una ronda de mates con amigos es el símbolo máximo de la amistad y la confianza en Argentina.",
          "translation": "Sharing a round of mate with friends is the ultimate symbol of friendship and trust in Argentina."
        },
        {
          "target": "El cebador es el encargado de preparar y servir el mate a todos los presentes en la ronda.",
          "translation": "The cebador is responsible for preparing and serving the mate to everyone present in the circle."
        }
      ],
      "synonyms": [
        "Cimarrón (amargo)",
        "Verde"
      ],
      "register": "General / Rioplatense"
    },
    {
      "term": "Asado & Parrilla (Argentine Barbecue)",
      "definition": "Social weekend feast of wood-fired beef cuts (asado de tira, vacío, entraña, bife de chorizo) and provoleta",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Empanadas criollas y Chimichurri",
      "definition": "Traditional hand-braided pastries (repulgue) filled with meat paired with herbal garlic chimichurri sauce",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Dulce de leche y Alfajores",
      "definition": "Caramelized milk confection sandwiched between delicate crumbly biscuits coated in chocolate or coconut",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Bodegón & Café Notable",
      "definition": "Historic neighborhood eateries serving hearty portions, and protected cultural cafes of Buenos Aires",
      "category": "Culinary & Culture",
      "level": "A2"
    },
    {
      "term": "SUBE (Sistema de Boleto Electrónico)",
      "definition": "Contactless smart transit card used across Subte, colectivos, and commuter trains",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "Subte de Buenos Aires",
      "definition": "South America’s oldest underground transit network operating Lines A through H",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "Colectivo (City Bus)",
      "definition": "Iconic 24/7 city buses navigating Greater Buenos Aires using numbered routes and section-based fares",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "Milonga y Tango",
      "definition": "Traditional social dance halls where dancers follow strict cabeceo eye-contact codes to invite partners",
      "category": "Cultural Heritage",
      "level": "A2"
    },
    {
      "term": "Buena onda / Mala onda",
      "definition": "Good vibes / Positive energy vs bad vibes / negativity",
      "category": "Idiomatic Expressions",
      "level": "A1"
    },
    {
      "term": "Tener bronca / Estar indignado",
      "definition": "To feel intense anger, resentment, or righteous annoyance",
      "category": "Emotions & Slang",
      "level": "A2"
    },
    {
      "term": "Estar en el horno",
      "definition": "Idiom: To be in the oven / to be in deep trouble or hot water",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Bajar un cambio",
      "definition": "Idiom: To downshift / to calm down and take it easy",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Remarla en dulce de leche",
      "definition": "Idiom: To paddle in dulce de leche / to struggle uphill against immense resistance",
      "category": "Idiom",
      "level": "B2"
    },
    {
      "term": "DNI (Documento Nacional de Identidad)",
      "definition": "National identity card mandatory for all citizens and legal foreign residents",
      "category": "Civic Administration",
      "level": "A1"
    },
    {
      "term": "CUIL y CUIT (Labor & Tax ID)",
      "definition": "Unique Labor Identification Code (CUIL) and Tax Identification Code (CUIT) for payroll and tax registration",
      "category": "Labor & Tax",
      "level": "B1"
    },
    {
      "term": "Monotributo (AFIP Simplified Tax)",
      "definition": "Simplified tax scheme for independent professionals, freelancers, and small merchants",
      "category": "Taxation & Finance",
      "level": "B2"
    },
    {
      "term": "Contrato de alquiler y Garantía",
      "definition": "Residential rental lease requiring property warranty (garantía propietaria) or surety bond (seguro de caución)",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "Ley de Contrato de Trabajo (LCT No. 20.744)",
      "definition": "Argentina’s comprehensive labor code governing employee protections, leaves, and dismissals",
      "category": "Labor Law & Business",
      "level": "B2"
    },
    {
      "term": "Período de prueba (Probation Period)",
      "definition": "Statutory probationary period (3 to 6 months) under Argentine labor legislation",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "SAC / Aguinaldo (Sueldo Anual Complementario)",
      "definition": "Mandatory 13th-month salary paid in two semi-annual installments (June and December)",
      "category": "Labor Law & Finance",
      "level": "B2"
    },
    {
      "term": "Indemnización por despido (Severance)",
      "definition": "Statutory severance pay equal to 1 month of salary per year of service for dismissal without cause",
      "category": "Labor Law & Finance",
      "level": "C1"
    },
    {
      "term": "Obra Social & Medicina Prepaga",
      "definition": "Union-managed statutory health funds (Obra Social) vs private health insurance plans (Prepaga)",
      "category": "Healthcare & Public Admin",
      "level": "B1"
    },
    {
      "term": "Recibo de sueldo (Payslip)",
      "definition": "Monthly payslip showing gross salary, retirement deductions (Jubilación 11%), INSSJP, and net pay",
      "category": "Payroll & HR",
      "level": "B2"
    },
    {
      "term": "Convenio Colectivo de Trabajo (CCT)",
      "definition": "Sectoral collective bargaining agreement establishing industry wage scales and working conditions",
      "category": "Labor Law & Governance",
      "level": "C1"
    },
    {
      "term": "Orden del día (Meeting Agenda)",
      "definition": "Formal meeting agenda distributed to participants before executive discussions",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Acta de reunión y Directorio",
      "definition": "Official signed corporate minutes documenting executive resolutions and board decisions",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Acuerdo de confidencialidad (NDA)",
      "definition": "Non-disclosure agreement safeguarding proprietary trade secrets and software IP",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "Factura electrónica A, B, C (AFIP)",
      "definition": "Mandatory electronic tax invoices categorized by VAT regime (Responsable Inscripto vs Monotributista)",
      "category": "Taxation & Finance",
      "level": "B2"
    },
    {
      "term": "Poder notarial por escribano público",
      "definition": "Notarized legal power of attorney authenticated by a licensed public notary (escribano)",
      "category": "Legal & Notary",
      "level": "C1"
    },
    {
      "term": "Dólar blue y Mercados de cambio",
      "definition": "Colloquial informal cash exchange rate reflecting parallel foreign currency markets",
      "category": "Economics & Daily Life",
      "level": "B1"
    },
    {
      "term": "Ecosistema Tech y Unicornios",
      "definition": "Vibrant Argentine software engineering and tech startup ecosystem producing global tech leaders",
      "category": "Tech & Economy",
      "level": "B2 / C1"
    },
    {
      "term": "Chamuyo",
      "pronunciation": "[tʃaˈmu.ʒo]",
      "partOfSpeech": "Sustantivo masculino / Lunfardo (Noun)",
      "definition": "Smooth, sweet-talking flattery, persuasive silver-tongued conversation or sweet banter used to charm, flirt, or convince someone effortlessly.",
      "category": "Lunfardo y Calle (Lunfardo & Street Slang)",
      "level": "B1 / Intermedio",
      "examples": [
        {
          "target": "Tiene un chamuyo tan convincente que logró cerrar el acuerdo comercial en minutos.",
          "translation": "He has such convincing smooth talk (chamuyo) that he managed to close the business deal in minutes."
        },
        {
          "target": "En el tango, el chamuyo al oído de la pareja crea una complicidad única en la pista de baile.",
          "translation": "In tango, whispering sweet words (chamuyo) into the partner's ear creates unique complicity on the dance floor."
        }
      ],
      "synonyms": [
        "Labia",
        "Parla",
        "Flirteo"
      ],
      "register": "Lunfardo / Coloquial"
    },
    {
      "term": "Laburo",
      "pronunciation": "[laˈβu.ɾo]",
      "partOfSpeech": "Sustantivo masculino / Lunfardo (Noun)",
      "definition": "Work, job, hard labor, daily professional toil (derived from Italian \"lavoro\").",
      "category": "Lunfardo y Trabajo (Lunfardo & Work)",
      "level": "A2 / Básico",
      "examples": [
        {
          "target": "Después de un largo día de laburo en la fábrica, solo quiero llegar a casa y descansar.",
          "translation": "After a long day of hard work (laburo) at the factory, I only want to get home and rest."
        },
        {
          "target": "Conseguir un buen laburo requiere constancia, dedicación y preparación continua.",
          "translation": "Landing a good job (laburo) requires perseverance, dedication, and continuous preparation."
        }
      ],
      "synonyms": [
        "Trabajo (work)",
        "Empleo",
        "Chamba"
      ],
      "register": "Lunfardo / Coloquial"
    },
    {
      "term": "Pique",
      "pronunciation": "[ˈpi.ke]",
      "partOfSpeech": "Sustantivo masculino (Noun)",
      "definition": "1. In Argentine football: sudden explosive burst of sprint acceleration. 2. A quick tip or insightful recommendation (tirar un pique).",
      "category": "Fútbol y Vida Cotidiana (Sports & Everyday Slang)",
      "level": "B1 / Intermedio",
      "examples": [
        {
          "target": "El delantero metió un pique formidable para superar al defensor y anotar el gol decisivo.",
          "translation": "The forward unleashed a formidable sprint burst (pique) to outpace the defender and score the decisive goal."
        },
        {
          "target": "Pasame el pique de dónde conseguir las mejores empanadas caseras de Buenos Aires.",
          "translation": "Give me the tip (pique) on where to get the best homemade empanadas in Buenos Aires."
        }
      ],
      "synonyms": [
        "Aceleración",
        "Pique corto",
        "Dato útil"
      ],
      "register": "Coloquial / Deportivo"
    }
  ],
  "brazilian-portuguese": [
    {
      "term": "Olá / Oi / Tudo bem?",
      "definition": "Hello / Hi / How are you? (Standard friendly Brazilian greeting)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Bom dia / Boa tarde / Boa noite",
      "definition": "Good morning / Good afternoon / Good evening or night",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Por favor / Muito obrigado(a) / De nada",
      "definition": "Please / Thank you very much (masc/fem) / You’re welcome",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Com licença / Desculpe / Perdão",
      "definition": "Excuse me / Sorry / Pardon me",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "A conta, por favor",
      "definition": "The bill / check, please at restaurants, botecos, and padarias",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "Quanto custa? / Quanto é?",
      "definition": "How much is it? (Shopping inquiry)",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "Onde fica o banheiro?",
      "definition": "Where is the restroom / toilet?",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "Muito prazer",
      "definition": "Pleased to meet you (Standard polite introduction)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Tchau / Até logo / Valeu!",
      "definition": "Goodbye / See you / Thanks! (Popular casual parting expressions)",
      "category": "Parting",
      "level": "A1"
    },
    {
      "term": "Tu vs Você (Uso de Você)",
      "definition": "Universal use of \"você\" with 3rd-person verb conjugations across Brazil",
      "category": "Grammar",
      "level": "A1"
    },
    {
      "term": "Próclise vs Ênclise (Colocação Pronominal)",
      "definition": "Brazilian preference for proclisis placing object pronouns before the verb (me dá, te amo, se cuida)",
      "category": "Grammar",
      "level": "A2 / B1"
    },
    {
      "term": "O Diminutivo afetivo (-inho / -inha)",
      "definition": "Affectionate diminutive suffixes conveying warmth, cuteness, or downplaying size (cafezinho, rapidinho, jeitinho)",
      "category": "Morphology & Pragmatics",
      "level": "A1 / A2"
    },
    {
      "term": "Verbo «Ficar»",
      "definition": "Multi-functional verb expressing location, permanent state, temporary feeling, dating casually, or becoming",
      "category": "Verbal Lexicon",
      "level": "A2"
    },
    {
      "term": "Saudade",
      "definition": "Profound, bittersweet longing, nostalgic yearning, or loving remembrance of a person, place, feeling, or moment that is absent or lost forever (foundational Luso-Brazilian poetic emotion).",
      "category": "Cultura e Emoções (Culture & Emotions)",
      "level": "B1 / Intermediário",
      "pronunciation": "[sawˈda.dʒi]",
      "partOfSpeech": "Substantivo feminino (Noun)",
      "examples": [
        {
          "target": "Morar no exterior me fez sentir uma saudade imensa da família e das praias do Brasil.",
          "translation": "Living abroad made me feel an immense saudade (aching yearning) for my family and the beaches of Brazil."
        },
        {
          "target": "A bossa nova transforma a dor da saudade em poesia e melodia suave.",
          "translation": "Bossa nova transforms the pain of saudade into poetry and gentle melody."
        }
      ],
      "synonyms": [
        "Nostalgia",
        "Anelo",
        "Lembrança afetuosa"
      ],
      "register": "Geral / Poético (General / Poetic)",
      "notes": "Considered one of the most famous untranslatable words in the Portuguese language."
    },
    {
      "term": "Jeitinho Brasileiro (The Brazilian Way)",
      "definition": "Cultural art of resourceful problem-solving, flexible negotiation, and finding creative workarounds",
      "category": "Cultural Philosophy",
      "level": "B1"
    },
    {
      "term": "Ginga (Graceful Flow & Rhythm)",
      "definition": "Fluid bodily agility, relaxed sway, and improvisational rhythm in football, capoeira, and samba",
      "category": "Cultural Values",
      "level": "A2"
    },
    {
      "term": "Boteco e Cultura de Petiscos",
      "definition": "Casual neighborhood bars serving cold chopp (draft beer), pão de queijo, coxinha, and pastel",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Churrasco e Rodízio",
      "definition": "Traditional Southern barbecue feast served all-you-can-eat style by passadores slicing picanha table-side",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Feijoada Completa",
      "definition": "Iconic national black bean stew slow-cooked with pork cuts, served with white rice, farofa, couve, and orange slices",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Caipirinha",
      "definition": "National cocktail muddled with fresh limes, sugar, ice, and artisanal cachaça sugar cane rum",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Açaí na tigela",
      "definition": "Frozen mashed Amazonian açaí berries served in a bowl topped with granola, banana, and guaraná syrup",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "Pix (Banco Central do Brasil)",
      "definition": "World-renowned instant digital payment system enabling free, 24/7 QR-code bank transfers nationwide",
      "category": "FinTech & Daily Life",
      "level": "A1"
    },
    {
      "term": "Bilhete Único (Transit Card)",
      "definition": "Contactless smart card for integrated subway, train, and bus transit in São Paulo and Rio de Janeiro",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "Havaianas e Moda Praia",
      "definition": "Quintessential rubber flip-flops and relaxed beach culture defining coastal Brazilian lifestyle",
      "category": "Daily Life & Culture",
      "level": "A1"
    },
    {
      "term": "Carnaval e Escolas de Samba",
      "definition": "World-famous pre-Lent cultural festival featuring Sambadrome parades, trios elétricos, and street blocos",
      "category": "Festivals & Culture",
      "level": "A1"
    },
    {
      "term": "Dar uma mãozinha",
      "definition": "Idiom: To lend a helping hand",
      "category": "Idiom",
      "level": "A2"
    },
    {
      "term": "Pagar o pato",
      "definition": "Idiom: To pay for the duck / to take the blame or penalty for something you didn’t cause",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Pisar na bola",
      "definition": "Idiom: To step on the ball / to mess up or let someone down",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Água mole em pedra dura...",
      "definition": "Proverb: Water dropping on hard stone beats until it pierces (Persistence wins)",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "CPF (Cadastro de Pessoas Físicas)",
      "definition": "Fundamental 11-digit individual taxpayer registration number required for every legal/financial act in Brazil",
      "category": "Civic Administration",
      "level": "A1"
    },
    {
      "term": "RG / Carteira de Identidade (CIN)",
      "definition": "National civil identity card issued by state public security departments",
      "category": "Civic Administration",
      "level": "A1"
    },
    {
      "term": "Contrato de locação e Fiador",
      "definition": "Residential rental lease requiring a guarantor (fiador), security deposit (caução), or insurance",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "SUS (Sistema Único de Saúde)",
      "definition": "Universal free public healthcare system guaranteed by the Brazilian Federal Constitution",
      "category": "Healthcare & Public Admin",
      "level": "B1"
    },
    {
      "term": "CLT (Consolidação das Leis do Trabalho)",
      "definition": "Brazil’s unified labor code governing statutory employment rights and benefits",
      "category": "Labor Law & Business",
      "level": "B2"
    },
    {
      "term": "Carteira de Trabalho Digital (CTPS)",
      "definition": "Official digital employment record tracking job contracts, wage changes, and occupational history",
      "category": "Labor Law & HR",
      "level": "B2"
    },
    {
      "term": "Período de experiência (Probation)",
      "definition": "Statutory probationary period (capped at 90 days) under CLT regulations",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "13º Salário (Décimo Terceiro)",
      "definition": "Mandatory 13th-month annual salary bonus paid in two installments (November and December)",
      "category": "Labor Law & Finance",
      "level": "B2"
    },
    {
      "term": "FGTS (Fundo de Garantia)",
      "definition": "Severance indemnity fund where employers deposit 8% of monthly salary into an employee trust account",
      "category": "Labor Law & Finance",
      "level": "B2"
    },
    {
      "term": "Aviso prévio proporcional (Notice)",
      "definition": "Statutory termination notice period increasing with tenure (up to 90 days)",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "MEI (Microempreendedor Individual)",
      "definition": "Simplified single-tax legal entity status for sole proprietors and independent freelancers",
      "category": "Business & Tax",
      "level": "B2"
    },
    {
      "term": "Pauta da reunião (Meeting Agenda)",
      "definition": "Formal meeting agenda distributed before corporate executive deliberations",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Ata de reunião (Meeting Minutes)",
      "definition": "Official signed written record capturing meeting proceedings, votes, and resolutions",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Termo de Confidencialidade (NDA)",
      "definition": "Non-disclosure agreement protecting proprietary technical specifications and commercial secrets",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "Nota Fiscal Eletrônica (NF-e)",
      "definition": "Mandatory digital tax invoice transmitted directly to the State Treasury (SEFAZ)",
      "category": "Business & Finance",
      "level": "B2"
    },
    {
      "term": "Procuração pública em cartório",
      "definition": "Notarized public power of attorney authenticated by a licensed civil registry notary (cartório)",
      "category": "Legal & Notary",
      "level": "C1"
    },
    {
      "term": "Gambiarra",
      "pronunciation": "[ɡɐ̃biˈaʁɐ]",
      "partOfSpeech": "Substantivo feminino (Noun)",
      "definition": "Improvised fix, clever makeshift workaround, or quick creative solution using whatever materials are on hand (quintessential Brazilian creative ingenuity).",
      "category": "Cultura e Vida Prática (Culture & Practical Life)",
      "level": "B1 / Intermediário",
      "examples": [
        {
          "target": "Quando o chuveiro quebrou no domingo, meu tio fez uma gambiarra genial com arame.",
          "translation": "When the shower broke on Sunday, my uncle made an ingenious gambiarra (makeshift fix) with wire."
        },
        {
          "target": "A gambiarra é uma demonstração da resiliência e inventividade do povo brasileiro.",
          "translation": "Gambiarra is a demonstration of the resilience and inventiveness of the Brazilian people."
        }
      ],
      "synonyms": [
        "Jeitinho",
        "Improviso",
        "Gambiara"
      ],
      "register": "Coloquial / Cultural (Colloquial / Cultural)"
    },
    {
      "term": "Cafuné",
      "pronunciation": "[ka.fuˈnɛ]",
      "partOfSpeech": "Substantivo masculino (Noun)",
      "definition": "The tender, affectionate act of running one's fingers gently through the hair of someone you love (derived from Kimbundu Bantu heritage).",
      "category": "Afeto e Relações (Affection & Relationships)",
      "level": "A2 / Básico",
      "examples": [
        {
          "target": "A mãe fez um cafuné carinhoso no filho até ele adormecer profundamente.",
          "translation": "The mother gave a tender cafuné (stroking of the hair) to her son until he fell fast asleep."
        },
        {
          "target": "Nada é mais relaxante depois de um dia cansativo do que receber um cafuné.",
          "translation": "Nothing is more relaxing after a tiring day than receiving a cafuné."
        }
      ],
      "synonyms": [
        "Carinho nos cabelos",
        "Afago"
      ],
      "register": "Afetuoso / Geral (Affectionate / General)"
    },
    {
      "term": "Acolhimento",
      "pronunciation": "[a.ko.ʎiˈmẽ.tu]",
      "partOfSpeech": "Substantivo masculino (Noun)",
      "definition": "Warm, hospitable welcoming, emotional shelter, embrace, and empathic reception of guests, strangers, or vulnerable individuals.",
      "category": "Ética e Hospitalidade (Ethics & Hospitality)",
      "level": "B2 / Avançado",
      "examples": [
        {
          "target": "O acolhimento caloroso do povo brasileiro faz qualquer visitante se sentir em casa.",
          "translation": "The warm acolhimento (welcoming hospitality) of the Brazilian people makes any visitor feel at home."
        },
        {
          "target": "A instituição oferece acolhimento integral e apoio psicológico aos refugiados.",
          "translation": "The institution offers comprehensive welcoming support and psychological aid to refugees."
        }
      ],
      "synonyms": [
        "Hospitalidade (hospitality)",
        "Recepção calorosa",
        "Amparo"
      ],
      "antonyms": [
        "Rejeição (rejection)",
        "Exclusão"
      ],
      "register": "Formal / Geral (Formal / General)"
    }
  ],
  "english": [
    {
      "term": "Hello / Good morning / Good afternoon / Good evening",
      "definition": "Universal standard English greetings across all international registers",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Please / Thank you / You are welcome",
      "definition": "Core linguistic politeness triplet in daily English communication",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Excuse me / Pardon me / I am sorry",
      "definition": "Navigational politeness, interruptions, and apologies",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "Could you please...? / Would you mind...?",
      "definition": "Polite modal indirect request frameworks softening directives into respectful inquiries",
      "category": "Polite Request",
      "level": "A2"
    },
    {
      "term": "How do you do? / Pleased to meet you",
      "definition": "Formal introduction etiquette in British and international business English",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "Subject-Verb Agreement & Conjugation",
      "definition": "Syntactic rule requiring third-person singular present tense \"-s\" marker (he runs, she sees)",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "Countable vs Uncountable Nouns",
      "definition": "Discrete countable entities taking \"few/many\" vs mass uncountables taking \"little/much\" (water, advice, furniture)",
      "category": "Grammar",
      "level": "A2"
    },
    {
      "term": "Phrasal Verbs (Separable vs Inseparable)",
      "definition": "Idiomatic multi-word verb combinations with particles altering semantic meaning (give up, turn down, look into)",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "Conditionals (Zero, First, Second, Third, Mixed)",
      "definition": "Conditional syntax expressing general truths, real futures, unreal presents, and counterfactual pasts",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "Active vs Passive Voice",
      "definition": "[Subject + Verb + Object] vs [Patient + Auxiliary \"Be\" + Past Participle + by Agent] focusing on results",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "Relative Clauses (Defining vs Non-defining)",
      "definition": "Essential restrictive information without commas vs parenthetical non-restrictive information separated by commas",
      "category": "Grammar",
      "level": "B1 / B2"
    },
    {
      "term": "False Cognates & Deceptive Cognates",
      "definition": "Tricky loanwords (e.g. \"eventually\" = in the end, not \"possibly\"; \"sensible\" = wise, not \"sensitive\")",
      "category": "Vocabulary",
      "level": "B1 / B2"
    },
    {
      "term": "Bite the bullet",
      "definition": "Idiom: To face a grim situation with stoic courage and endurance",
      "category": "Idiom",
      "level": "B2"
    },
    {
      "term": "Hit the nail on the head",
      "definition": "Idiom: To describe exactly what is causing a situation or problem / to be completely accurate",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Cut corners",
      "definition": "Idiom: To do something poorly or cheaply to save time or money at the expense of quality",
      "category": "Idiom",
      "level": "B2"
    },
    {
      "term": "Break the ice",
      "definition": "Idiom: To make people feel more comfortable and relaxed in a social or business setting",
      "category": "Idiom",
      "level": "A2"
    },
    {
      "term": "Playing devil’s advocate",
      "definition": "Idiom: Arguing an opposing point of view purely for the sake of rigorous debate and testing assumptions",
      "category": "Idiom",
      "level": "B2"
    },
    {
      "term": "Under the weather",
      "definition": "Idiom: Feeling slightly sick, indisposed, or unwell",
      "category": "Idiom",
      "level": "A2"
    },
    {
      "term": "Elephant in the room",
      "definition": "Idiom: An obvious major problem or controversial issue that everyone knows about but avoids discussing",
      "category": "Idiom",
      "level": "B2"
    },
    {
      "term": "Burning the midnight oil",
      "definition": "Idiom: Working or studying late into the night",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "The ball is in your court",
      "definition": "Idiom: It is now your turn to make a decision or take the next step",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "Actions speak louder than words",
      "definition": "Proverb: What you do is more significant and believable than what you say",
      "category": "Proverb",
      "level": "A2"
    },
    {
      "term": "Every cloud has a silver lining",
      "definition": "Proverb: Every difficult or negative situation has a positive or hopeful aspect",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Don’t put all your eggs in one basket",
      "definition": "Proverb: Do not risk everything on a single venture or investment",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "Small Talk & Weather Talk",
      "definition": "Crucial Anglo-American social lubricant initiating conversations through shared observations on weather or transit",
      "category": "Social Customs",
      "level": "A1 / A2"
    },
    {
      "term": "Queuing Etiquette",
      "definition": "Unwritten cultural rule of strictly honoring sequential turn order in line without jumping or crowding",
      "category": "Social Customs",
      "level": "A1"
    },
    {
      "term": "Residential Tenancy Agreement (Lease)",
      "definition": "Legally binding contract between tenant and landlord specifying monthly rent and security deposit escrow",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "Credit Score (FICO / Experian)",
      "definition": "Numerical credit rating evaluating borrowing reliability required for mortgages, apartment leases, and credit cards",
      "category": "Banking & Finance",
      "level": "B1"
    },
    {
      "term": "At-Will Employment",
      "definition": "Legal doctrine in majority US states where an employer can terminate employment at any time without establishing cause",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "Notice Period & Redundancy",
      "definition": "Statutory termination notice (typically 2-4 weeks) and redundancy severance compensation in UK/Commonwealth law",
      "category": "Labor Law & HR",
      "level": "B2"
    },
    {
      "term": "Non-Disclosure Agreement (NDA)",
      "definition": "Legal contract protecting proprietary trade secrets, intellectual property, and confidential client data",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "Service Level Agreement (SLA)",
      "definition": "Contractual commitment defining uptime, quality metrics, and performance standards between vendor and client",
      "category": "Business & Tech",
      "level": "C1"
    },
    {
      "term": "Executive Summary",
      "definition": "High-level synthesis summarizing the core objectives, financial projections, and strategic insights of a business report",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Key Performance Indicators (KPIs)",
      "definition": "Quantifiable metrics evaluating an organization’s or employee’s operational success against key goals",
      "category": "Corporate Management",
      "level": "B2"
    },
    {
      "term": "Return on Investment (ROI)",
      "definition": "Financial ratio measuring the profitability or efficiency of an investment relative to its cost",
      "category": "Corporate Finance",
      "level": "B2"
    },
    {
      "term": "Action Items & Deliverables",
      "definition": "Tangible tasks assigned with designated owners and firm completion deadlines resulting from a meeting",
      "category": "Project Management",
      "level": "B2"
    },
    {
      "term": "Meeting Agenda & Minutes",
      "definition": "Structured list of topics to discuss, and the formal written record capturing all decisions and action items",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "Due Diligence",
      "definition": "Comprehensive investigation and financial/legal audit conducted prior to signing mergers, acquisitions, or investments",
      "category": "Corporate & Legal",
      "level": "C1"
    },
    {
      "term": "Power of Attorney (POA)",
      "definition": "Written legal authorization delegating power to represent or act on another’s behalf in legal/financial matters",
      "category": "Legal & Notary",
      "level": "C1"
    },
    {
      "term": "Memorandum of Understanding (MOU)",
      "definition": "Formal agreement outlining mutual intent and cooperative framework between parties before final binding contract",
      "category": "Corporate & Legal",
      "level": "C1"
    },
    {
      "term": "Scope of Work (SOW)",
      "definition": "Detailed document outlining specific work deliverables, timelines, milestones, and payment terms in a project",
      "category": "Project Management",
      "level": "C1"
    },
    {
      "term": "GDPR & CCPA Compliance",
      "definition": "General Data Protection Regulation and California Consumer Privacy Act governing user privacy and digital tracking",
      "category": "Tech Compliance & Law",
      "level": "C1"
    },
    {
      "term": "Diversity, Equity & Inclusion (DEI)",
      "definition": "Organizational frameworks fostering equitable representation, fair opportunities, and inclusive workplace culture",
      "category": "Corporate Governance & HR",
      "level": "B2 / C1"
    },
    {
      "term": "Onboarding & Offboarding",
      "definition": "Systematic HR processes for integrating new hires and smoothly managing employee departures and handovers",
      "category": "Human Resources",
      "level": "B2"
    },
    {
      "term": "Performance Review & 360 Feedback",
      "definition": "Structured formal evaluation assessing goal completion, core competencies, and multi-peer reviews",
      "category": "Human Resources",
      "level": "B2 / C1"
    },
    {
      "term": "Serendipity",
      "pronunciation": "/ˌsɛr.ənˈdɪp.ɪ.ti/",
      "partOfSpeech": "Noun",
      "definition": "The occurrence and development of events by chance in a happy, fortunate, or beneficially unexpected way.",
      "category": "Advanced Vocabulary",
      "level": "C1 / Advanced",
      "examples": [
        {
          "target": "The discovery of penicillin by Alexander Fleming was one of the most famous instances of serendipity in medical history.",
          "translation": "亚历山大·弗莱明发现青霉素是医学史上最著名的偶然幸运发现之一。"
        },
        {
          "target": "A fortunate serendipity brought the two researchers together at the international symposium.",
          "translation": "一次幸运的机缘巧合让两位研究人员在国际研讨会上相聚。"
        }
      ],
      "synonyms": [
        "Fluke",
        "Fortuity",
        "Happy accident",
        "Providence"
      ],
      "antonyms": [
        "Misfortune",
        "Calculated design"
      ],
      "register": "Formal / Literary",
      "notes": "Coined by Horace Walpole in 1754 from the Persian fairy tale \"The Three Princes of Serendip\"."
    },
    {
      "term": "Resilience",
      "pronunciation": "/rɪˈzɪl.jəns/",
      "partOfSpeech": "Noun",
      "definition": "1. The capacity to withstand or to recover quickly from difficulties, crisis, trauma, or stress. 2. In materials science: the ability of a substance or object to spring back into shape after elasticity deformation.",
      "category": "Psychology & Materials",
      "level": "B2 / Intermediate",
      "examples": [
        {
          "target": "The local community demonstrated remarkable resilience and solidarity following the devastating earthquake.",
          "translation": "在发生毁灭性地震后，当地社区展现了卓越的韧性与团结。"
        },
        {
          "target": "Developing psychological resilience enables individuals to navigate complex professional setbacks.",
          "translation": "培养心理韧性使个人能够应对复杂的职业挫折。"
        }
      ],
      "synonyms": [
        "Fortitude",
        "Tenacity",
        "Elasticity",
        "Toughness"
      ],
      "antonyms": [
        "Fragility",
        "Vulnerability",
        "Brittleness"
      ],
      "register": "General / Academic"
    },
    {
      "term": "Eloquent",
      "pronunciation": "/ˈɛl.ə.kwənt/",
      "partOfSpeech": "Adjective",
      "definition": "Fluent or persuasive in speaking or writing; clearly expressing or indicating profound feeling, aesthetic harmony, or rhetorical force.",
      "category": "Rhetoric & Literature",
      "level": "B2 / Upper-Intermediate",
      "examples": [
        {
          "target": "Her eloquent defense of human rights moved the entire delegation to a standing ovation.",
          "translation": "她对人权雄辩有力的捍卫使全体代表团起立鼓掌。"
        },
        {
          "target": "The ruins stood as an eloquent testimony to the ancient empire's architectural prowess.",
          "translation": "这些废墟生动而雄辩地证明了古代帝国的建筑实力。"
        }
      ],
      "synonyms": [
        "Articulate",
        "Persuasive",
        "Expressive",
        "Silver-tongued"
      ],
      "antonyms": [
        "Inarticulate",
        "Hesitant",
        "Tongue-tied"
      ],
      "register": "Formal / Literary"
    },
    {
      "term": "Paradigm",
      "pronunciation": "/ˈpær.ə.daɪm/",
      "partOfSpeech": "Noun",
      "definition": "1. A typical example or pattern of something; a model. 2. In philosophy/science: a distinct set of concepts or thought patterns, including theories, research methods, and standards for what constitutes legitimate contributions to a field (Kuhnian paradigm).",
      "category": "Philosophy & Science",
      "level": "C1 / Advanced",
      "examples": [
        {
          "target": "The emergence of quantum mechanics triggered a fundamental paradigm shift in modern theoretical physics.",
          "translation": "量子力学的出现引发了现代范式理论物理学的根本转变。"
        },
        {
          "target": "This company serves as a paradigm of sustainable corporate social responsibility.",
          "translation": "这家公司堪称可持续企业社会责任的典范。"
        }
      ],
      "synonyms": [
        "Archetype",
        "Prototype",
        "Framework",
        "Standard model"
      ],
      "register": "Academic / Formal"
    },
    {
      "term": "Ephemeral",
      "pronunciation": "/ɪˈfɛm.ər.əl/",
      "partOfSpeech": "Adjective",
      "definition": "Lasting for a very short time; transitory, fleeting, momentary.",
      "category": "Philosophy & Poetry",
      "level": "C1 / Advanced",
      "examples": [
        {
          "target": "Cherry blossoms possess an ephemeral beauty that captivates observers precisely because it vanishes so quickly.",
          "translation": "樱花具有一种转瞬即逝的美丽，正是因为其凋零之迅速而深深吸引着观赏者。"
        },
        {
          "target": "Fame in the digital age is often ephemeral and easily overshadowed by the next viral trend.",
          "translation": "数字时代的声名往往如过眼云烟，极易被下一个热点趋势所掩盖。"
        }
      ],
      "synonyms": [
        "Transient",
        "Fleeting",
        "Evanescent",
        "Momentary"
      ],
      "antonyms": [
        "Permanent",
        "Eternal",
        "Perpetual",
        "Enduring"
      ],
      "register": "Literary / Academic"
    },
    {
      "term": "Pragmatic",
      "pronunciation": "/præɡˈmæt.ɪk/",
      "partOfSpeech": "Adjective",
      "definition": "Dealing with things sensibly and realistically in a way that is based on practical rather than theoretical or ideological considerations.",
      "category": "Philosophy & Politics",
      "level": "B2 / Upper-Intermediate",
      "examples": [
        {
          "target": "The diplomats adopted a pragmatic approach to resolve the protracted border dispute peacefully.",
          "translation": "外交官们采取务实的方法和平解决了旷日持久的边界争端。"
        },
        {
          "target": "We require pragmatic solutions that can be implemented immediately within our budgetary constraints.",
          "translation": "我们需要能够在预算限制内立即实施的务实解决方案。"
        }
      ],
      "synonyms": [
        "Practical",
        "Utilitarian",
        "Sensible",
        "Hard-headed"
      ],
      "antonyms": [
        "Idealistic",
        "Impractical",
        "Dogmatic",
        "Theoretical"
      ],
      "register": "General / Business"
    },
    {
      "term": "Cognizant",
      "pronunciation": "/ˈkɒɡ.nɪ.zənt/",
      "partOfSpeech": "Adjective",
      "definition": "Having knowledge or being fully aware of; conscious and mindful of circumstances.",
      "category": "Formal Vocabulary",
      "level": "C1 / Advanced",
      "examples": [
        {
          "target": "Leaders must remain cognizant of the societal ramifications of rapid artificial intelligence deployment.",
          "translation": "领导者必须清醒认识到快速部署人工智能带来的社会影响。"
        },
        {
          "target": "Cognizant of the approaching storm, the mountaineers decided to descend to base camp.",
          "translation": "意识到风暴即将来临，登山队员们决定撤回大本营。"
        }
      ],
      "synonyms": [
        "Conscious",
        "Mindful",
        "Aware",
        "Apprised"
      ],
      "antonyms": [
        "Oblivious",
        "Unaware",
        "Ignorant",
        "Unconscious"
      ],
      "register": "Formal / Legal"
    },
    {
      "term": "Empathy",
      "pronunciation": "/ˈɛm.pə.θi/",
      "partOfSpeech": "Noun",
      "definition": "The psychological ability to understand, share, and vicariously experience the feelings, thoughts, and perspectives of another person.",
      "category": "Psychology & Ethics",
      "level": "B1 / Intermediate",
      "examples": [
        {
          "target": "Effective clinical care requires not only technical proficiency but also genuine empathy for patients.",
          "translation": "有效的临床医疗不仅需要精湛的技术，还需要对患者真诚的同理心。"
        },
        {
          "target": "Literature fosters cross-cultural empathy by allowing readers to inhabit lives vastly different from their own.",
          "translation": "文学通过让读者体验与自身截然不同的生活，促进了跨文化的同理心。"
        }
      ],
      "synonyms": [
        "Compassion",
        "Understanding",
        "Fellow-feeling",
        "Vicarious sympathy"
      ],
      "antonyms": [
        "Apathy",
        "Callousness",
        "Indifference"
      ],
      "register": "General / Psychological"
    },
    {
      "term": "Meticulous",
      "pronunciation": "/mɪˈtɪk.jʊ.ləs/",
      "partOfSpeech": "Adjective",
      "definition": "Showing great attention to detail; very careful, thorough, and precise.",
      "category": "Character & Methodology",
      "level": "B2 / Upper-Intermediate",
      "examples": [
        {
          "target": "Through meticulous archival research, the historian uncovered previously lost diplomatic correspondence.",
          "translation": "通过细致入微的档案研究，这位历史学家发现了此前佚失的外交信函。"
        },
        {
          "target": "The watchmaker assembled the delicate chronometer with meticulous precision.",
          "translation": "制表师以一丝不苟的精确度组装了精密的天文台表。"
        }
      ],
      "synonyms": [
        "Scrupulous",
        "Painstaking",
        "Punctilious",
        "Methodical"
      ],
      "antonyms": [
        "Careless",
        "Sloppy",
        "Slapdash",
        "Negligent"
      ],
      "register": "Formal / General"
    },
    {
      "term": "Ubiquitous",
      "pronunciation": "/juːˈbɪk.wɪ.təs/",
      "partOfSpeech": "Adjective",
      "definition": "Present, appearing, or found everywhere simultaneously; omnipresent.",
      "category": "Advanced Vocabulary",
      "level": "C1 / Advanced",
      "examples": [
        {
          "target": "Smartphones and high-speed mobile connectivity have become ubiquitous across modern urban centers.",
          "translation": "智能手机和高速移动连接在现代城市中心已变得无处不在。"
        },
        {
          "target": "The ubiquitous presence of microplastics in marine ecosystems poses grave ecological threats.",
          "translation": "微塑料在海洋生态系统中无孔不入的存在构成了严峻的生态威胁。"
        }
      ],
      "synonyms": [
        "Omnipresent",
        "Pervasive",
        "Universal",
        "Everywhere"
      ],
      "antonyms": [
        "Rare",
        "Scarce",
        "Localized",
        "Infrequent"
      ],
      "register": "Academic / Formal"
    }
  ],
  "arabic": [
    {
      "term": "مرحباً (Marhaban)",
      "definition": "Hello / Welcome (Standard friendly greeting)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "السلام عليكم (As-salamu alaykum)",
      "definition": "Peace be upon you (Universal formal Arabic & cultural greeting)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "وعليكم السلام (Wa alaykumu s-salam)",
      "definition": "And upon you be peace (Obligatory respectful response to greeting)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "صباح الخير / صباح النور (Sabah al-khayr / Sabah an-noor)",
      "definition": "Good morning / Good morning of light (Greeting & response)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "مساء الخير / مساء النور (Masa' al-khayr / Masa' an-noor)",
      "definition": "Good evening / Good evening of light",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "شكراً جزيلاً (Shukran jazilan)",
      "definition": "Thank you very much (Universal gratitude)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "عفواً (Afwan)",
      "definition": "You are welcome / Excuse me / Pardon",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "من فضلك / لو سمحت (Min fadlik / Law samaht)",
      "definition": "Please / If you would be so kind (Polite request)",
      "category": "Polite Request",
      "level": "A1"
    },
    {
      "term": "تفضل / تفضلي (Tafaddal / Tafaddali)",
      "definition": "Here you go / Please come in / Go ahead (Generous hospitality gesture)",
      "category": "Hospitality",
      "level": "A1"
    },
    {
      "term": "أهلاً وسهلاً (Ahlan wa sahlan)",
      "definition": "Welcome (Traditional Bedouin hospitality welcoming guest as family)",
      "category": "Hospitality",
      "level": "A1"
    },
    {
      "term": "تشرفنا (Tasharrafna)",
      "definition": "Honored to meet you (Standard formal introduction)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "مع السلامة / إلى اللقاء (Ma'a as-salama / Ila al-liqa')",
      "definition": "With safety (Goodbye) / Until we meet again",
      "category": "Parting",
      "level": "A1"
    },
    {
      "term": "الحساب من فضلك (Al-hisab min fadlik)",
      "definition": "The bill / check, please (In restaurants and cafes)",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "بكم هذا؟ (Bikam hadha?)",
      "definition": "How much is this? (Shopping and marketplace inquiry)",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "أين الحمام؟ (Ayna al-hammam?)",
      "definition": "Where is the restroom / bathroom?",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "نظام الجذر والوزن (Root and Pattern System)",
      "definition": "3-consonant triconsonantal root system (ف-ع-ل) generating Semitic semantic families",
      "category": "Linguistics",
      "level": "B1"
    },
    {
      "term": "الإضافة (Al-Idafa)",
      "definition": "The possessive and annexation construct linking two nouns without prepositions",
      "category": "Grammar",
      "level": "A2"
    },
    {
      "term": "المثنى (Al-Muthanna)",
      "definition": "Grammatical dual form (ـان / ـين) for exactly two entities before the plural",
      "category": "Grammar",
      "level": "A2"
    },
    {
      "term": "جمع التكسير (Jam' at-Taksir)",
      "definition": "Broken plural formed by internal vowel mutation rather than regular suffix addition",
      "category": "Grammar",
      "level": "B1"
    },
    {
      "term": "حروف الجر (Huroof al-Jarr)",
      "definition": "Prepositions requiring the Genitive case (Majroor) on following nouns",
      "category": "Grammar",
      "level": "A2"
    },
    {
      "term": "إن شاء الله (In sha' Allah)",
      "definition": "God willing (Cultural expression acknowledging future divine providence)",
      "category": "Cultural Philosophy",
      "level": "A1"
    },
    {
      "term": "ما شاء الله (Ma sha' Allah)",
      "definition": "What God has willed (Uttered to express admiration and protect from the evil eye)",
      "category": "Cultural Expression",
      "level": "A1"
    },
    {
      "term": "الحمد لله (Al-hamdulillah)",
      "definition": "Praise be to God (Expressed after eating, sneezing, or when asked about wellbeing)",
      "category": "Cultural Expression",
      "level": "A1"
    },
    {
      "term": "كرم (Karam)",
      "definition": "Boundless generosity, open-handed magnanimity, hospitality, and unhesitating readiness to share all resources with guests and travelers (embodied by Hatim al-Tai).",
      "category": "الضيافة والأخلاق (Hospitality & Ethics)",
      "level": "A2 / أساسي",
      "pronunciation": "كَرَم [ka.ram]",
      "partOfSpeech": "اسم مذكر (Noun)",
      "examples": [
        {
          "target": "يشتهر أهل البادية بالكرم الحاتمي وحسن استقبال الضيوف والمسافرين.",
          "translation": "The desert folk are famous for Hatim-like generosity and hospitable reception of guests and travelers."
        },
        {
          "target": "الكرم الحقيقي هو العطاء دون انتظار مقابل أو ثناء من أحد.",
          "translation": "True generosity is giving without expecting compensation or praise from anyone."
        }
      ],
      "synonyms": [
        "سخاء",
        "جود",
        "ضيافة"
      ],
      "antonyms": [
        "بخل (miserliness)",
        "شح"
      ],
      "register": "عام / أصيل (General / Cultural)"
    },
    {
      "term": "الدلة والفنجان (Dallah & Finjan)",
      "definition": "Traditional brass coffee pot and handleless porcelain cup used in ceremonial coffee serving",
      "category": "Culinary Culture",
      "level": "A2"
    },
    {
      "term": "العود والبخور (Oud & Bukhoor)",
      "definition": "Agarwood incense ritual welcoming guests into Arabian households",
      "category": "Cultural Customs",
      "level": "B1"
    },
    {
      "term": "سوق (Souq)",
      "definition": "Traditional marketplace organized into specialized quarters (Gold Souq, Spice Souq)",
      "category": "Commerce & Culture",
      "level": "A1"
    },
    {
      "term": "المساومة / الفصال (Al-Musaawamah / Al-Fisal)",
      "definition": "Friendly, culturally expected ritual of price negotiation in traditional souqs",
      "category": "Shopping Culture",
      "level": "B1"
    },
    {
      "term": "رمضان مبارك / عيد مبارك (Ramadan Mubarak / Eid Mubarak)",
      "definition": "Blessed Ramadan / Blessed Eid festive greetings",
      "category": "Festive Greetings",
      "level": "A1"
    },
    {
      "term": "سحور وإفطار (Suhoor & Iftar)",
      "definition": "Pre-dawn meal before fasting vs sunset meal breaking the fast during Ramadan",
      "category": "Religious Culture",
      "level": "A2"
    },
    {
      "term": "عقد الإيجار وإيجار (Ejar Rental Contract)",
      "definition": "Official unified digital rental contract registry platform in Saudi Arabia",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "الإقامة (Iqama)",
      "definition": "Official resident identity card and work residency permit for expatriates in GCC countries",
      "category": "Civic Administration",
      "level": "B1"
    },
    {
      "term": "منصة أبشر (Absher Platform)",
      "definition": "Saudi Ministry of Interior digital portal managing visas, civil status, and traffic services",
      "category": "Civic Tech & Government",
      "level": "B2"
    },
    {
      "term": "السجل التجاري (Commercial Registration - CR)",
      "definition": "Official company registration certificate issued by the Ministry of Commerce",
      "category": "Business & Legal",
      "level": "B2"
    },
    {
      "term": "ضريبة القيمة المضافة (VAT - Dareebat al-Qeema al-Mudaafa)",
      "definition": "Value Added Tax (15% in KSA, 5% in UAE) applied across retail and commercial supply chains",
      "category": "Taxation & Finance",
      "level": "B2"
    },
    {
      "term": "منصة قوى (Qiwa Platform)",
      "definition": "Unified digital labor ecosystem for employment contracts and work transfers in Saudi Arabia",
      "category": "Labor Law & Business",
      "level": "C1"
    },
    {
      "term": "التوطين ونطاقات (Saudization & Nitaqat)",
      "definition": "Government workforce quota policy mandating employment ratios for national citizens",
      "category": "Business & Economy",
      "level": "C1"
    },
    {
      "term": "مكافأة نهاية الخدمة (End-of-Service Gratuity)",
      "definition": "Statutory severance benefit mandated by GCC labor codes based on tenure",
      "category": "Labor Law & HR",
      "level": "C1"
    },
    {
      "term": "جدول الأعمال (Jadwal al-A'mal)",
      "definition": "Formal meeting agenda distributed to attendees before executive sessions",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "محضر الاجتماع (Mahdar al-Ijtima')",
      "definition": "Official meeting minutes recording motions, resolutions, and action items",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "اتفاقية عدم الإفشاء (NDA - Ittifaqiyyat 'Adam al-Ifsha')",
      "definition": "Non-disclosure and business confidentiality agreement",
      "category": "Legal & Contract",
      "level": "C1"
    },
    {
      "term": "عرض أسعار (Proforma Invoice / Quotation)",
      "definition": "Official commercial price quotation submitted to prospective clients",
      "category": "Commerce & Sales",
      "level": "B2"
    },
    {
      "term": "خطاب النوايا (Letter of Intent - LOI)",
      "definition": "Preliminary formal letter declaring intent to enter into a business transaction",
      "category": "Corporate & Legal",
      "level": "C1"
    },
    {
      "term": "الوكالة الشرعية (Power of Attorney)",
      "definition": "Notarized legal delegation of authority verified through Ministry of Justice portals",
      "category": "Legal & Notary",
      "level": "C1"
    },
    {
      "term": "رؤية 2030 (Vision 2030)",
      "definition": "Transformative economic diversification and social development blueprint across the Kingdom",
      "category": "Economics & Society",
      "level": "B2 / C1"
    },
    {
      "term": "طرب (Tarab)",
      "pronunciation": "طَرَب [tˤɑ.rɑb]",
      "partOfSpeech": "اسم مذكر (Noun)",
      "definition": "Musical ecstasy, emotional enchantment, or deep spiritual rapture induced by sublime traditional Arabic vocal music, poetry, and performance (quintessentially associated with Umm Kulthum).",
      "category": "الموسيقى والشعر والجماليات (Music & Aesthetics)",
      "level": "B2 / متقدم",
      "examples": [
        {
          "target": "أحدث غناء أم كلثوم حالة فريدة من الطرب في قلوب الملايين في العالم العربي.",
          "translation": "Umm Kulthum's singing created a unique state of tarab (musical ecstasy) in the hearts of millions across the Arab world."
        },
        {
          "target": "يتجلى الطرب الأصيل في التفاعل الوجداني العميق بين المنشد والجمهور.",
          "translation": "Authentic tarab manifests in the profound emotional interaction between the singer and the audience."
        }
      ],
      "synonyms": [
        "نشوة موسيقية",
        "سلطنة",
        "شغف روحي"
      ],
      "register": "ثقافي / أدبي (Cultural / Literary)",
      "notes": "A foundational concept in classical Arabic music theory and maqam improvisation."
    },
    {
      "term": "مروءة (Muru'ah)",
      "pronunciation": "مُرُوءَة [mu.ruː.ʔa]",
      "partOfSpeech": "اسم مؤنث (Noun)",
      "definition": "Chivalry, manly virtue, high moral integrity, generosity to guests, courage in adversity, and protective honor; the supreme pre-Islamic and Islamic ethical ideal.",
      "category": "الأخلاق والقيم العربية (Ethics & Values)",
      "level": "C1 / متقدم جداً",
      "examples": [
        {
          "target": "تعتبر المروءة من أسمى الفضائل الأخلاقية المتجذرة في التراث العربي الأصيل.",
          "translation": "Muru'ah is considered one of the highest moral virtues deeply rooted in authentic Arab heritage."
        },
        {
          "target": "أظهر الفارس العربي نبل المروءة وشهامة النفس في ساحة المعركة.",
          "translation": "The Arab knight demonstrated the nobility of muru'ah and magnanimity on the battlefield."
        }
      ],
      "synonyms": [
        "شهامة",
        "نخوة",
        "فروسية",
        "كرم النفس"
      ],
      "antonyms": [
        "دناءة (lowness)",
        "خسة"
      ],
      "register": "فصيح / تراثي (Classical / Literary)"
    },
    {
      "term": "حنين (Haneen)",
      "pronunciation": "حَنِين [ħa.niːn]",
      "partOfSpeech": "اسم مذكر (Noun)",
      "definition": "Tender longing, deep yearning, nostalgic ache for a beloved person, ancestral homeland, or lost youth.",
      "category": "المشاعر والوجدان (Emotions & Nostalgia)",
      "level": "B1 / متوسط",
      "examples": [
        {
          "target": "يشعر المغترب بحنين دائم إلى مسقط رأسه ورائحة تراب الوطن.",
          "translation": "The expatriate feels constant haneen (yearning) for his birthplace and the scent of the homeland's soil."
        },
        {
          "target": "أثارت القصيدة مشاعر الحنين إلى أيام الطفولة البريئة والذكريات الجميلة.",
          "translation": "The poem evoked feelings of nostalgia for days of innocent childhood and beautiful memories."
        }
      ],
      "synonyms": [
        "شوق",
        "لهفة",
        "صبابة",
        "وجد"
      ],
      "register": "أدبي / عام (Literary / General)"
    }
  ],
  "mandarin": [
    {
      "term": "你好 (Nǐ hǎo)",
      "definition": "Hello / Standard universal friendly greeting in Chinese",
      "category": "Greeting",
      "level": "HSK 1 / A1"
    },
    {
      "term": "您好 (Nín hǎo)",
      "definition": "Hello (Respectful honorific form addressed to elders, clients, or superiors)",
      "category": "Greeting",
      "level": "HSK 2 / A2"
    },
    {
      "term": "早上好 / 晚上好 (Zǎoshang hǎo / Wǎnshang hǎo)",
      "definition": "Good morning / Good evening",
      "category": "Greeting",
      "level": "HSK 1 / A1"
    },
    {
      "term": "谢谢 / 不客气 (Xièxie / Bù kèqì)",
      "definition": "Thank you / You are welcome",
      "category": "Etiquette",
      "level": "HSK 1 / A1"
    },
    {
      "term": "对不起 / 没关系 (Duìbuqǐ / Méi guānxi)",
      "definition": "I am sorry / It doesn’t matter / That’s alright",
      "category": "Etiquette",
      "level": "HSK 1 / A1"
    },
    {
      "term": "请问 (Qǐngwèn)",
      "definition": "Excuse me, may I ask... (Essential polite conversation opener)",
      "category": "Polite Inquiry",
      "level": "HSK 1 / A1"
    },
    {
      "term": "劳驾 / 麻烦您 (Láojià / Máfan nín)",
      "definition": "Excuse me for bothering you / May I trouble you to...",
      "category": "Polite Request",
      "level": "HSK 3 / B1"
    },
    {
      "term": "多少钱？ (Duōshao qián?)",
      "definition": "How much is it? (Standard shopping inquiry)",
      "category": "Shopping",
      "level": "HSK 1 / A1"
    },
    {
      "term": "买单 / 结账 (Mǎidān / Jiézhàng)",
      "definition": "Settle the bill / Check please at restaurants",
      "category": "Dining & Commerce",
      "level": "HSK 2 / A2"
    },
    {
      "term": "洗手间在哪儿？ (Xǐshǒujiān zài nǎr?)",
      "definition": "Where is the restroom / bathroom?",
      "category": "Navigation",
      "level": "HSK 1 / A1"
    },
    {
      "term": "慢走 (Màn zǒu)",
      "definition": "Take care / Walk slowly (Polite parting remark from host to departing guests)",
      "category": "Social Etiquette",
      "level": "HSK 2 / A2"
    },
    {
      "term": "四声 (The 4 Tones)",
      "definition": "First (High flat ¯), Second (Rising ´), Third (Dipping ˘), Fourth (Falling `), plus neutral tone",
      "category": "Phonetics",
      "level": "HSK 1 / A1"
    },
    {
      "term": "量词 (Measure Words)",
      "definition": "Nominal classifiers paired with numbers (个 gè, 张 zhāng, 本 běn, 条 tiáo, 只 zhī, 杯 bēi)",
      "category": "Grammar",
      "level": "HSK 1 / A1"
    },
    {
      "term": "动态助词：了、着、过 (Aspect Particles)",
      "definition": "了 (Completed action), 着 (Ongoing continuous state), 过 (Past experiential marker)",
      "category": "Grammar",
      "level": "HSK 2 / A2"
    },
    {
      "term": "把字句 (Ba-Disposal Construction)",
      "definition": "[Subject + 把 + Object + Verb + Complement] disposing or manipulating a specific patient",
      "category": "Grammar",
      "level": "HSK 3 / B1"
    },
    {
      "term": "被字句 (Bei-Passive Construction)",
      "definition": "[Patient + 被 + Agent + Verb + Complement] passive voice highlighting affected outcome",
      "category": "Grammar",
      "level": "HSK 3 / B1"
    },
    {
      "term": "补语系统 (Complement System)",
      "definition": "Resultative (做完), Directional (走出来), Potential (看得懂), Degree (跑得快)",
      "category": "Grammar",
      "level": "HSK 3 / B1"
    },
    {
      "term": "离合词 (Separable Verbs)",
      "definition": "Verb-object compounds that split to accept aspect particles (睡觉 → 睡了一个好觉, 见面 → 见个面)",
      "category": "Grammar",
      "level": "HSK 3 / B1"
    },
    {
      "term": "微信支付 & 支付宝 (WeChat Pay & Alipay)",
      "definition": "Ubiquitous mobile QR-code payment ecosystems across China’s cashless economy",
      "category": "FinTech & Daily Life",
      "level": "HSK 2 / A2"
    },
    {
      "term": "高铁 & 复兴号 (High-Speed Rail)",
      "definition": "Modern bullet train network operating at speeds up to 350 km/h with 12306 digital ticketing",
      "category": "Transit",
      "level": "HSK 3 / B1"
    },
    {
      "term": "美团 & 饿了么 (Meituan & Ele.me)",
      "definition": "Dominant hyper-efficient on-demand food delivery and local lifestyle platforms",
      "category": "Daily Life & Tech",
      "level": "HSK 2 / A2"
    },
    {
      "term": "滴滴出行 (DiDi)",
      "definition": "China’s primary ridesharing and mobility hailing super-app",
      "category": "Transit & Tech",
      "level": "HSK 2 / A2"
    },
    {
      "term": "饮茶 & 叩指礼 (Tea Culture & Finger Tap)",
      "definition": "Table etiquette of tapping two bent fingers to silently thank host for pouring tea without interrupting speech",
      "category": "Tea Ceremony Etiquette",
      "level": "HSK 3 / B1"
    },
    {
      "term": "面子 (Face / Miànzi)",
      "definition": "Social dignity, prestige, reputation, and honor in Chinese interpersonal relationships",
      "category": "Cultural Psychology",
      "level": "HSK 4 / B2"
    },
    {
      "term": "关系 (Guānxi)",
      "definition": "Dynamic network of reciprocal social obligations, mutual trust, and personal connections in business",
      "category": "Culture & Business",
      "level": "HSK 5 / C1"
    },
    {
      "term": "客气 (Kèqi)",
      "definition": "Politeness, modesty, and etiquette; also used in «别客气» (Don’t stand on ceremony)",
      "category": "Social Etiquette",
      "level": "HSK 2 / A2"
    },
    {
      "term": "抢着买单 (Fighting for the Bill)",
      "definition": "Culturally expected ritual where dining companions vigorously compete to pay the restaurant bill",
      "category": "Dining Culture",
      "level": "HSK 3 / B1"
    },
    {
      "term": "人情味 (Rénqíngwèi)",
      "definition": "Human warmth, empathy, community neighborliness, and emotional resonance",
      "category": "Cultural Concept",
      "level": "HSK 4 / B2"
    },
    {
      "term": "加油 (Jiāyóu)",
      "definition": "Cheers! / Keep it up! / Go for it! (Universal encouragement exclamation)",
      "category": "Idiom & Slang",
      "level": "HSK 2 / A2"
    },
    {
      "term": "塞翁失马 (Sài wēng shī mǎ)",
      "definition": "Chengyu: A blessing in disguise (Every loss may lead to an unexpected gain)",
      "category": "Chengyu / Idiom",
      "level": "HSK 5 / C1"
    },
    {
      "term": "脚踏实地 (Jiǎo tà shí dì)",
      "definition": "Chengyu: Down-to-earth; working conscientiously and stepping on solid ground",
      "category": "Chengyu / Idiom",
      "level": "HSK 5 / C1"
    },
    {
      "term": "半途而废 (Bàn tú ér fèi)",
      "definition": "Chengyu: To give up halfway / leave a task unfinished",
      "category": "Chengyu / Idiom",
      "level": "HSK 4 / B2"
    },
    {
      "term": "入乡随俗 (Rù xiāng suí sú)",
      "definition": "Chengyu: When in Rome, do as the Romans do",
      "category": "Chengyu / Idiom",
      "level": "HSK 4 / B2"
    },
    {
      "term": "房产证 & 租房合同 (Housing Deed & Lease)",
      "definition": "Official real estate title certificate and residential tenancy contract",
      "category": "Housing & Legal",
      "level": "HSK 4 / B2"
    },
    {
      "term": "押一付三 (One Deposit, Three Rent)",
      "definition": "Standard rental payment term in tier-1 Chinese cities: 1 month deposit + 3 months rent upfront",
      "category": "Housing & Real Estate",
      "level": "HSK 3 / B1"
    },
    {
      "term": "社保 & 五险一金 (Social Security & 5 Insurances + Housing Fund)",
      "definition": "Statutory social benefits (Endowment, Medical, Unemployment, Work Injury, Maternity + Housing Provident Fund)",
      "category": "Labor & Social Welfare",
      "level": "HSK 5 / C1"
    },
    {
      "term": "劳动合同 (Labor Contract)",
      "definition": "Statutory written employment contract mandated under China’s Labor Contract Law",
      "category": "Labor Law & HR",
      "level": "HSK 4 / B2"
    },
    {
      "term": "试用期 (Probationary Period)",
      "definition": "Legally regulated trial period (1 to 6 months depending on contract length) with minimum 80% salary",
      "category": "Labor Law",
      "level": "HSK 4 / B2"
    },
    {
      "term": "年终奖 (Year-End Bonus)",
      "definition": "Annual performance bonus traditionally distributed before the Lunar New Year (Spring Festival)",
      "category": "Corporate & HR",
      "level": "HSK 4 / B2"
    },
    {
      "term": "发票 (Fāpiào)",
      "definition": "Official tax invoice issued via State Taxation Administration required for corporate reimbursement and tax accounting",
      "category": "Business & Finance",
      "level": "HSK 4 / B2"
    },
    {
      "term": "保密协议 (NDA - Bǎomì Xiéyì)",
      "definition": "Non-disclosure agreement safeguarding proprietary business secrets and source code",
      "category": "Business & Legal",
      "level": "HSK 5 / C1"
    },
    {
      "term": "会议纪要 (Meeting Minutes)",
      "definition": "Formal written documentation of proceedings, resolutions, and actionable responsibilities from business meetings",
      "category": "Business Communication",
      "level": "HSK 4 / B2"
    },
    {
      "term": "公章 (Company Seal / Gōngzhāng)",
      "definition": "Official corporate red seal legally binding companies in contracts and government filings",
      "category": "Corporate Governance",
      "level": "HSK 5 / C1"
    },
    {
      "term": "可行性报告 (Feasibility Report)",
      "definition": "Comprehensive analytical document evaluating commercial viability, ROI, and risk factors of projects",
      "category": "Business & Project Mgmt",
      "level": "HSK 6 / C2"
    },
    {
      "term": "内卷 & 躺平 (Neijuan & Tangping)",
      "definition": "Contemporary socioeconomic terms: hyper-competitive involution (Neijuan) vs opting out/lying flat (Tangping)",
      "category": "Contemporary Society",
      "level": "HSK 5 / C1"
    },
    {
      "term": "中庸之道 (Zhōng yōng zhī dào)",
      "pronunciation": "zhōng yōng zhī dào",
      "partOfSpeech": "成语 / 哲学概念 (Idiom / Philosophy)",
      "definition": "The Doctrine of the Mean; Confucian philosophical principle of adhering to moderation, avoiding extremes, and maintaining balance and harmony in moral conduct.",
      "category": "儒家哲学与成语 (Confucian Philosophy)",
      "level": "HSK 6 / C1",
      "examples": [
        {
          "target": "古人提倡中庸之道，主张在待人接物中保持平衡与理性。",
          "translation": "The ancients advocated the Doctrine of the Mean, arguing for maintaining balance and rationality in interpersonal relationships."
        },
        {
          "target": "在激烈的商业竞争中，恪守中庸之道有助于企业保持长远稳健的发展。",
          "translation": "In fierce commercial competition, adhering to the Middle Way helps enterprises maintain long-term, sound development."
        }
      ],
      "synonyms": [
        "不偏不倚 (Bù piān bù yǐ)",
        "执两用中 (Zhí liǎng yòng zhōng)"
      ],
      "antonyms": [
        "过犹不及 (Guò yóu bù jí)",
        "走极端 (Zǒu jíduān)"
      ],
      "register": "正式 / 典雅 (Formal / Literary)"
    },
    {
      "term": "融会贯通 (Róng huì guàn tōng)",
      "pronunciation": "róng huì guàn tōng",
      "partOfSpeech": "成语 / 动词 (Idiom / Verb)",
      "definition": "To achieve a comprehensive mastery through integrating diverse principles and knowledge across disciplines; to thoroughly synthesize and understand.",
      "category": "学术与学习 (Scholarship & Learning)",
      "level": "HSK 6 / C1",
      "examples": [
        {
          "target": "真正的学者能够将东西方哲学思想融会贯通，提出独创性的学术见解。",
          "translation": "A true scholar is able to thoroughly synthesize Eastern and Western philosophical thought to propose original academic insights."
        },
        {
          "target": "只有把理论知识与临床实践融会贯通，才能成为一名卓越的医师。",
          "translation": "Only by integrating theoretical knowledge with clinical practice can one become an outstanding physician."
        }
      ],
      "synonyms": [
        "举一反三 (Jǔ yī fǎn sān)",
        "触类旁通 (Chù lèi páng tōng)"
      ],
      "antonyms": [
        "生吞活剥 (Shēng tūn huó bō)",
        "不求甚解 (Bù qiú shèn jiě)"
      ],
      "register": "成语 / 书面语 (Literary)"
    },
    {
      "term": "厚德载物 (Hòu dé zài wù)",
      "pronunciation": "hòu dé zài wù",
      "partOfSpeech": "成语 / 道德格言 (Proverb / Maxim)",
      "definition": "Great virtue accommodates all things; classical maxim from the I Ching emphasizing broad-mindedness, profound moral virtue, and tolerance towards all creation.",
      "category": "传统文化与美德 (Traditional Ethics)",
      "level": "HSK 6 / C2",
      "examples": [
        {
          "target": "清华大学校训“自强不息，厚德载物”激励着一代代学子追求卓越与仁德。",
          "translation": "Tsinghua University's motto \"Self-discipline and Social Commitment (Self-strengthening without ceasing; thick virtue carrying all things)\" inspires generations of students to pursue excellence and benevolence."
        },
        {
          "target": "一位优秀的领导者应当具备海纳百川、厚德载物的博大胸怀。",
          "translation": "An exceptional leader ought to possess a grand broad-mindedness that embraces all rivers and carries all things with profound virtue."
        }
      ],
      "synonyms": [
        "海纳百川 (Hǎi nà bǎi chuān)",
        "宽宏大量 (Kuān hóng dà liàng)"
      ],
      "register": "典雅 / 哲学 (Literary / Classical)"
    },
    {
      "term": "韬光养晦 (Tāo guāng yǎng huì)",
      "pronunciation": "tāo guāng yǎng huì",
      "partOfSpeech": "成语 / 战略概念 (Idiom / Strategic Concept)",
      "definition": "To hide one's capacities and bide one's time; to conceal one's brilliance and nurture strength quietly while keeping a low profile.",
      "category": "谋略与外交 (Strategy & Diplomacy)",
      "level": "HSK 6 / C1",
      "examples": [
        {
          "target": "在羽翼未丰之时，应当懂得韬光养晦，暗中积蓄实力。",
          "translation": "When one's wings are not yet fully fledged, one should know to bide one's time and quietly accumulate strength."
        },
        {
          "target": "该企业在转型初期采取韬光养晦的策略，专注于核心技术的自主研发。",
          "translation": "In the early stage of transformation, the enterprise adopted a low-profile strategy, focusing on the independent R&D of core technologies."
        }
      ],
      "synonyms": [
        "蓄势待发 (Xù shì dài fā)",
        "深藏不露 (Shēn cáng bù lù)"
      ],
      "antonyms": [
        "锋芒毕露 (Fēng máng bì lù - show off brilliance aggressively)"
      ],
      "register": "书面语 / 战略 (Formal / Strategic)"
    },
    {
      "term": "潜移默化 (Qián yí mò huà)",
      "pronunciation": "qián yí mò huà",
      "partOfSpeech": "成语 / 动词 (Idiom / Verb)",
      "definition": "To exert a subtle, imperceptible influence over time; transforming character or habit unconsciously and silently.",
      "category": "教育与心理 (Education & Psychology)",
      "level": "HSK 5 / B2",
      "examples": [
        {
          "target": "良好的家庭书香氛围对孩子的品格塑造起到了潜移默化的作用。",
          "translation": "A wholesome scholarly family atmosphere exerts a subtle, imperceptible influence on shaping a child's character."
        },
        {
          "target": "经典文学作品能够潜移默化地提升读者的审美情趣与精神境界。",
          "translation": "Classical literary works can subtly and imperceptibly elevate readers' aesthetic tastes and spiritual horizons."
        }
      ],
      "synonyms": [
        "耳濡目染 (Ěr rú mù rǎn)",
        "润物无声 (Rùn wù wú shēng)"
      ],
      "register": "成语 / 正式 (Literary / Formal)"
    },
    {
      "term": "匠心独运 (Jiàng xīn dú yùn)",
      "pronunciation": "jiàng xīn dú yùn",
      "partOfSpeech": "成语 / 形容词 (Idiom / Adjective)",
      "definition": "Displaying ingenious artisanship and original creativity; uniquely conceived and crafted with masterly skill.",
      "category": "艺术与工艺 (Art & Craftsmanship)",
      "level": "HSK 6 / C1",
      "examples": [
        {
          "target": "这座苏州园林的亭台楼阁与假山水系匠心独运，移步换景。",
          "translation": "The pavilions, artificial hills, and water systems of this Suzhou garden display ingenious craftsmanship, shifting scenes with every step."
        },
        {
          "target": "设计师匠心独运地将传统剪纸艺术与现代时装剪裁完美融合。",
          "translation": "The designer ingeniously and uniquely fused traditional paper-cutting art with modern fashion tailoring."
        }
      ],
      "synonyms": [
        "别具匠心 (Bié jù jiàng xīn)",
        "独树一帜 (Dú shù yī zhì)",
        "巧夺天工 (Qiǎo duó tiān gōng)"
      ],
      "antonyms": [
        "千篇一律 (Qiān piān yī lǜ)",
        "因循守旧 (Yīn xún shǒu jiù)"
      ],
      "register": "书面语 / 艺术赞赏 (Literary / Aesthetic)"
    },
    {
      "term": "同舟共济 (Tóng zhōu gòng jì)",
      "pronunciation": "tóng zhōu gòng jì",
      "partOfSpeech": "成语 / 动词 (Idiom / Verb)",
      "definition": "Crossing the river in the same boat; pulling together in full solidarity to overcome mutual hardship or crisis.",
      "category": "伦理与国际关系 (Ethics & Global Affairs)",
      "level": "HSK 5 / B2",
      "examples": [
        {
          "target": "面对全球气候危机的严峻挑战，国际社会必须秉持同舟共济的合作精神。",
          "translation": "Facing the severe challenges of global climate crisis, the international community must uphold the cooperative spirit of pulling together in the same boat."
        },
        {
          "target": "团队成员在最艰难的研发阶段同舟共济，终于攻克了核心技术难关。",
          "translation": "Team members pulled together in the same boat during the most arduous R&D stage, finally conquering key technical hurdles."
        }
      ],
      "synonyms": [
        "风雨同舟 (Fēng yǔ tóng zhōu)",
        "休戚与共 (Xiū qī yǔ gòng)",
        "众志成城 (Zhòng zhì chéng chéng)"
      ],
      "antonyms": [
        "各奔前程 (Gè bèn qián chéng)",
        "落井下石 (Luò jǐng xià shí)"
      ],
      "register": "正式 / 外交 (Formal / Diplomatic)"
    },
    {
      "term": "精益求精 (Jīng yì qiú jīng)",
      "pronunciation": "jīng yì qiú jīng",
      "partOfSpeech": "成语 / 动词 (Idiom / Verb)",
      "definition": "Constantly striving for perfection; relentlessly refining and improving an already excellent craft, skill, or product.",
      "category": "工匠精神 (Craftsmanship & Quality)",
      "level": "HSK 5 / B2",
      "examples": [
        {
          "target": "顶级钟表大师对每一个微小齿轮都秉持精益求精的执着追求。",
          "translation": "Top master watchmakers uphold a relentless pursuit of perfection for every tiny gear."
        },
        {
          "target": "科学研究需要严谨求实、精益求精的学术态度。",
          "translation": "Scientific research requires a rigorous, realistic, and continuously perfecting academic attitude."
        }
      ],
      "synonyms": [
        "锦上添花 (Jǐn shàng tiān huā)",
        "孜孜以求 (Zī zī yǐ qiú)"
      ],
      "antonyms": [
        "粗制滥造 (Cū zhì làn zào - shoddy manufacture)",
        "得过且过 (Dé guò qiě guò)"
      ],
      "register": "成语 / 正式 (General / Formal)"
    }
  ],
  "cantonese": [
    {
      "term": "早晨 (Zou2 san4)",
      "definition": "Good morning (Standard morning greeting across Hong Kong and Guangdong)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "唔該 (M4 goi1)",
      "definition": "Thank you for service / Excuse me / Please (For minor favors, service, or getting past someone)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "多謝 (Do1 ze6)",
      "definition": "Thank you very much (For gifts, substantial generosity, hospitality, or compliments)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "對唔住 / 唔好意思 (Deoi3 m4 zyu6 / M4 hou2 ji3 si1)",
      "definition": "Deep apology (Deoi3 m4 zyu6) vs polite \"Excuse me / My bad\" (M4 hou2 ji3 si1)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "埋單 (Maai4 daan1)",
      "definition": "Settle the bill / Check please at restaurants and cha chaan tengs",
      "category": "Dining",
      "level": "A1"
    },
    {
      "term": "得唔得呀？ / 得 (Dak1 m4 dak1 aa3? / Dak1)",
      "definition": "Is that okay? / Yes, okay / Deal",
      "category": "Conversation",
      "level": "A1"
    },
    {
      "term": "冇問題 (Mou5 man6 tai4)",
      "definition": "No problem / Absolutely fine",
      "category": "Conversation",
      "level": "A1"
    },
    {
      "term": "點呀？ (Dim2 aa3?)",
      "definition": "What’s up? / How are things going? (Informal greeting)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "幾多錢？ (Gei2 do1 cin2?)",
      "definition": "How much is it? (Pricing inquiry)",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "喺邊度？ (Hai2 bin1 dou6?)",
      "definition": "Where is it? (Spatial location inquiry)",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "九聲六調 (Cantonese 9 Tones & 6 Contours)",
      "definition": "High flat (1), Mid rising (2), Mid flat (3), Low falling (4), Low rising (5), Low flat (6), plus entering tones (7, 8, 9 with -p, -t, -k endings)",
      "category": "Phonology",
      "level": "A1"
    },
    {
      "term": "句末語氣助詞 (Sentence-Final Particles)",
      "definition": "Expressive particles shaping stance: 啦 (laa1/laa3), 囉 (lo1), 㗎 (gaa3), 喎 (wo3), 啫 (ze1), 咩 (me1), 呀嘛 (aa1 maa3)",
      "category": "Grammar & Pragmatics",
      "level": "B1"
    },
    {
      "term": "動態助詞：緊、咗、過、完、晒 (Aspect Particles)",
      "definition": "緊 (Progressive), 咗 (Perfective/Completed), 過 (Experiential), 完 (Finished), 晒 (Exhaustive/All)",
      "category": "Grammar",
      "level": "A2"
    },
    {
      "term": "比較句 [A + Adj + 過 + B]",
      "definition": "Standard comparative syntax: 呢間貴過嗰間 (This shop is more expensive than that one)",
      "category": "Grammar",
      "level": "A2"
    },
    {
      "term": "可能補語 [V+得/唔+補語]",
      "definition": "Potential complements: 做得切/做唔切 (finish in time), 睇得明/睇唔明 (understand visually), 頂得順/頂唔順 (handle stress)",
      "category": "Grammar",
      "level": "B1"
    },
    {
      "term": "被動句標記「畀」",
      "definition": "Passive voice marker: 部手機畀人偷咗 (The phone was stolen by someone)",
      "category": "Grammar",
      "level": "B2"
    },
    {
      "term": "口語處置句「攞」",
      "definition": "Conversational disposal: 攞啲碗筷去洗 (Take the dishes and wash them)",
      "category": "Grammar",
      "level": "B2"
    },
    {
      "term": "飲茶 (Yam caa)",
      "definition": "To drink tea / Go for Yum Cha; the iconic Cantonese culinary and social ritual of gathering with family or colleagues to drink Chinese tea and savor dim sum while catching up.",
      "category": "飲食文化與生活 (Culinary Culture & Daily Life)",
      "level": "A1 / 初級",
      "pronunciation": "jam2 caa4",
      "partOfSpeech": "動詞短語 / 文化習俗 (Verb Phrase / Cultural Custom)",
      "examples": [
        {
          "target": "逢星期日我哋一家人一齊去酒樓飲茶食點心。",
          "translation": "Every Sunday our whole family goes together to the restaurant to drink tea and eat dim sum."
        },
        {
          "target": "斟茶畀長輩嗰陣，長輩會用手指叩枱表示多謝（叩手禮）。",
          "translation": "When pouring tea for elders, they will tap the table with fingers to express gratitude (finger-tapping etiquette)."
        }
      ],
      "synonyms": [
        "食點心 (Sik dim sam)",
        "歎茶 (Taan caa)"
      ],
      "register": "口語 / 核心文化詞 (Colloquial / Core Cultural)",
      "notes": "The finger-tapping gesture (叩手禮) originated from an ancient Qing dynasty legend of Emperor Qianlong traveling in disguise."
    },
    {
      "term": "茶餐廳 (Caa4 caan1 teng1)",
      "definition": "Quintessential Hong Kong hybrid diner serving fusion comfort foods (Pineapple bun, Milk tea, Baked pork chop rice)",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "港式奶茶 (Hong Kong Milk Tea)",
      "definition": "Smooth, strong Ceylon black tea blended with evaporated milk and sugar, filtered through silk cloth",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "菠蘿包 & 菠蘿油 (Pineapple Bun)",
      "definition": "Sweet crusted pastry named for its pineapple-like pattern, served warm with a thick slab of butter inside",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "八達通 (Baat3 daat6 tung1 - Octopus Card)",
      "definition": "Contactless smart card system used universally across Hong Kong transit, retail, and dining",
      "category": "Transit & Daily Life",
      "level": "A1"
    },
    {
      "term": "港鐵 (MTR - Gong2 tit3)",
      "definition": "Mass Transit Railway network famous globally for world-class 99.9% punctuality and efficiency",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "小巴 (Minibus / Siu2 baa1)",
      "definition": "Red top (flexible route) and Green top (scheduled route) 16-19 seater public light buses",
      "category": "Transit",
      "level": "A2"
    },
    {
      "term": "行街 (Haang4 gaai1)",
      "definition": "Window shopping and strolling through vibrant commercial and night market districts",
      "category": "Daily Life",
      "level": "A1"
    },
    {
      "term": "食宵夜 (Sik6 siu1 je2)",
      "definition": "Late-night dining ritual with friends at dai pai dongs, dessert shops, or hot pot parlors",
      "category": "Daily Life & Culture",
      "level": "A2"
    },
    {
      "term": "大牌檔 (Dai6 paai4 dong3)",
      "definition": "Traditional open-air street food stall with license plaques, serving wok-hei dishes",
      "category": "Culinary Culture",
      "level": "A2"
    },
    {
      "term": "炒魷魚 (Caau2 jau4 jyu2)",
      "definition": "Idiom: to be fired / sacked from employment (evoking rolling up one’s woven sleeping mat)",
      "category": "Idiom & Slang",
      "level": "B1"
    },
    {
      "term": "食塞米 (Sik6 sak1 mai5)",
      "definition": "Colloquial idiom: useless / good-for-nothing parasite",
      "category": "Idiom & Slang",
      "level": "B2"
    },
    {
      "term": "賣膏藥 (Maai6 gou1 joek6)",
      "definition": "Idiom: fast-talking sales pitch / exaggerated promotional puffery",
      "category": "Idiom & Slang",
      "level": "B2"
    },
    {
      "term": "臨急抱佛腳 (Lam4 gap1 pou5 fat6 goek3)",
      "definition": "Proverb: cramming at the eleventh hour / making a frantic last-minute effort",
      "category": "Proverb / Idiom",
      "level": "B1"
    },
    {
      "term": "一石二鳥 (Jat1 sek6 ji6 niu5)",
      "definition": "Proverb: killing two birds with one stone",
      "category": "Proverb / Idiom",
      "level": "B1"
    },
    {
      "term": "租約 & 釐印 (Lease & Stamp Duty)",
      "definition": "Tenancy agreement legally stamped with government stamp duty for legal enforceability",
      "category": "Housing & Legal",
      "level": "B2"
    },
    {
      "term": "兩按一上 (Two Months Deposit, One Month Upfront)",
      "definition": "Standard residential rental payment formula across Hong Kong real estate",
      "category": "Housing & Real Estate",
      "level": "B1"
    },
    {
      "term": "強積金 (MPF - Mandated Provident Fund)",
      "definition": "Compulsory retirement savings scheme where employer and employee each contribute 5%",
      "category": "Labor & Finance",
      "level": "B2"
    },
    {
      "term": "勞工法例 & 有薪年假 (Labor Law & Paid Annual Leave)",
      "definition": "Employment Ordinance protections including statutory holidays and minimum wage",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "年終雙糧 (13th Month Double Pay)",
      "definition": "Customary year-end contractual bonus of an extra month’s salary before Lunar New Year",
      "category": "Corporate & HR",
      "level": "B2"
    },
    {
      "term": "試用期 (Probation Period)",
      "definition": "Corporate trial period typically lasting 3 months with 1-week to 1-month termination notice",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "開會 (Hoi1 wui6) & 傾生意 (King1 sang1 ji3)",
      "definition": "Holding business meetings and negotiating commercial deals",
      "category": "Business Communication",
      "level": "B1"
    },
    {
      "term": "報價單 (Quotation / Bou3 gaa3 daan1)",
      "definition": "Official commercial quotation specifying pricing, unit costs, and delivery timeline",
      "category": "Business & Commerce",
      "level": "B2"
    },
    {
      "term": "簽約 (Cim1 joek3)",
      "definition": "Signing of legally binding commercial contracts",
      "category": "Business & Legal",
      "level": "B2"
    },
    {
      "term": "發票 & 收據 (Invoice & Receipt)",
      "definition": "Commercial debit invoice (Fat1 piu3) and official payment receipt (Sau1 geoi3)",
      "category": "Business & Finance",
      "level": "B1"
    },
    {
      "term": "保密協議 (NDA - Bou2 mat6 hip3 ji5)",
      "definition": "Non-disclosure legal agreement safeguarding trade secrets and intellectual property",
      "category": "Business & Legal",
      "level": "C1"
    },
    {
      "term": "夾萬 (Gip6 maan6)",
      "definition": "Heavy security vault or personal safe for storing cash, deeds, and confidential records",
      "category": "Commercial Equipment",
      "level": "B2"
    },
    {
      "term": "執生 (Zap1 saang1)",
      "definition": "Essential Hong Kong survival philosophy: to improvise on the fly, adapt quickly, and solve problems resourcefully",
      "category": "Cultural Philosophy",
      "level": "B2"
    },
    {
      "term": "人情味 (Jan cing mei)",
      "pronunciation": "jan4 cing4 mei6",
      "partOfSpeech": "名詞 (Noun)",
      "definition": "Human touch, neighborly warmth, empathy, and genuine kindness that binds community members together (celebrated in old Hong Kong neighborhood culture).",
      "category": "社會文化與倫理 (Culture & Social Ethics)",
      "level": "B2 / 中高級",
      "examples": [
        {
          "target": "老街坊之間互相關照，充滿濃厚嘅人情味。",
          "translation": "Between old neighbors there is mutual care, brimming with dense human warmth."
        },
        {
          "target": "雖然現代城市發展好快，但舊社區依然保留住珍貴嘅人情味。",
          "translation": "Although modern urban development is very fast, old communities still preserve precious human warmth."
        }
      ],
      "synonyms": [
        "溫情 (Wan cing)",
        "鄰里情 (Leon lei cing)"
      ],
      "antonyms": [
        "冷漠 (Laang mok - indifference)"
      ],
      "register": "口語 / 書面通用 (General)"
    },
    {
      "term": "獅子山精神 (Si zi saan zing san)",
      "pronunciation": "si1 zi2 saan1 zing1 san4",
      "partOfSpeech": "名詞短語 / 核心價值 (Noun Phrase / Cultural Ethos)",
      "definition": "The Lion Rock Spirit; the quintessential Hong Kong ethos of perseverance, resilience, mutual solidarity, and hard work to overcome adversity and build a prosperous society from scratch.",
      "category": "香港歷史與精神 (Hong Kong Ethos & History)",
      "level": "B2 / 中高級",
      "examples": [
        {
          "target": "幾代香港人憑住獅子山精神，喺逆境中自強不息。",
          "translation": "Generations of Hong Kong people, relying on the Lion Rock Spirit, strengthened themselves amidst adversity."
        },
        {
          "target": "同舟共濟、刻苦耐勞係獅子山精神嘅核心體現。",
          "translation": "Pulling together in the same boat and enduring hardship are the core manifestation of the Lion Rock Spirit."
        }
      ],
      "synonyms": [
        "自強不息 (Zi koeng bat sik)",
        "刻苦耐勞 (Hak fu naai lou)"
      ],
      "register": "正式 / 文化象徵 (Formal / Cultural Symbol)",
      "notes": "Popularized by the seminal RTHK TV series and theme song \"Below the Lion Rock\" (獅子山下) composed by Joseph Koo with lyrics by James Wong."
    },
    {
      "term": "鑊氣 (Wok hei)",
      "pronunciation": "wok6 hei3",
      "partOfSpeech": "名詞 (Noun)",
      "definition": "Breath of the wok; the elusive, complex, smoky, charred aroma and flavor imparted by cooking fresh ingredients over intense heat in a seasoned cast-iron wok with rapid tossing.",
      "category": "粵菜廚藝與美學 (Cantonese Culinary Art)",
      "level": "B1 / 中級",
      "examples": [
        {
          "target": "大排檔炒出嚟嘅乾炒牛河鑊氣十足，香氣撲鼻。",
          "translation": "The dry-fried beef rice noodles tossed out by the open-air food stall has immense wok hei, with aroma greeting the nose."
        },
        {
          "target": "要炒出正宗嘅鑊氣，火候同拋鑊嘅速度非常關鍵。",
          "translation": "To stir-fry authentic wok hei, heat control and the speed of wok tossing are extremely critical."
        }
      ],
      "synonyms": [
        "鑊香 (Wok hoeng)"
      ],
      "register": "飲食術語 / 核心概念 (Culinary Term)"
    }
  ],
  "korean": [
    {
      "term": "안녕하세요 (Annyeonghaseyo)",
      "definition": "Hello / Standard polite greeting in Korean",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "안녕하십니까 (Annyeonghasimnikka)",
      "definition": "Hello / Formal high-respect greeting used in business, news, and military",
      "category": "Greeting",
      "level": "A2"
    },
    {
      "term": "감사합니다 / 고맙습니다 (Gamsahamnida / Gomapseumnida)",
      "definition": "Thank you very much (Formal/polite gratitude)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "죄송합니다 / 미안합니다 (Joesonghamnida / Mianhamnida)",
      "definition": "I am sorry (Formal respect vs standard polite apology)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "실례합니다 (Sillyehamnida)",
      "definition": "Excuse me (For polite interruption or passing by)",
      "category": "Etiquette",
      "level": "A1"
    },
    {
      "term": "저기요 (Jeogiyo)",
      "definition": "Excuse me over here! (Standard call to catch restaurant/shop staff attention)",
      "category": "Dining Etiquette",
      "level": "A1"
    },
    {
      "term": "계산해 주세요 (Gyesan-hae juseyo)",
      "definition": "Please give us the bill / Settle check at restaurants and stores",
      "category": "Dining & Commerce",
      "level": "A1"
    },
    {
      "term": "얼마예요? (Eolmayeyo?)",
      "definition": "How much is it? (Shopping and pricing inquiry)",
      "category": "Shopping",
      "level": "A1"
    },
    {
      "term": "화장실이 어디예요? (Hwajangsil-i eodiyeyo?)",
      "definition": "Where is the restroom?",
      "category": "Navigation",
      "level": "A1"
    },
    {
      "term": "만나서 반갑습니다 (Mannaseo bangapseumnida)",
      "definition": "Pleased to meet you (Standard polite introduction)",
      "category": "Greeting",
      "level": "A1"
    },
    {
      "term": "안녕히 가세요 / 안녕히 계세요 (Annyeonghi gaseyo / Annyeonghi gyeseyo)",
      "definition": "Goodbye to person leaving (Go in peace) vs Goodbye to person staying (Stay in peace)",
      "category": "Parting",
      "level": "A1"
    },
    {
      "term": "존댓말 vs 반말 (Jondaetmal vs Banmal)",
      "definition": "Fundamental Korean sociolinguistic divide: polite/honorific language vs informal casual speech",
      "category": "Sociolinguistics",
      "level": "A1 / A2"
    },
    {
      "term": "주격조사：이/가 vs 은/는 (Subject vs Topic Particles)",
      "definition": "이/가 (Grammatical subject identifier) vs 은/는 (Topic marker / thematic contrast)",
      "category": "Grammar",
      "level": "A1"
    },
    {
      "term": "목적격조사：을/를 (Object Particles)",
      "definition": "Direct object marker attached to nouns",
      "category": "Grammar",
      "level": "A1"
    },
    {
      "term": "존칭어미：-(으)시- (Subject Honorific Infix)",
      "definition": "Infix inserted into verbs/adjectives to elevate the noble subject (e.g. 가시다, 드시다)",
      "category": "Grammar & Honorifics",
      "level": "A2"
    },
    {
      "term": "해요체 vs 하십시오체 (Polite Informal vs Formal Suffixes)",
      "definition": "-아/어요 (Daily polite standard) vs -(으)십시오/-(으)ㅂ니다 (Formal high register)",
      "category": "Grammar",
      "level": "A1 / A2"
    },
    {
      "term": "연음 법칙 (Liaison & Pronunciation Rules)",
      "definition": "Batchim (final consonant) sound changes: liaison, nasalization, aspiration, and palatalization",
      "category": "Phonology",
      "level": "A1 / A2"
    },
    {
      "term": "정 (Jeong)",
      "definition": "Deep, unconditional emotional attachment, bonding, empathy, and collective warmth cultivated through shared time, experiences, and mutual care (quintessential Korean cultural psychology).",
      "category": "한국 문화와 심리 (Korean Psychology & Culture)",
      "level": "TOPIK II / B2",
      "pronunciation": "정 [tɕʌŋ]",
      "partOfSpeech": "명사 (Noun)",
      "examples": [
        {
          "target": "오랜 세월을 함께 보낸 이웃 주민들 사이에는 끈끈한 정이 넘쳐납니다.",
          "translation": "Between neighboring residents who have spent long years together, deep and sticky jeong overflows."
        },
        {
          "target": "한국 사회에서 정은 단순한 호감을 넘어 서로를 가족처럼 보살피는 연대감입니다.",
          "translation": "In Korean society, jeong transcends simple liking to become a sense of solidarity caring for one another like family."
        }
      ],
      "synonyms": [
        "인정 (Injeong)",
        "애정 (Aejeong)",
        "유대감 (Yudaegam)"
      ],
      "register": "일반 / 문화적 핵심어 (Core Cultural Noun)",
      "notes": "Often described as untranslatable, distinguishing Korean interpersonal bonds from individualistic affection."
    },
    {
      "term": "한 (Han)",
      "definition": "Deep collective grief, unavenged sorrow, enduring resilience, and unresolved anguish transformed into artistic sublimity (Pansori, poetry, cinema).",
      "category": "전통 문화와 정서 (Tradition & Aesthetics)",
      "level": "TOPIK II / C1",
      "pronunciation": "한 [haːn]",
      "partOfSpeech": "명사 (Noun)",
      "examples": [
        {
          "target": "판소리의 구슬픈 가락에는 우리 민족의 오랜 역사적 한이 서려 있습니다.",
          "translation": "In the sorrowful melodies of Pansori, our people's long historical han is deeply imbued."
        },
        {
          "target": "한국 문학은 비극적 아픔인 한을 승화시켜 숭고한 예술적 아름다움으로 표현합니다.",
          "translation": "Korean literature sublimates the tragic pain of han, expressing it as sublime artistic beauty."
        }
      ],
      "synonyms": [
        "비애 (Biae)",
        "원한 (Wonhan)",
        "슬픔 (Seulpeum)"
      ],
      "register": "문학 / 민족 정서 (Literary / Aesthetic)"
    },
    {
      "term": "눈치 (Nunchi)",
      "definition": "The subtle art and speed of gauging other people's thoughts, moods, and social atmosphere (reading the room) in order to respond with prompt tact and harmony.",
      "category": "사회 생활과 예절 (Social Tact & Etiquette)",
      "level": "TOPIK I / A2",
      "pronunciation": "눈치 [nuntɕʰi]",
      "partOfSpeech": "명사 (Noun)",
      "examples": [
        {
          "target": "눈치가 빠른 사람은 직장과 대인 관계에서 갈등을 원만하게 예방합니다.",
          "translation": "A person with quick nunchi smoothly prevents conflict in the workplace and interpersonal relationships."
        },
        {
          "target": "모두가 침묵할 때 상황의 분위기를 파악하는 눈치를 발휘해야 합니다.",
          "translation": "When everyone is silent, one must exercise nunchi to grasp the situational atmosphere."
        }
      ],
      "synonyms": [
        "기지 (Giji)",
        "처세술 (Cheosesul)",
        "센스 (Sense)"
      ],
      "register": "일상 / 필수 사회 어휘 (Everyday Social Concept)"
    },
    {
      "term": "회식 (Hoesik)",
      "definition": "Corporate after-hours team dining and drinking culture fostering team cohesion and informal communication",
      "category": "Workplace Culture",
      "level": "A2"
    },
    {
      "term": "치맥 (Chimaek)",
      "definition": "Iconic modern culinary combination of Korean fried chicken (Chikin) and draft beer (Maekju)",
      "category": "Culinary Culture",
      "level": "A1"
    },
    {
      "term": "김치 & 김장 (Kimchi & Kimjang)",
      "definition": "Fermented seasoned cabbage/radish and the UNESCO-listed seasonal communal kimchi-making tradition",
      "category": "Culinary Heritage",
      "level": "A1"
    },
    {
      "term": "배달의민족 (Baemin) & 쿠팡 (Coupang)",
      "definition": "Dominant hyper-speed food delivery and same-day Rocket Delivery e-commerce super-apps",
      "category": "Daily Life & Tech",
      "level": "A2"
    },
    {
      "term": "티머니 (T-Money)",
      "definition": "Contactless smart transit card used seamlessly across Seoul metro, buses, and convenience stores",
      "category": "Transit",
      "level": "A1"
    },
    {
      "term": "KTX (Korea Train Express)",
      "definition": "High-speed rail network connecting Seoul to Busan in under 2.5 hours",
      "category": "Transit",
      "level": "A2"
    },
    {
      "term": "손이 크다 (Son-i keuda)",
      "definition": "Idiom: to have big hands / to be extremely generous and prepare food in massive quantities",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "발이 넓다 (Bal-i neolpda)",
      "definition": "Idiom: to have wide feet / to have a vast network of connections and know everyone",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "귀가 얇다 (Gwi-ga yalpda)",
      "definition": "Idiom: to have thin ears / to be easily persuaded or gullible",
      "category": "Idiom",
      "level": "B1"
    },
    {
      "term": "그림의 떡 (Geurim-ui tteok)",
      "definition": "Idiom: rice cake in a picture / something unattainable or pie in the sky",
      "category": "Proverb / Idiom",
      "level": "B1"
    },
    {
      "term": "고생 끝에 낙이 온다 (Gosaeng kkeut-e nag-i onda)",
      "definition": "Proverb: Pleasure comes at the end of hardship / Hard work pays off",
      "category": "Proverb",
      "level": "B1"
    },
    {
      "term": "전세 vs 월세 (Jeonse vs Wolse)",
      "definition": "Unique Korean housing lease system: large lump-sum key money deposit returned at lease end (Jeonse) vs monthly rent (Wolse)",
      "category": "Housing & Finance",
      "level": "B2"
    },
    {
      "term": "보증금 (Bojeunggeum)",
      "definition": "Housing security deposit held by landlord during residential rental leases",
      "category": "Housing & Finance",
      "level": "B1"
    },
    {
      "term": "국민건강보험 (National Health Insurance - NHI)",
      "definition": "Universal compulsory national healthcare system providing comprehensive medical coverage",
      "category": "Healthcare & Public Admin",
      "level": "B1"
    },
    {
      "term": "외국인등록증 (Alien Registration Card - ARC)",
      "definition": "Official legal identification card for foreign residents living in South Korea",
      "category": "Civic Administration",
      "level": "A2"
    },
    {
      "term": "근로계약서 (Standard Labor Contract)",
      "definition": "Statutory written employment contract mandated by the Ministry of Employment and Labor",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "수습기간 (Probationary Period)",
      "definition": "Initial trial period (typically 3 months) under Korean labor law",
      "category": "Labor Law",
      "level": "B2"
    },
    {
      "term": "연차유급휴가 (Paid Annual Leave)",
      "definition": "Statutory paid vacation days earned by employees based on attendance and tenure",
      "category": "Labor Law & HR",
      "level": "B2"
    },
    {
      "term": "퇴직금 (Severance Pay)",
      "definition": "Mandatory statutory retirement severance benefit equal to 30 days’ average wage per year of continuous service",
      "category": "Labor Law & Finance",
      "level": "C1"
    },
    {
      "term": "법인인감증명서 (Corporate Seal Certificate)",
      "definition": "Official certificate issued by the court registry validating the company’s legal seal",
      "category": "Corporate Governance",
      "level": "C1"
    },
    {
      "term": "회의록 (Meeting Minutes)",
      "definition": "Official business record documenting discussion agenda, attendee votes, and executive decisions",
      "category": "Business Communication",
      "level": "B2"
    },
    {
      "term": "사업자등록증 (Business Registration Certificate)",
      "definition": "Fundamental tax and corporate registration certificate issued by the National Tax Service",
      "category": "Business & Tax",
      "level": "B2"
    },
    {
      "term": "비밀유지계약서 (NDA)",
      "definition": "Non-disclosure agreement protecting proprietary technological and commercial trade secrets",
      "category": "Legal & Contract",
      "level": "C1"
    },
    {
      "term": "품의서 & 결재 (Approval Proposal & Gyeoljae)",
      "definition": "Traditional hierarchical corporate document drafting system where proposals move up the executive approval chain",
      "category": "Corporate Management",
      "level": "C1"
    },
    {
      "term": "K-컬처 (K-Culture: K-Pop, K-Drama, K-Beauty)",
      "definition": "Global cultural phenomenon driving worldwide Korean language study, entertainment, and design trends",
      "category": "Contemporary Culture",
      "level": "A1 / A2"
    },
    {
      "term": "효도 (Hyodo)",
      "pronunciation": "효도 [hjoːdo]",
      "partOfSpeech": "명사 (Noun)",
      "definition": "Filial piety; sincere devotion, respect, gratitude, and care shown by children toward their parents and ancestors.",
      "category": "유교 전통과 윤리 (Confucian Ethics)",
      "level": "TOPIK I / A2",
      "examples": [
        {
          "target": "어버이날을 맞아 부모님께 감사의 마음을 전하며 효도를 실천했습니다.",
          "translation": "Marking Parents' Day, I conveyed my gratitude to my parents and practiced filial piety."
        },
        {
          "target": "전통적으로 효도는 모든 도덕적 행위의 근본으로 여겨져 왔습니다.",
          "translation": "Traditionally, filial piety has been regarded as the root of all moral action."
        }
      ],
      "synonyms": [
        "효심 (Hyosim)",
        "효행 (Hyohaeng)"
      ],
      "antonyms": [
        "불효 (Bulhyo - unfilial conduct)"
      ],
      "register": "공식 / 윤리 (Formal / Ethical)"
    }
  ],
  "cs110": [
    {
      "term": "Big-O Notation (O(f(n)))",
      "definition": "Asymptotic upper bound characterizing worst-case algorithmic runtime growth rate",
      "category": "Algorithms",
      "level": "Academic"
    },
    {
      "term": "Big-Omega (Ω) & Big-Theta (Θ)",
      "definition": "Asymptotic lower bound (best-case/lower limit) and tight bound (exact asymptotic growth rate)",
      "category": "Complexity Theory",
      "level": "Academic"
    },
    {
      "term": "Master Theorem",
      "definition": "Analytical formula for solving divide-and-conquer recurrences of the form T(n) = aT(n/b) + f(n)",
      "category": "Complexity Theory",
      "level": "Academic"
    },
    {
      "term": "Amortized Analysis",
      "definition": "Method of analyzing algorithms that considers total time required for a sequence of operations averaged over all operations",
      "category": "Algorithms",
      "level": "Academic"
    },
    {
      "term": "AVL Tree & Red-Black Tree",
      "definition": "Self-balancing binary search trees guaranteeing O(log n) worst-case search, insert, and delete operations",
      "category": "Data Structures",
      "level": "Academic"
    },
    {
      "term": "B-Tree & B+ Tree",
      "definition": "Multiway self-balancing search trees optimized for block storage, databases, and disk I/O efficiency",
      "category": "Data Structures",
      "level": "Academic"
    },
    {
      "term": "Binary Heap & Priority Queue",
      "definition": "Complete binary tree satisfying the heap property (min-heap/max-heap) supporting O(log n) insertions and extractions",
      "category": "Data Structures",
      "level": "Academic"
    },
    {
      "term": "Hash Table & Hash Collisions",
      "definition": "Data structure mapping keys to values using hash functions, resolved via separate chaining or open addressing (linear/quadratic probing)",
      "category": "Data Structures",
      "level": "Academic"
    },
    {
      "term": "Bloom Filter",
      "definition": "Space-efficient probabilistic data structure testing whether an element is definitely not in a set or possibly in a set",
      "category": "Advanced Data Structures",
      "level": "Academic"
    },
    {
      "term": "Trie (Prefix Tree)",
      "definition": "Tree-based retrieval data structure for storing strings and performing prefix search in O(k) time where k is key length",
      "category": "Data Structures",
      "level": "Academic"
    },
    {
      "term": "Disjoint Set Union (Union-Find)",
      "definition": "Data structure tracking elements partitioned into disjoint subsets with path compression and union by rank achieving near-O(1) α(n)",
      "category": "Data Structures",
      "level": "Academic"
    },
    {
      "term": "Dijkstra’s Algorithm",
      "definition": "Greedy single-source shortest path algorithm on non-negative weighted graphs running in O((V + E) log V) with Fibonacci/binary heap",
      "category": "Graph Theory",
      "level": "Academic"
    },
    {
      "term": "Bellman-Ford Algorithm",
      "definition": "Dynamic programming shortest path algorithm handling negative edge weights and detecting negative weight cycles in O(V * E)",
      "category": "Graph Theory",
      "level": "Academic"
    },
    {
      "term": "Floyd-Warshall Algorithm",
      "definition": "All-pairs shortest path dynamic programming algorithm with O(V³) time complexity",
      "category": "Graph Theory",
      "level": "Academic"
    },
    {
      "term": "A* Search Algorithm",
      "definition": "Heuristic graph search algorithm using f(n) = g(n) + h(n) with admissible and consistent heuristics",
      "category": "Search & AI",
      "level": "Academic"
    },
    {
      "term": "Kruskal’s & Prim’s Algorithms",
      "definition": "Minimum Spanning Tree algorithms: edge-centric greedy with Union-Find O(E log E) vs vertex-centric greedy with Priority Queue O(E + V log V)",
      "category": "Graph Theory",
      "level": "Academic"
    },
    {
      "term": "Topological Sort & Kahn’s Algorithm",
      "definition": "Linear ordering of vertices in a Directed Acyclic Graph (DAG) using in-degrees and queue traversal",
      "category": "Graph Theory",
      "level": "Academic"
    },
    {
      "term": "Tarjan’s & Kosaraju’s Algorithms",
      "definition": "Strongly Connected Components (SCC) decomposition algorithms on directed graphs using DFS traversals",
      "category": "Graph Theory",
      "level": "Academic"
    },
    {
      "term": "Dynamic Programming (Memoization vs Tabulation)",
      "definition": "Top-down recursive memoization vs bottom-up iterative table construction for overlapping subproblems and optimal substructure",
      "category": "Dynamic Programming",
      "level": "Academic"
    },
    {
      "term": "Knapsack Problem (0/1 vs Fractional)",
      "definition": "NP-complete 0/1 integer programming dynamic programming vs greedy solution for fractional knapsack",
      "category": "Dynamic Programming",
      "level": "Academic"
    },
    {
      "term": "Longest Common Subsequence (LCS)",
      "definition": "Classic dynamic programming problem finding the longest shared sequence of characters between two strings in O(m * n)",
      "category": "Dynamic Programming",
      "level": "Academic"
    },
    {
      "term": "QuickSort & Median-of-Three Partitioning",
      "definition": "Divide-and-conquer sorting algorithm running in O(n log n) expected time with in-place Lomuto or Hoare partitioning",
      "category": "Algorithms",
      "level": "Academic"
    },
    {
      "term": "MergeSort & TimSort",
      "definition": "Stable O(n log n) divide-and-conquer sorting algorithm and its adaptive hybrid derivative used in Python and Java standard libraries",
      "category": "Algorithms",
      "level": "Academic"
    },
    {
      "term": "KMP (Knuth-Morris-Pratt) Algorithm",
      "definition": "String matching algorithm utilizing the Longest Prefix Suffix (LPS) table to achieve O(n + m) linear search time",
      "category": "String Algorithms",
      "level": "Academic"
    },
    {
      "term": "NP-Completeness & Cook-Levin Theorem",
      "definition": "Class of decision problems verifiable in polynomial time whose hardest instances can model all NP problems (SAT, Clique, TSP)",
      "category": "Complexity Theory",
      "level": "Academic"
    }
  ],
  "b110": [
    {
      "term": "Price Elasticity of Demand (PED)",
      "definition": "Percentage change in quantity demanded divided by percentage change in price, measuring consumer price sensitivity",
      "category": "Microeconomics",
      "level": "Academic"
    },
    {
      "term": "Cross-Price Elasticity of Demand (XED)",
      "definition": "Responsiveness of demand for one good when price of another changes, identifying complements (negative) and substitutes (positive)",
      "category": "Microeconomics",
      "level": "Academic"
    },
    {
      "term": "Income Elasticity of Demand (YED)",
      "definition": "Responsiveness of demand to changes in real income, categorizing normal, luxury (>1), and inferior (<0) goods",
      "category": "Microeconomics",
      "level": "Academic"
    },
    {
      "term": "Marginal Utility & Law of Diminishing Marginal Utility",
      "definition": "Additional satisfaction gained from consuming one more unit of a good decreases with each additional unit",
      "category": "Microeconomics",
      "level": "Academic"
    },
    {
      "term": "Indifference Curve & Marginal Rate of Substitution (MRS)",
      "definition": "Graphical locus of consumption bundles yielding equal utility, whose slope represents MRS",
      "category": "Microeconomics",
      "level": "Academic"
    },
    {
      "term": "Consumer Surplus & Producer Surplus",
      "definition": "Difference between consumer willingness to pay vs price paid, and market price received vs marginal cost of production",
      "category": "Microeconomics",
      "level": "Academic"
    },
    {
      "term": "Deadweight Loss (Allocative Inefficiency)",
      "definition": "Loss of total economic surplus caused by market distortions such as monopolies, price controls, or taxes",
      "category": "Microeconomics",
      "level": "Academic"
    },
    {
      "term": "Perfect Competition",
      "definition": "Market structure characterized by infinite price-taking firms, homogeneous goods, zero transaction costs, and free entry/exit where P = MC = MR",
      "category": "Market Structures",
      "level": "Academic"
    },
    {
      "term": "Monopoly & Price Discrimination",
      "definition": "Single seller with high entry barriers maximizing profit where MR = MC, extracting surplus via 1st, 2nd, and 3rd degree pricing",
      "category": "Market Structures",
      "level": "Academic"
    },
    {
      "term": "Oligopoly, Cournot & Bertrand Duopoly",
      "definition": "Market dominated by few interdependent firms competing via quantities (Cournot) or price cuts (Bertrand)",
      "category": "Market Structures",
      "level": "Academic"
    },
    {
      "term": "Nash Equilibrium",
      "definition": "Strategic state where no player can unilaterally deviate to improve their expected payoff given opponents’ fixed strategies",
      "category": "Game Theory",
      "level": "Academic"
    },
    {
      "term": "Prisoner’s Dilemma & Dominant Strategy",
      "definition": "Game theoretic model illustrating why two rational individuals might fail to cooperate even when cooperation is Pareto-optimal",
      "category": "Game Theory",
      "level": "Academic"
    },
    {
      "term": "Adverse Selection & The Market for Lemons",
      "definition": "Information asymmetry prior to transaction where low-quality goods or high-risk participants crowd out high-quality ones (Akerlof)",
      "category": "Information Economics",
      "level": "Academic"
    },
    {
      "term": "Moral Hazard & Principal-Agent Problem",
      "definition": "Post-contractual behavioral risk where an insured or unmonitored agent takes excessive risk knowing the principal bears the loss",
      "category": "Information Economics",
      "level": "Academic"
    },
    {
      "term": "Pigouvian Tax & Negative Externalities",
      "definition": "Remedial tax imposed on activities generating negative social spillovers to internalize marginal external costs (e.g. carbon tax)",
      "category": "Public Economics",
      "level": "Academic"
    },
    {
      "term": "Coase Theorem",
      "definition": "Economic proposition that if property rights are well-defined and transaction costs are zero, parties will bargain to the efficient allocation of resources",
      "category": "Institutional Economics",
      "level": "Academic"
    },
    {
      "term": "Public Goods & The Free-Rider Problem",
      "definition": "Non-excludable and non-rivalrous goods (national defense, clean air) suffering from market under-provision due to free riders",
      "category": "Public Economics",
      "level": "Academic"
    },
    {
      "term": "Prospect Theory & S-Shaped Value Function",
      "definition": "Kahneman-Tversky behavioral framework showing individuals evaluate outcomes as gains and losses relative to a reference point",
      "category": "Behavioral Economics",
      "level": "Academic"
    },
    {
      "term": "Loss Aversion",
      "definition": "Behavioral finding that the psychological pain of losing $100 is 2 to 2.5 times greater than the pleasure of gaining $100",
      "category": "Behavioral Economics",
      "level": "Academic"
    },
    {
      "term": "Heuristics & Biases (Availability & Representativeness)",
      "definition": "Cognitive mental shortcuts leading to systematic deviations from Bayesian rationality and probability assessment",
      "category": "Behavioral Economics",
      "level": "Academic"
    },
    {
      "term": "Anchoring and Adjustment",
      "definition": "Cognitive bias where individuals rely too heavily on an initial piece of information offered (the \"anchor\") when making decisions",
      "category": "Behavioral Economics",
      "level": "Academic"
    },
    {
      "term": "Hyperbolic Discounting & Present Bias",
      "definition": "Tendency to prefer smaller immediate rewards over larger future rewards with dynamic inconsistency over time",
      "category": "Behavioral Economics",
      "level": "Academic"
    },
    {
      "term": "Nudge Theory & Choice Architecture",
      "definition": "Thaler-Sunstein behavioral policy design gently altering choice environments without forbidding options or changing economic incentives",
      "category": "Behavioral Economics",
      "level": "Academic"
    },
    {
      "term": "Endowment Effect",
      "definition": "Phenomenon where individuals value an item more merely because they own it, creating a disparity between WTP and WTA",
      "category": "Behavioral Economics",
      "level": "Academic"
    },
    {
      "term": "Bounded Rationality",
      "definition": "Simon’s cognitive framework recognizing that human decision-making is limited by cognitive bandwidth, imperfect information, and finite time",
      "category": "Behavioral Economics",
      "level": "Academic"
    }
  ],
  "b111": [
    {
      "term": "Discounted Cash Flow (DCF)",
      "definition": "Valuation methodology estimating intrinsic enterprise value based on projected unlevered free cash flows discounted via WACC",
      "category": "Corporate Finance",
      "level": "Academic"
    },
    {
      "term": "Weighted Average Cost of Capital (WACC)",
      "definition": "Proportionately weighted calculation of a firm’s blended cost of equity (via CAPM) and after-tax cost of debt",
      "category": "Corporate Finance",
      "level": "Academic"
    },
    {
      "term": "Capital Asset Pricing Model (CAPM)",
      "definition": "Formula calculating expected cost of equity: Re = Rf + β(Rm - Rf), compensating for systematic risk (beta)",
      "category": "Asset Pricing",
      "level": "Academic"
    },
    {
      "term": "Unlevered Free Cash Flow (UFCF)",
      "definition": "Cash generated by core operations available to all capital providers: EBIT*(1-t) + D&A - CapEx - ΔNWC",
      "category": "Corporate Finance",
      "level": "Academic"
    },
    {
      "term": "Terminal Value (Gordon Growth vs Exit Multiple)",
      "definition": "Value of cash flows beyond forecast horizon calculated via perpetual growth TV = FCF*(1+g)/(WACC-g) or EV/EBITDA multiple",
      "category": "Valuation",
      "level": "Academic"
    },
    {
      "term": "EBITDA & Adjusted EBITDA",
      "definition": "Operating profitability metric stripping out non-cash depreciation, amortization, financing structure, and non-recurring expenses",
      "category": "Financial Accounting",
      "level": "Academic"
    },
    {
      "term": "Enterprise Value (EV) vs Equity Value",
      "definition": "Total market value of operating business (Equity Value + Total Debt + Preferred Stock + Minority Interest - Cash) vs Market Cap",
      "category": "Valuation",
      "level": "Academic"
    },
    {
      "term": "Net Working Capital (NWC)",
      "definition": "Operating liquidity required for daily business: Operating Current Assets (AR, Inventory) minus Operating Current Liabilities (AP, Accruals)",
      "category": "Corporate Finance",
      "level": "Academic"
    },
    {
      "term": "Capital Expenditure (CapEx)",
      "definition": "Funds used by a company to acquire, upgrade, and maintain physical assets such as property, plants, buildings, or equipment",
      "category": "Corporate Finance",
      "level": "Academic"
    },
    {
      "term": "Net Present Value (NPV) & IRR",
      "definition": "Capital budgeting criteria: absolute net value added (NPV > 0) and the discount rate equating NPV to zero (Internal Rate of Return)",
      "category": "Capital Budgeting",
      "level": "Academic"
    },
    {
      "term": "Comparable Companies Analysis (Trading Comps)",
      "definition": "Relative valuation benchmarking peer multiples: EV/Revenue, EV/EBITDA, P/E, and P/B ratios",
      "category": "Valuation",
      "level": "Academic"
    },
    {
      "term": "Precedent Transactions Analysis (M&A Comps)",
      "definition": "Relative valuation methodology analyzing historical acquisition multiples reflecting control premiums paid in completed takeovers",
      "category": "M&A Valuation",
      "level": "Academic"
    },
    {
      "term": "Leveraged Buyout (LBO) & Debt Tranches",
      "definition": "Acquisition of a company primarily funded with senior secured bank debt, mezzanine notes, and sponsor equity to achieve 20%+ IRR",
      "category": "Private Equity",
      "level": "Academic"
    },
    {
      "term": "Modigliani-Miller Theorem",
      "definition": "Proposition that under perfect capital markets, firm value is independent of capital structure, altered by tax shields in reality",
      "category": "Capital Structure",
      "level": "Academic"
    },
    {
      "term": "Interest Tax Shield",
      "definition": "Value created by corporate tax deductibility of interest expense on debt: Annual Tax Shield = Interest Expense * Marginal Tax Rate",
      "category": "Corporate Finance",
      "level": "Academic"
    },
    {
      "term": "DuPont Analysis (3-Step & 5-Step)",
      "definition": "Deconstruction of Return on Equity (ROE) into Net Profit Margin, Asset Turnover, and Financial Leverage multiplier",
      "category": "Financial Analysis",
      "level": "Academic"
    },
    {
      "term": "Debt Service Coverage Ratio (DSCR)",
      "definition": "Debt capacity metric assessing ability to service debt: Net Operating Income divided by Total Debt Service (Principal + Interest)",
      "category": "Credit Analysis",
      "level": "Academic"
    },
    {
      "term": "Leverage Ratios (Net Debt / EBITDA)",
      "definition": "Credit rating and solvency metrics measuring years of cash flow required to pay off debt obligations",
      "category": "Credit Analysis",
      "level": "Academic"
    },
    {
      "term": "Working Capital Cash Conversion Cycle (CCC)",
      "definition": "Days Sales Outstanding (DSO) + Days Inventory Outstanding (DIO) minus Days Payable Outstanding (DPO)",
      "category": "Working Capital Mgmt",
      "level": "Academic"
    },
    {
      "term": "Accretion / Dilution Analysis",
      "definition": "M&A analysis determining whether pro forma Earnings Per Share (EPS) increases or decreases after an acquisition",
      "category": "M&A Analysis",
      "level": "Academic"
    },
    {
      "term": "Goodwill & Purchase Price Allocation (PPA)",
      "definition": "Intangible asset recorded when purchase price exceeds fair market value of acquired net identifiable assets",
      "category": "M&A Accounting",
      "level": "Academic"
    },
    {
      "term": "Bridge Financing & Mezzanine Debt",
      "definition": "Subordinated hybrid debt capital often featuring equity warrants or conversion rights filling gaps between senior debt and equity",
      "category": "Corporate Finance",
      "level": "Academic"
    },
    {
      "term": "Capital Structure & Pecking Order Theory",
      "definition": "Financing hierarchy preferring internal retained earnings first, debt second, and external equity issuance as last resort",
      "category": "Corporate Finance",
      "level": "Academic"
    },
    {
      "term": "Sensitivity Analysis & Football Field Chart",
      "definition": "Scenario matrix modeling changes in WACC/growth rates, visualized in valuation range comparison charts",
      "category": "Valuation Modeling",
      "level": "Academic"
    },
    {
      "term": "Synergies (Cost vs Revenue Synergies)",
      "definition": "Operational efficiencies (headcount reductions, shared software) and cross-selling upsides generated through business combinations",
      "category": "M&A Strategy",
      "level": "Academic"
    }
  ],
  "chess": [
    {
      "term": "En Passant",
      "definition": "Special pawn capture allowing a pawn that moved two squares forward to be captured diagonally by an enemy pawn on the fifth rank",
      "category": "Rules & Special Moves",
      "level": "Intermediate"
    },
    {
      "term": "Castling (Kingside & Queenside)",
      "definition": "Simultaneous king safety move (O-O or O-O-O) sliding the king two squares toward the rook while the rook jumps over the king",
      "category": "Rules & Special Moves",
      "level": "Beginner"
    },
    {
      "term": "Zugzwang",
      "definition": "Compulsion to move: a game state where any legal move a player makes will worsen their position",
      "category": "Endgame & Positional",
      "level": "Advanced"
    },
    {
      "term": "Fianchetto",
      "definition": "Bishop development pattern placing the bishop on the long diagonal (b2, g2, b7, g7) after advancing the adjacent knight pawn",
      "category": "Openings & Strategy",
      "level": "Intermediate"
    },
    {
      "term": "Zwischenzug (In-between Move)",
      "definition": "An unexpected intermediate tactic inserted before an expected recapture or reply, changing the evaluation",
      "category": "Tactics",
      "level": "Advanced"
    },
    {
      "term": "Pin (Absolute vs Relative)",
      "definition": "Tactic where an attacked piece cannot move because it would expose a king (absolute) or more valuable piece (relative) behind it",
      "category": "Tactics",
      "level": "Beginner"
    },
    {
      "term": "Fork",
      "definition": "Tactical double attack where a single piece (especially a knight or pawn) simultaneously attacks two or more enemy pieces",
      "category": "Tactics",
      "level": "Beginner"
    },
    {
      "term": "Skewer",
      "definition": "Attack on a valuable piece (such as a king or queen) along a line, forcing it to move and exposing a lesser piece behind it to capture",
      "category": "Tactics",
      "level": "Intermediate"
    },
    {
      "term": "Discovered Attack & Discovered Check",
      "definition": "Tactical strike where moving one piece unmasks an attack or check from a friendly piece behind it",
      "category": "Tactics",
      "level": "Intermediate"
    },
    {
      "term": "Double Check",
      "definition": "Discovered check where both the moving piece and the unmasked piece deliver check simultaneously, forcing a king move",
      "category": "Tactics",
      "level": "Intermediate"
    },
    {
      "term": "Pawn Structure (Isolani, Doubled, Passed)",
      "definition": "Pawn formations: isolated pawns with no friendly pawns on adjacent files, doubled pawns on same file, and passed pawns with no opposing blockers",
      "category": "Strategy & Pawn Structure",
      "level": "Intermediate"
    },
    {
      "term": "Pawn Majority & Minority Attack",
      "definition": "Numerical pawn surplus on one flank, and the paradoxical strategy of advancing fewer pawns to create structural weaknesses in enemy majority",
      "category": "Positional Play",
      "level": "Advanced"
    },
    {
      "term": "Outpost",
      "definition": "A square protected by a friendly pawn that cannot be attacked or dislodged by enemy pawns, ideal for knights",
      "category": "Positional Play",
      "level": "Intermediate"
    },
    {
      "term": "Open File & Semi-Open File",
      "definition": "A vertical column on the board with no pawns (open) or with only enemy pawns (semi-open), vital for rook infiltration",
      "category": "Strategy",
      "level": "Intermediate"
    },
    {
      "term": "Seventh Rank Rook (Pig on the 7th)",
      "definition": "Rook positioned on the opponent’s second/seventh rank, attacking unadvanced pawns and trapping the king on the back rank",
      "category": "Rook Play",
      "level": "Intermediate"
    },
    {
      "term": "King Safety & Prophylaxis",
      "definition": "Preventative positional moves (e.g. h3/a3 Luft or prophylactic king moves) neutralizing opponent’s active plans before they occur (Nimzowitsch)",
      "category": "Positional Strategy",
      "level": "Advanced"
    },
    {
      "term": "Lucena Position (Bridge Building)",
      "definition": "Fundamental rook endgame winning technique using the rook to build a bridge shield against vertical checks",
      "category": "Endgame",
      "level": "Advanced"
    },
    {
      "term": "Philidor Position (Third Rank Defense)",
      "definition": "Essential rook endgame drawing defense cutting off the attacking king on the third/sixth rank before shifting to rear checks",
      "category": "Endgame",
      "level": "Advanced"
    },
    {
      "term": "Opposition & Key Squares (Outflanking)",
      "definition": "King endgame technique where kings stand opposite each other with one square between, forcing the other king to yield ground",
      "category": "Endgame",
      "level": "Intermediate"
    },
    {
      "term": "Triangulation",
      "definition": "Endgame maneuver losing a tempo with the king or piece to pass the move back to the opponent and put them in zugzwang",
      "category": "Endgame",
      "level": "Master"
    },
    {
      "term": "Greek Gift Sacrifice (Bxh7+ / Bxh2+)",
      "definition": "Classic kingside attacking bishop sacrifice breaking open the castled king’s defensive pawn shield",
      "category": "Attacking Tactics",
      "level": "Intermediate"
    },
    {
      "term": "Tactical Motifs (Deflection, Decoy, Interference)",
      "definition": "Tactics forcing pieces away from key defense squares (deflection), luring them onto fatal squares (decoy), or blocking lines (interference)",
      "category": "Tactics",
      "level": "Intermediate"
    },
    {
      "term": "Centipawn & Chess Engine Evaluation",
      "definition": "Unit of positional advantage (100 centipawns = 1 pawn) computed by Stockfish/Leela chess engines via minimax alpha-beta pruning",
      "category": "Engine Theory",
      "level": "Intermediate"
    },
    {
      "term": "Time Control & Increment",
      "definition": "Competitive clock systems: Classical, Rapid, Blitz, and Bullet with Fischer delay/increment added per move",
      "category": "Tournament Rules",
      "level": "Beginner"
    },
    {
      "term": "Touch-Move Rule (J’adoube)",
      "definition": "Strict tournament rule stating that a player who intentionally touches a piece must move or capture it, unless announcing \"J’adoube\" (I adjust)",
      "category": "Tournament Rules",
      "level": "Beginner"
    }
  ],
  "morse": [
    {
      "term": "Dit and Dah (Dots & Dashes)",
      "definition": "Fundamental acoustic/visual units of Morse code: 1 dit length vs 1 dah length (strictly equal to 3 dits)",
      "category": "Code Elements",
      "level": "Beginner"
    },
    {
      "term": "Timing Standards (1-3-7 Rule)",
      "definition": "Standard Morse timing: element gap = 1 dit, character gap = 3 dits, word gap = 7 dits",
      "category": "Timing & Rhythm",
      "level": "Beginner"
    },
    {
      "term": "Farnsworth Timing",
      "definition": "Pedagogical technique sending individual characters at high speed (e.g. 20 WPM) with exaggerated inter-character pauses to train ear recognition of sound rhythm",
      "category": "Training Methodology",
      "level": "Intermediate"
    },
    {
      "term": "Koch Method",
      "definition": "Progressive training method introducing characters at full speed one at a time, requiring 90%+ copy accuracy before adding the next symbol",
      "category": "Training Methodology",
      "level": "Intermediate"
    },
    {
      "term": "PARIS Standard",
      "definition": "Universal benchmark word (\"P-A-R-I-S \" = 50 dit duration units) used to calibrate Words Per Minute (WPM) transmission speed",
      "category": "Speed & Standards",
      "level": "Intermediate"
    },
    {
      "term": "Prosigns (Procedural Signals)",
      "definition": "Non-spacing combined characters sent without inter-letter pause: <AR> (End of message), <SK> (End of contact), <BT> (Break / Pause), <KN> (Go ahead specific station)",
      "category": "Operating Protocol",
      "level": "Intermediate"
    },
    {
      "term": "Q-Codes (QRM, QRN, QTH, QSL, QRO, QRP)",
      "definition": "3-letter brevity codes: QTH (location), QSL (confirm receipt), QRM (man-made interference), QRN (atmospheric static), QRP (low power transmission)",
      "category": "Brevity & Protocol",
      "level": "Intermediate"
    },
    {
      "term": "SOS (... --- ...)",
      "definition": "International distress signal adopted by the 1906 Berlin International Radiotelegraphic Convention for emergency maritime communication",
      "category": "Emergency Protocols",
      "level": "Beginner"
    },
    {
      "term": "CW (Continuous Wave)",
      "definition": "Unmodulated radio carrier wave keyed on and off to transmit Morse code signals over high-frequency (HF) bands",
      "category": "Radio Technology",
      "level": "Intermediate"
    },
    {
      "term": "Straight Key",
      "definition": "Traditional manual spring-loaded telegraph key actuated up and down by the operator’s wrist",
      "category": "Hardware & Equipment",
      "level": "Beginner"
    },
    {
      "term": "Iambic Keyer & Dual-Paddle",
      "definition": "Electronic keyer with two squeeze paddles that automatically generate alternating dits and dahs when squeezed",
      "category": "Hardware & Equipment",
      "level": "Intermediate"
    },
    {
      "term": "Bug (Vibroplex Semi-Automatic Key)",
      "definition": "Mechanical key invented by Horace Martin in 1904 using a vibrating reed pendulum to generate high-speed dits automatically while dahs are manual",
      "category": "Hardware History",
      "level": "Advanced"
    },
    {
      "term": "CQ Call (\"-.-. --.-\")",
      "definition": "General broadcast call inviting any amateur radio station to respond and initiate contact (\"Seeking You\")",
      "category": "Operating Protocol",
      "level": "Beginner"
    },
    {
      "term": "RST System (Readability, Strength, Tone)",
      "definition": "Standard signal report: Readability (1-5), Signal Strength (1-9), and Audio Tone purity (1-9, e.g. 599)",
      "category": "Operating Protocol",
      "level": "Intermediate"
    },
    {
      "term": "Zero-Beat",
      "definition": "Tuning the radio receiver frequency exactly to the incoming transmitter frequency so their audio heterodyne tone matches perfectly",
      "category": "Operating Technique",
      "level": "Advanced"
    },
    {
      "term": "BFO (Beat Frequency Oscillator)",
      "definition": "Receiver circuit generating a local radio frequency carrier to convert unmodulated CW RF signals into audible audio tones",
      "category": "Radio Electronics",
      "level": "Advanced"
    },
    {
      "term": "Sideband & Audio Pitch Frequency",
      "definition": "Audio sidetone frequency (typically 600-800 Hz) heard in headphones during Morse transmission and reception",
      "category": "Audio & Acoustics",
      "level": "Intermediate"
    },
    {
      "term": "Pse & Tnx (Brevity Abbreviations)",
      "definition": "Standard Morse shorthand contractions: PSE (Please), TNX/TKS (Thanks), 73 (Best regards), 88 (Hugs and kisses), CUL (See you later)",
      "category": "Abbreviations & Jargon",
      "level": "Beginner"
    },
    {
      "term": "Chirp & Key Clicks",
      "definition": "Undesirable transmission defects caused by transmitter oscillator instability (chirp) or excessively sharp square wave rise times (key clicks)",
      "category": "Signal Quality",
      "level": "Advanced"
    },
    {
      "term": "Break-In Operation (QSK)",
      "definition": "Full break-in capability allowing the receiver to listen between individual sent dits and dahs to hear interrupting stations",
      "category": "Operating Protocol",
      "level": "Advanced"
    },
    {
      "term": "Head Copy",
      "definition": "The skill of decoding and comprehending incoming Morse code directly in one’s mind without writing down each letter on paper",
      "category": "Cognitive Skills",
      "level": "Advanced"
    },
    {
      "term": "Sidetone",
      "definition": "Internal audio tone generated by a radio transmitter so the operator can hear their own Morse keying in real-time",
      "category": "Hardware & Audio",
      "level": "Intermediate"
    },
    {
      "term": "Maritime Morse & 500 kHz Emergency Guard",
      "definition": "Historic international maritime calling and distress radio frequency monitored continuously until satellite GMDSS transition",
      "category": "History & Maritime",
      "level": "Intermediate"
    },
    {
      "term": "Aeronautical NDB (Non-Directional Beacon)",
      "definition": "Ground-based aviation radio transmitter broadcasting continuous 2-3 letter Morse identification codes for aircraft navigation",
      "category": "Aviation Navigation",
      "level": "Intermediate"
    },
    {
      "term": "Optical Morse & Aldis Lamp",
      "definition": "Visual signaling using shuttered signal lamps to communicate between naval vessels under radio silence",
      "category": "Visual Signaling",
      "level": "Beginner"
    }
  ],
  "typing": [
    {
      "term": "Home Row (ASDF JKL;)",
      "definition": "The foundational base row where fingers rest by default with index finger tactile guide nubs on F and J",
      "category": "Fundamentals",
      "level": "Beginner"
    },
    {
      "term": "Words Per Minute (WPM)",
      "definition": "Standard measurement of typing speed calculated as (Total Characters Typed / 5) divided by elapsed time in minutes",
      "category": "Metrics & Speed",
      "level": "Beginner"
    },
    {
      "term": "Net WPM vs Gross WPM",
      "definition": "Gross typing speed minus errors: Net WPM = Gross WPM - (Uncorrected Errors / Time in Minutes)",
      "category": "Metrics & Accuracy",
      "level": "Intermediate"
    },
    {
      "term": "Touch Typing",
      "definition": "Typing muscle memory technique relying entirely on tactile finger positioning without looking down at the keyboard",
      "category": "Methodology",
      "level": "Beginner"
    },
    {
      "term": "Accuracy Rate (%)",
      "definition": "Percentage of correctly typed characters over total keystrokes attempted, with 98%+ being the benchmark for professional speed",
      "category": "Metrics & Quality",
      "level": "Intermediate"
    },
    {
      "term": "Burst Speed vs Sustained Speed",
      "definition": "Maximum short sprint typing speed on familiar ngram patterns vs consistent throughput over 10+ minute tests",
      "category": "Performance",
      "level": "Advanced"
    },
    {
      "term": "QWERTY vs Dvorak vs Colemak",
      "definition": "Keyboard layouts: traditional typewriter QWERTY vs ergonomic Dvorak (70% home row) and Colemak (optimizing common ngrams)",
      "category": "Layouts & Ergonomics",
      "level": "Intermediate"
    },
    {
      "term": "Key Rollover (N-Key Rollover / NKRO)",
      "definition": "Keyboard hardware capability to register unlimited simultaneous keypresses without ghosting or lost inputs",
      "category": "Hardware Technology",
      "level": "Intermediate"
    },
    {
      "term": "Mechanical Switches (Linear, Tactile, Clicky)",
      "definition": "Key switch mechanisms: smooth red linears, bump-actuated brown tactiles, and acoustic clicky blues",
      "category": "Hardware & Switches",
      "level": "Intermediate"
    },
    {
      "term": "Actuation Point & Bottoming Out",
      "definition": "Depth at which a keystroke registers electrically (typically 1.5-2.0mm) vs pressing the key completely down to the baseplate",
      "category": "Biomechanics & Hardware",
      "level": "Intermediate"
    },
    {
      "term": "Muscle Memory & Motor Cortex Chunking",
      "definition": "Cognitive motor process chunking frequent letter bigrams (th, he, in, er) and trigrams (ing, the, and) into single reflexive muscle firing",
      "category": "Cognitive Science",
      "level": "Advanced"
    },
    {
      "term": "Hand Alt-Tabbing & Wrist Ergonomics",
      "definition": "Optimal posture keeping wrists straight and hovering without resting palms on sharp desk edges to prevent carpal tunnel syndrome",
      "category": "Health & Ergonomics",
      "level": "Beginner"
    },
    {
      "term": "Key Chording & Modifier Keys",
      "definition": "Simultaneous combinations of Ctrl, Shift, Alt, Cmd, and Super keys to trigger system shortcuts and capital letters",
      "category": "Keyboard Operations",
      "level": "Beginner"
    },
    {
      "term": "Thumb Discipline on Spacebar",
      "definition": "Ergonomic convention of assigning the dominant thumb (or alternating thumbs) exclusively to the spacebar",
      "category": "Technique",
      "level": "Beginner"
    },
    {
      "term": "Pinky Finger Independence",
      "definition": "Building dexterity and strength in the weakest fourth and fifth digits for reaching Shift, Enter, Backspace, and Tab",
      "category": "Biomechanics",
      "level": "Intermediate"
    },
    {
      "term": "Hunt-and-Peck",
      "definition": "Inefficient two-finger visual typing method capped at 30-40 WPM with high error rates and physical strain",
      "category": "Technique Anti-patterns",
      "level": "Beginner"
    },
    {
      "term": "Keycap Profiles (Cherry, OEM, SA, DSA)",
      "definition": "Geometric sculpting and height contours of keyboard keycaps designed for natural finger reach",
      "category": "Hardware & Custom Keyboards",
      "level": "Intermediate"
    },
    {
      "term": "Tenkeyless (TKL) & 60% Form Factors",
      "definition": "Compact keyboard form factors removing the numeric numpad or navigation cluster to bring the mouse closer to the body",
      "category": "Hardware & Ergonomics",
      "level": "Intermediate"
    },
    {
      "term": "Monkeytype Benchmark Protocols",
      "definition": "Competitive online typing test platforms testing raw speed across 200/1k/10k vocabulary wordlists",
      "category": "Testing & Community",
      "level": "Intermediate"
    },
    {
      "term": "Stenography & Plover",
      "definition": "High-speed chorded court reporting methodology pressing multiple keys simultaneously to output entire syllables and words at 250+ WPM",
      "category": "Advanced Input Systems",
      "level": "Master"
    },
    {
      "term": "Backspace Penalty",
      "definition": "Speed degradation caused by stopping forward typing momentum to delete and re-type mistyped characters",
      "category": "Speed Psychology",
      "level": "Intermediate"
    },
    {
      "term": "Pacing & Rhythm",
      "definition": "Steady metronomic typing cadence preventing finger collisions and cognitive hesitation on complex punctuation",
      "category": "Speed Mastery",
      "level": "Advanced"
    },
    {
      "term": "Typing Ergonomics (Split Keyboards)",
      "definition": "Ortholinear and columnar split mechanical keyboards (Ergodox, Corne) aligning keys to natural finger travel",
      "category": "Ergonomics",
      "level": "Advanced"
    },
    {
      "term": "Blind Punctuation Typing",
      "definition": "Navigating top-row numbers, symbols (!@#$%^&*), and punctuation without looking away from screen text",
      "category": "Skill Mastery",
      "level": "Advanced"
    },
    {
      "term": "Vim Keybindings & HJKL Navigation",
      "definition": "Modal text editing navigation paradigm keeping fingers firmly anchored on the home row",
      "category": "Productivity",
      "level": "Advanced"
    }
  ],
  "scrabble": [
    {
      "term": "Bingo (50-Point Bonus)",
      "definition": "Playing all 7 tiles from the rack in a single turn, awarding a 50-point bonus added to the regular score",
      "category": "Scoring & Rules",
      "level": "Beginner"
    },
    {
      "term": "Hook (Front Hook & Back Hook)",
      "definition": "Adding a single letter to the beginning or end of an existing word on the board to create a completely new word (e.g. S-WORD, TRAIN-S)",
      "category": "Tactics",
      "level": "Beginner"
    },
    {
      "term": "Rack Management & Tile Balance",
      "definition": "Maintaining an optimal vowel-to-consonant ratio (ideally 3 vowels and 4 consonants) and holding high-scoring leave tiles",
      "category": "Strategy",
      "level": "Intermediate"
    },
    {
      "term": "Leave (Tile Leave)",
      "definition": "The tiles retained on the rack after playing a turn, evaluated by their probability of forming a future bingo (e.g. RETAIN, SATIRE)",
      "category": "Strategy & Probability",
      "level": "Advanced"
    },
    {
      "term": "Parallel Play",
      "definition": "Playing a word adjacent and parallel to an existing word, creating multiple cross-words on a single move",
      "category": "Tactics & Board Vision",
      "level": "Intermediate"
    },
    {
      "term": "Premium Squares (DWS, TWS, DLS, TLS)",
      "definition": "Board multiplier squares: Double Word Score, Triple Word Score, Double Letter Score, and Triple Letter Score",
      "category": "Board Geometry",
      "level": "Beginner"
    },
    {
      "term": "Triple-Triple (Nine-Timer)",
      "definition": "Covering two Triple Word Score squares on the same turn, multiplying the entire word’s base score by 9 (plus 50 for a bingo)",
      "category": "Scoring Mastery",
      "level": "Advanced"
    },
    {
      "term": "Two-Letter Words (Twos)",
      "definition": "Core tournament vocabulary (e.g. QI, ZA, JO, XI, AA, OE) essential for parallel plays, hook extensions, and tight defense",
      "category": "Vocabulary",
      "level": "Beginner"
    },
    {
      "term": "Q-Without-U Words",
      "definition": "Critical legal tournament words containing Q without U (e.g. QI, QAT, QAID, QANAT, TRANQ, SHEQEL)",
      "category": "Vocabulary",
      "level": "Intermediate"
    },
    {
      "term": "J, Q, X, Z (Power Tiles)",
      "definition": "High-value tiles worth 8 to 10 points that should be deployed immediately on multiplier squares rather than hoarded",
      "category": "Tile Management",
      "level": "Intermediate"
    },
    {
      "term": "Blank Tiles (Wildcards)",
      "definition": "The two blank tiles worth 0 points but providing massive bingo flexibility, valued strategically at ~25+ points in hand",
      "category": "Tile Valuation",
      "level": "Intermediate"
    },
    {
      "term": "Opening Move (Star Square)",
      "definition": "First play of the game covering the central pink star (Double Word Score), establishing board orientation",
      "category": "Openings",
      "level": "Beginner"
    },
    {
      "term": "Open Board vs Closed Board",
      "definition": "Open board with many open lanes inviting high-scoring bingos vs tight, cramped defensive board minimizing opponent scoring",
      "category": "Board Strategy",
      "level": "Advanced"
    },
    {
      "term": "Tracking & Tile Pool",
      "definition": "Keeping track of all 100 tiles played to calculate exactly which letters remain in the bag and on the opponent’s rack",
      "category": "Endgame & Analytics",
      "level": "Expert"
    },
    {
      "term": "Endgame Strategy & Out-Play",
      "definition": "The final phase when the bag is empty, calculating forced sequences to go out first and capture double the opponent’s unplayed points",
      "category": "Endgame",
      "level": "Expert"
    },
    {
      "term": "Challenge Rule & Phony",
      "definition": "Playing an illegal word hoping the opponent won’t challenge, vs formal tournament challenge penalty rules (5-point penalty vs lost turn)",
      "category": "Tournament Rules",
      "level": "Intermediate"
    },
    {
      "term": "Anagramming & Stem Study",
      "definition": "Studying 6-letter and 7-letter high-probability stems (e.g. TISANE, SATIRE, RETINA) that combine with any 7th letter to form bingos",
      "category": "Study Methods",
      "level": "Advanced"
    },
    {
      "term": "Lexicon & Word Authorities (CSW & TWL)",
      "definition": "Official tournament Scrabble word lists: Collins Scrabble Words (CSW / international) and NASPA Tournament Word List (NWL / North America)",
      "category": "Tournament Standards",
      "level": "Intermediate"
    },
    {
      "term": "Turn Exchange",
      "definition": "Passing a turn to trade 1 to 7 unwanted tiles (e.g. 5 vowels) with the bag when no productive board play is available",
      "category": "Tactics",
      "level": "Beginner"
    },
    {
      "term": "Blocker",
      "definition": "Strategically placing a word or consonant to block opponent access to open Triple Word Score or Triple Letter Score lanes",
      "category": "Defense",
      "level": "Intermediate"
    },
    {
      "term": "Overlapping Grid Scoring",
      "definition": "Summing the scores of the main played word plus all intersecting perpendicular words formed simultaneously",
      "category": "Scoring Rules",
      "level": "Beginner"
    },
    {
      "term": "Hot Spots",
      "definition": "Board areas near Triple Word or Triple Letter squares that can be exploited for massive turns if left unguarded",
      "category": "Board Vision",
      "level": "Intermediate"
    },
    {
      "term": "Vowel Dumps",
      "definition": "Short words used to shed excess vowels without opening up scoring lanes (e.g. AE, AI, AA, EAU, AGAVE)",
      "category": "Rack Management",
      "level": "Intermediate"
    },
    {
      "term": "Consonant Dumps",
      "definition": "Short words used to discard awkward consonants when vowel-starved (e.g. BRR, SH, HM, CWM, CRWTH)",
      "category": "Rack Management",
      "level": "Intermediate"
    },
    {
      "term": "Duplicate Scrabble",
      "definition": "Competitive format where all players receive identical tile racks and compete to find the single highest-scoring play each turn",
      "category": "Tournament Formats",
      "level": "Advanced"
    }
  ],
  "songwriting": [
    {
      "term": "Verse-Chorus-Bridge (AABA & VCVCBC)",
      "definition": "Foundational pop and contemporary song structure balancing storytelling verses, climactic choruses, and contrasting bridges",
      "category": "Song Form & Structure",
      "level": "Beginner"
    },
    {
      "term": "Hook",
      "definition": "The most memorable, catchy melodic or lyrical motif that sticks instantly in the listener’s memory",
      "category": "Melody & Concept",
      "level": "Beginner"
    },
    {
      "term": "Topline Writing",
      "definition": "Composing vocal melodies, lyrical concepts, and phrasing over a pre-existing instrumental backing track or chord progression",
      "category": "Commercial Songwriting",
      "level": "Intermediate"
    },
    {
      "term": "Prosody",
      "definition": "The perfect alignment between lyrical emotional meaning, natural spoken syllable stress, and musical rhythm/pitch contour",
      "category": "Lyrical Craft",
      "level": "Advanced"
    },
    {
      "term": "Chord Progressions (I-V-vi-IV & ii-V-I)",
      "definition": "Foundational harmonic engines: the universal 4-chord pop progression (I-V-vi-IV) and jazz cadence (ii-V-I)",
      "category": "Harmony & Chords",
      "level": "Beginner"
    },
    {
      "term": "Rhyme Schemes (AABB, ABAB, Slant Rhyme)",
      "definition": "Lyrical rhyming architectures: exact sonic matches vs evocative imperfect near-rhymes (slant/imperfect rhyme)",
      "category": "Lyrical Craft",
      "level": "Beginner"
    },
    {
      "term": "Pre-Chorus (Lift)",
      "definition": "Transitional section between verse and chorus building harmonic tension and melodic energy leading into the chorus payoff",
      "category": "Song Structure",
      "level": "Intermediate"
    },
    {
      "term": "Outro & Vamp",
      "definition": "Concluding section of a song fading out or repeating a hypnotic chord vamp and vocal ad-libs",
      "category": "Arrangement",
      "level": "Beginner"
    },
    {
      "term": "Cadence (Authentic, Half, Plagal, Deceptive)",
      "definition": "Harmonic punctuation ending musical phrases: V-I (authentic resolution), IV-I (Amen/plagal), V-vi (deceptive surprise)",
      "category": "Music Theory",
      "level": "Intermediate"
    },
    {
      "term": "Voice Leading",
      "definition": "The smooth, economical linear movement of individual vocal and instrumental voices from one chord to the next",
      "category": "Harmony",
      "level": "Advanced"
    },
    {
      "term": "Tritone Substitution",
      "definition": "Harmonic substitution replacing a dominant 7th chord with another dominant 7th chord three whole tones away (e.g. Db7 for G7)",
      "category": "Harmony",
      "level": "Advanced"
    },
    {
      "term": "Secondary Dominants (V/V & V/vi)",
      "definition": "Non-diatonic dominant chords borrowed from outside the home key to tonicize temporary target chords and inject harmonic color",
      "category": "Harmony",
      "level": "Advanced"
    },
    {
      "term": "Melodic Range & Tessitura",
      "definition": "The total pitch span of a vocal melody (range) and the comfortable register where most vocal notes lie (tessitura)",
      "category": "Vocal Writing",
      "level": "Intermediate"
    },
    {
      "term": "Motif & Development",
      "definition": "A short recurring musical fragment developed through inversion, retrograde, rhythmic augmentation, or pitch transposition",
      "category": "Melodic Composition",
      "level": "Intermediate"
    },
    {
      "term": "Lyric Meter & Scansion",
      "definition": "The rhythmic pattern of stressed and unstressed syllables across poetic lines (Iambic, Trochaic, Anapestic, Dactylic)",
      "category": "Poetic Meter",
      "level": "Intermediate"
    },
    {
      "term": "Show, Don’t Tell (Sensory Imagery)",
      "definition": "Lyrical technique painting vivid scenes using sensory details (taste, smell, touch, sound, sight) rather than abstract statements",
      "category": "Lyrical Craft",
      "level": "Intermediate"
    },
    {
      "term": "Syncopation",
      "definition": "Melodic and rhythmic accentuation of weak beats or off-beats, creating groove, danceability, and forward momentum",
      "category": "Rhythm & Groove",
      "level": "Beginner"
    },
    {
      "term": "Arrangement & Dynamic Arc",
      "definition": "The orchestration and layering of instruments across a song, building from intimate verse to explosive final chorus",
      "category": "Arrangement & Production",
      "level": "Intermediate"
    },
    {
      "term": "Call and Response",
      "definition": "Interactive musical pattern where a lead vocal line is immediately answered by a backing vocal or instrumental riff",
      "category": "Songwriting Devices",
      "level": "Beginner"
    },
    {
      "term": "Modal Mixture & Borrowed Chords",
      "definition": "Borrowing chords from the parallel minor/major key (e.g. iv minor in a major key) to evoke emotional bittersweetness",
      "category": "Harmony",
      "level": "Advanced"
    },
    {
      "term": "Topical Metaphor & Central Thesis",
      "definition": "The guiding thematic metaphor and narrative premise uniting verses, chorus, and title into a coherent artistic statement",
      "category": "Lyric Concept",
      "level": "Intermediate"
    },
    {
      "term": "Melodic Contour (Arch, Ascending)",
      "definition": "The visual and spatial trajectory of a melody rising to an emotional peak (climax) and resolving downward",
      "category": "Melody Design",
      "level": "Intermediate"
    },
    {
      "term": "Split Sheet & Publishing Royalties",
      "definition": "Legal document signed by co-writers specifying percentage ownership of composition (lyrics + music) and master rights",
      "category": "Music Business & Law",
      "level": "Intermediate"
    },
    {
      "term": "PRO (Performance Rights Organizations)",
      "definition": "Licensing bodies (ASCAP, BMI, SESAC, PRS) collecting public performance royalties for songwriters and publishers",
      "category": "Music Business",
      "level": "Intermediate"
    },
    {
      "term": "Vocal Comping & Double Tracking",
      "definition": "Production technique assembling the best vocal phrases from multiple takes into a master performance and layering doubles",
      "category": "Production & Vocals",
      "level": "Intermediate"
    }
  ],
  "mentalmath": [
    {
      "term": "Vedic Sutra: Nikhilam Navatashcaramam Dashatah",
      "definition": "\"All from 9 and the last from 10\" — rapid subtraction and base multiplication near powers of 10",
      "category": "Vedic Mathematics",
      "level": "Intermediate"
    },
    {
      "term": "Vedic Sutra: Ekadhikena Purvena",
      "definition": "\"By one more than the previous one\" — instantaneous mental squaring of numbers ending in 5: (N5)² = [N*(N+1)] 25",
      "category": "Vedic Mathematics",
      "level": "Beginner"
    },
    {
      "term": "Vedic Sutra: Anurupyena (Proportionality)",
      "definition": "Working with base numbers scaled by sub-bases (e.g. 50 as half of 100, or 200 as double 100) for fast mental products",
      "category": "Vedic Mathematics",
      "level": "Intermediate"
    },
    {
      "term": "Vertically and Crosswise (Urdhva Tiryagbhyam)",
      "definition": "General 2x2 and 3x3 mental multiplication algorithm computing cross-products from right to left in a single mental line",
      "category": "Vedic Mathematics",
      "level": "Advanced"
    },
    {
      "term": "Casting Out Nines",
      "definition": "Fast error-checking modular arithmetic technique computing digital roots modulo 9 to verify sums, differences, and products",
      "category": "Verification & Modular",
      "level": "Beginner"
    },
    {
      "term": "Casting Out Elevens",
      "definition": "Modular arithmetic verification checking alternating sum of digits modulo 11 for rigorous mathematical validation",
      "category": "Verification & Modular",
      "level": "Intermediate"
    },
    {
      "term": "Left-to-Right Arithmetic",
      "definition": "Calculating addition, subtraction, and multiplication from most significant digit to least significant digit for immediate estimation",
      "category": "Mental Arithmetic",
      "level": "Beginner"
    },
    {
      "term": "Complement Method for Subtraction",
      "definition": "Transforming subtraction into addition using 10s and 100s complements (e.g. 1000 - 674 = 326)",
      "category": "Mental Arithmetic",
      "level": "Beginner"
    },
    {
      "term": "Squaring Near a Base (Difference of Squares)",
      "definition": "Squaring numbers using (A + d)(A - d) + d² (e.g. 53² = 56 * 50 + 9 = 2809)",
      "category": "Algebraic Shortcuts",
      "level": "Intermediate"
    },
    {
      "term": "Multiplication by 11 (Neighbor Addition)",
      "definition": "Inserting the sum of adjacent digits between original digits (e.g. 43 * 11 = 4 [4+3] 3 = 473)",
      "category": "Mental Arithmetic",
      "level": "Beginner"
    },
    {
      "term": "Multiplication by 5, 25, 125",
      "definition": "Multiplying by 5 = (N / 2) * 10; by 25 = (N / 4) * 100; by 125 = (N / 8) * 1000",
      "category": "Mental Arithmetic",
      "level": "Beginner"
    },
    {
      "term": "Division by 5, 25, 50",
      "definition": "Dividing by 5 = (N * 2) / 10; by 25 = (N * 4) / 100; by 50 = (N * 2) / 100",
      "category": "Mental Arithmetic",
      "level": "Beginner"
    },
    {
      "term": "Percentage Shortcuts (10%, 1%, 5%, 50%)",
      "definition": "Decomposing complex percentages into additive friendly chunks (e.g. 15% = 10% + 5%; 18% = 20% - 2%)",
      "category": "Everyday Math",
      "level": "Beginner"
    },
    {
      "term": "Rule of 72",
      "definition": "Rapid mental formula estimating years required to double an investment: Years ≈ 72 / Annual Interest Rate",
      "category": "Financial Math",
      "level": "Beginner"
    },
    {
      "term": "Fraction-to-Decimal Memorization",
      "definition": "Instant mental conversion of unit fractions: 1/7 ≈ 0.142857, 1/8 = 0.125, 1/9 = 0.111..., 1/12 = 0.0833...",
      "category": "Mental Constants",
      "level": "Intermediate"
    },
    {
      "term": "Cross-Multiplication for Fraction Comparison",
      "definition": "Determining if a/b > c/d by comparing the cross-products a*d vs b*c without finding common denominators",
      "category": "Fractions",
      "level": "Beginner"
    },
    {
      "term": "Anzan (Mental Soroban Abacus)",
      "definition": "Visualizing a Japanese soroban abacus internally in the mind’s eye to compute multi-digit calculations at lightning speed",
      "category": "Abacus & Visualization",
      "level": "Master"
    },
    {
      "term": "Doomsday Algorithm (John Conway)",
      "definition": "Mental calendar algorithm calculating the day of the week for any Gregorian calendar date in seconds",
      "category": "Calendar Calculation",
      "level": "Advanced"
    },
    {
      "term": "Anchor Days & Century Anchors",
      "definition": "Doomsday anchor points (e.g. 4/4, 6/6, 8/8, 10/10, 12/12) enabling fast day-of-week navigation",
      "category": "Calendar Calculation",
      "level": "Advanced"
    },
    {
      "term": "Cube Roots of Perfect Cubes",
      "definition": "Instant extraction of 2-digit cube roots of numbers up to 1,000,000 using the unique final digit of cubes 0-9 and tens thresholds",
      "category": "Root Extraction",
      "level": "Intermediate"
    },
    {
      "term": "Square Root Estimation via Taylor Approximation",
      "definition": "Estimating √N near perfect square S² via formula: √N ≈ S + (N - S²) / (2S)",
      "category": "Approximation Theory",
      "level": "Advanced"
    },
    {
      "term": "Sum of Consecutive Integers (Gauss Formula)",
      "definition": "Mental summation formula for 1 to n: Sum = [n * (n + 1)] / 2",
      "category": "Algebraic Formulas",
      "level": "Beginner"
    },
    {
      "term": "Sum of Odd Integers",
      "definition": "Identity proving the sum of the first n odd numbers equals n² (e.g. 1 + 3 + 5 + 7 + 9 = 5² = 25)",
      "category": "Algebraic Identities",
      "level": "Beginner"
    },
    {
      "term": "Logarithmic Mental Arithmetic",
      "definition": "Estimating large products and powers using mental log10 values (log 2 ≈ 0.301, log 3 ≈ 0.477, log 7 ≈ 0.845)",
      "category": "Advanced Estimation",
      "level": "Master"
    },
    {
      "term": "Modular Arithmetic & Divisibility Rules",
      "definition": "Instant divisibility tests: by 3 (sum of digits), by 4 (last 2 digits), by 7 (2x last digit subtracted from rest), by 11 (alternating sum)",
      "category": "Number Theory",
      "level": "Intermediate"
    }
  ],
  "fitness": [
    {
      "term": "Progressive Overload",
      "definition": "Fundamental hypertrophy principle systematically increasing weight, reps, or volume over time to stimulate muscle adaptation",
      "category": "Training Principles",
      "level": "Beginner"
    },
    {
      "term": "RPE (Rate of Perceived Exertion)",
      "definition": "1-10 intensity scale measuring exertion relative to failure, where RPE 8 means 2 repetitions left in reserve (2 RIR)",
      "category": "Intensity & Autoregulation",
      "level": "Intermediate"
    },
    {
      "term": "RIR (Reps in Reserve)",
      "definition": "Quantitative estimate of how many more clean repetitions could have been performed before reaching momentary muscular failure",
      "category": "Intensity Management",
      "level": "Intermediate"
    },
    {
      "term": "Hypertrophy Rep Range & Mechanical Tension",
      "definition": "Primary muscle growth stimulus produced by heavy mechanical tension across 6 to 30 repetitions close to failure",
      "category": "Exercise Physiology",
      "level": "Intermediate"
    },
    {
      "term": "Compound Exercises vs Isolation Movements",
      "definition": "Multi-joint movements recruiting multiple muscle groups (Squat, Deadlift, Bench, Pull-up) vs single-joint focus (Bicep curl, Lateral raise)",
      "category": "Exercise Selection",
      "level": "Beginner"
    },
    {
      "term": "Concentric, Eccentric & Isometric Contractions",
      "definition": "Muscle shortening under tension (concentric), lengthening under load (eccentric), and holding static position (isometric)",
      "category": "Biomechanics",
      "level": "Beginner"
    },
    {
      "term": "Time Under Tension (TUT)",
      "definition": "Total duration of mechanical load applied to a muscle during a set, emphasizing controlled eccentric tempo (e.g. 3-0-1-0)",
      "category": "Hypertrophy Science",
      "level": "Intermediate"
    },
    {
      "term": "Basal Metabolic Rate (BMR)",
      "definition": "Number of calories burned daily at complete rest to maintain vital physiological functions (Mifflin-St Jeor equation)",
      "category": "Nutrition & Metabolism",
      "level": "Beginner"
    },
    {
      "term": "TDEE (Total Daily Energy Expenditure)",
      "definition": "Total daily caloric burn: BMR + NEAT (non-exercise activity) + EAT (exercise) + TEF (thermic effect of food)",
      "category": "Nutrition & Metabolism",
      "level": "Beginner"
    },
    {
      "term": "Macronutrient Ratios (Protein, Carbs, Fats)",
      "definition": "Optimal nutritional splits: 1.6-2.2g protein per kg of bodyweight, healthy dietary fats for hormones, and carbs for glycogen",
      "category": "Sports Nutrition",
      "level": "Intermediate"
    },
    {
      "term": "Caloric Surplus vs Caloric Deficit",
      "definition": "Consuming more calories than expended for muscle growth (hypertrophy) vs fewer calories for fat oxidation (cutting)",
      "category": "Energy Balance",
      "level": "Beginner"
    },
    {
      "term": "NEAT (Non-Exercise Activity Thermogenesis)",
      "definition": "Energy expended for everything done outside formal workouts: walking, standing, typing, and chores (8k-10k daily steps)",
      "category": "Daily Metabolism",
      "level": "Beginner"
    },
    {
      "term": "DOMS (Delayed Onset Muscle Soreness)",
      "definition": "Muscle soreness and stiffness peaking 24 to 48 hours post-workout caused by micro-tears in muscle fibers and inflammation",
      "category": "Recovery & Physiology",
      "level": "Beginner"
    },
    {
      "term": "Active Recovery & Deload Week",
      "definition": "Planned period of reduced training volume and intensity (typically every 4-8 weeks) allowing systemic neural and joint recovery",
      "category": "Periodization",
      "level": "Intermediate"
    },
    {
      "term": "VO2 Max",
      "definition": "Maximum rate of oxygen consumption measured during incremental maximal exercise, the gold standard of cardiorespiratory fitness",
      "category": "Cardiovascular Physiology",
      "level": "Advanced"
    },
    {
      "term": "HIIT vs LISS Cardio",
      "definition": "High-Intensity Interval Training (short maximal bursts) vs Low-Intensity Steady-State cardio (Zone 2 fat burning and mitochondrial health)",
      "category": "Conditioning",
      "level": "Beginner"
    },
    {
      "term": "Zone 2 Cardio",
      "definition": "Aerobic training intensity where lactate production equals clearance, building mitochondrial density, capillary network, and base endurance",
      "category": "Cardiovascular Health",
      "level": "Intermediate"
    },
    {
      "term": "Mobility vs Flexibility",
      "definition": "Active motor control of a joint through its full range of motion (mobility) vs passive range of motion of muscle tissue (flexibility)",
      "category": "Movement Quality",
      "level": "Beginner"
    },
    {
      "term": "Spinal Neutrality & Bracing (Valsalva Maneuver)",
      "definition": "Intra-abdominal pressure technique taking a deep diaphragmatic breath into the abdomen against a closed glottis to protect the spine",
      "category": "Lifting Technique & Safety",
      "level": "Intermediate"
    },
    {
      "term": "Full Range of Motion (ROM)",
      "definition": "Moving a joint through its complete anatomical excursion to maximize muscle stretch, motor unit recruitment, and joint health",
      "category": "Hypertrophy Technique",
      "level": "Beginner"
    },
    {
      "term": "Push-Pull-Legs (PPL Split)",
      "definition": "Popular 3-day or 6-day workout split organizing training into upper body pushing, upper body pulling, and lower body leg sessions",
      "category": "Programming & Splits",
      "level": "Beginner"
    },
    {
      "term": "Upper / Lower Split",
      "definition": "4-day training schedule alternating between upper body and lower body days to optimize recovery and weekly frequency",
      "category": "Programming & Splits",
      "level": "Beginner"
    },
    {
      "term": "Anabolic Window & Nutrient Timing",
      "definition": "Post-exercise period for glycogen replenishment and muscle protein synthesis, maximized by 20-40g protein within 2-4 hours",
      "category": "Nutrient Timing",
      "level": "Intermediate"
    },
    {
      "term": "Creatine Monohydrate",
      "definition": "Most scientifically validated sports supplement increasing intramuscular phosphocreatine stores to enhance ATP regeneration and power output",
      "category": "Supplementation",
      "level": "Beginner"
    },
    {
      "term": "Sleep Hygiene & Muscle Protein Synthesis (MPS)",
      "definition": "Slow-wave sleep and Growth Hormone release driving tissue repair, hormonal balance (testosterone/cortisol), and CNS recovery",
      "category": "Recovery & Longevity",
      "level": "Beginner"
    }
  ]
};

  Object.keys(DICT).forEach(k => {
    global.FEARN_DICTIONARY[k] = DICT[k];
  });

  if (typeof module !== 'undefined' && module.exports) {
    module.exports = DICT;
  }
})(typeof window !== 'undefined' ? window : global);
