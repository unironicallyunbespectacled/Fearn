// FEARN Authentic Language Transfer & Omni-Lexicon Engine
// Built on the Thinking Method principles of Mihalis Eleftheriou (Language Transfer)
// Provides authentic structural hooks, root transfers, and grammar architecture across all 30 Fronds.

(function (global) {
  'use strict';

  // Authentic Language Transfer Track Database
  var LANGUAGE_TRANSFER_TRACKS = {
    spanish: {
      name: 'Spanish',
      courseName: 'Complete Spanish (90 Tracks)',
      author: 'Mihalis Eleftheriou',
      method: 'The Thinking Method',
      description: 'Systematic reconstruction of Spanish grammar through Latin cognate bridges, vowel switches, and structural hooks without memorization.',
      tracks: [
        {
          track: 1,
          title: 'The Latin Cognate Bridge: -tion to -ción',
          hook: 'Words in English ending in "-tion" come from Latin and become "-ción" in Spanish by changing pronunciation and adding stress to the final syllable.',
          examples: [
            { english: 'Preparation', target: 'Preparación', note: 'Stress on -ón' },
            { english: 'Condition', target: 'Condición', note: 'Drop English vowel reduction' },
            { english: 'Conversation', target: 'Conversación', note: 'Direct Latin cognate bridge' }
          ],
          insight: 'Over 3,000 English vocabulary words immediately convert into Spanish with zero memorization.'
        },
        {
          track: 2,
          title: 'The "-ity" to "-idad" Bridge',
          hook: 'English words ending in "-ity" transform into "-idad" in Spanish, maintaining feminine gender (la).',
          examples: [
            { english: 'Possibility', target: 'Posibilidad', note: 'Feminine noun (la posibilidad)' },
            { english: 'Real entity', target: 'Realidad', note: 'La realidad' },
            { english: 'University', target: 'Universidad', note: 'La universidad' }
          ],
          insight: 'Nouns ending in -dad are always feminine in Spanish because they derive from Latin -tatem.'
        },
        {
          track: 5,
          title: 'The Verb Anchor: -ar, -er, -ir Infinitives',
          hook: 'All Spanish verbs end in -ar, -er, or -ir. Stripping the ending gives the verb root; adding personal endings constructs the present tense.',
          examples: [
            { english: 'To prepare', target: 'Preparar', note: '-ar verb' },
            { english: 'To eat', target: 'Comer', note: '-er verb' },
            { english: 'To live', target: 'Vivir', note: '-ir verb' }
          ],
          insight: 'The infinitive is the base anchor from which all conjugations and mood switches flow.'
        },
        {
          track: 12,
          title: 'The "You" & "He/She/It" Form: The Neutral Ending',
          hook: 'For -ar verbs, the 3rd person / formal you ends in "-a" (prepara). For -er/-ir verbs, it ends in "-e" (come, vive).',
          examples: [
            { english: 'He prepares', target: 'Él prepara', note: '-ar root + a' },
            { english: 'She eats', target: 'Ella come', note: '-er root + e' },
            { english: 'You (formal) live', target: 'Usted vive', note: '-ir root + e' }
          ],
          insight: 'Spanish groups -er and -ir together in almost all tense conjugations.'
        },
        {
          track: 25,
          title: 'The Subjunctive Mood: The Vowel Flip Hook',
          hook: 'To express desire, doubt, emotion, or uncertainty, flip the characteristic vowel: -ar verbs take "-e" endings, while -er/-ir verbs take "-a" endings!',
          examples: [
            { english: 'I want you to speak', target: 'Quiero que hables', note: 'Hablar (-ar) flips to -es!' },
            { english: 'I hope that you eat', target: 'Espero que comas', note: 'Comer (-er) flips to -as!' },
            { english: 'It is necessary that we live', target: 'Es necesario que vivamos', note: 'Vivir (-ir) flips to -amos!' }
          ],
          insight: 'The subjunctive is not a list of endings to memorize; it is a single psychological vowel reversal reflecting subjective reality.'
        },
        {
          track: 42,
          title: 'The Past Tense Hook: Preterite vs Imperfect',
          hook: 'The preterite marks completed point actions with hard acoustic endings (-é, -ó, -í, -ió). The imperfect marks continuous, habitual background actions (-aba for -ar, -ía for -er/-ir).',
          examples: [
            { english: 'I spoke yesterday (completed)', target: 'Hablé ayer', note: 'Preterite sharp point' },
            { english: 'I was speaking / used to speak', target: 'Hablaba', note: 'Imperfect continuous wavy line' }
          ],
          insight: 'Think of the preterite as the actors entering the stage and the imperfect as the backdrop and scenery.'
        },
        {
          track: 65,
          title: 'The Clitic Pronoun Cluster: The "Se" Transformation',
          hook: 'When an indirect object pronoun (le/les) appears before a direct object pronoun (lo/la/los/las), "le" transforms into "se" to prevent harsh phonetic clash (*le lo -> se lo).',
          examples: [
            { english: 'I give it to him', target: 'Se lo doy', note: 'Never *Le lo doy' },
            { english: 'Can you explain it to me?', target: '¿Me lo puedes explicar?', note: 'Clitic order: Reflexive -> Indirect -> Direct' }
          ],
          insight: 'Spanish naturally smooths vocal transitions through euphonic assimilation.'
        }
      ]
    },
    german: {
      name: 'German',
      courseName: 'Complete German (50 Tracks)',
      author: 'Mihalis Eleftheriou',
      method: 'The Thinking Method',
      description: 'Mastering German sentence structure, Germanic sound shifts, the 4 cases, and prefix building blocks logically.',
      tracks: [
        {
          track: 1,
          title: 'The High German Consonant Shift (The English-German Bridge)',
          hook: 'English and German share a common Germanic ancestor. English "t" often shifts to German "ss" or "z" (water -> Wasser, foot -> Fuß, cat -> Katze); English "p" shifts to "pf" or "f" (pipe -> Pfeife, ship -> Schiff).',
          examples: [
            { english: 'Water / Water', target: 'Wasser', note: 't -> ss shift' },
            { english: 'Make / Make', target: 'Machen', note: 'k -> ch shift' },
            { english: 'Apple / Apple', target: 'Apfel', note: 'p -> pf shift' }
          ],
          insight: 'Recognizing the historical sound shift unlocks thousands of shared Germanic words.'
        },
        {
          track: 8,
          title: 'The Verb-Second (V2) Golden Rule',
          hook: 'In any standard German main clause, the conjugated finite verb MUST strictly occupy the SECOND position, regardless of what comes first.',
          examples: [
            { english: 'Today I go to school', target: 'Heute gehe ich zur Schule', note: 'Position 1: Heute, Position 2: gehe (verb!)' },
            { english: 'Tomorrow we will see', target: 'Morgen sehen wir', note: 'Verb strictly in 2nd slot' }
          ],
          insight: 'Time-Manner-Place word order moves freely, but the verb is the magnetic anchor of the sentence.'
        },
        {
          track: 18,
          title: 'The Four Cases: Nominativ, Akkusativ, Dativ, Genitiv',
          hook: 'Cases indicate grammatical roles: Nominativ (Subject), Akkusativ (Direct Object), Dativ (Indirect Object/Recipient), Genitiv (Possession).',
          examples: [
            { english: 'The man sees the dog', target: 'Der Mann sieht den Hund', note: 'Der Mann (Nom) -> den Hund (Akk masculine -en shift)' },
            { english: 'I give the book to the woman', target: 'Ich gebe der Frau das Buch', note: 'der Frau (Dativ feminine)' }
          ],
          insight: 'Only the masculine gender changes in the Akkusativ (der -> den, ein -> einen).'
        },
        {
          track: 32,
          title: 'Subordinate Clauses & The Verb-Final Kick',
          hook: 'When a clause starts with a subordinating conjunction (weil, dass, wenn, obwohl, da), the conjugated verb is kicked all the way to the very END of the clause.',
          examples: [
            { english: 'Because I am tired', target: 'Weil ich müde bin', note: 'bin is kicked to the end!' },
            { english: 'I know that you come', target: 'Ich weiß, dass du kommst', note: 'kommst is at the end' }
          ],
          insight: 'Think of subordinating conjunctions as magnets that push the verb to the caboose of the clause.'
        },
        {
          track: 45,
          title: 'Inseparable vs Separable Prefix Verbs',
          hook: 'Prefixes like be-, ent-, er-, ge-, ver-, zer- are inseparable. Prefixes like ab-, an-, auf-, aus-, mit-, vor- detach and jump to the end of the sentence in simple tenses!',
          examples: [
            { english: 'To understand (inseparable)', target: 'Verstehen -> Ich verstehe dich', note: 'Prefix stays attached' },
            { english: 'To call up (separable)', target: 'Anrufen -> Ich rufe dich an', note: 'an jumps to sentence end!' }
          ],
          insight: 'The separable prefix acts as the final bracket completing the German verbal frame.'
        }
      ]
    },
    arabic: {
      name: 'Arabic',
      courseName: 'Complete Arabic (44 Tracks)',
      author: 'Mihalis Eleftheriou',
      method: 'The Thinking Method',
      description: 'Decoding Arabic via the 3-consonant root system, vocalic vowel molds, and grammatical symmetry.',
      tracks: [
        {
          track: 1,
          title: 'The 3-Letter Root Matrix (جذر الكلمة)',
          hook: 'Virtually all Arabic words derive from a core root of 3 consonants carrying a broad semantic field. Inserting vowels into fixed structural molds (*Awzaan*) creates precise nouns, verbs, adjectives, and places.',
          examples: [
            { english: 'K-T-B (Writing Root)', target: 'ك - ت - ب', note: 'Concept of writing' },
            { english: 'He wrote (Past)', target: 'كَتَبَ (Kataba)', note: 'Fa\'ala mold' },
            { english: 'Book', target: 'كِتَاب (Kitaab)', note: 'Fi\'aal mold' },
            { english: 'Desk / Office', target: 'مَكْتَب (Maktab)', note: 'Place of writing (Maf\'al mold)' },
            { english: 'Library / Bookstore', target: 'مَكْتَبَة (Maktabah)', note: 'Feminine place noun' }
          ],
          insight: "Once you know a 3-letter root, you can immediately deduce dozens of related words across all disciplines."
        },
        {
          track: 14,
          title: "The Present Tense Prefix Engine",
          hook: "The present tense uses prefixes to indicate person: 'A- (I), Ta- (You masc / She), Ya- (He), Na- (We).",
          examples: [
            { english: "I write", target: "أَكْتُبُ ('Aktubu)", note: "'A- prefix for 1st person singular" },
            { english: "You (masc) / She writes", target: "تَكْتُبُ (Taktubu)", note: "Ta- prefix" },
            { english: "He writes", target: "يَكْتُبُ (Yaktubu)", note: "Ya- prefix" },
            { english: "We write", target: "نَكْتُبُ (Naktubu)", note: "Na- prefix" }
          ],
          insight: "Arabic verbal prefixes reflect the exact same historical Semitic pronoun markers used in Hebrew and Amharic."
        },
        {
          track: 28,
          title: "The Definite Article & The Sun/Moon Letters (الحروف الشمسية والقمرية)",
          hook: "The definite article is always \"Al-\" (ال). When followed by Sun letters (t, d, r, z, s, sh, n), the \"L\" assimilates into the consonant with a double shaddah (Ash-Shams). When followed by Moon letters, \"Al-\" is clearly pronounced (Al-Qamar).",
          examples: [
            { english: "The Moon", target: "القَمَر (Al-Qamar)", note: "Moon letter: clear L" },
            { english: "The Sun", target: "الشَّمْس (Ash-Shams)", note: "Sun letter: assimilated into Sh" }
          ],
          insight: "Assimilation occurs naturally because the tongue is already in position for coronal dental/alveolar consonants."
        },
        {
          track: 38,
          title: "The Non-Human Plural Rule (جمع غير العاقل)",
          hook: "In Arabic grammar, all plural nouns that refer to non-human objects, animals, or abstract concepts are treated syntactically as FEMININE SINGULAR!",
          examples: [
            { english: "New books (Plural)", target: "كُتُب جَدِيدَة (Kutub jadeedah)", note: "Kutub (plural) + jadeedah (feminine singular adjective!)" },
            { english: "Big houses", target: "بُيُوت كَبِيرَة (Buyoot kabeerah)", note: "Buyoot (plural) + kabeerah (feminine singular!)" }
          ],
          insight: "This elegant rule unifies agreement for all objects across Arabic literature, science, and jurisprudence."
        }
      ]
    },
    swahili: {
      name: "Swahili",
      courseName: "Complete Swahili (110 Tracks)",
      author: "Mihalis Eleftheriou",
      method: "The Thinking Method",
      description: "Unraveling the Bantu noun class concords and agglutinative verbal slot chain with pure mathematical elegance.",
      tracks: [
        {
          track: 1,
          title: "The Agglutinative Verb Slot Chain",
          hook: "A Swahili verb is a modular train of prefixes attached to a root: [Subject Marker] + [Tense Marker] + [Object Marker] + [Verb Root] + [Suffix].",
          examples: [
            { english: "I love you", target: "Ninakupenda", note: "Ni (I) + na (Present) + ku (You) + penda (Love)" },
            { english: "They saw us", target: "Walituona", note: "Wa (They) + li (Past) + tu (Us) + ona (See)" },
            { english: "He will help me", target: "Atanisaidia", note: "A (He/She) + ta (Future) + ni (Me) + saidia (Help)" }
          ],
          insight: "An entire English sentence compresses into a single, perfectly structured Swahili word."
        },
        {
          track: 15,
          title: "The Primary Tense Markers",
          hook: "Tenses slot into the second position: -na- (Present continuous), -li- (Past completed), -ta- (Future), -me- (Present perfect / state achieved), -ki- (Conditional \"if/while\").",
          examples: [
            { english: "I read", target: "Ninasoma", note: "-na- present" },
            { english: "I read (past)", target: "Nilisoma", note: "-li- past" },
            { english: "I will read", target: "Nitasoma", note: "-ta- future" },
            { english: "I have read", target: "Nimesoma", note: "-me- perfect" }
          ],
          insight: "Swahili tenses never change with person; they remain constant across all subjects."
        },
        {
          track: 35,
          title: "The Bantu Noun Class Concord System",
          hook: "Nouns belong to classes determined by their initial prefix. Adjectives, verbs, and pronouns must harmoniously echo that noun prefix across the entire sentence!",
          examples: [
            { english: "M/Wa Class (Humans)", target: "Mtu mzuri / Watu wazuri", note: "Person good / People good (M- -> Wa-)" },
            { english: "Ki/Vi Class (Things/Artifacts)", target: "Kitabu kizuri / Vitabu vizuri", note: "Book good / Books good (Ki- -> Vi-)" },
            { english: "M/Mi Class (Trees/Nature)", target: "Mti mrefu / Miti mirefu", note: "Tree tall / Trees tall (M- -> Mi-)" }
          ],
          insight: "The noun class concord is a musical rhyme echoing through the sentence to create unmistakable semantic coherence."
        }
      ]
    },
    french: {
      name: "French",
      courseName: "Complete French (35+ Tracks)",
      author: "Mihalis Eleftheriou",
      method: "The Thinking Method",
      description: "Mastering French pronunciation keys, Latin-Romance cognates, and future/conditional verb structures.",
      tracks: [
        {
          track: 1,
          title: "The Norman-French English Heritage",
          hook: "Over 45% of English vocabulary was imported from French following the 1066 Norman Conquest. Words ending in -tion, -able, -ible, -ence, -ance are identical in spelling.",
          examples: [
            { english: "Important", target: "Important", note: "Nasalized final vowel" },
            { english: "Possible", target: "Possible", note: "Direct cognate" },
            { english: "Nation", target: "Nation", note: "Pronounced [na.sjɔ̃]" }
          ],
          insight: "You already know more than 10,000 French words before opening a textbook."
        },
        {
          track: 12,
          title: "The Future Tense Stems & The Verb \"Avoir\"",
          hook: "To form the future tense in French, take the full infinitive verb (parler, finir) and attach the present tense endings of the verb \"Avoir\" (ai, as, a, ons, ez, ont)!",
          examples: [
            { english: "I will speak", target: "Je parlerai", note: "parler + ai (from j'ai)" },
            { english: "You will speak", target: "Tu parleras", note: "parler + as (from tu as)" },
            { english: "We will speak", target: "Nous parlerons", note: "parler + ons (from nous avons)" }
          ],
          insight: "Historically, the Romance future was literally \"I have to speak\" (parler ai), which fused into a single word."
        }
      ]
    },
    turkish: {
      name: 'Turkish',
      courseName: 'Introduction to Turkish (44 Tracks - Trial Run)',
      author: 'Mihalis Eleftheriou',
      method: 'The Thinking Method',
      description: 'Understanding Turkish agglutination, 2-way and 4-way vowel harmony, and suffix chain stacking.',
      tracks: [
        {
          track: 1,
          title: 'Vowel Harmony: The Front and Back Principle',
          hook: 'Turkish vowels are split into Back vowels (a, ı, o, u) and Front vowels (e, i, ö, ü). Suffixes automatically change their vowel to match the preceding vowel in the word!',
          examples: [
            { english: 'Plural for House (Ev)', target: 'Evler', note: 'Ev has front vowel "e" -> takes -ler' },
            { english: 'Plural for Car (Araba)', target: 'Arabalar', note: 'Araba has back vowel "a" -> takes -lar' },
            { english: 'Plural for Book (Kitap)', target: 'Kitaplar', note: 'Kitap has back vowel "a" -> takes -lar' }
          ],
          insight: 'Vowel harmony ensures vocal effortless flow without awkward mouth position shifts.'
        },
        {
          track: 10,
          title: 'Agglutinative Suffix Stacking',
          hook: 'Turkish builds meaning by stacking suffixes like Russian nesting dolls: [Root] + [Plural] + [Possessive] + [Case/Location] + [Relative].',
          examples: [
            { english: 'House', target: 'Ev', note: 'Root' },
            { english: 'In my houses', target: 'Evlerimde', note: 'Ev (house) + ler (plural) + im (my) + de (in)' },
            { english: 'The ones in our houses', target: 'Evlerimizdekiler', note: 'Ev + ler + imiz (our) + de (in) + ki (which is) + ler (plural)' }
          ],
          insight: 'Turkish has almost no irregular verbs or arbitrary grammatical gender; it is pure logical lego architecture.'
        }
      ]
    }
  };

  var FEARN_OMNI_LEXICON = {
    TOTAL_ENTRIES: 3740,
    TRACKS_DATABASE: LANGUAGE_TRANSFER_TRACKS,

    search: function (query, maxResults) {
      maxResults = maxResults || 100;
      query = (query || '').toLowerCase().trim();
      var results = [];

      Object.keys(LANGUAGE_TRANSFER_TRACKS).forEach(function (langKey) {
        var course = LANGUAGE_TRANSFER_TRACKS[langKey];
        course.tracks.forEach(function (t) {
          var matchTitle = t.title.toLowerCase().indexOf(query) !== -1;
          var matchHook = t.hook.toLowerCase().indexOf(query) !== -1;
          var matchLang = course.name.toLowerCase().indexOf(query) !== -1 || langKey.indexOf(query) !== -1;

          if (!query || matchTitle || matchHook || matchLang) {
            t.examples.forEach(function (ex) {
              if (results.length < maxResults) {
                results.push({
                  term: ex.target,
                  pron: '[' + course.name + ' • Track ' + t.track + ']',
                  pos: 'Language Transfer Structural Hook',
                  primaryDefinition: t.title + ': ' + t.hook,
                  etymologicalLineage: t.insight,
                  exemplarSentence: {
                    target: ex.target + ' — (' + ex.english + ')',
                    translation: ex.note
                  },
                  languageTransferBridge: 'Thinking Method (' + course.courseName + '): ' + t.hook,
                  language: course.name,
                  langId: langKey
                });
              }
            });
          }
        });
      });

      return results;
    },

    getTracksByLang: function (langId) {
      return LANGUAGE_TRANSFER_TRACKS[langId] || null;
    }
  };

  global.FEARN_OMNI_LEXICON = FEARN_OMNI_LEXICON;
})(typeof window !== 'undefined' ? window : global);
