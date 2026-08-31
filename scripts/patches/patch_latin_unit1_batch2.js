const fs = require('fs');
const path = require('path');

function updateCurriculum(subj, updater) {
  const filePath = path.resolve(__dirname, `../../data/curricula/${subj}.js`);
  const curr = require(filePath);
  updater(curr);
  
  const output = `// ${curr.name || subj} curriculum\n(function(global){\n  'use strict';\n  var UNITS = ${JSON.stringify(curr.units, null, 4)};\n  var LESSONS = ${JSON.stringify(curr.lessons, null, 4)};\n  var CURRICULUM = { id: '${subj}', name: '${curr.name || subj}', units: UNITS, lessons: LESSONS };\n  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};\n  global.FEARN_CURRICULA['${subj}'] = CURRICULUM;\n  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;\n})(typeof window !== 'undefined' ? window : global);\n`;
  
  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`Updated ${subj} Unit 1!`);
}

// 1. FRENCH (french.js)
updateCurriculum('french', (curr) => {
  curr.lessons['fr-u1-l1'] = {
    id: 'fr-u1-l1',
    subject: 'french',
    unit: 1,
    lessonNumber: 1,
    title: 'L\'Alphabet Français, les 5 Accents et les Lettres Muettes (The French Alphabet, 5 Accents & Silent Letters)',
    level: 'A1',
    objective: 'Master the 26-letter French alphabet, the 5 orthographic accents (é, è/à/ù, â/ê/î/ô/û, ë/ï/ü, ç), silent final consonants, and nasal vowel sounds.',
    presentation: {
      explanation: 'Bienvenue en français! Welcome to French (français)! French orthography carries centuries of etymological elegance. Once you master the 5 accent marks and the rules for silent letters, reading French becomes fluid and predictable.\n\n### 1. Les 5 Accents Français\n1. **Accent Aigu (é)** [e] — Closed "ay" (only on the letter E: e.g. **café** = coffee, **été** = summer, **étudiant** = student)\n2. **Accent Grave (è, à, ù)** [ɛ] — Open "eh" (e.g. **mère** = mother, **frère** = brother). On *à* and *ù*, it distinguishes homophones (e.g. *a* [has] vs *à* [at/to], *ou* [or] vs *où* [where])\n3. **Accent Circonflexe (â, ê, î, ô, û)** — Indicates a historical \'s\' dropped from Old French (e.g. **hôpital** from hospital, **forêt** from forest, **château** from castle)\n4. **Tréma (ë, ï, ü)** — Indicates that two consecutive vowels must be pronounced separately in two syllables (e.g. **Noël** = *No-el* / Christmas, **maïs** = *ma-ees* / corn, **naïf**)\n5. **Cédille (ç)** [s] — Always softens the letter "C" to an "S" sound before the hard vowels a, o, u (e.g. **français** = French, **garçon** = boy, **ça va** = it\'s going well)\n\n### 2. The Silent Final Letters (Les Lettres Muettes)\nIn French, consonants at the very end of words are usually **SILENT**, especially **-e, -s, -t, -d, -p, -x, -z**:\n- **salut** &rarr; pronounced *[sah-ly]* (the final \'t\' is silent!)\n- **français** &rarr; pronounced *[frahn-seh]* (the final \'s\' is silent!)\n- **grand** &rarr; pronounced *[grahn]* (the final \'d\' is silent!)\n*(Rule of thumb: The consonants in "CaReFuL" (C, R, F, L) are usually pronounced at word ends, e.g. sac, mer, neuf, ciel)*',
      examples: [
        { target: 'français', reading: 'frahn-seh', translation: 'French (cédille ç [s] + silent s)' },
        { target: 'café', reading: 'kah-fay', translation: 'coffee / café (accent aigu é [e])' },
        { target: 'garçon', reading: 'gahr-sohn', translation: 'boy / waiter (cédille ç [s])' },
        { target: 'salut', reading: 'sah-ly', translation: 'hi / bye (silent final t)' }
      ],
      mnemonics: [
        'Cédille (ç) acts like a little snake turning hard "C" into a soft "S"! Final -s, -t, -d, -x stay silent unless a vowel follows (liaison)!'
      ],
      culturalNotes: [
        'L\'Académie française (founded in 1635 by Cardinal Richelieu) officially regulates the official grammar, spelling, and purity of the French language.'
      ]
    },
    guidedPractice: {
      items: [
        {
          prompt: 'What is the function of the Cédille (ç) diacritic in French words like «français» and «garçon»?',
          options: [
            'It softens the "C" to a voiceless [s] sound before vowels a, o, u',
            'It makes the letter "C" silent',
            'It turns the "C" into a "K" sound',
            'It marks a stressed syllable'
          ],
          answerIndex: 0,
          explanation: 'La cédille (ç) softens the "c" to an "s" sound before the back vowels a, o, u.'
        },
        {
          prompt: 'In the French informal greeting «salut» (hi/bye), how is the final letter «-t» pronounced?',
          options: [
            'It is completely silent [sah-ly]',
            'It is pronounced as a hard "T"',
            'It is pronounced as "S"',
            'It is rolled'
          ],
          answerIndex: 0,
          explanation: 'Final consonants like -t in «salut» are silent in standard French.'
        }
      ]
    },
    independentPractice: {
      items: [
        {
          prompt: 'Which French accent mark indicates that two adjacent vowels are pronounced separately (as in «Noël»)?',
          options: [
            'Le Tréma (ë, ï - two dots for separate vowel syllables)',
            'L\'Accent Aigu (é)',
            'L\'Accent Grave (è)',
            'La Cédille (ç)'
          ],
          answerIndex: 0,
          explanation: 'Le tréma (¨) forces two adjacent vowels to be articulated independently in separate syllables.'
        },
        {
          prompt: 'Select the French word meaning "boy / waiter" spelled with a cédille «garçon»:',
          options: [
            'garçon (boy / waiter)',
            'café (coffee)',
            'français (French)',
            'salut (hi)'
          ],
          answerIndex: 0,
          explanation: '«garçon» means "boy" or "waiter".'
        }
      ]
    },
    checkpointTest: {
      items: [
        {
          type: 'multiple-choice',
          prompt: 'What does the French word «café» mean in English?',
          options: [
            'coffee / café',
            'boy',
            'street',
            'bread'
          ],
          answerIndex: 0,
          explanation: '«café» means "coffee" or "café".'
        },
        {
          type: 'typed-recall',
          prompt: 'Type the French word for "French" with a cédille (f-r-a-n-c-a-i-s):',
          acceptedAnswers: [
            'français',
            'francais'
          ],
          explanation: '«français» = French.'
        }
      ]
    }
  };
});

// 2. ROMANIAN (romanian.js)
updateCurriculum('romanian', (curr) => {
  curr.lessons['ro-u1-l1'] = {
    id: 'ro-u1-l1',
    subject: 'romanian',
    unit: 1,
    lessonNumber: 1,
    title: 'Alfabetul Român, Cele 5 Diacritice (ă, â, î, ș, ț) și Articolul Hotărât Enclitic (Romanian Alphabet & Diacritics)',
    level: 'A1',
    objective: 'Master the 31-letter Romanian alphabet, the 5 special diacritics (ă, â, î, ș, ț), enclitic definite article suffixes (-ul, -a, -le), and core greetings.',
    presentation: {
      explanation: 'Bine ați venit în limba română! Welcome to Romanian (română)! Romanian is the sole Eastern Romance language that directly preserves ancient Latin case declensions and enclitic definite articles, surrounded by Slavic linguistic neighbors.\n\n### 1. Cele 5 Diacritice Românești (The 5 Romanian Diacritic Letters)\n- **Ă ă** [ə] — Mid-central schwa vowel (like "a" in "about" or "sofa" — e.g. **apă** = water, **măr** = apple, **bună** = good)\n- **Â â** and **Î î** [ɨ] — Close central unrounded vowel (make an "ee" in the back of your throat with relaxed lips — e.g. **România** = Romania, **câine** = dog, **înțeleg** = I understand). *Spelling rule: «Î» appears at the start and end of words (în, a urî); «Â» appears strictly inside words (român, pâine).*\n- **Ș ș** [ʃ] — Voiceless postalveolar fricative (like "sh" in "shoe" — e.g. **și** = and, **școală** = school, **mulțumesc** = thank you)\n- **Ț ț** [ts] — Voiceless alveolar affricate (like "ts" in "cats" — e.g. **țară** = country, **băiat** = boy, **viață** = life)\n*(Note: Romanian diacritics officially use a comma below (ș, ț), NOT a cedilla!)*\n\n### 2. Enclitic Definite Articles (Articolul Hotărât)\nUnlike English ("the book") or Spanish ("el libro"), Romanian attaches the definite article **to the end of the noun**:\n- Masculine: **băiat** (boy) &rarr; **băiatul** (the boy), **om** (man) &rarr; **omul** (the man)\n- Feminine: **fată** (girl) &rarr; **fata** (the girl), **carte** (book) &rarr; **cartea** (the book)\n- Plural: **băieți** (boys) &rarr; **băieții** (the boys), **fete** (girls) &rarr; **fetele** (the girls)',
      examples: [
        { target: 'apă', reading: 'AH-puh', translation: 'water (a + p + ă [schwa])' },
        { target: 'mulțumesc', reading: 'mool-tsoo-MESK', translation: 'thank you (ț [ts] + u + m + e + s + c)' },
        { target: 'bună', reading: 'BOO-nuh', translation: 'good / hello (b + u + n + ă)' },
        { target: 'România', reading: 'roh-mɨ-NEE-ah', translation: 'Romania (â [central ɨ])' }
      ],
      mnemonics: [
        'Ș has a comma for Shoe [sh]. Ț has a comma for caTs [ts]. Ă is a relaxed "uh" (apă = water)!'
      ],
      culturalNotes: [
        'Romanian preserves over 70% of core Latin lexicon while incorporating ancient Dacian roots and medieval Slavic vocabulary, creating a unique Romance harmony in Eastern Europe.'
      ]
    },
    guidedPractice: {
      items: [
        {
          prompt: 'What sound does the Romanian diacritic letter «Ț ț» (with comma below) make in words like «țară» (country) and «mulțumesc» (thank you)?',
          options: [
            'Like "ts" in "cats" [ts]',
            'Like "sh" in "shoe" [ʃ]',
            'Like "ch" in "chair"',
            'Like "th" in "this"'
          ],
          answerIndex: 0,
          explanation: '«Ț ț» represents the voiceless alveolar affricate [ts].'
        },
        {
          prompt: 'How does Romanian uniquely attach the definite article "the" to nouns (e.g. băiat &rarr; băiatul)?',
          options: [
            'As an enclitic suffix attached directly to the end of the noun',
            'As a separate word placed before the noun',
            'By capitalizing the noun',
            'By changing the vowel'
          ],
          answerIndex: 0,
          explanation: 'Romanian attaches definite articles as enclitic suffixes to the end of nouns (e.g. *omul*, *fata*).'
        }
      ]
    },
    independentPractice: {
      items: [
        {
          prompt: 'What sound does the letter «Ă ă» represent in Romanian words like «apă» (water)?',
          options: [
            'A mid-central schwa vowel [ə] (like "a" in "sofa")',
            'A long "aa" sound',
            'A short "ee" sound',
            'Silent'
          ],
          answerIndex: 0,
          explanation: '«Ă ă» is the mid-central schwa vowel [ə].'
        },
        {
          prompt: 'Select the Romanian word meaning "thank you" spelled with the letter «ț» «mulțumesc»:',
          options: [
            'mulțumesc (thank you)',
            'apă (water)',
            'bună (good/hello)',
            'țară (country)'
          ],
          answerIndex: 0,
          explanation: '«mulțumesc» is the universal Romanian expression of gratitude.'
        }
      ]
    },
    checkpointTest: {
      items: [
        {
          type: 'multiple-choice',
          prompt: 'What does the Romanian word «apă» mean in English?',
          options: [
            'water',
            'bread',
            'house',
            'street'
          ],
          answerIndex: 0,
          explanation: '«apă» means "water".'
        },
        {
          type: 'typed-recall',
          prompt: 'Type the Romanian word for "water" (a-p-a with schwa):',
          acceptedAnswers: [
            'apă',
            'apa'
          ],
          explanation: '«apă» = water.'
        }
      ]
    }
  };
});

// 3. SWAHILI (swahili.js)
updateCurriculum('swahili', (curr) => {
  curr.lessons['sw-u1-l1'] = {
    id: 'sw-u1-l1',
    subject: 'swahili',
    unit: 1,
    lessonNumber: 1,
    title: 'Alfabeti ya Kiswahili, Silabi za Mkazo na Salamu za Kimsingi (Swahili Alphabet, Stress & Core Greetings)',
    level: 'A1',
    objective: 'Master Swahili phonology, the 5 pure vowels (A, E, I, O, U), the invariable penultimate stress rule, consonant digraphs (dh, gh, ng\', ch, sh), and authentic Bantu greetings.',
    presentation: {
      explanation: 'Karibu katika lugha ya Kiswahili! Welcome to Swahili (Kiswahili)! Swahili is the lingua franca of East Africa, spoken by over 100 million people across Tanzania, Kenya, Uganda, Rwanda, DRC, and Mozambique. Swahili is completely phonetic with zero irregular vowel shifts.\n\n### 1. Irabu Tano (The 5 Pure Vowels)\nSwahili vowels never change into diphthongs or schwas—they are always crisp, open, and pure:\n- **A** [a] — Open "ah" (as in "father" — e.g. **asante** = thank you)\n- **E** [ɛ] — Mid "eh" (as in "bed" — e.g. **ndiyo** = yes)\n- **I** [i] — Close "ee" (as in "see" — e.g. **jina** = name, **mimi** = I)\n- **O** [ɔ] — Open "oh" (as in "or" — e.g. **somo** = lesson)\n- **U** [u] — Close "oo" (as in "moon" — e.g. **mtu** = person, **kuku** = chicken)\n\n### 2. Kanuni Kuu ya Mkazo (The Invariable Penultimate Stress Rule)\nIn Swahili, **the stress (accent) ALWAYS falls on the second-to-last (penultimate) syllable** of every word without exception:\n- **ha-BA-ri** (news / how are you?)\n- **a-SAN-te** (thank you)\n- **ki-SWA-hi-li** (Swahili language)\n- **ka-RI-bu** (welcome)\n\n### 3. Matamshi Maalum (Consonant Digraphs)\n- **ng\'** [ŋ] — Velar nasal without hard G (like "singer" — e.g. **ng\'ombe** = cow)\n- **dh** [ð] — Voiced dental fricative (like "th" in "this" — e.g. **dhahabu** = gold)\n- **th** [θ] — Voiceless dental fricative (like "th" in "think" — e.g. **thelathini** = thirty)\n- **gh** [ɣ] — Voiced velar fricative (warm guttural — e.g. **ghali** = expensive)\n- **ny** [ɲ] — Palatal nasal (like Spanish ñ / "canyon" — e.g. **nyumba** = house)',
      examples: [
        { target: 'jambo', reading: 'JAHM-boh', translation: 'matter / hello (penultimate stress on JAHM)' },
        { target: 'asante', reading: 'ah-SAHN-tay', translation: 'thank you (stress on SAHN)' },
        { target: 'karibu', reading: 'kah-REE-boo', translation: 'welcome / near (stress on REE)' },
        { target: 'habari', reading: 'hah-BAH-ree', translation: 'news / how are you? (stress on BAH)' }
      ],
      mnemonics: [
        'Swahili rhythm: Always bounce the voice on the SECOND-TO-LAST syllable (ha-BA-ri, a-SAN-te, ka-RI-bu)!'
      ],
      culturalNotes: [
        'In Swahili culture, respectful greetings are paramount. Younger people greet respected elders with «Shikamoo» (lit. "I hold your feet with respect"), to which elders reply «Marahaba» ("I accept with grace").'
      ]
    },
    guidedPractice: {
      items: [
        {
          prompt: 'Where does the primary stress (syllable accent) fall in virtually every Swahili word?',
          options: [
            'Always on the second-to-last (penultimate) syllable (e.g. ha-BA-ri, a-SAN-te)',
            'Always on the last syllable',
            'Always on the first syllable',
            'It is unpredictable'
          ],
          answerIndex: 0,
          explanation: 'In Swahili, syllable stress invariably falls on the penultimate (second-to-last) syllable.'
        },
        {
          prompt: 'What does the universal Swahili expression of gratitude «asante» mean?',
          options: [
            'thank you',
            'welcome',
            'goodbye',
            'hello'
          ],
          answerIndex: 0,
          explanation: '«asante» means "thank you".'
        }
      ]
    },
    independentPractice: {
      items: [
        {
          prompt: 'Select the Swahili word meaning "welcome" (also used as "you are welcome" after asante):',
          options: [
            'karibu (welcome)',
            'habari (news)',
            'jambo (hello)',
            'ndiyo (yes)'
          ],
          answerIndex: 0,
          explanation: '«karibu» means "welcome" and responds to "asante".'
        },
        {
          prompt: 'How is the digraph «ng\'» pronounced in Swahili words like «ng\'ombe» (cow)?',
          options: [
            'As a pure velar nasal [ŋ] like "ng" in "singer" (without a hard "g")',
            'As hard "n-g"',
            'As an English "N"',
            'Silent'
          ],
          answerIndex: 0,
          explanation: '«ng\'» is the pure velar nasal [ŋ].'
        }
      ]
    },
    checkpointTest: {
      items: [
        {
          type: 'multiple-choice',
          prompt: 'What does the Swahili word «habari» mean in greetings?',
          options: [
            'news / how are you?',
            'water',
            'house',
            'food'
          ],
          answerIndex: 0,
          explanation: '«habari» means "news" (e.g. *Habari gani?* = What is the news / How are you?).'
        },
        {
          type: 'typed-recall',
          prompt: 'Type the Swahili word for "Thank you" (a-s-a-n-t-e):',
          acceptedAnswers: [
            'asante'
          ],
          explanation: '«asante» = thank you.'
        }
      ]
    }
  };
});

// 4. ARGENTINE SPANISH (argentine-spanish.js)
updateCurriculum('argentine-spanish', (curr) => {
  curr.lessons['ar-es-u1-l1'] = {
    id: 'ar-es-u1-l1',
    subject: 'argentine-spanish',
    unit: 1,
    lessonNumber: 1,
    title: 'El Alfabeto Rioplatense, el Yeísmo Rehilado (LL/Y = [ʃ]) y el Voseo (Argentine Alphabet & Sheísmo)',
    level: 'A1',
    objective: 'Master Rioplatense Spanish phonetics, the 27-letter Spanish alphabet, Yeísmo rehilado / Sheísmo (LL and Y pronounced as [ʃ]/[ʒ]), and foundational Argentine voseo greetings.',
    presentation: {
      explanation: '¡Bienvenidos al español rioplatense! Welcome to Argentine Spanish (Español Rioplatense), spoken across Buenos Aires, Rosario, and Uruguay along the Río de la Plata basin. Argentine Spanish is world-famous for its Italian-influenced musical cadence, distinctive phonology, and unique pronoun system (*voseo*).\n\n### 1. El Yeísmo Rehilado / Sheísmo (LL & Y = [ʃ] / [ʒ])\nThe most iconic signature of Argentine pronunciation is that both **LL** and **Y** are pronounced as a soft "sh" [ʃ] (or voiced [ʒ] like "vision") rather than the standard "y" sound:\n- **calle** (street) &rarr; pronounced **"CAH-sheh"** (not "cah-yeh")\n- **yo** (I) &rarr; pronounced **"SHO"** (not "yo")\n- **lluvia** (rain) &rarr; pronounced **"SHOO-vyah"** (not "yoo-vyah")\n- **playa** (beach) &rarr; pronounced **"PLAH-shah"** (not "plah-yah")\n- **¿Cómo te llamás?** &rarr; pronounced **"¿Cómo te shah-MAHS?"**\n\n### 2. El Voseo (Vos vs Tú)\nIn Argentina, the informal second-person pronoun is **VOS** (never *tú*), which takes distinct verb conjugations accented on the final syllable:\n- Standard Spanish: *tú eres* (you are) &rarr; Argentine: **vos sos**\n- Standard Spanish: *tú tienes* (you have) &rarr; Argentine: **vos tenés**\n- Standard Spanish: *tú puedes* (you can) &rarr; Argentine: **vos podés**\n- Standard Spanish: *tú hablas* (you speak) &rarr; Argentine: **vos hablás**\n\n### 3. Argentine Greeting Expressions\n- **¡Che!** &rarr; The universal Argentine interjection ("Hey! / Pal / Mate!")\n- **¿Qué hacés, che?** &rarr; "What\'s up, mate? / How are you doing?"\n- **¡Hola! ¿Cómo andás?** &rarr; "Hello! How\'s it going?"\n- **Todo bien** &rarr; "All good / Everything\'s great"',
      examples: [
        { target: 'calle', reading: 'CAH-sheh', translation: 'street (ll = [ʃ] sheísmo)' },
        { target: 'yo', reading: 'sho', translation: 'I / me (y = [ʃ] sheísmo)' },
        { target: 'vos sos', reading: 'vohs sohs', translation: 'you are (Argentine voseo pronoun and verb)' },
        { target: '¿Qué hacés?', reading: 'keh ah-SEHS', translation: 'What are you doing? / How are you?' }
      ],
      mnemonics: [
        'In Argentina: LL and Y make the "SH" sound (Yo me llamo = Sho me shah-mo), and friends say "Vos sos" and "Che"!'
      ],
      culturalNotes: [
        'The melodious lilt of Rioplatense Spanish reflects massive 19th-century Italian immigration to Buenos Aires, shaping the tango culture and the rich urban slang known as Lunfardo.'
      ]
    },
    guidedPractice: {
      items: [
        {
          prompt: 'In Argentine Rioplatense Spanish, how are the letters «LL» and «Y» pronounced (e.g. in «calle» and «yo»)?',
          options: [
            'As an English "SH" [ʃ] or "ZH" [ʒ] sound ("CAH-sheh", "SHO")',
            'As an English "Y" sound',
            'As an English "L" sound',
            'Silent'
          ],
          answerIndex: 0,
          explanation: 'Argentine Yeísmo rehilado / Sheísmo pronounces LL and Y as [ʃ] (like "shoe").'
        },
        {
          prompt: 'What informal second-person pronoun is universally used in Argentina instead of standard «tú»?',
          options: [
            'VOS (e.g. vos sos, vos tenés)',
            'TÚ',
            'USTED',
            'VOSOTROS'
          ],
          answerIndex: 0,
          explanation: 'Argentine Spanish uses the *voseo* system with the pronoun «VOS».'
        }
      ]
    },
    independentPractice: {
      items: [
        {
          prompt: 'How do you say "you are" informally using Argentine voseo?',
          options: [
            'vos sos (Argentine voseo)',
            'tú eres',
            'usted es',
            'vosotros sois'
          ],
          answerIndex: 0,
          explanation: '«vos sos» is the Argentine voseo form of "you are".'
        },
        {
          prompt: 'What iconic Argentine interjection is used to get someone\'s attention ("Hey! / Mate!")?',
          options: [
            '¡Che! (Hey! / Mate!)',
            '¡Oye!',
            '¡Tío!',
            '¡Hombre!'
          ],
          answerIndex: 0,
          explanation: '«¡Che!» is the quintessential Argentine colloquial marker.'
        }
      ]
    },
    checkpointTest: {
      items: [
        {
          type: 'multiple-choice',
          prompt: 'What does the Argentine phrase «¿Cómo andás?» mean?',
          options: [
            'How is it going? / How are you?',
            'Where are you walking?',
            'What is your name?',
            'Goodbye'
          ],
          answerIndex: 0,
          explanation: '«¿Cómo andás?» is the classic Argentine greeting for "How are you doing?".'
        },
        {
          type: 'typed-recall',
          prompt: 'Type the 3-letter Argentine interjection for "Hey! / Mate!" (c-h-e):',
          acceptedAnswers: [
            'che',
            'Che',
            '¡che!',
            '¡Che!'
          ],
          explanation: '«che» = Hey! / Mate!'
        }
      ]
    }
  };
});

console.log('Finished updating French, Romanian, Swahili, Argentine Spanish!');
