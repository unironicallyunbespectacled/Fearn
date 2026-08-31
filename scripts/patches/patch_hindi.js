const fs = require('fs');
const path = require('path');

const filePath = path.resolve(__dirname, '../../data/curricula/hindi.js');
const curr = require(filePath);

curr.lessons['hi-u1-l1'] = {
  id: 'hi-u1-l1',
  subject: 'hindi',
  unit: 1,
  lessonNumber: 1,
  title: 'देवनागरी लिपि का परिचय: स्वर, मात्राएँ और शिरोरेखा (Devanagari Vowels & Matras)',
  level: 'A1',
  objective: 'Master the phonetic Devanagari script (देवनागरी), the 11 independent vowels (स्वर), their corresponding vowel diacritics (मात्राएँ), and the hanging top line (शिरोरेखा).',
  presentation: {
    explanation: 'नमस्ते और हिंदी में आपका स्वागत है! Welcome to Hindi (हिंदी)! Hindi is written from left to right in **Devanagari (देवनागरी)**, one of the most scientifically organized phonetic writing systems in the world. Characters hang from a horizontal top line called the **शिरोरेखा (Shirorekha)**.\n\n### 1. The 11 Independent Vowels (स्वर) & Their Matras (मात्राएँ)\nEvery consonant in Devanagari has an **inherent short [a] vowel**. When other vowels attach to consonants, they are written as **Matras**:\n- **अ** [a] — Inherent vowel (no matra, e.g. **क** = ka)\n- **आ** [ā] — **ा** (long "aa", e.g. **का** = kā)\n- **इ** [i] — **ि** (short "i", written **BEFORE** the consonant, e.g. **कि** = ki)\n- **ई** [ī] — **ी** (long "ee", written AFTER the consonant, e.g. **की** = kī)\n- **उ** [u] — **ु** (short "u", bottom loop, e.g. **कु** = ku)\n- **ऊ** [ū] — **ू** (long "oo", bottom tail, e.g. **कू** = kū)\n- **ऋ** [ṛ] — **ृ** (vocalic "ri", e.g. **कृ** = kṛ)\n- **ए** [e] — **े** (long "ay", top stroke, e.g. **के** = ke)\n- **ऐ** [ai] — **ै** (diphthong "ai", double top stroke, e.g. **कै** = kai)\n- **ओ** [o] — **ो** (long "oh", e.g. **को** = ko)\n- **औ** [au] — **ौ** (diphthong "au", e.g. **कौ** = kau)\n\n### 2. Nasal & Breathing Marks\n- **अनुस्वार (Anusvara ं)**: Dot above the top line for nasalization (e.g. **हिंदी** = Hindī, **रंग** = rang / color).\n- **चंद्रबिंदु (Chandrabindu ँ)**: Crescent and dot for true nasal vowels (e.g. **माँ** = mā̃ / mother, **हूँ** = hū̃ / am).\n- **विसर्ग (Visarga ः)**: Colon-like dots representing an unvoiced breath release [h] (e.g. **अतः** = ataḥ).',
    examples: [
      { target: 'माँ', reading: 'mā̃', translation: 'mother (म [m] + ा [aa] + ँ [chandrabindu])' },
      { target: 'हिंदी', reading: 'hindī', translation: 'Hindi (ह [h] + ि [i] + ं [n] + द [d] + ी [ee])' },
      { target: 'पानी', reading: 'pānī', translation: 'water (प [p] + ा [aa] + न [n] + ी [ee])' },
      { target: 'किताब', reading: 'kitāb', translation: 'book (क [k] + ि [i] + त [t] + ा [aa] + ब [b])' }
    ],
    mnemonics: [
      'Short "i" (ि) bows in front of the letter like a polite shield! Long "ī" (ी) stands tall behind the letter like a walking cane!'
    ],
    culturalNotes: [
      'Devanagari literally translates to "City of the Gods" (Deva = divine, Nagari = urban/script), reflecting its sacred origins in ancient Sanskrit literature and classical scholarship.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'Which Devanagari vowel matra is uniquely written BEFORE (to the left of) the consonant it modifies?',
        options: [
          'Chhoti \'i\' matra: ि (e.g. कि - ki)',
          'Badi \'ī\' matra: ी (e.g. की - kī)',
          '\'aa\' matra: ा (e.g. का - kā)',
          '\'u\' matra: ु (e.g. कु - ku)'
        ],
        answerIndex: 0,
        explanation: 'The short [i] matra (ि) is always drawn to the left of the consonant, even though it is pronounced after it.'
      },
      {
        prompt: 'What is the horizontal top line called from which Devanagari letters hang?',
        options: [
          'शिरोरेखा (Shirorekha - the top hanging line)',
          'मात्रा (Matra)',
          'अनुस्वार (Anusvara)',
          'हलंत (Halant)'
        ],
        answerIndex: 0,
        explanation: '«शिरोरेखा» (*Shirorekha*) is the characteristic horizontal line spanning across Devanagari words.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Which diacritic represents full nasalization with a crescent moon and dot above the letter (as in «माँ» / mother)?',
        options: [
          'चंद्रबिंदु (Chandrabindu - ँ)',
          'अनुस्वार (Anusvara - ं)',
          'विसर्ग (Visarga - ः)',
          'हलंत (Halant - ्)'
        ],
        answerIndex: 0,
        explanation: '«चंद्रबिंदु» (ँ) marks true vowel nasalization.'
      },
      {
        prompt: 'Select the Hindi word meaning "water" spelled with «प» [p], «ा» [ā], «न» [n], «ी» [ī]:',
        options: [
          'पानी (pānī - water)',
          'किताब (kitāb - book)',
          'माँ (mā̃ - mother)',
          'नाम (nām - name)'
        ],
        answerIndex: 0,
        explanation: '«प» + «ा» + «न» + «ी» = «पानी» (*pānī* - water).'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What does the Hindi word «किताब» (*kitāb*) mean in English?',
        options: [
          'book',
          'water',
          'mother',
          'name'
        ],
        answerIndex: 0,
        explanation: '«किताब» (*kitāb*) means "book".'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 4-letter Devanagari Hindi word for "water" (p-a-n-i):',
        acceptedAnswers: [
          'पानी'
        ],
        explanation: '«प» + «ा» + «न» + «ी» = «पानी» (*pānī*).'
      }
    ]
  }
};

curr.lessons['hi-u1-l2'] = {
  id: 'hi-u1-l2',
  subject: 'hindi',
  unit: 1,
  lessonNumber: 2,
  title: 'व्यंजन और पाँच वर्ग: उच्चारण स्थान और महाप्राण ध्वनियाँ (Consonants: 5 Vargas & Aspiration)',
  level: 'A1',
  objective: 'Master the 25 classified consonants of the 5 Vargas (क-वर्ग, च-वर्ग, ट-वर्ग, त-वर्ग, प-वर्ग), the aspiration contrast (अल्पप्राण vs महाप्राण), and retroflex consonants.',
  presentation: {
    explanation: 'Devanagari consonants (व्यंजन) are classified strictly by their **point of articulation** (from back of throat to lips) into **5 Vargas (classes)** of 5 letters each (Unaspirated Voiceless, Aspirated Voiceless, Unaspirated Voiced, Aspirated Voiced, Nasal):\n\n### 1. The 5 Vargas (वर्ग)\n1. **क-वर्ग (Velar / कंठ्य - Throat)**:\n   - **क** [ka] (unaspirated), **ख** [kha] (aspirated puff), **ग** [ga], **घ** [gha], **ङ** [ṅa]\n2. **च-वर्ग (Palatal / तालव्य - Roof of mouth)**:\n   - **च** [cha], **छ** [chha], **ज** [ja], **झ** [jha], **ञ** [ña]\n3. **ट-वर्ग (Retroflex / मूर्धन्य - Tongue curled back)**:\n   - **ट** [ṭa], **ठ** [ṭha], **ड** [ḍa], **ढ** [ḍha], **ण** [ṇa] + Flaps: **ड़** [ṛa], **ढ़** [ṛha]\n4. **त-वर्ग (Dental / दंत्य - Tongue touching teeth)**:\n   - **त** [ta], **थ** [tha], **द** [da], **ध** [dha], **न** [na]\n5. **प-वर्ग (Labial / ओष्ठ्य - Both lips)**:\n   - **प** [pa], **फ** [pha], **ब** [ba], **भ** [bha], **म** [ma]\n\n### 2. Approximants & Sibilants\n- **य** [ya], **र** [ra], **ल** [la], **व** [va]\n- **श** [sha - palatal], **ष** [ṣha - retroflex], **स** [sa - dental], **ह** [ha]\n\n### 3. Essential Vocabulary\n- **घर** (*ghar*) → **home / house** (घ + र)\n- **फल** (*phal*) → **fruit** (फ + ल)\n- **कमल** (*kamal*) → **lotus** (क + म + ल)\n- **नाम** (*nām*) → **name** (न + ा + म)\n- **रात** (*rāt*) → **night** (र + ा + त)\n- **दिन** (*din*) → **day** (द + ि + न)',
    examples: [
      { target: 'घर', reading: 'ghar', translation: 'home / house (घ [gha] + र [ra])' },
      { target: 'फल', reading: 'phal', translation: 'fruit (फ [pha] + ल [la])' },
      { target: 'कमल', reading: 'kamal', translation: 'lotus flower (क [ka] + म [ma] + ल [la])' },
      { target: 'दिन', reading: 'din', translation: 'day (द [d] + ि [i] + न [n])' }
    ],
    mnemonics: [
      'In each varga, Column 1 & 3 are clean (unaspirated), while Column 2 & 4 explode with breath (aspirated)! Retroflex ट curled back, Dental त at teeth.'
    ],
    culturalNotes: [
      'The lotus flower (कमल - kamal) is India\'s national flower, symbolizing purity, spiritual elevation, and divine beauty emerging untainted from muddy waters.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'In the Devanagari 5-Varga system, what articulatory feature distinguishes «क» [ka] from «ख» [kha]?',
        options: [
          'Aspiration: «क» is unaspirated, while «ख» is strongly aspirated (accompanied by a burst of breath)',
          '«क» is voiced, while «ख» is voiceless',
          '«क» is nasal, while «ख» is a vowel',
          'There is no difference'
        ],
        answerIndex: 0,
        explanation: '«ख» is the aspirated counterpart of «क», produced with a strong puff of air.'
      },
      {
        prompt: 'Select the Hindi word meaning "home / house" spelled with voiced aspirated «घ» [gha] and «र» [ra]:',
        options: [
          'घर (ghar - home)',
          'फल (phal - fruit)',
          'कमल (kamal - lotus)',
          'दिन (din - day)'
        ],
        answerIndex: 0,
        explanation: '«घ» + «र» = «घर» (*ghar* - home).'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Which consonant class is articulated with the tip of the tongue curled upward and back against the hard palate (retroflex)?',
        options: [
          'ट-वर्ग (Retroflex: ट, ठ, ड, ढ, ण)',
          'त-वर्ग (Dental: त, थ, द, ध, न)',
          'प-वर्ग (Labial)',
          'क-वर्ग (Velar)'
        ],
        answerIndex: 0,
        explanation: '«ट-वर्ग» (*ṭa-varga*) comprises the retroflex series of consonants.'
      },
      {
        prompt: 'Identify the Hindi word for "fruit" spelled with aspirated «फ» and «ल»:',
        options: [
          'फल (phal - fruit)',
          'घर (ghar - house)',
          'कमल (kamal - lotus)',
          'रात (rāt - night)'
        ],
        answerIndex: 0,
        explanation: '«फ» + «ल» = «फल» (*phal* - fruit).'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What does the Hindi word «कमल» (*kamal*) mean in English?',
        options: [
          'lotus',
          'house',
          'fruit',
          'water'
        ],
        answerIndex: 0,
        explanation: '«कमल» (*kamal*) means "lotus".'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the 2-letter Devanagari Hindi word for "home / house" (g-h-a-r):',
        acceptedAnswers: [
          'घर'
        ],
        explanation: '«घ» + «र» = «घर» (*ghar*).'
      }
    ]
  }
};

curr.lessons['hi-u1-l3'] = {
  id: 'hi-u1-l3',
  subject: 'hindi',
  unit: 1,
  lessonNumber: 3,
  title: 'संयुक्ताक्षर, हलंत और श्वा विलोपन नियम (Conjuncts, Virama & Schwa Deletion)',
  level: 'A1',
  objective: 'Master consonant clusters (संयुक्ताक्षर), the vowel-canceling Halant (्), special conjuncts (क्ष, त्र, ज्ञ, श्र), and the spoken Schwa Deletion rule.',
  presentation: {
    explanation: 'Now we explore the rules that connect consonants together without intervening vowels in Hindi.\n\n### 1. The Halant / Virama (हलंत - ्)\nA small diagonal stroke below a consonant removes its inherent short [a] vowel:\n- **क** = ka → **क्** = k\n- **त** = ta → **त्** = t\n\n### 2. Conjunct Consonants (संयुक्ताक्षर - Half Letters)\nWhen two consonants meet with no vowel between them, the first consonant drops its vertical stem (standing line) to become a "half letter":\n- **क् + य = क्य** → **क्या** (*kyā* = what)\n- **च् + छ = च्छ** → **अच्छा** (*acchā* = good / well)\n- **स् + त = स्त** → **नमस्ते** (*namaste* = greetings)\n- **ल् + ल = ल्ल** → **दिल्ली** (*dillī* = Delhi)\n\n### 3. The 4 Special Classical Conjuncts\n- **क्ष** (*kṣha*) = क् + ष (e.g. **क्षमा** *kṣhamā* = forgiveness)\n- **त्र** (*tra*) = त् + र (e.g. **मित्र** *mitra* = friend)\n- **ज्ञ** (*gya*) = ज् + ञ (e.g. **ज्ञान** *gyān* = knowledge)\n- **श्र** (*shra*) = श् + र (e.g. **श्री** *shrī* = respected)\n\n### 4. The Schwa Deletion Rule (श्वा विलोपन)\nIn modern spoken Hindi, the **final inherent short [a] of a word is not pronounced**:\n- **कमल** is pronounced **[kamal]** (NOT "kamala").\n- **घर** is pronounced **[ghar]** (NOT "ghara").\n- **रात** is pronounced **[rāt]** (NOT "rāta").',
    examples: [
      { target: 'क्या', reading: 'kyā', translation: 'what (क् [k] + या [yaa])' },
      { target: 'अच्छा', reading: 'acchā', translation: 'good / fine (अ [a] + च्छ [cch] + ा [aa])' },
      { target: 'नमस्ते', reading: 'namaste', translation: 'greetings / hello (न [na] + म [ma] + स्ते [ste])' },
      { target: 'मित्र', reading: 'mitra', translation: 'friend (म [m] + ि [i] + त्र [tra])' }
    ],
    mnemonics: [
      'Drop the vertical line to make a half letter (क् -> क्य in क्या, स् -> स्त in नमस्ते)! Remember: final "a" is silent in spoken Hindi (Kamal, not Kamala)!'
    ],
    culturalNotes: [
      'The word «मित्र» (*mitra* - friend) originates in the ancient Rigvedic deity of friendship, solar light, and cosmic contracts.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'In the universal greeting «नमस्ते» (namaste), what consonant cluster is formed by the half-letter «स्» and «ते»?',
        options: [
          'स्त (sta / ste - conjunct of \'s\' and \'te\')',
          'क्य (kya)',
          'च्छ (ccha)',
          'ल्ल (lla)'
        ],
        answerIndex: 0,
        explanation: '«स्» (half s) + «ते» (te) creates the conjunct «स्ते» (*ste*) in «नमस्ते».'
      },
      {
        prompt: 'According to the Schwa Deletion rule in Hindi phonology, how is the written word «कमल» (क-म-ल) pronounced in spoken Hindi?',
        options: [
          'kamal (final inherent [a] is dropped)',
          'kamala (all vowels pronounced)',
          'kamli',
          'kaml'
        ],
        answerIndex: 0,
        explanation: 'Word-final inherent schwa [a] is deleted in spoken standard Hindi, pronouncing «कमल» as [kamal].'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Which special classical conjunct character represents the [kṣha] sound in «क्षमा» (forgiveness)?',
        options: [
          'क्ष (kṣha - क् + ष)',
          'त्र (tra)',
          'ज्ञ (gya)',
          'श्र (shra)'
        ],
        answerIndex: 0,
        explanation: '«क्ष» is the ligated conjunct for [kṣha].'
      },
      {
        prompt: 'Select the Hindi question word meaning "what" spelled with half-Ka and Ya «क्या»:',
        options: [
          'क्या (kyā - what)',
          'अच्छा (acchā - good)',
          'मित्र (mitra - friend)',
          'ज्ञान (gyān - knowledge)'
        ],
        answerIndex: 0,
        explanation: '«क्या» (*kyā*) means "what".'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What does the Hindi word «अच्छा» (*acchā*) mean in English?',
        options: [
          'good / fine / okay',
          'what',
          'friend',
          'book'
        ],
        answerIndex: 0,
        explanation: '«अच्छा» (*acchā*) means "good / fine / well".'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Devanagari Hindi word for "what" (k-y-a):',
        acceptedAnswers: [
          'क्या'
        ],
        explanation: '«क्» + «य» + «ा» = «क्या» (*kyā*).'
      }
    ]
  }
};

curr.lessons['hi-u1-l4'] = {
  id: 'hi-u1-l4',
  subject: 'hindi',
  unit: 1,
  lessonNumber: 4,
  title: 'पारंपरिक व दैनिक अभिवादन: नमस्ते, नमस्कार और हाल-चाल (Greetings & Wellbeing)',
  level: 'A1',
  objective: 'Master traditional greetings (Namaste, Namaskār), time-of-day greetings (Shubh prabhāt, Shubh rātri), and inquiring wellbeing (Āp kaise/kaisī hain?).',
  presentation: {
    explanation: 'Now we apply our Devanagari literacy to authentic Indian greetings and respectful social interactions.\n\n### 1. The Universal Traditional Greeting: नमस्ते & नमस्कार\n- **नमस्ते!** (*Namaste!*) → **Hello / Greetings / I bow to you**\n  - Derived from Sanskrit *Namah* (bow/reverence) + *Te* (to you): "The divine in me recognizes and bows to the divine in you."\n  - Accompanied by **अंजलि मुद्रा (Anjali Mudra)**: Palms pressed together gently at chest level with a respectful slight bow.\n- **नमस्कार!** (*Namaskār!*) → Formal, respectful greeting to elders, dignitaries, and assemblies.\n\n### 2. Time-of-Day Greetings\n- **शुभ प्रभात!** (*Shubh prabhāt!*) → **Good morning!**\n- **शुभ दोपहर!** (*Shubh dopahar!*) → **Good afternoon!**\n- **शुभ संध्या!** (*Shubh sandhyā!*) → **Good evening!**\n- **शुभ रात्रि!** (*Shubh rātri!*) → **Good night!**\n\n### 3. Inquiring Wellbeing: "How are you?"\n- **To a male**: **आप कैसे हैं?** (*Āp kaise hain?*)\n- **To a female**: **आप कैसी हैं?** (*Āp kaisī hain?*)\n- **Informal / Friendly**: **तुम कैसे/कैसी हो?** (*Tum kaise/kaisī ho?*)\n\n### 4. Authentic Responses\n- **मैं ठीक हूँ, धन्यवाद।** (*Main ṭhīk hū̃, dhanyavād.*) → **I am fine, thank you.**\n- **सब ठीक है।** (*Sab ṭhīk hai.*) → **Everything is fine / All good.**\n- **आप कैसे हैं?** (*Āp kaise hain?*) → And how are you?',
    examples: [
      { target: 'नमस्ते! आप कैसे हैं?', reading: 'Namaste! Āp kaise hain?', translation: 'Hello! How are you? (to a man)' },
      { target: 'नमस्ते! आप कैसी हैं?', reading: 'Namaste! Āp kaisī hain?', translation: 'Hello! How are you? (to a woman)' },
      { target: 'मैं ठीक हूँ, धन्यवाद।', reading: 'Main ṭhīk hū̃, dhanyavād.', translation: 'I am fine, thank you.' },
      { target: 'शुभ प्रभात!', reading: 'Shubh prabhāt!', translation: 'Good morning!' }
    ],
    mnemonics: [
      'Kaise = male (Āp kaise hain?). Kaisī = female (Āp kaisī hain?). Fold hands at the chest for a graceful Namaste!'
    ],
    culturalNotes: [
      'The Namaste greeting is a cornerstone of Indian culture, demonstrating humility, egalitarian respect, and non-contact hygiene recognized worldwide.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'When greeting a woman politely in formal Hindi, which form of "How are you?" is grammatically correct?',
        options: [
          'आप कैसी हैं? (Āp kaisī hain? - to female)',
          'आप कैसे हैं? (Āp kaise hain? - to male)',
          'तुम कौन हो?',
          'शुभ रात्रि'
        ],
        answerIndex: 0,
        explanation: '«आप कैसी हैं?» (*Āp kaisī hain?*) uses the feminine agreement «कैसी» (*kaisī*).'
      },
      {
        prompt: 'What gesture traditionally accompanies the greeting «नमस्ते» (Namaste)?',
        options: [
          'Pressing palms together gently at chest height with a slight bow (अंजलि मुद्रा - Anjali Mudra)',
          'A handshake',
          'Waving one hand',
          'Snapping fingers'
        ],
        answerIndex: 0,
        explanation: 'Namaste is accompanied by pressing the palms together near the heart chakra.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Select the Hindi greeting meaning "Good morning!" (lit. "Auspicious morning"):',
        options: [
          'शुभ प्रभात (Shubh prabhāt - Good morning)',
          'शुभ रात्रि (Shubh rātri - Good night)',
          'नमस्ते (Hello)',
          'अलविalgebra'
        ],
        answerIndex: 0,
        explanation: '«शुभ प्रभात» (*Shubh prabhāt*) means "Good morning".'
      },
      {
        prompt: 'What does the standard response «मैं ठीक हूँ, धन्यवाद» mean in English?',
        options: [
          'I am fine, thank you',
          'My name is Rahul',
          'Goodbye until tomorrow',
          'Where are you going?'
        ],
        answerIndex: 0,
        explanation: '«मैं ठीक हूँ, धन्यवाद» (*Main ṭhīk hū̃, dhanyavād*) means "I am fine, thank you".'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'What does the Sanskrit root of «नमस्ते» (*Namaste*) literally translate to?',
        options: [
          'I bow to you / Reverence to you (Namah + Te)',
          'Good morning to you',
          'Peace with you',
          'Be well today'
        ],
        answerIndex: 0,
        explanation: 'Namaste is formed from *Namah* (bow/salutation) + *te* (to you).'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Devanagari Hindi greeting for "Hello / Greetings" (N-a-m-a-s-t-e):',
        acceptedAnswers: [
          'नमस्ते'
        ],
        explanation: '«न» + «म» + «स्» + «ते» = «नमस्ते» (*Namaste*).'
      }
    ]
  }
};

curr.lessons['hi-u1-l5'] = {
  id: 'hi-u1-l5',
  subject: 'hindi',
  unit: 1,
  lessonNumber: 5,
  title: 'परिचय, शिष्टाचार, धन्यवाद और विदाई (Introductions, Etiquette & Farewells)',
  level: 'A1',
  objective: 'Master self-introductions (Merā nām... hai, Āpkā nām kyā hai?), polite expressions (Dhanyavād, Kṛpayā, Māf kījiye), and farewells (Phir milenge, Alvidā).',
  presentation: {
    explanation: 'In this capstone lesson of Unit 1, we master self-introductions, polite requests, gratitude, and heartfelt farewells in Hindi.\n\n### 1. Self-Introductions (अपना परिचय)\n- **मेरा नाम [नाम] है।** (*Merā nām [Name] hai.*) → **My name is [Name].**\n  - e.g. **मेरा नाम राहुल है।** (*Merā nām Rāhul hai.*)\n  - e.g. **मेरा नाम प्रिया है।** (*Merā nām Priyā hai.*)\n- **आपका नाम क्या है?** (*Āpkā nām kyā hai?*) → **What is your name? (polite / formal)**\n- **आपसे मिलकर बहुत खुशी हुई।** (*Āpse milkar bahut khushī huī.*) → **Very pleased to meet you.**\n\n### 2. Politeness & Etiquette (शिष्टाचार)\n- **धन्यवाद!** (*Dhanyavād!*) / **शुक्रिया!** (*Shukriyā!*) → **Thank you!**\n- **बहुत-बहुत धन्यवाद!** (*Bahut-bahut dhanyavād!*) → **Thank you very much!**\n- **कोई बात नहीं।** (*Koī bāt nahī̃.*) → **You are welcome / No problem / Don\'t mention it.**\n- **कृपया** (*Kṛpayā*) → **Please** (e.g. कृपया बैठिए *Kṛpayā baiṭhiye* - Please sit down).\n- **माफ़ कीजिए** (*Māf kījiye*) / **क्षमा करें** (*Kṣhamā karẽ*) → **Excuse me / I am sorry / Pardon me.**\n\n### 3. Farewells & Parting (विदाई)\n- **फिर मिलेंगे!** (*Phir milenge!*) → **See you again! / Until next time!**\n- **अलविदा!** (*Alvidā!*) → **Goodbye / Farewell!**\n- **शुभ रात्रि!** (*Shubh rātri!*) → **Good night!**\n- **नमस्ते!** (*Namaste!*) → Can also be used when departing.',
    examples: [
      { target: 'मेरा नाम राहुल है।', reading: 'Merā nām Rāhul hai.', translation: 'My name is Rahul.' },
      { target: 'आपका नाम क्या है?', reading: 'Āpkā nām kyā hai?', translation: 'What is your name? (polite / formal)' },
      { target: 'आपसे मिलकर खुशी हुई।', reading: 'Āpse milkar khushī huī.', translation: 'Pleased to meet you.' },
      { target: 'फिर मिलेंगे! — नमस्ते!', reading: 'Phir milenge! — Namaste!', translation: 'See you again! — Goodbye!' }
    ],
    mnemonics: [
      'Merā nām = My name. Āpkā nām = Your name. Phir milenge = Again (Phir) We will meet (Milenge)!'
    ],
    culturalNotes: [
      'In Indian culture, departing with «फिर मिलेंगे» (See you again) is preferred over a final «अलविदा» (farewell), carrying the positive promise of future reunion.'
    ]
  },
  guidedPractice: {
    items: [
      {
        prompt: 'How do you introduce yourself and state "My name is Rahul" in Hindi?',
        options: [
          'मेरा नाम राहुल है (Merā nām Rāhul hai)',
          'आपका नाम राहुल है',
          'मैं राहुल जाता हूँ',
          'राहुल घर है'
        ],
        answerIndex: 0,
        explanation: '«मेरा नाम [नाम] है» (*Merā nām [Name] hai*) is the standard phrase for stating your name.'
      },
      {
        prompt: 'Which warm Hindi farewell phrase means "See you again! / We will meet again"?',
        options: [
          'फिर मिलेंगे (Phir milenge - See you again)',
          'शुभ प्रभात (Good morning)',
          'धन्यवाद (Thank you)',
          'माफ़ कीजिए (Excuse me)'
        ],
        answerIndex: 0,
        explanation: '«फिर मिलेंगे» (*Phir milenge*) is the standard hopeful parting phrase.'
      }
    ]
  },
  independentPractice: {
    items: [
      {
        prompt: 'Select the polite Hindi sentence meaning "Pleased to meet you":',
        options: [
          'आपसे मिलकर बहुत खुशी हुई (Āpse milkar bahut khushī huī)',
          'कोई बात नहीं (No problem)',
          'आपका नाम क्या है?',
          'माफ़ कीजिए'
        ],
        answerIndex: 0,
        explanation: '«आपसे मिलकर बहुत खुशी हुई» expresses pleasure upon meeting someone.'
      },
      {
        prompt: 'When someone thanks you with «धन्यवाद» (Dhanyavād), what is the polite Hindi response meaning "You are welcome / No problem"?',
        options: [
          'कोई बात नहीं (Koī bāt nahī̃ - You\'re welcome / No problem)',
          'फिर मिलेंगे (See you again)',
          'मेरा नाम है',
          'शुभ रात्रि (Good night)'
        ],
        answerIndex: 0,
        explanation: '«कोई बात नहीं» (*Koī bāt nahī̃*) is the standard gracious response.'
      }
    ]
  },
  checkpointTest: {
    items: [
      {
        type: 'multiple-choice',
        prompt: 'How do you ask someone their name politely in Hindi?',
        options: [
          'आपका नाम क्या है? (Āpkā nām kyā hai?)',
          'तुम कौन हो?',
          'घर कहाँ है?',
          'कैसे हो?'
        ],
        answerIndex: 0,
        explanation: '«आपका नाम क्या है?» (*Āpkā nām kyā hai?*) is the respectful polite question.'
      },
      {
        type: 'typed-recall',
        prompt: 'Type the Devanagari Hindi word for "Thank you" (D-h-a-n-y-a-v-a-d):',
        acceptedAnswers: [
          'धन्यवाद',
          'शुक्रिया'
        ],
        explanation: '«धन्यवाद» (*dhanyavād*) = Thank you.'
      }
    ]
  }
};

const output = '// Hindi curriculum\n(function(global){\n  \'use strict\';\n  var UNITS = ' + JSON.stringify(curr.units, null, 4) + ';\n  var LESSONS = ' + JSON.stringify(curr.lessons, null, 4) + ';\n  var CURRICULUM = { id: \'hindi\', name: \'Hindi\', units: UNITS, lessons: LESSONS };\n  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};\n  global.FEARN_CURRICULA[\'hindi\'] = CURRICULUM;\n  if (typeof module !== \'undefined\' && module.exports) module.exports = CURRICULUM;\n})(typeof window !== \'undefined\' ? window : global);\n';

fs.writeFileSync(filePath, output, 'utf8');
console.log('Successfully patched Hindi curriculum Unit 1!');
