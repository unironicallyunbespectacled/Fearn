// FEARN Omni-Mastery Global Lexicon & Dictionary Database
// Provides comprehensive, searchable dictionary and glossary entries across all 20 languages and elite skills.

(function (global) {
  'use strict';

  global.FEARN_DICTIONARY = global.FEARN_DICTIONARY || {};

  const DICT = {
    japanese: [
      { term: 'こんにちは (Konnichiwa)', definition: 'Hello / Good afternoon (Standard daytime greeting across Japan)', category: 'Greeting', level: 'N5 / A1' },
      { term: 'ありがとう (Arigatou)', definition: 'Thank you (Informal gratitude)', category: 'Etiquette', level: 'N5 / A1' },
      { term: 'ありがとうございます (Arigatou gozaimasu)', definition: 'Thank you very much (Polite / Teineigo gratitude)', category: 'Etiquette', level: 'N5 / A1' },
      { term: 'すみません (Sumimasen)', definition: 'Excuse me / Sorry / Thank you for your trouble', category: 'Etiquette', level: 'N5 / A1' },
      { term: 'ごめんなさい (Gomennasai)', definition: 'I am sorry (Direct personal apology)', category: 'Etiquette', level: 'N5 / A1' },
      { term: 'いただきます (Itadakimasu)', definition: 'Humbly receive / Gratitude before eating meal', category: 'Culinary Etiquette', level: 'N5 / A1' },
      { term: 'ごちそうさまでした (Gochisousama deshita)', definition: 'Thank you for the wonderful meal (Said after eating)', category: 'Culinary Etiquette', level: 'N5 / A1' },
      { term: 'いらっしゃいませ (Irasshaimase)', definition: 'Welcome! (Greeting by staff in shops and restaurants)', category: 'Service', level: 'N5 / A1' },
      { term: 'お願いします (Onegaishimasu)', definition: 'Please / I request your assistance', category: 'Polite Request', level: 'N5 / A1' },
      { term: 'お疲れ様です (Otsukaresama desu)', definition: 'Thank you for your hard work / Standard workplace greeting', category: 'Business Keigo', level: 'N4 / A2' },
      { term: 'よろしくお願いいたします (Yoroshiku onegai itashimasu)', definition: 'I look forward to working with you / Please treat me favorably', category: 'Business Keigo', level: 'N4 / A2' },
      { term: '名刺交換 (Meishi koukan)', definition: 'Business card exchange ritual performed with two hands', category: 'Business Etiquette', level: 'N3 / B1' },
      { term: '報・連・相 (Hou-Ren-Sou)', definition: 'Report (Houkoku), Communicate (Renraku), Consult (Soudan) - Golden rule of Japanese corporate communication', category: 'Business Concept', level: 'N3 / B1' },
      { term: '改善 (Kaizen)', definition: 'Continuous incremental improvement philosophy originating from Toyota Production System', category: 'Management Philosophy', level: 'N2 / B2' },
      { term: '看板方式 (Kanban houshiki)', definition: 'Just-in-Time visual workflow scheduling system developed by Taiichi Ohno', category: 'Engineering / Operations', level: 'N1 / C1' },
      { term: '温故知新 (Onko chishin)', definition: 'Learning from the past to discover new truths and insights (Yojijukugo)', category: 'Idiom / Yojijukugo', level: 'N1 / C1' },
      { term: '一期一会 (Ichigo ichie)', definition: 'One time, one meeting; treasure every unrepeatable encounter (Tea Ceremony philosophy)', category: 'Philosophy / Proverb', level: 'N2 / B2' },
      { term: '切磋琢磨 (Sessa takuma)', definition: 'Polishing and refining one’s character and skills together through friendly rivalry (Yojijukugo)', category: 'Idiom / Yojijukugo', level: 'N1 / C1' },
      { term: '臨機応変 (Rinki ouhen)', definition: 'Adapting flexibly to changing circumstances (Yojijukugo)', category: 'Idiom / Yojijukugo', level: 'N1 / C1' },
      { term: '不言実行 (Fugen jikkou)', definition: 'Action before words; letting your actions speak louder than promises (Yojijukugo)', category: 'Idiom / Yojijukugo', level: 'N1 / C1' },
      { term: '敷金 (Shikikin)', definition: 'Security deposit paid to the landlord when renting an apartment in Japan', category: 'Housing & Real Estate', level: 'N3 / B1' },
      { term: '礼金 (Reikin)', definition: 'Key money / Non-refundable gratuity gift paid to the landlord', category: 'Housing & Real Estate', level: 'N3 / B1' },
      { term: 'Suica / PASMO', definition: 'Contactless IC transit cards used across JR and Tokyo Metro networks and convenience stores', category: 'Transit & Daily Life', level: 'N5 / A1' },
      { term: '居酒屋 (Izakaya)', definition: 'Traditional Japanese informal pub serving small shared dishes and drinks', category: 'Dining & Culture', level: 'N5 / A1' },
      { term: '新幹線 (Shinkansen)', definition: 'High-speed bullet train network famous for punctuality and zero fatal accidents', category: 'Transit & Infrastructure', level: 'N4 / A2' },
      { term: '指定席 (Shiteiseki) vs 自由席 (Jiyuuseki)', definition: 'Reserved seat vs Non-reserved seat on Shinkansen / Limited Express trains', category: 'Transit Vocabulary', level: 'N4 / A2' },
      { term: 'お通し (Otooshi)', definition: 'Small mandatory table appetizer served with first drink order at Izakayas', category: 'Dining Etiquette', level: 'N4 / A2' },
      { term: '飲み放題 (Nomihoudai) / 食べ放題 (Tabehoudai)', definition: 'All-you-can-drink / All-you-can-eat set courses with fixed time limit', category: 'Dining & Nightlife', level: 'N4 / A2' },
      { term: '乾杯 (Kanpai)', definition: 'Cheers! (Traditional toast before drinking)', category: 'Social Customs', level: 'N5 / A1' },
      { term: '忖度 (Sontaku)', definition: 'Surmising another person’s unspoken feelings and acting proactively on them', category: 'Cultural Psychology', level: 'N1 / C1' },
      { term: '本音 (Honne) vs 建前 (Tatemae)', definition: 'True inner desires and private thoughts vs Public facade and social harmony conduct', category: 'Cultural Philosophy', level: 'N2 / B2' },
      { term: '空気を読む (Kuuki wo yomu)', definition: 'Reading the air / Sensing the social atmosphere and reacting with social tact', category: 'Social Idiom', level: 'N2 / B2' },
      { term: '木漏れ日 (Komorebi)', definition: 'Sunlight filtering through the leaves of trees (Untranslatable poetic noun)', category: 'Poetic Japanese', level: 'N2 / B2' },
      { term: '侘び寂び (Wabi-sabi)', definition: 'Aesthetic centered on the acceptance of transience, imperfection, and natural beauty', category: 'Aesthetics & Zen', level: 'N1 / C1' },
      { term: '金継ぎ (Kintsugi)', definition: 'The art of repairing broken pottery with lacquer dusted with powdered gold, honoring scars', category: 'Traditional Art & Philosophy', level: 'N1 / C1' },
      { term: '温泉 (Onsen) & 湯道 (Yudou)', definition: 'Natural volcanic hot spring bathing ritual and spiritual etiquette of cleansing before entering', category: 'Culture & Wellness', level: 'N4 / A2' },
      { term: '鳥居 (Torii)', definition: 'Traditional red sacred gate marking transition from profane world into Shinto shrine precinct', category: 'Shinto Architecture', level: 'N4 / A2' },
      { term: '二礼二拍手一礼 (Ni-rei ni-hakushu ichi-rei)', definition: 'Two bows, two claps, one bow - Proper Shinto shrine prayer etiquette', category: 'Shrine Etiquette', level: 'N3 / B1' },
      { term: '初詣 (Hatsumoude)', definition: 'First shrine or temple visit of the New Year to pray for health and fortune', category: 'Annual Tradition', level: 'N3 / B1' },
      { term: '花見 (Hanami)', definition: 'Cherry blossom viewing picnics under blooming Sakura in spring', category: 'Seasonal Tradition', level: 'N4 / A2' },
      { term: '紅葉狩り (Momijigari)', definition: 'Autumn leaf hunting and admiring vibrant maple foliage', category: 'Seasonal Tradition', level: 'N3 / B1' },
      { term: '敬語 (Keigo): 尊敬語 (Sonkeigo) & 謙譲語 (Kenjougo)', definition: 'Honorific system: Respectful language elevating the listener vs Humble language lowering oneself', category: 'Grammar & Keigo', level: 'N2 / B2' },
      { term: 'いらっしゃる (Irassharu)', definition: 'Respectful (Sonkeigo) form of 行く (go), 来る (come), and いる (exist)', category: 'Keigo Verb', level: 'N3 / B1' },
      { term: '参る (Mairu)', definition: 'Humble (Kenjougo) form of 行く (go) and 来る (come)', category: 'Keigo Verb', level: 'N3 / B1' },
      { term: 'いただく (Itadaku)', definition: 'Humble (Kenjougo) form of もらう (receive) and 食べる (eat)', category: 'Keigo Verb', level: 'N3 / B1' },
      { term: '申し上げる (Moushiageru)', definition: 'Humble (Kenjougo) form of 言う (say) when addressing a superior or client', category: 'Keigo Verb', level: 'N2 / B2' },
      { term: 'ご案内いたします (Go-annai itashimasu)', definition: 'I will guide / escort you (Polite business phrasing)', category: 'Service Keigo', level: 'N3 / B1' },
      { term: 'お席にご案内します (Oseki ni go-annai shimasu)', definition: 'I will show you to your table/seat', category: 'Restaurant Keigo', level: 'N4 / A2' },
      { term: 'お会計 (Okaikei)', definition: 'Bill / Payment at restaurants and shops', category: 'Dining & Commerce', level: 'N5 / A1' },
      { term: '領収書 (Ryoushuusho)', definition: 'Official tax receipt containing company name and seal (Hanko)', category: 'Business & Commerce', level: 'N3 / B1' }
    ],
    spanish: [
      { term: 'Hola', definition: 'Hello (Standard universal greeting)', category: 'Greeting', level: 'A1' },
      { term: 'Buenos días / Buenas tardes / Buenas noches', definition: 'Good morning / Good afternoon / Good evening or night', category: 'Greeting', level: 'A1' },
      { term: 'Por favor / Muchas gracias', definition: 'Please / Thank you very much', category: 'Etiquette', level: 'A1' },
      { term: 'De nada', definition: 'You are welcome / Not at all', category: 'Etiquette', level: 'A1' },
      { term: '¿Cuánto cuesta?', definition: 'How much does this cost?', category: 'Shopping', level: 'A1' },
      { term: 'La cuenta, por favor', definition: 'The bill / check, please (In restaurants and cafes)', category: 'Dining', level: 'A1' },
      { term: 'Tapeo / Ir de tapas', definition: 'The social custom of hopping from bar to bar sharing small savory dishes', category: 'Culture & Gastronomy', level: 'A2' },
      { term: 'Sobremesa', definition: 'The leisurely time spent conversing around the table after finishing a meal', category: 'Culture & Untranslatable', level: 'B1' },
      { term: 'Jornada intensiva', definition: 'Continuous summer workday schedule (typically 8:00 to 15:00) without afternoon break', category: 'Labor & Business', level: 'B2' },
      { term: 'Desconexión digital', definition: 'Legal right of employees to not answer work communications outside working hours', category: 'Labor Law & C1', level: 'C1' },
      { term: 'Contrato indefinido', definition: 'Permanent open-ended employment contract under Spanish labor law', category: 'Labor & Business', level: 'B2' },
      { term: 'Nómina y finiquito', definition: 'Monthly payslip and official end-of-contract settlement document', category: 'Labor Law', level: 'C1' }
    ],
    arabic: [
      { term: 'مرحباً (Marhaban)', definition: 'Hello / Welcome', category: 'Greeting', level: 'A1' },
      { term: 'السلام عليكم (As-salamu alaykum)', definition: 'Peace be upon you (Formal Islamic & cultural greeting)', category: 'Greeting', level: 'A1' },
      { term: 'وعليكم السلام (Wa alaykumu s-salam)', definition: 'And upon you be peace (Standard response to greeting)', category: 'Greeting', level: 'A1' },
      { term: 'شكراً جزيلاً (Shukran jazilan)', definition: 'Thank you very much', category: 'Etiquette', level: 'A1' },
      { term: 'عفواً (Afwan)', definition: 'You are welcome / Excuse me', category: 'Etiquette', level: 'A1' },
      { term: 'من فضلك / لو سمحت (Min fadlik / Law samaht)', definition: 'Please / If you would be so kind', category: 'Polite Request', level: 'A1' },
      { term: 'الحساب من فضلك (Al-hisab min fadlik)', definition: 'The bill, please (In restaurants and cafes)', category: 'Dining', level: 'A1' },
      { term: 'الإضافة (Al-Idafa)', definition: 'The grammatical engine of possession and annexation linking two nouns', category: 'Grammar', level: 'A2' },
      { term: 'نظام الجذر والوزن (Root and Pattern System)', definition: 'The 3-consonant morphological root foundation of Semitic vocabulary', category: 'Linguistics', level: 'B1' },
      { term: 'منصة قوى (Qiwa Platform)', definition: 'Saudi unified digital labor market and contract management platform', category: 'Business & Economy', level: 'C1' },
      { term: 'التوطين ونطاقات (Saudization & Nitaqat)', definition: 'National economic policy quotas for domestic workforce employment', category: 'Business & Economy', level: 'C1' }
    ],
    mandarin: [
      { term: '你好 (Nǐ hǎo)', definition: 'Hello / Standard friendly greeting in Chinese', category: 'Greeting', level: 'HSK 1 / A1' },
      { term: '谢谢 (Xièxie) / 不客气 (Bù kèqì)', definition: 'Thank you / You are welcome', category: 'Etiquette', level: 'HSK 1 / A1' },
      { term: '请问 (Qǐngwèn)', definition: 'Excuse me, may I ask... (Polite inquiry opener)', category: 'Polite Inquiry', level: 'HSK 1 / A1' },
      { term: '买单 / 结账 (Mǎidān / Jiézhàng)', definition: 'Pay the bill / Settle check at restaurant', category: 'Dining & Commerce', level: 'HSK 2 / A2' },
      { term: '微信支付 (WeChat Pay) / 支付宝 (Alipay)', definition: 'Dominant mobile QR-code payment platforms across China', category: 'FinTech & Daily Life', level: 'HSK 2 / A2' },
      { term: '关系 (Guānxi)', definition: 'Network of personal relationships, mutual trust, and reciprocal social obligations in business and society', category: 'Culture & Business', level: 'HSK 5 / C1' },
      { term: '叩指礼 (Kòu zhǐ lǐ)', definition: 'Finger-tapping table gesture thanking host for pouring tea without interrupting speech', category: 'Tea Ceremony Etiquette', level: 'HSK 3 / B1' }
    ],
    cantonese: [
      { term: '早晨 (Zou2 san4)', definition: 'Good morning in Cantonese', category: 'Greeting', level: 'A1' },
      { term: '唔該 (M4 goi1)', definition: 'Thank you for service / Excuse me / Please', category: 'Etiquette', level: 'A1' },
      { term: '多謝 (Do1 ze6)', definition: 'Thank you for a gift or compliment', category: 'Etiquette', level: 'A1' },
      { term: '埋單 (Maai4 daan1)', definition: 'Pay the bill in Cantonese dining', category: 'Dining', level: 'A1' },
      { term: '飲茶 (Jam2 caa4)', definition: 'Yum Cha - Traditional dim sum brunch and tea culture in Hong Kong and Guangdong', category: 'Culinary Culture', level: 'A1' },
      { term: '八達通 (Baat3 daat6 tung1 - Octopus Card)', definition: 'Universal contactless smart card system used across Hong Kong transit and retail', category: 'Transit & Daily Life', level: 'A1' }
    ],
    korean: [
      { term: '안녕하세요 (Annyeonghaseyo)', definition: 'Hello / Standard polite greeting in Korean', category: 'Greeting', level: 'A1' },
      { term: '감사합니다 (Gamsahamnida)', definition: 'Thank you very much (Formal/polite)', category: 'Etiquette', level: 'A1' },
      { term: '죄송합니다 (Joesonghamnida)', definition: 'I am sorry (Formal apology)', category: 'Etiquette', level: 'A1' },
      { term: '저기요 (Jeogiyo)', definition: 'Excuse me over here! (Calling restaurant staff)', category: 'Dining Etiquette', level: 'A1' },
      { term: '계산해 주세요 (Gyesan-hae juseyo)', definition: 'Please give us the bill / Check please', category: 'Dining & Commerce', level: 'A1' },
      { term: '정 (Jeong)', definition: 'Deep emotional bond of affection, warmth, and shared attachment woven into Korean human relationships', category: 'Cultural Philosophy', level: 'B2 / C1' },
      { term: '한 (Han)', definition: 'Collective emotional concept of grief, resilience, sorrow, and perseverance in Korean culture', category: 'Cultural History', level: 'C1 / C2' }
    ],
    cs110: [
      { term: 'Big-O Notation (O(f(n)))', definition: 'Asymptotic upper bound characterizing worst-case algorithmic runtime growth rate', category: 'Algorithms', level: 'Academic' },
      { term: 'Master Theorem', definition: 'Formula for solving divide-and-conquer recurrences of the form T(n) = aT(n/b) + f(n)', category: 'Complexity Theory', level: 'Academic' },
      { term: 'AVL Tree & Red-Black Tree', definition: 'Self-balancing binary search trees guaranteeing O(log n) search, insert, and delete', category: 'Data Structures', level: 'Academic' },
      { term: 'Dijkstra vs Bellman-Ford', definition: 'Single-source shortest path algorithms: greedy non-negative edges O(E + V log V) vs dynamic programming handling negative edge weights O(V*E)', category: 'Graph Theory', level: 'Academic' }
    ],
    b110: [
      { term: 'Price Elasticity of Demand (PED)', definition: 'Percentage change in quantity demanded divided by percentage change in price', category: 'Microeconomics', level: 'Academic' },
      { term: 'Prospect Theory & Loss Aversion', definition: 'Kahneman-Tversky behavioral framework showing losses hurt 2-2.5x more than equivalent gains', category: 'Behavioral Economics', level: 'Academic' },
      { term: 'Nash Equilibrium', definition: 'State where no player can unilaterally deviate to improve their expected payoff', category: 'Game Theory', level: 'Academic' }
    ],
    b111: [
      { term: 'Discounted Cash Flow (DCF)', definition: 'Valuation method estimating the intrinsic value of an investment based on future cash flows discounted to present value via WACC', category: 'Corporate Finance', level: 'Academic' },
      { term: 'Weighted Average Cost of Capital (WACC)', definition: "Calculation of a firm's cost of capital in which each category of capital is proportionately weighted", category: 'Corporate Finance', level: 'Academic' },
      { term: 'EBITDA', definition: 'Earnings Before Interest, Taxes, Depreciation, and Amortization - standard proxy for operating cash flow', category: 'Financial Accounting', level: 'Academic' }
    ]
  };

  global.FEARN_DICTIONARY = DICT;
})(typeof window !== 'undefined' ? window : global);
