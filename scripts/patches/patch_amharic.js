const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../../data/curricula/amharic.js');
const curr = require(filePath);

curr.lessons['am-u1-l1'] = {
  id: 'am-u1-l1',
  subject: 'amharic',
  unit: 1,
  lessonNumber: 1,
  title: 'የፊደል መዋቅር እና የመጀመሪያ ቤተሰቦች (The Fidel Abugida: 7 Orders & Families ሀ, ለ, መ)',
  level: 'A1',
  objective: 'Master the ancient Ge\'ez Fidel abugida system, the 7 vocalic orders (-ä, -u, -i, -a, -e, -ə, -o), the first three consonant families (ሀ, ለ, መ), and read authentic Amharic words.',
  presentation: {
    explanation: 'የግዕዝ ፊደል (Ge\'ez Fidel) የአቡጊዳ (Abugida) የጽሕፈት ሥርዓት ነው። እያንዳንዱ መሠረታዊ ፊደል 7 የድምፅ ክፍሎች (Orders) አሉት።\n\n1. የሀ ቤተሰብ (Hä Family):\n- ግዕዝ (1st -ä): **ሀ** [hä]\n- ካዕብ (2nd -u): **ሁ** [hu]\n- ሣልስ (3rd -i): **ሂ** [hi]\n- ራብዕ (4th -a): **ሃ** [ha]\n- ኃምስ (5th -e): **ሄ** [he]\n- ሳድስ (6th -ə): **ህ** [h]\n- ሳብዕ (7th -o): **ሆ** [ho]\n\n2. መሠረታዊ የፊደላት ሠንጠረዥ፦\n- የለ ቤተሰብ፦ **ለ ሉ ሊ ላ ሌ ል ሎ**\n- የመ ቤተሰብ፦ **መ ሙ ሚ ማ ሜ ም ሞ**\n- የሠ ቤተሰብ፦ **ሠ ሡ ሢ ሣ ሤ ሥ ሦ**\n- የረ ቤተሰብ፦ **ረ ሩ ሪ ራ ሬ ር ሮ**\n- የሰ ቤተሰብ፦ **ሰ ሱ ሲ ሳ ሴ ስ ሶ**\n- የሸ ቤተሰብ፦ **ሸ ሹ ሺ ሻ ሼ ሽ ሾ**\n- የቀ ቤተሰብ፦ **ቀ ቁ ቂ ቃ ቄ ቅ ቆ**\n- የበ ቤተሰብ፦ **በ ቡ ቢ ባ ቤ ብ ቦ**\n- የተ ቤተሰብ፦ **ተ ቱ ቲ ታ ቴ ት ቶ**\n- የቸ ቤተሰብ፦ **ቸ ቹ ቺ ቻ ቼ ች ቾ**\n\n3. የመጀመሪያ ቃላት (First Words):\n- **ሎሚ** [lomi] (lemon)\n- **ላም** [lam] (cow)\n- **ሆድ** [hod] (stomach)\n- **ሰው** [säw] (person)\n- **ውሃ** [wəha] (water)\n- **ሀገር** [hagär] (country)',
    examples: [
      { target: 'ሎሚ', reading: 'lomi', translation: 'lemon (ሎ [lo] + ሚ [mi])' },
      { target: 'ላም', reading: 'lam', translation: 'cow (ላ [la] + ም [m])' },
      { target: 'ሰው', reading: 'säw', translation: 'person / human (ሰ [sä] + ው [w])' },
      { target: 'ውሃ', reading: 'wəha', translation: 'water (ው [wə] + ሃ [ha])' }
    ],
    mnemonics: [
      'In Fidel: 1st (ግዕዝ -ä), 2nd (ካዕብ -u), 3rd (ሣልስ -i), 4th (ራብዕ -a), 5th (ኃምስ -e), 6th (ሳድስ -ə), 7th (ሳብዕ -o)!'
    ],
    culturalNotes: [
      'The Ge\'ez Fidel script (ግዕዝ ፊደል) is the ancient indigenous writing system of Ethiopia.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'In the Ge\'ez Fidel abugida system, what vowel sound is inherent in the 1st Order (ግዕዝ - Ge\'ez base form)?',
        options: [
          'The short central vowel [-ä] (እንደ ሀ / hä, ለ / lä, መ / mä)',
          'The long vowel [-u]',
          'The vowel [-i]',
          'The vowel [-o]'
        ],
        answerIndex: 0,
        explanation: 'The 1st order in Fidel carries the inherent vowel sound [-ä] (e.g. ሀ = hä, ለ = lä, መ = mä).'
      },
      {
        prompt: 'Which Fidel character represents the 7th Order sound [lo] in the ለ family?',
        options: [
          'ሎ (lo - 7th order ሳብዕ)',
          'ላ (la - 4th order ራብዕ)',
          'ሊ (li - 3rd order ሣልስ)',
          'ሉ (lu - 2nd order ካዕብ)'
        ],
        answerIndex: 0,
        explanation: '«ሎ» represents the 7th order [lo].'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Select the Amharic word meaning "lemon" spelled with «ሎ» [lo] and «ሚ» [mi]:',
        options: [
          'ሎሚ (lomi - lemon)',
          'ላም (lam - cow)',
          'ሰው (säw - person)',
          'ውሃ (wəha - water)'
        ],
        answerIndex: 0,
        explanation: '«ሎ» [lo] + «ሚ» [mi] = «ሎሚ» (*lomi* - lemon).'
      },
      {
        prompt: 'What modification visually marks the 2nd Order (-u) in characters like «ሉ» (lu) and «ሁ» (hu)?',
        options: [
          'A horizontal stroke attached to the right side (ካዕብ)',
          'A circle on the foot',
          'A shortened left leg',
          'No change'
        ],
        answerIndex: 0,
        explanation: 'The 2nd order is marked by a horizontal stroke attached to the right side.'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What does the Amharic word «ላም» (*lam*) mean in English?',
        options: [
          'cow (የቤት እንስሳ)',
          'lemon',
          'water',
          'person'
        ],
        answerIndex: 0,
        explanation: '«ላም» (*lam*) means "cow".'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 2-character Fidel Amharic word for "lemon" (l-o-m-i):',
        acceptedAnswers: [
          'ሎሚ'
        ],
        explanation: '«ሎ» + «ሚ» = «ሎሚ» (*lomi*).'
      }
    ]
  }
};

curr.lessons['am-u1-l2'] = {
  id: 'am-u1-l2',
  subject: 'amharic',
  unit: 1,
  lessonNumber: 2,
  title: 'ፊደላት እና ሰላምታ፡ ሰላም፣ እንደምን ነህ/ነሽ/ኖት (Fidel Families 2 & Gender Greetings)',
  level: 'A1',
  objective: 'Master Fidel consonant families (ሰ, ረ, በ, ተ, ነ, አ) and standard gender-inflected greetings (Selam, Endemen neh, Endemen nesh, Endemen not, Dehna neñ).',
  presentation: {
    explanation: 'በአማርኛ ቋንቋ ሰላምታ እንደ ተናጋሪው እና አድማጩ ፆታ እና ክብር ይለያያል።\n\n1. የተሟላ የፊደላት ሠንጠረዥ፦\n- የነ ቤተሰብ፦ **ነ ኑ ኒ ና ኔ ን ኖ**\n- የኘ ቤተሰብ፦ **ኘ ኙ ኚ ኛ ኜ ኝ ኞ**\n- የአ ቤተሰብ፦ **አ ኡ ኢ ኣ ኤ እ ኦ**\n- የከ ቤተሰብ፦ **ከ ኩ ኪ ካ ኬ ክ ኮ**\n- የወ ቤተሰብ፦ **ወ ዉ ዊ ዋ ዌ ው ዎ**\n- የዐ ቤተሰብ፦ **ዐ ዑ ዒ ዓ ዔ ዕ ዖ**\n- የዘ ቤተሰብ፦ **ዘ ዙ ዚ ዛ ዜ ዝ ዞ**\n- የዠ ቤተሰብ፦ **ዠ ዡ ዢ ዣ ዤ ዥ ዦ**\n- የየ ቤተሰብ፦ **የ ዩ ዪ ያ ዬ ይ ዮ**\n- የደ ቤተሰብ፦ **ደ ዱ ዲ ዳ ዴ ድ ዶ**\n- የጀ ቤተሰብ፦ **ጀ ጁ ጂ ጃ ጄ ጅ ጆ**\n- የገ ቤተሰብ፦ **ገ ጉ ጊ ጋ ጌ ግ ጎ**\n- የጠ ቤተሰብ፦ **ጠ ጡ ጢ ጣ ጤ ጥ ጦ**\n- የጨ ቤተሰብ፦ **ጨ ጩ ጪ ጫ ጬ ጭ ጮ**\n- የጰ ቤተሰብ፦ **ጰ ጱ ጲ ጳ ጴ ጵ ጶ**\n- የጸ ቤተሰብ፦ **ጸ ጹ ጺ ጻ ጼ ጽ ጾ**\n- የፀ ቤተሰብ፦ **ፀ ፁ ፂ ፃ ፄ ፅ ፆ**\n- የፈ ቤተሰብ፦ **ፈ ፉ ፊ ፋ ፌ ፍ ፎ**\n- የፐ ቤተሰብ፦ **ፐ ፑ ፒ ፓ ፔ ፕ ፖ**\n\n2. መሰረታዊ ሰላምታዎች፦\n- **ሰላም!** [Selam!] (Hello / Peace)\n- **እንደምን ነህ?** [Endemen neh?] (ለወንድ / to male)\n- **እንደምን ነሽ?** [Endemen nesh?] (ለሴት / to female)\n- **እንደምን ኖት?** [Endemen not?] (ለአክብሮት / respectful)\n- **ደህና ነኝ** [Dehna neñ] (I am fine)\n- **እግዚአብሔር ይመስገን** [Egziabher yimesgen] (Praise God)',
    examples: [
      { target: 'ሰላም! እንደምን ነህ?', reading: 'Selam! Endemen neh?', translation: 'Hello! How are you? (to a man)' },
      { target: 'ሰላም! እንደምን ነሽ?', reading: 'Selam! Endemen nesh?', translation: 'Hello! How are you? (to a woman)' },
      { target: 'ደህና ነኝ፣ እግዚአብሔር ይመስገን።', reading: 'Dehna neñ, Egziabher yimesgen.', translation: 'I am well, thank God.' },
      { target: 'እንደምን ኖት?', reading: 'Endemen not?', translation: 'How are you? (respectful / formal)' }
    ],
    mnemonics: [
      'ነህ (neh = male). ነሽ (nesh = female). ኖት (not = elder/respectful). ደህና ነኝ (dehna neñ = I am fine)!'
    ],
    culturalNotes: [
      'በኢትዮጵያ ባህል ሰላምታ ትልቅ ክብር እና ማህበራዊ ትስስር የሚገለጽበት ድንቅ ባህላዊ እሴት ነው።'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'When greeting a male friend in Amharic, which form of "How are you?" is grammatically correct?',
        options: [
          'እንደምን ነህ? (Endemen neh? - to male)',
          'እንደምን ነሽ? (Endemen nesh? - to female)',
          'እንደምን ኖት? (Endemen not? - respectful)',
          'ደህና ነኝ (Dehna neñ)'
        ],
        answerIndex: 0,
        explanation: '«እንደምን ነህ?» (*Endemen neh?*) uses the 2nd-person masculine suffix «-ህ» (-h).'
      },
      {
        prompt: 'What is the universal Amharic greeting meaning "Peace / Hello"?',
        options: [
          'ሰላም (Selam - Peace / Hello)',
          'ሎሚ (lomi)',
          'ላም (lam)',
          'ውሃ (wəha)'
        ],
        answerIndex: 0,
        explanation: '«ሰላም» (*Selam*) means peace and serves as the universal greeting.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'How do you politely ask a woman "How are you?" in Amharic?',
        options: [
          'እንደምን ነሽ? (Endemen nesh? - to female)',
          'እንደምን ነህ? (Endemen neh? - to male)',
          'እንደምን ኖት? (Endemen not?)',
          'ሰላም ሁን (Selam hun)'
        ],
        answerIndex: 0,
        explanation: '«እንደምን ነሽ?» (*Endemen nesh?*) uses the 2nd-person feminine suffix «-ሽ» (-sh).'
      },
      {
        prompt: 'Select the traditional Amharic response meaning "I am well, praise be to God":',
        options: [
          'ደህና ነኝ፣ እግዚአብሔር ይመስገን (Dehna neñ, Egziabher yimesgen)',
          'ስሜ ዳዊት ነው (My name is Dawit)',
          'ቻው (Chao)',
          'አይደለም (No)'
        ],
        answerIndex: 0,
        explanation: '«ደህና ነኝ፣ እግዚአብሔር ይመስገን» is the standard authentic response.'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'Which greeting is used when addressing an esteemed elder, professor, or dignitary respectfully?',
        options: [
          'እንደምን ኖት? (Endemen not? - respectful/formal)',
          'እንደምን ነህ? (to male peer)',
          'እንደምን ነሽ? (to female peer)',
          'ቻው (informal)'
        ],
        answerIndex: 0,
        explanation: '«እንደምን ኖት?» (*Endemen not?*) is the formal honorific form.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 2-character Fidel Amharic word for "Peace / Hello" (s-e-l-a-m):',
        acceptedAnswers: [
          'ሰላም'
        ],
        explanation: '«ሰ» + «ላ» + «ም» = «ሰላም» (*Selam*).'
      }
    ]
  }
};

const output = '// Amharic curriculum\n(function(global){\n  \'use strict\';\n  var UNITS = ' + JSON.stringify(curr.units, null, 4) + ';\n  var LESSONS = ' + JSON.stringify(curr.lessons, null, 4) + ';\n  var CURRICULUM = { id: \'amharic\', name: \'Amharic\', units: UNITS, lessons: LESSONS };\n  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};\n  global.FEARN_CURRICULA[\'amharic\'] = CURRICULUM;\n  if (typeof module !== \'undefined\' && module.exports) module.exports = CURRICULUM;\n})(typeof window !== \'undefined\' ? window : global);\n';

fs.writeFileSync(filePath, output, 'utf8');
console.log('Successfully patched Amharic curriculum Unit 1!');
