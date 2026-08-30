// amharic curriculum
(function (global) {
  'use strict';
  var UNITS = [
  {
    "id": "am-u1",
    "unit": 1,
    "title": "ፊደል እና የመጀመሪያ ሰላምታ (Fidel Alphabet & Greetings)",
    "level": "A1",
    "goal": "By the end of this unit, learners can read basic Fidel script principles, greet others across formal, informal, masculine, and feminine social registers, introduce themselves by name, use essential Ethiopian etiquette formulas, and say goodbye appropriately.",
    "lessonIds": [
      "am-u1-l1",
      "am-u1-l2",
      "am-u1-l3",
      "am-u1-l4",
      "am-u1-l5"
    ]
  },
  {
    "id": "am-u2",
    "unit": 2,
    "title": "መሰረታዊ ስሞች እና መስተፃምሮች (Basic Nouns & Articles)",
    "level": "A1",
    "goal": "Mastery of የዕለት ተዕለት ቁሳቁሶች እና ስሞች (Everyday Nouns and Definiteness).",
    "lessonIds": [
      "am-u2-l1",
      "am-u2-l2",
      "am-u2-l3",
      "am-u2-l4",
      "am-u2-l5"
    ]
  },
  {
    "id": "am-u3",
    "unit": 3,
    "title": "የግል ተውላጠ ስሞች እና መስተዋድድ (Personal Pronouns & Prepositions)",
    "level": "A1",
    "goal": "Mastery of ተውላጠ ስሞች እና አቅጣጫዎች (Pronouns and Prepositions).",
    "lessonIds": [
      "am-u3-l1",
      "am-u3-l2",
      "am-u3-l3",
      "am-u3-l4",
      "am-u3-l5"
    ]
  },
  {
    "id": "am-u4",
    "unit": 4,
    "title": "ቀላል የአሁን ጊዜ ግሶች (Present Tense & Habitual Actions)",
    "level": "A1",
    "goal": "Mastery of የአሁን ጊዜ አጠቃቀም (Present Tense Habits).",
    "lessonIds": [
      "am-u4-l1",
      "am-u4-l2",
      "am-u4-l3",
      "am-u4-l4",
      "am-u4-l5"
    ]
  },
  {
    "id": "am-u5",
    "unit": 5,
    "title": "የቀድሞ ጊዜ ግስ እና ታሪክ (Simple Past Tense Narratives)",
    "level": "A1",
    "goal": "Mastery of ያለፈ ጊዜ ድርጊቶች (Past Tense Narration).",
    "lessonIds": [
      "am-u5-l1",
      "am-u5-l2",
      "am-u5-l3",
      "am-u5-l4",
      "am-u5-l5"
    ]
  },
  {
    "id": "am-u6",
    "unit": 6,
    "title": "የወደፊት ጊዜ እና እቅድ (Future Tense & Intentions)",
    "level": "A2",
    "goal": "Mastery of የወደፊት እቅዶች (Future Intentions).",
    "lessonIds": [
      "am-u6-l1",
      "am-u6-l2",
      "am-u6-l3",
      "am-u6-l4",
      "am-u6-l5"
    ]
  },
  {
    "id": "am-u7",
    "unit": 7,
    "title": "የግስ አሉታ እና ጥያቄዎች (Negation & Interrogatives)",
    "level": "A2",
    "goal": "Mastery of አሉታዊ ዓረፍተ ነገሮች (Negation Forms).",
    "lessonIds": [
      "am-u7-l1",
      "am-u7-l2",
      "am-u7-l3",
      "am-u7-l4",
      "am-u7-l5"
    ]
  },
  {
    "id": "am-u8",
    "unit": 8,
    "title": "ቤተሰብ እና ማህበራዊ ግንኙነት (Family & Kinship Structures)",
    "level": "A2",
    "goal": "Mastery of የቤተሰብ ዝምድና (Family Kinship Terms).",
    "lessonIds": [
      "am-u8-l1",
      "am-u8-l2",
      "am-u8-l3",
      "am-u8-l4",
      "am-u8-l5"
    ]
  },
  {
    "id": "am-u9",
    "unit": 9,
    "title": "ምግብ፣ ገበያ እና ግብይት (Cuisine, Markets & Commerce)",
    "level": "A2",
    "goal": "Mastery of የገበያ ግብይት እና ምግቦች (Market Shopping and Cuisine).",
    "lessonIds": [
      "am-u9-l1",
      "am-u9-l2",
      "am-u9-l3",
      "am-u9-l4",
      "am-u9-l5"
    ]
  },
  {
    "id": "am-u10",
    "unit": 10,
    "title": "ቦታዎች፣ ከተማ እና ጉዞ (City Navigation & Spatial Relations)",
    "level": "A2",
    "goal": "Mastery of የከተማ ጉዞ እና አቅጣጫ (Urban Navigation).",
    "lessonIds": [
      "am-u10-l1",
      "am-u10-l2",
      "am-u10-l3",
      "am-u10-l4",
      "am-u10-l5"
    ]
  },
  {
    "id": "am-u11",
    "unit": 11,
    "title": "ጊዜ፣ ሰዓት እና የቀን መቁጠሪያ (Time Expressions & Calendar)",
    "level": "B1",
    "goal": "Mastery of ሰዓት እና የቀን ስሞች (Time and Days).",
    "lessonIds": [
      "am-u11-l1",
      "am-u11-l2",
      "am-u11-l3",
      "am-u11-l4",
      "am-u11-l5"
    ]
  },
  {
    "id": "am-u12",
    "unit": 12,
    "title": "የሰውነት ክፍሎች እና ጤና (Health & Medical Consultations)",
    "level": "B1",
    "goal": "Mastery of የጤና እንክብካቤ እና ህክምና (Health and Anatomy).",
    "lessonIds": [
      "am-u12-l1",
      "am-u12-l2",
      "am-u12-l3",
      "am-u12-l4",
      "am-u12-l5"
    ]
  },
  {
    "id": "am-u13",
    "unit": 13,
    "title": "አየር ሁኔታ እና የተፈጥሮ አካባቢ (Weather & Geography)",
    "level": "B1",
    "goal": "Mastery of አየር ጠባይ እና ተፈጥሮ (Weather and Nature).",
    "lessonIds": [
      "am-u13-l1",
      "am-u13-l2",
      "am-u13-l3",
      "am-u13-l4",
      "am-u13-l5"
    ]
  },
  {
    "id": "am-u14",
    "unit": 14,
    "title": "ስራ፣ ሙያ እና የስራ ቦታ (Occupations & Workplace Dialogue)",
    "level": "B1",
    "goal": "Mastery of የስራ መስክ እና ሙያ (Professions and Workplace).",
    "lessonIds": [
      "am-u14-l1",
      "am-u14-l2",
      "am-u14-l3",
      "am-u14-l4",
      "am-u14-l5"
    ]
  },
  {
    "id": "am-u15",
    "unit": 15,
    "title": "ትምህርት፣ ሳይንስ እና ቴክኖሎጂ (Education & Academia)",
    "level": "B1",
    "goal": "Mastery of የትምህርት ጥናት (Education and Academia).",
    "lessonIds": [
      "am-u15-l1",
      "am-u15-l2",
      "am-u15-l3",
      "am-u15-l4",
      "am-u15-l5"
    ]
  },
  {
    "id": "am-u16",
    "unit": 16,
    "title": "ስሜት፣ ስነ-ልቦና እና ባህሪ (Emotions & Psychology)",
    "level": "B1",
    "goal": "Mastery of ስሜታዊ መግለጫዎች (Emotions and Feelings).",
    "lessonIds": [
      "am-u16-l1",
      "am-u16-l2",
      "am-u16-l3",
      "am-u16-l4",
      "am-u16-l5"
    ]
  },
  {
    "id": "am-u17",
    "unit": 17,
    "title": "የግስ ዝርያዎች፡ ተገብሮ ግስ (Passive Verb Derivations - ተ-)",
    "level": "B2",
    "goal": "Mastery of ተገብሮ ግስ አወቃቀር (Passive Stems).",
    "lessonIds": [
      "am-u17-l1",
      "am-u17-l2",
      "am-u17-l3",
      "am-u17-l4",
      "am-u17-l5"
    ]
  },
  {
    "id": "am-u18",
    "unit": 18,
    "title": "የግስ ዝርያዎች፡ አሰሪ ግስ (Causative Derivations - አስ-)",
    "level": "B2",
    "goal": "Mastery of አሰሪ ግስ አወቃቀር (Causative Stems).",
    "lessonIds": [
      "am-u18-l1",
      "am-u18-l2",
      "am-u18-l3",
      "am-u18-l4",
      "am-u18-l5"
    ]
  },
  {
    "id": "am-u19",
    "unit": 19,
    "title": "ቅጽሎች እና ንፅፅር (Comparative & Superlative Forms)",
    "level": "B2",
    "goal": "Mastery of ንፅፅር እና ቅጽሎች (Comparatives).",
    "lessonIds": [
      "am-u19-l1",
      "am-u19-l2",
      "am-u19-l3",
      "am-u19-l4",
      "am-u19-l5"
    ]
  },
  {
    "id": "am-u20",
    "unit": 20,
    "title": "ተቀጥላ ዓረፍተ ነገሮች (Subordinate Clauses & Relative የ-)",
    "level": "B2",
    "goal": "Mastery of አገናኝ መስተፃምሮች (Relative Clauses).",
    "lessonIds": [
      "am-u20-l1",
      "am-u20-l2",
      "am-u20-l3",
      "am-u20-l4",
      "am-u20-l5"
    ]
  },
  {
    "id": "am-u21",
    "unit": 21,
    "title": "ሁኔታዊ እና ግምታዊ ዓረፍተ ነገሮች (Conditionals & Subjunctive)",
    "level": "B2",
    "goal": "Mastery of ሁኔታዊ አገባቦች (Conditionals).",
    "lessonIds": [
      "am-u21-l1",
      "am-u21-l2",
      "am-u21-l3",
      "am-u21-l4",
      "am-u21-l5"
    ]
  },
  {
    "id": "am-u22",
    "unit": 22,
    "title": "ቀጥተኛ ያልሆነ ንግግር (Reported Speech & Conjunctions)",
    "level": "B2",
    "goal": "Mastery of ቀጥተኛ ያልሆነ ንግግር (Indirect Speech).",
    "lessonIds": [
      "am-u22-l1",
      "am-u22-l2",
      "am-u22-l3",
      "am-u22-l4",
      "am-u22-l5"
    ]
  },
  {
    "id": "am-u23",
    "unit": 23,
    "title": "የኢትዮጵያ ባህል እና ወጎች (Cultural Heritage & Coffee Ceremony)",
    "level": "B2",
    "goal": "Mastery of የቡና ስነ-ስርዓት እና ባህል (Coffee Ceremony and Customs).",
    "lessonIds": [
      "am-u23-l1",
      "am-u23-l2",
      "am-u23-l3",
      "am-u23-l4",
      "am-u23-l5"
    ]
  },
  {
    "id": "am-u24",
    "unit": 24,
    "title": "ኪነ-ጥበብ፣ ሙዚቃ እና ስነ-ጽሁፍ (Arts, Music & Literature)",
    "level": "B2",
    "goal": "Mastery of ስነ-ጽሁፍ እና ጥበብ (Literature and Arts).",
    "lessonIds": [
      "am-u24-l1",
      "am-u24-l2",
      "am-u24-l3",
      "am-u24-l4",
      "am-u24-l5"
    ]
  },
  {
    "id": "am-u25",
    "unit": 25,
    "title": "ታሪክ እና ጥንታዊ ቅርሶች (Ethiopian History & Ge'ez Roots)",
    "level": "C1",
    "goal": "Mastery of ታሪክ እና ቅርሶች (History and Heritage).",
    "lessonIds": [
      "am-u25-l1",
      "am-u25-l2",
      "am-u25-l3",
      "am-u25-l4",
      "am-u25-l5"
    ]
  },
  {
    "id": "am-u26",
    "unit": 26,
    "title": "ህግ፣ አስተዳደር እና ፖለቲካ (Legal Terminology & Governance)",
    "level": "C1",
    "goal": "Mastery of ህጋዊ ቃላት እና አስተዳደር (Legal Discourse).",
    "lessonIds": [
      "am-u26-l1",
      "am-u26-l2",
      "am-u26-l3",
      "am-u26-l4",
      "am-u26-l5"
    ]
  },
  {
    "id": "am-u27",
    "unit": 27,
    "title": "ኢኮኖሚ፣ ንግድ እና ፋይናንስ (Economics & Banking)",
    "level": "C1",
    "goal": "Mastery of የኢኮኖሚ ትንተና (Economics and Banking).",
    "lessonIds": [
      "am-u27-l1",
      "am-u27-l2",
      "am-u27-l3",
      "am-u27-l4",
      "am-u27-l5"
    ]
  },
  {
    "id": "am-u28",
    "unit": 28,
    "title": "ሚዲያ፣ ጋዜጠኝነት እና ግንኙነት (Media & Journalism)",
    "level": "C1",
    "goal": "Mastery of ጋዜጠኝነት እና ዜና (Journalism and Media).",
    "lessonIds": [
      "am-u28-l1",
      "am-u28-l2",
      "am-u28-l3",
      "am-u28-l4",
      "am-u28-l5"
    ]
  },
  {
    "id": "am-u29",
    "unit": 29,
    "title": "አካባቢ ጥበቃ እና ዘላቂ ልማት (Ecology & Sustainable Development)",
    "level": "C1",
    "goal": "Mastery of የአካባቢ ጥበቃ (Environmental Science).",
    "lessonIds": [
      "am-u29-l1",
      "am-u29-l2",
      "am-u29-l3",
      "am-u29-l4",
      "am-u29-l5"
    ]
  },
  {
    "id": "am-u30",
    "unit": 30,
    "title": "ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)",
    "level": "C1",
    "goal": "Mastery of ፍልስፍናዊ አስተሳሰብ (Philosophical Discourse).",
    "lessonIds": [
      "am-u30-l1",
      "am-u30-l2",
      "am-u30-l3",
      "am-u30-l4",
      "am-u30-l5"
    ]
  },
  {
    "id": "am-u31",
    "unit": 31,
    "title": "ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)",
    "level": "C2",
    "goal": "Mastery of ሳይንሳዊ ግኝት (Scientific Research).",
    "lessonIds": [
      "am-u31-l1",
      "am-u31-l2",
      "am-u31-l3",
      "am-u31-l4",
      "am-u31-l5"
    ]
  },
  {
    "id": "am-u32",
    "unit": 32,
    "title": "ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)",
    "level": "C2",
    "goal": "Mastery of ዲፕሎማሲ እና ስምምነት (Diplomacy and Treaties).",
    "lessonIds": [
      "am-u32-l1",
      "am-u32-l2",
      "am-u32-l3",
      "am-u32-l4",
      "am-u32-l5"
    ]
  },
  {
    "id": "am-u33",
    "unit": 33,
    "title": "የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)",
    "level": "C2",
    "goal": "Mastery of የአነጋገር ዘይቤ (Idiomatic Expressions).",
    "lessonIds": [
      "am-u33-l1",
      "am-u33-l2",
      "am-u33-l3",
      "am-u33-l4",
      "am-u33-l5"
    ]
  },
  {
    "id": "am-u34",
    "unit": 34,
    "title": "የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)",
    "level": "C2",
    "goal": "Mastery of የላቀ የአማርኛ ንግግር (C2 Capstone Statecraft).",
    "lessonIds": [
      "am-u34-l1",
      "am-u34-l2",
      "am-u34-l3",
      "am-u34-l4",
      "am-u34-l5"
    ]
  }
];
  var LESSONS = {
  "am-u1-l1": {
    "id": "am-u1-l1",
    "subject": "amharic",
    "unit": 1,
    "lessonNumber": 1,
    "title": "የፊደል መዋቅር እና የመጀመሪያ ሰላምታዎች (The Fidel Abugida System & Essential Greetings)",
    "level": "A1",
    "objective": "የግዕዝ/አማርኛ ፊደልን 7 የድምፅ ቅደም ተከተሎች (orders) መረዳት እና መሰረታዊ የሰላምታ አገላለጾችን (ሰላም፣ እንደምን ነህ/ነሽ/ኖት) በጾታና በአክብሮት ለይቶ መጠቀም።",
    "presentation": {
      "explanation": "እንኳን ወደ አማርኛ ቋንቋ ትምህርት በደህና መጡ! አማርኛ በኢትዮጵያ ውስጥ በስፋት የሚነገር ጥንታዊና ታሪካዊ ቋንቋ ሲሆን፣ አጻጻፉም በግዕዝ ፊደላት ስርዓት የተመሰረተ ነው:\n\n፩. የፊደል አወቃቀር እና ሰባቱ ድምጾች:\nየአማርኛ ፊደል ለእያንዳንዱ ተነባቢ ድምፅ ሰባት የአናባቢ ቅደም ተከተሎች አሉት:\n- ግዕዝ (፩ኛ ድምፅ): ሀ፣ ለ፣ መ፣ ሠ፣ ረ፣ ሰ፣ ሸ፣ ቀ፣ በ፣ ተ፣ ቸ፣ ኀ፣ ነ፣ ኘ፣ አ፣ ከ፣ ኸ፣ ወ፣ ዐ፣ ዘ፣ ዠ፣ የ፣ ደ፣ ጀ፣ ገ፣ ጠ፣ ጨ፣ ጰ፣ ጸ፣ ፀ፣ ፈ፣ ፐ።\n- ካዕብ (፪ኛ ድምፅ): ሁ፣ ሉ፣ ሙ፣ ሡ፣ ሩ፣ ሱ፣ ሹ፣ ቁ፣ ቡ፣ ቱ፣ ቹ፣ ኁ፣ ኑ፣ ኙ፣ ኡ፣ ኩ፣ ኹ፣ ዉ፣ ዑ፣ ዙ፣ ዡ፣ ዩ፣ ዱ፣ ጁ፣ ጉ፣ ጡ፣ ጩ፣ ጱ፣ ጹ፣ ፁ፣ ፉ፣ ፑ።\n- ሣልስ (፫ኛ ድምፅ): ሂ፣ ሊ፣ ሚ፣ ሢ፣ ሪ፣ ሲ፣ ሺ፣ ቂ፣ ቢ፣ ቲ፣ ቺ፣ ኂ፣ ኒ፣ ኚ፣ ኢ፣ ኪ፣ ኺ፣ ዊ፣ ዒ፣ ዚ፣ ዢ፣ ዪ፣ ዲ፣ ጂ፣ ጊ፣ ጢ፣ ጪ፣ ጲ፣ ጺ፣ ፂ፣ ፊ፣ ፒ።\n- ራብዕ (፬ኛ ድምፅ): ሃ፣ ላ፣ ማ፣ ሣ፣ ራ፣ ሳ፣ ሻ፣ ቃ፣ ባ፣ ታ፣ ቻ፣ ኃ፣ ና፣ ኛ፣ ኣ፣ ካ፣ ኻ፣ ዋ፣ ዓ፣ ዛ፣ ዣ፣ ያ፣ ዳ፣ ጃ፣ ጋ፣ ጣ፣ ጫ፣ ጳ፣ ጻ፣ ፃ፣ ፋ፣ ፓ።\n- ኃምስ (፭ኛ ድምፅ): ሄ፣ ሌ፣ ሜ፣ ሤ፣ ሬ፣ ሴ፣ ሼ፣ ቄ፣ ቤ፣ ቴ፣ ቼ፣ ኄ፣ ኔ፣ ኜ፣ ኤ፣ ኬ፣ ኼ፣ ዌ፣ ዔ፣ ዜ፣ ዤ፣ ዬ፣ ዴ፣ ጄ፣ ጌ፣ ጤ፣ ጬ፣ ጴ፣ ጼ፣ ፄ፣ ፌ፣ ፔ።\n- ሳድስ (፮ኛ ድምፅ): ህ፣ ል፣ ም፣ ሥ፣ ር፣ ስ፣ ሽ፣ ቅ፣ ብ፣ ት፣ ች፣ ኅ፣ ን፣ ኝ፣ እ፣ ክ፣ ኽ፣ ው፣ ዕ፣ ዝ፣ ዥ፣ ይ፣ ድ፣ ጅ፣ ግ፣ ጥ፣ ጭ፣ ጵ፣ ጽ፣ ፅ፣ ፍ፣ ፕ።\n- ሳብዕ (፯ኛ ድምፅ): ሆ፣ ሎ፣ ሞ፣ ሦ፣ ሮ፣ ሶ፣ ሾ፣ ቆ፣ ቦ፣ ቶ፣ ቾ፣ ኆ፣ ኖ፣ ኞ፣ ኦ፣ ኮ፣ ኾ፣ ዎ፣ ዖ፣ ዞ፣ ዦ፣ ዮ፣ ዶ፣ ጆ፣ ጎ፣ ጦ፣ ጮ፣ ጶ፣ ጾ፣ ፆ፣ ፎ፣ ፖ።\n\n፪. መሰረታዊ የሰላምታ አገላለጾች:\n- «ሰላም»: አጠቃላይ የሰላምታ ቃል ሲሆን ለማንኛውም ሰውና በማንኛውም ሰዓት ያገለግላል።\n- «እንደምን ነህ?»: ለአንድ ወንድ የሚቀርብ የደህንነት ጥያቄ ነው።\n- «እንደምን ነሽ?»: ለአንዲት ሴት የሚቀርብ የደህንነት ጥያቄ ነው።\n- «እንደምን ኖት?»: ለአዋቂ ወይም ለታላቅ ሰው በአክብሮት የሚቀርብ የጨዋነት ጥያቄ ነው።\n- «እንደምን ናችሁ?»: ለብዙ ሰዎች በአንድነት የሚቀርብ ጥያቄ ነው።\n\n፫. የሰላምታ ምላሾች:\n- «ደህና ነኝ፣ እግዚአብሔር ይመስገን»: በኢትዮጵያ ባህል እጅግ የተለመደና የተወደደ ትሁት ምላሽ ነው።\n- «በጣም ደህና ነኝ፣ አመሰግናለሁ»: አጭርና ግልጽ የሆነ አዎንታዊ ምላሽ ነው።",
      "examples": [
        {
          "target": "ሰላም፣ እንደምን ነህ? ደህና ነኝ፣ እግዚአብሔር ይመስገን።",
          "reading": "Sälam, əndämən näh? Dähna näny, əgzi'abhér yəmmäsgän. [səˈlam ɨndɨˈmɨn nɛh dɛhˈna nɨɲ ɨɡzi.aˈbher jɨmˈmɛsɡɨn] (suh-LAHM, un-duh-MUN neh? deh-NAH nuh-NY, ug-zee-ah-BHER yum-MES-gun)",
          "translation": "Hello, how are you [to a male]? I am well, thank God."
        },
        {
          "target": "ሰላም፣ እንደምን ነሽ? እኔ በጣም ደህና ነኝ፣ አመሰግናለሁ።",
          "reading": "Sälam, əndämən näsh? Əne bətam dähna näny, amäsäggənalähu. [səˈlam ɨndɨˈmɨn nɛʃ ɨˈne bɨˈtʼam dɛhˈna nɨɲ amɨsɨɡːɨˈnalɨhu] (suh-LAHM, un-duh-MUN nesh? uh-NAY buh-TAHM deh-NAH nuh-NY, ah-muh-sug-guh-NAH-luh-hoo)",
          "translation": "Hello, how are you [to a female]? I am very well, thank you."
        },
        {
          "target": "ሰላም ጤና ይስጥልኝ እንደምን ኖት? ደህና ነኝ እግዚአብሔር ይመስገን።",
          "reading": "Sälam téna yəst’əlləny əndämən not? Dähna näny əgzi'abhér yəmmäsgän. [səˈlam tʼeˈna jɨsˈtʼɨlːɨɲ ɨndɨˈmɨn not dɛhˈna nɨɲ ɨɡzi.aˈbher jɨmˈmɛsɡɨn] (suh-LAHM t'ay-NAH yus-T'UL-luh-ny un-duh-MUN noht? deh-NAH nuh-NY ug-zee-ah-BHER yum-MES-gun)",
          "translation": "Hello, greetings [formal], how are you [polite]? I am fine, praise God."
        }
      ],
      "mnemonics": [
        "Fidel Orders: 1st=ä (ሀ), 2nd=u (ሁ), 3rd=i (ሂ), 4th=a (ሃ), 5th=e (ሄ), 6th=ə (ህ), 7th=o (ሆ)! Remember: -ህ (näh) for male, -ሽ (näsh) for female, -ዎት (not) for respect!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል ሰላምታ ትልቅ ቦታ አለው። ሰላምታ ሲሰጡ ፈገግታ ማሳየትና አክብሮት መግለጽ የተለመደ ሲሆን፣ 'እግዚአብሔር ይመስገን' ማለት የትህትና መገለጫ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ወንድ ጓደኛህን 'እንደምን ነህ?' ብለህ ስትጠይቀው፣ ትክክለኛው ጨዋነት የተሞላበት ምላሽ የትኛው ነው?",
          "options": [
            "ደህና ነኝ፣ እግዚአብሔር ይመስገን። (I am well, thank God - Correct standard response)",
            "አይ እኔ ቤት የለኝም።",
            "ዛሬ ዝናብ አይዘንብም።",
            "መጽሐፉ ጠረጴዛ ላይ ነው።"
          ],
          "answerIndex": 0,
          "explanation": "«ደህና ነኝ፣ እግዚአብሔር ይመስገን» በሰላምታ ወቅት የሚሰጥ ትክክለኛ እና ባህላዊ ምላሽ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "አንዲትን ሴት በአማርኛ 'እንደምን ነሽ?' ብለህ ሰላምታ ስታቀርብላት፣ ሴቷ በምን አገላለጽ ትመልሳለች?",
          "options": [
            "በጣም ደህና ነኝ፣ አመሰግናለሁ። (I am very well, thank you - Correct feminine/neutral response)",
            "ሰዓቱ አምስት ሆኗል።",
            "ወደ ገበያ እሄዳለሁ።",
            "ሻይ አልጠጣም።"
          ],
          "answerIndex": 0,
          "explanation": "«በጣም ደህና ነኝ፣ አመሰግናለሁ» ሰላምታ ለቀረበላት ሴት ተገቢና ትክክለኛ ምላሽ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአማርኛን የሰላምታ አገላለጾች በጾታና በአክብሮት በትክክል የለየው የትኛው ነው?",
          "options": [
            "ለወንድ 'እንደምን ነህ?'፣ ለሴት 'እንደምን ነሽ?'፣ ለአክብሮት 'እንደምን ኖት?' ይባላል።",
            "ለወንድ 'እንደምን ነሽ?' ተብሎ ይጠየቃል።",
            "ለታላቅ ሰው 'እንደምን ነሽ?' ማለት ተገቢ ነው።",
            "በአማርኛ ቋንቋ የጾታ ልዩነት በሰላምታ ውስጥ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "በአማርኛ ለወንድ «ነህ»፣ ለሴት «ነሽ»፣ ለአክብሮት «ኖት» ጥቅም ላይ ይውላል።"
        },
        {
          "type": "typed-recall",
          "prompt": "በአማርኛ ቋንቋ አጠቃላይ 'ሰላም / Hello' የሚለውን ቃል በግዕዝ ፊደላት ጻፉ:",
          "acceptedAnswers": [
            "ሰላም"
          ],
          "explanation": "ትክክለኛው የሰላምታ ቃል «ሰላም» (Sälam) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u1-l2": {
    "id": "am-u1-l2",
    "subject": "amharic",
    "unit": 1,
    "lessonNumber": 2,
    "title": "ራስን ማስተዋወቅ እና ስም መናገር (Self-Introductions & Asking Names)",
    "level": "A1",
    "objective": "ስም መጠየቅ (ስምህ/ስምሽ/ስምዎ ማን ነው?)፣ ራስን በስም ማስተዋወቅ (ስሜ ... ነው / እኔ ... እባላለሁ)፣ እና 'ስለተዋወቅን ደስ ብሎኛል' የሚለውን አገላለጽ መተግበር።",
    "presentation": {
      "explanation": "በአማርኛ ቋንቋ ራስን ማስተዋወቅ እና የሰዎችን ስም በትህትና መጠየቅ መሰረታዊ ተግባቦት ነው:\n\n፩. ስም መጠየቅ:\n- «ስምህ ማን ነው?»: ለአንድ ወንድ ስሙን ስንጠይቅ የምንጠቀምበት ጥያቄ ነው።\n- «ስምሽ ማን ነው?»: ለአንዲት ሴት ስሟን ስንጠይቅ የምንጠቀምበት ጥያቄ ነው።\n- «ስምዎ ማን ነው?»: ለታላቅ ሰው ወይም በስራ ቦታ በአክብሮት ስም ለመጠየቅ ያገለግላል።\n\n፪. ራስን በስም ማስተዋወቅ:\n- «ስሜ [ስም] ነው»: ለምሳሌ «ስሜ ዳዊት ነው» ወይም «ስሜ አስቴር ነው»።\n- «እኔ [ስም] እባላለሁ»: ራስን በይበልጥ በይፋዊ መንገድ ለመግለጽ ያገለግላል።\n\n፫. የግል ተውላጠ ስሞች እና የጨዋነት መግለጫ:\n- እኔ፣ አንተ (ለወንድ)፣ አንቺ (ለሴት)፣ እርስዎ (ለአክብሮት)።\n- «ስለተዋወቅን ደስ ብሎኛል»: አዲስ ሰውን ስናገኝ የምንለው የጨዋነት ቃል ነው።\n- «እኔም ደስ ብሎኛል»: ለቀረበው ምስጋና የሚሰጥ አጸፋዊ ምላሽ ነው።",
      "examples": [
        {
          "target": "ስምህ ማን ነው? ስሜ ዮሐንስ ነው፣ ስለተዋወቅን ደስ ብሎኛል።",
          "reading": "Səməh man näw? Səme Yohannəs näw, səlätäwawäqn däs bəlognyal. [sɨˈmɨh man nɛw sɨˈme joˈhanːɨs nɛw sɨlɨtɨwaˈwɨkʼn dɛs bɨˈloɲːal] (suh-MUH-h mahn neh? suh-MAY yoh-HAHN-nus neh, suh-luh-tuh-wah-WUK'-n des buh-LOH-nyahl)",
          "translation": "What is your name [to a male]? My name is Yohannes, pleased to meet you."
        },
        {
          "target": "ስምሽ ማን ነው? ስሜ ሄለን ይባላል፣ እኔም ስለተዋወቅን ደስ ብሎኛል።",
          "reading": "Səməsh man näw? Səme Helän yəbbalal, ənem səlätäwawäqn däs bəlognyal. [sɨˈmɨʃ man nɛw sɨˈme heˈlɛn jɨbːaˈlal ɨˈnem sɨlɨtɨwaˈwɨkʼn dɛs bɨˈloɲːal] (suh-MOOSH mahn neh? suh-MAY hay-LEN yub-bah-LAHL, uh-NAYM suh-luh-tuh-wah-WUK'-n des buh-LOH-nyahl)",
          "translation": "What is your name [to a female]? My name is Helen, I am pleased to meet you too."
        },
        {
          "target": "እኔ ተማሪ ነኝ፣ አንተ ማን ነህ? እኔም አዲስ ተማሪ ነኝ።",
          "reading": "Əne tämari näny, antä man näh? Ənem addis tämari näny. [ɨˈne tɛmaˈri nɨɲ anˈtɛ man nɛh ɨˈnem adˈdis tɛmaˈri nɨɲ] (uh-NAY teh-mah-REE nuh-NY, ahn-TEH mahn neh? uh-NAYM ahd-DEES teh-mah-REE nuh-NY)",
          "translation": "I am a student, who are you [to a male]? I am also a new student."
        }
      ],
      "mnemonics": [
        "Name prefixes: ስሜ (səme = my name), ስምህ (səməh = your name [m]), ስምሽ (səməsh = your name [f]), ስምዎ (səməwo = your name [polite])!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ የስም አሰጣጥ ስርዓት የቤተሰብ መጠሪያ (surname) የለም፤ የአንድ ሰው ስም የራሱ ስም እና የአባቱ ስም ተቀጥሎ ይጠራል (ለምሳሌ: አበበ ቢቂላ)።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "አንድን ወንድ 'ስምህ ማን ነው?' ብለህ ስትጠይቀው፣ ትክክለኛው ምላሽ የየትኛው ነው?",
          "options": [
            "ስሜ ዳዊት ነው፣ ስለተዋወቅን ደስ ብሎኛል። (My name is Dawit, pleased to meet you - Correct self-introduction)",
            "ዛሬ ሰኞ ቀን ነው።",
            "ውኃ መጠጣት እፈልጋለሁ።",
            "ቤቱ በጣም ሩቅ ነው።"
          ],
          "answerIndex": 0,
          "explanation": "«ስሜ ዳዊት ነው፣ ስለተዋወቅን ደስ ብሎኛል» ስም ለተጠየቀ ሰው ተገቢ ምላሽ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "አንዲትን ሴት በአክብሮትና በትክክለኛ ሰዋሰው ስሟን ለመጠየቅ የትኛውን አረፍተ ነገር ትጠቀማለህ?",
          "options": [
            "ስምሽ ማን ነው? (What is your name? [to female] - Correct feminine form)",
            "ስምህ የት ሄደ?",
            "ስሜ ትላንት መጣ።",
            "ስምህ መኪና አለው።"
          ],
          "answerIndex": 0,
          "explanation": "ለሴት ስም ሲጠየቅ «ስምሽ ማን ነው?» የሚለው አገላለጽ ትክክለኛ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ከሚከተሉት ውስጥ ራስን በትክክል ለማስተዋወቅ የሚያገለግለው አረፍተ ነገር የትኛው ነው?",
          "options": [
            "እኔ ሳራ እባላለሁ፣ ስለተዋወቅን ደስ ብሎኛል። (I am called Sara, pleased to meet you - Correct full introduction)",
            "እኔ ትምህርት ቤት አልሄድም።",
            "ስምህ ዳቦ ይበላል።",
            "እሱ ዛሬ ደክሞታል።"
          ],
          "answerIndex": 0,
          "explanation": "«እኔ ሳራ እባላለሁ፣ ስለተዋወቅን ደስ ብሎኛል» ራስን በስም ለማስተዋወቅ የሚያገለግል ሙሉ አረፍተ ነገር ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ስሜ / My name' የሚለውን የአማርኛ ቃል በግዕዝ ፊደላት ጻፉ:",
          "acceptedAnswers": [
            "ስሜ"
          ],
          "explanation": "ትክክለኛው ቃል «ስሜ» (Səme) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u1-l3": {
    "id": "am-u1-l3",
    "subject": "amharic",
    "unit": 1,
    "lessonNumber": 3,
    "title": "የቀን ክፍለ ጊዜ ሰላምታዎች (Time-of-Day Greetings)",
    "level": "A1",
    "objective": "የጠዋት (እንደምን አደርክ/ሽ/ሩ)፣ የቀን (እንደምን ዋልክ/ሽ/ሉ)፣ እና የምሽት (እንደምን አመሸህ/ሽ/ሹ) ሰላምታዎችን እና ምላሾቻቸውን በጾታና በአክብሮት ለይቶ መጠቀም።",
    "presentation": {
      "explanation": "የአማርኛ ቋንቋ እንደ ቀኑ ክፍለ ጊዜ የተለዩ የሰላምታ ግሶችን ይጠቀማል:\n\n፩. የጠዋት ሰላምታ (ማደር):\n- «እንደምን አደርክ?»: ጠዋት ላይ ለወንድ የሚቀርብ ሰላምታ ነው።\n- «እንደምን አደርሽ?»: ጠዋት ላይ ለሴት የሚቀርብ ሰላምታ ነው።\n- «እንደምን አደሩ?»: ጠዋት ላይ ለታላቅ ሰው በአክብሮት ወይም ለብዙ ሰዎች ይባላል።\n- ምላሽ: «ደህና አደርኩ፣ እግዚአብሔር ይመስገን»።\n\n፪. የቀን ሰላምታ (መዋል):\n- «እንደምን ዋልክ?»: ከሰዓት በኋላ ለወንድ የሚባል ሰላምታ ነው።\n- «እንደምን ዋልሽ?»: ከሰዓት በኋላ ለሴት የሚባል ሰላምታ ነው።\n- «እንደምን ዋሉ?»: ከሰዓት በኋላ ለአክብሮት ወይም ለብዙ ሰዎች ይባላል።\n- ምላሽ: «ደህና ዋልኩ፣ እግዚአብሔር ይመስገን»።\n\n፫. የምሽት ሰላምታ (ማመሽ):\n- «እንደምን አመሸህ?»: ምሽት ላይ ለወንድ የሚባል ሰላምታ ነው።\n- «እንደምን አመሸሽ?»: ምሽት ላይ ለሴት የሚባል ሰላምታ ነው።\n- «እንደምን አመሹ?»: ምሽት ላይ ለአክብሮት ወይም ለብዙ ሰዎች ይባላል።\n- ምላሽ: «ደህና አመሸሁ፣ እግዚአብሔር ይመስገን»።",
      "examples": [
        {
          "target": "እንደምን አደርክ ወንድሜ? ደህና አደርኩ እግዚአብሔር ይመስገን።",
          "reading": "Əndämən adärk wändəme? Dähna adärku əgzi'abhér yəmmäsgän. [ɨndɨˈmɨn adɨrk wɨndɨˈme dɛhˈna adɨrˈku ɨɡzi.aˈbher jɨmˈmɛsɡɨn] (un-duh-MUN ah-DURK wun-duh-MAY? deh-NAH ah-DUR-koo ug-zee-ah-BHER yum-MES-gun)",
          "translation": "Good morning my brother! Good morning, praise God."
        },
        {
          "target": "እንደምን ዋልሽ እህቴ? ደህና ዋልኩ፣ ቀኑ እንዴት ነበር?",
          "reading": "Əndämən walsh əhəte? Dähna walku, qänu əndet näbbär? [ɨndɨˈmɨn walʃ ɨhɨˈte dɛhˈna walˈku kʼɨˈnu ɨnˈdet nɛbːɨr] (un-duh-MUN WAHL-sh uh-huh-TAY? deh-NAH WAHL-koo, k'uh-NOO un-DAYT neb-BUR?)",
          "translation": "Good afternoon my sister! Good afternoon, how was the day?"
        },
        {
          "target": "እንደምን አመሹ አባባ? ደህና አመሸሁ ልጄ፣ እንኳን ደህና መጣህ።",
          "reading": "Əndämən amäshu abbaba? Dähna amäshähu ləje, ənkwan dähna mätt'ah. [ɨndɨˈmɨn amɨʃːu abːaˈba dɛhˈna amɨʃːɨˈhu lɨˈdʒe ɨnkwan dɛhˈna mɛtʼːah] (un-duh-MUN ah-MESH-shoo ahb-bah-BAH? deh-NAH ah-mesh-shuh-HOO luh-JAY, un-KWAHN deh-NAH MET'-t'ah)",
          "translation": "Good evening father [polite]! Good evening my child, welcome."
        }
      ],
      "mnemonics": [
        "Time verbs: አደርክ (adärk = morning/night spent), ዋልክ (walk = daytime spent), አመሸህ (amäshäh = evening spent)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ የቀን ክፍለ ጊዜ ሰላምታዎች የሰውን ደህንነት ከመጠየቅ ባለፈ ጥልቅ አክብሮትና ቤተሰባዊ ቅርርብን ያሳያሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በጠዋት ሰዓት ለአንዲት ሴት ጓደኛህ የምታቀርበው ትክክለኛ የሰላምታ አገላለጽ የትኛው ነው?",
          "options": [
            "እንደምን አደርሽ? (Good morning [to female] - Correct morning greeting)",
            "እንደምን አመሸህ?",
            "እንደምን ዋልክ?",
            "ደህና እደሩ።"
          ],
          "answerIndex": 0,
          "explanation": "ለሴት በጠዋት ሰዓት «እንደምን አደርሽ?» ተብሎ ሰላምታ ይሰጣል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ከሰዓት በኋላ (ቀን) ለአንድ ወንድ 'እንደምን ዋልክ?' ተብሎ ሲጠየቅ፣ ምላሹ ምን ይሆናል?",
          "options": [
            "ደህና ዋልኩ፣ እግዚአብሔር ይመስገን። (I spent the day well, thank God - Correct daytime response)",
            "ደህና አደርኩ ትላንት።",
            "ነገ ጠዋት እመጣለሁ።",
            "ምሳ አልበላሁም።"
          ],
          "answerIndex": 0,
          "explanation": "ለቀን ሰላምታ «ደህና ዋልኩ፣ እግዚአብሔር ይመስገን» ትክክለኛ ምላሽ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "በምሽት ሰዓት ለታላቅ ሰው በአክብሮት ሰላምታ ለመስጠት የትኛው አረፍተ ነገር ያገለግላል?",
          "options": [
            "እንደምን አመሹ? (Good evening [polite/respectful] - Correct evening greeting)",
            "እንደምን ዋልክ?",
            "እንደምን አደርሽ?",
            "እንደምን ነህ ልጄ?"
          ],
          "answerIndex": 0,
          "explanation": "ለታላቅ ሰው በምሽት «እንደምን አመሹ?» ተብሎ በአክብሮት ይጠየቃል።"
        },
        {
          "type": "typed-recall",
          "prompt": "የጠዋት ሰላምታ ምላሽ የሆነውን 'ደህና አደርኩ' የሚለውን ሐረግ በግዕዝ ፊደላት ጻፉ:",
          "acceptedAnswers": [
            "ደህና አደርኩ"
          ],
          "explanation": "ትክክለኛው ሐረግ «ደህና አደርኩ» (Dähna adärku) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u1-l4": {
    "id": "am-u1-l4",
    "subject": "amharic",
    "unit": 1,
    "lessonNumber": 4,
    "title": "የአክብሮት ቃላት፣ ይቅርታ እና ምስጋና (Politeness Formulas, Thank You & Apologies)",
    "level": "A1",
    "objective": "ምስጋናን (አመሰግናለሁ፣ ምንም አይደለም)፣ ይቅርታን (ይቅርታ፣ ይቅርታ አድርግልኝ/አድርጊልኝ/ያድርጉልኝ)፣ እና ልመናን (እባክህ/እባክሽ/እባክዎ) በትክክለኛ ማህበራዊ ጨዋነት መጠቀም።",
    "presentation": {
      "explanation": "በአማርኛ ማህበራዊ ኑሮ ውስጥ ምስጋና፣ ይቅርታ እና የአክብሮት ልመና ትልቅ ስፍራ አላቸው:\n\n፩. የምስጋና አገላለጾች:\n- «አመሰግናለሁ»: አጠቃላይ የምስጋና ቃል ነው።\n- «በጣም አመሰግናለሁ»: ከፍ ያለ ምስጋና ለማቅረብ ያገለግላል።\n- «እግዚአብሔር ይስጥልኝ»: ጥልቅ ባህላዊና መንፈሳዊ ምስጋና ነው።\n- «ምንም አይደለም»: ለምስጋና የሚሰጥ ትሁት ምላሽ ነው።\n\n፪. የትህትና እና የልመና ቃላት:\n- «እባክህ»: ለአንድ ወንድ ልመና ስናቀርብ ጥቅም ላይ ይውላል።\n- «እባክሽ»: ለአንዲት ሴት ልመና ስናቀርብ ጥቅም ላይ ይውላል።\n- «እባክዎ» ወይም «እባክዎት»: ለታላቅ ሰው በአክብሮት ልመና ለማቅረብ ያገለግላል።\n- «እባካችሁ»: ለብዙ ሰዎች በአንድነት ልመና ስናቀርብ ይጠቅማል።\n\n፫. ይቅርታ መጠየቅ:\n- «ይቅርታ»: ስህተት ሲፈጠር ወይም መንገድ ለማስለቀቅ ያገለግላል።\n- «ይቅርታ አድርግልኝ» (ለወንድ), «ይቅርታ አድርጊልኝ» (ለሴት), «ይቅርታ ያድርጉልኝ» (ለአክብሮት)።\n- «አዎ» (እውነታን ለማረጋገጥ), «አይደለም» (አሉታን ለመግለጽ), «እሺ» (ስምምነትን ለማሳየት)።",
      "examples": [
        {
          "target": "እባክህ ውኃ ስጠኝ። ይኸውልህ፣ በጣም አመሰግናለሁ፣ ምንም አይደለም።",
          "reading": "Əbakəh wəha sət'äny. Yəhäwwələh, bətam amäsäggənalähu, mənəm aydälläm. [ɨˈbakɨh wɨˈha sɨˈtʼɨɲ jɨˈhɛwːɨlɨh bɨˈtʼam amɨsɨɡːɨˈnalɨhu mɨˈnɨm ajˈdɛlːɨm] (uh-BAH-kuh wuh-HAH sut'-uh-NY. yuh-HEW-wul-uh, buh-TAHM ah-muh-sug-guh-NAH-luh-hoo, muh-NUM eye-DEL-lum)",
          "translation": "Please [to male] give me water. Here you go, thank you very much, you're welcome."
        },
        {
          "target": "ይቅርታ፣ መንገድ አሳየኝ እባክህ? እሺ በደስታ፣ ተከተለኝ።",
          "reading": "Yəqərta, mängäd asayäny əbakəh? Əshi bädästa, täkättäläny. [jɨkʼɨrˈta mɨŋˈɡɨd asaˈjɨɲ ɨˈbakɨh ɨˈʃi bɨdɛsˈta tɨkɨtːɨˈlɨɲ] (yuh-K'UR-tah, mung-GUD ah-sah-yuh-NY uh-BAH-kuh? uh-SHEE buh-des-TAH, tuh-kut-tuh-LUH-ny)",
          "translation": "Excuse me, could you please show me the way? Sure with pleasure, follow me."
        },
        {
          "target": "ይቅርታ ያድርጉልኝ፣ ስህተት ሰርቻለሁ። ምንም ችግር የለም፣ ሁሉም ነገር ደህና ነው።",
          "reading": "Yəqərta yadrəgulləny, səhtät särəččallähu. Mənəm čəggər yälläm, hullum nägär dähna näw. [jɨkʼɨrˈta jadɨrɡulːɨɲ sɨhˈtɛt sɨrɨtʃːaˈlɨhu mɨˈnɨm tʃɨɡːɨr jɛlːɨm hulːum nɛˈɡɨr dɛhˈna nɛw] (yuh-K'UR-tah yah-dur-gool-LUH-ny, suh-TET suh-ruhch-CHAH-luh-hoo. muh-NUM chug-GUR yel-LUM, hool-LOOM neh-GUR deh-NAH neh)",
          "translation": "Please forgive me [polite], I made a mistake. No problem at all, everything is fine."
        }
      ],
      "mnemonics": [
        "Polite markers: እባክህ (please [m]), እባክሽ (please [f]), እባክዎ (please [polite]), አመሰግናለሁ (thank you), ይቅርታ (excuse me)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል አንድ ነገር ሲሰጡ ወይም ሲቀበሉ በሁለት እጅ መቀበል ትልቅ የአክብሮት መግለጫ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "አንድ ሰው ባደረገልህ ውለታ 'በጣም አመሰግናለሁ' ሲልህ፣ በአማርኛ ባህል ምን ብለህ ትመልሳለህ?",
          "options": [
            "ምንም አይደለም። (You are welcome / It's nothing - Correct polite response)",
            "አይ አልፈልግም።",
            "ዛሬ ረቡዕ ነው።",
            "ሰዓቱ አልቋል።"
          ],
          "answerIndex": 0,
          "explanation": "ለምስጋና ምላሽ «ምንም አይደለም» (You are welcome) ይባላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "አንዲትን ሴት በትህትና አንድ ነገር እንድታደርግልህ 'Please' ለማለት የትኛውን ቃል ትጠቀማለህ?",
          "options": [
            "እባክሽ (Please [to female] - Correct feminine form)",
            "እባክህ",
            "ይቅርታ አድርግልኝ",
            "አይደለም"
          ],
          "answerIndex": 0,
          "explanation": "ለሴት ልመና ሲቀርብ «እባክሽ» ጥቅም ላይ ይውላል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የተሳሳተ ድርጊት ሲፈጸም ለታላቅ ሰው በአክብሮት ይቅርታ ለመጠየቅ የሚያገለግለው የትኛው ነው?",
          "options": [
            "ይቅርታ ያድርጉልኝ (Please forgive me [polite/respectful] - Correct formal apology)",
            "እባክሽ ሂጂ",
            "አመሰግናለሁ ዛሬ",
            "ምንም አይደለም"
          ],
          "answerIndex": 0,
          "explanation": "ለታላቅ ሰው «ይቅርታ ያድርጉልኝ» ተብሎ በአክብሮት ይቅርታ ይጠየቃል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አመሰግናለሁ / Thank you' የሚለውን የአማርኛ ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አመሰግናለሁ"
          ],
          "explanation": "ትክክለኛው ቃል «አመሰግናለሁ» (Amäsäggənalähu) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u1-l5": {
    "id": "am-u1-l5",
    "subject": "amharic",
    "unit": 1,
    "lessonNumber": 5,
    "title": "ስንብት እና የመሰረታዊ ሰላምታ ማጠቃለያ (Farewells & Unit 1 Grand Synthesis)",
    "level": "A1",
    "objective": "የስንብት ቃላትን (ደህና ሁን/ሁኚ/ሁኑ፣ ቻው፣ መልካም ቀን/ምሽት፣ ደህና እደር/እደሪ/እደሩ) ማወቅ እና የክፍል 1ን አጠቃላይ ሰላምታዎችና ራስን ማስተዋወቅ ማጠቃለል።",
    "presentation": {
      "explanation": "የስንብት ቃላት እና የክፍል ፩ አጠቃላይ ሰዋሰዋዊ ውህደት:\n\n፩. የስንብት አገላለጾች:\n- «ደህና ሁን»: ለአንድ ወንድ የምንለው የስንብት ቃል ነው።\n- «ደህና ሁኚ»: ለአንዲት ሴት የምንለው የስንብት ቃል ነው።\n- «ደህና ሁኑ»: ለአዋቂ በአክብሮት ወይም ለብዙ ሰዎች የምንለው የስንብት ቃል ነው።\n- «ቻው»: በመደበኛ ያልሆነ የዕለት ተዕለት ጓደኝነት ውስጥ የሚያገለግል ቃል ነው።\n- «መልካም ቀን» (ቀኑ የተባረከ እንዲሆን ምኞት) / «መልካም ምሽት» (ምሽቱ ሰላማዊ እንዲሆን ምኞት)።\n- «ደህና እደር» (ለወንድ), «ደህና እደሪ» (ለሴት), «ደህና እደሩ» (ለአክብሮት)።\n- «ነገ እንገናኝ»: በቀጣዩ ቀን ለመገናኘት የሚደረግ ቀጠሮ ነው።\n\n፪. የክፍል ፩ አጠቃላይ ማጠቃለያ:\n- የግዕዝ ፊደል ሰባቱ ክፍሎች: ግዕዝ፣ ካዕብ፣ ሣልስ፣ ራብዕ፣ ኃምስ፣ ሳድስ፣ ሳብዕ።\n- የሰላምታ ጾታ እና አክብሮት ልዩነት: ለወንድ (-ህ/ነህ/አደርክ/ዋልክ/አመሸህ/ደህና ሁን)፣ ለሴት (-ሽ/ነሽ/አደርሽ/ዋልሽ/አመሸሽ/ደህና ሁኚ)፣ ለአክብሮት (-ዎት/ኖት/አደሩ/ዋሉ/አመሹ/ደህና ሁኑ)።\n- የዕለት ተዕለት ጨዋነት: አመሰግናለሁ፣ እባክህ/እባክሽ/እባክዎ፣ ይቅርታ፣ እግዚአብሔር ይመስገን።",
      "examples": [
        {
          "target": "ደህና ሁን ወዳጄ፣ ነገ በትምህርት ቤት እንገናኝ፣ መልካም ቀን ይሁንልህ!",
          "reading": "Dähna hun wäddaje, nägä bätəməhərt bet ənnəggänany, mälkam qän yəhunəlləh! [dɛhˈna hun wɨdːaˈdʒe nɛˈɡɛ bɨtɨmˈhɨrt bet ɨnːɨɡːɛˈnaɲ mɛlˈkam kʼɨn jɨhunɨlːɨh] (deh-NAH hoon wud-dah-JAY, neh-GEH buh-tum-HURT bayt un-nug-guh-NAH-ny, mel-KAHM k'un yuh-hoon-ool-LUH!)",
          "translation": "Goodbye my friend [to male], see you tomorrow at school, have a wonderful day!"
        },
        {
          "target": "ደህና ሁኚ እህቴ፣ ስለ እርዳታሽ በጣም አመሰግናለሁ፣ ቻው!",
          "reading": "Dähna hugnyi əhəte, səlärdataš bətam amäsäggənalähu, čaw! [dɛhˈna huɲi ɨhɨˈte sɨlɨrɨdaˈtaʃ bɨˈtʼam amɨsɨɡːɨˈnalɨhu tʃaw] (deh-NAH hoong-YEE uh-huh-TAY, suh-loor-dah-TAHSH buh-TAHM ah-muh-sug-guh-NAH-luh-hoo, CHAH-oo!)",
          "translation": "Goodbye my sister, thank you so much for your help, bye!"
        },
        {
          "target": "ደህና እደሩ አስተማሪዬ፣ ነገ በጠዋት በክፍል ውስጥ እንገናኛለን።",
          "reading": "Dähna ədäru astämariye, nägä bät'äwat bäkəfəl wəst' ənnəggänagnyallän. [dɛhˈna ɨdɨˈru astɨmaˈrije nɛˈɡɛ bɨtʼɨˈwat bɨkɨˈfɨl wɨstʼ ɨnːɨɡːɛnaɲalːɛn] (deh-NAH uh-dur-ROO ahs-tuh-mah-REE-yay, neh-GEH buh-t'uh-WAHT buh-kuh-FOOL woos-T' un-nug-gay-nah-nyahl-LEN)",
          "translation": "Good night teacher [polite], we will meet tomorrow morning in class."
        }
      ],
      "mnemonics": [
        "Farewells: ደህና ሁን (bye [m]), ደህና ሁኚ (bye [f]), ደህና ሁኑ (bye [polite/pl]), ደህና እደር (good night [m]), ደህና እደሪ (good night [f]), ደህና እደሩ (good night [polite])!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ የስንብት ወቅት 'እግዚአብሔር ያገናኘን' (May God bring us together again) ወይም 'መልካም ይሁንልህ/ሽ' ብሎ መመረቅ ጥልቅ ማህበራዊ ልማድ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ለአንድ ወንድ ጓደኛህ ሲሰናበትህ 'Goodbye / Stay well' ለማለት የትኛውን ትጠቀማለህ?",
          "options": [
            "ደህና ሁን፣ መልካም ቀን ይሁንልህ! (Goodbye, have a good day! [to male] - Correct masculine farewell)",
            "ደህና አደርሽ ትላንት።",
            "እንደምን አመሸህ አሁን?",
            "ስምሽ ማን ነው?"
          ],
          "answerIndex": 0,
          "explanation": "ለወንድ የስንብት አገላለጽ «ደህና ሁን» ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ለአንዲት ሴት ማታ ወደ መኝታ ከመሄዷ በፊት 'Good night' ለማለት ትክክለኛው አገላለጽ የትኛው ነው?",
          "options": [
            "ደህና እደሪ እህቴ! (Good night my sister! [to female] - Correct feminine night farewell)",
            "ደህና ዋልክ ወንድሜ።",
            "እንደምን አደሩ አባባ።",
            "ምሳ በላሁ ዛሬ።"
          ],
          "answerIndex": 0,
          "explanation": "ለሴት በምሽት ማጠቃለያ «ደህና እደሪ» ይባላል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 1ን አጠቃላይ የሰላምታ እና የስንብት ስርዓት በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "በአማርኛ ሰላምታ እና ስንብት የጾታ (ነህ/ነሽ፣ ደህና ሁን/ሁኚ) እና የአክብሮት (ኖት፣ ደህና ሁኑ/እደሩ) ህጎችን ጠብቆ ይገለጻል።",
            "በአማርኛ ስንብትና ሰላምታ ምንም ዓይነት የጾታ ልዩነት የላቸውም።",
            "ደህና ሁን የሚባለው ለሴት ብቻ ነው።",
            "መልካም ቀን ማለት በምሽት ብቻ የሚያገለግል ቃል ነው።"
          ],
          "answerIndex": 0,
          "explanation": "የአማርኛ ሰላምታ እና ስንብት የጾታና የአክብሮት ስርዓትን ሙሉ በሙሉ የጠበቀ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ደህና ሁን / Goodbye [to male]' የሚለውን የስንብት ሐረግ በግዕዝ ፊደላት ጻፉ:",
          "acceptedAnswers": [
            "ደህና ሁን"
          ],
          "explanation": "ትክክለኛው የስንብት ሐረግ «ደህና ሁን» (Dähna hun) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u2-l1": {
    "id": "am-u2-l1",
    "subject": "amharic",
    "unit": 2,
    "lessonNumber": 1,
    "title": "የቤት እና የክፍል ውስጥ ዕቃዎች (Everyday Nouns & Demonstratives)",
    "level": "A1",
    "objective": "የዕለት ተዕለት የቤትና የክፍል ውስጥ ዕቃዎችን ስሞች (ቤት፣ ጠረጴዛ፣ ወንበር፣ መጽሐፍ፣ ብዕር፣ በር፣ መስኮት) እና አመልካች ተውላጠ ስሞችን (ይህ/ይህች/እነዚህ/ያ/ያቺ/እነዚያ) ማወቅ።",
    "presentation": {
      "explanation": "የዕለት ተዕለት የቤት ውስጥ ቁሳቁሶች እና አመልካች ቃላት:\n\n፩. መሰረታዊ የስም ቃላት:\n- «ቤት»: የመኖሪያ ስፍራ።\n- «ጠረጴዛ»: ዕቃ የሚቀመጥበት ወይም የሚጻፍበት ሰሌዳ።\n- «ወንበር»: ለመቀመጫነት የሚያገለግል ቁሳቁስ።\n- «መጽሐፍ»: የንባብ ወይም የትምህርት ሰነድ።\n- «ብዕር» ወይም «እስክሪብቶ»: ለመጻፊያነት የሚያገለግል መሳሪያ።\n- «በር»: መግቢያ እና መውጫ።\n- «መስኮት»: ብርሃንና አየር የሚያስገባ ክፍልፋይ።\n- «አልጋ»: የመኝታ ቁሳቁስ።\n\n፪. አመልካች ተውላጠ ስሞች:\n- «ይህ»: ለቀረበ ተባዕታይ (ወንድ) ነገር ያገለግላል (ይህ መጽሐፍ ነው)።\n- «ይህች» ወይም «ይቺ»: ለቀረበ አንስታይ (ሴት) ነገር ያገለግላል (ይህች ወንበር ናት)።\n- «ያ»: ለራቀ ተባዕታይ ነገር ያገለግላል (ያ ቤት ነው)።\n- «ያቺ»: ለራቀ አንስታይ ነገር ያገለግላል (ያቺ በር ናት)።\n- «እነዚህ»: ለቀረቡ ብዙ ነገሮች (እነዚህ መጻሕፍት/መጽሐፎች ናቸው)።\n- «እነዚያ»: ለራቁ ብዙ ነገሮች (እነዚያ ቤቶች ናቸው)።\n\n፫. መጠይቃዊ ዓረፍተ ነገሮች:\n- «ይህ ምንድን ነው?»: ስለ ወንድ ነገር ማንነት ለመጠየቅ።\n- «ይህች ምንድን ናት?»: ስለ ሴት ነገር ማንነት ለመጠየቅ።",
      "examples": [
        {
          "target": "ይህ አዲስ መጽሐፍ ነው፣ ያ ደግሞ ትልቅ ጠረጴዛ ነው።",
          "reading": "Yəh addis mäs’haf näw, ya dägmo t’əlq t’äräp’p’eza näw. [jɨh adˈdis mɨsˤˈhaf nɛw ja dɛɡˈmo tʼɨlˈkʼ tʼɛrɛpʼˈpʼeza nɛw] (yuh ahd-DEES mus'-HAHF neh, yah deg-MOH t'ul-K' t'eh-rep'-PAY-zah neh)",
          "translation": "This is a new book, and that is a large table."
        },
        {
          "target": "ይህች ወንበር በጣም ምቹ ናት፣ እባክህ ተቀመጥ።",
          "reading": "Yəhəč wänbär bətam məč’u nat, əbakəh täqämät’. [jɨˈhɨtʃ wɨnˈbɛr bɨˈtʼam mɨˈtʃʼu nat ɨˈbakɨh tɨkʼɛˈmɨtʼ] (yuh-HUCH wun-BUR buh-TAHM muh-CH'OO naht, uh-BAH-kuh tuh-k'uh-MET')",
          "translation": "This chair is very comfortable, please sit down [to male]."
        },
        {
          "target": "ይህ ምንድን ነው? ይህ አዲስ ብዕር እና ደብተር ነው።",
          "reading": "Yəh məndən näw? Yəh addis bə'ər ənna däbtär näw. [jɨh mɨnˈdɨn nɛw jɨh adˈdis bɨˈʔɨr ɨnːa dɛbˈtɛr nɛw] (yuh mun-DUN neh? yuh ahd-DEES buh-UR un-nah deb-TUR neh)",
          "translation": "What is this? This is a new pen and notebook."
        }
      ],
      "mnemonics": [
        "Demonstratives: ይህ (this [m]), ይህች (this [f]), ያ (that [m]), ያቺ (that [f]), እነዚህ (these), እነዚያ (those)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል እንግዳ ወደ ቤት ሲገባ ወንበር ማቅረብና 'እባክህ ተቀመጥ / እባክሽ ተቀመጪ' ማለት ጥልቅ የእንግዳ ተቀባይነት መገለጫ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ለቀረበ ተባዕታይ ነገር (ለምሳሌ መጽሐፍ) 'ይህ ምንድን ነው?' ተብሎ ሲጠየቅ፣ ትክክለኛው ምላሽ የትኛው ነው?",
          "options": [
            "ይህ አዲስ መጽሐፍ ነው። (This is a new book - Correct masculine demonstrative)",
            "እሷ ወደ ትምህርት ቤት ሄደች።",
            "ትላንት ማታ ዝናብ ዘነበ።",
            "ሻይ መጠጣት እወዳለሁ።"
          ],
          "answerIndex": 0,
          "explanation": "«ይህ አዲስ መጽሐፍ ነው» ለተባዕታይ መጠይቅ የተሰጠ ትክክለኛ ምላሽ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ለቀረበች አንስታይ ነገር (ለምሳሌ ወንበር) 'ይህች ምንድን ናት?' ተብሎ ሲጠየቅ፣ ትክክለኛው ምላሽ የትኛው ነው?",
          "options": [
            "ይህች ቆንጆ ወንበር ናት። (This is a beautiful chair - Correct feminine demonstrative)",
            "ያ ትልቅ ወንድም ነው።",
            "እነሱ እግር ኳስ ተጫወቱ።",
            "በጠዋት ቁርስ በላሁ።"
          ],
          "answerIndex": 0,
          "explanation": "ለአንስታይ ነገር «ይህች ... ናት» የሚለው ሰዋሰዋዊ መዋቅር ትክክለኛ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአማርኛን አመልካች ተውላጠ ስሞች (ይህ፣ ይህች፣ ያ፣ ያቺ) በትክክል የለየው የትኛው ነው?",
          "options": [
            "«ይህ» ለቀረበ ወንድ፣ «ይህች» ለቀረበች ሴት፣ «ያ» ለራቀ ወንድ፣ «ያቺ» ለራቀች ሴት ያገለግላሉ።",
            "«ይህ» ለራቀ ነገር ብቻ ያገለግላል።",
            "«ያቺ» ለብዙ ወንዶች ያገለግላል።",
            "በአማርኛ አመልካች ቃላት የጾታ ልዩነት የላቸውም።"
          ],
          "answerIndex": 0,
          "explanation": "በአማርኛ አመልካች ተውላጠ ስሞች የጾታና የርቀት ልዩነት አላቸው።"
        },
        {
          "type": "typed-recall",
          "prompt": "'መጽሐፍ / Book' የሚለውን የአማርኛ ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "መጽሐፍ"
          ],
          "explanation": "ትክክለኛው ቃል «መጽሐፍ» (Mäs’haf) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u2-l2": {
    "id": "am-u2-l2",
    "subject": "amharic",
    "unit": 2,
    "lessonNumber": 2,
    "title": "የስሞች ጾታ፡ ተባዕታይ እና አንስታይ (Noun Gender: Masculine & Feminine Distinction)",
    "level": "A1",
    "objective": "የአማርኛ ስሞችን ጾታ (ተባዕታይ እና አንስታይ) መለየት፣ የተፈጥሮና የሰዋሰው ጾታ ልዩነትን መረዳት፣ እና የሴትነት ማሳያ ቅጥያዎችን (-ይቱ/-ኢቷ) መጠቀም።",
    "presentation": {
      "explanation": "የስሞች ጾታ በሰዋሰው እና በተፈጥሮ:\n\n፩. የተፈጥሮ ጾታ:\n- ተባዕታይ: ወንድ፣ ልጅ / ወንድ ልጅ፣ አባት፣ ወንድም፣ አጎት።\n- አንስታይ: ሴት፣ ሴት ልጅ፣ እናት፣ እህት፣ አክስት።\n\n፪. የእንስሳት ጾታ:\n- አውራ ዶሮ vs ዶሮ / እናት ዶሮ።\n- ተባዕታይ ውሻ vs እንስት ውሻ።\n- በሬ vs ላም።\n\n፫. የሰዋሰው ጾታ እና የማሳነስ/የእንክብካቤ ቅጥያዎች:\n- በአማርኛ ግዑዛን ነገሮች አብዛኛውን ጊዜ ተባዕታይ ቢሆኑም፣ ሲያንሱ ወይም የፍቅር/የእንክብካቤ መግለጫ ሲሆኑ አንስታይ ይሆናሉ:\n  - መኪናው (ተባዕታይ) vs መኪናዋ / መኪናይቱ (አንስታይ)።\n  - ድመቷ / ድመቲቷ (አንስታይ) vs ድመቱ (ተባዕታይ)።\n  - ሴት ልጅ ስትሆን «ናት»፣ ወንድ ልጅ ሲሆን «ነው» ማሰሪያ አንቀጽ ጥቅም ላይ ይውላል።",
      "examples": [
        {
          "target": "አባቴ ታታሪ ገበሬ ነው፣ እናቴ ደግሞ ብልህ አስተማሪ ናት።",
          "reading": "Abbate tatari gäbäre näw, ənnate dägmo bələh astämari nat. [abːaˈte tataˈri ɡɛbɛˈre nɛw ɨnːaˈte dɛɡˈmo bɨlɨh astɨmaˈri nat] (ahb-bah-TAY tah-tah-REE geh-beh-RAY neh, un-nah-TAY deg-MOH buh-LUH ahs-tuh-mah-REE naht)",
          "translation": "My father is a hardworking farmer, and my mother is a wise teacher."
        },
        {
          "target": "ወንድሜ በትምህርት ቤት ጎበዝ ተማሪ ነው፣ እህቴም በጣም ጎበዝ ናት።",
          "reading": "Wändəme bätəməhərt bet gobäz tämari näw, əhətem bətam gobäz nat. [wɨndɨˈme bɨtɨmˈhɨrt bet ɡoˈbɛz tɛmaˈri nɛw ɨhɨˈtem bɨˈtʼam ɡoˈbɛz nat] (wun-duh-MAY buh-tum-HURT bayt goh-BEZ teh-mah-REE neh, uh-huh-TAYM buh-TAHM goh-BEZ naht)",
          "translation": "My brother is an excellent student at school, and my sister is also very smart."
        },
        {
          "target": "ይህቺ ትንሽ ድመት በጣም ቆንጆ ናት፣ ወተት ትጠጣለች።",
          "reading": "Yəhəčč tənəsh dəmät bətam qonjo nat, wätät tət’ät’t’alläčč. [jɨˈhɨtʃː tɨˈnɨʃ dɨˈmɛt bɨˈtʼam kʼonˈdʒo nat wɛˈtɛt tɨtʼɛtʼːaˈlɛtʃː] (yuh-HUCH-ch tuh-NUSH duh-MET buh-TAHM k'ohn-JOH naht, weh-TET tuh-t'et'-t'ahl-LECH)",
          "translation": "This little cat is very cute, she drinks milk."
        }
      ],
      "mnemonics": [
        "Gender Copula: አባት/ወንድም -> ነው (is [m]), እናት/እህት -> ናት (is [f])!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል አባትና እናትን 'አባባ' እና 'እማማ' ብሎ በፍቅርና በአክብሮት መጥራት የተለመደ ስርዓት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ለአንስታይ ባለቤት (ለምሳሌ እህት ወይም እናት) ትክክለኛው የማሰሪያ አንቀጽ (Copula) የትኛው ነው?",
          "options": [
            "እህቴ ጎበዝ ዶክተር ናት። (My sister is an excellent doctor - Correct feminine copula)",
            "እህቴ ትልቅ መጽሐፍ ነው።",
            "አባቴ ዛሬ መጣች።",
            "ወንድሜ ምግብ አበሰለች።"
          ],
          "answerIndex": 0,
          "explanation": "ለሴት ባለቤት «ናት» የሚለው ማሰሪያ አንቀጽ ጥቅም ላይ ይውላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ለተባዕታይ ባለቤት (ለምሳሌ አባት ወይም ወንድም) ትክክለኛውን ሰዋሰዋዊ አረፍተ ነገር ይምረጡ:",
          "options": [
            "አባቴ ደግ ሰው ነው። (My father is a kind man - Correct masculine structure)",
            "አባቴ ቆንጆ እናት ናት።",
            "ወንድሜ አዲስ ቀሚስ ለበሰች።",
            "እህቴ ጎበዝ ገበሬ ነው።"
          ],
          "answerIndex": 0,
          "explanation": "«አባቴ ደግ ሰው ነው» ተባዕታይ ጾታን በትክክል የጠበቀ አረፍተ ነገር ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "በአማርኛ ቋንቋ የጾታ አጠቃቀምን በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ለተባዕታይ (ወንድ) «ነው»፣ ለአንስታይ (ሴት) «ናት» ጥቅም ላይ ይውላል።",
            "ለወንድና ለሴት ሁልጊዜ «ነው» ብቻ ይባላል።",
            "ለሴት «ነህ» ተብሎ ይጠየቃል።",
            "በአማርኛ የስም ጾታ ልዩነት የለም።"
          ],
          "answerIndex": 0,
          "explanation": "በአማርኛ ለተባዕታይ «ነው»፣ ለአንስታይ «ናት» ጥቅም ላይ ይውላል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እናት / Mother' የሚለውን የአማርኛ ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "እናት"
          ],
          "explanation": "ትክክለኛው ቃል «እናት» (Ennat) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u2-l3": {
    "id": "am-u2-l3",
    "subject": "amharic",
    "unit": 2,
    "lessonNumber": 3,
    "title": "የስሞች ቁጥር፡ ነጠላ እና ብዙ ቁጥር (Noun Pluralization with -ኦች / -ዎች)",
    "level": "A1",
    "objective": "የስሞችን ብዙ ቁጥር በቅጥያዎች (-ኦች / -ዎች) መመስረት እና ከቁጥሮች ጋር ሲጣመሩ ስሞች ነጠላ ሆነው እንደሚቀጥሉ መረዳት።",
    "presentation": {
      "explanation": "የስሞች ቁጥር፡ ነጠላ እና ብዙ ቁጥር:\n\n፩. የብዙ ቁጥር ቅጥያዎች (-ኦች እና -ዎች):\n- በተነባቢ ለሚያልቁ ስሞች «-ኦች» ይቀጠላል:\n  - ቤት -> ቤቶች\n  - መጽሐፍ -> መጽሐፎች\n  - ሰው -> ሰዎች\n  - ወንበር -> ወንበሮች\n  - በር -> በሮች\n- በአናባቢ ለሚያልቁ ስሞች «-ዎች» ይቀጠላል:\n  - ተማሪ -> ተማሪዎች\n  - ውሻ -> ውሾች / ውሻዎች\n  - ፎቶ -> ፎቶዎች\n\n፪. ከቁጥሮች ጋር የሚደረግ አጠቃቀም:\n- በአማርኛ ከቁጥር (መጠነ-ቁጥር) በኋላ የሚመጣ ስም በነጠላ ቅርጽ ይቆያል:\n  - «አንድ መጽሐፍ»\n  - «ሁለት መጽሐፍ» (ሁለት መጽሐፎች አይባልም)\n  - «አምስት ቤት»\n  - «ብዙ ሰዎች» ወይም «ብዙ ሰው»።\n\n፫. የብዙ ቁጥር ማሰሪያ አንቀጽ:\n- ለብዙ ቁጥር «ናቸው» ጥቅም ላይ ይውላል (እነዚህ አዳዲስ መጽሐፎች ናቸው)።",
      "examples": [
        {
          "target": "በክፍሉ ውስጥ ብዙ ወንበሮች እና ጠረጴዛዎች አሉ።",
          "reading": "Bäkəfəlu wəst’ bəzu wänbäročč ənna t’äräp’p’ezawočč allu. [bɨkɨfɨˈlu wɨstʼ bɨˈzu wɨnbɛˈrotʃː ɨnːa tʼɛrɛpʼezaˈwotʃː alːu] (buh-kuh-foo-LOO woos-T' buh-ZOO wun-beh-ROHCH-ch un-nah t'eh-rep'-pay-zah-WOHCH-ch ahl-LOO)",
          "translation": "There are many chairs and tables inside the room."
        },
        {
          "target": "ተማሪዎቹ በትምህርት ቤቱ ቅጥር ግቢ ውስጥ ተሰብስበዋል።",
          "reading": "Tämariwočču bätəməhərt betu qət’ər gəbbi wəst’ täsäbsəbäwal. [tɛmariwoˈtʃːu bɨtɨmˈhɨrt beˈtu kʼɨˈtʼɨr ɡɨbːi wɨstʼ tɨsɛbsɨˈbɛwal] (teh-mah-ree-wohch-CHOO buh-tum-HURT bay-TOO k'uh-T'UR gub-BEE woos-T' tuh-sub-suh-BEW-wahl)",
          "translation": "The students have gathered inside the school compound."
        },
        {
          "target": "እኔ ሁለት መጽሐፍ እና ሦስት እስክሪብቶ አለኝ።",
          "reading": "Əne hulät mäs’haf ənna sost əskəribto alläny. [ɨˈne huˈlɛt mɨsˤˈhaf ɨnːa sost ɨskɨribˈto alːɨɲ] (uh-NAY hoo-LET mus'-HAHF un-nah sohst us-kuh-reeb-TOH ahl-LUH-ny)",
          "translation": "I have two books and three pens."
        }
      ],
      "mnemonics": [
        "Plural Rule: Consonant + ኦች (ቤቶች), Vowel + ዎች (ተማሪዎች), Numbers + Singular noun (ሁለት ቤት)!"
      ],
      "culturalNotes": [
        "በአማርኛ ቋንቋ ቁጥር ከተጠቀሰ በኋላ ስምን ነጠላ ማድረግ የተለመደ ሰዋሰዋዊ ህግ ነው (ለምሳሌ: አሥር ብር እንጂ አሥር ብሮች አይባልም)።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«ቤት» (House) የሚለውን ነጠላ ስም ወደ ብዙ ቁጥር ለመቀየር ትክክለኛው ቅጥያ የትኛው ነው?",
          "options": [
            "ቤቶች (Houses - Correct plural with -och)",
            "ቤታን",
            "ቤትዎች",
            "ቤቲን"
          ],
          "answerIndex": 0,
          "explanation": "«ቤት» በተነባቢ ስለሚያልቅ «-ኦች» ተጨምሮ «ቤቶች» ይሆናል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ ከቁጥር ጋር በትክክል የተዋቀረውን የአማርኛ አረፍተ ነገር ይምረጡ:",
          "options": [
            "በጠረጴዛው ላይ ሦስት ደብተር አለ። (There are three notebooks on the table - Correct numeral + singular noun)",
            "በጠረጴዛው ላይ ሦስት ደብተሮች አለ።",
            "አንድ ቤቶች አየሁ።",
            "ብዙ መጽሐፍቶች አሉ።"
          ],
          "answerIndex": 0,
          "explanation": "በአማርኛ ከቁጥር በኋላ ስም በነጠላ ይመጣል (ሦስት ደብተር)።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ለብዙ ቁጥር ስሞች የሚያገለግለው ትክክለኛው የማሰሪያ አንቀጽ (Copula) የትኛው ነው?",
          "options": [
            "እነዚህ ጎበዝ ተማሪዎች ናቸው። (These are excellent students - Correct plural copula)",
            "እነዚህ ጎበዝ ተማሪዎች ነው",
            "እነዚህ ጎበዝ ተማሪዎች ናት",
            "እነዚህ ጎበዝ ተማሪዎች ነኝ"
          ],
          "answerIndex": 0,
          "explanation": "ለብዙ ቁጥር «ናቸው» (They are) ጥቅም ላይ ይውላል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ሰዎች / People' የሚለውን የብዙ ቁጥር ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ሰዎች"
          ],
          "explanation": "ትክክለኛው ቃል «ሰዎች» (Säwočč) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u2-l4": {
    "id": "am-u2-l4",
    "subject": "amharic",
    "unit": 2,
    "lessonNumber": 4,
    "title": "የአማርኛ ወሳኝ መስተፃምሮች እና አመልካች ቅጥያዎች (The Definite Suffixes -ኡ/-ው and -ዋ/-ይቱ)",
    "level": "A1",
    "objective": "ስሞችን ወሳኝ (Definite) የማድረጊያ ቅጥያዎችን (-ኡ/-ው ለተባዕታይ፣ -ዋ/-ይቱ ለአንስታይ፣ -ኦቹ/-ዎቹ ለብዙ ቁጥር) አጠቃቀም ማወቅ።",
    "presentation": {
      "explanation": "የአማርኛ ወሳኝ መስተፃምሮች (Definite Article Suffixes):\n\nበአማርኛ ቋንቋ እንግሊዝኛው 'The' የሚተካው በስሙ መጨረሻ ላይ በሚጨመሩ ቅጥያዎች ነው:\n\n፩. የተባዕታይ ወሳኝ ቅጥያ (-ኡ እና -ው):\n- በተነባቢ ለሚያልቁ ስሞች «-ኡ» ይቀጠላል:\n  - ቤት -> ቤቱ\n  - መጽሐፍ -> መጽሐፉ\n  - ልጅ -> ልጁ\n- በአናባቢ ለሚያልቁ ስሞች «-ው» ይቀጠላል:\n  - ውሻ -> ውሻው\n  - ወንበር -> ወንበሩ\n  - ፎቶ -> ፎቶው\n\n፪. የአንስታይ ወሳኝ ቅጥያ (-ዋ እና -ይቱ/-ኢቷ):\n- ልጅ -> ልጇ ወይም ልጅቷ / ልጅይቱ\n- እናት -> እናቷ ወይም እናቲቱ\n- ድመት -> ድመቷ ወይም ድመቲቷ\n\n፫. የብዙ ቁጥር ወሳኝ ቅጥያ (-ኦቹ እና -ዎቹ):\n- ቤቶች -> ቤቶቹ\n- መጽሐፎች -> መጽሐፎቹ\n- ተማሪዎች -> ተማሪዎቹ",
      "examples": [
        {
          "target": "ቤቱ በጣም ሰፊ ነው፣ በሩ እና መስኮቶቹ አዳዲስ ናቸው።",
          "reading": "Betu bətam säfi näw, bäru ənna mäskotočču addaddis naččäw. [beˈtu bɨˈtʼam sɨˈfi nɛw bɛˈru ɨnːa mɛskotoˈtʃːu adːadˈdis natʃːɛw] (bay-TOO buh-TAHM seh-FEE neh, beh-ROO un-nah mes-koh-tohch-CHOO ahd-dahd-DEES nahch-CHEW)",
          "translation": "The house is very spacious; the door and the windows are brand new."
        },
        {
          "target": "ልጅቷ ወደ ትምህርት ቤት ሄደች፣ መጽሐፏንም ይዛለች።",
          "reading": "Ləjətwa wädä təməhərt bet hedäčč, mäs’hafwanəm yəzalläčč. [lɨdʒɨtˈwa wɛdɛ tɨmˈhɨrt bet heˈdɛtʃː mɨsˤhafwaˈnɨm jɨzalːɛtʃː] (luh-jut-WAH weh-DEH tum-HURT bayt hay-DECH, mus'-hahf-wah-NUM yuh-zahl-LECH)",
          "translation": "The girl went to school, and she is holding her book."
        },
        {
          "target": "መጽሐፉ ጠረጴዛው ላይ ነው፣ እባክህ አምጣልኝ።",
          "reading": "Mäs’hafu t’äräp’p’ezaw lay näw, əbakəh amt’alləny. [mɨsˤˈhafu tʼɛrɛpʼeˈzaw laj nɛw ɨˈbakɨh amˈtʼalːɨɲ] (mus'-HAH-foo t'eh-rep'-pay-ZAH-oo lie neh, uh-BAH-kuh ahm-T'AHL-luh-ny)",
          "translation": "The book is on the table, please bring it to me."
        }
      ],
      "mnemonics": [
        "Definite Suffixes: Masc = -ኡ/-ው (ቤቱ/ውሻው), Fem = -ዋ/-ቷ (ልጅቷ), Plural = -ኦቹ/-ዎቹ (ቤቶቹ)!"
      ],
      "culturalNotes": [
        "በአማርኛ ስሞች ወሳኝ ሲሆኑ ቅጥያው በቀጥታ ከስሙ ጋር ይያያዛል፤ ይህም ንግግርን አጭርና ግልጽ ያደርገዋል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«መጽሐፍ» (Book) የሚለውን ቃል 'The book' ለማለት ትክክለኛው የወሳኝ ቅጥያ የትኛው ነው?",
          "options": [
            "መጽሐፉ (The book - Correct masculine definite suffix -u)",
            "መጽሐፍዋ",
            "መጽሐፍኦች",
            "መጽሐፍና"
          ],
          "answerIndex": 0,
          "explanation": "«መጽሐፍ» በተነባቢ ስለሚያልቅ «-ኡ» ተጨምሮበት «መጽሐፉ» (The book) ይሆናል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "«ልጅ» (Child/Girl) ለሴት ልጅ 'The girl' ለማለት ትክክለኛው የአንስታይ ወሳኝ ቅጽ የትኛው ነው?",
          "options": [
            "ልጅቷ / ልጇ (The girl - Correct feminine definite forms)",
            "ልጁ",
            "ልጆች",
            "ልጃቸው"
          ],
          "answerIndex": 0,
          "explanation": "ለሴት ልጅ «ልጅቷ» ወይም «ልጇ» (The girl) ይባላል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የብዙ ቁጥር ስሞችን ወሳኝ (Definite Plural) የማድረጊያ ቅጥያ በትክክል ያሳየው የትኛው ነው?",
          "options": [
            "ቤቶቹ (The houses - Correct plural definite suffix -ochu)",
            "ቤቱዋ",
            "ቤትዎች",
            "ቤታቸው"
          ],
          "answerIndex": 0,
          "explanation": "«ቤቶች» በሚለው የብዙ ቁጥር ላይ «-ኡ» ሲጨመር «ቤቶቹ» (The houses) ይሆናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቤቱ / The house' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቤቱ"
          ],
          "explanation": "ትክክለኛው ቃል «ቤቱ» (Betu) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u2-l5": {
    "id": "am-u2-l5",
    "subject": "amharic",
    "unit": 2,
    "lessonNumber": 5,
    "title": "የክፍል 2 አጠቃላይ ማጠቃለያ (Unit 2 Grand Synthesis & Everyday Noun Mastery)",
    "level": "A1",
    "objective": "የቤት ውስጥ ቁሳቁሶችን፣ የስሞችን ጾታና ቁጥር፣ እንዲሁም ወሳኝ ቅጥያዎችን (-ው/-ኡ/-ዋ/-ዎቹ) በማቀናጀት የተሟሉ ዓረፍተ ነገሮችን መገንባት።",
    "presentation": {
      "explanation": "የክፍል ፪ አጠቃላይ ሰዋሰዋዊ ውህደትና ማጠቃለያ:\n\n፩. የዕቃዎች መጠሪያ እና አመልካች ቃላት:\n- ይህ (ይህ ቤት), ይህች (ይህች ወንበር), ያ (ያ ጠረጴዛ), ያቺ (ያቺ በር), እነዚህ (እነዚህ መጻሕፍት), እነዚያ (እነዚያ ቤቶች)።\n\n፪. የስሞች ጾታ:\n- ተባዕታይ ስሞች «ነው» ማሰሪያ አንቀጽ ይወስዳሉ (ወንድሜ ጎበዝ ነው)።\n- አንስታይ ስሞች «ናት» ማሰሪያ አንቀጽ ይወስዳሉ (እህቴ ብልህ ናት)።\n\n፫. የነጠላ እና የብዙ ቁጥር ስርዓት:\n- በተነባቢ ለሚያልቁ «-ኦች» (ቤቶች፣ መጽሐፎች)።\n- በአናባቢ ለሚያልቁ «-ዎች» (ተማሪዎች፣ ውሻዎች)።\n- ከቁጥሮች በኋላ ስም በነጠላ ይቀመጣል (አራት ወንበር)።\n\n፬. ወሳኝ ቅጥያዎች:\n- ተባዕታይ: -ኡ / -ው (መጽሐፉ፣ ውሻው)።\n- አንስታይ: -ዋ / -ቷ (ልጅቷ፣ እህቷ)።\n- ብዙ ቁጥር: -ኦቹ / -ዎቹ (ተማሪዎቹ፣ ቤቶቹ)።",
      "examples": [
        {
          "target": "እነዚህ አዳዲስ ቤቶች በጣም ያምራሉ፣ በሮቹም ጠንካራ ናቸው።",
          "reading": "Ənnäzzih addaddis betočč bətam yamralu, bäroččum t’änk’arra naččäw. [ɨnːɛzːih adːadˈdis beˈtotʃː bɨˈtʼam jamˈralu bɛroˈtʃːum tʼɛnkʼarːa natʃːɛw] (un-nez-ZEE-h ahd-dahd-DEES bay-TOHCH buh-TAHM yahm-RAH-loo, beh-rohch-CHOOM t'un-k'ahr-RAH nahch-CHEW)",
          "translation": "These new houses are very beautiful, and their doors are strong."
        },
        {
          "target": "ልጁ መጽሐፉን አነበበ፣ እህቱም ደብተሯን ጻፈች።",
          "reading": "Ləju mäs’hafun anäbbäbä, əhətum däbtärwan s’afäčč. [lɨˈdʒu mɨsˤhaˈfun anɨbːɛˈbɛ ɨhɨˈtum dɛbtɛrˈwan sˤafɛtʃː] (luh-JOO mus'-hah-FOON ah-nub-buh-BEH, uh-huh-TOOM deb-ter-WAHN ts'ah-FECH)",
          "translation": "The boy read the book, and his sister wrote in her notebook."
        },
        {
          "target": "ይህች አዲስ ጠረጴዛ ናት፣ ወንበሮቹም አብረው ተቀምጠዋል።",
          "reading": "Yəhəčč addis t’äräp’p’eza nat, wänbäroččum abrstyle täqämt’äwal. [jɨˈhɨtʃː adˈdis tʼɛrɛpʼˈpʼeza nat wɨnbɛroˈtʃːum abˈrɛw tɨkʼɛmtʼɛwal] (yuh-HUCH-ch ahd-DEES t'eh-rep'-PAY-zah naht, wun-beh-rohch-CHOOM ahb-REW tuh-k'em-T'EW-wahl)",
          "translation": "This is a new table, and the chairs are placed together with it."
        }
      ],
      "mnemonics": [
        "Synthesis formula: Demonstrative (ይህ/ይህች) + Definite Noun (ቤቱ/ልጅቷ) + Adjective (ትልቅ/ቆንጆ) + Copula (ነው/ናት/ናቸው)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ ማህበረሰብ በጋራ የመኖርና የመረዳዳት ባህል ያለው እንደመሆኑ፣ የቤት ንብረትንና ቁሳቁስን በጋራ መጠቀም የተለመደ እሴት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«ይህች አዲስ ጠረጴዛ ናት» በሚለው አረፍተ ነገር ውስጥ ትክክለኛው ሰዋሰዋዊ ትንተና የትኛው ነው?",
          "options": [
            "«ይህች» አንስታይ አመልካች ሲሆን «ናት» የአንስታይ ማሰሪያ አንቀጽ ነው። (Correct feminine demonstrative and copula agreement)",
            "«ይህች» ለብዙ ቁጥር ብቻ ያገለግላል።",
            "«ናት» የተባዕታይ ማሰሪያ አንቀጽ ነው።",
            "አረፍተ ነገሩ ሰዋሰዋዊ ስህተት አለበት።"
          ],
          "answerIndex": 0,
          "explanation": "«ይህች» እና «ናት» የአንስታይ ጾታ ስምምነትን በትክክል የጠበቁ ናቸው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የጾታ፣ የቁጥር እና የወሳኝ ቅጥያ ህጎችን ሙሉ በሙሉ የጠበቀው አረፍተ ነገር የትኛው ነው?",
          "options": [
            "ተማሪዎቹ በመማሪያ ክፍሉ ውስጥ መጽሐፎቹን ያነባሉ። (The students read the books in the classroom - Correct full syntax)",
            "ተማሪዎቹ መጽሐፉ ያነባል እሷ።",
            "ይህ ወንበሮች ናት።",
            "ሦስት ቤቶች መጣ።"
          ],
          "answerIndex": 0,
          "explanation": "«ተማሪዎቹ በመማሪያ ክፍሉ ውስጥ መጽሐፎቹን ያነባሉ» ትክክለኛ ሰዋሰዋዊ መዋቅር ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 2ን ዋና ዋና ሰዋሰዋዊ መርሆዎች በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "በአማርኛ ስሞች በጾታ (ተባዕታይ/አንስታይ)፣ በቁጥር (-ኦች/-ዎች) እና በወሳኝ ቅጥያዎች (-ኡ/-ው፣ -ዋ/-ቷ፣ -ኦቹ) ይረባሉ።",
            "በአማርኛ ስሞች ምንም አይነት ቅጥያ አይወስዱም።",
            "ለብዙ ቁጥር ሁልጊዜ «ናት» ጥቅም ላይ ይውላል።",
            "ከቁጥር በኋላ ስሞች ሁልጊዜ ብዙ ቁጥር መሆን አለባቸው።"
          ],
          "answerIndex": 0,
          "explanation": "በአማርኛ ስሞች በጾታ፣ በቁጥር እና በወሳኝ ቅጥያዎች በትክክል ይረባሉ።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ጠረጴዛ / Table' የሚለውን የአማርኛ ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ጠረጴዛ"
          ],
          "explanation": "ትክክለኛው ቃል «ጠረጴዛ» (T'äräp'p'eza) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u3-l1": {
    "id": "am-u3-l1",
    "subject": "amharic",
    "unit": 3,
    "lessonNumber": 1,
    "title": "የግል ተውላጠ ስሞች እና ማሰሪያ አንቀጾች (Personal Pronouns & Copula Alignment)",
    "level": "A1",
    "objective": "የአማርኛ የግል ተውላጠ ስሞችን (እኔ፣ አንተ፣ አንቺ፣ እርስዎ፣ እሱ፣ እሷ፣ እኛ፣ እናንተ፣ እነሱ፣ እሳቸው) እና ተዛማጅ ማሰሪያ አንቀጾችን (ነኝ፣ ነህ፣ ነሽ፣ ኖት/ነዎት፣ ነው፣ ናት፣ ነን፣ ናችሁ፣ ናቸው) ማወቅ።",
    "presentation": {
      "explanation": "የግል ተውላጠ ስሞች እና ማሰሪያ አንቀጾች:\n\nበአማርኛ ቋንቋ የግል ተውላጠ ስሞች ከማሰሪያ አንቀጾቻቸው ጋር የሚከተለውን ጥምረት ይፈጥራሉ:\n\n፩. ነጠላ ቁጥር:\n- «እኔ»: ነኝ (እኔ ተማሪ ነኝ)\n- «አንተ»: ነህ (አንተ ዶክተር ነህ)\n- «አንቺ»: ነሽ (አንቺ መምህርት ነሽ)\n- «እርስዎ» ወይም «እርሶ»: ነዎት / ኖት (እርስዎ አስተማሪ ኖት)\n- «እሱ»: ነው (እሱ ኢንጂነር ነው)\n- «እሷ»: ናት / ነች (እሷ ነርስ ናት)\n\n፪. ብዙ ቁጥር:\n- «እኛ»: ነን (እኛ ጓደኛሞች ነን)\n- «እናንተ»: ናችሁ (እናንተ ጎበዞች ናችሁ)\n- «እነሱ»: ናቸው (እነሱ አትሌቶች ናቸው)\n- «እሳቸው»: ናቸው (እሳቸው የዩኒቨርሲቲ ፕሮፌሰር ናቸው)።\n\n፫. መጠይቃዊ እና አሉታዊ ቅርጾች:\n- «አንተ ማን ነህ?»: ስምን ወይም ማንነትን ለመጠየቅ።\n- «አይደለሁም» / «አይደለህም»።",
      "examples": [
        {
          "target": "እኔ ኢትዮጵያዊ ነኝ፣ እሱ ደግሞ ጓደኛዬ ነው።",
          "reading": "Əne ityop’yawi näny, əssu dägmo gwaddänyaye näw. [ɨˈne itjoˈpʼjawɨ nɛɲ ɨsːu dɛɡˈmo ɡwadːɨɲaˈje nɛw] (uh-NAY eet-yohp'-yah-WEE neh-ny, uhs-SOO deg-MOH gwahd-duh-nyah-YAY neh)",
          "translation": "I am Ethiopian, and he is my friend."
        },
        {
          "target": "እኛ በአዲስ አበባ ዩኒቨርሲቲ ተማሪዎች ነን።",
          "reading": "Əngya bə-Addis Abäba yunivärsiti tämariwočč nän. [ɨɲa bɨ-adˈdis abɨˈba junivɛrˈsiti tɛmariˈwotʃː nɛn] (un-NYAH buh-ahd-DEES ah-buh-BAH yoo-nee-ver-SEE-tee teh-mah-ree-WOHCH nen)",
          "translation": "We are students at Addis Ababa University."
        },
        {
          "target": "እርስዎ በጣም የተከበሩ እና ታታሪ አስተማሪ ኖት።",
          "reading": "Ərsəwo bətam yätäkäbbäru ənna tatari astämari not. [ɨrˈsɨwo bɨˈtʼam jɛtɨkɛbːɛˈru ɨnːa tataˈri astɨmaˈri not] (ur-suh-WOH buh-TAHM yeh-tuh-kub-buh-ROO un-nah tah-tah-REE ahs-tuh-mah-REE noht)",
          "translation": "You [polite] are a highly respected and hardworking teacher."
        }
      ],
      "mnemonics": [
        "Pronoun Pairs: እኔ->ነኝ, አንተ->ነህ, አንቺ->ነሽ, እሱ->ነው, እሷ->ናት, እኛ->ነን, እናንተ->ናችሁ, እነሱ->ናቸው!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል አዋቂዎችን ወይም እንግዶችን 'እርስዎ' ብሎ በአክብሮት መጥራት ትልቅ የጨዋነት መገለጫ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«እኛ» (We) ከሚለው የግል ተውላጠ ስም ጋር የሚሄደው ትክክለኛው ማሰሪያ አንቀጽ የትኛው ነው?",
          "options": [
            "እኛ ጎበዝ ሠራተኞች ነን። (We are diligent workers - Correct first-person plural agreement)",
            "እኛ ጎበዝ ሠራተኞች ነኝ።",
            "እኛ ጎበዝ ሠራተኞች ናችሁ።",
            "እኛ ጎበዝ ሠራተኞች ነህ።"
          ],
          "answerIndex": 0,
          "explanation": "«እኛ» ከሚለው ባለቤት ጋር የሚሄደው ማሰሪያ አንቀጽ «ነን» ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ለአንዲት ሴት 'አንቺ ጎበዝ ዶክተር...' ለማለት ዓረፍተ ነገሩን የሚያጠናቅቀው ትክክለኛው ቃል የትኛው ነው?",
          "options": [
            "ነሽ (You are [f] - Correct feminine singular copula)",
            "ነህ",
            "ነኝ",
            "ናቸው"
          ],
          "answerIndex": 0,
          "explanation": "ለአንቺ የሚስማማው ማሰሪያ አንቀጽ «ነሽ» ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአማርኛ የግል ተውላጠ ስሞችና የማሰሪያ አንቀጾች ጥምረት በትክክል የቀረበው በየትኛው ነው?",
          "options": [
            "እኔ ነኝ፣ አንተ ነህ፣ አንቺ ነሽ፣ እሱ ነው፣ እሷ ናት፣ እኛ ነን።",
            "እኔ ነህ፣ አንተ ነኝ፣ እሷ ነው፣ እሱ ናት።",
            "እኛ ናችሁ፣ እናንተ ነን፣ እነሱ ነኝ።",
            "እርስዎ ነህ፣ እሱ ነሽ።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ሙሉውን የተውላጠ ስም እና የማሰሪያ አንቀጽ ስምምነት በትክክል ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እኛ / We' የሚለውን የግል ተውላጠ ስም በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "እኛ"
          ],
          "explanation": "ትክክለኛው ቃል «እኛ» (Əngya) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u3-l2": {
    "id": "am-u3-l2",
    "subject": "amharic",
    "unit": 3,
    "lessonNumber": 2,
    "title": "የባለቤትነት / የይዞታ ቅጥያዎች (Possessive Suffixes -ዬ/-ህ/-ሽ/-ው/-ዋ/-አችን/-አችሁ/-አቸው)",
    "level": "A1",
    "objective": "የይዞታ/የባለቤትነት ቅጥያዎችን ከስሞች ጋር በማጣመር (ቤቴ፣ ቤትህ፣ ቤትሽ፣ ቤቱ፣ ቤቷ፣ ቤታችን፣ ቤታችሁ፣ ቤታቸው) መጠቀም።",
    "presentation": {
      "explanation": "የይዞታ እና የባለቤትነት ቅጥያዎች:\n\nበአማርኛ ቋንቋ 'የኔ'፣ 'ያንተ'፣ 'የሷ' ወዘተ የሚሉትን የይዞታ ቃላት በስሙ መጨረሻ ላይ በሚጨመሩ ቅጥያዎች መግለጽ ይቻላል:\n\n፩. ነጠላ ቁጥር:\n- «-ኤ» ወይም «-ዬ»: መጽሐፌ፣ ውሻዬ\n- «-ህ»: መጽሐፍህ፣ ውሻህ\n- «-ሽ»: መጽሐፍሽ፣ ውሻሽ\n- «-ዎ»: መጽሐፍዎ፣ ውሻዎ\n- «-ኡ» ወይም «-ው»: መጽሐፉ፣ ውሻው\n- «-ዋ»: መጽሐፏ፣ ውሻዋ\n\n፪. ብዙ ቁጥር:\n- «-አችን»: መጽሐፋችን፣ ቤታችን\n- «-አችሁ»: መጽሐፋችሁ፣ ቤታችሁ\n- «-አቸው»: መጽሐፋቸው፣ ቤታቸው።\n\n፫. የባለቤትነት ሐረጎች:\n- የኔ መጽሐፍ = መጽሐፌ\n- ያንተ ቤት = ቤትህ\n- የሷ ደብተር = ደብተሯ።",
      "examples": [
        {
          "target": "ይህ የእኔ አዲስ መጽሐፍ ነው፤ መጽሐፌ በጣም ጠቃሚ ነው።",
          "reading": "Yəh yäne addis mäs’haf näw; mäs’hafe bətam t’äqami näw. [jɨh jɛne adˈdis mɨsˤˈhaf nɛw mɨsˤhaˈfe bɨˈtʼam tʼɛkʼaˈmi nɛw] (yuh yeh-NAY ahd-DEES mus'-HAHF neh; mus'-hah-FAY buh-TAHM t'eh-k'ah-MEE neh)",
          "translation": "This is my new book; my book is very useful."
        },
        {
          "target": "ቤትህ የት ነው? ቤታችን በአዲስ አበባ ውስጥ ይገኛል።",
          "reading": "Betəh yät näw? Betaččən bə-Addis Abäba wəst’ yəggänyall. [beˈtɨh jɛt nɛw beˈtatʃːɨn bɨ-adˈdis abɨˈba wɨstʼ jɨɡːɛˈɲalː] (bay-TUH yet neh? bay-tahch-CHUN buh-ahd-DEES ah-buh-BAH woos-T' yuhg-geh-NYAHL)",
          "translation": "Where is your house [to male]? Our house is located in Addis Ababa."
        },
        {
          "target": "እህትሽ እና እናትሽ በሰላም ደረሱ?",
          "reading": "Əhətəš ənna ənnatəš bäsälam därräsu? [ɨhɨˈtɨʃ ɨnːa ɨnːaˈtɨʃ bɛsɛˈlam dɛrːɛˈsu] (uh-huh-TOOSH un-nah un-nah-TOOSH buh-seh-LAHM der-reh-SOO?)",
          "translation": "Did your sister and your mother arrive safely [to female]?"
        }
      ],
      "mnemonics": [
        "Possessives: -ዬ (my), -ህ (your [m]), -ሽ (your [f]), -ው (his), -ዋ (her), -አችን (our), -አችሁ (your pl), -አቸው (their)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል ሰውን በስሙ ከመጥራት ይልቅ 'ወንድሜ' (my brother) ወይም 'እህቴ' (my sister) ብሎ በይዞታ ቅጥያ ማናገር ትልቅ ወዳጅነትን ያሳያል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«ቤት» (House) የሚለውን ቃል 'Our house' ለማለት ትክክለኛው የይዞታ ቅጥያ የትኛው ነው?",
          "options": [
            "ቤታችን (Our house - Correct first-person plural possessive suffix)",
            "ቤቴ",
            "ቤትህ",
            "ቤታቸው"
          ],
          "answerIndex": 0,
          "explanation": "ለ'የኛ ቤት' የሚሆነው የይዞታ ቅጥያ «-አችን» ተጨምሮ «ቤታችን» ይሆናል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ለአንድ ወንድ 'Your book' ለማለት ትክክለኛው ቃል የትኛው ነው?",
          "options": [
            "መጽሐፍህ (Your book [to male] - Correct masculine possessive suffix -h)",
            "መጽሐፍሽ",
            "መጽሐፌ",
            "መጽሐፋቸው"
          ],
          "answerIndex": 0,
          "explanation": "ለወንድ 'ያንተ መጽሐፍ' ለማለት «መጽሐፍህ» ይባላል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የይዞታ ቅጥያዎችን ትክክለኛ አጠቃቀም ያሳየው የትኛው ነው?",
          "options": [
            "-ኤ/ዬ (የኔ)፣ -ህ (ያንተ)፣ -ሽ (ያንቺ)፣ -አችን (የኛ)፣ -አቸው (የነሱ) ናቸው።",
            "-ህ የሴት ይዞታ ማሳያ ነው።",
            "-ሽ የወንድ ይዞታ ማሳያ ነው።",
            "በአማርኛ የይዞታ ቅጥያዎች የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የይዞታ ቅጥያዎች ስርዓት ያሳያል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቤታችን / Our house' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቤታችን"
          ],
          "explanation": "ትክክለኛው ቃል «ቤታችን» (Betaččən) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u3-l3": {
    "id": "am-u3-l3",
    "subject": "amharic",
    "unit": 3,
    "lessonNumber": 3,
    "title": "መሰረታዊ ቅድመ-መስተዋድዶች (Basic Simple Prepositions: በ-, ከ-, ወደ-, ለ-)",
    "level": "A1",
    "objective": "መሠረታዊ የአማርኛ ቅድመ-መስተዋድዶችን (በ- [in/with/by]፣ ከ- [from/than]፣ ወደ- [to/towards]፣ ለ- [for/to]) ማወቅ እና በዓረፍተ ነገር ውስጥ መተግበር።",
    "presentation": {
      "explanation": "መሰረታዊ ቅድመ-መስተዋድዶች:\n\nበአማርኛ ቋንቋ ቅድመ-መስተዋድዶች ከስሙ ፊት ለፊት ተጣብቀው ይጻፋሉ:\n\n፩. «በ-»:\n- ቦታን ያሳያል: በቤት፣ በአዲስ አበባ\n- መሳሪያን ያሳያል: በመኪና፣ በእስክሪብቶ\n- ጊዜን ያሳያል: በጠዋት፣ በማታ።\n\n፪. «ከ-»:\n- መነሻ ቦታን ያሳያል: ከቤት፣ ከትምህርት ቤት\n- ማወዳደሪያን ያሳያል: ከኔ ይበልጣል።\n\n፫. «ወደ-»:\n- አቅጣጫን ያሳያል: ወደ ትምህርት ቤት፣ ወደ ገበያ፣ ወደ ከተማ።\n\n፬. «ለ-»:\n- ተጠቃሚን ያሳያል: ለእናት፣ ለተማሪዎች፣ ለምሳ።",
      "examples": [
        {
          "target": "ተማሪው በጠዋት ከመኖሪያ ቤቱ ተነስቶ ወደ ትምህርት ቤት ሄደ።",
          "reading": "Tämariw bät’äwat kämänoriya betu tänəsto wädä təməhərt bet hedä. [tɛmaˈriw bɨtʼɨˈwat kɛmɨnoriˈja beˈtu tɨnɨsˈto wɛdɛ tɨmˈhɨrt bet heˈdɛ] (teh-mah-REE-oo buh-t'uh-WAHT keh-muh-noh-ree-YAH bay-TOO tuh-nus-TOH weh-DEH tum-HURT bayt hay-DEH)",
          "translation": "The student woke up in the morning from his house and went to school."
        },
        {
          "target": "እኔ ለእናቴ ቆንጆ ስጦታ ገዛሁላት።",
          "reading": "Əne lä'ənnate qonjo sət’ota gäzahullat. [ɨˈne lɨ-ɨnːaˈte kʼonˈdʒo sɨtʼoˈta ɡɨzaˈhulːat] (uh-NAY luh-un-nah-TAY k'ohn-JOH suh-t'oh-TAH geh-zah-hool-LAHT)",
          "translation": "I bought a beautiful gift for my mother."
        },
        {
          "target": "እኛ በመኪና ከጎንደር ወደ ባሕር ዳር እንጓዛለን።",
          "reading": "Əngya bämäkina kä-Gondär wädä Bahər Dar ənnəgwazzallän. [ɨɲa bɨmɛkiˈna kɛ-ɡonˈdɛr wɛdɛ baˈhɨr dar ɨnːɨɡwazːalːɛn] (un-NYAH buh-meh-kee-NAH keh-GOHN-der weh-DEH BAH-hur DAHR un-nug-wahz-zuhl-LEN)",
          "translation": "We travel by car from Gondar to Bahir Dar."
        }
      ],
      "mnemonics": [
        "Preposition Prefixes: በ- (in/by), ከ- (from), ወደ- (to), ለ- (for) attach directly to nouns!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ ታሪካዊ ከተሞች (ጎንደር፣ ላሊበላ፣ ባሕር ዳር፣ አክሱም) የጉዞ እና የባህል ማዕከላት ናቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«ወደ ትምህርት ቤት ሄደ» በሚለው ሐረግ ውስጥ «ወደ-» የሚያሳየው ምንን ነው?",
          "options": [
            "አቅጣጫን ወይም መዳረሻን (Direction / Destination - Correct role of ወደ-)",
            "መነሻ ቦታን",
            "መሳሪያን",
            "ባለቤትነትን"
          ],
          "answerIndex": 0,
          "explanation": "«ወደ-» የሚለው መስተዋድድ አቅጣጫንና መዳረሻን ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'I am going from Addis Ababa to Hawassa' የሚለውን ሐሳብ በትክክል የሚገልጸው የትኛው ነው?",
          "options": [
            "ከአዲስ አበባ ወደ ሐዋሳ እሄዳለሁ። (From Addis Ababa to Hawassa I will go - Correct prepositions)",
            "በአዲስ አበባ ለአዋሳ እሄዳለሁ።",
            "ለአዲስ አበባ ከሐዋሳ እሄዳለሁ።",
            "ወደ አዲስ አበባ በሐዋሳ እሄዳለሁ።"
          ],
          "answerIndex": 0,
          "explanation": "መነሻ «ከ-»፣ መዳረሻ «ወደ-» በትክክል ተጣምረዋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአማርኛ መሠረታዊ መስተዋድዶች (በ-፣ ከ-፣ ወደ-፣ ለ-) ትክክለኛ ተግባር የትኛው ነው?",
          "options": [
            "«በ-» (ውስጥ/በመሳሪያ)፣ «ከ-» (መነሻ)፣ «ወደ-» (አቅጣጫ)፣ «ለ-» (ተጠቃሚ/ምክንያት) ያሳያሉ።",
            "«ወደ-» መነሻ ቦታን ብቻ ያሳያል።",
            "«ለ-» አቅጣጫን ብቻ ያሳያል።",
            "መስተዋድዶች ከስም ጋር አይጣበቁም።"
          ],
          "answerIndex": 0,
          "explanation": "መስተዋድዶች የስሞችን የቦታ፣ አቅጣጫና መሳሪያዊ ግንኙነት ይገልጻሉ።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ወደ / Towards, To' የሚለውን መስተዋድድ በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ወደ",
            "ወደ-"
          ],
          "explanation": "ትክክለኛው መስተዋድድ «ወደ» (Wädä) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u3-l4": {
    "id": "am-u3-l4",
    "subject": "amharic",
    "unit": 3,
    "lessonNumber": 4,
    "title": "ድርብ መስተዋድዶች (Compound Prepositions: በ...ውስጥ, በ...ላይ, ከ...በታች, ከ...ጋር)",
    "level": "A1",
    "objective": "ድርብ ወይም ከበባዊ መስተዋድዶችን (በ...ውስጥ፣ በ...ላይ፣ ከ...በታች፣ ከ...ጋር፣ ከ...በፊት፣ ከ...በኋላ) በትክክል መጠቀም።",
    "presentation": {
      "explanation": "ድርብ እና ከበባዊ መስተዋድዶች:\n\nበአማርኛ ቋንቋ ቅድመ-መስተዋድድ እና ድኅረ-መስተዋድድ በአንድ ላይ በመጣመር ድርብ መስተዋድድ ይፈጥራሉ:\n\n፩. «በ...ውስጥ»:\n- በክፍሉ ውስጥ (Inside the room)\n- በሳጥኑ ውስጥ (Inside the box)\n- በልቤ ውስጥ (In my heart)።\n\n፪. «በ...ላይ»:\n- በጠረጴዛው ላይ (On the table)\n- በወንበሩ ላይ (On the chair)\n- በምድር ላይ (On earth)።\n\n፫. «ከ...በታች»:\n- ከዛፉ በታች (Under the tree)\n- ከአልጋው በታች (Under the bed)።\n\n፬. «ከ...ጋር»:\n- ከጓደኛዬ ጋር (With my friend)\n- ከአባቴ ጋር (With my father)።\n\n፭. የጊዜ ድርብ መስተዋድዶች:\n- «ከ...በፊት» (Before): ከምሳ በፊት\n- «ከ...በኋላ» (After): ከትምህርት በኋላ።",
      "examples": [
        {
          "target": "መጽሐፉ በጠረጴዛው ላይ ነው፣ ደብተሬ ደግሞ በቦርሳው ውስጥ አለ።",
          "reading": "Mäs’hafu bät’äräp’p’ezaw lay näw, däbtäre dägmo bäborsaw wəst’ allä. [mɨsˤˈhafu bɨtʼɛrɛpʼeˈzaw laj nɛw dɛbtɨˈre dɛɡˈmo bɨborˈsaw wɨstʼ alːɛ] (mus'-HAH-foo buh-t'eh-rep'-pay-ZAH-oo lie neh, deb-tuh-RAY deg-MOH buh-bohr-SAH-oo woos-T' ahl-LEH)",
          "translation": "The book is on the table, and my notebook is inside the bag."
        },
        {
          "target": "ድመቷ ከወንበሩ በታች ተኝታለች።",
          "reading": "Dəmätwa käwänbäru bətačč tänytalläčč. [dɨmɛtˈwa kɛwɨnbɛˈru bɨˈtatʃː tɨɲɨtalːɛtʃː] (duh-met-WAH keh-wun-beh-ROO buh-TAHCH-ch tuh-nyuh-tahl-LECH)",
          "translation": "The cat is sleeping under the chair."
        },
        {
          "target": "እኔ ከጓደኞቼ ጋር ከትምህርት በኋላ እግር ኳስ እጫወታለሁ።",
          "reading": "Əne kägwaddänyočče gar kätəməhərt bähwala əgər kwas əč’awwätallähu. [ɨˈne kɛɡwadːɨɲoˈtʃːe ɡar kɛtɨmˈhɨrt bɛhʷaˈla ɨˈɡɨr kʷas ɨtʃʼawːɨˈtalːɨhu] (uh-NAY keh-gwahd-duh-nyohch-CHAY gahr keh-tum-HURT beh-HWAH-lah uh-GUR kwas uh-ch'ow-wuh-TAHL-luh-hoo)",
          "translation": "I play football with my friends after school."
        }
      ],
      "mnemonics": [
        "Compound pairs: በ...ላይ (on), በ...ውስጥ (inside), ከ...በታች (under), ከ...ጋር (with), ከ...በኋላ (after)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ማህበረሰብ 'ከሰው ጋር በፍቅር መኖር' እና 'ከማዕድ በፊት እጅ መታጠብ' ባህላዊና ሃይማኖታዊ ስርዓቶች ናቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«መጽሐፉ በጠረጴዛው ላይ ነው» በሚለው ዓረፍተ ነገር ውስጥ «በ...ላይ» ምንን ያመለክታል?",
          "options": [
            "በአንድ ነገር የላይኛው ክፍል ላይ መገኘትን (On top of / Surface location - Correct use of በ...ላይ)",
            "በአንድ ነገር ውስጥ መሆንን",
            "ከአንድ ነገር በታች መደበቅን",
            "የጊዜ ቅደም ተከተልን"
          ],
          "answerIndex": 0,
          "explanation": "«በ...ላይ» የአንድን ነገር የላይኛውን ገጽታ ወይም መገኛ ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'I am sitting with my friend' የሚለውን ሐሳብ የሚያስተላልፈው ትክክለኛው አረፍተ ነገር የትኛው ነው?",
          "options": [
            "እኔ ከጓደኛዬ ጋር ተቀምጫለሁ። (I am seated with my friend - Correct compound preposition ከ...ጋር)",
            "እኔ በጓደኛዬ ውስጥ ተቀምጫለሁ።",
            "እኔ ወደ ጓደኛዬ በታች ተቀምጫለሁ።",
            "እኔ ለጓደኛዬ ላይ ተቀምጫለሁ።"
          ],
          "answerIndex": 0,
          "explanation": "አብሮነትን ለመግለጽ «ከ...ጋር» ጥቅም ላይ ይውላል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ድርብ መስተዋድዶችን (በ...ውስጥ፣ በ...ላይ፣ ከ...በታች፣ ከ...ጋር) በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "በክፍሉ ውስጥ (inside), በጠረጴዛው ላይ (on), ከወንበሩ በታች (under), ከጓደኛ ጋር (with)።",
            "በክፍሉ ጋር (with room), ከጠረጴዛው ውስጥ (inside table)።",
            "ወደ ወንበሩ ላይ (to chair), ለክፍሉ በታች (for room)።",
            "በአማርኛ ድርብ መስተዋድዶች አይፈቀዱም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛዎቹን ድርብ መስተዋድዶች በጥምረት ያሳያል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ውስጥ / Inside' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ውስጥ"
          ],
          "explanation": "ትክክለኛው ቃል «ውስጥ» (Wəst’) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u3-l5": {
    "id": "am-u3-l5",
    "subject": "amharic",
    "unit": 3,
    "lessonNumber": 5,
    "title": "የክፍል 3 አጠቃላይ ማጠቃለያ (Unit 3 Grand Synthesis & Integrated Syntax)",
    "level": "A1",
    "objective": "የግል ተውላጠ ስሞችን፣ የይዞታ ቅጥያዎችን እና ቀላልና ድርብ መስተዋድዶችን በማጣመር የተሟሉ የአማርኛ ዓረፍተ ነገሮችን ማዋቀር።",
    "presentation": {
      "explanation": "የክፍል ፫ አጠቃላይ ሰዋሰዋዊ ውህደትና ማጠቃለያ:\n\n፩. የግል ተውላጠ ስሞች እና ማሰሪያ አንቀጾች:\n- እኔ ነኝ፣ አንተ ነህ፣ አንቺ ነሽ፣ እርስዎ ኖት/ነዎት፣ እሱ ነው፣ እሷ ናት/ነች፣ እኛ ነን፣ እናንተ ናችሁ፣ እነሱ ናቸው፣ እሳቸው ናቸው።\n\n፪. የይዞታ ቅጥያዎች:\n- ቤቴ (የኔ), ቤትህ (ያንተ), ቤትሽ (ያንቺ), ቤትዎ (የእርስዎ), ቤቱ (የሱ), ቤቷ (የሷ), ቤታችን (የኛ), ቤታችሁ (የናንተ), ቤታቸው (የነሱ)።\n\n፫. ቀላል መስተዋድዶች:\n- «በ-» (ቦታ/መሳሪያ/ጊዜ), «ከ-» (መነሻ/ንፅፅር), «ወደ-» (አቅጣጫ), «ለ-» (ተጠቃሚ/ምክንያት)።\n\n፬. ድርብ መስተዋድዶች:\n- በ...ውስጥ (በቤቱ ውስጥ), በ...ላይ (በጠረጴዛው ላይ), ከ...በታች (ከወንበሩ በታች), ከ...ጋር (ከጓደኛዬ ጋር), ከ...በፊት (ከምሳ በፊት), ከ...በኋላ (ከትምህርት በኋላ)።",
      "examples": [
        {
          "target": "እኛ ከቤታችን ወጥተን ከጓደኞቻችን ጋር ወደ ትምህርት ቤት እንሄዳለን።",
          "reading": "Əngya käbetaččən wət’t’än kägwaddänyočaččən gar wädä təməhərt bet ənnəhedallän. [ɨɲa kɛbeˈtatʃːɨn wɨtʼːɛn kɛɡwadːɨɲoˈtʃatʃːɨn ɡar wɛdɛ tɨmˈhɨrt bet ɨnːɨheˈdalːɛn] (un-NYAH keh-bay-tahch-CHUN wut'-TEN keh-gwahd-duh-nyoh-chahch-CHUN gahr weh-DEH tum-HURT bayt un-nuh-hay-DAHL-len)",
          "translation": "We leave our house and go to school together with our friends."
        },
        {
          "target": "የእኔ መጽሐፍ በጠረጴዛው ላይ ነው፤ ያንተ ደብተር ደግሞ በቦርሳህ ውስጥ አለ።",
          "reading": "Yäne mäs’haf bät’äräp’p’ezaw lay näw; yantä däbtär dägmo bäborsah wəst’ allä. [jɛne mɨsˤˈhaf bɨtʼɛrɛpʼeˈzaw laj nɛw janˈtɛ dɛbˈtɛr dɛɡˈmo bɨborˈsah wɨstʼ alːɛ] (yeh-NAY mus'-HAHF buh-t'eh-rep'-pay-ZAH-oo lie neh; yahn-TEH deb-TUR deg-MOH buh-bohr-SAH-h woos-T' ahl-LEH)",
          "translation": "My book is on the table; and your notebook is inside your bag [to male]."
        },
        {
          "target": "እሷ ከእናቷ ጋር በአዲስ አበባ ከተማ ውስጥ ትኖራለች።",
          "reading": "Əsswa kä'ənnatwa gar bə-Addis Abäba kätäma wəst’ tənoralläčč. [ɨsːwa kɛ-ɨnːaˈtwa ɡar bɨ-adˈdis abɨˈba kɛtɛˈma wɨstʼ tɨnoˈralːɛtʃː] (uhs-SWAH keh-un-naht-WAH gahr buh-ahd-DEES ah-buh-BAH keh-teh-MAH woos-T' tuh-noh-RAHL-lech)",
          "translation": "She lives inside Addis Ababa city together with her mother."
        }
      ],
      "mnemonics": [
        "Unit 3 Grand Formula: Pronoun (እኔ/እኛ) + Noun with Possessive (ቤታችን) + Preposition (በ...ውስጥ/ከ...ጋር) + Verb/Copula (ነን/እንሄዳለን)!"
      ],
      "culturalNotes": [
        "የአማርኛ ቋንቋ ሰዋሰዋዊ ውበት የሚገለጸው ቅጥያዎችን እና መስተዋድዶችን አቀናጅቶ አጫጭር ግን ጥልቅ መልእክት ባላቸው ዓረፍተ ነገሮች መግለጽ በመቻሉ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«እኛ ከቤታችን ወጥተን ወደ ትምህርት ቤት እንሄዳለን» በሚለው አረፍተ ነገር ውስጥ «ከ-» እና «ወደ-» የሚያሳዩት ምንድን ነው?",
          "options": [
            "«ከ-» መነሻ ቦታን ሲያሳይ «ወደ-» መዳረሻ አቅጣጫን ያሳያል። (Correct prepositions of origin and destination)",
            "«ከ-» መዳረሻን፣ «ወደ-» መነሻን ያሳያሉ።",
            "ሁለቱም ጊዜን ብቻ ያሳያሉ።",
            "ሁለቱም ባለቤትነትን ያሳያሉ።"
          ],
          "answerIndex": 0,
          "explanation": "«ከ-» መነሻን (ከቤታችን)፣ «ወደ-» ደግሞ መዳረሻን (ወደ ትምህርት ቤት) ያሳያሉ።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የባለቤትነት ቅጥያዎችን፣ መስተዋድዶችንና የግስ ስምምነትን ሙሉ በሙሉ የጠበቀው አረፍተ ነገር የትኛው ነው?",
          "options": [
            "እኔ መጽሐፌን በቦርሳዬ ውስጥ አደረግሁ። (I put my book inside my bag - Correct full syntax)",
            "እኔ መጽሐፍህ በቦርሳሽ ውስጥ አደረገ እሷ።",
            "እኛ ወደ ቤቴ ሄደች።",
            "እነሱ ከትምህርት ቤት ጋር ነኝ።"
          ],
          "answerIndex": 0,
          "explanation": "«እኔ መጽሐፌን በቦርሳዬ ውስጥ አደረግሁ» ሰዋሰዋዊ ህጎችን ሙሉ በሙሉ ያሟላ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 3ን ዋና ዋና ሰዋሰዋዊ ህጎች በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የግል ተውላጠ ስሞች ከማሰሪያ አንቀጽ ጋር ይዛመዳሉ፤ ስሞች የይዞታ ቅጥያዎችን ይወስዳሉ፤ መስተዋድዶች (ቀላልና ድርብ) ግንኙነትን ይገልጻሉ።",
            "በአማርኛ የግል ተውላጠ ስሞችና ማሰሪያ አንቀጾች ምንም ግንኙነት የላቸውም።",
            "መስተዋድዶች የሚገቡት በዓረፍተ ነገር መጨረሻ ላይ ብቻ ነው።",
            "የይዞታ ቅጥያዎች ለወንድና ለሴት አንድ ዓይነት ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "በአማርኛ ተውላጠ ስሞች፣ የይዞታ ቅጥያዎች እና መስተዋድዶች የተቀናጀ ስርዓት አላቸው።"
        },
        {
          "type": "typed-recall",
          "prompt": "'መስተዋድድ / Preposition' የሚለውን የሰዋሰው ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "መስተዋድድ"
          ],
          "explanation": "ትክክለኛው ቃል «መስተዋድድ» (Mästewadəd) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u4-l1": {
    "id": "am-u4-l1",
    "subject": "amharic",
    "unit": 4,
    "lessonNumber": 1,
    "title": "የአሁን እና የልማዳዊ ጊዜ ግሶች መዋቅር (Present & Habitual Tense Conjugation)",
    "level": "A1",
    "objective": "የአማርኛ የአሁን እና ልማዳዊ ጊዜ የግስ እርባታን (መማር -> እማራለሁ፣ ትማራለህ፣ ትማሪያለሽ፣ ይማራል፣ ትማራለች፣ እንማራለን፣ ትማራላችሁ፣ ይማራሉ) ማወቅ።",
    "presentation": {
      "explanation": "የአሁን እና የልማዳዊ ጊዜ ግስ እርባታ:\n\nበአማርኛ ቋንቋ አንድ ድርጊት በአሁኑ ወቅት እየተከናወነ መሆኑን ወይም በተደጋጋሚ/በልማድ የሚፈጸም መሆኑን ለመግለጽ የሚከተሉት ቅጥያዎች በግሱ ላይ ይገባሉ:\n\n፩. የ«መማር» ግስ እርባታ:\n- «እኔ»: እ- ... -አለሁ -> «እማራለሁ»\n- «አንተ»: ት- ... -አለህ -> «ትማራለህ»\n- «አንቺ»: ት- ... -ያለሽ -> «ትማሪያለሽ»\n- «እርስዎ»: ይ- ... -አሉ -> «ይማራሉ»\n- «እሱ»: ይ- ... -አል -> «ይማራል»\n- «እሷ»: ት- ... -አለች -> «ትማራለች»\n- «እኛ»: እን- ... -አለን -> «እንማራለን»\n- «እናንተ»: ት- ... -አላችሁ -> «ትማራላችሁ»\n- «እነሱ»: ይ- ... -አሉ -> «ይማራሉ»።\n\n፪. የግስ ቅርጽ:\n- የአሁን ጊዜ ግስ ሁልጊዜ ከባለቤቱ ጋር በጾታ እና በቁጥር መስማማት አለበት።",
      "examples": [
        {
          "target": "እኔ በትምህርት ቤት ውስጥ አማርኛ እና እንግሊዝኛ እማራለሁ።",
          "reading": "Əne bätəməhərt bet wəst’ amarəngya ənna əngəlizəngya əmmarallähu. [ɨˈne bɨtɨmˈhɨrt bet wɨstʼ amaˈrɨɲːa ɨnːa ɨnɡliˈzɨɲːa ɨmːaˈralːɨhu] (uh-NAY buh-tum-HURT bayt woos-T' ah-mah-RUN-nyah un-nah un-gluh-ZUN-nyah uhm-mah-RAHL-luh-hoo)",
          "translation": "I study Amharic and English inside the school."
        },
        {
          "target": "እሱ መጽሐፍ ያነባል፣ እሷ ደግሞ ደብተር ትጽፋለች።",
          "reading": "Əssu mäs’haf yannäbbabball, əsswa dägmo däbtär təs’əfalläčč. [ɨsːu mɨsˤˈhaf janːɨbːaˈbal ɨsːwa dɛɡˈmo dɛbˈtɛr tɨsˤɨˈfalːɛtʃː] (uhs-SOO mus'-HAHF yahn-nub-bah-BAHL, uhs-SWAH deg-MOH deb-TUR tuh-ts'uh-FAHL-lech)",
          "translation": "He reads a book, and she writes in a notebook."
        },
        {
          "target": "እኛ በየቀኑ አዳዲስ የቋንቋ ትምህርቶችን አብረን እንማራለን።",
          "reading": "Əngya bäyyäqänu addaddis yäqwanqwa təməhərtoččən abrän ənnəmmarallän. [ɨɲa bɛjːɛkʼɛˈnu adːadˈdis jɛkʼʷanˈkʼʷa tɨmɨhɨrˈtotʃːɨn abˈrɛn ɨnːɨmːaˈralːɛn] (un-NYAH beh-yeh-k'eh-NOO ahd-dahd-DEES yeh-k'wahn-K'WAH tum-hur-TOHCH-chun ahb-REN un-nuhm-mah-RAHL-len)",
          "translation": "We learn new language lessons together every day."
        }
      ],
      "mnemonics": [
        "Present Tense Prefixes & Suffixes: እኔ=እ-...-አለሁ, አንተ=ት-...-አለህ, እሱ=ይ-...-አል, እሷ=ት-...-አለች, እኛ=እን-...-አለን, እነሱ=ይ-...-አሉ!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል እውቀትን መገብየትና 'ትምህርት የብርሃን ቁልፍ ነው' የሚለው አባባል ለትምህርት ያለውን ከፍተኛ ክብር ያሳያል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«እኔ» (I) ከሚለው የግል ተውላጠ ስም ጋር «መማር» (To Learn) የሚለው ግስ በአሁን ጊዜ እንዴት ይረባል?",
          "options": [
            "እማራለሁ (I learn - Correct first-person singular present tense)",
            "ይማራል",
            "ትማራለች",
            "እንማራለን"
          ],
          "answerIndex": 0,
          "explanation": "«እኔ» በሚሆንበት ጊዜ «እ- ... -አለሁ» ቅጥያ ገብቶ «እማራለሁ» ይሆናል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "«እሷ» (She) ከሚለው ባለቤት ጋር የሚስማማውን የአሁን ጊዜ ግስ ይምረጡ:",
          "options": [
            "ትጽፋለች (She writes - Correct feminine singular present tense)",
            "ይጽፋል",
            "እጽፋለሁ",
            "ይጽፋሉ"
          ],
          "answerIndex": 0,
          "explanation": "ለእሷ የሚስማማው የአሁን ጊዜ ቅጥያ «ት- ... -አለች» (ትጽፋለች) ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአሁን እና ልማዳዊ ጊዜ የግስ እርባታን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "እኔ እማራለሁ፣ እሱ ይማራል፣ እሷ ትማራለች፣ እኛ እንማራለን።",
            "እኔ ይማራል፣ እሱ እማራለሁ።",
            "እኛ ይማራሉ፣ እናንተ እንማራለን።",
            "እሷ ትማራለህ፣ አንተ ትማራለች።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ሙሉውን የግስ እርባታ ስምምነት ጠብቋል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እማራለሁ / I learn' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "እማራለሁ"
          ],
          "explanation": "ትክክለኛው ቃል «እማራለሁ» (Əmmarallähu) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u4-l2": {
    "id": "am-u4-l2",
    "subject": "amharic",
    "unit": 4,
    "lessonNumber": 2,
    "title": "የዕለት ተዕለት ተግባራት እና ድርጊቶች (Daily Routines & Common Verbs)",
    "level": "A1",
    "objective": "የዕለት ተዕለት ተግባራትን የሚገልጹ ዋና ዋና ግሶችን (መነሳት፣ መብላት፣ መጠጣት፣ መሥራት፣ መሄድ፣ መተኛት) በአሁን ጊዜ መተግበር።",
    "presentation": {
      "explanation": "የዕለት ተዕለት ተግባራት እና የተለመዱ ግሶች:\n\n፩. ቁልፍ የዕለት ተዕለት ግሶች:\n- «መነሳት»: በጠዋት እነሳለሁ\n- «መብላት»: ቁርስ እበላለሁ\n- «መጠጣት»: ቡና እጠጣለሁ፣ ውኃ ትጠጣለች\n- «መሥራት»: ሥራ እሠራለሁ\n- «መሄድ»: ወደ ሥራ ይሄዳል\n- «መመለስ»: ወደ ቤት እንመለሳለን\n- «መተኛት»: በምሽት እተኛለሁ።\n\n፪. የዕለት ተዕለት የጊዜ አገባቦች:\n- «በጠዋት» (In the morning)\n- «በቀትር» ወይም «በምሳ ሰዓት» (At lunchtime)\n- «ከሰዓት በኋላ» (In the afternoon)\n- «በምሽት» ወይም «በማታ» (In the evening/at night)።",
      "examples": [
        {
          "target": "እኔ ሁልጊዜ ጠዋት በሁለት ሰዓት እነሳለሁ፣ ቁርስ እበላለሁ፣ ከዚያም ቡና እጠጣለሁ።",
          "reading": "Əne huləggize t’äwat bähulätt sä'at ənäsallähu, qurs əbälallähu, käzziyam bunna ət’ät’t’allähu. [ɨˈne hulɨɡːiˈze tʼɨˈwat bɨhuˈlɛtː sɨˈʔat ɨnɛsaˈlːɨhu kʼurs ɨbɛlaˈlːɨhu kɛzːiˈjam bunːa ɨtʼɛtʼːaˈlːɨhu] (uh-NAY hoo-lug-GEE-zay t'uh-WAHT buh-hoo-LET suh-AHT uh-neh-SAHL-luh-hoo, k'oors uh-beh-LAHL-luh-hoo, kez-zee-YAHM boon-NAH uh-t'et'-t'AHL-luh-hoo)",
          "translation": "I always wake up at 8:00 AM in the morning, eat breakfast, and then drink coffee."
        },
        {
          "target": "አባቴ ጠዋት ወደ ሥራ ይሄዳል፣ ማታ ደግሞ ወደ ቤት ይመለሳል።",
          "reading": "Abbate t’äwat wädä səra yəhedall, mata dägmo wädä bet yəmmälläsall. [abːaˈte tʼɨˈwat wɛdɛ sɨˈra jɨheˈdalː maˈta dɛɡˈmo wɛdɛ bet jɨmːɛlːɛˈsalː] (ahb-bah-TAY t'uh-WAHT weh-DEH suh-RAH yuh-hay-DAHL, mah-TAH deg-MOH weh-DEH bayt yuhm-mel-leh-SAHL)",
          "translation": "My father goes to work in the morning and returns home at night."
        },
        {
          "target": "እናት እና ልጆቷ ከሰዓት በኋላ ጣፋጭ ምሳ ያበስላሉ።",
          "reading": "Ənnat ənna ləjoččwa käsä'at bähwala t’afac’ məsa yabäsəlalu. [ɨnːat ɨnːa lɨdʒoˈtʃːwa kɛsɨˈʔat bɛhʷaˈla tʼaˈfatʃʼ mɨˈsa jabɨsɨˈlalu] (un-NAHT un-nah luh-johch-WAH keh-suh-AHT beh-HWAH-lah t'ah-FAHCH muh-SAH yah-buh-suh-LAH-loo)",
          "translation": "The mother and her children cook a delicious lunch in the afternoon."
        }
      ],
      "mnemonics": [
        "Routine order: እነሳለሁ (wake up) -> እበላለሁ (eat) -> እሠራለሁ (work) -> እመለሳለሁ (return) -> እተኛለሁ (sleep)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ የቡና ስነ-ስርዓት (Coffee Ceremony) የጠዋትና የከሰዓት ማህበራዊ ግንኙነት ዋና መገለጫ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«ቁርስ እበላለሁ» በሚለው አረፍተ ነገር ውስጥ «እበላለሁ» የሚለው ቃል ትርጉም ምንድን ነው?",
          "options": [
            "እኔ እበላለሁ / I eat (Correct first-person singular verb of መብላት)",
            "እሱ ይበላል",
            "እሷ ትጠጣለች",
            "እኛ እንሄዳለን"
          ],
          "answerIndex": 0,
          "explanation": "«እበላለሁ» ከ«መብላት» ግስ የወጣ የአንደኛ መደብ ነጠላ የአሁን ጊዜ ግስ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ለአንድ ወንድ 'ወደ ሥራ ትሄዳለህ?' ብሎ ለመጠየቅ ትክክለኛው አገላለጽ የትኛው ነው?",
          "options": [
            "ወደ ሥራ ትሄዳለህ? (Do you go to work? [to male] - Correct masculine routine question)",
            "ወደ ሥራ እሄዳለሁ?",
            "ወደ ሥራ ይሄዳሉ?",
            "ወደ ሥራ ትሄጃለሽ?"
          ],
          "answerIndex": 0,
          "explanation": "ለአንድ ወንድ «ትሄዳለህ?» ተብሎ ይጠየቃል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የዕለት ተዕለት ተግባራትን ቅደም ተከተል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "በጠዋት እነሳለሁ፣ ቁርስ እበላለሁ፣ ወደ ሥራ እሄዳለሁ፣ ማታ እተኛለሁ።",
            "ማታ እነሳለሁ፣ በጠዋት እተኛለሁ፣ ወደ ቤት እሄዳለሁ።",
            "ቁርስ እተኛለሁ፣ ሥራ እጠጣለሁ።",
            "በአማርኛ የዕለት ተግባራት አይገለጹም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የዕለት ተዕለት ተግባራት ቅደም ተከተልና ግሶች ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እበላለሁ / I eat' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "እበላለሁ"
          ],
          "explanation": "ትክክለኛው ቃል «እበላለሁ» (Əbälallähu) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u4-l3": {
    "id": "am-u4-l3",
    "subject": "amharic",
    "unit": 4,
    "lessonNumber": 3,
    "title": "የጊዜ አመልካች ቃላት እና ድግግሞሽ (Adverbs of Time & Frequency)",
    "level": "A1",
    "objective": "የድግግሞሽ እና የጊዜ ተውሳከ-ግሶችን (ሁልጊዜ፣ በየቀኑ፣ አንዳንዴ/አልፎ አልፎ፣ ዛሬ፣ ነገ፣ አሁን) ከአሁን ጊዜ ግሶች ጋር አቀናጅቶ መጠቀም።",
    "presentation": {
      "explanation": "የጊዜ እና የድግግሞሽ አመልካች ቃላት:\n\n፩. የድግግሞሽ ቃላት:\n- «ሁልጊዜ»: ሁልጊዜ ጠዋት እጸልያለሁ\n- «በየቀኑ»: በየቀኑ ስፖርት እሠራለሁ\n- «አንዳንዴ» ወይም «አልፎ አልፎ»: አንዳንዴ ሻይ እጠጣለሁ\n- «በጭራሽ» (ከአሉታዊ ግስ ጋር): በጭራሽ አልዋሽም።\n\n፪. የጊዜ ተውሳከ-ግሶች:\n- «ዛሬ»: ዛሬ ብዙ ሥራ አለብኝ\n- «ነገ»: ነገ ወደ ገበያ እንሄዳለን\n- «አሁን»: አሁን ትምህርት እንጀምራለን\n- «ትላንት»።\n\n፫. በአረፍተ ነገር ውስጥ ያለው ቦታ:\n- በአማርኛ የጊዜና የድግግሞሽ ቃላት አብዛኛውን ጊዜ ከባለቤቱ ቀጥሎ ወይም በዓረፍተ ነገሩ መጀመሪያ ላይ ይመጣሉ።",
      "examples": [
        {
          "target": "እኔ በየቀኑ ጠዋት የአካል ብቃት እንቅስቃሴ አደርጋለሁ።",
          "reading": "Əne bäyyäqänu t’äwat yä'akal bəqat ənqəsəqqase adärgallähu. [ɨˈne bɛjːɛkʼɛˈnu tʼɨˈwat jɛʔaˈkal bɨˈkʼat ɨnkʼɨsɨkʼːaˈse adɛrˈɡalːɨhu] (uh-NAY beh-yeh-k'eh-NOO t'uh-WAHT yeh-ah-KAHL buh-K'AHT un-k'uh-suk'-KAH-say ah-der-GAHL-luh-hoo)",
          "translation": "I do physical exercise every day in the morning."
        },
        {
          "target": "እኛ ሁልጊዜ ቅዳሜና እሁድ ቤተሰቦቻችንን እንጠይቃለን።",
          "reading": "Əngya huləggize qədamenna əhud betäsäbočaččənən ənnət’äyyəqallän. [ɨɲa hulɨɡːiˈze kʼɨdaˈmenːa ɨˈhud betɛsɨboˈtʃatʃːɨnɨn ɨnːɨtʼɛjːɨˈkʼalːɛn] (un-NYAH hoo-lug-GEE-zay k'uh-dah-MAYN-nah uh-HOOD bay-tuh-sub-oh-chahch-CHUN-un un-nuh-t'ey-yuh-K'AHL-len)",
          "translation": "We always visit our families on Saturday and Sunday."
        },
        {
          "target": "ዛሬ ትምህርት አለን፣ ነገ ግን ዕረፍት እንወስዳለን።",
          "reading": "Zare təməhərt allän, nägä gən əräft ənnəwäsədallän. [zaˈre tɨmˈhɨrt alːɛn nɛˈɡɛ ɡɨn ɨrɛfˈt ɨnːɨwɛsɨˈdalːɛn] (zah-RAY tum-HURT ahl-LEN, neh-GEH gun uh-REF-t un-nuh-weh-suh-DAHL-len)",
          "translation": "Today we have class, but tomorrow we will take a rest."
        }
      ],
      "mnemonics": [
        "Time words: ሁልጊዜ (always), በየቀኑ (daily), አንዳንዴ (sometimes), ዛሬ (today), ነገ (tomorrow), አሁን (now)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ የቀን አቆጣጠር የሳምንቱ ቀናት (ሰኞ፣ ማክሰኞ፣ ረቡዕ፣ ሐሙስ፣ አርብ፣ ቅዳሜ፣ እሁድ) ማህበራዊና ሃይማኖታዊ ፋይዳ አላቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«በየቀኑ» (Every day) የሚለው ቃል በአረፍተ ነገር ውስጥ የሚያሳየው ምንን ነው?",
          "options": [
            "የድርጊትን የዕለት ተዕለት ድግግሞሽ (Daily frequency of an action - Correct meaning of በየቀኑ)",
            "ያለፈን ጊዜ ብቻ",
            "የቦታ ርቀትን",
            "የስም ጾታን"
          ],
          "answerIndex": 0,
          "explanation": "«በየቀኑ» የድርጊትን የየቀን ድግግሞሽ ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Tomorrow we will study together' የሚለውን ሐሳብ በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ነገ አብረን እንማራለን። (Tomorrow we study together - Correct adverb + verb)",
            "ትላንት አብረን እንማራለን።",
            "አሁን ብቻ ተማርን።",
            "በጭራሽ አንማርም።"
          ],
          "answerIndex": 0,
          "explanation": "«ነገ» (Tomorrow) ከወደፊት/አሁን ጊዜ ግስ «እንማራለን» ጋር በትክክል ይጣመራል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የጊዜና የድግግሞሽ አመልካች ቃላትን ትክክለኛ ትርጉም ያጣመረው የትኛው ነው?",
          "options": [
            "ሁልጊዜ (Always)፣ በየቀኑ (Every day)፣ ዛሬ (Today)፣ ነገ (Tomorrow)፣ አሁን (Now)።",
            "ሁልጊዜ (Never)፣ ዛሬ (Yesterday)።",
            "ነገ (Today)፣ አሁን (Tomorrow)።",
            "በየቀኑ (Once a year)።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የቃላት ፍቺ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ሁልጊዜ / Always' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ሁልጊዜ"
          ],
          "explanation": "ትክክለኛው ቃል «ሁልጊዜ» (Huləggize) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u4-l4": {
    "id": "am-u4-l4",
    "subject": "amharic",
    "unit": 4,
    "lessonNumber": 4,
    "title": "የአሁን ጊዜ አሉታዊ ቅርጽ (Negative Present Tense: አል- ... -ም / አይ- ... -ም)",
    "level": "A1",
    "objective": "የአሁን እና የልማዳዊ ጊዜ ግሶችን በአሉታዊ ቅጥያዎች (አል- ... -ም / አይ- ... -ም / አት- ... -ም / አን- ... -ም) ማርባት።",
    "presentation": {
      "explanation": "የአሁን ጊዜ አሉታዊ የግስ እርባታ:\n\nበአማርኛ ቋንቋ የአሁን ጊዜን ወደ አሉታዊ ለመቀየር በግሱ መጀመሪያ ላይ «አል-/አ-/አት-/አይ-/አን-» እንዲሁም በመጨረሻ ላይ «-ም» ይገባል:\n\n፩. አሉታዊ የግስ እርባታ (ለምሳሌ «መብላት»):\n- «እኔ»: አል- ... -ም -> «አልበላም»\n- «አንተ»: አት- ... -ም -> «አትበላም»\n- «አንቺ»: አት- ... -ም -> «አትበዪም»\n- «እርስዎ»: አይ- ... -ም -> «አይበሉም»\n- «እሱ»: አይ- ... -ም -> «አይበላም»\n- «እሷ»: አት- ... -ም -> «አትበላም»\n- «እኛ»: አን- ... -ም -> «አንበላም»\n- «እናንተ»: አት- ... -ም -> «አትበሉም»\n- «እነሱ»: አይ- ... -ም -> «አይበሉም»።\n\n፪. ማስታወሻ:\n- በአሉታዊ አረፍተ ነገር ውስጥ የ«-አለሁ/-አለህ» ረዳት ቅጥያዎች ተወግደው «-ም» ይተካል።",
      "examples": [
        {
          "target": "እኔ ቡና አልጠጣም፣ ሻይ ግን እጠጣለሁ።",
          "reading": "Əne bunna alt’ät’am, šay gən ət’ät’t’allähu. [ɨˈne bunːa altʼɛˈtʼam ʃaj ɡɨn ɨtʼɛtʼːaˈlːɨhu] (uh-NAY boon-NAH ahl-t'eh-T'AHM, shy gun uh-t'et'-t'AHL-luh-hoo)",
          "translation": "I don't drink coffee, but I drink tea."
        },
        {
          "target": "እሱ ስጋ አይበላም፣ አትክልት ብቻ ይበላል።",
          "reading": "Əssu səga aybälam, atkəlt bəčča yəbälall. [ɨsːu sɨˈɡa ajbɛˈlam atˈkɨlt bɨtʃːa jɨbɛˈlalː] (uhs-SOO suh-GAH eye-beh-LAHM, aht-KULT buhch-CHAH yuh-beh-LAHL)",
          "translation": "He does not eat meat; he only eats vegetables."
        },
        {
          "target": "እኛ በክረምት ወራት ወደ ወንዝ አንሄድም።",
          "reading": "Əngya bäkərremt wärat wädä wänz anhedəm. [ɨɲa bɨkɨrɛmˈt wɛˈrat wɛdɛ wɛnz anheˈdɨm] (un-NYAH buh-kuh-REMT weh-RAHT weh-DEH wenz ahn-hay-DUM)",
          "translation": "We do not go to the river during the rainy season."
        }
      ],
      "mnemonics": [
        "Negative Formula: አል- (I don't), አት- (you don't), አይ- (he doesn't), አን- (we don't) + VERB + -ም!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ የጾም ወቅት የእንስሳት ተዋጽኦ (ስጋ፣ ወተት፣ ቅቤ) አይበላም፤ አትክልትና ጥራጥሬ ብቻ ይመገባሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«እኔ አልበላም» በሚለው አረፍተ ነገር ውስጥ አሉታዊነትን ያመጡት ቅጥያዎች የትኞቹ ናቸው?",
          "options": [
            "«አል-» እና «-ም» (Negative prefix al- and suffix -m - Correct negation markers)",
            "«እ-» እና «-አለሁ»",
            "«ት-» እና «-አለች»",
            "«ይ-» እና «-አል»"
          ],
          "answerIndex": 0,
          "explanation": "ለአንደኛ መደብ አሉታዊ ቅጥያዎች «አል-» እና «-ም» (አልበላም) ናቸው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ለአንድ ወንድ 'You don't study' ለማለት ትክክለኛው አሉታዊ ግስ የትኛው ነው?",
          "options": [
            "አትማርም (You don't study [to male] - Correct masculine negative verb)",
            "አልማርም",
            "አይማርም",
            "አንማርም"
          ],
          "answerIndex": 0,
          "explanation": "ለአንተ «አት- ... -ም» (አትማርም) ይባላል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአሁን ጊዜ አሉታዊ የግስ እርባታን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "እኔ አልጠጣም፣ እሱ አይጠጣም፣ እሷ አትጠጣም፣ እኛ አንጠጣም።",
            "እኔ አይጠጣም፣ እሱ አልጠጣም።",
            "እኛ አትጠጣም፣ እናንተ አንጠጣም።",
            "በአማርኛ አሉታዊ ቅጥያ -ም የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን አሉታዊ የግስ እርባታ ያሳያል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አልበላም / I do not eat' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አልበላም"
          ],
          "explanation": "ትክክለኛው ቃል «አልበላም» (Albälam) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u4-l5": {
    "id": "am-u4-l5",
    "subject": "amharic",
    "unit": 4,
    "lessonNumber": 5,
    "title": "የክፍል 4 አጠቃላይ ማጠቃለያ (Unit 4 Grand Synthesis & Daily Routine Discourse)",
    "level": "A1",
    "objective": "የአሁን ጊዜ አዎንታዊና አሉታዊ ግሶችን፣ የዕለት ተዕለት ተግባራትን እና የጊዜ ተውሳከ-ግሶችን በማቀናጀት የተሟላ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፬ አጠቃላይ ሰዋሰዋዊ ውህደትና ማጠቃለያ:\n\n፩. አዎንታዊ የአሁን ጊዜ እርባታ:\n- እኔ እሠራለሁ፣ አንተ ትሠራለህ፣ አንቺ ትሠሪያለሽ፣ እሱ ይሠራል፣ እሷ ትሠራለች፣ እኛ እንሠራለን፣ እናንተ ትሠራላችሁ፣ እነሱ ይሠራሉ።\n\n፪. አሉታዊ የአሁን ጊዜ እርባታ:\n- እኔ አልሠራም፣ አንተ አትሠራም፣ አንቺ አትሠሪም፣ እሱ አይሠራም፣ እሷ አትሠራም፣ እኛ አንሠራም፣ እናንተ አትሠሩም፣ እነሱ አይሠሩም።\n\n፫. የዕለት ተዕለት ተግባራት:\n- በጠዋት መነሳት፣ ቁርስ መብላት፣ ቡና መጠጣት፣ ወደ ሥራ መሄድ፣ መማር፣ ማታ መተኛት።\n\n፬. የጊዜ እና የድግግሞሽ ቃላት:\n- ሁልጊዜ፣ በየቀኑ፣ አንዳንዴ፣ ዛሬ፣ ነገ፣ አሁን።",
      "examples": [
        {
          "target": "እኔ በየቀኑ ጠዋት በጊዜ እነሳለሁ፣ ሻይ እጠጣለሁ፣ ነገር ግን ቡና አልጠጣም።",
          "reading": "Əne bäyyäqänu t’äwat bägize ənäsallähu, šay ət’ät’t’allähu, nägär gən bunna alt’ät’am. [ɨˈne bɛjːɛkʼɛˈnu tʼɨˈwat bɛɡiˈze ɨnɛsaˈlːɨhu ʃaj ɨtʼɛtʼːaˈlːɨhu nɛˈɡɛr ɡɨn bunːa altʼɛˈtʼam] (uh-NAY beh-yeh-k'eh-NOO t'uh-WAHT buh-gee-ZAY uh-neh-SAHL-luh-hoo, shy uh-t'et'-t'AHL-luh-hoo, neh-GER gun boon-NAH ahl-t'eh-T'AHM)",
          "translation": "I wake up on time every morning and drink tea, but I do not drink coffee."
        },
        {
          "target": "ተማሪዎቹ ዛሬ በትምህርት ቤት ውስጥ አዳዲስ ቃላትን ይማራሉ፣ አያረፍዱምም።",
          "reading": "Tämariwočču zare bätəməhərt bet wəst’ addaddis qalatan yəmmaralu, ayaräfəduməm. [tɛmariwoˈtʃːu zaˈre bɨtɨmˈhɨrt bet wɨstʼ adːadˈdis kʼalaˈtɨn jɨmːaˈralu ajarɨfɨˈdumɨm] (teh-mah-ree-wohch-CHOO zah-RAY buh-tum-HURT bayt woos-T' ahd-dahd-DEES k'ah-lah-TUN yuhm-mah-RAH-loo, eye-ah-ruh-fuh-DOO-mum)",
          "translation": "The students study new words in school today, and they are not late."
        },
        {
          "target": "እኛ ሁልጊዜ አብረን እንሠራለን፤ ሥራችንንም በደስታ እንጨርሳለን።",
          "reading": "Əngya huləggize abrän ənnəśärallän; śəraččənənəm bädässəta ənnəč’ärrəsallän. [ɨɲa hulɨɡːiˈze abˈrɛn ɨnːɨsɨˈralːɛn sɨratʃːɨnɨˈnɨm bɛdɛsːɨˈta ɨnːɨtʃʼɛrːɨˈsalːɛn] (un-NYAH hoo-lug-GEE-zay ahb-REN un-nuh-suh-RAHL-len; suh-rahch-CHUN-un-num buh-des-suh-TAH un-nuh-ch'er-ruh-SAHL-len)",
          "translation": "We always work together and finish our work with joy."
        }
      ],
      "mnemonics": [
        "Synthesis Checklist: Subject (እኔ/እኛ) + Adverb (በየቀኑ/ሁልጊዜ) + Positive Verb (እሠራለሁ) vs Negative Verb (አልሠራም)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ ማህበረሰብ 'ሥራ ክብር ነው' በሚለው መርህ ጠንክሮ መሥራትንና የዕለት ተዕለት ተግባርን በታማኝነት ማከናወንን ያበረታታል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«እኔ ሻይ እጠጣለሁ፣ ነገር ግን ቡና አልጠጣም» በሚለው ዓረፍተ ነገር ውስጥ አዎንታዊ እና አሉታዊ ግሶቹ የትኞቹ ናቸው?",
          "options": [
            "«እጠጣለሁ» አዎንታዊ ሲሆን «አልጠጣም» አሉታዊ ነው (Correct identification of positive and negative verbs)",
            "ሁለቱም አዎንታዊ ናቸው",
            "ሁለቱም አሉታዊ ናቸው",
            "ምንም ግስ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«እጠጣለሁ» (I drink) አዎንታዊ ሲሆን «አልጠጣም» (I don't drink) አሉታዊ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የዕለት ተዕለት ተግባርን፣ የጊዜ አመልካችን እና ትክክለኛ የግስ ስምምነትን ያሟላው የትኛው ነው?",
          "options": [
            "እኛ በየቀኑ ጠዋት ወደ ትምህርት ቤት እንሄዳለን። (We go to school every day in the morning - Correct routine syntax)",
            "እኛ በየቀኑ ጠዋት ወደ ትምህርት ቤት እሄዳለሁ።",
            "እሱ ሁልጊዜ ቁርስ አልበላም።",
            "እነሱ ዛሬ ሥራ ይሠራሉ።"
          ],
          "answerIndex": 0,
          "explanation": "«እኛ በየቀኑ ጠዋት ወደ ትምህርት ቤት እንሄዳለን» ባለቤትና ማሰሪያ አንቀጹን በትክክል ያዛመደ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 4ን ዋና ዋና ሰዋሰዋዊ ህጎች በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የአሁን ጊዜ ግሶች በአዎንታዊ (እ-...-አለሁ) እና በአሉታዊ (አል-...-ም) ይረባሉ፤ ከጊዜና ድግግሞሽ ቃላት ጋር ይጣመራሉ።",
            "በአማርኛ ግሶች የአሁን ጊዜ የላቸውም።",
            "አሉታዊ ለማድረግ ቃሉን መደጋገም ብቻ በቂ ነው።",
            "ለብዙ ቁጥር እና ለነጠላ ቁጥር ግስ አንድ ዓይነት ነው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 4ን ሰዋሰዋዊ መዋቅር ሙሉ በሙሉ ያጠቃልላል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እንማራለን / We learn' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "እንማራለን"
          ],
          "explanation": "ትክክለኛው ቃል «እንማራለን» (Ənnəmmarallän) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u5-l1": {
    "id": "am-u5-l1",
    "subject": "amharic",
    "unit": 5,
    "lessonNumber": 1,
    "title": "የኢትዮጵያ የሰዓት አቆጣጠር ስርዓት (The Ethiopian 12-Hour Time System)",
    "level": "A1",
    "objective": "የኢትዮጵያን የ12 ሰዓት የቀንና የሌሊት አቆጣጠር (ከጠዋቱ 12:00 ሰዓት እስከ ማታ 12:00 ሰዓት) እና ሰዓት መጠየቅን ማወቅ።",
    "presentation": {
      "explanation": "የኢትዮጵያ የሰዓት አቆጣጠር ስርዓት:\n\nበኢትዮጵያ የቀን ሰዓት አቆጣጠር ከፀሐይ መውጣት (ከጠዋቱ 12:00 ሰዓት - በፈረንጅ 6:00 AM) ይጀምራል:\n\n፩. የቀን ሰዓታት:\n- በፈረንጅ 7:00 AM -> ከጠዋቱ ፩ (1) ሰዓት\n- በፈረንጅ 8:00 AM -> ከጠዋቱ ፪ (2) ሰዓት\n- በፈረንጅ 12:00 PM (ቀትር) -> ከቀኑ ፮ (6) ሰዓት\n- በፈረንጅ 1:00 PM -> ከቀኑ ፯ (7) ሰዓት\n- በፈረንጅ 6:00 PM (ጀምበር መጥለቂያ) -> ከምሽቱ ፲፪ (12) ሰዓት።\n\n፪. የሌሊት ሰዓታት:\n- በፈረንጅ 7:00 PM -> ከምሽቱ ፩ (1) ሰዓት\n- በፈረንጅ 12:00 AM (እኩለ ሌሊት) -> ከሌሊቱ ፮ (6) ሰዓት።\n\n፫. ደቂቃዎች እና ክፍልፋዮች:\n- «ተኩል» (Half past): ሦስት ሰዓት ተኩል (3:30 / 9:30 AM Western)\n- «ከሩብ» (Quarter past): አራት ሰዓት ከሩብ (4:15)\n- «ሩብ ጉዳይ» (Quarter to): አምስት ሰዓት ለሩብ ጉዳይ (4:45)።",
      "examples": [
        {
          "target": "ይቅርታ፣ አሁን በኢትዮጵያ አቆጣጠር ስንት ሰዓት ነው?",
          "reading": "Yəqərta, ahun bä'ityop’p’ya aqot’at’är sənt sä'at näw? [jɨkʼɨrˈta aˈhun bɛʔitjoˈpʼːja akʼotʼaˈtʼɛr sɨnt sɨˈʔat nɛw] (yuh-k'ur-TAH, ah-HOON buh-eet-yoh-P'YAH ah-k'oh-t'ah-TUR sunt suh-AHT now?)",
          "translation": "Excuse me, what time is it now according to the Ethiopian clock?"
        },
        {
          "target": "አሁን ሰዓቱ በትክክል ከጠዋቱ ሦስት ሰዓት ተኩል ሆኗል።",
          "reading": "Ahun sä'atu bätəkəkkəl kät’äwatu sost sä'at täkul honwal. [aˈhun sɨʔaˈtu bɛtɨkɨkːɨl kɛtʼɨwaˈtu sost sɨˈʔat tɛˈkul honˈwal] (ah-HOON suh-ah-TOO buh-tuh-KUK-kul keh-t'uh-wah-TOO SOST suh-AHT teh-KOOL hohn-WAHL)",
          "translation": "Now the time is exactly 9:30 AM (3:30 Ethiopian daytime)."
        },
        {
          "target": "እኛ በየቀኑ ከቀኑ በስድስት ሰዓት የምሳ ዕረፍት እንወስዳለን።",
          "reading": "Əngya bäyyäqänu käqänu bäsəddəst sä'at yäməsa əräft ənnəwäsədallän. [ɨɲa bɛjːɛkʼɛˈnu kɛkʼɛˈnu bɛsɨdːɨst sɨˈʔat jɛmɨˈsa ɨrɛfˈt ɨnːɨwɛsɨˈdalːɛn] (un-NYAH beh-yeh-k'eh-NOO keh-k'eh-NOO buh-sud-DUST suh-AHT yeh-muh-SAH uh-REF-t un-nuh-weh-suh-DAHL-len)",
          "translation": "We take a lunch break every day at 12:00 noon (6:00 Ethiopian daytime)."
        }
      ],
      "mnemonics": [
        "Ethiopian Time Rule: Add/Subtract 6 hours! 6:00 AM Western = 12:00 Dawn Ethiopian; 12:00 PM Western = 6:00 Noon Ethiopian!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ሰዓት ከፀሐይ መውጣት (ጠዋት 12:00) ጀምሮ ስለሚቆጠር ከምድር ወገብ አቀማመጥ ጋር ፍጹም የተጣጣመ ተፈጥሯዊ ስርዓት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በኢትዮጵያ የሰዓት አቆጣጠር «ከቀኑ ፮ (ስድስት) ሰዓት» ማለት በፈረንጅ ሰዓት ስንት ነው?",
          "options": [
            "12:00 PM (ቀትር / Noon - Correct 6-hour offset)",
            "6:00 AM",
            "3:00 PM",
            "9:00 AM"
          ],
          "answerIndex": 0,
          "explanation": "የኢትዮጵያ ከቀኑ 6 ሰዓት የፈረንጅ ቀትር (12:00 PM) ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'It is 4:30 (four and a half)' የሚለውን በአማርኛ በትክክል የሚገልጸው የትኛው ነው?",
          "options": [
            "አራት ሰዓት ተኩል (4:30 - Correct half-past expression)",
            "አራት ሰዓት ከሩብ",
            "አራት ሰዓት ለሩብ ጉዳይ",
            "አራት ሰዓት ሙሉ"
          ],
          "answerIndex": 0,
          "explanation": "«ተኩል» የግማሽ ሰዓት (30 ደቂቃ) መግለጫ ሲሆን «አራት ሰዓት ተኩል» ማለት 4:30 ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የኢትዮጵያን የሰዓት አቆጣጠር መርህ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ቀኑ ከጠዋቱ 12 ሰዓት (ፀሐይ መውጫ) ይጀምራል፤ ከፈረንጅ ሰዓት ጋር የስድስት ሰዓት ልዩነት አለው።",
            "የኢትዮጵያ ሰዓት ከእኩለ ሌሊት 12 ሰዓት ብቻ ይጀምራል።",
            "በአማርኛ የደቂቃ አቆጣጠር የለም።",
            "ሰዓት በኢትዮጵያ አይጠየቅም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የኢትዮጵያ ሰዓት አቆጣጠር መርህ ያብራራል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ሰዓት / Time, hour, clock' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ሰዓት"
          ],
          "explanation": "ትክክለኛው ቃል «ሰዓት» (Sä'at) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u5-l2": {
    "id": "am-u5-l2",
    "subject": "amharic",
    "unit": 5,
    "lessonNumber": 2,
    "title": "የሳምንቱ ቀናት እና የቀን ክፍለ-ጊዜያት (Days of the Week & Parts of the Day)",
    "level": "A1",
    "objective": "ሰባቱን የሳምንቱ ቀናት (ሰኞ፣ ማክሰኞ፣ ረቡዕ፣ ሐሙስ፣ ዓርብ፣ ቅዳሜ፣ እሑድ) እና የቀን ክፍለ-ጊዜያትን (ጠዋት፣ ቀትር፣ ከሰዓት፣ ምሽት፣ ሌሊት) መለየት።",
    "presentation": {
      "explanation": "የሳምንቱ ቀናት እና የቀን ክፍለ-ጊዜያት:\n\n፩. የሳምንቱ ፯ቱ ቀናት:\n- «ሰኞ» (Monday)\n- «ማክሰኞ» (Tuesday)\n- «ረቡዕ» ወይም «ሮብ» (Wednesday)\n- «ሐሙስ» (Thursday)\n- «ዓርብ» (Friday)\n- «ቅዳሜ» (Saturday)\n- «እሑድ» (Sunday)።\n\n፪. የቀን ክፍለ-ጊዜያት:\n- «ጠዋት» (Morning: ከ12:00 እስከ 4:00 ሰዓት)\n- «ረፋድ» (Late morning: ከ4:00 እስከ 6:00 ሰዓት)\n- «ቀትር» (Midday / Noon: በ6:00 ሰዓት አካባቢ)\n- «ከሰዓት በኋላ» (Afternoon: ከ7:00 እስከ 11:00 ሰዓት)\n- «ምሽት» ወይም «ማታ» (Evening: ከ12:00 እስከ 4:00 ሌሊት)\n- «ሌሊት» (Late night / Midnight)።",
      "examples": [
        {
          "target": "እኛ ከሰኞ እስከ ዓርብ ድረስ በርትተን እንሠራለን።",
          "reading": "Əngya käsänyo əskä 'arb dräs bərtətän ənnəśärallän. [ɨɲa kɛsɛnˈjo ɨskɛ ʕarb dɨrɛs bɨrtɨˈtɛn ɨnːɨsɨˈralːɛn] (un-NYAH keh-sen-YOH us-keh AHRB duh-RES bur-tuh-TEN un-nuh-suh-RAHL-len)",
          "translation": "We work diligently from Monday to Friday."
        },
        {
          "target": "ቅዳሜ እና እሑድ የዕረፍት እና የቤተሰብ ቀናት ናቸው።",
          "reading": "Qədamenna əhud yä'əräft ənna yäbetäsäb qänat naččäw. [kʼɨdaˈmenːa ɨˈhud jɛʔɨrɛfˈt ɨnːa jɛbetɛˈsɛb kʼɛˈnat natʃːɛw] (k'uh-dah-MAYN-nah uh-HOOD yeh-uh-REF-t un-nah yeh-bay-tuh-SEB k'eh-NAHT nahch-CHOH)",
          "translation": "Saturday and Sunday are days of rest and family."
        },
        {
          "target": "ማክሰኞ ረፋድ ላይ አስፈላጊ የሆነ የሥራ ስብሰባ አለን።",
          "reading": "Maksänyo räfad lay asfällagi yähonä yäsəra səbsäba allän. [makˈsɛnjo rɛˈfad laj asfɛlːaˈɡi jɛhoˈnɛ jɛsɨˈra sɨbˈsɛba alːɛn] (mahk-sen-YOH reh-FAHD lie ahs-fel-lah-GEE yeh-HOH-neh yeh-suh-RAH sub-seh-BAH ahl-LEN)",
          "translation": "We have an important work meeting on Tuesday late morning."
        }
      ],
      "mnemonics": [
        "Week Song: ሰኞ፣ ማክሰኞ፣ ረቡዕ፣ ሐሙስ፣ ዓርብ = የሥራ ቀናት፤ ቅዳሜ እና እሑድ = የዕረፍት ቀናት!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ኦርቶዶክስ ተዋሕዶ ባህል ረቡዕ እና ዓርብ የጾም ቀናት ሲሆኑ ቅዳሜና እሑድ ደግሞ የሰንበት በዓላት ናቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የሳምንቱ የመጀመሪያው የሥራ ቀን የትኛው ነው?",
          "options": [
            "ሰኞ (Monday - First weekday)",
            "ቅዳሜ",
            "እሑድ",
            "ሐሙስ"
          ],
          "answerIndex": 0,
          "explanation": "«ሰኞ» (Monday) የሳምንቱ የመጀመሪያው የሥራ ቀን ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'On Saturday and Sunday' የሚለውን ሐረግ በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ቅዳሜ እና እሑድ (Saturday and Sunday - Correct weekend pair)",
            "ሰኞ እና ማክሰኞ",
            "ረቡዕ እና ሐሙስ",
            "ዓርብ እና ሰኞ"
          ],
          "answerIndex": 0,
          "explanation": "ቅዳሜ (Saturday) እና እሑድ (Sunday) የሳምንቱ መጨረሻ ቀናት ናቸው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ሰባቱን የሳምንቱ ቀናት በቅደም ተከተል በትክክል የዘረዘረው የትኛው ነው?",
          "options": [
            "ሰኞ፣ ማክሰኞ፣ ረቡዕ፣ ሐሙስ፣ ዓርብ፣ ቅዳሜ፣ እሑድ።",
            "ቅዳሜ፣ እሑድ፣ ሰኞ፣ ዓርብ።",
            "ማክሰኞ፣ ሰኞ፣ ሐሙስ፣ ረቡዕ።",
            "በአማርኛ የሳምንቱ ቀናት አምስት ብቻ ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ሰባቱን ቀናት በትክክለኛ ቅደም ተከተላቸው ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ሰኞ / Monday' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ሰኞ"
          ],
          "explanation": "ትክክለኛው ቃል «ሰኞ» (Sänyo) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u5-l3": {
    "id": "am-u5-l3",
    "subject": "amharic",
    "unit": 5,
    "lessonNumber": 3,
    "title": "የቀጠሮ እና የጊዜ መርሃ-ግብር አገላለጾች (Appointments & Scheduling)",
    "level": "A1",
    "objective": "ቀጠሮ መያዝን፣ መቼ እንደሆነ መጠየቅን (መቼ? በስንት ሰዓት?) እና የጊዜ መርሃ-ግብር ማዘጋጀትን መለማመድ።",
    "presentation": {
      "explanation": "የቀጠሮ እና የጊዜ መርሃ-ግብር አገላለጾች:\n\n፩. የቀጠሮ ጥያቄዎች:\n- «መቼ?» (When?): መቼ እንገናኛለን?\n- «በስንት ሰዓት?» (At what time?): ስብሰባው በስንት ሰዓት ይጀምራል?\n- «የት?» (Where?): የት እንገናኝ?\n\n፪. የቀጠሮ መልሶችና ስምምነቶች:\n- «ቀጠሮ አለኝ» (I have an appointment)\n- «ይመቸኛል» (It is convenient for me)\n- «አይመቸኝም» (It is not convenient for me)\n- «በሰዓቱ መድረስ» (Arriving on time)\n- «ማርፈድ» (To be late): ይቅርታ አረፈድኩ።",
      "examples": [
        {
          "target": "ሐሙስ ከሰዓት በኋላ በስምንት ሰዓት ቀጠሮ አለን።",
          "reading": "Hamus käsä'at bähwala bäsəmmənt sä'at qät’äro allän. [haˈmus kɛsɨˈʔat bɛhʷaˈla bɛsɨmːɨnt sɨˈʔat kʼɛtʼɛˈro alːɛn] (hah-MOOS keh-suh-AHT beh-HWAH-lah buh-sum-MUNT suh-AHT k'eh-t'eh-ROH ahl-LEN)",
          "translation": "We have an appointment on Thursday afternoon at 2:00 PM (8:00 Ethiopian daytime)."
        },
        {
          "target": "ነገ ጠዋት በሦስት ሰዓት መገናኘት ይመችሃል?",
          "reading": "Nägä t’äwat bäsost sä'at mäggänanyät yəmec’əhall? [nɛˈɡɛ tʼɨˈwat bɛsost sɨˈʔat mɛɡːɛnaˈɲɛt jɨmeˈtʃʼɨhal] (neh-GEH t'uh-WAHT buh-SOST suh-AHT meg-geh-NAHN-yet yuh-may-ch'uh-HAHL?)",
          "translation": "Is it convenient for you to meet tomorrow morning at 9:00 AM (3:00 Ethiopian daytime)?"
        },
        {
          "target": "አዎ፣ ያ ሰዓት በጣም ይመቸኛል፤ በሰዓቱ እመጣለሁ።",
          "reading": "Awo, ya sä'at bät’am yəmec’əngyal; bäsä'atu əmät’allähu. [aˈwo ja sɨˈʔat bɛtʼam jɨmeˈtʃʼɨɲal bɛsɨʔaˈtu ɨmɛtʼaˈlːɨhu] (ah-WOH, yah suh-AHT beh-T'AHM yuh-may-ch'un-NYAHL; buh-suh-ah-TOO uh-meh-T'AHL-luh-hoo)",
          "translation": "Yes, that time suits me very well; I will come on time."
        }
      ],
      "mnemonics": [
        "Appointment trio: መቼ (when?) + ስንት ሰዓት (what time?) + ይመቸኛል (it works for me)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ የቀጠሮ ባህል ጨዋነትን ለማሳየት አስቀድሞ መደወልና በሰዓቱ መገኘት 'ክብር መስጠት' ተብሎ ይደነቃል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ቀጠሮ ለማመቻቸት 'ይመቸኛል' የሚለው ቃል ምን ማለት ነው?",
          "options": [
            "ይመቸኛል / It is convenient for me (Correct acceptance of an appointment)",
            "አልፈልግም",
            "አልመጣም",
            "አረፈድኩ"
          ],
          "answerIndex": 0,
          "explanation": "«ይመቸኛል» የቀረበው ሰዓትና ቦታ አመቺ መሆኑን ያረጋግጣል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'When shall we meet?' የሚለውን ጥያቄ በአማርኛ በትክክል የሚገልጸው የትኛው ነው?",
          "options": [
            "መቼ እንገናኝ? (When shall we meet? - Correct scheduling question)",
            "የት ሄድክ?",
            "ስንት ነው?",
            "ምን በላህ?"
          ],
          "answerIndex": 0,
          "explanation": "«መቼ እንገናኝ?» የቀጠሮ ጊዜ ለመጠየቅ የሚያገለግል ትክክለኛ አገላለጽ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የቀጠሮ አያያዝን እና ስምምነትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "መቼ እንገናኝ? ነገ ጠዋት በሦስት ሰዓት ይመቸኛል፤ በሰዓቱ እመጣለሁ።",
            "መቼ እንገናኝ? ትላንት እመጣለሁ።",
            "ቀጠሮ የለኝም ስለዚህ በሰዓቱ አረፈድኩ።",
            "በአማርኛ ቀጠሮ አይያዝም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛና ምክንያታዊ የቀጠሮ ውይይት ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቀጠሮ / Appointment' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቀጠሮ"
          ],
          "explanation": "ትክክለኛው ቃል «ቀጠሮ» (Qät’äro) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u5-l4": {
    "id": "am-u5-l4",
    "subject": "amharic",
    "unit": 5,
    "lessonNumber": 4,
    "title": "የወቅቶች እና የአየር ንብረት መሰረታዊ ቃላት (Seasons & Weather Basics)",
    "level": "A1",
    "objective": "አራቱን የኢትዮጵያ ወቅቶች (ክረምት፣ በጋ፣ መኸር፣ ጸደይ) እና የአየር ሁኔታ ቃላትን (ፀሐይ፣ ዝናብ፣ ብርድ፣ ሙቀት) መግለጽ።",
    "presentation": {
      "explanation": "የኢትዮጵያ አራቱ ወቅቶች እና የአየር ንብረት:\n\n፩. አራቱ ወቅቶች:\n- «ክረምት» (Rainy Season: ሰኔ፣ ሐምሌ፣ ነሐሴ)\n- «መኸር» (Harvest Season: መስከረም፣ ጥቅምት፣ ኅዳር)\n- «በጋ» (Dry / Sunny Season: ታኅሣሥ፣ ጥር፣ የካቲት)\n- «ጸደይ» ወይም «በልግ» (Spring / Light Rains: መጋቢት፣ ሚያዝያ፣ ግንቦት)።\n\n፪. የአየር ሁኔታ መግለጫዎች:\n- «ፀሐይ»: ዛሬ ፀሐይ ወጥቷል\n- «ዝናብ»: ዝናብ እየዘነበ ነው\n- «ብርድ»: ብርድ አለ\n- «ሙቀት»: ሙቀት ነው\n- «ንፋስ»: ንፋስ ይነፍሳል።",
      "examples": [
        {
          "target": "በክረምት ወቅት ብዙ ዝናብ ይዘንባል፤ አየሩም ይቀዘቅዛል።",
          "reading": "Bäkərremt wäqt bəzu zənab yəzänball; ayyärum yəqäzäqqəzall. [bɨkɨrɛmˈt wɛkʼt bɨˈzu zɨˈnab jɨzɛnˈbal ajːɛˈrum jɨkʼɛzɛkʼːɨˈzal] (buh-kuh-REMT wehk'-T buh-ZOO zuh-NAHB yuh-zen-BAHL; eye-yeh-ROOM yuh-k'eh-zehk'-k'uh-ZAHL)",
          "translation": "During the rainy season, a lot of rain falls, and the weather becomes cold."
        },
        {
          "target": "በመኸር ወቅት አደይ አበባ ያብባል፤ ምድሪቱም በአረንጓዴ ትሸፈናለች።",
          "reading": "Bämäxär wäqt adäy abäba yabbəball; mədritum bä'arängwade təššäffänalläčč. [bɛmɛˈxɛr wɛkʼt aˈdɛj abɛˈba jabːɨˈbal mɨdˈritum bɛʔarɛnˈɡʷade tɨʃːɛfːɛˈnalːɛtʃː] (buh-meh-HER wehk'-T ah-DAY ah-beh-BAH yahb-buh-BAHL; mud-ree-TOOM beh-ah-ren-GWAH-day tuhsh-shef-feh-NAHL-lech)",
          "translation": "In the autumn harvest season, the Adey Abeba yellow flowers bloom and the earth is covered in green."
        },
        {
          "target": "ዛሬ በጋ ስለሆነ ደስ የሚል ፀሐይ እና ሞቅ ያለ አየር አለ።",
          "reading": "Zare bäga səlähonä däs yämmil s’ähay ənna moq yalä ayyär allä. [zaˈre bɛˈɡa sɨlɛhoˈnɛ dɛs jɛmːil sˤɛˈhaj ɨnːa mokʼ jaˈlɛ ajːɛr alːɛ] (zah-RAY beh-GAH suh-leh-HOH-neh des yem-MEEL ts'eh-HIGH un-nah mohk' yah-LEH eye-YER ahl-LEH)",
          "translation": "Since today is in the dry season, there is pleasant sunshine and warm weather."
        }
      ],
      "mnemonics": [
        "Four Seasons: ክረምት (rainy) -> መኸር (flowers & harvest) -> በጋ (sunny dry) -> ጸደይ (spring)!"
      ],
      "culturalNotes": [
        "መስከረም ፩ (የኢትዮጵያ አዲስ ዓመት / ቅዱስ ዮሐንስ) የመኸር መጀመሪያ ሲሆን ቢጫው የአደይ አበባ የሰላምና የተስፋ ምልክት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በኢትዮጵያ ከሰኔ እስከ ነሐሴ ያለው ዋናው የዝናብ ወቅት ምን ይባላል?",
          "options": [
            "ክረምት (Rainy season - Correct Ethiopian rainy season)",
            "በጋ",
            "መኸር",
            "ጸደይ"
          ],
          "answerIndex": 0,
          "explanation": "ከሰኔ እስከ ነሐሴ ያለው የዝናብ ወቅት «ክረምት» ይባላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Today is sunny' የሚለውን ሐሳብ በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ዛሬ ፀሐይ አለ። (Today is sunny - Correct weather expression)",
            "ዛሬ በረዶ ዘነበ።",
            "ዛሬ ሌሊት ነው።",
            "ዛሬ ጨለማ ብቻ ነው።"
          ],
          "answerIndex": 0,
          "explanation": "«ዛሬ ፀሐይ አለ» ወይም «ፀሐያማ ቀን ነው» ትክክለኛ የአየር ሁኔታ መግለጫ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "አራቱን የኢትዮጵያ ወቅቶች በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ክረምት (ዝናባማ)፣ መኸር (የአበባና እህል)፣ በጋ (ፀሐያማ)፣ ጸደይ (የወጣት ወቅት)።",
            "ክረምት ብቻ ነው ያለው።",
            "በጋና ክረምት አንድ ዓይነት ናቸው።",
            "በኢትዮጵያ ወቅቶች አይለወጡም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ አራቱን ወቅቶች ከነባህሪያቸው በትክክል ይገልጻል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ክረምት / Rainy season, winter' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ክረምት"
          ],
          "explanation": "ትክክለኛው ቃል «ክረምት» (Kərremt) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u5-l5": {
    "id": "am-u5-l5",
    "subject": "amharic",
    "unit": 5,
    "lessonNumber": 5,
    "title": "የክፍል 5 አጠቃላይ ማጠቃለያ (Unit 5 Grand Synthesis & Daily Routine Discourse)",
    "level": "A1",
    "objective": "የሰዓት አቆጣጠርን፣ የሳምንቱን ቀናት፣ የቀጠሮ አነጋገርን እና የወቅቶችን መግለጫ በአንድነት አቀናጅቶ መተግበር።",
    "presentation": {
      "explanation": "የክፍል ፭ አጠቃላይ ሰዋሰዋዊ ውህደትና ማጠቃለያ:\n\n፩. የሰዓት አቆጣጠር:\n- ከጠዋቱ 12:00 ሰዓት (ፀሐይ መውጫ / 6:00 AM Western)\n- ከቀኑ 6:00 ሰዓት (ቀትር / 12:00 PM Western)\n- ሰዓት ተኩል (Half past)፣ ከሩብ (Quarter past)።\n\n፪. የሳምንቱ ቀናት:\n- ሰኞ፣ ማክሰኞ፣ ረቡዕ፣ ሐሙስ፣ ዓርብ (የሥራ ቀናት)፤ ቅዳሜ እና እሑድ (የዕረፍት ቀናት)።\n\n፫. ቀጠሮ እና መርሃ-ግብር:\n- መቼ እንገናኝ? በስንት ሰዓት? ይመቸኛል፤ በሰዓቱ እመጣለሁ።\n\n፬. ወቅቶች እና አየር:\n- ክረምት (ዝናብ)፣ መኸር (አበባ)፣ በጋ (ፀሐይ)፣ ጸደይ (ለስላሳ አየር)።",
      "examples": [
        {
          "target": "እኛ ዓርብ ከሰዓት በኋላ በአራት ሰዓት ተኩል በካፌ ውስጥ ለመገናኘት ቀጠሮ አለን።",
          "reading": "Əngya 'arb käsä'at bähwala bā'aratt sä'at täkul bäkafe wəst’ lämäggänanyät qät’äro allän. [ɨɲa ʕarb kɛsɨˈʔat bɛhʷaˈla baʔaˈratː sɨˈʔat tɛˈkul bɛkaˈfe wɨstʼ lɨmɛɡːɛnaˈɲɛt kʼɛtʼɛˈro alːɛn] (un-NYAH ahrb keh-suh-AHT beh-HWAH-lah bah-ah-RAHT suh-AHT teh-KOOL buh-kah-FAY woos-T' luh-meg-geh-NAHN-yet k'eh-t'eh-ROH ahl-LEN)",
          "translation": "We have an appointment to meet inside the café on Friday afternoon at 4:30 (10:30 AM Western)."
        },
        {
          "target": "በበጋ ወቅት ፀሐይ ስለሚደምቅ ቅዳሜ ጠዋት ወደ ስፖርት ሜዳ እንሄዳለን።",
          "reading": "Bäbäga wäqt s’ähay səlämmidäməq qədame t’äwat wädä sport meda ənnəhedallän. [bɛbɛˈɡa wɛkʼt sˤɛˈhaj sɨlɛmːiˈdɛmɨkʼ kʼɨdaˈme tʼɨˈwat wɛdɛ sɨˈport meˈda ɨnːɨheˈdalːɛn] (buh-beh-GAH wehk'-T ts'eh-HIGH suh-lem-mee-DEM-k' k'uh-dah-MAY t'uh-WAHT weh-DEH sport may-DAH un-nuh-hay-DAHL-len)",
          "translation": "Since the sun shines brightly during the dry season, we go to the sports field on Saturday morning."
        },
        {
          "target": "በክረምት ዝናብ ስለሚበዛ በሰዓታችን ወደ ቤት መመለስ አለብን።",
          "reading": "Bäkərremt zənab səlämmibäza bäsä'ataččən wädä bet mämäls alläbbən. [bɨkɨrɛmˈt zɨˈnab sɨlɛmːiˈbɛza bɛsɨʔataˈtʃːɨn wɛdɛ bet mɛmɛlˈs alːɛbːɨn] (buh-kuh-REMT zuh-NAHB suh-lem-mee-BEH-zah buh-suh-ah-tahch-CHUN weh-DEH bayt meh-MELS ahl-leb-BUN)",
          "translation": "Because rain is heavy in the rainy season, we must return home on time."
        }
      ],
      "mnemonics": [
        "Synthesis formula: Day (ዓርብ) + Time (በአራት ሰዓት) + Season/Weather (በጋ/ፀሐይ) + Action (እንገናኛለን)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ የቀንና የወቅቶች አቆጣጠር ከተፈጥሮ ዑደት ጋር የተሳሰረ ጥንታዊና ህያው የባህል ቅርስ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«ዓርብ ከሰዓት በኋላ በአራት ሰዓት እንገናኝ» በሚለው አረፍተ ነገር ውስጥ የቀኑ ክፍለ-ጊዜ እና ሰዓቱ የትኛው ነው?",
          "options": [
            "ከሰዓት በኋላ (Afternoon) እና አራት ሰዓት (4:00) (Correct time and day part identification)",
            "ጠዋት እና ስድስት ሰዓት",
            "ሌሊት እና ሁለት ሰዓት",
            "ቀትር ብቻ"
          ],
          "answerIndex": 0,
          "explanation": "ቀኑ «ዓርብ»፣ ክፍለ-ጊዜው «ከሰዓት በኋላ»፣ ሰዓቱ ደግሞ «አራት ሰዓት» ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ ቀን፣ ሰዓት እና ትክክለኛ የቀጠሮ አገላለጽ የያዘው የትኛው ነው?",
          "options": [
            "እኛ ማክሰኞ ጠዋት በሁለት ሰዓት ቀጠሮ አለን። (We have an appointment on Tuesday morning at 2:00 - Complete time syntax)",
            "እኛ ትላንት ነገ እንሄዳለን።",
            "ሰዓቱ ዝናብ ይበላል።",
            "ቀጠሮ የለም ሰኞ ሌሊት።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ ቀን (ማክሰኞ)፣ ክፍለ-ጊዜ (ጠዋት)፣ ሰዓት (ሁለት ሰዓት) እና ቀጠሮን በትክክል አቀናጅቷል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 5ን ዋና ዋና ዕውቀቶች በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የኢትዮጵያ 12 ሰዓት አቆጣጠር፣ 7ቱ የሳምንቱ ቀናት፣ የቀጠሮ አነጋገር እና 4ቱ ወቅቶች በአግባቡ ተብራርተዋል።",
            "በአማርኛ ሰዓትና ቀናት አይታወቁም።",
            "ቀጠሮ ለመያዝ የእንግሊዝኛ ቃላት ብቻ ያስፈልጋሉ።",
            "ክረምት እና በጋ አንድ ዓይነት ዝናብ አላቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ሙሉውን የክፍል 5 ይዘት ያጠቃልላል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቀናት / Days' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቀናት"
          ],
          "explanation": "ትክክለኛው ቃል «ቀናት» (Qänat) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u6-l1": {
    "id": "am-u6-l1",
    "subject": "amharic",
    "unit": 6,
    "lessonNumber": 1,
    "title": "የኢትዮጵያ ባህላዊ ምግቦች እና መጠጦች (Traditional Ethiopian Foods & Beverages)",
    "level": "A1",
    "objective": "የኢትዮጵያ ባህላዊ ምግቦችን (እንጀራ፣ ዶሮ ወጥ፣ ሽሮ፣ ክትፎ፣ ጥብስ) እና መጠጦችን (ቡና፣ ሻይ፣ ጠጅ፣ ጠላ) በስም መለየት።",
    "presentation": {
      "explanation": "የኢትዮጵያ ባህላዊ ምግቦች እና መጠጦች:\n\n፩. ዋና ዋና ባህላዊ ምግቦች:\n- «እንጀራ»: ከጤፍ ዱቄት የሚዘጋጅ ለስላሳና ቀዳዳ ቀዳዳ ያለው ባህላዊ እንጀራ\n- «ዶሮ ወጥ»: በቅመም፣ በሽንኩርትና በርበሬ የሚሠራ የበዓላት የዶሮ ወጥ ከእንቁላል ጋር\n- «ሽሮ ወጥ»: ከተፈጨ የአተር ወይም የባቄላ ዱቄት የሚዘጋጅ ተወዳጅ የዕለት ተዕለት ወጥ\n- «ክትፎ»: በጥሩ ቅቤና ሚጥሚጣ የሚቦካ የለስላሳ ስጋ ምግብ\n- «ጥብስ»: በሽንኩርትና በቃሪያ የተጠበሰ ጣፋጭ ስጋ።\n\n፪. ባህላዊ መጠጦች:\n- «ቡና»: በጀበና የሚፈላ የኢትዮጵያ ቡና\n- «ሻይ» (Tea)\n- «ጠጅ»: ከማርና ከጌሾ የሚዘጋጅ ባህላዊ መጠጥ\n- «ጠላ»: ከዕህልና ከጌሾ የሚጠመቅ ባህላዊ መጠጥ።\n\n፫. ጠቃሚ ግሶች:\n- መብላት፣ መጠጣት፣ መጋበዝ።",
      "examples": [
        {
          "target": "እኔ እንጀራ በዶሮ ወጥ እና በሽሮ በጣም እወዳለሁ።",
          "reading": "Əne ənğära bä doro wät’ ənna bäšəro bät’am əwädallähu. [ɨˈne ɨndʒɛˈra bɛdoˈro wɛtʼ ɨnːa bɛʃɨˈro bɛtʼam ɨwɛdaˈlːɨhu] (uh-NAY un-JEH-rah buh DOH-roh weht' un-nah buh-shuh-ROH beh-T'AHM uh-weh-DAHL-luh-hoo)",
          "translation": "I like Injera with Doro Wot and Shiro very much."
        },
        {
          "target": "እንግዶቻችንን በጣፋጭ ክትፎ እና በጀበና ቡና እንጋብዛለን።",
          "reading": "Əngədočaččənən bät’afac’ kətfo ənna bäğäbäna bunna ənnəggabbəzallän. [ɨnɡɨdoˈtʃatʃːɨnɨn bɛtʼaˈfatʃʼ kɨtˈfo ɨnːa bɛdʒɛbɛˈna bunːa ɨnːɨɡːabːɨˈzalːɛn] (un-guh-doh-chahch-CHUN-un buh-t'ah-FAHCH kut-FOH un-nah buh-jeh-beh-NAH boon-NAH un-nuhg-gahb-buh-ZAHL-len)",
          "translation": "We treat our guests with delicious Kitfo and clay-pot Jebena coffee."
        },
        {
          "target": "በበዓል ቀን መላው ቤተሰብ ተሰብስቦ ጥብስ እና ጠጅ ይመገባል።",
          "reading": "Bäbä'al qän mällaw betäsäb täsäbsəbo t’əbs ənna t’äğğ yəmmäggäball. [bɛbɛˈʔal kʼɛn mɛlːaw betɛˈsɛb tɛsɛbˈsɨbo tʼɨbs ɨnːa tʼɛdʒː jɨmːɛɡːɛˈbal] (buh-beh-AHL k'en mel-LOW bay-tuh-SEB teh-seb-suh-BOH t'ubs un-nah t'ej yuhm-meg-geh-BAHL)",
          "translation": "On holiday, the entire family gathers to eat Tibs and drink Tej."
        }
      ],
      "mnemonics": [
        "Ethiopian Menu: እንጀራ (base) + ዶሮ ወጥ / ሽሮ / ክትፎ / ጥብስ (stews & meats) + ጀበና ቡና (coffee)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል 'ጉርሻ' (Gursha) ለምትወደው ሰው በእጅህ ምግብ ማጉረስ የፍቅር፣ የአክብሮትና የቅርበት መግለጫ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከጤፍ ዱቄት የሚጋገረውና የኢትዮጵያ ዋናው ባህላዊ ምግብ መሠረት የሆነው ምንድን ነው?",
          "options": [
            "እንጀራ (Injera - Traditional sourdough flatbread made from teff)",
            "ዳቦ",
            "ፓስታ",
            "ሩዝ"
          ],
          "answerIndex": 0,
          "explanation": "«እንጀራ» ከጤፍ የሚዘጋጅ የኢትዮጵያ መሠረታዊ ባህላዊ ምግብ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'We drink coffee from the Jebena' የሚለውን ሐሳብ በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "የጀበና ቡና እንጠጣለን። (We drink Jebena coffee - Correct beverage sentence)",
            "የጀበና ቡና እንበላለን።",
            "ውኃ ብቻ እንጠጣለን።",
            "ቡና አንወድም።"
          ],
          "answerIndex": 0,
          "explanation": "ቡና ፈሳሽ ስለሆነ ከ«መጠጣት» ግስ ጋር ተጣምሮ «የጀበና ቡና እንጠጣለን» ይባላል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የኢትዮጵያ ባህላዊ ምግቦችንና መጠጦችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "እንጀራ፣ ዶሮ ወጥ፣ ሽሮ፣ ክትፎ፣ ጥብስ እና ጀበና ቡና።",
            "በርገር እና ፒዛ ብቻ።",
            "በኢትዮጵያ ወጥ አይበላም።",
            "ጠጅ እና ጠላ የምግብ አይነቶች ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና ባህላዊ ምግቦችንና መጠጦችን በትክክል ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እንጀራ / Injera' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "እንጀራ"
          ],
          "explanation": "ትክክለኛው ቃል «እንጀራ» (Ənğära) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u6-l2": {
    "id": "am-u6-l2",
    "subject": "amharic",
    "unit": 6,
    "lessonNumber": 2,
    "title": "በምግብ ቤት ውስጥ ማዘዝ እና ጥያቄዎች (Ordering at a Restaurant)",
    "level": "A1",
    "objective": "በሬስቶራንት ወይም በሆቴል ውስጥ ምግብ ማዘዝን፣ አስተናጋጅ መጥራትንና ሂሳብ መጠየቅን ማወቅ።",
    "presentation": {
      "explanation": "በምግብ ቤት ውስጥ አገልግሎት ማግኘት እና ማዘዝ:\n\n፩. አስተናጋጅን መጥራት እና ማዘዝ:\n- «አስተናጋጅ!»\n- «ምን ልታዘዝ?» ወይም «ምን ይምጣ?»\n- «እባክዎ የምግብ ዝርዝር (ሜኑ) ያምጡልኝ»\n- «እባክዎ አንድ ሽሮ እና ሁለት እንጀራ ያምጡልን»።\n\n፪. ጥያቄዎች እና ምስጋና:\n- «በጣም ይጣፍጣል»\n- «ይበቃኛል»\n- «ውኃ አለ?»\n- «ሂሳብ ስንት ነው?» ወይም «ሂሳብ አምጡልኝ»።",
      "examples": [
        {
          "target": "እባክዎን አስተናጋጅ፣ ለእኔ አንድ የጾም በያይነቱ እና አንድ የታሸገ ውኃ አምጡልኝ።",
          "reading": "Əbakwon astänagağ, lä'əne and yäs’om bäyayənätu ənna and yätaššägä wəha amət’ulləng. [ɨbakˈwon astɛnaˈɡadʒ lɨʔɨˈne and jɛsˤom bɛjajɨnɛˈtu ɨnːa and jɛtaʃːɛˈɡɛ wɨˈha amɨtʼulːɨɲ] (uh-bahk-WOHN ahs-teh-nah-GAHJ, luh-uh-NAY ahnd yeh-ts'ohm beh-yah-yuh-neh-TOO un-nah ahnd yeh-tahsh-sheh-GEH wuh-HAH ahm-t'ool-LUN)",
          "translation": "Please waiter, bring me one fasting combination platter (Beyaynetu) and one bottled water."
        },
        {
          "target": "ምግቡ በጣም ይጣፍጣል፤ እባክዎ አሁን ሂሳብ ያምጡልን።",
          "reading": "Məgbu bät’am yət’affət’all; əbakwo ahun hisab yamət’ullən. [mɨɡˈbu bɛtʼam jɨtʼafːɨˈtʼal ɨbakˈwo aˈhun hiˈsab jamɨtʼuˈlːɨn] (mug-BOOO beh-T'AHM yuh-t'ahf-fuh-T'AHL; uh-bahk-WOH ah-HOON hee-SAHB yahm-t'ool-LUN)",
          "translation": "The food is very delicious; please bring us the bill now."
        },
        {
          "target": "አስተናጋጁ ፈጣንና ትሁት አገልግሎት ለደንበኞቹ ይሰጣል።",
          "reading": "Astänagağu fät’t’anənna təhut agälgəlot lädänbänyočču yəsät’all. [astɛnaˈɡadʒu fɛtʼːanɨnːa tɨˈhut aɡɛlɡɨˈlot lɨdɛnbɛˈɲotʃːu jɨsɛˈtʼal] (ahs-teh-nah-GAH-joo fet'-t'ahn-un-nah tuh-HOOT ah-gel-guh-LOHT luh-den-ben-yohch-CHOO yuh-set'-t'AHL)",
          "translation": "The waiter provides fast and courteous service to the customers."
        }
      ],
      "mnemonics": [
        "Ordering steps: ሜኑ አምጡልኝ (menu please) -> እባክዎ ... ያምጡልኝ (please bring ...) -> ሂሳብ ስንት ነው? (how much is the bill?)"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ምግብ ቤቶች አንድ ትልቅ ማዕድ (ማሶብ) ዙሪያ ተሰብስቦ አብሮ መመገብ 'የአንድነትና የበረከት' መገለጫ ተደርጎ ይወሰዳል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በምግብ ቤት ውስጥ የበሉበትን ክፍያ ለመጠየቅ 'ሂሳብ ስንት ነው?' ማለት ምን ማለት ነው?",
          "options": [
            "ሂሳብ ስንት ነው? / How much is the bill? (Correct bill inquiry)",
            "ምግቡ የት ነው?",
            "ስምዎ ማን ነው?",
            "ሰዓቱ ስንት ነው?"
          ],
          "answerIndex": 0,
          "explanation": "«ሂሳብ ስንት ነው?» የክፍያ መጠየቂያ ትክክለኛ አገላለጽ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Please bring me water' የሚለውን ትህትና የተሞላበት ትዕዛዝ በአማርኛ የትኛው ነው?",
          "options": [
            "እባክዎ ውኃ ያምጡልኝ። (Please bring me water - Polite request)",
            "ውኃ አልጠጣም።",
            "ውኃ የለም።",
            "ሂሳብ ክፈሉ።"
          ],
          "answerIndex": 0,
          "explanation": "«እባክዎ ... ያምጡልኝ» በትህትና ለማዘዝ የሚያገለግል ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "በምግብ ቤት ውስጥ የሚደረግን የተሟላ ውይይት በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "እባክዎ ሜኑ ያምጡልኝ -> አንድ ጥብስ አምጡልኝ -> ምግቡ ይጣፍጣል -> ሂሳብ ስንት ነው?",
            "ሜኑ አልፈልግም -> ሂሳብ አልከፍልም።",
            "ውኃ በላሁ -> ዳቦ ጠጣሁ።",
            "በአማርኛ አስተናጋጅ አይጠራም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የምግብ ቤት ቅደም ተከተል ያሳያል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ሂሳብ / Bill, account' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ሂሳብ"
          ],
          "explanation": "ትክክለኛው ቃል «ሂሳብ» (Hisab) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u6-l3": {
    "id": "am-u6-l3",
    "subject": "amharic",
    "unit": 6,
    "lessonNumber": 3,
    "title": "በገበያ ውስጥ ዋጋ መጠየቅ እና መደራደር (Market Shopping & Bargaining)",
    "level": "A1",
    "objective": "በገበያ ውስጥ ዋጋ መጠየቅን (ስንት ነው? በስንት ብር ነው?)፣ መደራደርን (ውድ ነው፣ ቀንስልኝ) እና ክፍያ መፈጸምን መለማመድ።",
    "presentation": {
      "explanation": "በገበያ ውስጥ መገበያየት እና መደራደር:\n\n፩. ዋጋ መጠየቅ:\n- «ይህ ስንት ነው?»\n- «ዋጋው ስንት ብር ነው?»\n- «በስንት ትሸጣለህ / ትሸጫለሽ?»\n\n፪. መደራደር:\n- «በጣም ውድ ነው!»\n- «እባክዎ ትንሽ ቀንስልኝ / ቀነሽልኝ»\n- «የመጨረሻው ዋጋ ስንት ነው?»\n- «ርካሽ ነው»።\n\n፫. ክፍያ:\n- «በጥሬ ገንዘብ (ካሽ)»\n- «በቴሌብር / በባንክ»።",
      "examples": [
        {
          "target": "ይቅርታ፣ የዚህ ባህላዊ ልብስ ዋጋ ስንት ብር ነው?",
          "reading": "Yəqərta, yäzzih bahəlawi ləbs waga sənt bər näw? [jɨkʼɨrˈta jɛzːih bahɨlaˈwi lɨbs waˈɡa sɨnt bɨr nɛw] (yuh-k'ur-TAH, yez-ZEEH bah-huh-lah-WEE lubs wah-GAH sunt bur now?)",
          "translation": "Excuse me, how many Birr is the price of this traditional dress?"
        },
        {
          "target": "ዋጋው አንድ ሺህ አምስት መቶ ብር ነው፤ ነገር ግን ለእርስዎ ትንሽ እቀንሳለሁ።",
          "reading": "Wagaw and ših amməst mäto bər näw; nägär gən lä'ərswo tənəš əqänsallähu. [waˈɡaw and ʃih amːɨst mɛˈto bɨr nɛw nɛˈɡɛr ɡɨn lɨʔɨrsˈwo tɨˈnɨʃ ɨkʼɛnsaˈlːɨhu] (wah-GOW ahnd SHEEH ahm-MUST meh-TOH bur now; neh-GER gun luh-urs-WOH tuh-NUSH uh-k'en-SAHL-luh-hoo)",
          "translation": "The price is 1,500 Birr, but I will reduce a little for you."
        },
        {
          "target": "በጣም ጥሩ፤ ገንዘቡን በቴሌብር እልክልሃለሁ።",
          "reading": "Bät’am t’əru; gänzäbun bätelebər ələkkəlləhallähu. [bɛtʼam tʼɨˈru ɡɛnzɛˈbun bɛteleˈbɨr ɨlɨkːɨlːɨˈhalːɨhu] (beh-T'AHM t'uh-ROO; gen-zeh-BOON beh-tay-lay-BUR uh-luk-kul-luh-HAHL-luh-hoo)",
          "translation": "Very good; I will send you the money via Telebirr."
        }
      ],
      "mnemonics": [
        "Bargaining flow: ስንት ነው? (How much?) -> ውድ ነው (Too expensive!) -> ቀንስልኝ (Discount please!) -> በቴሌብር እከፍላለሁ (I pay by Telebirr)!"
      ],
      "culturalNotes": [
        "በመርካቶ (Merkato - የአፍሪካ ትልቁ ክፍት ገበያ) መደራደር የተለመደና ወዳጃዊ የንግድ ልውውጥ አካል ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "የአንድ ዕቃ ዋጋ ከፍ ሲልና ቅናሽ ሲፈለግ ምን ይባላል?",
          "options": [
            "ውድ ነው፣ እባክዎ ቀንስልኝ (It is expensive, please discount for me - Correct bargaining formula)",
            "ርካሽ ነው፣ ጨምርበት",
            "ነፃ ነው",
            "አልገዛም"
          ],
          "answerIndex": 0,
          "explanation": "«ውድ ነው፣ እባክዎ ቀንስልኝ» ዋጋ ለመደራደር የሚያገለግል የተለመደ አነጋገር ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'What is the final price?' የሚለውን በአማርኛ በትክክል የሚገልጸው የትኛው ነው?",
          "options": [
            "የመጨረሻው ዋጋ ስንት ነው? (What is the final price? - Correct last price question)",
            "የመጀመሪያው ስም ማን ነው?",
            "የት ሄደ?",
            "ስንት ሰዓት ነው?"
          ],
          "answerIndex": 0,
          "explanation": "«የመጨረሻው ዋጋ ስንት ነው?» የመጨረሻውን የድርድር ዋጋ ለማወቅ ይጠየቃል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "በገበያ ውስጥ ትክክለኛውን የግዢ እና የድርድር ቅደም ተከተል የያዘው የትኛው ነው?",
          "options": [
            "ዋጋው ስንት ነው? -> ውድ ነው ቀንስልኝ -> የመጨረሻው ዋጋ አንድ መቶ ብር ነው -> በቴሌብር ከፈልኩ።",
            "ገንዘብ አልሰጥም -> ዕቃውን ወሰድኩ።",
            "ዋጋ ሳይጠየቅ ይከፈላል።",
            "በመርካቶ ብር አይሰራም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛና ጨዋነት የተሞላበት የግብይት ውይይት ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ዋጋ / Price, cost' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ዋጋ"
          ],
          "explanation": "ትክክለኛው ቃል «ዋጋ» (Waga) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u6-l4": {
    "id": "am-u6-l4",
    "subject": "amharic",
    "unit": 6,
    "lessonNumber": 4,
    "title": "የቁጥር እና የክብደት መለኪያዎች በገበያ (Quantifiers & Measurements in the Market)",
    "level": "A1",
    "objective": "መለኪያዎችን (ኪሎ፣ ሊትር፣ ቁራጭ፣ እሽግ፣ ትንሽ፣ ብዙ) ከዕቃዎች ጋር አጣምሮ መጠቀም።",
    "presentation": {
      "explanation": "የቁጥር እና የክብደት መለኪያዎች:\n\n፩. የክብደት እና የይዘት መለኪያዎች:\n- «ኪሎ»: አንድ ኪሎ ሽንኩርት፣ ሁለት ኪሎ ቲማቲም\n- «ሊትር»: አንድ ሊትር ዘይት፣ ሁለት ሊትር ወተት\n- «ቁራጭ»: አንድ ቁራጭ ስጋ\n- «እሽግ» ወይም «ጥቅል»: አንድ እሽግ ሻይ።\n\n፪. የመጠን ገላጮች:\n- «ትንሽ»: ትንሽ ጨው ጨምርልኝ\n- «ብዙ»: ብዙ አትክልት አለ\n- «ግማሽ»: ግማሽ ኪሎ ቅቤ።",
      "examples": [
        {
          "target": "እባክዎ ሁለት ኪሎ ድንች እና አንድ ኪሎ ሽንኩርት ይስጡኝ።",
          "reading": "Əbakwo hulätt kilo dənčč ənna and kilo šənkurt yəsət’ung. [ɨbakˈwo huˈlɛtː kiˈlo dɨntʃː ɨnːa and kiˈlo ʃɨnˈkurt jɨsɨˈtʼuɲ] (uh-bahk-WOH hoo-LET KEE-loh dunch un-nah ahnd KEE-loh shun-KOORT yuh-suh-T'OON)",
          "translation": "Please give me two kilos of potatoes and one kilo of onions."
        },
        {
          "target": "ለቁርስ የሚሆን አንድ ሊትር ትኩስ ወተት እና ግማሽ ኪሎ ቅቤ ገዛን።",
          "reading": "Läqurs yämmihon and litər təkus wätät ənna gəmaš kilo qəbe gäzzan. [lɨkʼurs jɛmːiˈhon and liˈtɨr tɨˈkus wɛˈtɛt ɨnːa ɡɨˈmaʃ kiˈlo kʼɨˈbe ɡɛzːan] (luh-k'oors yem-mee-HOHN ahnd LEE-tur tuh-KOOS weh-TET un-nah guh-MAHSH KEE-loh k'uh-BAY gez-ZAHN)",
          "translation": "We bought one liter of fresh milk and half a kilo of butter for breakfast."
        },
        {
          "target": "በገበያው ውስጥ ብዙ አይነት ትኩስ ፍራፍሬዎች ይገኛሉ።",
          "reading": "Bägäbäyäw wəst’ bəzu aynät təkus fərafräwočč yəggänyallu. [bɛɡɛbɛˈjɛw wɨstʼ bɨˈzu ajˈnɛt tɨˈkus fɨrafɨrɛˈwotʃː jɨɡːɛˈɲalːu] (buh-geh-beh-YOW woos-T' buh-ZOO eye-NET tuh-KOOS fuh-rah-fruh-wohch-CHOO yuhg-gehn-YAHL-loo)",
          "translation": "Many kinds of fresh fruits are found inside the market."
        }
      ],
      "mnemonics": [
        "Measures: ኪሎ (kilo for solid goods) + ሊትር (liter for liquids) + ግማሽ (half) + ቁራጭ (piece)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህላዊ ገበያዎች ከኪሎ በተጨማሪ እንደ 'ቁና'፣ 'ጭልፋ' እና 'ስልቻ' ያሉ ባህላዊ መለኪያዎችም በስፋት ያገለግላሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ፈሳሽ ነገሮችን (እንደ ወተትና ዘይት) ለመለካት የሚያገለግለው መለኪያ የትኛው ነው?",
          "options": [
            "ሊትር (Liter - Unit of volume for liquids)",
            "ኪሎ",
            "ሜትር",
            "ሰዓት"
          ],
          "answerIndex": 0,
          "explanation": "ፈሳሾች በ«ሊትር» ይለካሉ።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Give me half a kilo of butter' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ግማሽ ኪሎ ቅቤ ስጡኝ። (Give me half a kilo of butter - Correct measurement request)",
            "አንድ ሊትር ቅቤ ስጡኝ።",
            "ቅቤ አልፈልግም።",
            "አስር ኪሎ ቅቤ በላሁ።"
          ],
          "answerIndex": 0,
          "explanation": "«ግማሽ ኪሎ ቅቤ ስጡኝ» ትክክለኛውን የክብደት መለኪያና ቅቤን ያጣመረ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የመለኪያ ቃላትን እና ተዛማጅ ዕቃዎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ሁለት ኪሎ ሽንኩርት (ኪሎ ለደረቅ ዕቃ) እና አንድ ሊትር ወተት (ሊትር ለፈሳሽ)።",
            "አንድ ሊትር ሽንኩርት እና ሁለት ኪሎ ወተት።",
            "በአማርኛ መለኪያዎች አይጠቀሱም።",
            "ኪሎ ለጊዜ ብቻ ያገለግላል።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ኪሎን ለሽንኩርትና ሊትርን ለወተት በትክክል መድቧል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ኪሎ / Kilo, kilogram' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ኪሎ"
          ],
          "explanation": "ትክክለኛው ቃል «ኪሎ» (Kilo) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u6-l5": {
    "id": "am-u6-l5",
    "subject": "amharic",
    "unit": 6,
    "lessonNumber": 5,
    "title": "የክፍል 6 አጠቃላይ ማጠቃለያ (Unit 6 Grand Synthesis & Culinary/Market Discourse)",
    "level": "A1",
    "objective": "ባህላዊ ምግቦችን፣ የምግብ ቤት ትዕዛዝን፣ የገበያ ድርድርን እና መለኪያዎችን ያቀናጀ የተሟላ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፮ አጠቃላይ ሰዋሰዋዊ ውህደትና ማጠቃለያ:\n\n፩. ባህላዊ ምግቦች:\n- እንጀራ፣ ዶሮ ወጥ፣ ሽሮ፣ ክትፎ፣ ጥብስ፣ ጀበና ቡና፣ ጠጅ።\n\n፪. በምግብ ቤት ውስጥ:\n- ሜኑ አምጡልኝ፣ እባክዎ ... ያምጡልን፣ ምግቡ ይጣፍጣል፣ ሂሳብ ስንት ነው?\n\n፫. በገበያ ውስጥ:\n- ዋጋው ስንት ነው? ውድ ነው ቀንስልኝ፣ የመጨረሻው ዋጋ፣ በቴሌብር እከፍላለሁ።\n\n፬. መለኪያዎች:\n- ኪሎ፣ ሊትር፣ ግማሽ፣ ቁራጭ፣ ትንሽ፣ ብዙ።",
      "examples": [
        {
          "target": "እኛ ዛሬ ወደ መርካቶ ሄደን ሁለት ኪሎ ስጋ እና አትክልት ገዛን፤ ከዚያም በባህላዊ ምግብ ቤት ውስጥ ቁርስ በላን።",
          "reading": "Əngya zare wädä Märkato hedän hulätt kilo səga ənna atkəlt gäzzan; käzziyam bäbahəlawi məgb bet wəst’ qurs bällan. [ɨɲa zaˈre wɛdɛ mɛrkaˈto heˈdɛn huˈlɛtː kiˈlo sɨˈɡa ɨnːa atˈkɨlt ɡɛzːan kɛzːiˈjam bɛbahɨlaˈwi mɨɡˈb bet wɨstʼ kʼurs bɛlːan] (un-NYAH zah-RAY weh-DEH mahr-KAH-toh hay-DEN hoo-LET KEE-loh suh-GAH un-nah aht-KULT gez-ZAHN; kez-zee-YAHM buh-bah-huh-lah-WEE mug-b BAYT woos-T' k'oors bel-LAHN)",
          "translation": "Today we went to Merkato and bought two kilos of meat and vegetables; then we ate breakfast in a traditional restaurant."
        },
        {
          "target": "አስተናጋጁ ጣፋጭ ሽሮ ወጥ እና ትኩስ እንጀራ አመጣልን፤ ምግቡም እጅግ በጣም ይጣፍጣል።",
          "reading": "Astänagağu t’afac’ šəro wät’ ənna təkus ənğära amät’allən; məgbum əğğəg bät’am yət’affət’all. [astɛnaˈɡadʒu tʼaˈfatʃʼ ʃɨˈro wɛtʼ ɨnːa tɨˈkus ɨndʒɛˈra amɛˈtʼalːɨn mɨɡˈbum ɨdʒːɨɡ bɛtʼam jɨtʼafːɨˈtʼal] (ahs-teh-nah-GAH-joo t'ah-FAHCH shuh-ROH weht' un-nah tuh-KOOS un-JEH-rah ah-meh-T'AHL-lun; mug-BOOM uhj-JUG beh-T'AHM yuh-t'ahf-fuh-T'AHL)",
          "translation": "The waiter brought us delicious Shiro stew and fresh Injera; the food is extremely delicious."
        },
        {
          "target": "የምግቡን ሂሳብ በሞባይል ባንኪንግ ከፍለን አስተናጋጁን አመሰገንን።",
          "reading": "Yäməgbun hisab bämobayəl banking kəflän astänagağun amäsäggännän. [jɛmɨɡˈbun hiˈsab bɛmoˈbajɨl banˈkiŋɡ kɨfˈlɛn astɛnaˈɡadʒun amɛsɛɡːɛnːɛn] (yeh-mug-BOON hee-SAHB beh-moh-BY-ul bahn-KEENG kuf-LEN ahs-teh-nah-gah-JOON ah-meh-seg-GEN-nen)",
          "translation": "We paid the food bill via mobile banking and thanked the waiter."
        }
      ],
      "mnemonics": [
        "Synthesis checklist: Food (ሽሮ/እንጀራ) + Measure (ኪሎ/ሊትር) + Ordering (አምጡልኝ) + Bill & Bargaining (ሂሳብ/ዋጋ/ቴሌብር)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ማህበረሰብ መብላትና መጠጣት ብቻ ሳይሆን 'እንብላ!' ብሎ አብሮ እንዲበላ መጋበዝ የጨዋነትና የኢትዮጵያዊ መስተንግዶ ቁንጮ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ በባህላዊ ምግብ ቤት ውስጥ የሚደረግን ትክክለኛ ንግግር የሚያሳየው የትኛው ነው?",
          "options": [
            "እባክዎ አንድ ክትፎ ያምጡልን፣ ምግቡ በጣም ይጣፍጣል፣ ሂሳብ ስንት ነው? (Correct complete restaurant discourse)",
            "ምግብ አልበላም ሂሳብ አምጡ",
            "እንጀራ ጠጣሁ ቡና በላሁ",
            "በሬስቶራንት ውስጥ ማዘዝ አይቻልም"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትዕዛዝን፣ ምስጋናን እና የሂሳብ ጥያቄን በአግባቡ ያጣመረ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ገበያ ሄዶ መገበያየትን እና በምግብ ቤት መመገብን ያቀናጀው ትክክለኛ አረፍተ ነገር የትኛው ነው?",
          "options": [
            "በገበያ ሁለት ኪሎ ፍራፍሬ ገዛን፤ ከዚያም ቡና ጠጣን። (We bought two kilos of fruits in the market, then drank coffee - Complete synthesized sentence)",
            "በገበያ ምንም የለም።",
            "ሰዓቱ ኪሎ ይበላል።",
            "ቴሌብር አይሰራም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የገበያ መለኪያዎችንና የመጠጥ ግስን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 6ን ዋና ዋና ርዕሰ ጉዳዮች በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የባህላዊ ምግቦች ስሞች፣ በምግብ ቤት ማዘዝ፣ በገበያ ዋጋ መጠየቅና መደራደር፣ እንዲሁም መለኪያዎች ተካተዋል።",
            "የክፍል 6 ትምህርት ስለ ስፖርት ብቻ ነው።",
            "በአማርኛ የገበያ ቃላት የሉም።",
            "ሁሉም ምግቦች አንድ ዓይነት ስም አላቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 6ን አጠቃላይ ይዘት ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ምግብ / Food, meal' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ምግብ"
          ],
          "explanation": "ትክክለኛው ቃል «ምግብ» (Məgb) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u7-l1": {
    "id": "am-u7-l1",
    "subject": "amharic",
    "unit": 7,
    "lessonNumber": 1,
    "title": "ቀላል የኃላፊ ጊዜ ግሶች መዋቅር (Simple Past Tense Conjugation)",
    "level": "A2",
    "objective": "ቀላል የኃላፊ ጊዜ ግሶችን (ሄደ፣ መጣ፣ በላ፣ ጠጣ፣ ሠራ) በሁሉም መደቦች በትክክል ማርባት።",
    "presentation": {
      "explanation": "ቀላል የኃላፊ ጊዜ ግስ እርባታ (Simple Past Tense Conjugation):\n\n፩. በኃላፊ ጊዜ የግስ ግንድ ላይ የሚጨመሩ የባለቤት ቅጥያዎች:\n- እኔ -> -ሁ (በላሁ / መጣሁ)\n- አንተ -> -ህ (በላህ / መጣህ)\n- አንቺ -> -ሽ (በላሽ / መጣሽ)\n- እርስዎ -> -ኡ (በሉ / መጡ)\n- እሱ -> -ኧ / መደበኛ ግንድ (በላ / መጣ / ሄደ)\n- እሷ -> -ች (በላች / መጣች / ሄደች)\n- እኛ -> -ን (በላን / መጣን / ሄድን)\n- እናንተ -> -አችሁ (በላችሁ / መጣችሁ)\n- እነሱ -> -ኡ (በሉ / መጡ / ሄዱ)።\n\n፪. ምሳሌ (ግስ: መሄድ - To go):\n- እኔ ሄድኩ (I went)\n- አንተ ሄድክ (You [m] went)\n- አንቺ ሄድሽ (You [f] went)\n- እሱ ሄደ (He went)\n- እሷ ሄደች (She went)\n- እኛ ሄድን (We went)።",
      "examples": [
        {
          "target": "እኔ ትላንትና ጠዋት ወደ ትምህርት ቤት ሄድኩ።",
          "reading": "Əne təlantənna t’äwat wädä təməhərt bet hedkw. [ɨˈne tɨlanˈtɨnːa tʼɛˈwat wɛdɛ tɨmɨhɨrtˈbet hedˈku] (uh-NAY tuh-lahn-TUN-nah t'eh-WAHT weh-DEH tuh-muh-hurt BAYT HAYD-koo)",
          "translation": "I went to school yesterday morning."
        },
        {
          "target": "እህቴ ጣፋጭ ምሳ አዘጋጀች፤ ሁላችንም አብረን በላን።",
          "reading": "Əhəte t’afac’ məsa azäggağäčč; hullaččənəm abrän bällan. [ɨhɨˈte tʼaˈfatʃʼ mɨˈsa azɛɡːadʒɛtʃː hulːatʃːɨˈnɨm abˈrɛn bɛlːan] (uh-huh-TAY t'ah-FAHCH muh-SAH ah-zeg-GAH-jech; hool-lahch-CHUN-um ahb-REN bel-LAHN)",
          "translation": "My sister prepared a delicious lunch; all of us ate together."
        },
        {
          "target": "ተማሪዎቹ ትምህርታቸውን በሚገባ አጠኑ እና ፈተናውን አለፉ።",
          "reading": "Temariwočču təməhərtaččäwən bämiggäba at’ännu ənna fätänawən alläfu. [tɛmariˈwotʃːu tɨmɨhɨrˈtatʃːɛwɨn bɛmiɡːɛˈba atʼɛnːu ɨnːa fɛtɛˈnawɨn alːɛˈfu] (teh-mah-ree-wohch-CHOO tuh-muh-hur-tahch-CHEW-un beh-meeg-geh-BAH ah-t'en-NOO un-nah feh-teh-nah-WUN ahl-leh-FOO)",
          "translation": "The students studied their lessons well and passed the exam."
        }
      ],
      "mnemonics": [
        "Past suffixes: እኔ (-ሁ/-ኩ) | አንተ (-ህ/-ክ) | አንቺ (-ሽ) | እሱ (base) | እሷ (-ች) | እኛ (-ን) | እናንተ (-አችሁ) | እነሱ (-ኡ)!"
      ],
      "culturalNotes": [
        "በአማርኛ ሰዋሰው የኃላፊ ጊዜ ግስ መሠረት የሚወሰደው ከሦስተኛ መደብ ተባዕታይ ነጠላ (እሱ ሄደ / ሠራ) ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«እኛ» ከሚለው ተውላጠ ስም ጋር የሚስማማው የ«መሄድ» የኃላፊ ጊዜ ግስ የትኛው ነው?",
          "options": [
            "ሄድን (We went - Correct 1st person plural past suffix -ን)",
            "ሄድኩ",
            "ሄደች",
            "ሄዱ"
          ],
          "answerIndex": 0,
          "explanation": "«እኛ» ከሚለው ጋር የኃላፊ ጊዜ ቅጥያው «-ን» ሆኖ «ሄድን» ይሆናል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'She prepared lunch' የሚለውን ሐሳብ በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "እሷ ምሳ አዘጋጀች። (She prepared lunch - Correct feminine 3rd person past)",
            "እሷ ምሳ አዘጋጀሁ።",
            "እሷ ምሳ አዘጋጀህ።",
            "እሷ ምሳ አዘጋጁ።"
          ],
          "answerIndex": 0,
          "explanation": "ለእሷ (3ኛ መደብ አንስታይ) የኃላፊ ቅጥያው «-ች» ሆኖ «አዘጋጀች» ይሆናል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የኃላፊ ጊዜ የግስ እርባታዎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "እኔ በላሁ፣ አንተ በላህ፣ እሷ በላች፣ እኛ በላን።",
            "እኔ በላች፣ እኛ በላሁ።",
            "እሱ በላን፣ አንተ በላሽ።",
            "በኃላፊ ጊዜ ሁሉም መደቦች አንድ ዓይነት ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ለእያንዳንዱ መደብ ትክክለኛውን ቅጥያ ተጠቅሟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እኛ ሄድን / We went' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ሄድን"
          ],
          "explanation": "ትክክለኛው ቃል «ሄድን» (Hedən) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u7-l2": {
    "id": "am-u7-l2",
    "subject": "amharic",
    "unit": 7,
    "lessonNumber": 2,
    "title": "ያለፉ ድርጊቶች እና የጊዜ አመልካቾች (Past Actions & Time Markers)",
    "level": "A2",
    "objective": "ያለፉ የጊዜ አመልካች ቃላትን (ትላንት፣ ከትላንት ወዲያ፣ ባለፈው ሳምንት/ወር፣ ድሮ) ከኃላፊ ጊዜ ግሶች ጋር ማዛመድ።",
    "presentation": {
      "explanation": "ያለፉ የጊዜ አመልካች ቃላት (Past Time Markers):\n\n፩. ዋና ዋና የጊዜ ቃላት:\n- «ትላንት» / «ትላንትና»: Yesterday\n- «ከትላንት ወዲያ»: The day before yesterday\n- «ባለፈው ሳምንት»: Last week\n- «ባለፈው ወር»: Last month\n- «ባለፈው ዓመት»: Last year\n- «ድሮ» / «በጥንት ጊዜ»: In the old days / long ago\n- «ከሁለት ቀን በፊት»: Two days ago።\n\n፪. በአረፍተ ነገር ውስጥ አጠቃቀም:\n- የጊዜ አመልካች ቃላት አብዛኛውን ጊዜ በአረፍተ ነገር መጀመሪያ ወይም ከባለቤት ቀጥሎ ይቀመጣሉ (ምሳሌ: እኔ ትላንት መጣሁ / ትላንት መጣሁ)።",
      "examples": [
        {
          "target": "ትላንትና ከጓደኞቼ ጋር ወደ ቤተ-መጻሕፍት ሄጄ አነበብኩ።",
          "reading": "Təlantənna kägwadänyočče gar wädä betä-mäs’ahəft heğe anäbbäbku. [tɨlanˈtɨnːa kɛɡʷadɛˈɲotʃːe ɡar wɛdɛ betɛmɛsˤaˈhɨft hedʒe anɛbːɛbˈku] (tuh-lahn-TUN-nah keh-gwah-den-YOHCH-chay gahr weh-DEH bay-tuh-meh-TS'AH-huft hay-JAY ah-neb-beb-KOO)",
          "translation": "Yesterday I went to the library with my friends and read."
        },
        {
          "target": "እኛ ባለፈው ሳምንት ወደ ቢሾፍቱ ሐይቅ ተጉዘን ተዝናናን።",
          "reading": "Ənnya baläfäw sammənt wädä Bišoftu hayq täguzän täznannan. [ɨɲa balɛˈfɛw samːɨnt wɛdɛ biʃofˈtu hajq tɛɡuˈzɛn tɛznanːan] (un-NYAH bah-leh-FEW sahm-MUNT weh-DEH bee-shohf-TOO high-k' teh-goo-ZEN tehz-nahn-NAHN)",
          "translation": "Last week we traveled to Lake Bishoftu and relaxed."
        },
        {
          "target": "አያቴ ድሮ በአስመራ ከተማ ውስጥ ለብዙ ዓመታት ኖረ።",
          "reading": "Ayate dəro bä'Asmära kätäma wəst’ läbəzu amätat norä. [ajate dɨˈro bɛʔasˈmɛra kɛtɛˈma wɨstʼ lɨbɨˈzu amɛˈtat noˈrɛ] (eye-YAH-tay duh-ROH beh-ahs-MEH-rah keh-teh-MAH woos-T' luh-buh-ZOO ah-meh-TAHT noh-REH)",
          "translation": "My grandfather lived inside the city of Asmara for many years long ago."
        }
      ],
      "mnemonics": [
        "Past time ladder: ትላንት (yesterday) -> ከትላንት ወዲያ (2 days ago) -> ባለፈው ሳምንት/ወር/ዓመት (last week/month/year) -> ድሮ (long ago)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ታሪክ 'ድሮ' የሚለው ቃል ጥንታዊ ወጎችን፣ አባባሎችንና ታሪኮችን ለማውሳት በስፋት ይሠራበታል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ያለፈውን ቀን 'Yesterday' ለመግለጽ የሚያገለግለው ቃል የትኛው ነው?",
          "options": [
            "ትላንትና (Yesterday - Correct past time marker)",
            "ነገ",
            "ዛሬ",
            "ከነገ ወዲያ"
          ],
          "answerIndex": 0,
          "explanation": "«ትላንትና» ያለፈውን ቀን (Yesterday) ያመለክታል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Last week we traveled' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ባለፈው ሳምንት ተጓዝን። (Last week we traveled - Correct time marker and verb)",
            "በሚመጣው ሳምንት እንጓዛለን።",
            "ዛሬ እንጓዛለን።",
            "ነገ ተጓዝን።"
          ],
          "answerIndex": 0,
          "explanation": "«ባለፈው ሳምንት» ካለፈ ድርጊት («ተጓዝን») ጋር አብሮ ይገባል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የጊዜ አመልካች ቃላትን እና ያለፈ ድርጊትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ባለፈው ዓመት አዲስ ቋንቋ ተማርኩ፤ ትላንት ደግሞ ፈተና ወሰድኩ።",
            "ነገ ትላንት መጣሁ።",
            "ዛሬ ባለፈው ዓመት እሄዳለሁ።",
            "ድሮ ማለት ነገ ማለት ነው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ያለፉ የጊዜ አመልካቾችን ከኃላፊ ግሶች ጋር በትክክል አጣምሯል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ትላንትና / Yesterday' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ትላንትና",
            "ትላንት"
          ],
          "explanation": "ትክክለኛው ቃል «ትላንትና» (Təlantənna) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u7-l3": {
    "id": "am-u7-l3",
    "subject": "amharic",
    "unit": 7,
    "lessonNumber": 3,
    "title": "የኃላፊ ጊዜ አሉታዊ ቅርጽ (Negative Past Tense)",
    "level": "A2",
    "objective": "በኃላፊ ጊዜ አሉታዊ መዋቅርን (አል- ... -ም) በሁሉም መደቦች በትክክል መጠቀም።",
    "presentation": {
      "explanation": "የኃላፊ ጊዜ አሉታዊ ቅርጽ (Negative Past Tense):\n\n፩. መዋቅር: አል- + የኃላፊ ግስ + -ም\n- እኔ አልሄድኩም (I did not go)\n- አንተ አልሄድክም (You [m] did not go)\n- አንቺ አልሄድሽም (You [f] did not go)\n- እርስዎ አልሄዱም (You [polite] did not go)\n- እሱ አልሄደም (He did not go)\n- እሷ አልሄደችም (She did not go)\n- እኛ አልሄድንም (We did not go)\n- እናንተ አልሄዳችሁም (You [pl] did not go)\n- እነሱ አልሄዱም (They did not go)።\n\n፪. ማስታወሻ:\n- በኃላፊ ጊዜ አሉታዊ ቅጥያ ሁልጊዜ በ«አል-» ጀምሮ በ«-ም» ይዘጋል።",
      "examples": [
        {
          "target": "እኔ ትላንትና የታመምኩ ስለነበርኩ ወደ ሥራ አልሄድኩም።",
          "reading": "Əne təlantənna yätammämku səllänäbbärku wädä səra alhedkum. [ɨˈne tɨlanˈtɨnːa jɛtamːɛmˈku sɨlːɛnɛbːɛrˈku wɛdɛ sɨˈra alhedˈkum] (uh-NAY tuh-lahn-TUN-nah yeh-tahm-mem-KOO sul-leh-neb-ber-KOO weh-DEH suh-RAH ahl-hayd-KOOM)",
          "translation": "Because I was sick yesterday, I did not go to work."
        },
        {
          "target": "እነሱ ስለ ጉዳዩ ምንም ዓይነት መረጃ አልሰሙም።",
          "reading": "Ənnäsu səlä guddayu mənnəm aynät märäğa alsämum. [ɨnːɛˈsu sɨlɛ ɡudːaˈju mɨnːɨm ajˈnɛt mɛrɛˈdʒa alsɛˈmum] (un-neh-SOO suh-leh good-DAH-yoo mun-num eye-NET meh-reh-JAH ahl-seh-MOOM)",
          "translation": "They did not hear any kind of information regarding the matter."
        },
        {
          "target": "እኛ ገንዘብ ስላልነበረን ያንን ውድ ዕቃ አልገዛንም።",
          "reading": "Ənnya gänzäb səlalnäbbärän yannən wəd əqqa algäzzanəm. [ɨɲa ɡɛnˈzɛb sɨlalnɛbːɛˈrɛn janːɨn wɨd ɨkʼːa alɡɛzːaˈnɨm] (un-NYAH gen-ZEB sul-ahl-neb-beh-REN yahn-NUN wud uhk'-K'AH ahl-gez-ZAHN-um)",
          "translation": "Because we didn't have money, we did not buy that expensive item."
        }
      ],
      "mnemonics": [
        "Negative Past Formula: አል- [Prefix] + Root + Suffix + -ም [Suffix] -> አል-...-ም!"
      ],
      "culturalNotes": [
        "በአማርኛ ንግግር ውስጥ አለመቻልን ወይም አለማድረግን በትህትና ሲገልጹ 'ይቅርታ፣ አልቻልኩም' ማለት የተለመደ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«እሱ ሄደ (He went)» የሚለውን ወደ አሉታዊ ኃላፊ ጊዜ ሲቀየር ምን ይሆናል?",
          "options": [
            "እሱ አልሄደም (He did not go - Correct negative past for 3rd person singular)",
            "እሱ አይሄድም",
            "እሱ አልሄድኩም",
            "እሱ አልሄደችም"
          ],
          "answerIndex": 0,
          "explanation": "«እሱ ሄደ» በኃላፊ አሉታዊ «አልሄደም» (አል- + ሄደ + -ም) ይሆናል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'We did not eat' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "እኛ አልበላንም። (We did not eat - Correct 1st person plural negative past)",
            "እኛ አንበላም።",
            "እኛ አልበላሁም።",
            "እኛ አልበላችሁም።"
          ],
          "answerIndex": 0,
          "explanation": "ለ«እኛ» የኃላፊ አሉታዊ ቅርጽ «አልበላንም» (አል- + በላን + -ም) ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የኃላፊ ጊዜ አሉታዊ አረፍተ ነገሮችን በትክክል የያዘው የትኛው ነው?",
          "options": [
            "እኔ አልመጣሁም፣ እሷ አልጻፈችም፣ እኛ አልሰማንም።",
            "እኔ አልመጣም፣ እኛ አልሰማችሁም።",
            "አል- የሚለው ቅጥያ ለወደፊት ጊዜ ብቻ ነው።",
            "በኃላፊ ጊዜ አሉታዊ ቅርጽ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የኃላፊ አሉታዊ ቅርጾችን በትክክለኛ ቅጥያዎች ተጠቅሟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እኔ አልሄድኩም / I did not go' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አልሄድኩም"
          ],
          "explanation": "ትክክለኛው ቃል «አልሄድኩም» (Alhedkum) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u7-l4": {
    "id": "am-u7-l4",
    "subject": "amharic",
    "unit": 7,
    "lessonNumber": 4,
    "title": "ያለፈ የጉዞ እና የህይወት ተሞክሮ መግለጽ (Past Travel & Experiences)",
    "level": "A2",
    "objective": "ያለፉ የጉዞ ታሪኮችን፣ ታሪካዊ ቦታዎችን መጎብኘትንና የግል ተሞክሮዎችን በዝርዝር መግለጽ።",
    "presentation": {
      "explanation": "ያለፈ ተሞክሮ እና የጉዞ ትረካ (Past Travel & Personal Experiences):\n\n፩. የጉዞ እና የጉብኝት ቃላት:\n- «መጎብኘት» (To visit) -> ጎበኘሁ / ጎበኘን\n- «መጓዝ» (To travel) -> ተጓዝኩ / ተጓዝን\n- «ማየት» (To see) -> አየሁ / አየን\n- «ማደር» (To spend the night) -> አደርን\n- «መመለስ» (To return) -> ተመለስን።\n\n፪. ታዋቂ የኢትዮጵያ ታሪካዊ ቦታዎች:\n- «ላሊበላ» (Lalibela rock-hewn churches)\n- «ፋሲል ግቢ» (Fasil Ghebbi / Gondar castles)\n- «አክሱም» (Axum obelisks)\n- «ሐረር ጁጎል» (Harar Jugol wall)።",
      "examples": [
        {
          "target": "እኛ ባለፈው በጋ ወደ ላሊበላ ተጉዘን ውብ የሆኑትን ውቅር አብያተ ክርስቲያናት ጎበኘን።",
          "reading": "Ənnya baläfäw bäga wädä Lalibäla täguzän wəb yähonutən wəqər əbyatä krəstiyanat gobänyän. [ɨɲa balɛˈfɛw bɛˈɡa wɛdɛ laliˈbɛla tɛɡuˈzɛn wɨb jɛhoˈnutɨn wɨˈkʼɨr ɨbjaˈtɛ krɨstijaˈnat ɡobɛˈɲɛn] (un-NYAH bah-leh-FEW beh-GAH weh-DEH lah-lee-beh-LAH teh-goo-ZEN wub yeh-HOH-noo-tun wuh-K'UR ub-YAH-teh kris-tee-YAH-naht goh-ben-YEN)",
          "translation": "Last dry season we traveled to Lalibela and visited the beautiful rock-hewn churches."
        },
        {
          "target": "በጎንደር ከተማ ውስጥ የፋሲልን ግንብ አይተን ብዙ ባህላዊ ትዝታዎችን ይዘን ተመለስን።",
          "reading": "BäGondär kätäma wəst’ yäFasilən gənb aytän bəzu bahəlawi təzzətawoččən yəzän tämälässən. [bɛɡonˈdɛr kɛtɛˈma wɨstʼ jɛfasiˈlɨn ɡɨnb ajˈtɛn bɨˈzu bahɨlaˈwi tɨzːɨtaˈwotʃːɨn jɨˈzɛn tɛmɛlɛsːɨn] (buh-gohn-DER keh-teh-MAH woos-T' yeh-FAH-see-lun gunb eye-TEN buh-ZOO bah-huh-lah-WEE tuz-zuh-tah-wohch-CHUN yuh-ZEN teh-meh-LES-sun)",
          "translation": "In the city of Gondar, we saw Fasil Castle and returned carrying many cultural memories."
        },
        {
          "target": "እኔ በሕይወቴ ውስጥ እጅግ አስደሳችና የማይረሳ ጉዞ አደረግሁ።",
          "reading": "Əne bäḥəywäte wəst’ əğğəg asdässač’ənna yämmayərräsa guzo adäräggu. [ɨˈne bɛhɨjˈwɛte wɨstʼ ɨdʒːɨɡ asdɛsːaˈtʃʼɨnːa jɛmːajɨrːɛˈsa ɡuˈzo adɛrɛɡˈɡu] (uh-NAY beh-huhy-weh-TAY woos-T' uhj-JUG ahs-des-SAHCH-un-nah yem-my-ur-reh-SAH goo-ZOH ah-deh-REG-goo)",
          "translation": "I made an extremely enjoyable and unforgettable journey in my life."
        }
      ],
      "mnemonics": [
        "Travel Narrative: ተጓዝን (we traveled) -> ጎበኘን (we visited) -> አየን (we saw) -> ተመለስን (we returned)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ ታሪካዊ መስመሮች (Historic Northern Route) በዩኔስኮ የተመዘገቡ ጥንታዊ ቅርሶችን የያዙ ዓለም አቀፍ የቱሪዝም መዳረሻዎች ናቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ታሪካዊ ቦታዎችን ጎብኝቶ መመለስን የሚገልጸው ትክክለኛ ቃል የትኛው ነው?",
          "options": [
            "ጎበኘን እና ተመለስን (We visited and returned - Correct past experiential verbs)",
            "እንጎበኛለን",
            "አልሄድንም",
            "መሄድ"
          ],
          "answerIndex": 0,
          "explanation": "«ጎበኘን እና ተመለስን» ያለፈን ጉብኝትና መመለስን በኃላፊ ጊዜ በትክክል ይገልጻል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'I saw the historical castle' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ታሪካዊውን ግንብ አየሁ። (I saw the historical castle - Correct 1st person past)",
            "ታሪካዊውን ግንብ አያለሁ።",
            "ታሪካዊውን ግንብ አየች።",
            "ታሪካዊውን ግንብ አልፈልግም።"
          ],
          "answerIndex": 0,
          "explanation": "ለእኔ (1ኛ መደብ) የኃላፊ ጊዜ ግስ «አየሁ» ይሆናል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ያለፈ የጉዞ ልምድን በተሟላ መንገድ የገለጸው የትኛው ነው?",
          "options": [
            "ባለፈው ወር ወደ አክሱም ተጉዘን ሐውልቶችን ጎበኘን፤ ከዚያም ተመለስን።",
            "ነገ ወደ አክሱም ተጓዝን።",
            "አክሱም ትላንት እሄዳለሁ።",
            "በአማርኛ የጉዞ ታሪክ አይነገርም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ያለፈውን የጉዞ ጊዜ፣ ድርጊትና ማጠቃለያ በትክክል ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ተጓዝን / We traveled' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ተጓዝን"
          ],
          "explanation": "ትክክለኛው ቃል «ተጓዝን» (Täguzän) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u7-l5": {
    "id": "am-u7-l5",
    "subject": "amharic",
    "unit": 7,
    "lessonNumber": 5,
    "title": "የክፍል 7 አጠቃላይ ማጠቃለያ (Unit 7 Grand Synthesis & Past Narrative Discourse)",
    "level": "A2",
    "objective": "ቀላል የኃላፊ ጊዜን፣ የጊዜ አመልካቾችን፣ አሉታዊ ቅርጾችን እና የጉዞ ትረካዎችን ያካተተ የተሟላ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፯ አጠቃላይ ሰዋሰዋዊ ውህደትና ማጠቃለያ:\n\n፩. ቀላል የኃላፊ ጊዜ:\n- ሄድኩ፣ ሄድክ፣ ሄደች፣ ሄድን፣ ሄዱ\n\n፪. የጊዜ አመልካቾች:\n- ትላንትና፣ ከትላንት ወዲያ፣ ባለፈው ሳምንት/ወር/ዓመት፣ ድሮ\n\n፫. አሉታዊ ቅርጽ:\n- አልሄድኩም፣ አልበላችም፣ አልሰማንም፣ አልገዛንም\n\n፬. የጉዞና የተሞክሮ ትረካ:\n- ተጓዝን፣ ጎበኘን፣ አየን፣ ኖርን፣ ተመለስን።",
      "examples": [
        {
          "target": "እኛ ባለፈው ዓመት ወደ ሰሜን ኢትዮጵያ ተጉዘን አስደናቂ ቦታዎችን ጎበኘን፤ ምንም ዓይነት ችግር አልገጠመንም።",
          "reading": "Ənnya baläfäw amät wädä Sämen Ityop’ya täguzän asdännaqi botawoččən gobänyän; mənnəm aynät čəggər algät’t’ämänəm. [ɨɲa balɛˈfɛw aˈmɛt wɛdɛ sɛˈmen itjoˈpʼja tɛɡuˈzɛn asdɛnːaˈkʼi botaˈwotʃːɨn ɡobɛˈɲɛn mɨnːɨm ajˈnɛt tʃɨɡːɨr alɡɛtʼːɛmɛˈnɨm] (un-NYAH bah-leh-FEW ah-MET weh-DEH seh-MAYN eet-yohp'-YAH teh-goo-ZEN ahs-den-nah-K'EE boh-tah-wohch-CHUN goh-ben-YEN; mun-num eye-NET chug-gur ahl-get'-t'eh-meh-NUM)",
          "translation": "Last year we traveled to Northern Ethiopia and visited wonderful places; we did not encounter any kind of problem."
        },
        {
          "target": "ጓደኛዬ ትላንትና ወደ ገበያ ሄዶ ነበር፤ ነገር ግን የሚፈልገውን መጽሐፍ ስላላገኘ አልገዛም።",
          "reading": "Gwadänyaye təlantənna wädä gäbäya hedo näbbär; nägär gən yämmifälləgäwən mäs’haf səlalaggänyä algäzzam. [ɡʷadɛˈɲaje tɨlanˈtɨnːa wɛdɛ ɡɛbɛˈja heˈdo nɛbːɛr nɛˈɡɛr ɡɨn jɛmːifɛlːɨˈɡɛwɨn mɛsˤˈhaf sɨlalagːɛˈɲɛ alɡɛzːam] (gwah-den-YAH-yay tuh-lahn-TUN-nah weh-DEH geh-beh-YAH hay-DOH neb-BER; neh-GER gun yem-mee-fel-luh-gow-UN meh-ts'u-HAF sul-ahl-ahg-gen-YEH ahl-gez-ZAHM)",
          "translation": "My friend had gone to the market yesterday; but because he didn't find the book he wanted, he did not buy it."
        },
        {
          "target": "ያሳለፍናቸው ያለፉ ልምዶችና ትዝታዎች ሁልጊዜ በልባችን ውስጥ ይኖራሉ።",
          "reading": "Yasaläffənaččäw yaläfu ləmədoččənna təzzətawočč hullgize bäləbbaččən wəst’ yənorallu. [jasalɛfːɨˈnatʃːɛw jalɛˈfu lɨmɨˈdotʃːɨnːa tɨzːɨtaˈwotʃː hulːˈɡize bɛlɨbːaˈtʃːɨn wɨstʼ jɨnoˈralːu] (yah-sah-lef-fuh-nahch-CHEW yah-leh-FOO luh-muh-dohch-CHUN-nah tuz-zuh-tah-wohch-CHOO hool-GEE-zay beh-lub-bahch-CHUN woos-T' yuh-noh-RAHL-loo)",
          "translation": "The past experiences and memories that we passed through will always live inside our hearts."
        }
      ],
      "mnemonics": [
        "Past Mastery: Positive (ሄድኩ/ተጓዝን) + Negative (አልሄድኩም/አልገዛንም) + Time (ትላንት/ባለፈው ዓመት) + Experience (ጎበኘን/አየን)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል አረጋውያን ያለፉትን ታሪኮች 'በእኛ ጊዜ...' እያሉ ለወጣቱ ትውልድ ማውጋት ትልቅ የትውፊት ማስተላለፊያ መንገድ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ያለፈን ድርጊት በአዎንታዊና በአሉታዊ ቅርጽ በትክክል ያገናኘው የትኛው ነው?",
          "options": [
            "ትላንት ወደ ከተማ ሄድኩ፣ ነገር ግን ዕቃ አልገዛሁም። (Yesterday I went to town, but did not buy goods - Correct positive and negative past combination)",
            "ነገ ወደ ከተማ ሄድኩ።",
            "ትላንት ዕቃ እገዛለሁ።",
            "በኃላፊ ጊዜ ሁለቱም አረፍተ ነገሮች ስህተት ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ያለፈ ጊዜ አመልካችን፣ አዎንታዊ ኃላፊን («ሄድኩ») እና አሉታዊ ኃላፊን («አልገዛሁም») በትክክል አጣምሯል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "የክፍል 7ን ዋና ዋና ርዕሰ ጉዳዮች ያካተተ የተሟላ ትረካ የትኛው ነው?",
          "options": [
            "ባለፈው ዓመት ብዙ ቦታዎችን ጎበኘን፤ አስደሳች ጊዜ አሳለፍን። (We visited many places last year, spent an enjoyable time - Comprehensive past narrative)",
            "ነገ እንጎበኛለን።",
            "አሁን እየበላን ነው።",
            "ቋንቋ አልፈልግም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የክፍል 7ን የኃላፊ ጊዜና የጉብኝት ትረካ ሙሉ በሙሉ ይገልጻል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 7 አጠቃላይ ይዘት በትክክል የትኛው ነው?",
          "options": [
            "የቀላል ኃላፊ ጊዜ ግስ እርባታ፣ ያለፉ የጊዜ አመልካቾች፣ የኃላፊ ጊዜ አሉታዊ ቅርጽ እና ያለፉ የጉዞ ትረካዎች ተካተዋል።",
            "ይህ ክፍል ስለወደፊት ጊዜ ብቻ ያትታል።",
            "በአማርኛ የኃላፊ ጊዜ የለም።",
            "ሁሉም ቃላት ስለ እንስሳት ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 7ን ሁሉንም ሰዋሰዋዊ ክፍሎች በትክክል ይገልጻል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ልምድ / Experience, habit' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ልምድ"
          ],
          "explanation": "ትክክለኛው ቃል «ልምድ» (Ləməd) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u8-l1": {
    "id": "am-u8-l1",
    "subject": "amharic",
    "unit": 8,
    "lessonNumber": 1,
    "title": "መሰረታዊ አቅጣጫዎች እና የቦታ አመልካቾች (Cardinal Directions & Spatial Terms)",
    "level": "A2",
    "objective": "መሰረታዊ አቅጣጫዎችን (ቀኝ፣ ግራ፣ ፊት ለፊት፣ ጀርባ፣ አጠገብ፣ መሃል፣ ቅርብ፣ ሩቅ) በትክክል መጠቀም።",
    "presentation": {
      "explanation": "መሰረታዊ አቅጣጫዎች እና የቦታ አመልካች ቃላት (Directions & Spatial Terms):\n\n፩. መሰረታዊ አቅጣጫዎች:\n- «ቀኝ»: ወደ ቀኝ\n- «ግራ»: ወደ ግራ\n- «ቀጥታ» / «ፊት ለፊት»\n- «ጀርባ» / «ኋላ»\n- «መሃል»\n- «አጠገብ»።\n\n፪. የርቀት መግለጫዎች:\n- «ቅርብ»\n- «ሩቅ»።\n\n፫. አቅጣጫ ማሳያ ግሶች:\n- መታጠፍ -> ታጠፍ (m) / ታጠፊ (f) / ይታጠፉ (polite)\n- መሄድ -> ሂድ (m) / ሂጂ (f) / ይሂዱ (polite)\n- መሻገር -> ተሻገር (m) / ተሻገሪ (f) / ይሻገሩ (polite)።",
      "examples": [
        {
          "target": "ወደ ቀኝ ታጠፍና ቀጥታ ሂድ፤ ባንኩ ከሆስፒታሉ አጠገብ ይገኛል።",
          "reading": "Wädä qäny tat’äfənna qät’ta hid; banku kähospitalu at’ägäb yəggänyall. [wɛdɛ kʼɛɲ tatʼɛfɨnːa kʼɛtʼːa hid banˈku kɛhospiˈtalu atʼɛˈɡɛb jɨɡːɛˈɲal] (weh-DEH k'en taht'-EH-fun-nah k'et'-TAH heed; bahn-KOO keh-hohs-pee-TAH-loo ah-t'eh-GEB yuhg-gehn-YAHL)",
          "translation": "Turn to the right and go straight; the bank is located next to the hospital."
        },
        {
          "target": "ቤተ-መጻሕፍቱ ከዚህ በጣም ቅርብ ነው፤ መንገዱን ተሻግረህ ታገኘዋለህ።",
          "reading": "Betä-mäs’ahəftu käzzih bät’am qərb näw; mängädun täšagräh tagänyäwalläh. [betɛmɛsˤaˈhɨftu kɛzːih bɛtʼam kʼɨrb nɛw mɛnɡɛˈdun tɛʃaɡˈrɛh taɡɛɲɛˈwalːɛh] (bay-tuh-meh-TS'AH-huf-too kez-ZEEH beh-T'AHM k'urb now; men-geh-DOON teh-shahg-REH tah-gen-yeh-WAHL-leh)",
          "translation": "The library is very near from here; you will find it by crossing the road."
        },
        {
          "target": "ትልቁ የመሰብሰቢያ አዳራሽ በዩኒቨርሲቲው ግቢ መሃል ላይ ይገኛል።",
          "reading": "Təlqu yämässäbsäbiya adaraš bäyunivärsitiw gəbbi mähal lay yəggänyall. [tɨlˈkʼu jɛmɛsːɛbsɛbiˈja adaˈraʃ bɛjunivɛrsiˈtiw ɡɨbːi mɛˈhal laj jɨɡːɛˈɲal] (tul-K'OO yeh-mes-seb-seh-bee-YAH ah-dah-RAHSH beh-yoo-nee-ver-see-TEE-w gub-BEE meh-HAHL lye yuhg-gehn-YAHL)",
          "translation": "The large conference hall is located in the middle of the university campus."
        }
      ],
      "mnemonics": [
        "Compass of Motion: ቀኝ (Right) & ግራ (Left) | ፊት ለፊት (Straight) & ጀርባ (Behind) | ቅርብ (Near) & ሩቅ (Far)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ከተሞች ውስጥ አቅጣጫ ሲጠየቅ አብዛኛውን ጊዜ በህንፃዎችና በሚታወቁ ምልክቶች (Landmarks - ለምሳሌ: ከቤተክርስቲያኑ አጠገብ፣ ከክብ አደባባዩ ፊት ለፊት) ማመልከት የተለመደ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ወደ ቀኝ ለመታጠፍ ለወንድ የሚሰጥ ትክክለኛ የትዕዛዝ አነጋገር የትኛው ነው?",
          "options": [
            "ወደ ቀኝ ታጠፍ (Turn right - Correct masculine imperative direction)",
            "ወደ ግራ ሂድ",
            "ቀጥታ ቁም",
            "ወደ ኋላ ተመለስ"
          ],
          "answerIndex": 0,
          "explanation": "«ወደ ቀኝ ታጠፍ» ለወንድ (ተባዕታይ) ወደ ቀኝ እንዲታጠፍ የሚያዝዝ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'The pharmacy is next to the clinic' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "መድኃኒት ቤቱ ከክሊኒኩ አጠገብ ነው። (The pharmacy is next to the clinic - Correct spatial term አጠገብ)",
            "መድኃኒት ቤቱ በጣም ሩቅ ነው።",
            "ክሊኒኩ የለም።",
            "መድኃኒት ቤት አልሄድም።"
          ],
          "answerIndex": 0,
          "explanation": "«ከ... አጠገብ» (next to / beside) ትክክለኛውን የቦታ አቀማመጥ ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአቅጣጫ ቃላትን እና ተዛማጅ ትርጉሞቻቸውን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ቀኝ (Right)፣ ግራ (Left)፣ ፊት ለፊት (Straight ahead)፣ አጠገብ (Next to)።",
            "ቀኝ ማለት ግራ ማለት ነው።",
            "ቅርብ እና ሩቅ አንድ ናቸው።",
            "በአማርኛ አቅጣጫ አይነገርም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የአቅጣጫ ቃላትን በትክክል ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቀኝ / Right (direction)' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቀኝ"
          ],
          "explanation": "ትክክለኛው ቃል «ቀኝ» (Qäny) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u8-l2": {
    "id": "am-u8-l2",
    "subject": "amharic",
    "unit": 8,
    "lessonNumber": 2,
    "title": "መንገድ እና አቅጣጫ መጠየቅ (Asking for Directions)",
    "level": "A2",
    "objective": "መንገድ መጠየቅን (ይቅርታ ... የት ነው? እንዴት መሄድ እችላለሁ?) እና የተሰጠውን አቅጣጫ መረዳት።",
    "presentation": {
      "explanation": "መንገድ እና አቅጣጫ መጠየቅ (Asking for Directions):\n\n፩. ጨዋነት የተሞላበት የመጠየቂያ አገላለጾች:\n- «ይቅርታ፣ ፖስታ ቤቱ የት ነው?»\n- «ወደ ስታዲየም እንዴት መሄድ እችላለሁ?»\n- «ይህ መንገድ ወዴት ይወስዳል?»\n\n፪. የመልስ እና የመምሪያ አገላለጾች:\n- «ቀጥ ብለህ ሂድና የመጀመሪያውን መታጠፊያ ያዝ»\n- «አደባባዩን ስትደርስ ወደ ግራ ታጠፍ»\n- «ከሁለት መቶ ሜትር በኋላ በስተቀኝ ታገኘዋለህ»።",
      "examples": [
        {
          "target": "ይቅርታ፣ ወደ ብሔራዊ ሙዚየም የሚወስደው መንገድ የትኛው ነው?",
          "reading": "Yəqərta, wädä Bəherawi Muziyäm yämmiwäsdäw mängäd yätnaw näw? [jɨkʼɨrˈta wɛdɛ bɨheˈrawi muziˈjɛm jɛmːiwɛsˈdɛw mɛnˈɡɛd jɛtˈnaw nɛw] (yuh-k'ur-TAH, weh-DEH buh-hay-RAH-wee moo-zee-YEM yem-mee-wes-DEW men-GED yet-NOW now?)",
          "translation": "Excuse me, which is the road that leads to the National Museum?"
        },
        {
          "target": "ቀጥታ ሂዱና አደባባዩን እንደደረሳችሁ በስተግራ በኩል ታገኙታላችሁ።",
          "reading": "Qät’ta hidunna adäbabayun əndädärräsaččəhu bästəgra bäkkul tagänyutalalləhu. [kʼɛtʼːa hiˈdunːa adɛbaˈbaju jɨndɛdɛrːɛˈsatʃːɨhu bɛstɨɡˈra bɛkːul taɡɛɲutaˈlalːɨhu] (k'et'-TAH hee-DOON-nah ah-deb-ah-bah-YOON un-deh-der-reh-sahch-CHOO behs-tuh-GRAH behk-KOOL tah-gen-yoo-tah-LAHL-luh-hoo)",
          "translation": "Go straight, and as soon as you reach the roundabout, you will find it on the left side."
        },
        {
          "target": "እባክዎን፣ ቅርቡ የባንክ መክፈያ ማሽን (ኤቲኤም) የት ይገኛል?",
          "reading": "Əbakwon, qərbu yäbank mäkfäya mašin (ETIEM) yät yəggänyall? [ɨbakˈwon kʼɨrˈbu jɛbaŋk mɛkfɛˈja maˈʃin e-ti-em jɛt jɨɡːɛˈɲal] (uh-bahk-WOHN, k'ur-BOO yeh-bahnk meh-k'feh-YAH mah-SHEEN yet yuhg-gehn-YAHL?)",
          "translation": "Please, where is the nearest bank ATM machine found?"
        }
      ],
      "mnemonics": [
        "Direction Q&A: ይቅርታ ... የት ነው? (Excuse me, where is ...?) -> ቀጥታ ሂድ (Go straight) -> አደባባይ (Roundabout) -> በስተቀኝ/በስተግራ (On right/left)!"
      ],
      "culturalNotes": [
        "አዲስ አበባ ውስጥ 'አደባባይ' (Roundabout - ለምሳሌ: መስቀል አደባባይ፣ ቴዎድሮስ አደባባይ) ዋና የመንገድ መገናኛ እና መነሻ ምልክት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ወደ አንድ ቦታ የሚወስደውን መንገድ በትህትና ለመጠየቅ ምን ይባላል?",
          "options": [
            "ይቅርታ፣ ወደ ... የሚወስደው መንገድ የት ነው? (Excuse me, where is the road leading to ...? - Polite direction inquiry)",
            "መንገድ አልፈልግም",
            "ቶሎ ሂድ",
            "ስምህ ማን ነው?"
          ],
          "answerIndex": 0,
          "explanation": "«ይቅርታ፣ ወደ ... የሚወስደው መንገድ የት ነው?» ትክክለኛ የጨዋነት መንገድ መጠየቂያ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'When you reach the roundabout, turn left' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "አደባባዩን ስትደርስ ወደ ግራ ታጠፍ። (When you reach the roundabout, turn left - Correct condition and direction)",
            "አደባባይ ላይ ቁም።",
            "ወደ ቤት ተመለስ።",
            "አደባባይ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "«አደባባዩን ስትደርስ ወደ ግራ ታጠፍ» አደባባይን እና የግራ አቅጣጫን በትክክል አጣምሯል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የመንገድ መጠየቅና የመመለስን የተሟላ ውይይት የያዘው የትኛው ነው?",
          "options": [
            "ይቅርታ ሙዚየሙ የት ነው? -> ቀጥታ ሂድና አደባባዩ ላይ ወደ ቀኝ ታጠፍ -> አመሰግናለሁ!",
            "ሙዚየም አልሄድም -> ሂሳብ ክፈል",
            "ቀኝ እና ግራ አንድ ናቸው",
            "በአማርኛ አደባባይ አይባልም"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የተሟላና ሥርዓት ያለው የመንገድ መጠየቅ ውይይት ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አደባባይ / Roundabout, square' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አደባባይ"
          ],
          "explanation": "ትክክለኛው ቃል «አደባባይ» (Adäbabay) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u8-l3": {
    "id": "am-u8-l3",
    "subject": "amharic",
    "unit": 8,
    "lessonNumber": 3,
    "title": "የከተማ ውስጥ ትራንስፖርት፡ ታክሲ፣ ባስ እና ባቡር (City Transit: Taxi, Bus & Train)",
    "level": "A2",
    "objective": "የከተማ ውስጥ የትራንስፖርት አይነቶችን (ሰማያዊ ሚኒባስ ታክሲ፣ አንበሳ አውቶቡስ፣ ቀላል ባቡር) እና የጉዞ ቃላትን መጠቀም።",
    "presentation": {
      "explanation": "የከተማ ትራንስፖርት አይነቶች እና የጉዞ ቃላት (City Transit Vocabulary):\n\n፩. የትራንስፖርት አይነቶች:\n- «ታክሲ» / «ሚኒባስ» (Minibus Taxi)\n- «አውቶቡስ» (City Bus)\n- «ቀላል ባቡር» (Addis Ababa Light Rail Train)\n- «ባጃጅ» (Bajaj / Three-wheeler)።\n\n፪. ተሳፋሪ እና ረዳት (ወያላ):\n- «ወያላ» / «ረዳት» (Taxi conductor)\n- «ተሳፋሪ» (Passenger)\n- «ጣቢያ» / «ተርሚናል» (Station / bus stop)።\n\n፫. ቁልፍ የጉዞ አገላለጾች:\n- «ወራጅ አለ!»\n- «መጨረሻ!»።",
      "examples": [
        {
          "target": "ወያላው «መርካቶ! መርካቶ!» እያለ ተሳፋሪዎችን ወደ ሚኒባሱ ይጠራል።",
          "reading": "Wäyalaw «Märkato! Märkato!» əyalä täsaffariwoččən wädä minibasu yət’ərall. [wɛjaˈlaw mɛrkaˈto mɛrkaˈto ɨˈjalɛ tɛsafːariˈwotʃːɨn wɛdɛ miniˈbasu jɨtʼɨˈral] (weh-yah-LOW «mahr-KAH-toh! mahr-KAH-toh!» uh-YAH-leh teh-sahf-fah-ree-wohch-CHUN weh-DEH mee-nee-BAH-soo yuh-t'uh-RAHL)",
          "translation": "The conductor calls passengers to the minibus shouting 'Merkato! Merkato!'."
        },
        {
          "target": "እኛ በአዲሱ ቀላል ባቡር ተሳፍረን ከቃሊቲ ወደ ፒያሳ በፍጥነት ደረስን።",
          "reading": "Ənnya bä'addisu qällal babur täsafrän käQaliti wädä Piyassa bäfət’nät därässən. [ɨɲa bɛʔadːiˈsu kʼɛlːal baˈbur tɛsafˈrɛn kɛkʼaliˈti wɛdɛ piˈjasːa bɛfɨtʼˈnɛt dɛrɛsːɨn] (un-NYAH beh-ahd-DEE-soo k'el-LAHL bah-BOOR teh-sahf-REN keh-k'ah-lee-TEE weh-DEH pee-YAHS-sah beh-fut'-NET deh-RES-sun)",
          "translation": "We rode on the new light rail train and reached from Qality to Piassa quickly."
        },
        {
          "target": "አስተናጋጁን «እባክዎ መብራቱ ጋር ወራጅ አለ!» ብዬ ነገርኩት።",
          "reading": "Astänagağun «Əbakwo mäbratu gar wärač’ allä!» bəyye näggärkut. [astɛnaˈɡadʒun ɨbakˈwo mɛbˈratu ɡar wɛˈratʃʼ alːɛ bɨjːe nɛɡːɛrˈkut] (ahs-teh-nah-gah-JOON «uh-bahk-WOH meh-brah-TOO gahr weh-RAHCH ahl-LEH!» bee-YAY neg-ger-KOOT)",
          "translation": "I told the driver/conductor: 'Please, drop-off at the traffic light!'."
        }
      ],
      "mnemonics": [
        "Addis Commute: ታክሲ (minibus) + ወያላ (conductor) + ባቡር (light rail) + ወራጅ አለ! (stop for me)!"
      ],
      "culturalNotes": [
        "በአዲስ አበባ ሚኒባስ ታክሲ ውስጥ ለመውረድ 'ወራጅ አለ!' (There is someone getting off!) ማለት ዓለም አቀፍ ደረጃ ያለው የከተማዋ ባህላዊ ቃል ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በታክሲ ውስጥ ለመውረድ ሾፌሩን ወይም ረዳቱን ለማስቆም ምን ይባላል?",
          "options": [
            "ወራጅ አለ! (Drop-off passenger here! - Universal taxi drop-off signal)",
            "ሂሳብ ስንት ነው?",
            "ቡና አምጡ",
            "ባቡር መጣ"
          ],
          "answerIndex": 0,
          "explanation": "«ወራጅ አለ!» ተሳፋሪው የሚወርድበት ቦታ መድረሱን የሚያሳውቅበት ቃል ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'We rode the light rail train' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "በቀላል ባቡር ተሳፈርን። (We rode the light rail train - Correct transit verb and noun)",
            "ባቡር አልወድም።",
            "በእግር ብቻ ሄድን።",
            "ታክሲው ተሰበረ።"
          ],
          "answerIndex": 0,
          "explanation": "«በቀላል ባቡር ተሳፈርን» ትክክለኛውን የትራንስፖርት ዘዴና ግስ ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የከተማ የትራንስፖርት አይነቶችንና አገልግሎቶችን በትክክል የያዘው የትኛው ነው?",
          "options": [
            "ሰማያዊ ታክሲ፣ አንበሳ አውቶቡስ፣ ቀላል ባቡር እና ወያላ።",
            "በከተማ ውስጥ ትራንስፖርት የለም።",
            "ባቡር የሚሄደው በሰማይ ላይ ብቻ ነው።",
            "ወራጅ አለ ማለት ሰላምታ ነው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የከተማ ትራንስፖርት አካላትን በትክክል ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ታክሲ / Taxi' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ታክሲ"
          ],
          "explanation": "ትክክለኛው ቃል «ታክሲ» (Taksi) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u8-l4": {
    "id": "am-u8-l4",
    "subject": "amharic",
    "unit": 8,
    "lessonNumber": 4,
    "title": "የጉዞ ርቀት እና የትኬት ዋጋ (Transit Distance, Fares & Commuting)",
    "level": "A2",
    "objective": "የትራንስፖርት ታሪፍ መጠየቅን (ታሪፉ ስንት ነው?)፣ የጉዞ ርቀትንና ሰዓትን መግለጽ።",
    "presentation": {
      "explanation": "የትራንስፖርት ታሪፍ እና የጉዞ ርቀት (Fares & Commute Distance):\n\n፩. የታሪፍ እና የክፍያ ቃላት:\n- «ታሪፍ» / «የጉዞ ዋጋ» (Transit fare)\n- «ታሪፉ ስንት ብር ነው?» (How much is the fare?)\n- «ትኬት»: የባቡር ትኬት / የአውቶቡስ ትኬት\n- «መልስ»: መልስ ስጠኝ (Give me my change)።\n\n፪. የርቀት እና የጊዜ አገላለጾች:\n- «ስንት ኪሎሜትር ነው?»\n- «ስንት ደቂቃ ይወስዳል?»\n- «የትራፊክ መጨናነቅ አለ»።",
      "examples": [
        {
          "target": "ከቦሌ እስከ መክሲኮ ያለው የታክሲ ታሪፍ ስንት ብር ነው?",
          "reading": "KäBole əskä Mɛksiko yalläw yätaksi tarif sənt bər näw? [kɛboˈle ɨskɛ mɛkˈsiko jalːɛw jɛtakˈsi taˈrif sɨnt bɨr nɛw] (keh-boh-LAY us-keh mehk-SEE-koh yahl-LEW yeh-tahk-SEE tah-REEF sunt bur now?)",
          "translation": "How many Birr is the taxi fare from Bole to Mexico Square?"
        },
        {
          "target": "በጠዋቱ የትራፊክ መጨናነቅ ምክንያት ጉዞው አርባ አምስት ደቂቃ ወሰደ።",
          "reading": "Bät’äwatu yätrafik mäč’ənnanäq məkənyat guzow arba amməst däqiqa wässädä. [bɛtʼɛwaˈtu jɛtraˈfik mɛtʃʼɨnːaˈnɛkʼ mɨkɨnˈjat ɡuˈzow arˈba amːɨst dɛkʼiˈkʼa wɛsːɛˈdɛ] (beh-t'eh-wah-TOO yeh-trah-FEEK meh-ch'un-nah-NEK' muh-kun-YAHT goo-ZOH ahr-BAH ahm-MUST deh-k'ee-K'AH wes-seh-DEH)",
          "translation": "Due to morning traffic congestion, the journey took 45 minutes."
        },
        {
          "target": "የባቡር ትኬት ቆራጩ ለእያንዳንዱ ተሳፋሪ ትኬት ሰጥቶ መልስ መለሰ።",
          "reading": "Yäbabur tiket qworac’u lä'əyyandandu täsaffari tiket sät’to mäls mälläsä. [jɛbaˈbur tiˈket kʼʷoˈratʃʼu lɨʔɨjːanˈdandu tɛsafːaˈri tiˈket sɛtʼːo mɛls mɛlːɛˈsɛ] (yeh-bah-BOOR tee-KET k'woh-RAH-ch'oo luh-uhy-yahn-dahn-DOO teh-sahf-fah-REE tee-KET set'-TOH mels mel-leh-SEH)",
          "translation": "The train ticket inspector issued a ticket to each passenger and gave back change."
        }
      ],
      "mnemonics": [
        "Transit Math: ታሪፍ (Fare) + ትኬት (Ticket) + መልስ (Change) + ደቂቃ (Minutes)!"
      ],
      "culturalNotes": [
        "በአዲስ አበባ ታክሲዎች ውስጥ ሳንቲም ወይም የብር ኖት ከተሳፋሪ ወደ ተሳፋሪ እጅ በእጅ እየተቀባበሉ ወደ ወያላው ማድረስ የተለመደ የትብብር ባህል ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "የአንድን የትራንስፖርት ጉዞ ዋጋ ለመጠየቅ ምን ይባላል?",
          "options": [
            "ታሪፉ ስንት ብር ነው? (How much is the fare? - Correct fare question)",
            "ሰዓቱ ስንት ነው?",
            "ስምህ ማን ነው?",
            "ምግብ አለ?"
          ],
          "answerIndex": 0,
          "explanation": "«ታሪፉ ስንት ብር ነው?» የጉዞ ዋጋን ለመጠየቅ የሚያገለግል ትክክለኛ ሐረግ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'The trip took 30 minutes' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ጉዞው ሠላሳ ደቂቃ ወሰደ። (The trip took 30 minutes - Correct transit time duration)",
            "ጉዞው አሥር ብር ነው።",
            "ባቡሩ አልመጣም።",
            "መንገዱ ተዘጋ።"
          ],
          "answerIndex": 0,
          "explanation": "«ጉዞው ሠላሳ ደቂቃ ወሰደ» የፈጀውን የጉዞ ጊዜ በትክክል ይገልጻል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የትራንስፖርት ክፍያንና የጊዜ ቆይታን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ታሪፉን ከፍለን ትኬት ወሰድን፤ ጉዞውም ሃያ ደቂቃ ወሰደ።",
            "ትኬት በላን ታሪፍ ጠጣን።",
            "በአማርኛ ታሪፍ አይከፈልም።",
            "ደቂቃ ማለት የገንዘብ አይነት ነው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ክፍያን፣ ትኬትን እና የጉዞ ቆይታን በትክክል ያዛምዳል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ታሪፍ / Transit fare' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ታሪፍ"
          ],
          "explanation": "ትክክለኛው ቃል «ታሪፍ» (Tarif) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u8-l5": {
    "id": "am-u8-l5",
    "subject": "amharic",
    "unit": 8,
    "lessonNumber": 5,
    "title": "የክፍል 8 አጠቃላይ ማጠቃለያ (Unit 8 Grand Synthesis & Urban Commute Discourse)",
    "level": "A2",
    "objective": "አቅጣጫ መጠየቅን፣ የታክሲና የባቡር ጉዞን፣ ታሪፍ መክፈልንና መዳረሻ መድረስን ያቀናጀ የተሟላ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፰ አጠቃላይ ሰዋሰዋዊ ውህደትና ማጠቃለያ:\n\n፩. አቅጣጫዎች:\n- ቀኝ፣ ግራ፣ ፊት ለፊት፣ ጀርባ፣ አጠገብ፣ ቅርብ፣ ሩቅ\n\n፪. መንገድ መጠየቅ:\n- ይቅርታ ... የየት ነው? ቀጥታ ሂድ፣ አደባባዩ ላይ ታጠፍ\n\n፫. የከተማ ትራንስፖርት:\n- ታክሲ፣ አውቶቡስ፣ ቀላል ባቡር፣ ወያላ፣ ወራጅ አለ!\n\n፬. ታሪፍና ርቀት:\n- ታሪፍ ስንት ነው? ትኬት፣ መልስ፣ ስንት ደቂቃ ይወስዳል?",
      "examples": [
        {
          "target": "እኛ ጠዋት ላይ መንገድ ጠይቀን ወደ ባቡር ጣቢያው ሄድን፤ ትኬት ቆርጠን ወደ መርካቶ ተጓዝን።",
          "reading": "Ənnya t’äwat lay mängäd t’äyyəqän wädä babur t’abiyaw hedən; tiket qworət’än wädä Märkato täguzän. [ɨɲa tʼɛˈwat laj mɛnˈɡɛd tʼɛjːɨˈkʼɛn wɛdɛ baˈbur tʼabiˈjaw heˈdɨn tiˈket kʼʷoˈrɨtʼɛn wɛdɛ mɛrkaˈto tɛɡuˈzɛn] (un-NYAH t'eh-WAHT lye men-GED t'ey-yuh-K'EN weh-DEH bah-BOOR t'ah-bee-YAH-w hay-DUN; tee-KET k'woh-RUT'-en weh-DEH mahr-KAH-toh teh-goo-ZEN)",
          "translation": "In the morning, we asked for directions and went to the train station; we bought tickets and traveled to Merkato."
        },
        {
          "target": "በታክሲው ውስጥ ወያላው ታሪፍ ሲጠይቅ ሃያ ብር ከፍለን «መብራቱ ጋር ወራጅ አለ!» አልን።",
          "reading": "Bätaksiw wəst’ wäyalaw tarif sit’äyyəq haya bər kəflän «Mäbratu gar wärač’ allä!» aln. [bɛtakˈsiw wɨstʼ wɛjaˈlaw taˈrif sitʼɛjːɨkʼ haˈja bɨr kɨfˈlɛn mɛbˈratu ɡar wɛˈratʃʼ alːɛ aln] (beh-tahk-SEE-w woos-T' weh-yah-LOW tah-REEF see-t'ey-YUK' hah-YAH bur kuf-LEN «meh-brah-TOO gahr weh-RAHCH ahl-LEH!» ahl-un)",
          "translation": "Inside the taxi, when the conductor asked for the fare, we paid 20 Birr and said: 'Drop-off at the traffic light!'."
        },
        {
          "target": "ቀላል ባቡሩ እና ሚኒባስ ታክሲዎች የከተማዋን ነዋሪዎች የዕለት ተዕለት ጉዞ ያቀላጥፋሉ።",
          "reading": "Qällal baburu ənna minibass taksiwočč yäkätämawan näwariwočč yä'əlät tä'əlät guzo yaqälat’t’əfallu. [kʼɛlːal baˈburu ɨnːa miniˈbas taksiˈwotʃː jɛkɛtɛmaˈwan nɛwariˈwotʃː jɛʔɨˈlɛt tɛʔɨˈlɛt ɡuˈzo jakʼɛlatʼːɨˈfalːu] (k'el-LAHL bah-BOO-roo un-nah mee-nee-BAHS tahk-see-wohch-CHOO yeh-keh-teh-mah-WAHN neh-wah-ree-wohch-CHOO yeh-uh-LET teh-uh-LET goo-ZOH yah-k'eh-laht'-t'uh-FAHL-loo)",
          "translation": "The light rail train and minibus taxis expedite the daily commute of the city's residents."
        }
      ],
      "mnemonics": [
        "Transit Mastery: Directions (ቀኝ/ግራ) + Inquiry (የት ነው?) + Vehicles (ታክሲ/ባቡር) + Commute (ታሪፍ/ወራጅ አለ)!"
      ],
      "culturalNotes": [
        "በአዲስ አበባ ከተማ ውስጥ አቅጣጫዎችንና ትራንስፖርትን አውቆ መንቀሳቀስ የማህበራዊ ህይወትና የከተማ ኑሮ ዋነኛ ክህሎት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የከተማ ጉዞና የትራንስፖርት ንግግር የሚያሳየው የትኛው ነው?",
          "options": [
            "መንገድ ጠይቀን ታክሲ ተሳፈርን፤ ታሪፉን ከፍለን መብራቱ ጋር ወረድን። (Correct integrated urban commute sequence)",
            "ታክሲ አልወድም ምግብ አምጡ",
            "አቅጣጫ የለም ባቡር የለም",
            "በከተማ ውስጥ መጓዝ አይቻልም"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ አቅጣጫ መጠየቅን፣ ታክሲ መሳፈርን፣ ታሪፍ መክፈልንና መውረድን በትክክል ያጠቃልላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "አቅጣጫን፣ ባቡርንና የጉዞ ጊዜን ያቀናጀው ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ወደ ቀኝ ታጥፈን የባቡር ጣቢያ ደረስን፤ ጉዞውም አስራ አምስት ደቂቃ ፈጀ። (We turned right and reached the train station; the trip took 15 minutes - Comprehensive sentence)",
            "ባቡሩ ትላንትና ነገ ይሄዳል።",
            "ቀኝ ማለት ባቡር ነው።",
            "ታሪፍ አልከፈልንም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ አቅጣጫን፣ የባቡር ጣቢያንና የጉዞ ጊዜን በአንድነት ይዟል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 8 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "መሰረታዊ አቅጣጫዎች፣ መንገድ መጠየቅ፣ የከተማ ትራንስፖርት (ታክሲና ባቡር)፣ እንዲሁም ታሪፍና የጉዞ ርቀት ተካተዋል።",
            "ይህ ክፍል ስለ ምግብ ማብሰል ብቻ ነው።",
            "በአማርኛ የትራንስፖርት ቃላት የሉም።",
            "ሁሉም አቅጣጫዎች አንድ ዓይነት ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 8ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ትራንስፖርት / Transit, transportation' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ትራንስፖርት"
          ],
          "explanation": "ትክክለኛው ቃል «ትራንስፖርት» (Transport) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u9-l1": {
    "id": "am-u9-l1",
    "subject": "amharic",
    "unit": 9,
    "lessonNumber": 1,
    "title": "ዋና ዋና የቤተሰብ አባላት (Core Immediate Family Terms)",
    "level": "A2",
    "objective": "ዋና ዋና የቤተሰብ አባላትን (አባት፣ እናት፣ ወንድም፣ እህት፣ ልጅ፣ ባል፣ ሚስት) እና ቀለል ያሉ የባለቤትነት ቅጥያዎችን መጠቀም።",
    "presentation": {
      "explanation": "የቅርብ ቤተሰብ አባላት መጠሪያዎች (Immediate Family Members):\n\n፩. መሰረታዊ የቤተሰብ መጠሪያዎች:\n- «አባት»: «አባቴ» (My father)\n- «እናት»: «እናቴ» (My mother)\n- «ወንድም»: «ወንድሜ» (My brother)\n- «እህት»: «እህቴ» (My sister)\n- «ልጅ»: «ወንድ ልጅ» / «ሴት ልጅ» -> «ልጄ» (My child)\n- «ባል»: «ባሌ» (My husband)\n- «ሚስት»: «ሚስቴ» (My wife)።\n\n፪. ጥያቄ እና መልስ:\n- «ስንት ወንድሞች እና እህቶች አሉህ/አሉሽ?»\n- «ሁለት ወንድሞች እና አንዲት እህት አሉኝ»።",
      "examples": [
        {
          "target": "አባቴና እናቴ በመምህርነት ሙያ ለረጅም ዓመታት ህዝባቸውን አገልግለዋል።",
          "reading": "Abatennanna ənatte bämämhərənnät muya läräğğəm amätat həzbaččäwən agälgəlwall. [ʔabaˈtenːanːa ʔɨˈnatːe bɛmɛmhɨrɨnːɛt muˈja lɨrɛdʒːɨm amɛˈtat hɨzbaˈtʃːɛwɨn ʔaɡɛlɡɨlˈwal] (ah-BAH-tayn-nahn-nah uh-NAH-tay beh-mem-huh-RUN-net moo-YAH luh-rej-JUM ah-meh-TAHT huz-bahch-CHEW-un ah-gel-guhl-WAHL)",
          "translation": "My father and my mother served their people in the teaching profession for many years."
        },
        {
          "target": "ታላቅ ወንድሜ እና ታናሽ እህቴ በዩኒቨርሲቲ ውስጥ ህክምና እና ምህንድስና ያጠናሉ።",
          "reading": "Talaq wändəmme ənna tanaš əhətte bäyunivärsiti wəst’ həkmənna ənna məhəndəsənna yat’änallu. [taˈlakʼ wɛnˈdɨmːe ɨnːa taˈnaʃ ʔɨˈhɨtːe bɛjunivɛrsiˈti wɨstʼ hɨkˈmɨnːa ɨnːa mɨhɨndɨˈsɨnːa jatʼɛˈnalːu] (tah-LAH-k' wen-DUM-may un-nah tah-NAHSH uh-HUT-tay beh-yoo-nee-ver-see-TEE woos-T' huk-MUN-nah un-nah muh-hun-duh-SUN-nah yah-t'eh-NAHL-loo)",
          "translation": "My older brother and my younger sister study medicine and engineering at the university."
        },
        {
          "target": "እኔ እና ባለቤቴ (ሚስቴ) ቆንጆ ሴት ልጅ እና ጎበዝ ወንድ ልጅ ወልደናል።",
          "reading": "Əne ənna baläbette (mistte) qonğo set ləğ ənna gobäz wänd ləğ wäldänall. [ʔɨˈne ɨnːa balɛˈbetːe misˈtːe kʼonˈdʒo set lɨdʒ ɨnːa ɡoˈbɛz wɛnd lɨdʒ wɛlˈdɛnal] (uh-NAY un-nah bah-leh-BAY-tay [mees-TAY] k'ohn-JOH sayt luhj un-nah goh-BEZ wend luhj wel-DEH-nahl)",
          "translation": "My spouse (wife) and I have had a beautiful daughter and a clever son."
        }
      ],
      "mnemonics": [
        "Nuclear Family: አባት (Father) + እናት (Mother) | ወንድም (Brother) + እህት (Sister) | ልጅ (Child)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል ውስጥ 'ባለቤቴ' (My household owner / partner) የሚለው ቃል ለባልም ሆነ ለሚስት በትህትና የሚሰጥ የትዳር አጋር መጠሪያ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«My mother and my father» የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "እናቴ እና አባቴ (My mother and my father - Correct first-person possessive nouns)",
            "እህቴ እና ወንድሜ",
            "ልጄ እና አጎቴ",
            "አያቴ ብቻ"
          ],
          "answerIndex": 0,
          "explanation": "«እናቴ» (My mother) እና «አባቴ» (My father) ትክክለኛ የመጀመሪያ መደብ ባለቤትነት ቅጥያን (-ኤ) ይዘዋል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'I have an older brother and a younger sister' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "አንድ ታላቅ ወንድም እና አንዲት ታናሽ እህት አሉኝ። (Correct sibling age distinction and gender agreement)",
            "ወንድም የለኝም እህት የለኝም።",
            "አያቴ ትላንትና መጣ።",
            "ልጆቼ ትምህርት ቤት ሄዱ።"
          ],
          "answerIndex": 0,
          "explanation": "«ታላቅ ወንድም» (older brother) እና «ታናሽ እህት» (younger sister) የዕድሜ ደረጃን በትክክል ያሳያሉ።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የቅርብ ቤተሰብ አባላትን መጠሪያዎች በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "አባት፣ እናት፣ ወንድም፣ እህት፣ ልጅ፣ ባል እና ሚስት።",
            "ጠረጴዛ፣ ወንበር እና ደብተር።",
            "ቀኝ፣ ግራ እና አደባባይ።",
            "ትላንትና እና ዛሬ ብቻ።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የቅርብ ቤተሰብ መጠሪያዎችን ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እናት / Mother' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "እናት"
          ],
          "explanation": "ትክክለኛው ቃል «እናት» (Ənat) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u9-l2": {
    "id": "am-u9-l2",
    "subject": "amharic",
    "unit": 9,
    "lessonNumber": 2,
    "title": "የተዘረጋ የቤተሰብ አውታር (Extended Family & Kinship Terms)",
    "level": "A2",
    "objective": "የተዘረጋ ቤተሰብን (አያት፣ አጎት፣ አክስት፣ የአጎት ልጅ፣ ምራት፣ አማች) በትክክል መጠቀም።",
    "presentation": {
      "explanation": "የተዘረጋ ቤተሰብ እና የዝምድና መጠሪያዎች (Extended Family Terms):\n\n፩. የትውልድ ደረጃዎች:\n- «አያት»: የወንድ አያት / የሴት አያት -> «አያቴ»\n- «የልጅ ልጅ» -> «የልጅ ልጆቼ» (My grandchildren)።\n\n፪. አጎቶች እና አክስቶች:\n- «አጎት» (Uncle - የእናት ወይም የአባት ወንድም)\n- «አክስት» (Aunt - የእናት ወይም የአባት እህት)\n- «የአጎት ልጅ» / «የአክስት ልጅ» (Cousin)።\n\n፫. የጋብቻ ዝምድና (In-Laws):\n- «አማች» (In-law: Father/Mother-in-law, Brother-in-law, Son-in-law)\n- «ምራት» (Daughter-in-law)።",
      "examples": [
        {
          "target": "በበዓል ቀን ወደ አያቴ መንደር ሄደን አጎቶቼንና አክስቶቼን በሙሉ ተሰብስበን ጠየቅን።",
          "reading": "Bäbä'al qän wädä ayyatte mändär hedän agottoččenna akəsttoččen bämulu täsäbsəbän t’äyyäqn. [bɛbɛʔal kʼɛn wɛdɛ ʔajːaˈtːe mɛnˈdɛr heˈdɨn ʔaɡotːoˈtʃːenːa ʔakɨstːoˈtʃːen bɛmuˈlu tɛsɛbˈsɨbɛn tʼɛjːɛkʼn] (beh-beh-AHL k'en weh-DEH eye-YAH-tay men-DER hay-DUN ah-goht-TOHCH-chayn-nah ah-kust-TOHCH-chayn beh-MOO-loo teh-seb-suh-BEN t'ey-yuh-K'UN)",
          "translation": "On the holiday, we went to my grandparent's village and visited all my uncles and aunts together."
        },
        {
          "target": "የአጎቴ ልጅ እና እኔ በአንድ ትምህርት ቤት ውስጥ አብረን ተምረን አደግን።",
          "reading": "Yä'agotte ləğ ənna əne bä'and təməhərt bet wəst’ abrän tämərän adägn. [jɛʔaˈɡotːe lɨdʒ ɨnːa ʔɨˈne bɛʔand tɨmɨhɨrt bet wɨstʼ ʔabˈrɛn tɛmɨˈrɛn ʔadɛɡn] (yeh-ah-GOHT-tay luhj un-nah uh-NAY beh-AHND tuh-muh-HURT bayt woos-T' ahb-REN teh-muh-REN ah-DEG-un)",
          "translation": "My uncle's child (cousin) and I grew up studying together in the same school."
        },
        {
          "target": "አያቴ የልጅ ልጆቻቸውን በጉልበታቸው ላይ እያስቀመጡ አስደናቂ ተረቶችን ይነግሩናል።",
          "reading": "Ayyatte yäləğ ləğoččaččäwən bägulbätaččäw lay əyask’ämmät’u asdännaqi tärätoččən yənägrunall. [ʔajːaˈtːe jɛlɨdʒ lɨdʒoˈtʃːatʃːɛwɨn bɛɡulbɛtaˈtʃːɛw laj ʔɨjaskʼɛmːɛˈtʼu ʔasdɛnːaˈkʼi tɛrɛˈtotʃːɨn jɨnɛɡruˈnal] (eye-YAH-tay yeh-luhj luh-johch-CHAHCH-chew-un beh-gool-beh-TAHCH-chew lye uh-yahs-k'em-meh-T'OO ahs-den-NAH-k'ee teh-reh-TOHCH-chun yuh-neg-roo-NAHL)",
          "translation": "My grandparents seat their grandchildren on their knees and tell us fascinating folktales."
        }
      ],
      "mnemonics": [
        "Kinship Web: አያት (Grandparent) -> አጎት/አክስት (Uncle/Aunt) -> የአጎት ልጅ (Cousin) -> አማች/ምራት (In-laws)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ የተዘረጋ ቤተሰብ (Extended family) በጣም የተሳሰረ ሲሆን፣ የአጎትና የአክስት ልጆች እንደ እውነተኛ ወንድምና እህት ይቆጠራሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "የእናትህን ወይም የአባትህን ወንድም ምን ብለህ ትጠራዋለህ?",
          "options": [
            "አጎት (Uncle - Brother of mother or father)",
            "አክስት",
            "አያት",
            "ምራት"
          ],
          "answerIndex": 0,
          "explanation": "የእናት ወይም የአባት ወንድም «አጎት» (Uncle) ይባላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'My grandmother tells folktales to her grandchildren' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "አያቴ ለልጅ ልጆቻቸው ተረት ይነግራሉ። (Correct grandmother and grandchildren sentence)",
            "አጎቴ መኪና ነዳ።",
            "ጓደኛዬ ትምህርት ቤት ሄደ።",
            "ምንም ዘመድ የለኝም።"
          ],
          "answerIndex": 0,
          "explanation": "«አያቴ ለልጅ ልጆቻቸው ተረት ይነግራሉ» አያትንና የልጅ ልጆችን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የተዘረጋ ቤተሰብ መጠሪያዎችን በትክክል ያቀናጀው የትኛው ነው?",
          "options": [
            "አያት (Grandparent)፣ አጎት (Uncle)፣ አክስት (Aunt) እና የአጎት ልጅ (Cousin)።",
            "አያት ማለት ልጅ ማለት ነው።",
            "አጎት እና አክስት አንድ ናቸው።",
            "በአማርኛ የዝምድና መጠሪያ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ቁልፍ የተዘረጋ ቤተሰብ ቃላትን በትክክል ያጣመረ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አያት / Grandparent' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አያት"
          ],
          "explanation": "ትክክለኛው ቃል «አያት» (Ayat) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u9-l3": {
    "id": "am-u9-l3",
    "subject": "amharic",
    "unit": 9,
    "lessonNumber": 3,
    "title": "የባለቤትነት ቅጥያዎች በሁሉም መደቦች (Comprehensive Possessive Suffix Paradigm)",
    "level": "A2",
    "objective": "የባለቤትነት ቅጥያዎችን በሁሉም መደቦች (-ኤ/-ዬ፣ -ህ፣ -ሽ፣ -ዎ፣ -ኡ/-ው፣ -ዋ፣ -አችን፣ -አችሁ፣ -አቸው) በትክክል ማያያዝ።",
    "presentation": {
      "explanation": "የባለቤትነት ቅጥያዎች ሰንጠረዥ (Possessive Suffix Paradigm):\n\nበተናባቢ ለሚያልቁ ቃላት (ለምሳሌ: ቤት):\n- የኔ: ቤት-ኤ\n- ያንተ: ቤት-ህ\n- ያንቺ: ቤት-ሽ\n- የእርስዎ: ቤት-ዎ / ቤት-ዎት\n- የሱ: ቤት-ኡ\n- የሷ: ቤት-ዋ / ቤቷ\n- የኛ: ቤት-አችን\n- የእናንተ: ቤት-አችሁ\n- የነሱ: ቤት-አቸው።\n\nበአናባቢ ለሚያልቁ ቃላት (ለምሳሌ: ውሻ):\n- ውሻ-ዬ፣ ውሻ-ህ፣ ውሻ-ሽ፣ ውሻ-ው፣ ውሻ-ዋ፣ ውሻ-ችን፣ ውሻ-ችሁ፣ ውሻ-ቸው።",
      "examples": [
        {
          "target": "ቤታችን ለከተማው ማእከል ቅርብ ስለሆነ ትራንስፖርት ማግኘት ለእኛ በጣም ቀላል ነው።",
          "reading": "Betaččən läkätämaw ma'əkäl qərb səlähonä transport magnyät lä'ənnya bät’am qällal näw. [beˈtatʃːɨn lɛkɛtɛˈmaw maʔɨˈkɛl kʼɨrb sɨlɛˈhonɛ transˈport maɡˈɲɛt lɨʔɨɲa bɛtʼam kʼɛlːal nɛw] (bay-TAHCH-chun leh-keh-teh-MAH-w mah-uh-KEL k'urb suh-leh-HOH-neh trahns-POHRT mahg-NYET luh-un-NYAH beh-T'AHM k'el-LAHL now)",
          "translation": "Since our house is near to the city center, getting transit is very easy for us."
        },
        {
          "target": "መምህራችሁ በክፍል ውስጥ የሰጣችሁን የቤት ስራ በትጋት አጠናቃችሁ ሰራችሁን?",
          "reading": "Mämhəraččəhu bäkəfəl wəst’ yäsät’t’aččəhun yäbet səra bätəgat at’änaqqaččəhu särraččəhun? [mɛmhɨˈratʃːɨhu bɛkɨfl wɨstʼ jɛsɛtʼːaˈtʃːɨhun jɛbet sɨra bɛtɨˈɡat ʔatʼɛnakʼːaˈtʃːɨhu sɛrːaˈtʃːɨhun] (mem-huh-RAHCH-choo beh-kuf-L woos-T' yeh-set'-t'ahch-CHOO-hun yeh-BAYT suh-RAH beh-tuh-GAHT ah-t'eh-nahk'-k'ahch-CHOO ser-RAHCH-choon?)"
          ,"translation": "Did you diligently finish and do the homework that your teacher gave you in class?"
        },
        {
          "target": "የጓደኛዬ መኪና አዲስ ሲሆን፣ ቤተሰቦቻቸው ግን በከተማ ዳርቻ ይኖራሉ።",
          "reading": "Yägwadänyayye mäkina addis sihon, betäsäboččaččäw gən bäkätäma darəčča yənorallu. [jɛɡʷadɛˈɲajːe mɛkiˈna ʔadːis siˈhon betɛsɛboˈtʃːatʃːɛw ɡɨn bɛkɛtɛma darɨˈtʃːa jɨnoˈralːu] (yeh-gwah-den-YAY-yay meh-kee-NAH ahd-DEES see-HOHN, bay-teh-seb-ohch-CHAHCH-chew gun beh-keh-teh-mah dah-ruhch-CHAH yuh-noh-RAHL-loo)",
          "translation": "While my friend's car is new, their family lives on the outskirts of the city."
        }
      ],
      "mnemonics": [
        "Suffix Rules: Consonants take -ኤ, -ኡ, -አችን | Vowels take -ዬ, -ው, -ችን!"
      ],
      "culturalNotes": [
        "በአማርኛ ስሞችን በባለቤትነት ቅጥያ ማያያዝ እጅግ የተለመደ ሲሆን፣ ተውላጠ ስሞችን (የኔ፣ የኛ) ለብቻ ከመጠቀም ይልቅ ቅጥያዎችን መጠቀም የተዋበ የአነጋገር ዘይቤ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Our school» የሚለውን ትክክለኛ የባለቤትነት ቅጥያ በመጠቀም የገለጸው የትኛው ነው?",
          "options": [
            "ትምህርት ቤታችን (Our school - Correct -አችን first-person plural suffix)",
            "ትምህርት ቤቴ",
            "ትምህርት ቤታችሁ",
            "ትምህርት ቤታቸው"
          ],
          "answerIndex": 0,
          "explanation": "«ትምህርት ቤታችን» የኛ (our) የሚለውን የብዙ ቁጥር ቅጥያ (-አችን) በትክክል ይዟል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Your (plural) books are on the table' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "መጽሐፎቻችሁ በጠረጴዛው ላይ ናቸው። (Your [pl] books are on the table - Correct -አችሁ suffix)",
            "መጽሐፌ የለም።",
            "መጽሐፋቸው ተቃጠለ።",
            "መጽሐፍ አልገዛሁም።"
          ],
          "answerIndex": 0,
          "explanation": "«መጽሐፎቻችሁ» (Your books) የሁለተኛ መደብ ብዙ ቅጥያን (-አችሁ) በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የባለቤትነት ቅጥያዎችን አጠቃቀም በትክክል ያሳየው የትኛው ነው?",
          "options": [
            "ቤቴ (My house)፣ ቤትህ (Your house)፣ ቤታችን (Our house)፣ ቤታቸው (Their house)።",
            "ቤቴ ማለት የእናንተ ቤት ነው።",
            "ቅጥያዎች ለስሞች አይጨመሩም።",
            "በአማርኛ የባለቤትነት ቅጥያ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የባለቤትነት ቅጥያዎችን በትክክል ያቀርባል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቤታችን / Our house' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቤታችን"
          ],
          "explanation": "ትክክለኛው ቃል «ቤታችን» (Betaččən) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u9-l4": {
    "id": "am-u9-l4",
    "subject": "amharic",
    "unit": 9,
    "lessonNumber": 4,
    "title": "የቤተሰብ ባህል እና ማህበራዊ አኗኗር (Family Culture, Elder Respect & Gatherings)",
    "level": "A2",
    "objective": "የቤተሰብ ስብሰባዎችን፣ ለታላላቆች ክብር መስጠትን፣ እና ማህበራዊ የዝምድና አገላለጾችን መግለጽ።",
    "presentation": {
      "explanation": "የኢትዮጵያ የቤተሰብ ባህል እና ማህበራዊ እሴቶች (Family Values & Cultural Practices):\n\n፩. ለታላላቆች አክብሮት መስጠት:\n- «ታላላቆችን ማክበር»\n- «ምርቃት»: አባቶች እና እናቶች ሲመርቁ «እደጉ፣ ተባረኩ!» ይላሉ።\n- «እጅ መንሳት» / «ሰላምታ»።\n\n፪. የቤተሰብ ስብሰባ እና በዓላት:\n- «የቤተሰብ ስብሰባ»\n- «ሰርግ»\n- «እድር» / «እቁብ»።",
      "examples": [
        {
          "target": "ልጆች ታላላቆቻቸውን ሲያገኙ በትህትና እጅ ነስተው የአባቶችንና የእናቶችን ምርቃት ይቀበላሉ።",
          "reading": "Ləğočč talalaqwoččaččäwən siyagänyu bätəhətna əğž nästäw yä'abatoččənna yä'ənatoččən mərraqat yəqqäbbälallu. [lɨˈdʒotʃː talalakʼʷoˈtʃːatʃːɛwɨn sijaɡɛɲu bɛtɨhɨtˈna ɨdʒ nɛsˈtɛw jɛʔabatoˈtʃːɨnːa jɛʔɨnatoˈtʃːɨn mɨrːaˈkʼat jɨkʼːɛbːɛˈlalːu] (luh-JOHCH tah-lah-lah-k'wohch-CHAHCH-chew-un see-yah-gen-YOO beh-tuh-hut-NAH uhj nes-TEW yeh-ah-bah-tohch-CHUN-nah yeh-uh-nah-tohch-CHUN mur-rah-K'AHT yuhk-k'eb-beh-LAHL-loo)",
          "translation": "When children meet their elders, they greet respectfully and receive the blessings of fathers and mothers."
        },
        {
          "target": "በሰርግ እና በበዓል ወቅት መላው የተዘረጋ ቤተሰብ በአንድነት ተሰብስቦ በደስታ ያከብራል።",
          "reading": "Bäsärg ənna bäbä'al wäqt məllaw yätäzärägga betäsäb bä'andənnät täsäbsəbo bädästa yakäbrall. [bɛsɛrɡ ɨnːa bɛbɛʔal wɛkʼt mɨlːaw jɛtɛzɛrɛɡːa betɛsɛb bɛʔanˈdɨnːɛt tɛsɛbˈsɨbo bɛdɛsˈta jakɛbˈral] (beh-SERG un-nah beh-beh-AHL wehk'-T' mul-LOW yeh-teh-zeh-reg-GAH bay-teh-seb beh-ahn-DUN-net teh-seb-suh-BOH beh-des-TAH yah-keb-RAHL)",
          "translation": "During weddings and holidays, the whole extended family gathers together and celebrates with joy."
        },
        {
          "target": "የቤተሰብ ፍቅር እና ትብብር ለማህበረሰባችን ጥንካሬ እና ሰላም መሰረት ነው።",
          "reading": "Yäbetäsäb fəqr ənna təbbəbər lämahəbäräsäbaččən t’ənkarre ənna sälam mäsärät näw. [jɛbetɛˈsɛb fɨkʼr ɨnːa tɨbːɨˈbɨr lɨmahɨbɛrɛsɛˈbatʃːɨn tʼɨnkaˈrːe ɨnːa sɛˈlam mɛsɛˈrɛt nɛw] (yeh-bay-teh-SEB fuk'-R un-nah tub-buh-BUR luh-mah-huh-beh-reh-seh-BAHCH-chun t'un-kahr-RAY un-nah seh-LAHM meh-seh-RET now)",
          "translation": "Family love and cooperation are the foundation for the strength and peace of our community."
        }
      ],
      "mnemonics": [
        "Ethiopian Heritage: አክብሮት (Respect) + ምርቃት (Blessing) + ሰርግ (Wedding) + ትብብር (Cooperation)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል ውስጥ አረጋውያን እና ታላላቆች የሚሰጡት 'ምርቃት' (Blessing) እጅግ ከፍተኛ መንፈሳዊና ማህበራዊ ክብር አለው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ታላላቆችን ሲያከብሩ እና ሲመርቁ የሚነገር ቁልፍ ቃል የትኛው ነው?",
          "options": [
            "ምርቃት (Elder blessing - Core cultural value of elder respect)",
            "ጠብ",
            "ቁጣ",
            "ስድብ"
          ],
          "answerIndex": 0,
          "explanation": "«ምርቃት» የታላላቆች በጎ ምኞትና ጸሎት መግለጫ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Family love and cooperation are strong' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "የቤተሰብ ፍቅር እና ትብብር ጠንካራ ነው። (Family love and solidarity are strong - Accurate cultural expression)",
            "ቤተሰብ የለንም።",
            "በዓል አንወድም።",
            "ሰርግ አይከበርም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ዓረፍተ ነገር የቤተሰብ ፍቅርንና ትብብርን በትክክል ይገልጻል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የኢትዮጵያን የቤተሰብ ባህልና እሴቶችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "ታላላቆችን ማክበር፣ ምርቃት መቀበል፣ በበዓላት በአንድነት መሰብሰብ እና መተሳሰብ።",
            "ቤተሰብ አብሮ አይበላም አይጠጣም።",
            "ለታላላቆች ሰላምታ አይሰጥም።",
            "በአማርኛ ሰርግ አይከበርም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የማህበራዊና የቤተሰብ ባህል እሴቶችን ያሳያል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ምርቃት / Blessing (from elders)' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ምርቃት"
          ],
          "explanation": "ትክክለኛው ቃል «ምርቃት» (Mərraqat) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u9-l5": {
    "id": "am-u9-l5",
    "subject": "amharic",
    "unit": 9,
    "lessonNumber": 5,
    "title": "የክፍል 9 አጠቃላይ ማጠቃለያ (Unit 9 Grand Synthesis & Extended Family Discourse)",
    "level": "A2",
    "objective": "የቅርብና የተዘረጋ ቤተሰብን፣ የባለቤትነት ቅጥያዎችን እና የባህል እሴቶችን ያቀናጀ የተሟላ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፱ አጠቃላይ ሰዋሰዋዊ ውህደትና ማጠቃለያ:\n\n፩. የቅርብ ቤተሰብ: አባት፣ እናት፣ ወንድም፣ እህት፣ ልጅ፣ ባለቤት\n\n፪. የተዘረጋ ቤተሰብ: አያት፣ አጎት፣ አክስት፣ የአጎት ልጅ፣ አማች\n\n፫. የባለቤትነት ቅጥያዎች: -ኤ/-ዬ፣ -ህ፣ -ሽ፣ -ኡ/-ው፣ -ዋ፣ -አችን፣ -አችሁ፣ -አቸው\n\n፬. ባህላዊ እሴቶች: አክብሮት፣ ምርቃት፣ የቤተሰብ ስብሰባ፣ ሰርግ",
      "examples": [
        {
          "target": "በዓመታዊው የቤተሰብ ስብሰባ ላይ አያቶቻችን፣ አጎቶቻችንና የአጎት ልጆቻችን በሙሉ በደስታ ተገናኙ።",
          "reading": "Bä'amätawiw yäbetäsäb səbsäba lay ayyatoččaččən, agottoččaččənna yä'agott ləğoččaččən bämulu bädästa tägänanyu. [bɛʔamɛtaˈwiw jɛbetɛˈsɛb sɨbˈsɛba laj ʔajːatoˈtʃːatʃːɨn ʔaɡotːoˈtʃːatʃːɨnːa jɛʔaˈɡot lɨdʒoˈtʃːatʃːɨn bɛmuˈlu bɛdɛsˈta tɛɡɛˈnaɲu] (beh-ah-meh-tah-WEE-w yeh-bay-teh-SEB sub-seh-BAH lye eye-yah-tohch-CHAHCH-chun, ah-goht-tohch-CHAHCH-chun-nah yeh-ah-GOHT luh-johch-CHAHCH-chun beh-MOO-loo beh-des-TAH teh-geh-NAHN-yoo)",
          "translation": "At the annual family gathering, our grandparents, our uncles, and our cousins all happily reunited."
        },
        {
          "target": "እኛ የታላላቆቻችንን ምክር ሰምተን ምርቃታቸውን ተቀብለን በሰላም ወደ ቤታችን ተመለስን።",
          "reading": "Ənnya yätalalaqwoččaččənən məkər sämətän mərraqataččäwən täqäbbəlän bäsälam wädä betaččən tämälläsn. [ʔɨɲa jɛtalalakʼʷoˈtʃːatʃːɨnɨn mɨˈkɨr sɛmɨˈtɛn mɨrːakʼaˈtatʃːɛwɨn tɛkʼɛbːɨˈlɛn bɛsɛˈlam wɛdɛ beˈtatʃːɨn tɛmɛlːɛsn] (un-NYAH yeh-tah-lah-lah-k'wohch-CHAHCH-chun-un muh-KUR seh-muh-TEN mur-rah-k'ah-TAHCH-chew-un teh-k'eb-buh-LEN beh-seh-LAHM weh-DEH bay-TAHCH-chun teh-mel-LES-un)",
          "translation": "We listened to our elders' advice, received their blessing, and returned peacefully to our home."
        },
        {
          "target": "ትክክለኛ የባለቤትነት ቅጥያዎችን መጠቀም የቤተሰብ ግንኙነትን በግልጽ ለመግለጽ ያስችላል።",
          "reading": "Təkəkkəlänya yäbaläbetənnät qət’t’əyawoččən mät’t’äqäm yäbetäsäb gənənyunnätən bäğəlts lämägläts yasčəlall. [tɨkɨkːɨˈlɛɲa jɛbalɛbetɨnːɛt kʼɨtʼːɨjaˈwotʃːɨn mɛtʼːɛˈkʼɛm jɛbetɛˈsɛb ɡɨnɨɲunːɛˈtɨn bɛɡɨlts lɨmɛɡˈlɛts jasˈtʃɨlal] (tuh-kuhk-kuh-LEN-yah yeh-bah-leh-bay-tun-NET k'ut'-t'uh-yah-wohch-CHUN met'-t'eh-K'EM yeh-bay-teh-SEB gun-un-yoon-NET-un beh-GULTS luh-meg-LETS yahs-chuh-LAHL)",
          "translation": "Using accurate possessive suffixes makes it possible to express family relationships clearly."
        }
      ],
      "mnemonics": [
        "Grand Synthesis: Nuclear + Extended + Suffixes (-ኤ/-አችን/-አቸው) + Blessings (ምርቃት)!"
      ],
      "culturalNotes": [
        "የቤተሰብ ታሪክንና የዘር ሐረግን ጠንቅቆ ማወቅ በኢትዮጵያ ማህበረሰብ ዘንድ የማንነትና የክብር መገለጫ ተደርጎ ይወሰዳል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የቤተሰብ፣ የዝምድና እና የባለቤትነት ቅጥያዎችን ያጣመረው የትኛው ነው?",
          "options": [
            "አያቶቻችን፣ ወላጆቻችን እና ልጆቻችን በቤታችን ተሰብስበው በዓሉን አከበሩ። (Integrated family and possessive syntax)",
            "መኪና ብቻ ነዳን።",
            "አቅጣጫው ወደ ቀኝ ነው።",
            "ምንም ቤተሰብ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ አያቶችን፣ ወላጆችን፣ ልጆችንና የባለቤትነት ቅጥያዎችን በአንድነት አቀናጅቷል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "የተዘረጋ ቤተሰብንና ምርቃትን በአንድ ላይ የያዘው ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "አጎቶቻችንና አክስቶቻችን መጥተው ምርቃት ሰጡን። (Our uncles and aunts came and gave us blessings - Comprehensive sentence)",
            "አጎቴ መጽሐፍ አልገዛም።",
            "ትላንትና ዝናብ ዘነበ።",
            "ታሪፉ ሃያ ብር ነው።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የተዘረጋ ቤተሰብን (አጎቶች፣ አክስቶች) እና ምርቃትን ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 9 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የቅርብና የተዘረጋ ቤተሰብ አባላት፣ የባለቤትነት ቅጥያዎች (በሁሉም መደቦች)፣ እንዲሁም የቤተሰብ ባህልና ምርቃት ተካተዋል።",
            "ይህ ክፍል ስለ ትራንስፖርት ብቻ ነው።",
            "በአማርኛ የቤተሰብ መጠሪያዎች አይለዩም።",
            "ምንም ሰዋሰዋዊ ህግ አልተማርንም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 9ን የተሟላ ይዘት ያጠቃልላል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቤተሰብ / Family' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቤተሰብ"
          ],
          "explanation": "ትክክለኛው ቃል «ቤተሰብ» (Betäsäb) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u10-l1": {
    "id": "am-u10-l1",
    "subject": "amharic",
    "unit": 10,
    "lessonNumber": 1,
    "title": "የሰውነት ክፍሎች መጠሪያዎች (Human Body Parts)",
    "level": "A2",
    "objective": "ዋና ዋና የሰውነት ክፍሎችን (ራስ፣ ዓይን፣ ጆሮ፣ አፍንጫ፣ አፍ፣ ጥርስ፣ እጅ፣ እግር፣ ሆድ፣ ልብ፣ ደረት) በትክክል መለየትና መጠቀም።",
    "presentation": {
      "explanation": "የሰውነት ክፍሎች መጠሪያዎች እና ተግባራዊ አጠቃቀማቸው:\n\n፩. የራስና የፊት ክፍሎች:\n- ራስ ወይም ጭንቅላት: የማሰብ እና የማስተዋል ማዕከል ነው።\n- ዓይን እና ዓይኖች: ለማየት የሚያገለግሉ ህዋሳት ናቸው።\n- ጆሮ እና ጆሮዎች: ድምፅ ለመስማት ያገለግላሉ።\n- አፍንጫ: ለማሽተት እና አየር ለመተንፈስ ይጠቅማል።\n- አፍ እና ጥርሶች: ምግብ ለማኘክና ቃላትን ለመናገር ያገለግላሉ።\n- አንገት: ራስንና ደረትን የሚያገናኝ ክፍል ነው።\n\n፪. የሰውነት ግንድና እግሮች:\n- እጅ እና እጆች: ዕቃዎችን ለመያዝና ሥራ ለመስራት ያገለግላሉ።\n- እግር እና እግሮች: ለመራመድ፣ ለመሮጥ እና ለመቆም ይጠቅማሉ።\n- ሆድ እና ደረት: የውስጥ አካላት የሚገኙባቸው ዋና ክፍሎች ናቸው።\n- ጀርባ እና ልብ: የሰውነት ጥንካሬ እና የደም ዝውውር መሠረቶች ናቸው።\n\n፫. የሰዋሰው ቅጥያዎች:\nእነዚህን ስሞች ከባለቤትነት ቅጥያዎች ጋር በማጣመር «ራሴ»፣ «ዓይኔ»፣ «እጄ»፣ «እግሬ» እያልን በውይይት ውስጥ እንጠቀማለን።",
      "examples": [
        {
          "target": "የሰው ልጅ ጤናማ እንዲሆን ዓይኑን፣ ጥርሱንና መላ ሰውነቱን በንጽህና መጠበቅ አለበት።",
          "reading": "Yäsäw ləğ t’enamma əndihon aynun, t’ərsunənna mällaw säwnätun bänəs’hənna mät’äbbäq alläbbät. [jɛsɛw lɨdʒ tʼenaˈma ʔɨndiˈhon ʔajˈnun tʼɨrˈsunɨnːa mɨlːaw sɔwnɛˈtun bɛnɨsˤhɨnːa mɛtʼɛbːɛkʼ ʔalːɛbːɛt] (yeh-SEW luhj t'ay-nah-MAH un-dee-HOHN eye-NOON, t'ur-SOO-nun-nah mul-LOW sew-neh-TOON beh-nus'-huhn-NAH met'-teb-BEK' ahl-leb-BET)",
          "translation": "For a human being to be healthy, he must keep his eyes, teeth, and entire body clean."
        },
        {
          "target": "እግር ኳስ ሲጫወት በድንገት ወድቆ የቀኝ እግሩን እና እጁን ተጎዳ።",
          "reading": "Əgər kwas sič’awwät bädəngät wädqo yäqäny əgrun ənna əğun tägwädda. [ʔɨɡr kʷas sitʃʼawːɛt bɛdɨnˈɡɛt wɛdˈkʼo jɛkʼɛɲ ʔɨɡˈrun ɨnːa ʔɨˈdʒun tɛɡʷɛdːa] (uh-GUR kwas see-ch'ow-WET beh-dun-GET wed-K'OH yeh-k'en ug-ROON un-nah uh-JOON teh-gwed-DAH)",
          "translation": "While playing football, he suddenly fell down and injured his right leg and hand."
        },
        {
          "target": "ሐኪሙ የልብ ምትና የደረት አተነፋፈስን በመመርመሪያ መሳሪያ በጥንቃቄ አደመጠ።",
          "reading": "Hakimu yäləbb mətənna yädärät atänäfafäsən bämämärmäriya mäsariya bät’ənqaqqe adämmät’ä. [haˈkimu jɛlɨbː mɨtɨnːa jɛdɛˈrɛt ʔatɛnɛfaˈfɛsɨn bɛmɛmɛrmɛriˈja mɛsaˈrija bɛtʼɨnkʼakʼːe ʔadɛmːɛtʼɛ] (hah-KEE-moo yeh-lub-B muh-TOON-nah yeh-deh-RET ah-teh-neh-fah-FES-un beh-meh-mer-meh-ree-YAH meh-sah-ree-YAH beh-t'un-k'ahk'-K'AY ah-dem-meh-T'EH)",
          "translation": "The doctor carefully listened to the heartbeat and chest respiration with an examination device (stethoscope)."
        }
      ],
      "mnemonics": [
        "Top-to-Bottom Body: ራስ (Head) -> ዓይን (Eyes) -> ደረት/ልብ (Chest/Heart) -> ሆድ (Stomach) -> እጅ/እግር (Hands/Legs)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል ውስጥ 'ልቤ ደስ አለኝ' (My heart is joyful) ወይም 'ሆዴ ባባ' (My stomach felt emotional tenderness) እንደሚሉት የሰውነት ክፍሎች ለስሜት መግለጫነትም ያገለግላሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Hand and foot» የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "እጅ እና እግር (Hand and foot - Correct basic limb nouns)",
            "ራስ እና ሆድ",
            "ዓይን እና ጆሮ",
            "አፍ እና ጥርስ"
          ],
          "answerIndex": 0,
          "explanation": "«እጅ» (hand/arm) እና «እግር» (foot/leg) ናቸው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Keep your teeth clean' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ጥርስህን በንጽህና ጠብቅ። (Keep your teeth in cleanliness - Accurate dental care sentence)",
            "ሆድህ ይረብሻል።",
            "ዓይንህ ታሟል።",
            "እግርህ ተሰብሯል።"
          ],
          "answerIndex": 0,
          "explanation": "«ጥርስህን በንጽህና ጠብቅ» ጥርስንና ንጽህናን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የሰውነት ክፍሎችን መጠሪያዎች በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ራስ፣ ዓይን፣ ጆሮ፣ አፍንጫ፣ ጥርስ፣ እጅ፣ እግር እና ሆድ።",
            "ቀኝ፣ ግራ እና አደባባይ።",
            "ጠረጴዛ፣ ደብተር እና እርሳስ።",
            "በአማርኛ የሰውነት ስሞች የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የሰውነት ክፍሎችን ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ራስ / Head' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ራስ"
          ],
          "explanation": "ትክክለኛው ቃል «ራስ» (Ras) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u10-l2": {
    "id": "am-u10-l2",
    "subject": "amharic",
    "unit": 10,
    "lessonNumber": 2,
    "title": "የህመም ስሜትን መግለጽ (Expressing Sickness, Symptoms & Aches)",
    "level": "A2",
    "objective": "የህመም ስሜትን («አመመኝ» / «ያመኛል»)፣ ምልክቶችን (ትኩሳት፣ ሳል፣ ጉንፋን፣ ራስ ምታት) መግለጽ።",
    "presentation": {
      "explanation": "የህመም ስሜትን የመግለጫ ሰዋሰዋዊ ስርዓት እና አገባብ:\n\n፩. የ«አመመ» ግስ አጠቃቀም:\nበአማርኛ ቋንቋ የህመም ስሜት በተሳቢ ተውላጠ ስም ቅጥያዎች ይገለጻል:\n- ራሴን አመመኝ: ለእኔ የራስ ህመም ሲሰማኝ\n- ሆድህን አመመህ: ለአንድ ወንድ የሆድ ህመም ሲሰማው\n- ሆድሽን አመመሽ: ለአንዲት ሴት የሆድ ህመም ሲሰማት\n- ሆዱን አመመው: ለሦስተኛ መደብ ተባዕታይ\n- ሆዷን አመማት: ለሦስተኛ መደብ አንስታይ\n- ሆዳችንን አመመን: ለእኛ በጋራ\n- ሆዳችሁን አመማችሁ: ለእናንተ በሙሉ\n- ሆዳቸውን አመማቸው: ለእነሱ በሙሉ የሚነገር ነው።\n\n፪. ዋና ዋና የህመም ምልክቶች:\n- ትኩሳት: የሰውነት ሙቀት ከመጠን በላይ መጨመር\n- ሳል እና አስም: የመተንፈሻ አካላት መቆጣት\n- ጉንፋን እና ብርድ: በወቅት ለውጥ የሚመጣ ህመም\n- ራስ ምታት እና የሆድ ቁርጠት።\n\n፫. የጊዜ አመልካቾች:\n«ከሁለት ቀን ጀምሮ ያመኛል»፣ «ትላንት ማታ አመመኝ» በማለት ጊዜን በግልጽ እንገልጻለን።",
      "examples": [
        {
          "target": "ከባድ ጉንፋን ስለያዘኝ ብርዱ፣ ሳሉና ከፍተኛ ትኩሳቱ በጣም አዳከመኝ።",
          "reading": "Käbbad gunfan səlähəyazäny bərdu, salunna käffətänya təkusatu bät’am adakkämäny. [kɛbːad ɡunˈfan sɨlɛjazoɲ bɨrˈdu saˈlunːa kɛfːɨˈtɛɲa tɨkuˈsatu bɛtʼam ʔadakːɛˈmɛɲ] (keb-BAHD goon-FAHN suh-leh-yah-ZENY bur-DOO, sah-LOON-nah kef-fuh-TEN-yah tuh-koo-SAH-too beh-T'AHM ah-dahk-keh-MENY)",
          "translation": "Because a severe flu caught me, the chills, the coughing, and the high fever weakened me very much."
        },
        {
          "target": "ልጁ «ሆዴን በጣም አመመኝ» እያለ ስለ አለቀሰ እናቱ በፍጥነት ወደ ክሊኒክ ወሰደችው።",
          "reading": "Ləğu «Hoden bät’am amämmäny» əyalä səlä aläqqäsä ənatu bäfət’nät wädä klinik wässädäččəw. [lɨˈdʒu hoˈden bɛtʼam ʔamɛmːɛɲ ʔɨˈjalɛ sɨlɛ ʔalɛkʼːɛsɛ ʔɨˈnatu bɛfɨtʼˈnɛt wɛdɛ kliˈnik wɛsːɛˈdɛtʃːɨw] (luh-JOO «hoh-DAYN beh-T'AHM ah-mem-MENY» uh-YAH-leh suh-LEH ah-lek'-k'eh-SEH uh-NAH-too beh-fut'-NET weh-DEH klee-NEEK wes-seh-DEHCH-chew)",
          "translation": "Because the boy cried saying 'My stomach hurts me very much', his mother quickly took him to the clinic."
        },
        {
          "target": "ትላንትና ማታ ራሷን አሟት ስለነበር ዛሬ ወደ ሥራ ሳትሄድ ቤት ውስጥ አረፈች።",
          "reading": "Təlantəna mata raswan amwat səlänäbbär zare wädä səra sathed bet wəst’ arräfäčč. [tɨlantɨˈna maˈta rasˈwan ʔamˈwat sɨlɛnɛbːɛr zaˈre wɛdɛ sɨra satˈhed bet wɨstʼ ʔarːɛˈfɛtʃː] (tuh-lahn-tuh-NAH mah-TAH rahs-WAHN ahm-WAHT suh-leh-neb-BER zah-RAY weh-DEH suh-RAH saht-HAYD bayt woos-T' ahr-reh-FEHCH)",
          "translation": "Because she had a headache yesterday evening, she rested at home today without going to work."
        }
      ],
      "mnemonics": [
        "Symptom Trio: ትኩሳት (Fever) + ሳል (Cough) + ጉንፋን (Flu) | Object + አመመኝ (It hurt me)!"
      ],
      "culturalNotes": [
        "በአማርኛ የህመም ስሜትን ለመግለጽ ሰውየው ተሳቢ (Object Suffix - አመመኝ/አመመህ) ሆኖ ግሱ በረቂቅ ባለቤት መገለጹ የቋንቋው ልዩ ሰዋሰዋዊ ባህሪ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«I have a headache» የሚለውን በአማርኛ ትክክለኛ የግስ አገባብ የገለጸው የትኛው ነው?",
          "options": [
            "ራሴን አመመኝ። (My head hurts me - Correct impersonal illness verb construction)",
            "ራሴን በላሁ",
            "ጭንቅላት የለኝም",
            "ደስ አለኝ"
          ],
          "answerIndex": 0,
          "explanation": "«ራሴን አመመኝ» የራስ ህመምን በትክክለኛው ሰዋሰዋዊ ቅርጽ ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'She has a high fever and cough' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ከፍተኛ ትኩሳት እና ሳል አላት። (She has high fever and cough - Correct symptoms)",
            "ትኩሳት የለም።",
            "ውሃ ጠጣች።",
            "ትምህርት ቤት ሄደች።"
          ],
          "answerIndex": 0,
          "explanation": "«ከፍተኛ ትኩሳት እና ሳል አላት» ትኩሳትንና ሳልን በትክክል ይገልጻል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የህመም ስሜቶችን እና ምልክቶችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ትኩሳት፣ ሳል፣ ጉንፋን፣ የሆድ ቁርጠት እና ራስ ምታት።",
            "ምግብ ማብሰል እና ቡና ማፍላት።",
            "ታክሲ መሳፈር እና ትኬት መቁረጥ።",
            "በአማርኛ የህመም ቃላት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የህመም ምልክቶችን በትክክል ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ትኩሳት / Fever' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ትኩሳት"
          ],
          "explanation": "ትክክለኛው ቃል «ትኩሳት» (Təkusat) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u10-l3": {
    "id": "am-u10-l3",
    "subject": "amharic",
    "unit": 10,
    "lessonNumber": 3,
    "title": "በክሊኒክ እና በሆስፒታል የሚደረግ ውይይት (Clinical Consultation & Diagnosis)",
    "level": "A2",
    "objective": "በክሊኒክ ውስጥ ከሐኪም ጋር መወያየት፣ ምርመራ ማድረግን እና ምልክቶችን ማስረዳት።",
    "presentation": {
      "explanation": "በክሊኒክ እና በሆስፒታል ውስጥ የሚደረግ ተግባቦታዊ ንግግር:\n\n፩. የህክምና ባለሙያዎችና ተቋማት:\n- ሐኪም ወይም ዶክተር: ታካሚን የሚመረምርና መድኃኒት የሚያዝዝ ባለሙያ ነው።\n- ነርስ ወይም አስታማሚ: ለህሙማን አስፈላጊውን ክትትልና እንክብካቤ የምትሰጥ ባለሙያ ናት።\n- ክሊኒክ እና ጤና ጣቢያ: የመጀመሪያ ደረጃ ህክምና የሚሰጥባቸው ቦታዎች ናቸው።\n- ሆስፒታል: ከፍተኛ ምርመራና የቀዶ ህክምና አገልግሎት የሚሰጥበት ተቋም ነው።\n\n፪. የሐኪምና የታካሚ ውይይት:\n- ሐኪም: «ምን ሆንክ? ምን ዓይነት ህመም ይሰማሃል?» በማለት ይጠይቃል።\n- ታካሚ: «ከሁለት ቀን ጀምሮ ራሴንና ሆዴን በጣም ያመኛል» በማለት ይመልሳል።\n- ሐኪም: «ትክክለኛ ምርመራ ማድረግ አለብን፤ የላብራቶሪ ናሙና ስጥ» ይላል።\n\n፫. የላብራቶሪ ምርመራ አይነቶች:\n- የደም ምርመራ\n- የሽንት ምርመራ\n- የሰውነት ሙቀትና የደም ግፊት መለካት።",
      "examples": [
        {
          "target": "ሐኪሙ ታካሚውን «ምን ዓይነት ህመም ይሰማሃል?» ብሎ በጥሞና ጠየቀው።",
          "reading": "Hakimu takamiwən «Mən aynät həmmäm yəssämmahall?» bəlo bät’əmona t’äyyäqäw. [haˈkimu takamiˈwɨn mɨn ʔajˈnɛt hɨmːɛm jɨsːɛmːaˈhal bɨˈlo bɛtʼɨmoˈna tʼɛjːɛˈkʼɛw] (hah-KEE-moo tah-kah-MEE-wun «mun EYE-net hum-MEM yus-sem-mah-HAHL?» buh-LOH beh-t'uh-moh-NAH t'ey-yeh-K'EW)",
          "translation": "The doctor attentively asked the patient: 'What kind of pain do you feel?'."
        },
        {
          "target": "የላብራቶሪ ባለሙያው የደም ምርመራ ውጤቱን በግማሽ ሰዓት ውስጥ ለሐኪሙ አቀረበ።",
          "reading": "Yälabratori balämuyaw yädäm mərmära wət’etun bägəmmaš sä'at wəst’ lälhakimu aqärräbä. [jɛlabratoˈri balɛmuˈjaw jɛdɛm mɨrmɛˈra wɨtʼeˈtun bɛɡɨmːaʃ sɛʔat wɨstʼ lɛlhaˈkimu ʔakʼɛrːɛˈbɛ] (yeh-lahb-rah-toh-REE bah-leh-moo-YOW yeh-DEM mur-meh-RAH wut'-AY-toon beh-gum-MAHSH seh-AHT woos-T' lel-hah-KEE-moo ah-k'er-reh-BEH)"
          ,"translation": "The laboratory technician presented the blood test results to the doctor within half an hour."
        },
        {
          "target": "ነርሷ የታካሚውን የሰውነት ሙቀት እና የደም ግፊት ለክታ በመዝገብ ላይ ጻፈች።",
          "reading": "Närswa yätakamiwən yäsäwnät muqät ənna yädäm gəffit läkta bämäzgäb lay s’afäčč. [nɛrˈswa jɛtakamiˈwɨn jɛsɔwnɛt muˈkʼɛt ɨnːa jɛdɛm ɡɨfːit lɨkˈta bɛmɛzˈɡɛb laj sˤaˈfɛtʃː] (ner-SWAH yeh-tah-kah-MEE-wun yeh-sew-NET moo-K'ET un-nah yeh-DEM guf-FEET luk-TAH beh-mez-GEB lye ts'ah-FEHCH)",
          "translation": "The nurse measured the patient's body temperature and blood pressure and wrote it in the registry."
        }
      ],
      "mnemonics": [
        "Hospital Protocol: ሐኪም (Doctor) + ነርስ (Nurse) -> ምልክት (Symptoms) -> ምርመራ (Lab Test) -> ውጤት (Result)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ህሙማንን ለመጠየቅ ወደ ሆስፒታል ወይም ቤት መሄድ ትልቅ ማህበራዊ ግዴታ ሲሆን፣ ጎብኚዎች 'እግዚአብሔር ምህረቱን ያውርድልህ/ያውርድልሽ' በማለት ያጽናናሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ሐኪሙ ታካሚውን ለመመርመር ምን አይነት ጥያቄ ይጠይቃል?",
          "options": [
            "ምን ያመሃል / ምን ሆንክ? (What hurts you? / What's wrong? - Standard medical inquiry)",
            "የት ልትጓዝ ነው?",
            "ታሪፉ ስንት ነው?",
            "ስምህ ማን ነው?"
          ],
          "answerIndex": 0,
          "explanation": "«ምን ያመሃል?» ሐኪሙ የህመም ምልክቶችን ለመረዳት የሚጠይቀው ዋነኛ ጥያቄ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'The doctor ordered a blood test for the patient' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ሐኪሙ ለታካሚው የደም ምርመራ አዘዘ። (The doctor ordered a blood test for the patient - Accurate clinical statement)",
            "ሐኪሙ መኪና ገዛ።",
            "ታካሚው ሮጦ ሄደ።",
            "ምንም ምርመራ አያስፈልግም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ዓረፍተ ነገር ሐኪምን፣ ታካሚንና የደም ምርመራን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክሊኒክና የሆስፒታል አገልግሎቶችን በትክክል ያቀናጀው የትኛው ነው?",
          "options": [
            "ሐኪም ታካሚውን መረመረ፣ ነርሷ የደም ግፊት ለካች፣ የላብራቶሪ ምርመራም ተከናወነ።",
            "በሆስፒታል ውስጥ ጨዋታ ብቻ ይካሄዳል።",
            "ምርመራ ማድረግ የተከለከለ ነው።",
            "በአማርኛ ሐኪም አይባልም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የተሟላ የክሊኒክ ምርመራ ሂደትን ያሳያል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ሐኪም / Doctor, physician' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ሐኪም"
          ],
          "explanation": "ትክክለኛው ቃል «ሐኪም» (Hakim) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u10-l4": {
    "id": "am-u10-l4",
    "subject": "amharic",
    "unit": 10,
    "lessonNumber": 4,
    "title": "መድኃኒት ቤት እና የህክምና መመሪያዎች (Pharmacy, Prescriptions & Dosage)",
    "level": "A2",
    "objective": "መድኃኒት መግዛት፣ የመድኃኒት አወሳሰድ መመሪያዎችን (ከምግብ በፊት/በኋላ፣ በቀን ሦስት ጊዜ) መረዳትና መተግበር።",
    "presentation": {
      "explanation": "መድኃኒት ቤት እና የመድኃኒት አወሳሰድ መመሪያዎች:\n\n፩. የመድኃኒት አይነቶችና ክፍሎች:\n- መድኃኒት ቤት ወይም ፋርማሲ: መድኃኒቶች የሚሸጡበት መደብር ነው።\n- መድኃኒት: በሽታን ለማከምና ጤናን ለመመለስ የሚያገለግል ፈውስ ነው።\n- ክኒን: በውሃ የሚዋጥ ጠንካራ የመድኃኒት ዓይነት ነው።\n- ሽሮፕ: በፈሳሽ መልክ የሚዘጋጅና በማንኪያ የሚወሰድ መድኃኒት ነው።\n- የሐኪም ማዘዣ ወረቀት: ሐኪሙ የመድኃኒቱን ስምና መጠን ጽፎ የሚሰጠው ሰነድ ነው።\n\n፪. የአወሳሰድ መመሪያዎች:\n- ከምግብ በፊት: ሆድ ባዶ በሚሆንበት ጊዜ የሚወሰድ\n- ከምግብ በኋላ: ከተመገቡ በኋላ የሚወሰድ\n- በቀን ሦስት ጊዜ: በየስምንት ሰዓቱ ልዩነት የሚወሰድ\n- በቂ ዕረፍት ማድረግና ብዙ ውሃ መጠጣት።\n\n፫. የማህበረሰብ መልካም ምኞት:\n- «እግዚአብሔር ምህረቱን ያውርድልህ/ያውርድልሽ!» በማለት ለታካሚው ፈጣን ፈውስ ይመኛሉ።",
      "examples": [
        {
          "target": "የመድኃኒት ባለሙያው «ይህን ክኒን ከምግብ በኋላ በቀን ሦስት ጊዜ ውሰድ» ብሎ መከረኝ።",
          "reading": "Yämädanit balämuyaw «Yəhən knin käməgəb bähwala bäqän sost gize wəsäd» bəlo mäkkäräny. [jɛmɛdaˈnit balɛmuˈjaw jɨˈhɨn kɨˈnin kɛmɨˈɡɨb bɛhʷaˈla bɛkʼɛn sost ɡiˈze wɨˈsɛd bɨˈlo mɛkːɛˈrɛɲ] (yeh-meh-dah-NEET bah-leh-moo-YOW «yuh-HIN kuh-NEEN keh-muh-GUB beh-hwah-LAH beh-K'EN sohst gee-ZAY wuh-SED» buh-LOH mek-keh-RENY)",
          "translation": "The pharmacist advised me: 'Take this pill three times a day after meals'."
        },
        {
          "target": "የሐኪሙን ማዘዣ ወረቀት በመያዝ ወደ መድኃኒት ቤት ሄደን የታዘዘውን ሽሮፕ ገዛን።",
          "reading": "Yähakimun mažäža wäräqät bämäyyaz wädä mädanit bet hedän yättazzäzäwən širop gäzzan. [jɛhakiˈmun mazɛˈʒa wɛrɛˈkʼɛt bɛmɛjːaz wɛdɛ mɛdaˈnit bet heˈdɨn jɛtːazːɛˈzɛwɨn ʃiˈrop ɡɛzːan] (yeh-hah-KEE-moon mah-zeh-ZHAH weh-reh-K'ET beh-mey-YAHZ weh-DEH meh-dah-NEET bayt hay-DUN yeh-tahz-zeh-ZEW-un shee-ROHP gez-ZAHN)",
          "translation": "Holding the doctor's prescription paper, we went to the pharmacy and bought the prescribed syrup."
        },
        {
          "target": "መድኃኒቱን በሰዓቱ ወስዶ በቂ ዕረፍት በማድረጉ ምክንያት በፍጥነት ከህመሙ ዳነ።",
          "reading": "Mädanitun bäsä'atu wäsdo bäqi ərəft bämadrägu məkənyat bäfət’nät kähəmmämu danä. [mɛdaˈnitun bɛsɛʔaˈtu wɛsˈdo bɛˈkʼi ʔɨrɨft bɛmadˈrɛɡu mɨkɨnˈjat bɛfɨtʼˈnɛt kɛhɨmːɛˈmu daˈnɛ] (meh-dah-NEE-toon beh-seh-ah-TOO wes-DOH beh-K'EE uh-RUFT beh-mahd-reh-GOO muh-kun-YAHT beh-fut'-NET keh-hum-meh-MOO dah-NEH)",
          "translation": "Because he took the medicine on time and had sufficient rest, he recovered quickly from his illness."
        }
      ],
      "mnemonics": [
        "Rx Rules: ማዘዣ (Prescription) -> ክኒን/ሽሮፕ (Pills/Syrup) -> ከምግብ በኋላ (After food) -> ምህረቱን ያውርድልህ!"
      ],
      "culturalNotes": [
        "ኢትዮጵያ ውስጥ ታካሚ ሲድን 'እግዚአብሔር ይመስገን ዳንኩ' (Thank God I recovered) ማለት የተለመደ የምስጋና ባህል ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Take one pill after meals» የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ከምግብ በኋላ አንድ ክኒን ውሰድ/ውሰጂ። (Take one pill after meals - Correct dosage command)",
            "ከምግብ በፊት ሩጥ",
            "መድኃኒት አትውሰድ",
            "ክኒን አትግዛ"
          ],
          "answerIndex": 0,
          "explanation": "«ከምግብ በኋላ አንድ ክኒን ውሰድ» ትክክለኛውን የአወሳሰድ መመሪያ ይገልጻል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'He bought the prescribed medicine from the pharmacy' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "የታዘዘውን መድኃኒት ከመድኃኒት ቤት ገዛ። (He bought the prescribed medicine from the pharmacy - Accurate pharmacy transaction)",
            "መድኃኒት ቤት አልሄደም።",
            "ክሊኒኩ ተዘጋ።",
            "ምንም ህመም የለም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ዓረፍተ ነገር መድኃኒት መግዛትን በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የመድኃኒት አወሳሰድ መመሪያዎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "የሐኪም ማዘዣ፣ ክኒን፣ ሽሮፕ፣ እንዲሁም ከምግብ በፊት ወይም በኋላ መውሰድ።",
            "መድኃኒት በጨለማ መወርወር።",
            "በአማርኛ መድኃኒት አይሸጥም።",
            "ክኒን ማለት ምግብ ማለት ነው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የመድኃኒት አወሳሰድ ስርዓትን በሙሉ ያጠቃልላል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'መድኃኒት / Medicine, medication' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "መድኃኒት"
          ],
          "explanation": "ትክክለኛው ቃል «መድኃኒት» (Mädanit) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u10-l5": {
    "id": "am-u10-l5",
    "subject": "amharic",
    "unit": 10,
    "lessonNumber": 5,
    "title": "የክፍል 10 አጠቃላይ ማጠቃለያ (Unit 10 Grand Synthesis & Medical Consultation Discourse)",
    "level": "A2",
    "objective": "የሰውነት ክፍሎችን፣ የህመም ስሜትን፣ የክሊኒክ ምርመራንና የመድኃኒት አወሳሰድን ያቀናጀ የተሟላ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፲ አጠቃላይ ሰዋሰዋዊ ውህደት እና የጤና ተግባቦት ማጠቃለያ:\n\n፩. የሰውነት ክፍሎች መጠሪያዎች:\n- ራስ፣ ዓይን፣ ጆሮ፣ አፍንጫ፣ ጥርስ፣ አንገት፣ እጅ፣ እግር፣ ሆድ፣ ደረት፣ ጀርባ እና ልብ።\n\n፪. የህመም ስሜት መግለጫዎች:\n- አመመኝ፣ አመመህ፣ አመመሽ፣ አመመው፣ አመማት፣ አመመን፤ ትኩሳት፣ ሳል፣ ጉንፋን፣ ራስ ምታት።\n\n፫. በክሊኒክ እና በሆስፒታል ውስጥ የሚደረግ ተግባቦት:\n- ሐኪም፣ ነርስ፣ ታካሚ፣ ክሊኒክ፣ ሆስፒታል፣ የደም ምርመራ፣ የላብራቶሪ ውጤት።\n\n፬. መድኃኒት ቤት እና የአወሳሰድ መመሪያዎች:\n- ማዘዣ ወረቀት፣ ክኒን፣ ሽሮፕ፣ ከምግብ በፊት ወይም በኋላ፣ በቀን ሦስት ጊዜ፣ ምህረቱን ያውርድልህ!",
      "examples": [
        {
          "target": "ታካሚው ወደ ክሊኒክ ሄዶ ሐኪሙን አማከረ፤ የደም ምርመራ ተደርጎለት መድኃኒት ታዘዘለት።",
          "reading": "Takamiw wädä klinik hedo hakimun amakkärä; yädäm mərmära tädärgolät mädanit tazzäzälät. [takamiw wɛdɛ kliˈnik heˈdo hakiˈmun ʔamakːɛˈrɛ jɛdɛm mɨrmɛˈra tɛdɛrɡoˈlɛt mɛdaˈnit tazːɛzɛˈlɛt] (tah-kah-MEE-w weh-DEH klee-NEEK hay-DOH hah-KEE-moon ah-mahk-keh-REH; yeh-DEM mur-meh-RAH teh-der-goh-LET meh-dah-NEET tahz-zeh-zeh-LET)",
          "translation": "The patient went to the clinic and consulted the doctor; blood tests were performed for him and medicine was prescribed for him."
        },
        {
          "target": "የመድኃኒት ባለሙያው መመሪያዎችን በግልጽ አስረድቶ «ምህረቱን ያውርድልህ» በማለት ሸኘው።",
          "reading": "Yämädanit balämuyaw mäməriyawoččən bäğəlts asrädto «Məhrätun yawrədələh» bämallät šänyäw. [jɛmɛdaˈnit balɛmuˈjaw mɛmɨrijaˈwotʃːɨn bɛɡɨlts ʔasˈrɛdto mɨhrɛˈtun jawrɨdɨˈlɨh bɛmaˈlɛt ʃɛˈɲɛw] (yeh-meh-dah-NEET bah-leh-moo-YOW meh-muh-ree-yah-wohch-CHUN beh-GULTS ahs-red-TOH «muh-ruh-TOON yahw-ruh-duh-LUH» beh-mah-LET shen-YEW)",
          "translation": "The pharmacist clearly explained the instructions and saw him off saying 'May God send His healing to you!'."
        },
        {
          "target": "ትክክለኛ የጤና እንክብካቤ እና በወቅቱ መታከም የሰዎችን ህይወት ይታደጋል።",
          "reading": "Təkəkkəlänya yät’enna ənkəbəkkabbe ənna bäwäqtu mättakäm yäsäwoččən həywät yəttadägall. [tɨkɨkːɨˈlɛɲa jɛtʼenːa ʔɨnkɨbɨkːaˈbe ɨnːa bɛwɛkʼˈtu mɛtːaˈkɛm jɛsɛwoˈtʃːɨn hɨjˈwɛt jɨtːaˈdɛɡal] (tuh-kuhk-kuh-LEN-yah yeh-t'ayn-NAH un-kuh-buhk-kah-BAY un-nah beh-wehk'-TOO met-tah-KEM yeh-sew-wohch-CHUN huy-WET yut-tah-deh-GAHL)",
          "translation": "Proper healthcare and timely medical treatment save people's lives."
        }
      ],
      "mnemonics": [
        "Healthcare Cycle: Body Parts (ሰውነት) -> Sickness (አመመኝ) -> Clinic (ምርመራ) -> Rx (መድኃኒት) -> Recovery (ጤና)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ማህበረሰብ ውስጥ 'ጤና ይስጥልኝ' (May He grant you health) የሚለው የሰላምታ ቃል ጤና የሁሉ ነገር መሰረት መሆኑን ያንጸባርቃል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የጤና እና የህክምና ሂደት የሚያሳየው የትኛው ነው?",
          "options": [
            "ህመም ሲሰማን ወደ ክሊኒክ ሄደን በሐኪም ተመርምረን መድኃኒት እንወስዳለን። (Complete clinical consultation sequence)",
            "ምንም ህመም የለም",
            "መድኃኒት አንወድም",
            "ሆስፒታል አንሄድም"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ህመምን፣ ክሊኒክ መሄድን፣ ምርመራንና መድኃኒት መውሰድን በትክክል ያጠቃልላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ምርመራን፣ መድኃኒትንና ፈውስን ያቀናጀው ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ሐኪሙ መርምሮ መድኃኒት አዘዘልኝ፤ እኔም በፍጥነት ዳንኩ። (The doctor examined and prescribed medicine for me; I quickly recovered - Integrated sentence)",
            "መድኃኒት አልገዛሁም።",
            "ክሊኒኩ ሩቅ ነው።",
            "ትላንትና ታክሲ ተሳፈርኩ።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ ምርመራን፣ መድኃኒትንና መዳንን በአንድነት ይዟል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 10 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የሰውነት ክፍሎች፣ የህመም ስሜት መግለጽ (አመመኝ)፣ የክሊኒክና የሆስፒታል ምርመራ፣ እንዲሁም መድኃኒት ቤትና የአወሳሰድ መመሪያዎች ተካተዋል።",
            "ይህ ክፍል ስለ ቤተሰብ ብቻ ነው።",
            "በአማርኛ የጤና ቃላት የሉም።",
            "ሁሉም የሰውነት ክፍሎች አንድ ስም አላቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 10ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ጤና / Health' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ጤና"
          ],
          "explanation": "ትክክለኛው ቃል «ጤና» (T'enna) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u11-l1": {
    "id": "am-u11-l1",
    "subject": "amharic",
    "unit": 11,
    "lessonNumber": 1,
    "title": "ቀላል የወደፊት ጊዜ ግሶች መዋቅር (Simple Future Tense Conjugation)",
    "level": "A2",
    "objective": "ቀላል የወደፊት ጊዜ ግሶችን በሁሉም መደቦች (እ...አለሁ፣ ት...አለህ፣ ት...አለሽ፣ ይ...አል፣ ት...አለች፣ እን...አለን፣ ት...አላችሁ፣ ይ...አሉ) በትክክል ማርባትና መጠቀም።",
    "presentation": {
      "explanation": "የቀላል የወደፊት ጊዜ ግስ መዋቅር እና እርባታ:\n\n፩. የወደፊት ጊዜ ቅጥያዎች (ከ«መሄድ» ግስ ጋር):\n- እኔ: እሄዳለሁ (ወደፊት እጓዛለሁ)\n- አንተ: ትሄዳለህ (ወደፊት ትጓዛለህ)\n- አንቺ: ትሄጃለሽ (ወደፊት ትጓዢያለሽ)\n- እሱ: ይሄዳል (ወደፊት ይጓዛል)\n- እሷ: ትሄዳለች (ወደፊት ትጓዛለች)\n- እኛ: እንሄዳለን (ወደፊት እንጓዛለን)\n- እናንተ: ትሄዳላችሁ (ወደፊት ትጓዛላችሁ)\n- እነሱ / እርሶ: ይሄዳሉ (ወደፊት ይጓዛሉ)።\n\n፪. የሌሎች ግሶች ምሳሌዎች:\n- መብላት: እበላለሁ፣ ትበላለህ፣ ይበላል፣ እንበላለን\n- መሥራት: እሠራለሁ፣ ትሠራለህ፣ ይሠራል፣ እንሠራለን\n- መማር: እማራለሁ፣ ትማራለህ፣ ይማራል፣ እንማራለን።\n\n፫. የሰዋሰው መርህ:\nበአማርኛ የወደፊት ጊዜ ያልተጠናቀቀ ድርጊትን (የአሁንና የወደፊት ግንድ) ከረዳት ግሱ «አለ» ጋር በማጣመር ይመሰረታል።",
      "examples": [
        {
          "target": "ነገ ጠዋት አዲስ ልብስ ለብሼ ወደ ዩኒቨርሲቲ እሄዳለሁ።",
          "reading": "Nägä t’əwat addis ləbs läbəšše wädä yunivärsiti əhedallähu. [nɛɡɛ tʼɨwat ʔadːis lɨbs lɛbɨʃːe wɛdɛ junivɛrsiˈti ʔɨheˈdalːɛhu] (neh-GEH t'uh-WAHT ahd-DEES lubs leh-bush-SHAY weh-DEH yoo-nee-ver-see-TEE uh-hay-DAHL-leh-hoo)",
          "translation": "Tomorrow morning, having worn new clothes, I will go to the university."
        },
        {
          "target": "ተማሪዎቹ በትምህርታቸው ጠንክረው በመማር ጥሩ ውጤት ያስመዘግባሉ።",
          "reading": "Tämariwočču bätəmhərtəččäw t’änkərraw bämämar t’əru wət’et yasmäzäggəballu. [tɛmariˈwotʃːu bɛtɨmhɨrtɨtʃːɛw tʼɛnkɨˈrɛw bɛmɛˈmar tʼɨru wɨˈtʼet jasmɛzɛɡːɨˈbalːu] (teh-mah-ree-wohch-CHOO beh-tum-hur-tuhch-CHEW t'en-kuh-ROW beh-meh-MAHR t'uh-ROO wut'-AYT yahs-mez-ehg-guh-BAHL-loo)",
          "translation": "The students, by studying hard in their education, will register good results."
        },
        {
          "target": "እኛ በሚቀጥለው ወር አዲስ የመኖሪያ ቤት እንገዛለን።",
          "reading": "Ənnya bämmiqät’t’əläw wär addis yämänoriya bet ənnəgäzallän. [ʔɨɲːa bɛmːikʼɛtʼːɨlɛw wɛr ʔadːis jɛmɛnoˈrija bet ʔɨnːɨɡɛˈzalːɛn] (un-NYAH bem-mee-k'et'-t'uh-LEW wer ahd-DEES yeh-meh-noh-REE-yah bayt un-nuh-geh-ZAHL-len)",
          "translation": "We will buy a new residential house next month."
        }
      ],
      "mnemonics": [
        "Future Tense Formula: እ- (I) + Stem + -አለሁ | እን- (We) + Stem + -አለን!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል ውስጥ ስለ ወደፊት ዕቅድ ሲነገር 'እግዚአብሔር ከፈቀደ' (God willing) ማለት የተለመደና የተከበረ ጨዋነት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«I will study Amharic» የሚለውን ትክክለኛ የወደፊት ጊዜ የግስ እርባታ የያዘው የትኛው ነው?",
          "options": [
            "አማርኛ እማራለሁ። (I will study Amharic - Correct 1st person singular future conjugation)",
            "አማርኛ ተማርኩ",
            "አማርኛ አልማርም",
            "አማርኛ ተማር"
          ],
          "answerIndex": 0,
          "explanation": "«እማራለሁ» ለእኔ (1st person singular) የወደፊት ጊዜን በትክክል ያመለክታል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'They will work in the office' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "እነሱ ቢሮ ውስጥ ይሠራሉ። (They will work in the office - Correct 3rd person plural future)",
            "እነሱ ቢሮ አልገቡም።",
            "እኔ ቢሮ እሠራለሁ።",
            "እሱ ትላንት ሠራ።"
          ],
          "answerIndex": 0,
          "explanation": "«ይሠራሉ» ለሦስተኛ መደብ ብዙ (እነሱ) የወደፊት ጊዜን በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የወደፊት ጊዜ የግስ እርባታዎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "እሄዳለሁ፣ ትሄዳለህ፣ ትሄጃለሽ፣ ይሄዳል፣ ትሄዳለች እና እንሄዳለን።",
            "ትላንት ሄድኩ እና በላሁ።",
            "አልሄድኩም እና አልበላሁም።",
            "በአማርኛ የወደፊት ጊዜ አይረባም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የወደፊት ጊዜ የግስ እርባታዎችን በትክክል ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እሄዳለሁ / I will go' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "እሄዳለሁ"
          ],
          "explanation": "ትክክለኛው ቃል «እሄዳለሁ» (Əhedallähu) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u11-l2": {
    "id": "am-u11-l2",
    "subject": "amharic",
    "unit": 11,
    "lessonNumber": 2,
    "title": "የወደፊት ጊዜ የጊዜ አመልካቾች (Future Time Markers)",
    "level": "A2",
    "objective": "የወደፊት ጊዜ አመልካቾችን (ነገ፣ ከነገ ወዲያ፣ በሚቀጥለው ሳምንት/ወር/ዓመት፣ ወደፊት) በትክክል መጠቀም።",
    "presentation": {
      "explanation": "የወደፊት ጊዜ አመልካች ቃላት እና አጠቃቀማቸው:\n\n፩. የቀናት አመልካቾች:\n- ነገ: ከዛሬ ቀጥሎ የሚመጣው ቀን\n- ከነገ ወዲያ: ከነገ ቀጥሎ የሚመጣው ሁለተኛው ቀን።\n\n፪. የሳምንታት፣ የወራትና የዓመታት አመልካቾች:\n- በሚቀጥለው ሳምንት: የሚመጣው አዲስ ሳምንት\n- በሚመጣው ወር: የሚቀጥለው አዲስ ወር\n- በሚቀጥለው ዓመት: አዲሱ ዓመት ሲመጣ።\n\n፫. ረጅም ጊዜና የወደፊት ዕጣ:\n- ወደፊት: በቀጣይ ህይወት ወይም በሩቅ ጊዜ የሚፈጸም\n- በቅርቡ: በጥቂት ቀናት ወይም ሳምንታት ውስጥ።\n\n፬. የአረፍተ ነገር አወቃቀር:\nየጊዜ አመልካቹ ብዙውን ጊዜ በአረፍተ ነገሩ መጀመሪያ ወይም ከመሪው ቃል ቀጥሎ ይቀመጣል፤ ለምሳሌ: «ነገ እንገናኛለን»።",
      "examples": [
        {
          "target": "ከነገ ወዲያ በዓል ስለሆነ መላው ቤተሰብ በጋራ ምሳ እንበላለን።",
          "reading": "Känägä wädiya bä'al səlähonä mällaw betäsäb bägara məsa ənnəbälallän. [kɛnɛɡɛ wɛdiˈja bɛʔal sɨlɛˈhonɛ mɨlːaw betɛˈsɛb bɛɡaˈra mɨsa ʔɨnːɨbɛˈlalːɛn] (keh-neh-GEH weh-dee-YAH beh-AHL suh-leh-HOH-neh mul-LOW bay-tuh-SEB beh-gah-RAH muh-SAH un-nuh-beh-LAHL-len)",
          "translation": "Because the day after tomorrow is a holiday, the entire family will eat lunch together."
        },
        {
          "target": "በሚቀጥለው ዓመት ትምህርቴን ጨርሼ ዲግሪዬን እቀበላለሁ።",
          "reading": "Bämmiqät’t’əläw amät təməhərten č’ärrəše digriyenn əqqäbbälallähu. [bɛmːikʼɛtʼːɨlɛw ʔaˈmɛt tɨmɨhɨrˈten tʃʼɛrːɨˈʃe diɡriˈjen ʔɨkʼːɛbːɛˈlalːɛhu] (bem-mee-k'et'-t'uh-LEW ah-MET tum-hur-TAYN ch'er-ruh-SHAY deeg-ree-YAYN uhk'-k'eb-beh-LAHL-leh-hoo)",
          "translation": "Next year, having finished my studies, I will receive my degree."
        },
        {
          "target": "ወደፊት ታዋቂ የህክምና ዶክተር ለመሆን በብርቱ ጥረት እያጠናሁ ነው።",
          "reading": "Wädäfit tawwaqi yähəkəmna doktär lämähon bäbərtu t’ərät əyyat’ännahu näw. [wɛdɛˈfit tawːaˈkʼi jɛhɨkɨmˈna dokˈtɛr lɛmɛˈhon bɛbɨrˈtu tʼɨrɛt ʔɨjːatʼɛnːaˈhu nɛw] (weh-deh-FEET tahw-wah-K'EE yeh-huh-kum-NAH dohk-TER leh-meh-HOHN beh-bur-TOO t'uh-RET uhy-yah-t'en-NAH-hoo now)",
          "translation": "I am studying with vigorous effort to become a famous medical doctor in the future."
        }
      ],
      "mnemonics": [
        "Future Horizon: ነገ (Tomorrow) -> ከነገ ወዲያ (Day after tomorrow) -> በሚቀጥለው ሳምንት (Next week) -> ወደፊት (In the future)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ የቀን አቆጣጠር መስከረም ፩ ቀን አዲሱ ዓመት ሲሆን፣ ሰዎች 'እንኳን ለአዲሱ ዓመት በሰላም አደረሳችሁ' በማለት ለወደፊቱ መልካም ምኞት ይለዋወጣሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Day after tomorrow» የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ከነገ ወዲያ (Day after tomorrow - Correct future time phrase)",
            "ከትላንት ወዲያ",
            "ባለፈው ሳምንት",
            "አሁን"
          ],
          "answerIndex": 0,
          "explanation": "«ከነገ ወዲያ» ከነገ ቀጥሎ ያለውን ቀን ያመለክታል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Next week we will travel to Bahir Dar' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "በሚቀጥለው ሳምንት ወደ ባሕር ዳር እንጓዛለን። (Next week we will travel to Bahir Dar - Accurate future sentence)",
            "ትላንት ወደ ባሕር ዳር ሄድን።",
            "ባሕር ዳር አንሄድም።",
            "ባሕር ዳር ቆንጆ ከተማ ናት።"
          ],
          "answerIndex": 0,
          "explanation": "«በሚቀጥለው ሳምንት... እንጓዛለን» የወደፊት ጊዜ አመልካችንና ግስን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የወደፊት ጊዜ አመልካቾችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ነገ፣ ከነገ ወዲያ፣ በሚቀጥለው ሳምንት፣ በሚመጣው ወር እና ወደፊት።",
            "ትላንትና፣ ከትላንት ወዲያ እና ባለፈው ዓመት።",
            "ጠዋት፣ ከሰዓት እና ማታ።",
            "በአማርኛ የወደፊት ጊዜ ቃላት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የወደፊት ጊዜ አመልካቾችን ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ነገ / Tomorrow' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ነገ"
          ],
          "explanation": "ትክክለኛው ቃል «ነገ» (Nägä) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u11-l3": {
    "id": "am-u11-l3",
    "subject": "amharic",
    "unit": 11,
    "lessonNumber": 3,
    "title": "የወደፊት ጊዜ አሉታዊ ቅርጽ (Negative Future Tense Conjugation)",
    "level": "A2",
    "objective": "የወደፊት ጊዜ አሉታዊ ግሶችን (አል...ም: አልሄድም፣ አትሄድም፣ አትሄጂም፣ አይሄድም፣ አትሄድም፣ አንሄድም፣ አትሄዱም፣ አይሄዱም) ማርባትና መጠቀም።",
    "presentation": {
      "explanation": "የወደፊት ጊዜ አሉታዊ ግሶች መዋቅር እና እርባታ:\n\n፩. የአሉታዊነት ቅጥያዎች (ከ«መሄድ» ግስ ጋር):\n- እኔ: አልሄድም (አልጓዝም)\n- አንተ: አትሄድም (አትጓዝም)\n- አንቺ: አትሄጂም (አትጓዢም)\n- እሱ: አይሄድም (አይጓዝም)\n- እሷ: አትሄድም (አትጓዝም)\n- እኛ: አንሄድም (አንጓዝም)\n- እናንተ: አትሄዱም (አትጓዙም)\n- እነሱ / እርሶ: አይሄዱም (አይጓዙም)።\n\n፪. የሌሎች ግሶች አሉታዊ እርባታ:\n- መብላት: አልበላም፣ አትበላም፣ አይበላም፣ አንበላም\n- መሥራት: አልሠራም፣ አትሠራም፣ አይሠራም፣ አንሠራም\n- መግዛት: አልገዛም፣ አትገዛም፣ አይገዛም፣ አንገዛም።\n\n፫. የሰዋሰው መርህ:\nበአዎንታዊ የወደፊት ጊዜ የነበረው «አለሁ/አለህ/አለ» ረዳት ግስ በአሉታዊው ቅርጽ ውስጥ ይሰረዝ እና «አል- ... -ም» ማዕቀፍ ይተካል።",
      "examples": [
        {
          "target": "ነገ ዝናብ ስለሚዘንብ ወደ ሜዳ ወጥተን እግር ኳስ አንጫወትም።",
          "reading": "Nägä zənab səlähəmmizänəb wädä meda wät’t’än əgər kwas annəč’awwätəm. [nɛɡɛ zɨˈnab sɨlɛmːiˈzɛnɨb wɛdɛ meˈda wɛtʼːɛn ʔɨɡr kʷas ʔanːɨtʃʼawːɛˈtɨm] (neh-GEH zuh-NAHB suh-leh-mee-ZEH-nub weh-DEH may-DAH wet'-TEN ug-GUR kwas ahn-nuh-ch'ow-WEH-tum)",
          "translation": "Because it will rain tomorrow, we will not go out to the field and play football."
        },
        {
          "target": "እሱ ገንዘብ ስለሌለው ይህን ውድ ሞባይል ስልክ አይገዛም።",
          "reading": "Əssu gänzäb səlalleleläw yəhən wəd mobil səlk aygäzam. [ʔɨsːu ɡɛnˈzɛb sɨlɛleˈlɛw jɨˈhɨn wɨd moˈbajl sɨlk ʔajɡɛˈzam] (us-SOO gen-ZEB suh-leh-lay-LEW yuh-HIN wud moh-BYE-l sulk eye-geh-ZAHM)",
          "translation": "Because he has no money, he will not buy this expensive mobile phone."
        },
        {
          "target": "እኔ ዛሬ ማታ ቡና አልጠጣም፤ ምክንያቱም እንቅልፍ ይከለክለኛል።",
          "reading": "Əne zare mata bunna alt’ät’t’am; məkənyatum ənqəlff yəkäläkələnyall. [ʔɨne zaˈre maˈta bunːa ʔaltʼɛtʼːam mɨkɨnˈjatum ʔɨnkʼɨlf jɨkɛlɛkɨlɛˈɲal] (uh-NAY zah-RAY mah-TAH boon-NAH ahl-t'et'-T'AHM; muh-kun-YAH-toom un-k'ulf yuh-keh-leh-kuh-len-YAHL)",
          "translation": "I will not drink coffee tonight, because it deprives me of sleep."
        }
      ],
      "mnemonics": [
        "Negative Future Frame: አል- + Verb Root + -ም (e.g. አልሄድም, አይመጣም, አንበላም)!"
      ],
      "culturalNotes": [
        "አንድን ግብዣ በአክብሮት ውድቅ ለማድረግ 'አይመቸኝም' (It is not convenient for me) ወይም 'አልችልም፣ ይቅርታ' ማለት የተለመደ ጨዋነት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«I will not eat» የሚለውን በአማርኛ ትክክለኛ የወደፊት አሉታዊ ቅርጽ የገለጸው የትኛው ነው?",
          "options": [
            "አልበላም (I will not eat - Correct 1st person singular negative future)",
            "አልበላሁም",
            "እበላለሁ",
            "ብላ"
          ],
          "answerIndex": 0,
          "explanation": "«አልበላም» የወደፊት ወይም የአሁን ያልተጠናቀቀ አሉታዊ ድርጊትን ያመለክታል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'They will not come tomorrow' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ነገ አይመጡም። (They will not come tomorrow - Correct 3rd person plural negative future)",
            "ትላንት መጡ።",
            "ነገ ይመጣሉ።",
            "እኔ አልመጣም።"
          ],
          "answerIndex": 0,
          "explanation": "«አይመጡም» ለሦስተኛ መደብ ብዙ የወደፊት አሉታዊ ቅርጽ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የወደፊት ጊዜ አሉታዊ ግሶችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "አልሄድም፣ አትሄድም፣ አትሄጂም፣ አይሄድም፣ አትሄድም እና አንሄድም።",
            "ሄድኩ፣ ሄደ እና ሄድን።",
            "እሄዳለሁ እና ትሄዳለህ።",
            "በአማርኛ አሉታዊ ግስ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የወደፊት አሉታዊ ግሶችን ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አልሄድም / I will not go' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አልሄድም"
          ],
          "explanation": "ትክክለኛው ቃል «አልሄድም» (Alhedəm) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u11-l4": {
    "id": "am-u11-l4",
    "subject": "amharic",
    "unit": 11,
    "lessonNumber": 4,
    "title": "ዕቅዶችን፣ ዓላማዎችን እና ምኞቶችን መግለጽ (Expressing Intentions, Plans & Desires)",
    "level": "A2",
    "objective": "ዕቅዶችን (አቅጃለሁ፣ አስባለሁ፣ እፈልጋለሁ፣ ... ለማድረግ) በውይይት ውስጥ መግለጽ።",
    "presentation": {
      "explanation": "የዕቅድ፣ የዓላማ እና የምኞት መግለጫ ሰዋሰዋዊ መዋቅሮች:\n\n፩. ዋና ዋና የዕቅድ ግሶች:\n- ማቀድ: አቅጃለሁ (ዕቅድ አለኝ)\n- ማሰብ: አስባለሁ (ሐሳብ አለኝ)\n- መፈለግ: እፈልጋለሁ (ምኞትና ፍላጎት አለኝ)።\n\n፪. የመስተዋድድና የዘርፍ አወቃቀር:\nየማስረጃ ግስ (መ-) + ለማድረግ / ለመሆን:\n- ለመማር እፈልጋለሁ (መማር እሻለሁ)\n- ለመጓዝ አቅጃለሁ (ጉዞ አቅጃለሁ)\n- ለመሥራት አስባለሁ (ሥራ የመጀመር ሐሳብ አለኝ)።\n\n፫. ምኞትን መግለጽ:\n«ትልቅ ድርጅት የማቋቋም ዓላማ አለኝ»፣ «ሀገሬን የማገልገል ህልም አለኝ» እያልን የወደፊት ራዕያችንን እንገልጻለን።",
      "examples": [
        {
          "target": "በክረምት ዕረፍት ጊዜ ወደ ላሊበላ ታሪካዊ ቦታዎች ለመጓዝ አቅጃለሁ።",
          "reading": "Bäkərämt ərəft gize wädä Lalibäla tarikawi botawočč lämägwaz aqəğğallähu. [bɛkɨˈrɛmt ʔɨrɨft ɡiˈze wɛdɛ laliˈbɛla tariˈkawi botaˈwotʃː lɛmɛɡʷaz ʔakʼɨdʒːaˈlːɛhu] (beh-kuh-REMT uh-RUFT gee-ZAY weh-DEH lah-lee-beh-LAH tah-ree-KAH-wee boh-tah-wohch-CH leh-meh-GWAHZ ah-k'uhj-JAHL-leh-hoo)",
          "translation": "During the rainy season vacation time, I have planned to travel to Lalibela historical sites."
        },
        {
          "target": "እህቴ የኮምፒውተር ሳይንስ ትምህርቷን በከፍተኛ ማዕረግ ለመጨረስ ትፈልጋለች።",
          "reading": "Əhəte yäkompiyutär sayəns təməhərtwan bäkäffətänya ma'əräg lämät’ärräs təfälləgalläčč. [ʔɨhɨˈte jɛkompjuˈtɛr saˈjɨns tɨmɨhɨrˈtwan bɛkɛfːɨˈtɛɲa maʔɨˈrɛɡ lɛmɛtʃʼɛrːɛs tɨfɛlːɨˈɡalːɛtʃː] (uh-huh-TAY yeh-kohm-pyoo-TER sah-YUNS tum-hur-TWAHN beh-kef-fuh-TEN-yah mah-uh-REG leh-meh-ch'er-RES tuh-fel-luh-GAHL-lehch)",
          "translation": "My sister wants to finish her computer science education with high distinction."
        },
        {
          "target": "ወጣቶቹ በጋራ በመሆን አዲስ የቴክኖሎጂ የፈጠራ ድርጅት ለማቋቋም አስበዋል።",
          "reading": "Wät’t’atočču bägara bämähon addis yätäknoloği yäfät’t’ära dərəğğət lämaqqwaqwam asbäwall. [wɛtʼːaˈtotʃːu bɛɡaˈra bɛmɛˈhon ʔadːis jɛtɛknoˈlodʒi jɛfɛtʼːɛˈra dɨrɨdʒːɨt lɛmakʷːakʷam ʔasbɛˈwalː] (wet'-t'ah-tohch-CHOO beh-gah-RAH beh-meh-HOHN ahd-DEES yeh-tek-noh-LOH-jee yeh-fet'-t'eh-RAH duh-ruh-JUHT leh-mahk-kwah-KWAHM ahs-beh-WAHL)",
          "translation": "The youth, by being together, have intended to establish a new technological startup company."
        }
      ],
      "mnemonics": [
        "Intent Trio: አቅጃለሁ (I planned) + እፈልጋለሁ (I want) + አስባለሁ (I intend)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ወጣቶች መካከል 'አዲስ ጅምር ይሁንልህ' (May it be a new beginning for you) በማለት አዲስ ሥራ ለጀመረ ሰው ምርቃት መስጠት የተለመደ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«I want to travel» የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ለመጓዝ እፈልጋለሁ። (I want to travel - Correct infinitive + desiderative verb)",
            "መጓዝ አልፈልግም",
            "ትላንት ተጓዝኩ",
            "አትጓዝ"
          ],
          "answerIndex": 0,
          "explanation": "«ለመጓዝ እፈልጋለሁ» የመጓዝ ፍላጎትንና ምኞትን በትክክል ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'He has planned to buy a car' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "መኪና ለመግዛት አቅዷል። (He has planned to buy a car - Correct intention structure)",
            "መኪና ሸጠ።",
            "መኪና የለውም።",
            "መኪና አይገዛም።"
          ],
          "answerIndex": 0,
          "explanation": "«መኪና ለመግዛት አቅዷል» የግዢ ዕቅድን በትክክል ይገልጻል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የዕቅድ እና የዓላማ መግለጫ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "አቅጃለሁ፣ አስባለሁ፣ እፈልጋለሁ፣ ለመማር እና ለማቋቋም።",
            "ትላንት በላሁ እና ጠጣሁ።",
            "ምንም ዕቅድ የለም።",
            "በአማርኛ የዕቅድ ቃል አይነገርም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የዕቅድና የምኞት መግለጫዎችን ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አቅጃለሁ / I have planned' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አቅጃለሁ"
          ],
          "explanation": "ትክክለኛው ቃል «አቅጃለሁ» (Aqəğğallähu) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u11-l5": {
    "id": "am-u11-l5",
    "subject": "amharic",
    "unit": 11,
    "lessonNumber": 5,
    "title": "የክፍል 11 አጠቃላይ ማጠቃለያ (Unit 11 Grand Synthesis & Future Aspirations Discourse)",
    "level": "A2",
    "objective": "የወደፊት ጊዜ ግሶችን፣ የጊዜ አመልካቾችን፣ አሉታዊ ቅርጾችንና ዕቅዶችን ያቀናጀ የተሟላ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፲፩ አጠቃላይ ሰዋሰዋዊ ውህደት እና የወደፊት ተግባቦት ማጠቃለያ:\n\n፩. የወደፊት ጊዜ አዎንታዊ እርባታ:\n- እሄዳለሁ፣ ትሄዳለህ፣ ትሄጃለሽ፣ ይሄዳል፣ ትሄዳለች፣ እንሄዳለን፣ ትሄዳላችሁ፣ ይሄዳሉ።\n\n፪. የወደፊት ጊዜ አመልካቾች:\n- ነገ፣ ከነገ ወዲያ፣ በሚቀጥለው ሳምንት፣ በሚመጣው ወር፣ በሚቀጥለው ዓመት፣ ወደፊት።\n\n፫. የወደፊት አሉታዊ ቅርጽ:\n- አልሄድም፣ አትሄድም፣ አትሄጂም፣ አይሄድም፣ አትሄድም፣ አንሄድም፣ አትሄዱም፣ አይሄዱም።\n\n፬. የዕቅድና የዓላማ መግለጫ:\n- ለመማር እፈልጋለሁ፣ ለመጓዝ አቅጃለሁ፣ አዲስ ሥራ ለመጀመር አስባለሁ።",
      "examples": [
        {
          "target": "በሚቀጥለው ዓመት ዩኒቨርሲቲ ገብቼ የህክምና ሳይንስ እማራለሁ፤ ጠንክሬም አጠናለሁ።",
          "reading": "Bämmiqät’t’əläw amät yunivärsiti gäbbəčče yähəkəmna sayəns əmmarallähu; t’änkərem ət’änallähu. [bɛmːikʼɛtʼːɨlɛw ʔaˈmɛt junivɛrsiˈti ɡɛbːɨtʃːe jɛhɨkɨmˈna saˈjɨns ʔɨmːaˈralːɛhu tʼɛnkɨˈrem ʔɨtʼɛˈnalːɛhu] (bem-mee-k'et'-t'uh-LEW ah-MET yoo-nee-ver-see-TEE geb-buhch-CHAY yeh-huh-kum-NAH sah-YUNS um-mah-RAHL-leh-hoo; t'en-kuh-RAY-m uh-t'eh-NAHL-leh-hoo)",
          "translation": "Next year, having entered university, I will study medical science; and I will study hard."
        },
        {
          "target": "ነገ ዝናብ ስለሚዘንብ ወደ ገበያ አንሄድም፤ ይልቁንም ቤት ውስጥ እናርፋለን።",
          "reading": "Nägä zənab səlähəmmizänəb wädä gäbäya annəhedəm; yələqunəm bet wəst’ ənnarrəfallän. [nɛɡɛ zɨˈnab sɨlɛmːiˈzɛnɨb wɛdɛ ɡɛbɛˈja ʔanːɨheˈdɨm jɨlɨkʼuˈnɨm bet wɨstʼ ʔɨnːarːɨˈfalːɛn] (neh-GEH zuh-NAHB suh-leh-mee-ZEH-nub weh-DEH geh-beh-YAH ahn-nuh-HAY-dum; yuh-luh-k'oo-NUM bayt woos-T' un-nahr-ruh-FAHL-len)"
          ,"translation": "Because it will rain tomorrow, we will not go to the market; rather we will rest at home."
        },
        {
          "target": "ወደፊት የተሻለና የበለጸገ ህይወት ለመገንባት ዛሬ ጠንክረን መሥራት አለብን።",
          "reading": "Wädäfit yätäšalänna yäbäläs’s’ägä həywät lämägänbat zare t’änkərän mäsrat alläbbən. [wɛdɛˈfit jɛtɛʃaˈlɛnːa jɛbɛlɛsˤːɛˈɡɛ hɨjˈwɛt lɛmɛɡɛnˈbat zaˈre tʼɛnkɨˈrɛn mɛsˈrat ʔalːɛbːɨn] (weh-deh-FEET yeh-teh-shah-LEN-nah yeh-beh-lets'-ts'eh-GEH huy-WET leh-meh-gen-BAHT zah-RAY t'en-kuh-REN mes-RAHT ahl-leb-BUN)",
          "translation": "To build a better and more prosperous life in the future, we must work hard today."
        }
      ],
      "mnemonics": [
        "Future Blueprint: Action (እሰራለሁ) + Time (ነገ) + Negation (አልተውም) + Vision (አቅጃለሁ)!"
      ],
      "culturalNotes": [
        "ኢትዮጵያውያን ለወደፊት ህይወት ምርቃት ሲሰጡ 'ያሰብከው/ያሰብሽው ይሳካልህ/ይሳካልሽ' (May what you intended succeed for you) ይላሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የወደፊት ዕቅድንና ተግባርን በትክክል ያቀናጀው የትኛው ነው?",
          "options": [
            "በሚቀጥለው ወር አዲስ ሥራ ለመጀመር አቅጃለሁ፤ ጠንክሬም እሠራለሁ። (Complete future intention and action sequence)",
            "ትላንት ሥራ ጨረስኩ",
            "ምንም ዕቅድ የለኝም",
            "ሥራ አልፈልግም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የጊዜ አመልካችን፣ ዕቅድንና የወደፊት ግስን በአንድነት ያጠቃልላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "የወደፊት አዎንታዊና አሉታዊ መግለጫዎችን ያጣመረው ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ነገ ወደ ከተማ አልሄድም፤ ይልቁንም ቤት ውስጥ አጠናለሁ። (Tomorrow I will not go to town; rather I will study at home - Contrastive future)",
            "ትላንት ወደ ከተማ አልሄድኩም።",
            "ምንም አላጠናሁም።",
            "ከተማ ሩቅ ነው።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ዓረፍተ ነገር የወደፊት አሉታዊን (አልሄድም) እና የወደፊት አዎንታዊን (አጠናለሁ) በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 11 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "ቀላል የወደፊት ጊዜ ግሶች፣ የጊዜ አመልካቾች (ነገ፣ በሚቀጥለው ሳምንት)፣ የወደፊት አሉታዊ ቅርጾች እና የዕቅድ መግለጫዎች ተካተዋል።",
            "ይህ ክፍል ስለ ያለፈ ታሪክ ብቻ ነው።",
            "በአማርኛ የወደፊት ጊዜ የለም።",
            "ሁሉም ግሶች አንድ ዓይነት እርባታ አላቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 11ን አጠቃላይ የወደፊት ጊዜ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'የወደፊት / Future' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "የወደፊት"
          ],
          "explanation": "ትክክለኛው ቃል «የወደፊት» (Yäwädäfit) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u12-l1": {
    "id": "am-u12-l1",
    "subject": "amharic",
    "unit": 12,
    "lessonNumber": 1,
    "title": "ዋና ዋና የስፖርት አይነቶች (Major Sports & Athletics)",
    "level": "A2",
    "objective": "ስፖርቶችን (እግር ኳስ፣ ሩጫ፣ ቅርጫት ኳስ፣ መረብ ኳስ፣ ዋና፣ ብስክሌት) መለየትና በውይይት መጠቀም።",
    "presentation": {
      "explanation": "ዋና ዋና የስፖርት አይነቶች እና የሜዳ ተግባራት:\n\n፩. የኳስ ጨዋታዎች:\n- እግር ኳስ: በሁለት ቡድኖች መካከል የሚደረግ ተወዳጅ የሜዳ ጨዋታ ነው።\n- ቅርጫት ኳስ: ኳስን በእጅ ወደ ቅርጫት በማስገባት የሚጫወቱት ስፖርት ነው።\n- መረብ ኳስ: በመረብ የተከፈለ ሜዳ ላይ በእጅ የሚመታ ኳስ ጨዋታ ነው።\n- ቴኒስ: በራኬት የሚጫወቱት ስፖርት ነው።\n\n፪. የአትሌቲክስና የግል ስፖርቶች:\n- ሩጫ: አጭርና ረጅም ርቀቶችን በመሮጥ የሚደረግ ውድድር ነው።\n- ዋና: በውሃ ውስጥ የሚደረግ ጠቃሚ የሰውነት እንቅስቃሴ ነው።\n- ብስክሌት መንዳት: በመንገድና በተራራ ላይ የሚደረግ ውድድር ነው።\n\n፫. ሰዋሰዋዊ አጠቃቀም:\nየስፖርቱን ስም ከ«መጫወት»፣ «መሮጥ» ወይም «መዋኘት» ግሶች ጋር በማጣመር እንጠቀማለን።",
      "examples": [
        {
          "target": "በኢትዮጵያ ውስጥ የረጅም ርቀት ሩጫ እና እግር ኳስ በጣም ተወዳጅ ስፖርቶች ናቸው።",
          "reading": "Bä-Ityop’ya wəst’ yäräğğəm rəqät ruč’č’anna əgər kwas bät’am täwäddağ sportočč naččäw. [bɛʔitjoˈpʼja wɨstʼ jɛrɛdʒːɨm rɨkʼɛt rutʃʼːanːa ʔɨɡr kʷas bɛtʼam tɛwɛdːadʒ sporˈtotʃː natʃːɛw] (beh-eet-YOHP-yah woos-T' yeh-red-JUM ruh-K'ET rooch-CHAHN-nah ug-GUR kwas beh-T'AHM teh-wed-DAHJ spohr-TOHCH-choo NAHCH-chew)",
          "translation": "In Ethiopia, long-distance running and football are very popular sports."
        },
        {
          "target": "ጓደኞቼ ቅዳሜ ከሰዓት በኋላ ወደ ስታዲየም ሄደው ቅርጫት ኳስ ይጫወታሉ።",
          "reading": "Gwadänyočče Qədame käsä'at bähwala wädä stadiyäm hedäw qərč’at kwas yəč’awwätallu. [ɡʷadɛˈɲotʃːe kʼɨdaˈme kɛsɛʔat bɛhʷaˈla wɛdɛ stadiˈjɛm heˈdɛw kʼɨrtʃʼat kʷas jɨtʃʼawːɛˈtalːu] (gwah-den-yohch-CHAY k'uh-dah-MAY keh-seh-AHT beh-hwah-LAH weh-DEH stah-dee-YEM hay-DEW k'ur-ch'aht kwas yuh-ch'ow-weh-TAHL-loo)",
          "translation": "My friends go to the stadium on Saturday afternoon and play basketball."
        },
        {
          "target": "በየቀኑ ጠዋት በዋና መዋኛ ገንዳ ውስጥ መዋኘት ለልብ ጤንነት እጅግ ጠቃሚ ነው።",
          "reading": "Bäyyäqänu t’əwat bäwana mäwanya gända wəst’ mäwanyät läləbb t’enənnät əğğəg t’äqqami näw. [bɛjːɛkʼɛˈnu tʼɨwat bɛwaˈna mɛwaˈɲa ɡɛnˈda wɨstʼ mɛwaˈɲɛt lɛlɨbː tʼenɨnˈnɛt ʔɨdʒːɨɡ tʼɛkʼːaˈmi nɛw] (bey-yeh-k'eh-NOO t'uh-WAHT beh-wah-NAH meh-wahn-YAH gen-DAH woos-T' meh-wahn-YET lel-lub-B t'ayn-nun-NET uhj-JUG t'ehk'-K'AH-mee now)",
          "translation": "Swimming every morning in a swimming pool is extremely useful for heart health."
        }
      ],
      "mnemonics": [
        "Sports Array: እግር ኳስ (Football) + ሩጫ (Running) + ዋና (Swimming) + ብስክሌት (Cycling)!"
      ],
      "culturalNotes": [
        "ኢትዮጵያ በዓለም አቀፍ ኦሊምፒክ ውድድሮች በረጅም ርቀት ሩጫ (በአበበ ቢቂላ፣ ኃይሌ ገብረስላሴ፣ ደራርቱ ቱሉ እና ቀነኒሳ በቀለ) ከፍተኛ ዝናን ያተረፈች ሀገር ናት።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Football and running» የሚለውን በአማርኛ ትክክለኛ የስፖርት ስሞች የያዘው የትኛው ነው?",
          "options": [
            "እግር ኳስ እና ሩጫ (Football and running - Correct major sports nouns)",
            "ጠረጴዛ እና ወንበር",
            "መጽሐፍ እና ደብተር",
            "ታክሲ እና ባቡር"
          ],
          "answerIndex": 0,
          "explanation": "«እግር ኳስ» እና «ሩጫ» ሁለቱን ዋና የስፖርት አይነቶች ያመለክታሉ።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'They swim in the pool' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "በገንዳው ውስጥ ይዋኛሉ። (They swim in the pool - Accurate swimming action)",
            "እግር ኳስ ይጫወታሉ።",
            "መጽሐፍ ያነባሉ።",
            "ምግብ ያበስላሉ።"
          ],
          "answerIndex": 0,
          "explanation": "«ይዋኛሉ» የመዋኘት ተግባርን ለሦስተኛ መደብ ብዙ በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ዋና ዋና የስፖርት አይነቶችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "እግር ኳስ፣ ሩጫ፣ ቅርጫት ኳስ፣ መረብ ኳስ፣ ዋና እና ብስክሌት መንዳት።",
            "እንጀራ፣ ወጥ እና ዳቦ።",
            "ቀሚስ፣ ሱሪ እና ጫማ።",
            "በአማርኛ የስፖርት ስሞች የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የስፖርት አይነቶችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እግር ኳስ / Football, soccer' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "እግር ኳስ",
            "እግር ኳስ"
          ],
          "explanation": "ትክክለኛው ቃል «እግር ኳስ» (Əgər kwas) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u12-l2": {
    "id": "am-u12-l2",
    "subject": "amharic",
    "unit": 12,
    "lessonNumber": 2,
    "title": "የትርፍ ጊዜ ማሳለፊያዎች እና ተግባራት (Hobbies & Leisure Pastimes)",
    "level": "A2",
    "objective": "የትርፍ ጊዜ ተግባራትን (ሙዚቃ ማዳመጥ፣ መጽሐፍ ማንበብ፣ ፊልም ማየት፣ ሥዕል መሳል፣ ፎቶግራፍ ማንሳት) መግለጽ።",
    "presentation": {
      "explanation": "የትርፍ ጊዜ ማሳለፊያዎች እና የትርፍ ሰዓት ተግባራት:\n\n፩. የዕውቀትና የጥበብ ተግባራት:\n- መጽሐፍ ማንበብ: አዳዲስ ዕውቀቶችንና ታሪኮችን ለመገብየት ይጠቅማል።\n- ሥዕል መሳል: የውስጥ ስሜትንና ውበትን በቀለማት የመግለጽ ጥበብ ነው።\n- ፎቶግራፍ ማንሳት: የማይረሱ ትዝታዎችን በምስል የማስቀረት ተግባር ነው።\n\n፪. የመዝናኛና የዕረፍት ተግባራት:\n- ሙዚቃ ማዳመጥ: አዕምሮን ለማረጋጋትና ለማዝናናት ይረዳል።\n- ፊልም ማየት: በሲኒማ ወይም በቤት ውስጥ ከወዳጆች ጋር የሚደረግ መዝናኛ ነው።\n- የአትክልት እንክብካቤ: አበቦችንና ዛፎችን በመንከባከብ ጊዜን ማሳለፍ ነው።\n\n፫. ሰዋሰዋዊ መዋቅር:\n«በትርፍ ጊዜዬ መጽሐፍ ማንበብ እመርጣለሁ» በማለት የግል ምርጫን መግለጽ ይቻላል።",
      "examples": [
        {
          "target": "በትርፍ ጊዜዬ የኢትዮጵያን ታሪክ የሚያወሱ ድንቅ መጻሕፍትን ማንበብ እወዳለሁ።",
          "reading": "Bätərf gizeye yä-Ityop’yan tarik yämmiyawäsu dənq mäs’ahəftən manbäb əwädallähu. [bɛtɨrf ɡizeˈje jɛʔitjoˈpʼjan taˈrik jɛmːijaˈwɛsu dɨnkʼ mɛsˤaˈhɨftɨn manˈbɛb ʔɨwɛˈdalːɛhu] (beh-TURF gee-ZAY-yay yeh-eet-YOHP-yahn tah-REEK yem-mee-yah-WEH-soo dunk' meh-TS'AH-huf-tun mahn-BEB uh-wed-DAHL-leh-hoo)",
          "translation": "In my spare time, I love reading wonderful books that narrate Ethiopian history."
        },
        {
          "target": "እሷ ማታ ማታ ባህላዊ የክራርና የመሰንቆ ሙዚቃዎችን በስልኳ ታዳምጣለች።",
          "reading": "Əsswa mata mata bahəlawi yäkərarənna yämäsanqo muziqawoččən bäsəlkwa taddammət’alläčč. [ʔɨsːwa maˈta maˈta bahɨlaˈwi jɛkɨraˈrɨnːa jɛmɛsanˈkʼo muzikʼaˈwotʃːɨn bɛsɨlˈkʷa tadːamːɨˈtʼalːɛtʃː] (us-SWAH mah-TAH mah-TAH bah-huh-LAH-wee yeh-kuh-RAH-run-nah yeh-meh-sahn-K'OH moo-zee-k'ah-wohch-CHUN beh-sul-KWAH tahd-dahm-muh-T'AHL-lehch)",
          "translation": "In the evenings, she listens to traditional Krar and Masenqo music on her phone."
        },
        {
          "target": "ወጣቱ ሰዓሊ ውብ የተፈጥሮ ገጽታዎችን በሸራ ላይ በቀለማት ይስላል።",
          "reading": "Wät’t’atu sä'ali wəbb yätäfät’ro gäs’t’awoččən bäšära lay bäqälämat yəsəlall. [wɛtʼːaˈtotʃːu sɛʔaˈli wɨbː jɛtɛfɛtʼˈro ɡɛsˤtʼaˈwotʃːɨn bɛʃɛˈra laj bɛkʼɛlɛˈmat jɨsɨˈlalː] (wet'-t'ah-TOO seh-ah-LEE wub-B yeh-teh-fet'-ROH gets'-t'ah-wohch-CHUN beh-sheh-RAH lye beh-k'eh-leh-MAHT yuh-suh-LAHL)",
          "translation": "The young painter draws beautiful natural landscapes on canvas with colors."
        }
      ],
      "mnemonics": [
        "Hobby Harmony: ማንበብ (Read) + ማዳመጥ (Listen) + መሳል (Paint) + ማየት (Watch)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህላዊ የሙዚቃ መሳሪያዎች (ክራር፣ መሰንቆ፣ ዋሽንት እና ከበሮ) ለዘመናት የህዝቡ የደስታና የሃዘን መግለጫ ሆነው አገልግለዋል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Reading books in free time» የሚለውን በአማርኛ ትክክለኛ አገላለጽ የያዘው የትኛው ነው?",
          "options": [
            "በትርፍ ጊዜ መጽሐፍ ማንበብ (Reading books in free time - Correct hobby phrase)",
            "ሥራ መፈለግ",
            "ሆስፒታል መሄድ",
            "ታክሲ መጠበቅ"
          ],
          "answerIndex": 0,
          "explanation": "«በትርፍ ጊዜ መጽሐፍ ማንበብ» የትርፍ ሰዓት የንባብ ልማድን በትክክል ይገልጻል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'She listens to traditional music' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ባህላዊ ሙዚቃ ታዳምጣለች። (She listens to traditional music - Accurate listening activity)",
            "ሙዚቃ አትወድም።",
            "መጽሐፍ ትጽፋለች።",
            "ምግብ አትበላም።"
          ],
          "answerIndex": 0,
          "explanation": "«ባህላዊ ሙዚቃ ታዳምጣለች» የሙዚቃ ማዳመጥን ድርጊት በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የትርፍ ጊዜ ተግባራትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "መጽሐፍ ማንበብ፣ ሙዚቃ ማዳመጥ፣ ፊልም ማየት፣ ሥዕል መሳል እና ፎቶግራፍ ማንሳት።",
            "ክኒን መዋጥ እና መርፌ መወጋት።",
            "ትኬት መቁረጥ እና ወያላ መጥራት።",
            "በአማርኛ የመዝናኛ ቃላት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የትርፍ ጊዜ ማሳለፊያዎችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ማንበብ / Reading, to read' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ማንበብ"
          ],
          "explanation": "ትክክለኛው ቃል «ማንበብ» (Manbäb) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u12-l3": {
    "id": "am-u12-l3",
    "subject": "amharic",
    "unit": 12,
    "lessonNumber": 3,
    "title": "የፍላጎት እና የምርጫ መግለጫዎች (Expressing Preferences: «እወዳለሁ»፣ «እመርጣለሁ»፣ «ይሻለኛል»)",
    "level": "A2",
    "objective": "ፍላጎትን እና ምርጫን («እወዳለሁ» / «አልወድም» / «እመርጣለሁ» / «ይሻለኛል») መግለጽ።",
    "presentation": {
      "explanation": "የፍላጎት እና የምርጫ መግለጫ ሰዋሰዋዊ ስርዓት:\n\n፩. የመውደድ ግስ እርባታ:\n- እኔ: እወዳለሁ (በጣም ደስ ይለኛል) / አልወድም (አልፈልግም)\n- አንተ: ትወዳለህ / አትወድም\n- አንቺ: ትወጃለሽ / አትወጂም\n- እሱ: ይወዳል / አይወድም\n- እሷ: ትወዳለች / አትወድም\n- እኛ: እንወዳለን / አንወድም።\n\n፪. የምርጫና የውሳኔ ቃላት:\n- መምረጥ: እመርጣለሁ (ከሌላው አስበልጣለሁ)\n- መሻል: ይሻለኛል (የተሻለ ሆኖ አግኝቼዋለሁ)።\n\n፫. የአረፍተ ነገር መዋቅር:\nስም ወይም ማስረጃ ግስ + እወዳለሁ / እመርጣለሁ:\n«እግር ኳስ መጫወት እወዳለሁ»፣ «ሻይ ከመጠጣት ቡና መጠጣት ይሻለኛል»።",
      "examples": [
        {
          "target": "እኔ ቅዳሜ ዕለት ከጓደኞቼ ጋር ኳስ መጫወት በጣም እወዳለሁ።",
          "reading": "Əne Qədame ʿəlät kägwadänyočče gara kwas mäč’awät bät’am əwädallähu. [ʔɨne kʼɨdaˈme ʔɨˈlɛt kɛɡʷadɛˈɲotʃːe ɡaˈra kʷas mɛtʃʼaˈwɛt bɛtʼam ʔɨwɛˈdalːɛhu] (uh-NAY k'uh-dah-MAY uh-LET keh-gwah-den-yohch-CHAY gah-RAH kwas meh-ch'ah-WET beh-T'AHM uh-wed-DAHL-leh-hoo)",
          "translation": "I really love playing football with my friends on Saturdays."
        },
        {
          "target": "እሷ ፊልም ከማየት ይልቅ መጽሐፍ ማንበብን ትመርጣለች።",
          "reading": "Əsswa film kämamyät yələq mäs’haf manbäbən təmärt’alläčč. [ʔɨsːwa film kɛmamˈjɛt jɨˈlɨkʼ mɛsˤhaf manˈbɛbɨn tɨmɛrˈtʼalːɛtʃː] (us-SWAH film keh-mahm-YET yuh-LUK' meh-TS'AHF mahn-BEH-bun tuh-mer-T'AHL-lehch)",
          "translation": "Rather than watching movies, she prefers reading books."
        },
        {
          "target": "ዛሬ በጣም ስለደከመኝ ወደ ውጭ ከመውጣት ቤት ውስጥ ማረፍ ይሻለኛል።",
          "reading": "Zare bät’am sälädäkkämäny wädä wəč’ kämäwt’at bet wəst’ maräf yəššalänyall. [zaˈre bɛtʼam sɨlɛdɛkːɛˈmɛɲ wɛdɛ wɨtʃʼ kɛmɛwtʼat bet wɨstʼ maˈrɛf jɨʃːaˈlɛɲal] (zah-RAY beh-T'AHM suh-leh-dek-keh-MENY weh-DEH wuch' keh-mew-T'AHT bayt woos-T' mah-REF yush-shah-len-YAHL)",
          "translation": "Because I am very tired today, resting at home is better for me than going outside."
        }
      ],
      "mnemonics": [
        "Preference Scale: እወዳለሁ (I like) -> እመርጣለሁ (I prefer) -> ይሻለኛል (It's better for me)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ እንግዳ ሲጋበዝ 'ምን ልጋብዝህ/ሽ? ሻይ ወይስ ቡና?' ተብሎ ሲጠየቅ 'የፈቀድከውን/የፈቀድሽውን' ወይም 'ቡና ይሻለኛል' ማለት የተለመደ ጨዋነት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«I prefer reading» የሚለውን በአማርኛ ትክክለኛ የምርጫ አገባብ የገለጸው የትኛው ነው?",
          "options": [
            "ማንበብን እመርጣለሁ። (I prefer reading - Correct preference structure with እመርጣለሁ)",
            "ማንበብ አልችልም",
            "መጽሐፍ የለኝም",
            "አላነብም"
          ],
          "answerIndex": 0,
          "explanation": "«ማንበብን እመርጣለሁ» ከሌሎች ነገሮች ይልቅ ንባብን መምረጥን በትክክል ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'He doesn't like watching sports' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ስፖርት ማየት አይወድም። (He doesn't like watching sports - Accurate negative preference)",
            "ስፖርት ይወዳል",
            "ስፖርት ይጫወታል",
            "ስፖርት ሮጠ"
          ],
          "answerIndex": 0,
          "explanation": "«አይወድም» ለሦስተኛ መደብ ተባዕታይ ያለመውደድን በትክክል ይገልጻል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የፍላጎት እና የምርጫ መግለጫዎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "እወዳለሁ፣ አልወድም፣ እመርጣለሁ እና ይሻለኛል።",
            "ሄድኩ፣ መጣሁ እና በላሁ።",
            "ትላንት፣ ዛሬ እና ነገ።",
            "በአማርኛ የምርጫ ቃላት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የምርጫና የፍላጎት መግለጫዎችን ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እወዳለሁ / I like, I love' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "እወዳለሁ"
          ],
          "explanation": "ትክክለኛው ቃል «እወዳለሁ» (Əwädallähu) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u12-l4": {
    "id": "am-u12-l4",
    "subject": "amharic",
    "unit": 12,
    "lessonNumber": 4,
    "title": "የባህል ስፖርቶች እና ጨዋታዎች (Traditional Ethiopian Sports & Games)",
    "level": "A2",
    "objective": "የባህል ስፖርቶችን (ገና፣ ገበጣ፣ የፈረስ ጉግስ፣ ሻጥር) እና ባህላዊ አከባበራቸውን መረዳትና መግለጽ።",
    "presentation": {
      "explanation": "የኢትዮጵያ ባህላዊ ስፖርቶች እና ጨዋታዎች:\n\n፩. የገና ጨዋታ:\n- በገና በዓል ወቅት የሚጫወቱት ባህላዊ የሆኪ ዓይነት ጨዋታ ነው።\n- «በገና ጨዋታ አይቆጡም ጌታ» የሚል ታዋቂ ባህላዊ አባባል አለው።\n\n፪. ገበጣ እና ሻጥር:\n- ገበጣ: በእንጨት ወይም በድንጋይ ጉድጓዶች ውስጥ ጠጠሮችን በማንቀሳቀስ የሚጫወቱት ጥንታዊ የስትራቴጂ ጨዋታ ነው።\n- ሻጥር: ባህላዊ የቼዝ ጨዋታ ሲሆን ከፍተኛ የማሰብ ችሎታን ይጠይቃል።\n\n፫. የፈረስ ጉግስ:\n- በፈረስ ላይ ሆነው ጦር በመወርወርና በጋሻ በመከላከል የሚካሄድ የጀግንነትና የፈረሰኝነት ባህላዊ ስፖርት ነው።\n\n፬. ባህላዊ ፋይዳ:\nእነዚህ ጨዋታዎች የህዝቡን አንድነት፣ ብልሃትና አካላዊ ብርታት ያዳብራሉ።",
      "examples": [
        {
          "target": "በገና በዓል ዕለት ወጣቶች በሜዳ ላይ ተሰባስበው ባህላዊ የገና ጨዋታን በደመቀ ሁኔታ ይጫወታሉ።",
          "reading": "Bä-Gänna bä'al ʿəlät wät’t’atočč bämeda lay täsäbasəbäw bahəlawi yä-Gänna č’äwatan bädämäqä huneta yəč’awwätallu. [bɛɡɛnːa bɛʔal ʔɨlɛt wɛtʼːaˈtotʃː bɛmeˈda laj tɛsɛbaˈsɨbɛw bahɨlaˈwi jɛɡɛnːa tʃʼɛwaˈtan bɛdɛmɛˈkʼɛ huneˈta jɨtʃʼawːɛˈtalːu] (beh-gen-NAH beh-AHL uh-LET wet'-t'ah-TOHCH beh-may-DAH lye teh-seh-bah-suh-BEW bah-huh-LAH-wee yeh-gen-NAH ch'eh-wah-TAHN beh-deh-meh-K'EH hoo-nay-TAH yuh-ch'ow-weh-TAHL-loo)",
          "translation": "On Genna (Christmas) holiday, youth gather in the open field and play the traditional Genna game vividly."
        },
        {
          "target": "ሽማግሌዎቹ ከዛፍ ጥላ ሥር ተቀምጠው የገበጣ እና የሻጥር ጨዋታዎችን በጥልቀት ይጫወታሉ።",
          "reading": "Šəmagəllewočču käzaf t’əla sər täqämt’äw yä-Gäbät’a ənna yä-Šat’ər č’äwatawoččən bät’əlqät yəč’awwätallu. [ʃɨmaɡɨlːeˈwotʃːu kɛzaf tʼɨla sɨr tɛkʼɛmˈtʼɛw jɛɡɛbɛˈtʼa ɨnːa jɛʃaˈtʼɨr tʃʼɛwataˈwotʃːɨn bɛtʼɨlˈkʼɛt jɨtʃʼawːɛˈtalːu] (shuh-mah-guhl-lay-wohch-CHOO keh-ZAHF t'uh-LAH sur teh-k'em-T'EW yeh-geh-beh-T'AH un-nah yeh-shah-T'UR ch'eh-wah-tah-wohch-CHUN beh-t'ul-K'ET yuh-ch'ow-weh-TAHL-loo)",
          "translation": "The elders sit under the tree shade and deeply play the Gebet'a and Shatur games."
        },
        {
          "target": "በጥምቀት በዓል ላይ ፈረሰኞቹ በፈረስ ጉግስ ትርዒት ታላቅ ጀግንነትንና ችሎታን ያሳያሉ።",
          "reading": "Bä-T’əmqät bä'al lay färäsänyočču bäfäräs gugs tər'it talaq ğägnənnätənna čəlotan yasayyallu. [bɛtʼɨmˈkʼɛt bɛʔal laj fɛrɛsɛˈɲotʃːu bɛfɛˈrɛs ɡuɡs tɨrʔit taˈlakʼ dʒɛɡnɨnˈnɛtɨnːa tʃɨloˈtan jasaˈjːalːu] (beh-t'um-K'ET beh-AHL lye feh-reh-sen-yohch-CHOO beh-feh-RES googs tur-EET tah-LAHK' jeg-nun-NET-un-nah chuh-loh-TAHN yah-sye-YAHL-loo)",
          "translation": "On the Timkat holiday, the horsemen display great bravery and skill in the equestrian Gugs spectacle."
        }
      ],
      "mnemonics": [
        "Heritage Games: ገና (Hockey) + ገበጣ (Mancala) + ጉግስ (Horsemanship) + ሻጥር (Chess)!"
      ],
      "culturalNotes": [
        "የገና ጨዋታ በኢትዮጵያ ከሁለት ሺህ ዓመታት በላይ ዕድሜ ያለው ሲሆን በገና በዓል ዕለት እኩልነትንና ማህበራዊ ነፃነትን የሚያንጸባርቅ ታላቅ ባህላዊ ትውፊት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በገና በዓል ወቅት የሚጫወተው ታዋቂው የኢትዮጵያ ባህላዊ ስፖርት የትኛው ነው?",
          "options": [
            "የገና ጨዋታ (Genna traditional hockey game - Authentic cultural sport)",
            "ቅርጫት ኳስ",
            "መረብ ኳስ",
            "ቴኒስ"
          ],
          "answerIndex": 0,
          "explanation": "«የገና ጨዋታ» በገና ወቅት በባህል የሚዘወተር ጥንታዊ የሆኪ ዓይነት ጨዋታ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Elders play Gebet'a under the shade' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ሽማግሌዎች በጥላ ሥር ገበጣ ይጫወታሉ። (Elders play Gebet'a under the shade - Accurate cultural scene)",
            "ሽማግሌዎች ይሮጣሉ።",
            "ገበጣ መጫወት አይቻልም።",
            "ምንም ጨዋታ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ዓረፍተ ነገር ሽማግሌዎችን፣ ጥላንና የገበጣ ጨዋታን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የኢትዮጵያ ባህላዊ ስፖርቶችንና ጨዋታዎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "የገና ጨዋታ፣ ገበጣ፣ የፈረስ ጉግስ እና ሻጥር።",
            "እግር ኳስ እና ቴኒስ ብቻ።",
            "በኢትዮጵያ ባህላዊ ስፖርት የለም።",
            "መኪና መንዳት እና አውሮፕላን ማብረር።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና ባህላዊ ስፖርቶችንና ጨዋታዎችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ገበጣ / Gebeta, traditional Mancala game' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ገበጣ"
          ],
          "explanation": "ትክክለኛው ቃል «ገበጣ» (Gäbät’a) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u12-l5": {
    "id": "am-u12-l5",
    "subject": "amharic",
    "unit": 12,
    "lessonNumber": 5,
    "title": "የክፍል 12 አጠቃላይ ማጠቃለያ (Unit 12 Grand Synthesis & Leisure Activities Discourse)",
    "level": "A2",
    "objective": "ስፖርቶችን፣ የትርፍ ጊዜ ማሳለፊያዎችን፣ የምርጫ መግለጫዎችንና ባህላዊ ጨዋታዎችን ያቀናጀ የተሟላ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፲፪ አጠቃላይ ሰዋሰዋዊ ውህደት እና የመዝናኛ ተግባቦት ማጠቃለያ:\n\n፩. የስፖርት አይነቶች:\n- እግር ኳስ፣ ሩጫ፣ ቅርጫት ኳስ፣ መረብ ኳስ፣ ዋና፣ ብስክሌት።\n\n፪. የትርፍ ጊዜ ማሳለፊያዎች:\n- መጽሐፍ ማንበብ፣ ሙዚቃ ማዳመጥ፣ ፊልም ማየት፣ ሥዕል መሳል፣ ፎቶግራፍ ማንሳት።\n\n፫. የፍላጎትና የምርጫ መግለጫዎች:\n- እወዳለሁ፣ አልወድም፣ እመርጣለሁ፣ ይሻለኛል።\n\n፬. የባህል ስፖርቶች:\n- የገና ጨዋታ፣ ገበጣ፣ የፈረስ ጉግስ፣ ሻጥር።",
      "examples": [
        {
          "target": "በትርፍ ጊዜዬ እግር ኳስ መጫወትና መጽሐፍ ማንበብ እወዳለሁ፤ ጤናማ የአኗኗር ዘይቤም እከተላለሁ።",
          "reading": "Bätərf gizeye əgər kwas mäč’awätənna mäs’haf manbäb əwädallähu; t’enamma yä'anwawwar zäybem əkkättälallähu. [bɛtɨrf ɡizeˈje ʔɨɡr kʷas mɛtʃʼaˈwɛtɨnːa mɛsˤhaf manˈbɛb ʔɨwɛˈdalːɛhu tʼenaˈma jɛʔanwawːar zɛjˈbem ʔɨkːɛtːɛˈlalːɛhu] (beh-TURF gee-ZAY-yay ug-GUR kwas meh-ch'ah-WET-un-nah meh-TS'AHF mahn-BEB uh-wed-DAHL-leh-hoo; t'ay-nah-MAH yeh-ahn-wow-WAHR zey-BAY-m uhk-ket-teh-LAHL-leh-hoo)",
          "translation": "In my spare time, I love playing football and reading books; and I follow a healthy lifestyle."
        },
        {
          "target": "በበዓላት ወቅት ባህላዊ የገና ጨዋታን መመልከትና ከሽማግሌዎች ጋር ገበጣ መጫወት ታላቅ ደስታ ይሰጣል።",
          "reading": "Bäbä'alat wäqət bahəlawi yä-Gänna č’äwatan mämälkätənna käšəmagəllewočč gara Gäbät’a mäč’awät talaq dässəta yəsät’all. [bɛbɛʔaˈlat wɛkʼt bahɨlaˈwi jɛɡɛnːa tʃʼɛwaˈtan mɛmɛlˈkɛtɨnːa kɛʃɨmaɡɨlːeˈwotʃː ɡaˈra ɡɛbɛˈtʼa mɛtʃʼaˈwɛt taˈlakʼ dɛsːɨˈta jɨsɛˈtʼal] (beh-beh-ah-LAHT wehk'-T bah-huh-LAH-wee yeh-gen-NAH ch'eh-wah-TAHN meh-mel-KET-un-nah keh-shuh-mah-guhl-lay-wohch-CH gah-RAH geh-beh-T'AH meh-ch'ah-WET tah-LAHK' des-suh-TAH yuh-set'-TAHL)",
          "translation": "During holidays, watching the traditional Genna game and playing Gebet'a with the elders brings great joy."
        },
        {
          "target": "ስፖርት መሥራትና ጠቃሚ መዝናኛዎች የሰውን ልጅ አካልና አዕምሮ ያድሳሉ።",
          "reading": "Sport mäsratənna t’äqqami mäznanyaočč yäsäw ləğn akalənna a'əmron yaddəsallu. [sport mɛsˈratɨnːa tʼɛkʼːaˈmi mɛznaɲaˈwotʃː jɛsɛw lɨdʒn ʔaˈkalɨnːa ʔaʔɨmˈron jadːɨˈsalːu] (spohrt mes-RAHT-un-nah t'ehk'-k'ah-MEE mez-nahn-yah-wohch-CH yeh-SEW luhj-un ah-KAH-lun-nah ah-uhm-ROHN yahd-duh-SAHL-loo)",
          "translation": "Engaging in sports and worthwhile recreation rejuvenates the human body and mind."
        }
      ],
      "mnemonics": [
        "Leisure Sphere: Athletics (ስፖርት) + Arts (ጥበብ) + Choice (ምርጫ) + Heritage (ባህል)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ማህበረሰብ ውስጥ 'መጫወት፣ መሳቅና መደሰት ለጤና መድኃኒት ነው' ተብሎ ይታመናል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የስፖርትና የመዝናኛ አኗኗርን የሚያሳየው የትኛው ነው?",
          "options": [
            "ስፖርት እሠራለሁ፣ መጽሐፍ አነባለሁ፣ እንዲሁም በትርፍ ጊዜዬ እዝናናለሁ። (Complete active leisure synthesis)",
            "ምንም ስፖርት አልሠራም",
            "መጽሐፍ አልወድም",
            "ቤት ብቻ እቀመጣለሁ"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ስፖርትን፣ ንባብንና መዝናናትን በአንድነት ያጠቃልላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ባህላዊ ጨዋታዎችንና ዘመናዊ ስፖርቶችን ያጣመረው ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "እግር ኳስ መጫወትም ሆነ ገበጣ መጫወት ደስ ይለኛል። (I enjoy playing both football and Gebet'a - Integrated sports sentence)",
            "ስፖርት አልወድም።",
            "ገበጣ ጨዋታ አይደለም።",
            "ኳስ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ እግር ኳስንና ገበጣን በአንድ ላይ በማጣመር ትክክለኛውን ትርጉም ይሰጣል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 12 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "ዋና ዋና ስፖርቶች፣ የትርፍ ጊዜ ማሳለፊያዎች፣ የፍላጎትና የምርጫ መግለጫዎች (እወዳለሁ፣ እመርጣለሁ)፣ እንዲሁም የኢትዮጵያ ባህላዊ ጨዋታዎች ተካተዋል።",
            "ይህ ክፍል ስለ ፖለቲካ ብቻ ነው።",
            "በአማርኛ የመዝናኛ ስሞች የሉም።",
            "ሁሉም ስፖርቶች አንድ ዓይነት ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 12ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ስፖርት / Sport' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ስፖርት"
          ],
          "explanation": "ትክክለኛው ቃል «ስፖርት» (Sport) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u13-l1": {
    "id": "am-u13-l1",
    "subject": "amharic",
    "unit": 13,
    "lessonNumber": 1,
    "title": "ዋና ዋና ሙያዎች እና የሙያ ስሞች (Major Professions & Occupations)",
    "level": "A2",
    "objective": "የተለመዱ ሙያዎችን (መምህር፣ ሐኪም/ዶክተር፣ መሃንዲስ፣ ነጋዴ፣ ሹፌር፣ ገበሬ፣ ጠበቃ) መለየትና መጠቀም።",
    "presentation": {
      "explanation": "ዋና ዋና ሙያዎች እና የሙያ ስሞች:\n\n፩. የህዝብ አገልግሎት እና የጤና ሙያዎች:\n- መምህር / መምህርት: ተማሪዎችን የሚያስተምር / የምታስተምር።\n- ሐኪም (ዶክተር) / ነርስ: ህሙማንን የሚያክም / የምታክም የጤና ባለሙያ።\n- ጠበቃ: በህግ ጉዳዮች ላይ ሰዎችን የሚከላከልና ምክር የሚሰጥ ባለሙያ።\n\n፪. የቴክኒክ፣ የንግድ እና የእርሻ ሙያዎች:\n- መሃንዲስ: ህንጻዎችን፣ መንገዶችን እና ማሽኖችን የሚነድፍና የሚገነባ።\n- ነጋዴ: ዕቃዎችንና አገልግሎቶችን የሚገዛና የሚሸጥ።\n- ገበሬ: ሰብል የሚያመርትና እንስሳትን የሚያረባ።\n- ሹፌር: ተሽከርካሪዎችን የሚያሽከረክር።\n\n፫. የጾታ አገባብ:\nተባዕታይ: መምህር፣ ዶክተር፣ መሃንዲስ\nአንስታይ: መምህርት፣ ዶክተሯ፣ መሃንዲሷ።",
      "examples": [
        {
          "target": "መምህሩ ተማሪዎቹን በከፍተኛ ትጋትና ፍቅር ያስተምራል።",
          "reading": "Mämhiru tämariwoččun bäkäftänya təgatənna fəqər yastämərall. [mɛmˈhɨru tɛmariˈwotʃːun bɛkɛfˈtɛɲa tɨˈɡatɨnːa fɨˈkʼɨr jastɛmɨˈralː] (mem-huh-ROO teh-mah-ree-wohch-CHOON beh-kef-TEN-yah tuh-GAHT-un-nah fuh-K'UR yahs-teh-muh-RAHL)",
          "translation": "The teacher teaches his students with great dedication and love."
        },
        {
          "target": "ሐኪሟ በሆስፒታል ውስጥ ህሙማንን በትኩረት ታክማለች።",
          "reading": "Hakimwa bähospital wəst’ həmumanən bätəkkuhrät takmalläčč. [hakiˈmʷa bɛhospiˈtal wɨstʼ hɨmuˈmanɨn bɛtɨkːuˈrɛt takˈmalːɛtʃː] (hah-keem-WAH beh-hohs-pee-TAHL woos-T' huh-moo-MAH-nun beh-tuk-koo-RET tahk-MAHL-lehch)",
          "translation": "The female physician treats patients attentively in the hospital."
        },
        {
          "target": "መሃንዲሱ አዲስ የከተማ ድልድይና ዘመናዊ ህንጻዎችን ይነድፋል።",
          "reading": "Mähandisu addis yäkätäma dəldəyənna zämänawi hənts’awoččən yənädfall. [mɛhandiˈsu ʔadːis jɛkɛtɛˈma dɨlˈdɨjɨnːa zɛmɛnaˈwi hɨntsʼaˈwotʃːɨn jɨnɛdˈfalː] (meh-hahn-dee-SOO ahd-DEES yeh-keh-teh-MAH dul-DUY-un-nah zeh-meh-nah-WEE hun-ts'ah-wohch-CHUN yuh-ned-FAHL)",
          "translation": "The engineer designs a new city bridge and modern buildings."
        }
      ],
      "mnemonics": [
        "Profession Pillars: መምህር (Teacher) + ሐኪም (Doctor) + መሃንዲስ (Engineer) + ነጋዴ (Merchant)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ማህበረሰብ ውስጥ መምህራን እና የህክምና ባለሙያዎች በታላቅ ክብርና አክብሮት ይታያሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Teacher, doctor, and engineer» የሚለውን በአማርኛ ትክክለኛ የሙያ ስሞች የያዘው የትኛው ነው?",
          "options": [
            "መምህር፣ ሐኪም እና መሃንዲስ (Teacher, doctor, and engineer - Correct professional nouns)",
            "ወንበር፣ ጠረጴዛ እና በር",
            "ዳቦ፣ ወተት እና ስጋ",
            "ባቡር፣ አውቶቡስ እና ታክሲ"
          ],
          "answerIndex": 0,
          "explanation": "«መምህር»፣ «ሐኪም» እና «መሃንዲስ» ሦስቱን ዋና ዋና የሙያ መጠሪያዎች ያመለክታሉ።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'The farmer produces crops' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ገበሬው ሰብል ያመርታል። (The farmer produces crops - Accurate agricultural role)",
            "ገበሬው መኪና ይነዳል",
            "ገበሬው ህክምና ይሰጣል",
            "ገበሬው ፎቶ ያነሳል"
          ],
          "answerIndex": 0,
          "explanation": "«ገበሬው ሰብል ያመርታል» የእርሻ ሙያንና ተግባርን በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ዋና ዋና የሙያ መጠሪያዎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "መምህር፣ ሐኪም፣ መሃንዲስ፣ ነጋዴ፣ ሹፌር፣ ገበሬ እና ጠበቃ።",
            "ቤት፣ በር፣ መስኮት እና ጣሪያ።",
            "ጠዋት፣ ከሰዓት እና ማታ።",
            "በአማርኛ የሙያ ስሞች የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የሙያ ዓይነቶችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'መምህር / Teacher, instructor' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "መምህር"
          ],
          "explanation": "ትክክለኛው ቃል «መምህር» (Mämhir) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u13-l2": {
    "id": "am-u13-l2",
    "subject": "amharic",
    "unit": 13,
    "lessonNumber": 2,
    "title": "የሥራ ቦታዎች እና የሥራ አካባቢ (Workplaces & Professional Settings)",
    "level": "A2",
    "objective": "የሥራ ቦታዎችን (ቢሮ፣ ሆስፒታል፣ ትምህርት ቤት፣ ፋብሪካ፣ ባንክ፣ እርሻ) መግለጽ።",
    "presentation": {
      "explanation": "የሥራ ቦታዎች እና የሥራ አካባቢዎች:\n\n፩. ዋና ዋና የሥራ ቦታዎች:\n- ቢሮ: አስተዳደራዊና የጽሕፈት ሥራዎች የሚከናወኑበት ቦታ ነው።\n- ሆስፒታል / ክሊኒክ: የህክምና አገልግሎት የሚሰጥበት ቦታ ነው።\n- ትምህርት ቤት / ዩኒቨርሲቲ: የማስተማርና የምርምር ተግባር የሚከናወንበት ነው።\n- ባንክ: የገንዘብና የፋይናንስ አገልግሎት የሚሰጥበት ተቋም ነው።\n- ፋብሪካ: የተለያዩ የኢንዱስትሪ ምርቶች የሚመረቱበት ቦታ ነው።\n- እርሻ: ሰብል የሚዘራበትና የሚሰበሰብበት ሰፊ መሬት ነው።\n\n፪. ሰዋሰዋዊ መዋቅር:\n«በ... ውስጥ መሥራት» (To work in...):\n- «እሷ በባንክ ውስጥ ትሠራለች»\n- «እሱ በፋብሪካ ውስጥ መሐንዲስ ሆኖ ይሠራል»።",
      "examples": [
        {
          "target": "እህቴ በአንድ ትልቅ ዓለም አቀፍ ባንክ ውስጥ በሂሳብ ሹምነት ትሠራለች።",
          "reading": "Əhəte bā'and təlləq ʿaläm aqäf bank wəst’ bähisab šummənnät təsärralläčč. [ʔɨhɨˈte bɛʔand tɨlːɨkʼ ʔaˈlɛm ʔaˈkʼɛf bank wɨstʼ bɛhisab ʃumːɨnˈnɛt tɨsɛrːalːɛtʃː] (uh-huh-TAY beh-AHND tul-LUK' ah-LEM ah-K'EF bahnk woos-T' beh-hee-SAHB shoom-nun-NET tuh-ser-RAHL-lehch)",
          "translation": "My sister works as an accountant in a large international bank."
        },
        {
          "target": "ሰራተኞቹ በፋብሪካው ውስጥ አዳዲስ አልባሳትን በከፍተኛ ጥራት ያመርታሉ።",
          "reading": "Särratänyočču bäfabrika wəst’ addadis albasatən bäkäftänya t’ərat yamärtallu. [sɛrːatɛˈɲotʃːu bɛfabriˈka wɨstʼ ʔadːaˈdis ʔalbaˈsatɨn bɛkɛfˈtɛɲa tʼɨˈrat jamɛrˈtalːu] (ser-rah-ten-yohch-CHOO beh-fahb-REE-kah woos-T' ahd-dah-DEES ahl-bah-SAH-tun beh-kef-TEN-yah t'uh-RAHT yah-mer-TAHL-loo)",
          "translation": "The workers manufacture new clothing with high quality in the factory."
        },
        {
          "target": "ጠበቃው በከፍተኛ ፍርድ ቤት ውስጥ የደንበኞቹን መብት በህግ ይከራከራል።",
          "reading": "T’äbäqaw bäkäftänya fərd bet wəst’ yädänbänyoččun mäbt bähəgg yəkkärakkärall. [tʼɛbɛˈkʼaw bɛkɛfˈtɛɲa fɨrd bet wɨstʼ jɛdɛnbɛˈɲotʃːun mɛbt bɛhɨɡː jɨkːɛrakːɛˈralː] (t'eh-beh-K'AH-woo beh-kef-TEN-yah furd bayt woos-T' yeh-den-ben-yohch-CHOON mebt beh-HUG yook-keh-rahk-keh-RAHL)",
          "translation": "The lawyer argues his clients' rights in the high court according to the law."
        }
      ],
      "mnemonics": [
        "Workplaces: ቢሮ (Office) + ባንክ (Bank) + ፋብሪካ (Factory) + ፍርድ ቤት (Court)!"
      ],
      "culturalNotes": [
        "በአዲስ አበባ እና በሌሎች የኢትዮጵያ ከተሞች አዳዲስ የኢንዱስትሪ ፓርኮችና የንግድ ማዕከላት በርካታ የሥራ ዕድሎችን እየፈጠሩ ይገኛሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«She works in the bank» የሚለውን በአማርኛ ትክክለኛ አረፍተ ነገር የገለጸው የትኛው ነው?",
          "options": [
            "በባንክ ውስጥ ትሠራለች። (She works in the bank - Accurate workplace preposition and verb)",
            "ወደ ባንክ ሄደች",
            "ባንክ አልሄደችም",
            "ባንክ ዘግቷል"
          ],
          "answerIndex": 0,
          "explanation": "«በባንክ ውስጥ ትሠራለች» የሥራ ቦታውንና ድርጊቱን በትክክል ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'In the office and factory' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "በቢሮ እና በፋብሪካ ውስጥ (In the office and in the factory - Correct location nouns)",
            "በመንገድ ላይ",
            "በቤት ውስጥ",
            "በገበያ ላይ"
          ],
          "answerIndex": 0,
          "explanation": "«በቢሮ እና በፋብሪካ ውስጥ» ሁለቱን የስራ አካባቢዎች ያመለክታል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የሥራ ቦታዎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ቢሮ፣ ባንክ፣ ሆስፒታል፣ ትምህርት ቤት፣ ፋብሪካ፣ ፍርድ ቤት እና እርሻ።",
            "አልጋ፣ ቁምሳጥን እና ሶፋ።",
            "ወጥ፣ ዶሮ እና ሩዝ።",
            "በአማርኛ የሥራ ቦታ ስሞች የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የሥራ ቦታዎችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቢሮ / Office' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቢሮ"
          ],
          "explanation": "ትክክለኛው ቃል «ቢሮ» (Biro) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u13-l3": {
    "id": "am-u13-l3",
    "subject": "amharic",
    "unit": 13,
    "lessonNumber": 3,
    "title": "የሥራ ተግባራት እና የዕለት ተዕለት ኃላፊነቶች (Job Tasks & Professional Responsibilities)",
    "level": "A2",
    "objective": "የሥራ ኃላፊነቶችን (ማስተማር፣ ማከም፣ ማስተዳደር፣ ሪፖርት ማዘጋጀት፣ ስብሰባ መምራት) መግለጽ።",
    "presentation": {
      "explanation": "የሥራ ተግባራት እና የኃላፊነት መግለጫዎች:\n\n፩. የዕለት ተዕለት ተግባራት:\n- ማስተማር: ዕውቀትን ለተማሪዎች የማስተላለፍ ተግባር ነው።\n- ማከም: ህሙማንን የመመርመርና የመፈወስ ኃላፊነት ነው።\n- ማስተዳደር: ሰራተኞችንና ፕሮጀክቶችን የመምራት ተግባር ነው።\n- ሪፖርት ማዘጋጀት: የሥራ አፈጻጸምን በጽሑፍ የማቅረብ ኃላፊነት ነው።\n- ስብሰባ መምራት: ውሳኔዎችን በጋራ የማሳለፍ ሂደት ነው።\n\n፪. ሰዋሰዋዊ መዋቅር:\n«ኃላፊነቴ ... ነው» (My responsibility is...):\n- «የእኔ ኃላፊነት ፕሮጀክቱን ማስተባበር ነው»\n- «የዕለት ተዕለት ሥራው ሪፖርት መጻፍን ያካትታል»።",
      "examples": [
        {
          "target": "የሥራ አስኪያጁ ዋና ኃላፊነት የሰራተኞችን ተግባር ማስተባበር እና ስብሰባዎችን መምራት ነው።",
          "reading": "Yä-śəra askiyyağu wana halaﬁnnät yäsärratänyoččun tägbar mastäbabbärənna səbsäbawoččən mämrat näw. [jɛsɨra ʔaskidʒaˈdʒu waˈna halafiˈnːɛt jɛsɛrːatɛˈɲotʃːun tɛɡˈbar mastɛbabːɛˈrɨnːa sɨbsɛbaˈwotʃːɨn mɛmˈrat nɛw] (yeh-suh-RAH ahs-kee-yah-JOO wah-NAH hah-lah-feen-NET yeh-ser-rah-ten-yohch-CHOON teg-BAHR mahs-teh-bahb-beh-run-nah sub-seh-bah-wohch-CHUN mem-RAHT now)",
          "translation": "The manager's main responsibility is to coordinate the staff's tasks and lead meetings."
        },
        {
          "target": "እኔ በየሳምንቱ መጨረሻ የሥራ ክንውን ዝርዝር ሪፖርት አዘጋጅቼ ለኃላፊዬ አቀርባለሁ።",
          "reading": "Əne bäyyäsaməntu mäč’ärräša yäśəra kənəwwun zərəzzər riport azäggağəčče lähalaﬁye aqärballähu. [ʔɨne bɛjːɛsaˈmɨntu mɛtʃʼɛrːɛˈʃa jɛsɨra kɨnɨwːun zɨrɨzːɨr riˈport ʔazɛɡːadʒɨtʃːe lɛhalafiˈje ʔakʼɛrˈbalːɛhu] (uh-NAY bey-yeh-sah-MUN-too meh-ch'er-reh-SHAH yeh-suh-RAH kuh-nuw-WOON zuh-ruz-ZUR ree-POHRT ah-zeg-gah-juhch-CHAY leh-hah-lah-fee-YAY ah-k'er-BAHL-leh-hoo)",
          "translation": "At the end of every week, I prepare a detailed work performance report and submit it to my supervisor."
        },
        {
          "target": "የሂሳብ ባለሙያው የበጀት ዕቅዱን በጥንቃቄ አጥንቶ ትክክለኛነቱን ያረጋግጣል።",
          "reading": "Yä-hisab balämuyaw yäbäğät ʿəqədun bät’ənqaqe at’nəto təkkəklänyanätun yarägaggət’all. [jɛhiˈsab balɛmuˈjaw jɛbɛˈdʒɛt ʔɨkʼɨˈdun bɛtʼɨnkʼaˈkʼe ʔatʼnɨˈto tɨkːɨklɛɲanɛˈtun jarɛɡaɡːɨˈtʼalː] (yeh-hee-SAHB bah-leh-moo-YOW yeh-beh-JET uh-k'uh-DOON beh-t'un-k'ah-K'AY aht'-nuh-TOH tuk-kuk-len-yah-neh-TOON yah-reh-gahg-guh-T'AHL)",
          "translation": "The accountant carefully analyzes the budget plan and confirms its accuracy."
        }
      ],
      "mnemonics": [
        "Tasks: ማስተባበር (Coordinate) + ሪፖርት (Report) + መምራት (Lead) + ማረጋገጥ (Verify)!"
      ],
      "culturalNotes": [
        "በሥራ ቦታ የቡድን ሥራ፣ የጋራ መግባባትና የሥራ ሰዓትን ማክበር ለስኬት ወሳኝ መርሆዎች ናቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Preparing a report and leading a meeting» የሚለውን በአማርኛ ትክክለኛ የሥራ ተግባራት የገለጸው የትኛው ነው?",
          "options": [
            "ሪፖርት ማዘጋጀት እና ስብሰባ መምራት (Preparing a report and leading a meeting - Correct workplace task verbal nouns)",
            "እግር ኳስ መጫወት",
            "ምሳ መብላት",
            "ቴሌቪዥን ማየት"
          ],
          "answerIndex": 0,
          "explanation": "«ሪፖርት ማዘጋጀት እና ስብሰባ መምራት» ሁለቱን ቁልፍ የቢሮ ተግባራት በትክክል ያመለክታሉ።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'My responsibility is to treat patients' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ኃላፊነቴ ህሙማንን ማከም ነው። (My responsibility is to treat patients - Accurate medical duty)",
            "ህሙማን አይታከሙም",
            "ሆስፒታል አልሄድም",
            "ምንም ኃላፊነት የለኝም"
          ],
          "answerIndex": 0,
          "explanation": "«ኃላፊነቴ ህሙማንን ማከም ነው» የህክምና ሙያ ዋነኛ ተግባርን በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የሥራ ተግባራትንና ኃላፊነቶችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ማስተማር፣ ማከም፣ ማስተዳደር፣ ሪፖርት ማዘጋጀት እና ስብሰባ መምራት።",
            "መተኛት፣ መነሳት እና ማዛጋት።",
            "መሮጥ፣ መዝለል እና መዋኘት።",
            "በአማርኛ የሥራ ተግባር ቃላት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የሥራ ተግባራትንና ኃላፊነቶችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ኃላፊነት / Responsibility, duty' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ኃላፊነት"
          ],
          "explanation": "ትክክለኛው ቃል «ኃላፊነት» (Halaﬁnnät) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u13-l4": {
    "id": "am-u13-l4",
    "subject": "amharic",
    "unit": 13,
    "lessonNumber": 4,
    "title": "የሥራ ማመልከቻ፣ ቃለ መጠይቅ እና ውይይት (Job Applications, CV & Interviews)",
    "level": "A2",
    "objective": "የሥራ ማመልከቻን፣ ሲቪን፣ የቃለ መጠይቅ ውይይትንና የቅጥር ሁኔታዎችን መግለጽ።",
    "presentation": {
      "explanation": "የሥራ ቅጥር ሂደት፣ ማመልከቻ እና ቃለ መጠይቅ:\n\n፩. የቅጥር ቅደም ተከተል:\n- የሥራ ማስታወቂያ: ክፍት የሥራ ቦታዎችን የሚያሳውቅ ሰነድ ነው።\n- ማመልከቻ እና ሲቪ: የትምህርት ደረጃንና የሥራ ልምድን የሚያሳይ ዝርዝር ነው።\n- ቃለ መጠይቅ: ተቀጣሪው ከቀጣሪዎች ጋር የሚያደርገው የፊት ለፊት ውይይት ነው።\n- የቅጥር ውል: የደመወዝ፣ የሥራ ሰዓትና የመብት ስምምነት ነው።\n\n፪. ቁልፍ የቃለ መጠይቅ አገላለጾች:\n- «የትምህርት ደረጃዬ ... ነው»\n- «የአምስት ዓመት የሥራ ልምድ አለኝ»\n- «በቡድን የመሥራት ከፍተኛ ችሎታ አለኝ»።",
      "examples": [
        {
          "target": "ለክፍት የሥራ ቦታው ማመልከቻዬንና የሥራ ልምድ ማስረጃዬን (ሲቪ) በኢሜይል ላክሁ።",
          "reading": "Läkəft yäśəra botaw mamälkäčaye-nna yäśəra ləmd masräğaye-n (sivi) bä-imeyl lakhut. [lɛkɨft jɛsɨra boˈtaw mamɛlkɛtʃaˈjenːa jɛsɨra lɨmd masrɛdʒaˈjen siˈvi bɛʔiˈmejl lakˈhut] (leh-KUFT yeh-suh-RAH boh-TOW mah-mel-keh-chah-YAYN-nah yeh-suh-RAH lumd mahs-reh-jah-YAYN see-VEE beh-ee-MAYL LAHK-hoot)",
          "translation": "I sent my application and CV with proof of work experience for the open job vacancy via email."
        },
        {
          "target": "በቃለ መጠይቁ ወቅት ስለ ቀድሞ የሥራ ልምዴ እና ስለ ችሎታዬ በግልጽ አስረዳሁ።",
          "reading": "Bäqalä mät’äyyəqu wäqət səlä qädmo yäśəra ləmde ənna səlä čəlotaye bägilts’ asräddahu. [bɛkʼalɛ mɛtʼɛjːɨˈkʼu wɛkʼt sɨlɛ kʼɛdˈmo jɛsɨra lɨmˈde ɨnːa sɨlɛ tʃɨlotaˈje bɛɡɨltsʼ ʔasrɛdːaˈhu] (beh-k'ah-LEH met'-ey-yuh-K'OO wehk'-T suh-leh k'ed-MOH yeh-suh-RAH lum-DAY un-nah suh-leh chuh-loh-tah-YAY beh-GULTS' ahs-red-dah-HOO)",
          "translation": "During the interview, I explained clearly about my previous work experience and my skills."
        },
        {
          "target": "ድርጅቱ ጥሩ ደመወዝና የተሟላ የጤና ዋስትና የሚሰጥ የቅጥር ውል አቀረበልኝ።",
          "reading": "Dərəğğətu t’əru dämäwäznna yätämwāla yät’ena wastənna yämmisät’ yäqət’ər wəl aqärräbäləny. [dɨrɨdʒːɨˈtu tʼɨru dɛmɛwɛzɨnːa jɛtɛmʷaˈla jɛtʼeˈna wastɨnˈna jɛmːiˈsɛtʼ jɛkʼɨtʼɨr wɨl ʔakʼɛrːɛbɛˈlɨɲ] (duh-ruhd-juh-TOO t'uh-ROO deh-meh-wez-un-nah yeh-tem-wah-LAH yeh-t'ay-NAH wahs-tun-NAH yem-mee-SET' yeh-k'ut'-UR wul ah-k'er-reh-beh-LUNY)",
          "translation": "The organization offered me an employment contract with good salary and full health insurance."
        }
      ],
      "mnemonics": [
        "Hiring Path: ማመልከቻ (Application) -> ቃለ መጠይቅ (Interview) -> ውል (Contract) -> ደመወዝ (Salary)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ በሥራ ቃለ መጠይቅ ወቅት ጨዋነት፣ በራስ መተማመን እና ተገቢ አለባበስ ትልቅ ግምት ይሰጣቸዋል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Job interview and work experience» የሚለውን በአማርኛ ትክክለኛ የቅጥር ቃላት የገለጸው የትኛው ነው?",
          "options": [
            "የሥራ ቃለ መጠይቅ እና የሥራ ልምድ (Job interview and work experience - Accurate hiring terms)",
            "የገበያ ሽያጭ",
            "የእግር ኳስ ጨዋታ",
            "የሲኒማ ትኬት"
          ],
          "answerIndex": 0,
          "explanation": "«የሥራ ቃለ መጠይቅ» እና «የሥራ ልምድ» ሁለቱን ወሳኝ የቅጥር ቃላት ያመለክታሉ።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'I sent my application and CV' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ማመልከቻዬንና ሲቪዬን ላክሁ። (I sent my application and CV - Accurate job submission sentence)",
            "ማመልከቻ አልጻፍኩም",
            "ሲቪ የለኝም",
            "ሥራ አልፈልግም"
          ],
          "answerIndex": 0,
          "explanation": "«ማመልከቻዬንና ሲቪዬን ላክሁ» የማመልከቻን መላክ በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የሥራ ማመልከቻና የቅጥር ሂደትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "የሥራ ማስታወቂያ፣ ማመልከቻ፣ ሲቪ፣ ቃለ መጠይቅ፣ የቅጥር ውል እና ደመወዝ።",
            "የበረራ ትኬት፣ ፓስፖርት እና ሻንጣ።",
            "ስኳር፣ ጨው እና ዘይት።",
            "በአማርኛ የቅጥር ቃላት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የሥራ ቅጥር ሂደትን ደረጃዎች በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቃለ መጠይቅ / Interview' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቃለ መጠይቅ"
          ],
          "explanation": "ትክክለኛው ቃል «ቃለ መጠይቅ» (Qalä mät’äyyəq) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u13-l5": {
    "id": "am-u13-l5",
    "subject": "amharic",
    "unit": 13,
    "lessonNumber": 5,
    "title": "የክፍል 13 አጠቃላይ ማጠቃለያ (Unit 13 Grand Synthesis & Professional Discourse)",
    "level": "A2",
    "objective": "ሙያዎችን፣ የሥራ ቦታዎችን፣ ኃላፊነቶችንና የቅጥር ውይይትን ያቀናጀ የተሟላ ሙያዊ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፲፫ አጠቃላይ ሰዋሰዋዊ ውህደት እና የሥራ ዓለም ተግባቦት ማጠቃለያ:\n\n፩. ዋና ዋና ሙያዎች:\n- መምህር፣ ሐኪም፣ መሃንዲስ፣ ነጋዴ፣ ሹፌር፣ ገበሬ፣ ጠበቃ።\n\n፪. የሥራ ቦታዎች:\n- ቢሮ፣ ሆስፒታል፣ ትምህርት ቤት፣ ፋብሪካ፣ ባንክ፣ ፍርድ ቤት፣ እርሻ።\n\n፫. የሥራ ተግባራትና ኃላፊነቶች:\n- ማስተማር፣ ማከም፣ ማስተዳደር፣ ሪፖርት ማዘጋጀት፣ ስብሰባ መምራት።\n\n፬. የቅጥር ሂደት:\n- ማመልከቻ፣ ሲቪ፣ ቃለ መጠይቅ፣ ውል፣ ደመወዝ።",
      "examples": [
        {
          "target": "በሙያዬ መሃንዲስ ነኝ፤ በግንባታ ድርጅት ውስጥ ፕሮጀክቶችን በማስተባበር በከፍተኛ ኃላፊነት እሠራለሁ።",
          "reading": "Bämuya-ye mähandis näny; bägənnbata dərəğğət wəst’ proğäktoččən bamastäbabbär bäkäftänya halaﬁnnät əsärrallähu. [bɛmujaˈje mɛhanˈdis nɛɲ bɛɡɨnbaˈta dɨrɨdʒːɨt wɨstʼ prodʒɛkˈtotʃːɨn bamastɛbabːɛr bɛkɛfˈtɛɲa halafiˈnːɛt ʔɨsɛrːaˈlːɛhu] (beh-moo-yah-YAY meh-hahn-DEES neny; beh-gun-BAH-tah duh-ruhd-juhT woos-T' proh-jek-TOHCH-chun bah-mahs-teh-bahb-BER beh-kef-TEN-yah hah-lah-feen-NET uh-ser-RAHL-leh-hoo)",
          "translation": "I am an engineer by profession; I work with high responsibility coordinating projects in a construction firm."
        },
        {
          "target": "የተሳካ ቃለ መጠይቅ ካደረግሁ በኋላ ድርጅቱ በቋሚነት ቀጥሮኝ ሥራዬን ጀመርኩ።",
          "reading": "Yätäsakka qalä mät’äyyəq kadärräghu bähwala dərəğğətu bäqwaminnät qät’t’ərony śərayen ğämmärkut. [jɛtɛsakːa kʼalɛ mɛtʼɛjːɨkʼ kaˈdɛrːɛɡhu bɛhʷaˈla dɨrɨdʒːɨˈtu bɛkʼwamɨnˈnɛt kʼɛtʼːɨˈroɲ sɨraˈjen dʒɛmːɛrˈkut] (yeh-teh-SAHK-kah k'ah-LEH met'-ey-yuhK' kah-der-REG-hoo beh-hwah-LAH duh-ruhd-juh-TOO beh-k'wah-mun-NET k'et'-t'uh-ROHNY suh-rah-YAYN jem-mer-KOOT)",
          "translation": "After conducting a successful interview, the company hired me permanently and I began my work."
        },
        {
          "target": "ታታሪ ሠራተኞች ለሀገር ሁለንተናዊ ዕድገትና ልማት የማይተካ አስተዋጽኦ ያበረክታሉ።",
          "reading": "Tattari särratänyočč lähagär huläntänawi ʿədggätənna ləmat yämmayəttäkka astäwas’ots’o yabäräktallu. [tatːaˈri sɛrːatɛˈɲotʃː lɛhaˈɡɛr hulɛntɛnaˈwi ʔɨdɡːɛtɨnːa lɨˈmat jɛmːajɨtːɛkːa ʔastɛwasˤoˈtsʼo jabɛrɛkˈtalːu] (taht-tah-REE ser-rah-ten-yohch-CH leh-hah-GER hoo-len-teh-nah-WEE ud-get-un-nah luh-MAHT yem-mah-yut-TEK-kah ahs-teh-wah-ts'oh-TS'OH yah-beh-rek-TAHL-loo)",
          "translation": "Hardworking employees make an irreplaceable contribution to the country's comprehensive growth and development."
        }
      ],
      "mnemonics": [
        "Career Matrix: Profession (ሙያ) + Workplace (ቦታ) + Duty (ኃላፊነት) + Growth (ዕድገት)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ 'ሥራ ክብር ነው' የሚል ባህላዊ መርህ አለ፤ ማንኛውም ህጋዊና ጠቃሚ ሥራ የተከበረና የሚያኮራ እንደሆነ ይታመናል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ ሙያዊ ማንነትንና የሥራ ቦታን የሚያሳየው የትኛው ነው?",
          "options": [
            "እኔ መምህር ነኝ፤ በዩኒቨርሲቲ ውስጥ ተማሪዎችን አስተምራለሁ። (Complete professional identity and role)",
            "እኔ ተማሪ አይደለሁም",
            "ሥራ የለም",
            "ቤት ተቀምጫለሁ"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ሙያን፣ የሥራ ቦታንና ተግባርን በአንድነት ያጠቃልላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "የሥራ ቅጥርንና የሥራ ጅማሬን ያጣመረው ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ቃለ መጠይቁን አልፌ አዲሱን ሥራዬን በደስታ ጀመርኩ። (I passed the interview and happily started my new job - Integrated career milestone)",
            "ሥራ አልፈልግም",
            "ቃለ መጠይቅ የለም",
            "ደመወዝ አልፈልግም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ ቃለ መጠይቅን ማለፍና ሥራ መጀመርን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 13 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "ዋና ዋና ሙያዎች፣ የሥራ ቦታዎች፣ የዕለት ተዕለት የሥራ ኃላፊነቶች፣ እንዲሁም የሥራ ማመልከቻ፣ ሲቪ እና የቃለ መጠይቅ ውይይቶች ተካተዋል።",
            "ይህ ክፍል ስለ ምግብ ዝግጅት ብቻ ነው።",
            "በአማርኛ የሙያ ቃላት የሉም።",
            "ሁሉም ሰዎች አንድ ዓይነት ሥራ ይሠራሉ።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 13ን አጠቃላይ ሙያዊ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ሙያ / Profession, career, occupation' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ሙያ"
          ],
          "explanation": "ትክክለኛው ቃል «ሙያ» (Muya) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u14-l1": {
    "id": "am-u14-l1",
    "subject": "amharic",
    "unit": 14,
    "lessonNumber": 1,
    "title": "ታዋቂ የኢትዮጵያ ታሪካዊ ቦታዎች (Famous Ethiopian Historical Sites)",
    "level": "B1",
    "objective": "ታሪካዊ ቦታዎችን (ላሊበላ፣ አክሱም፣ ጎንደር፣ ሐረር ጁጎል፣ ጢያ) መለየትና መግለጽ።",
    "presentation": {
      "explanation": "ዋና ዋና የኢትዮጵያ ታሪካዊና ዓለም አቀፍ ቅርሶች:\n\n፩. ታሪካዊ ከተሞች እና ቅርሶች:\n- ላሊበላ: ከአንድ ወጥ ድንጋይ የተፈለፈሉ ፲፩ አስደናቂ ውቅር አብያተ ክርስቲያናት መገኛ ነው።\n- አክሱም: ጥንታዊ ግዙፍ የድንጋይ ሐውልቶችና የታሪክ ማዕከል ነው።\n- ጎንደር (ፋሲል ግቢ): የመካከለኛው ዘመን ድንቅ ቤተ መንግሥታትና ግንቦች ያሉባት ታሪካዊ ከተማ ናት።\n- ሐረር (ጁጎል): በጥንታዊ የድንጋይ ግንብ የታጠረች ታሪካዊትና የባህል ከተማ ናት።\n- ጢያ: በደቡብ ኢትዮጵያ የሚገኙ ምስጢራዊ ጥንታዊ የድንጋይ ሐውልቶች ናቸው።\n\n፪. ሰዋሰዋዊ አጠቃቀም:\nየቦታ ስሞችን ከታሪካዊ ቅጽሎች ጋር በማጣመር መግለጽ እንችላለን።",
      "examples": [
        {
          "target": "የላሊበላ ውቅር አብያተ ክርስቲያናት በዓለም አቀፍ ቅርስነት በዩኔስኮ ተመዝግበዋል።",
          "reading": "Yä-Lalibäla wəqər abyatä krəstiyanat bä'aläm aqäf qərsənnät bä-Yunesko tämözgəbäwall. [jɛlalibɛˈla wɨkʼɨr ʔabjaˈtɛ krɨstijaˈnat bɛʔaˈlɛm ʔaˈkʼɛf kʼɨrsɨnˈnɛt bɛjuˈnesko tɛmɛzɡɨˈbɛwalː] (yeh-lah-lee-beh-LAH wuk'-UR ahb-yah-TEH kris-tee-yah-NAHT beh-ah-LEM ah-K'EF k'ur-sun-NET beh-yoo-NES-koh teh-mez-guh-BEW-wahl)",
          "translation": "The rock-hewn churches of Lalibela are registered by UNESCO as a World Heritage site."
        },
        {
          "target": "የአክሱም ሐውልት እና የጎንደር ፋሲል ግቢ የኢትዮጵያን ጥንታዊ ስልጣኔ ያሳያሉ።",
          "reading": "Yä-Aksum hawəltənna yä-Gondär Fasil Gəbbi yä-Ityop’yan t’əntawi səlt’ane yasayyallu. [jɛʔakˈsum hawɨlˈtɨnːa jɛɡonˈdɛr faˈsil ɡɨbˈbi jɛʔitjoˈpʼjan tʼɨntaˈwi sɨltʼaˈne jasaˈjːalːu] (yeh-ahk-SOOM how-LUL-tun-nah yeh-gohn-DER fah-SEEL gub-BEE yeh-eet-YOHP-yahn t'un-tah-WEE sul-t'ah-NAY yah-sye-YAHL-loo)",
          "translation": "The Obelisk of Aksum and Gondar's Fasil Ghebbi demonstrate Ethiopia's ancient civilization."
        },
        {
          "target": "የሐረር ጁጎል ግንብ የአምስት መቶ ዓመታት ታሪክ ያለው ጥንታዊ ምሽግ ነው።",
          "reading": "Yä-Harär Ğugol gənb yä'aməst mäto ʿamätat tarik yalläw t’əntawi məššəg näw. [jɛhaˈrɛr dʒuˈɡol ɡɨnb jɛʔaˈmɨst mɛˈto ʔamɛˈtat taˈrik jalːɛw tʼɨntaˈwi mɨʃːɨɡ nɛw] (yeh-hah-RER joo-GOHL gunb yeh-AH-must meh-TOH ah-meh-TAHT tah-REEK YAHL-lew t'un-tah-WEE mush-shug now)",
          "translation": "The Harar Jugol wall is an ancient fortification with five hundred years of history."
        }
      ],
      "mnemonics": [
        "Heritage Map: ላሊበላ (Churches) + አክሱም (Obelisk) + ጎንደር (Castles) + ሐረር (Walled City)!"
      ],
      "culturalNotes": [
        "ኢትዮጵያ በአፍሪካ ውስጥ በርካታ በዩኔስኮ (UNESCO) የተመዘገቡ ተጨባጭና ኢ-ተጨባጭ የዓለም ቅርሶች ባለቤት ከሆኑ ግንባር ቀደም ሀገራት አንዷ ናት።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Lalibela, Aksum, and Gondar» የሚለውን በአማርኛ ትክክለኛ የታሪካዊ ቦታዎች ስሞች የያዘው የትኛው ነው?",
          "options": [
            "ላሊበላ፣ አክሱም እና ጎንደር (Lalibela, Aksum, and Gondar - Correct historic heritage sites)",
            "መጽሐፍ፣ ደብተር እና እርሳስ",
            "ታክሲ፣ ባቡር እና አውቶቡስ",
            "ወጥ፣ ዳቦ እና ሻይ"
          ],
          "answerIndex": 0,
          "explanation": "«ላሊበላ»፣ «አክሱም» እና «ጎንደር» ሦስቱን ታላላቅ የኢትዮጵያ ታሪካዊ ቅርሶች ያመለክታሉ።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'The rock churches of Lalibela are famous' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "የላሊበላ ውቅር አብያተ ክርስቲያናት ታዋቂ ናቸው። (The rock-hewn churches of Lalibela are famous - Accurate historic description)",
            "ላሊበላ አዲስ ከተማ ነው",
            "ላሊበላ ቤተ ክርስቲያን የለውም",
            "ላሊበላ መሄድ አይቻልም"
          ],
          "answerIndex": 0,
          "explanation": "«የላሊበላ ውቅር አብያተ ክርስቲያናት ታዋቂ ናቸው» የታሪካዊ ቅርሱን ዝና በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የኢትዮጵያን ዋና ዋና ታሪካዊ ቅርሶች በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ላሊበላ፣ አክሱም፣ የጎንደር ፋሲል ግቢ፣ የሐረር ጁጎል እና የጢያ ሐውልቶች።",
            "አልጋ፣ ጠረጴዛ እና ወንበር።",
            "ሰኞ፣ ማክሰኞ እና ረቡዕ።",
            "በኢትዮጵያ ታሪካዊ ቅርሶች የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የኢትዮጵያ ታሪካዊ ቦታዎችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ላሊበላ / Lalibela' የሚለውን ስም በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ላሊበላ"
          ],
          "explanation": "ትክክለኛው ቃል «ላሊበላ» (Lalibäla) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u14-l2": {
    "id": "am-u14-l2",
    "subject": "amharic",
    "unit": 14,
    "lessonNumber": 2,
    "title": "የጉዞ ዝግጅት፣ ትራንስፖርት እና ሆቴል (Travel Logistics & Hospitality)",
    "level": "B1",
    "objective": "የጉዞ ዝግጅትን (ትኬት፣ ሆቴል መያዝ፣ አስጎብኚ፣ ሻንጣ፣ ፓስፖርት) መግለጽ።",
    "presentation": {
      "explanation": "የጉዞ ዕቅድ እና የእንግዳ ተቀባይነት አገልግሎቶች:\n\n፩. የጉዞ ዝግጅት:\n- የአውሮፕላን ትኬት መቁረጥ: በኢትዮጵያ አየር መንገድ የጉዞ ትኬት መያዝ።\n- ሆቴል መያዝ: ምቹና ንጹህ የማረፊያ ክፍል አስቀድሞ ማስያዝ።\n- የጉዞ አስጎብኚ: ስለ ቅርሶቹ ጥልቅ የታሪክ ማብራሪያ የሚሰጥ ባለሙያ ማግኘት።\n- ሻንጣ ማዘጋጀት: ለጉዞው የሚያስፈልጉ ልብሶችንና ዕቃዎችን ማሸግ።\n\n፪. ሰዋሰዋዊ መዋቅር:\n«ክፍል መያዝ እፈልጋለሁ» (I want to book a room):\n- «ለሦስት ቀናት የሚሆን አንድ አልጋ ያለው ክፍል ያዝኩ»።",
      "examples": [
        {
          "target": "ወደ ላሊበላ ለመጓዝ የአውሮፕላን ትኬት ቆረጥኩ እንዲሁም በሆቴል ውስጥ ክፍል ያዝኩ።",
          "reading": "Wädä Lalibäla lämägwaz yä'awroplan tiket qorät’ku əndihum bähotel wəst’ kəfəl yazku. [wɛdɛ lalibɛˈla lɛmɛɡʷaz jɛʔawroˈplan tiˈket kʼoˈrɛtʼku ʔɨndiˈhum bɛhoˈtel wɨstʼ kɨfl jazˈku] (weh-DEH lah-lee-beh-LAH leh-meg-WAHZ yeh-ow-roh-PLAHN tee-KET k'oh-RET'-koo un-dee-HOOM beh-hoh-TEL woos-T' kuf-L YAHZ-koo)",
          "translation": "I bought a plane ticket to travel to Lalibela and also booked a room in a hotel."
        },
        {
          "target": "የጉዞ አስጎብኚው ስለ ጥንታዊው ቤተ መንግሥት ታሪክ አስደናቂ ማብራሪያ ሰጠን።",
          "reading": "Yä-guzo asgobənyəw səlä t’əntawiw betä mängəst tarik asdännaqi mabrarriya sät’t’än. [jɛɡuˈzo ʔasɡobɨˈɲɨw sɨlɛ tʼɨntaˈwiw beˈtɛ mɛnˈɡɨst taˈrik ʔasdɛnːaˈkʼi mabrariˈja sɛtʼːɛn] (yeh-goo-ZOH ahs-goh-bun-YOO suh-leh t'un-tah-WEE-woo bay-TEH men-GUST tah-REEK ahs-den-nah-K'EE mahb-rah-ree-YAH set'-TEN)",
          "translation": "The tour guide gave us a fascinating explanation about the history of the ancient palace."
        },
        {
          "target": "ሻንጣዬን በጥንቃቄ አዘጋጅቼ ፓስፖርቴንና ካሜራዬን ይዤ ተነሳሁ።",
          "reading": "Šant’ayen bät’ənqaqe azäggağəčče pasporten-nna kamerayen yəže tänässähu. [ʃantʼaˈjen bɛtʼɨnkʼaˈkʼe ʔazɛɡːadʒɨtʃːe pasporˈtenːa kameˈrajen jɨˈʒe tɛnɛsːaˈhu] (shahn-t'ah-YAYN beh-t'un-k'ah-K'AY ah-zeg-gah-juhch-CHAY pahs-pohr-TAYN-nah kah-may-rah-YAYN yuh-ZHAY teh-nes-SAH-hoo)",
          "translation": "I carefully prepared my suitcase and set off taking my passport and camera."
        }
      ],
      "mnemonics": [
        "Trip Checklist: ትኬት (Ticket) + ሆቴል (Hotel) + አስጎብኚ (Guide) + ሻንጣ (Luggage)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ አየር መንገድ በአፍሪካ ግዙፍና አንጋፋ አየር መንገድ ሲሆን ሁሉንም የአገሪቱን ዋና ዋና ታሪካዊ ከተሞች በበረራ ያገናኛል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«I booked a hotel room» የሚለውን በአማርኛ ትክክለኛ አረፍተ ነገር የገለጸው የትኛው ነው?",
          "options": [
            "በሆቴል ውስጥ ክፍል ያዝኩ። (I booked a hotel room - Accurate reservation verb)",
            "ሆቴል ውስጥ ምግብ በላሁ",
            "ሆቴል አልሄድም",
            "ሆቴል የለም"
          ],
          "answerIndex": 0,
          "explanation": "«በሆቴል ውስጥ ክፍል ያዝኩ» የክፍል ማስያዝን ድርጊት በትክክል ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'The tour guide explains the history' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "አስጎብኚው ታሪኩን ያስረዳል። (The tour guide explains the history - Accurate guiding role)",
            "አስጎብኚው ይተኛል",
            "አስጎብኚው ታሪክ አያውቅም",
            "ምንም አስጎብኚ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«አስጎብኚው ታሪኩን ያስረዳል» የጉዞ አስጎብኚውን ተግባር በትክክል ያመለክታል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የጉዞ ዝግጅትንና የእንግዳ ተቀባይነት ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "የአውሮፕላን ትኬት፣ ሆቴል፣ ክፍል መያዝ፣ የጉዞ አስጎብኚ እና ሻንጣ።",
            "መጥረጊያ፣ ባልዲ እና ሳሙና።",
            "ጨው፣ በርበሬ እና ሽንኩርት።",
            "በአማርኛ የጉዞ ቃላት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የጉዞ ዝግጅት ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አስጎብኚ / Tour guide' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አስጎብኚ"
          ],
          "explanation": "ትክክለኛው ቃል «አስጎብኚ» (Asgobəny) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u14-l3": {
    "id": "am-u14-l3",
    "subject": "amharic",
    "unit": 14,
    "lessonNumber": 3,
    "title": "የጉዞ ልምድ እና የቦታዎች መግለጫ (Describing Travel Experiences & Wonders)",
    "level": "B1",
    "objective": "የጉዞ ልምዶችን በገላጭ ቅፅሎች (ጥንታዊ፣ አስደናቂ፣ ማራኪ፣ ድንቅ፣ ታሪካዊ) መግለጽ።",
    "presentation": {
      "explanation": "የጉዞ ልምድና የቦታዎች ገላጭ ሰዋሰዋዊ ቃላት:\n\n፩. ገላጭ ቅጽሎች (Descriptive Adjectives):\n- ጥንታዊ: በረጅም ዘመናት የተገነባና የቆየ።\n- አስደናቂ / ድንቅ: ሰውን የሚያስደምምና ከፍተኛ አድናቆትን የሚስብ።\n- ማራኪ / ውብ: ዓይንን የሚስብ የተዋበ ገጽታ ያለው።\n- ታሪካዊ: ታላቅ ታሪካዊ ክስተት የተፈጸመበት።\n\n፪. ሰዋሰዋዊ አገባብ:\nቅጽል + ስም:\n«ጥንታዊ ከተማ»፣ «አስደናቂ ሕንጻ»፣ «ማራኪ የተፈጥሮ ገጽታ»።\n\n፫. የልምድ መግለጫ:\n«ጉዞዬ በጣም አስደሳችና የማይረሳ ነበር»።",
      "examples": [
        {
          "target": "ወደ ሰሜን ኢትዮጵያ ያደረግሁት ጉዞ እጅግ አስደናቂና የማይረሳ ታላቅ ልምድ ነበር።",
          "reading": "Wädä Semen Ityop’ya yadärrähut guzo əğğəg asdännaqin-nna yämmayərrässa talaq ləmd näbbär. [wɛdɛ seˈmen ʔitjoˈpʼja jadɛrːɛˈhut ɡuˈzo ʔɨdʒːɨɡ ʔasdɛnːaˈkʼinːa jɛmːajɨrːɛsːa taˈlakʼ lɨmd nɛbːɛr] (weh-DEH say-MEN eet-YOHP-yah yah-der-REH-hoot goo-ZOH uhj-JUG ahs-den-nah-K'EEN-nah yem-mah-yur-RES-sah tah-LAHK' lumd neb-BER)",
          "translation": "My trip to Northern Ethiopia was an extremely fascinating and unforgettable great experience."
        },
        {
          "target": "በጣና ሐይቅ ላይ ያሉ ጥንታዊ ገዳማትና ውብ ደሴቶች መንፈስን ያድሳሉ።",
          "reading": "Bä-T’ana Hayq lay yallu t’əntawi gädamatənna wəbb däsetočč mänfäsən yaddəsallu. [bɛtʼaˈna hajkʼ laj jalːu tʼɨntaˈwi ɡɛdaˈmatɨnːa wɨbː dɛseˈtotʃː mɛnfɛˈsɨn jadːɨˈsalːu] (beh-t'ah-NAH hyk' lye YAHL-loo t'un-tah-WEE geh-dah-MAH-tun-nah wub-B deh-say-TOHCH-choo men-feh-SUN yahd-duh-SAHL-loo)",
          "translation": "The ancient monasteries and beautiful islands on Lake Tana refresh the spirit."
        },
        {
          "target": "የአካባቢው ህዝብ እንግዳ ተቀባይነትና ደግነት በጉዞዬ ላይ ከፍተኛ ደስታን ፈጠረልኝ።",
          "reading": "Yä'akabbabiw həzb əngəda täqäbbayinnätənna däggənnät bäguzoye lay bäkäftänya dässətan fät’t’äräləny. [jɛʔakabːaˈbiw hɨzb ʔɨnɡɨˈda tɛkʼɛbːajinˈnɛtɨnːa dɛɡːɨnˈnɛt bɛɡuˈzoje laj bɛkɛfˈtɛɲa dɛsːɨˈtan fɛtʼːɛrɛˈlɨɲ] (yeh-ah-kahb-bah-BEE-woo huzb un-guh-DAH teh-k'eb-bah-yeen-NET-un-nah deg-gun-NET beh-goo-ZOH-yay lye beh-kef-TEN-yah des-suh-TAHN fet'-t'eh-reh-LUNY)",
          "translation": "The local people's hospitality and kindness brought me great happiness during my trip."
        }
      ],
      "mnemonics": [
        "Vivid Adjectives: ጥንታዊ (Ancient) + አስደናቂ (Fascinating) + ማራኪ (Charming) + ድንቅ (Wonderful)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ ባህላዊ እንግዳ ተቀባይነት (እንግዳን ማክበር፣ ማብላትና ማጠጣት) በዓለም አቀፍ ደረጃ በጎብኚዎች ዘንድ በከፍተኛ ሁኔታ ይወደሳል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Fascinating and unforgettable trip» የሚለውን በአማርኛ ትክክለኛ ገላጭ ሐረግ የያዘው የትኛው ነው?",
          "options": [
            "አስደናቂ እና የማይረሳ ጉዞ (Fascinating and unforgettable trip - Correct descriptive modifiers)",
            "አጭር እና መጥፎ መንገድ",
            "የጠፋ ሻንጣ",
            "የተሰበረ መኪና"
          ],
          "answerIndex": 0,
          "explanation": "«አስደናቂ እና የማይረሳ ጉዞ» ሁለቱን ገላጭ ቅጽሎች ከስሙ ጋር በትክክል ያጣምራል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'The ancient monasteries on the lake are beautiful' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "በሐይቁ ላይ ያሉ ጥንታዊ ገዳማት ውብ ናቸው። (The ancient monasteries on the lake are beautiful - Accurate descriptive scene)",
            "ሐይቁ ደርቋል",
            "ገዳማት የሉም",
            "ምንም ውበት የለም"
          ],
          "answerIndex": 0,
          "explanation": "«በሐይቁ ላይ ያሉ ጥንታዊ ገዳማት ውብ ናቸው» ጥንታዊነትን፣ ቦታንና ውበትን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የጉዞ ልምድ ገላጭ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ጥንታዊ፣ አስደናቂ፣ ማራኪ፣ ድንቅ፣ ታሪካዊ እና የማይረሳ።",
            "ክኒን፣ ሽሮፕ እና መርፌ።",
            "ቅባት፣ ዘይት እና ዱቄት።",
            "በአማርኛ ገላጭ ቅጽሎች የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የቦታና የልምድ ገላጭ ቅጽሎችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አስደናቂ / Fascinating, amazing, wonderful' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አስደናቂ"
          ],
          "explanation": "ትክክለኛው ቃል «አስደናቂ» (Asdännaqi) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u14-l4": {
    "id": "am-u14-l4",
    "subject": "amharic",
    "unit": 14,
    "lessonNumber": 4,
    "title": "ብሔራዊ ፓርኮች እና የዱር እንስሳት (National Parks & Endemic Wildlife)",
    "level": "B1",
    "objective": "ብሔራዊ ፓርኮችን (ሰሜን ተራሮች፣ ባሌ ተራሮች) እና ብርቅዬ የዱር እንስሳትን (ዋሊያ፣ ጭላዳ ዝንጀሮ፣ ቀይ ቀበሮ) መግለጽ።",
    "presentation": {
      "explanation": "የኢትዮጵያ ብሔራዊ ፓርኮች እና ብርቅዬ የዱር እንስሳት:\n\n፩. ዋና ዋና ብሔራዊ ፓርኮች:\n- የሰሜን ተራሮች ብሔራዊ ፓርክ: ረጅሙ ራስ ዳሸን ተራራ የሚገኝበት ድንቅ የተፈጥሮ ፓርክ ነው።\n- የባሌ ተራሮች ብሔራዊ ፓርክ: ውብ አምባዎችና ጥቅጥቅ ያሉ ደኖች ያሉት ፓርክ ነው።\n- የአዋሽ ብሔራዊ ፓርክ: በሳር ምድርና በፏፏቴዎች የታወቀ ፓርክ ነው።\n\n፪. በኢትዮጵያ ብቻ የሚገኙ ብርቅዬ እንስሳት:\n- ዋሊያ አይቤክስ (ዋሊያ): በሰሜን ተራሮች ገደላማ ቦታዎች ላይ የሚኖር።\n- ጭላዳ ዝንጀሮ: ሳር ብቻ የሚመገብ ልዩ ዝንጀሮ።\n- የኢትዮጵያ ቀይ ቀበሮ: በባሌ ተራሮች አምባ ላይ የሚኖር ብርቅዬ አዳኝ።",
      "examples": [
        {
          "target": "በሰሜን ተራሮች ብሔራዊ ፓርክ ውስጥ ዋሊያ አይቤክስ እና ጭላዳ ዝንጀሮዎችን ተመለከትን።",
          "reading": "Bä-Semen Täraročč bəherawi park wəst’ Waliya aybäksənna Č’əlada zənğärowoččən tämäläkkätn. [bɛseˈmen tɛraˈrotʃː bɨheˈrawi park wɨstʼ waliˈja ʔajˈbɛksɨnːa tʃʼɨlaˈda zɨndʒɛroˈwotʃːɨn tɛmɛlɛkːɛtn] (beh-say-MEN teh-rah-ROHCH buh-hay-RAH-wee pahrk woos-T' wah-lee-YAH eye-BEK-sun-nah ch'uh-lah-DAH zun-jeh-roh-wohch-CHUN teh-mel-lek-KET-un)",
          "translation": "Inside the Simien Mountains National Park, we watched Walia ibexes and Gelada baboons."
        },
        {
          "target": "የኢትዮጵያ ቀይ ቀበሮ በባሌ ተራሮች ሰፊ አምባ ላይ የሚኖር ብርቅዬ እንስሳ ነው።",
          "reading": "Yä-Ityop’ya qäyy qäbäro bä-Bale Täraročč säfi amba lay yämminor bərqəyye ənsəsa näw. [jɛʔitjoˈpʼja kʼɛjː kʼɛbɛˈro bɛbaˈle tɛraˈrotʃː sɛˈfi ʔamˈba laj jɛmːiˈnor bɨrkʼɨjːe ʔɨnsɨˈsa nɛw] (yeh-eet-YOHP-yah k'ey-Y k'eh-beh-ROH beh-bah-LAY teh-rah-ROHCH seh-FEE ahm-BAH lye yem-mee-NOHR bur-k'uhy-YAY un-suh-SAH now)",
          "translation": "The Ethiopian red wolf is an endemic animal living on the vast plateau of the Bale Mountains."
        },
        {
          "target": "የተፈጥሮ ፓርኮችንና የዱር እንስሳትን መጠበቅ ለቀጣዩ ትውልድ የሁላችንም የጋራ ኃላፊነት ነው።",
          "reading": "Yätäfät’ro parkoččənna yädur ənsəsatən mät’t’äbäq läqät’tayiw təwlədd yähullaččənəm yägara halaﬁnnät näw. [jɛtɛfɛtʼˈro parˈkotʃːɨnːa jɛdur ʔɨnsɨˈsatɨn mɛtʼːɛˈbɛkʼ lɛkʼɛtʼːaˈjiw tɨwˈlɨdː jɛhulːatʃːɨˈnɨm jɛɡaˈra halafiˈnːɛt nɛw] (yeh-teh-fet'-ROH pahr-KOHCH-chun-nah yeh-DOOR un-suh-SAH-tun met'-t'eh-BEK' leh-k'et'-tah-YEE-woo tuw-LUD yeh-hool-lahch-CHUH-num yeh-gah-RAH hah-lah-feen-NET now)",
          "translation": "Protecting nature parks and wildlife for the next generation is the common responsibility of all of us."
        }
      ],
      "mnemonics": [
        "Fauna Heritage: ዋሊያ (Walia) + ጭላዳ (Gelada) + ቀይ ቀበሮ (Red Wolf) + ሰሜን/ባሌ (Parks)!"
      ],
      "culturalNotes": [
        "ዋሊያ አይቤክስና የኢትዮጵያ ቀይ ቀበሮ በዓለም ላይ በኢትዮጵያ ከፍተኛ ተራሮች ብቻ የሚገኙ ብርቅዬ (Endemic) ፍጥረታት ናቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በሰሜን ተራሮች ብሔራዊ ፓርክ ውስጥ የሚገኘው ብርቅዬ እንስሳ የትኛው ነው?",
          "options": [
            "ዋሊያ አይቤክስ (Walia ibex - Endemic mountain mammal)",
            "አንበሳ ብቻ",
            "ነብር ብቻ",
            "ዝሆን ብቻ"
          ],
          "answerIndex": 0,
          "explanation": "«ዋሊያ አይቤክስ» በሰሜን ተራሮች ገደላማ ስፍራዎች ላይ ብቻ የሚገኝ ብርቅዬ እንስሳ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'The Ethiopian red wolf lives in Bale Mountains' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "የኢትዮጵያ ቀይ ቀበሮ በባሌ ተራሮች ይኖራል። (The Ethiopian red wolf lives in Bale Mountains - Accurate wildlife location)",
            "ቀይ ቀበሮ በባህር ውስጥ ይኖራል",
            "ባሌ ተራራ ውስጥ እንስሳት የሉም",
            "ቀይ ቀበሮ ጠፍቷል"
          ],
          "answerIndex": 0,
          "explanation": "«የኢትዮጵያ ቀይ ቀበሮ በባሌ ተራሮች ይኖራል» የእንስሳውን መገኛ በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የኢትዮጵያ ብሔራዊ ፓርኮችንና ብርቅዬ እንስሳትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "የሰሜን ተራሮች፣ የባሌ ተራሮች፣ ዋሊያ አይቤክስ፣ ጭላዳ ዝንጀሮ እና ቀይ ቀበሮ።",
            "ቡና፣ ሻይ እና ወተት።",
            "ሸሚዝ፣ ሱሪ እና ጫማ።",
            "በኢትዮጵያ ብሔራዊ ፓርኮች የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ብሔራዊ ፓርኮችንና ብርቅዬ እንስሳትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ዋሊያ / Walia ibex' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ዋሊያ"
          ],
          "explanation": "ትክክለኛው ቃል «ዋሊያ» (Waliya) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u14-l5": {
    "id": "am-u14-l5",
    "subject": "amharic",
    "unit": 14,
    "lessonNumber": 5,
    "title": "የክፍል 14 አጠቃላይ ማጠቃለያ (Unit 14 Grand Synthesis & Heritage Tourism Discourse)",
    "level": "B1",
    "objective": "ታሪካዊ ቦታዎችን፣ የጉዞ ዝግጅትን፣ ገላጭ ልምዶችንና ብሔራዊ ፓርኮችን ያቀናጀ የተሟላ የቱሪዝም ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፲፬ አጠቃላይ ሰዋሰዋዊ ውህደት እና የጉዞና ቅርሶች ተግባቦት ማጠቃለያ:\n\n፩. ታሪካዊ ቦታዎች:\n- ላሊበላ፣ አክሱም፣ የጎንደር ፋሲል ግቢ፣ የሐረር ጁጎል፣ የጢያ ሐውልቶች።\n\n፪. የጉዞ ዝግጅት እና እንግዳ ተቀባይነት:\n- የአውሮፕላን ትኬት፣ ሆቴል ክፍል መያዝ፣ የጉዞ አስጎብኚ፣ ሻንጣ።\n\n፫. ገላጭ ቅጽሎች:\n- ጥንታዊ፣ አስደናቂ፣ ማራኪ፣ ድንቅ፣ ታሪካዊ፣ የማይረሳ።\n\n፬. ብሔራዊ ፓርኮች እና ብርቅዬ እንስሳት:\n- የሰሜን ተራሮች፣ የባሌ ተራሮች፣ ዋሊያ አይቤክስ፣ ጭላዳ ዝንጀሮ፣ ቀይ ቀበሮ።",
      "examples": [
        {
          "target": "በኢትዮጵያ ያደረግሁት ጉዞ ጥንታዊ ታሪክን፣ አስደናቂ የተፈጥሮ ውበትንና ደግ ህዝብን ያስተዋወቀኝ የማይረሳ ነበር።",
          "reading": "Bä-Ityop’ya yadärrähut guzo t’əntawi tarikən, asdännaqi yätäfät’ro wəbätənna dägg həzbən yasətäwawwäqäny yämmayərrässa näbbär. [bɛʔitjoˈpʼja jadɛrːɛˈhut ɡuˈzo tʼɨntaˈwi taˈrikɨn ʔasdɛnːaˈkʼi jɛtɛfɛtʼˈro wɨbɛˈtɨnːa dɛɡː hɨzˈbɨn jastɛwawːɛˈkʼɛɲ jɛmːajɨrːɛsːa nɛbːɛr] (beh-eet-YOHP-yah yah-der-REH-hoot goo-ZOH t'un-tah-WEE tah-REE-kun, ahs-den-nah-K'EE yeh-teh-fet'-ROH wub-beh-TUN-nah deg-G huz-BUN yahs-teh-wow-weh-K'ENY yem-mah-yur-RES-sah neb-BER)",
          "translation": "My trip in Ethiopia was unforgettable, introducing me to ancient history, fascinating natural beauty, and kind people."
        },
        {
          "target": "ከላሊበላ ውቅር አብያተ ክርስቲያናት እስከ ሰሜን ተራሮች ብሔራዊ ፓርክ ድረስ የተጓዝንባቸው ቦታዎች ሁሉ ድንቅ ነበሩ።",
          "reading": "Kä-Lalibäla wəqər abyatä krəstiyanat əskä Semen Täraročč bəherawi park dräs yätägwaznəbbäw botawočč hullu dənq näbbäru. [kɛlalibɛˈla wɨkʼɨr ʔabjaˈtɛ krɨstijaˈnat ʔɨsˈkɛ seˈmen tɛraˈrotʃː bɨheˈrawi park dɨrɛs jɛtɛɡʷaznɨbːɛw botaˈwotʃː hulːu dɨnkʼ nɛbːɛru] (keh-lah-lee-beh-LAH wuk'-UR ahb-yah-TEH kris-tee-yah-NAHT us-KEH say-MEN teh-rah-ROHCH buh-hay-RAH-wee pahrk duh-RES yeh-teg-wahz-nub-BEW boh-tah-wohch-CH HOOL-loo dunk' neb-BEH-roo)",
          "translation": "All the places we traveled to, from the rock-hewn churches of Lalibela to Simien Mountains National Park, were wonderful."
        },
        {
          "target": "የሀገራችንን ታሪካዊ ቅርሶችና የተፈጥሮ ሀብቶች መጠበቅና ማስተዋወቅ የሁላችንም የዜግነት ግዴታ ነው።",
          "reading": "Yähagäraččənən t’əntawi qərsoččənna yätäfät’ro habtəwoččən mät’t’äbäqənna mastäwawwäq yähullaččənəm yäzegənnät gəddeta näw. [jɛhaɡɛratʃːɨˈnɨn tʼɨntaˈwi kʼɨrsoˈtʃːɨnːa jɛtɛfɛtʼˈro habtɨwoˈtʃːɨn mɛtʼːɛbɛˈkʼɨnːa mastɛwawːɛkʼ jɛhulːatʃːɨˈnɨm jɛzeɡɨnˈnɛt ɡɨdːeˈta nɛw] (yeh-hah-geh-rahch-CHUN-un t'un-tah-WEE k'ur-sohch-CHUN-nah yeh-teh-fet'-ROH hahb-tuh-wohch-CHUN met'-t'eh-bek'-UN-nah mahs-teh-wow-wek' yeh-hool-lahch-CHUH-num yeh-zay-gun-NET gud-day-TAH now)",
          "translation": "Protecting and promoting our country's historical heritage and natural resources is everyone's civic duty."
        }
      ],
      "mnemonics": [
        "Heritage Voyage: Sites (ቅርሶች) + Logistics (ዝግጅት) + Splendor (ውበት) + Conservation (ጥበቃ)!"
      ],
      "culturalNotes": [
        "ኢትዮጵያ በዓለም ታሪክ ውስጥ የሰው ዘር መገኛ (የሉሲ/ድንቅነሽ ምድር) በመባል በሳይንቲስቶች ዘንድ በታላቅ ክብር ትታወቃለች።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የቱሪዝም እና የቅርስ ጉዞ አገላለጽን የሚያሳየው የትኛው ነው?",
          "options": [
            "ታሪካዊ ቅርሶችን ጎበኘን፣ በሆቴል አረፍን፣ እንዲሁም ብርቅዬ እንስሳትን ተመለከትን። (Complete integrated tourism synthesis)",
            "ቤት ውስጥ ተቀመጥን",
            "ምንም ቦታ አልሄድንም",
            "ጉዞ አንወድም"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ቅርሶችን መጎብኘት፣ ማረፍና ብርቅዬ እንስሳትን መመልከትን በአንድ ላይ ያጠቃልላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ታሪካዊ ቦታዎችንና የተፈጥሮ ፓርኮችን ያጣመረው ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "የጎንደርን ቤተ መንግሥታት እና የሰሜን ተራሮችን ውበት አደነቅን። (We admired Gondar's castles and Simien Mountains' beauty - Integrated heritage sentence)",
            "ጎንደር ቅርሶች የሉትም",
            "ሰሜን ተራራ ሩቅ ነው",
            "ምንም ውበት የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የጎንደር ቤተ መንግሥታትንና የሰሜን ተራሮችን ውበት በአንድነት ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 14 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "ዋና ዋና ታሪካዊ ቦታዎች (ላሊበላ፣ አክሱም፣ ጎንደር፣ ሐረር)፣ የጉዞ ዝግጅትና ሆቴል፣ ገላጭ ቅጽሎች፣ እንዲሁም ብሔራዊ ፓርኮችና ብርቅዬ እንስሳት ተካተዋል።",
            "ይህ ክፍል ስለ ንግድ ብቻ ነው።",
            "በአማርኛ የቱሪዝም ቃላት የሉም።",
            "ሁሉም ከተሞች አንድ ዓይነት ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 14ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቅርስ / Heritage, relic, artifact' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቅርስ"
          ],
          "explanation": "ትክክለኛው ቃል «ቅርስ» (Qərs) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u15-l1": {
    "id": "am-u15-l1",
    "subject": "amharic",
    "unit": 15,
    "lessonNumber": 1,
    "title": "የኢትዮጵያ አራቱ ወቅቶች (The Four Ethiopian Seasons)",
    "level": "B1",
    "objective": "አራቱን ወቅቶች (በጋ፣ ክረምት፣ መኸር፣ ፀደይ/በልግ) እና ባህሪያቸውን መግለጽ።",
    "presentation": {
      "explanation": "የኢትዮጵያ አራቱ ወቅቶች እና ባህሪያቸው:\n\n፩. አራቱ ወቅቶች:\n- በጋ (ጥቅምት - ጥር): ደረቅና ፀሐያማ ወቅት ሲሆን በቀን ሞቃታማ፣ በሌሊት ደግሞ ቀዝቃዛ ነው።\n- በልግ / ፀደይ (የካቲት - ግንቦት): አነስተኛ የዝናብ መጠን የሚዘንብበትና አበባ የሚያብብበት ወቅት ነው።\n- ክረምት (ሰኔ - ነሐሴ): ዋናው ከባድ የዝናብ ወቅት ሲሆን ወንዞች የሚሞሉበትና ምድር የምትለሰልስበት ነው።\n- መኸር (መስከረም - ኅዳር): ሰብል የሚደርስበት፣ አደይ አበባ የሚፈካበትና አዝመራ የሚሰበሰብበት ወቅት ነው።\n\n፪. ሰዋሰዋዊ መዋቅር:\n«በ... ወቅት» (During the season of...):\n- «በክረምት ወቅት ከባድ ዝናብ ይዘንባል»\n- «በመኸር ወቅት ምድሪቱ በአደይ አበባ ታሸበርቃለች»።",
      "examples": [
        {
          "target": "በክረምት ወቅት በኢትዮጵያ ከፍተኛ ዝናብ ስለሚዘንብ ወንዞችና ሐይቆች በውሃ ይሞላሉ።",
          "reading": "Bä-Kərremt wäqət bä-Ityop’ya käftänya zənab səlämmizänəb wänzroččənna hayqočč bäwəha yəmmolallu. [bɛkɨrːɛmt wɛkʼt bɛʔitjoˈpʼja kɛfˈtɛɲa zɨˈnab sɨlɛmːizɛˈnɨb wɛnzroˈtʃːɨnːa hajˈkʼotʃː bɛwɨˈha jɨmːoˈlalːu] (beh-kur-REMT wehk'-T beh-eet-YOHP-yah kef-TEN-yah zuh-NAHB suh-lem-mee-zeh-NUB wenz-rohch-CHUN-nah hy-k'ohch-CH beh-wuh-HAH yoom-moh-LAHL-loo)",
          "translation": "During the Kiremt season, because heavy rain falls in Ethiopia, rivers and lakes fill with water."
        },
        {
          "target": "በመስከረም ወር በመኸር ወቅት ቢጫው አደይ አበባ ሜዳውን በሙሉ ያስውበዋል።",
          "reading": "Bä-Mäskäräm wär bä-Mähär wäqət bič’aw Adey Abäba medawən bämullu yaswəbäwall. [bɛmɛskɛˈrɛm wɛr bɛmɛˈhɛr wɛkʼt bitʃʼaw ʔaˈdɛj ʔabɛˈba meˈdawɨn bɛmulːu jaswɨˈbɛwalː] (beh-mes-keh-REM wer beh-meh-HER wehk'-T bee-ch'ow ah-DEY ah-beh-BAH may-dow-UN beh-mool-LOO yahs-wuh-BEW-wahl)",
          "translation": "In the month of Meskerem during the Meher season, the yellow Adey Abeba flower beautifies the entire meadow."
        },
        {
          "target": "በጋ ሲገባ አርሶ አደሮች የደረሰውን ሰብል በደስታ ይሰበስባሉ።",
          "reading": "Bäga sigäba arso addäročč yädärräsäwən säbl bädässəta yəsäbäsəballu. [bɛˈɡa siɡɛˈba ʔarˈso ʔadːɛˈrotʃː jɛdɛrːɛˈsɛwɨn sɛbl bɛdɛsːɨˈta jɨsɛbɛsɨˈbalːu] (beh-GAH see-geh-BAH ahr-SOH ahd-deh-rohch-CH yeh-der-reh-SEW-un seb-L beh-des-suh-TAH yuh-seh-beh-suh-BAHL-loo)",
          "translation": "When Bega arrives, farmers happily harvest the ripened crop."
        }
      ],
      "mnemonics": [
        "Four Seasons: ክረምት (Rainy) -> መኸር (Harvest) -> በጋ (Sunny) -> ፀደይ (Spring)!"
      ],
      "culturalNotes": [
        "በመስከረም ወር (የኢትዮጵያ አዲስ ዓመት) የሚፈካው ቢጫው አደይ አበባ የክረምት ዝናብ ማለፉንና የመኸር ብሩህ ተስፋ መምጣቱን የሚያበስር ታላቅ ባህላዊ ምልክት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«The rainy season and the harvest season» የሚለውን በአማርኛ ትክክለኛ የወቅት ስሞች የያዘው የትኛው ነው?",
          "options": [
            "ክረምት እና መኸር (The rainy season and the harvest season - Correct seasonal nouns)",
            "ጠዋት እና ማታ",
            "ሰኞ እና አርብ",
            "ጥር እና የካቲት"
          ],
          "answerIndex": 0,
          "explanation": "«ክረምት» እና «መኸር» ሁለቱን ዋና ዋና የኢትዮጵያ ወቅቶች ያመለክታሉ።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Adey Abeba flowers bloom in Meher' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "በመኸር ወቅት አደይ አበባ ያብባል። (Adey Abeba flowers bloom in Meher - Accurate seasonal phenomenon)",
            "በክረምት አበባ የለም",
            "መኸር ደረቅ ነው",
            "አደይ አበባ አይፈካም"
          ],
          "answerIndex": 0,
          "explanation": "«በመኸር ወቅት አደይ አበባ ያብባል» የመኸር ወቅትን ውበትና የአደይ አበባን መፈካት በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የኢትዮጵያን አራቱን ወቅቶች በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "በጋ፣ ክረምት፣ መኸር እና ፀደይ (በልግ)።",
            "ዳቦ፣ እንጀራ፣ ወጥ እና ጠጅ።",
            "ላሊበላ፣ ጎንደር፣ አክሱም እና ሐረር።",
            "በኢትዮጵያ ወቅቶች የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ አራቱን የኢትዮጵያ ወቅቶች በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ክረምት / Rainy season, winter' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ክረምት"
          ],
          "explanation": "ትክክለኛው ቃል «ክረምት» (Kərremt) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u15-l2": {
    "id": "am-u15-l2",
    "subject": "amharic",
    "unit": 15,
    "lessonNumber": 2,
    "title": "የዕለት ተዕለት የአየር ሁኔታ መግለጫዎች (Daily Weather Expressions)",
    "level": "B1",
    "objective": "የዕለት ተዕለት የአየር ሁኔታን (ፀሐያማ፣ ዝናባማ፣ ደመናማ፣ ንፋሻማ፣ ጭጋጋማ፣ ብርድ፣ ሙቀት) መግለጽ።",
    "presentation": {
      "explanation": "የዕለት ተዕለት የአየር ሁኔታ ገላጭ ቃላት:\n\n፩. የአየር ሁኔታ ዓይነቶች:\n- ፀሐያማ: ሰማዩ ክፍት የሆነና ብሩህ ፀሐይ ያለበት።\n- ዝናባማ: ዝናብ የሚዘንብበት እርጥበታማ የአየር ሁኔታ።\n- ደመናማ: ሰማዩ በደመና የተሸፈነና ፀሐይ የተጋረደበት።\n- ንፋሻማ: ከፍተኛና ኃይለኛ ንፋስ የሚነፍስበት።\n- ጭጋጋማ: በጉም ወይም ጭጋግ ምክንያት እይታ የተጋረደበት።\n\n፪. ሙቀት እና ቅዝቃዜ:\n- ብርድ / ቅዝቃዜ: ዝቅተኛ የአየር ሙቀት መጠን።\n- ሙቀት: ከፍተኛ የአየር ሙቀት መጠን።\n\n፫. ሰዋሰዋዊ አገባብ:\n«ዛሬ አየሩ ... ነው» (Today the weather is...):\n- «ዛሬ አየሩ በጣም ፀሐያማና ሞቃታማ ነው»\n- «ውጭ በጣም ስለሚበርድ ጃኬት ልበስ»።",
      "examples": [
        {
          "target": "ዛሬ በአዲስ አበባ የአየሩ ሁኔታ በጣም ፀሐያማና አስደሳች ነው።",
          "reading": "Zare bä-Addis Ababa yä'ayäru huneta bät’am ts’ähayyaman-nna asdässačč näw. [zaˈre bɛʔadːis ʔabɛˈba jɛʔajɛˈru huneˈta bɛtʼam tsʼɛhajːaˈmanːa ʔasdɛsːatʃː nɛw] (zah-RAY beh-ahd-DEES ah-beh-BAH yeh-ah-yeh-ROO hoo-nay-TAH beh-T'AHM ts'eh-hy-yah-MAHN-nah ahs-des-SAHCH now)",
          "translation": "Today in Addis Ababa the weather condition is very sunny and pleasant."
        },
        {
          "target": "በማለዳው ሰማዩ ጭጋጋማ ስለነበር ተሽከርካሪዎች መብራት አብርተው ይጓዛሉ።",
          "reading": "Bämalädaw sämayu č’əggaggama səlänäbbär täškärkariwočč mäbrat abrätäw yəgwazallu. [bɛmalɛˈdaw sɛmaˈju tʃʼɨɡːaɡːaˈma sɨlɛnɛbːɛr tɛʃkɛrkariˈwotʃː mɛbˈrat ʔabˈrɛtɛw jɨɡʷaˈzalːu] (beh-mah-leh-DOW seh-mah-YOO ch'ug-gahg-gah-MAH suh-leh-neb-BER tesh-ker-kah-ree-wohch-CH meb-RAHT ahb-reh-TEW yug-wah-ZAHL-loo)",
          "translation": "Because the sky was foggy in the early morning, vehicles travel with headlights on."
        },
        {
          "target": "ከሰዓት በኋላ ሰማዩ ደመናማ ሆነና ከባድ ዝናብ ከነጎድጓድ ጋር ጣለ።",
          "reading": "Käsä'at bähwala sämayu dämännama honänna käbbad zənab känägogwəd gwad gara t’alä. [kɛsɛʔat bɛhʷaˈla sɛmaˈju dɛmɛnːaˈma hoˈnɛnːa kɛbːad zɨˈnab kɛnɛɡoɡʷɨd ɡʷad ɡaˈra tʼaˈlɛ] (keh-seh-AHT beh-hwah-LAH seh-mah-YOO deh-men-nah-MAH hoh-NEN-nah keb-BAHD zuh-NAHB keh-neh-gohg-WUD gwahd gah-RAH T'AH-leh)",
          "translation": "In the afternoon, the sky became cloudy and heavy rain fell with thunder."
        }
      ],
      "mnemonics": [
        "Sky Expressions: ፀሐያማ (Sunny) + ደመናማ (Cloudy) + ዝናባማ (Rainy) + ጭጋጋማ (Foggy)!"
      ],
      "culturalNotes": [
        "አዲስ አበባ 'የዘላለማዊ ፀደይ ከተማ' በመባል ትታወቃለች፤ ዓመቱን ሙሉ መጠነኛና ተስማሚ የአየር ንብረት አላት።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Today the weather is sunny and warm» የሚለውን በአማርኛ ትክክለኛ አረፍተ ነገር የገለጸው የትኛው ነው?",
          "options": [
            "ዛሬ አየሩ ፀሐያማና ሞቃታማ ነው። (Today the weather is sunny and warm - Accurate weather description)",
            "ዛሬ ዝናብ በረዶ ነው",
            "ዛሬ ጨለማ ነው",
            "አየር የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ዛሬ አየሩ ፀሐያማና ሞቃታማ ነው» የፀሐይንና የሙቀትን ሁኔታ በትክክል ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Wear a jacket because it is cold' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ስለሚበርድ ጃኬት ልበስ። (Wear a jacket because it is cold - Accurate practical weather advice)",
            "ስለሚሞቅ ጃኬት አውልቅ",
            "ብርድ የለም",
            "ጃኬት አያስፈልግም"
          ],
          "answerIndex": 0,
          "explanation": "«ስለሚበርድ ጃኬት ልበስ» ቅዝቃዜንና ተገቢ ልብስ መልበስን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአየር ሁኔታ መግለጫዎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ፀሐያማ፣ ዝናባማ፣ ደመናማ፣ ንፋሻማ፣ ጭጋጋማ፣ ብርድ እና ሙቀት።",
            "እርሳስ፣ እስክሪብቶ እና ወረቀት።",
            "ስኒ፣ ብርጭቆ እና ማንኪያ።",
            "በአማርኛ የአየር ሁኔታ ቃላት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የአየር ሁኔታ ገላጭ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ፀሐያማ / Sunny' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ፀሐያማ"
          ],
          "explanation": "ትክክለኛው ቃል «ፀሐያማ» (Ts’ähayyama) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u15-l3": {
    "id": "am-u15-l3",
    "subject": "amharic",
    "unit": 15,
    "lessonNumber": 3,
    "title": "የመልክዓ ምድር ገጽታዎች እና የውሃ አካላት (Landforms & Water Bodies)",
    "level": "B1",
    "objective": "የመልክዓ ምድር ገጽታዎችን (ተራራ፣ ሸለቆ፣ ወንዝ፣ ሐይቅ፣ ፏፏቴ፣ ስምጥ ሸለቆ) መግለጽ።",
    "presentation": {
      "explanation": "የመልክዓ ምድር ገጽታዎች እና የውሃ አካላት:\n\n፩. የመሬት አቀማመጥ:\n- ተራራ: ከፍተኛ ከፍታ ያለው ግዙፍ የመሬት ገጽታ (ለምሳሌ: ራስ ዳሸን ተራራ)።\n- ስምጥ ሸለቆ: በሁለት ከፍተኛ አምባዎች መካከል የሚገኝ ታላቅ የመሬት ስምጥጥ ነው።\n- ሜዳ: ሰፊና ጠፍጣፋ ለም መሬት።\n- ዋሻ: በተፈጥሮ የተፈጠረ የድንጋይ ውስጥ ዋሻ (ለምሳሌ: ሶፍ ዑመር ዋሻ)።\n\n፪. የውሃ አካላት:\n- ወንዝ: የሚፈስ የተፈጥሮ ውሃ (ለምሳሌ: ዓባይ ወንዝ፣ አዋሽ ወንዝ)።\n- ሐይቅ: በየብስ የተከበበ የውሃ አካል (ለምሳሌ: ጣና ሐይቅ፣ ላንጋኖ ሐይቅ)።\n- ፏፏቴ: ከከፍታ ቦታ ወደ ታች የሚወርድ ውብ የውሃ ፍሰት (ለምሳሌ: የጢስ ዓባይ ፏፏቴ)።",
      "examples": [
        {
          "target": "ታላቁ የዓባይ ወንዝ ከጣና ሐይቅ ተነስቶ ረጅም ርቀት በመጓዝ ድንቅ የተፈጥሮ ኃይልን ያመነጫል።",
          "reading": "Talaqu yä-Abay wänz kä-T’ana Hayq tänäsəto räğğəm rəqät bämägwaz dənq yätäfät’ro haylən yamänäč’all. [taˈlakʼu jɛʔaˈbaj wɛnz kɛtʼaˈna hajkʼ tɛnɛsɨˈto rɛdʒːɨm rɨkʼɛt bɛmɛɡʷaz dɨnkʼ jɛtɛfɛtʼˈro hajˈlɨn jamɛnɛˈtʃʼalː] (tah-LAH-k'oo yeh-ah-BY wenz keh-t'ah-NAH hyk' teh-neh-suh-TOH red-JUM ruh-K'ET beh-meg-WAHZ dunk' yeh-teh-fet'-ROH high-LUN yah-meh-neh-ch'AHL)",
          "translation": "The Great Abay (Blue Nile) River originates from Lake Tana and travels a long distance generating wonderful natural energy."
        },
        {
          "target": "የጢስ ዓባይ ፏፏቴ አስደናቂ የተፈጥሮ ውበት ያለውና በርካታ ጎብኚዎችን የሚስብ መስህብ ነው።",
          "reading": "Yä-T’is Abay fwafoate asdännaqi yätäfät’ro wəbät yalläwənna bərkatta gobənyoččən yämmisəb mäs-həb näw. [jɛtʼis ʔaˈbaj fʷafwaˈte ʔasdɛnːaˈkʼi jɛtɛfɛtʼˈro wɨbɛt jalːɛˈwɨnːa bɨrkatːa ɡobɨˈɲotʃːɨn jɛmːiˈsɨb mɛshɨb nɛw] (yeh-T'EES ah-BY fwah-fwah-TAY ahs-den-nah-K'EE yeh-teh-fet'-ROH wub-BET yahl-lew-UN-nah bur-KAHT-tah goh-bun-yohch-CHUN yem-mee-SUB mes-HUB now)",
          "translation": "The Tis Abay (Blue Nile Falls) waterfall is an attraction with fascinating natural beauty that draws many visitors."
        },
        {
          "target": "በታላቁ የስምጥ ሸለቆ ውስጥ ውብ ሐይቆችና ልዩ የተፈጥሮ ሀብቶች ይገኛሉ።",
          "reading": "Bätalaqu yä-Səmət’ Šäläqo wəst’ wəbb hayqoččənna ləyyu yätäfät’ro habtočč yəggänyallu. [bɛtaˈlakʼu jɛsɨmɨtʼ ʃɛlɛˈkʼo wɨstʼ wɨbː hajˈkʼotʃːɨnːa lɨjːu jɛtɛfɛtʼˈro habˈtotʃː jɨɡːɛˈɲalːu] (beh-tah-LAH-k'oo yeh-suh-MUT' sheh-leh-K'OH woos-T' wub-B hy-k'ohch-CHUN-nah luhy-YOO yeh-teh-fet'-ROH hahb-TOHCH-choo yug-gen-YAHL-loo)",
          "translation": "Inside the Great Rift Valley, beautiful lakes and unique natural resources are found."
        }
      ],
      "mnemonics": [
        "Geography Giants: ተራራ (Mountain) + ሸለቆ (Valley) + ወንዝ (River) + ፏፏቴ (Waterfall)!"
      ],
      "culturalNotes": [
        "ዓባይ ወንዝ (Blue Nile) በኢትዮጵያ ታሪክና ስነ-ጽሑፍ ውስጥ 'የኢትዮጵያ የልብ ትርታ' በመባል የሚታወቅ ታላቅ የተፈጥሮ ሀብት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Mountain, river, and waterfall» የሚለውን በአማርኛ ትክክለኛ የመልክዓ ምድር ስሞች የያዘው የትኛው ነው?",
          "options": [
            "ተራራ፣ ወንዝ እና ፏፏቴ (Mountain, river, and waterfall - Correct geographical terms)",
            "ወንበር፣ ጠረጴዛ እና በር",
            "መኪና፣ ባቡር እና ታክሲ",
            "ዳቦ፣ ወተት እና ሻይ"
          ],
          "answerIndex": 0,
          "explanation": "«ተራራ»፣ «ወንዝ» እና «ፏፏቴ» ሦስቱን ቁልፍ የተፈጥሮ መልክዓ ምድር ገጽታዎች ያመለክታሉ።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Tis Abay is a famous waterfall' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ጢስ ዓባይ ታዋቂ ፏፏቴ ነው። (Tis Abay is a famous waterfall - Accurate geographical fact)",
            "ጢስ ዓባይ ተራራ ነው",
            "ጢስ ዓባይ ደረቅ መሬት ነው",
            "ፏፏቴ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ጢስ ዓባይ ታዋቂ ፏፏቴ ነው» የጢስ ዓባይን የተፈጥሮ ምንነት በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የመልክዓ ምድር ገጽታዎችንና የውሃ አካላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ተራራ፣ ስምጥ ሸለቆ፣ ሜዳ፣ ወንዝ፣ ሐይቅ፣ ፏፏቴ እና ዋሻ።",
            "ቤት፣ በር፣ ግድግዳ እና ጣሪያ።",
            "ብርቱካን፣ ሙዝ እና አፕል ብቻ።",
            "በአማርኛ የመልክዓ ምድር ቃላት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የመልክዓ ምድርና የውሃ አካላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ፏፏቴ / Waterfall' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ፏፏቴ"
          ],
          "explanation": "ትክክለኛው ቃል «ፏፏቴ» (Fwafoate) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u15-l4": {
    "id": "am-u15-l4",
    "subject": "amharic",
    "unit": 15,
    "lessonNumber": 4,
    "title": "የተፈጥሮ አካባቢ ጥበቃ እና ዛፍ መትከል (Environmental Care & Green Legacy)",
    "level": "B1",
    "objective": "የአካባቢ ጥበቃን፣ የችግኝ ተከላን (አረንጓዴ አሻራ) እና የተፈጥሮ ሀብት እንክብካቤን መግለጽ።",
    "presentation": {
      "explanation": "የአካባቢ ጥበቃ እና የአረንጓዴ አሻራ ተነሳሽነት:\n\n፩. የአካባቢ ጥበቃ ተግባራት:\n- የችግኝ ተከላ: በየክረምቱ ቢሊዮን ችግኞችን በመትከል ደኖችን ማልማት።\n- የደን ጥበቃ: ዛፎችን ካለመቁረጥና ደኖችን ከእሳት ከመጠበቅ የሚመጣ እንክብካቤ።\n- የአፈር እንክብካቤ: የአፈር መሸርሸርን ለመከላከል እርከን መሥራትና ዛፎችን መትከል።\n- የውሃ ሀብት ጥበቃ: ወንዞችና ሐይቆች ከብክለት እንዲጠበቁ ማድረግ።\n\n፪. ሰዋሰዋዊ መዋቅር:\n«... መትከል / መጠበቅ አለብን» (We must plant / protect...):\n- «አካባቢያችንን አረንጓዴ ለማድረግ ዛፎችን መትከል አለብን»።",
      "examples": [
        {
          "target": "በአረንጓዴ አሻራ መርሐ ግብር በሚሊዮን የሚቆጠሩ ዜጎች በየዓመቱ ችግኞችን ይተክላሉ።",
          "reading": "Bä-Arängwade Aššara märha gəbr bämiliyon yämmiqot’t’äru zegočč bäyyäʿamätu čəgnyoččən yətäklallu. [bɛʔarɛnɡʷaˈde ʔaʃːaˈra mɛrˈha ɡɨbr bɛmilˈjon jɛmːikʼotʼːɛˈru zeˈɡotʃː bɛjːɛʔaˈmɛtu tʃʼɨɡɲoˈtʃːɨn jɨtɛkˈlalːu] (beh-ah-reng-wah-DAY ahsh-shah-RAH mer-HAH gub-R beh-meel-YOHN yem-mee-k'oht'-t'eh-ROO zay-GOHCH-choo bey-yeh-ah-meh-TOO ch'ug-nyohch-CHOON yuh-tek-LAHL-loo)",
          "translation": "Under the Green Legacy initiative, millions of citizens plant tree seedlings every year."
        },
        {
          "target": "ዛፎችን መትከልና ደኖችን መጠበቅ የአየር ንብረት ለውጥን ለመከላከል ወሳኝ ነው።",
          "reading": "Zafoččən mätkälənna dänoččən mät’t’äbäq yä'ayär nəbrät läwt’ən lämäkkälakäl wäsany näw. [zafoˈtʃːɨn mɛtˈkɛlɨnːa dɛnoˈtʃːɨn mɛtʼːɛˈbɛkʼ jɛʔaˈjɛr nɨbˈrɛt lɛwˈtʼɨn lɛmɛkːɛlaˈkɛl wɛˈsaɲ nɛw] (zah-fohch-CHUN met-KEL-un-nah deh-nohch-CHOON met'-t'eh-BEK' yeh-ah-YER nub-RET lewt'-UN leh-mek-keh-lah-KEL weh-SAHNY now)",
          "translation": "Planting trees and protecting forests is essential to combat climate change."
        },
        {
          "target": "ወጣቶችና ተማሪዎች በአካባቢ ጽዳትና በዛፍ እንክብካቤ ዘመቻ ላይ በንቃት ተሳተፉ።",
          "reading": "Wät’t’atoččənna tämariwočč bä'akabbabi ts’ədatənna bäzaf ənkəbəkabe zämäča lay bänəqat täsattäfu. [wɛtʼːaˈtotʃːɨnːa tɛmariˈwotʃː bɛʔakabːaˈbi tsʼɨdaˈtɨnːa bɛzaf ʔɨnkɨbɨkaˈbe zɛmɛˈtʃa laj bɛnɨˈkʼat tɛsatːɛˈfu] (wet'-t'ah-TOHCH-chun-nah teh-mah-ree-wohch-CH beh-ah-kahb-bah-BEE ts'uh-DAHT-un-nah beh-ZAHF un-kuh-buh-kah-BAY zeh-meh-CHAH lye beh-nuh-K'AHT teh-saht-teh-FOO)",
          "translation": "Youth and students actively participated in the environmental cleanup and tree care campaign."
        }
      ],
      "mnemonics": [
        "Green Legacy: ችግኝ (Seedling) + ደን (Forest) + እንክብካቤ (Care) + አረንጓዴ (Green)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ 'አረንጓዴ አሻራ' መርሐ ግብር በቢሊዮን የሚቆጠሩ ችግኞችን በአንድ ጀምበር በመትከል በዓለም አቀፍ ደረጃ አድናቆትን ያተረፈ ታላቅ ብሔራዊ ንቅናቄ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Planting tree seedlings and protecting forests» የሚለውን በአማርኛ ትክክለኛ የአካባቢ ጥበቃ አገላለጽ የያዘው የትኛው ነው?",
          "options": [
            "ችግኝ መትከል እና ደን መጠበቅ (Planting seedlings and protecting forests - Correct environmental actions)",
            "ዛፍ መቁረጥ",
            "ቆሻሻ መጣል",
            "ውሃ ማባከን"
          ],
          "answerIndex": 0,
          "explanation": "«ችግኝ መትከል እና ደን መጠበቅ» ሁለቱን ቁልፍ የተፈጥሮ ጥበቃ ተግባራት ያመለክታሉ።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'We must protect our environment' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "አካባቢያችንን መጠበቅ አለብን። (We must protect our environment - Accurate conservation sentence)",
            "አካባቢን ማጥፋት አለብን",
            "ምንም ማድረግ አያስፈልግም",
            "ተፈጥሮ አያስፈልግም"
          ],
          "answerIndex": 0,
          "explanation": "«አካባቢያችንን መጠበቅ አለብን» የአካባቢ ጥበቃ ግዴታን በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአካባቢ ጥበቃና የችግኝ ተከላ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "የችግኝ ተከላ፣ አረንጓዴ አሻራ፣ የደን ጥበቃ፣ የአፈር እንክብካቤ እና የተፈጥሮ ሀብት።",
            "ጠመንጃ፣ ጥይት እና ጦር።",
            "ስልክ፣ ቻርጀር እና ባትሪ።",
            "በአማርኛ የአካባቢ ጥበቃ ቃላት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የአካባቢ ጥበቃ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ችግኝ / Seedling, plant sapling' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ችግኝ"
          ],
          "explanation": "ትክክለኛው ቃል «ችግኝ» (Čəgny) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u15-l5": {
    "id": "am-u15-l5",
    "subject": "amharic",
    "unit": 15,
    "lessonNumber": 5,
    "title": "የክፍል 15 አጠቃላይ ማጠቃለያ (Unit 15 Grand Synthesis & Environmental Geography Discourse)",
    "level": "B1",
    "objective": "ወቅቶችን፣ የአየር ሁኔታን፣ የመልክዓ ምድር ገጽታዎችንና የአካባቢ ጥበቃን ያቀናጀ የተሟላ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፲፭ አጠቃላይ ሰዋሰዋዊ ውህደት እና የአየር ንብረትና መልክዓ ምድር ተግባቦት ማጠቃለያ:\n\n፩. አራቱ ወቅቶች:\n- በጋ፣ ክረምት፣ መኸር፣ ፀደይ (በልግ)።\n\n፪. የአየር ሁኔታ መግለጫዎች:\n- ፀሐያማ፣ ዝናባማ፣ ደመናማ፣ ንፋሻማ፣ ጭጋጋማ፣ ብርድ፣ ሙቀት።\n\n፫. የመልክዓ ምድር ገጽታዎች:\n- ተራራ፣ ስምጥ ሸለቆ፣ ሜዳ፣ ወንዝ፣ ሐይቅ፣ ፏፏቴ፣ ዋሻ።\n\n፬. የአካባቢ ጥበቃ:\n- የችግኝ ተከላ፣ አረንጓዴ አሻራ፣ የደን እንክብካቤ።",
      "examples": [
        {
          "target": "ኢትዮጵያ ከአራቱ የተለያዩ ወቅቶች እስከ አስደናቂ ተራሮችና ወንዞች ድረስ የታደለች ውብ ሀገር ናት።",
          "reading": "Ityop’ya kä'arattu yätäläyyayu wäqətat əskä asdännaqi täraroččənna wänzročč dräs yättaddäläčč wəbb hagär nat. [ʔitjoˈpʼja kɛʔaˈratːu jɛtɛlɛjːaˈju wɛkʼɨˈtat ʔɨsˈkɛ ʔasdɛnːaˈkʼi tɛraˈrotʃːɨnːa wɛnzroˈtʃː dɨrɛs jɛtːadːɛˈlɛtʃː wɨbː haˈɡɛr nat] (eet-YOHP-yah keh-ah-RAHT-too yeh-teh-ley-yah-YOO wehk'-uh-TAHT us-KEH ahs-den-nah-K'EE teh-rah-ROHCH-chun-nah wenz-rohch-CH duh-RES yet-tahd-deh-LECH wub-B hah-GER naht)",
          "translation": "Ethiopia is a beautiful country blessed from the four diverse seasons to fascinating mountains and rivers."
        },
        {
          "target": "በክረምት ወቅት የዘነበው ዝናብ ወንዞችንና ፏፏቴዎችን ሲያረሰርስ በመኸር ወቅት ምድሪቱ በአበቦች ታሸበርቃለች።",
          "reading": "Bä-Kərremt wäqət yäzännäbäw zənab wänzroččənna fwafoatewoččən siyaräsärrəs bä-Mähär wäqət mədritu bä'abäbočč taššäbärg’alläčč. [bɛkɨrːɛmt wɛkʼt jɛzɛnːɛˈbɛw zɨˈnab wɛnzroˈtʃːɨnːa fʷafwaˈtewotʃːɨn sijaˈrɛsɛrːɨs bɛmɛˈhɛr wɛkʼt mɨdˈritu bɛʔabɛˈbotʃː taʃːɛbɛrˈkʼalːɛtʃː] (beh-kur-REMT wehk'-T yeh-zen-neh-BEW zuh-NAHB wenz-rohch-CHOON-nah fwah-fwah-tay-wohch-CHOON see-yah-res-ser-RUS beh-meh-HER wehk'-T mud-REE-too beh-ah-beh-BOHCH-choo tahsh-sheh-berg'-AHL-lehch)",
          "translation": "While the rain that fell in Kiremt season replenishes rivers and waterfalls, in Meher season the earth is adorned with flowers."
        },
        {
          "target": "ችግኞችን በመትከልና የተፈጥሮ ሀብታችንን በመንከባከብ የአካባቢያችንን ውበትና የአየር ንብረት ሚዛን እንጠብቃለን።",
          "reading": "Čəgnyoččən bämätkälənna yätäfät’ro habtaččənən bämänkäbakkäb yä'akabbabiyaččənən wəbätənna yä'ayär nəbrät mizan ənət’äbbəqallän. [tʃʼɨɡɲoˈtʃːɨn bɛmɛtˈkɛlɨnːa jɛtɛfɛtʼˈro habtatʃːɨˈnɨn bɛmɛnkɛbakːɛb jɛʔakabːabijatʃːɨˈnɨn wɨbɛˈtɨnːa jɛʔaˈjɛr nɨbˈrɛt miˈzan ʔɨnətʼɛbːɨˈkʼalːɛn] (ch'ug-nyohch-CHOON beh-met-KEL-un-nah yeh-teh-fet'-ROH hahb-tahch-CHUN-un beh-men-keh-bahk-KEB yeh-ah-kahb-bah-bee-yahch-CHUN-un wub-beh-TUN-nah yeh-ah-YER nub-RET mee-ZAHN uhn-t'eb-buh-K'AHL-len)",
          "translation": "By planting seedlings and caring for our natural resources, we maintain our environment's beauty and climate balance."
        }
      ],
      "mnemonics": [
        "Earth Balance: Season (ወቅት) + Sky (አየር) + Earth (መልክዓ ምድር) + Conservation (ጥበቃ)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባሕል 'ምድር እናት ናት፣ ከተንከባከብካት ትመግብሃለች' ተብሎ ይተረታል፤ ተፈጥሮን ማክበር ጥንታዊ ማህበራዊ እሴት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የአየር ንብረትና የተፈጥሮ ውህደትን የሚያሳየው የትኛው ነው?",
          "options": [
            "አራቱ ወቅቶች፣ ውብ የመልክዓ ምድር ገጽታዎች እና የተፈጥሮ አካባቢ ጥበቃ ተስማምተው ይገኛሉ። (Complete climate and environmental synthesis)",
            "ምንም ወቅት የለም",
            "ዝናብ አይዘንብም",
            "ተራራና ወንዝ የለም"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ወቅቶችን፣ መልክዓ ምድርንና የአካባቢ ጥበቃን በአንድነት ያጠቃልላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "የችግኝ ተከላንና የተፈጥሮ ውበትን ያጣመረው ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ችግኞችን በመትከል አካባቢያችንን አረንጓዴ እና ውብ እናደርጋለን። (By planting seedlings we make our surroundings green and beautiful - Integrated ecology sentence)",
            "ዛፎች አይጠቅሙም",
            "ተፈጥሮ አያስፈልግም",
            "ውሃ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የችግኝ ተከላንና የተፈጥሮ ውበትን ማሳደግን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 15 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የኢትዮጵያ አራቱ ወቅቶች (በጋ፣ ክረምት፣ መኸር፣ ፀደይ)፣ የዕለት ተዕለት የአየር ሁኔታ፣ የመልክዓ ምድር ገጽታዎችና የውሃ አካላት፣ እንዲሁም የተፈጥሮ አካባቢ ጥበቃና አረንጓዴ አሻራ ተካተዋል።",
            "ይህ ክፍል ስለ ቋንቋ ሰዋሰው ህጎች ብቻ ነው።",
            "በአማርኛ የመልክዓ ምድር ቃላት የሉም።",
            "ሁሉም ወቅቶች እኩል ዝናብ አላቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 15ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ተፈጥሮ / Nature' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ተፈጥሮ"
          ],
          "explanation": "ትክክለኛው ቃል «ተፈጥሮ» (Täfät’ro) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u16-l1": {
    "id": "am-u16-l1",
    "subject": "amharic",
    "unit": 16,
    "lessonNumber": 1,
    "title": "የቤት ውስጥ ክፍሎች (Rooms of the House)",
    "level": "B1",
    "objective": "የቤት ውስጥ ክፍሎችን (ሳሎን፣ መኝታ ቤት፣ ማብሰያ/ወጥ ቤት፣ መታጠቢያ ቤት፣ በረንዳ፣ ጓሮ) መለየትና መግለጽ።",
    "presentation": {
      "explanation": "ዋና ዋና የቤት ውስጥ ክፍሎች እና ተግባራቸው:\n\n፩. የቤት ክፍሎች:\n- ሳሎን: እንግዳ የሚቀበሉበትና ቤተሰብ በአንድነት የሚሰበሰብበት ዋና ክፍል ነው።\n- መኝታ ቤት: ለማረፍና ለመተኛት የሚያገለግል ክፍል ነው።\n- ማብሰያ / ወጥ ቤት: ምግብ የሚዘጋጅበትና የሚበስልበት ክፍል ነው።\n- መታጠቢያ ቤት: ሰውነትን ለመታጠብና ንጽሕናን ለመጠበቅ የሚያገለግል ነው።\n- በረንዳ: ንጹህ አየር የሚወስዱበትና የሚያርፉበት የውጭ መተላለፊያ ነው።\n- ጓሮ / ግቢ: አትክልት የሚተከልበትና ዛፎች ያሉበት የቤት ጀርባ ነው።\n\n፪. ሰዋሰዋዊ መዋቅር:\n«በ... ክፍል ውስጥ» (Inside the ... room):\n- «ቤተሰቡ በሳሎን ውስጥ ተሰብስቧል»\n- «እናት በማብሰያ ቤት ውስጥ ምግብ ታዘጋጃለች»።",
      "examples": [
        {
          "target": "አዲሱ ቤታችን ሰፊ ሳሎን፣ ሦስት መኝታ ቤቶች እና ዘመናዊ ማብሰያ ቤት አለው።",
          "reading": "Addisu betaččən säfi salon, sost mänyəta betoččənna zämänawi mabsäya bet alläw. [ʔadːiˈsu beˈtatʃːɨn sɛˈfi saˈlon sost mɛɲɨˈta beˈtotʃːɨnːa zɛmɛnaˈwi mabˈsɛja bet ʔalːɛw] (ahd-dee-SOO bay-tahch-CHUN seh-FEE sah-LOHN, sohst men-yuh-TAH bay-TOHCH-choon-nah zeh-meh-nah-WEE mahb-SEH-yah bayt AHL-lew)",
          "translation": "Our new house has a spacious living room, three bedrooms, and a modern kitchen."
        },
        {
          "target": "እናት በማብሰያ ቤት ውስጥ ጣፋጭ ምግብ እያዘጋጀች እኛ በረንዳ ላይ ቡና እንጠጣለን።",
          "reading": "Ənnat bämabsäya bet wəst’ t’əfač’ məgəb əyazzäggağäčč ənya bärända lay bunna ənnət’ät’allän. [ʔɨnːat bɛmabˈsɛja bet wɨstʼ tʼɨˈfatʃʼ mɨɡb ʔɨjazːɛɡːaˈdʒɛtʃː ʔɨɲa bɛrɛnˈda laj bunːa ʔɨnːɨtʼɛˈtʼalːɛn] (un-NAHT beh-mahb-SEH-yah bayt woos-T' t'uh-FAHCH mug-B uh-yahz-zeg-gah-JEHCH un-YAH beh-ren-DAH lye boon-NAH un-nuh-t'eh-T'AHL-len)",
          "translation": "While mother is preparing delicious food inside the kitchen, we drink coffee on the veranda."
        },
        {
          "target": "በቤታችን ጓሮ ውስጥ ሎሚ፣ ጌሾ እና የተለያዩ አትክልቶችን ተክለናል።",
          "reading": "Bäbetaččən gwaro wəst’ lomi, gešo əndihum yätäläyyayu atkəltəwoččən täklänall. [bɛbeˈtatʃːɨn ɡʷaˈro wɨstʼ loˈmi ɡeˈʃo ʔɨndiˈhum jɛtɛlɛjːaˈju ʔatkɨltɨwoˈtʃːɨn tɛkˈlɛnalː] (beh-bay-tahch-CHUN gwah-ROH woos-T' loh-MEE, gay-SHOH un-dee-HOOM yeh-teh-ley-yah-YOO aht-kul-tuh-wohch-CHUN tek-LEH-nahl)",
          "translation": "In our house's backyard, we have planted lemons, gesho, and various vegetables."
        }
      ],
      "mnemonics": [
        "House Blueprint: ሳሎን (Living) + መኝታ ቤት (Bedroom) + ማብሰያ ቤት (Kitchen) + በረንዳ (Porch)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል ሳሎን እንግዶች በክብር የሚስተናገዱበትና የቡና ስነ-ስርዓት በሳርና በዕጣን ታጅቦ የሚካሄድበት ዋና የቤት ማዕከል ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Living room, bedroom, and kitchen» የሚለውን በአማርኛ ትክክለኛ የክፍል ስሞች የያዘው የትኛው ነው?",
          "options": [
            "ሳሎን፣ መኝታ ቤት እና ማብሰያ ቤት (Living room, bedroom, and kitchen - Correct house rooms)",
            "መኪና፣ አውቶቡስ እና ባቡር",
            "እርሳስ፣ ደብተር እና መጽሐፍ",
            "ሱሪ፣ ሸሚዝ እና ኮት"
          ],
          "answerIndex": 0,
          "explanation": "«ሳሎን»፣ «መኝታ ቤት» እና «ማብሰያ ቤት» ሦስቱን ዋና ዋና የቤት ክፍሎችን ያመለክታሉ።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Food is prepared in the kitchen' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ምግብ በማብሰያ ቤት ውስጥ ይዘጋጃል። (Food is prepared in the kitchen - Accurate household location)",
            "ምግብ በመኝታ ቤት ይዘጋጃል",
            "ምግብ በመታጠቢያ ቤት ይበስላል",
            "ወጥ ቤት የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ምግብ በማብሰያ ቤት ውስጥ ይዘጋጃል» የምግብ ማብሰል ተግባር የሚከናወንበትን ክፍል በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የቤት ውስጥ ክፍሎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ሳሎን፣ መኝታ ቤት፣ ማብሰያ ቤት፣ መታጠቢያ ቤት፣ በረንዳ እና ጓሮ።",
            "ቡና፣ ሻይ፣ ወተት እና ጭማቂ።",
            "ሰኞ፣ ማክሰኞ እና ረቡዕ።",
            "በአማርኛ የቤት ክፍሎች ስም የላቸውም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የቤት ክፍሎችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ሳሎን / Living room' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ሳሎን"
          ],
          "explanation": "ትክክለኛው ቃል «ሳሎን» (Salon) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u16-l2": {
    "id": "am-u16-l2",
    "subject": "amharic",
    "unit": 16,
    "lessonNumber": 2,
    "title": "የቤት እቃዎች እና ቁሳቁሶች (Furniture & Household Items)",
    "level": "B1",
    "objective": "የቤት እቃዎችን (ሶፋ፣ አልጋ፣ ጠረጴዛ፣ ወንበር፣ ቁም ሣጥን፣ ፍሪጅ፣ ምድጃ) መግለጽ።",
    "presentation": {
      "explanation": "ዋና ዋና የቤት እቃዎች እና ቁሳቁሶች:\n\n፩. የቤት እቃዎች (Furniture):\n- ሶፋ: በሳሎን ውስጥ ለመቀመጫ የሚያገለግል ምቹ እቃ።\n- አልጋ: ለመኝታ የሚያገለግል ፍራሽ ያለው እቃ።\n- ጠረጴዛ እና ወንበር: ለመመገቢያና ለንባብ የሚያገለግሉ።\n- ቁም ሣጥን: ልብሶችንና ንብረቶችን ለማስቀመጥ የሚያገለግል።\n\n፪. የኤሌክትሮኒክስ እና የማብሰያ እቃዎች:\n- ፍሪጅ (ማቀዝቀዣ): ምግቦች እንዳይበላሹ የሚያቀዘቅዝ።\n- ምድጃ: ወጥ የሚሰራበትና እንጀራ የሚጋገዝበት የኤሌክትሪክ ወይም የጋዝ እቃ።\n- መጋረጃ እና ምንጣፍ: ክፍሉን የሚያስውቡና የሚያሞቁ።",
      "examples": [
        {
          "target": "ለአዲሱ ሳሎናችን ምቹ የሆነ የቆዳ ሶፋ፣ የእንጨት ጠረጴዛ እና ውብ ምንጣፍ ገዛን።",
          "reading": "Lä'addisu salonaččən məč’u yähonä yäqoda sofa, yä'ənč’ät t’äräp’p’eza əndihum wəbb mənət’af gäzzan. [lɛʔadːiˈsu saloˈnatʃːɨn mɨtʃʼu jɛhoˈnɛ jɛkʼoˈda soˈfa jɛʔɨntʃʼɛt tʼɛrɛpʼːeˈza ʔɨndiˈhum wɨbː mɨnɨˈtʼaf ɡɛzːan] (leh-ahd-dee-SOO sah-loh-NAHCH-chun muh-CH'OO yeh-HOH-neh yeh-k'oh-DAH soh-FAH, yeh-un-ch'ET t'eh-rep'-PAY-zah un-dee-HOOM wub-B muh-nuh-T'AHF gez-ZAHN)",
          "translation": "For our new living room we bought a comfortable leather sofa, a wooden table, and a beautiful carpet."
        },
        {
          "target": "በመኝታ ቤቱ ውስጥ ሰፊ ድርብ አልጋ እና ባለ ሦስት በር ቁም ሣጥን ተቀምጧል።",
          "reading": "Bämänyəta betu wəst’ säfi dərəbb alga əndihum balä sost bärr qum sat’ən täqämət’wall. [bɛmɛɲɨˈta beˈtu wɨstʼ sɛˈfi dɨˈrɨbː ʔalˈɡa ʔɨndiˈhum baˈlɛ sost bɛrː kʼum satʼn tɛkʼɛmɨˈtʼwalː] (beh-men-yuh-TAH bay-TOO woos-T' seh-FEE duh-RUB ah-L-gah un-dee-HOOM bah-LEH sohst ber-R k'oom SAHT'-un teh-k'eh-mut'-WAHL)",
          "translation": "Inside the bedroom, a wide double bed and a three-door wardrobe are placed."
        },
        {
          "target": "በማብሰያ ቤቱ ውስጥ አዲሱ ፍሪጅ እና ዘመናዊው የኤሌክትሪክ ምድጃ ተገጥመዋል።",
          "reading": "Bämabsäya betu wəst’ addisu fəridğ əndihum zämänawiw yä'elektrik mədəğğa tägät’məwall. [bɛmabˈsɛja beˈtu wɨstʼ ʔadːiˈsu fɨˈridʒ ʔɨndiˈhum zɛmɛnaˈwiw jɛʔɛlekˈtrik mɨdɨdʒːa tɛɡɛtʼmɨˈwalː] (beh-mahb-SEH-yah bay-TOO woos-T' ahd-dee-SOO fuh-REEJ un-dee-HOOM zeh-meh-nah-WEE-woo yeh-eh-lek-TREEK muh-duj-JAH teh-get'-muh-WAHL)",
          "translation": "Inside the kitchen, the new refrigerator and the modern electric stove have been installed."
        }
      ],
      "mnemonics": [
        "Furniture Suite: ሶፋ (Sofa) + አልጋ (Bed) + ጠረጴዛ (Table) + ቁም ሣጥን (Wardrobe)!"
      ],
      "culturalNotes": [
        "በባህላዊ የኢትዮጵያ ቤት ውስጥ 'በርጩማ' (ባለ ሦስት እግር የእንጨት መቀመጫ) እና 'መስቀያ' ጥንታዊና ተወዳጅ የቤት ቁሳቁሶች ናቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Sofa, bed, table, and wardrobe» የሚለውን በአማርኛ ትክክለኛ የቤት እቃዎች ስሞች የያዘው የትኛው ነው?",
          "options": [
            "ሶፋ፣ አልጋ፣ ጠረጴዛ እና ቁም ሣጥን (Sofa, bed, table, and wardrobe - Correct furniture items)",
            "ስልክ፣ ቴሌቪዥን እና ሬዲዮ",
            "ሹካ፣ ማንኪያ እና ቢላዋ",
            "ሸሚዝ፣ ሱሪ እና ጫማ"
          ],
          "answerIndex": 0,
          "explanation": "«ሶፋ»፣ «አልጋ»፣ «ጠረጴዛ» እና «ቁም ሣጥን» ዋና ዋና የቤት ውስጥ እቃዎችን ያመለክታሉ።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'A large wardrobe is in the bedroom' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "በመኝታ ክፍሉ ውስጥ ትልቅ ቁም ሣጥን አለ። (A large wardrobe is in the bedroom - Accurate furniture statement)",
            "ቁም ሣጥን በመንገድ ላይ አለ",
            "ምንም እቃ የለም",
            "አልጋ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«በመኝታ ክፍሉ ውስጥ ትልቅ ቁም ሣጥን አለ» የቁም ሣጥኑን መገኛና መጠን በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የቤት እቃዎችንና ቁሳቁሶችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ሶፋ፣ አልጋ፣ ጠረጴዛ፣ ወንበር፣ ቁም ሣጥን፣ ፍሪጅ፣ ምድጃ እና ምንጣፍ።",
            "አውሮፕላን፣ መርከብ እና ሄሊኮፕተር።",
            "ድንጋይ፣ አሸዋ እና ሲሚንቶ ብቻ።",
            "በአማርኛ የቤት እቃዎች ቃላት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የቤት እቃዎችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ጠረጴዛ / Table' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ጠረጴዛ"
          ],
          "explanation": "ትክክለኛው ቃል «ጠረጴዛ» (T’äräp’p’eza) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u16-l3": {
    "id": "am-u16-l3",
    "subject": "amharic",
    "unit": 16,
    "lessonNumber": 3,
    "title": "የቤት ኪራይ፣ ግዢ እና ውል (Renting, Buying & Lease Agreements)",
    "level": "B1",
    "objective": "የቤት ኪራይና ግዢ ቃላትን (ኪራይ፣ ተከራይ፣ አከራይ፣ ውል፣ ቅድመ ክፍያ፣ ደላላ) መግለጽ።",
    "presentation": {
      "explanation": "የቤት ኪራይ፣ ግዢ እና ህጋዊ ውል መዋቅሮች:\n\n፩. የኪራይና የግዢ ቃላት:\n- ኪራይ: በየወሩ የሚከፈል የመኖሪያ ቤት ክፍያ።\n- አከራይ: የቤቱ ባለቤት ሆኖ ቤቱን ለሌላ ሰው የሚያከራይ።\n- ተከራይ: የኪራይ ገንዘብ ከፍሎ በቤቱ ውስጥ የሚኖር።\n- ደላላ: አከራይና ተከራይን የሚያገናኝ መካከለኛ ባለሙያ።\n- የቤት ውል: በአከራይና በተከራይ መካከል የሚደረግ ህጋዊ የጽሑፍ ስምምነት።\n- ቅድመ ክፍያ: ውል ሲፈረም አስቀድሞ የሚከፈል የተቀማጭ ገንዘብ።\n\n፪. ሰዋሰዋዊ አገባብ:\n«ቤት መከራየት እፈልጋለሁ» (I want to rent a house):\n- «የወሩ ኪራይ ስንት ነው?»\n- «የስድስት ወር ቅድመ ክፍያ ከፍዬ ውል ፈረምኩ»።",
      "examples": [
        {
          "target": "በከተማዋ መሀል ለትራንስፖርት ምቹ የሆነ ባለ ሁለት መኝታ ቤት ተከራየሁ።",
          "reading": "Bä-kätämawa mähäl lätiransport məč’u yähonä balä hulätt mänyəta bet täkärayyähu. [bɛkɛtɛmaˈwa mɛˈhɛl lɛtiransˈport mɨtʃʼu jɛhoˈnɛ baˈlɛ huˈlɛtː mɛɲɨˈta bet tɛkɛraˈjːɛhu] (beh-keh-teh-mah-WAH meh-HEL leh-tee-rahns-POHRT muh-CH'OO yeh-HOH-neh bah-LEH hoo-LET-t muh-nuh-TAH bayt teh-keh-ry-YEH-hoo)",
          "translation": "In the center of the city, I rented a two-bedroom house convenient for transportation."
        },
        {
          "target": "ከአከራዩ ጋር የሁለት ዓመት የቤት ኪራይ ውል ተፈራርመን የቅድመ ክፍያ ከፈልን።",
          "reading": "Kä'akärayu gara yähulätt ʿamät yäbet kiray wəl täfärarrəmän yäqəddəmä kəffəya käfäln. [kɛʔakɛraˈju ɡaˈra jɛhuˈlɛtː ʔaˈmɛt jɛbet kiˈraj wɨl tɛfɛrarːɨˈmɛn jɛkʼɨdːɨˈmɛ kɨfːɨˈja kɛˈfɛln] (keh-ah-keh-rah-YOO gah-RAH yeh-hoo-LET-t ah-MET yeh-BAYT kee-RY wul teh-feh-rahr-ruh-MEN yeh-k'ud-duh-MEH kuf-fuh-YAH keh-FEL-un)",
          "translation": "We signed a two-year house lease agreement with the landlord and paid the deposit."
        },
        {
          "target": "ደላላው ተስማሚ ቤት እንድናገኝና ከአከራዩ ጋር እንድንደራደር ረዳን።",
          "reading": "Dälalaw täsmami bet əndənnagänyənna kä'akärayu gara əndənnədäraddär rəddan. [dɛlaˈlaw tɛsmaˈmi bet ʔɨndɨnːaˈɡɛɲɨnːa kɛʔakɛraˈju ɡaˈra ʔɨndɨnːɨdɛradːɛr rɨdːan] (deh-lah-LAHW tes-mah-MEE bayt un-dun-nah-GEN-yun-nah keh-ah-keh-rah-YOO gah-RAH un-dun-nuh-deh-rahd-DER rud-DAHN)",
          "translation": "The broker helped us find a suitable house and negotiate with the landlord."
        }
      ],
      "mnemonics": [
        "Lease Cycle: አከራይ (Landlord) + ተከራይ (Tenant) + ውል (Contract) + ኪራይ (Rent)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ከተሞች የመኖሪያ ቤት ሲከራይ የጽሑፍ ውል ማዘጋጀትና በሕግ ክፍል ማስመዝገብ ሁለቱንም ወገኖች ከክርክር የሚጠብቅ አስፈላጊ አሰራር ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Signing a house rental contract» የሚለውን በአማርኛ ትክክለኛ የኪራይ አገላለጽ የያዘው የትኛው ነው?",
          "options": [
            "የቤት ኪራይ ውል መፈረም (Signing a house rental contract - Correct legal leasing action)",
            "ቤት መስበር",
            "ውል መቅደድ",
            "ኪራይ አለመክፈል"
          ],
          "answerIndex": 0,
          "explanation": "«የቤት ኪራይ ውል መፈረም» ህጋዊውን የስምምነት ድርጊት በትክክል ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'I paid the deposit to the landlord' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ለአከራዩ የቅድመ ክፍያ ከፈልኩ። (I paid the deposit to the landlord - Accurate rental payment)",
            "አከራይ አልከፈልኩም",
            "ምንም ቤት አልተከራየሁም",
            "ቅድመ ክፍያ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ለአከራዩ የቅድመ ክፍያ ከፈልኩ» ክፍያውንና ተቀባዩን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የቤት ኪራይና ውል ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "የቤት ኪራይ፣ አከራይ፣ ተከራይ፣ ደላላ፣ ህጋዊ ውል እና ቅድመ ክፍያ።",
            "ስኒ፣ ድስት እና ጭልፋ።",
            "ኮት፣ ከረባት እና ጓንት።",
            "በአማርኛ የኪራይ ቃላት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የኪራይና ውል ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ኪራይ / Rent, lease payment' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ኪራይ"
          ],
          "explanation": "ትክክለኛው ቃል «ኪራይ» (Kiray) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u16-l4": {
    "id": "am-u16-l4",
    "subject": "amharic",
    "unit": 16,
    "lessonNumber": 4,
    "title": "የቦታ መገኛና አንጻራዊ አቀማመጥ መግለጫዎች (Spatial Relations & Prepositions)",
    "level": "B1",
    "objective": "የቦታ መገኛ መስተዋድዶችን (ላይ፣ ሥር፣ ውስጥ፣ ውጭ፣ ፊት ለፊት፣ ጀርባ፣ አጠገብ/ጎን፣ መካከል) መጠቀም።",
    "presentation": {
      "explanation": "የቦታ መገኛና አንጻራዊ አቀማመጥ መስተዋድዶች:\n\n፩. የመገኛ ቃላት (Spatial Prepositions):\n- በ... ላይ: በአንድ ነገር የላይኛው ክፍል ላይ (On / upon)።\n- በ... ሥር: ከአንድ ነገር በታች ወይም ከስር (Under / beneath)።\n- በ... ውስጥ: በአንድ ነገር ውስጣዊ ክፍል (Inside)።\n- በ... ውጭ: ከአንድ ነገር ወጣ ብሎ (Outside)።\n- በ... ፊት ለፊት: በአንድ ነገር ፊት ትይዩ (In front of)።\n- በ... ጀርባ / ኋላ: ከአንድ ነገር በስተጀርባ (Behind)።\n- በ... አጠገብ / ጎን: በአንድ ነገር ቅርበት (Beside / next to)።\n- በ... መካከል: በሁለት ወይም በብዙ ነገሮች መሃል (Between / among)።\n\n፪. ሰዋሰዋዊ መዋቅር:\n«በ + [ስም] + [የቦታ መስተዋድድ] + አለ / ተቀምጧል»:\n- «መጽሐፉ በጠረጴዛው ላይ አለ»\n- «ድመቷ ከአልጋው ሥር ተኝታለች»።",
      "examples": [
        {
          "target": "መጽሐፉና የብርጭቆው ማስቀመጫ በጠረጴዛው ላይ ተቀምጠዋል።",
          "reading": "Mäts’hafuna yäbərč’əqqow masqämäč’a bät’äräp’p’ezaw lay täqämət’äwall. [mɛtsʼhaˈfuna jɛbɨrtʃʼɨkʼːow maskʼɛmɛˈtʃʼa bɛtʼɛrɛpʼːeˈzaw laj tɛkʼɛmɨˈtʼɛwalː] (mets'-HAH-foo-nah yeh-bur-ch'uk'-K'OH mahs-k'eh-meh-CH'AH beh-t'eh-rep'-PAY-zow lye teh-k'eh-mut'-EH-wahl)",
          "translation": "The book and the glass holder are placed on the table."
        },
        {
          "target": "ቴሌቪዥኑ በሶፋው ፊት ለፊት ሲሆን ምንጣፉ በክፍሉ መካከል ተዘርግቷል።",
          "reading": "Televizyənu bäsofaw fit läfit sihon mənət’afu bäkəfəlu mäkkakäl täzärgətwall. [televizˈjɨnu bɛsoˈfaw fit ləˈfit siˈhon mɨnɨˈtʼafu bɛkɨfˈlu mɛkːaˈkɛl tɛzɛrɡɨˈtwalː] (tay-lay-veez-YUH-noo beh-soh-FOW feet leh-FEET see-HOHN muh-nuh-T'AH-foo beh-kuf-LOO mek-kah-KEL teh-zer-gut-WAHL)",
          "translation": "While the television is in front of the sofa, the carpet is spread in the middle of the room."
        },
        {
          "target": "ቁልፌን ከቁም ሣጥኑ ጀርባ በድንገት አገኘሁት።",
          "reading": "Qulfen käqum sat’ənu ğärba bädəngät agänyähut. [kʼulˈfen kɛkʼum satʼɨˈnu dʒɛrˈba bɛdɨnˈɡɛt ʔaɡɛˈɲɛhut] (k'ool-FAYN keh-k'oom sah-t'uh-NOO jer-BAH beh-dun-GET ah-gen-YEH-hoot)",
          "translation": "I accidentally found my key behind the wardrobe."
        }
      ],
      "mnemonics": [
        "Spatial Compass: ላይ (On) + ሥር (Under) + ፊት ለፊት (In front) + ጀርባ (Behind)!"
      ],
      "culturalNotes": [
        "በአማርኛ ሰዋሰው የቦታ መስተዋድዶች ሁልጊዜ 'በ...' ወይም 'ከ...' ከሚለው ቅድመ-መስተዋድድ ጋር ተጣምረው እንደ ድርብ መስተዋድድ ያገለግላሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«The book is on the table» የሚለውን በአማርኛ ትክክለኛ የቦታ መስተዋድድ የተጠቀመው የትኛው ነው?",
          "options": [
            "መጽሐፉ በጠረጴዛው ላይ አለ። (The book is on the table - Correct spatial preposition)",
            "መጽሐፉ ጠረጴዛ ነው",
            "መጽሐፉ ጠረጴዛ የለውም",
            "መጽሐፍ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«በጠረጴዛው ላይ» የሚለው ድርብ መስተዋድድ የቦታ መገኛን በትክክል ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'The shoes are under the bed' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ጫማዎቹ ከአልጋው ሥር ናቸው። (The shoes are under the bed - Accurate spatial location)",
            "ጫማዎቹ አልጋ ላይ ናቸው",
            "ጫማ አልጋ ነው",
            "ጫማ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ከአልጋው ሥር ናቸው» ከአልጋ በታች መሆናቸውን በትክክል ያመለክታል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የቦታ መገኛ መስተዋድዶችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ላይ፣ ሥር፣ ውስጥ፣ ውጭ፣ ፊት ለፊት፣ ጀርባ፣ አጠገብ እና መካከል ናቸው።",
            "ትናንት፣ ዛሬ እና ነገ።",
            "ቀይ፣ ቢጫ እና አረንጓዴ።",
            "በአማርኛ የቦታ መስተዋድዶች የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የቦታ መገኛ መስተዋድዶችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ውስጥ / Inside, within' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ውስጥ"
          ],
          "explanation": "ትክክለኛው ቃል «ውስጥ» (Wəst’) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u16-l5": {
    "id": "am-u16-l5",
    "subject": "amharic",
    "unit": 16,
    "lessonNumber": 5,
    "title": "የክፍል 16 አጠቃላይ ማጠቃለያ (Unit 16 Grand Synthesis & Housing Discourse)",
    "level": "B1",
    "objective": "ክፍሎችን፣ የቤት እቃዎችን፣ የኪራይ ውልንና የቦታ መገኛ መስተዋድዶችን ያቀናጀ የተሟላ የቤት ኑሮ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፲፮ አጠቃላይ ሰዋሰዋዊ ውህደት እና የመኖሪያ ቤት ተግባቦት ማጠቃለያ:\n\n፩. የቤት ክፍሎች:\n- ሳሎን፣ መኝታ ቤት፣ ማብሰያ ቤት፣ መታጠቢያ ቤት፣ በረንዳ፣ ጓሮ።\n\n፪. የቤት እቃዎች:\n- ሶፋ፣ አልጋ፣ ጠረጴዛ፣ ወንበር፣ ቁም ሣጥን፣ ፍሪጅ፣ ምድጃ።\n\n፫. የቤት ኪራይ እና ውል:\n- አከራይ፣ ተከራይ፣ ደላላ፣ ህጋዊ ውል፣ ቅድመ ክፍያ።\n\n፬. የቦታ መገኛ መስተዋድዶች:\n- ላይ፣ ሥር፣ ውስጥ፣ ውጭ፣ ፊት ለፊት፣ ጀርባ፣ አጠገብ፣ መካከል (በ... ላይ፣ በ... ሥር)።",
      "examples": [
        {
          "target": "አዲስ ቤት ተከራይተን ውል ከፈረምን በኋላ እቃዎቻችንን በየክፍሉ ውስጥ በሚገባ አደራጀን።",
          "reading": "Addis bet täkärayətän wəl käfärrämən bähwala əqawoččaččənən bäyyäkəfəlu wəst’ bämigäba addärrağğän. [ʔadːis bet tɛkɛraˈjɨtɛn wɨl kɛfɛrːəˈmɨn bɛhʷaˈla ʔɨkʼawotʃːaˈtʃːɨnɨn bɛjːɛkɨfˈlu wɨstʼ bɛmiɡɛˈba ʔadːɛrːadʒːɛn] (ahd-DEES bayt teh-keh-ry-TEN wul keh-fer-ruh-MUN beh-hwah-LAH uh-k'ah-wohch-CHAHCH-chun-un bey-yeh-kuf-LOO woos-T' beh-mee-geh-BAH ahd-der-RAHJ-jen)",
          "translation": "After renting a new house and signing the contract, we properly organized our belongings inside each room."
        },
        {
          "target": "በሳሎኑ መካከል ውብ ምንጣፍ ተነጥፎ ሶፋው በቴሌቪዥኑ ፊት ለፊት ተቀምጧል።",
          "reading": "Bäsalonu mäkkakäl wəbb mənət’af tänät’fo sofaw bä-televizyənu fit läfit täqämət’wall. [bɛsaloˈnu mɛkːaˈkɛl wɨbː mɨnɨˈtʼaf tɛnɛtʼˈfo soˈfaw bɛtelevizˈjɨnu fit ləˈfit tɛkʼɛmɨˈtʼwalː] (beh-sah-loh-NOO mek-kah-KEL wub-B muh-nuh-T'AHF teh-net'-FOH soh-FAW beh-tay-lay-veez-YUH-noo feet leh-FEET teh-k'eh-mut'-WAHL)",
          "translation": "In the middle of the living room, a beautiful carpet is laid and the sofa is placed in front of the television."
        },
        {
          "target": "ጎረቤቶቻችንን እና ጓደኞቻችንን በበረንዳችን ላይ በደስታ ተቀብለን የቡና ስነ-ስርዓት አደረግን።",
          "reading": "Gworäbetoččaččənənənna gwadänyoččaččənən bäbärändaččən lay bädässəta täqäbbəlän yäbunna sənä-sərʿat adärrägn. [ɡʷorɛbetoˈtʃːatʃːɨnɨnːa ɡʷadɛɲoˈtʃːatʃːɨnɨn bɛbɛrɛnˈdatʃːɨn laj bɛdɛsːɨˈta tɛkʼɛbːɨˈlɛn jɛbunːa sɨnɛsɨrˈʔat ʔadɛrːɛɡn] (gwoh-reh-bay-TOHCH-chahch-CHUN-un-nah gwah-den-yohch-CHAHCH-chun-un beh-beh-ren-DAHCH-chun lye beh-des-suh-TAH teh-k'eb-buh-LEN yeh-boon-NAH suh-neh-sur-AHT ah-der-REG-un)",
          "translation": "We happily welcomed our neighbors and friends on our veranda and conducted a coffee ceremony."
        }
      ],
      "mnemonics": [
        "Home Harmony: Shelter (ቤት) + Furniture (እቃዎች) + Contract (ውል) + Arrangement (አቀማመጥ)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል አዲስ ቤት ሲገባ 'ምርቃት' ወይም 'የቤት ምርቃት' ተብሎ ጎረቤቶችና ዘመዶች ተጠርተው የሚደረግ ታላቅ የምስጋናና የደስታ በዓል አለ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የመኖሪያ ቤት አደረጃጀትና የኪራይ ውህደትን የሚያሳየው የትኛው ነው?",
          "options": [
            "ቤት ተከራየን፣ ውል ፈረምን፣ እንዲሁም የቤት እቃዎችን በየክፍሉ ውስጥ አደራጀን። (Complete housing, lease, and arrangement synthesis)",
            "ቤት የለንም",
            "ምንም እቃ አልገዛንም",
            "ውል አልፈረምንም"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ መከራየትን፣ ውል መፈረምንና እቃዎችን ማደራጀትን በአንድነት ያጠቃልላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "የቤት እቃዎችንና የቦታ መገኛ መስተዋድዶችን ያጣመረው ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ሶፋው በሳሎኑ ውስጥ በጠረጴዛው ፊት ለፊት ተቀምጧል። (The sofa is placed in the living room in front of the table - Integrated spatial furniture sentence)",
            "ሶፋ የለም",
            "ጠረጴዛው ተሰብሯል",
            "ምንም ክፍል የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የቤት እቃውን (ሶፋ)፣ ክፍሉን (ሳሎን) እና የቦታ መገኛውን (ፊት ለፊት) በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 16 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የቤት ውስጥ ክፍሎች (ሳሎን፣ መኝታ ቤት፣ ማብሰያ ቤት)፣ የቤት እቃዎችና ቁሳቁሶች፣ የቤት ኪራይና ህጋዊ ውል፣ እንዲሁም የቦታ መገኛ መስተዋድዶች ተካተዋል።",
            "ይህ ክፍል ስለ ትራንስፖርት ብቻ ነው።",
            "በአማርኛ የቤት ቃላት የሉም።",
            "ሁሉም ክፍሎች አንድ ዓይነት ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 16ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'መኖሪያ ቤት / Residential house, home' የሚለውን ሐረግ በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "መኖሪያ ቤት",
            "መኖሪያ"
          ],
          "explanation": "ትክክለኛው ቃል «መኖሪያ ቤት» (Mänoriya bet) ወይም «መኖሪያ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u17-l1": {
    "id": "am-u17-l1",
    "subject": "amharic",
    "unit": 17,
    "lessonNumber": 1,
    "title": "የግል አስተያየትን መግለጽ (Expressing Personal Opinions)",
    "level": "B1",
    "objective": "የግል አስተያየትን መግለጫ ሀረጎችን (በእኔ አስተያየት፣ እኔ እንደሚመስለኝ፣ ይመስለኛል፣ አምናለሁ) መጠቀም።",
    "presentation": {
      "explanation": "የግል አስተያየት መግለጫ ሰዋሰዋዊ ሀረጎች:\n\n፩. የአስተያየት አገላለጾች:\n- በእኔ አስተያየት: በራሴ እይታና አመለካከት (In my opinion)።\n- እኔ እንደሚመስለኝ: እንደ እኔ ግምትና እሳቤ (As I see it / As it seems to me)።\n- ይመስለኛል: ነገሩ እንደዚያ እንደሆነ አስባለሁ (I think / It seems to me)።\n- አምናለሁ: በሙሉ ልብ እርግጠኛ ነኝ (I believe / I trust)።\n- ይሰማኛል: ውስጣዊ ስሜቴና አረዳዴ ነው (I feel that)።\n\n፪. ሰዋሰዋዊ መዋቅር:\n«[የአስተያየት ሀረግ] + [ሃሳብ / ድምዳሜ]»:\n- «በእኔ አስተያየት ይህ መጽሐፍ በጣም ጠቃሚ ነው»\n- «እኔ እንደሚመስለኝ ትምህርት የህይወት መሰረት ነው»።",
      "examples": [
        {
          "target": "በእኔ አስተያየት ትጋትና ቀጣይነት ያለው ጥረት ለስኬት ወሳኝ ነገሮች ናቸው።",
          "reading": "Bä'əne astäyayät təgatənna qät’t’aynät yalläw t’irät läsəkkät wäsany nägäročč naččäw. [bɛʔɨˈne ʔastɛjaˈjɛt tɨˈɡatɨnːa kʼɛtʼːajˈnɛt jalːɛw tʼiˈrɛt lɛsɨkːet wɛˈsaɲ nɛɡɛˈrotʃː natʃːɛw] (beh-uh-NAY ahs-teh-yah-YET tuh-GAHT-un-nah k'et'-tah-yeen-NET YAHL-lew t'ee-RET leh-suk-KAYT weh-SAHNY neh-geh-ROHCH-choo NAHCH-chew)",
          "translation": "In my opinion, diligence and continuous effort are crucial factors for success."
        },
        {
          "target": "እኔ እንደሚመስለኝ በከተማችን ውስጥ የህዝብ ትራንስፖርት መስፋፋት አለበት።",
          "reading": "Əne əndämmimmäsəläny bäkätämaččən wəst’ yähəzb tiransport mäsfafat alläbbät. [ʔɨˈne ʔɨndɛmːimːɛsɨˈlɛɲ bɛkɛtɛmaˈtʃːɨn wɨstʼ jɛhɨzb tiransˈport mɛsfaˈfat ʔalːɛbːɛt] (uh-NAY un-dem-mee-meh-suh-LENY beh-keh-teh-mahch-CHUN woos-T' yeh-HUZB tee-rahns-POHRT mes-fah-FAHT ahl-leb-BET)",
          "translation": "As it seems to me, public transportation should expand in our city."
        },
        {
          "target": "በውይይትና በሰላማዊ መንገድ ችግሮችን መፍታት እንደምንችል በጽኑ አምናለሁ።",
          "reading": "Bäwəyəyyətənna bäsälamawi mängäd čəggəroččən mäftat əndämmənəčəl bäts’ənu amənallähu. [bɛwɨjɨjːɨˈtɨnːa bɛsɛlamaˈwi mɛnˈɡɛd tʃʼɨɡːɨroˈtʃːɨn mɛfˈtat ʔɨndɛmːɨnɨˈtʃɨl bɛtsʼɨˈnu ʔamɨnaˈlːɛhu] (beh-wuh-yuhy-yuh-TUN-nah beh-seh-lah-mah-WEE men-GED ch'ug-guh-rohch-CHOON mef-TAHT un-dem-muh-nuh-CHUL beh-ts'uh-NOO ah-mun-NAHL-leh-hoo)",
          "translation": "I firmly believe that we can solve problems through dialogue and peaceful ways."
        }
      ],
      "mnemonics": [
        "Opinion Starters: በእኔ አስተያየት (In my opinion) + ይመስለኛል (I think) + አምናለሁ (I believe)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህላዊ ውይይት የግል አስተያየትን በትህትና መግለጽ ('እንደ እኔ አረዳድ/ግምት' በማለት) ማህበራዊ ጨዋነትንና አክብሮትን ያሳያል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«In my opinion, this plan is good» የሚለውን በአማርኛ ትክክለኛ የአስተያየት አገላለጽ የያዘው የትኛው ነው?",
          "options": [
            "በእኔ አስተያየት ይህ ዕቅድ ጥሩ ነው። (In my opinion, this plan is good - Correct opinion starter)",
            "ዕቅዱ መጥፎ ነው",
            "ምንም ዕቅድ የለም",
            "አስተያየት የለኝም"
          ],
          "answerIndex": 0,
          "explanation": "«በእኔ አስተያየት» የሚለው ሀረግ የግል አስተያየትን በትህትናና በግልጽ ለመግለጽ ያገለግላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'I believe we can achieve success' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ስኬታማ መሆን እንደምንችል አምናለሁ። (I believe we can achieve success - Accurate belief statement)",
            "ስኬት አይቻልም",
            "አላምንም",
            "ምንም ስኬት የለም"
          ],
          "answerIndex": 0,
          "explanation": "«አምናለሁ» የሚለው ቃል በጽኑ እምነት ላይ የተመሰረተ የግል አቋምን በትክክል ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የግል አስተያየት መግለጫ ሀረጎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "በእኔ አስተያየት፣ እኔ እንደሚመስለኝ፣ ይመስለኛል፣ አምናለሁ እና ይሰማኛል።",
            "ሹካ፣ ማንኪያ እና ሳህን።",
            "አንድ፣ ሁለት እና ሦስት።",
            "በአማርኛ የአስተያየት ቃላት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የአስተያየት መግለጫ ሀረጎችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አስተያየት / Opinion, view' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አስተያየት"
          ],
          "explanation": "ትክክለኛው ቃል «አስተያየት» (Astäyayät) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u17-l2": {
    "id": "am-u17-l2",
    "subject": "amharic",
    "unit": 17,
    "lessonNumber": 2,
    "title": "የንጽጽር ደረጃዎች (Comparative Degree)",
    "level": "B1",
    "objective": "የንጽጽር ግሶችን (ከ... ይሻላል፣ ከ... ይበልጣል፣ ከ... ይልቃል፣ ከ... ያንሳል) በመጠቀም ሁለት ነገሮችን ማወዳደር።",
    "presentation": {
      "explanation": "የንጽጽር ሰዋሰዋዊ መዋቅር (Comparatives):\n\n፩. የንጽጽር አገላለጾች:\n- ከ... ይሻላል: አንደኛው ከሌላው የተሻለ ጥራት ሲኖረው (Is better than)።\n- ከ... ይበልጣል: በመጠን፣ በብዛት ወይም በእድሜ ሲበልጥ (Is greater / more than)።\n- ከ... ይልቃል: በከፍተኛ ብልጫ ሲያልፍ (Surpasses / exceeds)።\n- ከ... ያንሳል: በመጠን ወይም በደረጃ ሲያንስ (Is less / smaller than)።\n\n፪. ሰዋሰዋዊ ቀመር:\n[ስም ሀ] + [ከ + ስም ለ] + [ይሻላል / ይበልጣል / ያንሳል]:\n- «ቡና ከሻይ ይሻላል» (Coffee is better than tea)\n- «አዲስ አበባ ከሐዋሳ ትበልጣለች» (Addis Ababa is larger than Hawassa)።",
      "examples": [
        {
          "target": "ጠዋት በማለዳ መነሳት እና ማጥናት ከማታ ንባብ ይሻላል።",
          "reading": "T’äwat bämaläda mänässatənna mat’nat kämatan nəbab yəššalal. [tʼɛwat bɛmalɛˈda mɛnɛsːaˈtɨnːa matʼˈnat kɛmaˈtan nɨˈbab jɨʃːaˈlal] (t'eh-WAHT beh-mah-leh-DAH meh-nes-SAH-tun-nah maht'-NAHT keh-mah-TAHN nuh-BAHB yush-shah-LAHL)",
          "translation": "Waking up and studying early in the morning is better than night reading."
        },
        {
          "target": "የአውሮፕላን ጉዞ ከባቡር ወይም ከመኪና ፍጥነቱ እጅግ ይበልጣል።",
          "reading": "Yä'awroplan guzo käbabur wäyəm kämäkina fət’nätu əğğəg yəbälət’all. [jɛʔawroˈplan ɡuˈzo kɛbaˈbur wɛˈjɨm kɛmɛkiˈna fɨtʼnɛˈtu ʔɨdʒːɨɡ jɨbɛlɨˈtʼalː] (yeh-ow-roh-PLAHN goo-ZOH keh-bah-BOOR weh-YUM keh-meh-kee-NAH fut'-neh-TOO uhj-JUG yuh-beh-luh-T'AHL)",
          "translation": "A plane journey's speed is far greater than that of a train or a car."
        },
        {
          "target": "የጤና ዋጋ ከማናቸውም ቁሳዊ ሀብትና ንብረት ይልቃል።",
          "reading": "Yät’ena waga kämanaččäwəm qussawi habtənna nəbrät yəlqall. [jɛtʼeˈna waˈɡa kɛmanatʃːɛˈwɨm kʼusːaˈwi habˈtɨnːa nɨbˈrɛt jɨlˈkʼalː] (yeh-t'ay-NAH wah-GAH keh-mah-nahch-chew-UM k'oos-sah-WEE hahb-TUN-nah nub-RET yul-K'AHL)",
          "translation": "The value of health surpasses any material wealth and property."
        }
      ],
      "mnemonics": [
        "Compare Formula: ከ... ይሻላል (Better) + ከ... ይበልጣል (More) + ከ... ያንሳል (Less)!"
      ],
      "culturalNotes": [
        "የአማርኛ ምሳሌያዊ አነጋገር 'ከመቶ ጓደኛ አንድ እውነተኛ ወዳጅ ይሻላል' በማለት ጥራትን ከብዛት በማስበለጥ ንጽጽርን ይጠቀማል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Plane is faster than car» የሚለውን በአማርኛ ትክክለኛ የንጽጽር መዋቅር የተጠቀመው የትኛው ነው?",
          "options": [
            "አውሮፕላን ከመኪና ይፈጥናል። (Plane is faster than car - Correct comparative sentence)",
            "አውሮፕላንና መኪና አንድ ናቸው",
            "መኪና ከአውሮፕላን ይበልጣል",
            "ምንም መኪና የለም"
          ],
          "answerIndex": 0,
          "explanation": "«አውሮፕላን ከመኪና ይፈጥናል/ይበልጣል» የንጽጽር ቅንጣቢ «ከ...» በመጠቀም ፍጥነትን በትክክል ያወዳድራል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Health is better than wealth' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ጤና ከሀብት ይሻላል። (Health is better than wealth - Accurate classic comparison)",
            "ሀብት ከጤና ይሻላል",
            "ጤና እና ሀብት አንድ ናቸው",
            "ጤና አያስፈልግም"
          ],
          "answerIndex": 0,
          "explanation": "«ጤና ከሀብት ይሻላል» አንደኛው ከሌላው እንደሚበልጥ በትክክል ያወዳድራል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የንጽጽር አገላለጾችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ከ... ይሻላል፣ ከ... ይበልጣል፣ ከ... ይልቃል እና ከ... ያንሳል።",
            "ዛሬ፣ ትናንት እና ከትናንት ወዲያ።",
            "ሰማያዊ፣ አረንጓዴ እና ጥቁር።",
            "በአማርኛ ንጽጽር ማድረግ አይቻልም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የንጽጽር ግሶችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ይሻላል / Is better, preferable' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ይሻላል"
          ],
          "explanation": "ትክክለኛው ቃል «ይሻላል» (Yəššalal) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u17-l3": {
    "id": "am-u17-l3",
    "subject": "amharic",
    "unit": 17,
    "lessonNumber": 3,
    "title": "የላቀ ንጽጽር (Superlative Degree)",
    "level": "B1",
    "objective": "የላቀ ንጽጽርን (ከሁሉ ይበልጣል፣ ከሁሉ ይሻላል፣ ከሁሉም በላይ፣ እጅግ በጣም) መጠቀም።",
    "presentation": {
      "explanation": "የላቀ ደረጃ ሰዋሰዋዊ መዋቅር (Superlatives):\n\n፩. የላቀ ንጽጽር አገላለጾች:\n- ከሁሉ ይበልጣል: ከማንኛውም ነገር በላይ በብልጫ ደረጃ አንደኛ የሆነ (The greatest / most)።\n- ከሁሉ ይሻላል: በምርጥነትና በጥራት የመጨረሻው የተመረጠ (The best of all)።\n- ከሁሉም በላይ: ከሁሉም ነገሮች ቀዳሚ የሆነ (Above all / most importantly)።\n- እጅግ በጣም: ከፍተኛውን የጥራትና የጥልቀት ደረጃ የሚያመለክት (Extremely / exceptionally)።\n\n፪. ሰዋሰዋዊ ቀመር:\n[ስም] + [ከሁሉ / ከሁሉም በላይ] + [ቅጽል / ግስ]:\n- «ይህ መፍትሔ ከሁሉ ይሻላል» (This solution is the best of all)\n- «ራስ ዳሸን በኢትዮጵያ ከሁሉ ረጅሙ ተራራ ነው» (Ras Dashen is the tallest mountain in Ethiopia)።",
      "examples": [
        {
          "target": "ራስ ዳሸን በኢትዮጵያ ውስጥ ከሁሉ ከፍተኛውና ረጅሙ ተራራ ነው።",
          "reading": "Ras Dašän bä-Ityop’ya wəst’ kähullu käftänyawənna räğğəmu tärara näw. [ras daˈʃɛn bɛʔitjoˈpʼja wɨstʼ kɛhulːu kɛfˈtɛɲawɨnːa rɛdʒːɨˈmu tɛraˈra nɛw] (rahs dah-SHEN beh-eet-YOHP-yah woos-T' keh-HOOL-loo kef-TEN-yah-wun-nah red-JUM-moo teh-rah-RAH now)",
          "translation": "Ras Dashen is the highest and tallest mountain of all in Ethiopia."
        },
        {
          "target": "ከሁሉም በላይ ሰላምና ፍቅር ለአንድ ሀገር እድገት ዋነኛ መሰረቶች ናቸው።",
          "reading": "Kähullum bälay sälamənna fəqər lä'and hagär ədgät wanänya mäsärätočč naččäw. [kɛhulːum bɛˈlaj sɛlaˈmɨnːa fɨˈkʼɨr lɛʔand haˈɡɛr ʔɨdˈɡɛt wanɛˈɲa mɛsɛrɛˈtotʃː natʃːɛw] (keh-hool-LOOM beh-LYE seh-LAH-mun-nah fuh-K'UR leh-AHND hah-GER ud-GET wah-nen-YAH meh-seh-reh-TOHCH-choo NAHCH-chew)",
          "translation": "Above all, peace and love are the primary foundations for a country's development."
        },
        {
          "target": "ይህ አማራጭ ከቀረቡት ሀሳቦች ሁሉ እጅግ በጣም የተሻለውና ውጤታማው ነው።",
          "reading": "Yəh ammarač’ käqärräbut hassabočč hullu əğğəg bät’am yätäšaläwənna wət’etamaw näw. [jɨh ʔamːaˈratʃʼ kɛkʼɛrːɛˈbut hasːaˈbotʃː hulːu ʔɨdʒːɨɡ bɛtʼam jɛtɛʃaˈlɛwɨnːa wɨtʼetaˈmaw nɛw] (yuh ahm-mah-RAHCH' keh-k'er-reh-BOOT hahs-sah-BOHCH-choo HOOL-loo uhj-JUG beh-T'AHM yeh-teh-shah-LEW-un-nah wut'-ay-tah-MAH-woo now)",
          "translation": "This option is the best and most effective among all the presented ideas."
        }
      ],
      "mnemonics": [
        "Top Rank: ከሁሉ (Of all) + ከሁሉም በላይ (Above all) + እጅግ በጣም (Extremely)!"
      ],
      "culturalNotes": [
        "በአማርኛ ንግግር 'ከሁሉም በላይ' የሚለው አገላለጽ ዋናውንና ወሳኙን ነጥብ አጉልቶ ለማሳየት በሰፊው ይጠቀሳል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Above all, education is important» የሚለውን በአማርኛ ትክክለኛ የላቀ ንጽጽር አገላለጽ የያዘው የትኛው ነው?",
          "options": [
            "ከሁሉም በላይ ትምህርት አስፈላጊ ነው። (Above all, education is important - Correct superlative emphasis)",
            "ትምህርት አያስፈልግም",
            "ትምህርት ትንሽ ነው",
            "ምንም ትምህርት የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ከሁሉም በላይ» የሚለው አገላለጽ ከማናቸውም ነገሮች ቀዳሚ መሆኑን ያመለክታል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Ras Dashen is the tallest of all' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ራስ ዳሸን ከሁሉ ረጅሙ ተራራ ነው። (Ras Dashen is the tallest mountain of all - Accurate superlative description)",
            "ራስ ዳሸን አጭር ነው",
            "ራስ ዳሸን ተራራ አይደለም",
            "ምንም ተራራ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ከሁሉ ረጅሙ ተራራ ነው» የላቀውን ከፍታ በትክክል ያረጋግጣል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የላቀ ንጽጽር አገላለጾችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ከሁሉ ይበልጣል፣ ከሁሉ ይሻላል፣ ከሁሉም በላይ እና እጅግ በጣም።",
            "ዳቦ፣ ወጥ እና እንጀራ።",
            "ጠዋት፣ ከሰዓት እና ማታ።",
            "በአማርኛ የላቀ ንጽጽር የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የላቀ ንጽጽር አገላለጾችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ከሁሉ / Of all, above all' የሚለውን ሐረግ በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ከሁሉ"
          ],
          "explanation": "ትክክለኛው ቃል «ከሁሉ» (Kähullu) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u17-l4": {
    "id": "am-u17-l4",
    "subject": "amharic",
    "unit": 17,
    "lessonNumber": 4,
    "title": "ስምምነት እና አለመስማማትን መግለጽ (Expressing Agreement & Disagreement)",
    "level": "B1",
    "objective": "ስምምነትንና አለመስማማትን (ሙሉ በሙሉ እስማማለሁ፣ አልስማማም፣ ትክክል ነህ፣ የተሳሳተ ነው) መግለጽ።",
    "presentation": {
      "explanation": "ስምምነትንና አለመስማማትን የመግለጫ ሰዋሰዋዊ አገላለጾች:\n\n፩. ስምምነት መግለጽ (Agreement):\n- ሙሉ በሙሉ እስማማለሁ: ከቀረበው ሀሳብ ጋር መቶ በመቶ አብሮ መሆን (I completely agree)።\n- ትክክል ነህ / ነሽ / ኖት: የቀረበው ነጥብ እውነተኛና ትክክለኛ ሲሆን (You are right)።\n- በከፊል እስማማለሁ: በአንዳንድ ነጥቦች ላይ ብቻ መስማማት (I partially agree)።\n\n፪. አለመስማማት መግለጽ (Disagreement):\n- አልስማማም / አልቀበለውም: የቀረበውን ሀሳብ አለመቀበል (I disagree)።\n- በፍጹም አልስማማም: ጠንካራ ተቃውሞ ሲኖር (I strongly disagree)።\n- የተሳሳተ አመለካከት ነው: የቀረበው አስተያየት ስህተት መሆኑን ማሳየት (It is a mistaken view)።\n\n፫. ሰዋሰዋዊ አጠቃቀም:\n- «ከአንተ ሀሳብ ጋር ሙሉ በሙሉ እስማማለሁ»\n- «በዚህ ነጥብ ላይ ከአንተ ጋር አልስማማም ምክንያቱም...»",
      "examples": [
        {
          "target": "ባነሳኸው ጠቃሚ ነጥብ ላይ ሙሉ በሙሉ እስማማለሁ፤ ትክክል ነህ።",
          "reading": "Bannässahäw t’əqami nät’əb lay mulu bämulu əssəmamallähu; təkkəkəl näh. [banːɛsːaˈhɛw tʼɨkʼaˈmi nɛtʼb laj muˈlu bɛmuˈlu ʔɨsːɨmamaˈlːɛhu tɨkːɨˈkɨl nɛh] (bahn-nes-SAH-hew t'uh-K'AH-mee NET'-b lye moo-LOO beh-moo-LOO us-suh-mah-MAHL-leh-hoo; tuhk-kuh-KUL neh)",
          "translation": "I completely agree with the useful point you raised; you are right."
        },
        {
          "target": "በዚህ ጉዳይ ላይ ከአንተ ጋር በፍጹም አልስማማም ምክንያቱም ማስረጃው ተቃራኒ ነው።",
          "reading": "Bäzzih gudday lay kä'antä gara bäfəts’um aləssəmamam məknəyatum masräğğaw täqarani näw. [bɛzːih ɡudˈdaj laj kɛʔanˈtɛ ɡaˈra bɛfɨtsʼum ʔalɨsːɨmaˈmam mɨknɨjaˈtum masrɛdʒːaw tɛkʼaraˈni nɛw] (bez-ZEEH good-DYE lye keh-AHN-teh gah-RAH beh-futs'-OOM ahl-us-suh-mah-MAHM muk-nuh-yah-TOOM mahs-red-JAH-woo teh-k'ah-rah-NEE now)",
          "translation": "I completely disagree with you on this matter because the evidence is contrary."
        },
        {
          "target": "የተለያዩ አመለካከቶች ቢኖሩንም በክብርና በሰለጠነ መንገድ መወያየት አለብን።",
          "reading": "Yätäläyyayu ammäläkakätočč binorunəm bäkəbrənna bäsälät’t’änä mängäd mäwəyayyät alläbbən. [jɛtɛlɛjːaˈju ʔamːɛlɛkakɛˈtotʃː binoˈrunɨm bɛkɨbˈrɨnːa bɛsɛlɛtʼːɛˈnɛ mɛnˈɡɛd mɛwɨjaˈjːɛt ʔalːɛbːɨn] (yeh-teh-ley-yah-YOO ahm-meh-leh-kah-keh-TOHCH-choo bee-noh-ROO-num beh-kuhb-RUN-nah beh-seh-let'-t'eh-NEH men-GED meh-wuh-yahy-YET ahl-leb-BUN)",
          "translation": "Even if we have different perspectives, we must discuss with respect and in a civilized manner."
        }
      ],
      "mnemonics": [
        "Debate Responses: ሙሉ በሙሉ እስማማለሁ (Agree) vs. በፍጹም አልስማማም (Disagree)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ሽምግልናና የክርክር ባህል ውስጥ 'ሀሳብን በሀሳብ ማሸነፍ' እና ተቃራኒ አመለካከትን በአክብሮት ማዳመጥ ታላቅ ጥበብ ተደርጎ ይወሰዳል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«I completely agree with you» የሚለውን በአማርኛ ትክክለኛ የስምምነት አገላለጽ የያዘው የትኛው ነው?",
          "options": [
            "ከአንተ ጋር ሙሉ በሙሉ እስማማለሁ። (I completely agree with you - Correct agreement phrase)",
            "አልስማማም",
            "ሀሳብህ ስህተት ነው",
            "ምንም አልገባኝም"
          ],
          "answerIndex": 0,
          "explanation": "«ሙሉ በሙሉ እስማማለሁ» ጠንካራና ግልጽ ስምምነትን ያመለክታል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'I disagree with this opinion' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "በዚህ አስተያየት ላይ አልስማማም። (I disagree with this opinion - Accurate polite disagreement)",
            "ሙሉ በሙሉ እስማማለሁ",
            "ትክክል ነህ",
            "ምንም አስተያየት የለም"
          ],
          "answerIndex": 0,
          "explanation": "«በዚህ አስተያየት ላይ አልስማማም» አለመስማማትን በግልጽ ያሳያል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ስምምነትንና አለመስማማትን መግለጫ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ሙሉ በሙሉ እስማማለሁ፣ በፍጹም አልስማማም፣ ትክክል ነህ፣ በከፊል እስማማለሁ እና የተሳሳተ ነው።",
            "ወንበር፣ ጠረጴዛ እና አልጋ።",
            "ቀን፣ ማታ እና ሌሊት።",
            "በአማርኛ ስምምነት መግለጽ አይቻልም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የስምምነትና የአለመስማማት አገላለጾችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እስማማለሁ / I agree' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "እስማማለሁ"
          ],
          "explanation": "ትክክለኛው ቃል «እስማማለሁ» (Əssəmamallähu) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u17-l5": {
    "id": "am-u17-l5",
    "subject": "amharic",
    "unit": 17,
    "lessonNumber": 5,
    "title": "የክፍል 17 አጠቃላይ ማጠቃለያ (Unit 17 Grand Synthesis & Comparative Debate Discourse)",
    "level": "B1",
    "objective": "የግል አስተያየትን፣ የንጽጽር ደረጃዎችን፣ የላቀ ንጽጽርንና ክርክርን ያቀናጀ የተሟላ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፲፯ አጠቃላይ ሰዋሰዋዊ ውህደት እና የአስተያየትና ንጽጽር ተግባቦት ማጠቃለያ:\n\n፩. የግል አስተያየት:\n- በእኔ አስተያየት፣ እኔ እንደሚመስለኝ፣ ይመስለኛል፣ አምናለሁ።\n\n፪. የንጽጽር ደረጃዎች:\n- ከ... ይሻላል፣ ከ... ይበልጣል፣ ከ... ይልቃል፣ ከ... ያንሳል።\n\n፫. የላቀ ንጽጽር:\n- ከሁሉ ይበልጣል፣ ከሁሉ ይሻላል፣ ከሁሉም በላይ፣ እጅግ በጣም።\n\n፬. ስምምነት እና አለመስማማት:\n- ሙሉ በሙሉ እስማማለሁ፣ በፍጹም አልስማማም፣ ትክክል ነህ፣ በከፊል እስማማለሁ።",
      "examples": [
        {
          "target": "በእኔ አስተያየት እውቀትና ልምድን ማዳበር ከማንኛውም ቁሳዊ ሀብት በላይ እጅግ በጣም ይሻላል።",
          "reading": "Bä'əne astäyayät əwqätənna ləmdən madabär kämanaččäwəm qussawi habt bälay əğğəg bät’am yəššalal. [bɛʔɨˈne ʔastɛjaˈjɛt ʔɨwˈkʼɛtɨnːa lɨmˈdɨn madaˈbɛr kɛmanatʃːɛˈwɨm kʼusːaˈwi habt bɛˈlaj ʔɨdʒːɨɡ bɛtʼam jɨʃːaˈlal] (beh-uh-NAY ahs-teh-yah-YET uw-K'ET-un-nah lum-DUN mah-dah-BER keh-mah-nahch-chew-UM k'oos-sah-WEE hahbt beh-LYE uhj-JUG beh-T'AHM yush-shah-LAHL)",
          "translation": "In my opinion, developing knowledge and experience is extremely better than any material wealth."
        },
        {
          "target": "በውይይታችን ወቅት በብዙ ነጥቦች ላይ ብንስማማም በአንዳንድ ጉዳዮች ላይ የተለያየ አመለካከት ነበረን።",
          "reading": "Bäwəyəyyətaččən wäqət bäbəzu nät’əbočč lay bənnəssəmamam bä'andand guddayočč lay yätäläyayyä ammäkkakät näbbärän. [bɛwɨjɨjːɨˈtatʃːɨn wɛkʼt bɛbɨˈzu nɛtʼboˈtʃː laj bɨnːɨsːɨmaˈmam bɛʔanˈdand ɡudːaˈjotʃː laj jɛtɛlɛjaˈjːɛ ʔamːɛkːaˈkɛt nɛbːɛrɛn] (beh-wuh-yuhy-yuh-TAHCH-chun wehk'-T beh-buh-ZOO net'-bohch-CH lye bun-nus-suh-mah-MAHM beh-ahn-DAHND good-dah-yohch-CH lye yeh-teh-ley-yahy-YAY ahm-mek-kah-KET neb-BEH-ren)",
          "translation": "During our discussion, although we agreed on many points, we had differing perspectives on some matters."
        },
        {
          "target": "ከሁሉም በላይ ምክንያታዊ መረጃዎችን በማቅረብ ሀሳብን በነጻነትና በጨዋነት ማጋራት ይገባናል።",
          "reading": "Kähullum bälay məknəyatawi märäğawoččən bamaqrəb hassabən bänäts’annätənna bäč’əwannät magarat yəggäbbannall. [kɛhulːum bɛˈlaj mɨknɨjaˈtawi mɛrɛdʒaˈwotʃːɨn bamakʼˈrɛb hasːaˈbɨn bɛnɛtsʼanːɛˈtɨnːa bɛtʃʼɨwanːɛt maɡaˈrat jɨɡːɛbːanːalː] (keh-hool-LOOM beh-LYE muk-nuh-yah-tah-WEE meh-reh-jah-wohch-CHUN bah-mahk'-REB hahs-sah-BUN beh-nets'-ahn-NET-un-nah beh-ch'uh-wahn-NET mah-gah-RAHT yug-geb-BAHN-nahl)",
          "translation": "Above all, we ought to share ideas freely and politely by presenting rational evidence."
        }
      ],
      "mnemonics": [
        "Debate Mastery: Opinion (አስተያየት) + Comparison (ንጽጽር) + Superiority (ከሁሉ በላይ) + Respect (ስምምነት)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ ፍልስፍናዊ አስተሳሰብ (እንደ ዘርአ ያዕቆብ የፍልስፍና ድርሳን) ምክንያታዊ ክርክርንና እውነትን በምርምር መፈለግን ከሁሉ በላይ ያከብራል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የአስተያየትና የንጽጽር ውህደትን የሚያሳየው የትኛው ነው?",
          "options": [
            "በእኔ አስተያየት ይህ አማራጭ ከሁሉም የተሻለ ነው፤ ሙሉ በሙሉ እስማማለሁ። (Complete opinion, comparison, and agreement synthesis)",
            "ምንም አስተያየት የለም",
            "አልስማማም",
            "ንጽጽር የለም"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የግል አስተያየትን፣ የላቀ ንጽጽርንና ስምምነትን በአንድነት ያጠቃልላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ምክንያታዊ ክርክርንና ንጽጽርን ያጣመረው ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "መረጃ በማቅረብ ሀሳባችንን እናወዳድራለን እንዲሁም በክብር እንወያያለን። (By presenting evidence we compare our ideas and discuss with respect - Integrated debate sentence)",
            "መወያየት አንፈልግም",
            "መረጃ የለም",
            "ሀሳብ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ መረጃ ማቅረብን፣ ማወዳደርንና በአክብሮት መወያየትን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 17 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የግል አስተያየት መግለጫዎች፣ የንጽጽር ደረጃዎች (ይሻላል/ይበልጣል)፣ የላቀ ንጽጽር (ከሁሉ/ከሁሉም በላይ)፣ እንዲሁም ስምምነትና አለመስማማት ተካተዋል።",
            "ይህ ክፍል ስለ ምግብ ዝግጅት ብቻ ነው።",
            "በአማርኛ የንጽጽር ቃላት የሉም።",
            "ሁሉም አስተያየቶች አንድ ዓይነት ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 17ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ንጽጽር / Comparison' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ንጽጽር"
          ],
          "explanation": "ትክክለኛው ቃል «ንጽጽር» (Nəts’əts’ər) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u18-l1": {
    "id": "am-u18-l1",
    "subject": "amharic",
    "unit": 18,
    "lessonNumber": 1,
    "title": "ተሻጋሪ እና ተሻጋሪ ያልሆኑ ግሶች (Transitive & Intransitive Verbs)",
    "level": "B1",
    "objective": "ተሻጋሪ (ተሳቢ የሚፈልጉ) እና ተሻጋሪ ያልሆኑ (ተሳቢ የማይፈልጉ) ግሶችን መለየትና መጠቀም።",
    "presentation": {
      "explanation": "የተሻጋሪ እና ተሻጋሪ ያልሆኑ ግሶች ሰዋሰዋዊ ህግ:\n\n፩. ተሻጋሪ ግሶች (Transitive Verbs):\n- ድርጊቱ ወደ ቀጥተኛ ተሳቢ የሚሸጋገርባቸውና «ማንን?» ወይም «ምንን?» ለሚለው ጥያቄ መልስ የሚሰጡ ናቸው።\n- ምሳሌ: በላ (በላው)፣ ጻፈ (ጻፈው)፣ ገዛ (ገዛው)፣ አነበበ (አነበበው)።\n- ተሳቢው «-ን» የሚለውን የተሳቢ ቅጥያ ይወስዳል («መጽሐፉን አነበበ»)።\n\n፪. ተሻጋሪ ያልሆኑ (ኢ-ተሻጋሪ) ግሶች (Intransitive Verbs):\n- ድርጊቱ በባለቤቱ ላይ ብቻ የሚቆምና ወደ ተሳቢ የማይሸጋገርባቸው ናቸው።\n- ምሳሌ: ሄደ፣ መጣ፣ ተኛ፣ ሞተ፣ ሳቀ፣ ወደቀ።\n- ቀጥተኛ ተሳቢ አይወስዱም («ተማሪው ተኛ»)።",
      "examples": [
        {
          "target": "ተማሪው መጽሐፉን በጥልቀት አነበበ እንዲሁም አዳዲስ ማስታወሻዎችን ጻፈ።",
          "reading": "Tämariw mäts’hafun bät’əlqät annäbbäbä əndihum addaddis mastawäšawoččən t’afä. [tɛmaˈriw mɛtsʼhaˈfun bɛtʼɨlˈkʼɛt ʔanːɛbːɛˈbɛ ʔɨndiˈhum ʔadːadːis mastawɛʃawoˈtʃːɨn tʼaˈfɛ] (teh-mah-REEW mets'-hah-FOON beh-t'ul-K'ET ahn-neb-beh-BEH un-dee-HOOM ahd-dahd-DEES mahs-tah-weh-shah-wohch-CHOON t'ah-FEH)",
          "translation": "The student read the book thoroughly and wrote new notes."
        },
        {
          "target": "እንግዶቹ በሰዓቱ ደረሱና በሳሎን ውስጥ ባለው ምቹ ሶፋ ላይ ተቀመጡ።",
          "reading": "Əngədočču bäsäʿatu därräsunna bäsalon wəst’ balläw məč’u sofa lay täqämmät’u. [ʔɨnɡɨdoˈtʃːu bɛsɛˈʔatu dɛrːɛˈsunːa bɛsaˈlon wɨstʼ balːɛw mɨtʃʼu soˈfa laj tɛkʼɛmːɛˈtʼu] (un-guh-DOHCH-choo beh-seh-AH-too der-reh-SOON-nah beh-sah-LOHN woos-T' bahl-LEW muh-CH'OO soh-FAH lye teh-k'em-meh-T'OO)",
          "translation": "The guests arrived on time and sat on the comfortable sofa in the living room."
        },
        {
          "target": "አስተማሪው ጥያቄውን ጠየቀ፤ ተማሪዎቹም ፈጥነው መልሱን መለሱ።",
          "reading": "Astämariw t’əyaqewən t’äyyäqä; tämariwoččum fät’näw mälssun mälläsu. [ʔastɛmaˈriw tʼɨjaˈkʼewɨn tʼɛjːɛˈkʼɛ tɛmariwoˈtʃːum fɛtʼˈnɛw mɛlˈsun mɛlːɛˈsu] (ahs-teh-mah-REEW t'uh-yah-k'ay-WUN t'ey-yeh-K'EH; teh-mah-ree-wohch-CHOOM fet'-NEW mel-SOON mel-leh-SOO)",
          "translation": "The teacher asked the question; the students promptly returned the answer."
        }
      ],
      "mnemonics": [
        "Verb Flow: ተሻጋሪ (Crosses to Object with -ን) vs. ኢ-ተሻጋሪ (Stays with Subject)!"
      ],
      "culturalNotes": [
        "በአማርኛ ስነ-ጽሑፍ የተሳቢ ቅጥያ «-ን» ወሳኝ ሰዋሰዋዊ ሚና ያለው ሲሆን፣ የድርጊቱን ተቀባይ ለይቶ ለማሳወቅ ያገለግላል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ ተሻጋሪ ግስ (Transitive verb) የያዘው የትኛው ዓረፍተ ነገር ነው?",
          "options": [
            "ልጁ ኳሱን መታ። (The boy kicked the ball - Transitive verb with direct object marker -n)",
            "ልጁ ተኛ",
            "ልጁ ሄደ",
            "ልጁ መጣ"
          ],
          "answerIndex": 0,
          "explanation": "«ልጁ ኳሱን መታ» በሚለው ውስጥ 'መታ' የሚለው ግስ 'ኳሱን' የሚል ቀጥተኛ ተሳቢ ስለሚወስድ ተሻጋሪ ግስ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ተሻጋሪ ያልሆነ (Intransitive verb) የያዘውን ዓረፍተ ነገር ይምረጡ:",
          "options": [
            "እንግዳው በሰላም ደረሰ። (The guest arrived safely - Intransitive verb without direct object)",
            "እንግዳው ሻይ ጠጣ",
            "እንግዳው ደብዳቤ ጻፈ",
            "እንግዳው ዳቦ በላ"
          ],
          "answerIndex": 0,
          "explanation": "«ደረሰ» የሚለው ግስ ድርጊቱ በባለቤቱ ላይ የሚቆም በመሆኑ ተሻጋሪ ያልሆነ (ኢ-ተሻጋሪ) ግስ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የተሻጋሪ እና ተሻጋሪ ያልሆኑ ግሶችን ልዩነት በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ተሻጋሪ ግሶች ቀጥተኛ ተሳቢ (-ን) ሲፈልጉ፣ ተሻጋሪ ያልሆኑ ግሶች ግን ተሳቢ አይፈልጉም።",
            "ሁሉም የአማርኛ ግሶች ተሻጋሪ ናቸው።",
            "ተሻጋሪ ግሶች ባለቤት የላቸውም።",
            "በአማርኛ የግስ ክፍሎች የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የተሻጋሪና ኢ-ተሻጋሪ ግሶችን መሰረታዊ ሰዋሰዋዊ ህግ በትክክል ያብራራል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ተሻጋሪ / Transitive' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ተሻጋሪ"
          ],
          "explanation": "ትክክለኛው ቃል «ተሻጋሪ» (Täšagari) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u18-l2": {
    "id": "am-u18-l2",
    "subject": "amharic",
    "unit": 18,
    "lessonNumber": 2,
    "title": "ተደራጊ የግስ ክፍሎች (Passive Voice & Reflexive - Stem Prefix «ተ-»)",
    "level": "B1",
    "objective": "ተደራጊ ግሶችን በቅድመ-ቅጥያ «ተ-» በመጠቀም አድራጊው ላልታወቀ ወይም ለተደራጊው ትኩረት ለሚሰጥ ዓረፍተ ነገር መጠቀም።",
    "presentation": {
      "explanation": "ተደራጊ የግስ ክፍሎች ሰዋሰዋዊ መዋቅር (Passive Voice):\n\n፩. የተደራጊ ግስ ምስረታ:\n- ቀዳሚው ግስ ላይ «ተ-» የሚለውን ቅድመ-ቅጥያ በማስገባት ይመሰረታል።\n- ጻፈ (Wrote) -> ተጻፈ (Was written)\n- ሰራ (Made/Built) -> ተሰራ (Was made/built)\n- አነበበ (Read) -> ተነበበ (Was read)\n- አዘጋጀ (Prepared) -> ተዘጋጀ (Was prepared)\n- ሰበረ (Broke) -> ተሰበረ (Was broken)\n\n፪. የተደራጊ ግስ አገልግሎት:\n- ድርጊቱ የተፈጸመበትን ነገር ወይም ተቀባዩን ለማጉላት።\n- አድራጊው በማይታወቅበት ወይም መጥቀስ በማያስፈልግበት ጊዜ («ቤቱ ተሰራ» / «ውሉ ተፈረመ»)።",
      "examples": [
        {
          "target": "አዲሱ የትምህርት መመሪያ በመምህራኑና በባለሙያዎቹ አማካኝነት በሚገባ ተዘጋጀ።",
          "reading": "Addisu yätəmhərt mämmäriya bämämhəranunna bäbalämuyawočču amakanyənät bämigäba täzäggağğä. [ʔadːiˈsu jɛtɨmˈhɨrt mɛmːɛriˈja bɛmɛmhɨraˈnunːa bɛbalɛmujawoˈtʃːu ʔamakaɲɨˈnɛt bɛmiɡɛˈba tɛzɛɡːaˈdʒːɛ] (ahd-dee-SOO yeh-tum-HURT mem-meh-ree-YAH beh-mem-huh-rah-NOON-nah beh-bah-leh-moo-yah-wohch-CHOO ah-mah-kahn-yuh-NET beh-mee-geh-BAH teh-zeg-GAHJ-jeh)",
          "translation": "The new educational guideline was properly prepared through the teachers and experts."
        },
        {
          "target": "ይህ ታሪካዊ መጽሐፍ በብዙ ቋንቋዎች ተተርጉሞ በዓለም ዙሪያ ተነበበ።",
          "reading": "Yəh tarikawi mäts’haf bäbəzu qwanqwawočč tätärgumo bä'aläm zuriya tännäbbäbä. [jɨh tariˈkawi mɛtsʼˈhaf bɛbɨˈzu kʼʷankʼʷaˈwotʃː tɛtɛrˈɡumo bɛʔaˈlɛm zuˈrija tɛnːɛbːɛˈbɛ] (yuh tah-ree-KAH-wee mets'-HAHF beh-buh-ZOO k'wahn-k'wah-wohch-CH teh-ter-GOO-moh beh-AH-lem zoo-REE-yah ten-neb-beh-BEH)",
          "translation": "This historical book was translated into many languages and read around the world."
        },
        {
          "target": "የከተማው ዋና መንገድ በዘመናዊ ቴክኖሎጂ ታድሶ በድጋሚ ተከፈተ።",
          "reading": "Yäkätämaw wana mängäd bäzämänawi tekənoloğği taddəso bädəgami täkäffätä. [jɛkɛtɛˈmaw waˈna mɛnˈɡɛd bɛzɛmɛnaˈwi teknoloˈdʒi tadːɨˈso bɛdɨɡaˈmi tɛkɛfːɛˈtɛ] (yeh-keh-teh-MAHW wah-NAH men-GED beh-zeh-meh-nah-WEE tek-noh-loh-JEE tahd-duh-SOH beh-duh-gah-MEE teh-kef-feh-TEH)",
          "translation": "The city's main road was renovated with modern technology and reopened."
        }
      ],
      "mnemonics": [
        "Passive Transform: አድራጊ (Active) + ተ- (Prefix) = ተደራጊ (ተጻፈ / ተሰራ / ተከፈተ)!"
      ],
      "culturalNotes": [
        "በአማርኛ ቋንቋ ተደራጊ ግሶች በዜና፣ በህጋዊ ሰነዶችና በአካዳሚክ ጽሑፎች ውስጥ ገለልተኛና መደበኛ ቃና ለመፍጠር በስፋት ይሠራባቸዋል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«The letter was written» የሚለውን በአማርኛ ትክክለኛ ተደራጊ ግስ የተጠቀመው የትኛው ነው?",
          "options": [
            "ደብዳቤው ተጻፈ። (The letter was written - Correct passive verb with ተ- prefix)",
            "ደብዳቤው ጻፈ",
            "ደብዳቤው አስጻፈ",
            "ደብዳቤው ጠፋ"
          ],
          "answerIndex": 0,
          "explanation": "«ተጻፈ» የሚለው ግስ 'ጻፈ' ከሚለው ንቁ ግስ 'ተ-' ቅድመ-ቅጥያ በመጨመር የተመሰረተ ተደራጊ ግስ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'The door was opened' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "በሩ ተከፈተ። (The door was opened - Accurate passive verb construction)",
            "በሩ ከፈተ",
            "በሩ ዘጋ",
            "በሩ አስከፈተ"
          ],
          "answerIndex": 0,
          "explanation": "«በሩ ተከፈተ» ድርጊቱ በበሩ ላይ መፈጸሙን የሚያሳይ ተደራጊ ግስ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ተደራጊ ግሶችን (Passive verbs) በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ተጻፈ፣ ተነበበ፣ ተሰራ፣ ተዘጋጀ እና ተከፈተ።",
            "በላ፣ ጠጣ፣ ሄደ እና መጣ።",
            "ትልቅ፣ ትንሽ እና መካከለኛ።",
            "በአማርኛ ተደራጊ ግስ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ በ«ተ-» ቅድመ-ቅጥያ የተመሰረቱ ዋና ዋና ተደራጊ ግሶችን ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ተደራጊ / Passive' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ተደራጊ"
          ],
          "explanation": "ትክክለኛው ቃል «ተደራጊ» (Tädäragi) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u18-l3": {
    "id": "am-u18-l3",
    "subject": "amharic",
    "unit": 18,
    "lessonNumber": 3,
    "title": "አስደራጊ እና አድራጊ የግስ ክፍሎች (Causative Voice - Stem Prefixes «አ-» & «አስ-»)",
    "level": "B1",
    "objective": "አስደራጊ ግሶችን በቅድመ-ቅጥያ «አ-» እና «አስ-» በመጠቀም ሌላ አካልን በማሰራት ወይም በማስደረግ ድርጊትን መግለጽ።",
    "presentation": {
      "explanation": "አስደራጊ የግስ ክፍሎች ሰዋሰዋዊ ህግ (Causative Voice):\n\n፩. ቀላል አስደራጊ (Simple Causative with «አ-»):\n- ኢ-ተሻጋሪ ግስን ወደ ተሻጋሪ ለመቀየር ያገለግላል።\n- ወጣ (Went out) -> አወጣ (Took out / brought out)\n- ገባ (Entered) -> አገባ (Brought in / married)\n- ጠጣ (Drank) -> አጠጣ (Gave drink / watered)\n\n፪. ጠንካራ አስደራጊ (Agentive Causative with «አስ-»):\n- ድርጊቱን በሌላ ሦስተኛ አካል አማካኝነት ማከናወንን (Have someone do something) ያመለክታል።\n- ጻፈ (Wrote) -> አስጻፈ (Had someone write)\n- ሰራ (Made) -> አስሰራ (Had someone make / ordered)\n- ጠገነ (Repaired) -> አስጠገነ (Had something repaired)\n- አስተማረ (Taught / caused to learn)።",
      "examples": [
        {
          "target": "አባቴ የተበላሸውን መኪና በመካኒኩ በኩል አስጠገነ።",
          "reading": "Abbate yätäbällašäwən mäkina bämäkaniku bäkkul ast’äggänä. [ʔabːaˈte jɛtɛbɛlːaˈʃɛwɨn mɛkiˈna bɛmɛkaniˈku bɛkːul ʔastʼɛɡːɛˈnɛ] (ahb-bah-TAY yeh-teh-bel-lah-SHEW-un meh-kee-NAH beh-meh-kah-nee-KOO bek-KOOL ahs-t'eg-geh-NEH)",
          "translation": "My father had the broken car repaired through the mechanic."
        },
        {
          "target": "ነጋዴው አዲስ የመኖሪያ ቤት በባለሙያዎች አስገነባ።",
          "reading": "Näggadew addis yämänoriya bet bäbalämuyawočč asgännäba. [nɛɡːaˈdew ʔadːis jɛmɛnoriˈja bet bɛbalɛmujaˈwotʃː ʔasɡɛnːɛˈba] (neg-gah-DAY-woo ahd-DEES yeh-meh-noh-ree-YAH bayt beh-bah-leh-moo-yah-WOHCH ahs-gen-neh-BAH)",
          "translation": "The merchant had a new residential house built by professionals."
        },
        {
          "target": "መምህሩ ተማሪዎቹን አዳዲስ ቃላትን በደብተራቸው ላይ አስጻፈ።",
          "reading": "Mämhəru tämariwoččun addaddis qalatən bädäbtäraččäw lay ast’afä. [mɛmhɨˈru tɛmariwoˈtʃːun ʔadːadːis kʼalaˈtɨn bɛdɛbtɛraˈtʃːɛw laj ʔastʼaˈfɛ] (mem-huh-ROO teh-mah-ree-wohch-CHOON ahd-dahd-DEES k'ah-lah-TUN beh-deb-teh-rahch-CHEW lye ahs-t'ah-FEH)",
          "translation": "The teacher made the students write new words in their exercise books."
        }
      ],
      "mnemonics": [
        "Causative Spark: Direct (አ- : አበላ) vs. Agentive (አስ- : አስጠገነ / አስገነባ / አስጻፈ)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ማህበራዊ ኑሮ 'አስሰራሁ' ወይም 'አስጠገንኩ' የሚሉ ቃላት የዕደ-ጥበብና የሙያ አገልግሎቶችን በባለሙያ የማሰራት ባህልን ያንጸባርቃሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«He had the house built by workers» የሚለውን በአማርኛ ትክክለኛ አስደራጊ ግስ የያዘው የትኛው ነው?",
          "options": [
            "ቤቱን በሠራተኞች አስገነባ። (He had the house built by workers - Correct causative with አስ- prefix)",
            "ቤቱ ተገነባ",
            "ቤቱን አፈረሰ",
            "ምንም ቤት አልተሰራም"
          ],
          "answerIndex": 0,
          "explanation": "«አስገነባ» የሚለው ግስ 'ገነባ' ከሚለው ግስ 'አስ-' በመጨመር የተመሰረተ አስደራጊ ግስ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'I had the car repaired' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "መኪናውን አስጠገንኩ። (I had the car repaired - Accurate agentive causative)",
            "መኪናውን ጠገንኩ",
            "መኪናው ተሰበረ",
            "መኪና የለኝም"
          ],
          "answerIndex": 0,
          "explanation": "«አስጠገንኩ» ሌላ ባለሙያ አሰርቶ ማስተካከልን የሚያመለክት አስደራጊ ግስ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "አስደራጊ ግሶችን (Causative verbs) በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "አስጻፈ፣ አስጠገነ፣ አስገነባ፣ አስጠና እና አስተማረ።",
            "ተኛ፣ ተቀመጠ እና ወደቀ።",
            "ውሃ፣ ወተት እና ሻይ።",
            "በአማርኛ አስደራጊ ግስ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ በ«አስ-» ቅድመ-ቅጥያ የተመሰረቱ ዋና ዋና አስደራጊ ግሶችን ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አስደራጊ / Causative' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አስደራጊ"
          ],
          "explanation": "ትክክለኛው ቃል «አስደራጊ» (Asdäragi) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u18-l4": {
    "id": "am-u18-l4",
    "subject": "amharic",
    "unit": 18,
    "lessonNumber": 4,
    "title": "ተደራራጊ እና አስደራራጊ ግሶች (Reciprocal & Frequentative Verbs)",
    "level": "B1",
    "objective": "ተደራራጊ (የጋራ ድርጊት) እና ተደጋጋሚ (ተደጋግሞ የሚፈጸም) ግሶችን መጠቀም።",
    "presentation": {
      "explanation": "ተደራራጊ እና ተደጋጋሚ የግስ ዓይነቶች:\n\n፩. ተደራራጊ ግሶች (Reciprocal Verbs):\n- ሁለትና ከዚያ በላይ የሆኑ አካላት ድርጊትን እርስ በርስ ሲፈራረቁ ወይም በጋራ ሲያደርጉ።\n- ቅርጽ: የግሱ መካከለኛ ፊደል ወደ አራተኛ (ወይም ሳድስ) ድምፅ ይረዝማል።\n- ተደገፈ -> ተደጋገፉ (Supported each other)\n- ተጨበጠ -> ተጨባበጡ (Shook hands with each other)\n- ተረዳ -> ተረዳዱ (Helped each other)\n- ተነጋገረ -> ተነጋገሩ (Talked with each other)\n\n፪. ተደጋጋሚ ድርጊት (Frequentative Verbs):\n- አንድ ድርጊት በተደጋጋሚና በቁርጥራጭ ሲፈጸም የሚገለጽበት የግስ ቅርጽ።\n- ቆረጠ -> ቆራረጠ (Cut into multiple pieces / chopped)\n- ሰበረ -> ሰባበረ (Smashed into pieces / shattered)።",
      "examples": [
        {
          "target": "ጓደኛሞች በረጅም ጊዜ ናፍቆት ተቃቅፈውና እጅ ለእጅ ተጨባብጠው ሰላምታ ተለዋወጡ።",
          "reading": "Gwadänyammočč bäräğğəm gize nafqot täqaqfäwənna əğğ lä'əğğ täč’äbabbət’äw sälamta täläwawwät’u. [ɡʷadɛɲamːoˈtʃː bɛrɛdʒːɨm ɡiˈze nafˈkʼot tɛkʼakʼˈfɛwɨnːa ʔɨdʒː lɛʔɨdʒː tɛtʃʼɛbabːɨˈtʼɛw sɛlamˈta tɛlɛwawːɛˈtʼu] (gwah-den-yahm-MOHCH-choo beh-red-JUM gee-ZAY nahf-K'OHT teh-k'ahk'-FEW-un-nah uhj leh-UHJ teh-ch'eh-bahb-T'EW seh-lahm-TAH teh-leh-wahw-WEH-t'oo)",
          "translation": "The friends hugged in long-missed longing and exchanged greetings shaking hands."
        },
        {
          "target": "የአካባቢው ነዋሪዎች ችግሮቻቸውን በጋራ ለመፍታት እርስ በርስ ተረዳዱና ተደጋገፉ።",
          "reading": "Yä'akkababiw näwariwočč čəggəroččaččäwən bägara lämäftat ərs bärs täräddadunna tädägaggäfu. [jɛʔakːabaˈbiw nɛwariˈwotʃː tʃʼɨɡːɨrotʃːaˈtʃːɛwɨn bɛɡaˈra ləmɛfˈtat ʔɨrs bɛrs tɛrɛdːaˈdunːa tɛdɛɡaɡːɛˈfu] (yeh-ahk-kah-bah-BEEW neh-wah-ree-WOHCH ch'ug-guh-rohch-CHAHCH-chew-un beh-gah-RAH leh-mef-TAHT urs bers teh-red-DAH-doon-nah teh-deh-gahg-GEH-foo)",
          "translation": "The local residents helped each other and supported one another to solve their problems together."
        },
        {
          "target": "አብሳዩ ሥጋውንና አትክልቶቹን በትናንሽ ቁርጥራጮች ቆራረጠ።",
          "reading": "Absayu səgawənna atkəltwoččun bətənannəš qurt’əraččočč qworarrät’ä. [ʔabsaˈju sɨɡaˈwɨnːa ʔatkɨltwoˈtʃːun bɛtɨnanːɨʃ kʼurtʼɨraˈtʃːotʃː kʼʷorarːɛˈtʼɛ] (ahb-sah-YOO suh-gah-WUN-nah aht-kul-twohch-CHOON beh-tuh-nahn-NUSH k'oor-t'uh-rahch-CHOHCH k'woh-rahr-REH-t'eh)",
          "translation": "The cook chopped the meat and vegetables into small pieces."
        }
      ],
      "mnemonics": [
        "Reciprocal Bond: ተጨባበጡ (Shook hands) + ተረዳዱ (Helped each other) + ተደጋገፉ (Mutual support)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ የማህበረሰብ ባህል 'እድር' እና 'ዕቁብ' የህዝቡ መረዳዳትና መደጋገፍ (የተደራራጊነት መርህ) በተግባር የሚገለጽባቸው ጥንታዊ ተቋማት ናቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«They helped each other» የሚለውን በአማርኛ ትክክለኛ ተደራራጊ ግስ የያዘው የትኛው ነው?",
          "options": [
            "እርስ በርስ ተረዳዱ። (They helped each other - Correct reciprocal verb form)",
            "እርስ በርስ ተጣሉ",
            "አልተረዳዱም",
            "ምንም እርዳታ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ተረዳዱ» እርስ በርስ በጋራ የመረዳዳት ድርጊትን የሚያሳይ ተደራራጊ ግስ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'They shook hands' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "እጅ ለእጅ ተጨባበጡ። (They shook hands with each other - Accurate reciprocal greeting action)",
            "እጅ ተሰበረ",
            "ምንም ሰላምታ አልሰጡም",
            "ጨበጠ ብቻ"
          ],
          "answerIndex": 0,
          "explanation": "«ተጨባበጡ» ሁለቱም ወገኖች እጅ ለእጅ የተጨባበጡ መሆኑን የሚያሳይ ተደራራጊ ግስ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ተደራራጊ ግሶችን (Reciprocal verbs) በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ተደጋገፉ፣ ተጨባበጡ፣ ተረዳዱ፣ ተነጋገሩ እና ተቃቀፉ።",
            "ሮጠ፣ ዘለለ እና ወደቀ።",
            "ጠዋት፣ ከሰዓት እና ማታ።",
            "በአማርኛ ተደራራጊ ግስ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የጋራና ተደራራጊ ግሶችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ተደራራጊ / Reciprocal' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ተደራራጊ"
          ],
          "explanation": "ትክክለኛው ቃል «ተደራራጊ» (Tädäraragi) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u18-l5": {
    "id": "am-u18-l5",
    "subject": "amharic",
    "unit": 18,
    "lessonNumber": 5,
    "title": "የክፍል 18 አጠቃላይ ማጠቃለያ (Unit 18 Grand Synthesis & Complex Verb Morphology Discourse)",
    "level": "B1",
    "objective": "ተሻጋሪ፣ ተደራጊ፣ አስደራጊ እና ተደራራጊ የግስ ክፍሎችን ያቀናጀ የተሟላ የቋንቋና የሰዋሰው ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፲፰ አጠቃላይ ሰዋሰዋዊ ውህደት እና ውስብስብ የግስ እርባታ ማጠቃለያ:\n\n፩. ተሻጋሪና ኢ-ተሻጋሪ ግሶች:\n- ተሻጋሪ (ተሳቢ የሚፈልግ: ጻፈ፣ አነበበ) vs. ኢ-ተሻጋሪ (ተሳቢ የማይፈልግ: ሄደ፣ ተኛ)።\n\n፪. ተደራጊ ግሶች (Passive Voice):\n- በ«ተ-» ቅድመ-ቅጥያ የሚመሰረቱ (ተጻፈ፣ ተሰራ፣ ተዘጋጀ፣ ተከፈተ)።\n\n፫. አስደራጊ ግሶች (Causative Voice):\n- በ«አ-» እና «አስ-» የሚመሰረቱ (አስጻፈ፣ አስጠገነ፣ አስገነባ፣ አስተማረ)።\n\n፬. ተደራራጊ እና ተደጋጋሚ ግሶች (Reciprocal & Frequentative):\n- በጋራ የሚከናወኑና የሚደጋገሙ (ተደጋገፉ፣ ተጨባበጡ፣ ተረዳዱ፣ ቆራረጠ)።",
      "examples": [
        {
          "target": "ማህበረሰቡ ተረዳድቶና ተደጋግፎ አዲስ ትምህርት ቤት በባለሙያዎች አስገነባ።",
          "reading": "Mahbäräsäbu täräddadtonna tädägaggəfo addis təməhərt bet bäbalämuyawočč asgännäba. [mahbɛrɛsɛˈbu tɛrɛdːadˈtonːa tɛdɛɡaɡːɨˈfo ʔadːis tɨmɨˈhɨrt bet bɛbalɛmujaˈwotʃː ʔasɡɛnːɛˈba] (mah-beh-reh-seh-BOO teh-red-dahd-TOHN-nah teh-deh-gahg-GUH-foh ahd-DEES tuh-muh-HURT bayt beh-bah-leh-moo-yah-WOHCH ahs-gen-neh-BAH)",
          "translation": "The community helped each other, supported one another, and had a new school built by professionals."
        },
        {
          "target": "መጽሐፉ በጥልቀት ተዘጋጅቶ በሊቃውንቱ አማካኝነት በብዙ ቋንቋዎች ተተረጎመ።",
          "reading": "Mäts’hafu bät’əlqät täzäggağəto bäliqawəntu amakanyənät bäbəzu qwanqwawočč tätäräggwämä. [mɛtsʼˈhafu bɛtʼɨlˈkʼɛt tɛzɛɡːaˈdʒɨto bɛlikʼawɨnˈtu ʔamakaɲɨˈnɛt bɛbɨˈzu kʼʷankʼʷaˈwotʃː tɛtɛrɛɡːʷɛˈmɛ] (mets'-HAH-foo beh-t'ul-K'ET teh-zeg-gah-JUH-toh beh-lee-k'ah-wun-TOO ah-mah-kahn-yuh-NET beh-buh-ZOO k'wahn-k'wah-wohch-CH teh-teh-reg-GWEH-meh)",
          "translation": "The book was thoroughly prepared and translated into many languages through scholars."
        },
        {
          "target": "ተወያዮቹ ከተጨባበጡ በኋላ ሀሳባቸውን በነጻነት ተለዋወጡና የጋራ ስምምነት ላይ ደረሱ።",
          "reading": "Täwəyayočču kätäč’äbabbät’u bähwala hassabaččäwən bänäts’annät täläwawwät’unna yägara səməmmənät lay därräsu. [tɛwɨjajoˈtʃːu kɛtɛtʃʼɛbabːɨˈtʼu bɛhʷaˈla hasːabaˈtʃːɛwɨn bɛnɛtsʼanːɛt tɛlɛwawːɛˈtʼunːa jɛɡaˈra sɨmɨmːɨˈnɛt laj dɛrːɛˈsu] (teh-wuh-yah-YOHCH-choo keh-teh-ch'eh-bahb-T'OO beh-hwah-LAH hahs-sah-bahch-CHEW-un beh-nets'-ahn-NET teh-leh-wahw-WEH-t'oon-nah yeh-gah-RAH suh-mum-muh-NET lye der-reh-SOO)",
          "translation": "After the discussants shook hands, they exchanged their ideas freely and reached a common consensus."
        }
      ],
      "mnemonics": [
        "Morphology Grand Quad: Transitive (ተሻጋሪ) + Passive (ተደራጊ) + Causative (አስደራጊ) + Reciprocal (ተደራራጊ)!"
      ],
      "culturalNotes": [
        "የአማርኛ ግስ እርባታ እጅግ የበለጸገ ስነ-ቅርጽ (Morphology) ያለው ሲሆን፣ በጥቂት ፊደላት ለውጥ ውስብስብ ማህበራዊና ተግባቦታዊ ድርጊቶችን የመግለጽ ልዩ አቅም አለው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተለያዩ ውስብስብ የግስ እርባታዎችን ያጣመረው የትኛው ነው?",
          "options": [
            "ተረዳዱ፣ አስገነቡ፣ ተዘጋጀ እና ተጨባበጡ። (Complete verb morphology synthesis: reciprocal, causative, passive)",
            "ምንም ግስ የለም",
            "ሁሉም ቃላት ስሞች ናቸው",
            "የግስ እርባታ የለም"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ተደራራጊ (ተረዳዱ፣ ተጨባበጡ)፣ አስደራጊ (አስገነቡ) እና ተደራጊ (ተዘጋጀ) ግሶችን በአንድነት ያጠቃልላል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ተደራራጊ እና አስደራጊ ግሶችን ያጣመረው ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ነዋሪዎቹ ተረዳድተው አዲስ መንገድ አስጠገኑ። (The residents helped each other and had a new road repaired - Integrated complex verb sentence)",
            "ምንም መንገድ አልተሰራም",
            "አልተረዳዱም",
            "መንገድ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ ተደራራጊውን 'ተረዳድተው' እና አስደራጊውን 'አስጠገኑ' በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 18 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "ተሻጋሪና ኢ-ተሻጋሪ ግሶች፣ ተደራጊ ግሶች (ተ-)፣ አስደራጊ ግሶች (አስ-)፣ እንዲሁም ተደራራጊና ተደጋጋሚ ግሶች ተካተዋል።",
            "ይህ ክፍል ስለ መጓጓዣ ብቻ ነው።",
            "በአማርኛ ውስብስብ ግሶች የሉም።",
            "ሁሉም ግሶች አንድ ዓይነት እርባታ አላቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 18ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ግስ / Verb' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ግስ"
          ],
          "explanation": "ትክክለኛው ቃል «ግስ» (Gəs) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u19-l1": {
    "id": "am-u19-l1",
    "subject": "amharic",
    "unit": 19,
    "lessonNumber": 1,
    "title": "እውነታዊ ሁኔታዊ ዓረፍተ ነገሮች (Real & Probable Conditionals - Prefix «ከ-»)",
    "level": "B2",
    "objective": "በ«ከ-» ቅድመ-ቅጥያ የሚመሰረቱ እውነታዊ ሁኔታዎችንና ውጤቶቻቸውን መግለጽ።",
    "presentation": {
      "explanation": "እውነታዊ ሁኔታዊ ዓረፍተ ነገሮች ሰዋሰዋዊ መዋቅር (Real Conditionals):\n\n፩. የእውነታዊ ሁኔታ ምስረታ:\n- ሁኔታው በእርግጥ ሊፈጸም የሚችል እውነተኛ ወይም ሊሆን የሚችል ቅድመ-ሁኔታ ሲሆን «ከ-» ቅድመ-ቅጥያ ከግሱ ጋር ይጣመራል።\n- ቀመር: [ከ- + [ግስ]] ... [ውጤት]:\n- «ከፈለግህ አብረን እንሄዳለን» (If you want, we will go together).\n- «ዝናብ ከጣለ ጃንጥላ ይዘን እንወጣለን» (If it rains, we will go out with an umbrella).\n- «ጠንክረህ ካጠናህ ፈተናውን በሚገባ ታልፋለህ» (If you study hard, you will pass the exam well)።\n\n፪. ሰዋሰዋዊ ባህሪ:\n- ቅድመ-ሁኔታው ሲሟላ ውጤቱ ወደፊት እንደሚፈጸም ያረጋግጣል።",
      "examples": [
        {
          "target": "ጠንክረህ ካጠናህና ጊዜህን በአግባቡ ከተጠቀምክ ከፍተኛ ውጤት ታገኛለህ።",
          "reading": "T’änkərəh kat’ännahənna gizehən bä'agbabu kätät’äqqämk käftänya wət’et tagänyalläh. [tʼɛnkɨˈrɨh katʼɛnːaˈhɨnːa ɡizeˈhɨn bɛʔaɡbaˈbu kɛtɛtʼɛkʼːɛmk kɛfˈtɛɲa wɨtʼet taɡɛˈɲalːɛh] (t'en-kuh-RUH kah-t'en-NAH-hun-nah gee-zay-HUN beh-ahg-bah-BOO keh-teh-t'ek'-K'EMK kef-TEN-yah wut'-AYT tah-gen-YAHL-leh)",
          "translation": "If you study hard and use your time properly, you will achieve high results."
        },
        {
          "target": "ነገ የአየር ሁኔታው ጥሩ ከሆነ ወደ ተራራው ወጥተን የእግር ጉዞ እናደርጋለን።",
          "reading": "Nägä yä'ayär hutaw t’əru kähonä wädä täraraw wət’t’än yä'əgər guzo ənnadärgallän. [nɛˈɡɛ jɛʔaˈjɛr huˈtaw tʼɨˈru kɛhoˈnɛ wɛˈdɛ tɛraˈraw wɨtʼːɛn jɛʔɨɡr ɡuˈzo ʔɨnːadɛrˈɡalːɛn] (neh-GEH yeh-ah-YER hoo-TAHW t'uh-ROO keh-HOH-neh weh-DEH teh-rah-RAW wut'-T'EN yeh-ug-R goo-ZOH un-nah-der-GAHL-len)",
          "translation": "If the weather is good tomorrow, we will go up the mountain and take a hike."
        },
        {
          "target": "እገዛና ድጋፍ ከፈለጋችሁ እባካችሁ በነጻነት ጠይቁን።",
          "reading": "Əgäzanna dəgaf käfällägaččəhu əbakkaččəhu bänäts’annät t’äyyəqun. [ʔɨɡɛˈzanːa dɨˈɡaf kɛfɛlːɛɡaˈtʃːɨhu ʔɨbakːaˈtʃːɨhu bɛnɛtsʼanːɛt tʼɛjːɨˈkʼun] (uh-geh-ZAHN-nah duh-GAHF keh-fel-leh-GAHCH-choo uh-bahk-kahch-CHOO beh-nets'-ahn-NET t'ey-yuh-K'OON)",
          "translation": "If you need help and support, please ask us freely."
        }
      ],
      "mnemonics": [
        "Real Logic: ከ- (If real: ካጠናህ / ከሆነ / ከፈለግህ) -> ወደፊት ይሆናል (Result)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ማህበራዊ ቃል-ኪዳንና ውይይት 'እግዚአብሔር ከፈቀደ' ወይም 'ሁኔታው ከተመቻቸ' የሚሉ ሁኔታዊ አገላለጾች አክብሮትንና ተስፋን ለማሳየት በስፋት ይሠራባቸዋል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«If you study, you will succeed» የሚለውን በአማርኛ ትክክለኛ እውነታዊ ሁኔታዊ መዋቅር የያዘው የትኛው ነው?",
          "options": [
            "ካጠናህ ስኬታማ ትሆናለህ። (If you study, you will succeed - Correct real conditional with ከ-)",
            "ብታጠና ኖሮ ነበር",
            "አታጠናም",
            "ምንም ጥናት የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ካጠናህ» (ከ- + አጠናህ) እውነተኛና ሊሆን የሚችል ቅድመ-ሁኔታን ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'If it rains, we will stay at home' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ዝናብ ከጣለ ቤት እንቆያለን። (If it rains, we will stay at home - Accurate real conditional)",
            "ዝናብ ቢጥል ኖሮ ቤት ነበርን",
            "ዝናብ አይጥልም",
            "ቤት የለንም"
          ],
          "answerIndex": 0,
          "explanation": "«ዝናብ ከጣለ» የሚለው እውነታዊ ሁኔታዊ አረፍተ ነገር ሊፈጠር የሚችልን ክስተትና ውጤቱን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "እውነታዊ ሁኔታዊ አገላለጾችን (Real conditionals) በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ካጠናህ፣ ከፈለግህ፣ ከመጣህ፣ ከተስማማን እና ከሆነ።",
            "ዳቦ፣ ወጥ እና እንጀራ።",
            "ትናንት፣ ዛሬ እና ነገ።",
            "በአማርኛ ሁኔታዊ አረፍተ ነገር የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ በ«ከ-» ቅድመ-ቅጥያ የተመሰረቱ እውነታዊ ሁኔታዎችን ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ሁኔታ / Condition, situation' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ሁኔታ"
          ],
          "explanation": "ትክክለኛው ቃል «ሁኔታ» (Huneta) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u19-l2": {
    "id": "am-u19-l2",
    "subject": "amharic",
    "unit": 19,
    "lessonNumber": 2,
    "title": "ምናባዊ እና መላምታዊ ሁኔታዎች (Hypothetical & Unreal Conditionals - Prefix «ቢ-»)",
    "level": "B2",
    "objective": "በ«ቢ-» ቅድመ-ቅጥያ የሚመሰረቱ ምናባዊ/መላምታዊ ሁኔታዎችንና «ነበር» የሚለውን ውጤት መጠቀም።",
    "presentation": {
      "explanation": "ምናባዊ እና መላምታዊ ሁኔታዊ ዓረፍተ ነገሮች (Hypothetical Conditionals):\n\n፩. የምናባዊ ሁኔታ ምስረታ:\n- በአሁኑ ጊዜ እውን ያልሆነ ነገር ግን በምናብ ወይም በመላምት የሚታሰብ ቅድመ-ሁኔታ ሲሆን «ቢ-» ቅድመ-ቅጥያ ከግሱ ጋር ይጣመራል።\n- ቀመር: [ቢ- + [ግስ]] ... [[ግስ] + ነበር]:\n- «ጊዜ ቢኖረኝ አዲስ ቋንቋ እማር ነበር» (If I had time, I would learn a new language).\n- «ብር ቢኖረኝ ዓለምን እዞር ነበር» (If I had money, I would travel the world).\n- «እሱ ቢመጣ ደስ ይለን ነበር» (If he came, we would be delighted)።\n\n፪. ሰዋሰዋዊ ልዩነት:\n- «ከ-» (እውነታዊ) vs. «ቢ-» (ምናባዊ/መላምታዊ)።",
      "examples": [
        {
          "target": "በቂ ትርፍ ጊዜ ቢኖረኝ አዳዲስ የሙዚቃ መሳሪያዎችን እለማመድ ነበር።",
          "reading": "Bäqi tərəf gize binoräny addaddis yämuziga mässariyawoččən əllämammäd näbbär. [bɛkʼi tɨrɨf ɡiˈze binoˈrɛɲ ʔadːadːis jɛmusiˈɡa mɛsːarijawoˈtʃːɨn ʔɨlːɛmamːɛd nɛbːɛr] (beh-K'EE tuh-RUF gee-ZAY bee-noh-RENY ahd-dahd-DEES yeh-moo-zee-GAH mes-sah-ree-yah-wohch-CHOON ul-leh-mahm-MED neb-BER)",
          "translation": "If I had enough free time, I would practice new musical instruments."
        },
        {
          "target": "እሱ እዚህ ቢገኝ ለውይይታችን ታላቅ አስተዋጽኦ ያበረክት ነበር።",
          "reading": "Əssu əzzih bigäny läwəyəyyətaččən talaq astäwats’o yabäräkkət näbbär. [ʔɨsːu ʔɨzːih biˈɡɛɲ lɛwɨjɨjːɨˈtatʃːɨn taˈlakʼ ʔastɛwatsʼo jabɛrɛkːɨt nɛbːɛr] (us-SOO uz-ZEEH bee-GENY leh-wuh-yuhy-yuh-TAHCH-chun tah-LAHK' ahs-teh-wahts'-OH yah-beh-rek-KUT neb-BER)",
          "translation": "If he were present here, he would make a great contribution to our discussion."
        },
        {
          "target": "ክንፍ ቢኖረኝ እንደ ወፍ በሰማይ ላይ በነጻነት እበር ነበር።",
          "reading": "Kənf binoräny əndä wäf bäsämay lay bänäts’annät əbärr näbbär. [kɨnf binoˈrɛɲ ʔɨnˈdɛ wɛf bɛsɛˈmaj laj bɛnɛtsʼanːɛt ʔɨˈbɛrː nɛbːɛr] (kun-F bee-noh-RENY un-DEH wef beh-seh-MY lye beh-nets'-ahn-NET uh-BER-R neb-BER)",
          "translation": "If I had wings, I would fly freely in the sky like a bird."
        }
      ],
      "mnemonics": [
        "Dream Condition: ቢ- (If imagined: ቢኖረኝ / ቢገኝ) -> ... እሰራ ነበር (Would do)!"
      ],
      "culturalNotes": [
        "የአማርኛ ግጥሞችና ዘፈኖች ምናባዊ ናፍቆትንና ምኞትን ለመግለጽ 'ቢኖረኝ...' ወይም 'ቢሆን...' የሚለውን የ«ቢ-» ቅድመ-ቅጥያ በስፋት ይጠቀማሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«If I had wings, I would fly» የሚለውን በአማርኛ ትክክለኛ ምናባዊ ሁኔታዊ መዋቅር የያዘው የትኛው ነው?",
          "options": [
            "ክንፍ ቢኖረኝ እበር ነበር። (If I had wings, I would fly - Correct hypothetical conditional with ቢ- and ነበር)",
            "ክንፍ ካለኝ እበር ነበር",
            "ክንፍ የለኝም",
            "እበረራለሁ"
          ],
          "answerIndex": 0,
          "explanation": "«ክንፍ ቢኖረኝ እበር ነበር» ምናባዊ ሁኔታንና መላምታዊ ውጤቱን በትክክል ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'If he came, we would be happy' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "እሱ ቢመጣ ደስ ይለን ነበር። (If he came, we would be happy - Accurate hypothetical sentence)",
            "እሱ ከመጣ ደስ ይለን ነበር",
            "እሱ አይመጣም",
            "ደስ አይለንም"
          ],
          "answerIndex": 0,
          "explanation": "«እሱ ቢመጣ ደስ ይለን ነበር» ምናባዊ መላምትን በትክክል ያረጋግጣል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ምናባዊ ሁኔታዊ አገላለጾችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ቢኖረኝ... ነበር፣ ቢመጣ... ነበር፣ ቢሆን... ነበር እና ቢፈቀድ... ነበር።",
            "በላ፣ ጠጣ፣ ሄደ እና መጣ።",
            "ሰማያዊ፣ ቢጫ እና ቀይ።",
            "በአማርኛ ምናባዊ ሁኔታ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ በ«ቢ-... ነበር» የተዋቀሩ ዋና ዋና ምናባዊ ሁኔታዎችን ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቢሆን / If it were, hypothetically' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቢሆን"
          ],
          "explanation": "ትክክለኛው ቃል «ቢሆን» (Bihon) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u19-l3": {
    "id": "am-u19-l3",
    "subject": "amharic",
    "unit": 19,
    "lessonNumber": 3,
    "title": "ያለፈ ምናባዊ ሁኔታ (Past Unreal & Counterfactual Conditionals - «ቢ... ኖሮ»)",
    "level": "B2",
    "objective": "ያለፈ ጸጸትና ያልተፈጸመ ያለፈ ሁኔታን በ«ቢ... ኖሮ» + «ነበር» መግለጽ።",
    "presentation": {
      "explanation": "ያለፈ ምናባዊ ሁኔታ (Counterfactual Conditionals in the Past):\n\n፩. የያለፈ ምናባዊ ሁኔታ ምስረታ:\n- ባለፈው ጊዜ ያልተፈጸመንና ሊቀየር የማይችልን ሁኔታ (ጸጸት ወይም ግምት) ለመግለጽ ያገለግላል።\n- ቀመር: [[ግስ] + ቢ- + ኖሮ] ... [[ግስ] + ነበር / አይሆንም ነበር]:\n- «በሰዓቱ ደርሶ ቢሆን ኖሮ ባቡሩ አያመልጠውም ነበር» (If he had arrived on time, he would not have missed the train).\n- «መረጃው ኖሮን ቢሆን ኖሮ ይህ ስህተት አይፈጠርም ነበር» (If we had had the info, this mistake wouldn't have occurred).\n- «ጠንክሮ ሠርቶ ቢሆን ኖሮ ይሳካለት ነበር» (If he had worked hard, he would have succeeded)።\n\n፪. ሰዋሰዋዊ ትርጉም:\n- ክስተቱ ባለፈው አልተፈጸመም፤ ውጤቱም አልተከሰተም።",
      "examples": [
        {
          "target": "ትናንት በሰዓቱ ተነስቶ ቢሆን ኖሮ የጠዋቱ አውሮፕላን አያመልጠውም ነበር።",
          "reading": "Tənant bäsäʿatu tänəsto bihon noro yät’äwatu awroplan ayamälət’äwəm näbbär. [tɨˈnant bɛsɛˈʔatu tɛnɨsˈto biˈhon noˈro jɛtʼɛwaˈtu ʔawroˈplan ʔajamɛlɨtʼɛˈwɨm nɛbːɛr] (tuh-NAHNT beh-seh-AH-too teh-nus-TOH bee-HOHN noh-ROH yeh-t'eh-wah-TOO ow-roh-PLAHN ah-yah-meh-luh-t'ew-UM neb-BER)",
          "translation": "If he had woken up on time yesterday, he would not have missed the morning flight."
        },
        {
          "target": "ስለ ጉዳዩ አስቀድመን አውቀን ቢሆን ኖሮ የተሻለ ዝግጅት እናደርግ ነበር።",
          "reading": "Səlä guddayu asqäddəmän awqän bihon noro yätäšalä zəggəğğət ənnadärəg näbbär. [sɨlɛ ɡuddaˈju ʔaskʼɛdːɨˈmɛn ʔawˈkʼɛn biˈhon noˈro jɛtɛʃaˈlɛ zɨɡːɨdʒːɨt ʔɨnːadɛˈrɨɡ nɛbːɛr] (suh-LEH good-dah-YOO ahs-k'ed-duh-MEN ow-K'EN bee-HOHN noh-ROH yeh-teh-shah-LEH zug-guj-JUT un-nah-deh-RUG neb-BER)",
          "translation": "If we had known about the matter beforehand, we would have made better preparations."
        },
        {
          "target": "ዝናቡ ባይዘንብ ኖሮ ትናንት የጀመርነውን የቤት ግንባታ እንጨርስ ነበር።",
          "reading": "Zənabu bayəzänb noro tənant yäğämmärnäwən yäbet gənbata ənnəč’ärrəs näbbär. [zɨnaˈbu bajɨzɛnb noˈro tɨˈnant jɛdʒɛmːɛrˈnɛwɨn jɛbet ɡɨnbaˈta ʔɨnːɨtʃʼɛrːɨs nɛbːɛr] (zuh-NAH-boo bah-yuh-ZENB noh-ROH tuh-NAHNT yeh-jem-mer-NEH-wun yeh-BAYT gun-bah-TAH un-nuh-ch'er-RUS neb-BER)",
          "translation": "If it had not rained, we would have finished the house construction we started yesterday."
        }
      ],
      "mnemonics": [
        "Past Regret: ቢ... ኖሮ (If had been: ቢሆን ኖሮ) -> ... ነበር / አይሆንም ነበር (Past unreal result)!"
      ],
      "culturalNotes": [
        "በአማርኛ ባህል 'የፈሰሰ ውሃ አይታፈስም' የሚለው ምሳሌ ያለፈ ጸጸትን (ቢሆን ኖሮ) ከመደጋገም ይልቅ ለወደፊቱ መጠንቀቅን ይመክራል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«If he had come, we would have met» የሚለውን በአማርኛ ትክክለኛ ያለፈ ምናባዊ ሁኔታ የያዘው የትኛው ነው?",
          "options": [
            "መጥቶ ቢሆን ኖሮ እንገናኝ ነበር። (If he had come, we would have met - Correct counterfactual past with ቢሆን ኖሮ)",
            "ከመጣ እንገናኛለን",
            "ቢመጣ እንገናኛለን",
            "አልተገናኘንም"
          ],
          "answerIndex": 0,
          "explanation": "«መጥቶ ቢሆን ኖሮ እንገናኝ ነበር» ባለፈው ያልተፈጸመን ያለፈ ምናባዊ ሁኔታ ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'If you had told me, I would have helped you' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ነግረኸኝ ቢሆን ኖሮ እረዳህ ነበር። (If you had told me, I would have helped you - Accurate past counterfactual)",
            "ከነገርከኝ እረዳሃለሁ",
            "አልረዳህም",
            "ምንም አልተናገርክም"
          ],
          "answerIndex": 0,
          "explanation": "«ነግረኸኝ ቢሆን ኖሮ እረዳህ ነበር» ያለፈውን ያልተፈጸመ ሁኔታ በትክክል ይገልጻል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ያለፈ ምናባዊ ሁኔታዎችን (Past counterfactuals) በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ቢሆን ኖሮ... ነበር፣ አውቆ ቢሆን ኖሮ፣ ባይዘንብ ኖሮ እና ደርሶ ቢሆን ኖሮ።",
            "አንድ፣ ሁለት፣ ሦስት እና አራት።",
            "ጠረጴዛ፣ ወንበር እና ሶፋ።",
            "በአማርኛ ያለፈ ምናባዊ ሁኔታ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ በ«ቢ... ኖሮ... ነበር» የተገነቡ ዋና ዋና ያለፈ ምናባዊ ሁኔታዎችን ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ኖሮ / Had it been (counterfactual marker)' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ኖሮ"
          ],
          "explanation": "ትክክለኛው ቃል «ኖሮ» (Noro) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u19-l4": {
    "id": "am-u19-l4",
    "subject": "amharic",
    "unit": 19,
    "lessonNumber": 4,
    "title": "ተቃራኒ እና ቅድመ-ሁኔታዊ አያያዦች (Concessive & Proviso Connectors)",
    "level": "B2",
    "objective": "ተቃራኒና ቅድመ-ሁኔታዊ አያያዦችን (ቢ...ም እንኳ፣ ካልሆነ በቀር፣ እስከ... ድረስ) መጠቀም።",
    "presentation": {
      "explanation": "ተቃራኒ እና ቅድመ-ሁኔታዊ ሰዋሰዋዊ አያያዦች:\n\n፩. ተቃራኒ ሁኔታዊ አያያዦች (Concessive Connectors):\n- ቢ...ም / ቢ...ም እንኳ: ምንም እንኳን ሁኔታው ቢኖርም ድርጊቱ ይፈጸማል (Even if / although)።\n- «መንገዱ ቢረዝምም እንኳ በደስታ እንጓዛለን» (Even if the road is long, we travel happily)።\n- «ቢከብድም ወደኋላ አንልም» (Even if it is hard, we will not back down)።\n\n፪. ቅድመ-ሁኔታዊ አያያዦች (Proviso & Negative Connectors):\n- ካልሆነ በቀር / ካልሆነ በስተቀር: ሁኔታው ካልተሟላ በስተቀር ሌላ አማራጭ የለም (Unless / except if)።\n- «ፈቃድ ካልተሰጠ በቀር መግባት አይቻልም» (Unless permission is given, entering is impossible)።\n- እስከ... ድረስ: ቅድመ-ሁኔታው እስከቀጠለበት ጊዜ (As long as / provided that)።\n- «እስከፈቀድክ ድረስ እቆያለሁ» (As long as you permit, I will stay)።",
      "examples": [
        {
          "target": "ፈተናው ቢከብድም እንኳ በትጋትና በሙሉ ተስፋ ዝግጅታችንን እንቀጥላለን።",
          "reading": "Fätänaw bikäbdəm ənkwa bətəgatənna bämulu täsfa zəggəğğətaččənən ənnəqät’t’əlallän. [fɛtɛˈnaw bikɛbˈdɨm ʔɨnˈkʷa bɛtɨˈɡatɨnːa bɛmuˈlu tɛsˈfa zɨɡːɨdʒːɨtaˈtʃːɨnɨn ʔɨnːɨkʼɛtʼːɨˈlalːɛn] (feh-teh-NAHW bee-keb-DUM un-KWAH beh-tuh-GAHT-un-nah beh-moo-LOO tes-FAH zug-guj-juh-TAHCH-chun-un un-nuh-k'et'-t'uh-LAHL-len)",
          "translation": "Even if the exam is difficult, we will continue our preparation with diligence and full hope."
        },
        {
          "target": "የህክምና ማስረጃ ካልቀረበ በቀር ከፈተና መቅረት በፍጹም አይፈቀድም።",
          "reading": "Yähəkkəmənna masräğğa kalqärräbä bäqär käfätäna mäqrät bäfəts’um ayyəffäqqädm. [jɛhɨkːɨmɨnːa masrɛdʒːa kalkʼɛrːɛˈbɛ bɛˈkʼɛr kɛfɛtɛˈna mɛkʼˈrɛt bɛfɨtsʼum ʔajːɨfːɛkʼːɛdm] (yeh-huk-kuh-mun-NAH mahs-red-JAH kahl-k'er-reh-BEH beh-K'ER keh-feh-teh-NAH mek'-RET beh-futs'-OOM eye-yuf-fek'-K'EDM)",
          "translation": "Unless medical evidence is presented, being absent from the exam is strictly not permitted."
        },
        {
          "target": "ሰላምና አንድነት እስካለ ድረስ ሀገራችን ሁልጊዜ ወደፊት ትራመዳለች።",
          "reading": "Sälamənna andənät əskallä dräs hagäraččən hulgize wädäfit tərrämmädalläčč. [sɛlaˈmɨnːa ʔandɨˈnɛt ʔɨskalːɛ dɨrɛs haɡɛˈratʃːɨn hulɡiˈze wɛdɛˈfit tɨrːɛmːɛdaˈlːɛtʃː] (seh-LAH-mun-nah ahn-duh-NET us-KAHL-leh duh-RES hah-geh-rahch-CHUN hool-GEE-zay weh-deh-FEET tur-rem-meh-DAHL-lech)",
          "translation": "As long as there is peace and unity, our country will always march forward."
        }
      ],
      "mnemonics": [
        "Connector Trio: ቢ...ም እንኳ (Even if) + ካልሆነ በቀር (Unless) + እስካለ ድረስ (As long as)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል 'ሰው ካልረዳው በቀር ብቻውን አይቆምም' የሚለው አስተሳሰብ መረዳዳት የሰው ልጅ መሠረታዊ ቅድመ-ሁኔታ መሆኑን ያጎላል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Even if it is difficult, we will try» የሚለውን በአማርኛ ትክክለኛ ተቃራኒ አያያዥ የያዘው የትኛው ነው?",
          "options": [
            "ቢከብድም እንኳ እንሞክራለን። (Even if it is difficult, we will try - Correct concessive connector)",
            "ከከበደ አንሞክርም",
            "አይከብድም",
            "ምንም ጥረት የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ቢከብድም እንኳ» ተቃራኒ ቅድመ-ሁኔታን የሚያሳይ ትክክለኛ አያያዥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Unless you come, we will not go' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "አንተ ካልመጣህ በቀር አንሄድም። (Unless you come, we will not go - Accurate negative proviso connector)",
            "አንተ ከመጣህ እንሄዳለን",
            "አንሄድም",
            "ብትመጣ ኖሮ"
          ],
          "answerIndex": 0,
          "explanation": "«ካልመጣህ በቀር» 'ካልሆነ በስተቀር' የሚለውን ቅድመ-ሁኔታ በትክክል ይገልጻል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ተቃራኒ እና ቅድመ-ሁኔታዊ አያያዦችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ቢ...ም እንኳ፣ ካልሆነ በቀር፣ ካልሆነ በስተቀር እና እስካለ ድረስ።",
            "ቤት፣ መኪና እና አውሮፕላን።",
            "ሰኞ፣ ማክሰኞ እና ሐሙስ።",
            "በአማርኛ አያያዦች የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና ተቃራኒና ቅድመ-ሁኔታዊ አያያዦችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'በቀር / Except, unless' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "በቀር"
          ],
          "explanation": "ትክክለኛው ቃል «በቀር» (Bäqär) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u19-l5": {
    "id": "am-u19-l5",
    "subject": "amharic",
    "unit": 19,
    "lessonNumber": 5,
    "title": "የክፍል 19 አጠቃላይ ማጠቃለያ (Unit 19 Grand Synthesis & Conditional Logic Discourse)",
    "level": "B2",
    "objective": "እውነታዊ፣ ምናባዊ፣ ያለፈ ምናባዊ እና ተቃራኒ ሁኔታዎችን ያቀናጀ የተሟላ የሎጂክና ውይይት ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፲፱ አጠቃላይ ሰዋሰዋዊ ውህደት እና የሁኔታዊ አረፍተ ነገሮች ማጠቃለያ:\n\n፩. እውነታዊ ሁኔታዎች (Real Conditionals):\n- በ«ከ-» የሚመሰረቱ (ካጠናህ፣ ከፈለግህ፣ ከመጣህ)።\n\n፪. ምናባዊ ሁኔታዎች (Hypothetical Conditionals):\n- በ«ቢ-... ነበር» የሚመሰረቱ (ቢኖረኝ... ነበር፣ ቢመጣ... ነበር)።\n\n፫. ያለፈ ምናባዊ ሁኔታ (Past Counterfactuals):\n- በ«ቢ... ኖሮ... ነበር» የሚመሰረቱ (ቢሆን ኖሮ... ነበር፣ አውቆ ቢሆን ኖሮ)።\n\n፬. ተቃራኒና ቅድመ-ሁኔታዊ አያያዦች (Concessives & Provisos):\n- ቢ...ም እንኳ፣ ካልሆነ በቀር/በስተቀር፣ እስካለ ድረስ።",
      "examples": [
        {
          "target": "ዕድሉን በአግባቡ ተጠቅመንበት ቢሆን ኖሮ ዛሬ ከዚህ እጅግ የላቀ ደረጃ ላይ እንደር ነበር።",
          "reading": "Əddəlun bä'agbabu tät’äqmənbät bihon noro zarre käzzih əğğəg yälaqä däräğa lay əndärəs näbbär. [ʔɨdːɨˈlun bɛʔaɡbaˈbu tɛtʼɛkʼmɨnˈbɛt biˈhon noˈro zaˈre kɛzːih ʔɨdʒːɨɡ jɛlaˈkʼɛ dɛrɛˈdʒa laj ʔɨndɛˈrɨs nɛbːɛr] (ud-duh-LOON beh-ahg-bah-BOO teh-t'ek'-mun-BET bee-HOHN noh-ROH zah-RAY kez-ZEEH uhj-JUG yeh-lah-K'EH deh-reh-JAH lye un-deh-RUS neb-BER)",
          "translation": "If we had utilized the opportunity properly, we would have reached a far higher level today."
        },
        {
          "target": "ተግዳሮቶች ቢበዙም እንኳ በጽናት ከሰራን የምንፈልገውን ግብ እናሳካለን።",
          "reading": "Tägdaročč bibäzum ənkwa bäts’ənat käsärran yämmənəfälləgäwən gəb ənnasakallän. [tɛɡdaˈrotʃː biˈbɛzum ʔɨnˈkʷa bɛtsʼɨˈnat kɛsɛrːan jɛmːɨnɨfɛlːɨɡɛˈwɨn ɡɨb ʔɨnːasaˈkalːɛn] (teg-dah-ROHCH bee-beh-ZOOM un-KWAH beh-ts'uh-NAHT keh-ser-RAHN yem-muh-nuh-fel-luh-geh-WUN gub un-nah-sah-KAHL-len)",
          "translation": "Even if challenges multiply, if we work with perseverance, we will accomplish our desired goal."
        },
        {
          "target": "ሁሉም ሰው በቅንነት ካልተባበረ በቀር የጋራ ብልጽግናን ማረጋገጥ አይቻልም።",
          "reading": "Hullum säw bäqənnənät kaltäbabbärä bäqär yägara bəlts’əgganan maräggagät’ ayyəččaləm. [hulːum sɔw bɛkʼɨnːɨˈnɛt kaltɛbabːɛˈrɛ bɛˈkʼɛr jɛɡaˈra bɨltsʼɨɡːaˈnan marɛɡːaˈɡɛtʼ ʔajːɨtʃːaˈlɨm] (hool-LOOM sow beh-k'un-nuh-NET kahl-teh-bahb-beh-REH beh-K'ER yeh-gah-RAH bul-ts'ug-gah-NAHN mah-reg-gah-GET' eye-yuhch-CHAH-lum)",
          "translation": "Unless everyone cooperates with sincerity, ensuring shared prosperity is impossible."
        }
      ],
      "mnemonics": [
        "Logic Matrix: Real (ከ-) + Unreal (ቢ-) + Past Unreal (ቢ... ኖሮ) + Proviso (ካልሆነ በቀር)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ስነ-አመክንዮ እና ፍልስፍናዊ ውይይቶች ውስጥ ቅድመ-ሁኔታዎችንና ውጤቶችን በጥልቀት መመርመር 'ምክንያትና ውጤት'ን የማገናዘብ ጥልቅ የጥበብ መንገድ ተደርጎ ይወሰዳል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የሁኔታዊ አረፍተ ነገሮች ውህደትን የሚያሳየው የትኛው ነው?",
          "options": [
            "ቢከብድም እንኳ በትጋት ከሰራን እናሳካለን፤ ካልተባበርን በቀር ግን አይቻልም። (Complete conditional logic synthesis: concessive, real, and proviso)",
            "ምንም ሁኔታ የለም",
            "ሁሉም ነገር ቀላል ነው",
            "ሁኔታዊ ህጎች የሉም"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ተቃራኒ (ቢከብድም እንኳ)፣ እውነታዊ (ከሰራን) እና ቅድመ-ሁኔታዊ (ካልተባበርን በቀር) መዋቅሮችን ያጣመረ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ያለፈ ምናባዊ እና እውነታዊ ሁኔታዎችን ያጣመረው ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ያኔ ተጠንቅቀን ቢሆን ኖሮ አሁን ችግር ውስጥ አንገባም ነበር፤ አሁን ግን ከሰራን ይስተካከላል። (If we had been careful then we wouldn't be in trouble now; but now if we work it will be fixed - Integrated conditional sentence)",
            "ምንም አይስተካከልም",
            "ያኔ አልነበርንም",
            "ችግር የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ ያለፈውን ምናባዊ ሁኔታ (ቢሆን ኖሮ) እና የአሁኑን እውነታዊ ሁኔታ (ከሰራን) በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 19 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "እውነታዊ ሁኔታዎች (ከ-)፣ ምናባዊ ሁኔታዎች (ቢ-)፣ ያለፈ ምናባዊ ሁኔታ (ቢ... ኖሮ)፣ እንዲሁም ተቃራኒና ቅድመ-ሁኔታዊ አያያዦች (ቢ...ም እንኳ/ካልሆነ በቀር) ተካተዋል።",
            "ይህ ክፍል ስለ ኪነ-ጥበብ ብቻ ነው።",
            "በአማርኛ ሁኔታዊ ቃላት የሉም።",
            "ሁሉም ሁኔታዎች አንድ ዓይነት ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 19ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ሁኔታዊ / Conditional' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ሁኔታዊ"
          ],
          "explanation": "ትክክለኛው ቃል «ሁኔታዊ» (Hunetawi) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u20-l1": {
    "id": "am-u20-l1",
    "subject": "amharic",
    "unit": 20,
    "lessonNumber": 1,
    "title": "የተገብሮ ግስ አወቃቀርና አጠቃቀም (Passive Voice Morphology & Syntax)",
    "level": "B2",
    "objective": "ተገብሮ ግስን በተለያዩ የጊዜና የድርጊት ክፍሎች (ኃላፊ፣ ኃላፊ-ቀጣይ፣ ዘንድ፣ ንዑስ አንቀጽ) መጠቀም።",
    "presentation": {
      "explanation": "የተገብሮ ግስ አወቃቀርና የጊዜ እርባታዎች (Passive Forms Across Tenses):\n\n፩. የኃላፊ ጊዜ ተገብሮ (Past Passive):\n- ተ- + ስርወ-ግስ: ተጻፈ (was written)፣ ተሰራ (was built/made)፣ ተዘጋጀ (was prepared)።\n\n፪. የወደፊት እና የአሁን ቀጣይ ተገብሮ (Present/Future & Continuous Passive):\n- ይጻፋል (it will be / is written)፣ ይሰራል (it will be built)።\n- እየተጻፈ ነው (it is being written)፣ እየተሰራ ነው (it is being constructed)።\n\n፫. የፍጻሜ ጊዜ ተገብሮ (Perfect / Gerundive Passive):\n- ተጽፏል (it has been written)፣ ተሰርቷል (it has been built/done)።",
      "examples": [
        {
          "target": "አዲሱ የጤና ጣቢያ በዘመናዊ የህክምና መሣሪያዎች ተሟልቶ ለህዝብ አገልግሎት እየተሰጠበት ነው።",
          "reading": "Addisu yät’ena t’abiya bäzämänawi yähəkkəmənna mässariyawočč tämwalto lähəzb agäglot əyyätässätt’äbät näw. [ʔadːiˈsu jɛtʼeˈna tʼabiˈja bɛzɛmɛnaˈwi jɛhɨkːɨmɨnːa mɛsːarijaˈwotʃː tɛmʷalˈto ləhɨzb ʔaɡɛɡˈlot ʔɨjːɛtɛsːɛtʼːɛˈbɛt nɛw] (ahd-dee-SOO yeh-t'ay-NAH t'ah-bee-YAH beh-zeh-meh-nah-WEE yeh-huk-kuh-mun-NAH mes-sah-ree-yah-WOHCH tem-wahl-TOH luh-huz-B ah-geg-LOHT uy-yeh-tes-set'-t'eh-BET new)",
          "translation": "The new health station has been fulfilled with modern medical equipment and service is being given to the public."
        },
        {
          "target": "ይህ ጥናታዊ ጽሑፍ በታዋቂ ፕሮፌሰሮች ተገምግሞ በዓለም አቀፍ ጆርናል ላይ ታተመ።",
          "reading": "Yəh t’ənatawi ts’əhuf bätawaqi pirofesäročč tägämgəmo bä'aläm aqäf ğornal lay tattämä. [jɨh tʼɨnaˈtawi tsʼɨˈhuf bɛtawaˈkʼi pirofesɛˈrotʃː tɛɡɛmɡɨˈmo bɛʔaˈlɛm ʔaˈkʼɛf dʒorˈnal laj tatːɛˈmɛ] (yuh t'uh-nah-TAH-wee ts'uh-HOOF beh-tah-wah-K'EE pee-roh-feh-seh-ROHCH teh-gem-guh-MOH beh-AH-lem ah-K'EF jor-NAHL lye taht-teh-MEH)",
          "translation": "This research paper was reviewed by renown professors and published in an international journal."
        },
        {
          "target": "ለከተማው ህዝብ የሚሆን ንጹህ የመጠጥ ውሃ ፕሮጀክት በሚገባ ተጠናቆ ተመረቀ።",
          "reading": "Läkätämaw həzb yämmihon nəts’uh yämät’ät’ wəha piroğäkt bämigäba tät’änaqqo tämärräqä. [lɛkɛtɛˈmaw hɨzb jɛmːiˈhon nɨtsʼuh jɛmɛˈtʼɛtʼ wɨˈha pirodʒɛkt bɛmiɡɛˈba tɛtʼɛnakʼːo tɛmɛrːɛˈkʼɛ] (leh-keh-teh-MAHW huz-B yem-mee-HOHN nuts'-OOH yeh-meh-t'et' wuh-HAH pee-roh-JEKT beh-mee-geh-BAH teh-t'eh-nahk'-K'OH teh-mer-reh-K'EH)",
          "translation": "A clean drinking water project for the city's population was properly finalized and inaugurated."
        }
      ],
      "mnemonics": [
        "Tense Shift: Past (ተጻፈ) -> Continuous (እየተጻፈ ነው) -> Perfect (ተጽፏል)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ህዝባዊ ፕሮጀክቶች ምረቃ ላይ 'ተመረቀ' እና 'ተጠናቀቀ' የሚሉ ተገብሮ ቃላት የስራውን መጠናቀቅ ለማብሰር በስፋት ይሠራባቸዋል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«The project is being constructed» የሚለውን በአማርኛ ተገብሮ ቀጣይ ጊዜ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ፕሮጀክቱ እየተገነባ ነው። (The project is being constructed - Continuous passive)",
            "ፕሮጀክቱ ተገነባ",
            "ፕሮጀክቱ ይገነባል",
            "ፕሮጀክት የለም"
          ],
          "answerIndex": 0,
          "explanation": "«እየተገነባ ነው» በአሁን ሰዓት እየተከናወነ ያለ ተገብሮ ቀጣይ ድርጊትን ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'The book has been published' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "መጽሐፉ ታትሟል። (The book has been published - Perfect passive aspect)",
            "መጽሐፉ ታተመ",
            "መጽሐፉ ይታተማል",
            "መጽሐፉ አልታተመም"
          ],
          "answerIndex": 0,
          "explanation": "«ታትሟል» የድርጊቱን መጠናቀቅ የሚያሳይ የፍጻሜ ጊዜ ተገብሮ ግስ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የተገብሮ ግስ የጊዜ እርባታዎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ተዘጋጀ (Past)، እየተዘጋጀ ነው (Continuous)، ተዘጋጅቷል (Perfect) እና ይዘጋጃል (Future)።",
            "አረንጓዴ፣ ቢጫ፣ ቀይ እና ነጭ።",
            "ሰኞ፣ ማክሰኞ እና እሮብ።",
            "በአማርኛ ተገብሮ ግስ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የተገብሮ ግስን ዋና ዋና የጊዜ እርባታዎች በሙሉ ያሳያል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ተገብሮ / Passive' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ተገብሮ"
          ],
          "explanation": "ትክክለኛው ቃል «ተገብሮ» (Tägäbro) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u20-l2": {
    "id": "am-u20-l2",
    "subject": "amharic",
    "unit": 20,
    "lessonNumber": 2,
    "title": "ድርጊት ፈጻሚን በመስተዋድድ መግለጽ (Expressing the Agent with Prepositions)",
    "level": "B2",
    "objective": "በተገብሮ ዓረፍተ ነገር ውስጥ ድርጊት ፈጻሚውን በ«በ... አማካኝነት» / «በ... በኩል» ማሳወቅ።",
    "presentation": {
      "explanation": "በተገብሮ ዓረፍተ ነገር ውስጥ ድርጊት ፈጻሚን የመግለጽ ሰዋሰዋዊ ህግ (Agentive Markers):\n\n፩. ዋና ዋና መስተዋድዳዊ አገላለጾች:\n- «በ... አማካኝነት» (Through / by means of):\n  «ውሳኔው በሚኒስቴሩ አማካኝነት ተላለፈ» (The decision was passed through the ministry)።\n- «በ... በኩል» (On the part of / by):\n  «ድጋፉ በበጎ አድራጊዎች በኩል ተሰጠ» (The support was given on the part of benefactors)።\n- «በ... እጅ» (By the hand of):\n  «ስዕሉ በታላቁ ሰዓሊ እጅ ተሳለ» (The painting was drawn by the great artist's hand)።\n\n፪. የአገባብ አጠቃቀም:\n- ድርጊቱ የተፈጸመበትን ተደራጊ በማስቀደም ድርጊት ፈጻሚውን በመስተዋድድ ማያያዝ።",
      "examples": [
        {
          "target": "የሰላም ስምምነቱ በሽምግልና ኮሚቴው አማካኝነት በይፋ ተፈረመ።",
          "reading": "Yäsälam səməmmənätu bäšəmgəlna komitew amakanyənät bäyəfa täfärrämä. [jɛsɛˈlam sɨmɨmːɨˈnɛtu bɛʃɨmɡɨlˈna komiˈtew ʔamakaɲɨˈnɛt bɛjɨˈfa tɛfɛrːɛˈmɛ] (yeh-seh-LAHM suh-mum-muh-NAY-too beh-shum-gul-NAH koh-mee-TAY-woo ah-mah-kahn-yuh-NET beh-yuh-FAH teh-fer-reh-MEH)",
          "translation": "The peace agreement was officially signed through the mediation committee."
        },
        {
          "target": "አዲሱ የቴክኖሎጂ ፈጠራ በሀገር ውስጥ መሃንዲሶች በኩል ወደ ስራ ገባ።",
          "reading": "Addisu yätekənoloğği fät’t’ära bähagär wəst’ mähandəsočč bäkkul wädä səra gäbba. [ʔadːiˈsu jɛteknoloˈdʒi fɛtʼːɛˈra bɛhaˈɡɛr wɨstʼ mɛhandɨˈsotʃː bɛkːul wɛˈdɛ sɨˈra ɡɛbːa] (ahd-dee-SOO yeh-tek-noh-loh-JEE fet'-t'eh-RAH beh-hah-GER woos-T' meh-hahn-duh-SOHCH bek-KOOL weh-DEH suh-RAH geb-BAH)",
          "translation": "The new technological innovation went into operation on the part of domestic engineers."
        },
        {
          "target": "የታሪካዊው ህንፃ ቅርጽ በጥንታዊ አናፂዎች እጅ በሚያምር ሁኔታ ተቀርጾ ተሰራ።",
          "reading": "Yätarikawiw hənts’a qərts’ bät’əntawi anats’iwočč əğğ bämmiyamər huneta täqərtso täsärra. [jɛtariˈkawiw hɨnˈtsʼa kʼɨrtsʼ bɛtʼɨntaˈwi ʔanatsʼiˈwotʃː ʔɨdʒː bɛmːijaˈmɨr huˈneta tɛkʼɨrˈtso tɛsɛrːa] (yeh-tah-ree-KAH-weew hun-TS'AH k'ur-TS' beh-t'un-tah-WEE ah-nah-ts'ee-WOHCH uhj bem-mee-yah-MUR hoo-nay-TAH teh-k'ur-TSOH teh-ser-RAH)",
          "translation": "The shape of the historical building was carved and crafted beautifully by the hand of ancient builders."
        }
      ],
      "mnemonics": [
        "Agent Tags: በ... አማካኝነት (Through agent) / በ... በኩል (By party) / በ... እጅ (By hands)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህላዊ ሽምግልና 'በሽማግሌዎች አማካኝነት' ጉዳዮች መቋጨታቸው ህጋዊና ማህበራዊ ተቀባይነትን ያረጋግጣል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«The letter was sent through the embassy» የሚለውን በአማርኛ ድርጊት ፈጻሚውን በመስተዋድድ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ደብዳቤው በኤምባሲው አማካኝነት ተላከ። (The letter was sent through the embassy - Agent with በ... አማካኝነት)",
            "ደብዳቤው ተላከ",
            "ኤምባሲው ደብዳቤ ላከ",
            "ደብዳቤ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«በኤምባሲው አማካኝነት» ድርጊት ፈጻሚውን አካል በትክክል ያመለክታል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'The book was authored by scholars' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "መጽሐፉ በምሁራኑ በኩል ተዘጋጀ። (The book was prepared on the part of scholars - Accurate agentive passive)",
            "ምሁራኑ መጽሐፉን አነበቡ",
            "መጽሐፉ ጠፋ",
            "ምሁራን የሉም"
          ],
          "answerIndex": 0,
          "explanation": "«በምሁራኑ በኩል ተዘጋጀ» ድርጊት ፈጻሚውን በትክክል ያሳውቃል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "ድርጊት ፈጻሚን የሚያመለክቱ መስተዋድዳዊ አገላለጾችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "በ... አማካኝነት፣ በ... በኩል፣ በ... እጅ እና በ... አማካሪነት።",
            "ከ... በላይ፣ ከ... በታች እና በ... ውስጥ።",
            "ትናንት፣ ዛሬ እና ከነገ ወዲያ።",
            "በአማርኛ ድርጊት ፈጻሚ አይገለጽም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ በተገብሮ ዓረፍተ ነገር ውስጥ ፈጻሚን ለመግለጽ የሚያገለግሉ ዋና ዋና አገላለጾችን ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አማካኝነት / Means, agency, mediation' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አማካኝነት"
          ],
          "explanation": "ትክክለኛው ቃል «አማካኝነት» (Amakanyənät) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u20-l3": {
    "id": "am-u20-l3",
    "subject": "amharic",
    "unit": 20,
    "lessonNumber": 3,
    "title": "ተገብሮ ግስ በዜና እና በይፋዊ ጽሑፎች (Passive Voice in News & Official Journalism)",
    "level": "B2",
    "objective": "በዜና፣ በመንግሥት መግለጫዎችና በህጋዊ ሰነዶች ውስጥ ተገብሮ ግስን በሙያዊ ደረጃ መጠቀም።",
    "presentation": {
      "explanation": "ተገብሮ ግስ በዜና እና ይፋዊ መግለጫዎች ውስጥ (Journalistic & Official Passive):\n\n፩. የዜና ቋንቋ ባህሪያት:\n- ዜናና ይፋዊ መግለጫዎች ገለልተኛ፣ ሚዛናዊና መደበኛ ቃና እንዲኖራቸው ተገብሮ ግስ በስፋት ጥቅም ላይ ይውላል።\n\n፪. ዋና ዋና ይፋዊ ተገብሮ አገላለጾች:\n- «ስብሰባ ተካሄደ» (Meeting was held)\n- «ውይይት ተደረገ» (Discussion was conducted)\n- «አዋጅ ታወጀ» (Proclamation was declared)\n- «ስምምነት ተፈረመ» (Agreement was signed)\n- «ውሳኔ ተላለፈ» (Decision was passed)\n- «መግለጫ ተሰጠ» (Statement was issued)።",
      "examples": [
        {
          "target": "በአፍሪካ ህብረት አዳራሽ የአህጉሪቱ መሪዎች የተሳተፉበት ታላቅ ጉባኤ በስኬት ተካሄደ።",
          "reading": "Bä'afrika həbrät adaraš yä'ahəguritu märiwočč yätäsattäfubät talaq guba'e bäsəket täkahedä. [bɛʔafriˈka hɨbˈrɛt ʔadaˈraʃ jɛʔahɨɡuˈritu mɛriˈwotʃː jɛtɛsatːɛfuˈbɛt taˈlakʼ ɡubaˈʔe bɛsɨˈket tɛkaˈhedɛ] (beh-ahf-ree-KAH hub-RET ah-dah-RAHSH yeh-ah-huh-goo-REE-too meh-ree-WOHCH yeh-teh-saht-teh-foo-BET tah-LAHK' goo-bah-AY beh-suh-KAYT teh-kah-HAY-deh)",
          "translation": "A grand summit involving the continent's leaders was successfully held at the African Union hall."
        },
        {
          "target": "የአዲስ አበባ ከተማ አስተዳደር ያወጣው አዲስ የግብር አዋጅ በይፋ ታወጀ።",
          "reading": "Yä'addis Abäba kätäma astädadär yawät’t’aw addis yägəbər awagğ bäyəfa tawwäğä. [jɛʔadːis ʔabɛˈba kɛtɛˈma ʔastɛdaˈdɛr jawɛtʼːaw ʔadːis jɛɡɨˈbɨr ʔaˈwadʒ bɛjɨˈfa tawːɛˈdʒɛ] (yeh-ahd-DEES ah-beh-BAH keh-teh-MAH ahs-teh-dah-DER yah-wut'-t'ah-WOO ahd-DEES yeh-gub-UR ah-WAHJ beh-yuh-FAH taw-WEHJ-jeh)",
          "translation": "The new tax proclamation issued by the Addis Ababa City Administration was officially declared."
        },
        {
          "target": "በሁለቱ ሀገራት መካከል የኢኮኖሚና የንግድ ትብብር ስምምነት ዛሬ ተፈረመ።",
          "reading": "Bähulättu hagärat mäkkakäl yä'ikonomiynna yänəgd təbbəbər səməmmənät zarre täfärrämä. [bɛhulɛtːu haɡɛˈrat mɛkːaˈkɛl jɛʔikonoˈmijnːa jɛnɨɡd tɨbːɨˈbɨr sɨmɨmːɨˈnɛt zaˈre tɛfɛrːɛˈmɛ] (beh-hoo-let-TOO hah-geh-RAHT mek-kah-KEL yeh-ee-koh-noh-MEEN-nah yeh-nug-D tub-buh-BUR suh-mum-muh-NET zah-RAY teh-fer-reh-MEH)",
          "translation": "An economic and trade cooperation agreement between the two countries was signed today."
        }
      ],
      "mnemonics": [
        "News Lexicon: ተካሄደ (Held) + ተፈረመ (Signed) + ታወጀ (Declared) + ተሰጠ (Given)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ቴሌቪዥንና በኢትዮጵያ ዜና አገልግሎት (ENA) የዜና አርዕስተ ዜናዎች አብዛኛውን ጊዜ በተገብሮ ግስ አወቃቀር ይቀርባሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«A peace agreement was signed» የሚለውን በዜና ቋንቋ ተገብሮ መዋቅር በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "የሰላም ስምምነት ተፈረመ። (A peace agreement was signed - Formal journalistic passive)",
            "የሰላም ስምምነት ፈረሙ",
            "ስምምነቱ ጠፋ",
            "ምንም ስምምነት የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ተፈረመ» በዜናና በሰነዶች ውስጥ ጥቅም ላይ የሚውል መደበኛ ተገብሮ ግስ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'A meeting was held' የሚለውን በአማርኛ የዜና ቋንቋ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ስብሰባ ተካሄደ። (A meeting was held - Formal institutional news passive)",
            "ስብሰባ አደረጉ",
            "ስብሰባ ተሰረዘ",
            "ስብሰባ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ስብሰባ ተካሄደ» በመደበኛ የዜና ዘገባዎች ውስጥ እጅግ የተለመደ ተገብሮ መዋቅር ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "በዜና እና ይፋዊ ሰነዶች ውስጥ የሚዘወተሩ ተገብሮ ግሶችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ተካሄደ፣ ተፈረመ፣ ታወጀ፣ ተላለፈ እና ተመረቀ።",
            "በላ፣ ጠጣ፣ ሳቀ እና አለቀሰ።",
            "ጠረጴዛ፣ ደብተር እና እርሳስ።",
            "በዜና ውስጥ ተገብሮ ግስ አይገባም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ በዜናና ይፋዊ ጽሑፎች ውስጥ በስፋት የሚሠራባቸውን ተገብሮ ግሶች ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ተካሄደ / Was held, was conducted' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ተካሄደ"
          ],
          "explanation": "ትክክለኛው ቃል «ተካሄደ» (Täkahedä) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u20-l4": {
    "id": "am-u20-l4",
    "subject": "amharic",
    "unit": 20,
    "lessonNumber": 4,
    "title": "ኢ-ተገብሮ ወደ ተገብሮ የመቀየር ልምምድ (Active-to-Passive Transformations)",
    "level": "B2",
    "objective": "ንቁ (Active) ዓረፍተ ነገሮችን ወደ ተገብሮ (Passive) እና ተገብሮን ወደ ንቁ ዓረፍተ ነገር መቀየር።",
    "presentation": {
      "explanation": "ንቁ (Active) ወደ ተገብሮ (Passive) የመቀየር ሰዋሰዋዊ ደንቦች:\n\n፩. የለውጥ ደረጃዎች:\n- ፩: የንቁ ዓረፍተ ነገሩ ተሳቢ (-ን) ወደ ተገብሮ ዓረፍተ ነገሩ ባለቤትነት ይቀየራል።\n- ፪: የንቁ ዓረፍተ ነገሩ ባለቤት በ«በ... አማካኝነት» / «በ... በኩል» ድርጊት ፈጻሚ ይሆናል።\n- ፫: ግሱ ከንቁ ወደ ተገብሮ («ተ-» ቅድመ-ቅጥያ) ይቀየራል።\n\n፪. ምሳሌያዊ ለውጦች:\n- ንቁ: «መንግሥት አዲሱን መንገድ ገነባ።»\n- ተገብሮ: «አዲሱ መንገድ በመንግሥት ተገነባ።»\n- ንቁ: «ፖሊስ ወንጀለኛውን ያዘ።»\n- ተገብሮ: «ወንጀለኛው በፖሊስ ተያዘ።»",
      "examples": [
        {
          "target": "ንቁ: «መምህሩ ፈተናውን አዘጋጀ።» -> ተገብሮ: «ፈተናው በመምህሩ ተዘጋጀ።»",
          "reading": "Nəqu: «Mämhəru fätänawən azäggağğä.» -> Tägäbro: «Fätänaw bämämhəru täzäggağğä.» [nɨkʼu mɛmhɨˈru fɛtɛnaˈwɨn ʔazɛɡːaˈdʒːɛ tɛɡɛbˈro fɛtɛˈnaw bɛmɛmhɨˈru tɛzɛɡːaˈdʒːɛ] (nuh-K'OO: mem-huh-ROO feh-teh-nah-WUN ah-zeg-GAHJ-jeh -> teh-geb-ROH: feh-teh-NAHW beh-mem-huh-ROO teh-zeg-GAHJ-jeh)",
          "translation": "Active: 'The teacher prepared the exam.' -> Passive: 'The exam was prepared by the teacher.'"
        },
        {
          "target": "ንቁ: «ህዝቡ ዛፎችን ተከለ።» -> ተገብሮ: «ዛፎቹ በህዝቡ ተተከሉ።»",
          "reading": "Nəqu: «Həzbu zafoččən täkkälä.» -> Tägäbro: «Zafočču bähəzbu tättäkkälu.» [nɨkʼu hɨzˈbu zafoˈtʃːɨn tɛkːɛˈlɛ tɛɡɛbˈro zafoˈtʃːu bɛhɨzˈbu tɛtːɛkːɛˈlu] (nuh-K'OO: huz-BOO zah-fohch-CHOON tek-keh-LEH -> teh-geb-ROH: zah-fohch-CHOO beh-huz-BOO tet-tek-keh-LOO)",
          "translation": "Active: 'The people planted trees.' -> Passive: 'The trees were planted by the people.'"
        },
        {
          "target": "ንቁ: «ደራሲው ድንቅ ልብ-ወለድ ጻፈ።» -> ተገብሮ: «ድንቁ ልብ-ወለድ በደራሲው ተጻፈ።»",
          "reading": "Nəqu: «Därasiw dənq ləbb-wäläd t’afä.» -> Tägäbro: «Dənqu ləbb-wäläd bädärasiw tät’afä.» [nɨkʼu dɛraˈsiw dɨnkʼ lɨbːwɛˈlɛd tʼaˈfɛ tɛɡɛbˈro dɨnˈkʼu lɨbːwɛˈlɛd bɛdɛraˈsiw tɛtʼaˈfɛ] (nuh-K'OO: deh-rah-SEEW dunk' lub-weh-LED t'ah-FEH -> teh-geb-ROH: dun-K'OO lub-weh-LED beh-deh-rah-SEEW teh-t'ah-FEH)",
          "translation": "Active: 'The author wrote a wonderful novel.' -> Passive: 'The wonderful novel was written by the author.'"
        }
      ],
      "mnemonics": [
        "Flip & Tag: Subject <-> Object (-ን drops) & Verb gains ተ- (ተዘጋጀ / ተተከለ / ተጻፈ)!"
      ],
      "culturalNotes": [
        "በአማርኛ ስነ-ጽሁፍ ውስጥ የድርጊት አድራጊውን ከመጥቀስ ይልቅ ለድርጊቱ ውጤት ቅድሚያ መስጠት የትህትናና የክብደት መገለጫ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«መሐንዲሱ ድልድዩን ሰራ» የሚለውን ንቁ ዓረፍተ ነገር ወደ ተገብሮ በትክክል የቀየረው የትኛው ነው?",
          "options": [
            "ድልድዩ በመሐንዲሱ ተሰራ። (The bridge was built by the engineer - Correct passive transformation)",
            "መሐንዲሱ ድልድዩን ሰራ",
            "ድልድዩ መሐንዲሱን ሰራ",
            "ምንም ድልድይ አልተሰራም"
          ],
          "answerIndex": 0,
          "explanation": "ተሳቢው 'ድልድዩ' ባለቤት ሆኖ፣ ባለቤቱ 'በመሐንዲሱ' ተብሎ፣ ግሱ 'ተሰራ' ተብሎ ተገብሮ ሆኗል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'ተማሪዎቹ ክፍሉን አጸዱ' የሚለውን ወደ ተገብሮ በትክክል የቀየረው የትኛው ነው?",
          "options": [
            "ክፍሉ በተማሪዎቹ ተጸዳ። (The classroom was cleaned by the students - Accurate passive transformation)",
            "ተማሪዎቹ ክፍሉን አጸዱ",
            "ክፍሉ ተማሪዎቹን አጸዳ",
            "ክፍሉ አልተጸዳም"
          ],
          "answerIndex": 0,
          "explanation": "«ክፍሉ በተማሪዎቹ ተጸዳ» ትክክለኛውን የተገብሮ አወቃቀር ህግ ጠብቋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የንቁ ወደ ተገብሮ ለውጥ መሰረታዊ ህግ ምን ይመስላል?",
          "options": [
            "ተሳቢው ባለቤት ይሆናል፣ ባለቤቱ በመስተዋድድ ይያያዛል፣ ግሱ ደግሞ በ«ተ-» ቅድመ-ቅጥያ ተገብሮ ይሆናል።",
            "ቃላት በሙሉ ወደ ስም ይቀየራሉ።",
            "ምንም ዓይነት ለውጥ አይደረግም።",
            "ተገብሮ ወደ ንቁ አይቀየርም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የተገብሮ ለውጥ ደንቦችን ሙሉ በሙሉ ያብራራል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ለውጥ / Transformation, change' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ለውጥ"
          ],
          "explanation": "ትክክለኛው ቃል «ለውጥ» (Läwt’) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u20-l5": {
    "id": "am-u20-l5",
    "subject": "amharic",
    "unit": 20,
    "lessonNumber": 5,
    "title": "የክፍል 20 አጠቃላይ ማጠቃለያ (Unit 20 Grand Synthesis & Formal Journalistic Passive Discourse)",
    "level": "B2",
    "objective": "የተገብሮ ግስን፣ ድርጊት ፈጻሚ መስተዋድዶችንና የዜና ዘገባዎችን ያቀናጀ የተሟላ ይፋዊ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፳ አጠቃላይ ሰዋሰዋዊ ውህደት እና የተገብሮ ግስ ማጠቃለያ:\n\n፩. የተገብሮ ግስ የጊዜ እርባታዎች:\n- ኃላፊ (ተዘጋጀ)፣ አሁን ቀጣይ (እየተዘጋጀ ነው)፣ ፍጻሜ (ተዘጋጅቷል)፣ ወደፊት (ይዘጋጃል)።\n\n፪. ድርጊት ፈጻሚ መስተዋድዶች:\n- በ... አማካኝነት፣ በ... በኩል፣ በ... እጅ።\n\n፫. ይፋዊ የዜና ቋንቋ:\n- ውይይት ተካሄደ፣ አዋጅ ታወጀ፣ ስምምነት ተፈረመ፣ ሽልማት ተሰጠ።\n\n፬. ንቁ ወደ ተገብሮ ልውውጥ:\n- የተሳቢና የባለቤት ሚና መቀያየር እና የግስ ቅርጽ ለውጥ።",
      "examples": [
        {
          "target": "ታላቁ የህዳሴ ግድብ በኢትዮጵያውያን የተቀናጀ አቅም ተገንብቶ ለምርቃት በቅቷል።",
          "reading": "Talaqu yähəddase gədəb bä'ityop’yawayan yätäqänannağğä aqəm tägänbəto lämərriqat bäqtwal. [taˈlakʼu jɛhɨdːaˈse ɡɨdɨb bɛʔitjopʼjaˈwɨjan jɛtɛkʼɛnanːaˈdʒːɛ ʔaˈkʼɨm tɛɡɛnˈbɨto ləmɨrːiˈkʼat bɛkʼˈtʷal] (tah-LAH-k'oo yeh-hud-dah-SAY guh-DUB beh-eet-yoh-p'yah-WUH-yahn yeh-teh-k'en-nahn-NAHJ-jeh ah-K'UM teh-gen-BUH-toh luh-mur-ree-K'AHT bek'-TWAHL)",
          "translation": "The Grand Renaissance Dam was constructed by Ethiopians' coordinated capacity and became ready for inauguration."
        },
        {
          "target": "በሚኒስቴሩ በኩል የቀረበው የልማት ፖሊሲ በፓርላማው አባላት ሙሉ ድምፅ ጸደቀ።",
          "reading": "Bäministew bäkkul yäqärräbäw yäləmat polisi bäparlamaw abalat mulu dəmts’ ts’äddäqä. [bɛminisˈtew bɛkːul jɛkʼɛrːɛˈbɛw jɛlɨˈmat poliˈsi bɛparlaˈmaw ʔabaˈlat muˈlu dɨmtsʼ tsʼɛdːɛˈkʼɛ] (beh-mee-nees-TAY-woo bek-KOOL yeh-k'er-reh-BEH-wun yeh-luh-MAHT poh-lee-SEE beh-pahr-lah-MAHW ah-bah-LAHT moo-LOO dum-TS' ts'ed-deh-K'EH)",
          "translation": "The development policy presented on the part of the ministry was approved with full votes by parliament members."
        },
        {
          "target": "ዓለም አቀፍ የኪነ-ጥበብ ፌስቲቫል በባህልና ቱሪዝም ሚኒስቴር አማካኝነት በድምቀት ተከበረ።",
          "reading": "Aläm aqäf yäkinä-t’əbäb festival bäbahlənna turizm minister amakanyənät bädəmqät täkäbbärä. [ʔaˈlɛm ʔaˈkʼɛf jɛkinɛtʼɨˈbɛb fesˈtival bɛbahlɨnːa tuˈrizm minisˈter ʔamakaɲɨˈnɛt bɛdɨmˈkʼɛt tɛkɛbːɛˈrɛ] (ah-LEM ah-K'EF yeh-kee-neh-t'uh-BEB fes-tee-VAHL beh-bah-hlun-NAH too-REEZ-um mee-nees-TER ah-mah-kahn-yuh-NET beh-dum-K'ET teh-keb-beh-REH)",
          "translation": "An international arts festival was colorfully celebrated through the Ministry of Culture and Tourism."
        }
      ],
      "mnemonics": [
        "Grand Synthesis 20: Passive Flow (ተገነባ / ጸደቀ / ተከበረ) + Agents (በ... አማካኝነት / በ... በኩል)!"
      ],
      "culturalNotes": [
        "የአማርኛ ይፋዊ የመንግሥትና የዲፕሎማሲ ንግግሮች የተገብሮ ግስን ውበት በመጠቀም የጋራ ስኬቶችንና ሀገራዊ ራዕዮችን በከፍተኛ ክብር ያስተላልፋሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ ይፋዊ የተገብሮ ዜና ዘገባ መዋቅር የያዘው የትኛው ነው?",
          "options": [
            "ስምምነቱ በሁለቱ ሀገራት መሪዎች አማካኝነት በይፋ ተፈረመ። (Complete official passive news sentence with agentive preposition)",
            "ምንም ስምምነት የለም",
            "ሁሉም ቃላት ተራ ናቸው",
            "ዜና የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የተገብሮ ግስን (ተፈረመ) እና ድርጊት ፈጻሚውን (በ... አማካኝነት) በትክክል ያዛምዳል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "የተገብሮ ግስንና ድርጊት ፈጻሚን ያጣመረ ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "አዲሱ ሆስፒታል በጤና ጥበቃ ሚኒስቴር አማካኝነት ተገንብቶ ተመረቀ። (The new hospital was built and inaugurated through the Ministry of Health - Accurate integrated passive sentence)",
            "ምንም ሆስፒታል አልተሰራም",
            "ሚኒስቴሩ ጠፋ",
            "ሆስፒታል የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ የተገብሮ ግሶችንና ድርጊት ፈጻሚውን በመስተዋድድ በትክክል ያቀናጃል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 20 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የተገብሮ ግስ የጊዜ እርባታዎች፣ ድርጊት ፈጻሚ መስተዋድዶች (በ... አማካኝነት/በኩል)፣ የዜና ተገብሮ ቃላት እና ንቁ ወደ ተገብሮ ልውውጥ ተካተዋል።",
            "ይህ ክፍል ስለ እንስሳት ብቻ ነው።",
            "በአማርኛ ተገብሮ ግስ አይጠቀምም።",
            "ሁሉም ዜናዎች በንቁ ግስ ብቻ ይጻፋሉ።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 20ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ተገብሮ / Passive' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ተገብሮ"
          ],
          "explanation": "ትክክለኛው ቃል «ተገብሮ» (Tägäbro) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u21-l1": {
    "id": "am-u21-l1",
    "subject": "amharic",
    "unit": 21,
    "lessonNumber": 1,
    "title": "የጊዜ ተውሳከ ግሶች (Adverbs of Time)",
    "level": "B2",
    "objective": "የጊዜ ተውሳከ ግሶችን (ዛሬ፣ ትናንት፣ ነገ፣ አሁን፣ ወዲያውኑ፣ ሁልጊዜ፣ አልፎ አልፎ፣ አስቀድሞ) መጠቀም።",
    "presentation": {
      "explanation": "የጊዜ ተውሳከ ግሶች ሰዋሰዋዊ ህግና አጠቃቀም (Adverbs of Time):\n\n፩. ዋና ዋና የጊዜ ተውሳከ ግሶች:\n- አሁን (Now) / ወዲያውኑ (Immediately / right away)\n- ዛሬ (Today) / ትናንት (Yesterday) / ነገ (Tomorrow)\n- ሁልጊዜ (Always) / አዘውትሮ (Frequently / regularly)\n- አልፎ አልፎ (Sometimes / occasionally) / እምብዛም (Rarely / seldom)\n- አስቀድሞ (Beforehand) / ቀደም ሲል (Previously) / ወደፊት (In the future)።\n\n፪. ሰዋሰዋዊ ተግባር:\n- ድርጊቱ የተፈጸመበትን፣ የሚፈጸምበትን ወይም የሚከናወንበትን ጊዜ ለመግለጽ ከግሱ በፊት ወይም በዓረፍተ ነገሩ መጀመሪያ ይቀመጣሉ።",
      "examples": [
        {
          "target": "ተማሪዎቹ አሁን በክፍል ውስጥ እየተማሩ ሲሆን ወዲያውኑ ወደ ቤተ-መጽሐፍት ያመራሉ (21.1.1)።",
          "reading": "Tämariwočču ahun bäkəfəl wəst’ əyyätämaru sihon wädiyawənu wädä betä-mäts’haft yamärralu. [tɛmariwoˈtʃːu ʔaˈhun bɛkɨfl wɨstʼ ʔɨjːɛtɛmaˈru siˈhon wɛdijaˈwɨnu wɛˈdɛ betɛmɛtsʼˈhaft jamɛrːaˈlu] (teh-mah-ree-wohch-CHOO ah-HOON beh-kuf-L woos-T' uy-yeh-teh-mah-ROO see-HOHN weh-dee-yah-wuh-NOO weh-DEH bay-teh-mets'-HAHFT yah-mer-rah-LOO)",
          "translation": "The students are learning in class now and will immediately head to the library."
        },
        {
          "target": "እሱ ሁልጊዜ ጠዋት የአካል ብቃት እንቅስቃሴ ያደርጋል፤ አልፎ አልፎም መጽሐፍ ያነባል።",
          "reading": "Əssu hulgize t’äwat yä'akal bəqat ənqəsəqqase yadärgal; alfo alfom mäts’haf yanäbbal. [ʔɨsːu hulɡiˈze tʼɛˈwat jɛʔaˈkal bɨˈkʼat ʔɨnkʼɨsɨkʼːaˈse jadɛrˈɡal ʔalˈfo ʔalˈfom mɛtsʼˈhaf janɛbːaˈl] (us-SOO hool-GEE-zay t'eh-WAHT yeh-ah-KAHL buh-K'AHT un-k'uh-suk'-K'AH-say yah-der-GAHL; ahl-FOH ahl-FOHM mets'-HAHF yah-neb-BAHL)",
          "translation": "He always does physical fitness exercises in the morning, and occasionally reads a book."
        },
        {
          "target": "ጉዳዩን አስቀድመን መርምረን ስለነበር ወደፊት ምንም ዓይነት አላስፈላጊ መዘግየት አይኖርም።",
          "reading": "Guddayun asqäddəmän märəmərän səllänäbbär wädäfit mənəm aynät alasfällagi mäzägyät aynorəm. [ɡuddaˈjun ʔaskʼɛdːɨˈmɛn mɛrɨmɨˈrɛn sɨlːɛnɛbːɛr wɛdɛˈfit mɨˈnɨm ʔajˈnɛt ʔalasfɛlːaˈɡi mɛzɛɡˈjɛt ʔajnoˈrɨm] (good-dah-YOON ahs-k'ed-duh-MEN meh-ruh-muh-REN sul-leh-neb-BER weh-deh-FEET muh-NUM eye-NET ah-lahs-fel-lah-GEE meh-zeg-YET eye-noh-RUM)",
          "translation": "Because we investigated the matter beforehand, there will be no unnecessary delay in the future."
        }
      ],
      "mnemonics": [
        "Time Spectrum: አሁን (Now) + ወዲያውኑ (Immediately) + ሁልጊዜ (Always) + አስቀድሞ (Beforehand)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ማህበራዊ ህይወት 'ቀጠሮ በሰዓቱ ማክበር' ትልቅ ክብር ያለው ሲሆን፣ 'አስቀድሞ መገኘት' ታማኝነትን ያሳያል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«He always wakes up early» የሚለውን በአማርኛ የጊዜ ተውሳከ ግስ በትክክል የተጠቀመው የትኛው ነው?",
          "options": [
            "እሱ ሁልጊዜ ማለዳ ይነሳል። (He always wakes up early - Adverb of time ሁልጊዜ)",
            "እሱ ትናንት ተነሳ",
            "እሱ ነገ ይነሳል",
            "ምንም ጊዜ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ሁልጊዜ» የድርጊቱን ቋሚነትና ተደጋጋሚነት የሚያሳይ የጊዜ ተውሳከ ግስ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'I will call you immediately' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ወዲያውኑ እደውልልሃለሁ። (I will call you immediately - Precise adverb of time ወዲያውኑ)",
            "ትናንት ደወልኩልህ",
            "በኋላ አልደውልም",
            "ስልክ የለኝም"
          ],
          "answerIndex": 0,
          "explanation": "«ወዲያውኑ» ፈጣንና ቅጽበታዊ የጊዜ አፈጻጸምን ያመለክታል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የጊዜ ተውሳከ ግሶችን (Adverbs of time) በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "አሁን፣ ወዲያውኑ፣ ሁልጊዜ፣ አልፎ አልፎ እና አስቀድሞ።",
            "ትልቅ፣ ትንሽ እና መካከለኛ።",
            "ወንበር፣ ጠረጴዛ እና አልጋ።",
            "በአማርኛ የጊዜ ተውሳከ ግስ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የጊዜ ተውሳከ ግሶችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ወዲያውኑ / Immediately' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ወዲያውኑ"
          ],
          "explanation": "ትክክለኛው ቃል «ወዲያውኑ» (Wädiyawənu) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u21-l2": {
    "id": "am-u21-l2",
    "subject": "amharic",
    "unit": 21,
    "lessonNumber": 2,
    "title": "የቦታ እና የሁኔታ ተውሳከ ግሶች (Adverbs of Place & Manner)",
    "level": "B2",
    "objective": "የቦታ (እዚህ፣ እዚያ፣ ቅርብ፣ ሩቅ) እና የሁኔታ (በፍጥነት፣ በዝግታ፣ በጥንቃቄ፣ በድፍረት) ተውሳከ ግሶችን መጠቀም።",
    "presentation": {
      "explanation": "የቦታ እና የሁኔታ ተውሳከ ግሶች ሰዋሰዋዊ ደንብ (Adverbs of Place & Manner):\n\n፩. የቦታ ተውሳከ ግሶች (Adverbs of Place):\n- እዚህ (Here) / እዚያ (There)\n- ቅርብ (Near / close) / ሩቅ (Far)\n- ውስጥ (Inside) / ውጭ (Outside) / ዙሪያ (Around)።\n\n፪. የሁኔታ ተውሳከ ግሶች (Adverbs of Manner):\n- በ«በ-» ቅድመ-ቅጥያ ከስሞች ጋር በመጣመር ይመሰረታሉ:\n- በፍጥነት (Quickly / fast) / በዝግታ / በቀስታ (Slowly)\n- በጥንቃቄ (Carefully) / በድፍረት (Boldly / courageously)\n- በደስታ (Happily / joyfully) / በደንብ (Properly / thoroughly)።",
      "examples": [
        {
          "target": "አሽከርካሪው መኪናውን በተጨናነቀው መንገድ ላይ በጥንቃቄና በዝግታ አሽከረከረ።",
          "reading": "Aškärkariw mäkinawən bätäč’änannäqäw mängäd lay bät’ənqaqqenna bäzəggəta aškäräkkärä. [ʔaʃkɛrkaˈriw mɛkiˈnawɨn bɛtɛtʃʼɛnanːɛˈkʼɛw mɛnˈɡɛd laj bɛtʼɨnkʼakʼːeˈnːa bɛzɨɡːɨˈta ʔaʃkɛrɛkːɛˈrɛ] (ahsh-ker-kah-REEW meh-kee-nah-WUN beh-teh-ch'en-nahn-neh-K'EW men-GED lye beh-t'un-k'ahk'-K'AYN-nah beh-zug-guh-TAH ahsh-keh-rek-keh-REH)",
          "translation": "The driver drove the car carefully and slowly on the congested road."
        },
        {
          "target": "ወጣቱ መሪ ህዝቡን በድፍረት አስተባብሮ እዚያ ለሚገኘው ታላቅ አዳራሽ አደረሰ።",
          "reading": "Wät’t’atu märi həzbun bädəfrät astäbabbəro əzziya lämmigänyäw talaq adaraš adärräsä. [wɛtʼːaˈtu mɛˈri hɨzˈbun bɛdɨfˈrɛt ʔastɛbabːɨˈro ʔɨzːiˈja ləmːiɡɛˈɲɛw taˈlakʼ ʔadaˈraʃ ʔadɛrːɛˈsɛ] (wut'-t'ah-TOO meh-REE huz-BOON beh-duf-RET ahs-teh-bahb-buh-ROH uz-zee-YAH lem-mee-gen-YEW tah-LAHK' ah-dah-RAHSH ah-der-reh-SEH)",
          "translation": "The young leader organized the people courageously and led them to the grand hall located there."
        },
        {
          "target": "ልጆቹ በጓሮው ውስጥ በደስታ እየሮጡና በፍጥነት እየተጫወቱ ያመሻሉ።",
          "reading": "Ləğočču bägwarow wəst’ bädästa əyyärot’unna bäfət’nät əyyätäč’awwät’u yamäšallu. [lɨdʒoˈtʃːu bɛɡʷaˈrow wɨstʼ bɛdɛsˈta ʔɨjːɛroˈtʼunːa bɛfɨtʼˈnɛt ʔɨjːɛtɛtʃʼawːɛˈtʼu jamɛʃaˈlːu] (luh-johch-CHOO beh-gwah-ROH-woo woos-T' beh-des-TAH uy-yeh-roh-T'OON-nah beh-fut'-NET uy-yeh-teh-ch'ahw-weh-T'OO yah-meh-shahl-LOO)",
          "translation": "The children spend the evening running joyfully and playing quickly in the backyard."
        }
      ],
      "mnemonics": [
        "Manner Rule: በ- + Quality = Adverb (በጥንቃቄ = carefully / በፍጥነት = fast / በደስታ = happily)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ባህል 'በጥንቃቄ መስራት' እና 'በአክብሮት መነጋገር' የጨዋነትና የብልህነት ከፍተኛ መለኪያ ተደርገው ይወሰዳሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Drive carefully» የሚለውን በአማርኛ ትክክለኛ የሁኔታ ተውሳከ ግስ የያዘው የትኛው ነው?",
          "options": [
            "በጥንቃቄ አሽከርክር። (Drive carefully - Adverb of manner በጥንቃቄ)",
            "በፍጥነት ሩጥ",
            "አታሽከርክር",
            "መኪና የለም"
          ],
          "answerIndex": 0,
          "explanation": "«በጥንቃቄ» የድርጊቱን አፈጻጸም ጥራትና ሁኔታ የሚያሳይ ተውሳከ ግስ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'He spoke courageously' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "በድፍረት ተናገረ። (He spoke courageously - Accurate adverb of manner)",
            "በፍርሀት ዝም አለ",
            "አልተናገረም",
            "ድምጽ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«በድፍረት» ድፍረትንና ቁርጠኝነትን የሚያሳይ የሁኔታ ተውሳከ ግስ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የቦታ እና የሁኔታ ተውሳከ ግሶችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "እዚህ፣ እዚያ፣ በጥንቃቄ፣ በፍጥነት፣ በዝግታ እና በድፍረት።",
            "ውሃ፣ ጭማቂ፣ ወተት እና ሻይ።",
            "ሰማይ፣ ምድር፣ ፀሐይ እና ጨረቃ።",
            "በአማርኛ የሁኔታ ተውሳከ ግስ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የቦታና የሁኔታ ተውሳከ ግሶችን በአግባቡ ያጠቃልላል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'በጥንቃቄ / Carefully' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "በጥንቃቄ"
          ],
          "explanation": "ትክክለኛው ቃል «በጥንቃቄ» (Bät’ənqaqqe) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u21-l3": {
    "id": "am-u21-l3",
    "subject": "amharic",
    "unit": 21,
    "lessonNumber": 3,
    "title": "የመንስኤ እና የውጤት አያያዥ ቃላት (Causal & Consecutive Conjunctions)",
    "level": "B2",
    "objective": "የምክንያትና ውጤት አያያዦችን (ስለሆነም፣ ስለዚህ፣ በመሆኑም፣ በዚህ ምክንያት፣ ሳቢያ) መጠቀም።",
    "presentation": {
      "explanation": "የመንስኤ እና የውጤት አያያዥ ቃላት ሰዋሰዋዊ ህግ (Causal & Consecutive Conjunctions):\n\n፩. የመንስኤ አያያዦች (Causal Connectors):\n- ስለ... (Because / since): «ስለደከመኝ ተኛሁ» (Because I was tired, I slept)።\n- በ... ሳቢያ / ምክንያት (Due to / owing to): «በዝናቡ ሳቢያ መንገዱ ተዘጋ» (Due to the rain the road closed)።\n\n፪. የውጤት አያያዦች (Consecutive / Resultative Connectors):\n- ስለዚህ / ስለሆነም (Therefore / so / thus)\n- በመሆኑም (Consequently / as a result)\n- በዚህም ምክንያት (For this reason / consequently)።",
      "examples": [
        {
          "target": "ተማሪው በትጋት አጠና፤ ስለዚህ በፈተናው ከፍተኛ ውጤት በማስመዝገብ አንደኛ ወጣ።",
          "reading": "Tämariw bətəgat at’änna; səläzzih bäfätänaw käftänya wət’et bamasmäzgäb andänya wät’t’a. [tɛmaˈriw bɛtɨˈɡat ʔatʼɛnːa sɨlɛzːih bɛfɛtɛˈnaw kɛfˈtɛɲa wɨtʼet bamasmɛzˈɡɛb ʔandɛɲa wɛtʼːa] (teh-mah-REEW beh-tuh-GAHT ah-t'en-NAH; suh-lez-ZEEH beh-feh-teh-NAHW kef-TEN-yah wut'-AYT bahs-mez-GEB ahn-DEN-yah wut'-T'AH)",
          "translation": "The student studied with diligence; therefore, he registered high marks in the exam and came first."
        },
        {
          "target": "የአየር ንብረቱ እጅግ ተስማሚ ነበር፤ በመሆኑም የዘንድሮው የሰብል ምርት በእጥፍ ጨመረ።",
          "reading": "Yä'ayär nəbrätu əğğəg täsmami näbbär; bämähonum yäzändərow yäsäbəl mərt’ bä'ət’f t’ämmärä. [jɛʔaˈjɛr nɨbˈrɛtu ʔɨdʒːɨɡ tɛsmaˈmi nɛbːɛr bɛmɛhoˈnum jɛzɛndɨˈrow jɛsɛbəl mɨrtʼ bɛʔɨtʼf tʃʼɛmːɛˈrɛ] (yeh-ah-YER nub-REH-too uhj-JUG tes-mah-MEE neb-BER; beh-meh-HOH-noom yeh-zen-duh-ROH-woo yeh-seh-BUL mur-T' beh-ut'-F ch'em-meh-REH)",
          "translation": "The climate was extremely favorable; consequently, this year's crop yield doubled."
        },
        {
          "target": "በከባድ ዝናብ ሳቢያ የከተማው ትራንስፖርት ተስተጓጎለ፤ በዚህ ምክንያት ስብሰባው ተራዘመ።",
          "reading": "Bäkäbbad zənab sabiya yäkätämaw təransəport tästägwaggolä; bäzzih məkənyat səbsäbaw tärazzämä. [bɛkɛbːad zɨˈnab saˈbija jɛkɛtɛˈmaw tɨransɨˈport tɛstɛɡʷaɡːoˈlɛ bɛzːih mɨkɨnˈjat sɨbsɛˈbaw tɛrazːɛˈmɛ] (beh-keb-BAHD zuh-NAHB sah-bee-YAH yeh-keh-teh-MAHW tur-ahn-spohrt tes-teg-wahg-GOH-leh; bez-ZEEH muh-kun-YAHT sub-seh-BAHW teh-rahz-zeh-MEH)",
          "translation": "Due to heavy rain, city transport was disrupted; as a result of this, the meeting was postponed."
        }
      ],
      "mnemonics": [
        "Cause & Effect: ስለ... / በ... ሳቢያ (Cause) -> ስለዚህ / በመሆኑም (Effect)!"
      ],
      "culturalNotes": [
        "በአማርኛ ስነ-አመክንዮ 'ምክንያትና ውጤትን' በግልጽ አያይዞ ማቅረብ በክርክርና በስብሰባ ውይይቶች ዘንድ ትልቅ አሳማኝነትን ይፈጥራል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«He worked hard; therefore he succeeded» የሚለውን በአማርኛ ትክክለኛ የውጤት አያያዥ የተጠቀመው የትኛው ነው?",
          "options": [
            "በትጋት ሰራ፤ ስለዚህ ተሳካለት። (He worked diligently; therefore he succeeded - Resultative connector ስለዚህ)",
            "በትጋት ሰራ ግን አልተሳካለትም",
            "አልሰራም",
            "ምንም ስራ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ስለዚህ» መንስኤውንና ውጤቱን የሚያገናኝ ትክክለኛ አያያዥ ቃል ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Due to the rain, the event was postponed' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "በዝናቡ ሳቢያ ዝግጅቱ ተራዘመ። (Due to the rain, the event was postponed - Accurate causal preposition ሳቢያ)",
            "ዝናብ የለም",
            "ዝግጅቱ ተካሄደ",
            "ምንም ዝግጅት የለም"
          ],
          "answerIndex": 0,
          "explanation": "«በ... ሳቢያ» መንስኤን የሚያመለክት ትክክለኛ ሰዋሰዋዊ አያያዥ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የመንስኤ እና የውጤት አያያዥ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ስለዚህ፣ ስለሆነም፣ በመሆኑም፣ በዚህ ምክንያት እና በ... ሳቢያ።",
            "አረንጓዴ፣ ቢጫ እና ቀይ።",
            "ጠዋት፣ ከሰዓት እና ማታ።",
            "በአማርኛ የምክንያት አያያዥ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የመንስኤና የውጤት አያያዦችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ስለዚህ / Therefore, so' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ስለዚህ"
          ],
          "explanation": "ትክክለኛው ቃል «ስለዚህ» (Səläzzih) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u21-l4": {
    "id": "am-u21-l4",
    "subject": "amharic",
    "unit": 21,
    "lessonNumber": 4,
    "title": "የተቃርኖ እና የአማራጭ አያያዦች (Adversative & Alternative Conjunctions)",
    "level": "B2",
    "objective": "የተቃርኖ (ነገር ግን፣ ሆኖም ግን፣ ይሁን እንጂ፣ ይልቁንም) እና የአማራጭ (ወይም፣ አልያም) አያያዦችን መጠቀም።",
    "presentation": {
      "explanation": "የተቃርኖ እና የአማራጭ አያያዥ ቃላት (Adversative & Alternative Connectors):\n\n፩. የተቃርኖ አያያዦች (Adversative Conjunctions):\n- ነገር ግን / ሆኖም ግን (However / but / yet)\n- ይሁን እንጂ / ይሁንና (Nevertheless / nonetheless)\n- ይልቁንም (Rather / instead / even more so)።\n\n፪. የአማራጭ አያያዦች (Alternative Conjunctions):\n- ወይም (Or)\n- አልያም / ካልሆነ (Alternatively / otherwise / or else)።",
      "examples": [
        {
          "target": "መንገዱ እጅግ አድካሚ ነበር፤ ሆኖም ግን ተጓዦቹ ሳይሰለቹ ጉዟቸውን በደስታ አጠናቀቁ።",
          "reading": "Mängädu əğğəg adkami näbbär; honom gən tägwažočču saysäläču guzwaččäwən bädästa at’ännaqäqu. [mɛnˈɡɛdu ʔɨdʒːɨɡ ʔadˈkami nɛbːɛr hoˈnom ɡɨn tɛɡʷaˈʒotʃːu sajˈsɛlɛtʃu ɡuzwaˈtʃːɛwɨn bɛdɛsˈta ʔatʼɛnːaˈkʼɛkʼu] (men-GEH-doo uhj-JUG ahd-KAH-mee neb-BER; hoh-NOHM gun teh-gwah-ZHOHCH-choo sigh-seh-LEH-choo gooz-wahch-CHEW-un beh-des-TAH ah-t'en-nah-k'eh-K'OO)",
          "translation": "The journey was very exhausting; however, the travelers completed their journey happily without getting bored."
        },
        {
          "target": "በስብሰባው ላይ በግልጽ እንወያይ፤ ወይም ደግሞ ሀሳባችንን በጽሑፍ አጠቃለን እናቅርብ።",
          "reading": "Bäsəbsäbaw lay bäğəlts’ ənnəwäyay; wäyəm dägmo hassabaččənən bäts’əhuf at’äqqalän ənnanqərb. [bɛsɨbsɛˈbaw laj bɛɡɨltsʼ ʔɨnːɨwɛˈjaj wɛˈjɨm dɛɡˈmo hasːabaˈtʃːɨnɨn bɛtsʼɨˈhuf ʔatʼɛkʼːaˈlɛn ʔɨnːanˈkʼɨrb] (beh-sub-seh-BAHW lye beh-gults' un-nuh-weh-YEYE; weh-YUM deg-MOH hahs-sah-bahch-CHUN-un beh-ts'uh-HOOF ah-t'ek'-kah-LEN un-nahn-K'URB)",
          "translation": "Let us discuss openly in the meeting, or let us summarize and present our thoughts in writing."
        },
        {
          "target": "ተስፋ መቁረጥ አያስፈልግም፤ ይልቁንም ጠንክረን በመስራት ድልን መቀዳጀት አለብን።",
          "reading": "Täsfa mäqrät ayasfälləgəm; yəlqunəm t’änkərän bämäsrat dəllən mäqqädağät alläbbən. [tɛsˈfa mɛkʼˈrɛt ʔajasfɛlːɨˈɡɨm jɨlˈkʼunɨm tʼɛnkɨˈrɛn bɛmɛsˈrat dɨlːɨn mɛkʼːɛdaˈdʒɛt ʔalːɛbːɨn] (tes-FAH mek'-RET ah-yahs-fel-luh-GUM; yul-K'OO-num t'en-kuh-REN beh-mes-RAHT dul-LUN mek'-k'eh-dah-JET ahl-leb-BUN)",
          "translation": "Giving up hope is not necessary; rather, we must achieve victory by working hard."
        }
      ],
      "mnemonics": [
        "Contrast vs. Choice: ሆኖም ግን (However) / ይልቁንም (Rather) vs. ወይም / አልያም (Or / otherwise)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ስነ-ጽሑፍ 'ይሁን እንጂ' እና 'ይልቁንም' የክርክር ሀሳቦችን በጥበብ ለማሳረግና አዳዲስ መፍትሔዎችን ለማመላከት ይሠራባቸዋል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«It was hard, however we persevered» የሚለውን በአማርኛ ትክክለኛ የተቃርኖ አያያዥ የያዘው የትኛው ነው?",
          "options": [
            "ከባድ ነበር፤ ሆኖም ግን ጸናን። (It was hard; however we persevered - Adversative connector ሆኖም ግን)",
            "ከባድ ነበር ስለዚህ ተውነው",
            "ቀላል ነበር",
            "ምንም አልነበረም"
          ],
          "answerIndex": 0,
          "explanation": "«ሆኖም ግን» የተቃርኖ ሀሳቦችን የሚያገናኝ ትክክለኛ አያያዥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Tea or coffee' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ሻይ ወይም ቡና (Tea or coffee - Standard alternative connector ወይም)",
            "ሻይ እና ቡና",
            "ሻይ ግን ቡና",
            "ሻይ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ወይም» ሁለት አማራጮችን የሚያገናኝ የአማራጭ አያያዥ ቃል ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የተቃርኖ እና የአማራጭ አያያዦችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ነገር ግን፣ ሆኖም ግን፣ ይሁን እንጂ፣ ይልቁንም፣ ወይም እና አልያም ።",
            "ትልቅ፣ ትንሽ እና ረጅም ።",
            "ቀይ፣ አረንጓዴ እና ቢጫ።",
            "በአማርኛ የተቃርኖ አያያዥ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የተቃርኖና የአማራጭ አያያዦችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ወይም / Or' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ወይም"
          ],
          "explanation": "ትክክለኛው ቃል «ወይም» (Wäyəm) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u21-l5": {
    "id": "am-u21-l5",
    "subject": "amharic",
    "unit": 21,
    "lessonNumber": 5,
    "title": "የክፍል 21 አጠቃላይ ማጠቃለያ (Unit 21 Grand Synthesis & Complex Cohesive Discourse)",
    "level": "B2",
    "objective": "የጊዜ፣ የቦታ፣ የሁኔታ ተውሳከ ግሶችን፣ የመንስኤ-ውጤትና የተቃርኖ አያያዦችን ያቀናጀ የተሟላ የንግግር ውይይት ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፳፩ አጠቃላይ ሰዋሰዋዊ ውህደት እና የተውሳከ ግሶችና አያያዦች ማጠቃለያ:\n\n፩. የጊዜ ተውሳከ ግሶች:\n- አሁን፣ ወዲያውኑ፣ ሁልጊዜ፣ አልፎ አልፎ፣ አስቀድሞ፣ ወደፊት።\n\n፪. የቦታና የሁኔታ ተውሳከ ግሶች:\n- እዚህ፣ እዚያ፣ ቅርብ፣ ሩቅ፣ በጥንቃቄ፣ በፍጥነት፣ በዝግታ፣ በድፍረት።\n\n፫. የመንስኤና የውጤት አያያዦች:\n- ስለዚህ፣ ስለሆነም፣ በመሆኑም፣ በዚህ ምክንያት፣ በ... ሳቢያ።\n\n፬. የተቃርኖና የአማራጭ አያያዦች:\n- ነገር ግን፣ ሆኖም ግን፣ ይሁን እንጂ፣ ይልቁንም፣ ወይም፣ አልያም ።",
      "examples": [
        {
          "target": "ተግዳሮቶች ቢበዙም እንኳ አሁን በድፍረት ወደፊት መራመድ አለብን፤ ስለዚህ ድል የእኛ ይሆናል።",
          "reading": "Tägdaročč bibäzum ənkwa ahun bädəfrät wädäfit märamäd alläbbən; səläzzih dəll yä'ənya yəhonal. [tɛɡdaˈrotʃː biˈbɛzum ʔɨnˈkʷa ʔaˈhun bɛdɨfˈrɛt wɛdɛˈfit mɛraˈmɛd ʔalːɛbːɨn sɨlɛzːih dɨlː jɛʔɨˈɲa jɨhoˈnal] (teg-dah-ROHCH bee-beh-ZOOM un-KWAH ah-HOON beh-duf-RET weh-deh-FEET meh-rah-MED ahl-leb-BUN; suh-lez-ZEEH dul-L yeh-un-YAH yuh-hoh-NAHL)",
          "translation": "Even if challenges multiply, we must boldly march forward now; therefore, victory will be ours."
        },
        {
          "target": "ጉዳዩን በጥንቃቄ መርምረናል፤ ይሁን እንጂ ተጨማሪ መረጃዎችን ማሰባሰብ ወይም ማረጋገጥ ያስፈልጋል።",
          "reading": "Guddayun bät’ənqaqqe märəməränall; yəhun ənği t’ämmari märäğawoččən masäbabsäb wäyəm maräggagät’ yasfälləgal. [ɡuddaˈjun bɛtʼɨnkʼakʼːe mɛrɨmɨrɛˈnal jɨˈhun ʔɨnˈdʒi tʼɛmːaˈri mɛrɛdʒawoˈtʃːɨn masɛbabˈsɛb wɛˈjɨm marɛɡːaˈɡɛtʼ ʔajasfɛlːɨˈɡal] (good-dah-YOON beh-t'un-k'ahk'-K'AY meh-ruh-muh-reh-NAHL; yuh-HOON un-JEE t'em-mah-REE meh-reh-jah-wohch-CHOON mah-seh-bahb-SEB weh-YUM mah-reg-gah-GET' yahs-fel-luh-GAHL)",
          "translation": "We have investigated the matter carefully; nevertheless, collecting additional information or verifying is necessary."
        },
        {
          "target": "በዝናቡ ሳቢያ መንገዱ ተዘግቷል፤ በመሆኑም እዚህ ማረፍ ወይም በሌላ አማራጭ መጓዝ ይሻላል።",
          "reading": "Bäzənabu sabiya mängädu täzägtwal; bämähonum əzzih maräf wäyəm bälella amarats’ mägwaz yəššalal. [bɛzɨnaˈbu saˈbija mɛnˈɡɛdu tɛzɛɡˈtʷal bɛmɛhoˈnum ʔɨzːih maˈrɛf wɛˈjɨm bɛleˈla ʔamaˈratsʼ mɛˈɡʷaz jɨʃːaˈlal] (beh-zuh-NAH-boo sah-bee-YAH men-GEH-doo teh-zeg-TWAHL; beh-meh-HOH-noom uz-ZEEH mah-REF weh-YUM beh-lay-LAH ah-mah-RAHTS' meh-GWAHZ yuhsh-shah-LAHL)",
          "translation": "Due to the rain the road is closed; consequently, resting here or traveling by another alternative is preferable."
        }
      ],
      "mnemonics": [
        "Full Discourse Fabric: Time + Manner + Cause-Effect + Adversative-Alternative = Cohesive Amharic!"
      ],
      "culturalNotes": [
        "የአማርኛ ስነ-ቃልና ስነ-ጽሁፍ የሀሳብ ፍሰትን በተውሳከ ግሶችና አያያዦች በማስተሳሰር የአንባቢን ቀልብ የመሳብ ልዩ የውበት ጥበብ አለው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተለያዩ ተውሳከ ግሶችንና አያያዦችን ያጣመረው የትኛው ነው?",
          "options": [
            "አሁን በጥንቃቄ እንስራ፤ ስለዚህ በስኬት እንጠናቀቃለን ወይም እናርፋለን። (Complete discourse synthesis: time, manner, resultative, alternative)",
            "ምንም ቃል የለም",
            "ሁሉም ስሞች ናቸው",
            "አያያዥ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የጊዜ (አሁን)፣ የሁኔታ (በጥንቃቄ)፣ የውጤት (ስለዚህ) እና የአማራጭ (ወይም) አያያዦችን በአንድነት ያጣመረ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "የመንስኤ-ውጤት እና የተቃርኖ አያያዦችን ያጣመረ ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "መንገዱ ከባድ ነበር፤ ሆኖም ግን በድፍረት ተጓዝን፤ ስለዚህ በሰላም ደረስን። (The road was hard; however we traveled courageously; therefore we arrived safely - Balanced multi-connector sentence)",
            "ምንም መንገድ የለም",
            "አልደረስንም",
            "ተጓዥ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የተቃርኖውን 'ሆኖም ግን'፣ የሁኔታውን 'በድፍረት' እና የውጤቱን 'ስለዚህ' በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 21 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የጊዜ ተውሳከ ግሶች፣ የቦታና የሁኔታ ተውሳከ ግሶች፣ የመንስኤና የውጤት አያያዦች (ስለዚህ/በመሆኑም)፣ እንዲሁም የተቃርኖና አማራጭ አያያዦች ተካተዋል።",
            "ይህ ክፍል ስለ ንግድ ብቻ ነው።",
            "በአማርኛ ተውሳከ ግስ የለም።",
            "ሁሉም አያያዦች አንድ ዓይነት ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 21ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አያያዥ / Conjunction, connector' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አያያዥ"
          ],
          "explanation": "ትክክለኛው ቃል «አያያዥ» (Ayayaž) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u22-l1": {
    "id": "am-u22-l1",
    "subject": "amharic",
    "unit": 22,
    "lessonNumber": 1,
    "title": "የተለያዩ የጊዜ አሉታዊ ቅርጾች (Negation Across All Tenses)",
    "level": "B2",
    "objective": "በኃላፊ (አልጻፈም)፣ በአሁን/ወደፊት (አይጽፍም) እና በቀጣይ/ፍጻሜ (አልጻፈም ነበር / አልተጻፈም) አሉታዊ አረፍተ ነገሮችን ማዋቀር።",
    "presentation": {
      "explanation": "የተለያዩ የጊዜ አሉታዊ ቅርጾች ሰዋሰዋዊ ደንቦች (Negation Across Tenses):\n\n፩. የኃላፊ ጊዜ አሉታዊ (Past Negation: አል- + ግስ + -ም):\n- አልሄደም (He didn't go) / አልበላችም (She didn't eat) / አልመጡም (They didn't come)።\n\n፪. የወደፊት እና የአሁን ጊዜ አሉታዊ (Present/Future Negation: አይ- / አል- + ግስ + -ም):\n- አይሄድም (He won't go / doesn't go) / አትሄድም (She doesn't go) / አንሄድም (We don't go)።\n\n፫. በንዑስ አንቀጽ ውስጥ አሉታዊነት (Subordinate Negation without «-ም»):\n- ሳይሄድ (Without him going) / ሳያጠና (Without studying) / ባይመጣ (If he doesn't come)።",
      "examples": [
        {
          "target": "ተማሪው ትምህርቱን በሚገባ ስላላጠና በፈተናው ወቅት የሚፈለገውን ውጤት አላመጣም።",
          "reading": "Tämariw təməhərtun bämigäba səlalat’änna bäfätänaw wäqt yämmiffällägäwən wət’et alamät’am. [tɛmaˈriw tɨmɨhɨrˈtun bɛmiɡɛˈba sɨlalatʼɛnːa bɛfɛtɛˈnaw wɛkʼt jɛmːifːɛlːɛɡɛˈwɨn wɨtʼet ʔalamɛˈtʼam] (teh-mah-REEW tuh-muh-hur-TOON beh-mee-geh-BAH sul-lah-lah-t'en-NAH beh-feh-teh-NAHW wehk'-T yem-meef-fel-leh-GEH-wun wut'-AYT ah-lah-meh-T'AHM)",
          "translation": "Because the student did not study his lessons properly, he did not bring the expected result during the exam."
        },
        {
          "target": "እሱ ወደ ስብሰባው አይመጣም፤ ምክንያቱም አስቀድሞ ፈቃድ አልጠየቀም።",
          "reading": "Əssu wädä səbsäbaw aymät’am; məkənyatum asqäddəmo fäqad alt’äyyäqäm. [ʔɨsːu wɛˈdɛ sɨbsɛˈbaw ʔajmɛˈtʼam mɨkɨnˈjatum ʔaskʼɛdːɨˈmo fɛˈkʼad ʔaltʼɛjːɛˈkʼɛm] (us-SOO weh-DEH sub-seh-BAHW eye-meh-T'AHM; muh-kun-YAH-toom ahs-k'ed-duh-MOH feh-K'AHD ahl-t'ey-yeh-K'EM)",
          "translation": "He will not come to the meeting, because he did not ask for permission beforehand."
        },
        {
          "target": "ምንም ዓይነት ጥናት ሳይደረግ አዲስ ፕሮጀክት መጀመር ትክክል አይደለም።",
          "reading": "Mənəm aynät t’ənat sayəddärräg addis piroğäkt mäğämmär təkkəkəl aydälläm. [mɨˈnɨm ʔajˈnɛt tʼɨˈnat saˈjɨdːɛrːɛɡ ʔadːis pirodʒɛkt mɛdʒɛmːɛr tɨkːɨˈkɨl ʔajdɛlːɛm] (muh-NUM eye-NET t'uh-NAHT sah-yud-der-REG ahd-DEES pee-roh-JEKT meh-jem-MER tuk-kuh-KUL eye-del-LEM)",
          "translation": "Starting a new project without any study being conducted is not correct."
        }
      ],
      "mnemonics": [
        "Negation Rule: Main clause = አል/አይ + Verb + -ም; Subordinate clause = ሳ-/ባ- + Verb (NO -ም)!"
      ],
      "culturalNotes": [
        "በአማርኛ ንግግር ውስጥ አሉታዊ መልስ ሲሰጥ 'አይደለም' ወይም 'አልችልም' ከማለት ይልቅ በአክብሮት 'ይቅርታ፣ አሁን አይመቸኝም' በማለት ጨዋነትን መግለጽ የተለመደ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«He did not write the letter» የሚለውን በአማርኛ የኃላፊ ጊዜ አሉታዊ መዋቅር በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ደብዳቤውን አልጻፈም። (He did not write the letter - Past negation አል...ም)",
            "ደብዳቤውን ጻፈ",
            "ደብዳቤውን አይጽፍም",
            "ደብዳቤ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«አልጻፈም» በኃላፊ ጊዜ ውስጥ የተፈጸመ አሉታዊ ድርጊትን በትክክል ያሳያል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Without him eating' የሚለውን በንዑስ አንቀጽ አሉታዊ ቅርጽ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ሳይበላ (Without him eating - Subordinate negation without -ም)",
            "አልበላም",
            "እየበላ",
            "ይበላል"
          ],
          "answerIndex": 0,
          "explanation": "በንዑስ አንቀጽ ውስጥ አሉታዊ ቅጥያ «ሳ-» ሲገባ «-ም» አይጨመርም።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአማርኛ አሉታዊ የግስ እርባታዎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "አልጻፈም (ኃላፊ)፣ አይጽፍም (የአሁን/ወደፊት)፣ ሳይጽፍ (ንዑስ አንቀጽ) እና አልጻፈም ነበር (ያለፈ ፍጻሜ)።",
            "ቀይ፣ ሰማያዊ እና አረንጓዴ።",
            "ቤት፣ በር እና መስኮት።",
            "በአማርኛ አሉታዊ ግስ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና አሉታዊ የግስ እርባታዎችን በአግባቡ ያሳያል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አልጻፈም / He did not write' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አልጻፈም"
          ],
          "explanation": "ትክክለኛው ቃል «አልጻፈም» (Alts’afäm) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u22-l2": {
    "id": "am-u22-l2",
    "subject": "amharic",
    "unit": 22,
    "lessonNumber": 2,
    "title": "ልዩ አሉታዊ አገላለጾች እና ቃላት (Special Negative Pronouns & Particles)",
    "level": "B2",
    "objective": "አሉታዊ ተውላጠ ስሞችንና አጽንኦት ሰጪ ቃላትን (ማንም፣ ምንም፣ የትም፣ በፍጹም፣ ከቶ) ከአሉታዊ ግስ ጋር ማጣመር።",
    "presentation": {
      "explanation": "ልዩ አሉታዊ ቃላትና አጠቃቀማቸው (Negative Pronouns & Polar Words):\n\n፩. አሉታዊ ተውላጠ ስሞች (Negative Pronouns):\n- ማንም + አሉታዊ ግስ (Nobody / no one / anyone):\n  «ማንም አልመጣም» (Nobody came)።\n- ምንም + አሉታዊ ግስ (Nothing / anything):\n  «ምንም አላየሁም» (I saw nothing)።\n- የትም + አሉታዊ ግስ (Nowhere / anywhere):\n  «የትም አልሄድኩም» (I went nowhere)።\n\n፪. አጽንኦት ሰጪ አሉታዊ ቃላት (Emphatic Negative Adverbs):\n- በፍጹም (Never / not at all / absolutely not)\n- ከቶ / ከቶውንም (Never / by no means)።",
      "examples": [
        {
          "target": "በስብሰባው አዳራሽ ውስጥ ማንም ሰው አልተገኘም፤ ክፍሉም ጭር ብሏል።",
          "reading": "Bäsəbsäbaw adaraš wəst’ manəm säw altägänyäm; kəflum č’ərr bəlwal. [bɛsɨbsɛˈbaw ʔadaˈraʃ wɨstʼ maˈnɨm sɛw ʔaltɛɡɛˈɲɛm kɨfˈlum tʃʼɨrː bəlˈwal] (beh-sub-seh-BAHW ah-dah-RAHSH woos-T' MAH-num sew ahl-teh-gen-YEM; kuf-LOOM ch'ur-R bul-WAHL)",
          "translation": "Nobody was found in the meeting hall; and the room was completely deserted."
        },
        {
          "target": "ስለ ጉዳዩ ምንም ዓይነት መረጃ የለኝም፤ ስለዚህ አስተያየት አልሰጥም።",
          "reading": "Səlä guddayu mənəm aynät märäğa yällänyəm; səläzzih astäyayat alsät’əm. [sɨlɛ ɡuddaˈju mɨˈnɨm ʔajˈnɛt mɛrɛˈdʒa jɛlːɛˈɲɨm sɨlɛzːih ʔastɛjaˈjat ʔalsɛˈtʼɨm] (sul-leh good-dah-YOO muh-NUM eye-NET meh-reh-JAH yel-len-YUM; suh-lez-ZEEH ahs-teh-yah-YAHT ahl-set'-UM)",
          "translation": "I have no information whatsoever about the matter; therefore, I will not give a comment."
        },
        {
          "target": "ህዝባዊ እምነትን የሚያጎድፍ ተግባር በፍጹም አንፈጽምም፤ ከቶውንም አንፈቅድም።",
          "reading": "Həzbawi əmnätən yämmiyagodəf tägbar bäfəts’um anfäts’məm; kätowənəm anfäqdəm. [hɨzbaˈwi ʔɨmˈnɛtɨn jɛmːijaɡoˈdɨf tɛɡˈbar bɛfɨtsʼum ʔanfɛtsʼˈmɨm kɛtoˈwɨnɨm ʔanfɛkʼˈdɨm] (huz-bah-WEE um-neh-TOON yem-meey-ah-goh-DUF teg-BAHR beh-futs'-OOM ahn-fets'-MUM; keh-toh-wuh-NUM ahn-fek'-DUM)",
          "translation": "We will absolutely not commit an act that undermines public trust; by no means will we allow it."
        }
      ],
      "mnemonics": [
        "Double Negative Rule: ማንም/ምንም + አሉታዊ ግስ (ማንም አልመጣም = Nobody came)!"
      ],
      "culturalNotes": [
        "በአማርኛ 'ማንም' እና 'ምንም' ከግዴታ አሉታዊ ግስ ጋር አብረው ይገባሉ (Double Concord)። ይህ ሰዋሰዋዊ ህግ ሀሳብን አጥርቶ ለማስቀመጥ ወሳኝ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«I saw nothing» የሚለውን በአማርኛ አሉታዊ ተውላጠ ስም በመጠቀም በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ምንም አላየሁም። (I saw nothing - Correct pronoun ምንም + negative verb)",
            "ሁሉንም አየሁ",
            "አንድ ነገር አየሁ",
            "ምንም የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ምንም» ከአሉታዊ ግስ (አላየሁም) ጋር ተጣምሮ 'ምንም አላየሁም' (I saw nothing) የሚል ትክክለኛ ትርጉም ይሰጣል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Nobody knows' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ማንም አያውቅም። (Nobody knows - Correct pronoun ማንም + negative verb)",
            "ሁሉም ያውቃል",
            "ሰው ያውቃል",
            "ማንም ያውቃል"
          ],
          "answerIndex": 0,
          "explanation": "«ማንም» ከአሉታዊ ግስ «አያውቅም» ጋር መግባት አለበት።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "አሉታዊ ተውላጠ ስሞችንና አጽንኦት ሰጪ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ማንም፣ ምንም፣ የትም፣ በፍጹም እና ከቶውንም።",
            "ሁልጊዜ፣ አንዳንዴ እና አሁን።",
            "ጠረጴዛ፣ ደብተር እና ወንበር።",
            "በአማርኛ አሉታዊ ተውላጠ ስም የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና አሉታዊ ተውላጠ ስሞችንና አጽንኦት ሰጪ ቃላትን ያካትታል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'በፍጹም / Absolutely not, never' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "በፍጹም"
          ],
          "explanation": "ትክክለኛው ቃል «በፍጹም» (Bäfəts’um) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u22-l3": {
    "id": "am-u22-l3",
    "subject": "amharic",
    "unit": 22,
    "lessonNumber": 3,
    "title": "የልዩ ንግግር ዘይቤዎች እና ፈሊጦች (Idiomatic Expressions & Figures of Speech)",
    "level": "B2",
    "objective": "የአማርኛ የፈሊጥ አነጋገሮችን (ሆድ ሰፊ፣ እጅ ረጅም፣ ዐይን አፋር፣ እግር አወጣ) እና ዘይቤያዊ አገላለጾችን መረዳት።",
    "presentation": {
      "explanation": "የአማርኛ ፈሊጦች እና የንግግር ዘይቤዎች (Amharic Idioms & Stylistic Expressions):\n\n፩. የሰው ባህሪ ገላጭ ፈሊጦች:\n- «ሆድ ሰፊ» (Patient / tolerant / forgiving; lit. wide stomach)\n- «እጅ ረጅም» (Thief / kleptomaniac / generous depending on context; lit. long hand)\n- «ዐይን አፋር» (Shy / bashful; lit. eye-shyer)\n- «አንገተ ደንዳና» (Stubborn / obstinate; lit. stiff-necked)።\n\n፪. የተግባር እና የሁኔታ ፈሊጦች:\n- «እግር አወጣ» (Became mobile / began wandering; lit. grew legs)\n- «ጆሮ ዳባ ልበስ አለ» (Ignored / turned a deaf ear)\n- «ልቡ ተሰበረ» (Became heartbroken)።",
      "examples": [
        {
          "target": "ሽማግሌው እጅግ ሆድ ሰፊ ሰው ስለሆኑ ማንኛውንም በደል በይቅርታ ያልፋሉ።",
          "reading": "Šəmagəllew əğğəg hod säffi säw səlähonu mannyanyawənəm bädäl bäyəqərta yalfalu. [ʃɨmaɡɨlːew ʔɨdʒːɨɡ hod sɛfːi sɛw sɨlɛhoˈnu manːaɲaˈwɨnɨm bɛˈdɛl bɛjɨkʼɨrˈta jalfaˈlu] (shuh-mah-gul-LAY-woo uhj-JUG hohd SEF-fee sew sul-leh-hoh-NOO mahn-nyahn-yah-wuh-NUM beh-DEL beh-yuh-k'ur-TAH yahl-fah-LOO)",
          "translation": "Because the elder is a very patient and forgiving person, he overlooks any grievance with forgiveness."
        },
        {
          "target": "ልጁ ዐይን አፋር ስለነበር በብዙ ሰዎች ፊት ቀርቦ ለመናገር ተቸገረ።",
          "reading": "Ləğu ayn afar səllänäbbär bäbəzu säwočč fit qärbo lämänägär täčäggärä. [lɨˈdʒu ʔajn ʔaˈfar sɨlːɛnɛbːɛr bɛbɨˈzu sɛwoˈtʃː fit kʼɛrˈbo ləmɛnɛˈɡɛr tɛtʃɛɡːɛˈrɛ] (luh-JOO eyen ah-FAHR sul-leh-neb-BER beh-buh-ZOO sew-wohch FEET k'er-BOH luh-meh-neh-GER teh-cheg-geh-REH)",
          "translation": "Because the child was shy, he found it difficult to come forward and speak in front of many people."
        },
        {
          "target": "የቀረበለትን ጥሪ ጆሮ ዳባ ልበስ በማለት አላስፈላጊ ችግር ውስጥ ወደቀ።",
          "reading": "Yäqärräbälätən t’ərri ğoro daba ləbäs bamalät alasfällagi čəggər wəst’ wäddäqä. [jɛkʼɛrːɛbɛˈlɛtɨn tʼɨrːi dʒoˈro daˈba lɨˈbɛs bamaˈlɛt ʔalasfɛlːaˈɡi tʃɨɡːɨr wɨstʼ wɛdːɛˈkʼɛ] (yeh-k'er-reh-beh-LET-un t'ur-REE joh-ROH dah-BAH luh-BES bah-mah-LET ah-lahs-fel-lah-GEE chug-GUR woos-T' wed-deh-K'EH)",
          "translation": "By turning a deaf ear to the invitation extended to him, he fell into unnecessary trouble."
        }
      ],
      "mnemonics": [
        "Idiom Wisdom: ሆድ ሰፊ = Patient / ዐይን አፋር = Shy / ጆሮ ዳባ ልበስ = Turn deaf ear!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ስነ-ንግግር ፈሊጣዊ አነጋገሮችን መጠቀም የአማርኛ ቋንቋን ውበት፣ ጥልቀትና የባህል ፍልስፍናን ለመግለጽ ከፍተኛ ሚና አለው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«ሆድ ሰፊ» የሚለው የአማርኛ ፈሊጣዊ አነጋገር ትክክለኛ ትርጉም ምንድን ነው?",
          "options": [
            "ትዕግሥተኛ፣ ይቅር ባይና ሰፊ አመለካከት ያለው ሰው። (Patient and forgiving person - True idiom meaning)",
            "ብዙ ምግብ የሚበላ ሰው",
            "የታመመ ሰው",
            "ሆድ የሌለው ሰው"
          ],
          "answerIndex": 0,
          "explanation": "«ሆድ ሰፊ» በትዕግሥትና በይቅር ባይነት የሚታወቅን ሰው የሚያመለክት ታዋቂ ፈሊጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'He turned a deaf ear' የሚለውን የአማርኛ ፈሊጥ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ጆሮ ዳባ ልበስ አለ። (He turned a deaf ear / ignored - Accurate Amharic idiom)",
            "ጆሮው ታመመ",
            "በደንብ ሰማ",
            "ጆሮ የለውም"
          ],
          "answerIndex": 0,
          "explanation": "«ጆሮ ዳባ ልበስ አለ» የቀረበለትን ምክር ወይም ጥሪ ችላ የማለት ፈሊጥ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአማርኛ ፈሊጣዊ አነጋገሮችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ሆድ ሰፊ፣ ዐይን አፋር፣ ጆሮ ዳባ ልበስ እና አንገተ ደንዳና።",
            "ሰኞ፣ ማክሰኞ፣ እሮብ እና ሐሙስ።",
            "ዳቦ፣ ወተት፣ ስጋ እና እንቁላል።",
            "በአማርኛ ፈሊጣዊ አነጋገር የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የአማርኛ ፈሊጣዊ አነጋገሮችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ፈሊጥ / Idiom, idiomatic expression' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ፈሊጥ"
          ],
          "explanation": "ትክክለኛው ቃል «ፈሊጥ» (Fälit’) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u22-l4": {
    "id": "am-u22-l4",
    "subject": "amharic",
    "unit": 22,
    "lessonNumber": 4,
    "title": "የአጽንኦት እና የቅኔያዊ ዘይቤዎች (Emphatic Markers & Poetic Devices)",
    "level": "B2",
    "objective": "የአጽንኦት ቅጥያዎችን (-ማ፣ -ስ፣ -ኮ) እና ቅኔያዊ ዘይቤዎችን በአረፍተ ነገር ውስጥ መጠቀም።",
    "presentation": {
      "explanation": "የአጽንኦት ቅጥያዎች እና ቅኔያዊ ዘይቤዎች (Emphatic Particles & Rhetoric):\n\n፩. ዋና ዋና የአጽንኦት ቅጥያዎች:\n- «-ማ» (Indeed / as for / certainly): «እሱማ ያውቃል» (As for him, he certainly knows)።\n- «-ስ» (What about / and as for): «አንተስ ምን ትላለህ?» (And what about you, what do you say?)።\n- «-ኮ» (You know / indeed): «ነግሬሃለሁኮ» (I told you indeed, you know!)።\n\n፪. አጽንኦት ሰጪ ቃላት:\n- «እንኳ» (Even / at least): «ስልክ እንኳ አልደወለም» (He didn't even call)።\n- «እንጂ» (Indeed / but rather): «እሱ እንጂ ሌላ ሰው አይደለም» (It is him indeed, not another person)።",
      "examples": [
        {
          "target": "እሱማ በትምህርቱ እጅግ ጎበዝ ነው፤ አንተስ ምን ለማጥናት አቅደሃል?",
          "reading": "Əssuma bätəməhərtu əğğəg gobäz näw; antäs mən lamat’nat aqədähal? [ʔɨsːuˈma bɛtɨmɨhɨrˈtu ʔɨdʒːɨɡ ɡoˈbɛz nɛw ʔanˈtɛs mɨn lamatʼˈnat ʔakʼɨdɛˈhal] (us-SOO-mah beh-tuh-muh-hur-TOO uhj-JUG goh-BEZ new; ahn-TES mun lah-maht'-NAHT ah-k'uh-deh-HAHL?)",
          "translation": "As for him, he is certainly very clever in his studies; and what about you, what do you plan to study?"
        },
        {
          "target": "አስፈላጊውን ምክር ሁሉ ሰጥቼዋለሁኮ፤ ሆኖም ግን አልሰማኝ አለ።",
          "reading": "Asfällagiwən məkər hullu sät’ət’t’ewallähu-ko; honom gən alsämany alä. [ʔasfɛlːaɡiˈwɨn mɨˈkɨr hulːu sɛtʼɨtʼːeˈwalːɛhuko hoˈnom ɡɨn ʔalsɛˈmaɲ ʔaˈlɛ] (ahs-fel-lah-GEE-wun muh-KUR hool-LOO set'-ut'-TAY-wahl-leh-hoo-koh; hoh-NOHM gun ahl-seh-MAHN-y ah-LEH)",
          "translation": "I gave him all necessary advice, you know; however, he refused to listen to me."
        },
        {
          "target": "በዚህ ከባድ ወቅት አንዲት መልካም ቃል እንኳ ማግኘት ትልቅ ብርታት ይሆናል።",
          "reading": "Bäzzih käbbad wäqt andit mälkam qal ənkwa magnyät talaq bərtat yəhonal. [bɛzːih kɛbːad wɛkʼt ʔanˈdit mɛlˈkam kʼal ʔɨnˈkʷa maɡˈɲɛt taˈlakʼ bɨrˈtat jɨhoˈnal] (bez-ZEEH keb-BAHD wehk'-T ahn-DEET mel-KAHM k'ahl un-KWAH mahg-NYET tah-LAHK' bur-TAHT yuh-hoh-NAHL)",
          "translation": "In this difficult time, finding even a single kind word becomes a great source of strength."
        }
      ],
      "mnemonics": [
        "Emphasis Markers: -ማ (Indeed/As for) / -ስ (What about) / -ኮ (You know) / እንኳ (Even)!"
      ],
      "culturalNotes": [
        "በአማርኛ ንግግር ውስጥ '-ኮ' እና '-ማ' የጠበቀ ማህበራዊ ቅርበትንና ወዳጅነትን የሚያሳዩ የድምፅ ቃና ማጉያዎች ናቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«As for me, I finished» የሚለውን በአማርኛ አጽንኦት ሰጪ ቅጥያ በመጠቀም በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "እኔማ ጨረስኩ። (As for me, I finished - Emphatic particle -ማ)",
            "እኔ ጨረስኩ",
            "አልጨረስኩም",
            "ስራ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«እኔማ» በርዕሰ-ጉዳዩ ላይ ልዩ አጽንኦት ለመስጠት የሚያገለግል ትክክለኛ አገላለጽ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'What about you?' የሚለውን በአማርኛ አጽንኦት ሰጪ ቅጥያ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "አንተስ? / አንቺስ? (What about you? - Contrastive question marker -ስ)",
            "አንተ ማን ነህ?",
            "የት ነህ?",
            "ስምህ ማን ነው?"
          ],
          "answerIndex": 0,
          "explanation": "«-ስ» ወደ ሌላኛው ተናጋሪ ሀሳቡን ለማዞርና አጽንኦት ለመስጠት የሚያገለግል ቅጥያ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአማርኛ አጽንኦት ሰጪ ቅጥያዎችንና ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "-ማ፣ -ስ፣ -ኮ፣ እንኳ እና እንጂ።",
            "ትልቅ፣ ትንሽ፣ ረጅም እና አጭር።",
            "ውሃ፣ ጭማቂ እና ወተት።",
            "በአማርኛ አጽንኦት ሰጪ ቅጥያ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የአጽንኦት ቅጥያዎችንና ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'እንኳ / Even, at least' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "እንኳ"
          ],
          "explanation": "ትክክለኛው ቃል «እንኳ» (Ənkwa) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u22-l5": {
    "id": "am-u22-l5",
    "subject": "amharic",
    "unit": 22,
    "lessonNumber": 5,
    "title": "የክፍል 22 አጠቃላይ ማጠቃለያ (Unit 22 Grand Synthesis & Idiomatic Negative Discourse)",
    "level": "B2",
    "objective": "ሁሉንም አሉታዊ የግስ እርባታዎች፣ ልዩ አሉታዊ ቃላትን፣ ፈሊጣዊ አነጋገሮችንና የአጽንኦት ዘይቤዎችን ያቀናጀ የተሟላ ንግግር ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፳፪ አጠቃላይ ሰዋሰዋዊ ውህደት እና የልዩ ዘይቤዎች ማጠቃለያ:\n\n፩. አሉታዊ የግስ እርባታዎች:\n- ኃላፊ (አልጻፈም)፣ የአሁን/ወደፊት (አይጽፍም)፣ ንዑስ አንቀጽ (ሳይጽፍ)።\n\n፪. ልዩ አሉታዊ ቃላት:\n- ማንም፣ ምንም፣ የትም፣ በፍጹም፣ ከቶውንም።\n\n፫. ፈሊጣዊ አነጋገሮች:\n- ሆድ ሰፊ፣ ዐይን አፋር፣ ጆሮ ዳባ ልበስ፣ እጅ ረጅም።\n\n፬. የአጽንኦት ቅጥያዎችና ዘይቤዎች:\n- -ማ፣ -ስ፣ -ኮ፣ እንኳ፣ እንጂ።",
      "examples": [
        {
          "target": "እሱማ ሆድ ሰፊ ሰው ስለሆነ ማንንም አያስከፋም፤ በፍጹም ክፉ አይናገርም።",
          "reading": "Əssuma hod säffi säw səlähonä mannəmən ayasəkäfam; bäfəts’um kəfu aynägärəm. [ʔɨsːuˈma hod sɛfːi sɛw sɨlɛhoˈnɛ manːɨˈmɨn ʔajasɨkɛˈfam bɛfɨtsʼum kɨˈfu ʔajnɛɡɛˈrɨm] (us-SOO-mah hohd SEF-fee sew sul-leh-hoh-NEH mahn-nuh-MUN eye-ahs-kuh-FAHM; beh-futs'-OOM kuh-FOO eye-neh-geh-RUM)",
          "translation": "As for him, because he is a patient and forgiving person, he offends no one; he never speaks evil at all."
        },
        {
          "target": "ስለ ጉዳዩ ምንም ዓይነት ጥናት ሳይደረግ በፍጹም ውሳኔ ማስተላለፍ አይቻልምኮ።",
          "reading": "Səlä guddayu mənəm aynät t’ənat sayəddärräg bäfəts’um wəsane mastälaläf ayəččaləm-ko. [sɨlɛ ɡuddaˈju mɨˈnɨm ʔajˈnɛt tʼɨˈnat saˈjɨdːɛrːɛɡ bɛfɨtsʼum wɨsaˈne mastɛlaˈlɛf ʔajɨtʃːaˈlɨmko] (sul-leh good-dah-YOO muh-NUM eye-NET t'uh-NAHT sah-yud-der-REG beh-futs'-OOM wuh-sah-NAY mahs-teh-lah-LEF eye-yuhch-chah-LUM-koh)",
          "translation": "Without any study being conducted about the matter, it is absolutely impossible to pass a decision, you know."
        },
        {
          "target": "ምክርን ጆሮ ዳባ ልበስ ማለት ተገቢ አይደለም፤ ይልቁንም በጥሞና ማዳመጥ ትልቅ ብልህነት ነው።",
          "reading": "Məkərən ğoro daba ləbäs malät tägäbi aydälläm; yəlqunəm bät’əmona madamät’ talaq bələhnät näw. [mɨkɨˈrɨn dʒoˈro daˈba lɨˈbɛs maˈlɛt tɛɡɛˈbi ʔajdɛlːɛm jɨlˈkʼunɨm bɛtʼɨmoˈna maˈdamɛtʼ taˈlakʼ bɨlɨhˈnɛt nɛw] (muh-kuh-RUN joh-ROH dah-BAH luh-BES mah-LET teh-geh-BEE eye-del-LEM; yul-K'OO-num beh-t'uh-moh-NAH mah-dah-MET tah-LAHK' buh-luh-huh-NET new)",
          "translation": "Turning a deaf ear to advice is not appropriate; rather, listening attentively is great wisdom."
        }
      ],
      "mnemonics": [
        "Synthesis 22 Mastery: Negation (አል...ም/አይ...ም) + Polar (ማንም/ምንም) + Idiom (ሆድ ሰፊ) + Emphasis (-ማ/-ኮ)!"
      ],
      "culturalNotes": [
        "የአማርኛ ስነ-ጽሁፍና የውይይት ባህል አሉታዊ ሀሳቦችን በጨዋነት፣ በፈሊጣዊ ጥበብና በአጽንኦት ቅጥያዎች አዋዝቶ የማቅረብ የላቀ ፍልስፍና አለው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ አሉታዊ መዋቅርን፣ ፈሊጥንና አጽንኦትን ያጣመረው የትኛው ነው?",
          "options": [
            "እሱማ ሆድ ሰፊ ሰው ስለሆነ ማንም አይከፋበትምኮ። (Complete synthesis: emphasis -ማ/-ኮ, idiom ሆድ ሰፊ, negative pronoun/verb ማንም አይከፋበትም)",
            "ምንም የለም",
            "ሁሉም ቃላት ተራ ናቸው",
            "ፈሊጥ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ አጽንኦት (-ማ፣ -ኮ)፣ ፈሊጥ (ሆድ ሰፊ) እና አሉታዊ መዋቅርን (ማንም አይከፋበትም) በአንድ ላይ ያጣመረ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ልዩ አሉታዊ ቃላትንና ፈሊጥን ያጣመረ ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ስለ ጉዳዩ ማንም ምንም አያውቅም፤ ሆኖም ግን ጆሮ ዳባ ልበስ አንበል ። (Nobody knows anything about the matter; however let us not turn a deaf ear - Balanced idiomatic negative sentence)",
            "ምንም አናውቅም",
            "ጆሮ የለም",
            "ሰው የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ዓረፍተ ነገር አሉታዊ ተውላጠ ስሞችን (ማንም፣ ምንም) እና ፈሊጥን (ጆሮ ዳባ ልበስ) በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 22 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የተለያዩ የጊዜ አሉታዊ ቅርጾች፣ ልዩ አሉታዊ ቃላት (ማንም/ምንም/በፍጹም)፣ ፈሊጣዊ አነጋገሮች (ሆድ ሰፊ/ጆሮ ዳባ ልበስ) እና የአጽንኦት ቅጥያዎች (-ማ/-ስ/-ኮ) ተካተዋል።",
            "ይህ ክፍል ስለ ህክምና ብቻ ነው።",
            "በአማርኛ አሉታዊ አረፍተ ነገር የለም።",
            "ሁሉም ፈሊጦች ተመሳሳይ ትርጉም አላቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 22ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ዘይቤ / Style, figure of speech' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ዘይቤ"
          ],
          "explanation": "ትክክለኛው ቃል «ዘይቤ» (Zäybe) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u23-l1": {
    "id": "am-u23-l1",
    "subject": "amharic",
    "unit": 23,
    "lessonNumber": 1,
    "title": "የዜና ዘገባ እና አርዕስተ ዜና አወቃቀር (News Reports & Headline Architecture)",
    "level": "B2",
    "objective": "የዜና አርዕስት (Headlines) እና የዘገባ አቀራረብ መዋቅርን በመደበኛ የጋዜጠኝነት ቋንቋ ማዋቀር።",
    "presentation": {
      "explanation": "የዜና ዘገባ እና አርዕስተ ዜና አወቃቀር ሰዋሰዋዊ ህግ (News & Headline Syntax):\n\n፩. የአርዕስተ ዜና ባህሪያት:\n- አጫጭር፣ ገላጭ እና በተገብሮ ወይም በተጨባጭ ግስ የተዋቀሩ አረፍተ ነገሮች:\n  «አዲሱ የባቡር መስመር ተመረቀ» (New railway line was inaugurated)።\n\n፪. ዋና ዋና የጋዜጠኝነት ቃላት:\n- አርዕስተ ዜና (Headlines) / ዘገባ (Report) / ዘጋቢ (Reporter)\n- የዜና አውታር (News outlet / media network) / ጋዜጣ (Newspaper)\n- የቀጥታ ስርጭት (Live broadcast) / ሰበር ዜና (Breaking news)።",
      "examples": [
        {
          "target": "ሰበር ዜና: በዋና ከተማዋ የተገነባው ታላቅ የሳይንስ ሙዚየም ዛሬ በይፋ ተመረቀ።",
          "reading": "Säbbär zena: bäwana kätämawa yätägännabaw talaq yäsayəns muziyäm zarre bäyəfa tämärräqä. [sɛbːɛr zeˈna bɛwaˈna kɛtɛmaˈwa jɛtɛɡɛnːaˈbaw taˈlakʼ jɛsaˈjɨns muziˈjɛm zaˈre bɛjɨˈfa tɛmɛrːɛˈkʼɛ] (seb-BER zay-NAH: beh-wah-NAH keh-teh-mah-WAH yeh-teh-gen-nah-BAHW tah-LAHK' yeh-sah-YUNS moo-zee-YEM zah-RAY beh-yuh-FAH teh-mer-reh-K'EH)",
          "translation": "Breaking news: The grand science museum constructed in the capital city was officially inaugurated today."
        },
        {
          "target": "ዘጋቢያችን በቀጥታ ስርጭት እንደዘገበው በአዲስ አበባ ከተማ መጠነ-ሰፊ የፅዳት ዘመቻ ተካሄደ።",
          "reading": "Zägabiyaččən bäqət’t’əta sərč’ət əndäzäggäbäw bä'addis abäba kätäma mät’änä-säffi yäts’ədat zämäča täkahedä. [zɛɡabiˈjatʃːɨn bɛkʼɨtʼːɨˈta sɨrtʃʼɨt ʔɨndɛzɛɡːɛˈbɛw bɛʔadːis ʔabɛˈba kɛtɛˈma mɛtʼɛnɛsɛfːi jɛtsʼɨˈdat zɛmɛˈtʃa tɛkaˈhedɛ] (zeh-gah-bee-yahch-CHUN beh-k'ut'-t'uh-TAH sur-ch'ut un-deh-zeg-geh-BEH-woo beh-ahd-DEES ah-beh-BAH keh-teh-MAH meh-t'eh-neh-SEF-fee yeh-ts'uh-DAHT zeh-meh-CHAH teh-kah-HAY-deh)",
          "translation": "As our reporter reported on live broadcast, a large-scale cleaning campaign was held in Addis Ababa."
        },
        {
          "target": "የሀገር ውስጥና የውጭ የዜና አውታሮች ለጉባኤው ሰፊ ሽፋን በመስጠት ላይ ይገኛሉ።",
          "reading": "Yähagär wəst’ənna yäwəč’ yäzena awtaročč läguba'ew säffi šəffan bämäsət’ät’ lay yəggänyallu. [jɛhaˈɡɛr wɨstʼɨnːa jɛwɨtʃʼ jɛzeˈna ʔawtaˈrotʃː ləɡubaˈʔew sɛfːi ʃɨfːan bɛmɛsɨˈtʼɛtʼ laj jɨɡːɛɲaˈlːu] (yeh-hah-GER woos-T'UN-nah yeh-wuch' yeh-zay-NAH ahw-tah-ROHCH luh-goo-bah-AY-woo SEF-fee shuf-FAHN beh-meh-sut'-ET lye yug-gen-yahl-LOO)",
          "translation": "Domestic and foreign news outlets are currently providing wide coverage for the summit."
        }
      ],
      "mnemonics": [
        "News Terms: ሰበር ዜና (Breaking news) + የቀጥታ ስርጭት (Live broadcast) + ዘጋቢ (Reporter)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ሬዲዮና ቴሌቪዥን 'ሰበር ዜና' የሚለው አገላለጽ አጣዳፊ ሀገራዊና አለም አቀፋዊ ክስተቶችን ለህዝብ ወዲያውኑ ለማድረስ ያገለግላል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Breaking news» የሚለውን በአማርኛ የዜና ቋንቋ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ሰበር ዜና (Breaking news - Standard media terminology)",
            "የድሮ ዜና",
            "ተራ ወሬ",
            "ምንም ዜና የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ሰበር ዜና» አጣዳፊና ቅጽበታዊ ዜናዎችን ለመግለጽ የሚሠራበት መደበኛ የሚዲያ ቃል ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Live broadcast' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "የቀጥታ ስርጭት (Live broadcast - Professional journalism term)",
            "የቀረጻ ስርጭት",
            "የቆየ ዜና",
            "ስርጭት የለም"
          ],
          "answerIndex": 0,
          "explanation": "«የቀጥታ ስርጭት» በቅጽበት የሚተላለፍ የሚዲያ ፕሮግራምን ያመለክታል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የዜና እና የሚዲያ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ሰበር ዜና፣ የቀጥታ ስርጭት፣ አርዕስተ ዜና፣ ዘገባ እና የዜና አውታር።",
            "ወተት፣ ማር፣ ዳቦ እና ቅቤ።",
            "ሰኞ፣ ማክሰኞ እና እሮብ።",
            "በአማርኛ የሚዲያ ቋንቋ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የሚዲያና የጋዜጠኝነት ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ዜና / News' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ዜና"
          ],
          "explanation": "ትክክለኛው ቃል «ዜና» (Zena) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u23-l2": {
    "id": "am-u23-l2",
    "subject": "amharic",
    "unit": 23,
    "lessonNumber": 2,
    "title": "የፖለቲካ እና የዲፕሎማሲ መግለጫዎች (Politics & Diplomatic Statements)",
    "level": "B2",
    "objective": "የዲፕሎማሲያዊ ግንኙነት፣ የሁለትዮሽ ድርድርና የመንግሥት የፖሊሲ መግለጫዎችን ቋንቋ መጠቀም።",
    "presentation": {
      "explanation": "የፖለቲካ እና የዲፕሎማሲ ቋንቋ መዋቅር (Diplomatic & Political Discourse):\n\n፩. ዋና ዋና የዲፕሎማሲ ቃላት:\n- ዲፕሎማሲያዊ ግንኙነት (Diplomatic relations)\n- አምባሳደር (Ambassador) / ቆንስላ (Consulate)\n- የሁለትዮሽ ውይይት (Bilateral talks / discussion)\n- ሉዓላዊነት (Sovereignty) / የጋራ ተጠቃሚነት (Mutual benefit)\n- የሰላም ስምምነት (Peace agreement)።\n\n፪. የመግለጫ አገባብ:\n- በይፋዊና በከፍተኛ ጨዋነት የተሞላ ሚዛናዊ ቋንቋ መጠቀም።",
      "examples": [
        {
          "target": "ሁለቱ ሀገራት ታሪካዊ ዲፕሎማሲያዊ ግንኙነታቸውን ይበልጥ ለማጠናከር ተስማሙ።",
          "reading": "Hulättu hagärat tarikawi dipəlomasəyawi gənənyənnätaččäwən yəbälət’ lämat’ännakär täsmamu. [hulɛtːu haɡɛˈrat tariˈkawi diplomasiˈjawi ɡɨnɨɲɨnːɛtaˈtʃːɛwɨn jɨbɛˈlɨtʼ ləmatʼɛnːaˈkɛr tɛsmaˈmu] (hoo-let-TOO hah-geh-RAHT tah-ree-KAH-wee deep-loh-mah-see-YAH-wee guh-nuhn-yuhn-neh-tahch-CHEW-un yuh-beh-LUT' luh-maht'-en-nah-KER tes-mah-MOO)",
          "translation": "The two countries agreed to further strengthen their historical diplomatic relations."
        },
        {
          "target": "የውጭ ጉዳይ ሚኒስትሩ ከአምባሳደሩ ጋር በሁለትዮሽ ጉዳዮች ዙሪያ ፍሬያማ ውይይት አደረጉ።",
          "reading": "Yäwəč’ gudday ministru kä'ambasadäru gar bähulättəyoš guddayočč zuriya fəreyama wəyəyyət adärrägu. [jɛwɨtʃʼ ɡudˈdaj minisˈtru kɛʔambasaˈdɛru ɡar bɛhulɛtːɨˈjoʃ ɡuddaˈjotʃː zuˈrija fɨrejaˈma wɨjɨjːɨt ʔadɛrːɛˈɡu] (yeh-wuch' good-DYE mee-nees-TROO keh-ahm-bah-sah-deh-ROO gahr beh-hoo-let-tuh-YOHSH good-dah-YOHCH zoo-REE-yah fuh-ray-yah-MAH wuh-yuy-YUT ah-der-reh-GOO)",
          "translation": "The Minister of Foreign Affairs held a fruitful discussion with the ambassador regarding bilateral matters."
        },
        {
          "target": "ሀገሪቱ የጎረቤት ሀገራትን ሉዓላዊነት በማክበር በጋራ ተጠቃሚነት መርህ ላይ ጸንታ ትሰራለች።",
          "reading": "Hagäritu yägoräbet hagäratən lu'alawinnät bämäkbär bägara tät’äqaminnät märəh lay ts’änta təsäralläčč. [haɡɛˈritu jɛɡorɛˈbet haɡɛˈratɨn luʔalaˈwinːɛt bɛmɛkˈbɛr bɛɡaˈra tɛtʼɛkʼaˈminːɛt mɛˈrɨh laj tsʼɛnˈta tɨsɛraˈlːɛtʃː] (hah-geh-REE-too yeh-goh-reh-BAYT hah-geh-RAH-tun loo-ah-lah-WEEN-net beh-mek-BER beh-gah-RAH tet'-eh-k'ah-MEEN-net meh-RUH lye ts'en-TAH tuh-seh-rahl-LEHCH)",
          "translation": "The country works firmly on the principle of mutual benefit while respecting the sovereignty of neighboring nations."
        }
      ],
      "mnemonics": [
        "Diplomacy Core: ዲፕሎማሲ (Diplomacy) + አምባሳደር (Ambassador) + ሉዓላዊነት (Sovereignty)!"
      ],
      "culturalNotes": [
        "ኢትዮጵያ የአፍሪካ ህብረት መቀመጫ እና የቀደምት ዲፕሎማሲ መገኛ እንደመሆኗ፣ የዲፕሎማሲ ቋንቋ በከፍተኛ አክብሮትና ደረጃ ይነገራል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Diplomatic relations» የሚለውን በአማርኛ ትክክለኛ የዲፕሎማሲ ቃል የያዘው የትኛው ነው?",
          "options": [
            "ዲፕሎማሲያዊ ግንኙነት (Diplomatic relations - Formal diplomatic term)",
            "የጓደኝነት ወሬ",
            "የመንገድ ንግድ",
            "ምንም ግንኙነት የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ዲፕሎማሲያዊ ግንኙነት» በሀገራት መካከል ያለውን ይፋዊ ግንኙነት የሚገልጽ ትክክለኛ ቃል ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Bilateral talks' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "የሁለትዮሽ ውይይት (Bilateral talks / negotiations - Standard diplomatic phrase)",
            "የአንድ ወገን ንግግር",
            "ጭቅጭቅ",
            "ዝምታ"
          ],
          "answerIndex": 0,
          "explanation": "«የሁለትዮሽ ውይይት» በሁለት ሀገራት ወይም ወገኖች መካከል የሚደረግ ይፋዊ ንግግር ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የፖለቲካ እና የዲፕሎማሲ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ዲፕሎማሲያዊ ግንኙነት፣ አምባሳደር፣ ሉዓላዊነት፣ የሁለትዮሽ ውይይት እና የጋራ ተጠቃሚነት።",
            "ጠመኔ፣ ጥቁር ሰሌዳ እና ማጥፊያ።",
            "አውሮፕላን፣ ባቡር እና መኪና።",
            "በአማርኛ የዲፕሎማሲ ቃል የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የዲፕሎማሲና የፖለቲካ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ዲፕሎማሲ / Diplomacy' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ዲፕሎማሲ"
          ],
          "explanation": "ትክክለኛው ቃል «ዲፕሎማሲ» (Dipəlomasəy) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u23-l3": {
    "id": "am-u23-l3",
    "subject": "amharic",
    "unit": 23,
    "lessonNumber": 3,
    "title": "የኢኮኖሚ፣ የንግድ እና የገበያ ዘገባዎች (Economic, Business & Market Reports)",
    "level": "B2",
    "objective": "የኢኮኖሚ እድገት፣ የዋጋ ግሽበት፣ የውጭ ምንዛሪና የኢንቨስትመንት ዘገባዎችን ቋንቋ መጠቀም።",
    "presentation": {
      "explanation": "የኢኮኖሚ እና የገበያ ዘገባዎች ቋንቋ (Economic & Financial Media Terms):\n\n፩. ዋና ዋና የኢኮኖሚ ቃላት:\n- የዋጋ ግሽበት (Inflation) / የውጭ ምንዛሪ (Foreign exchange/currency)\n- ኢንቨስትመንት (Investment) / ባለሀብት (Investor)\n- ምርታማነት (Productivity) / የንግድ ሚዛን (Trade balance)\n- አጠቃላይ የሀገር ውስጥ ምርት (GDP / Gross Domestic Product)\n- የወጪና ገቢ ንግድ (Export and Import trade)።\n\n፪. የዘገባ አቀራረብ:\n- አሃዞችንና የኢኮኖሚ አዝማሚያዎችን በግልጽ ማብራራት።",
      "examples": [
        {
          "target": "የሀገሪቱ የኢኮኖሚ እድገት በግብርና እና በማኑፋክቸሪንግ ዘርፍ ምርታማነት ምክንያት ጨመረ።",
          "reading": "Yähagäritu yä'ikonomi ədəgät bägəbərnna ənna bamanufakčäring zärf mərt’aminnät məkənyat t’ämmärä. [jɛhaɡɛˈritu jɛʔikonoˈmi ʔɨdˈɡɛt bɛɡɨbɨrˈnːa ʔɨnːa bamanufaktʃɛˈriŋɡ zɛrf mɨrtʼaˈminːɛt mɨkɨnˈjat tʃʼɛmːɛˈrɛ] (yeh-hah-geh-REE-too yeh-ee-koh-noh-MEE ud-GET beh-gub-ur-NIN-nah un-nah bah-mah-noo-fahk-cher-EENG zer-F mur-t'ah-MEEN-net muh-kun-YAHT ch'em-meh-REH)",
          "translation": "The country's economic growth increased due to productivity in agriculture and manufacturing sectors."
        },
        {
          "target": "የንግድ ባንኩ የውጭ ምንዛሪ ተመንን በተመለከተ አዲስ መመሪያ ለህዝብ ይፋ አደረገ።",
          "reading": "Yänəgd banku yäwəč’ mənzari tämännən bätämälakkätä addis mämäriya lähəzb yəfa adärrägä. [jɛnɨɡd banˈku jɛwɨtʃʼ mɨnzaˈri tɛmɛnːɨn bɛtɛmɛlakːɛˈtɛ ʔadːis mɛmɛriˈja ləhɨzb jɨˈfa ʔadɛrːɛˈɡɛ] (yeh-nug-D bahn-KOO yeh-wuch' mun-zah-REE teh-MEN-nun beh-teh-mel-lahk-keh-TEH ahd-DEES meh-meh-ree-YAH luh-huz-B yuh-FAH ah-der-reh-GEH)",
          "translation": "The Commercial Bank officially disclosed a new directive to the public regarding the foreign exchange rate."
        },
        {
          "target": "የዋጋ ግሽበትን ለመቆጣጠር እና ገበያውን ለማረጋጋት መንግሥት አስፈላጊውን እርምጃ ወሰደ።",
          "reading": "Yäwaga gəšbätən lämäqot’at’t’är ənna gäbäyawən lämaräggagat mängəst asfällagiwən ərməğğa wässädä. [jɛwaˈɡa ɡɨʃˈbɛtɨn ləmɛkʼotʼatʼːɛr ʔɨnːa ɡɛbɛjaˈwɨn ləmarɛɡːaˈɡat mɛnˈɡɨst ʔasfɛlːaɡiˈwɨn ʔɨrmɨˈdʒːa wɛsːɛˈdɛ] (yeh-wah-GAH gush-BEH-tun luh-meh-k'oh-t'aht'-T'ER un-nah geh-beh-yah-WUN luh-mah-reg-gah-GAHT men-GUST ahs-fel-lah-GEE-wun ur-muj-JAH wes-seh-DEH)",
          "translation": "The government took necessary measures to control inflation and stabilize the market."
        }
      ],
      "mnemonics": [
        "Economy Trio: የዋጋ ግሽበት (Inflation) + የውጭ ምንዛሪ (Forex) + ኢንቨስትመንት (Investment)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ የቡና እና የሰሊጥ የወጪ ንግድ (Export) የሀገሪቱን የውጭ ምንዛሪ ገቢ ለማሳደግ ትልቅ ድርሻ አላቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Inflation» የሚለውን በአማርኛ ትክክለኛ የኢኮኖሚ ቃል የያዘው የትኛው ነው?",
          "options": [
            "የዋጋ ግሽበት (Inflation - Economic term)",
            "የዋጋ ቅናሽ",
            "የገበያ ሽያጭ",
            "ምንም የለም"
          ],
          "answerIndex": 0,
          "explanation": "«የዋጋ ግሽበት» የዕቃዎችና የአገልግሎቶች ዋጋ ያለማቋረጥ መጨመርን የሚገልጽ ትክክለኛ የኢኮኖሚ ቃል ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Foreign exchange / currency' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "የውጭ ምንዛሪ (Foreign exchange/currency - Accurate financial term)",
            "የሀገር ገንዘብ",
            "ብረት ሳንቲም",
            "የብር ኖት"
          ],
          "answerIndex": 0,
          "explanation": "«የውጭ ምንዛሪ» የሌሎች ሀገራትን ገንዘብና የገንዘብ ልውውጥን ያመለክታል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የኢኮኖሚና የንግድ ዘገባ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "የዋጋ ግሽበት፣ የውጭ ምንዛሪ፣ ኢንቨስትመንት፣ ምርታማነት እና የገበያ መረጋጋት።",
            "ወንበር፣ ጠረጴዛ እና ሳሎን።",
            "ቢጫ፣ አረንጓዴ እና ጥቁር።",
            "በአማርኛ የኢኮኖሚ ቃል የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የኢኮኖሚና የንግድ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ኢንቨስትመንት / Investment' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ኢንቨስትመንት"
          ],
          "explanation": "ትክክለኛው ቃል «ኢንቨስትመንት» (Investəmänt) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u23-l4": {
    "id": "am-u23-l4",
    "subject": "amharic",
    "unit": 23,
    "lessonNumber": 4,
    "title": "ቃለ-መጠይቅ እና የፕሬስ መግለጫ (Interviews & Press Conferences)",
    "level": "B2",
    "objective": "በጋዜጣዊ መግለጫና በቃለ-መጠይቅ ወቅት ጥያቄዎችንና ማብራሪያዎችን በሙያዊ መንገድ ማቅረብ።",
    "presentation": {
      "explanation": "የቃለ-መጠይቅ እና የፕሬስ መግለጫ አሰራር (Press Conferences & Interview Protocols):\n\n፩. ዋና ዋና የፕሬስ ቃላት:\n- ጋዜጣዊ መግለጫ (Press conference / press briefing)\n- ቃለ-መጠይቅ (Interview) / ጋዜጠኛ (Journalist)\n- ማብራሪያ (Clarification / explanation) / መግለጫ (Statement)\n- ማስተባበያ (Rebuttal / denial) / ይፋዊ ማረጋገጫ (Official confirmation)።\n\n፪. የጥያቄና መልስ ስነ-ስርዓት:\n- ጋዜጠኛ: «ክቡር ሚኒስትር፣ በቀጣይ እቅድ ዙሪያ ማብራሪያ ቢሰጡን?»\n- ቃል-አቀባይ: «በዝርዝር ለማብራራት ያህል...»።",
      "examples": [
        {
          "target": "የመንግሥት ኮሙኒኬሽን አገልግሎት ዛሬ ከሰዓት ጋዜጣዊ መግለጫ በመስጠት ወቅታዊ ሁኔታዎችን ያብራራል።",
          "reading": "Yämängəst komyunikešən agäglot zarre käsä'at gazet’awi mägläč’a bämäsət’ät’ wäqtawi hunetawoččən yabraral. [jɛmɛnˈɡɨst komjunikeˈʃɨn ʔaɡɛɡˈlot zaˈre kɛsɛˈʔat ɡazetʼaˈwi mɛɡlɛˈtʃʼa bɛmɛsɨˈtʼɛtʼ wɛkʼtaˈwi huˈnetawoˈtʃːɨn jabraˈral] (yeh-men-GUST kohm-yoo-nee-KAY-shun ah-geg-LOHT zah-RAY keh-seh-AHT gah-zay-t'ah-WEE meg-leh-CH'AH beh-meh-sut'-ET wehk'-tah-WEE hoo-nay-tah-wohch-CHUN yahb-rah-RAHL)",
          "translation": "The Government Communication Service will give a press conference this afternoon explaining current situations."
        },
        {
          "target": "ጋዜጠኛው ከታዋቂው ሳይንቲስት ጋር በአዳዲስ የህክምና ግኝቶች ዙሪያ ጥልቅ ቃለ-መጠይቅ አደረገ።",
          "reading": "Gazet’änyaw kätawaqiw sayəntist gar bə'adaddis yähəkkəmənna gənyətočč zuriya t’ələq qalä-mät’äyyəq adärrägä. [ɡazetʼɛˈɲaw kɛtawaˈkʼiw saˈjɨntist ɡar bɨʔadadːis jɛhɨkːɨmɨnːa ɡɨɲɨˈtotʃː zuˈrija tʼɨˈlɨkʼ kʼalɛmɛtʼɛjːɨkʼ ʔadɛrːɛˈɡɛ] (gah-zay-t'en-YAHW keh-tah-wah-K'EEW sah-YUN-teest gahr buh-ah-dahd-DEES yeh-huk-kuh-mun-NAH gun-yuh-TOHCH zoo-REE-yah t'uh-LUK' k'ah-leh-meh-t'ey-YUK' ah-der-reh-GEH)",
          "translation": "The journalist conducted an in-depth interview with the renown scientist regarding new medical discoveries."
        },
        {
          "target": "የቀረበው የተሳሳተ መረጃ በሚኒስቴሩ ቃል-አቀባይ በኩል ፈጣን ማስተባበያ ተሰጠበት።",
          "reading": "Yäqärräbäw yätäsasattä märäğa bäministew qal-aqäbay bäkkul fät’t’an mastäbabäya täsät’t’äbät. [jɛkʼɛrːɛˈbɛw jɛtɛsasatːɛ mɛrɛˈdʒa bɛminisˈtew kʼalʔakʼɛˈbaj bɛkːul fɛtʼːan mastɛbaˈbɛja tɛsɛtʼːɛˈbɛt] (yeh-k'er-reh-BEH-woo yeh-teh-sah-saht-TEH meh-reh-JAH beh-mee-nees-TAY-woo k'ahl-ah-k'eh-BYE bek-KOOL fet'-T'AHN mahs-teh-bah-beh-YAH teh-set'-t'eh-BET)",
          "translation": "The incorrect information presented was given a prompt rebuttal through the ministry's spokesperson."
        }
      ],
      "mnemonics": [
        "Press Protocols: ጋዜጣዊ መግለጫ (Press conference) + ቃለ-መጠይቅ (Interview) + ቃል-አቀባይ (Spokesperson)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ጋዜጣዊ መግለጫዎች ወቅት ጋዜጠኞች ጥያቄዎቻቸውን በአክብሮታዊ የአማርኛ አጠራር (ክቡር/ክብርት) ማቅረብ የተለመደ የሙያ ስነ-ምግባር ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Press conference» የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ጋዜጣዊ መግለጫ (Press conference - Standard media briefing term)",
            "የግል ንግግር",
            "የስልክ ጥሪ",
            "ምንም መግለጫ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ጋዜጣዊ መግለጫ» ለመገናኛ ብዙሃን ባለሙያዎች የሚሰጥ ይፋዊ ማብራሪያ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Interview' የሚለውን በአማርኛ የጋዜጠኝነት ቋንቋ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ቃለ-መጠይቅ (Interview - Standard journalistic term)",
            "ውይይት ብቻ",
            "ክርክር",
            "ዝምታ"
          ],
          "answerIndex": 0,
          "explanation": "«ቃለ-መጠይቅ» የአንድን ግለሰብ ዕውቀት ወይም አስተያየት በጥያቄና መልስ ለመሰብሰብ የሚደረግ ጋዜጣዊ ስራ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የቃለ-መጠይቅ እና የፕሬስ መግለጫ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ጋዜጣዊ መግለጫ፣ ቃለ-መጠይቅ፣ ጋዜጠኛ፣ ቃል-አቀባይ እና ማስተባበያ።",
            "ሰዓት፣ ደቂቃ እና ሰከንድ።",
            "መጽሐፍ፣ ብዕር እና ወረቀት።",
            "በአማርኛ ቃለ-መጠይቅ አይባልም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የፕሬስና የቃለ-መጠይቅ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ጋዜጠኛ / Journalist' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ጋዜጠኛ"
          ],
          "explanation": "ትክክለኛው ቃል «ጋዜጠኛ» (Gazet’änya) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u23-l5": {
    "id": "am-u23-l5",
    "subject": "amharic",
    "unit": 23,
    "lessonNumber": 5,
    "title": "የክፍል 23 አጠቃላይ ማጠቃለያ (Unit 23 Grand Synthesis & Complete Journalistic Broadcast)",
    "level": "B2",
    "objective": "ዜናዎችን፣ የዲፕሎማሲ መግለጫዎችን፣ የኢኮኖሚ ዘገባዎችንና ቃለ-መጠይቆችን ያቀናጀ የተሟላ የሚዲያ ስርጭት ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፳፫ አጠቃላይ የሚዲያና የጋዜጠኝነት ቋንቋ ውህደት ማጠቃለያ:\n\n፩. የዜና መዋቅር:\n- ሰበር ዜና፣ የቀጥታ ስርጭት፣ አርዕስተ ዜና፣ ዘገባ።\n\n፪. የዲፕሎማሲ ቋንቋ:\n- ዲፕሎማሲያዊ ግንኙነት፣ አምባሳደር፣ የሁለትዮሽ ውይይት፣ ሉዓላዊነት።\n\n፫. የኢኮኖሚ ዘገባ:\n- የዋጋ ግሽበት፣ የውጭ ምንዛሪ፣ ኢንቨስትመንት፣ ምርታማነት።\n\n፬. የፕሬስ ስነ-ስርዓት:\n- ጋዜጣዊ መግለጫ፣ ቃለ-መጠይቅ፣ ቃል-አቀባይ፣ ማብራሪያ።",
      "examples": [
        {
          "target": "በቀጥታ ስርጭት: የውጭ ጉዳይ ሚኒስቴር በሰጠው ጋዜጣዊ መግለጫ የዲፕሎማሲና የኢኮኖሚ ትብብር ስምምነቶች መፈረማቸውን አስታወቀ።",
          "reading": "Bäqət’t’əta sərč’ət: Yäwəč’ gudday minister bäsät’t’äw gazet’awi mägläč’a yädipəlomasəyənna yä'ikonomi təbbəbər səməmmənätočč mäfärrämaččäwən astawwäqä. [bɛkʼɨtʼːɨˈta sɨrtʃʼɨt jɛwɨtʃʼ ɡudˈdaj minisˈter bɛsɛtʼːɛw ɡazetʼaˈwi mɛɡlɛˈtʃʼa jɛdiplomasiˈjɨnːa jɛʔikonoˈmi tɨbːɨˈbɨr sɨmɨmːɨnɛˈtotʃː mɛfɛrːɛmaˈtʃːɛwɨn ʔastawːɛˈkʼɛ] (beh-k'ut'-t'uh-TAH sur-ch'ut: yeh-wuch' good-DYE mee-nees-TER beh-set'-t'eh-WOO gah-zay-t'ah-WEE meg-leh-CH'AH yeh-deep-loh-mah-see-YUN-nah yeh-ee-koh-noh-MEE tub-buh-BUR suh-mum-muh-neh-TOHCH meh-fer-reh-mahch-CHEW-un ahs-taw-weh-K'EH)",
          "translation": "On live broadcast: In a press conference given by the Ministry of Foreign Affairs, it announced that diplomatic and economic cooperation agreements were signed."
        },
        {
          "target": "በቃለ-መጠይቁ ወቅት ባለሀብቱ በሀገሪቱ የኢንቨስትመንት ምቹ ሁኔታ ላይ ሰፊ ማብራሪያ ሰጡ።",
          "reading": "Bäqalä-mät’äyyəqu wäqt balähəbət’u bähagäritu yä'investəmänt məčču huneta lay säffi mabrarəya sät’t’u. [bɛkʼalɛmɛtʼɛjːɨˈkʼu wɛkʼt balɛhɨbɨˈtʼu bɛhaɡɛˈritu jɛʔinvestɨˈmɛnt mɨtʃːu huˈneta laj sɛfːi mabrarɨˈja sɛtʼːu] (beh-k'ah-leh-meh-t'ey-yuh-K'OO wehk'-T bah-leh-hub-T'OO beh-hah-geh-REE-too yeh-een-vest-MENT much-CHOO hoo-nay-TAH lye SEF-fee mahb-rah-ruh-YAH set'-TOO)",
          "translation": "During the interview, the investor provided extensive clarification regarding the favorable investment climate in the country."
        },
        {
          "target": "የሀገር ውስጥ ምርታማነት ማደግ የውጭ ምንዛሪ ግኝትን እንደሚያሳድግ የኢኮኖሚ ዘገባው አመላከተ።",
          "reading": "Yähagär wəst’ mərt’aminnät madäg yäwəč’ mənzari gənyətən əndämmiyasadəg yä'ikonomi zägäbaw amälakkätä. [jɛhaˈɡɛr wɨstʼ mɨrtʼaˈminːɛt maˈdɛɡ jɛwɨtʃʼ mɨnzaˈri ɡɨɲɨˈtɨn ʔɨndɛmːijasaˈdɨɡ jɛʔikonoˈmi zɛɡɛˈbaw ʔamɛlakːɛˈtɛ] (yeh-hah-GER woos-T' mur-t'ah-MEEN-net mah-DEG yeh-wuch' mun-zah-REE gun-yuh-TUN un-dem-meey-ahs-ah-DUG yeh-ee-koh-noh-MEE zeh-geh-BAHW ah-mel-lahk-keh-TEH)",
          "translation": "The economic report indicated that the growth of domestic productivity will increase foreign exchange earnings."
        }
      ],
      "mnemonics": [
        "Broadcaster Grand Synthesis: Live (ስርጭት) + Diplomacy (ዲፕሎማሲ) + Economy (ኢኮኖሚ) + Press (መግለጫ)!"
      ],
      "culturalNotes": [
        "የአማርኛ የሚዲያ እና የጋዜጠኝነት ቋንቋ ህዝባዊ መረጃዎችን፣ ዲፕሎማሲያዊ ግንኙነቶችንና የኢኮኖሚ ትንተናዎችን በከፍተኛ ጥራትና ኃላፊነት የማቅረብ ረጅም የታሪክ ባህል አለው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የሚዲያ ዘገባ አወቃቀር የያዘው የትኛው ነው?",
          "options": [
            "ሰበር ዜና: በጋዜጣዊ መግለጫው የዲፕሎማሲ እና የኢኮኖሚ ስምምነት መፈረሙ ተገለጸ። (Complete media report structure with headlines, diplomatic terms, and press statement)",
            "ምንም ዜና የለም",
            "ሁሉም ተራ ወሬ ነው",
            "መግለጫ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ አርዕስተ ዜናን (ሰበር ዜና)፣ ፕሬስን (ጋዜጣዊ መግለጫ) እና ዲፕሎማሲያዊ ይዘትን በአንድነት ያጣመረ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "የኢኮኖሚ እና የሚዲያ ቃላትን ያጣመረ ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "የኢኮኖሚ ዘገባው የውጭ ምንዛሪ እና የኢንቨስትመንት እድገትን በዝርዝር አብራራ። (The economic report explained foreign exchange and investment growth in detail - Accurate integrated sentence)",
            "ምንም ዘገባ አልቀረበም",
            "ገንዘብ የለም",
            "ኢንቨስትመንት የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የሚዲያ ዘገባን እና የኢኮኖሚ ቃላትን በትክክል ያቀናጃል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 23 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የዜና ዘገባና አርዕስተ ዜና፣ የፖለቲካና ዲፕሎማሲ መግለጫዎች፣ የኢኮኖሚና ገበያ ቃላት፣ እንዲሁም ቃለ-መጠይቅና ጋዜጣዊ መግለጫ ተካተዋል።",
            "ይህ ክፍል ስለ ሙዚቃ ብቻ ነው።",
            "በአማርኛ ጋዜጣዊ መግለጫ አይሰጥም።",
            "ሁሉም ዜናዎች ተራ አሉባልታ ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 23ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ጋዜጠኝነት / Journalism' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ጋዜጠኝነት"
          ],
          "explanation": "ትክክለኛው ቃል «ጋዜጠኝነት» (Gazet’änyənnät) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u24-l1": {
    "id": "am-u24-l1",
    "subject": "amharic",
    "unit": 24,
    "lessonNumber": 1,
    "title": "የመንግሥትና የድርጅት ደብዳቤ ቅርፅ እና አርዕስት (Official Letter Formats & Headers)",
    "level": "B2",
    "objective": "የኦፊሴላዊ ደብዳቤ ቅርፅን (ለ...፣ ከ...፣ ቀን፣ ጉዳዩ፣ የተከበሩ/ክቡር፣ ከሰላምታ ጋር) በመደበኛ የአጻጻፍ ስልት ማዘጋጀት።",
    "presentation": {
      "explanation": "የመንግሥትና የድርጅት ኦፊሴላዊ ደብዳቤ አወቃቀር (Official Letter Structure):\n\n፩. የደብዳቤ ራስጌና አድራሻ (Header & Address):\n- «ለ:» (To: [የተቀባዩ ስም እና የሥራ ኃላፊነት])\n- «ከ:» (From: [የላኪው ስም/መስሪያ ቤት])\n- «ቀን:» (Date [በኢትዮጵያ ወይም በጎርጎሮሳውያን የቀን አቆጣጠር])\n- «ጉዳዩ:» (Subject / Re: [የደብዳቤው ዋና ጭብጥ በአጭሩ])።\n\n፪. የሰላምታ እና የማጠቃለያ ቀመሮች:\n- መግቢያ: «የተከበሩ / ክቡር አቶ/ወ/ሮ...»\n- መዝጊያ: «ከሰላምታ ጋር» / «ከአክብሮት ሰላምታ ጋር»።",
      "examples": [
        {
          "target": "ጉዳዩ: የቢሮ ቁሳቁስ ግዢ ጥያቄን በይፋ ማቅረብን ይመለከታል።",
          "reading": "Guddayu: yäbiro qusaqus gəžye t’əyyaqen bäyəfa maqräbən yəmäläkkätal. [ɡuddaˈju jɛbiˈro kʼusakʼus ɡɨʒˈje tʼɨjːaˈkʼen bɛjɨˈfa makʼrɛˈbɨn jɨmɛlɛkːɛˈtal] (good-dah-YOO: yeh-bee-ROH k'oo-sah-K'OOS guzh-YAY t'uy-yah-K'AYN beh-yuh-FAH mahk'-reh-BUN yuh-mel-lehk-keh-TAHL)",
          "translation": "Subject: Refers to submitting an official request for office supplies procurement."
        },
        {
          "target": "ለተከበሩ የመምሪያው ኃላፊ የተጻፈው ይፋዊ ደብዳቤ በዛሬው ዕለት በዋና ጸሐፊው በኩል ደርሷል።",
          "reading": "Lätäkabbäru yämämməriyaw halafi yätäts’afäw yəfawi däbdabbe bäzarrew ələt bäwana ts’ähafiw bäkkul därswal. [lɛtɛkɛbːɛˈru jɛmɛmːɨriˈjaw haˈlafi jɛtɛtsʼaˈfɛw jɨfaˈwi dɛbdaˈbːe bɛzaˈrew ʔɨˈlɨt bɛwaˈna tsʼɛhaˈfiw bɛkːul dɛrˈswal] (leh-teh-keb-beh-ROO yeh-mem-muh-ree-YAHW hah-LAH-fee yeh-tets'-AH-few yuh-fah-WEE deb-dahb-BAY beh-zah-RAY-woo uh-LUT beh-wah-NAH ts'eh-hah-FEEW bek-KOOL der-SWAHL)",
          "translation": "The official letter written to the honorable department head has arrived today through the chief secretary."
        },
        {
          "target": "ደብዳቤው ሲዘጋጅ «ከአክብሮት ሰላምታ ጋር» የሚለው መደበኛ የአስተዳደር ስነ-ስርዓት ተካቷል።",
          "reading": "Däbdabbew sizäggağğ «kä'akəbrot sälamta gar» yämmilaw mädäbbänya yä'astädadär sənä-sər'at täkattwal. [dɛbdaˈbːew sizɛɡːadʒ «kɛʔakɨbˈrot sɛlamˈta ɡar» jɛmːiˈlɛw mɛdɛbːɛˈɲa jɛʔastɛdaˈdɛr sɨnɛsɨrˈʔat tɛkatːˈwal] (deb-dahb-BAY-woo see-zeg-GAHJ «keh-ah-kub-ROHT seh-lahm-TAH gahr» yem-mee-LEW meh-deb-ben-YAH yeh-ahs-teh-dah-DER suh-neh-sur-AHT teh-kaht-TWAHL)",
          "translation": "When the letter was prepared, the standard administrative formality saying 'With respectful greetings' was included."
        }
      ],
      "mnemonics": [
        "Letter Flow: ለ (To) -> ጉዳዩ (Subject) -> ክቡር (Honorable) -> ከአክብሮት ጋር (Respectfully)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ የመንግሥትና የድርጅት አስተዳደራዊ ደብዳቤዎች ላይ 'ጉዳዩ' (Subject) የሚለው ቃል በደማቅ ወይም ተሰምሮበት በግልጽ መቀመጡ የግዴታ ህግ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Subject: / Re:» የሚለውን በአማርኛ ይፋዊ ደብዳቤ አጻጻፍ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ጉዳዩ: (Subject / Re: - Official letter header)",
            "ወሬው:",
            "መልእክቱ:",
            "ምንም ጉዳይ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ጉዳዩ:» በደብዳቤው ላይ የሚብራራውን ዋና ርዕስ ለማመልከት የሚሠራበት መደበኛ ቃል ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'With respectful greetings' የሚለውን የደብዳቤ መዝጊያ ቃል በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ከአክብሮት ሰላምታ ጋር (With respectful greetings - Formal sign-off)",
            "ቻው",
            "ደህና ሁን",
            "ሰላም"
          ],
          "answerIndex": 0,
          "explanation": "«ከአክብሮት ሰላምታ ጋር» በኦፊሴላዊ ደብዳቤ ማጠቃለያ ላይ የሚገባ ህጋዊና ጨዋ አገላለጽ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የይፋዊ ደብዳቤ ዋና ዋና ክፍሎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ለ...፣ ከ...፣ ቀን፣ ጉዳዩ፣ ክቡር/የተከበሩ እና ከአክብሮት ሰላምታ ጋር።",
            "ጨው፣ በርበሬ እና ዘይት።",
            "እግር ኳስ፣ መረብ ኳስ እና ቅርጫት ኳስ።",
            "በአማርኛ የደብዳቤ ቅርፅ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የመደበኛ አስተዳደራዊ ደብዳቤ ክፍሎችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ደብዳቤ / Letter' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ደብዳቤ"
          ],
          "explanation": "ትክክለኛው ቃል «ደብዳቤ» (Däbdabbe) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u24-l2": {
    "id": "am-u24-l2",
    "subject": "amharic",
    "unit": 24,
    "lessonNumber": 2,
    "title": "የማመልከቻ እና የጥያቄ ደብዳቤዎች (Applications, Petitions & Requests)",
    "level": "B2",
    "objective": "የስራ፣ የትምህርት፣ የፍቃድ ወይም የዕረፍት ማመልከቻዎችን በይፋዊ የአማርኛ አገባብ ማዘጋጀት።",
    "presentation": {
      "explanation": "የማመልከቻ እና የአቤቱታ ደብዳቤዎች አጻጻፍ (Writing Formal Applications):\n\n፩. የማመልከቻ ዋና ዋና አካላት:\n- አመልካች (Applicant) / ማመልከቻ (Application)\n- የስራ ልምድ (Work experience) / የትምህርት ማስረጃ (Educational credentials)\n- የፍቃድ ጥያቄ (Leave / permission request) / አቤቱታ (Petition / grievance)።\n\n፪. የትህትና እና የጥያቄ አገላለጾች:\n- «...እንዲፈቀድልኝ በአክብሮት እጠይቃለሁ» (I respectfully request that it be granted to me)\n- «...ስል በትህትና አመለክታለሁ» (I humbly apply, stating...)",
      "examples": [
        {
          "target": "ጉዳዩ: የዓመት የዕረፍት ፈቃድ ጥያቄን በአክብሮት ስለማቅረብ።",
          "reading": "Guddayu: yä'amät yä'ərəft fäqad t’əyyaqen bä'akəbrot səlämaqräb. [ɡuddaˈju jɛʔaˈmɛt jɛʔɨrɨft fɛˈkʼad tʼɨjːaˈkʼen bɛʔakɨbˈrot sɨlɛmakʼˈrɛb] (good-dah-YOO: yeh-ah-MET yeh-uh-RUFT feh-K'AHD t'uy-yah-K'AYN beh-ah-kub-ROHT sul-leh-mahk'-REB)",
          "translation": "Subject: Respectfully submitting an annual vacation leave request."
        },
        {
          "target": "አመልካቹ አስፈላጊውን የትምህርት ማስረጃ እና የስራ ልምድ ሰነድ ከማመልከቻው ጋር አያይዟል።",
          "reading": "Amälkaču asfällagiwən yätəməhərt masräğa ənna yäsəra ləmd sänäd kämamälkäčaw gar ayyayəzwal. [ʔamɛlkaˈtʃu ʔasfɛlːaɡiˈwɨn jɛtɨmɨhɨrt masrɛˈdʒa ʔɨnːa jɛsɨˈra lɨmd sɛˈnɛd kɛmamɛlkɛˈtʃaw ɡar ʔajːajɨzˈwal] (ah-mel-kah-CHOO ahs-fel-lah-GEE-wun yeh-tuh-muh-hur-T mahs-reh-JAH un-nah yeh-suh-RAH lum-D seh-NED keh-mah-mel-keh-CHAHW gahr eye-yah-yuz-WAHL)",
          "translation": "The applicant attached the necessary educational credentials and work experience document with his application."
        },
        {
          "target": "የቀረበውን አቤቱታ አስተዳደሩ በጥንቃቄ መርምሮ ተገቢውን ምላሽ በደብዳቤ ሰጠ።",
          "reading": "Yäqärräbäwən abetuta astädadäru bät’ənqaqqe märəməro tägäbiwən məlaš bädäbdabbe sät’t’ä. [jɛkʼɛrːɛbɛˈwɨn ʔabetuˈta ʔastɛdaˈdɛru bɛtʼɨnkʼakʼːe mɛrɨmɨˈro tɛɡɛbiˈwɨn mɨˈlaʃ bɛdɛbdaˈbːe sɛtʼːɛ] (yeh-k'er-reh-beh-WUN ah-bay-too-TAH ahs-teh-dah-deh-ROO beh-t'un-k'ahk'-K'AY meh-ruh-muh-ROH teh-geh-BEE-wun muh-LAHSH beh-deb-dahb-BAY set'-t'EH)",
          "translation": "The administration carefully examined the petition submitted and provided an appropriate reply by letter."
        }
      ],
      "mnemonics": [
        "Application Recipe: አመልካች (Applicant) + ማስረጃ (Credentials) + እንዲፈቀድልኝ (May it be granted)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ የስራ ማመልከቻ ሲጻፍ 'እንዲፈቀድልኝ በትህትና እጠይቃለሁ' የሚለው ቀመር የመልካም ስነ-ምግባር መገለጫ ተደርጎ ይወሰዳል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Application» የሚለውን በአማርኛ አስተዳደራዊ ቋንቋ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ማመልከቻ (Application - Formal administrative term)",
            "የግል ታሪክ",
            "ስዕል",
            "ምንም አይደለም"
          ],
          "answerIndex": 0,
          "explanation": "«ማመልከቻ» ለአንድ መስሪያ ቤት ወይም ድርጅት በይፋ የሚቀርብ የጥያቄ ሰነድ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Educational credentials' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "የትምህርት ማስረጃ (Educational credentials / certificate)",
            "የቤት እቃ",
            "የመኪና ቁልፍ",
            "ገንዘብ"
          ],
          "answerIndex": 0,
          "explanation": "«የትምህርት ማስረጃ» የትምህርት ደረጃን የሚያረጋግጥ ይፋዊ ሰነድ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የማመልከቻ እና የጥያቄ ደብዳቤ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "አመልካች፣ ማመልከቻ፣ የትምህርት ማስረጃ፣ የስራ ልምድ እና አቤቱታ።",
            "ስኳር፣ ጨው፣ ሻይ እና ቡና።",
            "ሰማያዊ፣ ቀይ እና ጥቁር።",
            "በአማርኛ ማመልከቻ አይጻፍም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የማመልከቻ ደብዳቤ ዋና ዋና ቃላትን በሙሉ ያካትታል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ማመልከቻ / Application' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ማመልከቻ"
          ],
          "explanation": "ትክክለኛው ቃል «ማመልከቻ» (Mamälkäča) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u24-l3": {
    "id": "am-u24-l3",
    "subject": "amharic",
    "unit": 24,
    "lessonNumber": 3,
    "title": "የውል፣ የስምምነት እና የመመሪያ ሰነዶች (Contracts, Agreements & Directives)",
    "level": "B2",
    "objective": "የውል ስምምነቶችን፣ ግዴታዎችንና የአስተዳደር መመሪያዎችን የህግ ቋንቋ መረዳትና ማዋቀር።",
    "presentation": {
      "explanation": "የውል፣ የስምምነት እና የመመሪያ ሰነዶች አገባብ (Contracts & Administrative Legal Documents):\n\n፩. ዋና ዋና የውልና ስምምነት ቃላት:\n- የውል ስምምነት (Contract agreement) / ተዋዋይ ወገኖች (Contracting parties)\n- ግዴታ (Obligation) / መብት (Right) / ኃላፊነት (Responsibility)\n- የአስተዳደር መመሪያ (Administrative directive) / ድንጋጌ (Statute / provision)\n- ውል አፍራሽ (Breach of contract) / የቅጣት ውሳኔ (Penalty clause)።\n\n፪. ህጋዊ የአረፍተ ነገር ቀመሮች:\n- «ሁለቱ ተዋዋይ ወገኖች በሚከተሉት ነጥቦች ላይ ተስማምተዋል...»\n- «ይህ ውል በሁለቱም ወገኖች ፊርማ ከጸደቀበት ቀን ጀምሮ የጸና ይሆናል...»",
      "examples": [
        {
          "target": "ሁለቱ ተዋዋይ ወገኖች በውሉ ውስጥ የተመለከቱትን ግዴታዎች በሙሉ ለማክበር ተስማምተዋል።",
          "reading": "Hulättu täwaway wägänočč bäwulu wəst’ yätämälakkätutən gəddetawočč bämullu lämäkbär täsmamtäwal. [hulɛtːu tɛwaˈwaj wɛɡɛˈnotʃː bɛwuˈlu wɨstʼ jɛtɛmɛlakːɛˈtutɨn ɡɨdːetawoˈtʃːɨn bɛmulːu ləmɛkˈbɛr tɛsmamˈtɛwal] (hoo-let-TOO teh-wah-WYE weh-geh-NOHCH beh-woo-LOO woos-T' yeh-teh-mel-lahk-keh-TOO-tun gud-day-tah-wohch-CHUN beh-mool-LOO luh-mek-BER tes-mahm-TEH-wahl)",
          "translation": "The two contracting parties agreed to fulfill all obligations specified in the contract."
        },
        {
          "target": "አዲሱ የአስተዳደር መመሪያ በሁሉም የመንግሥት መስሪያ ቤቶች ውስጥ ተግባራዊ እንዲሆን ታዘዘ።",
          "reading": "Addisu yä'astädadär mämäriya bähullum yämängəst mäsriya betočč wəst’ tägbrawi əndihon tazäzä. [ʔadːiˈsu jɛʔastɛdaˈdɛr mɛmɛriˈja bɛhulːum jɛmɛnˈɡɨst mɛsriˈja betotʃː wɨstʼ tɛɡbraˈwi ʔɨndiˈhon tazɛˈzɛ] (ahd-DEE-soo yeh-ahs-teh-dah-DER meh-meh-ree-YAH beh-hool-LOOM yeh-men-GUST mes-ree-YAH bay-TOHCH woos-T' teg-brah-WEE un-dee-HOHN tah-zeh-ZEH)",
          "translation": "The new administrative directive was ordered to be implemented in all government offices."
        },
        {
          "target": "ይህ የቤት ኪራይ ውል ስምምነት በሁለቱም ወገኖች ፊርማ ከጸደቀበት ቀን ጀምሮ የጸና ይሆናል።",
          "reading": "Yəh yäbet kiray wul səməmmənät bähulättum wägänočč firma käts’äddäqäbät qän ğämməro yäts’änna yəhonal. [jɨh jɛbet kiˈraj wul sɨmɨmːɨˈnɛt bɛhulɛtːum wɛɡɛˈnotʃː firˈma kɛtsʼɛdːɛkʼɛˈbɛt kʼɛn dʒɛmːɨˈro jɛtsʼɛnːa jɨhoˈnal] (yuh yeh-BAYT kee-RYE wool suh-mum-muh-NET beh-hoo-let-TOOM weh-geh-NOHCH feer-MAH keh-ts'ed-dek'-eh-BET k'en jem-muh-ROH yeh-ts'en-NAH yuh-hoh-NAHL)",
          "translation": "This house lease contract agreement shall be valid starting from the day it is ratified by the signatures of both parties."
        }
      ],
      "mnemonics": [
        "Contract Pillars: ውል (Contract) + ተዋዋይ (Parties) + ግዴታ (Obligation) + የጸና (Valid)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ህግ የውል ስምምነቶች ህጋዊ ተቀባይነት እንዲኖራቸው የውልና ማስረጃ ምዝገባ ኤጀንሲ ማህተም እና የሁለት ምስክሮች ፊርማ ያስፈልጋቸዋል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Contract agreement» የሚለውን በአማርኛ አስተዳደራዊ እና ህጋዊ ቃል በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "የውል ስምምነት (Contract agreement - Formal legal and administrative term)",
            "የቃል ወሬ",
            "የጨዋታ ህግ",
            "ምንም ውል የለም"
          ],
          "answerIndex": 0,
          "explanation": "«የውል ስምምነት» በሁለት ወገኖች መካከል መብትና ግዴታን የሚደነግግ ይፋዊ የህግ ሰነድ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Contracting parties' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ተዋዋይ ወገኖች (Contracting parties - Accurate legal terminology)",
            "ተመልካቾች",
            "እንግዶች",
            "መንገደኞች"
          ],
          "answerIndex": 0,
          "explanation": "«ተዋዋይ ወገኖች» ውሉን የተፈራረሙትን አካላት የሚያመለክት መደበኛ የህግ ቃል ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የውል እና የስምምነት ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "የውል ስምምነት፣ ተዋዋይ ወገኖች፣ ግዴታ፣ የአስተዳደር መመሪያ እና ፊርማ።",
            "ጫማ፣ ካልሲ፣ ሱሪ እና ሸሚዝ።",
            "ወንዝ፣ ተራራ፣ ሸለቆ እና ሜዳ።",
            "በአማርኛ የውል ሰነድ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የውልና የአስተዳደር መመሪያ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ስምምነት / Agreement' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ስምምነት"
          ],
          "explanation": "ትክክለኛው ቃል «ስምምነት» (Səməmmənät) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u24-l4": {
    "id": "am-u24-l4",
    "subject": "amharic",
    "unit": 24,
    "lessonNumber": 4,
    "title": "የስብሰባ ቃለ-ጉባኤ እና ሪፖርት አዘገጃጀት (Meeting Minutes & Administrative Reports)",
    "level": "B2",
    "objective": "የስብሰባ አጀንዳዎችን፣ ውሳኔዎችን፣ የተሰብሳቢዎችን ስም ዝርዝርና ቃለ-ጉባኤን በመደበኛ ስልት መመዝገብ።",
    "presentation": {
      "explanation": "የስብሰባ ቃለ-ጉባኤ እና ሪፖርት አዘገጃጀት መርሆዎች (Meeting Minutes & Reporting):\n\n፩. የቃለ-ጉባኤ ዋና ዋና ክፍሎች:\n- ቃለ-ጉባኤ (Minutes of meeting) / አጀንዳ (Agenda)\n- ሰብሳቢ (Chairperson) / ጸሐፊ (Secretary)\n- ተሰብሳቢዎች (Attendees / participants) / ውሳኔ (Resolution / decision)\n- የድርጊት መርሃ-ግብር (Action plan) / ሪፖርት (Report)።\n\n፪. የመመዝገቢያ አገባብ:\n- «ስብሰባው በተያዘው አጀንዳ መሰረት በ... ሰዓት ተጀመረ...»\n- «በቀረበው ሪፖርት ላይ ሰፊ ውይይት ከተደረገ በኋላ የሚከተሉት ውሳኔዎች ተላልፈዋል...»",
      "examples": [
        {
          "target": "ስብሰባው በተያዘው አጀንዳ መሰረት በቦርዱ ሰብሳቢ መሪነት በይፋ ተከፈተ።",
          "reading": "Səbsäbaw bätäyazäw ağända mäsərät bäbordu säbsabi märinnät bäyəfa täkäffätä. [sɨbsɛˈbaw bɛtɛjaˈzɛw ʔadʒɛnˈda mɛsɨˈrɛt bɛborˈdu sɛbˈsabi mɛrinːɛt bɛjɨˈfa tɛkɛfːɛˈtɛ] (sub-seh-BAHW beh-teh-yah-ZEW ah-jen-DAH meh-suh-RET beh-bohr-DOO seb-SAH-bee meh-reen-NET beh-yuh-FAH teh-kef-feh-TEH)",
          "translation": "The meeting was officially opened under the leadership of the board chairperson according to the agenda."
        },
        {
          "target": "ጸሐፊዋ የስብሰባውን ቃለ-ጉባኤ በዝርዝር በመመዝገብ ለተሰብሳቢዎቹ በሙሉ አሰራጨች።",
          "reading": "Ts’ähafiwa yäsəbsäbawən qalä-guba'e bəzərəzzər bämämmäzgäb lätäsäbsabiwočču bämullu asəraččäčč. [tsʼɛhaˈfiwa jɛsɨbsɛˈbawɨn kʼalɛɡubaˈʔe bɨzɨrɨzːɨr bɛmɛmːɛzˈɡɛb lətɛsɛbsabiwoˈtʃːu bɛmulːu ʔasɨraˈtʃːɛtʃː] (ts'eh-hah-FEE-wah yeh-sub-seh-BAH-wun k'ah-leh-goo-bah-AY buh-zuh-ruz-ZUR beh-mem-mez-GEB luh-teh-seb-sah-bee-wohch-CHOO beh-mool-LOO ahs-rahch-CHEHCH)",
          "translation": "The secretary recorded the meeting minutes in detail and distributed them to all attendees."
        },
        {
          "target": "በስብሰባው ማጠቃለያ ላይ በቀጣይ የድርጊት መርሃ-ግብር ዙሪያ የጋራ ውሳኔ ተላለፈ።",
          "reading": "Bäsəbsäbaw mat’äqqaläya lay bäqät’ay yädərgitočč märəha-gəbər zuriya yägara wəsane tälalläfä. [bɛsɨbsɛˈbaw matʼɛkʼːalɛˈja laj bɛkʼɛˈtʼaj jɛdɨrɡiˈtotʃː mɛrɨhaɡɨˈbɨr zuˈrija jɛɡaˈra wɨsaˈne tɛlalːɛˈfɛ] (beh-sub-seh-BAHW maht'-ek'-k'ah-leh-YAH lye beh-k'eh-T'YE yeh-dur-gee-TOHCH meh-ruh-hah-guh-BUR zoo-REE-yah yeh-gah-RAH wuh-sah-NAY teh-lahl-leh-FEH)",
          "translation": "At the conclusion of the meeting, a joint decision was passed regarding the upcoming action plan."
        }
      ],
      "mnemonics": [
        "Minutes Chain: አጀንዳ (Agenda) -> ሰብሳቢ (Chair) -> ቃለ-ጉባኤ (Minutes) -> ውሳኔ (Decision)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ድርጅታዊ ባህል የስብሰባ ቃለ-ጉባኤ በሁሉም ተሳታፊዎች ወይም በሰብሳቢውና በጸሐፊው ፊርማ ተረጋግጦ በማህደር ይቀመጣል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Minutes of meeting» የሚለውን በአማርኛ አስተዳደራዊ ቋንቋ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ቃለ-ጉባኤ (Minutes of meeting - Administrative record term)",
            "የስብሰባ ወሬ",
            "የአዳራሽ ቁልፍ",
            "ምንም ሰነድ የለም"
          ],
          "answerIndex": 0,
          "explanation": "«ቃለ-ጉባኤ» በስብሰባ ወቅት የተነሱትን ነጥቦችና የተላለፉትን ውሳኔዎች በጽሁፍ የሚያሰፍር ይፋዊ ሰነድ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Agenda' የሚለውን በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "አጀንዳ (Agenda - Standard meeting topic list)",
            "የስብሰባ ሰዓት ብቻ",
            "ምሳ",
            "እረፍት"
          ],
          "answerIndex": 0,
          "explanation": "«አጀንዳ» በስብሰባው ላይ የሚወያዩባቸውን ርዕሰ ጉዳዮች ዝርዝር ያመለክታል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የስብሰባ ቃለ-ጉባኤ ክፍሎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "አጀንዳ፣ ሰብሳቢ፣ ጸሐፊ፣ ተሰብሳቢዎች፣ ቃለ-ጉባኤ እና ውሳኔ።",
            "ብርቱካን፣ ሎሚ፣ ማንጎ እና ሙዝ።",
            "ወንበር፣ ጠረጴዛ እና ሰሌዳ።",
            "በአማርኛ ቃለ-ጉባኤ አይጻፍም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የስብሰባ አስተዳደራዊ ሰነድ ክፍሎችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቃለ-ጉባኤ / Minutes of meeting' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቃለ-ጉባኤ",
            "ቃለ ጉባኤ"
          ],
          "explanation": "ትክክለኛው ቃል «ቃለ-ጉባኤ» (Qalä-guba'e) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u24-l5": {
    "id": "am-u24-l5",
    "subject": "amharic",
    "unit": 24,
    "lessonNumber": 5,
    "title": "የክፍል 24 አጠቃላይ ማጠቃለያ (Unit 24 Grand Synthesis & Administrative Office Correspondence)",
    "level": "B2",
    "objective": "ይፋዊ ደብዳቤዎችን፣ ማመልከቻዎችን፣ የውል ስምምነቶችንና የስብሰባ ቃለ-ጉባኤዎችን ያቀናጀ የተሟላ አስተዳደራዊ ተግባቦት ማከናወን።",
    "presentation": {
      "explanation": "የክፍል ፳፬ አጠቃላይ የአስተዳደራዊ እና የኦፊሴላዊ ደብዳቤዎች ማጠቃለያ:\n\n፩. የደብዳቤ ቅርፅ:\n- ለ...፣ ከ...፣ ቀን፣ ጉዳዩ፣ ክቡር/የተከበሩ፣ ከአክብሮት ሰላምታ ጋር።\n\n፪. ማመልከቻና አቤቱታ:\n- አመልካች፣ የትምህርት ማስረጃ፣ የስራ ልምድ፣ እንዲፈቀድልኝ በትህትና እጠይቃለሁ።\n\n፫. ውልና ስምምነት:\n- ተዋዋይ ወገኖች፣ ግዴታ፣ መብት፣ መመሪያ፣ የጸና ይሆናል።\n\n፬. ቃለ-ጉባኤና ሪፖርት:\n- አጀንዳ፣ ሰብሳቢ፣ ጸሐፊ፣ ተሰብሳቢዎች፣ ውሳኔ።",
      "examples": [
        {
          "target": "ጉዳዩ: የድርጅቱን የስብሰባ ቃለ-ጉባኤ እና አዲሱን የውል ስምምነት መመሪያ ማሳወቅን ይመለከታል።",
          "reading": "Guddayu: yädərəğğətun yäsəbsäba qalä-guba'e ənna addisun yäwul səməmmənät mämäriya masawäqən yəmäläkkätal. [ɡuddaˈju jɛdɨrɨdʒːɨˈtun jɛsɨbsɛˈba kʼalɛɡubaˈʔe ʔɨnːa ʔadːiˈsun jɛwul sɨmɨmːɨˈnɛt mɛmɛriˈja masaˈwɛkʼɨn jɨmɛlɛkːɛˈtal] (good-dah-YOO: yeh-dur-uj-juh-TOON yeh-sub-seh-BAH k'ah-leh-goo-bah-AY un-nah ahd-DEE-soon yeh-wool suh-mum-muh-NET meh-meh-ree-YAH mah-saw-wuh-K'UN yuh-mel-lehk-keh-TAHL)",
          "translation": "Subject: Refers to notifying the organization's meeting minutes and the new contract agreement directive."
        },
        {
          "target": "አመልካቹ የውል ግዴታዎቹን በሚገባ አሟልቶ ስራውን እንዲጀምር በይፋዊ ደብዳቤ ተገለጸለት።",
          "reading": "Amälkaču yäwul gəddetawoččun bämigäba amwaləto sərawən əndigämmər bäyəfawi däbdabbe tägäläts’älät. [ʔamɛlkaˈtʃu jɛwul ɡɨdːetawoˈtʃːun bɛmiɡɛˈba ʔamwaˈlɨto sɨraˈwɨn ʔndiˈdʒɛmːɨr bɛjɨfaˈwi dɛbdaˈbːe tɛɡɛlɛtsʼɛˈlɛt] (ah-mel-kah-CHOO yeh-wool gud-day-tah-wohch-CHOON beh-mee-geh-BAH ahm-wah-luh-TOH suh-rah-WUN un-dee-jem-MUR beh-yuh-fah-WEE deb-dahb-BAY teh-geh-lets'-eh-LET)",
          "translation": "It was disclosed to the applicant via official letter to start work after properly fulfilling his contractual obligations."
        },
        {
          "target": "በስብሰባው የተላለፉት ውሳኔዎች በመመሪያ ሰነድ ተዘጋጅተው ለሁሉም ተዋዋይ ወገኖች ተሰራጩ።",
          "reading": "Bäsəbsäbaw yätälalläfut wəsanewočč bämämäriya sänäd täzägağğətäw lähullum täwaway wägänočč täsäračču. [bɛsɨbsɛˈbaw jɛtɛlalːɛˈfut wɨsaˈnewotʃː bɛmɛmɛriˈja sɛˈnɛd tɛzɛɡadʒːɨˈtɛw ləhulːum tɛwaˈwaj wɛɡɛˈnotʃː tɛsɛraˈtʃːu] (beh-sub-seh-BAHW yeh-teh-lahl-leh-FOOT wuh-sah-nay-WOHCH beh-meh-meh-ree-YAH seh-NED teh-zeg-ahj-juh-TEW luh-hool-LOOM teh-wah-WYE weh-geh-NOHCH teh-seh-rahch-CHOO)",
          "translation": "The decisions passed at the meeting were prepared in a directive document and distributed to all contracting parties."
        }
      ],
      "mnemonics": [
        "Admin Synthesis 24: Header (ጉዳዩ) + Application (ማመልከቻ) + Contract (ውል) + Minutes (ቃለ-ጉባኤ)!"
      ],
      "culturalNotes": [
        "የአማርኛ አስተዳደራዊ እና ቢሮክራሲያዊ ቋንቋ በስራ ቦታዎች ግልጽነትን፣ የህግ ተገዢነትንና ሙያዊ አሰራርን ለማስፈን ከፍተኛ ደረጃ ያለው ስርዓት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ አስተዳደራዊ ሰነድ አወቃቀር የያዘው የትኛው ነው?",
          "options": [
            "ጉዳዩ: የስብሰባ ቃለ-ጉባኤ ውሳኔን እና የውል ስምምነት መመሪያን ማጽደቅ። (Complete administrative document header combining minutes resolutions and contract directives)",
            "ምንም ሰነድ የለም",
            "ሁሉም ተራ ወረቀት ነው",
            "ማመልከቻ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የደብዳቤ ርዕስን (ጉዳዩ)፣ ቃለ-ጉባኤን እና የውል መመሪያን በአግባቡ ያጣመረ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "የማመልከቻ እና የውል ስምምነት ቃላትን ያጣመረ ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "አመልካቹ የውል ስምምነቱን ግዴታዎች አሟልቶ ማመልከቻውን አስገባ። (The applicant fulfilled contract agreement obligations and submitted his application - Cohesive administrative sentence)",
            "ምንም ማመልከቻ አልገባም",
            "ውል የለም",
            "ሰው የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የማመልከቻ እና የውል ቃላትን በትክክል ያቀናጃል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 24 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የመንግሥትና የድርጅት ደብዳቤ ቅርፅ፣ የማመልከቻ አጻጻፍ፣ የውልና ስምምነት ሰነዶች፣ እንዲሁም የስብሰባ ቃለ-ጉባኤ እና ሪፖርት ተካተዋል።",
            "ይህ ክፍል ስለ ስፖርት ብቻ ነው።",
            "በአማርኛ ይፋዊ ደብዳቤ አይጻፍም።",
            "ሁሉም ሰነዶች ተመሳሳይ ቅርፅ አላቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 24ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አስተዳደር / Administration' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አስተዳደር"
          ],
          "explanation": "ትክክለኛው ቃል «አስተዳደር» (Astädadär) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u25-l1": {
    "id": "am-u25-l1",
    "subject": "amharic",
    "unit": 25,
    "lessonNumber": 1,
    "title": "የአማርኛ ስነ-ጽሑፍ ታሪክ እና ታላላቅ ደራስያን (History of Amharic Literature & Prominent Authors)",
    "level": "C1",
    "objective": "የአማርኛ ስነ-ጽሑፍን ታሪክ፣ የልቦለድ ዘውጎችን እና ታዋቂ ደራስያንን (ከበደ ሚካኤል፣ ሐዲስ ዓለማየሁ፣ በዓሉ ግርማ) ማወቅ።",
    "presentation": {
      "explanation": "የአማርኛ ስነ-ጽሑፍ ታሪክ እና ዋና ዋና ዘውጎች (Amharic Literary Heritage & Genres):\n\n፩. የስነ-ጽሑፍ ዘውጎች:\n- ልቦለድ (Novel) / አጭር ልቦለድ (Short story) / ድርሰት (Essay/Composition)\n- ተውኔት (Play/Drama) / ደራሲ (Author) / ገጣሚ (Poet)።\n\n፪. አንጋፋ ደራስያንና ስራዎቻቸው:\n- ሐዲስ ዓለማየሁ («ፍቅር እስከ መቃብር»)\n- በዓሉ ግርማ («ኦሮማይ»፣ «ደራሲው»)\n- ከበደ ሚካኤል («ታሪክና ምሳሌ»፣ «የትንቢት ቀጠሮ»)።",
      "examples": [
        {
          "target": "ሐዲስ ዓለማየሁ በጻፉት «ፍቅር እስከ መቃብር» የተሰኘ ድንቅ ልቦለድ የአማርኛ ስነ-ጽሑፍን ወደ ላቀ ደረጃ አሸጋገሩ።",
          "reading": "Haddis Alämayyähu bäts’afut «Fəqr əskä Mäqabər» yätäsännyä dənq ləb-wälläd yä'amarənyya sənä-ts’əhufən wädä laqä däräğa ašäggagäru. [hadːis ʔalɛmaˈjːɛhu bɛtsʼaˈfut fɨkʼr ʔɨskɛ mɛkʼaˈbɨr jɛtɛsɛɲːɛ dɨnkʼ lɨbʷɛlːɛd jɛʔamaˈrɨɲːa sɨnɛtsʼɨˈhufɨn wɛˈdɛ laˈkʼɛ dɛrɛˈdʒa ʔaʃɛɡːaˈɡɛru] (HAHD-dees ah-leh-mah-YEH-hoo beh-ts'ah-FOOT «FUK'-ur us-KEH meh-K'AH-bur» yeh-teh-sen-NYEH dunk' lub-WEL-led yeh-ah-mah-RUN-yah suh-neh-ts'uh-HOO-fun weh-DEH lah-K'EH deh-reh-JAH ah-sheg-gah-GEH-roo)",
          "translation": "Haddis Alemayehu elevated Amharic literature to a higher stage with his magnificent novel titled 'Love unto the Grave'."
        },
        {
          "target": "ደራሲ ከበደ ሚካኤል በርካታ የታሪክ፣ የፍልስፍና እና የትምህርት መጻሕፍትን ለሀገራቸው አበርክተዋል።",
          "reading": "Därasi Käbbädä Mika'el bərkata yätarik, yäfəlsəfənna ənna yätəməhərt mäts’ahəftən lähagäraččäw abärkətäwal. [dɛraˈsi kɛbːɛˈdɛ miˈkaʔel bɨrkaˈta jɛtaˈrik jɛfɨlsɨˈfɨnːa ʔɨnːa jɛtɨmɨhɨrt mɛtsʼaˈhɨftɨn ləhaɡɛraˈtʃːɛw ʔabɛrkɨˈtɛwal] (deh-rah-SEE keb-beh-DEH mee-KAH-el bur-KAH-tah yeh-tah-REEK, yeh-ful-suh-fun-NAH un-nah yeh-tuh-muh-hur-T mets'-ah-HUF-tun luh-hah-geh-rahch-CHEW ah-ber-kuh-TEH-wahl)",
          "translation": "Author Kebede Mikael contributed numerous history, philosophy, and educational books to his country."
        },
        {
          "target": "የአማርኛ ስነ-ጽሑፍ የኢትዮጵያን ረጅም ታሪክ፣ ፍልስፍናና ማህበራዊ ኑሮ በጥልቀት ያንጸባርቃል።",
          "reading": "Yä'amarənyya sənä-ts’əhuf yä'Ityop’əyan räğğəm tarik, fəlsəfənnanna mahəbärawi nuro bät’ələqät yansts’äbarraqal. [jɛʔamaˈrɨɲːa sɨnɛtsʼɨˈhuf jɛʔitjoˈpʼɨjan rɛdʒːɨm taˈrik fɨlsɨfɨnːanːa mahɨbɛraˈwi nuˈro bɛtʼɨlɨˈkʼɛt jantsʼɛbaˈrːakʼal] (yeh-ah-mah-RUN-yah suh-neh-ts'uh-HOOF yeh-eet-yoh-P'EE-yahn rej-JUM tah-REEK, ful-suh-fun-NAHN-nah mah-huh-beh-rah-WEE noo-ROH beh-t'uh-luh-K'ET yahnts'-eh-bahr-rah-K'AHL)",
          "translation": "Amharic literature profoundly reflects Ethiopia's long history, philosophy, and social life."
        }
      ],
      "mnemonics": [
        "Literary Masters: ሐዲስ ዓለማየሁ (ፍቅር እስከ መቃብር) + በዓሉ ግርማ (ኦሮማይ) + ከበደ ሚካኤል (ታሪክና ምሳሌ)!"
      ],
      "culturalNotes": [
        "«ፍቅር እስከ መቃብር» በኢትዮጵያ ስነ-ጽሑፍ ታሪክ ውስጥ በታላቅነቱ የሚወደስ እና በኢትዮጵያ ሬዲዮ በድምፅ ተተርኮ በሚሊዮኖች ልብ ውስጥ የሰረጸ ድንቅ ስራ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«ፍቅር እስከ መቃብር» የተሰኘውን ድንቅ ልቦለድ የጻፉት አንጋፋ ደራሲ ማን ናቸው?",
          "options": [
            "ሐዲስ ዓለማየሁ (Haddis Alemayehu - Author of Fikir Iske Meqabir)",
            "ከበደ ሚካኤል",
            "በዓሉ ግርማ",
            "ጸጋዬ ገብረመድህን"
          ],
          "answerIndex": 0,
          "explanation": "«ፍቅር እስከ መቃብር» በታዋቂው ደራሲ ሐዲስ ዓለማየሁ የተደረሰ ድንቅ የልቦለድ ስራ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Novel' የሚለውን የስነ-ጽሑፍ ዘውግ በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ልቦለድ (Novel - Literary prose genre)",
            "ግጥም",
            "ዜና",
            "ደብዳቤ"
          ],
          "answerIndex": 0,
          "explanation": "«ልቦለድ» ረጅም ልብወለዳዊ ታሪክን የሚያቀርብ የስነ-ጽሑፍ ዘውግ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአማርኛ ስነ-ጽሑፍ ዘውጎችንና ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ስነ-ጽሑፍ፣ ልቦለድ፣ አጭር ልቦለድ፣ ድርሰት፣ ተውኔት እና ደራሲ።",
            "ወተት፣ ቅቤ፣ አይብ እና እርጎ።",
            "ሰኞ፣ ማክሰኞ እና እሮብ።",
            "በአማርኛ ስነ-ጽሑፍ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የስነ-ጽሑፍ ዘውጎችንና ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ልቦለድ / Novel' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ልቦለድ",
            "ልብወለድ"
          ],
          "explanation": "ትክክለኛው ቃል «ልቦለድ» ወይም «ልብወለድ» (Ləb-wälläd) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u25-l2": {
    "id": "am-u25-l2",
    "subject": "amharic",
    "unit": 25,
    "lessonNumber": 2,
    "title": "የግጥም ቅርፅ እና የቤት መምቻ ስነ-ስርዓት (Poetic Form, Stanza & Rhyme / 'Bet Memcha')",
    "level": "C1",
    "objective": "የአማርኛ ግጥም ስንኞችን፣ የቤት መምቻ (Rhyme Scheme) ህጎችን እና ዜማዊ ውበትን መተንተን።",
    "presentation": {
      "explanation": "የአማርኛ ግጥም ቅርፅ እና የቤት መምቻ ህግ (Poetic Metre & Rhyme):\n\n፩. የግጥም መዋቅር:\n- ስንኝ (Verse / Line) / ሀረግ (Phrase/Hemistich)\n- ቤት (Rhyme / Stanza) / ቤት መምቻ (Rhyme ending / rhyme scheme)\n- ዜማ እና ምት (Rhythm & Cadence) / ገጣሚ (Poet)።\n\n፪. የቤት መምቻ ህግ:\n- በእያንዳንዱ ስንኝ መጨረሻ ላይ የሚገኝ ተመሳሳይ ድምፅ ወይም ፊደል «ቤት መምቻ» ይባላል።\n  ምሳሌ: «ሰው መሆን ያኮራል፣ ከእንስሳ ይለያል / መልካም ስራ ሰርቶ፣ በክብር ይታወሳል» (የ«ል» ቤት መምቻ)።",
      "examples": [
        {
          "target": "ገጣሚው በስንኞቹ ማጠቃለያ ላይ የ«ኛ»ን ፊደል በማስገባት የተዋበ ቤት መታ።",
          "reading": "Gät’amiw bəsənənyočču mat’äqqaläya lay yä«nya»n fidäl bamasgabbat yätäwabä bet mätta. [ɡɛtʼaˈmiw bɛsɨnɨɲoˈtʃːu matʼɛkʼːalɛˈja laj jɛɲan fiˈdɛl bamasɡɛbːat jɛtɛwaˈbɛ bet mɛtːa] (geh-t'ah-MEEW beh-sun-uhn-YOHCH-choo maht'-ek'-k'ah-leh-YAH lye yeh-«nyah»-n fee-DEL bah-mahs-geb-BAHT yeh-teh-wah-BEH bayt met-TAH)",
          "translation": "The poet struck a beautiful rhyme by inserting the letter 'nya' at the end of his verses."
        },
        {
          "target": "ሎሬት ጸጋዬ ገብረመድህን በኃያል የግጥም ስልታቸው እና በቲያትር ድርሰቶቻቸው እጅግ ይታወቃሉ።",
          "reading": "Loret Ts’äggaye Gäbrä-Mädhən bähayal yägət’əm səltaččäw ənna bätiyatər dərsätoččaččäw əğğəg yəttawwäqallu. [loˈret tsʼɛɡːaˈje ɡɛbrɛmɛdˈhɨn bɛhaˈjal jɛɡɨtʼɨm sɨltaˈtʃːɛw ʔɨnːa bɛtiˈjatr dɨrsɛtoˈtʃːatʃːɛw ʔɨdʒːɨɡ jɨtːawːɛkʼaˈlːu] (loh-RAYT ts'eg-gah-YAY geh-breh-med-HUN beh-hah-YAHL yeh-guh-T'UM sul-tahch-CHEW un-nah beh-tee-YAH-tur dur-seh-tohch-chahch-CHEW uhj-JUG yut-taw-weh-k'ahl-LOO)",
          "translation": "Laureate Tsegaye Gebre-Medhin is exceptionally renowned for his powerful poetic style and theatrical plays."
        },
        {
          "target": "የግጥሙ ዜማ እና ምት የአንባቢውን ስሜት በጥልቀት የመማረክ ታላቅ ኃይል አለው።",
          "reading": "Yägət’əmu zema ənna mət yä'anbabiwən səmet bät’ələqät yämämaräk talaq hayl alläw. [jɛɡɨtʼɨˈmu zeˈma ʔɨnːa mɨt jɛʔanbaˈbiwɨn sɨˈmet bɛtʼɨlɨˈkʼɛt jəmɛmaˈrɛk taˈlakʼ hajl ʔalːɛw] (yeh-guh-t'uh-MOO zay-MAH un-nah mut yeh-ahn-bah-BEE-wun suh-MAYT beh-t'uh-luh-K'ET yeh-meh-mah-REK tah-LAHK' hye-L ahl-LEW)",
          "translation": "The melody and rhythm of the poem possess great power to profoundly captivate the reader's emotions."
        }
      ],
      "mnemonics": [
        "Poetry Terms: ስንኝ (Verse) + ቤት መምቻ (Rhyme) + ዜማ (Melody) + ሎሬት ጸጋዬ (Poet Laureate)!"
      ],
      "culturalNotes": [
        "ሎሬት ጸጋዬ ገብረመድህን የኢትዮጵያ ብሔራዊ ቲያትርን የመሩ እና የሀገሪቱን ታሪክ፣ ባህልና ኩራት በግጥም ያንጎራጎሩ ታላቅ ባለቅኔ ናቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በአማርኛ ግጥም ውስጥ በስንኞች መጨረሻ ላይ የሚገኝ ተነባቢ ድምፅ ወይም ፊደል ምን ይባላል?",
          "options": [
            "ቤት መምቻ (Rhyme scheme / 'Bet Memcha' - Traditional poetic rhyme rule)",
            "አርዕስት",
            "ደብዳቤ",
            "ስምምነት"
          ],
          "answerIndex": 0,
          "explanation": "«ቤት መምቻ» የግጥሙን ስንኞች በተመሳሳይ ፊደል ወይም ድምፅ የማሳረጊያ ሰዋሰዋዊ እና ቅኔያዊ ስም ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Poet' የሚለውን ቃል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ገጣሚ (Poet - Creator of poetry / verses)",
            "ነጋዴ",
            "አሽከርካሪ",
            "ገበሬ"
          ],
          "answerIndex": 0,
          "explanation": "«ገጣሚ» ግጥሞችን የሚጽፍ ወይም የሚያንጎራጉር ባለሙያ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የግጥም ቅርፅ እና የዜማ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ስንኝ፣ ሀረግ፣ ቤት መምቻ፣ ዜማ፣ ምት እና ገጣሚ።",
            "ውሃ፣ ጭማቂ፣ ወተት እና ሻይ።",
            "ጠረጴዛ፣ ወንበር እና በር።",
            "በአማርኛ ግጥም የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የግጥም ክፍሎችንና የቤት መምቻ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ግጥም / Poem, poetry' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ግጥም"
          ],
          "explanation": "ትክክለኛው ቃል «ግጥም» (Gət’əm) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u25-l3": {
    "id": "am-u25-l3",
    "subject": "amharic",
    "unit": 25,
    "lessonNumber": 3,
    "title": "የሰምና ወርቅ ቅኔያዊ ምስጢር (Sem-nna-Worq: Wax and Gold Poetic Double Meaning)",
    "level": "C1",
    "objective": "የሰምና ወርቅን (የላይኛው ትርጉም 'ሰም' እና ውስጠ-ሚስጥሩ 'ወርቅ') የቅኔ ፍልስፍና መረዳትና መተንተን።",
    "presentation": {
      "explanation": "የሰምና ወርቅ ቅኔያዊ ጥበብ እና ፍልስፍና (Wax and Gold Poetic Double Entendre):\n\n፩. የሰምና ወርቅ መርህ:\n- «ሰም» (Wax): ላይኛው እና ግልጹ የቃላት ትርጉም (Apparent surface meaning)።\n- «ወርቅ» (Gold): በሰሙ ውስጥ የተደበቀው እውነተኛው እና ጥልቁ ሚስጥር (Hidden core meaning)።\n- «ህብር» (Pivot word): ሰሙንና ወርቁን በአንድነት የያዘ ባለሁለት ትርጉም ቃል።\n\n፪. የቅኔ ውበት:\n- በኢትዮጵያ ስነ-ጽሑፍና ባህል ሀሳብን በቀጥታ ከመናገር ይልቅ በሰምና ወርቅ ሸፍኖ ማቅረብ ከፍተኛ የጥበብ ደረጃ ተደርጎ ይወሰዳል።",
      "examples": [
        {
          "target": "የሰምና ወርቅ ቅኔ ላይኛው ሰም ግልጽ ሲሆን ውስጠኛው ወርቅ ግን ጥልቅ ጥበብን ይዟል።",
          "reading": "Yäsämənna wärq qəne layənyaw säm gəlts’ sihon wəsət’änyaw wärq gən t’ələq t’əbäbən yəzwal. [jɛsɛmɨnːa wɛrkʼ kʼɨˈne lajɨˈɲaw sɛm ɡɨltsʼ siˈhon wɨstʼɛˈɲaw wɛrkʼ ɡɨn tʼɨˈlɨkʼ tʼɨˈbɛbɨn jɨzˈwal] (yeh-SEM-un-nah WEHR-k' k'uh-NAY lye-un-YAHW sem gults' see-HOHN woos-t'en-YAHW wehr-k' gun t'uh-LUK' t'uh-BEB-un yuz-WAHL)",
          "translation": "In Wax and Gold poetry, while the surface wax is obvious, the inner gold holds profound wisdom."
        },
        {
          "target": "ቅኔ አዋቂው ሊቅ በህብረ-ቃል ተጠቅመው ያስተላለፉትን የወርቅ ምስጢር መፍታት ጥልቅ እውቀትን ይጠይቃል።",
          "reading": "Qəne awaqiw liq bähəbrä-qal tät’äqmow yastälalläfutən yäwärq məsət’ir mäfətat t’ələq əwqätən yət’äyyəqal. [kʼɨˈne ʔawaˈkʼiw likʼ bɛhɨbrɛˈkʼal tɛtʼɛkʼˈmow jastɛlalːɛˈfutɨn jɛwɛrkʼ mɨsɨˈtʼir mɛfɨˈtat tʼɨˈlɨkʼ ʔɨwˈkʼɛtɨn jɨtʼɛjːɨˈkʼal] (k'uh-NAY ah-wah-K'EEW leek' beh-hub-reh-K'AHL tet'-ek'-MOH yahs-teh-lahl-leh-FOO-tun yeh-wehr-K' muh-suh-T'EER meh-fuh-TAHT t'uh-LUK' ew-k'eh-TUN yuh-t'ey-yuh-K'AHL)",
          "translation": "Deciphering the secret golden meaning conveyed by the Qene master using a pivot word requires deep knowledge."
        },
        {
          "target": "የኢትዮጵያ ስነ-ቃል እና ስነ-ጽሑፍ በሰምና ወርቅ ፍልስፍና የታነጸ ረቂቅ ጥበብ ነው።",
          "reading": "Yä'Ityop’əya sənä-qal ənna sənä-ts’əhuf bäsämənna wärq fəlsəfənna yätannäts’ä räqiq t’əbäb näw. [jɛʔitjoˈpʼɨja sɨnɛˈkʼal ʔɨnːa sɨnɛtsʼɨˈhuf bɛsɛmɨnːa wɛrkʼ fɨlsɨˈfɨnːa jɛtanːɛˈtsʼɛ rɛˈkʼikʼ tʼɨˈbɛb nɛw] (yeh-eet-yoh-P'EE-yah suh-neh-K'AHL un-nah suh-neh-ts'uh-HOOF beh-SEM-un-nah WEHR-k' ful-suh-fun-NAH yeh-tahn-NETS'-eh reh-K'EEK' t'uh-BEB new)",
          "translation": "Ethiopian oral tradition and literature is a subtle art constructed upon the philosophy of Wax and Gold."
        }
      ],
      "mnemonics": [
        "Sem-nna-Worq Concept: ሰም (Wax = Surface) + ወርቅ (Gold = Hidden Core) + ህብር (Pivot Word)!"
      ],
      "culturalNotes": [
        "ሰምና ወርቅ የኢትዮጵያ ኦርቶዶክስ ተዋህዶ አብነት ትምህርት ቤቶች ውስጥ ለዘመናት ሲተላለፍ የኖረ የቅኔ ትምህርት ፍልስፍናዊ መሰረት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በሰምና ወርቅ ቅኔ ውስጥ «ወርቅ» የሚባለው የትኛው ነው?",
          "options": [
            "በውስጥ የተደበቀው እውነተኛ እና ጥልቅ ምስጢር (The hidden golden truth and core secret - True meaning of Worq)",
            "የላይኛው ግልጽ ትርጉም",
            "የሚሸጥ ጌጥ",
            "የወረቀት ቀለም"
          ],
          "answerIndex": 0,
          "explanation": "በቅኔ ፍልስፍና «ወርቅ» የሚባለው በግጥሙ ውስጥ ተሸፍኖ የተቀመጠው እውነተኛው እና ጥልቁ መልእክት ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "በሰምና ወርቅ ውስጥ ሁለቱንም ትርጉሞች የያዘው ቁልፍ ቃል ምን ይባላል?",
          "options": [
            "ህብር (Pivot word / connector of wax and gold)",
            "ሰም ብቻ",
            "ርዕስ",
            "ማጠቃለያ"
          ],
          "answerIndex": 0,
          "explanation": "«ህብር» ሰሙንና ወርቁን በአንድነት አጣምሮ የያዘ ባለሁለት አቅጣጫ ቃል ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የሰምና ወርቅ የቅኔ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ሰም፣ ወርቅ፣ ህብር፣ ቅኔ፣ ምስጢር እና ፈሊጥ።",
            "ጠመኔ፣ ሰሌዳ፣ እርሳስ እና ደብተር።",
            "ሰማይ፣ ምድር፣ ጨረቃ እና ፀሐይ።",
            "በአማርኛ ቅኔ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የሰምና ወርቅን መሰረታዊ ጽንሰ-ሀሳቦች በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቅኔ / Qene, classical poetic verse' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቅኔ"
          ],
          "explanation": "ትክክለኛው ቃል «ቅኔ» (Qəne) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u25-l4": {
    "id": "am-u25-l4",
    "subject": "amharic",
    "unit": 25,
    "lessonNumber": 4,
    "title": "የስነ-ጽሑፍ ትችት እና ገጸ-ባህሪ ትንተና (Literary Criticism & Character Analysis)",
    "level": "C1",
    "objective": "የልቦለድ ገጸ-ባህሪያትን፣ ሴራን (Plot)፣ ጭብጥን (Theme) እና የስነ-ጽሑፍ ትችት ቋንቋን መተንተን።",
    "presentation": {
      "explanation": "የስነ-ጽሑፍ ትችት እና የልቦለድ ትንተና መዋቅር (Literary Criticism & Analysis):\n\n፩. የልቦለድ መሰረታዊ አካላት:\n- ጭብጥ (Theme) / ሴራ (Plot) / ግጭት (Conflict)\n- ገጸ-ባህሪ (Character) / ዋና ገጸ-ባህሪ (Protagonist) / ተቃራኒ ገጸ-ባህሪ (Antagonist)\n- መቼት (Setting / Time and Place) / የስነ-ጽሑፍ ትችት (Literary criticism)።\n\n፪. የትንተና አገባብ:\n- «የልቦለዱ ዋና ጭብጥ በማህበራዊ ፍትህ ዙሪያ ያጠነጥናል...»\n- «የገጸ-ባህሪው ውስጣዊ ግጭት ድርሰቱን ይበልጥ አጓጊ ያደርገዋል...»",
      "examples": [
        {
          "target": "የልቦለዱ ዋና ጭብጥ በባህላዊ አስተሳሰብ እና በዘመናዊነት መካከል ያለውን ግጭት ያሳያል።",
          "reading": "Yäləb-wällädun wana č’əbt’ bäbahəlawi astäsasäb ənna bäzämänawinnät mäkkakäl yalläwən gəč’č’ət yasayyal. [jɛlɨbʷɛlːɛˈdun waˈna tʃʼɨbtʼ bɛbahɨlaˈwi ʔastɛsaˈsɛb ʔɨnːa bɛzɛmɛnaˈwinːɛt mɛkːaˈkɛl jalːɛˈwɨn ɡɨtʃʼːɨt jasaˈjːal] (yeh-lub-wel-leh-DOON wah-NAH ch'ub-T' beh-bah-huh-lah-WEE ahs-teh-sah-SEB un-nah beh-zeh-meh-nah-WEEN-net meh-kah-KEL yahl-leh-WUN guch'-ch'ut yah-SYE-yahl)",
          "translation": "The novel's main theme portrays the conflict between traditional mindset and modernity."
        },
        {
          "target": "ተቺው በድርሰቱ ሴራ አወቃቀር እና በገጸ-ባህሪያቱ ጥንካሬ ላይ ጥልቅ የስነ-ጽሑፍ ትችት አቀረበ።",
          "reading": "Täčiw bädərsätu sera awäqaqär ənna bägäts’ä-bahəriyatu t’ənkare lay t’ələq yäsənä-ts’əhuf təččət aqärräbä. [tɛtʃiˈw bɛdɨrsɛˈtu seˈra ʔawɛkʼaˈkʼɛr ʔɨnːa bɛɡɛtsʼɛbahɨriˈjatu tʼɨnkaˈre laj tʼɨˈlɨkʼ jɛsɨnɛtsʼɨˈhuf tɨtʃːɨt ʔakʼɛrːɛˈbɛ] (teh-CHEEW beh-dur-seh-TOO say-RAH ah-weh-k'ah-K'ER un-nah beh-gets'-eh-bah-huh-ree-YAH-too t'un-kah-RAY lye t'uh-LUK' yeh-suh-neh-ts'uh-HOOF tuch-chut ah-k'er-reh-BEH)",
          "translation": "The critic presented a profound literary critique regarding the plot structure of the work and the strength of the characters."
        },
        {
          "target": "የዋናው ገጸ-ባህሪ የህይወት ውጣ ውረድ አንባቢውን ከመጀመሪያ እስከ መጨረሻው ድረስ ይማርካል።",
          "reading": "Yäwanaw gäts’ä-bahəri yähəywät wət’a wərPosition anbabiwən kämäğämmäriya əskä mäč’ärräšaw dəräs yəmarəkal. [jɛwaˈnaw ɡɛtsʼɛbaˈhɨri jɛhɨjˈwɛt wɨˈtʼa wɨrɛd ʔanbaˈbiwɨn kɛmɛdʒɛmːɛriˈja ʔɨskɛ mɛtʃʼɛrːɛˈʃaw dɨˈrɛs jɨmaˈrɨkal] (yeh-wah-NAHW gets'-eh-bah-huh-REE yeh-huy-WET wut'-AH wuh-RED ahn-bah-BEE-wun keh-meh-jem-meh-ree-YAH us-KEH meh-ch'er-reh-SHAHW duh-RES yuh-mah-ruh-KAHL)",
          "translation": "The main character's life ups and downs captivate the reader from the beginning until the end."
        }
      ],
      "mnemonics": [
        "Critique Formula: ጭብጥ (Theme) + ሴራ (Plot) + ገጸ-ባህሪ (Character) + መቼት (Setting)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ስነ-ጽሑፍ ትችት ውስጥ የማህበረሰብ ፍልስፍናን፣ ስነ-ልቦናንና የሞራል እሴቶችን መመርመር ትልቅ ቦታ አለው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Plot» የሚለውን የልቦለድ አወቃቀር ክፍል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ሴራ (Plot - Sequence and arrangement of events in fiction)",
            "መቼት",
            "ጭብጥ",
            "ገጸ-ባህሪ"
          ],
          "answerIndex": 0,
          "explanation": "«ሴራ» በልቦለድ ውስጥ የክስተቶችን ቅደም ተከተልና ትስስር የሚያመለክት የስነ-ጽሑፍ ቃል ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Theme' የሚለውን የስነ-ጽሑፍ ዋና ሀሳብ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ጭብጥ (Theme - Central idea or underlying meaning)",
            "ስም",
            "ቀን",
            "ቦታ"
          ],
          "answerIndex": 0,
          "explanation": "«ጭብጥ» የድርሰቱ ዋና መልእክትና ማጠንጠኛ ሀሳብ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የስነ-ጽሑፍ ትችት እና የልቦለድ ክፍሎችን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ጭብጥ፣ ሴራ፣ ገጸ-ባህሪ፣ መቼት፣ ግጭት እና የስነ-ጽሑፍ ትችት።",
            "ዳቦ፣ ስጋ፣ እንቁላል እና ወተት።",
            "ጫማ፣ ኮት እና ቆብ።",
            "በአማርኛ የስነ-ጽሑፍ ትችት የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና የስነ-ጽሑፍ ትንተና ክፍሎችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ጭብጥ / Theme, central subject' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ጭብጥ"
          ],
          "explanation": "ትክክለኛው ቃል «ጭብጥ» (Č’əbt’) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u25-l5": {
    "id": "am-u25-l5",
    "subject": "amharic",
    "unit": 25,
    "lessonNumber": 5,
    "title": "የክፍል 25 አጠቃላይ ማጠቃለያ (Unit 25 Grand Synthesis & Classical Literary Discourse)",
    "level": "C1",
    "objective": "ልቦለድን፣ የግጥም ስንኞችን፣ የሰምና ወርቅ ቅኔንና የስነ-ጽሑፍ ትችትን ያቀናጀ የተሟላ ስነ-ጽሑፋዊ ውይይት ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፳፭ አጠቃላይ የስነ-ጽሑፍ፣ የግጥምና የቅኔ ውህደት ማጠቃለያ:\n\n፩. አንጋፋ ስነ-ጽሑፍ:\n- ልቦለድ፣ ደራሲ፣ ሐዲስ ዓለማየሁ፣ በዓሉ ግርማ፣ ከበደ ሚካኤል።\n\n፪. የግጥም ውበት:\n- ስንኝ፣ ቤት መምቻ፣ ዜማ፣ ሎሬት ጸጋዬ ገብረመድህን።\n\n፫. የሰምና ወርቅ ቅኔ:\n- ሰም (ላይኛው ትርጉም)፣ ወርቅ (ውስጠ-ምስጢር)፣ ህብር (ባለ ሁለት ትርጉም ቃል)።\n\n፬. የስነ-ጽሑፍ ትችት:\n- ጭብጥ፣ ሴራ፣ ገጸ-ባህሪ፣ መቼት፣ ግጭት።",
      "examples": [
        {
          "target": "የአማርኛ ስነ-ጽሑፍ በልቦለድ ድርሰቶች፣ በግጥም ቤት መምቻ እና በሰምና ወርቅ ቅኔያዊ ምስጢር የጎለበተ ነው።",
          "reading": "Yä'amarənyya sənä-ts’əhuf bäləb-wälläd dərsätočč, bägət’əm bet mämča ənna bäsämənna wärq qəneyawi məsət’ir yägoläbbätä näw. [jɛʔamaˈrɨɲːa sɨnɛtsʼɨˈhuf bɛlɨbʷɛlːɛd dɨrsɛˈtotʃː bɛɡɨtʼɨm bet mɛmˈtʃa ʔɨnːa bɛsɛmɨnːa wɛrkʼ kʼɨnejaˈwi mɨsɨˈtʼir jɛɡolɛbːɛˈtɛ nɛw] (yeh-ah-mah-RUN-yah suh-neh-ts'uh-HOOF beh-lub-wel-led dur-seh-TOHCH, beh-guh-T'UM bayt mem-CHAH un-nah beh-SEM-un-nah WEHR-k' k'uh-nay-yah-WEE muh-suh-T'EER yeh-goh-leb-beh-TEH new)",
          "translation": "Amharic literature is enriched by novels, poetic rhyme schemes, and the poetic secrets of Wax and Gold."
        },
        {
          "target": "ደራሲው በፈጠሯቸው ጥልቅ ገጸ-ባህሪያት እና በረቂቅ ሴራ አማካኝነት የህብረተሰቡን እውነተኛ ገጽታ አሳዩ።",
          "reading": "Därasiw bäfät’t’äruwaččäw t’ələq gäts’ä-bahəriyat ənna bäräqiq sera amakanyənnät yähəbrätäsäbun əwnätänya gäts’ta asayyu. [dɛraˈsiw bɛfɛtʼːɛruwaˈtʃːɛw tʼɨˈlɨkʼ ɡɛtsʼɛbahɨriˈjat ʔɨnːa bɛrɛˈkʼikʼ seˈra ʔamaˈkaɲɨnːɛt jɛhɨbrɛtɛsɛˈbun ʔɨwnɛtɛˈɲa ɡɛtsʼˈta ʔasaˈjːu] (deh-rah-SEEW beh-fet'-t'eh-roo-wahch-CHEW t'uh-LUK' gets'-eh-bah-huh-ree-YAHT un-nah beh-reh-K'EEK' say-RAH ah-mah-kahn-yuhn-NET yeh-hub-reh-teh-seh-BOON ew-neh-ten-YAH gets'-TAH ah-SYE-yoo)",
          "translation": "Through the deep characters and intricate plot created, the author showed the true face of society."
        },
        {
          "target": "በስነ-ጽሑፍ ትችት ወቅት የቅኔው ሰም ብቻ ሳይሆን ውስጠኛው ወርቅ በሚገባ ተተነተነ።",
          "reading": "Bäsənä-ts’əhuf təččət wäqt yäqənew säm bəčča sayhon wəsət’änyaw wärq bämigäba tätänättänä. [bɛsɨnɛtsʼɨˈhuf tɨtʃːɨt wɛkʼt jɛkʼɨˈnew sɛm bɨˈtʃːa sajˈhon wɨstʼɛˈɲaw wɛrkʼ bɛmiɡɛˈba tɛtɛnɛtːɛˈnɛ] (beh-suh-neh-ts'uh-HOOF tuch-chut wehk'-T yeh-k'uh-NAY-woo sem buhch-CHAH sah-yuh-HOHN woos-t'en-YAHW wehr-K' beh-mee-geh-BAH teh-teh-net-teh-NEH)",
          "translation": "During the literary critique, not only the wax of the poem but also the inner gold was thoroughly analyzed."
        }
      ],
      "mnemonics": [
        "Grand Synthesis 25: Author (ደራሲ) + Poem (ስንኝ) + Wax & Gold (ሰምና ወርቅ) + Analysis (ትችት)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ ስነ-ጽሑፍ እና የቅኔ ባህል የሰው ልጅን የህይወት ፍልስፍና፣ ፍቅርን፣ ጀግንነትንና ማህበራዊ ፍትህን በጥበብ የማንጸባረቅ የረጅም ዘመናት አኩሪ ቅርስ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የስነ-ጽሑፍና የቅኔ ውህደትን የያዘው የትኛው ነው?",
          "options": [
            "የአማርኛ ስነ-ጽሑፍ በልቦለድ፣ በግጥም ቤት መምቻ እና በሰምና ወርቅ ምስጢር የጎለበተ ነው። (Complete literary synthesis combining novels, rhyme, and wax & gold poetry)",
            "ምንም ስነ-ጽሑፍ የለም",
            "ሁሉም ተራ ቃላት ናቸው",
            "ግጥም የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ ልቦለድን፣ የግጥም ስነ-ስርዓትን እና የሰምና ወርቅን በአንድነት ያጠቃለለ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "የስነ-ጽሑፍ ትችት እና የቅኔ ቃላትን ያጣመረ ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ተቺው በስነ-ጽሑፍ ትንተናው ወቅት የቅኔውን ሰም እና ወርቅ በዝርዝር አብራራ። (The critic explained the wax and gold of the poem in detail during literary analysis - Accurate unified sentence)",
            "ምንም ትችት አልቀረበም",
            "ቅኔ የለም",
            "ወርቅ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የስነ-ጽሑፍ ትችትን እና የቅኔ ፍልስፍናን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 25 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የአማርኛ ስነ-ጽሑፍ ታሪክና ደራስያን፣ የግጥም ቅርፅና ቤት መምቻ፣ የሰምና ወርቅ ቅኔያዊ ምስጢር፣ እንዲሁም የስነ-ጽሑፍ ትችት ተካተዋል።",
            "ይህ ክፍል ስለ ጂኦግራፊ ብቻ ነው።",
            "በአማርኛ ልቦለድ አይጻፍም።",
            "ሁሉም ግጥሞች ቤት መምቻ የላቸውም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 25ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ስነ-ጽሑፍ / Literature' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ስነ-ጽሑፍ",
            "ሥነ-ጽሑፍ",
            "ስነ ጽሑፍ",
            "ሥነ ጽሑፍ"
          ],
          "explanation": "ትክክለኛው ቃል «ስነ-ጽሑፍ» ወይም «ሥነ-ጽሑፍ» (Sənä-ts’əhuf) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u26-l1": {
    "id": "am-u26-l1",
    "subject": "amharic",
    "unit": 26,
    "lessonNumber": 1,
    "title": "የሐተታ ዘርአ ያዕቆብ እና ምክንያታዊ ምርምር (Hateta Zera Yacob & Rational Inquiry)",
    "level": "C1",
    "objective": "የዘርአ ያዕቆብን ምክንያታዊ ፍልስፍና («ሐተታ»)፣ የልብ ብርሃንንና እውነትን የመመርመር ጥበብ ማወቅ።",
    "presentation": {
      "explanation": "የሐተታ ዘርአ ያዕቆብ እና ምክንያታዊ ፍልስፍና መዋቅር:\n\n፩. የፍልስፍናው መሰረት:\n- ሐተታ፣ ዘርአ ያዕቆብ፣ ማስተዋል እና አእምሯዊ ምክንያት።\n- የልብ ብርሃን፣ እውነትን መመርመር እና ምክንያታዊ ጥርጣሬ።\n\n፪. ዋና የፍልስፍና መርህ:\n- ዘርአ ያዕቆብ እያንዳንዱ ሰው ፈጣሪ በሰጠው የልብ ብርሃን እና ምክንያት ተጠቅሞ እውነትን ከሀሰት መለየት እንዳለበት አስተምረዋል። ሰው በምክንያት ሲመራ እውነተኛውን የህይወት መንገድ ይረዳል፤ ጭፍን እምነትንና አጉል ልማድን ያስወግዳል።",
      "examples": [
        {
          "target": "ፈላስፋው ዘርአ ያዕቆብ በጻፉት «ሐተታ» ውስጥ የሰውን ልጅ የማሰብ ችሎታ እና ምክንያታዊነት በታላቅ ክብር አሞገሱ።",
          "reading": "Fälasfaw Zär'a Ya'əqob bäts’afut «Hatäta» wəsət’ yäsäwən ləğ yämasäb čəlotanna məkənyatawinnätən bätalaq kəbər amoggäsu. [fɛlasˈfaw zɛrʔa jaʔɨˈkʼob bɛtsʼaˈfut hatɛˈta wɨstʼ jɛsɛˈwɨn lɨdʒ jɛmaˈsɛb tʃɨloˈtanːa mɨkɨnjataˈwinːɛtɨn bɛtaˈlakʼ kɨbər ʔamoɡːɛˈsu] (feh-lahs-FAHW zehr-ah yah-uh-K'OHB beh-ts'ah-FOOT «hah-teh-TAH» woos-T' yeh-SEH-wun luhj yeh-mah-SEB chuh-loh-TAHN-nah muh-kun-yah-tah-WEEN-net-un beh-tah-LAHK' kuh-BUR ah-mohg-geh-SOO)",
          "translation": "In the 'Hateta' written by him, the philosopher Zera Yacob praised human cognitive faculty and rationality with great honor."
        },
        {
          "target": "እውነትን ለማግኘት የልብ ብርሃን የሆነውን አእምሯዊ ምክንያት መጠቀም የዘርአ ያዕቆብ ቀዳሚ መመሪያ ነው።",
          "reading": "Əwnätən lämagnyät yäləbb bərəhan yähonäwən a'əmərowi məkənyat mät’äqqäm yäZär'a Ya'əqob qäddami mämäriya näw. [ʔɨwˈnɛtɨn ləmaɡˈɲɛt jɛlɨbː bɨrˈhan jɛhoˈnɛwɨn ʔaʔɨmroˈwi mɨkɨnˈjat mɛtʼɛkʼːəm jɛzɛrʔa jaʔɨˈkʼob kʼɛdːaˈmi mɛmɛriˈja nɛw] (ew-NEH-tun luh-mahg-NYET yeh-lub-b bur-HAHN yeh-hoh-NEW-un ah-um-roh-WEE muh-kun-YAHT met'-ek'-K'EM yeh-zehr-ah yah-uh-K'OHB k'ed-dah-MEE meh-meh-ree-YAH new)",
          "translation": "Employing mental reason, which is the light of the heart, to attain truth is Zera Yacob's primary directive."
        },
        {
          "target": "የኢትዮጵያ ፍልስፍና ከአውሮፓውያን የብርሃን ዘመን ቀድሞ ምክንያታዊነትን ያወጀ ድንቅ የታሪክ ቅርስ ነው።",
          "reading": "Yä'Ityop’əya fəlsəfənna kä'Awropawəyan yäbərəhan zämän qäddəmo məkənyatawinnätən yawäğğä dənq yätarik qərs näw. [jɛʔitjoˈpʼɨja fɨlsɨˈfɨnːa kɛʔawropaˈwɨjan jɛbɨrˈhan zɛˈmɛn kʼɛdːɨˈmo mɨkɨnjataˈwinːɛtɨn jaˈwɛdʒːɛ dɨnkʼ jɛtaˈrik kʼɨrs nɛw] (yeh-eet-yoh-P'EE-yah ful-suh-fun-NAH keh-ow-roh-pah-wuh-YAHN yeh-bur-HAHN zeh-MEN k'ed-duh-MOH muh-kun-yah-tah-WEEN-net-un yah-wej-JEH dunk' yeh-tah-REEK k'urs new)",
          "translation": "Ethiopian philosophy is a magnificent historical heritage that proclaimed rationality prior to the European Enlightenment."
        }
      ],
      "mnemonics": [
        "Zera Yacob Terms: ሐተታ (Inquiry) + ዘርአ ያዕቆብ (Philosopher) + ምክንያት (Reason) + የልብ ብርሃን (Light of Heart)!"
      ],
      "culturalNotes": [
        "ዘርአ ያዕቆብ በ፲፯ኛው መቶ ክፍለ ዘመን (17th century) በተከዜ ወንዝ ዋሻ ውስጥ ተቀምጠው የጻፉት «ሐተታ» በዓለም አቀፍ የፍልስፍና ታሪክ ውስጥ ታላቅ አድናቆትን ያተረፈ ድንቅ ስራ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በ፲፯ኛው መቶ ክፍለ ዘመን «ሐተታ» የተሰኘውን የምክንያታዊ ፍልስፍና መጽሐፍ የጻፉት ኢትዮጵያዊ ፈላስፋ ማን ናቸው?",
          "options": [
            "ዘርአ ያዕቆብ (Zera Yacob - 17th-century rationalist philosopher)",
            "ከበደ ሚካኤል",
            "ሐዲስ ዓለማየሁ",
            "በዓሉ ግርማ"
          ],
          "answerIndex": 0,
          "explanation": "«ሐተታ» የተሰኘውን ታላቅ ምክንያታዊ የፍልስፍና ድርሰት ያበረከቱት ፈላስፋው ዘርአ ያዕቆብ ናቸው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Reason, rationale' የሚለውን የፍልስፍና ቃል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ምክንያት (Reason, rationality - Core foundation of philosophy)",
            "ስሜት",
            "እንቅልፍ",
            "ምግብ"
          ],
          "answerIndex": 0,
          "explanation": "«ምክንያት» የማሰብ፣ የማመዛዘን እና እውነትን የመመርመር አእምሯዊ አቅም ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የሐተታ ዘርአ ያዕቆብን ፍልስፍናዊ ቃላት በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ሐተታ፣ ዘርአ ያዕቆብ፣ ምክንያት፣ እውነት፣ ማስተዋል እና የልብ ብርሃን።",
            "ስኳር፣ ጨው፣ በርበሬ እና ዘይት።",
            "ጠረጴዛ፣ በር፣ መስኮት እና ወንበር።",
            "በኢትዮጵያ ፍልስፍና የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የዘርአ ያዕቆብን ምክንያታዊ የፍልስፍና ቃላት በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ሐተታ / Treatise, philosophical inquiry' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ሐተታ",
            "ሀተታ"
          ],
          "explanation": "ትክክለኛው ቃል «ሐተታ» (Hatäta) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u26-l2": {
    "id": "am-u26-l2",
    "subject": "amharic",
    "unit": 26,
    "lessonNumber": 2,
    "title": "የወልደ ህይወት ፍልስፍና እና የስነ-ምግባር ትምህርት (Philosophy of Walda Heywat & Practical Ethics)",
    "level": "C1",
    "objective": "የዘርአ ያዕቆብ ደቀ-መዝሙር የሆነውን የወልደ ህይወትን ማህበራዊና ስነ-ምግባራዊ ፍልስፍና መተንተን።",
    "presentation": {
      "explanation": "የወልደ ህይወት ፍልስፍና እና ተግባራዊ ስነ-ምግባር መዋቅር:\n\n፩. የስራ እና የማህበራዊ ኑሮ ፍልስፍና:\n- ወልደ ህይወት፣ ስነ-ምግባር፣ የስራ ክብር፣ ፍትህ እና እኩልነት።\n- እውነት፣ ቅንነት እና የሰዎች የእርስ በርስ መረዳዳት።\n\n፪. ተግባራዊ የስነ-ምግባር መመሪያ:\n- ወልደ ህይወት ፍልስፍና በጽንሰ-ሀሳብ ብቻ ሳይወሰን በሰው ልጆች የእለት ተእለት ኑሮ፣ በቤተሰብ አንድነት፣ በስራ ትጋትና በደግነት መገለጽ እንዳለበት አጽንኦት ሰጥተዋል። የስራ ክብር የህብረተሰብ እድገት መሰረት ነው።",
      "examples": [
        {
          "target": "ወልደ ህይወት በድርሰታቸው ውስጥ የስራን ክብር እና የሰዎችን የእርስ በርስ መረዳዳት በስፋት አስተምረዋል።",
          "reading": "Wäldä Həywät bädərsätaččäw wəsət’ yäsəran kəbər ənna yäsäwoččən yä'ərəss bärəss märädadat bäsəfaw astämaru. [wɛldɛ hɨjˈwɛt bɛdɨrsɛtaˈtʃːɛw wɨstʼ jɛsɨˈran kɨˈbɨr ʔɨnːa jɛsɛwoˈtʃːɨn jɛʔɨrs bɛrɨs mɛrɛdaˈdat bɛsɨˈfaw ʔastɛmaˈru] (wel-deh huy-WET beh-dur-seh-TAHCH-chew woos-T' yeh-suh-RAHN kuh-BUR un-nah yeh-seh-wohch-CHUN yeh-urs beh-rus meh-reh-dah-DAHT beh-suh-FAHW ahs-teh-mah-ROO)",
          "translation": "Walda Heywat widely taught the dignity of labor and mutual assistance among people in his work."
        },
        {
          "target": "መልካም ስነ-ምግባር እና ቅንነት የማህበረሰብ የሰላም እና የእድገት መሰረት መሆናቸውን አብራሩ።",
          "reading": "Mälkam sənä-məgbar ənna qənnənät yämahəbräsäb yäsälam ənna yä'ədəggät mäsärät mähonaččäwən abəraru. [mɛlˈkam sɨnɛmɨɡˈbar ʔɨnːa kʼɨnːɨˈnɛt jɛmahɨbrɛˈsɛb jɛsɛˈlam ʔɨnːa jɛʔɨdɨɡːɛt mɛsɛˈrɛt mɛhonaˈtʃːɛwɨn ʔabɨraˈru] (mel-KAHM suh-neh-mug-BAHR un-nah k'un-nuh-NET yeh-mah-hub-reh-SEB yeh-seh-LAHM un-nah yeh-ud-ug-GAYT meh-seh-RET meh-hoh-nahch-CHEW-un ah-buh-rah-ROO)",
          "translation": "They explained that good ethics and integrity are the foundation of society's peace and development."
        },
        {
          "target": "የሰው ልጅ በጥረቱ እና በላቡ የሚኖርበትን ፍትሃዊ ስርዓት መገንባት እንዳለበት ፍልስፍናቸው ያሳስባል።",
          "reading": "Yäsäw ləğ bät’ərätu ənna bälabu yäminorəbätən fətəhawi sər'at mägänbat əndalläbät fəlsəfənnaččäw yasasəbal. [jɛsɛw lɨdʒ bɛtʼɨrɛˈtu ʔɨnːa bɛlaˈbu jɛminoˈrɨbɛtɨn fɨtɨhaˈwi sɨrʔat mɛɡɛnˈbat ʔɨndalːɛˈbɛt fɨlsɨfɨnːaˈtʃːɛw jasaˈsɨbal] (yeh-SEH-w luhj beh-t'uh-reh-TOO un-nah beh-lah-BOO yeh-mee-noh-ruh-BEH-tun fuh-tuh-hah-WEE sur-AHT meh-gen-BAHT un-dahl-leh-BET ful-suh-fun-NAHCH-chew yah-sah-suh-BAHL)",
          "translation": "Their philosophy urges that humans must build a just system where they live by their effort and sweat."
        }
      ],
      "mnemonics": [
        "Walda Heywat Ethics: ወልደ ህይወት (Ethics Disciple) + ስነ-ምግባር (Morals) + የስራ ክብር (Dignity of Work)!"
      ],
      "culturalNotes": [
        "የወልደ ህይወት ሐተታ ከዘርአ ያዕቆብ በመቀጠል የተጻፈ እና በተለይ በቤተሰብ፣ በትዳርና በማህበራዊ ስነ-ምግባር ላይ ያተኮረ ፍልስፍና ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "የዘርአ ያዕቆብ ደቀ-መዝሙር የነበሩትና በስነ-ምግባር ዙሪያ የጻፉት ፈላስፋ ማን ናቸው?",
          "options": [
            "ወልደ ህይወት (Walda Heywat - Philosopher of practical ethics and social duty)",
            "ከበደ ሚካኤል",
            "አፈወርቅ ገብረኢየሱስ",
            "ሎሬት ጸጋዬ"
          ],
          "answerIndex": 0,
          "explanation": "ወልደ ህይወት የዘርአ ያዕቆብ ደቀ-መዝሙር ሲሆኑ በማህበራዊ ስነ-ምግባር ዙሪያ ጥልቅ ሐተታ ጽፈዋል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Ethics, morality' የሚለውን ቃል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ስነ-ምግባር (Ethics, moral principles)",
            "ስነ-ጥበብ",
            "ስነ-ህይወት",
            "ስነ-ምድር"
          ],
          "answerIndex": 0,
          "explanation": "«ስነ-ምግባር» የሰዎችን መልካም ባህሪ፣ ግዴታ እና ሞራላዊ መርሆዎች የሚያጠና የፍልስፍና ዘርፍ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የወልደ ህይወትን የስነ-ምግባር ፍልስፍና ቃላት በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ወልደ ህይወት፣ ስነ-ምግባር፣ የስራ ክብር፣ ፍትህ፣ ቅንነት እና እኩልነት።",
            "ሻይ፣ ቡና፣ ወተት እና ጭማቂ።",
            "ሰዓት፣ ቀን፣ ወር እና አመት።",
            "በአማርኛ ስነ-ምግባር የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የወልደ ህይወትን የስነ-ምግባር ፍልስፍናዊ ቃላት በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ስነ-ምግባር / Ethics, morality' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ስነ-ምግባር",
            "ሥነ-ምግባር",
            "ስነ ምግባር",
            "ሥነ ምግባር"
          ],
          "explanation": "ትክክለኛው ቃል «ስነ-ምግባር» ወይም «ሥነ-ምግባር» (Sənä-məgbar) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u26-l3": {
    "id": "am-u26-l3",
    "subject": "amharic",
    "unit": 26,
    "lessonNumber": 3,
    "title": "የዕውቀት ፍልስፍና እና የስነ-አመክንዮ መሰረቶች (Epistemology & Foundations of Logic)",
    "level": "C1",
    "objective": "ስነ-አመክንዮን (Logic)፣ ማገናዘብን፣ እውነትን መመዘንንና ፍልስፍናዊ ሙግትን መተንተን።",
    "presentation": {
      "explanation": "የዕውቀት ፍልስፍና እና የስነ-አመክንዮ ህጎች መዋቅር:\n\n፩. የስነ-አመክንዮ መሰረታዊ ቃላት:\n- ስነ-አመክንዮ፣ አመክንዮአዊ ሙግት፣ መነሻ ሀሳብ እና መደምደሚያ።\n- ትክክለኛነት፣ ማመዛዘን እና ጥልቅ ማገናዘብ።\n\n፪. የምክንያት ሚዛን እና ሙግት:\n- ማንኛውም ፍልስፍናዊ ክርክር በማስረጃ እና በጠንካራ አመክንዮ ላይ ካልተመሰረተ ተቀባይነት የለውም። ሰው በማመዛዘን ችሎታው ተጠቅሞ ትክክለኛውን መደምደሚያ ማፍራት ይችላል።",
      "examples": [
        {
          "target": "በስነ-አመክንዮ ህግ መሰረት ትክክለኛ መደምደሚያ ላይ ለመድረስ ጠንካራ መነሻ ሀሳብ ያስፈልጋል።",
          "reading": "Bäsənä-amäkənyo həgg mäsärät təkkəklänya mädämdämiya lay lämädräs t’änkarrä mänässa hasab yasfälləgal. [bɛsɨnɛʔamɛkɨnˈjo hɨɡː mɛsɛˈrɛt tɨkːɨklɛˈɲa mɛdɛmdɛmiˈja laj ləmɛdˈrɛs tʼɨnkaˈrːɛ mɛnɛsːa haˈsab jasfɛlːɨˈɡal] (beh-suh-neh-ah-mek-un-YOH hug-G meh-seh-RET tuk-kuhk-len-YAH meh-dem-deh-mee-YAH lye luh-med-RES t'un-kahr-REH meh-nes-SAH hah-SAHB yahs-fel-luh-GAHL)",
          "translation": "According to the rules of logic, a strong premise is required to arrive at a valid conclusion."
        },
        {
          "target": "ተማሪዎቹ ፍልስፍናዊ ሙግቶችን በማመዛዘን እና አመክንዮአዊ በሆነ መንገድ ለመተንተን ሰለጠኑ።",
          "reading": "Tämariwočču fəlsəfənawi mugətoččən bamamäzazän ənna amäkənyo'awi bähonä mängäd lämätäntän sälät’t’änu. [tɛmariwoˈtʃːu fɨlsɨfɨnaˈwi muɡɛtoˈtʃːɨn bamamɛzaˈzɛn ʔɨnːa ʔamɛkɨnjoʔaˈwi bɛhoˈnɛ mɛnˈɡɛd ləmɛtɛnˈtɛn sɛlɛtʼːɛˈnu] (teh-mah-ree-wohch-CHOO ful-suh-fuh-nah-WEE moo-geh-tohch-CHUN bah-mah-meh-zah-ZEN un-nah ah-mek-un-yoh-ah-WEE beh-hoh-NEH men-GED luh-meh-ten-TEN seh-let'-t'eh-NOO)",
          "translation": "The students were trained to deliberate on philosophical arguments and analyze them in a logical manner."
        },
        {
          "target": "የማሰብ ብስለት የሚለካው ስሜታዊነትን በማስወገድ በእውነት እና በአመክንዮ መመራት ሲቻል ነው።",
          "reading": "Yämasäb bəsəlät yämiläkaw səmetawinnätən bamaswägäd bä'əwnät ənna bə'amäkənyo mämärat siččal näw. [jɛmaˈsɛb bɨsɨˈlɛt jɛmilɛˈkaw sɨmetawinːɛˈtɨn bamaswɛˈɡɛd bɛʔɨwˈnɛt ʔɨnːa bɛʔamɛkɨnˈjo mɛmɛˈrat sitʃːal nɛw] (yeh-mah-SEB buh-suh-LET yeh-mee-leh-KAHW suh-may-tah-WEEN-net-un bah-mahs-weh-GED beh-ew-NET un-nah beh-ah-mek-un-YOH meh-meh-RAHT seech-CHAHL new)",
          "translation": "Maturity of thinking is measured when one can be guided by truth and logic while avoiding emotionalism."
        }
      ],
      "mnemonics": [
        "Logic Foundations: ስነ-አመክንዮ (Logic) + መነሻ (Premise) + መደምደሚያ (Conclusion) + ሙግት (Argument)!"
      ],
      "culturalNotes": [
        "የአመክንዮ እና የክርክር ስነ-ስርዓት በኢትዮጵያ ባህላዊ የትምህርት ተቋማት ውስጥ ረቂቅ ጥያቄዎችንና መልሶችን በመለዋወጥ ለዘመናት ሲዳብር ቆይቷል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Logic» የሚለውን የፍልስፍና ዘርፍ በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ስነ-አመክንዮ (Logic - Study of reasoning and valid argument)",
            "ስነ-ህዋ",
            "ስነ-ልሳን",
            "ስነ-ዜማ"
          ],
          "answerIndex": 0,
          "explanation": "«ስነ-አመክንዮ» ትክክለኛውን የማመዛዘን እና የሙግት ስርዓት የሚያጠና የፍልስፍና ዘርፍ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "በአመክንዮአዊ ሙግት መጨረሻ ላይ የሚደረስበት ውጤት ምን ይባላል?",
          "options": [
            "መደምደሚያ (Conclusion - Final deduction / result of reasoning)",
            "መነሻ ብቻ",
            "ስም",
            "ቀን"
          ],
          "answerIndex": 0,
          "explanation": "«መደምደሚያ» ከመነሻ ሀሳቦች ተነስቶ በአመክንዮ የሚደረስበት የመጨረሻ ውሳኔ ወይም ሀሳብ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የስነ-አመክንዮ እና የዕውቀት ፍልስፍና ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ስነ-አመክንዮ፣ መነሻ ሀሳብ፣ መደምደሚያ፣ ሙግት፣ ማመዛዘን እና እውነት።",
            "ጫማ፣ ሱሪ፣ ሸሚዝ እና ጃኬት።",
            "ዝናብ፣ በረዶ፣ ንፋስ እና ፀሐይ።",
            "በአማርኛ ስነ-አመክንዮ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የስነ-አመክንዮ መሰረታዊ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ስነ-አመክንዮ / Logic' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ስነ-አመክንዮ",
            "ሥነ-አመክንዮ",
            "ስነ አመክንዮ",
            "ሥነ አመክንዮ"
          ],
          "explanation": "ትክክለኛው ቃል «ስነ-አመክንዮ» ወይም «ሥነ-አመክንዮ» (Sənä-amäkənyo) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u26-l4": {
    "id": "am-u26-l4",
    "subject": "amharic",
    "unit": 26,
    "lessonNumber": 4,
    "title": "የሰው ልጅ ህሊና እና የተፈጥሮ ህግጋት (Human Conscience & Natural Law)",
    "level": "C1",
    "objective": "የህሊናን ፍርድ፣ የተፈጥሮ ህግን፣ የነፃ ፈቃድ ጽንሰ-ሀሳብንና የሞራል ፍልስፍናን መተንተን።",
    "presentation": {
      "explanation": "የህሊና ፍልስፍና እና የተፈጥሮ ህግጋት መዋቅር:\n\n፩. የህሊና እና የተፈጥሮ ህግ መርሆዎች:\n- ህሊና፣ የተፈጥሮ ህግ፣ ነፃ ፈቃድ እና የሞራል ግዴታ።\n- እኩልነት፣ ሰብአዊ ክብር እና የተፈጥሮ ሚዛናዊነት።\n\n፪. የፍልስፍናው ጥልቅ እይታ:\n- ዘርአ ያዕቆብና ወልደ ህይወት የተፈጥሮ ህግ ለሰው ልጆች ሁሉ እኩል የተሰጠ እና ህሊና ደግሞ መልካሙን ከክፉው የሚለይበት ውስጣዊ ዳኛ መሆኑን አስተምረዋል። ነፃ ፈቃድ የሰው ልጅ መልካም ምርጫን እንዲመርጥ ያስችለዋል።",
      "examples": [
        {
          "target": "ህሊና በእያንዳንዱ ሰው ልብ ውስጥ የተቀመጠ እና መልካሙን ከክፉው የሚለይ እውነተኛ ዳኛ ነው።",
          "reading": "Həllina bə'əyyandanndu säw ləbb wəsət’ yätäqämmät’ä ənna mälkamun käkəfuw yämilayy əwnätänya danya näw. [hɨlːiˈna bɛʔɨjːandanˈdu sɛw lɨbː wɨstʼ jɛtɛkʼɛmːɛˈtʼɛ ʔɨnːa mɛlkaˈmun kɛkɨˈfuw jɛmilaˈjː ʔɨwnɛtɛˈɲa daˈɲa nɛw] (hul-lee-NAH beh-uhy-yahn-dahn-DOO sew lub-B woos-T' yeh-teh-k'em-meh-T'EH un-nah mel-kah-MOON keh-kuh-FOO-w yeh-mee-lye-Y ew-neh-ten-YAH dah-NYAH new)",
          "translation": "Conscience is a true judge placed within every human's heart that distinguishes good from evil."
        },
        {
          "target": "የተፈጥሮ ህግ የሰው ልጆችን እኩልነት እና የተፈጠሩበትን ክብር የሚያረጋግጥ ዘላለማዊ መርህ ነው።",
          "reading": "Yätäfät’ro həgg yäsäw ləğoččən əkkulənnät ənna yätäfät’t’ärubätən kəbər yämiyarrägagət’ zälalämawi märəh näw. [jɛtɛfɛtʼˈro hɨɡː jɛsɛw lɨdʒoˈtʃːɨn ʔɨkːulɨnːɛt ʔɨnːa jɛtɛfɛtʼːɛruˈbɛtɨn kɨˈbɨr jɛmijarːɛɡaˈɡɨtʼ zɛlalɛmaˈwi mɛrɨh nɛw] (yeh-teh-fet'-ROH hug-G yeh-SEH-w luh-johch-CHUN uk-koo-luhn-NET un-nah yeh-teh-fet'-t'eh-roo-BEH-tun kuh-BUR yeh-mee-yahr-reh-gah-GUT' zeh-lah-leh-mah-WEE meh-ruh-H new)",
          "translation": "Natural law is an eternal principle that affirms human equality and the dignity of creation."
        },
        {
          "target": "ሰው በነፃ ፈቃዱ ተጠቅሞ መልካም መንገድን እንዲመርጥ የፍልስፍና ትምህርት ያነቃቃዋል።",
          "reading": "Säw bänäts’a fäqadu tät’äqmow mälkam mängädən əndimärət’ yäfəlsəfənna təməhərt yanäqaqqawwal. [sɛw bɛnɛˈtsʼa fɛkʼaˈdu tɛtʼɛkʼˈmow mɛlˈkam mɛnɡɛˈdɨn ʔndiˈmɛrɨtʼ jɛfɨlsɨˈfɨnːa tɨmɨhɨrt janɛkʼakʼaˈwːal] (SEH-w beh-neh-TS'AH feh-k'ah-DOO tet'-ek'-MOH mel-KAHM men-geh-DUN un-dee-meh-RUT' yeh-ful-suh-fun-NAH tuh-muh-hur-T yah-neh-k'ah-k'ah-WAHL)",
          "translation": "Philosophical education inspires human beings to use their free will to choose a good path."
        }
      ],
      "mnemonics": [
        "Conscience & Nature: ህሊና (Conscience) + የተፈጥሮ ህግ (Natural Law) + ነፃ ፈቃድ (Free Will) + እኩልነት (Equality)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ፍልስፍናዊ አስተሳሰብ ህሊና የሰው ልጅ ሞራላዊ ኮምፓስ ሲሆን የተፈጥሮ ህግ ደግሞ የሰው ሰራሽ ጭቆናን የሚቃወም ፍትሃዊ መመሪያ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በሰው ልጅ ልብ ውስጥ ሆኖ መልካሙን ከክፉው የሚለየው ውስጣዊ ዳኛ ምን ይባላል?",
          "options": [
            "ህሊና (Conscience - Inner judge of moral right and wrong)",
            "ፍርሃት",
            "ንዴት",
            "ሀብት"
          ],
          "answerIndex": 0,
          "explanation": "«ህሊና» መልካሙንና ክፉውን የሚመዝን እና ሞራላዊ ውሳኔን የሚመራ ውስጣዊ ዳኛ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Free will' የሚለውን ፍልስፍናዊ ጽንሰ-ሀሳብ በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ነፃ ፈቃድ (Free will - Moral agency and autonomy)",
            "ግዴታ ብቻ",
            "ውሸት",
            "አደጋ"
          ],
          "answerIndex": 0,
          "explanation": "«ነፃ ፈቃድ» የሰው ልጅ የራሱን ምርጫ በነጻነት የመወሰን ፍልስፍናዊ እና ህሊናዊ አቅም ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የህሊና እና የተፈጥሮ ህግ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ህሊና፣ የተፈጥሮ ህግ፣ ነፃ ፈቃድ፣ እኩልነት፣ ሰብአዊ ክብር እና ፍትህ።",
            "ወረቀት፣ እርሳስ፣ ላጲስ እና ደብተር።",
            "ሰሌዳ፣ ጠመኔ እና ወንበር።",
            "በአማርኛ የህሊና ጽንሰ-ሀሳብ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የህሊና እና የተፈጥሮ ህግጋት መሰረታዊ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ህሊና / Conscience' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ህሊና",
            "ሕሊና"
          ],
          "explanation": "ትክክለኛው ቃል «ህሊና» ወይም «ሕሊና» (Həllina) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u26-l5": {
    "id": "am-u26-l5",
    "subject": "amharic",
    "unit": 26,
    "lessonNumber": 5,
    "title": "የክፍል 26 አጠቃላይ ማጠቃለያ (Unit 26 Grand Synthesis & Ethiopian Rational Philosophy)",
    "level": "C1",
    "objective": "የዘርአ ያዕቆብን፣ የወልደ ህይወትን፣ የስነ-አመክንዮንና የተፈጥሮ ህግጋትን ፍልስፍና ያቀናጀ የተሟላ ፍልስፍናዊ ትንተና ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፳፮ አጠቃላይ የኢትዮጵያ ፍልስፍና እና የምክንያታዊነት ማጠቃለያ:\n\n፩. ሐተታ ዘርአ ያዕቆብ:\n- ሐተታ፣ ምክንያት፣ የልብ ብርሃን፣ እውነትን መመርመር እና ማስተዋል የታነጹበት የምክንያታዊነት ጥበብ።\n\n፪. የወልደ ህይወት ስነ-ምግባር:\n- ስነ-ምግባር፣ የስራ ክብር፣ ፍትህ፣ ወንድማማችነት፣ እኩልነት እና ማህበራዊ ቅንነት።\n\n፫. ስነ-አመክንዮ:\n- መነሻ ሀሳብ፣ መደምደሚያ፣ አመክንዮአዊ ሙግት፣ ማመዛዘን እና የእውነት ማረጋገጫ።\n\n፬. ህሊና እና የተፈጥሮ ህግ:\n- ህሊና፣ የተፈጥሮ ህግ፣ ነፃ ፈቃድ እና ሰብአዊ ክብር የተዋሃዱበት ዘላለማዊ የፍልስፍና ስርዓት።",
      "examples": [
        {
          "target": "የኢትዮጵያ ፍልስፍና በዘርአ ያዕቆብ ምክንያታዊነት፣ በወልደ ህይወት ስነ-ምግባር እና በህሊና ፍርድ የጎለበተ ነው።",
          "reading": "Yä'Ityop’əya fəlsəfənna bäZär'a Ya'əqob məkənyatawinnät, bäWäldä Həywät sənä-məgbar ənna bähəllina fərd yägoläbbätä näw. [jɛʔitjoˈpʼɨja fɨlsɨˈfɨnːa bɛzɛrʔa jaʔɨˈkʼob mɨkɨnjataˈwinːɛt bɛwɛldɛ hɨjˈwɛt sɨnɛmɨɡˈbar ʔɨnːa bɛhɨlːiˈna fɨrd jɛɡolɛbːɛˈtɛ nɛw] (yeh-eet-yoh-P'EE-yah ful-suh-fun-NAH beh-zehr-ah yah-uh-K'OHB muh-kun-yah-tah-WEEN-net, beh-wel-deh huy-WET suh-neh-mug-BAHR un-nah beh-hul-lee-NAH fur-D yeh-goh-leb-beh-TEH new)",
          "translation": "Ethiopian philosophy is enriched by Zera Yacob's rationality, Walda Heywat's ethics, and the verdict of conscience."
        },
        {
          "target": "ፈላስፎቹ የተፈጥሮ ህግን እና ስነ-አመክንዮን መሰረት በማድረግ እውነትን በምክንያት የመመርመርን መንገድ አሳዩ።",
          "reading": "Fälasəfočču yätäfät’ro həggən ənna sənä-amäkənyon mäsärät bamadəräg əwnätən bäməkənyat yämämärmärən mängäd asayyu. [fɛlasɨfoˈtʃːu jɛtɛfɛtʼˈro hɨɡːɨn ʔɨnːa sɨnɛʔamɛkɨnˈjon mɛsɛˈrɛt bamaˈdrɛɡ ʔɨwˈnɛtɨn bɛmɨkɨnˈjat jɛmɛmɛrˈmɛrɨn mɛnˈɡɛd ʔasaˈjːu] (feh-lah-suh-fohch-CHOO yeh-teh-fet'-ROH hug-GUN un-nah suh-neh-ah-mek-un-YOHN meh-seh-RET bah-mah-dreg ew-NEH-tun beh-muh-kun-YAHT yeh-meh-mer-MEH-run men-GED ah-SYE-yoo)",
          "translation": "Grounded in natural law and logic, the philosophers showed the way of investigating truth through reason."
        },
        {
          "target": "የሰው ልጅ በነፃ ፈቃዱ እና በስራው ክብር አማካኝነት መልካም ማህበረሰብ የመገንባት ታላቅ ሀላፊነት አለበት።",
          "reading": "Yäsäw ləğ bänäts’a fäqadu ənna bäsəraw kəbər amakanyənnät mälkam mahəbräsäb yämägänbat talaq halafinnät alläbät. [jɛsɛw lɨdʒ bɛnɛˈtsʼa fɛkʼaˈdu ʔɨnːa bɛsɨˈraw kɨˈbɨr ʔamaˈkaɲɨnːɛt mɛlˈkam mahɨbrɛˈsɛb jəmɛɡɛnˈbat taˈlakʼ halaˈfinːɛt ʔalːɛˈbɛt] (yeh-SEH-w luhj beh-neh-TS'AH feh-k'ah-DOO un-nah beh-suh-RAH-woo kuh-BUR ah-mah-kahn-yuhn-NET mel-KAHM mah-hub-reh-SEB yeh-meh-gen-BAHT tah-LAHK' hah-lah-FEEN-net ahl-leh-BET)",
          "translation": "Through free will and dignity of work, human beings bear a great responsibility to build a virtuous society."
        }
      ],
      "mnemonics": [
        "Grand Synthesis 26: Reason (ዘርአ ያዕቆብ) + Ethics (ወልደ ህይወት) + Logic (አመክንዮ) + Conscience (ህሊና)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ ፍልስፍና ዓለም አቀፋዊ እውቅና ያገኘ እና የአፍሪካን ምክንያታዊ የአስተሳሰብ ጥልቀት ለዓለም ያስመሰከረ ታላቅ የጥበብ ማማ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የኢትዮጵያ ፍልስፍና ውህደትን የያዘው የትኛው ነው?",
          "options": [
            "የኢትዮጵያ ፍልስፍና በዘርአ ያዕቆብ ምክንያታዊነት፣ በወልደ ህይወት ስነ-ምግባር እና በህሊና ፍርድ የጎለበተ ነው። (Complete philosophical synthesis combining rationality, ethics, and conscience)",
            "ምንም ፍልስፍና የለም",
            "ሁሉም ተራ ቃላት ናቸው",
            "ምክንያት የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ የዘርአ ያዕቆብን፣ የወልደ ህይወትንና የህሊናን ፍልስፍና በአንድነት ያጠቃለለ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ምክንያታዊነትን እና ስነ-ምግባርን ያጣመረ ትክክለኛ ፍልስፍናዊ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ፈላስፋው እውነትን በምክንያት በመመርመር መልካም ስነ-ምግባርን እና ፍትህን አብራራ። (The philosopher investigated truth through reason and explained ethics and justice - Accurate unified sentence)",
            "ምንም ማብራሪያ አልተሰጠም",
            "ስነ-ምግባር የለም",
            "ፍትህ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ ምክንያታዊ ምርምርን እና የስነ-ምግባር ፍልስፍናን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 26 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የሐተታ ዘርአ ያዕቆብ ምክንያታዊነት፣ የወልደ ህይወት ስነ-ምግባር፣ የስነ-አመክንዮ መሰረቶች፣ እንዲሁም የህሊና እና የተፈጥሮ ህግጋት ተካተዋል።",
            "ይህ ክፍል ስለ ምግብ ዝግጅት ብቻ ነው።",
            "በኢትዮጵያ ምክንያታዊ ፍልስፍና አልነበረም።",
            "ሁሉም ሰዎች ተመሳሳይ ህሊና የላቸውም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 26ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ፍልስፍና / Philosophy' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ፍልስፍና"
          ],
          "explanation": "ትክክለኛው ቃል «ፍልስፍና» (Fəlsəfənna) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u27-l1": {
    "id": "am-u27-l1",
    "subject": "amharic",
    "unit": 27,
    "lessonNumber": 1,
    "title": "አራቱ ባህላዊ የሙዚቃ ቅኝቶች (The Four Modal Music Scales)",
    "level": "C1",
    "objective": "አራቱን የኢትዮጵያ የሙዚቃ ቅኝቶች (ትዝታ፣ ባቲ፣ አምባሰል፣ አንቺሆዬ) እና ባህሪያቸውን መተንተን።",
    "presentation": {
      "explanation": "የኢትዮጵያ አራቱ ታላላቅ የሙዚቃ ቅኝቶች መዋቅር:\n\n፩. አራቱ ቅኝቶች:\n- ትዝታ (ናፍቆትና ትውስታን የሚገልጽ ቅኝት)\n- ባቲ (በረሃማና ልዩ የፍቅር ስሜት ያለው ቅኝት)\n- አምባሰል (የተራራማ አካባቢዎችና የጀግንነት ቅኝት)\n- አንቺሆዬ (የተመስጦ፣ የሰርግና የደስታ ቅኝት)።\n\n፪. ዋና ባህሪያት:\n- እነዚህ ቅኝቶች የኢትዮጵያን የሙዚቃ ባህል ልዩ የሚያደርጉ አምስት የድምፅ እርከን (Pentatonic) ያላቸው ድንቅ የዜማ ቅርሶች ናቸው።",
      "examples": [
        {
          "target": "ድምጻዊው በትዝታ ቅኝት የተጫወተው ጥልቅ ዜማ የሁሉንም አድማጭ ልብ በናፍቆት አራሰ።",
          "reading": "Dəmts’awiw bäTəzzəta qənyət yätäč’awwätäw t’ələq zema yähullunəm adəmač’ ləbb bänafəqot arasä. [dɨmtsʼaˈwiw bɛtɨzːɨˈta kʼɨɲɨt jɛtɛtʃʼaˈwːɛtɛw tʼɨˈlɨkʼ zeˈma jɛhulːuˈnɨm ʔadɨˈmatʃʼ lɨbː bɛnafɨˈkʼot ʔaˈrasɛ] (dum-ts'ah-WEEW beh-tuz-zuh-TAH k'un-yut yeh-teh-ch'aw-weh-TEW t'uh-LUK' zay-MAH yeh-hool-LOO-num ahd-MAHCH' lub-B beh-nahf-K'OHT ah-RAH-seh)",
          "translation": "The profound melody played by the vocalist in the Tizita mode filled the hearts of all listeners with nostalgia."
        },
        {
          "target": "የባቲ እና የአምባሰል ቅኝቶች የኢትዮጵያን ረቂቅ የሙዚቃ ቅርስ ለዓለም አቀፍ መድረክ አስተዋውቀዋል።",
          "reading": "YäBati ənna yä'Ambasäl qənyätočč yä'Ityop’əyan räqiq yämuzika qərs lä'aläm aqäf mädräk astäwawwəqäwal. [jɛbaˈti ʔɨnːa jɛʔambaˈsɛl kʼɨɲɛˈtotʃː jɛʔitjoˈpʼɨjan rɛˈkʼikʼ jɛmuziˈka kʼɨrs ləʔaˈlɛm ʔaˈkʼɛf mɛdˈrɛk ʔastɛwawːɨˈkʼɛwal] (yeh-bah-TEE un-nah yeh-ahm-bah-SEL k'un-yeh-TOHCH yeh-eet-yoh-P'EE-yahn reh-K'EEK' yeh-moo-zee-KAH k'urs luh-ah-LEM ah-K'EF med-REK ahs-teh-wow-wuh-K'EH-wahl)",
          "translation": "The Bati and Ambasel modes introduced Ethiopia's subtle musical heritage to the international stage."
        },
        {
          "target": "በአንቺሆዬ ቅኝት የሚዘፈኑ ባህላዊ ዘፈኖች በሰርግ እና በበዓላት ወቅት ታላቅ ድምቀት ይሰጣሉ።",
          "reading": "Bä'Ančihoye qənyət yämmizzäffänu bahəlawi zäfänočč bäsärg ənna bäbä'alat wäqt talaq dəməqqät yəsät’allu. [bɛʔantʃihoˈje kʼɨɲɨt jɛmːizːɛˈfːɛnu bahɨlaˈwi zɛfɛˈnotʃː bɛsɛrɡ ʔɨnːa bɛbɛʔaˈlat wɛkʼt taˈlakʼ dɨmɨkʼːɛt jɨsɛˈtʼalːu] (beh-ahn-chee-hoh-YAY k'un-yut yem-miz-zef-FEH-noo bah-huh-lah-WEE zeh-feh-NOHCH beh-ser-G un-nah beh-beh-ah-LAHT wehk'-T tah-LAHK' dum-uk'-k'et yuh-set'-ahl-LOO)",
          "translation": "Traditional songs sung in the Anchihoye scale give great splendor during weddings and holidays."
        }
      ],
      "mnemonics": [
        "4 Qenet: ትዝታ (Memory) + ባቲ (Desert/Love) + አምባሰል (Mountains) + አንቺሆዬ (Celebration)!"
      ],
      "culturalNotes": [
        "አራቱ ቅኝቶች የኢትዮጵያ ህዝብ ለዘመናት ደስታውን፣ ሀዘኑን፣ ናፍቆቱንና ጀግንነቱን የገለጸባቸው አምስት ድምፆች (Pentatonic scale) ናቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የናፍቆትና የትውስታ ስሜትን የሚገልጸው አንጋፋ የኢትዮጵያ ቅኝት የትኛው ነው?",
          "options": [
            "ትዝታ (Tizita - The nostalgic and reflective modal scale)",
            "ስፖርት",
            "ቢሮ",
            "መኪና"
          ],
          "answerIndex": 0,
          "explanation": "«ትዝታ» ጥልቅ የናፍቆት እና የትውስታ ስሜትን የሚያንጸባርቅ ዝነኛ የኢትዮጵያ የሙዚቃ ቅኝት ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Musical scale / mode' የሚለውን ቃል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ቅኝት (Musical scale, mode - Traditional melodic framework)",
            "ስንኝ",
            "ልቦለድ",
            "ደብዳቤ"
          ],
          "answerIndex": 0,
          "explanation": "«ቅኝት» በኢትዮጵያ ሙዚቃ ውስጥ የድምፆችን ቅንብርና ዜማዊ ስልት የሚያመለክት ቃል ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "አራቱን የኢትዮጵያ ባህላዊ ቅኝቶች በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ትዝታ፣ ባቲ፣ አምባሰል እና አንቺሆዬ።",
            "ጨው፣ በርበሬ፣ ዘይት እና ሽንኩርት።",
            "እርሳስ፣ ደብተር፣ ላጲስ እና መቅረጫ።",
            "በኢትዮጵያ ቅኝት የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ አራቱን ዋና ዋና ባህላዊ ቅኝቶች በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ቅኝት / Musical scale, mode' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ቅኝት"
          ],
          "explanation": "ትክክለኛው ቃል «ቅኝት» (Qənyət) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u27-l2": {
    "id": "am-u27-l2",
    "subject": "amharic",
    "unit": 27,
    "lessonNumber": 2,
    "title": "ባህላዊ የሙዚቃ መሳሪያዎች እና አጨዋወት (Traditional Musical Instruments)",
    "level": "C1",
    "objective": "የኢትዮጵያን ባህላዊ የሙዚቃ መሳሪያዎች (ክራር፣ ማሲንቆ፣ ዋሽንት፣ ከበሮ፣ በገና) እና አጨዋወታቸውን ማወቅ።",
    "presentation": {
      "explanation": "የኢትዮጵያ ባህላዊ የሙዚቃ መሳሪያዎች መዋቅር:\n\n፩. ባለአውታር መሳሪያዎች:\n- ክራር (ባለ ስድስት አውታር መሳሪያ)\n- ማሲንቆ (ባለ አንድ አውታር ባለቀስት መሳሪያ)\n- በገና (ባለ አስር አውታር መንፈሳዊ መሳሪያ)።\n\n፪. የንፋስና የምት መሳሪያዎች:\n- ዋሽንት (የቀርከሃ የንፋስ መሳሪያ)\n- ከበሮ እና ጸናጽል (የምትና የዜማ ማጀቢያ)።",
      "examples": [
        {
          "target": "አዝማሪው በማሲንቆው እያጀበ ያሰማው የቅኔ ግጥም ታዳሚውን በእጅጉ አስደሰተ።",
          "reading": "Azmariw bamasinqow əyyağğäbä yasämmaw yäqəne gət’əm taddamiwən bä'əğğəgu asdässätä. [ʔazmaˈriw bamasinˈkʼow ʔɨjːadʒːɛˈbɛ jasɛmːaw jɛkʼɨˈne ɡɨtʼɨm tadːaˈmiwɨn bɛʔɨdʒːɨˈɡu ʔasdɛsːɛˈtɛ] (ahz-mah-REEW bah-mah-seen-K'OHW uhy-yahj-jeh-BEH yah-sem-MAHW yeh-k'uh-NAY guh-T'UM tahd-dah-MEE-wun beh-uhj-juh-GOO ahs-des-seh-TEH)",
          "translation": "The Azmari singing poetic verse while accompanying himself with his Masinqo greatly pleased the audience."
        },
        {
          "target": "በገና በጸጥታ እና በመንፈሳዊ ተመስጦ የሚደረደር የኢትዮጵያ ጥንታዊ የሙዚቃ መሳሪያ ነው።",
          "reading": "Bägäna bäts’ät’t’əta ənna bämänfäsawi täməsət’o yämmiddäräddär yä'Ityop’əya t’əntawi yämuzika mäsariya näw. [bɛɡɛˈna bɛtsʼɛtʼːɨˈta ʔɨnːa bɛmɛnfɛsaˈwi tɛmɨsɨˈtʼo jɛmːidːɛrɛdːɛr jɛʔitjoˈpʼɨja tʼɨntaˈwi jɛmuziˈka mɛsaˈrija nɛw] (beh-geh-NAH beh-ts'et'-t'uh-TAH un-nah beh-men-feh-sah-WEE teh-muh-suh-T'OH yem-mid-deh-red-DER yeh-eet-yoh-P'EE-yah t'un-tah-WEE yeh-moo-zee-KAH meh-sah-ree-YAH new)",
          "translation": "The Begena is an ancient Ethiopian musical instrument played with quietude and spiritual contemplation."
        },
        {
          "target": "የዋሽንት እና የክራር ቅንብር በገጠሪቱ ኢትዮጵያ የተፈጥሮ ውበትን የሚያወድስ ድንቅ ዜማ ያመነጫል።",
          "reading": "Yäwašənt ənna yäkərar qənəbbər bägät’t’äritu Ityop’əya yätäfät’ro wəbätən yämiyawäddəs dənq zema yamänäččal. [jɛwaˈʃɨnt ʔɨnːa jɛkɨˈrar kʼɨnɨbːɨr bɛɡɛtʼːɛriˈtu ʔitjoˈpʼɨja jɛtɛfɛtʼˈro wɨbɛˈtɨn jɛmijaˈwɛdːɨs dɨnkʼ zeˈma jamɛnɛˈtʃːal] (yeh-wah-SHUNT un-nah yeh-kuh-RAHR k'un-ub-BUR beh-get'-t'eh-ree-TOO eet-yoh-P'EE-yah yeh-teh-fet'-ROH wuh-beh-TUN yeh-mee-yah-wed-DUS dunk' zay-MAH yah-meh-nech-CHAHL)",
          "translation": "The combination of Washint and Krar produces a magnificent melody praising nature's beauty in rural Ethiopia."
        }
      ],
      "mnemonics": [
        "Instruments: ማሲንቆ (1-string bowed) + ክራር (6-string bowl lyre) + በገና (10-string box lyre) + ዋሽንት (Flute)!"
      ],
      "culturalNotes": [
        "በገና የዳዊት በገና ተብሎ የሚታወቅ እና በዐቢይ ጾም ወቅት መንፈሳዊ ማስተዋልን ለማዳበር የሚደረደር የተቀደሰ መሳሪያ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ባለ አንድ አውታር ሆኖ በቀስት የሚጫወቱት ታዋቂው የኢትዮጵያ ባህላዊ የሙዚቃ መሳሪያ የትኛው ነው?",
          "options": [
            "ማሲንቆ (Masinqo - Single-stringed bowed traditional lute)",
            "ከበሮ",
            "ፒያኖ",
            "ጊታር"
          ],
          "answerIndex": 0,
          "explanation": "«ማሲንቆ» ባለ አንድ አውታር ሆኖ በፈረስ ጭራ ቀስት የሚደረደር የኢትዮጵያ አንጋፋ መሳሪያ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ባለ አስር አውታር ሆኖ ለመንፈሳዊ ዜማ የሚያገለግለው መሳሪያ ምን ይባላል?",
          "options": [
            "በገና (Begena - Ten-stringed spiritual harp / box lyre)",
            "ዋሽንት",
            "ከበሮ",
            "መለከት"
          ],
          "answerIndex": 0,
          "explanation": "«በገና» ባለ አስር አውታር የሆነ እና ለመንፈሳዊ ተመስጦ የሚያገለግል ጥንታዊ መሳሪያ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የኢትዮጵያን ባህላዊ የሙዚቃ መሳሪያዎች በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ክራር፣ ማሲንቆ፣ ዋሽንት፣ ከበሮ፣ በገና እና ጸናጽል።",
            "መዶሻ፣ መጋዝ፣ ሚስማር እና መፍቻ።",
            "ሳህን፣ ማንኪያ፣ ሹካ እና ብርጭቆ።",
            "በኢትዮጵያ የሙዚቃ መሳሪያ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ዋና ዋና ባህላዊ የሙዚቃ መሳሪያዎችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ማሲንቆ / Masinqo, one-stringed fiddle' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ማሲንቆ",
            "ማሲንቆ"
          ],
          "explanation": "ትክክለኛው ቃል «ማሲንቆ» (Masinqo) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u27-l3": {
    "id": "am-u27-l3",
    "subject": "amharic",
    "unit": 27,
    "lessonNumber": 3,
    "title": "የያሬዳዊ ዜማ ስልቶች እና መንፈሳዊ ቅርስ (Yaredic Sacred Chant & Melodic Modes)",
    "level": "C1",
    "objective": "የቅዱስ ያሬድን ሶስቱን የዜማ ስልቶች (ግዕዝ፣ እዝል፣ አራራይ) እና የዜማ ምልክቶችን ማወቅ።",
    "presentation": {
      "explanation": "የቅዱስ ያሬድ የዜማ ስልቶች እና የዝማሬ ስርዓት መዋቅር:\n\n፩. ሶስቱ የያሬድ ዜማዎች:\n- ግዕዝ (የመጀመሪያው እና ቀጥተኛው የዜማ ስልት)\n- እዝል (ዝግ ያለ፣ ጥልቅ እና የሚያስተክዝ ዜማ)\n- አራራይ (የማረከ፣ ረቂቅና የደስታ ዜማ)።\n\n፪. የያሬዳዊ ዜማ መሳሪያዎች:\n- ጸናጽል፣ መቋሚያ እና ከበሮ ለዝማሬው ማስተካከያ ያገለግላሉ። ቅዱስ ያሬድ በ፮ኛው መቶ ክፍለ ዘመን የሙዚቃ ኖታን (ምልክቶችን) የፈጠረ ቀዳሚ ሊቅ ነው።",
      "examples": [
        {
          "target": "ቅዱስ ያሬድ በስድስተኛው መቶ ክፍለ ዘመን ሶስቱን ታላላቅ የዜማ ስልቶች ለኢትዮጵያ አበረከተ።",
          "reading": "Qəddus Yared bäsəddəsətänyaw mäto kəflä zämän sostun talaq yäzema səltočč lä'Ityop’əya abärkätä. [kʼɨdːus jaˈred bɛsɨdːɨsɨtɛˈɲaw mɛˈto kɨfˈlɛ zɛˈmɛn sosˈtun taˈlakʼ jɛzeˈma sɨlˈtotʃː ləʔitjoˈpʼɨja ʔabɛrkɨˈtɛ] (k'ood-DOOS yah-RAYD beh-sud-duh-suh-ten-YAHW meh-TOH kuf-LEH zeh-MEN sohs-TOON tah-LAHK' yeh-zay-MAH sul-TOHCH luh-eet-yoh-P'EE-yah ah-ber-kuh-TEH)",
          "translation": "Saint Yared contributed the three great melodic modes to Ethiopia in the sixth century."
        },
        {
          "target": "የካህናቱ ማህሌት በጸናጽል እና በመቋሚያ እየተመራ በግዕዝ፣ በእዝልና በአራራይ ዜማዎች ደመቀ።",
          "reading": "Yäkahənatun mahlət bäts’änats’əl ənna bämäqwamiya əyyätämärra bäGə'əz, bä'Əzəl ənna bä'Araray zemawwočč dämmäqä. [jɛkahɨnaˈtun mahˈlet bɛtsʼɛnaˈtsʼɨl ʔɨnːa bɛmɛkʼʷaˈmija ʔɨjːatɛmɛrːa bɛɡɨʔɨz bɛʔɨzɨl ʔɨnːa bɛʔaraˈraj zeˈmawwotʃː dɛmːɛˈkʼɛ] (yeh-kah-huh-nah-TOON mah-huh-LAYT beh-ts'eh-NAH-ts'ul un-nah beh-mek'-wah-MEE-yah uhy-yeh-teh-mer-RAH beh-GUH-uz, beh-UZ-ul un-nah beh-ah-rah-RYE zay-mah-wohch-CH dem-meh-K'EH)",
          "translation": "The priests' liturgical chant, guided by sistrum and prayer staff, shone with Geez, Ezil, and Araray melodies."
        },
        {
          "target": "ያሬዳዊ የዜማ ምልክቶች በዓለም ታሪክ ውስጥ ከተመዘገቡ ቀደምት የሙዚቃ ኖታዎች መካከል ይመደባሉ።",
          "reading": "Yaredawi yäzema mələkkətočč bä'aläm tarik wəsət’ kätämäzzägäbu qädämt yämuzika notawočč mäkkakäl yəmmäddäballu. [jaredaˈwi jɛzeˈma mɨlɨkːɨˈtotʃː bəʔaˈlɛm taˈrik wɨstʼ kɛtɛmɛzːɛˈɡɛbu kʼɛˈdɛmt jɛmuziˈka notaˈwotʃː mɛkːaˈkɛl jɨmːɛdːɛbaˈlːu] (yah-ray-dah-WEE yeh-zay-MAH muh-luk-kuh-TOHCH beh-ah-LEM tah-REEK woos-T' keh-teh-mez-zeg-EH-boo k'eh-DEMT yeh-moo-zee-KAH noh-tah-wohch-CH meh-kah-KEL yum-med-deh-bahl-LOO)",
          "translation": "Yaredic musical notations are classified among the earliest musical notations recorded in world history."
        }
      ],
      "mnemonics": [
        "3 Sacred Chants: ግዕዝ (Geez - Direct) + እዝል (Ezil - Heavy/Sad) + አራራይ (Araray - Joyful)!"
      ],
      "culturalNotes": [
        "ቅዱስ ያሬድ የደረሳቸው ዜማዎች በኢትዮጵያ ኦርቶዶክስ ተዋህዶ ቤተክርስቲያን በድጓ፣ ጾመ ድጓ፣ ምዕራፍና ዝማሬ መጻሕፍት ውስጥ ተጠብቀው ይገኛሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በ፮ኛው መቶ ክፍለ ዘመን የኢትዮጵያን የዜማ ስልቶች እና የሙዚቃ ኖታዎችን ያዘጋጁት ሊቅ ማን ናቸው?",
          "options": [
            "ቅዱስ ያሬድ (Saint Yared - 6th-century father of Ethiopian liturgical music)",
            "ከበደ ሚካኤል",
            "ሐዲስ ዓለማየሁ",
            "ዘርአ ያዕቆብ"
          ],
          "answerIndex": 0,
          "explanation": "ቅዱስ ያሬድ በስድስተኛው መቶ ክፍለ ዘመን ግዕዝ፣ እዝልና አራራይ የተባሉትን ሶስት የዜማ ስልቶች የፈጠሩ ታላቅ ሊቅ ናቸው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የያሬዳዊ ዜማ ሶስቱን ስልቶች በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ግዕዝ፣ እዝል እና አራራይ (Geez, Ezil, and Araray - The three Yaredic musical modes)",
            "ትዝታ፣ ባቲ እና አምባሰል",
            "ክራር፣ ማሲንቆ እና በገና",
            "ሰኞ፣ ማክሰኞ እና እሮብ"
          ],
          "answerIndex": 0,
          "explanation": "ግዕዝ፣ እዝልና አራራይ የቅዱስ ያሬድ ሶስቱ መሰረታዊ የዜማ ስልቶች ናቸው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የያሬዳዊ ዜማ እና የዝማሬ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ቅዱስ ያሬድ፣ ግዕዝ፣ እዝል፣ አራራይ፣ ጸናጽል እና መቋሚያ።",
            "ስጋ፣ ዳቦ፣ ቅቤ እና ወተት።",
            "ጫማ፣ ኮት እና ሱሪ።",
            "በኢትዮጵያ የዜማ ስልት የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የያሬዳዊ ዜማ መሰረታዊ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ዜማ / Melody, chant' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ዜማ"
          ],
          "explanation": "ትክክለኛው ቃል «ዜማ» (Zema) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u27-l4": {
    "id": "am-u27-l4",
    "subject": "amharic",
    "unit": 27,
    "lessonNumber": 4,
    "title": "የዘመናዊ ኢትዮ-ጃዝ እና የሙዚቃ ቅንብር (Ethio-Jazz & Modern Arrangement)",
    "level": "C1",
    "objective": "የኢትዮ-ጃዝ ፈጠራን (ሙላቱ አስታጥቄ)፣ የዘመናዊ ሙዚቃ ቅንብርንና ዓለም አቀፍ ዝናን መተንተን።",
    "presentation": {
      "explanation": "የኢትዮ-ጃዝ እና የዘመናዊ ሙዚቃ ቅንብር መዋቅር:\n\n፩. የኢትዮ-ጃዝ መወለድ:\n- ሙላቱ አስታጥቄ (የኢትዮ-ጃዝ አባት)\n- ባህላዊ ቅኝቶች ከምዕራባዊ ጃዝ እና ቫይብራፎን ጋር የተዋሃዱበት ፈጠራ።\n\n፪. የዘመናዊ ሙዚቃ ቃላት:\n- አቀናባሪ (Arranger / Composer) / ድምጻዊ (Vocalist)\n- የሙዚቃ ባንድ (Musical band) / ቅንብር (Arrangement/Composition)።",
      "examples": [
        {
          "target": "ሙላቱ አስታጥቄ ባህላዊ ቅኝቶችን ከጃዝ ጋር በማዋሃድ አለም አቀፍ ዝና ያተረፈውን ኢትዮ-ጃዝ ፈጠረ።",
          "reading": "Mulatu Astatqe bahəlawi qənyätoččən käJaz gar bamäwwahäd aläm aqäf zəna yatärräfäwən Ityo-Jaz fät’t’ärä. [mulaˈtu ʔastatʼˈkʼe bahɨlaˈwi kʼɨɲɛˈtotʃːɨn kɛdʒaz ɡar bamɛwːaˈhɛd ʔaˈlɛm ʔaˈkʼɛf zɨˈna jatɛrːɛˈfɛwɨn ʔitjoˈdʒaz fɛtʼːɛˈrɛ] (moo-LAH-too ahs-TAHT-k'ay bah-huh-lah-WEE k'un-yeh-TOHCH-chun keh-JAHZ gahr bah-mew-wah-HED ah-LEM ah-K'EF zuh-NAH yah-ter-reh-FEW-un eet-yoh-JAHZ fet'-t'eh-REH)",
          "translation": "Mulatu Astatke created the world-renowned Ethio-Jazz by merging traditional scales with jazz."
        },
        {
          "target": "የሙዚቃ አቀናባሪው ባህላዊ መሳሪያዎችን ከዘመናዊ መሳሪያዎች ጋር በማጣመር ድንቅ ቅንብር አዘጋጀ።",
          "reading": "Yämuzika aqänabariw bahəlawi mäsariyawoččən käzämänawi mäsariyawočč gar bamat’amär dənq qənəbbər azägağğä. [jɛmuziˈka ʔakʼɛnabaˈriw bahɨlaˈwi mɛsarijaˈwotʃːɨn kɛzɛmɛnaˈwi mɛsarijaˈwotʃː ɡar bamatʼaˈmɛr dɨnkʼ kʼɨnɨbːɨr ʔazɛɡadʒːɛ] (yeh-moo-zee-KAH ah-k'eh-nah-bah-REEW bah-huh-lah-WEE meh-sah-ree-yah-WOHCH-chun keh-zeh-meh-nah-WEE meh-sah-ree-yah-WOHCH gahr bah-maht'-ah-MER dunk' k'un-ub-BUR ah-zeg-ahj-JEH)",
          "translation": "The music arranger prepared a magnificent composition by blending traditional instruments with modern instruments."
        },
        {
          "target": "የኢትዮጵያ ዘመናዊ ሙዚቃ በዓለም ዙሪያ በሚሊዮኖች የሚቆጠሩ አድናቂዎችን በማፍራት ላይ ይገኛል።",
          "reading": "Yä'Ityop’əya zämänawi muzika bä'aläm zuriya bämiliyonočč yämmiqqot’t’äru adənaqiyoččən bamafrat lay yəggänyal. [jɛʔitjoˈpʼɨja zɛmɛnaˈwi muziˈka bəʔaˈlɛm zuˈrija bɛmilijoˈnotʃː jɛmːikʼːotʼːɛˈru ʔadɨnakʼiˈjotʃːɨn bamafˈrat laj jɨɡːɛˈɲal] (yeh-eet-yoh-P'EE-yah zeh-meh-nah-WEE moo-zee-KAH beh-ah-LEM zoo-REE-yah beh-mee-lee-yoh-NOHCH yem-mik'-k'oht'-t'eh-ROO ahd-nah-k'ee-YOHCH-chun bah-mahf-RAHT lye yug-gen-YAHL)",
          "translation": "Ethiopian modern music is producing millions of fans across the globe."
        }
      ],
      "mnemonics": [
        "Ethio-Jazz Formula: ሙላቱ አስታጥቄ (Father of Ethio-Jazz) + አቀናባሪ (Arranger) + ድምጻዊ (Singer)!"
      ],
      "culturalNotes": [
        "በ1960ዎቹ እና 1970ዎቹ (Golden Age of Ethiopian Music) የታነጹት የኢትዮ-ጃዝ ስራዎች በሆሊውድ ፊልሞችና በዓለም አቀፍ ፌስቲቫሎች ላይ በሰፊው ይደመጣሉ።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "የኢትዮ-ጃዝ (Ethio-Jazz) ፈጣሪ እና አባት በመባል በዓለም አቀፍ ደረጃ የሚታወቁት ሙዚቀኛ ማን ናቸው?",
          "options": [
            "ሙላቱ አስታጥቄ (Mulatu Astatke - Pioneer and father of Ethio-Jazz)",
            "ሐዲስ ዓለማየሁ",
            "ከበደ ሚካኤል",
            "ሎሬት ጸጋዬ"
          ],
          "answerIndex": 0,
          "explanation": "ሙላቱ አስታጥቄ የኢትዮጵያን አራቱን ቅኝቶች ከጃዝ ጋር በማዋሃድ የኢትዮ-ጃዝ ሙዚቃን የፈጠሩ ታላቅ ሙዚቀኛ ናቸው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Music arranger / composer' የሚለውን ቃል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "አቀናባሪ (Music arranger / composer)",
            "ነጋዴ",
            "አብራሪ",
            "ዶክተር"
          ],
          "answerIndex": 0,
          "explanation": "«አቀናባሪ» የሙዚቃ ድምፆችን፣ መሳሪያዎችንና ዜማዎችን የሚያቀናጅ ባለሙያ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የዘመናዊ ሙዚቃ እና የኢትዮ-ጃዝ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ኢትዮ-ጃዝ፣ ሙላቱ አስታጥቄ፣ አቀናባሪ፣ ድምጻዊ፣ ባንድ እና ቅንብር።",
            "ጠመኔ፣ ሰሌዳ፣ ወንበር እና ጠረጴዛ።",
            "ወተት፣ አይብ፣ ቅቤ እና እርጎ።",
            "በኢትዮጵያ ዘመናዊ ሙዚቃ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የዘመናዊ ሙዚቃ እና የኢትዮ-ጃዝ ቁልፍ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አቀናባሪ / Music arranger, composer' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አቀናባሪ"
          ],
          "explanation": "ትክክለኛው ቃል «አቀናባሪ» (Aqänabari) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u27-l5": {
    "id": "am-u27-l5",
    "subject": "amharic",
    "unit": 27,
    "lessonNumber": 5,
    "title": "የክፍል 27 አጠቃላይ ማጠቃለያ (Unit 27 Grand Synthesis & Ethiopian Musical Heritage)",
    "level": "C1",
    "objective": "አራቱን ቅኝቶች፣ ባህላዊ መሳሪያዎችን፣ የያሬዳዊ ዜማንና ኢትዮ-ጃዝን ያቀናጀ የተሟላ የሙዚቃ ውይይት ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፳፯ አጠቃላይ የኢትዮጵያ ሙዚቃ እና የዜማ ቅርስ ማጠቃለያ:\n\n፩. አራቱ ቅኝቶች:\n- ትዝታ፣ ባቲ፣ አምባሰል፣ አንቺሆዬ።\n\n፪. ባህላዊ መሳሪያዎች:\n- ክራር፣ ማሲንቆ፣ ዋሽንት፣ ከበሮ፣ በገና፣ ጸናጽል።\n\n፫. ያሬዳዊ ዜማ:\n- ግዕዝ፣ እዝል፣ አራራይ፣ መቋሚያ።\n\n፬. ዘመናዊ ሙዚቃ እና ኢትዮ-ጃዝ:\n- ሙላቱ አስታጥቄ፣ አቀናባሪ፣ ድምጻዊ፣ ቅንብር።",
      "examples": [
        {
          "target": "የኢትዮጵያ ሙዚቃ በአራቱ ቅኝቶች፣ በባህላዊ መሳሪያዎች፣ በያሬዳዊ ዜማ እና በኢትዮ-ጃዝ ጥበብ የደመቀ ነው።",
          "reading": "Yä'Ityop’əya muzika bä'arattu qənyätočč, bäbahəlawi mäsariyawočč, bäYaredawi zema ənna bä'Ityo-Jaz t’əbäb yädämmäqä näw. [jɛʔitjoˈpʼɨja muziˈka bɛʔaratːu kʼɨɲɛˈtotʃː bɛbahɨlaˈwi mɛsarijaˈwotʃː bɛjaredaˈwi zeˈma ʔɨnːa bɛʔitjoˈdʒaz tʼɨˈbɛb jɛdɛmːɛˈkʼɛ nɛw] (yeh-eet-yoh-P'EE-yah moo-zee-KAH beh-ah-raht-TOO k'un-yeh-TOHCH, beh-bah-huh-lah-WEE meh-sah-ree-yah-WOHCH, beh-yah-ray-dah-WEE zay-MAH un-nah beh-eet-yoh-JAHZ t'uh-BEB yeh-dem-meh-K'EH new)",
          "translation": "Ethiopian music is resplendent with the four modal scales, traditional instruments, Yaredic sacred melody, and the art of Ethio-Jazz."
        },
        {
          "target": "አቀናባሪው የማሲንቆ እና የክራር ድምፅን ከያሬዳዊ ዜማ ጋር በማጣመር ልዩ የሙዚቃ ድግስ አቀረበ።",
          "reading": "Aqänabariw yämasinqo ənna yäkərar dəmts’ən käYaredawi zema gar bamat’amär ləyyu yämuzika dəggəs aqärräbä. [ʔakʼɛnabaˈriw jɛmasinˈkʼo ʔɨnːa jɛkɨˈrar dɨmˈtsʼɨn kɛjaredaˈwi zeˈma ɡar bamatʼaˈmɛr lɨjːu jɛmuziˈka dɨɡːɨs ʔakʼɛrːɛˈbɛ] (ah-k'eh-nah-bah-REEW yeh-mah-seen-K'OH un-nah yeh-kuh-RAHR dum-TS'UN keh-yah-ray-dah-WEE zay-MAH gahr bah-maht'-ah-MER luhy-YOO yeh-moo-zee-KAH dug-GUS ah-k'er-reh-BEH)",
          "translation": "The arranger presented an extraordinary musical feast by uniting the sounds of Masinqo and Krar with Yaredic chant."
        },
        {
          "target": "የኢትዮጵያ የሙዚቃ ቅርስ ከጥንታዊው ያሬድ ዘመን አንስቶ እስከ ዘመናዊው ጃዝ ድረስ ረጅም ጉዞ ተጉዟል።",
          "reading": "Yä'Ityop’əya yämuzika qərs kät’əntawiw Yared zämän anəsəto əskä zämänawiw Jaz dəräs räğğəm guzo tägwəzwal. [jɛʔitjoˈpʼɨja jɛmuziˈka kʼɨrs kɛtʼɨntaˈwiw jaˈred zɛˈmɛn ʔanɨsˈto ʔɨskɛ zɛmɛnaˈwiw dʒaz dɨˈrɛs rɛdʒːɨm ɡuˈzo tɛɡʷɨzˈwal] (yeh-eet-yoh-P'EE-yah yeh-moo-zee-KAH k'urs keh-t'un-tah-WEEW yah-RAYD zeh-MEN ah-nus-TOH us-KEH zeh-meh-nah-WEEW JAHZ duh-RES rej-JUM goo-ZOH teh-gwuz-WAHL)",
          "translation": "Ethiopia's musical heritage has traveled a long journey from the ancient Yared era up to modern Jazz."
        }
      ],
      "mnemonics": [
        "Grand Synthesis 27: Scales (ቅኝት) + Instruments (ማሲንቆ/ክራር) + Yared (ግዕዝ/እዝል/አራራይ) + Modern (ኢትዮ-ጃዝ)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ ሙዚቃ ሀገራዊ አንድነትን፣ ታሪክንና የህዝቦችን ባህላዊ ውበት የሚያንጸባርቅ አለም አቀፍ የኪነ-ጥበብ ሀብት ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የኢትዮጵያ ሙዚቃ ውህደትን የያዘው የትኛው ነው?",
          "options": [
            "የኢትዮጵያ ሙዚቃ በአራቱ ቅኝቶች፣ በባህላዊ መሳሪያዎች፣ በያሬዳዊ ዜማ እና በኢትዮ-ጃዝ ጥበብ የደመቀ ነው። (Complete musical synthesis combining scales, traditional instruments, Yaredic chant, and Ethio-Jazz)",
            "ምንም ሙዚቃ የለም",
            "ሁሉም ተራ ቃላት ናቸው",
            "ዜማ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ ቅኝቶችን፣ ባህላዊ መሳሪያዎችን፣ የያሬድ ዜማንና ዘመናዊ ጃዝን በአንድነት ያጠቃለለ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ቅኝትን እና የሙዚቃ መሳሪያዎችን ያጣመረ ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ድምጻዊው በማሲንቆ እና በክራር እየታጀበ በትዝታ ቅኝት የተዋበ ዜማ አቀረበ። (The singer presented a beautiful melody in the Tizita scale accompanied by Masinqo and Krar - Accurate unified sentence)",
            "ምንም ዜማ አልቀረበም",
            "መሳሪያ የለም",
            "ቅኝት የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ ቅኝትን እና ባህላዊ መሳሪያዎችን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 27 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "አራቱ ባህላዊ ቅኝቶች፣ ባህላዊ የሙዚቃ መሳሪያዎች፣ የያሬዳዊ ዜማ ስልቶች፣ እንዲሁም የዘመናዊ ኢትዮ-ጃዝ ቅንብር ተካተዋል።",
            "ይህ ክፍል ስለ ህክምና ብቻ ነው።",
            "በኢትዮጵያ ሙዚቃ አልነበረም።",
            "ሁሉም ቅኝቶች ተመሳሳይ ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 27ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ሙዚቃ / Music' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ሙዚቃ"
          ],
          "explanation": "ትክክለኛው ቃል «ሙዚቃ» (Muzika) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u28-l1": {
    "id": "am-u28-l1",
    "subject": "amharic",
    "unit": 28,
    "lessonNumber": 1,
    "title": "የአብያተ ክርስቲያናት ጥንታዊ ስዕሎች እና የብርሃነ-ስዕል ጥበብ (Church Frescoes & Manuscript Illumination)",
    "level": "C1",
    "objective": "የኢትዮጵያን ጥንታዊ የስዕል ጥበብ፣ የብራና መጻሕፍት ብርሃነ-ስዕላትንና የሰዓሊያን ስልትን መተንተን።",
    "presentation": {
      "explanation": "የኢትዮጵያ ጥንታዊ የስዕል እና የብርሃነ-ስዕል ጥበብ መዋቅር:\n\n፩. የጥበቡ መሰረቶች:\n- ስዕል፣ ሰዓሊ፣ ምስል፣ ብርሃነ-ስዕል እና የብራና ጽሑፍ።\n- ባህላዊ ቀለሞች (ከዕፅዋትና ከማዕድናት የሚዘጋጁ የተፈጥሮ ቀለማት)።\n\n፪. ዋና ባህሪያት:\n- የኢትዮጵያ ጥንታዊ ስዕሎች ትላልቅ ዓይኖች፣ ግልጽ መስመሮችና ብሩህ ቀለማት ያላቸው ሲሆን በመንፈሳዊ ታሪኮችና በቅዱሳን ገድላት ዙሪያ ያተኩራሉ።",
      "examples": [
        {
          "target": "ጥንታዊው ሰዓሊ በብራና መጽሐፉ ላይ የተፈጥሮ ቀለማትን ተጠቅሞ ድንቅ ብርሃነ-ስዕል ሳለ።",
          "reading": "T’əntawiw sä'ali bäbəranna mäts’əhafu lay yätäfät’ro qälämatən tät’äqəmo dənq bərəhanä-sə'əl salä. [tʼɨntaˈwiw sɛʔaˈli bɛbɨrˈanːa mɛtsʼɨˈhafu laj jɛtɛfɛtʼˈro kʼɛlɛmaˈtɨn tɛtʼɛkʼɨˈmo dɨnkʼ bɨrhaˈnɛsɨʔɨl saˈlɛ] (t'un-tah-WEEW seh-ah-LEE beh-bur-AHN-nah meh-ts'uh-HAH-foo lye yeh-teh-fet'-ROH k'eh-leh-mah-TUN tet'-ek'-uh-MOH dunk' bur-hah-neh-SUH-ul sah-LEH)",
          "translation": "Using natural pigments, the ancient painter illustrated a magnificent manuscript illumination upon the parchment book."
        },
        {
          "target": "በአብያተ ክርስቲያናት ግድግዳዎች ላይ የተሳሉት ስዕሎች የኢትዮጵያን የጥበብ ታሪክ እና መንፈሳዊ እሴት ያንጸባርቃሉ።",
          "reading": "Bä'abyatä krəstiyanat gədəggəddawočč lay yätäsalut sə'əločč yä'Ityop’əyan yät’əbäb tarik ənna mänfäsawi əset yants’äbarəqallu. [bɛʔabjaˈtɛ krɨstiˈjanat ɡɨdɨɡːɨdːaˈwotʃː laj jɛtɛsaˈlut sɨʔɨˈlotʃː jɛʔitjoˈpʼɨjan jɛtʼɨˈbɛb taˈrik ʔɨnːa mɛnfɛsaˈwi ʔɨˈset jantsʼɛbaˈrɨkʼalːu] (beh-ahb-yah-TEH kris-tee-yah-NAHT guh-dug-guh-dah-WOHCH lye yeh-teh-sah-LOOT suh-ul-OHCH yeh-eet-yoh-P'EE-yahn yeh-t'uh-BEB tah-REEK un-nah men-feh-sah-WEE uh-SAYT yahn-ts'eh-bah-ruh-k'ahl-LOO)",
          "translation": "The murals painted upon church walls reflect Ethiopia's artistic history and spiritual value."
        },
        {
          "target": "የኢትዮጵያ ስነ-ስዕል በዓለም አቀፍ ሙዚየሞች ውስጥ ታላቅ አድናቆት የተቸረው ብርቅዬ ቅርስ ነው።",
          "reading": "Yä'Ityop’əya sənä-sə'əl bä'aläm aqäf muziyämočč wəsət’ talaq adənaqot yätäčärräw bərəqəye qərs näw. [jɛʔitjoˈpʼɨja sɨnɛsɨˈʔɨl bəʔaˈlɛm ʔaˈkʼɛf muziˈjɛmotʃː wɨstʼ taˈlakʼ ʔadɨnaˈkʼot jɛtɛtʃɛrːɛw bɨrɨkʼɨˈje kʼɨrs nɛw] (yeh-eet-yoh-P'EE-yah suh-neh-SUH-ul beh-ah-LEM ah-K'EF moo-zee-yeh-MOHCH woos-T' tah-LAHK' ahd-nah-K'OHT yeh-teh-cher-REW bur-uk'-uh-YAY k'urs new)",
          "translation": "Ethiopian painting is a rare heritage bestowed with great admiration within international museums."
        }
      ],
      "mnemonics": [
        "Iconography: ስዕል (Painting) + ሰዓሊ (Artist) + ብርሃነ-ስዕል (Illumination) + ብራና (Parchment)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ የጥንት ሰዓሊያን ቀለማትን ከአፈር፣ ከቅጠላቅጠልና ከእንቁላል አስኳል በማዋሃድ ለዘመናት የማይለወጥ ዘላቂ ቀለም ያዘጋጁ ነበር።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በብራና መጻሕፍት ላይ የተሳለውን ጥንታዊ የብርሃን እና የኪነ-ጥበብ ስራ ምን ብለን እንጠራዋለን?",
          "options": [
            "ብርሃነ-ስዕል (Manuscript illumination / icon miniature)",
            "ጋዜጣ",
            "መስታወት",
            "ሰዓት"
          ],
          "answerIndex": 0,
          "explanation": "«ብርሃነ-ስዕል» በጥንታዊ የብራና መጻሕፍት ውስጥ የሚሳል ረቂቅና ያጌጠ መንፈሳዊ ስዕል ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Painting, drawing' የሚለውን ቃል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ስዕል (Painting, visual artwork)",
            "ዘፈን",
            "ዳንስ",
            "ሩጫ"
          ],
          "answerIndex": 0,
          "explanation": "«ስዕል» በቀለማትና በመስመሮች የሚገለጽ የእይታ ጥበብ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የጥንታዊ ስዕል እና የብራና ኪነ-ጥበብ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ስዕል፣ ሰዓሊ፣ ብርሃነ-ስዕል፣ ብራና፣ ቀለማት እና ምስል።",
            "ድንጋይ፣ አሸዋ፣ ሲሚንቶ እና ብረት።",
            "እንጀራ፣ ወጥ፣ ቅቤ እና በርበሬ።",
            "በኢትዮጵያ የስዕል ጥበብ አልነበረም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የስነ-ስዕል እና የብርሃነ-ስዕል መሰረታዊ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ስዕል / Painting, artwork' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ስዕል",
            "ሥዕል"
          ],
          "explanation": "ትክክለኛው ቃል «ስዕል» ወይም «ሥዕል» (Sə'əl) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u28-l2": {
    "id": "am-u28-l2",
    "subject": "amharic",
    "unit": 28,
    "lessonNumber": 2,
    "title": "የድንጋይ ውቅር እና የላሊበላ ውቅር አብያተ ክርስቲያናት (Rock-Hewn Architecture & Lalibela Monoliths)",
    "level": "C1",
    "objective": "የላሊበላን ከአንድ ወጥ አለት የተፈለፈሉ ውቅር አብያተ ክርስቲያናት የምህንድስና እና የኪነ-ህንፃ ጥበብ መተንተን።",
    "presentation": {
      "explanation": "የላሊበላ ውቅር አብያተ ክርስቲያናት እና የድንጋይ ጥበብ መዋቅር:\n\n፩. የኪነ-ህንፃው ምስጢር:\n- ላሊበላ (የ፲፪ኛው መቶ ክፍለ ዘመን ንጉሥና ቅዱስ)\n- ውቅር (Rock-hewn / monolithic chiseled structure)\n- ከአንድ ወጥ አለት (From a single monolithic volcanic rock)።\n\n፪. ዋና ምሳሌዎች:\n- ቤተ ጊዮርጊስ፣ ቤተ መድኃኔዓለም፣ ቤተ ማርያም (በአለም ዙሪያ አስደናቂ የምህንድስና ድንቅ ተብለው የተመዘገቡ ቅርሶች)።",
      "examples": [
        {
          "target": "የላሊበላ ውቅር አብያተ ክርስቲያናት ከአንድ ወጥ አለት ተፈልፍለው የታነጹ ዓለም አቀፍ የኪነ-ህንፃ ድንቆች ናቸው።",
          "reading": "YäLalibäla wəqər abyatä krəstiyanat kä'and wät’ alät täfälfəläw yätanäts’u aläm aqäf yäkinä-hənts’a dənqočč naččäw. [jɛlalibɛˈla wɨˈkʼɨr ʔabjaˈtɛ krɨstiˈjanat kɛʔand wɛtʼ ʔaˈlɛt tɛfɛlˈfɨlɛw jɛtaˈnɛtsʼu ʔaˈlɛm ʔaˈkʼɛf jɛkinɛhɨnˈtsʼa dɨnˈkʼotʃː naˈtʃːɛw] (yeh-lah-lee-beh-LAH wuh-K'UR ahb-yah-TEH kris-tee-yah-NAHT keh-AHND wet' ah-LET teh-fel-fuh-LEW yeh-tah-neh-TS'OO ah-LEM ah-K'EF yeh-kee-neh-hun-TS'AH dun-K'OHCH nahch-CHEW)",
          "translation": "The rock-hewn churches of Lalibela, carved from a single monolithic rock, are international wonders of architecture."
        },
        {
          "target": "ቤተ ጊዮርጊስ የመስቀል ቅርጽ ያለው ሆኖ ከላይ ወደ ታች በመቆፈር የተሰራ አስደናቂ ህንፃ ነው።",
          "reading": "Betä Giyorgis yämäsqäl qərts’ yalläw hono kälay wädä tačč bämäqqofär yätäsärra asdännaqi hənts’a näw. [beˈtɛ ɡiˈjorɡis jɛmɛsˈkʼɛl kʼɨrtsʼ jalːɛw hoˈno kɛˈlaj wɛdɛ tatʃː bɛmɛkʼːoˈfɛr jɛtɛsɛrːa ʔasdɛnːaˈkʼi hɨnˈtsʼa nɛw] (bay-TEH gee-yor-GEES yeh-mes-K'EL k'ur-TS' yahl-LEW hoh-NOH keh-LYE weh-deh TAHCH beh-mek'-k'oh-FER yeh-teh-ser-RAH ahs-den-nah-K'EE hun-TS'AH new)",
          "translation": "Bete Giyorgis is an astonishing structure shaped like a cross and constructed by excavating from top to bottom."
        },
        {
          "target": "የኢትዮጵያ ጥንታዊ መሃንዲሶች ያለ ምንም ሲሚንቶ አለትን በመቅረጽ ዘላለማዊ ድንቅ ስራ አቆሙ።",
          "reading": "Yä'Ityop’əya t’əntawi mähändisočč yalä mənnəm siminto alätən bämäqräts’ zälalämawi dənq səra aqomu. [jɛʔitjoˈpʼɨja tʼɨntaˈwi mɛhandiˈsotʃː jaˈlɛ mɨnːɨm siˈminto ʔaˈlɛtɨn bɛmɛkʼˈrɛtsʼ zɛlalɛmaˈwi dɨnkʼ sɨˈra ʔaˈkʼomu] (yeh-eet-yoh-P'EE-yah t'un-tah-WEE meh-hahn-dee-SOHCH yah-LEH muhn-NUM see-meen-TOH ah-LEH-tun beh-mek'-REH-ts' zeh-lah-leh-mah-WEE dunk' suh-RAH ah-k'oh-MOO)",
          "translation": "Ancient Ethiopian engineers erected an eternal masterpiece by sculpting rock without any cement."
        }
      ],
      "mnemonics": [
        "Lalibela Wonders: ላሊበላ (King Lalibela) + ውቅር (Hewn) + ወጥ አለት (Monolith) + ኪነ-ህንፃ (Architecture)!"
      ],
      "culturalNotes": [
        "ላሊበላ በዩኔስኮ የዓለም ቅርስነት የተመዘገበ ሲሆን በአስራ ሁለተኛው መቶ ክፍለ ዘመን ዳግማዊት እየሩሳሌም ተብላ የታነጸች የተቀደሰች ከተማ ናት።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከአንድ ወጥ አለት ተፈልፍለው የተሰሩትን አስራ አንዱን ውቅር አብያተ ክርስቲያናት ያነጹት ንጉሥ ማን ናቸው?",
          "options": [
            "ቅዱስ ላሊበላ (King Saint Lalibela - Creator of the 12th-century rock-hewn monolithic churches)",
            "ቴዎድሮስ",
            "ዮሐንስ",
            "ምኒልክ"
          ],
          "answerIndex": 0,
          "explanation": "ቅዱስ ላሊበላ በ፲፪ኛው መቶ ክፍለ ዘመን ታላላቆቹን ውቅር አብያተ ክርስቲያናት ያነጹ ንጉሥ ናቸው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Rock-hewn, carved from rock' የሚለውን ቃል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ውቅር (Rock-hewn, monolithic structure)",
            "እንጨት",
            "ፕላስቲክ",
            "ጭቃ"
          ],
          "answerIndex": 0,
          "explanation": "«ውቅር» ከአለት ወይም ከድንጋይ ተፈልፍሎ የተሰራ ህንፃን የሚያመለክት ቃል ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የላሊበላን እና የድንጋይ ውቅር ኪነ-ህንፃ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ላሊበላ፣ ውቅር፣ ወጥ አለት፣ ቤተ ጊዮርጊስ፣ ኪነ-ህንፃ እና መሃንዲስ።",
            "ሸሚዝ፣ ሱሪ፣ ካልሲ እና ጫማ።",
            "መኪና፣ ባቡር፣ አውሮፕላን እና ጀልባ።",
            "በላሊበላ ውቅር ህንፃ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የላሊበላን ውቅር ኪነ-ህንፃ መሰረታዊ ቃላት በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ውቅር / Rock-hewn, monolithic structure' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ውቅር"
          ],
          "explanation": "ትክክለኛው ቃል «ውቅር» (Wəqər) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u28-l3": {
    "id": "am-u28-l3",
    "subject": "amharic",
    "unit": 28,
    "lessonNumber": 3,
    "title": "የፋሲል ግቢ እና የጎንደር ስነ-መንግስት ህንፃዎች (Fasil Ghebbi & Gondarine Castles)",
    "level": "C1",
    "objective": "የጎንደር ግንቦችን፣ የፋሲል ግቢን ቤተ-መንግስታት እና የ፲፯ኛው መቶ ክፍለ ዘመን የድንጋይ ኪነ-ህንፃ መተንተን።",
    "presentation": {
      "explanation": "የፋሲል ግቢ እና የጎንደር ግንቦች መዋቅር:\n\n፩. የጎንደር ስልጣኔ:\n- ፋሲል ግቢ (The Royal Enclosure of Gondar)\n- አፄ ፋሲለደስ (የ፲፯ኛው መቶ ክፍለ ዘመን ንጉሥ)\n- ግንብ እና ቤተ-መንግስት (Castles, fortresses & palaces)።\n\n፪. የህንፃዎቹ አሰራር:\n- በኖራ፣ በአሸዋና በጠጠር የተገነቡ ባለ ሁለትና ባለ ሶስት ፎቅ ታሪካዊ ግንቦች፣ አብያተ-መንግስታት እና የፋሲል መዋኛ ገንዳ።",
      "examples": [
        {
          "target": "የፋሲል ግቢ ግንቦች የጎንደርን የስነ-መንግስት ጥበብ እና የህንፃ ምህንድስና ከፍታ ያሳያሉ።",
          "reading": "YäFasil gəbbi gənbočč yäGondärən yäsənä-mängəsət t’əbäb ənna yähənts’a məhəndəsənna kəffəta yasäyyallu. [jɛfaˈsil ɡɨbːi ɡɨnˈbotʃː jɛɡonˈdɛrɨn jɛsɨnɛmɛnˈɡɨsɨt tʼɨˈbɛb ʔɨnːa jɛhɨnˈtsʼa mɨhɨndɨˈsɨnːa kɨfːɨˈta jasɛjːaˈlːu] (yeh-fah-SEEL guhb-bee gun-BOHCH yeh-gohn-DEH-run yeh-suh-neh-men-guh-SUT t'uh-BEB un-nah yeh-hun-TS'AH muh-hun-duh-sun-NAH kuf-fuh-TAH yah-seh-yahl-LOO)",
          "translation": "The castles of Fasil Ghebbi demonstrate the peak of Gondar's imperial art and architectural engineering."
        },
        {
          "target": "አፄ ፋሲለደስ ከተማይቱን የኢትዮጵያ ቋሚ ዋና ከተማ አድርገው በመሰየም ታላላቅ ግንቦችን አሳነጹ።",
          "reading": "As’e Fasilädäs kätämaytun yä'Ityop’əya qwami wana kätäma adrəgäw bämässäyäm talaq gənboččən asanäts’u. [ʔatsʼe fasilɛˈdɛs kɛtɛmajˈtun jɛʔitjoˈpʼɨja kʼʷaˈmi waˈna kɛtɛˈma ʔadrɨˈɡɛw bɛmɛsːɛˈjɛm taˈlakʼ ɡɨnˈbotʃːɨn ʔasaˈnɛtsʼu] (ah-ts'ay fah-see-leh-DES keh-teh-mye-TOON yeh-eet-yoh-P'EE-yah k'wah-MEE wah-NAH keh-teh-MAH ahd-ruh-GEW beh-mes-seh-YEM tah-LAHK' gun-bohch-CHUN ah-sah-neh-TS'OO)",
          "translation": "Emperor Fasilides designated the city as Ethiopia's permanent capital and commissioned great castles."
        },
        {
          "target": "በፋሲል መዋኛ ገንዳ ውስጥ የሚከበረው የጥምቀት በዓል በዓለም አቀፍ ደረጃ የታወቀ ባህላዊ መስህብ ነው።",
          "reading": "BäFasil mäwanya gända wəsət’ yämmikkäbbäräw yäT’əmqät bä'al bä'aläm aqäf däräğa yätawwäqä bahəlawi məshəb näw. [bɛfaˈsil mɛwaˈɲa ɡɛnˈda wɨstʼ jɛmːikːɛbːɛˈrɛw jɛtʼɨmˈkʼɛt bɛʔal bəʔaˈlɛm ʔaˈkʼɛf dɛrɛˈdʒa jɛtawːɛˈkʼɛ bahɨlaˈwi mɨsˈhɨb nɛw] (beh-fah-SEEL meh-wahn-YAH gen-DAH woos-T' yem-mik-keb-beh-REW yeh-t'um-K'ET beh-AHL beh-ah-LEM ah-K'EF deh-reh-JAH yeh-tow-weh-K'EH bah-huh-lah-WEE mus-HUB new)",
          "translation": "The Timkat celebration held at Fasilides' Bath is an internationally recognized cultural attraction."
        }
      ],
      "mnemonics": [
        "Gondar Fortresses: ፋሲል ግቢ (Royal Enclosure) + ግንብ (Castle) + ፋሲለደስ (Emperor Fasilides) + ጎንደር (Gondar)!"
      ],
      "culturalNotes": [
        "የፋሲል ግቢ ግንቦች የኢትዮጵያን ባህላዊ የስነ-ህንፃ ዘዴዎች ከፖርቹጋልና ከህንድ ስነ-ህንፃ ቅይጥ ጋር በማጣመር የተገነቡ ድንቅ ቤተ-መንግስታት ናቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በ፲፯ኛው መቶ ክፍለ ዘመን በጎንደር ከተማ ታላቁን የፋሲል ግቢ ቤተ-መንግስት ያስገነቡት ንጉሥ ማን ናቸው?",
          "options": [
            "አፄ ፋሲለደስ (Emperor Fasilides - Founder of the Gondar imperial capital and castles)",
            "ቴዎድሮስ",
            "ሱሰኒዮስ",
            "ኢያሱ"
          ],
          "answerIndex": 0,
          "explanation": "አፄ ፋሲለደስ በ1636 ዓ.ም ጎንደርን ዋና ከተማ አድርገው በመሰየም የፋሲል ግቢ ግንቦችን አሳንጸዋል።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Castle, stone fortress' የሚለውን ቃል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ግንብ (Castle, stone masonry fortress)",
            "ድንኳን",
            "ጎጆ",
            "ጀልባ"
          ],
          "answerIndex": 0,
          "explanation": "«ግንብ» ከድንጋይና ከኖራ በከፍተኛ ጥንካሬ የሚገነባ ታሪካዊ ቤተ-መንግስት ወይም ምሽግ ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የፋሲል ግቢ እና የጎንደር ግንቦችን ቃላት በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ፋሲል ግቢ፣ አፄ ፋሲለደስ፣ ግንብ፣ ቤተ-መንግስት፣ ቅጥር እና ጎንደር።",
            "ወተት፣ ቅቤ፣ እርጎ እና አይብ።",
            "ወረቀት፣ እስክሪብቶ እና ላጲስ።",
            "በጎንደር ምንም ግንብ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የጎንደር እና የፋሲል ግቢ ታሪካዊ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ግንብ / Castle, stone fortress' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ግንብ"
          ],
          "explanation": "ትክክለኛው ቃል «ግንብ» (Gənb) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u28-l4": {
    "id": "am-u28-l4",
    "subject": "amharic",
    "unit": 28,
    "lessonNumber": 4,
    "title": "የሐረር ጁጎል እና ባህላዊ የመኖሪያ ቤቶች (Harar Jugol & Vernacular Architecture)",
    "level": "C1",
    "objective": "የሐረር ጁጎልን ግንብ፣ የጌይ ጋር ባህላዊ ቤቶችን፣ የእደ-ጥበብና የከተማ ኪነ-ህንፃን መተንተን።",
    "presentation": {
      "explanation": "የሐረር ጁጎል እና ባህላዊ ቤቶች መዋቅር:\n\n፩. የጁጎል ቅጥር:\n- ጁጎል (The Historic Wall of Harar)\n- አምስቱ ታሪካዊ በሮች (The five historic gates)\n- አሚር ኑር (የጁጎልን ግንብ ያስገነቡ መሪ)።\n\n፪. ባህላዊ የጌይ ጋር ቤቶች:\n- ጌይ ጋር (Traditional Harari house with unique interior platforms / Gidir Tiqet)\n- ያጌጡ ግድግዳዎች፣ ሸክላዎችና ባህላዊ ሰፌዶች።",
      "examples": [
        {
          "target": "የሐረር ጁጎል ቅጥር ከተማዋን ለዘመናት ከጥቃት የጠበቀ እና በዩኔስኮ የተመዘገበ ታሪካዊ ቅርስ ነው።",
          "reading": "YäHarär Ğugol qət’ər kätämawan läzämänat kät’əqat yät’äbbäqä ənna bäYunesko yätämäzzägäbä tarikawi qərs näw. [jɛhaˈrɛr dʒuˈɡol kʼɨˈtʼɨr kɛtɛmaˈwan ləzɛmɛˈnat kɛtʼɨˈkʼat jɛtʼɛbːɛˈkʼɛ ʔɨnːa bɛjunesˈko jɛtɛmɛzːɛˈɡɛbɛ taˈrikawi kʼɨrs nɛw] (yeh-hah-RER joo-GOHL k'uh-T'UR keh-teh-mah-WAHN luh-zeh-meh-NAHT keh-t'uh-K'AHT yeh-t'eb-beh-K'EH un-nah beh-yoo-nes-KOH yeh-teh-mez-zeg-EH-beh tah-ree-KAH-wee k'urs new)",
          "translation": "The Jugol wall of Harar is a historical heritage registered by UNESCO that protected the city from assault for centuries."
        },
        {
          "target": "በባህላዊው የጌይ ጋር ቤት ውስጥ የተሰደሩት ሰፌዶች እና የሸክላ እቃዎች ልዩ የውበት ድባብ ይፈጥራሉ።",
          "reading": "Bäbahəlawiw yäGey Gar bet wəsət’ yätäsäddärut säfedočč ənna yäšäkla əqawočč ləyyu yäwəbät dəbab yəfät’rallu. [bɛbahɨlaˈwiw jɛɡej ɡar bet wɨstʼ jɛtɛsɛdːɛˈrut sɛfeˈdotʃː ʔɨnːa jɛʃɛkˈla ʔɨkʼaˈwotʃː lɨjːu jɛwɨˈbɛt dɨˈbab jɨfɛtʼˈralːu] (beh-bah-huh-lah-WEEW yeh-GAY GAHR bay-T woos-T' yeh-teh-sed-deh-ROOT seh-fay-DOHCH un-nah yeh-shek-LAH uh-k'ah-WOHCH luhy-YOO yeh-wuh-BET duh-BAHB yuh-fet'-RAHL-loo)",
          "translation": "The woven baskets and ceramic utensils arranged inside the traditional Gey Gar house create a distinct aesthetic ambiance."
        },
        {
          "target": "የሐረር ከተማ አምስቱ በሮች የንግድ፣ የባህል እና የእስልምና ትምህርት መተላለፊያ ሆነው አገልግለዋል።",
          "reading": "YäHarär kätäma amməstu bäročč yänəgəd, yäbahəl ənna yä'Əsələmənna təməhərt mättälaläfiya honäw agälgəlwallu. [jɛhaˈrɛr kɛtɛˈma ʔamːɨsˈtu bɛˈrotʃː jɛnɨˈɡɨd jɛbaˈhɨl ʔɨnːa jɛʔɨsɨlɨmɨnːa tɨmɨˈhɨrt mɛtːalaˈlɛfija hoˈnɛw ʔaɡɛlɡɨlˈwalːu] (yeh-hah-RER keh-teh-MAH ahm-mus-TOO beh-ROHCH yeh-nuh-GUD, yeh-bah-HUL un-nah yeh-us-luh-mun-NAH tuh-muh-hur-T met-tah-lah-leh-FEE-yah hoh-NEW ah-gel-gul-WAHL-loo)",
          "translation": "The five gates of Harar city served as passageways for commerce, culture, and Islamic scholarship."
        }
      ],
      "mnemonics": [
        "Harar Architecture: ጁጎል (Historic Wall) + አምስት በሮች (5 Gates) + ጌይ ጋር (Traditional House) + ሐረር (Harar)!"
      ],
      "culturalNotes": [
        "ሐረር ጁጎል አራተኛዋ የተቀደሰች የእስልምና ከተማ ተብላ የምትታወቅ እና በርካታ መስጊዶችንና ባህላዊ ቤቶችን ያቀፈች የታሪክ ማዕከል ናት።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "የሐረር ከተማን ከበባ የያዘውና በዩኔስኮ የተመዘገበው ጥንታዊ ግንብ ምን ይባላል?",
          "options": [
            "ጁጎል (Jugol - The historic fortified wall of Harar)",
            "ፋሲል",
            "ላሊበላ",
            "አክሱም"
          ],
          "answerIndex": 0,
          "explanation": "«ጁጎል» የሐረርን ጥንታዊ ከተማ የከበበ አምስት በሮች ያሉት ታሪካዊ ግንብ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "የሐረሪ ባህላዊ የመኖሪያ ቤት ምን ተብሎ ይጠራል?",
          "options": [
            "ጌይ ጋር (Gey Gar - Traditional Harari vernacular house)",
            "ፎቅ ብቻ",
            "ጎጆ ብቻ",
            "ድንኳን"
          ],
          "answerIndex": 0,
          "explanation": "«ጌይ ጋር» ልዩ የስነ-ህንፃ ጥበብና ውስጣዊ ጌጦች ያሉት ባህላዊ የሐረር ቤት ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የሐረር ጁጎልን እና ባህላዊ ኪነ-ህንፃን ቃላት በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ሐረር፣ ጁጎል፣ አምስቱ በሮች፣ ጌይ ጋር፣ ቅጥር እና እደ-ጥበብ።",
            "ጫማ፣ ካልሲ፣ ኮት እና ጃኬት።",
            "ብርቱካን፣ ሙዝ፣ ማንጎ እና ፓፓያ።",
            "በሐረር ግንብ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የሐረር ጁጎልን እና ባህላዊ ቤቶችን ቃላት በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ጁጎል / Jugol, historic fortified wall' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ጁጎል",
            "ጀጎል"
          ],
          "explanation": "ትክክለኛው ቃል «ጁጎል» ወይም «ጀጎል» (Ğugol) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u28-l5": {
    "id": "am-u28-l5",
    "subject": "amharic",
    "unit": 28,
    "lessonNumber": 5,
    "title": "የክፍል 28 አጠቃላይ ማጠቃለያ (Unit 28 Grand Synthesis & Ethiopian Architectural Masterpieces)",
    "level": "C1",
    "objective": "ጥንታዊ ስዕሎችን፣ የላሊበላ ውቅር አብያተ ክርስቲያናትን፣ የፋሲል ግንቦችንና የሐረር ጁጎልን ያቀናጀ የተሟላ የስነ-ህንፃ ውይይት ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፳፰ አጠቃላይ የኢትዮጵያ ኪነ-ጥበብ እና ስነ-ህንፃ ቅርስ ማጠቃለያ:\n\n፩. ስነ-ስዕልና ብርሃነ-ስዕል:\n- ስዕል፣ ሰዓሊ፣ ብራና፣ ብርሃነ-ስዕል፣ የተፈጥሮ ቀለማት።\n\n፪. የድንጋይ ውቅር ህንፃዎች:\n- ላሊበላ፣ ወጥ አለት፣ ውቅር አብያተ ክርስቲያናት፣ ቤተ ጊዮርጊስ።\n\n፫. የድንጋይ ግንቦች:\n- ፋሲል ግቢ፣ አፄ ፋሲለደስ፣ ጎንደር፣ ቤተ-መንግስት።\n\n፬. የተመሸጉ ከተሞችና ባህላዊ ቤቶች:\n- ሐረር ጁጎል፣ አምስቱ በሮች፣ ጌይ ጋር፣ ቅጥር።",
      "examples": [
        {
          "target": "የኢትዮጵያ ስነ-ህንፃ እና ኪነ-ጥበብ በላሊበላ ውቅር፣ በፋሲል ግንቦች፣ በሐረር ጁጎልና በብራና ስዕሎች የደመቀ ነው።",
          "reading": "Yä'Ityop’əya sənä-hənts’a ənna kinä-t’əbäb bäLalibäla wəqər, bäFasil gənbočč, bäHarär Ğugol ənna bäbəranna sə'əločč yädämmäqä näw. [jɛʔitjoˈpʼɨja sɨnɛhɨnˈtsʼa ʔɨnːa kinɛtʼɨˈbɛb bɛlalibɛˈla wɨˈkʼɨr bɛfaˈsil ɡɨnˈbotʃː bɛhaˈrɛr dʒuˈɡol ʔɨnːa bɛbɨrˈanːa sɨʔɨˈlotʃː jɛdɛmːɛˈkʼɛ nɛw] (yeh-eet-yoh-P'EE-yah suh-neh-hun-TS'AH un-nah kee-neh-t'uh-BEB beh-lah-lee-beh-LAH wuh-K'UR, beh-fah-SEEL gun-BOHCH, beh-hah-RER joo-GOHL un-nah beh-bur-AHN-nah suh-ul-OHCH yeh-dem-meh-K'EH new)",
          "translation": "Ethiopia's architecture and art are resplendent in Lalibela's rock-hewn monoliths, Fasil's castles, Harar's Jugol, and manuscript paintings."
        },
        {
          "target": "ጥንታዊያን መሃንዲሶች እና ሰዓሊያን ዘመናትን የሚሻገሩ አስደናቂ ቅርሶችን ለትውልድ አውርሰዋል።",
          "reading": "T’əntawəyan mähändisočč ənna sä'aliyan zämänatən yämmiššagäru asdännaqi qərsoččən lätəwəld awrəsäwal. [tʼɨntaˈwɨjan mɛhandiˈsotʃː ʔɨnːa sɛʔaliˈjan zɛmɛˈnatɨn jɛmːiʃːaˈɡɛru ʔasdɛnːaˈkʼi kʼɨrˈsotʃːɨn lətɨˈwɨld ʔawwɨrˈsɛwal] (t'un-tah-wuh-YAHN meh-hahn-dee-SOHCH un-nah seh-ah-lee-YAHN zeh-meh-nah-TUN yem-mish-shah-GEH-roo ahs-den-nah-K'EE k'ur-SOHCH-chun luh-tuh-WULD ow-ruh-SEH-wahl)",
          "translation": "Ancient engineers and painters bequeathed magnificent monuments transcending the ages unto posterity."
        },
        {
          "target": "የኢትዮጵያን ታሪካዊ ቅርሶች መጠበቅ እና ማስተዋወቅ የሁሉም ዜጎች ሀገራዊ ሀላፊነት ነው።",
          "reading": "Yä'Ityop’əyan tarikawi qərsočč mät’t’äbäq ənna mastäwawäq yähullum zegočč hagärawi halafinnät näw. [jɛʔitjoˈpʼɨjan taˈrikawi kʼɨrˈsotʃː mɛtʼːɛˈbɛkʼ ʔɨnːa mastɛwaˈwɛkʼ jɛhulːum zeˈɡotʃː haɡɛraˈwi halaˈfinːɛt nɛw] (yeh-eet-yoh-P'EE-yahn tah-ree-KAH-wee k'ur-SOHCH met'-t'eh-BEK' un-nah mahs-teh-wah-WEK' yeh-hool-LOOM zay-GOHCH hah-geh-rah-WEE hah-lah-FEEN-net new)",
          "translation": "Preserving and promoting Ethiopia's historic monuments is the national responsibility of all citizens."
        }
      ],
      "mnemonics": [
        "Grand Synthesis 28: Art (ብርሃነ-ስዕል) + Monoliths (ላሊበላ) + Castles (ፋሲል ግቢ) + Fortified Walls (ሐረር ጁጎል)!"
      ],
      "culturalNotes": [
        "የኢትዮጵያ ስነ-ህንፃ ቅርሶች የአፍሪካን ታላቅ የስልጣኔ ታሪክ እና የሰው ልጅ የፈጠራ ችሎታ ለዓለም የሚያረጋግጡ ዓለም አቀፍ ሀብቶች ናቸው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የኢትዮጵያ ስነ-ህንፃ እና የስነ-ጥበብ ውህደትን የያዘው የትኛው ነው?",
          "options": [
            "የኢትዮጵያ ስነ-ህንፃ እና ኪነ-ጥበብ በላሊበላ ውቅር፣ በፋሲል ግንቦች፣ በሐረር ጁጎልና በብራና ስዕሎች የደመቀ ነው። (Complete architectural synthesis combining Lalibela, Fasil Ghebbi, Harar Jugol, and manuscript illumination)",
            "ምንም ቅርስ የለም",
            "ሁሉም ተራ ቃላት ናቸው",
            "ህንፃ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ ላሊበላን፣ ፋሲል ግቢን፣ ሐረር ጁጎልንና ስነ-ስዕልን በአንድነት ያጠቃለለ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "ኪነ-ህንፃን እና ታሪካዊ ቅርሶችን ያጣመረ ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ጎብኚዎቹ የላሊበላን ውቅር አብያተ ክርስቲያናት እና የፋሲል ግንቦችን በጥልቀት ተመለከቱ። (The visitors closely observed the rock-hewn churches of Lalibela and the castles of Fasil - Accurate unified sentence)",
            "ምንም እይታ አልነበረም",
            "ግንብ የለም",
            "ውቅር የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ ውቅር አብያተ ክርስቲያናትን እና ታሪካዊ ግንቦችን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 28 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የአብያተ ክርስቲያናት ስዕሎች፣ የላሊበላ ውቅር ድንጋዮች፣ የፋሲል ግቢ ግንቦች፣ እንዲሁም የሐረር ጁጎል ቅጥር ተካተዋል።",
            "ይህ ክፍል ስለ ምግብ ማብሰል ብቻ ነው።",
            "በኢትዮጵያ ስነ-ህንፃ አልነበረም።",
            "ሁሉም ህንፃዎች ተመሳሳይ ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 28ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ህንፃ / Building, architecture' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ህንፃ",
            "ሕንፃ",
            "ህንጻ",
            "ሕንጻ"
          ],
          "explanation": "ትክክለኛው ቃል «ህንፃ» ወይም «ሕንፃ» (Hənts’a) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u29-l1": {
    "id": "am-u29-l1",
    "subject": "amharic",
    "unit": 29,
    "lessonNumber": 1,
    "title": "የደን ጥበቃ፣ የተፈጥሮ ሚዛን እና ስነ-ምህዳር (Forest Conservation & Ecosystem)",
    "level": "C1",
    "objective": "የደን ሀብትን፣ የስነ-ምህዳር (Ecosystem) ሚዛንን፣ ብዝሃ-ህይወትንና የዛፍ ተከላ ጥቅምን መተንተን።",
    "presentation": {
      "explanation": "የደን ጥበቃ እና የስነ-ምህዳር ሚዛን መዋቅር:\n\n፩. የስነ-ምህዳር መሰረታዊ ቃላት:\n- ደን፣ ስነ-ምህዳር፣ የተፈጥሮ ሚዛን፣ ብዝሃ-ህይወት እና አየር ንብረት።\n- ዛፍ መትከል እና የተፈጥሮ ሀብት ጥበቃ።\n\n፪. ዋና መርሆዎች:\n- ደኖች የምድር ሳንባ በመሆናቸው ንጹህ አየር ይሰጣሉ፤ የአፈር መሸርሸርን ይከላከላሉ፤ የዱር አራዊትን መጠለያ በመሆን የተፈጥሮ ሚዛንን ይጠብቃሉ።",
      "examples": [
        {
          "target": "ደኖችን መንከባከብ እና ዛፎችን መትከል የስነ-ምህዳር ሚዛንን ለመጠበቅ ቀዳሚ ተግባር ነው።",
          "reading": "Dänoččən mänkäbbakäb ənna zafoččən mätkäl yäsənä-məhəddar mizanən lämät’t’äbäq qäddami tägəbar näw. [dɛnoˈtʃːɨn mɛnkɛbːaˈkɛb ʔɨnːa zafoˈtʃːɨn mɛtˈkɛl jɛsɨnɛmɨhɨdːar miˈzanɨn ləmɛtʼːɛˈbɛkʼ kʼɛdːaˈmi tɛɡɨˈbar nɛw] (deh-NOHCH-chun men-keb-bah-KEB un-nah zah-FOHCH-chun met-KEL yeh-suh-neh-muh-hud-DAHR mee-ZAHN-un luh-met'-t'eh-BEK' k'ed-dah-MEE teg-uh-BAHR new)",
          "translation": "Caring for forests and planting trees is the primary task for maintaining ecological balance."
        },
        {
          "target": "የብዝሃ-ህይወት መመናመን በአካባቢው አየር ንብረት እና በህያዋን ፍጥረታት ላይ ከባድ አደጋ ያስከትላል።",
          "reading": "Yäbəzəha-həywät mämmänammän bä'akababiw ayyär nəbrät ənna bəhəyawwan fət’rätat lay käbbad adäga yasəkättəlall. [jɛbɨzɨhahɨjˈwɛt mɛmːɛnaˈmːɛn bɛʔakaˈbabiw ʔajːɛr nɨbˈrɛt ʔɨnːa bɛhɨjawːan fɨtʼrɛˈtat laj kɛbːad ʔadɛˈɡa jasɨkɛtːɨˈlalː] (yeh-buh-zuh-hah-huy-WET mem-meh-nahm-MEN beh-ah-kah-bah-BEEW uhy-YER nub-RET un-nah beh-huh-yah-WAHN fut'-ruh-TAHT lye keb-BAHD ah-deh-GAH yah-suh-ket-tuh-LAHL)",
          "translation": "The depletion of biodiversity causes serious harm to the local climate and living creatures."
        },
        {
          "target": "ህብረተሰቡ የተፈጥሮ ሀብትን በዘላቂነት ለመጠቀም የሚያስችሉ ተግባራትን በስፋት እያከናወነ ይገኛል።",
          "reading": "Həbrätäsäbu yätäfät’ro habtən bäzälaqinnät lämät’t’äqäm yämiyasčəlu tägəbaratən bäsəfat əyyakkanäwänä yəggänyal. [hɨbrɛtɛsɛˈbu jɛtɛfɛtʼˈro habˈtɨn bɛzɛlaˈkʼinːɛt ləmɛtʼːɛˈkʼɛm jɛmijasˈtʃɨlu tɛɡɨbaˈratɨn bɛsɨˈfat ʔɨjːakːanɛˈwɛnɛ jɨɡːɛˈɲal] (hub-reh-teh-seh-BOO yeh-teh-fet'-ROH hahb-TUN beh-zeh-lah-K'EEN-net luh-met'-t'eh-K'EM yeh-mee-yahs-chuh-LOO teg-uh-bah-RAH-tun beh-suh-FAHT uhy-yahk-kah-neh-weh-NEH yug-gen-YAHL)",
          "translation": "Society is extensively carrying out practices that enable the sustainable utilization of natural resources."
        }
      ],
      "mnemonics": [
        "Ecology Terms: ደን (Forest) + ስነ-ምህዳር (Ecosystem) + ብዝሃ-ህይወት (Biodiversity) + ሚዛን (Balance)!"
      ],
      "culturalNotes": [
        "በኢትዮጵያ ታሪክ አድባራትና አብያተ ክርስቲያናት ጥንታዊ ደኖችን ለዘመናት ጠብቀው በማቆየት የሀገሪቱ ዋነኛ የደን ባንክ ሆነው አገልግለዋል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "«Ecosystem» የሚለውን ሳይንሳዊ ቃል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ስነ-ምህዳር (Ecosystem - Living organism and environmental interaction)",
            "ስነ-ዜማ",
            "ስነ-ምድር",
            "ስነ-ልሳን"
          ],
          "answerIndex": 0,
          "explanation": "«ስነ-ምህዳር» ህያዋን ፍጥረታት ከአካባቢያቸው ጋር ያላቸውን መስተጋብር የሚያጠና የሳይንስ ዘርፍ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Biodiversity' የሚለውን ጽንሰ-ሀሳብ በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ብዝሃ-ህይወት (Biodiversity - Variety of plant and animal life)",
            "አንድነት ብቻ",
            "ድርቅ",
            "በረሃ"
          ],
          "answerIndex": 0,
          "explanation": "«ብዝሃ-ህይወት» በተወሰነ አካባቢ የሚገኙ የተለያዩ እፅዋትና እንስሳት ዝርያዎች ጥምረት ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የደን ጥበቃ እና የስነ-ምህዳር ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ደን፣ ስነ-ምህዳር፣ ብዝሃ-ህይወት፣ የተፈጥሮ ሚዛን እና ዛፍ።",
            "ወረቀት፣ እስክሪብቶ፣ ላጲስ እና ደብተር።",
            "ጫማ፣ ካልሲ፣ ሱሪ እና ኮት።",
            "በአማርኛ ስነ-ምህዳር የሚባል የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የስነ-ምህዳር እና የደን ጥበቃ መሰረታዊ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ስነ-ምህዳር / Ecosystem' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ስነ-ምህዳር",
            "ሥነ-ምህዳር",
            "ስነ ምህዳር",
            "ሥነ ምህዳር"
          ],
          "explanation": "ትክክለኛው ቃል «ስነ-ምህዳር» ወይም «ሥነ-ምህዳር» (Sənä-məhəddar) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u29-l2": {
    "id": "am-u29-l2",
    "subject": "amharic",
    "unit": 29,
    "lessonNumber": 2,
    "title": "የውሃ ሀብት አስተዳደር እና የታላቁ ህዳሴ ግድብ (Water Management & GERD)",
    "level": "C1",
    "objective": "የኢትዮጵያን የውሃ ሀብት (የአባይ ወንዝ)፣ የህዳሴ ግድብን የኤሌክትሪክ ኃይል ማመንጨትና ዘላቂ አጠቃቀምን መተንተን።",
    "presentation": {
      "explanation": "የውሃ ሀብት እና የታላቁ ህዳሴ ግድብ መዋቅር:\n\n፩. የውሃ ሀብት መሰረታዊ ቃላት:\n- ውሃ፣ ወንዝ፣ አባይ፣ ግድብ፣ ህዳሴ እና የውሃ ሙሌት።\n- ንጹህ ታዳሽ ኃይል (Hydroelectric renewable power)።\n\n፪. የታላቁ ህዳሴ ግድብ ፋይዳ:\n- አባይ ወንዝ ላይ የተገነባው ታላቁ የህዳሴ ግድብ ለኢትዮጵያና ለቀጣናው የኤሌክትሪክ ኃይል በማመንጨት የኢኮኖሚ እድገትን ያፋጥናል።",
      "examples": [
        {
          "target": "ታላቁ የኢትዮጵያ ህዳሴ ግድብ በአባይ ወንዝ ላይ የተገነባ የህዝቦች የአንድነት እና የታዳሽ ኃይል ማመንጫ ነው።",
          "reading": "Talaqu yä'Ityop’əya Həddase Gəddəb bä'Abay wänz lay yätägännäba yähəzəbočč yä'andənnät ənna yätaddaš hayəl mamänča näw. [taˈlaku jɛʔitjoˈpʼɨja hɨdːaˈse ɡɨdːɨb bɛʔaˈbaj wɛnz laj jɛtɛɡɛnːɛˈba jɛhɨzɨˈbotʃː jɛʔandɨnːɛt ʔɨnːa jɛtadːaʃ hajɨl mamɛnˈtʃa nɛw] (tah-LAH-koo yeh-eet-yoh-P'EE-yah hud-dah-SAY gud-DUB beh-ah-BYE wenz lye yeh-teh-gen-neh-BAH yeh-huh-zuh-bohch-CH yeh-ahn-dun-NET un-nah yeh-tahd-DAHSH hy-UL mah-men-CHAH new)",
          "translation": "The Grand Ethiopian Renaissance Dam built upon the Abay River is a source of unity and renewable energy generation for the peoples."
        },
        {
          "target": "የውሃ ሀብትን በአግባቡ ማስተዳደር ለግብርና፣ ለኃይል አቅርቦት እና ለመጠጥ ውሃ ዋስትና ወሳኝ ነው።",
          "reading": "Yäwəha habtən bä'agbabu mastädadär lägəbərənna, lähayəl aqrəbot ənna lämät’ät’ wəha wastənna wäsany näw. [jɛwɨˈha habˈtɨn bɛʔaɡˈbabu mastɛdaˈdɛr ləɡɨbɨrɨnːa ləhaˈjɨl ʔakʼrɨˈbot ʔɨnːa ləmɛtʼɛtʼ wɨˈha wasˈtɨnːa wɛˈsaɲ nɛw] (yeh-wuh-HAH hahb-TUN beh-ahg-BAH-boo mahs-teh-dah-DER luh-guh-buh-run-NAH, luh-hy-UL ahk'-ruh-BOHT un-nah luh-met'-ET' wuh-HAH wahs-tuhn-NAH weh-SAHN-y new)",
          "translation": "Proper management of water resources is crucial for agriculture, energy supply, and drinking water security."
        },
        {
          "target": "ኢትዮጵያ የምስራቅ አፍሪካ የውሃ ማማ በመባል የምትታወቅ የተትረፈረፈ የተፈጥሮ ፈሳሽ ያላት ሀገር ናት።",
          "reading": "Ityop’əya yäMəsəraq Afərika yäwəha mama bämäbbal yämməttəttawwäq yätətərräfärräfä yätäfät’ro fäsaš yallat hagär nat. [ʔitjoˈpʼɨja jɛmɨsɨˈrakʼ ʔafɨriˈka jɛwɨˈha maˈma bɛmɛbːal jɛmːɨtːawːɛkʼ jɛtɨtɨrːɛfɛrːɛfɛ jɛtɛfɛtʼˈro fɛˈsaʃ jalːat haˈɡɛr nat] (eet-yoh-P'EE-yah yeh-muh-suh-RAHK' ah-fuh-ree-KAH yeh-wuh-HAH mah-MAH beh-meb-BAHL yem-mut-tahw-WEK' yeh-tuh-tur-reh-fer-reh-FEH yeh-teh-fet'-ROH feh-SAHSH yahl-LAHT hah-GER naht)",
          "translation": "Ethiopia is a country endowed with abundant natural flows, known as the water tower of East Africa."
        }
      ],
      "mnemonics": [
        "Water & Dam: አባይ (Blue Nile) + ግድብ (Dam) + ህዳሴ (Renaissance) + ኃይል (Energy) + የውሃ ማማ (Water Tower)!"
      ],
      "culturalNotes": [
        "የአባይ ወንዝ በኢትዮጵያውያን ዘፈኖችና ግጥሞች ውስጥ ለዘመናት ሲወደስ የኖረ የሀገሪቱ የህይወትና የታሪክ ፈሳሽ ነው።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በአባይ ወንዝ ላይ የተገነባው ታላቁ የኢትዮጵያ የኤሌክትሪክ ኃይል ማመንጫ ግድብ ምን ይባላል?",
          "options": [
            "የህዳሴ ግድብ (Grand Ethiopian Renaissance Dam - GERD)",
            "አዋሽ ግድብ",
            "ጣና ግድብ",
            "ዝዋይ ግድብ"
          ],
          "answerIndex": 0,
          "explanation": "«የህዳሴ ግድብ» በአባይ ወንዝ ላይ በኢትዮጵያውያን አቅም የተገነባ ታላቅ የኃይል ማመንጫ ግድብ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Dam / Reservoir' የሚለውን ቃል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ግድብ (Dam, water reservoir structure)",
            "ድልድይ",
            "መንገድ",
            "ህንፃ"
          ],
          "answerIndex": 0,
          "explanation": "«ግድብ» ውሃን በማቆር ለኃይል ወይም ለመስኖ አገልግሎት የሚውል የውሃ መዋቅር ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የውሃ ሀብት እና የህዳሴ ግድብ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ውሃ፣ አባይ፣ ህዳሴ ግድብ፣ ታዳሽ ኃይል፣ ወንዝ እና መስኖ።",
            "ስኳር፣ ጨው፣ በርበሬ እና ዘይት።",
            "ጠረጴዛ፣ ወንበር እና አልጋ።",
            "በኢትዮጵያ ወንዝ የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የውሃ ሀብትና የህዳሴ ግድብ ቁልፍ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ግድብ / Dam, reservoir' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ግድብ"
          ],
          "explanation": "ትክክለኛው ቃል «ግድብ» (Gəddəb) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u29-l3": {
    "id": "am-u29-l3",
    "subject": "amharic",
    "unit": 29,
    "lessonNumber": 3,
    "title": "የአፈር መከላት፣ የአየር ንብረት ለውጥ እና አረንጓዴ አሻራ (Soil Conservation & Green Legacy)",
    "level": "C1",
    "objective": "የአፈር መሸርሸርን መከላከል፣ የአየር ንብረት ለውጥን (Climate Change) መቋቋምና የአረንጓዴ አሻራ መርሃ-ግብርን መተንተን።",
    "presentation": {
      "explanation": "የአፈር ጥበቃ፣ የአየር ንብረት ለውጥ እና አረንጓዴ አሻራ መዋቅር:\n\n፩. መሰረታዊ ቃላት:\n- አፈር መሸርሸር (Soil erosion) / እርከን ስራ (Terracing)\n- አየር ንብረት ለውጥ (Climate change) / ድርቅ (Drought)\n- አረንጓዴ አሻራ (Green Legacy Initiative) / ችግኝ መትከል (Planting saplings)።\n\n፪. ዋና እርምጃዎች:\n- በየዓመቱ በቢሊዮኖች የሚቆጠሩ ችግኞችን በመትከል የተራቆቱ መሬቶችን ማልበስ፣ የአፈር ለምነትን መመለስና የሙቀት አማቂ ጋዞችን መቀነስ።",
      "examples": [
        {
          "target": "የአረንጓዴ አሻራ መርሃ-ግብር በቢሊዮኖች የሚቆጠሩ ችግኞችን በመትከል ሀገሪቱን በደን እንድትሸፈን አድርጓል።",
          "reading": "Yä'Aränəgwarde Ašara märəha-gəbər bäbiliyonočč yämmiqqot’t’äru čəggənyoččən bämätkäl hagäritun bädän əndətəššäffän adrəgwal. [jɛʔarɛnɡʷarˈde ʔaˈʃara mərhaɡɨˈbɨr bɛmilijoˈnotʃː jɛmːikʼːotʼːɛˈru tʃɨɡːɨˈɲotʃːɨn bɛmɛtˈkɛl haɡɛriˈtun bɛdɛn ʔndɨtɨʃːɛfːɛn ʔadrɨɡˈwal] (yeh-ah-ren-gwar-DAY ah-shah-RAH mer-hah-guh-BUR beh-bee-lee-yoh-NOHCH yem-mik'-k'oht'-t'eh-ROO chug-gun-yohch-CHUN beh-met-KEL hah-geh-ree-TOON beh-DEN un-duh-tuhsh-shef-FEN ahd-rug-WAHL)",
          "translation": "The Green Legacy Initiative has caused the country to be covered in forest by planting billions of saplings."
        },
        {
          "target": "ገበሬዎች የተራቆቱ ተራሮችን በእርከን ስራ በማከም የአፈር መሸርሸርን እና ድርቅን ተከላከሉ።",
          "reading": "Gäbärewočč yätäraqotut kärarocčən bä'ərkän səra bamakäm yä'afär mäšäršärən ənna dərəqən täkälakkälu. [ɡɛbareˈwotʃː jɛtɛrakʼoˈtut kɛraˈrotʃːɨn bɛʔɨrˈkɛn sɨˈra bamaˈkɛm jɛʔaˈfɛr mɛʃɛrˈʃɛrɨn ʔɨnːa dɨrˈkʼɨn tɛkɛlakːɛˈlu] (geh-bah-ray-WOHCH yeh-teh-rah-k'oh-TOOT keh-rah-ROHCH-chun beh-ur-KEN suh-RAH bah-mah-KEM yeh-ah-FER meh-sher-SHEH-run un-nah dur-K'UN teh-keh-lahk-keh-LOO)",
          "translation": "Farmers protected against soil erosion and drought by treating denuded mountains with terracing."
        },
        {
          "target": "የአየር ንብረት ለውጥን ለመቋቋም የሚደረገው አለም አቀፍ ጥረት የጋራ ትብብርን ይጠይቃል።",
          "reading": "Yä'Ayyär nəbrät läwt’ən lämäqqwqwam yämmiddärägäw aläm aqäf t’ərät yägara təbbəbbərən yət’äyyəqal. [jɛʔajːɛr nɨbˈrɛt ləwtʼɨn ləmɛkʼʷkʼʷam jɛmːidːɛrɛˈɡɛw ʔaˈlɛm ʔaˈkʼɛf tʼɨˈrɛt jɛɡaˈra tɨbːɨbːɨˈrɨn jɨtʼɛjːɨˈkʼal] (yeh-uhy-YER nub-RET lewt'-UN luh-mek'-k'wah-K'WAHM yem-mid-deh-reh-GEW ah-LEM ah-K'EF t'uh-RET yeh-gah-RAH tub-bub-buh-RUN yuh-t'ey-yuh-K'AHL)",
          "translation": "The global effort made to resist climate change demands collective cooperation."
        }
      ],
      "mnemonics": [
        "Green Terms: አረንጓዴ አሻራ (Green Legacy) + ችግኝ (Sapling) + እርከን (Terrace) + አፈር ጥበቃ (Soil Conservation)!"
      ],
      "culturalNotes": [
        "የአረንጓዴ አሻራ ንቅናቄ በኢትዮጵያ በየዓመቱ በክረምት ወራት በሚሊዮኖች የሚቆጠሩ ዜጎች ተሳትፈው ችግኝ የሚተክሉበት ህዝባዊ ባህል ሆኗል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "የአፈር መሸርሸርን ለመከላከል በተራራማ አካባቢዎች የሚሰራው የድንጋይ ወይም የአፈር አጥር ምን ይባላል?",
          "options": [
            "እርከን (Terracing - Stone/soil soil conservation structure)",
            "ፎቅ",
            "አውራ ጎዳና",
            "ድልድይ"
          ],
          "answerIndex": 0,
          "explanation": "«እርከን» ተራራማ መሬት በዝናብ ውሃ እንዳይታጠብ የሚገነባ የአፈር ጥበቃ ዘዴ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'Sapling, seedling' የሚለውን ቃል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ችግኝ (Sapling, young plant / seedling)",
            "ግንድ",
            "ቅርፊት",
            "ስር"
          ],
          "answerIndex": 0,
          "explanation": "«ችግኝ» ለመትከል የተዘጋጀ ለጋና ወጣት ተክል ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የአረንጓዴ አሻራ እና የአፈር ጥበቃ ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "አረንጓዴ አሻራ፣ ችግኝ፣ እርከን፣ አፈር ጥበቃ እና አየር ንብረት።",
            "መዶሻ፣ መጋዝ፣ ሚስማር እና መፍቻ።",
            "ሳህን፣ ማንኪያ፣ ሹካ እና ብርጭቆ።",
            "በአማርኛ ችግኝ የሚባል ቃል የለም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የአረንጓዴ አሻራ እና የአፈር ጥበቃ ቃላትን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ችግኝ / Sapling, seedling' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ችግኝ"
          ],
          "explanation": "ትክክለኛው ቃል «ችግኝ» (Čəggəny) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u29-l4": {
    "id": "am-u29-l4",
    "subject": "amharic",
    "unit": 29,
    "lessonNumber": 4,
    "title": "ብሔራዊ ፓርኮች እና የዱር አራዊት ጥበቃ (National Parks & Wildlife Conservation)",
    "level": "C1",
    "objective": "የኢትዮጵያን ብሔራዊ ፓርኮች (ሰሜን ተራሮች፣ ባሌ) እና ብርቅዬ እንስሳትን (ዋሊያ፣ ጭላዳ ዝንጀሮ፣ ቀይ ቀበሮ) መተንተን።",
    "presentation": {
      "explanation": "የኢትዮጵያ ብሔራዊ ፓርኮች እና ብርቅዬ እንስሳት መዋቅር:\n\n፩. ታዋቂ ብሔራዊ ፓርኮች:\n- የሰሜን ተራሮች ብሔራዊ ፓርክ (ራስ ዳሸን ተራራ)\n- የባሌ ተራሮች ብሔራዊ ፓርክ (ሰነቴ ፕላቶ)።\n\n፪. በኢትዮጵያ ብቻ የሚገኙ ብርቅዬ እንስሳት (Endemic Wildlife):\n- ዋሊያ አይቤክስ (Walia Ibex)\n- ጭላዳ ዝንጀሮ (Gelada Baboon)\n- የኢትዮጵያ ቀይ ቀበሮ (Ethiopian Red Wolf/Fox)።",
      "examples": [
        {
          "target": "ዋሊያ አይቤክስ በሰሜን ተራሮች ብሔራዊ ፓርክ ብቻ የሚገኝ ብርቅዬ የኢትዮጵያ የዱር እንስሳ ነው።",
          "reading": "Waliya Ayəbäks bäSämen Täraročč Bəherawi Park bəčča yämmiggäny bərəqəye yä'Ityop’əya yädur ənəsəsa näw. [waˈlija ʔajɨˈbɛks bɛsɛˈmen tɛraˈrotʃː bɨheˈrawi park bɨtʃːa jɛmːiɡːɛɲ bɨrɨkʼɨˈje jɛʔitjoˈpʼɨja jɛdur ʔɨnɨsɨˈsa nɛw] (wah-LEE-yah eye-BEKS beh-seh-MEN teh-rah-ROHCH buh-hay-rah-WEE PAHRK buhch-CHAH yem-mig-GEN-y bur-uk'-uh-YAY yeh-eet-yoh-P'EE-yah yeh-DOOR un-uh-suh-SAH new)",
          "translation": "The Walia Ibex is a rare Ethiopian wild animal found solely in Semien Mountains National Park."
        },
        {
          "target": "የባሌ ተራሮች ብሔራዊ ፓርክ የቀይ ቀበሮ ዋነኛ መኖሪያ እና የውሃ ምንጭ ሆኖ ያገለግላል።",
          "reading": "YäBale Täraročč Bəherawi Park yäQäyy Qäbäro wanänya mänoriya ənna yäwəha mənč’ hono yagäləgəlal. [jɛbaˈle tɛraˈrotʃː bɨheˈrawi park jɛkʼɛjː kʼɛbɛˈro wanɛˈɲa mɛnoˈrija ʔɨnːa jɛwɨˈha mɨntʃʼ hoˈno jaɡɛlɨɡɨˈlal] (yeh-bah-LAY teh-rah-ROHCH buh-hay-rah-WEE PAHRK yeh-k'ey-Y k'eh-beh-ROH wah-neh-NYAH meh-noh-REE-yah un-nah yeh-wuh-HAH mun-CH' hoh-NOH yah-gel-uh-guh-LAHL)",
          "translation": "Bale Mountains National Park serves as the principal habitat of the Red Fox and as a water catchment."
        },
        {
          "target": "የዱር አራዊትን ከህገ-ወጥ አደን መጠበቅ ለቱሪዝም እድገት እና ለሀገር ገጽታ ታላቅ ፋይዳ አለው።",
          "reading": "Yädur arawitən kähəggä-wät’ adän mät’t’äbäq läturizəm ədəggät ənna lähagär gäts’əta talaq fayəda alläw. [jɛdur ʔaraˈwitɨn kɛhɨɡːɛwɛtʼ ʔaˈdɛn mɛtʼːɛˈbɛkʼ lətuˈrizm ʔɨdɨɡːɛt ʔɨnːa ləhaˈɡɛr ɡɛtsʼɨˈta taˈlakʼ fajɨˈda ʔalːɛw] (yeh-DOOR ah-rah-WEE-tun keh-hug-geh-WET' ah-DEN met'-t'eh-BEK' luh-too-REEZ-um ud-ug-GAYT un-nah luh-hah-GER get-ts'uh-TAH tah-LAHK' fah-yuh-DAH ahl-LEW)",
          "translation": "Protecting wild animals from illegal hunting holds great benefit for tourism development and national image."
        }
      ],
      "mnemonics": [
        "Endemic Wildlife: ዋሊያ (Walia Ibex) + ጭላዳ (Gelada Baboon) + ቀይ ቀበሮ (Red Fox) + ብሔራዊ ፓርክ (National Park)!"
      ],
      "culturalNotes": [
        "የሰሜን ተራሮች ብሔራዊ ፓርክ አስደናቂ የተፈጥሮ ገደላገደል እና የመሬት አቀማመጥ ያለው በመሆኑ የአፍሪካ ጣሪያ (Roof of Africa) በመባል ይጠራል።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "በሰሜን ተራሮች ገደላገደል ላይ ብቻ የሚኖረውና በኢትዮጵያ ብቻ የሚገኘው ብርቅዬ የሜዳ ፍየል ምን ይባላል?",
          "options": [
            "ዋሊያ አይቤክስ (Walia Ibex - Rare endemic mountain ibex)",
            "አንበሳ",
            "ነብር",
            "ዝሆን"
          ],
          "answerIndex": 0,
          "explanation": "«ዋሊያ» በኢትዮጵያ ሰሜን ተራሮች ብቻ የሚገኝ ታዋቂ ብርቅዬ የዱር እንስሳ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "'National park' የሚለውን ቃል በአማርኛ በትክክል የገለጸው የትኛው ነው?",
          "options": [
            "ብሔራዊ ፓርክ (National park - Protected conservation area)",
            "የቤት ግቢ",
            "የገበያ ቦታ",
            "የከተማ አዳራሽ"
          ],
          "answerIndex": 0,
          "explanation": "«ብሔራዊ ፓርክ» የዱር አራዊትና የተፈጥሮ ሀብት በጥበቃ ስር የሚቆዩበት ህጋዊ ክልል ነው።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የኢትዮጵያን ብርቅዬ የዱር እንስሳት እና ፓርኮች ቃላትን በትክክል ያጣመረው የትኛው ነው?",
          "options": [
            "ብሔራዊ ፓርክ፣ ዋሊያ፣ ጭላዳ ዝንጀሮ፣ ቀይ ቀበሮ፣ ሰሜን እና ባሌ።",
            "ልብስ፣ ጫማ፣ ካልሲ እና ባርኔጣ።",
            "ዳቦ፣ ስንዴ፣ ገብስ እና ጤፍ።",
            "በኢትዮጵያ ብርቅዬ እንስሳት የሉም።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ብርቅዬ እንስሳትንና ብሔራዊ ፓርኮችን በሙሉ ይዟል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'ዋሊያ / Walia Ibex, endemic mountain capra' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "ዋሊያ"
          ],
          "explanation": "ትክክለኛው ቃል «ዋሊያ» (Waliya) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u29-l5": {
    "id": "am-u29-l5",
    "subject": "amharic",
    "unit": 29,
    "lessonNumber": 5,
    "title": "የክፍል 29 አጠቃላይ ማጠቃለያ (Unit 29 Grand Synthesis & Environmental Sustainability)",
    "level": "C1",
    "objective": "የደን ጥበቃን፣ የውሃ አስተዳደርን፣ የአረንጓዴ አሻራንና የብሔራዊ ፓርኮችን ፍልስፍና ያቀናጀ የተሟላ የአካባቢ ሳይንስ ውይይት ማካሄድ።",
    "presentation": {
      "explanation": "የክፍል ፳፱ አጠቃላይ የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት ማጠቃለያ:\n\n፩. ደንና ስነ-ምህዳር:\n- ደን፣ ስነ-ምህዳር፣ ብዝሃ-ህይወት፣ የተፈጥሮ ሚዛን።\n\n፪. የውሃ ሀብትና ታላቁ ህዳሴ ግድብ:\n- ውሃ፣ አባይ፣ ህዳሴ ግድብ፣ ታዳሽ ኃይል፣ መስኖ።\n\n፫. አፈርና አረንጓዴ አሻራ:\n- አረንጓዴ አሻራ፣ ችግኝ፣ እርከን ስራ፣ የአፈር ጥበቃ።\n\n፬. ብሔራዊ ፓርኮችና ብርቅዬ እንስሳት:\n- ሰሜን ተራሮች፣ ባሌ፣ ዋሊያ፣ ጭላዳ ዝንጀሮ፣ ቀይ ቀበሮ።",
      "examples": [
        {
          "target": "የኢትዮጵያ የአካባቢ ጥበቃ በደን ልማት፣ በህዳሴ ግድብ፣ በአረንጓዴ አሻራ እና በፓርኮች ጥበቃ የተሳሰረ ነው።",
          "reading": "Yä'Ityop’əya yä'akababi t’əbäqa bädän ləmat, bäHəddase Gəddəb, bä'Aränəgwarde Ašara ənna bäparkočč t’əbäqa yätäsassärä näw. [jɛʔitjoˈpʼɨja jɛʔakaˈbabi tʼɨˈbɛkʼa bɛdɛn lɨˈmat bɛhɨdːaˈse ɡɨdːɨb bɛʔarɛnɡʷarˈde ʔaˈʃara ʔɨnːa bɛparˈkotʃː tʼɨˈbɛkʼa jɛtɛsasːɛˈrɛ nɛw] (yeh-eet-yoh-P'EE-yah yeh-ah-kah-bah-BEE t'uh-beh-K'AH beh-DEN luh-MAHT, beh-hud-dah-SAY gud-DUB, beh-ah-ren-gwar-DAY ah-shah-RAH un-nah beh-pahr-KOHCH t'uh-beh-K'AH yeh-teh-sahs-seh-REH new)",
          "translation": "Ethiopia's environmental conservation is intertwined through forestry development, the Renaissance Dam, the Green Legacy, and park preservation."
        },
        {
          "target": "የተፈጥሮ ሀብትን በኃላፊነት መንከባከብ ለቀጣዩ ትውልድ የበለጸገች እና አረንጓዴ ሀገርን ለማውረስ ዋስትና ነው።",
          "reading": "Yätäfät’ro habtən bähalafinnät mänkäbbakäb läqät’t’ayu təwəld yäbäläts’ägäčč ənna aränəgwarde hagärən lämawräs wastənna näw. [jɛtɛfɛtʼˈro habˈtɨn bɛhalaˈfinːɛt mɛnkɛbːaˈkɛb ləkʼɛtʼːaˈju tɨˈwɨld jɛbɛlɛtsʼɛˈɡɛtʃː ʔɨnːa ʔarɛnɡʷarˈde haˈɡɛrɨn ləmawˈrɛs wasˈtɨnːa nɛw] (yeh-teh-fet'-ROH hahb-TUN beh-hah-lah-FEEN-net men-keb-bah-KEB luh-k'et'-tah-YOO tuh-WULD yeh-beh-leh-ts'eh-GECH un-nah ah-ren-gwar-DAY hah-GEH-run luh-mow-RES wahs-tuhn-NAH new)",
          "translation": "Responsibly nurturing natural resources is a guarantee to bequeath a prosperous and green nation unto the next generation."
        },
        {
          "target": "ዜጎች በችግኝ ተከላ እና በዱር አራዊት ጥበቃ ላይ በንቃት በመሳተፍ ዘላቂ ልማትን እያረጋገጡ ነው።",
          "reading": "Zegočč bäčəggəny täkkäla ənna bädur arawit t’əbäqa lay bänəqat bämässatäf zälaqi ləmatən əyyarrägaggät’u naččäw. [zeˈɡotʃː bɛtʃɨɡːɨɲ tɛkːɛˈla ʔɨnːa bɛdur ʔaraˈwit tʼɨˈbɛkʼa laj bɛnɨˈkʼat bɛmɛsːaˈtɛf zɛlaˈkʼi lɨˈmatɨn ʔɨjːarːɛɡaɡːɛˈtʼu naˈtʃːɛw] (zay-GOHCH beh-chug-GUN-y tek-keh-LAH un-nah beh-DOOR ah-rah-WEET t'uh-beh-K'AH lye beh-nuh-K'AHT beh-mes-sah-TEF zeh-lah-K'EE luh-MAH-tun uhy-yahr-reh-gahg-geh-T'OO nahch-CHEW)",
          "translation": "Citizens are ensuring sustainable development by actively participating in sapling planting and wildlife preservation."
        }
      ],
      "mnemonics": [
        "Grand Synthesis 29: Forest (ደን) + Water (ህዳሴ ግድብ) + Green Legacy (ችግኝ) + Parks (ዋሊያ/ቀይ ቀበሮ)!"
      ],
      "culturalNotes": [
        "ኢትዮጵያ የአረንጓዴ ኢኮኖሚ ስትራቴጂን በመከተል ለአፍሪካና ለዓለም አቀፍ የአካባቢ ጥበቃ አርአያ የሚሆን ተግባራዊ እንቅስቃሴ በማድረግ ላይ ትገኛለች።"
      ]
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "ከሚከተሉት ውስጥ የተሟላ የአካባቢ ሳይንስ እና የተፈጥሮ ሀብት ውህደትን የያዘው የትኛው ነው?",
          "options": [
            "የኢትዮጵያ የአካባቢ ጥበቃ በደን ልማት፣ በህዳሴ ግድብ፣ በአረንጓዴ አሻራ እና በፓርኮች ጥበቃ የተሳሰረ ነው። (Complete environmental synthesis combining forestry, GERD, Green Legacy, and national parks)",
            "ምንም የተፈጥሮ ሀብት የለም",
            "ሁሉም ተራ ቃላት ናቸው",
            "አካባቢ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ ደንን፣ ውሃን፣ አረንጓዴ አሻራንና ብሔራዊ ፓርኮችን በአንድነት ያጠቃለለ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "የአካባቢ ጥበቃን እና የተፈጥሮ ሀብትን ያጣመረ ትክክለኛ ዓረፍተ ነገር የትኛው ነው?",
          "options": [
            "ህብረተሰቡ ችግኝ በመትከል እና ደኖችን በመንከባከብ የስነ-ምህዳር ሚዛንን ጠበቀ። (The community preserved ecological balance by planting saplings and caring for forests - Accurate unified sentence)",
            "ምንም እንክብካቤ አልተደረገም",
            "ደን የለም",
            "ችግኝ የለም"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አማራጭ ችግኝ ተከላን እና የስነ-ምህዳር ጥበቃን በትክክል ያዛምዳል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "የክፍል 29 ዋና ዋና ርዕሰ ጉዳዮችን በትክክል ያጠቃለለው የትኛው ነው?",
          "options": [
            "የደን ጥበቃ፣ የውሃ ሀብትና የህዳሴ ግድብ፣ የአረንጓዴ አሻራ ችግኞች፣ እንዲሁም ብሔራዊ ፓርኮችና ብርቅዬ እንስሳት ተካተዋል።",
            "ይህ ክፍል ስለ ንግድ ብቻ ነው።",
            "በኢትዮጵያ ፓርክ አልነበረም።",
            "ሁሉም ወንዞች ተመሳሳይ ናቸው።"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ የክፍል 29ን አጠቃላይ ይዘት በሙሉ ይሸፍናል።"
        },
        {
          "type": "typed-recall",
          "prompt": "'አካባቢ / Environment, surrounding' የሚለውን ቃል በግዕዝ ፊደላት በትክክል ጻፉ:",
          "acceptedAnswers": [
            "አካባቢ"
          ],
          "explanation": "ትክክለኛው ቃል «አካባቢ» (Akababi) ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u30-l1": {
    "id": "am-u30-l1",
    "subject": "amharic",
    "unit": 30,
    "lessonNumber": 1,
    "title": "ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics) (ክፍል 1)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሞራልና የሥነ-ምግባር መርሆዎች፣ ማህበራዊ ፍትህ እና የባህል እሴቶች። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (30.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (30.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (30.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (30.1.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (30.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (30.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (30.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (30.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u30-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (30.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (30.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (30.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (30.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (30.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (30.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (30.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (30.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 30-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (30.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (30.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (30.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (30.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u30-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ፍልስፍና»):",
          "acceptedAnswers": [
            "ፍልስፍና",
            "ፍልስፍና"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ፍልስፍና» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u30-l2": {
    "id": "am-u30-l2",
    "subject": "amharic",
    "unit": 30,
    "lessonNumber": 2,
    "title": "ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics) (ክፍል 2)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሞራልና የሥነ-ምግባር መርሆዎች፣ ማህበራዊ ፍትህ እና የባህል እሴቶች። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (30.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (30.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (30.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (30.2.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (30.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (30.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (30.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (30.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u30-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (30.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (30.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (30.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (30.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (30.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (30.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (30.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (30.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 30-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (30.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (30.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (30.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (30.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u30-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ፍልስፍና»):",
          "acceptedAnswers": [
            "ፍልስፍና",
            "ፍልስፍና"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ፍልስፍና» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u30-l3": {
    "id": "am-u30-l3",
    "subject": "amharic",
    "unit": 30,
    "lessonNumber": 3,
    "title": "ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics) (ክፍል 3)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሞራልና የሥነ-ምግባር መርሆዎች፣ ማህበራዊ ፍትህ እና የባህል እሴቶች። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (30.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (30.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (30.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (30.3.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (30.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (30.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (30.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (30.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u30-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (30.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (30.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (30.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (30.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (30.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (30.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (30.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (30.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 30-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (30.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (30.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (30.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (30.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u30-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ፍልስፍና»):",
          "acceptedAnswers": [
            "ፍልስፍና",
            "ፍልስፍና"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ፍልስፍና» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u30-l4": {
    "id": "am-u30-l4",
    "subject": "amharic",
    "unit": 30,
    "lessonNumber": 4,
    "title": "ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics) (ክፍል 4)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሞራልና የሥነ-ምግባር መርሆዎች፣ ማህበራዊ ፍትህ እና የባህል እሴቶች። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (30.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (30.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (30.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (30.4.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (30.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (30.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (30.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (30.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u30-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (30.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (30.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (30.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (30.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (30.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (30.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (30.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (30.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 30-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (30.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (30.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (30.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (30.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u30-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ፍልስፍና»):",
          "acceptedAnswers": [
            "ፍልስፍና",
            "ፍልስፍና"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ፍልስፍና» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u30-l5": {
    "id": "am-u30-l5",
    "subject": "amharic",
    "unit": 30,
    "lessonNumber": 5,
    "title": "ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics) (ክፍል 5)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሞራልና የሥነ-ምግባር መርሆዎች፣ ማህበራዊ ፍትህ እና የባህል እሴቶች። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (30.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (30.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (30.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (30.5.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (30.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (30.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (30.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (30.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u30-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (30.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (30.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (30.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (30.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ፍልስፍና እና ስነ-ምግባር (Philosophy & Ethics)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (30.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (30.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (30.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (30.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 30-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (30.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (30.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (30.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (30.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u30-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ፍልስፍና»):",
          "acceptedAnswers": [
            "ፍልስፍና",
            "ፍልስፍና"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ፍልስፍና» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u31-l1": {
    "id": "am-u31-l1",
    "subject": "amharic",
    "unit": 31,
    "lessonNumber": 1,
    "title": "ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse) (ክፍል 1)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የአካዳሚክ ምርምር ጽሑፎች፣ ሳይንሳዊ ግኝቶች እና የምርምር ዘዴዎች። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (31.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (31.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (31.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (31.1.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (31.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (31.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (31.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (31.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u31-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (31.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (31.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (31.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (31.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (31.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (31.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (31.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (31.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 31-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (31.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (31.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (31.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (31.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u31-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ሳይንሳዊ»):",
          "acceptedAnswers": [
            "ሳይንሳዊ",
            "ሳይንሳዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ሳይንሳዊ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u31-l2": {
    "id": "am-u31-l2",
    "subject": "amharic",
    "unit": 31,
    "lessonNumber": 2,
    "title": "ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse) (ክፍል 2)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የአካዳሚክ ምርምር ጽሑፎች፣ ሳይንሳዊ ግኝቶች እና የምርምር ዘዴዎች። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (31.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (31.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (31.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (31.2.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (31.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (31.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (31.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (31.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u31-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (31.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (31.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (31.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (31.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (31.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (31.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (31.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (31.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 31-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (31.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (31.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (31.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (31.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u31-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ሳይንሳዊ»):",
          "acceptedAnswers": [
            "ሳይንሳዊ",
            "ሳይንሳዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ሳይንሳዊ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u31-l3": {
    "id": "am-u31-l3",
    "subject": "amharic",
    "unit": 31,
    "lessonNumber": 3,
    "title": "ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse) (ክፍል 3)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የአካዳሚክ ምርምር ጽሑፎች፣ ሳይንሳዊ ግኝቶች እና የምርምር ዘዴዎች። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (31.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (31.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (31.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (31.3.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (31.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (31.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (31.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (31.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u31-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (31.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (31.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (31.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (31.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (31.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (31.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (31.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (31.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 31-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (31.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (31.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (31.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (31.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u31-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ሳይንሳዊ»):",
          "acceptedAnswers": [
            "ሳይንሳዊ",
            "ሳይንሳዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ሳይንሳዊ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u31-l4": {
    "id": "am-u31-l4",
    "subject": "amharic",
    "unit": 31,
    "lessonNumber": 4,
    "title": "ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse) (ክፍል 4)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የአካዳሚክ ምርምር ጽሑፎች፣ ሳይንሳዊ ግኝቶች እና የምርምር ዘዴዎች። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (31.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (31.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (31.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (31.4.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (31.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (31.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (31.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (31.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u31-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (31.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (31.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (31.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (31.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (31.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (31.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (31.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (31.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 31-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (31.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (31.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (31.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (31.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u31-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ሳይንሳዊ»):",
          "acceptedAnswers": [
            "ሳይንሳዊ",
            "ሳይንሳዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ሳይንሳዊ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u31-l5": {
    "id": "am-u31-l5",
    "subject": "amharic",
    "unit": 31,
    "lessonNumber": 5,
    "title": "ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse) (ክፍል 5)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የአካዳሚክ ምርምር ጽሑፎች፣ ሳይንሳዊ ግኝቶች እና የምርምር ዘዴዎች። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (31.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (31.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (31.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (31.5.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (31.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (31.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (31.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (31.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u31-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (31.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (31.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (31.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (31.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ሳይንሳዊ ምርምር እና ትንተና (Scientific Research & Discourse)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (31.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (31.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (31.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (31.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 31-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (31.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (31.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (31.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (31.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u31-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ሳይንሳዊ»):",
          "acceptedAnswers": [
            "ሳይንሳዊ",
            "ሳይንሳዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ሳይንሳዊ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u32-l1": {
    "id": "am-u32-l1",
    "subject": "amharic",
    "unit": 32,
    "lessonNumber": 1,
    "title": "ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs) (ክፍል 1)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የዲፕሎማሲያዊ ግንኙነት፣ የሁለትዮሽና የባለብዙ ወገን ስምምነቶች ትንተና። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (32.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (32.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (32.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (32.1.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (32.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (32.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (32.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (32.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u32-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (32.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (32.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (32.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (32.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (32.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (32.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (32.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (32.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 32-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (32.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (32.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (32.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (32.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u32-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ዓለም»):",
          "acceptedAnswers": [
            "ዓለም",
            "ዓለም"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ዓለም» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u32-l2": {
    "id": "am-u32-l2",
    "subject": "amharic",
    "unit": 32,
    "lessonNumber": 2,
    "title": "ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs) (ክፍል 2)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የዲፕሎማሲያዊ ግንኙነት፣ የሁለትዮሽና የባለብዙ ወገን ስምምነቶች ትንተና። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (32.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (32.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (32.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (32.2.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (32.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (32.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (32.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (32.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u32-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (32.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (32.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (32.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (32.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (32.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (32.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (32.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (32.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 32-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (32.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (32.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (32.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (32.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u32-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ዓለም»):",
          "acceptedAnswers": [
            "ዓለም",
            "ዓለም"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ዓለም» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u32-l3": {
    "id": "am-u32-l3",
    "subject": "amharic",
    "unit": 32,
    "lessonNumber": 3,
    "title": "ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs) (ክፍል 3)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የዲፕሎማሲያዊ ግንኙነት፣ የሁለትዮሽና የባለብዙ ወገን ስምምነቶች ትንተና። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (32.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (32.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (32.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (32.3.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (32.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (32.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (32.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (32.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u32-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (32.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (32.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (32.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (32.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (32.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (32.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (32.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (32.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 32-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (32.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (32.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (32.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (32.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u32-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ዓለም»):",
          "acceptedAnswers": [
            "ዓለም",
            "ዓለም"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ዓለም» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u32-l4": {
    "id": "am-u32-l4",
    "subject": "amharic",
    "unit": 32,
    "lessonNumber": 4,
    "title": "ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs) (ክፍል 4)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የዲፕሎማሲያዊ ግንኙነት፣ የሁለትዮሽና የባለብዙ ወገን ስምምነቶች ትንተና። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (32.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (32.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (32.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (32.4.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (32.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (32.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (32.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (32.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u32-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (32.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (32.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (32.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (32.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (32.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (32.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (32.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (32.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 32-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (32.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (32.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (32.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (32.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u32-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ዓለም»):",
          "acceptedAnswers": [
            "ዓለም",
            "ዓለም"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ዓለም» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u32-l5": {
    "id": "am-u32-l5",
    "subject": "amharic",
    "unit": 32,
    "lessonNumber": 5,
    "title": "ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs) (ክፍል 5)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የዲፕሎማሲያዊ ግንኙነት፣ የሁለትዮሽና የባለብዙ ወገን ስምምነቶች ትንተና። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (32.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (32.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (32.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (32.5.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (32.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (32.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (32.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (32.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u32-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (32.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (32.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (32.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (32.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ዓለም አቀፍ ግንኙነት እና ዲፕሎማሲ (Diplomacy & International Affairs)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (32.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (32.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (32.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (32.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 32-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (32.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (32.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (32.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (32.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u32-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ዓለም»):",
          "acceptedAnswers": [
            "ዓለም",
            "ዓለም"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ዓለም» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u33-l1": {
    "id": "am-u33-l1",
    "subject": "amharic",
    "unit": 33,
    "lessonNumber": 1,
    "title": "የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric) (ክፍል 1)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሰምና ወርቅ ቅኔ ጥበብ፣ የላቁ ፈሊጣዊ አነጋገሮች እና የአደባባይ ንግግር። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (33.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (33.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (33.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (33.1.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (33.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (33.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (33.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (33.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u33-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (33.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (33.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (33.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (33.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (33.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (33.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (33.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (33.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 33-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (33.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (33.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (33.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (33.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u33-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የላቀ»):",
          "acceptedAnswers": [
            "የላቀ",
            "የላቀ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የላቀ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u33-l2": {
    "id": "am-u33-l2",
    "subject": "amharic",
    "unit": 33,
    "lessonNumber": 2,
    "title": "የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric) (ክፍል 2)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሰምና ወርቅ ቅኔ ጥበብ፣ የላቁ ፈሊጣዊ አነጋገሮች እና የአደባባይ ንግግር። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (33.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (33.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (33.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (33.2.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (33.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (33.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (33.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (33.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u33-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (33.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (33.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (33.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (33.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (33.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (33.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (33.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (33.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 33-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (33.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (33.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (33.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (33.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u33-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የላቀ»):",
          "acceptedAnswers": [
            "የላቀ",
            "የላቀ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የላቀ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u33-l3": {
    "id": "am-u33-l3",
    "subject": "amharic",
    "unit": 33,
    "lessonNumber": 3,
    "title": "የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric) (ክፍል 3)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሰምና ወርቅ ቅኔ ጥበብ፣ የላቁ ፈሊጣዊ አነጋገሮች እና የአደባባይ ንግግር። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (33.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (33.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (33.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (33.3.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (33.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (33.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (33.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (33.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u33-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (33.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (33.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (33.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (33.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (33.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (33.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (33.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (33.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 33-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (33.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (33.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (33.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (33.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u33-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የላቀ»):",
          "acceptedAnswers": [
            "የላቀ",
            "የላቀ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የላቀ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u33-l4": {
    "id": "am-u33-l4",
    "subject": "amharic",
    "unit": 33,
    "lessonNumber": 4,
    "title": "የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric) (ክፍል 4)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሰምና ወርቅ ቅኔ ጥበብ፣ የላቁ ፈሊጣዊ አነጋገሮች እና የአደባባይ ንግግር። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (33.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (33.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (33.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (33.4.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (33.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (33.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (33.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (33.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u33-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (33.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (33.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (33.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (33.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (33.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (33.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (33.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (33.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 33-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (33.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (33.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (33.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (33.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u33-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የላቀ»):",
          "acceptedAnswers": [
            "የላቀ",
            "የላቀ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የላቀ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u33-l5": {
    "id": "am-u33-l5",
    "subject": "amharic",
    "unit": 33,
    "lessonNumber": 5,
    "title": "የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric) (ክፍል 5)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሰምና ወርቅ ቅኔ ጥበብ፣ የላቁ ፈሊጣዊ አነጋገሮች እና የአደባባይ ንግግር። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (33.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (33.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (33.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (33.5.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (33.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (33.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (33.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (33.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u33-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (33.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (33.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (33.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (33.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የላቀ የአማርኛ ዘይቤ እና ፈሊጦች (Advanced Idioms & Rhetoric)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (33.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (33.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (33.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (33.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 33-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (33.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (33.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (33.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (33.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u33-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የላቀ»):",
          "acceptedAnswers": [
            "የላቀ",
            "የላቀ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የላቀ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u34-l1": {
    "id": "am-u34-l1",
    "subject": "amharic",
    "unit": 34,
    "lessonNumber": 1,
    "title": "የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery) (ክፍል 1)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የ1969 የቪየና የውል ስምምነት ሕግጋት፣ የተባበሩት መንግሥታት ውሳኔዎች፣ የዲፕሎማሲ ጥበቃ። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (34.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (34.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (34.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (34.1.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (34.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (34.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (34.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (34.1.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u34-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (34.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (34.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (34.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (34.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (34.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (34.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (34.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (34.1.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 34-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (34.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (34.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (34.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (34.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u34-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የመጨረሻ»):",
          "acceptedAnswers": [
            "የመጨረሻ",
            "የመጨረሻ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የመጨረሻ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u34-l2": {
    "id": "am-u34-l2",
    "subject": "amharic",
    "unit": 34,
    "lessonNumber": 2,
    "title": "የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery) (ክፍል 2)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የ1969 የቪየና የውል ስምምነት ሕግጋት፣ የተባበሩት መንግሥታት ውሳኔዎች፣ የዲፕሎማሲ ጥበቃ። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (34.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (34.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (34.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (34.2.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (34.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (34.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (34.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (34.2.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u34-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (34.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (34.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (34.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (34.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (34.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (34.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (34.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (34.2.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 34-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (34.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (34.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (34.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (34.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u34-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የመጨረሻ»):",
          "acceptedAnswers": [
            "የመጨረሻ",
            "የመጨረሻ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የመጨረሻ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u34-l3": {
    "id": "am-u34-l3",
    "subject": "amharic",
    "unit": 34,
    "lessonNumber": 3,
    "title": "የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery) (ክፍል 3)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የ1969 የቪየና የውል ስምምነት ሕግጋት፣ የተባበሩት መንግሥታት ውሳኔዎች፣ የዲፕሎማሲ ጥበቃ። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (34.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (34.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (34.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (34.3.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (34.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (34.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (34.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (34.3.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u34-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (34.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (34.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (34.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (34.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (34.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (34.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (34.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (34.3.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 34-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (34.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (34.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (34.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (34.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u34-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የመጨረሻ»):",
          "acceptedAnswers": [
            "የመጨረሻ",
            "የመጨረሻ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የመጨረሻ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u34-l4": {
    "id": "am-u34-l4",
    "subject": "amharic",
    "unit": 34,
    "lessonNumber": 4,
    "title": "የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery) (ክፍል 4)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የ1969 የቪየና የውል ስምምነት ሕግጋት፣ የተባበሩት መንግሥታት ውሳኔዎች፣ የዲፕሎማሲ ጥበቃ። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (34.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (34.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (34.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (34.4.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (34.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (34.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (34.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (34.4.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u34-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (34.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (34.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (34.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (34.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (34.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (34.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (34.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (34.4.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 34-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (34.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (34.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (34.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (34.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u34-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የመጨረሻ»):",
          "acceptedAnswers": [
            "የመጨረሻ",
            "የመጨረሻ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የመጨረሻ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  },
  "am-u34-l5": {
    "id": "am-u34-l5",
    "subject": "amharic",
    "unit": 34,
    "lessonNumber": 5,
    "title": "የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery) (ክፍል 5)",
    "level": "C2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የ1969 የቪየና የውል ስምምነት ሕግጋት፣ የተባበሩት መንግሥታት ውሳኔዎች፣ የዲፕሎማሲ ጥበቃ። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (34.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (34.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (34.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (34.5.4)።",
          "reading": "Temariwoch ye-timihirtun yizet bemigeba bemerdat ye-fetena tiyaqewochin betikikil melesu.",
          "translation": "Students accurately answered the exam questions without any error by properly understanding the lesson content."
        }
      ],
      "mnemonics": [],
      "culturalNotes": []
    },
    "guidedPractice": {
      "items": [
        {
          "prompt": "【የሰዋሰው ትንተና】ለ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (34.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (34.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (34.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (34.5.w3)"
          ],
          "answerIndex": 0,
          "explanation": "የመጀመሪያው አማራጭ ትክክለኛውን የአማርኛ ሰዋሰዋዊ እና መዋቅራዊ ስርዓት ሙሉ በሙሉ ጠብቆ የተዋቀረ ነው።"
        },
        {
          "prompt": "【የትርጉም እና የአገባብ ትንተና】በዚህ ትምህርት ውስጥ የተብራራውን የቋንቋ ህግ በትክክል የሚገልጸው የቱ ነው?",
          "options": [
            "ይህ አረፍተ ነገር በመደበኛ የአማርኛ ሰዋሰው ህግ መሰረት በትክክል የተዋቀረ ነው።",
            "በአረፍተ ነገሩ ውስጥ የጾታ እና የቁጥር አለመጣጣም ስህተት ተፈጽሟል።",
            "ተገቢ ያልሆነ እና በመደበኛ ቋንቋ የማይፈቀድ የቃላት አጠቃቀም ይታያል።",
            "የአረፍተ ነገሩ ማሰሪያ አንቀጽ ባለመኖሩ ምክንያት ትርጉሙ አልተሟላም።"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ትክክለኛውን የሰዋሰው መርህ የሚያረጋግጥ ነው።"
        }
      ]
    },
    "independentPractice": {
      "items": [
        {
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u34-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (34.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (34.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (34.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (34.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የመጨረሻ የብቃት ማጠቃለያ (C2 Capstone Mastery)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (34.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (34.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (34.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (34.5.y3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ ምርጫ ግልጽ እና ደረጃውን የጠበቀ መልእክት ያስተላልፋል።"
        }
      ]
    },
    "checkpointTest": {
      "items": [
        {
          "type": "multiple-choice",
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 34-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (34.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (34.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (34.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (34.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u34-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የመጨረሻ»):",
          "acceptedAnswers": [
            "የመጨረሻ",
            "የመጨረሻ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የመጨረሻ» ነው።"
        }
      ],
      "passThreshold": 0.8
    }
  }
};
  var CURRICULUM = {
    subject: 'amharic',
    units: UNITS,
    lessons: LESSONS
  };
  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};
  global.FEARN_CURRICULA['amharic'] = CURRICULUM;
  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;
})(typeof window !== 'undefined' ? window : global);
