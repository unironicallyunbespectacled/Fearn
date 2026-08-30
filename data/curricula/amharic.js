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
    "title": "የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions) (ክፍል 1)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የወደፊት ጊዜ እርባታ (እ...አለሁ)، ዕቅድ እና ዓላማን በግልጽ መግለጽ። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (11.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (11.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (11.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (11.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (11.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (11.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (11.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (11.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u11-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (11.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (11.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (11.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (11.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (11.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (11.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (11.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (11.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 11-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (11.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (11.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (11.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (11.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u11-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የወደፊት»):",
          "acceptedAnswers": [
            "የወደፊት",
            "የወደፊት"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የወደፊት» ነው።"
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
    "title": "የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions) (ክፍል 2)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የወደፊት ጊዜ እርባታ (እ...አለሁ)، ዕቅድ እና ዓላማን በግልጽ መግለጽ። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (11.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (11.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (11.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (11.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (11.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (11.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (11.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (11.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u11-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (11.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (11.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (11.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (11.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (11.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (11.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (11.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (11.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 11-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (11.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (11.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (11.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (11.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u11-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የወደፊት»):",
          "acceptedAnswers": [
            "የወደፊት",
            "የወደፊት"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የወደፊት» ነው።"
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
    "title": "የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions) (ክፍል 3)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የወደፊት ጊዜ እርባታ (እ...አለሁ)، ዕቅድ እና ዓላማን በግልጽ መግለጽ። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (11.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (11.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (11.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (11.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (11.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (11.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (11.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (11.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u11-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (11.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (11.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (11.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (11.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (11.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (11.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (11.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (11.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 11-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (11.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (11.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (11.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (11.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u11-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የወደፊት»):",
          "acceptedAnswers": [
            "የወደፊት",
            "የወደፊት"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የወደፊት» ነው።"
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
    "title": "የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions) (ክፍል 4)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የወደፊት ጊዜ እርባታ (እ...አለሁ)، ዕቅድ እና ዓላማን በግልጽ መግለጽ። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (11.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (11.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (11.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (11.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (11.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (11.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (11.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (11.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u11-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (11.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (11.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (11.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (11.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (11.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (11.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (11.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (11.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 11-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (11.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (11.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (11.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (11.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u11-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የወደፊት»):",
          "acceptedAnswers": [
            "የወደፊት",
            "የወደፊት"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የወደፊት» ነው።"
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
    "title": "የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions) (ክፍል 5)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የወደፊት ጊዜ እርባታ (እ...አለሁ)، ዕቅድ እና ዓላማን በግልጽ መግለጽ። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (11.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (11.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (11.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (11.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (11.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (11.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (11.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (11.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u11-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (11.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (11.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (11.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (11.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የወደፊት ጊዜ እና ዕቅዶች (Future Tense & Intentions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (11.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (11.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (11.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (11.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 11-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (11.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (11.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (11.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (11.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u11-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የወደፊት»):",
          "acceptedAnswers": [
            "የወደፊት",
            "የወደፊት"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የወደፊት» ነው።"
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
    "title": "ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies) (ክፍል 1)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የትርፍ ጊዜ ማሳለፊያዎች፣ ስፖርቶች፣ እና የፍላጎት መግለጫዎች። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (12.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (12.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (12.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (12.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (12.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (12.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (12.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (12.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u12-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (12.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (12.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (12.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (12.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (12.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (12.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (12.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (12.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 12-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (12.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (12.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (12.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (12.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u12-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ትርፍ»):",
          "acceptedAnswers": [
            "ትርፍ",
            "ትርፍ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ትርፍ» ነው።"
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
    "title": "ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies) (ክፍል 2)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የትርፍ ጊዜ ማሳለፊያዎች፣ ስፖርቶች፣ እና የፍላጎት መግለጫዎች። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (12.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (12.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (12.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (12.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (12.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (12.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (12.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (12.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u12-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (12.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (12.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (12.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (12.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (12.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (12.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (12.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (12.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 12-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (12.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (12.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (12.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (12.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u12-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ትርፍ»):",
          "acceptedAnswers": [
            "ትርፍ",
            "ትርፍ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ትርፍ» ነው።"
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
    "title": "ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies) (ክፍል 3)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የትርፍ ጊዜ ማሳለፊያዎች፣ ስፖርቶች፣ እና የፍላጎት መግለጫዎች። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (12.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (12.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (12.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (12.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (12.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (12.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (12.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (12.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u12-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (12.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (12.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (12.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (12.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (12.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (12.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (12.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (12.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 12-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (12.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (12.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (12.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (12.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u12-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ትርፍ»):",
          "acceptedAnswers": [
            "ትርፍ",
            "ትርፍ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ትርፍ» ነው።"
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
    "title": "ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies) (ክፍል 4)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የትርፍ ጊዜ ማሳለፊያዎች፣ ስፖርቶች፣ እና የፍላጎት መግለጫዎች። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (12.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (12.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (12.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (12.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (12.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (12.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (12.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (12.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u12-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (12.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (12.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (12.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (12.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (12.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (12.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (12.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (12.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 12-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (12.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (12.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (12.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (12.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u12-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ትርፍ»):",
          "acceptedAnswers": [
            "ትርፍ",
            "ትርፍ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ትርፍ» ነው።"
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
    "title": "ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies) (ክፍል 5)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የትርፍ ጊዜ ማሳለፊያዎች፣ ስፖርቶች፣ እና የፍላጎት መግለጫዎች። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (12.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (12.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (12.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (12.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (12.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (12.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (12.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (12.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u12-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (12.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (12.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (12.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (12.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ትርፍ ጊዜ፣ ስፖርት እና መዝናኛ (Leisure & Hobbies)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (12.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (12.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (12.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (12.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 12-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (12.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (12.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (12.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (12.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u12-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ትርፍ»):",
          "acceptedAnswers": [
            "ትርፍ",
            "ትርፍ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ትርፍ» ነው።"
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
    "title": "የሥራ ዓለም እና ሙያዎች (Professions & Workplace) (ክፍል 1)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የሥራ መስኮች፣ የሥራ ማመልከቻ እና የቢሮ ውስጥ ግንኙነት። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (13.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የሥራ ዓለም እና ሙያዎች (Professions & Workplace)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (13.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (13.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (13.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (13.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (13.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (13.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (13.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u13-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (13.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (13.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (13.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (13.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (13.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (13.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (13.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (13.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 13-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (13.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (13.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (13.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (13.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u13-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የሥራ»):",
          "acceptedAnswers": [
            "የሥራ",
            "የሥራ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የሥራ» ነው።"
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
    "title": "የሥራ ዓለም እና ሙያዎች (Professions & Workplace) (ክፍል 2)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የሥራ መስኮች፣ የሥራ ማመልከቻ እና የቢሮ ውስጥ ግንኙነት። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (13.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የሥራ ዓለም እና ሙያዎች (Professions & Workplace)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (13.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (13.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (13.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (13.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (13.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (13.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (13.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u13-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (13.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (13.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (13.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (13.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (13.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (13.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (13.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (13.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 13-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (13.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (13.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (13.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (13.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u13-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የሥራ»):",
          "acceptedAnswers": [
            "የሥራ",
            "የሥራ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የሥራ» ነው።"
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
    "title": "የሥራ ዓለም እና ሙያዎች (Professions & Workplace) (ክፍል 3)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የሥራ መስኮች፣ የሥራ ማመልከቻ እና የቢሮ ውስጥ ግንኙነት። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (13.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የሥራ ዓለም እና ሙያዎች (Professions & Workplace)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (13.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (13.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (13.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (13.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (13.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (13.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (13.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u13-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (13.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (13.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (13.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (13.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (13.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (13.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (13.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (13.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 13-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (13.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (13.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (13.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (13.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u13-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የሥራ»):",
          "acceptedAnswers": [
            "የሥራ",
            "የሥራ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የሥራ» ነው።"
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
    "title": "የሥራ ዓለም እና ሙያዎች (Professions & Workplace) (ክፍል 4)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የሥራ መስኮች፣ የሥራ ማመልከቻ እና የቢሮ ውስጥ ግንኙነት። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (13.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የሥራ ዓለም እና ሙያዎች (Professions & Workplace)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (13.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (13.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (13.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (13.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (13.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (13.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (13.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u13-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (13.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (13.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (13.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (13.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (13.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (13.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (13.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (13.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 13-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (13.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (13.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (13.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (13.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u13-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የሥራ»):",
          "acceptedAnswers": [
            "የሥራ",
            "የሥራ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የሥራ» ነው።"
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
    "title": "የሥራ ዓለም እና ሙያዎች (Professions & Workplace) (ክፍል 5)",
    "level": "A2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የሥራ መስኮች፣ የሥራ ማመልከቻ እና የቢሮ ውስጥ ግንኙነት። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (13.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የሥራ ዓለም እና ሙያዎች (Professions & Workplace)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (13.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (13.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (13.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (13.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (13.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (13.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (13.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u13-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (13.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (13.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (13.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (13.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የሥራ ዓለም እና ሙያዎች (Professions & Workplace)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (13.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (13.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (13.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (13.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 13-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (13.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (13.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (13.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (13.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u13-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የሥራ»):",
          "acceptedAnswers": [
            "የሥራ",
            "የሥራ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የሥራ» ነው።"
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
    "title": "ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage) (ክፍል 1)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የኢትዮጵያ ታሪካዊ ቦታዎች (ላሊበላ፣ አክሱም፣ ጎንደር) እና የጉዞ ልምዶች መግለጫ። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (14.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (14.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (14.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (14.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (14.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (14.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (14.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (14.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u14-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (14.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (14.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (14.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (14.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (14.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (14.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (14.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (14.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 14-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (14.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (14.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (14.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (14.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u14-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ጉዞ»):",
          "acceptedAnswers": [
            "ጉዞ",
            "ጉዞ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ጉዞ» ነው።"
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
    "title": "ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage) (ክፍል 2)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የኢትዮጵያ ታሪካዊ ቦታዎች (ላሊበላ፣ አክሱም፣ ጎንደር) እና የጉዞ ልምዶች መግለጫ። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (14.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (14.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (14.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (14.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (14.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (14.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (14.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (14.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u14-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (14.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (14.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (14.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (14.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (14.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (14.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (14.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (14.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 14-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (14.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (14.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (14.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (14.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u14-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ጉዞ»):",
          "acceptedAnswers": [
            "ጉዞ",
            "ጉዞ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ጉዞ» ነው።"
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
    "title": "ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage) (ክፍል 3)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የኢትዮጵያ ታሪካዊ ቦታዎች (ላሊበላ፣ አክሱም፣ ጎንደር) እና የጉዞ ልምዶች መግለጫ። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (14.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (14.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (14.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (14.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (14.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (14.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (14.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (14.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u14-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (14.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (14.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (14.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (14.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (14.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (14.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (14.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (14.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 14-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (14.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (14.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (14.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (14.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u14-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ጉዞ»):",
          "acceptedAnswers": [
            "ጉዞ",
            "ጉዞ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ጉዞ» ነው።"
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
    "title": "ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage) (ክፍል 4)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የኢትዮጵያ ታሪካዊ ቦታዎች (ላሊበላ፣ አክሱም፣ ጎንደር) እና የጉዞ ልምዶች መግለጫ። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (14.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (14.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (14.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (14.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (14.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (14.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (14.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (14.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u14-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (14.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (14.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (14.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (14.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (14.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (14.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (14.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (14.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 14-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (14.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (14.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (14.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (14.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u14-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ጉዞ»):",
          "acceptedAnswers": [
            "ጉዞ",
            "ጉዞ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ጉዞ» ነው።"
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
    "title": "ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage) (ክፍል 5)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የኢትዮጵያ ታሪካዊ ቦታዎች (ላሊበላ፣ አክሱም፣ ጎንደር) እና የጉዞ ልምዶች መግለጫ። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (14.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (14.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (14.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (14.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (14.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (14.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (14.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (14.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u14-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (14.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (14.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (14.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (14.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ጉዞ እና ታሪካዊ ቅርሶች (Travel & Ethiopian Heritage)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (14.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (14.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (14.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (14.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 14-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (14.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (14.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (14.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (14.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u14-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ጉዞ»):",
          "acceptedAnswers": [
            "ጉዞ",
            "ጉዞ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ጉዞ» ነው።"
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
    "title": "የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography) (ክፍል 1)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የኢትዮጵያ አራቱ ወቅቶች (መኸር፣ በጋ፣ ፀደይ፣ ክረምት) እና የተፈጥሮ ሀብት። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (15.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (15.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (15.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (15.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (15.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (15.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (15.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (15.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u15-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (15.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (15.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (15.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (15.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (15.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (15.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (15.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (15.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 15-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (15.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (15.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (15.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (15.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u15-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የአየር»):",
          "acceptedAnswers": [
            "የአየር",
            "የአየር"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የአየር» ነው።"
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
    "title": "የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography) (ክፍል 2)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የኢትዮጵያ አራቱ ወቅቶች (መኸር፣ በጋ፣ ፀደይ፣ ክረምት) እና የተፈጥሮ ሀብት። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (15.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (15.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (15.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (15.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (15.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (15.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (15.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (15.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u15-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (15.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (15.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (15.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (15.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (15.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (15.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (15.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (15.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 15-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (15.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (15.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (15.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (15.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u15-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የአየር»):",
          "acceptedAnswers": [
            "የአየር",
            "የአየር"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የአየር» ነው።"
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
    "title": "የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography) (ክፍል 3)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የኢትዮጵያ አራቱ ወቅቶች (መኸር፣ በጋ፣ ፀደይ፣ ክረምት) እና የተፈጥሮ ሀብት። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (15.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (15.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (15.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (15.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (15.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (15.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (15.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (15.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u15-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (15.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (15.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (15.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (15.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (15.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (15.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (15.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (15.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 15-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (15.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (15.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (15.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (15.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u15-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የአየር»):",
          "acceptedAnswers": [
            "የአየር",
            "የአየር"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የአየር» ነው።"
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
    "title": "የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography) (ክፍል 4)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የኢትዮጵያ አራቱ ወቅቶች (መኸር፣ በጋ፣ ፀደይ፣ ክረምት) እና የተፈጥሮ ሀብት። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (15.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (15.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (15.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (15.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (15.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (15.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (15.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (15.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u15-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (15.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (15.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (15.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (15.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (15.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (15.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (15.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (15.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 15-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (15.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (15.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (15.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (15.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u15-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የአየር»):",
          "acceptedAnswers": [
            "የአየር",
            "የአየር"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የአየር» ነው።"
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
    "title": "የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography) (ክፍል 5)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የኢትዮጵያ አራቱ ወቅቶች (መኸር፣ በጋ፣ ፀደይ፣ ክረምት) እና የተፈጥሮ ሀብት። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (15.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (15.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (15.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (15.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (15.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (15.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (15.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (15.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u15-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (15.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (15.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (15.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (15.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የአየር ንብረት እና የተፈጥሮ ገጽታ (Weather & Geography)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (15.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (15.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (15.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (15.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 15-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (15.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (15.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (15.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (15.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u15-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የአየር»):",
          "acceptedAnswers": [
            "የአየር",
            "የአየር"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የአየር» ነው።"
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
    "title": "መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life) (ክፍል 1)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የቤት ኪራይ፣ የቤት ውስጥ ክፍሎች እና ቁሳቁሶች፣ የቦታ መገኛ መግለጫዎች። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (16.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (16.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (16.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (16.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (16.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (16.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (16.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (16.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u16-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (16.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (16.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (16.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (16.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (16.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (16.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (16.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (16.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 16-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (16.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (16.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (16.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (16.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u16-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «መኖሪያ»):",
          "acceptedAnswers": [
            "መኖሪያ",
            "መኖሪያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «መኖሪያ» ነው።"
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
    "title": "መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life) (ክፍል 2)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የቤት ኪራይ፣ የቤት ውስጥ ክፍሎች እና ቁሳቁሶች፣ የቦታ መገኛ መግለጫዎች። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (16.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (16.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (16.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (16.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (16.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (16.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (16.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (16.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u16-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (16.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (16.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (16.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (16.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (16.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (16.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (16.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (16.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 16-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (16.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (16.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (16.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (16.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u16-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «መኖሪያ»):",
          "acceptedAnswers": [
            "መኖሪያ",
            "መኖሪያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «መኖሪያ» ነው።"
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
    "title": "መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life) (ክፍል 3)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የቤት ኪራይ፣ የቤት ውስጥ ክፍሎች እና ቁሳቁሶች፣ የቦታ መገኛ መግለጫዎች። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (16.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (16.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (16.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (16.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (16.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (16.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (16.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (16.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u16-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (16.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (16.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (16.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (16.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (16.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (16.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (16.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (16.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 16-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (16.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (16.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (16.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (16.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u16-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «መኖሪያ»):",
          "acceptedAnswers": [
            "መኖሪያ",
            "መኖሪያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «መኖሪያ» ነው።"
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
    "title": "መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life) (ክፍል 4)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የቤት ኪራይ፣ የቤት ውስጥ ክፍሎች እና ቁሳቁሶች፣ የቦታ መገኛ መግለጫዎች። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (16.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (16.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (16.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (16.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (16.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (16.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (16.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (16.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u16-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (16.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (16.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (16.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (16.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (16.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (16.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (16.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (16.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 16-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (16.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (16.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (16.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (16.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u16-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «መኖሪያ»):",
          "acceptedAnswers": [
            "መኖሪያ",
            "መኖሪያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «መኖሪያ» ነው።"
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
    "title": "መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life) (ክፍል 5)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የቤት ኪራይ፣ የቤት ውስጥ ክፍሎች እና ቁሳቁሶች፣ የቦታ መገኛ መግለጫዎች። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (16.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (16.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (16.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (16.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (16.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (16.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (16.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (16.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u16-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (16.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (16.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (16.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (16.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«መኖሪያ ቤት እና የቤት እቃዎች (Housing & Home Life)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (16.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (16.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (16.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (16.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 16-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (16.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (16.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (16.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (16.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u16-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «መኖሪያ»):",
          "acceptedAnswers": [
            "መኖሪያ",
            "መኖሪያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «መኖሪያ» ነው።"
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
    "title": "አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons) (ክፍል 1)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የንጽጽር እና የአስተያየት አገላለጾች («ይሻላል» / «ይበልጣል»)، የክርክር ነጥቦችን ማቅረብ። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (17.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (17.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (17.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (17.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (17.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (17.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (17.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (17.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u17-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (17.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (17.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (17.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (17.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (17.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (17.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (17.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (17.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 17-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (17.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (17.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (17.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (17.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u17-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «አስተያየት»):",
          "acceptedAnswers": [
            "አስተያየት",
            "አስተያየት"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «አስተያየት» ነው።"
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
    "title": "አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons) (ክፍል 2)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የንጽጽር እና የአስተያየት አገላለጾች («ይሻላል» / «ይበልጣል»)، የክርክር ነጥቦችን ማቅረብ። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (17.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (17.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (17.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (17.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (17.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (17.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (17.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (17.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u17-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (17.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (17.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (17.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (17.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (17.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (17.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (17.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (17.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 17-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (17.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (17.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (17.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (17.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u17-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «አስተያየት»):",
          "acceptedAnswers": [
            "አስተያየት",
            "አስተያየት"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «አስተያየት» ነው።"
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
    "title": "አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons) (ክፍል 3)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የንጽጽር እና የአስተያየት አገላለጾች («ይሻላል» / «ይበልጣል»)، የክርክር ነጥቦችን ማቅረብ። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (17.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (17.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (17.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (17.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (17.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (17.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (17.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (17.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u17-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (17.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (17.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (17.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (17.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (17.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (17.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (17.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (17.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 17-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (17.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (17.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (17.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (17.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u17-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «አስተያየት»):",
          "acceptedAnswers": [
            "አስተያየት",
            "አስተያየት"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «አስተያየት» ነው።"
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
    "title": "አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons) (ክፍል 4)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የንጽጽር እና የአስተያየት አገላለጾች («ይሻላል» / «ይበልጣል»)، የክርክር ነጥቦችን ማቅረብ። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (17.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (17.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (17.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (17.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (17.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (17.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (17.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (17.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u17-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (17.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (17.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (17.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (17.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (17.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (17.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (17.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (17.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 17-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (17.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (17.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (17.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (17.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u17-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «አስተያየት»):",
          "acceptedAnswers": [
            "አስተያየት",
            "አስተያየት"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «አስተያየት» ነው።"
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
    "title": "አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons) (ክፍል 5)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የንጽጽር እና የአስተያየት አገላለጾች («ይሻላል» / «ይበልጣል»)، የክርክር ነጥቦችን ማቅረብ። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (17.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (17.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (17.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (17.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (17.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (17.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (17.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (17.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u17-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (17.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (17.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (17.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (17.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«አስተያየት መስጠት እና ማወዳደር (Opinions & Comparisons)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (17.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (17.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (17.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (17.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 17-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (17.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (17.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (17.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (17.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u17-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «አስተያየት»):",
          "acceptedAnswers": [
            "አስተያየት",
            "አስተያየት"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «አስተያየት» ነው።"
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
    "title": "ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology) (ክፍል 1)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተሻጋሪና ተሻጋሪ ያልሆኑ ግሶች፣ አስደራጊና ተደራጊ የግስ ክፍሎች። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (18.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (18.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (18.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (18.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (18.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (18.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (18.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (18.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u18-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (18.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (18.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (18.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (18.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (18.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (18.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (18.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (18.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 18-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (18.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (18.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (18.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (18.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u18-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ውስብስብ»):",
          "acceptedAnswers": [
            "ውስብስብ",
            "ውስብስብ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ውስብስብ» ነው።"
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
    "title": "ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology) (ክፍል 2)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተሻጋሪና ተሻጋሪ ያልሆኑ ግሶች፣ አስደራጊና ተደራጊ የግስ ክፍሎች። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (18.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (18.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (18.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (18.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (18.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (18.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (18.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (18.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u18-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (18.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (18.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (18.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (18.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (18.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (18.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (18.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (18.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 18-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (18.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (18.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (18.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (18.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u18-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ውስብስብ»):",
          "acceptedAnswers": [
            "ውስብስብ",
            "ውስብስብ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ውስብስብ» ነው።"
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
    "title": "ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology) (ክፍል 3)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተሻጋሪና ተሻጋሪ ያልሆኑ ግሶች፣ አስደራጊና ተደራጊ የግስ ክፍሎች። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (18.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (18.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (18.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (18.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (18.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (18.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (18.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (18.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u18-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (18.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (18.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (18.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (18.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (18.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (18.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (18.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (18.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 18-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (18.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (18.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (18.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (18.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u18-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ውስብስብ»):",
          "acceptedAnswers": [
            "ውስብስብ",
            "ውስብስብ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ውስብስብ» ነው።"
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
    "title": "ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology) (ክፍል 4)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተሻጋሪና ተሻጋሪ ያልሆኑ ግሶች፣ አስደራጊና ተደራጊ የግስ ክፍሎች። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (18.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (18.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (18.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (18.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (18.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (18.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (18.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (18.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u18-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (18.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (18.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (18.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (18.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (18.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (18.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (18.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (18.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 18-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (18.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (18.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (18.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (18.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u18-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ውስብስብ»):",
          "acceptedAnswers": [
            "ውስብስብ",
            "ውስብስብ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ውስብስብ» ነው።"
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
    "title": "ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology) (ክፍል 5)",
    "level": "B1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተሻጋሪና ተሻጋሪ ያልሆኑ ግሶች፣ አስደራጊና ተደራጊ የግስ ክፍሎች። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (18.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (18.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (18.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (18.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (18.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (18.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (18.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (18.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u18-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (18.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (18.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (18.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (18.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ውስብስብ የግስ ዓይነቶች እና እርባታ (Complex Verb Morphology)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (18.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (18.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (18.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (18.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 18-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (18.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (18.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (18.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (18.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u18-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ውስብስብ»):",
          "acceptedAnswers": [
            "ውስብስብ",
            "ውስብስብ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ውስብስብ» ነው።"
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
    "title": "ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals) (ክፍል 1)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: እውነታዊ እና ምናባዊ ሁኔታዎች («ቢ...» / «ቢሆን ኖሮ»)، ውጤትና ምክንያት ማዛመድ። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (19.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (19.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (19.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (19.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (19.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (19.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (19.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (19.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u19-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (19.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (19.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (19.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (19.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (19.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (19.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (19.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (19.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 19-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (19.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (19.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (19.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (19.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u19-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ሁኔታዊ»):",
          "acceptedAnswers": [
            "ሁኔታዊ",
            "ሁኔታዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ሁኔታዊ» ነው።"
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
    "title": "ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals) (ክፍል 2)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: እውነታዊ እና ምናባዊ ሁኔታዎች («ቢ...» / «ቢሆን ኖሮ»)، ውጤትና ምክንያት ማዛመድ። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (19.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (19.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (19.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (19.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (19.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (19.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (19.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (19.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u19-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (19.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (19.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (19.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (19.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (19.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (19.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (19.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (19.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 19-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (19.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (19.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (19.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (19.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u19-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ሁኔታዊ»):",
          "acceptedAnswers": [
            "ሁኔታዊ",
            "ሁኔታዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ሁኔታዊ» ነው።"
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
    "title": "ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals) (ክፍል 3)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: እውነታዊ እና ምናባዊ ሁኔታዎች («ቢ...» / «ቢሆን ኖሮ»)، ውጤትና ምክንያት ማዛመድ። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (19.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (19.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (19.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (19.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (19.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (19.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (19.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (19.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u19-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (19.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (19.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (19.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (19.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (19.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (19.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (19.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (19.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 19-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (19.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (19.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (19.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (19.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u19-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ሁኔታዊ»):",
          "acceptedAnswers": [
            "ሁኔታዊ",
            "ሁኔታዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ሁኔታዊ» ነው።"
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
    "title": "ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals) (ክፍል 4)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: እውነታዊ እና ምናባዊ ሁኔታዎች («ቢ...» / «ቢሆን ኖሮ»)، ውጤትና ምክንያት ማዛመድ። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (19.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (19.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (19.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (19.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (19.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (19.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (19.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (19.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u19-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (19.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (19.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (19.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (19.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (19.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (19.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (19.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (19.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 19-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (19.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (19.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (19.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (19.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u19-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ሁኔታዊ»):",
          "acceptedAnswers": [
            "ሁኔታዊ",
            "ሁኔታዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ሁኔታዊ» ነው።"
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
    "title": "ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals) (ክፍል 5)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: እውነታዊ እና ምናባዊ ሁኔታዎች («ቢ...» / «ቢሆን ኖሮ»)، ውጤትና ምክንያት ማዛመድ። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (19.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (19.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (19.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (19.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (19.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (19.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (19.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (19.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u19-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (19.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (19.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (19.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (19.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ሁኔታዊ አረፍተ ነገሮች (Conditionals & Hypotheticals)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (19.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (19.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (19.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (19.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 19-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (19.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (19.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (19.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (19.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u19-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ሁኔታዊ»):",
          "acceptedAnswers": [
            "ሁኔታዊ",
            "ሁኔታዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ሁኔታዊ» ነው።"
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
    "title": "ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice) (ክፍል 1)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተገብሮ ግስ አወቃቀር (ተ- ቅጥያ)، በዜና እና በጽሑፍ ውስጥ ድርጊትን ማጉላት። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (20.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (20.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (20.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (20.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (20.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (20.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (20.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (20.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u20-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (20.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (20.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (20.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (20.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (20.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (20.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (20.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (20.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 20-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (20.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (20.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (20.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (20.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u20-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ተገብሮ»):",
          "acceptedAnswers": [
            "ተገብሮ",
            "ተገብሮ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ተገብሮ» ነው።"
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
    "title": "ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice) (ክፍል 2)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተገብሮ ግስ አወቃቀር (ተ- ቅጥያ)، በዜና እና በጽሑፍ ውስጥ ድርጊትን ማጉላት። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (20.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (20.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (20.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (20.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (20.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (20.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (20.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (20.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u20-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (20.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (20.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (20.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (20.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (20.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (20.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (20.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (20.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 20-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (20.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (20.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (20.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (20.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u20-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ተገብሮ»):",
          "acceptedAnswers": [
            "ተገብሮ",
            "ተገብሮ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ተገብሮ» ነው።"
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
    "title": "ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice) (ክፍል 3)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተገብሮ ግስ አወቃቀር (ተ- ቅጥያ)، በዜና እና በጽሑፍ ውስጥ ድርጊትን ማጉላት። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (20.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (20.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (20.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (20.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (20.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (20.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (20.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (20.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u20-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (20.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (20.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (20.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (20.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (20.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (20.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (20.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (20.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 20-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (20.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (20.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (20.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (20.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u20-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ተገብሮ»):",
          "acceptedAnswers": [
            "ተገብሮ",
            "ተገብሮ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ተገብሮ» ነው።"
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
    "title": "ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice) (ክፍል 4)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተገብሮ ግስ አወቃቀር (ተ- ቅጥያ)، በዜና እና በጽሑፍ ውስጥ ድርጊትን ማጉላት። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (20.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (20.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (20.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (20.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (20.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (20.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (20.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (20.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u20-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (20.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (20.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (20.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (20.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (20.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (20.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (20.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (20.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 20-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (20.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (20.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (20.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (20.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u20-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ተገብሮ»):",
          "acceptedAnswers": [
            "ተገብሮ",
            "ተገብሮ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ተገብሮ» ነው።"
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
    "title": "ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice) (ክፍል 5)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተገብሮ ግስ አወቃቀር (ተ- ቅጥያ)، በዜና እና በጽሑፍ ውስጥ ድርጊትን ማጉላት። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (20.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (20.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (20.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (20.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (20.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (20.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (20.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (20.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u20-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (20.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (20.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (20.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (20.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ተገብሮ ግስ እና ድርጊት ፈጻሚ (Passive Voice)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (20.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (20.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (20.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (20.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 20-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (20.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (20.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (20.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (20.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u20-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ተገብሮ»):",
          "acceptedAnswers": [
            "ተገብሮ",
            "ተገብሮ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ተገብሮ» ነው።"
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
    "title": "ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions) (ክፍል 1)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የጊዜ፣ የቦታ እና የሁኔታ ተውሳከ ግሶች፣ የተወሳሰቡ አረፍተ ነገሮች ትስስር። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (21.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (21.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (21.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (21.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (21.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (21.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (21.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (21.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u21-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (21.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (21.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (21.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (21.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (21.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (21.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (21.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (21.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 21-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (21.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (21.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (21.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (21.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u21-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ተውሳከ»):",
          "acceptedAnswers": [
            "ተውሳከ",
            "ተውሳከ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ተውሳከ» ነው።"
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
    "title": "ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions) (ክፍል 2)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የጊዜ፣ የቦታ እና የሁኔታ ተውሳከ ግሶች፣ የተወሳሰቡ አረፍተ ነገሮች ትስስር። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (21.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (21.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (21.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (21.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (21.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (21.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (21.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (21.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u21-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (21.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (21.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (21.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (21.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (21.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (21.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (21.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (21.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 21-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (21.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (21.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (21.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (21.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u21-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ተውሳከ»):",
          "acceptedAnswers": [
            "ተውሳከ",
            "ተውሳከ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ተውሳከ» ነው።"
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
    "title": "ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions) (ክፍል 3)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የጊዜ፣ የቦታ እና የሁኔታ ተውሳከ ግሶች፣ የተወሳሰቡ አረፍተ ነገሮች ትስስር። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (21.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (21.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (21.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (21.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (21.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (21.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (21.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (21.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u21-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (21.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (21.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (21.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (21.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (21.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (21.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (21.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (21.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 21-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (21.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (21.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (21.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (21.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u21-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ተውሳከ»):",
          "acceptedAnswers": [
            "ተውሳከ",
            "ተውሳከ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ተውሳከ» ነው።"
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
    "title": "ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions) (ክፍል 4)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የጊዜ፣ የቦታ እና የሁኔታ ተውሳከ ግሶች፣ የተወሳሰቡ አረፍተ ነገሮች ትስስር። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (21.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (21.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (21.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (21.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (21.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (21.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (21.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (21.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u21-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (21.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (21.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (21.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (21.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (21.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (21.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (21.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (21.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 21-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (21.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (21.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (21.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (21.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u21-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ተውሳከ»):",
          "acceptedAnswers": [
            "ተውሳከ",
            "ተውሳከ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ተውሳከ» ነው።"
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
    "title": "ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions) (ክፍል 5)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የጊዜ፣ የቦታ እና የሁኔታ ተውሳከ ግሶች፣ የተወሳሰቡ አረፍተ ነገሮች ትስስር። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (21.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (21.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (21.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (21.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (21.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (21.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (21.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (21.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u21-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (21.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (21.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (21.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (21.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ተውሳከ ግሶች እና የአያያዥ ቃላት (Adverbs & Conjunctions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (21.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (21.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (21.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (21.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 21-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (21.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (21.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (21.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (21.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u21-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ተውሳከ»):",
          "acceptedAnswers": [
            "ተውሳከ",
            "ተውሳከ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ተውሳከ» ነው።"
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
    "title": "አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions) (ክፍል 1)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የጊዜ አሉታዊ ቅርጾች (አል...ም)، ልዩ የንግግር ዘይቤዎች። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (22.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (22.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (22.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (22.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (22.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (22.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (22.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (22.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u22-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (22.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (22.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (22.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (22.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (22.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (22.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (22.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (22.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 22-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (22.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (22.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (22.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (22.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u22-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «አሉታዊ»):",
          "acceptedAnswers": [
            "አሉታዊ",
            "አሉታዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «አሉታዊ» ነው።"
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
    "title": "አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions) (ክፍል 2)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የጊዜ አሉታዊ ቅርጾች (አል...ም)، ልዩ የንግግር ዘይቤዎች። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (22.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (22.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (22.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (22.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (22.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (22.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (22.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (22.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u22-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (22.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (22.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (22.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (22.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (22.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (22.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (22.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (22.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 22-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (22.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (22.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (22.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (22.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u22-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «አሉታዊ»):",
          "acceptedAnswers": [
            "አሉታዊ",
            "አሉታዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «አሉታዊ» ነው።"
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
    "title": "አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions) (ክፍል 3)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የጊዜ አሉታዊ ቅርጾች (አል...ም)، ልዩ የንግግር ዘይቤዎች። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (22.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (22.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (22.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (22.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (22.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (22.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (22.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (22.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u22-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (22.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (22.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (22.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (22.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (22.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (22.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (22.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (22.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 22-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (22.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (22.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (22.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (22.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u22-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «አሉታዊ»):",
          "acceptedAnswers": [
            "አሉታዊ",
            "አሉታዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «አሉታዊ» ነው።"
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
    "title": "አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions) (ክፍል 4)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የጊዜ አሉታዊ ቅርጾች (አል...ም)، ልዩ የንግግር ዘይቤዎች። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (22.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (22.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (22.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (22.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (22.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (22.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (22.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (22.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u22-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (22.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (22.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (22.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (22.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (22.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (22.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (22.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (22.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 22-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (22.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (22.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (22.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (22.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u22-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «አሉታዊ»):",
          "acceptedAnswers": [
            "አሉታዊ",
            "አሉታዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «አሉታዊ» ነው።"
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
    "title": "አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions) (ክፍል 5)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የተለያዩ የጊዜ አሉታዊ ቅርጾች (አል...ም)، ልዩ የንግግር ዘይቤዎች። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (22.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (22.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (22.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (22.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (22.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (22.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (22.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (22.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u22-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (22.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (22.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (22.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (22.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«አሉታዊ አረፍተ ነገሮች እና ልዩ ዘይቤዎች (Negation & Special Constructions)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (22.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (22.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (22.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (22.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 22-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (22.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (22.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (22.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (22.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u22-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «አሉታዊ»):",
          "acceptedAnswers": [
            "አሉታዊ",
            "አሉታዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «አሉታዊ» ነው።"
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
    "title": "የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism) (ክፍል 1)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የዜና ዘገባዎች ትንተና፣ የፖለቲካ እና የኢኮኖሚ ቃላት፣ የፕሬስ ቋንቋ። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (23.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (23.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (23.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (23.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (23.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (23.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (23.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (23.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u23-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (23.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (23.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (23.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (23.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (23.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (23.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (23.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (23.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 23-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (23.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (23.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (23.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (23.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u23-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የሚዲያ»):",
          "acceptedAnswers": [
            "የሚዲያ",
            "የሚዲያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የሚዲያ» ነው።"
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
    "title": "የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism) (ክፍል 2)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የዜና ዘገባዎች ትንተና፣ የፖለቲካ እና የኢኮኖሚ ቃላት፣ የፕሬስ ቋንቋ። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (23.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (23.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (23.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (23.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (23.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (23.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (23.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (23.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u23-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (23.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (23.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (23.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (23.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (23.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (23.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (23.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (23.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 23-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (23.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (23.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (23.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (23.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u23-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የሚዲያ»):",
          "acceptedAnswers": [
            "የሚዲያ",
            "የሚዲያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የሚዲያ» ነው።"
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
    "title": "የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism) (ክፍል 3)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የዜና ዘገባዎች ትንተና፣ የፖለቲካ እና የኢኮኖሚ ቃላት፣ የፕሬስ ቋንቋ። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (23.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (23.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (23.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (23.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (23.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (23.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (23.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (23.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u23-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (23.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (23.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (23.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (23.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (23.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (23.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (23.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (23.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 23-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (23.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (23.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (23.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (23.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u23-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የሚዲያ»):",
          "acceptedAnswers": [
            "የሚዲያ",
            "የሚዲያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የሚዲያ» ነው።"
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
    "title": "የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism) (ክፍል 4)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የዜና ዘገባዎች ትንተና፣ የፖለቲካ እና የኢኮኖሚ ቃላት፣ የፕሬስ ቋንቋ። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (23.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (23.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (23.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (23.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (23.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (23.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (23.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (23.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u23-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (23.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (23.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (23.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (23.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (23.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (23.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (23.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (23.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 23-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (23.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (23.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (23.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (23.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u23-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የሚዲያ»):",
          "acceptedAnswers": [
            "የሚዲያ",
            "የሚዲያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የሚዲያ» ነው።"
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
    "title": "የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism) (ክፍል 5)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የዜና ዘገባዎች ትንተና፣ የፖለቲካ እና የኢኮኖሚ ቃላት፣ የፕሬስ ቋንቋ። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (23.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (23.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (23.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (23.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (23.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (23.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (23.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (23.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u23-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (23.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (23.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (23.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (23.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የሚዲያ እና የጋዜጠኝነት ቋንቋ (Media & Journalism)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (23.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (23.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (23.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (23.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 23-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (23.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (23.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (23.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (23.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u23-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የሚዲያ»):",
          "acceptedAnswers": [
            "የሚዲያ",
            "የሚዲያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የሚዲያ» ነው።"
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
    "title": "ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence) (ክፍል 1)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የመንግሥትና የድርጅት ደብዳቤዎች አጻጻፍ፣ ማመልከቻና ስምምነቶች ማዘጋጀት። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (24.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (24.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (24.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (24.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (24.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (24.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (24.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (24.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u24-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (24.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (24.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (24.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (24.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (24.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (24.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (24.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (24.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 24-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (24.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (24.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (24.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (24.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u24-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ኦፊሴላዊ»):",
          "acceptedAnswers": [
            "ኦፊሴላዊ",
            "ኦፊሴላዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ኦፊሴላዊ» ነው።"
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
    "title": "ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence) (ክፍል 2)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የመንግሥትና የድርጅት ደብዳቤዎች አጻጻፍ፣ ማመልከቻና ስምምነቶች ማዘጋጀት። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (24.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (24.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (24.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (24.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (24.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (24.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (24.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (24.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u24-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (24.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (24.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (24.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (24.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (24.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (24.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (24.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (24.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 24-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (24.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (24.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (24.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (24.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u24-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ኦፊሴላዊ»):",
          "acceptedAnswers": [
            "ኦፊሴላዊ",
            "ኦፊሴላዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ኦፊሴላዊ» ነው።"
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
    "title": "ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence) (ክፍል 3)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የመንግሥትና የድርጅት ደብዳቤዎች አጻጻፍ፣ ማመልከቻና ስምምነቶች ማዘጋጀት። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (24.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (24.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (24.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (24.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (24.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (24.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (24.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (24.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u24-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (24.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (24.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (24.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (24.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (24.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (24.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (24.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (24.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 24-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (24.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (24.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (24.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (24.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u24-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ኦፊሴላዊ»):",
          "acceptedAnswers": [
            "ኦፊሴላዊ",
            "ኦፊሴላዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ኦፊሴላዊ» ነው።"
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
    "title": "ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence) (ክፍል 4)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የመንግሥትና የድርጅት ደብዳቤዎች አጻጻፍ፣ ማመልከቻና ስምምነቶች ማዘጋጀት። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (24.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (24.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (24.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (24.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (24.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (24.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (24.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (24.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u24-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (24.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (24.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (24.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (24.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (24.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (24.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (24.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (24.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 24-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (24.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (24.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (24.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (24.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u24-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ኦፊሴላዊ»):",
          "acceptedAnswers": [
            "ኦፊሴላዊ",
            "ኦፊሴላዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ኦፊሴላዊ» ነው።"
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
    "title": "ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence) (ክፍል 5)",
    "level": "B2",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የመንግሥትና የድርጅት ደብዳቤዎች አጻጻፍ፣ ማመልከቻና ስምምነቶች ማዘጋጀት። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (24.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (24.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (24.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (24.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (24.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (24.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (24.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (24.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u24-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (24.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (24.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (24.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (24.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ኦፊሴላዊ ደብዳቤዎች እና አስተዳደራዊ ቋንቋ (Official Correspondence)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (24.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (24.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (24.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (24.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 24-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (24.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (24.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (24.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (24.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u24-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ኦፊሴላዊ»):",
          "acceptedAnswers": [
            "ኦፊሴላዊ",
            "ኦፊሴላዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ኦፊሴላዊ» ነው።"
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
    "title": "የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature) (ክፍል 1)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የግዕዝ እና የቀዳማዊ አማርኛ ሥነ-ጽሑፍ፣ የከበደ ሚካኤል እና የጸጋዬ ገብረመድህን ድርሰቶች። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (25.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (25.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (25.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (25.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (25.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (25.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (25.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (25.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u25-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (25.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (25.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (25.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (25.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (25.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (25.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (25.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (25.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 25-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (25.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (25.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (25.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (25.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u25-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature) (ክፍል 2)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የግዕዝ እና የቀዳማዊ አማርኛ ሥነ-ጽሑፍ፣ የከበደ ሚካኤል እና የጸጋዬ ገብረመድህን ድርሰቶች። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (25.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (25.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (25.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (25.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (25.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (25.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (25.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (25.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u25-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (25.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (25.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (25.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (25.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (25.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (25.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (25.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (25.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 25-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (25.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (25.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (25.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (25.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u25-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature) (ክፍል 3)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የግዕዝ እና የቀዳማዊ አማርኛ ሥነ-ጽሑፍ፣ የከበደ ሚካኤል እና የጸጋዬ ገብረመድህን ድርሰቶች። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (25.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (25.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (25.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (25.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (25.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (25.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (25.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (25.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u25-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (25.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (25.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (25.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (25.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (25.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (25.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (25.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (25.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 25-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (25.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (25.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (25.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (25.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u25-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature) (ክፍል 4)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የግዕዝ እና የቀዳማዊ አማርኛ ሥነ-ጽሑፍ፣ የከበደ ሚካኤል እና የጸጋዬ ገብረመድህን ድርሰቶች። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (25.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (25.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (25.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (25.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (25.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (25.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (25.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (25.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u25-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (25.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (25.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (25.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (25.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (25.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (25.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (25.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (25.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 25-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (25.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (25.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (25.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (25.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u25-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature) (ክፍል 5)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የግዕዝ እና የቀዳማዊ አማርኛ ሥነ-ጽሑፍ፣ የከበደ ሚካኤል እና የጸጋዬ ገብረመድህን ድርሰቶች። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (25.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (25.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (25.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (25.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (25.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (25.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (25.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (25.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u25-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (25.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (25.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (25.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (25.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ አንጋፋ ሥነ-ጽሑፍ (Classical Ethiopian Literature)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (25.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (25.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (25.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (25.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 25-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (25.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (25.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (25.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (25.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u25-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy) (ክፍል 1)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሐተታ ዘርአ ያዕቆብ ምክንያታዊ ፍልስፍና፣ እውነትን በምክንያት የመመርመር ጥበብ። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (26.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (26.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (26.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (26.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (26.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (26.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (26.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (26.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u26-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (26.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (26.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (26.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (26.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (26.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (26.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (26.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (26.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 26-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (26.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (26.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (26.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (26.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u26-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy) (ክፍል 2)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሐተታ ዘርአ ያዕቆብ ምክንያታዊ ፍልስፍና፣ እውነትን በምክንያት የመመርመር ጥበብ። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (26.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (26.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (26.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (26.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (26.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (26.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (26.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (26.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u26-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (26.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (26.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (26.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (26.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (26.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (26.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (26.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (26.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 26-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (26.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (26.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (26.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (26.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u26-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy) (ክፍል 3)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሐተታ ዘርአ ያዕቆብ ምክንያታዊ ፍልስፍና፣ እውነትን በምክንያት የመመርመር ጥበብ። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (26.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (26.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (26.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (26.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (26.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (26.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (26.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (26.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u26-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (26.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (26.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (26.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (26.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (26.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (26.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (26.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (26.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 26-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (26.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (26.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (26.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (26.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u26-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy) (ክፍል 4)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሐተታ ዘርአ ያዕቆብ ምክንያታዊ ፍልስፍና፣ እውነትን በምክንያት የመመርመር ጥበብ። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (26.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (26.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (26.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (26.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (26.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (26.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (26.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (26.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u26-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (26.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (26.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (26.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (26.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (26.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (26.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (26.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (26.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 26-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (26.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (26.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (26.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (26.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u26-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy) (ክፍል 5)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የሐተታ ዘርአ ያዕቆብ ምክንያታዊ ፍልስፍና፣ እውነትን በምክንያት የመመርመር ጥበብ። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (26.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (26.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (26.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (26.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (26.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (26.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (26.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (26.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u26-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (26.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (26.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (26.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (26.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ ፍልስፍና እና የዘርአ ያዕቆብ አስተሳሰብ (Ethiopian Philosophy)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (26.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (26.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (26.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (26.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 26-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (26.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (26.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (26.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (26.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u26-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet) (ክፍል 1)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: አራቱ ባህላዊ ቅኝቶች (አንቺሆዬ፣ ትዝታ፣ ባቲ፣ አምባሰል) እና የቅኔ ጥበብ። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (27.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (27.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (27.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (27.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (27.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (27.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (27.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (27.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u27-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (27.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (27.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (27.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (27.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (27.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (27.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (27.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (27.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 27-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (27.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (27.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (27.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (27.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u27-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ባህላዊ»):",
          "acceptedAnswers": [
            "ባህላዊ",
            "ባህላዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ባህላዊ» ነው።"
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
    "title": "ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet) (ክፍል 2)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: አራቱ ባህላዊ ቅኝቶች (አንቺሆዬ፣ ትዝታ፣ ባቲ፣ አምባሰል) እና የቅኔ ጥበብ። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (27.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (27.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (27.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (27.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (27.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (27.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (27.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (27.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u27-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (27.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (27.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (27.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (27.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (27.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (27.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (27.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (27.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 27-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (27.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (27.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (27.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (27.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u27-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ባህላዊ»):",
          "acceptedAnswers": [
            "ባህላዊ",
            "ባህላዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ባህላዊ» ነው።"
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
    "title": "ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet) (ክፍል 3)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: አራቱ ባህላዊ ቅኝቶች (አንቺሆዬ፣ ትዝታ፣ ባቲ፣ አምባሰል) እና የቅኔ ጥበብ። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (27.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (27.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (27.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (27.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (27.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (27.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (27.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (27.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u27-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (27.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (27.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (27.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (27.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (27.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (27.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (27.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (27.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 27-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (27.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (27.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (27.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (27.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u27-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ባህላዊ»):",
          "acceptedAnswers": [
            "ባህላዊ",
            "ባህላዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ባህላዊ» ነው።"
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
    "title": "ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet) (ክፍል 4)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: አራቱ ባህላዊ ቅኝቶች (አንቺሆዬ፣ ትዝታ፣ ባቲ፣ አምባሰል) እና የቅኔ ጥበብ። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (27.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (27.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (27.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (27.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (27.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (27.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (27.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (27.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u27-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (27.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (27.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (27.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (27.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (27.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (27.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (27.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (27.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 27-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (27.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (27.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (27.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (27.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u27-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ባህላዊ»):",
          "acceptedAnswers": [
            "ባህላዊ",
            "ባህላዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ባህላዊ» ነው።"
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
    "title": "ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet) (ክፍል 5)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: አራቱ ባህላዊ ቅኝቶች (አንቺሆዬ፣ ትዝታ፣ ባቲ፣ አምባሰል) እና የቅኔ ጥበብ። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (27.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (27.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (27.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (27.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (27.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (27.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (27.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (27.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u27-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (27.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (27.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (27.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (27.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«ባህላዊ የሙዚቃ ቅኝቶች እና ዜማ (Ethiopian Music & Qenet)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (27.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (27.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (27.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (27.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 27-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (27.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (27.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (27.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (27.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u27-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «ባህላዊ»):",
          "acceptedAnswers": [
            "ባህላዊ",
            "ባህላዊ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «ባህላዊ» ነው።"
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
    "title": "የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture) (ክፍል 1)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የጥንታዊ አብያተ ክርስቲያናት ሥዕሎች፣ የድንጋይ ውቅር ህንፃዎች ጥበብ። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (28.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (28.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (28.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (28.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (28.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (28.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (28.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (28.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u28-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (28.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (28.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (28.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (28.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (28.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (28.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (28.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (28.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 28-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (28.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (28.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (28.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (28.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u28-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture) (ክፍል 2)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የጥንታዊ አብያተ ክርስቲያናት ሥዕሎች፣ የድንጋይ ውቅር ህንፃዎች ጥበብ። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (28.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (28.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (28.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (28.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (28.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (28.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (28.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (28.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u28-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (28.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (28.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (28.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (28.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (28.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (28.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (28.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (28.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 28-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (28.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (28.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (28.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (28.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u28-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture) (ክፍል 3)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የጥንታዊ አብያተ ክርስቲያናት ሥዕሎች፣ የድንጋይ ውቅር ህንፃዎች ጥበብ። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (28.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (28.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (28.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (28.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (28.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (28.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (28.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (28.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u28-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (28.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (28.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (28.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (28.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (28.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (28.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (28.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (28.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 28-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (28.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (28.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (28.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (28.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u28-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture) (ክፍል 4)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የጥንታዊ አብያተ ክርስቲያናት ሥዕሎች፣ የድንጋይ ውቅር ህንፃዎች ጥበብ። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (28.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (28.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (28.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (28.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (28.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (28.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (28.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (28.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u28-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (28.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (28.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (28.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (28.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (28.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (28.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (28.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (28.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 28-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (28.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (28.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (28.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (28.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u28-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture) (ክፍል 5)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የጥንታዊ አብያተ ክርስቲያናት ሥዕሎች፣ የድንጋይ ውቅር ህንፃዎች ጥበብ። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (28.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (28.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (28.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (28.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (28.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (28.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (28.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (28.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u28-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (28.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (28.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (28.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (28.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የኢትዮጵያ ባህላዊ ሥነ-ጥበብ እና ሥነ-ህንፃ (Art & Architecture)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (28.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (28.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (28.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (28.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 28-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (28.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (28.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (28.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (28.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u28-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የኢትዮጵያ»):",
          "acceptedAnswers": [
            "የኢትዮጵያ",
            "የኢትዮጵያ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የኢትዮጵያ» ነው።"
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
    "title": "የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science) (ክፍል 1)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የደን ጥበቃ፣ የውሃ ሀብት አስተዳደር እና የዘላቂ ልማት ውይይቶች። (ክፍል 1)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (29.1.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (29.1.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (29.1.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (29.1.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» (ክፍል 1) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (29.1.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (29.1.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (29.1.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (29.1.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u29-l1) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (29.1.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (29.1.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (29.1.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (29.1.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (29.1.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (29.1.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (29.1.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (29.1.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 29-1):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (29.1.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (29.1.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (29.1.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (29.1.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u29-l1) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የአካባቢ»):",
          "acceptedAnswers": [
            "የአካባቢ",
            "የአካባቢ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የአካባቢ» ነው።"
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
    "title": "የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science) (ክፍል 2)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የደን ጥበቃ፣ የውሃ ሀብት አስተዳደር እና የዘላቂ ልማት ውይይቶች። (ክፍል 2)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (29.2.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (29.2.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (29.2.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (29.2.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» (ክፍል 2) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (29.2.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (29.2.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (29.2.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (29.2.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u29-l2) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (29.2.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (29.2.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (29.2.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (29.2.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (29.2.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (29.2.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (29.2.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (29.2.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 29-2):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (29.2.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (29.2.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (29.2.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (29.2.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u29-l2) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የአካባቢ»):",
          "acceptedAnswers": [
            "የአካባቢ",
            "የአካባቢ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የአካባቢ» ነው።"
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
    "title": "የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science) (ክፍል 3)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የደን ጥበቃ፣ የውሃ ሀብት አስተዳደር እና የዘላቂ ልማት ውይይቶች። (ክፍል 3)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (29.3.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (29.3.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (29.3.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (29.3.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» (ክፍል 3) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (29.3.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (29.3.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (29.3.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (29.3.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u29-l3) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (29.3.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (29.3.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (29.3.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (29.3.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (29.3.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (29.3.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (29.3.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (29.3.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 29-3):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (29.3.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (29.3.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (29.3.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (29.3.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u29-l3) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የአካባቢ»):",
          "acceptedAnswers": [
            "የአካባቢ",
            "የአካባቢ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የአካባቢ» ነው።"
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
    "title": "የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science) (ክፍል 4)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የደን ጥበቃ፣ የውሃ ሀብት አስተዳደር እና የዘላቂ ልማት ውይይቶች። (ክፍል 4)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (29.4.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (29.4.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (29.4.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (29.4.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» (ክፍል 4) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (29.4.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (29.4.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (29.4.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (29.4.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u29-l4) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (29.4.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (29.4.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (29.4.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (29.4.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (29.4.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (29.4.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (29.4.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (29.4.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 29-4):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (29.4.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (29.4.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (29.4.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (29.4.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u29-l4) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የአካባቢ»):",
          "acceptedAnswers": [
            "የአካባቢ",
            "የአካባቢ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የአካባቢ» ነው።"
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
    "title": "የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science) (ክፍል 5)",
    "level": "C1",
    "objective": "የተሟላ ዕውቀትና ተግባራዊ ክህሎት ማዳበር በ: የደን ጥበቃ፣ የውሃ ሀብት አስተዳደር እና የዘላቂ ልማት ውይይቶች። (ክፍል 5)።",
    "presentation": {
      "explanation": "",
      "examples": [
        {
          "target": "መምህሩ የ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (29.5.1)።",
          "reading": "Memhiru ye-timihirtun wana wana sewasewawi higoch le-temariwochu be-gilts yasredalu.",
          "translation": "The teacher clearly and thoroughly explains the key grammatical rules of 'የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)' to the students."
        },
        {
          "target": "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (29.5.2)።",
          "reading": "Temariwochu be-akadamik adarash wist honew timihirtun betimona yiketatelalu.",
          "translation": "The students follow the lesson attentively in the academic hall and perform practical exercises."
        },
        {
          "target": "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (29.5.3)።",
          "reading": "Be-Addis Ababa Yuniversiti alem aqef mihuhran yetesatefubet tilq sayinsawi wiyiyit tekahede.",
          "translation": "A profound scientific and cultural discussion involving international scholars was held at Addis Ababa University."
        },
        {
          "target": "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (29.5.4)።",
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
          "prompt": "【የሰዋሰው ትንተና】ለ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» (ክፍል 5) ትክክለኛውን ሰዋሰዋዊ አጠቃቀም የሚያሳየው የትኛው አረፍተ ነገር ነው?",
          "options": [
            "መምህሩ የ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ዋና ዋና ሰዋሰዋዊ ህጎችን ለተማሪዎቹ በግልጽ እና በጥልቀት ያስረዳሉ (29.5.1)።",
            "የሰዋሰው ስህተት እና የባለቤትና ማሰሪያ አንቀጽ አለመጣጣም ያለበት አረፍተ ነገር (29.5.w1)",
            "የመስተዋድድ አጠቃቀም ስህተት ያለበት የተዛባ ዓረፍተ ነገር (29.5.w2)",
            "የቃላት አሰካክ ጉድለት ያለበት እና ትርጉሙ ያልተሟላ ሐረግ (29.5.w3)"
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
          "prompt": "【ተግባራዊ ልምምድ】በዚህ ትምህርት (am-u29-l5) የተማሩትን ጽንሰ-ሀሳብ በትክክል የሚተገብረውን አረፍተ ነገር ይምረጡ:",
          "options": [
            "ተማሪዎቹ በአካዳሚክ አዳራሽ ውስጥ ሆነው ትምህርቱን በጥሞና ይከታተላሉ እንዲሁም ተግባራዊ ልምምዶችን ያከናውናሉ (29.5.2)።",
            "የግስ እርባታ ስህተት ያለበት ያልተሟላ አረፍተ ነገር (29.5.x1)",
            "የአያያዥ ቃላት አጠቃቀም የተዛባበት መዋቅር (29.5.x2)",
            "ተገቢ ያልሆነ የቃላት ቅደም ተከተል የተከተለ አረፍተ ነገር (29.5.x3)"
          ],
          "answerIndex": 0,
          "explanation": "ይህ አረፍተ ነገር ትክክለኛውን ሰዋሰዋዊ ግንኙነት ያሳያል።"
        },
        {
          "prompt": "【የአውድ ምርጫ】ለ«የአካባቢ ጥበቃ እና የተፈጥሮ ሀብት (Environmental Science)» ትክክለኛውን ተግባቦታዊ መልእክት የሚያስተላልፈው የትኛው ነው?",
          "options": [
            "በአዲስ አበባ ዩኒቨርሲቲ ዓለም አቀፍ ምሁራን የተሳተፉበት ጥልቅ ሳይንሳዊ እና ባህላዊ ውይይት ተካሄደ (29.5.3)።",
            "ትርጉሙ ግልጽ ያልሆነ እና የተዛባ አገላለጽ (29.5.y1)",
            "የፊደል አጻጻፍ እና የድምፅ ስህተት ያለበት ዓረፍተ ነገር (29.5.y2)",
            "የማህበራዊ ጨዋነትን ያላሟላ የተሳሳተ አነጋገር (29.5.y3)"
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
          "prompt": "【የብቃት ማረጋገጫ】የዚህን ትምህርት ዕውቀት ለመገምገም ትክክለኛ ምሳሌ የሚሆነውን ይምረጡ (ፈተና 29-5):",
          "options": [
            "ተማሪዎች የትምህርቱን ይዘት በሚገባ በመረዳት የፈተና ጥያቄዎችን ያለ ምንም ስህተት በትክክል መለሱ (29.5.4)።",
            "የጊዜ እና የተግባር አለመጣጣም ስህተት ያለበት አረፍተ ነገር (29.5.z1)",
            "የተሳሳተ የተውላጠ ስም ቅጥያ የተጨመረበት ቃል (29.5.z2)",
            "የሰዋሰው ህግን ያልጠበቀ የተዛባ ጽሑፍ (29.5.z3)"
          ],
          "answerIndex": 0,
          "explanation": "የተመረጠው አረፍተ ነገር ሙሉ እና እንከን የለሽ ነው።"
        },
        {
          "type": "typed-recall",
          "prompt": "የዚህን ትምህርት (am-u29-l5) ቁልፍ ቃል በግዕዝ ፊደላት ያስገቡ (ለምሳሌ: «የአካባቢ»):",
          "acceptedAnswers": [
            "የአካባቢ",
            "የአካባቢ"
          ],
          "explanation": "ትክክለኛው ቁልፍ ቃል «የአካባቢ» ነው።"
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
