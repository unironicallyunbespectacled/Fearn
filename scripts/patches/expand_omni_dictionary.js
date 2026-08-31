const fs = require('fs');
const path = require('path');

const dictPath = path.resolve(__dirname, '../../data/omni_dictionary.js');
console.log('Loading omni_dictionary.js...');
const dict = require(dictPath);

// Rich Expansion Packs for Language, Skills, University, and Fitness
const EXPANSIONS = {
  japanese: [
    { term: "一期一会 (Ichigo Ichie)", definition: "Once-in-a-lifetime encounter (Treasure every unrepeatable moment)", category: "Yojijukugo / Idiom", level: "B1" },
    { term: "木漏れ日 (Komorebi)", definition: "Sunlight filtering through trees (Untranslatable aesthetic term)", category: "Noun", level: "A2" },
    { term: "いただきます (Itadakimasu)", definition: "I humbly receive (Spoken before meals showing gratitude for all life and effort)", category: "Greeting / Formula", level: "A1" },
    { term: "ごちそうさまでした (Gochisousama deshita)", definition: "Thank you for the meal (Spoken after meals honoring the host/chef)", category: "Greeting / Formula", level: "A1" },
    { term: "お疲れ様でした (Otsukaresama deshita)", definition: "Thank you for your hard work (Universal workplace parting expression)", category: "Workplace Formula", level: "A2" },
    { term: "よろしくお願いします (Yoroshiku onegaishimasu)", definition: "Please take care of me / I look forward to working with you", category: "Social Formula", level: "A1" },
    { term: "思いやり (Omoiyari)", definition: "Anticipatory empathy and consideration for others without being asked", category: "Cultural Concept", level: "B1" },
    { term: "侘寂 (Wabi-Sabi)", definition: "The Japanese aesthetic of finding beauty in imperfection, transience, and natural simplicity", category: "Philosophy", level: "B2" },
    { term: "改善 (Kaizen)", definition: "Continuous incremental improvement over time across all areas of life and work", category: "Philosophy / Business", level: "B1" },
    { term: "森林浴 (Shinrin-yoku)", definition: "Forest bathing (Immersion in nature for physiological and mental restoration)", category: "Wellness", level: "B1" }
  ],
  korean: [
    { term: "정 (Jeong)", definition: "Deep emotional bond, affection, and loyalty that builds between people over shared time", category: "Cultural Concept", level: "B1" },
    { term: "눈치 (Nunchi)", definition: "The subtle art of gauging others' moods, social atmosphere, and unstated thoughts quickly", category: "Social Competence", level: "B1" },
    { term: "한 (Han)", definition: "A collective cultural sentiment of deep sorrow, resilience, and transformed longing", category: "Cultural Concept", level: "B2" },
    { term: "화이팅 / 파이팅 (Hwaiting / Paiting)", definition: "Let's go! / Cheer up! / You can do it! (Universal South Korean encouragement cry)", category: "Colloquial Interjection", level: "A1" },
    { term: "대박 (Daebak)", definition: "Awesome! / Jackpot! / Incredible! (Widely used exclamation of pleasant surprise)", category: "Slang / Exclamation", level: "A1" },
    { term: "답답하다 (Dapdaphada)", definition: "Feeling suffocated, frustrated, or mentally blocked when something isn't moving forward", category: "Adjective", level: "A2" },
    { term: "설레다 (Seolleda)", definition: "Heart fluttering with joyful anticipation, excitement, or romantic butterflies", category: "Verb", level: "A2" },
    { term: "효도 (Hyodo)", definition: "Filial piety; deep dutiful love, respect, and care given by children to their parents", category: "Confucian Virtue", level: "B1" }
  ],
  mandarin: [
    { term: "关系 (Guānxi)", definition: "Networks of mutual obligation, trust, and reciprocal social/business relationships", category: "Societal Concept", level: "B1" },
    { term: "面子 (Miànzi)", definition: "Social reputation, honor, and prestige (Giving vs losing face in interpersonal interactions)", category: "Cultural Psychology", level: "B1" },
    { term: "加油 (Jiāyóu)", definition: "Add oil! / Keep going! / You can do it! (Universal cheering and encouragement phrase)", category: "Exclamation", level: "A1" },
    { term: "人情 (Rénqíng)", definition: "Human empathy, emotional debt, and warmth that binds personal relationships together", category: "Ethics / Sociology", level: "B2" },
    { term: "缘分 (Yuánfèn)", definition: "Predestined affinity or serendipitous fate that brings two people together", category: "Philosophy / Idiom", level: "B1" },
    { term: "塞翁失马 (Sài Wēng Shī Mǎ)", definition: "Blessing in disguise (A loss may turn out to be a gain; life is full of unpredictable turns)", category: "Chengyu (Idiom)", level: "B2" },
    { term: "半途而废 (Bàn Tú Ér Fèi)", definition: "To give up halfway / abandon a worthwhile goal before completion", category: "Chengyu (Idiom)", level: "B1" },
    { term: "脚踏实地 (Jiǎo Tà Shí Dì)", definition: "Feet planted on solid ground (Working steadily, pragmatically, and realistically)", category: "Chengyu (Idiom)", level: "B1" }
  ],
  arabic: [
    { term: "إن شاء الله (Insha'Allah)", definition: "If God wills / God willing (Expresses future intention coupled with humility)", category: "Religious & Cultural Formula", level: "A1" },
    { term: "ما شاء الله (Masha'Allah)", definition: "What God has willed (Spoken to express genuine admiration, beauty, and ward off envy)", category: "Cultural Formula", level: "A1" },
    { term: "صمود (Sumud)", definition: "Steadfastness, unshakeable perseverance, and rooted resilience in the face of hardship", category: "Societal Value", level: "B2" },
    { term: "كرم (Karam)", definition: "Generosity and selfless hospitality (A supreme virtue across Arab culture)", category: "Virtue", level: "B1" },
    { term: "صبر (Sabr)", definition: "Enduring patience, spiritual fortitude, and emotional composure through difficulty", category: "Virtue / Philosophy", level: "A2" },
    { term: "نور (Noor)", definition: "Spiritual and physical radiant light, illumination, and clarity", category: "Noun", level: "A1" },
    { term: "سلام (Salaam)", definition: "Peace, wholeness, safety, and harmony (Foundational Semitic root S-L-M)", category: "Noun / Greeting", level: "A1" }
  ],
  russian: [
    { term: "Душа (Dusha)", definition: "The soul, inner spiritual depth, emotional warmth, and capacity for empathy", category: "Cultural Concept", level: "B1" },
    { term: "Тоска (Toska)", definition: "A profound spiritual longing, melancholy, or vague existential yearning without specific cause", category: "Emotion", level: "B2" },
    { term: "Авось (Avos')", definition: "Relying on good fortune, destiny, or serendipity against all rational odds", category: "Idiom / Psychology", level: "B2" },
    { term: "Быт (Byt)", definition: "The daily grind of material life, routine household chores, and mundane domestic reality", category: "Sociology", level: "B1" },
    { term: "Подвиг (Podvig)", definition: "A selfless heroic deed, moral sacrifice, or spiritual triumph over impossible obstacles", category: "Noun", level: "B2" },
    { term: "Уют (Uyut)", definition: "Cozy domestic comfort, warmth, and intimate security in home spaces", category: "Noun", level: "A2" }
  ],
  spanish: [
    { term: "Sobremesa", definition: "The lingering conversation, laughter, and bonding around the table after finishing a meal", category: "Cultural Tradition", level: "A2" },
    { term: "Madrugar", definition: "To wake up very early in the morning before dawn to seize the day", category: "Verb", level: "A2" },
    { term: "Estrenar", definition: "To wear, use, or debut something brand new for the very first time", category: "Verb", level: "B1" },
    { term: "Ganas (tener ganas)", definition: "Deep intrinsic urge, desire, or enthusiasm to do something specific", category: "Idiomatic Expression", level: "A1" },
    { term: "Empalagar", definition: "To become overwhelmed by something overly sweet, cloying, or excessively sentimental", category: "Verb", level: "B1" },
    { term: "Desvelarse", definition: "To stay awake all night or lose sleep due to study, worry, or celebration", category: "Verb", level: "B1" }
  ],
  argentine_spanish: [
    { term: "Chamuyo", definition: "Smooth talk, persuasive sweet-talking, or artful exaggeration used to charm or convince", category: "Lunfardo (Slang)", level: "B1" },
    { term: "Laburo", definition: "Work, job, or profession (Derived from Italian 'lavoro' into Rioplatense slang)", category: "Lunfardo / Noun", level: "A2" },
    { term: "Mina", definition: "Woman or girl (Classic Lunfardo term widely used across Buenos Aires)", category: "Lunfardo / Noun", level: "A2" },
    { term: "Fiaca (tener fiaca)", definition: "Sluggish pleasant laziness or reluctance to move from a comfortable spot", category: "Idiom", level: "A2" },
    { term: "Pibe / Piba", definition: "Kid, boy, girl, or young person (Universal Rioplatense marker)", category: "Noun", level: "A1" },
    { term: "Gaucho (hacer una gauchada)", definition: "Doing someone a generous favor without expecting anything in return", category: "Cultural Idiom", level: "B1" }
  ],
  french: [
    { term: "Flâneur", definition: "A passionate urban wanderer who strolls through city streets observing life without destination", category: "Philosophical Archetype", level: "B2" },
    { term: "Dépaysement", definition: "The exhilarating disorientation and sense of change when being in an unfamiliar country", category: "Emotion / Psychology", level: "B1" },
    { term: "Retrouvailles", definition: "The immense joy of reuniting with someone beloved after a long separation", category: "Noun", level: "B1" },
    { term: "L'esprit de l'escalier", definition: "Staircase wit (Thinking of the perfect witty retort only after leaving the room)", category: "Idiom", level: "B2" },
    { term: "Terroir", definition: "The complete natural environment (soil, climate, topography) giving wine or food unique character", category: "Culinary & Agriculture", level: "B1" },
    { term: "Joie de vivre", definition: "Exuberant, cheerful enjoyment of life and its everyday pleasures", category: "Philosophy / Idiom", level: "A2" }
  ],
  german: [
    { term: "Fernweh", definition: "Farsickness; an intense ache to travel and explore distant, unfamiliar lands (opposite of Heimweh)", category: "Noun / Emotion", level: "B1" },
    { term: "Waldeinsamkeit", definition: "The meditative, peaceful feeling of being alone in the deep tranquility of the woods", category: "Poetic Term", level: "B2" },
    { term: "Schadenfreude", definition: "Pleasure derived from another person's misfortune or blunder", category: "Psychological Term", level: "B1" },
    { term: "Gemütlichkeit", definition: "A state of warm coziness, friendliness, belonging, and peace of mind", category: "Cultural Concept", level: "A2" },
    { term: "Kummerspeck", definition: "Grief-bacon; the extra weight gained from emotional overeating during stress or heartbreak", category: "Humorous Compound", level: "B1" },
    { term: "Zeitgeist", definition: "The spirit of the time; the defining cultural, intellectual, and moral climate of an era", category: "Philosophy", level: "B2" },
    { term: "Feierabend", definition: "The ceremonial end of the working day, dedicated to rest, leisure, and personal life", category: "Work Culture", level: "A2" }
  ],
  brazilian_portuguese: [
    { term: "Saudade", definition: "A profound, bittersweet longing for a person, place, or memory that may never return", category: "Cultural Sentiment", level: "A2" },
    { term: "Jeitinho Brasileiro", definition: "The creative, flexible Brazilian way of finding ingenious solutions around rigid obstacles", category: "Social Strategy", level: "B1" },
    { term: "Cafuné", definition: "The tender act of running your fingers gently through someone's hair to soothe them", category: "Gesture / Love", level: "A2" },
    { term: "Ginga", definition: "Fluid, swaying bodily rhythm and agility fundamental to Capoeira, Samba, and football", category: "Movement / Culture", level: "B1" },
    { term: "Gostoso / Gostosa", definition: "Delicious, deeply enjoyable, delightful, or physically attractive", category: "Adjective", level: "A1" },
    { term: "Desabafar", definition: "To vent, unburden your soul, and pour out pent-up emotions to a trusted friend", category: "Verb", level: "B1" }
  ],
  turkish: [
    { term: "Hüzün", definition: "A deep communal melancholy and poetic nostalgia shared by the residents of Istanbul", category: "Cultural Aesthetics", level: "B2" },
    { term: "Gönül", definition: "The spiritual heart, seat of emotional desire, intuition, and sincere human affection", category: "Poetic / Sufi Concept", level: "B1" },
    { term: "Keyif", definition: "The relaxed enjoyment of quiet moments (drinking tea, smoking, sitting in the breeze)", category: "Lifestyle", level: "A2" },
    { term: "Kolay gelsin", definition: "May it come easy (Traditional wishing of ease spoken to anyone working or studying)", category: "Social Courtesy", level: "A1" },
    { term: "Geçmiş olsun", definition: "May it be in the past (Spoken to someone ill, injured, or experiencing hardship)", category: "Social Courtesy", level: "A1" },
    { term: "Afiyet olsun", definition: "May it bring good health / Bon appétit (Spoken before or after meals)", category: "Dining Formula", level: "A1" }
  ],
  vietnamese: [
    { term: "Tình nghĩa", definition: "Deep moral bond of loyalty, gratitude, and mutual affection formed through shared hardship", category: "Virtue", level: "B2" },
    { term: "Hiếu thảo", definition: "Devoted filial piety, respectful obedience, and lifelong care shown to parents and ancestors", category: "Confucian Virtue", level: "B1" },
    { term: "Duyên nợ", definition: "Karmic affinity and predestined love or debt that connects two souls across lifetimes", category: "Philosophy", level: "B2" },
    { term: "Nhậu", definition: "The lively social ritual of drinking beer, eating street snacks (mồi), and bonding with friends", category: "Social Activity", level: "A2" },
    { term: "Cần cù", definition: "Diligence, tireless work ethic, and persistent effort overcoming all obstacles", category: "Adjective", level: "B1" }
  ],
  swahili: [
    { term: "Ubuntu / Utu", definition: "Humanity towards others (I am because we are; human worth is tied to community)", category: "Philosophy", level: "B1" },
    { term: "Harambee", definition: "Let us pull together (Community self-help, collective pooling of resources and labor)", category: "Civic Tradition", level: "B1" },
    { term: "Pole pole", definition: "Slowly, gently, steadily (Patience and measured pace in all things)", category: "Proverbial Adverb", level: "A1" },
    { term: "Hakuna Matata", definition: "There are no troubles / No worries (Everything is under control and in harmony)", category: "Idiom", level: "A1" },
    { term: "Amani", definition: "Peace, tranquility, and harmony in society and spirit", category: "Noun", level: "A1" },
    { term: "Umoja", definition: "Unity and solidarity among people and nations", category: "Principle", level: "A2" }
  ],
  amharic: [
    { term: "እድር (Iddir)", definition: "Traditional community insurance and mutual aid association supporting families through bereavement", category: "Civic Institution", level: "B1" },
    { term: "እቁብ (Equb)", definition: "Rotating savings and credit association where members pool funds for mutual financial growth", category: "Economic Tradition", level: "B1" },
    { term: "ጉርሻ (Gursha)", definition: "The loving act of rolling injera with stew and placing it directly into a companion's mouth", category: "Hospitality Ritual", level: "A2" },
    { term: "ይሉኝታ (Yiluñta)", definition: "Deep social empathy, fear of dishonor, and consideration of how one's actions affect others", category: "Moral Psychology", level: "B2" },
    { term: "ሰላም (Selam)", definition: "Peace, health, and holistic wellbeing of body, mind, and community", category: "Noun / Greeting", level: "A1" }
  ],
  urdu: [
    { term: "تہذیب (Tehzeeb)", definition: "Refined culture, exquisite etiquette, noble manners, and moral civility", category: "Cultural Ideal", level: "B1" },
    { term: "نزاکت (Nazakat)", definition: "Delicacy, elegance, subtlety, and grace in expression and comportment", category: "Aesthetic", level: "B2" },
    { term: "محبت (Mohabbat)", definition: "Deep, selfless, and soulful love that transcends the material world", category: "Emotion / Poetry", level: "A2" },
    { term: "گپ شپ (Gap-shap)", definition: "Warm, leisurely conversation, friendly chit-chat, and banter over tea", category: "Social Activity", level: "A1" },
    { term: "خلوص (Khuloos)", definition: "Pure, unadulterated sincerity and heartfelt intention in human relationships", category: "Virtue", level: "B1" }
  ],
  hindi: [
    { term: "जुगाड़ (Jugaad)", definition: "Ingenious, frugal, and innovative problem-solving using whatever resources are at hand", category: "Innovation Strategy", level: "A2" },
    { term: "संस्कार (Sanskaar)", definition: "Inherent cultural values, noble moral upbringing, and righteous behavioral impressions", category: "Philosophy / Ethics", level: "B1" },
    { term: "आतिथ्य (Aatithya / Atithi Devo Bhava)", definition: "The guest is equivalent to God (The supreme Indian duty of hospitality)", category: "Cultural Doctrine", level: "B1" },
    { term: "मोक्ष (Moksha)", definition: "Spiritual liberation, ultimate freedom from the cycle of rebirth, and self-realization", category: "Spiritual Philosophy", level: "B2" },
    { term: "कर्म (Karma)", definition: "The cosmic law of cause and effect; every intentional action generates reciprocal destiny", category: "Philosophy", level: "A2" }
  ],
  cs110: [
    { term: "Algorithmic Complexity (Big-O Notation)", definition: "Mathematical classification of algorithm efficiency in terms of execution time or memory growth relative to input size N", category: "Theoretical CS", level: "Core" },
    { term: "Recursion & Call Stack", definition: "A method where a function solves a problem by calling smaller instances of itself until reaching a base case", category: "Programming Paradigm", level: "Core" },
    { term: "Dynamic Programming (Memoization & Tabulation)", definition: "Optimizing recursive algorithms by breaking problems into overlapping subproblems and storing subproblem results", category: "Algorithm Design", level: "Advanced" },
    { term: "Pointer & Memory Reference Semantics", definition: "Variables that store the physical or virtual memory addresses of other data structures rather than values", category: "Systems Programming", level: "Core" },
    { term: "Hash Table & Amortized O(1) Lookup", definition: "Data structure that maps keys to array indices via a hash function, handling collisions through chaining or open addressing", category: "Data Structures", level: "Core" },
    { term: "Graph Traversal (BFS vs DFS)", definition: "Systematic vertex exploration strategies using queues (Breadth-First) vs stacks/recursion (Depth-First)", category: "Data Structures", level: "Core" }
  ],
  b110: [
    { term: "Customer Lifetime Value (LTV / CLV)", definition: "The discounted net profit generated by a customer relationship throughout its entire commercial duration", category: "Marketing Analytics", level: "Core" },
    { term: "Net Promoter Score (NPS)", definition: "Index measuring customer brand advocacy and loyalty based on willingness to recommend to others", category: "Consumer Metrics", level: "Core" },
    { term: "Price Elasticity of Demand (PED)", definition: "The percentage change in quantity demanded in response to a one-percent change in price", category: "Microeconomics", level: "Core" },
    { term: "Cohort Analysis & Retention Decay", definition: "Tracking the behavioral retention and churn of specific customer groups over chronological time intervals", category: "Data Analytics", level: "Advanced" },
    { term: "Conjoint Analysis", definition: "Survey-based statistical technique to determine how customers value different product attributes and trade-offs", category: "Market Research", level: "Advanced" }
  ],
  b111: [
    { term: "Capital Asset Pricing Model (CAPM)", definition: "Model establishing the linear relationship between expected asset return and non-diversifiable systematic risk (Beta)", category: "Asset Pricing", level: "Core" },
    { term: "Weighted Average Cost of Capital (WACC)", definition: "The overall blended rate of return a company must earn on its existing asset base to satisfy debt and equity holders", category: "Corporate Finance", level: "Core" },
    { term: "Discounted Cash Flow (DCF Valuation)", definition: "Valuing an investment by projecting future free cash flows and discounting them back to present value using WACC", category: "Valuation", level: "Core" },
    { term: "Black-Scholes-Merton Option Model", definition: "Partial differential equation model determining theoretical fair price for European call/put options based on volatility", category: "Derivatives", level: "Advanced" },
    { term: "Efficient Market Hypothesis (EMH)", definition: "Theory stating that financial asset prices reflect all available information across weak, semi-strong, and strong forms", category: "Market Microstructure", level: "Core" }
  ],
  chess: [
    { term: "Zugzwang", definition: "Compulsion to move: a position where any legal move a player makes will decisively worsen their position", category: "Tactical Concept", level: "Core" },
    { term: "Outpost Knight", definition: "A knight established on an advanced hole in opponent's camp (ranks 4-6) protected by a pawn and unassailable by enemy pawns", category: "Positional Strategy", level: "Core" },
    { term: "Lucena Position", definition: "The foundational winning endgame technique for rook-and-pawn endings, building a 'bridge' to queen the pawn", category: "Endgame Mastery", level: "Advanced" },
    { term: "Philidor Position", definition: "The key defensive drawing technique in rook-and-pawn endings by cutting off the attacking king with a 3rd-rank rook barrier", category: "Endgame Mastery", level: "Advanced" },
    { term: "Pawn Majority & Passed Pawn Creation", definition: "Having more pawns on one flank to engineer an unstoppable passed pawn that forces enemy pieces into defense", category: "Pawn Structure", level: "Core" }
  ],
  fitness: [
    { term: "Overcoming vs Yielding Isometric Contraction", definition: "Overcoming isometrics press against an immovable barrier with 100% voluntary effort; yielding isometrics resist gravitational descent", category: "Muscle Mechanics", level: "Core" },
    { term: "Time Under Tension (TUT) & Tempo Notation", definition: "Standard 4-digit cadence (e.g. 4-0-1-0 = 4s eccentric descent, 0s pause, 1s concentric drive, 0s top lockout)", category: "Program Design", level: "Core" },
    { term: "Post-Activation Potentiation (PAP)", definition: "Enhanced neuromuscular performance in an explosive movement achieved immediately following a maximal isometric pre-load", category: "Neuro-Muscular Power", level: "Advanced" },
    { term: "Scapulohumeral Rhythm & Centration", definition: "The synchronized kinematic 2:1 ratio between glenohumeral elevation and scapular upward rotation protecting shoulder joints", category: "Biomechanics", level: "Core" },
    { term: "Intra-Abdominal Pressure (IAP) & 360° Bracing", definition: "Deep diaphragmatic expansion and transverse abdominis co-contraction creating rigid hydraulic spinal stability", category: "Spinal Mechanics", level: "Core" }
  ]
};

// Inject and deduplicate expansions into dict
let addedCount = 0;
for (const subj in EXPANSIONS) {
  const normKey = subj.replace('_', '-');
  if (!dict[normKey] && !dict[subj]) {
    dict[normKey] = [];
  }
  const targetArray = dict[normKey] || dict[subj];
  const existingTerms = new Set(targetArray.map(e => e.term.toLowerCase()));

  EXPANSIONS[subj].forEach(item => {
    if (!existingTerms.has(item.term.toLowerCase())) {
      targetArray.push(item);
      addedCount++;
    }
  });
}

console.log('Added ' + addedCount + ' new rich terms across omni_dictionary!');

// Format and save
const output = '// Fearn Omniscient Lexicon & Master Dictionary Data Store\n(function(global){\n  \'use strict\';\n  var DICTIONARY = ' + JSON.stringify(dict, null, 2) + ';\n  global.FEARN_DICTIONARY = DICTIONARY;\n  if (typeof module !== \'undefined\' && module.exports) module.exports = DICTIONARY;\n})(typeof window !== \'undefined\' ? window : global);\n';

fs.writeFileSync(dictPath, output, 'utf8');
console.log('Successfully saved expanded omni_dictionary.js!');
