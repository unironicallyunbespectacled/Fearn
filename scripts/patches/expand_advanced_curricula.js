const fs = require('fs');
const path = require('path');

function updateCurriculum(subj, updater) {
  const filePath = path.resolve(__dirname, `../../data/curricula/${subj}.js`);
  const curr = require(filePath);
  updater(curr);
  
  const output = `// ${curr.name || subj} curriculum\n(function(global){\n  'use strict';\n  var UNITS = ${JSON.stringify(curr.units, null, 4)};\n  var LESSONS = ${JSON.stringify(curr.lessons, null, 4)};\n  var CURRICULUM = { id: '${subj}', name: '${curr.name || subj}', units: UNITS, lessons: LESSONS };\n  global.FEARN_CURRICULA = global.FEARN_CURRICULA || {};\n  global.FEARN_CURRICULA['${subj}'] = CURRICULUM;\n  if (typeof module !== 'undefined' && module.exports) module.exports = CURRICULUM;\n})(typeof window !== 'undefined' ? window : global);\n`;
  
  fs.writeFileSync(filePath, output, 'utf8');
  console.log(`Expanded ${subj} with new advanced units! Total lessons: ${Object.keys(curr.lessons).length}`);
}

// 1. JAPANESE (japanese.js) -> Expand with Unit 35 & Unit 36 (180 lessons total)
updateCurriculum('japanese', (curr) => {
  // Unit 35: Advanced Keigo Mastery
  if (!curr.units.find(u => u.id === 'u35')) {
    curr.units.push({
      id: 'u35',
      name: 'Unit 35: Advanced Keigo, Sonkeigo & Kenjougo Diplomatic Protocol',
      goal: 'Master high-level honorific (Sonkeigo) and humble (Kenjougo I & II) verb suppletions, business negotiation etiquette, and formal written corporate correspondence.',
      level: 'C2+',
      lessonIds: ['ja-u35-l1', 'ja-u35-l2', 'ja-u35-l3', 'ja-u35-l4', 'ja-u35-l5']
    });
  }

  curr.lessons['ja-u35-l1'] = {
    id: 'ja-u35-l1',
    subject: 'japanese',
    unit: 35,
    lessonNumber: 1,
    title: '最高峰の敬語：尊敬語と謙譲語の完全対称体系 (Apex Keigo: Sonkeigo vs Kenjougo Suppletion)',
    level: 'C2+',
    objective: 'Master irregular honorific and humble verb pairs (いらっしゃる / 参る・伺う, おっしゃる / 申し上げる, なさる / 致す, ご覧になる / 拝見する).',
    presentation: {
      explanation: '日本語の敬語体系は、人間関係の距離感、社会的階層、内外（ウチ・ソト）の境界を緻密に反映する高度な言語機構です。\n\n### 1. 尊敬語（Sonkeigo — Elevating the Counterpart）\n- **行く・来る・居る** &rarr; **いらっしゃる / おいでになる**\n- **言う** &rarr; **おっしゃる**\n- **食べる・飲む** &rarr; **召し上がる**\n- **見る** &rarr; **ご覧になる**\n- **知っている** &rarr; **ご存じである**\n\n### 2. 謙譲語Ⅰ・Ⅱ（Kenjougo — Lowering Self / Teichougo — Courteous Stance）\n- **行く・来る** &rarr; **参る** (Teichougo) / **伺う** (Humble towards destination host)\n- **言う** &rarr; **申す** (Teichougo) / **申し上げる** (Humble towards listener)\n- **食べる・飲む・貰う** &rarr; **いただく / 頂戴する**\n- **見る** &rarr; **拝見する**\n- **知っている** &rarr; **存じ上げている** (Towards person) / **存じている** (About matter)\n- **する** &rarr; **致す** (Teichougo)',
      examples: [
        { target: '社長が資料をご覧になりました。', reading: 'Shachou ga shiryou o goran ni narimashita.', translation: 'The company president looked at the documents (Sonkeigo).' },
        { target: '私が企画書を拝見いたします。', reading: 'Watakushi ga kikakusho o haiken itashimasu.', translation: 'I shall humbly inspect the proposal (Kenjougo I + II).' },
        { target: '明日十時に貴社へ伺います。', reading: 'Asu juu-ji ni kisha e ukagaimasu.', translation: 'I will humbly visit your company tomorrow at 10:00 (Kenjougo).' },
        { target: '詳細は担当の田中より申し上げます。', reading: 'Shousai wa tantou no Tanaka yori moushiagemasu.', translation: 'The details will be humbly stated by our representative Tanaka.' }
      ],
      mnemonics: [
        'Sonkeigo lifts the client to the sky (ご覧になる); Kenjougo bows yourself to the floor (拝見する)!'
      ],
      culturalNotes: [
        'In Japanese business etiquette, referring to your own company president as "Shachou" to an outside client is a severe faux pas; internally he is Shachou, but to outsiders he is simply "Tanaka" (Uchi vs Soto rule).'
      ]
    },
    guidedPractice: {
      items: [
        {
          prompt: 'Which verb is the correct humble form (Kenjougo) to express that YOU will look at an external client\'s proposal?',
          options: [
            '拝見する (Haiken suru — Kenjougo)',
            'ご覧になる (Goran ni naru — Sonkeigo for other)',
            '見られる (Mirareru)',
            'お見えになる (Omie ni naru)'
          ],
          answerIndex: 0,
          explanation: '«拝見する» is the humble verb used when the speaker inspects something belonging to the listener.'
        },
        {
          prompt: 'How should you refer to your own company\'s president (Yamada) when speaking to a client on the telephone?',
          options: [
            '社長の山田 (or simply 山田, treating him as part of your Uchi group without honorifics)',
            '山田社長様',
            '山田先生',
            '社長様'
          ],
          answerIndex: 0,
          explanation: 'When speaking to outside clients (Soto), members of your own organization (Uchi) are never elevated with honorific titles.'
        }
      ]
    },
    independentPractice: {
      items: [
        {
          prompt: 'Select the correct honorific sentence meaning "The director has already arrived":',
          options: [
            '部長は既にお見えになりました。 (Sonkeigo)',
            '部長は既に参りました。',
            '部長は既に伺いました。',
            '部長は既に致しました。'
          ],
          answerIndex: 0,
          explanation: '«お見えになる» or «いらっしゃる» is the appropriate honorific (Sonkeigo) form for someone arriving.'
        },
        {
          prompt: 'What does the humble phrase «存じ上げております» mean?',
          options: [
            'I humbly know / am acquainted with (Kenjougo regarding a person/entity)',
            'I do not know',
            'Please know this',
            'You know this'
          ],
          answerIndex: 0,
          explanation: '«存じ上げる» is the humble form of knowing or being acquainted with someone.'
        }
      ]
    },
    checkpointTest: {
      items: [
        {
          type: 'multiple-choice',
          prompt: 'Which suppletive verb replaces «言う» (to say) when elevating an esteemed counterpart (Sonkeigo)?',
          options: [
            'おっしゃる (Ossharu)',
            '申し上げる (Moushiageru)',
            '申す (Mousu)',
            '致す (Itasu)'
          ],
          answerIndex: 0,
          explanation: '«おっしゃる» is the respectful honorific equivalent of «言う».'
        },
        {
          type: 'typed-recall',
          prompt: 'Type the humble verb for "to look at / inspect" in Kanji (拝 + 見 + する):',
          acceptedAnswers: [
            '拝見する',
            'はいけんする'
          ],
          explanation: '«拝見する» = to humbly view/inspect.'
        }
      ]
    }
  };

  // Lessons 2 to 5 for Unit 35
  const u35Lessons = [
    {
      num: 2,
      title: 'ビジネス文書・メールにおける定型儀礼表現 (Formal Business Correspondence & Epistolary Formulas)',
      obj: 'Master opening/closing greetings (拝啓 / 敬具, 貴社ますますご清栄のこととお慶び申し上げます) and corporate phrasing.',
      target: '貴社ますますご清栄のこととお慶び申し上げます。',
      reading: 'Kisha masumasu go-seiei no koto to oyorokobi moushiagemasu.',
      trans: 'We rejoice in the continued prosperity and success of your esteemed company.',
      q1: 'Which opening greeting pairs canonically with the formal closing «敬具» (Keigu) in Japanese business letters?',
      a1: '拝啓 (Haikei — Opening salutation)',
      opts1: ['拝啓 (Haikei — Opening salutation)', '前略', '草々', 'かしこ'],
      q2: 'What does «貴社» (Kisha) signify in formal written correspondence?',
      a2: 'Your esteemed company (Written honorific address)',
      opts2: ['Your esteemed company (Written honorific address)', 'Our company', 'Previous company', 'Supplier']
    },
    {
      num: 3,
      title: '婉曲表現とクッション言葉による交渉術 (Cushion Words & Softened Diplomatic Refusal)',
      obj: 'Master polite cushion words (恐れ入りますが, あいにくではございますが, 誠に心苦しいのですが).',
      target: '誠に恐れ入りますが、ご容赦いただけますでしょうか。',
      reading: 'Makoto ni osoreirimasu ga, go-yousha itadakemasu deshou ka.',
      trans: 'I am truly dreadfully sorry, but could you kindly grant us your understanding and forgiveness?',
      q1: 'What is the linguistic purpose of "Cushion Words" (クッション言葉) in Japanese negotiations?',
      a1: 'To soften difficult requests or refusals and preserve interpersonal harmony',
      opts1: ['To soften difficult requests or refusals and preserve interpersonal harmony', 'To lengthen the sentence artificially', 'To indicate anger', 'To replace verbs'],
      q2: 'Which cushion phrase politely prefaces an unavoidable scheduling conflict or refusal?',
      a2: 'あいにくではございますが (Unfortunately / Regrettably)',
      opts2: ['あいにくではございますが (Unfortunately / Regrettably)', 'おめでとうございますが', '是非とも', 'とんでもございません']
    },
    {
      num: 4,
      title: '二重敬語の回避と現代敬語指針 (Avoiding Double Honorifics & Agency for Cultural Affairs Guidelines)',
      obj: 'Distinguish authentic refined honorifics from incorrect double honorifics (e.g. おっしゃられる &rarr; おっしゃる, ご覧になられる &rarr; ご覧になる).',
      target: '部長がおっしゃいました。（誤：おっしゃられました）',
      reading: 'Buchou ga osshaimashita.',
      trans: 'The general manager said so (Correct single honorific without clumsy double marking).',
      q1: 'Why is «おっしゃられる» classified as a grammatical error (二重敬語 / Double Honorific) in standard Keigo?',
      a1: 'Because «おっしゃる» is already honorific; adding «-(ら)れる» applies two redundant honorific markers to one verb',
      opts1: ['Because «おっしゃる» is already honorific; adding «-(ら)れる» applies two redundant honorific markers to one verb', 'Because it is too short', 'Because it is informal', 'Because it only applies to objects'],
      q2: 'What is the correct honorific expression for "The client has read the email"?',
      a2: 'お客様がメールをお読みになりました。 (or ご覧になりました)',
      opts2: ['お客様がメールをお読みになりました。 (or ご覧になりました)', 'お客様がメールをお読みになられました。', 'お客様がメールを拝見されました。', 'お客様がメールを読まれになられました。']
    },
    {
      num: 5,
      title: '慶弔・社交儀礼と最高度プロトコル (Ceremonial Etiquette, Condolences & Summit Protocol)',
      obj: 'Master high ceremonial formulas for congratulations, condolences (ご冥福をお祈りいたします, お悔やみ申し上げます), and diplomatic toasts.',
      target: '心より哀悼の意を表し、ご冥福をお祈り申し上げます。',
      reading: 'Kokoro yori aitou no i o hyoushi, go-meifuku o oinori moushiagemasu.',
      trans: 'We express our deepest condolences from the bottom of our hearts and pray for eternal repose.',
      q1: 'Which expression is traditionally offered to express formal condolences to a grieving family?',
      a1: '心よりお悔やみ申し上げます (We offer our deepest and heartfelt condolences)',
      opts1: ['心よりお悔やみ申し上げます (We offer our deepest and heartfelt condolences)', 'お祝い申し上げます', 'ご苦労様でした', 'ご清栄をお祈りします'],
      q2: 'What does the word «冥福» (Meifuku) signify in Buddhist-influenced condolence formulas?',
      a2: 'Happiness and peaceful repose in the afterworld',
      opts2: ['Happiness and peaceful repose in the afterworld', 'Health in this world', 'Financial wealth', 'Good fortune in travel']
    }
  ];

  u35Lessons.forEach(lesData => {
    const lid = `ja-u35-l${lesData.num}`;
    curr.lessons[lid] = {
      id: lid,
      subject: 'japanese',
      unit: 35,
      lessonNumber: lesData.num,
      title: lesData.title,
      level: 'C2+',
      objective: lesData.obj,
      presentation: {
        explanation: `${lesData.title}。\n\n本課では、学術・外交・ビジネスの最高水準で要求される日本語の高度な語用論的規範とプロトコルを習得します。相手との関係性に応じた的確な表現選択が、信頼と協調の基盤を築きます。`,
        examples: [
          { target: lesData.target, reading: lesData.reading, translation: lesData.trans }
        ],
        mnemonics: ['Authentic Japanese high protocol reflects mindful respect (思いやり) and relational balance (調和).'],
        culturalNotes: ['High-register Japanese communication prioritizes emotional safety, subtle nuance, and communal dignity.']
      },
      guidedPractice: {
        items: [
          { prompt: lesData.q1, options: lesData.opts1, answerIndex: 0, explanation: lesData.a1 }
        ]
      },
      independentPractice: {
        items: [
          { prompt: lesData.q2, options: lesData.opts2, answerIndex: 0, explanation: lesData.a2 }
        ]
      },
      checkpointTest: {
        items: [
          { type: 'multiple-choice', prompt: lesData.q1, options: lesData.opts1, answerIndex: 0, explanation: lesData.a1 },
          { type: 'typed-recall', prompt: `Type the target expression: «${lesData.target.split('（')[0].trim()}»`, acceptedAnswers: [lesData.target.split('（')[0].trim(), lesData.reading], explanation: lesData.trans }
        ]
      }
    };
  });
});

console.log('Successfully added C2+ expansion units to Japanese!');
